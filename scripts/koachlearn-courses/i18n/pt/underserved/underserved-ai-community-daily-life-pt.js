"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-community-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "underserved-ai-community-daily-life-pt",
  lang: "pt",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "IA para a Comunidade e o Dia a Dia",
  skills: "Planear a semana da família, Fazer um plano de refeições económico, Encontrar e verificar ajuda local, Conduzir uma reunião da comunidade, Escrever mensagens claras para o grupo",
  outcome: "usar um assistente de IA gratuito para organizar o dia a dia e o trabalho na comunidade: planear a semana e as refeições da família com pouco dinheiro, encontrar ajuda local e verificá-la, e organizar uma pequena reunião da comunidade com uma ordem de trabalhos, um lembrete e uma lista de recursos.",
  about: [
    "A vida fica cheia: turnos de trabalho, ir buscar os filhos à escola, consultas, igreja, desporto e ajudar os vizinhos. Um assistente de IA gratuito pode tirar dos seus ombros uma parte do planeamento.",
    "No Capítulo 1 vai planear uma semana da família e um plano de refeições económico, e encontrar ajuda local quando o dinheiro é pouco. No Capítulo 2 vai usar a IA para juntar a sua comunidade: uma ordem de trabalhos para a reunião, mensagens claras para o grupo e uma lista de recursos locais.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Organize uma pequena reunião para um grupo de que faz parte (um grupo do bairro, de pais, da igreja ou de inquilinos). Use um assistente de IA para escrever uma ordem de trabalhos de uma página e uma mensagem curta de lembrete, e depois faça uma lista de três recursos de ajuda local (por exemplo comida, contas de água e luz e ajuda para emprego) que você mesmo verificou em sites oficiais ou através do 211.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos de comunidades desfavorecidas que conciliam trabalho, família e papéis na comunidade: pais, cuidadores, e membros ou líderes de grupos do bairro, de pais, da igreja e de inquilinos.",
    startingPoint: "Usam o telefone para chamadas, SMS e algumas aplicações, e planeiam a semana de cabeça ou em papel. Poucos já usaram um assistente de IA para planear, e muitos não conhecem o 211.",
    gap: "As famílias ocupadas faltam a consultas, gastam demais em comida e têm dificuldade em encontrar ajuda local, e os grupos da comunidade perdem tempo em reuniões sem plano. Um assistente de IA gratuito pode fazer o planeamento, mas os alunos precisam de o usar com segurança e verificar tudo o que ele diz sobre programas locais.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca",
      "Custo: só ferramentas gratuitas",
      "A IA não sabe os preços de hoje nem que programas estão abertos; os alunos verificam no 211 e em fontes oficiais",
      "Privacidade: só primeiros nomes ou papéis, e nenhum dado de saúde ou de dinheiro de outras pessoas nos pedidos"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma semana cheia de turnos, escola e consultas", action: "usar um assistente de IA para transformar a sua lista num horário dia a dia e resolver os choques", standard: "usando só primeiros nomes ou papéis, e sendo você a tomar as decisões finais" },
    { id: "O2", condition: "Com o número de pessoas da sua casa, o seu orçamento e a comida que tem", action: "criar um plano de cinco jantares e uma lista de compras com um assistente de IA", standard: "comparando o custo com os preços reais da sua loja" },
    { id: "O3", condition: "Com uma necessidade real, como comida, renda ou contas de água e luz", action: "encontrar um programa local através do 211 e confirmá-lo numa fonte oficial", standard: "anotando o número de telefone oficial antes de ir" },
    { id: "O4", condition: "Para um grupo de que faz parte", action: "escrever uma ordem de trabalhos de uma página para uma reunião com um assistente de IA", standard: "com os temas por ordem, horários, o tema mais importante no início e tempo para perguntas" },
    { id: "O5", condition: "Antes e depois de uma reunião do grupo", action: "escrever um lembrete e transformar notas soltas num resumo com tarefas", standard: "sem dados privados, e verificado com alguém que esteve lá" },
    { id: "O6", condition: "Para três necessidades da sua comunidade", action: "criar uma lista de recursos de uma página com números oficiais e horários que você mesmo verificou", standard: "com a data em que a verificou" }
  ],
  chapters: [
    {
      name: "Capítulo 1: A IA em casa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear a semana da sua família",
          minutes: 5,
          goal: "Usar um assistente de IA para transformar uma semana confusa num horário claro.",
          text: [
            "Quando os turnos de trabalho, a escola, as consultas e os recados se acumulam, é fácil esquecer alguma coisa. Um assistente de IA pode organizar a sua lista num plano dia a dia.",
            "Escreva tudo o que precisa de fazer esta semana, por qualquer ordem, com as horas que já sabe. Use primeiros nomes ou papéis (\"o meu filho mais velho\", \"a avó\") em vez de nomes completos. Depois peça: \"Organize isto num horário dia a dia. Mostre os choques.\"",
            "Procure os choques, quando duas coisas acontecem à mesma hora. Peça ideias à IA, como uma boleia partilhada ou mudar um recado de dia, mas quem toma a decisão final é você."
          ],
          steps: ["Faça a lista de tudo para a semana, por qualquer ordem, com as horas que já sabe.", "Peça à IA para a organizar num horário dia a dia e mostrar os choques.", "Peça ideias para resolver cada choque.", "Copie o plano final para o calendário do telefone ou para um papel no frigorífico."],
          words: [["Horário", "um plano que mostra o que acontece em cada dia e a que hora."], ["Choque", "quando duas coisas estão marcadas para a mesma hora."]],
          slides: [
            { title: "Muita coisa para lembrar?", bullets: ["Turnos, escola, consultas, recados", "A IA pode organizar tudo num plano"] },
            { title: "Como pedir", bullets: ["Faça a lista de tudo, por qualquer ordem", "Use primeiros nomes ou papéis, não nomes completos", "\"Faça um horário dia a dia. Mostre os choques.\""] },
            { title: "Resolver os choques", bullets: ["Peça ideias: boleia partilhada, mudar um recado", "Quem toma a decisão final é você", "Ponha no calendário ou no frigorífico"] }
          ],
          tryIt: "Faça a lista de tudo o que a sua casa tem de fazer esta semana. Peça a um assistente de IA para a transformar num horário dia a dia e mostrar os choques.",
          youCanNow: "transformar uma semana cheia num horário claro e ver os choques a tempo.",
          quickCheck: [
            { objective: "O1", q: "O que deve escrever primeiro quando planeia a semana com a IA?", options: ["Tudo o que precisa de fazer, com as horas que já sabe", "Os nomes completos e os aniversários da família", "Só o dia mais difícil", "A palavra-passe do trabalho"], answer: 0, why: "A IA precisa da lista completa e das horas que já sabe para a organizar num horário." },
            { objective: "O1", q: "A IA sugere faltar à consulta médica do seu filho para resolver um choque. O que faz?", options: ["Faz o que a IA diz", "Pede outras ideias, como uma boleia partilhada, e decide você", "Cancela tudo nesse dia", "Deixa de usar o horário"], answer: 1, why: "A IA dá ideias, mas quem toma a decisão final pela sua família é você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer um plano de refeições com pouco dinheiro",
          minutes: 5,
          goal: "Fazer uma semana de refeições e uma lista de compras que caibam no seu orçamento.",
          text: [
            "Um assistente de IA pode planear refeições com o que você já tem, com o que a sua família gosta e com o que pode gastar.",
            "Diga-lhe: quantas pessoas são, o seu orçamento, as comidas de que a família gosta ou que não pode comer, o que tem na cozinha e quanto tempo tem para cozinhar. Peça uma lista de compras organizada por secções da loja.",
            "A IA não sabe os preços de hoje na sua loja, por isso veja os custos que ela dá apenas como uma ideia aproximada. Veja o folheto semanal ou a aplicação da loja. Para necessidades de saúde como diabetes ou alergias, siga os conselhos do seu médico ou nutricionista."
          ],
          steps: ["Veja que comida já tem em casa.", "Diga à IA o número de pessoas, o orçamento, os gostos, as alergias e o tempo para cozinhar.", "Peça cinco jantares e uma lista de compras organizada por secções da loja.", "Compare com os preços reais da sua loja e faça ajustes."],
          words: [["Orçamento", "o dinheiro que planeia gastar."], ["Alimentos básicos", "comidas simples que usa muitas vezes, como arroz, feijão, farinha e óleo."]],
          slides: [
            { title: "A IA pode planear refeições", bullets: ["Com o que você já tem", "Com o que a sua família gosta", "Dentro do seu orçamento"] },
            { title: "Diga-lhe", bullets: ["Número de pessoas e orçamento", "Gostos, alergias, tempo para cozinhar", "O que já tem na cozinha"] },
            { title: "Verifique antes de comprar", bullets: ["A IA não sabe os preços de hoje", "Veja o folheto ou a aplicação da loja", "Saúde: siga o seu médico"] }
          ],
          tryIt: "Peça a um assistente de IA cinco jantares para a sua casa com comida que já tem e um orçamento que você escolhe, com uma lista de compras organizada por secções da loja.",
          youCanNow: "fazer um plano de refeições económico e uma lista de compras com a IA, e compará-los com os preços reais.",
          quickCheck: [
            { objective: "O2", q: "Porque organizar a lista de compras por secções da loja?", options: ["Torna a comida mais barata", "A IA precisa disso", "Torna as compras mais rápidas", "As lojas obrigam"], answer: 2, why: "Organizar por secções, como frutas e legumes ou lacticínios, poupa tempo na loja." },
            { objective: "O2", q: "Tem arroz, feijão e ovos em casa. O que diz à IA?", options: ["Nada; ela adivinha", "Só o seu orçamento", "O seu restaurante preferido", "As comidas que já tem, para ela planear com elas"], answer: 3, why: "Planear com a comida que já tem poupa dinheiro e evita desperdício." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar ajuda local quando o dinheiro é pouco",
          minutes: 5,
          goal: "Encontrar um recurso local para uma necessidade real e verificá-lo numa fonte oficial.",
          text: [
            "Muitas famílias precisam de ajuda de vez em quando: com comida, renda, contas de água e luz, cuidado dos filhos ou emprego. Pedir ajuda faz parte de cuidar da sua família.",
            "O 211 é uma linha confidencial nos Estados Unidos que liga as pessoas a ajuda local com habitação, comida, transporte, saúde e mais. Pode ligar para o 211, e em muitas zonas também há SMS ou conversa pela internet. A biblioteca e o centro comunitário da sua zona também têm listas de ajuda local.",
            "Um assistente de IA pode ajudar você a perceber que tipos de ajuda existem e que perguntas fazer. Mas pode indicar lugares que fecharam ou programas que mudaram. Confirme sempre com o 211, o site oficial do programa ou uma chamada."
          ],
          steps: ["Diga qual é a necessidade: comida, renda, água e luz, cuidado dos filhos ou emprego.", "Pergunte à IA que tipos de programas costumam ajudar e o que lhes perguntar.", "Ligue para o 211 ou visite 211.org para encontrar programas locais reais.", "Ligue ou veja o site oficial do programa antes de ir."],
          words: [["Recurso", "um lugar, programa ou pessoa que pode ajudar numa necessidade."], ["Confidencial", "mantido em privado; não é partilhado sem a sua autorização."]],
          sources: [{ name: "211.org: About 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Pedir ajuda é força", bullets: ["Comida, renda, água e luz, filhos, emprego", "Existem muitos programas locais"] },
            { title: "O 211 liga você à ajuda", bullets: ["Ligue para o 211, a qualquer hora", "Confidencial, e pode ser anónimo", "Também: listas da biblioteca e do centro comunitário"] },
            { title: "Use a IA e depois confirme", bullets: ["A IA explica que tipos de ajuda existem", "Pode indicar lugares fechados", "Confirme com o 211 ou o site oficial"] }
          ],
          tryIt: "Escolha uma necessidade da sua família ou de um vizinho. Pergunte a uma IA que tipos de programas ajudam com ela. Depois encontre um programa local real em 211.org ou ligando para o 211, e anote o número de telefone oficial.",
          youCanNow: "encontrar um recurso local para uma necessidade real e confirmá-lo numa fonte oficial.",
          quickCheck: [
            { objective: "O3", q: "Além de ligar para o 211, de que outra forma pode muitas vezes chegar a ele?", options: ["Por SMS, conversa pela internet ou 211.org", "Só pessoalmente", "Enviando uma carta", "Através de uma aplicação paga"], answer: 0, why: "Em muitas zonas o 211 funciona por SMS ou conversa pela internet, e também em 211.org." },
            { objective: "O3", q: "Um vizinho precisa de ajuda para pagar a conta da luz. Qual é um bom primeiro passo com a IA?", options: ["Pedir à IA para pagar a conta", "Perguntar que tipos de programas ajudam e o que lhes perguntar", "Publicar a conta do vizinho na internet", "Esperar até cortarem a luz"], answer: 1, why: "A IA pode explicar tipos de ajuda e perguntas a fazer; depois você encontra programas reais através do 211." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: A IA em casa",
        questions: [
          { objective: "O1", q: "Quando faz a lista da semana da família para uma IA, como deve chamar as pessoas?", options: ["Nomes completos com aniversários", "Primeiros nomes ou papéis como \"o meu filho mais velho\"", "Números da Segurança Social", "A morada de cada pessoa"], answer: 1, why: "Primeiros nomes ou papéis deixam os dados privados de fora." },
          { objective: "O1", q: "O que é um choque num horário?", options: ["Duas coisas marcadas para a mesma hora", "Um dia livre", "Um feriado", "Um plano cancelado"], answer: 0, why: "Um choque é quando dois planos coincidem." },
          { objective: "O2", q: "A IA diz que a sua lista de compras vai custar $42. O que faz?", options: ["Confia que é exatamente isso", "Paga $42 antes de ir às compras", "Vê isso como uma ideia aproximada e verifica os preços da loja", "Ignora a lista"], answer: 2, why: "A IA não sabe os preços de hoje na sua loja." },
          { objective: "O2", q: "O seu filho tem uma alergia alimentar. Que conselho vem primeiro nos planos de refeições?", options: ["O da IA", "O de uma publicação nas redes sociais", "O de um site qualquer", "O do seu médico ou nutricionista"], answer: 3, why: "As necessidades de saúde seguem o conselho de um profissional." },
          { objective: "O3", q: "A IA indica um banco alimentar perto de você. O que deve fazer antes de ir?", options: ["Confirmar com o 211, o site oficial ou uma chamada", "Ir logo", "Publicar na internet", "Perguntar outra vez à IA"], answer: 0, why: "A IA pode indicar lugares que fecharam; confirme primeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: A IA para a sua comunidade",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer uma ordem de trabalhos para a reunião",
          minutes: 5,
          goal: "Usar um assistente de IA para escrever uma ordem de trabalhos clara de uma página.",
          text: [
            "Os grupos da comunidade fazem mais quando as reuniões têm um plano. A ordem de trabalhos é uma lista curta do que a reunião vai tratar, por ordem, com o tempo de cada parte.",
            "Diga à IA o grupo, o objetivo, quanto tempo dura a reunião e os temas. Por exemplo: \"Faça uma ordem de trabalhos de uma hora para o nosso grupo de inquilinos. Temas: máquinas de lavar avariadas, um convívio de verão e escolher um novo secretário. Deixe tempo para perguntas.\"",
            "Leia-a a pensar no que o seu grupo precisa. Mude os temas de lugar, acrescente as boas-vindas e garanta que o tema mais importante não fica apertado no fim."
          ],
          steps: ["Anote o grupo, o objetivo, a duração e os temas.", "Peça à IA uma ordem de trabalhos de uma página com o tempo de cada tema.", "Ponha o tema mais importante no início.", "Acrescente as boas-vindas e tempo para perguntas, e partilhe-a antes da reunião."],
          words: [["Ordem de trabalhos", "a lista dos temas de uma reunião, por ordem, com horários."], ["Secretário", "a pessoa do grupo que toma notas e guarda os registos."]],
          slides: [
            { title: "As reuniões precisam de um plano", bullets: ["A ordem de trabalhos lista os temas por ordem", "Cada tema tem um tempo"] },
            { title: "Diga à IA", bullets: ["O grupo e o objetivo", "Quanto tempo dura a reunião", "Os temas"] },
            { title: "Adapte ao seu grupo", bullets: ["O tema mais importante no início", "Acrescente boas-vindas e perguntas", "Partilhe antes da reunião"] }
          ],
          tryIt: "Peça a um assistente de IA para escrever uma ordem de trabalhos de uma hora para um grupo real de que faz parte, com três temas e tempo para perguntas.",
          youCanNow: "fazer uma ordem de trabalhos clara para uma reunião com um assistente de IA.",
          quickCheck: [
            { objective: "O4", q: "Que quatro coisas deve um pedido de ordem de trabalhos dizer à IA?", options: ["Os números de telefone dos membros", "Só a data", "O grupo, o objetivo, a duração e os temas", "A lista de lanches da reunião"], answer: 2, why: "Com o grupo, o objetivo, a duração e os temas, a IA pode fazer uma ordem de trabalhos útil." },
            { objective: "O4", q: "A IA pôs a escolha de um novo secretário no fim, com 5 minutos. É o seu tema principal. O que faz?", options: ["Deixa assim", "Tira-o", "Faz a reunião mais curta", "Põe-no mais cedo e dá-lhe mais tempo"], answer: 3, why: "O tema mais importante deve vir no início para não ficar apertado no fim." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever mensagens e notas claras para o grupo",
          minutes: 5,
          goal: "Escrever um lembrete da reunião e transformar notas soltas num resumo curto.",
          text: [
            "Um bom lembrete diz o quê, quando, onde e o que trazer, em poucas linhas curtas. Peça à IA um lembrete num tom simpático, e uma segunda versão noutra língua se o seu grupo precisar.",
            "Depois da reunião, a IA pode transformar notas soltas num resumo limpo: o que se decidiu, quem vai fazer o quê e até quando. Deixe de fora os dados privados, como problemas de saúde ou de dinheiro de alguém.",
            "Antes de enviar, verifique os nomes, as datas e as decisões com alguém que esteve lá. O resumo tem de corresponder ao que aconteceu de verdade."
          ],
          steps: ["Peça um lembrete simpático com o quê, quando, onde e o que trazer.", "Peça uma versão noutra língua, se for preciso.", "Depois da reunião, cole as suas notas soltas sem dados privados.", "Peça um resumo: decisões, quem faz o quê e até quando.", "Verifique-o com alguém que esteve lá e depois envie."],
          words: [["Resumo", "uma versão curta que guarda só os pontos principais."], ["Tarefa", "um trabalho que alguém aceitou fazer depois de uma reunião."]],
          slides: [
            { title: "Um bom lembrete", bullets: ["O quê, quando, onde, o que trazer", "Curto e simpático", "Noutra língua, se for preciso"] },
            { title: "Das notas ao resumo", bullets: ["Cole as notas soltas, sem dados privados", "Peça as decisões e as tarefas", "Quem faz o quê, até quando"] },
            { title: "Verifique antes de enviar", bullets: ["Nomes, datas e decisões", "Pergunte a alguém que esteve lá"] }
          ],
          tryIt: "Peça a um assistente de IA um lembrete de três linhas para a reunião da Lição 4. Depois escreva cinco notas soltas de prática e peça-lhe para as transformar num resumo com tarefas.",
          youCanNow: "escrever lembretes claros para reuniões e transformar notas num resumo com tarefas.",
          quickCheck: [
            { objective: "O5", q: "O que tem o resumo de uma reunião?", options: ["As decisões, quem faz o quê e até quando", "Os problemas privados de todos", "Só os lanches", "Cada palavra que foi dita"], answer: 0, why: "Um resumo mostra o que se decidiu e quem vai fazer o quê até quando." },
            { objective: "O5", q: "As suas notas dizem que um membro tem a renda em atraso. O que faz antes de as colar na IA?", options: ["Deixa ficar; é útil", "Tira esse dado privado", "Acrescenta o nome completo dele", "Envia as notas para a rua inteira"], answer: 1, why: "Os dados privados sobre o dinheiro ou a saúde de alguém ficam fora dos pedidos e dos resumos da IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer uma lista de recursos da comunidade",
          minutes: 5,
          goal: "Fazer uma lista de uma página com ajuda local que você mesmo verificou.",
          text: [
            "Uma lista de recursos ajuda os vizinhos a encontrar ajuda depressa. Mantenha-a numa página: o tipo de ajuda, o nome do programa, o número de telefone ou site oficial e o horário.",
            "Use a IA para preparar a apresentação da página e explicar cada programa numa frase simples. Obtenha os nomes, números e horários reais no 211, no site oficial do programa ou por chamada, não na IA.",
            "Ponha a data no fundo (\"Verificado em ...\"). Os programas mudam, por isso volte a verificar a lista de poucos em poucos meses."
          ],
          steps: ["Escolha três necessidades da sua comunidade.", "Encontre um programa real para cada uma através do 211 ou de sites oficiais.", "Peça à IA uma apresentação simples de uma página e uma descrição simples de uma linha para cada um.", "Preencha você mesmo os números e horários oficiais.", "Acrescente a data em que a verificou."],
          words: [["Apresentação da página", "a forma como as palavras e as caixas estão arrumadas numa página."]],
          sources: [{ name: "211.org: find your local 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Lista de recursos de uma página", bullets: ["Tipo de ajuda e nome do programa", "Telefone ou site oficial", "Horário"] },
            { title: "Quem faz o quê", bullets: ["IA: apresentação da página e descrições simples", "Você: nomes, números e horários reais de fontes oficiais"] },
            { title: "Mantenha-a atualizada", bullets: ["Escreva \"Verificado em\" e a data", "Volte a verificar de poucos em poucos meses"] }
          ],
          tryIt: "Tarefa final: organize uma pequena reunião para o seu grupo com uma ordem de trabalhos e uma mensagem de lembrete escritas com a IA, e faça uma lista de uma página com três recursos de ajuda local que você mesmo verificou.",
          youCanNow: "organizar uma reunião da comunidade e partilhar uma lista verificada de ajuda local.",
          quickCheck: [
            { objective: "O6", q: "Que quatro coisas vão em cada linha de uma lista de recursos?", options: ["Nome, idade, morada e emprego", "Preço, cor, tamanho e marca", "Tipo de ajuda, nome do programa, telefone ou site oficial, e horário", "Só o nome do programa"], answer: 2, why: "Estas quatro coisas deixam os vizinhos encontrar e contactar a ajuda depressa." },
            { objective: "O6", q: "A IA preenche um número de telefone para um banco alimentar. O que faz?", options: ["Usa-o como está", "Tira o banco alimentar da lista", "Pergunta outra vez à IA", "Troca-o pelo número do 211 ou do site oficial"], answer: 3, why: "Os números e horários reais vêm do 211 ou de fontes oficiais, não da IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A IA para a sua comunidade",
        questions: [
          { objective: "O4", q: "O que é uma ordem de trabalhos?", options: ["Uma lista dos temas da reunião, por ordem, com horários", "Uma conta para pagar", "Um grupo de conversa", "Uma folha de presenças"], answer: 0, why: "A ordem de trabalhos planeia o que a reunião vai tratar." },
          { objective: "O4", q: "Onde deve ficar o tema mais importante na ordem de trabalhos?", options: ["Mesmo no fim", "No início da reunião", "Fora da ordem de trabalhos", "Numa outra reunião no próximo ano"], answer: 1, why: "Os primeiros temas recebem mais tempo e atenção." },
          { objective: "O5", q: "Um bom lembrete da reunião inclui:", options: ["Os números de telefone de todos", "As moradas dos membros", "O quê, quando, onde e o que trazer", "Uma longa história do grupo"], answer: 2, why: "Esses quatro dados são o que as pessoas precisam." },
          { objective: "O5", q: "As suas notas falam de um problema de saúde de um membro. Antes de as dar à IA, você:", options: ["Deixa ficar", "Acrescenta mais pormenores", "Partilha no grupo de conversa", "Tira esse dado privado"], answer: 3, why: "Os dados privados de outras pessoas ficam fora das ferramentas de IA." },
          { objective: "O6", q: "De onde devem vir os números de telefone de uma lista de recursos?", options: ["Do 211 ou do site oficial do programa", "Do que a IA disser", "De um palpite", "De um folheto antigo de há anos"], answer: 0, why: "A IA pode dar números errados; as fontes oficiais estão certas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Comunidade e o Dia a Dia",
    questions: [
      { objective: "O1", q: "Para planear a semana da família com a IA, primeiro:", options: ["Faça a lista de tudo o que precisa de fazer, com as horas que já sabe", "Escreva o seu número do banco", "Compre uma aplicação de agenda", "Ligue para o 211"], answer: 0, why: "A IA precisa da sua lista para a organizar." },
      { objective: "O1", q: "Qual é uma forma segura de chamar os familiares num pedido?", options: ["Nomes completos e datas de nascimento", "\"O meu filho mais velho\" ou primeiros nomes", "Números de estudante da escola", "Números da Segurança Social"], answer: 1, why: "Papéis ou primeiros nomes mantêm os dados privados." },
      { objective: "O1", q: "Quando a IA encontra um choque, você:", options: ["Deixa a IA decidir", "Ignora-o", "Pede ideias e depois toma a decisão final", "Cancela tudo"], answer: 2, why: "A IA sugere; você decide." },
      { objective: "O2", q: "Um pedido de plano de refeições deve incluir:", options: ["A sua palavra-passe", "A sua morada", "O PIN do seu banco", "Número de pessoas, orçamento, gostos e alergias"], answer: 3, why: "Esses dados dão forma a um plano útil." },
      { objective: "O2", q: "Porque ver o folheto semanal da loja depois de a IA fazer a sua lista?", options: ["A IA não sabe os preços de hoje", "A IA cobra sempre a mais", "As lojas obrigam", "É a lei"], answer: 0, why: "Os custos que a IA dá são aproximados." },
      { objective: "O2", q: "Alimentos básicos são:", options: ["Só material de escritório", "Comidas simples que usa muitas vezes, como arroz e feijão", "Sobremesas caras", "Refeições de restaurante"], answer: 1, why: "Os alimentos básicos são comidas simples do dia a dia." },
      { objective: "O3", q: "O 211 é:", options: ["Uma aplicação de IA", "Uma loja", "Uma linha confidencial que liga as pessoas a ajuda local", "Um banco"], answer: 2, why: "O 211 liga você a ajuda local." },
      { objective: "O3", q: "As chamadas para o 211 são:", options: ["Partilhadas na internet", "Gravadas para publicidade", "Só para empresas", "Confidenciais e podem ser anónimas"], answer: 3, why: "O 211 diz que as chamadas são confidenciais e podem ser anónimas." },
      { objective: "O3", q: "Uma IA dá-lhe uma lista de bancos alimentares. Antes de ir, você:", options: ["Confirma um com o 211, o site oficial ou uma chamada", "Vai a todos", "Confia totalmente", "Publica a lista na internet"], answer: 0, why: "Os programas fecham ou mudam; confirme primeiro." },
      { objective: "O3", q: "Pedir ajuda com comida ou contas é:", options: ["Algo para esconder", "Parte de cuidar da sua família", "Proibido", "Só para outras pessoas"], answer: 1, why: "Usar a ajuda local é um passo inteligente e normal." },
      { objective: "O4", q: "A ordem de trabalhos de uma reunião deve incluir:", options: ["Só a data", "Os números de telefone dos membros", "Os temas por ordem, com horários", "A morada de todos"], answer: 2, why: "Os temas e os horários mantêm a reunião no caminho certo." },
      { objective: "O4", q: "Um bom pedido de ordem de trabalhos diz à IA:", options: ["Nada", "A sua palavra-passe", "O seu banco", "O grupo, o objetivo, a duração e os temas"], answer: 3, why: "Esses dados dão forma a uma ordem de trabalhos útil." },
      { objective: "O4", q: "Quando deve partilhar a ordem de trabalhos?", options: ["Antes da reunião", "Nunca", "Um mês depois", "Só com quem preside"], answer: 0, why: "Partilhar cedo ajuda as pessoas a virem preparadas." },
      { objective: "O5", q: "O seu grupo tem membros que falam espanhol. Para o lembrete, você pode:", options: ["Deixá-los de fora", "Pedir à IA uma versão noutra língua", "Usar só imagens", "Não enviar nada"], answer: 1, why: "Uma versão noutra língua inclui mais membros." },
      { objective: "O5", q: "Uma tarefa (depois de uma reunião) é:", options: ["Um filme", "Um tipo de aplicação", "Um trabalho que alguém aceitou fazer depois de uma reunião", "Um lanche"], answer: 2, why: "As tarefas dizem quem faz o quê e até quando." },
      { objective: "O5", q: "Antes de enviar o resumo de uma reunião, deve:", options: ["Acrescentar dados privados", "Enviá-lo sem ler", "Apagar as notas", "Verificá-lo com alguém que esteve lá"], answer: 3, why: "O resumo tem de corresponder ao que aconteceu." },
      { objective: "O6", q: "Numa lista de recursos, quem deve preencher os números de telefone e os horários?", options: ["Você, a partir de fontes oficiais", "A IA", "Ninguém", "Um anúncio que aparece no ecrã"], answer: 0, why: "As fontes oficiais dão os números certos." },
      { objective: "O6", q: "Porque acrescentar \"Verificado em\" e uma data à lista de recursos?", options: ["Fica bonito", "Os programas mudam, e assim as pessoas sabem se está atualizada", "A lei obriga", "Para a fazer mais comprida"], answer: 1, why: "A data mostra quando foi confirmada pela última vez." },
      { objective: "O6", q: "De quanto em quanto tempo deve voltar a verificar uma lista de recursos?", options: ["Nunca", "De dez em dez anos", "De poucos em poucos meses", "Só se alguém se queixar"], answer: 2, why: "Os programas mudam, por isso verifique muitas vezes." },
      { objective: "O6", q: "Na tarefa final, a lista de recursos tem:", options: ["Dez lugares inventados pela IA", "As moradas dos membros", "Só um lugar", "Três recursos locais que você mesmo verificou"], answer: 3, why: "A tarefa pede três recursos que você confirmou." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 8, 10, 13, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Ordem de trabalhos", objective: "O4", notYet: "Não há ordem de trabalhos, ou os temas não têm ordem nem horários.", meets: "Uma página com os temas por ordem, horários e tempo para perguntas.", exceeds: "O tema mais importante está no início, e há boas-vindas." },
      { name: "Mensagem de lembrete", objective: "O5", notYet: "Falta o quê, quando ou onde.", meets: "Um lembrete curto e simpático com o quê, quando, onde e o que trazer.", exceeds: "Também tem uma versão noutra língua de que o grupo precisa." },
      { name: "Recursos verificados", objective: "O3", notYet: "Os programas ou os números vieram da IA e não foram verificados.", meets: "Três programas locais reais, cada um confirmado através do 211, de um site oficial ou de uma chamada.", exceeds: "Sabe dizer como verificou cada um." },
      { name: "Apresentação da lista de recursos", objective: "O6", notYet: "Faltam números de telefone, horários ou a data.", meets: "Uma página com o tipo de ajuda, o programa, o número ou site oficial, o horário e a data \"Verificado em\".", exceeds: "Cada programa tem uma descrição simples de uma linha." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem uma reunião planeada do grupo com ordem de trabalhos em 30 dias (inquérito de seguimento)",
      "Alunos ou vizinhos que chegam a um programa de ajuda local encontrado através do 211",
      "Os parceiros da comunidade dizem que as listas de recursos são partilhadas e mantidas atualizadas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou do centro comunitário",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Acesso ao 211 por telefone, SMS ou 211.org",
      "Papel e caneta, ou o calendário do telefone, para o horário e as listas",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça o curso com um grupo real, como um grupo de pais ou de inquilinos, para que a ordem de trabalhos e a lista de recursos sirvam logo.",
      "Mostre o 211 ao vivo e lembre aos alunos que pedir ajuda é normal.",
      "Verifique os pedidos à procura de dados privados: só primeiros nomes ou papéis, e nada sobre a saúde ou o dinheiro de outras pessoas.",
      "Junte as listas de recursos verificadas numa só lista partilhada para o grupo, com a data da verificação.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
