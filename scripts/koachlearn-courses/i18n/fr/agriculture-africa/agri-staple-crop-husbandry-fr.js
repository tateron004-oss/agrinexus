"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-staple-crop-husbandry.js). See scripts/koachlearn-courses/README.md, "Translations".

const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS, service d'inspection phytosanitaire du Kenya) : certification des semences et liste nationale des variétés", url: "https://www.kephis.go.ke" };
const NASC = { name: "National Agricultural Seed Council (NASC, conseil national des semences agricoles du Nigeria) : certification des semences", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, institut de recherche agricole et animale du Kenya)", url: "https://www.kalro.org" };
const IITA = { name: "Institut international d'agriculture tropicale (IITA)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (siège à Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA : Une équipe de l'IITA se mobilise contre les virus qui détruisent le manioc en Afrique (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT : Comprendre et prévenir la transmission par les semences de la nécrose létale du maïs (MLN) en Afrique", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS avec AfricaRice : Variation génétique de la résistance à la pyriculariose chez le riz d'Afrique de l'Ouest (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Pest Control Products Board (PCPB, Kenya) : produits homologués", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria) : produits agrochimiques homologués", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "Gestion des éléments nutritifs selon les 4B dans l'agriculture africaine : manuel de vulgarisation sur la gestion des engrais", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-fr",
  lang: "fr",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Conduite moderne des cultures : maïs, riz, manioc et légumineuses",
  skills: "Choisir les variétés et les semences certifiées, Calculer la densité de plantation et les besoins en semences à partir des écartements, Planifier la préparation du sol, la fertilisation et le désherbage, Reconnaître la nécrose létale du maïs, les viroses du manioc et la pyriculariose du riz, Juger le moment de la récolte et calculer le rendement par hectare et par acre",
  outcome: "écrire un plan de production de saison pour une culture vivrière de base (maïs, riz, manioc ou une légumineuse) dans votre propre champ : la variété et la semence, la densité de plantation et les besoins en semences, un calendrier daté pour la préparation du sol, le semis, la fertilisation et le désherbage, les principales maladies à surveiller et quoi faire, et un objectif de rendement par hectare et par acre.",
  about: [
    "Ce cours s'adresse aux petits producteurs et aux producteurs commerciaux en croissance, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation qui cultivent les aliments de base qui nourrissent l'Afrique : maïs, riz, manioc, haricot, niébé, arachide et soja. Les exemples viennent du Kenya, du Nigeria, du Ghana et de la Côte d'Ivoire.",
    "Le chapitre 1 porte sur un bon départ de la culture : choisir une variété de votre institut national de recherche et acheter des semences certifiées ou des boutures saines, préparer le sol, calculer combien de plantes il vous faut et combien de semences acheter, et planifier la fertilisation et le désherbage. Le chapitre 2 porte sur la protection et la mesure de la culture : reconnaître la nécrose létale du maïs, la mosaïque et la striure brune du manioc et la pyriculariose du riz, savoir quand récolter, et calculer votre rendement par hectare et par acre.",
    "L'analyse de sol et les engrais sont enseignés dans « Santé et fertilité du sol », et le stockage dans « Manutention et stockage après récolte » : ce cours vous renvoie donc à eux au lieu de les répéter. Les variétés, les écartements et les doses changent selon la zone : utilisez donc ce cours avec votre agent de vulgarisation et votre institut de recherche. Un court contrôle rapide suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan de production pour une culture de base dans votre propre champ : la taille du champ en hectares et en acres, la variété choisie et l'endroit où vous achèterez des semences certifiées ou des boutures saines, l'écartement avec votre calcul de la densité de plantation et des besoins en semences ou en boutures, un calendrier daté (préparation du sol, semis, engrais selon votre analyse de sol ou la vulgarisation, chaque désherbage), les deux principales maladies à surveiller avec votre première réponse pour chacune, la façon dont vous jugerez le moment de la récolte, et un objectif de rendement par hectare et par acre avec vos calculs.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits producteurs et producteurs commerciaux en croissance, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation de toute l'Afrique qui cultivent le maïs, le riz, le manioc et les légumineuses (haricot, niébé, arachide, soja), d'un demi-acre à quelques hectares.",
    startingPoint: "Ils cultivent depuis des années, souvent avec des semences recyclées ou des boutures partagées, un semis à la volée ou des écartements irréguliers, un désherbage tardif et presque aucun relevé du rendement. Beaucoup ne connaissent ni leur densité de plantation, ni la variété qu'ils ont, ni la façon de calculer le rendement par hectare ou par acre.",
    gap: "Dans beaucoup d'exploitations africaines, les rendements des cultures de base sont bien en dessous de ce que peuvent donner des variétés améliorées et une bonne conduite. Les apprenants doivent choisir une variété adaptée et une semence saine, semer la bonne densité, fertiliser et désherber à temps, repérer les maladies qui détruisent les cultures, récolter au bon moment et mesurer leur rendement pour voir ce qui marche.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants ont l'anglais ou le français comme seconde langue",
      "Calcul : multiplications et divisions simples avec la calculatrice du téléphone ; chaque calcul est montré étape par étape",
      "Appareils : un téléphone simple avec calculatrice ; un mètre ruban ou une corde marquée et une balance aident",
      "Les variétés, les écartements et les doses d'engrais changent selon la zone et avec la sortie de nouvelles variétés ; les apprenants consultent la liste nationale des variétés et leur agent de vulgarisation",
      "La fertilité est enseignée dans « Santé et fertilité du sol » ; ce cours ne couvre que ce qui change pour chaque culture"
    ],
    prerequisites: "Aucun, mais il est fortement conseillé de suivre « Santé et fertilité du sol » avant ce cours ou en même temps."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour une culture de base que vous ferez la saison prochaine", action: "choisir une variété de votre institut national de recherche ou de la liste des variétés et citer une source agréée de semences certifiées ou de boutures saines", standard: "en vérifiant l'étiquette, le scellé ou la source avant de payer" },
    { id: "O2", condition: "À partir d'un écartement et de la taille de votre champ", action: "calculer la densité de plantation par hectare et par acre et les semences ou boutures nécessaires", standard: "en montrant chaque étape du calcul" },
    { id: "O3", condition: "Pour la culture et la date de semis que vous avez choisies", action: "programmer la préparation du sol, le semis, la fertilisation et le désherbage sur un calendrier daté", standard: "avec le désherbage pendant les premières semaines critiques de la culture" },
    { id: "O4", condition: "À partir des signes sur une plante ou un champ malade", action: "reconnaître la nécrose létale du maïs, la mosaïque du manioc, la striure brune du manioc ou la pyriculariose du riz et choisir la première réponse", standard: "en associant chaque maladie à la bonne première mesure" },
    { id: "O5", condition: "En fin de saison", action: "juger quand la culture est prête et calculer le rendement par hectare et par acre à partir d'une récolte pesée", standard: "en utilisant la bonne surface et en montrant vos calculs" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Bien démarrer la culture",
      lessons: [
        {
          title: "Choisir une variété et acheter des semences certifiées",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir une variété adaptée à votre zone et citer une source agréée de semences certifiées ou de boutures saines.",
          text: [
            "Une variété est un type de la culture sélectionné pour certains caractères : maturité précoce ou tardive, tolérance à la sécheresse, résistance aux maladies, couleur du grain ou qualité à la cuisson. Les instituts nationaux de recherche testent et diffusent des variétés pour chaque zone : le KALRO au Kenya, les instituts de recherche du Nigeria qui travaillent avec l'IITA (Institut international d'agriculture tropicale), le CSIR-Crops Research Institute au Ghana et le CNRA en Côte d'Ivoire. L'IITA travaille sur le manioc, le maïs, le niébé et le soja, et AfricaRice, basé à Abidjan, sur le riz. Demandez à votre agent de vulgarisation quelles variétés sont conseillées pour votre zone, votre pluviométrie et votre marché.",
            "Choisissez selon vos conditions : des variétés précoces pour les saisons des pluies courtes ou les zones sèches, des variétés tolérantes ou résistantes là où une maladie est fréquente (par exemple la nécrose létale du maïs ou la striure brune du manioc), et ce que veulent les acheteurs (maïs blanc ou jaune, riz à étuver, manioc doux ou amer).",
            "Une semence certifiée est une semence contrôlée par l'autorité nationale des semences pour sa pureté et sa germination. Au Kenya, le KEPHIS certifie les semences et publie la liste nationale des variétés, et les sachets certifiés portent une étiquette KEPHIS que vous pouvez vérifier. Au Nigeria, le National Agricultural Seed Council (NASC) certifie les semences. Achetez des sachets scellés et étiquetés chez un distributeur agréé. La semence de maïs hybride doit être rachetée neuve à chaque saison, car le rendement baisse si vous ressemez son grain. Les variétés à pollinisation libre (OPV) et les légumineuses peuvent être gardées quelques saisons si vous choisissez des graines propres sur des plantes saines. Pour le manioc, prenez des boutures saines chez un multiplicateur contrôlé ou dans un champ sain, jamais dans un champ atteint de mosaïque ou de striure brune. Pour le soja, renseignez-vous sur un inoculum (rhizobium) là où la vulgarisation le conseille."
          ],
          steps: ["Demandez à la vulgarisation quelles variétés sont conseillées pour votre zone et votre pluviométrie.", "Choisissez selon la maturité, la résistance aux maladies et ce que veulent les acheteurs.", "Vérifiez la variété sur la liste nationale quand elle existe (par exemple celle du KEPHIS au Kenya).", "Achetez des semences certifiées, scellées et étiquetées chez un distributeur agréé ; vérifiez la date et l'étiquette.", "Pour le manioc, prenez des boutures saines chez un multiplicateur contrôlé ou dans un champ sain."],
          words: [["Variété", "un type de culture sélectionné pour certains caractères, comme la maturité précoce ou la résistance aux maladies."], ["Semence certifiée", "une semence contrôlée par l'autorité nationale des semences pour sa pureté et sa germination."], ["Hybride", "une semence issue du croisement de deux lignées parentales ; elle rend bien mais doit être rachetée neuve à chaque saison."], ["OPV", "variété à pollinisation libre : une semence qu'on peut garder et ressemer quelques saisons si on la garde propre."], ["Inoculum", "un produit contenant des bactéries utiles qui aident les légumineuses comme le soja à fixer l'azote."]],
          slides: [
            { title: "Les variétés viennent des instituts de recherche", bullets: ["Kenya : KALRO ; Ghana : CSIR-Crops Research Institute", "Côte d'Ivoire : CNRA ; riz : AfricaRice", "Manioc, niébé, soja, maïs : IITA"] },
            { title: "Choisir selon vos conditions", bullets: ["Maturité précoce pour les saisons courtes ou sèches", "Résistance aux maladies locales", "Ce que veulent vos acheteurs"] },
            { title: "Semences certifiées", bullets: ["Kenya : étiquette KEPHIS vérifiable", "Nigeria : certification du NASC", "Scellé, étiqueté, distributeur agréé"] },
            { title: "Hybrides, OPV et boutures", bullets: ["Maïs hybride : racheter chaque saison", "OPV et légumineuses : garder des graines propres quelques saisons", "Manioc : boutures saines, jamais d'un champ malade"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Pour une culture de base que vous ferez la saison prochaine, demandez à votre agent de vulgarisation ou à votre vendeur d'intrants deux variétés conseillées. Notez leur maturité, leur résistance aux maladies et où acheter des semences certifiées ou des boutures saines. Si vous êtes au Kenya, vérifiez la variété et le distributeur sur les listes du KEPHIS.",
          youCanNow: "choisir une variété adaptée à votre zone et acheter des semences certifiées ou des boutures saines auprès d'une source agréée.",
          quickCheck: [
            { objective: "O1", q: "La saison passée, vous avez semé du maïs hybride. Pouvez-vous ressemer le grain récolté ?", options: ["Oui, il rendra pareil", "Oui, si vous le semez plus serré", "Non, le rendement baisse ; achetez une nouvelle semence hybride certifiée", "Seulement si vous le trempez dans l'eau"], answer: 2, why: "La semence hybride perd sa vigueur à la génération suivante, il faut donc une semence neuve à chaque saison." },
            { objective: "O1", q: "Le manioc de votre voisin a des feuilles avec une mosaïque jaune. Il vous propose des boutures. Que faites-vous ?", options: ["Les prendre ; les boutures sont gratuites", "Refuser et prendre des boutures saines chez un multiplicateur contrôlé ou dans un champ sain", "Les prendre et les planter près de la route", "Ne prendre que les boutures du haut"], answer: 1, why: "Les virus du manioc voyagent dans les boutures, donc un champ malade transmet la maladie au vôtre." }
          ]
        },
        {
          title: "Préparation du sol et densité de plantation",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculer le nombre de plantes par hectare et par acre à partir d'un écartement, et les semences ou boutures nécessaires.",
          text: [
            "Préparez le sol selon la culture. Défrichez sans brûler, et gardez les résidus comme couverture quand vous le pouvez. Le maïs, le haricot et l'arachide ont besoin d'un lit de semence ferme avec de la terre fine autour de la graine ; le travail minimum du sol ou les poquets (zaï) marchent dans beaucoup de zones. Au Nigeria et au Ghana, le manioc est souvent planté sur des billons ou des buttes qui drainent bien. Le riz de bas-fond a besoin de diguettes, d'un champ bien nivelé et d'une bonne maîtrise de l'eau ; le riz repiqué se plante en général dans une boue préparée (mise en boue).",
            "La densité de plantation est le nombre de plantes par hectare. Trop peu de plantes gaspillent la terre ; trop de plantes se disputent la lumière, l'eau et les éléments nutritifs. Utilisez l'écartement que donne votre guide de vulgarisation pour votre variété et votre zone. Pour calculer : surface d'une plante = écartement entre les lignes x écartement sur la ligne (en mètres). Plantes par hectare = 10 000 m2 / surface par plante. Plantes par acre = 4 047 m2 / surface par plante (un acre fait environ 4 047 m2, et un hectare vaut environ 2,47 acres).",
            "Exemples calculés, si votre guide donne ces écartements : maïs à 75 cm x 25 cm, une graine par poquet : 0,75 x 0,25 = 0,1875 m2, donc 10 000 / 0,1875 = environ 53 300 plantes par hectare, ou 4 047 / 0,1875 = environ 21 600 par acre. Manioc à 1 m x 1 m : 10 000 plantes par hectare, environ 4 000 par acre. Riz repiqué à 20 cm x 20 cm : 0,04 m2, donc 250 000 touffes par hectare. Haricot à 50 cm x 10 cm : 0,05 m2, donc 200 000 plantes par hectare.",
            "Besoins en semences : nombre de graines / graines par kg (comptez et pesez 100 graines, ou lisez le sachet) = kg, plus environ 10 % pour les manquants. Pour le manioc, comptez les boutures (souvent d'environ 20 à 25 cm de long, prises sur des tiges mûres), plus quelques boutures de réserve. Ensuite, regarnissez les manquants une ou deux semaines après la levée."
          ],
          steps: ["Mesurez votre champ en mètres ; surface = longueur x largeur.", "Obtenez l'écartement conseillé pour votre variété et votre zone.", "Surface par plante = écartement entre lignes x écartement sur la ligne (en mètres).", "Plantes par hectare = 10 000 / surface par plante ; par acre = 4 047 / surface par plante.", "Plantes dans votre champ = surface du champ / surface par plante.", "Semences : plantes / graines par kg, plus environ 10 %."],
          words: [["Densité de plantation", "le nombre de plantes par hectare ou par acre."], ["Hectare (ha)", "une surface de 10 000 mètres carrés, environ 2,47 acres."], ["Acre", "une surface d'environ 4 047 mètres carrés, environ 0,4 hectare."], ["Diguette", "un petit mur de terre autour d'une rizière qui retient l'eau."], ["Mise en boue", "le travail du sol mouillé d'une rizière pour faire une boue molle qui retient l'eau et limite les mauvaises herbes."]],
          slides: [
            { title: "Préparer le sol selon la culture", bullets: ["Pas de brûlis ; garder les résidus en couverture", "Lit de semence fin pour maïs, haricot, arachide", "Billons ou buttes pour le manioc ; diguettes et planage pour le riz"] },
            { title: "La formule de la densité", bullets: ["Surface par plante = ligne x plante (m)", "Par hectare = 10 000 / surface par plante", "Par acre = 4 047 / surface par plante"] },
            { title: "Exemples calculés", bullets: ["Maïs 75 x 25 cm : environ 53 300/ha, 21 600/acre", "Manioc 1 x 1 m : 10 000/ha", "Riz 20 x 20 cm : 250 000 touffes/ha"] },
            { title: "Combien de semences ?", bullets: ["Plantes / graines par kg, plus environ 10 %", "Comptez et pesez 100 graines si le sachet ne le dit pas", "Regarnissez les manquants en une ou deux semaines"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Mesurez un de vos champs (ou multipliez sa taille en acres par 4 047 pour avoir des mètres carrés). Demandez à la vulgarisation l'écartement pour votre culture, puis calculez les plantes par hectare, par acre et dans votre champ, et combien de semences ou de boutures acheter.",
          youCanNow: "calculer la densité de plantation par hectare et par acre à partir d'un écartement, et combien de semences ou de boutures il vous faut.",
          quickCheck: [
            { objective: "O2", q: "Le manioc est planté à 1 m x 1 m. Combien de plantes par hectare ?", options: ["1 000", "4 047", "100 000", "10 000"], answer: 3, why: "Chaque plante occupe 1 m2, et un hectare fait 10 000 m2." },
            { objective: "O2", q: "Un champ fait 0,5 hectare et le maïs demande environ 53 300 plantes par hectare. Combien de plantes vous faut-il, à peu près ?", options: ["26 650", "53 300", "106 600", "5 330"], answer: 0, why: "0,5 x 53 300 = 26 650 plantes." }
          ]
        },
        {
          title: "Fertiliser et désherber à temps",
          objectives: ["O3"],
          minutes: 5,
          goal: "Programmer le semis, la fertilisation et le désherbage de votre culture sur un calendrier daté.",
          text: [
            "L'analyse de sol, le fumier, le compost et les engrais sont enseignés dans « Santé et fertilité du sol » ; suivez votre analyse de sol ou le conseil de votre agent de vulgarisation pour savoir quoi apporter et combien. Ce qui change selon la culture, c'est quand et de quoi chacune a le plus besoin. Le maïs a très faim d'azote et en a besoin tôt, puis de nouveau quand il pousse vite. Les légumineuses (haricot, niébé, arachide, soja) fabriquent une bonne partie de leur propre azote grâce aux nodosités de leurs racines : elles ont donc plus besoin de phosphore que d'azote. Le manioc pousse sur des sols plus pauvres, mais il prend beaucoup de potassium au sol avec le temps. Le riz reçoit en général l'azote en apports fractionnés ; trop d'azote aggrave la pyriculariose du riz.",
            "Les mauvaises herbes volent l'eau, la lumière et les éléments nutritifs surtout pendant les premières semaines après la levée de la culture. C'est la période critique : c'est là que les mauvaises herbes font perdre le plus de rendement, et un désherbage plus tard ne le rattrape pas. Beaucoup de guides donnent un premier désherbage environ deux à trois semaines après la levée et un deuxième quelques semaines plus tard ; vérifiez votre guide local. Le manioc pousse lentement au début et doit rester propre pendant environ ses trois premiers mois, jusqu'à ce que ses feuilles couvrent le sol. Dans le riz de bas-fond, un bon planage et le maintien de l'eau dans le champ aident à contenir les mauvaises herbes.",
            "Les herbicides peuvent économiser du travail, mais ils doivent être homologués pour votre culture (PCPB au Kenya, NAFDAC au Nigeria) et utilisés comme le dit l'étiquette, avec l'équipement de protection. Mettez tout sur un calendrier compté à partir de la date de semis, pour que le travail et l'argent soient prêts à temps."
          ],
          steps: ["Écrivez votre date de semis.", "Ajoutez la préparation du sol dans les semaines d'avant.", "Ajoutez la fertilisation selon votre analyse de sol ou la vulgarisation, au bon stade de la culture.", "Ajoutez le premier désherbage pendant les premières semaines critiques, puis les suivants.", "Notez quand il vous faut de la main-d'œuvre, des intrants et de l'argent pour chaque travail."],
          words: [["Période critique", "les premières semaines, quand les mauvaises herbes font perdre le plus de rendement ; il faut désherber à ce moment-là."], ["Nodosités", "de petits renflements sur les racines des légumineuses où des bactéries transforment l'azote de l'air en nourriture pour la plante."], ["Apport fractionné", "donner l'engrais en deux fois ou plus, à différents stades de la culture, au lieu de tout en une fois."], ["Herbicide", "un produit chimique qui tue les mauvaises herbes ; il doit être homologué et utilisé comme le dit son étiquette."]],
          slides: [
            { title: "Fertilité : voir Santé et fertilité du sol", bullets: ["Suivez votre analyse de sol ou la vulgarisation", "Cette leçon : ce qui change selon la culture"] },
            { title: "Le besoin principal de chaque culture", bullets: ["Maïs : azote, tôt et pendant la croissance", "Légumineuses : phosphore ; elles font leur propre azote", "Manioc : potassium avec le temps ; riz : azote fractionné"] },
            { title: "Désherber pendant la période critique", bullets: ["Les premières semaines après la levée comptent le plus", "Souvent premier désherbage vers 2 à 3 semaines ; vérifiez localement", "Manioc : propre environ les 3 premiers mois"] },
            { title: "Tout mettre sur un calendrier", bullets: ["Compter à partir de la date de semis", "Main-d'œuvre, intrants et argent prêts à temps", "Herbicides : homologués, étiquette, EPI"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Écrivez un calendrier pour votre culture à partir de votre date de semis prévue : préparation du sol, semis, chaque apport d'engrais que conseillent votre analyse de sol ou votre agent de vulgarisation, et chaque désherbage. Marquez la période critique de désherbage d'une autre couleur.",
          youCanNow: "planifier la fertilisation et le désherbage sur un calendrier daté pour maîtriser les mauvaises herbes pendant les premières semaines critiques.",
          quickCheck: [
            { objective: "O3", q: "Quand les mauvaises herbes font-elles perdre le plus de rendement ?", options: ["Juste avant la récolte", "Pendant les premières semaines après la levée de la culture", "Après la récolte", "Seulement en saison sèche"], answer: 1, why: "La période critique, ce sont les premières semaines ; un désherbage plus tard ne rattrape pas ce rendement." },
            { objective: "O3", q: "Quelle culture fabrique une bonne partie de son propre azote grâce aux nodosités de ses racines ?", options: ["Le maïs", "Le riz", "Le manioc", "Le haricot"], answer: 3, why: "Les légumineuses comme le haricot fixent l'azote grâce aux bactéries de leurs nodosités." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien démarrer la culture",
        questions: [
          { objective: "O1", q: "Au Kenya, quel organisme certifie les semences et publie la liste nationale des variétés ?", options: ["Le KEPHIS", "Le bureau des routes du comté", "Le marché local", "La banque"], answer: 0, why: "Le KEPHIS certifie les semences et enregistre les variétés diffusées au Kenya." },
          { objective: "O1", q: "Dans votre zone, la saison des pluies est souvent courte. Quel caractère de la variété compte le plus ?", options: ["La maturité tardive", "La maturité précoce", "Des tiges hautes", "Un grain rouge"], answer: 1, why: "Une variété précoce arrive à maturité avant la fin des pluies." },
          { objective: "O2", q: "Quelle surface par plante occupe le maïs à 75 cm x 25 cm ?", options: ["1 m2", "0,25 m2", "0,1875 m2", "0,75 m2"], answer: 2, why: "0,75 m x 0,25 m = 0,1875 m2." },
          { objective: "O2", q: "Combien de mètres carrés y a-t-il à peu près dans un acre ?", options: ["10 000", "1 000", "2 470", "4 047"], answer: 3, why: "Un acre fait environ 4 047 m2 ; un hectare fait 10 000 m2." },
          { objective: "O3", q: "Vers qui ce cours vous envoie-t-il pour les doses d'engrais ?", options: ["Votre analyse de sol et votre agent de vulgarisation, comme dans Santé et fertilité du sol", "Le plus gros sac de la boutique", "Ce qu'un voisin a utilisé", "Une quantité fixe pour chaque culture"], answer: 0, why: "Les doses dépendent de votre sol et de votre culture : elles viennent donc d'une analyse de sol ou de la vulgarisation." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Protéger et mesurer la culture",
      lessons: [
        {
          title: "Maladies clés : nécrose létale du maïs, viroses du manioc et pyriculariose du riz",
          objectives: ["O4"],
          minutes: 6,
          goal: "Reconnaître la nécrose létale du maïs, la mosaïque du manioc, la striure brune du manioc et la pyriculariose du riz et choisir une première réponse.",
          text: [
            "La nécrose létale du maïs (MLN) a durement touché le Kenya à partir de 2011 et s'est étendue en Afrique de l'Est. Le CIMMYT (Centre international d'amélioration du maïs et du blé) explique qu'elle apparaît quand le maïs est infecté par deux virus à la fois : le maize chlorotic mottle virus et un potyvirus comme le sugarcane mosaic virus. Les feuilles montrent des marbrures jaunes, puis se dessèchent des bords vers le centre ; le cœur de la plante peut mourir, et les épis sont petits, vides ou pourris. Des insectes comme les thrips et les pucerons la propagent au champ, et des semences infectées peuvent la porter très loin. Réponse : semez des semences certifiées de variétés tolérantes à la MLN, arrêtez le maïs pendant une saison avec vos voisins, enlevez les repousses de maïs, maîtrisez les mauvaises herbes, arrachez et détruisez tôt les plantes malades, et signalez-la à la vulgarisation.",
            "La mosaïque du manioc (CMD) rend les feuilles tachées de jaune et de vert (mosaïque), tordues et petites, et freine la croissance de la plante. La striure brune du manioc (CBSD) montre des taches jaunes le long des nervures des vieilles feuilles et des stries brunes sur les tiges, mais le pire dégât est caché : les racines ont une pourriture dure, brune et sèche, parfois quand les feuilles semblent presque saines. L'IITA estime que ces deux maladies coûtent à l'Afrique environ 1 milliard de dollars américains (US$1 billion) par an. Les aleurodes (mouches blanches) propagent les deux, mais la principale façon de les porter loin, c'est le partage de boutures infectées entre producteurs. Réponse : plantez des boutures saines de variétés tolérantes, arrachez et détruisez tôt les plantes malades, ne prenez jamais de boutures dans un champ malade et, en Afrique de l'Est, déterrez quelques racines avant la récolte pour vérifier s'il y a une pourriture brune.",
            "La pyriculariose du riz est une maladie causée par un champignon et un problème majeur en Afrique de l'Ouest. Sur les feuilles, elle fait des taches en losange ou en forme d'œil, au centre gris et au bord brun. Quand elle attaque le col sous la panicule, la panicule devient blanche et vide. Des recherches avec AfricaRice ont montré que les variétés résistantes sont le moyen de lutte le moins cher pour les petits producteurs, mais le champignon peut contourner la résistance quelques années après qu'une variété est beaucoup cultivée : les nouvelles variétés comptent donc. Réponse : cultivez une variété conseillée comme résistante, évitez l'excès d'azote, évitez le stress hydrique en riz pluvial, utilisez des semences propres et enlevez les résidus infectés. N'utilisez un fongicide que si la vulgarisation le conseille et qu'il est homologué pour le riz."
          ],
          steps: ["Surveillez chaque semaine ; comparez ce que vous voyez avec les signes de cette leçon.", "Photographiez les plantes malades et demandez à la vulgarisation ou à une clinique des plantes de confirmer.", "Arrachez et détruisez tôt les plantes malades (MLN et viroses du manioc).", "La saison suivante : semences certifiées ou boutures saines d'une variété tolérante ou résistante.", "Organisez la rotation et le matériel de plantation sain avec vos voisins."],
          words: [["MLN", "nécrose létale du maïs : une maladie due à deux virus ensemble, qui peut tuer les plants de maïs."], ["CMD", "mosaïque du manioc : une maladie virale qui rend les feuilles de manioc tachées, tordues et petites."], ["CBSD", "striure brune du manioc : une maladie virale qui cause une pourriture brune et sèche des racines du manioc."], ["Pyriculariose du riz", "une maladie du riz causée par un champignon, qui fait des taches en forme d'œil sur les feuilles et peut laisser les panicules blanches et vides."], ["Épurer", "arracher et détruire les plantes malades pour qu'elles ne propagent pas la maladie."]],
          slides: [
            { title: "Nécrose létale du maïs (MLN)", bullets: ["Deux virus ensemble (CIMMYT)", "Marbrures jaunes, feuilles sèches depuis les bords", "Propagée par des insectes et des semences infectées"] },
            { title: "Mosaïque et striure brune du manioc", bullets: ["CMD : feuilles tachées, tordues, petites", "CBSD : nervures jaunes, stries sur la tige, pourriture brune des racines", "Propagées par les aleurodes et le partage de boutures"] },
            { title: "Pyriculariose du riz", bullets: ["Taches en forme d'œil, centre gris, bord brun", "Pyriculariose du col : panicules blanches et vides", "La résistance peut tomber après quelques années"] },
            { title: "Premières réponses", bullets: ["Confirmer avec la vulgarisation ou une clinique des plantes", "Épurer tôt les plantes malades", "Saison suivante : semence saine, variétés tolérantes, rotation"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Parcourez votre champ (ou celui d'un voisin) et cherchez les signes de la maladie la plus importante pour votre culture. Notez ce que vous avez vu, photographiez tout ce qui est douteux, et écrivez la première réponse que vous apporteriez à cette maladie.",
          youCanNow: "reconnaître la nécrose létale du maïs, la mosaïque du manioc, la striure brune du manioc et la pyriculariose du riz et choisir une première réponse.",
          quickCheck: [
            { objective: "O4", q: "Les feuilles de votre manioc semblent presque saines, mais les racines déterrées ont une pourriture dure, brune et sèche. La cause la plus probable est :", options: ["La striure brune du manioc", "Trop de pluie à la plantation", "La chenille légionnaire d'automne", "La pyriculariose du riz"], answer: 0, why: "La CBSD fait pourrir les racines, parfois avec seulement de légers signes sur les feuilles." },
            { objective: "O4", q: "Des feuilles de riz ont des taches en forme d'œil, au centre gris et au bord brun. Quelle est une bonne réponse ?", options: ["Ajouter plus d'engrais azoté", "Ressemer la même semence la saison prochaine", "Demander à la vulgarisation de confirmer la pyriculariose et cultiver une variété résistante la saison prochaine", "Inonder la maison"], answer: 2, why: "Ce sont des taches de pyriculariose ; les variétés résistantes et un azote équilibré sont les principaux moyens de lutte." }
          ]
        },
        {
          title: "Savoir quand récolter",
          objectives: ["O5"],
          minutes: 4,
          goal: "Juger quand votre maïs, riz, manioc ou légumineuse est prêt à être récolté.",
          text: [
            "Si vous récoltez trop tôt, le grain est léger et humide ; si vous récoltez trop tard, vous perdez de la récolte à cause des oiseaux, des rats, de la pluie, de l'égrenage et de la pourriture, et le grain risque davantage les aflatoxines. Le séchage et le stockage sont enseignés dans « Manutention et stockage après récolte ».",
            "Le maïs est mûr quand un point noir se forme là où le grain s'attache à la rafle et que les spathes sont sèches ; écartez quelques spathes et cassez quelques grains pour vérifier. Ensuite, séchez-le bien avant de le stocker. Le riz est prêt quand la plupart des grains des panicules sont devenus dorés et durs ; trop attendre entraîne de l'égrenage et des pertes dues aux oiseaux. Le haricot et le niébé sont prêts quand la plupart des gousses sont sèches et font du bruit quand on les secoue ; récoltez avant qu'elles s'ouvrent. L'arachide est prête quand les feuilles jaunissent et que l'intérieur de la plupart des coques a foncé ; arrachez quelques pieds pour vérifier.",
            "Le manioc n'a pas un seul jour de récolte : chaque variété a sa durée de cycle, et les racines peuvent rester un temps en terre. Mais des racines laissées trop longtemps peuvent devenir ligneuses, et là où la striure brune est fréquente, la pourriture s'aggrave. Une fois arraché, le manioc se gâte en quelques jours : ne récoltez donc que ce que vous pouvez vendre ou transformer vite. Au Ghana et au Nigeria, beaucoup de producteurs calent la récolte sur la capacité du transformateur de gari ou de foufou."
          ],
          steps: ["Connaissez la durée de cycle de votre variété grâce au sachet de semences ou à la vulgarisation.", "Vérifiez quelques plantes dans tout le champ, pas une seule.", "Maïs : point noir et spathes sèches ; riz : la plupart des grains dorés et durs.", "Légumineuses : gousses sèches qui font du bruit ; arachide : intérieur des coques foncé.", "Manioc : ne récoltez que ce que vous pouvez vendre ou transformer en quelques jours."],
          words: [["Point noir", "une tache sombre là où le grain de maïs s'attache à la rafle ; elle montre que le grain a fini de se remplir."], ["Égrenage", "des grains ou des gousses qui tombent ou s'ouvrent au champ avant la récolte."], ["Durée de cycle", "le temps que met une variété du semis à la récolte."]],
          slides: [
            { title: "Trop tôt ou trop tard : on perd", bullets: ["Trop tôt : grain léger et humide", "Trop tard : oiseaux, rats, pluie, égrenage, pourriture", "Séchage et stockage : voir le cours sur l'après-récolte"] },
            { title: "Céréales", bullets: ["Maïs : point noir, spathes sèches", "Riz : la plupart des grains dorés et durs", "Vérifiez plusieurs plantes dans tout le champ"] },
            { title: "Légumineuses et manioc", bullets: ["Haricot, niébé : gousses sèches qui font du bruit", "Arachide : l'intérieur des coques fonce", "Manioc : se gâte en quelques jours une fois arraché"] }
          ],
          tryIt: "Pour votre culture, écrivez la durée de cycle de la variété, les signes que vous allez vérifier et la date à laquelle vous pensez commencer à vérifier. Si votre culture est au champ maintenant, vérifiez cinq plantes réparties dans le champ et notez ce que vous voyez.",
          youCanNow: "juger quand votre culture de base est prête à être récoltée.",
          quickCheck: [
            { objective: "O5", q: "Comment savez-vous que le grain de maïs a fini de se remplir ?", options: ["Les feuilles sont encore vertes", "Un point noir se forme là où le grain s'attache à la rafle", "La panicule mâle apparaît", "Il a plu deux fois"], answer: 1, why: "Le point noir montre la maturité physiologique." },
            { objective: "O5", q: "Pourquoi ne récolter que la quantité de manioc que vous pouvez vendre ou transformer en quelques jours ?", options: ["Les racines de manioc se gâtent vite une fois arrachées", "Les racines de manioc repoussent après l'arrachage", "Les acheteurs préfèrent les racines sèches", "Les feuilles sont le produit principal"], answer: 0, why: "Les racines fraîches de manioc s'abîment en quelques jours après la récolte." }
          ]
        },
        {
          title: "Calculer le rendement et écrire votre plan de production",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Calculer le rendement par hectare et par acre et écrire un plan de production pour une culture de base dans votre champ.",
          text: [
            "Le rendement est le poids de récolte obtenu par surface. Pour le connaître, pesez votre récolte après séchage, et connaissez la surface exacte d'où elle vient. Rendement par hectare = kg récoltés / surface en m2 x 10 000. Rendement par acre = kg récoltés / surface en m2 x 4 047. Ou, pour passer de l'hectare à l'acre : divisez par 2,47.",
            "Exemple, maïs au Kenya : vous récoltez 1 350 kg de grain sec sur un champ de 3 000 m2. Par hectare : 1 350 / 3 000 x 10 000 = 4 500 kg, soit 4,5 tonnes. Par acre : 4 500 / 2,47 = environ 1 820 kg, soit environ 20 sacs de 90 kg. Une estimation rapide avant la récolte : délimitez un carré de 10 m x 10 m (100 m2) dans une partie typique du champ, récoltez-le et séchez-le, pesez-le, et multipliez par 100 pour avoir des kg par hectare. Faites-le à deux ou trois endroits et prenez la moyenne.",
            "Maintenant, rassemblez tout le cours dans un plan de production pour une culture de base dans votre propre champ : la taille du champ, la variété et la source de semences, l'écartement avec votre densité de plantation et vos besoins en semences, un calendrier daté pour la préparation du sol, le semis, la fertilisation et le désherbage, les principales maladies et votre première réponse, la façon dont vous jugerez la récolte, et un objectif de rendement par hectare et par acre. Après la récolte, comparez le rendement réel à votre objectif et écrivez ce que vous allez changer. Une productrice de Côte d'Ivoire qui note le rendement de son riz à chaque saison peut montrer à un acheteur, à une coopérative ou à un prêteur ce que produit son champ."
          ],
          steps: ["Mesurez la surface récoltée en m2.", "Pesez la récolte séchée en kg.", "Par hectare = kg / m2 x 10 000 ; par acre = kg / m2 x 4 047.", "Ou prenez 100 m2 à 2 ou 3 endroits, pesez et multipliez par 100 pour avoir des kg/ha.", "Écrivez le plan : variété, semence, densité, calendrier, maladies, récolte, objectif de rendement.", "Après la récolte, comparez le rendement réel à l'objectif."],
          words: [["Rendement", "la quantité récoltée par surface, comme des kg par hectare ou des sacs par acre."], ["Tonne", "1 000 kilogrammes."], ["Placette de mesure", "une petite surface délimitée qu'on récolte et qu'on pèse pour estimer le rendement de tout le champ."]],
          slides: [
            { title: "Formules du rendement", bullets: ["Par ha = kg / surface (m2) x 10 000", "Par acre = kg / surface (m2) x 4 047", "De l'hectare à l'acre : diviser par 2,47"] },
            { title: "Exemple calculé : maïs", bullets: ["1 350 kg sur 3 000 m2", "= 4 500 kg/ha (4,5 t/ha)", "= environ 1 820 kg/acre, environ 20 sacs de 90 kg"] },
            { title: "Estimation par placette", bullets: ["Délimitez 10 m x 10 m (100 m2)", "Récoltez, séchez, pesez ; x 100 = kg/ha", "Faites 2 ou 3 endroits et prenez la moyenne"] },
            { title: "Votre plan de production", bullets: ["Variété, semence, densité, calendrier", "Maladies et premières réponses", "Signes de récolte et objectif de rendement par ha et par acre"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan de production pour une culture de base dans votre propre champ : taille du champ en hectares et en acres, variété et source de semences, écartement avec la densité de plantation et les besoins en semences calculés, un calendrier daté (préparation du sol, semis, fertilisation, désherbage), les deux principales maladies et votre première réponse à chacune, les signes de récolte, et un objectif de rendement par hectare et par acre avec vos calculs.",
          youCanNow: "calculer le rendement par hectare et par acre et écrire un plan de production pour une culture de base dans votre propre champ.",
          quickCheck: [
            { objective: "O5", q: "Vous avez récolté 900 kg de haricot sec sur 4 047 m2. Quel est le rendement par acre ?", options: ["Environ 450 kg", "Environ 2 224 kg", "900 kg", "Environ 4 047 kg"], answer: 2, why: "4 047 m2, c'est un acre : le rendement est donc de 900 kg par acre." },
            { objective: "O5", q: "Une placette de 100 m2 donne 40 kg de maïs sec. Quel est le rendement estimé par hectare ?", options: ["40 kg", "400 kg", "40 000 kg", "4 000 kg"], answer: 3, why: "Un hectare fait 100 fois 100 m2, donc 40 x 100 = 4 000 kg par hectare." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Protéger et mesurer la culture",
        questions: [
          { objective: "O4", q: "La nécrose létale du maïs est causée par :", options: ["Trop de soleil", "Deux virus qui infectent la plante en même temps", "Un manque de potassium", "La chenille légionnaire d'automne seule"], answer: 1, why: "Le CIMMYT explique la MLN comme une co-infection par deux virus." },
          { objective: "O4", q: "Quelle est la principale façon dont les virus du manioc voyagent loin ?", options: ["Le vent qui emporte les feuilles", "Les éclaboussures de pluie", "Le partage de boutures infectées", "Les fientes d'oiseaux"], answer: 2, why: "Les aleurodes les propagent près ; les boutures infectées les portent loin." },
          { objective: "O4", q: "Quelle habitude aggrave la pyriculariose du riz ?", options: ["Trop d'engrais azoté", "Utiliser des semences propres", "Cultiver une variété résistante", "Enlever les résidus infectés"], answer: 0, why: "Beaucoup d'azote rend le riz plus sensible à la pyriculariose." },
          { objective: "O5", q: "Le riz est prêt à être récolté quand :", options: ["Les premières fleurs s'ouvrent", "Les feuilles sont vert foncé", "Il est au champ depuis un mois", "La plupart des grains des panicules sont dorés et durs"], answer: 3, why: "Des grains dorés et durs montrent que la culture est mûre ; une récolte tardive cause de l'égrenage et des pertes dues aux oiseaux." },
          { objective: "O5", q: "Vous obtenez 4 940 kg par hectare. Combien cela fait-il à peu près par acre ?", options: ["2 000 kg", "12 200 kg", "4 940 kg", "494 kg"], answer: 0, why: "4 940 / 2,47 = 2 000 kg par acre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Conduite moderne des cultures : maïs, riz, manioc et légumineuses",
    questions: [
      { objective: "O1", q: "Où chercher d'abord des variétés adaptées à votre zone ?", options: ["Dans une publicité sur les réseaux sociaux", "Auprès de votre institut national de recherche et de votre agent de vulgarisation", "Dans la semence la moins chère du marché", "Dans le grenier de la saison passée"], answer: 1, why: "Les instituts de recherche testent et diffusent les variétés pour chaque zone." },
      { objective: "O1", q: "Quel organisme certifie les semences au Nigeria ?", options: ["La NAFDAC", "La banque centrale", "Le KEPHIS", "Le National Agricultural Seed Council (NASC)"], answer: 3, why: "Le NASC certifie les semences au Nigeria." },
      { objective: "O1", q: "Que faut-il vérifier avant de payer un sachet de semences certifiées ?", options: ["Le scellé, l'étiquette et la date", "Seulement la couleur du sac", "Seulement le prix", "Rien"], answer: 0, why: "Un sachet scellé, étiqueté et daté d'un distributeur agréé vous protège des fausses semences." },
      { objective: "O1", q: "Quel centre du CGIAR travaille sur le riz en Afrique ?", options: ["L'IITA", "L'ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, basé à Abidjan, travaille sur le riz." },
      { objective: "O2", q: "Combien de mètres carrés y a-t-il dans un hectare ?", options: ["4 047", "1 000", "100", "10 000"], answer: 3, why: "Un hectare fait 100 m x 100 m = 10 000 m2." },
      { objective: "O2", q: "Combien de touffes par hectare donne le riz repiqué à 20 cm x 20 cm ?", options: ["25 000", "250 000", "2 500", "40 000"], answer: 1, why: "0,2 x 0,2 = 0,04 m2 ; 10 000 / 0,04 = 250 000." },
      { objective: "O2", q: "À peu près combien de plantes par acre faut-il pour du haricot à 50 cm x 10 cm ?", options: ["Environ 80 900", "Environ 200 000", "Environ 8 090", "Environ 40 470"], answer: 0, why: "0,5 x 0,1 = 0,05 m2 ; 4 047 / 0,05 = environ 80 900." },
      { objective: "O2", q: "Pourquoi ajouter environ 10 % de semences en plus ?", options: ["Pour nourrir les oiseaux", "Pour que le sac soit plus lourd", "Pour couvrir les graines qui ne lèvent pas et regarnir les manquants", "Parce que la loi l'exige"], answer: 2, why: "Certaines graines ne lèvent pas ; les semences en plus permettent de regarnir les manquants." },
      { objective: "O3", q: "De quoi les légumineuses ont-elles plus besoin que d'azote ?", options: ["De sel", "De phosphore", "De sucre", "De chaux chaque semaine"], answer: 1, why: "Les légumineuses fixent une bonne partie de leur propre azote, mais ont quand même besoin de phosphore." },
      { objective: "O3", q: "Quand le premier désherbage doit-il en général avoir lieu ?", options: ["Juste avant la récolte", "Seulement si les mauvaises herbes fleurissent", "Quand la culture dépasse le genou et sort sa panicule", "Pendant les premières semaines critiques, souvent environ 2 à 3 semaines après la levée"], answer: 3, why: "Les mauvaises herbes font perdre le plus de rendement pendant les premières semaines." },
      { objective: "O3", q: "Pourquoi mettre votre saison sur un calendrier compté à partir du semis ?", options: ["Pour que la main-d'œuvre, les intrants et l'argent soient prêts à temps", "Pour impressionner les visiteurs", "Parce que les graines lisent les calendriers", "Cela ne sert à rien"], answer: 0, why: "Un calendrier daté garantit que chaque travail est fait au bon stade de la culture." },
      { objective: "O3", q: "Pendant combien de temps environ faut-il garder le manioc sans mauvaises herbes ?", options: ["Une semaine", "Seulement après la récolte", "Environ ses trois premiers mois, jusqu'à ce que ses feuilles couvrent le sol", "Jamais"], answer: 2, why: "Le manioc pousse lentement au début et a besoin d'un désherbage précoce jusqu'à la fermeture du couvert." },
      { objective: "O4", q: "Des marbrures jaunes sur les feuilles de maïs, qui se dessèchent ensuite depuis les bords, avec des épis petits ou pourris, font penser à :", options: ["La nécrose létale du maïs", "La pyriculariose du riz", "Une bonne santé", "Trop de potassium"], answer: 0, why: "Ce sont des signes typiques de la MLN." },
      { objective: "O4", q: "Des feuilles de manioc tachées de jaune et de vert, tordues et petites, indiquent :", options: ["La striure brune du manioc seulement", "Le manque de soleil", "La mosaïque du manioc", "La chenille légionnaire d'automne"], answer: 2, why: "Le dessin en mosaïque et la torsion des feuilles sont les signes de la CMD." },
      { objective: "O4", q: "Que faire d'abord avec quelques plantes qui montrent des signes de MLN ou de virose du manioc ?", options: ["Y prendre des boutures", "Confirmer avec la vulgarisation, puis les arracher et les détruire tôt", "Y mettre de l'engrais", "Les laisser guérir"], answer: 1, why: "Épurer tôt enlève la source du virus." },
      { objective: "O4", q: "Pourquoi sort-on sans cesse de nouvelles variétés de riz résistantes à la pyriculariose ?", options: ["Les vieilles semences changent de couleur", "Les producteurs s'ennuient", "Le riz a besoin de plus d'eau chaque année", "Le champignon peut contourner la résistance quelques années après qu'une variété est beaucoup cultivée"], answer: 3, why: "La résistance à la pyriculariose peut tomber, donc les sélectionneurs continuent de créer de nouvelles variétés." },
      { objective: "O5", q: "L'arachide est prête quand :", options: ["Elle fleurit pour la première fois", "Les feuilles jaunissent et l'intérieur de la plupart des coques a foncé", "Il a plu une fois", "Les gousses sont molles et blanches à l'intérieur"], answer: 1, why: "L'intérieur foncé des coques et le jaunissement des feuilles montrent la maturité." },
      { objective: "O5", q: "Vous avez récolté 600 kg de maïs sec sur 1 500 m2. Quel est le rendement par hectare ?", options: ["600 kg", "9 000 kg", "1 500 kg", "4 000 kg"], answer: 3, why: "600 / 1 500 x 10 000 = 4 000 kg par hectare." },
      { objective: "O5", q: "Pour passer d'un rendement par hectare à un rendement par acre, vous :", options: ["Divisez par 2,47", "Multipliez par 2,47", "Ajoutez 4 047", "Divisez par 10"], answer: 0, why: "Un hectare fait environ 2,47 acres, donc le rendement par acre est plus petit." },
      { objective: "O5", q: "Pourquoi comparer votre rendement réel à l'objectif de votre plan après la récolte ?", options: ["La société semencière l'exige", "Pour voir ce qui a marché et ce qu'il faut changer la saison prochaine", "Pour recevoir un sac d'engrais gratuit", "Cela ne sert à rien"], answer: 1, why: "Comparer les résultats au plan montre où s'améliorer." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et revoyez-la avec votre agent de vulgarisation.",
    criteria: [
      { name: "Variété et semence", objective: "O1", notYet: "Aucune variété citée, ou la semence est du grain d'hybride recyclé ou des boutures d'un champ malade.", meets: "Une variété conseillée pour la zone est citée, avec une source agréée de semences certifiées ou de boutures saines.", exceeds: "Deux variétés sont comparées sur la maturité, la résistance aux maladies et le marché, et le choix est expliqué." },
      { name: "Densité et besoins en semences", objective: "O2", notYet: "Pas d'écartement ni de calcul, ou le calcul est faux.", meets: "L'écartement, les plantes par hectare, par acre et dans le champ, et les semences ou boutures nécessaires sont bien calculés, avec les étapes montrées.", exceeds: "Prévoit aussi le regarnissage et un comptage des plantes après la levée pour vérifier la densité réelle." },
      { name: "Calendrier daté", objective: "O3", notYet: "Les travaux sont listés sans dates, ou le désherbage est tardif.", meets: "La préparation du sol, le semis, la fertilisation (selon une analyse de sol ou la vulgarisation) et chaque désherbage sont datés à partir du semis, avec le premier désherbage pendant la période critique.", exceeds: "La main-d'œuvre, les intrants et l'argent nécessaires pour chaque travail figurent sur le calendrier." },
      { name: "Surveillance des maladies", objective: "O4", notYet: "Aucune maladie citée, ou les réponses ne leur correspondent pas.", meets: "Les deux principales maladies de la culture sont citées avec leurs signes et une bonne première réponse pour chacune.", exceeds: "Comprend une prévention pour la saison suivante décidée avec les voisins, comme la rotation ou le matériel de plantation sain." },
      { name: "Récolte et objectif de rendement", objective: "O5", notYet: "Pas de signes de récolte ni d'objectif de rendement, ou le calcul du rendement est faux.", meets: "Les signes de récolte de la culture et un objectif de rendement par hectare et par acre avec des calculs justes.", exceeds: "Comprend la méthode de la placette pour estimer le rendement avant la récolte et un plan pour comparer le résultat à l'objectif." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui sèment, la saison suivante, des semences certifiées ou des boutures saines d'une variété conseillée (enquête de suivi)",
      "Apprenants qui pèsent leur récolte et indiquent un rendement par hectare ou par acre après la saison",
      "Évolution du rendement par hectare déclaré pour la culture choisie d'une saison à l'autre",
      "Moins de champs perdus à cause de la nécrose létale du maïs ou des viroses du manioc dans les groupes d'apprenants (rapports de la vulgarisation)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone avec calculatrice, ou du papier, un stylo et une calculatrice simple",
      "Un mètre ruban ou une corde marquée tous les mètres, et une balance pour peser la récolte",
      "L'accès à un champ de maïs, de riz, de manioc ou de légumineuses",
      "La liste nationale des variétés ou les variétés conseillées par la vulgarisation pour la zone",
      "Environ 60 à 90 minutes en tout pour les leçons, les contrôles rapides et les quiz, plus la pratique au champ"
    ],
    facilitatorNotes: [
      "Passez ensemble le test de départ, puis faites les calculs de densité et de rendement au champ, avec un mètre ruban et de vraies plantes.",
      "Obtenez les variétés et les écartements conseillés pour votre zone auprès de l'institut de recherche ou de la vulgarisation avant la séance ; ne les inventez pas.",
      "Apportez des photos ou de vrais échantillons de MLN, de mosaïque du manioc, de striure brune du manioc (avec une racine coupée) et de pyriculariose du riz si elles existent dans votre zone.",
      "Les groupes de producteurs qui s'entendent sur la rotation et le matériel de plantation sain maîtrisent mieux la MLN et les viroses du manioc ; profitez de la séance pour lancer cette discussion.",
      "Notez le plan de production avec la grille, et vérifiez chaque calcul avec l'apprenant.",
      "Revenez après la récolte pour comparer le rendement réel de chaque apprenant à l'objectif de son plan."
    ]
  }
};
