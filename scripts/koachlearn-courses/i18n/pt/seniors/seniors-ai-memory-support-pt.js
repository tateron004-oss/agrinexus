"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-memory-support.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Not medical advice: the course says worrying memory changes are for a doctor, and points to MedlinePlus (checked 27 October 2026).

module.exports = {
  id: "seniors-ai-memory-support-pt",
  lang: "pt",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "IA para Ajudar a Memória",
  skills: "Guardar lembretes e notas por voz, Usar fotografias para ajudar a memória, Fazer listas de verificação com IA, Resumir consultas e chamadas, Criar uma rotina diária para a memória",
  outcome: "montar no seu telefone um conjunto simples de ferramentas para a memória: lembretes por voz, uma lista de notas, fotografias para ajudar a memória e uma lista de verificação feita pela IA, e usá-lo numa rotina diária.",
  about: [
    "Todos nós esquecemos coisas: onde deixámos o carro, se o fogão está desligado, o que o médico disse. Este curso é para pessoas mais velhas, e para os familiares que as ajudam, que querem ferramentas simples para se lembrarem mais facilmente das coisas do dia a dia.",
    "Você vai usar o assistente de voz do telefone, as notas, a câmara e um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, para guardar lembretes, manter listas, fazer listas de verificação e resumir o que foi dito nas consultas.",
    "Estas ferramentas ajudam a memória; não diagnosticam nem tratam nada. Se você ou a sua família estão preocupados com mudanças na memória, fale com o seu médico. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Monte o seu conjunto de ferramentas para a memória: crie dois lembretes por voz que se repetem, comece uma nota \"Coisas para lembrar\", tire uma fotografia para ajudar a memória (por exemplo, onde estacionou ou uma etiqueta de que precisa), peça à IA uma lista de verificação \"antes de sair de casa\" e use tudo isto durante um dia inteiro.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas que notam esquecimentos do dia a dia, como consultas, nomes, onde estacionaram ou o que o médico disse, e querem ferramentas simples para se manterem organizadas e independentes. Algumas têm a ajuda de familiares cuidadores.",
    startingPoint: "Têm um smartphone e sabem fazer chamadas e enviar SMS. Muitos usam notas em papel ou só a memória e nunca usaram lembretes por voz, notas fixadas, álbuns de fotografias ou listas de verificação feitas pela IA.",
    gap: "Esquecer consultas, medicamentos ou o que foi dito numa consulta causa stress e pode afetar a saúde e a segurança. Um conjunto simples de ferramentas no telefone, usado todos os dias, ajuda as pessoas mais velhas a lembrarem-se de mais coisas e a manterem-se independentes, com os números privados fora das notas e das fotografias e as mudanças preocupantes na memória levadas a um médico.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um smartphone com assistente de voz, Notas ou Google Keep, e uma câmara",
      "Tempo: cerca de 5 minutos por lição, com calma, e depois um dia inteiro de prática",
      "Saúde: o curso ajuda a memória do dia a dia; mudanças preocupantes vão para um médico",
      "Privacidade: nenhuma palavra-passe, número do banco ou da Segurança Social em notas, fotografias ou pedidos à IA"
    ],
    prerequisites: "Nenhum. O curso \"IA para o Dia a Dia\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "No momento em que se lembra de algo para fazer", action: "guardar um lembrete por voz que diga o quê e quando, usando \"todas as\" ou \"todos os\" para os que se repetem", standard: "e marcá-lo como feito quando terminar" },
    { id: "O2", condition: "Usando as Notas ou o Google Keep", action: "manter uma nota fixada \"Coisas para lembrar\" e acrescentar coisas a escrever ou por voz", standard: "sem palavras-passe nem números privados nela" },
    { id: "O3", condition: "Com algo de que precisa de se lembrar, como onde estacionou", action: "tirar uma fotografia para ajudar a memória e voltar a encontrá-la nas fotografias recentes ou num álbum", standard: "sem fotografar cartões ou documentos privados" },
    { id: "O4", condition: "Com uma tarefa que faz muitas vezes", action: "pedir à IA uma lista de verificação curta, ajustá-la à sua vida e colocá-la onde a vai ver", standard: "com no máximo cerca de oito pontos simples" },
    { id: "O5", condition: "Depois de uma consulta ou de uma chamada importante", action: "transformar as suas notas num resumo curto e numa lista de tarefas com a ajuda da IA", standard: "sem os dados privados e confirmando com o consultório o que não estiver claro" },
    { id: "O6", condition: "Todos os dias", action: "seguir uma rotina simples para a memória, com verificações de manhã e à noite", standard: "e falar com o seu médico sobre mudanças na memória que o preocupem" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Guardar aquilo de que precisa de se lembrar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lembretes por voz no momento em que se lembra",
          minutes: 5,
          goal: "Guardar um lembrete por voz antes de se esquecer.",
          text: [
            "O melhor momento para guardar um lembrete é o momento em que se lembra dele. O assistente de voz do seu telefone (a Siri no iPhone, o Google Assistant ou o Gemini no Android) torna isto rápido: não precisa de escrever nem de procurar uma caneta.",
            "Diga: \"Lembra-me de ligar para a farmácia amanhã às 10 da manhã.\" \"Lembra-me de regar as plantas todas as segundas-feiras.\" \"Lembra-me de levar o guarda-chuva quando sair de casa\" funciona em alguns telefones, que podem lembrar você pelo lugar onde está.",
            "Quando o lembrete aparecer, faça a tarefa ou toque para o adiar. Marque-o como feito quando terminar, para a sua lista ficar arrumada."
          ],
          steps: ["Chame o seu assistente de voz.", "Diga \"Lembra-me de...\" com o quê e quando.", "Use \"todas as\" ou \"todos os\" para lembretes que se repetem.", "Quando aparecer, faça a tarefa ou adie-a.", "Marque-o como feito."],
          words: [["Adiar", "atrasar um lembrete para ele voltar um pouco mais tarde."], ["Lembrete que se repete", "um lembrete que volta com um horário fixo, por exemplo todas as segundas-feiras."]],
          slides: [
            { title: "Guarde logo", bullets: ["No momento em que se lembra", "Sem escrever, sem caneta"] },
            { title: "Diga em voz alta", bullets: ["\"Lembra-me de ligar para a farmácia às 10 da manhã.\"", "\"Lembra-me de regar as plantas todas as segundas-feiras.\""] },
            { title: "Quando aparecer", bullets: ["Faça a tarefa ou adie-a", "Marque como feito"] }
          ],
          tryIt: "Crie dois lembretes por voz: um para amanhã e um que se repete todas as semanas.",
          youCanNow: "guardar por voz lembretes de uma só vez e lembretes que se repetem.",
          quickCheck: [
            { objective: "O1", q: "O que faz adiar um lembrete?", options: ["Apaga-o", "Atrasa-o um pouco para ele voltar", "Marca-o como feito", "Envia-o para a família"], answer: 1, why: "Adiar atrasa o lembrete um pouco; marque-o como feito quando terminar." },
            { objective: "O1", q: "Enquanto cozinha, lembra-se de que tem de ligar para o banco amanhã. O que faz?", options: ["Espera lembrar-se", "Escreve num guardanapo mais tarde", "Diz ao telefone: \"Lembra-me de ligar para o banco amanhã às 10 da manhã.\"", "Liga para o banco agora, à noite"], answer: 2, why: "Guarde um lembrete no momento em que se lembra, por voz, com o quê e quando." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uma lista de notas para as coisas a lembrar",
          minutes: 5,
          goal: "Manter uma nota \"Coisas para lembrar\" no telefone e acrescentar coisas por voz.",
          text: [
            "Algumas coisas não têm hora marcada: o nome do vizinho novo, o livro que um amigo recomendou, onde pôs a chave de reserva. Estas coisas ficam numa nota.",
            "Abra a aplicação Notas (ou o Google Keep em muitos telefones Android) e crie uma nota chamada \"Coisas para lembrar\". Fixe-a no topo, se a aplicação deixar. Pode acrescentar coisas a escrever ou tocando no microfone do teclado e falando.",
            "Mantenha a nota simples: uma linha por coisa, a mais nova no topo. Nunca guarde palavras-passe, números do banco ou números da Segurança Social numa nota simples."
          ],
          steps: ["Abra as Notas ou o Google Keep.", "Crie uma nota chamada \"Coisas para lembrar\".", "Fixe-a no topo, se puder.", "Acrescente coisas a escrever ou com o microfone do teclado.", "Deixe os números privados de fora."],
          words: [["Aplicação de notas", "uma aplicação para escrever e guardar notas no seu telefone."], ["Fixar", "manter uma coisa no topo de uma lista para ser fácil de encontrar."]],
          slides: [
            { title: "Não tem hora marcada?", bullets: ["O nome de um vizinho", "Um livro para ler", "Onde está a chave de reserva"] },
            { title: "Crie a sua nota", bullets: ["Notas ou Google Keep", "Chame-lhe \"Coisas para lembrar\"", "Fixe-a no topo"] },
            { title: "Simples e segura", bullets: ["Uma linha por coisa", "Use o microfone do teclado", "Sem palavras-passe nem números do banco"] }
          ],
          tryIt: "Crie uma nota \"Coisas para lembrar\" e acrescente três coisas, pelo menos uma falando com o microfone do teclado.",
          youCanNow: "manter uma lista de notas com as coisas de que se quer lembrar e acrescentar coisas por voz.",
          quickCheck: [
            { objective: "O2", q: "O que faz fixar uma nota?", options: ["Mantém-na no topo das suas notas", "Tranca-a com uma palavra-passe", "Apaga-a depois de um dia", "Partilha-a com a família"], answer: 0, why: "Fixar mantém a sua nota \"Coisas para lembrar\" no topo, onde a encontra." },
            { objective: "O2", q: "Um amigo recomenda-lhe um livro quando está fora de casa. Onde o guarda?", options: ["Num lembrete com hora", "Na aplicação do banco", "Em lado nenhum; vai lembrar-se", "Na sua nota \"Coisas para lembrar\""], answer: 3, why: "As coisas sem hora marcada, como o nome de um livro, ficam na sua nota." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fotografias para ajudar a memória",
          minutes: 4,
          goal: "Usar a câmara para se lembrar de onde estão as coisas e do que dizem.",
          text: [
            "Uma fotografia rápida pode lembrar-se das coisas por você. Tire uma fotografia da placa do lugar de estacionamento ou do número do piso, do interior do frigorífico antes de ir às compras, da etiqueta de uma lâmpada que precisa de trocar, ou dos botões do fogão desligados antes de sair.",
            "Para as encontrar depois, crie um álbum chamado \"Ajudas para a memória\" na aplicação de fotografias, ou veja só as suas fotografias mais recentes. Apague-as quando já não precisar delas.",
            "Não fotografe documentos privados, como cartões do banco ou o seu cartão da Segurança Social, para isto; se perder o telefone, essas fotografias podem ser mal usadas."
          ],
          steps: ["Tire uma fotografia rápida da coisa de que se quer lembrar.", "Veja as fotografias recentes ou mantenha um álbum \"Ajudas para a memória\".", "Apague as fotografias de memória quando já não precisar.", "Não fotografe cartões nem documentos privados."],
          words: [["Ajuda para a memória", "qualquer coisa que o ajuda a lembrar-se, como uma nota, um alarme ou uma fotografia."]],
          slides: [
            { title: "Deixe a câmara lembrar-se", bullets: ["O lugar de estacionamento", "O interior do frigorífico", "Uma etiqueta de que precisa", "Os botões do fogão desligados"] },
            { title: "Encontre-as depois", bullets: ["Veja as fotografias recentes", "Ou um álbum \"Ajudas para a memória\"", "Apague quando já não precisar"] },
            { title: "Com segurança", bullets: ["Sem fotografias de cartões do banco ou de identificação"] }
          ],
          tryIt: "Tire hoje uma fotografia para ajudar a memória, por exemplo do interior do frigorífico ou de onde estacionou. Volte a encontrá-la nas suas fotografias uma hora depois.",
          youCanNow: "usar fotografias para se lembrar de onde estão as coisas e do que dizem.",
          quickCheck: [
            { objective: "O3", q: "Porque não deve guardar uma fotografia do cartão do banco para ajudar a memória?", options: ["As fotografias de cartões ficam desfocadas", "Se perder o telefone, a fotografia pode ser mal usada", "Ocupa espaço demais", "O banco não deixa tirar fotografias"], answer: 1, why: "As fotografias de cartões privados podem ser mal usadas se perder o telefone." },
            { objective: "O3", q: "Estaciona no piso 3 de um parque de estacionamento grande. Qual é uma forma rápida de se lembrar?", options: ["Tirar uma fotografia da placa do piso", "Escrevê-lo numa SMS a um desconhecido", "Contar os carros", "Deixar o carro aberto"], answer: 0, why: "Uma fotografia rápida da placa do estacionamento lembra-se por você." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Guardar aquilo de que precisa de se lembrar",
        questions: [
          { objective: "O1", q: "Qual é o melhor momento para guardar um lembrete?", options: ["Só aos domingos", "Na próxima semana", "No momento em que se lembra dele", "Nunca"], answer: 2, why: "Guardar logo evita o esquecimento." },
          { objective: "O1", q: "Que pedido por voz cria um lembrete semanal?", options: ["\"Lembra-me de regar as plantas todas as segundas-feiras.\"", "\"Plantas.\"", "\"Segunda-feira.\"", "\"Regar.\""], answer: 0, why: "\"Todas as\" faz o lembrete repetir-se." },
          { objective: "O2", q: "Onde deve ficar o nome de um vizinho novo?", options: ["Numa SMS para desconhecidos", "Num campo de palavra-passe", "Em lado nenhum", "Na sua nota \"Coisas para lembrar\""], answer: 3, why: "As notas guardam as coisas sem hora marcada." },
          { objective: "O2", q: "O que NUNCA deve ficar numa nota simples?", options: ["O título de um livro", "Palavras-passe e números do banco", "O nome de um vizinho", "Uma receita"], answer: 1, why: "As notas simples não são seguras para números privados." },
          { objective: "O3", q: "Qual é uma boa fotografia para ajudar a memória?", options: ["O seu cartão do banco", "A placa do piso do estacionamento", "O seu cartão da Segurança Social", "A sua palavra-passe"], answer: 1, why: "Os cartões privados não devem ser fotografados para lembretes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Rotinas e ajudantes de IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Listas de verificação feitas com IA",
          minutes: 5,
          goal: "Pedir à IA uma lista de verificação curta para uma tarefa que faz muitas vezes.",
          text: [
            "As listas de verificação ajudam toda a gente, dos pilotos aos médicos. Um assistente de IA pode fazer uma para qualquer tarefa de rotina: sair de casa, preparar uma viagem ou a noite antes de uma consulta.",
            "Peça: \"Faça-me uma lista de verificação curta para sair de casa: no máximo oito pontos, com palavras simples.\" Depois ajuste-a à sua casa: \"Acrescente: verificar a porta das traseiras. Tire: dar comida ao gato.\"",
            "Imprima-a e cole-a perto da porta, ou guarde-a nas suas Notas. Uma lista de verificação só ajuda se estiver onde a vai ver no momento certo."
          ],
          steps: ["Escolha uma tarefa que faz muitas vezes.", "Peça à IA uma lista de verificação curta com palavras simples.", "Acrescente ou tire pontos para servir à sua vida.", "Coloque-a onde a vai ver no momento certo."],
          words: [["Lista de verificação", "uma lista de passos que vai marcando um a um."]],
          slides: [
            { title: "As listas ajudam toda a gente", bullets: ["Sair de casa", "Preparar uma viagem", "A noite antes de uma consulta"] },
            { title: "Peça à IA", bullets: ["\"Uma lista curta, no máximo oito pontos\"", "Depois acrescente ou tire pontos"] },
            { title: "Coloque-a no lugar certo", bullets: ["Cole-a perto da porta", "Ou guarde-a nas Notas"] }
          ],
          tryIt: "Peça a um assistente de IA uma lista de verificação \"antes de sair de casa\" com no máximo oito pontos. Mude-a para servir à sua casa, e imprima-a ou guarde-a.",
          youCanNow: "fazer uma lista de verificação pessoal com a IA e colocá-la onde ajuda.",
          quickCheck: [
            { objective: "O4", q: "Quando é que uma lista de verificação ajuda mais?", options: ["Quando está guardada onde nunca olha", "Quando é muito comprida", "Quando está onde a vai ver no momento certo", "Quando só a IA a consegue ler"], answer: 2, why: "Uma lista de verificação só ajuda se a vir no momento certo, por exemplo perto da porta." },
            { objective: "O4", q: "A lista da IA diz \"dar comida ao gato\", mas você não tem gato. O que faz?", options: ["Arranja um gato", "Pede uma lista nova todos os dias", "Ignora a lista toda", "Tira esse ponto e acrescenta os de que precisa"], answer: 3, why: "Ajuste a lista de verificação para servir à sua casa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lembrar-se do que foi dito nas consultas",
          minutes: 5,
          goal: "Guardar os pontos principais de uma consulta ou chamada e transformá-los num resumo claro.",
          text: [
            "É fácil esquecer o que o médico, o advogado ou o técnico de reparações disse. Leve uma lista escrita de perguntas e escreva as respostas, ou peça a um familiar para ir consigo e tomar notas.",
            "Depois, escreva as suas notas rápidas num assistente de IA, sem nomes, datas de nascimento nem números de conta, e peça: \"Transforme estas notas num resumo curto com uma lista das coisas que tenho de fazer.\" Guarde o resumo nas Notas.",
            "Se alguma coisa não estiver clara, ligue para o consultório para confirmar. Muitos consultórios médicos também colocam um resumo da consulta no seu portal do paciente. Algumas pessoas perguntam se podem gravar a consulta no telefone; peça sempre autorização primeiro."
          ],
          steps: ["Leve uma lista de perguntas e escreva as respostas.", "Leve um familiar, se puder.", "Escreva as notas rápidas na IA sem dados privados.", "Peça um resumo e uma lista de tarefas.", "Confirme com o consultório o que não estiver claro."],
          words: [["Resumo", "uma versão curta dos pontos principais."], ["Portal do paciente", "um site ou uma aplicação onde o consultório do seu médico partilha as notas das consultas e os resultados."]],
          slides: [
            { title: "Guarde na hora", bullets: ["Leve perguntas, escreva as respostas", "Leve um familiar"] },
            { title: "Deixe a IA arrumar", bullets: ["Escreva as notas sem dados privados", "Peça um resumo e uma lista de tarefas", "Guarde-o nas Notas"] },
            { title: "Confirme", bullets: ["Ligue para o consultório se não estiver claro", "Veja o portal do paciente", "Peça autorização antes de gravar alguém"] }
          ],
          tryIt: "Escreva três notas rápidas de uma chamada ou consulta recente (sem nomes nem números). Peça a um assistente de IA para as transformar num resumo curto com uma lista de tarefas, e guarde-o.",
          youCanNow: "guardar e resumir o que foi dito numa consulta ou chamada.",
          quickCheck: [
            { objective: "O5", q: "O que é um portal do paciente?", options: ["A porta de um hospital", "Um site ou uma aplicação onde o consultório do seu médico pode partilhar as notas das consultas", "Uma farmácia", "Um assistente de IA"], answer: 1, why: "Muitos consultórios médicos colocam um resumo da consulta no portal do paciente." },
            { objective: "O5", q: "Quer gravar no telefone o que o médico diz. O que faz primeiro?", options: ["Pede autorização", "Esconde o telefone", "Grava sem dizer nada", "Publica a gravação na internet"], answer: 0, why: "Peça sempre autorização antes de gravar uma consulta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Uma rotina diária para a memória",
          minutes: 5,
          goal: "Juntar as suas ferramentas para a memória numa rotina diária simples.",
          text: [
            "As ferramentas funcionam melhor como hábito. Uma rotina diária simples: de manhã, veja os lembretes e a agenda do dia. Durante o dia, guarde lembretes e notas no momento em que se lembra deles. Antes de dormir, veja os lembretes de amanhã e a sua nota \"Coisas para lembrar\".",
            "Guarde as coisas nos mesmos lugares todos os dias: as chaves, os óculos e o telefone numa taça perto da porta. Um localizador nas chaves (como o Apple AirTag ou um Tile) pode ajudá-lo a encontrá-las com o telefone.",
            "Seja gentil consigo. Esquecer algumas coisas é normal. Se você ou a sua família notarem mudanças na memória que os preocupem, como perder-se em lugares conhecidos ou ter dificuldade nas tarefas do dia a dia, fale com o seu médico. O MedlinePlus (medlineplus.gov) tem informação de confiança sobre a memória."
          ],
          steps: ["De manhã: veja os lembretes e a agenda.", "Durante o dia: guarde logo os lembretes e as notas.", "À noite: veja o dia de amanhã e a sua nota.", "Guarde as chaves, os óculos e o telefone num só lugar.", "Fale com o seu médico sobre mudanças preocupantes."],
          words: [["Localizador", "um pequeno aparelho nas chaves ou numa bolsa que o seu telefone consegue encontrar."]],
          slides: [
            { title: "Uma rotina diária simples", bullets: ["De manhã: veja os lembretes e a agenda", "Durante o dia: guarde logo", "À noite: veja o dia de amanhã"] },
            { title: "O mesmo lugar todos os dias", bullets: ["Chaves, óculos e telefone numa taça", "Um localizador ajuda a encontrar as chaves"] },
            { title: "Seja gentil consigo", bullets: ["Esquecer algumas coisas é normal", "Preocupado? Fale com o seu médico", "O MedlinePlus tem informação de confiança"] }
          ],
          sources: [{ name: "MedlinePlus (Biblioteca Nacional de Medicina dos EUA)", url: "https://medlineplus.gov/" }],
          tryIt: "Tarefa final: monte o seu conjunto de ferramentas para a memória (dois lembretes por voz que se repetem, uma nota \"Coisas para lembrar\", uma fotografia para ajudar a memória e uma lista de verificação \"antes de sair de casa\" feita pela IA) e use tudo durante um dia inteiro, com a verificação da manhã e da noite.",
          youCanNow: "usar lembretes, notas, fotografias, listas de verificação e resumos da IA numa rotina diária que ajuda a sua memória.",
          quickCheck: [
            { objective: "O6", q: "Qual é um bom hábito de memória à noite?", options: ["Apagar todos os lembretes", "Desligar o telefone durante uma semana", "Ver os lembretes de amanhã e a sua nota \"Coisas para lembrar\"", "Escrever uma lista de verificação nova todas as noites"], answer: 2, why: "Antes de dormir, veja os lembretes de amanhã e a sua nota." },
            { objective: "O6", q: "Está sempre a perder os óculos em casa. Que hábito simples ajuda?", options: ["Comprar óculos novos todas as semanas", "Guardar as chaves, os óculos e o telefone numa taça perto da porta", "Deixar de usar óculos", "Perguntar à IA onde estão"], answer: 1, why: "Guardar as coisas no mesmo lugar todos os dias faz com que saiba onde estão." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Rotinas e ajudantes de IA",
        questions: [
          { objective: "O4", q: "Onde deve ficar uma lista de verificação \"para sair de casa\"?", options: ["Em lado nenhum", "Numa gaveta", "Na mala do carro", "Perto da porta, onde a vai ver"], answer: 3, why: "As listas de verificação ajudam quando as vê no momento certo." },
          { objective: "O5", q: "Antes de escrever na IA as notas de uma consulta, tire:", options: ["Nomes, datas de nascimento e números de conta", "As tarefas a fazer", "A palavra \"médico\"", "Nada"], answer: 0, why: "Os dados privados ficam fora da IA." },
          { objective: "O5", q: "Antes de gravar uma conversa numa consulta, deve:", options: ["Gravar às escondidas", "Esconder o telefone", "Pedir autorização", "Publicá-la na internet"], answer: 2, why: "Peça sempre antes de gravar alguém." },
          { objective: "O6", q: "Um bom hábito à noite é:", options: ["Partilhar as suas palavras-passe", "Apagar todos os lembretes", "Desligar o telefone durante uma semana", "Ver os lembretes de amanhã e a sua nota"], answer: 3, why: "Prepara você para o dia seguinte." },
          { objective: "O6", q: "Nota que se perdeu num lugar conhecido. O que deve fazer?", options: ["Ignorar", "Pedir um diagnóstico à IA", "Falar com o seu médico", "Comprar um suplemento na internet"], answer: 2, why: "As mudanças preocupantes na memória devem ser vistas por um médico." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Ajudar a Memória",
    questions: [
      { objective: "O1", q: "Porque guardar um lembrete logo?", options: ["Poupa bateria", "Para não se esquecer dele", "É obrigatório", "Custa menos"], answer: 1, why: "O momento passa depressa." },
      { objective: "O1", q: "\"Adiar\" quer dizer:", options: ["Atrasar o lembrete um pouco", "Apagá-lo", "Partilhá-lo", "Imprimi-lo"], answer: 0, why: "Adiar faz o lembrete voltar mais tarde." },
      { objective: "O1", q: "Que palavras fazem um lembrete repetir-se?", options: ["\"todas as\"", "\"talvez\"", "\"uma vez\"", "\"nunca\""], answer: 0, why: "\"Todas as segundas-feiras\" repete-se todas as semanas." },
      { objective: "O1", q: "Quando termina a tarefa de um lembrete, deve:", options: ["Deixá-lo para sempre", "Marcá-lo como feito", "Criá-lo outra vez", "Apagar a aplicação"], answer: 1, why: "Marcar como feito mantém a sua lista arrumada." },
      { objective: "O2", q: "Uma lista de notas é melhor para:", options: ["Números do banco", "Palavras-passe", "Coisas sem hora marcada", "Números da Segurança Social"], answer: 2, why: "As notas guardam nomes, ideias e lugares." },
      { objective: "O2", q: "Fixar uma nota:", options: ["Tranca o seu telefone", "Apaga-a", "Partilha-a com todos", "Mantém-na no topo"], answer: 3, why: "As notas fixadas são fáceis de encontrar." },
      { objective: "O2", q: "Para acrescentar algo a uma nota sem escrever, use:", options: ["O botão do volume", "A câmara", "O microfone do teclado", "A lanterna"], answer: 2, why: "O microfone escreve o que você diz." },
      { objective: "O3", q: "Uma boa fotografia para ajudar a memória é:", options: ["O interior do frigorífico antes das compras", "O seu cartão do banco", "A página do seu passaporte", "O seu PIN"], answer: 0, why: "Os documentos privados não devem ser fotografados para lembretes." },
      { objective: "O3", q: "Quando já não precisa das fotografias de memória:", options: ["Envie-as por email a desconhecidos", "Publique-as", "Imprima-as todas", "Apague-as"], answer: 3, why: "Apagar mantém as fotografias arrumadas e privadas." },
      { objective: "O4", q: "Uma lista de verificação é:", options: ["Um extrato bancário", "Uma lista de passos que vai marcando", "Uma palavra-passe", "Um telefone"], answer: 1, why: "As listas de verificação guiam as rotinas." },
      { objective: "O4", q: "Um bom pedido de lista de verificação à IA é:", options: ["\"lista\"", "\"Uma lista de verificação curta para sair de casa, no máximo oito pontos, palavras simples.\"", "\"coisas\"", "\"ajuda\""], answer: 1, why: "Diz a tarefa, o tamanho e o estilo." },
      { objective: "O4", q: "Depois de a IA fazer uma lista de verificação, deve:", options: ["Partilhar a sua palavra-passe", "Usá-la sem mudar nada, aconteça o que acontecer", "Apagá-la", "Ajustá-la à sua casa"], answer: 3, why: "Cada casa é diferente." },
      { objective: "O5", q: "Numa consulta médica, um familiar pode ajudar a:", options: ["Tomar notas", "Responder por você sem perguntar", "Partilhar as suas palavras-passe", "Gravar às escondidas"], answer: 0, why: "Uma segunda pessoa a ouvir apanha mais coisas." },
      { objective: "O5", q: "A IA pode transformar notas rápidas em:", options: ["Uma receita médica", "Um diagnóstico", "Um resumo curto com uma lista de tarefas", "Uma decisão de um tribunal"], answer: 2, why: "Resumir é um ponto forte; diagnosticar não é." },
      { objective: "O5", q: "Um portal do paciente é:", options: ["Um banco", "A porta de um hospital", "Uma paragem de autocarro", "Um site ou uma aplicação onde o seu médico partilha as notas das consultas"], answer: 3, why: "Os portais partilham resumos das consultas e resultados." },
      { objective: "O5", q: "Se um resumo não estiver claro, deve:", options: ["Ignorá-lo", "Adivinhar", "Ligar para o consultório para confirmar", "Perguntar a um desconhecido na internet"], answer: 2, why: "O consultório é a fonte de confiança." },
      { objective: "O6", q: "A verificação da rotina da manhã inclui:", options: ["Mudar as palavras-passe", "Os lembretes e a agenda do dia", "Apagar as notas", "Comprar um telefone novo"], answer: 1, why: "Prepara o seu dia." },
      { objective: "O6", q: "Guardar as chaves, os óculos e o telefone numa taça ajuda porque:", options: ["Sabe sempre onde estão", "Fica bonito", "Carrega-os", "É obrigatório"], answer: 0, why: "O mesmo lugar significa menos procura." },
      { objective: "O6", q: "Um localizador nas chaves deixa você:", options: ["Encontrá-las com o telefone", "Abrir qualquer porta", "Ligar o carro à distância", "Pagar contas"], answer: 0, why: "O seu telefone consegue encontrar o localizador." },
      { objective: "O6", q: "Onde pode encontrar informação de confiança sobre a memória?", options: ["Num anúncio que aparece no ecrã", "No MedlinePlus (medlineplus.gov) e com o seu médico", "Num vendedor de suplementos", "Num boato nas redes sociais"], answer: 1, why: "O MedlinePlus é um site de saúde gratuito do governo dos EUA." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 4, 7, 10, 13, 16, 19]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Lembretes por voz", objective: "O1", notYet: "Menos de dois lembretes, ou não se repetem.", meets: "Dois lembretes que se repetem, criados por voz, cada um com o quê e quando.", exceeds: "Marcou-os como feitos ou adiou-os quando apareceram durante o dia." },
      { name: "Nota Coisas para lembrar", objective: "O2", notYet: "Não há nota, ou tem palavras-passe ou números privados.", meets: "Uma nota \"Coisas para lembrar\" com pelo menos uma coisa e sem números privados.", exceeds: "A nota está fixada e uma coisa foi acrescentada por voz." },
      { name: "Fotografia para ajudar a memória", objective: "O3", notYet: "Não há fotografia, ou é uma fotografia de um cartão ou documento privado.", meets: "Uma fotografia útil para ajudar a memória, como onde estacionou ou uma etiqueta.", exceeds: "Guardada num álbum \"Ajudas para a memória\" e apagada quando já não era precisa." },
      { name: "Lista para sair de casa", objective: "O4", notYet: "Não há lista de verificação, ou não serve à sua casa.", meets: "Uma lista de verificação curta da IA, ajustada à sua casa e colocada onde a vai ver.", exceeds: "Usou a lista de verificação cada vez que saiu de casa nesse dia." },
      { name: "Usado durante um dia inteiro", objective: "O6", notYet: "As ferramentas foram montadas mas não foram usadas.", meets: "Usou o conjunto de ferramentas durante um dia inteiro, com a verificação da manhã e da noite.", exceeds: "Sabe dizer que ferramenta ajudou mais e o que vai mudar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que ainda usam a rotina para a memória e os lembretes no seguimento dos 30 dias",
      "Alunos que dizem faltar a menos consultas ou ter menos preocupação com os esquecimentos",
      "Alunos que começam outro curso de Seniors and Technology em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com assistente de voz, Notas ou Google Keep, e uma câmara",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Uma impressora, ou papel e fita-cola para a lista de verificação (opcional)",
      "Cerca de 60 minutos no total, em sessões curtas e calmas, mais um dia inteiro de prática"
    ],
    facilitatorNotes: [
      "Mantenha um tom caloroso e prático; esquecer algumas coisas é normal e não é motivo de vergonha.",
      "Ajude os alunos a ligar o assistente de voz e a encontrar o microfone do teclado antes da Lição 1.",
      "Lembre aos alunos que nunca ponham palavras-passe ou números privados em notas, fotografias ou pedidos à IA.",
      "Não avalie a saúde da memória; incentive os alunos ou familiares com preocupações a falar com um médico.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
