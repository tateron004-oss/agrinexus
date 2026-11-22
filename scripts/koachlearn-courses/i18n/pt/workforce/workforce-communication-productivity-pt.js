"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-communication-productivity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "workforce-communication-productivity-pt",
  lang: "pt",
  translationOf: "workforce-communication-productivity",
  category: "Workforce Development",
  name: "Comunicação e Produtividade no Trabalho",
  skills: "Escrever mensagens de trabalho claras, Fazer a passagem de um turno ou tarefa, Pedir ajuda e dar atualizações, Ordenar uma lista de tarefas, Planear a semana com blocos de tempo, Usar a IA como ajudante e não como substituto",
  outcome: "comunicar com clareza e fazer o trabalho certo no seu emprego: escrever uma mensagem clara com o ponto principal primeiro, fazer uma passagem completa, enviar uma atualização curta, ordenar uma lista de tarefas por importância e urgência e planear uma semana com blocos de tempo, usando a IA para ajudar a escrever e a organizar.",
  about: [
    "Este curso é para quem trabalha e para quem procura emprego, em qualquer área: comércio, armazém, apoio na saúde, escritório, atendimento ao cliente, ofícios. A comunicação clara e os bons hábitos com o tempo estão entre as habilidades que os empregadores mais valorizam, e ajudam em qualquer trabalho.",
    "Você vai praticar a escrita de mensagens que as pessoas entendem à primeira, a passagem do trabalho sem deixar nada cair, manter o seu chefe informado e decidir o que fazer primeiro quando tudo parece urgente. Um assistente de IA ajuda a escrever e a organizar; os factos e as decisões são seus.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Siga as regras do seu local de trabalho sobre que ferramentas de IA pode usar e não coloque nelas informações confidenciais."
  ],
  finalTask: "Faça um kit de comunicação e produtividade para uma semana: uma mensagem de trabalho clara com o ponto principal primeiro, uma passagem de turno ou tarefa com a lista de verificação, uma atualização no formato Feito / A seguir / Bloqueado, uma lista de tarefas ordenada nas quatro caixas de urgente e importante e um plano da próxima semana com blocos de tempo. Use a IA para ajudar a escrever pelo menos dois deles e verifique todos os factos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas que trabalham e pessoas que procuram emprego, em qualquer área: comércio, armazém, apoio na saúde, escritório, atendimento ao cliente e ofícios.",
    startingPoint: "Enviam SMS e emails e têm algum tipo de lista de tarefas. Muitos escrevem mensagens em que o ponto principal fica escondido, fazem passagens incompletas e planeiam a semana à volta do que é urgente. Alguns já experimentaram um assistente de IA.",
    gap: "A comunicação clara e a gestão do tempo estão entre as habilidades que os empregadores mais valorizam, e passagens falhadas e mensagens pouco claras causam erros. Os alunos precisam de formatos simples e repetíveis para mensagens, passagens e atualizações, de uma forma de escolher o que importa e de um plano semanal, usando a IA para escrever rascunhos e mantendo as suas próprias decisões.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um smartphone ou computador; o calendário do telefone ou uma agenda de papel",
      "Privacidade e regras: nenhum dado privado de clientes ou pacientes em ferramentas de IA, a menos que o local de trabalho aprove o sistema; as regras de IA do trabalho vêm primeiro",
      "Quem trabalha por turnos controla pouco o seu horário, por isso os planos adaptam-se aos turnos fixos",
      "Tempo: lições de cerca de 5 minutos que cabem num dia de trabalho"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma mensagem que precisa de enviar no trabalho", action: "escrever a mensagem com o ponto principal primeiro e um pedido claro com prazo", standard: "sobre um só assunto e com todos os factos verificados" },
    { id: "O2", condition: "No fim de um turno ou de uma tarefa", action: "fazer uma passagem completa com a lista de verificação de cinco partes", standard: "com os pontos pendentes e o que vigiar, e sem dados privados em ferramentas não aprovadas" },
    { id: "O3", condition: "Todas as semanas, ou quando estiver bloqueado", action: "escrever uma atualização Feito / A seguir / Bloqueado e pedir ajuda cedo", standard: "dizendo o que tentou, o que precisa e até quando" },
    { id: "O4", condition: "Com pelo menos dez tarefas", action: "ordená-las nas quatro caixas de urgente e importante e escolher as três principais", standard: "perguntando ao seu chefe quando não tiver a certeza do que vem primeiro" },
    { id: "O5", condition: "Para a próxima semana", action: "criar um plano com blocos de tempo com os seus turnos, tarefas importantes, blocos para mensagens e tempo de reserva", standard: "ajustado à sua vida real" },
    { id: "O6", condition: "Quando usa a IA para ajudar no seu trabalho", action: "escolher que partes a IA escreve e verificar todos os factos antes de enviar", standard: "usando só ferramentas aprovadas e sem dados confidenciais" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comunicar com clareza",
      lessons: [
        {
          objectives: ["O1"],
          title: "O ponto principal primeiro: mensagens de trabalho claras",
          minutes: 5,
          goal: "Escrever uma mensagem de trabalho com o ponto principal primeiro e um pedido claro.",
          text: [
            "Pessoas ocupadas leem a primeira linha e passam os olhos pelo resto. Ponha primeiro o ponto principal ou o pedido, depois os detalhes e depois o que precisa e até quando. Exemplo: \"Pode ficar com o meu turno de sábado das 8 às 4? Tenho uma emergência familiar. Por favor, responda até quinta-feira ao meio-dia.\"",
            "Seja breve: um assunto por mensagem, frases curtas, tópicos para as listas. No email, use um assunto claro: \"Preciso de substituto: turno sáb 8-4\".",
            "Um assistente de IA pode transformar notas soltas numa mensagem clara: \"Reescreva isto com o ponto principal primeiro, em menos de 80 palavras, educado e direto.\" Você verifica os factos, os nomes e as horas."
          ],
          steps: ["Escreva o ponto principal ou o pedido numa frase.", "Acrescente só os detalhes de que o leitor precisa.", "Diga o que precisa e até quando.", "Use um assunto claro.", "Peça à IA para encurtar e depois verifique os factos."],
          words: [["Ponto principal primeiro", "pôr a mensagem ou o pedido mais importante no início."], ["Assunto", "o título curto de um email."]],
          slides: [
            { title: "Os leitores passam os olhos", bullets: ["Primeiro o ponto principal ou o pedido", "Depois os detalhes", "Depois o que precisa e até quando"] },
            { title: "Seja breve", bullets: ["Um assunto por mensagem", "Frases curtas e tópicos", "Assunto claro: \"Preciso de substituto: sáb 8-4\""] },
            { title: "A IA pode encurtar", bullets: ["\"Ponto principal primeiro, menos de 80 palavras\"", "Você verifica nomes, datas e horas"] }
          ],
          tryIt: "Pegue numa mensagem que precisa de enviar (ou num exemplo, como pedir uma mudança de horário). Reescreva-a com o ponto principal primeiro e um prazo, peça à IA para a encurtar e verifique todos os factos.",
          youCanNow: "escrever uma mensagem de trabalho curta com o ponto principal e o pedido primeiro.",
          quickCheck: [
            { objective: "O1", q: "Porque pôr o ponto principal primeiro numa mensagem de trabalho?", options: ["Deixa a mensagem mais longa", "Soa mais educado", "Pessoas ocupadas leem a primeira linha e passam os olhos pelo resto", "É uma regra da lei"], answer: 2, why: "Quem só vê a primeira linha fica na mesma a saber o que você precisa." },
            { objective: "O1", q: "Precisa da sexta-feira de folga. Que mensagem envia?", options: ["\"Posso ter folga na sexta-feira para uma consulta médica? Por favor, diga-me até quarta-feira.\"", "\"Olá, espero que esteja bem, esta semana tem sido agitada e...\"", "\"Sexta?\"", "Uma mensagem com três pedidos diferentes"], answer: 0, why: "Põe o pedido primeiro, dá uma razão e um prazo, e trata de um só assunto." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Passagens que não deixam nada cair",
          minutes: 5,
          goal: "Fazer uma passagem completa de turno ou tarefa com uma lista de verificação simples.",
          text: [
            "Muitos problemas no trabalho acontecem nas passagens: no fim do turno, quando um colega sai de licença, quando uma tarefa passa para outra pessoa. Uma lista de verificação curta impede que as coisas se percam.",
            "Uma boa passagem inclui: Situação (como estão as coisas), Pendentes (o que não está acabado), Vigiar (riscos ou problemas), Contactos (a quem ligar) e Próximos passos (o que a pessoa seguinte deve fazer primeiro).",
            "Pode dizer as suas notas ao telefone ou escrevê-las depressa e pedir à IA: \"Transforme estas notas numa passagem com as partes Situação, Pendentes, Vigiar, Contactos, Próximos passos.\" Deixe de fora dados privados de clientes, pacientes ou funcionários, a menos que use um sistema de trabalho aprovado."
          ],
          steps: ["No fim do turno ou da tarefa, escreva ou diga notas soltas.", "Organize-as em Situação, Pendentes, Vigiar, Contactos, Próximos passos.", "Verifique que não falta nada.", "Entregue a passagem e responda às perguntas."],
          words: [["Passagem", "entregar o trabalho a outra pessoa, com as informações de que ela precisa."], ["Pendente", "uma coisa que ainda não está acabada."]],
          slides: [
            { title: "Os problemas acontecem nas passagens", bullets: ["Fim do turno", "Licença ou férias", "Uma tarefa que passa para outra pessoa"] },
            { title: "Lista de verificação da passagem", bullets: ["Situação e pendentes", "Vigiar (riscos)", "Contactos e próximos passos"] },
            { title: "A IA organiza as suas notas", bullets: ["Diga ou escreva notas soltas", "Peça as cinco partes", "Deixe de fora os dados privados"] }
          ],
          tryIt: "Escreva uma passagem do seu trabalho atual ou do último (ou de um turno de armazém de exemplo) com as cinco partes. Use a IA para organizar as suas notas soltas e verifique que não falta nada.",
          youCanNow: "fazer uma passagem completa para que a pessoa seguinte saiba o que fazer.",
          quickCheck: [
            { objective: "O2", q: "Porque são importantes as passagens?", options: ["Tornam os turnos mais longos", "São só para chefes", "Substituem a formação", "Muitos problemas acontecem quando o trabalho muda de mãos"], answer: 3, why: "A informação perde-se quando o trabalho muda de mãos, por isso uma lista de verificação mantém-na completa." },
            { objective: "O2", q: "Está a passar o turno e uma palete está muito inclinada. Onde fica isso?", options: ["Em lado nenhum; a pessoa seguinte vai ver", "Em \"Vigiar\" na sua passagem", "Numa SMS a um amigo", "Só na sua cabeça"], answer: 1, why: "Os problemas de segurança e o que é preciso vigiar vão na passagem para que a pessoa seguinte aja." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Atualizações e pedir ajuda",
          minutes: 4,
          goal: "Enviar uma atualização curta e pedir ajuda cedo e com clareza.",
          text: [
            "Os chefes gostam de saber como vai o trabalho antes de terem de perguntar. Uma atualização de três linhas funciona: Feito (o que acabou), A seguir (o que vai fazer a seguir), Bloqueado (o que o impede de avançar e o que precisa).",
            "Peça ajuda cedo, não no último dia. Diga o que tentou, o que precisa e até quando: \"Tentei reiniciar o leitor de códigos e verificar o cabo. Continua sem ligar. A informática pode ver isto antes das 14h?\"",
            "A IA pode ajudar a encontrar as palavras quando uma mensagem é difícil, como pedir mais tempo ou contar ao chefe um erro. Seja honesto e breve."
          ],
          steps: ["Escreva Feito, A seguir, Bloqueado.", "Para cada bloqueio, diga o que tentou e o que precisa.", "Envie antes de lhe perguntarem.", "Peça ajuda cedo, com um prazo claro."],
          words: [["Atualização", "um relatório curto sobre como vai o trabalho."], ["Bloqueado", "sem conseguir continuar até alguma coisa ser resolvida ou alguém ajudar."]],
          slides: [
            { title: "Atualização de três linhas", bullets: ["Feito", "A seguir", "Bloqueado"] },
            { title: "Peça ajuda cedo", bullets: ["O que tentou", "O que precisa", "Até quando"] },
            { title: "Mensagens difíceis", bullets: ["Pedir mais tempo; contar um erro", "A IA ajuda a encontrar as palavras", "Seja honesto e breve"] }
          ],
          tryIt: "Escreva uma atualização Feito / A seguir / Bloqueado para esta semana (real ou de exemplo). Inclua um pedido de ajuda claro com o que tentou e um prazo.",
          youCanNow: "enviar atualizações claras e pedir ajuda cedo.",
          quickCheck: [
            { objective: "O3", q: "O que quer dizer \"Bloqueado\" numa atualização?", options: ["Não consegue continuar até alguma coisa ser resolvida", "Acabou a tarefa", "Está em pausa", "Bloqueou o email de um colega"], answer: 0, why: "Bloqueado diz ao seu chefe o que o impede de avançar, para que ele possa ajudar." },
            { objective: "O3", q: "Está parado numa tarefa há um dia e ela é para amanhã. O que faz?", options: ["Continua a tentar sozinho e não diz nada", "Espera até depois do prazo", "Pede ajuda já, dizendo o que tentou, o que precisa e até quando", "Salta a tarefa"], answer: 2, why: "Pedir cedo e com detalhes dá aos outros tempo para ajudar antes do prazo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Comunicar com clareza",
        questions: [
          { objective: "O1", q: "Onde fica o ponto principal numa mensagem de trabalho?", options: ["No fim", "No início", "Escondido no meio", "Em lado nenhum"], answer: 1, why: "Os leitores ocupados veem a primeira linha." },
          { objective: "O1", q: "Qual é o assunto mais claro?", options: ["\"Coisas\"", "\"Olá\"", "\"Pergunta\"", "\"Preciso de substituto: turno sáb 8-4\""], answer: 3, why: "Diz o assunto e o pedido." },
          { objective: "O2", q: "O que faz parte de uma passagem?", options: ["Os pendentes e o que vigiar", "A sua palavra-passe das redes sociais", "Mexericos", "Nada"], answer: 0, why: "A pessoa seguinte precisa da situação, dos riscos e dos próximos passos." },
          { objective: "O3", q: "Quais são as três linhas de uma atualização?", options: ["Sim, Não, Talvez", "Olá, Como está, Adeus", "Feito, A seguir, Bloqueado", "Começar, Parar, Pausa"], answer: 2, why: "Esse formato mostra o progresso e as necessidades." },
          { objective: "O3", q: "Quando deve pedir ajuda?", options: ["Nunca", "Só depois do prazo", "Cedo, com o que tentou e um prazo", "Só a adivinhar"], answer: 2, why: "Pedir cedo dá tempo para resolver os problemas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o trabalho certo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ordenar a lista de tarefas: urgente ou importante",
          minutes: 5,
          goal: "Ordenar as tarefas em quatro caixas e decidir o que fazer primeiro.",
          text: [
            "Quando tudo parece urgente, ordene. Desenhe quatro caixas: Urgente e importante (fazer já), Importante mas não urgente (marcar na agenda), Urgente mas não importante (passar a outra pessoa ou fazer depressa), Nenhum dos dois (largar ou mais tarde). A isto muitas vezes chama-se matriz de Eisenhower.",
            "As tarefas importantes ligam-se aos seus objetivos ou às principais funções do seu trabalho: segurança, clientes, prazos que o seu chefe marcou. As tarefas urgentes têm um prazo próximo ou alguém à espera.",
            "Pode colar a sua lista de tarefas (sem dados confidenciais) na IA e pedir-lhe que sugira as caixas. Depois decida você: você sabe o que o seu chefe espera. Quando não tiver a certeza, pergunte ao seu chefe o que vem primeiro."
          ],
          steps: ["Escreva todas as suas tarefas.", "Pergunte: é importante? É urgente?", "Ponha cada uma numa das quatro caixas.", "Faça a caixa 1, marque a caixa 2, passe ou faça depressa a caixa 3, largue a caixa 4.", "Quando não tiver a certeza, pergunte ao seu chefe."],
          words: [["Urgente", "precisa de atenção em breve, com um prazo próximo ou alguém à espera."], ["Importante", "ligado às suas funções principais ou aos seus objetivos."], ["Matriz de Eisenhower", "uma forma de ordenar tarefas em quatro caixas, por urgente e importante."]],
          slides: [
            { title: "Quatro caixas", bullets: ["Urgente + importante: fazer já", "Importante, não urgente: marcar na agenda", "Urgente, não importante: passar ou fazer depressa", "Nenhum dos dois: largar ou mais tarde"] },
            { title: "O que torna uma tarefa importante", bullets: ["Segurança e clientes", "Funções principais e prazos do chefe"] },
            { title: "A IA sugere, você decide", bullets: ["Cole a sua lista sem dados confidenciais", "Verifique você as caixas", "Na dúvida? Pergunte ao seu chefe"] }
          ],
          tryIt: "Escreva pelo menos dez tarefas para esta semana. Ordene-as nas quatro caixas (peça à IA uma primeira tentativa, se quiser) e escolha as três principais para amanhã.",
          youCanNow: "ordenar uma lista de tarefas por urgente e importante e escolher o que fazer primeiro.",
          quickCheck: [
            { objective: "O4", q: "O que torna uma tarefa importante?", options: ["Alguém pediu em voz alta", "Liga-se às suas funções principais, à segurança ou aos objetivos", "É o email mais recente", "É a mais fácil"], answer: 1, why: "As tarefas importantes ligam-se às suas funções principais, à segurança e aos objetivos." },
            { objective: "O4", q: "Uma tarefa não é urgente nem importante. O que faz com ela?", options: ["Faz primeiro", "Marca para esta manhã", "Pede a um colega para a fazer já", "Larga-a ou faz mais tarde"], answer: 3, why: "As tarefas da caixa 4 largam-se ou fazem-se mais tarde, para que o tempo vá para o que importa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear a semana com blocos de tempo",
          minutes: 5,
          goal: "Planear uma semana reservando tempo para o trabalho importante.",
          text: [
            "Uma lista de tarefas diz o quê; um calendário diz quando. Blocos de tempo quer dizer pôr as tarefas em horas marcadas no seu calendário, como \"terça-feira 9-10: acabar o relatório de inventário\".",
            "Marque primeiro as tarefas importantes mas não urgentes, porque são as que ficam para trás. Acrescente blocos curtos para email e mensagens em vez de os ver o dia todo. Deixe algum tempo livre para imprevistos.",
            "Peça à IA: \"Aqui estão os meus turnos e as minhas tarefas com o tempo de cada uma. Faça um plano com blocos de tempo para a próxima semana, com tempo de reserva.\" Depois ajuste-o à sua vida real: viagem para o trabalho, família, pausas."
          ],
          steps: ["Escreva as suas horas fixas: turnos, reuniões, família.", "Calcule quanto tempo leva cada tarefa.", "Marque primeiro as tarefas importantes.", "Acrescente blocos curtos para mensagens e tempo de reserva.", "Peça um rascunho à IA e ajuste-o."],
          words: [["Blocos de tempo", "pôr as tarefas em horas marcadas no seu calendário."], ["Tempo de reserva", "tempo livre deixado para imprevistos e atrasos."]],
          slides: [
            { title: "A lista diz o quê; o calendário diz quando", bullets: ["\"Terça-feira 9-10: acabar o relatório de inventário\""] },
            { title: "Como marcar blocos", bullets: ["Primeiro as tarefas importantes não urgentes", "Blocos curtos para email e mensagens", "Deixe tempo de reserva"] },
            { title: "A IA faz o rascunho da semana", bullets: ["Dê os turnos, as tarefas e o tempo de cada uma", "Ajuste à viagem, à família e às pausas"] }
          ],
          tryIt: "Faça um plano com blocos de tempo para a próxima semana, com os seus turnos, três tarefas importantes, dois blocos para mensagens e tempo de reserva. Use a IA para um primeiro rascunho, se quiser.",
          youCanNow: "planear uma semana com blocos de tempo para que o trabalho importante fique feito.",
          quickCheck: [
            { objective: "O5", q: "O que é o tempo de reserva?", options: ["Tempo para ver as redes sociais", "Tempo extra para reuniões", "Tempo livre no seu plano para imprevistos e atrasos", "Horas extraordinárias"], answer: 2, why: "O tempo de reserva impede que um imprevisto estrague o plano todo." },
            { objective: "O5", q: "O plano semanal da IA põe uma tarefa durante o seu turno de terça-feira. O que faz?", options: ["Muda-a para uma hora que caiba no seu horário real", "Segue o plano da IA na mesma", "Falta ao turno", "Apaga o plano"], answer: 0, why: "A IA faz o rascunho do plano, mas você ajusta-o à sua vida real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA como ajudante, não como substituto",
          minutes: 5,
          goal: "Usar a IA nas partes certas do seu trabalho e manter as suas decisões.",
          text: [
            "A IA ajuda mais com primeiros rascunhos, organizar notas, resumir e encontrar palavras para mensagens difíceis. Não conhece o seu local de trabalho, os seus colegas nem o que o seu chefe quis mesmo dizer, e pode estar errada.",
            "Bons hábitos: dê-lhe as suas notas, não o seu pensamento; peça um rascunho curto; verifique todos os factos; faça-o soar como você; siga as regras de IA do trabalho; deixe de fora informações confidenciais e pessoais.",
            "Registe uma coisa: o tempo poupado. Se uma ferramenta lhe poupa 20 minutos por dia em mensagens, é tempo para a parte humana do seu trabalho, que é onde você se destaca."
          ],
          steps: ["Use a IA para rascunhos, organizar e resumir.", "Verifique os factos e faça-o soar como você.", "Siga as regras de IA do trabalho.", "Anote o tempo que poupa cada semana."],
          words: [["Bom senso", "a sua capacidade de decidir bem usando o que sabe."]],
          slides: [
            { title: "A IA é boa a", bullets: ["Primeiros rascunhos", "Organizar notas e resumir", "Palavras para mensagens difíceis"] },
            { title: "Bons hábitos", bullets: ["Verifique todos os factos", "Faça-o soar como você", "Siga as regras; deixe de fora os dados privados"] },
            { title: "Tempo poupado = tempo para pessoas", bullets: ["Registe os minutos poupados", "Use-os onde você se destaca"] }
          ],
          tryIt: "Tarefa final: monte o seu kit de uma semana: uma mensagem com o ponto principal primeiro, uma passagem, uma atualização Feito/A seguir/Bloqueado, uma lista de quatro caixas e uma semana com blocos de tempo. Use a IA para escrever pelo menos dois e verifique todos os factos.",
          youCanNow: "comunicar com clareza e gerir o seu tempo no trabalho com a IA como ajudante.",
          quickCheck: [
            { objective: "O6", q: "Em que parte do seu trabalho a IA é boa?", options: ["Decidir o que importa mais", "Acalmar um cliente zangado", "Saber o prazo verdadeiro do seu chefe", "Primeiros rascunhos e organizar notas"], answer: 3, why: "A IA ajuda com rascunhos e organização; as decisões e o trabalho com pessoas ficam com você." },
            { objective: "O6", q: "Quer que a IA arrume notas que têm o nome de um paciente. O que faz?", options: ["Cola-as em qualquer IA gratuita", "Usa só uma ferramenta aprovada, ou tira primeiro os dados privados", "Publica as notas na internet", "Envia-as por email a um amigo para as corrigir"], answer: 1, why: "As regras do trabalho vêm primeiro: só ferramentas aprovadas, e os dados confidenciais ficam de fora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o trabalho certo",
        questions: [
          { objective: "O4", q: "Uma tarefa é importante mas não urgente. O que faz?", options: ["Marca-a na agenda", "Larga-a", "Fá-la logo, sempre", "Dá-a a um cliente"], answer: 0, why: "Marcar na agenda protege o trabalho importante." },
          { objective: "O4", q: "Que tarefa é urgente e importante?", options: ["Mudar a imagem de fundo do computador", "Arrumar emails antigos", "Ler uma newsletter", "Um perigo de segurança no chão agora mesmo"], answer: 3, why: "Uma questão de segurança agora é urgente e importante." },
          { objective: "O5", q: "O que são blocos de tempo?", options: ["Bloquear colegas", "Pôr as tarefas em horas marcadas no seu calendário", "Desligar o telefone para sempre", "Um desporto"], answer: 1, why: "Marca quando faz cada tarefa." },
          { objective: "O5", q: "Porque deixar tempo de reserva?", options: ["Para imprevistos e atrasos", "Para dormir uma sesta", "Porque a IA diz", "Não serve para nada"], answer: 0, why: "Os imprevistos acontecem sempre." },
          { objective: "O6", q: "O rascunho da IA diz que a sua chefe quer o relatório na sexta-feira, mas ela disse quarta-feira. O que faz?", options: ["Envia as duas datas", "Confia na IA", "Corrige para quarta-feira", "Ignora"], answer: 2, why: "Você verifica os factos; a IA não sabe o que foi dito." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Comunicação e Produtividade no Trabalho",
    questions: [
      { objective: "O1", q: "Porque pôr o ponto principal primeiro?", options: ["É uma lei", "Pessoas ocupadas leem a primeira linha e passam os olhos pelo resto", "Deixa a mensagem mais longa", "Esconde o ponto"], answer: 1, why: "As primeiras linhas são lidas." },
      { objective: "O1", q: "Uma boa mensagem de trabalho inclui:", options: ["Mexericos", "Todos os detalhes que sabe", "A sua palavra-passe", "O que precisa e até quando"], answer: 3, why: "Um pedido claro com prazo faz as coisas andarem." },
      { objective: "O1", q: "Uma mensagem deve tratar de:", options: ["Tudo deste mês", "Dez assuntos", "Nenhum assunto", "Um assunto"], answer: 3, why: "Um só assunto mantém a mensagem clara." },
      { objective: "O2", q: "Qual é uma parte da passagem?", options: ["Comida preferida", "Vigiar", "Planos para o fim de semana", "Lista de palavras-passe"], answer: 1, why: "Vigiar lista os riscos." },
      { objective: "O2", q: "As passagens são importantes porque:", options: ["São opcionais", "São divertidas", "Muitos problemas acontecem quando o trabalho muda de mãos", "Substituem a formação"], answer: 2, why: "As falhas nas passagens causam erros." },
      { objective: "O2", q: "Ao usar a IA para organizar notas de passagem, deixe de fora:", options: ["Dados privados de clientes ou pacientes, a menos que use um sistema aprovado", "Os pendentes", "Os próximos passos", "As funções dos contactos"], answer: 0, why: "Os dados privados ficam protegidos." },
      { objective: "O3", q: "\"Bloqueado\" numa atualização quer dizer:", options: ["Está em pausa", "Acabou", "Não consegue continuar até alguma coisa ser resolvida", "A sua conta está bloqueada"], answer: 2, why: "Mostra o que você precisa." },
      { objective: "O3", q: "Um bom pedido de ajuda diz:", options: ["O que tentou, o que precisa e até quando", "Só \"Socorro!\"", "Nada", "De quem é a culpa"], answer: 0, why: "Pedidos claros recebem ajuda mais depressa." },
      { objective: "O3", q: "O melhor momento para enviar uma atualização é:", options: ["Nunca", "Antes de o seu chefe ter de perguntar", "Só depois de haver problemas", "Uma vez por ano"], answer: 1, why: "Atualizar sem lhe pedirem cria confiança." },
      { objective: "O4", q: "As tarefas da caixa 4 (não urgentes, não importantes) devem ser:", options: ["Feitas a cada hora", "Feitas primeiro", "Dadas ao diretor-geral", "Largadas ou feitas mais tarde"], answer: 3, why: "Acrescentam pouco valor." },
      { objective: "O4", q: "As tarefas importantes ligam-se:", options: ["Às suas funções principais, à segurança e aos objetivos", "Aos seus programas preferidos", "A emails ao acaso", "A nada"], answer: 0, why: "Importante quer dizer que conta para a sua função." },
      { objective: "O4", q: "Se não tiver a certeza de que tarefa vem primeiro, deve:", options: ["Deixar a IA decidir sozinha", "Adivinhar", "Não fazer nada", "Perguntar ao seu chefe"], answer: 3, why: "O seu chefe conhece as prioridades." },
      { objective: "O5", q: "Que tarefas deve marcar primeiro no calendário?", options: ["Redes sociais", "As menos importantes", "As importantes mas não urgentes", "Nenhuma"], answer: 2, why: "São as que ficam para trás." },
      { objective: "O5", q: "Em vez de ver o email o dia todo, pode:", options: ["Nunca ler o email", "Usar blocos curtos para mensagens", "Ver a cada minuto", "Reencaminhar tudo"], answer: 1, why: "Os blocos protegem o tempo de concentração." },
      { objective: "O5", q: "Depois de a IA fazer o rascunho do seu plano semanal, você:", options: ["Ignora-o", "Segue-o à risca", "Apaga o calendário", "Ajusta-o à sua vida real"], answer: 3, why: "Você conhece a sua viagem, a sua família e as suas pausas." },
      { objective: "O6", q: "A IA é boa a:", options: ["Conhecer os seus colegas", "Saber o que o seu chefe quis dizer", "Primeiros rascunhos e organizar notas", "Estar sempre certa"], answer: 2, why: "Escrever rascunhos e organizar são os seus pontos fortes." },
      { objective: "O6", q: "Antes de enviar um rascunho da IA, sempre:", options: ["Verifique todos os factos", "Acrescente mais texto da IA", "Tire o seu nome", "Envie sem ler"], answer: 0, why: "A IA pode estar errada." },
      { objective: "O6", q: "O tempo poupado com a IA usa-se melhor em:", options: ["Não fazer nada", "A parte humana do seu trabalho", "Mais tempo de ecrã", "Nada"], answer: 1, why: "O trabalho humano é onde você se destaca." },
      { objective: "O6", q: "O que segue as regras de IA do trabalho?", options: ["Usar qualquer aplicação", "Usar só ferramentas aprovadas e deixar de fora os dados confidenciais", "Colar dados de clientes", "Partilhar palavras-passe"], answer: 1, why: "As regras protegem você e o seu empregador." },
      { objective: "O3", q: "A linha \"A seguir\" numa atualização diz ao seu chefe:", options: ["O que vai fazer a seguir", "Os seus planos para o almoço", "As suas próximas férias", "Nada"], answer: 0, why: "Mostra o seu plano." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 7, 9, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Mensagem com o ponto principal primeiro", objective: "O1", notYet: "O ponto principal ou o pedido está escondido ou falta.", meets: "O ponto principal vem primeiro, com um pedido claro e um prazo, sobre um só assunto.", exceeds: "Tem um assunto claro, e a mensagem tem menos de 100 palavras." },
      { name: "Passagem completa", objective: "O2", notYet: "Falta uma ou mais das cinco partes.", meets: "As cinco partes, incluindo os pendentes e o que vigiar.", exceeds: "Cada pendente diz quem fica responsável a seguir." },
      { name: "Atualização", objective: "O3", notYet: "Falta Feito, A seguir ou Bloqueado.", meets: "Uma atualização Feito / A seguir / Bloqueado com um pedido de ajuda claro.", exceeds: "O pedido de ajuda diz o que foi tentado e até quando é preciso." },
      { name: "Lista de quatro caixas e blocos de tempo", objective: "O5", notYet: "As tarefas não estão ordenadas, ou a semana não tem blocos de tempo.", meets: "Dez tarefas nas quatro caixas e uma semana com turnos, três tarefas importantes, blocos para mensagens e tempo de reserva.", exceeds: "As tarefas importantes mas não urgentes são marcadas primeiro." },
      { name: "IA verificada", objective: "O6", notYet: "Os rascunhos da IA foram enviados sem verificar, ou foram usados dados privados.", meets: "A IA ajudou a escrever pelo menos dois itens, e todos os factos foram verificados.", exceeds: "O aluno anota um facto que corrigiu." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem usar mensagens com o ponto principal primeiro e atualizações no trabalho 30 dias depois (inquérito de seguimento)",
      "Supervisores que dizem haver menos passagens falhadas ou prazos perdidos",
      "Alunos que começam outro curso de trabalho da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador",
      "Um assistente de IA gratuito: ChatGPT, Microsoft Copilot ou Google Gemini, ou a ferramenta que o local de trabalho aprova",
      "O calendário do telefone ou uma agenda de papel",
      "Mensagens, notas de passagem e listas de tarefas de exemplo, sem dados privados",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Use exemplos das áreas dos próprios alunos (comércio, armazém, apoio na saúde, escritório) para que os formatos pareçam reais.",
      "Pratiquem as passagens aos pares: um faz a passagem, o outro verifica as cinco partes.",
      "Lembre aos alunos da saúde e do atendimento ao cliente que os dados de pacientes e clientes ficam fora das ferramentas de IA não aprovadas.",
      "Quem trabalha por turnos pode não controlar o seu horário; ajude-o a marcar blocos no tempo que controla.",
      "Avalie o kit de uma semana com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
