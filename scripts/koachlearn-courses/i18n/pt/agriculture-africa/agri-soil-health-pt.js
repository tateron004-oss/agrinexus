"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-soil-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const FAO_SOM = { name: "FAO: A importância da matéria orgânica do solo (chave para um solo resistente à seca)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Técnicas de gestão do escoamento da chuva para controlar a erosão", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "Portal FAO TECA/STI: Estratégias mecânicas de conservação do solo para reduzir a erosão", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Organização de Investigação Agrícola e Pecuária do Quénia (KALRO): contacto para análise de solo", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Guia de amostragem e preparação do solo para avaliar a fertilidade", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Instituto de Investigação do Solo (Soil Research Institute), Kwadaso, Kumasi (Gana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "Gestão de nutrientes 4R na agricultura africana: manual de extensão para o uso de fertilizantes", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-pt",
  lang: "pt",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Saúde e Fertilidade do Solo",
  skills: "Ler o seu solo no campo, Tirar uma amostra de solo para análise, Aumentar a matéria orgânica com composto e estrume, Planear rotações e consociações com leguminosas, Travar a erosão com cobertura morta e trabalho em curva de nível, Usar fertilizantes segundo os 4C",
  outcome: "verificar a saúde do seu próprio solo, tirar uma boa amostra para análise em laboratório e escrever um plano de solo para uma época que aumente a matéria orgânica, faça rotação com leguminosas, impeça a chuva de levar o solo e use o fertilizante com a fonte, a dose, a altura e o local certos.",
  about: [
    "Este curso é para pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas e jovens agricultores no Quénia, na Nigéria, no Gana e em toda a África que querem tirar mais da mesma terra. Um solo saudável guarda mais água, alimenta melhor a cultura e devolve cada xelim, naira ou cedi que você gasta em semente e fertilizante.",
    "O Capítulo 1 é sobre conhecer o seu solo: lê-lo com os olhos e as mãos, fazer uma análise de solo como deve ser e aumentar a matéria orgânica com composto e estrume. O Capítulo 2 é sobre mantê-lo saudável época após época: rotações e consociações com leguminosas, cobertura morta e controlo da erosão, e bom uso do fertilizante.",
    "Os solos mudam de um campo para outro. Use este curso junto com os resultados da sua análise de solo e os conselhos do seu extensionista, do instituto de investigação ou da loja de insumos agrícolas, e experimente as práticas novas primeiro num talhão pequeno. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria machamba. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de solo de uma página para um campo da sua machamba (ou um campo de exemplo, como 1 acre de milho e feijão em Kakamega, 2 acres de mandioca em Oyo ou 1 acre de tomate perto de Kumasi): o que a sua verificação do campo encontrou, quando e onde vai fazer uma análise de solo (ou o que a análise disse), como vai juntar matéria orgânica, a sua rotação ou consociação com leguminosas, como vai manter o solo coberto e travar a erosão, e o seu plano de fertilizante escrito como fonte, dose, altura e local.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos agricultores e agricultores em crescimento, trabalhadores agrícolas e jovens agricultores no Quénia, na Nigéria, no Gana e em toda a África que querem tirar mais da mesma terra, com culturas como milho, feijão, mandioca e tomate.",
    startingPoint: "A maioria semeia todas as épocas e usa algum estrume ou fertilizante, muitas vezes por hábito ou por conselho de um vizinho. Poucos fizeram uma verificação do solo no campo, uma análise de solo, composto, um plano de rotação, defesas contra a erosão em curva de nível ou usaram o fertilizante segundo os 4C.",
    gap: "Um solo cansado, ácido ou gasto pela erosão desperdiça o dinheiro gasto em semente e fertilizante e deixa as culturas fracas nos períodos secos. Conhecer o solo e melhorá-lo todas as épocas ajuda os agricultores a guardar mais água, alimentar melhor as culturas e colher mais com cada saco de fertilizante.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo sobre o solo é explicado",
      "Aparelhos: uma pá, um balde e um telefone simples; a maior parte da prática é no campo",
      "Tempo: lições de cerca de 5 minutos, que cabem no meio do trabalho da machamba",
      "Os solos mudam de campo para campo: as doses vêm de uma análise de solo, da extensão ou da investigação, e as práticas novas experimentam-se primeiro num talhão pequeno",
      "Os preços, os locais e os tempos de espera dos laboratórios mudam: os alunos ligam ou confirmam antes de ir"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Num dos seus próprios campos", action: "fazer uma verificação da cor, da textura, das minhocas, das raízes, da água e dos sinais nas plantas e anotar o que mostra", standard: "tratando os sinais nas plantas como pistas a confirmar com uma análise de solo" },
    { id: "O2", condition: "Para um campo", action: "tirar uma amostra de solo da maneira certa e dizer para onde a enviar para análise", standard: "com muitas amostras pequenas misturadas numa só amostra limpa por cada parte do campo" },
    { id: "O3", condition: "Usando restos de culturas, material verde e estrume", action: "fazer uma pilha de composto e planear como juntar matéria orgânica", standard: "sem queimar restos de culturas e sem estrume fresco nas plântulas" },
    { id: "O4", condition: "Para um campo", action: "planear uma rotação de três épocas e uma consociação com leguminosas", standard: "com uma leguminosa no plano e um espaçamento que deixe as duas culturas receber luz" },
    { id: "O5", condition: "Para um campo inclinado ou descoberto", action: "escolher a cobertura morta e as defesas contra a erosão e colocá-las em curva de nível", standard: "com a curva de nível marcada com a ajuda da extensão quando for preciso" },
    { id: "O6", condition: "Para uma cultura", action: "escrever um plano de fertilizante com a fonte, a dose, a altura e o local certos", standard: "com as doses tiradas de uma análise de solo ou de uma recomendação local" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conhecer e alimentar o seu solo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ler o seu solo com os olhos e as mãos",
          minutes: 5,
          goal: "Fazer uma verificação simples do seu solo no campo e anotar o que ela lhe diz.",
          text: [
            "Pode aprender muito sobre o solo com uma pá, as mãos e os olhos. Um solo saudável é escuro, solto em grumos e cheira a terra. Tem minhocas e outros pequenos bichos, as raízes vão fundo e a chuva entra no solo em vez de escorrer. Um solo pobre é pálido ou duro, faz uma crosta depois da chuva, racha muito quando está seco, ou fica sempre molhado e com mau cheiro.",
            "Sinta a textura: molhe uma pequena bola de solo e esfregue-a entre os dedos. O solo arenoso é áspero e desfaz-se; a água passa depressa e leva os nutrientes. O solo argiloso é pegajoso e pode ser enrolado numa fita comprida e fina; guarda água e nutrientes, mas pode ficar encharcado e duro. O solo franco fica no meio e é o mais fácil de cultivar.",
            "Olhe também para as plantas. Folhas de baixo amarelas no milho podem querer dizer pouco azoto. Folhas roxas no milho novo podem querer dizer pouco fósforo. Ervas como a striga (erva-de-bruxa) mostram muitas vezes um solo cansado e pouco fértil. Isto são pistas, não provas: só uma análise de solo lhe diz com certeza."
          ],
          steps: ["Abra um buraco com cerca de uma pá de fundo em três sítios do campo.", "Veja a cor, as camadas, as raízes e se há alguma camada dura.", "Conte as minhocas numa pazada de solo.", "Molhe uma bola de solo e sinta-a: áspera (arenoso), pegajosa (argiloso) ou no meio (franco).", "Depois da chuva, anote onde a água escorre ou fica parada.", "Escreva o que encontrou em cada parte do campo."],
          words: [["Textura do solo", "quanto um solo tem de areia, limo ou argila; decide a rapidez com que a água passa."], ["Solo franco", "um solo com uma boa mistura de areia, limo e argila."], ["Camada endurecida", "uma camada dura debaixo da superfície que as raízes e a água não conseguem atravessar."], ["Striga", "uma erva parasita (erva-de-bruxa) que ataca o milho, a mapira e a mexoeira, comum nos solos pobres."]],
          slides: [
            { title: "Solo saudável", bullets: ["Escuro, solto em grumos, cheira a terra", "Minhocas e raízes fundas", "A chuva entra no solo, não escorre"] },
            { title: "Sinta a textura", bullets: ["Áspero e desfaz-se: arenoso, a água passa depressa", "Pegajoso, faz uma fita: argiloso, guarda água", "No meio: franco, o mais fácil de cultivar"] },
            { title: "Pistas nas plantas (não são provas)", bullets: ["Folhas de baixo do milho amarelas: talvez pouco azoto", "Folhas do milho novo roxas: talvez pouco fósforo", "Muita striga: muitas vezes solo cansado e pobre"] },
            { title: "Verificação do campo", bullets: ["Cave em três sítios", "Olhe, cheire, conte minhocas, sinta a textura", "Veja a água depois da chuva; anote tudo"] }
          ],
          tryIt: "Faça a verificação num dos seus campos: cave em três sítios, sinta a textura, conte as minhocas e escreva uma linha para cada sítio. Tire uma foto de cada buraco com o telefone para comparar na próxima época.",
          youCanNow: "verificar o seu solo no campo e descrever a textura, a vida, a drenagem e os sinais de alerta.",
          quickCheck: [
            { objective: "O1", q: "O que podem indicar folhas de baixo amarelas no milho?", options: ["Água a mais nas folhas", "Sol a mais", "Crescimento saudável", "Azoto a menos"], answer: 3, why: "Folhas de baixo amarelas no milho podem querer dizer pouco azoto; uma análise de solo confirma." },
            { objective: "O1", q: "Depois da chuva, o seu campo faz uma crosta dura e a água escorre. O que escreve na sua verificação?", options: ["Solo saudável; não é preciso mudar nada", "Um sinal de solo pobre, a confirmar com uma análise de solo", "Minhocas a mais", "Solo franco perfeito"], answer: 1, why: "A crosta e a água a escorrer são sinais de solo pobre; uma análise de solo diz com certeza do que ele precisa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fazer uma análise de solo e tirar uma boa amostra",
          minutes: 5,
          goal: "Tirar uma amostra de solo da maneira certa e saber para onde a enviar para análise.",
          text: [
            "Uma análise de solo diz-lhe o que os olhos não veem: quão ácido é o solo (pH) e quanto tem dos nutrientes principais. Muitos solos nas zonas mais chuvosas do Quénia, da Nigéria e do Gana são ácidos, e isso prende os nutrientes longe da cultura; a análise diz-lhe se o calcário ajudaria. Sem análise, pode gastar dinheiro no fertilizante errado.",
            "Onde fazer a análise: no Quénia, a KALRO tem laboratórios de solo (por exemplo o seu laboratório de fertilidade do solo em Kabete, Nairobi) e alguns condados têm os seus próprios laboratórios. No Gana, o CSIR-Soil Research Institute (Instituto de Investigação do Solo), em Kwadaso, Kumasi, faz análises em laboratório. Na Nigéria e noutros sítios, pergunte ao serviço de extensão do seu estado ou condado, a uma universidade agrícola ou a um instituto de investigação. Os preços, os locais e os tempos de espera mudam, por isso ligue ou confirme antes de ir.",
            "O próprio guia da KALRO diz que a amostragem é a maior fonte de erro numa análise de solo. Uma mão-cheia de um só sítio não representa um campo. Tire muitas amostras pequenas pelo campo, misture-as e envie uma amostra misturada e limpa por cada campo ou por cada parte que pareça diferente."
          ],
          steps: ["Escolha um campo (ou uma parte que pareça igual).", "Ande em ziguezague e tire de 10 a 20 amostras pequenas, dos primeiros 15 a 20 cm, com uma pá ou uma sonda limpa.", "Evite sítios estranhos: montes antigos de estrume, cinza, caminhos, formigueiros, faixas de fertilizante.", "Misture bem todas as amostras num balde limpo (não num saco de fertilizante).", "Tire cerca de meio quilo da mistura, seque-a ao ar à sombra e ponha uma etiqueta: nome, campo, data, cultura planeada.", "Leve-a ao laboratório antes da sementeira para os resultados chegarem a tempo."],
          words: [["pH", "um número que mostra quão ácido ou alcalino é o solo; a maioria das culturas gosta dele perto do neutro."], ["Solo ácido", "um solo com pH baixo que prende nutrientes como o fósforo."], ["Calcário", "um produto de rocha moída que torna o solo ácido menos ácido."], ["Amostra composta", "muitas amostras pequenas de um campo misturadas numa só."]],
          slides: [
            { title: "Porquê fazer a análise?", bullets: ["Mostra o pH e os nutrientes principais", "Diz se o calcário ajudaria", "Evita gastar dinheiro no fertilizante errado"] },
            { title: "Onde fazer a análise", bullets: ["Quénia: laboratórios da KALRO (ex. Kabete) e alguns dos condados", "Gana: CSIR-Soil Research Institute, Kumasi", "Noutros sítios: extensão, universidade, instituto de investigação"] },
            { title: "Tire uma boa amostra", bullets: ["Ziguezague, 10 a 20 sítios, primeiros 15 a 20 cm", "Evite montes de estrume, cinza, caminhos, formigueiros", "Misture num balde limpo; envie cerca de meio quilo"] },
            { title: "Etiqueta e altura certa", bullets: ["Nome, campo, data, cultura planeada", "Seque ao ar, à sombra", "Envie antes da sementeira; confirme primeiro o preço e o laboratório"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Encontre o sítio mais perto que analisa solo: ligue ao seu extensionista ou procure a KALRO, o CSIR-SRI ou o instituto de investigação do seu estado. Escreva o nome, o preço e o tempo de espera. Depois marque num desenho do seu campo o caminho em ziguezague que vai fazer para tirar a amostra.",
          youCanNow: "tirar uma amostra de solo misturada como deve ser e saber onde a mandar analisar.",
          quickCheck: [
            { objective: "O2", q: "O que lhe diz o pH do solo?", options: ["Quão ácido é o solo", "Quantas minhocas tem", "A que fundura chegam as raízes", "Quanta chuva caiu"], answer: 0, why: "O pH mostra quão ácido é o solo; um solo ácido prende os nutrientes e pode precisar de calcário." },
            { objective: "O2", q: "Uma parte do seu campo está encharcada e o resto está seco e arenoso. Como tira a amostra?", options: ["Uma mão-cheia do meio", "Mistura a parte molhada e a seca numa só amostra", "Envia uma amostra misturada separada para cada parte que parece diferente", "Tira amostra só perto do monte de estrume"], answer: 2, why: "Cada campo, ou cada parte que parece diferente, tem a sua própria amostra misturada e limpa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Aumentar a matéria orgânica com composto e estrume",
          minutes: 5,
          goal: "Fazer uma pilha de composto e usar o estrume com segurança para aumentar a matéria orgânica do solo.",
          text: [
            "A matéria orgânica são os restos escuros e apodrecidos de plantas e animais no solo. A FAO chama-lhe a chave de um solo resistente à seca: guarda água como uma esponja, alimenta as minhocas e a vida do solo, segura os nutrientes para a chuva não os levar e deixa o solo solto para as raízes crescerem.",
            "Junta-se matéria orgânica deixando os restos das culturas no campo em vez de os queimar, pondo estrume e composto, e semeando leguminosas e culturas de cobertura. Queimar os restos e lavrar vezes sem conta gastam a matéria orgânica.",
            "O composto é fácil de fazer: faça uma pilha ou uma cova com camadas de material seco (caules de milho, capim seco), material verde (ervas frescas, folhas, restos da cozinha) e estrume, com um pouco de terra entre as camadas. Mantenha-a húmida como uma esponja espremida e vire-a a cada duas ou três semanas. Fica pronto em cerca de dois a três meses, quando está escuro, solto e cheira a terra. Deixe o estrume fresco apodrecer antes de o usar; o estrume fresco e quente pode queimar as plântulas."
          ],
          steps: ["Escolha um sítio à sombra perto do campo e da água.", "Ponha uma base de caules grossos para deixar entrar ar.", "Junte camadas: material seco, material verde, estrume, um pouco de terra; repita.", "Regue cada camada para ficar húmida, não encharcada.", "Espete um pau na pilha; se sair morno, está a funcionar.", "Vire a pilha a cada duas ou três semanas.", "Use quando estiver escuro e solto, nas covas ou nas linhas de sementeira."],
          words: [["Matéria orgânica", "material de plantas e animais apodrecido no solo que guarda água e nutrientes."], ["Composto", "restos de plantas e animais apodrecidos usados para alimentar o solo."], ["Restos de culturas", "caules, folhas e palhas que ficam depois da colheita."], ["Cultura de cobertura", "uma cultura semeada sobretudo para cobrir e alimentar o solo."]],
          slides: [
            { title: "Porque a matéria orgânica importa", bullets: ["Guarda água como uma esponja (FAO)", "Alimenta a vida do solo e segura os nutrientes", "Deixa o solo solto para as raízes"] },
            { title: "Junte-a, não a queime", bullets: ["Deixe os restos das culturas; não queime", "Ponha estrume e composto", "Semeie leguminosas e culturas de cobertura"] },
            { title: "Faça composto", bullets: ["Camadas: seco, verde, estrume, um pouco de terra", "Húmido como uma esponja espremida", "Vire a cada duas ou três semanas; pronto em 2 a 3 meses"] },
            { title: "Estrume com segurança", bullets: ["Deixe o estrume fresco apodrecer primeiro", "O estrume fresco e quente pode queimar as plântulas", "Lave as mãos depois de mexer nele"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Comece esta semana uma pilha ou cova de composto com o que tem: caules, ervas, restos da cozinha e estrume. Escreva a data e as camadas que usou, e ponha um lembrete no telefone para a virar daqui a duas semanas.",
          youCanNow: "fazer composto, usar o estrume com segurança e explicar como a matéria orgânica ajuda o seu solo.",
          quickCheck: [
            { objective: "O3", q: "O que vai para uma pilha de composto?", options: ["Só plástico e latas", "Só estrume fresco", "Camadas de material seco, material verde e estrume, com um pouco de terra entre elas", "Só cinza de restos queimados"], answer: 2, why: "O composto faz-se em camadas de material seco, material verde e estrume, mantidas húmidas e viradas." },
            { objective: "O3", q: "Depois de cerca de três meses, o seu composto está escuro, solto e cheira a terra. O que faz?", options: ["Usa-o; está pronto", "Queima-o", "Deita-o fora", "Deixa-o mais dois anos"], answer: 0, why: "O composto está pronto quando está escuro, solto e cheira a terra, depois de cerca de dois a três meses." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Conhecer e alimentar o seu solo",
        questions: [
          { objective: "O1", q: "Molha uma bola de solo e ela é áspera e desfaz-se. Que tipo de solo é, o mais provável?", options: ["Argiloso", "Arenoso", "Franco", "Turfa"], answer: 1, why: "Um solo áspero que se desfaz é arenoso; a água passa depressa e leva os nutrientes." },
          { objective: "O1", q: "O milho novo tem folhas roxas. Qual é o melhor passo a seguir?", options: ["Comprar logo qualquer fertilizante", "Queimar o campo", "Tratar isso como uma pista e confirmar com uma análise de solo", "Arrancar a cultura"], answer: 2, why: "A cor das folhas é uma pista, não uma prova; uma análise de solo diz com certeza." },
          { objective: "O2", q: "Como deve tirar uma amostra de solo de um campo?", options: ["Uma mão-cheia do melhor sítio", "Terra do monte antigo de estrume", "Terra do caminho, onde é fácil cavar", "10 a 20 amostras pequenas em ziguezague, misturadas numa só"], answer: 3, why: "Uma amostra misturada de muitos sítios representa o campo todo; a KALRO diz que a amostragem é a maior fonte de erro." },
          { objective: "O2", q: "No Gana, que instituto faz análises de solo em laboratório?", options: ["O CSIR-Soil Research Institute, em Kumasi", "A federação nacional de futebol", "A agência de meteorologia", "Os correios"], answer: 0, why: "O CSIR-Soil Research Institute, em Kwadaso, Kumasi, faz análises em laboratório." },
          { objective: "O3", q: "O que deve fazer aos caules de milho depois da colheita para melhorar a saúde do solo?", options: ["Queimá-los", "Deixá-los no campo ou fazer composto com eles", "Deitá-los ao rio", "Vendê-los todos, todas as épocas"], answer: 1, why: "Os restos deixados no campo ou postos no composto juntam matéria orgânica; queimá-los gasta-a." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter o solo saudável época após época",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rotação de culturas e consociação com leguminosas",
          minutes: 5,
          goal: "Planear uma rotação de três épocas e uma consociação com leguminosas para um campo.",
          text: [
            "Semear a mesma cultura no mesmo campo todas as épocas gasta sempre os mesmos nutrientes e faz crescer as pragas, as doenças e as ervas dessa cultura. Rotação de culturas quer dizer mudar a cultura de um campo de uma época para a outra, por exemplo milho, depois feijão ou amendoim, depois mapira ou mandioca.",
            "As leguminosas, como o feijão, o feijão-nhemba, o amendoim, a soja e o feijão-bóer, trabalham com bactérias que vivem em pequenos caroços (nódulos) nas raízes para tirar azoto do ar. Parte desse azoto fica nas raízes e nas folhas para a cultura seguinte, sobretudo se deixar os restos no campo.",
            "Consociação quer dizer semear duas culturas juntas, como milho com feijão, mapira com feijão-nhemba, ou mandioca com amendoim. Cobre o solo, reparte o risco e pode dar mais comida no total da mesma terra. Use um espaçamento que deixe as duas culturas receber luz e semeie a leguminosa cedo o suficiente para ela se firmar."
          ],
          steps: ["Faça a lista dos campos que cultiva e do que cresceu em cada um na última época.", "Planeie as próximas três épocas para nenhum campo ter a mesma cultura duas vezes seguidas.", "Ponha uma leguminosa em cada campo pelo menos uma vez em três épocas.", "Escolha um par para consociar, como milho e feijão.", "Deixe os restos das leguminosas no campo depois da colheita."],
          words: [["Rotação de culturas", "mudar a cultura semeada num campo de uma época para a seguinte."], ["Leguminosa", "uma planta como o feijão, o feijão-nhemba ou o amendoim que pode juntar azoto ao solo."], ["Nódulos", "pequenos caroços nas raízes das leguminosas onde as bactérias fixam o azoto do ar."], ["Consociação", "semear duas ou mais culturas juntas no mesmo campo."]],
          slides: [
            { title: "Porquê fazer rotação", bullets: ["A mesma cultura todas as épocas gasta os mesmos nutrientes", "As pragas, as doenças e as ervas aumentam", "Exemplo: milho, depois feijão, depois mapira"] },
            { title: "As leguminosas alimentam o solo", bullets: ["Feijão, feijão-nhemba, amendoim, soja, feijão-bóer", "Os nódulos das raízes tiram azoto do ar", "Deixe os restos para a cultura seguinte ganhar"] },
            { title: "Consociação", bullets: ["Milho + feijão, mapira + feijão-nhemba, mandioca + amendoim", "Cobre o solo e reparte o risco", "Espaçamento para as duas culturas receberem luz"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Desenhe uma tabela simples: os seus campos de lado e as próximas três épocas em cima. Escreva uma cultura em cada quadrado para que cada campo tenha uma leguminosa uma vez e nenhum campo repita uma cultura. Arranque um pé de feijão ou de amendoim e procure os nódulos nas raízes.",
          youCanNow: "planear uma rotação de culturas e uma consociação com leguminosas que alimentem o seu solo.",
          quickCheck: [
            { objective: "O4", q: "O que são os nódulos nas raízes das leguminosas?", options: ["Sinais de doença", "Pequenos caroços onde as bactérias tiram azoto do ar", "Ovos de insetos", "Pedras no solo"], answer: 1, why: "As leguminosas trabalham com bactérias nos nódulos das raízes para tirar azoto do ar." },
            { objective: "O4", q: "Semeia milho e feijão juntos, mas o feijão não recebe luz. O que muda?", options: ["Deixa de semear feijão", "Queima o milho", "Põe mais semente", "Usa um espaçamento que deixe as duas culturas receber luz e semeia o feijão cedo o suficiente"], answer: 3, why: "As consociações precisam de um espaçamento que deixe as duas culturas receber luz, com a leguminosa semeada cedo o suficiente para se firmar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Cobertura morta e travar a erosão",
          minutes: 5,
          goal: "Escolher e colocar a cobertura morta e defesas simples contra a erosão num campo inclinado.",
          text: [
            "Solo descoberto é solo perdido. A chuva forte solta o solo e a água que escorre leva a camada de cima, a mais rica. A cobertura morta, uma camada de restos de culturas, capim seco ou folhas por cima do solo, amacia a chuva, mantém o solo húmido e fresco e alimenta-o quando apodrece. A FAO diz que nos terrenos inclinados é preciso cobrir com restos muito mais terreno para travar a erosão do que nos terrenos planos.",
            "Nos terrenos inclinados, trabalhe atravessando a encosta, nunca a subir e a descer. Semeie e faça camalhões em curva de nível (uma linha à mesma altura de um lado ao outro da encosta). A FAO descreve os camalhões em curva de nível como um bom método para pequenos agricultores com ferramentas manuais ou bois, e as faixas de capim (por exemplo capim-elefante, ou Napier) em curva de nível como uma alternativa barata aos terraços; o capim também pode alimentar o gado.",
            "Nos terrenos mais inclinados, as linhas de pedras, os diques em curva de nível e os terraços em degrau (como os terraços fanya juu no Quénia) seguram o solo e a água. Dão trabalho a construir e a manter, e linhas mal marcadas podem piorar a erosão, por isso peça ao seu extensionista para ajudar a marcar a curva de nível."
          ],
          steps: ["Ande pelo campo depois da chuva e marque onde a água corre e o solo é levado.", "Marque as curvas de nível ao longo da encosta com um nível simples em A ou de mangueira com água, ou com a ajuda da extensão.", "Semeie, faça camalhões e sache ao longo das curvas de nível.", "Plante faixas de capim ou faça linhas de pedras ou diques ao longo de algumas curvas de nível.", "Cubra o solo entre as linhas com cobertura morta.", "Verifique e repare depois de cada chuva forte."],
          words: [["Cobertura morta", "uma camada de restos, capim ou folhas espalhada por cima do solo."], ["Erosão", "o solo a ser levado pela água ou pelo vento."], ["Curva de nível", "uma linha ao longo de uma encosta em que todos os pontos estão à mesma altura."], ["Terraço", "um degrau plano cortado numa encosta para segurar o solo e a água."]],
          slides: [
            { title: "Solo descoberto é solo perdido", bullets: ["A chuva solta o solo; a água que escorre leva-o", "A cobertura morta amacia a chuva e mantém o solo húmido", "As encostas precisam de mais cobertura do solo"] },
            { title: "Trabalhe atravessando a encosta", bullets: ["Nunca lavre a subir e a descer", "Faça camalhões e semeie em curva de nível", "Faixas de capim: baratas, e dão comida ao gado"] },
            { title: "Terrenos mais inclinados", bullets: ["Linhas de pedras, diques em curva de nível, terraços", "Marque as linhas com cuidado; peça ajuda à extensão", "Repare depois da chuva forte"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Depois da próxima chuva, ande pelo seu campo e marque num desenho onde a água corre e o solo é levado. Escolha uma defesa (cobertura morta, camalhões em curva de nível, faixa de capim ou linha de pedras) para o pior sítio e escreva quando a vai fazer.",
          youCanNow: "ver a erosão na sua machamba e escolher a cobertura morta e as defesas em curva de nível para a travar.",
          quickCheck: [
            { objective: "O5", q: "O que é uma curva de nível?", options: ["Uma linha a direito, encosta acima", "Uma vedação", "Uma estrada", "Uma linha à mesma altura ao longo de uma encosta"], answer: 3, why: "Uma curva de nível é uma linha à mesma altura ao longo da encosta; os camalhões e as faixas de capim seguem-na." },
            { objective: "O5", q: "Quer fazer terraços fanya juu num campo muito inclinado. O que faz primeiro?", options: ["Pede ao seu extensionista para ajudar a marcar a curva de nível", "Cava a direito, a subir e a descer a encosta", "Começa em qualquer sítio e acerta depois", "Tira primeiro todo o capim"], answer: 0, why: "Linhas mal marcadas podem piorar a erosão, por isso peça ajuda para marcar a curva de nível." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fertilizante: a fonte, a dose, a altura e o local certos",
          minutes: 6,
          goal: "Escrever um plano de fertilizante para uma cultura usando os 4C.",
          text: [
            "As culturas precisam de azoto (N), fósforo (P) e potássio (K), e de quantidades menores de outros nutrientes. O fertilizante mineral dá-os depressa e em quantidades conhecidas. A ideia dos 4C (em inglês \"4R\"), usada pela extensão em toda a África, ajuda a tirar o máximo de cada saco: a fonte certa, na dose certa, na altura certa e no local certo.",
            "Fonte certa: o produto que dá o que a sua análise de solo diz que falta (por exemplo um fertilizante de fósforo na sementeira, um fertilizante de azoto para a adubação de cobertura, e calcário se o solo for ácido). Dose certa: a quantidade que a sua análise de solo e a recomendação local indicam para a sua cultura e a colheita que quer; mais nem sempre é melhor e desperdiça dinheiro. Altura certa: quando a cultura precisa, por exemplo a adubação de cobertura do milho com azoto quando ele chega mais ou menos ao joelho, com o solo húmido. Local certo: perto das raízes, como na cova de sementeira ou numa faixa ao lado da linha, sem tocar na semente, e tapado para a chuva não o levar.",
            "Use o fertilizante junto com matéria orgânica; os dois funcionam melhor juntos do que cada um sozinho. Compre sacos fechados a vendedores de insumos registados e leia o rótulo. Um assistente de IA no telefone pode ajudar a perceber o relatório da análise de solo com palavras simples, mas as doses vêm do laboratório, do seu extensionista ou da recomendação oficial para a sua zona."
          ],
          steps: ["Leia a sua análise de solo ou a recomendação local para a cultura.", "Fonte: escreva que produto dá cada nutriente que falta (e calcário, se for preciso).", "Dose: escreva a quantidade por acre ou por hectare que a recomendação indica.", "Altura: marque no calendário as datas da sementeira e da adubação de cobertura.", "Local: planeie pô-lo na cova ou numa faixa, sem tocar na semente, e tapá-lo.", "Compre sacos fechados a um vendedor de insumos registado; guarde o recibo."],
          words: [["NPK", "azoto (N), fósforo (P) e potássio (K), os três nutrientes principais das culturas."], ["4C", "fonte certa, dose certa, altura certa e local certo para o fertilizante (em inglês \"4R\")."], ["Adubação de cobertura", "pôr fertilizante, normalmente azoto, numa cultura que já está a crescer."], ["Vendedor de insumos", "uma loja que vende semente, fertilizante e outros insumos agrícolas."]],
          slides: [
            { title: "Os 4C", bullets: ["Fonte certa: o que falta ao seu solo", "Dose certa: a quantidade recomendada", "Altura certa: quando a cultura precisa", "Local certo: perto das raízes, tapado"] },
            { title: "Exemplo: milho", bullets: ["Fertilizante de fósforo na cova de sementeira, sem tocar na semente", "Adubação de cobertura com azoto mais ou menos à altura do joelho, solo húmido", "Calcário se a análise disser que o solo é ácido"] },
            { title: "Tire proveito do seu dinheiro", bullets: ["Mais nem sempre é melhor", "Junte composto e estrume", "Sacos fechados de vendedores de insumos registados"] },
            { title: "A IA pode explicar, não receitar", bullets: ["Peça a uma IA no telefone para explicar o relatório com simplicidade", "As doses vêm do laboratório ou do extensionista"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Tarefa final: escreva o seu plano de solo de uma página para um campo. Inclua o que a verificação do campo encontrou, o seu plano de análise de solo ou os resultados, como vai juntar matéria orgânica, a sua rotação ou consociação, como vai travar a erosão, e uma linha de fertilizante para cada nutriente: fonte, dose, altura e local.",
          youCanNow: "usar o fertilizante segundo os 4C e montar um plano de solo completo para uma época no seu campo.",
          quickCheck: [
            { objective: "O6", q: "O que quer dizer \"fonte certa\" nos 4C?", options: ["O saco mais barato da loja", "O saco com o rótulo mais vistoso", "O produto que dá o que a sua análise de solo diz que falta", "Qualquer fertilizante que um vizinho usou"], answer: 2, why: "A fonte certa dá os nutrientes que a sua análise de solo diz que faltam." },
            { objective: "O6", q: "Um vendedor oferece fertilizante barato de um saco aberto sem rótulo. O que faz?", options: ["Compra porque é barato", "Compra antes sacos fechados e com rótulo a um vendedor de insumos registado", "Mistura-o com o seu fertilizante", "Compra o dobro"], answer: 1, why: "Compre sacos fechados a vendedores de insumos registados e leia o rótulo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter o solo saudável época após época",
        questions: [
          { objective: "O4", q: "Porque é que as leguminosas, como o feijão, ajudam a cultura seguinte?", options: ["Matam todas as ervas", "As suas raízes trabalham com bactérias para juntar azoto", "Tornam o solo mais ácido", "Não precisam de chuva"], answer: 1, why: "Os nódulos das raízes fixam o azoto do ar; parte fica no solo para a cultura seguinte." },
          { objective: "O4", q: "Que plano é uma boa rotação de culturas?", options: ["Milho, depois feijão, depois mapira", "Milho, depois milho, depois milho", "Tomate depois de tomate todas as épocas", "Deixar o campo descoberto uma época sim, outra não"], answer: 0, why: "Mudar de cultura e incluir uma leguminosa quebra o ciclo das pragas e alimenta o solo." },
          { objective: "O5", q: "Num campo inclinado, como deve lavrar e semear?", options: ["A direito, a subir e a descer a encosta", "Em círculos", "Atravessando a encosta, em curva de nível", "Só no cimo"], answer: 2, why: "Trabalhar em curva de nível abranda a água que escorre e segura o solo no lugar." },
          { objective: "O6", q: "O que quer dizer \"altura certa\" para a adubação de cobertura do milho com azoto?", options: ["Sempre que tiver dinheiro a sobrar", "Antes de comprar a semente", "Depois da colheita", "Quando a cultura precisa, mais ou menos à altura do joelho, com o solo húmido"], answer: 3, why: "O azoto é mais bem aproveitado quando a cultura a crescer precisa dele e o solo está húmido." },
          { objective: "O6", q: "Qual é o local certo para o fertilizante da sementeira?", options: ["Por cima da semente", "Perto das raízes, sem tocar na semente, e tapado", "Espalhado na estrada", "Na pilha de composto"], answer: 1, why: "Pôr o fertilizante perto das raízes, tapado e sem tocar na semente, aproveita-o melhor e evita queimar a semente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Saúde e Fertilidade do Solo",
    questions: [
      { objective: "O1", q: "Qual é um sinal de solo saudável?", options: ["Pálido e duro, com crosta", "Escuro, solto, com minhocas", "Sempre encharcado", "A chuva escorre logo"], answer: 1, why: "Um solo escuro e solto, com minhocas, é saudável." },
      { objective: "O1", q: "Um solo pegajoso que se enrola numa fita comprida é sobretudo:", options: ["Areia", "Cascalho", "Argila", "Cinza"], answer: 2, why: "Um solo pegajoso que faz uma fita tem muita argila." },
      { objective: "O1", q: "Um campo tem muita striga (erva-de-bruxa). Isto é muitas vezes sinal de:", options: ["Solo cansado e pouco fértil", "Composto a mais", "Solo perfeito", "Sombra a mais"], answer: 0, why: "A striga é comum nos solos pobres e cansados." },
      { objective: "O2", q: "O que lhe diz uma análise de solo em laboratório que os seus olhos não veem?", options: ["A cor do solo", "Quantas minhocas há", "Por onde a água corre", "O pH e os níveis de nutrientes"], answer: 3, why: "Uma análise de solo mede a acidez e os nutrientes." },
      { objective: "O2", q: "No Quénia, que instituto nacional tem laboratórios de análise de solo?", options: ["KALRO", "Kenya Power", "Kenya Airways", "O Kenya Wildlife Service"], answer: 0, why: "A KALRO, a Organização de Investigação Agrícola e Pecuária do Quénia, tem laboratórios de solo, como o de Kabete." },
      { objective: "O2", q: "Quando tira uma amostra de solo, que sítio deve evitar?", options: ["O meio do campo", "Um ponto do ziguezague", "A beira de uma linha de sementeira", "Um monte antigo de estrume ou de cinza"], answer: 3, why: "Os sítios estranhos dão uma imagem falsa do campo." },
      { objective: "O2", q: "Onde deve pôr as amostras de solo para as misturar?", options: ["Num saco velho de fertilizante", "Num balde limpo", "Numa embalagem usada de químicos", "No bolso"], answer: 1, why: "Um balde limpo mantém a amostra livre de fertilizante ou de químicos que estragariam o resultado." },
      { objective: "O3", q: "Segundo a FAO, a matéria orgânica do solo é a chave porque:", options: ["Torna o solo mais duro", "Tira todos os nutrientes", "Guarda água e nutrientes como uma esponja", "Impede as raízes de crescer"], answer: 2, why: "A matéria orgânica guarda água e nutrientes e alimenta a vida do solo." },
      { objective: "O3", q: "Quão húmida deve estar uma pilha de composto?", options: ["Seca como um osso", "Inundada de água", "Húmida como uma esponja espremida", "Não importa"], answer: 2, why: "O composto precisa de humidade sem estar encharcado." },
      { objective: "O3", q: "Porque deve deixar o estrume fresco apodrecer antes de o usar perto das plântulas?", options: ["O estrume fresco e quente pode queimar as plântulas", "O estrume apodrecido é mais pesado", "O estrume fresco não tem nutrientes", "É lei em todo o lado"], answer: 0, why: "O estrume fresco pode ser forte e quente demais para as plantas novas." },
      { objective: "O3", q: "Que prática gasta a matéria orgânica do solo?", options: ["Pôr composto", "Queimar os restos das culturas", "Semear leguminosas", "Pôr cobertura morta"], answer: 1, why: "Queimar destrói os restos que iam alimentar o solo." },
      { objective: "O4", q: "Qual é uma leguminosa?", options: ["Milho", "Mapira", "Mandioca", "Feijão-nhemba"], answer: 3, why: "O feijão-nhemba é uma leguminosa que pode juntar azoto ao solo." },
      { objective: "O4", q: "Semear milho e feijão juntos no mesmo campo chama-se:", options: ["Consociação", "Calagem", "Terraceamento", "Adubação de cobertura"], answer: 0, why: "Semear duas culturas juntas é consociação." },
      { objective: "O4", q: "Porquê fazer rotação em vez de semear a mesma cultura todas as épocas?", options: ["Para gastar mais fertilizante", "Para dificultar a sacha", "Para quebrar o aumento das pragas e doenças e equilibrar os nutrientes", "Porque a lei obriga"], answer: 2, why: "A rotação quebra o ciclo das pragas e impede que uma cultura gaste sempre os mesmos nutrientes." },
      { objective: "O5", q: "O que faz a cobertura morta?", options: ["Deixa o solo mais quente e seco", "Mata as minhocas", "Substitui todo o fertilizante", "Amacia a chuva, mantém o solo húmido e alimenta-o"], answer: 3, why: "A cobertura morta protege e alimenta o solo." },
      { objective: "O5", q: "Uma maneira barata de abrandar a erosão numa encosta suave, que também pode alimentar o gado, é:", options: ["Faixas de capim em curva de nível", "Lavrar a subir e a descer a encosta", "Queimar o campo", "Tirar todas as plantas"], answer: 0, why: "A FAO descreve as faixas de capim como uma alternativa barata aos terraços." },
      { objective: "O5", q: "Porque pedir a um extensionista para ajudar a marcar as curvas de nível?", options: ["Não é nada preciso", "As curvas de nível têm de ser pintadas", "Linhas mal marcadas podem piorar a erosão", "Os extensionistas são os donos da terra"], answer: 2, why: "Linhas que não estão bem niveladas podem juntar a água num canal e aumentar a erosão." },
      { objective: "O6", q: "Qual destes NÃO é um dos 4C do uso de fertilizante?", options: ["Fonte certa", "Dose certa", "Local certo", "Cor certa"], answer: 3, why: "Os 4C são fonte, dose, altura e local." },
      { objective: "O6", q: "De onde deve vir a dose de fertilizante para a sua cultura?", options: ["De um palpite", "Da sua análise de solo e da recomendação local", "Do que o seu vizinho usou", "Do maior saco da loja"], answer: 1, why: "As doses devem servir para o seu solo e seguir a recomendação oficial." },
      { objective: "O6", q: "Pergunta a um assistente de IA no telefone sobre a sua análise de solo. Qual é a maneira certa de o usar?", options: ["Para explicar o relatório com palavras simples e depois confirmar as doses com o laboratório ou a extensão", "Para escolher as doses de fertilizante em vez do laboratório", "Para lhe enviar os seus dados do banco", "Para substituir a análise de solo"], answer: 0, why: "A IA pode explicar, mas as doses vêm do laboratório, do extensionista ou da recomendação oficial." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 3, 5, 7, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique outra vez.",
    criteria: [
      { name: "Verificação do campo e análise de solo", objective: "O2", notYet: "Não há verificação do campo, ou não há plano para uma análise de solo.", meets: "Os resultados da verificação do campo estão escritos, com quando e onde vai ser feita uma análise de solo, ou o que ela disse.", exceeds: "Usa os resultados da análise de solo para orientar o resto do plano." },
      { name: "Matéria orgânica", objective: "O3", notYet: "Não junta matéria orgânica, ou queima os restos.", meets: "Um plano para guardar os restos e pôr composto ou estrume apodrecido, com datas.", exceeds: "Inclui uma pilha de composto já começada na machamba." },
      { name: "Rotação e leguminosas", objective: "O4", notYet: "A mesma cultura todas as épocas, sem leguminosa.", meets: "Uma rotação de três épocas ou uma consociação com leguminosas com um espaçamento sensato.", exceeds: "Uma rotação e uma consociação, com os restos deixados no campo." },
      { name: "Cobertura e erosão", objective: "O5", notYet: "O solo fica descoberto, ou trabalha-se a subir e a descer a encosta.", meets: "Cobertura morta ou outra cobertura, e defesas contra a erosão em curva de nível onde o campo é inclinado.", exceeds: "Diz quem vai ajudar a marcar a curva de nível e como as defesas vão ser mantidas." },
      { name: "Fertilizante segundo os 4C", objective: "O6", notYet: "O fertilizante aparece sem dizer de onde vem a dose, nem a altura, nem o local.", meets: "Fonte, dose, altura e local escritos para cada produto, com as doses tiradas de uma análise de solo ou de uma recomendação local.", exceeds: "Junta o fertilizante com matéria orgânica e diz de onde veio a dose." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de solo",
      "Alunos que dizem ter feito uma análise de solo, começado composto ou semeado uma leguminosa dentro de uma época (inquérito de seguimento)",
      "Mudança na colheita ou nos gastos com fertilizante relatada pelos alunos ou pelo seu grupo depois de uma época",
      "Alunos que começam outro curso de agricultura da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Uma pá, um balde limpo e um caderno",
      "Um campo para verificar, de preferência o do próprio aluno",
      "Um telefone simples para ligar a um laboratório de solo ou ao serviço de extensão",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo no campo e para escrever o plano de solo"
    ],
    facilitatorNotes: [
      "Num grupo de agricultores ou numa escola na machamba: façam o teste inicial juntos e depois façam a verificação do campo e o teste da textura num campo verdadeiro.",
      "Pratiquem juntos a recolha de uma amostra de solo misturada, e encontre antes da sessão o laboratório mais perto e o preço atual.",
      "Façam em grupo uma pequena pilha de composto para mostrar as camadas.",
      "Não dê você mesmo doses de fertilizante; convide um extensionista ou use a recomendação local.",
      "Avalie o plano de solo com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
