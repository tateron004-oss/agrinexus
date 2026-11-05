"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-workplace-skills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "reentry-workplace-skills-pt",
  lang: "pt",
  translationOf: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Competências no Trabalho e Produtividade",
  skills: "Email e SMS profissionais, Falar com um supervisor, Planear e dar prioridade ao dia de trabalho, Usar documentos e horários partilhados, Lidar com comentários e problemas, Seguir as regras de IA do trabalho",
  outcome: "escrever uma mensagem clara e profissional a um supervisor com a ajuda da IA, planear e dar prioridade a um dia de trabalho com uma lista de tarefas, e seguir as regras do seu trabalho sobre o uso da IA e a proteção das informações privadas.",
  about: [
    "Este curso é para pessoas que voltam para casa e estão a começar um trabalho ou a preparar-se para um. Hoje os locais de trabalho funcionam com email, SMS, horários partilhados e documentos no computador, e muitos usam IA. Estas competências ajudam você a manter o trabalho e a crescer nele.",
    "Você vai praticar mensagens profissionais, conversas com um supervisor, o planeamento do seu turno, o uso de documentos e horários partilhados, como lidar com comentários sobre o seu trabalho e como usar a IA no trabalho da forma certa.",
    "Cada lição dura cerca de cinco minutos. Os exemplos vêm de trabalhos reais de entrada: armazém, cozinha, loja, limpeza, construção e escritório. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Use um assistente de IA para escrever um email ou uma SMS curta e profissional a um supervisor a pedir para trocar um turno, com um motivo e uma oferta de ajuda para encontrar quem o cubra. Faça-a soar como você e verifique que não tem informações privadas. Depois faça uma lista de tarefas por ordem de prioridade para um dia de trabalho real ou de prática.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e estão a começar um trabalho ou a preparar-se para um, muitas vezes em trabalhos de entrada em armazém, cozinha, loja, limpeza, construção ou escritório.",
    startingPoint: "Sabem enviar SMS e fazer chamadas. Têm pouca experiência com email de trabalho, horários partilhados, documentos partilhados ou o uso de IA no trabalho. Alguns sentem-se inseguros a falar com um supervisor ou a receber comentários sobre o seu trabalho.",
    gap: "Hoje os locais de trabalho funcionam com mensagens, horários e documentos partilhados, e muitos usam IA. Os alunos precisam de comunicar de forma profissional, planear o seu turno, lidar com comentários e seguir as regras de IA e de privacidade, para manterem o trabalho e crescerem nele.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone, às vezes um computador da biblioteca ou do trabalho",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho e as consultas",
      "Regras do trabalho: cada empregador define as suas próprias regras de IA e de privacidade",
      "Privacidade: nenhuma informação privada de clientes, da empresa ou pessoal em nenhuma ferramenta de IA"
    ],
    prerequisites: "O curso \"Introdução à IA e Confiança Digital\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma situação real de trabalho", action: "escrever um email ou uma SMS curta, clara e profissional com a ajuda da IA", standard: "com a ideia principal na primeira linha, um final educado e a sua própria maneira de falar" },
    { id: "O2", condition: "Com um assunto para falar com um supervisor", action: "preparar e praticar uma conversa curta e respeitosa", standard: "com a sua ideia escrita numa frase e praticada pelo menos uma vez" },
    { id: "O3", condition: "Com um comentário ou um problema no trabalho", action: "responder com calma e comunicar o problema à pessoa certa", standard: "dizendo o que aconteceu, quando e o que você fez" },
    { id: "O4", condition: "Com uma lista de tarefas para um dia de trabalho", action: "fazer uma lista de tarefas dividida em tem de, deve e pode", standard: "com as tarefas que têm prazo hoje no topo" },
    { id: "O5", condition: "Com um link para um horário ou documento partilhado", action: "abri-lo, encontrar a sua parte e acrescentar o que é seu", standard: "sem mudar partes que não são suas" },
    { id: "O6", condition: "Com as regras de IA do seu trabalho", action: "escolher em que tarefas de trabalho pode usar a IA e que informações deixar de fora", standard: "nunca colocando informações privadas de clientes ou da empresa numa ferramenta de IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comunicar no trabalho",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever mensagens profissionais",
          minutes: 5,
          goal: "Escrever um email ou uma SMS curta, clara e profissional a alguém do trabalho.",
          text: [
            "No trabalho, a forma como você escreve conta. Uma mensagem profissional é curta, educada e clara: diz o que precisa na primeira linha, dá um motivo se for preciso e termina com um obrigado.",
            "Um modelo simples: cumprimento, a ideia principal, um ou dois detalhes, o que está a pedir, obrigado e o seu nome. Por exemplo: \"Olá Maria, gostaria de trocar o meu turno de sábado para domingo esta semana por causa de um evento de família. Posso ajudar a encontrar alguém para me cobrir. Obrigado, Andre.\"",
            "Um assistente de IA pode ajudar: \"Torne esta mensagem para o meu supervisor mais profissional, mas ainda simpática.\" Depois leia-a, faça-a soar como você e verifique como se escrevem os nomes. No trabalho, evite gírias de SMS, tudo em maiúsculas e emojis a mais."
          ],
          steps: ["Comece com um cumprimento e o nome da pessoa.", "Diga a sua ideia principal na primeira linha.", "Acrescente um ou dois detalhes.", "Diga o que está a pedir.", "Termine com um obrigado e o seu nome."],
          words: [["Profissional", "a forma respeitosa e clara como as pessoas comunicam no trabalho."], ["Supervisor", "a pessoa que dirige o seu trabalho e o seu horário."]],
          slides: [
            { title: "Curta, educada, clara", bullets: ["A ideia principal primeiro", "Um motivo se for preciso", "Termine com um obrigado"] },
            { title: "Um modelo simples", bullets: ["Cumprimento, ideia, detalhes", "O que está a pedir", "Obrigado e o seu nome"] },
            { title: "A IA pode melhorá-la", bullets: ["\"Torne isto mais profissional, mas simpático.\"", "Faça-a soar como você", "Sem gírias, sem tudo em maiúsculas, sem emojis a mais"] }
          ],
          tryIt: "Escreva um rascunho de mensagem a um supervisor com uma pergunta sobre o seu horário. Peça a um assistente de IA para a tornar mais profissional, mas simpática, e depois faça uma mudança para que soe como você.",
          youCanNow: "escrever uma mensagem curta e profissional a alguém do trabalho.",
          quickCheck: [
            { objective: "O1", q: "O que deve fazer a primeira linha de uma mensagem de trabalho?", options: ["Dizer a ideia principal", "Contar uma história longa", "Pedir desculpa muitas vezes", "Fazer a lista dos seus trabalhos anteriores"], answer: 0, why: "Pôr a ideia principal primeiro torna a mensagem de trabalho rápida de ler." },
            { objective: "O1", q: "A IA deixou a sua mensagem ao supervisor muito formal e longa. O que faz?", options: ["Envia-a como está", "Pede à IA para a tornar mais longa", "Encurta-a e muda palavras para que soe como você", "Envia-a sem o seu nome"], answer: 2, why: "Uma boa mensagem de trabalho é curta, educada e com a sua própria maneira de falar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Falar com o seu supervisor",
          minutes: 5,
          goal: "Preparar e ter uma conversa curta e respeitosa com um supervisor.",
          text: [
            "Algumas coisas ficam melhor ditas pessoalmente: pedir ajuda, explicar um erro ou perguntar por mais horas. Um pouco de preparação torna tudo mais fácil.",
            "Antes de falar, escreva a sua ideia numa frase e o que espera que aconteça. Escolha um momento calmo e pergunte: \"Tem dois minutos?\" Fale com clareza, ouça até ao fim e repita o que ouviu: \"Então quer que eu acabe as devoluções antes de repor as prateleiras. Entendido.\"",
            "Pode praticar com a IA: \"Finja que é o meu supervisor num armazém. Quero pedir mais horas. Faça-me perguntas e depois diga-me como me saí.\""
          ],
          steps: ["Escreva a sua ideia numa frase.", "Escolha um momento calmo e pergunte se a pessoa tem um minuto.", "Fale com clareza e ouça até ao fim.", "Repita o que ouviu.", "Se quiser, pratique primeiro com a IA."],
          words: [["Repetir o que ouviu", "dizer com as suas palavras o que alguém lhe disse, para ter a certeza de que entendeu."], ["Simulação (role-play)", "praticar uma conversa fazendo de conta que ela está a acontecer."]],
          slides: [
            { title: "Algumas coisas dizem-se pessoalmente", bullets: ["Pedir ajuda", "Explicar um erro", "Pedir mais horas"] },
            { title: "Como fazer", bullets: ["A ideia numa frase", "Escolha um momento calmo", "Ouça e depois repita o que ouviu"] },
            { title: "Pratique com a IA", bullets: ["\"Finja que é o meu supervisor.\"", "Peça uma opinião sobre como se saiu"] }
          ],
          tryIt: "Peça a um assistente de IA para fazer de seu supervisor enquanto você pede mais horas. Faça a conversa e depois peça-lhe duas dicas para fazer melhor.",
          youCanNow: "preparar e ter uma conversa respeitosa com um supervisor.",
          quickCheck: [
            { objective: "O2", q: "Porque escrever a sua ideia numa frase antes de falar com um supervisor?", options: ["Para a ler palavra por palavra", "Para saber exatamente o que quer dizer", "Para a enviar em vez de falar", "Para não ter a conversa"], answer: 1, why: "Uma frase clara ajuda você a não fugir do assunto na conversa." },
            { objective: "O2", q: "O seu supervisor parece ocupado e stressado. O que faz?", options: ["Começa a falar logo", "Envia uma SMS zangada", "Pede a um colega para falar por você", "Espera por um momento calmo e pergunta se ele tem um minuto"], answer: 3, why: "Um momento calmo e perguntar primeiro mostra respeito e dá um resultado melhor." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Lidar com comentários e problemas",
          minutes: 5,
          goal: "Responder com calma aos comentários e comunicar um problema da forma certa.",
          text: [
            "Um comentário sobre o seu trabalho (em inglês, \"feedback\") é uma informação sobre como você se está a sair. Mesmo quando é difícil de ouvir, é assim que as pessoas melhoram e ganham confiança para mais tarefas. Ouça, diga obrigado, faça uma pergunta se algo não estiver claro e mostre que está a trabalhar nisso.",
            "Os problemas acontecem: vai chegar atrasado, cometeu um erro, uma máquina avariou, um colega está a causar problemas. Comunique cedo, à pessoa certa, com factos: o que aconteceu, quando e o que você fez. \"Deixei cair uma caixa de frascos de vidro no corredor 4 às 14h. Isolei a zona e fui buscar a vassoura. A quem devo dizer por causa do inventário?\"",
            "Se se sentir zangado, respire fundo antes de responder. Pode dizer: \"Deixe-me pensar nisso e depois respondo.\" Use a IA para ajudar a planear uma resposta calma, não para enviar uma resposta com raiva."
          ],
          steps: ["Ouça sem discutir.", "Diga obrigado e faça perguntas se for preciso.", "Comunique os problemas cedo, com factos.", "Respire fundo se se sentir zangado.", "Faça o que disse que ia fazer."],
          words: [["Comentário (feedback)", "informação sobre como você se está a sair, para ajudar a melhorar."], ["Comunicar um problema", "dizer à pessoa certa o que aconteceu."]],
          slides: [
            { title: "Os comentários ajudam a crescer", bullets: ["Ouça, diga obrigado", "Pergunte se algo não estiver claro", "Mostre que está a trabalhar nisso"] },
            { title: "Comunique os problemas cedo", bullets: ["À pessoa certa", "O quê, quando, o que você fez"] },
            { title: "Mantenha a calma", bullets: ["Respire fundo", "\"Deixe-me pensar e depois respondo.\"", "Use a IA para planear uma resposta calma"] }
          ],
          tryIt: "Pergunte a um assistente de IA: \"O meu supervisor disse que tenho de trabalhar mais depressa na linha. Ajude-me a planear uma resposta calma e positiva e duas formas de melhorar.\" Escreva a resposta que usaria.",
          youCanNow: "responder com calma aos comentários e comunicar um problema com clareza.",
          quickCheck: [
            { objective: "O3", q: "O que é um comentário (feedback) no trabalho?", options: ["Um castigo", "Informação sobre como você se está a sair", "Um aumento de salário", "Só uma queixa de um cliente"], answer: 1, why: "Um comentário é informação sobre como você se está a sair, para poder melhorar." },
            { objective: "O3", q: "Deixou cair uma caixa e partiu o que estava dentro. O que faz?", options: ["Esconde-a e espera que ninguém descubra", "Culpa um colega", "Comunica cedo à pessoa certa, com os factos", "Espera até ao fim da semana"], answer: 2, why: "Comunicar cedo e com factos mostra honestidade e ajuda a resolver o problema." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Comunicar no trabalho",
        questions: [
          { objective: "O1", q: "Onde deve ficar a ideia principal numa mensagem de trabalho?", options: ["Em lado nenhum", "Mesmo no fim", "Na primeira linha", "Numa mensagem separada"], answer: 2, why: "Os supervisores ocupados leem primeiro a primeira linha." },
          { objective: "O1", q: "Qual é a mais profissional?", options: ["\"Olá Maria, posso trocar sábado por domingo esta semana? Posso ajudar a encontrar quem me cubra. Obrigado, Andre\"", "\"ya nao vou sab\"", "\"NÃO VOU NO SÁBADO\"", "\"??\""], answer: 0, why: "É educada, clara e oferece ajuda." },
          { objective: "O2", q: "O que quer dizer \"repetir o que ouviu\"?", options: ["Ir-se embora", "Dizer mais alto", "Discutir", "Dizer com as suas palavras o que ouviu"], answer: 3, why: "Mostra que entendeu." },
          { objective: "O3", q: "O seu supervisor faz-lhe um comentário duro. Uma boa primeira resposta é:", options: ["Discutir logo", "Ouvir e dizer obrigado", "Despedir-se", "Ignorar"], answer: 1, why: "Ouvir mostra que você consegue crescer." },
          { objective: "O3", q: "Partiu uma coisa no trabalho. O que faz?", options: ["Esconde-a", "Comunica cedo à pessoa certa, com os factos", "Culpa um colega", "Espera até alguém reparar"], answer: 1, why: "Comunicar cedo e com honestidade cria confiança." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o trabalho",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear e dar prioridade ao seu dia de trabalho",
          minutes: 5,
          goal: "Fazer uma lista de tarefas e pôr as tarefas mais importantes primeiro.",
          text: [
            "Uma lista de tarefas evita que se esqueça de coisas e ajuda a fazer primeiro as mais importantes. A isto chama-se dar prioridade.",
            "Escreva todas as tarefas. Depois marque cada uma: Tem de fazer hoje (prazos, segurança, o que o supervisor pediu), Deve fazer, e Pode fazer se houver tempo. Comece pelas tarefas que tem de fazer. Se não tiver a certeza do que é mais importante, pergunte ao supervisor; é uma pergunta inteligente, não uma fraqueza.",
            "A IA pode ajudar a ordenar uma lista: \"Estas são as minhas tarefas para o meu turno num supermercado. Ponha-as por ordem de importância e explique porquê.\" Compare a ordem dela com o que o supervisor disse."
          ],
          steps: ["Escreva todas as tarefas.", "Marque cada uma: tem de, deve ou pode.", "Faça primeiro as que tem de fazer.", "Pergunte ao supervisor se não tiver a certeza.", "Risque as tarefas à medida que as acaba."],
          words: [["Dar prioridade", "decidir que tarefas são mais importantes e fazê-las primeiro."], ["Prazo", "a hora ou o dia até quando uma coisa tem de estar feita."]],
          slides: [
            { title: "Uma lista de tarefas ajuda", bullets: ["Nada fica esquecido", "O mais importante primeiro"] },
            { title: "Tem de, deve, pode", bullets: ["Tem de: prazos, segurança, pedidos do supervisor", "Deve: importante, mas menos urgente", "Pode: se houver tempo"] },
            { title: "A IA pode ordenar", bullets: ["\"Ponha as minhas tarefas por ordem de importância.\"", "Compare com o que o supervisor disse"] }
          ],
          tryIt: "Escreva seis tarefas de um turno real ou imaginado. Marque cada uma com tem de, deve ou pode. Peça a um assistente de IA para as pôr por ordem e compare com a sua própria ordem.",
          youCanNow: "planear um dia de trabalho e fazer primeiro as tarefas mais importantes.",
          quickCheck: [
            { objective: "O4", q: "Numa lista tem de, deve, pode, que tarefas ficam em \"tem de\"?", options: ["As tarefas que têm de ser feitas hoje", "As tarefas de que gosta mais", "As tarefas mais fáceis", "As tarefas do próximo mês"], answer: 0, why: "As tarefas \"tem de\" são as que têm de ser feitas hoje, muitas vezes com prazo." },
            { objective: "O4", q: "Duas tarefas parecem urgentes e não sabe qual vem primeiro. O que faz?", options: ["Faz a mais fácil", "Não faz nenhuma", "Faz as duas pela metade", "Pergunta ao supervisor qual é mais importante"], answer: 3, why: "Quando não sabe o que é mais importante, pergunta ao supervisor." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Horários e documentos partilhados",
          minutes: 6,
          goal: "Abrir um horário ou documento partilhado, encontrar a sua parte e acrescentar o que é seu.",
          text: [
            "Muitos trabalhos partilham horários e documentos pela internet. Os seus turnos podem estar numa aplicação de horários escolhida pelo empregador; listas de verificação e formulários podem estar no Google Docs, no Google Sheets, no Microsoft Word ou no Excel.",
            "Quando alguém partilha um documento, você recebe um link por email ou SMS. Toque nele, inicie sessão se for pedido e encontre a sua parte. Pode escrever no documento, e os outros veem as mudanças. Um comentário permite fazer uma pergunta sem mudar o texto: selecione as palavras e escolha Comentar.",
            "Veja a sua aplicação de horários todos os dias e, se um turno mudar, confirme com o supervisor. Nunca mude num documento partilhado uma coisa que não cabe a você mudar; pergunte primeiro."
          ],
          steps: ["Toque no link partilhado que veio por email ou SMS.", "Inicie sessão se for pedido.", "Encontre a sua parte do documento ou do horário.", "Escreva a sua atualização, ou acrescente um comentário para fazer uma pergunta.", "Veja o seu horário todos os dias e confirme as mudanças."],
          words: [["Documento partilhado", "um ficheiro na internet que várias pessoas podem abrir e editar."], ["Comentário", "uma nota posta ao lado do texto, usada para fazer ou responder a perguntas."]],
          slides: [
            { title: "O trabalho é partilhado na internet", bullets: ["Horários numa aplicação", "Docs e Sheets, Word e Excel"] },
            { title: "Usar um documento partilhado", bullets: ["Toque no link, inicie sessão", "Encontre a sua parte", "Escreva, ou acrescente um comentário"] },
            { title: "Bons hábitos", bullets: ["Veja o seu horário todos os dias", "Confirme as mudanças com o supervisor", "Mude só o que é seu"] }
          ],
          tryIt: "Crie um documento gratuito no Google Docs ou no Word chamado \"A minha semana de trabalho\". Escreva os seus turnos de uma semana, acrescente um comentário com uma pergunta e pratique partilhá-lo por link com um familiar ou consigo mesmo.",
          youCanNow: "usar horários e documentos partilhados e acrescentar-lhes o que é seu da forma certa.",
          quickCheck: [
            { objective: "O5", q: "Como entra normalmente num documento partilhado?", options: ["Comprando-o", "Por um link enviado por email ou SMS", "Imprimindo-o", "Ligando para a empresa"], answer: 1, why: "Quando partilham um documento com você, normalmente recebe um link." },
            { objective: "O5", q: "Vê um erro na parte de um colega num horário partilhado. O que faz?", options: ["Muda você mesmo", "Apaga a parte dele", "Acrescenta um comentário ou pergunta-lhe", "Ignora para sempre"], answer: 2, why: "Não muda partes que não são suas; comenta ou pergunta primeiro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA no trabalho da forma certa",
          minutes: 5,
          goal: "Seguir as regras de IA do seu trabalho e manter privadas as informações da empresa e dos clientes.",
          text: [
            "Muitos locais de trabalho usam IA, e muitos têm regras sobre ela. Alguns permitem certas ferramentas; outros não permitem IA nenhuma para algumas tarefas. Pergunte sempre ao supervisor o que é permitido antes de usar a IA no trabalho.",
            "Nunca coloque informações privadas do trabalho numa ferramenta de IA pública: nomes, moradas ou dados de pagamento de clientes, informações de colegas, preços ou planos que não são públicos, ou palavras-passe. Isso pode ir contra as regras da empresa e contra a lei.",
            "Use a IA para coisas como melhorar a sua própria escrita, explicar uma palavra ou praticar uma conversa. Verifique o que ela diz e seja honesto se a usou em algo que entrega."
          ],
          steps: ["Pergunte ao supervisor que uso da IA é permitido.", "Nunca coloque na IA informações privadas de clientes, colegas ou da empresa.", "Use a IA para a sua própria escrita e para aprender.", "Verifique as respostas dela.", "Seja honesto sobre o uso que faz dela."],
          words: [["Confidencial", "informação privada que não pode ser partilhada fora da empresa."], ["Regulamento (política)", "uma regra escrita num local de trabalho."]],
          slides: [
            { title: "Pergunte primeiro", bullets: ["Os locais de trabalho têm regras de IA", "Pergunte ao supervisor o que é permitido"] },
            { title: "Nunca coloque na IA", bullets: ["Nomes ou dados de pagamento de clientes", "Informações de colegas", "Planos, preços ou palavras-passe da empresa"] },
            { title: "Bons usos", bullets: ["Melhorar a sua própria escrita", "Explicar uma palavra", "Praticar uma conversa"] }
          ],
          tryIt: "Tarefa final: peça a um assistente de IA para ajudar a escrever uma mensagem curta e profissional a um supervisor a pedir para trocar um turno, com um motivo e uma oferta de ajuda para encontrar quem o cubra. Faça-a soar como você e verifique que não tem informações privadas. Depois faça uma lista de tarefas por ordem de prioridade para um dia de trabalho.",
          youCanNow: "comunicar de forma profissional, planear o seu trabalho, usar ferramentas partilhadas e usar a IA no trabalho da forma certa.",
          quickCheck: [
            { objective: "O6", q: "O que é um regulamento (política) do local de trabalho?", options: ["Uma regra escrita no trabalho", "A opinião de um colega", "A avaliação de um cliente", "Um tipo de aplicação de horários"], answer: 0, why: "Um regulamento é uma regra escrita que o seu trabalho espera que você siga." },
            { objective: "O6", q: "Quer que a IA ajude a responder à queixa de um cliente que tem o número de telefone dele. O que faz?", options: ["Cola tudo numa ferramenta de IA pública", "Verifica as regras de IA e deixa de fora os dados do cliente", "Publica a queixa na internet para pedir conselhos", "Envia o número do cliente a um amigo"], answer: 1, why: "Siga as regras de IA do seu trabalho e mantenha privadas as informações dos clientes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o trabalho",
        questions: [
          { objective: "O4", q: "O que quer dizer \"dar prioridade\"?", options: ["Fazer as tarefas em qualquer ordem", "Fazer só as tarefas mais fáceis", "Saltar tarefas", "Fazer primeiro as tarefas mais importantes"], answer: 3, why: "Dar prioridade põe as tarefas importantes primeiro." },
          { objective: "O4", q: "Que tarefa é um \"tem de fazer hoje\"?", options: ["O que o supervisor pediu com prazo para hoje", "Uma coisa que pode fazer no próximo mês", "Arrumar o seu cacifo por gosto", "Nenhuma"], answer: 0, why: "Os prazos e os pedidos do supervisor vêm primeiro." },
          { objective: "O5", q: "Quer fazer uma pergunta sobre uma linha num documento partilhado. Você:", options: ["Reescreve-a sem perguntar", "Apaga a linha", "Acrescenta um comentário", "Ignora"], answer: 2, why: "Os comentários perguntam sem mudar o texto." },
          { objective: "O6", q: "Pode colar o nome e o número do cartão de um cliente numa ferramenta de IA pública?", options: ["Só se a IA pedir", "Sim, para poupar tempo", "Só ao fim de semana", "Não, nunca"], answer: 3, why: "As informações dos clientes são confidenciais." },
          { objective: "O6", q: "Antes de usar a IA em tarefas de trabalho, você deve:", options: ["Escondê-lo", "Achar que não há problema", "Perguntar ao supervisor o que é permitido", "Usar a ferramenta que quiser"], answer: 2, why: "Os locais de trabalho têm as suas próprias regras de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Competências no Trabalho e Produtividade",
    questions: [
      { objective: "O1", q: "Uma mensagem profissional é:", options: ["Longa e cheia de gírias", "Curta, educada e clara", "Toda em maiúsculas", "Quase só emojis"], answer: 1, why: "Mensagens claras e respeitosas funcionam melhor." },
      { objective: "O1", q: "Uma boa mensagem de trabalho termina com:", options: ["Um obrigado e o seu nome", "Nada", "Uma piada", "O seu número da Segurança Social"], answer: 0, why: "Um obrigado e um nome são educados e claros." },
      { objective: "O1", q: "A IA pode ajudar uma mensagem de trabalho:", options: ["Tornando-a mais profissional enquanto você mantém a sua maneira de falar", "Enviando-a sem você a ler", "Acrescentando dados privados", "Tornando-a mais longa"], answer: 0, why: "A IA melhora o texto; você verifica e põe-no ao seu jeito." },
      { objective: "O2", q: "Um supervisor é:", options: ["Um colega do mesmo nível", "A pessoa que dirige o seu trabalho", "Um cliente", "Um motorista de entregas"], answer: 1, why: "Os supervisores gerem o trabalho e os horários." },
      { objective: "O2", q: "Antes de falar com um supervisor, escreva:", options: ["Nada", "Um discurso longo", "A sua ideia numa frase", "Queixas sobre colegas"], answer: 2, why: "Uma frase clara mantém você focado." },
      { objective: "O2", q: "Um bom momento para falar com um supervisor é:", options: ["Nunca", "Durante uma hora de muito movimento", "Quando está com um cliente", "Um momento calmo, depois de perguntar se tem um minuto"], answer: 3, why: "Os momentos calmos dão melhores resultados." },
      { objective: "O2", q: "A simulação (role-play) com a IA ajuda você a:", options: ["Ter um aumento automático", "Evitar todas as conversas", "Praticar uma conversa antes de ela acontecer", "Faltar ao trabalho"], answer: 2, why: "Praticar dá confiança." },
      { objective: "O3", q: "Um comentário (feedback) é:", options: ["Informação sobre como você se está a sair", "Um castigo", "Um salário", "Um horário"], answer: 0, why: "Os comentários ajudam a melhorar." },
      { objective: "O3", q: "Quando comunica um problema, inclua:", options: ["Boatos", "Quem tem a culpa", "Nada", "O que aconteceu, quando e o que você fez"], answer: 3, why: "Os factos ajudam a resolver o problema." },
      { objective: "O3", q: "Se se sentir zangado no trabalho, uma boa resposta é:", options: ["Gritar", "\"Deixe-me pensar nisso e depois respondo.\"", "Ir-se embora", "Enviar uma SMS zangada"], answer: 1, why: "Dar-se tempo mantém as coisas calmas." },
      { objective: "O4", q: "Um prazo é:", options: ["Uma pausa", "A hora até quando uma coisa tem de estar feita", "Um dia de folga", "O dia do pagamento"], answer: 1, why: "Os prazos marcam quando o trabalho tem de estar pronto." },
      { objective: "O4", q: "Em tem de, deve, pode, começa por:", options: ["O que for divertido", "Pode", "Deve", "Tem de"], answer: 3, why: "As tarefas \"tem de\" vêm primeiro." },
      { objective: "O4", q: "Se não tiver a certeza do que é mais importante, você:", options: ["Pergunta ao supervisor", "Adivinha e espera que esteja certo", "Não faz nada", "Pergunta a um cliente"], answer: 0, why: "Perguntar é inteligente, não é fraqueza." },
      { objective: "O5", q: "Um documento partilhado é:", options: ["Uma palavra-passe", "Um papel no seu cacifo", "Um ficheiro na internet que várias pessoas podem editar", "Um diário privado"], answer: 2, why: "Os documentos partilhados são editados em conjunto." },
      { objective: "O5", q: "Quando partilham um documento com você, normalmente recebe:", options: ["Nada", "Uma carta pelo correio", "Só uma chamada", "Um link por email ou SMS"], answer: 3, why: "Os links abrem os ficheiros partilhados." },
      { objective: "O5", q: "Deve mudar partes de um documento partilhado que não são suas?", options: ["Só à noite", "Sim, a qualquer hora", "Não; pergunte primeiro", "Só se estiver aborrecido"], answer: 2, why: "Respeite o trabalho dos outros." },
      { objective: "O5", q: "Com que frequência deve ver a sua aplicação de horários?", options: ["Uma vez por ano", "Todos os dias", "Nunca", "Só quando for despedido"], answer: 1, why: "Os turnos podem mudar." },
      { objective: "O6", q: "Uma informação \"confidencial\" é:", options: ["Privada e não pode ser partilhada fora da empresa", "Uma notícia pública", "O tempo que faz", "A sua música preferida"], answer: 0, why: "Fica dentro da empresa." },
      { objective: "O6", q: "Um bom uso da IA no trabalho, se for permitido, é:", options: ["Melhorar a sua própria escrita", "Colar os dados de pagamento de clientes", "Partilhar as moradas dos colegas", "Publicar os planos da empresa"], answer: 0, why: "A sua própria escrita não tem dados privados." },
      { objective: "O6", q: "Um \"regulamento\" (política) do local de trabalho é:", options: ["Só um tipo de seguro", "Uma regra escrita no trabalho", "Um colega", "Uma pausa para almoço"], answer: 1, why: "Os regulamentos definem as regras do trabalho, também sobre a IA." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      7,
      8,
      10,
      11,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Pedido claro",
        objective: "O1",
        notYet: "A mensagem não diz que turno nem porquê, ou a ideia principal está escondida.",
        meets: "A primeira linha pede para trocar um turno indicado, com um motivo curto.",
        exceeds: "É curta o bastante para se ler em poucos segundos e termina com um obrigado e o seu nome."
      },
      {
        name: "Oferta de ajuda",
        objective: "O1",
        notYet: "Não oferece ajuda para encontrar quem cubra o turno.",
        meets: "Oferece ajuda para encontrar alguém que cubra o turno.",
        exceeds: "Indica um colega possível ou uma hora para falarem sobre isso."
      },
      {
        name: "Soa como você, sem dados privados",
        objective: "O6",
        notYet: "Usa palavras que o aluno não diria, ou tem dados privados.",
        meets: "Educada, com as palavras do próprio aluno, sem dados privados.",
        exceeds: "O aluno mudou ele próprio algumas palavras da IA e sabe dizer porquê."
      },
      {
        name: "Lista de tarefas por prioridade",
        objective: "O4",
        notYet: "As tarefas não têm ordem, ou as tarefas com prazo não estão primeiro.",
        meets: "As tarefas estão divididas em tem de, deve e pode, com os prazos de hoje primeiro.",
        exceeds: "Também indica a quem perguntar se as prioridades não estiverem claras."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que continuam empregados 90 dias depois de começarem um trabalho (inquérito de seguimento)",
      "Alunos que dizem ter enviado uma mensagem profissional de trabalho ou usado um horário partilhado em 30 dias",
      "Empregadores ou parceiros de reintegração que dizem que os formandos do programa comunicam melhor"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou do programa",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Uma ferramenta gratuita de documentos ou horários partilhados para praticar, como o Google Docs",
      "Papel e caneta para a lista de tarefas",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Depois da Lição 2, façam simulações de conversas com o supervisor em pares; isto dá confiança depressa.",
      "Use nomes de prática e turnos inventados; nunca dados privados verdadeiros de clientes ou colegas.",
      "Lembre aos alunos que cada empregador tem as suas próprias regras de IA e que devem perguntar antes de usar a IA no trabalho.",
      "Prepare um documento partilhado de prática para que os alunos possam acrescentar o que é seu sem mudar as partes dos outros.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
