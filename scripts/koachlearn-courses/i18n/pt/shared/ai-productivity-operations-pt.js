"use strict";

// Koach Learn course (Portuguese translation of shared/ai-productivity-operations.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The word REORDER is kept in English because it is the text the spreadsheet formula shows.

module.exports = {
  id: "ai-productivity-operations-pt",
  lang: "pt",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "IA para a Produtividade e as Operações",
  skills: "Planear a semana com IA, Escrever um procedimento operacional padrão, Transformar reuniões em tarefas de seguimento, Fazer uma escala de pessoal ou de voluntários, Controlar materiais e encomendas, Escrever um balanço semanal das operações",
  outcome: "usar um assistente de IA gratuito para planear a semana, transformar uma tarefa confusa num procedimento claro passo a passo, tirar as tarefas de seguimento das reuniões, fazer uma escala, controlar os materiais e fazer o balanço da semana, para que a organização funcione melhor e lhe ocupe menos tempo.",
  about: [
    "As operações são o trabalho do dia a dia que mantém uma organização a funcionar: escalas, materiais, procedimentos, reuniões e seguimentos. Quando tudo está desorganizado, os donos e os diretores passam as noites a pôr o trabalho em dia. A IA pode tirar-lhes uma boa parte desse peso.",
    "Este curso é para donos e gerentes de pequenas empresas, diretores de organizações sem fins lucrativos e coordenadores de voluntários. Os exemplos incluem um restaurante, uma creche, uma equipa de jardinagem, uma loja de roupa usada e um banco alimentar.",
    "Vai usar o ChatGPT, o Microsoft Copilot ou o Google Gemini com o Google Docs e o Google Sheets ou o Microsoft 365. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Monte um kit semanal de operações para uma organização real ou de prática: um plano semanal com prioridades, um procedimento operacional padrão para uma tarefa que se repete, notas de reunião com tarefas de seguimento, responsáveis e prazos, uma escala de uma semana para o pessoal ou os voluntários, uma folha de materiais com pontos de encomenda e um balanço curto do fim da semana com uma melhoria para a semana seguinte.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos de pequenas empresas, chefes de turno e gestores de escritório, e coordenadores de organizações sem fins lucrativos, igrejas e programas comunitários que fazem malabarismos com tarefas, pessoal ou voluntários, reuniões e materiais.",
    startingPoint: "Mantêm o sítio a funcionar de memória, com listas em papel, SMS e um calendário; podem usar uma folha de cálculo e já experimentaram um assistente de IA. Poucos têm procedimentos escritos, notas de reunião organizadas ou pontos de encomenda.",
    gap: "Quando tudo está na cabeça de uma só pessoa, as tarefas ficam esquecidas, as pessoas novas aprendem devagar e os materiais acabam. Os alunos precisam de ferramentas simples, com a ajuda da IA, para o planeamento, os procedimentos, as reuniões, as escalas, os materiais e o balanço semanal, para que as operações funcionem melhor e lhes ocupem menos tempo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um telefone ou um computador; o computador é mais fácil para as folhas de cálculo",
      "Privacidade: só primeiros nomes ou rótulos; nada de saúde, salários ou dados privados do pessoal nas ferramentas de IA",
      "Regras: as leis do trabalho sobre pausas e horas dos menores mudam de lugar para lugar; os alunos verificam no serviço do trabalho do seu estado",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total, mais o tempo para montar o kit"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de tarefas confusa e as suas horas reais disponíveis", action: "criar com a IA um plano semanal, dia a dia, com prioridades", standard: "com as três tarefas principais marcadas no seu calendário" },
    { id: "O2", condition: "Para uma tarefa que a sua organização repete", action: "escrever um procedimento operacional padrão numerado com objetivo, materiais, passos, notas de segurança e uma lista de verificação", standard: "para que uma pessoa nova o possa seguir sem parar" },
    { id: "O3", condition: "Depois de uma reunião curta", action: "listar as decisões, as tarefas de seguimento e as questões em aberto a partir das notas", standard: "com um responsável e um prazo combinados para cada tarefa, enviadas no prazo de um dia" },
    { id: "O4", condition: "Com os turnos, as disponibilidades e as regras", action: "criar uma escala de uma semana para o pessoal ou os voluntários que cubra todos os turnos", standard: "respeitando os seus limites de horas, as competências exigidas e as regras do trabalho" },
    { id: "O5", condition: "Com os seus materiais e a rapidez com que os gasta", action: "montar uma folha de materiais com pontos de encomenda e uma fórmula que mostre REORDER", standard: "com um ponto de encomenda para cada artigo" },
    { id: "O6", condition: "No fim da semana", action: "escrever um balanço curto dos sucessos, das falhas e dos problemas e escolher uma melhoria", standard: "em cerca de 15 minutos, com a melhoria posta no plano da semana seguinte" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Organizar-se",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear a sua semana com IA",
          minutes: 5,
          goal: "Transformar uma lista de tarefas confusa num plano semanal com prioridades.",
          text: [
            "Uma lista de tarefas longa e misturada faz tudo parecer urgente. A IA consegue organizá-la depressa. Escreva todas as tarefas no chat e depois peça-lhe que as organize e faça um plano.",
            "Um pedido útil: \"Esta é a minha lista de tarefas da semana. Divida-a em: tenho de fazer esta semana, devo fazer, pode esperar e posso passar a outra pessoa. Depois faça um plano dia a dia. Tenho cerca de 3 horas por dia para trabalho de escritório, e a terça-feira é ocupada com entregas.\"",
            "Quem manda no plano é você. Mude o que a IA errou, reserve tempo no seu calendário para as três tarefas principais e deixe espaço para imprevistos."
          ],
          steps: ["Escreva todas as tarefas, grandes e pequenas, numa só lista.", "Peça à IA que as divida em tenho de, devo, pode esperar e passar a outra pessoa.", "Diga-lhe as suas horas reais disponíveis e os dias mais ocupados.", "Corrija o plano e depois reserve tempo no calendário para as três principais."],
          words: [["Dar prioridade", "decidir o que é mais importante e fazê-lo primeiro."], ["Delegar", "passar uma tarefa a outra pessoa."]],
          slides: [
            { title: "Despeje a lista", bullets: ["Todas as tarefas, grandes e pequenas", "Um só sítio, uma só lista"] },
            { title: "Peça à IA que a organize", bullets: ["Tenho de fazer, devo fazer", "Pode esperar, passar a outra pessoa", "Diga-lhe as suas horas reais"] },
            { title: "O plano é seu", bullets: ["Corrija o que a IA errou", "Reserve tempo para as três principais", "Deixe espaço para imprevistos"] }
          ],
          tryIt: "Escreva a sua lista completa de tarefas desta semana. Peça a um assistente de IA que a organize e faça um plano dia a dia com as suas horas reais, depois corrija-o e marque as suas três tarefas principais num calendário.",
          youCanNow: "transformar com a IA uma lista de tarefas confusa num plano semanal com prioridades.",
          quickCheck: [
            { objective: "O1", q: "No plano semanal deste curso, o que quer dizer \"passar a outra pessoa\"?", options: ["Tarefas que faz primeiro", "Tarefas que outra pessoa pode fazer", "Tarefas que apaga", "Tarefas que têm de ser feitas hoje"], answer: 1, why: "As tarefas para passar são as que outra pessoa pode fazer." },
            { objective: "O1", q: "O plano da IA põe a sua maior tarefa na terça-feira, o seu dia mais ocupado com entregas. O que faz?", options: ["Segue-o; a IA sabe mais", "Apaga a tarefa", "Pede à IA uma nova lista de tarefas", "Muda a tarefa para um dia mais calmo e reserva esse tempo no calendário"], answer: 3, why: "Quem manda no plano é você; corrija o que a IA errou." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever um procedimento operacional padrão",
          minutes: 6,
          goal: "Transformar a forma como faz uma tarefa num procedimento claro, passo a passo, que qualquer pessoa possa seguir.",
          text: [
            "Um procedimento operacional padrão (POP) são os passos escritos de uma tarefa que se repete: abrir a loja, limpar a cozinha, receber um cliente, contar o dinheiro da caixa. Com um POP, o pessoal novo ou os voluntários aprendem mais depressa e as coisas são feitas sempre da mesma maneira.",
            "A forma mais rápida: diga ou escreva tudo como explicaria a uma pessoa nova, mesmo que fique desorganizado. Depois peça à IA: \"Transforme isto num POP numerado com um título, objetivo, materiais necessários, passos com uma só ação cada, notas de segurança e uma lista de verificação final. Use palavras simples.\"",
            "Teste-o: peça a alguém que nunca fez a tarefa que o siga enquanto você observa em silêncio. Cada vez que a pessoa hesita, o POP precisa de um passo mais claro. Ponha-lhe a data e diga quem é o responsável."
          ],
          steps: ["Explique a tarefa em voz alta ou por escrito; desorganizado não faz mal.", "Peça à IA que a transforme num POP numerado com objetivo, materiais, passos, notas de segurança e uma lista de verificação.", "Verifique se cada passo está certo.", "Peça a uma pessoa nova que o teste.", "Corrija os passos pouco claros e depois ponha a data e o nome de um responsável."],
          words: [["POP", "procedimento operacional padrão: os passos escritos de uma tarefa que se repete. Em inglês diz-se SOP."], ["Lista de verificação", "uma lista de pontos para marcar, para que nada fique esquecido."]],
          slides: [
            { title: "Porquê os POP", bullets: ["As pessoas novas aprendem mais depressa", "Feito sempre da mesma maneira"] },
            { title: "De notas soltas a um POP", bullets: ["Explique como a uma pessoa nova", "A IA organiza: objetivo, materiais, passos", "Junte notas de segurança e uma lista de verificação"] },
            { title: "Teste-o", bullets: ["Uma pessoa nova segue-o", "Cada pausa = um passo para esclarecer", "Ponha a data e o nome de um responsável"] }
          ],
          tryIt: "Escolha uma tarefa que faz todas as semanas. Explique-a com as suas palavras, peça à IA que a transforme num POP, verifique-o e peça a alguém que tente segui-lo.",
          youCanNow: "escrever e testar um procedimento operacional padrão claro com a ajuda da IA.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer POP?", options: ["Procedimento operacional padrão", "Plano de horas extra do pessoal", "Processo de encomenda de materiais", "Programa das pessoas"], answer: 0, why: "Um POP é um procedimento operacional padrão: os passos escritos de uma tarefa que se repete." },
            { objective: "O2", q: "O POP feito pela IA para fechar a loja diz \"trancar\", mas esquece a porta das traseiras. O que faz?", options: ["Usa-o mesmo assim", "Deita fora o POP", "Verifica se cada passo está certo e junta o passo que falta", "Deixa o pessoal novo descobrir sozinho"], answer: 2, why: "Verifique se cada passo está certo antes de alguém usar o POP." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Transformar reuniões em tarefas de seguimento",
          minutes: 5,
          goal: "Fazer uma reunião curta e usar a IA para transformar as notas em decisões e tarefas de seguimento.",
          text: [
            "Muitas reuniões acabam com todos a concordar com a cabeça e nada acontece. A solução é simples: cada reunião termina com tarefas de seguimento, cada uma com um responsável e um prazo.",
            "Use uma ordem de trabalhos com horários. Tome notas rápidas, ou use as notas de IA da própria ferramenta de reuniões se a sua organização o permitir e todos tiverem sido avisados. Depois cole as notas na IA: \"A partir destas notas, liste as decisões tomadas, as tarefas de seguimento com responsável e prazo, e as questões em aberto.\"",
            "Verifique a lista antes de a enviar, porque a IA pode adivinhar um responsável ou uma data que nunca foram combinados. Tire tudo o que é privado, como dados de saúde ou salários do pessoal, antes de partilhar. Envie-a no prazo de um dia."
          ],
          steps: ["Escreva uma ordem de trabalhos curta com horários.", "Tome notas ou use notas de IA autorizadas, com todos avisados.", "Peça à IA que tire as decisões, as tarefas de seguimento e as questões em aberto.", "Verifique os responsáveis e as datas; tire os dados privados.", "Envie a lista de tarefas no prazo de um dia."],
          words: [["Ordem de trabalhos", "a lista dos temas de uma reunião, por ordem."], ["Tarefa de seguimento", "uma tarefa que sai de uma reunião, com um responsável e um prazo."]],
          slides: [
            { title: "Termine com ação", bullets: ["Cada tarefa tem um responsável", "Cada tarefa tem um prazo"] },
            { title: "Deixe a IA tirar o essencial", bullets: ["Decisões tomadas", "Tarefas de seguimento", "Questões em aberto"] },
            { title: "Antes de enviar", bullets: ["Verifique responsáveis e datas", "Tire os dados privados", "Envie no prazo de um dia"] }
          ],
          tryIt: "Tome notas na sua próxima reunião, ou escreva as notas de uma reunião recente. Use a IA para tirar as decisões e as tarefas de seguimento com responsáveis e datas, verifique-as e escreva a mensagem que enviaria.",
          youCanNow: "transformar notas de reunião em tarefas de seguimento verificadas, com responsáveis e prazos.",
          quickCheck: [
            { objective: "O3", q: "O que faz uma reunião terminar com um seguimento real?", options: ["Uma discussão longa", "Todos a concordar com a cabeça", "Uma reunião no dia seguinte", "Tarefas de seguimento, cada uma com um responsável e um prazo"], answer: 3, why: "As tarefas com responsáveis e datas transformam a conversa em trabalho." },
            { objective: "O3", q: "As suas notas de reunião falam da baixa médica de um membro do pessoal. O que faz antes de partilhar o resumo da IA?", options: ["Partilha-o como está", "Tira os dados privados de saúde", "Junta mais pormenores", "Afixa-o no quadro de avisos"], answer: 1, why: "Tire os dados privados, como a saúde ou o salário, antes de partilhar as notas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Organizar-se",
        questions: [
          { objective: "O1", q: "Quando pede à IA que planeie a sua semana, o que lhe deve dizer?", options: ["A palavra-passe do seu banco", "Nada; ela adivinha", "As suas horas reais disponíveis e os dias mais ocupados", "As moradas de casa do seu pessoal"], answer: 2, why: "Os limites reais tornam o plano realista." },
          { objective: "O2", q: "O que é um POP?", options: ["Os passos escritos de uma tarefa que se repete", "Um tipo de imposto sobre salários", "Uma publicação nas redes sociais", "Um relatório de vendas"], answer: 0, why: "Os procedimentos operacionais padrão permitem repetir as tarefas da mesma maneira." },
          { objective: "O2", q: "Um voluntário novo hesita no passo 4 do seu POP. O que é que isso lhe diz?", options: ["O voluntário não é inteligente", "Os POP nunca funcionam", "Apague o POP", "O passo 4 precisa de ser mais claro"], answer: 3, why: "A hesitação mostra onde os passos não estão claros." },
          { objective: "O3", q: "Cada tarefa de seguimento deve ter:", options: ["Uma história longa", "Um responsável e um prazo", "Um código secreto", "Nenhum pormenor"], answer: 1, why: "Os responsáveis e as datas fazem as tarefas acontecer." },
          { objective: "O3", q: "A IA escreve \"A Maria vai terminar o orçamento até sexta-feira\", mas ninguém combinou isso. O que faz?", options: ["Envia mesmo assim", "Corrige antes de enviar", "Dá a tarefa à Maria sem lhe perguntar", "Apaga todas as notas"], answer: 1, why: "A IA pode adivinhar; verifique os responsáveis e as datas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Operações a funcionar melhor",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer uma escala de pessoal ou de voluntários",
          minutes: 5,
          goal: "Usar a IA e uma folha de cálculo para fazer uma escala justa de uma semana que cubra todos os turnos.",
          text: [
            "Fazer a escala é um quebra-cabeças: quem está disponível, de quantas pessoas cada turno precisa e quem tem que competências. A IA consegue fazer uma primeira versão em segundos.",
            "Dê-lhe as regras sem dados privados: \"Faça uma tabela com a escala de uma semana. Turnos: segunda a sexta 8-12 e 12-4, duas pessoas em cada. Sábado 9-1, três pessoas. Disponibilidade: Pessoa A só nos dias úteis, Pessoa B não às segundas... Cada pessoa no máximo 20 horas. Pelo menos uma pessoa com formação em manuseamento de alimentos por turno.\"",
            "Compare o rascunho com as suas regras e com as leis do trabalho que se aplicam, como as pausas e as horas dos menores; o serviço do trabalho do seu estado tem essa lista. Ponha a escala final numa folha de cálculo partilhada para que todos vejam as mudanças."
          ],
          steps: ["Liste os turnos e quantas pessoas cada um precisa.", "Liste a disponibilidade de cada pessoa com primeiros nomes ou rótulos.", "Liste as regras: máximo de horas, competências exigidas.", "Peça à IA uma tabela com a escala.", "Verifique as regras e as leis do trabalho e depois partilhe-a numa folha de cálculo."],
          words: [["Turno", "um bloco fixo de tempo de trabalho."], ["Disponibilidade", "as horas em que uma pessoa pode trabalhar ou fazer voluntariado."]],
          slides: [
            { title: "A escala é um quebra-cabeças", bullets: ["Disponibilidade, turnos, competências"] },
            { title: "Dê as regras à IA", bullets: ["Turnos e pessoas necessárias", "Disponibilidade por primeiro nome ou rótulo", "Máximo de horas e competências exigidas"] },
            { title: "Verifique e partilhe", bullets: ["Confira com as suas regras", "Verifique as regras do trabalho do estado: pausas, menores", "Partilhe numa folha de cálculo"] }
          ],
          tryIt: "Escreva os turnos, as disponibilidades e as regras de uma equipa real ou de prática com pelo menos quatro pessoas. Peça à IA um rascunho da escala de uma semana, verifique cada regra e corrija os problemas.",
          youCanNow: "fazer e verificar uma escala semanal justa com a ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "O que deve dar à IA quando lhe pede uma escala?", options: ["A morada e o telefone de todos", "Só a palavra \"escala\"", "Turnos, primeiros nomes ou rótulos, disponibilidades e regras", "Os salários do pessoal"], answer: 2, why: "A IA precisa dos turnos, das disponibilidades e das regras, mas não de dados privados." },
            { objective: "O4", q: "A escala da IA deixa o sábado sem ninguém com formação em manuseamento de alimentos. O que faz?", options: ["Muda-a para que cada turno tenha uma pessoa com formação", "Deixa ficar; é só um dia", "Cancela o sábado", "Pede ao pessoal sem formação que adivinhe"], answer: 0, why: "Compare o rascunho com todas as regras, incluindo as competências exigidas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Controlar materiais e encomendas",
          minutes: 5,
          goal: "Montar uma folha de materiais com pontos de encomenda para nunca ficar sem nada.",
          text: [
            "Quando faltam copos, luvas, farinha ou fraldas, o trabalho para. Uma folha de materiais simples evita isso. Colunas: artigo, unidade, quantidade em stock, gasto por semana, ponto de encomenda, quantidade a encomendar e fornecedor.",
            "O ponto de encomenda é a quantidade que lhe diz para encomendar já. Uma regra simples: o gasto por semana vezes o número de semanas que a entrega demora, mais um pouco de reserva. Se gasta 10 caixas por semana e a entrega demora 1 semana, encomende quando tiver cerca de 12 caixas.",
            "Peça à IA uma fórmula que marque os artigos a encomendar: \"No Google Sheets, escreva uma fórmula que mostre REORDER quando a quantidade em stock for igual ou menor que o ponto de encomenda.\" (REORDER quer dizer \"encomendar outra vez\".) Conte os materiais no mesmo dia todas as semanas e atualize a folha."
          ],
          steps: ["Liste os artigos com a unidade e o fornecedor.", "Calcule o gasto por semana de cada um.", "Defina um ponto de encomenda: gasto por semana x semanas de entrega + um pouco de reserva.", "Peça à IA uma fórmula que mostre REORDER.", "Conte todas as semanas no mesmo dia."],
          words: [["Inventário", "os materiais ou produtos que tem em stock."], ["Ponto de encomenda", "a quantidade que lhe diz que está na hora de encomendar mais."]],
          slides: [
            { title: "Colunas da folha de materiais", bullets: ["Artigo, unidade, em stock", "Gasto por semana, ponto de encomenda", "Quantidade a encomendar, fornecedor"] },
            { title: "Ponto de encomenda", bullets: ["Gasto por semana x semanas de entrega + reserva", "10 por semana, entrega em 1 semana: cerca de 12"] },
            { title: "Deixe a folha avisar", bullets: ["A fórmula mostra REORDER", "Conte no mesmo dia todas as semanas"] }
          ],
          tryIt: "Monte uma folha de materiais com pelo menos oito artigos, defina os pontos de encomenda e junte uma fórmula escrita pela IA que marque os artigos a encomendar.",
          youCanNow: "controlar os materiais com pontos de encomenda e um aviso automático para encomendar.",
          quickCheck: [
            { objective: "O5", q: "O que é um ponto de encomenda?", options: ["A morada do fornecedor", "A quantidade em stock que lhe diz para encomendar já", "O preço de um artigo", "O dia em que a loja abre"], answer: 1, why: "O ponto de encomenda é a quantidade que lhe diz para encomendar mais." },
            { objective: "O5", q: "Gasta 20 pacotes de luvas por semana e a entrega demora 1 semana. Mais ou menos quando deve encomendar?", options: ["Quando tiver 0 pacotes", "Quando tiver 2 pacotes", "Quando tiver 100 pacotes", "Quando tiver cerca de 22 a 24 pacotes"], answer: 3, why: "O gasto por semana vezes as semanas de entrega, mais um pouco de reserva, dá cerca de 22 a 24 pacotes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer o balanço da semana e melhorar",
          minutes: 5,
          goal: "Escrever um balanço curto do fim da semana e escolher uma melhoria.",
          text: [
            "Um balanço de 15 minutos no fim de cada semana impede que os pequenos problemas cresçam. Veja o que ficou feito, o que não ficou, o que correu mal e o que mudar.",
            "Dê à IA o seu plano, as tarefas de seguimento terminadas e algumas notas, e depois peça: \"Escreva um balanço semanal curto das operações: sucessos, falhas, problemas e uma melhoria para a próxima semana.\" Corrija-o para que seja verdadeiro e justo para a sua equipa.",
            "Escolha só uma melhoria por semana, como um novo POP, uma correção na escala ou uma mudança nas encomendas. Pequenas correções todas as semanas tornam as operações muito mais fáceis ao fim de alguns meses."
          ],
          steps: ["Junte o seu plano semanal, as tarefas de seguimento e as notas.", "Peça à IA um balanço curto: sucessos, falhas, problemas, uma melhoria.", "Corrija-o para que seja verdadeiro e justo.", "Escolha uma melhoria e ponha-a no plano da semana seguinte."],
          words: [["Balanço", "um olhar para trás para aprender o que funcionou e o que não funcionou."], ["Melhoria contínua", "fazer pequenas mudanças com regularidade para ficar melhor com o tempo."]],
          slides: [
            { title: "15 minutos por semana", bullets: ["O que ficou feito", "O que não ficou", "O que correu mal"] },
            { title: "A IA faz o rascunho do balanço", bullets: ["Sucessos, falhas, problemas", "Uma melhoria", "Você corrige para ser verdadeiro e justo"] },
            { title: "Uma correção por semana", bullets: ["Novo POP, correção na escala ou mudança nas encomendas", "As pequenas correções somam-se"] }
          ],
          tryIt: "Tarefa final: escreva o seu balanço do fim da semana com a ajuda da IA e escolha uma melhoria. Junto com o seu plano semanal, o POP, as tarefas de seguimento, a escala e a folha de materiais, isto completa o seu kit semanal de operações.",
          youCanNow: "gerir uma semana de operações com a ajuda da IA e continuar a melhorá-la.",
          quickCheck: [
            { objective: "O6", q: "O que inclui um balanço do fim da semana?", options: ["Sucessos, falhas, problemas e uma melhoria", "Só o que correu mal", "Os erros de cada membro do pessoal", "O orçamento do próximo ano"], answer: 0, why: "Um balanço curto inclui sucessos, falhas, problemas e uma melhoria." },
            { objective: "O6", q: "O balanço da IA culpa um voluntário por uma entrega atrasada que foi culpa do fornecedor. O que faz?", options: ["Envia-o como está", "Escolhe cinco melhorias em vez de uma", "Corrige-o para que seja verdadeiro e justo para a equipa", "Salta o balanço esta semana"], answer: 2, why: "Corrija o rascunho da IA para que seja verdadeiro e justo antes de o partilhar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Operações a funcionar melhor",
        questions: [
          { objective: "O4", q: "Quando dá à IA informações para a escala, o que deve usar para as pessoas?", options: ["Números completos da Segurança Social", "Moradas de casa", "Processos médicos", "Primeiros nomes ou rótulos, sem dados privados"], answer: 3, why: "A escala precisa das disponibilidades, não de dados privados." },
          { objective: "O4", q: "Onde pode verificar as regras sobre pausas e horas de trabalho dos menores?", options: ["No serviço do trabalho do seu estado", "Num blogue qualquer", "Só num chat de IA", "Num concorrente"], answer: 0, why: "As regras do trabalho vêm dos serviços oficiais do trabalho." },
          { objective: "O5", q: "Gasta 10 caixas por semana e a entrega demora 1 semana. Um ponto de encomenda sensato é cerca de:", options: ["0 caixas", "1 caixa", "12 caixas", "100 caixas"], answer: 2, why: "Gasto por semana x semanas de entrega, mais um pouco de reserva." },
          { objective: "O6", q: "Quanto tempo demora o balanço semanal neste curso?", options: ["Um dia inteiro", "Três horas", "Nenhum; salte-o", "Cerca de 15 minutos"], answer: 3, why: "Um balanço semanal curto mantém os problemas pequenos." },
          { objective: "O6", q: "Quantas melhorias deve escolher por semana?", options: ["Vinte", "Nenhuma", "Uma", "Tudo de uma vez"], answer: 2, why: "Uma correção por semana é possível e soma-se com o tempo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para a Produtividade e as Operações",
    questions: [
      { objective: "O1", q: "Operações quer dizer:", options: ["Só cirurgias", "O trabalho do dia a dia que mantém uma organização a funcionar", "Só vendas", "Só marketing"], answer: 1, why: "Escalas, materiais, procedimentos e seguimentos." },
      { objective: "O1", q: "Quando a IA organiza a sua lista de tarefas, que grupo é \"passar a outra pessoa\"?", options: ["Tarefas que outra pessoa pode fazer", "Tarefas que tem de fazer hoje", "Tarefas para apagar", "Tarefas para a IA fazer sozinha"], answer: 0, why: "Passar a outra pessoa quer dizer delegar." },
      { objective: "O1", q: "Quem tem a última palavra sobre o seu plano semanal?", options: ["A IA", "Ninguém", "Você", "O seu fornecedor"], answer: 2, why: "É você quem corrige o plano e é dono dele." },
      { objective: "O2", q: "Um POP ajuda porque:", options: ["As tarefas são feitas da mesma maneira e as pessoas novas aprendem mais depressa", "Substitui todo o pessoal", "É obrigatório para cada email", "Torna as tarefas mais lentas"], answer: 0, why: "É para isso que servem os POP." },
      { objective: "O2", q: "A forma mais rápida de começar um POP é:", options: ["Copiar o POP de outra empresa", "Esperar por um consultor", "Não o escrever", "Explicar a tarefa com as suas palavras e depois pedir à IA que a organize"], answer: 3, why: "O seu conhecimento mais a organização da IA é rápido." },
      { objective: "O2", q: "Um bom POP inclui:", options: ["Só um título", "Objetivo, materiais, passos numerados, notas de segurança e uma lista de verificação", "Os salários do pessoal", "Os números de telefone dos clientes"], answer: 1, why: "Essas partes tornam-no completo." },
      { objective: "O2", q: "Como se testa um POP?", options: ["Lê-o uma vez sozinho", "Pede a uma pessoa nova que o siga enquanto observa", "Pergunta à IA se está bom", "Não se testa"], answer: 1, why: "Uma pessoa nova mostra os passos pouco claros." },
      { objective: "O3", q: "Uma ordem de trabalhos é:", options: ["A lista de lanches de uma reunião", "Um formulário de salários", "Um tipo de POP", "A lista dos temas de uma reunião, por ordem"], answer: 3, why: "A ordem de trabalhos mantém a reunião focada." },
      { objective: "O3", q: "Antes de usar notas de reunião feitas pela IA, deve:", options: ["Garantir que é permitido e que todos foram avisados", "Gravar às escondidas", "Partilhar os salários do pessoal", "Não fazer ordem de trabalhos"], answer: 0, why: "As pessoas devem saber quando uma reunião é gravada ou transcrita." },
      { objective: "O3", q: "Antes de enviar notas de reunião feitas pela IA, tire:", options: ["Todas as tarefas de seguimento", "A data da reunião", "Os dados privados, como a saúde ou o salário do pessoal", "As decisões"], answer: 2, why: "As informações privadas não devem ser partilhadas com muita gente." },
      { objective: "O3", q: "As tarefas de seguimento devem ser enviadas:", options: ["Um mês depois", "Nunca", "Só se alguém pedir", "No prazo de um dia"], answer: 3, why: "Um seguimento rápido mantém o ritmo." },
      { objective: "O4", q: "Um turno é:", options: ["Só uma tecla do teclado", "Um tipo de material", "Um bloco fixo de tempo de trabalho", "Uma reunião"], answer: 2, why: "As escalas são feitas de turnos." },
      { objective: "O4", q: "O rascunho da escala da IA dá 30 horas a uma pessoa, mas o seu limite é 20. Deve:", options: ["Deixar ficar", "Corrigir a escala para respeitar a sua regra", "Ignorar a regra", "Tirar essa pessoa"], answer: 1, why: "Compare sempre os rascunhos da IA com as suas regras." },
      { objective: "O4", q: "Porquê partilhar a escala final numa folha de cálculo?", options: ["Todos veem as últimas mudanças", "Para a esconder", "A lei obriga a usar folhas de cálculo", "Para que ninguém a veja"], answer: 0, why: "Uma folha partilhada mantém todos atualizados." },
      { objective: "O5", q: "Inventário quer dizer:", options: ["Lista do pessoal", "Notas de reunião", "Os materiais ou produtos em stock", "Opiniões dos clientes"], answer: 2, why: "O inventário é o que tem em stock." },
      { objective: "O5", q: "Um ponto de encomenda diz-lhe:", options: ["Quando está na hora de encomendar mais", "O preço de um artigo", "Quem é o fornecedor", "Como o cozinhar"], answer: 0, why: "Ele dá o sinal para uma nova encomenda." },
      { objective: "O5", q: "Uma fórmula que mostra REORDER ajuda porque:", options: ["Encomenda os artigos sozinha com o seu cartão", "Apaga a folha", "Muda de fornecedor", "Marca sozinha os artigos que estão a acabar"], answer: 3, why: "A folha avisa quando o stock está baixo." },
      { objective: "O5", q: "Com que frequência deve contar os materiais?", options: ["Uma vez por ano", "Todas as semanas no mesmo dia", "Nunca", "Só quando acabam"], answer: 1, why: "Contagens regulares mantêm a folha certa." },
      { objective: "O6", q: "Um balanço semanal inclui:", options: ["Só os sucessos", "Sucessos, falhas, problemas e uma melhoria", "Só culpas", "Nada por escrito"], answer: 1, why: "Um balanço equilibrado leva à melhoria." },
      { objective: "O6", q: "Fazer pequenas mudanças com regularidade para ficar melhor chama-se:", options: ["Delegação", "Inventário", "Escala", "Melhoria contínua"], answer: 3, why: "Pequenas correções regulares somam-se." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      2,
      3,
      6,
      8,
      9,
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
        name: "Plano semanal",
        objective: "O1",
        notYet: "As tarefas não estão organizadas, ou o plano não tem em conta as horas reais disponíveis.",
        meets: "Tarefas divididas em tenho de, devo, pode esperar e passar a outra pessoa, com um plano dia a dia que cabe nas horas reais.",
        exceeds: "As três tarefas principais estão marcadas num calendário, com espaço livre para imprevistos."
      },
      {
        name: "Procedimento operacional padrão",
        objective: "O2",
        notYet: "Os passos são vagos ou estão fora de ordem, ou não há lista de verificação.",
        meets: "Título, objetivo, materiais, passos numerados com uma ação cada, notas de segurança, lista de verificação, data e responsável.",
        exceeds: "Uma pessoa nova testou-o e os passos pouco claros foram corrigidos."
      },
      {
        name: "Tarefas de seguimento da reunião",
        objective: "O3",
        notYet: "As tarefas de seguimento não têm responsável nem prazo.",
        meets: "Decisões, tarefas de seguimento com responsáveis e datas combinados, e questões em aberto, sem dados privados.",
        exceeds: "Enviadas no prazo de um dia, depois de verificar e corrigir os responsáveis ou as datas que a IA adivinhou."
      },
      {
        name: "Escala",
        objective: "O4",
        notYet: "Há um turno sem ninguém ou uma regra não é respeitada.",
        meets: "Todos os turnos cobertos, limites de horas e competências respeitados, partilhada numa folha de cálculo.",
        exceeds: "Indica as regras do trabalho verificadas no serviço do trabalho do estado."
      },
      {
        name: "Folha de materiais",
        objective: "O5",
        notYet: "Não há pontos de encomenda.",
        meets: "Cada artigo tem o gasto por semana, um ponto de encomenda e uma fórmula que mostra REORDER.",
        exceeds: "Inclui o fornecedor e um dia fixo por semana para contar."
      },
      {
        name: "Balanço semanal",
        objective: "O6",
        notYet: "Não há balanço, ou não foi escolhida nenhuma melhoria.",
        meets: "Um balanço curto e justo dos sucessos, das falhas e dos problemas, com uma melhoria.",
        exceeds: "A melhoria já está no plano da semana seguinte."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Organizações com pelo menos três POP escritos e em uso no prazo de 60 dias (inquérito de acompanhamento)",
      "Menos faltas de materiais essenciais nos 60 dias depois do curso",
      "Donos e gerentes que dizem poupar horas por semana no planeamento e na coordenação"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com internet",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Um calendário e uma folha de cálculo (Google Sheets ou Excel)",
      "Uma lista de tarefas real, uma tarefa que se repete e uma lista de materiais da organização do aluno",
      "Cerca de 60 minutos para as lições e as verificações, mais o tempo para montar o kit"
    ],
    facilitatorNotes: [
      "Façam juntos o teste inicial e depois um capítulo por sessão; construam a fórmula de encomenda num ecrã partilhado.",
      "Peça aos alunos que troquem os POP e sigam os passos uns dos outros para encontrar os que não estão claros.",
      "Lembre aos alunos que usem só primeiros nomes ou rótulos e que nunca ponham dados de saúde ou salários do pessoal na IA.",
      "Indique aos alunos o serviço do trabalho do seu estado para as regras sobre pausas e horas dos menores; não dê conselhos jurídicos.",
      "Avalie o kit final com a grelha de avaliação e dê comentários sobre uma linha em Ainda não de cada vez."
    ]
  }
};
