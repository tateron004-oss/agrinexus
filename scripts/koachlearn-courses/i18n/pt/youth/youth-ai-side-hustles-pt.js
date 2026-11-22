"use strict";

// Koach Learn course (Portuguese translation of youth/youth-ai-side-hustles.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (federal and state youth work rules, the IRS); US names are kept.

module.exports = {
  id: "youth-ai-side-hustles-pt",
  lang: "pt",
  translationOf: "youth-ai-side-hustles",
  category: "Youth",
  name: "IA para o Empreendedorismo e Pequenos Negócios (Jovens)",
  skills: "Encontrar uma ideia de pequeno negócio que combine com você, Verificar as regras de trabalho para jovens e ter a autorização dos pais, Pôr preço a um serviço, Fazer um folheto simples com IA, Registar o dinheiro que entra e que sai, Tratar bem os clientes",
  outcome: "planear um pequeno negócio seguro com a autorização de um dos pais ou do encarregado de educação: escolher uma ideia que combine com as suas habilidades, definir um preço justo, fazer um folheto simples com a ajuda da IA e registar cada dólar que ganha e que gasta.",
  about: [
    "Este curso é para jovens de cerca de 13 a 18 anos que querem ganhar algum dinheiro próprio: cuidar de animais, dar explicações a crianças mais novas, cuidar de relvados, fazer arte por encomenda, editar vídeos para grupos locais ou vender artesanato.",
    "Você vai encontrar uma ideia que combine com as suas habilidades e o seu horário, verificar as regras para jovens trabalhadores, definir um preço, fazer um folheto, registar o seu dinheiro e aprender a tratar os clientes para que voltem. A IA é a sua parceira de planeamento do início ao fim.",
    "Importante: fale com um dos pais ou com o encarregado de educação antes de começar, e deixe que eles tratem das aplicações de dinheiro, dos contratos ou das contas de venda na internet que precisam de um adulto. Verifique a idade mínima de cada ferramenta de IA e ponha a escola em primeiro lugar. Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\"."
  ],
  finalTask: "Faça um plano de pequeno negócio numa página e mostre-o a um dos pais ou ao encarregado de educação: o seu serviço e para quem é, o seu preço e porquê, um folheto feito com a ajuda da IA (sem a morada de casa), um registo simples de dinheiro com colunas para data, dinheiro que entra, dinheiro que sai e notas, e duas regras de segurança que vai cumprir.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens de cerca de 13 a 18 anos nos Estados Unidos que querem ganhar algum dinheiro próprio a cuidar de animais, dar explicações, cuidar de relvados, fazer arte por encomenda, editar vídeos para grupos locais ou vender artesanato.",
    startingPoint: "Têm habilidades e passatempos pelos quais outras pessoas poderiam pagar, e talvez já tenham feito pequenos trabalhos para a família ou os vizinhos. Poucos já definiram um preço, fizeram um folheto, registaram o dinheiro que entra e que sai, ou verificaram as regras de trabalho para jovens, de impostos e de segurança.",
    gap: "Os jovens que começam um pequeno negócio sem plano podem cobrar pouco demais, perder o controlo do dinheiro, falhar as regras de impostos e de trabalho para jovens, ou pôr-se em perigo com desconhecidos. Um plano simples feito com um dos pais ou com o encarregado de educação ajuda-os a ganhar dinheiro com segurança, a aprender habilidades reais de negócio e a ganhar confiança.",
    constraints: [
      "Um dos pais ou o encarregado de educação aprova o plano e trata das aplicações de pagamento, dos contratos e das contas de venda que precisam de um adulto",
      "As regras de trabalho para jovens e de impostos mudam de estado para estado e com o tempo; os alunos verificam no serviço de trabalho do seu estado e em irs.gov",
      "Segurança: nenhuma morada de casa na internet nem nos folhetos; os clientes novos são encontrados com um adulto",
      "Privacidade: nenhum número de banco ou de cartão nas ferramentas de IA",
      "A escola vem primeiro; poucas horas por semana"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas habilidades e as horas que tem de verdade", action: "escolher uma ideia de pequeno negócio segura que caiba no seu horário e verificar que há pessoas que pagariam por ela", standard: "perguntando a pelo menos três pessoas" },
    { id: "O2", condition: "Com um dos pais ou com o encarregado de educação", action: "verificar as regras federais e estaduais de trabalho para jovens e a regra do IRS sobre o imposto do trabalho por conta própria, e combinar regras de segurança", standard: "com pelo menos duas regras de segurança que os dois aceitam" },
    { id: "O3", condition: "Para um serviço", action: "definir um preço justo que cubra os seus custos e o seu tempo e que combine com os preços locais", standard: "verificado com pessoas reais, não só com a IA" },
    { id: "O4", condition: "Usando a IA e uma ferramenta de design gratuita", action: "criar um folheto com um título, três pontos curtos, um preço e um apelo à ação", standard: "sem a morada de casa e com um contacto aprovado por um dos pais ou pelo encarregado de educação" },
    { id: "O5", condition: "Para cada trabalho e cada compra", action: "registar o dinheiro que entra e o dinheiro que sai num registo de quatro colunas e calcular o seu lucro", standard: "anotando cada entrada no mesmo dia e verificando o registo todas as semanas" },
    { id: "O6", condition: "Com cada cliente", action: "confirmar os detalhes de cada trabalho numa mensagem educada e responder aos problemas", standard: "contando a um dos pais ou ao encarregado de educação tudo o que for perigoso ou não for pago" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher e planear o seu pequeno negócio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar uma ideia que combine com você",
          minutes: 5,
          goal: "Escolher uma ideia de pequeno negócio que combine com as suas habilidades, o seu tempo e o seu bairro.",
          text: [
            "O melhor pequeno negócio usa algo que você já faz bem e resolve um problema de alguém perto de si. É bom a matemática? Dê explicações a crianças mais novas. Gosta de animais? Cuide de animais ou passeie cães. É bom com vídeo? Edite vídeos para uma equipa ou igreja local.",
            "Pergunte à IA: \"Tenho 15 anos, tenho 5 horas por semana, sou bom a desenhar e em jogos de vídeo, e moro perto de um parque. Dê-me 10 ideias de pequenos negócios seguras para um jovem.\" Depois escolha as ideias que cabem no seu tempo real e no seu horário da escola.",
            "Verifique que há pessoas que querem isso. Pergunte a três vizinhos, amigos da família ou colegas: \"Pagaria por isto?\""
          ],
          steps: ["Faça a lista das suas habilidades e das horas que tem de verdade.", "Peça à IA 10 ideias seguras que combinem com isso.", "Risque as ideias que não cabem na escola ou no seu horário.", "Pergunte a três pessoas se pagariam pela sua melhor ideia."],
          words: [["Pequeno negócio", "uma pequena forma de ganhar dinheiro fora da escola ou de um trabalho principal (em inglês, \"side hustle\")."], ["Cliente", "a pessoa que paga pelo que você oferece."]],
          slides: [
            { title: "Comece pelo que faz bem", bullets: ["Matemática: explicações", "Animais: cuidar de animais", "Vídeo: editar para grupos locais"] },
            { title: "Peça ideias à IA", bullets: ["A sua idade, habilidades e horas", "\"Seguras para um jovem\"", "Risque o que choca com a escola"] },
            { title: "Verifique que as pessoas querem", bullets: ["Pergunte a três pessoas", "\"Pagaria por isto?\""] }
          ],
          tryIt: "Escreva as suas habilidades e as horas que tem de verdade em cada semana. Peça à IA 10 ideias seguras de pequenos negócios, escolha a melhor e pergunte a três pessoas se pagariam por ela.",
          youCanNow: "escolher uma ideia de pequeno negócio que combina com você e que as pessoas querem.",
          quickCheck: [
            { objective: "O1", q: "O que faz uma boa ideia de pequeno negócio?", options: ["A ideia que parece mais fixe na internet", "Usa uma habilidade que tem e resolve um problema de alguém perto", "A que precisa de mais horas", "Qualquer coisa que um amigo esteja a fazer"], answer: 1, why: "O melhor pequeno negócio usa algo que já faz bem e resolve um problema perto de si." },
            { objective: "O1", q: "Adora a sua ideia, mas ninguém a quem pergunta pagaria por ela. O que faz?", options: ["Começa na mesma e espera", "Sobe o preço", "Continua a perguntar até alguém dizer que sim", "Experimenta outra ideia da sua lista"], answer: 3, why: "Perguntar às pessoas mostra se há procura; se ninguém pagaria, escolha outra ideia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Regras, segurança e os seus pais ou encarregado de educação",
          minutes: 5,
          goal: "Verificar as regras de trabalho para jovens e combinar regras de segurança com um dos pais ou com o encarregado de educação.",
          text: [
            "Alguns trabalhos têm regras de idade. Pela lei federal dos EUA, tomar conta de crianças de vez em quando e pequenas tarefas em casas particulares não estão abrangidos pelas regras de trabalho infantil, e o trabalho numa empresa que pertence só aos seus pais tem regras especiais. A maioria dos outros trabalhos exige 14 anos ou mais, e ninguém com menos de 18 anos pode fazer trabalho perigoso. Os estados podem ter regras mais rigorosas, por isso verifique no serviço de trabalho do seu estado.",
            "Regras de dinheiro: se os seus ganhos líquidos do trabalho por conta própria forem de $400 ou mais num ano, o IRS (o serviço de impostos dos EUA) diz que tem de declarar e pagar o imposto do trabalho por conta própria, seja qual for a sua idade. Peça a um dos pais ou ao encarregado de educação para o ajudar a guardar os registos e verifique em irs.gov.",
            "As regras de segurança são as mais importantes: um dos pais ou o encarregado de educação sabe onde você está e para quem está a trabalhar, você encontra os clientes novos com um adulto, nunca entra sozinho em casa de um desconhecido e nunca publica a morada de casa na internet. Muitas aplicações de pagamento e sites de venda exigem um adulto, por isso deixe que um dos pais ou o encarregado de educação trate deles."
          ],
          steps: ["Verifique as regras federais de trabalho para jovens e as regras do seu estado.", "Mostre o seu plano a um dos pais ou ao encarregado de educação.", "Combinem juntos as regras de segurança.", "Deixe que um adulto trate das aplicações de pagamento e das contas de venda."],
          words: [["Trabalhador por conta própria", "quem trabalha para si mesmo em vez de trabalhar para um chefe."], ["Ganhos líquidos", "o dinheiro que ganhou menos o que gastou para o ganhar."]],
          sources: [
            { name: "Departamento do Trabalho dos EUA, Ficha informativa n.º 43: regras de trabalho infantil para trabalhos não agrícolas", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
            { name: "IRS: Imposto do trabalho por conta própria (impostos da Segurança Social e do Medicare)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" }
          ],
          slides: [
            { title: "Regras de trabalho para jovens", bullets: ["Tomar conta de crianças às vezes e tarefas em casa: fora das regras federais", "A maioria dos outros trabalhos: a partir dos 14 anos", "Nenhum trabalho perigoso antes dos 18", "Verifique as regras do seu estado"] },
            { title: "Regras de dinheiro", bullets: ["IRS: $400 ou mais de ganhos líquidos por conta própria = declarar", "A idade não conta", "Guarde registos com a ajuda dos pais"] },
            { title: "A segurança primeiro", bullets: ["Um adulto sabe onde você está", "Encontre os clientes novos com um adulto", "Nunca publique a morada de casa"] }
          ],
          tryIt: "Procure as regras de trabalho para jovens do seu estado e leia a página do IRS sobre o imposto do trabalho por conta própria com um dos pais ou com o encarregado de educação. Escreva três regras de segurança que os dois aceitam.",
          youCanNow: "verificar as regras do seu pequeno negócio e combinar regras de segurança com um dos pais ou com o encarregado de educação.",
          quickCheck: [
            { objective: "O2", q: "Pela lei federal, que tipo de trabalho ninguém com menos de 18 anos pode fazer?", options: ["Dar explicações", "Cuidar de animais", "Trabalho perigoso", "Fazer arte"], answer: 2, why: "A lei federal proíbe trabalho perigoso a qualquer pessoa com menos de 18 anos." },
            { objective: "O2", q: "Um cliente novo pede-lhe para ir sozinho a casa dele para se conhecerem. O que faz?", options: ["Encontra-o com um dos pais ou com o encarregado de educação, que sabe onde você está", "Vai sozinho para ser educado", "Envia-lhe a sua morada de casa", "Pede-lhe para pagar primeiro"], answer: 0, why: "Encontre os clientes novos com um adulto e nunca entre sozinho em casa de um desconhecido." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Definir um preço justo",
          minutes: 5,
          goal: "Definir um preço que cubra os seus custos, pague o seu trabalho de forma justa e sirva aos seus clientes.",
          text: [
            "Para definir um preço, olhe para três coisas: quanto lhe custa (material, deslocações), quanto cobram outros jovens ou serviços locais parecidos e quanto vale o seu tempo.",
            "Peça à IA para o ajudar a pensar, não para decidir: \"Passeio cães durante 30 minutos. Ajude-me a pensar num preço justo para um jovem numa cidade pequena. Que perguntas devo fazer?\" Depois pergunte a pessoas reais quanto pagam na sua zona, porque a IA não conhece o seu bairro.",
            "Escreva o seu preço de forma clara, por exemplo \"Passeio de cão, 30 minutos\" com o valor. Mantenha-o simples e igual para todos."
          ],
          steps: ["Some os seus custos por trabalho.", "Pergunte às pessoas quanto custam serviços parecidos na sua zona.", "Decida quanto vale o seu tempo.", "Escreva um preço claro para cada serviço."],
          words: [["Custo", "o que você gasta para fazer o trabalho."], ["Lucro", "o dinheiro que fica depois de pagar os seus custos."]],
          slides: [
            { title: "Três coisas definem o seu preço", bullets: ["Os seus custos", "Quanto os outros cobram na sua zona", "Quanto vale o seu tempo"] },
            { title: "A IA ajuda a pensar", bullets: ["Pergunte que questões deve considerar", "Pergunte a pessoas reais os preços locais", "A IA não conhece o seu bairro"] },
            { title: "Seja claro", bullets: ["Um preço por serviço", "Igual para todos"] }
          ],
          tryIt: "Faça a lista dos seus custos para um trabalho, pergunte a duas pessoas quanto pagam por algo parecido e escreva um preço claro para o seu serviço.",
          youCanNow: "definir um preço justo e claro para o seu pequeno negócio.",
          quickCheck: [
            { objective: "O3", q: "Que três coisas ajudam a definir um preço?", options: ["Os seus custos, os preços locais e quanto vale o seu tempo", "Só o palpite de um amigo", "O preço mais alto que encontrar na internet", "O que a IA disser"], answer: 0, why: "Um preço justo cobre os seus custos, combina com os preços locais e paga o seu tempo." },
            { objective: "O3", q: "A IA sugere um preço para cortar relva. O que faz antes de o usar?", options: ["Usa-o logo", "Duplica-o", "Cobra um preço diferente a cada cliente", "Pergunta a pessoas reais quanto pagam na sua zona"], answer: 3, why: "A IA não conhece o seu bairro, por isso verifique os preços locais com pessoas reais." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher e planear o seu pequeno negócio",
        questions: [
          { objective: "O1", q: "A melhor ideia de pequeno negócio normalmente:", options: ["Ocupa todo o seu tempo da escola", "É o que está na moda na internet", "Usa uma habilidade que tem e resolve um problema perto de si", "Precisa de equipamento caro"], answer: 2, why: "Habilidades mais uma necessidade real fazem uma boa ideia." },
          { objective: "O1", q: "Como verifica que as pessoas querem a sua ideia?", options: ["Pergunta a algumas pessoas se pagariam por ela", "Supõe que sim", "Pergunta só à IA", "Publica a sua morada na internet"], answer: 0, why: "As respostas de pessoas reais mostram a procura real." },
          { objective: "O2", q: "Segundo o IRS, as regras do imposto do trabalho por conta própria:", options: ["Só valem no verão", "Só valem para adultos", "Nunca valem para jovens", "Valem seja qual for a sua idade"], answer: 3, why: "O IRS diz que as regras valem em qualquer idade." },
          { objective: "O2", q: "Qual é uma boa regra de segurança?", options: ["Ir sozinho a casa de um desconhecido", "Encontrar os clientes novos com um adulto", "Pôr a morada de casa no folheto", "Manter os seus planos em segredo"], answer: 1, why: "Ter um adulto consigo mantém você em segurança." },
          { objective: "O3", q: "Porquê perguntar a pessoas reais sobre os preços locais?", options: ["A IA está sempre certa", "A IA não conhece o seu bairro", "Os preços são iguais em todo o lado", "A lei obriga"], answer: 1, why: "As pessoas da zona conhecem os preços da zona." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir o seu pequeno negócio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fazer um folheto simples com IA",
          minutes: 5,
          goal: "Escrever e desenhar um folheto claro para o seu serviço.",
          text: [
            "Um folheto diz às pessoas o que você faz, quanto custa e como o contactar. A IA pode ajudar com as palavras: \"Escreva um folheto curto e simpático para um serviço de passear cães feito por um jovem. Inclua um título, 3 pontos e um apelo à ação.\"",
            "Desenhe-o numa ferramenta gratuita como o Canva, o Google Docs ou o Google Slides. Use um título grande, linhas curtas e cores fáceis de ler.",
            "Segurança: nunca ponha a morada de casa num folheto. Use o número de telefone ou o e-mail de um dos pais ou do encarregado de educação, ou um contacto que eles aprovem. Peça autorização antes de afixar folhetos nos quadros de lojas, bibliotecas ou centros comunitários."
          ],
          steps: ["Peça à IA um título, 3 pontos e um apelo à ação.", "Mude as palavras para soarem como você.", "Desenhe-o numa ferramenta gratuita.", "Use um contacto aprovado por um dos pais ou pelo encarregado de educação, nunca a sua morada."],
          words: [["Apelo à ação", "uma frase que diz às pessoas o que fazer a seguir, como \"Envie SMS para marcar um passeio\"."], ["Título", "o texto grande no topo."]],
          slides: [
            { title: "Um folheto diz", bullets: ["O que você faz", "Quanto custa", "Como o contactar"] },
            { title: "A IA escreve, você corrige", bullets: ["Título, 3 pontos, apelo à ação", "Faça-o soar como você", "Desenhe-o no Canva ou no Google Docs"] },
            { title: "Fique em segurança", bullets: ["Sem morada de casa", "Use um contacto que os seus pais aprovem", "Peça antes de afixar folhetos"] }
          ],
          tryIt: "Peça à IA para escrever o texto do folheto para o seu serviço. Mude-o para soar como você, desenhe-o numa ferramenta gratuita e acrescente um contacto aprovado por um dos pais ou pelo encarregado de educação.",
          youCanNow: "fazer um folheto claro e seguro para o seu pequeno negócio.",
          quickCheck: [
            { objective: "O4", q: "O que é o título de um folheto?", options: ["O número de contacto", "A linha grande no topo que diz o que oferece", "As letras pequenas em baixo", "A lista de preços"], answer: 1, why: "Um folheto usa um título grande para as pessoas verem logo o que oferece." },
            { objective: "O4", q: "O texto do folheto feito pela IA tem a rua da sua casa. O que faz?", options: ["Deixa-a para as pessoas o encontrarem", "Põe o nome da rua mais pequeno", "Tira-a e usa um contacto aprovado por um dos pais ou pelo encarregado de educação", "Publica o folheto só na internet"], answer: 2, why: "Nunca ponha a morada de casa num folheto; use um contacto aprovado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Registar o dinheiro que entra e o dinheiro que sai",
          minutes: 5,
          goal: "Criar um registo simples de dinheiro e usá-lo em cada trabalho.",
          text: [
            "Os donos de negócios registam cada dólar. Um registo simples tem quatro colunas: data, dinheiro que entra, dinheiro que sai e notas (quem pagou, o que comprou).",
            "Faça-o no Google Sheets, no Microsoft Excel ou num caderno de papel. A IA pode ajudar: \"Faça uma tabela simples de registo de dinheiro para o negócio de cuidar de animais de um jovem, com um total no fim.\" Nunca escreva números de banco ou de cartão na IA.",
            "Veja-o todas as semanas. O dinheiro que entra menos o dinheiro que sai é o seu lucro. Os seus registos também ajudam um dos pais ou o encarregado de educação com qualquer dúvida sobre impostos."
          ],
          steps: ["Faça quatro colunas: data, dinheiro que entra, dinheiro que sai, notas.", "Anote cada trabalho e cada compra no mesmo dia.", "Acrescente uma linha de total.", "Verifique todas as semanas: o que entra menos o que sai é o lucro."],
          words: [["Folha de cálculo", "uma tabela no computador, como o Google Sheets ou o Excel."], ["Lucro", "o dinheiro que entra menos o dinheiro que sai."]],
          slides: [
            { title: "Registe cada dólar", bullets: ["Data", "Dinheiro que entra", "Dinheiro que sai", "Notas"] },
            { title: "Ferramentas gratuitas", bullets: ["Google Sheets ou Excel", "Um caderno de papel também serve", "Nunca ponha números de banco na IA"] },
            { title: "Verifique todas as semanas", bullets: ["O que entra menos o que sai = lucro", "Os registos ajudam com dúvidas sobre impostos"] }
          ],
          tryIt: "Faça um registo de dinheiro com as quatro colunas. Acrescente dois trabalhos, inventados ou reais, e uma compra, e calcule o seu lucro.",
          youCanNow: "registar o dinheiro do seu pequeno negócio e saber o seu lucro.",
          quickCheck: [
            { objective: "O5", q: "O que vai na coluna \"dinheiro que sai\"?", options: ["As gorjetas que recebeu", "Os pagamentos dos clientes", "O seu lucro", "O que gastou, como material ou deslocações"], answer: 3, why: "O dinheiro que sai é o que você gasta; o dinheiro que entra é o que os clientes lhe pagam." },
            { objective: "O5", q: "Quer que a IA o ajude a fazer o seu registo. O que deixa de fora?", options: ["Os seus números de banco ou de cartão", "Os nomes das colunas", "A palavra \"total\"", "O tipo do seu negócio"], answer: 0, why: "Nunca escreva números de banco ou de cartão numa ferramenta de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tratar bem os clientes",
          minutes: 5,
          goal: "Escrever mensagens claras e educadas e resolver um problema com um cliente.",
          text: [
            "Os clientes voltam, e falam de você aos amigos, quando é pontual, educado e honesto. Confirme cada trabalho: dia, hora, preço e o que vai fazer.",
            "A IA pode ajudar a escrever mensagens, com um dos pais ou o encarregado de educação em cópia: \"Escreva uma mensagem educada a confirmar um passeio de cão no sábado às 10 da manhã pelo preço combinado.\" Se algo correr mal, peça desculpa, explique o que vai fazer para corrigir e cumpra a promessa.",
            "Se um cliente for mal-educado, lhe pedir para fazer algo perigoso ou não pagar, pare e conte a um dos pais ou ao encarregado de educação. Não tem de resolver isso sozinho."
          ],
          steps: ["Confirme o dia, a hora, o preço e a tarefa antes de cada trabalho.", "Seja pontual e faça o que prometeu.", "Se algo correr mal: peça desculpa, diga como vai corrigir e corrija.", "Perigoso ou não pago? Conte a um dos pais ou ao encarregado de educação."],
          words: [["Confirmar", "verificar e combinar os detalhes antes do trabalho."], ["Avaliação", "o que um cliente diz sobre o seu trabalho."]],
          slides: [
            { title: "Os clientes voltam quando você é", bullets: ["Pontual", "Educado", "Honesto"] },
            { title: "Confirme cada trabalho", bullets: ["Dia e hora", "Preço", "O que vai fazer"] },
            { title: "Quando algo corre mal", bullets: ["Peça desculpa e diga como vai corrigir", "Perigoso ou não pago? Conte aos pais ou ao encarregado de educação"] }
          ],
          tryIt: "Tarefa final: faça o seu plano de pequeno negócio numa página: serviço e cliente, preço e porquê, o seu folheto, o seu registo de dinheiro e duas regras de segurança. Mostre-o a um dos pais ou ao encarregado de educação e pergunte o que mudariam.",
          youCanNow: "planear e gerir um pequeno negócio seguro com a IA como ajudante.",
          quickCheck: [
            { objective: "O6", q: "O que deve ter uma mensagem de confirmação de um trabalho?", options: ["A sua morada de casa", "O dia, a hora, o preço e a tarefa", "O seu horário da escola", "Os seus dados do banco"], answer: 1, why: "Confirmar o dia, a hora, o preço e a tarefa evita confusões." },
            { objective: "O6", q: "Esqueceu-se de encher a tigela de água de um animal. O que faz?", options: ["Esconde isso", "Culpa o animal", "Pede desculpa, explica como vai corrigir e corrige", "Deixa de responder às mensagens"], answer: 2, why: "Assumir o erro e corrigi-lo mantém a confiança dos clientes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir o seu pequeno negócio",
        questions: [
          { objective: "O4", q: "O que nunca deve estar no seu folheto?", options: ["O seu preço", "Um apelo à ação", "O que você faz", "A sua morada de casa"], answer: 3, why: "A sua morada de casa põe a sua segurança em risco." },
          { objective: "O4", q: "O que é um apelo à ação?", options: ["Uma frase que diz às pessoas o que fazer a seguir", "Um toque de telefone", "Um tipo de preço", "Uma regra da escola"], answer: 0, why: "Diz aos clientes como marcar um trabalho consigo." },
          { objective: "O5", q: "Um registo simples de dinheiro tem colunas para:", options: ["Palavras-passe", "Só as suas músicas favoritas", "Data, dinheiro que entra, dinheiro que sai e notas", "Só nomes de amigos"], answer: 2, why: "Essas quatro colunas registam cada dólar." },
          { objective: "O5", q: "O lucro é:", options: ["O seu preço", "Todo o dinheiro que recebeu", "O dinheiro que gastou", "O dinheiro que entra menos o dinheiro que sai"], answer: 3, why: "O lucro é o que fica depois dos custos." },
          { objective: "O6", q: "Um cliente pede-lhe para fazer algo perigoso. Você:", options: ["Faz para não perder o cliente", "Discute com ele na internet", "Para e conta a um dos pais ou ao encarregado de educação", "Ignora e continua a trabalhar"], answer: 2, why: "A sua segurança é mais importante do que qualquer trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Empreendedorismo e Pequenos Negócios (Jovens)",
    questions: [
      { objective: "O1", q: "Um pequeno negócio (\"side hustle\") é:", options: ["Um passo de dança", "Uma pequena forma de ganhar dinheiro fora da escola ou de um trabalho principal", "Um clube da escola", "Um tipo de teste"], answer: 1, why: "É um trabalho extra que faz no seu próprio tempo." },
      { objective: "O1", q: "Um bom pedido à IA para ideias de pequenos negócios inclui:", options: ["A sua idade, habilidades e horas, e \"seguras para um jovem\"", "A sua morada de casa", "O seu número do banco", "Nada"], answer: 0, why: "Esses detalhes dão ideias que combinam com você." },
      { objective: "O1", q: "Uma ideia choca com o seu horário da escola. Deve:", options: ["Fazê-la na mesma", "Faltar à escola", "Riscá-la e escolher outra", "Pedir à IA para fazer os seus trabalhos de casa"], answer: 2, why: "A escola vem primeiro." },
      { objective: "O2", q: "Pela lei federal, tomar conta de crianças de vez em quando:", options: ["Não está abrangido pelas regras de trabalho infantil", "Exige ter 18 anos", "É proibido aos jovens", "Exige uma licença"], answer: 0, why: "O Departamento do Trabalho diz que tomar conta de crianças de vez em quando não está abrangido pelas regras federais." },
      { objective: "O2", q: "A regra de trabalho para jovens do seu estado é mais rigorosa do que a lei federal. Você segue:", options: ["A regra do seu amigo", "A regra mais fácil", "Nenhuma regra", "A regra mais rigorosa"], answer: 3, why: "Quando as duas se aplicam, conta a regra mais rigorosa." },
      { objective: "O2", q: "O IRS diz que tem de declarar o imposto do trabalho por conta própria quando os ganhos líquidos são:", options: ["Mais de $1 milhão", "$400 ou mais", "Qualquer valor acima de $1", "Nunca, para jovens"], answer: 1, why: "O limite do IRS é de $400 de ganhos líquidos, em qualquer idade." },
      { objective: "O2", q: "Quem deve tratar das aplicações de pagamento e das contas de venda que precisam de um adulto?", options: ["Um desconhecido", "Um dos seus pais ou o encarregado de educação", "O primo mais velho de um amigo", "Ninguém"], answer: 1, why: "Muitas precisam de um adulto, e um dos seus pais ou o encarregado de educação deve saber do seu dinheiro." },
      { objective: "O3", q: "O seu preço deve cobrir:", options: ["Os custos do seu amigo", "Só o que a IA disser", "Nada", "Os seus custos e o seu tempo"], answer: 3, why: "Um preço justo paga os seus custos e o seu tempo." },
      { objective: "O5", q: "Lucro quer dizer:", options: ["O dinheiro que fica depois dos custos", "Todo o dinheiro que recebeu", "As suas despesas", "Uma gorjeta"], answer: 0, why: "Lucro = dinheiro que entra menos dinheiro que sai." },
      { objective: "O3", q: "Porquê ter um preço claro para cada serviço?", options: ["É proibido não ter", "Confunde os clientes", "É simples e justo para todos", "A IA exige"], answer: 2, why: "Preços claros e iguais criam confiança." },
      { objective: "O4", q: "Quando a IA escreve o seu folheto, você deve:", options: ["Deixar a IA escolher o seu preço", "Publicá-lo sem ler", "Acrescentar a sua morada de casa", "Mudá-lo para soar como você"], answer: 3, why: "A sua maneira de falar torna o folheto seu." },
      { objective: "O4", q: "Que contacto deve estar no folheto de um jovem?", options: ["O seu horário da escola", "A sua morada de casa", "Um contacto aprovado por um dos pais ou pelo encarregado de educação", "O código do seu cacifo"], answer: 2, why: "Os contactos aprovados mantêm você em segurança." },
      { objective: "O4", q: "Antes de afixar folhetos numa loja ou biblioteca, deve:", options: ["Colá-los em qualquer lado", "Pedir autorização", "Tapar outros folhetos", "Não perguntar"], answer: 1, why: "Os lugares têm regras para os seus quadros." },
      { objective: "O5", q: "Que ferramenta gratuita pode ter um registo de dinheiro?", options: ["Google Sheets", "Uma aplicação de música", "Uma consola de jogos", "Um filtro de fotos"], answer: 0, why: "As folhas de cálculo como o Google Sheets são gratuitas." },
      { objective: "O5", q: "O que nunca deve escrever numa ferramenta de IA?", options: ["\"Escreva um folheto\"", "\"Faça uma tabela de registo de dinheiro\"", "Números de banco ou de cartão", "\"Dê-me ideias\""], answer: 2, why: "Os números de banco e de cartão são privados." },
      { objective: "O5", q: "Com que frequência deve verificar o seu registo?", options: ["Todas as semanas", "Uma vez por ano", "Nunca", "Só quando perde dinheiro"], answer: 0, why: "Verificar todas as semanas mostra como está a correr." },
      { objective: "O6", q: "Antes de cada trabalho deve confirmar:", options: ["O seu lanche favorito", "Só o preço", "Nada", "Dia, hora, preço e tarefa"], answer: 3, why: "Confirmar evita surpresas." },
      { objective: "O6", q: "Chegou atrasado a um trabalho. A melhor resposta é:", options: ["Culpar o cliente", "Pedir desculpa, explicar como vai corrigir e cumprir a promessa", "Ignorar", "Cobrar mais"], answer: 1, why: "Assumir os erros mantém os clientes." },
      { objective: "O6", q: "Um cliente não paga. Deve:", options: ["Ir sozinho a casa dele exigir o dinheiro", "Contar a um dos pais ou ao encarregado de educação", "Publicar sobre ele na internet", "Continuar a trabalhar de graça"], answer: 1, why: "Um adulto pode ajudar a resolver isso com segurança." },
      { objective: "O2", q: "Quem deve ver o seu plano de pequeno negócio antes de começar?", options: ["Só a IA", "Ninguém", "Só desconhecidos na internet", "Um dos pais ou o encarregado de educação"], answer: 3, why: "Um dos pais ou o encarregado de educação ajuda com a segurança, as regras e o dinheiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 8, 11, 13, 16, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Serviço e cliente", objective: "O1", notYet: "O serviço ou o cliente não está claro.", meets: "Diz qual é o serviço, para quem é e que pelo menos três pessoas disseram que pagariam.", exceeds: "Também mostra que a ideia cabe nas horas reais que o aluno tem por semana." },
      { name: "Preço", objective: "O3", notYet: "Não há preço, ou não há razão para ele.", meets: "Um preço claro que cobre os custos e o tempo, verificado com pessoas da zona.", exceeds: "Mostra o custo por trabalho e como o preço se compara com as opções locais." },
      { name: "Folheto", objective: "O4", notYet: "O folheto tem a morada de casa, ou não tem preço nem contacto.", meets: "Um título, pontos curtos, o preço e um contacto aprovado, sem morada de casa.", exceeds: "As palavras foram mudadas para soarem como o aluno, e o design é fácil de ler." },
      { name: "Registo de dinheiro", objective: "O5", notYet: "Faltam colunas ou não há forma de ver o lucro.", meets: "Data, dinheiro que entra, dinheiro que sai e notas, com um total que mostra o lucro.", exceeds: "Tem entradas reais ou de prática e uma nota sobre quando será verificado em cada semana." },
      { name: "Regras de segurança", objective: "O2", notYet: "Menos de duas regras de segurança, ou o plano não foi visto por um dos pais ou pelo encarregado de educação.", meets: "Duas regras de segurança combinadas com um dos pais ou com o encarregado de educação, que viu o plano.", exceeds: "Também indica as regras de trabalho para jovens e de impostos que se aplicam, verificadas em sites oficiais." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que começam o seu pequeno negócio com a autorização de um dos pais ou do encarregado de educação em 60 dias",
      "Alunos que mantêm um registo de dinheiro durante pelo menos quatro semanas",
      "Alunos que dizem ter ganho dinheiro e ter clientes que voltaram no seguimento de 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone, um computador da escola ou um computador da biblioteca com internet",
      "Um assistente de IA gratuito que o aluno pode usar, e o Canva, o Google Docs ou o Google Slides",
      "Google Sheets, Excel ou um caderno de papel para o registo de dinheiro",
      "Um dos pais ou o encarregado de educação para rever o plano",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Envie um bilhete para casa para que os pais e os encarregados de educação saibam que o curso lhes pede para rever o plano e tratar de qualquer conta que precise de um adulto.",
      "Verifique os folhetos antes de os alunos os afixarem ou imprimirem, para ter a certeza de que não aparece nenhuma morada de casa nem contacto privado.",
      "Lembre aos alunos que as regras de trabalho para jovens e de impostos mudam; peça-lhes que verifiquem no serviço de trabalho do seu estado e em irs.gov com um adulto.",
      "Nunca peça aos alunos para escreverem números de banco ou de cartão nas ferramentas de IA; os registos de prática podem usar valores inventados.",
      "Faça uma pequena apresentação dos planos e avalie cada plano com a grelha de avaliação, dando comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
