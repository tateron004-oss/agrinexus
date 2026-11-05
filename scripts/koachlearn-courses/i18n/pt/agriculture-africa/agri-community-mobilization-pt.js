"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-community-mobilization.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_MECH = { name: "FAO: Mecanização agrícola sustentável: o que a FAO faz (serviços de aluguer, apoio aos pequenos agricultores)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Quénia): Serviços de certificação de sementes e de proteção de variedades vegetais", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria: o Conselho Nacional de Sementes Agrícolas (NASC) alerta os agricultores contra sementes falsas (comprar a agro-revendedores registados; etiqueta de certificação)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Lei de Plantas e Fertilizantes do Gana, 2010 (Lei 803): registo de sementes e fertilizantes (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "FAO, Kit de ferramentas de registo de pesticidas: registos nacionais de pesticidas em África", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "Aliança Cooperativa Internacional: a identidade, os valores e os princípios cooperativos", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-pt",
  lang: "pt",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Mobilização Comunitária: Partilhar Máquinas e Negociar a Compra de Insumos",
  skills: "Mapear as necessidades da comunidade, Convocar e conduzir uma primeira reunião, Acordar objetivos e regras, Juntar dinheiro para máquinas e aluguer de trator, Comprar em grande quantidade e negociar insumos verdadeiros, Manter a confiança com registos abertos",
  outcome: "juntar os agricultores da sua comunidade em torno de uma necessidade comum, acordar objetivos e regras justas, e fazer um plano escrito para comprar sementes e fertilizantes em grande quantidade ou partilhar um trator ou uma máquina, com registos abertos que mantêm a confiança de todos.",
  about: [
    "Um agricultor sozinho paga o preço mais alto por um saco de fertilizante e espera semanas por um trator. Vinte agricultores juntos podem negociar um preço melhor, verificar se os insumos são verdadeiros e marcar ou partilhar uma máquina na altura certa. Este curso é para agricultores líderes, líderes de grupos de agricultores, extensionistas, grupos de jovens e de mulheres, e para quem quer organizar os vizinhos no Quénia, na Nigéria, no Gana, no Burkina Faso e em toda a África.",
    "Você vai mapear o que a sua comunidade precisa, convocar e conduzir uma primeira reunião, acordar um objetivo comum e regras simples, planear dinheiro em conjunto para uma máquina ou um serviço de aluguer de trator, comprar insumos em grande quantidade e negociar com os fornecedores, evitar sementes e fertilizantes falsos, resolver conflitos, manter registos abertos e garantir que as mulheres e os jovens têm voz de verdade.",
    "Este curso parte do curso \"Cooperativas de Agricultores e Chegar ao Mercado\", que trata do registo formal, dos estatutos e da venda em grupo, por isso não os repete. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" na sua própria comunidade. Os valores em dinheiro são só exemplos."
  ],
  finalTask: "Faça um plano escrito para a sua comunidade: um plano de compra de insumos em grande quantidade (membros, quantidades, sinais pagos, três orçamentos de fornecedores, como vai verificar se os insumos são verdadeiros, entrega e distribuição) ou um acordo de partilha de máquinas (a máquina ou o serviço de aluguer, o calendário de marcações, as taxas, o fundo de manutenção, o operador e o que acontece se avariar), com os registos que vai mostrar aos membros e a forma como as mulheres e os jovens participam.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores líderes, líderes de grupos de agricultores e de aldeias, extensionistas, e membros de grupos de mulheres e de jovens no Quénia, na Nigéria, no Gana, na África Ocidental francófona e em toda a África. A maioria cultiva pequenos terrenos de milho, mandioca, arroz, mapira (sorgo), feijão, amendoim ou hortícolas.",
    startingPoint: "Conhecem os vizinhos e os problemas que partilham, como a lavoura tardia, o fertilizante caro e as sementes falsas. Alguns pertencem a grupos informais ou a grupos de poupança. Poucos já conduziram uma reunião de planeamento, juntaram dinheiro para uma compra em conjunto ou negociaram com um fornecedor.",
    gap: "Os agricultores perdem colheita e dinheiro quando a lavoura chega tarde, quando os insumos custam demasiado ou são falsos, e quando os grupos se desfazem por causa do dinheiro. Os líderes precisam de mapear as necessidades, organizar uma reunião justa, acordar regras, conduzir uma compra em conjunto ou um plano de partilha de máquinas, e manter os registos abertos para que a confiança dure, incluindo as mulheres e os jovens, que muitas vezes ficam de fora.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam português como segunda língua, e as reuniões podem ser em línguas locais",
      "Aparelhos: um telefone simples para chamadas, SMS e dinheiro móvel; registos em papel",
      "Dinheiro: pequenas quantias juntadas por muitos membros; nenhuma perda pode ser escondida",
      "Regras: as regras e os registos de sementes, fertilizantes e pesticidas são diferentes em cada país e mudam; os alunos verificam junto dos organismos nacionais",
      "Tempo: as reuniões têm de caber entre o trabalho no campo, os mercados e as tarefas da casa, sobretudo para as mulheres"
    ],
    prerequisites: "Nenhum. Útil: \"Cooperativas de Agricultores e Chegar ao Mercado\", para o registo formal mais tarde."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Na sua aldeia ou no seu grupo de agricultores", action: "mapear as necessidades agrícolas comuns da comunidade e ordenar as três principais", standard: "depois de perguntar a pelo menos dez famílias, incluindo mulheres e jovens agricultores" },
    { id: "O2", condition: "Com a principal necessidade comum", action: "convocar e conduzir uma primeira reunião que acorde um objetivo comum e regras escritas", standard: "com uma ordem de trabalhos, uma ata, um responsável com nome para cada tarefa e regras sobre o dinheiro, as decisões e a saída" },
    { id: "O3", condition: "Com uma necessidade de lavoura, debulha ou outra máquina", action: "escrever um plano de partilha de máquinas ou de aluguer de trator", standard: "que trate de alugar ou comprar, de um calendário de marcações justo, das taxas, de um fundo de manutenção, do operador e do que acontece se avariar" },
    { id: "O4", condition: "Com as encomendas de sementes e fertilizantes dos membros", action: "planear uma compra em grande quantidade, comparar pelo menos três orçamentos de fornecedores e negociar", standard: "com os sinais registados, os insumos verificados como verdadeiros e registados, e os recibos em nome do grupo" },
    { id: "O5", condition: "Enquanto o grupo trata do dinheiro e das decisões", action: "manter registos abertos, resolver desacordos pelos passos acordados e dar às mulheres e aos jovens um papel real", standard: "para que todos os membros vejam para onde foi cada pagamento, e as mulheres e os jovens tenham tarefas ou cargos de liderança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Juntar a comunidade",
      lessons: [
        {
          title: "Mapear as necessidades da sua comunidade",
          objectives: ["O1"],
          minutes: 5,
          goal: "Perguntar a pelo menos dez famílias sobre os seus problemas agrícolas e ordenar as três principais necessidades comuns.",
          text: [
            "As pessoas entram num grupo quando ele resolve um problema que sentem. Por isso, antes de convocar uma reunião, descubra o que os seus vizinhos precisam de verdade. Não adivinhe: o líder pode pensar que é um trator, enquanto a maioria dos agricultores diz que são as sementes falsas ou o preço do fertilizante.",
            "Visite ou telefone a pelo menos dez famílias. Faça sempre as mesmas poucas perguntas: Quais são as suas principais culturas ou animais? O que prejudicou a sua última colheita? Quanto paga pela lavoura, pelas sementes e pelo fertilizante, e quando os recebe? O que faria em conjunto com os vizinhos? Pergunte também às mulheres e aos jovens agricultores, não só ao chefe da família; os problemas deles podem ser diferentes, como não ter título da terra para obter crédito ou ser atendido em último lugar pelo trator.",
            "Escreva as respostas numa só folha: uma linha por família, uma coluna por problema. Conte quantas famílias falaram de cada problema. Os três primeiros são as necessidades comuns da sua comunidade. Também pode desenhar um mapa simples da aldeia com os campos, as estradas, as lojas de insumos e onde há um trator ou um moinho. Um telefone pode ajudar a contar e ordenar as respostas."
          ],
          steps: ["Escreva quatro ou cinco perguntas simples.", "Pergunte a pelo menos dez famílias, incluindo mulheres e jovens agricultores.", "Registe as respostas numa tabela: uma linha por família.", "Conte quantas falaram de cada problema.", "Ordene as três principais necessidades comuns."],
          words: [["Mobilização", "juntar as pessoas para agirem sobre uma necessidade comum."], ["Mapa de necessidades", "um registo simples dos problemas que as famílias partilham e de onde estão os recursos."], ["Família (agregado familiar)", "as pessoas que vivem e trabalham a terra juntas e partilham a comida e o dinheiro."]],
          slides: [
            { title: "Comece pela necessidade", bullets: ["As pessoas juntam-se para resolver um problema que sentem", "Não adivinhe: pergunte primeiro", "A ideia do líder pode não ser a maior necessidade"] },
            { title: "Pergunte a dez famílias ou mais", bullets: ["O que prejudicou a sua última colheita?", "Quanto paga pela lavoura, sementes, fertilizante?", "Pergunte também às mulheres e aos jovens agricultores"] },
            { title: "Conte e ordene", bullets: ["Uma linha por família", "Conte cada problema", "Os três primeiros = necessidades comuns"] }
          ],
          tryIt: "Faça as suas perguntas a pelo menos dez famílias da sua comunidade. Ponha as respostas numa tabela, conte cada problema e escreva as três principais necessidades comuns.",
          youCanNow: "mapear as necessidades agrícolas da sua comunidade e ordenar os três principais problemas comuns.",
          quickCheck: [
            { objective: "O1", q: "Porque perguntar às famílias antes de convocar uma reunião?", options: ["Para recolher dinheiro cedo", "Para escolher o líder", "Para lhes vender insumos", "Para descobrir que problemas as pessoas partilham de verdade"], answer: 3, why: "Um grupo dura quando resolve uma necessidade que a maioria dos membros sente, não só a ideia do líder." },
            { objective: "O1", q: "A quem deve perguntar sobre as necessidades?", options: ["Às mulheres e aos jovens agricultores, e também aos chefes de família", "Só aos homens mais velhos", "Só a quem tem trator", "Só a quem sabe ler"], answer: 0, why: "As mulheres e os jovens podem ter problemas diferentes, por isso deixá-los de fora dá uma imagem errada." }
          ]
        },
        {
          title: "Convocar e conduzir uma primeira reunião",
          objectives: ["O2"],
          minutes: 5,
          goal: "Conduzir uma primeira reunião com uma ordem de trabalhos que termina com tarefas claras e uma ata.",
          text: [
            "Escolha uma hora e um lugar que convenham à maioria: depois do trabalho no campo, não em dia de mercado, num lugar a que as mulheres e os jovens cheguem com facilidade, como uma escola, uma igreja, uma mesquita ou debaixo de uma árvore conhecida. Convide as pessoas pessoalmente, por telefone, SMS ou de boca em boca, e através de pessoas respeitadas, como o régulo, um líder religioso ou o extensionista. Diga o objetivo numa frase: \"Vamos falar sobre como comprar fertilizante mais barato nesta campanha.\"",
            "Tenha uma ordem de trabalhos com quatro ou cinco pontos e faça uma reunião curta: boas-vindas e objetivo; o que o mapa de necessidades mostrou; ideias do que fazer em conjunto; acordar um primeiro passo; quem faz o quê e até quando. Escolha alguém para presidir e alguém para escrever a ata. Deixe todos falarem e pergunte diretamente às pessoas caladas.",
            "Termine com decisões, não só com conversa. Escreva cada tarefa, a pessoa responsável e a data. Leia a ata em voz alta e marque a próxima reunião. Exemplo: um grupo de produtores de sorgo no Burkina Faso decidiu na primeira reunião recolher as encomendas de fertilizante em duas semanas, com dois membros, um deles uma jovem, a fazer a lista."
          ],
          steps: ["Escolha uma hora e um lugar que convenham à maioria, incluindo mulheres e jovens.", "Convide pessoalmente e através de pessoas respeitadas, com o objetivo numa frase.", "Prepare uma ordem de trabalhos curta: objetivo, necessidades encontradas, ideias, primeiro passo, tarefas.", "Escolha quem preside e quem escreve a ata; deixe todos falarem.", "Termine com tarefas, nomes e datas; leia a ata em voz alta."],
          words: [["Ordem de trabalhos", "a lista do que a reunião vai discutir, por ordem."], ["Ata", "o registo escrito do que a reunião decidiu e de quem vai fazer o quê."], ["Presidente da reunião", "a pessoa que dirige a reunião e controla o tempo."]],
          slides: [
            { title: "Hora, lugar, convite", bullets: ["Depois do trabalho no campo, não em dia de mercado", "Um lugar a que as mulheres e os jovens cheguem", "Convide pessoalmente; objetivo numa frase"] },
            { title: "Uma ordem de trabalhos curta", bullets: ["Objetivo; o que o mapa de necessidades mostrou", "Ideias; acordar um primeiro passo", "Quem faz o quê, até quando"] },
            { title: "Termine com decisões", bullets: ["Tarefas, nomes e datas na ata", "Leia a ata em voz alta", "Marque a próxima reunião"] }
          ],
          tryIt: "Escreva o convite (uma frase com o objetivo, a hora e o lugar) e uma ordem de trabalhos com cinco pontos para a sua primeira reunião. Se puder, faça a reunião e escreva a ata com pelo menos duas tarefas, nomes e datas.",
          youCanNow: "convocar e conduzir uma primeira reunião curta que termina com tarefas, nomes, datas e uma ata.",
          quickCheck: [
            { objective: "O2", q: "Que hora de reunião é normalmente a melhor para os agricultores?", options: ["Dia de mercado ao meio-dia", "Depois do trabalho no campo, num lugar a que a maioria chegue", "Muito cedo, longe da aldeia", "Quando o líder estiver livre"], answer: 1, why: "Uma hora e um lugar convenientes deixam a maioria dos membros participar, incluindo as mulheres e os jovens." },
            { objective: "O2", q: "Como deve terminar uma primeira reunião?", options: ["Com um discurso longo", "Com todos a pagar dinheiro logo", "Com tarefas, nomes e datas escritos na ata", "Sem nenhuma decisão"], answer: 2, why: "Tarefas claras com nomes e datas transformam a conversa em ação." }
          ]
        },
        {
          title: "Objetivos comuns, regras justas e incluir todos",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Escrever um objetivo comum e cinco regras simples com que o seu grupo concorda.",
          text: [
            "Um objetivo comum é concreto e tem uma data: \"Até 1 de março, comprar juntos 200 sacos de fertilizante a um preço mais baixo do que os membros pagam sozinhos.\" ou \"Nesta campanha, o campo de cada membro é lavrado nas duas semanas a seguir às primeiras chuvas.\" Um objetivo claro mostra aos membros como é o sucesso.",
            "Acordem regras simples antes de mexer em qualquer dinheiro: quem pode entrar e quanto paga; como se tomam as decisões (por exemplo, um membro, um voto, como fazem as cooperativas); quem guarda o dinheiro e como (uma conta bancária ou de dinheiro móvel do grupo, com duas pessoas a aprovar os pagamentos); o que acontece se alguém não pagar ou não entregar; e como um membro pode sair e receber o seu dinheiro de volta. Escrevam as regras e leiam-nas em voz alta, para que os membros que não sabem ler também concordem.",
            "Abram espaço para as mulheres e os jovens de propósito. Façam as reuniões a horas em que possam participar, deixem os membros entrar em seu próprio nome, mesmo sem título da terra, e deem-lhes cargos reais, como tesoureiro, responsável pelas marcações ou verificador de insumos. Os grupos que os incluem têm muitas vezes mais membros, mais confiança e mais competências, como os membros jovens que usam bem o telefone e o dinheiro móvel. Quando o seu grupo estiver pronto para o registo formal, veja \"Cooperativas de Agricultores e Chegar ao Mercado\"."
          ],
          steps: ["Escreva um objetivo com um número e uma data.", "Acordem regras sobre a entrada, as decisões, o dinheiro, quem não paga ou não entrega, e a saída.", "Leiam as regras em voz alta e registem o acordo na ata.", "Deem às mulheres e aos jovens cargos reais e horas de reunião que lhes convenham."],
          words: [["Objetivo comum", "um resultado claro que todo o grupo quer, com um número e uma data."], ["Signatário", "uma pessoa autorizada a aprovar pagamentos da conta do grupo."], ["Inclusão", "garantir que todos, incluindo as mulheres e os jovens, podem entrar, falar e liderar."]],
          slides: [
            { title: "Um objetivo com um número e uma data", bullets: ["\"Até 1 de março, comprar juntos 200 sacos\"", "\"Cada campo lavrado nas duas semanas a seguir às chuvas\"", "Mostra como é o sucesso"] },
            { title: "Regras antes de mexer no dinheiro", bullets: ["Entrada e quotas; um membro, um voto", "Conta do grupo; duas pessoas aprovam os pagamentos", "Não pagar ou não entregar; saída e devolução"] },
            { title: "Incluir as mulheres e os jovens", bullets: ["Horas e lugares em que possam participar", "Entrar em seu próprio nome, sem título da terra", "Cargos reais: tesoureiro, marcações, verificador de insumos"] }
          ],
          sources: [ICA],
          tryIt: "Escreva o objetivo comum do seu grupo com um número e uma data, e cinco regras sobre a entrada, as decisões, o dinheiro, quem não paga ou não entrega, e a saída. Diga um cargo que uma mulher ou um membro jovem vai ocupar.",
          youCanNow: "escrever um objetivo comum claro e regras justas, e dar às mulheres e aos jovens um papel real no grupo.",
          quickCheck: [
            { objective: "O2", q: "Qual é o objetivo comum mais claro?", options: ["Até 1 de março, comprar juntos 200 sacos de fertilizante a um preço mais baixo", "Ajudar os agricultores", "Melhorar as coisas", "Arranjar algum fertilizante um dia"], answer: 0, why: "Um objetivo com um número e uma data mostra exatamente como é o sucesso." },
            { objective: "O5", q: "Uma jovem não tem título da terra, mas cultiva o seu próprio terreno. O que devem permitir as regras do grupo?", options: ["Ela não pode entrar", "Ela só entra através do marido", "Ela pode participar mas não votar", "Ela entra em seu próprio nome e pode ocupar um cargo"], answer: 3, why: "Deixar as mulheres e os jovens entrar e liderar em seu próprio nome cria um grupo maior e mais forte." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Juntar a comunidade",
        questions: [
          { objective: "O1", q: "Perguntou a doze famílias. Oito falaram de sementes falsas e três de tratores. Qual é a principal necessidade comum?", options: ["Tratores", "Uma estrada nova", "Sementes falsas", "Uma escola"], answer: 2, why: "O problema referido pelo maior número de famílias é a principal necessidade comum." },
          { objective: "O1", q: "O que é um mapa de necessidades?", options: ["Um registo simples dos problemas que as famílias partilham e de onde estão os recursos", "Um mapa das estradas até à cidade", "Uma lista de preços das culturas", "Um extrato bancário"], answer: 0, why: "Um mapa de necessidades mostra os problemas comuns e os recursos locais, como as lojas de insumos e as máquinas." },
          { objective: "O2", q: "Quem escreve o que a reunião decide?", options: ["O régulo", "O fornecedor", "Ninguém", "Quem escreve a ata"], answer: 3, why: "Quem escreve a ata regista as decisões, as tarefas, os nomes e as datas." },
          { objective: "O2", q: "Quando deve um grupo acordar as suas regras sobre o dinheiro?", options: ["Depois de haver um problema", "Antes de recolher qualquer dinheiro", "Só quando o grupo se regista", "Nunca; a confiança chega"], answer: 1, why: "Acordar as regras primeiro evita disputas depois de o dinheiro ser juntado." },
          { objective: "O5", q: "O que ajuda as mulheres a participar nas reuniões do grupo?", options: ["Reuniões a horas e em lugares que lhes convenham", "Reuniões só em dia de mercado", "Reuniões tarde da noite e longe", "Reuniões só para chefes de família"], answer: 0, why: "Uma hora e um lugar adequados tiram um obstáculo comum para as mulheres." }
        ]
      }
    },
    {
      name: "Capítulo 2: Juntar dinheiro, comprar em conjunto e manter a confiança",
      lessons: [
        {
          title: "Juntar dinheiro para máquinas e aluguer de trator",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escrever um plano para partilhar uma máquina ou alugar um serviço de trator em grupo.",
          text: [
            "Primeiro decida: alugar ou comprar? Comprar um trator custa muito dinheiro e precisa de combustível, reparações, um operador formado e trabalho suficiente para o manter ocupado. Para a maioria dos grupos pequenos, alugar um serviço de trator em grupo é o primeiro passo: um prestador de aluguer dá muitas vezes melhor horário ou preço para muitos campos perto uns dos outros. A FAO apoia os serviços de aluguer como forma de os pequenos agricultores terem acesso a máquinas. Aplicações e agentes de marcação, como a Hello Tractor em partes da Nigéria e do Quénia, ligam os agricultores aos donos de tratores; veja o que funciona na sua zona. Máquinas partilhadas mais pequenas, como uma debulhadora, uma descascadora ou um moinho, podem ser compradas por um grupo.",
            "Planeie o calendário de forma justa. Lavrar ou semear tarde custa colheita, e todos querem a máquina nos mesmos dias. Acordem a ordem com antecedência: por zona e percurso, para poupar combustível e viagens, por sorteio, ou pelas necessidades de sementeira, e mudem quem vai primeiro em cada campanha. Escrevam o calendário e partilhem-no. Acordem o que acontece se a chuva ou uma avaria parar o trabalho.",
            "Acordem as taxas e os custos: quanto os membros pagam por acre ou por hora (valores só de exemplo: XOF, KES, NGN ou GHS por acre), se o pagamento é antes ou no próprio dia, e um fundo de manutenção separado para uma máquina do grupo, para que as reparações não parem a campanha. Escolham um operador formado, mantenham um livro de registo das horas, do combustível, dos campos trabalhados e das reparações, e guardem a máquina em segurança."
          ],
          steps: ["Decida alugar ou comprar, conforme o custo, as competências e a quantidade de trabalho.", "Faça a lista dos campos dos membros, dos tamanhos e das datas em que precisam da máquina.", "Acordem um calendário justo (por percurso, sorteio ou necessidade de sementeira) e mudem quem vai primeiro.", "Definam as taxas, quando se paga e um fundo de manutenção.", "Escolham o operador e mantenham um livro de registo; acordem o que acontece se avariar."],
          words: [["Serviço de aluguer", "um prestador que traz um trator ou uma máquina e faz o trabalho em troca de uma taxa."], ["Fundo de manutenção", "dinheiro posto de lado a partir das taxas para pagar reparações e revisões."], ["Livro de registo", "um registo das horas, do combustível, dos campos trabalhados e das reparações de uma máquina."]],
          slides: [
            { title: "Alugar ou comprar?", bullets: ["Comprar: custo alto, combustível, reparações, operador", "A maioria dos grupos pequenos começa por alugar em conjunto", "Máquinas pequenas partilhadas: debulhadora, descascadora, moinho"] },
            { title: "Um calendário justo", bullets: ["Lista dos campos, tamanhos e datas", "Ordem por percurso, sorteio ou necessidade de sementeira", "Mudar quem vai primeiro em cada campanha"] },
            { title: "Taxas e cuidados", bullets: ["Taxa por acre ou por hora (valores só de exemplo)", "Fundo de manutenção para as reparações", "Operador formado; livro de registo das horas e do combustível"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Escolha a máquina ou o serviço de aluguer de que o seu grupo precisa. Faça a lista dos campos, dos tamanhos e das datas de cinco membros, e depois escreva um calendário de marcações, a taxa por acre, uma regra para o fundo de manutenção se a máquina for do grupo, e o que acontece se avariar.",
          youCanNow: "escrever um plano justo para alugar ou partilhar um trator ou uma máquina, com calendário, taxas e manutenção.",
          quickCheck: [
            { objective: "O3", q: "Porque é que muitos grupos pequenos alugam um serviço de trator em vez de comprar um?", options: ["Alugar é sempre de graça", "Não se podem comprar tratores em África", "Comprar precisa de muito dinheiro, reparações, um operador e trabalho suficiente", "Os serviços de aluguer nunca chegam a horas"], answer: 2, why: "Ter um trator traz custos e exigências grandes; o aluguer em grupo dá acesso sem eles." },
            { objective: "O3", q: "Para que serve um fundo de manutenção?", options: ["Pagar um salário ao presidente", "Pagar as reparações para a máquina continuar a funcionar", "Comprar sementes", "Pagar as reuniões"], answer: 1, why: "Pôr dinheiro de lado para as reparações impede que as avarias acabem com a campanha." }
          ]
        },
        {
          title: "Comprar em grande quantidade, negociar e evitar insumos falsos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planear uma compra de sementes ou fertilizante em grande quantidade, comparar três orçamentos e verificar se os insumos são verdadeiros.",
          text: [
            "Recolha primeiro as encomendas: o nome de cada membro, o insumo, a quantidade e o sinal pago, tudo escrito num livro de encomendas e lido de novo em voz alta. Some o total. Uma encomenda grande e segura dá-lhe força para negociar. Peça a pelo menos três fornecedores registados (agro-revendedores, distribuidores ou empresas) um orçamento escrito: preço por saco, entrega na sua aldeia, a data, a marca e a variedade, e qualquer desconto pela carga completa.",
            "Negoceie mais do que o preço: entrega gratuita ou mais barata, uma data de entrega antes da sementeira, uma demonstração ou formação gratuita, pagamento de uma parte na entrega, e um recibo em nome do grupo. Compare os orçamentos pelo custo total entregue, não só pelo preço do saco. Nunca entregue todo o dinheiro em numerário a uma só pessoa; pague a partir da conta do grupo, contra recibo.",
            "As sementes, os fertilizantes e os pesticidas falsos são um risco real. Compre só a revendedores registados. Verifique os selos, os rótulos, os números de lote e as datas, e se os sacos não estão rasgados ou cosidos de novo. No Quénia, as sementes certificadas são controladas pela KEPHIS; na Nigéria, o Conselho Nacional de Sementes Agrícolas (NASC) diz aos agricultores para comprar a agro-revendedores registados e procurar a sua etiqueta de certificação; no Gana, a Direção de Proteção e Regulação de Plantas (PPRSD) regula as sementes e os fertilizantes segundo a Lei de Plantas e Fertilizantes. Os pesticidas têm de estar no registo nacional do seu país. Guarde os recibos e uma pequena amostra, e denuncie os produtos falsos ao organismo nacional."
          ],
          steps: ["Recolha a encomenda e o sinal de cada membro num livro de encomendas; leia-o de novo em voz alta.", "Peça orçamentos escritos a pelo menos três fornecedores registados.", "Negoceie o preço, a entrega, a data, a formação e as condições de pagamento.", "Compare o custo total entregue e escolha; pague a partir da conta do grupo, contra recibo.", "Na entrega, verifique os selos, os rótulos, os números de lote e as etiquetas de certificação; distribua com um recibo para cada membro."],
          words: [["Compra em grande quantidade", "comprar muito em conjunto para ter um preço mais baixo ou melhores condições."], ["Orçamento", "o preço e as condições que um fornecedor dá por escrito antes de você comprar."], ["Agro-revendedor", "uma loja ou um comerciante que vende sementes, fertilizantes e outros insumos agrícolas."], ["Semente certificada", "semente verificada pelo organismo nacional de sementes como sendo da variedade e da qualidade certas."]],
          slides: [
            { title: "Recolha primeiro as encomendas", bullets: ["Nome, insumo, quantidade, sinal", "Escrito num livro de encomendas e lido de novo", "Uma encomenda grande e segura dá força para negociar"] },
            { title: "Três orçamentos, depois negociar", bullets: ["Pelo menos três fornecedores registados, por escrito", "Preço, entrega, data, formação, condições de pagamento", "Comparar o custo total entregue; recibo em nome do grupo"] },
            { title: "Evitar insumos falsos", bullets: ["Só revendedores registados; ver selos, rótulos, datas", "Quénia: KEPHIS; Nigéria: etiqueta do NASC; Gana: PPRSD", "Pesticidas no registo nacional; denunciar os falsos"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Faça uma folha de encomendas para pelo menos cinco membros (nome, insumo, quantidade, sinal). Escreva as perguntas que vai fazer a três fornecedores registados e uma lista de verificação para o dia da entrega, para detetar sementes ou fertilizantes falsos.",
          youCanNow: "planear uma compra de insumos em grande quantidade, negociar com três fornecedores e verificar se as sementes e o fertilizante são verdadeiros.",
          quickCheck: [
            { objective: "O4", q: "Como deve comparar os orçamentos dos fornecedores?", options: ["Só pelo preço do saco", "Pelo fornecedor que é amigo", "Pelo que tem a loja maior", "Pelo custo total entregue, e também pela data, a qualidade e as condições"], answer: 3, why: "Um preço baixo por saco pode esconder transporte caro ou entrega atrasada; compare o negócio completo." },
            { objective: "O4", q: "Na entrega, alguns sacos de sementes parecem cosidos de novo e não têm etiqueta de certificação. O que faz?", options: ["Recusa-os, guarda as provas e denuncia ao organismo de sementes", "Aceita-os para poupar tempo", "Distribui-os sem dizer nada", "Mistura-os com as sementes boas"], answer: 0, why: "Sacos cosidos de novo e sem etiqueta são sinais de semente falsa; recuse, guarde as provas e denuncie." }
          ]
        },
        {
          title: "Manter a confiança: registos abertos e resolver conflitos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Manter registos abertos do dinheiro juntado e resolver um desacordo com os passos acordados.",
          text: [
            "Os grupos raramente falham por falta de ideias; falham quando os membros deixam de confiar no destino do dinheiro. Torne fácil seguir cada xelim, naira, cedi ou franco: um livro de encomendas para os sinais, um recibo para cada pagamento que entra e sai, pagamentos a partir de uma conta do grupo aprovados por duas pessoas, e um livro de registo da máquina se a partilharem.",
            "Mantenha os registos abertos. Leia o resumo do dinheiro em voz alta em todas as reuniões: dinheiro que entrou, dinheiro que saiu, saldo, e o que foi comprado para quem. Afixe a lista de encomendas e o calendário onde os membros os possam ver, ou partilhe uma fotografia no grupo de conversa. Deixe qualquer membro ver os livros. Mude de vez em quando quem trata do dinheiro.",
            "Vai haver desacordos: alguém recebe o trator tarde, falta um saco, um membro não paga. Use os passos das suas regras: primeiro, falar diretamente; depois, a comissão ouve os dois lados e verifica os registos; depois, todo o grupo decide; e, se for preciso, peça ajuda a uma pessoa de fora respeitada, como o extensionista, o régulo ou um técnico de cooperativas. Decida com base nos factos dos registos, não em quem fala mais alto. Garanta que as mulheres e os jovens também podem levantar problemas e que as suas queixas são ouvidas."
          ],
          steps: ["Mantenha um livro de encomendas, recibos, uma conta do grupo com dois aprovadores e um livro de registo.", "Leia o resumo do dinheiro em voz alta em todas as reuniões.", "Afixe as listas e os calendários onde os membros os possam ver.", "Resolva os desacordos pelos passos acordados, usando os registos.", "Mude quem ocupa os cargos do dinheiro e garanta que todos podem levantar um problema."],
          words: [["Transparência", "manter o dinheiro e as decisões abertos, para que todos os membros os possam ver."], ["Mediador", "uma pessoa respeitada e neutra que ajuda dois lados a resolver um desacordo."], ["Saldo", "o dinheiro que sobra depois de tirar o dinheiro que saiu do dinheiro que entrou."]],
          slides: [
            { title: "A confiança segue o dinheiro", bullets: ["Livro de encomendas e recibos para tudo", "Conta do grupo; dois aprovadores", "Livro de registo da máquina, se a partilharem"] },
            { title: "Mantenha os registos abertos", bullets: ["Ler em voz alta o que entrou, o que saiu e o saldo", "Afixar listas e calendários; partilhar uma fotografia", "Qualquer membro pode ver os livros"] },
            { title: "Resolver desacordos", bullets: ["Falar diretamente; a comissão ouve os dois lados", "Todo o grupo decide; mediador de fora se for preciso", "Decidir pelos registos; ouvir as mulheres e os jovens"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de compra de insumos em grande quantidade ou o seu acordo de partilha de máquinas. Inclua os membros, os registos que vai manter e ler em voz alta, os passos para resolver desacordos, e os cargos que as mulheres e os jovens vão ocupar.",
          youCanNow: "manter o dinheiro juntado aberto e fácil de seguir, resolver desacordos de forma justa e manter a confiança de todos.",
          quickCheck: [
            { objective: "O5", q: "O que cria mais confiança num grupo que junta dinheiro?", options: ["O tesoureiro guarda os livros em casa", "Ler em voz alta o que entrou, o que saiu e o saldo em todas as reuniões", "Pagar aos fornecedores em numerário, sem recibo", "Só o presidente sabe o saldo"], answer: 1, why: "Os registos abertos deixam todos os membros ver para onde foi o dinheiro." },
            { objective: "O5", q: "Uma membro diz que recebeu o trator em último lugar outra vez. Qual é o primeiro passo?", options: ["Tirá-la do grupo", "Ignorar", "Falar diretamente e depois verificar o calendário e os registos", "Devolver-lhe o dinheiro e fechar o grupo"], answer: 2, why: "Seguir os passos acordados e verificar os registos resolve o caso de forma justa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Juntar dinheiro, comprar em conjunto e manter a confiança",
        questions: [
          { objective: "O3", q: "O que é um serviço de aluguer?", options: ["Uma conta de poupança do grupo", "Um prestador que traz uma máquina e faz o trabalho em troca de uma taxa", "Uma empresa de sementes", "Um empréstimo bancário"], answer: 1, why: "Um serviço de aluguer deixa os agricultores usar um trator ou uma máquina sem serem os donos." },
          { objective: "O3", q: "Todos querem o trator nos mesmos três dias. O que é justo?", options: ["Os amigos do presidente vão primeiro", "Quem gritar mais alto", "Quem pagar mais às escondidas", "Uma ordem acordada por percurso, sorteio ou necessidade de sementeira, que muda em cada campanha"], answer: 3, why: "Uma ordem acordada e rotativa é justa e poupa combustível e viagens." },
          { objective: "O4", q: "Porque recolher as encomendas e os sinais antes de falar com os fornecedores?", options: ["Para gastar o dinheiro cedo", "Para não ter de escrever nada", "Uma encomenda grande e segura dá força para negociar", "Os fornecedores pedem os PIN dos membros"], answer: 2, why: "Os fornecedores dão melhores condições quando sabem que a encomenda é real e grande." },
          { objective: "O4", q: "Qual é um sinal de fertilizante ou semente falsos?", options: ["Sacos rasgados ou cosidos de novo, sem rótulo nem etiqueta", "Um saco selado com número de lote", "Um recibo de um revendedor registado", "Uma etiqueta de certificação"], answer: 0, why: "Selos partidos e rótulos ou etiquetas em falta são sinais de alerta de insumos falsos." },
          { objective: "O5", q: "Quem deve aprovar os pagamentos da conta do grupo?", options: ["Qualquer pessoa que peça", "O fornecedor", "Uma só pessoa", "Dois signatários acordados"], answer: 3, why: "Dois aprovadores tornam mais difícil usar mal o dinheiro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Mobilização Comunitária: Partilhar Máquinas e Negociar a Compra de Insumos",
    questions: [
      { objective: "O1", q: "O que é a mobilização comunitária?", options: ["Mudar-se para a cidade", "Juntar as pessoas para agirem sobre uma necessidade comum", "Comprar um telefone", "Vender as colheitas sozinho"], answer: 1, why: "Mobilização quer dizer organizar as pessoas em torno de uma necessidade que partilham." },
      { objective: "O1", q: "A quantas famílias deve perguntar, no mínimo, quando mapeia as necessidades?", options: ["Uma", "Duas", "Só aos líderes", "Dez"], answer: 3, why: "Perguntar a pelo menos dez famílias dá uma imagem justa das necessidades comuns." },
      { objective: "O1", q: "Porque incluir os jovens agricultores no mapa de necessidades?", options: ["Os problemas deles podem ser diferentes, como não ter título da terra ou ser atendido em último lugar", "Têm mais dinheiro", "São donos de todos os tratores", "Não é preciso"], answer: 0, why: "Os jovens e as mulheres podem ter obstáculos diferentes que o grupo também deve resolver." },
      { objective: "O1", q: "Depois de contar as respostas, o que faz?", options: ["Deita a folha fora", "Escolhe a preferida do líder", "Ordena as três principais necessidades comuns", "Começa a recolher dinheiro"], answer: 2, why: "Ordenar mostra que necessidades são partilhadas pela maioria das famílias." },
      { objective: "O2", q: "O que deve ter o convite para a primeira reunião?", options: ["Uma lista das dívidas dos membros", "Nada, só a hora", "Um pedido de dinheiro", "O objetivo numa frase, a hora e o lugar"], answer: 3, why: "Um objetivo claro diz às pessoas porque vale a pena vir." },
      { objective: "O2", q: "O que é uma ordem de trabalhos?", options: ["A lista do que a reunião vai discutir, por ordem", "Uma marcação do trator", "Um orçamento de um fornecedor", "Um extrato bancário"], answer: 0, why: "Uma ordem de trabalhos mantém a reunião curta e no caminho certo." },
      { objective: "O2", q: "Qual é o objetivo mais claro?", options: ["Fazer melhor este ano", "Ajudar todos", "O campo de cada membro lavrado nas duas semanas a seguir às primeiras chuvas", "Ter máquinas um dia"], answer: 2, why: "Diz um resultado e um prazo, por isso o grupo pode ver se conseguiu." },
      { objective: "O2", q: "Que regra deve ser acordada antes de recolher o dinheiro?", options: ["A cor das camisas do grupo", "Como um membro pode sair e receber o seu dinheiro de volta", "Onde mora o presidente", "Que rádio ouvir"], answer: 1, why: "As regras sobre a saída e a devolução evitam disputas quando o dinheiro é juntado." },
      { objective: "O3", q: "Qual é normalmente o primeiro passo para um grupo pequeno ter máquinas?", options: ["Comprar um trator grande a crédito", "Construir uma fábrica", "Cada membro comprar um trator", "Alugar um serviço de trator em conjunto"], answer: 3, why: "O aluguer em grupo dá acesso sem os grandes custos de ser dono." },
      { objective: "O3", q: "O que regista o livro de registo de uma máquina?", options: ["Os aniversários dos membros", "Horas, combustível, campos trabalhados e reparações", "Os preços das culturas", "As presenças nas reuniões"], answer: 1, why: "Um livro de registo mostra como a máquina é usada e mantida." },
      { objective: "O3", q: "Lavrar tarde normalmente leva a:", options: ["Colheitas maiores", "Nenhuma mudança", "Colheitas menores", "Fertilizante grátis"], answer: 2, why: "Lavrar e semear tarde custa colheita, e por isso um calendário justo é importante." },
      { objective: "O3", q: "Um grupo tem uma descascadora de milho. De onde vem o dinheiro para as reparações?", options: ["De um fundo de manutenção posto de lado a partir das taxas", "Do bolso do presidente", "Do fornecedor", "De lado nenhum; deixa-se de a usar"], answer: 0, why: "Um fundo de manutenção a partir das taxas mantém a máquina a funcionar." },
      { objective: "O4", q: "Quantos orçamentos escritos de fornecedores deve comparar, no mínimo?", options: ["Três", "Um", "Nenhum", "Vinte"], answer: 0, why: "Três orçamentos mostram um preço justo e dão-lhe margem para negociar." },
      { objective: "O4", q: "Além do preço, o que pode negociar?", options: ["O apelido da família do fornecedor", "Os PIN dos membros", "A entrega na aldeia antes da sementeira", "Um preço mais alto"], answer: 2, why: "A entrega, a data, a formação e as condições de pagamento valem tanto como o preço do saco." },
      { objective: "O4", q: "Na Nigéria, que organismo alerta contra as sementes falsas e usa uma etiqueta de certificação?", options: ["KEPHIS", "O Conselho Nacional de Sementes Agrícolas (NASC)", "PPRSD", "KEBS"], answer: 1, why: "O NASC diz aos agricultores para comprar a agro-revendedores registados e procurar a sua etiqueta de certificação." },
      { objective: "O4", q: "Como deve o grupo pagar ao fornecedor?", options: ["Em numerário entregue a um membro", "Para a conta de um desconhecido", "Sem nenhum recibo", "A partir da conta do grupo, contra recibo em nome do grupo"], answer: 3, why: "Os pagamentos do grupo com recibos deixam o dinheiro fácil de seguir." },
      { objective: "O5", q: "Porque ler o resumo do dinheiro em voz alta nas reuniões?", options: ["Para passar o tempo", "Para envergonhar os membros", "Porque a lei obriga a cantar", "Para que os membros que não sabem ler também vejam para onde foi o dinheiro"], answer: 3, why: "Ler em voz alta abre os registos a todos os membros." },
      { objective: "O5", q: "Quem pode ajudar se a comissão não conseguir resolver uma disputa?", options: ["Uma pessoa de fora respeitada, como um extensionista ou um técnico de cooperativas", "O fornecedor", "Ninguém", "O membro que fala mais alto"], answer: 0, why: "Um mediador neutro pode ajudar os dois lados a chegar a acordo." },
      { objective: "O5", q: "Em que se devem basear as decisões numa disputa?", options: ["Em quem é mais velho", "Em quem grita mais", "Nos factos dos registos", "Em boatos"], answer: 2, why: "Os registos mostram o que aconteceu de verdade, por isso as decisões são justas." },
      { objective: "O5", q: "O que ajuda as mulheres e os jovens a participar?", options: ["Cargos só para chefes de família", "Cargos reais, como tesoureiro ou responsável pelas marcações", "Reuniões à noite e longe", "Entrada só com título da terra"], answer: 1, why: "Dar às mulheres e aos jovens papéis reais cria confiança e um grupo mais forte." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e tente outra vez.",
    criteria: [
      { name: "Mapa de necessidades", objective: "O1", notYet: "A necessidade é um palpite do líder, ou perguntou-se a menos de dez famílias.", meets: "Perguntou-se a pelo menos dez famílias, incluindo mulheres e jovens, e as três principais necessidades estão ordenadas.", exceeds: "Inclui um mapa simples da aldeia com os campos, as estradas, as lojas de insumos e as máquinas." },
      { name: "Objetivo e regras", objective: "O2", notYet: "Não há um objetivo claro, ou não há regras escritas sobre o dinheiro e a saída.", meets: "Um objetivo com um número e uma data, e regras escritas sobre a entrada, as decisões, o dinheiro, quem não paga e a saída, acordadas na ata.", exceeds: "As regras foram lidas em voz alta e o acordo dos membros está registado com os nomes." },
      { name: "Plano de máquinas", objective: "O3", notYet: "Não há calendário nem taxas, ou não há plano se a máquina avariar.", meets: "Decidido alugar ou comprar, um calendário justo, taxas, um fundo de manutenção ou condições de aluguer, um operador e uma regra para avarias.", exceeds: "Um prestador de aluguer ou o dono da máquina confirmou o plano, e quem vai primeiro muda em cada campanha." },
      { name: "Plano de compra em grande quantidade", objective: "O4", notYet: "Não há livro de encomendas, há menos de três orçamentos, ou não há verificação de insumos falsos.", meets: "Encomendas e sinais registados, três orçamentos escritos comparados pelo custo entregue, pagamento pela conta do grupo e uma verificação no dia da entrega para ver se os insumos são verdadeiros.", exceeds: "Mostra o que se ganhou na negociação (preço, entrega, formação) e diz a que organismo denunciar os produtos falsos." },
      { name: "Confiança e inclusão", objective: "O5", notYet: "Os registos são guardados só por uma pessoa, ou as mulheres e os jovens não têm nenhum papel.", meets: "Registos abertos lidos em voz alta, passos acordados para os desacordos, e cargos com nomes para mulheres e jovens.", exceeds: "Os cargos do dinheiro mudam de pessoa, e as mulheres e os jovens ocupam pelo menos um cargo de liderança." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Grupos que fazem uma compra de insumos em grande quantidade ou uma campanha de partilha de máquinas em 6 meses (inquérito de seguimento)",
      "Membros que dizem pagar menos por saco ou ter a lavoura mais cedo do que quando estavam sozinhos",
      "Grupos sem disputas de dinheiro por resolver depois de uma campanha, com os registos lidos em voz alta nas reuniões",
      "Parte dos cargos do grupo ocupados por mulheres e por membros jovens"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone simples para chamadas, SMS e dinheiro móvel; um smartphone ajuda a tirar fotografias das listas",
      "Um caderno para o mapa de necessidades, as atas, o livro de encomendas e o livro de registo",
      "Modelos simples de regras e de folhas de encomendas (o facilitador pode copiá-los das lições)",
      "Sacos ou rótulos de amostra de sementes e fertilizantes para praticar a detetar os falsos",
      "Cerca de 90 minutos no total, em sessões curtas, mais tempo para visitar as famílias e os fornecedores"
    ],
    facilitatorNotes: [
      "Dê o curso com uma aldeia ou um grupo real: façam o mapa de necessidades e a primeira reunião de verdade, entre as sessões.",
      "Faça as sessões a horas em que as mulheres e os jovens possam participar, e convide-os a presidir ou a escrever a ata.",
      "Traga sacos ou rótulos verdadeiros de insumos e pergunte ao organismo nacional de sementes ou de proteção das plantas (KEPHIS, NASC, PPRSD ou o organismo do seu país) como verificá-los; não diga taxas nem preços de memória.",
      "Façam uma dramatização de uma negociação com um fornecedor e de uma disputa sobre uma marcação de trator atrasada, usando registos de amostra.",
      "Avalie a tarefa final com a grelha de avaliação; quando o grupo estiver pronto para o registo formal, indique-lhe \"Cooperativas de Agricultores e Chegar ao Mercado\"."
    ]
  }
};
