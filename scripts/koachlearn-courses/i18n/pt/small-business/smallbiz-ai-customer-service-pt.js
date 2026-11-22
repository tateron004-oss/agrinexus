"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-customer-service.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers (perguntas e respostas sobre a regra das avaliações e testemunhos de clientes)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Final Rule Banning Fake Reviews and Testimonials (regra final que proíbe avaliações e testemunhos falsos, agosto de 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "IA para o Atendimento e a Comunicação com Clientes",
  skills: "Escrever as perguntas frequentes dos clientes, Criar modelos de resposta, Definir a voz da marca, Responder a avaliações, Lidar com clientes zangados, Manter privados os dados dos clientes",
  outcome: "montar um kit de atendimento ao cliente para o seu negócio com a ajuda da IA: uma lista de perguntas frequentes com as suas dez perguntas mais comuns, cinco modelos de resposta na voz da sua marca, e uma resposta calma a um cliente zangado e a uma avaliação pública, tudo verificado por você antes de usar.",
  about: [
    "Este curso é para donos e funcionários de pequenos negócios que respondem a clientes por telefone, SMS, e-mail, mensagens nas redes sociais e avaliações na internet: restaurantes, salões, lojas, serviços de limpeza, serviços de reparação e carrinhas de comida.",
    "Você vai usar um assistente de IA gratuito para responder mais depressa às mesmas perguntas, manter as respostas simpáticas e sempre iguais, responder bem às avaliações e acalmar clientes zangados sem dar mais do que pode. Quem decide cada resposta é você.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. As suas tarefas juntam-se num kit de atendimento ao cliente que pode usar no dia seguinte."
  ],
  finalTask: "Monte o seu kit de atendimento ao cliente num só documento: a voz da sua marca (três palavras e uma lista do que fazer e do que não fazer), uma lista de perguntas frequentes com as suas dez perguntas mais comuns e respostas verificadas, cinco modelos de resposta com espaços para preencher, uma resposta a um cliente zangado real ou de exemplo, e uma resposta a uma avaliação pública. Todos os dados são verificados por você e nenhum dado privado de clientes foi colocado na ferramenta de IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Donos e funcionários de pequenos negócios que respondem a clientes por telefone, SMS, e-mail, redes sociais e avaliações na internet: restaurantes, salões, lojas, serviços de limpeza, serviços de reparação e carrinhas de comida.",
    startingPoint: "Respondem todos os dias a perguntas de clientes, muitas vezes as mesmas, e às vezes respondem a avaliações. Usam pouco a IA para as respostas e não têm por escrito perguntas frequentes, voz da marca nem modelos.",
    gap: "Responder às mesmas perguntas uma a uma leva tempo, as respostas podem soar diferentes de pessoa para pessoa, e uma queixa ou avaliação mal tratada pode fazer perder clientes. Os donos precisam de um kit de atendimento verificado e sempre igual, feito com a ajuda da IA, sendo honestos, cumprindo a regra da FTC sobre avaliações e mantendo privados os dados dos clientes.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um smartphone ou computador usado entre um cliente e outro",
      "Tempo: lições de cerca de 5 minutos que cabem num dia de trabalho cheio",
      "Regras: a regra da FTC proíbe avaliações positivas falsas ou pagas; queixas de ferimentos vão para um profissional ou para a seguradora",
      "Privacidade: nenhum nome de cliente, dados de cartão ou contactos nas ferramentas de IA"
    ],
    prerequisites: "O curso \"Introdução à IA para Pequenos Negócios\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as perguntas mais comuns dos seus clientes", action: "escrever uma lista de perguntas frequentes com a ajuda da IA", standard: "com dez perguntas e cada resposta verificada com o que você faz de verdade" },
    { id: "O2", condition: "Sabendo como quer que o seu negócio soe", action: "descrever a voz da sua marca e fazer a IA escrever nessa voz", standard: "com três palavras de voz e uma lista do que fazer e do que não fazer colocada no início da conversa" },
    { id: "O3", condition: "Usando um assistente de IA", action: "criar cinco modelos de resposta reutilizáveis com espaços para preencher", standard: "na voz da sua marca, verificados e guardados onde os pode copiar depressa" },
    { id: "O4", condition: "Com uma avaliação positiva ou negativa na internet", action: "escrever uma resposta honesta e calma com a ajuda da IA", standard: "com todas as frases verdadeiras e sem avaliações falsas ou pagas" },
    { id: "O5", condition: "Com um cliente zangado e os seus limites para reembolsos e para refazer o trabalho", action: "escrever uma resposta usando o método LAST", standard: "oferecendo só uma solução que daria de verdade" },
    { id: "O6", condition: "Com a sua lista de perguntas frequentes, os seus modelos e as suas respostas", action: "juntar um kit de atendimento ao cliente que mantém privados os dados dos clientes", standard: "num só documento, com todos os dados verificados e sem dados reais de clientes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Respostas do dia a dia mais rápidas e simpáticas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar as perguntas mais comuns e criar as perguntas frequentes",
          minutes: 5,
          goal: "Fazer a lista das perguntas mais comuns dos clientes e transformá-las em perguntas frequentes verificadas.",
          text: [
            "A maioria dos negócios responde vezes sem conta às mesmas dez perguntas: horário, preços, estacionamento, entregas, marcações, devoluções, formas de pagamento, tempo de espera, alergias ou materiais, e \"vocês fazem...?\".",
            "Primeiro escreva-as de memória e a partir das suas SMS e mensagens. Depois dê a um assistente de IA as suas respostas verdadeiras, mesmo mal escritas, e peça-lhe para as transformar em perguntas frequentes claras: \"Aqui estão as minhas respostas em rascunho. Faça uma lista curta de perguntas frequentes para o site do meu salão de unhas. Simpática, com palavras simples.\"",
            "Verifique cada resposta com o que você faz de verdade. As perguntas frequentes no seu site ou num cartaz são uma promessa aos clientes."
          ],
          steps: ["Faça a lista das dez perguntas que mais ouve.", "Escreva a sua resposta verdadeira a cada uma, em rascunho.", "Peça à IA para as transformar em perguntas frequentes claras.", "Verifique cada resposta e depois publique-as no seu site, na sua página social ou no balcão."],
          words: [["Perguntas frequentes (FAQ)", "em inglês FAQ, \"frequently asked questions\": uma lista de perguntas comuns e das suas respostas."]],
          slides: [
            { title: "As mesmas dez perguntas", bullets: ["Horário, preços, estacionamento, entregas", "Marcações, devoluções, formas de pagamento", "\"Vocês fazem...?\""] },
            { title: "Criar as perguntas frequentes", bullets: ["Faça a lista das perguntas", "Escreva as suas respostas verdadeiras em rascunho", "Peça à IA para as deixar claras e simpáticas"] },
            { title: "Verifique antes de publicar", bullets: ["As perguntas frequentes são uma promessa", "Cada resposta tem de ser igual ao que você faz de verdade"] }
          ],
          tryIt: "Escreva as dez perguntas mais comuns dos seus clientes com uma resposta em rascunho para cada uma. Peça a um assistente de IA para fazer com elas uma lista curta e simpática de perguntas frequentes e depois verifique cada resposta.",
          youCanNow: "criar perguntas frequentes verificadas a partir das perguntas reais dos seus clientes.",
          quickCheck: [
            { objective: "O1", q: "Porque é que as perguntas frequentes são como uma promessa aos clientes?", options: ["Porque os clientes vão confiar no que dizem", "Porque são um contrato legal", "Porque foi a IA que as escreveu", "Porque só são publicadas uma vez"], answer: 0, why: "Os clientes agem com base nas suas perguntas frequentes, por isso cada resposta tem de ser verdadeira." },
            { objective: "O1", q: "As perguntas frequentes da IA dizem que oferece estacionamento grátis, mas não oferece. O que faria?", options: ["Deixava assim para atrair clientes", "Corrigia a resposta para ficar igual ao que faz de verdade", "Acrescentava um pequeno \"talvez\"", "Pedia à IA para apagar todas as respostas"], answer: 1, why: "As respostas vêm das suas regras reais, verificadas por você." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir a voz da sua marca",
          minutes: 4,
          goal: "Descrever como o seu negócio soa e fazer a IA escrever nessa voz.",
          text: [
            "A voz da sua marca é a maneira como o seu negócio soa. Uma taqueria familiar pode ser calorosa e brincalhona; um contabilista que trata de impostos, calmo e profissional; uma barbearia, descontraída e como um bom vizinho.",
            "Escolha três palavras para a sua voz e escreva uma pequena lista do que fazer e do que não fazer: \"Fazer: usar o primeiro nome, agradecer, ser curto. Não fazer: usar calão, escrever tudo em maiúsculas, prometer horas.\"",
            "Dê isto à IA no início de uma conversa: \"Escreva nesta voz em todas as respostas.\" Agora cada resposta soa como o mesmo negócio, seja quem for da sua equipa a enviá-la."
          ],
          steps: ["Escolha três palavras para a maneira como quer soar.", "Escreva três coisas a fazer e três a não fazer.", "Cole-as no início de uma conversa.", "Peça uma resposta de exemplo e veja se soa bem."],
          words: [["Voz da marca", "a maneira como um negócio soa nas suas mensagens."], ["Consistente", "sempre igual, de cada vez."]],
          slides: [
            { title: "Como soa o seu negócio?", bullets: ["Taqueria: calorosa, brincalhona", "Contabilista: calmo, profissional", "Barbearia: descontraída, como um bom vizinho"] },
            { title: "Escreva-a", bullets: ["Três palavras de voz", "Três coisas a fazer e três a não fazer"] },
            { title: "Use-a com a IA", bullets: ["Cole-a no início da conversa", "Cada resposta soa como o seu negócio"] }
          ],
          tryIt: "Escreva as suas três palavras de voz e o que fazer e não fazer. Cole-as num assistente de IA e peça uma resposta a \"Estão abertos ao domingo?\" Soa como você?",
          youCanNow: "descrever a voz da sua marca e ter respostas da IA que soam como o seu negócio.",
          quickCheck: [
            { objective: "O2", q: "O que é a voz da marca?", options: ["O número de telefone do seu negócio", "As cores do seu logótipo", "A maneira como o seu negócio soa nas mensagens", "Uma saudação gravada"], answer: 2, why: "A voz da marca é a maneira como o seu negócio soa quando fala com os clientes." },
            { objective: "O2", q: "Quer que todas as respostas da IA soem como a sua padaria. O que faria?", options: ["Esperava que ela adivinhasse", "Pedia um tom novo de cada vez", "Escrevia tudo em maiúsculas para parecer entusiasmado", "Colocava as suas palavras de voz e o que fazer e não fazer no início da conversa"], answer: 3, why: "Dar a sua voz à IA no início ajuda cada resposta a segui-la." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Modelos de resposta para mensagens, SMS e e-mail",
          minutes: 5,
          goal: "Criar modelos de resposta reutilizáveis com espaços para preencher.",
          text: [
            "Um modelo de resposta é uma resposta pronta com espaços em branco. Você preenche os espaços de cada vez, por isso responde em segundos sem escrever tudo de novo.",
            "Modelos úteis: confirmação de marcação, lembrete de consulta, encomenda pronta, vamos atrasar, desculpe mas acabou um produto, e obrigado depois de uma visita. Peça à IA: \"Usando a voz da minha marca, escreva cinco modelos curtos de SMS para um negócio de lavagem de carros ao domicílio. Use [nome do cliente], [data] e [hora] como espaços em branco.\"",
            "Guarde os modelos nas notas do telefone ou nos atalhos de texto, ou na sua ferramenta de marcações se ela deixar guardar respostas. Nunca cole na IA nomes, números de telefone ou dados de cartão de clientes reais para os criar; use os espaços em branco."
          ],
          steps: ["Escolha cinco situações a que responde muitas vezes.", "Peça à IA um modelo curto para cada uma, com os espaços entre parênteses retos.", "Verifique as palavras e os dados.", "Guarde-os onde os pode copiar depressa."],
          words: [["Modelo de resposta", "uma resposta guardada com espaços em branco que preenche de cada vez."], ["Espaço para preencher", "um espaço como [nome do cliente] que mais tarde preenche com os dados reais."]],
          slides: [
            { title: "Responda em segundos", bullets: ["Um modelo é uma resposta pronta com espaços em branco", "Preencha [nome do cliente], [data], [hora]"] },
            { title: "Cinco modelos úteis", bullets: ["Confirmação e lembrete de marcação", "Encomenda pronta; vamos atrasar", "Desculpe, acabou; obrigado"] },
            { title: "Guarde-os seguros e à mão", bullets: ["Notas do telefone, atalhos de texto ou respostas guardadas", "Use espaços em branco, não dados reais de clientes"] }
          ],
          tryIt: "Peça à IA cinco modelos de resposta na voz da sua marca com [espaços em branco]. Verifique-os e guarde-os onde os pode copiar depressa.",
          youCanNow: "criar e guardar modelos de resposta que o deixam responder aos clientes depressa e sempre da mesma maneira.",
          quickCheck: [
            { objective: "O3", q: "O que é um modelo de resposta?", options: ["Uma mensagem que volta a usar, com espaços para preencher", "Uma resposta para uma só vez", "Uma avaliação de um cliente", "Uma lista de preços"], answer: 0, why: "Um modelo é uma resposta pronta com espaços em branco que preenche de cada vez." },
            { objective: "O3", q: "Quer um modelo para \"a sua encomenda está pronta\". O que daria à IA?", options: ["O nome e o número de telefone de um cliente real", "O número do seu cartão", "Espaços como [nome do cliente] e [hora]", "Nada"], answer: 2, why: "Os espaços em branco deixam os dados privados de fora e tornam o modelo reutilizável." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Respostas do dia a dia mais rápidas e simpáticas",
        questions: [
          { objective: "O1", q: "O que quer dizer FAQ?", options: ["Resposta rápida com preço", "Perguntas frequentes", "Uma pergunta grátis", "Questionário da resposta final"], answer: 1, why: "As perguntas frequentes (FAQ) são uma lista de perguntas comuns e respostas." },
          { objective: "O1", q: "A IA transformou as suas respostas em rascunho em perguntas frequentes. E a seguir?", options: ["Publicá-las sem ler", "Acrescentar mais promessas", "Apagá-las", "Verificar cada resposta com o que faz de verdade"], answer: 3, why: "As perguntas frequentes são uma promessa aos clientes." },
          { objective: "O2", q: "O que é a voz da marca?", options: ["A maneira como o seu negócio soa nas mensagens", "A voz do dono quando canta", "O seu número de telefone", "A cor do seu logótipo"], answer: 0, why: "A voz da marca é a maneira como você soa." },
          { objective: "O3", q: "Qual é um bom espaço para preencher num modelo?", options: ["A sua palavra-passe", "O número do cartão do cliente", "[nome do cliente]", "Uma morada de casa real"], answer: 2, why: "Os espaços para preencher deixam os dados privados fora das ferramentas de IA." },
          { objective: "O3", q: "Porque usar modelos de resposta?", options: ["Para cobrar mais", "Para evitar os clientes", "Para responder depressa e sempre da mesma maneira", "Para esconder os preços"], answer: 2, why: "Os modelos poupam tempo e mantêm a mesma qualidade nas respostas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Avaliações, conversas difíceis e confiança",
      lessons: [
        {
          objectives: ["O4"],
          title: "Responder a avaliações na internet, boas e más",
          minutes: 5,
          goal: "Escrever respostas honestas a avaliações positivas e negativas, e cumprir a regra da FTC sobre avaliações.",
          text: [
            "Os clientes leem a maneira como você responde às avaliações. Agradeça as boas avaliações em poucas palavras, dizendo o nome do prato ou do serviço. Nas más avaliações, fique calmo: agradeça, peça desculpa pela experiência, corrija o que puder e convide a pessoa a contactá-lo diretamente. Não discuta em público nem partilhe os dados privados da pessoa.",
            "A IA ajuda a escrever uma resposta calma quando você está chateado. Cole o texto da avaliação (não os dados privados de quem a escreveu) e peça: \"Escreva uma resposta curta e educada. Peça desculpa, diga que voltámos a formar a nossa equipa sobre o tempo de espera e convide-os a ligar-nos.\" Diga só o que é verdade.",
            "Nunca escreva avaliações falsas, não as compre e não use a IA para as fazer. A Federal Trade Commission (FTC), dos Estados Unidos, tem uma regra em vigor desde outubro de 2024 que proíbe avaliações e testemunhos falsos, incluindo os feitos com IA, e proíbe pagar por avaliações só se forem positivas. Leia a página de perguntas e respostas da FTC para saber o que é permitido."
          ],
          steps: ["Leia a avaliação duas vezes e espere se estiver zangado.", "Peça à IA um rascunho curto e educado.", "Confirme que todas as frases são verdadeiras.", "Convide os clientes insatisfeitos a contactá-lo diretamente.", "Nunca escreva, compre ou invente avaliações."],
          words: [["Avaliação", "a nota e o comentário públicos de um cliente sobre o seu negócio."], ["FTC", "Federal Trade Commission (Comissão Federal do Comércio): o serviço do governo dos Estados Unidos que protege os consumidores contra práticas comerciais injustas e enganosas."], ["Testemunho", "uma frase de um cliente a elogiar um negócio, usada na publicidade desse negócio."]],
          slides: [
            { title: "Boas avaliações", bullets: ["Agradeça e fale do que a pessoa gostou", "Seja curto e verdadeiro"] },
            { title: "Más avaliações", bullets: ["Fique calmo; espere se estiver zangado", "Agradeça, peça desculpa, corrija o que puder", "Convide a pessoa a contactá-lo diretamente"] },
            { title: "A regra da FTC sobre avaliações falsas", bullets: ["Proíbe avaliações falsas, incluindo as feitas com IA", "Proíbe pagar só por avaliações positivas", "Em vigor desde outubro de 2024: veja ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Encontre uma avaliação real do seu negócio (ou escreva uma má avaliação de exemplo sobre uma encomenda atrasada). Use a IA para fazer o rascunho de uma resposta calma, confirme que todas as frases são verdadeiras e mude-a para a sua voz.",
          youCanNow: "responder a boas e más avaliações com calma e honestidade, sem violar a regra da FTC sobre avaliações falsas.",
          quickCheck: [
            { objective: "O4", q: "Que prática com avaliações é proibida pela regra da FTC?", options: ["Responder a más avaliações", "Pagar aos clientes só se deixarem avaliações positivas", "Agradecer aos clientes pelas avaliações", "Pedir a todos os clientes avaliações honestas"], answer: 1, why: "Recompensar só as avaliações positivas é proibido pela regra da FTC." },
            { objective: "O4", q: "Uma avaliação dura deixa-o zangado. O que faria?", options: ["Respondia logo em maiúsculas", "Publicava uma boa avaliação falsa para equilibrar", "Pedia a amigos para discutirem com quem a escreveu", "Esperava, voltava a ler e escrevia uma resposta calma e verdadeira"], answer: 3, why: "Esperar ajuda a responder com calma e honestidade." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Acalmar um cliente zangado",
          minutes: 5,
          goal: "Usar um método simples de quatro passos, com a ajuda da IA, para responder a um cliente zangado.",
          text: [
            "Um método simples serve para a maioria das queixas: LAST, do inglês Listen, Apologize, Solve, Thank (Ouvir, Pedir desculpa, Resolver, Agradecer). Ouça a queixa toda, peça desculpa pela experiência, ofereça uma solução justa que pode dar de verdade e agradeça à pessoa por lhe ter dito.",
            "Decida os seus limites antes de precisar deles: quando dá um reembolso, refaz o trabalho, faz um desconto ou oferece um produto. A IA pode escrever o rascunho da mensagem, mas quem escolhe a solução é você. Não deixe a IA prometer uma coisa que você não aceitou.",
            "Se um cliente ameaçar, assediar ou falar de ferimentos, segurança ou de ir a tribunal, faça uma resposta curta, não admita culpa por escrito e fale com um profissional ou com a sua seguradora."
          ],
          steps: ["Ouvir: leia ou ouça a queixa toda.", "Pedir desculpa pela experiência.", "Resolver: ofereça uma solução justa dentro dos seus limites.", "Agradecer à pessoa por lhe ter dito.", "Peça à IA para fazer o rascunho e depois confirme que a promessa é uma que vai cumprir."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (Ouvir, Pedir desculpa, Resolver, Agradecer): um método para queixas."], ["Encaminhar", "passar um problema sério para o dono, um profissional ou uma seguradora."]],
          slides: [
            { title: "O método LAST", bullets: ["Listen: ouvir", "Apologize: pedir desculpa", "Solve: resolver", "Thank: agradecer"] },
            { title: "Defina primeiro os seus limites", bullets: ["Quando reembolsa, refaz ou dá desconto", "Quem escolhe a solução é você, não a IA"] },
            { title: "Quando encaminhar", bullets: ["Ameaças ou assédio", "Ferimentos, segurança ou queixas em tribunal", "Seja curto; ligue a um profissional ou à seguradora"] }
          ],
          tryIt: "Escreva em três linhas os seus limites para reembolsos e para refazer o trabalho. Depois use a IA para fazer o rascunho de uma resposta LAST a: \"O meu bolo veio com o sabor errado e a festa ficou estragada.\" Confirme que a solução é uma que daria de verdade.",
          youCanNow: "responder a um cliente zangado com o método LAST e uma solução justa e real.",
          quickCheck: [
            { objective: "O5", q: "Qual é o primeiro passo do método LAST?", options: ["Resolver", "Agradecer", "Ouvir", "Pedir desculpa"], answer: 2, why: "O LAST começa por ouvir o cliente." },
            { objective: "O5", q: "A resposta da IA a um cliente zangado oferece o reembolso total e mais um mês de serviço grátis, mais do que os seus limites permitem. O que faria?", options: ["Mudava-a para uma solução dentro dos seus limites", "Enviava-a como está", "Tirava o pedido de desculpa", "Ignorava o cliente"], answer: 0, why: "Quem escolhe uma solução justa dentro dos limites que definiu é você, não a IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Privacidade, honestidade e o seu kit de atendimento ao cliente",
          minutes: 5,
          goal: "Juntar as suas ferramentas de atendimento e manter privados os dados dos clientes.",
          text: [
            "Os clientes confiam-lhe os nomes, os números de telefone, as moradas e às vezes os dados do cartão. Deixe isso fora das ferramentas de IA. Trabalhe com espaços para preencher e preencha você mesmo os dados reais no telefone ou no sistema de marcações.",
            "Se usar um chatbot no seu site ou nas mensagens, diga aos clientes que estão a falar com um ajudante automático e dê-lhes uma maneira de falar com uma pessoa. Reveja com frequência o que ele diz.",
            "Agora junte tudo num só documento: a voz da sua marca, as perguntas frequentes, os modelos, o método LAST com os seus limites e a sua resposta a avaliações. Partilhe-o com a sua equipa para que todos respondam da mesma maneira."
          ],
          steps: ["Confirme que todos os modelos usam espaços para preencher, não dados reais.", "Se usar um chatbot, diga que é automático e ofereça uma pessoa.", "Junte a voz, as perguntas frequentes, os modelos, os limites LAST e as respostas a avaliações num só documento.", "Partilhe-o com a sua equipa."],
          words: [["Chatbot", "um programa automático que responde a mensagens."], ["Dados dos clientes", "informações sobre os seus clientes, como nomes, números de telefone e encomendas."]],
          slides: [
            { title: "Mantenha privados os dados dos clientes", bullets: ["Na IA, nada de nomes com telefones, moradas ou cartões", "Use espaços para preencher; preencha você os dados"] },
            { title: "Se usar um chatbot", bullets: ["Diga que é automático", "Dê uma maneira de falar com uma pessoa", "Reveja as respostas dele com frequência"] },
            { title: "O seu kit de atendimento ao cliente", bullets: ["Voz da marca e perguntas frequentes", "Modelos e limites LAST", "Respostas a avaliações, partilhadas com a equipa"] }
          ],
          tryIt: "Tarefa final: junte num só documento a voz da sua marca, as dez perguntas frequentes, os cinco modelos, uma resposta a um cliente zangado e uma resposta a uma avaliação. Verifique todos os dados e tire qualquer dado real de clientes.",
          youCanNow: "fazer o seu atendimento ao cliente com um kit verificado, privado e sempre igual, feito com a ajuda da IA.",
          quickCheck: [
            { objective: "O6", q: "Porque partilhar o seu kit de atendimento com os funcionários?", options: ["Para poderem mudar os preços", "Para que todos respondam da mesma maneira", "Para poderem saltar a formação", "Para os clientes o poderem editar"], answer: 1, why: "Um kit partilhado mantém as respostas iguais em toda a equipa." },
            { objective: "O6", q: "Está a criar modelos e tem nas suas notas os dados do cartão de um cliente real. O que faria?", options: ["Colava-os na IA para ela perceber", "Usava-os como modelo de exemplo", "Partilhava-os com os funcionários no kit", "Deixava-os fora da ferramenta de IA e do kit"], answer: 3, why: "Os dados do cartão dos clientes têm de ficar fora das ferramentas de IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Avaliações, conversas difíceis e confiança",
        questions: [
          { objective: "O4", q: "Um cliente deixa uma avaliação de uma estrela sobre uma espera longa. Qual é a melhor resposta?", options: ["Agradecer, pedir desculpa, dizer o que está a corrigir e convidar a pessoa a contactá-lo", "Discutir que a pessoa está errada", "Publicar o número de telefone dela", "Ignorar para sempre"], answer: 0, why: "Respostas calmas e honestas criam confiança." },
          { objective: "O4", q: "Pela regra da FTC, o que NÃO é permitido?", options: ["Agradecer a quem fez a avaliação", "Responder a uma má avaliação", "Pedir a clientes satisfeitos que deixem avaliações honestas", "Usar a IA para escrever avaliações falsas de clientes"], answer: 3, why: "A regra da FTC proíbe avaliações falsas, incluindo as feitas com IA." },
          { objective: "O5", q: "O que quer dizer o S de LAST?", options: ["Sell (vender)", "Solve (resolver)", "Stop (parar)", "Smile (sorrir)"], answer: 1, why: "Listen, Apologize, Solve, Thank: ouvir, pedir desculpa, resolver, agradecer." },
          { objective: "O5", q: "Quem escolhe a solução para um cliente zangado?", options: ["Você, dentro dos limites que definiu", "A IA", "Só o cliente", "Um desconhecido na internet"], answer: 0, why: "A IA faz o rascunho; você decide a solução." },
          { objective: "O6", q: "O chatbot do seu site deve:", options: ["Fingir que é uma pessoa", "Pedir números de cartão na conversa", "Dizer que é automático e dar uma maneira de falar com uma pessoa", "Nunca ser verificado"], answer: 2, why: "A honestidade e um caminho até uma pessoa criam confiança." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Atendimento e a Comunicação com Clientes",
    questions: [
      { objective: "O1", q: "Qual é uma pergunta comum dos clientes para pôr nas perguntas frequentes?", options: ["Qual é a sua palavra-passe?", "Qual é o vosso horário?", "Qual é o seu número do banco?", "Quem são os donos dos seus fornecedores?"], answer: 1, why: "O horário é uma das perguntas mais comuns." },
      { objective: "O1", q: "De onde vêm as respostas das suas perguntas frequentes?", options: ["De avaliações ao acaso", "De palpites da IA", "Do site de um concorrente", "Das suas regras reais, escritas por você e tornadas claras pela IA"], answer: 3, why: "A IA só dá forma às suas respostas reais." },
      { objective: "O1", q: "Porque verificar as perguntas frequentes antes de as publicar?", options: ["Para ficarem mais compridas", "A IA está sempre certa", "Não é preciso", "São uma promessa aos clientes"], answer: 3, why: "Os clientes vão cobrar-lhe o que lá está." },
      { objective: "O2", q: "Três palavras de voz para uma padaria familiar podem ser:", options: ["Zangada, apressada, fria", "Calorosa, alegre, simples", "Secreta, confusa, comprida", "Legal, rígida, dura"], answer: 1, why: "As palavras de voz descrevem como quer soar." },
      { objective: "O2", q: "Onde põe a voz da sua marca para a IA a usar?", options: ["Num recibo", "Na sua palavra-passe", "No início da conversa", "Em lado nenhum"], answer: 2, why: "Colá-la no início guia todas as respostas." },
      { objective: "O2", q: "Um \"não fazer\" numa lista da voz da marca pode ser:", options: ["Escrever tudo em maiúsculas", "Agradecer", "Usar o primeiro nome", "Ser curto"], answer: 0, why: "Escrever tudo em maiúsculas pode parecer que está a gritar." },
      { objective: "O3", q: "Qual é um bom modelo de resposta?", options: ["\"Envie-me a sua palavra-passe.\"", "\"Olá Jane Smith, 555-0101, cartão 4111...\"", "\"Olá [nome do cliente], a sua encomenda está pronta para levantar às [hora].\"", "\"Não.\""], answer: 2, why: "Usa espaços para preencher e é claro." },
      { objective: "O3", q: "Onde pode guardar os modelos para os usar depressa?", options: ["Nas notas do telefone, atalhos de texto ou respostas guardadas", "Só na cabeça", "Na caixa de correio de um cliente", "Em público nas redes sociais"], answer: 0, why: "Os modelos guardados copiam-se depressa." },
      { objective: "O3", q: "Para criar modelos com a IA, deve dar-lhe:", options: ["Nomes e números reais de clientes", "Espaços como [data] e [hora]", "Dados de cartão", "As suas palavras-passe"], answer: 1, why: "Use espaços para preencher, não dados reais." },
      { objective: "O4", q: "Uma boa avaliação elogia o seu \"melhor rabo de boi da cidade\". Uma boa resposta:", options: ["Oferece dinheiro por outra avaliação", "Ignora-a", "Pede a morada da pessoa", "Agradece e fala do rabo de boi"], answer: 3, why: "Um agradecimento curto e pessoal funciona melhor." },
      { objective: "O4", q: "Pagar aos clientes só se deixarem avaliações positivas é:", options: ["Proibido pela regra da FTC", "Obrigatório", "Uma boa ideia", "Só aceitável ao fim de semana"], answer: 0, why: "A regra proíbe recompensas que dependem de uma opinião positiva." },
      { objective: "O4", q: "Quando uma avaliação zangada o deixa chateado, deve primeiro:", options: ["Escrever boas avaliações falsas", "Responder logo em maiúsculas", "Publicar os dados do cliente", "Esperar e voltar a ler antes de responder"], answer: 3, why: "Respostas calmas são respostas melhores." },
      { objective: "O5", q: "No método LAST, o primeiro passo é:", options: ["Rir", "Sair", "Ouvir", "Mentir"], answer: 2, why: "Primeiro ouça a queixa toda." },
      { objective: "O5", q: "Porque definir limites para reembolsos e para refazer o trabalho antes de uma queixa?", options: ["Para recusar toda a gente", "Para oferecer soluções justas que vai mesmo cumprir", "Para confundir os funcionários", "É a lei"], answer: 1, why: "Limites claros permitem decisões justas e rápidas." },
      { objective: "O5", q: "Um cliente diz que se feriu na sua loja. Você deve:", options: ["Publicar sobre isso na internet", "Fazer a IA admitir a culpa com detalhes", "Ignorar", "Fazer uma resposta curta e falar com um profissional ou com a sua seguradora"], answer: 3, why: "Ferimentos e queixas legais precisam de conselho profissional." },
      { objective: "O5", q: "A IA faz o rascunho de uma resposta que promete uma refeição grátis durante um ano. Você:", options: ["Acrescenta mais promessas", "Envia-a", "Tira essa promessa, a não ser que tenha mesmo aceitado isso", "Pede ao cliente para decidir"], answer: 2, why: "Prometa só o que vai cumprir." },
      { objective: "O6", q: "Os dados do cartão dos clientes devem ficar:", options: ["Fora das ferramentas de IA", "Colados nas conversas", "Publicados nas respostas", "Guardados nos modelos"], answer: 0, why: "Os dados do cartão são privados." },
      { objective: "O6", q: "Se usar um chatbot, os clientes devem poder:", options: ["Nunca falar com ninguém", "Falar com uma pessoa", "Pagar só com cartões-presente", "Usar só uma palavra"], answer: 1, why: "Um caminho até uma pessoa cria confiança." },
      { objective: "O6", q: "O seu kit de atendimento ao cliente inclui:", options: ["Palavras-passe", "Voz, perguntas frequentes, modelos, limites LAST e respostas a avaliações", "Números de cartão de clientes", "Avaliações falsas"], answer: 1, why: "Essas partes tornam o atendimento rápido e sempre igual." },
      { objective: "O6", q: "Porque partilhar o kit com os funcionários?", options: ["Para que todos respondam da mesma maneira", "Para os atrasar", "Para o esconder", "Não serve para nada"], answer: 0, why: "Responder sempre da mesma maneira cria confiança." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 3, 6, 8, 9, 10, 12, 13, 16]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Voz da marca", objective: "O2", notYet: "Sem palavras de voz ou sem lista do que fazer e não fazer.", meets: "Três palavras de voz e uma lista do que fazer e não fazer.", exceeds: "As respostas de exemplo seguem claramente a voz." },
      { name: "Perguntas frequentes verificadas", objective: "O1", notYet: "Menos de dez perguntas, ou uma resposta que não é verdadeira.", meets: "Dez perguntas comuns com respostas verificadas com o que faz de verdade.", exceeds: "As respostas são curtas e na voz da marca." },
      { name: "Modelos de resposta", objective: "O3", notYet: "Menos de cinco, ou modelos com dados reais de clientes.", meets: "Cinco modelos verificados com espaços para preencher.", exceeds: "Guardados onde os funcionários os podem copiar depressa." },
      { name: "Resposta a um cliente zangado", objective: "O5", notYet: "Na defensiva, ou oferece uma solução que não daria.", meets: "Segue o LAST e oferece uma solução dentro dos seus limites.", exceeds: "Os seus limites para reembolsos e para refazer o trabalho estão escritos no kit." },
      { name: "Resposta a uma avaliação", objective: "O4", notYet: "Discute, diz algo que não é verdade, ou falta.", meets: "Calma, honesta e na sua voz.", exceeds: "Diz o que está a corrigir e convida o cliente a contactá-lo." },
      { name: "Privacidade e dados", objective: "O6", notYet: "Dados reais de clientes no kit ou na conversa com a IA, ou dados não verificados.", meets: "Nenhum dado privado de clientes usado, e todos os dados verificados.", exceeds: "O kit explica como um chatbot, se for usado, diz que é automático e oferece uma pessoa." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Donos que usam as perguntas frequentes ou os modelos todas as semanas (inquérito de seguimento aos 30 dias)",
      "Donos que respondem a cada nova avaliação na internet no prazo de uma semana (inquérito de seguimento)",
      "Donos que dizem ter respostas mais rápidas ou melhores avaliações em 90 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou computador com internet",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Uma ferramenta de documentos gratuita, como o Google Docs ou o Microsoft Word, para o kit",
      "Uma lista de perguntas reais de clientes e os seus limites para reembolsos e para refazer o trabalho",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Peça aos donos que tragam as suas perguntas comuns reais e uma avaliação real ou de exemplo.",
      "Use só nomes de clientes de exemplo; nunca cole na IA mensagens reais de clientes com nomes ou números.",
      "Pratiquem o método LAST em pares, com uma queixa inventada, antes de escrever a resposta.",
      "Lembre aos donos que as queixas de ferimentos vão para um profissional ou para a seguradora, não para uma resposta da IA.",
      "Avalie o kit com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
