"use strict";

// Koach Learn course (Portuguese translation of shared/crypto-and-blockchain.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Explains how crypto works and its risks; it does NOT recommend buying (README rule 6). US agencies (FTC, FDIC, SEC, CFTC, FBI IC3) keep their names.

const FTC_CRYPTO = { name: "FTC: O que saber sobre criptomoedas e burlas (What to know about cryptocurrency and scams)", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain-pt",
  lang: "pt",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Compreender as Criptomoedas e a Blockchain",
  skills: "Explicar a blockchain com palavras simples, Explicar como as criptomoedas são enviadas e guardadas, Dizer quais são os riscos, Reconhecer burlas com criptomoedas, Denunciar uma burla",
  outcome: "explicar com palavras simples como funcionam uma blockchain e uma criptomoeda, dizer quais são os principais riscos e comparar qualquer oferta ou mensagem sobre criptomoedas com os sinais de alerta de uma burla, para tomar a sua própria decisão com cuidado e saber onde denunciar uma fraude.",
  about: [
    "Ouve falar da Bitcoin e das criptomoedas nas notícias, no trabalho, na família e em anúncios. Algumas pessoas ganham dinheiro; muitas perdem, e as criptomoedas são uma das formas mais comuns de os burlões pedirem para ser pagos. Este curso explica como funcionam, para que você as compreenda e se proteja a si e às pessoas de quem gosta.",
    "No Capítulo 1 vai aprender o que é uma blockchain, o que é uma criptomoeda e como funcionam as carteiras e as chaves. No Capítulo 2 vai aprender os riscos, os sinais de alerta das burlas com criptomoedas e onde denunciar uma fraude.",
    "Este curso não lhe diz se deve comprar criptomoedas. Não é aconselhamento financeiro. Para decisões sobre dinheiro, fale com um profissional licenciado que você mesmo escolha. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um \"cartão de segurança das criptomoedas\" de uma página para você ou para um familiar: duas frases sobre o que são uma blockchain e uma criptomoeda, três riscos, quatro sinais de alerta de uma burla com criptomoedas e os lugares oficiais para denunciar uma fraude. Depois leia um anúncio ou uma mensagem verdadeira sobre criptomoedas (de um email, uma SMS ou das redes sociais) e marque os sinais de alerta que mostra.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que ouvem falar da Bitcoin e das criptomoedas nas notícias, no trabalho, na família e em anúncios: idosos, os seus filhos adultos e cuidadores, jovens que começam a usar aplicações de dinheiro e membros da comunidade que querem proteger-se a si e aos outros.",
    startingPoint: "Sabem usar um telefone para mensagens, email e redes sociais e podem usar uma aplicação do banco ou um cartão de débito. A maioria não sabe dizer o que é uma blockchain ou uma frase de recuperação, em que é que as criptomoedas são diferentes do dinheiro num banco, nem como costumam funcionar as burlas com criptomoedas.",
    gap: "As criptomoedas são uma das formas mais comuns de os burlões pedirem para ser pagos, e os pagamentos em criptomoedas normalmente não podem ser anulados. Quem não as compreende pode perder as suas poupanças em investimentos falsos, burlas românticas, falsos funcionários do governo e burlas de recuperação, ou partilhar uma frase de recuperação e perder tudo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra sobre criptomoedas é explicada com uma imagem do dia a dia",
      "Aparelhos: um telefone ou computador para ler as páginas oficiais de aviso; não é preciso nenhuma aplicação nem conta de criptomoedas",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Não é aconselhamento financeiro: o curso nunca diz aos alunos para comprar ou vender; as decisões sobre dinheiro são para um profissional licenciado que o aluno escolhe",
      "Privacidade e segurança: os alunos nunca partilham uma frase de recuperação nem uma chave privada, e nunca enviam dinheiro durante a prática"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a imagem do caderno partilhado", action: "explicar o que é uma blockchain, usando as palavras bloco, cadeia e descentralizada", standard: "em duas ou três frases simples, sem erros sobre a forma como os registos são guardados" },
    { id: "O2", condition: "Sem notas", action: "explicar o que é uma criptomoeda e fazer a lista do que a torna diferente do dinheiro numa conta bancária com seguro", standard: "dizendo pelo menos três diferenças, incluindo que os pagamentos em criptomoedas normalmente não podem ser anulados" },
    { id: "O3", condition: "Com as palavras carteira, endereço público, frase de recuperação e corretora", action: "descrever o que é cada uma e identificar quais nunca devem ser partilhadas", standard: "descrevendo cada uma corretamente e mantendo sempre em segredo a frase de recuperação e a chave privada" },
    { id: "O4", condition: "Sem notas", action: "dizer quais são os quatro principais riscos das criptomoedas e uma forma de se proteger de cada um", standard: "dizendo corretamente os quatro riscos (preço, perda, empresa e burla)" },
    { id: "O5", condition: "Com um anúncio, mensagem ou publicação verdadeira sobre criptomoedas", action: "compará-lo com os sinais de alerta de uma burla com criptomoedas e escolher uma resposta segura", standard: "marcando todos os sinais de alerta que mostra e escolhendo parar, não pagar e falar com alguém de confiança" },
    { id: "O6", condition: "Com uma burla com criptomoedas que aconteceu a você ou a alguém que conhece", action: "fazer a lista dos lugares oficiais para a denunciar e dos dados que deve anotar", standard: "dizendo pelo menos dois sites oficiais de denúncia e pelo menos quatro dados a registar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam as criptomoedas e a blockchain",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é uma blockchain",
          minutes: 5,
          goal: "Explicar uma blockchain com palavras simples usando uma imagem fácil.",
          text: [
            "Imagine um caderno de pagamentos de que milhares de computadores guardam, cada um, uma cópia. De poucos em poucos minutos junta-se uma página nova de pagamentos. Cada página fica presa à página anterior com uma espécie de impressão digital feita com matemática, por isso, se alguém mudar uma página antiga, todas as outras cópias mostram que não bate certo.",
            "Esse caderno partilhado é uma blockchain (em português, \"cadeia de blocos\"). Cada página é um bloco, e as páginas estão ligadas em cadeia, por ordem. Nenhum banco nem empresa guarda o caderno sozinho; quem o guarda é a rede de computadores. A isto chama-se descentralizado.",
            "Por causa desta forma de funcionar, um pagamento escrito na blockchain é muito difícil de mudar ou de anular. A maioria das blockchains também é pública: qualquer pessoa pode consultar os pagamentos, mesmo que os nomes das pessoas por trás deles não apareçam."
          ],
          words: [["Blockchain", "um registo partilhado de transações, guardado por muitos computadores, em que cada bloco novo está ligado ao anterior."], ["Bloco", "um grupo de transações que entram juntas na blockchain."], ["Descentralizado", "gerido por uma rede de muitos computadores, e não por um só banco ou empresa."], ["Livro de registos", "um registo de pagamentos, como um livro de contas."]],
          slides: [
            { title: "Imagine um caderno partilhado", bullets: ["Milhares de computadores guardam uma cópia", "Juntam-se muitas vezes páginas novas de pagamentos", "Cada página fica presa à anterior"] },
            { title: "Palavras da blockchain", bullets: ["Bloco = uma página de pagamentos", "Cadeia = páginas ligadas por ordem", "Descentralizado = nenhum banco manda sozinho"] },
            { title: "O que isso quer dizer para você", bullets: ["Os pagamentos são muito difíceis de mudar ou anular", "A maioria das blockchains é um registo público"] }
          ],
          tryIt: "Explique uma blockchain a alguém (ou em voz alta para si) usando a imagem do caderno partilhado. Use as palavras bloco, cadeia e descentralizado.",
          youCanNow: "explicar o que é uma blockchain e porque os seus registos são difíceis de mudar.",
          quickCheck: [
            { objective: "O1", q: "Na imagem do caderno partilhado, o que é um bloco?", options: ["O caderno inteiro", "O banco dono do caderno", "Uma página de pagamentos que se junta ao caderno", "Uma palavra-passe do caderno"], answer: 2, why: "Cada página de pagamentos é um bloco, e as páginas estão ligadas em cadeia, por ordem." },
            { objective: "O1", q: "Alguém diz-lhe que consegue mudar às escondidas um pagamento antigo numa blockchain pública. O que pensaria?", options: ["É muito pouco provável, porque as outras cópias não iam bater certo", "É fácil, porque uma só empresa guarda o caderno", "É normal, porque as blockchains são privadas", "É verdade, porque os blocos não estão ligados"], answer: 0, why: "Cada bloco está preso ao anterior, por isso uma página mudada não bateria certo com as outras cópias." }
          ]
        },
        {
          objectives: ["O2"],
          title: "O que é uma criptomoeda",
          minutes: 5,
          goal: "Explicar o que é uma criptomoeda e em que é diferente dos dólares num banco.",
          text: [
            "Uma criptomoeda (cripto) é dinheiro digital registado numa blockchain. A Bitcoin foi a primeira; hoje há milhares, como a Ether. Uma stablecoin (\"moeda estável\") é um tipo de criptomoeda feito para ficar perto do valor de uma moeda normal, como o dólar dos Estados Unidos, mas mesmo assim pode falhar.",
            "As criptomoedas não são emitidas por um governo, e o seu preço sobe e desce conforme o que as pessoas estão dispostas a pagar. Os preços podem subir ou cair muito num só dia.",
            "Os pagamentos em criptomoedas são diferentes dos pagamentos com cartão. A FTC (a agência dos EUA que protege os consumidores) diz que os pagamentos em criptomoedas não têm as proteções legais que os cartões de crédito e de débito têm, e normalmente não podem ser anulados. O dinheiro em criptomoedas também não é o mesmo que dinheiro numa conta bancária com seguro."
          ],
          words: [["Criptomoeda (cripto)", "dinheiro digital registado numa blockchain, como a Bitcoin ou a Ether."], ["Stablecoin", "criptomoeda feita para ficar perto do valor de uma moeda normal, como o dólar dos Estados Unidos."], ["Volátil", "um preço que pode subir ou descer muito, depressa."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Uma criptomoeda é...", bullets: ["Dinheiro digital registado numa blockchain", "A Bitcoin foi a primeira; a Ether é outra", "As stablecoins tentam igualar uma moeda como o dólar"] },
            { title: "Não é como dólares num banco", bullets: ["Não é emitida por um governo", "O preço pode mudar muito num só dia"] },
            { title: "Não é como um pagamento com cartão", bullets: ["Sem as proteções legais dos cartões (FTC)", "Normalmente não pode ser anulado"] }
          ],
          tryIt: "Escreva três diferenças entre pagar com um cartão de débito e pagar com criptomoedas. Use a página da FTC nas fontes desta lição para verificar a sua resposta.",
          youCanNow: "explicar o que é uma criptomoeda e em que é diferente do dinheiro no banco e dos pagamentos com cartão.",
          quickCheck: [
            { objective: "O2", q: "O que é uma criptomoeda?", options: ["Notas de papel de um governo", "Dinheiro digital registado numa blockchain", "Uma conta poupança num banco", "Um cartão-presente de uma loja"], answer: 1, why: "A criptomoeda é dinheiro digital registado numa blockchain, que não é emitido por um governo." },
            { objective: "O2", q: "Um vendedor pede-lhe para pagar em criptomoedas em vez de usar o seu cartão de crédito. O que deve lembrar?", options: ["As criptomoedas têm mais proteção legal do que um cartão", "Os pagamentos em criptomoedas são sempre fáceis de cancelar", "As criptomoedas têm seguro tal como uma conta bancária", "Os pagamentos em criptomoedas normalmente não podem ser anulados se algo correr mal"], answer: 3, why: "A FTC diz que os pagamentos em criptomoedas não têm as proteções dos cartões e normalmente não podem ser anulados." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Carteiras, chaves e corretoras",
          minutes: 5,
          goal: "Explicar como as criptomoedas são guardadas e enviadas, e o que nunca deve ser partilhado.",
          text: [
            "As criptomoedas são guardadas numa carteira: uma aplicação, um site ou um pequeno aparelho que guarda as suas chaves. O endereço público é como um número de conta que pode dar a alguém para lhe enviar criptomoedas. A chave privada, muitas vezes mostrada como uma frase de recuperação (uma lista de 12 ou 24 palavras), é como a chave-mestra. Quem a tiver controla as criptomoedas.",
            "Nunca partilhe uma frase de recuperação nem uma chave privada com ninguém: nem com o apoio ao cliente, nem com um \"ajudante\", nem com uma aplicação, nem com um assistente de IA. Uma empresa verdadeira nunca a vai pedir. Se a perder, as criptomoedas podem perder-se para sempre.",
            "Uma corretora (em inglês, \"exchange\") é uma empresa onde as pessoas compram, vendem e guardam criptomoedas. As corretoras podem ser atacadas por piratas informáticos ou fechar. Nos Estados Unidos, verifique se a empresa está registada e leia as queixas sobre ela antes de confiar; reguladores como a SEC e a CFTC publicam avisos."
          ],
          words: [["Carteira", "uma aplicação ou aparelho que guarda as chaves das suas criptomoedas."], ["Endereço público", "um código que os outros usam para lhe enviar criptomoedas, como um número de conta."], ["Chave privada / frase de recuperação", "o segredo que controla as criptomoedas; nunca o partilhe."], ["Corretora (exchange)", "uma empresa onde as pessoas compram, vendem e guardam criptomoedas."]],
          sources: [FTC_CRYPTO, { name: "SEC: Enviar uma denúncia ou queixa (Submit a tip or complaint)", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Enviar uma queixa (Submit a complaint)", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Carteira e chaves", bullets: ["Carteira = aplicação ou aparelho que guarda as suas chaves", "Endereço público = como um número de conta", "Chave privada / frase de recuperação = a chave-mestra"] },
            { title: "Nunca partilhe", bullets: ["A sua frase de recuperação ou chave privada", "Nem com o apoio, ajudantes, aplicações ou IA", "As empresas verdadeiras nunca a pedem"] },
            { title: "Corretoras", bullets: ["Empresas para comprar, vender e guardar criptomoedas", "Podem ser atacadas ou fechar", "Veja primeiro as queixas e os avisos dos reguladores"] }
          ],
          tryIt: "Escreva uma frase para cada um: o que é um endereço público, o que é uma frase de recuperação e o que diria se um \"agente de apoio\" lhe pedisse a sua frase de recuperação.",
          youCanNow: "explicar como as criptomoedas são guardadas e enviadas e porque uma frase de recuperação nunca deve ser partilhada.",
          quickCheck: [
            { objective: "O3", q: "O que é uma frase de recuperação?", options: ["Um cumprimento que envia com um pagamento", "O nome de uma corretora", "O seu endereço público", "Uma lista de 12 ou 24 palavras que controla as suas criptomoedas"], answer: 3, why: "Quem tiver a frase de recuperação controla as criptomoedas, como uma chave-mestra." },
            { objective: "O3", q: "Um amigo quer enviar-lhe criptomoedas e pergunta o que deve usar. O que lhe daria?", options: ["A sua frase de recuperação", "A sua chave privada", "O seu endereço público", "O PIN do seu banco"], answer: 2, why: "O endereço público é como um número de conta e pode ser partilhado com segurança para receber criptomoedas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam as criptomoedas e a blockchain",
        questions: [
          { objective: "O1", q: "Que imagem descreve melhor uma blockchain?", options: ["A lista de contactos de um telefone", "A folha de cálculo privada de um banco", "Um cheque em papel", "Um caderno partilhado de pagamentos de que muitos computadores guardam, cada um, uma cópia"], answer: 3, why: "Uma blockchain é um registo partilhado guardado por muitos computadores." },
          { objective: "O1", q: "Porque é difícil mudar um registo antigo numa blockchain?", options: ["Está impresso em papel", "Um juiz guarda-o", "Cada bloco está ligado ao anterior, por isso as mudanças não batem certo com as outras cópias", "É apagado todos os dias"], answer: 2, why: "Os blocos ligados e as muitas cópias fazem as mudanças aparecer." },
          { objective: "O2", q: "O que diz a FTC sobre os pagamentos em criptomoedas, comparados com os cartões de crédito?", options: ["Têm mais proteção", "São iguais", "Não têm as mesmas proteções legais e normalmente não podem ser anulados", "Têm sempre seguro"], answer: 2, why: "A FTC avisa que os pagamentos em criptomoedas não têm as proteções dos cartões." },
          { objective: "O2", q: "O que é uma stablecoin?", options: ["Uma moeda feita de metal", "Um tipo de carteira", "Uma obrigação de poupança do governo", "Uma criptomoeda feita para ficar perto de uma moeda como o dólar"], answer: 3, why: "As stablecoins tentam seguir uma moeda normal, mas mesmo assim podem falhar." },
          { objective: "O3", q: "Alguém do \"apoio da carteira\" pede a sua frase de recuperação de 12 palavras para resolver um problema. O que faz?", options: ["Dá-a para poderem ajudar", "Dá metade", "Escreve-a numa IA para a verificar", "Recusa; as empresas verdadeiras nunca a pedem"], answer: 3, why: "Quem tiver a frase de recuperação controla as criptomoedas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Riscos, burlas e denúncias",
      lessons: [
        {
          objectives: ["O4"],
          title: "Os riscos verdadeiros",
          minutes: 5,
          goal: "Dizer quais são os principais riscos de ter ou de receber criptomoedas.",
          text: [
            "Risco de preço: os preços das criptomoedas podem cair muito, e ninguém pode prometer que voltam a subir. Nunca ponha dinheiro de que precisa para a renda, a comida, as contas ou os medicamentos.",
            "Risco de perda: se perder a sua frase de recuperação, ou enviar criptomoedas para o endereço errado, normalmente perde-as. Os pagamentos normalmente não podem ser anulados.",
            "Risco da empresa: as corretoras e as aplicações podem ser atacadas ou fechar. A FDIC (a agência dos EUA que dá seguro aos depósitos nos bancos) diz que os ativos em criptomoedas não estão cobertos pelo seguro de depósitos da FDIC, que só cobre depósitos em bancos com seguro da FDIC. Risco de burla: as criptomoedas são uma forma de pagamento preferida dos burlões, porque são rápidas e difíceis de recuperar.",
            "Este curso não lhe diz se deve comprar. Se está a pensar nisso, fale com um profissional financeiro licenciado que você mesmo escolha, e leia primeiro os avisos oficiais."
          ],
          words: [["Risco", "a possibilidade de perder dinheiro ou de algo correr mal."], ["Seguro da FDIC", "proteção do governo dos EUA para o dinheiro em contas de depósito bancárias com seguro; não cobre criptomoedas."]],
          sources: [FTC_CRYPTO, { name: "FDIC: Compreender o seguro de depósitos (Understanding deposit insurance)", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Risco de preço", bullets: ["Os preços podem cair muito", "Nunca use dinheiro da renda, da comida, das contas ou dos medicamentos"] },
            { title: "Risco de perda", bullets: ["Frase de recuperação perdida = criptomoedas perdidas", "Endereço errado ou burla = normalmente perdidas"] },
            { title: "Risco da empresa e risco de burla", bullets: ["Aplicações e corretoras podem ser atacadas ou fechar", "As criptomoedas não têm seguro da FDIC", "Os burlões adoram pagamentos em criptomoedas"] },
            { title: "Não é aconselhamento", bullets: ["Este curso não diz para comprar nem vender", "Fale com um profissional licenciado que você escolha"] }
          ],
          tryIt: "Escreva os quatro riscos com as suas palavras: preço, perda, empresa e burla. Para cada um, escreva uma forma de uma pessoa se proteger.",
          youCanNow: "dizer quais são os principais riscos das criptomoedas e explicar porque o dinheiro de que precisa nunca deve ser posto em risco.",
          quickCheck: [
            { objective: "O4", q: "O que é o risco de preço nas criptomoedas?", options: ["O preço pode cair muito e ninguém pode prometer que volta a subir", "O preço é fixado pelo governo", "O preço só sobe com o tempo", "O preço é igual ao do dólar todos os dias"], answer: 0, why: "Os preços das criptomoedas podem cair muito, por isso nunca ponha dinheiro de que precisa para as contas." },
            { objective: "O4", q: "O seu primo quer pôr o dinheiro da renda deste mês em criptomoedas. O que lhe diria?", options: ["Força; os preços voltam sempre a subir", "Não use dinheiro de que precisa para a renda, a comida, as contas ou os medicamentos", "Ponha-o numa corretora, porque as corretoras têm seguro", "Envie-o depressa antes de o preço mudar"], answer: 1, why: "Os preços podem cair muito, por isso o dinheiro para o essencial nunca deve ir para criptomoedas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reconhecer burlas com criptomoedas",
          minutes: 5,
          goal: "Comparar uma oferta ou mensagem sobre criptomoedas com os sinais de alerta de uma burla.",
          text: [
            "A FTC dá uma lista de sinais de burlas com criptomoedas. Só os burlões exigem pagamento em criptomoedas, sobretudo adiantado ou para \"proteger\" o seu dinheiro. Só os burlões garantem lucros ou ganhos grandes e rápidos. As recomendações de pessoas famosas podem ser falsas.",
            "Tenha cuidado com um novo amigo ou namorado da internet que começa a dar dicas de investimento ou pede criptomoedas. Tenha cuidado com chamadas ou SMS que dizem vir de uma agência do governo, de um banco ou de uma empresa de água ou eletricidade, e que dizem que deve dinheiro ou que a sua conta está bloqueada e que tem de pagar em criptomoedas ou numa máquina ATM de criptomoedas.",
            "Tenha também cuidado com empregos que pedem para pagar uma taxa em criptomoedas, e com emails que ameaçam divulgar coisas privadas se não pagar em criptomoedas. Quando vir qualquer uma destas coisas, pare. Não pague, não clique e fale com alguém de confiança."
          ],
          steps: ["Pede-lhe para pagar em criptomoedas ou usar uma máquina ATM de criptomoedas?", "Promete lucros garantidos ou rápidos?", "Veio de um novo amigo da internet, de um contacto romântico ou de um desconhecido?", "Apressa-o ou ameaça-o?", "Se alguma resposta for sim: pare, não pague e confirme com alguém de confiança."],
          words: [["Burla", "um truque para roubar dinheiro ou informações."], ["ATM de criptomoedas", "uma máquina que transforma dinheiro vivo em criptomoedas; os burlões dizem muitas vezes às vítimas para usar uma."], ["Burla romântica", "uma burla em que alguém cria uma relação pela internet para conseguir dinheiro."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Só os burlões...", bullets: ["Exigem pagamento em criptomoedas", "Garantem lucros ou ganhos rápidos", "Usam recomendações falsas de pessoas famosas"] },
            { title: "Tenha cuidado com", bullets: ["Novos amigos da internet que dão dicas de investimento", "Chamadas do \"governo\" ou do \"banco\" a pedir para pagar em criptomoedas", "Empregos que cobram uma taxa em criptomoedas"] },
            { title: "Quando reconhecer uma", bullets: ["Pare", "Não pague nem clique", "Fale com alguém de confiança"] }
          ],
          tryIt: "Encontre um anúncio, mensagem ou publicação nas redes sociais sobre criptomoedas. Responda às cinco perguntas de verificação e anote todos os sinais de alerta que mostra.",
          youCanNow: "comparar uma oferta ou mensagem sobre criptomoedas com os sinais de alerta e parar antes de pagar.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um sinal de alerta de uma burla com criptomoedas?", options: ["Uma carta do banco que você pediu", "Um amigo a explicar o que é uma blockchain", "Um pedido para pagar adiantado em criptomoedas para proteger o seu dinheiro", "Uma notícia sobre o preço da Bitcoin"], answer: 2, why: "Só os burlões exigem pagamento adiantado em criptomoedas ou para \"proteger\" o seu dinheiro." },
            { objective: "O5", q: "Uma SMS diz que a sua conta bancária está bloqueada e que tem de pagar hoje numa ATM de criptomoedas. O que faria?", options: ["Ir já à ATM de criptomoedas", "Responder com o número da sua conta", "Clicar no link da SMS para verificar", "Parar, não pagar nem clicar, e falar com alguém de confiança"], answer: 3, why: "Dizer que deve dinheiro e tem de pagar em criptomoedas é um sinal de burla, por isso pare e não pague." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Denunciar uma fraude e ajudar os outros",
          minutes: 5,
          goal: "Fazer a lista de onde denunciar uma burla com criptomoedas e do que anotar.",
          text: [
            "Se você ou alguém que conhece foi alvo de uma burla, denuncie. A FTC indica estes lugares: a FTC em ReportFraud.ftc.gov, a CFTC em cftc.gov/complaint, a SEC em sec.gov/tcr, o Centro de Queixas de Crimes na Internet do FBI (IC3) em ic3.gov, e a corretora ou aplicação de criptomoedas usada para enviar o dinheiro.",
            "Anote o que aconteceu: as datas, o valor, o endereço da carteira ou o ID da transação, os nomes e números de telefone que o burlão usou, e capturas de ecrã das mensagens. Não envie mais dinheiro a ninguém que prometa \"recuperar\" as suas criptomoedas perdidas; isso é muitas vezes uma segunda burla.",
            "Fale sobre burlas com a família e os amigos, sobretudo com os familiares mais velhos e com os jovens que começam a usar aplicações de dinheiro. Uma conversa curta pode evitar uma perda."
          ],
          steps: ["Pare todos os pagamentos e todo o contacto com o burlão.", "Anote as datas, os valores, os endereços de carteira, os IDs de transação, os nomes e os números.", "Guarde capturas de ecrã.", "Denuncie em ReportFraud.ftc.gov e ic3.gov, e também à SEC ou à CFTC se foi um investimento.", "Avise a corretora ou a aplicação que usou.", "Ignore quem se oferecer para recuperar o seu dinheiro em troca de uma taxa."],
          words: [["ID da transação", "o código que identifica um pagamento em criptomoedas na blockchain."], ["IC3", "o Centro de Queixas de Crimes na Internet do FBI (Internet Crime Complaint Center), que recebe denúncias de crimes na internet."], ["Burla de recuperação", "uma segunda burla que promete recuperar o seu dinheiro perdido em troca de uma taxa."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud (denunciar uma fraude)", url: "https://reportfraud.ftc.gov" }, { name: "FBI: Centro de Queixas de Crimes na Internet (Internet Crime Complaint Center, IC3)", url: "https://www.ic3.gov" }, { name: "SEC: Enviar uma denúncia ou queixa (Submit a tip or complaint)", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Enviar uma queixa (Submit a complaint)", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Onde denunciar", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr ou cftc.gov/complaint para investimentos", "A corretora ou aplicação que usou"] },
            { title: "Anote tudo", bullets: ["Datas e valores", "Endereço da carteira e ID da transação", "Nomes, números, capturas de ecrã"] },
            { title: "Cuidado com as burlas de recuperação", bullets: ["Ninguém honesto cobra uma taxa para \"recuperar\" criptomoedas", "Não pague outra vez"] }
          ],
          tryIt: "Tarefa final: faça o seu cartão de segurança das criptomoedas de uma página (o que são a blockchain e as criptomoedas, três riscos, quatro sinais de burla, onde denunciar). Depois marque os sinais de alerta num anúncio ou mensagem verdadeira sobre criptomoedas.",
          youCanNow: "denunciar uma burla com criptomoedas nos lugares certos e ajudar a família e os amigos a evitá-la.",
          quickCheck: [
            { objective: "O6", q: "Qual destes é um lugar oficial para denunciar uma fraude com criptomoedas nos EUA?", options: ["Um comentário na publicação do burlão nas redes sociais", "O Centro de Queixas de Crimes na Internet do FBI, em ic3.gov", "Um desconhecido que diz que consegue recuperar o seu dinheiro", "Um grupo de conversa sobre criptomoedas"], answer: 1, why: "O IC3, em ic3.gov, é um dos lugares oficiais que a FTC indica para denunciar." },
            { objective: "O6", q: "O seu vizinho foi vítima de uma burla e quer denunciá-la. Em que o ajudaria primeiro?", options: ["Anotar as datas, os valores, o endereço da carteira ou o ID da transação, e guardar capturas de ecrã", "Apagar todas as mensagens do burlão", "Pagar a um serviço de recuperação para ter o dinheiro de volta", "Enviar mais criptomoedas ao burlão para fechar a conta"], answer: 0, why: "Esses dados ajudam as agências e a corretora a seguir a denúncia." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Riscos, burlas e denúncias",
        questions: [
          { objective: "O4", q: "Que dinheiro nunca deve ser posto em criptomoedas?", options: ["Dinheiro a fingir num jogo", "Dinheiro que pode perder, depois de pedir conselho", "Dinheiro de que precisa para a renda, a comida ou os medicamentos", "Nenhum; nunca há risco"], answer: 2, why: "Com as mudanças de preço, pode perder dinheiro de que precisa." },
          { objective: "O4", q: "Segundo a FDIC, as criptomoedas:", options: ["Têm seguro total da FDIC", "Só têm seguro aos fins de semana", "Não estão cobertas pelo seguro de depósitos da FDIC", "Têm seguro se forem compradas no telefone"], answer: 2, why: "O seguro de depósitos da FDIC não cobre criptomoedas." },
          { objective: "O5", q: "Alguém liga a dizer que é do governo e que tem de pagar hoje uma multa numa ATM de criptomoedas. Isto é:", options: ["Um pagamento normal ao governo", "Um reembolso de impostos", "Uma regra do banco", "Um sinal de alerta de burla"], answer: 3, why: "Só os burlões exigem pagamento em criptomoedas." },
          { objective: "O5", q: "Um novo amigo da internet promete lucros garantidos se investir em criptomoedas. O que faz?", options: ["Investe um pouco para experimentar", "Envia a sua frase de recuperação", "Pede uma garantia maior", "Para; lucros garantidos são um sinal de burla"], answer: 3, why: "Só os burlões garantem lucros." },
          { objective: "O6", q: "Depois de perder dinheiro numa burla com criptomoedas, alguém oferece-se para o recuperar em troca de uma taxa. Isto é provavelmente:", options: ["Uma burla de recuperação", "O FBI", "O seu banco", "Um reembolso"], answer: 0, why: "Pagar uma taxa para recuperar criptomoedas é uma segunda burla comum." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Compreender as Criptomoedas e a Blockchain",
    questions: [
      { objective: "O1", q: "Uma blockchain é:", options: ["Um registo partilhado de transações guardado por muitos computadores", "Um tipo de cadeado de bicicleta", "O ficheiro secreto de uma empresa", "Um recibo em papel"], answer: 0, why: "Muitos computadores guardam cópias do mesmo registo ligado." },
      { objective: "O1", q: "Numa blockchain, um \"bloco\" é:", options: ["Um grupo de transações que entram juntas", "Uma palavra-passe", "Uma ATM de criptomoedas", "Uma agência bancária"], answer: 0, why: "Cada bloco guarda um grupo de transações." },
      { objective: "O1", q: "\"Descentralizado\" quer dizer:", options: ["Gerido por um só banco", "Fechado aos fins de semana", "Gerido por uma rede de muitos computadores, e não por uma só empresa", "Só para governos"], answer: 2, why: "Nenhuma empresa guarda o registo sozinha." },
      { objective: "O1", q: "A maioria das blockchains são:", options: ["Secretas e escondidas", "Apagadas todos os anos", "Impressas nos jornais", "Registos públicos que qualquer pessoa pode consultar"], answer: 3, why: "Qualquer pessoa pode consultar as transações, mas os nomes não aparecem." },
      { objective: "O2", q: "A Bitcoin é um exemplo de:", options: ["Um cartão de crédito", "Uma conta bancária", "Uma criptomoeda", "Uma stablecoin gerida pelo governo"], answer: 2, why: "A Bitcoin foi a primeira criptomoeda." },
      { objective: "O2", q: "Diz-se que os preços das criptomoedas são voláteis porque:", options: ["Nunca mudam", "Só sobem", "São fixados por lei", "Podem subir ou cair muito, depressa"], answer: 3, why: "Volátil quer dizer mudanças de preço grandes e rápidas." },
      { objective: "O2", q: "Se pagar a um burlão com criptomoedas, a FTC diz que você:", options: ["Pode sempre cancelar", "Normalmente não consegue anular o pagamento", "Recebe o dinheiro de volta do banco", "Tem seguro"], answer: 1, why: "Os pagamentos em criptomoedas normalmente não podem ser anulados." },
      { objective: "O3", q: "Uma carteira de criptomoedas é:", options: ["Uma carteira de couro", "Uma aplicação ou aparelho que guarda as chaves das suas criptomoedas", "Uma conta bancária", "O escritório de uma corretora"], answer: 1, why: "As carteiras guardam as chaves que controlam as criptomoedas." },
      { objective: "O3", q: "O que é seguro dar a alguém que lhe vai enviar criptomoedas?", options: ["O seu endereço público", "A sua frase de recuperação", "A sua chave privada", "A palavra-passe do seu banco"], answer: 0, why: "O endereço público é como um número de conta." },
      { objective: "O3", q: "Quem controla as criptomoedas de uma carteira?", options: ["A empresa de telefones", "Quem tiver a chave privada ou a frase de recuperação", "O governo", "A pessoa com o endereço público"], answer: 1, why: "A chave privada é a chave-mestra." },
      { objective: "O3", q: "Uma corretora é:", options: ["Uma empresa onde as pessoas compram, vendem e guardam criptomoedas", "Um serviço do governo", "Um tipo de bloco da blockchain", "Uma frase de recuperação"], answer: 0, why: "As corretoras são empresas para negociar e guardar criptomoedas." },
      { objective: "O4", q: "Qual é um risco da empresa nas criptomoedas?", options: ["A corretora pode ser atacada ou fechar", "O preço é fixo", "Tem seguro da FDIC", "Não pode ser roubada"], answer: 0, why: "As corretoras e as aplicações podem ser atacadas ou fechar." },
      { objective: "O4", q: "Este curso diz-lhe para comprar criptomoedas?", options: ["Sim, sempre", "Sim, mas só Bitcoin", "Não; para decisões sobre dinheiro, fale com um profissional licenciado que você escolha", "Sim, com o dinheiro da renda"], answer: 2, why: "O curso explica como as criptomoedas funcionam e os seus riscos; não é aconselhamento." },
      { objective: "O4", q: "Envia criptomoedas para o endereço errado. O que costuma acontecer?", options: ["Voltam automaticamente", "Normalmente perdem-se", "O banco devolve o dinheiro", "A FTC devolve-as"], answer: 1, why: "Os pagamentos na blockchain normalmente não podem ser anulados." },
      { objective: "O5", q: "Qual é um sinal de alerta de uma burla com criptomoedas?", options: ["Uma promessa de lucros garantidos", "Uma lista de preços clara", "Uma loja que aceita cartões", "Um recibo por email"], answer: 0, why: "Só os burlões garantem lucros." },
      { objective: "O5", q: "Uma pessoa de uma aplicação de encontros que nunca conheceu pede-lhe para investir em criptomoedas. Isto é:", options: ["Amor verdadeiro", "Um sinal comum de burla romântica", "Uma exigência do banco", "Uma regra dos impostos"], answer: 1, why: "Novos contactos da internet que insistem em criptomoedas são um sinal de burla." },
      { objective: "O5", q: "Uma oferta de emprego diz que tem de pagar uma taxa de formação em criptomoedas. Você deve:", options: ["Pagar depressa", "Parar; empregos que exigem uma taxa em criptomoedas são um sinal de burla", "Pagar metade", "Enviar a sua frase de recuperação em vez disso"], answer: 1, why: "A FTC indica os empregos com taxa em criptomoedas como sinal de burla." },
      { objective: "O6", q: "Onde pode denunciar uma fraude com criptomoedas nos EUA?", options: ["ReportFraud.ftc.gov e ic3.gov", "Um grupo qualquer nas redes sociais", "A linha de ajuda do burlão", "Em lado nenhum"], answer: 0, why: "A FTC e o IC3 do FBI recebem denúncias de fraude." },
      { objective: "O6", q: "O que deve anotar depois de uma burla?", options: ["Nada", "As datas, os valores, o endereço da carteira, o ID da transação e capturas de ecrã", "Só a sua palavra-passe", "A sua frase de recuperação"], answer: 1, why: "Estes dados ajudam os investigadores." },
      { objective: "O6", q: "A melhor forma de proteger um familiar das burlas com criptomoedas é:", options: ["Nunca falar nisso", "Partilhar os sinais de alerta e onde denunciar", "Dar-lhe a sua frase de recuperação", "Dizer-lhe para investir depressa"], answer: 1, why: "Uma conversa curta sobre os sinais de alerta pode evitar uma perda." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do cartão e verifique outra vez.",
    criteria: [
      {
        name: "O que são a blockchain e as criptomoedas",
        objective: "O1",
        notYet: "As duas frases faltam, estão erradas ou foram copiadas sem explicar.",
        meets: "Duas frases simples dizem corretamente o que são uma blockchain e uma criptomoeda.",
        exceeds: "Também diz porque os pagamentos em criptomoedas são difíceis de anular."
      },
      {
        name: "Três riscos",
        objective: "O4",
        notYet: "Menos de três riscos, ou um risco está errado.",
        meets: "Três riscos corretos entre preço, perda, empresa e burla.",
        exceeds: "Cada risco tem uma forma de se proteger."
      },
      {
        name: "Chaves e frase de recuperação",
        objective: "O3",
        notYet: "O cartão não diz para manter em segredo a frase de recuperação, ou diz que é seguro partilhá-la.",
        meets: "O cartão diz para nunca partilhar a frase de recuperação nem a chave privada com ninguém.",
        exceeds: "Também diz que o endereço público é a única coisa que é seguro partilhar para receber criptomoedas."
      },
      {
        name: "Quatro sinais de alerta de burla",
        objective: "O5",
        notYet: "Menos de quatro sinais, ou um sinal está errado.",
        meets: "Quatro sinais de alerta corretos, e o anúncio ou mensagem verdadeira está marcado com todos os sinais que mostra.",
        exceeds: "Também escreve a resposta segura: parar, não pagar nem clicar, e falar com alguém de confiança."
      },
      {
        name: "Onde denunciar",
        objective: "O6",
        notYet: "Nenhum lugar oficial de denúncia, ou um lugar que não é oficial.",
        meets: "Pelo menos dois lugares oficiais para denunciar, como ReportFraud.ftc.gov e ic3.gov.",
        exceeds: "Também faz a lista dos dados a anotar e avisa sobre as burlas de recuperação."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do cartão de segurança das criptomoedas",
      "Alunos que dizem ter reconhecido e ignorado uma mensagem ou chamada de burla com criptomoedas nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que partilham o cartão de segurança ou os sinais de alerta com um familiar ou amigo",
      "Os programas parceiros dizem que menos membros perdem dinheiro em burlas com criptomoedas, ou que mais burlas são denunciadas nos sites oficiais"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para ler as páginas oficiais de aviso (FTC, FDIC, SEC, CFTC)",
      "Papel e caneta, ou uma aplicação de documentos, para o cartão de segurança das criptomoedas de uma página",
      "Um anúncio, mensagem ou publicação verdadeira sobre criptomoedas para analisar (capturas de ecrã servem)",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Diga no início que o curso não é aconselhamento financeiro e não diz a ninguém para comprar ou vender criptomoedas; encaminhe as perguntas sobre dinheiro para um profissional licenciado que o aluno escolha.",
      "Nunca peça aos alunos para abrir uma aplicação de criptomoedas, ligar uma carteira ou escrever uma frase de recuperação na aula, nem como prática.",
      "Traga alguns exemplos impressos ou em capturas de ecrã de mensagens de burla verdadeiras, para que os alunos que não têm nenhuma possam fazer na mesma a verificação dos sinais de alerta.",
      "Alguns alunos podem ter perdido dinheiro numa burla; mantenha um tom sem culpa e mostre-lhes como denunciar.",
      "Convide os alunos a trazer um familiar, sobretudo um parente mais velho ou um jovem que começa a usar aplicações de dinheiro, e peça aos pares para fazerem o cartão de segurança juntos."
    ]
  }
};
