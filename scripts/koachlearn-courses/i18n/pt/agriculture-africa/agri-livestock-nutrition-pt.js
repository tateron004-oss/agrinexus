"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-livestock-nutrition.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ e FAO): sistema de informação sobre recursos para alimentação animal", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: Maize grain (grão de milho: proteína de cerca de 8 a 10,5 por cento da matéria seca)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: Soybean meal (bagaço de soja: proteína por tipo)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: Push-pull technology (tecnologia push-pull: desmódio, capim-elefante e braquiária como forragem)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "University of Tennessee Extension: Feedstuffs activity packet (atividades sobre alimentos para animais: o quadrado de Pearson)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: Harvesting and ensiling techniques (técnicas de colheita e ensilagem nos trópicos)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: Silage making for small-scale farmers (silagem para pequenos agricultores: silagem em saco, métodos de baixo custo)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: Mycotoxin binders, an option for safer milk in Kenya? (ligantes de micotoxinas para um leite mais seguro no Quénia)", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-pt",
  lang: "pt",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Nutrição Animal e Formulação de Rações com Ingredientes Locais",
  skills: "Ajustar os nutrientes às necessidades do animal, Escolher ingredientes e forragens locais, Equilibrar uma ração com o quadrado de Pearson, Fazer silagem e feno e guardar a ração com segurança, Planear a alimentação por fase, Calcular o custo da ração por kg de ganho ou litro de leite",
  outcome: "preparar e calcular o custo de uma ração equilibrada com ingredientes locais para um tipo de animal: ajustar a energia, a proteína, os minerais e a água à sua fase, equilibrar a proteína com o quadrado de Pearson, conservar e guardar a ração com segurança e calcular o custo da ração por kg de ganho, por tabuleiro de ovos ou por litro de leite.",
  about: [
    "Este curso é para pequenos criadores de gado e de aves e criadores em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas, pequenos fabricantes de ração e extensionistas no Quénia, na Nigéria, no Gana, na Costa do Marfim, no Burkina Faso e em toda a África. A ração é normalmente o maior custo de criar animais, por isso alimentar bem e barato decide se a exploração dá lucro.",
    "O Capítulo 1 trata do que os animais precisam e do que você tem: os nutrientes, ingredientes locais como milho, farelo de milho, farelo de trigo, bagaço de soja e de algodão, farinha de peixe, e forragens como o capim-elefante (Napier), o desmódio e o lablab, e como equilibrar uma ração com o quadrado de Pearson, passo a passo. O Capítulo 2 trata de conservar e planear: silagem e feno, guardar a ração com segurança contra o bolor e as micotoxinas, alimentar por fase com um plano de alimentação em três partes, e calcular o custo da ração por kg de ganho ou por litro de leite.",
    "Todos os preços deste curso são exemplos inventados: use os seus preços locais. Os valores nutritivos dos ingredientes variam, por isso confirme-os com o seu fornecedor, um laboratório de rações ou o seu extensionista. Este curso não dá doses de medicamentos nem de aditivos; siga o rótulo e o seu veterinário. Cada lição dura cerca de cinco minutos e termina com uma tarefa. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Prepare uma ração com custo calculado para um tipo de animal da sua exploração (ou um exemplo, como poedeiras perto de Kumasi, porcos em crescimento perto de Ibadan, frangos perto de Bouaké ou uma vaca leiteira em Kiambu): diga o tipo e a fase; escreva o plano de alimentação em três partes (alimento de base ou forragem, concentrado, suplementos) e a água; equilibre a proteína do concentrado com o quadrado de Pearson, mostrando as suas contas; escreva os kg de cada ingrediente por 100 kg de mistura; calcule o custo por kg com os seus preços locais; e calcule o custo da ração por kg de ganho, por tabuleiro de ovos ou por litro de leite.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos criadores de gado e de aves e criadores comerciais em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas, pequenos fabricantes de ração e extensionistas na África Oriental, Ocidental e Central (incluindo os países de língua francesa).",
    startingPoint: "Alimentam os animais com pastagem, restos de culturas e ração comercial comprada. A maioria não sabe ler um rótulo de ração nem equilibrar uma ração, não conserva forragem para a época seca e não sabe quanto custa a ração por kg de carne, por ovo ou por litro de leite.",
    gap: "A ração comprada é cara e a sua qualidade varia; ração má ou com bolor reduz o crescimento, os ovos e o leite e pode adoecer os animais. Os criadores que sabem misturar uma ração equilibrada com ingredientes locais, conservar forragem e calcular o custo da ração conseguem baixar os custos, manter os animais a produzir durante a época seca e pôr preço nos seus produtos com confiança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; só contas simples (multiplicar, dividir, percentagens); o curso também existe em espanhol, francês e árabe",
      "Aparelhos: papel e caneta ou a calculadora do telefone; uma folha de cálculo no telefone é opcional",
      "Dinheiro: os preços em KES, NGN, GHS e XOF são exemplos inventados; os alunos usam os preços locais",
      "Os valores dos ingredientes variam: os alunos confirmam-nos com os fornecedores, um laboratório ou o extensionista",
      "Regras de saúde animal: nenhuma dose de medicamentos, aditivos ou rações medicamentosas; siga o veterinário e o rótulo"
    ],
    prerequisites: "Cuidados básicos com os animais e contas simples. Recomenda-se fazer primeiro o curso \"Saúde e Maneio do Gado\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um tipo de animal e a sua fase", action: "listar os nutrientes de que ele precisa (energia, proteína, minerais e água) e um alimento local que forneça cada um", standard: "dando um alimento certo para cada nutriente" },
    { id: "O2", condition: "Com os alimentos disponíveis perto de si", action: "separar os ingredientes e forragens locais em alimentos energéticos, alimentos proteicos, volumosos e suplementos", standard: "acertando pelo menos 8 de 10" },
    { id: "O3", condition: "Com dois ingredientes e um nível de proteína desejado", action: "equilibrar uma ração com o quadrado de Pearson e escrever os kg de cada ingrediente por 100 kg de mistura", standard: "com a mistura a menos de 0,5 pontos percentuais do objetivo" },
    { id: "O4", condition: "Usando a forragem e a ração da sua exploração", action: "fazer silagem ou feno e guardar a ração para que se mantenha seca e sem bolor", standard: "seguindo todos os passos da lista" },
    { id: "O5", condition: "Para um tipo de animal", action: "escrever um plano de alimentação por fases com alimento de base ou forragem, concentrado e suplementos para cada fase", standard: "cobrindo todas as fases, de jovem até à venda, à postura ou ao leite" },
    { id: "O6", condition: "Usando os seus preços locais e os seus registos", action: "calcular o custo da ração por kg de mistura e por kg de ganho, tabuleiro de ovos ou litro de leite", standard: "com as contas certas e todos os ingredientes incluídos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O que os animais precisam e o que você tem",
      lessons: [
        {
          title: "Nutrientes: energia, proteína, minerais e água",
          objectives: ["O1"],
          minutes: 5,
          goal: "Listar o que um animal precisa de comer e beber, e um alimento local para cada necessidade.",
          text: [
            "Todos os animais precisam de quatro coisas da ração e da água. A energia mantém-nos vivos, quentes e a mexer-se, e alimenta o crescimento, o leite e os ovos; vem sobretudo dos grãos (milho, mapira, mandioca), dos farelos e do capim fresco ou conservado. A proteína constrói músculo, leite, ovos e crias; vem dos bagaços de oleaginosas (soja, algodão, amendoim, girassol), da farinha de peixe e das leguminosas como o desmódio e o lablab. Os minerais e as vitaminas constroem os ossos e as cascas dos ovos e mantêm o corpo a funcionar: sal, cálcio do calcário ou das conchas, fósforo e uma pré-mistura de minerais e vitaminas.",
            "A água é o nutriente mais importante e o mais barato. Sem ela, o animal deixa de comer depressa, e as vacas em lactação e as galinhas poedeiras bebem muito. Dê água limpa o tempo todo, mais quando faz calor, em bebedouros limpos e à sombra.",
            "As necessidades mudam com o animal e a sua fase. Um animal jovem que cresce depressa, uma galinha poedeira e uma vaca em lactação precisam de mais proteína do que um adulto em repouso. Os bovinos, as cabras e as ovelhas são ruminantes: o seu estômago consegue digerir capim e restos de culturas, por isso os volumosos são a base da sua dieta. Os porcos e as aves não conseguem digerir muitos volumosos, por isso precisam de rações à base de grão, com proteína, minerais e vitaminas misturados."
          ],
          words: [["Nutriente", "uma parte da ração de que o corpo precisa: energia, proteína, minerais, vitaminas e água."], ["Ruminante", "um animal com um estômago de quatro partes que consegue digerir capim: bovinos, cabras e ovelhas."], ["Pré-mistura", "uma mistura comprada de minerais e vitaminas que se junta à ração em pequenas quantidades, como diz o rótulo."], ["Volumoso", "alimento com muito volume e fibra, como capim, feno, silagem e restos de culturas."]],
          slides: [
            { title: "Quatro necessidades", bullets: ["Energia: grãos, farelos, mandioca, capim", "Proteína: bagaços de oleaginosas, farinha de peixe, leguminosas", "Minerais e vitaminas: sal, calcário, pré-mistura", "Água: limpa, o tempo todo"] },
            { title: "Primeiro a água", bullets: ["O nutriente mais barato e mais importante", "Mais no calor; animais em lactação e poedeiras bebem muito", "Bebedouros limpos à sombra"] },
            { title: "As necessidades mudam com a fase", bullets: ["Animais jovens, poedeiras e em lactação precisam de mais proteína", "Adultos em repouso precisam de menos"] },
            { title: "Ruminantes, porcos e aves", bullets: ["Bovinos, cabras, ovelhas: os volumosos são a base", "Porcos e aves: ração à base de grão com proteína e pré-mistura"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Escolha um tipo de animal da sua exploração (por exemplo porcos em crescimento, poedeiras ou uma vaca em lactação). Escreva as suas quatro necessidades e, ao lado de cada uma, um alimento que consegue arranjar perto de si e que a fornece.",
          youCanNow: "listar as necessidades de energia, proteína, minerais e água de um animal e dar um alimento local para cada uma.",
          quickCheck: [
            { objective: "O1", q: "Qual é o nutriente mais barato e mais importante?", options: ["Proteína", "Energia", "Água", "Vitaminas"], answer: 2, why: "Sem água limpa, os animais deixam depressa de comer e de produzir." },
            { objective: "O1", q: "Que alimento fornece sobretudo proteína?", options: ["Bagaço de soja", "Grão de milho", "Sal", "Mandioca seca em pedaços"], answer: 0, why: "Os bagaços de oleaginosas, como o de soja, são ricos em proteína; o milho e a mandioca dão sobretudo energia." }
          ]
        },
        {
          title: "Ingredientes e forragens locais",
          objectives: ["O2"],
          minutes: 6,
          goal: "Separar os alimentos que consegue arranjar em energéticos, proteicos, volumosos e suplementos.",
          text: [
            "Alimentos energéticos: grão de milho, de mapira e de mexoeira, mandioca (descascada, seca ou processada para ficar segura), farelo de milho e farelo de trigo. Os farelos são mais baratos do que o grão e dão alguma proteína e fibra, mas farelo a mais numa ração para aves dilui a energia. O grão de milho tem só cerca de 8 a 10 por cento de proteína, por isso sozinho não chega para alimentar um animal em crescimento.",
            "Alimentos proteicos: bagaço de soja (muitas vezes com cerca de 44 a 48 por cento de proteína, conforme a forma como foi feito), bagaço de algodão, bagaço de amendoim, bagaço de girassol e farinha de peixe (como a omena no Quénia). O bagaço de algodão contém gossipol, que pode fazer mal aos porcos, às aves e aos animais jovens, por isso use-o só dentro dos limites de um guia de rações ou de um nutricionista. A farinha de peixe é rica mas cara e a sua qualidade varia: compre a uma fonte de confiança e confirme que não está misturada com areia ou sal.",
            "Forragens e volumosos para ruminantes: capim-elefante (Napier), braquiária, palha de milho, leguminosas como o desmódio e o lablab, e folhas de árvores como a leucena e a caliandra. As leguminosas são ricas em proteína e podem substituir parte do concentrado comprado. O sistema push-pull do icipe (um centro de investigação sobre insetos) semeia desmódio entre as linhas de milho e capim-elefante ou braquiária à volta do campo: protege o milho das pragas e dá forragem de boa qualidade. Suplementos: sal, calcário ou conchas para o cálcio, e uma pré-mistura de minerais e vitaminas usada como diz o rótulo."
          ],
          steps: ["Liste todos os alimentos que consegue comprar ou cultivar perto de si.", "Marque cada um: energético, proteico, volumoso ou suplemento.", "Escreva o preço por kg e em que altura do ano o consegue arranjar.", "Pergunte ao seu fornecedor ou extensionista o valor de proteína.", "Anote os limites, como o bagaço de algodão para porcos e aves."],
          words: [["Concentrado", "alimento rico em energia ou proteína, como grão, farelo, bagaço de oleaginosas ou uma ração comprada para vacas leiteiras."], ["Bagaço de oleaginosas", "o que fica depois de se espremer o óleo de sementes como a soja ou o algodão; rico em proteína."], ["Leguminosa", "uma planta como o desmódio, o lablab ou o feijão, rica em proteína, que junta azoto ao solo."], ["Gossipol", "uma substância natural da semente de algodão que pode fazer mal aos porcos, às aves e aos animais jovens."]],
          slides: [
            { title: "Alimentos energéticos", bullets: ["Milho, mapira, mexoeira, mandioca bem processada", "Farelo de milho e de trigo: mais baratos, mais fibra", "Milho sozinho: só cerca de 8 a 10 por cento de proteína"] },
            { title: "Alimentos proteicos", bullets: ["Bagaço de soja, muitas vezes com cerca de 44 a 48 por cento de proteína", "Bagaço de algodão, de amendoim e de girassol", "Farinha de peixe: rica, mas confirme a qualidade"] },
            { title: "Forragens para ruminantes", bullets: ["Capim-elefante, braquiária, palha de milho", "Leguminosas: desmódio, lablab, leucena, caliandra", "O push-pull dá forragem e protege o milho"] },
            { title: "Suplementos e limites", bullets: ["Sal, calcário ou conchas, pré-mistura como diz o rótulo", "Bagaço de algodão: limites para porcos, aves e animais jovens", "Confirme os valores com o fornecedor ou o extensionista"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Faça uma tabela com 8 a 10 alimentos que consegue arranjar perto de si, com quatro colunas: alimento, tipo (energético, proteico, volumoso ou suplemento), preço por kg e meses em que existe.",
          youCanNow: "separar os alimentos perto de si em energéticos, proteicos, volumosos e suplementos, e anotar os seus preços e limites.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma leguminosa forrageira rica em proteína para bovinos e cabras?", options: ["Palha de milho", "Farelo de trigo", "Desmódio", "Cascas de mandioca"], answer: 2, why: "O desmódio é uma leguminosa, rica em proteína; os outros dão sobretudo energia ou fibra." },
            { objective: "O2", q: "Porque deve ter cuidado com o bagaço de algodão para porcos e aves?", options: ["Não tem proteína", "Contém gossipol, que lhes pode fazer mal", "É barato demais", "É só para peixes"], answer: 1, why: "O gossipol da semente de algodão pode fazer mal aos porcos, às aves e aos animais jovens, por isso use-o dentro dos limites do guia." }
          ]
        },
        {
          title: "Equilibrar uma ração com o quadrado de Pearson",
          objectives: ["O3"],
          minutes: 6,
          goal: "Equilibrar dois ingredientes até um nível de proteína desejado com o quadrado de Pearson.",
          text: [
            "O quadrado de Pearson é um desenho simples que lhe diz quanto misturar de dois alimentos para chegar a um objetivo, normalmente a proteína. Funciona com um nutriente e dois alimentos de cada vez, e o objetivo tem de ficar entre os valores dos dois alimentos. Use valores na mesma base (os dois tal como são dados ao animal, ou os dois em matéria seca).",
            "Exemplo com valores típicos (confirme os seus): milho com 9 por cento de proteína, bagaço de soja com 44 por cento e um objetivo de 18 por cento. O seu objetivo vem de um guia de rações, do seu extensionista ou de um nutricionista para esse animal e essa fase. Desenhe um quadrado. Escreva 18 no meio, o milho 9 no canto de cima à esquerda e o bagaço de soja 44 no canto de baixo à esquerda. Subtraia ao longo das diagonais e ignore os sinais de menos: 44 menos 18 = 26 partes de milho (em cima à direita); 18 menos 9 = 9 partes de bagaço de soja (em baixo à direita). Total de partes = 26 + 9 = 35.",
            "Passe as partes para kg por 100 kg: milho = 26 / 35 x 100 = 74,3 kg; bagaço de soja = 9 / 35 x 100 = 25,7 kg. Verifique: 74,3 x 9 % = 6,7 kg de proteína, mais 25,7 x 44 % = 11,3 kg, total 18,0 kg de proteína em 100 kg: 18 por cento. Numa ração verdadeira, primeiro reserve espaço para os itens fixos (pré-mistura, sal, calcário para poedeiras, como diz o rótulo ou o guia) e depois use o quadrado para o resto. O quadrado só equilibra a proteína, por isso confirme a energia, a fibra e os minerais com o seu extensionista."
          ],
          steps: ["Escreva a proteína desejada no meio de um quadrado.", "Escreva o alimento A (pouca proteína) em cima à esquerda e o alimento B (muita proteína) em baixo à esquerda.", "Subtraia ao longo de cada diagonal; ignore os sinais de menos.", "Em cima à direita = partes do alimento A; em baixo à direita = partes do alimento B.", "Divida cada uma pelo total de partes e multiplique por 100 para ter kg por 100 kg.", "Verifique: kg x percentagem de proteína de cada alimento somam o objetivo."],
          words: [["Quadrado de Pearson", "um desenho simples que mostra quanto misturar de dois alimentos para chegar a um objetivo de um nutriente."], ["Proteína bruta", "o valor de proteína escrito nos rótulos das rações e nos relatórios de laboratório, em percentagem."], ["Ração", "a comida que um animal recebe num dia, ou a mistura de onde ela vem."], ["Tal como é dado (as-fed)", "medido como o alimento está, com a sua água; os valores em matéria seca tiram a água."]],
          slides: [
            { title: "O quadrado de Pearson", bullets: ["Um nutriente, dois alimentos", "O objetivo tem de ficar entre os dois valores", "Mesma base: tal como é dado ou matéria seca"] },
            { title: "Montar o quadrado", bullets: ["No meio: objetivo de 18 por cento", "Em cima à esquerda: milho 9; em baixo à esquerda: bagaço de soja 44"] },
            { title: "Cruzar as diagonais", bullets: ["44 - 18 = 26 partes de milho", "18 - 9 = 9 partes de bagaço de soja", "Total 35 partes"] },
            { title: "Por 100 kg, depois verificar", bullets: ["Milho 26 / 35 x 100 = 74,3 kg", "Bagaço de soja 9 / 35 x 100 = 25,7 kg", "6,7 + 11,3 = 18,0 kg de proteína: no objetivo"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Use o quadrado de Pearson para misturar farelo de milho (use 10 por cento de proteína como valor de treino) com bagaço de soja (44 por cento) para um objetivo de 16 por cento. Escreva os kg por 100 kg e verifique se a proteína dá certo. (Resposta: 28 partes de farelo e 6 partes de bagaço, portanto 82,4 kg e 17,6 kg.)",
          youCanNow: "equilibrar dois alimentos até um objetivo de proteína com o quadrado de Pearson e verificar o resultado.",
          quickCheck: [
            { objective: "O3", q: "No quadrado de Pearson, o que fica no meio?", options: ["O preço da ração", "O peso do animal", "O número de animais", "O nível de proteína desejado"], answer: 3, why: "O nível desejado do nutriente fica no meio; os alimentos ficam à esquerda." },
            { objective: "O3", q: "Mistura milho (9 por cento) e bagaço de soja (44 por cento) para 18 por cento. Quantas partes de milho?", options: ["26 partes (44 menos 18)", "9 partes (18 menos 9)", "35 partes", "18 partes"], answer: 0, why: "Subtraia ao longo da diagonal: 44 - 18 = 26 partes de milho." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O que os animais precisam e o que você tem",
        questions: [
          { objective: "O1", q: "Porque é que os bovinos e as cabras podem viver sobretudo de capim e os porcos e as galinhas não?", options: ["Os porcos e as galinhas não precisam de energia", "O capim é venenoso para os porcos", "Os bovinos e as cabras são ruminantes e digerem volumosos", "As galinhas só bebem água"], answer: 2, why: "O estômago dos ruminantes digere volumosos; os porcos e as aves precisam de rações à base de grão." },
          { objective: "O1", q: "Que animal precisa de mais proteína na ração?", options: ["Um frango jovem que cresce depressa", "Uma cabra adulta em repouso na época seca", "Uma vaca adulta vazia e que não dá leite", "Um boi adulto em repouso"], answer: 0, why: "Os animais jovens que crescem depressa, as poedeiras e os animais em lactação precisam de mais proteína." },
          { objective: "O2", q: "Qual destes é sobretudo um alimento energético?", options: ["Farinha de peixe", "Grão de milho", "Bagaço de soja", "Desmódio"], answer: 1, why: "O grão de milho é sobretudo energia, com só cerca de 8 a 10 por cento de proteína." },
          { objective: "O3", q: "Que par pode o quadrado de Pearson equilibrar até um objetivo de 16 por cento de proteína?", options: ["Milho (9 por cento) e farelo de milho (10 por cento)", "Farinha de peixe (60 por cento) e bagaço de soja (44 por cento)", "Dois alimentos ambos acima de 30 por cento", "Milho (9 por cento) e bagaço de soja (44 por cento)"], answer: 3, why: "O objetivo tem de ficar entre os valores dos dois alimentos: 16 fica entre 9 e 44." },
          { objective: "O3", q: "Depois do quadrado, 26 partes de milho e 9 partes de bagaço de soja. Quantos kg de bagaço de soja em 100 kg?", options: ["9 kg", "35 kg", "Cerca de 25,7 kg", "Cerca de 74,3 kg"], answer: 2, why: "9 / 35 x 100 = 25,7 kg de bagaço de soja em 100 kg de mistura." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conservar, planear e calcular o custo da ração",
      lessons: [
        {
          title: "Silagem, feno e armazenamento seguro da ração",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fazer silagem ou feno e guardar a ração para que se mantenha seca e sem bolor.",
          text: [
            "Na época das chuvas há capim a mais; na época seca há pouco, e o leite e o peso baixam. Conservar forragem equilibra isto. A silagem é forragem verde (milho, mapira ou capim-elefante) guardada sem ar, para que fermente e fique húmida e boa para comer durante meses. O feno é capim ou leguminosa cortado e seco ao sol até estar seco o suficiente para guardar sem apodrecer.",
            "Silagem, à maneira da FAO: cortar miúdo, encher depressa, calcar bem e fechar sem ar. Corte o milho ou a mapira quando o grão está mole, entre leitoso e pastoso. Corte a forragem em pedaços curtos, encha depressa a cova, o tubo de plástico, o saco ou o bidão limpo, tire todas as bolsas de ar pisando ou calcando, e depois feche com plástico e ponha peso por cima. O capim-elefante e outros capins têm pouco açúcar; os criadores juntam muitas vezes melaço para os ajudar a fermentar (pergunte ao seu extensionista quanto). Deixe fechado durante algumas semanas e, depois de abrir, tire o que precisa cada dia e volte a fechar. A boa silagem cheira a agridoce; deite fora as partes com bolor ou podres.",
            "O bolor na ração pode produzir micotoxinas, como a aflatoxina. São venenos invisíveis que reduzem o crescimento, o leite e a fertilidade, adoecem os animais e podem passar para o leite, os ovos e a carne. Estudos do ILRI (um instituto internacional de investigação pecuária) no Quénia encontraram aflatoxina em muitas rações para vacas leiteiras. Previna: compre ração a moinhos de confiança, confirme que está seca, solta e com cheiro fresco, guarde os sacos em estrados, longe do chão e das paredes, debaixo de um telhado sem goteiras, use primeiro a ração mais antiga e nunca dê ração com bolor, nem sequer a outros animais."
          ],
          steps: ["Silagem: colha na fase certa e corte miúdo.", "Encha a cova, o tubo, o saco ou o bidão depressa e calque bem para tirar o ar.", "Feche sem ar com plástico e ponha peso por cima; deixe fechado algumas semanas.", "Feno: corte, seque ao sol, vire muitas vezes, guarde seco debaixo de um telhado.", "Armazém: estrados longe do chão, longe das paredes, telhado sem goteiras.", "Use primeiro a ração mais antiga; deite fora o que tiver bolor, estiver empedrado ou cheirar mal."],
          words: [["Silagem", "forragem verde guardada sem ar, para que fermente e fique boa para dar aos animais durante meses."], ["Feno", "capim ou leguminosa cortado e seco ao sol para guardar."], ["Micotoxina", "um veneno produzido pelo bolor na ração, como a aflatoxina; não se vê."], ["Estrado", "uma plataforma de madeira ou de plástico que mantém os sacos acima do chão."]],
          slides: [
            { title: "Porquê conservar forragem", bullets: ["Capim a mais nas chuvas, pouco na época seca", "A silagem e o feno mantêm o leite e o crescimento estáveis"] },
            { title: "Silagem em quatro passos (FAO)", bullets: ["Cortar miúdo", "Encher depressa", "Calcar bem para tirar o ar", "Fechar sem ar e pôr peso por cima"] },
            { title: "Feno", bullets: ["Corte capim ou leguminosa", "Seque ao sol, virando muitas vezes", "Guarde seco, debaixo de um telhado, longe do chão"] },
            { title: "Travar o bolor e as micotoxinas", bullets: ["Compre a moinhos de confiança; confirme que está seca e cheira a fresco", "Estrados, longe das paredes, telhado sem goteiras", "A mais antiga primeiro; nunca dê ração com bolor"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Vá ao lugar onde guarda a ração. Escreva três coisas que podem deixar entrar humidade ou bolor e como vai corrigir cada uma. Depois planeie uma porção de silagem ou de feno: que forragem, quando a cortar e onde a vai guardar.",
          youCanNow: "fazer silagem ou feno e guardar a ração de forma a manter fora a humidade, o bolor e as micotoxinas.",
          quickCheck: [
            { objective: "O4", q: "Qual é a coisa mais importante quando se faz silagem?", options: ["Deixá-la aberta para respirar", "Tirar o ar e fechá-la sem ar", "Juntar água todos os dias", "Guardá-la ao sol"], answer: 1, why: "A silagem só se conserva quando o ar é tirado e não volta a entrar, para que possa fermentar." },
            { objective: "O4", q: "Um saco de ração para vacas leiteiras tem torrões cinzentos e empedrados e cheira a mofo. O que faz?", options: ["Dá-o às vacas secas", "Mistura-o com ração fresca", "Dá-o às galinhas", "Não o dá a nenhum animal"], answer: 3, why: "O bolor pode trazer micotoxinas que fazem mal a todos os animais e podem passar para o leite e os ovos." }
          ]
        },
        {
          title: "Alimentar por fase: um plano de alimentação em três partes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escrever um plano de alimentação para cada fase de um tipo de animal.",
          text: [
            "Os animais precisam de rações diferentes em fases diferentes. Frangos: inicial e depois de acabamento (alguns criadores juntam uma de crescimento pelo meio). Poedeiras: ração de pintos, depois de recria e depois de postura a partir do início da postura, com cálcio extra para as cascas dos ovos. Porcos: ração de leitões ou de desmame, de crescimento, de acabamento, e depois rações especiais para porcas prenhes e a amamentar. Gado leiteiro: vitela, novilha, vaca seca e lactação, com o concentrado ajustado ao leite que cada vaca dá. Mude de uma ração para a seguinte ao longo de alguns dias, não de um dia para o outro.",
            "Use um plano simples em três partes para cada fase. Parte 1, o alimento de base: aquilo de que é feita a maior parte da dieta. Para os bovinos e as cabras é a forragem (pastagem, capim-elefante, feno, silagem, palha); para os porcos e as aves são os grãos energéticos e os farelos da ração. Parte 2, o concentrado: a parte rica em proteína (bagaços de oleaginosas, farinha de peixe, uma ração comprada para vacas leiteiras ou uma ração equilibrada) que completa o que falta no alimento de base. Parte 3, os suplementos: sal, minerais, vitaminas e cálcio, usados como diz o rótulo. E água limpa o tempo todo.",
            "Alimentar por fase poupa dinheiro: não paga ração inicial rica em proteína para um animal que já não precisa dela. Pese ou estime quanto come cada fase e observe os animais: se estão magros, põem menos ovos ou dão menos leite, peça ao seu extensionista para rever o plano. O rótulo do saco ou o guia da incubadora ou da raça diz quando mudar de ração nas raças comerciais."
          ],
          steps: ["Escolha um tipo de animal.", "Liste as suas fases, de jovem até à venda, à postura ou ao leite.", "Para cada fase, escreva o alimento de base.", "Junte o concentrado que o completa.", "Junte os suplementos e a água.", "Escreva quando mudar para a fase seguinte, e mude ao longo de alguns dias."],
          words: [["Alimento de base", "a parte principal da dieta: forragem para os ruminantes, grãos energéticos para os porcos e as aves."], ["Início da postura", "a idade em que as frangas estão quase a começar a pôr ovos."], ["Lactação", "o tempo em que uma fêmea está a produzir leite."]],
          slides: [
            { title: "A ração muda com a fase", bullets: ["Frangos: inicial, depois acabamento", "Poedeiras: pintos, recria, depois postura", "Porcos: desmame, crescimento, acabamento, porca; leite: pela produção"] },
            { title: "O plano em três partes", bullets: ["1. Base: forragem, ou grãos e farelos", "2. Concentrado: o complemento de proteína", "3. Suplementos: sal, minerais, vitaminas, cálcio"] },
            { title: "Água, e mudar devagar", bullets: ["Água limpa o tempo todo", "Mude de ração ao longo de alguns dias"] },
            { title: "Porque poupa dinheiro", bullets: ["Nada de ração inicial cara para animais que não precisam dela", "Observe a condição do corpo, os ovos e o leite"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Escolha um tipo de animal. Faça uma tabela com uma linha por fase e quatro colunas: alimento de base, concentrado, suplementos e quando mudar para a fase seguinte.",
          youCanNow: "escrever um plano de alimentação por fases com alimento de base, concentrado e suplementos para cada fase.",
          quickCheck: [
            { objective: "O5", q: "Num plano de alimentação em três partes para uma vaca leiteira, qual é o alimento de base?", options: ["Forragem como capim-elefante, feno ou silagem", "A pré-mistura de minerais", "A ração para vacas leiteiras", "O sal"], answer: 0, why: "Nos ruminantes, a forragem é a maior parte da dieta; o concentrado e os suplementos completam-na." },
            { objective: "O5", q: "As suas frangas estão perto do início da postura. Para que ração passam?", options: ["Ração inicial de frangos", "Ração de pintos", "Ração de postura, mudando ao longo de alguns dias", "Só grão de milho"], answer: 2, why: "A ração de postura dá o cálcio extra de que as cascas dos ovos precisam; mude devagar, ao longo de alguns dias." }
          ]
        },
        {
          title: "Calcular o custo da ração por kg de ganho ou litro de leite",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calcular o custo da sua ração por kg e o custo da ração por kg de ganho, tabuleiro de ovos ou litro de leite.",
          text: [
            "Passo 1, custo por kg de mistura. Multiplique os kg de cada ingrediente pelo seu preço, some tudo e divida pelo total de kg. Exemplo com preços inventados em xelins do Quénia: 74,3 kg de milho a KES 40 = 2.972; 25,7 kg de bagaço de soja a KES 90 = 2.313. Total KES 5.285 por 100 kg, portanto KES 52,85 por kg. Junte a moagem, o transporte e a pré-mistura se pagar por eles.",
            "Passo 2, ração por unidade de produto. Para a carne, registe a ração comida e o peso ganho: se 10 porcos comem 900 kg de ração de crescimento e ganham 300 kg, cada kg de ganho precisou de 3 kg de ração (o índice de conversão alimentar, FCR). Custo da ração por kg de ganho = 3 x KES 52,85 = KES 158,55. Para os ovos: ração comida pelo bando numa semana x preço por kg, dividido pelos tabuleiros recolhidos. Para o leite: o custo da ração da vaca num dia (forragem mais ração para vacas leiteiras) dividido pelos litros que ela dá nesse dia.",
            "Use os números para decidir. Compare o custo da ração por kg de ganho ou por litro com o seu preço de venda. Experimente um ingrediente mais barato, como mais leguminosas forrageiras ou farelo local, mas confirme que continua a cumprir o objetivo e não reduz o crescimento nem o leite. Trabalhe na sua própria moeda, seja NGN, GHS ou XOF: o método é o mesmo. Os preços mudam, por isso atualize a folha sempre que comprar."
          ],
          steps: ["Liste cada ingrediente, os seus kg por 100 kg e o seu preço por kg.", "Multiplique os kg pelo preço de cada ingrediente e some tudo.", "Junte a moagem, o transporte e a pré-mistura; divida pelo total de kg.", "Registe a ração comida e o peso ganho, os ovos ou o leite produzidos.", "Custo da ração por kg de ganho = FCR x custo por kg de ração.", "Custo da ração por litro ou tabuleiro = custo da ração do dia ou da semana / litros ou tabuleiros."],
          words: [["Índice de conversão alimentar (FCR)", "os kg de ração precisos para 1 kg de ganho de peso; quanto mais baixo, melhor."], ["Custo por kg de ganho", "o dinheiro gasto em ração por cada kg que o animal cresce."], ["Tabuleiro", "um tabuleiro de 30 ovos, a unidade habitual para vender ovos."]],
          slides: [
            { title: "Passo 1: custo por kg de mistura", bullets: ["kg x preço de cada ingrediente, depois some", "Exemplo: KES 5.285 por 100 kg = KES 52,85 por kg", "Junte a moagem, o transporte e a pré-mistura"] },
            { title: "Passo 2: ração por kg de ganho", bullets: ["900 kg de ração / 300 kg de ganho = FCR de 3", "3 x KES 52,85 = KES 158,55 por kg de ganho"] },
            { title: "Ovos e leite", bullets: ["Ovos: custo da ração da semana / tabuleiros recolhidos", "Leite: custo da ração do dia / litros desse dia"] },
            { title: "Use para decidir", bullets: ["Compare com o seu preço de venda", "Experimente ingredientes locais mais baratos; confirme o objetivo", "Atualize a cada compra; os preços são exemplos"] }
          ],
          tryIt: "Tarefa final: prepare uma ração com custo calculado para um tipo de animal. Escreva o plano em três partes, equilibre o concentrado com o quadrado de Pearson, escreva os kg por 100 kg, calcule o custo por kg com os seus preços locais e calcule o custo da ração por kg de ganho, por tabuleiro de ovos ou por litro de leite.",
          youCanNow: "calcular o custo de uma ração por kg e o custo da sua ração por kg de ganho, tabuleiro de ovos ou litro de leite.",
          quickCheck: [
            { objective: "O6", q: "100 kg de mistura custam XOF 20.000 no total. Qual é o custo por kg?", options: ["XOF 2.000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20.000 / 100 kg = XOF 200 por kg." },
            { objective: "O6", q: "Os frangos comeram 400 kg de ração e ganharam 250 kg. Qual é o FCR?", options: ["1,6", "0,6", "2,5", "4,0"], answer: 0, why: "FCR = ração comida / peso ganho = 400 / 250 = 1,6." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Conservar, planear e calcular o custo da ração",
        questions: [
          { objective: "O4", q: "Porque é que os criadores juntam melaço quando fazem silagem de capim-elefante?", options: ["O capim-elefante tem pouco açúcar e o melaço ajuda-o a fermentar", "Para ficar mais doce para as crianças", "Para não deixar entrar a chuva", "Para substituir a cobertura de plástico"], answer: 0, why: "Os capins com pouco açúcar fermentam mal; o melaço dá o açúcar de que a fermentação precisa." },
          { objective: "O4", q: "Que armazém protege melhor a ração do bolor?", options: ["Sacos no chão nu encostados a uma parede", "Sacos lá fora debaixo de uma árvore", "Sacos em estrados, longe das paredes, debaixo de um telhado sem goteiras", "Montes abertos dentro do curral"], answer: 2, why: "Manter os sacos secos e longe do chão e das paredes trava a humidade, o bolor e as micotoxinas." },
          { objective: "O5", q: "Quais são as três partes do plano de alimentação deste curso?", options: ["Ração da manhã, do meio-dia e da noite", "Alimento de base ou forragem, concentrado e suplementos", "Só capim, água e sal", "Só inicial, crescimento e acabamento"], answer: 1, why: "O plano é alimento de base, concentrado e suplementos, mais a água, para cada fase." },
          { objective: "O6", q: "A ração custa KES 50 por kg e o FCR é 3. Qual é o custo da ração por kg de ganho?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Custo da ração por kg de ganho = FCR x preço por kg = 3 x 50 = KES 150." },
          { objective: "O6", q: "A ração de uma vaca custa NGN 3.000 por dia e ela dá 10 litros. Qual é o custo da ração por litro?", options: ["NGN 30", "NGN 300", "NGN 3.000", "NGN 30.000"], answer: 1, why: "3.000 / 10 litros = NGN 300 por litro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Nutrição Animal e Formulação de Rações com Ingredientes Locais",
    questions: [
      { objective: "O1", q: "Quais são as quatro necessidades principais que um animal tira da ração e da água?", options: ["Energia, proteína, minerais e vitaminas, e água", "Capim, sal, açúcar e óleo", "Milho, feijão, arroz e leite", "Calor, luz, ar e solo"], answer: 0, why: "Energia, proteína, minerais e vitaminas, e água são as quatro necessidades." },
      { objective: "O1", q: "Que alimento fornece sobretudo cálcio para as cascas dos ovos?", options: ["Farelo de milho", "Capim-elefante", "Calcário ou conchas", "Melaço"], answer: 2, why: "O calcário e as conchas moídas são fontes de cálcio para as galinhas poedeiras." },
      { objective: "O1", q: "Que animais precisam de volumosos como base da dieta?", options: ["Frangos", "Poedeiras", "Leitões desmamados", "Bovinos, cabras e ovelhas"], answer: 3, why: "Os ruminantes digerem volumosos; eles são a base da sua dieta." },
      { objective: "O2", q: "Quanta proteína tem, mais ou menos, o grão de milho?", options: ["Cerca de 8 a 10 por cento", "Cerca de 44 por cento", "Cerca de 60 por cento", "Nenhuma"], answer: 0, why: "A Feedipedia dá ao milho cerca de 8 a 10,5 por cento de proteína, por isso é sobretudo um alimento energético." },
      { objective: "O2", q: "Qual destes é um alimento proteico?", options: ["Mandioca seca em pedaços", "Farelo de trigo", "Farinha de peixe", "Palha de milho"], answer: 2, why: "A farinha de peixe é rica em proteína; os outros são sobretudo energia ou volumosos." },
      { objective: "O2", q: "Qual é uma vantagem do sistema push-pull do icipe para um criador de gado leiteiro?", options: ["Substitui a água", "O desmódio e o capim-elefante ou a braquiária dão forragem de boa qualidade", "Acaba com a necessidade de minerais", "Transforma os bovinos em ruminantes"], answer: 1, why: "O push-pull protege o milho e as plantas que crescem com ele são forragem de boa qualidade." },
      { objective: "O2", q: "O que deve confirmar quando compra farinha de peixe?", options: ["Que vem de uma fonte de confiança e não está misturada com areia ou sal", "Que é a mais barata", "Que está molhada", "Que cheira a bolor"], answer: 0, why: "A qualidade da farinha de peixe varia e pode ser adulterada, por isso compre a fontes de confiança." },
      { objective: "O3", q: "Quantos nutrientes de cada vez equilibra o quadrado de Pearson?", options: ["Todos", "Três", "Dois", "Um"], answer: 3, why: "Equilibra um nutriente, normalmente a proteína, entre dois alimentos." },
      { objective: "O3", q: "Milho (9 por cento) e bagaço de soja (44 por cento), objetivo 18. Quantas partes de bagaço de soja?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = 9 partes de bagaço de soja." },
      { objective: "O3", q: "Porque não pode usar milho (9 por cento) e farelo (10 por cento) para chegar a 18 por cento de proteína?", options: ["O objetivo tem de ficar entre os valores dos dois alimentos", "O farelo é barato demais", "O quadrado só funciona para bovinos", "O milho não tem proteína"], answer: 0, why: "18 está acima dos dois alimentos, por isso nenhuma mistura deles consegue chegar lá." },
      { objective: "O3", q: "Depois do quadrado, como verifica a sua mistura?", options: ["Pergunta a um vizinho", "Cheira-a", "kg x percentagem de proteína de cada alimento devem somar o objetivo", "Pesa os animais no mesmo dia"], answer: 2, why: "Somar a proteína de cada ingrediente confirma que a mistura chega ao objetivo." },
      { objective: "O4", q: "Quais são os quatro passos da silagem que a FAO ensina?", options: ["Cortar, lavar, secar, queimar", "Cortar miúdo, encher depressa, calcar, fechar", "Semear, regar, sachar, vender", "Demolhar, ferver, arrefecer, ensacar"], answer: 1, why: "Cortar miúdo, encher depressa, calcar e fechar dão uma boa silagem." },
      { objective: "O4", q: "O que é uma micotoxina?", options: ["Uma vitamina da ração", "Um tipo de capim", "Um suplemento de proteína", "Um veneno invisível produzido pelo bolor na ração"], answer: 3, why: "O bolor pode produzir micotoxinas como a aflatoxina, que fazem mal aos animais e podem passar para o leite." },
      { objective: "O4", q: "Que regra ajuda a manter segura a ração guardada?", options: ["Usar primeiro a ração mais antiga", "Guardar os sacos no chão junto à parede", "Guardar a ração dentro do curral", "Misturar ração com bolor com ração fresca"], answer: 0, why: "Primeiro a entrar, primeiro a sair: assim a ração não fica parada até se estragar." },
      { objective: "O5", q: "Porquê alimentar por fase?", options: ["Faz os animais comer mais", "Cada fase tem necessidades diferentes, por isso não paga nutrientes de que eles não precisam", "As empresas de ração exigem", "Acaba com a necessidade de água"], answer: 1, why: "Ajustar a ração à fase cobre as necessidades e poupa dinheiro." },
      { objective: "O5", q: "Como deve mudar de uma ração para a seguinte?", options: ["De um dia para o outro", "Só quando os animais estão doentes", "Ao longo de alguns dias", "Nunca mudar de ração"], answer: 2, why: "Mudanças graduais evitam perturbar a digestão e o apetite do animal." },
      { objective: "O5", q: "Para os porcos e as aves, qual é a parte de base da dieta?", options: ["Capim-elefante", "Sal", "Farinha de peixe", "Os grãos energéticos e os farelos da ração"], answer: 3, why: "Os porcos e as aves não conseguem digerir muitos volumosos, por isso os grãos e os farelos são a sua base." },
      { objective: "O6", q: "O que quer dizer um índice de conversão alimentar de 2?", options: ["2 kg de ração por cada 1 kg de ganho de peso", "2 refeições por dia", "2 animais por comedouro", "2 por cento de proteína"], answer: 0, why: "O FCR são os kg de ração precisos para 1 kg de ganho." },
      { objective: "O6", q: "50 kg de milho a GHS 4 e 50 kg de farelo a GHS 2. Custo por kg da mistura?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 por 100 kg, portanto GHS 3 por kg." },
      { objective: "O6", q: "Um bando de poedeiras come ração que custa KES 7.000 por semana e recolhe 70 tabuleiros. Qual é o custo da ração por tabuleiro?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7.000 / 70 tabuleiros = KES 100 de ração por tabuleiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte da ração e verifique outra vez.",
    criteria: [
      { name: "Tipo, fase e plano em três partes", objective: "O5", notYet: "Não diz o tipo nem a fase, ou falta o alimento de base, o concentrado ou os suplementos.", meets: "Diz o tipo e a fase e dá o alimento de base, o concentrado, os suplementos e a água.", exceeds: "Também mostra a fase seguinte e quando e como mudar de ração." },
      { name: "Ingredientes bem separados e adequados", objective: "O2", notYet: "Os ingredientes estão mal separados ou não são seguros (por exemplo com bolor, ou bagaço de algodão sem limite para aves).", meets: "Usa ingredientes locais bem separados em energéticos, proteicos, volumosos e suplementos.", exceeds: "Usa uma leguminosa ou um farelo local mais barato e explica como mantém o objetivo." },
      { name: "Quadrado de Pearson", objective: "O3", notYet: "Não mostra as contas, ou o objetivo não fica entre os dois alimentos.", meets: "Quadrado desenhado, partes e kg por 100 kg certos, e a verificação dá o objetivo com menos de 0,5 pontos de diferença.", exceeds: "Reserva primeiro os itens fixos, como a pré-mistura, e equilibra o resto." },
      { name: "Cálculo do custo", objective: "O6", notYet: "Falta o custo por kg ou as contas estão erradas.", meets: "Custo certo por kg de mistura e custo da ração por kg de ganho, tabuleiro de ovos ou litro de leite, na moeda local.", exceeds: "Compara com o preço de venda e mostra uma forma de baixar o custo." },
      { name: "Qualidade e armazenamento da ração", objective: "O4", notYet: "Não diz nada sobre onde a ração é guardada nem como se evita o bolor.", meets: "Diz onde a ração é guardada e como se mantém seca e sem bolor, a mais antiga primeiro.", exceeds: "Inclui um plano de silagem ou de feno para a época seca." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que misturam ou ajustam pelo menos uma ração com o quadrado de Pearson em 30 dias (inquérito de seguimento)",
      "Alunos que fazem silagem ou feno antes da próxima época seca",
      "Mudança no custo da ração por kg de ganho, por tabuleiro de ovos ou por litro de leite indicada pelos alunos depois de três meses",
      "Menos casos de ração com bolor e de doenças ligadas à ração nas manadas e nos bandos dos alunos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e a calculadora do telefone; uma folha de cálculo no telefone é opcional",
      "Preços locais de 8 a 10 alimentos, e rótulos ou valores do fornecedor para a sua proteína",
      "Para uma demonstração em grupo: forragem cortada, um saco ou tubo de plástico forte e uma balança",
      "Cerca de 70 a 80 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da sessão, recolha os preços locais das rações e os valores de proteína (rótulos dos fornecedores, laboratório de rações ou serviço de extensão) para os alunos praticarem com números reais.",
      "Façam juntos o quadrado de Pearson num quadro ou num bloco grande com um exemplo local, e depois deixe os pares fazerem um segundo.",
      "Faça uma demonstração de silagem em saco se a época o permitir, e abram-no em grupo algumas semanas depois.",
      "Não dê doses de rações medicamentosas, aditivos ou medicamentos; envie essas perguntas para o veterinário e o rótulo.",
      "Avalie a ração com custo calculado com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
