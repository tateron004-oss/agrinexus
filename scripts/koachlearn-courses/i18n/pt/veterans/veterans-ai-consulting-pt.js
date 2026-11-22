"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: SBA, VA, VBOC, VetCert, GI Bill, TAP and IRS names are kept as in the English.

module.exports = {
  id: "veterans-ai-consulting-pt",
  lang: "pt",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Oportunidades de Consultoria em IA",
  skills: "Transformar a sua experiência numa oferta de consultoria, Encontrar ajuda gratuita para negócios de veteranos, Escrever uma mensagem de contacto, Escrever uma proposta com IA, Proteger as informações do cliente",
  outcome: "transformar a sua experiência militar numa oferta de consultoria clara e escrever uma proposta de uma página para um cliente com um assistente de IA, sabendo onde obter ajuda oficial gratuita para montar o negócio.",
  about: [
    "Um consultor é pago para resolver um problema concreto de um cliente. Os veteranos trazem habilidades que faltam a muitas pequenas empresas, organizações sem fins lucrativos e empreiteiros: planeamento, segurança no trabalho, logística, formação, segurança e liderança de equipas. Hoje, as ferramentas de IA ajudam os consultores a pesquisar, escrever e entregar mais depressa.",
    "Neste curso, você vai escolher uma oferta com base no que sabe, saber onde os veteranos obtêm ajuda oficial gratuita para negócios, escrever uma primeira mensagem de contacto e usar um assistente de IA para fazer o rascunho de uma proposta de uma página. Também vai aprender as regras que mantêm seguras as informações do cliente.",
    "Cada lição dura cerca de cinco minutos. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Este curso não dá conselhos legais nem fiscais: para montar o negócio, use os serviços oficiais indicados aqui ou um profissional qualificado."
  ],
  finalTask: "Escreva uma proposta de consultoria de uma página para um cliente local, inventado ou real: o problema, o que você vai fazer, o que o cliente vai receber, o prazo, o seu preço (definido por você, não pela IA) e como vai proteger as informações dele. Faça o rascunho com um assistente de IA, depois corrija-o para que tudo o que afirma seja verdade, e escreva o nome do serviço oficial gratuito de apoio a negócios que vai contactar a seguir.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos que querem ganhar dinheiro como consultores, usando habilidades como planeamento, segurança no trabalho, logística, formação, segurança e liderança de equipas, para pequenas empresas, organizações sem fins lucrativos e empreiteiros.",
    startingPoint: "Têm muita experiência, sabem fazer briefings e escrever ordens, e sabem usar um computador. A maioria ainda não definiu uma oferta de consultoria, não contactou clientes, não fixou preços nem escreveu uma proposta, e poucos usaram IA para escrever documentos de negócio.",
    gap: "A experiência só dá dinheiro quando é oferecida com clareza a um cliente que precisa dela. Os alunos precisam de transformar as suas habilidades numa oferta clara, chegar aos primeiros clientes com honestidade, fazer com IA o rascunho de uma proposta cujo preço e conteúdo eles próprios definem e verificam, proteger as informações do cliente e usar a ajuda oficial gratuita para negócios.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não se assume nenhuma formação em negócios",
      "Aparelhos: um computador ou smartphone com internet e um assistente de IA gratuito",
      "Privacidade: nenhuma informação confidencial do cliente em ferramentas de IA públicas, a não ser que o cliente concorde e a ferramenta esteja aprovada; marcadores na prática",
      "Honestidade: tudo o que se afirma nas mensagens e nas propostas tem de ser verdade; quem define o preço é o aluno, não a IA",
      "Licenças, impostos e registo: com o serviço de negócios do estado, irs.gov ou um conselheiro de um VBOC"
    ],
    prerequisites: "Nenhum. O curso \"IA para a Produtividade e a Liderança\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de trabalhos de consultoria", action: "explicar o que faz um consultor e três maneiras de a IA o ajudar", standard: "indicando pelo menos dois problemas de clientes que combinam com as suas habilidades militares" },
    { id: "O2", condition: "Usando a sua experiência militar", action: "escrever uma oferta de uma frase que diga quem você ajuda, o problema e o resultado", standard: "testada perguntando a pelo menos uma pessoa dessa área" },
    { id: "O3", condition: "Quando planeia o seu negócio", action: "identificar a ajuda oficial gratuita para negócios de veteranos perto de você e o que faz cada serviço", standard: "com o contacto do Veterans Business Outreach Center mais próximo e uma pergunta para fazer" },
    { id: "O4", condition: "Para a sua oferta", action: "escrever uma mensagem de contacto curta e honesta que peça a um possível cliente uma chamada de 15 minutos", standard: "com tudo o que afirma verdadeiro e três pessoas a quem a enviar" },
    { id: "O5", condition: "Com a sua oferta e o problema de um cliente", action: "fazer com IA o rascunho de uma proposta de uma página e corrigi-lo até estar certo", standard: "com um âmbito claro, um prazo e um preço definido por você" },
    { id: "O6", condition: "Quando usa IA no trabalho para clientes", action: "escrever regras que protejam as informações do cliente e verificar o trabalho da IA antes de o entregar", standard: "com uma frase sobre o uso de IA na proposta e nenhum dado do cliente em ferramentas públicas sem autorização" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir a sua oferta de consultoria",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que fazem os consultores e onde entra a IA",
          minutes: 4,
          goal: "Explicar o que faz um consultor e três maneiras de a IA o ajudar.",
          text: [
            "Um consultor é um especialista de fora que um cliente contrata para um trabalho concreto, durante um tempo definido. Exemplos: montar um programa de segurança no trabalho para uma empresa de construção, criar um plano de formação para os voluntários de uma organização sem fins lucrativos ou planear a organização de um armazém.",
            "A IA ajuda os consultores a pesquisar um tema depressa, a fazer rascunhos de documentos como propostas e relatórios, e a transformar notas em listas de verificação ou slides. Não substitui a sua experiência: os clientes pagam pelo seu bom julgamento.",
            "A consultoria em IA inclui também ajudar pequenas organizações a começar a usar ferramentas de IA com segurança, por exemplo escrever uma política simples de uso de IA ou dar formação ao pessoal. Os seus hábitos militares de procedimentos padrão e formação clara servem muito bem aqui."
          ],
          words: [["Consultor", "um especialista de fora pago para resolver um problema concreto de um cliente."], ["Cliente", "a pessoa ou organização que paga pelo seu serviço."], ["Entregável", "aquilo que você entrega no final, como um plano, um relatório ou uma formação."]],
          slides: [
            { title: "Um consultor é...", bullets: ["Um especialista de fora", "Contratado para um trabalho concreto, por um tempo definido", "Pago pelo seu julgamento e pelos resultados"] },
            { title: "Como a IA ajuda", bullets: ["Pesquisa rápida", "Rascunhos de propostas e relatórios", "Transformar notas em listas de verificação ou slides"] },
            { title: "Trabalho de consultoria em IA", bullets: ["Ajudar pequenos grupos a usar a IA com segurança", "Escrever políticas simples de uso de IA", "Dar formação ao pessoal"] }
          ],
          tryIt: "Pergunte a um assistente de IA: \"Para que problemas as pequenas empresas perto de mim costumam contratar consultores?\" Marque com um círculo dois que combinam com o que você fez nas forças armadas.",
          youCanNow: "explicar o que faz um consultor e como a IA apoia o trabalho.",
          quickCheck: [
            { objective: "O1", q: "O que é um entregável?", options: ["Aquilo que entrega no final, como um plano ou um relatório", "O pagamento do cliente", "O seu cartão de visita", "A primeira chamada telefónica"], answer: 0, why: "Um entregável é o trabalho terminado que o cliente recebe." },
            { objective: "O1", q: "A IA dá-lhe uma lista de problemas para os quais as pequenas empresas contratam consultores. O que faz?", options: ["Oferece-se para resolver todos", "Ignora a lista", "Marca os que combinam com o que fez nas forças armadas", "Escolhe o que paga mais, mesmo sem ter habilidade nisso"], answer: 2, why: "A sua oferta deve ligar problemas reais às habilidades que já tem." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Transformar a sua experiência numa oferta",
          minutes: 5,
          goal: "Escrever uma oferta de uma frase: quem você ajuda, o problema e o resultado.",
          text: [
            "Uma oferta clara tem três partes: quem você ajuda, que problema resolve e que resultado a pessoa obtém. Por exemplo: \"Ajudo pequenas empresas de construção a criar um programa escrito de segurança no trabalho para passarem nas inspeções e terem menos acidentes.\"",
            "Comece pelo que fazia muitas vezes e bem no serviço, e depois procure grupos civis com o mesmo problema. Um antigo sargento de logística pode ajudar pequenos distribuidores a planear o stock. Um antigo instrutor pode ajudar organizações sem fins lucrativos a integrar voluntários.",
            "Use um assistente de IA para ter ideias e depois teste a oferta perguntando a duas ou três pessoas reais dessa área: \"Este é um problema que pagaria para resolver?\""
          ],
          steps: ["Escreva três coisas que fazia muitas vezes e bem no serviço.", "Pergunte a um assistente de IA: \"Que empresas civis têm este problema?\"", "Escreva: \"Ajudo [quem] a [resolver o quê] para que [resultado].\"", "Pergunte a duas ou três pessoas dessa área se pagariam por isso."],
          words: [["Oferta", "uma frase clara que diz quem você ajuda, com quê, e o resultado."], ["Nicho", "um grupo pequeno e concreto de clientes em que você se concentra."]],
          slides: [
            { title: "As três partes de uma oferta", bullets: ["Quem você ajuda", "O problema que resolve", "O resultado que eles obtêm"] },
            { title: "Comece pelo seu serviço", bullets: ["O que fazia muitas vezes e bem", "Que civis têm o mesmo problema?"] },
            { title: "Teste com pessoas reais", bullets: ["\"Este é um problema que pagaria para resolver?\"", "Pergunte a duas ou três pessoas da área"] }
          ],
          tryIt: "Escreva a sua oferta de uma frase com o modelo \"Ajudo [quem] a [resolver o quê] para que [resultado].\" Peça a um assistente de IA para a tornar mais clara e depois leia-a a uma pessoa dessa área.",
          youCanNow: "escrever uma oferta de consultoria clara com base na sua experiência militar.",
          quickCheck: [
            { objective: "O2", q: "O que é um nicho?", options: ["Todos os clientes possíveis", "Um tipo de contrato", "Um programa gratuito do governo", "Um grupo pequeno e concreto de clientes em que se concentra"], answer: 3, why: "Um nicho é o grupo concreto que você serve, e isso torna a sua oferta clara." },
            { objective: "O2", q: "Escreveu \"Ajudo empresas com coisas.\" O que faz?", options: ["Usa-a como está", "Reescreve-a como \"Ajudo [quem] a [resolver o quê] para que [resultado]\"", "Torna-a mais longa com mais palavras da moda", "Tira o resultado"], answer: 1, why: "Uma oferta clara diz quem ajuda, o problema e o resultado." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ajuda oficial gratuita para donos de negócios veteranos",
          minutes: 5,
          goal: "Encontrar a ajuda gratuita para negócios de veteranos perto de você e saber o que faz cada serviço.",
          text: [
            "A U.S. Small Business Administration (SBA), a agência federal para pequenas empresas, gere o Boots to Business, que faz parte do Transition Assistance Program militar, e o Boots to Business Reboot para veteranos de todas as épocas. Os Veterans Business Outreach Centers (VBOCs) oferecem oficinas de plano de negócios, mentoria e formação.",
            "Se quer contratos com o governo, a SBA certifica pequenas empresas de veteranos e de veteranos com deficiência ligada ao serviço através do seu programa Veteran Small Business Certification, chamado VetCert, em certifications.sba.gov. Quando verificámos, em outubro de 2026, o VA dizia que as empresas que trabalham com o VA têm de estar registadas através da SBA.",
            "O VA também indica a formação em empreendedorismo como uma forma de usar alguns benefícios do GI Bill. Os nomes das empresas, as licenças e os impostos são definidos pelo seu estado e pelo IRS, por isso consulte o serviço de negócios do seu estado e irs.gov, ou pergunte a um conselheiro de um VBOC."
          ],
          steps: ["Abra a página da SBA sobre empresas de veteranos.", "Encontre o Veterans Business Outreach Center mais próximo.", "Veja as datas do Boots to Business ou do Reboot.", "Se quer trabalho com o governo, leia sobre o VetCert em certifications.sba.gov.", "Consulte o serviço de negócios do seu estado sobre licenças e registo."],
          words: [["SBA", "U.S. Small Business Administration, a agência federal dos EUA que ajuda as pequenas empresas."], ["VBOC", "Veterans Business Outreach Center: centros financiados pela SBA que ajudam donos de negócios veteranos."], ["VetCert", "a certificação da SBA para pequenas empresas de veteranos e de veteranos com deficiência ligada ao serviço."]],
          slides: [
            { title: "Ajuda gratuita da SBA para veteranos", bullets: ["Boots to Business (parte do TAP)", "Boots to Business Reboot, de qualquer época", "Veterans Business Outreach Centers"] },
            { title: "Contratos com o governo", bullets: ["VetCert em certifications.sba.gov", "Para empresas de veteranos e de veteranos com deficiência", "Trabalhar com o VA exige registo na SBA"] },
            { title: "Regras para montar o negócio", bullets: ["Nomes, licenças e impostos: o seu estado e o IRS", "Pergunte a um conselheiro de um VBOC", "Nenhum conselho legal ou fiscal só da IA"] }
          ],
          sources: [
            { name: "SBA: Empresas de veteranos", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: Apoio a contratos para veteranos (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: Apoio a pequenas empresas de veteranos", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: Como usar os seus benefícios do GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Encontre em sba.gov o Veterans Business Outreach Center mais perto de você. Anote o nome, como o contactar e uma pergunta que vai fazer sobre começar um negócio de consultoria.",
          youCanNow: "encontrar ajuda oficial gratuita para começar um negócio de consultoria de um veterano.",
          quickCheck: [
            { objective: "O3", q: "O que oferece um Veterans Business Outreach Center?", options: ["Empréstimos sem papelada", "Anúncios pagos para o seu negócio", "Ajuda gratuita com o plano de negócios e mentoria para veteranos", "Um primeiro cliente garantido"], answer: 2, why: "Os VBOCs dão aos veteranos ajuda gratuita para planear o negócio e mentoria." },
            { objective: "O3", q: "Tem uma pergunta sobre a licença de negócio de que precisa. A quem a leva?", options: ["Ao serviço de negócios do seu estado, a irs.gov ou a um conselheiro de um VBOC", "Só a um assistente de IA", "A um grupo nas redes sociais", "A um concorrente"], answer: 0, why: "As perguntas sobre licenças e impostos vão para serviços oficiais ou conselheiros, não para a IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Construir a sua oferta de consultoria",
        questions: [
          { objective: "O1", q: "O que é um consultor?", options: ["Um inspetor do governo", "Um empregado a tempo inteiro para toda a vida", "Um especialista de fora pago para resolver um problema concreto", "Um vendedor de um só produto"], answer: 2, why: "Os consultores são contratados para um trabalho e um tempo concretos." },
          { objective: "O1", q: "Pelo que pagam principalmente os clientes a um consultor?", options: ["Pelo seu julgamento e pelos resultados", "Pela sua assinatura de IA", "Pela sua farda", "Pela sua rapidez a escrever no teclado"], answer: 0, why: "A IA ajuda, mas os clientes pagam pela experiência." },
          { objective: "O2", q: "Qual é uma oferta clara?", options: ["\"Ligue-me.\"", "\"Faço coisas.\"", "\"Sou veterano.\"", "\"Ajudo pequenas empresas de construção a criar um programa de segurança para passarem nas inspeções.\""], answer: 3, why: "Diz quem, o problema e o resultado." },
          { objective: "O2", q: "Como testa se a sua oferta é real?", options: ["Pergunta só à IA", "Pergunta a pessoas dessa área se pagariam para resolver o problema", "Adivinha", "Imprime primeiro cartões de visita"], answer: 1, why: "Os compradores reais dizem-lhe se vale a pena pagar para resolver o problema." },
          { objective: "O3", q: "Onde podem os veteranos obter ajuda gratuita com o plano de negócios e mentoria?", options: ["Num vendedor de carros", "Num Veterans Business Outreach Center", "Num anúncio nas redes sociais", "Num grupo de criptomoedas"], answer: 1, why: "Os VBOCs são centros financiados pela SBA para donos de negócios veteranos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ganhar e fazer o trabalho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever a sua primeira mensagem de contacto",
          minutes: 5,
          goal: "Escrever uma mensagem curta e honesta que peça a um possível cliente uma chamada de 15 minutos.",
          text: [
            "Os seus primeiros clientes vêm muitas vezes de pessoas que já o conhecem: antigos chefes, grupos de veteranos, associações de negócios locais e organizações sem fins lucrativos onde faz voluntariado.",
            "Uma boa mensagem de contacto é curta: quem você é, o problema com que ajuda, uma prova (um resultado do serviço ou de um trabalho anterior) e um pedido pequeno, como uma chamada de 15 minutos.",
            "A IA pode fazer o rascunho, mas faça-o soar como você e tire tudo o que não for verdade. Nunca diga que tem uma certificação, uma credencial de segurança ou um resultado que não tem."
          ],
          steps: ["Escreva dez pessoas ou grupos que o conhecem ou são da sua área.", "Peça a um assistente de IA uma mensagem de 5 frases: quem você é, o problema, uma prova, uma chamada de 15 minutos.", "Corrija-a para soar como você.", "Verifique que tudo o que afirma é verdade.", "Envie-a a três pessoas."],
          words: [["Contacto (prospeção)", "falar com possíveis clientes para começar uma conversa."], ["Prova", "um resultado real que mostra que você sabe fazer o trabalho."]],
          slides: [
            { title: "Comece pelas pessoas que o conhecem", bullets: ["Antigos chefes e grupos de veteranos", "Associações de negócios locais", "Organizações onde faz voluntariado"] },
            { title: "Uma mensagem curta", bullets: ["Quem você é e o problema que resolve", "Uma prova real", "Um pedido pequeno: uma chamada de 15 minutos"] },
            { title: "Seja honesto", bullets: ["Faça-a soar como você", "Nada que não consiga provar"] }
          ],
          tryIt: "Peça a um assistente de IA o rascunho de uma mensagem de contacto de cinco frases para a sua oferta. Corrija-a para soar como você e para que tudo o que afirma seja verdade, e depois escreva os nomes de três pessoas a quem a vai enviar.",
          youCanNow: "escrever uma mensagem de contacto honesta que peça a um possível cliente uma chamada curta.",
          quickCheck: [
            { objective: "O4", q: "Qual é um bom pedido pequeno numa mensagem de contacto?", options: ["Assinar hoje um contrato de um ano", "Uma chamada de 15 minutos", "Pagar já um sinal", "Partilhar os registos financeiros"], answer: 1, why: "Um pedido pequeno e fácil, como uma chamada curta, torna mais provável um primeiro sim." },
            { objective: "O4", q: "O rascunho da IA diz que você tem \"20 anos de experiência em consultoria\". Não tem nenhuma. O que faz?", options: ["Deixa ficar; soa bem", "Muda para 10 anos", "Envia-o a mais pessoas", "Tira isso e diz a sua experiência militar real"], answer: 3, why: "Tudo o que afirma tem de ser verdade; a sua experiência real é a sua prova." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever uma proposta com IA",
          minutes: 6,
          goal: "Fazer com IA o rascunho de uma proposta de uma página e corrigi-lo até estar certo.",
          text: [
            "Uma proposta é o seu plano para o problema do cliente. Funciona como uma ordem de operações: situação (o problema), missão (o que vai fazer), execução (passos e prazo) e o que o cliente recebe (entregáveis).",
            "Dê à IA as suas notas da chamada com o cliente, sem dados privados do cliente, e peça uma proposta de uma página com esses títulos. Depois corrija a sério: corte tudo o que for vago, acerte as datas e deixe o âmbito claro para que o trabalho não continue a crescer.",
            "Quem define o preço é você, não a IA. Pense nas suas horas, nos seus custos e no valor que o resultado tem para o cliente. Pergunte a um conselheiro de um VBOC ou a outros consultores da sua área o que é normal."
          ],
          steps: ["Escreva as suas notas da conversa com o cliente (sem dados privados).", "Peça a um assistente de IA uma proposta de uma página: problema, o que vou fazer, prazo, entregáveis, preço.", "Torne o âmbito concreto: o que está incluído e o que não está.", "Ponha o seu próprio preço.", "Leia-a como se fosse o cliente: alguma coisa não está clara?"],
          words: [["Proposta", "um plano escrito com preço para resolver o problema de um cliente."], ["Âmbito", "exatamente que trabalho está incluído e qual não está."], ["Aumento do âmbito (scope creep)", "quando um trabalho continua a crescer além do que foi combinado."]],
          slides: [
            { title: "Proposta = ordem de operações", bullets: ["Situação: o problema", "Missão: o que vai fazer", "Execução: passos e prazo", "Entregáveis: o que o cliente recebe"] },
            { title: "A IA faz o rascunho, você corrige", bullets: ["Dê as notas, sem dados privados do cliente", "Corte palavras vagas, acerte as datas", "Um âmbito claro trava o aumento do âmbito"] },
            { title: "Quem define o preço é você", bullets: ["As suas horas e os seus custos", "O valor do resultado", "Pergunte a um conselheiro de um VBOC o que é normal"] }
          ],
          tryIt: "Use a sua oferta e um cliente inventado. Peça a um assistente de IA uma proposta de uma página com os cinco títulos, depois corrija o âmbito e ponha o seu próprio preço.",
          youCanNow: "fazer e corrigir com a ajuda da IA uma proposta de consultoria clara de uma página.",
          quickCheck: [
            { objective: "O5", q: "O que quer dizer âmbito numa proposta?", options: ["Exatamente que trabalho está incluído e qual não está", "A morada do cliente", "O tipo de letra que usa", "Só o seu preço por hora"], answer: 0, why: "O âmbito põe limites claros ao trabalho, e isso evita o aumento do âmbito." },
            { objective: "O5", q: "A IA sugere um preço para a sua proposta. O que faz?", options: ["Usa o preço da IA", "Não põe preço", "Define o seu próprio preço com base nas suas horas, custos e valor", "Pede ao cliente para escolher qualquer preço"], answer: 2, why: "Quem define o preço é você; a IA não conhece os seus custos nem o seu valor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Entregar o trabalho e proteger o cliente",
          minutes: 5,
          goal: "Definir regras para usar IA no trabalho para clientes que protejam as informações do cliente.",
          text: [
            "Os clientes confiam-lhe as suas informações: nomes do pessoal, dinheiro, planos e problemas. Não cole informações privadas ou confidenciais de um cliente numa ferramenta de IA pública, a não ser que o cliente tenha concordado e a ferramenta esteja aprovada para isso.",
            "Verifique tudo o que a IA produz antes de o cliente o ver: factos, números, nomes e leis. O responsável pelo trabalho é você, não a IA.",
            "Seja aberto sobre a forma como usa a IA. Basta uma frase simples na sua proposta: \"Uso ferramentas de IA para fazer rascunhos de documentos; reviso todo o trabalho e não partilho com elas as suas informações privadas.\""
          ],
          steps: ["Mantenha os dados privados do cliente fora das ferramentas de IA públicas.", "Use marcadores como [nome do cliente] nos rascunhos.", "Verifique cada facto, número e lei antes da entrega.", "Ponha na sua proposta uma frase sobre como usa a IA."],
          words: [["Confidencial", "informação que o cliente quer manter privada."], ["Ferramenta aprovada", "uma ferramenta de IA que o cliente aceitou que você use com as informações dele."]],
          slides: [
            { title: "Proteja as informações do cliente", bullets: ["Nenhum dado privado do cliente em IA pública", "Use marcadores como [nome do cliente]"] },
            { title: "O trabalho é seu", bullets: ["Verifique factos, números, nomes e leis", "A IA não é responsável; você é"] },
            { title: "Seja aberto sobre a IA", bullets: ["Diga na proposta como a usa", "\"Reviso todo o trabalho e protejo os seus dados\""] }
          ],
          tryIt: "Tarefa final: termine a sua proposta de uma página. Ponha a sua frase sobre o uso de IA, verifique que tudo o que afirma é verdade e escreva o nome do serviço oficial gratuito de apoio a negócios que vai contactar a seguir.",
          youCanNow: "oferecer consultoria com base na sua experiência militar, escrever uma proposta com IA e proteger as informações do seu cliente.",
          quickCheck: [
            { objective: "O6", q: "Para que serve um marcador como [nome do cliente]?", options: ["Esconde o seu próprio nome", "Torna a proposta mais longa", "Envia a proposta automaticamente", "Deixa-o fazer rascunhos com IA sem partilhar dados privados"], answer: 3, why: "Os marcadores mantêm os dados do cliente fora da IA enquanto faz o rascunho." },
            { objective: "O6", q: "Um cliente envia-lhe planos confidenciais e você quer ajuda da IA. O que faz primeiro?", options: ["Cola-os em qualquer IA pública", "Confirma que o cliente concordou e que a ferramenta está aprovada para isso", "Publica-os na internet para ter opiniões", "Partilha-os com outro cliente"], answer: 1, why: "As informações confidenciais do cliente só entram numa ferramenta de IA com o acordo do cliente e numa ferramenta aprovada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ganhar e fazer o trabalho",
        questions: [
          { objective: "O4", q: "De onde vêm muitas vezes os primeiros clientes de consultoria?", options: ["De lado nenhum", "De anúncios que aparecem ao acaso", "Só de chamadas a desconhecidos", "De pessoas e grupos que já o conhecem"], answer: 3, why: "A confiança de quem já o conhece abre portas mais depressa." },
          { objective: "O4", q: "Qual é um bom pedido pequeno numa mensagem de contacto?", options: ["Uma chamada de 15 minutos", "Um contrato de um ano", "Os dados bancários da pessoa", "Um grande pagamento adiantado"], answer: 0, why: "É fácil dizer sim a uma chamada curta." },
          { objective: "O5", q: "Quem deve definir o seu preço?", options: ["Um site qualquer", "A IA", "Você, com base nas horas, nos custos e no valor", "Só o cliente"], answer: 2, why: "O preço é uma decisão do seu negócio." },
          { objective: "O5", q: "O que é o aumento do âmbito (scope creep)?", options: ["Uma entrega rápida", "Um tipo de IA", "Um formulário legal", "Quando um trabalho continua a crescer além do que foi combinado"], answer: 3, why: "Um âmbito claro impede que o trabalho cresça sem ser pago." },
          { objective: "O6", q: "Pode colar os planos confidenciais de um cliente numa ferramenta de IA pública?", options: ["Sim, se poupar tempo", "Sempre", "Só se o cliente concordou e a ferramenta está aprovada para isso", "Sim, se os apagar depois"], answer: 2, why: "As informações do cliente precisam do acordo dele e de uma ferramenta aprovada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Oportunidades de Consultoria em IA",
    questions: [
      { objective: "O1", q: "Um entregável é:", options: ["O seu carro", "Aquilo que entrega no final, como um plano ou um relatório", "O número da sua fatura", "A ferramenta de IA"], answer: 1, why: "Os entregáveis são os resultados que o cliente recebe." },
      { objective: "O1", q: "Qual é uma forma de a IA ajudar os consultores?", options: ["Fazer rascunhos de propostas e relatórios", "Substituir todo o julgamento", "Assinar contratos", "Ter uma credencial de segurança"], answer: 0, why: "A IA acelera os rascunhos; quem decide continua a ser você." },
      { objective: "O1", q: "A consultoria em IA pode incluir:", options: ["Vender dados de clientes", "Piratear concorrentes", "Ajudar um pequeno grupo a escrever uma política simples de uso de IA", "Garantir lucros"], answer: 2, why: "Adotar a IA com segurança é uma necessidade real de consultoria." },
      { objective: "O2", q: "As três partes de uma oferta são:", options: ["Quem você ajuda, o problema e o resultado", "Logótipo, cor e tipo de letra", "Posto, unidade e base", "Preço, imposto e taxas"], answer: 0, why: "Estas partes tornam a oferta clara para quem compra." },
      { objective: "O2", q: "Um nicho é:", options: ["Uma aplicação de IA", "Um tipo de imposto", "Uma insígnia militar", "Um grupo pequeno e concreto de clientes em que se concentra"], answer: 3, why: "Concentrar-se torna a sua oferta mais fácil de vender." },
      { objective: "O2", q: "Um antigo instrutor pode oferecer-se para:", options: ["Pilotar aviões sem licença", "Ajudar organizações sem fins lucrativos a integrar voluntários", "Dar conselhos legais", "Vender criptomoedas"], answer: 1, why: "As habilidades de formação passam diretamente para este trabalho." },
      { objective: "O3", q: "Quem gere o Boots to Business?", options: ["Um banco privado", "A SBA, como parte do Transition Assistance Program", "Uma rede social", "O IRS"], answer: 1, why: "A SBA gere-o dentro do TAP." },
      { objective: "O3", q: "O Boots to Business Reboot é para:", options: ["Só estudantes", "Só oficiais no ativo", "Só civis", "Veteranos de todas as épocas, incluindo a Guarda Nacional e a Reserva"], answer: 3, why: "A SBA diz que o Reboot serve veteranos de todas as épocas." },
      { objective: "O3", q: "O VetCert é:", options: ["A certificação da SBA para pequenas empresas de veteranos e de veteranos com deficiência ligada ao serviço", "Um formulário de impostos", "Um site de empregos", "Um pagamento do GI Bill"], answer: 0, why: "A SBA gere o VetCert para os contratos com o governo." },
      { objective: "O3", q: "Onde se candidata ao VetCert?", options: ["Em qualquer chat de IA", "Num link recebido por SMS", "Em certifications.sba.gov", "Numa página de rede social"], answer: 2, why: "O site de certificações da SBA trata das candidaturas." },
      { objective: "O3", q: "As perguntas sobre licenças de negócio e impostos devem ir para:", options: ["Ninguém", "Só um chat de IA", "Um fórum qualquer", "O serviço de negócios do seu estado, irs.gov ou um conselheiro de um VBOC"], answer: 3, why: "Os serviços oficiais e os conselheiros dão as regras atuais." },
      { objective: "O4", q: "Uma boa mensagem de contacto inclui:", options: ["O seu número da Segurança Social", "A história completa da sua vida", "Quem você é, o problema, uma prova e um pedido pequeno", "Uma exigência de pagamento"], answer: 2, why: "Curta e concreta recebe respostas." },
      { objective: "O4", q: "Um rascunho da IA diz que tem uma certificação que não tem. Deve:", options: ["Deixá-la ficar", "Tirá-la", "Acrescentar mais duas", "Pedir ao cliente para não verificar"], answer: 1, why: "Tudo o que afirma tem de ser verdade." },
      { objective: "O5", q: "Uma proposta parece-se com que documento militar?", options: ["Uma ordem de operações", "Um pedido de licença", "Uma inspeção da farda", "Um recibo de vencimento"], answer: 0, why: "Os dois apresentam a situação, a missão e a execução." },
      { objective: "O5", q: "Âmbito, numa proposta, quer dizer:", options: ["Só o preço", "A mira de uma espingarda", "Exatamente que trabalho está incluído e qual não está", "A morada do cliente"], answer: 2, why: "Um âmbito claro evita conflitos." },
      { objective: "O5", q: "Quando pede à IA o rascunho de uma proposta, dê-lhe:", options: ["As suas notas, sem dados privados do cliente", "Os dados bancários do cliente", "As moradas de casa do pessoal", "Palavras-passe"], answer: 0, why: "Mantenha os dados privados do cliente de fora." },
      { objective: "O6", q: "Quem é responsável pelos erros num trabalho para um cliente feito com rascunhos de IA?", options: ["O cliente", "A empresa da IA", "Ninguém", "Você"], answer: 3, why: "Quem entrega o trabalho é você, por isso a responsabilidade é sua." },
      { objective: "O6", q: "O que deve verificar antes de entregar um trabalho feito com rascunhos de IA?", options: ["Só o tipo de letra", "Factos, números, nomes e leis", "Nada", "Só a ortografia"], answer: 1, why: "A IA pode errar nos factos." },
      { objective: "O6", q: "Como deve falar aos clientes do uso de IA?", options: ["Escondê-lo", "Uma frase clara na proposta sobre como a usa e protege os dados deles", "Dizer que a IA fez tudo", "Nunca falar disso"], answer: 1, why: "A abertura cria confiança." },
      { objective: "O6", q: "Um marcador como [nome do cliente] ajuda-o a:", options: ["Obter uma certificação", "Faturar mais depressa", "Saltar a proposta", "Fazer rascunhos com IA sem partilhar dados privados"], answer: 3, why: "Os marcadores mantêm os nomes reais fora das ferramentas de IA." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 11, 12, 14, 16, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Problema e oferta", objective: "O2", notYet: "O problema do cliente ou o que você vai fazer está vago.", meets: "Diz o problema do cliente e o que vai fazer, de acordo com a sua oferta.", exceeds: "Usa as palavras do próprio cliente para descrever o problema." },
      { name: "Âmbito, entregáveis e prazo", objective: "O5", notYet: "Não há âmbito, entregáveis nem prazo claros.", meets: "Âmbito claro (o que está e não está incluído), o que o cliente recebe e um prazo.", exceeds: "Diz como serão tratadas as mudanças ao âmbito." },
      { name: "O seu preço", objective: "O5", notYet: "Não há preço, ou o preço da IA foi usado como estava.", meets: "Um preço definido pelo aluno.", exceeds: "O aluno sabe explicar o preço a partir das horas, dos custos e do valor." },
      { name: "Informações do cliente protegidas", objective: "O6", notYet: "Não há frase sobre o uso de IA, ou foram colados dados do cliente numa IA pública.", meets: "Uma frase clara sobre como a IA é usada e como as informações do cliente são protegidas.", exceeds: "Foram usados marcadores em todos os rascunhos com IA." },
      { name: "Afirmações verdadeiras e próximo passo", objective: "O3", notYet: "Uma afirmação não é verdade, ou não há nenhum serviço indicado.", meets: "Tudo o que afirma é verdade, e um serviço oficial gratuito de apoio a negócios está indicado como próximo contacto.", exceeds: "O aluno tem uma pergunta pronta para esse serviço." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que enviam pelo menos três mensagens de contacto em 30 dias (inquérito de seguimento)",
      "Alunos que contactam um VBOC ou se inscrevem no Boots to Business em 60 dias",
      "Alunos que conseguem um primeiro cliente de consultoria pago em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou smartphone com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "O site gratuito sba.gov para encontrar um Veterans Business Outreach Center",
      "Um processador de texto para a proposta de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos alunos que pratiquem em voz alta a sua oferta de uma frase com um colega e a melhorem uma vez.",
      "Use clientes inventados na aula e exija marcadores para quaisquer dados de clientes.",
      "Não sugira preços; peça a cada aluno que explique como definiu o seu.",
      "Convide um conselheiro de um VBOC ou da SBA para a última sessão, para responder a perguntas sobre como montar o negócio.",
      "Avalie a proposta com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
