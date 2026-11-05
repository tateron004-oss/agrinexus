"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-housing-jobs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: US programs, agencies and laws keep their English names, explained the first time.

module.exports = {
  id: "reentry-housing-jobs-pt",
  lang: "pt",
  translationOf: "reentry-housing-jobs",
  category: "Re-Entry",
  name: "Encontrar Casa e Empregos de Segunda Oportunidade",
  skills: "Encontrar ajuda para habitação através do 211, Candidatar-se a uma casa com registo criminal, Preparar um dossiê de arrendamento, Usar os American Job Centers, Encontrar empregadores de segunda oportunidade, Explicar o WOTC e a caução federal a um empregador",
  outcome: "encontrar uma casa a que se pode candidatar com registo criminal, preparar um dossiê de arrendamento, encontrar empregadores de segunda oportunidade e ajuda para o emprego perto de você, e explicar a um empregador os incentivos à contratação que vêm consigo.",
  about: [
    "Um lugar seguro para viver e um trabalho estável são as duas coisas que mais ajudam depois de sair da prisão. As duas podem parecer difíceis de alcançar quando se tem registo criminal, mas há programas, regras e empregadores preparados para ajudar.",
    "Neste curso você vai usar o 211 para encontrar ajuda local para habitação, aprender as regras da habitação pública sobre o registo criminal, preparar um dossiê de arrendamento que responde às preocupações de um senhorio, encontrar um American Job Center (centro público de emprego), procurar empregadores de segunda oportunidade e aprender como o Work Opportunity Tax Credit (um crédito fiscal) e o Federal Bonding Program (um programa de caução) podem deixar um empregador mais disposto a contratá-lo.",
    "As regras mudam e são diferentes em cada estado e cidade. Cada lição mostra onde verificar as regras atuais. Para questões legais, pergunte à assistência jurídica gratuita ou a um conselheiro de reintegração.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa que faz logo a seguir. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um plano de uma página para casa e emprego: duas opções de habitação com contactos e o que levar, a lista de verificação do seu dossiê de arrendamento, o American Job Center mais perto, três empregadores de segunda oportunidade ou pistas de emprego, e uma apresentação de duas frases a falar a um empregador do Work Opportunity Tax Credit e do Federal Bonding Program.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e precisam de um lugar seguro para viver e de um trabalho estável, muitas vezes com um registo criminal que torna as duas coisas mais difíceis. Alguns estão em liberdade condicional ou com pena suspensa.",
    startingPoint: "Sabem fazer chamadas e usar um telefone simples. A maioria não conhece o 211, as regras da habitação pública sobre o registo criminal, os dossiês de arrendamento, os American Job Centers, o Work Opportunity Tax Credit nem o Federal Bonding Program.",
    gap: "A casa e o trabalho são as duas coisas que mais ajudam depois de sair da prisão, mas muitas pessoas desistem depois das primeiras recusas ou caem em burlas de arrendamento. Os alunos precisam de encontrar os programas, as regras e os empregadores preparados para ajudar, e apresentar-se com confiança e honestidade.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um telefone simples ou um smartphone, às vezes um computador da biblioteca",
      "Tempo: lições de cerca de 5 minutos, que cabem entre consultas e o trabalho",
      "As regras mudam e variam por estado e cidade; as questões legais vão para a assistência jurídica ou um conselheiro de reintegração",
      "As condições da liberdade condicional ou da pena suspensa podem limitar onde os alunos vivem; privacidade: nenhum número de processo em ferramentas de IA"
    ],
    prerequisites: "Nenhum. O curso \"Ferramentas de IA para o Dia a Dia\" ajuda quem quer usar mapas e lembretes para chegar às consultas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o 211 e programas de reintegração", action: "fazer a lista das opções de habitação a que se pode candidatar", standard: "com o número de telefone, o custo, as regras e o que levar para cada uma" },
    { id: "O2", condition: "Com um fornecedor de habitação e as regras sobre o registo criminal", action: "explicar o que as regras dizem sobre o registo criminal e pedir uma análise justa da sua candidatura", standard: "perguntando se há uma política escrita e se pode entregar provas de reabilitação" },
    { id: "O3", condition: "Com os documentos que tem", action: "preparar um dossiê de arrendamento e reconhecer burlas de arrendamento", standard: "com uma lista de documentos e uma carta curta sobre o que fez desde então, e sem pagar nada antes de ver a casa" },
    { id: "O4", condition: "Usando o CareerOneStop ou o 211", action: "encontrar o American Job Center mais perto e pistas de empregos de segunda oportunidade", standard: "com a morada, o telefone, o horário e as perguntas a fazer na primeira visita" },
    { id: "O5", condition: "Com o Work Opportunity Tax Credit e o Federal Bonding Program", action: "explicar a um empregador como estes programas o podem ajudar a contratá-lo", standard: "numa apresentação de duas frases, depois de ver em irs.gov se o WOTC está em vigor" },
    { id: "O6", condition: "Com uma pergunta sobre o seu registo criminal numa entrevista", action: "responder de forma curta e honesta", standard: "dizendo o que aconteceu, o que fez desde então e porque está pronto, sem escrever números de processo numa IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar um lugar para viver",
      lessons: [
        {
          objectives: ["O1"],
          title: "As suas opções de habitação e por onde começar",
          minutes: 5,
          goal: "Usar o 211 e programas de reintegração para fazer a lista de três opções de habitação a que se pode candidatar.",
          text: [
            "A maioria das pessoas que voltam para casa passa por mais de um tipo de habitação: ficar com a família, um abrigo, uma casa de transição ou de reintegração, uma casa de vida sóbria (sem álcool nem drogas), alugar um quarto e, mais tarde, um apartamento só seu. Cada passo está bem. O objetivo é um lugar seguro agora e um lugar melhor a seguir.",
            "O 211 é o lugar mais fácil para começar. Pode ligar para o 211 ou ir a 211.org para falar com alguém da sua zona que o liga a ajuda para habitação, comida, contas da luz e da água, saúde e mais. As chamadas são confidenciais. Diga que está a voltar da prisão ou da cadeia e pergunte por habitação de reintegração.",
            "A habitação pública e os Housing Choice Vouchers (vales de habitação, muitas vezes chamados Section 8) são geridos pela Public Housing Agency (PHA), a agência local de habitação pública. As listas de espera podem ser longas ou estar fechadas, por isso inscreva-se cedo e mantenha os seus contactos atualizados.",
            "Se está em liberdade condicional ou com pena suspensa, o seu agente pode ter de aprovar o lugar onde vive. Pergunte antes de assinar qualquer coisa."
          ],
          steps: ["Ligue para o 211 ou vá a 211.org e pergunte por habitação de reintegração e de transição.", "Peça listas de habitação a um programa de reintegração ou ao seu agente da liberdade condicional.", "Encontre a sua Public Housing Agency local e pergunte como entrar nas listas de espera.", "Escreva três opções: nome, telefone, custo, regras e o que levar.", "Confirme com o seu agente que a morada é permitida."],
          words: [["211", "um serviço gratuito e confidencial, por telefone e pela internet, que o liga a ajuda local."], ["Habitação de transição", "habitação por pouco tempo, com apoio, muitas vezes para pessoas que voltam da prisão."], ["Public Housing Agency (PHA)", "a agência local que gere a habitação pública e os vales de habitação."], ["Housing Choice Voucher", "ajuda para pagar a renda a um senhorio privado, muitas vezes chamada Section 8."]],
          slides: [
            { title: "A habitação é uma escada", bullets: ["Família, abrigo, reintegração ou vida sóbria", "Um quarto, depois um apartamento", "Seguro agora, melhor a seguir"] },
            { title: "Comece pelo 211", bullets: ["Ligue para o 211 ou vá a 211.org", "Ajuda local e confidencial", "Pergunte por habitação de reintegração"] },
            { title: "Habitação pública e vales", bullets: ["Geridos pela Public Housing Agency local", "As listas de espera podem ser longas: candidate-se cedo", "Mantenha os seus contactos atualizados"] },
            { title: "Em liberdade condicional ou pena suspensa?", bullets: ["O seu agente pode ter de aprovar a morada", "Pergunte antes de assinar"] }
          ],
          sources: [
            { name: "211: Encontrar ajuda local", url: "https://www.211.org/" },
            { name: "HUD: Programa de habitação pública", url: "https://www.hud.gov/topics/rental_assistance/phprog" }
          ],
          tryIt: "Ligue para o 211 ou vá a 211.org e peça habitação de reintegração ou de transição perto de você. Escreva três opções com o número de telefone, o custo, as regras e o que cada uma pede para levar.",
          youCanNow: "usar o 211 e a sua Public Housing Agency local para encontrar opções de habitação e fazer a lista do que cada uma pede.",
          quickCheck: [
            { objective: "O1", q: "O que é habitação de transição?", options: ["Um hotel que se paga por noite", "Habitação por pouco tempo, com apoio, muitas vezes para pessoas que voltam da prisão", "Uma casa que se compra", "Um abrigo que só abre no inverno"], answer: 1, why: "A habitação de transição é habitação por pouco tempo, com apoio, enquanto se organiza." },
            { objective: "O1", q: "Está em liberdade condicional e um amigo oferece-lhe um quarto. O que faria antes de se mudar?", options: ["Mudar-se esta noite", "Assinar um contrato logo", "Confirmar que o seu agente aprova a morada", "Não dizer a ninguém"], answer: 2, why: "As condições da liberdade condicional podem limitar onde pode viver, por isso confirma primeiro." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Candidatar-se a uma casa com registo criminal",
          minutes: 6,
          goal: "Explicar o que as regras da habitação dizem sobre o registo criminal e como pedir uma análise justa da sua candidatura.",
          text: [
            "As regras federais obrigam as agências de habitação pública a recusar alguns grupos: quem tem de estar registado como agressor sexual para toda a vida; quem já foi condenado por fabricar metanfetamina numa habitação com apoio federal; e, durante três anos, uma família despejada de habitação com apoio federal por atividade ligada a drogas, a não ser que a pessoa tenha terminado um programa de reabilitação aprovado ou a situação tenha mudado. Também podem recusar quem usa drogas ilegais neste momento.",
            "Para a maioria dos outros registos, a agência de habitação decide com a sua própria política escrita. Antes de o recusar por causa de um registo criminal, tem de o avisar e de lhe dar uma cópia do registo e a oportunidade de o contestar. Não pode cobrar-lhe a verificação do registo. Peça a política e, se for recusado, peça uma revisão.",
            "Os senhorios privados normalmente podem ver o registo criminal. Ter registo não é uma classe protegida pelo Fair Housing Act (a lei federal da habitação justa), e o HUD (o departamento federal da habitação) disse que vai acabar com orientações federais anteriores que limitavam a verificação de antecedentes. As leis do estado e da cidade podem protegê-lo mais. Na Califórnia, os senhorios não podem usar detenções que não levaram a condenação, registos selados ou apagados, nem registos de quando era menor; não podem recusar toda a gente com registo; e têm de mostrar que uma condenação tem a ver diretamente com ser um bom inquilino.",
            "Se acha que um senhorio na Califórnia não cumpriu estas regras, pode contactar o California Civil Rights Department (o departamento de direitos civis da Califórnia), em geral no prazo de um ano. Noutros estados, pergunte à assistência jurídica ou ao serviço de direitos civis do seu estado."
          ],
          steps: ["Peça a cada fornecedor de habitação a sua política escrita sobre registos criminais.", "Leia primeiro o seu próprio registo para nada o surpreender.", "Leve provas de reabilitação para a candidatura.", "Se for recusado, peça por escrito o motivo, uma cópia do registo usado e uma revisão.", "Se acha que a lei não foi cumprida, contacte a assistência jurídica ou o serviço de direitos civis do seu estado."],
          words: [["Fair Housing Act", "a lei federal contra a discriminação na habitação por raça, cor, origem nacional, religião, sexo, situação familiar ou deficiência."], ["Classe protegida", "um grupo que a lei protege da discriminação."], ["Habitação com apoio federal", "habitação paga em parte por programas federais, como a habitação pública."], ["Revisão informal", "uma reunião para pedir a uma agência de habitação que volte a analisar uma recusa."]],
          slides: [
            { title: "Habitação pública: recusas obrigatórias", bullets: ["Registo de agressor sexual para toda a vida", "Fabrico de metanfetamina em habitação com apoio federal", "Despejo por drogas: 3 anos, com exceções"] },
            { title: "Outros registos: a PHA decide", bullets: ["Peça a política escrita", "Têm de lhe mostrar o registo e deixá-lo contestar", "Se for recusado, peça uma revisão"] },
            { title: "Senhorios privados", bullets: ["Normalmente podem ver o registo", "As orientações federais mudaram: veja hud.gov", "As leis do estado e da cidade podem protegê-lo mais"] },
            { title: "Proteções na Califórnia", bullets: ["Sem detenções sem condenação, registos selados ou de menor", "Sem recusar toda a gente com registo", "Queixas: California Civil Rights Department"] }
          ],
          sources: [
            { name: "24 CFR 960.204: Recusa de admissão por atividade criminosa ou abuso de drogas (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/24/960.204" },
            { name: "HUD: Resumo do Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
            { name: "California Civil Rights Department: Habitação", url: "https://calcivilrights.ca.gov/housing/" }
          ],
          tryIt: "Ligue ou visite o site de um fornecedor de habitação da sua lista e pergunte: Têm uma política escrita sobre registos criminais? Posso entregar provas de reabilitação com a minha candidatura? Escreva as respostas.",
          youCanNow: "explicar as principais regras da habitação sobre o registo criminal, pedir a política a um fornecedor e pedir uma revisão se for recusado.",
          quickCheck: [
            { objective: "O2", q: "Quem gere a habitação pública e os Housing Choice Vouchers na sua zona?", options: ["A Public Housing Agency local", "A polícia", "O seu agente da liberdade condicional", "O IRS (o fisco dos EUA)"], answer: 0, why: "A sua Public Housing Agency local gere estes programas e define a sua própria política." },
            { objective: "O2", q: "Quer candidatar-se a um fornecedor de habitação mas tem medo por causa do seu registo. O que faria?", options: ["Não falar do registo e esperar que corra bem", "Desistir e não se candidatar", "Pagar mais para saltar a verificação", "Pedir a política escrita e perguntar se pode juntar provas de reabilitação"], answer: 3, why: "Perguntar pela política e oferecer provas ajuda a ter uma análise justa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Preparar um dossiê de arrendamento",
          minutes: 5,
          goal: "Preparar um dossiê de arrendamento que responde às preocupações de um senhorio antes de ele perguntar.",
          text: [
            "Um senhorio quer saber três coisas: se vai pagar a tempo, se vai cuidar da casa e se vai dar-se bem com os vizinhos. Um dossiê de arrendamento responde às três numa só pasta.",
            "Inclua: um documento de identificação com fotografia; provas de rendimento, como recibos de vencimento, uma carta de oferta de emprego ou uma carta de apoios; referências de um empregador, gestor de caso, funcionário de um programa ou líder religioso; certificados dos programas que terminou; e uma carta curta sobre o seu registo, que diga o que aconteceu, o que fez desde então e porque vai ser um bom inquilino.",
            "Cuidado com burlas de arrendamento. Nunca envie dinheiro por transferência, cartão-presente ou aplicação de pagamento antes de ver a casa pessoalmente e de assinar um contrato. Tenha cuidado com qualquer negócio que pareça barato demais ou que o apresse.",
            "Saiba quanto pode pagar. Muitos programas usam uma regra prática: a renda deve ser cerca de um terço do seu rendimento ou menos. Pergunte por todos os custos para entrar: caução, primeiro mês e taxas de candidatura."
          ],
          steps: ["Arranje uma pasta e faça cópias da sua identificação e das provas de rendimento.", "Peça cartas de referência a duas ou três pessoas.", "Junte os certificados dos programas que terminou.", "Escreva uma carta curta sobre o seu registo, que termine com porque vai ser um bom inquilino.", "Antes de pagar qualquer coisa, veja a casa pessoalmente e receba um contrato escrito."],
          words: [["Dossiê de arrendamento", "uma pasta com documentos que mostra a um senhorio que é um bom inquilino."], ["Referência", "uma pessoa que pode falar bem de você."], ["Caução", "dinheiro que paga antes de entrar e que o senhorio guarda para o caso de haver estragos."], ["Contrato de arrendamento", "o acordo de aluguer por escrito."]],
          slides: [
            { title: "O que preocupa um senhorio", bullets: ["Vai pagar a tempo?", "Vai cuidar da casa?", "Vai dar-se bem com os vizinhos?"] },
            { title: "O seu dossiê de arrendamento", bullets: ["Identificação com fotografia e provas de rendimento", "Referências e certificados de programas", "Uma carta curta sobre o seu registo"] },
            { title: "Sinais de burla de arrendamento", bullets: ["Pagar antes de ver a casa", "Só por transferência, cartão-presente ou aplicação", "Barato demais, rápido demais"] },
            { title: "Conheça os seus números", bullets: ["Renda de cerca de um terço do rendimento ou menos", "Pergunte pela caução, o primeiro mês e as taxas"] }
          ],
          tryIt: "Comece o seu dossiê de arrendamento. Faça uma lista dos documentos que tem e dos que ainda precisa. Escreva o primeiro rascunho da sua carta curta: uma frase sobre o que aconteceu, duas sobre o que fez desde então e uma sobre porque vai ser um bom inquilino.",
          youCanNow: "preparar um dossiê de arrendamento que mostra a um senhorio que vai pagar, cuidar da casa e ser um bom vizinho, e reconhecer burlas de arrendamento.",
          quickCheck: [
            { objective: "O3", q: "O que deve ir num dossiê de arrendamento?", options: ["Provas de rendimento e cartas de referência", "O seu processo completo", "A palavra-passe do seu banco", "Uma cópia do seu cartão da Segurança Social para qualquer pessoa"], answer: 0, why: "As provas de rendimento e as referências respondem às principais preocupações de um senhorio." },
            { objective: "O3", q: "Um senhorio quer a caução por transferência antes de você ver o apartamento. O que faria?", options: ["Enviar depressa antes que outra pessoa o faça", "Enviar metade", "Recusar e procurar outra casa", "Enviar por cartão-presente"], answer: 2, why: "Pedir pagamento antes de ver a casa é um sinal de alerta de burla." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encontrar um lugar para viver",
        questions: [
          { objective: "O1", q: "Acabou de chegar a casa e precisa de ajuda com habitação esta noite. Qual é um bom primeiro passo?", options: ["Esperar um mês", "Ligar para o 211 ou ir a 211.org", "Assinar qualquer contrato que vê na internet", "Enviar uma caução por cartão-presente"], answer: 1, why: "O 211 liga-o a ajuda local para habitação e outras necessidades." },
          { objective: "O2", q: "Quem gere a habitação pública e os Housing Choice Vouchers na sua zona?", options: ["A Public Housing Agency local", "Os correios", "O seu banco", "O serviço de viação (DMV)"], answer: 0, why: "A sua Public Housing Agency local gere estes programas e as suas listas de espera." },
          { objective: "O2", q: "Antes de o recusar por causa de um registo criminal, uma agência de habitação pública tem de:", options: ["Cobrar-lhe a verificação", "Publicá-lo na internet", "Avisá-lo e dar-lhe uma cópia do registo e a oportunidade de o contestar", "Ligar à sua família"], answer: 2, why: "As regras exigem aviso, uma cópia do registo e a oportunidade de o contestar." },
          { objective: "O2", q: "Na Califórnia, o que é que um senhorio NÃO pode usar contra você?", options: ["O seu rendimento", "As suas referências", "O seu historial de arrendamento", "Um registo selado"], answer: 3, why: "A Califórnia não deixa os senhorios usar registos selados ou apagados, detenções sem condenação nem registos de menor." },
          { objective: "O3", q: "Um senhorio pede-lhe a caução em cartão-presente antes de ver o apartamento. O que faz?", options: ["Paga depressa para não o perder", "Paga metade", "Recusa; é um sinal de alerta de burla", "Envia a palavra-passe do seu banco"], answer: 2, why: "Pagar antes de ver a casa, com cartões-presente, é uma burla de arrendamento clássica." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar trabalho de segunda oportunidade",
      lessons: [
        {
          objectives: ["O4"],
          title: "American Job Centers e programas de emprego para a reintegração",
          minutes: 5,
          goal: "Encontrar o American Job Center mais perto e um programa de emprego de reintegração, e saber o que lhes perguntar.",
          text: [
            "Os American Job Centers são centros públicos de emprego em todo o país. Ajudam a procurar trabalho, a fazer o currículo, com formação e, às vezes, com formação paga ou ajuda para roupa e ferramentas de trabalho. Pode encontrar o mais perto no CareerOneStop (careeronestop.org), um site do US Department of Labor (o Departamento do Trabalho dos EUA), ou ligando para o 211.",
            "O Department of Labor também paga programas de emprego de reintegração para adultos e jovens que estiveram presos. Organizações de reintegração, faculdades comunitárias e alguns sindicatos também têm formação profissional e aprendizagens.",
            "Quando for lá, pergunte: Que formação é gratuita para mim? Trabalham com empregadores que contratam pessoas com registo criminal? Podem ajudar-me com uma carta de caução ou com os papéis do Work Opportunity Tax Credit? Podem ajudar com roupa de trabalho, ferramentas ou um passe de autocarro?"
          ],
          steps: ["Vá a careeronestop.org e procure um American Job Center perto de você, ou ligue para o 211.", "Pergunte a um programa de reintegração com que programas de emprego trabalha.", "Leve a sua identificação, o currículo que tiver e os certificados.", "Faça as quatro perguntas desta lição e escreva as respostas.", "Marque uma data para a próxima visita."],
          words: [["American Job Center", "um centro público e gratuito que ajuda as pessoas a encontrar trabalho e formação."], ["CareerOneStop", "um site do Departamento do Trabalho dos EUA para empregos, formação e encontrar centros de emprego."], ["Aprendizagem", "um trabalho pago em que aprende uma profissão enquanto trabalha."]],
          slides: [
            { title: "American Job Centers", bullets: ["Centros públicos de emprego em todo o país", "Procura de trabalho, currículos, formação", "Encontre um em careeronestop.org ou ligue para o 211"] },
            { title: "Programas de emprego de reintegração", bullets: ["Programas de reintegração do Department of Labor", "Organizações de reintegração e faculdades", "Sindicatos e aprendizagens"] },
            { title: "Pergunte-lhes", bullets: ["Que formação é gratuita para mim?", "Que empregadores contratam pessoas com registo?", "Ajudam com os papéis da caução ou do crédito fiscal?", "Ajudam com roupa, ferramentas ou um passe de autocarro?"] }
          ],
          sources: [
            { name: "CareerOneStop: Encontrar American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Departamento do Trabalho dos EUA: Emprego na reintegração", url: "https://www.dol.gov/agencies/eta/reentry" }
          ],
          tryIt: "Encontre o American Job Center mais perto de você. Escreva a morada, o número de telefone e o horário, e as quatro perguntas que vai fazer na primeira visita.",
          youCanNow: "encontrar um American Job Center e um programa de emprego de reintegração e pedir-lhes a ajuda de que precisa.",
          quickCheck: [
            { objective: "O4", q: "O que oferece um American Job Center?", options: ["Só empregos pagos no próprio centro", "Ajuda gratuita para procurar trabalho, fazer currículos e ter formação", "Vales de habitação", "Empréstimos para carros"], answer: 1, why: "Os American Job Centers dão ajuda gratuita na procura de trabalho, no currículo e na formação." },
            { objective: "O4", q: "Está num centro de emprego pela primeira vez. Que pergunta faria?", options: ["Podem apagar o meu registo?", "Quanto cobram?", "Posso não fazer a candidatura?", "Que empregadores daqui contratam pessoas com registo?"], answer: 3, why: "Os funcionários dos centros de emprego muitas vezes conhecem empregadores locais de segunda oportunidade." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Empregadores de segunda oportunidade, WOTC e caução federal",
          minutes: 6,
          goal: "Explicar a um empregador como o Work Opportunity Tax Credit e o Federal Bonding Program o podem ajudar a contratá-lo.",
          text: [
            "Um empregador de segunda oportunidade é uma empresa aberta a contratar pessoas com registo criminal. Procure-os através dos centros de emprego, dos programas de reintegração, das agências de trabalho temporário que trabalham com a reintegração, dos sindicatos e dos anúncios de emprego que dizem \"fair chance\" ou \"second chance\" (oportunidade justa ou segunda oportunidade).",
            "O Work Opportunity Tax Credit (WOTC) é um crédito fiscal federal para os empregadores, não é dinheiro pago a você. Um dos grupos que abrange são os ex-condenados qualificados: pessoas contratadas até um ano depois de uma condenação por crime grave ou de sair da prisão. O empregador e você preenchem o formulário 8850 do IRS (o fisco dos EUA) no dia da oferta de emprego ou antes, e o empregador envia-o ao estado até 28 dias depois de você começar. A página do IRS dizia que o crédito abrangia pessoas que começaram a trabalhar até 31 de dezembro de 2025. Veja em irs.gov se foi renovado antes de falar nele.",
            "O Federal Bonding Program dá aos empregadores uma caução de fidelidade gratuita, um tipo de seguro contra roubo por um trabalhador, durante os primeiros seis meses do emprego. Cada caução cobre até $5,000 sem franquia, e você não tem formulários para preencher. As pessoas com registo criminal são um dos grupos que o programa serve. O coordenador de cauções do seu estado, que aparece em bonds4jobs.com, trata disso.",
            "Muitos empregadores nunca ouviram falar destes programas. Falar deles mostra que você fez o trabalho de casa e diminui o risco para o empregador."
          ],
          steps: ["Faça uma lista de empregadores de segunda oportunidade a partir dos centros de emprego, programas de reintegração e anúncios.", "Veja em irs.gov se o WOTC está em vigor agora.", "Encontre o coordenador de cauções do seu estado em bonds4jobs.com.", "Pratique uma apresentação de duas frases sobre o WOTC e a caução.", "Leve o formulário 8850 e a informação sobre a caução às entrevistas."],
          words: [["Empregador de segunda oportunidade", "uma empresa aberta a contratar pessoas com registo criminal."], ["Work Opportunity Tax Credit (WOTC)", "um crédito fiscal federal para empregadores que contratam pessoas de certos grupos."], ["Caução de fidelidade", "um seguro que protege um empregador contra perdas por roubo de um trabalhador."], ["Formulário 8850", "o formulário do IRS usado para começar o processo do WOTC."]],
          slides: [
            { title: "Empregadores de segunda oportunidade", bullets: ["Abertos a contratar pessoas com registo", "Encontre-os em centros de emprego e programas de reintegração", "Procure \"fair chance\" ou \"second chance\" nos anúncios"] },
            { title: "Work Opportunity Tax Credit", bullets: ["Um crédito fiscal para o empregador, não um pagamento a você", "Abrange quem é contratado até um ano após a condenação ou a saída", "Formulário 8850 até ao dia da oferta; veja irs.gov"] },
            { title: "Federal Bonding Program", bullets: ["Caução gratuita para os primeiros seis meses", "Até $5,000, sem franquia", "Tratada pelo coordenador de cauções do seu estado"] },
            { title: "Porque falar disto ao empregador", bullets: ["Muitos nunca ouviram falar", "Diminui o risco para eles", "Mostra que fez o trabalho de casa"] }
          ],
          sources: [
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "Departamento do Trabalho dos EUA: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" },
            { name: "Federal Bonding Program: Quem somos", url: "https://bonds4jobs.com/about-us" }
          ],
          tryIt: "Escreva a sua apresentação de duas frases para o empregador. Por exemplo: Se me contratar, pode ter direito ao Work Opportunity Tax Credit. Também posso vir com uma caução gratuita do Federal Bonding Program que cobre os meus primeiros seis meses. Depois encontre o coordenador de cauções do seu estado em bonds4jobs.com.",
          youCanNow: "encontrar empregadores de segunda oportunidade e explicar o WOTC e a caução federal a um empregador com palavras simples.",
          quickCheck: [
            { objective: "O5", q: "Quem recebe o Work Opportunity Tax Credit?", options: ["O trabalhador", "O serviço da liberdade condicional", "O empregador", "O centro de emprego"], answer: 2, why: "O WOTC é um crédito fiscal que o empregador pode pedir por contratá-lo." },
            { objective: "O5", q: "Quer falar do WOTC a um empregador numa entrevista. O que faria primeiro?", options: ["Ver em irs.gov se está em vigor agora", "Prometer-lhe um valor fixo em dólares", "Pedir a uma IA que preencha o formulário 8850 com os seus dados", "Não falar disso porque os empregadores nunca se importam"], answer: 0, why: "As regras do WOTC podem mudar, por isso vê irs.gov antes de falar nele." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Candidatar-se e responder a perguntas sobre o seu registo",
          minutes: 6,
          goal: "Candidatar-se a um emprego de segunda oportunidade e responder com confiança a perguntas sobre o seu registo.",
          text: [
            "Candidate-se a vários empregos todas as semanas. Tenha uma lista simples com o empregador, o trabalho, a data em que se candidatou e o próximo passo. Se não tiver resposta, volte a contactar depois de cerca de uma semana.",
            "Muitos estados e cidades têm leis \"fair chance\" ou \"ban the box\" que adiam as perguntas sobre o registo para mais tarde no processo de contratação. Conheça a regra da sua zona. Quando a pergunta chegar, seja honesto. Mentir sobre o registo é uma razão comum para perder o trabalho mais tarde.",
            "Responda em três partes curtas: o que aconteceu, numa frase e sem desculpas; o que fez desde então, como programas, trabalho, estudos e manter-se no bom caminho; e porque está pronto para este trabalho. Depois volte a falar das suas habilidades. Pratique em voz alta até se sentir calmo.",
            "Leve provas: certificados, uma carta de referência e a informação do WOTC e da caução. Um assistente de IA pode ajudá-lo a praticar perguntas de entrevista, mas nunca escreva nele os seus números de processo nem outros dados privados."
          ],
          steps: ["Candidate-se a vários empregos todas as semanas e registe-os numa lista.", "Conheça a regra \"fair chance\" do seu estado ou cidade.", "Escreva a sua resposta em três partes sobre o seu registo.", "Pratique-a em voz alta com uma pessoa ou um assistente de IA, sem dados privados.", "Leve certificados, referências e a informação do WOTC e da caução à entrevista."],
          words: [["Voltar a contactar", "falar outra vez com um empregador para saber da sua candidatura."], ["Lei \"fair chance\"", "uma lei que limita quando os empregadores podem perguntar sobre o registo criminal."], ["Carta de referência", "uma carta de alguém que pode falar bem do seu trabalho ou do seu carácter."]],
          slides: [
            { title: "Candidate-se com regularidade", bullets: ["Várias candidaturas todas as semanas", "Registe o empregador, o trabalho, a data e o próximo passo", "Volte a contactar depois de cerca de uma semana"] },
            { title: "Quando chega a pergunta sobre o registo", bullets: ["Conheça a regra \"fair chance\" da sua zona", "Seja honesto: mentir pode custar o trabalho mais tarde"] },
            { title: "A sua resposta em três partes", bullets: ["O que aconteceu: uma frase, sem desculpas", "O que fez desde então", "Porque está pronto para este trabalho"] },
            { title: "Leve provas", bullets: ["Certificados e uma carta de referência", "Informação do WOTC e da caução", "Pratique com IA, mas sem dados privados"] }
          ],
          tryIt: "Tarefa final: faça o seu plano de uma página para casa e emprego com duas opções de habitação, a lista do seu dossiê de arrendamento, o American Job Center mais perto, três empregadores de segunda oportunidade ou pistas de emprego, e a sua apresentação de duas frases sobre o WOTC e a caução. Depois diga uma vez em voz alta a sua resposta em três partes sobre o seu registo.",
          youCanNow: "candidatar-se a empregos de segunda oportunidade, acompanhar as suas candidaturas e responder a perguntas sobre o seu registo com honestidade e calma.",
          quickCheck: [
            { objective: "O6", q: "Quais são as três partes de uma boa resposta sobre o seu registo?", options: ["O número do processo, a pena e a data de saída", "O que aconteceu, o que fez desde então e porque está pronto", "De quem foi a culpa, como foi injusto e há quanto tempo foi", "Nada, porque não deve responder"], answer: 1, why: "Uma resposta curta e honesta em três partes mostra crescimento e que está pronto." },
            { objective: "O6", q: "Quer que uma IA o ajude a praticar respostas de entrevista. O que faria?", options: ["Escrever os números do processo para ela conhecer a sua história", "Colar nela o seu registo completo", "Usar palavras gerais e deixar de fora os números do processo", "Pedir-lhe que invente um registo limpo"], answer: 2, why: "Pode praticar com IA sem partilhar detalhes privados do processo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Encontrar trabalho de segunda oportunidade",
        questions: [
          { objective: "O4", q: "Onde pode encontrar o American Job Center mais perto?", options: ["Num centro comercial", "Com o seu senhorio", "No CareerOneStop (careeronestop.org) ou no 211", "Numa SMS de um desconhecido"], answer: 2, why: "O CareerOneStop, um site do Departamento do Trabalho, e o 211 podem indicar-lhe um centro de emprego." },
          { objective: "O5", q: "Quem recebe o Work Opportunity Tax Credit?", options: ["O empregador", "Quem procura emprego, em dinheiro", "O serviço da liberdade condicional", "O senhorio"], answer: 0, why: "O WOTC é um crédito fiscal para empregadores que contratam pessoas de certos grupos." },
          { objective: "O5", q: "O que dá o Federal Bonding Program a um empregador?", options: ["Um carro grátis", "Um empréstimo", "Uma conta de impostos", "Uma caução gratuita para os primeiros seis meses do emprego"], answer: 3, why: "O programa dá uma caução de fidelidade gratuita que cobre os primeiros seis meses." },
          { objective: "O6", q: "Um entrevistador pergunta sobre o seu registo. Qual é a melhor forma de responder?", options: ["Negar", "Ser honesto: o que aconteceu, o que fez desde então, porque está pronto", "Zangar-se", "Sair da entrevista"], answer: 1, why: "Uma resposta curta e honesta, centrada na mudança e em estar pronto, cria confiança." },
          { objective: "O6", q: "O que NUNCA deve escrever num assistente de IA quando pratica para entrevistas?", options: ["\"Faça-me uma pergunta comum de entrevista\"", "\"Faça a minha resposta mais curta\"", "Os seus números de processo", "\"Dê-me a sua opinião\""], answer: 2, why: "Os números de processo e outros dados privados devem ficar fora das ferramentas de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Encontrar Casa e Empregos de Segunda Oportunidade",
    questions: [
      { objective: "O1", q: "O que é o 211?", options: ["Um serviço gratuito e confidencial que o liga a ajuda local", "Uma linha da polícia", "Um banco", "Um site de anúncios de emprego"], answer: 0, why: "O 211 liga as pessoas a ajuda local para habitação, comida e outras necessidades." },
      { objective: "O1", q: "Habitação de transição é:", options: ["Um hotel para turistas", "Habitação por pouco tempo, com apoio, muitas vezes para pessoas que voltam da prisão", "Um armazém para guardar coisas", "Um carro"], answer: 1, why: "A habitação de transição é um passo por pouco tempo, com apoio." },
      { objective: "O1", q: "Está em liberdade condicional e encontrou um quarto para alugar. O que deve fazer antes de assinar?", options: ["Assinar logo", "Guardar segredo", "Confirmar que o seu agente aprova a morada", "Pagar em dinheiro a um desconhecido"], answer: 2, why: "A liberdade condicional ou a pena suspensa podem exigir que o seu agente aprove onde vive." },
      { objective: "O1", q: "As listas de espera da habitação pública podem ser longas. O que é inteligente fazer?", options: ["Nunca se candidatar", "Candidatar-se só quando já não tiver casa", "Candidatar-se uma vez e mudar de número de telefone", "Candidatar-se cedo e manter os contactos atualizados"], answer: 3, why: "Entrar cedo nas listas e poder ser contactado mantém o seu lugar." },
      { objective: "O2", q: "Qual destas é uma recusa obrigatória na habitação pública federal?", options: ["Registo de agressor sexual para toda a vida", "Qualquer multa de trânsito", "Estar desempregado", "Ter filhos"], answer: 0, why: "As regras federais obrigam a recusar quem tem de estar registado como agressor sexual para toda a vida." },
      { objective: "O2", q: "Para a maioria dos outros registos, quem decide sobre uma candidatura à habitação pública?", options: ["O FBI", "A Public Housing Agency local, com a sua própria política", "Os seus vizinhos", "O candidato"], answer: 1, why: "Fora das recusas obrigatórias, a agência de habitação decide com a sua própria política escrita." },
      { objective: "O2", q: "Uma agência de habitação pública pode cobrar-lhe a verificação do registo criminal?", options: ["Sim, qualquer valor", "Só aos fins de semana", "Não, não pode cobrar", "Só em dinheiro"], answer: 2, why: "A regra diz que a agência não pode cobrar ao candidato a verificação do registo." },
      { objective: "O2", q: "Ter registo criminal é uma classe protegida pelo Fair Housing Act federal?", options: ["Sim, sempre", "Só para os vales", "Só no verão", "Não; as leis do estado e da cidade podem dar mais proteção"], answer: 3, why: "O Fair Housing Act federal não inclui o registo criminal como classe protegida." },
      { objective: "O2", q: "Na Califórnia, um senhorio quer recusar toda a gente com qualquer registo. Isto é:", options: ["Proibido: não é permitido recusar toda a gente", "Exigido por lei", "Uma boa política", "Permitido só para apartamentos"], answer: 0, why: "A Califórnia não permite recusar toda a gente com registo criminal." },
      { objective: "O3", q: "O que deve ir num dossiê de arrendamento?", options: ["O número do seu cartão da Segurança Social escrito na capa", "Provas de rendimento e cartas de referência", "A palavra-passe do seu banco", "Nada"], answer: 1, why: "As provas de rendimento e as referências respondem às principais preocupações de um senhorio." },
      { objective: "O3", q: "Uma regra prática que muitos programas usam para a renda é:", options: ["Todo o seu rendimento", "O dobro do seu rendimento", "Cerca de um terço do seu rendimento ou menos", "A renda não interessa"], answer: 2, why: "Uma renda perto de um terço do rendimento ou menos deixa dinheiro para outras necessidades." },
      { objective: "O3", q: "Qual é um sinal de burla de arrendamento?", options: ["Vê a casa pessoalmente primeiro", "Recebe um contrato escrito", "O senhorio dá um recibo", "Querem pagamento por transferência antes de ver a casa"], answer: 3, why: "Pagar por transferência ou cartão-presente antes de ver a casa é uma burla comum." },
      { objective: "O4", q: "O que oferece um American Job Center?", options: ["Ajuda gratuita para procurar trabalho, fazer currículos e ter formação", "Carros grátis", "Empréstimos para férias", "Escrituras de casas"], answer: 0, why: "Os American Job Centers são centros públicos que ajudam com emprego e formação." },
      { objective: "O4", q: "Que pergunta é boa para fazer num centro de emprego?", options: ["Podem mentir aos empregadores por mim?", "Que empregadores daqui contratam pessoas com registo?", "Posso faltar ao trabalho?", "Podem pagar a minha renda para sempre?"], answer: 1, why: "Os centros de emprego muitas vezes conhecem empregadores locais de segunda oportunidade." },
      { objective: "O4", q: "Um empregador de segunda oportunidade é:", options: ["Um empregador que só contrata uma vez", "Uma prisão do governo", "Uma empresa aberta a contratar pessoas com registo", "Um trabalho temporário que nunca paga"], answer: 2, why: "Os empregadores de segunda oportunidade estão abertos a contratar pessoas com registo criminal." },
      { objective: "O5", q: "Que formulário do IRS começa o processo do WOTC?", options: ["Formulário 1040", "Formulário W-2", "Formulário 1099", "Formulário 8850"], answer: 3, why: "O formulário 8850 é preenchido no dia da oferta de emprego ou antes." },
      { objective: "O5", q: "Antes de falar do WOTC a um empregador, você deve:", options: ["Ver em irs.gov se está em vigor agora", "Prometer-lhe um certo valor em dólares", "Fazer os impostos dele", "Não falar disso"], answer: 0, why: "O crédito tem uma data de fim e tem de ser renovado por lei, por isso confirme a situação atual." },
      { objective: "O5", q: "Quanto custa ao empregador uma caução do Federal Bonding Program?", options: ["$500", "Nada; é gratuita", "Metade do seu salário", "$5,000"], answer: 1, why: "A caução é gratuita para o empregador e para quem procura emprego; $5,000 é o limite da cobertura." },
      { objective: "O5", q: "Quem trata de uma caução federal no seu estado?", options: ["O seu senhorio", "O banco", "O coordenador de cauções do seu estado", "O seu médico"], answer: 2, why: "Os coordenadores de cauções dos estados, que aparecem em bonds4jobs.com, tratam das cauções." },
      { objective: "O6", q: "A melhor forma de responder a uma pergunta sobre o seu registo é:", options: ["Dizer que nunca aconteceu", "Contar a história toda da sua vida", "Mudar de assunto", "Dizer em pouco tempo o que aconteceu, o que fez desde então e porque está pronto"], answer: 3, why: "Uma resposta curta e honesta em três partes cria confiança e volta às suas habilidades." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 5, 7, 9, 11, 12, 13, 17, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Opções de habitação", objective: "O1", notYet: "Menos de duas opções, ou faltam os contactos.", meets: "Duas opções de habitação com contactos e o que levar.", exceeds: "Também indica o custo e as regras, e que a morada foi confirmada com o agente da liberdade condicional, se for preciso." },
      { name: "Lista do dossiê de arrendamento", objective: "O3", notYet: "Não há lista.", meets: "Uma lista dos documentos que tem e dos que ainda precisa.", exceeds: "Inclui um primeiro rascunho da carta curta sobre o que fez desde então." },
      { name: "Ajuda e pistas de emprego", objective: "O4", notYet: "Não há centro de emprego, ou há menos de três pistas.", meets: "O American Job Center mais perto e três empregadores de segunda oportunidade ou pistas de emprego.", exceeds: "Inclui as perguntas que vai fazer na primeira visita." },
      { name: "Apresentação ao empregador", objective: "O5", notYet: "Não há apresentação, ou promete um valor fixo em dólares.", meets: "Uma apresentação de duas frases sobre o WOTC e o Federal Bonding Program.", exceeds: "Também diz o nome do coordenador de cauções do estado e indica que o WOTC foi verificado em irs.gov." },
      { name: "Resposta sobre o registo", objective: "O6", notYet: "Não foi praticada, ou é longa, culpa outros ou não é verdade.", meets: "Dita uma vez em voz alta: o que aconteceu, o que fez desde então, porque está pronto.", exceeds: "Curta, calma e praticada mais de uma vez." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que passam a ter habitação estável ou de transição em 90 dias (inquérito de seguimento)",
      "Alunos que visitam um American Job Center ou conseguem um emprego em 90 dias",
      "Empregadores que usam o WOTC ou uma caução federal para contratar um aluno, segundo os parceiros"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone para ligar para o 211 e para os centros de emprego, ou um computador com internet",
      "Papel e caneta, ou uma pasta, para o plano e o dossiê de arrendamento",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Tenha prontos antes da sessão o número do 211 da sua zona, o American Job Center mais perto e o coordenador de cauções do estado.",
      "Pratiquem a resposta em três partes sobre o registo em pares; isso dá confiança depressa.",
      "As regras variam por estado e cidade; envie as questões legais para a assistência jurídica ou um conselheiro de reintegração.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que confirmem primeiro qualquer morada nova com o seu agente.",
      "Avalie o plano com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
