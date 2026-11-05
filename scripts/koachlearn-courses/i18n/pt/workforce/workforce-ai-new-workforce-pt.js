"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-ai-new-workforce.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Job outlook data is not quoted; students are sent to the official source (bls.gov Occupational Outlook Handbook) to look up their own field.

const BLS_OOH = { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (Departamento do Trabalho dos EUA): encontrar formação e American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-pt",
  lang: "pt",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "A IA no Novo Mundo do Trabalho",
  skills: "Perceber como a IA muda as tarefas, Dividir o seu trabalho em tarefas, Identificar as tarefas em que a IA pode ajudar, Encontrar informação fiável sobre o futuro do emprego, Fazer um plano de 90 dias para aprender novas competências, Falar das suas competências de IA com os empregadores",
  outcome: "dividir o seu trabalho atual ou o trabalho que procura em tarefas, marcar em quais a IA pode ajudar e quais dependem de competências humanas, consultar o futuro da sua área numa fonte oficial e transformar isso num plano de 90 dias para aprender novas competências e numa forma curta e honesta de descrever as suas competências de IA a um empregador.",
  about: [
    "Este curso é para quem procura trabalho e para quem já trabalha e ouve sempre dizer que a IA vai mudar os empregos, e quer saber o que isso significa para si: trabalhadores de armazém e logística, de lojas e de atendimento ao cliente, de escritório e administração, de apoio na saúde, de ofícios e motoristas.",
    "Você vai aprender como a IA costuma mudar tarefas e não empregos inteiros, olhar para o seu próprio trabalho tarefa a tarefa, encontrar informação fiável sobre a sua área e fazer um plano prático para ganhar as competências que o ajudam a continuar a ter valor. No fim, vai praticar como falar das suas competências de IA numa entrevista ou numa conversa com o seu chefe.",
    "Não dizemos que empregos vão desaparecer, e nenhum curso pode prometer um emprego ou um aumento. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu plano pessoal de carreira com IA: uma lista de tarefas do seu trabalho atual ou do trabalho que procura, com cada tarefa marcada \"a IA pode ajudar\", \"competência humana\" ou \"ambos\"; três factos sobre a sua área tirados do Occupational Outlook Handbook do BLS; um plano de 90 dias com três competências, recursos gratuitos e tempo por semana; e uma resposta de 30 segundos, honesta e concreta, à pergunta \"Como usa a IA no seu trabalho?\".",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que procuram trabalho e adultos que trabalham e ouvem sempre dizer que a IA vai mudar os empregos: trabalhadores de armazém e logística, de lojas e de atendimento ao cliente, de escritório e administração, de apoio na saúde, de ofícios e motoristas.",
    startingPoint: "Conhecem bem o seu próprio trabalho e sabem usar um smartphone ou um computador. Muitos estão preocupados ou inseguros sobre a IA, nunca consultaram dados oficiais sobre o futuro do emprego e não têm um plano escrito para aprender novas competências.",
    gap: "A IA está a mudar as tarefas que ocupam tempo em muitos empregos. Os alunos precisam de ver em que tarefas a IA pode ajudar e quais dependem de competências humanas, verificar o futuro da sua área numa fonte oficial e seguir um plano realista para ganhar competências que possam descrever com honestidade a um empregador.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; não é preciso saber nada de técnico",
      "Aparelhos: um smartphone ou computador com internet; muitos usam um computador da biblioteca ou de um American Job Center",
      "Tempo: lições de cerca de 5 minutos e um plano de algumas horas por semana, ao lado do trabalho e da família",
      "Privacidade e regras: nenhuma informação privada nem informação confidencial da empresa nas ferramentas de IA; as regras de IA do empregador vêm primeiro",
      "Os números sobre o futuro do emprego vêm da página oficial do BLS, não da IA"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer o curso \"Ferramentas de IA Essenciais para o Trabalho\" ao mesmo tempo que este."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu trabalho atual ou o último", action: "listar pelo menos oito tarefas desse trabalho e explicar como a IA afeta tarefas e não empregos inteiros", standard: "com as suas próprias palavras" },
    { id: "O2", condition: "Com a sua lista de tarefas", action: "marcar cada tarefa como \"a IA pode ajudar\", \"competência humana\" ou \"ambos\"", standard: "com todas as tarefas marcadas e a decisão final tomada por você" },
    { id: "O3", condition: "Para a sua profissão atual ou a que procura", action: "consultar o futuro do emprego no Occupational Outlook Handbook do BLS e encontrar o American Job Center mais perto de si", standard: "com três factos tirados da página oficial" },
    { id: "O4", condition: "Com três anúncios de emprego reais para um cargo que deseja", action: "escolher três competências para aprender e explicar porque cada uma é importante", standard: "com uma competência de ferramenta de IA, uma da sua área e uma humana" },
    { id: "O5", condition: "Para as suas três competências", action: "escrever um plano de 90 dias com um recurso, tempo por semana e uma prova para cada competência", standard: "com as duas primeiras semanas de estudo na sua agenda" },
    { id: "O6", condition: "Quando um empregador pergunta como usa a IA", action: "dar uma resposta de 30 segundos no formato Tarefa-Ferramenta-Verificação-Resultado", standard: "que seja honesta, concreta e siga as regras de IA do seu empregador" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como a IA está a mudar o trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "A IA muda tarefas, não só empregos",
          minutes: 5,
          goal: "Explicar como a IA afeta as tarefas dentro de um emprego.",
          text: [
            "Cada emprego é um conjunto de tarefas. Uma rececionista de clínica atende o telefone, marca consultas, verifica o seguro, recebe os doentes e acalma pessoas preocupadas. Um chefe de equipa de armazém planeia os turnos, controla o stock, forma os trabalhadores novos e resolve problemas no armazém.",
            "As ferramentas de IA são boas em algumas tarefas: escrever rascunhos de mensagens, resumir, procurar informação, preencher formulários, organizar e encontrar padrões. São fracas noutras: trabalho físico com as mãos, perceber o ambiente numa sala, criar confiança, lidar com algo novo e assumir a responsabilidade.",
            "Por isso, em muitos empregos, a IA muda as tarefas que ocupam tempo. As pessoas que aprendem a usar a IA nas tarefas de rotina muitas vezes ficam com mais tempo para as tarefas humanas, e isso pode dar-lhes mais valor."
          ],
          words: [["Tarefa", "uma parte do trabalho dentro de um emprego, como marcar uma consulta."], ["Tarefa de rotina", "uma tarefa feita sempre da mesma maneira, muitas vezes."], ["Aprender novas competências", "aprender coisas novas para fazer melhor o seu trabalho ou subir de cargo (em inglês, \"upskilling\")."]],
          slides: [
            { title: "Um emprego é um conjunto de tarefas", bullets: ["Rececionista: telefone, marcações, seguro, receber pessoas", "Chefe de armazém: turnos, stock, formação, problemas"] },
            { title: "O que a IA faz bem", bullets: ["Escrever rascunhos e resumir", "Procurar informação e preencher formulários", "Organizar e encontrar padrões"] },
            { title: "O que as pessoas fazem melhor", bullets: ["Trabalho físico com as mãos", "Perceber o ambiente e criar confiança", "Lidar com o novo; assumir a responsabilidade"] }
          ],
          tryIt: "Escreva o nome do seu trabalho atual ou do último e liste pelo menos oito tarefas que faz (ou fazia) numa semana normal.",
          youCanNow: "explicar como a IA afeta as tarefas dentro de um emprego.",
          quickCheck: [
            { objective: "O1", q: "Quando pensa em como a IA muda o trabalho, o que é um emprego?", options: ["Uma única tarefa", "Só o nome do cargo", "Um conjunto de tarefas", "Uma lista de ferramentas"], answer: 2, why: "Um emprego é um conjunto de tarefas, e a IA muda umas tarefas mais do que outras." },
            { objective: "O1", q: "Quer ver como a IA pode afetar o seu trabalho. O que faz primeiro?", options: ["Lista as tarefas que faz numa semana normal", "Despede-se e procura outro emprego", "Pergunta à IA se vai ser substituído", "Ignora completamente a IA"], answer: 0, why: "A lista de tarefas mostra em quais a IA pode ajudar e quais dependem de você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Marcar as tarefas: a IA pode ajudar, competência humana ou ambos",
          minutes: 5,
          goal: "Separar as tarefas do seu trabalho conforme a IA pode ajudar ou não.",
          text: [
            "Pegue na sua lista de tarefas e marque cada uma. \"A IA pode ajudar\": escrever um e-mail, fazer uma lista de verificação, resumir um regulamento longo. \"Competência humana\": acalmar um cliente zangado frente a frente, levantar e carregar com segurança, reparar uma máquina. \"Ambos\": escrever um relatório em que a IA faz o rascunho e você verifica os factos, ou planear um horário em que a IA sugere e você decide.",
            "Pode pedir a um assistente de IA que o ajude a pensar: \"Sou chefe de turno numa loja. Estas são as minhas tarefas. Em quais um assistente de IA pode ajudar, e como?\" Depois use o seu próprio juízo; você conhece o trabalho melhor do que ele.",
            "Olhe para as tarefas de \"competência humana\". São pontos fortes para desenvolver e para falar com os empregadores: comunicação, trabalho em equipa, resolução de problemas, segurança, cuidado com os outros."
          ],
          steps: ["Marque cada tarefa: a IA pode ajudar, competência humana ou ambos.", "Peça ideias a um assistente de IA e depois decida você.", "Faça um círculo em duas tarefas \"a IA pode ajudar\" para experimentar este mês.", "Sublinhe as suas tarefas de \"competência humana\" mais fortes."],
          words: [["Competências humanas", "competências como comunicação, trabalho em equipa, juízo e cuidado, que as pessoas fazem melhor; também chamadas competências sociais ou competências duradouras."]],
          slides: [
            { title: "Três marcas", bullets: ["A IA pode ajudar: e-mails, listas, resumos", "Competência humana: acalmar pessoas, levantar com segurança, reparações", "Ambos: a IA faz o rascunho, você verifica e decide"] },
            { title: "Pergunte à IA, depois decida", bullets: ["\"Em quais das minhas tarefas a IA pode ajudar?\"", "Você conhece o trabalho melhor do que ela"] },
            { title: "Os seus pontos fortes", bullets: ["Comunicação e trabalho em equipa", "Resolução de problemas e segurança", "Cuidado e juízo"] }
          ],
          tryIt: "Marque todas as tarefas da sua lista. Faça um círculo em duas tarefas \"a IA pode ajudar\" que vai experimentar este mês e sublinhe as suas duas tarefas de competência humana mais fortes.",
          youCanNow: "separar as tarefas do seu trabalho conforme a IA pode ajudar e onde as suas competências humanas contam mais.",
          quickCheck: [
            { objective: "O2", q: "Que tarefa é uma competência humana?", options: ["Copiar números para um formulário", "Escrever o mesmo relatório todos os dias", "Organizar e-mails por data", "Acalmar um cliente zangado"], answer: 3, why: "Criar confiança e acalmar pessoas dependem de competências humanas." },
            { objective: "O2", q: "Uma IA marca a sua tarefa \"tratar das reclamações dos clientes\" só como \"a IA pode ajudar\". Você não concorda. O que faz?", options: ["Aceita a marca da IA", "Toma você a decisão final; pode ser \"ambos\"", "Apaga a tarefa", "Pergunta a outra IA até ela concordar"], answer: 1, why: "Você conhece melhor o seu trabalho, por isso a decisão final sobre cada marca é sua." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar informação fiável sobre a sua área",
          minutes: 5,
          goal: "Consultar o futuro da sua profissão numa fonte oficial.",
          text: [
            "As notícias sobre a IA e os empregos muitas vezes metem medo ou exageram. Use antes fontes oficiais, baseadas em dados. Nos EUA, o Departamento de Estatísticas do Trabalho (BLS) publica o Occupational Outlook Handbook (guia do futuro das profissões) em bls.gov/ooh. Para centenas de profissões, mostra em que consiste o trabalho, a formação habitual, o salário e a previsão de emprego.",
            "Procure a sua profissão e anote: o que os trabalhadores fazem, como chegar a essa profissão, o salário mediano e a previsão de emprego. Veja também profissões relacionadas; podem mostrar os próximos passos.",
            "O CareerOneStop, do Departamento do Trabalho dos EUA, ajuda-o a encontrar programas de formação e o seu American Job Center local (centro de emprego), que pode oferecer serviços de carreira gratuitos. Peça à IA que explique o que não perceber nestas páginas, mas tire os números da própria página."
          ],
          steps: ["Vá a bls.gov/ooh e procure a sua profissão.", "Anote: o que fazem, como chegar lá, salário mediano, previsão.", "Veja duas profissões relacionadas.", "Encontre o seu American Job Center local no CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: o organismo dos EUA que publica dados sobre empregos e salários."], ["Previsão de emprego", "a mudança prevista no número de empregos de uma profissão (em inglês, \"job outlook\")."], ["Salário mediano", "o salário do meio: metade ganha mais, metade ganha menos."]],
          slides: [
            { title: "Esqueça o exagero", bullets: ["Use fontes oficiais, baseadas em dados", "Occupational Outlook Handbook do BLS: bls.gov/ooh"] },
            { title: "O que anotar", bullets: ["O que os trabalhadores fazem", "Como chegar a essa profissão", "Salário mediano e previsão de emprego"] },
            { title: "Ajuda local gratuita", bullets: ["CareerOneStop: formação e centros de emprego", "Os American Job Centers oferecem serviços de carreira", "Tire os números da página, não da IA"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Consulte a sua profissão atual ou a que procura em bls.gov/ooh. Escreva três factos da página e depois encontre o American Job Center mais perto de si no CareerOneStop.",
          youCanNow: "encontrar informação fiável sobre o futuro e a formação na sua área.",
          quickCheck: [
            { objective: "O3", q: "O que mostra o Occupational Outlook Handbook?", options: ["O que os trabalhadores fazem, como chegar lá, o salário e a previsão", "Vagas de emprego perto de si hoje", "A sua pontuação de crédito", "Opiniões sobre empresas"], answer: 0, why: "O OOH do BLS descreve cada profissão, o seu salário e a sua previsão de emprego." },
            { objective: "O3", q: "Uma IA diz-lhe que a sua área vai crescer 30%. O que faz?", options: ["Conta aos amigos", "Planeia a sua carreira com base nisso", "Verifica o número na página oficial do BLS", "Ignora todos os dados de emprego"], answer: 2, why: "Os números sobre o futuro do emprego vêm da página oficial, não da IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como a IA está a mudar o trabalho",
        questions: [
          { objective: "O1", q: "Em muitos empregos, a IA muda sobretudo:", options: ["Nada", "As tarefas que ocupam tempo", "Todas as tarefas por completo", "Só o nome do cargo"], answer: 1, why: "A IA afeta as tarefas dentro dos empregos." },
          { objective: "O2", q: "Em que tarefa a IA costuma ser boa?", options: ["Reparar um empilhador", "Acalmar um cliente zangado frente a frente", "Levantar caixas com segurança", "Escrever o rascunho de um e-mail de rotina"], answer: 3, why: "Escrever rascunhos de texto é um ponto forte das ferramentas de IA." },
          { objective: "O2", q: "Um relatório em que a IA faz o rascunho e você verifica os factos é marcado como:", options: ["Ambos", "Só competência humana", "Só IA", "Nenhum"], answer: 0, why: "A IA ajuda e uma pessoa verifica." },
          { objective: "O3", q: "Onde encontra a previsão de emprego oficial dos EUA para uma profissão?", options: ["Num palpite da IA", "Num vídeo viral", "No Occupational Outlook Handbook do BLS", "Numa secção de comentários"], answer: 2, why: "O BLS publica dados oficiais sobre a previsão de emprego." },
          { objective: "O3", q: "O que pode oferecer um American Job Center?", options: ["Empréstimos", "Empregos garantidos", "Serviços de carreira gratuitos e informação sobre formação", "Cursos universitários"], answer: 2, why: "Oferecem serviços de carreira; não há garantias." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o seu plano",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escolher três competências para aprender",
          minutes: 5,
          goal: "Escolher três competências que combinam com o seu trabalho e os seus objetivos.",
          text: [
            "Escolha uma mistura: uma competência de ferramenta de IA, uma competência da sua área e uma competência humana. Exemplo para um trabalhador de armazém que quer ser chefe de equipa: (1) usar um assistente de IA para escrever notas de turno claras, (2) aprender o sistema de gestão do armazém e o básico do controlo de stock, (3) orientar e formar trabalhadores novos.",
            "Use o que encontrou: a secção \"How to become one\" (como chegar a essa profissão) do BLS, anúncios de emprego para o cargo que deseja e a sua lista de tarefas. As competências que aparecem em muitos anúncios valem a pena aprender.",
            "Peça à IA que ajude a comparar: \"Aqui estão cinco anúncios de emprego para chefe de armazém. Que competências aparecem mais vezes?\" Cole só os anúncios, nada de privado."
          ],
          steps: ["Junte três a cinco anúncios de emprego para o cargo que deseja.", "Liste as competências que pedem mais vezes.", "Escolha uma competência de ferramenta de IA, uma da sua área e uma humana.", "Escreva porque cada uma é importante."],
          words: [["Anúncio de emprego", "um anúncio de uma vaga que lista as funções e as competências pedidas."], ["Competência da área", "uma competência própria do seu tipo de trabalho, como sistemas de stock ou termos médicos."]],
          slides: [
            { title: "Escolha uma mistura de três", bullets: ["Uma competência de ferramenta de IA", "Uma competência da sua área", "Uma competência humana"] },
            { title: "Onde procurar", bullets: ["BLS: \"How to become one\" (como chegar lá)", "Anúncios de emprego para o cargo que deseja", "A sua própria lista de tarefas"] },
            { title: "A IA pode comparar anúncios", bullets: ["\"Que competências aparecem mais vezes?\"", "Cole só os anúncios, nada de privado"] }
          ],
          tryIt: "Encontre três anúncios de emprego para um cargo que deseja. Pergunte à IA que competências aparecem mais vezes, depois escolha as suas três competências e escreva porque cada uma é importante.",
          youCanNow: "escolher três competências para aprender com base em anúncios de emprego reais e nos seus objetivos.",
          quickCheck: [
            { objective: "O4", q: "Qual é uma boa mistura de três competências para aprender?", options: ["Três ferramentas de IA", "Uma competência de ferramenta de IA, uma da área e uma humana", "Três competências que já tem", "Quaisquer três de um anúncio"], answer: 1, why: "Uma mistura cobre o uso da IA, a sua área e as competências humanas que a IA não substitui." },
            { objective: "O4", q: "Quer saber que competências os empregadores procuram para o cargo que deseja. O que faz?", options: ["Adivinha", "Pergunta a um amigo de outra área", "Escolhe as competências que parecem mais difíceis", "Lê anúncios de emprego reais e vê que competências aparecem mais"], answer: 3, why: "As competências que aparecem em muitos anúncios reais valem a pena aprender." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fazer um plano de 90 dias para aprender novas competências",
          minutes: 5,
          goal: "Transformar as suas três competências num plano realista de 90 dias.",
          text: [
            "Um plano faz a aprendizagem acontecer. Para cada competência, escreva: um recurso gratuito ou barato, o tempo por semana e uma forma de provar que aprendeu. A prova pode ser um certificado, um projeto, uma amostra de trabalho ou o seu chefe ver você a fazê-lo.",
            "Recursos gratuitos incluem a sua biblioteca local (muitas oferecem cursos online gratuitos), os American Job Centers, os community colleges (escolas superiores locais), a formação do empregador e cursos gratuitos de grandes empresas de tecnologia. Verifique os custos e os detalhes no site oficial de cada um.",
            "Mantenha o plano pequeno: duas ou três horas por semana é melhor do que um plano grande que abandona. Use um assistente de IA para fazer o horário semanal e para lhe fazer perguntas de revisão, e pratique a competência de IA em tarefas reais no trabalho, se o seu empregador permitir."
          ],
          steps: ["Para cada competência: recurso, tempo por semana, prova.", "Verifique o custo e os detalhes de cada recurso no seu site oficial.", "Coloque as horas de estudo semanais na sua agenda.", "Reveja no dia 30, 60 e 90."],
          words: [["Prova de competência", "algo que mostra que sabe fazer: um certificado, um projeto ou uma amostra de trabalho."], ["Community college", "uma escola superior pública local nos EUA, com cursos e certificados baratos."]],
          slides: [
            { title: "Para cada competência", bullets: ["Um recurso gratuito ou barato", "Tempo por semana", "Uma forma de o provar"] },
            { title: "Lugares gratuitos para aprender", bullets: ["Cursos online da biblioteca", "American Job Centers e community colleges", "Formação do empregador"] },
            { title: "Mantenha o plano pequeno", bullets: ["2-3 horas por semana que consegue manter", "A IA faz o horário e faz-lhe perguntas", "Reveja aos 30, 60 e 90 dias"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Escreva o seu plano de 90 dias: para cada uma das três competências, um recurso, o tempo por semana e uma prova. Coloque as horas de estudo das duas primeiras semanas na sua agenda.",
          youCanNow: "fazer um plano realista de 90 dias para aprender três novas competências.",
          quickCheck: [
            { objective: "O5", q: "O que é uma prova de competência?", options: ["Dizer que é bom nisso", "Ver um vídeo", "Um certificado, um projeto ou uma amostra de trabalho", "Guardar um curso nos favoritos"], answer: 2, why: "A prova é algo que pode mostrar, como um certificado, um projeto ou uma amostra de trabalho." },
            { objective: "O5", q: "Você trabalha a tempo inteiro. Que plano de estudo escreve?", options: ["2 a 3 horas por semana, marcadas na sua agenda", "10 horas todas as noites", "Estudar quando lhe apetecer", "Estudar só na semana antes de uma entrevista"], answer: 0, why: "Um tempo pequeno e regular marcado na agenda é o plano com mais hipóteses de resultar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Falar das suas competências de IA com os empregadores",
          minutes: 5,
          goal: "Dar uma resposta curta, honesta e concreta sobre como usa a IA no trabalho.",
          text: [
            "Os empregadores perguntam cada vez mais: \"Como usa a IA?\" Uma boa resposta é concreta e honesta, e mostra bom juízo. Use o modelo: Tarefa, Ferramenta, Verificação, Resultado.",
            "Exemplo: \"Uso o Microsoft Copilot para fazer o rascunho das minhas notas de fim de turno (tarefa e ferramenta). Verifico sempre as contagens com o relatório do leitor de códigos antes de as enviar (verificação). Poupa-me cerca de 15 minutos por turno, e o chefe seguinte recebe notas mais claras (resultado).\"",
            "Nunca exagere. Não diga que tem competências que não tem, e siga as regras de IA do seu empregador: não coloque informação confidencial da empresa ou dos clientes nas ferramentas de IA. Mostrar que conhece os limites faz parte da competência."
          ],
          steps: ["Escolha uma tarefa real em que usou a IA (ou praticou).", "Diga a tarefa, a ferramenta, como verificou e o resultado.", "Mantenha a resposta em cerca de 30 segundos.", "Pratique em voz alta."],
          words: [["Regras de IA", "as regras de um empregador sobre como os trabalhadores podem usar ferramentas de IA (em inglês, \"AI policy\")."], ["Informação confidencial", "informação da empresa ou dos clientes que não pode ser partilhada fora da empresa."]],
          slides: [
            { title: "Tarefa, Ferramenta, Verificação, Resultado", bullets: ["O que fez", "Que ferramenta de IA", "Como verificou", "O que melhorou"] },
            { title: "Exemplo", bullets: ["\"Uso o Copilot para o rascunho das notas de fim de turno.", "Verifico as contagens com o relatório do leitor de códigos.", "Poupa 15 minutos por turno.\""] },
            { title: "Mostre bom juízo", bullets: ["Nunca exagere as suas competências", "Siga as regras de IA do seu empregador", "Mantenha os dados confidenciais fora da IA"] }
          ],
          tryIt: "Tarefa final: termine o seu plano de carreira com IA: lista de tarefas marcada, três factos do BLS, o seu plano de 90 dias e uma resposta de 30 segundos Tarefa-Ferramenta-Verificação-Resultado que pratica em voz alta.",
          youCanNow: "planear o seu crescimento num mundo do trabalho mudado pela IA e falar com honestidade das suas competências de IA com os empregadores.",
          quickCheck: [
            { objective: "O6", q: "Numa resposta Tarefa-Ferramenta-Verificação-Resultado, o que é o Resultado?", options: ["O nome da ferramenta de IA", "Como verificou o trabalho da IA", "O que pediu à IA", "O que melhorou graças ao seu trabalho"], answer: 3, why: "O Resultado é o efeito, como tempo poupado ou menos erros." },
            { objective: "O6", q: "Numa entrevista perguntam-lhe se já usou IA para fazer relatórios. Só experimentou duas vezes. O que diz?", options: ["Diz que é especialista", "Descreve com honestidade as duas vezes: a tarefa, a ferramenta, como verificou e o resultado", "Diz que nunca ouviu falar de IA", "Muda de assunto"], answer: 1, why: "Uma resposta honesta e concreta cria confiança; nunca diga que tem competências que não tem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o seu plano",
        questions: [
          { objective: "O4", q: "Uma boa mistura de três competências é:", options: ["Uma competência de ferramenta de IA, uma da área, uma humana", "Três aplicações ao acaso", "Só competências de IA", "Nenhuma"], answer: 0, why: "Uma mistura mantém você equilibrado e com valor." },
          { objective: "O4", q: "Onde pode ver que competências os empregadores procuram?", options: ["Num meme", "Num horóscopo", "Num palpite da IA", "Em anúncios de emprego reais para o cargo que deseja"], answer: 3, why: "Os anúncios listam as competências pedidas." },
          { objective: "O5", q: "Que plano tem mais hipóteses de resultar?", options: ["40 horas só neste fim de semana", "2-3 horas por semana, na sua agenda", "Quando lhe apetecer", "Nenhum plano"], answer: 1, why: "Planos pequenos e regulares cumprem-se." },
          { objective: "O6", q: "Em Tarefa, Ferramenta, Verificação, Resultado, \"Verificação\" quer dizer:", options: ["Como confirmou o trabalho da IA", "O seu salário", "Um cheque do banco", "Ver o e-mail"], answer: 0, why: "Verificar mostra bom juízo." },
          { objective: "O6", q: "O que NÃO deve fazer quando descreve as suas competências de IA?", options: ["Dizer como verifica o trabalho", "Dar um exemplo concreto", "Dizer que tem competências que não tem", "Seguir as regras do seu empregador"], answer: 2, why: "A honestidade é importante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: A IA no Novo Mundo do Trabalho",
    questions: [
      { objective: "O1", q: "A melhor forma de ver um emprego é como:", options: ["Uma única tarefa", "Um conjunto de tarefas", "Só um nome de cargo", "Um salário"], answer: 1, why: "Os empregos têm muitas tarefas." },
      { objective: "O1", q: "O que é uma tarefa de rotina?", options: ["Dirigir uma reunião de equipa", "Confortar um doente com medo", "Lidar com uma emergência totalmente nova", "Escrever o mesmo relatório todos os dias"], answer: 3, why: "As tarefas de rotina repetem-se da mesma maneira." },
      { objective: "O1", q: "O que é aprender novas competências (upskilling)?", options: ["Um tipo de IA", "Despedir-se", "Trabalhar menos horas", "Aprender coisas novas para fazer melhor ou subir de cargo"], answer: 3, why: "Aprender novas competências dá-lhe novas capacidades." },
      { objective: "O2", q: "O que é uma competência humana?", options: ["Ordenar uma folha de cálculo", "Criar confiança com os clientes", "Resumir um documento", "Corrigir a ortografia"], answer: 1, why: "Criar confiança é um ponto forte humano." },
      { objective: "O2", q: "Quando a IA marca as suas tarefas, quem toma a decisão final?", options: ["O seu vizinho", "A IA", "Você", "Ninguém"], answer: 2, why: "Você conhece melhor o seu trabalho." },
      { objective: "O2", q: "Porque sublinhar as suas tarefas de competência humana?", options: ["São pontos fortes para desenvolver e para falar deles", "Para as apagar", "Para as esconder", "Não têm importância"], answer: 0, why: "As competências humanas continuam a ter valor." },
      { objective: "O3", q: "BLS quer dizer:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "O BLS publica dados sobre empregos." },
      { objective: "O3", q: "O Occupational Outlook Handbook mostra:", options: ["O que os trabalhadores fazem, como chegar lá, o salário e a previsão", "Notícias de famosos", "Dicas da bolsa", "Receitas"], answer: 0, why: "Estas são as suas secções principais." },
      { objective: "O3", q: "De onde deve tirar os números sobre o futuro do emprego?", options: ["De um resumo da IA sem verificar", "Da página oficial", "De um título de notícia", "De um boato"], answer: 1, why: "A IA pode dar números errados." },
      { objective: "O3", q: "O CareerOneStop é de:", options: ["Uma empresa de telefones", "Uma rede social", "Um banco", "O Departamento do Trabalho dos EUA"], answer: 3, why: "É um recurso do Departamento do Trabalho." },
      { objective: "O4", q: "As competências que aparecem em muitos anúncios de emprego:", options: ["Valem a pena aprender", "Não são importantes", "São ilegais", "Estão ultrapassadas"], answer: 0, why: "Os empregadores querem-nas claramente." },
      { objective: "O4", q: "Quando cola anúncios de emprego na IA, deixe de fora:", options: ["As listas de competências", "O texto do anúncio", "O nome do cargo", "As suas informações privadas"], answer: 3, why: "Mantenha os dados privados de fora." },
      { objective: "O5", q: "O que é uma prova de competência?", options: ["Um boato", "Um desejo", "Um certificado, um projeto ou uma amostra de trabalho", "Uma publicação nas redes sociais a dizer que é bom"], answer: 2, why: "A prova mostra o que sabe fazer." },
      { objective: "O5", q: "Onde pode muitas vezes encontrar cursos online gratuitos?", options: ["Em anúncios que aparecem no ecrã", "Na sua biblioteca local", "Em e-mails de spam", "Em lado nenhum"], answer: 1, why: "Muitas bibliotecas oferecem cursos gratuitos." },
      { objective: "O5", q: "Quando deve rever o seu plano de 90 dias?", options: ["A cada hora", "Nunca", "Só no dia 1", "No dia 30, 60 e 90"], answer: 3, why: "Revisões regulares mantêm-no no caminho certo." },
      { objective: "O6", q: "Uma boa resposta sobre competências de IA é:", options: ["Copiada de um site", "Vaga e exagerada", "Concreta e honesta", "Inventada"], answer: 2, why: "Respostas concretas e honestas criam confiança." },
      { objective: "O6", q: "O que cabe numa resposta Tarefa-Ferramenta-Verificação-Resultado?", options: ["\"Verifico as contagens com o relatório do leitor de códigos.\"", "\"A IA faz todo o meu trabalho.\"", "\"Colo dados de clientes em chatbots.\"", "\"Nunca verifico nada.\""], answer: 0, why: "Mostra como você confirma o trabalho." },
      { objective: "O6", q: "Antes de usar a IA no trabalho, deve conhecer:", options: ["A palavra-passe do seu colega", "As regras de IA do seu empregador", "Os números dos cartões dos clientes", "Nada"], answer: 1, why: "As regras dizem o que é permitido." },
      { objective: "O6", q: "A informação confidencial da empresa deve:", options: ["Ser colada em qualquer chatbot", "Ficar fora das ferramentas de IA, a não ser que o empregador autorize", "Ser publicada na internet", "Ser partilhada com amigos"], answer: 1, why: "Tem de ser protegida." },
      { objective: "O6", q: "O que é que este curso promete sobre empregos?", options: ["Nada; ajuda-o a planear e a ganhar competências", "Um emprego garantido", "Um aumento garantido", "Uma promoção"], answer: 0, why: "Nenhum curso pode prometer resultados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 10, 12, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Lista de tarefas marcada", objective: "O2", notYet: "Menos de oito tarefas, ou tarefas sem marca.", meets: "Pelo menos oito tarefas, cada uma marcada \"a IA pode ajudar\", \"competência humana\" ou \"ambos\".", exceeds: "Tem um círculo em duas tarefas \"a IA pode ajudar\" para experimentar e dois pontos fortes de competência humana sublinhados." },
      { name: "Factos oficiais sobre a área", objective: "O3", notYet: "Faltam factos, ou foram tirados da IA.", meets: "Três factos sobre a área tirados do Occupational Outlook Handbook do BLS.", exceeds: "Também diz qual é o American Job Center mais perto e um serviço que ele oferece." },
      { name: "Plano de 90 dias", objective: "O5", notYet: "As competências não têm recurso, tempo nem prova.", meets: "Três competências, cada uma com um recurso gratuito, tempo por semana e uma prova, revistas no dia 30, 60 e 90.", exceeds: "As duas primeiras semanas de estudo estão na agenda do aluno." },
      { name: "Resposta de 30 segundos sobre IA", objective: "O6", notYet: "A resposta é vaga ou diz que o aluno tem competências que não tem.", meets: "Uma resposta honesta Tarefa-Ferramenta-Verificação-Resultado, dita em voz alta em cerca de 30 segundos.", exceeds: "A resposta inclui um número ou um resultado concreto." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que ainda seguem o seu plano de 90 dias no dia 30 (inquérito de seguimento)",
      "Alunos que obtêm um certificado ou terminam um curso do seu plano em 90 dias",
      "Alunos que conseguem um novo emprego, uma promoção ou um aumento em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini",
      "Os sites gratuitos bls.gov/ooh e CareerOneStop, e três anúncios de emprego reais",
      "Papel, uma aplicação de notas ou uma agenda para a lista de tarefas e o plano de 90 dias",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Num centro de emprego ou num grupo no local de trabalho: façam o teste inicial juntos e depois marquem as listas de tarefas aos pares, para que os alunos possam questionar as marcas uns dos outros.",
      "Seja honesto: o curso não promete nenhum emprego; ajuda os alunos a planear e a ganhar competências.",
      "Lembre os alunos de seguirem as regras de IA do seu empregador e de manterem a informação confidencial da empresa fora das ferramentas de IA.",
      "Peça aos alunos que digam a sua resposta de 30 segundos em voz alta a um colega.",
      "Avalie o plano de carreira com IA com a grelha de avaliação e dê feedback sobre uma linha em Ainda não de cada vez."
    ]
  }
};
