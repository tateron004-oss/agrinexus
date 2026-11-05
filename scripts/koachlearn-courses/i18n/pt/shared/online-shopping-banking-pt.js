"use strict";

// Koach Learn course (Portuguese translation of shared/online-shopping-banking.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US agencies (FTC, FDIC, NCUA) and US payment apps are kept as in the English, with a short explanation.

module.exports = {
  id: "online-shopping-banking-pt",
  lang: "pt",
  translationOf: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Compras e Banco pela Internet com Segurança",
  skills: "Verificar que uma loja é verdadeira, Pagar da forma mais segura, Seguir e devolver uma encomenda, Usar a aplicação do banco com segurança, Reconhecer e denunciar burlas com dinheiro",
  outcome: "comprar algo pela internet numa loja que verificou, pagar da forma mais segura, guardar os registos e usar a aplicação ou o site oficial do seu banco para ver o seu saldo e encontrar um pagamento que não fez.",
  about: [
    "Hoje muitas pessoas compram comida, medicamentos e coisas para a casa pela internet e pagam contas no telefone. Feito com cuidado, poupa viagens e tempo. Feito sem cuidado, pode custar dinheiro.",
    "Este curso mostra como verificar uma loja antes de comprar, pagar da forma que mais o protege, seguir e devolver uma encomenda, usar a aplicação ou o site do seu banco com segurança e reconhecer burlas com dinheiro.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso ensina hábitos seguros; não é aconselhamento financeiro. Para perguntas sobre a sua própria conta, ligue para o número que está nas costas do seu cartão do banco."
  ],
  finalTask: "Escolha uma coisa de que precisa. Verifique a loja com três verificações (endereço web verdadeiro, avaliações e queixas, política de devolução), coloque a coisa no carrinho e pare na página de pagamento, anotando que forma de pagamento usaria e porquê. Depois abra a aplicação ou o site oficial do seu banco, veja o seu saldo e os movimentos recentes, e diga o que faria se visse um pagamento que não fez.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que querem comprar e usar o banco pela internet com segurança: idosos, cuidadores que gerem o dinheiro de um familiar, pessoas que voltam à comunidade e estão a abrir contas novas, e quem evita compras ou banco pela internet por medo de burlas.",
    startingPoint: "Sabem usar um telefone ou computador para abrir sites e aplicações, e podem ter uma conta bancária e um cartão de débito ou de crédito. Muitos não sabem bem como distinguir uma loja falsa de uma verdadeira, que formas de pagamento os protegem, como seguir e devolver uma encomenda, ou o que fazer com um pagamento que não fizeram.",
    gap: "As compras, o pagamento de contas e o banco passaram para a internet, e os burlões também, com lojas falsas, mensagens falsas de entrega e chamadas falsas do banco. Saber algumas verificações e a forma mais segura de pagar ajuda as pessoas a poupar tempo e dinheiro e a evitar perdas que são difíceis ou impossíveis de recuperar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como contestação, saldo e verificação em dois passos são explicadas",
      "Aparelhos: um telefone ou computador com internet; a aplicação ou o site oficial do banco",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Não é preciso fazer uma compra real: a tarefa final para na página de pagamento",
      "Privacidade: os alunos nunca escrevem números de cartão, palavras-passe ou códigos à frente de outras pessoas, em Wi-Fi público sem os seus próprios dados móveis, nem num email, SMS ou chat"
    ],
    prerequisites: "Nenhum. Os cursos \"Noções Básicas de Internet\" ou \"Usar um Smartphone e um Tablet\" ajudam quem é novo em sites e aplicações."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Diante de uma loja ou de uma promoção na internet", action: "verificar a loja com três verificações antes de comprar: um endereço web verdadeiro, avaliações e queixas, e a política de devolução", standard: "com as três verificações feitas e uma decisão clara de comprar ou não comprar" },
    { id: "O2", condition: "Na página de pagamento de uma loja", action: "escolher uma forma de pagamento que o protege e explicar porquê", standard: "sem nunca escolher cartões-presente, transferências bancárias, aplicações de pagamento ou criptomoedas para um vendedor da internet" },
    { id: "O3", condition: "Depois de fazer uma encomenda", action: "guardar os registos da encomenda, seguir o pacote no site ou na aplicação da própria loja e começar uma devolução", standard: "com a confirmação guardada e sem seguir o pacote a partir de links em SMS inesperados" },
    { id: "O4", condition: "Usando a aplicação ou o site oficial do seu banco", action: "entrar com segurança e ver o seu saldo e os movimentos recentes", standard: "chegando ao banco sem usar um link de um email ou SMS, e saindo da conta no fim" },
    { id: "O5", condition: "Com a sua lista de movimentos recentes", action: "identificar um pagamento que não fez e descrever os passos para o comunicar e bloquear o cartão", standard: "ligando para o número do cartão ou da aplicação oficial e agindo depressa" },
    { id: "O6", condition: "Diante de uma chamada, SMS ou email sobre o seu dinheiro", action: "identificar os sinais de uma burla com dinheiro e pará-la", standard: "sem nunca dar uma palavra-passe ou um código e ligando sempre de volta para o número do seu cartão" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comprar pela internet com segurança",
      lessons: [
        {
          objectives: ["O1"],
          title: "Verificar que uma loja é verdadeira",
          minutes: 5,
          goal: "Verificar um site antes de comprar nele.",
          text: [
            "As lojas falsas copiam o aspeto das verdadeiras e anunciam preços bons demais para serem verdade. Antes de comprar, tire um minuto para verificar.",
            "Escreva você mesmo o endereço da loja, ou use a aplicação oficial dela, em vez de clicar num anúncio ou num link de um SMS. Olhe para a barra de endereço: o nome está bem escrito? Procure https e um cadeado, mas saiba que a Comissão Federal de Comércio dos EUA (FTC) avisa que os burlões também os podem usar.",
            "A FTC sugere pesquisar o nome da loja ou do produto com a palavra \"complaint\" (queixa) ou \"scam\" (burla) para ver o que dizem outros compradores, ler as avaliações com cuidado porque algumas são falsas, e ver a política de devolução antes de comprar: quantos dias tem e quem paga o envio de volta."
          ],
          steps: ["Escreva você mesmo o endereço da loja ou use a aplicação oficial.", "Verifique a ortografia do endereço web.", "Pesquise o nome da loja com \"complaint\" ou \"scam\".", "Leia várias avaliações, não só as estrelas.", "Leia a política de devolução: quantos dias e quem paga o envio de volta."],
          words: [["Endereço web", "o nome de um site, que aparece na barra no topo do navegador, como target.com."], ["https", "um sinal de que a ligação a um site está protegida; os burlões também o podem usar."], ["Política de devolução", "as regras da loja para devolver coisas."]],
          slides: [
            { title: "As lojas falsas parecem verdadeiras", bullets: ["Copiam logótipos verdadeiros", "Preços bons demais para serem verdade"] },
            { title: "Chegue lá com segurança", bullets: ["Escreva você mesmo o endereço ou use a aplicação oficial", "Verifique a ortografia", "https e cadeado ajudam, mas os burlões também os usam"] },
            { title: "Três verificações antes de comprar", bullets: ["Pesquise o nome com \"complaint\" ou \"scam\"", "Leia várias avaliações, não só as estrelas", "Leia a política de devolução"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Escolha uma loja onde talvez compre. Faça as três verificações: pesquise o nome com \"complaint\", leia três avaliações e descubra quantos dias tem para devolver uma coisa.",
          youCanNow: "verificar o endereço, a reputação e a política de devolução de uma loja antes de comprar.",
          quickCheck: [
            { objective: "O1", q: "O que deve verificar na barra de endereço antes de comprar?", options: ["A cor da página", "Quantas coisas estão no carrinho", "A hora do dia", "Que o nome da loja está bem escrito"], answer: 3, why: "As lojas falsas usam muitas vezes nomes parecidos, por isso verifique a ortografia." },
            { objective: "O1", q: "Vê um anúncio nas redes sociais de sapatos a um preço muito baixo. O que faria?", options: ["Escrever eu mesmo o endereço da loja e pesquisar o nome com \"complaint\" ou \"scam\"", "Clicar no anúncio e pagar logo", "Enviar ao vendedor um cartão-presente", "Enviar o número do meu cartão numa mensagem"], answer: 0, why: "Ir à loja por si mesmo e procurar queixas ajuda a descobrir lojas falsas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pagar da forma mais segura",
          minutes: 5,
          goal: "Escolher uma forma de pagamento que o protege se algo correr mal.",
          text: [
            "A forma como paga é importante. A FTC diz que pagar com cartão de crédito dá uma proteção forte: pode contestar um pagamento errado, por algo que nunca chegou ou que não era como foi descrito. Aja depressa e avise a empresa do cartão logo que vir um problema.",
            "A FTC avisa que nunca deve pagar a um vendedor da internet com cartões-presente, transferências bancárias, aplicações de pagamento ou criptomoedas. É difícil recuperar este dinheiro, e é por isso que os burlões o pedem.",
            "Escreva os dados do cartão só na página de pagamento de uma loja que verificou, nunca num email, SMS ou chat. Num computador partilhado ou da biblioteca, não deixe o navegador guardar o seu cartão."
          ],
          steps: ["Use um cartão de crédito quando puder, ou um pagamento de confiança da loja que verificou.", "Nunca pague a um vendedor com cartão-presente, transferência bancária, aplicação de pagamento ou criptomoeda.", "Escreva os dados do cartão só na página de pagamento da loja verificada.", "Não guarde o cartão num computador partilhado.", "Veja o seu extrato e comunique problemas depressa."],
          words: [["Cartão de crédito", "um cartão que empresta dinheiro que paga mais tarde; tem proteções fortes para contestações."], ["Contestação", "dizer à empresa do cartão que um pagamento está errado, para ela o investigar."], ["Transferência bancária", "enviar dinheiro diretamente de uma conta para outra; é muito difícil de recuperar."]],
          slides: [
            { title: "A forma de pagar é importante", bullets: ["Cartão de crédito: proteção forte para contestações", "Avise a empresa do cartão depressa"] },
            { title: "Nunca pague a um vendedor com", bullets: ["Cartões-presente", "Transferências bancárias", "Aplicações de pagamento", "Criptomoedas"] },
            { title: "Dados do cartão", bullets: ["Só na página de pagamento de uma loja verificada", "Nunca num email, SMS ou chat", "Não os guarde em computadores partilhados"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Veja os cartões e as formas de pagamento que tem. Escreva qual usaria para comprar pela internet e porquê, e que formas recusaria se um vendedor as pedisse.",
          youCanNow: "escolher a forma de pagamento que o protege e recusar as que os burlões pedem.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer contestar um pagamento?", options: ["Pagá-lo duas vezes", "Pedir à empresa do cartão para corrigir um pagamento errado", "Enviar ao vendedor um cartão-presente", "Apagar a sua conta"], answer: 1, why: "Com um cartão de crédito pode contestar um pagamento por algo errado ou que nunca chegou." },
            { objective: "O2", q: "Um vendedor da internet diz que só aceita transferência bancária. O que faria?", options: ["Fazer a transferência", "Pagar metade por transferência e metade com cartão-presente", "Não comprar; a FTC avisa que nunca se deve pagar assim a vendedores da internet", "Pagar com criptomoeda em vez disso"], answer: 2, why: "As transferências bancárias são difíceis de recuperar, e é por isso que os burlões as pedem." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Seguir, receber e devolver uma encomenda",
          minutes: 4,
          goal: "Guardar os registos da encomenda, seguir um pacote e começar uma devolução.",
          text: [
            "Depois de comprar, a loja envia uma confirmação da encomenda por email. Guarde-a. A FTC sugere guardar os dados da encomenda, a política de devolução, a promessa de envio do vendedor, as suas mensagens com o vendedor e o extrato do pagamento.",
            "Siga o pacote na sua conta no site ou na aplicação da loja, não a partir de um link num SMS inesperado. Os SMS falsos sobre um \"problema na entrega\" são uma burla comum.",
            "Para devolver uma coisa, entre na sua conta, encontre a encomenda e escolha devolver. Siga os passos, guarde o recibo da entrega do pacote e veja se o reembolso aparece no seu extrato. Se o vendedor não resolver um problema, pode denunciá-lo à FTC em reportfraud.ftc.gov."
          ],
          steps: ["Guarde o email de confirmação da encomenda.", "Siga o pacote na sua conta no site ou na aplicação da loja.", "Ignore SMS inesperados sobre entregas que têm links.", "Para devolver: entre, encontre a encomenda, escolha devolver e siga os passos.", "Guarde o recibo da entrega do pacote e verifique o reembolso."],
          words: [["Confirmação da encomenda", "o email que prova o que comprou e quanto pagou."], ["Seguimento", "acompanhar onde está o seu pacote no caminho até você."], ["Reembolso", "dinheiro que lhe é devolvido."]],
          slides: [
            { title: "Guarde os registos", bullets: ["Confirmação da encomenda", "Política de devolução e promessa de envio", "Mensagens e o seu extrato"] },
            { title: "Siga com segurança", bullets: ["Use a sua conta no site ou na aplicação da loja", "Ignore SMS inesperados sobre entregas com links"] },
            { title: "Devoluções", bullets: ["Entre, encontre a encomenda, escolha devolver", "Guarde o recibo da entrega do pacote", "Veja se o reembolso chega"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Encontre um email de confirmação de encomenda na sua caixa de entrada (ou um de uma compra antiga) e crie uma pasta ou etiqueta no email chamada \"Encomendas\" para o guardar. Se tiver uma encomenda a caminho, siga-a na aplicação ou no site da própria loja.",
          youCanNow: "guardar os registos das encomendas, seguir um pacote com segurança e começar uma devolução.",
          quickCheck: [
            { objective: "O3", q: "O que é uma confirmação da encomenda?", options: ["Um SMS a pedir para pagar uma taxa", "Um anúncio de um produto novo", "O email que a loja envia depois de comprar", "Um extrato do banco"], answer: 2, why: "A loja envia por email uma confirmação da encomenda; guarde-a com os seus registos." },
            { objective: "O3", q: "Entregou uma devolução nos correios. O que faria a seguir?", options: ["Deitar fora o recibo", "Comprar a coisa outra vez", "Apagar a aplicação da loja", "Guardar o recibo da entrega e ver se o reembolso aparece no extrato"], answer: 3, why: "O recibo prova que a devolveu, e o extrato mostra o reembolso." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Comprar pela internet com segurança",
        questions: [
          { objective: "O1", q: "Um anúncio mostra um televisor de marca a um décimo do preço normal. O que deve fazer primeiro?", options: ["Comprar antes que acabe", "Verificar a loja: pesquisar o nome com \"complaint\" ou \"scam\"", "Pagar com um cartão-presente", "Enviar o número do cartão por SMS"], answer: 1, why: "Preços bons demais para serem verdade são um sinal de alerta; verifique primeiro." },
          { objective: "O1", q: "O que diz a FTC sobre o https e o ícone do cadeado?", options: ["Provam que uma loja é honesta", "Só existem em lojas falsas", "Querem dizer envio grátis", "Ajudam, mas os burlões também os podem usar"], answer: 3, why: "A encriptação protege a ligação, não a honestidade do vendedor." },
          { objective: "O2", q: "Que forma de pagamento dá a proteção mais forte para contestar um pagamento errado?", options: ["Um cartão de crédito", "Um cartão-presente", "Uma transferência bancária", "Criptomoeda"], answer: 0, why: "A FTC diz que os cartões de crédito dão a proteção mais forte para contestações." },
          { objective: "O2", q: "Um vendedor pede para pagar com cartões-presente. O que faz?", options: ["Compro os cartões-presente", "Pago metade com cartões-presente", "Recuso; é um sinal de burla", "Envio uma foto dos cartões"], answer: 2, why: "A FTC avisa que nunca se deve pagar a vendedores da internet com cartões-presente." },
          { objective: "O3", q: "Recebe um SMS sobre um \"problema na entrega\" com um link. Qual é o passo mais seguro?", options: ["Clicar no link", "Responder com a sua morada", "Ver a encomenda na aplicação ou no site da própria loja", "Pagar a pequena taxa"], answer: 2, why: "Siga a encomenda na sua conta, não a partir de links inesperados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar o banco pela internet com segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar a aplicação ou o site do seu banco com segurança",
          minutes: 5,
          goal: "Entrar na aplicação ou no site oficial do seu banco e ver o saldo e os movimentos.",
          text: [
            "O banco pela internet deixa-o ver o seu saldo, ver o que entrou e saiu, pagar contas e passar dinheiro entre as suas próprias contas, no telefone ou no computador.",
            "Instale a aplicação do banco só a partir da loja oficial de aplicações e verifique se quem a fez é mesmo o seu banco. Ou escreva você mesmo o endereço web do banco; encontra-o no cartão, no extrato ou perguntando no balcão. Nunca entre a partir de um link num email ou SMS.",
            "Use uma palavra-passe forte que não usa em mais nenhum lado e ligue a verificação em dois passos. Não use o banco em Wi-Fi público sem os dados móveis do seu telefone, e saia sempre da conta quando terminar, sobretudo num computador partilhado."
          ],
          steps: ["Instale a aplicação oficial do banco ou escreva você mesmo o endereço do banco.", "Entre com uma palavra-passe forte e única.", "Ligue a verificação em dois passos nas definições de segurança.", "Veja o seu saldo e os movimentos recentes.", "Saia da conta quando terminar."],
          words: [["Saldo", "quanto dinheiro tem agora na sua conta."], ["Movimento", "um pagamento que entra ou sai da sua conta."], ["Verificação em dois passos", "uma segunda verificação quando entra, normalmente um código enviado para o seu telefone."]],
          slides: [
            { title: "O que faz o banco pela internet", bullets: ["Ver o saldo e os movimentos", "Pagar contas", "Passar dinheiro entre as suas próprias contas"] },
            { title: "Chegue lá com segurança", bullets: ["Aplicação oficial da loja de aplicações", "Ou escreva você mesmo o endereço do banco", "Nunca entre por um link de email ou SMS"] },
            { title: "Mantenha-se seguro", bullets: ["Palavra-passe forte e única", "Verificação em dois passos ligada", "Saia da conta quando terminar"] }
          ],
          tryIt: "Abra a aplicação ou o site oficial do seu banco (escreva você mesmo o endereço). Entre, veja o seu saldo e os seus últimos cinco movimentos e depois saia da conta.",
          youCanNow: "entrar no seu banco com segurança e ver o seu saldo e os movimentos.",
          quickCheck: [
            { objective: "O4", q: "Onde pode encontrar o endereço web verdadeiro do seu banco?", options: ["No cartão, no extrato ou perguntando no balcão", "Num SMS que diz que a sua conta está bloqueada", "Num anúncio nas redes sociais", "Num email de alguém que não conhece"], answer: 0, why: "O cartão, o extrato e o balcão dão o endereço verdadeiro do banco." },
            { objective: "O4", q: "Viu o seu saldo num computador da biblioteca. O que faria antes de sair?", options: ["Deixar a página aberta", "Sair da conta", "Guardar a palavra-passe no navegador", "Escrever a palavra-passe num papel"], answer: 1, why: "Saia sempre da conta quando terminar de usar o banco, sobretudo num computador partilhado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar um pagamento errado e saber que o seu dinheiro está protegido",
          minutes: 5,
          goal: "Rever os seus movimentos e saber o que fazer com um pagamento que não fez.",
          text: [
            "Veja os seus movimentos pelo menos uma vez por semana. Procure pagamentos que não reconhece, mesmo pequenos; os ladrões às vezes testam um cartão primeiro com um pagamento muito pequeno. Muitos bancos deixam ligar alertas que lhe enviam um SMS ou email quando sai dinheiro da sua conta.",
            "Se vir um pagamento que não fez, ligue para o número nas costas do seu cartão ou na aplicação oficial, e aja depressa. Muitos cartões e aplicações deixam bloquear ou congelar o cartão logo.",
            "Nos EUA, o dinheiro num banco segurado pela FDIC está protegido até $250,000 por depositante, por banco, para cada categoria de titularidade da conta. As cooperativas de crédito seguradas pela NCUA têm o mesmo limite normal de $250,000. A FDIC diz que criptoativos, ações, obrigações e fundos de investimento não estão segurados, mesmo quando vendidos por um banco."
          ],
          steps: ["Reveja os movimentos todas as semanas.", "Ligue os alertas da conta na aplicação.", "Se um pagamento não for seu: bloqueie o cartão na aplicação, se puder.", "Ligue para o número nas costas do seu cartão.", "Espere pelo seguimento do banco e verifique o próximo extrato."],
          words: [["Alerta", "um SMS ou email que o seu banco envia quando acontece algo na sua conta."], ["FDIC", "a Federal Deposit Insurance Corporation (Corporação Federal de Seguro de Depósitos), que segura o dinheiro nos bancos dos EUA."], ["NCUA", "a National Credit Union Administration (Administração Nacional de Cooperativas de Crédito), que segura o dinheiro nas cooperativas de crédito dos EUA."]],
          slides: [
            { title: "Verifique todas as semanas", bullets: ["Procure pagamentos que não conhece", "Mesmo os pequenos", "Ligue os alertas da conta"] },
            { title: "Um pagamento não é seu", bullets: ["Bloqueie o cartão na aplicação", "Ligue para o número nas costas do seu cartão", "Aja depressa"] },
            { title: "Os seus depósitos estão segurados", bullets: ["Bancos FDIC: $250,000 por depositante, por banco, por categoria de titularidade", "Cooperativas de crédito NCUA: limite normal de $250,000"] },
            { title: "Não estão segurados", bullets: ["Criptoativos, ações, obrigações e fundos de investimento", "Mesmo quando um banco os vende"] }
          ],
          sources: [{ name: "FDIC: Understanding deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA: Share insurance coverage", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "Na aplicação do seu banco, encontre onde se configuram os alertas e ligue um alerta para pagamentos. Depois encontre o botão que bloqueia ou congela o cartão (não carregue nele a não ser que precise).",
          youCanNow: "ver os seus movimentos, ligar alertas e agir depressa perante um pagamento que não fez.",
          quickCheck: [
            { objective: "O5", q: "Porque deve olhar para pagamentos pequenos que não reconhece?", options: ["Os pagamentos pequenos estão sempre bem", "Os bancos nunca erram", "Os pagamentos pequenos são grátis", "Os ladrões às vezes testam um cartão primeiro com um pagamento muito pequeno"], answer: 3, why: "Um pagamento pequeno desconhecido pode ser um teste antes de pagamentos maiores." },
            { objective: "O5", q: "Quer saber logo quando sai dinheiro da sua conta. O que faria?", options: ["Verificar uma vez por ano", "Pedir a um desconhecido para vigiar", "Ligar os alertas na aplicação do banco para receber um SMS ou email", "Fechar a conta"], answer: 2, why: "Muitos bancos oferecem alertas quando sai dinheiro da sua conta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Burlas com dinheiro: falsas chamadas do banco e truques com aplicações",
          minutes: 5,
          goal: "Reconhecer uma burla com dinheiro e pará-la.",
          text: [
            "Uma burla comum: alguém liga, envia um SMS ou um email a fingir que é da equipa de fraudes do seu banco. Diz que a sua conta está em perigo e pede a sua palavra-passe, um código enviado para o seu telefone, ou que passe dinheiro para uma \"conta segura\". Um banco verdadeiro nunca pede estas coisas.",
            "A FTC indica quatro sinais de uma burla: fingem ser alguém de confiança, há um problema ou um prémio, pressionam-no a agir já, e querem o pagamento de uma forma estranha, como cartões-presente, transferências bancárias, aplicações de pagamento ou criptomoedas.",
            "Na dúvida, desligue. Ligue para o número nas costas do seu cartão. Trate o dinheiro enviado por aplicações de pagamento como dinheiro vivo: envie-o só a pessoas que conhece. Nos Estados Unidos, denuncie burlas em reportfraud.ftc.gov."
          ],
          steps: ["Nunca partilhe a sua palavra-passe nem um código enviado para o seu telefone.", "Nunca passe dinheiro para uma \"conta segura\" porque alguém ao telefone o diz.", "Desligue e ligue para o número nas costas do seu cartão.", "Envie dinheiro por aplicações de pagamento só a pessoas que conhece.", "Denuncie burlas em reportfraud.ftc.gov."],
          words: [["Usurpação de identidade", "fingir ser outra pessoa ou entidade, como o seu banco ou um serviço do governo."], ["Aplicação de pagamento", "uma aplicação que envia dinheiro de pessoa para pessoa, como Venmo, Cash App ou Zelle nos EUA."]],
          slides: [
            { title: "Falsas chamadas do banco", bullets: ["\"A sua conta está em perigo\"", "Pedem a sua palavra-passe ou um código", "Ou que passe dinheiro para uma \"conta segura\""] },
            { title: "Sinais de burla da FTC", bullets: ["Finge ser alguém de confiança", "Um problema ou um prémio", "Pressão para agir já", "Pagamento estranho: cartão-presente, transferência, aplicação, cripto"] },
            { title: "O que fazer", bullets: ["Desligue", "Ligue para o número nas costas do seu cartão", "Aplicações de pagamento: só pessoas que conhece"] },
            { title: "Denuncie", bullets: ["reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Prática para a tarefa final: escreva o número de telefone das costas do seu cartão do banco num lugar seguro em casa. Depois faça a tarefa final: verifique uma loja, escolha a forma de pagamento e reveja os movimentos do seu banco.",
          youCanNow: "reconhecer uma falsa chamada do banco ou um truque com aplicações de pagamento, pará-lo e denunciá-lo.",
          quickCheck: [
            { objective: "O6", q: "O que é que um banco verdadeiro nunca lhe pede?", options: ["Que vá a um balcão", "A sua palavra-passe ou o código enviado para o seu telefone", "Que veja o seu extrato", "Que ligue a verificação em dois passos"], answer: 1, why: "Um banco verdadeiro nunca pede a sua palavra-passe, um código, nem que passe dinheiro para uma \"conta segura\"." },
            { objective: "O6", q: "Um SMS do \"seu banco\" diz que a sua conta está em perigo e para ligar para um número que está no SMS. O que faria?", options: ["Ignorar o número do SMS e ligar para o número nas costas do meu cartão", "Ligar para o número do SMS", "Responder com a minha palavra-passe", "Passar o meu dinheiro para a conta que me dão"], answer: 0, why: "Ligar para o número do seu cartão leva-o ao seu banco verdadeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar o banco pela internet com segurança",
        questions: [
          { objective: "O4", q: "Qual é a forma mais segura de chegar ao site do seu banco?", options: ["Escrever eu mesmo o endereço ou usar a aplicação oficial", "Clicar num link de um SMS", "Pesquisar e clicar no primeiro anúncio", "Usar um link que alguém me dá ao telefone"], answer: 0, why: "Escrever o endereço ou usar a aplicação oficial evita sites falsos." },
          { objective: "O5", q: "Vê um pagamento pequeno que não reconhece. O que faz?", options: ["Ignoro porque é pequeno", "Publico sobre isso na internet", "Espero um ano", "Bloqueio o cartão e ligo para o número das costas"], answer: 3, why: "Os ladrões testam muitas vezes um cartão com um pagamento pequeno; aja depressa." },
          { objective: "O5", q: "Qual é o valor normal do seguro da FDIC?", options: ["$1,000 por pessoa", "$250,000 por depositante, por banco segurado, por categoria de titularidade", "Sem limite", "Nada; os bancos não estão segurados"], answer: 1, why: "A FDIC segura até $250,000 por depositante, por banco, por categoria de titularidade." },
          { objective: "O6", q: "Alguém que liga do \"seu banco\" pede o código que acabou de chegar ao seu telefone. O que faz?", options: ["Leio-lhe o código", "Desligo e ligo para o número do meu cartão", "Dou metade do código", "Envio-lhe o código por SMS"], answer: 1, why: "Os bancos verdadeiros nunca pedem esse código." },
          { objective: "O5", q: "O que NÃO está segurado pela FDIC?", options: ["Uma conta à ordem num banco segurado", "Uma conta poupança num banco segurado", "Um depósito a prazo num banco segurado", "Criptoativos"], answer: 3, why: "A FDIC diz que os criptoativos não estão segurados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Compras e Banco pela Internet com Segurança",
    questions: [
      { objective: "O1", q: "A forma mais segura de chegar a uma loja da internet é:", options: ["Escrever você mesmo o endereço ou usar a aplicação oficial", "Clicar num anúncio nas redes sociais", "Usar um link do SMS de um desconhecido", "Ler qualquer código QR"], answer: 0, why: "Assim evita sites que imitam os verdadeiros." },
      { objective: "O1", q: "A FTC sugere pesquisar o nome de uma loja com:", options: ["\"free\" (grátis)", "\"coupon\" (cupão)", "\"complaint\" (queixa) ou \"scam\" (burla)", "\"cheap\" (barato)"], answer: 2, why: "Mostra as más experiências de outros compradores." },
      { objective: "O1", q: "As avaliações devem ser lidas:", options: ["Só as estrelas", "Nunca", "Com cuidado, porque algumas são falsas", "Só a primeira"], answer: 2, why: "A FTC avisa que algumas avaliações são falsas." },
      { objective: "O1", q: "Antes de comprar, veja na política de devolução:", options: ["Quantos dias tem e quem paga o envio de volta", "O nome do dono", "O logótipo da loja", "As cores do site"], answer: 0, why: "As regras de devolução mudam de loja para loja e são importantes se algo correr mal." },
      { objective: "O1", q: "Uma promoção de uma coisa cara de marca que parece boa demais para ser verdade pode ser:", options: ["Uma oferta do banco", "Sempre verdadeira", "Uma oferta do governo", "Falsificada ou roubada"], answer: 3, why: "A FTC avisa que estas promoções podem ser produtos falsos ou roubados." },
      { objective: "O2", q: "Que forma de pagamento a FTC diz que dá a proteção mais forte para contestações?", options: ["Transferência bancária", "Cartão de crédito", "Cartão-presente", "Criptomoeda"], answer: 1, why: "Os cartões de crédito deixam contestar pagamentos errados." },
      { objective: "O2", q: "Onde deve escrever o número do seu cartão?", options: ["Na resposta a um email", "Na página de pagamento de uma loja que verificou", "Num SMS", "Num chat das redes sociais"], answer: 1, why: "Só na página de pagamento da loja verificada." },
      { objective: "O2", q: "Num computador da biblioteca, o navegador oferece-se para guardar o seu cartão. Você:", options: ["Diz que sim", "Guarda-o duas vezes", "Escreve-o num papel autocolante", "Diz que não"], answer: 3, why: "Nunca guarde os dados do cartão num computador partilhado." },
      { objective: "O3", q: "Que registo deve guardar depois de comprar pela internet?", options: ["A confirmação da encomenda", "Nada", "Só a caixa", "O anúncio que viu"], answer: 0, why: "Prova o que comprou e quanto pagou." },
      { objective: "O3", q: "Um SMS diz que o seu pacote está parado e pede para pagar uma pequena taxa por um link. Você deve:", options: ["Pagar a taxa", "Clicar para ver", "Ver a encomenda na aplicação ou no site da própria loja", "Responder com o número do cartão"], answer: 2, why: "Os SMS falsos de entrega são uma burla comum." },
      { objective: "O3", q: "Se um vendedor não resolver um problema, nos EUA pode denunciá-lo em:", options: ["Um grupo nas redes sociais", "O anúncio do vendedor", "reportfraud.ftc.gov", "Em lado nenhum"], answer: 2, why: "A FTC recebe denúncias de fraude nesse site." },
      { objective: "O4", q: "O \"saldo\" é:", options: ["Quanto dinheiro tem agora na sua conta", "Um pagamento", "Uma palavra-passe", "Um balcão do banco"], answer: 0, why: "O saldo mostra o que tem agora." },
      { objective: "O4", q: "Quando termina de usar o banco pela internet, deve:", options: ["Deixá-lo aberto", "Guardar a palavra-passe no navegador de um computador partilhado", "Partilhar o ecrã", "Sair da conta"], answer: 3, why: "Sair da conta impede a próxima pessoa de entrar." },
      { objective: "O4", q: "A verificação em dois passos na sua conta do banco quer dizer:", options: ["Duas palavras-passe escritas num papel", "Uma segunda verificação, como um código enviado para o seu telefone", "Dois cartões do banco", "Uma aplicação mais lenta"], answer: 1, why: "Junta um código que um ladrão não teria." },
      { objective: "O5", q: "Com que frequência é sensato ver os seus movimentos?", options: ["Uma vez por ano", "Pelo menos uma vez por semana", "Nunca", "Só quando o banco liga"], answer: 1, why: "Ver todas as semanas apanha os problemas depressa." },
      { objective: "O5", q: "Os depósitos nas cooperativas de crédito dos EUA são segurados pela:", options: ["FTC", "Loja de aplicações", "Sua entidade patronal", "NCUA"], answer: 3, why: "A NCUA segura as cooperativas de crédito com seguro federal." },
      { objective: "O6", q: "Alguém liga e diz que a sua conta está em perigo e que tem de passar dinheiro para uma \"conta segura\". Isto é:", options: ["Uma burla", "Um reembolso", "Uma lei nova", "Um passo normal do banco"], answer: 0, why: "Os bancos verdadeiros nunca pedem isto; é uma burla comum." },
      { objective: "O6", q: "O dinheiro enviado por uma aplicação de pagamento deve ser tratado como:", options: ["Um empréstimo", "Um cartão de crédito", "Dinheiro vivo: envie só a pessoas que conhece", "Poupanças seguradas"], answer: 2, why: "É difícil de recuperar, como dinheiro vivo." },
      { objective: "O6", q: "Qual é um dos quatro sinais de burla da FTC?", options: ["Um cumprimento educado", "Uma conta em papel enviada pelo correio pela empresa da luz ou da água", "Pressão para agir já", "Pagar ao balcão de uma loja"], answer: 2, why: "Os burlões apressam-no para que não pare para verificar." },
      { objective: "O6", q: "Se tiver dúvidas sobre uma chamada do seu banco, o melhor passo é:", options: ["Desligar e ligar para o número nas costas do seu cartão", "Dar-lhes a sua palavra-passe", "Continuar a falar", "Enviar um pequeno pagamento"], answer: 0, why: "Ligar para um número conhecido leva-o ao banco verdadeiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Verificar a loja",
        objective: "O1",
        notYet: "Foram feitas menos de três verificações, ou chegou à loja por um anúncio ou um link de SMS.",
        meets: "As três verificações feitas: endereço web verdadeiro, avaliações e queixas, e a política de devolução.",
        exceeds: "Também anota quantos dias tem para devolver a coisa e quem paga o envio de volta."
      },
      {
        name: "Escolha do pagamento",
        objective: "O2",
        notYet: "Nenhuma forma de pagamento escolhida, ou escolheu cartão-presente, transferência, aplicação de pagamento ou cripto.",
        meets: "Escolhe uma forma que protege, como um cartão de crédito, e diz porquê.",
        exceeds: "Também diz que não se deve guardar o cartão num computador partilhado."
      },
      {
        name: "Verificar a conta do banco",
        objective: "O4",
        notYet: "Entrou por um link, ou não encontrou o saldo ou os movimentos.",
        meets: "Entra pela aplicação oficial ou por um endereço escrito por si e encontra o saldo e os movimentos recentes.",
        exceeds: "Também liga a verificação em dois passos ou os alertas, e sai da conta."
      },
      {
        name: "Plano para um pagamento errado",
        objective: "O5",
        notYet: "Não tem plano, ou o plano usa um número de um SMS ou email.",
        meets: "Diz que bloquearia o cartão e ligaria depressa para o número do cartão ou da aplicação oficial.",
        exceeds: "Também diz que veria os movimentos todas as semanas e guardaria os registos para uma contestação."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ver os movimentos do banco pelo menos uma vez por semana 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter evitado uma loja falsa, um SMS de entrega falso ou uma chamada de um falso banco",
      "Alunos que dizem ter encontrado e comunicado um pagamento que não fizeram"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet, numa ligação privada (Wi-Fi de casa ou os dados móveis do telefone)",
      "A aplicação oficial do banco do aluno ou o endereço web escrito por ele, se tiver uma conta bancária",
      "Uma coisa de exemplo para verificar, como algo de que precisa este mês",
      "Cerca de 60 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Os alunos não fazem nenhuma compra real na aula; a tarefa de compras para na página de pagamento.",
      "Nunca peça aos alunos para mostrar o saldo, números de cartão ou palavras-passe; deixe-os fazer os passos do banco em privado no seu próprio aparelho.",
      "Evite usar o banco no Wi-Fi público do programa; peça aos alunos para usar os dados móveis do telefone ou fazer o passo do banco em casa.",
      "Os alunos sem conta bancária podem fazer a lição do banco com uma demonstração pública de um banco ou descrevendo os passos; indique-lhes programas locais que ajudam a abrir contas seguras e de baixo custo, se o seu programa tiver um.",
      "Pratique a falsa chamada do banco como uma dramatização, para os alunos ensaiarem desligar e ligar para o número do seu cartão."
    ]
  }
};
