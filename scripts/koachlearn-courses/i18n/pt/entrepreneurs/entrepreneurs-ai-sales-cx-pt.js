"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-sales-cx.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-sales-cx-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "IA para Vendas e Experiência do Cliente",
  skills: "Qualificar potenciais clientes, Escrever mensagens de contacto pessoais, Preparar conversas de venda, Criar perguntas frequentes para clientes, Responder a reclamações, Aprender com a opinião dos clientes",
  outcome: "usar a IA para encontrar e qualificar potenciais clientes, escrever mensagens de contacto pessoais que cumprem as regras, preparar uma conversa de venda e criar uma lista de perguntas frequentes e um guia de resposta a reclamações que deixam os clientes satisfeitos.",
  about: [
    "As vendas e o atendimento ao cliente decidem se um negócio cresce. Este curso é para donos de negócios que fazem as suas próprias vendas e o seu próprio atendimento e querem fazer as duas coisas melhor e mais depressa com a IA.",
    "No Capítulo 1 vai usar a IA para descrever a quem vender, ordenar potenciais clientes, escrever mensagens pessoais (não spam) e preparar uma chamada de venda com respostas às objeções comuns. No Capítulo 2 vai criar uma lista de perguntas frequentes, aprender uma forma calma de responder a reclamações e usar a IA para encontrar padrões na opinião dos clientes.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa para o seu negócio real. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As regras sobre chamadas, SMS e email são explicadas com palavras simples; isto não é aconselhamento jurídico."
  ],
  finalTask: "Monte um kit de vendas e atendimento para o seu negócio: uma lista curta de 10 potenciais clientes qualificados com uma razão para cada um, duas mensagens de contacto pessoais, um guia de chamada de uma página com respostas às suas três objeções mais comuns, uma lista de 10 perguntas frequentes e um modelo de resposta a reclamações, tudo com os dados verificados e sem dados privados de clientes em nenhuma ferramenta de IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenos negócios nos Estados Unidos que fazem as suas próprias vendas e o seu próprio apoio ao cliente, como prestadores de serviços, lojas e quem vende a outras empresas (B2B).",
    startingPoint: "Falam com clientes todos os dias e respondem a perguntas por telefone, email ou SMS. Poucos têm uma lista de potenciais clientes, um guia de chamada, uma lista de perguntas frequentes ou uma forma fixa de responder a reclamações, e muitos não têm a certeza das regras para contactar clientes.",
    gap: "Os donos perdem tempo com potenciais clientes que não vão comprar, enviam mensagens genéricas que quebram as regras de email, chamadas ou SMS, e tratam as reclamações de formas que fazem perder clientes. Precisam de usar a IA para focar as vendas, contactar as pessoas de forma pessoal e legal, e responder aos clientes com calma e sempre da mesma forma.",
    constraints: [
      "Palavras simples; as regras explicadas de forma simples e não como aconselhamento jurídico",
      "Aparelhos: um telefone ou computador com um assistente de IA gratuito e email",
      "Tempo: cerca de cinco minutos por lição, mais tarefas com os clientes reais do dono",
      "Aplicam-se regras de email, chamadas e SMS (CAN-SPAM, consentimento TCPA), também para vozes de IA",
      "Nenhum nome, contacto ou dado privado de clientes em nenhuma ferramenta de IA"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\". \"Marketing e Criação de Conteúdos com IA\" ajuda com o perfil do cliente ideal."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com 15 potenciais clientes a partir de informação pública e da sua rede de contactos", action: "pontuá-los em problema, dinheiro, decisão e prazo e escolher os 10 melhores", standard: "com uma razão escrita para cada um" },
    { id: "O2", condition: "Com dois potenciais clientes da sua lista", action: "escrever mensagens de contacto curtas e pessoais que cumprem as regras dos EUA para email, chamadas e SMS", standard: "cada uma com um detalhe real sobre o cliente, a sua morada e uma linha para cancelar a subscrição" },
    { id: "O3", condition: "Antes de uma conversa de venda", action: "criar um guia de chamada de uma página com cinco perguntas abertas e respostas às suas três objeções mais comuns", standard: "com todas as respostas verdadeiras e treinadas uma vez num ensaio com a IA" },
    { id: "O4", condition: "Com pelo menos dez perguntas reais de clientes sem os nomes", action: "criar uma lista de 10 perguntas frequentes com respostas escritas a partir dos seus próprios dados", standard: "com todas as respostas verificadas" },
    { id: "O5", condition: "Com uma reclamação real ou inventada", action: "escolher uma solução justa e escrever uma resposta calma com agradecimento, desculpas, a solução e quando", standard: "com a solução decidida por você, não pela IA" },
    { id: "O6", condition: "Com pelo menos 20 opiniões de clientes", action: "usar a IA para encontrar os temas principais e escolher uma melhoria", standard: "depois de verificar você mesmo as contagens da IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Vender com a IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar e qualificar potenciais clientes",
          minutes: 5,
          goal: "Fazer uma lista curta de potenciais clientes e decidir quais têm mais probabilidade de comprar.",
          text: [
            "Um potencial cliente é uma pessoa ou empresa que pode comprar a você. Qualificar quer dizer decidir quais potenciais clientes valem o seu tempo. Um teste simples: Têm o problema que você resolve? Podem pagar? Podem decidir? Precisam disso em breve?",
            "A IA pode ajudar a pensar em ideias sobre onde estão os seus potenciais clientes (\"Onde é que os pequenos ginásios da minha cidade procuram serviços de limpeza?\") e a pontuar uma lista que você já tem. Descreva cada potencial cliente com palavras gerais e peça à IA para os ordenar pelas quatro perguntas.",
            "Use informação pública sobre empresas, não dados pessoais privados. Não compre listas de contactos nem recolha dados pessoais de sites; muitas vezes estão desatualizados e podem quebrar regras de privacidade e de marketing."
          ],
          steps: ["Escreva quem foram os seus melhores clientes no passado.", "Pergunte à IA onde se podem encontrar empresas ou pessoas parecidas.", "Faça uma lista de 15 a 20 potenciais clientes a partir de fontes públicas e da sua própria rede de contactos.", "Pontue cada um em problema, dinheiro, decisão e prazo.", "Fique com os 10 melhores, com uma razão de uma linha para cada um."],
          words: [["Potencial cliente", "uma pessoa ou empresa que pode comprar a você."], ["Qualificar", "decidir se um potencial cliente tem probabilidade de comprar e vale o seu tempo."]],
          slides: [
            { title: "Um potencial cliente pode comprar", bullets: ["Qualificar = vale o seu tempo?", "Problema, dinheiro, decisão, prazo"] },
            { title: "Como a IA ajuda", bullets: ["Pensar onde estão os potenciais clientes", "Ordenar a sua lista pelas quatro perguntas"] },
            { title: "Trabalhe de forma limpa", bullets: ["Use informação pública sobre empresas", "Nada de listas compradas nem dados pessoais recolhidos de sites"] }
          ],
          tryIt: "Faça uma lista de 15 potenciais clientes, pontue-os em problema, dinheiro, decisão e prazo com a ajuda da IA, e fique com os 10 melhores com uma razão para cada um.",
          youCanNow: "encontrar potenciais clientes e focar-se nos que têm mais probabilidade de comprar.",
          quickCheck: [
            { objective: "O1", q: "O que é um potencial cliente qualificado?", options: ["Alguém com o problema, o dinheiro, o poder de decidir e uma necessidade em breve", "Qualquer pessoa cujo email consegue encontrar", "Um amigo que gosta das suas publicações", "Uma empresa de outra área"], answer: 0, why: "Os potenciais clientes qualificados passam nas quatro perguntas: problema, dinheiro, decisão e prazo." },
            { objective: "O1", q: "Um potencial cliente adora a sua ideia mas não tem orçamento até ao próximo ano. O que faz?", options: ["Põe-no no topo da lista", "Dá-lhe menos pontos em dinheiro e prazo e volta a contactá-lo mais tarde", "Apaga-o para sempre", "Envia-lhe dez mensagens"], answer: 1, why: "Pontuar ajuda a focar-se em quem pode comprar agora." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever mensagens de contacto pessoais, não spam",
          minutes: 5,
          goal: "Escrever uma primeira mensagem curta e pessoal que cumpre as regras dos EUA para email, chamadas e SMS.",
          text: [
            "Uma boa mensagem de contacto é curta e fala sobre o cliente: o que você reparou no negócio dele, o problema em que pode ajudar e um próximo passo fácil. Peça à IA: \"Escreva um primeiro email de 70 palavras para o dono de um pequeno ginásio. Diga que as avaliações dos clientes mostram que balneários limpos são importantes. Ofereça uma visita grátis de 15 minutos. Sem exageros.\" Depois acrescente um detalhe que só você sabe.",
            "Para emails comerciais, a lei CAN-SPAM exige linhas de remetente (De) e de assunto honestas, a morada física do seu negócio e uma forma clara de cancelar a subscrição, e os pedidos de cancelamento têm de ser respeitados em 10 dias úteis.",
            "As chamadas e os SMS têm regras mais rigorosas. Os SMS de marketing e as chamadas automáticas normalmente precisam primeiro do consentimento da pessoa, e em 2024 a FCC (a agência federal de comunicações dos EUA) decidiu que as vozes criadas por IA contam como vozes \"artificiais\" na lei TCPA (Telephone Consumer Protection Act). Não use chamadas com voz de IA nem SMS em massa sem consentimento, e consulte fcc.gov ou um advogado antes de começar."
          ],
          steps: ["Anote um detalhe real sobre o potencial cliente a partir de informação pública.", "Peça à IA uma mensagem curta: a situação dele, a sua ajuda, um próximo passo.", "Acrescente um detalhe pessoal e verifique todos os dados.", "No email, inclua a sua morada e uma linha para cancelar a subscrição.", "Não envie SMS nem faça chamadas com IA a ninguém sem o consentimento da pessoa."],
          words: [["Mensagem de contacto", "contactar primeiro um possível cliente."], ["Lei CAN-SPAM", "lei dos EUA com regras para emails comerciais."], ["TCPA", "Telephone Consumer Protection Act: lei dos EUA que limita chamadas e SMS de marketing sem consentimento."]],
          slides: [
            { title: "Curta e sobre o cliente", bullets: ["O que você reparou", "O problema que você resolve", "Um próximo passo fácil"] },
            { title: "Regras de email (CAN-SPAM)", bullets: ["Remetente e assunto honestos", "A morada física do seu negócio", "Cancelamento respeitado em 10 dias úteis"] },
            { title: "Chamadas e SMS", bullets: ["SMS de marketing e chamadas automáticas normalmente precisam de consentimento", "Vozes de IA contam como vozes artificiais (FCC 2024)", "Consulte primeiro fcc.gov ou um advogado"] }
          ],
          sources: [{ name: "FTC: Guia de cumprimento da lei CAN-SPAM para empresas (em inglês)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC: Decisão sobre vozes criadas por IA em chamadas automáticas (2024, em inglês)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Escreva dois emails de contacto pessoais para potenciais clientes da sua lista com a ajuda da IA. Acrescente um detalhe real a cada um e verifique que têm a sua morada e uma linha para cancelar a subscrição.",
          youCanNow: "escrever mensagens de contacto pessoais que respeitam as regras de email, chamadas e SMS.",
          quickCheck: [
            { objective: "O2", q: "O que um email comercial tem de incluir segundo a lei CAN-SPAM?", options: ["Um desconto", "Uma fotografia sua", "Uma forma de cancelar a subscrição", "O número de telefone da sua casa"], answer: 2, why: "Os emails comerciais têm de dar uma forma de cancelar a subscrição." },
            { objective: "O2", q: "A IA escreve um email de contacto que podia ser enviado a qualquer pessoa. O que faz?", options: ["Envia-o a toda a gente", "Torna-o mais comprido", "Acrescenta mais palavras de venda", "Acrescenta algo real que reparou sobre este potencial cliente"], answer: 3, why: "Um detalhe real torna a mensagem pessoal, e não spam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Preparar uma conversa de venda",
          minutes: 5,
          goal: "Fazer um guia de chamada de uma página com perguntas e respostas às objeções comuns.",
          text: [
            "Uma conversa de venda é sobretudo ouvir. Prepare cinco boas perguntas sobre a situação, o problema e os objetivos do cliente, e depois explique como ajuda usando as palavras dele.",
            "As objeções são as razões que as pessoas dão para não comprar: \"É caro demais.\" \"Preciso de pensar.\" \"Já temos alguém.\" Peça à IA: \"Faça a lista das cinco objeções mais comuns para [serviço] e dê uma resposta calma e honesta a cada uma.\" Edite-as para que soem como você e sejam verdadeiras.",
            "Faça um ensaio com a IA: \"Finja que é o dono de um ginásio, muito ocupado, que não tem a certeza se quer contratar um serviço de limpeza. Faça-me perguntas difíceis.\" Treine até conseguir responder sem ler."
          ],
          steps: ["Escreva cinco perguntas abertas sobre a situação e os objetivos do cliente.", "Peça à IA as objeções comuns e respostas honestas.", "Edite as respostas para que sejam verdadeiras e soem como você.", "Ensaie a conversa com a IA.", "Ponha tudo numa só página."],
          words: [["Objeção", "uma razão que um cliente dá para ainda não comprar."], ["Ensaio (role-play)", "treinar uma conversa representando-a como num teatro."], ["Pergunta aberta", "uma pergunta que não se pode responder só com sim ou não."]],
          slides: [
            { title: "Sobretudo ouvir", bullets: ["Cinco perguntas abertas", "A situação, o problema e os objetivos do cliente", "Explique a sua ajuda com as palavras dele"] },
            { title: "Prepare-se para as objeções", bullets: ["\"É caro demais\"", "\"Preciso de pensar\"", "\"Já temos alguém\""] },
            { title: "Treine com a IA", bullets: ["Peça à IA para fazer de cliente com dúvidas", "Responda em voz alta", "Repita até parecer natural"] }
          ],
          tryIt: "Monte o seu guia de chamada de uma página: cinco perguntas abertas e respostas honestas às suas três objeções mais comuns. Faça um ensaio com a IA.",
          youCanNow: "preparar e treinar uma conversa de venda com a IA.",
          quickCheck: [
            { objective: "O3", q: "O que é uma pergunta aberta?", options: ["Uma que não se pode responder só com sim ou não", "Uma pergunta só sobre o preço", "Uma pergunta que faz à IA", "Uma pergunta sem resposta"], answer: 0, why: "As perguntas abertas fazem o cliente falar das suas necessidades." },
            { objective: "O3", q: "A resposta da IA à objeção \"Preciso de pensar\" soa insistente demais. O que faz?", options: ["Usa-a como está", "Edita-a para que seja honesta e soe como você", "Deita fora o guia de chamada", "Lê-a palavra por palavra mais depressa"], answer: 1, why: "Você edita as respostas da IA para que sejam verdadeiras e com a sua própria voz." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Vender com a IA",
        questions: [
          { objective: "O1", q: "Que potencial cliente está mais bem qualificado?", options: ["Alguém que não precisa do seu serviço", "Uma empresa com o problema, o orçamento, alguém que decide e uma necessidade em breve", "Um endereço de email qualquer", "Um concorrente"], answer: 1, why: "Passa nas quatro perguntas de qualificação." },
          { objective: "O1", q: "De onde deve vir a informação sobre os seus potenciais clientes?", options: ["Dos ficheiros privados dos clientes", "De dados pessoais recolhidos de sites", "De uma lista comprada de desconhecidos", "De informação pública sobre empresas e da sua própria rede de contactos"], answer: 3, why: "A informação pública evita problemas de privacidade e de marketing." },
          { objective: "O2", q: "Uma boa primeira mensagem de contacto é:", options: ["Curta, sobre o cliente, com um próximo passo fácil", "Longa e toda sobre você", "Copiada para 1,000 pessoas sem mudanças", "Cheia de promessas \"garantidas\""], answer: 0, why: "Pessoal e curta recebe respostas." },
          { objective: "O2", q: "Pode fazer chamadas automáticas com voz de IA a pessoas que nunca deram consentimento?", options: ["Sim, aos fins de semana", "Sim, as vozes de IA estão isentas", "Não, as regras de consentimento também se aplicam às vozes de IA", "Só a empresas de outros estados"], answer: 2, why: "A FCC trata as vozes de IA como vozes artificiais na lei TCPA." },
          { objective: "O3", q: "Um cliente diz \"É caro demais.\" A isto chama-se:", options: ["Um gatilho", "Um potencial cliente", "Uma objeção", "Um reembolso"], answer: 2, why: "As objeções são razões para ainda não comprar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter os clientes satisfeitos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar uma lista de perguntas frequentes",
          minutes: 5,
          goal: "Criar uma lista de 10 perguntas frequentes a partir das perguntas que os clientes fazem mesmo.",
          text: [
            "Os clientes fazem as mesmas perguntas muitas e muitas vezes. Uma página ou documento de perguntas frequentes (em inglês, FAQ) poupa-lhe tempo e ajuda os clientes a decidir mais depressa.",
            "Junte as perguntas reais de emails, mensagens e chamadas durante duas semanas (tire os nomes e os contactos). Peça à IA para as agrupar e escrever respostas claras e curtas usando só os dados que você lhe dá: preços, horários, zona de serviço, regras do negócio.",
            "Verifique todas as respostas. Depois use as perguntas frequentes no seu site, nas suas respostas guardadas e como base de dados para qualquer chatbot. Se usar um chatbot, diga aos clientes que é automático e dê uma forma fácil de falar com uma pessoa."
          ],
          steps: ["Junte as perguntas dos clientes durante duas semanas, sem nomes nem contactos.", "Peça à IA para as agrupar e escolher as 10 principais.", "Dê à IA os seus dados reais e peça respostas curtas.", "Verifique cada resposta.", "Publique as perguntas frequentes e use-as nas respostas."],
          words: [["Perguntas frequentes (FAQ)", "uma lista de perguntas comuns com as respostas."], ["Chatbot", "um programa automático que responde às mensagens dos clientes."]],
          slides: [
            { title: "As mesmas perguntas, todas as semanas", bullets: ["As perguntas frequentes poupam-lhe tempo", "Ajudam os clientes a decidir mais depressa"] },
            { title: "Criadas a partir de perguntas reais", bullets: ["Junte durante duas semanas, sem nomes", "A IA agrupa-as e escreve rascunhos de respostas", "Só a partir dos dados que você lhe dá"] },
            { title: "Use-as em todo o lado", bullets: ["Site e respostas guardadas", "Base de dados para qualquer chatbot", "Diga quando é automático; ofereça uma pessoa"] }
          ],
          tryIt: "Junte pelo menos dez perguntas reais de clientes (sem nomes), use a IA para as agrupar e escrever respostas a partir dos seus dados, verifique cada uma e guarde as suas perguntas frequentes.",
          youCanNow: "transformar perguntas reais de clientes numa lista de perguntas frequentes verificada.",
          quickCheck: [
            { objective: "O4", q: "De onde devem vir as perguntas frequentes?", options: ["Dos palpites da IA", "Do site de um concorrente", "Das perguntas que os clientes reais fazem", "De perguntas que gostava que as pessoas fizessem"], answer: 2, why: "Perguntas reais dão uma lista que ajuda de verdade." },
            { objective: "O4", q: "Uma resposta da IA nas perguntas frequentes dá um prazo de entrega que você não oferece. O que faz?", options: ["Publica-a", "Muda o seu prazo de entrega", "Apaga a lista toda", "Corrige-a a partir dos seus dados reais"], answer: 3, why: "As respostas têm de se basear nos seus dados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Responder a reclamações com calma",
          minutes: 5,
          goal: "Usar a IA para escrever uma resposta calma e justa a uma reclamação, e decidir como a resolver.",
          text: [
            "Uma reclamação bem tratada pode ganhar um cliente para a vida. Um modelo simples: agradeça, peça desculpa pela experiência que a pessoa teve, diga o que vai fazer e diga quando. Não discuta em público; ofereça-se para continuar em privado.",
            "Quando está chateado, a IA ajuda-o a manter a calma. Resuma a reclamação com as suas palavras (sem nomes nem números de encomenda) e peça: \"Escreva uma resposta curta e calma que agradece, pede desculpa, oferece [solução] e convida a pessoa a enviar-nos uma mensagem privada.\"",
            "A solução é você que decide. Não deixe a IA prometer reembolsos ou créditos que não aprovou, e não use a IA para escrever avaliações positivas falsas para esconder a má; a FTC (a agência de proteção do consumidor dos EUA) proíbe avaliações falsas, incluindo as escritas por IA."
          ],
          steps: ["Leia a reclamação e espere alguns minutos antes de responder.", "Decida você mesmo a solução justa.", "Resuma a reclamação para a IA sem nomes nem números de encomenda.", "Peça uma resposta calma: agradecimento, desculpas, a solução, quando, passar para privado.", "Edite, verifique e envie."],
          words: [["Reclamação", "um cliente a dizer-lhe que alguma coisa correu mal."], ["Solução", "o que vai fazer para corrigir, como refazer o trabalho ou devolver o dinheiro."]],
          slides: [
            { title: "Um modelo de resposta", bullets: ["Agradeça", "Peça desculpa pela experiência da pessoa", "Diga o que vai fazer e quando"] },
            { title: "A IA ajuda-o a manter a calma", bullets: ["Resuma sem nomes nem números de encomenda", "Peça um rascunho curto e calmo", "Passe a conversa para privado"] },
            { title: "Quem decide é você", bullets: ["A solução é escolha sua", "Nenhuma promessa que não aprovou", "Nunca use avaliações falsas para esconder uma má"] }
          ],
          sources: [{ name: "FTC: Regra final que proíbe avaliações e testemunhos falsos (comunicado de imprensa, em inglês)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Pegue numa reclamação real ou inventada, decida a solução justa e use a IA para escrever uma resposta calma com o modelo de quatro partes. Guarde-a como o seu modelo de resposta a reclamações.",
          youCanNow: "responder a reclamações com calma e de forma justa com a ajuda da IA, e decidir você mesmo a solução.",
          quickCheck: [
            { objective: "O5", q: "Quais são as quatro partes de uma resposta calma a uma reclamação?", options: ["Agradecimento, desculpas, a solução, quando", "Negar, adiar, defender, apagar", "Preço, produto, lugar, promoção", "Olá, adeus, assinar, enviar"], answer: 0, why: "Este modelo mantém as respostas calmas, justas e claras." },
            { objective: "O5", q: "O rascunho da IA oferece um reembolso total que você não aprovou. O que faz?", options: ["Envia-o", "Decide você mesmo a solução justa e muda o rascunho", "Deixa a IA decidir", "Ignora a reclamação"], answer: 1, why: "Você decide a solução; a IA só escreve o rascunho das palavras." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Aprender com a opinião dos clientes",
          minutes: 5,
          goal: "Usar a IA para encontrar padrões nas avaliações e opiniões, e escolher uma melhoria.",
          text: [
            "As avaliações, as respostas a inquéritos e as mensagens dizem-lhe o que corrigir e o que manter. Ao lê-las uma a uma, você não vê os padrões. A IA é boa a agrupar.",
            "Copie 20 a 50 avaliações ou comentários (tire os nomes) e peça: \"Agrupe estas opiniões em temas. Para cada tema, diga quantos comentários falam dele e dê um exemplo. Faça a lista das três coisas de que os clientes mais gostam e dos três maiores problemas.\"",
            "Verifique as contagens dando você mesmo uma leitura rápida, porque a IA pode contar mal. Depois escolha um problema para resolver este mês, resolva-o e diga aos clientes que os ouviu."
          ],
          steps: ["Junte 20 a 50 avaliações ou comentários e tire os nomes.", "Peça à IA para os agrupar em temas, com contagens e exemplos.", "Leia rapidamente para verificar os temas e as contagens.", "Escolha um problema para resolver este mês.", "Diga aos clientes o que mudou."],
          words: [["Tema", "um assunto que aparece muitas e muitas vezes nas opiniões."], ["Inquérito", "um pequeno conjunto de perguntas que faz aos clientes."]],
          slides: [
            { title: "As opiniões mostram o caminho", bullets: ["Avaliações, inquéritos, mensagens", "Uma a uma, não vê os padrões"] },
            { title: "A IA agrupa-as", bullets: ["Tire primeiro os nomes", "Temas, contagens e exemplos", "As três coisas de que mais gostam e os três maiores problemas"] },
            { title: "Aja", bullets: ["Verifique você mesmo as contagens", "Resolva um problema este mês", "Diga aos clientes que os ouviu"] }
          ],
          tryIt: "Tarefa final: analise pelo menos 20 opiniões com a IA, escolha uma melhoria e depois monte o seu kit de vendas e atendimento: 10 potenciais clientes qualificados, duas mensagens de contacto, guia de chamada, perguntas frequentes e modelo de resposta a reclamações.",
          youCanNow: "usar a IA nas vendas e no atendimento: encontrar potenciais clientes, contactá-los da forma certa, preparar-se, responder aos clientes e continuar a melhorar.",
          quickCheck: [
            { objective: "O6", q: "O que é um tema nas opiniões dos clientes?", options: ["Um comentário zangado", "A cor do seu site", "Um assunto que aparece muitas e muitas vezes", "Uma avaliação de cinco estrelas"], answer: 2, why: "Os temas mostram os problemas que muitos clientes têm em comum." },
            { objective: "O6", q: "A IA diz que a maioria das opiniões é sobre o preço, mas você lembra-se de muitos comentários sobre o tempo de espera. O que faz?", options: ["Confia na IA", "Baixa os preços de imediato", "Pede à IA para concordar com você", "Lê você mesmo as opiniões para verificar"], answer: 3, why: "Verifique você mesmo as contagens da IA antes de agir." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter os clientes satisfeitos",
        questions: [
          { objective: "O4", q: "De onde devem vir as perguntas frequentes?", options: ["Das perguntas reais que os clientes fazem", "De perguntas que a IA inventa", "Do site de um concorrente", "De palpites ao acaso"], answer: 0, why: "Perguntas reais dão uma lista útil." },
          { objective: "O4", q: "Se usar um chatbot, deve:", options: ["Esconder os seus contactos", "Fingir que é uma pessoa", "Deixá-lo prometer reembolsos", "Dizer aos clientes que é automático e oferecer uma forma de falar com uma pessoa"], answer: 3, why: "A honestidade e um caminho fácil até uma pessoa mantêm a confiança." },
          { objective: "O5", q: "Quem decide a solução para uma reclamação?", options: ["A IA", "Você", "Os amigos do cliente", "Ninguém"], answer: 1, why: "A IA escreve o rascunho das palavras; você decide a solução." },
          { objective: "O5", q: "Aparece uma avaliação má. Que reação é ilegal segundo as regras da FTC?", options: ["Publicar avaliações positivas falsas para a esconder", "Responder com calma", "Resolver o problema", "Convidar o cliente a falar em privado"], answer: 0, why: "A FTC proíbe avaliações falsas, incluindo as escritas por IA." },
          { objective: "O6", q: "A IA diz que 30 comentários falam de entregas lentas. O que deve fazer?", options: ["Apagar os comentários", "Confiar totalmente", "Ler rapidamente para verificar você mesmo a contagem", "Ignorar"], answer: 2, why: "A IA pode contar mal; verifique antes de agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Vendas e Experiência do Cliente",
    questions: [
      { objective: "O1", q: "Um potencial cliente é:", options: ["Um cliente que já pagou", "Uma pessoa ou empresa que pode comprar a você", "Uma reclamação", "Um produto"], answer: 1, why: "É essa a definição." },
      { objective: "O1", q: "As quatro perguntas de qualificação são sobre:", options: ["Logótipo, letra, site e aplicação", "Cor, tamanho, peso e forma", "Nome, idade, morada e telefone", "Problema, dinheiro, decisão e prazo"], answer: 3, why: "Mostram quem tem probabilidade de comprar." },
      { objective: "O1", q: "Que fonte de potenciais clientes pode usar?", options: ["O ficheiro de clientes de um concorrente", "Uma lista comprada de números de telefone pessoais", "Dados privados recolhidos de sites", "Listas públicas de empresas"], answer: 3, why: "A informação pública sobre empresas evita problemas de privacidade." },
      { objective: "O2", q: "Uma boa mensagem de contacto fala de:", options: ["Só os seus prémios", "Algo real que reparou sobre o cliente", "Um prazo falso", "A morada da casa dele"], answer: 1, why: "Os detalhes pessoais mostram que fez o trabalho de casa." },
      { objective: "O2", q: "A lei CAN-SPAM exige que os emails comerciais incluam:", options: ["Um desconto", "Os seus dados bancários", "Uma forma de cancelar a subscrição", "Uma fotografia"], answer: 2, why: "O cancelamento da subscrição é uma das exigências básicas." },
      { objective: "O2", q: "Os pedidos de cancelamento da subscrição têm de ser respeitados em:", options: ["10 dias úteis", "1 ano", "1 hora", "Nunca"], answer: 0, why: "O guia da FTC diz 10 dias úteis." },
      { objective: "O2", q: "Segundo a decisão da FCC de 2024, as vozes criadas por IA em chamadas são tratadas como:", options: ["Isentas de todas as regras", "Vozes humanas", "Vozes artificiais na lei TCPA", "Emails"], answer: 2, why: "Por isso as regras de consentimento aplicam-se." },
      { objective: "O2", q: "Antes de enviar SMS de marketing, deve:", options: ["Ter o consentimento da pessoa e verificar as regras", "Enviar SMS a todos os contactos do seu telefone", "Usar antes uma voz de IA", "Esconder o nome do seu negócio"], answer: 0, why: "Os SMS de marketing normalmente precisam de consentimento." },
      { objective: "O3", q: "Uma conversa de venda deve ser sobretudo:", options: ["Falar de você", "Ouvir", "Ler um guião depressa", "Descontos"], answer: 1, why: "Ouvir diz-lhe o que o cliente precisa." },
      { objective: "O3", q: "Uma pergunta aberta é uma que:", options: ["Não tem resposta", "É mal-educada", "É só sobre o preço", "Não se pode responder só com sim ou não"], answer: 3, why: "As perguntas abertas fazem os clientes falar." },
      { objective: "O3", q: "Um ensaio com a IA ajuda-o a:", options: ["Treinar a responder a perguntas difíceis", "Assinar contratos", "Não precisar de se preparar", "Escrever avaliações falsas"], answer: 0, why: "Treinar dá confiança." },
      { objective: "O3", q: "Quando a IA escreve respostas às objeções, você deve:", options: ["Nunca as usar", "Lê-las palavra por palavra", "Acrescentar garantias falsas", "Editá-las para que sejam verdadeiras e soem como você"], answer: 3, why: "Respostas honestas com a sua voz criam confiança." },
      { objective: "O4", q: "Uma lista de perguntas frequentes ajuda porque:", options: ["Esconde os preços", "Substitui todo o contacto com os clientes", "Responde depressa às perguntas comuns", "É obrigatória por lei"], answer: 2, why: "Poupa tempo a você e aos clientes." },
      { objective: "O4", q: "Antes de dar perguntas de clientes à IA, deve:", options: ["Acrescentar os números dos cartões deles", "Tirar os nomes e os contactos", "Pedir as palavras-passe deles", "Publicá-las na internet"], answer: 1, why: "Mantenha os dados privados fora das ferramentas de IA." },
      { objective: "O4", q: "As respostas das perguntas frequentes devem basear-se em:", options: ["Boatos antigos", "O que a IA adivinhar", "Os preços de um concorrente", "Dados que você dá à IA"], answer: 3, why: "A IA pode inventar dados se você não os der." },
      { objective: "O5", q: "A resposta a reclamações em quatro partes é:", options: ["Desconto, desconto, desconto, desconto", "Negar, discutir, bloquear, apagar", "Agradecimento, desculpas, a solução, quando", "Ignorar"], answer: 2, why: "É calma, justa e clara." },
      { objective: "O5", q: "Quando uma reclamação é pública, uma boa jogada é:", options: ["Responder com calma e oferecer-se para continuar em privado", "Discutir nos comentários", "Publicar os dados do cliente", "Apagar a sua conta"], answer: 0, why: "Passar para privado evita uma discussão em público." },
      { objective: "O5", q: "A IA pode prometer um reembolso na sua resposta sem a sua aprovação?", options: ["Sim, sempre", "Não, quem decide a solução é você", "Só aos fins de semana", "Só em encomendas grandes"], answer: 1, why: "As decisões sobre dinheiro ficam com você." },
      { objective: "O6", q: "Um tema nas opiniões é:", options: ["O design de um site", "Um assunto que aparece muitas e muitas vezes", "Uma única avaliação", "Um tipo de letra"], answer: 1, why: "Os temas mostram padrões." },
      { objective: "O6", q: "Depois de encontrar o maior problema nas opiniões, deve:", options: ["Resolvê-lo e dizer aos clientes que os ouviu", "Ignorá-lo", "Esconder as avaliações", "Comprar avaliações novas"], answer: 0, why: "Agir com base nas opiniões cria clientes fiéis." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      4,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Potenciais clientes qualificados",
        objective: "O1",
        notYet: "Menos de 10 potenciais clientes, sem razões, ou de fontes não aprovadas.",
        meets: "10 potenciais clientes de informação pública ou da sua rede de contactos, cada um com uma razão.",
        exceeds: "Cada potencial cliente mostra a sua pontuação em problema, dinheiro, decisão e prazo."
      },
      {
        name: "Mensagens de contacto",
        objective: "O2",
        notYet: "Genéricas, ou sem a morada ou a linha para cancelar a subscrição.",
        meets: "Duas mensagens curtas e pessoais com um detalhe real, a morada e a linha para cancelar a subscrição.",
        exceeds: "Cada uma acaba com um próximo passo fácil e foi lida em voz alta antes de ser enviada."
      },
      {
        name: "Guia de chamada",
        objective: "O3",
        notYet: "Faltam perguntas ou respostas às objeções, ou as respostas prometem demais.",
        meets: "Cinco perguntas abertas e respostas honestas a três objeções, treinadas uma vez.",
        exceeds: "Anota o que mudou depois do ensaio."
      },
      {
        name: "Perguntas frequentes e modelo de resposta a reclamações",
        objective: "O5",
        notYet: "Respostas das perguntas frequentes não verificadas, ou a resposta à reclamação promete uma solução não decidida.",
        meets: "10 respostas verificadas nas perguntas frequentes e um modelo de resposta a reclamações em quatro partes com a solução do dono.",
        exceeds: "As perguntas frequentes estão publicadas ou em uso, e o modelo tem uma linha a oferecer continuar em privado."
      },
      {
        name: "Dados privados",
        objective: "O4",
        notYet: "Nomes ou contactos de clientes foram postos numa ferramenta de IA.",
        meets: "Todas as perguntas e opiniões tiveram os nomes e os contactos tirados.",
        exceeds: "Anota a definição de dados da ferramenta de IA que foi verificada."
      }
    ]
  },
  evaluation: {
    results: [
      "Donos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Conversas de venda ou clientes novos a partir da lista de potenciais clientes em 30 dias (inquérito de seguimento)",
      "Donos que publicam as suas perguntas frequentes e dizem receber menos perguntas repetidas",
      "Alunos que começam outro curso da Koach Learn para empreendedores em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com um assistente de IA gratuito e email",
      "Uma folha de cálculo para a lista de potenciais clientes",
      "Perguntas e opiniões reais de clientes, sem os nomes nem os contactos",
      "Cerca de 60 a 75 minutos no total para lições, tarefas, verificações e o kit"
    ],
    facilitatorNotes: [
      "Ponha os alunos em pares para ensaios de vendas depois de treinarem com a IA.",
      "Mostre como tirar os nomes e os contactos das perguntas dos clientes antes de usar a IA.",
      "Explique que as regras de chamadas, SMS e email são dadas com palavras simples e não são aconselhamento jurídico.",
      "Sublinhe que é o dono que decide cada solução e cada reembolso, não a IA.",
      "Avalie o kit de vendas e atendimento com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
