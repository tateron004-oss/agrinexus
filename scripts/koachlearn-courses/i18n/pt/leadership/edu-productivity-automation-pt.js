"use strict";

// Koach Learn course (Portuguese translation of leadership/edu-productivity-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "edu-productivity-automation-pt",
  lang: "pt",
  translationOf: "edu-productivity-automation",
  category: "Leadership Development",
  name: "IA para Líderes Escolares e Educativos 6: Produtividade e Automatização do Trabalho",
  skills: "Encontrar o que mais lhe rouba tempo, Escrever boletins e mensagens para as famílias, Conduzir reuniões da agenda às ações, Resumir resultados de inquéritos e formulários, Criar automatizações simples, Medir o tempo poupado",
  outcome: "poupar tempo, de forma medida, no trabalho administrativo da escola, criando três fluxos de trabalho com ajuda da IA: um boletim semanal para as famílias, uma reunião de pessoal da agenda à lista de ações e um relatório de inquérito com resumo, cada um com uma verificação humana e uma contagem do tempo antes e depois.",
  about: [
    "Este curso é para diretores, diretores-adjuntos, chefes de secretaria, chefes de departamento, conselheiros e professores que fazem trabalho administrativo. A papelada e as mensagens tiram tempo aos alunos. Este curso ajuda você a recuperar parte desse tempo, com segurança.",
    "O Capítulo 1 começa com uma auditoria do tempo e depois cria fluxos de trabalho com IA para a comunicação e as reuniões. O Capítulo 2 passa aos formulários, inquéritos e automatizações simples, e termina com um plano para medir o tempo que poupa e manter os fluxos de trabalho a funcionar.",
    "Use só ferramentas aprovadas pelo seu distrito escolar e não coloque informações pessoais de alunos e funcionários em ferramentas não aprovadas. Ferramentas gratuitas como o Google Forms, o Microsoft Forms, o Google Docs e o Microsoft 365 servem para a maioria das tarefas. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Este é o curso 6 de 8 de IA para Líderes Escolares e Educativos."
  ],
  finalTask: "Crie e use três fluxos de trabalho durante uma semana: (1) um boletim semanal para as famílias, das notas em tópicos a um rascunho final verificado (com as traduções verificadas por um falante qualificado); (2) uma reunião de pessoal, da agenda escrita pela IA a uma lista de ações com responsáveis e datas, enviada no mesmo dia; (3) um inquérito curto ao pessoal ou às famílias, cujos resultados resume com a IA usando só dados sem nomes. Registe os minutos gastos antes e depois em cada um, e a verificação humana que manteve em cada fluxo de trabalho.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Diretores, diretores-adjuntos, chefes de secretaria, chefes de departamento, conselheiros e professores de escolas dos Estados Unidos que fazem trabalho administrativo.",
    startingPoint: "Usam email, documentos e formulários todos os dias e conhecem o básico da privacidade dos alunos dos cursos anteriores. Fazem à mão a maioria dos boletins, notas de reuniões e resumos de inquéritos, e nunca mediram quanto tempo isso leva.",
    gap: "A papelada e as mensagens tiram tempo aos alunos. O pessoal da escola precisa de fluxos de trabalho com IA seguros e repetíveis, com uma verificação humana em cada um, e de uma contagem do tempo antes e depois para provar que poupam mesmo tempo.",
    constraints: [
      "Usar só ferramentas aprovadas pelo distrito; não colocar informações pessoais de alunos e funcionários em ferramentas não aprovadas",
      "Ferramentas gratuitas como o Google Forms, o Microsoft Forms, o Google Docs e o Microsoft 365 servem para a maioria das tarefas",
      "Cada fluxo de trabalho tem uma verificação humana antes de qualquer coisa chegar às famílias",
      "As traduções são verificadas por um falante qualificado antes de serem enviadas",
      "Tempo: lições curtas, mais uma semana a usar os fluxos de trabalho"
    ],
    prerequisites: "Recomenda-se \"IA para Líderes Escolares e Educativos 2: Ferramentas de IA para Educadores\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma semana normal de trabalho", action: "listar as suas tarefas administrativas repetitivas com os minutos gastos e escolher as três melhores candidatas para a IA", standard: "listando pelo menos dez tarefas e guardando para si as decisões sobre alunos concretos" },
    { id: "O2", condition: "Com notas em tópicos sobre a semana", action: "transformar as notas num boletim para as famílias com um pedido guardado e reutilizável", standard: "verificando cada data, hora e local, com as traduções verificadas por um falante qualificado" },
    { id: "O3", condition: "Para uma reunião de pessoal ou de equipa", action: "escrever com a IA uma agenda com tempos e transformar as notas numa lista de ações com responsáveis e datas", standard: "enviando a lista de ações no mesmo dia" },
    { id: "O4", condition: "Com respostas de um inquérito sem nomes", action: "resumir os resultados com a IA e verificar as contagens com as respostas", standard: "tirando primeiro os nomes, os emails e os comentários que identificam pessoas" },
    { id: "O5", condition: "Para uma tarefa comum", action: "criar uma automatização simples, como um modelo de email ou uma regra para organizar mensagens, com uma verificação humana", standard: "testada primeiro em si mesmo e aprovada pela equipa de tecnologia quando for preciso" },
    { id: "O6", condition: "Depois de usar os seus fluxos de trabalho durante uma semana", action: "medir os minutos antes e depois e escrever cada fluxo de trabalho numa página", standard: "contando o tempo de verificar e corrigir, e guardando as páginas numa pasta partilhada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Recuperar tempo na comunicação e nas reuniões",
      lessons: [
        {
          objectives: ["O1"],
          title: "Auditoria do tempo: para onde vai a semana?",
          minutes: 5,
          goal: "Encontrar as três tarefas repetitivas que mais tempo lhe roubam.",
          text: [
            "Antes de automatizar, meça. Durante uma semana, anote as tarefas administrativas repetitivas e mais ou menos quanto tempo leva cada uma: emails, boletins, preparação de reuniões, notas, formulários, relatórios, horários, escalas de serviço.",
            "Marque com um círculo as tarefas que se repetem muitas vezes, seguem um padrão parecido e não precisam de informações privadas dos alunos para fazer o rascunho. Estas são as melhores candidatas para a IA. As tarefas que exigem decisões sobre um aluno ou um funcionário concreto ficam com você.",
            "Escolha as três que levam mais tempo. São os fluxos de trabalho que vai criar neste curso, e os seus números de antes para medir o tempo poupado."
          ],
          steps: ["Durante uma semana, liste as tarefas administrativas repetitivas e os minutos gastos.", "Marque as tarefas frequentes e com padrão que não precisam de dados privados dos alunos.", "Guarde para si as tarefas que exigem decisões sobre pessoas.", "Escolha as três que levam mais tempo.", "Guarde esses minutos como os seus números de antes."],
          words: [["Auditoria do tempo", "registar como usa o seu tempo para o poder melhorar."], ["Fluxo de trabalho", "os passos que segue para fazer uma tarefa que se repete."]],
          slides: [
            { title: "Primeiro, medir", bullets: ["Uma semana de tarefas repetitivas", "Os minutos aproximados de cada uma"] },
            { title: "Boas candidatas para a IA", bullets: ["Frequentes e com padrão", "Não precisam de dados privados dos alunos para o rascunho", "As decisões sobre pessoas ficam com você"] },
            { title: "Escolha três", bullets: ["As três que levam mais tempo", "Os minutos delas são os seus números de antes"] }
          ],
          tryIt: "Liste pelo menos dez tarefas administrativas repetitivas da sua semana, com os minutos aproximados de cada uma. Marque com um círculo as três melhores candidatas para a IA.",
          youCanNow: "encontrar as tarefas repetitivas em que a IA lhe pode poupar mais tempo.",
          quickCheck: [
            { objective: "O1", q: "O que é uma auditoria do tempo?", options: ["Uma revisão do orçamento da escola", "Registar quanto tempo gasta em cada tarefa", "Um controlo da assiduidade do pessoal", "Um teste da rapidez da IA"], answer: 1, why: "Uma auditoria do tempo mostra para onde vai a semana, para escolher o que melhorar." },
            { objective: "O1", q: "Uma das tarefas que lhe roubam tempo é decidir a disciplina de um aluno concreto. Deve ser candidata para a IA?", options: ["Sim, a IA é mais rápida", "Sim, se ninguém souber", "Não; as decisões sobre um aluno concreto ficam com você", "Só nas semanas com muito trabalho"], answer: 2, why: "As tarefas que exigem decisões sobre um aluno concreto ficam com a pessoa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Boletins e mensagens para as famílias",
          minutes: 6,
          goal: "Transformar notas em tópicos num boletim claro para as famílias com um pedido reutilizável.",
          text: [
            "Durante a semana, vá juntando notas em tópicos: eventos, datas, lembretes, celebrações (sem nomes de alunos, a não ser que as regras da escola sobre imagem e informações de diretório o permitam). Na sexta-feira, cole os tópicos com um pedido guardado.",
            "Um pedido reutilizável: \"Transforme estas notas num boletim caloroso e claro para as famílias de uma escola primária. Linguagem simples, secções curtas com títulos, datas a negrito, menos de 300 palavras. Não acrescente nenhum evento nem dado que não esteja nas minhas notas.\" Guarde-o para o boletim ter o mesmo aspeto todas as semanas.",
            "Verifique cada data, hora e local no calendário da escola. Para as famílias que leem outras línguas, uma tradução feita pela IA é um rascunho: peça a um falante qualificado que a verifique antes de ser enviada, para as famílias receberem informações certas."
          ],
          steps: ["Junte notas em tópicos durante a semana.", "Cole-as com o seu pedido guardado para o boletim.", "Verifique cada data, hora e local.", "Peça a um falante qualificado que verifique as traduções.", "Envie e guarde o pedido para a próxima semana."],
          words: [["Pedido reutilizável", "um pedido à IA que guarda e usa sempre para a mesma tarefa."], ["Falante qualificado", "uma pessoa que fala uma língua bem o suficiente para verificar se uma tradução está certa."]],
          slides: [
            { title: "Tópicos durante a semana", bullets: ["Eventos, datas, lembretes, celebrações", "Siga as suas regras sobre nomes e fotos de alunos"] },
            { title: "O pedido guardado", bullets: ["Caloroso, linguagem simples, secções curtas", "Datas a negrito, menos de 300 palavras", "\"Não acrescente nada que não esteja nas minhas notas\""] },
            { title: "Antes de enviar", bullets: ["Verifique datas, horas e locais", "Traduções verificadas por um falante qualificado"] }
          ],
          tryIt: "Escreva notas em tópicos para uma semana inventada e use o pedido guardado para as transformar num boletim. Compare-o com as suas notas e meça quanto tempo levou.",
          youCanNow: "fazer, a partir das notas da semana, um boletim para as famílias sempre igual na forma e verificado.",
          quickCheck: [
            { objective: "O2", q: "Porque guardar o pedido do boletim?", options: ["Para o poder reutilizar todas as semanas", "Para a IA se lembrar dos seus alunos", "Para as famílias o verem", "Para nunca precisar de verificar"], answer: 0, why: "Um pedido guardado torna o boletim semanal repetível." },
            { objective: "O2", q: "O boletim da IA anuncia uma venda de bolos que não está nas suas notas. O que faria?", options: ["Deixá-la; as famílias gostam de vendas de bolos", "Mudar a data", "Enviar e corrigir depois", "Tirá-la e acrescentar \"Não acrescente nada que não esteja nas minhas notas\" ao pedido"], answer: 3, why: "A IA pode inventar eventos, por isso o pedido proíbe-o e você compara com as suas notas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reuniões: da agenda à lista de ações",
          minutes: 5,
          goal: "Usar a IA para escrever uma agenda e transformar as notas numa lista de ações com responsáveis e datas.",
          text: [
            "Antes: dê à IA o objetivo da reunião, a duração, os participantes pela sua função e os temas. Peça uma agenda com tempos e o resultado esperado de cada ponto (decidir, discutir, informar). Envie-a antes, para as pessoas chegarem preparadas.",
            "Depois: cole as suas notas (sem detalhes pessoais sobre alunos ou funcionários) e peça as decisões, as ações numa tabela com responsável e prazo, e as perguntas em aberto, com \"escreva MISSING se faltar um responsável ou uma data nas notas; não acrescente nada que não esteja nas notas\" (MISSING quer dizer \"em falta\").",
            "Compare a lista de ações com o que se lembra, preencha o que falta e envie-a no mesmo dia. Se pensar usar um gravador de reuniões com IA, veja a política do seu distrito e avise primeiro os participantes; nunca grave reuniões sobre alunos concretos, como as reuniões de IEP ou de disciplina, com ferramentas não aprovadas."
          ],
          steps: ["Escreva uma agenda com tempos e o resultado de cada ponto.", "Envie-a antes.", "Depois da reunião, cole as notas sem detalhes pessoais.", "Obtenha as decisões, as ações (responsável, data) e as perguntas em aberto.", "Verifique, preencha o que falta e envie no mesmo dia."],
          words: [["Agenda", "a lista dos temas e dos tempos de uma reunião."], ["Lista de ações", "as tarefas combinadas numa reunião, cada uma com um responsável e um prazo."], ["IEP", "Individualized Education Program: o plano educativo individual de um aluno com necessidades especiais nos Estados Unidos."]],
          slides: [
            { title: "Antes da reunião", bullets: ["Objetivo, duração, funções, temas", "Agenda com tempos", "Resultado de cada ponto: decidir, discutir, informar"] },
            { title: "Depois da reunião", bullets: ["Cole as notas sem detalhes pessoais", "Decisões, ações, perguntas em aberto", "MISSING para o que falta; não acrescentar nada"] },
            { title: "Gravadores", bullets: ["Veja a política; avise os participantes", "Nunca em reuniões de IEP ou de disciplina com ferramentas não aprovadas"] }
          ],
          tryIt: "Use a IA para escrever uma agenda com tempos para a sua próxima reunião de pessoal ou de equipa. Depois, transforme as suas notas numa lista de ações e envie-a no mesmo dia. Meça o tempo dos dois passos.",
          youCanNow: "conduzir reuniões, de uma agenda clara a uma lista de ações enviada no mesmo dia, com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "O que dá uma agenda com tempos a cada ponto?", options: ["Um tempo e um resultado esperado", "O salário de quem fala", "Uma votação", "Uma apresentação de slides"], answer: 0, why: "Os tempos e os resultados mantêm a reunião focada." },
            { objective: "O3", q: "Uma equipa quer gravar uma reunião de IEP com um gravador de IA gratuito e não aprovado. O que diria?", options: ["Podem avançar, poupa notas", "Gravem, mas apaguem depois", "Não; usem só ferramentas aprovadas e sigam a política para reuniões sobre alunos", "Gravem só metade"], answer: 2, why: "As reuniões de IEP têm informações protegidas dos alunos e precisam de ferramentas aprovadas e da política." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Recuperar tempo na comunicação e nas reuniões",
        questions: [
          { objective: "O1", q: "Que tarefa é a melhor candidata para a IA?", options: ["Decidir a disciplina de um aluno", "Escrever o IEP de um aluno concreto", "Um boletim semanal que segue sempre o mesmo padrão", "Escolher que professor avaliar"], answer: 2, why: "As tarefas frequentes e com padrão, sem dados privados, são boas para a IA." },
          { objective: "O2", q: "Porque acrescentar \"Não acrescente nada que não esteja nas minhas notas\" ao pedido do boletim?", options: ["Impede a IA de inventar eventos ou dados", "Torna-o mais longo", "Tradu-lo", "Acrescenta fotos"], answer: 0, why: "A IA pode preencher os espaços com detalhes inventados." },
          { objective: "O2", q: "Uma tradução do boletim feita pela IA deve ser:", options: ["Enviada logo", "Enviada só ao pessoal", "Ignorada", "Verificada primeiro por um falante qualificado"], answer: 3, why: "As famílias merecem informações certas." },
          { objective: "O3", q: "Que reunião nunca deve ser gravada com uma ferramenta de IA não aprovada?", options: ["Uma reunião geral de planificação", "Uma reunião de IEP sobre um aluno", "Um clube de leitura", "Uma reunião depois de um simulacro de incêndio"], answer: 1, why: "As reuniões sobre um aluno concreto têm informações protegidas." },
          { objective: "O3", q: "Quando deve ser enviada a lista de ações?", options: ["No mês seguinte", "Só se alguém pedir", "Nunca", "No mesmo dia"], answer: 3, why: "Enviar a lista de ações no mesmo dia mantém o ritmo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Formulários, automatizações e medir o ganho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inquéritos e formulários: das respostas ao resumo",
          minutes: 6,
          goal: "Resumir os resultados de um inquérito com a IA sem expor informações pessoais.",
          text: [
            "O Google Forms e o Microsoft Forms juntam as respostas numa folha de cálculo. Depois, a IA pode ajudar você a ver os temas nos comentários abertos e a escrever um resumo curto para o pessoal ou para as famílias.",
            "Primeiro, proteja as pessoas. Faça inquéritos que não recolham nomes, a não ser que precise mesmo deles. Antes de colar respostas numa ferramenta de IA, apague os nomes, os emails e qualquer comentário que identifique um aluno ou um funcionário. Use só ferramentas aprovadas para tudo o que tenha informações de alunos.",
            "Pedido: \"Aqui estão comentários anónimos das famílias sobre os horários de saída dos alunos. Agrupe-os em temas, conte quantos cabem em cada tema, cite dois comentários curtos típicos de cada tema e liste três sugestões. Não invente comentários.\" Depois, verifique você mesmo as contagens na folha de cálculo; a IA conta mal muitas vezes."
          ],
          steps: ["Faça inquéritos sem nomes, a não ser que sejam precisos.", "Tire os nomes, os emails e os comentários que identificam pessoas antes de usar a IA.", "Use ferramentas aprovadas para tudo o que tenha informações de alunos.", "Peça temas, contagens, citações típicas e sugestões.", "Verifique você mesmo as contagens."],
          words: [["Anónimo", "sem nomes nem detalhes que mostrem quem a pessoa é."], ["Tema", "uma ideia comum que aparece em muitas respostas."]],
          slides: [
            { title: "Do formulário à folha de cálculo e ao resumo", bullets: ["Google Forms ou Microsoft Forms", "A IA encontra temas nos comentários"] },
            { title: "Primeiro, proteger as pessoas", bullets: ["Não recolha nomes a não ser que sejam precisos", "Tire os detalhes que identificam antes de usar a IA", "Ferramentas aprovadas para informações de alunos"] },
            { title: "Pedir e depois verificar", bullets: ["Temas, contagens, citações típicas, sugestões", "\"Não invente comentários\"", "Verifique você mesmo as contagens: a IA conta mal"] }
          ],
          tryIt: "Crie um inquérito anónimo de três perguntas no Google Forms ou no Microsoft Forms. Escreva dez respostas inventadas, resuma-as com a IA e verifique as contagens com as respostas.",
          youCanNow: "transformar as respostas de um inquérito num resumo certo sem expor informações pessoais.",
          quickCheck: [
            { objective: "O4", q: "O que torna um inquérito anónimo?", options: ["Ter um título curto", "Não recolher nomes nem detalhes que identifiquem", "Só o diretor o ler", "Ser enviado por email"], answer: 1, why: "Os inquéritos anónimos não recolhem nomes nem detalhes que identifiquem." },
            { objective: "O4", q: "A IA diz que 40 famílias falaram do estacionamento. O que faz antes de o comunicar?", options: ["Verifico a contagem na folha de cálculo das respostas", "Comunico tal como está", "Arredondo para 50", "Pergunto à IA se tem a certeza"], answer: 0, why: "As contagens da IA podem estar erradas, por isso verifique-as nos dados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Automatizações simples: modelos, regras e gatilhos",
          minutes: 5,
          goal: "Criar uma automatização simples e manter nela uma verificação humana.",
          text: [
            "Nem tudo precisa de IA. Muitas formas de poupar tempo são automatizações simples: modelos de email para respostas comuns, regras de email que organizam as mensagens em pastas, modelos de documentos para relatórios que se repetem, a impressão em série (mail merge) para cartas personalizadas, e lembretes no calendário.",
            "As automatizações maiores ligam passos: quando alguém envia um formulário, acrescentar uma linha a uma folha e enviar uma confirmação; todas as sextas-feiras, lembrar o pessoal de entregar as notas. O Microsoft Power Automate e o Google Apps Script fazem isto; pergunte à sua equipa de tecnologia o que é permitido no seu distrito antes de criar algo que mexa em dados da escola.",
            "Mantenha uma verificação humana sempre que uma automatização envia algo às famílias ou faz uma mudança importante. Um pequeno erro repetido automaticamente para 500 famílias é um grande erro."
          ],
          steps: ["Comece pelo simples: modelos, regras, lembretes.", "Escolha uma tarefa repetida para automatizar.", "Fale com a sua equipa de tecnologia antes de ligar dados da escola.", "Acrescente uma verificação humana antes de qualquer coisa chegar às famílias.", "Teste primeiro com você como único destinatário."],
          words: [["Automatização", "uma configuração que faz uma tarefa sozinha quando algo acontece."], ["Gatilho", "o acontecimento que põe uma automatização a funcionar, como alguém enviar um formulário."], ["Impressão em série (mail merge)", "fazer muitas cartas ou emails personalizados a partir de um modelo e de uma lista."]],
          slides: [
            { title: "Formas simples de poupar tempo", bullets: ["Modelos de email e regras para organizar", "Modelos de documentos", "Impressão em série e lembretes"] },
            { title: "Passos ligados", bullets: ["Formulário enviado, linha acrescentada, confirmação enviada", "Power Automate ou Apps Script", "Pergunte primeiro à sua equipa de tecnologia"] },
            { title: "Mantenha uma verificação humana", bullets: ["Antes de qualquer coisa chegar às famílias", "Teste primeiro em si mesmo", "Os erros multiplicam-se automaticamente"] }
          ],
          tryIt: "Crie uma automatização simples: um modelo de email para uma resposta comum, ou uma regra que organize um tipo de mensagem. Teste-a em si mesmo e escreva onde está a verificação humana.",
          youCanNow: "criar automatizações simples com segurança, com uma verificação humana onde é importante.",
          quickCheck: [
            { objective: "O5", q: "O que é um gatilho numa automatização?", options: ["A pessoa que a aprova", "O último passo do fluxo de trabalho", "O acontecimento que põe a automatização a funcionar", "Um tipo de email"], answer: 2, why: "Um gatilho, como a chegada de uma nova mensagem, põe a automatização a funcionar." },
            { objective: "O5", q: "Criou uma regra que responde automaticamente às famílias. O que faz primeiro?", options: ["Ligo-a para todas as famílias de uma vez", "Desligo-a e esqueço", "Peço às famílias que a testem", "Testo-a comigo como único destinatário"], answer: 3, why: "Testar em si mesmo apanha os erros antes de chegarem a muitas pessoas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir o tempo poupado e manter o ritmo",
          minutes: 6,
          goal: "Medir o tempo antes e depois e fazer os seus fluxos de trabalho durar.",
          text: [
            "Só poupou tempo se os números o mostrarem. Para cada fluxo de trabalho, compare os minutos antes (da sua auditoria do tempo) e depois, incluindo o tempo de verificar. Se um fluxo de trabalho leva o mesmo tempo por causa das correções, mude o pedido ou deixe esse fluxo de trabalho.",
            "Escreva cada fluxo de trabalho numa página: o objetivo, o pedido ou modelo guardado, os passos, a verificação humana e quem o faz. Assim, outra pessoa pode usá-lo quando você não está, e o pessoal novo pode aprendê-lo.",
            "Partilhe os bons resultados com o pessoal e convide-os a partilhar os fluxos de trabalho deles. Uma pasta partilhada de pedidos e modelos da escola multiplica o tempo poupado em toda a escola. Reveja-a todos os períodos, para os pedidos continuarem certos quando os calendários, as ferramentas e as políticas mudam."
          ],
          steps: ["Compare os minutos antes e depois, incluindo a verificação.", "Corrija ou deixe os fluxos de trabalho que não poupam tempo.", "Escreva cada fluxo de trabalho numa página.", "Partilhe numa pasta de pedidos e modelos da escola.", "Reveja todos os períodos."],
          words: [["Antes e depois", "comparar uma medida antes e depois de uma mudança."], ["Documentação", "passos escritos para outras pessoas poderem repetir um processo."]],
          slides: [
            { title: "Conte os minutos", bullets: ["Antes e depois", "Inclua o tempo de verificar", "Sem ganho? Corrija ou deixe"] },
            { title: "Uma página por fluxo de trabalho", bullets: ["Objetivo, pedido, passos", "Verificação humana e responsável", "Outras pessoas podem usá-lo"] },
            { title: "Espalhe o ganho", bullets: ["Pasta partilhada de pedidos e modelos", "Convide o pessoal a partilhar fluxos", "Reveja todos os períodos"] }
          ],
          tryIt: "Tarefa final: use os seus três fluxos de trabalho durante uma semana (boletim, da agenda da reunião às ações, do inquérito ao resumo). Registe os minutos antes e depois de cada um, escreva cada um numa página com a sua verificação humana e coloque-os numa pasta partilhada.",
          youCanNow: "criar, medir e partilhar fluxos de trabalho administrativos com ajuda da IA que devolvem tempo aos alunos.",
          quickCheck: [
            { objective: "O6", q: "O que deve incluir o tempo poupado?", options: ["Só o tempo que a IA levou a responder", "Também o tempo gasto a verificar e a corrigir", "Só o melhor dia da semana", "O tempo gasto por outras pessoas"], answer: 1, why: "O tempo de verificar e corrigir faz parte do custo real de um fluxo de trabalho." },
            { objective: "O6", q: "Um fluxo de trabalho continua a levar o mesmo tempo porque corrige muitos erros da IA. O que faria?", options: ["Mudar o pedido ou deixar o fluxo de trabalho", "Mantê-lo, porque a IA é nova", "Deixar de verificar o resultado", "Acrescentar uma segunda ferramenta de IA"], answer: 0, why: "Um fluxo de trabalho que não poupa tempo deve ser melhorado ou deixado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Formulários, automatizações e medir o ganho",
        questions: [
          { objective: "O4", q: "Antes de colar comentários de um inquérito numa ferramenta de IA, deve:", options: ["Acrescentar nomes para dar contexto", "Acrescentar os números de aluno", "Tirar os nomes, os emails e os comentários que identificam pessoas", "Não fazer nada"], answer: 2, why: "Tire os detalhes que identificam para proteger as pessoas." },
          { objective: "O4", q: "A IA diz que 40 famílias falaram do trânsito. Deve:", options: ["Verificar a contagem na folha de cálculo", "Publicá-la", "Duplicá-la", "Ignorar o tema"], answer: 0, why: "A IA conta mal muitas vezes." },
          { objective: "O5", q: "Antes de criar uma automatização que mexe em dados da escola, pergunte:", options: ["A um aluno", "À sua equipa de tecnologia o que é permitido", "Ao anúncio do fornecedor", "A ninguém"], answer: 1, why: "Os distritos definem regras para ligar dados da escola." },
          { objective: "O5", q: "Porque testar primeiro uma automatização com você como único destinatário?", options: ["Para apanhar os erros antes de chegarem a muitas pessoas", "É mais rápido", "A lei obriga", "Para poupar papel"], answer: 0, why: "Os erros multiplicam-se quando são automáticos." },
          { objective: "O6", q: "Um fluxo de trabalho leva o mesmo tempo que antes por causa das correções aos erros da IA. Deve:", options: ["Mantê-lo mesmo assim", "Acrescentar mais passos", "Deixar de verificar", "Mudar o pedido ou deixar o fluxo de trabalho"], answer: 3, why: "Só conta o tempo realmente poupado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Líderes Escolares e Educativos 6: Produtividade e Automatização do Trabalho",
    questions: [
      { objective: "O1", q: "Uma auditoria do tempo:", options: ["Verifica os relógios da escola", "Regista como usa o tempo nas tarefas", "É uma auditoria financeira", "Dá notas aos professores"], answer: 1, why: "Meça antes de melhorar." },
      { objective: "O1", q: "As tarefas que exigem decisões sobre um aluno concreto devem:", options: ["Ser automatizadas", "Ir para a IA", "Ficar com você", "Ser ignoradas"], answer: 2, why: "As decisões sobre pessoas ficam com pessoas." },
      { objective: "O1", q: "Os números de antes são:", options: ["Notas de testes", "Números de telefone", "Os minutos gastos antes de automatizar", "Linhas do orçamento"], answer: 2, why: "Permitem medir o tempo poupado." },
      { objective: "O2", q: "Um pedido para o boletim deve ser:", options: ["Guardado e reutilizado todas as semanas", "Escrito de novo do zero de cada vez", "Secreto", "Longo e vago"], answer: 0, why: "Os pedidos guardados mantêm o boletim igual na forma." },
      { objective: "O2", q: "Antes de enviar o boletim, verifique:", options: ["O tipo de letra", "Só o título", "Nada", "Cada data, hora e local"], answer: 3, why: "Datas erradas causam problemas reais às famílias." },
      { objective: "O2", q: "Os nomes de alunos nos boletins devem seguir:", options: ["O que a IA sugerir", "As regras da escola sobre imagem e informações de diretório", "Nenhuma regra", "As modas das redes sociais"], answer: 1, why: "As escolas têm regras sobre a partilha de informações dos alunos." },
      { objective: "O3", q: "Uma agenda com tempos dá a cada ponto:", options: ["Nada", "Um preço", "Uma palavra-passe", "Um tempo e um resultado esperado"], answer: 3, why: "Os resultados mantêm as reuniões focadas." },
      { objective: "O3", q: "Uma lista de ações inclui:", options: ["Mexericos", "Só o tema", "Tarefa, responsável e prazo", "Salários"], answer: 2, why: "Responsáveis claros fazem as coisas acontecer." },
      { objective: "O3", q: "Se as notas não dizem quem é o responsável, a IA deve escrever:", options: ["MISSING", "Um palpite", "O seu nome", "Nada"], answer: 0, why: "Marcar o que falta evita responsáveis inventados." },
      { objective: "O3", q: "Os gravadores de reuniões com IA exigem:", options: ["Uso secreto", "Ver a política e avisar os participantes", "Nenhuma verificação", "Só o consentimento dos alunos"], answer: 1, why: "Gravar levanta questões de consentimento e de privacidade." },
      { objective: "O4", q: "O Google Forms e o Microsoft Forms juntam as respostas numa:", options: ["Folha de cálculo", "Vídeo", "Impressora", "Chatbot"], answer: 0, why: "As respostas ficam numa folha que pode analisar." },
      { objective: "O4", q: "Um inquérito anónimo:", options: ["Não tem perguntas", "Recolhe a morada de toda a gente", "É ilegal", "Não recolhe nomes nem detalhes que identifiquem"], answer: 3, why: "O anonimato protege quem responde." },
      { objective: "O4", q: "Pedir à IA para \"citar dois comentários típicos de cada tema\" ajuda a:", options: ["Inventar comentários", "Mostrar as vozes reais por trás de cada tema", "Esconder os resultados", "Poupar papel"], answer: 1, why: "As citações tornam os resumos concretos; mesmo assim, verifique-as." },
      { objective: "O5", q: "Qual é uma automatização simples?", options: ["Uma reunião de pessoal", "Um edifício novo", "Uma regra de email que organiza as mensagens em pastas", "Uma visita de estudo"], answer: 2, why: "As regras e os modelos poupam tempo sem IA." },
      { objective: "O5", q: "A impressão em série (mail merge) faz:", options: ["Um gráfico numa folha de cálculo", "Uma carta comprida", "Muitas cartas personalizadas a partir de um modelo e de uma lista", "Um inquérito"], answer: 2, why: "Personaliza em grande quantidade." },
      { objective: "O5", q: "Um gatilho é:", options: ["O acontecimento que põe uma automatização a funcionar", "Uma campainha da escola", "Uma palavra-passe", "Uma nota"], answer: 0, why: "Como alguém enviar um formulário." },
      { objective: "O5", q: "Onde deve ficar uma verificação humana?", options: ["No fim do ano", "Em lado nenhum", "Só depois de queixas", "Antes de qualquer coisa ser enviada às famílias"], answer: 3, why: "Os erros enviados às famílias multiplicam-se depressa." },
      { objective: "O6", q: "O tempo poupado deve incluir:", options: ["Só o tempo de escrever o rascunho", "O tempo gasto a verificar e a corrigir", "Nada", "Só o tempo de outras pessoas"], answer: 1, why: "O tempo de verificar faz parte do custo real." },
      { objective: "O6", q: "Escrever cada fluxo de trabalho numa página permite:", options: ["Apagá-lo", "Que ninguém o veja", "Que a IA lhe dê nota", "Que outras pessoas o usem quando você não está"], answer: 3, why: "A documentação mantém os fluxos de trabalho vivos." },
      { objective: "O6", q: "Uma pasta partilhada de pedidos da escola deve ser revista:", options: ["De dez em dez anos", "Nunca", "Todos os períodos", "Só pelos alunos"], answer: 2, why: "Os calendários, as ferramentas e as políticas mudam." }
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
      7,
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Fluxo de trabalho do boletim",
        objective: "O2",
        notYet: "O boletim não foi comparado com as notas, ou uma tradução não foi verificada.",
        meets: "As notas em tópicos tornaram-se um rascunho final verificado, com as traduções verificadas por um falante qualificado.",
        exceeds: "Usa um pedido guardado que proíbe acrescentar o que não está nas notas."
      },
      {
        name: "Fluxo de trabalho da reunião",
        objective: "O3",
        notYet: "Não há lista de ações, ou há tarefas sem responsáveis ou sem datas.",
        meets: "Uma agenda escrita pela IA e uma lista de ações com responsáveis e datas, enviada no mesmo dia.",
        exceeds: "Os responsáveis em falta estão marcados e há seguimento."
      },
      {
        name: "Fluxo de trabalho do inquérito",
        objective: "O4",
        notYet: "Os dados tinham nomes, ou as contagens não foram verificadas.",
        meets: "Os resultados do inquérito foram resumidos com a IA usando só dados sem nomes.",
        exceeds: "As contagens foram verificadas na folha de cálculo e há comentários típicos citados para cada tema."
      },
      {
        name: "Tempo medido",
        objective: "O6",
        notYet: "Não há minutos de antes nem de depois registados.",
        meets: "Minutos antes e depois registados para cada fluxo de trabalho.",
        exceeds: "Os minutos de depois incluem o tempo de verificar e corrigir."
      },
      {
        name: "Verificações humanas",
        objective: "O5",
        notYet: "Um fluxo de trabalho envia algo às famílias sem verificação humana.",
        meets: "Cada fluxo de trabalho diz qual é a verificação humana que mantém.",
        exceeds: "Cada fluxo de trabalho está escrito numa página numa pasta partilhada, para outras pessoas o poderem usar."
      }
    ]
  },
  evaluation: {
    results: [
      "Funcionários que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Minutos poupados por semana nos três fluxos de trabalho (registos de antes e depois)",
      "Fluxos de trabalho ainda em uso depois de 30 dias (inquérito de seguimento)",
      "Escolas com uma pasta partilhada de fluxos de trabalho de uma página revista todos os períodos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet e um assistente de IA aprovado pelo distrito",
      "Google Forms ou Microsoft Forms, e Google Docs ou Microsoft 365",
      "Um registo simples do tempo para os minutos antes e depois",
      "Cerca de 60 minutos para as lições e as verificações, mais uma semana a usar os fluxos de trabalho"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois a auditoria do tempo em grupo, comparando as tarefas que mais tempo roubam.",
      "Não coloquem informações pessoais de alunos e funcionários em ferramentas não aprovadas; usem respostas de inquérito inventadas na prática.",
      "Pergunte à equipa de tecnologia que automatizações são permitidas antes de alguém criar uma.",
      "Peça ao pessoal que teste as automatizações em si mesmo antes de chegarem às famílias.",
      "Avalie a tarefa final com a grelha de avaliação e junte os minutos antes e depois para partilhar com a escola o tempo poupado."
    ]
  }
};
