"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-sales-growth.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US rules (CAN-SPAM, FTC, TCPA, FCC); US names are kept and explained.

const CAN_SPAM = { name: "FTC (Comissão Federal de Comércio dos EUA): Lei CAN-SPAM, guia de cumprimento para empresas", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "IA para Vendas e Crescimento do Negócio",
  skills: "Descrever o seu cliente ideal, Escrever uma oferta clara, Manter uma lista simples de clientes, Escrever mensagens de seguimento, Ler os números de vendas, Planear um esforço de crescimento de 30 dias",
  outcome: "usar a IA para planear e fazer uma campanha de vendas de 30 dias para o seu negócio: descrever o seu cliente ideal, escrever uma oferta clara, criar uma lista simples de clientes, escrever uma sequência de mensagens de seguimento que cumpre as regras do email e acompanhar os resultados numa folha de cálculo.",
  about: [
    "Este curso é para donos de pequenos negócios que querem vender mais aos clientes que já têm e aos que estão por perto: lojas, restaurantes, salões, serviços de limpeza e de reparação, serviços de catering e carrinhas de comida. Muitos dos nossos alunos são donos de negócios de minorias que crescem sem um grande orçamento de publicidade.",
    "Vai usar um assistente de IA gratuito para pensar em quem compra de você, preparar uma oferta que faça sentido, dar seguimento aos clientes que aceitaram receber notícias suas e ler os seus próprios números para ver o que funciona. A IA ajuda você a escrever e a pensar; quem vende é o seu juízo e a sua relação com os clientes.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As tarefas juntam-se num plano de vendas de 30 dias."
  ],
  finalTask: "Escreva um plano de vendas de 30 dias numa página: o seu cliente ideal em três frases, uma oferta com um preço claro e uma data de fim, onde fica a sua lista de clientes e como as pessoas entraram nela, uma sequência de três mensagens de seguimento (com a sua morada e uma linha para cancelar a subscrição em cada email de marketing) e uma tabela com os números que vai verificar todas as semanas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios que querem vender mais aos clientes atuais e aos que estão por perto: lojas, restaurantes, salões, serviços de limpeza e de reparação, serviços de catering e carrinhas de comida. Muitos são donos de minorias que crescem sem um grande orçamento de publicidade.",
    startingPoint: "Conhecem bem os seus clientes habituais e os seus produtos. Usam pouco ofertas escritas, listas de clientes com autorização, seguimento por email ou SMS, registo de vendas ou IA para planear.",
    gap: "Sem um plano, as campanhas de vendas são feitas ao acaso, os descontos podem acabar com o lucro e as mensagens de marketing podem violar as regras de email e de SMS. Os donos precisam de um plano simples de 30 dias, feito com a ajuda da IA, que chegue aos clientes certos, faça uma oferta com lucro, dê seguimento dentro da lei e registe o que funciona.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um smartphone ou um computador; as folhas de cálculo são mais fáceis num computador",
      "Tempo: lições de cerca de 5 minutos que cabem num dia de trabalho cheio",
      "Regras: a lei CAN-SPAM para email de marketing e regras federais separadas para SMS de marketing",
      "Privacidade: as listas de clientes ficam protegidas e fora das ferramentas de IA"
    ],
    prerequisites: "O curso \"Introdução à IA para Pequenos Negócios\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o que observa nos seus melhores clientes", action: "escrever com a ajuda da IA uma descrição curta e concreta do seu cliente ideal", standard: "em três frases que digam quem são, do que precisam e porque escolhem você" },
    { id: "O2", condition: "Com ideias de ofertas dadas pela IA", action: "criar uma oferta clara e honesta", standard: "com o quê, o preço, uma razão para agir e a data de fim, e o lucro calculado no papel" },
    { id: "O3", condition: "Usando uma folha de cálculo", action: "criar uma lista de clientes que registe a autorização para os contactar", standard: "com uma coluna para a autorização e a data, uma forma de inscrição e nenhum dado real de clientes na IA" },
    { id: "O4", condition: "Com a lei CAN-SPAM e as regras de SMS", action: "escrever com a ajuda da IA uma sequência de três mensagens de seguimento", standard: "com morada postal e linha para cancelar a subscrição em cada email de marketing, e SMS só com autorização clara" },
    { id: "O5", condition: "Com quatro semanas de números de vendas", action: "registar os seus números de vendas numa tabela e verificar os padrões que a IA aponta", standard: "com fórmulas para os totais, sem nomes de clientes e com pelo menos um padrão confirmado na folha" },
    { id: "O6", condition: "Com o seu cliente, a sua oferta, a sua lista, as mensagens de seguimento e o registo", action: "escrever um plano de vendas de 30 dias numa página", standard: "ajustado às suas horas reais, com números para verificar todas as semanas e uma revisão no dia 30" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Quem compra e o que você oferece",
      lessons: [
        {
          objectives: ["O1"],
          title: "Descrever o seu cliente ideal",
          minutes: 5,
          goal: "Escrever uma descrição curta e concreta do cliente que mais quer ter.",
          text: [
            "Não consegue vender bem a toda a gente. Pense nos seus melhores clientes: os que voltam, gastam bem e trazem amigos. O que têm em comum?",
            "Escreva três frases: quem são, do que precisam e o que os faz escolher você. Exemplo para um restaurante da África Ocidental: \"Trabalhadores de escritório a menos de duas milhas que querem um almoço que encha por menos de $15. Andam ocupados e encomendam pelo telefone. Escolhem-nos pelas porções grandes e pela recolha rápida.\"",
            "A IA pode ajudar você a pensar: \"Isto é o que sei sobre os meus melhores clientes. Que perguntas devo fazer a mim mesmo para os descrever melhor?\" Use o que vê no seu negócio, não suposições sobre grupos de pessoas."
          ],
          steps: ["Pense nos seus cinco melhores clientes.", "Escreva o que têm em comum.", "Escreva três frases: quem são, do que precisam, porquê você.", "Peça à IA perguntas para a tornar mais precisa."],
          words: [["Cliente ideal", "o tipo de cliente que mais combina com o seu negócio."], ["Cliente habitual", "alguém que compra de você mais de uma vez."]],
          slides: [
            { title: "Não é toda a gente", bullets: ["Pense nos seus melhores clientes", "Quem volta, gasta bem e traz amigos?"] },
            { title: "Três frases", bullets: ["Quem são", "Do que precisam", "Porque escolhem você"] },
            { title: "Exemplo: restaurante de almoços", bullets: ["Trabalhadores de escritório a menos de duas milhas", "Querem um almoço que encha por menos de $15", "Escolhem-nos pelas porções grandes e pela recolha rápida"] }
          ],
          tryIt: "Escreva o seu cliente ideal em três frases. Peça a um assistente de IA cinco perguntas para a tornar mais precisa, responda-lhes e volte a escrever as suas três frases.",
          youCanNow: "descrever em três frases claras o cliente que mais quer ter.",
          quickCheck: [
            { objective: "O1", q: "De onde deve vir a descrição do seu cliente ideal?", options: ["Do que vê nos seus melhores clientes reais", "De uma suposição sobre toda a gente na cidade", "Do que a IA disser primeiro", "Do site do seu concorrente"], answer: 0, why: "Os seus melhores clientes reais mostram quem deve procurar." },
            { objective: "O1", q: "A sua descrição diz \"toda a gente que gosta de comida\". O que faria?", options: ["Mantê-la porque inclui mais pessoas", "Pedir à IA perguntas para a afinar e torná-la concreta", "Apagar a descrição", "Copiar a descrição de uma grande cadeia"], answer: 1, why: "Uma descrição concreta ajuda você a chegar às pessoas certas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever uma oferta que faça sentido",
          minutes: 5,
          goal: "Criar uma oferta clara e honesta com preço, razão para agir e data de fim.",
          text: [
            "Uma oferta é o que vende, a que preço e porque alguém deve comprar agora. As boas ofertas são simples: \"Menu de almoço: arroz, guisado e bebida, $13, dias úteis das 11 às 14, até 30 de junho.\"",
            "Peça à IA ideias e depois escolha você: \"Tenho um serviço móvel de limpeza de carros. O meu cliente ideal são pais ocupados. Dê-me cinco ideias de ofertas para a primavera que mantenham o meu lucro.\" Faça você mesmo as contas: um desconto que perde dinheiro em cada venda não é crescimento.",
            "Seja honesto. Diga o preço real, a data de fim real e todos os limites. Não chame \"promoção\" ao seu preço normal."
          ],
          steps: ["Peça à IA cinco ideias de ofertas para o seu cliente ideal.", "Escolha uma e calcule o seu custo e o seu lucro.", "Escreva-a com o quê, o preço, a razão para agir e a data de fim.", "Confirme que é honesta e clara."],
          words: [["Oferta", "o que vende, o preço e a razão para comprar agora."], ["Lucro", "o dinheiro que sobra depois de pagar os custos."], ["Margem", "a parte do preço que é lucro."]],
          slides: [
            { title: "Uma oferta clara tem", bullets: ["O que vende", "O preço", "Uma razão para agir e uma data de fim"] },
            { title: "A IA dá ideias, você escolhe", bullets: ["Peça cinco ideias para o seu cliente ideal", "Faça as contas: mantenha o lucro"] },
            { title: "Seja honesto", bullets: ["Preço real, data de fim real, limites reais", "Uma \"promoção\" tem de ser mais barata do que o preço normal"] }
          ],
          tryIt: "Peça à IA cinco ideias de ofertas para o seu cliente ideal. Escolha uma, calcule no papel o custo e o lucro e escreva a oferta numa frase com uma data de fim.",
          youCanNow: "escrever uma oferta clara e honesta que continua a dar lucro.",
          quickCheck: [
            { objective: "O2", q: "O que tem uma oferta clara?", options: ["Só um grande desconto", "Uma lista longa de produtos", "O quê, o preço, a razão para agir e a data de fim", "Uma promessa de que nunca acaba"], answer: 2, why: "Estas partes tornam a oferta fácil de entender e de aproveitar." },
            { objective: "O2", q: "A IA sugere metade do preço em tudo durante um mês. O que faria primeiro?", options: ["Publicá-la hoje", "Fazer 70% de desconto em vez disso", "Perguntar aos clientes se gostam", "Calcular no papel se continua a ter lucro"], answer: 3, why: "Uma oferta tem de deixar dinheiro depois dos custos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Começar uma lista simples de clientes",
          minutes: 5,
          goal: "Criar uma lista simples de clientes numa folha de cálculo, com autorização para os contactar.",
          text: [
            "A sua lista de clientes é a sua ferramenta de vendas mais valiosa. Pode ser uma folha de cálculo com colunas como Nome próprio, Contacto (email ou telefone), Aceitou mensagens (sim/não e data), Última visita, O que comprou e Notas.",
            "Ponha só pessoas que lhe deram os seus contactos e aceitaram receber notícias suas: uma folha de inscrição no balcão, um código QR que leva a um formulário ou uma caixa para marcar na sua ferramenta de marcações. Anote quando e como aceitaram.",
            "Mantenha a lista privada e segura: uma palavra-passe no ficheiro ou na conta, e partilhada só com os funcionários que precisam dela. Não cole a lista em ferramentas de IA. Se quer a ajuda da IA, descreva as colunas ou use linhas de exemplo inventadas."
          ],
          steps: ["Faça uma folha de cálculo com as colunas acima.", "Escolha uma forma de inscrição: folha no balcão, formulário com QR ou caixa na marcação.", "Anote quando e como cada pessoa aceitou.", "Proteja o ficheiro e mantenha-o fora das ferramentas de IA."],
          words: [["Lista de clientes", "um registo dos clientes que aceitaram receber notícias suas."], ["Aceitar (opt in)", "quando uma pessoa aceita receber as suas mensagens."], ["CRM", "gestão da relação com o cliente (em inglês, customer relationship management): um programa ou uma folha para acompanhar os clientes."]],
          slides: [
            { title: "A sua ferramenta de vendas mais valiosa", bullets: ["Uma folha de cálculo simples serve", "Nome, contacto, aceitou (data), última visita, notas"] },
            { title: "Primeiro a autorização", bullets: ["Inscrição no balcão, formulário com QR ou caixa na marcação", "Anote quando e como aceitaram"] },
            { title: "Mantenha-a segura", bullets: ["Palavra-passe no ficheiro ou na conta", "Partilhe só com os funcionários que precisam", "Nunca cole a lista em ferramentas de IA"] }
          ],
          tryIt: "Faça a sua folha de lista de clientes com as seis colunas. Acrescente três linhas de exemplo inventadas e depois escreva como os clientes reais se vão inscrever (folha no balcão, formulário com QR ou caixa na marcação).",
          youCanNow: "criar uma lista de clientes privada com o registo da autorização para os contactar.",
          quickCheck: [
            { objective: "O3", q: "Quem deve estar na sua lista de clientes?", options: ["Pessoas que aceitaram receber notícias suas", "Qualquer pessoa cujo número consiga encontrar", "Os clientes dos seus concorrentes", "Toda a gente de uma lista telefónica"], answer: 0, why: "Só entram na lista as pessoas que disseram sim a receber notícias suas." },
            { objective: "O3", q: "Quer que a IA ajude a desenhar a folha da sua lista de clientes. O que partilharia?", options: ["A sua lista real completa de clientes", "Os números de telefone dos clientes", "Os nomes das colunas ou linhas de exemplo inventadas", "A palavra-passe da folha"], answer: 2, why: "Os nomes das colunas ou linhas de exemplo dão ajuda sem partilhar dados reais de clientes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Quem compra e o que você oferece",
        questions: [
          { objective: "O1", q: "O que é um cliente ideal?", options: ["Qualquer pessoa com dinheiro", "O tipo de cliente que mais combina com o seu negócio", "Só as pessoas que se queixam", "Os clientes do seu concorrente"], answer: 1, why: "Descreve quem mais quer ter." },
          { objective: "O2", q: "Qual é uma oferta clara?", options: ["\"Grandes negócios!\"", "\"Coisas baratas\"", "\"Apareça um dia\"", "\"Menu de almoço: arroz, guisado e bebida, $13, dias úteis das 11 às 14, até 30 de junho\""], answer: 3, why: "Diz o quê, o preço, quando e a data de fim." },
          { objective: "O2", q: "A IA sugere um desconto de 60%. O que verifica primeiro?", options: ["Se continua a ter lucro", "Se parece emocionante", "Nada", "O tipo de letra"], answer: 0, why: "Um desconto que perde dinheiro não é crescimento." },
          { objective: "O3", q: "Quem deve estar na sua lista de clientes?", options: ["Qualquer pessoa cujo número encontre", "Os clientes dos concorrentes", "Pessoas que aceitaram receber notícias suas", "Números de telefone ao acaso"], answer: 2, why: "Primeiro a autorização." },
          { objective: "O3", q: "Quer a ajuda da IA para organizar a sua lista de clientes. O que partilha?", options: ["A lista completa com os números de telefone", "Os números dos cartões dos clientes", "Os nomes das colunas ou linhas de exemplo inventadas", "A palavra-passe do ficheiro"], answer: 2, why: "Os dados reais dos clientes ficam fora das ferramentas de IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dar seguimento e crescer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever mensagens de seguimento que cumprem as regras",
          minutes: 6,
          goal: "Escrever uma sequência de três mensagens de seguimento e fazer os emails de marketing cumprirem a lei CAN-SPAM.",
          text: [
            "A maior parte das vendas vem de dar seguimento. Uma sequência simples: (1) um obrigado depois da visita, (2) um lembrete ou uma dica uma semana depois, (3) a sua oferta com a data de fim. Peça à IA: \"Escreva três emails curtos de seguimento para o meu salão, no estilo da minha marca. Use [nome próprio].\"",
            "Nos Estados Unidos, os emails de marketing têm de cumprir a lei CAN-SPAM. O guia da FTC (Comissão Federal de Comércio) diz: use um remetente e um assunto honestos, deixe claro que é publicidade, inclua uma morada postal válida, dê uma forma clara de cancelar a subscrição e respeite os pedidos de cancelamento em 10 dias úteis.",
            "As SMS de marketing têm as suas próprias regras federais (a lei TCPA, aplicada pela FCC, a Comissão Federal de Comunicações) e, em geral, precisam da autorização clara do cliente. Antes de enviar SMS de marketing, verifique as regras em fcc.gov ou pergunte a um profissional, e use uma ferramenta de SMS que trate dos pedidos para sair."
          ],
          steps: ["Planeie três mensagens: obrigado, lembrete ou dica, oferta.", "Peça à IA rascunhos com espaços para [nome próprio].", "Acrescente a sua morada postal e uma linha para cancelar a subscrição nos emails de marketing.", "Respeite depressa os pedidos de cancelamento.", "Verifique as regras de SMS antes de enviar SMS de marketing."],
          words: [["Sequência de seguimento", "uma série planeada de mensagens enviadas depois da visita ou da inscrição de um cliente."], ["CAN-SPAM", "a lei dos EUA com regras para o email comercial."], ["Cancelar a subscrição", "uma forma de as pessoas deixarem de receber as suas mensagens."]],
          slides: [
            { title: "Uma sequência de três mensagens", bullets: ["1. Obrigado depois da visita", "2. Lembrete ou dica uma semana depois", "3. A sua oferta com uma data de fim"] },
            { title: "O básico da CAN-SPAM (FTC)", bullets: ["Remetente e assunto honestos; diga que é publicidade", "Uma morada postal válida", "Cancelamento claro, respeitado em 10 dias úteis"] },
            { title: "SMS de marketing", bullets: ["Regras federais separadas (TCPA, FCC)", "Primeiro obtenha autorização clara", "Veja fcc.gov ou pergunte a um profissional"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Peça à IA um rascunho da sua sequência de três mensagens de seguimento com [nome próprio]. Acrescente ao email da oferta a sua morada postal e uma linha para cancelar a subscrição.",
          youCanNow: "escrever uma sequência de seguimento e fazer os emails de marketing cumprirem o básico da CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "O que deve ter cada email de marketing nos EUA segundo a CAN-SPAM?", options: ["Um cupão", "Uma morada postal válida e uma forma de cancelar a subscrição", "Uma fotografia", "O nome completo do cliente"], answer: 1, why: "A CAN-SPAM exige uma morada postal e uma forma de cancelar a subscrição." },
            { objective: "O4", q: "Quer enviar SMS de marketing sobre a sua oferta. O que faria primeiro?", options: ["Enviar SMS a todos os contactos do telefone", "Enviar SMS tarde da noite", "Usar uma lista de números comprada", "Obter autorização clara e verificar as regras federais de SMS"], answer: 3, why: "As SMS de marketing têm as suas próprias regras federais e precisam de autorização clara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ler os seus números de vendas com a ajuda da IA",
          minutes: 5,
          goal: "Registar alguns números de vendas todas as semanas e usar a IA para ajudar a ver padrões.",
          text: [
            "Só precisa de alguns números: vendas por dia, número de clientes, venda média (vendas divididas pelos clientes), os produtos que mais vende e quantas pessoas usaram a sua oferta.",
            "Registe-os numa folha de cálculo por semana. Deixe a folha fazer as contas. Depois pode colar os totais semanais (sem nomes de clientes) num assistente de IA e perguntar: \"Aqui estão 6 semanas de números da minha padaria. Que padrões vê? O que devo verificar?\"",
            "Trate as ideias da IA como perguntas, não como respostas. Se disser \"os sábados são fracos\", confirme na sua própria folha e pense porquê: o tempo, um evento, uma mudança de funcionários."
          ],
          steps: ["Registe todas as semanas as vendas, os clientes, a venda média, os mais vendidos e o uso da oferta.", "Deixe as fórmulas fazer os totais.", "Cole os totais semanais (sem nomes) na IA e peça padrões.", "Confirme cada padrão na sua folha."],
          words: [["Venda média", "o total das vendas dividido pelo número de clientes."], ["Padrão", "algo que acontece muitas vezes nos seus números."]],
          slides: [
            { title: "Cinco números para registar", bullets: ["Vendas por dia e clientes", "Venda média", "Mais vendidos e uso da oferta"] },
            { title: "A IA como um segundo par de olhos", bullets: ["Cole os totais semanais, não os nomes", "Pergunte: \"Que padrões vê?\""] },
            { title: "Confirme antes de agir", bullets: ["As ideias da IA são perguntas", "Verifique a sua própria folha", "Pergunte porquê: tempo, eventos, funcionários"] }
          ],
          tryIt: "Faça uma tabela semanal com os cinco números. Preencha quatro semanas com números de exemplo ou reais e pergunte à IA que padrões vê. Confirme um deles na sua folha.",
          youCanNow: "registar os números de vendas mais importantes e usar a IA para ajudar a ver padrões que depois confirma.",
          quickCheck: [
            { objective: "O5", q: "Como calcula a sua venda média?", options: ["Vendas divididas pelo número de clientes", "Clientes divididos pelos dias", "Lucro vezes dois", "Número de produtos vendidos"], answer: 0, why: "A venda média é o total das vendas dividido pelo número de clientes." },
            { objective: "O5", q: "Quer que a IA veja a sua tabela semanal de vendas. O que faria primeiro?", options: ["Acrescentar os nomes dos clientes para ela saber mais", "Colá-la tal como está", "Tirar os nomes dos clientes antes de colar", "Acrescentar os números dos cartões dos clientes"], answer: 2, why: "Os nomes dos clientes ficam fora das ferramentas de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "O seu plano de vendas de 30 dias",
          minutes: 5,
          goal: "Juntar o seu cliente, a oferta, a lista, as mensagens de seguimento e o registo num plano de 30 dias.",
          text: [
            "Um plano transforma ideias em ação. Semana 1: crie a sua lista de clientes e a inscrição. Semana 2: lance a sua oferta e envie a mensagem de obrigado. Semana 3: envie o lembrete e publique a oferta. Semana 4: envie o último aviso antes da data de fim e depois reveja os seus números.",
            "Peça à IA para transformar as suas notas num calendário com tarefas para cada semana. Mantenha-o realista para as suas horas.",
            "No fim, compare os seus números com os do mês anterior. Mantenha o que funcionou, deixe o que não funcionou e planeie os 30 dias seguintes."
          ],
          steps: ["Junte o seu cliente ideal, a oferta, a lista, as mensagens de seguimento e a tabela de registo.", "Peça à IA um calendário de tarefas de quatro semanas.", "Ajuste as tarefas às suas horas reais.", "Reveja os resultados no dia 30."],
          words: [["Plano de vendas", "um plano escrito do que vai fazer para vender mais, e quando."], ["Revisão", "olhar para os resultados para decidir o que manter ou mudar."]],
          slides: [
            { title: "Quatro semanas", bullets: ["Semana 1: lista e inscrição", "Semana 2: lançar a oferta, enviar o obrigado", "Semana 3: lembrete; Semana 4: último aviso e revisão"] },
            { title: "A IA faz o calendário", bullets: ["Cole as suas notas", "Peça tarefas para cada semana", "Ajuste às suas horas"] },
            { title: "Dia 30", bullets: ["Compare com o mês anterior", "Mantenha o que funcionou", "Planeie os 30 dias seguintes"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de vendas de 30 dias numa página, com o cliente ideal, a oferta, a lista, a sequência de três mensagens e a tabela de registo. Peça à IA para o transformar num calendário de tarefas semanais.",
          youCanNow: "planear, fazer e rever uma campanha de vendas de 30 dias para o seu negócio.",
          quickCheck: [
            { objective: "O6", q: "Para que serve a Semana 1 do plano de 30 dias?", options: ["Enviar todas as mensagens de uma vez", "Criar a lista e a inscrição", "Terminar a oferta", "Comparar os resultados"], answer: 1, why: "A primeira semana cria a lista e a forma de as pessoas entrarem nela." },
            { objective: "O6", q: "O seu plano de 30 dias precisa de mais horas do que as que tem. O que faria?", options: ["Mantê-lo e trabalhar a noite toda", "Desistir do plano", "Pedir à IA para vender por você", "Reduzi-lo para caber nas suas horas reais"], answer: 3, why: "Um plano que cabe nas suas horas é um plano que consegue mesmo fazer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Dar seguimento e crescer",
        questions: [
          { objective: "O4", q: "O que deve estar em cada email de marketing nos EUA segundo a CAN-SPAM?", options: ["Uma morada postal válida e uma forma de cancelar a subscrição", "O número do cartão do cliente", "Um assunto falso", "Nenhum nome de remetente"], answer: 0, why: "A FTC indica as duas coisas como obrigatórias." },
          { objective: "O4", q: "Segundo o guia da FTC, em quanto tempo tem de respeitar um pedido de cancelamento?", options: ["Só se a pessoa telefonar", "Em um ano", "Nunca", "Em 10 dias úteis"], answer: 3, why: "A FTC diz em 10 dias úteis." },
          { objective: "O4", q: "Antes de enviar SMS de marketing deve:", options: ["Enviar SMS a todos os números que tem", "Obter autorização clara e verificar as regras federais de SMS", "Comprar uma lista", "Esconder o nome do seu negócio"], answer: 1, why: "As SMS de marketing têm regras federais separadas e precisam de autorização." },
          { objective: "O5", q: "Como calcula a venda média?", options: ["Vendas divididas pelo número de clientes", "Vendas vezes clientes", "Lucro menos a renda", "Clientes divididos pelos dias"], answer: 0, why: "Venda média = total das vendas / clientes." },
          { objective: "O5", q: "A IA diz que as suas terças-feiras são fracas. O que faz?", options: ["Fecha logo às terças-feiras", "Ignora os números", "Confirma nos seus próprios números e pensa porquê", "Pergunta a um concorrente"], answer: 2, why: "Os padrões da IA são perguntas para verificar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Vendas e Crescimento do Negócio",
    questions: [
      { objective: "O1", q: "A descrição do seu cliente ideal deve ser:", options: ["\"Toda a gente\"", "Concreta: quem são, do que precisam, porquê você", "Baseada em suposições sobre grupos", "Muito longa"], answer: 1, why: "Descrições concretas levam a ofertas melhores." },
      { objective: "O1", q: "De onde deve vir a descrição do seu cliente ideal?", options: ["Só da IA", "De estereótipos", "De um site qualquer", "Do que vê nos seus melhores clientes reais"], answer: 3, why: "Use o que observa de verdade, não suposições." },
      { objective: "O1", q: "Como pode a IA ajudar a descrever o seu cliente ideal?", options: ["Não pode ajudar", "Lendo a sua conta bancária", "Telefonando aos clientes", "Fazendo-lhe perguntas para a afinar"], answer: 3, why: "A IA pode sugerir perguntas para você pensar." },
      { objective: "O2", q: "Uma oferta clara tem:", options: ["Só uma imagem", "O quê, o preço, a razão para agir e a data de fim", "Nenhum preço", "Um código secreto"], answer: 1, why: "As quatro partes tornam-na clara." },
      { objective: "O2", q: "O que é o lucro?", options: ["Um desconto", "Todo o dinheiro que entra", "O dinheiro que sobra depois dos custos", "Um empréstimo"], answer: 2, why: "O lucro é o que entra menos os custos." },
      { objective: "O2", q: "Chamar \"promoção\" ao seu preço normal é:", options: ["Enganador", "Esperto", "Obrigatório", "Normal todos os dias"], answer: 0, why: "As ofertas têm de ser honestas." },
      { objective: "O3", q: "Que coluna ajuda a provar que um cliente aceitou receber mensagens?", options: ["Número do cartão", "Cor preferida", "Aceitou mensagens (sim/não e data)", "Palavra-passe"], answer: 2, why: "Registar a autorização é importante." },
      { objective: "O3", q: "Uma boa forma de recolher inscrições é:", options: ["Um código QR que leva a um formulário de inscrição", "Copiar números de recibos sem perguntar", "Comprar uma lista", "Adivinhar emails"], answer: 0, why: "As pessoas escolhem entrar." },
      { objective: "O3", q: "A sua lista de clientes deve estar:", options: ["Publicada na internet", "Protegida e fora das ferramentas de IA", "Partilhada com qualquer pessoa", "Colada em conversas"], answer: 1, why: "Os dados dos clientes são privados." },
      { objective: "O4", q: "Uma sequência simples de seguimento começa com:", options: ["Nada", "Uma venda agressiva", "Uma queixa", "Um obrigado depois da visita"], answer: 3, why: "Agradecer primeiro constrói a relação." },
      { objective: "O4", q: "Segundo a CAN-SPAM, um email de marketing deve:", options: ["Deixar claro que é publicidade", "Esconder o remetente", "Usar um assunto falso", "Não ter morada"], answer: 0, why: "A FTC exige que a publicidade seja identificada." },
      { objective: "O4", q: "O guia de que organismo trata da CAN-SPAM?", options: ["O IRS (impostos)", "O DMV (viação)", "Os correios", "A FTC"], answer: 3, why: "A FTC publica o guia de cumprimento." },
      { objective: "O4", q: "As SMS de marketing estão sujeitas a:", options: ["Só a CAN-SPAM", "Nenhuma regra", "Regras federais separadas (TCPA) aplicadas pela FCC", "Só às regras de estacionamento do estado"], answer: 2, why: "As SMS têm as suas próprias regras." },
      { objective: "O5", q: "Qual é um dos cinco números para registar?", options: ["A sua música preferida", "Venda média", "A renda do concorrente", "A sua palavra-passe"], answer: 1, why: "A venda média mostra quanto gasta cada cliente." },
      { objective: "O5", q: "O que deve fazer os totais na sua folha de registo?", options: ["Os clientes", "Os palpites da IA", "A memória", "As fórmulas da folha de cálculo"], answer: 3, why: "As fórmulas calculam sem erros." },
      { objective: "O5", q: "Antes de colar números na IA, tire:", options: ["Os totais", "As datas das semanas", "Os nomes dos clientes", "Os nomes dos produtos"], answer: 2, why: "Os nomes são privados." },
      { objective: "O6", q: "A Semana 1 do plano de 30 dias serve para:", options: ["Criar a lista e a inscrição", "Fechar o negócio", "Subir todos os preços", "Despedir funcionários"], answer: 0, why: "A lista vem primeiro." },
      { objective: "O6", q: "Porque ajustar o plano às suas horas reais?", options: ["Para o tornar mais longo", "Para conseguir mesmo fazê-lo", "Não importa", "Para a IA ficar contente"], answer: 1, why: "Planos realistas são cumpridos." },
      { objective: "O6", q: "No dia 30 deve:", options: ["Esquecer os números", "Comparar os resultados e manter o que funcionou", "Recomeçar às cegas", "Apagar a lista"], answer: 1, why: "A revisão orienta os 30 dias seguintes." },
      { objective: "O6", q: "Neste curso, quem faz a venda?", options: ["Você e a sua relação com os clientes, com a IA como ajudante", "Só a IA", "Ninguém", "Um robô a fingir ser você"], answer: 0, why: "A IA ajuda você a escrever e a pensar; quem vende é você." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 4, 6, 8, 9, 10, 13, 15, 18]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Cliente ideal", objective: "O1", notYet: "Vago, por exemplo \"toda a gente\".", meets: "Três frases concretas: quem são, do que precisam e porquê você.", exceeds: "Baseado nos melhores clientes reais e afinado com as perguntas da IA." },
      { name: "Oferta", objective: "O2", notYet: "Falta o preço ou a data de fim, ou perde dinheiro.", meets: "Uma oferta clara e honesta com preço, razão para agir e data de fim.", exceeds: "O lucro está calculado e escrito ao lado." },
      { name: "Lista de clientes", objective: "O3", notYet: "Não tem coluna de autorização ou não tem forma de inscrição.", meets: "Diz onde fica a lista e como as pessoas entraram nela, com a autorização registada.", exceeds: "Explica como a lista está protegida e fora das ferramentas de IA." },
      { name: "Sequência de seguimento", objective: "O4", notYet: "Menos de três mensagens, ou um email de marketing sem a morada ou a linha para cancelar a subscrição.", meets: "Três mensagens, com morada e linha para cancelar a subscrição no email de marketing.", exceeds: "Indica a autorização e as regras necessárias antes de qualquer SMS de marketing." },
      { name: "Tabela de registo", objective: "O5", notYet: "Não há tabela ou não há números semanais.", meets: "Uma tabela com os números para verificar todas as semanas, com fórmulas.", exceeds: "Inclui uma revisão no dia 30 para manter o que funcionou." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que fazem a sua campanha de vendas de 30 dias (inquérito de seguimento aos 30 dias)",
      "Donos que dizem ter mais vendas ou mais clientes habituais depois de 30 dias, segundo a sua tabela de registo",
      "Donos que aumentam uma lista de clientes com autorização em 60 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet",
      "Um assistente de IA gratuito e uma folha de cálculo gratuita (Google Sheets ou Microsoft Excel)",
      "Papel e caneta para calcular o custo e o lucro",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Use linhas de exemplo inventadas nas listas de prática; nunca cole listas reais de clientes na IA.",
      "Abram juntos o guia CAN-SPAM da FTC e mostre que as SMS têm regras separadas.",
      "Faça um exemplo de custo e lucro no papel antes de os donos definirem a sua oferta.",
      "Incentive os donos a comparar o seu plano de 30 dias com as suas horas reais de cada semana.",
      "Avalie o plano com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
