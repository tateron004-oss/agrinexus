"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-data-precision.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Index formulas keep the English band letters (NIR, R, G, B) as on the English slides; the text explains them in French.

const FAO_EO = { name: "FAO GIEWS, observation de la Terre (NDVI et indicateurs de végétation)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (SIG libre et gratuit)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (logiciel libre et gratuit de cartographie par drone)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO et OMS : directives pour l'application aérienne des pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-fr",
  lang: "fr",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Drones agricoles : analyse des données et agriculture de précision",
  skills: "Vérifier la précision d'une carte de drone, Choisir le bon indice de végétation, Calculer des statistiques par zone et compter des plants dans QGIS, Construire une carte de préconisation, Calculer si la précision est rentable, Communiquer les résultats aux agriculteurs",
  outcome: "transformer un jeu de données de drone en une analyse vérifiée et précise, avec des statistiques par zone et une carte de préconisation, calculer si agir en conséquence est rentable, et livrer le résultat sous une forme qu'un agriculteur ou un gestionnaire de plantation peut appliquer.",
  about: [
    "Ce cours s'adresse aux analystes de données de drone, aux agronomes, aux spécialistes de la vulgarisation, aux gestionnaires d'agro-entreprises et de plantations, et aux entreprises de services par drone au Kenya, au Nigeria et partout en Afrique. Vous devez déjà savoir assembler une carte de drone et faire une carte NDVI simple (voir le parcours de surveillance, cours 3).",
    "Le chapitre 1 porte sur l'analyse : s'assurer qu'une carte est assez précise pour agir, choisir parmi les indices de végétation, et mesurer des zones et compter des plants ou des arbres dans QGIS. Le chapitre 2 porte sur l'agriculture de précision : construire une carte de préconisation à partir de votre analyse, vérifier la rentabilité avec un budget partiel simple, et présenter les résultats pour que les agriculteurs agissent.",
    "Les exemples portent sur le maïs et le haricot, le thé, le café, l'avocat et le manioc. Les doses d'engrais et de semences de ce cours sont des exemples : les vraies doses viennent des analyses de sol, de la recherche locale et des recommandations de la vulgarisation. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "À partir d'un jeu de données de drone d'un vrai champ ou d'un échantillon gratuit : indiquez la précision de la carte et comment vous l'avez vérifiée ; choisissez et justifiez un indice de végétation ; divisez le champ en zones et donnez les statistiques par zone (surface et indice moyen) et un comptage de plants ou d'arbres ; construisez une carte de préconisation avec une dose ou une tâche par zone (en utilisant les doses recommandées localement) ; calculez un budget partiel simple qui montre si c'est rentable ; et rédigez pour l'agriculteur un résultat d'une page en langage simple.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des analystes de données de drones, des agronomes, des spécialistes de la vulgarisation, des gestionnaires d'agro-entreprises et de domaines, et des entreprises de services par drone au Kenya, au Nigeria et partout en Afrique, qui travaillent sur des cultures comme le maïs et les haricots, le thé, le café, l'avocat et le manioc.",
    startingPoint: "Les apprenants savent déjà assembler une carte de drone et faire une carte NDVI simple. Peu vérifient la précision de position d'une carte, choisissent un indice selon la culture et son stade, transforment les cartes en statistiques par zone, construisent une carte de préconisation, vérifient si elle est rentable ou présentent les résultats pour qu'un agriculteur agisse.",
    gap: "Des cartes en couleurs seules changent rarement ce qui se passe au champ, et des cartes imprécises ou un mauvais indice peuvent envoyer les ouvriers et les intrants aux mauvais endroits. Transformer les données de drone en chiffres vérifiés, en une préconisation pratique et en un budget partiel honnête permet aux agriculteurs et aux domaines de mettre les intrants là où ils rapportent et de faire confiance au service de drone.",
    constraints: [
      "Niveau de lecture : des mots simples ; chaque terme d'indice et de cartographie est expliqué",
      "Appareils : un ordinateur portable avec QGIS gratuit et un jeu de données de drone ou des données d'exemple gratuites",
      "Les doses sont des exemples : les vraies doses d'engrais et de semences viennent des analyses de sol, de la recherche locale et de la vulgarisation",
      "La pulvérisation ou l'épandage par drone demande des autorisations aériennes et phytosanitaires",
      "Les données des agriculteurs sont privées et ne sont partagées qu'avec leur accord"
    ],
    prerequisites: "« Drones pour la surveillance agricole 3 : santé des cultures, ravageurs et traitement des données » (assembler une carte et faire une carte NDVI)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une carte de drone assemblée et de son rapport de traitement", action: "vérifier la précision de position et la qualité d'image de la carte et indiquer l'erreur", standard: "à l'aide de points de contrôle ou d'une méthode indiquée, avant toute analyse" },
    { id: "O2", condition: "À partir d'une culture, de son stade de croissance et de la caméra utilisée", action: "choisir un indice de végétation et expliquer pourquoi il convient", standard: "et le confirmer avec la carte en couleurs naturelles et sur le terrain" },
    { id: "O3", condition: "Avec QGIS et une carte d'indice", action: "créer des zones, indiquer la surface et l'indice moyen de chaque zone, et compter des plants ou des arbres", standard: "avec des comptages vérifiés sur un échantillon au sol et l'erreur indiquée" },
    { id: "O4", condition: "À partir de zones dont les causes ont été vérifiées sur le terrain", action: "construire une carte de préconisation avec une dose ou une tâche par zone", standard: "en utilisant deux à quatre doses tirées des analyses de sol ou des recommandations locales" },
    { id: "O5", condition: "Pour une action de précision proposée", action: "calculer un budget partiel avec un cas prudent et un cas probable", standard: "en ne comptant que ce qui change, et en disant honnêtement si ce n'est pas rentable" },
    { id: "O6", condition: "Pour un agriculteur ou un gestionnaire de domaine", action: "rédiger un résultat court qui commence par l'action, dans sa langue et ses unités", standard: "en montrant votre degré de certitude et ce qui a été vérifié sur le terrain" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'analyse des données",
      lessons: [
        {
          objectives: ["O1"],
          title: "La carte est-elle assez précise pour agir ?",
          minutes: 6,
          goal: "Vérifier la précision de position et la qualité d'image d'une carte de drone avant de l'analyser.",
          text: [
            "Avant d'envoyer des ouvriers dans une zone, vous devez être sûr que la carte place les choses au bon endroit. Le GNSS ordinaire d'un drone peut décaler une carte de quelques mètres. C'est suffisant pour trouver un coin humide, mais pas pour guider un travail rang par rang ou pour superposer des cartes de dates différentes.",
            "Trois façons d'améliorer et de vérifier la précision : les points de contrôle au sol (GCP), des cibles marquées au sol dont vous mesurez les coordonnées avec un récepteur GNSS précis et que vous utilisez au traitement ; les drones à positionnement RTK ou PPK, qui corrigent la position pendant ou après le vol ; et les points de vérification, des cibles mesurées en plus, non utilisées au traitement, qui servent à tester la carte finale. Indiquez l'erreur que vous avez mesurée.",
            "Vérifiez aussi la qualité : le rapport de traitement (combien d'images ont été utilisées, les avertissements), le vrai niveau de détail de l'image (GSD), le flou, les trous et les erreurs d'assemblage. Pour les cartes que vous comparerez dans le temps, utilisez la même méthode à chaque fois et vérifiez qu'elles se superposent bien."
          ],
          steps: ["Lisez le rapport de traitement : images utilisées, avertissements, GSD.", "Cherchez le flou, les trous et les erreurs d'assemblage.", "Mesurez l'erreur de position aux points de vérification (ou comparez avec des repères connus).", "Décidez si la précision convient à la décision.", "Pour les séries dans le temps, vérifiez que les cartes se superposent."],
          words: [["Point de contrôle au sol (GCP)", "une cible au sol dont les coordonnées sont mesurées avec précision, utilisée pour caler la position d'une carte."], ["RTK / PPK", "des méthodes qui corrigent la position du drone pendant (RTK) ou après (PPK) le vol pour une grande précision."], ["Point de vérification", "une cible mesurée qui sert seulement à tester la précision d'une carte."], ["Rapport de traitement", "le résumé que le logiciel d'assemblage produit sur la qualité d'une carte."]],
          slides: [
            { title: "La confiance avant l'action", bullets: ["GNSS ordinaire : quelques mètres d'erreur", "Bien pour des zones, pas pour des rangs", "Les séries dans le temps doivent se superposer"] },
            { title: "Améliorer la précision", bullets: ["Points de contrôle au sol (GCP)", "Drones RTK ou PPK", "Points de vérification pour tester le résultat"] },
            { title: "Vérifier la qualité", bullets: ["Rapport de traitement et avertissements", "Vrai GSD, flou, trous", "Même méthode à chaque date"] }
          ],
          sources: [ODM],
          tryIt: "Ouvrez le rapport de traitement d'une carte que vous avez faite (ou celui d'un jeu de données d'exemple). Notez le nombre d'images utilisées, le GSD, les avertissements, et décidez si la carte est assez précise pour (a) trouver les zones humides, (b) guider le remplacement de plants rang par rang.",
          youCanNow: "vérifier la précision et la qualité d'une carte de drone et décider si elle convient à la décision.",
          quickCheck: [
            { objective: "O1", q: "À quoi servent les points de contrôle ?", options: ["À tester la précision de la carte finale, car ils ne sont pas utilisés dans le traitement", "À faire atterrir le drone en sécurité", "À charger les batteries sur le terrain", "À marquer où les ouvriers commencent"], answer: 0, why: "Les points de contrôle sont des cibles mesurées en plus, gardées hors du traitement, pour mesurer l'erreur réelle de la carte." },
            { objective: "O1", q: "Vous allez comparer la carte de ce mois avec celle du mois dernier pour guider un travail rang par rang. Que vérifiez-vous d'abord ?", options: ["Seulement les couleurs", "L'état de la batterie du drone", "Que les deux cartes sont précises et se superposent bien", "Rien ; le GNSS ordinaire suffit toujours"], answer: 2, why: "Le GNSS ordinaire peut se tromper de quelques mètres : les cartes utilisées pour les rangs ou dans le temps doivent être précises et alignées." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Choisir le bon indice de végétation",
          minutes: 6,
          goal: "Choisir un indice de végétation adapté à la culture, à son stade et à la caméra.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red), où NIR est le proche infrarouge et Red le rouge, est l'indice le plus connu ; la FAO l'utilise à partir de satellites pour suivre la végétation en Afrique. Mais le NDVI a tendance à saturer dans les couverts denses et sains comme le maïs adulte, le thé ou le café : les valeurs se tassent près du maximum et les petites différences disparaissent.",
            "Le NDRE utilise la bande « red edge » (bord du rouge) au lieu du rouge : (NIR - RedEdge) / (NIR + RedEdge). Il reste sensible dans les couverts denses et montre souvent les différences d'azote et de chlorophylle plus tard dans la saison. Avec une simple caméra couleur, des indices comme le VARI, (Green - Red) / (Green + Red - Blue), ou l'Excess Green (excès de vert), 2 x Green - Red - Blue, séparent les plantes vertes du sol et montrent une vigueur approximative ; ils sont utiles pour la levée et les mauvaises herbes, mais moins fiables pour le stress.",
            "Choisissez selon la question : levée et mauvaises herbes en début de saison, un indice RVB ou le NDVI ; vigueur en milieu de saison dans les cultures ouvertes, le NDVI ; couverts denses et azote, le NDRE. Quel que soit votre choix, regardez aussi la carte en couleurs naturelles, et confirmez sur le terrain."
          ],
          words: [["Saturation", "quand un indice cesse de varier alors que les plantes diffèrent encore, comme le NDVI dans les couverts denses."], ["Red edge", "une bande étroite de lumière entre le rouge et le proche infrarouge, sensible à la chlorophylle."], ["NDRE", "indice de différence normalisée du red edge, plus sensible que le NDVI dans les couverts denses."], ["VARI", "indice de végétation résistant à l'atmosphère, calculé seulement avec les bandes visibles (RVB)."]],
          slides: [
            { title: "Le NDVI et sa limite", bullets: ["(NIR - Red) / (NIR + Red)", "Très utilisé, y compris par la FAO", "Sature dans les couverts denses"] },
            { title: "D'autres indices", bullets: ["NDRE : (NIR - RedEdge) / (NIR + RedEdge)", "VARI : (G - R) / (G + R - B)", "Excess Green : 2G - R - B"] },
            { title: "Choisir selon la question", bullets: ["Levée et mauvaises herbes : indice RVB ou NDVI", "Cultures ouvertes en milieu de saison : NDVI", "Couvert dense et azote : NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Pour chaque cas, choisissez un indice et dites pourquoi : (a) comptage des plants dans un maïs de 3 semaines avec un drone RVB, (b) différences d'azote dans un couvert de thé fermé avec un drone multispectral, (c) vigueur du manioc en milieu de saison avec un drone multispectral.",
          youCanNow: "choisir un indice de végétation adapté à la culture, à son stade et à la caméra.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi le NDVI peut-il manquer de petites différences dans un maïs adulte, du thé ou du café ?", options: ["Il ne fonctionne que la nuit", "Il sature dans les couverts denses et sains", "Il exige une caméra thermique", "Il ignore la bande proche infrarouge"], answer: 1, why: "Dans les couverts denses et sains, les valeurs du NDVI se tassent vers le haut, et les petites différences disparaissent." },
            { objective: "O2", q: "Vous n'avez qu'une caméra RGB et voulez voir la levée de la culture en début de saison. Quel indice choisissez-vous ?", options: ["Le NDRE", "Un indice thermique", "Aucun ; le RGB ne peut pas aider", "Un indice RGB comme le VARI ou l'Excess Green"], answer: 3, why: "Les indices RGB séparent les plantes vertes du sol et conviennent à la levée et aux mauvaises herbes en début de saison." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Statistiques par zone et comptage dans QGIS",
          minutes: 6,
          goal: "Mesurer la surface et l'indice moyen de chaque zone, et compter des plants ou des arbres.",
          text: [
            "L'analyse transforme une carte en couleurs en chiffres sur lesquels on peut agir. D'abord, créez des zones : classez la carte d'indice en classes (par exemple faible, moyen, élevé), transformez-les en polygones et supprimez les tout petits fragments ; ou dessinez les zones à la main avec les connaissances de l'agriculteur. Calculez la surface de chaque zone.",
            "Utilisez ensuite l'outil Statistiques zonales (Zonal Statistics) de QGIS pour calculer, pour chaque zone, la moyenne, le minimum, le maximum et la dispersion de l'indice. Comparez les zones entre elles, et les mêmes zones à différentes dates. Un tableau comme Zone A : 3,2 ha, NDVI moyen 0,71 ; Zone C : 0,8 ha, NDVI moyen 0,48 est bien plus facile à utiliser qu'une image.",
            "Comptage : pour les arbres (avocatier, manguier, caféier), les couronnes sont souvent nettes sur les cartes RVB très détaillées et peuvent être comptées à la main avec des points, ou avec des extensions et des scripts. Pour les cultures en rangs, comptez dans des placettes d'échantillon et extrapolez. Vérifiez toujours un échantillon des comptages sur le terrain et indiquez l'erreur."
          ],
          steps: ["Classez la carte d'indice en quelques classes, ou dessinez les zones avec l'agriculteur.", "Transformez les classes en polygones ; supprimez les petits fragments ; calculez la surface.", "Lancez Statistiques zonales pour la moyenne, le min, le max et la dispersion par zone.", "Comptez les arbres ou les plants (points, extension ou placettes).", "Vérifiez les comptages sur le terrain et indiquez l'erreur."],
          words: [["Statistiques par zone", "des chiffres (comme la moyenne) calculés pour les pixels à l'intérieur de chaque zone."], ["Polygone", "une forme fermée sur une carte, comme une zone ou la limite d'un champ."], ["Classer", "regrouper les valeurs des pixels en quelques classes, comme faible, moyen et élevé."]],
          slides: [
            { title: "Des couleurs aux chiffres", bullets: ["Classez la carte d'indice", "Transformez en polygones de zones, sans fragments", "Calculez la surface de chaque zone"] },
            { title: "Statistiques zonales", bullets: ["Moyenne, min, max, dispersion par zone", "Comparez les zones et les dates", "Zone A : 3,2 ha, NDVI moyen 0,71"] },
            { title: "Comptage", bullets: ["Couronnes d'arbres sur cartes RVB détaillées", "Cultures en rangs : placettes, extrapolation", "Vérifiez sur le terrain et indiquez l'erreur"] }
          ],
          sources: [QGIS],
          tryIt: "Dans QGIS, avec votre carte ou un échantillon : dessinez ou classez trois zones, calculez leur surface, lancez Statistiques zonales sur l'indice, et faites un tableau zone, surface et valeur moyenne. S'il s'agit d'arbres, comptez les arbres d'une zone.",
          youCanNow: "mesurer des zones et compter des plants ou des arbres dans QGIS et présenter les résultats sous forme de tableau.",
          quickCheck: [
            { objective: "O3", q: "Que vous donne un tableau de statistiques par zone ?", options: ["Une plus jolie image", "Le temps de vol du drone", "La facture du client", "Des chiffres comme la surface et l'indice moyen de chaque zone"], answer: 3, why: "Les statistiques par zone transforment une carte en couleurs en chiffres sur lesquels on peut agir." },
            { objective: "O3", q: "Votre logiciel a compté 1 240 avocatiers. Que faites-vous avant de l'annoncer ?", options: ["L'arrondir à 1 000", "Vérifier un échantillon des comptages sur le terrain et indiquer l'erreur", "Ajouter 10 % par sécurité", "L'annoncer sans vérifier"], answer: 1, why: "Les comptages sont vérifiés sur un échantillon au sol et l'erreur est indiquée." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'analyse des données",
        questions: [
          { objective: "O1", q: "À quoi sert un point de vérification ?", options: ["À caler la carte pendant le traitement", "À tester la précision de la carte finale", "À charger les batteries", "À faire atterrir le drone"], answer: 1, why: "Les points de vérification sont mesurés mais non utilisés au traitement : ils testent donc le résultat." },
          { objective: "O1", q: "Une carte est décalée d'environ 3 m. Elle est assez précise pour :", options: ["Guider le remplacement de plants rang par rang", "Mesurer des plants un par un", "Trouver un coin humide d'un champ", "Rien du tout"], answer: 2, why: "Quelques mètres d'erreur conviennent pour de grands éléments, pas pour des rangs." },
          { objective: "O2", q: "Pourquoi le NDVI peut-il montrer peu de différences sur un couvert de thé dense et adulte ?", options: ["Le NDVI sature dans les couverts denses", "Le thé n'a pas de feuilles", "Le drone volait trop bas", "Le NDVI ne marche que sur le sol"], answer: 0, why: "Les valeurs se tassent près du maximum dans une végétation dense." },
          { objective: "O2", q: "Quel indice peut être calculé avec une caméra RVB seulement ?", options: ["NDRE", "NDVI", "Aucun", "VARI"], answer: 3, why: "Le VARI n'utilise que les bandes verte, rouge et bleue." },
          { objective: "O3", q: "L'outil Statistiques zonales de QGIS vous donne :", options: ["Des prévisions météo", "Des chiffres comme l'indice moyen de chaque zone", "Une licence de pilote", "Les prix des semences"], answer: 1, why: "Il résume les valeurs des pixels à l'intérieur de chaque zone." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'agriculture de précision",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construire une carte de préconisation",
          minutes: 6,
          goal: "Transformer des zones en carte de préconisation avec une dose ou une tâche par zone.",
          text: [
            "Une carte de préconisation dit à une machine ou à un ouvrier quoi faire dans chaque zone. Partez de la cause, pas de la couleur : utilisez la vérification sur le terrain et, si possible, des analyses de sol pour comprendre pourquoi chaque zone est différente. Choisissez ensuite une action par zone : plus ou moins d'engrais, une autre densité de semis, un ressemis, un drainage, un désherbage, ou aucun changement.",
            "Les doses viennent de l'agronomie, pas du drone. Utilisez les résultats d'analyse de sol et les recommandations locales de votre institut national de recherche ou de votre service de vulgarisation pour la culture et la région. La carte dit seulement où va chaque dose. Gardez peu de doses (deux à quatre) pour que ce soit pratique.",
            "Pour les machines, exportez les zones en shapefile ou dans le format accepté par le boîtier de commande. Pour l'application à la main, imprimez ou partagez une carte de zones simple avec la consigne de chaque zone en grammes par poquet ou en sacs par zone, et marquez les zones dans le champ. Les préconisations de pulvérisation ou d'épandage appliquées par drone demandent les autorisations aériennes et phytosanitaires exigées par votre pays."
          ],
          steps: ["Confirmez la cause dans chaque zone (vérification terrain, analyses de sol).", "Choisissez une action par zone.", "Prenez les doses dans les analyses de sol et les recommandations locales.", "Gardez deux à quatre doses.", "Exportez pour les machines, ou faites une carte imprimée avec les consignes pour les ouvriers."],
          words: [["Carte de préconisation", "une carte qui dit à une machine ou à un ouvrier combien appliquer, ou quoi faire, dans chaque zone."], ["Shapefile", "un format de fichier SIG courant pour les zones et les limites."], ["Analyse de sol", "une analyse en laboratoire des éléments nutritifs et de l'acidité du sol."]],
          slides: [
            { title: "Partir de la cause", bullets: ["Vérifiez chaque zone sur le terrain", "Analyses de sol si possible", "Puis choisissez une action"] },
            { title: "Les doses viennent de l'agronomie", bullets: ["Analyses de sol et recommandations locales", "La carte dit où, pas combien", "Deux à quatre doses"] },
            { title: "La livrer", bullets: ["Machines : shapefile ou format du boîtier", "Travail manuel : carte imprimée, grammes par poquet", "Pulvérisation ou épandage par drone : autorisations"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Avec vos trois zones de la leçon 3, rédigez un tableau de préconisation : zone, surface, cause probable, action, dose (notée « selon la recommandation locale » si vous n'en avez pas), et comment les ouvriers trouveront la zone.",
          youCanNow: "construire une carte de préconisation pratique avec une dose ou une tâche par zone.",
          quickCheck: [
            { objective: "O4", q: "Que montre une carte de préconisation ?", options: ["Seulement les couleurs du NDVI", "La limite de la ferme", "Ce qu'il faut apporter ou faire dans chaque zone", "Les lignes de vol du drone"], answer: 2, why: "Une carte de préconisation dit à une machine ou à un ouvrier quoi faire dans chaque zone." },
            { objective: "O4", q: "Une zone paraît faible sur la carte. Que faites-vous avant de choisir une action ?", options: ["Trouver la cause par une vérification sur le terrain et, si possible, une analyse de sol", "Y mettre deux fois plus d'engrais", "La ressemer tout de suite", "L'ignorer"], answer: 0, why: "Partez de la cause, pas de la couleur ; l'action dépend de la raison pour laquelle la zone est différente." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Est-ce rentable ? Un budget partiel simple",
          minutes: 6,
          goal: "Calculer si une action de précision est rentable à l'aide d'un budget partiel.",
          text: [
            "Un budget partiel ne compare que ce qui change. D'un côté : les recettes en plus (plus de récolte vendue) et l'argent économisé (moins d'engrais là où il était gaspillé). De l'autre : les coûts en plus (service de drone, plus d'intrants dans certaines zones, main-d'œuvre) et les recettes perdues. Si le premier côté est plus grand, le changement est rentable.",
            "Exemple avec des chiffres fictifs en shillings kényans : une ferme de maïs de 4 hectares paie 6 000 KSh pour la cartographie. La préconisation déplace 2 sacs d'engrais d'une zone engorgée d'eau de 1 hectare, où ils étaient gaspillés, vers une zone moyenne de 2 hectares : aucun engrais en plus n'est acheté, et l'agriculteur attend 5 sacs de maïs en plus de cette zone. Bénéfice : 5 sacs x le prix local du sac. Coûts : 6 000 KSh de cartographie + la main-d'œuvre pour creuser un drain à la main. Utilisez les vrais prix locaux et une estimation prudente du rendement.",
            "Montrez une fourchette, car le rendement et le prix varient : un cas prudent et un cas probable. Comptez aussi les bénéfices difficiles à chiffrer, comme une alerte plus précoce contre la chenille légionnaire d'automne. Soyez honnête si les chiffres ne sont pas rentables pour une petite ferme ; une coopérative ou un service partagé peut changer la réponse."
          ],
          steps: ["Listez les recettes en plus et l'argent économisé.", "Listez les coûts en plus et les recettes perdues.", "Utilisez les prix locaux et des estimations prudentes du rendement.", "Calculez un cas prudent et un cas probable.", "Écrivez la réponse honnêtement, avec ce qui pourrait la changer."],
          words: [["Budget partiel", "une comparaison simple des seuls coûts et bénéfices qui changent quand vous changez une chose."], ["Seuil de rentabilité", "le point où les bénéfices en plus égalent tout juste les coûts en plus."]],
          slides: [
            { title: "Seulement ce qui change", bullets: ["Plus : recettes en plus, argent économisé", "Moins : coûts en plus, recettes perdues", "Plus supérieur à moins = rentable"] },
            { title: "Utilisez de vrais chiffres", bullets: ["Prix locaux par sac ou par kg", "Estimations prudentes du rendement", "Service, intrants, main-d'œuvre"] },
            { title: "Soyez honnête", bullets: ["Cas prudent et cas probable", "Comptez les bénéfices difficiles à chiffrer", "Petite ferme ? Un service partagé peut aider"] }
          ],
          tryIt: "Faites le budget partiel de l'exemple avec les vrais prix de votre marché local (prix du sac de maïs, prix du sac d'engrais, main-d'œuvre par jour). Calculez un cas prudent (3 sacs en plus) et un cas probable (5 sacs en plus). Est-ce rentable ?",
          youCanNow: "utiliser un budget partiel pour montrer si une action de précision est rentable.",
          quickCheck: [
            { objective: "O5", q: "Dans un budget partiel, qu'est-ce qui compte comme un coût ?", options: ["Les frais du service de cartographie par drone", "Le rendement supplémentaire vendu", "L'argent économisé sur l'engrais", "Un meilleur prix pour la récolte"], answer: 0, why: "Les coûts supplémentaires, comme le service de drone et la main-d'œuvre, vont du côté des coûts." },
            { objective: "O5", q: "Votre cas probable est rentable, mais votre cas prudent perd de l'argent. Que dites-vous à l'agriculteur ?", options: ["Seulement le cas probable", "Que c'est toujours rentable", "Les deux cas, honnêtement, avec ce qui fait la différence", "Rien sur l'argent"], answer: 2, why: "Le rendement et les prix varient : vous montrez une fourchette et restez honnête quand les chiffres sont proches." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Communiquer les résultats pour que les agriculteurs agissent",
          minutes: 5,
          goal: "Présenter les résultats d'une analyse sous une forme courte et claire qu'un agriculteur appliquera.",
          text: [
            "La meilleure analyse est perdue si l'agriculteur ne la comprend pas ou ne lui fait pas confiance. Commencez par la réponse et l'action : « La zone C (le coin bas près de la route, environ 2 acres) est engorgée d'eau. Creusez un drain avant l'apport d'engrais de couverture. N'y mettez pas d'engrais cette saison. » Montrez ensuite la carte avec des zones en couleurs simples et des repères connus.",
            "Utilisez le canal et la langue de l'agriculteur : une page imprimée, une image et un message court sur WhatsApp ou par SMS, ou un message vocal en kiswahili, haoussa, yoruba, igbo, wolof, bambara, lingala ou une autre langue locale. Utilisez les unités locales (acres, sacs, debes, qui sont des bidons de 20 litres) en plus des hectares et des kilogrammes. Gardez peu de chiffres.",
            "Dites à quel point vous êtes sûr, et ce qui a été confirmé sur le terrain. Proposez de parcourir le champ ensemble. Convenez de ce qui sera vérifié la prochaine fois, et notez ce que l'agriculteur a fait, pour que la prochaine analyse montre si cela a marché. Gardez les données des agriculteurs privées et ne les partagez qu'avec leur permission."
          ],
          steps: ["Écrivez d'abord la réponse et l'action, zone par zone.", "Montrez une carte simple avec des repères.", "Utilisez le canal, la langue et les unités de l'agriculteur.", "Dites à quel point vous êtes sûr et ce qui a été confirmé.", "Convenez d'un suivi et notez ce que l'agriculteur a fait."],
          words: [["Repère", "un élément que les gens connaissent, comme une route, un arbre, un magasin ou une rivière, qui sert à trouver les lieux."], ["Suivi", "une vérification ultérieure pour voir si l'action a marché."]],
          slides: [
            { title: "D'abord la réponse et l'action", bullets: ["Zone C, coin bas près de la route", "Creusez un drain avant l'engrais de couverture", "Puis la carte"] },
            { title: "Son canal, sa langue", bullets: ["Page imprimée, WhatsApp, SMS, message vocal", "Kiswahili, haoussa, yoruba, igbo, wolof et autres", "Acres, sacs, debes en plus des hectares"] },
            { title: "Créer la confiance", bullets: ["Dites à quel point vous êtes sûr", "Parcourez le champ ensemble", "Convenez d'un suivi ; données privées"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Exercice final : terminez votre analyse et rédigez le résultat d'une page pour l'agriculteur : la précision et comment elle a été vérifiée, l'indice et pourquoi, le tableau des zones et le comptage, la carte de préconisation, le budget partiel, et des actions en langage simple avec une date de suivi.",
          youCanNow: "livrer une analyse de drone sous forme d'actions claires et fiables qu'un agriculteur peut suivre.",
          quickCheck: [
            { objective: "O6", q: "Par quoi doit commencer le résultat destiné à un agriculteur ?", options: ["Par la formule de l'indice", "Par la réponse et l'action à mener", "Par le modèle du drone", "Par un long tableau"], answer: 1, why: "Commencer par la réponse et l'action aide l'agriculteur à agir." },
            { objective: "O6", q: "L'agriculteur lit le kiswahili et utilise WhatsApp. Comment envoyez-vous le résultat ?", options: ["Un long PDF en anglais par e-mail", "Un fichier de données brutes", "Rien ; prévenir seulement le bureau du domaine", "Une image de la carte des zones avec un court message ou un message vocal en kiswahili"], answer: 3, why: "Utilisez le canal et la langue de l'agriculteur, avec peu de chiffres et des unités locales." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'agriculture de précision",
        questions: [
          { objective: "O4", q: "D'où doivent venir les doses d'engrais d'une carte de préconisation ?", options: ["De la seule couleur de la carte de drone", "Des analyses de sol et des recommandations agronomiques locales", "D'une supposition", "Du fabricant du drone"], answer: 1, why: "La carte montre où ; l'agronomie fixe combien." },
          { objective: "O4", q: "Combien de doses sont pratiques dans la plupart des cartes de préconisation ?", options: ["Deux à quatre", "Cinquante", "Une par plante", "Aucune"], answer: 0, why: "Peu de doses, c'est facile à appliquer pour les ouvriers et les machines." },
          { objective: "O5", q: "Un budget partiel compare :", options: ["Tous les coûts de la ferme sur dix ans", "Seulement les coûts et bénéfices qui changent", "Seulement le prix du drone", "Seulement les prix des cultures"], answer: 1, why: "Il se concentre sur ce que le changement ajoute ou retire." },
          { objective: "O6", q: "Quelle est la meilleure première phrase pour le résultat d'un agriculteur ?", options: ["Le NDRE moyen du polygone 3 était de 0,31", "Le rapport de traitement comptait 412 images", "Nous avons utilisé QGIS 3", "La zone C près de la route est engorgée : creusez un drain avant l'engrais de couverture"], answer: 3, why: "Commencez par la réponse et l'action, en termes familiers." },
          { objective: "O5", q: "Un budget partiel montre que le changement n'est pas rentable sur une ferme d'un acre. Vous devez :", options: ["Changer les chiffres", "Cacher le résultat", "Le dire honnêtement et envisager un service partagé ou coopératif", "Doubler le prix"], answer: 2, why: "Des résultats honnêtes créent la confiance ; le partage peut changer l'équation économique." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones agricoles : analyse des données et agriculture de précision",
    questions: [
      { objective: "O1", q: "Le GNSS ordinaire d'un drone place en général une carte :", options: ["Parfaitement", "Avec quelques mètres d'erreur", "Avec des kilomètres d'erreur", "À l'envers"], answer: 1, why: "Sans corrections, l'erreur de position est de quelques mètres." },
      { objective: "O1", q: "Les points de contrôle au sol sont :", options: ["Des batteries de drone", "Des ouvriers agricoles", "Des cibles marquées au sol dont les coordonnées sont mesurées avec précision", "Un type d'indice"], answer: 2, why: "Les GCP calent la position de la carte pendant le traitement." },
      { objective: "O1", q: "Le RTK et le PPK sont :", options: ["Des méthodes qui corrigent la position du drone pour une grande précision", "Des maladies des cultures", "Des types d'engrais", "Des marques de caméras"], answer: 0, why: "Ils corrigent les positions GNSS pendant ou après le vol." },
      { objective: "O1", q: "Pourquoi les cartes de dates différentes doivent-elles se superposer ?", options: ["Pour la couleur", "Pour économiser de la mémoire", "Le logiciel l'exige", "Pour comparer les mêmes endroits dans le temps"], answer: 3, why: "Des cartes mal alignées font croire à de faux changements." },
      { objective: "O1", q: "Un rapport de traitement vous indique :", options: ["Les prix des cultures", "Les images utilisées, les avertissements et le GSD", "Le nom de l'agriculteur", "La météo"], answer: 1, why: "Il résume la qualité de la carte assemblée." },
      { objective: "O2", q: "La saturation du NDVI signifie :", options: ["Que l'indice ne montre plus les différences dans les couverts denses", "Que la caméra est mouillée", "Que la batterie est pleine", "Que la carte a des trous"], answer: 0, why: "Les valeurs se tassent près du maximum dans une végétation dense." },
      { objective: "O2", q: "Le NDRE utilise quelle bande à la place du rouge ?", options: ["Le bleu", "Le thermique", "Le red edge", "Le vert"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { objective: "O2", q: "L'Excess Green (2G - R - B) est utile pour :", options: ["Mesurer le pH du sol", "Prévoir la météo", "Compter de l'argent", "Séparer les plantes vertes du sol sur des images RVB"], answer: 3, why: "Il fait ressortir la végétation verte par rapport au sol." },
      { objective: "O2", q: "Pour les différences d'azote dans un couvert de caféiers dense, choisissez :", options: ["Excess Green", "NDRE", "Aucun indice", "Seulement le thermique"], answer: 1, why: "Le NDRE reste sensible là où le NDVI sature." },
      { objective: "O2", q: "Quel que soit l'indice utilisé, vous devez aussi :", options: ["Regarder la carte en couleurs naturelles et confirmer sur le terrain", "Supprimer les images brutes", "Ignorer l'agriculteur", "N'utiliser qu'une seule date"], answer: 0, why: "Les indices sont des indices ; la vérification terrain confirme." },
      { objective: "O3", q: "Transformer des pixels classés en zones crée :", options: ["Des batteries", "Seulement des points", "Des polygones", "Des vidéos"], answer: 2, why: "Les zones sont des polygones avec une surface." },
      { objective: "O3", q: "Pourquoi supprimer les tout petits fragments des zones ?", options: ["Pour changer de culture", "Pour la couleur", "Pour utiliser plus de mémoire", "Les ouvriers ne peuvent pas traiter de toutes petites parcelles"], answer: 3, why: "Des zones pratiques sont assez grandes pour être traitées." },
      { objective: "O3", q: "Les comptages d'arbres à partir d'une carte de drone doivent être :", options: ["Vérifiés sur un échantillon au sol, avec l'erreur indiquée", "Crus sans vérification", "Doublés", "Gardés secrets"], answer: 0, why: "La vérification au sol montre la précision du comptage." },
      { objective: "O4", q: "Une carte de préconisation dit :", options: ["Quel drone acheter", "Quoi appliquer ou faire dans chaque zone", "La météo", "Le revenu de l'agriculteur"], answer: 1, why: "Elle guide les ouvriers ou les machines zone par zone." },
      { objective: "O4", q: "Avant de choisir une action pour une zone faible, vous devez :", options: ["La pulvériser", "Mettre le maximum d'engrais", "Confirmer la cause par la vérification terrain et les analyses de sol", "La retirer de la carte"], answer: 2, why: "L'action doit corriger la vraie cause." },
      { objective: "O4", q: "Pour une application à la main, la meilleure forme de préconisation est :", options: ["Seulement un shapefile", "Une liste de valeurs de pixels", "Seulement un tableau de coordonnées", "Une carte de zones simple avec des grammes par poquet ou des sacs par zone"], answer: 3, why: "Les ouvriers ont besoin de consignes simples et pratiques." },
      { objective: "O5", q: "Dans un budget partiel, l'argent économisé sur l'engrais compte comme :", options: ["Un bénéfice", "Un coût", "Rien", "Des recettes perdues"], answer: 0, why: "Les économies sont du côté des bénéfices." },
      { objective: "O5", q: "Pourquoi calculer un cas prudent et un cas probable ?", options: ["Pour embrouiller l'agriculteur", "Parce que le rendement et les prix varient", "La loi l'exige", "Pour utiliser plus de papier"], answer: 1, why: "Une fourchette montre honnêtement le risque." },
      { objective: "O6", q: "Quelles unités aident beaucoup de petits agriculteurs à comprendre les résultats ?", options: ["Seulement les kilomètres carrés", "Seulement les pixels", "Les acres, les sacs et les debes en plus des hectares", "Seulement la notation scientifique"], answer: 2, why: "Des unités familières rendent les résultats utilisables." },
      { objective: "O6", q: "Pourquoi noter ce que l'agriculteur a fait après votre conseil ?", options: ["Pour vendre ses données", "Pour remplir un formulaire", "Ce n'est pas utile", "Pour que la prochaine analyse montre si cela a marché"], answer: 3, why: "Le suivi boucle la boucle et améliore les conseils." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      5,
      8,
      10,
      12,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie de l'analyse et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Précision de la carte",
        objective: "O1",
        notYet: "Aucune précision indiquée, ou pas de contrôle de qualité.",
        meets: "La précision de la carte et la façon de la vérifier sont indiquées, avec la qualité d'image vérifiée dans le rapport de traitement.",
        exceeds: "Utilise des points de contrôle et indique l'erreur mesurée."
      },
      {
        name: "Choix de l'indice",
        objective: "O2",
        notYet: "L'indice n'est pas justifié, ou ne convient pas à la culture ou à la caméra.",
        meets: "L'indice convient à la culture, au stade et à la caméra, avec une courte raison.",
        exceeds: "Compare deux indices et montre pourquoi l'un a été choisi."
      },
      {
        name: "Zones et comptages",
        objective: "O3",
        notYet: "Pas de statistiques par zone, ou des comptages non vérifiés.",
        meets: "La surface et l'indice moyen de chaque zone, et un comptage de plants ou d'arbres vérifié sur un échantillon au sol.",
        exceeds: "Compare les mêmes zones à deux dates."
      },
      {
        name: "Carte de préconisation",
        objective: "O4",
        notYet: "Les doses sont devinées ou il y a trop de doses.",
        meets: "Deux à quatre doses ou tâches par zone, tirées des recommandations locales, liées à des causes vérifiées sur le terrain.",
        exceeds: "Exportée dans un format utilisable par la machine ou les ouvriers."
      },
      {
        name: "Budget partiel",
        objective: "O5",
        notYet: "Pas de budget, ou il compte des éléments qui ne changent pas.",
        meets: "Un budget partiel avec un cas prudent et un cas probable, aux prix locaux.",
        exceeds: "Note les bénéfices difficiles à chiffrer et quand un service partagé aiderait."
      },
      {
        name: "Résultat pour l'agriculteur",
        objective: "O6",
        notYet: "Plus d'une page, ou commence par des détails techniques.",
        meets: "Une page qui commence par l'action, en langage simple et en unités locales, avec le degré de certitude.",
        exceeds: "Préparé dans la langue et le canal de l'agriculteur, avec une vérification de suivi convenue."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour l'analyse",
      "Les apprenants qui déclarent avoir remis une carte de préconisation ou un rapport par zone à un agriculteur ou à un domaine dans les 60 jours (enquête de suivi)",
      "Les agriculteurs ou les domaines qui déclarent avoir agi à partir d'un résultat de drone et noté ce qui s'est passé",
      "Les apprenants qui suivent un autre cours de drones ou d'agriculture de précision"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur portable avec QGIS gratuit installé",
      "Un jeu de données de drone d'un vrai champ, ou un jeu de données d'exemple gratuit",
      "Les doses recommandées localement par la vulgarisation ou la recherche, et les prix locaux des intrants et des récoltes",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour terminer l'analyse et le résultat pour l'agriculteur"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites l'étape des statistiques par zone en direct dans QGIS sur un jeu de données d'exemple partagé.",
      "Ne donnez pas de doses d'engrais ou de semences vous-même ; apportez les doses de la vulgarisation ou de la recherche pour la culture locale.",
      "Rappelez aux apprenants que la pulvérisation ou l'épandage par drone selon une préconisation demande des autorisations aériennes et phytosanitaires.",
      "N'utilisez que des données de ferme que l'agriculteur a accepté de partager, et retirez les noms des exemples en classe.",
      "Évaluez l'analyse avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
