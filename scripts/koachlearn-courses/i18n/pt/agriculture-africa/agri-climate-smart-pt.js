"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-climate-smart.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_CSA = { name: "FAO: Manual de Referência da Agricultura Climaticamente Inteligente (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Departamento Meteorológico do Quénia (KMD): previsões sazonais e boletins agrometeorológicos", url: "https://meteo.go.ke" };
const NIMET = { name: "Agência Meteorológica da Nigéria (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Milho climaticamente inteligente (tolerante à seca)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: A tecnologia push-pull trava a lagarta-do-funil-do-milho", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS Observação da Terra (indicadores de seca e de vegetação)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-pt",
  lang: "pt",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Agricultura Climaticamente Inteligente",
  skills: "Explicar a agricultura climaticamente inteligente, Ler as previsões sazonais oficiais, Mapear os riscos climáticos da sua machamba, Escolher práticas para o solo e a água, Escolher culturas e variedades resistentes, Usar árvores, gado e seguros para repartir o risco",
  outcome: "escrever e começar um plano climaticamente inteligente para a sua própria machamba: os riscos climáticos que ela enfrenta ao longo do ano, o que diz a previsão sazonal oficial e as práticas de solo, água, culturas, árvores, gado e seguros que vai usar nesta época.",
  about: [
    "Este curso é para pequenos agricultores, jovens agricultores, extensionistas e líderes de grupos de agricultores no Quénia, na Nigéria e em toda a África que estão a ver períodos secos mais longos, chuvas mais fortes, mais calor e novas pragas, e querem maneiras práticas de manter as colheitas e os rendimentos estáveis.",
    "O Capítulo 1 ajuda-o a compreender o risco climático na sua própria machamba: o que significa agricultura climaticamente inteligente, como ler a previsão sazonal oficial do serviço meteorológico do seu país e como desenhar um calendário simples de riscos climáticos. O Capítulo 2 é sobre práticas: manter o solo e a água na machamba, escolher culturas e variedades que aguentam e usar árvores, gado e seguros para repartir o risco.",
    "Cada machamba é diferente. Use este curso com os conselhos do seu extensionista, da loja de insumos agrícolas ou de um instituto de investigação, e experimente as práticas novas primeiro numa pequena parcela. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria machamba. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano climaticamente inteligente de uma página para a sua machamba (ou para uma machamba de exemplo, como 2 acres de milho e feijão em Machakos, ou 3 acres de mapira e feijão-nhemba em Kano): um calendário de riscos climáticos mês a mês, o que diz a previsão oficial desta época e a data em que a leu, e pelo menos cinco práticas que vai usar (pelo menos uma de cada para solo e água, culturas e variedades, e repartir o risco), com quando vai começar cada uma e como vai saber se funcionou.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores, jovens agricultores, extensionistas e líderes de grupos de agricultores no Quénia, na Nigéria e em toda a África que enfrentam períodos secos mais longos, chuvas mais fortes, mais calor e novas pragas.",
    startingPoint: "Conhecem bem a sua terra, as suas culturas e as épocas, e muitos já usam algumas práticas climaticamente inteligentes sem lhes dar esse nome. Poucos leem a previsão sazonal oficial, desenham um calendário de riscos climáticos ou planeiam práticas para repartir o risco ao longo de uma época.",
    gap: "As chuvas que mudam e as novas pragas tornam as colheitas e os rendimentos menos estáveis. Os agricultores precisam de ler as previsões oficiais, ver os pontos de perigo do seu ano e escolher práticas de solo, água, culturas, árvores, gado e seguros que sirvam para a sua machamba, experimentando-as antes de as usar em todo o lado.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos não têm o português como primeira língua",
      "Aparelhos: um telefone simples, um rádio ou um boletim de extensão; um smartphone ajuda, mas não é obrigatório",
      "Custo e mão de obra: começar com práticas de baixo custo experimentadas numa pequena área",
      "As previsões, as variedades, os seguros e as entidades reguladoras mudam de país para país: os alunos consultam o KMD, a NiMet ou o serviço do seu país, os extensionistas e os vendedores licenciados",
      "Tempo: os alunos encaixam as lições no trabalho da machamba e nas épocas"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as práticas usadas na sua machamba ou na sua aldeia", action: "explicar os três objetivos da agricultura climaticamente inteligente e avaliar se cada prática é climaticamente inteligente", standard: "dizendo que objetivo cada prática ajuda" },
    { id: "O2", condition: "Antes de uma época das chuvas", action: "encontrar a previsão sazonal do serviço meteorológico do seu país e escrever duas mudanças que ela traz ao seu plano", standard: "anotando o que diz, a data em que a leu e que ela dá probabilidades, não promessas" },
    { id: "O3", condition: "Para a sua própria machamba ou uma machamba de exemplo", action: "desenhar um calendário de riscos climáticos mês a mês e marcar com um círculo os pontos de perigo", standard: "com as épocas, os trabalhos da machamba, os riscos e pelo menos dois pontos de perigo marcados" },
    { id: "O4", condition: "Conhecendo a inclinação e o caminho da água na sua machamba", action: "escolher práticas de solo e água que sirvam e planear uma pequena experiência", standard: "comparando a área experimentada com a sua maneira habitual" },
    { id: "O5", condition: "Conhecendo a sua cultura principal e os riscos locais", action: "escolher variedades certificadas tolerantes à seca ou precoces, uma cultura resistente à seca e uma estratégia de sementeira que reduzam o risco", standard: "comprando semente só a vendedores registados" },
    { id: "O6", condition: "Além da sua cultura principal", action: "planear pelo menos uma maneira de repartir o risco com árvores, alimento e água para o gado, ou seguros", standard: "verificando o que faz o seguro pagar e que a seguradora é licenciada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Compreender o risco climático na sua machamba",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que significa agricultura climaticamente inteligente",
          minutes: 5,
          goal: "Explicar os três objetivos da agricultura climaticamente inteligente e avaliar se uma prática é climaticamente inteligente.",
          text: [
            "A agricultura climaticamente inteligente (ACI) é uma maneira de escolher práticas agrícolas tendo em conta as mudanças climáticas. A FAO (a organização das Nações Unidas para a alimentação e a agricultura) descreve três objetivos: aumentar a produtividade e os rendimentos de forma sustentável; ajudar as machambas e as famílias a adaptar-se e a ganhar resiliência aos choques climáticos; e reduzir ou retirar as emissões de gases com efeito de estufa sempre que possível.",
            "A FAO sublinha que uma prática não precisa de fazer as três coisas. Para a maioria dos pequenos agricultores, a comida e o rendimento vêm primeiro; menos emissões são um bónus. Uma prática é climaticamente inteligente se serve para a sua machamba e a torna mais produtiva e mais resiliente.",
            "Exemplos que os agricultores em África já usam: cobertura morta e mobilização mínima do solo para o manter húmido, covas de plantação e reservatórios de água, variedades tolerantes à seca e precoces, consociação do milho com feijão ou feijão-nhemba, push-pull contra a broca do caule e a lagarta-do-funil-do-milho, árvores na machamba, forragem melhorada e seguros de culturas ou de gado."
          ],
          words: [["Agricultura climaticamente inteligente (ACI)", "agricultura que aumenta a produtividade, ajuda as machambas a adaptar-se às mudanças climáticas e corta as emissões sempre que possível."], ["Resiliência", "a capacidade de uma machamba e de uma família de aguentar um choque, como uma seca, e recuperar depressa."], ["Adaptação", "mudar a maneira de cultivar para aguentar um clima que está a mudar."]],
          slides: [
            { title: "Três objetivos (FAO)", bullets: ["Aumentar a produtividade e os rendimentos", "Adaptar-se e ganhar resiliência", "Reduzir as emissões sempre que possível"] },
            { title: "Não os três ao mesmo tempo", bullets: ["A comida e o rendimento vêm primeiro", "Menos emissões são um bónus", "Serve para a sua machamba + mais resiliente = climaticamente inteligente"] },
            { title: "Exemplos em África", bullets: ["Cobertura morta, mobilização mínima, covas de plantação, reservatórios", "Variedades tolerantes à seca, consociação, push-pull", "Árvores na machamba, forragem, seguros"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Escreva três práticas já usadas na sua machamba ou na sua aldeia. Para cada uma, escreva que objetivo da ACI ela ajuda (produtividade, resiliência, emissões).",
          youCanNow: "explicar os três objetivos da agricultura climaticamente inteligente e avaliar se uma prática é climaticamente inteligente.",
          quickCheck: [
            { objective: "O1", q: "Qual é uma prática climaticamente inteligente que os agricultores em África já usam?", options: ["Cobertura morta para manter o solo húmido", "Queimar todos os restos das culturas", "Plantar só uma cultura todos os anos", "Lavrar o campo muitas vezes"], answer: 0, why: "A cobertura morta mantém o solo húmido e coberto, ajudando a produtividade e a resiliência." },
            { objective: "O1", q: "Uma prática aumenta as suas colheitas e ajuda-o a aguentar os períodos secos, mas não corta emissões. É climaticamente inteligente?", options: ["Não; tem de fazer as três coisas", "Sim, se serve para a sua machamba e melhora a produtividade e a resiliência", "Só se o governo a aprovar", "Só se for nova"], answer: 1, why: "A FAO diz que uma prática não precisa de cumprir os três objetivos; para os pequenos agricultores, a comida e o rendimento vêm primeiro." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ler a previsão sazonal oficial",
          minutes: 5,
          goal: "Encontrar e usar a previsão sazonal do serviço meteorológico do seu país para planear a época.",
          text: [
            "Antes de cada época das chuvas, os serviços meteorológicos nacionais publicam uma previsão sazonal: se se esperam chuvas acima do normal, perto do normal ou abaixo do normal, e quando podem começar e acabar. No Quénia, o Departamento Meteorológico do Quénia (KMD) publica previsões sazonais e boletins agrometeorológicos. Na Nigéria, a Agência Meteorológica da Nigéria (NiMet) publica previsões climáticas sazonais. Outros países têm os seus próprios serviços; muitas previsões também são partilhadas na rádio e pelos extensionistas.",
            "Uma previsão sazonal dá probabilidades, não promessas. \"Abaixo do normal\" quer dizer uma probabilidade maior de chover menos do que o costume na sua zona, não que vai ser seco com certeza. Use-a para ajustar, não para apostar tudo: por exemplo, escolha uma variedade de ciclo mais curto, semeie na data certa, planeie a captação de água ou reduza a área de uma cultura que precisa de muita água.",
            "Use as previsões de curto prazo (os próximos dias) para as decisões do dia a dia, como quando semear depois de as chuvas começarem, quando pulverizar ou fazer a adubação de cobertura, e quando colher e secar."
          ],
          steps: ["Encontre o site, o programa de rádio ou o boletim de extensão do serviço meteorológico do seu país.", "Leia a previsão sazonal para o seu distrito, condado ou estado.", "Anote: acima, perto ou abaixo do normal; início e fim esperados das chuvas.", "Escreva duas mudanças que vai fazer por causa dela.", "Consulte as previsões de curto prazo para os dias de sementeira, adubação de cobertura e colheita."],
          words: [["Previsão sazonal", "uma perspetiva da chuva e da temperatura para a próxima época, dada em probabilidades."], ["Início das chuvas", "o começo da época das chuvas."], ["Boletim agrometeorológico", "um relatório do tempo escrito para agricultores, que liga o tempo às culturas."]],
          slides: [
            { title: "Previsões sazonais oficiais", bullets: ["Quénia: Departamento Meteorológico do Quénia (KMD)", "Nigéria: NiMet", "Também na rádio e pelos extensionistas"] },
            { title: "Probabilidades, não promessas", bullets: ["Acima, perto ou abaixo do normal", "Início e fim esperados das chuvas", "Ajuste; não aposte tudo"] },
            { title: "Use-a", bullets: ["Variedade de ciclo mais curto se as chuvas forem fracas", "Planeie a captação de água", "Previsões de curto prazo para os trabalhos do dia a dia"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Encontre a previsão sazonal mais recente para a sua zona no KMD, na NiMet ou no serviço meteorológico do seu país. Escreva o que diz, a data em que a leu e duas mudanças que vai fazer ao seu plano.",
          youCanNow: "encontrar a previsão sazonal oficial e usá-la para ajustar o plano da sua época.",
          quickCheck: [
            { objective: "O2", q: "O que lhe diz uma previsão sazonal?", options: ["A chuva exata de cada dia", "O preço do milho", "Se é provável que as chuvas fiquem acima, perto ou abaixo do normal", "Que semente comprar"], answer: 2, why: "Uma previsão sazonal dá as probabilidades de chuva acima, perto ou abaixo do normal e quando as chuvas podem começar e acabar." },
            { objective: "O2", q: "A previsão diz que as chuvas podem acabar cedo. Que mudança faz sentido?", options: ["Semear uma variedade de ciclo longo", "Semear muito mais tarde do que o costume", "Não fazer nada", "Escolher uma variedade de ciclo mais curto"], answer: 3, why: "Uma variedade de ciclo mais curto pode terminar antes de as chuvas acabarem." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Desenhar o calendário de riscos climáticos da sua machamba",
          minutes: 5,
          goal: "Desenhar um calendário mês a mês dos riscos climáticos que a sua machamba enfrenta.",
          text: [
            "Um calendário de riscos climáticos põe as suas culturas e os seus animais ao lado dos riscos de cada mês. Desenhe 12 colunas para os meses. Na primeira linha, escreva as suas épocas (chuvas longas, chuvas curtas, época seca, ou época das chuvas e época seca em grande parte da Nigéria). Por baixo, escreva o que faz em cada mês: preparação da terra, sementeira, sacha, adubação de cobertura, colheita, secagem, venda, e quando os animais precisam de mais alimento e água.",
            "Depois marque os riscos: início tardio ou fim antecipado das chuvas, períodos secos a meio da época, tempestades fortes e cheias, calor na floração, pragas e doenças que seguem o tempo (lagarta-do-funil-do-milho, afídeos, doenças de fungos em períodos húmidos) e perdas pós-colheita quando o grão é guardado húmido.",
            "Procure os pontos de perigo: os meses em que um trabalho importante encontra um risco grande, como a floração do milho num mês que muitas vezes tem um período seco. É aí que as práticas climaticamente inteligentes ajudam mais. Pergunte aos agricultores mais velhos como o padrão mudou ao longo dos anos."
          ],
          steps: ["Desenhe 12 colunas para os meses; escreva as suas épocas.", "Escreva os trabalhos da machamba e as necessidades dos animais por mês.", "Marque os riscos climáticos e as pragas ligadas ao tempo.", "Faça um círculo à volta dos pontos de perigo, onde um trabalho importante encontra um risco grande.", "Pergunte aos agricultores mais velhos o que mudou."],
          words: [["Período seco", "uns dias ou semanas sem chuva útil durante a época das chuvas."], ["Ponto de perigo", "um momento em que um trabalho importante da machamba encontra um risco climático alto."]],
          slides: [
            { title: "Doze colunas", bullets: ["As épocas em cima", "Trabalhos da machamba e necessidades dos animais por mês"] },
            { title: "Marque os riscos", bullets: ["Início tardio, fim antecipado, períodos secos", "Tempestades, cheias, calor na floração", "Pragas ligadas ao tempo, armazenamento húmido"] },
            { title: "Encontre os pontos de perigo", bullets: ["Trabalho importante encontra risco grande", "Onde as práticas de ACI ajudam mais", "Pergunte aos mais velhos o que mudou"] }
          ],
          sources: [FAO_EO],
          tryIt: "Desenhe o calendário de riscos climáticos da sua machamba em papel ou numa folha de cálculo no telefone. Faça um círculo à volta de pelo menos dois pontos de perigo.",
          youCanNow: "desenhar um calendário de riscos climáticos para a sua machamba e encontrar os seus pontos de perigo.",
          quickCheck: [
            { objective: "O3", q: "O que vai nas linhas por baixo dos meses num calendário de riscos climáticos?", options: ["Os trabalhos da machamba, as necessidades dos animais e os riscos", "Só os preços do mercado", "Os aniversários da sua família", "Só os totais de chuva"], answer: 0, why: "O calendário põe os trabalhos da machamba e as necessidades dos animais ao lado dos riscos de cada mês." },
            { objective: "O3", q: "Você guarda milho num mês que muitas vezes é húmido. O que marca?", options: ["Nada; o armazenamento é seguro", "Um risco de perda pós-colheita por grão húmido", "Um risco de seca", "Um trabalho de sementeira"], answer: 1, why: "Grão guardado húmido em meses húmidos é um risco de perda pós-colheita." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Compreender o risco climático na sua machamba",
        questions: [
          { objective: "O1", q: "Qual é um dos três objetivos da FAO para a agricultura climaticamente inteligente?", options: ["Usar o máximo de químicos possível", "Ajudar as machambas a adaptar-se e a ganhar resiliência", "Plantar só uma cultura", "Cortar todas as árvores"], answer: 1, why: "A ACI procura produtividade, adaptação e resiliência, e menos emissões sempre que possível." },
          { objective: "O1", q: "Uma prática climaticamente inteligente tem de cumprir os três objetivos ao mesmo tempo?", options: ["Sim, sempre", "Só no Quénia", "Não; deve servir para a machamba e melhorar a produtividade e a resiliência", "Só nas machambas grandes"], answer: 2, why: "A FAO diz que as práticas não precisam de cumprir todos os objetivos; a comida e o rendimento vêm primeiro." },
          { objective: "O2", q: "A previsão sazonal diz \"chuva abaixo do normal\". Isto quer dizer:", options: ["Uma probabilidade maior de chover menos do que o costume", "Que não vai chover com certeza", "Que as cheias são certas", "Nada de útil"], answer: 0, why: "As previsões sazonais dão probabilidades, não certezas." },
          { objective: "O2", q: "Onde deve um agricultor nigeriano procurar a previsão sazonal oficial?", options: ["Num boato no mercado", "No calendário do ano passado", "Num desconhecido nas redes sociais", "Na NiMet ou nas suas previsões partilhadas pela extensão e pela rádio"], answer: 3, why: "A NiMet é o serviço meteorológico oficial da Nigéria." },
          { objective: "O3", q: "Um ponto de perigo num calendário de riscos climáticos é:", options: ["Quando um trabalho importante da machamba encontra um risco climático alto", "Um lugar para vender as culturas", "Um tipo de praga", "Um mês sem trabalho na machamba"], answer: 0, why: "Os pontos de perigo mostram onde as práticas ajudam mais." }
        ]
      }
    },
    {
      name: "Capítulo 2: Práticas climaticamente inteligentes",
      lessons: [
        {
          objectives: ["O4"],
          title: "Manter o solo e a água na machamba",
          minutes: 6,
          goal: "Escolher práticas de solo e água que sirvam para a sua machamba e a sua inclinação.",
          text: [
            "Um solo saudável guarda mais água e alimenta as culturas durante os períodos secos. Três princípios da agricultura de conservação ajudam: mexer o solo o menos possível (mobilização mínima), mantê-lo coberto (restos das culturas ou cobertura morta em vez de queimar) e fazer rotação ou consociação (por exemplo milho com feijão, feijão-nhemba ou feijão-boer). Junte estrume ou composto para aumentar a matéria orgânica.",
            "Apanhe a chuva onde ela cai. As covas ou bacias de plantação (chamadas zai no Sahel) juntam água e estrume à volta de cada planta. Os camalhões amarrados e os diques em curva de nível impedem a água de escorrer. Nas encostas, os terraços como o fanya juu no Quénia, as faixas de capim e as árvores ao longo das curvas de nível travam a erosão. Os reservatórios de água e a recolha de água dos telhados guardam água para os animais, os viveiros e as hortas.",
            "Comece pequeno: experimente uma prática numa parte do campo, compare-a com a sua maneira habitual e fique com o que funciona. Peça ao seu extensionista modelos locais e a mão de obra que precisam."
          ],
          steps: ["Deixe de queimar os restos; deixe-os como cobertura morta.", "Lavre menos onde consegue controlar as ervas daninhas.", "Faça rotação ou consociação com uma leguminosa.", "Apanhe a chuva: covas de plantação, camalhões amarrados, diques em curva de nível.", "Nas encostas: terraços, faixas de capim, árvores nas curvas de nível.", "Experimente primeiro numa área pequena e compare."],
          words: [["Agricultura de conservação", "agricultura com o mínimo de mexidas no solo, cobertura permanente do solo e rotação de culturas."], ["Cobertura morta", "uma camada de restos das culturas, capim ou folhas sobre o solo para o manter húmido e fresco."], ["Covas zai / bacias de plantação", "pequenas covas que juntam a água da chuva e o estrume à volta das plantas."], ["Fanya juu", "um terraço do Quénia feito atirando a terra de uma vala para cima, para formar um muro de terra."]],
          slides: [
            { title: "Um solo saudável guarda água", bullets: ["Mobilização mínima", "Mantenha o solo coberto: cobertura morta, sem queimar", "Rotação ou consociação com leguminosas"] },
            { title: "Apanhe a chuva onde ela cai", bullets: ["Covas e bacias de plantação (zai)", "Camalhões amarrados e diques em curva de nível", "Reservatórios de água e recolha dos telhados"] },
            { title: "Proteja as encostas", bullets: ["Terraços como o fanya juu", "Faixas de capim e árvores nas curvas de nível"] },
            { title: "Comece pequeno", bullets: ["Experimente numa parte do campo", "Compare com a sua maneira habitual", "Peça à extensão modelos locais"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Percorra a sua machamba depois da chuva ou olhe para ela agora. Marque onde a água escorre, onde o solo está a ser levado e onde a água fica parada. Escolha uma prática de solo ou de água para um sítio e escreva como a vai experimentar.",
          youCanNow: "escolher e experimentar práticas de solo e água que mantêm a humidade e o solo na sua machamba.",
          quickCheck: [
            { objective: "O4", q: "Para que servem os camalhões amarrados e os diques em curva de nível?", options: ["Guardar grão", "Alimentar os animais", "Impedir a água de escorrer do campo", "Marcar o limite da machamba"], answer: 2, why: "Seguram a chuva no campo para ela se infiltrar em vez de escorrer." },
            { objective: "O4", q: "Depois da chuva, a água corre pela encosta do seu campo e leva o solo. O que escolhe?", options: ["Lavrar a subir e a descer a encosta", "Queimar os restos", "Deixar o solo descoberto", "Faixas de capim ou terraços ao longo das curvas de nível"], answer: 3, why: "Os terraços e as faixas de capim nas curvas de nível travam a erosão nas encostas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escolher culturas e variedades que aguentam",
          minutes: 5,
          goal: "Escolher culturas, variedades e estratégias de sementeira que reduzem o risco climático.",
          text: [
            "As variedades contam. O CIMMYT, o centro de investigação do milho do CGIAR, e os seus parceiros criaram variedades de milho tolerantes à seca, lançadas em muitos países da África Subsariana; o CGIAR diz que elas podem produzir claramente mais do que as variedades convencionais em situação de seca. O feijão e o milho precoces escapam à seca do fim da época. Pergunte à sua loja de insumos agrícolas ou ao seu extensionista que variedades certificadas servem para a sua zona, e compre semente certificada a vendedores registados.",
            "As culturas também contam. A mapira (sorgo), a mexoeira, a mandioca, o feijão-nhemba e o feijão-boer aguentam melhor a seca do que o milho em muitas zonas. Cultivar mais de uma cultura, e fazer consociação, reparte o risco: se uma falhar, outra pode dar.",
            "As pragas mudam com o clima. O push-pull, criado pelo icipe com parceiros, faz consociação do milho ou da mapira com desmódio e põe à volta capim Napier ou Brachiaria; o icipe diz que reduz muito os danos da broca do caule, da striga e da lagarta-do-funil-do-milho. Escalone as datas de sementeira em pequenos blocos, e semeie logo no verdadeiro início das chuvas."
          ],
          steps: ["Peça à extensão ou a uma loja de insumos agrícolas variedades certificadas tolerantes à seca ou precoces para a sua zona.", "Compre semente certificada a um vendedor registado.", "Junte uma cultura resistente à seca (mapira, mandioca, feijão-nhemba, feijão-boer).", "Faça consociação para repartir o risco; pense no push-pull para o milho ou a mapira.", "Semeie logo no verdadeiro início das chuvas; escalone em pequenos blocos."],
          words: [["Variedade tolerante à seca", "uma variedade de uma cultura criada para produzir melhor do que outras quando falta água."], ["Precoce", "pronta para colher mais cedo, por isso pode escapar à seca do fim da época."], ["Semente certificada", "semente verificada pela autoridade oficial de sementes quanto à pureza e à qualidade."], ["Push-pull", "um sistema em que o desmódio afasta as pragas do milho ou da mapira e o capim à volta atrai-as para longe."]],
          slides: [
            { title: "Variedades", bullets: ["Milho tolerante à seca (CGIAR/CIMMYT)", "Milho e feijão precoces", "Semente certificada de vendedores registados"] },
            { title: "Culturas", bullets: ["Mapira, mexoeira, mandioca, feijão-nhemba, feijão-boer", "Mais de uma cultura reparte o risco"] },
            { title: "Pragas e datas", bullets: ["Push-pull: desmódio + capim à volta (icipe)", "Semeie logo no verdadeiro início das chuvas", "Escalone em pequenos blocos"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Para a sua cultura principal, encontre uma variedade certificada tolerante à seca ou precoce vendida perto de si (pergunte a uma loja de insumos agrícolas ou a um extensionista), e escolha uma cultura resistente à seca para juntar. Escreva onde vai semear cada uma.",
          youCanNow: "escolher culturas, variedades e estratégias de sementeira que baixam o risco climático da sua machamba.",
          quickCheck: [
            { objective: "O5", q: "Porque é que as variedades precoces ajudam nas zonas secas?", options: ["Podem escapar à seca do fim da época", "Precisam de mais água", "Nunca apanham pragas", "Não precisam de semente"], answer: 0, why: "As culturas precoces terminam antes de chegar a seca do fim da época." },
            { objective: "O5", q: "O seu milho falha muitas vezes nos anos secos. O que lhe dá uma rede de segurança?", options: ["Semear só mais milho", "Juntar uma cultura resistente à seca, como a mapira ou o feijão-nhemba", "Semear mais tarde do que todos", "Comprar semente não certificada no mercado"], answer: 1, why: "Cultivar mais de uma cultura, incluindo uma resistente à seca, reparte o risco." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Árvores, gado e seguros: repartir o risco",
          minutes: 6,
          goal: "Juntar pelo menos uma maneira de repartir o risco além da sua cultura principal, e depois escrever o seu plano.",
          text: [
            "As árvores na machamba (agrofloresta) dão sombra, quebra-ventos, forragem, fruta, lenha e madeira, protegem o solo e guardam carbono. As árvores de fruto como a mangueira e o abacateiro, as árvores que fixam azoto e as árvores nos limites podem todas trazer um rendimento que não depende das chuvas de uma só época.",
            "O gado pode ser uma reserva, mas também sofre com a seca. Plante e guarde forragem (capim Napier, Brachiaria, restos das culturas, feno), proteja as fontes de água, escolha raças resistentes e mantenha o número de animais de acordo com o alimento que consegue produzir ou comprar. Os animais pequenos, como as cabras e as galinhas, podem ser mais fáceis de manter nos anos secos.",
            "O seguro passa parte do risco para uma seguradora. Os seguros por índice climático e por rendimento da área pagam quando a chuva ou os rendimentos da zona ficam abaixo de um nível marcado, e são vendidos em algumas zonas através de cooperativas, vendedores de insumos ou dinheiro móvel. Pergunte à sua cooperativa ou ao seu extensionista, leia o que faz o seguro pagar e verifique que a seguradora é licenciada pela entidade reguladora de seguros do seu país (no Quénia a Insurance Regulatory Authority, na Nigéria a NAICOM). Os grupos de poupança e os rendimentos variados também repartem o risco."
          ],
          steps: ["Escolha árvores que sirvam para a sua machamba: de fruto, de forragem, de limite ou que fixam azoto.", "Planeie a forragem e a água para os animais durante a época seca.", "Ajuste o número de animais ao alimento que consegue produzir ou comprar.", "Pergunte por seguros por índice climático ou por rendimento da área; leia o que faz o seguro pagar; verifique que a seguradora é licenciada.", "Escreva o seu plano climaticamente inteligente."],
          words: [["Agrofloresta", "cultivar árvores juntamente com culturas ou gado na mesma terra."], ["Forragem", "plantas cultivadas ou guardadas para alimentar os animais."], ["Seguro por índice climático", "um seguro que paga quando uma medida do tempo, como a chuva, fica abaixo de um nível marcado."], ["Condição de pagamento", "a condição que faz a seguradora pagar."]],
          slides: [
            { title: "Árvores na machamba", bullets: ["Sombra, quebra-ventos, forragem, fruta, lenha", "Protegem o solo, guardam carbono", "Rendimento além de uma só época"] },
            { title: "O gado como reserva", bullets: ["Produza e guarde forragem", "Proteja a água, raças resistentes", "Número de animais de acordo com o alimento"] },
            { title: "Seguros e poupança", bullets: ["Seguros por índice climático e por rendimento da área", "Leia a condição de pagamento", "Verifique que a seguradora é licenciada"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tarefa final: escreva o seu plano climaticamente inteligente de uma página: o calendário de riscos, a previsão desta época e a data em que a leu, e pelo menos cinco práticas (solo e água, culturas e variedades, repartir o risco), com as datas de início e como vai avaliar o sucesso.",
          youCanNow: "usar árvores, gado, seguros e poupança para repartir o risco climático, e escrever um plano climaticamente inteligente completo para a sua machamba.",
          quickCheck: [
            { objective: "O6", q: "O que é a agrofloresta?", options: ["Cortar árvores para fazer carvão", "Cultivar só árvores", "Cultivar árvores juntamente com culturas ou gado", "Comprar madeira"], answer: 2, why: "Agrofloresta quer dizer árvores na machamba com culturas ou animais." },
            { objective: "O6", q: "Vem aí uma época seca e você tem cabras e vacas. O que planeia?", options: ["Comprar mais animais", "Vender toda a forragem", "Ignorar as fontes de água", "Forragem e água, com o número de animais de acordo com o alimento"], answer: 3, why: "Planear a forragem e a água e ajustar o número de animais ao alimento protege os animais na seca." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Práticas climaticamente inteligentes",
        questions: [
          { objective: "O4", q: "Qual é um princípio da agricultura de conservação?", options: ["Queimar os restos depois da colheita", "Lavrar fundo em todas as épocas", "Manter o solo coberto com cobertura morta ou restos", "Cultivar sempre a mesma cultura"], answer: 2, why: "A cobertura do solo guarda a humidade e protege contra a erosão." },
          { objective: "O4", q: "As covas de plantação (zai) ajudam porque:", options: ["Juntam a chuva e o estrume à volta de cada planta", "Afastam os pássaros", "Tornam a colheita mais rápida", "Substituem a semente"], answer: 0, why: "Concentram a água e os nutrientes onde estão as raízes." },
          { objective: "O5", q: "Onde deve comprar semente de uma variedade tolerante à seca?", options: ["A qualquer vendedor à beira da estrada", "No celeiro de um vizinho", "Em grão comprado no mercado", "A um vendedor registado que vende semente certificada"], answer: 3, why: "A semente certificada é verificada quanto à pureza e à qualidade." },
          { objective: "O5", q: "No push-pull, o que faz o desmódio?", options: ["Atrai as pragas para dentro do milho", "Afasta as pragas do milho ou da mapira", "Substitui completamente o adubo", "Alimenta os pássaros"], answer: 1, why: "O desmódio empurra as pragas para longe; o capim à volta puxa-as para fora." },
          { objective: "O6", q: "Antes de comprar um seguro por índice climático, deve:", options: ["Ler a condição de pagamento e verificar que a seguradora é licenciada", "Pagar à primeira pessoa que pedir", "Dar o PIN do seu dinheiro móvel", "Comprá-lo para os vizinhos"], answer: 0, why: "Saiba quando paga e confirme que a seguradora é legítima." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Agricultura Climaticamente Inteligente",
    questions: [
      { objective: "O1", q: "A agricultura climaticamente inteligente é:", options: ["Cultivar só com máquinas", "Escolher práticas que aumentam a produtividade, criam resiliência e cortam as emissões sempre que possível", "Cultivar só nas cidades", "Um tipo de adubo"], answer: 1, why: "É assim que a FAO descreve a ACI." },
      { objective: "O1", q: "Para a maioria dos pequenos agricultores, que objetivo da ACI vem normalmente primeiro?", options: ["Reduzir as emissões", "Comprar drones", "A segurança alimentar e o rendimento", "Exportar"], answer: 2, why: "A FAO nota que a comida e o rendimento vêm primeiro; as emissões são muitas vezes um benefício extra." },
      { objective: "O1", q: "Resiliência quer dizer:", options: ["A capacidade de aguentar um choque e recuperar", "Semear tarde", "Usar mais água", "Um tipo de solo"], answer: 0, why: "As machambas resilientes recuperam depois de uma seca ou de cheias." },
      { objective: "O2", q: "As previsões sazonais oficiais do Quénia vêm de:", options: ["KCAA", "NiMet", "Uma empresa de sementes", "Departamento Meteorológico do Quénia (KMD)"], answer: 3, why: "O KMD publica previsões sazonais e boletins agrometeorológicos." },
      { objective: "O2", q: "Uma previsão sazonal deve ser usada para:", options: ["Apostar tudo numa só cultura", "Ajustar os planos, por exemplo escolhendo uma variedade de ciclo mais curto", "Ignorar as datas de sementeira", "Deixar de cultivar"], answer: 1, why: "As previsões dão probabilidades; ajuste com bom senso." },
      { objective: "O3", q: "O início das chuvas quer dizer:", options: ["O fim da colheita", "Uma praga", "O começo da época das chuvas", "Um adubo"], answer: 2, why: "O início é quando as chuvas começam." },
      { objective: "O3", q: "Um período seco é:", options: ["Uns dias ou semanas sem chuva útil durante a época das chuvas", "Uma cheia", "Uma noite fria", "Um dia de mercado"], answer: 0, why: "Os períodos secos a meio da época podem prejudicar as culturas em fases importantes." },
      { objective: "O3", q: "A floração do milho num mês que muitas vezes tem um período seco é:", options: ["Uma oportunidade de mercado", "Um bom sinal", "Um método de sementeira", "Um ponto de perigo"], answer: 3, why: "Uma fase importante que encontra um risco alto é um ponto de perigo." },
      { objective: "O4", q: "Queimar os restos das culturas:", options: ["É um princípio da agricultura de conservação", "Deixa o solo descoberto e faz perder matéria orgânica", "Guarda mais água no solo", "É climaticamente inteligente"], answer: 1, why: "Os restos deixados como cobertura morta protegem e alimentam o solo." },
      { objective: "O4", q: "Mobilização mínima quer dizer:", options: ["Lavrar duas vezes", "Não sachar", "Mexer o solo o menos possível", "Plantar só árvores"], answer: 2, why: "Mexer menos protege a estrutura e a humidade do solo." },
      { objective: "O4", q: "Que prática trava a erosão numa encosta?", options: ["Terraços como o fanya juu, e faixas de capim nas curvas de nível", "Lavrar a direito pela encosta abaixo", "Tirar todo o capim", "Queimar a encosta"], answer: 0, why: "Os terraços e as faixas nas curvas de nível abrandam a água e seguram o solo." },
      { objective: "O4", q: "Um reservatório de água é:", options: ["Uma panela de cozinha", "Uma armadilha para pragas", "Um pacote de sementes", "Um charco escavado que guarda a água da chuva"], answer: 3, why: "Os reservatórios de água guardam água para os animais e para pequenas regas." },
      { objective: "O5", q: "O CGIAR diz que as variedades de milho tolerantes à seca:", options: ["Precisam de mais água", "Podem produzir claramente mais do que as variedades convencionais em situação de seca", "Não podem ser cultivadas em África", "São iguais ao milho comum"], answer: 1, why: "Foram criadas para produzir melhor quando falta água." },
      { objective: "O5", q: "Que cultura aguenta muitas vezes a seca melhor do que o milho?", options: ["Arroz em canteiros alagados", "Cana-de-açúcar", "Mapira (sorgo)", "Chá"], answer: 2, why: "A mapira é um cereal resistente à seca." },
      { objective: "O5", q: "A consociação do milho com feijão ou feijão-nhemba:", options: ["Reparte o risco e junta uma leguminosa", "Baixa sempre o rendimento", "Não é permitida", "Precisa de um drone"], answer: 0, why: "Duas culturas repartem o risco; as leguminosas juntam azoto." },
      { objective: "O5", q: "No push-pull, o capim à volta:", options: ["Afasta as pragas", "É colhido para exportar", "É pulverizado", "Atrai as pragas para longe da cultura"], answer: 3, why: "As bordaduras de capim Napier ou Brachiaria puxam as pragas para longe." },
      { objective: "O6", q: "Agrofloresta quer dizer:", options: ["Cortar a floresta para cultivar", "Cultivar árvores juntamente com culturas ou gado", "Plantar só flores", "Comprar madeira"], answer: 1, why: "As árvores na machamba trazem rendimento, sombra e proteção do solo." },
      { objective: "O6", q: "Na seca, os criadores de gado devem:", options: ["Continuar a juntar animais", "Vender toda a forragem", "Planear a forragem e a água e ajustar o número de animais ao alimento", "Deixar de dar água aos animais"], answer: 2, why: "Planear o alimento e a água mantém os animais vivos durante as épocas secas." },
      { objective: "O6", q: "Num seguro por índice climático, a condição de pagamento é:", options: ["A condição que faz a seguradora pagar", "O preço da semente", "Um tipo de arma", "A morada da seguradora"], answer: 0, why: "Define quando a apólice paga." },
      { objective: "O4", q: "Antes de usar uma prática nova em toda a machamba, deve:", options: ["Usá-la em todo o lado de uma vez", "Ignorar os conselhos da extensão", "Esperar dez anos", "Experimentá-la numa área pequena e comparar"], answer: 3, why: "Pequenas experiências mostram se funciona na sua machamba." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 6, 7, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Calendário de riscos climáticos", objective: "O3", notYet: "Faltam meses, trabalhos ou riscos, ou não há pontos de perigo.", meets: "Doze meses com as épocas, os trabalhos da machamba, os riscos e pelo menos dois pontos de perigo marcados com um círculo.", exceeds: "Inclui o que os agricultores mais velhos dizem que mudou." },
      { name: "Previsão sazonal", objective: "O2", notYet: "Não há previsão, ou falta a data ou a fonte.", meets: "O que diz a previsão oficial desta época, a sua fonte e a data em que foi lida.", exceeds: "Mostra duas mudanças no plano feitas por causa da previsão." },
      { name: "Prática de solo e água", objective: "O4", notYet: "Não há nenhuma prática de solo ou de água.", meets: "Pelo menos uma prática de solo ou de água que serve para a machamba, com uma data de início.", exceeds: "Planeada como uma pequena experiência comparada com a maneira habitual." },
      { name: "Culturas e variedades", objective: "O5", notYet: "Não há nenhuma prática de culturas ou de variedades.", meets: "Pelo menos uma prática de variedades ou de culturas que reduz o risco, com semente certificada de um vendedor registado.", exceeds: "Também inclui consociação ou push-pull onde fizer sentido." },
      { name: "Repartir o risco", objective: "O6", notYet: "Não há nenhuma maneira de repartir o risco além da cultura principal.", meets: "Pelo menos uma prática com árvores, gado ou seguros, com uma data de início.", exceeds: "Para o seguro, diz qual é a condição de pagamento e verifica que a seguradora é licenciada." },
      { name: "Cinco práticas e medidas de sucesso", objective: "O1", notYet: "Menos de cinco práticas, ou nenhuma maneira de avaliar o sucesso.", meets: "Pelo menos cinco práticas, cada uma com quando começar e como vai saber se funcionou.", exceeds: "Indica que objetivo climaticamente inteligente cada prática ajuda." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Agricultores que usam pelo menos duas práticas climaticamente inteligentes novas nesta época (inquérito de seguimento)",
      "Colheita e rendimento comparados com uma época seca ou difícil recente, segundo os agricultores ou os parceiros",
      "Agricultores que consultam a previsão sazonal oficial antes de semear, ou que fazem um seguro licenciado de culturas ou de gado"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um rádio para obter a previsão sazonal, ou um boletim de extensão",
      "Papel e caneta (ou uma folha de cálculo no telefone) para o calendário de riscos climáticos e o plano",
      "Acesso à machamba do aluno ou a uma machamba de exemplo para percorrer",
      "O contacto de um extensionista ou de uma loja de insumos agrícolas para as variedades e os modelos locais",
      "Cerca de 60 minutos de lições, mais tempo na machamba para o percurso e o plano"
    ],
    facilitatorNotes: [
      "Faça as sessões com grupos de agricultores antes de a época começar, para os planos estarem prontos antes da sementeira.",
      "Leiam juntos a previsão oficial mais recente e explique que ela dá probabilidades, não promessas.",
      "Desenhe primeiro um calendário de riscos climáticos do grupo e depois deixe os agricultores desenharem o seu; convide os agricultores mais velhos a contar o que mudou.",
      "Incentive pequenas experiências com as práticas novas e convide um extensionista para os modelos e as variedades locais.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
