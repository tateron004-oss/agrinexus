"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-lesson-planning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "edu-ai-lesson-planning-pt",
  lang: "pt",
  translationOf: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educativos 3: IA para Planificar Aulas",
  skills: "Planificar a partir do objetivo, Pedir à IA um plano de aula completo, Verificar a exatidão e o alinhamento dos planos da IA, Incluir a diferenciação, Fazer o esboço de uma unidade, Orientar equipas a planificar com IA",
  outcome: "planificar uma aula completa com um assistente de IA, desde o objetivo e os critérios de sucesso até às atividades, à diferenciação e ao bilhete de saída, verificá-la quanto à exatidão, ao alinhamento e ao preconceito, e transformar o seu processo num modelo que a sua equipa possa reutilizar.",
  about: [
    "Este curso é para professores, coordenadores pedagógicos, chefes de departamento e diretores que apoiam a planificação. A IA pode reduzir o tempo de planificação, mas um plano rápido só é bom se estiver certo, alinhado com o que os alunos têm de aprender e adequado aos seus alunos.",
    "O Capítulo 1 ensina um processo de desenho invertido com IA: começar pelo objetivo, decidir a evidência da aprendizagem, depois construir as atividades e verificar tudo. O Capítulo 2 acrescenta a diferenciação, a planificação de unidades e a forma como os líderes orientam as equipas a planificar bem com IA.",
    "Use descrições de turmas inventadas. Nunca coloque nomes de alunos, detalhes de IEP ou de plano 504, notas ou outras informações que identifiquem alunos numa ferramenta que o seu distrito escolar não aprovou. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso. Este é o curso 3 de 8 de IA para Líderes Escolares e Educativos."
  ],
  finalTask: "Use um assistente de IA para planificar uma aula completa que você (ou um professor que você orienta) vai dar: objetivo e critérios de sucesso a partir de uma norma curricular à sua escolha, uma motivação inicial, prática guiada e prática independente, apoios para três grupos (precisa de mais apoio, no nível, pronto para mais) e um bilhete de saída de três perguntas com as respostas. Verifique-a com a lista de verificação de qualidade, registe o que mudou e porquê, e guarde os seus pedidos como um modelo para a sua equipa.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores, coordenadores pedagógicos, chefes de departamento e diretores de escolas dos Estados Unidos que planificam aulas ou apoiam professores que as planificam.",
    startingPoint: "Sabem usar um modelo de pedido para professores e conhecem as regras de privacidade dos alunos dos cursos 1 e 2. Planificam as aulas à mão e talvez já tenham usado IA para ter ideias, mas não para uma aula completa e verificada.",
    gap: "A IA pode reduzir o tempo de planificação, mas os planos rápidos muitas vezes são longos demais, desalinhados ou errados. Os professores e os líderes precisam de um processo de desenho invertido com IA, de uma verificação de qualidade para a exatidão, o alinhamento e o preconceito, e de um modelo que a equipa possa reutilizar.",
    constraints: [
      "Use descrições de turmas inventadas; nunca coloque nomes de alunos, detalhes de IEP ou de plano 504, notas ou outras informações que identifiquem alunos numa ferramenta que o distrito não aprovou",
      "As normas curriculares vêm da fonte oficial do estado ou do distrito, não da IA",
      "As adaptações do IEP e do plano 504 são planificadas com os colegas de educação especial e têm de continuar a ser dadas",
      "Aparelhos: um computador com internet e um assistente de IA",
      "Tempo: lições curtas, que cabem num dia de aulas"
    ],
    prerequisites: "\"IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma norma curricular copiada da fonte oficial", action: "escrever um objetivo \"Eu consigo\" e três critérios de sucesso com a ajuda da IA", standard: "editados até estarem prontos para o quadro, antes de pedir atividades" },
    { id: "O2", condition: "Com o seu objetivo", action: "escrever um pedido reutilizável que obtém da IA um rascunho de aula completo", standard: "incluindo a duração da aula, os conhecimentos prévios, os materiais e as partes, com pelo menos dois pedidos de seguimento" },
    { id: "O3", condition: "Com um rascunho de aula feito pela IA", action: "verificá-lo com a lista de verificação de qualidade de cinco pontos e registar as suas mudanças", standard: "corrigindo todos os problemas encontrados" },
    { id: "O4", condition: "Com uma aula e uma turma descrita por necessidades", action: "planificar apoios para três grupos: precisa de mais apoio, no nível e pronto para mais", standard: "com as adaptações do IEP e do plano 504 confirmadas com um colega de educação especial" },
    { id: "O5", condition: "Com a unidade a que a sua aula pertence", action: "fazer com a IA o esboço da unidade e ajustar o seu ritmo", standard: "acrescentando um dia de revisão e três conceções erradas a prever" },
    { id: "O6", condition: "Para a sua equipa ou PLC", action: "transformar os seus pedidos de planificação e a lista de verificação num modelo da equipa e orientar outros a usá-lo", standard: "registando o tempo poupado e os problemas de qualidade" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planificar uma aula com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comece pelo objetivo, não pela atividade",
          minutes: 5,
          goal: "Escrever um objetivo claro e critérios de sucesso antes de pedir atividades à IA.",
          text: [
            "A IA cria com gosto uma atividade divertida que não ensina nada de especial. O desenho invertido evita isso: primeiro decida o que os alunos devem saber ou ser capazes de fazer, depois como vai ver isso, e só depois as atividades.",
            "Quem escolhe a norma curricular é você. Copie as palavras exatas do site oficial de normas do seu estado ou do currículo do seu distrito, não da IA, porque a IA pode citar mal ou inventar códigos de normas. Depois peça à IA para a transformar num objetivo em palavras simples para os alunos (\"Eu consigo...\") e em dois ou três critérios de sucesso.",
            "Exemplo de pedido: \"Aqui está uma norma: [cole-a]. Escreva um objetivo para uma aula do 6.º ano em palavras simples para os alunos, e três critérios de sucesso que mostrem que o objetivo foi atingido.\" Edite até estar pronto para escrever no quadro."
          ],
          steps: ["Escolha a norma na fonte do seu estado ou distrito.", "Cole as palavras exatas no pedido.", "Peça um objetivo \"Eu consigo\" e critérios de sucesso.", "Edite até ficar claro para os alunos.", "Só depois planifique as atividades."],
          words: [["Desenho invertido", "planificar a partir do objetivo de aprendizagem, depois da evidência, depois das atividades."], ["Critérios de sucesso", "o que os alunos vão conseguir mostrar quando atingirem o objetivo."], ["Norma curricular", "a declaração oficial do que os alunos devem aprender, definida pelo seu estado ou distrito."]],
          slides: [
            { title: "Desenho invertido", bullets: ["1. O que os alunos devem aprender?", "2. Como vamos ver isso?", "3. Depois as atividades"] },
            { title: "Quem escolhe a norma é você", bullets: ["Copie-a da fonte oficial do estado ou do distrito", "A IA pode citar mal ou inventar códigos de normas"] },
            { title: "Objetivo e critérios de sucesso", bullets: ["\"Eu consigo...\" em palavras simples para os alunos", "Duas ou três coisas que os alunos vão mostrar"] }
          ],
          tryIt: "Escolha uma norma para uma aula que vai dar em breve. Copie-a da fonte oficial e depois use a IA para escrever um objetivo \"Eu consigo\" e três critérios de sucesso. Edite-os até estarem prontos para o quadro.",
          youCanNow: "começar um plano de aula com ajuda da IA a partir de uma norma real, de um objetivo e de critérios de sucesso.",
          quickCheck: [
            { objective: "O1", q: "O que são critérios de sucesso?", options: ["As notas que os alunos tiveram no ano passado", "O que os alunos vão mostrar quando atingirem o objetivo", "A lista de materiais", "Os objetivos do professor para o ano"], answer: 1, why: "Os critérios de sucesso descrevem a evidência da aprendizagem para o objetivo." },
            { objective: "O1", q: "A IA dá-lhe um código de norma para o seu objetivo. O que faz?", options: ["Usa-o, porque a IA conhece as normas", "Pede à IA para o confirmar", "Copia a norma da fonte oficial do seu estado ou distrito", "Deixa a norma de fora"], answer: 2, why: "A IA pode citar mal ou inventar normas, por isso elas vêm da fonte oficial." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pedir a aula completa",
          minutes: 6,
          goal: "Obter da IA um rascunho de plano de aula organizado com um pedido reutilizável.",
          text: [
            "Com o objetivo definido, peça a aula inteira no formato da sua escola. Um pedido forte indica: o ano e a disciplina, a duração da aula, o objetivo e os critérios de sucesso, o que os alunos já sabem, os materiais que tem e as partes que quer.",
            "Exemplo: \"Planifique uma aula de 50 minutos para o 6.º ano. Objetivo: [cole]. Critérios de sucesso: [cole]. Os alunos já sabem [x]. Materiais: quadros brancos pequenos, um projetor, sem aparelhos. Partes: motivação (5 min), mini-lição (10), prática guiada (15), prática independente (15), bilhete de saída (5). Use uma tabela com o tempo, as ações do professor e as ações dos alunos.\"",
            "Trate o resultado como um rascunho de um colega rápido, mas novo. Faça pedidos de seguimento: \"ligue a motivação à vida dos alunos\", \"acrescente duas verificações da compreensão durante a mini-lição\", \"reduza a prática guiada para 10 minutos\"."
          ],
          steps: ["Indique o ano, a disciplina e a duração da aula.", "Cole o objetivo e os critérios de sucesso.", "Diga o que os alunos sabem e que materiais tem.", "Liste as partes e os tempos que quer.", "Peça uma tabela e melhore-a com pedidos de seguimento."],
          words: [["Mini-lição", "uma parte de ensino curta e focada."], ["Verificação da compreensão", "uma forma rápida de ver se os alunos estão a acompanhar, como o polegar para cima ou uma resposta num quadro pequeno."]],
          slides: [
            { title: "Dê o contexto à IA", bullets: ["Ano, disciplina, duração da aula", "Objetivo e critérios de sucesso", "Conhecimentos prévios e materiais"] },
            { title: "Peça o seu formato", bullets: ["Partes com tempos", "Tabela: tempo, professor, alunos"] },
            { title: "Melhore-o", bullets: ["\"Ligue a motivação à vida dos alunos\"", "\"Acrescente duas verificações da compreensão\""] }
          ],
          tryIt: "Use o modelo de pedido para obter um rascunho de aula completo para o seu objetivo da Lição 1. Faça pelo menos dois pedidos de seguimento para o melhorar.",
          youCanNow: "obter da IA um rascunho de aula organizado e útil, e melhorá-lo com pedidos de seguimento.",
          quickCheck: [
            { objective: "O2", q: "Como deve tratar um rascunho de aula feito pela IA?", options: ["Como um rascunho de um colega rápido, mas novo", "Como um plano acabado, pronto para dar", "Como um plano aprovado pelo seu distrito", "Como algo para esconder dos colegas"], answer: 0, why: "Os rascunhos da IA são rápidos, mas precisam do seu juízo antes de serem usados." },
            { objective: "O2", q: "A aula da IA não tem nenhuma verificação da compreensão. O que faz?", options: ["Dá a aula assim", "Começa uma conversa nova noutra ferramenta", "Tira as atividades de prática", "Faz um pedido de seguimento: \"Acrescente uma verificação rápida da compreensão depois da prática guiada\""], answer: 3, why: "Os pedidos de seguimento preenchem as falhas do rascunho sem começar de novo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificar o plano: exatidão, alinhamento e preconceito",
          minutes: 5,
          goal: "Verificar um plano de aula da IA com uma lista de verificação de qualidade de cinco pontos.",
          text: [
            "Todo o plano da IA precisa da verificação de um professor antes de chegar aos alunos. Use cinco perguntas. Certo: todos os factos, exemplos, datas e respostas estão corretos? Alinhado: cada atividade leva os alunos em direção ao objetivo, e o bilhete de saída mede-o?",
            "Nível certo: a dificuldade e a duração são adequadas a estes alunos e a este tempo? Justo e inclusivo: os exemplos, os nomes e os contextos são respeitosos e variados, sem estereótipos, e acessíveis aos alunos com deficiência e aos que estão a aprender inglês? Possível: tem os materiais e o tempo?",
            "Marque o que mudou. Com o tempo, isto mostra à sua equipa onde os planos da IA costumam falhar (muitas vezes: conteúdo demais para o tempo, e atividades que parecem movimentadas mas não praticam o objetivo)."
          ],
          steps: ["Certo: verifique os factos, os exemplos e as respostas.", "Alinhado: cada atividade serve o objetivo; o bilhete de saída mede-o.", "Nível certo para estes alunos e este tempo.", "Justo e inclusivo: sem estereótipos; acessível.", "Possível com os seus materiais; anote o que mudou."],
          words: [["Alinhamento", "quando os objetivos, as atividades e a avaliação correspondem uns aos outros."], ["Estereótipo", "uma ideia injusta e fixa sobre um grupo de pessoas."], ["Acessível", "que todos os alunos conseguem usar, incluindo os que têm deficiência."]],
          slides: [
            { title: "A verificação de cinco pontos", bullets: ["Certo", "Alinhado", "Nível certo", "Justo e inclusivo; possível"] },
            { title: "Problemas comuns dos planos da IA", bullets: ["Conteúdo demais para o tempo", "Atividades movimentadas que falham o objetivo", "Respostas erradas ou factos inventados"] },
            { title: "Registe as suas mudanças", bullets: ["Mostra onde os planos da IA falham", "Desenvolve o juízo da sua equipa"] }
          ],
          tryIt: "Passe o seu rascunho de aula pela verificação de cinco pontos. Corrija todos os problemas e faça a lista das mudanças que fez.",
          youCanNow: "verificar um plano de aula da IA quanto à exatidão, ao alinhamento, ao nível, à justiça e à viabilidade.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer alinhamento num plano de aula?", options: ["A aula está bem impressa", "A aula segue a ordem do manual", "Os objetivos, as atividades e a avaliação correspondem", "A aula usa as ferramentas mais novas"], answer: 2, why: "Numa aula alinhada pratica-se e avalia-se a mesma coisa que o objetivo indica." },
            { objective: "O3", q: "O plano da IA põe cinco atividades numa aula de 45 minutos. O que muda?", options: ["Corta para caber no tempo, ficando com as atividades que praticam o objetivo", "Fica com as cinco e faz tudo à pressa", "Acrescenta mais uma atividade", "Pede aos alunos para acabar em casa"], answer: 0, why: "Conteúdo demais para o tempo é o problema mais comum dos planos da IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planificar uma aula com IA",
        questions: [
          { objective: "O1", q: "No desenho invertido, o que vem primeiro?", options: ["Uma atividade divertida", "A ficha de trabalho", "O que os alunos devem aprender", "A planta da sala"], answer: 2, why: "Planifique a partir do objetivo de aprendizagem." },
          { objective: "O1", q: "De onde devem vir as palavras da norma curricular?", options: ["Da fonte oficial do seu estado ou distrito", "Do que a IA disser", "De um site qualquer", "Da memória"], answer: 0, why: "A IA pode citar mal ou inventar normas." },
          { objective: "O2", q: "Que dado ajuda mais num pedido para planificar uma aula?", options: ["Os nomes dos alunos com dificuldades", "O número de telefone do diretor", "As notas dos testes dos alunos com os nomes", "A duração da aula, o objetivo, os conhecimentos prévios e os materiais"], answer: 3, why: "O contexto melhora o plano sem dados privados." },
          { objective: "O3", q: "Uma atividade da IA é divertida, mas não pratica o objetivo. Que verificação falha?", options: ["Certo", "Alinhado", "Possível", "Justo"], answer: 1, why: "Alinhamento quer dizer que as atividades servem o objetivo." },
          { objective: "O3", q: "Qual é o problema mais comum dos planos de aula da IA?", options: ["Conteúdo de menos", "Tempos perfeitos", "Nenhum texto", "Conteúdo demais para o tempo"], answer: 3, why: "A IA muitas vezes enche o tempo demais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Diferenciação, unidades e planificação em equipa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Incluir a diferenciação",
          minutes: 6,
          goal: "Usar a IA para planificar apoios para os alunos que precisam de mais ajuda e desafios para os que estão prontos para mais.",
          text: [
            "Descreva os grupos pela necessidade, nunca pelo nome: \"alunos que precisam de mais apoio em problemas com vários passos\", \"alunos no nível\", \"alunos prontos para mais desafio\". Peça à IA o mesmo objetivo atingido de três maneiras: mais andaimes (exemplos resolvidos, inícios de frase, imagens), prática no nível e aprofundamento (um problema mais difícil ou uma tarefa de transferência).",
            "Peça apoios que ajudam todos: imagens claras, vocabulário com imagens, escolhas na forma como os alunos mostram o que aprenderam. Esta abordagem, planificar para a variedade desde o início, chama-se muitas vezes Desenho Universal para a Aprendizagem (UDL, sigla em inglês); procure as UDL Guidelines da CAST para saber mais.",
            "Os alunos com IEP ou com plano 504 têm de receber as adaptações dos seus planos; os apoios criados pela IA nunca as substituem. Confirme com o professor de educação especial e não coloque detalhes dos planos em ferramentas não aprovadas."
          ],
          steps: ["Descreva os grupos pela necessidade, não pelo nome.", "Peça três caminhos para o mesmo objetivo.", "Peça apoios que ajudam todos: imagens, vocabulário, escolha.", "Confirme as adaptações do IEP e do plano 504 com o professor de educação especial.", "Mantenha os detalhes dos planos fora de ferramentas não aprovadas."],
          words: [["Diferenciação", "ajustar o ensino para que alunos com necessidades diferentes atinjam o mesmo objetivo."], ["Andaime", "um apoio temporário, como exemplos resolvidos ou inícios de frase."], ["Desenho Universal para a Aprendizagem (UDL)", "planificar as aulas para uma grande variedade de alunos desde o início."]],
          slides: [
            { title: "Grupos pela necessidade, não pelo nome", bullets: ["Precisa de mais apoio", "No nível", "Pronto para mais"] },
            { title: "Três caminhos, um objetivo", bullets: ["Andaimes: exemplos, inícios de frase, imagens", "Prática no nível", "Aprofundamento ou tarefa de transferência"] },
            { title: "Apoios para todos", bullets: ["Imagens, vocabulário, escolha", "UDL: veja as UDL Guidelines da CAST"] },
            { title: "IEP e planos 504", bullets: ["As adaptações obrigatórias continuam a valer", "Os apoios da IA nunca as substituem"] }
          ],
          tryIt: "Acrescente a diferenciação à sua aula: peça à IA três caminhos para o objetivo, verifique-os e confirme que adaptações do IEP ou do plano 504 ainda precisam de ser planificadas com o seu colega de educação especial.",
          youCanNow: "planificar com IA apoio e desafio para alunos diferentes, respeitando as adaptações obrigatórias.",
          quickCheck: [
            { objective: "O4", q: "O que é um andaime?", options: ["Dar trabalho a mais aos alunos avançados", "Apoios como exemplos resolvidos e inícios de frase", "Testar os alunos antes de uma aula", "Sentar os alunos em grupos"], answer: 1, why: "Os andaimes ajudam os alunos a atingir o mesmo objetivo com apoio." },
            { objective: "O4", q: "A IA sugere apoios diferentes da adaptação do IEP de um aluno. O que faz?", options: ["Usa os apoios da IA no lugar", "Pede à IA para decidir", "Deixa os dois e dá a aula como sempre", "Dá a adaptação do IEP e planifica com o seu colega de educação especial"], answer: 3, why: "As adaptações do IEP e do plano 504 têm de ser dadas, diga a IA o que disser." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Da aula à unidade",
          minutes: 5,
          goal: "Fazer com a IA o esboço de uma unidade e verificar o seu ritmo.",
          text: [
            "Uma unidade é uma sequência de aulas que leva a objetivos maiores. Dê à IA as normas da unidade (da sua fonte oficial), o número de dias de aula, os feriados ou dias de testes, e o ponto de partida dos alunos. Peça um esboço dia a dia com objetivos, atividades principais e pontos de verificação.",
            "Verifique primeiro o ritmo: a IA muitas vezes mete conteúdo demais. Confirme que cada aula se apoia na anterior, que há dias de revisão e um plano para voltar a ensinar, e que a avaliação do fim da unidade corresponde aos objetivos.",
            "Use a IA para gerar ideias naquilo em que ela é boa: um projeto da vida real para ancorar a unidade, conceções erradas comuns a prever e perguntas que fazem os alunos pensar. Quem decide o que serve é você."
          ],
          steps: ["Dê as normas da unidade, o número de dias e as interrupções do calendário.", "Peça um esboço dia a dia com objetivos e pontos de verificação.", "Verifique o ritmo: corte, acrescente dias de revisão e para voltar a ensinar.", "Confirme que a avaliação final corresponde aos objetivos.", "Use a IA para gerar ideias de conceções erradas e projetos âncora."],
          words: [["Unidade", "um conjunto de aulas que trabalham para objetivos de aprendizagem maiores."], ["Ritmo", "quanto se ensina em cada dia e a que velocidade a turma avança."], ["Conceção errada", "uma ideia errada comum que os alunos têm sobre um tema."]],
          slides: [
            { title: "Dê o contexto da unidade", bullets: ["Normas da fonte oficial", "Número de dias e interrupções do calendário", "Ponto de partida dos alunos"] },
            { title: "Verifique o ritmo", bullets: ["A IA muitas vezes mete conteúdo demais", "Acrescente dias de revisão e para voltar a ensinar", "A avaliação corresponde aos objetivos"] },
            { title: "Gere ideias com a IA", bullets: ["Conceções erradas comuns", "Projetos âncora", "Perguntas que fazem os alunos pensar"] }
          ],
          tryIt: "Peça à IA um esboço de dez dias da unidade a que a sua aula pertence. Ajuste o ritmo, acrescente um dia de revisão e faça a lista de três conceções erradas a prever.",
          youCanNow: "fazer com a IA o esboço de uma unidade e ajustar o seu ritmo.",
          quickCheck: [
            { objective: "O5", q: "O que deve incluir um pedido para o esboço de uma unidade?", options: ["As normas, o número de dias e as interrupções do calendário", "Os nomes e as notas dos alunos", "Só o título da unidade", "O salário do professor"], answer: 0, why: "Os dias e as interrupções do calendário deixam a IA propor um ritmo realista." },
            { objective: "O5", q: "O esboço da IA cobre a unidade em dez dias sem revisão. O que faz?", options: ["Aceita-o como está", "Acrescenta mais três unidades", "Ajusta o ritmo e acrescenta um dia de revisão", "Tira a avaliação"], answer: 2, why: "O ritmo é a primeira coisa a verificar, e o tempo de revisão muitas vezes falta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Orientar equipas a planificar com IA",
          minutes: 6,
          goal: "Transformar o seu processo de planificação num modelo e orientar uma equipa a usá-lo.",
          text: [
            "Os líderes multiplicam as boas práticas quando as tornam repetíveis. Transforme o que aprendeu num modelo de planificação: os pedidos para o objetivo, a aula completa, a diferenciação e a unidade, mais a lista de verificação de qualidade de cinco pontos.",
            "Use-o numa reunião de equipa ou de comunidade de aprendizagem profissional (PLC): cada professor planifica uma aula com o modelo, depois os colegas trocam os planos e fazem a verificação de qualidade no plano do outro. Conversem sobre o que a IA errou; isso desenvolve um juízo comum mais depressa do que qualquer slide de formação.",
            "Defina as expectativas: os planos feitos com ajuda da IA são bem-vindos, e os professores continuam responsáveis pelo que ensinam. Garanta que só se usam ferramentas aprovadas e que nenhuma informação dos alunos entra nelas. Peça aos professores para anotarem o tempo poupado e os problemas de qualidade, para saber se a prática está a funcionar."
          ],
          steps: ["Escreva o modelo de planificação: quatro pedidos e a lista de verificação.", "Numa reunião de equipa, cada professor planifica uma aula com ele.", "Os colegas trocam os planos e fazem a verificação de qualidade.", "Conversem sobre o que a IA errou.", "Defina as expectativas e registe o tempo poupado e os problemas de qualidade."],
          words: [["PLC", "comunidade de aprendizagem profissional (sigla em inglês): uma equipa de professores que se reúne para melhorar o ensino em conjunto."], ["Modelo", "um formato inicial que se pode reutilizar."]],
          slides: [
            { title: "Torne-o repetível", bullets: ["Quatro pedidos: objetivo, aula, diferenciação, unidade", "Mais a lista de verificação de cinco pontos"] },
            { title: "Prática em equipa", bullets: ["Cada professor planifica uma aula", "Os colegas trocam e verificam", "Conversem sobre o que a IA errou"] },
            { title: "Expectativas claras", bullets: ["Os professores respondem pelo que ensinam", "Ferramentas aprovadas, sem dados dos alunos", "Registe o tempo poupado e a qualidade"] }
          ],
          tryIt: "Tarefa final: termine o seu plano de aula completo (objetivo, critérios de sucesso, motivação, prática guiada e independente, três grupos, bilhete de saída com respostas), verifique-o com a lista de cinco pontos, registe as suas mudanças e guarde os seus quatro pedidos e a lista de verificação como modelo da equipa.",
          youCanNow: "planificar aulas com IA com um alto nível de qualidade e ajudar uma equipa a fazer o mesmo.",
          quickCheck: [
            { objective: "O6", q: "O que deve incluir um modelo de planificação da equipa?", options: ["Só a aula final", "Os pedidos e a lista de verificação de qualidade", "Uma lista de ferramentas proibidas", "A palavra-passe da ferramenta de IA"], answer: 1, why: "Os pedidos e a lista de verificação deixam os outros repetir o processo e as verificações." },
            { objective: "O6", q: "Quer saber se planificar com IA está a ajudar a sua equipa. O que regista?", options: ["Quantos pedidos cada professor escreve", "Que ferramenta de IA é a mais nova", "Nada; pergunta uma vez por ano", "O tempo poupado e os problemas de qualidade encontrados"], answer: 3, why: "O tempo poupado e os problemas de qualidade mostram se o processo funciona." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Diferenciação, unidades e planificação em equipa",
        questions: [
          { objective: "O4", q: "Como deve descrever os grupos de alunos num pedido?", options: ["Pelo nome", "Pela nota do teste e pelo nome", "Pela necessidade, como \"precisa de mais apoio em problemas com vários passos\"", "Pelo rendimento da família"], answer: 2, why: "Descreva as necessidades sem identificar os alunos." },
          { objective: "O4", q: "O IEP de um aluno indica uma adaptação. A IA sugeriu apoios diferentes. O que vale?", options: ["A adaptação do IEP tem de ser dada na mesma", "Os apoios da IA substituem o IEP", "Nenhum dos dois", "Pedir à IA para decidir"], answer: 0, why: "As adaptações obrigatórias não são substituídas pelas sugestões da IA." },
          { objective: "O5", q: "Qual é a primeira coisa a verificar num esboço de unidade feito pela IA?", options: ["O tipo de letra", "O ritmo", "O título", "As cores"], answer: 1, why: "A IA muitas vezes mete conteúdo demais." },
          { objective: "O6", q: "Numa PLC, porque é que os colegas verificam os planos da IA uns dos outros?", options: ["Para desenvolver um juízo comum sobre onde a IA erra", "Para dar notas aos professores", "Para não ter de planificar", "Para usar mais IA"], answer: 0, why: "Conversar sobre os erros desenvolve o juízo da equipa." },
          { objective: "O6", q: "Quem é responsável por uma aula feita com ajuda da IA e dada na turma?", options: ["A empresa da IA", "Ninguém", "Os alunos", "O professor"], answer: 3, why: "Os professores continuam responsáveis pelo que ensinam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educativos 3: IA para Planificar Aulas",
    questions: [
      { objective: "O1", q: "O desenho invertido planifica em que ordem?", options: ["Atividades, objetivo, evidência", "Objetivo, evidência, atividades", "Ficha de trabalho, teste, objetivo", "Evidência, atividades, objetivo"], answer: 1, why: "Comece pelo objetivo." },
      { objective: "O1", q: "Os critérios de sucesso descrevem:", options: ["A disposição da sala", "O salário do professor", "O que os alunos vão mostrar quando atingirem o objetivo", "O horário dos toques"], answer: 2, why: "Tornam o objetivo visível." },
      { objective: "O1", q: "Um objetivo \"Eu consigo\" é:", options: ["Uma nota de teste", "Um slogan", "O objetivo em palavras simples para os alunos", "Uma regra"], answer: 2, why: "Os alunos devem entender o objetivo." },
      { objective: "O1", q: "Porque não tirar os códigos das normas da IA?", options: ["A IA pode citá-los mal ou inventá-los", "São secretos", "A IA nunca conhece as normas", "São longos demais"], answer: 0, why: "Use a fonte oficial." },
      { objective: "O2", q: "Um pedido de aula completa deve incluir:", options: ["Notas com nomes", "Nomes de alunos", "Emails dos pais", "Duração da aula, objetivo, conhecimentos prévios, materiais, partes"], answer: 3, why: "Contexto, não dados privados." },
      { objective: "O2", q: "Um rascunho de aula da IA deve ser tratado como:", options: ["O plano final", "Um rascunho de um colega rápido, mas novo", "Um documento legal", "Um trabalho de um aluno"], answer: 1, why: "Os professores reveem e editam." },
      { objective: "O2", q: "Uma verificação da compreensão é:", options: ["Uma reunião com os pais", "Um cheque do banco", "Uma caderneta de notas", "Uma forma rápida de ver se os alunos estão a acompanhar"], answer: 3, why: "Apanha a confusão cedo." },
      { objective: "O3", q: "Qual faz parte da verificação de cinco pontos?", options: ["O mais longo", "O mais colorido", "Justo e inclusivo", "O mais popular"], answer: 2, why: "A justiça e o acesso fazem parte da qualidade." },
      { objective: "O3", q: "Alinhamento quer dizer:", options: ["Os objetivos, as atividades e a avaliação correspondem", "Carteiras em filas", "O plano é longo", "A IA concordou"], answer: 0, why: "Tudo serve o objetivo." },
      { objective: "O3", q: "Porque registar o que mudou num plano da IA?", options: ["É obrigatório por lei", "Mostra onde os planos da IA falham", "Torna o plano mais longo", "Para culpar a IA"], answer: 1, why: "Desenvolve o juízo com o tempo." },
      { objective: "O4", q: "Diferenciação quer dizer:", options: ["Ajustar o ensino para que alunos diferentes atinjam o mesmo objetivo", "Dar notas diferentes", "Separar as turmas para sempre", "Usar ferramentas de IA diferentes"], answer: 0, why: "Mesmo objetivo, caminhos diferentes." },
      { objective: "O4", q: "Os andaimes incluem:", options: ["Castigo", "Tirar todo o apoio", "Um teste mais difícil", "Exemplos resolvidos e inícios de frase"], answer: 3, why: "Os apoios temporários ajudam os alunos a atingir o objetivo." },
      { objective: "O4", q: "UDL é a sigla em inglês de:", options: ["Unit Daily Lesson", "Universal Design for Learning", "Upper Division Level", "Unified District Login"], answer: 1, why: "Desenho Universal para a Aprendizagem: planificar para uma grande variedade de alunos desde o início." },
      { objective: "O4", q: "Uma tarefa de aprofundamento é para os alunos que:", options: ["Precisam de mais apoio", "Faltaram", "Estão prontos para mais desafio", "Terminaram o ano"], answer: 2, why: "Aprofunda a aprendizagem dos alunos que estão prontos." },
      { objective: "O4", q: "As adaptações do IEP e do plano 504:", options: ["Podem ir para qualquer ferramenta de IA", "Podem ser substituídas pelos apoios da IA", "Têm de ser dadas, diga a IA o que disser", "São opcionais"], answer: 2, why: "São obrigatórias." },
      { objective: "O5", q: "Um pedido para o esboço de uma unidade deve incluir:", options: ["As normas, o número de dias e as interrupções do calendário", "Nomes de alunos", "Salários do pessoal", "Nada"], answer: 0, why: "O ritmo depende do tempo real disponível." },
      { objective: "O5", q: "Na planificação de unidades, a IA é especialmente útil para:", options: ["Aprovar ferramentas", "Decidir notas", "Escrever IEP", "Gerar ideias de conceções erradas e projetos âncora"], answer: 3, why: "Gerar ideias é um ponto forte; quem decide o que serve é você." },
      { objective: "O6", q: "Um modelo de planificação deve incluir:", options: ["Dados dos alunos", "Os pedidos e a lista de verificação de qualidade", "Palavras-passe", "Nada"], answer: 1, why: "Torna as boas práticas repetíveis." },
      { objective: "O6", q: "PLC é a sigla em inglês de:", options: ["Conselho de liderança de diretores", "Cartão da biblioteca pública", "Calendário de planificação de aulas", "Comunidade de aprendizagem profissional"], answer: 3, why: "Professores a melhorar o ensino em conjunto." },
      { objective: "O6", q: "Para saber se planificar com IA está a funcionar, os líderes devem registar:", options: ["Nada", "Só o tempo poupado", "O tempo poupado e os problemas de qualidade", "O número de pedidos escritos"], answer: 2, why: "Rapidez sem qualidade não é sucesso." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 1, 3, 4, 7, 8, 10, 14, 15, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Objetivo e critérios de sucesso", objective: "O1", notYet: "Não há objetivo, ou a norma não veio de uma fonte oficial.", meets: "Um objetivo e critérios de sucesso a partir de uma norma copiada da fonte oficial.", exceeds: "O objetivo está escrito como uma frase \"Eu consigo\" clara, que os alunos entendem." },
      { name: "Aula completa", objective: "O2", notYet: "Falta a motivação, a prática guiada ou independente, ou o bilhete de saída.", meets: "Tem motivação, prática guiada e independente, e um bilhete de saída de três perguntas com as respostas.", exceeds: "Inclui uma verificação da compreensão e cabe na duração da aula." },
      { name: "Três grupos", objective: "O4", notYet: "Faltam os apoios para um ou mais grupos.", meets: "Apoios para precisa de mais apoio, no nível e pronto para mais.", exceeds: "Indica que adaptações do IEP ou do plano 504 ainda precisam de ser planificadas com um colega de educação especial." },
      { name: "Qualidade verificada", objective: "O3", notYet: "Não foi verificado, ou as mudanças não foram registadas.", meets: "Verificado com a lista de cinco pontos, com cada mudança e a razão registadas.", exceeds: "O registo mostra padrões de onde o plano da IA falhou." },
      { name: "Modelo da equipa", objective: "O6", notYet: "Os pedidos não foram guardados, ou não há lista de verificação.", meets: "Os pedidos e a lista de verificação foram guardados como modelo para a equipa.", exceeds: "Um colega já usou o modelo numa aula sua." }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Equipas que usam o modelo de planificação comum em 30 dias (inquérito de seguimento)",
      "Professores que dizem poupar tempo de planificação sem perder qualidade nas aulas (inquérito de seguimento)",
      "Líderes que seguem para o curso 4 de IA para Líderes Escolares e Educativos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e um assistente de IA, de preferência um que o distrito aprovou",
      "Uma norma curricular de uma aula próxima, copiada da fonte oficial do estado ou do distrito",
      "Uma descrição de turma inventada",
      "A lista de verificação de qualidade de cinco pontos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois planifiquem uma aula em grupo antes de os professores planificarem as suas.",
      "Use só descrições de turmas inventadas; nunca nomes verdadeiros de alunos, detalhes de IEP ou de plano 504, nem notas.",
      "Numa PLC, peça aos colegas para verificarem os planos da IA uns dos outros com a lista de cinco pontos.",
      "Convide um colega de educação especial para a sessão sobre diferenciação.",
      "Avalie a tarefa final com a grelha de avaliação e peça o registo das mudanças como evidência."
    ]
  }
};
