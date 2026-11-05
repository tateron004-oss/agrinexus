"use strict";

// Koach Learn course (Portuguese translation of shared/personal-finance-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// No investment advice. US names (CFPB, AnnualCreditReport.com, Equifax, Experian, TransUnion) are kept as written.

module.exports = {
  id: "personal-finance-basics-pt",
  lang: "pt",
  translationOf: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Finanças Pessoais Básicas: Orçamento, Crédito e Poupança",
  skills: "Fazer um orçamento mensal, Ler o seu relatório de crédito, Planear o pagamento das dívidas, Criar uma poupança de emergência, Poupar com um banco ou dinheiro móvel, Reconhecer empréstimos abusivos e burlas",
  outcome: "fazer um plano de dinheiro de uma página: um orçamento mensal, um plano para pagar as dívidas, uma meta de poupança de emergência e uma data para verificar os seus relatórios de crédito, e reconhecer um empréstimo ou uma oferta que o pode prender.",
  about: [
    "Este curso é para quem quer ter mais controlo sobre o seu dinheiro: um avô ou uma avó com um rendimento fixo, um jovem com o primeiro salário, um agricultor que recebe na colheita, um atleta com um novo patrocinador, um antigo militar que começa um trabalho civil, ou alguém que volta para casa e recomeça a vida.",
    "Você vai escrever um orçamento simples, ler o seu próprio relatório de crédito, escolher que dívida pagar primeiro, começar um fundo de emergência, aprender formas seguras de poupar com um banco, uma cooperativa de crédito ou dinheiro móvel, e aprender os sinais de alerta dos empréstimos do tipo \"payday\" e das burlas com dinheiro.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que faz com os seus próprios números, em papel ou numa folha de cálculo. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso ensina a gerir o dinheiro; não dá conselhos de investimento. Para decisões grandes, fale com uma pessoa de confiança e qualificada, como um conselheiro de crédito de uma organização sem fins lucrativos."
  ],
  finalTask: "Escreva um plano de dinheiro de uma página: (1) um orçamento mensal com o seu rendimento, necessidades, desejos e poupança; (2) uma lista das suas dívidas e aquela em que vai pagar mais; (3) uma meta de poupança de emergência, quanto vai guardar por semana ou por mês, e onde; (4) a data em que vai verificar os seus relatórios de crédito. Depois leia uma oferta de empréstimo ou de dinheiro que tenha visto e escreva todos os sinais de alerta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Qualquer pessoa que queira ter mais controlo sobre o seu dinheiro: idosos com um rendimento fixo, jovens com o primeiro salário, agricultores que recebem na colheita, atletas com um novo patrocinador, antigos militares que começam um trabalho civil e pessoas que voltam para casa e recomeçam a vida.",
    startingPoint: "Ganham ou recebem algum dinheiro e pagam contas, mas muitos não escrevem um orçamento, nunca leram o seu relatório de crédito, têm dívidas sem um plano para as pagar, têm pouca poupança de emergência, ou têm dificuldade em reconhecer um empréstimo abusivo ou uma burla.",
    gap: "Sem um plano, pequenas surpresas tornam-se dívidas, pagamentos em atraso e burlas que custam dinheiro e preocupação às famílias. Os alunos precisam de um plano de dinheiro simples de uma página e do hábito de verificar as ofertas, para manterem o controlo e criarem poupança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas, com contas simples",
      "Não são conselhos de investimento; as decisões grandes vão para uma pessoa de confiança e qualificada, como um conselheiro de crédito sem fins lucrativos",
      "Privacidade: nenhum número de conta bancária, número de cartão ou palavra-passe em ferramentas de IA ou partilhado na turma",
      "As regras e as taxas mudam de país para país e de serviço para serviço; os alunos verificam as tabelas de taxas e as fontes oficiais",
      "Aparelhos: papel ou uma folha de cálculo gratuita; alguns alunos usam dinheiro móvel"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o rendimento e os custos do mês passado", action: "escrever um orçamento mensal que separa os custos em necessidades, desejos e poupança", standard: "com uma linha de poupança e o total verificado acima ou abaixo de zero" },
    { id: "O2", condition: "Usando um relatório de crédito gratuito (AnnualCreditReport.com nos EUA)", action: "verificar cada conta do seu relatório de crédito e contestar qualquer erro", standard: "guardando cópias de tudo o que enviar" },
    { id: "O3", condition: "Com uma lista de dívidas", action: "escolher em que dívida pagar mais, pela forma da taxa mais alta ou pela forma do saldo mais pequeno", standard: "pagando sempre pelo menos o mínimo de cada dívida a tempo" },
    { id: "O4", condition: "Usando o seu orçamento", action: "definir uma meta de poupança de emergência com um valor, um dia e uma forma automática de poupar", standard: "acrescentada como uma linha no seu orçamento" },
    { id: "O5", condition: "Com um banco, uma cooperativa de crédito, um serviço de dinheiro móvel ou um grupo de poupança", action: "verificar as taxas e as regras antes de escolher um lugar seguro para poupar", standard: "escrevendo quanto custa pôr e tirar dinheiro" },
    { id: "O6", condition: "Com uma oferta de empréstimo ou de dinheiro", action: "identificar os sinais de alerta de um empréstimo abusivo ou de uma burla antes de dizer que sim", standard: "encontrando todos os sinais de alerta da oferta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Saber para onde vai o seu dinheiro",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fazer um orçamento mensal simples",
          minutes: 5,
          goal: "Escrever um orçamento mensal que mostre o seu rendimento, necessidades, desejos e poupança.",
          text: [
            "Um orçamento é um plano para o seu dinheiro. Responde a duas perguntas: quanto dinheiro entra por mês e para onde vai. Sem um plano, o dinheiro costuma desaparecer em coisas pequenas e as contas grandes parecem uma surpresa.",
            "Comece pelo rendimento: o salário depois dos impostos, apoios como a Segurança Social (Social Security) ou uma pensão, dinheiro da venda de colheitas ou de produtos, gorjetas, ou um pagamento de um patrocinador. Se o seu rendimento muda de mês para mês, use o mês normal mais baixo, para que o plano funcione mesmo num mês fraco.",
            "Depois faça a lista dos seus gastos em três grupos. As necessidades são o que tem de pagar: casa, comida, água e luz, transporte, medicamentos, pagamentos mínimos das dívidas. Os desejos são coisas boas mas não obrigatórias: comer fora, roupa nova, serviços de streaming. A poupança é o dinheiro que guarda de propósito. Ponha a poupança no plano como se fosse uma conta, mesmo que seja pequena.",
            "Se os gastos forem maiores do que o rendimento, corte primeiro nos desejos e depois procure formas mais baratas de pagar as necessidades. Um assistente de IA pode ajudá-lo a fazer uma tabela de orçamento em branco ou sugerir formas de cortar custos, mas escreva só valores aproximados, nunca números de conta nem palavras-passe."
          ],
          steps: ["Escreva o seu rendimento mensal total depois dos impostos. Se muda, use um mês baixo.", "Faça a lista das suas necessidades e quanto custa cada uma por mês.", "Faça a lista dos seus desejos e quanto custa cada um por mês.", "Escolha um valor para poupar, mesmo que seja pequeno.", "Tire as necessidades, os desejos e a poupança do rendimento. Se o resultado for abaixo de zero, corte primeiro nos desejos.", "Verifique o plano no fim do mês e ajuste."],
          words: [["Orçamento", "um plano de como vai usar o dinheiro que recebe em cada mês."], ["Rendimento", "dinheiro que entra: salário, apoios, vendas, gorjetas."], ["Necessidades", "custos que tem de pagar para viver e trabalhar, como a renda, a comida e os medicamentos."], ["Desejos", "coisas boas de ter, mas sem as quais pode viver."]],
          slides: [
            { title: "Um orçamento é um plano para o seu dinheiro", bullets: ["Quanto entra", "Para onde vai", "Acabam as contas-surpresa"] },
            { title: "Comece pelo rendimento", bullets: ["Salário depois dos impostos, apoios, vendas, gorjetas", "Se muda, planeie com um mês baixo"] },
            { title: "Três grupos de gastos", bullets: ["Necessidades: casa, comida, transporte, medicamentos", "Desejos: comer fora, extras, assinaturas", "Poupança: guardada como se fosse uma conta"] },
            { title: "Se as contas não batem certo", bullets: ["Corte primeiro nos desejos", "Encontre formas mais baratas de pagar as necessidades", "A IA pode fazer uma tabela; nunca escreva números de conta"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau (CFPB): ferramentas e guias sobre dinheiro", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "Em papel ou numa folha de cálculo gratuita (Google Sheets ou Excel), escreva o rendimento do mês passado e todos os custos de que se lembra. Marque cada custo com N para necessidade ou D para desejo, acrescente uma linha de poupança e faça a subtração. O resultado fica acima ou abaixo de zero?",
          youCanNow: "escrever um orçamento mensal com rendimento, necessidades, desejos e poupança, e ver se as contas batem certo.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um desejo, e não uma necessidade?", options: ["A renda da casa", "Medicamentos diários", "Um novo serviço de streaming", "O bilhete de autocarro para o trabalho"], answer: 2, why: "Um serviço de streaming é bom de ter; a renda, os medicamentos e o transporte para o trabalho são necessidades." },
            { objective: "O1", q: "O seu orçamento mostra que gasta mais do que ganha. O que faria primeiro?", options: ["Cortar em alguns desejos", "Deixar de pagar a renda", "Pedir um empréstimo do tipo \"payday\"", "Deitar fora o orçamento"], answer: 0, why: "Quando o orçamento fica abaixo de zero, os desejos são o primeiro lugar onde cortar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ler o seu relatório e a sua pontuação de crédito",
          minutes: 5,
          goal: "Obter os seus relatórios de crédito gratuitos e verificar se têm erros.",
          text: [
            "Nos Estados Unidos, um relatório de crédito é um registo de como pediu dinheiro emprestado e pagou: empréstimos, cartões de crédito, algumas contas e dívidas enviadas para cobrança. Os credores, os senhorios e alguns empregadores olham para ele. A pontuação de crédito (credit score) é um número feito a partir desse relatório que tenta prever se vai pagar a tempo.",
            "Pode obter os seus relatórios de crédito de graça das três empresas nacionais, Equifax, Experian e TransUnion, em AnnualCreditReport.com ou ligando para o (877) 322-8228. O Consumer Financial Protection Bureau (CFPB, o serviço do governo dos EUA que protege os consumidores) diz que agora pode obtê-los de graça uma vez por semana. Ver o seu próprio relatório não baixa a sua pontuação.",
            "Tenha cuidado: alguns sites dizem \"relatório de crédito grátis\" mas depois inscrevem-no em produtos pagos. Use AnnualCreditReport.com.",
            "Leia cada relatório e procure tudo o que não é seu: uma conta que nunca abriu, um atraso num pagamento que fez a tempo, uma dívida que aparece duas vezes, ou um nome ou morada errados. Tem o direito de contestar os erros junto da empresa de crédito e da empresa que os comunicou. Pagar a tempo, manter os saldos dos cartões baixos e não abrir muitas contas novas ao mesmo tempo ajudam a sua pontuação com o tempo."
          ],
          steps: ["Vá a AnnualCreditReport.com (escreva você mesmo o endereço) ou ligue para o (877) 322-8228.", "Peça os seus relatórios à Equifax, à Experian e à TransUnion.", "Verifique o seu nome, as moradas e cada conta.", "Faça um círculo à volta de tudo o que não reconhece ou que está errado.", "Conteste os erros junto da empresa de crédito e guarde cópias do que enviar."],
          words: [["Relatório de crédito", "um registo de como pediu dinheiro emprestado e o pagou."], ["Pontuação de crédito", "um número feito a partir do seu relatório de crédito que os credores usam para avaliar o risco."], ["Contestar", "dizer à empresa de crédito que alguma coisa no seu relatório está errada e pedir que a corrija."], ["Cobrança", "quando uma dívida é enviada para uma empresa que tenta cobrar o dinheiro que não foi pago."]],
          slides: [
            { title: "Relatório e pontuação", bullets: ["Relatório: a sua história de empréstimos e pagamentos", "Pontuação: um número feito a partir do relatório", "Credores, senhorios e alguns empregadores olham para ele"] },
            { title: "Obtenha os seus relatórios de graça", bullets: ["AnnualCreditReport.com ou (877) 322-8228", "Equifax, Experian e TransUnion", "Ver o seu próprio relatório não baixa a sua pontuação"] },
            { title: "Procure erros", bullets: ["Contas que nunca abriu", "Atrasos errados ou dívidas repetidas", "Nome ou morada errados"] },
            { title: "Ajude a sua pontuação com o tempo", bullets: ["Pague todas as contas a tempo", "Mantenha os saldos dos cartões baixos", "Conteste os erros e guarde cópias"] }
          ],
          sources: [
            { name: "CFPB: Como obter uma cópia gratuita dos meus relatórios de crédito?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB: Relatórios e pontuações de crédito", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "Se vive nos EUA, peça pelo menos um relatório de crédito gratuito em AnnualCreditReport.com e verifique cada conta. Se vive fora dos EUA, descubra se o seu país tem uma central de informação de crédito e como pedir o seu relatório. Escreva uma coisa que verificou e o que encontrou.",
          youCanNow: "obter os seus relatórios de crédito gratuitos, procurar erros neles e saber como contestar um erro.",
          quickCheck: [
            { objective: "O2", q: "O que é um relatório de crédito?", options: ["Uma lista das palavras-passe do seu banco", "O seu orçamento mensal", "Um registo dos seus empréstimos, cartões e pagamentos", "A sua declaração de impostos"], answer: 2, why: "Um relatório de crédito mostra as suas contas de crédito e como as pagou." },
            { objective: "O2", q: "O seu relatório de crédito mostra uma morada onde nunca viveu. O que faria?", options: ["Ignorava", "Contestava junto da empresa de crédito e guardava cópias", "Fechava todas as suas contas", "Pagava a um desconhecido para resolver"], answer: 1, why: "Os erros num relatório de crédito devem ser contestados, guardando cópias." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer um plano para pagar as dívidas",
          minutes: 5,
          goal: "Fazer a lista das suas dívidas e escolher em qual pagar mais primeiro.",
          text: [
            "É mais fácil vencer as dívidas quando as vê todas. Faça uma lista de cada dívida: a quem deve, quanto, a taxa de juro, o pagamento mínimo e a data de vencimento. Inclua cartões de crédito, cartões de lojas, empréstimos do carro, contas médicas, empréstimos da família e qualquer empréstimo feito por uma aplicação no telefone.",
            "Pague sempre pelo menos o mínimo de cada dívida, a tempo. Os atrasos trazem multas e podem prejudicar o seu crédito. Depois ponha o dinheiro que sobra numa só dívida de cada vez.",
            "Há duas formas comuns de escolher. A forma da taxa mais alta primeiro paga mais na dívida com a taxa de juro mais alta, o que costuma poupar mais dinheiro. A forma do saldo mais pequeno primeiro paga primeiro a dívida mais pequena, o que dá uma vitória rápida e ajuda muitas pessoas a continuar. As duas funcionam se não desistir. Quando acabar de pagar uma dívida, passe esse pagamento para a seguinte.",
            "Se não conseguir fazer um pagamento, ligue ao credor antes da data de vencimento e pergunte que opções há. Um conselheiro de crédito sem fins lucrativos também o pode ajudar a fazer um plano. Tenha cuidado com empresas que pedem taxas grandes adiantadas para \"apagar\" a sua dívida."
          ],
          steps: ["Faça a lista de cada dívida: a quem, quanto, taxa de juro, mínimo, data de vencimento.", "Arranje uma forma de pagar todos os mínimos a tempo, como lembretes.", "Escolha uma dívida para pagar mais: a da taxa mais alta ou a do saldo mais pequeno.", "Quando estiver paga, junte o pagamento dela ao da dívida seguinte.", "Se vai falhar um pagamento, ligue ao credor antes da data de vencimento."],
          words: [["Taxa de juro", "o preço de pedir dinheiro emprestado, mostrado como uma percentagem do que deve."], ["Pagamento mínimo", "o valor mais pequeno que tem de pagar em cada mês para estar em dia."], ["Saldo", "quanto ainda deve."]],
          slides: [
            { title: "Veja todas as suas dívidas", bullets: ["A quem deve e quanto", "Taxa de juro, mínimo e data de vencimento", "Inclua empréstimos de aplicações e da família"] },
            { title: "Duas regras", bullets: ["Pague todos os mínimos a tempo", "Ponha o dinheiro extra numa dívida de cada vez"] },
            { title: "Que dívida primeiro?", bullets: ["Taxa mais alta primeiro: costuma poupar mais", "Saldo mais pequeno primeiro: vitórias rápidas", "Pagou uma? Passe o pagamento dela para a seguinte"] },
            { title: "Está com dificuldades?", bullets: ["Ligue ao credor antes da data de vencimento", "Fale com um conselheiro de crédito sem fins lucrativos", "Cuidado com taxas grandes adiantadas para apagar dívidas"] }
          ],
          sources: [{ name: "CFPB: Cobrança de dívidas e gestão das dívidas", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Faça uma tabela das suas dívidas (ou de um exemplo inventado, se não tiver nenhuma) com a quem deve, saldo, taxa, mínimo e data de vencimento. Faça um círculo à volta da dívida em que pagaria mais pela forma da taxa mais alta, e da dívida pela forma do saldo mais pequeno.",
          youCanNow: "fazer a lista das suas dívidas, pagar os mínimos a tempo e escolher em que dívida pagar mais primeiro.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer a forma do saldo mais pequeno de pagar dívidas?", options: ["Pagar só a dívida mais pequena e não pagar as outras", "Pagar mais na dívida com o saldo mais pequeno e pagar os mínimos nas outras", "Pagar o mesmo valor extra em todas as dívidas", "Não pagar nada até ter mais dinheiro"], answer: 1, why: "Paga os mínimos em todas e põe o extra no saldo mais pequeno para ter uma vitória rápida." },
            { objective: "O3", q: "Sabe que vai falhar o pagamento de um empréstimo na próxima semana. O que faria?", options: ["Esconder-se do credor", "Esperar até ele ligar", "Pedir um novo empréstimo para o pagar", "Ligar ao credor antes da data de vencimento e perguntar que opções há"], answer: 3, why: "Ligar cedo dá-lhe mais opções." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Saber para onde vai o seu dinheiro",
        questions: [
          { objective: "O1", q: "O seu rendimento muda de mês para mês. Com que valor deve planear o seu orçamento?", options: ["O seu melhor mês", "O que espera ganhar em média no próximo ano", "Um mês normal e baixo", "O que os seus amigos ganham"], answer: 2, why: "Planear com um mês baixo quer dizer que o orçamento funciona mesmo quando entra pouco dinheiro." },
          { objective: "O1", q: "Qual destes é uma necessidade, e não um desejo?", options: ["Um medicamento que toma todos os dias", "Um serviço de streaming", "Comer fora às sextas-feiras", "Uma capa nova para o telefone"], answer: 0, why: "O medicamento é algo que tem de pagar para continuar com saúde." },
          { objective: "O2", q: "Onde é que as pessoas nos EUA podem obter os seus relatórios de crédito de graça?", options: ["Em qualquer site com um anúncio de relatórios grátis", "Num link numa SMS", "No site de uma empresa de cobrança de dívidas", "Em AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com é a fonte oficial e gratuita dos relatórios das três empresas." },
          { objective: "O2", q: "Encontra no seu relatório um cartão de crédito que nunca abriu. O que faz?", options: ["Ignora", "Contesta junto da empresa de crédito e guarda cópias", "Paga-o para que desapareça", "Fecha a sua conta bancária"], answer: 1, why: "Tem o direito de contestar erros; uma conta que não abriu também pode ser roubo de identidade." },
          { objective: "O3", q: "Pode pagar um pouco mais numa dívida. Pela forma da taxa mais alta, qual recebe o extra?", options: ["A que tem o saldo mais pequeno", "A que tem a data de vencimento mais tardia", "A que tem a taxa de juro mais alta", "A mais recente"], answer: 2, why: "Pagar primeiro a taxa mais alta costuma poupar mais juros." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar a sua rede de segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Começar um fundo de emergência",
          minutes: 4,
          goal: "Definir uma meta de poupança de emergência e uma forma automática de a alcançar.",
          text: [
            "Um fundo de emergência é dinheiro guardado só para surpresas: o arranjo do carro, uma conta do médico, uma bomba de água avariada, um turno perdido ou um mês de vendas fraco. Sem ele, um problema pequeno pode empurrá-lo para dívidas caras.",
            "Comece pequeno. O Consumer Financial Protection Bureau diz que mesmo um valor pequeno dá alguma segurança. Uma forma de escolher uma meta: pense nos custos-surpresa que teve no último ano e quanto custaram. Depois escolha uma primeira meta que consegue alcançar, e uma meta maior a seguir.",
            "Torne a poupança automática. Marque uma transferência regular para a poupança no dia do pagamento, ou peça ao seu empregador para dividir o depósito do salário, se ele o permitir. Ponha logo na poupança os reembolsos de impostos, os presentes em dinheiro ou uma parte do pagamento da colheita.",
            "Guarde o dinheiro num lugar seguro mas separado do dinheiro do dia a dia, como uma conta poupança num banco ou numa cooperativa de crédito. O dinheiro em casa pode perder-se ou ser roubado. Decida antes o que conta como emergência, use o fundo quando precisar e depois volte a enchê-lo."
          ],
          steps: ["Escreva os custos-surpresa que teve no último ano.", "Escolha uma primeira meta que consegue alcançar e uma meta maior para depois.", "Marque uma transferência automática ou um valor fixo que poupa em cada dia de pagamento.", "Mantenha o fundo separado do dinheiro do dia a dia.", "Escreva o que conta como emergência. Depois de o usar, volte a enchê-lo."],
          words: [["Fundo de emergência", "dinheiro guardado só para custos inesperados ou para quando perde rendimento."], ["Transferência automática", "um pagamento que o banco faz por você num dia marcado, sem ter de o fazer de cada vez."], ["Cooperativa de crédito", "um banco sem fins lucrativos que pertence aos seus membros (nos EUA, \"credit union\")."]],
          slides: [
            { title: "Para que serve", bullets: ["Arranjos, contas do médico, perda de rendimento", "Impede que problemas pequenos virem dívidas grandes"] },
            { title: "Escolha uma meta", bullets: ["Veja os custos-surpresa do último ano", "Comece pequeno e depois aumente", "Mesmo pouco ajuda"] },
            { title: "Torne-a automática", bullets: ["Transferência no dia do pagamento", "Divida o depósito do salário, se for permitido", "Poupe reembolsos, presentes e parte do dinheiro da colheita"] },
            { title: "Segura e separada", bullets: ["Poupança no banco ou na cooperativa de crédito", "O dinheiro em casa pode perder-se ou ser roubado", "Use-o e depois volte a enchê-lo"] }
          ],
          sources: [{ name: "CFPB: Guia essencial para criar um fundo de emergência", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Escreva a sua primeira meta de poupança de emergência, o valor que vai poupar por semana ou por mês, o dia em que vai poupar e onde vai guardar o dinheiro. Acrescente-a como uma linha no orçamento da Lição 1.",
          youCanNow: "definir uma meta de poupança de emergência, poupar para ela de forma automática e guardá-la segura e separada.",
          quickCheck: [
            { objective: "O4", q: "Para qual destas emergências serve um fundo de emergência?", options: ["Um arranjo do carro que não esperava", "Uma promoção de festas", "Um telefone novo que quer", "Uma noite fora"], answer: 0, why: "Os fundos de emergência pagam custos inesperados, não desejos planeados." },
            { objective: "O4", q: "Esquece-se sempre de poupar. O que faria?", options: ["Poupar só o que sobra no fim do mês", "Desistir de poupar", "Marcar uma transferência automática no dia do pagamento", "Guardar a poupança na carteira"], answer: 2, why: "A poupança automática no dia do pagamento acontece antes de o dinheiro ser gasto." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Poupar com um banco, dinheiro móvel ou um grupo de poupança",
          minutes: 5,
          goal: "Escolher um lugar seguro para poupar e verificar as taxas e as regras antes de o usar.",
          text: [
            "O lugar onde poupa é importante. Nos EUA, uma conta poupança num banco ou numa cooperativa de crédito com seguro federal é um dos lugares mais seguros para o dinheiro. Em muitos países, sobretudo em África, as pessoas poupam com dinheiro móvel no telefone, num banco ou numa SACCO, ou num grupo de poupança.",
            "Os serviços de dinheiro móvel, como o M-Pesa, deixam-no guardar dinheiro no telefone, enviá-lo e pagar contas. Muitos também têm uma opção de poupança separada ou de poupança bloqueada, que ajuda a manter a poupança longe do dinheiro para gastar. As taxas e os juros são diferentes em cada serviço e mudam com o tempo, por isso leia a tabela oficial de taxas na aplicação ou no site do serviço, ou pergunte a um agente oficial, antes de mexer no dinheiro.",
            "Exemplo: uma agricultora no Quénia recebe pelo milho na colheita. No mesmo dia, antes de gastar qualquer coisa, envia uma parte do pagamento para uma opção de poupança separada e deixa o resto para sementes, propinas da escola e comida. Primeiro verifica a taxa de cada transferência na tabela oficial de taxas.",
            "Num grupo de poupança, muitas vezes chamado chama, cada membro paga um valor fixo num calendário marcado. Escreva cada pagamento, guarde uma cópia das regras do grupo e entre só em grupos cujos membros conhece e em quem confia. Seja o que for que use: nunca partilhe o seu PIN e tenha cuidado com quem liga a pedir que devolva dinheiro depois de uma transferência \"errada\". Verifique primeiro o seu saldo."
          ],
          steps: ["Escolha onde poupar: banco, cooperativa de crédito, SACCO, poupança de dinheiro móvel ou um grupo de poupança de confiança.", "Encontre a tabela oficial de taxas e as regras, na aplicação, no site oficial ou com um agente oficial.", "Mova a poupança no dia do pagamento ou da colheita, antes de gastar.", "Guarde um registo escrito de cada depósito.", "Nunca partilhe o seu PIN e verifique o saldo antes de devolver dinheiro a alguém."],
          words: [["Dinheiro móvel", "um serviço que deixa guardar, enviar e receber dinheiro com um telefone."], ["SACCO", "uma cooperativa de poupança e crédito, um grupo que pertence aos membros e que poupa e empresta, comum na África Oriental."], ["Chama", "um grupo de poupança, muitas vezes no Quénia, onde os membros poupam juntos num calendário marcado."], ["PIN", "um número secreto que protege a sua conta. Nunca o partilhe."]],
          slides: [
            { title: "Escolha um lugar seguro para poupar", bullets: ["EUA: poupança num banco ou cooperativa de crédito com seguro", "África: banco, SACCO, dinheiro móvel ou grupo de poupança"] },
            { title: "Poupança com dinheiro móvel", bullets: ["Use uma opção de poupança separada, se houver", "Leia primeiro a tabela oficial de taxas", "As taxas mudam: verifique na aplicação ou com um agente"] },
            { title: "Primeiro poupe, depois gaste", bullets: ["Mova a poupança no dia do pagamento ou da colheita", "Depois pague sementes, propinas da escola e comida"] },
            { title: "Proteja-se", bullets: ["Nunca partilhe o seu PIN", "Verifique o saldo antes de devolver dinheiro", "Entre só em grupos que conhece e em quem confia"] }
          ],
          sources: [
            { name: "CFPB: Guia essencial para criar um fundo de emergência (onde guardar a poupança)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Escolha o lugar onde vai guardar a sua poupança de emergência. Encontre a tabela oficial de taxas ou as regras da conta e escreva quanto custa pôr e tirar dinheiro. Se usa dinheiro móvel, encontre a opção de poupança no menu da aplicação, sem mexer em dinheiro por agora.",
          youCanNow: "escolher um lugar seguro para poupar, verificar primeiro as taxas e as regras e proteger a sua conta.",
          quickCheck: [
            { objective: "O5", q: "Porque guardar a poupança de emergência num banco ou numa cooperativa de crédito e não em dinheiro em casa?", options: ["Está mais protegida contra roubo e perda", "É mais fácil de gastar", "Os bancos pagam-lhe para tirar dinheiro", "O dinheiro em casa rende mais"], answer: 0, why: "Uma conta mantém a poupança mais segura do que dinheiro em casa." },
            { objective: "O5", q: "Pensa usar uma opção de poupança de dinheiro móvel. O que faria primeiro?", options: ["Mover logo todo o seu dinheiro", "Perguntar a um desconhecido na internet quanto custa", "Pensar que é grátis", "Ler a tabela oficial de taxas e as regras"], answer: 3, why: "As taxas são diferentes e mudam, por isso verifique primeiro a tabela oficial de taxas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reconhecer empréstimos abusivos e burlas com dinheiro",
          minutes: 5,
          goal: "Ler uma oferta de empréstimo ou de dinheiro e encontrar os sinais de alerta antes de dizer que sim.",
          text: [
            "Um empréstimo abusivo é um empréstimo feito para o manter sempre a pagar. Os empréstimos \"payday\" (até ao próximo salário), alguns empréstimos com o carro como garantia e alguns empréstimos por aplicações são curtos e muito caros. A taxa pode parecer pequena, mas como taxa anual (TAEG, em inglês APR) o custo pode ser muito alto, e muitas pessoas renovam o empréstimo vezes sem conta. Antes de pedir emprestado, veja a TAEG e todas as taxas, e pergunte a si mesmo como vai pagar.",
            "Conheça os seus direitos nos EUA: o Consumer Financial Protection Bureau diz que não pode ser preso por não pagar um empréstimo \"payday\", e um credor só pode ficar com parte do seu salário com uma ordem do tribunal. Os militares no ativo têm proteção extra pela Military Lending Act (lei sobre empréstimos a militares). Também pode verificar se um credor tem licença no seu estado.",
            "As burlas têm sinais de alerta. Apressam-no. Pedem que pague com cartões-presente, transferência bancária, criptomoeda ou uma transferência de dinheiro móvel para um desconhecido. Prometem um empréstimo ou um subsídio se pagar primeiro uma taxa. Dizem que ganhou um prémio a que nunca concorreu. Pedem o seu PIN, palavra-passe ou um código enviado para o seu telefone.",
            "Quando vir um sinal: pare, não pague e confirme com a empresa verdadeira usando um número que você mesmo encontrou. Fale com alguém de confiança. Opções mais baratas do que um empréstimo abusivo podem ser pedir mais tempo ao credor, um empréstimo pequeno de uma cooperativa de crédito, ou ajuda de uma organização local sem fins lucrativos."
          ],
          steps: ["Encontre a TAEG e todas as taxas da oferta.", "Pergunte: como e quando vou pagar isto, e o que acontece se não conseguir?", "Procure sinais de burla: pressa, cartões-presente ou transferência, taxa primeiro, prémio, pedidos de PIN ou código.", "Pare e confirme com a empresa verdadeira usando um número que você mesmo encontrou.", "Procure opções mais baratas: mais tempo do credor, um empréstimo da cooperativa de crédito, uma organização sem fins lucrativos."],
          words: [["TAEG (APR)", "taxa anual efetiva global: o custo de um empréstimo num ano, com as taxas incluídas, mostrado como percentagem. Serve para comparar empréstimos."], ["Empréstimo \"payday\"", "um empréstimo pequeno e curto, muitas vezes a pagar no próximo dia de salário, que pode ser muito caro."], ["Renovação", "pedir um novo empréstimo para pagar o antigo, o que junta mais taxas."], ["Empréstimo abusivo", "um empréstimo com custos injustos ou muito altos que prende quem pede emprestado."]],
          slides: [
            { title: "Empréstimos que o prendem", bullets: ["\"Payday\", alguns com o carro como garantia e de aplicações", "Taxa pequena, TAEG muito alta", "As renovações juntam mais taxas"] },
            { title: "Antes de pedir emprestado", bullets: ["Encontre a TAEG e todas as taxas", "Saiba como vai pagar", "EUA: verifique se o credor tem licença no seu estado"] },
            { title: "Sinais de alerta de burla", bullets: ["Apressam você", "Cartões-presente, transferência, cripto ou envio para um desconhecido", "Uma taxa primeiro para um empréstimo ou prémio", "Pedem o seu PIN ou um código"] },
            { title: "Escolhas melhores", bullets: ["Peça mais tempo ao credor", "Empréstimo pequeno da cooperativa de crédito", "Ajuda de uma organização local sem fins lucrativos"] }
          ],
          sources: [
            { name: "CFPB: Empréstimos payday", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB: Fraudes e burlas", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Tarefa final: termine o seu plano de dinheiro de uma página: o orçamento da Lição 1, a lista de dívidas com aquela em que vai pagar mais, a sua meta de poupança de emergência e onde a guarda, e a data em que vai verificar os seus relatórios de crédito. Depois leia uma oferta de empréstimo ou de dinheiro que tenha visto (uma SMS, um anúncio ou uma carta) e escreva todos os sinais de alerta que encontrar.",
          youCanNow: "ler uma oferta de empréstimo ou de dinheiro, encontrar a TAEG e os sinais de alerta e escolher uma opção mais segura.",
          quickCheck: [
            { objective: "O6", q: "O que é um sinal de alerta numa oferta de empréstimo?", options: ["Mostra a TAEG de forma clara", "Pede que pague uma taxa com um cartão-presente para receber o empréstimo", "Dá-lhe tempo para ler as condições", "Vem da sua cooperativa de crédito"], answer: 1, why: "Taxas adiantadas pagas com cartões-presente são um sinal comum de burla." },
            { objective: "O6", q: "Uma SMS diz \"Já está pré-aprovado! Responda agora ou perde esta oferta hoje.\" O que faria?", options: ["Responder logo", "Enviar os seus dados bancários para guardar a oferta", "Reencaminhar aos amigos", "Ir com calma e verificar o credor numa fonte oficial antes de responder"], answer: 3, why: "A pressão para agir já é um sinal de alerta; verifique antes de responder." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Criar a sua rede de segurança",
        questions: [
          { objective: "O4", q: "Para que serve um fundo de emergência?", options: ["Compras de festas", "Custos inesperados, como um arranjo ou perda de rendimento", "Comprar bilhetes de lotaria", "Emprestar a amigos"], answer: 1, why: "Um fundo de emergência é guardado só para surpresas e perda de rendimento." },
          { objective: "O4", q: "Qual é a melhor forma de continuar a poupar todos os meses?", options: ["Poupar o que sobra no fim do mês", "Guardar o dinheiro na carteira", "Esperar primeiro por um grande aumento", "Marcar uma transferência automática no dia do pagamento"], answer: 3, why: "A poupança automática acontece antes de o dinheiro ser gasto." },
          { objective: "O5", q: "Antes de usar uma opção de poupança de dinheiro móvel, o que deve verificar?", options: ["A tabela oficial de taxas e as regras", "O que diz um desconhecido nas redes sociais", "Nada; é sempre grátis", "O PIN do seu vizinho"], answer: 0, why: "As taxas e as regras são diferentes em cada serviço e mudam, por isso verifique primeiro a fonte oficial." },
          { objective: "O6", q: "Alguém manda uma SMS a dizer que lhe enviou dinheiro por engano e pede que o devolva já. O que faz primeiro?", options: ["Devolve logo", "Partilha o seu PIN para a pessoa resolver", "Verifica você mesmo o seu saldo verdadeiro antes de fazer qualquer coisa", "Envia o dobro para ser simpático"], answer: 2, why: "Esta é uma burla comum; verifique o seu próprio saldo e pergunte ao seu serviço." },
          { objective: "O6", q: "Um credor diz que recebe o empréstimo logo que pagar uma taxa com um cartão-presente. Isto é:", options: ["Um empréstimo bancário normal", "Um sinal de alerta de burla", "Um subsídio do governo", "Um relatório de crédito"], answer: 1, why: "Pagar uma taxa primeiro, sobretudo com um cartão-presente, é um sinal de burla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Finanças Pessoais Básicas: Orçamento, Crédito e Poupança",
    questions: [
      { objective: "O1", q: "Um orçamento é:", options: ["Um plano para o dinheiro que recebe em cada mês", "Um tipo de empréstimo", "Uma pontuação de crédito", "Uma taxa do banco"], answer: 0, why: "Um orçamento planeia para onde vai o seu dinheiro." },
      { objective: "O1", q: "O que pertence ao grupo da poupança num orçamento?", options: ["A renda da casa", "Um jantar de take-away por semana", "Dinheiro guardado para o seu fundo de emergência", "A conta do telefone"], answer: 2, why: "A poupança é o dinheiro que guarda de propósito." },
      { objective: "O1", q: "O seu orçamento fica abaixo de zero. Em que deve cortar primeiro?", options: ["Medicamentos", "Desejos", "Renda da casa", "Pagamentos mínimos das dívidas"], answer: 1, why: "Corte nos desejos antes das necessidades." },
      { objective: "O1", q: "O que NÃO deve escrever num assistente de IA quando faz um orçamento?", options: ["Custos mensais aproximados", "\"Faça-me uma tabela de orçamento\"", "\"Sugira formas de cortar custos\"", "O número da sua conta bancária"], answer: 3, why: "Nunca partilhe números de conta nem palavras-passe com ferramentas de IA." },
      { objective: "O2", q: "O que é uma pontuação de crédito?", options: ["O saldo do seu banco", "Um número feito a partir do seu relatório de crédito", "O seu rendimento", "Uma taxa de empréstimo"], answer: 1, why: "A pontuação de crédito baseia-se nas informações do seu relatório de crédito." },
      { objective: "O2", q: "Ver o seu próprio relatório de crédito baixa a sua pontuação?", options: ["Não", "Sim, muito", "Sim, um pouco de cada vez", "Só aos fins de semana"], answer: 0, why: "O CFPB diz que pedir os seus próprios relatórios não prejudica a sua pontuação." },
      { objective: "O2", q: "Que três empresas fazem relatórios de crédito nacionais nos EUA?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "Estas são as três empresas nacionais de relatórios de crédito." },
      { objective: "O2", q: "Um site oferece um \"relatório de crédito grátis\" mas pede um cartão para começar um período de teste. Qual é a escolha mais segura?", options: ["Inscrever-se na mesma", "Dar o número do seu cartão", "Usar AnnualCreditReport.com no lugar dele", "Partilhar o link com os amigos"], answer: 2, why: "Alguns sites inscrevem-no em produtos pagos; AnnualCreditReport.com é a fonte oficial e gratuita." },
      { objective: "O2", q: "O seu relatório mostra um atraso num pagamento que sabe que fez a tempo. Deve:", options: ["Esperar que desapareça", "Abrir um cartão novo", "Contestar o erro e guardar cópias", "Deixar de pagar todas as contas"], answer: 2, why: "Pode contestar os erros junto da empresa de crédito e da empresa que os comunicou." },
      { objective: "O3", q: "Na sua lista de dívidas, o que deve pagar sempre em cada dívida?", options: ["Nada até poder pagar tudo", "Pelo menos o mínimo, a tempo", "Só a maior", "O dobro do saldo"], answer: 1, why: "Falhar os mínimos traz multas e prejudica o seu crédito." },
      { objective: "O3", q: "Porque é que alguém pode escolher pagar primeiro o saldo mais pequeno?", options: ["Uma vitória rápida dá-lhe vontade de continuar", "Poupa sempre mais dinheiro", "Os credores exigem", "Acaba com todos os juros"], answer: 0, why: "Pagar depressa uma dívida pequena dá uma vitória rápida; a forma da taxa mais alta costuma poupar mais." },
      { objective: "O3", q: "Vai falhar o pagamento do carro na próxima semana. Qual é a melhor coisa a fazer?", options: ["Não dizer nada e esperar", "Pedir um empréstimo \"payday\"", "Mudar de número de telefone", "Ligar ao credor antes da data de vencimento e perguntar que opções há"], answer: 3, why: "Os credores podem oferecer opções se ligar cedo." },
      { objective: "O4", q: "Uma boa primeira meta de poupança de emergência é:", options: ["Um valor enorme que não consegue alcançar", "Um valor pequeno que consegue alcançar, e depois um maior", "Zero até ficar rico", "O que o seu vizinho tem"], answer: 1, why: "Comece pequeno e depois aumente; mesmo pouco ajuda." },
      { objective: "O5", q: "Onde é mais seguro guardar a poupança de emergência do que em dinheiro em casa?", options: ["Debaixo do colchão", "Com um desconhecido na internet", "Numa conta poupança num banco ou numa cooperativa de crédito", "Na carteira do dia a dia"], answer: 2, why: "O dinheiro pode perder-se ou ser roubado; as contas com seguro são mais seguras." },
      { objective: "O4", q: "Um agricultor recebe na colheita. Qual é um bom hábito de poupança?", options: ["Gastar primeiro e poupar o que sobra", "Emprestar tudo a um primo", "Guardar tudo em dinheiro em casa", "Mover uma parte para a poupança no mesmo dia, antes de gastar"], answer: 3, why: "Poupar primeiro, antes de gastar, faz o plano funcionar." },
      { objective: "O5", q: "As taxas do dinheiro móvel:", options: ["São diferentes em cada serviço e mudam, por isso verifique a tabela oficial de taxas", "São sempre zero", "São iguais em todos os países", "Nunca importam"], answer: 0, why: "Verifique as taxas atuais na aplicação, no site oficial ou com um agente oficial." },
      { objective: "O5", q: "Num grupo de poupança (chama), o que o protege melhor?", options: ["Pagar sem registos", "Entrar em qualquer grupo na internet", "Registos escritos de cada pagamento e uma cópia das regras", "Partilhar o seu PIN com o grupo"], answer: 2, why: "Os registos e as regras escritas protegem todos os membros." },
      { objective: "O6", q: "O que lhe diz a TAEG (APR)?", options: ["A sua pontuação de crédito", "O custo de um empréstimo num ano, com as taxas, em percentagem", "Quanto ganha", "A morada do seu banco"], answer: 1, why: "A TAEG deixa comparar o custo verdadeiro dos empréstimos." },
      { objective: "O6", q: "Nos EUA, pode ser preso por não pagar um empréstimo \"payday\"?", options: ["Sim, sempre", "Sim, depois de um dia", "Só ao fim de semana", "Não"], answer: 3, why: "O CFPB diz que não pode ser preso por não pagar um empréstimo \"payday\"." },
      { objective: "O6", q: "Qual é uma opção mais barata do que um empréstimo \"payday\"?", options: ["Um empréstimo pequeno de uma cooperativa de crédito", "Renovar um empréstimo \"payday\"", "Pagar a um desconhecido com cartões-presente", "Um empréstimo que pede uma taxa primeiro"], answer: 0, why: "Os empréstimos das cooperativas de crédito e pedir mais tempo costumam custar muito menos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      2,
      5,
      7,
      9,
      12,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Orçamento mensal",
        objective: "O1",
        notYet: "Faltam o rendimento ou os custos, ou não há linha de poupança.",
        meets: "O rendimento, as necessidades, os desejos e a poupança estão na lista e o total foi verificado.",
        exceeds: "Usa um mês normal e baixo e mostra em que desejos cortou."
      },
      {
        name: "Plano de dívidas",
        objective: "O3",
        notYet: "Faltam dívidas, ou nenhuma dívida foi escolhida para pagar mais.",
        meets: "Todas as dívidas estão na lista com saldo, taxa, mínimo e data de vencimento, e uma foi escolhida para pagar mais.",
        exceeds: "Explica porque escolheu a forma da taxa mais alta ou a do saldo mais pequeno."
      },
      {
        name: "Poupança de emergência",
        objective: "O4",
        notYet: "Não há meta, ou não há valor nem dia.",
        meets: "Uma meta, um valor, um dia e um lugar para poupar, acrescentados ao orçamento.",
        exceeds: "A poupança está marcada para acontecer de forma automática."
      },
      {
        name: "Lugar seguro para poupar",
        objective: "O5",
        notYet: "O lugar foi escolhido sem verificar as taxas ou as regras.",
        meets: "As taxas para pôr e tirar dinheiro estão escritas a partir da fonte oficial.",
        exceeds: "Comparou duas opções antes de escolher."
      },
      {
        name: "Data do relatório de crédito",
        objective: "O2",
        notYet: "Não há data para verificar os relatórios de crédito.",
        meets: "Uma data para verificar os relatórios de crédito na fonte oficial e gratuita.",
        exceeds: "Já verificou um relatório e anotou o que encontrou."
      },
      {
        name: "Sinais de alerta da oferta",
        objective: "O6",
        notYet: "Não viu sinais de alerta claros na oferta.",
        meets: "Faz a lista dos sinais de alerta numa oferta real.",
        exceeds: "Também indica uma opção mais segura, como um empréstimo de uma cooperativa de crédito."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que usam um orçamento escrito aos 30 dias (inquérito de seguimento)",
      "Alunos que começaram ou aumentaram um fundo de emergência em 30 dias",
      "Alunos que verificaram o seu relatório de crédito em 60 dias",
      "Alunos que dizem ter evitado um empréstimo abusivo ou uma burla com dinheiro"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta, ou uma folha de cálculo gratuita como o Google Sheets ou o Excel",
      "O rendimento e as contas do mês passado (mantidos em privado)",
      "Acesso à internet para AnnualCreditReport.com (EUA) ou para a central de crédito local e as tabelas de taxas",
      "Cerca de 60 minutos no total, mais tempo para juntar os seus próprios números"
    ],
    facilitatorNotes: [
      "Deixe os alunos usar números inventados na aula; nunca peça a ninguém para partilhar saldos, números de conta ou relatórios de crédito verdadeiros.",
      "Lembre aos alunos que isto não são conselhos de investimento e indique um conselheiro de crédito sem fins lucrativos para decisões grandes.",
      "Para alunos fora dos EUA, ajude-os a encontrar a central de crédito do seu país e as tabelas oficiais de taxas do dinheiro móvel.",
      "Traga exemplos reais de ofertas de empréstimo e de burlas para praticar os sinais de alerta.",
      "Avalie o plano de dinheiro com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
