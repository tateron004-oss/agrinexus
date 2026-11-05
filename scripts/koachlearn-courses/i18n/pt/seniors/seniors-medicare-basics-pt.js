"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-medicare-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: Medicare, CMS, SHIP, Social Security and the official sites and phone numbers stay as in the English.

module.exports = {
  id: "seniors-medicare-basics-pt",
  lang: "pt",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Noções Básicas do Medicare",
  skills: "Conhecer as Partes A, B, C e D, Comparar o Medicare Original e o Medicare Advantage, Proteger o seu número do Medicare, Encontrar o seu período de inscrição, Rever o seu plano todos os outonos, Ter ajuda gratuita do SHIP",
  outcome: "explicar o que cobrem as Partes A, B, C e D, calcular o seu próprio período de inscrição, fazer a lista do que precisa para comparar planos e ter ajuda gratuita e imparcial do seu Programa Estadual de Assistência em Seguros de Saúde (SHIP) ou do 1-800-MEDICARE.",
  about: [
    "Este curso é para pessoas que vão fazer 65 anos, para quem já tem Medicare e o acha confuso, e para familiares que ajudam um pai, uma mãe ou um avô com o seguro de saúde.",
    "Você vai aprender o que cobre cada parte do Medicare, a diferença entre o Medicare Original e o Medicare Advantage, quando pode inscrever-se ou fazer mudanças, como proteger o seu número do Medicare contra burlas e onde ter ajuda gratuita de uma pessoa real.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As regras, as datas e os custos do Medicare mudam. Confirme-os sempre em medicare.gov, ligando para o 1-800-MEDICARE ou com o seu conselheiro local do SHIP, e pergunte ao seu médico ou farmacêutico sobre os seus próprios cuidados."
  ],
  finalTask: "Faça um plano do Medicare numa página: o seu período de inscrição (os meses do seu Período de Inscrição Inicial, ou as datas da Inscrição Aberta deste ano se já tem Medicare), as partes que tem ou de que precisa, uma lista dos seus médicos, medicamentos e farmácia, três perguntas a que quer resposta e a ajuda gratuita que vai usar (o seu SHIP local, medicare.gov e 1-800-MEDICARE). Depois contacte o seu SHIP ou use a ferramenta de comparação de planos em medicare.gov.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas nos Estados Unidos que vão fazer 65 anos ou que já têm Medicare, e os familiares que as ajudam. Muitas sentem-se confusas com as partes, os prazos e a enorme quantidade de chamadas de vendas e anúncios em cada outono.",
    startingPoint: "Sabem que o Medicare existe e talvez já tenham um cartão. A maioria não sabe explicar as Partes A a D, não conhece o seu próprio período de inscrição e nunca usou a ferramenta de comparação de planos de medicare.gov nem ouviu falar do SHIP.",
    gap: "Perder um período de inscrição pode significar uma multa por atraso para toda a vida, e o plano errado pode deixar de fora os médicos ou os medicamentos de uma pessoa. Conhecer as partes, as suas próprias datas, como comparar planos e onde ter ajuda gratuita e imparcial protege a saúde e o dinheiro e afasta as pessoas das burlas do Medicare.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um telefone para chamadas, e um computador ou tablet para medicare.gov se houver",
      "Tempo: cerca de 5 minutos por lição, com calma",
      "Os custos e algumas regras mudam todos os anos; os alunos verificam os valores atuais em medicare.gov, ssa.gov ou com o SHIP",
      "O curso não recomenda nenhum plano; os números do Medicare nunca são escritos numa IA nem dados a quem liga"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as quatro partes do Medicare", action: "explicar o que cobrem as Partes A, B, C e D e os dois caminhos principais de cobertura", standard: "acertando pelo menos 4 de 5 perguntas" },
    { id: "O2", condition: "Quando alguém pede o seu número do Medicare ou um extrato mostra cuidados que nunca recebeu", action: "reconhecer uma burla do Medicare e denunciá-la ao 1-800-MEDICARE", standard: "dando o seu número só aos seus médicos, à sua farmácia e ao seu plano" },
    { id: "O3", condition: "Sabendo o mês em que faz 65 anos e o seguro do seu trabalho", action: "calcular o seu Período de Inscrição Inicial e se um Período de Inscrição Especial pode aplicar-se", standard: "com o mês de início e de fim certos, confirmados em ssa.gov, medicare.gov ou com o SHIP" },
    { id: "O4", condition: "Com os seus médicos, medicamentos e farmácia", action: "comparar planos em medicare.gov ou com o SHIP durante a Inscrição Aberta", standard: "olhando para o custo total do ano e confirmando que os seus médicos estão na rede" },
    { id: "O5", condition: "Quando tem perguntas sobre o Medicare", action: "contactar o seu SHIP local ou o 1-800-MEDICARE com as suas perguntas e listas prontas", standard: "anotando a data, o nome da pessoa e a resposta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: As partes do Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Para quem é o Medicare, e as Partes A e B",
          minutes: 5,
          goal: "Dizer quem pode ter Medicare e o que cobrem as Partes A e B.",
          text: [
            "O Medicare é o seguro de saúde do governo dos Estados Unidos para pessoas com 65 anos ou mais, pessoas com menos de 65 anos com certas deficiências e pessoas de qualquer idade com Doença Renal em Fase Terminal (insuficiência renal permanente). É gerido pelos Centros de Serviços Medicare e Medicaid (CMS).",
            "O Medicare tem partes, com nomes de letras. A Parte A é o seguro hospitalar. Ajuda a pagar os cuidados quando você fica internado num hospital, e também os cuidados paliativos e alguns cuidados de saúde em casa.",
            "A Parte B é o seguro médico. Ajuda a pagar as consultas, os cuidados de ambulatório (cuidados em que volta para casa no mesmo dia), muitos exames e serviços de prevenção, como alguns rastreios e vacinas.",
            "Juntas, a Parte A e a Parte B chamam-se Medicare Original. A maioria das pessoas não paga um prémio mensal pela Parte A se elas ou o cônjuge trabalharam e pagaram impostos do Medicare durante tempo suficiente. A maioria das pessoas paga um prémio mensal pela Parte B. Os prémios e as franquias mudam todos os anos, por isso procure os valores deste ano em medicare.gov ou pergunte ao SHIP."
          ],
          words: [["Medicare", "o programa de seguro de saúde do governo dos EUA para pessoas com 65 anos ou mais e algumas pessoas mais novas com deficiência."], ["Prémio", "o valor que paga todos os meses para ter o seguro."], ["Franquia", "o valor que paga pelos cuidados antes de o seguro começar a pagar."], ["Ambulatório", "cuidados em que volta para casa no mesmo dia, como uma consulta."]],
          slides: [
            { title: "Para quem é o Medicare", bullets: ["Pessoas com 65 anos ou mais", "Algumas pessoas com menos de 65 anos com deficiência", "Pessoas com insuficiência renal permanente"] },
            { title: "Parte A: seguro hospitalar", bullets: ["Internamentos no hospital", "Cuidados paliativos e alguns cuidados de saúde em casa"] },
            { title: "Parte B: seguro médico", bullets: ["Consultas e cuidados de ambulatório", "Muitos exames e serviços de prevenção"] },
            { title: "A + B = Medicare Original", bullets: ["A maioria não paga prémio pela Parte A", "A maioria paga um prémio mensal pela Parte B", "Custos deste ano: medicare.gov ou SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Parts A, B and D, who is eligible)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Escreva dois tipos de cuidados que você ou um familiar usou no último ano, como um internamento, uma consulta de rotina ou uma análise ao sangue. Ao lado de cada um, escreva se pertence à Parte A ou à Parte B.",
          youCanNow: "dizer para quem é o Medicare e separar os cuidados do dia a dia entre a Parte A e a Parte B.",
          quickCheck: [
            { objective: "O1", q: "O que é o Medicare Original?", options: ["A Parte A e a Parte B juntas", "Só a Parte D", "Um plano Medicare Advantage", "Uma apólice Medigap"], answer: 0, why: "A Parte A (hospital) e a Parte B (médico) juntas chamam-se Medicare Original." },
            { objective: "O1", q: "O seu vizinho fica internado no hospital durante três dias. Que parte ajuda sobretudo a pagar o internamento?", options: ["A Parte D", "A Parte B", "A Parte A", "Nenhuma delas"], answer: 2, why: "A Parte A é o seguro hospitalar para quando fica internado." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Partes C e D: Medicare Advantage e planos de medicamentos",
          minutes: 5,
          goal: "Explicar a diferença entre o Medicare Original e um plano Medicare Advantage, e o que cobre a Parte D.",
          text: [
            "A Parte C é o Medicare Advantage. São planos de seguradoras privadas aprovados pelo Medicare. Um plano Medicare Advantage dá-lhe todos os benefícios da Parte A e da Parte B num só plano, e a maioria também inclui cobertura de medicamentos. Muitos têm redes: listas de médicos e hospitais que se espera que você use.",
            "A Parte D é a cobertura de medicamentos receitados. Está disponível para todas as pessoas com Medicare, através de planos privados aprovados pelo Medicare. Quem tem o Medicare Original costuma juntar um plano de medicamentos da Parte D à parte.",
            "Assim, há dois caminhos principais. Caminho um: o Medicare Original (A e B), muitas vezes com um plano de medicamentos da Parte D à parte, e algumas pessoas também compram uma apólice de Seguro Suplementar do Medicare (Medigap) para ajudar nos custos que o Medicare Original não paga. Caminho dois: um plano Medicare Advantage (Parte C) que junta A, B e normalmente D.",
            "Nenhum caminho é o melhor para todos. Depende dos seus médicos, dos seus medicamentos, de onde vive e para onde viaja, e do seu orçamento. É exatamente isso que um conselheiro gratuito do SHIP o ajuda a comparar."
          ],
          words: [["Medicare Advantage (Parte C)", "um plano de uma empresa privada, aprovado pelo Medicare, que inclui a Parte A e a Parte B e muitas vezes cobertura de medicamentos."], ["Parte D", "a cobertura de medicamentos receitados do Medicare, oferecida através de planos privados."], ["Rede", "os médicos, hospitais e farmácias com quem um plano trabalha."], ["Medigap", "Seguro Suplementar do Medicare: uma apólice privada que ajuda a pagar custos que o Medicare Original não paga."]],
          slides: [
            { title: "Parte C: Medicare Advantage", bullets: ["Planos privados aprovados pelo Medicare", "Inclui A e B, a maioria inclui medicamentos", "Muitas vezes usa uma rede de médicos"] },
            { title: "Parte D: medicamentos receitados", bullets: ["Disponível para todos com Medicare", "Através de planos privados", "Muitas vezes juntada ao Medicare Original"] },
            { title: "Dois caminhos principais", bullets: ["Medicare Original + Parte D (+ Medigap para alguns)", "Ou um plano Medicare Advantage"] },
            { title: "Qual é o melhor para você?", bullets: ["Os seus médicos e medicamentos", "Onde vive e para onde viaja", "O seu orçamento: peça ao SHIP para comparar"] }
          ],
          sources: [{ name: "CMS: Medicare Advantage and Part D plans", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Faça a lista de todos os médicos que consulta e de todos os medicamentos que toma, com a dose, e da farmácia que usa. Se quiser, peça ajuda a um familiar. Guarde esta lista: é o que precisa para comparar planos.",
          youCanNow: "explicar as Partes C e D, descrever os dois caminhos principais do Medicare e fazer a lista de que precisa para comparar planos.",
          quickCheck: [
            { objective: "O1", q: "O que é um plano da Parte D?", options: ["Seguro hospitalar", "Cobertura de medicamentos receitados de um plano privado aprovado pelo Medicare", "Um plano dentário", "Uma pensão do governo"], answer: 1, why: "A Parte D é a cobertura de medicamentos receitados através de planos privados aprovados pelo Medicare." },
            { objective: "O1", q: "Um amigo diz que um caminho, o Medicare Original ou o Medicare Advantage, é o melhor para todos. O que responde?", options: ["Concordo e escolho esse", "Escolho sempre o prémio mais barato", "Escolho o que um vendedor ao telefone sugerir", "Depende dos seus médicos, medicamentos, de onde vive e do seu orçamento"], answer: 3, why: "Nenhum caminho é o melhor para todos; um conselheiro gratuito do SHIP ajuda a comparar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Proteger o seu cartão e número do Medicare",
          minutes: 4,
          goal: "Reconhecer uma burla do Medicare e saber a quem contar.",
          text: [
            "O seu cartão do Medicare, vermelho, branco e azul, tem um número do Medicare. Trate-o como um cartão de crédito. Mostre-o aos seus médicos, à sua farmácia e ao seu plano, e guarde-o num lugar seguro.",
            "Os burlões ligam, enviam SMS ou batem à porta a fingir que são do Medicare. Podem oferecer uma tala, um kit de testes ou um cartão novo \"grátis\", ou dizer que os seus benefícios vão acabar se não der o seu número. Um representante verdadeiro do Medicare não lhe liga sem aviso a pedir o seu número do Medicare ou os seus dados bancários.",
            "Verifique os seus extratos. O Medicare Original envia um Resumo do Medicare (Medicare Summary Notice), e os planos enviam uma Explicação de Benefícios (Explanation of Benefits). Procure cuidados que nunca recebeu. Se vir alguma coisa errada, ou se alguém ao telefone pedir o seu número, denuncie ao 1-800-MEDICARE.",
            "Se um neto ou um amigo o ajudar na internet, sente-se ao lado dele, use só o site oficial medicare.gov e nunca escreva o seu número do Medicare num chatbot nem num site a que chegou por uma mensagem SMS."
          ],
          steps: ["Guarde o cartão num lugar seguro e dê o número só aos seus médicos, à sua farmácia e ao seu plano.", "Desligue as chamadas inesperadas que pedem o seu número.", "Leia cada Resumo do Medicare ou Explicação de Benefícios.", "Denuncie qualquer coisa errada ao 1-800-MEDICARE."],
          words: [["Resumo do Medicare (Medicare Summary Notice)", "um extrato do Medicare Original com a lista dos cuidados cobrados com o seu número."], ["Explicação de Benefícios (Explanation of Benefits)", "um extrato de um plano que mostra o que foi cobrado e o que o plano pagou."], ["Burla", "um truque para roubar dinheiro ou informações pessoais."]],
          slides: [
            { title: "Trate o cartão como um cartão de crédito", bullets: ["Mostre-o aos seus médicos, farmácia e plano", "Guarde-o num lugar seguro"] },
            { title: "Sinais de burla", bullets: ["Talas, kits de testes ou um cartão novo \"grátis\"", "\"Os seus benefícios vão acabar\"", "Chamadas inesperadas a pedir o seu número"] },
            { title: "Verifique os seus extratos", bullets: ["Resumo do Medicare ou Explicação de Benefícios", "Procure cuidados que nunca recebeu", "Denuncie problemas ao 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov: Report fraud (confirm current steps here)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Encontre o seu Resumo do Medicare ou Explicação de Benefícios mais recente (ou peça ajuda a um familiar para o encontrar). Verifique três linhas: cada uma foi um cuidado que recebeu mesmo?",
          youCanNow: "guardar o seu número do Medicare em segurança, ler os seus extratos à procura de problemas e saber onde denunciar uma burla.",
          quickCheck: [
            { objective: "O2", q: "O que é um Resumo do Medicare (Medicare Summary Notice)?", options: ["Uma conta que tem de pagar logo", "Um anúncio de um plano novo", "Um extrato do Medicare Original com a lista dos cuidados cobrados ao Medicare", "Um cartão novo do Medicare"], answer: 2, why: "Verifique o seu Resumo do Medicare ou Explicação de Benefícios à procura de cuidados que nunca recebeu." },
            { objective: "O2", q: "Uma SMS diz que os seus benefícios do Medicare vão acabar se não responder com o seu número do Medicare. O que faz?", options: ["Não responde e denuncia ao 1-800-MEDICARE", "Responde depressa para manter os benefícios", "Envia metade do número", "Reencaminha-a aos amigos"], answer: 0, why: "O Medicare não o contacta sem aviso para pedir o seu número; denuncie." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: As partes do Medicare",
        questions: [
          { objective: "O1", q: "Que parte do Medicare é o seguro hospitalar?", options: ["A Parte D", "A Parte A", "A Parte B", "O Medigap"], answer: 1, why: "A Parte A ajuda a pagar internamentos, cuidados paliativos e alguns cuidados de saúde em casa." },
          { objective: "O1", q: "A sua avó tem uma consulta de rotina no médico. Que parte costuma ajudar a pagar?", options: ["A Parte A", "A Parte D", "A Parte B", "Nenhuma"], answer: 2, why: "A Parte B cobre consultas e cuidados de ambulatório." },
          { objective: "O1", q: "O que é o Medicare Advantage?", options: ["Um plano privado aprovado pelo Medicare que inclui as Partes A e B", "Um telefone grátis", "Um pagamento da Segurança Social", "Um tipo de hospital"], answer: 0, why: "Os planos da Parte C são planos privados que juntam A, B e normalmente cobertura de medicamentos." },
          { objective: "O1", q: "Onde deve procurar o prémio da Parte B deste ano?", options: ["Numa SMS de um desconhecido", "No jornal do ano passado", "No palpite de um vizinho", "Em medicare.gov ou com o seu conselheiro do SHIP"], answer: 3, why: "Os prémios mudam todos os anos; verifique na fonte oficial." },
          { objective: "O2", q: "Alguém liga a dizer que é do Medicare e precisa do seu número do Medicare para enviar uma tala grátis. O que faz?", options: ["Dá o número", "Desliga e denuncia ao 1-800-MEDICARE", "Dá antes o seu número do banco", "Liga de volta para o número que a pessoa deu"], answer: 1, why: "O Medicare não liga sem aviso a pedir o seu número; esta é uma burla comum." }
        ]
      }
    },
    {
      name: "Capítulo 2: Inscrever-se a tempo e ter ajuda",
      lessons: [
        {
          objectives: ["O3"],
          title: "Encontrar o seu período de inscrição",
          minutes: 6,
          goal: "Calcular o seu próprio Período de Inscrição Inicial e saber o que acontece se o perder.",
          text: [
            "A sua primeira oportunidade de se inscrever é o Período de Inscrição Inicial. Dura 7 meses: começa 3 meses antes do mês em que faz 65 anos, inclui o mês do seu aniversário e termina 3 meses depois. Exemplo do CMS: se faz 65 anos em junho, o seu período vai de março a setembro.",
            "Se já recebe benefícios da Segurança Social (Social Security) quando faz 65 anos, normalmente fica inscrito nas Partes A e B automaticamente. Se não, inscreve-se através da Segurança Social. Veja ssa.gov ou ligue para a Segurança Social para confirmar como funciona no seu caso.",
            "Se você ou o seu cônjuge ainda trabalham e têm seguro de saúde através desse trabalho, talvez possa esperar. O CMS diz que pode inscrever-se enquanto tem essa cobertura, ou nos 8 meses depois de o trabalho ou a cobertura acabar, o que acontecer primeiro. Isto é um Período de Inscrição Especial. Pergunte ao departamento de benefícios do seu empregador e ao SHIP antes de decidir esperar.",
            "Se perder o seu período e não tiver direito a um Período de Inscrição Especial, pode inscrever-se no Período de Inscrição Geral, de 1 de janeiro a 31 de março de cada ano, e a cobertura começa no mês a seguir à inscrição. Mas pode pagar uma multa por atraso enquanto tiver a Parte B: o CMS diz que o prémio pode subir 10% por cada período completo de 12 meses em que podia ter tido a Parte B e não teve. Também pode haver uma multa por ficar sem cobertura de medicamentos; pergunte ao SHIP ou veja medicare.gov."
          ],
          steps: ["Escreva o mês em que faz 65 anos.", "Conte 3 meses para trás e 3 meses para a frente: esse é o seu período de 7 meses.", "Se tem seguro de saúde do trabalho, pergunte ao seu empregador e ao SHIP se pode esperar.", "Marque no calendário o primeiro mês do seu período.", "Confirme os detalhes em ssa.gov, medicare.gov ou com o SHIP."],
          words: [["Período de Inscrição Inicial", "o seu primeiro período de 7 meses para se inscrever no Medicare, à volta dos seus 65 anos."], ["Período de Inscrição Especial", "uma oportunidade de se inscrever fora dos períodos normais por causa de uma situação da vida, como perder o seguro do trabalho."], ["Período de Inscrição Geral", "de 1 de janeiro a 31 de março de cada ano, para quem perdeu o primeiro período."], ["Multa por inscrição tardia", "um prémio mais alto que paga por se inscrever tarde."]],
          slides: [
            { title: "Período de Inscrição Inicial: 7 meses", bullets: ["3 meses antes do mês em que faz 65 anos", "O mês do seu aniversário", "3 meses depois"] },
            { title: "Exemplo", bullets: ["Faz 65 anos em junho", "Período: de março a setembro"] },
            { title: "Ainda trabalha com seguro do trabalho?", bullets: ["Talvez possa esperar", "Inscreva-se nos 8 meses depois de ele acabar", "Pergunte primeiro ao empregador e ao SHIP"] },
            { title: "Perdeu o período?", bullets: ["Inscrição Geral: de 1 de janeiro a 31 de março", "Multa da Parte B: até 10% por cada ano completo de atraso", "Confirme em medicare.gov ou com o SHIP"] }
          ],
          sources: [
            { name: "CMS: Original Medicare (Part A and B) eligibility and enrollment", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security: Sign up for Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Calcule o Período de Inscrição Inicial para você ou para um familiar: escreva o mês do aniversário e depois o primeiro e o último mês do período de 7 meses. Se essa pessoa já tem Medicare, escreva antes as datas do Período de Inscrição Geral.",
          youCanNow: "calcular um Período de Inscrição Inicial, saber quando pode esperar e saber quanto custa inscrever-se tarde.",
          quickCheck: [
            { objective: "O3", q: "O que é o Período de Inscrição Inicial?", options: ["O seu período de 7 meses: 3 meses antes do mês em que faz 65 anos, esse mês e 3 meses depois", "A Inscrição Aberta do outono", "Quando quiser", "Uma semana depois do seu aniversário"], answer: 0, why: "Dura 7 meses, à volta do mês em que faz 65 anos." },
            { objective: "O3", q: "Faz 65 anos em outubro e não tem seguro do trabalho. Que meses são o seu período?", options: ["Só outubro", "De janeiro a março", "De 15 de outubro a 7 de dezembro", "De julho a janeiro"], answer: 3, why: "Conte 3 meses para trás (julho) e 3 meses para a frente (janeiro)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Rever a sua cobertura todos os outonos",
          minutes: 5,
          goal: "Usar a Inscrição Aberta do outono para ver se o seu plano ainda serve.",
          text: [
            "Os planos mudam todos os anos: os custos, os medicamentos cobertos e os médicos que estão na rede. Em cada outono, o Medicare tem um período de Inscrição Aberta de 15 de outubro a 7 de dezembro. Durante este tempo pode mudar de plano Medicare Advantage ou de plano de medicamentos da Parte D, ou passar do Medicare Original para o Medicare Advantage ou ao contrário. As mudanças começam a 1 de janeiro. Se está contente com a sua cobertura, não tem de fazer nada.",
            "Antes da Inscrição Aberta, os planos enviam um Aviso Anual de Alterações (Annual Notice of Change). Leia-o para ver mudanças no seu prémio, nos seus medicamentos e nos seus médicos.",
            "Para comparar planos, use a ferramenta de comparação de planos em medicare.gov. Escreva os seus medicamentos e a sua farmácia a partir da lista que fez na Lição 2. Olhe para o custo total do ano, não só para o prémio mensal, e confirme que os seus médicos estão na rede.",
            "Tenha cuidado com chamadas de vendas e anúncios insistentes no outono. Ninguém deve pressioná-lo a mudar. Um conselheiro do SHIP é gratuito e não vende planos. Quem tem Medicare Advantage pode ter outra oportunidade de mudar de plano no início do ano; veja as datas em medicare.gov."
          ],
          steps: ["Leia o Aviso Anual de Alterações do seu plano quando chegar.", "Pegue na sua lista de médicos, medicamentos e farmácia.", "Entre 15 de outubro e 7 de dezembro, compare planos em medicare.gov ou com o SHIP.", "Veja o custo total do ano e se os seus médicos estão na rede.", "Se mudar, anote o novo plano e o número de confirmação."],
          words: [["Inscrição Aberta", "de 15 de outubro a 7 de dezembro de cada ano, quando as pessoas com Medicare podem mudar de plano para o ano seguinte."], ["Aviso Anual de Alterações (Annual Notice of Change)", "uma carta do seu plano em cada outono com a lista do que vai mudar no ano seguinte."], ["Formulário de medicamentos", "a lista de medicamentos cobertos por um plano (em inglês, \"formulary\")."]],
          slides: [
            { title: "Os planos mudam todos os anos", bullets: ["Custos, medicamentos cobertos, redes de médicos", "Leia o seu Aviso Anual de Alterações"] },
            { title: "Inscrição Aberta", bullets: ["De 15 de outubro a 7 de dezembro", "Mude de plano; o novo plano começa a 1 de janeiro", "Está contente? Não tem de fazer nada"] },
            { title: "Compare da forma certa", bullets: ["Escreva os seus medicamentos e a sua farmácia", "Olhe para o custo total do ano", "Confirme que os seus médicos estão na rede"] },
            { title: "Sem pressão", bullets: ["Ignore chamadas de vendas insistentes", "O SHIP é gratuito e não vende planos"] }
          ],
          sources: [
            { name: "CMS: Medicare Open Enrollment outreach materials", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Find and compare plans", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Escreva as datas da Inscrição Aberta deste ano no seu calendário. Depois encontre o Aviso Anual de Alterações do seu plano (ou peça ajuda a um familiar) e anote uma coisa que vai mudar no próximo ano. Se ainda não tem Medicare, escreva as perguntas que faria sobre um plano.",
          youCanNow: "usar a Inscrição Aberta do outono para rever o seu plano e comparar opções com os seus próprios medicamentos e médicos.",
          quickCheck: [
            { objective: "O4", q: "O que é o Aviso Anual de Alterações?", options: ["Uma carta do seu plano com as mudanças do próximo ano", "Uma multa do Medicare", "Um cartão novo", "Um formulário de impostos"], answer: 0, why: "Os planos enviam-no antes da Inscrição Aberta para você ver as mudanças nos custos, medicamentos e médicos." },
            { objective: "O4", q: "Dois planos de medicamentos parecem bons. Um tem um prémio mensal mais baixo. O que compara?", options: ["Só o prémio mensal", "O custo total do ano com os seus próprios medicamentos e farmácia", "Que plano lhe liga mais vezes", "O logótipo"], answer: 1, why: "Olhe para o custo total do ano, não só para o prémio mensal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ter ajuda gratuita do SHIP e do Medicare",
          minutes: 5,
          goal: "Contactar ajuda gratuita e imparcial sobre o Medicare e ir preparado com as suas perguntas.",
          text: [
            "Não tem de perceber o Medicare sozinho. Cada estado tem um Programa Estadual de Assistência em Seguros de Saúde, ou SHIP. O SHIP dá aconselhamento local e individual sobre o Medicare, sem custos para você. Os conselheiros são imparciais: não vendem seguros. Podem ajudar a comparar os custos dos planos, rever a cobertura, verificar as redes e explicar as suas opções. Encontre o seu em shiphelp.org.",
            "A ajuda do próprio Medicare: o site oficial medicare.gov e a linha telefónica 1-800-MEDICARE (1-800-633-4227), que o CMS diz estar aberta 24 horas por dia, 7 dias por semana. Para perguntas sobre a inscrição nas Partes A e B, contacte a Segurança Social em ssa.gov.",
            "Prepare-se antes de ligar: tenha o cartão do Medicare por perto (não leia o número a ninguém que lhe tenha ligado), a sua lista de médicos e medicamentos, as cartas do seu plano e as suas perguntas escritas. Tome notas: a data, o nome da pessoa e o que ela disse.",
            "Um familiar pode participar na chamada com a sua autorização. Se pedir a um assistente de IA para explicar uma carta do Medicare, tire primeiro o seu nome, o seu número do Medicare e outros dados privados, e mesmo assim confirme a resposta com o SHIP ou em medicare.gov."
          ],
          steps: ["Vá a shiphelp.org e escolha o seu estado para encontrar o seu SHIP local.", "Escreva as suas perguntas e junte a sua lista de médicos e medicamentos.", "Ligue para o SHIP ou para o 1-800-MEDICARE, ou use medicare.gov.", "Tome notas: data, nome e resposta.", "Marque o próximo prazo no seu calendário."],
          words: [["SHIP", "Programa Estadual de Assistência em Seguros de Saúde: aconselhamento local, gratuito e imparcial sobre o Medicare."], ["Imparcial", "que não tenta vender-lhe nada nem empurrá-lo para uma escolha."]],
          slides: [
            { title: "SHIP: ajuda local gratuita", bullets: ["Aconselhamento individual sobre o Medicare", "Sem custos, não vende seguros", "Encontre o seu em shiphelp.org"] },
            { title: "A ajuda do próprio Medicare", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), 24/7", "Perguntas sobre a inscrição: ssa.gov"] },
            { title: "Antes de ligar", bullets: ["A sua lista de médicos e medicamentos", "As cartas do seu plano", "As perguntas escritas"] },
            { title: "Durante a chamada", bullets: ["Tome notas: data, nome, resposta", "Um familiar pode participar", "Marque o próximo prazo no calendário"] }
          ],
          sources: [
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Talk to someone (confirm phone hours here)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Tarefa final: faça o seu plano do Medicare numa página com o seu período de inscrição, as partes que tem ou de que precisa, os seus médicos, medicamentos e farmácia, três perguntas e o número de telefone do seu SHIP, tirado de shiphelp.org. Depois ligue para o seu SHIP para marcar uma sessão de aconselhamento, ou use a ferramenta de comparação de planos em medicare.gov com a sua lista de medicamentos.",
          youCanNow: "encontrar e contactar ajuda gratuita sobre o Medicare e ir preparado com o seu próprio plano e as suas perguntas.",
          quickCheck: [
            { objective: "O5", q: "O que é o SHIP?", options: ["Uma seguradora", "Um plano Medicare Advantage", "Um programa gratuito e imparcial de aconselhamento sobre o Medicare em cada estado", "Um centro de chamadas de vendas"], answer: 2, why: "O SHIP dá aconselhamento individual e gratuito sobre o Medicare e não vende seguros." },
            { objective: "O5", q: "Vai ligar para o SHIP. O que tem preparado?", options: ["Nada; eles sabem tudo sobre você", "O seu cartão do banco", "As suas perguntas, a sua lista de médicos e medicamentos e as cartas do seu plano", "O seu número da Segurança Social para ler em voz alta primeiro"], answer: 2, why: "Prepare as suas perguntas, listas e cartas, e tome notas durante a chamada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Inscrever-se a tempo e ter ajuda",
        questions: [
          { objective: "O3", q: "Faz 65 anos em junho. Quando é o seu Período de Inscrição Inicial?", options: ["Só em junho", "De janeiro a março", "De 15 de outubro a 7 de dezembro", "De março a setembro"], answer: 3, why: "Começa 3 meses antes do mês do seu aniversário e termina 3 meses depois." },
          { objective: "O3", q: "O que pode acontecer se se inscrever tarde na Parte B sem um Período de Inscrição Especial?", options: ["Pode pagar um prémio mais alto enquanto tiver a Parte B", "Nada", "Recebe um reembolso", "Nunca pode ter Medicare"], answer: 0, why: "O CMS diz que o prémio da Parte B pode subir 10% por cada 12 meses completos de atraso." },
          { objective: "O4", q: "Quando é a Inscrição Aberta do outono do Medicare?", options: ["De 1 de janeiro a 31 de março", "No mês do seu aniversário", "De 15 de outubro a 7 de dezembro", "Em qualquer dia"], answer: 2, why: "Em cada outono, as pessoas com Medicare podem mudar de plano de 15 de outubro a 7 de dezembro." },
          { objective: "O4", q: "Qual é a melhor forma de comparar planos de medicamentos?", options: ["Escolher só o prémio mensal mais baixo", "Escrever os seus próprios medicamentos e farmácia e olhar para o custo total do ano", "Escolher o plano que alguém ao telefone recomenda", "Escolher o plano com o anúncio mais bonito"], answer: 1, why: "O custo total do ano com os seus próprios medicamentos mostra o preço real." },
          { objective: "O5", q: "O que é verdade sobre o SHIP?", options: ["Vende planos de seguro", "Cobra por cada chamada", "Dá aconselhamento gratuito e imparcial sobre o Medicare", "Só ajuda pessoas com menos de 65 anos"], answer: 2, why: "O aconselhamento do SHIP é gratuito, local e imparcial." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas do Medicare",
    questions: [
      { objective: "O1", q: "Quem pode ter Medicare?", options: ["Só pessoas com menos de 30 anos", "Pessoas com 65 anos ou mais, e algumas pessoas mais novas com deficiência ou insuficiência renal", "Só antigos militares", "Só pessoas que vivem no estrangeiro"], answer: 1, why: "O Medicare cobre pessoas com 65 anos ou mais, algumas pessoas com deficiência e pessoas com Doença Renal em Fase Terminal." },
      { objective: "O1", q: "A Parte B cobre sobretudo:", options: ["Internamentos", "Só medicamentos receitados", "Só limpezas dentárias", "Consultas e cuidados de ambulatório"], answer: 3, why: "A Parte B é o seguro médico para médicos e cuidados de ambulatório." },
      { objective: "O1", q: "O Medicare Original é:", options: ["A Parte A e a Parte B", "Só a Parte C", "Só a Parte D", "Um plano privado"], answer: 0, why: "Medicare Original quer dizer as Partes A e B juntas." },
      { objective: "O1", q: "A maioria das pessoas paga um prémio mensal por:", options: ["Nada", "Só a Parte A", "A Parte B", "O cartão do Medicare"], answer: 2, why: "A maioria não paga prémio pela Parte A, mas paga pela Parte B." },
      { objective: "O1", q: "A Parte D cobre:", options: ["Medicamentos receitados", "Internamentos", "Só óculos", "Habitação"], answer: 0, why: "A Parte D é a cobertura de medicamentos receitados do Medicare." },
      { objective: "O1", q: "Um plano Medicare Advantage normalmente:", options: ["Cobre só medicamentos", "Inclui as Partes A e B e muitas vezes cobertura de medicamentos", "É gerido pelo seu banco", "Substitui a Segurança Social"], answer: 1, why: "Os planos da Parte C juntam A, B e normalmente D." },
      { objective: "O4", q: "O que é a rede de um plano?", options: ["O site do plano", "O número de telefone do plano", "Os médicos, hospitais e farmácias com quem trabalha", "A conta mensal"], answer: 2, why: "Muitos planos esperam que você use a rede deles." },
      { objective: "O4", q: "O que deve ter preparado para comparar planos?", options: ["O PIN do seu banco", "Um anúncio do jornal", "Nada", "Uma lista dos seus médicos, medicamentos e farmácia"], answer: 3, why: "Os seus próprios médicos e medicamentos decidem que plano serve." },
      { objective: "O2", q: "Alguém ao telefone oferece um kit de testes grátis se der o seu número do Medicare. Isto é:", options: ["Um serviço normal do Medicare", "Provavelmente uma burla", "A renovação de uma receita", "Um conselheiro do SHIP"], answer: 1, why: "O Medicare não liga sem aviso a pedir o seu número; as ofertas grátis são um truque comum." },
      { objective: "O2", q: "O seu Resumo do Medicare mostra uma cadeira de rodas que nunca recebeu. Deve:", options: ["Denunciar ao 1-800-MEDICARE", "Ignorar", "Pagá-la", "Deitar fora o resumo"], answer: 0, why: "Cuidados que nunca recebeu podem ser fraude; denuncie." },
      { objective: "O3", q: "Quanto tempo dura o Período de Inscrição Inicial?", options: ["1 semana", "1 mês", "1 ano", "7 meses"], answer: 3, why: "3 meses antes, o mês do aniversário e 3 meses depois." },
      { objective: "O3", q: "Recebe benefícios da Segurança Social antes dos 65 anos. Normalmente você:", options: ["Nunca tem direito", "Paga uma multa", "Fica inscrito nas Partes A e B automaticamente", "Passa só para a Parte D"], answer: 2, why: "Quem já recebe da Segurança Social normalmente fica inscrito automaticamente; confirme em ssa.gov." },
      { objective: "O3", q: "Tem 66 anos e ainda tem seguro de saúde do seu trabalho atual. O que deve fazer antes de decidir esperar pela Parte B?", options: ["Nada; esperar está sempre bem", "Cancelar o seguro do trabalho", "Perguntar ao departamento de benefícios do seu empregador e ao SHIP", "Perguntar a um vendedor ao telefone"], answer: 2, why: "Um Período de Inscrição Especial pode aplicar-se, mas verifique primeiro a sua situação." },
      { objective: "O3", q: "O Período de Inscrição Geral vai:", options: ["De 1 de janeiro a 31 de março", "De 15 de outubro a 7 de dezembro", "Só no dia do seu aniversário", "De junho a agosto"], answer: 0, why: "O CMS define o Período de Inscrição Geral de 1 de janeiro a 31 de março de cada ano." },
      { objective: "O3", q: "A multa por atraso da Parte B pode subir o prémio em:", options: ["1% uma vez", "50% durante um mês", "Nada", "10% por cada 12 meses completos em que podia ter tido a Parte B e não teve"], answer: 3, why: "O CMS diz que a multa é de até 10% por cada período completo de 12 meses, enquanto tiver a Parte B." },
      { objective: "O4", q: "Durante a Inscrição Aberta do outono pode:", options: ["Mudar o seu número da Segurança Social", "Mudar o seu plano Medicare Advantage ou de medicamentos para o próximo ano", "Receber dinheiro do Medicare", "Só cancelar o Medicare"], answer: 1, why: "De 15 de outubro a 7 de dezembro pode mudar de plano para 1 de janeiro." },
      { objective: "O4", q: "Em cada outono o seu plano envia uma carta com as mudanças do próximo ano. É o:", options: ["Aviso Anual de Alterações", "Cartão de aniversário", "Declaração de impostos", "Relatório de crédito"], answer: 0, why: "Leia o Aviso Anual de Alterações antes da Inscrição Aberta." },
      { objective: "O5", q: "Onde encontra o seu SHIP local?", options: ["Num anúncio que aparece no ecrã", "Num link de uma SMS", "Em shiphelp.org", "Com qualquer agente de seguros"], answer: 2, why: "shiphelp.org tem a lista do SHIP de cada estado." },
      { objective: "O5", q: "Quer pedir a um assistente de IA para explicar uma carta do Medicare. Primeiro deve:", options: ["Colar o seu número do Medicare", "Acrescentar os seus dados bancários", "Enviar uma foto do seu cartão", "Tirar o seu nome, o número do Medicare e outros dados privados"], answer: 3, why: "Nunca dê números privados a ferramentas de IA; depois confirme com o SHIP ou em medicare.gov." },
      { objective: "O5", q: "Quando liga para o SHIP ou para o 1-800-MEDICARE, um bom hábito é:", options: ["Desligar depressa", "Tomar notas: data, nome e resposta", "Ler o seu número a quem lhe ligou", "Esquecer as suas perguntas"], answer: 1, why: "As notas ajudam a lembrar e a dar seguimento." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [1, 4, 7, 8, 10, 14, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Período de inscrição", objective: "O3", notYet: "Não tem período, ou os meses ou as datas estão errados.", meets: "Os meses certos do Período de Inscrição Inicial, ou as datas da Inscrição Aberta deste ano se já tem Medicare.", exceeds: "Indica se um Período de Inscrição Especial pode aplicar-se e onde isso foi confirmado." },
      { name: "Partes que tem ou de que precisa", objective: "O1", notYet: "Faltam partes ou estão trocadas.", meets: "Faz a lista das partes que tem ou de que precisa e do que cada uma cobre.", exceeds: "Diz que caminho (Medicare Original ou Medicare Advantage) está a considerar, e porquê." },
      { name: "Pronto para comparar", objective: "O4", notYet: "Não tem lista de médicos, medicamentos ou farmácia.", meets: "Uma lista de médicos, medicamentos e farmácia, pronta para a ferramenta de comparação de planos.", exceeds: "Usou a ferramenta ou o SHIP para comparar o custo total do ano e as redes." },
      { name: "Ajuda gratuita e perguntas", objective: "O5", notYet: "Não tem perguntas, ou não indica ajuda gratuita.", meets: "Três perguntas claras e a ajuda gratuita que vai usar: o seu SHIP local, medicare.gov e 1-800-MEDICARE.", exceeds: "Contactou o SHIP ou usou medicare.gov, e anotou a data, o nome e a resposta." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que contactam o seu SHIP ou usam a ferramenta de comparação de planos de medicare.gov em 30 dias (inquérito de seguimento)",
      "Alunos que se inscrevem dentro do seu período e evitam uma multa por atraso",
      "Alunos que denunciam ao 1-800-MEDICARE uma suspeita de burla do Medicare ou uma cobrança errada"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel e caneta para o plano do Medicare numa página",
      "Uma lista dos médicos, medicamentos e farmácia do aluno",
      "Um telefone, e um computador ou tablet com internet para medicare.gov e shiphelp.org se houver",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Não recomende nenhum plano nem dê conselhos sobre seguros; encaminhe os alunos para o seu SHIP local, que é gratuito e imparcial.",
      "Verifique os prémios e os detalhes da Inscrição Aberta deste ano em medicare.gov antes de cada sessão.",
      "Nunca peça aos alunos o seu número do Medicare; use um cartão de exemplo para praticar.",
      "Se possível, convide um conselheiro local do SHIP para uma sessão, sobretudo antes de 15 de outubro.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
