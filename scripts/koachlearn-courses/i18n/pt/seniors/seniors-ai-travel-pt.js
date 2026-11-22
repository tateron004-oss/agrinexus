"use strict";

// Koach Learn course (Portuguese translation of seniors/seniors-ai-travel.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US travel rules (TSA, REAL ID) stay about the United States, as in the English.

module.exports = {
  id: "seniors-ai-travel-pt",
  lang: "pt",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "A IA como Companheira de Viagem",
  skills: "Planear o roteiro de uma viagem com IA, Verificar dados de viagem em sites oficiais, Fazer uma lista do que levar, Usar aplicações de mapas e de tradução, Viajar com segurança e em contacto com a família",
  outcome: "usar um assistente de IA para planear uma viagem curta a um ritmo confortável, verificar os dados importantes em sites oficiais, fazer uma lista do que levar e usar as ferramentas de mapas e de tradução do seu telefone durante a viagem.",
  about: [
    "Este curso é para pessoas mais velhas que querem viajar, seja para visitar os netos noutra parte do país, fazer uma excursão de autocarro ou finalmente conhecer um lugar com que sempre sonharam.",
    "Vai usar um assistente de IA gratuito, como o ChatGPT, o Microsoft Copilot ou o Google Gemini, para planear uma viagem calma que se adapta à sua energia e às suas necessidades, e depois verificar os dados que importam (regras de identificação, horários, preços) em sites oficiais. Também vai usar os mapas, a tradução e a partilha de localização no seu telefone.",
    "Cada lição dura cerca de cinco minutos. As tarefas \"Experimente agora\" constroem um plano verdadeiro para uma viagem que gostaria de fazer. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Planeie uma viagem de três dias com um assistente de IA: um plano dia a dia a um ritmo confortável, com tempo para descansar, uma lista do que levar que inclua os seus medicamentos e a sua identificação, e três dados que verificou em sites oficiais (por exemplo, a identificação de que precisa para viajar de avião e o horário de um lugar que vai visitar). Partilhe o plano com um familiar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas mais velhas que querem viajar, perto ou longe, para visitar a família, conhecer lugares novos ou fazer uma pequena pausa, muitas vezes a um ritmo mais lento e com necessidades de saúde, como medicamentos diários ou pouca capacidade para andar.",
    startingPoint: "Já viajaram antes, muitas vezes com mapas de papel, agências de viagens ou a família a planear por elas. Muitas usam um smartphone mas nunca usaram um assistente de IA, as direções de uma aplicação de mapas, aplicações de tradução ou a partilha de localização.",
    gap: "Planear uma viagem pode parecer demais, e erros como a identificação errada, atrações fechadas ou medicamentos esquecidos podem estragá-la. Um assistente de IA e as ferramentas do telefone ajudam as pessoas mais velhas a planear ao seu próprio ritmo e a viajar com mais independência, desde que verifiquem os dados em sites oficiais e tenham cuidado com burlas de viagem.",
    constraints: [
      "Nível de leitura: palavras simples, frases curtas e passos grandes e simples",
      "Aparelhos: um smartphone com internet, uma aplicação de mapas e uma aplicação de tradução",
      "Tempo: cerca de 5 minutos por lição, a um ritmo calmo",
      "As regras de viagem, os horários e os preços mudam; os alunos verificam sites oficiais como o tsa.gov",
      "Saúde e privacidade: os medicamentos seguem o conselho do farmacêutico; nada de operações bancárias em Wi-Fi público"
    ],
    prerequisites: "O curso \"IA para Pessoas Mais Velhas: Usar Assistentes de IA\" ajuda se for feito antes, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando um assistente de IA gratuito", action: "pedir um plano de viagem dia a dia que diga onde, quando, quem vai, os seus interesses e o seu ritmo", standard: "com tempo para descansar e sem mais atividades do que consegue fazer com conforto" },
    { id: "O2", condition: "Com um plano de viagem feito pela IA", action: "verificar dados importantes, como horários, preços e regras de identificação, em sites oficiais", standard: "verificando pelo menos três dados antes de confiar neles" },
    { id: "O3", condition: "Com a sua viagem e as suas necessidades de saúde", action: "pedir uma lista do que levar, organizada por grupos, que inclua os seus medicamentos e a sua identificação", standard: "com os medicamentos e a identificação na bagagem de mão" },
    { id: "O4", condition: "Usando uma aplicação de mapas no telefone", action: "obter direções a pé, de carro ou de transportes públicos e seguir as indicações faladas", standard: "com o seu hotel guardado como favorito" },
    { id: "O5", condition: "Quando precisa de outra língua", action: "usar uma aplicação de tradução para ler uma placa ou ter uma conversa simples", standard: "com as necessidades importantes, como alergias, escritas antes e confirmadas com funcionários" },
    { id: "O6", condition: "Antes e durante uma viagem", action: "partilhar os seus planos com a família e reconhecer burlas de viagem", standard: "reservando só em sites oficiais ou com agentes de confiança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear a sua viagem",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear um roteiro calmo com IA",
          minutes: 5,
          goal: "Pedir a um assistente de IA um plano de viagem dia a dia que se adapte ao seu ritmo.",
          text: [
            "Um roteiro é um plano dia a dia para uma viagem. Um assistente de IA pode fazer um rascunho em segundos e mudá-lo as vezes que quiser.",
            "Diga-lhe onde, quando, por quanto tempo, quem vai e do que precisa: \"Planeie uma viagem calma de três dias a Savannah, na Geórgia (EUA), em abril, para duas pessoas com mais de 70 anos. Gostamos de história e de jardins, andamos devagar e queremos descansar todas as tardes. No máximo duas atividades por dia.\"",
            "Peça mudanças até ficar bem para você: \"Acrescente um lugar para sentar e almoçar perto de cada atividade da manhã.\" \"Que lugares têm elevador ou são fáceis para quem anda de bengala?\""
          ],
          steps: ["Diga onde, quando e por quanto tempo.", "Diga quem vai e do que gosta.", "Diga o seu ritmo e as suas necessidades, como descanso ou caminhos fáceis.", "Peça mudanças até ficar bem para você."],
          words: [["Roteiro", "um plano dia a dia para uma viagem."], ["Acessível", "fácil de alcançar e de usar por pessoas com pouca mobilidade, audição ou visão."]],
          slides: [
            { title: "Um plano em segundos", bullets: ["Um roteiro é um plano dia a dia", "A IA faz o rascunho, você dá-lhe forma"] },
            { title: "Diga ao assistente", bullets: ["Onde, quando, por quanto tempo", "Quem vai e do que gosta", "O seu ritmo e as suas necessidades"] },
            { title: "Ajuste-o a você", bullets: ["\"Acrescente um descanso todas as tardes.\"", "\"Que lugares são fáceis com bengala?\""] }
          ],
          tryIt: "Escolha uma viagem que gostaria de fazer. Peça a um assistente de IA um roteiro calmo de três dias, com o seu ritmo e as suas necessidades, e depois peça uma mudança.",
          youCanNow: "pedir à IA um plano de viagem que se adapta ao seu ritmo e às suas necessidades.",
          quickCheck: [
            { objective: "O1", q: "O que é um roteiro?", options: ["Uma lista do que levar", "Um plano dia a dia para uma viagem", "Um bilhete de avião", "Um formulário de seguro de viagem"], answer: 1, why: "Um roteiro é um plano de viagem dia a dia que a IA pode escrever e mudar." },
            { objective: "O1", q: "O plano da IA tem quatro atividades por dia e você cansa-se depressa. O que pede?", options: ["\"Planeie outra cidade.\"", "Nada; vai conseguir", "\"Faça mais comprido.\"", "\"No máximo duas atividades por dia, com descanso todas as tardes.\""], answer: 3, why: "Peça mudanças até o plano se adaptar ao seu ritmo e às suas necessidades." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Verificar dados de viagem em sites oficiais",
          minutes: 5,
          goal: "Verificar os dados importantes de um plano de viagem da IA antes de confiar neles.",
          text: [
            "Os planos de viagem da IA podem ter erros: um museu que fechou, horários antigos, preços errados ou regras que mudaram. Verifique sempre os dados que podem estragar a sua viagem.",
            "Verifique os horários e os preços no site do próprio lugar. Verifique os horários dos voos e dos comboios com a companhia aérea ou a companhia de comboios. Sobre a identificação: desde 7 de maio de 2025, quem viaja de avião dentro dos Estados Unidos precisa de uma carta de condução ou bilhete de identidade que cumpra as regras REAL ID, ou de outra identificação aceite, como um passaporte. O site da TSA, tsa.gov, tem a lista de todas as identificações aceites.",
            "Pergunte ao assistente: \"O que devo confirmar neste plano?\" Ele pode mostrar os dados que importam, mas quem os verifica nos sites oficiais é você."
          ],
          steps: ["Pergunte à IA que dados deve confirmar.", "Verifique horários e preços no site de cada lugar.", "Verifique os horários dos voos ou dos comboios com a companhia.", "Verifique as regras de identificação no tsa.gov antes de voar."],
          words: [["REAL ID", "uma carta de condução ou bilhete de identidade de um estado dos EUA que cumpre as regras federais; costuma ter uma estrela no canto."], ["TSA", "a Transportation Security Administration, o serviço que faz o controlo de segurança dos viajantes nos aeroportos dos EUA."]],
          slides: [
            { title: "Os planos da IA podem estar desatualizados", bullets: ["Lugares fechados", "Horários ou preços antigos", "Regras que mudaram"] },
            { title: "Verifique em sites oficiais", bullets: ["Horários e preços: o site do lugar", "Voos e comboios: a companhia", "Regras de identificação: tsa.gov"] },
            { title: "Voar dentro dos EUA", bullets: ["REAL ID ou outra identificação aceite, obrigatória desde maio de 2025", "O passaporte é aceite", "Veja a lista completa no tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Pergunte ao assistente que dados do seu roteiro deve confirmar. Depois verifique o horário de um lugar no site dele, e veja se a sua identificação cumpre as regras REAL ID (procure a estrela) ou que outras identificações o tsa.gov aceita.",
          youCanNow: "verificar os dados principais de um plano de viagem da IA em sites oficiais.",
          quickCheck: [
            { objective: "O2", q: "Onde verifica o horário de um museu?", options: ["No site do próprio museu", "Só na resposta da IA", "Num fórum de viagens", "Num guia de viagem antigo"], answer: 0, why: "A IA pode dar horários antigos; o site do próprio lugar tem os horários atuais." },
            { objective: "O2", q: "Vai viajar de avião dentro dos EUA e não sabe se a sua identificação é aceite. O que faz?", options: ["Espera que esteja tudo bem", "Pergunta à IA e confia nela", "Verifica a lista de identificações aceites no tsa.gov", "Leva um cartão da biblioteca"], answer: 2, why: "O site da TSA, tsa.gov, tem a lista de todas as identificações aceites para voar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fazer uma boa lista do que levar",
          minutes: 4,
          goal: "Pedir à IA uma lista do que levar que se adapte à sua viagem e às suas necessidades de saúde.",
          text: [
            "Uma lista do que levar acaba com a preocupação de sempre nas viagens: \"Será que me esqueci de alguma coisa?\" Peça uma ao assistente, com base na sua viagem, na estação do ano e nas atividades.",
            "Por exemplo: \"Faça uma lista do que levar para três dias em Savannah em abril. Tomo medicamentos todos os dias e uso óculos de leitura e um aparelho auditivo. Organize por grupos: documentos, medicamentos e saúde, roupa e aparelhos eletrónicos.\"",
            "Leve os medicamentos na bagagem de mão, nas embalagens originais, com um pouco a mais para o caso de atrasos, e leve uma lista dos seus medicamentos e o número de telefone do seu médico. O seu farmacêutico pode aconselhar sobre viajar com medicamentos."
          ],
          steps: ["Diga à IA o lugar, a estação do ano, a duração e as atividades.", "Fale das suas necessidades de saúde, como medicamentos ou aparelho auditivo.", "Peça-lhe para organizar a lista por grupos.", "Leve os medicamentos e a identificação na bagagem de mão."],
          words: [["Bagagem de mão", "o saco ou a mala que leva consigo no avião, no autocarro ou no comboio."]],
          slides: [
            { title: "Nunca mais se esquecer de nada", bullets: ["Peça à IA uma lista do que levar", "Com base no lugar, na estação e nas atividades"] },
            { title: "Organize a lista por grupos", bullets: ["Documentos", "Medicamentos e saúde", "Roupa e aparelhos eletrónicos"] },
            { title: "Os medicamentos viajam consigo", bullets: ["Na bagagem de mão, nas embalagens originais", "Um pouco a mais para atrasos", "Uma lista dos medicamentos e o número do seu médico"] }
          ],
          tryIt: "Peça a um assistente de IA uma lista do que levar para a sua viagem, organizada por grupos e com as suas necessidades de saúde. Acrescente o que ele esqueceu e guarde ou imprima a lista.",
          youCanNow: "fazer com a IA uma lista do que levar que inclui as suas necessidades de saúde.",
          quickCheck: [
            { objective: "O3", q: "Porque pedir à IA para organizar a lista por grupos?", options: ["Para a lista ficar mais comprida", "Para ser fácil verificar por partes, como documentos e medicamentos", "Para levar menos coisas", "Para a IA se lembrar da sua viagem"], answer: 1, why: "Organizar por documentos, medicamentos, roupa e aparelhos eletrónicos torna a lista fácil de verificar." },
            { objective: "O3", q: "Toma medicamentos todos os dias. Como os leva?", options: ["Na mala que vai no porão", "Soltos num saco de plástico", "Só o suficiente para cada dia", "Na bagagem de mão, nas embalagens originais, com um pouco a mais"], answer: 3, why: "Leve os medicamentos na bagagem de mão, nas embalagens originais, com um pouco a mais para o caso de atrasos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear a sua viagem",
        questions: [
          { objective: "O1", q: "O que é um roteiro?", options: ["Um bilhete de avião", "Uma mala", "Um plano de viagem dia a dia", "Um passaporte"], answer: 2, why: "Um roteiro mostra cada dia de uma viagem." },
          { objective: "O1", q: "Que pedido vai dar o melhor plano de viagem?", options: ["\"Planeie uma viagem calma de 3 dias a Savannah em abril para duas pessoas com mais de 70 anos que gostam de jardins e precisam de descansar à tarde.\"", "\"viagem\"", "\"viajar\"", "\"ir a algum lado\""], answer: 0, why: "Diz o lugar, a época, as pessoas, os interesses e o ritmo." },
          { objective: "O2", q: "A IA diz que um museu abre às 9 da manhã. Como verifica?", options: ["Adivinha", "Confia na IA", "Pergunta a um desconhecido", "No site do próprio museu"], answer: 3, why: "O site do próprio lugar tem os horários atuais." },
          { objective: "O2", q: "Desde maio de 2025, para voar dentro dos EUA precisa de:", options: ["Só um cartão da biblioteca", "Uma identificação que cumpra as regras REAL ID ou outra identificação aceite, como um passaporte", "Nenhuma identificação", "Um cartão bancário"], answer: 1, why: "A TSA exige REAL ID ou outra identificação aceite." },
          { objective: "O3", q: "Onde devem ir os medicamentos quando viaja?", options: ["Só na mala que vai no porão", "Na bagagem de mão", "Ficam em casa", "Na mala de um desconhecido"], answer: 1, why: "Tê-los consigo evita perdê-los." }
        ]
      }
    },
    {
      name: "Capítulo 2: Na estrada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar mapas e direções no seu telefone",
          minutes: 5,
          goal: "Obter direções a pé ou de carro com uma aplicação de mapas.",
          text: [
            "Aplicações de mapas como o Google Maps e o Apple Maps mostram onde você está e como chegar aonde quer ir, de carro, a pé ou de transportes públicos.",
            "Abra a aplicação de mapas e escreva o lugar na caixa de pesquisa, ou diga-o ao seu assistente de voz: \"Hey Siri, walking directions to Forsyth Park\" (direções a pé para o Forsyth Park). Toque em Direções, escolha a pé, de carro ou transportes públicos, e depois toque em Iniciar. A aplicação diz em voz alta cada curva.",
            "Antes da viagem, guarde o seu hotel como lugar favorito, para que voltar seja só um toque. As direções gastam a bateria do telefone, por isso leve um carregador ou uma pequena bateria externa."
          ],
          steps: ["Abra a sua aplicação de mapas.", "Escreva ou diga aonde quer ir.", "Toque em Direções e escolha a pé, de carro ou transportes públicos.", "Toque em Iniciar e siga as indicações faladas.", "Guarde o seu hotel como favorito."],
          words: [["GPS", "um sistema que deixa o seu telefone saber onde você está num mapa."], ["Transportes públicos", "transportes para todos, como autocarros e comboios."]],
          slides: [
            { title: "O seu telefone sabe o caminho", bullets: ["Google Maps ou Apple Maps", "De carro, a pé ou de transportes públicos"] },
            { title: "Obter direções", bullets: ["Escreva ou diga o lugar", "Toque em Direções e escolha como ir", "Toque em Iniciar para ouvir as indicações"] },
            { title: "Dicas de viagem", bullets: ["Guarde o seu hotel como favorito", "Leve um carregador ou uma bateria externa"] }
          ],
          tryIt: "Use a sua aplicação de mapas para obter direções a pé de sua casa até uma loja ou um parque perto. Toque em Iniciar e ouça a primeira indicação.",
          youCanNow: "obter e seguir direções com uma aplicação de mapas.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer Transportes públicos numa aplicação de mapas?", options: ["Só a pé", "Percursos de carro", "Autocarros e comboios", "Preços de táxi"], answer: 2, why: "Transportes públicos são, por exemplo, os autocarros e os comboios." },
            { objective: "O4", q: "Está a passear a pé e quer uma maneira fácil de voltar ao hotel. O que devia ter feito antes da viagem?", options: ["Guardado o hotel como lugar favorito na aplicação de mapas", "Escrito o nome do hotel na mão", "Desligado o telefone", "Apagado a aplicação de mapas"], answer: 0, why: "Guardar o hotel como favorito faz com que voltar seja só um toque." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Falar e ler noutra língua",
          minutes: 5,
          goal: "Usar uma aplicação de tradução para ler uma placa ou ter uma conversa simples.",
          text: [
            "Vai viajar para o estrangeiro, ou vai conhecer um novo familiar que fala outra língua? Aplicações de tradução como o Google Tradutor e a aplicação Traduzir do iPhone podem ajudar.",
            "Escreva ou diga uma frase e a aplicação mostra e diz a tradução. O modo de conversa deixa duas pessoas falar à vez. O modo de câmara deixa apontar o telefone para uma placa ou uma ementa e vê-la na sua língua.",
            "As traduções são boas mas não são perfeitas. Para assuntos importantes, como necessidades médicas ou alergias, leve um cartão na língua local escrito antes, e confirme-o com um funcionário do hotel ou da farmácia. Muitas aplicações deixam descarregar uma língua antes de ir, para funcionar sem internet."
          ],
          steps: ["Abra uma aplicação de tradução e escolha as duas línguas.", "Escreva ou diga a sua frase.", "Use o modo de conversa para falar à vez.", "Use o modo de câmara para placas e ementas.", "Descarregue a língua antes de viajar."],
          words: [["Traduzir", "passar palavras de uma língua para outra."], ["Sem internet (offline)", "funcionar sem ligação à internet."]],
          slides: [
            { title: "O seu tradutor de bolso", bullets: ["Google Tradutor ou a aplicação Traduzir", "Escreva, fale ou use a câmara"] },
            { title: "Três maneiras de o usar", bullets: ["Diga uma frase", "Modo de conversa: falar à vez", "Modo de câmara: placas e ementas"] },
            { title: "Vá preparado", bullets: ["Não é perfeito para assuntos médicos", "Leve um cartão escrito sobre alergias ou saúde", "Descarregue a língua antes de ir"] }
          ],
          tryIt: "Abra uma aplicação de tradução. Traduza \"Onde é a casa de banho, por favor?\" para uma língua de que possa precisar e ouça-a dita em voz alta.",
          youCanNow: "usar uma aplicação de tradução para falar, ler placas e ementas e preparar-se para as necessidades importantes.",
          quickCheck: [
            { objective: "O5", q: "O que faz o modo de câmara numa aplicação de tradução?", options: ["Tira fotografias da viagem", "Mostra uma placa ou uma ementa na sua língua quando aponta o telefone para ela", "Grava uma videochamada", "Encontra o seu hotel"], answer: 1, why: "O modo de câmara traduz o que a câmara do telefone vê, como placas e ementas." },
            { objective: "O5", q: "Vai estar num lugar sem internet. O que faz antes de ir?", options: ["Nada; a aplicação funciona sempre", "Compra só um dicionário em papel", "Descarrega a língua na aplicação", "Apaga a aplicação"], answer: 2, why: "Muitas aplicações deixam descarregar uma língua para funcionarem sem internet." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Viajar com segurança e em contacto com a família",
          minutes: 5,
          goal: "Partilhar os seus planos e a sua localização com a família e evitar burlas de viagem.",
          text: [
            "Diga à família onde está. Partilhe o seu roteiro com um familiar e pense em partilhar a localização do seu telefone durante a viagem (no iPhone, a aplicação Encontrar; no Android, a partilha de localização do Google Maps). Pode parar de partilhar quando quiser.",
            "Tenha cuidado com as burlas de viagem: sites de reservas falsos, chamadas a dizer que você \"ganhou\" uma viagem e mensagens sobre problemas com o seu voo que pedem para ligar para um número estranho ou para pagar. Reserve no site da própria companhia aérea, do hotel ou da companhia de comboios, ou com um agente de confiança, e verifique qualquer mensagem ligando para o número que está no site oficial deles.",
            "Guarde uma cópia da sua identificação e da lista de medicamentos num lugar seguro, separada dos originais, e não escreva dados bancários em Wi-Fi público de hotéis ou aeroportos."
          ],
          steps: ["Partilhe o seu roteiro com um familiar.", "Ligue a partilha de localização durante a viagem, se quiser.", "Reserve só em sites oficiais ou com agentes de confiança.", "Verifique as mensagens de viagem pelo número oficial da companhia.", "Não faça operações bancárias em Wi-Fi público."],
          words: [["Partilha de localização", "deixar as pessoas que escolhe verem num mapa onde está o seu telefone."], ["Wi-Fi público", "internet sem fios gratuita em lugares como hotéis e aeroportos, que outras pessoas também usam."]],
          slides: [
            { title: "Mantenha a família informada", bullets: ["Partilhe o seu roteiro", "Partilhe a sua localização durante a viagem", "Pare de partilhar quando quiser"] },
            { title: "Burlas de viagem", bullets: ["Sites de reservas falsos", "\"Ganhou uma viagem!\"", "Mensagens sobre problemas no voo com números estranhos"] },
            { title: "Viaje com segurança", bullets: ["Reserve em sites oficiais", "Ligue para números dos sites oficiais", "Nada de operações bancárias em Wi-Fi público"] }
          ],
          tryIt: "Tarefa final: termine o seu plano de viagem de três dias, com um ritmo confortável e tempo para descansar, a sua lista do que levar com os medicamentos e a identificação, e três dados que verificou em sites oficiais. Partilhe o plano com um familiar.",
          youCanNow: "planear uma viagem com a IA, verificá-la, preparar a bagagem, encontrar o caminho e viajar com segurança e em contacto com a família.",
          quickCheck: [
            { objective: "O6", q: "O que faz a partilha de localização?", options: ["Mostra a toda a gente na internet onde você está", "Deixa os familiares que escolhe verem onde está o seu telefone", "Reserva o seu hotel", "Liga o GPS para desconhecidos"], answer: 1, why: "A partilha de localização mostra onde está o seu telefone às pessoas que escolhe, e pode parar quando quiser." },
            { objective: "O6", q: "Um site oferece o seu hotel a metade do preço se pagar hoje por transferência bancária. O que faz?", options: ["Paga depressa antes que acabe", "Envia os seus dados bancários", "Pergunta ao site se é verdadeiro", "Reserva no site do próprio hotel ou com um agente de confiança"], answer: 3, why: "Os sites de reservas falsos são comuns; reserve só em sites oficiais ou com agentes de confiança." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Na estrada",
        questions: [
          { objective: "O4", q: "Numa aplicação de mapas, depois de escolher aonde ir, toca em:", options: ["Partilhar palavra-passe", "Apagar", "Câmara", "Direções e depois Iniciar"], answer: 3, why: "Direções e Iniciar começam as indicações faladas." },
          { objective: "O4", q: "Porque guardar o seu hotel como favorito?", options: ["Voltar é só um toque", "Fica mais barato o quarto", "Cancela a reserva", "Envia a sua palavra-passe"], answer: 0, why: "Os favoritos tornam rápido o caminho de volta." },
          { objective: "O5", q: "O modo de câmara numa aplicação de tradução deixa:", options: ["Ligar para casa", "Tirar selfies", "Apontar para uma placa ou ementa e lê-la na sua língua", "Pagar as refeições"], answer: 2, why: "Traduz o texto que a câmara vê." },
          { objective: "O5", q: "Para uma alergia alimentar grave no estrangeiro, o melhor plano é:", options: ["Adivinhar", "Confiar só na aplicação na hora", "Não dizer nada", "Levar um cartão escrito na língua local e confirmá-lo com os funcionários"], answer: 3, why: "As aplicações de tradução não são perfeitas para necessidades médicas." },
          { objective: "O6", q: "Uma SMS diz que o seu voo tem um problema e pede para ligar para um número na mensagem. Você:", options: ["Paga logo", "Liga para o número da mensagem", "Liga antes para o número no site oficial da companhia aérea", "Envia o número do seu cartão"], answer: 2, why: "Os números oficiais são seguros; os números nas mensagens podem ser burlas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: A IA como Companheira de Viagem",
    questions: [
      { objective: "O1", q: "Um assistente de IA pode ajudar numa viagem:", options: ["Comprando bilhetes sem você", "Fazendo o rascunho de um plano dia a dia", "Garantindo os preços", "Fazendo a sua mala"], answer: 1, why: "Faz rascunhos de planos que você depois ajusta e verifica." },
      { objective: "O1", q: "Dizer à IA o seu ritmo e as suas necessidades ajuda-a a:", options: ["Fazer um plano que se adapta a você", "Cobrar menos", "Reservar hotéis", "Ligar à família"], answer: 0, why: "Os detalhes tornam o plano realista." },
      { objective: "O1", q: "\"Acessível\" quer dizer:", options: ["Fácil de usar por pessoas com pouca mobilidade, audição ou visão", "Caro", "Longe", "Fechado"], answer: 0, why: "Os lugares acessíveis são fáceis de usar por todos." },
      { objective: "O2", q: "Os planos de viagem da IA podem ter:", options: ["Só dados perfeitos", "Horários desatualizados ou lugares fechados", "O seu passaporte", "Bilhetes verdadeiros"], answer: 1, why: "A IA pode estar errada ou desatualizada." },
      { objective: "O2", q: "Uma boa pergunta a fazer à IA sobre o seu plano é:", options: ["\"Reserve tudo agora.\"", "\"Qual é a minha palavra-passe?\"", "\"O que devo confirmar neste plano?\"", "\"Pague por mim.\""], answer: 2, why: "Mostra os dados que deve verificar." },
      { objective: "O2", q: "Onde verifica as regras de identificação para voar nos EUA?", options: ["Numa SMS de burla de viagem", "Num anúncio que aparece no ecrã", "Numa publicação nas redes sociais", "tsa.gov"], answer: 3, why: "A TSA define as regras de identificação nos aeroportos." },
      { objective: "O2", q: "Um cartão REAL ID costuma ter:", options: ["Só um código de barras", "Nenhuma fotografia", "Uma estrela no canto", "A sua palavra-passe"], answer: 2, why: "A estrela marca os cartões que cumprem as regras REAL ID." },
      { objective: "O2", q: "Além do REAL ID, uma identificação aceite para voos nos EUA é:", options: ["Um passaporte", "Um cartão da biblioteca", "Um talão de compras", "Um cartão de visita"], answer: 0, why: "A TSA aceita o passaporte." },
      { objective: "O3", q: "Uma lista do que levar organizada por grupos pode ter partes para:", options: ["Nada", "Só sapatos", "Só lanches", "Documentos, medicamentos, roupa e aparelhos eletrónicos"], answer: 3, why: "Organizar por grupos torna a lista fácil de verificar." },
      { objective: "O3", q: "Os medicamentos devem ir:", options: ["Soltos na mala do porão", "Na bagagem de mão, nas embalagens originais", "Em casa", "Na bagagem de um amigo"], answer: 1, why: "Leve-os consigo e bem identificados." },
      { objective: "O3", q: "Quem pode aconselhá-lo sobre viajar com medicamentos?", options: ["Um site qualquer", "O seu farmacêutico", "Um anúncio que aparece no ecrã", "Um desconhecido"], answer: 1, why: "Os farmacêuticos conhecem os medicamentos." },
      { objective: "O4", q: "O GPS deixa o seu telefone:", options: ["Tirar fotografias", "Traduzir línguas", "Pagar contas", "Saber onde você está num mapa"], answer: 3, why: "O GPS encontra a sua localização." },
      { objective: "O4", q: "\"Transportes públicos\" numa aplicação de mapas quer dizer:", options: ["Autocarros e comboios", "Só a pé", "Avião", "Só de carro"], answer: 0, why: "São os transportes para todos." },
      { objective: "O4", q: "As direções gastam bateria, por isso leve:", options: ["Uma segunda identificação", "Palavras-passe a mais", "Um carregador ou uma bateria externa", "Uma máquina fotográfica"], answer: 2, why: "A navegação gasta a bateria." },
      { objective: "O5", q: "O modo de conversa numa aplicação de tradução:", options: ["Desliga o som", "Liga para casa", "Reserva hotéis", "Deixa duas pessoas falar à vez"], answer: 3, why: "Traduz nos dois sentidos." },
      { objective: "O5", q: "Descarregar uma língua antes de ir deixa a aplicação funcionar:", options: ["Mais depressa, só com Wi-Fi", "Só em casa", "Sem internet (offline)", "Nunca"], answer: 2, why: "As línguas descarregadas funcionam sem internet." },
      { objective: "O6", q: "A partilha de localização deixa:", options: ["Desconhecidos seguirem você", "Os familiares que escolhe verem onde está o seu telefone", "Os hotéis cobrarem mais", "As companhias aéreas cancelarem voos"], answer: 1, why: "Só as pessoas que escolhe a podem ver." },
      { objective: "O6", q: "Uma chamada diz que ganhou uma viagem grátis mas tem de pagar uma taxa. Isto é:", options: ["Provavelmente uma burla", "Um prémio verdadeiro", "Uma regra dos impostos", "Normal"], answer: 0, why: "Prémios que pedem taxas são burlas." },
      { objective: "O6", q: "A maneira mais segura de reservar uma viagem é:", options: ["Em sites oficiais ou com agentes de confiança", "Em links de SMS inesperadas", "Em anúncios que aparecem no ecrã", "Enviando cartões-presente"], answer: 0, why: "Os sites oficiais evitam as burlas de reservas falsas." },
      { objective: "O6", q: "Em Wi-Fi público num aeroporto, evite:", options: ["Ler as notícias", "Escrever dados bancários", "Ver o tempo", "Ver mapas"], answer: 1, why: "O Wi-Fi público pode ser usado por outras pessoas." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Plano confortável",
        objective: "O1",
        notYet: "Não há plano dia a dia, ou há atividades demais sem descanso.",
        meets: "Um plano de três dias, dia a dia, a um ritmo confortável e com tempo para descansar.",
        exceeds: "O plano também indica lugares para sentar ou acesso fácil onde for preciso."
      },
      {
        name: "Lista do que levar",
        objective: "O3",
        notYet: "Não há lista, ou faltam os medicamentos ou a identificação.",
        meets: "Uma lista do que levar organizada por grupos, com os medicamentos e a identificação.",
        exceeds: "Indica que os medicamentos e a identificação vão na bagagem de mão, com uma lista dos medicamentos e o número do médico."
      },
      {
        name: "Dados verificados",
        objective: "O2",
        notYet: "Menos de três dados verificados, ou verificados só com a IA.",
        meets: "Três dados verificados em sites oficiais, como o tsa.gov e o site do próprio lugar.",
        exceeds: "Sabe dizer de que site veio cada dado e corrigiu o que estava errado."
      },
      {
        name: "Partilhado com a família",
        objective: "O6",
        notYet: "O plano não foi partilhado.",
        meets: "O plano foi partilhado com um familiar.",
        exceeds: "Também combinou a partilha de localização durante a viagem ou uma hora para dar notícias."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem uma viagem ou um passeio de um dia com o seu plano da IA em 60 dias (inquérito de seguimento)",
      "Alunos que dizem ter verificado dados de viagem em sites oficiais ou evitado uma burla de viagem",
      "Alunos que começam outro curso de Seniors and Technology em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, uma aplicação de mapas (Google Maps ou Apple Maps) e uma aplicação de tradução",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Papel e caneta, ou uma nota no telefone, para o plano e a lista do que levar",
      "Cerca de 60 minutos no total, em sessões curtas e calmas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Deixe cada aluno planear uma viagem verdadeira ou um passeio de um dia de que goste; isso dá sentido à prática.",
      "Mostre num ecrã grande como verificar um dado no tsa.gov e no site do próprio lugar.",
      "Pratique as direções com uma pequena caminhada perto do local, para os alunos ouvirem as indicações faladas.",
      "Lembre aos alunos que as perguntas sobre medicamentos são para o farmacêutico, e que não devem fazer operações bancárias em Wi-Fi público.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
