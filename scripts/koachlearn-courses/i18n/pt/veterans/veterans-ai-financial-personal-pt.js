"use strict";

// Koach Learn course (Portuguese translation of veterans/veterans-ai-financial-personal.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: VA, DFAS, TRICARE, CFPB, Military OneSource and DD-214 keep their US names. No investment advice.

module.exports = {
  id: "veterans-ai-financial-personal-pt",
  lang: "pt",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "IA para o Sucesso Financeiro e Pessoal",
  skills: "Usar a IA com segurança em perguntas sobre dinheiro, Fazer um orçamento mensal civil, Planear as mudanças de salário depois do serviço, Reconhecer burlas de dinheiro dirigidas a veteranos, Definir metas e uma rotina semanal, Encontrar ajuda oficial e gratuita sobre dinheiro",
  outcome: "fazer um orçamento mensal civil simples e uma rotina semanal com a ajuda de um assistente de IA, usando números arredondados e sem dados privados de contas, e verificar as perguntas sobre dinheiro numa fonte oficial.",
  about: [
    "Este curso é para veteranos e militares em transição que querem tomar conta do dinheiro e da vida do dia a dia depois do serviço. O salário, a casa e a rotina mudam todos quando você sai das forças armadas, e um plano torna essa mudança mais fácil.",
    "Vai usar um assistente de IA gratuito como ajudante de planeamento: para fazer um orçamento, planear o salário que vai perder e ganhar, reconhecer burlas, definir metas e criar uma rotina semanal. Vai aprender exatamente o que nunca deve escrever numa IA e onde encontrar ajuda oficial e gratuita sobre dinheiro.",
    "Este curso não dá conselhos de investimento. A IA é uma ajudante, não um consultor financeiro: verifique sempre as decisões sobre dinheiro numa fonte oficial ou com um profissional qualificado. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Use um assistente de IA para fazer um orçamento mensal civil de uma página com números arredondados (rendimentos, necessidades, desejos, poupança e pagamentos de dívidas), com uma linha para uma mudança de salário depois do serviço, e uma rotina semanal com três blocos de metas. Verifique que não tem números de contas nem dados privados, e escreva uma pergunta sobre dinheiro que vai levar a uma fonte oficial ou a um conselheiro.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição que estão a tomar conta do dinheiro e da vida do dia a dia depois do serviço, muitas vezes com família. Muitos estão a passar do salário militar, dos subsídios e de uma rotina fixa para um salário civil e um horário próprio.",
    startingPoint: "Sabem usar um smartphone ou um computador e uma calculadora. A maioria já recebeu um salário, mas nunca fez um orçamento civil do zero, e poucos usaram um assistente de IA para planear.",
    gap: "O salário, os custos da casa e a organização do dia mudam quando o serviço acaba, e os veteranos são alvo de burlas de dinheiro. Os alunos precisam de um orçamento simples, de uma rotina semanal e de metas claras, feitos com a ajuda de uma IA sem partilhar dados privados, e precisam de saber onde levar as perguntas sobre dinheiro para ter ajuda oficial e gratuita.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não é preciso saber de finanças",
      "Aparelhos: um smartphone ou um computador com internet, e uma calculadora",
      "Privacidade: só números arredondados; nenhum número de conta, de cartão, da Segurança Social (Social Security) ou de processo do VA em nenhum pedido à IA",
      "Sem conselhos de investimento: as decisões sobre dinheiro são verificadas numa fonte oficial ou com um profissional qualificado",
      "Tempo: lições de cerca de 5 minutos, que cabem entre as consultas de transição, o trabalho e a família"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e ao Futuro do Trabalho\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Quando tem uma pergunta sobre dinheiro", action: "fazer a pergunta a um assistente de IA usando números arredondados e sem dados privados", standard: "sem partilhar nenhum número de conta, de cartão ou de identificação" },
    { id: "O2", condition: "Usando os seus próprios números arredondados", action: "fazer uma tabela de orçamento mensal civil com um assistente de IA, com uma linha para um custo que muda depois do serviço", standard: "com totais que você próprio verificou numa calculadora" },
    { id: "O3", condition: "Com uma mensagem ou oferta sobre dinheiro ou apoios", action: "identificar os sinais de alerta de uma burla e escolher uma resposta segura", standard: "sem pagar nada e sem partilhar códigos nem dados privados" },
    { id: "O4", condition: "Para o dinheiro e a vida depois do serviço", action: "escrever três metas com um número e uma data e dividir uma delas em passos semanais com a IA", standard: "com todas as metas mensuráveis e com data" },
    { id: "O5", condition: "Usando as suas metas", action: "criar uma rotina semanal com três blocos de metas, incluindo uma revisão semanal do orçamento", standard: "e revê-la e ajustá-la todas as semanas" },
    { id: "O6", condition: "Com uma pergunta sobre dinheiro", action: "escolher a fonte oficial ou o conselheiro certo e escrever a pergunta", standard: "verificando as respostas da IA sobre dinheiro antes de agir" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O dinheiro depois do serviço",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usar a IA com segurança em perguntas sobre dinheiro",
          minutes: 4,
          goal: "Fazer uma pergunta sobre dinheiro a um assistente de IA com segurança, sem dados privados.",
          text: [
            "Um assistente de IA pode explicar palavras sobre dinheiro, fazer uma tabela de orçamento, comparar opções que você lhe dá e transformar uma lista confusa de contas num plano. É um ajudante rápido e paciente.",
            "Não é um consultor financeiro. Não conhece toda a sua situação, pode errar em regras e números e pode estar desatualizado. Use-o para compreender e organizar; verifique as decisões numa fonte oficial ou com um conselheiro qualificado.",
            "Nunca escreva numa IA o seu número da Segurança Social (Social Security), o número do seu DD-214 ou do seu processo no VA, números de banco ou de cartão, dados de acesso a contas ou palavras-passe. Use números arredondados: \"renda cerca de $1,200\" é tudo o que ela precisa."
          ],
          steps: ["Decida o que quer: uma explicação, uma tabela ou um plano.", "Use números arredondados, sem dados de contas.", "Faça a pergunta.", "Marque qualquer regra, taxa ou prazo para verificar numa fonte oficial."],
          words: [["Orçamento", "um plano de como o seu dinheiro entra e sai todos os meses."], ["Número arredondado", "um número próximo e simples, como $1,200, em vez de um valor exato ligado a uma conta."], ["DD-214 e VA", "o DD-214 é o documento de saída do serviço militar dos EUA; o VA é o Departamento dos Assuntos dos Veteranos dos EUA."]],
          slides: [
            { title: "A IA pode ajudar a", bullets: ["Explicar palavras sobre dinheiro", "Fazer uma tabela de orçamento", "Transformar uma lista de contas num plano"] },
            { title: "A IA não é", bullets: ["Um consultor financeiro", "Sempre certa ou atualizada", "Quem decide: quem decide é você"] },
            { title: "Nunca escreva", bullets: ["Números da Segurança Social, do DD-214 ou do processo no VA", "Números de banco ou de cartão, dados de acesso, palavras-passe", "Use números arredondados no lugar"] }
          ],
          tryIt: "Pergunte a um assistente de IA: \"Explique a diferença entre uma necessidade e um desejo num orçamento mensal, com três exemplos de cada.\" Verifique que o seu pedido não tem dados privados antes de o enviar.",
          youCanNow: "fazer perguntas sobre dinheiro a um assistente de IA com segurança e saber o que verificar noutro lugar.",
          quickCheck: [
            { objective: "O1", q: "Qual é a forma mais segura de falar à IA sobre a prestação do seu carro?", options: ["Escrever o número da conta do empréstimo", "Enviar uma foto do seu extrato bancário", "Escrever o número do seu cartão para ela verificar", "\"Prestação do carro cerca de $350 por mês\""], answer: 3, why: "Um número arredondado dá à IA o que ela precisa sem nenhum dado privado." },
            { objective: "O1", q: "A IA explica uma regra sobre dinheiro e dá uma taxa. O que faz?", options: ["Usa-a logo", "Verifica a regra e a taxa numa fonte oficial", "Pergunta a um desconhecido na internet", "Ignora todas as respostas da IA para sempre"], answer: 1, why: "A IA pode explicar, mas as regras e as taxas têm de ser verificadas numa fonte oficial." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer um orçamento mensal civil",
          minutes: 6,
          goal: "Fazer uma tabela de orçamento mensal com um assistente de IA usando números arredondados.",
          text: [
            "Na farda, alguns custos podiam estar cobertos ou ser pagos como subsídios, como os subsídios de casa e de alimentação, e os cuidados de saúde pelo TRICARE (o seguro de saúde militar dos EUA). Quando sai do serviço, muitos destes mudam ou acabam. O seu orçamento civil tem de os pagar com o seu salário ou os seus apoios. Confirme o seu último salário e os seus apoios com o seu serviço de finanças, o DFAS (o serviço de pagamentos militares dos EUA) ou o VA, em vez de adivinhar.",
            "Comece com quatro grupos: rendimentos (salário, apoios), necessidades (renda, água e luz, comida, transporte, seguros, saúde), desejos (comer fora, assinaturas), e poupança e pagamentos de dívidas. Peça à IA para fazer a tabela e somar cada grupo.",
            "Exemplo de pedido: \"Faça uma tabela de orçamento mensal. Rendimento cerca de $3,800. Renda $1,200, água e luz $200, compras de comida $450, prestação do carro $350, combustível $160, telefone $70, seguros $150, comer fora $200, assinaturas $40. Mostre os totais e o que sobra.\""
          ],
          steps: ["Escreva os seus rendimentos mensais com números arredondados.", "Escreva as necessidades, os desejos, a poupança e os pagamentos de dívidas.", "Peça à IA uma tabela com os totais e o que sobra.", "Acrescente os custos que estavam cobertos no serviço e agora não estão.", "Verifique você mesmo as contas com uma calculadora."],
          words: [["Subsídio", "dinheiro pago no serviço para um custo como a casa ou a comida."], ["Necessidade", "um custo que tem de pagar para viver e trabalhar, como a renda."], ["Desejo", "um custo que pode cortar, como comer fora."]],
          slides: [
            { title: "O que muda depois do serviço", bullets: ["Subsídios como os de casa e de comida podem acabar", "A cobertura de saúde pode mudar", "Confirme o seu salário e os seus apoios oficialmente"] },
            { title: "Quatro grupos do orçamento", bullets: ["Rendimentos", "Necessidades", "Desejos", "Poupança e pagamentos de dívidas"] },
            { title: "Deixe a IA fazer a tabela", bullets: ["Dê números arredondados", "Peça os totais e o que sobra", "Verifique você mesmo as contas"] }
          ],
          tryIt: "Peça a um assistente de IA para fazer a tabela do seu orçamento mensal com números arredondados. Acrescente uma linha para um custo que estava coberto enquanto serviu. Verifique os totais com uma calculadora.",
          youCanNow: "fazer uma tabela de orçamento mensal civil com números arredondados e verificar os totais.",
          quickCheck: [
            { objective: "O2", q: "Qual é a diferença entre uma necessidade e um desejo num orçamento?", options: ["Uma necessidade é algo que tem de pagar, como a renda; um desejo é algo que pode cortar", "Uma necessidade é qualquer coisa de que gosta", "Um desejo é sempre mais caro", "Não há diferença"], answer: 0, why: "As necessidades são custos obrigatórios; os desejos são escolhas que pode reduzir quando o dinheiro aperta." },
            { objective: "O2", q: "A tabela da IA diz que o total é $2,950, mas as linhas parecem dar mais. O que faz?", options: ["Confia no total da IA", "Apaga a tabela", "Soma você mesmo as linhas numa calculadora e corrige o total", "Arredonda o total para $3,000"], answer: 2, why: "A IA pode errar nas contas, por isso você verifica os totais." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reconhecer burlas de dinheiro dirigidas a veteranos",
          minutes: 5,
          goal: "Reconhecer os sinais de alerta de uma burla de dinheiro e saber o que fazer.",
          text: [
            "Os burlões visam os veteranos por causa dos apoios e das pensões. Armadilhas comuns: ofertas para \"comprar\" os seus pagamentos futuros de pensão ou de apoios em troca de uma quantia de uma vez agora (adiantamentos de pensão), pessoas que cobram para apresentar pedidos ao VA ou para \"aumentar\" a sua avaliação, ofertas de emprego falsas e chamadas de quem finge ser do VA.",
            "O Consumer Financial Protection Bureau (CFPB, o serviço dos EUA que protege as pessoas em assuntos de dinheiro) avisa os militares e os veteranos sobre os adiantamentos de pensão e explica os seus direitos. Os burlões agora também usam IA para escrever mensagens que parecem verdadeiras e até copiar vozes.",
            "Sinais de alerta: apressam você, pedem uma taxa adiantada, pedem cartões-presente ou uma transferência bancária, ou pedem um código enviado para o seu telefone. Pare, desligue e ligue de volta para um número que você mesmo encontrou no va.gov ou no site oficial. Também pode colar uma mensagem suspeita numa IA e perguntar \"Quais são os sinais de alerta nisto?\", depois de tirar os seus dados privados."
          ],
          steps: ["Repare na pressão, nas taxas adiantadas, nos cartões-presente, nas transferências ou nos pedidos de códigos.", "Pare e não pague nem partilhe nada.", "Encontre você mesmo o número oficial e ligue de volta.", "Tire os dados privados e depois peça à IA para mostrar os sinais de alerta.", "Denuncie, se perdeu dinheiro."],
          words: [["Adiantamento de pensão", "uma oferta para lhe pagar uma quantia de uma vez agora em troca dos seus pagamentos futuros de pensão ou de apoios, muitas vezes a um custo muito alto."], ["Burla", "um truque para roubar dinheiro ou informações."]],
          slides: [
            { title: "Armadilhas comuns", bullets: ["Ofertas de adiantamento de pensão", "Taxas para apresentar ou \"aumentar\" um pedido ao VA", "Ofertas de emprego falsas e chamadas falsas do VA"] },
            { title: "Sinais de alerta", bullets: ["Apressam você", "Taxa adiantada, cartões-presente ou transferência", "Pedem um código enviado para o seu telefone"] },
            { title: "O que fazer", bullets: ["Pare. Não pague nem partilhe", "Ligue de volta para um número que você encontrou", "Peça à IA para mostrar os sinais de alerta"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Escreva um pequeno exemplo de uma SMS de burla que oferece \"aumentar a sua avaliação do VA mediante uma taxa\". Peça a um assistente de IA para listar os sinais de alerta. Depois escreva o que faria se a recebesse.",
          youCanNow: "reconhecer os sinais de alerta das burlas de dinheiro dirigidas a veteranos e responder com segurança.",
          quickCheck: [
            { objective: "O3", q: "Qual destes é um sinal de alerta de burla?", options: ["Uma carta que pediu ao VA para enviar", "O extrato mensal normal do seu banco", "Pressão para pagar depressa, com cartões-presente ou uma taxa adiantada", "Um formulário gratuito no va.gov"], answer: 2, why: "Apressar você e pedir cartões-presente ou taxas adiantadas são sinais clássicos de burla." },
            { objective: "O3", q: "Uma SMS diz que os seus apoios acabam se não enviar o código que acabou de receber. O que faz?", options: ["Envia o código depressa", "Responde a perguntar quem são", "Envia metade do código", "Não responde; contacta o VA por um número que você mesmo encontrou"], answer: 3, why: "Os serviços verdadeiros não pedem os seus códigos; você contacta-os por um número que encontrou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O dinheiro depois do serviço",
        questions: [
          { objective: "O1", q: "O que deve escrever numa IA quando pede ajuda com o orçamento?", options: ["O número da sua conta bancária", "\"Renda cerca de $1,200\"", "O seu número da Segurança Social", "A palavra-passe do seu banco na internet"], answer: 1, why: "Os números arredondados dão à IA o que ela precisa sem dados privados." },
          { objective: "O1", q: "Com o dinheiro, a IA serve melhor para:", options: ["Tomar as decisões finais por você", "Escolher investimentos por você", "Explicar, organizar e fazer um plano que depois você verifica", "Guardar as suas palavras-passe"], answer: 2, why: "A IA ajuda a compreender e organizar; você verifica as decisões em fontes oficiais." },
          { objective: "O2", q: "Porque é que um orçamento civil precisa de linhas que um orçamento militar pode não ter?", options: ["Os civis não pagam renda", "Os impostos são mais baixos", "A IA diz que sim", "Alguns subsídios e custos cobertos mudam ou acabam depois do serviço"], answer: 3, why: "Custos como a casa podiam estar cobertos ou ser pagos como subsídios no serviço." },
          { objective: "O3", q: "Alguém oferece dinheiro agora pelos seus pagamentos futuros de pensão. Isto é:", options: ["Um adiantamento de pensão, sobre o qual o CFPB avisa", "Um salário normal", "Um apoio do VA", "Um reembolso de impostos"], answer: 0, why: "O CFPB avisa os militares e os veteranos sobre as ofertas de adiantamento de pensão." },
          { objective: "O3", q: "Alguém liga a dizer que é do VA e pede o código enviado para o seu telefone. Você:", options: ["Lê-lhe o código", "Desliga e liga para o VA por um número que você mesmo encontrou", "Dá-lhe antes o seu número da Segurança Social", "Envia um cartão-presente"], answer: 1, why: "Os serviços verdadeiros não pedem esse código; ligue de volta para um número que sabe que é verdadeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Metas, rotina e ajuda verdadeira",
      lessons: [
        {
          objectives: ["O4"],
          title: "Definir metas para o dinheiro e para a vida",
          minutes: 5,
          goal: "Escrever três metas claras com um número e uma data, e dividir uma em passos com a IA.",
          text: [
            "Uma meta funciona quando é concreta, mensurável e tem uma data: \"Poupar $1,000 para emergências até 31 de março\" é melhor do que \"poupar mais\". O mesmo vale para as metas de vida: \"terminar o meu curso de certificação até junho\" ou \"correr três vezes por semana\".",
            "Escreva três metas: uma de dinheiro, uma de carreira ou de estudo, e uma de saúde ou de família. Depois peça a uma IA para dividir uma delas em passos semanais: \"Divida esta meta em passos semanais: poupar $1,000 até 31 de março. Consigo cortar cerca de $60 por semana em comer fora e assinaturas.\"",
            "O Consumer Financial Protection Bureau tem ferramentas gratuitas para militares, incluindo uma ficha para definir metas. Use-a com o seu plano feito com a IA."
          ],
          steps: ["Escreva uma meta de dinheiro, uma de carreira e uma de saúde ou de família.", "Dê a cada uma um número e uma data.", "Peça à IA para dividir uma meta em passos semanais.", "Ponha o primeiro passo no seu calendário."],
          words: [["Fundo de emergência", "dinheiro guardado para custos de surpresa, como uma reparação do carro."], ["Mensurável", "pode-se contar, por isso sabe quando está feito."]],
          slides: [
            { title: "Uma meta que funciona", bullets: ["Concreta", "Mensurável: um número", "Uma data"] },
            { title: "Três metas", bullets: ["Dinheiro", "Carreira ou estudo", "Saúde ou família"] },
            { title: "Divida em partes", bullets: ["Peça à IA passos semanais", "Ponha o primeiro passo no calendário", "O CFPB tem uma ficha gratuita para definir metas"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle (goal-setting worksheet)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Escreva as suas três metas com um número e uma data. Peça a um assistente de IA para dividir a sua meta de dinheiro em passos semanais.",
          youCanNow: "escrever metas claras e dividir uma em passos semanais com a ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "O que torna uma meta clara?", options: ["Soar grande", "Ter um número e uma data", "Não ter prazo", "Ser escrita por outra pessoa"], answer: 1, why: "Um número e uma data deixam ver se cumpriu a meta." },
            { objective: "O4", q: "Quer poupar $600 em 3 meses. O que dá à IA para dividir isto em passos?", options: ["A meta, a data e quanto pode realmente pôr de lado para ela", "Os dados de acesso ao seu banco", "Só a palavra \"poupar\"", "O seu número da Segurança Social"], answer: 0, why: "A meta, a data e um valor realista deixam a IA fazer passos semanais úteis." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Criar uma rotina semanal",
          minutes: 5,
          goal: "Criar uma rotina semanal com três blocos de metas usando um assistente de IA.",
          text: [
            "A vida militar seguia um horário. A vida civil muitas vezes não, e muitos veteranos dizem que perder essa organização é uma das partes mais difíceis da transição. Você pode criar a sua.",
            "Dê à IA os seus horários fixos e as suas metas: \"Trabalho das 8 às 5, de segunda a sexta. As minhas metas: estudar para a minha certificação 4 horas por semana, fazer exercício 3 vezes por semana, rever o meu orçamento uma vez por semana. Faça um horário semanal simples numa tabela.\"",
            "Seja realista. Deixe tempo livre e tempo para a família. Reveja a rotina todos os domingos e ajuste-a; como numa missão, um plano só dura até ao primeiro contacto, e você adapta-se."
          ],
          steps: ["Escreva os seus horários fixos: trabalho, escola, família.", "Escreva as suas três metas da Lição 4.", "Peça à IA uma tabela com o horário semanal.", "Acrescente tempo livre e tempo para a família.", "Reveja-a e ajuste-a todas as semanas."],
          words: [["Rotina", "coisas que faz a horas certas todas as semanas."], ["Bloco de tempo", "uma hora marcada no seu calendário para uma tarefa."]],
          slides: [
            { title: "Reconstrua a sua organização", bullets: ["A vida militar tinha um horário", "A vida civil muitas vezes não tem", "Você pode criar a sua"] },
            { title: "Peça à IA uma tabela semanal", bullets: ["Os seus horários fixos", "Os seus três blocos de metas", "Tempo livre e tempo para a família"] },
            { title: "Reveja todas as semanas", bullets: ["Verifique-a todos os domingos", "Ajuste o que não funcionou", "Adapte-se, como em qualquer plano"] }
          ],
          tryIt: "Peça a um assistente de IA para fazer o seu horário semanal com três blocos de metas, incluindo uma revisão semanal do orçamento. Ponha-o no calendário do telefone ou imprima-o.",
          youCanNow: "criar uma rotina semanal realista que deixa tempo para as suas metas.",
          quickCheck: [
            { objective: "O5", q: "O que é um bloco de metas numa rotina semanal?", options: ["Uma semana sem planos", "Um lembrete para pagar a um burlão", "Uma lista de todas as tarefas que já fez", "Uma hora marcada todas as semanas para trabalhar numa meta"], answer: 3, why: "Um bloco de metas é tempo que reserva num dia certo para fazer avançar uma meta." },
            { objective: "O5", q: "Esta semana falhou dois blocos de metas por causa de consultas. O que faz?", options: ["Revê a rotina e muda os blocos para horas que funcionam", "Desiste da rotina", "Acrescenta mais cinco blocos", "Nunca mais marca consultas"], answer: 0, why: "Uma rotina funciona quando a revê todas as semanas e a ajusta à vida real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ter ajuda oficial e gratuita sobre dinheiro",
          minutes: 5,
          goal: "Escolher a fonte oficial certa para uma pergunta sobre dinheiro e escrever a pergunta.",
          text: [
            "Algumas perguntas sobre dinheiro precisam de uma pessoa ou de uma resposta oficial: apoios e pagamentos do VA, dívidas, impostos, problemas de crédito, escolhas para a reforma ou qualquer assunto legal. A IA pode ajudar a escrever a pergunta com clareza, mas não deve ser a resposta final.",
            "A ajuda oficial e gratuita inclui: o VA (va.gov) para apoios e pagamentos do VA; o Military OneSource, que oferece aconselhamento financeiro gratuito aos militares e aos familiares elegíveis (veja o guia de elegibilidade para saber se ainda tem direito depois de sair do serviço); e o Consumer Financial Protection Bureau (consumerfinance.gov) para os seus direitos sobre dinheiro e queixas.",
            "Os investimentos e as contas de reforma são decisões pessoais. Este curso não recomenda nenhum. Fale com um profissional qualificado e de confiança, e tenha cuidado com quem promete lucros grandes e rápidos."
          ],
          steps: ["Escreva a sua pergunta sobre dinheiro em uma ou duas frases.", "Peça à IA para a tornar clara, sem dados privados.", "Escolha a fonte certa: VA, Military OneSource ou CFPB.", "Contacte-os pelo número ou site que você mesmo encontrou."],
          words: [["Aconselhamento financeiro", "ajuda gratuita ou barata de um conselheiro formado para planear e resolver problemas de dinheiro."], ["CFPB", "Consumer Financial Protection Bureau: o serviço dos EUA que protege as pessoas em assuntos de dinheiro."]],
          slides: [
            { title: "Algumas perguntas precisam de resposta oficial", bullets: ["Apoios e pagamentos do VA", "Dívidas, impostos e problemas de crédito", "Reforma e perguntas legais"] },
            { title: "Ajuda oficial e gratuita", bullets: ["va.gov para os apoios do VA", "Aconselhamento financeiro do Military OneSource", "consumerfinance.gov para os direitos sobre dinheiro"] },
            { title: "Aqui não há dicas de investimento", bullets: ["Os investimentos são decisões pessoais", "Fale com um profissional qualificado", "Cuidado com promessas grandes e rápidas"] }
          ],
          sources: [
            { name: "Military OneSource: Financial counseling", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: Careers and employment (VA benefits and counseling)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Tarefa final: termine o seu plano de uma página: o seu orçamento mensal da Lição 2 com uma linha de mudança de salário, a sua rotina semanal com três blocos de metas e uma pergunta sobre dinheiro com a fonte oficial a que a vai levar. Verifique que não tem números de contas nem dados privados.",
          youCanNow: "escolher a fonte oficial e gratuita certa para uma pergunta sobre dinheiro e levar-lhe uma pergunta clara.",
          quickCheck: [
            { objective: "O6", q: "Porque escrever a sua pergunta sobre dinheiro antes de contactar uma fonte oficial?", options: ["Para a publicar na internet", "Para perguntar no lugar certo com clareza e ter uma resposta útil", "Para a IA responder no lugar deles", "Para nunca precisar de perguntar"], answer: 1, why: "Uma pergunta clara e escrita ajuda o conselheiro ou o serviço a dar a resposta certa." },
            { objective: "O6", q: "Tem uma pergunta sobre os seus pagamentos do VA. Onde a leva?", options: ["A um grupo numa rede social", "Só ao assistente de IA", "Ao VA, no va.gov", "A alguém que ligou a oferecer ajuda"], answer: 2, why: "As perguntas sobre os pagamentos do VA vão para o próprio VA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Metas, rotina e ajuda verdadeira",
        questions: [
          { objective: "O4", q: "Qual é a melhor meta?", options: ["\"Poupar mais\"", "\"Ser melhor com o dinheiro\"", "\"Poupar $1,000 para emergências até 31 de março\"", "\"Um dia comprar uma casa\""], answer: 2, why: "É concreta, mensurável e tem uma data." },
          { objective: "O5", q: "Muitos veteranos sentem falta de organização depois do serviço. O que ajuda?", options: ["Nunca planear", "Deixar a IA mandar na sua vida", "Trabalhar a toda a hora", "Criar uma rotina semanal e revê-la"], answer: 3, why: "Uma rotina realista que revê todas as semanas devolve a organização." },
          { objective: "O5", q: "A sua rotina semanal não funcionou esta semana. Você:", options: ["Revê-a e ajusta-a", "Desiste das rotinas", "Acrescenta mais horas de trabalho", "Apaga o seu calendário"], answer: 0, why: "Os planos ajustam-se à medida que aprende o que funciona." },
          { objective: "O6", q: "Que fonte oferece aconselhamento financeiro gratuito aos militares?", options: ["Um anúncio que aparece no ecrã", "Military OneSource", "Uma empresa de adiantamentos de pensão", "Qualquer chatbot de IA"], answer: 1, why: "O Military OneSource oferece aconselhamento financeiro gratuito aos militares e aos familiares elegíveis." },
          { objective: "O6", q: "Uma IA sugere um investimento concreto. O que deve fazer?", options: ["Comprar já", "Dizer aos amigos para comprarem", "Tratá-lo como não verificado e falar com um profissional qualificado", "Pôr nele todas as suas poupanças"], answer: 2, why: "Os investimentos são decisões pessoais; a IA não é um consultor financeiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Sucesso Financeiro e Pessoal",
    questions: [
      { objective: "O1", q: "Um assistente de IA pode ajudar com o dinheiro:", options: ["Guardando as suas palavras-passe", "Explicando termos e fazendo uma tabela de orçamento", "Garantindo lucros", "Apresentando o seu pedido ao VA por você"], answer: 1, why: "Explicar e organizar são tarefas seguras e úteis para a IA." },
      { objective: "O1", q: "O que é seguro escrever numa IA?", options: ["O número do seu DD-214", "O número do seu cartão", "A sua palavra-passe", "\"Compras de comida cerca de $450 por mês\""], answer: 3, why: "Os números arredondados sem dados de contas são seguros." },
      { objective: "O1", q: "As respostas da IA sobre regras e taxas de dinheiro devem ser:", options: ["Verificadas numa fonte oficial", "Aceites porque parecem seguras", "Publicadas na internet", "Totalmente ignoradas"], answer: 0, why: "A IA pode estar errada ou desatualizada sobre regras e taxas." },
      { objective: "O2", q: "Um orçamento é:", options: ["Um empréstimo", "Um formulário de impostos", "Um plano para o dinheiro que entra e sai todos os meses", "Uma conta bancária"], answer: 2, why: "Um orçamento planeia os rendimentos e os gastos." },
      { objective: "O2", q: "Qual destes é uma necessidade?", options: ["Uma assinatura de streaming", "A renda", "Comer fora", "Um videojogo novo"], answer: 1, why: "A renda é um custo que tem de pagar para viver." },
      { objective: "O2", q: "Depois de sair do serviço, que custos pode passar a pagar você mesmo?", options: ["Nenhum", "Só bilhetes de cinema", "Só presentes", "Custos que antes estavam cobertos ou eram pagos como subsídios, como a casa"], answer: 3, why: "Os subsídios e os custos cobertos podem mudar ou acabar depois do serviço." },
      { objective: "O2", q: "Onde deve confirmar o seu último salário e os seus apoios?", options: ["No seu serviço de finanças, no DFAS ou no VA", "Numa publicação numa rede social", "Num palpite da IA", "Numa SMS de um desconhecido"], answer: 0, why: "Os serviços oficiais têm os seus números verdadeiros." },
      { objective: "O2", q: "Depois de a IA fazer a tabela do orçamento, você deve:", options: ["Confiar nos totais", "Verificar você mesmo as contas", "Enviá-la a desconhecidos", "Acrescentar os dados de acesso ao seu banco"], answer: 1, why: "A IA pode errar nas contas; verifique com uma calculadora." },
      { objective: "O3", q: "Uma oferta de \"adiantamento de pensão\" é:", options: ["Um programa do VA", "Um reembolso de impostos", "Uma quantia agora em troca dos seus pagamentos futuros, muitas vezes muito cara", "Dinheiro grátis"], answer: 2, why: "O CFPB avisa sobre estas ofertas." },
      { objective: "O3", q: "Alguém cobra uma taxa adiantada para \"aumentar a sua avaliação do VA\". Isto é:", options: ["Normal", "Obrigatório", "Uma regra do VA", "Um sinal de alerta de burla"], answer: 3, why: "As taxas adiantadas e as promessas são sinais comuns de burla." },
      { objective: "O3", q: "Uma mensagem apressa você a pagar com cartões-presente. Você:", options: ["Para e não paga", "Paga depressa", "Partilha o seu número da Segurança Social", "Dá-lhes um código"], answer: 0, why: "A pressa e os cartões-presente são sinais clássicos de burla." },
      { objective: "O3", q: "Antes de colar uma mensagem suspeita numa IA, deve:", options: ["Acrescentar o número da sua conta", "Tirar os seus dados privados", "Reencaminhá-la aos amigos", "Responder a quem a enviou"], answer: 1, why: "Tire os dados privados e depois peça à IA para encontrar os sinais de alerta." },
      { objective: "O4", q: "Uma boa meta tem:", options: ["Nenhuma data", "Nenhum número", "Um número e uma data", "Só sentimentos"], answer: 2, why: "As metas concretas, mensuráveis e com data cumprem-se." },
      { objective: "O4", q: "Que serviço oferece uma ficha gratuita para definir metas aos militares?", options: ["Uma empresa de adiantamentos de pensão", "Um vendedor de carros", "Uma aplicação de criptomoedas", "O Consumer Financial Protection Bureau"], answer: 3, why: "A página do CFPB sobre o dinheiro dos militares tem um link para uma ficha para definir metas." },
      { objective: "O4", q: "Quando pede à IA para dividir uma meta em passos, inclua:", options: ["A meta, a data e quanto pode realmente pôr de lado para ela", "A palavra-passe do seu banco", "O seu número da Segurança Social", "Nada"], answer: 0, why: "Dados claros dão um plano realista." },
      { objective: "O5", q: "Uma rotina semanal deve incluir:", options: ["Só trabalho", "Blocos de metas e também tempo livre e para a família", "Nenhum descanso", "Só tempo de ecrã"], answer: 1, why: "Uma rotina realista equilibra as metas e o descanso." },
      { objective: "O5", q: "Com que frequência deve rever a sua rotina?", options: ["Nunca", "Uma vez por ano", "Todas as semanas", "Só quando as coisas correm mal"], answer: 2, why: "Uma revisão semanal deixa ajustar o que não está a funcionar." },
      { objective: "O6", q: "Qual é o lugar certo para uma pergunta sobre os seus pagamentos do VA?", options: ["Um anúncio que aparece no ecrã", "Um fórum qualquer", "Só um chatbot de IA", "O VA, no va.gov"], answer: 3, why: "O VA é a fonte oficial para os apoios do VA." },
      { objective: "O6", q: "Este curso recomenda investimentos?", options: ["Não; fale com um profissional qualificado", "Sim, criptomoedas", "Sim, qualquer ação da bolsa", "Sim, adiantamentos de pensão"], answer: 0, why: "Este curso não dá conselhos de investimento." },
      { objective: "O6", q: "Alguém promete lucros de investimento grandes e rápidos. Você deve:", options: ["Investir já", "Ter cuidado e confirmar com um profissional qualificado", "Dar-lhe os dados de acesso à sua conta", "Pedir dinheiro emprestado para investir"], answer: 1, why: "As promessas grandes e rápidas são um sinal de alerta." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      5,
      9,
      10,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Orçamento mensal",
        objective: "O2",
        notYet: "Faltam os rendimentos, as necessidades, os desejos, a poupança ou os pagamentos de dívidas, ou os totais estão errados.",
        meets: "As cinco partes estão lá com números arredondados, e os totais foram verificados numa calculadora.",
        exceeds: "O aluno sabe dizer que desejo cortaria primeiro se o dinheiro apertar."
      },
      {
        name: "Linha de mudança de salário",
        objective: "O2",
        notYet: "Não há nenhuma linha para um custo ou um salário que muda depois do serviço.",
        meets: "Uma linha mostra um custo que estava coberto no serviço ou uma mudança de salário depois do serviço.",
        exceeds: "O aluno anota onde confirmou o seu último salário ou os seus apoios."
      },
      {
        name: "Rotina semanal",
        objective: "O5",
        notYet: "A rotina tem menos de três blocos de metas ou nenhuma revisão do orçamento.",
        meets: "Três blocos de metas, incluindo uma revisão semanal do orçamento, e também tempo livre e para a família.",
        exceeds: "A rotina está no calendário do telefone ou impressa, com um dia marcado para a rever."
      },
      {
        name: "Nenhum dado privado",
        objective: "O1",
        notYet: "O plano ou um pedido tem um número de conta, de cartão ou de identificação.",
        meets: "Nenhum número de conta nem dado privado em lado nenhum.",
        exceeds: "O aluno sabe mostrar os pedidos com números arredondados que usou."
      },
      {
        name: "Pergunta para uma fonte oficial",
        objective: "O6",
        notYet: "Não há pergunta sobre dinheiro, ou não diz nenhuma fonte.",
        meets: "Uma pergunta clara sobre dinheiro e a fonte oficial ou o conselheiro certo para ela.",
        exceeds: "O aluno já marcou uma consulta ou contactou essa fonte."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem continuar a usar o orçamento e a rotina semanal 30 dias depois (inquérito de seguimento)",
      "Alunos que contactam uma fonte oficial e gratuita sobre dinheiro, como o Military OneSource ou o VA, em 30 dias",
      "Alunos que dizem ter reconhecido e evitado uma mensagem ou oferta de burla"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador com internet, e uma calculadora",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Papel, uma aplicação de notas ou uma folha de cálculo para o orçamento, e o calendário do telefone para a rotina",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes de qualquer prática, mostre como arredondar os números e lembre aos alunos que nunca devem escrever numa IA números de conta, de cartão, da Segurança Social ou do processo no VA.",
      "Não dê conselhos de investimento; envie as decisões sobre dinheiro para o Military OneSource, o VA ou um profissional qualificado.",
      "Use uma SMS de burla inventada na aula; nunca peça aos alunos para partilharem mensagens verdadeiras com dados privados.",
      "Avalie o plano final de uma página com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Os cônjuges ou familiares podem participar na lição do orçamento, se o aluno quiser."
    ]
  }
};
