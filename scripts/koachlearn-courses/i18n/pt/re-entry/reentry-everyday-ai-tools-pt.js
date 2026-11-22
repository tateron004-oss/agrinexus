"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-everyday-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Facts checked 27 October 2026 (English source): 211 connects people to local help (housing, food, transportation, health care); calls are confidential and can be anonymous; dial 211 or search 211.org.

module.exports = {
  id: "reentry-everyday-ai-tools-pt",
  lang: "pt",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Ferramentas de IA para o Dia a Dia",
  skills: "Criar lembretes com a voz, Obter direções de transportes públicos, Ler e traduzir com a câmara, Encontrar ajuda local, Escrever mensagens do dia a dia com IA, Fazer uma lista de documentos",
  outcome: "usar as ferramentas de IA gratuitas de um smartphone para chegar a tempo a uma consulta: obter direções de autocarro ou comboio, criar um lembrete, fazer uma lista do que levar e escrever uma mensagem curta se estiver atrasado.",
  about: [
    "Este curso é para pessoas que voltam para casa e querem usar um smartphone para tratar da vida do dia a dia: consultas, deslocações, ler formulários, encontrar ajuda e manter o contacto.",
    "Você vai usar ferramentas gratuitas que já estão na maioria dos telefones: o assistente de voz, os mapas, as ferramentas de leitura da câmara e um assistente de IA como o ChatGPT, o Microsoft Copilot ou o Google Gemini. Todos os exemplos vêm da vida real depois da saída da prisão: entrevistas de emprego, serviços de identificação, consultas de habitação e família.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e faça a tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Nunca precisa de escrever um número de processo, um número de identificação ou outro dado privado para fazer estas tarefas."
  ],
  finalTask: "Planeie como chegar a uma consulta real (uma entrevista de emprego, um serviço de identificação ou uma visita de habitação): obtenha direções de transportes públicos ou a pé, crie um lembrete para a hora de sair, peça à IA uma lista do que levar e peça à IA ajuda para escrever uma mensagem curta e educada para enviar se estiver atrasado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) que têm um smartphone e precisam de tratar sozinhos de consultas, deslocações, formulários e mensagens. Muitos estiveram fora enquanto os telefones e as ferramentas de IA mudavam.",
    startingPoint: "Sabem fazer chamadas e enviar SMS. Usam pouco os assistentes de voz, os mapas, as ferramentas de leitura da câmara ou os assistentes de IA. Alguns têm pouca confiança na leitura ou na tecnologia.",
    gap: "Faltar a uma entrevista de emprego, a uma marcação para a identificação ou a uma visita de habitação pode atrasar todo o plano de reintegração. Os alunos precisam de usar ferramentas gratuitas do telefone para chegar a tempo aos lugares, ler papéis impressos, encontrar ajuda local e enviar mensagens educadas, sem partilhar dados privados.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone, às vezes com poucos dados móveis ou um modelo antigo",
      "Tempo: lições de cerca de 5 minutos, que cabem entre consultas e o trabalho",
      "Algumas condições de liberdade condicional ou de pena suspensa limitam o uso da internet; cada aluno cumpre as suas próprias condições",
      "Privacidade: nenhum número de processo, número de identificação ou outro dado privado em nenhuma ferramenta de IA nem em lembretes"
    ],
    prerequisites: "O curso \"Introdução à IA e Confiança Digital\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o assistente de voz do seu telefone", action: "criar um lembrete para uma consulta e um segundo lembrete para a hora de sair", standard: "com a voz, com um título geral e sem dados privados" },
    { id: "O2", condition: "Com a morada de um lugar real", action: "obter direções de autocarro, comboio ou a pé numa aplicação de mapas e saber a que horas sair", standard: "com a hora de chegada marcada para 10 a 15 minutos antes" },
    { id: "O3", condition: "Com um folheto, uma placa ou um anúncio de emprego impresso", action: "usar a câmara do telefone para ler, copiar ou traduzir o texto", standard: "copiando um número de telefone ou uma morada para uma nota ou um contacto sem o escrever de novo" },
    { id: "O4", condition: "Usando um assistente de IA e o 211", action: "encontrar um serviço local de habitação, alimentação, emprego ou transporte", standard: "com um programa anotado e os seus dados confirmados pelo 211 ou por um site oficial" },
    { id: "O5", condition: "Com uma situação real do dia a dia", action: "escrever uma mensagem curta e educada com a ajuda da IA", standard: "que seja honesta, não tenha dados privados e soe como você" },
    { id: "O6", condition: "Com uma consulta real", action: "fazer uma lista do que levar com a ajuda da IA e confirmá-la com o serviço", standard: "só com os nomes dos documentos, verificada no site oficial ou por telefone" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O seu telefone como ajudante",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lembretes e alarmes com a voz",
          minutes: 5,
          goal: "Criar um lembrete para uma consulta falando com o telefone.",
          text: [
            "Faltar a uma consulta pode custar-lhe uma entrevista de emprego, um lugar numa casa ou uma apresentação obrigatória. O seu telefone pode lembrar-se por você.",
            "A maioria dos telefones tem um assistente de voz: a Siri no iPhone, e o Google Assistant ou o Gemini no Android. Para o acordar, diga \"Hey Siri\" ou \"Hey Google\", ou carregue sem largar no botão lateral ou no botão de início. Depois diga: \"Lembra-me da minha entrevista na Fresh Foods na terça-feira às 9 da manhã.\" \"Põe um alarme para amanhã às 6:30 da manhã.\"",
            "Para tudo o que é importante, crie dois lembretes: um no dia anterior e outro na hora de sair. Use títulos gerais nos lembretes; não precisa de pôr dados privados neles."
          ],
          steps: ["Acorde o assistente de voz.", "Diga o quê, o dia e a hora.", "Acrescente um segundo lembrete para a hora de sair.", "Veja no ecrã se ficou criado."],
          words: [["Assistente de voz", "um ajudante que vem no seu telefone e faz tarefas simples quando você fala."], ["Lembrete", "uma mensagem que o telefone lhe mostra na hora que você escolhe."]],
          slides: [
            { title: "O telefone pode lembrar-se por você", bullets: ["Entrevistas, serviço de identificação, visitas de habitação", "Siri, Google Assistant ou Gemini"] },
            { title: "Diga assim", bullets: ["\"Lembra-me da minha entrevista na terça-feira às 9 da manhã.\"", "\"Põe um alarme para amanhã às 6:30 da manhã.\""] },
            { title: "Dois lembretes para coisas importantes", bullets: ["Um no dia anterior", "Um na hora de sair", "Use títulos gerais"] }
          ],
          tryIt: "Com a voz, crie um lembrete para uma consulta real, ou uma de treino, e um segundo lembrete para a hora em que precisa de sair.",
          youCanNow: "criar lembretes de consultas e alarmes com a voz.",
          quickCheck: [
            { objective: "O1", q: "Qual é um bom título para um lembrete de uma entrevista de emprego?", options: ["O seu nome completo e a data de nascimento", "Entrevista às 9 da manhã", "O seu número de processo", "A morada da sua casa"], answer: 1, why: "Os títulos dos lembretes devem ser gerais, sem dados privados." },
            { objective: "O1", q: "A sua entrevista é amanhã às 9 da manhã e o autocarro demora 40 minutos. O que faz?", options: ["Cria um lembrete para as 9 da manhã", "Espera lembrar-se de manhã", "Cria um lembrete para hoje à noite e outro para a hora de sair", "Escreve na mão"], answer: 2, why: "Dois lembretes, no dia anterior e na hora de sair, ajudam a chegar a tempo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Deslocar-se com mapas e transportes públicos",
          minutes: 6,
          goal: "Obter direções de autocarro, comboio ou a pé e saber a que horas sair.",
          text: [
            "As aplicações de mapas, como o Google Maps e o Apple Maps, mostram como chegar a qualquer lugar de autocarro, comboio, a pé ou de carro, e quanto tempo demora.",
            "Abra a aplicação de mapas, escreva a morada na caixa de pesquisa e toque em Direções. Escolha o símbolo do autocarro ou do comboio para os transportes públicos, ou a pessoa a andar para ir a pé. Vai ver que autocarro apanhar, onde o apanhar e quando passa. Também pode marcar a hora a que precisa de chegar, e a aplicação mostra a que horas sair.",
            "Planeie chegar 10 a 15 minutos antes. Os autocarros podem atrasar-se. Guarde as moradas que visita muitas vezes, como a sua casa ou o trabalho, para estarem a um toque. Algumas empresas de transportes têm também as suas próprias aplicações com os horários dos autocarros em tempo real."
          ],
          steps: ["Abra a aplicação de mapas.", "Escreva a morada e toque em Direções.", "Escolha transportes públicos (autocarro ou comboio) ou a pé.", "Marque a hora de chegada para ver a que horas sair.", "Planeie chegar 10 a 15 minutos antes."],
          words: [["Transportes públicos", "transportes para toda a gente, como autocarros e comboios. Nas aplicações em inglês aparece como \"Transit\"."], ["Hora de chegada", "a hora a que precisa de estar lá."]],
          slides: [
            { title: "Os mapas sabem o caminho", bullets: ["Google Maps ou Apple Maps", "Autocarro, comboio, a pé ou de carro"] },
            { title: "Obter direções", bullets: ["Escreva a morada e toque em Direções", "Escolha transportes públicos ou a pé", "Veja que autocarro e quando passa"] },
            { title: "Chegue a tempo", bullets: ["Marque a hora de chegada", "Chegue 10 a 15 minutos antes", "Guarde as moradas que usa muitas vezes"] }
          ],
          tryIt: "Obtenha direções de transportes públicos ou a pé para um lugar real onde precisa de ir, como um American Job Center (centro de emprego), o DMV (serviço de viação) ou uma biblioteca. Marque a hora de chegada e anote a que horas tem de sair.",
          youCanNow: "obter direções de transportes públicos e a pé e calcular a que horas sair.",
          quickCheck: [
            { objective: "O2", q: "O que mostra a hora de chegada marcada numa aplicação de mapas?", options: ["A que horas precisa de sair", "Quanto custa o autocarro", "Quem mais vai", "O tempo que vai fazer amanhã"], answer: 0, why: "Com a hora de chegada marcada, a aplicação calcula a que horas precisa de sair." },
            { objective: "O2", q: "Precisa de chegar de autocarro ao DMV para uma marcação às 10 da manhã. O que faz?", options: ["Sai às 10 da manhã", "Obtém direções de transportes públicos e marca a chegada para cerca das 9:45", "Escolhe só o caminho a pé", "Pergunta a um desconhecido na paragem"], answer: 1, why: "Direções de transportes públicos com uma hora de chegada mais cedo ajudam a chegar 10 a 15 minutos antes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ler e traduzir com a câmara",
          minutes: 5,
          goal: "Usar a câmara do telefone para ler, copiar ou traduzir texto impresso.",
          text: [
            "A câmara do telefone consegue ler palavras impressas. Com o Google Lens (na aplicação Google e em muitos telefones Android) ou com a função de texto da câmara do iPhone, pode apontar para um folheto, uma placa ou um formulário e copiar o texto, pesquisá-lo ou traduzi-lo.",
            "Abra a câmara ou o Google Lens e aponte para as palavras. Toque no botão de texto ou no texto destacado e escolha Copiar, Ouvir, Traduzir ou Pesquisar. Isto ajuda a copiar um número de telefone de um folheto ou a ler instruções noutra língua.",
            "Não leia com a câmara para ferramentas de IA documentos com números privados, como o seu cartão da Segurança Social (Social Security) ou papéis do tribunal. Use estas ferramentas para coisas públicas, como folhetos, placas e anúncios de emprego."
          ],
          steps: ["Abra a câmara ou o Google Lens.", "Aponte para as palavras impressas.", "Toque no botão de texto ou nas palavras destacadas.", "Escolha Copiar, Ouvir, Traduzir ou Pesquisar.", "Não leia documentos privados com a câmara."],
          words: [["Google Lens", "uma ferramenta gratuita da Google que usa a câmara para ler, traduzir e pesquisar o que vê."], ["Traduzir", "passar palavras de uma língua para outra."]],
          slides: [
            { title: "A câmara consegue ler", bullets: ["Google Lens ou a câmara do iPhone", "Folhetos, placas, anúncios de emprego"] },
            { title: "O que pode fazer", bullets: ["Copiar um número de telefone", "Ouvir as palavras lidas em voz alta", "Traduzir ou pesquisar"] },
            { title: "Só coisas públicas", bullets: ["Nada de cartões da Segurança Social", "Nada de papéis do tribunal nem formulários privados"] }
          ],
          tryIt: "Aponte a câmara ou o Google Lens para um folheto, uma placa ou um anúncio de emprego. Copie dele um número de telefone ou uma morada para uma nota ou para os seus contactos.",
          youCanNow: "usar a câmara para copiar, ouvir ou traduzir texto impresso.",
          quickCheck: [
            { objective: "O3", q: "O que pode a ferramenta de texto da câmara fazer com um folheto de emprego impresso?", options: ["Candidatar-se ao emprego por você", "Imprimir uma cópia nova", "Ligar sozinha ao empregador", "Ler, copiar ou traduzir o texto"], answer: 3, why: "A ferramenta de texto da câmara consegue ler, copiar e traduzir palavras impressas." },
            { objective: "O3", q: "Quer passar para uma ferramenta de IA um papel com o seu número da Segurança Social. O que faz?", options: ["Lê-o com a câmara para a IA o explicar", "Não o lê com a câmara; mantém os números privados fora das ferramentas de IA", "Lê só metade", "Publica-o na internet para pedir ajuda"], answer: 1, why: "Números privados como o da Segurança Social nunca devem ir para ferramentas de IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O seu telefone como ajudante",
        questions: [
          { objective: "O1", q: "Qual é a melhor forma de não faltar a uma entrevista de emprego?", options: ["Escrever na mão", "Esperar lembrar-se", "Criar um lembrete no dia anterior e outro para a hora de sair", "Pedir a um desconhecido para o lembrar"], answer: 2, why: "Dois lembretes ajudam a planear e a sair a tempo." },
          { objective: "O2", q: "Numa aplicação de mapas, que opção mostra os caminhos de autocarro e comboio?", options: ["Transportes públicos", "Satélite", "Trânsito", "Definições"], answer: 0, why: "A opção de transportes públicos mostra os autocarros e os comboios." },
          { objective: "O2", q: "Com quanto tempo de antecedência deve planear chegar a uma consulta?", options: ["Uma hora atrasado", "Exatamente na hora", "5 minutos atrasado", "10 a 15 minutos antes"], answer: 3, why: "Os autocarros podem atrasar-se; chegar mais cedo é mais seguro." },
          { objective: "O3", q: "O que pode o Google Lens fazer com um folheto?", options: ["Imprimir dinheiro", "Copiar, ler em voz alta ou traduzir o texto", "Ligar à sua família", "Assinar formulários por você"], answer: 1, why: "O Lens lê o texto que a câmara vê." },
          { objective: "O3", q: "O que NÃO deve passar com a câmara para uma ferramenta de IA?", options: ["Um folheto de emprego", "O seu cartão da Segurança Social", "Uma placa de rua", "Um horário de autocarros"], answer: 1, why: "Os documentos privados ficam fora das ferramentas de IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tratar das coisas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar ajuda local",
          minutes: 5,
          goal: "Encontrar serviços locais de habitação, alimentação, emprego ou transporte.",
          text: [
            "Há ajuda disponível, mas pode ser difícil encontrá-la. O 211 é um serviço em todos os Estados Unidos que liga você a ajuda local para habitação, alimentação, transporte, cuidados de saúde e mais. Ligue para o 211, ou procure o 211 da sua zona em 211.org. As chamadas são confidenciais e pode ficar anónimo.",
            "Um assistente de IA pode ajudar a preparar-se: \"Acabei de voltar para casa e vivo em Columbus, no Ohio. Que tipos de serviços locais podem ajudar com habitação, alimentação e formação profissional? Que perguntas devo fazer quando ligar para o 211?\"",
            "A IA pode indicar programas que já fecharam ou dar números de telefone errados. Confirme sempre com o 211, com o site oficial do programa ou com o seu gestor de caso de reintegração antes de ir."
          ],
          steps: ["Pergunte à IA que tipos de ajuda procurar e o que perguntar.", "Ligue para o 211 ou pesquise em 211.org.", "Anote os programas, os números e os horários.", "Confirme no site oficial ou por telefone antes de ir."],
          words: [["211", "um número de telefone e um site que ligam você a ajuda local."], ["Gestor de caso", "uma pessoa que ajuda você a fazer planos e a encontrar serviços."]],
          slides: [
            { title: "Há ajuda à sua espera", bullets: ["Habitação, alimentação, transporte, cuidados de saúde", "Ligue para o 211 ou visite 211.org", "Confidencial; pode ficar anónimo"] },
            { title: "Prepare-se com a IA", bullets: ["Que tipos de ajuda procurar", "Que perguntas fazer"] },
            { title: "Confirme antes de ir", bullets: ["A IA pode indicar programas fechados", "Verifique com o 211 ou no site oficial", "Pergunte ao seu gestor de caso"] }
          ],
          sources: [{ name: "211: Sobre nós (211: About us)", url: "https://www.211.org/about-us" }],
          tryIt: "Pergunte a um assistente de IA que tipos de serviços locais podem ajudar você agora e o que perguntar quando ligar. Depois procure o 211 da sua zona em 211.org e anote um programa para contactar.",
          youCanNow: "encontrar ajuda local e confirmá-la antes de ir.",
          quickCheck: [
            { objective: "O4", q: "O que o 211 pode ajudar a encontrar?", options: ["Só ajuda da polícia em emergências", "Só vagas de emprego em grandes empresas", "Ajuda local para habitação, alimentação e mais", "O seu registo criminal"], answer: 2, why: "O 211 liga as pessoas a serviços locais, como ajuda com habitação e alimentação." },
            { objective: "O4", q: "Um assistente de IA dá-lhe o número de telefone de um banco alimentar. O que faz?", options: ["Confirma o número com o 211 ou no site oficial", "Vai lá logo", "Partilha-o com amigos sem verificar", "Pergunta à IA se tem a certeza"], answer: 0, why: "A IA pode estar errada, por isso confirme os dados com o 211 ou com uma fonte oficial." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escrever mensagens do dia a dia com IA",
          minutes: 5,
          goal: "Usar a IA para escrever uma mensagem curta e educada para uma situação real.",
          text: [
            "Muitas situações do dia a dia pedem uma mensagem: avisar um empregador de que vai chegar atrasado, perguntar a um senhorio sobre um apartamento, agradecer a alguém por uma entrevista ou falar com a família.",
            "Diga à IA para quem é, o que precisa de dizer e como deve soar: \"Escreva uma SMS curta e educada para um responsável de recrutamento. O meu autocarro está 10 minutos atrasado para a minha entrevista das 9 da manhã. Peço desculpa e continuo muito interessado.\"",
            "Leia-a em voz alta e mude o que não soar como você. Seja breve e honesto. Não precisa de explicar o seu passado nas mensagens do dia a dia."
          ],
          steps: ["Diga para quem é.", "Diga o que precisa de dizer.", "Diga como deve soar: educada, curta, simpática.", "Leia-a em voz alta e faça-a soar como você."],
          words: [["Educado", "respeitoso e cortês."], ["Rascunho", "uma primeira versão que pode mudar."]],
          slides: [
            { title: "Mensagens do dia a dia", bullets: ["Vai chegar atrasado", "Perguntar sobre um apartamento", "Agradecer a quem o entrevistou"] },
            { title: "Diga três coisas à IA", bullets: ["Para quem é", "O que precisa de dizer", "Como deve soar"] },
            { title: "Faça-a sua", bullets: ["Leia-a em voz alta", "Curta e honesta", "Não precisa de explicar o seu passado"] }
          ],
          tryIt: "Peça a um assistente de IA para escrever uma SMS curta e educada a avisar quem o vai entrevistar de que o seu autocarro está atrasado. Mude uma coisa para soar como você.",
          youCanNow: "escrever mensagens do dia a dia claras e educadas com a ajuda da IA.",
          quickCheck: [
            { objective: "O5", q: "O que torna boa uma mensagem do dia a dia?", options: ["Longa e cheia de detalhes sobre o seu passado", "Curta, educada e honesta", "Escrita toda em letras maiúsculas", "Enviada sem a ler antes"], answer: 1, why: "Uma mensagem curta, educada e honesta é fácil de ler e respeitosa." },
            { objective: "O5", q: "A IA escreveu uma mensagem de atraso com palavras que você nunca diria. O que faz?", options: ["Envia-a mesmo assim", "Pede à IA para a fazer mais longa", "Apaga-a e não envia nada", "Muda as palavras para soar como você e depois envia-a"], answer: 3, why: "Você lê os rascunhos da IA e muda-os para soarem como você." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Listas para consultas e documentos",
          minutes: 5,
          goal: "Pedir à IA uma lista do que levar e depois confirmá-la com o serviço.",
          text: [
            "Aparecer sem os papéis certos pode obrigar a uma segunda viagem. Peça à IA uma lista: \"Vou ao DMV do meu estado tirar um cartão de identificação estadual. Que documentos as pessoas costumam ter de levar? Faça uma lista curta.\"",
            "Depois confirme com o próprio serviço. As regras mudam de estado para estado e com o tempo, por isso a palavra final é do site oficial (que muitas vezes acaba em .gov) ou de uma chamada. O seu programa de reintegração ou o seu gestor de caso também podem ajudar a obter documentos como a certidão de nascimento.",
            "Guarde a lista nas notas do telefone ou em papel. Nunca escreva na IA os seus números de identificação verdadeiros, números de processo ou o número da Segurança Social; a lista só precisa dos nomes dos documentos."
          ],
          steps: ["Pergunte à IA o que costuma ser preciso.", "Peça uma lista curta.", "Confirme no site oficial do serviço ou por telefone.", "Junte os papéis e marque-os na lista.", "Nunca escreva os seus números verdadeiros na IA."],
          words: [["Lista de verificação", "uma lista de coisas que vai marcando uma a uma."], ["Cartão de identificação estadual (State ID)", "um cartão de identificação oficial com fotografia, dado pelo seu estado, para pessoas que não conduzem."]],
          slides: [
            { title: "Evite uma segunda viagem", bullets: ["Peça à IA uma lista", "\"O que as pessoas costumam levar para tirar um cartão de identificação estadual?\""] },
            { title: "Confirme com o serviço", bullets: ["As regras mudam de estado para estado", "Site oficial, muitas vezes .gov, ou ligue", "Peça ajuda ao seu gestor de caso"] },
            { title: "Mantenha os números privados", bullets: ["A lista só precisa dos nomes dos documentos", "Nunca escreva números de identificação ou de processo na IA"] }
          ],
          tryIt: "Tarefa final: escolha uma consulta real. Obtenha direções de transportes públicos ou a pé, crie um lembrete para a hora de sair, peça à IA uma lista do que levar (e confirme-a no site oficial) e peça à IA ajuda para escrever uma SMS curta para enviar se estiver atrasado.",
          youCanNow: "usar ferramentas de IA do dia a dia para planear, preparar e chegar a tempo a uma consulta.",
          quickCheck: [
            { objective: "O6", q: "O que deve ter uma lista de documentos?", options: ["Os nomes dos documentos de que precisa", "Os seus números de identificação e da Segurança Social", "As suas palavras-passe", "A morada de casa do seu agente de liberdade condicional"], answer: 0, why: "Uma lista precisa dos nomes dos documentos, não dos seus números privados." },
            { objective: "O6", q: "A lista da IA para tirar o cartão de identificação estadual parece completa. O que faz a seguir?", options: ["Confia nela e vai", "Não leva nada a mais", "Confirma a lista no site oficial do serviço ou por telefone", "Pergunta a um amigo o que levou há anos"], answer: 2, why: "A palavra final sobre o que levar é do serviço." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Tratar das coisas",
        questions: [
          { objective: "O4", q: "Que número liga você a ajuda local para habitação, alimentação e mais?", options: ["611", "411", "311 em todo o lado", "211"], answer: 3, why: "O 211 liga as pessoas a serviços locais." },
          { objective: "O4", q: "A IA dá-lhe o número de telefone de um programa. O que faz?", options: ["Confirma-o com o 211 ou no site oficial", "Confia totalmente", "Publica-o na internet", "Dá-lhe o seu número de processo"], answer: 0, why: "A IA pode indicar programas fechados ou números errados." },
          { objective: "O5", q: "Que pedido vai dar uma boa mensagem de \"vou chegar atrasado\"?", options: ["\"atrasado\"", "\"mensagem\"", "\"Escreva uma SMS curta e educada para um responsável de recrutamento. O meu autocarro está 10 minutos atrasado para a minha entrevista das 9 da manhã.\"", "\"autocarro\""], answer: 2, why: "Diz para quem é, o quê e como deve soar." },
          { objective: "O5", q: "Precisa de explicar o seu passado numa mensagem do dia a dia?", options: ["Só por e-mail", "Sim, sempre", "Só aos senhorios", "Não; seja breve e honesto"], answer: 3, why: "As mensagens do dia a dia só precisam do essencial." },
          { objective: "O6", q: "Quem tem a palavra final sobre os documentos a levar?", options: ["Um amigo", "A IA", "O próprio serviço", "Uma publicação nas redes sociais"], answer: 2, why: "As regras mudam de estado para estado; quem decide é o serviço." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA para o Dia a Dia",
    questions: [
      { objective: "O1", q: "A Siri e o Google Assistant são:", options: ["Sites de emprego", "Assistentes de voz dos telefones", "Empresas de autocarros", "Bancos"], answer: 1, why: "Fazem tarefas simples quando você fala." },
      { objective: "O1", q: "Que pedido de voz cria um lembrete útil?", options: ["\"Lembra-me da minha entrevista na terça-feira às 9 da manhã.\"", "\"Entrevista.\"", "\"Terça-feira.\"", "\"Olá.\""], answer: 0, why: "Diz o quê, o dia e a hora." },
      { objective: "O1", q: "Para consultas importantes, crie:", options: ["Dois lembretes: no dia anterior e na hora de sair", "Nenhum", "Um, um mês depois", "Dez alarmes ao acaso"], answer: 0, why: "Dois lembretes ajudam a planear e a sair." },
      { objective: "O1", q: "Os títulos dos lembretes devem ser:", options: ["Cheios de números de identificação", "Gerais, sem dados privados", "O seu número de processo", "A sua palavra-passe"], answer: 1, why: "Não precisa de dados privados nos lembretes." },
      { objective: "O2", q: "Numa aplicação de mapas, depois de escrever a morada, toca em:", options: ["Câmara", "Apagar", "Direções", "Partilhar palavra-passe"], answer: 2, why: "Direções mostra como chegar lá." },
      { objective: "O2", q: "\"Transportes públicos\" quer dizer:", options: ["Andar de avião", "Só a pé", "Só táxis", "Autocarros e comboios"], answer: 3, why: "Os transportes públicos são os transportes para toda a gente." },
      { objective: "O2", q: "Marcar a hora de chegada numa aplicação de mapas mostra:", options: ["O seu número de identificação", "O saldo do seu banco", "A que horas precisa de sair", "Só o tempo que vai fazer"], answer: 2, why: "Faz a conta para trás a partir da hora de chegada." },
      { objective: "O2", q: "Guardar as moradas que usa muitas vezes deixa-as:", options: ["A um toque", "Como números privados", "Desaparecidas", "Caras"], answer: 0, why: "Os lugares guardados abrem-se depressa." },
      { objective: "O3", q: "O Google Lens consegue:", options: ["Ligar ao seu agente de liberdade condicional", "Substituir o seu documento de identificação", "Pagar a sua renda", "Ler, copiar e traduzir texto impresso"], answer: 3, why: "O Lens lê o que a câmara vê." },
      { objective: "O3", q: "Um bom uso da ferramenta de texto da câmara é:", options: ["Passar o cartão da Segurança Social para a IA", "Copiar um número de telefone de um folheto de emprego", "Passar papéis do tribunal para a IA", "Fotografar o cartão do banco para a IA"], answer: 1, why: "Só texto público; os documentos privados ficam de fora." },
      { objective: "O4", q: "As chamadas para o 211 são:", options: ["Gravadas para o público", "Confidenciais, e pode ficar anónimo", "Só para emergências", "Só para empresas"], answer: 1, why: "As chamadas para o 211 são confidenciais." },
      { objective: "O4", q: "Antes de ligar para o 211, a IA pode ajudar:", options: ["Garantindo uma cama", "Conhecendo a história do seu processo", "Inscrevendo você automaticamente", "Sugerindo que tipos de ajuda pedir"], answer: 3, why: "Ajuda a preparar as perguntas." },
      { objective: "O4", q: "Um gestor de caso é:", options: ["Uma pessoa que ajuda você a fazer planos e a encontrar serviços", "Uma aplicação de telefone", "Um motorista de autocarro", "Um site"], answer: 0, why: "Os gestores de caso ajudam com os planos de reintegração." },
      { objective: "O5", q: "Quando a IA escreve uma mensagem por você, você deve:", options: ["Acrescentar o seu número da Segurança Social", "Enviá-la sem ler", "Lê-la em voz alta e fazê-la soar como você", "Torná-la muito longa"], answer: 2, why: "A sua mensagem deve soar como você." },
      { objective: "O5", q: "Uma boa mensagem do dia a dia é:", options: ["Cheia de dados privados", "Longa e cheia de desculpas", "Malcriada", "Curta, educada e honesta"], answer: 3, why: "Curta e honesta funciona melhor." },
      { objective: "O5", q: "Um \"rascunho\" é:", options: ["Um passe de autocarro", "A versão final", "Uma primeira versão que pode mudar", "Um documento de identificação"], answer: 2, why: "Melhore os rascunhos antes de enviar." },
      { objective: "O6", q: "Antes de ir tirar um cartão de identificação estadual, deve:", options: ["Confiar só na IA", "Confirmar a lista de documentos no site oficial ou por telefone", "Não levar nada", "Perguntar a um desconhecido"], answer: 1, why: "As regras mudam de estado para estado." },
      { objective: "O6", q: "Os sites oficiais do governo dos Estados Unidos costumam acabar em:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: ".gov é usado pelos serviços do governo." },
      { objective: "O6", q: "De que precisa uma lista de documentos?", options: ["Dos nomes dos documentos, não dos seus números", "Dos seus números de identificação verdadeiros", "Do seu número de processo", "Do seu número da Segurança Social"], answer: 0, why: "Os nomes dos documentos chegam." },
      { objective: "O6", q: "Um cartão de identificação estadual é:", options: ["Um bilhete de autocarro", "Um cartão de identificação oficial com fotografia, dado pelo seu estado", "Um cartão da biblioteca", "Uma aplicação de telefone"], answer: 1, why: "É uma identificação oficial com fotografia para quem não conduz e para outras pessoas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 4, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Direções", objective: "O2", notYet: "Não tem direções, ou não sabe a que horas sair.", meets: "Direções de transportes públicos ou a pé com uma hora de chegada mais cedo, e a hora de saída anotada.", exceeds: "Também tem um caminho alternativo ou a morada guardada para abrir com um toque." },
      { name: "Lembrete para sair", objective: "O1", notYet: "Não tem lembrete, ou o lembrete tem dados privados no título.", meets: "Um lembrete criado para a hora de sair, com um título geral.", exceeds: "Também criou um lembrete no dia anterior." },
      { name: "Lista confirmada", objective: "O6", notYet: "Não tem lista, ou a lista tem números privados, ou não foi confirmada.", meets: "Uma lista com os nomes dos documentos, confirmada no site oficial ou por telefone.", exceeds: "Sabe dizer onde a confirmou e o que mudou em relação à lista da IA." },
      { name: "SMS de atraso", objective: "O5", notYet: "Não tem SMS, ou a SMS é longa, malcriada ou tem dados privados.", meets: "Uma SMS curta, educada e honesta, pronta a enviar.", exceeds: "O aluno mudou algumas palavras para soar como ele." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter chegado a tempo a uma consulta usando estas ferramentas em 30 dias (inquérito de seguimento)",
      "Alunos que contactam um serviço local encontrado através do 211 em 30 dias",
      "Os parceiros de reintegração dizem que há menos faltas às consultas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet e uma aplicação de mapas",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Um folheto ou anúncio de emprego impresso para praticar com a câmara",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos alunos para trazerem uma consulta real que vão ter em breve, para a tarefa final ser útil logo.",
      "Nunca peça aos alunos para escrever ou ler com a câmara números de identificação, de processo ou da Segurança Social verdadeiros; use só os nomes dos documentos.",
      "Explorem juntos o site 211.org para que todos encontrem o 211 da sua zona.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que cumpram as condições sobre o uso da internet ou do telefone.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
