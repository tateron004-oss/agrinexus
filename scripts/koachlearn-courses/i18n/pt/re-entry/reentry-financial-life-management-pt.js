"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-financial-life-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US names (AnnualCreditReport.com, IdentityTheft.gov, FTC, DMV, Social Security) kept as in the English.

module.exports = {
  id: "reentry-financial-life-management-pt",
  lang: "pt",
  translationOf: "reentry-financial-life-management",
  category: "Re-Entry",
  name: "Gestão do Dinheiro e da Vida com IA",
  skills: "Fazer um orçamento mensal simples com IA, Acompanhar os gastos, Criar lembretes para as contas, Escolher formas mais seguras de usar o banco e pedir dinheiro emprestado, Ver o seu relatório de crédito de graça, Planear objetivos semana a semana",
  outcome: "fazer um orçamento mensal simples com um assistente de IA usando números aproximados, criar lembretes para as suas contas, saber como obter o seu relatório de crédito gratuito e transformar um objetivo de dinheiro ou de vida em passos semanais.",
  about: [
    "Este curso é para quem está a voltar para casa e quer controlar o seu dinheiro e a sua semana. Recomeçar pode significar um primeiro salário, contas novas, talvez dívidas antigas e muitas consultas ao mesmo tempo. Um plano torna tudo mais fácil de gerir.",
    "Você vai usar um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, para fazer um orçamento, planear a sua semana e definir objetivos, e vai aprender escolhas mais seguras para usar o banco e pedir dinheiro emprestado, e como ver o seu crédito de graça.",
    "Nunca escreva na IA números de conta verdadeiros, o seu número da Segurança Social (Social Security) ou detalhes do seu processo; valores aproximados chegam. Este curso não dá conselhos financeiros nem legais; para dívidas, multas ou pensão de alimentos, fale com o serviço responsável, com um serviço de apoio jurídico gratuito ou com um conselheiro de crédito sem fins lucrativos. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Use um assistente de IA para fazer um orçamento mensal simples com números aproximados (rendimento, renda da casa, telefone, transporte, comida, outras contas e um pequeno valor para poupar). Crie um lembrete no telefone para a data de pagamento de cada conta, escreva como vai obter o seu relatório de crédito gratuito e transforme um objetivo em passos para as próximas quatro semanas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e enfrentam um primeiro salário, contas novas, talvez dívidas antigas e muitas consultas ao mesmo tempo.",
    startingPoint: "Sabem fazer chamadas, enviar SMS e lidar com dinheiro em notas. Têm pouca experiência com orçamentos, contas bancárias, relatórios de crédito, aplicações de calendário ou assistentes de IA. Alguns já tiveram problemas com contas bancárias ou com crédito.",
    gap: "Sem um plano, as contas novas, as taxas e as consultas acumulam-se depressa e podem levar a multas por atraso, empréstimos caros ou obrigações falhadas. Os alunos precisam de fazer um orçamento simples, acompanhar as contas, escolher um banco mais seguro, ver o seu crédito e planear as suas semanas, para que recomeçar seja mais fácil de gerir.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone, às vezes um computador da biblioteca",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho e as consultas",
      "Sem conselhos financeiros nem legais: dívidas, multas e pensão de alimentos vão para o serviço responsável, o apoio jurídico ou um conselheiro de crédito sem fins lucrativos",
      "Privacidade: só valores aproximados; nunca números de conta verdadeiros, números da Segurança Social ou detalhes do processo na IA"
    ],
    prerequisites: "O curso \"Introdução à IA e Confiança Digital\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu salário líquido e as suas contas em números aproximados", action: "fazer um orçamento de um mês com um assistente de IA", standard: "com as necessidades em primeiro lugar e uma pequena linha de poupança, sem usar números de conta verdadeiros" },
    { id: "O2", condition: "Usando uma nota e os lembretes do seu telefone", action: "acompanhar os seus gastos durante uma semana e criar um lembrete para a data de pagamento de cada conta", standard: "com cada lembrete marcado alguns dias antes da data de pagamento" },
    { id: "O3", condition: "Com várias escolhas para usar o banco e pedir dinheiro emprestado", action: "compará-las e identificar as caras ou arriscadas", standard: "dizendo o total a devolver antes de qualquer empréstimo e reconhecendo burlas de taxas pagas adiantado" },
    { id: "O4", condition: "Usando o site oficial do relatório de crédito gratuito", action: "explicar como obter o seu relatório de crédito gratuito e o que procurar nele", standard: "planeando pedi-lo num aparelho privado e sabendo onde denunciar uma conta que nunca abriu" },
    { id: "O5", condition: "Com uma semana cheia e um objetivo de dinheiro ou de vida", action: "planear a sua semana e dividir o objetivo em passos semanais com a ajuda da IA", standard: "com qualquer choque de horários resolvido e quatro passos semanais possíveis de cumprir" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O básico do dinheiro com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fazer um orçamento simples com IA",
          minutes: 6,
          goal: "Fazer um orçamento de um mês com números aproximados e um assistente de IA.",
          text: [
            "Um orçamento é um plano para o seu dinheiro: o que entra e para onde vai. Ajuda você a pagar primeiro o que é importante e a não ficar sem dinheiro antes do dia do salário.",
            "Escreva números aproximados, sem detalhes da conta: \"Recebo cerca de $1,800 por mês. A renda é $700, o telefone $40, o passe de autocarro $60, a comida cerca de $300. Tenho uma prestação de $50 por mês. Ajude-me a fazer um orçamento mensal simples numa tabela, com uma pequena poupança, e diga-me quanto sobra para outras coisas.\"",
            "Ponha as necessidades primeiro: casa, comida, transporte para o trabalho, telefone e pagamentos obrigatórios. Depois a poupança, mesmo que sejam $10 por semana; vai somando e ajuda nas emergências. Depois os desejos. Se as contas não batem certo, pergunte à IA: \"Onde posso cortar?\" e decida você o que é certo para si."
          ],
          steps: ["Escreva o seu salário líquido e as contas principais em números aproximados.", "Peça à IA uma tabela simples de orçamento mensal.", "Ponha primeiro as necessidades, depois a poupança, depois os desejos.", "Se não bater certo, pergunte onde pode cortar.", "Guarde o orçamento."],
          words: [["Orçamento", "um plano de como vai usar o seu dinheiro cada mês."], ["Salário líquido", "o dinheiro que recebe de verdade depois dos impostos e dos descontos."], ["Necessidades e desejos", "necessidades são coisas que tem de pagar; desejos são coisas boas de ter, mas não obrigatórias."]],
          slides: [
            { title: "Um orçamento é um plano", bullets: ["O que entra", "Para onde vai", "Pague primeiro o que é importante"] },
            { title: "Pergunte à IA com números aproximados", bullets: ["Salário líquido e contas principais", "Sem números de conta", "\"Faça uma tabela de orçamento simples.\""] },
            { title: "A ordem conta", bullets: ["Necessidades primeiro", "Depois a poupança, mesmo $10 por semana", "Depois os desejos"] }
          ],
          tryIt: "Escreva o seu salário líquido, verdadeiro ou estimado, e cinco contas em números aproximados. Peça a um assistente de IA uma tabela simples de orçamento mensal com uma pequena linha de poupança.",
          youCanNow: "fazer um orçamento mensal simples com a ajuda da IA, sem partilhar detalhes privados.",
          quickCheck: [
            { objective: "O1", q: "O que é o salário líquido?", options: ["O seu salário antes dos impostos", "O que recebe depois dos impostos e dos descontos", "Dinheiro que pede emprestado", "As suas poupanças"], answer: 1, why: "O salário líquido é o dinheiro que recebe de verdade e com que faz o orçamento." },
            { objective: "O1", q: "Quer ajuda da IA para um orçamento. O que escreve?", options: ["O número da sua conta bancária", "O seu número da Segurança Social", "Valores aproximados como \"renda cerca de $800\"", "A palavra-passe do seu banco na internet"], answer: 2, why: "Valores aproximados chegam, e os números privados ficam fora da IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Acompanhar os gastos e as contas",
          minutes: 5,
          goal: "Acompanhar o que gasta durante uma semana e criar lembretes para as datas de pagamento das contas.",
          text: [
            "Um orçamento só funciona se souber para onde o dinheiro vai de verdade. Durante uma semana, escreva tudo o que gasta numa nota no telefone: a coisa e o valor. Coisas pequenas, como lanches e viagens de carro por aplicação, vão somando.",
            "No fim da semana, cole a lista (sem números de cartão) na IA e pergunte: \"Agrupe os meus gastos por categorias e some cada uma. Para onde foi a maior parte do meu dinheiro?\"",
            "As multas por atraso desperdiçam dinheiro. Crie um lembrete no telefone alguns dias antes de cada conta vencer: \"Lembre-me de pagar a conta do telefone no dia 12 de cada mês.\" Pague as contas só pela aplicação ou pelo site oficial da empresa, ou pessoalmente."
          ],
          steps: ["Escreva cada compra numa nota do telefone durante uma semana.", "Peça à IA para agrupar e somar.", "Compare com o seu orçamento.", "Crie um lembrete mensal antes da data de pagamento de cada conta.", "Pague só por aplicações oficiais, sites oficiais ou pessoalmente."],
          words: [["Categoria", "um grupo de gastos parecidos, como comida ou transporte."], ["Multa por atraso", "dinheiro a mais cobrado quando uma conta é paga depois da data de pagamento."], ["Data de pagamento", "o último dia para pagar uma conta a tempo."]],
          slides: [
            { title: "Saiba para onde vai", bullets: ["Escreva cada compra durante uma semana", "As coisas pequenas vão somando"] },
            { title: "Deixe a IA organizar", bullets: ["Cole a lista, sem números de cartão", "\"Agrupe e some por categoria.\""] },
            { title: "Evite as multas por atraso", bullets: ["Lembrete alguns dias antes de cada data de pagamento", "Pague só pelos canais oficiais"] }
          ],
          tryIt: "Comece hoje uma nota de gastos. Depois crie um lembrete mensal que se repete para uma conta, alguns dias antes de ela vencer.",
          youCanNow: "acompanhar os seus gastos e criar lembretes para pagar as contas a tempo.",
          quickCheck: [
            { objective: "O2", q: "O que é uma data de pagamento?", options: ["O último dia para pagar uma conta a tempo", "O dia em que recebe o salário", "O dia em que a conta é enviada pelo correio", "Qualquer dia que escolher"], answer: 0, why: "A data de pagamento é o último dia para pagar sem atraso." },
            { objective: "O2", q: "A sua conta do telefone vence no dia 15 de cada mês. O que faz?", options: ["Paga quando se lembrar", "Espera por um aviso de atraso", "Paga duas vezes para ter a certeza", "Cria um lembrete que se repete alguns dias antes do dia 15"], answer: 3, why: "Um lembrete antes da data de pagamento ajuda a evitar multas por atraso." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Formas mais seguras de usar o banco e pedir emprestado",
          minutes: 5,
          goal: "Comparar escolhas para usar o banco e pedir emprestado, e reconhecer as caras ou arriscadas.",
          text: [
            "Uma conta num banco ou numa cooperativa de crédito (credit union) costuma ser mais barata e mais segura do que trocar cheques numa loja de troca de cheques, que cobra uma taxa cada vez. Se teve problemas com uma conta bancária no passado, pergunte aos bancos e às cooperativas de crédito se têm contas de \"segunda oportunidade\" ou com taxas baixas.",
            "Cuidado com o dinheiro rápido. Os empréstimos até ao dia do salário (payday loans), os empréstimos com o carro como garantia e algumas aplicações de adiantamento de dinheiro podem custar muito mais do que pediu, depois de somar as taxas e os juros. Antes de pedir emprestado, pergunte: \"Qual é o total que vou devolver, e quando?\" Pode pedir à IA para explicar as condições de uma oferta com palavras simples, mas não para decidir por você.",
            "Aviso de burla: nenhum credor verdadeiro pede para pagar uma taxa adiantada em cartões-presente ou por transferência de dinheiro. Para ajuda com dívidas, procure um conselheiro de crédito sem fins lucrativos ou um serviço de apoio jurídico; evite empresas que prometem apagar dívidas em troca de uma taxa grande paga adiantado."
          ],
          steps: ["Pergunte aos bancos e às cooperativas de crédito por contas com taxas baixas ou de segunda oportunidade.", "Se puder, evite pagar taxas de troca de cheques em cada dia de salário.", "Antes de pedir emprestado, peça o custo total e as datas.", "Peça à IA para explicar as condições com palavras simples.", "Nunca pague uma taxa adiantada com cartão-presente ou transferência."],
          words: [["Cooperativa de crédito (credit union)", "um banco sem fins lucrativos que pertence aos seus membros."], ["Juros", "o dinheiro a mais que paga por pedir emprestado."], ["Empréstimo até ao dia do salário (payday loan)", "um empréstimo pequeno e curto que costuma ter taxas muito altas."]],
          slides: [
            { title: "Use o banco, não pague para trocar cheques", bullets: ["As taxas de troca de cheques vão somando", "Pergunte por contas de segunda oportunidade ou com taxas baixas", "Vale a pena ver as cooperativas de crédito"] },
            { title: "Cuidado com o dinheiro rápido", bullets: ["Empréstimos até ao salário ou com o carro custam muito", "Pergunte: quanto vou devolver no total, e quando?", "A IA pode explicar as condições; quem decide é você"] },
            { title: "Aviso de burla", bullets: ["Nada de taxas adiantadas com cartão-presente ou transferência", "Use conselheiros de crédito sem fins lucrativos ou apoio jurídico"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (payment red flags)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Pergunte a um assistente de IA: \"Explique com palavras simples a diferença entre uma cooperativa de crédito, um banco e uma loja de troca de cheques, e que perguntas devo fazer antes de abrir uma conta.\" Escreva três perguntas para fazer.",
          youCanNow: "escolher formas mais seguras de usar o banco e reconhecer empréstimos caros ou arriscados.",
          quickCheck: [
            { objective: "O3", q: "O que são os juros de um empréstimo?", options: ["Uma prenda grátis do credor", "O dinheiro a mais que paga por pedir emprestado", "Um tipo de conta poupança", "Uma taxa para trocar um cheque"], answer: 1, why: "Os juros são o que pedir emprestado lhe custa, além do valor que pediu." },
            { objective: "O3", q: "Um credor diz que tem de pagar uma taxa em cartões-presente antes de receber um empréstimo. O que faz?", options: ["Paga depressa", "Paga metade agora", "Vai-se embora; é uma burla", "Pede à IA para enviar os cartões-presente"], answer: 2, why: "Taxas adiantadas pagas em cartões-presente são sinal de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O básico do dinheiro com IA",
        questions: [
          { objective: "O1", q: "O que deve escrever na IA para fazer um orçamento?", options: ["O seu número da Segurança Social", "O número da sua conta bancária", "Só valores aproximados", "O PIN do seu cartão"], answer: 2, why: "Números aproximados chegam e mantêm você seguro." },
          { objective: "O1", q: "Num orçamento, o que vem primeiro?", options: ["Necessidades como casa, comida e transporte", "Desejos", "Prendas", "Diversão"], answer: 0, why: "As necessidades mantêm você com casa, comida e trabalho." },
          { objective: "O2", q: "Porque acompanhar os gastos durante uma semana?", options: ["É obrigatório por lei", "Para impressionar os outros", "Para aumentar o seu salário", "Para ver para onde o seu dinheiro vai de verdade"], answer: 3, why: "Acompanhar mostra o que mudar." },
          { objective: "O2", q: "Como pode evitar multas por atraso?", options: ["Pagar quando se lembrar", "Criar um lembrete alguns dias antes de cada data de pagamento", "Ignorar as contas", "Pagar a desconhecidos"], answer: 1, why: "Os lembretes ajudam a pagar a tempo." },
          { objective: "O3", q: "Um credor pede uma taxa adiantada em cartões-presente. Isto é:", options: ["Normal", "Uma burla", "Obrigatório para os bancos", "Um bom negócio"], answer: 1, why: "Os credores verdadeiros não aceitam taxas em cartões-presente." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear a sua vida",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ver o seu relatório de crédito de graça",
          minutes: 5,
          goal: "Explicar como obter o seu relatório de crédito gratuito e o que procurar nele.",
          text: [
            "Um relatório de crédito é um registo dos seus empréstimos e das suas contas. Os senhorios, alguns empregadores e os credores podem olhar para ele. Depois de um tempo fora, pode estar quase vazio, desatualizado ou ter erros, ou até contas que alguém abriu em seu nome.",
            "Pode obter os seus relatórios de crédito de graça das três agências de crédito nacionais (Equifax, Experian e TransUnion) uma vez por semana em AnnualCreditReport.com, o site oficial. Também pode ligar para 1-877-322-8228. Faça isto num aparelho privado, não num computador partilhado, porque vai escrever lá os seus dados pessoais, não na IA.",
            "Procure contas que não reconhece e informações erradas. Se alguém usou a sua identidade, vá a IdentityTheft.gov para ter um plano de recuperação gratuito. Pode pedir à IA para explicar as palavras do relatório de crédito, mas nunca cole o relatório nela."
          ],
          steps: ["Vá a AnnualCreditReport.com num aparelho privado, ou ligue para 1-877-322-8228.", "Peça os relatórios das três agências.", "Procure contas que não reconhece e erros.", "Se a sua identidade foi usada, vá a IdentityTheft.gov.", "Peça à IA para explicar as palavras, mas nunca cole o relatório."],
          words: [["Relatório de crédito", "um registo dos seus empréstimos, cartões de crédito e pagamentos de contas."], ["Agência de crédito", "uma empresa que guarda relatórios de crédito: Equifax, Experian ou TransUnion."]],
          slides: [
            { title: "O seu relatório de crédito", bullets: ["Um registo de empréstimos e contas", "Senhorios e credores podem vê-lo", "Pode ter erros depois de um tempo fora"] },
            { title: "Grátis, no site oficial", bullets: ["AnnualCreditReport.com, todas as semanas", "Ou ligue para 1-877-322-8228", "Use um aparelho privado"] },
            { title: "O que procurar", bullets: ["Contas que não reconhece", "Informações erradas", "Usaram a sua identidade? IdentityTheft.gov"] }
          ],
          sources: [{ name: "FTC: Free credit reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }],
          tryIt: "Peça a um assistente de IA para explicar com palavras simples estes termos do relatório de crédito: \"conta em cobrança\" (collection account), \"consulta de crédito\" (hard inquiry) e \"histórico de pagamentos\" (payment history). Depois escreva quando vai pedir o seu relatório gratuito num aparelho privado.",
          youCanNow: "obter o seu relatório de crédito gratuito e saber o que procurar nele.",
          quickCheck: [
            { objective: "O4", q: "Quais são as três agências de crédito nacionais?", options: ["Visa, Mastercard e Discover", "O IRS, o DMV e os tribunais", "O seu banco, uma cooperativa de crédito e uma loja de troca de cheques", "Equifax, Experian e TransUnion"], answer: 3, why: "Equifax, Experian e TransUnion são as três agências de crédito nacionais." },
            { objective: "O4", q: "Quer ajuda da IA para ler o seu relatório de crédito. O que faz?", options: ["Pede à IA só para explicar as palavras que não entende", "Cola o relatório inteiro na IA", "Envia o relatório a um desconhecido na internet", "Não lê o relatório"], answer: 0, why: "A IA pode explicar os termos sem você partilhar o seu relatório privado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear a sua semana",
          minutes: 5,
          goal: "Usar a IA para transformar uma semana cheia de consultas, trabalho e recados num plano simples.",
          text: [
            "Voltar para casa pode significar muitas coisas ao mesmo tempo: turnos de trabalho, apresentações obrigatórias, candidaturas a empregos, serviços de identificação, tempo com a família, talvez aulas. Um plano semanal evita que elas choquem umas com as outras.",
            "Faça a lista de tudo o que tem na semana, com dias e horas, em palavras gerais. Pergunte à IA: \"Aqui estão os meus turnos de trabalho, consultas e recados. Faça um plano semanal simples, assinale qualquer choque de horários e deixe tempo de viagem entre as coisas.\" Não precisa de dizer que tipo de apresentação é.",
            "Ponha as coisas fixas no calendário do telefone, com lembretes. Deixe algum tempo livre. Se duas coisas chocarem, ligue cedo para remarcar; os serviços costumam reagir melhor a uma chamada feita cedo do que a uma falta sem aviso."
          ],
          steps: ["Faça a lista dos turnos, consultas e recados da semana em palavras gerais.", "Peça à IA um plano semanal com tempo de viagem e que assinale os choques de horários.", "Ponha as coisas fixas no calendário, com lembretes.", "Deixe algum tempo livre.", "Ligue cedo para remarcar qualquer choque de horários."],
          words: [["Choque de horários", "duas coisas marcadas para a mesma hora."], ["Calendário", "a aplicação do telefone que guarda as consultas por data."]],
          slides: [
            { title: "Muitas coisas ao mesmo tempo", bullets: ["Turnos, consultas, recados, família", "Um plano semanal evita que choquem"] },
            { title: "Peça um plano à IA", bullets: ["Faça a lista em palavras gerais", "Acrescente tempo de viagem", "Assinale os choques de horários"] },
            { title: "Ponha em prática", bullets: ["Ponha as coisas fixas no calendário", "Deixe tempo livre", "Ligue cedo para remarcar"] }
          ],
          tryIt: "Faça a lista dos seus compromissos, verdadeiros ou de prática, da próxima semana em palavras gerais. Peça à IA um plano semanal com tempo de viagem e resolva um choque de horários que ela encontrar.",
          youCanNow: "transformar uma semana cheia num plano simples, sem choques de horários.",
          quickCheck: [
            { objective: "O5", q: "O que é um choque de horários?", options: ["Uma discussão no trabalho", "Uma tarde livre", "Duas coisas à mesma hora", "Uma conta atrasada"], answer: 2, why: "Um choque de horários quer dizer que dois compromissos se sobrepõem." },
            { objective: "O5", q: "O plano semanal da IA não deixa tempo de viagem entre duas consultas em lados opostos da cidade. O que faz?", options: ["Acrescenta tempo de viagem e muda uma, se for preciso", "Confia no plano", "Falta às duas consultas", "Apaga o plano"], answer: 0, why: "Um plano real precisa de tempo de viagem para você chegar a horas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Transformar objetivos em passos semanais",
          minutes: 5,
          goal: "Dividir um objetivo de dinheiro ou de vida em pequenos passos para as próximas quatro semanas.",
          text: [
            "Objetivos grandes, como poupar para a caução de um apartamento, tirar a carta de condução ou pagar uma dívida, podem parecer muito longe. Dividi-los em passos semanais torna-os possíveis.",
            "Pergunte à IA: \"O meu objetivo é poupar $600 para a caução de um apartamento em quatro meses. Recebo cerca de $1,800 por mês. Divida isto em passos semanais e pequenas ações.\" Ou: \"Ajude-me a planear os passos para recuperar a minha carta de condução no meu estado. Diga-me o que devo confirmar com o DMV (o serviço de viação).\"",
            "Escolha um objetivo, escreva os quatro passos semanais e ponha o primeiro no calendário. Reveja todas as semanas: o que fiz, o que vem a seguir? Para passos legais, como recuperar a carta, multas ou perguntas sobre o registo criminal, confirme com o serviço oficial ou com um programa de apoio jurídico; a IA só pode dar uma lista para começar."
          ],
          steps: ["Escolha um objetivo.", "Peça à IA para o dividir em passos semanais.", "Escreva as primeiras quatro semanas.", "Ponha a primeira semana no calendário.", "Reveja todas as semanas e confirme os passos legais com o serviço oficial."],
          words: [["Objetivo", "algo que quer alcançar."], ["Apoio jurídico", "ajuda legal gratuita ou barata para quem tem direito a ela."]],
          slides: [
            { title: "Objetivos grandes, passos pequenos", bullets: ["Poupar para uma caução", "Recuperar a carta de condução", "Pagar uma dívida"] },
            { title: "Peça à IA para dividir", bullets: ["O seu objetivo e o prazo", "Passos e ações semanais"] },
            { title: "Vá até ao fim", bullets: ["O primeiro passo no calendário", "Reveja todas as semanas", "Confirme os passos legais com o serviço ou o apoio jurídico"] }
          ],
          tryIt: "Tarefa final: faça o seu orçamento mensal com a IA a partir de números aproximados, crie um lembrete para a data de pagamento de cada conta, escreva quando e como vai obter o seu relatório de crédito gratuito e transforme um objetivo em quatro passos semanais.",
          youCanNow: "gerir o seu dinheiro e a sua semana com a ajuda da IA, e transformar objetivos em passos que pode dar.",
          quickCheck: [
            { objective: "O5", q: "Como torna possível um objetivo grande?", options: ["Espera até ter mais tempo", "Faz tudo num dia", "Guarda-o só na cabeça", "Divide-o em pequenos passos semanais"], answer: 3, why: "Pequenos passos semanais transformam um objetivo grande em algo que pode começar já." },
            { objective: "O5", q: "A IA dá-lhe passos para recuperar a carta de condução. O que faz a seguir?", options: ["Segue-os sem verificar", "Ignora todos os passos", "Confirma os passos com o DMV ou com o apoio jurídico", "Publica-os na internet"], answer: 2, why: "Os serviços oficiais têm a última palavra sobre os passos legais, por isso confirme com eles." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Planear a sua vida",
        questions: [
          { objective: "O4", q: "Onde obtém relatórios de crédito gratuitos da fonte oficial?", options: ["Em qualquer site que peça uma taxa", "Num anúncio que aparece no ecrã", "Num link por SMS", "Em AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com é a fonte oficial gratuita." },
          { objective: "O4", q: "Deve colar o seu relatório de crédito num assistente de IA?", options: ["Não; peça à IA só para explicar os termos", "Sim, sempre", "Só metade", "Só num computador da biblioteca"], answer: 0, why: "Os relatórios de crédito têm detalhes privados." },
          { objective: "O4", q: "Encontra uma conta que nunca abriu. O que faz?", options: ["Paga-a logo", "Ignora-a", "Vai a IdentityTheft.gov para ter um plano de recuperação", "Publica-a na internet"], answer: 2, why: "IdentityTheft.gov guia os passos de recuperação." },
          { objective: "O5", q: "Duas consultas estão marcadas para a mesma hora na próxima semana. Qual é o melhor passo?", options: ["Esperar que dê certo", "Faltar às duas", "Não ir a nenhuma e não dizer nada", "Ligar cedo para remarcar uma"], answer: 3, why: "Uma chamada feita cedo funciona melhor do que faltar sem aviso." },
          { objective: "O5", q: "A IA dá-lhe passos para recuperar uma carta de condução. E depois?", options: ["Não faz nada", "Confia totalmente", "Confirma com o DMV ou com o apoio jurídico", "Paga a um desconhecido"], answer: 2, why: "Os passos legais têm de ser confirmados com os serviços oficiais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gestão do Dinheiro e da Vida com IA",
    questions: [
      { objective: "O1", q: "Um orçamento é:", options: ["Um tipo de empréstimo", "Um plano para o seu dinheiro", "Um cartão do banco", "Uma conta"], answer: 1, why: "Planeia o que entra e o que sai." },
      { objective: "O1", q: "O salário líquido é:", options: ["O que recebe depois dos impostos e dos descontos", "O seu valor por hora antes dos impostos", "Um bónus", "Um empréstimo"], answer: 0, why: "É o dinheiro que recebe de verdade." },
      { objective: "O1", q: "Qual destas é uma necessidade?", options: ["A renda da casa", "Um videojogo novo", "Comer fora todos os dias", "Um segundo serviço de streaming"], answer: 0, why: "A casa é uma necessidade básica." },
      { objective: "O1", q: "Mesmo pequenas poupanças, como $10 por semana, ajudam porque:", options: ["Aumentam o seu salário", "Vão somando e ajudam nas emergências", "São obrigatórias", "Acabam com todas as contas"], answer: 1, why: "Pequenos valores crescem e viram uma reserva." },
      { objective: "O1", q: "Se o seu orçamento não bate certo, pode perguntar à IA:", options: ["\"Pague as minhas contas.\"", "\"Qual é o meu PIN?\"", "\"Onde posso cortar?\"", "\"Peça um empréstimo por mim.\""], answer: 2, why: "A IA pode sugerir opções; quem decide é você." },
      { objective: "O2", q: "Uma categoria de gastos é:", options: ["Uma data de pagamento", "Um banco", "Um empréstimo", "Um grupo de gastos parecidos, como comida"], answer: 3, why: "As categorias mostram para onde vai o dinheiro." },
      { objective: "O2", q: "Uma data de pagamento é:", options: ["Um feriado", "O dia do salário", "O último dia para pagar uma conta a tempo", "Um aniversário"], answer: 2, why: "Pagar depois dela pode trazer multas por atraso." },
      { objective: "O2", q: "A forma mais segura de pagar uma conta é:", options: ["Pela aplicação ou site oficial da empresa, ou pessoalmente", "Por um link numa SMS", "Com cartão-presente a quem lhe telefona", "Por transferência a um desconhecido"], answer: 0, why: "Os canais oficiais evitam burlas." },
      { objective: "O3", q: "As lojas de troca de cheques costumam:", options: ["Ser do governo", "Ser grátis", "Pagar-lhe juros", "Cobrar uma taxa cada vez"], answer: 3, why: "As taxas vão somando em cada dia de salário." },
      { objective: "O3", q: "Uma cooperativa de crédito (credit union) é:", options: ["Um credor de empréstimos até ao salário", "Um banco sem fins lucrativos que pertence aos membros", "Uma agência de crédito", "Uma loja de troca de cheques"], answer: 1, why: "As cooperativas de crédito pertencem aos membros." },
      { objective: "O3", q: "Se teve problemas com uma conta bancária antes, pergunte por:", options: ["Contas de cartões-presente", "Contas de segunda oportunidade ou com taxas baixas", "Só criptomoedas", "Nada"], answer: 1, why: "Muitos bancos e cooperativas de crédito oferecem-nas." },
      { objective: "O3", q: "Antes de aceitar qualquer empréstimo, pergunte:", options: ["A cor favorita do credor", "Só a prestação mensal", "Nada", "O valor total que vai devolver, e quando"], answer: 3, why: "O custo total mostra o que paga de verdade." },
      { objective: "O3", q: "Os juros são:", options: ["O dinheiro a mais que paga por pedir emprestado", "Uma prenda grátis", "O seu salário", "Um lembrete de conta"], answer: 0, why: "Pedir emprestado custa juros." },
      { objective: "O3", q: "Para ajuda com dívidas, uma escolha segura é:", options: ["Um desconhecido na internet", "Uma empresa que cobra uma taxa grande adiantada para apagar dívidas", "Um conselheiro de crédito sem fins lucrativos ou o apoio jurídico", "Uma oferta de cartões-presente"], answer: 2, why: "As organizações sem fins lucrativos e o apoio jurídico evitam as burlas de alívio de dívidas." },
      { objective: "O4", q: "Com que frequência pode obter relatórios de crédito gratuitos de cada agência no site oficial?", options: ["Só pagando uma taxa", "Uma vez a cada dez anos", "Nunca", "Uma vez por semana"], answer: 3, why: "As agências alargaram os relatórios gratuitos para todas as semanas." },
      { objective: "O4", q: "As três agências de crédito nacionais são:", options: ["Google, Apple e Microsoft", "Visa, Mastercard e Discover", "Equifax, Experian e TransUnion", "O DMV, o IRS e a SSA"], answer: 2, why: "Essas três guardam os relatórios de crédito." },
      { objective: "O4", q: "Peça o seu relatório de crédito:", options: ["Num computador partilhado da biblioteca com a sessão aberta em tudo", "Num aparelho privado", "No telefone de um desconhecido", "Numa conversa com a IA"], answer: 1, why: "Vai escrever lá os seus dados pessoais." },
      { objective: "O5", q: "Quando pede à IA para planear a sua semana, descreva os compromissos:", options: ["Em palavras gerais", "Com o número do seu processo", "Com o seu número de identificação", "Com o seu número da Segurança Social"], answer: 0, why: "Palavras gerais chegam." },
      { objective: "O5", q: "Um \"choque de horários\" quer dizer:", options: ["Duas coisas à mesma hora", "Uma discussão", "Um dia livre", "Uma conta"], answer: 0, why: "Os choques de horários precisam de ser remarcados." },
      { objective: "O5", q: "Para tornar possível um objetivo grande, você:", options: ["Espera pela sorte", "Divide-o em passos semanais", "Faz tudo num dia", "Esconde-o de si mesmo"], answer: 1, why: "Passos pequenos somam grandes resultados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      6,
      7,
      8,
      11,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Orçamento mensal",
        objective: "O1",
        notYet: "Não há orçamento, ou usa números de conta verdadeiros, ou deixa de fora as necessidades.",
        meets: "Um orçamento de um mês com números aproximados, com as necessidades primeiro e uma pequena linha de poupança.",
        exceeds: "Bate certo, e o aluno perguntou à IA onde cortar, se foi preciso."
      },
      {
        name: "Lembretes das contas",
        objective: "O2",
        notYet: "Algumas contas não têm lembrete.",
        meets: "Um lembrete para cada conta alguns dias antes da data de pagamento.",
        exceeds: "Os lembretes repetem-se todos os meses e o aluno começou uma nota de gastos."
      },
      {
        name: "Plano para o relatório de crédito",
        objective: "O4",
        notYet: "Não há plano, ou planeia usar um site que não é oficial.",
        meets: "Escreve quando vai pedir o relatório gratuito no site oficial, num aparelho privado.",
        exceeds: "Também escreve o que procurar e o que fazer com uma conta que nunca abriu."
      },
      {
        name: "Objetivo em passos semanais",
        objective: "O5",
        notYet: "O objetivo é vago ou não tem passos.",
        meets: "Um objetivo dividido em quatro pequenos passos semanais.",
        exceeds: "Cada passo tem um dia e cabe na semana do aluno."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter seguido um orçamento e pago as contas a tempo durante 30 dias (inquérito de seguimento)",
      "Alunos que pedem o seu relatório de crédito gratuito ou abrem uma conta com taxas baixas num banco ou numa cooperativa de crédito em 60 dias",
      "Alunos que começam outro curso da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet e uma aplicação de lembretes ou de calendário",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Papel e caneta para os números aproximados e a nota de gastos",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Os alunos podem usar números de prática em vez do seu salário e das suas contas verdadeiras, se preferirem.",
      "Nunca peça aos alunos para escrever números de conta verdadeiros, números da Segurança Social ou detalhes do processo; valores aproximados chegam.",
      "Este curso não dá conselhos financeiros nem legais; tenha à mão o contacto do apoio jurídico local e de um conselheiro de crédito sem fins lucrativos para perguntas sobre dívidas, multas ou pensão de alimentos.",
      "Os relatórios de crédito devem ser pedidos num aparelho privado, não num computador partilhado da sala de informática.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
