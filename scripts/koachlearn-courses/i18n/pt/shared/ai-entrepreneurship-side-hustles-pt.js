"use strict";

// Koach Learn course (Portuguese translation of shared/ai-entrepreneurship-side-hustles.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "ai-entrepreneurship-side-hustles-pt",
  lang: "pt",
  translationOf: "ai-entrepreneurship-side-hustles",
  category: "Re-Entry",
  name: "Empreendedorismo e Biscates com IA",
  skills: "Escolher um biscate que combine com as suas habilidades, Verificar regras e licenças, Testar a procura sem gastar muito, Definir o preço do seu serviço, Escrever uma oferta e um folheto com IA, Registar o dinheiro e os impostos",
  outcome: "escolher um biscate que combine com as suas habilidades e as suas regras, testar se as pessoas vão pagar, definir um preço, usar a IA para escrever a sua oferta e um folheto ou publicação, e registar cada dólar que entra e sai para estar preparado na época dos impostos.",
  about: [
    "Um biscate é uma pequena forma de ganhar dinheiro extra por conta própria: cortar cabelo, fazer limpezas, cuidar de jardins, ajudar em mudanças, cozinhar, lavar e limpar carros, dar explicações, vender artesanato ou fazer pequenas reparações. Muitas pessoas que voltam para casa depois da prisão usam um biscate para ganhar dinheiro e confiança enquanto procuram trabalho, ou como um passo para ter o seu próprio negócio.",
    "Os assistentes de IA, como o ChatGPT, o Microsoft Copilot e o Google Gemini, podem ajudar de graça a escolher uma ideia, calcular um preço, escrever a sua oferta e fazer publicidade simples.",
    "Este curso é curto e prático: o objetivo é o seu primeiro cliente pagante. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. Verifique as condições da sua liberdade condicional ou pena suspensa antes de começar qualquer negócio, e pergunte ao seu agente se não tiver a certeza."
  ],
  finalTask: "Escolha um biscate e faça uma folha de lançamento de uma página: o serviço e para quem é, as regras ou licenças que verificou (e onde), o seu preço e como o calculou, uma oferta curta escrita com a ajuda da IA, um folheto ou publicação nas redes sociais, uma lista de cinco pessoas ou lugares a quem contar, e um registo de dinheiro simples pronto para a sua primeira venda.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e querem ganhar dinheiro extra por conta própria, muitas vezes enquanto procuram emprego ou trabalham a tempo parcial. Muitos têm habilidades práticas de trabalhos na prisão, de ofícios, da cozinha, das limpezas ou de cuidar de outras pessoas.",
    startingPoint: "Têm habilidades verdadeiras e talvez já tenham feito trabalhos informais para a família ou os vizinhos. A maioria nunca definiu o preço de um serviço, nunca fez um folheto, nunca registou o dinheiro de um negócio nem pensou nos impostos, e alguns têm pouco dinheiro, não têm carro e têm só um telefone simples.",
    gap: "Um biscate pode trazer dinheiro depressa e criar um historial de trabalho, mas muitas pessoas cobram pouco demais, saltam as regras ou as licenças, caem em burlas de pagamento ou recebem uma conta de impostos que não esperavam. Os alunos precisam de escolher um biscate que combine com as suas habilidades e condições, testar a procura, cobrar um preço justo, fazer publicidade honesta com a ajuda da IA e registar cada dólar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: talvez só um telefone simples ou um computador da biblioteca com tempo limitado",
      "Dinheiro: menos de cerca de $100 para começar; não são precisas ferramentas pagas",
      "Regras: aplicam-se as condições da liberdade condicional ou da pena suspensa e as licenças do estado; cada aluno verifica as suas próprias condições e a entidade de licenciamento do estado",
      "Sem conselhos fiscais ou legais: os alunos verificam em irs.gov, num programa gratuito de ajuda com impostos como o VITA, ou com um profissional"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e Confiança Digital\" é um bom primeiro curso para quem nunca usou IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas habilidades, o seu tempo, o dinheiro para começar e as suas regras", action: "escolher um biscate e verificar se precisa de uma licença ou se é limitado pelas suas condições", standard: "dizendo onde verificou" },
    { id: "O2", condition: "Antes de gastar dinheiro em materiais", action: "testar se as pessoas vão pagar, falando com dez possíveis clientes e vendo outras pessoas que fazem o mesmo perto de você", standard: "em uma semana, sem gastar nada" },
    { id: "O3", condition: "Com os seus custos por trabalho, as horas que leva e os preços da zona", action: "calcular um preço que pague os custos, o seu tempo e um pouco mais", standard: "com as contas verificadas à mão" },
    { id: "O4", condition: "Usando um assistente de IA e uma ferramenta de design gratuita", action: "escrever uma oferta clara e fazer um folheto ou uma publicação nas redes sociais", standard: "dizendo o quê, para quem, o preço e como marcar, sem nada falso e sem a morada de casa" },
    { id: "O5", condition: "Quando procura os seus primeiros clientes", action: "planear a quem e onde contar e como vai trabalhar com segurança", standard: "com uma lista de cinco pessoas ou lugares e o trabalho combinado por escrito" },
    { id: "O6", condition: "A partir da sua primeira venda", action: "manter um registo de dinheiro, guardar os recibos e dizer onde obter ajuda com os impostos", standard: "registando cada dólar que entra e sai" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escolher e testar o seu biscate",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher um biscate que combine com as suas habilidades",
          minutes: 5,
          goal: "Fazer uma lista de ideias de biscates que combinem com as suas habilidades, o seu tempo e o seu dinheiro.",
          text: [
            "O melhor primeiro biscate usa habilidades que você já tem, precisa de pouco dinheiro para começar e cabe no seu horário. Se cozinhava na prisão, pense em preparar refeições ou ajudar em serviços de catering. Se fazia manutenção, pense em pequenas reparações ou trabalho de jardim. Se as pessoas lhe pedem sempre para arranjar o cabelo, comece por aí.",
            "Peça ideias à IA: \"Sou bom a cozinhar e a limpar, tenho cerca de 10 horas por semana, não tenho carro e tenho menos de $100 para começar. Sugira 10 biscates que eu possa começar no meu bairro.\" Depois risque os que não combinam com você.",
            "Verifique primeiro as suas regras. As condições da liberdade condicional ou da pena suspensa podem limitar alguns trabalhos, viagens ou o uso de dinheiro vivo. Alguns ofícios, como barbeiro, cabeleireiro e estética, eletricista ou empreiteiro, precisam de uma licença do estado. Algumas licenças têm em conta o registo criminal; o site da entidade de licenciamento do seu estado explica as regras."
          ],
          steps: ["Escreva as suas habilidades, o tempo por semana e o dinheiro para começar.", "Peça à IA dez ideias que combinem com isso.", "Risque as ideias que não combinam com a sua vida.", "Verifique as condições da liberdade condicional ou da pena suspensa.", "Verifique se o trabalho precisa de uma licença do estado."],
          words: [["Biscate", "uma pequena forma de ganhar dinheiro por conta própria, muitas vezes a tempo parcial."], ["Licença", "autorização oficial do estado ou da cidade para fazer certos trabalhos."]],
          slides: [
            { title: "Um bom primeiro biscate", bullets: ["Usa habilidades que você já tem", "Precisa de pouco dinheiro para começar", "Cabe no seu horário"] },
            { title: "Peça ideias à IA", bullets: ["Diga as suas habilidades, tempo, dinheiro e transporte", "Peça dez ideias", "Risque o que não combina com você"] },
            { title: "Verifique primeiro as regras", bullets: ["Condições da liberdade condicional ou da pena suspensa", "Licenças do estado para alguns ofícios", "O site da entidade de licenciamento do seu estado"] }
          ],
          tryIt: "Peça à IA dez ideias de biscates usando as suas habilidades, o seu tempo e o seu orçamento verdadeiros. Escolha as duas melhores e escreva que regras ou licenças precisa de verificar para cada uma.",
          youCanNow: "escolher ideias de biscates que combinam com as suas habilidades e saber que regras verificar.",
          quickCheck: [
            { objective: "O1", q: "Com que três coisas um bom primeiro biscate deve combinar?", options: ["O seu carro, a sua casa e o seu historial de crédito", "A última moda, um grande empréstimo e um site", "As suas habilidades, o seu tempo e o dinheiro que tem para começar", "Os trabalhos dos seus amigos, uma licença e um escritório"], answer: 2, why: "Um primeiro biscate usa habilidades que você já tem, precisa de pouco dinheiro e cabe no seu horário." },
            { objective: "O1", q: "Quer cortar cabelo para ganhar dinheiro. O que verifica primeiro?", options: ["Se o seu estado exige uma licença de barbeiro ou de cabeleireiro, e as suas condições", "Nada; é só um biscate", "Só o que os seus amigos pensam", "Que máquinas de cortar cabelo são as mais caras"], answer: 0, why: "Alguns ofícios, como barbeiro, precisam de uma licença do estado, e as condições da liberdade condicional ou da pena suspensa podem aplicar-se." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Testar se as pessoas vão pagar",
          minutes: 5,
          goal: "Testar a procura da sua ideia em uma semana sem gastar dinheiro.",
          text: [
            "Antes de comprar materiais, descubra se as pessoas querem o serviço. Fale com dez pessoas que podem ser clientes: vizinhos, pessoas da igreja, amigos da família, pessoas do seu centro de reintegração. Pergunte: \"Pagaria a alguém para [serviço]? Com que frequência? Quanto acha que pagaria?\"",
            "Olhe à sua volta: há outras pessoas a fazer o mesmo perto de você? Isso é uma boa notícia; quer dizer que as pessoas pagam por isso. Pergunte à IA: \"De que se queixam normalmente os clientes de [serviço]?\" Resolver essas queixas pode ser a sua vantagem.",
            "Ofereça um ou dois trabalhos a um preço justo de começo a pessoas que conhece, e peça-lhes uma opinião sincera e, se ficarem contentes, uma pequena avaliação ou uma recomendação."
          ],
          steps: ["Fale com dez possíveis clientes.", "Pergunte se pagariam, com que frequência e quanto.", "Procure outras pessoas que fazem o mesmo perto de você.", "Pergunte à IA de que se queixam normalmente os clientes.", "Faça um ou dois trabalhos de começo e peça uma opinião."],
          words: [["Procura", "quantas pessoas querem uma coisa e vão pagar por ela."], ["Recomendação", "quando um cliente contente lhe manda um novo cliente."]],
          slides: [
            { title: "Pergunte antes de comprar", bullets: ["Fale com dez possíveis clientes", "Pagariam? Com que frequência? Quanto?"] },
            { title: "Olhe à sua volta", bullets: ["Outros fazem o mesmo = as pessoas pagam por isso", "Pergunte à IA quais são as queixas comuns", "Resolva-as para se destacar"] },
            { title: "Trabalhos de começo", bullets: ["Um ou dois trabalhos a um preço justo", "Peça uma opinião", "Peça recomendações aos clientes contentes"] }
          ],
          tryIt: "Escreva as três perguntas que vai fazer e depois fale com pelo menos cinco possíveis clientes esta semana. Anote o que disseram.",
          youCanNow: "testar se as pessoas vão pagar antes de gastar dinheiro.",
          quickCheck: [
            { objective: "O2", q: "O que quer dizer procura?", options: ["O preço dos seus materiais", "O número de horas que trabalha", "O número da sua licença", "Quantas pessoas querem uma coisa e vão pagar por ela"], answer: 3, why: "A procura é quantas pessoas querem o seu serviço e vão pagar." },
            { objective: "O2", q: "Quer começar um biscate de trabalho de jardim. Qual é o melhor primeiro passo?", options: ["Comprar um corta-relva novo", "Perguntar a dez vizinhos se pagariam, com que frequência e quanto", "Imprimir 500 folhetos", "Criar um site"], answer: 1, why: "Teste a procura falando com possíveis clientes antes de gastar dinheiro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Definir o seu preço",
          minutes: 5,
          goal: "Definir um preço que pague os custos, pague o seu trabalho de forma justa e combine com o mercado.",
          text: [
            "Um preço tem de pagar três coisas: os seus custos (materiais, bilhete de autocarro ou combustível, telefone), o seu tempo, e um pouco mais para poupar ou crescer. Cobrar pouco demais parece seguro, mas pode deixá-lo a trabalhar quase de graça.",
            "Exemplo: limpar um apartamento leva 3 horas e $10 em materiais. Se quer $20 por hora pelo seu tempo, são $60 mais $10, ou seja, cerca de $70. Depois verifique: quanto cobram outras pessoas perto de você? Suba ou baixe o preço.",
            "Peça à IA para verificar as suas contas e sugerir pacotes: \"Limpo apartamentos. Os meus custos são $10 por trabalho, quero $20 por hora, e um trabalho leva 3 horas. Sugira um preço básico, um preço de limpeza profunda e um desconto semanal.\" Confirme você mesmo as contas da IA."
          ],
          steps: ["Some os custos por trabalho.", "Decida quanto vale a sua hora e multiplique pelas horas.", "Some os custos e o tempo.", "Compare com outras pessoas perto de você.", "Peça à IA para sugerir pacotes e depois verifique as contas."],
          words: [["Custo", "dinheiro que gasta para fazer o trabalho."], ["Pacote", "um conjunto de serviços vendidos juntos a um só preço."]],
          slides: [
            { title: "Um preço paga", bullets: ["Custos: materiais, transporte, telefone", "O seu tempo", "Um pouco mais para poupar"] },
            { title: "Faça as contas", bullets: ["3 horas x $20 = $60", "+ $10 de materiais = cerca de $70", "Compare com outras pessoas perto de você"] },
            { title: "Use a IA para os pacotes", bullets: ["Básico, completo, desconto para clientes regulares", "Confirme as contas da IA"] }
          ],
          tryIt: "Calcule o seu preço para um trabalho do seu biscate: custos, tempo e comparação com o mercado. Peça à IA para sugerir dois pacotes e verifique as contas.",
          youCanNow: "definir um preço justo com base nos custos, no tempo e no mercado.",
          quickCheck: [
            { objective: "O3", q: "Um trabalho leva 4 horas, quer $15 por hora, e os materiais custam $8. Qual é o preço base?", options: ["$68", "$60", "$23", "$15"], answer: 0, why: "4 horas vezes $15 são $60, mais $8 de materiais, o que dá $68." },
            { objective: "O3", q: "O seu preço base é $70, mas todos perto de você cobram cerca de $90 pelo mesmo trabalho. O que faz?", options: ["Baixa para $30 para ganhar todos os trabalhos", "Mantém os $70 aconteça o que acontecer", "Ajusta o preço depois de comparar, porque pode estar a cobrar pouco demais", "Recusa-se a definir um preço"], answer: 2, why: "Compare com outras pessoas perto de você e ajuste; cobrar pouco demais pode deixá-lo a trabalhar quase de graça." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Escolher e testar o seu biscate",
        questions: [
          { objective: "O1", q: "O que faz um bom primeiro biscate?", options: ["Custa milhares para começar", "Precisa de uma habilidade que não tem", "Usa as suas habilidades, precisa de pouco dinheiro e cabe no seu tempo", "Precisa de um grande escritório"], answer: 2, why: "Um custo baixo e as suas habilidades tornam mais fácil começar." },
          { objective: "O1", q: "Antes de começar, alguém em liberdade condicional deve:", options: ["Verificar as suas condições e perguntar ao seu agente se não tiver a certeza", "Ignorar as suas condições", "Começar qualquer coisa logo", "Só perguntar a um amigo"], answer: 0, why: "As condições podem limitar alguns trabalhos." },
          { objective: "O1", q: "Onde verifica se um ofício como barbeiro precisa de uma licença?", options: ["Num vídeo qualquer", "Num palpite da IA", "A um vizinho", "No site da entidade de licenciamento do seu estado"], answer: 3, why: "As entidades do estado definem as regras das licenças." },
          { objective: "O2", q: "Outras pessoas na sua zona já oferecem o seu serviço. Isto quer dizer:", options: ["Tem de desistir", "As pessoas pagam por isso, por isso há procura", "É ilegal", "Ninguém o quer"], answer: 1, why: "Os negócios que já existem mostram que os clientes pagam." },
          { objective: "O3", q: "Um trabalho leva 2 horas, quer $25 por hora, e os materiais custam $5. Um preço base justo é cerca de:", options: ["$5", "$27", "$55", "$250"], answer: 2, why: "2 x $25 + $5 = $55." }
        ]
      }
    },
    {
      name: "Capítulo 2: Lançar e gerir o seu biscate",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escrever a sua oferta e um folheto com IA",
          minutes: 5,
          goal: "Escrever uma oferta clara e fazer um folheto ou publicação com a ajuda da IA.",
          text: [
            "Uma oferta diz o que você faz, para quem é, o preço e como marcar. Exemplo: \"Limpeza de apartamentos no Bairro Leste. Limpeza básica $70, limpeza profunda $110. Pontual, cuidadoso, com referências. Envie SMS para [telefone] para marcar.\"",
            "Peça à IA: \"Escreva três versões curtas de uma oferta para o meu [serviço] em [zona] a [preço]. Simpática e de confiança. Menos de 40 palavras.\" Escolha a que soa mais como você e tire tudo o que não é verdade, como \"licenciado e com seguro\" se não for.",
            "Faça um folheto ou publicação no plano gratuito do Canva ou no Google Docs. Use um título claro, duas ou três vantagens, o preço e como o contactar. Se puder, use um número de telefone só para o negócio ou um número de SMS gratuito, e nunca publique a morada da sua casa."
          ],
          steps: ["Escreva o quê, para quem, o preço e como marcar.", "Peça à IA três versões curtas.", "Escolha uma e tire tudo o que não é verdade.", "Faça um folheto ou publicação com título, vantagens, preço e contacto.", "Mantenha a morada da sua casa privada."],
          words: [["Oferta", "uma frase clara que diz o que vende, para quem e a que preço."], ["Folheto", "um anúncio de uma página, impresso ou digital."]],
          slides: [
            { title: "Uma oferta clara", bullets: ["O que você faz e para quem é", "Preço", "Como marcar"] },
            { title: "Deixe a IA ajudar", bullets: ["Peça três versões curtas", "Escolha a que soa como você", "Tire tudo o que não é verdade"] },
            { title: "Folheto ou publicação", bullets: ["Título, vantagens, preço, contacto", "Canva ou Google Docs", "Nunca publique a morada da sua casa"] }
          ],
          tryIt: "Use a IA para escrever três versões da sua oferta, escolha uma e faça com ela um folheto ou uma publicação nas redes sociais.",
          youCanNow: "escrever uma oferta honesta e fazer um folheto ou publicação simples com a ajuda da IA.",
          quickCheck: [
            { objective: "O4", q: "Que quatro coisas diz uma oferta clara?", options: ["O seu nome, idade, morada e história", "O que você faz, para quem é, o preço e como marcar", "As suas habilidades, escola, passatempos e objetivos", "Só o preço"], answer: 1, why: "Uma oferta clara diz o quê, para quem, o preço e como marcar." },
            { objective: "O4", q: "Está a fazer um folheto para o seu serviço de limpeza. Que contacto deixa de fora?", options: ["O número de telefone do negócio", "Um número de SMS gratuito", "O seu primeiro nome", "A morada da sua casa"], answer: 3, why: "Nunca publique a morada da sua casa; use um número do negócio ou um número de SMS gratuito." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Conseguir os primeiros clientes com segurança",
          minutes: 5,
          goal: "Encontrar os primeiros clientes através de pessoas e lugares de confiança, e trabalhar com segurança.",
          text: [
            "Os seus primeiros clientes costumam vir de pessoas que o conhecem: família, amigos, igreja, o seu programa de reintegração, antigos colegas de trabalho. Conte a cinco pessoas por dia o que faz e dê-lhes um folheto ou envie a sua publicação.",
            "Publique em quadros de avisos da comunidade: bibliotecas, lavandarias, centros comunitários e grupos locais na internet, seguindo as regras de cada lugar. Peça a cada cliente contente uma avaliação ou que conte a um amigo.",
            "Proteja-se. Encontre-se com clientes novos primeiro num lugar público ou leve alguém consigo. Receba o pagamento da forma combinada e tenha cuidado com as aplicações: nunca aceite um pagamento a mais para devolver a diferença, porque é uma burla comum. Escreva o que cada trabalho inclui antes de começar, para não haver confusão."
          ],
          steps: ["Conte a cinco pessoas por dia sobre o seu serviço.", "Publique em quadros de avisos da comunidade e em grupos locais.", "Peça avaliações e recomendações aos clientes contentes.", "Combine por escrito o que cada trabalho inclui e o preço.", "Tenha cuidado com as burlas do pagamento a mais."],
          words: [["Passa-palavra", "quando os clientes falam de você a outras pessoas."], ["Burla do pagamento a mais", "um truque em que alguém paga a mais e pede que devolva a diferença; depois o pagamento dele é anulado."]],
          slides: [
            { title: "Primeiros clientes", bullets: ["Família, amigos, igreja, programas", "Conte a cinco pessoas por dia"] },
            { title: "Espalhe a palavra", bullets: ["Biblioteca, lavandaria, quadros de avisos", "Grupos locais na internet", "Avaliações e recomendações"] },
            { title: "Proteja-se", bullets: ["Encontre pessoas novas num lugar público ou leve alguém", "Combine o trabalho e o preço por escrito", "Nunca devolva um pagamento a mais"] }
          ],
          sources: [{ name: "FTC: Burlas com cheques falsos", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams" }],
          tryIt: "Escreva uma lista de 15 pessoas ou lugares a quem contar sobre o seu biscate. Contacte cinco deles hoje com o seu folheto ou publicação.",
          youCanNow: "encontrar os primeiros clientes através de pessoas e lugares de confiança e manter-se em segurança.",
          quickCheck: [
            { objective: "O5", q: "De onde vem a maioria dos primeiros clientes?", options: ["De anúncios pagos na internet", "De desconhecidos noutras cidades", "De pessoas que o conhecem, como família, amigos e igreja", "De grandes empresas"], answer: 2, why: "Os primeiros clientes costumam vir de pessoas que já o conhecem e confiam em você." },
            { objective: "O5", q: "Um cliente novo que nunca viu quer que vá a casa dele. O que é mais seguro?", options: ["Encontrar-se primeiro num lugar público ou levar alguém consigo", "Ir sozinho e não dizer a ninguém", "Pedir o pagamento todo em cartões-presente", "Partilhar a morada da sua casa"], answer: 0, why: "Encontre-se primeiro num lugar público ou leve alguém, e combine o trabalho por escrito." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Registar o dinheiro e preparar-se para os impostos",
          minutes: 6,
          goal: "Manter um registo de dinheiro simples e saber o básico sobre os impostos de um biscate.",
          text: [
            "Registe cada dólar desde o primeiro dia. Um registo de dinheiro simples no Google Sheets ou num caderno: data, cliente (primeiro nome ou uma etiqueta), trabalho, dinheiro que entra, dinheiro que sai, e para que foi o dinheiro que saiu. Guarde os recibos dos materiais, numa pasta ou como fotografias no telefone.",
            "Nos EUA, o dinheiro de um biscate paga impostos, mesmo em dinheiro vivo e mesmo em pequenas quantias. Quem trabalha por conta própria pode ter de pagar o imposto de trabalhador independente (self-employment tax) e pode ter de pagar impostos estimados durante o ano. As regras e os limites mudam, por isso verifique em irs.gov ou num programa gratuito de ajuda com impostos como o VITA antes da época dos impostos.",
            "Se crescer, talvez queira uma conta bancária do negócio, registar o nome do negócio na sua cidade ou estado, ou um EIN. O IRS diz que o EIN é gratuito no IRS; cuidado com sites que cobram por ele. A IA pode ajudar a fazer o registo de dinheiro e explicar palavras dos impostos, mas para os seus impostos verdadeiros use irs.gov ou um profissional de impostos."
          ],
          steps: ["Faça um registo de dinheiro: data, etiqueta do cliente, trabalho, entrada, saída, para quê.", "Guarde todos os recibos.", "Some o que ganhou e o que gastou todos os meses.", "Ponha de lado uma parte de cada pagamento para os impostos.", "Verifique em irs.gov ou num programa gratuito de ajuda com impostos antes da época dos impostos."],
          words: [["Imposto de trabalhador independente (self-employment tax)", "o imposto da Segurança Social (Social Security) e do Medicare dos EUA para quem trabalha por conta própria."], ["EIN", "Employer Identification Number: um número federal de identificação fiscal para um negócio."], ["VITA", "Volunteer Income Tax Assistance: ajuda gratuita com impostos, apoiada pelo IRS, para quem tem direito."]],
          slides: [
            { title: "Registe cada dólar", bullets: ["Data, etiqueta do cliente, trabalho", "Dinheiro que entra e dinheiro que sai", "Guarde todos os recibos"] },
            { title: "Impostos (EUA)", bullets: ["O dinheiro do biscate paga impostos, também em dinheiro vivo", "Podem aplicar-se o imposto de independente e os impostos estimados", "Verifique em irs.gov ou na ajuda gratuita do VITA"] },
            { title: "Quando crescer", bullets: ["Conta bancária do negócio", "Registo do nome na cidade ou no estado", "O EIN é gratuito no IRS"] }
          ],
          sources: [{ name: "IRS: Obter um Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Gerir os impostos do trabalho por conta própria (gig work)", url: "https://www.irs.gov/businesses/gig-economy-tax-center" }, { name: "IRS: Preparação gratuita da declaração de impostos (VITA)", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }],
          tryIt: "Tarefa final: faça o seu registo de dinheiro e termine a sua folha de lançamento de uma página: serviço, regras verificadas, preço, oferta, folheto ou publicação, cinco pessoas ou lugares a quem contar, e o registo de dinheiro pronto para a sua primeira venda.",
          youCanNow: "começar um biscate com a ajuda da IA, encontrar clientes com segurança e registar o seu dinheiro para os impostos.",
          quickCheck: [
            { objective: "O6", q: "O que se escreve no registo de dinheiro de um biscate?", options: ["Os nomes completos e os números de telefone dos clientes", "Só o dinheiro que ganhou", "A palavra-passe do seu banco", "Data, etiqueta do cliente, trabalho, dinheiro que entra, dinheiro que sai e para que foi"], answer: 3, why: "Um registo de dinheiro regista cada dólar que entra e sai desde o primeiro dia." },
            { objective: "O6", q: "Ganhou $300 em dinheiro vivo este mês com pequenos trabalhos. O que faz quanto aos impostos?", options: ["Nada; o dinheiro vivo não paga impostos", "Regista-o, põe uma parte de lado e verifica em irs.gov ou no VITA antes da época dos impostos", "Gasta-o antes que alguém saiba", "Pede a um cliente para declarar por você"], answer: 1, why: "O dinheiro de um biscate paga impostos mesmo em dinheiro vivo, por isso registe-o e procure ajuda de confiança com os impostos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Lançar e gerir o seu biscate",
        questions: [
          { objective: "O4", q: "O que deve estar numa oferta clara?", options: ["A morada da sua casa", "O seu número da Segurança Social", "Uma licença falsa", "O que você faz, para quem, o preço e como marcar"], answer: 3, why: "Essas quatro partes tornam uma oferta clara." },
          { objective: "O4", q: "A IA escreve \"licenciado e com seguro\", mas você não é. O que faz?", options: ["Tira essas palavras", "Deixa ficar", "Põe em letras maiores", "Acrescenta \"premiado\""], answer: 0, why: "Nunca diga o que não é verdade." },
          { objective: "O5", q: "Um cliente paga-lhe $200 por um trabalho de $70 e pede que devolva $130. Isto é provavelmente:", options: ["Uma gorjeta generosa", "Uma operação normal do banco", "Uma burla do pagamento a mais", "Um reembolso de impostos"], answer: 2, why: "Os pedidos de devolução de um pagamento a mais são uma burla comum." },
          { objective: "O6", q: "O dinheiro vivo de um biscate paga impostos nos EUA?", options: ["Não, o dinheiro vivo nunca paga impostos", "Só acima de $1 milhão", "Só em alguns meses", "Sim"], answer: 3, why: "Todo o rendimento, incluindo em dinheiro vivo, paga impostos." },
          { objective: "O6", q: "Quanto cobra o IRS por um EIN?", options: ["$500", "$50 por mês", "Nada; é gratuito no IRS", "Depende do site"], answer: 2, why: "O IRS diz que o EIN é gratuito; cuidado com sites que cobram." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Empreendedorismo e Biscates com IA",
    questions: [
      { objective: "O1", q: "Um biscate é:", options: ["Um emprego do governo a tempo inteiro", "Uma pequena forma de ganhar dinheiro por conta própria, muitas vezes a tempo parcial", "Um empréstimo", "Uma burla"], answer: 1, why: "É um trabalho pequeno, feito por conta própria." },
      { objective: "O1", q: "Qual é um bom biscate para quem cozinhava numa cozinha grande?", options: ["Preparar refeições para os vizinhos", "Trabalhos de eletricista sem licença", "Comprar e vender ações no mesmo dia", "Vender medicamentos"], answer: 0, why: "Usa habilidades que já tem e precisa de pouco dinheiro." },
      { objective: "O1", q: "Quando pede à IA ideias de biscates, diga-lhe:", options: ["O número do seu processo", "Os dados de acesso do seu banco", "As suas habilidades, o seu tempo, o seu dinheiro e o seu transporte", "Nada"], answer: 2, why: "Limites verdadeiros dão ideias realistas." },
      { objective: "O1", q: "Algumas licenças do estado têm em conta o registo criminal. Onde estão as regras?", options: ["No site da entidade de licenciamento do estado", "Num grupo das redes sociais", "Num folheto", "Só numa conversa com a IA"], answer: 0, why: "As entidades de licenciamento publicam as suas regras." },
      { objective: "O2", q: "Com quantos possíveis clientes o curso sugere falar?", options: ["Um", "Zero", "Mil", "Dez"], answer: 3, why: "Dez conversas mostram a procura verdadeira." },
      { objective: "O2", q: "Procura quer dizer:", options: ["Quanto você quer ganhar", "Quantas pessoas querem uma coisa e vão pagar", "Uma ordem legal", "Um preço"], answer: 1, why: "A procura tem a ver com clientes dispostos a pagar." },
      { objective: "O2", q: "Perguntar à IA de que se queixam os clientes ajuda-o a:", options: ["Copiar os preços dos concorrentes", "Encontrar formas de se destacar", "Evitar clientes", "Saltar o teste"], answer: 1, why: "Resolver as queixas comuns é uma vantagem." },
      { objective: "O3", q: "Um preço deve pagar:", options: ["Só os materiais", "Só o que os amigos querem pagar", "Nada", "Os custos, o seu tempo e um pouco mais"], answer: 3, why: "As três coisas mantêm o seu negócio a funcionar." },
      { objective: "O3", q: "3 horas a $20 mais $10 de materiais são:", options: ["$33", "$60", "$70", "$200"], answer: 2, why: "3 x 20 = 60, mais 10 = 70." },
      { objective: "O3", q: "Um pacote é:", options: ["Uma caixa que chega pelo correio", "Um formulário de impostos", "Um conjunto de serviços vendidos juntos a um só preço", "Um empréstimo"], answer: 2, why: "Os pacotes tornam a escolha fácil." },
      { objective: "O3", q: "Depois de a IA sugerir preços, você deve:", options: ["Aceitar sem olhar", "Triplicar todos os preços", "Ignorar o mercado", "Confirmar você mesmo as contas"], answer: 3, why: "A IA pode errar nas contas." },
      { objective: "O4", q: "O que nunca deve pôr num folheto?", options: ["O seu preço", "O seu serviço", "A morada da sua casa", "Como marcar"], answer: 2, why: "Mantenha a morada da sua casa privada." },
      { objective: "O4", q: "Que ferramenta gratuita pode usar para fazer um folheto?", options: ["Só uma gráfica paga", "O plano gratuito do Canva ou o Google Docs", "Um formulário de impostos", "Uma aplicação do banco"], answer: 1, why: "Os dois são gratuitos e fáceis." },
      { objective: "O5", q: "Os seus primeiros clientes costumam vir de:", options: ["Pessoas que o conhecem", "Anúncios pagos na televisão", "Desconhecidos noutros países", "Lado nenhum"], answer: 0, why: "A confiança começa com as pessoas que conhece." },
      { objective: "O5", q: "Quando se encontra com um cliente novo pela primeira vez, é mais seguro:", options: ["Ir sozinho a um lugar desconhecido à noite", "Partilhar primeiro a sua morada", "Encontrar-se num lugar público ou levar alguém", "Não combinar o trabalho"], answer: 2, why: "Com pessoas novas, a segurança vem primeiro." },
      { objective: "O5", q: "Escrever o que cada trabalho inclui ajuda a:", options: ["Evitar confusão sobre o trabalho e o preço", "Tornar os trabalhos mais longos", "Fugir aos impostos", "Nada"], answer: 0, why: "Acordos claros evitam desentendimentos." },
      { objective: "O6", q: "Um registo de dinheiro inclui:", options: ["As palavras-passe dos clientes", "O seu número da Segurança Social", "Só o dinheiro que entra", "Data, etiqueta do cliente, trabalho, dinheiro que entra, dinheiro que sai"], answer: 3, why: "São precisos tanto o que entra como o que sai." },
      { objective: "O6", q: "Porque guardar os recibos dos materiais?", options: ["Para deitar fora mais tarde", "Para registar os custos e apoiar os registos dos impostos", "Para decorar", "Não servem para nada"], answer: 1, why: "Os recibos provam os seus custos." },
      { objective: "O6", q: "Onde pode ter ajuda gratuita com os impostos, se tiver direito?", options: ["Num site qualquer que cobra pelo EIN", "No VITA, através do IRS", "Com um burlão", "Em lado nenhum"], answer: 1, why: "O VITA dá ajuda gratuita com os impostos a quem tem direito." },
      { objective: "O6", q: "A IA explica o imposto de trabalhador independente. Para os seus impostos verdadeiros, você deve:", options: ["Confiar totalmente na IA", "Não entregar a declaração", "Perguntar a um desconhecido na internet", "Verificar em irs.gov ou com um profissional de impostos"], answer: 3, why: "As regras dos impostos mudam e dependem da sua situação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      5,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Serviço e regras",
        objective: "O1",
        notYet: "O serviço não está claro, ou as regras e as licenças não foram verificadas.",
        meets: "Diz o serviço e para quem é, e que regras ou licenças foram verificadas e onde.",
        exceeds: "Também diz como o aluno confirmou que combina com as condições da sua liberdade condicional ou pena suspensa, se se aplicarem."
      },
      {
        name: "Preço",
        objective: "O3",
        notYet: "Não há preço, ou o preço não paga os custos.",
        meets: "Um preço que paga os custos, o tempo e um pouco mais, com as contas mostradas.",
        exceeds: "Comparou com outras pessoas da zona e oferece um ou dois pacotes."
      },
      {
        name: "Oferta e folheto",
        objective: "O4",
        notYet: "Falta o preço ou o contacto, tem afirmações falsas, ou mostra a morada de casa.",
        meets: "Diz o quê, para quem, o preço e como marcar, sem nada falso e sem a morada de casa.",
        exceeds: "O folheto tem um título claro e duas ou três vantagens e soa como o aluno."
      },
      {
        name: "Primeiros clientes",
        objective: "O5",
        notYet: "Menos de cinco pessoas ou lugares na lista.",
        meets: "Cinco pessoas ou lugares a quem contar, e um plano para combinar cada trabalho por escrito.",
        exceeds: "Inclui um plano de segurança para se encontrar com clientes novos e evitar as burlas do pagamento a mais."
      },
      {
        name: "Registo de dinheiro",
        objective: "O6",
        notYet: "Não há registo de dinheiro.",
        meets: "Um registo de dinheiro pronto com data, etiqueta do cliente, trabalho, entrada, saída e para quê.",
        exceeds: "Inclui uma pasta para os recibos e onde obter ajuda gratuita com os impostos."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem uma primeira venda em 30 dias (inquérito de seguimento)",
      "Alunos que ainda ganham dinheiro com um biscate e mantêm um registo de dinheiro depois de 90 dias",
      "Alunos que dizem ter declarado os impostos do rendimento do biscate com a ajuda de irs.gov, do VITA ou de um profissional"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou do programa",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini) e o plano gratuito do Canva ou o Google Docs",
      "Google Sheets ou um caderno para o registo de dinheiro",
      "Papel e caneta para a folha de lançamento",
      "Cerca de 60 minutos no total, em sessões curtas, mais uma semana para testar a procura"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que verifiquem as suas condições, e perguntem ao seu agente se não tiverem a certeza, antes de começarem qualquer trabalho.",
      "Façam juntos um exemplo de preço no quadro para que os alunos vejam as contas.",
      "Não dê conselhos fiscais ou legais; indique aos alunos irs.gov, o VITA ou um profissional de impostos.",
      "Avalie a folha de lançamento com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
