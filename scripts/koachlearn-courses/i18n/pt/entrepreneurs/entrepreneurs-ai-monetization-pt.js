"use strict";

// Koach Learn course (Portuguese translation of entrepreneurs/entrepreneurs-ai-monetization.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "entrepreneurs-ai-monetization-pt",
  lang: "pt",
  translationOf: "entrepreneurs-ai-monetization",
  category: "Entrepreneurs",
  name: "Estratégias para Ganhar Dinheiro com IA",
  skills: "Comparar formas de ganhar com IA, Escolher um modelo que combine com os seus pontos fortes, Definir o preço pelo valor, Criar um produto digital com IA, Criar receita recorrente, Reconhecer burlas de dinheiro fácil com IA",
  outcome: "comparar as principais formas de as empresas ganharem dinheiro com IA, escolher a que combina com as suas habilidades e os seus clientes, definir o preço de uma oferta pelo valor, criar um primeiro produto digital ou uma oferta recorrente e testá-la com um pequeno lançamento, evitando os esquemas de enriquecimento rápido com IA.",
  about: [
    "\"Como ganho dinheiro com IA?\" é uma das perguntas mais procuradas na internet, e muitas das respostas são burlas. Este curso dá-lhe um mapa honesto e prático: formas reais de os pequenos negócios ganharem com IA, como escolher uma, como definir o preço e como testá-la antes de gastar muito.",
    "Você vai comparar seis modelos de ganho (serviços feitos com ajuda da IA, serviços em pacote, produtos digitais, assinaturas, conteúdos com patrocinadores ou afiliados, e poupança de custos num negócio que já existe), escolher um que combine com você, definir o preço pelo valor, criar com IA um primeiro produto ou uma oferta recorrente e fazer um pequeno teste. Também vai aprender os sinais de alerta dos esquemas de dinheiro com IA, com os conselhos da FTC (a agência dos Estados Unidos que protege os consumidores).",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa prática. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Nenhum rendimento é garantido; este curso ensina a testar ideias com honestidade. Não dá conselhos de investimento."
  ],
  finalTask: "Faça um plano para ganhar dinheiro e um primeiro teste: o modelo de ganho que escolheu e porquê, a sua oferta com um preço baseado no valor, uma primeira versão do produto ou da oferta recorrente feita com ajuda da IA e verificada por você, um plano de pequeno lançamento com uma meta (por exemplo 5 vendas ou 3 assinantes em 30 dias) e uma lista de sinais de alerta que vai usar antes de pagar qualquer programa de dinheiro com IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas e donos de pequenos negócios nos Estados Unidos que querem ganhar dinheiro com IA, desde quem faz um trabalho extra até donos que querem uma nova fonte de rendimento.",
    startingPoint: "Usam assistentes de IA e têm habilidades, um negócio ou um público em que se podem apoiar. Muitos viram na internet promessas de dinheiro fácil com IA e não sabem que formas de ganhar são reais.",
    gap: "Os esquemas de enriquecimento rápido com IA fazem as pessoas perder dinheiro, e quem tenta modelos reais muitas vezes divide-se por modelos demais, cobra pouco ou lança sem testar. Os alunos precisam de escolher um modelo honesto, definir o preço pelo valor, criar uma primeira oferta e testá-la em pequeno, reconhecendo as burlas antes de pagar.",
    constraints: [
      "Palavras simples; nenhum rendimento é garantido e o curso não dá conselhos de investimento",
      "Aparelhos: um telefone ou computador com um assistente de IA gratuito e uma folha de cálculo",
      "Tempo: cerca de cinco minutos por lição, mais o tempo para criar uma primeira oferta e um teste de 30 dias",
      "As promessas de ganhos têm de poder ser provadas, o conteúdo patrocinado tem de ser revelado (FTC), e o material feito só por IA pode não ter direitos de autor",
      "As perguntas sobre impostos vão para fontes oficiais ou para um contabilista"
    ],
    prerequisites: "\"Introdução à IA para Empreendedores\", ou uso regular de um assistente de IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com os seis modelos de ganho com IA", action: "descrever cada modelo e dar um exemplo que combine com as suas habilidades ou o seu negócio", standard: "para os seis modelos" },
    { id: "O2", condition: "Com as suas habilidades, horas, contactos e público", action: "escolher um modelo de ganho em que se concentrar durante 90 dias", standard: "com uma razão escrita de porque combina com o que já tem" },
    { id: "O3", condition: "Para o modelo que escolheu", action: "definir um preço entre o seu preço mínimo e o valor para o cliente", standard: "comparando dois preços da concorrência e verificando as contas numa folha de cálculo" },
    { id: "O4", condition: "Com ajuda da IA e o seu próprio conhecimento", action: "criar uma primeira versão de um produto digital ou de um pacote de serviço para um problema e um comprador", standard: "com todos os dados verificados e sem promessas que não pode provar" },
    { id: "O5", condition: "Com o seu primeiro produto ou serviço", action: "criar uma oferta recorrente ou um pacote combinado e um teste de lançamento de 30 dias", standard: "com uma meta clara, uma forma de a acompanhar e qualquer patrocínio revelado" },
    { id: "O6", condition: "Antes de pagar qualquer programa ou mentoria de rendimento com IA", action: "compará-lo com uma lista escrita de sinais de alerta", standard: "pedindo o documento de divulgação e sabendo onde denunciar uma burla" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolha como vai ganhar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Seis formas de os negócios ganharem com IA",
          minutes: 5,
          goal: "Descrever seis modelos reais de ganho com IA e um exemplo de cada um.",
          text: [
            "1) Serviços com ajuda da IA: você faz trabalho para clientes mais depressa com IA, como publicações para redes sociais, currículos ou arrumar a contabilidade. 2) Serviços em pacote: um pacote fixo a um preço fixo, como \"10 descrições de produtos por $X\". 3) Produtos digitais: modelos, guias, agendas ou cursos que faz uma vez e vende muitas vezes.",
            "4) Assinaturas: um produto ou serviço mensal, como um pacote semanal de conteúdos ou uma pequena ferramenta de IA. 5) Conteúdos com patrocinadores ou afiliados: você ensina ou diverte com ajuda da IA e ganha com patrocinadores ou links de afiliado, revelando-o claramente. 6) Poupança de custos: num negócio que já existe, a IA que poupa horas ou corta custos também é dinheiro.",
            "Nenhum destes dá rendimento automático. Cada um precisa de clientes reais, valor real e trabalho real. A IA serve sobretudo para diminuir o tempo de fazer e de entregar."
          ],
          words: [["Monetizar", "encontrar uma forma de ganhar dinheiro com alguma coisa."], ["Serviço em pacote", "um serviço vendido como um pacote fixo a um preço fixo."], ["Link de afiliado", "um link que lhe paga uma comissão quando alguém compra através dele."]],
          slides: [
            { title: "Serviços", bullets: ["Serviços para clientes com ajuda da IA", "Em pacote: pacote fixo, preço fixo"] },
            { title: "Produtos", bullets: ["Produtos digitais: faz uma vez, vende muitas vezes", "Assinaturas: produto ou serviço mensal"] },
            { title: "Conteúdos e poupança", bullets: ["Conteúdos com patrocinadores ou afiliados, revelados", "Poupança de custos num negócio que já existe"] },
            { title: "Nada de rendimento automático", bullets: ["Clientes reais, valor real, trabalho real", "A IA diminui o tempo de fazer e de entregar"] }
          ],
          tryIt: "Escreva os seis modelos com um exemplo de cada um que possa combinar com as suas habilidades ou o seu negócio.",
          youCanNow: "dizer seis formas reais de ganhar com IA e dar um exemplo de cada uma.",
          quickCheck: [
            { objective: "O1", q: "O que é um produto digital?", options: ["Uma coisa feita uma vez e vendida muitas vezes na internet", "Um serviço que faz à mão para cada cliente", "Um empréstimo do banco", "O aluguer de uma loja"], answer: 0, why: "Os produtos digitais são feitos uma vez e podem ser vendidos muitas e muitas vezes." },
            { objective: "O1", q: "Tem uma padaria e usa IA para poupar duas horas de papelada por semana. Que modelo é este?", options: ["Uma assinatura", "Poupança de custos num negócio que já existe", "Um link de afiliado", "Um patrocínio"], answer: 1, why: "O dinheiro poupado num negócio conta como dinheiro ganho." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escolher um modelo que combine com os seus pontos fortes",
          minutes: 5,
          goal: "Escolher o modelo de ganho que combina com as suas habilidades, o seu público e o seu tempo.",
          text: [
            "O melhor modelo depende do que você já tem. Habilidades e tempo, mas sem público: os serviços ou os serviços em pacote costumam dar dinheiro mais depressa. Um público (seguidores, uma lista de emails, uma comunidade): podem servir os produtos digitais, as assinaturas ou os conteúdos patrocinados. Um negócio que já existe: comece pela poupança de custos e por um serviço extra para os clientes atuais.",
            "Peça à IA para o ajudar a pensar: \"Estas são as minhas habilidades, o meu tempo por semana, as pessoas que conheço e o público que tenho. Compare para mim os seis modelos de ganho com IA: rapidez até à primeira venda, custo para começar, risco e esforço.\" Depois decida você.",
            "Escolha UM modelo para os próximos 90 dias. Tentar os seis ao mesmo tempo é a razão mais comum de as pessoas não ganharem nada."
          ],
          steps: ["Escreva as suas habilidades, horas por semana, contactos e público.", "Peça à IA para comparar os seis modelos para você.", "Dê uma nota a cada um: rapidez, custo, risco, esforço.", "Escolha um modelo para 90 dias."],
          words: [["Público", "pessoas que já o seguem, leem ou ouvem."], ["Custo para começar", "o dinheiro necessário antes de poder fazer a primeira venda."]],
          slides: [
            { title: "Habilidades e tempo, sem público", bullets: ["Serviços ou serviços em pacote", "Muitas vezes o caminho mais rápido até à primeira venda"] },
            { title: "Tem um público", bullets: ["Produtos digitais", "Assinaturas ou conteúdos patrocinados"] },
            { title: "Tem um negócio", bullets: ["Primeiro a poupança de custos", "Serviço extra para os clientes atuais"] },
            { title: "Escolha UM para 90 dias", bullets: ["Fazer os seis não dá nada"] }
          ],
          tryIt: "Faça a lista das suas habilidades, horas, contactos e público, peça à IA para comparar os seis modelos para você e escolha um modelo para os próximos 90 dias.",
          youCanNow: "escolher um modelo de ganho com IA que combine com o que já tem.",
          quickCheck: [
            { objective: "O2", q: "Em quantos modelos de ganho se deve concentrar durante 90 dias?", options: ["Nos seis", "Em três", "Num", "Em nenhum"], answer: 2, why: "Tentar tudo ao mesmo tempo é uma razão comum de as pessoas não ganharem nada." },
            { objective: "O2", q: "Escreve muito bem e tem tempo, mas não tem público. O que escolhe?", options: ["Patrocínios", "Uma grande assinatura", "Conteúdos com afiliados", "Um serviço ou um serviço em pacote"], answer: 3, why: "Os serviços costumam dar dinheiro mais depressa quando tem habilidades mas ainda não tem público." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Definir o preço pelo valor",
          minutes: 5,
          goal: "Definir um preço com base no valor para o cliente, verificado com os seus custos.",
          text: [
            "A IA torna o trabalho mais rápido, e isso leva as pessoas a cobrar menos. Os clientes pagam pelo resultado, não pelos seus minutos. Pergunte: quanto é que isto poupa ou faz ganhar ao cliente? Se o seu pacote de anúncios ajuda uma loja a vender mais, ou se o seu modelo poupa duas horas por semana a um gerente, o preço pode mostrar esse valor.",
            "Depois verifique o seu mínimo: os seus custos (ferramentas, taxas, tempo, incluindo o tempo de verificar) mais o lucro. Veja quanto cobram ofertas parecidas. O seu preço deve ficar entre o seu mínimo e o valor para o cliente.",
            "Peça à IA estruturas de preço (três níveis, pacotes combinados, preço de lançamento), mas defina e verifique você os números. Guarde registos para os impostos; nos Estados Unidos, quem trabalha por conta própria geralmente paga o imposto de trabalho por conta própria; veja irs.gov ou pergunte a um contabilista."
          ],
          steps: ["Calcule o valor para o cliente.", "Calcule o seu mínimo: custos mais lucro.", "Veja quanto cobram ofertas parecidas.", "Defina um preço entre o mínimo e o valor.", "Peça estruturas à IA e depois verifique os números."],
          words: [["Preço baseado no valor", "um preço baseado no que o resultado vale para o cliente."], ["Preço mínimo", "o preço mais baixo que ainda cobre os seus custos e o lucro."], ["Nível", "uma versão de um produto a um preço definido, como básico ou premium."]],
          slides: [
            { title: "Os clientes pagam pelos resultados", bullets: ["Não pelos seus minutos", "Quanto é que isto lhes poupa ou faz ganhar?"] },
            { title: "Mínimo e valor", bullets: ["Mínimo: custos + lucro", "Valor: o que vale para o cliente", "O preço fica no meio"] },
            { title: "Estruturas", bullets: ["Níveis, pacotes, preço de lançamento", "A IA sugere; você verifica os números", "Guarde registos para os impostos"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Para o modelo que escolheu, escreva o valor para o cliente, o seu mínimo, dois preços da concorrência e o seu preço. Verifique as contas numa folha de cálculo.",
          youCanNow: "definir o preço de uma oferta feita com ajuda da IA pelo valor, acima dos seus custos.",
          quickCheck: [
            { objective: "O3", q: "O que é o seu preço mínimo?", options: ["Os seus custos mais o lucro", "O preço mais baixo de um concorrente", "O que a IA sugerir", "Zero"], answer: 0, why: "Abaixo do mínimo, cada venda faz perder dinheiro." },
            { objective: "O3", q: "A IA diz que a sua tarefa só leva cinco minutos, por isso devia cobrar muito pouco. O que faz?", options: ["Cobra quase nada", "Define o preço pelo valor do resultado, acima do seu mínimo", "Dá de graça", "Copia o concorrente mais barato"], answer: 1, why: "Os clientes pagam pelo resultado, não pelo tempo que a IA levou." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolha como vai ganhar",
        questions: [
          { objective: "O1", q: "Qual é um serviço em pacote?", options: ["Um trabalho à hora sem limites definidos", "\"10 descrições de produtos a um preço fixo\"", "Um passatempo gratuito", "Uma compra de ações"], answer: 1, why: "Um pacote fixo a um preço fixo." },
          { objective: "O1", q: "Qual destas frases sobre rendimento com IA é verdadeira?", options: ["Só precisa de um pedido (prompt)", "A IA ganha dinheiro enquanto dorme, sem trabalho", "Todos os negócios com IA ganham depressa", "Nenhum dos modelos é automático; cada um precisa de clientes e de valor"], answer: 3, why: "Um rendimento real precisa de valor real e de trabalho." },
          { objective: "O2", q: "Tem habilidades e tempo, mas não tem público. Que modelo costuma dar dinheiro mais depressa?", options: ["Serviços ou serviços em pacote", "Conteúdos patrocinados", "Assinaturas para um público", "Links de afiliado"], answer: 0, why: "Os serviços podem vender-se sem público." },
          { objective: "O2", q: "Porque escolher um modelo durante 90 dias?", options: ["A IA só permite um", "É a lei", "Tentar todos ao mesmo tempo é uma razão comum de as pessoas não ganharem nada", "Para evitar clientes"], answer: 2, why: "Concentrar-se dá resultados." },
          { objective: "O3", q: "O seu preço deve ficar:", options: ["Acima de qualquer valor", "Abaixo dos seus custos", "Entre o seu preço mínimo e o valor para o cliente", "Em zero"], answer: 2, why: "Assim cobre os custos e mostra o valor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar, testar e ficar seguro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar um produto digital com IA",
          minutes: 6,
          goal: "Criar uma primeira versão de um produto digital com ajuda da IA e o seu próprio conhecimento.",
          text: [
            "Os bons produtos digitais resolvem um problema para um tipo de comprador: \"Uma agenda semanal de preparação de refeições para quem trabalha por turnos\", \"20 modelos de email para quem faz limpezas em casas\", \"Uma lista de verificação para abrir uma carrinha de comida na sua cidade\". É a sua experiência que faz valer a pena comprá-lo; a IA acelera a escrita e o design.",
            "Passos: faça o esquema com a IA, escreva as partes principais com o seu próprio conhecimento, verifique todos os dados, faça o design no Canva (uma aplicação de design) ou num documento e teste-o com dois ou três compradores antes de um lançamento maior.",
            "Os direitos de autor contam: o Copyright Office dos Estados Unidos (o serviço dos direitos de autor) diz que o material feito só por IA não é protegido, mas o seu próprio trabalho criativo e as suas mudanças podem ser. Ponha trabalho humano real em tudo o que quer que seja seu e nunca copie o produto de outra pessoa. Se fizer promessas de resultados (\"perder peso\", \"ganhar $1,000\"), tem de as poder provar."
          ],
          steps: ["Escolha um problema e um comprador.", "Faça o esquema do produto com a IA.", "Escreva as partes principais a partir da sua experiência.", "Verifique os dados e faça o design.", "Teste com dois ou três compradores e melhore."],
          words: [["Produto digital", "uma coisa feita uma vez e vendida muitas vezes na internet, como um modelo ou um guia."], ["Direitos de autor", "o direito legal de controlar as cópias de uma obra criativa original."]],
          slides: [
            { title: "Um problema, um comprador", bullets: ["Agenda de refeições para quem trabalha por turnos", "Modelos de email para quem faz limpezas", "A sua experiência faz valer a pena comprar"] },
            { title: "Faça-o", bullets: ["Esquema com a IA", "Escreva as partes principais com o seu conhecimento", "Verifique os dados, faça o design, teste"] },
            { title: "Direitos de autor e promessas", bullets: ["O material feito só por IA não é protegido", "Ponha trabalho humano real; nunca copie", "Prove qualquer promessa de resultados"] }
          ],
          sources: [{ name: "US Copyright Office: Part 2 Copyrightability report announcement", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Crie a primeira versão de um pequeno produto digital (ou o primeiro pacote do seu serviço) com ajuda da IA e o seu próprio conhecimento. Verifique todos os dados.",
          youCanNow: "criar um produto digital que junta o seu conhecimento à rapidez da IA.",
          quickCheck: [
            { objective: "O4", q: "O que faz valer a pena comprar um produto digital?", options: ["É muito comprido", "Foi feito todo pela IA", "Resolve um problema para um comprador com conhecimento real", "Fala de todos os temas"], answer: 2, why: "Produtos focados e baseados em conhecimento real dão valor aos compradores." },
            { objective: "O4", q: "A IA põe \"os compradores ganham $1,000 por mês\" na página do seu produto. Não tem prova. O que faz?", options: ["Deixa ficar", "Muda para $500", "Põe em letra pequena", "Tira"], answer: 3, why: "As promessas de ganhos têm de poder ser provadas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Receita recorrente e um pequeno lançamento",
          minutes: 5,
          goal: "Criar uma oferta recorrente ou um pacote combinado e fazer um teste de lançamento de 30 dias.",
          text: [
            "A receita recorrente (dinheiro que entra todos os meses) é mais estável do que as vendas únicas. Opções: um pacote mensal de conteúdos ou de modelos, um plano de apoio para os clientes do seu serviço, uma adesão de membro ou uma pequena ferramenta por assinatura. Os pacotes combinados (produto mais uma chamada curta, ou três produtos juntos) aumentam o valor de cada venda.",
            "Faça um pequeno lançamento: conte a pessoas que já o conhecem, a uma comunidade de que faz parte ou a antigos clientes. Use a IA para escrever o rascunho do anúncio, mas torne-o pessoal e honesto. Se usar afiliados ou patrocinadores, revele-o claramente (por exemplo \"#ad\", que quer dizer publicidade, no início).",
            "Defina uma meta para 30 dias (por exemplo 5 vendas ou 3 assinantes), acompanhe-a e pergunte aos compradores o que os levou a comprar e o que tornaria o produto melhor."
          ],
          steps: ["Crie uma oferta recorrente ou um pacote combinado.", "Escreva com a IA uma mensagem de lançamento honesta e torne-a pessoal.", "Partilhe-a com pessoas e grupos que já o conhecem.", "Revele claramente qualquer patrocinador ou afiliado.", "Acompanhe a sua meta de 30 dias e peça a opinião dos compradores."],
          words: [["Receita recorrente", "rendimento que se repete com regularidade, como as assinaturas mensais."], ["Pacote combinado", "vários produtos ou serviços vendidos juntos."], ["Revelação", "dizer claramente às pessoas que há uma relação paga."]],
          slides: [
            { title: "Recorrente é melhor do que venda única", bullets: ["Pacotes mensais ou planos de apoio", "Adesões de membro ou pequenas ferramentas", "Pacotes combinados aumentam o valor de cada venda"] },
            { title: "Lançamento pequeno e honesto", bullets: ["Pessoas e grupos que o conhecem", "A IA faz o rascunho; você torna-o pessoal", "Revele patrocinadores e afiliados"] },
            { title: "Meta de 30 dias", bullets: ["5 vendas ou 3 assinantes", "Acompanhe-a", "Pergunte aos compradores porque compraram"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Crie uma oferta recorrente ou um pacote combinado, escreva a sua mensagem de lançamento e defina uma meta de 30 dias e como a vai acompanhar.",
          youCanNow: "criar um rendimento recorrente e lançar uma oferta com um teste claro e que se pode medir.",
          quickCheck: [
            { objective: "O5", q: "O que é receita recorrente?", options: ["Rendimento que se repete, como uma assinatura mensal", "Uma venda única", "Um reembolso de impostos", "Um empréstimo"], answer: 0, why: "As ofertas recorrentes trazem rendimento todos os meses." },
            { objective: "O5", q: "Uma marca paga-lhe para falar da ferramenta de IA dela na sua newsletter. O que faz?", options: ["Esconde o pagamento", "Revela-o claramente, por exemplo com \"#ad\" no início", "Só fala disso no fim, em letra pequena", "Recusa acompanhar"], answer: 1, why: "O conteúdo patrocinado tem de ser revelado claramente." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reconhecer burlas de dinheiro com IA",
          minutes: 5,
          goal: "Usar uma lista de sinais de alerta antes de pagar qualquer programa ou mentoria de rendimento com IA.",
          text: [
            "Muitos programas vendem \"rendimento com IA\": lojas online feitas por eles, robôs de negociação com IA, cursos de \"rendimento passivo\". A FTC agiu contra vários. Num caso que descreveu, uma empresa prometia usar IA para escolher os produtos mais vendidos para lojas online, mas a FTC acusou-a de fazer promessas de ganhos sem fundamento, e a maioria dos clientes não recuperou o que pagou.",
            "Conselhos da FTC antes de comprar uma oportunidade de negócio ou uma mentoria: peça o documento de divulgação de uma página que a lei exige; verifique que diz o nome do vendedor e os processos em tribunal; leia as condições de cancelamento e de reembolso; peça referências; se disserem que pode ganhar dinheiro, peça a declaração de promessa de ganhos; e vá-se embora se o que dizem não for igual aos documentos.",
            "Outros sinais de alerta: rendimento garantido, pressão para comprar hoje, taxas grandes pagas à cabeça, uma \"IA secreta\" vaga e contratos que o impedem de deixar avaliações honestas. Denuncie as suspeitas de burla em ReportFraud.ftc.gov. Este curso não recomenda nenhum produto de investimento nem de negociação."
          ],
          steps: ["Peça o documento de divulgação de uma página.", "Verifique o nome do vendedor e os processos em tribunal.", "Leia as condições de reembolso e de cancelamento.", "Peça referências e a declaração de promessa de ganhos.", "Vá-se embora se alguma coisa não bater certo; denuncie burlas em ReportFraud.ftc.gov."],
          words: [["Oportunidade de negócio", "um programa vendido como uma forma pronta de começar a ganhar."], ["Promessa de ganhos", "uma frase sobre quanto dinheiro você poderia ganhar."], ["Sinal de alerta", "um sinal de aviso de uma burla."]],
          slides: [
            { title: "Programas de \"rendimento com IA\"", bullets: ["Lojas feitas por eles, robôs de negociação, rendimento passivo", "A FTC agiu por promessas de ganhos sem fundamento"] },
            { title: "FTC: antes de comprar", bullets: ["Documento de divulgação de uma página", "Nome do vendedor e processos em tribunal", "Reembolso, referências, declaração de promessa de ganhos"] },
            { title: "Sinais de alerta", bullets: ["Rendimento garantido, pressão para comprar hoje", "Taxas grandes à cabeça, \"IA secreta\" vaga", "Proibição de avaliações honestas"] },
            { title: "Na dúvida", bullets: ["Vá-se embora", "Denuncie em ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC Consumer Alert: Vetting a business or coaching opportunity before you buy in", url: "https://www.consumer.ftc.gov/consumer-alerts/2023/08/vetting-business-or-coaching-opportunity-you-buy" }],
          tryIt: "Tarefa final: escreva a sua lista de sinais de alerta e depois junte o seu plano para ganhar dinheiro: o modelo e porquê, a oferta com preço, o primeiro produto ou oferta recorrente e o teste de lançamento de 30 dias.",
          youCanNow: "ganhar com IA através de ofertas honestas e testadas e evitar as burlas de dinheiro com IA.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de alerta num programa de rendimento com IA?", options: ["Um período de experiência grátis sem promessas", "Preços claros e uma política de reembolso", "Ganhos garantidos e pressão para pagar hoje", "Um contrato escrito"], answer: 2, why: "Rendimento garantido e pressão para comprar já são sinais de aviso." },
            { objective: "O6", q: "Um mentor quer uma taxa grande à cabeça por uma oportunidade de negócio de \"loja com IA\". O que faz primeiro?", options: ["Paga depressa antes de o preço subir", "Pede o dinheiro emprestado", "Assina sem ler", "Pede o documento de divulgação de uma página e verifica a sua lista de sinais de alerta"], answer: 3, why: "Peça o documento de divulgação e verifique os sinais de alerta antes de pagar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Criar, testar e ficar seguro",
        questions: [
          { objective: "O4", q: "O que faz valer a pena comprar um produto digital?", options: ["Resolve um problema para um comprador, com o seu conhecimento real", "Foi feito só pela IA", "É muito comprido", "Copia um produto de sucesso"], answer: 0, why: "Conhecimento mais um problema claro criam valor." },
          { objective: "O4", q: "O material feito só por IA é protegido por direitos de autor nos Estados Unidos?", options: ["Só se for vendido", "Sim, sempre", "Só as imagens", "Não, segundo o Copyright Office"], answer: 3, why: "Os direitos de autor exigem um autor humano." },
          { objective: "O5", q: "Qual é receita recorrente?", options: ["Uma venda única", "Uma assinatura mensal de modelos", "Um presente", "Um reembolso"], answer: 1, why: "Repete-se todos os meses." },
          { objective: "O6", q: "Um programa promete \"$10,000 por mês garantidos com as nossas lojas de IA\". O que é isto?", options: ["Um sinal de alerta", "Um investimento seguro", "Um programa do governo", "Uma oferta de emprego normal"], answer: 0, why: "O rendimento garantido é um sinal clássico de burla." },
          { objective: "O6", q: "Que documento deve pedir antes de comprar uma oportunidade de negócio?", options: ["O seu próprio extrato bancário", "O ficheiro do logótipo deles", "O documento de divulgação de uma página", "Uma foto de uma celebridade"], answer: 2, why: "A FTC diz para pedir este documento obrigatório." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Estratégias para Ganhar Dinheiro com IA",
    questions: [
      { objective: "O1", q: "Monetizar quer dizer:", options: ["Gastar dinheiro", "Encontrar uma forma de ganhar dinheiro com alguma coisa", "Dar de graça", "Pedir dinheiro emprestado"], answer: 1, why: "É essa a definição." },
      { objective: "O1", q: "Qual é um serviço com ajuda da IA?", options: ["Pagar anúncios", "Comprar criptomoedas", "Ver vídeos", "Escrever mais depressa com IA publicações para redes sociais de clientes"], answer: 3, why: "Você faz trabalho para clientes com ajuda da IA." },
      { objective: "O1", q: "Um produto digital é:", options: ["Um empréstimo", "Um envio físico", "Uma consulta única", "Feito uma vez e vendido muitas vezes na internet"], answer: 3, why: "Os modelos e os guias são exemplos." },
      { objective: "O1", q: "Um link de afiliado:", options: ["É um presente grátis", "Paga-lhe uma comissão quando alguém compra através dele", "É um formulário de impostos", "É uma palavra-passe"], answer: 1, why: "É assim que funciona o rendimento de afiliado." },
      { objective: "O1", q: "A poupança de custos conta como monetização porque:", options: ["Evita clientes", "É grátis", "O dinheiro poupado num negócio é dinheiro ganho", "A IA paga-lhe"], answer: 2, why: "Custos mais baixos aumentam o lucro." },
      { objective: "O1", q: "A IA ajuda sobretudo porque:", options: ["Diminui o tempo de fazer e de entregar", "Garante rendimento", "Encontra clientes sozinha", "Tira todo o trabalho"], answer: 0, why: "A IA acelera o trabalho; os clientes continuam a precisar de valor." },
      { objective: "O2", q: "Se já tem um negócio, um bom começo é:", options: ["Começar seis modelos novos", "Fechá-lo", "A poupança de custos e um serviço extra para os clientes atuais", "Comprar um curso de rendimento com IA"], answer: 2, why: "Construa a partir do que já tem." },
      { objective: "O2", q: "Em quantos modelos se deve concentrar durante 90 dias?", options: ["Num", "Em seis", "Em nenhum", "No maior número possível"], answer: 0, why: "Concentrar-se dá resultados." },
      { objective: "O3", q: "Os clientes pagam sobretudo:", options: ["Os seus minutos", "O resultado", "As suas ferramentas", "O seu logótipo"], answer: 1, why: "Defina o preço pelo valor." },
      { objective: "O3", q: "O seu preço mínimo é:", options: ["O preço de um concorrente", "O preço mais alto", "Zero", "Os custos mais o lucro"], answer: 3, why: "Abaixo dele perde dinheiro." },
      { objective: "O3", q: "Quem define e verifica os seus preços finais?", options: ["Você", "A IA", "O seu concorrente", "Ninguém"], answer: 0, why: "A IA pode sugerir; você decide e verifica." },
      { objective: "O3", q: "Nos Estados Unidos, o rendimento por conta própria geralmente quer dizer pagar:", options: ["Só uma taxa à empresa de IA", "Nenhum imposto", "Só o imposto sobre as vendas", "O imposto de trabalho por conta própria e também o imposto sobre o rendimento"], answer: 3, why: "Veja o centro de impostos para quem trabalha por conta própria do IRS." },
      { objective: "O4", q: "Um bom produto digital foca-se em:", options: ["Copiar um produto popular", "Tudo para todos", "Um problema para um tipo de comprador", "O que a IA sugerir"], answer: 2, why: "O foco é o que lhe dá valor." },
      { objective: "O4", q: "Se o seu produto promete \"ganhe $1,000 por mês\", você tem de:", options: ["Acrescentar \"garantido\"", "Poder prová-lo", "Escondê-lo em letra pequena", "Nada"], answer: 1, why: "As promessas na publicidade têm de ser verdadeiras e ter provas." },
      { objective: "O5", q: "Um pacote combinado é:", options: ["Um período de experiência grátis", "Um único artigo", "Um reembolso", "Vários produtos ou serviços vendidos juntos"], answer: 3, why: "Os pacotes combinados aumentam o valor de cada venda." },
      { objective: "O5", q: "Se ganha dinheiro com um patrocinador, tem de:", options: ["Falar disso uma vez por ano", "Escondê-lo", "Revelá-lo claramente, como com \"#ad\" no início", "Só contar aos amigos"], answer: 2, why: "As regras da FTC sobre recomendações exigem uma revelação clara." },
      { objective: "O5", q: "Uma boa meta de lançamento para 30 dias é:", options: ["5 vendas ou 3 assinantes", "Nenhuma meta", "Um milhão de utilizadores", "O que acontecer"], answer: 0, why: "Metas claras e pequenas podem ser medidas." },
      { objective: "O6", q: "Num caso da FTC, uma empresa prometia que a IA escolheria os melhores produtos para lojas online. A FTC disse que:", options: ["Funcionava perfeitamente", "As promessas de ganhos não tinham fundamento e a maioria dos clientes não recuperou o seu dinheiro", "Era um programa do governo", "Toda a gente ficou rica"], answer: 1, why: "Isto vem do alerta ao consumidor da FTC." },
      { objective: "O6", q: "Qual é um sinal de alerta?", options: ["Condições de reembolso claras", "Pressão para comprar hoje com uma taxa grande à cabeça", "Referências a quem pode ligar", "Um documento de divulgação escrito"], answer: 1, why: "A pressão e as taxas grandes à cabeça são sinais de burla." },
      { objective: "O6", q: "Onde pode denunciar uma suspeita de burla de oportunidade de negócio?", options: ["ReportFraud.ftc.gov", "No site do burlão", "Num fórum qualquer", "Em lado nenhum"], answer: 0, why: "A FTC recebe as denúncias aí." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      6,
      7,
      8,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Modelo e porquê",
        objective: "O2",
        notYet: "Nenhum modelo escolhido, ou vários ao mesmo tempo.",
        meets: "Um modelo com uma razão escrita de porque combina com as habilidades, o tempo e o público do aluno.",
        exceeds: "Também diz que modelos pôs de lado e porquê."
      },
      {
        name: "Preço baseado no valor",
        objective: "O3",
        notYet: "Preço abaixo do mínimo, ou sem contas.",
        meets: "Preço entre o mínimo e o valor, com dois preços da concorrência e as contas verificadas.",
        exceeds: "Explica o valor com as palavras do cliente."
      },
      {
        name: "Primeiro produto ou oferta",
        objective: "O4",
        notYet: "Conteúdo da IA sem verificar, ou promessas que não se podem provar.",
        meets: "Uma primeira versão para um problema e um comprador, com os dados verificados e o conhecimento do próprio aluno.",
        exceeds: "Mostrado a pelo menos um possível comprador para ter a sua opinião."
      },
      {
        name: "Teste de lançamento",
        objective: "O5",
        notYet: "Sem meta, ou sem forma de a acompanhar.",
        meets: "Um teste de 30 dias com uma meta clara, uma mensagem de lançamento e acompanhamento.",
        exceeds: "Inclui uma oferta recorrente ou um pacote combinado e a revelação de qualquer patrocínio."
      },
      {
        name: "Lista de sinais de alerta",
        objective: "O6",
        notYet: "Sem lista, ou falta o rendimento garantido ou as táticas de pressão.",
        meets: "Uma lista que inclui garantias, pressão, taxas à cabeça e o documento de divulgação.",
        exceeds: "Diz onde denunciar uma suspeita de burla."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que atingem a sua meta de lançamento de 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter evitado um programa de dinheiro com IA graças à lista de sinais de alerta",
      "Alunos que começam outro curso de empreendedorismo da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com um assistente de IA gratuito",
      "Uma folha de cálculo para as contas dos preços e para acompanhar o lançamento",
      "Uma lista das suas habilidades, horas, contactos e público",
      "Cerca de 60 minutos para as lições e as verificações, mais um teste de lançamento de 30 dias"
    ],
    facilitatorNotes: [
      "Diga no início que nenhum rendimento é garantido e que o curso não dá conselhos de investimento.",
      "Peça aos alunos para partilharem em pares o modelo e o preço que escolheram, para confirmarem se é realista.",
      "Vejam juntos exemplos reais (públicos) da FTC de esquemas de dinheiro com IA e façam a lista de sinais de alerta em grupo.",
      "Encaminhe as perguntas sobre impostos para fontes oficiais ou para um contabilista.",
      "Avalie o plano para ganhar dinheiro com a grelha de avaliação, uma linha Ainda não de cada vez."
    ]
  }
};
