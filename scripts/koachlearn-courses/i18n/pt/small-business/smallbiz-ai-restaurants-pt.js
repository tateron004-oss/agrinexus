"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-restaurants.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FDA_ALLERGENS = { name: "FDA: Alergias alimentares (os nove principais alergénios alimentares, em inglês)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Food Code, o código alimentar (em inglês)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC: Regra sobre avaliações e testemunhos de consumidores, perguntas e respostas (em inglês)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "IA para Restaurantes",
  skills: "Escrever descrições do menu, Fazer uma tabela de alergénios a partir das receitas, Fazer listas de preparação e de encomendas, Preparar horários do pessoal, Responder a avaliações, Planear pratos do dia",
  outcome: "usar a IA para gerir o trabalho de escritório de um pequeno restaurante ou de uma carrinha de comida: escrever descrições do menu, fazer uma tabela de alergénios a partir das suas próprias receitas e verificá-la, fazer listas de preparação e de encomendas a partir das suas vendas, preparar um horário justo para o pessoal e responder a avaliações com honestidade.",
  about: [
    "Este curso é para donos, gerentes e cozinheiros de pequenos restaurantes, cafés, carrinhas de comida, serviços de catering e cozinhas caseiras. Muitos dos nossos alunos gerem restaurantes de família ou de minorias, onde o dono também cozinha, faz as encomendas e atende o telefone.",
    "Você vai usar um assistente de IA gratuito e uma folha de cálculo para poupar tempo a escrever, a planear e com a papelada. As regras de segurança alimentar e de alergénios vêm de fontes oficiais e dos serviços de saúde locais, não da IA; este curso mostra-lhe onde procurar.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um kit do restaurante: descrições do menu para cinco pratos, uma tabela de alergénios para esses cinco pratos feita a partir das suas receitas verdadeiras e dos rótulos dos ingredientes (verificada por você com os nove principais alergénios da FDA), uma lista de preparação e uma lista de encomendas para uma semana com base nas suas vendas, um rascunho do horário do pessoal e respostas a uma avaliação boa e a uma má.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos, gerentes e cozinheiros de pequenos restaurantes, cafés, carrinhas de comida, serviços de catering e cozinhas caseiras, muitos deles de família ou de minorias, onde o dono também cozinha, faz as encomendas e atende o telefone.",
    startingPoint: "Sabem cozinhar, gerir um turno e receber pedidos. Muitos usam um telefone e um sistema de caixa (POS), mas têm pouca ou nenhuma experiência com assistentes de IA ou fórmulas de folhas de cálculo.",
    gap: "Escrever, planear e tratar da papelada tiram horas que o dono não tem. Os alunos precisam de usar a IA para poupar esse tempo, mantendo certas e honestas as informações sobre alergénios, as regras de trabalho e as avaliações, porque um erro pode fazer mal a um cliente ou violar uma regra.",
    constraints: [
      "Tempo: os donos fazem turnos longos, por isso as lições duram cerca de 5 minutos cada",
      "Aparelhos: muitas vezes um telefone ou um único computador partilhado no escritório",
      "As regras de segurança alimentar e de alergénios vêm da FDA e dos serviços de saúde locais, não da IA",
      "As regras de trabalho sobre pausas, horas extraordinárias e menores dependem do estado e da cidade",
      "Privacidade: nada de números da Segurança Social, salários com nomes ou notas privadas sobre trabalhadores nas ferramentas de IA"
    ],
    prerequisites: "Nenhum. Quem nunca usou assistentes de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os ingredientes e o modo de preparação verdadeiros de um prato", action: "escrever uma descrição curta para o menu com a ajuda da IA e tirar tudo o que não for verdade", standard: "com cada ingrediente igual ao da sua receita" },
    { id: "O2", condition: "Usando as suas próprias receitas e os rótulos do que compra", action: "fazer uma tabela de alergénios que marque os nove principais alergénios da FDA em cada prato", standard: "com cada prato verificado por uma segunda pessoa" },
    { id: "O3", condition: "Com a média de vendas por dia e as porções por fornada", action: "criar uma lista de preparação e uma lista de encomendas semanais numa folha de cálculo", standard: "com as fornadas arredondadas para cima e ajustadas a eventos, fins de semana e ao tempo" },
    { id: "O4", condition: "Com o seu horário de abertura, os turnos e o primeiro nome e a disponibilidade dos trabalhadores", action: "preparar um horário semanal do pessoal com a IA e verificar a cobertura, a justiça e as regras de trabalho", standard: "sem nenhum dado privado dos trabalhadores no pedido" },
    { id: "O5", condition: "Com uma pergunta de um cliente ou uma avaliação boa ou má", action: "escrever uma resposta calma e honesta com a ajuda da IA", standard: "com todas as afirmações verdadeiras e sem avaliações falsas ou pagas" },
    { id: "O6", condition: "Com ingredientes a mais ou da época", action: "planear um prato do dia semanal, calcular o custo por prato e definir um preço com lucro", standard: "com os alergénios verificados e o prato do dia acrescentado à lista de preparação" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Menu, alergénios e listas da cozinha",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever descrições do menu",
          minutes: 5,
          goal: "Escrever descrições do menu curtas, apetitosas e certas com a ajuda da IA.",
          text: [
            "Uma boa descrição do menu diz o que o prato tem, como é cozinhado e porque é especial, em 10 a 25 palavras. \"Arroz jollof cozinhado devagar em molho de tomate e pimento, servido com banana-pão frita e coxa de frango grelhada.\"",
            "Dê à IA os ingredientes e o modo de preparação verdadeiros: \"Escreva uma descrição de 20 palavras para o menu: caril de cabrito, com osso, cozinhado devagar durante 4 horas com piripíri (scotch bonnet), tomilho e batata, servido com arroz branco. Palavras calorosas e simples.\" Peça três versões e escolha uma.",
            "Verifique-a. A IA pode acrescentar ingredientes que você não usa (\"com cajus\") ou palavras como \"biológico\" ou \"feito em casa\" que não são verdade. Um ingrediente errado no menu pode fazer mal a alguém com alergia."
          ],
          steps: ["Escreva os ingredientes e o modo de preparação verdadeiros.", "Peça à IA três descrições curtas.", "Escolha uma e verifique cada ingrediente.", "Tire tudo o que não for verdade, como \"biológico\"."],
          words: [["Descrição do menu", "o texto curto debaixo do nome de um prato que diz aos clientes o que é."]],
          slides: [
            { title: "Uma boa descrição", bullets: ["O que o prato tem", "Como é cozinhado", "Porque é especial, em 10 a 25 palavras"] },
            { title: "Dê à IA a receita verdadeira", bullets: ["Ingredientes e modo de preparação", "Peça três versões"] },
            { title: "Verifique cada palavra", bullets: ["Nenhum ingrediente que você não usa", "Nada de \"biológico\" ou \"feito em casa\" se não for verdade", "Ingredientes errados podem fazer mal a clientes com alergias"] }
          ],
          tryIt: "Escreva descrições do menu para cinco dos seus pratos com a ajuda da IA. Verifique cada ingrediente com a sua receita.",
          youCanNow: "escrever descrições do menu certas e apetitosas com a ajuda da IA.",
          quickCheck: [
            { objective: "O1", q: "Que três coisas diz uma boa descrição do menu?", options: ["O que o prato tem, como é cozinhado e porque é especial", "O preço, o nome do cozinheiro e o tamanho do prato", "As calorias, o fornecedor e a data", "Só o nome do prato em letras maiúsculas"], answer: 0, why: "A lição diz que uma boa descrição fala do que o prato tem, de como é cozinhado e de porque é especial." },
            { objective: "O1", q: "A IA escreve \"tortilhas biológicas feitas em casa\", mas você compra tortilhas normais. O que faz?", options: ["Deixa ficar porque soa melhor", "Tira \"feitas em casa\" e \"biológicas\" porque não são verdade", "Acrescenta mais palavras como \"artesanal\"", "Pede à IA para escrever em letras maiúsculas"], answer: 1, why: "As palavras do menu têm de ser verdade, por isso tira tudo o que a IA acrescentou e você não faz." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer uma tabela de alergénios com segurança",
          minutes: 6,
          goal: "Fazer uma tabela de alergénios a partir das suas próprias receitas e rótulos, verificada por você.",
          text: [
            "A FDA (a agência dos Estados Unidos para os alimentos e medicamentos) indica nove principais alergénios alimentares: leite, ovos, peixe, crustáceos (como camarão e caranguejo), frutos de casca rija (como amêndoas e cajus), amendoins, trigo, soja e sésamo. Os clientes com alergias contam consigo para saber o que tem cada prato.",
            "Faça uma tabela: os pratos de cima para baixo, os nove alergénios de lado a lado no topo. Preencha-a a partir das suas receitas verdadeiras E dos rótulos dos ingredientes de tudo o que compra, porque os molhos, as misturas de especiarias e o pão muitas vezes escondem alergénios. A IA pode ajudar a montar a tabela e lembrar-lhe que ingredientes costumam ter um alergénio, mas não conhece os produtos dos seus fornecedores. Quem conhece é você, com os seus rótulos.",
            "Atualize a tabela sempre que uma receita ou um fornecedor mudar. Ensine o pessoal a dizer \"Vou confirmar\" e a perguntar à cozinha, nunca a adivinhar. Os seus serviços de saúde locais e o Food Code da FDA têm regras sobre segurança alimentar e alergénios; verifique o que se aplica onde você está."
          ],
          steps: ["Faça a lista dos seus pratos e de todos os ingredientes de cada um.", "Leia o rótulo de cada ingrediente comprado.", "Marque cada um dos nove alergénios em cada prato.", "Peça a uma segunda pessoa para verificar a tabela.", "Atualize-a quando as receitas ou os fornecedores mudarem."],
          words: [["Alergénio", "um alimento que pode causar uma reação alérgica grave em algumas pessoas."], ["Contacto cruzado", "quando um alergénio passa para outro alimento através de superfícies, óleo ou utensílios partilhados."], ["Food Code", "o modelo de regras de segurança alimentar da FDA que muitos estados e condados dos EUA adotam."]],
          slides: [
            { title: "Os nove principais alergénios da FDA", bullets: ["Leite, ovos, peixe, crustáceos", "Frutos de casca rija, amendoins, trigo", "Soja, sésamo"] },
            { title: "Faça a tabela com factos", bullets: ["Pratos de cima para baixo, alergénios de lado a lado", "As suas receitas E todos os rótulos dos ingredientes", "A IA monta a tabela; não conhece os seus fornecedores"] },
            { title: "Mantenha-a certa", bullets: ["Uma segunda pessoa verifica", "Atualize quando receitas ou fornecedores mudarem", "O pessoal nunca adivinha: \"Vou confirmar\""] },
            { title: "As regras onde você está", bullets: ["Os seus serviços de saúde locais", "O Food Code da FDA"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Peça à IA para montar uma tabela de alergénios vazia para cinco pratos, com os nove alergénios como colunas. Preencha-a você mesmo a partir das suas receitas e rótulos e depois peça a alguém para a verificar.",
          youCanNow: "fazer e manter uma tabela de alergénios a partir das suas próprias receitas e rótulos.",
          quickCheck: [
            { objective: "O2", q: "O que fica no topo da tabela de alergénios nesta lição?", options: ["Os seus preços", "Os nomes dos seus fornecedores", "Os nove principais alergénios", "Os nomes do seu pessoal"], answer: 2, why: "Os pratos ficam de cima para baixo e os nove alergénios ficam no topo." },
            { objective: "O2", q: "O seu fornecedor muda a marca da mistura de especiarias que usa. O que faz?", options: ["Nada, as misturas de especiarias nunca têm alergénios", "Pergunta à IA se a nova marca tem alergénios e confia nela", "Espera até um cliente perguntar", "Lê o novo rótulo e atualiza a tabela"], answer: 3, why: "A IA não conhece os produtos dos seus fornecedores; você atualiza a tabela a partir do novo rótulo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Listas de preparação e de encomendas a partir das vendas",
          minutes: 5,
          goal: "Fazer uma lista de preparação e uma lista de encomendas semanais a partir dos seus números de vendas.",
          text: [
            "Preparar demais desperdiça comida; preparar de menos quer dizer \"desculpe, já acabou\". Comece por quantas unidades de cada prato vende por dia. O seu sistema de caixa (POS) muitas vezes mostra isto, ou faça uma contagem simples.",
            "Numa folha de cálculo: Prato, Média vendida por dia, Porções por fornada, Fornadas precisas. Depois faça a lista dos ingredientes por porção para ver o que encomendar. Peça ajuda à IA com as fórmulas: \"Escreva uma fórmula do Google Sheets para arredondar para cima as fornadas precisas: média vendida a dividir pelas porções por fornada.\" (=ROUNDUP(B2/C2,0) é uma maneira.)",
            "Ajuste com o que você sabe: fins de semana, eventos, o tempo, feriados. A IA pode sugerir o formato da lista de preparação e uma lista de verificação, mas são os seus números e a sua experiência que definem as quantidades."
          ],
          steps: ["Obtenha a média vendida por dia de cada prato.", "Acrescente as porções por fornada e calcule as fornadas com ROUNDUP.", "Faça a lista dos ingredientes por porção e some a encomenda.", "Ajuste para fins de semana, eventos e o tempo."],
          words: [["Lista de preparação", "uma lista do que a cozinha tem de preparar antes do serviço."], ["Nível de stock ideal (par level)", "a quantidade de um produto que quer ter no início do serviço."], ["Fornada", "uma vez em que se cozinha uma receita e que dá um número certo de porções."]],
          slides: [
            { title: "Desperdício ou falta", bullets: ["Preparar demais desperdiça comida", "Preparar de menos desilude os clientes", "Comece pelas vendas de cada prato"] },
            { title: "Uma folha de preparação simples", bullets: ["Prato, vendidos por dia, porções por fornada", "Fornadas = ROUNDUP(vendidos / porções, 0)", "Ingredientes por porção -> lista de encomendas"] },
            { title: "Use o que você sabe", bullets: ["Fins de semana, eventos, o tempo", "A IA ajuda no formato; você define as quantidades"] }
          ],
          tryIt: "Faça uma folha de preparação para cinco pratos com vendidos por dia, porções por fornada e uma fórmula ROUNDUP para as fornadas. Transforme-a numa lista de encomendas para uma semana.",
          youCanNow: "fazer listas de preparação e de encomendas a partir dos seus próprios números de vendas.",
          quickCheck: [
            { objective: "O3", q: "Que problema causa preparar demais?", options: ["Comida desperdiçada", "Um prato acabar", "Um horário de abertura mais longo", "Uma renda mais alta"], answer: 0, why: "A lição diz que preparar demais desperdiça comida e preparar de menos faz com que um prato acabe." },
            { objective: "O3", q: "Há um grande festival na cidade este fim de semana. O que faz à sua lista de preparação?", options: ["Usa exatamente os números de sempre", "Aumenta as quantidades com base no que sabe", "Deixa a IA definir as quantidades sem mudanças", "Deixa de fazer a lista de preparação"], answer: 1, why: "Você ajusta para eventos, fins de semana e o tempo, porque é a sua experiência que define as quantidades." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Menu, alergénios e listas da cozinha",
        questions: [
          { objective: "O1", q: "A descrição do menu feita pela IA acrescenta \"com cajus\", mas o seu prato não tem. O que faz?", options: ["Deixa ficar; soa bem", "Tira", "Acrescenta cajus", "Ignora"], answer: 1, why: "Ingredientes errados podem fazer mal a clientes com alergias e enganam toda a gente." },
          { objective: "O2", q: "Quantos principais alergénios alimentares indica a FDA?", options: ["Vinte", "Três", "Catorze", "Nove"], answer: 3, why: "A FDA indica nove, incluindo o sésamo." },
          { objective: "O2", q: "De onde vem a informação sobre alergénios da sua tabela?", options: ["Das suas receitas e dos rótulos do que compra", "De um palpite da IA", "Do menu de um concorrente", "Dos clientes"], answer: 0, why: "Só as suas receitas e os rótulos mostram o que está realmente na sua comida." },
          { objective: "O2", q: "Um cliente pergunta se um prato tem sésamo e você não tem a certeza. Você:", options: ["Pergunta à IA", "Adivinha que não", "Diz \"Vou confirmar\" e pergunta à cozinha e vê a tabela", "Diz que não há problema"], answer: 2, why: "Nunca adivinhe sobre alergénios." },
          { objective: "O3", q: "Vende 22 por dia e uma fornada dá 8. Com ROUNDUP, quantas fornadas?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2,75, arredondado para cima dá 3." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pessoal, clientes e crescimento",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar um horário do pessoal",
          minutes: 5,
          goal: "Preparar um horário semanal com a ajuda da IA e depois verificá-lo com as suas regras.",
          text: [
            "Dê à IA os factos: o seu horário de abertura, quantas pessoas precisa em cada turno, a disponibilidade e as funções de cada trabalhador, e as suas regras. \"Prepare um horário semanal para a minha taqueria, aberta das 11 às 9, de terça a domingo. Preciso de 2 cozinheiros e 2 pessoas na sala ao almoço e ao jantar. Aqui estão as disponibilidades: [só os primeiros nomes].\"",
            "Verifique você mesmo o rascunho. Confirme que é justo, que cobre as horas de mais movimento e que cumpre as leis do trabalho sobre pausas, horas extraordinárias e menores. Essas regras dependem do seu estado e da sua cidade; verifique no serviço do trabalho do seu estado ou com um profissional. A IA não as conhece de forma fiável.",
            "Não coloque números da Segurança Social, salários com nomes nem notas privadas sobre os trabalhadores nas ferramentas de IA. Os primeiros nomes e a disponibilidade chegam."
          ],
          steps: ["Faça a lista dos turnos e das pessoas precisas.", "Faça a lista dos trabalhadores pelo primeiro nome, com a disponibilidade e as funções.", "Peça à IA um rascunho.", "Verifique a justiça, a cobertura e as regras de trabalho do seu estado.", "Afixe o horário final."],
          words: [["Disponibilidade", "os dias e as horas em que um trabalhador pode trabalhar."], ["Horas extraordinárias", "horas a mais que, pela lei do trabalho, podem ter de ser mais bem pagas."], ["Cobertura", "ter pessoal suficiente em cada turno."]],
          slides: [
            { title: "Dê os factos à IA", bullets: ["Horário e pessoal preciso em cada turno", "Primeiros nomes, disponibilidade e funções"] },
            { title: "Você verifica o rascunho", bullets: ["Justo e cobre as horas de mais movimento", "Pausas, horas extraordinárias e menores: veja as regras do seu estado"] },
            { title: "Dados dos trabalhadores ficam privados", bullets: ["Nada de números da Segurança Social ou salários com nomes", "Os primeiros nomes e a disponibilidade chegam"] }
          ],
          tryIt: "Prepare o horário da próxima semana com a IA usando os primeiros nomes e a disponibilidade. Verifique a cobertura e a justiça e escreva onde vai verificar as regras do seu estado sobre pausas e horas extraordinárias.",
          youCanNow: "preparar um horário do pessoal com a IA e verificá-lo com as suas necessidades e as regras de trabalho.",
          quickCheck: [
            { objective: "O4", q: "De que factos precisa a IA para preparar um horário?", options: ["Os números da Segurança Social e os salários dos trabalhadores", "Só o nome do restaurante", "O seu horário, as pessoas precisas em cada turno e a disponibilidade e as funções dos trabalhadores", "Notas privadas sobre cada trabalhador"], answer: 2, why: "O horário, as necessidades de cada turno, a disponibilidade e as funções chegam; os dados privados ficam de fora." },
            { objective: "O4", q: "O rascunho da IA põe um jovem de 16 anos num turno da noite. O que faz?", options: ["Afixa-o como está", "Pergunta à IA se é legal e confia na resposta", "Tira o trabalhador do horário para sempre", "Verifica as regras do seu estado sobre menores e corrige o rascunho"], answer: 3, why: "As regras sobre menores dependem do seu estado, por isso você verifica-as e corrige o horário você mesmo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Responder a avaliações e a mensagens de clientes",
          minutes: 5,
          goal: "Responder a avaliações e a perguntas comuns dos clientes depressa e com honestidade.",
          text: [
            "Os clientes perguntam sempre as mesmas coisas: horário, estacionamento, reservas, catering, opções vegan, alergias. Use a IA para transformar as suas respostas verdadeiras em respostas curtas que pode colar. Nas perguntas sobre alergias, remeta sempre para a sua tabela de alergénios verificada e para o pessoal.",
            "Nas avaliações: agradeça as boas em poucas palavras e fale do prato. Nas más, mantenha a calma, peça desculpa pela experiência, diga o que está a corrigir e convide a pessoa a contactá-lo. Não discuta em público. Se estiver chateado, deixe a IA escrever uma versão calma e depois verifique que todas as afirmações são verdadeiras.",
            "Nunca escreva avaliações falsas nem pague só por avaliações positivas. A regra da FTC (a agência dos EUA que protege os consumidores) sobre avaliações de consumidores proíbe isso, incluindo avaliações falsas escritas pela IA."
          ],
          steps: ["Escreva respostas verdadeiras às perguntas mais comuns dos clientes.", "Peça à IA respostas curtas, prontas a colar.", "Prepare as respostas às avaliações com calma com a IA e depois verifique-as.", "Nunca invente nem compre avaliações."],
          words: [["Avaliação", "a nota e o comentário públicos de um cliente."], ["Catering", "fornecer comida para um evento fora do serviço normal no restaurante."]],
          slides: [
            { title: "Respostas prontas a colar", bullets: ["Horário, estacionamento, reservas, catering", "Perguntas sobre alergias: use a sua tabela verificada"] },
            { title: "Responder a avaliações", bullets: ["Boa: agradeça e fale do prato", "Má: calma, peça desculpa, corrija, convide a contactar", "Verifique que todas as afirmações são verdadeiras"] },
            { title: "Nada de avaliações falsas", bullets: ["A regra da FTC proíbe avaliações falsas", "Incluindo as escritas pela IA"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Peça à IA para preparar respostas a uma avaliação boa e a uma má (verdadeiras ou de exemplo, como comida fria numa sexta-feira cheia). Faça com que todas as afirmações sejam verdadeiras e soem como você.",
          youCanNow: "responder a perguntas e avaliações de clientes depressa, com calma e com honestidade.",
          quickCheck: [
            { objective: "O5", q: "Como deve responder a uma avaliação boa?", options: ["Agradecer em poucas palavras e falar do prato", "Ignorá-la", "Oferecer dinheiro por outra avaliação", "Escrever uma longa história sobre o seu restaurante"], answer: 0, why: "A lição diz para agradecer as boas avaliações em poucas palavras e falar do prato." },
            { objective: "O5", q: "Está zangado com uma avaliação má e injusta. O que faz?", options: ["Discute com o cliente em público", "Deixa a IA preparar uma resposta calma e depois verifica que todas as afirmações são verdadeiras", "Publica avaliações boas falsas para a esconder", "Apaga a página do seu negócio"], answer: 1, why: "A IA pode ajudá-lo a manter a calma e você verifica que a resposta é verdadeira; nunca discute em público nem inventa avaliações." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Planear pratos do dia com o que já tem",
          minutes: 5,
          goal: "Planear um prato do dia semanal que reduza o desperdício e mantenha o lucro.",
          text: [
            "Os pratos do dia podem vender o stock a mais antes de se estragar, testar pratos novos e trazer de volta os clientes habituais. Veja o que encomendou a mais ou o que é da época.",
            "Pergunte à IA: \"Tenho banana-pão, feijão preto e coxas de frango a mais esta semana. Sugira três pratos do dia que combinem com o meu menu das Caraíbas e usem sobretudo estes ingredientes.\" Escolha um, calcule o custo (ingredientes por prato) e defina um preço com lucro.",
            "Escreva a descrição do prato do dia, verifique os alergénios com o método da sua tabela, acrescente-o à lista de preparação e publique-o com uma fotografia do prato verdadeiro."
          ],
          steps: ["Faça a lista dos ingredientes a mais ou da época.", "Peça à IA ideias de pratos do dia que combinem com o seu menu.", "Calcule o custo por prato e defina um preço com lucro.", "Verifique os alergénios e acrescente-o à lista de preparação.", "Publique com uma fotografia verdadeira."],
          words: [["Custo por prato", "o custo dos ingredientes de uma porção."], ["Percentagem do custo da comida", "o custo por prato a dividir pelo preço no menu, vezes 100."]],
          slides: [
            { title: "Porquê pratos do dia", bullets: ["Usar o stock a mais antes de se estragar", "Testar pratos novos", "Trazer de volta os clientes habituais"] },
            { title: "A IA para ideias", bullets: ["Faça a lista do que tem a mais", "Peça pratos do dia que combinem com o seu menu"] },
            { title: "Antes de publicar", bullets: ["Calcule o custo por prato e defina um preço", "Verifique os alergénios; junte à lista de preparação", "Use uma fotografia verdadeira"] }
          ],
          tryIt: "Tarefa final: faça o kit do seu restaurante: cinco descrições do menu, uma tabela de alergénios a partir das suas receitas e rótulos, as listas de preparação e de encomendas de uma semana, um rascunho do horário, duas respostas a avaliações e um prato do dia com o seu custo por prato.",
          youCanNow: "usar a IA com segurança no planeamento, na papelada e na comunicação com os clientes do seu restaurante.",
          quickCheck: [
            { objective: "O6", q: "Qual é uma razão para fazer um prato do dia?", options: ["Subir os preços de tudo", "Gastar horas do pessoal", "Vender o stock a mais antes de se estragar", "Evitar verificar os alergénios"], answer: 2, why: "Os pratos do dia podem vender o stock a mais, testar pratos novos e trazer de volta os clientes habituais." },
            { objective: "O6", q: "A IA sugere três pratos do dia com a sua banana-pão a mais. O que faz a seguir?", options: ["Publica os três já, com fotografias de banco de imagens", "Pede à IA para definir o preço", "Não calcula o custo porque é só para uma semana", "Escolhe um, calcula o custo por prato e define um preço com lucro"], answer: 3, why: "Você calcula o custo por prato e define um preço com lucro, depois verifica os alergénios e junta-o à lista de preparação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pessoal, clientes e crescimento",
        questions: [
          { objective: "O4", q: "Onde verifica as regras sobre pausas e horas extraordinárias?", options: ["No serviço do trabalho do seu estado ou com um profissional", "No rascunho da IA", "Com um cliente", "Numa publicação nas redes sociais"], answer: 0, why: "As regras de trabalho dependem do seu estado e da sua cidade." },
          { objective: "O4", q: "Que informações dos trabalhadores devem ir no pedido do horário à IA?", options: ["Moradas de casa", "Números da Segurança Social", "Salários com nomes", "Primeiros nomes e disponibilidade"], answer: 3, why: "Só o que é preciso, nada de privado." },
          { objective: "O5", q: "Um cliente envia uma mensagem a perguntar se um prato não tem amendoim. A sua resposta deve basear-se em:", options: ["Um palpite da IA", "A sua tabela de alergénios verificada e o pessoal", "A fotografia do menu", "Só na sua memória"], answer: 1, why: "As respostas sobre alergénios vêm da sua tabela verificada." },
          { objective: "O5", q: "Pela regra da FTC, o que é proibido?", options: ["Escrever avaliações falsas com a IA", "Agradecer a quem fez uma avaliação", "Responder a uma avaliação má", "Pedir aos clientes avaliações honestas"], answer: 0, why: "As avaliações falsas, incluindo as escritas pela IA, são proibidas." },
          { objective: "O6", q: "Um prato do dia usa $3.50 de ingredientes e vende-se a $14. Qual é a percentagem do custo da comida?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3,50 / 14 = 0,25, ou seja 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Restaurantes",
    questions: [
      { objective: "O1", q: "Uma boa descrição do menu tem cerca de:", options: ["200 palavras", "10 a 25 palavras", "Uma letra", "Uma página inteira"], answer: 1, why: "As descrições curtas leem-se depressa." },
      { objective: "O1", q: "O que dá à IA para escrever uma descrição do menu?", options: ["Nada", "Os seus dados bancários", "Os nomes dos clientes", "Os ingredientes e o modo de preparação verdadeiros"], answer: 3, why: "Factos verdadeiros dão descrições certas." },
      { objective: "O1", q: "Porque deve verificar cada ingrediente que a IA escreve?", options: ["Não é preciso", "Para ficar mais longo", "Só por causa da ortografia", "Um ingrediente errado pode fazer mal a um cliente com alergia"], answer: 3, why: "Estar certo é uma questão de segurança." },
      { objective: "O2", q: "Qual destes é um dos nove principais alergénios da FDA?", options: ["Arroz", "Sésamo", "Milho", "Frango"], answer: 1, why: "O sésamo foi acrescentado como o nono." },
      { objective: "O2", q: "Porque deve ler o rótulo de cada ingrediente comprado?", options: ["Por diversão", "Para ver o preço", "Os molhos e as misturas podem esconder alergénios", "Não é preciso"], answer: 2, why: "Os alergénios escondidos são comuns nos ingredientes já preparados." },
      { objective: "O2", q: "Quando deve atualizar a sua tabela de alergénios?", options: ["Quando uma receita ou um fornecedor mudar", "Uma vez a cada dez anos", "Nunca", "Só depois de uma queixa"], answer: 0, why: "As mudanças podem trazer alergénios." },
      { objective: "O2", q: "O que é o contacto cruzado?", options: ["Uma chamada telefónica", "Dois funcionários a conversar", "Um alergénio que passa para outro alimento através de utensílios ou óleo partilhados", "Uma mudança no menu"], answer: 2, why: "As superfícies partilhadas podem espalhar alergénios." },
      { objective: "O2", q: "Quem define as regras de segurança alimentar do seu restaurante?", options: ["Os seus serviços de saúde locais, muitas vezes com base no Food Code da FDA", "A IA", "Os seus clientes", "Um site de avaliações"], answer: 0, why: "São os serviços oficiais que definem as regras." },
      { objective: "O3", q: "Uma lista de preparação é:", options: ["Um horário do pessoal", "O que a cozinha tem de preparar antes do serviço", "Uma avaliação", "Um formulário de impostos"], answer: 1, why: "Ela orienta a preparação na cozinha." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) dá:", options: ["Os alergénios", "O lucro", "As horas do pessoal", "As fornadas inteiras precisas, arredondadas para cima"], answer: 3, why: "Arredonda para cima o número de fornadas." },
      { objective: "O3", q: "Quem define as quantidades finais da preparação?", options: ["Você, a partir dos seus números e da sua experiência", "Só a IA", "Um fornecedor", "Os clientes"], answer: 0, why: "A IA ajuda no formato; você decide as quantidades." },
      { objective: "O3", q: "Qual é uma boa razão para ajustar a preparação?", options: ["Nenhuma", "Um tipo de letra novo", "A IA diz para o fazer", "Um evento local este fim de semana"], answer: 3, why: "Os eventos mudam a procura." },
      { objective: "O4", q: "O rascunho do horário da IA dá 7 turnos a um trabalhador. Você:", options: ["Ignora", "Afixa-o", "Verifica a justiça e as regras de trabalho e depois corrige-o", "Pede ao trabalhador para se despedir"], answer: 2, why: "Você verifica todos os rascunhos." },
      { objective: "O4", q: "A IA é uma fonte fiável sobre a lei das horas extraordinárias do seu estado?", options: ["Sim, sempre", "Não, verifique no serviço do trabalho do estado", "Só aos fins de semana", "Só para menores"], answer: 1, why: "A lei do trabalho precisa de uma fonte oficial." },
      { objective: "O5", q: "Uma avaliação má queixa-se de comida fria. Uma boa resposta:", options: ["Oferece dinheiro por uma avaliação melhor", "Discute em público", "Partilha os dados do cliente", "Pede desculpa, diz o que está a corrigir e convida a contactar"], answer: 3, why: "Respostas calmas e honestas criam confiança." },
      { objective: "O5", q: "Pagar aos clientes só se deixarem 5 estrelas é:", options: ["Obrigatório", "Marketing inteligente", "Proibido pela regra da FTC sobre avaliações", "Aceitável"], answer: 2, why: "As recompensas ligadas a opiniões positivas são proibidas." },
      { objective: "O6", q: "Um bom uso de um prato do dia é:", options: ["Usar o stock a mais antes de se estragar", "Esconder comida velha", "Subir todos os preços", "Saltar a verificação dos alergénios"], answer: 0, why: "Os pratos do dia reduzem o desperdício." },
      { objective: "O6", q: "O que é o custo por prato?", options: ["O preço da loiça", "O custo dos ingredientes de uma porção", "A renda", "Uma gorjeta"], answer: 1, why: "É o custo dos ingredientes por prato." },
      { objective: "O6", q: "Antes de publicar um prato do dia deve:", options: ["Não definir o preço", "Verificar os alergénios e acrescentá-lo à lista de preparação", "Usar uma fotografia de banco de imagens de outro prato", "Prometer que é biológico"], answer: 1, why: "A segurança e o planeamento vêm primeiro." },
      { objective: "O6", q: "A percentagem do custo da comida é:", options: ["O custo por prato a dividir pelo preço no menu, vezes 100", "A renda a dividir pelas vendas", "As gorjetas vezes o pessoal", "O preço mais o imposto"], answer: 0, why: "Mostra quanto do preço são ingredientes." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Descrições do menu certas",
        objective: "O1",
        notYet: "Uma descrição tem um ingrediente ou uma afirmação que não está no prato.",
        meets: "Cinco descrições curtas, com cada ingrediente igual ao da receita.",
        exceeds: "Cada uma também diz como o prato é cozinhado e porque é especial."
      },
      {
        name: "Tabela de alergénios verificada",
        objective: "O2",
        notYet: "A tabela foi copiada da IA ou falta um prato ou um alergénio.",
        meets: "Os cinco pratos marcados para os nove alergénios a partir das receitas e dos rótulos, verificados por uma segunda pessoa.",
        exceeds: "Indica que produtos comprados escondem alergénios e quando a tabela foi atualizada pela última vez."
      },
      {
        name: "Listas de preparação e de encomendas",
        objective: "O3",
        notYet: "As quantidades são adivinhadas ou as fornadas não estão arredondadas para cima.",
        meets: "Listas de preparação e de encomendas de uma semana feitas a partir das vendas, com as fornadas arredondadas para cima.",
        exceeds: "As quantidades estão ajustadas a um evento, a um fim de semana ou ao tempo, indicado pelo nome."
      },
      {
        name: "Horário justo e verificado",
        objective: "O4",
        notYet: "O horário deixa um turno de muito movimento com pouca gente ou usou dados privados dos trabalhadores.",
        meets: "Cobre todos os turnos de forma justa, usa só os primeiros nomes e indica onde as regras de trabalho foram verificadas.",
        exceeds: "Também indica as pausas e as regras para menores, a partir da fonte oficial do estado."
      },
      {
        name: "Respostas honestas às avaliações",
        objective: "O5",
        notYet: "Uma resposta discute, faz uma promessa falsa ou oferece uma recompensa por avaliações.",
        meets: "Uma avaliação boa e uma má respondidas com calma e só com afirmações verdadeiras.",
        exceeds: "A resposta à avaliação má indica uma correção real e convida o cliente a entrar em contacto."
      },
      {
        name: "Prato do dia com custo calculado",
        objective: "O6",
        notYet: "O prato do dia não tem custo por prato nem preço.",
        meets: "Um prato do dia com custo por prato, um preço com lucro e os alergénios verificados.",
        exceeds: "Também foi acrescentado à lista de preparação e usa stock a mais ou da época."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que dizem usar a tabela de alergénios e as listas de preparação na cozinha em 30 dias (inquérito de seguimento)",
      "Donos que dizem ter menos desperdício de comida ou menos pratos a acabar em 30 dias",
      "Alunos que começam outro curso de pequenos negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito e uma folha de cálculo gratuita, como o Google Sheets",
      "As suas próprias receitas, os rótulos dos ingredientes e os números de vendas de uma semana",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos donos para trazerem receitas e rótulos verdadeiros, ou use exemplos, para que a tabela de alergénios seja feita com informação real.",
      "Sublinhe que as regras sobre alergénios, segurança alimentar e trabalho vêm da FDA, dos serviços de saúde locais e do serviço do trabalho do estado, não da IA.",
      "Lembre aos alunos que usem só os primeiros nomes do pessoal e nunca escrevam números da Segurança Social nem salários com nomes.",
      "Marque as sessões fora das horas das refeições, por exemplo a meio da tarde.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
