"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-flight-imaging.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-fr",
  lang: "fr",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Drones pour la surveillance agricole 2 : opérations de vol, imagerie et capteurs",
  skills: "Faire une vérification avant vol, Voler en vue directe, Planifier un vol de cartographie automatique, Choisir la hauteur et le recouvrement, Choisir le bon capteur, Prendre des images nettes et régulières",
  outcome: "planifier et préparer un vol de cartographie au-dessus d'une parcelle : choisir le capteur, la hauteur, le recouvrement et l'heure, faire les vérifications avant vol, et prendre une série complète d'images nettes et régulières qui peuvent être assemblées en carte.",
  about: [
    "Voici le cours 2 du parcours de surveillance par drone, pour les agriculteurs, les agents de vulgarisation, le personnel des agro-entreprises et les jeunes prestataires de services par drone au Kenya, au Nigeria et partout en Afrique. Suivez d'abord le cours 1, ou assurez-vous de connaître déjà les règles sur les drones de votre pays et d'avoir l'immatriculation, la licence et les autorisations qu'elles exigent.",
    "Dans le chapitre 1, vous apprenez à préparer un drone, à le faire voler en sécurité en vue directe, et à planifier un vol de cartographie automatique avec la bonne hauteur et le bon recouvrement. Dans le chapitre 2, vous apprenez ce que montre chaque capteur (couleur, multispectral, thermique) et comment la lumière, le vent et l'heure font la différence entre une carte utile et une carte inutilisable.",
    "Les exemples sont de vraies tâches agricoles : une parcelle de maïs de 2 hectares, un bloc de thé, un champ de manioc, une serre horticole. Chaque leçon se termine par un court exercice pratique. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un plan de vol d'imagerie complet pour une parcelle de maïs de 2 hectares (réelle ou d'exemple) : objectif du vol, capteur, hauteur de vol et niveau de détail d'image indiqué par votre application de vol, recouvrement avant et latéral, vitesse de vol, nombre de batteries, heure, limites météo, lieu de décollage, et liste de vérification avant vol. Si vous avez un drone et les autorisations exigées, faites le vol et vérifiez chaque image avant de quitter le champ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des agriculteurs, des agents de vulgarisation, le personnel d'agro-entreprises et de jeunes prestataires de services par drone au Kenya, au Nigeria et partout en Afrique qui suivent le cours 2 du parcours de surveillance par drone.",
    startingPoint: "Les apprenants savent ce qu'un drone peut faire sur une ferme et comment trouver les règles sur les drones de leur pays (cours 1). Peu ont fait une vérification avant vol écrite, fait voler une grille de cartographie planifiée, réglé la hauteur et le recouvrement selon le détail voulu, ou savent quel capteur et quelle lumière donnent une carte utilisable.",
    gap: "Des vols mal préparés provoquent des accidents, et des vols mal planifiés ou faits au mauvais moment donnent des images floues et inégales qu'on ne peut ni assembler ni comparer, ce qui gaspille batteries, temps et argent des clients. Bien planifier et préparer un vol de cartographie donne dès la première fois un jeu d'images complet et net.",
    constraints: [
      "Niveau de lecture : des mots simples ; chaque terme de vol et d'imagerie est expliqué",
      "Appareils : un téléphone ou une tablette avec une application de cartographie aide ; un drone n'est nécessaire que pour le vol facultatif",
      "Règles : on ne vole qu'avec l'immatriculation, la licence et les autorisations exigées par le pays",
      "Conditions de terrain : vent, chaleur, nuages épars et pas de réseau mobile dans beaucoup de fermes",
      "Temps : des leçons courtes, plus du temps pour écrire le plan de vol"
    ],
    prerequisites: "« Drones pour la surveillance agricole 1 : introduction, réglementation et sécurité »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avant chaque vol", action: "faire une vérification complète avant vol de l'aéronef, des batteries, de la radiocommande, des réglages et des papiers", standard: "sans sauter aucun point de la liste" },
    { id: "O2", condition: "Lors d'un vol d'entraînement ou autorisé", action: "décoller, faire un parcours simple et atterrir en gardant le drone en vue", standard: "sous la limite de hauteur légale et en atterrissant avec de la batterie en réserve" },
    { id: "O3", condition: "Pour un champ à cartographier", action: "planifier un vol de cartographie en grille avec la hauteur, le détail d'image, le recouvrement, la vitesse et les batteries", standard: "avec un recouvrement d'environ 70 à 80 % vers l'avant et 60 à 70 % sur le côté" },
    { id: "O4", condition: "À partir d'une image de drone couleur haute résolution", action: "repérer les manques, les mauvaises herbes, l'eau, la verse et les dégâts", standard: "et marquer chaque endroit à vérifier à pied" },
    { id: "O5", condition: "Face à une question agricole", action: "choisir entre un capteur RVB, multispectral ou thermique", standard: "avec une raison adaptée à la question et au coût" },
    { id: "O6", condition: "Le jour d'un vol de cartographie", action: "fixer l'horaire et les limites de lumière et de vent, et vérifier chaque image avant de quitter le champ", standard: "pour que les images soient nettes, bien éclairées de façon égale et complètes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les opérations de vol",
      lessons: [
        {
          objectives: ["O1"],
          title: "Préparer le drone : la vérification avant vol",
          minutes: 5,
          goal: "Faire une vérification complète d'un drone avant chaque vol.",
          text: [
            "La plupart des accidents de drone commencent au sol : une hélice fissurée, une batterie à moitié chargée, une carte périmée dans l'application, ou une boussole non étalonnée. Une liste de vérification écrite, utilisée à chaque fois, en évite la plupart.",
            "Vérifiez l'aéronef (structure, bras, hélices serrées et intactes, caméra propre et bien fixée), les batteries (pleines, pas gonflées, contacts propres), la radiocommande et le téléphone ou la tablette (chargés, application mise à jour avant de partir, cartes hors ligne téléchargées s'il n'y a pas de réseau au champ), et les réglages (hauteur de retour au point de départ au-dessus de l'arbre ou de l'antenne la plus haute, point de départ enregistré).",
            "Faites aussi la vérification des papiers : immatriculation, licence de pilote et toute autorisation de vol exigée par votre autorité pour ce site, avec vous ou sur votre téléphone."
          ],
          steps: ["Papiers : immatriculation, licence, autorisations pour ce site.", "Aéronef : structure, bras, hélices, caméra.", "Batteries : chargées, pas gonflées, contacts propres.", "Radiocommande et téléphone ou tablette : chargés, appli à jour, cartes hors ligne prêtes.", "Réglages : hauteur de retour, point de départ, étalonnage de la boussole si l'appli le demande.", "Regardez autour : personnes, animaux, vent, puis démarrez."],
          words: [["Vérification avant vol", "une liste de contrôles faits avant chaque vol."], ["Retour au point de départ (RTH)", "un réglage qui fait revenir le drone seul à son point de décollage, par exemple quand la batterie est faible ou que le signal est perdu."], ["Point de départ", "l'endroit où le drone reviendra, en général là où il a décollé."]],
          slides: [
            { title: "Les accidents commencent au sol", bullets: ["Hélices fissurées, batteries faibles", "Cartes périmées, boussole non étalonnée", "Une liste à chaque fois en évite la plupart"] },
            { title: "Vérifiez le matériel", bullets: ["Structure, bras, hélices, caméra", "Batteries chargées, pas gonflées", "Radiocommande, téléphone, appli à jour, cartes hors ligne"] },
            { title: "Vérifiez les réglages", bullets: ["Hauteur de retour au-dessus de l'obstacle le plus haut", "Point de départ enregistré", "Boussole étalonnée si demandé"] },
            { title: "Vérifiez les papiers", bullets: ["Immatriculation et licence de pilote", "Autorisations pour ce site", "Gardez-les sur vous"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Rédigez votre propre liste de vérification avant vol avec au moins 12 points sous quatre titres : papiers, aéronef, batteries et radiocommande, réglages. Gardez-la sur votre téléphone.",
          youCanNow: "préparer un drone avec une vérification complète avant vol couvrant les papiers, l'aéronef, les batteries, la radiocommande et les réglages.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le point de départ ?", options: ["La maison du pilote", "L'endroit où le drone revient seul lors du retour au point de départ", "Le point le plus haut de la ferme", "Le magasin de drones"], answer: 1, why: "Le point de départ est enregistré avant le décollage pour que le retour au point de départ ramène le drone à cet endroit." },
            { objective: "O1", q: "Vous allez dans une ferme sans réseau mobile. Que faites-vous avant de partir de chez vous ?", options: ["Rien ; l'application marchera quand même", "Prévoir de mettre à jour l'application sur le terrain", "Laisser les batteries déchargées", "Télécharger les cartes hors ligne et mettre à jour l'application"], answer: 3, why: "Il faut mettre à jour les applications et télécharger les cartes hors ligne avant de partir, car il peut ne pas y avoir de réseau sur le terrain." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Voler en sécurité en vue directe",
          minutes: 5,
          goal: "Décoller, faire un parcours simple et atterrir en gardant le drone en vue.",
          text: [
            "Le vol en vue directe (VLOS) veut dire que vous, ou votre observateur, voyez le drone de vos propres yeux, sans jumelles, pendant tout le vol. La plupart des vols agricoles des petits producteurs et des nouveaux pilotes sont en VLOS. Voler hors de la vue directe demande une autorisation spéciale. La partie 21 du Nigeria, par exemple, exige le VLOS pour les petits drones et fixe une hauteur maximale de 120 mètres (400 pieds) au-dessus du sol pour de nombreuses opérations ; vérifiez les limites de votre pays.",
            "Décollez de votre endroit dégagé, montez à une hauteur sûre au-dessus des arbres et restez quelques secondes en vol stationnaire pour vérifier que le drone est stable. Volez lentement. Gardez le drone devant vous, pas au-dessus ni derrière vous, pour ne pas perdre de vue la direction dans laquelle il est tourné.",
            "Surveillez la batterie et le vent. Atterrissez avec assez de batterie pour un atterrissage sûr, jamais au dernier pour cent. Si le drone dérive fortement avec le vent, ramenez-le et atterrissez."
          ],
          steps: ["Placez-vous au lieu de décollage avec votre observateur.", "Décollez et montez au-dessus des arbres ; vol stationnaire pour vérifier la stabilité.", "Volez lentement en carré devant vous, en gardant le drone en vue.", "Surveillez la batterie et le vent à l'écran.", "Revenez, descendez lentement et atterrissez avec de la batterie en réserve."],
          words: [["VLOS", "vol en vue directe : vous voyez le drone de vos propres yeux pendant tout le vol."], ["BVLOS", "vol hors de la vue directe : voler plus loin que ce que vous voyez ; demande une autorisation spéciale."], ["AGL", "au-dessus du niveau du sol : hauteur mesurée depuis le sol sous le drone."]],
          slides: [
            { title: "Le vol en vue directe", bullets: ["Vous ou l'observateur voyez toujours le drone", "Sans jumelles", "Hors de vue : autorisation spéciale"] },
            { title: "Connaître la limite de hauteur", bullets: ["Nigeria partie 21 : 120 m (400 pieds) AGL pour de nombreux vols", "Vérifiez la limite de votre pays"] },
            { title: "Bien voler", bullets: ["Montez au-dessus des arbres, stationnez, vérifiez", "Volez lentement, gardez-le devant vous", "Surveillez batterie et vent"] },
            { title: "Atterrir avec une marge", bullets: ["Jamais au dernier pour cent", "Forte dérive : ramenez-le et atterrissez"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Si vous avez un drone et une autorisation, faites un carré lent devant vous et atterrissez avec de la batterie en réserve. Sinon, utilisez une application gratuite de simulateur de drone ou regardez une vidéo de formation et notez les étapes que vous avez vues.",
          youCanNow: "décoller, faire un parcours simple en vue directe et atterrir en sécurité avec de la batterie en réserve.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert de garder le drone « devant vous » ?", options: ["À charger la batterie", "À rendre les photos plus lumineuses", "À savoir dans quelle direction le drone est tourné", "À voler hors de vue"], answer: 2, why: "Garder le drone devant vous, et non au-dessus ou derrière, vous aide à suivre sa direction." },
            { objective: "O2", q: "Juste après le décollage, le drone dérive fortement avec le vent. Que faites-vous ?", options: ["Le ramener et atterrir", "Monter plus haut pour échapper au vent", "Voler plus vite pour finir", "Regarder ailleurs et le laisser voler"], answer: 0, why: "Si le drone dérive fortement avec le vent, ramenez-le et atterrissez." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planifier un vol de cartographie automatique",
          minutes: 6,
          goal: "Planifier un vol de cartographie en grille avec la bonne hauteur, le bon recouvrement et la bonne vitesse.",
          text: [
            "Pour faire la carte d'un champ, le drone vole en allers-retours en lignes droites (une grille, parfois appelée parcours « tondeuse ») et prend des photos qui se recouvrent. Les applications de cartographie vous laissent dessiner la limite du champ, puis tracent les lignes pour vous.",
            "La hauteur fixe le détail. Plus vous volez haut, plus chaque pixel couvre de terrain et moins vous avez de détail, mais plus vous finissez vite. L'application l'indique comme distance d'échantillonnage au sol (GSD), par exemple 2 cm par pixel. Pour compter des plants de maïs, il faut un détail fin ; pour voir les zones engorgées, un détail plus grossier suffit. Ne planifiez jamais au-dessus de votre limite légale de hauteur.",
            "Le recouvrement, c'est la part que chaque photo partage avec la suivante. Le logiciel a besoin de beaucoup de recouvrement pour assembler les photos en une seule carte ; beaucoup de guides de cartographie conseillent environ 70 à 80 % vers l'avant et 60 à 70 % sur le côté, davantage au-dessus de cultures hautes et uniformes comme le maïs ou le thé. Volez assez lentement pour que les photos soient nettes, et prévoyez assez de batteries pour finir."
          ],
          steps: ["Dessinez la limite du champ dans l'application de cartographie.", "Choisissez la hauteur : regardez le GSD obtenu et restez sous votre limite légale.", "Réglez le recouvrement avant et latéral (par exemple 75 et 65 %).", "Vérifiez la durée de vol et le nombre de batteries.", "Enregistrez le plan et relisez-le avant d'aller au champ."],
          words: [["Vol en grille", "un vol en lignes droites aller-retour qui couvre tout le champ."], ["Recouvrement", "la part, en pourcentage, que chaque photo partage avec la suivante."], ["GSD", "distance d'échantillonnage au sol : la surface de terrain couverte par un pixel, par exemple 2 cm."], ["Orthomosaïque", "une grande image unique, juste comme une carte, assemblée à partir de nombreuses photos qui se recouvrent."]],
          slides: [
            { title: "Un vol de cartographie", bullets: ["Lignes droites aller-retour", "Des photos qui se recouvrent", "Le logiciel les assemble en une carte"] },
            { title: "La hauteur fixe le détail", bullets: ["Plus haut = moins de détail, plus rapide", "Plus bas = plus de détail, plus de batteries", "Restez sous votre limite légale de hauteur"] },
            { title: "Le recouvrement permet l'assemblage", bullets: ["Environ 70-80 % avant, 60-70 % côté, c'est courant", "Davantage sur les cultures hautes et uniformes"] },
            { title: "Avant de partir", bullets: ["Vérifiez GSD, durée de vol, batteries", "Enregistrez le plan et relisez-le"] }
          ],
          tryIt: "Ouvrez une application gratuite de cartographie ou de planification de vol (ou le planificateur de l'application de votre drone) et dessinez un champ de 2 hectares. Essayez trois hauteurs et notez le GSD et la durée de vol pour chacune.",
          youCanNow: "planifier un vol de cartographie en grille et choisir la hauteur, le recouvrement et la vitesse pour la tâche.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un parcours en grille, ou « en tondeuse » ?", options: ["Des lignes droites en allers-retours au-dessus du champ", "Un cercle autour d'un arbre", "Une seule photo prise de très haut", "Un vol le long de la route"], answer: 0, why: "Les vols de cartographie suivent des lignes droites en allers-retours pour que les photos couvrent tout le champ avec du recouvrement." },
            { objective: "O3", q: "Vous voulez compter des plants de maïs, mais votre plan donne un détail grossier. Que changez-vous ?", options: ["Voler plus vite", "Réduire le recouvrement", "Voler plus bas pour un GSD plus fin, dans la limite légale", "Voler le soir"], answer: 2, why: "Voler plus bas donne plus de détail par pixel, mais jamais au-delà de vos limites légales." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les opérations de vol",
        questions: [
          { objective: "O1", q: "Pourquoi utiliser une liste de vérification écrite avant chaque vol ?", options: ["Cela fait professionnel", "La plupart des accidents commencent par un oubli au sol", "Le drone en a besoin pour démarrer", "Elle remplace la licence"], answer: 1, why: "Une liste repère les hélices fissurées, les batteries faibles et les mauvais réglages." },
          { objective: "O1", q: "À quelle hauteur régler le retour au point de départ ?", options: ["Le plus bas possible", "Sous l'arbre le plus haut", "Au-dessus de l'arbre ou de l'antenne la plus haute du site", "Cela n'a pas d'importance"], answer: 2, why: "Le drone doit franchir tous les obstacles quand il rentre seul." },
          { objective: "O2", q: "Que veut dire VLOS ?", options: ["Vous voyez le drone de vos propres yeux pendant tout le vol", "Le drone vous voit", "Le drone vole de nuit", "Le drone vole au-delà de l'horizon"], answer: 0, why: "Le vol en vue directe veut dire voir le drone à l'œil nu à tout moment." },
          { objective: "O3", q: "Vous volez plus haut pendant un vol de cartographie. Que se passe-t-il ?", options: ["Plus de détail par pixel", "Les photos ne se recouvrent plus", "Rien ne change", "Chaque pixel couvre plus de terrain et vous finissez plus vite"], answer: 3, why: "Un vol plus haut donne un GSD plus grossier mais couvre le champ plus vite." },
          { objective: "O3", q: "Pourquoi les photos de cartographie ont-elles besoin de beaucoup de recouvrement ?", options: ["Pour utiliser plus de batterie", "Pour que le logiciel puisse les assembler en une carte", "Pour rendre les photos plus claires", "Parce que la loi exige 100 %"], answer: 1, why: "Le logiciel d'assemblage associe les éléments communs aux photos qui se recouvrent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Imagerie aérienne et capteurs",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les images couleur (RVB) : ce qu'on peut voir",
          minutes: 5,
          goal: "Lire une image de drone couleur haute résolution pour repérer manques, mauvaises herbes, eau et dégâts.",
          text: [
            "Une caméra couleur normale (RVB) est le capteur le plus utile pour la plupart des fermes, et elle équipe presque tous les drones. À quelques centimètres par pixel, vous voyez les plants de maïs, de haricot ou de manioc un par un.",
            "Dans les images couleur, cherchez : les manques dans les rangs (mauvaise levée ou plants mangés par des ravageurs), les plaques de mauvaises herbes entre les rangs, l'eau stagnante et le sol nu, le maïs ou le sorgho versé (couché), les dégâts de grêle ou de vent, les bovins ou les chèvres au mauvais endroit, et les drains bouchés ou les clôtures cassées.",
            "Les images couleur peuvent aussi suggérer des carences ou des maladies (jaunissement, vert irrégulier), mais elles les montrent plus tard que l'œil sur le terrain ou qu'une caméra multispectrale. Marquez toujours l'endroit et allez le vérifier à pied."
          ],
          steps: ["Ouvrez l'image ou la carte et dézoomez pour voir tout le champ.", "Cherchez ce qui est irrégulier : manques, changements de couleur, eau, sol nu.", "Zoomez sur chacun.", "Marquez chaque endroit d'un numéro et d'une courte note.", "Allez vérifier les endroits à pied."],
          words: [["Image haute résolution", "une image au détail fin, où chaque pixel couvre une petite surface de terrain."], ["Verse", "quand les tiges de maïs, de sorgho ou de blé se plient ou tombent."]],
          slides: [
            { title: "RVB : le capteur de base", bullets: ["Équipe presque tous les drones", "Montre les plants un par un à quelques cm par pixel"] },
            { title: "Ce qu'il faut chercher", bullets: ["Manques dans les rangs, mauvaises herbes", "Eau stagnante, sol nu", "Maïs versé, dégâts de grêle ou de vent", "Animaux, clôtures cassées, drains bouchés"] },
            { title: "Limites", bullets: ["Montre tard les maladies et les carences", "Vérifiez toujours les endroits à pied"] }
          ],
          tryIt: "Trouvez en ligne une photo de drone ou une vue satellite d'une ferme (ou utilisez la vôtre). Listez cinq choses que vous voyez, marquez où se trouve chacune, et dites ce que vous vérifieriez sur le terrain.",
          youCanNow: "lire une image de drone couleur et marquer les manques, les mauvaises herbes, l'eau et les dégâts à vérifier sur le terrain.",
          quickCheck: [
            { objective: "O4", q: "Sur une image couleur, que peut montrer un manque dans un rang ?", options: ["Trop d'engrais", "Une batterie puissante", "Une bonne récolte", "Une mauvaise levée ou des plants mangés par des ravageurs"], answer: 3, why: "Les manques dans les rangs veulent souvent dire que les graines n'ont pas levé ou que les plants ont été mangés." },
            { objective: "O4", q: "L'image montre une tache inégale et jaunâtre dans un champ de haricots. Que faites-vous ?", options: ["Traiter tout le champ", "Marquer l'endroit et le vérifier à pied", "L'ignorer", "Supprimer l'image"], answer: 1, why: "Les images couleur peuvent signaler un problème, mais l'endroit doit être vérifié au sol." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Les capteurs multispectraux et thermiques",
          minutes: 6,
          goal: "Choisir entre un capteur RVB, multispectral ou thermique pour une question agricole.",
          text: [
            "Les feuilles vertes et saines réfléchissent beaucoup de proche infrarouge, une lumière que l'œil ne voit pas. Les feuilles stressées ou malades en réfléchissent moins. Une caméra multispectrale mesure plusieurs bandes de lumière, dont le proche infrarouge et le red edge (bord du rouge), pour que le logiciel calcule des indices de végétation comme le NDVI qui montrent la vigueur des plantes. La FAO utilise le NDVI issu des satellites pour suivre la santé de la végétation en Afrique ; les drones font la même chose à l'échelle du champ.",
            "Une caméra thermique mesure la température de surface. Les plantes qui manquent d'eau ferment leurs pores et se réchauffent : les images thermiques peuvent donc montrer le stress hydrique et les lignes d'irrigation bouchées. Le thermique est aussi utile pour trouver des animaux la nuit ou à l'aube.",
            "Ces capteurs coûtent plus cher et demandent un usage soigneux (étalonnage, bonne heure de la journée). Choisissez-les quand la question l'exige : stress précoce dans une plantation de thé ou des légumes irrigués, oui ; compter les manques dans une parcelle de haricots d'un acre, non, la couleur suffit."
          ],
          words: [["Proche infrarouge (NIR)", "une lumière juste au-delà du rouge que l'on ne voit pas ; les feuilles saines en réfléchissent beaucoup."], ["Indice de végétation", "un nombre calculé à partir de bandes de lumière qui montre à quel point les plantes sont vertes et vigoureuses."], ["NDVI", "indice de végétation par différence normalisée : un indice courant calculé avec le rouge et le proche infrarouge, de -1 à +1 ; plus il est élevé, plus la végétation est en général dense et saine."]],
          slides: [
            { title: "Multispectral", bullets: ["Mesure rouge, red edge, proche infrarouge et plus", "Le logiciel fait des cartes d'indice comme le NDVI", "Montre le stress plus tôt que la couleur"] },
            { title: "Thermique", bullets: ["Mesure la température de surface", "Les plantes en manque d'eau sont plus chaudes", "Trouve l'irrigation bouchée et les animaux à l'aube"] },
            { title: "Choisir selon la question", bullets: ["Manques et mauvaises herbes : RVB", "Stress précoce, cultures de valeur : multispectral", "Stress hydrique ou animaux : thermique"] }
          ],
          sources: [{ name: "FAO GIEWS, observation de la Terre (NDVI et indicateurs de végétation)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Pour chaque question, choisissez RVB, multispectral ou thermique et dites pourquoi : (a) Ma ligne de goutte-à-goutte est-elle bouchée ? (b) Où les haricots n'ont-ils pas levé ? (c) Un bloc de thé est-il stressé avant que les feuilles ne changent de couleur ?",
          youCanNow: "dire ce que montrent les capteurs multispectraux et thermiques et choisir le bon capteur pour une question agricole.",
          quickCheck: [
            { objective: "O5", q: "Que mesure une caméra thermique ?", options: ["La hauteur des plantes", "La température de surface", "Les nutriments du sol", "La pluie"], answer: 1, why: "Une caméra thermique mesure la température de surface, ce qui peut montrer un stress hydrique." },
            { objective: "O5", q: "Un domaine de thé veut repérer tôt le stress dans tous ses blocs. Quel capteur conseillez-vous ?", options: ["Aucun", "Une caméra thermique seulement pour les animaux", "Une caméra de téléphone", "Une caméra multispectrale"], answer: 3, why: "Les caméras multispectrales mesurent le proche infrarouge et le red edge, qui montrent plus tôt le stress des plantes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Prendre de bonnes images : lumière, vent et horaire",
          minutes: 5,
          goal: "Préparer un vol pour que chaque image soit nette, bien éclairée et utilisable.",
          text: [
            "Des images prises à plusieurs semaines d'écart ne peuvent être comparées que si elles sont prises de la même façon. Volez vers le milieu de la journée, quand les ombres sont courtes, et sous une lumière stable : plein soleil ou nuages uniformes, pas des nuages épars qui passent sur le champ. Volez à la même hauteur et avec les mêmes réglages à chaque fois.",
            "Le vent secoue le drone et fait bouger les feuilles, ce qui rend les images floues et empêche l'assemblage. Volez plus lentement par vent léger et pas du tout par vent fort. Vérifiez que l'objectif est propre et que la caméra fait bien la mise au point ; beaucoup d'applications de cartographie règlent la caméra pour vous.",
            "Pour les caméras multispectrales, photographiez le panneau d'étalonnage (une carte à la réflectance connue, fournie avec le capteur) avant et après le vol, pour que le logiciel corrige la lumière. Avant de quitter le champ, parcourez les photos : si certaines sont floues, sombres ou manquantes, refaites cette partie tant que vous êtes sur place."
          ],
          steps: ["Prévoyez de voler vers midi, sous une lumière stable.", "Vérifiez le vent ; ralentissez par vent léger, annulez par vent fort.", "Nettoyez l'objectif ; vérifiez les réglages de la caméra.", "Multispectral : photographiez le panneau d'étalonnage avant et après.", "Avant de partir, vérifiez les photos et refaites toute partie ratée."],
          words: [["Panneau d'étalonnage", "une carte à la luminosité connue, photographiée avant et après un vol multispectral pour corriger la lumière."], ["Flou", "quand une image n'est pas nette parce que la caméra ou les plantes ont bougé."]],
          slides: [
            { title: "Toujours de la même façon", bullets: ["Volez vers midi : ombres courtes", "Lumière stable : plein soleil ou nuages uniformes", "Même hauteur et mêmes réglages à chaque vol"] },
            { title: "Vaincre le flou", bullets: ["Ralentissez par vent léger", "Annulez par vent fort", "Objectif propre, bons réglages de caméra"] },
            { title: "En plus pour le multispectral", bullets: ["Photographiez le panneau d'étalonnage", "AVANT et APRÈS le vol"] },
            { title: "Vérifiez avant de partir", bullets: ["Parcourez les photos", "Refaites les parties floues, sombres ou manquantes"] }
          ],
          tryIt: "Exercice final : rédigez votre plan de vol d'imagerie complet pour une parcelle de maïs de 2 hectares : objectif, capteur, hauteur et GSD, recouvrement, vitesse, batteries, heure, limites météo, lieu de décollage et liste de vérification. Si vous avez un drone et les autorisations exigées, faites le vol et vérifiez chaque image avant de partir.",
          youCanNow: "planifier et prendre une série d'images nettes et bien éclairées qui peuvent être assemblées en carte agricole et comparées dans le temps.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un panneau d'étalonnage ?", options: ["Une hélice de rechange", "Un étui de batterie", "Une carte de réflectance connue photographiée avant et après un vol multispectral", "L'écran de la radiocommande"], answer: 2, why: "Photographier le panneau d'étalonnage permet au logiciel de corriger la lumière du jour." },
            { objective: "O6", q: "À midi, des nuages épars passent vite au-dessus du champ. Que faites-vous ?", options: ["Attendre un plein soleil ou un ciel couvert uniforme avant de voler", "Voler maintenant en espérant", "Voler plutôt au crépuscule", "Voler plus haut pour passer au-dessus des nuages"], answer: 0, why: "Une lumière stable, plein soleil ou ciel couvert uniforme, donne des images éclairées de façon égale et comparables." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Imagerie aérienne et capteurs",
        questions: [
          { objective: "O4", q: "Quel capteur suffit pour trouver les manques dans une parcelle de haricots d'un acre ?", options: ["Seulement le thermique", "Seulement le multispectral", "Une caméra couleur normale (RVB)", "Aucun capteur ne peut le faire"], answer: 2, why: "Les manques se voient facilement sur des images couleur à quelques centimètres par pixel." },
          { objective: "O5", q: "Les feuilles vertes et saines réfléchissent beaucoup :", options: ["De proche infrarouge", "De son", "Seulement de chaleur", "D'ondes radio"], answer: 0, why: "La structure d'une feuille saine réfléchit fortement le proche infrarouge ; les indices de végétation l'utilisent." },
          { objective: "O5", q: "Une image thermique montre un bloc de tomates bien plus chaud que le reste. Une cause probable à vérifier est :", options: ["Une couleur d'engrais trop forte", "Le drone volait trop haut", "Le bloc est plus vert", "Un stress hydrique ou une ligne de goutte-à-goutte bouchée"], answer: 3, why: "Les plantes qui manquent d'eau se réchauffent parce qu'elles ferment leurs pores." },
          { objective: "O6", q: "Quel est le meilleur moment pour voler et obtenir des images comparables ?", options: ["Au lever du soleil une semaine et au coucher la suivante", "Vers midi, sous une lumière stable, de la même façon à chaque fois", "Sous des nuages épars qui bougent", "La nuit"], answer: 1, why: "Des ombres courtes et une lumière stable rendent les images comparables." },
          { objective: "O6", q: "Certaines photos sont floues quand vous les vérifiez au champ. Vous devez :", options: ["Refaire cette partie avant de partir", "Rentrer et espérer que l'assemblage marche", "Supprimer toute la série", "Voler plus vite la prochaine fois"], answer: 0, why: "Corriger sur place évite un autre déplacement et donne une carte complète." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones pour la surveillance agricole 2 : opérations de vol, imagerie et capteurs",
    questions: [
      { objective: "O1", q: "Où commencent la plupart des accidents de drone ?", options: ["Seulement en l'air", "Au sol, avec un oubli pendant la préparation", "Au bureau", "Dans le logiciel après l'atterrissage"], answer: 1, why: "Hélices fissurées, batteries faibles et mauvais réglages causent beaucoup d'accidents." },
      { objective: "O1", q: "Lequel fait partie de la vérification des papiers ?", options: ["Le serrage des hélices", "Le nettoyage de l'objectif", "L'immatriculation, la licence et les autorisations pour le site", "Le gonflement des batteries"], answer: 2, why: "La vérification des papiers confirme que vous avez le droit de voler à cet endroit." },
      { objective: "O1", q: "Une batterie semble gonflée. Vous devez :", options: ["Ne pas l'utiliser", "L'utiliser pour un vol court", "L'aplatir en la serrant", "La charger davantage"], answer: 0, why: "Une batterie gonflée peut lâcher ou prendre feu ; ne volez pas avec." },
      { objective: "O1", q: "Pourquoi télécharger des cartes hors ligne avant d'aller dans une ferme rurale ?", options: ["Pour économiser du carburant", "Pour rendre le drone plus rapide", "Parce que la loi l'exige", "Il n'y a peut-être pas de réseau mobile au champ"], answer: 3, why: "Sans réseau, l'application peut ne pas charger les cartes dont elle a besoin." },
      { objective: "O1", q: "Le retour au point de départ, c'est :", options: ["Un réglage qui fait revenir seul le drone à son point de décollage", "Un bouton qui coupe les moteurs", "Un mode de caméra", "Un type de batterie"], answer: 0, why: "Le RTH ramène le drone en cas de batterie faible ou de perte de signal." },
      { objective: "O2", q: "Voler hors de la vue directe :", options: ["Est toujours permis", "Demande une autorisation spéciale", "Est obligatoire pour la cartographie", "Est plus sûr"], answer: 1, why: "Le BVLOS est à risque plus élevé et demande une autorisation." },
      { objective: "O2", q: "La partie 21 du Nigeria fixe une hauteur maximale courante de :", options: ["10 mètres", "1 000 mètres", "120 mètres (400 pieds) au-dessus du sol", "Aucune limite"], answer: 2, why: "La partie 21 utilise 120 m (400 pieds) AGL pour de nombreuses opérations ; vérifiez la limite de votre pays." },
      { objective: "O2", q: "Pendant un vol, où devez-vous garder le drone ?", options: ["Derrière vous", "Juste au-dessus de vous", "Hors de vue", "Devant vous, en vue"], answer: 3, why: "Devant vous et en vue, vous savez dans quelle direction il est tourné." },
      { objective: "O2", q: "Quand devez-vous atterrir ?", options: ["Avec de la batterie en réserve", "À 0 %", "Seulement quand le drone atterrit tout seul", "Quand le téléphone est plein"], answer: 0, why: "Gardez assez de batterie pour une descente et un atterrissage sûrs." },
      { objective: "O3", q: "Un vol de cartographie se fait :", options: ["En cercles", "En lignes droites aller-retour", "Au hasard", "En montant et descendant à la verticale"], answer: 1, why: "Une grille couvre tout le champ avec des photos qui se recouvrent." },
      { objective: "O3", q: "GSD veut dire :", options: ["La vitesse du drone au sol", "Une distance de sécurité mondiale", "La surface de terrain couverte par un pixel", "La taille de la batterie"], answer: 2, why: "La distance d'échantillonnage au sol est le détail de l'image, par exemple 2 cm par pixel." },
      { objective: "O3", q: "Pour compter les plants de maïs un par un, vous devez :", options: ["Voler le plus haut possible", "Utiliser seulement des satellites", "Voler de nuit", "Voler plus bas pour un détail plus fin, dans la limite légale"], answer: 3, why: "Un GSD plus fin montre les plants un par un ; restez sous la limite de hauteur." },
      { objective: "O3", q: "Un recouvrement avant courant pour la cartographie est d'environ :", options: ["70 à 80 %", "5 %", "0 %", "Exactement 100 %"], answer: 0, why: "Un fort recouvrement permet au logiciel d'assembler les photos." },
      { objective: "O4", q: "La verse, sur une image couleur, ce sont :", options: ["Des plantes trop vertes", "Des tiges pliées ou tombées", "Des mauvaises herbes entre les rangs", "De l'eau sur le sol"], answer: 1, why: "Le maïs ou le sorgho versé est couché et se voit facilement d'en haut." },
      { objective: "O4", q: "Une image couleur montre une tache qui jaunit. La meilleure étape suivante est de :", options: ["La pulvériser", "L'ignorer", "La marquer et la vérifier à pied", "Voler plus haut"], answer: 2, why: "Les images montrent où ; vous confirmez la cause sur le terrain." },
      { objective: "O5", q: "Le NDVI est calculé à partir :", options: ["Du son et de la chaleur", "Seulement de la lumière bleue", "D'échantillons de sol", "De la lumière rouge et proche infrarouge"], answer: 3, why: "Le NDVI compare la réflectance du rouge et du proche infrarouge." },
      { objective: "O5", q: "Une valeur de NDVI élevée veut dire en général :", options: ["Une végétation verte dense et saine", "Un sol nu", "De l'eau", "Une caméra cassée"], answer: 0, why: "La FAO décrit un NDVI fortement positif comme une végétation dense et saine." },
      { objective: "O5", q: "Une caméra thermique est un bon choix pour :", options: ["Lire une plaque d'immatriculation", "Trouver le stress hydrique et les animaux à l'aube", "Compter les graines d'un sac", "Voir les couleurs plus vives"], answer: 1, why: "Le thermique mesure la chaleur, liée au stress hydrique et aux animaux à sang chaud." },
      { objective: "O6", q: "Pourquoi photographier un panneau d'étalonnage avec une caméra multispectrale ?", options: ["C'est un souvenir", "Pour tester les hélices", "Pour que le logiciel corrige la lumière du jour", "Pour mesurer le vent"], answer: 2, why: "La réflectance connue du panneau permet au logiciel de corriger les mesures." },
      { objective: "O6", q: "Un vent fort en rafales le jour d'un vol de cartographie veut dire :", options: ["Voler plus vite", "Voler plus haut", "Retirer les hélices", "Ne pas voler ; reporter"], answer: 3, why: "Un vent fort met le contrôle en danger et gâche les images." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du plan et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Objectif et capteur",
        objective: "O5",
        notYet: "Pas d'objectif, ou le capteur ne convient pas à l'objectif.",
        meets: "Un objectif clair pour le vol et un capteur qui lui convient, avec une raison.",
        exceeds: "Explique pourquoi un capteur moins cher ou plus cher n'a pas été choisi."
      },
      {
        name: "Hauteur, détail et recouvrement",
        objective: "O3",
        notYet: "La hauteur, le GSD ou le recouvrement manque, ou dépasse la limite de hauteur légale.",
        meets: "La hauteur et le GSD affiché par l'application, le recouvrement avant et latéral, la vitesse et le nombre de batteries.",
        exceeds: "Montre comment le détail convient au travail, par exemple compter des plants."
      },
      {
        name: "Lumière, vent et horaire",
        objective: "O6",
        notYet: "Pas d'heure ni de limites météo.",
        meets: "L'heure, la lumière, les limites de vent et un plan pour vérifier chaque image avant de partir.",
        exceeds: "Inclut les étapes du panneau d'étalonnage ou une date de réserve."
      },
      {
        name: "Liste avant vol",
        objective: "O1",
        notYet: "La liste oublie l'aéronef, les batteries, les réglages ou les papiers.",
        meets: "Couvre l'aéronef, les batteries, la radiocommande et l'application, les réglages du retour au point de départ et les papiers.",
        exceeds: "Ajoute le point de décollage et la façon de garder le drone en vue."
      },
      {
        name: "Vol en sécurité",
        objective: "O2",
        notYet: "Pas de point de décollage, ou vol hors de vue sans autorisation.",
        meets: "Un point de décollage clair, un vol en vue et sous la hauteur légale, et un atterrissage avec de la batterie en réserve.",
        exceeds: "Nomme un observateur et les étapes si le vent se lève."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le plan de vol",
      "Les apprenants qui ont les autorisations et déclarent avoir fait un vol de cartographie planifié et obtenu un jeu d'images complet dans les 60 jours (enquête de suivi)",
      "Les apprenants qui passent au cours 3 du parcours drones",
      "Les prestataires de services par drone qui déclarent moins de vols à refaire ou d'accidents après la formation"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou une tablette avec une application de cartographie par drone, ou des captures d'écran d'une telle application",
      "Un cahier ou une liste imprimée",
      "Un drone avec son immatriculation, sa licence et ses autorisations, seulement pour le vol d'entraînement facultatif",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour écrire le plan de vol"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis planifiez un vol de cartographie d'exemple sur un écran pour que tout le monde voie changer la hauteur, le GSD et le recouvrement.",
      "Tout vol d'entraînement doit suivre les règles du pays, avec un pilote titulaire d'une licence et les autorisations en place, et les spectateurs tenus à distance.",
      "Faites la liste avant vol à voix haute sur un drone réel ou en photo, et n'utilisez pas de batteries gonflées.",
      "Utilisez des images d'exemple si aucun drone n'est disponible, pour que les apprenants s'exercent à lire les images couleur, multispectrales et thermiques.",
      "Évaluez le plan de vol avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
