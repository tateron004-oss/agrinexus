"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-financial-literacy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Money lessons: no investment advice; US agencies and sites (FDIC, IRS VITA, consumerfinance.gov, FTC) are kept as in the English.

module.exports = {
  id: "underserved-ai-financial-literacy-pt",
  lang: "pt",
  translationOf: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "IA para a Educação Financeira",
  skills: "Fazer um orçamento mensal, Usar a IA para organizar o dinheiro sem partilhar dados privados, Definir uma meta de poupança, Verificar o seu relatório de crédito de graça, Encontrar ajuda gratuita com impostos e dinheiro, Reconhecer burlas com dinheiro",
  outcome: "fazer um orçamento mensal simples para a sua casa com a ajuda de um assistente de IA gratuito (sem partilhar nenhum número privado), definir uma meta de poupança e saber onde obter o seu relatório de crédito gratuito e ajuda gratuita com os impostos.",
  about: [
    "O stress com o dinheiro é real, sobretudo quando cada dólar já tem destino. Este curso dá-lhe ferramentas simples para ver para onde vai o seu dinheiro, planear o que é importante para a sua família e evitar armadilhas caras.",
    "Você vai fazer um orçamento mensal, usar um assistente de IA gratuito para o ajudar a organizar e explicar sem escrever nenhum número privado, definir uma meta de poupança, verificar o seu relatório de crédito de graça, encontrar ajuda gratuita com impostos e dinheiro e reconhecer burlas com dinheiro.",
    "Este curso ensina habilidades; não dá conselhos de investimento. Para decisões grandes sobre dinheiro, fale com um conselheiro gratuito de uma organização sem fins lucrativos ou consulte fontes oficiais como consumerfinance.gov, fdic.gov e irs.gov. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o orçamento de um mês para a sua casa: escreva os rendimentos, as necessidades e os desejos com valores arredondados, use um assistente de IA para os organizar e sugerir um lugar onde poupar (sem números de conta nem dados privados), defina uma meta de poupança com um valor e uma data, e escreva onde vai obter o seu relatório de crédito gratuito e a ajuda gratuita com os impostos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades desfavorecidas que gerem uma casa com um orçamento apertado: pais e mães que trabalham, cuidadores, pessoas que recebem apoios, pessoas mais velhas e jovens adultos que vivem sozinhos pela primeira vez.",
    startingPoint: "Pagam as contas e controlam o dinheiro de cabeça ou em papel. Poucos têm um orçamento escrito, uma meta de poupança ou já verificaram o seu relatório de crédito, e muitos nunca usaram IA para tarefas de dinheiro. Alguns já foram alvo de burlas com dinheiro.",
    gap: "Sem um plano, os pequenos gastos acumulam-se, a poupança nunca começa, os erros no crédito ficam por corrigir e as famílias pagam pela ajuda com os impostos ou caem em burlas. Os alunos precisam de um orçamento simples, de uma meta de poupança e de ajuda gratuita de confiança, e têm de usar a IA sem partilhar números privados.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca; o orçamento também pode ser feito em papel",
      "Privacidade: só valores arredondados; nunca números de conta, de cartão ou da Segurança Social (Social Security) nem palavras-passe na IA",
      "Só educação financeira geral: nenhum conselho de investimento, e as decisões grandes vão para fontes oficiais ou para um conselheiro gratuito sem fins lucrativos",
      "Os valores e as regras (FDIC, VITA, Lifeline) mudam: os alunos confirmam nos sites oficiais"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um mês de recibos de vencimento, extratos ou talões", action: "fazer a lista dos seus rendimentos e separar os seus gastos em necessidades e desejos", standard: "com pelo menos dez gastos, valores arredondados e totais" },
    { id: "O2", condition: "Usando um assistente de IA gratuito", action: "organizar o seu orçamento numa tabela e escolher quais das sugestões servem para a sua família", standard: "partilhando só categorias arredondadas e verificando os totais com uma calculadora" },
    { id: "O3", condition: "Com uma coisa para a qual quer poupar", action: "definir uma meta de poupança com um valor e uma data, calcular o valor por semana e escolher um lugar seguro para o guardar", standard: "com as contas verificadas e num banco segurado pelo FDIC ou numa cooperativa de crédito com seguro federal" },
    { id: "O4", condition: "Usando o AnnualCreditReport.com", action: "explicar como obter os seus relatórios de crédito gratuitos e verificar se têm erros", standard: "dizendo o nome das três agências de crédito e o que contestar" },
    { id: "O5", condition: "Quando precisa de ajuda com impostos ou dinheiro", action: "encontrar um local gratuito de ajuda com impostos VITA ou TCE e uma fonte de confiança para perguntas sobre dinheiro", standard: "escrevendo a morada do local e o que levar" },
    { id: "O6", condition: "Com uma oferta de dinheiro ou uma mensagem urgente", action: "reconhecer os sinais de alerta de uma burla com dinheiro e escolher o próximo passo seguro", standard: "sem partilhar dados de acesso nem códigos e denunciando as burlas à FTC" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu plano para o dinheiro",
      lessons: [
        {
          objectives: ["O1"],
          title: "O básico do orçamento: rendimentos, necessidades e desejos",
          minutes: 5,
          goal: "Fazer a lista dos seus rendimentos do mês e separar os seus gastos em necessidades e desejos.",
          text: [
            "Um orçamento é um plano para o seu dinheiro. Mostra o que entra em cada mês e para onde vai. Um orçamento não quer dizer que nunca se pode divertir; quer dizer que você decide de propósito.",
            "Rendimento é o dinheiro que entra: salários, apoios, pensão de alimentos para os filhos, biscates. Necessidades são as coisas que tem de pagar para viver e trabalhar: renda da casa, comida, água e luz, transporte, cuidado das crianças, medicamentos. Desejos são coisas boas de ter: comer fora, serviços de streaming, roupa nova de que ainda não precisa.",
            "Comece com um mês. Veja os recibos de vencimento, os extratos do banco ou do cartão e os talões. Arredonde os valores ao dólar mais próximo ou a cinco dólares; um valor aproximado chega para começar."
          ],
          steps: ["Escreva todas as fontes de rendimento de um mês.", "Faça a lista de todos os gastos de que se lembra ou que encontra.", "Marque cada gasto como necessidade ou desejo.", "Some os rendimentos, as necessidades e os desejos."],
          words: [["Orçamento", "um plano de como vai usar o seu dinheiro em cada mês."], ["Rendimento", "o dinheiro que entra."], ["Gasto", "o dinheiro que sai."]],
          slides: [
            { title: "Um orçamento é um plano", bullets: ["O que entra", "Para onde vai", "Você decide de propósito"] },
            { title: "Necessidades e desejos", bullets: ["Necessidades: renda, comida, água e luz, transporte, crianças", "Desejos: comer fora, streaming, extras"] },
            { title: "Comece de forma simples", bullets: ["Um mês", "Use recibos de vencimento, extratos, talões", "Arredonde os valores"] }
          ],
          tryIt: "Em papel ou numa folha de cálculo gratuita, escreva o seu rendimento do mês e pelo menos dez gastos. Marque cada um com N para necessidade ou D para desejo.",
          youCanNow: "fazer a lista dos seus rendimentos e separar os gastos em necessidades e desejos.",
          quickCheck: [
            { objective: "O1", q: "O que é rendimento?", options: ["Dinheiro que entra, como salários e apoios", "Dinheiro que gasta na renda", "Dinheiro que deve", "Uma conta que paga"], answer: 0, why: "Rendimento é o dinheiro que entra, como salários, apoios ou biscates." },
            { objective: "O1", q: "Está a fazer a lista dos gastos e paga cerca de $87,60 pelo telefone. O que escreve para começar?", options: ["Deixa de fora", "Cerca de $90", "$870", "Nada até encontrar os cêntimos exatos"], answer: 1, why: "Arredondar ao dólar mais próximo ou a cinco chega para começar um orçamento." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usar a IA para organizar o seu orçamento com segurança",
          minutes: 5,
          goal: "Pedir a um assistente de IA gratuito para organizar e explicar o seu orçamento sem partilhar informações privadas.",
          text: [
            "Um assistente de IA gratuito como o ChatGPT, o Microsoft Copilot ou o Google Gemini pode transformar a sua lista numa tabela arrumada, fazer as somas e mostrar para onde vai o dinheiro. Quem toma todas as decisões continua a ser você.",
            "Partilhe só valores arredondados e categorias. Nunca escreva números de conta, números de cartão, o seu número da Segurança Social, palavras-passe ou os dados de acesso do seu banco. Exemplo de pedido: \"A minha família de 4 pessoas recebe cerca de $3.200 por mês. Renda $1.400, comida $650, telefone $90, passes de autocarro $100, comer fora $200, streaming $40. Ponha isto numa tabela, faça o total e sugira dois lugares onde podemos cortar.\"",
            "A IA pode errar nas contas. Some os totais você mesmo ou com uma calculadora para verificar. As dicas dela são ideias, não regras; escolha o que serve para a sua família."
          ],
          steps: ["Escreva as suas categorias e os valores arredondados.", "Tire todos os números de conta e dados privados.", "Peça à IA uma tabela, o total e sugestões de cortes.", "Verifique os totais você mesmo.", "Escolha que sugestões servem para a sua família."],
          words: [["Categoria", "um grupo de gastos, como a comida ou o transporte."], ["Marcador", "um texto como \"[o meu banco]\" usado no lugar de dados privados."]],
          slides: [
            { title: "A IA pode ajudar a organizar", bullets: ["Fazer uma tabela", "Fazer as somas", "Sugerir onde cortar"] },
            { title: "Partilhe só isto", bullets: ["Valores arredondados", "Categorias como renda e comida", "Nunca números de conta, de cartão ou da Segurança Social"] },
            { title: "Verifique e escolha", bullets: ["Verifique as contas você mesmo", "As dicas são ideias, não regras", "Escolha o que serve para a sua família"] }
          ],
          tryIt: "Dê a um assistente de IA as suas categorias e valores arredondados (sem dados privados). Peça uma tabela, um total e duas ideias para cortar. Verifique o total com uma calculadora.",
          youCanNow: "usar a IA para organizar um orçamento sem partilhar informações privadas, e verificar as contas dela.",
          quickCheck: [
            { objective: "O2", q: "Quem faz as escolhas finais sobre o seu orçamento quando usa a IA?", options: ["A IA", "O seu banco", "Você", "A loja de aplicações"], answer: 2, why: "A IA dá ideias, mas quem toma todas as decisões é você." },
            { objective: "O2", q: "Quer que a IA organize o seu orçamento. O que escreve?", options: ["Os dados de acesso do seu banco", "O número do seu cartão e o código", "O seu número da Segurança Social", "Categorias arredondadas como \"comida cerca de $650\""], answer: 3, why: "Na IA só entram valores arredondados e categorias, nunca números privados." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Definir uma meta de poupança e guardar o dinheiro com segurança",
          minutes: 5,
          goal: "Definir uma meta de poupança com um valor e uma data, e saber como os depósitos no banco estão protegidos.",
          text: [
            "Mesmo um valor pequeno poupado todas as semanas pode ajudar quando o carro avaria ou as horas de trabalho são cortadas. Muitas pessoas começam com um fundo de emergência: dinheiro guardado só para surpresas.",
            "Faça uma meta clara: \"Poupar $300 para emergências até 1 de junho.\" Divida pelo número de semanas para ver quanto guardar por semana. Peça à IA para fazer a conta e depois verifique-a.",
            "O lugar onde guarda a poupança importa. O dinheiro num banco segurado pelo FDIC está protegido até $250.000 por depositante, por banco, para cada categoria de titularidade da conta. O seguro do FDIC não cobre ações nem criptomoedas. Confirme em fdic.gov que um banco é segurado pelo FDIC antes de abrir uma conta."
          ],
          steps: ["Escolha para que vai poupar.", "Escolha um valor e uma data.", "Divida o valor pelo número de semanas.", "Guarde a poupança num banco ou numa cooperativa de crédito com seguro federal."],
          words: [["Fundo de emergência", "dinheiro poupado só para gastos inesperados."], ["FDIC", "a Federal Deposit Insurance Corporation, a agência dos EUA que protege o dinheiro nos bancos segurados."], ["Cooperativa de crédito", "uma instituição financeira sem fins lucrativos que pertence aos seus membros."]],
          sources: [{ name: "FDIC: Understanding Deposit Insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Comece um fundo de emergência", bullets: ["Dinheiro só para surpresas", "Valores pequenos acumulam-se"] },
            { title: "Uma meta clara", bullets: ["Exemplo: $300 até 1 de junho", "Valor a dividir pelas semanas = poupança por semana", "Verifique as contas você mesmo"] },
            { title: "Guarde a poupança em segurança", bullets: ["Banco segurado pelo FDIC: até $250.000 por depositante, por banco, por categoria", "Não cobre ações nem criptomoedas", "Confirme um banco em fdic.gov"] }
          ],
          tryIt: "Escreva uma meta de poupança com um valor e uma data. Calcule quanto poupar por semana e depois peça à IA para verificar a sua conta.",
          youCanNow: "definir uma meta de poupança clara e escolher um lugar seguro e com seguro para a guardar.",
          quickCheck: [
            { objective: "O3", q: "O que torna uma meta de poupança clara?", options: ["Um valor e uma data", "Um nome bonito", "Um número grande", "Não contar a ninguém"], answer: 0, why: "Uma meta clara diz quanto e até quando, como $300 até 1 de junho." },
            { objective: "O3", q: "Quer poupar $200 em 20 semanas. Quanto guarda por semana?", options: ["$20", "$10", "$4", "$100"], answer: 1, why: "$200 a dividir por 20 semanas dá $10 por semana." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu plano para o dinheiro",
        questions: [
          { objective: "O1", q: "Qual destes é uma necessidade?", options: ["Serviço de streaming", "Renda da casa", "Comer fora", "Um jogo novo"], answer: 1, why: "A renda é um gasto que tem de pagar para viver." },
          { objective: "O2", q: "O que é seguro escrever num assistente de IA para ter ajuda com o orçamento?", options: ["O número da sua conta bancária", "O número do seu cartão", "Valores arredondados como \"renda cerca de $1.400\"", "A palavra-passe do seu banco pela internet"], answer: 2, why: "Valores arredondados e categorias dão a ajuda de que precisa sem dados privados." },
          { objective: "O2", q: "A IA soma o seu orçamento e dá um total que parece errado. O que faz?", options: ["Confia", "Apaga o seu orçamento", "Pergunta a um desconhecido na internet", "Verifica o total com uma calculadora"], answer: 3, why: "A IA pode errar nas contas; verifique você mesmo." },
          { objective: "O3", q: "Qual é uma meta de poupança clara?", options: ["\"Poupar $300 para emergências até 1 de junho\"", "\"Poupar alguma coisa\"", "\"Ficar rico\"", "\"Dinheiro mais tarde\""], answer: 0, why: "Tem um objetivo, um valor e uma data." },
          { objective: "O3", q: "O que cobre o seguro do FDIC?", options: ["Ações", "Depósitos num banco segurado, até ao limite", "Criptomoedas", "Dinheiro guardado debaixo do colchão"], answer: 1, why: "O FDIC protege os depósitos nos bancos segurados; não cobre ações nem criptomoedas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crédito, ajuda e segurança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Verificar o seu relatório de crédito de graça",
          minutes: 5,
          goal: "Encontrar o site oficial dos relatórios de crédito gratuitos e verificar se um relatório tem erros.",
          text: [
            "Um relatório de crédito é um registo dos seus empréstimos, cartões e contas. Os senhorios, os credores e alguns empregadores podem consultá-lo. Acontecem erros, e um erro pode fazer-lhe perder uma casa ou um empréstimo.",
            "Pode obter relatórios de crédito gratuitos das três grandes agências de crédito, Equifax, Experian e TransUnion, todas as semanas em AnnualCreditReport.com. Esse é o site oficial. Outros sites que prometem relatórios \"grátis\" podem tentar vender-lhe alguma coisa.",
            "Procure contas que não reconhece, moradas erradas e pagamentos marcados como atrasados que fez a tempo. Se alguma coisa estiver errada, pode contestá-la junto da agência de crédito. O Consumer Financial Protection Bureau (a agência dos EUA que protege os consumidores), em consumerfinance.gov, explica como."
          ],
          steps: ["Escreva você mesmo AnnualCreditReport.com no navegador.", "Peça os seus relatórios à Equifax, à Experian e à TransUnion.", "Procure contas que não conhece, dados errados e atrasos que não aconteceram.", "Se alguma coisa estiver errada, siga os passos para contestar em consumerfinance.gov."],
          words: [["Relatório de crédito", "um registo dos seus empréstimos, cartões de crédito e pagamentos de contas."], ["Agência de crédito", "uma empresa que guarda relatórios de crédito: Equifax, Experian, TransUnion."], ["Contestar", "pedir oficialmente para corrigir um erro."]],
          sources: [{ name: "FTC: Free Credit Reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "O seu relatório de crédito", bullets: ["Registo de empréstimos, cartões e contas", "Senhorios e credores podem consultá-lo", "Acontecem erros"] },
            { title: "Obtenha-o de graça", bullets: ["AnnualCreditReport.com é o site oficial", "Equifax, Experian, TransUnion", "Grátis todas as semanas"] },
            { title: "O que procurar", bullets: ["Contas que não conhece", "Moradas erradas ou atrasos errados", "Conteste os erros: veja consumerfinance.gov"] }
          ],
          tryIt: "Escreva o site oficial dos relatórios de crédito gratuitos e o nome das três agências. Se estiver pronto e num aparelho privado, peça um relatório e procure alguma coisa que não reconheça.",
          youCanNow: "obter os seus relatórios de crédito gratuitos no site oficial e encontrar erros para contestar.",
          quickCheck: [
            { objective: "O4", q: "Quem pode consultar o seu relatório de crédito?", options: ["Só você", "Só a sua família", "Senhorios, credores e alguns empregadores", "Ninguém"], answer: 2, why: "Os senhorios, os credores e alguns empregadores podem consultar o seu relatório de crédito." },
            { objective: "O4", q: "Um anúncio oferece um relatório de crédito \"grátis\" num site que não conhece. O que faz?", options: ["Regista-se e coloca o seu cartão", "Clica no anúncio", "Ignora os relatórios de crédito", "Escreve você mesmo AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com é o site oficial; os outros podem tentar vender-lhe alguma coisa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajuda gratuita com impostos e dinheiro",
          minutes: 5,
          goal: "Encontrar um local gratuito de ajuda com impostos e uma fonte de confiança para perguntas sobre dinheiro.",
          text: [
            "Não precisa de pagar muito para tratar dos seus impostos. O programa Volunteer Income Tax Assistance do IRS (a agência de impostos dos EUA), chamado VITA, dá ajuda gratuita com os impostos, sobretudo a pessoas que cumprem os limites de rendimento do Earned Income Tax Credit (um crédito de imposto para quem trabalha). Muitos locais também ajudam pessoas que ganham cerca de $70.244 ou menos, pessoas com deficiência e pessoas que falam pouco inglês. Cada local pode ter as suas próprias regras, por isso confirme com o local.",
            "Encontre um local VITA com o localizador VITA/TCE do IRS em freetaxassistance.for.irs.gov ou ligando para o 800-906-9887. O TCE dá uma ajuda gratuita parecida, sobretudo a pessoas com 60 anos ou mais.",
            "Para outras perguntas sobre dinheiro, o Consumer Financial Protection Bureau, em consumerfinance.gov, tem guias gratuitos sobre contas bancárias, cobrança de dívidas, empréstimos de curto prazo (payday loans) e mais, e uma forma de apresentar uma queixa sobre uma empresa. Os empréstimos de curto prazo e as aplicações de dinheiro rápido podem custar muito mais do que parecem; leia o custo total antes de assinar."
          ],
          steps: ["Pesquise no localizador VITA/TCE do IRS ou ligue para o 800-906-9887.", "Pergunte ao local o que deve levar.", "Use consumerfinance.gov para perguntas sobre dinheiro.", "Antes de qualquer empréstimo, peça o custo total em dólares."],
          words: [["VITA", "Volunteer Income Tax Assistance: ajuda gratuita com os impostos, apoiada pelo IRS."], ["Empréstimo de curto prazo (payday loan)", "um empréstimo pequeno e curto que pode sair muito caro."]],
          sources: [{ name: "IRS: Free tax return preparation for qualifying taxpayers", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Ajuda gratuita com impostos: VITA", bullets: ["Apoiado pelo IRS, feito por voluntários formados", "Muitos locais ajudam quem ganha cerca de $70.244 ou menos", "Os locais podem ter as suas próprias regras"] },
            { title: "Encontre um local", bullets: ["freetaxassistance.for.irs.gov", "Ou ligue para o 800-906-9887", "TCE: ajuda gratuita sobretudo para quem tem 60 anos ou mais"] },
            { title: "Ajuda de confiança com dinheiro", bullets: ["consumerfinance.gov: guias e queixas", "Os empréstimos de curto prazo podem custar muito", "Peça o custo total antes de assinar"] }
          ],
          tryIt: "Use o localizador VITA/TCE do IRS para encontrar o local de ajuda gratuita com impostos mais perto de você. Escreva a morada e o que dizem para levar.",
          youCanNow: "encontrar ajuda gratuita com os impostos e informação de confiança sobre dinheiro.",
          quickCheck: [
            { objective: "O5", q: "O que oferece sobretudo o TCE?", options: ["Ajuda gratuita com os impostos, sobretudo para pessoas com 60 anos ou mais", "Empréstimos pagos", "Cartões de crédito", "Formação para o emprego"], answer: 0, why: "O TCE dá ajuda gratuita com os impostos, como o VITA, sobretudo a pessoas com 60 anos ou mais." },
            { objective: "O5", q: "Uma aplicação de dinheiro rápido oferece-lhe $200 hoje. O que pergunta primeiro?", options: ["Com que rapidez pode ter mais", "O custo total em dólares", "Se os seus amigos a usam", "Nada; assina logo"], answer: 1, why: "Os empréstimos de curto prazo e as aplicações de dinheiro rápido podem custar muito mais do que parecem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reconhecer burlas com dinheiro, e o seu plano final",
          minutes: 5,
          goal: "Reconhecer as burlas com dinheiro mais comuns e terminar o seu plano de orçamento.",
          text: [
            "Os burlões atacam pessoas com pouco dinheiro com empréstimos falsos, falsas ajudas para pagar dívidas, falsos subsídios do governo e ofertas para \"ficar rico depressa\", incluindo esquemas com criptomoedas. Alguns já usam IA para escrever mensagens que parecem verdadeiras ou copiar a voz de um familiar.",
            "Sinais de alerta: apressam você, pedem para pagar com cartões-presente, transferências, aplicações de pagamento ou criptomoedas, prometem dinheiro garantido, ou pedem os dados de acesso do seu banco ou o código enviado para o seu telefone. Uma agência do governo verdadeira não liga a exigir pagamentos dessa forma.",
            "Se alguma coisa parecer errada, pare, desligue e ligue de volta usando um número que sabe que é verdadeiro. Pode denunciar burlas à Federal Trade Commission (FTC, a agência dos EUA que protege os consumidores) em ReportFraud.ftc.gov."
          ],
          steps: ["Esteja atento à pressa, aos cartões-presente, às criptomoedas e ao dinheiro garantido.", "Nunca partilhe os dados de acesso do banco nem os códigos do telefone.", "Desligue e ligue de volta para um número que conhece.", "Denuncie as burlas à FTC."],
          words: [["Burla", "um truque para roubar dinheiro ou informações."], ["Lucro garantido", "a promessa de que vai ganhar dinheiro de certeza; uma frase comum das burlas."]],
          sources: [{ name: "Federal Trade Commission: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Burlas comuns com dinheiro", bullets: ["Empréstimos falsos e falsas ajudas com dívidas", "Falsos subsídios do governo", "\"Fique rico depressa\" e esquemas com criptomoedas"] },
            { title: "Sinais de alerta", bullets: ["Apressam você", "Cartões-presente, transferências, aplicações de pagamento ou criptomoedas", "Dinheiro garantido; pedem o seu código"] },
            { title: "O que fazer", bullets: ["Pare e desligue", "Ligue de volta para um número que conhece", "Denuncie em ReportFraud.ftc.gov"] }
          ],
          tryIt: "Tarefa final: termine o seu orçamento de um mês com a ajuda da IA (sem números privados), verifique os totais, escreva uma meta de poupança com um valor e uma data, e escreva onde vai obter o seu relatório de crédito gratuito e a ajuda gratuita com os impostos.",
          youCanNow: "fazer um orçamento da casa, planear a poupança, encontrar ajuda gratuita e evitar burlas com dinheiro.",
          quickCheck: [
            { objective: "O6", q: "Que pedido de pagamento é um sinal de alerta de burla?", options: ["Uma conta da sua empresa de luz conhecida, na morada de sempre", "Pagar a renda ao senhorio com cheque", "Dizerem-lhe para pagar com cartões-presente", "Pagar ao balcão da loja"], answer: 2, why: "Os burlões pedem cartões-presente, transferências, aplicações de pagamento ou criptomoedas." },
            { objective: "O6", q: "Recebe uma chamada com a voz do seu primo a pedir dinheiro já. O que faz?", options: ["Envia logo", "Dá-lhe os dados de acesso do seu banco", "Paga com cartões-presente", "Desliga e liga ao seu primo para um número que conhece"], answer: 3, why: "Os burlões conseguem copiar vozes com IA, por isso ligue de volta para um número conhecido." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Crédito, ajuda e segurança",
        questions: [
          { objective: "O4", q: "Qual é o site oficial dos relatórios de crédito gratuitos?", options: ["Qualquer site que diga \"grátis\"", "Um link numa SMS", "Um anúncio nas redes sociais", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com é o site oficial dos relatórios gratuitos." },
          { objective: "O4", q: "Encontra no seu relatório de crédito uma conta que não é sua. Você deve:", options: ["Contestá-la junto da agência de crédito", "Ignorá-la", "Pagá-la logo", "Publicá-la na internet"], answer: 0, why: "Contestar corrige os erros no seu relatório." },
          { objective: "O5", q: "O que é o VITA?", options: ["Um empréstimo de curto prazo", "Ajuda gratuita com os impostos, apoiada pelo IRS", "Uma agência de crédito", "Uma conta poupança"], answer: 1, why: "O VITA oferece a preparação gratuita dos impostos por voluntários formados." },
          { objective: "O6", q: "Alguém liga a dizer que é do governo e que tem de pagar hoje uma multa com cartões-presente. Isto é:", options: ["Normal", "Um reembolso de impostos", "Uma burla", "Um serviço do VITA"], answer: 2, why: "As agências do governo não exigem pagamentos com cartões-presente." },
          { objective: "O6", q: "Onde pode denunciar uma burla?", options: ["Ao burlão", "Em lado nenhum", "Só num grupo de conversa", "ReportFraud.ftc.gov"], answer: 3, why: "A Federal Trade Commission recebe denúncias de burlas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Educação Financeira",
    questions: [
      { objective: "O1", q: "Um orçamento é:", options: ["Um plano para o seu dinheiro", "Um tipo de empréstimo", "Um cartão de crédito", "Uma taxa do banco"], answer: 0, why: "Um orçamento planeia os rendimentos e os gastos." },
      { objective: "O1", q: "Qual destes é rendimento?", options: ["A renda da casa", "Um salário", "As compras de comida", "A conta do telefone"], answer: 1, why: "Rendimento é o dinheiro que entra." },
      { objective: "O1", q: "Qual destes é um desejo?", options: ["Cuidado das crianças para poder trabalhar", "Eletricidade", "Comer fora", "Medicamentos"], answer: 2, why: "Comer fora é bom de ter, mas não é obrigatório." },
      { objective: "O1", q: "Quando começa um orçamento, pode:", options: ["Deixar de fora os rendimentos", "Usar a sua palavra-passe", "Adivinhar ao acaso", "Arredondar os valores ao dólar mais próximo ou a cinco"], answer: 3, why: "Valores aproximados e arredondados chegam para começar." },
      { objective: "O2", q: "O que NUNCA deve escrever num assistente de IA?", options: ["O número do seu cartão", "\"Comida cerca de $600\"", "\"Família de 4 pessoas\"", "\"Sugira dois cortes\""], answer: 0, why: "Os números de cartão são informações privadas." },
      { objective: "O2", q: "A IA sugere cortar o passe de autocarro do seu filho. Você:", options: ["Tem de o fazer", "Decide o que serve para a sua família; essa dica pode não servir", "Pergunta a um desconhecido", "Dá à IA os dados de acesso do seu banco"], answer: 1, why: "As dicas da IA são ideias; quem escolhe o que serve é você." },
      { objective: "O2", q: "Porque deve verificar os totais do orçamento feitos pela IA?", options: ["A IA nunca erra", "É obrigatório por lei", "A IA pode errar nas contas", "Muda o saldo do seu banco"], answer: 2, why: "Verifique sempre as contas você mesmo." },
      { objective: "O3", q: "Um fundo de emergência é:", options: ["Dinheiro para desejos", "Um empréstimo", "Um relatório de crédito", "Dinheiro poupado só para gastos inesperados"], answer: 3, why: "Cobre surpresas como o arranjo do carro." },
      { objective: "O3", q: "Quer ter $260 em 26 semanas. Quanto por semana?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 a dividir por 26 semanas dá $10." },
      { objective: "O3", q: "O seguro do FDIC protege os depósitos até:", options: ["$1.000", "$250.000 por depositante, por banco segurado, por categoria de titularidade", "Qualquer valor", "Só criptomoedas"], answer: 1, why: "Esse é o valor padrão do FDIC." },
      { objective: "O3", q: "O que NÃO é coberto pelo seguro do FDIC?", options: ["Uma conta poupança num banco segurado", "Uma conta à ordem num banco segurado", "Criptomoedas", "Um depósito a prazo num banco segurado"], answer: 2, why: "O FDIC não cobre criptomoedas nem ações." },
      { objective: "O4", q: "Um relatório de crédito é:", options: ["O seu salário", "A sua declaração de impostos", "O seu orçamento", "Um registo dos seus empréstimos, cartões e pagamentos de contas"], answer: 3, why: "Os credores e os senhorios podem consultá-lo." },
      { objective: "O4", q: "As três grandes agências de crédito são:", options: ["Equifax, Experian e TransUnion", "Google, Bing e Yahoo", "FDIC, IRS e FTC", "Visa, Mastercard e Discover"], answer: 0, why: "Estas três guardam os relatórios de crédito." },
      { objective: "O4", q: "Com que frequência pode obter relatórios gratuitos em AnnualCreditReport.com?", options: ["Uma vez a cada dez anos", "Todas as semanas", "Nunca", "Só se pagar"], answer: 1, why: "As agências oferecem lá relatórios gratuitos todas as semanas." },
      { objective: "O5", q: "Onde encontra guias gratuitos sobre cobrança de dívidas e empréstimos de curto prazo?", options: ["Num anúncio que aparece no ecrã", "Numa SMS de um burlão", "consumerfinance.gov", "Numa loja de cartões-presente"], answer: 2, why: "O Consumer Financial Protection Bureau publica guias gratuitos." },
      { objective: "O5", q: "Como encontra um local VITA gratuito de ajuda com impostos?", options: ["Pergunta a um desconhecido", "Paga primeiro uma taxa", "Espera por uma chamada", "Usa o localizador VITA/TCE do IRS ou liga para o 800-906-9887"], answer: 3, why: "Essas são as formas oficiais do IRS de encontrar um local." },
      { objective: "O5", q: "Antes de aceitar um empréstimo de curto prazo ou uma aplicação de dinheiro rápido, deve:", options: ["Pedir o custo total em dólares", "Assinar depressa", "Dar os dados de acesso do seu banco", "Não ler nada"], answer: 0, why: "Estes empréstimos podem custar muito mais do que parecem." },
      { objective: "O6", q: "Alguém promete lucros \"garantidos\" com criptomoedas. Isto é:", options: ["Um negócio seguro", "Um sinal de alerta comum de burla", "Segurado pelo FDIC", "Ajuda gratuita com impostos"], answer: 1, why: "Dinheiro garantido é uma frase clássica das burlas." },
      { objective: "O6", q: "Uma mensagem pede o código enviado para o seu telefone para \"verificar o seu banco\". Você:", options: ["Envia-o", "Publica-o", "Nunca o partilha e liga ao seu banco para um número que conhece", "Lê-o em voz alta"], answer: 2, why: "Esse código protege a sua conta." },
      { objective: "O6", q: "Para uma decisão grande sobre dinheiro, o melhor passo é:", options: ["Confiar em qualquer resposta da IA", "Seguir uma publicação nas redes sociais", "Perguntar à pessoa que está a vender", "Consultar fontes oficiais ou falar com um conselheiro gratuito sem fins lucrativos"], answer: 3, why: "As fontes oficiais e os conselheiros verdadeiros protegem você." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 7, 9, 11, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Orçamento", objective: "O1", notYet: "Faltam rendimentos ou gastos, ou as necessidades e os desejos não estão marcados.", meets: "Um mês de rendimentos e gastos com valores arredondados, cada um marcado como necessidade ou desejo, e os totais.", exceeds: "Usa recibos de vencimento, extratos ou talões para os valores ficarem próximos dos reais." },
      { name: "IA usada com segurança", objective: "O2", notYet: "O pedido tem um número de conta, de cartão ou da Segurança Social, ou os totais não foram verificados.", meets: "Só partilhou categorias arredondadas, verificou os totais e escolheu um lugar onde poupar.", exceeds: "Explica porque aceitou ou recusou cada sugestão da IA." },
      { name: "Meta de poupança", objective: "O3", notYet: "Não tem valor nem data.", meets: "Uma meta com um valor, uma data e o valor por semana verificado.", exceeds: "Diz onde o dinheiro vai ficar guardado e que tem seguro federal." },
      { name: "Relatório de crédito e ajuda com impostos", objective: "O5", notYet: "Não diz onde obter o relatório nem a ajuda com os impostos.", meets: "Indica AnnualCreditReport.com e um local VITA ou TCE a usar.", exceeds: "Tem a morada do local de ajuda com impostos e o que levar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que seguem o seu orçamento e começam a poupar em 30 dias (inquérito de seguimento)",
      "Alunos que verificam o seu relatório de crédito ou usam a ajuda gratuita do VITA com os impostos em 6 meses",
      "Alunos que dizem ter evitado uma burla com dinheiro ou um empréstimo caro"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador da biblioteca, e uma calculadora (o telefone tem uma)",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Recibos de vencimento, extratos ou talões de um mês (guardados em privado)",
      "Papel ou uma folha de cálculo gratuita para o orçamento",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Os alunos mantêm os seus números verdadeiros em privado; ofereça um orçamento de prática a quem prefira não usar o seu.",
      "Verifique se os pedidos têm números de conta, de cartão ou da Segurança Social antes de serem enviados.",
      "Não dê conselhos de investimento, de impostos nem jurídicos; encaminhe os alunos para os sites oficiais, o VITA ou um conselheiro gratuito sem fins lucrativos.",
      "Mostre ao vivo o AnnualCreditReport.com e o localizador VITA/TCE, e peça aos alunos para pedirem relatórios só num aparelho privado.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
