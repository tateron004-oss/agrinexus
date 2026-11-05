"use strict";

// Koach Learn course (Portuguese translation of non-profits/nonprofit-board-governance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (IRS, Form 990, California Attorney General) are kept as in the English, with a short explanation.

module.exports = {
  id: "nonprofit-board-governance-pt",
  lang: "pt",
  translationOf: "nonprofit-board-governance",
  category: "Non Profits",
  name: "Governação do Conselho de Administração de uma Organização sem Fins Lucrativos",
  skills: "Deveres de cuidado, lealdade e obediência do conselho, Papéis do conselho e do pessoal, Estatutos, reuniões e atas, Gerir conflitos de interesses, Supervisão financeira e o Form 990, Recrutar membros do conselho",
  outcome: "servir ou liderar bem o conselho de uma organização sem fins lucrativos: explicar os deveres legais do conselho, manter claros os papéis do conselho e do pessoal, conduzir uma reunião correta com ata, gerir um conflito de interesses, rever as finanças e as declarações anuais e recrutar os novos membros certos.",
  about: [
    "Este curso é para membros de conselhos de organizações sem fins lucrativos, fundadores, diretores executivos, líderes de igrejas e de grupos comunitários, e qualquer pessoa convidada a entrar num conselho pela primeira vez.",
    "Um conselho é legalmente responsável pela organização. Vai aprender os três deveres principais do conselho, como o conselho e o pessoal dividem o trabalho, para que servem os estatutos, como conduzir reuniões e fazer atas, como gerir conflitos de interesses, que relatórios financeiros e que Form 990 do IRS (o serviço de impostos dos Estados Unidos) um conselho deve rever, as regras de registo de instituições de caridade da Califórnia e como recrutar bons membros para o conselho.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" que pode fazer com os documentos da sua própria organização. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso é educação geral, não é aconselhamento jurídico nem fiscal. As regras mudam de estado para estado e com o tempo, por isso verifique as fontes oficiais indicadas nas lições e peça conselho a um advogado ou contabilista de organizações sem fins lucrativos sobre a sua situação."
  ],
  finalTask: "Faça uma lista de verificação de governação de uma página para uma organização sem fins lucrativos real ou de exemplo: os três deveres com palavras simples, uma divisão entre conselho e pessoal para cinco decisões comuns, uma ordem de trabalhos de reunião com um modelo de ata, uma lista de passos para conflitos de interesses, um calendário anual de revisões financeiras e de declarações (que versão do Form 990, o seu prazo e qualquer registo no estado, como o Registry of Charities and Fundraisers da Califórnia) e um plano de recrutamento para dois lugares vagos com base numa grelha de competências.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Membros de conselhos de organizações sem fins lucrativos, fundadores, diretores executivos, líderes de igrejas e de grupos comunitários, e pessoas convidadas a entrar num conselho pela primeira vez.",
    startingPoint: "Preocupam-se com uma missão e talvez já tenham ido a reuniões do conselho. Muitos nunca leram os seus estatutos, nunca fizeram uma ata, nunca reviram um Form 990 nem geriram um conflito de interesses.",
    gap: "Um conselho é legalmente responsável pela sua organização. Os membros que não conhecem os seus deveres, a fronteira entre conselho e pessoal ou as declarações anuais põem em risco a isenção de impostos, o dinheiro e a reputação da organização. Uma lista de verificação clara ajuda-os a governar bem e a manter a confiança do público.",
    constraints: [
      "Voluntários com pouco tempo; lições de 5 minutos",
      "As regras mudam de estado para estado e com o tempo; os alunos verificam no irs.gov e no serviço de instituições de caridade do seu estado",
      "Educação geral, não é aconselhamento jurídico nem fiscal; as decisões sérias vão para um advogado ou contabilista de organizações sem fins lucrativos",
      "Palavras simples para quem está num conselho pela primeira vez e para grupos pequenos só de voluntários"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma decisão ou situação do conselho", action: "explicar os deveres de cuidado, lealdade e obediência e identificar que dever está em risco", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Usando os seus estatutos e uma grelha de competências", action: "dividir decisões comuns entre conselho e pessoal, encontrar as regras principais nos estatutos e planear como preencher os lugares vagos no conselho", standard: "com cinco decisões divididas e dois lugares ligados às competências em falta" },
    { id: "O3", condition: "Para a próxima reunião do conselho", action: "escrever uma ordem de trabalhos com uma lista de aprovação conjunta e fazer a ata com presenças, quórum, propostas, votações e ações", standard: "com todas as partes obrigatórias da ata" },
    { id: "O4", condition: "Quando um membro do conselho, a sua família ou a sua empresa pode ganhar com uma decisão", action: "seguir os passos para conflitos de interesses: declarar, sair, verificar que o negócio é justo e registar", standard: "pela ordem certa e registado na ata" },
    { id: "O5", condition: "Com as receitas, os bens e a data de fim do ano de uma organização sem fins lucrativos", action: "rever os seus relatórios financeiros e fazer um calendário anual do seu Form 990 e das declarações ao estado", standard: "com a versão e o prazo confirmados no irs.gov e no site do serviço de instituições de caridade do estado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que faz um conselho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Os três deveres: cuidado, lealdade e obediência",
          minutes: 5,
          goal: "Explicar os três deveres principais do conselho e reconhecer quando um deles está em risco.",
          text: [
            "Os membros do conselho de uma organização sem fins lucrativos guardam a organização em nome do público e das pessoas que ela serve. Essa confiança costuma ser descrita como três deveres.",
            "Dever de cuidado: prestar atenção e tomar decisões informadas. Vá às reuniões, leia os relatórios, faça perguntas e use o bom senso. Dever de lealdade: pôr os interesses da organização à frente dos seus, e nunca usar o seu lugar para beneficiar você, a sua família ou a sua empresa. Dever de obediência: garantir que a organização segue a sua missão, os seus próprios estatutos e a lei.",
            "Estes deveres são de todos os membros do conselho, não só do presidente ou do tesoureiro. \"Não li o orçamento\" não é desculpa. As regras legais exatas mudam de estado para estado, por isso pergunte a um advogado de organizações sem fins lucrativos quando uma decisão for séria."
          ],
          words: [["Conselho de administração", "o grupo legalmente responsável por supervisionar uma organização sem fins lucrativos."], ["Dever fiduciário", "um dever legal de agir no melhor interesse de outra pessoa ou entidade; os membros do conselho têm-no para com a organização."], ["Dever de cuidado", "tomar decisões informadas e cuidadosas."], ["Dever de lealdade", "pôr os interesses da organização à frente dos seus."], ["Dever de obediência", "manter a organização fiel à sua missão, aos estatutos e à lei."]],
          slides: [
            { title: "Você guarda a organização em confiança", bullets: ["Para o público e as pessoas que ela serve", "Três deveres principais"] },
            { title: "Cuidado, lealdade, obediência", bullets: ["Cuidado: estar presente, ler, perguntar, decidir bem", "Lealdade: a organização primeiro, nunca você", "Obediência: missão, estatutos e a lei"] },
            { title: "Todos os membros, sempre", bullets: ["Não só o presidente ou o tesoureiro", "\"Não li\" não é desculpa", "Decisão séria? Pergunte a um advogado de organizações sem fins lucrativos"] }
          ],
          tryIt: "Escreva um exemplo real de cada dever para uma organização sem fins lucrativos que conhece, como um banco alimentar, uma igreja ou uma liga de desporto juvenil. Depois escreva uma ação que quebraria cada dever.",
          youCanNow: "explicar os deveres de cuidado, lealdade e obediência e reconhecer quando um deles está em risco.",
          quickCheck: [
            { objective: "O1", q: "O que pede o dever de lealdade a um membro do conselho?", options: ["Chegar a horas a todas as reuniões", "Seguir os estatutos e a lei", "Pôr os interesses da organização à frente dos seus", "Angariar mais dinheiro do que todos"], answer: 2, why: "Lealdade quer dizer nunca usar o seu lugar para beneficiar você, a sua família ou a sua empresa." },
            { objective: "O1", q: "Um membro diz: \"Não leio os relatórios; o tesoureiro trata do dinheiro.\" O que lhe diz?", options: ["Todos os membros têm o dever de cuidado, por isso leia os relatórios e faça perguntas", "Está bem; só o tesoureiro é responsável", "Peça ao pessoal para votar por você", "Não vote nos assuntos de dinheiro"], answer: 0, why: "Os três deveres são de todos os membros do conselho, e não ler o orçamento não é desculpa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Os papéis do conselho e do pessoal, e os estatutos",
          minutes: 6,
          goal: "Dividir decisões comuns entre conselho e pessoal e encontrar as regras principais nos seus estatutos.",
          text: [
            "Na maioria das organizações sem fins lucrativos com pessoal pago, o conselho define o rumo e supervisiona; o pessoal faz o trabalho do dia a dia. O conselho aprova a missão, a estratégia e o orçamento, contrata, apoia e avalia o diretor executivo, vigia o dinheiro e os riscos e ajuda a angariar fundos. O diretor executivo dirige os programas, contrata e gere o resto do pessoal e toma as decisões do dia a dia.",
            "Os problemas começam quando um conselho controla demais o pessoal, ou quando um conselho aprova tudo sem fazer perguntas. Em grupos pequenos só de voluntários, os membros do conselho muitas vezes também fazem o trabalho prático, por isso tenha claro que \"chapéu\" está a usar.",
            "Os estatutos são o livro de regras da própria organização. Normalmente definem o número de membros do conselho, como são eleitos e por quanto tempo, os cargos, como se convocam as reuniões, quantos membros fazem o quórum e como funcionam as votações. Tenha uma cópia atualizada, leia-a e siga-a. Mude os estatutos só pelo processo que eles descrevem."
          ],
          steps: ["Faça uma lista de cinco decisões comuns (orçamento, contratar pessoal, um programa novo, um contrato grande, a data de um evento).", "Marque cada uma como conselho, pessoal ou ambos.", "Abra os seus estatutos e encontre: tamanho do conselho, mandatos, cargos, quórum e regras de votação.", "Anote o que o seu conselho não está a cumprir."],
          words: [["Diretor executivo", "o principal líder do pessoal, que dirige a organização no dia a dia e presta contas ao conselho."], ["Estatutos", "as regras da organização sobre como funcionam o conselho e a organização."], ["Quórum", "o número mínimo de membros que têm de estar presentes para uma reunião poder tomar decisões."], ["Controlar demais (microgestão)", "controlar os pequenos detalhes do trabalho de outra pessoa."]],
          slides: [
            { title: "Conselho: rumo e supervisão", bullets: ["Missão, estratégia e orçamento", "Contrata e avalia o diretor executivo", "Vigia o dinheiro e os riscos, ajuda a angariar fundos"] },
            { title: "Pessoal: trabalho do dia a dia", bullets: ["Dirige os programas", "Contrata e gere o resto do pessoal", "Decisões do dia a dia"] },
            { title: "Duas armadilhas", bullets: ["Controlar demais o pessoal", "Aprovar tudo sem perguntas", "Só voluntários? Saiba que chapéu está a usar"] },
            { title: "Estatutos: o seu livro de regras", bullets: ["Tamanho do conselho, mandatos, cargos", "Reuniões, quórum, votações", "Leia, siga e mude só pelo processo dos estatutos"] }
          ],
          tryIt: "Arranje os estatutos da sua organização (ou um exemplo de uma organização sem fins lucrativos que conhece). Encontre o tamanho do conselho, a duração do mandato, o quórum e como se fazem as votações. Depois divida cinco decisões comuns entre conselho, pessoal ou ambos.",
          youCanNow: "manter claros os papéis do conselho e do pessoal e encontrar as regras principais num conjunto de estatutos.",
          quickCheck: [
            { objective: "O2", q: "O que são os estatutos?", options: ["As regras de impostos do estado", "A descrição do trabalho do diretor executivo", "Uma lista de doadores", "O livro de regras da própria organização, como tamanho do conselho, mandatos, quórum e votações"], answer: 3, why: "Os estatutos são as regras da própria organização sobre como funciona o conselho." },
            { objective: "O2", q: "O presidente do conselho começa a dizer ao pessoal dos programas como fazer cada atividade do dia. Qual é o problema?", options: ["Nenhum; o presidente dirige o trabalho do dia a dia", "O conselho está a controlar demais; o trabalho do dia a dia é do pessoal, liderado pelo diretor executivo", "O presidente também devia tratar dos salários", "O pessoal é que devia votar o orçamento"], answer: 1, why: "O conselho define o rumo e supervisiona; o pessoal faz o trabalho do dia a dia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reuniões do conselho e atas",
          minutes: 5,
          goal: "Conduzir uma reunião do conselho que cumpre os estatutos e fazer uma ata clara.",
          text: [
            "Envie a ordem de trabalhos e os relatórios com pelo menos alguns dias de antecedência para os membros se prepararem. Muitos conselhos usam uma lista de aprovação conjunta para os assuntos de rotina (como aprovar a ata da última reunião), para terem tempo para as grandes questões.",
            "Confirme que há quórum antes de votar. Para cada decisão, alguém faz uma proposta, o conselho discute-a e o presidente põe-na a votação. Os membros com um conflito de interesses saem da discussão e da votação.",
            "A ata é o registo oficial. Indica a data, quem esteve presente, se havia quórum, cada proposta e o resultado da votação, os conflitos declarados e as ações com os responsáveis. Faça-a curta e com factos; não é uma transcrição palavra a palavra. Aprove-a na reunião seguinte e guarde-a em segurança."
          ],
          steps: ["Envie a ordem de trabalhos e os relatórios dias antes.", "Use uma lista de aprovação conjunta para os assuntos de rotina.", "Confirme o quórum antes de qualquer votação.", "Para cada decisão: proposta, discussão, votação.", "Faça a ata: data, presenças, quórum, propostas, votações, conflitos, ações.", "Aprove a ata na reunião seguinte e guarde-a em segurança."],
          words: [["Ata", "o registo oficial escrito do que um conselho decidiu numa reunião."], ["Proposta (moção)", "um pedido formal para o conselho votar."], ["Lista de aprovação conjunta", "um grupo de assuntos de rotina aprovados com uma só votação (em inglês, \"consent agenda\")."]],
          slides: [
            { title: "Antes da reunião", bullets: ["Ordem de trabalhos e relatórios dias antes", "Lista de aprovação conjunta para a rotina"] },
            { title: "Tomar decisões", bullets: ["Confirme o quórum", "Proposta, discussão, votação", "Quem tem conflito sai"] },
            { title: "O que a ata regista", bullets: ["Data, presenças e quórum", "Cada proposta e o resultado da votação", "Conflitos declarados, ações com responsáveis"] },
            { title: "A ata não é uma transcrição", bullets: ["Curta e com factos", "Aprovada na reunião seguinte", "Guardada em segurança"] }
          ],
          tryIt: "Escreva uma ordem de trabalhos de uma página para uma reunião do conselho, com uma parte de aprovação conjunta e dois assuntos para discussão. Depois escreva uma ata de exemplo para uma proposta, com quem a fez, a contagem dos votos e o resultado.",
          youCanNow: "conduzir uma reunião do conselho que cumpre as regras e fazer uma ata oficial e clara.",
          quickCheck: [
            { objective: "O3", q: "O que é a ata do conselho?", options: ["Uma transcrição palavra a palavra de tudo o que se disse", "O registo oficial, curto e com factos, da reunião", "A ordem de trabalhos enviada antes da reunião", "Uma lista dos números de telefone dos membros"], answer: 1, why: "A ata é o registo oficial: quem esteve presente, quórum, propostas, votações, conflitos e ações." },
            { objective: "O3", q: "Chegam só alguns membros e não tem a certeza se podem votar. O que verifica primeiro?", options: ["Se o café está pronto", "Se a ata é comprida o suficiente", "Se o pessoal concorda", "Se há quórum segundo os estatutos"], answer: 3, why: "O conselho só pode tomar decisões quando há quórum." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que faz um conselho",
        questions: [
          { objective: "O1", q: "Que dever significa ler os relatórios e fazer perguntas antes de votar?", options: ["Dever de lealdade", "Dever de obediência", "Dever de cuidado", "Dever de silêncio"], answer: 2, why: "Cuidado quer dizer tomar decisões informadas e cuidadosas." },
          { objective: "O1", q: "Um membro do conselho quer que a organização alugue um espaço à empresa dele a um preço alto. Que dever está em risco?", options: ["Dever de lealdade", "Dever de cuidado", "Dever de obediência", "Nenhum"], answer: 0, why: "Lealdade quer dizer pôr a organização à frente dos seus próprios interesses." },
          { objective: "O2", q: "Numa organização sem fins lucrativos com pessoal pago, quem costuma contratar o diretor executivo?", options: ["O voluntário mais novo", "O próprio diretor executivo", "Um doador", "O conselho"], answer: 3, why: "Contratar e avaliar o diretor executivo é uma tarefa principal do conselho." },
          { objective: "O3", q: "O que é o quórum?", options: ["A conta bancária do conselho", "O número mínimo de membros presentes para tomar decisões", "Um tipo de proposta", "O orçamento anual"], answer: 1, why: "Sem quórum, o conselho não pode votar de forma válida." },
          { objective: "O3", q: "O que deve estar na ata do conselho?", options: ["Todas as palavras que todos disseram", "As piadas da reunião", "Cada proposta e o resultado da votação", "As moradas dos membros"], answer: 2, why: "A ata regista decisões, não é uma transcrição." }
        ]
      }
    },
    {
      name: "Capítulo 2: Supervisão e formação do conselho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gerir conflitos de interesses",
          minutes: 5,
          goal: "Seguir passos claros quando um membro do conselho tem um conflito de interesses.",
          text: [
            "Há um conflito de interesses quando um membro do conselho, a sua família ou a sua empresa pode ganhar com uma decisão do conselho. Os conflitos são comuns em comunidades pequenas e nem sempre são errados, mas têm de ser tratados às claras.",
            "A maioria dos conselhos adota uma política escrita de conflitos de interesses e pede aos membros que assinem todos os anos um formulário de declaração. Quando surge um conflito: o membro informa o conselho, sai da discussão e da votação, e o conselho decide se o negócio é justo para a organização, de preferência depois de comparar outras opções. A ata regista tudo isto.",
            "Exemplo: o primo do tesoureiro tem uma gráfica que concorre para imprimir o relatório anual. O tesoureiro declara-o e sai; o conselho compara três orçamentos e escolhe o melhor valor. Os negócios com pessoas de dentro podem ter consequências fiscais e legais, por isso peça conselho a um advogado ou contabilista para qualquer negócio grande."
          ],
          steps: ["Adote uma política escrita de conflitos de interesses.", "Receba todos os anos um formulário de declaração assinado por cada membro.", "Quando surge um conflito, o membro declara-o.", "O membro sai da discussão e da votação.", "O conselho verifica que o negócio é justo, de preferência comparando opções.", "Registe tudo na ata; peça conselho para negócios grandes."],
          words: [["Conflito de interesses", "quando os interesses próprios de uma pessoa podem afetar uma decisão que ela toma pela organização."], ["Declaração", "dizer abertamente ao conselho que há um possível conflito."], ["Abster-se (sair da votação)", "sair de uma discussão e de uma votação por causa de um conflito (em inglês, \"recuse\")."]],
          slides: [
            { title: "O que é um conflito", bullets: ["Um membro, a família ou a empresa pode ganhar", "Comum, nem sempre errado", "Tem de ser tratado às claras"] },
            { title: "Política e declaração anual", bullets: ["Política escrita de conflitos de interesses", "Formulário de declaração assinado todos os anos"] },
            { title: "Quando surge um conflito", bullets: ["Declarar", "Sair da discussão e da votação", "O conselho verifica que o negócio é justo", "Registar na ata"] }
          ],
          tryIt: "Escreva com palavras simples os cinco passos que o seu conselho vai seguir quando surgir um conflito. Depois aplique-os a este caso: o cônjuge de um membro do conselho quer vender à organização uma carrinha usada.",
          youCanNow: "gerir um conflito de interesses com declaração, saída da votação, uma revisão justa e um registo escrito.",
          quickCheck: [
            { objective: "O4", q: "Quando há um conflito de interesses?", options: ["Quando um membro, a sua família ou a sua empresa pode ganhar com uma decisão do conselho", "Quando dois membros não concordam", "Quando uma reunião acaba tarde", "Quando o orçamento é apertado"], answer: 0, why: "Há conflito quando alguém do conselho pode ganhar pessoalmente com a decisão." },
            { objective: "O4", q: "A irmã de um membro tem a empresa de catering que concorre para a sua gala. O que acontece a seguir?", options: ["O membro vota, porque a família ajuda", "Esconde-se isso da ata", "O membro declara-o e sai, e o conselho compara orçamentos", "Cancela-se a gala"], answer: 2, why: "O membro declara e sai da discussão e da votação, e o conselho verifica que o negócio é justo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Supervisão financeira, Form 990 e registo no estado",
          minutes: 6,
          goal: "Rever as finanças de uma organização como membro do conselho e pôr as declarações anuais num calendário.",
          text: [
            "Todos os membros do conselho, não só o tesoureiro, devem entender o básico: o orçamento aprovado, relatórios regulares que comparam as receitas e as despesas reais com o orçamento, o balanço (o que a organização tem e o que deve), o dinheiro disponível e qualquer doação restrita que tem de ser usada para um fim específico. Faça perguntas quando os números mudam muito. Use controlos, como duas pessoas envolvidas no pagamento das contas, e uma revisão externa ou auditoria quando o tamanho da organização o exigir.",
            "A maioria das organizações isentas de impostos tem de entregar todos os anos uma declaração ao IRS da série Form 990. O IRS diz que as organizações com receitas brutas normalmente de $50,000 ou menos podem entregar o Form 990-N e-Postcard; as que têm receitas brutas abaixo de $200,000 e bens totais abaixo de $500,000 podem entregar o Form 990-EZ ou o Form 990; as maiores entregam o Form 990. O prazo é o dia 15 do 5.º mês depois do fim do ano (15 de maio para um ano que acaba a 31 de dezembro). O IRS diz que as organizações que não entregam durante três anos seguidos perdem automaticamente a isenção de impostos. Estas declarações também têm de estar disponíveis para o público. Os limites e as regras podem mudar, por isso verifique o irs.gov todos os anos. As igrejas e alguns outros grupos têm regras diferentes.",
            "Os estados têm as suas próprias regras. Na Califórnia, o Registry of Charities and Fundraisers do Attorney General (procurador-geral do estado) exige que as instituições de caridade se registem e entreguem relatórios anuais, com poucas exceções. Veja em oag.ca.gov/charities os formulários e as taxas atuais. Outros estados têm os seus próprios serviços de instituições de caridade. Peça a um contabilista que ajude a preparar as declarações, e o conselho deve revê-las antes de serem entregues."
          ],
          steps: ["Aprove um orçamento anual.", "Reveja em cada reunião os relatórios de orçamento comparado com o real.", "Verifique o dinheiro disponível, o balanço e as doações restritas.", "Use controlos: duas pessoas nos pagamentos; uma revisão externa quando for preciso.", "Ponha no calendário o prazo do Form 990; confirme a versão no irs.gov.", "Ponha no calendário as declarações ao estado (Califórnia: oag.ca.gov/charities).", "Reveja as declarações antes de serem enviadas; peça ajuda a um contabilista."],
          words: [["Orçamento comparado com o real", "um relatório que compara as receitas e as despesas planeadas com o que aconteceu de facto."], ["Balanço", "um relatório do que uma organização tem e do que deve numa data."], ["Doação restrita", "um donativo que tem de ser usado para um fim específico."], ["Form 990", "a declaração anual de informação do IRS para a maioria das organizações isentas de impostos."], ["Registry of Charities and Fundraisers", "o serviço do Attorney General da Califórnia onde as instituições de caridade se registam e entregam relatórios anuais."]],
          slides: [
            { title: "O que todos os membros revêem", bullets: ["Orçamento e orçamento comparado com o real", "Balanço e dinheiro disponível", "Doações restritas"] },
            { title: "Controlos", bullets: ["Duas pessoas envolvidas nos pagamentos", "Revisão externa ou auditoria quando o tamanho o exige", "Pergunte quando os números mudam muito"] },
            { title: "Série Form 990 do IRS (verifique no irs.gov)", bullets: ["990-N: receitas brutas normalmente de $50,000 ou menos", "990-EZ: receitas < $200,000 e bens < $500,000", "990: organizações maiores", "Prazo: dia 15 do 5.º mês; 3 anos sem entregar = perde a isenção"] },
            { title: "Regras do estado", bullets: ["Califórnia: registo no AG Registry of Charities", "Relatórios anuais; veja oag.ca.gov/charities", "Peça a um contabilista; o conselho revê antes de entregar"] }
          ],
          sources: [
            { name: "IRS: série Form 990, que formulários entregam as organizações isentas", url: "https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in" },
            { name: "IRS: prazos das declarações das organizações isentas", url: "https://www.irs.gov/charities-non-profits/return-due-dates-for-exempt-organizations-annual-return" },
            { name: "IRS: revogação automática da isenção", url: "https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption" },
            { name: "IRS: divulgação pública das declarações das organizações isentas", url: "https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-documents-subject-to-public-disclosure" },
            { name: "California Attorney General: Registry of Charities and Fundraisers", url: "https://oag.ca.gov/charities" },
            { name: "Guia para instituições de caridade do California Attorney General (PDF)", url: "https://oag.ca.gov/system/files/media/Guide%20for%20Charities.pdf" }
          ],
          tryIt: "Procure uma organização sem fins lucrativos que conhece numa base de dados pública ou no seu relatório anual. Anote a sua receita anual aproximada e decida que versão do Form 990 ela provavelmente entrega; depois confirme a regra no irs.gov. Escreva num calendário anual o prazo do seu Form 990 e, se estiver na Califórnia, a renovação no Registry.",
          youCanNow: "rever as finanças de uma organização como membro do conselho e planear as suas declarações anuais ao IRS e ao estado.",
          quickCheck: [
            { objective: "O5", q: "O que mostra o balanço?", options: ["Quem veio à reunião", "Os limites de mandato do conselho", "Os eventos do próximo ano", "O que a organização tem e o que deve"], answer: 3, why: "O balanço mostra o que a organização tem e o que deve." },
            { objective: "O5", q: "O ano da sua organização acaba a 31 de dezembro. O que põe no calendário do conselho?", options: ["Nada; as declarações são opcionais", "O prazo do Form 990, 15 de maio, depois de confirmar a versão no irs.gov", "Um lembrete para entregar de cinco em cinco anos", "Só a festa de fim de ano"], answer: 1, why: "O prazo é o dia 15 do 5.º mês depois do fim do ano, e a versão confirma-se no irs.gov." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recrutar e receber membros do conselho",
          minutes: 5,
          goal: "Usar uma grelha de competências para recrutar os membros de que a sua organização precisa.",
          text: [
            "Recrute com intenção, não só entre amigos. Faça uma grelha de competências: liste as competências e os contactos de que o seu conselho precisa (por exemplo finanças, direito, angariação de fundos, a comunidade que serve, tecnologia) e marque quais os membros atuais que os têm. As faltas dizem-lhe quem procurar. Inclua pessoas que viveram o problema em que vocês trabalham.",
            "Seja honesto sobre o cargo: quantas reuniões, que comissões, quanto tempo e se se espera que doe ou ajude a angariar dinheiro, caso isso exista. Encontre-se com os candidatos mais de uma vez, convide-os para uma reunião e peça referências. Eleja-os pelo processo dos seus estatutos.",
            "Receba os novos membros com uma sessão de acolhimento: a missão, os estatutos, o orçamento e o último relatório financeiro, as atas recentes, a política de conflitos de interesses para assinar e um colega do conselho que os acompanhe. Avalie o trabalho do próprio conselho todos os anos e use limites de mandato para que entrem sempre pessoas novas."
          ],
          steps: ["Faça uma grelha de competências; encontre as faltas.", "Procure para além dos amigos; inclua quem viveu o problema.", "Escreva uma descrição honesta do cargo e do tempo.", "Encontre-se com os candidatos, convide-os para uma reunião, peça referências.", "Eleja pelo processo dos estatutos.", "Faça uma sessão de acolhimento e escolha um colega acompanhante.", "Avalie o conselho todos os anos."],
          words: [["Grelha de competências", "um quadro das competências de que o conselho precisa e de quais os membros que as têm."], ["Acolhimento", "a receção e a formação que um novo membro recebe."], ["Limite de mandato", "um máximo de mandatos seguidos que uma pessoa pode cumprir."]],
          slides: [
            { title: "Recrute com intenção", bullets: ["Faça uma grelha de competências", "Encontre as faltas", "Procure para além dos amigos; inclua quem viveu o problema"] },
            { title: "Seja honesto sobre o cargo", bullets: ["Reuniões, comissões, tempo", "Expectativas de doar ou angariar fundos", "Encontre-se mais de uma vez, peça referências"] },
            { title: "Receba-os bem", bullets: ["Pasta de acolhimento: missão, estatutos, finanças, atas", "Assinar a política de conflitos de interesses", "Escolher um colega acompanhante"] },
            { title: "Mantenha o conselho renovado", bullets: ["Avalie o conselho todos os anos", "Use limites de mandato"] }
          ],
          tryIt: "Tarefa final: faça a sua lista de verificação de governação de uma página. Inclua os três deveres, uma divisão entre conselho e pessoal para cinco decisões, uma ordem de trabalhos e um modelo de ata, os passos para conflitos de interesses, um calendário anual de declarações e finanças e um plano de recrutamento para dois lugares a partir de uma grelha de competências.",
          youCanNow: "recrutar e receber membros do conselho que preenchem faltas reais e manter o conselho saudável ano após ano.",
          quickCheck: [
            { objective: "O2", q: "O que mostra uma grelha de competências?", options: ["Os aniversários dos membros", "O calendário das reuniões", "As competências e os contactos de que o conselho precisa, e quais os membros que os têm", "O orçamento anual"], answer: 2, why: "Uma grelha de competências mostra as faltas, e isso diz-lhe quem recrutar." },
            { objective: "O2", q: "A sua grelha mostra que ninguém tem competências em finanças. Qual é um bom passo a seguir?", options: ["Procurar para além dos amigos um candidato com competências em finanças, encontrar-se com ele e convidá-lo para uma reunião", "Convidar o seu melhor amigo, sejam quais forem as competências dele", "Deixar a falta; não importa", "Pôr o tesoureiro a fazer tudo"], answer: 0, why: "Recrute com intenção para preencher faltas, e encontre-se com os candidatos e convide-os primeiro para uma reunião." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Supervisão e formação do conselho",
        questions: [
          { objective: "O4", q: "Um membro do conselho tem um conflito num contrato. O que deve fazer?", options: ["Votar primeiro e falar disso depois", "Declará-lo e sair da discussão e da votação", "Ficar calado", "Demitir-se do conselho"], answer: 1, why: "Declarar e sair da votação deixa o conselho decidir de forma justa." },
          { objective: "O5", q: "Que relatório compara as receitas e as despesas planeadas com as reais?", options: ["Orçamento comparado com o real", "Ata", "Estatutos", "Grelha de competências"], answer: 0, why: "O orçamento comparado com o real mostra onde o plano e a realidade são diferentes." },
          { objective: "O5", q: "Segundo o IRS, que organizações pequenas podem entregar o Form 990-N e-Postcard?", options: ["Qualquer organização", "As que têm receitas brutas normalmente de $50,000 ou menos", "Só as igrejas", "As que têm mais de $1 million em bens"], answer: 1, why: "O IRS põe o limite do 990-N em receitas brutas normalmente de $50,000 ou menos." },
          { objective: "O5", q: "O que acontece se uma organização não entregar a declaração anual obrigatória durante três anos seguidos?", options: ["Nada", "Recebe só uma carta de aviso", "Tem de mudar de nome", "Perde automaticamente a isenção de impostos"], answer: 3, why: "O IRS diz que a isenção é revogada automaticamente." },
          { objective: "O2", q: "Uma primeira ferramenta útil para recrutar membros do conselho é:", options: ["Uma grelha de competências", "Uma lista só com os seus amigos", "Uma rifa", "A capa dos estatutos"], answer: 0, why: "A grelha mostra que competências faltam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Governação do Conselho de Administração de uma Organização sem Fins Lucrativos",
    questions: [
      { objective: "O1", q: "Que dever significa manter a organização fiel à sua missão e à lei?", options: ["Dever de cuidado", "Dever de lealdade", "Dever de obediência", "Dever de rapidez"], answer: 2, why: "Obediência quer dizer missão, estatutos e a lei." },
      { objective: "O1", q: "Um membro do conselho não lê o orçamento e vota sim na mesma. Que dever está mais fraco?", options: ["Dever de cuidado", "Dever de lealdade", "Dever de obediência", "Nenhum; está tudo bem"], answer: 0, why: "O cuidado exige decisões informadas." },
      { objective: "O1", q: "A quem se aplicam os três deveres do conselho?", options: ["Só ao presidente", "Só ao tesoureiro", "Só ao pessoal pago", "A todos os membros do conselho"], answer: 3, why: "Cada membro tem os deveres." },
      { objective: "O2", q: "Numa organização sem fins lucrativos com pessoal pago, quem dirige os programas do dia a dia?", options: ["O presidente do conselho", "O pessoal, liderado pelo diretor executivo", "Os doadores", "O IRS"], answer: 1, why: "O pessoal faz o trabalho do dia a dia; o conselho supervisiona." },
      { objective: "O2", q: "Um conselho vota sim em tudo sem fazer perguntas. Isto chama-se:", options: ["Boa governação", "Controlar demais", "Aprovar de olhos fechados", "Abster-se"], answer: 2, why: "Aprovar de olhos fechados falha o dever de cuidado." },
      { objective: "O2", q: "Onde encontra o tamanho do seu conselho, os mandatos e as regras de votação?", options: ["Nos estatutos", "No Form 990-N", "Numa carta de um doador", "Num jornal"], answer: 0, why: "Os estatutos são o livro de regras da organização." },
      { objective: "O3", q: "Antes de o conselho votar, o presidente deve confirmar:", options: ["Que todos concordam", "Que há quórum", "Que a imprensa está presente", "Que a votação é secreta"], answer: 1, why: "As decisões precisam de quórum para serem válidas." },
      { objective: "O3", q: "Uma lista de aprovação conjunta usa-se para:", options: ["Grandes debates de estratégia", "Despedir o diretor", "Conflitos de interesses", "Assuntos de rotina aprovados com uma só votação"], answer: 3, why: "Poupa tempo para os assuntos importantes." },
      { objective: "O3", q: "A ata do conselho deve ser:", options: ["Curta, com factos e aprovada na reunião seguinte", "Uma transcrição palavra a palavra", "Escondida do conselho", "Escrita só se houver tempo"], answer: 0, why: "A ata regista decisões e é aprovada formalmente." },
      { objective: "O4", q: "Um formulário de declaração de conflitos de interesses deve ser assinado:", options: ["Nunca", "Só quando alguém é apanhado", "Todos os anos por cada membro do conselho", "Só pelo pessoal"], answer: 2, why: "A declaração anual mantém os conflitos às claras." },
      { objective: "O4", q: "O cônjuge de um membro quer vender uma carrinha à organização. O conselho deve:", options: ["Comprá-la a qualquer preço", "Pedir ao membro que declare e saia, e depois verificar que o negócio é justo", "Deixar o membro decidir", "Esconder isso da ata"], answer: 1, why: "Declarar, sair da votação, rever de forma justa e registar." },
      { objective: "O4", q: "\"Abster-se\" por causa de um conflito quer dizer:", options: ["Sair de uma discussão e de uma votação por causa de um conflito", "Demitir-se para sempre", "Aprovar um orçamento", "Convocar uma reunião"], answer: 0, why: "Sair da votação mantém a decisão justa." },
      { objective: "O5", q: "Uma doação restrita é:", options: ["Uma doação que o conselho pode gastar em qualquer coisa", "Um empréstimo", "Uma doação que tem de ser usada para um fim específico", "Uma doação que foi recusada"], answer: 2, why: "Os doadores põem restrições que a organização tem de respeitar." },
      { objective: "O5", q: "Um bom controlo financeiro é:", options: ["Uma só pessoa trata sozinha de todo o dinheiro", "Nenhum relatório", "Pagar as contas só em dinheiro vivo", "Duas pessoas envolvidas no pagamento das contas"], answer: 3, why: "Duas pessoas reduzem o risco de erros e de roubo." },
      { objective: "O5", q: "Segundo o IRS, uma organização com receitas brutas abaixo de $200,000 e bens totais abaixo de $500,000 pode entregar:", options: ["O Form 990-EZ ou o Form 990", "Só o Form 990-PF", "Nunca nenhuma declaração", "O Form 1040"], answer: 0, why: "O IRS permite o 990-EZ ou o 990 nesse intervalo." },
      { objective: "O5", q: "Para uma organização cujo ano acaba a 31 de dezembro, o prazo do Form 990 é:", options: ["1 de janeiro", "1 de abril", "15 de maio", "31 de dezembro"], answer: 2, why: "O prazo é o dia 15 do 5.º mês depois do fim do ano." },
      { objective: "O5", q: "As declarações Form 990 são escondidas do público?", options: ["Sim, sempre", "Não; têm de estar disponíveis para consulta pública", "Só a primeira página é pública", "Só os doadores as podem ver"], answer: 1, why: "O IRS exige que as declarações anuais estejam disponíveis ao público." },
      { objective: "O5", q: "Na Califórnia, as instituições de caridade registam-se e entregam relatórios anuais:", options: ["No DMV (serviço de viação)", "Na feira do condado", "Na FAA (aviação)", "No Registry of Charities and Fundraisers do Attorney General"], answer: 3, why: "O Registry do Attorney General trata do registo das instituições de caridade na Califórnia." },
      { objective: "O5", q: "Onde devem os membros do conselho confirmar todos os anos as regras atuais das declarações?", options: ["Em sites oficiais como o irs.gov e o serviço de instituições de caridade do seu estado", "Num blogue qualquer", "Na memória do ano passado", "No palpite de um amigo"], answer: 0, why: "As regras mudam; as fontes oficiais estão atualizadas." },
      { objective: "O2", q: "Um novo membro do conselho deve receber:", options: ["Nada; vai descobrir sozinho", "Só uma t-shirt", "Uma sessão de acolhimento com missão, estatutos, finanças, atas e a política de conflitos", "As palavras-passe do diretor executivo"], answer: 2, why: "O acolhimento prepara os membros para cumprirem os seus deveres." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      15
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Os três deveres",
        objective: "O1",
        notYet: "Falta um dever ou está mal explicado.",
        meets: "Cuidado, lealdade e obediência estão cada um explicado com palavras simples.",
        exceeds: "Cada dever tem um exemplo real de o cumprir e de o quebrar."
      },
      {
        name: "Papéis e recrutamento",
        objective: "O2",
        notYet: "As decisões não estão divididas, ou o recrutamento é só entre amigos.",
        meets: "Cinco decisões divididas entre conselho, pessoal ou ambos, e dois lugares vagos ligados às faltas numa grelha de competências.",
        exceeds: "Também indica regras dos estatutos que o conselho não está a cumprir e um plano de acolhimento para novos membros."
      },
      {
        name: "Reuniões e atas",
        objective: "O3",
        notYet: "Não há ordem de trabalhos, ou a ata não tem quórum, propostas ou votações.",
        meets: "Uma ordem de trabalhos com uma lista de aprovação conjunta e um modelo de ata com todas as partes obrigatórias.",
        exceeds: "Uma ata de exemplo para uma proposta, com quem a fez, a contagem dos votos e o resultado."
      },
      {
        name: "Conflito de interesses",
        objective: "O4",
        notYet: "Faltam passos ou estão fora de ordem.",
        meets: "Declarar, sair, verificar que o negócio é justo e registar, por esta ordem.",
        exceeds: "Também inclui o formulário de declaração assinado todos os anos e quando pedir conselho jurídico."
      },
      {
        name: "Calendário de finanças e declarações",
        objective: "O5",
        notYet: "Não tem a versão nem o prazo do Form 990, ou não tem a declaração ao estado.",
        meets: "Revisões do orçamento, a versão certa do Form 990 e o seu prazo, e qualquer registo no estado, confirmados em sites oficiais.",
        exceeds: "Também lista controlos financeiros, como duas pessoas nos pagamentos, e diz onde verificou cada regra."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Conselhos que adotam uma política escrita de conflitos de interesses e formulários de declaração anuais em 90 dias",
      "Organizações que entregam o seu Form 990 e os relatórios ao estado a tempo no ano seguinte",
      "Conselhos que preenchem lugares vagos usando uma grelha de competências e fazem uma sessão de acolhimento para os novos membros"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador ou telefone com internet para verificar o irs.gov e o serviço de instituições de caridade do estado",
      "Os estatutos da sua organização, o último relatório do orçamento e atas recentes, ou um conjunto de exemplo",
      "Papel ou um documento para a lista de verificação de uma página",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça-o como uma sessão de retiro do conselho: os membros fazem juntos a lista de verificação usando os seus próprios estatutos e relatórios.",
      "Lembre ao grupo que isto é educação geral, não é aconselhamento jurídico nem fiscal; encaminhe as questões sérias para um advogado ou contabilista de organizações sem fins lucrativos.",
      "Peça aos alunos que confirmem durante a sessão os limites do Form 990 e as regras do estado nos sites oficiais, porque podem mudar.",
      "Use dramatizações para os passos de conflitos de interesses, para os membros praticarem sair de uma votação.",
      "Avalie a lista de verificação com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
