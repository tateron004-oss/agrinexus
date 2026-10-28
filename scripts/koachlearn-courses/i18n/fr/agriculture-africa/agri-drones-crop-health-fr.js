"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-crop-health.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// QGIS tool names are given as in the French QGIS interface, with the English name in brackets the first time.

const FAO_EO = { name: "FAO GIEWS, observation de la Terre (NDVI et indicateurs de végétation)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO : application mobile pour soutenir la lutte contre la chenille légionnaire d'automne en Afrique (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (logiciel libre et gratuit de cartographie par drone)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (SIG libre et gratuit)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-fr",
  lang: "fr",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Drones pour la surveillance agricole 3 : santé des cultures, ravageurs et traitement des données",
  skills: "Lire une carte NDVI de santé des cultures, Repérer tôt les signes de ravageurs, de maladies et de stress, Vérifier sur le terrain les zones à problème, Assembler des photos de drone en carte, Faire une carte d'indice dans QGIS, Rédiger un rapport d'action pour le champ",
  outcome: "transformer une série de photos de drone d'un champ en carte de santé des cultures, trouver les zones à problème, les vérifier sur le terrain, et rédiger un court rapport d'action utile pour l'agriculteur.",
  about: [
    "Voici le cours 3 du parcours de surveillance par drone, pour les agents de vulgarisation, les agronomes, les gestionnaires de fermes et les jeunes prestataires de services par drone au Kenya, au Nigeria et partout en Afrique. Vous devez savoir prendre une série d'images de drone qui se recouvrent (cours 2) ou avoir une série avec laquelle travailler ; des jeux de données d'exemple gratuits existent en ligne.",
    "Le chapitre 1 vous apprend à lire les cartes de santé des cultures et à reconnaître les formes que laissent les premiers problèmes de ravageurs, de maladies, d'eau et de nutriments sur le maïs, le manioc, le haricot, le thé et le café, et comment les confirmer sur le terrain. Le chapitre 2 vous apprend à assembler des photos en carte avec un logiciel gratuit, à faire une carte NDVI dans QGIS, et à rédiger un rapport qui mène à l'action.",
    "Une carte de drone ne remplace jamais les yeux de l'agriculteur ni le diagnostic de l'agent de vulgarisation. Elle montre où regarder d'abord, pour que le temps et l'argent, qui sont rares, aillent au bon endroit. Chaque leçon dure environ cinq minutes plus un exercice pratique ; un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "À partir d'une carte de drone d'un vrai champ ou d'un jeu de données d'exemple gratuit : faites une carte NDVI ou couleur, marquez au moins trois zones à problème, rédigez un plan de vérification sur le terrain (ce qu'il faut chercher dans chaque zone), et rédigez pour l'agriculteur un rapport d'action d'une page avec une image de la carte, ce qui a été trouvé ou est soupçonné, l'étape suivante conseillée pour chaque zone, et qui contacter pour confirmer.",
  chapters: [
    {
      name: "Chapitre 1 : Lire la santé des cultures",
      lessons: [
        {
          title: "Lire une carte NDVI de santé des cultures",
          minutes: 5,
          goal: "Lire une carte NDVI grâce à son échelle de couleurs et trouver les zones faibles et fortes.",
          text: [
            "Le NDVI (indice de végétation par différence normalisée) compare la lumière proche infrarouge et rouge réfléchie par les plantes. Les valeurs vont de -1 à +1. La FAO explique que des valeurs fortement positives suggèrent une végétation dense et saine, tandis que des valeurs faibles ou négatives suggèrent une couverture clairsemée, un sol nu ou de l'eau.",
            "Sur une carte NDVI de drone, chaque pixel reçoit une couleur selon une échelle, souvent du rouge pour les valeurs faibles au vert pour les valeurs fortes. Lisez toujours la légende : les couleurs sont relatives à cette carte. Un champ tout rouge en début de saison peut simplement avoir de petits plants et beaucoup de sol nu.",
            "Cherchez les différences à l'intérieur du champ, pas seulement la couleur. Une tache faible dans un champ de maïs par ailleurs régulier mérite une visite. Comparez avec les cartes précédentes du même champ : une tache qui grandit semaine après semaine compte plus qu'une tache qui reste pareille."
          ],
          steps: ["Lisez la légende : quelle couleur est faible, laquelle est forte ?", "Notez la culture et son stade : les jeunes cultures montrent plus de sol.", "Cherchez les taches différentes du reste du champ.", "Comparez avec une carte précédente : la tache est-elle nouvelle ou grandit-elle ?", "Marquez les zones à visiter."],
          words: [["NDVI", "un indice de végétation de -1 à +1 ; plus il est élevé, plus les plantes sont en général denses, vertes et saines."], ["Légende", "la clé qui explique ce que veut dire chaque couleur d'une carte."], ["Stade de croissance", "le niveau de développement de la culture, de la plantule à la récolte."]],
          slides: [
            { title: "Le NDVI en une ligne", bullets: ["Compare le proche infrarouge et le rouge", "De -1 à +1", "Élevé = vert dense et sain ; faible = clairsemé, sol ou eau"] },
            { title: "Lisez d'abord la légende", bullets: ["Les couleurs sont relatives à la carte", "Les jeunes cultures montrent plus de sol"] },
            { title: "Cherchez les différences", bullets: ["Taches différentes du reste", "Les taches nouvelles ou qui grandissent comptent le plus", "Marquez les zones à visiter"] }
          ],
          sources: [FAO_EO],
          tryIt: "Trouvez une carte NDVI d'exemple en ligne (cherchez une carte NDVI d'un champ de maïs) ou utilisez l'une des vôtres. Lisez la légende, marquez deux zones faibles et une zone forte, et notez à quel stade la culture pourrait être.",
          youCanNow: "lire la légende d'une carte NDVI et trouver les zones faibles et fortes qui méritent une visite."
        },
        {
          title: "Repérer tôt les signes de ravageurs, de maladies et de stress",
          minutes: 6,
          goal: "Reconnaître les formes sur la carte qui signalent des ravageurs, des maladies, un problème d'eau ou de nutriments.",
          text: [
            "Chaque problème laisse une forme différente sur une carte. Des taches qui commencent petites et s'étendent au fil des semaines peuvent signaler des ravageurs ou une maladie, comme la chenille légionnaire d'automne dans le maïs ou les maladies virales du manioc. Des problèmes le long d'un bord peuvent venir du champ voisin, d'une route ou du vent. Les bandes droites suivent en général les personnes ou les machines : un rang d'engrais oublié, une ligne d'irrigation bouchée, une panne du semoir.",
            "Les coins bas et humides et les creux signalent un engorgement en eau ; les terrains hauts, sableux ou en pente signalent un stress hydrique, surtout sur les images thermiques de l'après-midi. Un jaunissement régulier sur tout le champ peut signaler un manque de nutriments comme l'azote, mais aussi la sécheresse.",
            "Une forme est un indice, pas un diagnostic. Les maladies et les ravageurs se ressemblent vus du ciel, et les traitements sont très différents. Les observations de chenille légionnaire d'automne peuvent être enregistrées avec l'application FAMEWS de la FAO là où elle est utilisée ; confirmez tout ravageur ou maladie soupçonné avec un agent de vulgarisation ou une clinique des plantes avant d'agir."
          ],
          words: [["Forme", "l'aspect et l'étendue d'un problème sur une carte : tache, bord, bande, creux."], ["Chenille légionnaire d'automne", "une chenille ravageuse qui mange le maïs et d'autres cultures ; elle s'est répandue en Afrique à partir de 2016."], ["Clinique des plantes", "un lieu où du personnel formé diagnostique les problèmes de plantes apportés par les agriculteurs."]],
          slides: [
            { title: "Les formes racontent une histoire", bullets: ["Taches qui s'étendent : ravageurs ou maladie ?", "Un bord : voisin, route ou vent ?", "Bandes droites : machines, engrais ou irrigation"] },
            { title: "Eau et nutriments", bullets: ["Creux bas et humides : engorgement", "Pentes hautes et sableuses : stress hydrique", "Jaunissement régulier : nutriments ou sécheresse"] },
            { title: "Un indice, pas un diagnostic", bullets: ["Ravageurs et maladies se ressemblent vus du ciel", "Les traitements sont très différents", "Confirmez avec la vulgarisation ou une clinique des plantes"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Dessinez quatre petits croquis d'un champ : un avec une tache qui s'étend, un avec un problème le long d'un bord, un avec des bandes, un avec un coin bas et humide. Sous chacun, écrivez deux causes possibles.",
          youCanNow: "reconnaître les formes de problèmes courantes sur une carte des cultures et lister les causes probables à vérifier."
        },
        {
          title: "La vérification sur le terrain : contrôler les zones à pied",
          minutes: 5,
          goal: "Visiter chaque zone à problème avec un plan et noter ce que vous trouvez.",
          text: [
            "La vérification sur le terrain consiste à aller à l'endroit exact de la carte et à contrôler ce qui s'y trouve vraiment. Chargez la carte sur votre téléphone avec le GPS (beaucoup d'applications gratuites de cartes et de SIG peuvent montrer votre position sur une carte de drone), ou notez les coordonnées de chaque zone.",
            "Dans chaque zone, regardez les plantes, les feuilles (dessus et dessous), les tiges et les racines, le sol et l'humidité, et les insectes. Comparez avec des plantes saines à quelques mètres, dans une zone forte. Prenez des photos nettes et de courtes notes.",
            "Notez vos observations de la même façon à chaque fois : numéro de zone, coordonnées, culture et stade, ce que vous avez vu, cause probable, degré de certitude, et numéros des photos. De bons registres rendent la carte suivante plus facile à lire, et aident l'expert qui confirmera la cause."
          ],
          steps: ["Numérotez chaque zone et notez ses coordonnées.", "Allez-y avec une carte GPS sur votre téléphone.", "Contrôlez plantes, feuilles, tiges, racines, sol, humidité et insectes.", "Comparez avec un endroit sain à proximité.", "Notez zone, coordonnées, ce que vous avez vu, cause probable, certitude, numéros des photos."],
          words: [["Vérification sur le terrain", "contrôler au sol ce que montre une carte ou une image."], ["Coordonnées", "les nombres de latitude et de longitude qui donnent un lieu exact."]],
          slides: [
            { title: "Allez à l'endroit exact", bullets: ["Carte avec GPS sur votre téléphone", "Ou notez les coordonnées de chaque zone"] },
            { title: "Regardez de près", bullets: ["Feuilles dessus et dessous, tiges, racines", "Sol et humidité, insectes", "Comparez avec un endroit sain à côté"] },
            { title: "Notez toujours de la même façon", bullets: ["Zone, coordonnées, culture et stade", "Ce que vous avez vu, cause probable, certitude", "Numéros des photos"] }
          ],
          tryIt: "Créez une fiche de vérification sur le terrain (sur papier ou dans un tableur sur téléphone) avec ces colonnes : zone, coordonnées, culture et stade, ce que j'ai vu, cause probable, certitude, photos. Remplissez une ligne pour une zone réelle ou d'exemple.",
          youCanNow: "planifier et faire une visite de vérification sur le terrain et noter les observations dans une fiche claire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Lire la santé des cultures",
        questions: [
          { q: "Une carte NDVI d'un champ est presque toute rouge en début de saison. La raison la plus probable est :", options: ["Le drone était cassé", "De petits plants et beaucoup de sol nu", "Tout est mort", "Il a plu"], answer: 1, why: "Les jeunes cultures couvrent peu le sol, donc le sol fait baisser les valeurs." },
          { q: "Quelle tache visiter en premier ?", options: ["Une tache identique au mois dernier", "La zone la plus verte", "Une tache faible qui a grandi depuis la dernière carte", "La bordure du champ avec de l'herbe"], answer: 2, why: "Une tache qui grandit suggère un problème actif qui s'étend." },
          { q: "Des bandes droites de culture faible dans un champ signalent en général :", options: ["Des machines, de l'engrais ou des lignes d'irrigation", "Un virus qui part d'une plante", "Le vent d'un côté", "Rien"], answer: 0, why: "Les lignes droites suivent la façon dont les gens et les machines travaillent le champ." },
          { q: "Une carte de drone suggère fortement une maladie. Avant de pulvériser, vous devez :", options: ["Pulvériser le produit le plus fort", "Publier la carte en ligne", "Pulvériser toute la ferme", "Confirmer la cause avec un agent de vulgarisation ou une clinique des plantes"], answer: 3, why: "Ravageurs et maladies se ressemblent vus du ciel et demandent des traitements différents." },
          { q: "Pourquoi comparer une zone faible avec des plantes saines à quelques mètres ?", options: ["Pour voir ce qui est différent", "Pour économiser la batterie", "Parce que la loi l'exige", "Pour trouver un meilleur signal téléphonique"], answer: 0, why: "La comparaison côte à côte montre ce qui ne va pas chez les plantes faibles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Traiter les données de drone",
      lessons: [
        {
          title: "Assembler des photos en carte",
          minutes: 6,
          goal: "Transformer une série de photos de drone qui se recouvrent en une seule orthomosaïque.",
          text: [
            "Le logiciel d'assemblage associe les éléments communs aux photos qui se recouvrent, calcule où chacune a été prise, et construit une seule image juste comme une carte, appelée orthomosaïque. Il peut aussi produire un modèle d'élévation (la hauteur du sol et de la culture).",
            "Il existe des options gratuites. OpenDroneMap est un logiciel libre et gratuit, et son interface WebODM vous permet de charger les photos dans un navigateur web sur votre propre ordinateur. Il existe aussi des services en ligne payants et les applications du fabricant du drone ; vérifiez leurs prix actuels et où ils stockent vos données.",
            "Le traitement demande un ordinateur assez puissant et du temps : quelques centaines de photos peuvent prendre une heure ou plus. Copiez les photos du drone dans un dossier nommé avec la ferme, le champ et la date, sauvegardez-les, puis lancez le traitement. Vérifiez le résultat : des trous, des zones floues ou des rangs tordus veulent dire que le recouvrement ou les photos étaient mauvais."
          ],
          steps: ["Copiez les photos dans un dossier nommé ferme_champ_date (par exemple Kitale_Bloc3_2026-11-04).", "Sauvegardez le dossier.", "Ouvrez le logiciel d'assemblage et créez une nouvelle tâche.", "Ajoutez les photos et lancez le traitement.", "Vérifiez l'orthomosaïque : trous, flou et rangs tordus.", "Exportez-la en GeoTIFF (une image de carte avec sa position intégrée)."],
          words: [["Orthomosaïque", "une grande image unique, juste comme une carte, assemblée à partir de nombreuses photos qui se recouvrent."], ["GeoTIFF", "un fichier image qui contient sa position sur la Terre, pour que les logiciels de cartes le placent correctement."], ["Modèle d'élévation", "une carte de la hauteur du sol ou de la surface de la culture."]],
          slides: [
            { title: "Des photos à la carte", bullets: ["Le logiciel associe les photos qui se recouvrent", "Construit une orthomosaïque", "Peut aussi faire un modèle d'élévation"] },
            { title: "Outils gratuits et payants", bullets: ["OpenDroneMap / WebODM : libre et gratuit", "Services en ligne payants et applis des fabricants", "Vérifiez les prix et où sont vos données"] },
            { title: "Bonnes habitudes", bullets: ["Dossier nommé ferme_champ_date", "Sauvegardez avant le traitement", "Vérifiez trous, flou, rangs tordus", "Exportez en GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Téléchargez un jeu de données de drone d'exemple gratuit (OpenDroneMap donne des liens vers des jeux d'exemple) ou utilisez vos propres photos. Nommez et sauvegardez le dossier et, si votre ordinateur le permet, traitez-le en orthomosaïque. Sinon, écrivez chaque étape que vous suivriez.",
          youCanNow: "organiser des photos de drone et les assembler en orthomosaïque avec un logiciel gratuit."
        },
        {
          title: "Faire une carte NDVI dans QGIS",
          minutes: 6,
          goal: "Calculer et colorer une carte NDVI à partir d'une orthomosaïque multispectrale dans QGIS.",
          text: [
            "QGIS est un logiciel SIG libre et gratuit utilisé par des gouvernements, des universités et des ONG partout en Afrique. Il peut ouvrir votre GeoTIFF et faire des calculs sur ses bandes.",
            "Si votre orthomosaïque a des bandes rouge et proche infrarouge, utilisez la Calculatrice raster (Raster Calculator) pour calculer NDVI = (NIR - Red) / (NIR + Red), où NIR est le proche infrarouge et Red le rouge. Puis donnez au résultat une rampe de couleurs (par exemple du rouge au vert) et réglez l'intervalle pour faire ressortir les différences dans le champ.",
            "Seulement une caméra couleur ? Vous pouvez quand même faire un indice de verdure approximatif avec les bandes rouge, verte et bleue, mais il est moins fiable que le NDVI ; servez-vous-en seulement comme guide. Ajoutez la limite du champ et vos points de vérification terrain comme couches, pour que la carte montre exactement où sont les zones."
          ],
          steps: ["Ouvrez QGIS et ajoutez le GeoTIFF de votre orthomosaïque.", "Vérifiez quelle bande est le rouge et laquelle est le proche infrarouge.", "Ouvrez la Calculatrice raster et entrez (NIR - Red) / (NIR + Red) avec ces bandes.", "Donnez à la nouvelle couche une rampe de couleurs du rouge au vert.", "Ajoutez la limite du champ et les points de vérification terrain.", "Exportez une image de la carte pour votre rapport."],
          words: [["SIG", "système d'information géographique : un logiciel pour faire et analyser des cartes (GIS en anglais)."], ["Bande", "une couche de lumière dans une image, comme le rouge, le vert, le bleu ou le proche infrarouge."], ["Raster", "une image faite de pixels ayant chacun une valeur, comme une carte de drone."], ["Couche", "un ensemble de données de carte, comme une limite de champ ou des points, affiché par-dessus les autres."]],
          slides: [
            { title: "QGIS", bullets: ["SIG libre et gratuit", "Ouvre votre GeoTIFF", "Fait des calculs sur les bandes de l'image"] },
            { title: "Formule du NDVI", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Utilisez la Calculatrice raster", "Couleurs du rouge au vert"] },
            { title: "Seulement une caméra couleur ?", bullets: ["Indice de verdure approximatif avec les bandes RVB", "Moins fiable que le NDVI : un simple guide"] },
            { title: "Terminez la carte", bullets: ["Ajoutez la limite du champ et les points des zones", "Exportez une image pour le rapport"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Installez QGIS (gratuit) et ouvrez votre orthomosaïque ou une image multispectrale d'exemple. Calculez le NDVI avec la Calculatrice raster, colorez-le, et marquez trois zones par des points.",
          youCanNow: "faire une carte NDVI en couleurs dans QGIS et y ajouter des zones et les limites du champ."
        },
        {
          title: "Rédiger un rapport d'action pour le champ",
          minutes: 5,
          goal: "Rédiger un rapport d'une page qui dit à l'agriculteur ce qui a été trouvé et quoi faire ensuite.",
          text: [
            "Une carte seule n'aide pas un agriculteur occupé. Un court rapport la transforme en action. Tenez-vous à une page, en mots simples, dans la langue que préfère l'agriculteur. Beaucoup d'agriculteurs le liront sur un smartphone simple : une image et quelques lignes marchent mieux qu'un long document.",
            "Incluez : la ferme, le champ, la date et le stade de la culture ; l'image de la carte avec des zones numérotées ; pour chaque zone, ce que vous avez vu sur le terrain, la cause probable et votre degré de certitude ; l'étape suivante (par exemple : ressemer les manques, dégager un drain, demander à la clinique des plantes de confirmer une maladie, vérifier la ligne d'irrigation) ; et qui contacter.",
            "Ne conseillez jamais un pesticide ou une dose à partir d'une carte de drone. Orientez l'agriculteur vers un agent de vulgarisation, un vendeur d'intrants ou une clinique des plantes pour tout conseil chimique, et vers l'étiquette pour un usage sûr. Convenez de la date du prochain vol pour voir si l'action a marché."
          ],
          steps: ["En-tête : ferme, champ, date, culture et stade.", "Image de la carte avec des zones numérotées.", "Pour chaque zone : ce que vous avez vu, cause probable, certitude.", "Étape suivante pour chaque zone et qui contacter.", "Date du prochain vol pour vérifier les résultats."],
          words: [["Rapport d'action", "un court rapport qui dit ce qui a été trouvé et ce qu'il faut faire."], ["Agrovet", "une boutique qui vend des intrants agricoles comme les semences, les engrais et les médicaments vétérinaires, souvent avec des conseils."]],
          slides: [
            { title: "Une carte ne suffit pas", bullets: ["Une page, des mots simples", "La langue préférée de l'agriculteur", "Une image et quelques lignes"] },
            { title: "Ce qu'il contient", bullets: ["Ferme, champ, date, stade de la culture", "Carte avec zones numérotées", "Constat, cause probable, certitude, étape suivante"] },
            { title: "Restez sûr et honnête", bullets: ["Ni pesticide ni dose à partir d'une carte", "Orientez vers vulgarisation, agrovet ou clinique", "Convenez du prochain vol"] }
          ],
          tryIt: "Exercice final : à partir de votre carte et de votre fiche de vérification, rédigez le rapport d'action d'une page pour l'agriculteur : en-tête, image de la carte avec au moins trois zones numérotées, constat et cause probable pour chacune, étape suivante, contacts et date du prochain vol.",
          youCanNow: "transformer des données de drone en un rapport d'action clair d'une page utile à un agriculteur."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Traiter les données de drone",
        questions: [
          { q: "Qu'est-ce qu'une orthomosaïque ?", options: ["Une seule photo", "Un type de drone", "Une image unique, juste comme une carte, assemblée à partir de nombreuses photos", "Un ravageur"], answer: 2, why: "Le logiciel d'assemblage construit une carte à partir de photos qui se recouvrent." },
          { q: "Votre carte assemblée a des trous et des rangs tordus. La cause la plus probable est :", options: ["Trop peu de recouvrement ou de mauvaises photos", "Trop de batterie", "Le téléphone de l'agriculteur", "Trop de soleil sur l'écran"], answer: 0, why: "L'assemblage demande beaucoup de photos nettes qui se recouvrent." },
          { q: "Quelle est la formule du NDVI ?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "Le NDVI compare le proche infrarouge et le rouge." },
          { q: "Qu'est-ce que QGIS ?", options: ["Un drone payant", "Un logiciel SIG libre et gratuit pour les cartes", "Un pesticide", "Un réseau téléphonique"], answer: 1, why: "QGIS est un logiciel gratuit pour faire et analyser des cartes." },
          { q: "En lisant votre rapport, un agriculteur demande quel pesticide pulvériser sur la zone 2. Vous devez :", options: ["En deviner un à partir de la carte", "L'orienter vers un agent de vulgarisation, un agrovet ou une clinique des plantes et vers l'étiquette", "Lui dire de pulvériser double dose", "Ne rien dire"], answer: 1, why: "Un conseil chimique demande un diagnostic confirmé et un avis qualifié." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones pour la surveillance agricole 3 : santé des cultures, ravageurs et traitement des données",
    questions: [
      { q: "Les valeurs du NDVI vont de :", options: ["-100 à 0", "-1 à +1", "0 à 100", "1 à 10"], answer: 1, why: "Le NDVI est un rapport compris entre -1 et +1." },
      { q: "Sur une carte NDVI, la première chose à lire est :", options: ["La taille du fichier", "La légende", "Le nom du drone", "La météo"], answer: 1, why: "La légende dit quelles couleurs veulent dire valeurs faibles et fortes." },
      { q: "Une tache n'a pas changé sur trois cartes. Une nouvelle tache s'étend. Laquelle compte le plus ?", options: ["L'ancienne tache", "Aucune", "La tache qui s'étend", "Les deux sont aussi urgentes"], answer: 2, why: "Une tache qui s'étend suggère un problème actif." },
      { q: "Une culture faible le long d'un bord, à côté d'un champ voisin, peut venir :", options: ["D'un trop grand recouvrement", "De la légende", "De la batterie du drone", "De ravageurs ou d'une dérive de pulvérisation venant de ce côté"], answer: 3, why: "Les formes en bordure signalent souvent quelque chose qui vient de l'extérieur du champ." },
      { q: "Des creux bas et humides avec une culture faible montrent le plus probablement :", options: ["Un engorgement en eau", "Trop de soleil", "Une bonne récolte", "Une caméra cassée"], answer: 0, why: "L'eau s'accumule dans les creux et abîme les racines." },
      { q: "Une forme sur une carte de drone est :", options: ["Un diagnostic final", "Un indice à vérifier sur le terrain", "Toujours un ravageur", "Toujours une maladie"], answer: 1, why: "Les formes montrent où regarder ; la vérification terrain trouve la cause." },
      { q: "L'application FAMEWS de la FAO a été faite pour enregistrer :", options: ["La pluie", "Les prix du marché", "Les observations de chenille légionnaire d'automne", "Les vols de drone"], answer: 2, why: "FAMEWS est le système de surveillance et d'alerte précoce de la FAO pour la chenille légionnaire d'automne." },
      { q: "La vérification sur le terrain consiste à :", options: ["Voler plus bas", "Acheter un nouveau logiciel", "Nettoyer l'objectif", "Contrôler au sol ce que montre la carte"], answer: 3, why: "Vous allez sur place voir ce qui s'y trouve vraiment." },
      { q: "Pendant une vérification au sol, vous devez regarder :", options: ["Les feuilles dessus et dessous, les tiges, les racines, le sol et les insectes", "Seulement le dessus d'une feuille", "Seulement le ciel", "Seulement le drone"], answer: 0, why: "Un contrôle complet trouve les ravageurs, les maladies et les problèmes de sol." },
      { q: "Pourquoi noter les observations toujours de la même façon ?", options: ["Le drone l'exige", "Cela rend les registres comparables et aide les experts", "Pour passer le temps", "Cela rend les photos plus nettes"], answer: 1, why: "Des registres réguliers aident à comparer et à confirmer les causes." },
      { q: "Les coordonnées sont :", options: ["Les couleurs d'une carte", "La vitesse du drone", "Les nombres de latitude et de longitude d'un lieu exact", "Un type de culture"], answer: 2, why: "Elles permettent de retrouver la zone exacte." },
      { q: "OpenDroneMap est :", options: ["Une marque de drones", "Un pesticide", "Un satellite", "Un logiciel libre et gratuit pour assembler des photos de drone"], answer: 3, why: "OpenDroneMap et WebODM transforment gratuitement des photos en cartes." },
      { q: "Avant de traiter les photos, vous devez :", options: ["Nommer le dossier et le sauvegarder", "Supprimer la moitié des photos", "Renommer chaque photo à la main", "Éteindre l'ordinateur"], answer: 0, why: "Un bon nommage et une sauvegarde évitent de perdre des données." },
      { q: "Un GeoTIFF est :", options: ["Un format vidéo", "Une image qui contient sa position sur la Terre", "Une pièce de drone", "Un SMS"], answer: 1, why: "Les logiciels de cartes utilisent la position intégrée pour le placer." },
      { q: "Dans QGIS, le NDVI se calcule avec :", options: ["L'outil d'impression", "Le bouton e-mail", "La Calculatrice raster", "Le réglage du volume"], answer: 2, why: "La Calculatrice raster fait des calculs sur les bandes de l'image." },
      { q: "Avec seulement une caméra couleur, un indice de verdure est :", options: ["Exactement le même que le NDVI", "Impossible", "Meilleur que le NDVI", "Un guide approximatif, moins fiable que le NDVI"], answer: 3, why: "Les indices RVB n'ont pas le proche infrarouge : ce sont des guides approximatifs." },
      { q: "Une couche dans un SIG est :", options: ["Un ensemble de données de carte affiché par-dessus les autres", "Une batterie de drone", "Une maladie des cultures", "Un document juridique"], answer: 0, why: "Les limites, les points et les images sont chacun une couche." },
      { q: "Un bon rapport d'action pour le champ, c'est :", options: ["Vingt pages de chiffres", "Une page, des mots simples, avec une carte et les étapes suivantes", "Seulement les photos brutes", "Seulement la formule du NDVI"], answer: 1, why: "Les agriculteurs occupés ont besoin d'un plan court et clair." },
      { q: "Qu'est-ce qui ne doit PAS figurer dans votre rapport ?", options: ["La date et le stade de la culture", "Les zones numérotées", "Un pesticide et une dose choisis à partir de la seule carte", "Qui contacter"], answer: 2, why: "Un conseil chimique demande un diagnostic confirmé par une source qualifiée." },
      { q: "Pourquoi convenir d'une date pour le prochain vol ?", options: ["Pour user les batteries", "Parce que la loi l'exige chaque semaine", "Pour vendre plus de vols", "Pour voir si l'action a marché"], answer: 3, why: "Une carte de suivi montre si le problème est réglé." }
    ]
  }
};
