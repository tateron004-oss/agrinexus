"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-mobile-money-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const SAF_FRAUD = { name: "The Star, Quénia (27 de março de 2025): burlas comuns contra os utilizadores do M-Pesa; denuncie pelo 333, pelo Zuri ou pela aplicação; a Safaricom nunca pede o seu PIN", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Quénia: como reverter um pagamento M-Pesa (reencaminhe a SMS de confirmação para o 456; till ou Paybill errado: ligue para o 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Ghana News Agency (outubro de 2026): a MTN avisa os clientes para não partilharem o PIN do MoMo", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Banco Central do Quénia (regula o dinheiro móvel e publica a lista dos prestadores de serviços de pagamento licenciados)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Banco Central da Nigéria: proteção do consumidor", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Banco do Gana: procedimentos de reclamação e lista das instituições licenciadas", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Banco Central dos Estados da África Ocidental: instituições de moeda eletrónica (países do XOF, como o Senegal e a Costa do Marfim)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-pt",
  lang: "pt",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Usar o Dinheiro Móvel com Segurança (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Proteger o seu PIN e o seu telefone, Verificar o nome antes de enviar, Usar agentes e taxas com segurança, Reconhecer burlas de dinheiro móvel, Agir depressa depois de um envio errado ou de uma fraude, Escrever um plano de segurança pessoal",
  outcome: "enviar, receber e pagar com dinheiro móvel com segurança: proteger o seu PIN, verificar o nome antes de confirmar, reconhecer as burlas comuns, agir depressa depois de um envio errado ou de uma fraude, e ter um plano de segurança de uma página para você e a sua família.",
  about: [
    "O dinheiro móvel é a forma como milhões de pessoas em toda a África enviam, poupam e pagam todos os dias: o M-Pesa no Quénia, o MTN MoMo no Gana e na Nigéria, o Orange Money na Costa do Marfim e nos Camarões, o Wave no Senegal, e as carteiras móveis no Egito e em Marrocos. É rápido e útil, e os burlões também sabem disso.",
    "Este curso é para comerciantes, pais, estudantes, trabalhadores e qualquer pessoa que usa um telefone simples ou um smartphone para o dinheiro. Vai aprender como funcionam a sua carteira, o seu PIN e o agente, como verificar cada pagamento antes de confirmar, os truques que os burlões usam, e exatamente o que fazer se o dinheiro for para a pessoa errada.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" no seu próprio telefone, sem nunca escrever o seu PIN verdadeiro para praticar. Há uma pequena verificação depois de cada lição e de cada capítulo, e um questionário de 20 perguntas no final. As taxas, os limites e os números de ajuda mudam, por isso vai aprender a lê-los nos canais oficiais do seu próprio operador."
  ],
  finalTask: "Escreva um plano de segurança do dinheiro móvel de uma página para você ou para a sua família: as suas regras para o PIN e o bloqueio do telefone, como verifica o nome antes de enviar, os canais oficiais de ajuda e de fraude do seu operador (copiados do site oficial, da aplicação ou da embalagem do cartão SIM), os seis sinais de alerta de burla, o que faz na primeira hora depois de um envio errado ou de uma fraude, e uma verificação mensal do seu extrato.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens de toda a África, nas cidades e nas aldeias: comerciantes do mercado, mototaxistas (boda boda, okada), pais, estudantes, trabalhadores e donos de pequenos negócios que enviam, recebem e pagam com dinheiro móvel. Exemplos do Quénia, da Nigéria, do Gana, do Senegal, da Costa do Marfim, dos Camarões, do Egito e de Marrocos.",
    startingPoint: "A maioria já envia e recebe dinheiro com um menu USSD (*xxx#) ou com uma aplicação. Muitos nunca leram a tabela de taxas, não sabem reverter um envio errado, partilham o telefone ou o PIN com a família, ou já foram alvo de uma chamada ou SMS de burla.",
    gap: "As pessoas perdem dinheiro com mensagens falsas de reversão, pedidos de PIN e de códigos, agentes falsos e truques do \"número errado\", e muitas não conhecem os passos rápidos e oficiais depois de um envio errado. Os alunos precisam de hábitos e de um plano escrito que protejam o seu dinheiro e o da sua família.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; traduzido para francês e árabe",
      "Aparelhos: muitos usam um telefone simples com menus USSD; os dados móveis são caros",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e os dias de mercado",
      "As taxas, os limites e os números de ajuda variam de país para país e mudam: leia-os sempre nos canais oficiais do operador",
      "Nunca escreva um PIN, uma palavra-passe ou um código de uso único verdadeiro em nenhuma tarefa de prática"
    ],
    prerequisites: "Uma conta de dinheiro móvel, ou o telefone de um familiar para verem o menu juntos (sem o PIN)."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o seu próprio telefone e a sua conta de dinheiro móvel", action: "criar um PIN difícil de adivinhar, bloquear o telefone e guardar o PIN só para si", standard: "sem partilhar o PIN com ninguém, nem com a família nem com alguém que diz ser funcionário" },
    { id: "O2", condition: "Quando envia dinheiro, paga a um comerciante ou usa um agente", action: "verificar o nome do destinatário, o número e o valor no ecrã de confirmação antes de escrever o PIN, e guardar a mensagem de confirmação", standard: "todas as vezes, parando se alguma coisa não estiver certa" },
    { id: "O3", condition: "Com seis chamadas ou mensagens sobre dinheiro móvel", action: "identificar quais são burlas e dizer o sinal de alerta de cada uma", standard: "acertando pelo menos 5 de 6" },
    { id: "O4", condition: "Depois de o dinheiro ir para o número errado ou se suspeitar de fraude", action: "comunicar o problema pelos canais oficiais do seu operador e seguir os passos de reversão", standard: "no mesmo dia, guardando a mensagem de confirmação original e sem usar nenhum número dado por um desconhecido" },
    { id: "O5", condition: "Usando o que aprendeu e o site oficial ou a embalagem do cartão SIM do seu operador", action: "escrever um plano de segurança do dinheiro móvel de uma página para você ou para a sua família", standard: "com as regras do PIN, a verificação do nome, os canais oficiais de ajuda, os sinais de burla, os passos da primeira hora e uma verificação mensal do extrato" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona o dinheiro móvel e como usá-lo com segurança",
      lessons: [
        {
          title: "A sua carteira, o seu PIN e o seu telefone",
          objectives: ["O1"],
          minutes: 5,
          goal: "Criar um PIN forte, bloquear o telefone e dizer quem nunca pode receber o seu PIN.",
          text: [
            "Uma carteira de dinheiro móvel é uma conta ligada ao seu cartão SIM. Você deposita dinheiro num agente, envia-o, paga com ele e levanta-o outra vez. O seu PIN (número de identificação pessoal) é a chave da carteira. Qualquer pessoa que tenha o seu telefone e o seu PIN pode esvaziá-la.",
            "Escolha um PIN difícil de adivinhar: não o ano em que nasceu, não 1234 nem 0000, não os últimos algarismos do seu número de telefone. Tape o teclado quando o escrever num agente, num chapa ou táxi cheio, ou no mercado. Bloqueie o próprio telefone com um PIN, um padrão ou a impressão digital e, se o seu telefone deixar, ative também um PIN do SIM, para que um ladrão não possa pôr o seu SIM noutro telefone.",
            "Nunca partilhe o PIN do dinheiro móvel nem um código de uso único com ninguém: nem um amigo, nem um filho, nem um agente, nem alguém que liga a dizer que é da Safaricom, da MTN, da Orange ou da Wave. Os operadores dizem claramente que os seus funcionários nunca pedem o seu PIN. Se alguém pedir, é uma burla.",
            "Se perder o telefone ou ele for roubado, ou se a sua linha deixar de funcionar de repente, ligue logo para o seu operador a partir de outro telefone para bloquear o SIM e a carteira. Uma linha que morre sem motivo pode ser uma troca de SIM (SIM swap), em que um criminoso passa o seu número para o SIM dele."
          ],
          steps: ["Mude o seu PIN no menu se for fácil de adivinhar (ano de nascimento, 1234, números repetidos).", "Ative um bloqueio de ecrã no telefone.", "Ative um PIN do SIM se o telefone tiver essa opção.", "Tape o teclado quando escrever o PIN.", "Escreva num papel o número de ajuda oficial do seu operador, não o de uma mensagem de um desconhecido.", "Se perder o telefone ou a linha morrer, ligue para o operador a partir de outro telefone para o bloquear."],
          words: [["Carteira", "a sua conta de dinheiro móvel, ligada ao seu cartão SIM."], ["PIN", "número de identificação pessoal: o número secreto que lhe deixa usar a carteira."], ["Troca de SIM (SIM swap)", "quando o seu número de telefone é passado para um novo cartão SIM; os criminosos tentam isto para ficar com a sua carteira."]],
          slides: [
            { title: "O seu PIN é a chave", bullets: ["Telefone + PIN = acesso a todo o seu dinheiro", "Não o ano de nascimento, 1234 nem 0000", "Tape o teclado quando o escrever"] },
            { title: "Bloqueie o telefone e o SIM", bullets: ["Bloqueio de ecrã: PIN, padrão ou impressão digital", "PIN do SIM se o telefone tiver essa opção", "Assim os ladrões não podem usar o seu SIM noutro lado"] },
            { title: "Nunca o partilhe", bullets: ["Nem amigos, filhos, agentes ou quem liga", "Os funcionários verdadeiros nunca pedem o seu PIN", "Quem pede é um burlão"] },
            { title: "Perdeu o telefone ou a linha morreu?", bullets: ["Ligue logo para o operador a partir de outro telefone", "Bloqueie o SIM e a carteira", "Uma linha que morre sem motivo pode ser uma troca de SIM"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Pense no seu PIN (não o escreva nem o diga a ninguém). É o ano em que nasceu, 1234 ou um número repetido? Se sim, mude-o hoje no menu. Depois confirme que o seu telefone tem bloqueio de ecrã.",
          youCanNow: "criar um PIN difícil de adivinhar, bloquear o telefone e o SIM, e recusar quem pedir o seu PIN.",
          quickCheck: [
            { objective: "O1", q: "Qual é o PIN mais seguro?", options: ["1990, o ano em que nasceu", "1234", "Um número sem ligação ao seu aniversário nem ao seu número de telefone", "Os últimos quatro algarismos do seu número de telefone"], answer: 2, why: "Um PIN sem ligação a dados sobre você é difícil de adivinhar pelos outros." },
            { objective: "O1", q: "Um homem liga a dizer que é do seu operador de dinheiro móvel e que precisa do seu PIN para arranjar a sua conta. O que faz?", options: ["Desliga; os funcionários verdadeiros nunca pedem o seu PIN", "Dá o PIN e muda-o depois", "Dá só os dois primeiros algarismos", "Envia-lhe antes o código que chegou ao telefone"], answer: 0, why: "Os operadores nunca pedem o seu PIN nem códigos; quem pede é um burlão." }
          ]
        },
        {
          title: "Enviar e pagar: verifique o nome antes do PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Verificar o nome, o número e o valor no ecrã de confirmação antes de escrever o PIN.",
          text: [
            "A maioria dos erros e muitas burlas podem ser travados num só lugar: o ecrã de confirmação. Antes de escrever o PIN, o telefone mostra a quem está a pagar e quanto. No Quénia, o M-Pesa mostra o nome de um número, de um till ou de um Paybill; outros operadores também mostram um nome ou o nome do comerciante.",
            "Leia devagar. É a pessoa ou a loja certa? O valor está certo? 5,000 não é 50,000. Quando paga a uma loja, verifique o número do till, do comerciante ou do Paybill numa placa ou num recibo da loja, e não num número que alguém lhe envia.",
            "Se o nome estiver errado ou for estranho, cancele. Não escreva o PIN \"para ver o que acontece\". Depois de pagar, guarde a mensagem de confirmação (SMS) até ter a certeza de que a pessoa ou a loja recebeu o dinheiro. É a sua prova.",
            "Exemplo: a Ama, em Kumasi, paga GHS 600 a um fornecedor com o MTN MoMo. O ecrã mostra um nome diferente do do fornecedor. Ela cancela, liga ao fornecedor para o número que já tem e descobre que escreveu um algarismo errado."
          ],
          steps: ["Escreva o número, o código do comerciante ou o till.", "Escreva o valor e leia-o duas vezes.", "No ecrã de confirmação, leia o nome, o número e o valor.", "Se alguma coisa não estiver certa, cancele.", "Se estiver tudo certo, tape o teclado e escreva o PIN.", "Guarde a SMS de confirmação como prova."],
          words: [["Ecrã de confirmação", "o ecrã que mostra a quem está a pagar e quanto, antes de escrever o PIN."], ["Till / código do comerciante / Paybill", "números que as lojas e as empresas usam para receber pagamentos."], ["SMS de confirmação", "a mensagem que o operador envia depois de um pagamento; a sua prova."]],
          slides: [
            { title: "Pare no ecrã de confirmação", bullets: ["Mostra o nome, o número e o valor", "Leia devagar, antes do PIN", "5,000 não é 50,000"] },
            { title: "Pagar a uma loja", bullets: ["Tire o till ou o código do comerciante da placa da loja", "Não de um número que alguém lhe envia", "Verifique o nome da loja no ecrã"] },
            { title: "Algo errado? Cancele", bullets: ["Não escreva o PIN para ver o que acontece", "Ligue à pessoa para um número que já tem", "Depois tente outra vez com cuidado"] },
            { title: "Guarde a sua prova", bullets: ["Guarde a SMS de confirmação", "Até o dinheiro ser bem recebido", "Precisa dela para qualquer reversão"] }
          ],
          sources: [SAF_REV],
          tryIt: "Da próxima vez que enviar dinheiro ou pagar, pare no ecrã de confirmação e diga em voz alta o nome, o número e o valor antes de escrever o PIN. Depois encontre a SMS de confirmação e não a apague.",
          youCanNow: "verificar o nome, o número e o valor antes de escrever o PIN, e guardar a mensagem de confirmação como prova.",
          quickCheck: [
            { objective: "O2", q: "O ecrã de confirmação mostra um nome que você não conhece. O que faz?", options: ["Escreve o PIN; os nomes estão muitas vezes errados", "Escreve o PIN e pergunta depois", "Envia primeiro um valor mais pequeno", "Cancela e confirma o número com a pessoa"], answer: 3, why: "Um nome estranho quer dizer um número errado ou um truque; cancele antes do PIN." },
            { objective: "O2", q: "Porque guardar a SMS de confirmação depois de pagar?", options: ["É a sua prova se alguma coisa correr mal", "Dá-lhe pontos", "A lei manda apagá-la", "Torna o próximo pagamento mais barato"], answer: 0, why: "A mensagem de confirmação prova o pagamento e é precisa para uma reversão ou uma reclamação." }
          ]
        },
        {
          title: "Agentes, taxas e os seus registos",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Ler a taxa de uma operação na tabela oficial do seu operador e levantar dinheiro num agente com segurança.",
          text: [
            "Um agente é uma loja onde você põe dinheiro na carteira (depósito) ou tira dinheiro (levantamento). Use um agente registado, com a placa do operador e o número de agente. Faça a operação você mesmo, no seu próprio telefone, sempre que puder, e conte o dinheiro antes de sair.",
            "As taxas dependem do operador, do país, do valor e do tipo de operação. Não adivinhe e não confie numa taxa que alguém lhe diz. Leia a tabela oficial no site ou na aplicação do operador, na loja, ou marcando o menu. Muitas aplicações também mostram a taxa antes de confirmar. Enviar para alguém de outra rede ou para um banco pode custar mais.",
            "Um agente falso pode dizer \"dê-me o telefone, eu faço por si\", ou pedir o seu PIN. Nunca entregue o telefone com o PIN. Os agentes verdadeiros não precisam dele.",
            "Uma vez por mês, leia o seu mini-extrato ou o extrato completo no menu ou na aplicação. Procure pagamentos que não reconhece. Exemplo: o Moussa, alfaiate em Dakar, verifica o histórico do Wave no fim de cada mês e escreve num caderno o total enviado e o total recebido. Os valores deste curso são só exemplos."
          ],
          steps: ["Encontre a tabela oficial de taxas no site, na aplicação ou no cartaz da loja do operador.", "Procure a taxa para o valor que quer enviar ou levantar.", "No agente, verifique a placa e o número de agente.", "Comece o levantamento no seu próprio telefone; verifique o nome do agente no ecrã.", "Conte o dinheiro antes de sair.", "Leia o seu extrato uma vez por mês."],
          words: [["Agente", "uma loja registada que faz depósitos e levantamentos para um operador de dinheiro móvel."], ["Tabela de taxas (tarifário)", "a tabela oficial das taxas para cada tipo e valor de operação."], ["Mini-extrato", "uma lista curta das suas últimas operações, no menu ou na aplicação."]],
          slides: [
            { title: "Usar um agente", bullets: ["Agente registado: placa do operador e número de agente", "Comece no seu próprio telefone; verifique o nome", "Conte o dinheiro antes de sair"] },
            { title: "Taxas: leia, não adivinhe", bullets: ["Dependem do operador, do país, do valor e do tipo", "Tabela oficial: site, aplicação, cartaz da loja", "Outras redes ou bancos podem custar mais"] },
            { title: "Sinais de agente falso", bullets: ["\"Dê-me o telefone, eu faço\"", "Pede o seu PIN", "Sem placa nem número de agente"] },
            { title: "Verificação mensal", bullets: ["Leia o seu extrato no menu ou na aplicação", "Procure pagamentos que não conhece", "Escreva os totais enviados e recebidos"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Encontre a tabela oficial de taxas do seu operador (site, aplicação ou cartaz da loja). Escreva a taxa para enviar um valor que envia muitas vezes, por exemplo KES 1,000, NGN 5,000, GHS 100 ou XOF 10,000. Depois abra o seu mini-extrato e verifique cada linha.",
          youCanNow: "ler a taxa verdadeira na tabela oficial, usar um agente com segurança e verificar o seu extrato à procura de pagamentos estranhos.",
          quickCheck: [
            { objective: "O2", q: "No agente, o agente pede o seu telefone e o PIN para \"ser mais rápido\". O que faz?", options: ["Dá-os; os agentes são de confiança", "Dá o telefone mas não o PIN", "Faz você mesmo e guarda o PIN em segredo", "Escreve o PIN num papel para o agente"], answer: 2, why: "Os agentes verdadeiros nunca precisam do seu PIN; você começa e confirma a operação." },
            { objective: "O5", q: "Onde encontra a taxa verdadeira de uma transferência?", options: ["No que um desconhecido lhe diz", "Na tabela oficial do operador, na aplicação ou no cartaz da loja", "Numa mensagem reencaminhada no WhatsApp", "No palpite do seu vizinho"], answer: 1, why: "As taxas mudam e variam de país para país, por isso leia-as nos canais oficiais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona o dinheiro móvel e como usá-lo com segurança",
        questions: [
          { objective: "O1", q: "Quem deve saber o seu PIN do dinheiro móvel?", options: ["Você e o agente", "Toda a sua família", "Só você", "Você e o apoio ao cliente"], answer: 2, why: "Só você; os funcionários, os agentes e a família nunca precisam dele." },
          { objective: "O1", q: "A sua linha deixa de funcionar de repente e você não mudou nada. O que pode ser, e o que faz?", options: ["Uma troca de SIM; ligue para o operador a partir de outro telefone para bloquear", "Bateria fraca; carregue o telefone", "Um feriado; espere uma semana", "Nada; vai voltar"], answer: 0, why: "Uma linha morta pode querer dizer que um criminoso passou o seu número; bloquear depressa protege a sua carteira." },
          { objective: "O2", q: "Qual é o momento certo para verificar a quem está a pagar?", options: ["Depois de escrever o PIN", "No ecrã de confirmação, antes do PIN", "No dia seguinte", "Só para valores grandes"], answer: 1, why: "Depois de escrever o PIN, o dinheiro sai; a verificação tem de vir primeiro." },
          { objective: "O2", q: "Vai pagar a uma loja. De onde deve vir o till ou o código do comerciante?", options: ["De uma SMS de um número desconhecido", "De alguém que liga a dizer que a loja mudou de número", "De um estado do WhatsApp", "Da placa ou do recibo da loja"], answer: 3, why: "Os burlões enviam números de pagamento falsos; tire-o da própria loja e verifique o nome no ecrã." },
          { objective: "O5", q: "Porque ler o seu extrato uma vez por mês?", options: ["Para encontrar pagamentos que não reconhece", "Para baixar as taxas", "Para mudar de número", "Porque o operador lhe paga para isso"], answer: 0, why: "Uma verificação mensal encontra cedo as fraudes e os erros." }
        ]
      }
    },
    {
      name: "Capítulo 2: Burlas, erros e o seu plano de segurança",
      lessons: [
        {
          title: "Reconhecer as burlas de dinheiro móvel",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identificar as seis burlas comuns de dinheiro móvel e o sinal de alerta de cada uma.",
          text: [
            "Os burlões usam chamadas, SMS, WhatsApp e redes sociais. Fingem ser o seu operador, um familiar, um agente, um comprador ou uma empresa com um emprego. Os truques mudam, mas os sinais de alerta ficam iguais.",
            "1. Reversão falsa: recebe uma SMS que parece um pagamento para você e depois uma chamada: \"Enviei-lhe dinheiro por engano, por favor devolva.\" Primeiro veja o seu saldo verdadeiro. Muitas vezes não chegou dinheiro nenhum; a SMS veio de um número de telefone normal, e não do operador. 2. Pedido de PIN ou de código: qualquer pessoa que pede o seu PIN ou um código de uso único. 3. Falsos funcionários: \"A sua conta vai ser bloqueada se não marcar este código ou não nos der os seus dados.\" 4. Prémio ou promoção: \"Ganhou, envie uma taxa para receber o seu prémio.\" 5. Emprego ou empréstimo falso: uma oferta que pede para pagar uma taxa primeiro. 6. Mensagem urgente da família: \"Mãe, estou com problemas, envia dinheiro para este número novo.\"",
            "As mensagens verdadeiras do operador vêm do seu nome oficial ou de um número curto, e não de um número de telemóvel normal. Os operadores não pedem para marcar códigos para arranjar a sua conta ou ganhar um prémio. Se alguma coisa parecer urgente, pare. Ligue de volta para a pessoa ou para o operador usando um número que já conhece.",
            "Exemplo: o Chinedu, em Enugu, recebe uma SMS a dizer que chegaram NGN 20,000 e depois uma chamada a pedir para os devolver. Ele vê o saldo na aplicação: não chegou nada. Desliga e denuncia o número."
          ],
          steps: ["Veja quem enviou: nome oficial ou número curto, ou um número normal?", "Veja o seu saldo verdadeiro no menu ou na aplicação.", "Pergunte-se: estão a pedir o meu PIN, um código, uma taxa ou pressa?", "Pare e ligue de volta para um número que já conhece.", "Denuncie o número do burlão ao seu operador."],
          words: [["Reversão falsa", "um truque em que alguém finge que lhe enviou dinheiro por engano e pede para o devolver."], ["Código de uso único (OTP)", "um código curto enviado para o seu telefone para confirmar uma ação; nunca o partilhe."], ["Número curto", "o número oficial curto de onde o operador envia as mensagens."]],
          slides: [
            { title: "Seis burlas comuns", bullets: ["Reversão falsa; pedido de PIN ou de código; falsos funcionários", "Prémio que pede uma taxa; emprego ou empréstimo que pede uma taxa", "Mensagem urgente da família de um número novo"] },
            { title: "Reversão falsa", bullets: ["A SMS parece que chegou dinheiro", "Chamada: \"Enviei por engano, devolva\"", "Veja o saldo verdadeiro: muitas vezes não chegou nada"] },
            { title: "Sinais de alerta", bullets: ["Pede o PIN ou um código", "Pede primeiro uma taxa", "Apressa você; vem de um número normal"] },
            { title: "O que fazer", bullets: ["Pare. Veja o seu saldo", "Ligue de volta para um número que já conhece", "Denuncie o número ao seu operador"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Veja as SMS sobre dinheiro na sua caixa de mensagens. Para cada uma, decida: número curto oficial ou número normal? Pede um PIN, um código, uma taxa ou pressa? Escreva os sinais de burla que encontrar.",
          youCanNow: "reconhecer as seis burlas comuns de dinheiro móvel e dizer o sinal de alerta de cada uma.",
          quickCheck: [
            { objective: "O3", q: "Uma SMS de um número de telemóvel normal diz que recebeu XAF 25,000. Depois alguém liga a pedir para os devolver. O que faz primeiro?", options: ["Devolve depressa para ser honesto", "Vê o seu saldo verdadeiro no menu ou na aplicação", "Dá o PIN a quem liga para fazer a reversão", "Reencaminha a SMS aos amigos"], answer: 1, why: "As SMS de reversão falsa vêm de números normais; o seu saldo verdadeiro mostra a verdade." },
            { objective: "O3", q: "Uma mensagem diz que ganhou um telefone e tem de pagar primeiro uma taxa de entrega. Qual é o sinal de alerta?", options: ["Fala de um telefone", "Chegou à noite", "Pede para pagar uma taxa para receber um prémio", "Usa o seu primeiro nome"], answer: 2, why: "Os prémios verdadeiros não pedem uma taxa primeiro; pagar para receber é uma burla clássica." }
          ]
        },
        {
          title: "Envio errado ou fraude: a primeira hora",
          objectives: ["O4"],
          minutes: 5,
          goal: "Comunicar um envio errado ou uma fraude pelos canais oficiais do seu operador no mesmo dia.",
          text: [
            "Aja depressa. Uma reversão é mais fácil enquanto o dinheiro ainda está na outra carteira. Guarde a SMS de confirmação original; não a apague nem a mude.",
            "Use só canais oficiais: a linha de ajuda impressa na embalagem do seu cartão SIM ou no site do operador, a aplicação oficial, o número curto oficial, ou uma loja do operador. Nunca use um número dado por um desconhecido ou num comentário nas redes sociais, e nunca pague a quem se oferece para \"recuperar\" o seu dinheiro a troco de uma taxa.",
            "Exemplo do Quénia: os canais publicados pela Safaricom incluem reencaminhar a SMS de confirmação do M-Pesa para o 456 para pedir a reversão de um envio para a pessoa errada, ligar para o 100 em caso de till ou Paybill errado, e reencaminhar um número ou uma mensagem de fraude para o 333. Outros operadores têm os seus próprios passos; leia-os no site oficial ou na aplicação do operador, porque os números e os passos mudam.",
            "Uma reversão não é garantida. Se a pessoa já levantou o dinheiro e recusa devolvê-lo, o operador pode dizer-lhe para ir à polícia. Se o seu PIN ou a sua linha foram roubados, comunique primeiro ao operador e depois à polícia. Se o operador não resolver, o banco central tem um processo de reclamações dos consumidores (por exemplo o Banco Central da Nigéria ou o Banco do Gana)."
          ],
          steps: ["Não apague a SMS de confirmação.", "Dentro de uma hora, use o canal oficial de reversão ou de fraude do seu operador.", "Anote a data, a hora, o valor, o ID da transação e com quem falou.", "Se o PIN ou a linha foram roubados, bloqueie primeiro o SIM e a carteira.", "Se for preciso, faça queixa à polícia com a SMS.", "Se o operador não resolver, use o processo de reclamações do banco central."],
          words: [["Reversão", "quando o operador devolve o dinheiro enviado para o número errado, se ainda lá estiver."], ["ID da transação", "o código na SMS de confirmação que identifica um pagamento."], ["Burla de recuperação", "uma oferta falsa para recuperar o seu dinheiro perdido se pagar uma taxa."]],
          slides: [
            { title: "Aja na primeira hora", bullets: ["A reversão é mais fácil enquanto o dinheiro ainda lá está", "Guarde a SMS de confirmação original", "Anote a data, a hora, o valor e o ID da transação"] },
            { title: "Só canais oficiais", bullets: ["Linha de ajuda na embalagem do SIM ou no site oficial", "Aplicação oficial, número curto ou loja do operador", "Nunca um número dado por um desconhecido"] },
            { title: "Exemplo: Quénia (Safaricom)", bullets: ["Pessoa errada: reencaminhe a SMS para o 456", "Till ou Paybill errado: ligue para o 100", "Número ou mensagem de fraude: reencaminhe para o 333"] },
            { title: "Se não ficar resolvido", bullets: ["Queixa à polícia com a SMS", "Processo de reclamações do banco central", "Nunca pague uma taxa de \"recuperação\""] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Encontre os passos oficiais de reversão e de fraude do seu próprio operador no site, na aplicação ou na embalagem do SIM. Escreva-os num papel: o número ou o código, e o que deve enviar. Não os copie de uma mensagem reencaminhada no WhatsApp.",
          youCanNow: "agir na primeira hora depois de um envio errado ou de uma fraude, usando só os canais oficiais do seu operador.",
          quickCheck: [
            { objective: "O4", q: "Enviou dinheiro para o número errado. O que guarda?", options: ["Nada; apaga a SMS", "Só o valor na cabeça", "Uma captura de ecrã de um desconhecido", "A SMS de confirmação original"], answer: 3, why: "A mensagem de confirmação original tem o ID da transação de que o operador precisa." },
            { objective: "O4", q: "Alguém no Facebook oferece-se para recuperar o seu dinheiro perdido por uma pequena taxa. O que é isto?", options: ["Uma burla de recuperação; use só canais oficiais", "Um serviço útil", "O processo do banco central", "Uma loja do operador"], answer: 0, why: "Pagar a um desconhecido para recuperar dinheiro é uma segunda burla; os canais oficiais são gratuitos." }
          ]
        },
        {
          title: "O seu plano de segurança do dinheiro móvel",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escrever um plano de segurança do dinheiro móvel de uma página para você ou para a sua família.",
          text: [
            "Um plano de segurança põe tudo o que aprendeu neste curso numa só página, para que você e a sua família saibam o que fazer antes de alguma coisa correr mal. Guarde-o em papel em casa, e não só no telefone.",
            "Tem seis partes: 1. Regras do PIN e do telefone (PIN difícil, bloqueio de ecrã, PIN do SIM, nunca partilhar). 2. A verificação do nome antes de cada PIN. 3. Os canais oficiais de ajuda e de fraude do seu operador, copiados do site, da aplicação ou da embalagem do SIM. 4. Os seis sinais de alerta de burla. 5. Os passos da primeira hora depois de um envio errado ou de uma fraude. 6. Uma verificação mensal do extrato, com uma data.",
            "Fale sobre ele com os pais mais velhos e com os adolescentes, que são muitas vezes alvos. Combinem uma regra da família: \"Nunca enviamos dinheiro para um número novo por causa de uma mensagem urgente. Primeiro ligamos de volta para o número antigo.\"",
            "Exemplo: a Fatima, comerciante em Casablanca, guarda o plano dentro do seu livro de caixa. No fim de cada mês verifica o histórico da carteira e marca a data no plano."
          ],
          steps: ["Escreva as suas regras para o PIN e para o bloqueio do telefone.", "Escreva a regra da verificação do nome.", "Copie de uma fonte oficial os canais de ajuda e de fraude do seu operador.", "Faça a lista dos seis sinais de alerta de burla.", "Escreva os seus passos da primeira hora.", "Marque uma data por mês para verificar o seu extrato.", "Leia-o com a sua família."],
          words: [["Plano de segurança", "uma lista curta e escrita de regras e passos que protegem o seu dinheiro."]],
          slides: [
            { title: "Uma página, seis partes", bullets: ["Regras do PIN e do telefone; a verificação do nome", "Canais oficiais de ajuda e de fraude", "Sinais de burla; passos da primeira hora; verificação mensal"] },
            { title: "Só canais oficiais", bullets: ["Copie-os do site, da aplicação ou da embalagem do SIM", "Não de uma mensagem reencaminhada nem de um desconhecido"] },
            { title: "Partilhe-o em casa", bullets: ["Os pais e os adolescentes são muitas vezes alvos", "Regra da família: ligar primeiro para o número antigo", "Guarde o plano em papel"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Tarefa final: escreva o seu plano de segurança do dinheiro móvel de uma página com as seis partes. Copie os canais de ajuda e de fraude do seu operador do site oficial, da aplicação ou da embalagem do SIM. Leia-o com um familiar.",
          youCanNow: "escrever e partilhar um plano de segurança do dinheiro móvel que protege você e a sua família.",
          quickCheck: [
            { objective: "O5", q: "De onde devem vir os números de ajuda do seu plano?", options: ["De uma mensagem reencaminhada no WhatsApp", "Do site oficial, da aplicação ou da embalagem do SIM do operador", "De alguém que liga a dizer que é funcionário", "De um comentário nas redes sociais"], answer: 1, why: "Os burlões espalham números de ajuda falsos; copie-os só de fontes oficiais." },
            { objective: "O5", q: "Que regra da família protege contra a burla da mensagem urgente?", options: ["Enviar sempre depressa numa emergência", "Partilhar um só PIN para toda a família", "Responder com o PIN para provar que é você", "Ligar de volta para o número antigo da pessoa antes de enviar"], answer: 3, why: "Ligar de volta para um número conhecido mostra se a mensagem urgente é verdadeira." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Burlas, erros e o seu plano de segurança",
        questions: [
          { objective: "O3", q: "\"A sua conta vai ser bloqueada hoje. Marque este código e escreva o seu PIN para a manter.\" Isto é:", options: ["Uma mensagem normal do operador", "Uma burla: apressa você e pede o seu PIN", "Uma reversão", "Uma promoção"], answer: 1, why: "Os operadores nunca pedem para marcar um código com o seu PIN; a pressa é um sinal de alerta." },
          { objective: "O3", q: "Que mensagem é mais provável ser verdadeira?", options: ["De um número normal: \"Devolva o dinheiro que lhe enviei por engano\"", "\"Ganhou! Pague uma taxa para receber\"", "Uma confirmação de pagamento com o nome oficial do operador, igual ao seu saldo", "\"Mãe, número novo, envia dinheiro já\""], answer: 2, why: "As confirmações verdadeiras vêm do nome oficial ou do número curto e batem certo com o seu saldo verdadeiro." },
          { objective: "O4", q: "Quando deve comunicar um envio errado?", options: ["No mês seguinte", "Só se for um valor grande", "Depois de a outra pessoa o gastar", "No mesmo dia, o mais depressa possível"], answer: 3, why: "Uma reversão é mais fácil enquanto o dinheiro ainda está na outra carteira." },
          { objective: "O4", q: "A pessoa que recebeu o seu dinheiro por engano levantou-o e recusa devolvê-lo. E agora?", options: ["Siga o conselho do operador e faça queixa à polícia com a sua SMS", "Pague a um desconhecido para o recuperar", "Apague a SMS", "Envie-lhe mais dinheiro"], answer: 0, why: "Depois do levantamento, pode tornar-se um caso de polícia; a sua SMS é a sua prova." },
          { objective: "O5", q: "Com que frequência o plano de segurança diz para verificar o extrato?", options: ["Nunca", "Uma vez por mês", "Uma vez a cada cinco anos", "Só quando perde o telefone"], answer: 1, why: "Uma verificação mensal regular encontra cedo os pagamentos estranhos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Usar o Dinheiro Móvel com Segurança (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "Qual é o PIN mais fraco?", options: ["Quatro algarismos ao acaso", "Um número que só você sabe", "Um PIN que mudou há pouco tempo", "O ano em que nasceu"], answer: 3, why: "O ano em que nasceu é fácil de os outros descobrirem e adivinharem." },
      { objective: "O1", q: "Quem pode pedir com segurança o seu PIN do dinheiro móvel?", options: ["Ninguém", "O apoio ao cliente", "Um agente registado", "O seu banco"], answer: 0, why: "Ninguém precisa do seu PIN; os funcionários e os agentes verdadeiros nunca o pedem." },
      { objective: "O1", q: "O seu telefone foi roubado. Qual é o primeiro passo?", options: ["Comprar um telefone novo no mês seguinte", "Ligar para o operador a partir de outro telefone para bloquear o SIM e a carteira", "Enviar uma mensagem ao ladrão", "Esperar para ver se aparece"], answer: 1, why: "Bloquear depressa impede o ladrão de usar a sua carteira." },
      { objective: "O1", q: "Porque ativar um bloqueio de ecrã e um PIN do SIM?", options: ["Para o telefone ficar mais rápido", "Para baixar as taxas", "Para um ladrão não conseguir usar facilmente o seu telefone ou o seu SIM", "Porque os agentes precisam disso"], answer: 2, why: "Os bloqueios atrasam quem ficar com o seu telefone ou o seu SIM." },
      { objective: "O2", q: "Que três coisas verifica no ecrã de confirmação?", options: ["A hora, o tempo e a bateria", "O nome, o número e o valor", "O agente, a cor e a data", "A taxa, a rede e o sinal"], answer: 1, why: "O nome, o número e o valor mostram que o dinheiro vai para o lugar certo." },
      { objective: "O2", q: "Queria enviar GHS 50 e o ecrã mostra GHS 500. O que faz?", options: ["Cancela e escreve outra vez", "Escreve o PIN e pede o troco", "Envia e reverte depois", "Escreve metade do PIN"], answer: 0, why: "Cancele antes do PIN; corrigir depois é difícil." },
      { objective: "O2", q: "Uma mensagem diz que o seu fornecedor tem \"um novo número de pagamento\". O que faz?", options: ["Paga logo para o número novo", "Reencaminha-a a outros clientes", "Liga ao fornecedor para o número que já tem para confirmar", "Paga metade a cada número"], answer: 2, why: "Os números de pagamento falsos são um truque comum; confirme com a pessoa num número conhecido." },
      { objective: "O2", q: "Num agente, o que é seguro?", options: ["Dar ao agente o seu telefone e o PIN", "Sair antes de contar o dinheiro", "Usar um agente sem placa", "Começar o levantamento no seu próprio telefone e contar o dinheiro"], answer: 3, why: "Você controla o seu PIN e verifica o dinheiro antes de sair." },
      { objective: "O3", q: "Numa burla de reversão falsa, o que costuma acontecer?", options: ["Chegou dinheiro verdadeiro por engano", "Uma SMS falsa de um número normal fingiu que chegou dinheiro", "O operador cometeu um erro", "O agente perdeu o dinheiro"], answer: 1, why: "A SMS falsa parece um pagamento, mas o seu saldo verdadeiro mostra que não chegou nada." },
      { objective: "O3", q: "Qual é um sinal de alerta de burla?", options: ["Pedem uma taxa antes de dar um prémio, um emprego ou um empréstimo", "A mensagem vem do número curto oficial", "O valor bate certo com o seu saldo", "Foi você que começou o pagamento"], answer: 0, why: "Pagar primeiro para receber é um sinal clássico de burla." },
      { objective: "O3", q: "Uma mensagem de WhatsApp de um número novo: \"Pai, perdi o telefone, envia já XOF 30,000 para este número.\" O que faz?", options: ["Envia depressa", "Envia metade", "Liga primeiro ao seu filho para o número antigo", "Responde com o seu PIN"], answer: 2, why: "Ligar para o número antigo mostra se a mensagem urgente é verdadeira." },
      { objective: "O3", q: "Como costumam chegar as mensagens verdadeiras do operador?", options: ["De um número de telemóvel normal", "Do nome oficial ou do número curto do operador", "Pelo WhatsApp de um desconhecido", "De uma página nas redes sociais que pede o seu PIN"], answer: 1, why: "Os operadores enviam a partir de nomes oficiais ou de números curtos; os números normais são um sinal de alerta." },
      { objective: "O4", q: "No Quénia, o passo publicado pela Safaricom para pedir a reversão de um envio para a pessoa errada é:", options: ["Publicar no Facebook", "Ligar para qualquer número da internet", "Reencaminhar a SMS de confirmação para o 456", "Enviar o seu PIN para o 100"], answer: 2, why: "Reencaminhar a confirmação original do M-Pesa para o 456 começa um pedido de reversão (veja os passos atuais no site da Safaricom)." },
      { objective: "O4", q: "Que dados anota quando comunica um problema?", options: ["A data, a hora, o valor e o ID da transação", "O seu PIN", "O seu código de uso único", "A sua palavra-passe"], answer: 0, why: "Estes dados ajudam o operador a encontrar o pagamento; nunca partilhe o PIN nem os códigos." },
      { objective: "O4", q: "Onde encontra o número de ajuda oficial do seu operador?", options: ["Num comentário debaixo de uma publicação do Facebook", "Com alguém que liga a dizer que é funcionário", "Numa SMS de um número normal", "Na embalagem do SIM, no site oficial ou na aplicação oficial"], answer: 3, why: "As fontes oficiais dão os números verdadeiros; os burlões espalham números falsos." },
      { objective: "O4", q: "O operador não resolveu a sua reclamação. O que mais pode usar?", options: ["Um desconhecido que cobra uma taxa de recuperação", "O processo de reclamações dos consumidores do banco central", "Nada mais", "Um PIN novo para a outra pessoa"], answer: 1, why: "Bancos centrais como o CBN e o Banco do Gana têm processos de reclamações." },
      { objective: "O5", q: "O que deve estar no seu plano de segurança do dinheiro móvel?", options: ["O seu PIN escrito por inteiro", "Os seus códigos de uso único", "O canal oficial de fraude do seu operador", "O PIN do seu vizinho"], answer: 2, why: "O plano tem regras e canais oficiais, nunca números secretos." },
      { objective: "O5", q: "Porque guardar o plano de segurança em papel em casa?", options: ["Para a família o poder usar mesmo que o telefone se perca", "Porque os telefones não guardam notas", "Para o mostrar aos agentes", "Para o publicar na internet"], answer: 0, why: "Se o telefone for roubado, o plano em papel continua a dizer o que fazer." },
      { objective: "O5", q: "Com quem deve rever o plano de segurança?", options: ["Com desconhecidos no mercado", "Com alguém que liga a dizer que é do operador", "Com ninguém", "Com familiares como os pais mais velhos e os adolescentes"], answer: 3, why: "Os familiares são muitas vezes alvos; partilhar o plano também os protege." },
      { objective: "O5", q: "Onde lê a taxa verdadeira de uma operação?", options: ["Numa mensagem reencaminhada no WhatsApp", "Na tabela oficial do operador, na aplicação ou no cartaz da loja", "No palpite de um amigo", "Num comentário nas redes sociais"], answer: 1, why: "As taxas variam de país para país e mudam; os canais oficiais mostram a taxa atual." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Regras do PIN e do telefone", objective: "O1", notYet: "Não há regras para o PIN, ou o plano tem um PIN ou um código verdadeiro.", meets: "Diz: PIN difícil de adivinhar, bloqueio de ecrã, nunca partilhar o PIN nem os códigos, bloquear logo se perder o telefone.", exceeds: "Também inclui um PIN do SIM e o que fazer se a linha morrer de repente (possível troca de SIM)." },
      { name: "Verificação do nome", objective: "O2", notYet: "Não há um passo para verificar antes do PIN.", meets: "Diz para verificar o nome, o número e o valor no ecrã de confirmação e guardar a SMS de confirmação.", exceeds: "Acrescenta tirar o till ou o código do comerciante só da própria loja e ligar de volta para um número conhecido quando aparecem números de pagamento \"novos\"." },
      { name: "Sinais de alerta de burla", objective: "O3", notYet: "Menos de quatro sinais de burla, ou sinais vagos.", meets: "Faz a lista das seis burlas comuns com um sinal de alerta para cada uma.", exceeds: "Acrescenta um exemplo verdadeiro que o aluno ou a família viu e como o reconheceram." },
      { name: "Canais oficiais e primeira hora", objective: "O4", notYet: "Faltam os números de ajuda, ou foram copiados de uma fonte não oficial.", meets: "Dá os canais oficiais de ajuda, de reversão e de fraude do operador (do site, da aplicação ou da embalagem do SIM) e os passos da primeira hora.", exceeds: "Também indica a via de reclamação do banco central e o passo da polícia, e diz de onde foi copiado cada canal." },
      { name: "Verificação mensal e partilha", objective: "O5", notYet: "Não há verificação regular, e o plano não foi partilhado.", meets: "Marca uma verificação mensal do extrato e o plano foi lido com um familiar.", exceeds: "Inclui uma regra da família para ligar de volta e uma primeira verificação já feita e com data." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem, aos 30 dias, verificar o nome antes de cada PIN e ler o extrato todos os meses",
      "Alunos que dizem ter reconhecido e recusado uma chamada ou mensagem de burla em 30 dias",
      "Menos perdas de dinheiro móvel comunicadas pelos membros de um grupo de poupança, de uma associação de mercado ou de um grupo comunitário parceiro"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone com uma conta de dinheiro móvel (telefone simples ou smartphone)",
      "A tabela oficial de taxas e os canais de ajuda do operador (site, aplicação, cartaz da loja ou embalagem do SIM)",
      "Papel e caneta para o plano de segurança",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Bom para associações de mercado, grupos de poupança, igrejas, mesquitas, grupos de jovens e grupos de mulheres: façam o teste inicial juntos e depois um capítulo por reunião.",
      "Nunca peça aos alunos para escrever ou dizer um PIN ou um código verdadeiro na prática. Mostre os menus num telefone de demonstração ou desenhando os ecrãs.",
      "Antes da sessão, procure os passos oficiais de reversão e de fraude dos operadores que o grupo usa no seu país, nos próprios sites ou lojas dos operadores, e confirme que estão atualizados.",
      "Convide os membros a partilhar mensagens de burla que receberam (com os números pessoais escondidos) e a separá-las por sinal de alerta.",
      "Avalie a tarefa final com a grelha de avaliação; nunca recolha os planos se os alunos puseram dados pessoais."
    ]
  }
};
