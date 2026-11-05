"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-crop-horticulture.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// No product or dose recommendations: students are sent to extension, the label, and the national pesticide regulator.

const FAO_IPM = { name: "FAO: Manejo Integrado de Pragas (MIP)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: aplicação móvel de apoio à luta contra a lagarta-do-funil-do-milho em África (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: a tecnologia push-pull trava a lagarta-do-funil-do-milho", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (PCPB, entidade que regista pesticidas no Quénia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigéria)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, instituto de investigação agrária do Quénia)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Manual de Agricultura Climaticamente Inteligente (gestão do solo e da água)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-pt",
  lang: "pt",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Produção Sustentável de Culturas e Hortícolas",
  skills: "Verificar e melhorar a saúde do solo, Semear com boa semente no espaçamento e na altura certos, Alimentar as culturas com estrume, composto e adubo, Inspecionar o campo e fazer o manejo integrado de pragas, Usar pesticidas com segurança e dentro da lei, Regar hortícolas e tratar bem a colheita",
  outcome: "planear e conduzir uma campanha agrícola para uma cultura de campo e uma horta: preparar e alimentar o solo, semear bem, inspecionar e controlar as pragas com o manejo integrado de pragas, regar sem desperdício, e colher e tratar os produtos para que mantenham o seu valor.",
  about: [
    "Este curso é para pequenos agricultores, jovens que começam na horticultura, grupos de mulheres e de jovens, e extensionistas no Quénia, na Nigéria e em toda a África. Os exemplos são o milho, o feijão, a mandioca e a mapira (sorgo) no campo, e o tomate, a couve (sukuma wiki) e a cebola na horta.",
    "O Capítulo 1 trata de fazer crescer uma cultura forte: conhecer e analisar o seu solo, semear com boa semente no espaçamento e na altura certos, e alimentar a cultura com uma mistura de estrume, composto e adubo. O Capítulo 2 trata de proteger e terminar a cultura: inspeção do campo e manejo integrado de pragas, uso seguro e legal de pesticidas, rega eficiente das hortícolas, e colheita e pós-colheita.",
    "As culturas, os solos e as pragas mudam de uma zona para outra. Use este curso com o seu extensionista, um instituto de investigação (como o KALRO no Quénia, ou o programa estatal de desenvolvimento agrícola na Nigéria) e uma loja de insumos agrícolas. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de produção para uma campanha, com uma cultura de campo (por exemplo meio acre de milho e feijão) e uma horta (por exemplo um oitavo de acre de tomate ou couve): verificações do solo e qualquer análise do solo, como vai preparar e alimentar o solo, semente e espaçamento, datas de sementeira, uma rotina semanal de inspeção com as principais pragas e doenças a vigiar e os seus passos de MIP, um plano de rega para as hortícolas, e como vai colher, separar, guardar e vender.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores, jovens que começam na horticultura, grupos de mulheres e de jovens, e extensionistas no Quénia, na Nigéria e em toda a África, que cultivam culturas de campo como milho, feijão, mandioca e mapira, e hortícolas como tomate, couve e cebola.",
    startingPoint: "A maioria já semeia e colhe todas as campanhas, muitas vezes com semente guardada ou não certificada, adubo espalhado a lanço e pesticidas comprados a granel. Poucos já fizeram uma análise do solo, inspecionaram o campo com uma rotina fixa, leram um rótulo de pesticida inteiro ou planearam a rega e a pós-colheita.",
    gap: "Solo pobre, sementeira apertada ou tardia, adubo mal colocado, pulverizações sem necessidade e perdas depois da colheita reduzem a produção e o rendimento, e o uso inseguro de pesticidas faz mal às famílias e aos compradores. Um plano escrito para a campanha, baseado em boas práticas, ajuda os agricultores a produzir mais, gastar menos em insumos e vender produtos que mantêm o seu valor.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo agrícola é explicado",
      "Aparelhos: um telefone simples e um caderno; a maior parte da prática é feita no campo",
      "Tempo: lições curtas que cabem entre os trabalhos da machamba e da campanha",
      "Os solos, as variedades, as doses e os produtos registados mudam de zona para zona: os alunos obtêm doses e produtos de uma análise do solo, da extensão ou do rótulo",
      "Segurança com pesticidas: nenhuma prática de pulverização na aula; os alunos seguem o rótulo e as regras do seu país"
    ],
    prerequisites: "Nenhum. O curso \"Saúde e Fertilidade do Solo\" vai mais fundo no solo, e o curso \"Maneio Integrado de Pragas e Controlo Biológico de Pragas\" vai mais fundo nas pragas."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Num dos seus próprios terrenos", action: "verificar no campo a saúde do solo e descrever como tirar uma boa amostra para uma análise do solo", standard: "indicando pelo menos três sinais de solo saudável ou pobre" },
    { id: "O2", condition: "Para uma cultura de campo e uma hortícola", action: "escolher semente certificada ou material de plantação limpo, o espaçamento e a data de sementeira ou de transplante", standard: "com cada escolha tirada de um revendedor, da extensão ou do pacote da semente" },
    { id: "O3", condition: "Para a sua principal cultura de campo", action: "escrever um plano de alimentação que junte matéria orgânica, leguminosas e adubo bem colocado", standard: "com as doses marcadas como vindas de uma análise do solo ou da extensão" },
    { id: "O4", condition: "Perante uma cultura com pragas ou doenças", action: "inspecioná-la com uma rotina semanal, escolher ações de MIP e usar um pesticida registado só conforme o rótulo, quando se justifica", standard: "começando pela prevenção e pelos controlos sem químicos" },
    { id: "O5", condition: "Para uma pequena horta", action: "planear uma rega eficiente com gota-a-gota ou regador, cobertura morta e a hora certa do dia", standard: "verificando a humidade do solo antes de cada rega" },
    { id: "O6", condition: "Na colheita", action: "planear como colher, separar, secar e guardar os produtos para reduzir as perdas", standard: "com a maturação certa, manuseamento cuidadoso e armazenamento seguro para cada cultura" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fazer crescer uma cultura forte",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conheça o seu solo",
          minutes: 5,
          goal: "Verificar no campo a saúde do seu solo e saber quando e como fazer uma análise do solo.",
          text: [
            "Um solo saudável é escuro, solto (desfaz-se na mão), cheira a terra, tem minhocas e raízes que descem fundo, e absorve a chuva em vez de a deixar escorrer. Um solo pobre é duro, claro, faz crosta depois da chuva ou fica encharcado. Faça uma verificação simples no campo: abra um buraco com a profundidade de uma pá, observe a cor e as camadas, aperte um punhado de terra, conte as minhocas e veja onde a água escorre ou fica parada depois da chuva.",
            "Uma análise do solo diz-lhe o que os seus olhos não veem: a acidez (pH) e os principais nutrientes. Muitos solos das zonas de muita chuva do Quénia e da Nigéria são ácidos, o que prende os nutrientes; pode ser aconselhada a calagem. Pergunte ao seu extensionista, ao instituto de investigação ou à loja de insumos onde fazer uma análise do solo e como tirar uma boa amostra: muitas pequenas amostras de todo o terreno, misturadas, e nunca de montes de estrume ou de sítios queimados.",
            "Melhore a saúde do solo em todas as campanhas: junte matéria orgânica (estrume, composto, restos de culturas), mantenha o solo coberto, faça rotação de culturas e evite as queimadas e as lavouras desnecessárias."
          ],
          steps: ["Abra um buraco com a profundidade de uma pá e observe a cor, as camadas e as raízes.", "Aperte um punhado de terra; conte as minhocas.", "Veja onde a água escorre ou fica parada.", "Pergunte à extensão ou a uma loja de insumos onde fazer uma análise do solo.", "Tire muitas pequenas amostras de todo o terreno e misture-as."],
          words: [["Saúde do solo", "a capacidade do solo de fazer crescer plantas fortes, guardar água e sustentar vida."], ["pH", "uma medida de quanto o solo é ácido ou alcalino; muitas culturas preferem um solo pouco ácido a neutro."], ["Matéria orgânica", "restos de plantas e animais decompostos no solo, como estrume e composto."], ["Calagem", "juntar calcário ao solo para reduzir a acidez."]],
          slides: [
            { title: "Solo saudável", bullets: ["Escuro, solto, cheiro a terra", "Minhocas, raízes fundas", "Absorve a chuva"] },
            { title: "Verificação no campo", bullets: ["Buraco com a profundidade de uma pá: cor, camadas, raízes", "Apertar a terra, contar minhocas", "Onde a água escorre ou fica parada"] },
            { title: "Análise do solo", bullets: ["Mostra o pH e os nutrientes", "Solos ácidos podem precisar de calcário", "Muitas pequenas amostras, misturadas"] },
            { title: "Melhore o solo em cada campanha", bullets: ["Estrume, composto, restos de culturas", "Manter coberto, fazer rotação", "Sem queimadas"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Faça a verificação do solo num terreno: cave, observe, aperte a terra, conte as minhocas e escreva o que encontrou. Depois descubra onde pode fazer uma análise do solo perto de si e quanto custa.",
          youCanNow: "verificar no campo a saúde do seu solo e saber como tirar uma amostra para uma análise do solo.",
          quickCheck: [
            { objective: "O1", q: "Depois da chuva, a água fica parada no seu terreno durante dias e o solo está claro e duro. O que isto mostra?", options: ["Um solo muito saudável", "Um solo que precisa de cuidados, como mais matéria orgânica", "Um solo que não precisa de nenhuma mudança", "Um solo com minhocas a mais"], answer: 1, why: "Um solo saudável é escuro e solto e absorve a chuva; água parada e solo duro e claro são sinais de solo pobre." },
            { objective: "O1", q: "Vai tirar uma amostra de solo. Onde cava?", options: ["Só ao lado do monte de estrume", "Só onde queimou os restos", "Num só sítio no meio do terreno", "Em muitos pequenos sítios de todo o terreno, misturados"], answer: 3, why: "Muitas pequenas amostras misturadas mostram o terreno todo; montes de estrume e sítios queimados dão resultados errados." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Semear bem: semente, espaçamento e altura certa",
          minutes: 5,
          goal: "Semear uma cultura de campo e produzir mudas de hortícolas com boa semente, bom espaçamento e na altura certa.",
          text: [
            "A boa semente é a forma mais barata de aumentar a produção. Compre semente certificada de uma variedade adaptada à sua zona, num revendedor registado, e verifique a data e o selo do pacote. Na mandioca, use estacas limpas de plantas saudáveis, porque as doenças causadas por vírus passam pelas estacas infetadas.",
            "O espaçamento decide quantas plantas dividem a luz, a água e os nutrientes. Use o espaçamento recomendado para a sua variedade e zona, por exemplo a distância entre linhas e entre plantas no milho, e um espaçamento maior nas zonas mais secas. Tanto as falhas como as plantas apertadas fazem perder produção. Semeie logo que as chuvas tenham mesmo começado e o solo esteja húmido em profundidade.",
            "As hortícolas como o tomate, a couve e a cebola normalmente são primeiro produzidas num viveiro: um canteiro elevado e bem drenado ou tabuleiros de mudas, com terra limpa, sombra no início, rega cuidadosa e proteção contra as pragas. Endureça as mudas dando-lhes, aos poucos, mais sol e menos água antes do transplante, de preferência ao fim da tarde, quando está fresco."
          ],
          steps: ["Compre semente certificada (ou estacas limpas) de uma variedade adequada.", "Use o espaçamento recomendado para a sua variedade e zona.", "Semeie quando as chuvas tiverem mesmo começado e o solo estiver húmido.", "Produza as mudas de hortícolas num viveiro limpo e bem drenado.", "Endureça as mudas e depois transplante ao fim da tarde, quando está fresco."],
          words: [["Semente certificada", "semente verificada pela autoridade oficial de sementes quanto à qualidade e à variedade."], ["Espaçamento", "a distância entre as linhas e entre as plantas."], ["Viveiro", "uma pequena área protegida onde se produzem as mudas antes do transplante."], ["Endurecimento", "habituar as mudas, aos poucos, às condições do campo antes do transplante."]],
          slides: [
            { title: "Boa semente", bullets: ["Certificada, adaptada à sua zona", "Revendedor registado; ver a data e o selo", "Mandioca: estacas limpas de plantas saudáveis"] },
            { title: "Espaçamento e altura certa", bullets: ["Espaçamento recomendado para a sua variedade", "Falhas e plantas apertadas fazem perder produção", "Semear quando as chuvas começam mesmo"] },
            { title: "Viveiro de hortícolas", bullets: ["Canteiro elevado, bem drenado, terra limpa", "Sombra no início, rega cuidadosa", "Endurecer e depois transplantar ao fim da tarde"] }
          ],
          sources: [KALRO],
          tryIt: "Para a sua principal cultura de campo e uma hortícola, escreva: a variedade, onde vai comprar semente certificada, o espaçamento recomendado (pergunte a uma loja de insumos ou ao extensionista) e a data planeada de sementeira ou de transplante.",
          youCanNow: "semear uma cultura de campo e produzir mudas de hortícolas com boa semente, bom espaçamento e na altura certa.",
          quickCheck: [
            { objective: "O2", q: "Porque se deve plantar a mandioca com estacas limpas de plantas saudáveis?", options: ["As doenças causadas por vírus passam pelas estacas infetadas", "As estacas limpas crescem sem água", "As plantas saudáveis não precisam de espaçamento", "As estacas de plantas doentes são mais caras"], answer: 0, why: "As doenças da mandioca causadas por vírus passam pelas estacas infetadas, por isso estacas limpas de plantas saudáveis protegem a nova cultura." },
            { objective: "O2", q: "As suas mudas de tomate estão prontas no viveiro. O que faz antes do transplante?", options: ["Rega-as duas vezes mais", "Leva-as logo para o sol forte ao meio-dia", "Endurece-as com mais sol e menos água e depois transplanta ao fim da tarde, quando está fresco", "Corta-lhes todas as folhas"], answer: 2, why: "O endurecimento prepara as mudas para o campo, e o fresco do fim da tarde reduz o choque do transplante." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Alimentar a cultura: estrume, composto e adubo",
          minutes: 6,
          goal: "Planear como alimentar uma cultura com nutrientes orgânicos e minerais, bem colocados e na altura certa.",
          text: [
            "As culturas precisam de azoto (N), fósforo (P) e potássio (K), e de quantidades menores de outros nutrientes. O estrume e o composto juntam alguns nutrientes e, tão importante como isso, matéria orgânica que guarda a água e alimenta a vida do solo. As leguminosas como o feijão, o feijão-nhemba e o amendoim juntam azoto ao solo através das suas raízes.",
            "Os adubos minerais dão nutrientes depressa e em quantidades conhecidas. Um esquema comum no milho é um adubo de fundo com fósforo na sementeira e depois uma adubação de cobertura com azoto quando a cultura está à altura do joelho, mas os produtos e as doses certos dependem da sua análise do solo e das recomendações locais. Colocar pequenas quantidades perto da planta (na cova de sementeira) aproveita melhor o adubo do que espalhá-lo por todo o lado.",
            "Junte os dois: matéria orgânica mais adubo bem colocado costuma dar produções melhores e mais estáveis do que cada um sozinho. Faça composto com restos de culturas, estrume e restos de cozinha, revolvido e mantido húmido. Nunca ponha estrume fresco e quente nem adubo diretamente sobre a semente."
          ],
          steps: ["Junte estrume ou composto antes da sementeira ou na sementeira.", "Inclua leguminosas na rotação ou em consociação.", "Use os produtos e as doses de adubo da sua análise do solo e das recomendações locais.", "Coloque o adubo perto da planta, sem tocar na semente.", "Faça a adubação de cobertura com azoto na fase certa, com o solo húmido."],
          words: [["N, P, K", "azoto, fósforo e potássio: os principais nutrientes das plantas."], ["Adubação de cobertura", "juntar adubo, normalmente azoto, a uma cultura que já está a crescer."], ["Composto", "restos de plantas e de animais decompostos, usados para alimentar o solo."]],
          slides: [
            { title: "O que as culturas precisam", bullets: ["Azoto, fósforo, potássio", "E nutrientes em menor quantidade", "As leguminosas juntam azoto"] },
            { title: "Matéria orgânica", bullets: ["Estrume e composto", "Guardam a água, alimentam a vida do solo"] },
            { title: "Adubo bem usado", bullets: ["Produtos e doses da análise do solo e dos conselhos locais", "Colocar perto da planta, não sobre a semente", "Cobertura com azoto na fase certa"] },
            { title: "Junte os dois", bullets: ["Orgânico + mineral = produções mais estáveis", "Faça composto com restos de culturas e estrume"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Escreva um plano de alimentação para a sua cultura de campo: que matéria orgânica vai juntar e quando, alguma leguminosa, e os produtos de adubo e as alturas de aplicação (marque \"dose da análise do solo ou da extensão\" se ainda não a souber). Comece um monte de composto se ainda não tiver.",
          youCanNow: "planear como alimentar uma cultura com estrume, composto e adubo bem colocado.",
          quickCheck: [
            { objective: "O3", q: "O que juntam o estrume e o composto além dos nutrientes?", options: ["Pesticida", "Matéria orgânica que guarda a água e alimenta a vida do solo", "Semente certificada", "Calcário"], answer: 1, why: "A matéria orgânica guarda a água e alimenta a vida do solo, o que é tão importante como os nutrientes." },
            { objective: "O3", q: "Tem adubo para a sementeira do milho. Onde o põe?", options: ["Em pequena quantidade perto da planta, sem tocar na semente", "Espalhado por todo o campo", "Diretamente sobre a semente", "Num monte na beira do campo"], answer: 0, why: "Pequenas quantidades perto da planta aproveitam melhor o adubo, e o adubo sobre a semente pode estragá-la." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Fazer crescer uma cultura forte",
        questions: [
          { objective: "O1", q: "Qual é um sinal de solo saudável?", options: ["Duro e claro, faz crosta depois da chuva", "Escuro, solto, com minhocas", "A água escorre sempre", "Cheira a químicos"], answer: 1, why: "Um solo saudável é solto, escuro e cheio de vida." },
          { objective: "O1", q: "Como deve tirar uma amostra de solo?", options: ["Uma colher de um monte de estrume", "De um sítio queimado", "Muitas pequenas amostras de todo o terreno, misturadas", "Da estrada"], answer: 2, why: "Uma amostra misturada representa o terreno todo." },
          { objective: "O2", q: "Porque usar estacas de mandioca limpas?", options: ["As doenças causadas por vírus passam pelas estacas infetadas", "São mais baratas", "Crescem mais depressa em qualquer solo", "Os compradores pedem-nas"], answer: 0, why: "Material de plantação limpo impede as doenças de se espalharem." },
          { objective: "O2", q: "O que é o endurecimento das mudas?", options: ["Regar mais", "Juntar adubo", "Plantar em solo duro", "Dar aos poucos mais sol e menos água antes do transplante"], answer: 3, why: "Prepara as mudas para as condições do campo." },
          { objective: "O3", q: "De onde vêm as doses certas de adubo?", options: ["De um palpite do vizinho", "Da sua análise do solo e das recomendações locais", "Da cor do saco", "De usar o máximo possível"], answer: 1, why: "O solo e a zona decidem o que a cultura precisa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger e terminar a cultura",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inspeção do campo e manejo integrado de pragas",
          minutes: 6,
          goal: "Inspecionar uma cultura todas as semanas e escolher ações de MIP antes de recorrer aos químicos.",
          text: [
            "A FAO descreve o manejo integrado de pragas (MIP) como considerar todos os métodos de controlo de pragas disponíveis e juntar os certos, limitando o uso de pesticidas ao que se justifica. Começa pela prevenção: solo saudável, variedades resistentes, semente limpa, rotação, sementeira na altura certa, higiene do campo (tirar as plantas e os restos infetados) e proteger os inimigos naturais, como as joaninhas e as vespas parasitas.",
            "Inspecione todas as semanas. Atravesse o campo em forma de W ou em ziguezague, observe um número fixo de plantas (por exemplo 10 plantas em 5 sítios) e registe o que vê: estragos da lagarta-do-funil-do-milho no funil do milho, afídeos (piolhos das plantas), moscas-brancas, manchas nas folhas, murchidão, traça-do-tomateiro. Compare com o nível que a extensão indica como aquele em que vale a pena agir.",
            "Use primeiro os controlos sem químicos onde funcionam: apanhar as pragas à mão, o push-pull (atrair e repelir) para o milho e a mapira, armadilhas, produtos à base de nim ou biológicos aprovados para uso, e tirar as plantas infetadas. Onde é usada, a aplicação FAMEWS da FAO permite registar os casos de lagarta-do-funil-do-milho. Peça um diagnóstico a um extensionista ou a uma clínica de plantas quando tiver dúvidas."
          ],
          steps: ["Previna: variedades resistentes, semente limpa, rotação, higiene do campo.", "Inspecione todas as semanas em forma de W; observe um número fixo de plantas.", "Registe as pragas, as doenças e os estragos.", "Compare com os níveis de ação da extensão.", "Use primeiro os controlos sem químicos; peça um diagnóstico quando tiver dúvidas."],
          words: [["MIP", "manejo integrado de pragas: juntar prevenção, vigilância e vários métodos de controlo, com pesticidas só quando se justifica."], ["Inspeção do campo", "percorrer o campo com regularidade para ver se há pragas e doenças."], ["Inimigos naturais", "insetos e outros seres que comem ou atacam as pragas."], ["Nível de ação", "a quantidade de pragas ou de estragos a partir da qual o controlo compensa o custo."]],
          slides: [
            { title: "MIP (FAO)", bullets: ["Considerar todos os métodos e juntar os certos", "Pesticidas só quando se justifica"] },
            { title: "Primeiro prevenir", bullets: ["Variedades resistentes, semente limpa, rotação", "Higiene do campo", "Proteger os inimigos naturais"] },
            { title: "Inspecionar todas as semanas", bullets: ["Forma de W, número fixo de plantas", "Registar o que vê", "Comparar com os níveis de ação"] },
            { title: "Controlar com cabeça", bullets: ["Apanhar à mão, push-pull, armadilhas", "Produtos biológicos aprovados", "Diagnóstico quando tiver dúvidas"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Faça uma ficha semanal de inspeção (data, sítio, plantas observadas, pragas, doenças, estragos, ação) e inspecione um campo ou um canteiro de hortícolas esta semana.",
          youCanNow: "inspecionar uma cultura todas as semanas e escolher ações de MIP, começando pela prevenção e pelos controlos sem químicos.",
          quickCheck: [
            { objective: "O4", q: "Qual destes é um passo de prevenção no MIP?", options: ["Pulverizar todas as semanas por precaução", "Comprar um pesticida mais forte", "Misturar dois pesticidas", "Usar variedades resistentes e tirar as plantas infetadas"], answer: 3, why: "O MIP começa pela prevenção: variedades resistentes, semente limpa, rotação e higiene do campo." },
            { objective: "O4", q: "Encontra algumas lagartas-do-funil-do-milho no seu milho. O que faz primeiro?", options: ["Pulveriza a machamba toda hoje", "Regista e compara com o nível de ação da extensão", "Ignora até à colheita", "Queima o campo"], answer: 1, why: "Os registos da inspeção são comparados com o nível de ação para decidir se o controlo compensa." }
          ]
        },
        {
          objectives: ["O4","O5"],
          title: "Pesticidas com segurança e dentro da lei, e rega das hortícolas",
          minutes: 6,
          goal: "Usar um pesticida com segurança quando se justifica, e planear uma rega eficiente para uma horta.",
          text: [
            "Se for preciso um pesticida, use só produtos registados para essa cultura e essa praga no seu país (no Quénia pelo Pest Control Products Board; na Nigéria pela NAFDAC), comprados num revendedor licenciado, nunca reembalados em garrafas sem rótulo. Leia o rótulo e siga-o à risca: dose, mistura, roupa de proteção, tempo de reentrada e intervalo de segurança antes da colheita, que é o número de dias entre a pulverização e a colheita. Mantenha as crianças e os animais longe, nunca coma nem fume enquanto pulveriza, e deite fora as embalagens com segurança, sem as usar para água ou comida.",
            "As hortícolas precisam de muita água e são sensíveis. A rega gota-a-gota leva a água às raízes, poupa água e mantém as folhas secas, o que reduz as doenças no tomate. Kits de gota-a-gota baratos e regadores servem para pequenas hortas. Regue de manhã cedo ou ao fim da tarde, e regue a fundo e menos vezes em vez de um pouco todos os dias.",
            "Ponha cobertura morta à volta das hortícolas para guardar a humidade e evitar que a terra salte para as folhas. Antes de regar, verifique a humidade do solo com o dedo, alguns centímetros abaixo da superfície. Onde a água é pouca, recolha a água da chuva dos telhados e use reservatórios escavados."
          ],
          steps: ["Use só produtos registados para essa cultura e essa praga, de revendedores licenciados.", "Leia e siga o rótulo: dose, roupa de proteção, reentrada, intervalo de segurança.", "Deite fora as embalagens com segurança.", "Regue as hortícolas nas raízes (gota-a-gota ou regador), de manhã ou ao fim da tarde.", "Ponha cobertura morta e verifique a humidade do solo antes de regar."],
          words: [["Intervalo de segurança antes da colheita", "o número de dias que tem de esperar depois de pulverizar antes de colher."], ["Pesticida registado", "um produto aprovado pela entidade nacional de controlo para um uso indicado."], ["Rega gota-a-gota", "rega por tubos com pequenos furos que deixam cair a água gota a gota junto às raízes."]],
          slides: [
            { title: "Só produtos registados", bullets: ["Quénia: PCPB. Nigéria: NAFDAC", "Revendedor licenciado, embalagem original com rótulo", "Para essa cultura e essa praga"] },
            { title: "Siga o rótulo", bullets: ["Dose e mistura, roupa de proteção", "Tempo de reentrada", "Intervalo de segurança antes de colher"] },
            { title: "Segurança", bullets: ["Nada de crianças nem animais por perto", "Não comer nem fumar enquanto pulveriza", "Nunca reutilizar as embalagens para comida ou água"] },
            { title: "Regue bem as hortícolas", bullets: ["Gota-a-gota ou regador nas raízes", "De manhã ou ao fim da tarde, a fundo e menos vezes", "Cobertura morta; verificar a humidade primeiro"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Pegue em qualquer rótulo de pesticida (de uma loja, da internet ou do seu armazém). Escreva: as culturas e as pragas para que está registado, a dose, a roupa de proteção e o intervalo de segurança antes da colheita. Depois escreva um plano de rega para a sua horta.",
          youCanNow: "usar um pesticida com segurança e dentro da lei quando se justifica, e regar as hortícolas sem desperdício.",
          quickCheck: [
            { objective: "O4", q: "O que é o intervalo de segurança antes da colheita num rótulo de pesticida?", options: ["O tempo para misturar a calda", "Os dias antes da sementeira", "Os dias a esperar entre a pulverização e a colheita", "O prazo de validade da garrafa"], answer: 2, why: "O intervalo de segurança é o número de dias entre a última pulverização e a colheita." },
            { objective: "O5", q: "A sua horta de couve está seca e tem um regador. Quando rega?", options: ["Ao meio-dia, um pouco de hora a hora", "De manhã cedo ou ao fim da tarde, depois de verificar a humidade do solo", "Só depois de as folhas estarem murchas há uma semana", "Nunca; espera pela chuva"], answer: 1, why: "Regar de manhã cedo ou ao fim da tarde, a fundo e só quando o solo está seco, poupa água e é bom para as hortícolas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Colheita e pós-colheita",
          minutes: 5,
          goal: "Colher na altura certa e manusear, separar e guardar os produtos para que mantenham o seu valor.",
          text: [
            "Perde-se muita comida depois da colheita. Colha na maturação certa: o tomate na fase que o seu comprador quer (muitas vezes a mudar de cor, para mercados distantes), as folhas de couve novas e tenras, o milho quando o grão está maduro e seco o suficiente, a mandioca quando as raízes estão prontas e só a quantidade que consegue vender ou transformar depressa, porque as raízes estragam-se em poucos dias.",
            "Manuseie com cuidado: use caixas limpas, e não sacos, para o tomate e os produtos moles; mantenha os produtos à sombra; e colha de manhã, quando está fresco. Separe e classifique por tamanho e qualidade, e tire os produtos danificados para não estragarem os outros. Respeite o intervalo de segurança depois de qualquer pulverização.",
            "Seque bem o grão antes de o guardar: o milho e o amendoim húmidos podem ganhar bolores que produzem aflatoxina, um veneno. Pergunte ao seu comprador ou ao extensionista qual é a humidade a atingir e meça-a se puder. Guarde o grão em celeiros limpos, secos e elevados ou em sacos herméticos (que não deixam entrar ar) para controlar os gorgulhos sem químicos."
          ],
          steps: ["Colha na maturação certa para o seu comprador.", "Colha de manhã, quando está fresco; mantenha os produtos à sombra.", "Use caixas limpas para os produtos moles.", "Separe e classifique; tire os produtos danificados.", "Seque bem o grão; guarde-o em celeiros limpos, secos e elevados ou em sacos herméticos."],
          words: [["Perda pós-colheita", "comida perdida ou estragada entre a colheita e a venda ou o consumo."], ["Classificação", "separar os produtos por tamanho e qualidade."], ["Aflatoxina", "um veneno produzido por bolores no grão e no amendoim húmidos."], ["Saco hermético", "um saco de armazenamento fechado ao ar, que trava os insetos ao cortar-lhes o ar."]],
          slides: [
            { title: "Colha na altura certa", bullets: ["Tomate na fase que o comprador quer", "Couve nova e tenra", "Mandioca: só o que consegue vender depressa"] },
            { title: "Manuseie com cuidado", bullets: ["Manhã fresca, sombra", "Caixas limpas, não sacos", "Separar, classificar, tirar os danificados"] },
            { title: "Guarde o grão com segurança", bullets: ["Secar bem: grão húmido arrisca aflatoxina", "Celeiros limpos, secos e elevados", "Sacos herméticos contra os gorgulhos"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Tarefa final: escreva o seu plano de produção da campanha para uma cultura de campo e uma horta: verificações e análise do solo, preparação e alimentação do solo, semente e espaçamento, datas de sementeira, inspeção semanal e passos de MIP, rega das hortícolas, e colheita, separação, armazenamento e venda.",
          youCanNow: "colher, manusear, separar e guardar os produtos para reduzir as perdas e manter o seu valor.",
          quickCheck: [
            { objective: "O6", q: "O que é a aflatoxina?", options: ["Um adubo", "Um saco de armazenamento", "Um tipo de gorgulho", "Um veneno produzido por bolores no grão húmido"], answer: 3, why: "O milho e o amendoim húmidos podem ganhar bolores que produzem aflatoxina, um veneno." },
            { objective: "O6", q: "Está a colher tomate para vender. Como o transporta?", options: ["Em caixas limpas, à sombra", "Em sacos, ao sol", "Solto e amontoado na carroça", "Num saco junto com os danificados"], answer: 0, why: "As caixas limpas e a sombra protegem os produtos moles; os sacos e o sol pisam-nos e estragam-nos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger e terminar a cultura",
        questions: [
          { objective: "O4", q: "No MIP, os pesticidas são usados:", options: ["Todas as semanas, aconteça o que acontecer", "Nunca, em nenhuma situação", "Só quando se justifica, depois de considerar os outros métodos", "Só nas hortícolas"], answer: 2, why: "O MIP da FAO limita o uso de pesticidas ao que se justifica." },
          { objective: "O4", q: "Como deve inspecionar um campo?", options: ["Olhar só para a beira", "Atravessar em forma de W e observar um número fixo de plantas", "Olhar a partir de casa", "Só depois da colheita"], answer: 1, why: "A forma de W dá uma amostra justa do campo todo." },
          { objective: "O4", q: "O intervalo de segurança antes da colheita é:", options: ["Os dias a esperar entre a pulverização e a colheita", "A altura de semear", "O preço do pesticida", "O tamanho do pulverizador"], answer: 0, why: "Mantém os resíduos nos alimentos em níveis seguros." },
          { objective: "O5", q: "Porque usar rega gota-a-gota no tomate?", options: ["Molha as folhas", "Gasta mais água", "É obrigatória por lei", "Leva a água às raízes e mantém as folhas secas, o que reduz as doenças"], answer: 3, why: "Folhas secas significam menos doenças e menos água desperdiçada." },
          { objective: "O6", q: "Porque secar bem o milho antes de o guardar?", options: ["Para ficar mais pesado", "O grão húmido pode ganhar bolores que produzem aflatoxina", "Os compradores preferem grão molhado", "Para mudar de cor"], answer: 1, why: "A aflatoxina é um veneno perigoso produzido por bolores no grão húmido." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Produção Sustentável de Culturas e Hortícolas",
    questions: [
      { objective: "O1", q: "Uma análise do solo diz-lhe:", options: ["O tempo que vai fazer", "O pH e os níveis de nutrientes", "Os preços das culturas", "Os nomes das pragas"], answer: 1, why: "As análises do solo medem a acidez e os nutrientes." },
      { objective: "O1", q: "Os solos ácidos podem precisar de:", options: ["Mais queimadas", "Sal", "Calcário, se a análise do solo o aconselhar", "Nunca de nada"], answer: 2, why: "A calagem reduz a acidez e liberta os nutrientes." },
      { objective: "O1", q: "O que melhora a saúde do solo?", options: ["Juntar estrume e composto e manter o solo coberto", "Queimar os restos", "Lavrar muitas vezes", "Deixar o solo descoberto"], answer: 0, why: "A matéria orgânica e a cobertura alimentam e protegem o solo." },
      { objective: "O2", q: "Semente certificada é:", options: ["Qualquer grão do mercado", "Semente sem pacote", "Semente guardada há dez anos", "Semente verificada pela autoridade oficial de sementes"], answer: 3, why: "A certificação verifica a variedade e a qualidade." },
      { objective: "O2", q: "Plantas apertadas normalmente:", options: ["Produzem mais", "Disputam a luz, a água e os nutrientes e perdem produção", "Não precisam de adubo", "Resistem a todas as pragas"], answer: 1, why: "O espaçamento certo equilibra o número de plantas e os recursos." },
      { objective: "O2", q: "Quando se devem transplantar as mudas?", options: ["Ao meio-dia, em pleno sol", "Durante uma tempestade", "Depois do endurecimento, de preferência ao fim da tarde, quando está fresco", "Antes de terem folhas"], answer: 2, why: "O tempo fresco reduz o choque do transplante." },
      { objective: "O3", q: "Que culturas juntam azoto ao solo?", options: ["Feijão, feijão-nhemba e amendoim", "Só o milho", "Tomate", "Cebola"], answer: 0, why: "As leguminosas fixam o azoto através das raízes." },
      { objective: "O3", q: "A adubação de cobertura do milho normalmente quer dizer juntar:", options: ["Calcário na sementeira", "Semente", "Só água", "Azoto à cultura que está a crescer"], answer: 3, why: "A cobertura com azoto ajuda o crescimento na fase certa." },
      { objective: "O3", q: "O adubo deve ser colocado:", options: ["Diretamente sobre a semente", "Perto da planta, sem tocar na semente", "Na estrada", "Só nas folhas"], answer: 1, why: "Colocá-lo perto das raízes aproveita-o bem sem queimar a semente." },
      { objective: "O4", q: "Os inimigos naturais são:", options: ["Ervas daninhas", "Pesticidas", "Insetos que comem ou atacam as pragas", "Ladrões"], answer: 2, why: "As joaninhas e as vespas parasitas ajudam a controlar as pragas." },
      { objective: "O4", q: "Um nível de ação é:", options: ["A quantidade de pragas a partir da qual o controlo compensa o custo", "Um tipo de pulverizador", "A altura da colheita", "Um resultado da análise do solo"], answer: 0, why: "Ajuda a evitar pulverizações desnecessárias." },
      { objective: "O4", q: "O push-pull é usado sobretudo em:", options: ["Tomate", "Couve", "Cebola", "Milho e mapira"], answer: 3, why: "O icipe criou-o para as pragas dos cereais, como a broca do colmo e a lagarta-do-funil-do-milho." },
      { objective: "O4", q: "No Quénia, os pesticidas são registados pelo:", options: ["KCAA", "Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "O PCPB regula os produtos de controlo de pragas no Quénia." },
      { objective: "O4", q: "Um pesticida vendido numa garrafa reembalada e sem rótulo:", options: ["É uma pechincha", "Serve se for barato", "Não deve ser comprado nem usado", "É mais seguro"], answer: 2, why: "Sem rótulo não pode saber qual é o produto nem usá-lo com segurança." },
      { objective: "O4", q: "As embalagens vazias de pesticida devem ser:", options: ["Deitadas fora com segurança, nunca reutilizadas para comida ou água", "Usadas para guardar água de beber", "Dadas às crianças", "Atiradas ao rio"], answer: 0, why: "Os resíduos podem envenenar as pessoas e a água." },
      { objective: "O5", q: "A melhor altura para regar as hortícolas é:", options: ["O meio-dia", "Só à noite, com chuva", "Nunca", "De manhã cedo ou ao fim da tarde"], answer: 3, why: "Perde-se menos água com o calor e a evaporação." },
      { objective: "O5", q: "A cobertura morta à volta das hortícolas:", options: ["Seca o solo", "Guarda a humidade e evita que a terra salte para as folhas", "Atrai todas as pragas", "Substitui totalmente a água"], answer: 1, why: "A cobertura morta poupa água e reduz as doenças levadas pelos salpicos de terra." },
      { objective: "O6", q: "Os produtos moles como o tomate devem ser transportados em:", options: ["Sacos apertados", "Só nas mãos", "Caixas limpas", "Sacos de plástico ao sol"], answer: 2, why: "As caixas protegem os produtos moles de serem esmagados." },
      { objective: "O6", q: "Porque colher só a quantidade de mandioca que consegue vender ou transformar depressa?", options: ["As raízes estragam-se em poucos dias depois da colheita", "Os compradores não gostam de mandioca", "A mandioca volta a crescer durante a noite", "É a lei"], answer: 0, why: "As raízes frescas de mandioca estragam-se depressa." },
      { objective: "O6", q: "Os sacos herméticos controlam os gorgulhos:", options: ["Juntando veneno", "Fazendo barulho", "Deixando entrar luz", "Cortando o ar"], answer: 3, why: "Os sacos fechados ao ar deixam os insetos sem oxigénio." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      {
        name: "Verificações do solo",
        objective: "O1",
        notYet: "Não fala de nenhuma verificação nem análise do solo.",
        meets: "Os resultados da verificação no campo estão escritos, com onde e como seria tirada a amostra para a análise do solo.",
        exceeds: "Usa os resultados da análise do solo, ou uma data para a fazer, para orientar o plano."
      },
      {
        name: "Semente, espaçamento e datas",
        objective: "O2",
        notYet: "Falta a origem da semente, o espaçamento ou as datas de sementeira.",
        meets: "Semente certificada ou material limpo, espaçamento recomendado e datas de sementeira para as duas culturas, com a fonte de cada um.",
        exceeds: "Inclui o plano de viveiro e de endurecimento para a hortícola."
      },
      {
        name: "Alimentar o solo",
        objective: "O3",
        notYet: "Só aparece o adubo, ou as doses são adivinhadas.",
        meets: "Matéria orgânica, alguma leguminosa, e a altura e a colocação do adubo, com doses de uma análise do solo ou da extensão.",
        exceeds: "Inclui um plano de composto e uma rotação para a próxima campanha."
      },
      {
        name: "Inspeção e MIP",
        objective: "O4",
        notYet: "Planeia pulverizar com um calendário fixo, sem inspeção.",
        meets: "Uma rotina semanal de inspeção, as principais pragas a vigiar, passos de prevenção e sem químicos, e as regras do rótulo para qualquer pesticida.",
        exceeds: "Indica onde obter um diagnóstico e o nível de ação para uma praga principal."
      },
      {
        name: "Rega",
        objective: "O5",
        notYet: "Não há plano de rega para as hortícolas.",
        meets: "Método de rega, hora do dia, cobertura morta e verificação da humidade do solo.",
        exceeds: "Inclui uma forma de recolher ou poupar água."
      },
      {
        name: "Colheita e armazenamento",
        objective: "O6",
        notYet: "Falta a colheita, a separação ou o armazenamento.",
        meets: "Altura da colheita, manuseamento cuidadoso, separação, secagem e armazenamento, e onde vender.",
        exceeds: "Indica as exigências de qualidade do comprador e como vai acompanhar as perdas."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano da campanha",
      "Alunos que dizem ter feito uma análise do solo, usado semente certificada ou inspecionado todas as semanas na campanha seguinte (inquérito de seguimento)",
      "Mudança nas perdas na colheita e na pós-colheita indicadas pelos alunos ou pelo seu grupo depois de uma campanha",
      "Alunos que começam outro curso de agricultura da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, e um telefone simples",
      "Acesso a um campo ou a uma horta, e uma pá para a verificação do solo",
      "Um rótulo de pesticida verdadeiro e um pacote de semente, se houver",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo no campo e para escrever o plano da campanha"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa escola na machamba: façam juntos o teste inicial e depois a verificação do solo e o percurso de inspeção num campo verdadeiro.",
      "Convide um extensionista ou alguém de uma loja de insumos para dar os espaçamentos, as variedades e as doses de adubo da zona; não dê você as doses.",
      "Não misture nem pulverize pesticidas na aula; mostre um rótulo e pratiquem a leitura.",
      "Avalie o plano da campanha com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
