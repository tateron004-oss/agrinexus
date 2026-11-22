"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-ai-assessment-feedback.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course is about US schools: FERPA, IEP and 504 stay as US names, explained in the text.

module.exports = {
  id: "edu-ai-assessment-feedback-pt",
  lang: "pt",
  translationOf: "edu-ai-assessment-feedback",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educacionais 4: IA para a Avaliação e o Feedback",
  skills: "Escrever perguntas de avaliação alinhadas com IA, Criar grelhas de avaliação, Desenhar verificações formativas rápidas, Redigir feedback que pertence ao professor, Proteger os trabalhos e as notas dos alunos, Tratar com justiça as suspeitas de uso de IA na escrita",
  outcome: "montar com IA um pacote de avaliação, com perguntas alinhadas e uma chave verificada, uma grelha de avaliação de quatro níveis com uma versão para os alunos, um bilhete de saída e um banco de comentários de feedback, e usá-lo num processo de feedback que protege a privacidade dos alunos e deixa todas as notas nas mãos do professor.",
  about: [
    "Este curso é para professores, coordenadores pedagógicos, responsáveis pela avaliação e diretores de escola. A avaliação e o feedback ocupam uma grande parte do tempo dos professores, e a IA pode ajudar, mas as notas e os juízos sobre os alunos têm consequências sérias. Este curso mostra onde a IA ajuda e onde não pode decidir.",
    "O Capítulo 1 usa a IA para criar avaliações: perguntas alinhadas, grelhas de avaliação e verificações formativas rápidas. O Capítulo 2 trata do feedback: um processo em que a IA faz o rascunho e o professor decide, como proteger os trabalhos dos alunos segundo a lei FERPA dos Estados Unidos, e como tratar com justiça a suspeita de uso de IA nos trabalhos dos alunos.",
    "Pratique só com trabalhos de alunos inventados ou com trabalhos sem nenhum dado que identifique o aluno, e use só ferramentas que o seu distrito escolar aprovou para trabalhos de alunos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Este é o curso 4 de 8 da série IA para Líderes Escolares e Educacionais."
  ],
  finalTask: "Monte um pacote de avaliação para um objetivo: cinco perguntas alinhadas com uma chave que você verificou, uma grelha de avaliação de quatro níveis com três ou quatro critérios e uma versão para os alunos, um bilhete de saída de três perguntas e um banco de pelo menos oito comentários de feedback ligados à grelha. Experimente o processo de feedback com três respostas de alunos inventadas, mude pelo menos um comentário escrito pela IA e escreva você mesmo as notas.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Professores, coordenadores pedagógicos, responsáveis pela avaliação e diretores de escolas dos Estados Unidos que escrevem avaliações, dão feedback ou apoiam os professores que o fazem.",
    startingPoint: "Sabem planear uma aula com IA e verificá-la, e conhecem o básico da lei FERPA dos cursos anteriores. Escrevem as avaliações e o feedback à mão e podem não saber bem como reagir a uma suspeita de uso de IA pelos alunos.",
    gap: "A avaliação e o feedback ocupam uma grande parte do tempo dos professores, e a IA pode ajudar, mas as notas têm consequências sérias. Os educadores precisam de criar avaliações alinhadas com IA, usar um processo em que a IA faz o rascunho e o professor decide, proteger os trabalhos dos alunos e tratar com justiça as suspeitas de uso de IA.",
    constraints: [
      "Praticar só com trabalhos de alunos inventados ou sem nenhum dado que identifique o aluno",
      "Usar só ferramentas que o distrito escolar aprovou para trabalhos de alunos",
      "O professor decide todas as notas; a IA nunca dá notas aos alunos sozinha",
      "As pontuações dos detetores de escrita feita por IA nunca são a única prova de mau uso",
      "Tempo: lições curtas, que cabem num dia de aulas"
    ],
    prerequisites: "\"IA para Líderes Escolares e Educativos 3: IA para Planificar Aulas\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um objetivo", action: "criar com IA perguntas alinhadas em três níveis e resolver você mesmo todas as respostas da chave", standard: "corrigindo ou tirando qualquer pergunta com um erro ou com duas respostas possíveis" },
    { id: "O2", condition: "Para uma tarefa que você dá aos alunos", action: "criar com IA uma grelha de avaliação de quatro níveis e uma versão para os alunos", standard: "com cada célula tão concreta que dois professores dariam a mesma nota ao mesmo trabalho" },
    { id: "O3", condition: "Para um objetivo", action: "desenhar uma pergunta-chave e um bilhete de saída de três perguntas", standard: "decidindo antes da verificação o que vai voltar a ensinar para cada resposta errada" },
    { id: "O4", condition: "Com respostas de alunos e a sua grelha de avaliação", action: "usar a IA para redigir comentários de ponto forte e próximo passo, e depois editá-los e escrever você mesmo as notas", standard: "com pelo menos um comentário da IA mudado e todas as notas decididas por você" },
    { id: "O5", condition: "Quando as ferramentas de IA tocam em trabalhos ou notas de alunos", action: "aplicar o básico da lei FERPA e explicar às famílias como a IA é usada no feedback", standard: "usando só ferramentas aprovadas e sem dados que identifiquem os alunos" },
    { id: "O6", condition: "Quando suspeita de mau uso de IA num trabalho de um aluno", action: "reagir com um processo justo e uma regra clara de uso de IA para cada tarefa", standard: "nunca usando a pontuação de um detetor como a única prova" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Criar avaliações com IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever perguntas alinhadas e verificar a chave",
          minutes: 5,
          goal: "Criar perguntas de avaliação que correspondem a um objetivo e verificar as respostas.",
          text: [
            "Dê à IA o objetivo e os critérios de sucesso (como no curso 3), o ano de escolaridade e o tipo de perguntas que quer: escolha múltipla, resposta curta, um problema para resolver ou uma tarefa para explicar o raciocínio. Peça perguntas em diferentes níveis de pensamento: lembrar, aplicar e explicar ou analisar.",
            "Peça uma chave com uma razão curta para cada resposta e, na escolha múltipla, porque cada opção errada é tentadora. Opções erradas que mostram ideias erradas reais dizem-lhe mais sobre o pensamento dos alunos.",
            "Depois verifique você mesmo cada pergunta. As chaves feitas pela IA têm erros, as perguntas de escolha múltipla podem ter duas respostas certas e as palavras podem confundir os alunos que estão a aprender inglês. Tire qualquer pergunta que não mede o objetivo."
          ],
          steps: ["Dê o objetivo, os critérios de sucesso, o ano e os tipos de perguntas.", "Peça uma mistura: lembrar, aplicar, explicar.", "Peça uma chave com razões e porque as opções erradas são tentadoras.", "Resolva cada resposta e leia cada pergunta para ver se é clara.", "Tire as perguntas que não medem o objetivo."],
          words: [["Pergunta alinhada", "uma pergunta que mede o objetivo que deve medir."], ["Distrator", "uma opção errada numa pergunta de escolha múltipla."], ["Chave", "a lista das respostas certas."]],
          slides: [
            { title: "Diga à IA o que quer medir", bullets: ["Objetivo e critérios de sucesso", "Ano e tipos de perguntas", "Lembrar, aplicar, explicar"] },
            { title: "Peça uma chave com razões", bullets: ["Porque cada resposta está certa", "Porque cada opção errada é tentadora", "Distratores que mostram ideias erradas"] },
            { title: "Verifique cada pergunta", bullets: ["As chaves têm erros", "Duas respostas certas? Palavras confusas?", "Tire as perguntas fora do objetivo"] }
          ],
          tryIt: "Peça à IA seis perguntas sobre um objetivo, em três níveis, com uma chave. Resolva você mesmo cada resposta e conte os erros ou as perguntas pouco claras.",
          youCanNow: "escrever com IA perguntas de avaliação alinhadas e verificar a chave.",
          quickCheck: [
            { objective: "O1", q: "O que é um distrator numa pergunta de escolha múltipla?", options: ["Uma opção errada da lista", "Uma pergunta difícil demais", "Um barulho na sala de aula", "A resposta certa"], answer: 0, why: "Bons distratores mostram ideias erradas reais, e isso mostra como os alunos pensam." },
            { objective: "O1", q: "Resolve a chave feita pela IA e uma resposta está errada. O que faz?", options: ["Deixa ficar; os alunos não vão notar", "Pede à IA para voltar a dar notas à turma", "Corrige a chave e verifica bem as outras perguntas", "Tira todas as perguntas"], answer: 2, why: "Resolver cada resposta apanha os erros antes de os alunos receberem nota." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Criar uma grelha de avaliação que os alunos entendem",
          minutes: 6,
          goal: "Criar com IA uma grelha de avaliação de quatro níveis e uma versão para os alunos.",
          text: [
            "Uma grelha de avaliação descreve a qualidade em cada nível para cada critério. Peça à IA uma grelha analítica: três ou quatro critérios tirados dos seus critérios de sucesso, quatro níveis (por exemplo: inicial, em desenvolvimento, proficiente, avançado) e uma descrição curta de como é o trabalho em cada nível.",
            "Boas descrições de nível dizem o que está presente no trabalho, e não só \"mais\" ou \"menos\": \"usa duas provas e explica como cada uma apoia a ideia principal\" é melhor do que \"bom uso de provas\". Peça à IA para reescrever as células vagas.",
            "Depois peça uma versão para os alunos, com frases na primeira pessoa (\"Eu...\"), e teste as duas com um exemplo: um trabalho cabe claramente num só nível? Uma grelha só é justa se dois professores derem a mesma nota ao mesmo trabalho."
          ],
          steps: ["Dê a tarefa e os critérios de sucesso.", "Peça 3-4 critérios e 4 níveis.", "Reescreva as células vagas para dizerem o que está presente no trabalho.", "Peça uma versão para os alunos com frases \"Eu...\".", "Teste com um exemplo: dois professores estariam de acordo?"],
          words: [["Grelha de avaliação", "um guia para dar notas que descreve a qualidade em diferentes níveis (em inglês, \"rubric\")."], ["Critério", "uma qualidade que se avalia, como o uso de provas."], ["Grelha analítica", "uma grelha de avaliação que dá nota a cada critério em separado."]],
          slides: [
            { title: "Grelha analítica", bullets: ["3-4 critérios tirados dos critérios de sucesso", "4 níveis cada um", "Uma descrição curta em cada célula"] },
            { title: "Descreva o que está presente", bullets: ["Não \"bom uso de provas\"", "Mas \"duas provas, cada uma explicada\""] },
            { title: "Torne-a justa e clara", bullets: ["Versão para os alunos com frases \"Eu...\"", "Dois professores estariam de acordo?"] }
          ],
          tryIt: "Crie com IA uma grelha de avaliação de quatro níveis para uma tarefa que dá aos alunos. Reescreva as células vagas, faça a versão para os alunos e teste-a com uma resposta inventada.",
          youCanNow: "criar com IA uma grelha de avaliação clara de quatro níveis e uma versão para os alunos.",
          quickCheck: [
            { objective: "O2", q: "O que é uma grelha analítica?", options: ["Uma grelha com uma só nota geral", "Uma grelha que dá nota a cada critério em separado", "Uma grelha escrita pela IA", "Uma lista de materiais"], answer: 1, why: "As grelhas analíticas dão um nível separado a cada critério." },
            { objective: "O2", q: "Uma célula da grelha diz \"bom uso de provas\". O que muda?", options: ["Nada, está clara", "Tira a célula", "Acrescenta a palavra \"muito\"", "Diz exatamente o que os alunos fazem, como \"usa duas provas e explica cada uma\""], answer: 3, why: "Células concretas tornam as notas justas e ajudam os alunos a saber o que fazer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificações formativas rápidas",
          minutes: 5,
          goal: "Desenhar bilhetes de saída e verificações durante a aula que mostram quem precisa de quê a seguir.",
          text: [
            "A avaliação formativa é verificar a aprendizagem durante o ensino, para poder ajustar. Não conta muito para a nota e é rápida. A IA é boa a produzir muitas verificações curtas: bilhetes de saída de três perguntas, uma só pergunta-chave a meio da aula, problemas rápidos no quadro.",
            "Uma pergunta-chave tem opções de resposta feitas para que cada resposta errada mostre uma ideia errada concreta. Peça à IA: \"Escreva uma pergunta-chave de escolha múltipla para [objetivo]. Cada resposta errada deve mostrar uma ideia errada comum diferente; explique qual.\"",
            "Planeie o que vai fazer com os resultados antes de dar a verificação: quem volta a aprender a matéria, quem avança. Uma verificação que não usa é só mais papel."
          ],
          steps: ["Escolha o momento: a meio ou no fim da aula.", "Peça à IA uma pergunta-chave ou um bilhete de saída de três perguntas.", "Verifique que cada resposta errada aponta para uma ideia errada real.", "Decida antes o que vai fazer com cada resultado.", "Aja no dia seguinte."],
          words: [["Avaliação formativa", "verificações que contam pouco, feitas durante a aprendizagem para ajustar o ensino."], ["Bilhete de saída", "uma tarefa curta que os alunos fazem no fim de uma aula."], ["Pergunta-chave", "uma pergunta em que cada resposta errada mostra uma ideia errada concreta (em inglês, \"hinge question\")."]],
          slides: [
            { title: "Formativa = verificar e ajustar", bullets: ["Conta pouco e é rápida", "Bilhetes de saída, perguntas-chave, quadros"] },
            { title: "Perguntas-chave", bullets: ["Uma pergunta a meio da aula", "Cada resposta errada = uma ideia errada", "Peça à IA para explicar qual"] },
            { title: "Planeie a resposta", bullets: ["Quem volta a aprender a matéria?", "Quem avança?", "Verificações que não usa são só papel"] }
          ],
          tryIt: "Peça à IA uma pergunta-chave e um bilhete de saída de três perguntas para o seu objetivo. Para cada resposta errada da pergunta-chave, escreva o que voltaria a ensinar.",
          youCanNow: "desenhar verificações formativas rápidas e planear o que fazer com os resultados.",
          quickCheck: [
            { objective: "O3", q: "O que é a avaliação formativa?", options: ["O exame final", "Um exame do estado", "Verificar, sem muito peso na nota, a aprendizagem durante o ensino para o ajustar", "Uma nota de comportamento"], answer: 2, why: "As verificações formativas dizem-lhe o que ensinar a seguir." },
            { objective: "O3", q: "Metade da turma escolhe a mesma resposta errada na pergunta-chave. O que faz?", options: ["Volta a ensinar a ideia errada que essa resposta mostra", "Passa para a aula seguinte", "Dá uma nota mais baixa a todos", "Pede à IA para dar nota à pergunta-chave"], answer: 0, why: "Cada resposta errada da pergunta-chave aponta para uma ideia errada que pode voltar a ensinar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Criar avaliações com IA",
        questions: [
          { objective: "O1", q: "Porque pedir à IA para explicar porque cada opção errada é tentadora?", options: ["Torna o teste mais comprido", "Para enganar os alunos de forma injusta", "Distratores que mostram ideias erradas mostram como os alunos pensam", "É obrigatório"], answer: 2, why: "Bons distratores mostram as ideias erradas." },
          { objective: "O1", q: "Uma pergunta de escolha múltipla da IA tem duas respostas que podem estar certas. Deve:", options: ["Corrigi-la ou tirá-la", "Mantê-la", "Aceitar as duas", "Dar a nota máxima a todos"], answer: 0, why: "Cada pergunta precisa de uma só resposta claramente certa." },
          { objective: "O2", q: "Que célula da grelha está mais bem escrita?", options: ["\"Boas provas\"", "\"Mais provas\"", "\"Bom trabalho\"", "\"Usa duas provas e explica como cada uma apoia a ideia principal\""], answer: 3, why: "Descreve o que está presente no trabalho." },
          { objective: "O3", q: "O que é uma pergunta-chave?", options: ["Uma pergunta sobre fechaduras", "Uma pergunta em que cada resposta errada mostra uma ideia errada", "Uma pergunta do exame final", "Uma pergunta do trabalho de casa"], answer: 1, why: "Mostra o que voltar a ensinar a meio da aula." },
          { objective: "O3", q: "Quando deve decidir o que fazer com os resultados do bilhete de saída?", options: ["Só se a maioria dos alunos falhar", "Nunca", "No fim do ano", "Antes de dar a verificação"], answer: 3, why: "Planear a resposta torna a verificação útil." }
        ]
      }
    },
    {
      name: "Capítulo 2: Feedback que pertence ao professor",
      lessons: [
        {
          objectives: ["O4"],
          title: "Um processo de feedback: a IA faz o rascunho, o professor decide",
          minutes: 6,
          goal: "Usar a IA para redigir feedback ligado a uma grelha de avaliação e depois editá-lo e assumi-lo.",
          text: [
            "Um bom feedback é concreto, está ligado aos critérios e diz ao aluno o que fazer a seguir. Um banco de comentários ajuda: peça à IA dois ou três comentários para cada critério e nível da grelha, cada um com um ponto forte e um próximo passo (em inglês, \"glow and grow\").",
            "O processo: primeiro leia você mesmo o trabalho do aluno e decida o nível na grelha. Depois escolha ou redija os comentários, usando a IA para ajustar as palavras se for preciso. Se usar a IA para redigir comentários sobre trabalhos reais de alunos, faça-o só numa ferramenta que o seu distrito aprovou para trabalhos de alunos, e tire os nomes e os dados que identificam o aluno.",
            "Quem escreve a nota é você. As notas da IA podem ser inconstantes, podem premiar o tamanho em vez da qualidade e podem ser injustas para alunos que estão a aprender inglês e alunos com deficiência. Edite cada comentário para soar como você e servir para aquele aluno; os alunos notam quando o feedback é genérico."
          ],
          steps: ["Crie um banco de comentários por critério e nível: ponto forte e próximo passo.", "Leia você mesmo o trabalho e escolha o nível na grelha.", "Escolha ou ajuste comentários; para trabalhos reais, só ferramentas aprovadas.", "Tire os nomes e os dados que identificam o aluno.", "Escreva você mesmo a nota; edite cada comentário."],
          words: [["Feedback", "comentários que dizem a alguém como foi o seu trabalho e como o melhorar."], ["Banco de comentários", "um conjunto guardado de comentários de feedback que pode voltar a usar e ajustar."], ["Ponto forte e próximo passo", "feedback com uma coisa bem feita e uma coisa a fazer a seguir (em inglês, \"glow and grow\")."]],
          slides: [
            { title: "Um bom feedback", bullets: ["Concreto e ligado aos critérios", "Um ponto forte, um próximo passo"] },
            { title: "O processo", bullets: ["Você lê o trabalho e escolhe o nível", "Escolha ou ajuste comentários", "Trabalhos reais: só ferramentas aprovadas e sem nomes"] },
            { title: "Quem escreve a nota é você", bullets: ["As notas da IA podem ser inconstantes", "Podem premiar o tamanho em vez da qualidade", "Edite para soar como você"] }
          ],
          tryIt: "Crie um banco de oito comentários de ponto forte e próximo passo para a sua grelha. Escreva três respostas de alunos inventadas, dê-lhes você mesmo a nota e escolha e edite comentários para cada uma.",
          youCanNow: "usar um processo de feedback em que a IA ajuda a redigir e você decide.",
          quickCheck: [
            { objective: "O4", q: "O que é um banco de comentários?", options: ["Feedback que a IA envia sozinha aos alunos", "Comentários de feedback guardados que volta a usar e ajusta", "Uma lista de notas", "Uma conta bancária para o dinheiro da escola"], answer: 1, why: "Um banco de comentários poupa tempo, e o professor continua a escolher e editar cada comentário." },
            { objective: "O4", q: "A IA redige um comentário que não serve para o trabalho de um aluno. O que faz?", options: ["Envia-o na mesma", "Deixa a IA mudar a nota", "Não dá feedback a esse aluno", "Edita o comentário para servir para o trabalho e mantém a sua própria nota"], answer: 3, why: "A IA faz o rascunho e o professor decide, por isso cada comentário e cada nota são seus." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger os trabalhos e as notas dos alunos",
          minutes: 5,
          goal: "Aplicar o básico da lei FERPA aos trabalhos dos alunos, às notas e às ferramentas de IA.",
          text: [
            "A FERPA é uma lei dos Estados Unidos que protege os registos escolares. Os trabalhos e as notas dos alunos guardados pela escola fazem, em geral, parte dos registos educativos segundo a FERPA. Partilhar com uma empresa de fora informações que identificam pessoas, tiradas desses registos, normalmente precisa de consentimento, a não ser que se aplique uma exceção; por exemplo, um fornecedor pode atuar como funcionário escolar quando faz um serviço para a escola, está sob o controlo direto da escola e cumpre limites sobre voltar a partilhar os dados. É por isso que os acordos do distrito são importantes.",
            "Regras práticas para o pessoal: use só ferramentas aprovadas pelo distrito para trabalhos reais de alunos; tire os nomes e os dados que identificam o aluno mesmo assim; nunca carregue cadernetas de notas, documentos IEP ou 504 (planos de apoio para alunos com deficiência) nem informações de disciplina em ferramentas não aprovadas; e leia as condições da ferramenta para saber se ela guarda os trabalhos carregados ou os usa para treinar a IA.",
            "Diga às famílias como a IA é usada no feedback. Segundo a FERPA, os pais têm o direito de ver e rever os registos educativos dos filhos, e a transparência cria confiança. Para as regras exatas do seu distrito, pergunte ao responsável pela privacidade."
          ],
          steps: ["Use só ferramentas aprovadas para trabalhos reais de alunos.", "Tire os nomes e os dados que identificam o aluno.", "Nunca carregue cadernetas de notas nem registos IEP, 504 ou de disciplina em ferramentas não aprovadas.", "Verifique se a ferramenta guarda os ficheiros carregados ou os usa para treinar.", "Diga às famílias como a IA é usada no feedback."],
          words: [["Registo educativo", "um registo ligado diretamente a um aluno e guardado pela escola."], ["Exceção do funcionário escolar", "uma regra da FERPA que deixa certos fornecedores sob o controlo da escola ver registos para um fim da escola."]],
          slides: [
            { title: "Trabalhos e notas são registos", bullets: ["Em geral, registos educativos segundo a FERPA", "Partilhar dados que identificam o aluno normalmente pede consentimento", "A não ser que se aplique uma exceção"] },
            { title: "Regras para o pessoal", bullets: ["Trabalhos reais: só ferramentas aprovadas", "Tire os nomes mesmo assim", "Nada de cadernetas de notas, IEP nem ficheiros de disciplina"] },
            { title: "Seja transparente com as famílias", bullets: ["Explique como a IA ajuda no feedback", "Os pais podem ver os registos", "Peça os detalhes ao responsável pela privacidade"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (Departamento de Educação dos EUA)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escreva uma nota de três frases para as famílias a explicar como a sua turma ou escola usa a IA para ajudar no feedback, o que está protegido e que são os professores que decidem todas as notas.",
          youCanNow: "proteger os trabalhos e as notas dos alunos quando a IA faz parte do processo de feedback.",
          quickCheck: [
            { objective: "O5", q: "Segundo a FERPA, de que fazem parte, em geral, os trabalhos dos alunos guardados pela escola?", options: ["Dos registos educativos", "Dos registos públicos que qualquer pessoa pode ver", "Das notas privadas do professor", "Da propriedade do fornecedor"], answer: 0, why: "Os trabalhos dos alunos guardados pela escola fazem, em geral, parte dos registos educativos protegidos." },
            { objective: "O5", q: "Um professor quer ajuda da IA no feedback de redações reais. O que aconselha?", options: ["Colar as redações em qualquer chatbot gratuito", "Carregar também a caderneta de notas, para dar contexto", "Usar só uma ferramenta aprovada pelo distrito, sem dados que identifiquem os alunos", "Pedir aos alunos para colarem eles mesmos as redações na IA"], answer: 2, why: "Ferramentas aprovadas e dados de identificação retirados protegem os registos dos alunos." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Suspeita de uso de IA nos trabalhos dos alunos: tratá-la com justiça",
          minutes: 6,
          goal: "Reagir a uma suspeita de uso de IA com regras claras e um processo justo, e não com a pontuação de um detetor.",
          text: [
            "Os detetores de escrita feita por IA podem errar. Podem marcar trabalho honesto, e estudos e educadores mostraram a preocupação de que marcam mais vezes a escrita de alunos que estão a aprender inglês. A pontuação de um detetor nunca deve ser, sozinha, a prova para decidir que houve fraude.",
            "Primeiro, previna: diga claramente aos alunos que uso de IA é permitido em cada tarefa (por exemplo: nenhum, só para ter ideias, ou permitido com uma nota a dizer como foi usado). Desenhe tarefas em que o pensamento fica à vista: rascunhos, escrita na sala de aula, explicações orais, ligações à vida pessoal.",
            "Se suspeitar de mau uso, fale com o aluno: peça-lhe para explicar o trabalho, mostrar os rascunhos ou refazer uma parte na sala de aula. Siga a política de integridade académica da escola, envolva as famílias como ela pede e, quando puder, trate a situação como um momento de aprendizagem."
          ],
          steps: ["Diga o uso de IA permitido em cada tarefa.", "Desenhe tarefas em que o pensamento fica à vista.", "Nunca confie só na pontuação de um detetor.", "Fale com o aluno; peça-lhe para explicar ou mostrar os rascunhos.", "Siga a sua política de integridade académica."],
          words: [["Integridade académica", "honestidade no trabalho escolar: fazer o seu próprio trabalho e dizer quando teve ajuda."], ["Falso positivo", "quando um detetor marca, por erro, um trabalho honesto."]],
          slides: [
            { title: "Os detetores podem errar", bullets: ["Podem marcar trabalho honesto", "Preocupação com alunos a aprender inglês", "Nunca são a única prova"] },
            { title: "Primeiro, previna", bullets: ["Diga o uso de IA permitido em cada tarefa", "Pensamento à vista: rascunhos, conversa, trabalho na sala"] },
            { title: "Se suspeitar de mau uso", bullets: ["Fale com o aluno", "Peça-lhe para explicar ou refazer uma parte", "Siga a sua política de integridade"] }
          ],
          tryIt: "Tarefa final: termine o seu pacote de avaliação (cinco perguntas verificadas, grelha e versão para os alunos, bilhete de saída, banco de oito comentários), use o processo de feedback com três respostas inventadas e as suas próprias notas, e acrescente uma regra de uma linha sobre o uso de IA na tarefa.",
          youCanNow: "usar a IA em toda a avaliação e o feedback, mantendo as notas justas, privadas e nas mãos do professor.",
          quickCheck: [
            { objective: "O6", q: "Que erro podem cometer os detetores de escrita feita por IA?", options: ["Nenhum; estão sempre certos", "Marcar trabalho honesto como escrito por IA", "Dar notas a redações", "Escrever redações"], answer: 1, why: "Os detetores podem marcar por erro trabalho honesto, por isso nunca são a única prova." },
            { objective: "O6", q: "Suspeita de que um aluno usou IA contra a regra da tarefa. Qual é um primeiro passo justo?", options: ["Dar logo um zero", "Contar à turma toda", "Usar mais três detetores", "Pedir ao aluno para explicar o trabalho ou mostrar os rascunhos"], answer: 3, why: "Uma conversa e outras provas são mais justas do que a pontuação de um detetor." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Feedback que pertence ao professor",
        questions: [
          { objective: "O4", q: "No processo de feedback, o que faz o professor primeiro?", options: ["Cola o trabalho em qualquer ferramenta de IA", "Deixa a IA dar a nota", "Lê o trabalho e escolhe o nível na grelha", "Envia-o aos pais"], answer: 2, why: "O juízo do professor vem primeiro." },
          { objective: "O4", q: "Quem escreve a nota?", options: ["O professor", "A IA", "O aluno", "O fornecedor"], answer: 0, why: "As notas são decisões do professor." },
          { objective: "O5", q: "Segundo a FERPA, os trabalhos dos alunos guardados pela escola são, em geral:", options: ["Informação pública", "Parte dos registos educativos", "Propriedade da empresa de IA", "Não estão abrangidos"], answer: 1, why: "Registos ligados diretamente a um aluno e guardados pela escola são registos educativos." },
          { objective: "O6", q: "Um detetor diz que uma redação foi 90% escrita por IA. O que deve fazer?", options: ["Falar com o aluno e ver outras provas", "Dar um zero", "Denunciar a família", "Ignorar todas as políticas"], answer: 0, why: "A pontuação de um detetor, sozinha, não é prova." },
          { objective: "O6", q: "O que previne melhor o mau uso de IA?", options: ["Não dizer nada", "Proibir os computadores para sempre", "Usar mais detetores", "Dizer o uso de IA permitido em cada tarefa e pôr o pensamento à vista"], answer: 3, why: "Regras claras e pensamento à vista previnem problemas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educacionais 4: IA para a Avaliação e o Feedback",
    questions: [
      { objective: "O1", q: "Uma pergunta alinhada:", options: ["É a mais difícil", "Mede o objetivo que deve medir", "É a mais comprida", "É escolhida só pela IA"], answer: 1, why: "O alinhamento é o primeiro teste de uma boa pergunta." },
      { objective: "O1", q: "Um distrator é:", options: ["Um telefone", "Um aluno barulhento", "Uma opção errada na escolha múltipla", "Uma pergunta extra"], answer: 2, why: "Bons distratores mostram ideias erradas." },
      { objective: "O1", q: "Depois de a IA escrever uma chave, deve:", options: ["Imprimi-la", "Confiar nela", "Resolver você mesmo cada resposta", "Dá-la aos alunos"], answer: 2, why: "As chaves têm erros." },
      { objective: "O1", q: "Uma mistura de níveis de perguntas quer dizer:", options: ["Lembrar, aplicar e explicar", "Só fáceis", "Só difíceis", "Só verdadeiro ou falso"], answer: 0, why: "Níveis diferentes mostram profundidades diferentes de aprendizagem." },
      { objective: "O2", q: "Uma grelha analítica:", options: ["É escrita pelos alunos", "Dá só uma nota geral", "Não tem níveis", "Dá nota a cada critério em separado"], answer: 3, why: "Cada critério recebe o seu próprio nível." },
      { objective: "O2", q: "Uma grelha para os alunos usa:", options: ["Linguagem jurídica", "Frases \"Eu...\"", "Código", "Só números"], answer: 1, why: "Os alunos devem entender o objetivo." },
      { objective: "O2", q: "Uma grelha de avaliação é justa quando:", options: ["Todos têm a nota máxima", "É muito comprida", "Foi escrita pela IA", "Dois professores dariam a mesma nota ao mesmo trabalho"], answer: 3, why: "Coerência é justiça." },
      { objective: "O3", q: "A avaliação formativa é:", options: ["Uma caderneta escolar", "O exame final", "Verificar, sem muito peso na nota, a aprendizagem durante o ensino para o ajustar", "Um exame do estado"], answer: 2, why: "Mostra o passo seguinte." },
      { objective: "O3", q: "Um bilhete de saída faz-se:", options: ["No fim de uma aula", "No início do ano", "Só às sextas-feiras", "Só com os pais"], answer: 0, why: "Verifica a aprendizagem do dia." },
      { objective: "O3", q: "Uma verificação que nunca usa é:", options: ["A melhor", "Só mais papel", "Obrigatória", "Sumativa"], answer: 1, why: "As verificações formativas contam quando mudam o ensino." },
      { objective: "O4", q: "O feedback de ponto forte e próximo passo dá:", options: ["Uma coisa bem feita e um passo a seguir", "Só elogios", "Só críticas", "Só uma nota"], answer: 0, why: "Os alunos precisam das duas coisas." },
      { objective: "O4", q: "Um banco de comentários é:", options: ["Uma aplicação para dar notas", "Uma conta poupança", "Uma lista de alunos", "Comentários de feedback guardados que volta a usar e ajusta"], answer: 3, why: "Poupa tempo e mantém o feedback concreto." },
      { objective: "O4", q: "As notas da IA podem ser injustas porque podem:", options: ["Estar sempre perfeitas", "Premiar o tamanho em vez da qualidade", "Nunca ler o trabalho", "Usar a grelha exatamente"], answer: 1, why: "Favorecer textos mais compridos é um problema comum." },
      { objective: "O5", q: "Para trabalhos reais de alunos, use:", options: ["Redes sociais", "Qualquer ferramenta gratuita", "Só ferramentas aprovadas pelo distrito, sem dados que identifiquem os alunos", "O e-mail pessoal"], answer: 2, why: "Ferramentas aprovadas e dados retirados protegem a privacidade." },
      { objective: "O5", q: "O que nunca deve ir para uma ferramenta de IA não aprovada?", options: ["Um bilhete de saída em branco", "Uma grelha geral", "Uma caderneta de notas", "Uma resposta inventada"], answer: 2, why: "As cadernetas de notas têm registos educativos que identificam os alunos." },
      { objective: "O5", q: "Segundo a FERPA, os pais podem:", options: ["Ver e rever os registos educativos dos filhos", "Dar nota aos trabalhos", "Aprovar fornecedores", "Escrever a grelha"], answer: 0, why: "Ver os registos é um direito central da FERPA." },
      { objective: "O5", q: "Um fornecedor pode atuar como funcionário escolar quando:", options: ["Tem muitos utilizadores", "É gratuito", "Pede com educação", "Faz um serviço para a escola sob o controlo direto da escola, com limites para voltar a partilhar"], answer: 3, why: "Estas são as condições da FERPA." },
      { objective: "O6", q: "Os detetores de escrita feita por IA:", options: ["Estão sempre certos", "Podem marcar por erro trabalho honesto", "São obrigatórios por lei", "Provam a fraude"], answer: 1, why: "Os falsos positivos acontecem." },
      { objective: "O6", q: "Se suspeitar de mau uso de IA, um primeiro passo justo é:", options: ["Ignorar a sua política", "Dar um zero", "Publicar sobre isso", "Pedir ao aluno para explicar o trabalho ou mostrar os rascunhos"], answer: 3, why: "Falar junta provas reais." },
      { objective: "O6", q: "Cada tarefa deve dizer:", options: ["Que a IA é sempre proibida", "Nada sobre IA", "Que uso de IA é permitido", "A nota do aluno"], answer: 2, why: "Regras claras evitam mal-entendidos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      6,
      7,
      10,
      12,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Perguntas alinhadas",
        objective: "O1",
        notYet: "Menos de cinco perguntas, ou a chave não foi verificada.",
        meets: "Cinco perguntas alinhadas com o objetivo e uma chave que você mesmo resolveu.",
        exceeds: "As perguntas misturam lembrar, aplicar e explicar, e os distratores mostram ideias erradas reais."
      },
      {
        name: "Grelha de avaliação",
        objective: "O2",
        notYet: "Menos de quatro níveis, células vagas ou nenhuma versão para os alunos.",
        meets: "Uma grelha de quatro níveis com três ou quatro critérios e uma versão para os alunos.",
        exceeds: "Cada célula descreve o que os alunos fazem, e a grelha foi testada com uma resposta inventada."
      },
      {
        name: "Bilhete de saída",
        objective: "O3",
        notYet: "Nenhum bilhete de saída, ou não corresponde ao objetivo.",
        meets: "Um bilhete de saída de três perguntas para o objetivo.",
        exceeds: "Diz o que vai fazer com cada resultado antes de o dar."
      },
      {
        name: "Processo de feedback",
        objective: "O4",
        notYet: "Menos de oito comentários, comentários da IA usados sem mudanças, ou a IA escreveu as notas.",
        meets: "Pelo menos oito comentários ligados à grelha, três respostas inventadas, um comentário da IA mudado e notas escritas por você.",
        exceeds: "Cada resposta recebe um ponto forte e um próximo passo ligados a um nível da grelha."
      },
      {
        name: "Privacidade e uso justo da IA",
        objective: "O6",
        notYet: "Foram usados dados reais de alunos, ou a tarefa não tem regra de uso de IA.",
        meets: "Só foram usados trabalhos inventados, e a tarefa tem uma regra de uma linha sobre o uso de IA.",
        exceeds: "Inclui uma nota curta para as famílias sobre como a IA ajuda no feedback e quem decide as notas."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Professores que dizem ter usado o pacote de avaliação ou o banco de comentários com uma turma em 30 dias (inquérito de seguimento)",
      "Professores que dizem poupar tempo no feedback e continuar a escrever eles mesmos todas as notas (inquérito de seguimento)",
      "Escolas em que todas as tarefas importantes dizem o uso de IA permitido (inquérito de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e um assistente de IA aprovado pelo distrito para este uso",
      "Um objetivo e uma tarefa que dá aos alunos",
      "Três respostas de alunos inventadas",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois peça aos professores para resolverem em pares as chaves feitas pela IA e compararem os erros encontrados.",
      "Use só trabalhos de alunos inventados; nunca cole trabalhos ou notas reais de alunos em ferramentas não aprovadas.",
      "Peça a dois professores para darem nota à mesma resposta inventada com cada grelha, para testar se é justa.",
      "Discutam um processo justo para as suspeitas de uso de IA antes de aparecer qualquer caso, e combinem que a pontuação de um detetor nunca é a única prova.",
      "Avalie a tarefa final com a grelha de avaliação e confirme que todas as notas foram escritas pelo professor."
    ]
  }
};
