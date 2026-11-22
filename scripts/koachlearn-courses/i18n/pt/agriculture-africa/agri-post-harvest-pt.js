"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-post-harvest.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Facts are sourced to FAO, Codex, IITA and Purdue (PICS); no doses or prices are added.

const FAO_LOSS = { name: "FAO: Redução das perdas e do desperdício de alimentos (cerca de 14 por cento dos alimentos perdidos entre a colheita e a venda, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Prevenção e controlo de micotoxinas nos cereais: controlo da aflatoxina no milho", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "Portal TECA/STI da FAO: Milho bem seco beneficia todos: o secador solar de milho", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Aflasafe, produtos de controlo biológico da aflatoxina para os agricultores de África", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Universidade de Purdue: sacos herméticos Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "Portal TECA/STI da FAO: Câmara de arrefecimento sem energia para hortícolas", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-pt",
  lang: "pt",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Manuseamento e Armazenamento Pós-Colheita",
  skills: "Encontrar onde a sua colheita se perde, Colher no momento certo, Secar o grão até uma humidade segura, Prevenir a aflatoxina, Guardar o grão em sacos herméticos, Arrefecer, classificar e embalar produtos frescos",
  outcome: "seguir um plano pós-colheita para uma cultura: colhê-la no momento certo, secar o grão até uma humidade segura, manter a aflatoxina afastada, guardá-lo em sacos herméticos e manter os produtos frescos frescos, classificados e bem embalados para o comprador.",
  about: [
    "Este curso é para pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas, comerciantes e jovens do agronegócio no Quénia, na Nigéria, no Gana e em toda a África. Uma boa colheita pode perder grande parte do seu valor depois de sair do campo: o grão ganha bolor ou os gorgulhos comem-no, os tomates ficam esmagados, e os compradores pagam menos ou recusam-na.",
    "O Capítulo 1 trata de recolher bem a colheita: onde e porque acontecem as perdas, colher no momento certo e secar o grão até uma humidade segura. O Capítulo 2 trata de a conservar: prevenir a aflatoxina, guardar o grão em sacos herméticos e manter os produtos frescos frescos, classificados e bem embalados.",
    "Os compradores e as normas nacionais têm as suas próprias regras de qualidade, por isso pergunte sempre ao seu comprador, à sua cooperativa ou ao seu extensionista o que exigem. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria machamba ou armazém. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano pós-colheita de uma página para uma cultura (a sua, ou um exemplo como 2 acres de milho em Trans Nzoia, 1 acre de tomate em Kaduna, ou feijão-nhemba em Tamale): quando e como vai colher, como vai secar e verificar a humidade (para grão), como vai manter a aflatoxina afastada, como e onde vai guardar, e como vai arrefecer, classificar e embalar para o seu comprador, com as regras de qualidade do comprador escritas no topo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas, comerciantes e jovens do agronegócio no Quénia, na Nigéria, no Gana e em toda a África que lidam com cereais, leguminosas e produtos frescos depois da colheita.",
    startingPoint: "A maioria colhe quando a cultura parece pronta, seca o grão ao sol em qualquer superfície que esteja perto, guarda-o em sacos e transporta os produtos em sacos ou montes. Poucos verificam a humidade do grão, sabem como se forma a aflatoxina, usam sacos herméticos, ou classificam e embalam os produtos segundo as regras do comprador.",
    gap: "Grande parte de uma boa colheita perde quantidade ou valor depois de sair do campo: gorgulhos, bolor e ratos no armazém, produtos esmagados, e grão recusado por causa da aflatoxina, que também faz mal às famílias que o comem. Um plano pós-colheita guarda mais da colheita, mantém os alimentos seguros e dá melhores preços.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo é explicado",
      "Aparelhos: um telefone simples; lonas, sacos e caixas que o aluno já tem ou pode pedir emprestados",
      "Os compradores e as normas nacionais têm as suas próprias regras de qualidade: os alunos perguntam ao comprador, à cooperativa ou à extensão",
      "Segurança alimentar: nunca comer, vender nem dar aos animais grão com bolor; produtos de controlo biológico só se aprovados e como diz o rótulo",
      "Tempo: lições de cerca de 5 minutos, que cabem no trabalho da colheita"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para uma cultura", action: "desenhar o seu caminho do campo até ao comprador e marcar onde perde quantidade ou valor", standard: "indicando pelo menos três pontos de perda e o que os resolveria" },
    { id: "O2", condition: "Para cada uma das suas culturas", action: "identificar os sinais de que está pronta e planear os dias de colheita com a previsão do tempo", standard: "com ferramentas, sacos ou caixas e mão de obra prontos antes da colheita" },
    { id: "O3", condition: "Para grão acabado de colher", action: "secá-lo depressa, longe do chão, e verificar que chegou a uma humidade segura", standard: "cerca de 13 a 14 por cento ou o limite do comprador, verificado com um medidor ou com o teste do sal" },
    { id: "O4", condition: "Para milho, amendoim ou outras culturas em risco", action: "enumerar e usar os principais passos que mantêm a aflatoxina afastada", standard: "com o grão com bolor e danificado separado e nunca comido, vendido nem dado aos animais" },
    { id: "O5", condition: "Com grão seco, limpo e escolhido", action: "encher, fechar e guardar um saco hermético", standard: "com cada saco interior atado sem deixar entrar ar e o saco levantado do chão, longe das paredes e protegido dos ratos" },
    { id: "O6", condition: "Para produtos frescos", action: "mantê-los frescos, classificá-los segundo a norma do comprador e embalá-los para chegarem sem pisaduras", standard: "em caixas limpas, arejadas e etiquetadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Recolher bem a colheita",
      lessons: [
        {
          objectives: ["O1"],
          title: "Onde se perdem as colheitas, e porquê",
          minutes: 4,
          goal: "Seguir a sua cultura do campo até ao comprador e marcar onde perde quantidade ou valor.",
          text: [
            "A FAO calculou em 2019 que cerca de 14 por cento dos alimentos do mundo se perdem entre a colheita e a loja, antes mesmo de chegarem a uma banca do mercado. Em muitas machambas africanas, as perdas de algumas culturas são maiores. Cada saco perdido é semente, adubo e trabalho deitados fora.",
            "As perdas acontecem em todos os passos: colher cedo ou tarde demais, deixar a cultura à chuva, manuseamento brusco e pisaduras, calor, secagem lenta demais, insetos como os gorgulhos e a broca-maior-dos-grãos, ratos, bolor, e embalagem fraca em estradas esburacadas. Algumas perdas vêem-se (menos sacos); outras não (classe mais baixa, preço mais baixo, ou grão que não é seguro comer).",
            "O primeiro passo é encontrar as suas maiores perdas. Siga a sua cultura do campo até ao comprador e pergunte em cada passo: o que corre mal aqui, quanto se perde, e quanto custaria resolver?"
          ],
          steps: ["Escreva cada passo por que passa a sua cultura: colher, transportar, secar, debulhar ou descascar, guardar, embalar, levar, vender.", "Em cada passo, escreva o que corre mal (chuva, pisaduras, insetos, ratos, bolor).", "Calcule mais ou menos quanto se perde ou quanto baixa o preço.", "Faça um círculo nas duas maiores perdas; é por elas que começa."],
          words: [["Perda pós-colheita", "alimento ou valor perdido entre a colheita e a venda."], ["Broca-maior-dos-grãos", "um besouro que fura o milho e a mandioca guardados e os transforma em pó."], ["Classe", "um nível de qualidade, como primeira ou segunda classe, que define o preço."]],
          slides: [
            { title: "O tamanho da perda (FAO)", bullets: ["Cerca de 14 por cento dos alimentos perdidos entre a colheita e a loja", "Muitas vezes mais em algumas culturas nas machambas africanas", "Cada saco perdido desperdiça semente, adubo e trabalho"] },
            { title: "Porque acontece", bullets: ["Colheita na hora errada, chuva, secagem lenta", "Pisaduras, calor, transporte brusco", "Gorgulhos, brocas, ratos, bolor"] },
            { title: "Encontre as suas maiores perdas", bullets: ["Siga a cultura do campo até ao comprador", "Pergunte o que corre mal em cada passo", "Comece pelas duas maiores"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Desenhe o caminho da sua cultura do campo até ao comprador como uma fila de caixas. Debaixo de cada caixa, escreva o que corre mal ali e mais ou menos quanto se perde. Faça um círculo nas duas maiores perdas.",
          youCanNow: "mostrar onde a sua colheita perde quantidade ou valor e escolher as perdas a resolver primeiro.",
          quickCheck: [
            { objective: "O1", q: "Que inseto é indicado como praga do armazém que come o grão?", options: ["A abelha", "A joaninha", "A broca-maior-dos-grãos", "A borboleta"], answer: 2, why: "Os gorgulhos e a broca-maior-dos-grãos são insetos do armazém que causam perdas de grão." },
            { objective: "O1", q: "No mercado, muitos dos seus tomates são recusados por estarem esmagados. O que faz?", options: ["Segue a cultura para trás, encontra o passo onde ficam esmagados e quanto custaria resolver", "Vende a outro comprador da próxima vez e não muda nada", "Cultiva outra coisa", "Culpa o comprador"], answer: 0, why: "Seguir a cultura passo a passo mostra onde acontecem as perdas e o que resolver." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Colher no momento certo",
          minutes: 5,
          goal: "Identificar os sinais de que cada uma das suas culturas está pronta e planear os dias de colheita.",
          text: [
            "Colher cedo demais dá grão pequeno e leve ou produtos que não amadurecem bem; tarde demais traz estragos da chuva, insetos, pássaros, roubos e podridão. Aprenda os sinais de cada cultura.",
            "O milho está maduro quando as palhas estão secas e o grão está duro, com uma camada preta na base; depois pode secar mais um pouco no pé se o tempo estiver seco, mas não o deixe lá fora durante as chuvas. O feijão e o feijão-nhemba estão prontos quando a maioria das vagens está seca e faz barulho. A mapira está pronta quando o grão está duro e não se marca com a unha. Os tomates colhem-se na fase de cor que o comprador quer (muitas vezes a começar a mudar de cor, para mercados distantes). Café: colha só cerejas vermelhas e maduras. Chá: arranque o rebento tenro, normalmente duas folhas e um botão. As raízes de mandioca estragam-se poucos dias depois de arrancadas, por isso arranque só o que pode vender ou processar depressa.",
            "Planeie os dias de colheita com a previsão do tempo. Colha os produtos frescos de manhã cedo, quando está fresco, guarde-os à sombra, e tenha sacos, caixas, lonas e mão de obra prontos antes de começar."
          ],
          steps: ["Escreva os sinais de que está pronta para cada cultura que tem.", "Percorra o campo e verifique os sinais todas as semanas quando a colheita se aproxima.", "Veja a previsão do tempo e escolha dias secos para o grão.", "Tenha lonas, sacos ou caixas e mão de obra prontos.", "Colha os produtos frescos na manhã fresca e guarde-os à sombra."],
          words: [["Maturação", "a fase em que uma cultura está completamente crescida e pronta a colher."], ["Camada preta", "uma mancha escura na base do grão de milho que mostra que está maduro."], ["Duas folhas e um botão", "o rebento tenro do chá que os apanhadores colhem para um chá de boa qualidade."]],
          slides: [
            { title: "Cedo ou tarde demais, perde sempre", bullets: ["Cedo demais: pequeno, leve, amadurece mal", "Tarde demais: chuva, insetos, pássaros, roubo, podridão"] },
            { title: "Sinais de que está pronta", bullets: ["Milho: palha seca, grão duro, camada preta", "Feijão: a maioria das vagens seca e faz barulho", "Café: só cerejas vermelhas maduras; chá: duas folhas e um botão"] },
            { title: "Culturas frescas", bullets: ["Tomate: a fase de cor que o comprador quer", "Mandioca: arranque só o que pode vender em breve", "Colha na manhã fresca; guarde à sombra"] },
            { title: "Esteja preparado", bullets: ["Veja a previsão; escolha dias secos", "Primeiro lonas, sacos, caixas e mão de obra"] }
          ],
          tryIt: "Para duas culturas que tem, escreva os sinais de que estão prontas e a data em que espera colher. Pergunte ao seu comprador que fase ou qualidade quer e escreva. Ponha um lembrete no telefone para ver a previsão do tempo uma semana antes.",
          youCanNow: "saber quando as suas culturas estão prontas e planear dias de colheita que protegem a qualidade.",
          quickCheck: [
            { objective: "O2", q: "Como sabe que a mapira está pronta para colher?", options: ["As folhas ainda estão verdes", "As cabeças são pequenas", "O grão está mole e leitoso", "O grão está duro e não se marca com a unha"], answer: 3, why: "A mapira está pronta quando o grão está duro e não se marca com a unha." },
            { objective: "O2", q: "O seu milho está maduro e há previsão de chuva forte na próxima semana. O que faz?", options: ["Deixa-o no pé durante as chuvas", "Colhe antes da chuva, com lonas e sacos prontos", "Colhe só depois de acabarem as chuvas", "Corta-o e deixa-o no chão"], answer: 1, why: "Planeie a colheita com a previsão e não deixe milho maduro lá fora durante as chuvas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Secar o grão até uma humidade segura",
          minutes: 6,
          goal: "Secar o grão depressa e verificar que chegou a uma humidade segura para o guardar.",
          text: [
            "O grão acabado de colher tem muita água. O grão húmido aquece, ganha bolor e atrai insetos. A orientação da FAO sobre o milho diz que secá-lo até uma humidade segura de cerca de 13 a 14 por cento, antes de o bolor crescer, é a forma mais segura de prevenir a aflatoxina, e que a secagem deve ser rápida: o grão que fica húmido mais de cerca de dois dias corre um risco muito maior. O seu comprador, a sua cooperativa ou a norma nacional podem ter o seu próprio máximo, por isso pergunte.",
            "Seque numa lona limpa, num estrado levantado, numa esteira ou num chão de cimento, nunca na terra. Espalhe o grão numa camada fina, vire-o várias vezes por dia, e tape-o ou leve-o para dentro antes da chuva e à noite. O grão debulhado seca mais depressa do que o grão na maçaroca. Os secadores solares, armações simples com uma cobertura de plástico transparente, secam mais depressa e protegem da chuva, do pó e dos animais.",
            "Verifique a humidade antes de guardar. A melhor ferramenta é um medidor de humidade; as cooperativas, os compradores, os serviços de extensão e os armazéns muitas vezes têm um. Uma verificação caseira aproximada é o teste do sal: ponha uma mão-cheia de sal seco e algum grão numa garrafa de vidro limpa e seca, agite durante dois a três minutos, e se o sal ficar colado ao vidro o grão ainda está húmido demais. O grão que passa no teste pode ainda estar um pouco húmido, por isso confirme com um medidor quando puder."
          ],
          steps: ["Colha com tempo seco.", "Espalhe o grão numa camada fina numa lona, esteira, estrado ou cimento, nunca na terra.", "Vire-o várias vezes por dia; tape-o da chuva e à noite.", "Seque depressa: tente chegar a uma humidade segura cerca de dois dias depois de debulhar.", "Faça o teste do sal; confirme com um medidor de humidade na cooperativa ou no comprador.", "Guarde só quando estiver seco."],
          words: [["Teor de humidade", "quanta água há no grão, em percentagem do seu peso."], ["Medidor de humidade", "uma ferramenta que mede a humidade do grão."], ["Teste do sal", "uma verificação caseira aproximada: o sal seco cola à garrafa se o grão estiver húmido demais."], ["Secador solar", "uma armação com uma cobertura transparente que usa o sol para secar as culturas mais depressa e mais limpas."]],
          slides: [
            { title: "Porque secar", bullets: ["O grão húmido aquece, ganha bolor e atrai insetos", "FAO: secar o milho até cerca de 13 a 14 por cento", "Depressa: em cerca de dois dias"] },
            { title: "Como secar", bullets: ["Lona, esteira, estrado ou cimento, nunca na terra", "Camada fina, virar muitas vezes", "Tapar antes da chuva e à noite"] },
            { title: "Verificar antes de guardar", bullets: ["Melhor: um medidor de humidade (cooperativa, comprador, extensão)", "Verificação aproximada: teste do sal numa garrafa seca", "Sal colado = húmido demais; continue a secar"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Faça o teste do sal com uma mão-cheia do seu grão (ou do grão de um vizinho): garrafa seca, sal seco, agite dois a três minutos, olhe para o vidro. Depois descubra quem perto de si tem um medidor de humidade e qual é a humidade máxima do comprador.",
          youCanNow: "secar o grão depressa numa superfície limpa e verificar que chegou a uma humidade segura antes de o guardar.",
          quickCheck: [
            { objective: "O3", q: "O que é um secador solar?", options: ["Um forno elétrico", "Uma armação com uma cobertura de plástico transparente que seca o grão mais depressa e protege da chuva e do pó", "Um silo de metal", "Um medidor de humidade"], answer: 1, why: "Os secadores solares são armações simples com uma cobertura transparente que secam o grão mais depressa e o protegem." },
            { objective: "O3", q: "À tarde formam-se nuvens de chuva enquanto o seu milho debulhado seca lá fora. O que faz?", options: ["Deixa-o; seca mais tarde", "Espalha-o numa camada mais fina", "Tira a água depois da chuva", "Tapa-o ou leva-o para dentro antes da chuva"], answer: 3, why: "Tape o grão ou leve-o para dentro antes da chuva e à noite, para não voltar a ficar húmido." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Recolher bem a colheita",
        questions: [
          { objective: "O1", q: "Que parte dos alimentos a FAO calculou que se perde entre a colheita e a loja (2019)?", options: ["1 por cento", "50 por cento", "Cerca de 14 por cento", "Nenhuma"], answer: 2, why: "O cálculo da FAO de 2019 foi de cerca de 14 por cento perdidos entre a colheita e a venda." },
          { objective: "O2", q: "Qual é um sinal de que o grão de milho está maduro?", options: ["Palhas verdes e molhadas", "Grão mole e leitoso", "Barbas a começar a aparecer", "Uma camada preta na base do grão"], answer: 3, why: "A camada preta mostra que o grão chegou à maturação." },
          { objective: "O2", q: "Tem 2 acres de mandioca e só pode vender um quarto esta semana. O que faz?", options: ["Arranca só o que pode vender ou processar em breve", "Arranca tudo de uma vez", "Arranca tudo e deixa ao sol", "Nunca colhe mandioca"], answer: 0, why: "As raízes de mandioca estragam-se poucos dias depois de arrancadas." },
          { objective: "O3", q: "Onde deve secar o milho?", options: ["Na terra", "Numa lona limpa, esteira, estrado ou chão de cimento", "Num saco fechado à chuva", "Num monte no campo"], answer: 1, why: "Uma superfície limpa e levantada ou coberta mantém o grão limpo e seca-o mais depressa." },
          { objective: "O3", q: "No teste do sal, o sal fica colado ao vidro. O que quer dizer?", options: ["O grão está seco o suficiente para guardar", "O grão tem aflatoxina", "O grão ainda está húmido demais; continue a secar", "O sal está estragado"], answer: 2, why: "O sal colado ao vidro mostra que o grão ainda tem humidade a mais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter a colheita segura e boa para vender",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aflatoxina: o que é e como a prevenir",
          minutes: 6,
          goal: "Usar os principais passos que mantêm a aflatoxina longe do seu milho e do seu amendoim.",
          text: [
            "A aflatoxina é um veneno feito por certos bolores (Aspergillus) que crescem no milho, no amendoim, na mapira e noutras culturas, no campo e no armazém. Muitas vezes não se vê, não tem cheiro nem sabor. Comê-la ao longo do tempo faz mal ao fígado e está ligada ao cancro do fígado e ao atraso no crescimento das crianças; em grandes quantidades pode matar. Também passa da ração para o leite e os ovos. Os compradores e as entidades nacionais de normas alimentares fazem análises e recusam o grão acima do limite legal.",
            "A prevenção começa no campo: culturas saudáveis, sementeira na altura certa e controlo dos insetos que estragam as maçarocas e as vagens. Colha a tempo, não deixe a cultura deitada no chão, e seque-a depressa até uma humidade segura. A FAO nota que os níveis de aflatoxina no milho guardado sobem com os estragos dos gorgulhos, por isso mantenha os armazéns limpos e os insetos fora.",
            "Escolha antes de guardar: tire os grãos e as maçarocas com bolor, partidos, descoloridos, estragados por insetos e enrugados. Nunca coma, venda nem dê aos animais grão com bolor. Produtos de controlo biológico como o Aflasafe, criado pelo IITA (instituto internacional de agricultura tropical) e registado em países como o Quénia, a Nigéria e o Gana, espalham-se no campo antes da floração para tomar o lugar dos bolores tóxicos; pergunte ao seu extensionista ou ao vendedor de insumos se há um aprovado para a sua cultura e a sua zona, e siga o rótulo."
          ],
          steps: ["Controle os insetos que estragam as maçarocas e as vagens no campo.", "Colha a tempo; não deixe a cultura no chão.", "Seque depressa até uma humidade segura.", "Tire o grão com bolor, partido, descolorido e estragado por insetos.", "Guarde num armazém limpo, seco e protegido de insetos.", "Pergunte à extensão por um produto de controlo biológico aprovado para a sua zona."],
          words: [["Aflatoxina", "um veneno feito por alguns bolores em culturas como o milho e o amendoim."], ["Aspergillus", "o grupo de bolores que pode fazer aflatoxina."], ["Controlo biológico", "usar um ser vivo que não faz mal para tomar o lugar de um que faz mal."], ["Escolha", "separar à mão ou à máquina os grãos ou produtos maus."]],
          slides: [
            { title: "O que é a aflatoxina", bullets: ["Um veneno feito por alguns bolores", "Muitas vezes invisível: sem cheiro, sem sabor", "Faz mal ao fígado; ligada ao cancro e ao atraso no crescimento"] },
            { title: "Trave-a em cada passo", bullets: ["Cultura saudável; controle as pragas das maçarocas e vagens", "Colha a tempo; seque depressa até uma humidade segura", "Armazém limpo, seco e protegido de insetos"] },
            { title: "Escolha e nunca use grão com bolor", bullets: ["Tire os grãos com bolor, partidos e descoloridos", "Nunca coma, venda nem dê aos animais grão com bolor", "Passa para o leite e os ovos"] },
            { title: "Controlo biológico", bullets: ["Aflasafe (IITA): registado no Quénia, na Nigéria e no Gana", "Espalha-se no campo antes da floração", "Pergunte à extensão; siga o rótulo"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Tire uma amostra de grão ou amendoim guardado e escolha-a num tabuleiro: separe os grãos com bolor, partidos, descoloridos e estragados por insetos. Pese-os ou conte-os e escreva a parte que tirou. Escreva dois passos que vai mudar na próxima época para a reduzir.",
          youCanNow: "explicar porque a aflatoxina é perigosa e usar passos no campo, na secagem, na escolha e no armazém para a manter afastada.",
          quickCheck: [
            { objective: "O4", q: "Em que culturas podem crescer os bolores da aflatoxina?", options: ["Milho, amendoim e mapira", "Só tomate", "Só chá", "Só folhas de mandioca"], answer: 0, why: "Os bolores Aspergillus crescem no milho, no amendoim, na mapira e noutras culturas." },
            { objective: "O4", q: "Encontra gorgulhos no seu milho guardado. O que faz?", options: ["Ignora-os; não têm importância", "Dá o grão estragado às galinhas", "Tira o grão estragado e limpa o armazém para manter os insetos fora, porque os estragos dos gorgulhos aumentam a aflatoxina", "Mistura o grão estragado com o grão bom"], answer: 2, why: "Os níveis de aflatoxina sobem com os estragos dos gorgulhos; o grão estragado é tirado e nunca dado aos animais nem vendido." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guardar o grão em sacos herméticos",
          minutes: 5,
          goal: "Encher, fechar e guardar um saco hermético para que os insetos morram sem químicos.",
          text: [
            "Hermético quer dizer que não deixa entrar ar. Um saco hermético, como o saco PICS criado na Universidade de Purdue (Estados Unidos), tem dois sacos interiores de plástico dentro de um saco exterior de ráfia. Depois de fechado, os insetos e o grão gastam o oxigénio que há dentro e os insetos morrem ou deixam de se reproduzir, sem inseticida. A Purdue indica o milho, a mapira, o feijão, o feijão-nhemba, o amendoim, o arroz e outras culturas como próprios para estes sacos.",
            "O saco só funciona se o grão estiver seco e o saco não deixar entrar ar. Guarde só grão seco, limpo e escolhido. Encha o saco interior, tire o máximo de ar que puder, torça a boca e ate-a bem; depois faça o mesmo com o segundo saco interior e, por fim, com o saco exterior. Verifique se há buracos antes de usar; um pequeno buraco deixa entrar ar e o saco deixa de funcionar.",
            "Mantenha os sacos levantados do chão, em paletes ou tábuas, longe das paredes, num armazém limpo, seco e à sombra, e proteja-os dos ratos, que roem buracos. Não os abra muitas vezes: cada abertura deixa entrar ar fresco. Os sacos que ainda estão inteiros podem ser usados outra vez na época seguinte. Outras boas opções são os silos de metal e os celeiros limpos, levantados e bem arejados para as maçarocas."
          ],
          steps: ["Verifique que o grão está seco, limpo e escolhido.", "Verifique se os sacos interiores têm buracos.", "Encha o saco interior, tire o ar, torça e ate bem.", "Ate o segundo saco interior e depois o saco exterior, da mesma forma.", "Guarde em paletes, longe das paredes, num armazém seco, à sombra e protegido dos ratos.", "Abra só quando precisar; use outra vez os sacos que estão inteiros."],
          words: [["Hermético", "que não deixa entrar nem sair ar."], ["Saco interior", "um saco de plástico dentro do saco exterior."], ["Palete", "um estrado de madeira que mantém os sacos levantados do chão."], ["Silo de metal", "uma caixa de metal fechada para guardar grão."]],
          slides: [
            { title: "Como funcionam os sacos herméticos", bullets: ["Dois sacos de plástico dentro de um saco de ráfia (PICS)", "Fechado: o oxigénio acaba, os insetos morrem", "Não precisa de inseticida"] },
            { title: "Feche bem", bullets: ["Só grão seco, limpo e escolhido", "Tire o ar; torça e ate cada camada", "Primeiro veja se os sacos interiores têm buracos"] },
            { title: "Guarde bem", bullets: ["Em paletes, longe das paredes", "Armazém seco, à sombra e protegido dos ratos", "Abra poucas vezes; use outra vez os sacos inteiros"] }
          ],
          sources: [PICS],
          tryIt: "Olhe para o seu armazém. Escreva três mudanças que protegeriam os sacos (paletes, espaço até às paredes, proteção contra ratos, sombra). Se puder, compre um saco hermético num vendedor de insumos e pratique atar cada camada com grão seco.",
          youCanNow: "fechar e guardar grão em sacos herméticos para que se conserve sem químicos.",
          quickCheck: [
            { objective: "O5", q: "O que há dentro do saco exterior de ráfia de um saco PICS?", options: ["Um forro de metal", "Pó inseticida", "Dois sacos interiores de plástico", "Nada"], answer: 2, why: "Um saco PICS tem dois sacos interiores de plástico dentro de um saco exterior de ráfia." },
            { objective: "O5", q: "Já encheu e atou o primeiro saco interior. O que faz a seguir?", options: ["Tira o ar, torce e ata o segundo saco interior, depois ata o saco exterior", "Deixa o segundo saco interior aberto para entrar ar", "Faz um buraco para ver o grão", "Guarda-o ao sol"], answer: 0, why: "Cada saco interior e o saco exterior são bem atados para o saco não deixar entrar ar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter os produtos frescos, classificar e embalar",
          minutes: 5,
          goal: "Manter os produtos frescos, classificá-los segundo a norma do comprador e embalá-los para chegarem sem pisaduras.",
          text: [
            "Os produtos frescos como o tomate, a couve, a manga e o abacate continuam vivos e a respirar depois da colheita. O calor acelera isto, por isso amadurecem, murcham e apodrecem mais depressa. Colha na manhã fresca, mantenha os produtos sempre à sombra, e leve-os depressa ao comprador.",
            "Sem eletricidade, um refrigerador por evaporação ajuda. A Câmara de Arrefecimento sem Energia, indicada pela FAO, é uma parede dupla de tijolo com areia molhada entre as paredes e uma cobertura molhada por cima; quando a água evapora, arrefece o interior e mantém o ar húmido para os produtos não murcharem. Funciona melhor em lugares secos e quentes. Os refrigeradores de potes de barro funcionam da mesma forma, em ponto pequeno.",
            "Classificar quer dizer separar os produtos em classes por tamanho, maturação e qualidade, e tirar os que estão estragados para não estragarem os outros. Os compradores pagam mais por produtos iguais, limpos e classificados. Embale em caixas limpas, fortes e arejadas em vez de sacos para os produtos moles, não as encha demais, e etiquete cada caixa com a classe, a data e o seu nome. Uma fotografia de cada lote classificado, tirada com o telefone, ajuda a resolver desacordos com os compradores."
          ],
          steps: ["Pergunte ao comprador quais são as classes dele: tamanho, maturação, qualidade.", "Colha na manhã fresca e mantenha os produtos à sombra.", "Separe por classes; tire os produtos estragados.", "Use um refrigerador por evaporação se tiver de guardar os produtos.", "Embale em caixas limpas e arejadas; não as encha demais.", "Etiquete as caixas com a classe, a data e o nome; tire uma fotografia."],
          words: [["Refrigerador por evaporação", "um lugar de guardar arrefecido pela água que evapora de paredes, areia ou pano molhados."], ["Classificação", "separar os produtos em classes de qualidade."], ["Caixa arejada", "uma caixa com buracos que deixa o ar passar à volta dos produtos."]],
          slides: [
            { title: "O calor é o inimigo", bullets: ["Os produtos continuam a respirar depois da colheita", "Colha na manhã fresca", "Sempre à sombra; venda depressa"] },
            { title: "Arrefecer sem eletricidade (FAO)", bullets: ["Câmara de Arrefecimento sem Energia: areia molhada entre paredes de tijolo", "Fresco e húmido por dentro", "Melhor em lugares secos e quentes"] },
            { title: "Classificar e embalar", bullets: ["Separe por tamanho, maturação e qualidade", "Caixas limpas e arejadas, não sacos", "Etiquete classe, data, nome; tire uma fotografia"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Tarefa final: escreva o seu plano pós-colheita de uma página para uma cultura. Ponha as regras de qualidade do comprador no topo, depois a altura da colheita, a secagem e a verificação da humidade (para grão), os passos contra a aflatoxina, o armazenamento, e como vai arrefecer, classificar e embalar.",
          youCanNow: "manter os produtos frescos, classificá-los e embalá-los segundo a norma do comprador, e seguir um plano pós-colheita completo para uma cultura.",
          quickCheck: [
            { objective: "O6", q: "Onde funciona melhor uma Câmara de Arrefecimento sem Energia?", options: ["Em lugares frios e chuvosos", "Em lugares secos e quentes", "Só dentro de um frigorífico", "Só à noite"], answer: 1, why: "Os refrigeradores por evaporação funcionam melhor em lugares secos e quentes, onde a água evapora depressa." },
            { objective: "O6", q: "Um comprador diz que as suas caixas eram da classe errada. O que ajuda a resolver o desacordo?", options: ["Gritar", "Baixar logo o preço", "Levar as caixas para casa", "Etiquetas com a classe e a data, e uma fotografia de cada lote classificado"], answer: 3, why: "Caixas etiquetadas e uma fotografia de cada lote classificado ajudam a resolver desacordos com os compradores." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter a colheita segura e boa para vender",
        questions: [
          { objective: "O4", q: "O que é a aflatoxina?", options: ["Um adubo", "Um veneno feito por alguns bolores nas culturas", "Um tipo de gorgulho", "Um saco de armazenamento"], answer: 1, why: "A aflatoxina é um veneno produzido por certos bolores Aspergillus." },
          { objective: "O4", q: "O seu milho tem algumas maçarocas com bolor. O que deve fazer com elas?", options: ["Dá-las às galinhas", "Misturá-las com o grão bom", "Vendê-las barato", "Tirá-las; não as comer, vender nem dar aos animais"], answer: 3, why: "A aflatoxina faz mal às pessoas e passa da ração para o leite e os ovos." },
          { objective: "O5", q: "Como é que um saco hermético mata os insetos do armazém?", options: ["O oxigénio dentro acaba depois de fechado", "Tem veneno", "É aquecido", "Deixa entrar ar fresco"], answer: 0, why: "Bem fechado, o oxigénio é gasto e os insetos morrem sem químicos." },
          { objective: "O5", q: "Porque manter os sacos de grão em paletes e longe das paredes?", options: ["Só para ficar arrumado", "Para os tornar mais pesados", "Para evitar a humidade e ver mais facilmente os ratos e as pragas", "Para os sacos apanharem sol"], answer: 2, why: "As paletes e o espaço até às paredes mantêm os sacos secos e mais fáceis de verificar." },
          { objective: "O6", q: "Qual é a melhor forma de embalar tomates maduros para o mercado?", options: ["Apertados num saco", "Soltos no chão de um camião", "Num saco de plástico fechado ao sol", "Em caixas limpas e arejadas, sem as encher demais"], answer: 3, why: "As caixas protegem os produtos moles de ficarem esmagados e deixam o ar passar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Manuseamento e Armazenamento Pós-Colheita",
    questions: [
      { objective: "O1", q: "Qual é uma causa comum de perda pós-colheita?", options: ["Secagem rápida", "Gorgulhos, ratos e bolor no armazém", "Caixas limpas", "Classificação"], answer: 1, why: "As pragas e o bolor no armazém são grandes causas de perda." },
      { objective: "O1", q: "Porque desenhar o caminho da sua cultura do campo até ao comprador?", options: ["Para encontrar onde acontecem as maiores perdas", "Para tornar o caminho mais longo", "Para evitar o comprador", "Não serve para nada"], answer: 0, why: "Saber onde acontecem as perdas diz-lhe onde agir primeiro." },
      { objective: "O1", q: "Um preço mais baixo por causa da má qualidade é:", options: ["Não é uma perda", "Um ganho", "Uma perda pós-colheita escondida", "Um imposto"], answer: 2, why: "Perder classe ou preço é uma perda de valor, mesmo que não se percam sacos." },
      { objective: "O2", q: "O feijão está pronto para colher quando:", options: ["As flores abrem", "As folhas estão verde-escuras", "As vagens ainda estão moles", "A maioria das vagens está seca e faz barulho"], answer: 3, why: "Vagens secas que fazem barulho mostram que o feijão está maduro." },
      { objective: "O2", q: "Quando apanha café, deve apanhar:", options: ["Só cerejas vermelhas e maduras", "Cerejas verdes", "Folhas e cerejas juntas", "Cerejas do chão"], answer: 0, why: "As cerejas vermelhas e maduras dão o café de melhor qualidade." },
      { objective: "O2", q: "A regra habitual para apanhar chá é:", options: ["Folhas velhas e duras", "Duas folhas e um botão", "Ramos inteiros", "Raízes"], answer: 1, why: "Os rebentos tenros de duas folhas e um botão dão um bom chá." },
      { objective: "O2", q: "Porque colher os produtos frescos na manhã fresca?", options: ["Os compradores dormem até mais tarde", "É mais barato", "O calor acelera a maturação, o murchar e a podridão", "O orvalho da manhã acrescenta peso"], answer: 2, why: "Os produtos frescos duram mais quando são colhidos com fresco." },
      { objective: "O3", q: "A orientação da FAO dá uma humidade segura para guardar o milho de cerca de:", options: ["13 a 14 por cento", "25 por cento", "40 por cento", "2 por cento"], answer: 0, why: "A FAO diz que secar até cerca de 13 a 14 por cento, antes de o bolor crescer, é a forma mais segura de prevenir a aflatoxina." },
      { objective: "O3", q: "Com que rapidez deve secar o milho acabado de debulhar?", options: ["Ao longo de cerca de duas semanas", "Não há pressa", "Depois da próxima época das chuvas", "Em cerca de dois dias"], answer: 3, why: "A FAO nota que a aflatoxina sobe depressa se o milho ficar húmido mais de cerca de dois dias." },
      { objective: "O3", q: "A forma mais exata de verificar a humidade do grão é:", options: ["Morder um grão", "Um medidor de humidade", "Olhar para a cor", "Pesar o saco"], answer: 1, why: "Um medidor de humidade mede-a; o teste do sal é só uma verificação aproximada." },
      { objective: "O3", q: "Porque não secar o grão na terra?", options: ["Seca depressa demais", "É contra todas as leis", "A terra, a humidade e os esporos de bolor entram no grão", "A terra torna o grão mais pesado e mais valioso"], answer: 2, why: "A terra suja o grão e mantém-no húmido." },
      { objective: "O4", q: "A aflatoxina é perigosa em parte porque:", options: ["Tem um cheiro forte e as pessoas evitam-na", "Muitas vezes não se vê, não tem cheiro nem sabor", "Só afeta as plantas", "Desaparece quando se cozinha o grão"], answer: 1, why: "Normalmente é invisível, por isso a prevenção e as análises são importantes." },
      { objective: "O4", q: "A aflatoxina na ração dos animais pode:", options: ["Passar para o leite e os ovos", "Fazer os animais crescer mais depressa", "Não fazer nada aos animais", "Transformar-se em adubo"], answer: 0, why: "A aflatoxina da ração pode aparecer no leite e nos ovos." },
      { objective: "O4", q: "O Aflasafe é:", options: ["Um saco de armazenamento", "Um medidor de humidade", "Uma marca de semente de milho", "Um produto de controlo biológico que toma o lugar dos bolores tóxicos"], answer: 3, why: "O Aflasafe, do IITA, usa bolores que não fazem mal para tomar o lugar dos tóxicos." },
      { objective: "O4", q: "Antes de usar um produto de controlo biológico, deve:", options: ["Misturá-lo no grão guardado", "Confirmar com a extensão que está aprovado para a sua cultura e a sua zona, e seguir o rótulo", "Usar o dobro da quantidade", "Usá-lo só depois da colheita"], answer: 1, why: "Use só produtos aprovados, da forma que o rótulo diz." },
      { objective: "O5", q: "O que tem de ser verdade antes de o grão entrar num saco hermético?", options: ["Está seco, limpo e escolhido", "Ainda está húmido", "Está misturado com inseticida", "Está quente do sol"], answer: 0, why: "Os sacos herméticos não secam o grão; o grão húmido ganha bolor na mesma." },
      { objective: "O5", q: "Um saco interior de um saco hermético tem um pequeno buraco. O que acontece?", options: ["Nada", "Funciona melhor", "Entra ar e o saco deixa de funcionar", "O grão seca mais depressa"], answer: 2, why: "O saco não pode deixar entrar ar, para tirar o oxigénio aos insetos." },
      { objective: "O5", q: "Porque não deve abrir os sacos herméticos muitas vezes?", options: ["Ficam mais pesados", "Cada abertura deixa entrar ar fresco", "Abri-los é proibido por lei", "Os insetos gostam da luz"], answer: 1, why: "O ar fresco traz de volta oxigénio para os insetos." },
      { objective: "O6", q: "Uma Câmara de Arrefecimento sem Energia arrefece os produtos com:", options: ["Eletricidade", "Gelo comprado na loja", "Gás", "Água que evapora da areia molhada entre paredes de tijolo"], answer: 3, why: "A evaporação arrefece a câmara e mantém o ar húmido." },
      { objective: "O6", q: "Porque classificar os produtos antes de vender?", options: ["Os compradores pagam mais por produtos iguais, limpos e escolhidos", "Faz os produtos apodrecer mais depressa", "Esconde os produtos estragados", "É só para exportação"], answer: 0, why: "A classificação cumpre as normas do comprador e tira os produtos estragados." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      3,
      7,
      9,
      11,
      14,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique outra vez.",
    criteria: [
      {
        name: "Regras do comprador e altura da colheita",
        objective: "O2",
        notYet: "Sem as regras do comprador, ou sem os sinais de que a cultura está pronta.",
        meets: "As regras de qualidade do comprador estão no topo, com os sinais de que a cultura está pronta e como os dias de colheita vão ser planeados.",
        exceeds: "Mostra ferramentas, sacos ou caixas e mão de obra garantidos antes da colheita."
      },
      {
        name: "Secagem e humidade",
        objective: "O3",
        notYet: "Sem superfície de secagem nem verificação da humidade (para grão).",
        meets: "Secagem longe do chão, virar e tapar, e uma verificação da humidade com um medidor ou com o teste do sal.",
        exceeds: "Diz onde se pode usar um medidor de humidade, como numa cooperativa ou num comprador."
      },
      {
        name: "Prevenção da aflatoxina",
        objective: "O4",
        notYet: "Sem passos contra a aflatoxina, ou o grão com bolor é guardado.",
        meets: "Passos no campo, na secagem, na escolha e no armazém, com o grão com bolor tirado e nunca comido, vendido nem dado aos animais.",
        exceeds: "Pergunta à extensão se um produto de controlo biológico aprovado serve para a cultura e a zona."
      },
      {
        name: "Armazenamento",
        objective: "O5",
        notYet: "Falta a forma de guardar, ou o grão é guardado húmido.",
        meets: "Grão seco, limpo e escolhido em sacos herméticos ou noutro bom armazém, levantado do chão e protegido dos ratos.",
        exceeds: "Diz de quanto em quanto tempo os sacos vão ser verificados sem os abrir."
      },
      {
        name: "Arrefecer, classificar e embalar",
        objective: "O6",
        notYet: "Produtos frescos em sacos ou ao sol, ou sem classificação.",
        meets: "Colheita nas horas frescas, sombra, classificação segundo a norma do comprador, e caixas limpas e arejadas com etiquetas.",
        exceeds: "Usa um refrigerador por evaporação ou fotografias de cada lote classificado."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano pós-colheita",
      "Alunos que dizem usar sacos herméticos, uma verificação da humidade ou caixas dentro de uma época (inquérito de seguimento)",
      "Mudança nas perdas no armazém, nas cargas recusadas ou no preço por saco, indicada pelos alunos ou pelo seu grupo depois de uma época",
      "Alunos que começam outro curso de agricultura da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno, uma caneta e um telefone simples",
      "Uma garrafa de vidro limpa e sal seco para o teste do sal; um medidor de humidade se for possível pedir um emprestado",
      "Um saco hermético e uma caixa para demonstração, se houver",
      "Cerca de 60 minutos no total, em sessões curtas, mais o tempo para escrever o plano pós-colheita"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou num armazém: façam o teste inicial juntos e depois sigam o caminho de uma cultura do campo até ao comprador.",
      "Mostre o teste do sal e, se possível, um medidor de humidade de uma cooperativa ou de um comprador.",
      "Pratiquem em grupo encher e atar um saco hermético.",
      "Nunca prove nem dê aos animais grão com bolor numa demonstração; mostre como o separar e tirar com segurança.",
      "Avalie o plano pós-colheita com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
