"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-precision-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations".

const COPERNICUS = { name: "Copernicus Data Space Ecosystem et Copernicus Browser (données Sentinel gratuites et ouvertes)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "Agence spatiale européenne : Sentinel-2 (résolution de 10 m, nouveau passage tous les 5 jours)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (services satellitaires gratuits, dont les anomalies de NDVI et les cartes des terres cultivées)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov : précision du GPS (smartphones, environ 4,9 m sous un ciel dégagé)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC : évaluation des kits portables d'analyse du sol, leçons apprises", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Évaluation des capteurs de proximité pour l'analyse du sol dans les petites exploitations du comté d'Embu, Kenya", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil : cartes des propriétés du sol de toute l'Afrique à 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, organisme kényan de recherche agricole et d'élevage)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-fr",
  lang: "fr",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Agriculture de précision : suivi par satellite et capteurs de sol",
  skills: "Repérer les différences dans une parcelle, Lire avec prudence les cartes satellite NDVI gratuites, Cartographier ses parcelles avec le GPS du téléphone, Choisir les analyses et capteurs de sol et savoir jusqu'où leur faire confiance, Comparer les coûts et les bénéfices, Faire une carte des zones de la parcelle avec un plan par zone",
  outcome: "diviser une de vos parcelles en zones à l'aide de cartes satellite gratuites, du GPS du téléphone, d'analyses de sol et de vos propres yeux et registres, et écrire pour chaque zone un plan peu coûteux que vous pouvez payer et vérifier.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs commerciaux en croissance, aux gérants de ferme, aux jeunes agripreneurs et aux agents de vulgarisation qui veulent cultiver \"avec précision\" sans grosses machines. L'agriculture de précision, c'est donner à chaque partie d'une parcelle ce dont elle a besoin, au lieu de traiter toute la parcelle de la même façon.",
    "Vous apprendrez à voir les différences à l'intérieur d'une parcelle, à lire les cartes satellite gratuites des cultures (et à connaître leurs limites), à cartographier une parcelle et ses zones avec un téléphone, à choisir des analyses et des capteurs de sol et à juger jusqu'où leur faire confiance, et à décider si un outil vaut son prix. Vous terminez avec une carte des zones de votre propre parcelle et un plan pour chaque zone.",
    "Aucun drone n'est nécessaire. Si vous voulez cartographier avec un drone, les cours \"Drones pour la surveillance agricole\" l'enseignent. Les montants sont seulement des exemples. Chaque leçon se termine par une tâche dans votre propre parcelle ; un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Faites une carte des zones d'une de vos parcelles : parcourez et enregistrez la limite avec une application GPS sur téléphone, divisez la parcelle en 2 à 4 zones à l'aide d'au moins deux types de preuves (NDVI satellite à deux dates, résultats d'analyse ou de kit de sol, rendements passés, ce que vous voyez), indiquez pour chaque zone sa taille et ses preuves, et écrivez un plan pour chaque zone (ce que vous ferez autrement, son coût en monnaie locale à titre d'exemple, et comment vous vérifierez à la saison suivante si cela a marché).",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits exploitants et agriculteurs commerciaux en croissance, gérants de ferme, jeunes agripreneurs et agents de vulgarisation au Kenya, au Nigeria, au Ghana, en Côte d'Ivoire, au Sénégal et partout en Afrique, qui cultivent le maïs, le riz, le sorgho, le manioc, le haricot, l'arachide, la tomate, le café et le cacao sur des parcelles de moins d'un hectare à quelques dizaines d'hectares.",
    startingPoint: "Ils connaissent bien leurs parcelles à l'œil et utilisent un smartphone. La plupart traitent chaque parcelle de la même façon : une seule dose d'engrais, une seule densité de semis. Peu ont utilisé une carte satellite, un outil de mesure de surface par GPS sur téléphone ou une analyse de sol, et beaucoup ont entendu de grandes promesses sur les capteurs et les applications.",
    gap: "Dans une même parcelle, le sol, l'eau et le rendement peuvent beaucoup varier, donc une seule dose gaspille les intrants à certains endroits et en prive d'autres. Les apprenants doivent voir ces différences avec des outils gratuits ou peu chers, savoir à quels outils se fier et pour quoi, et les transformer en plans de zones simples qui rapportent sur une petite exploitation.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un smartphone ; un ordinateur aide pour les visionneuses satellite mais n'est pas obligatoire",
      "Parcelles petites et mélangées : les images satellite gratuites (pixels d'environ 10 m) sont grossières pour les parcelles de moins d'un demi-hectare environ",
      "Les nuages de la saison des pluies limitent les images satellite",
      "Argent : d'abord les outils peu chers ; tous les chiffres sont des exemples ; aucun produit n'est recommandé",
      "Pesticides et engrais : uniquement des produits homologués, utilisés selon l'étiquette"
    ],
    prerequisites: "Être à l'aise avec un smartphone. Il est utile de suivre d'abord \"Santé et fertilité du sol\" et \"Données et technologies agricoles\"."
  },
  // ---- ADDIE : Conception (objectifs) ----
  objectives: [
    { id: "O1", condition: "En parcourant une de vos propres parcelles", action: "lister les différences dans la parcelle sur lesquelles l'agriculture de précision pourrait agir", standard: "en nommant au moins trois différences et comment vous avez vu chacune" },
    { id: "O2", condition: "Avec une visionneuse satellite gratuite comme le Copernicus Browser", action: "trouver votre parcelle et comparer son NDVI à deux dates", standard: "et dire une chose que la carte montre et une chose qu'elle ne peut pas montrer" },
    { id: "O3", condition: "Avec une application GPS sur téléphone", action: "enregistrer la limite d'une parcelle et les bords de ses zones et lire leurs surfaces", standard: "en tenant compte d'une erreur d'environ 5 mètres" },
    { id: "O4", condition: "Avec le choix entre une analyse en laboratoire, un kit d'analyse ou un capteur portatif", action: "choisir une méthode d'analyse du sol, prélever un échantillon dans chaque zone et dire jusqu'où se fier à chaque résultat", standard: "en faisant plus confiance au pH qu'aux mesures d'azote, de phosphore et de potassium des kits" },
    { id: "O5", condition: "Avec un outil ou une pratique de précision et les chiffres de votre parcelle", action: "comparer son coût à son bénéfice attendu et décider de l'utiliser ou non", standard: "avec un budget partiel simple en monnaie locale" },
    { id: "O6", condition: "Avec des preuves venant d'au moins deux sources", action: "diviser une parcelle en 2 à 4 zones de gestion et écrire un plan pour chaque zone", standard: "chaque plan étant abordable et vérifiable à la saison suivante" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Voir votre parcelle par parties",
      lessons: [
        {
          title: "Ce qu'est l'agriculture de précision sur une petite exploitation",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister les différences dans une de vos parcelles que vous pourriez gérer séparément.",
          text: [
            "L'agriculture de précision, c'est gérer différemment les parties d'une parcelle, parce qu'elles sont différentes. Un coin d'un champ de maïs peut être sableux et sec, le bas engorgé d'eau, et le milieu riche parce que le bétail y était parqué. Traiter toute la parcelle de la même façon gaspille l'engrais et la semence à certains endroits et en prive d'autres.",
            "Dans les grandes fermes, on le fait avec des tracteurs qui changent la dose tout seuls. Sur une petite exploitation, vous pouvez faire la même chose à la main : plus de fumier là où le sol est pauvre, un drainage dans la partie humide, une autre variété sur la butte sèche, ou pas d'engrais là où la culture ne rapporte jamais. L'idée est la même : observer, mesurer, décider par zone et vérifier le résultat.",
            "Vous savez déjà beaucoup de choses à l'œil. Parcourez la parcelle et notez où la culture est petite, jaune ou irrégulière, où l'eau stagne, où apparaissent des mauvaises herbes comme le Striga, et où les rendements ont été bons ou mauvais. Demandez aux ouvriers qui désherbent et récoltent : ils voient chaque coin. Les cartes satellite, le GPS et les analyses de sol, dans les leçons suivantes, vous aident à confirmer et à mesurer ce que vous voyez."
          ],
          steps: ["Parcourez toute la parcelle, les bords et le milieu.", "Notez où la culture est faible, où l'eau stagne, où les mauvaises herbes ou les ravageurs sont pires.", "Demandez aux ouvriers où les rendements sont bons ou mauvais.", "Écrivez chaque différence et comment vous l'avez vue.", "Marquez-les sur un croquis simple de la parcelle."],
          words: [["Agriculture de précision", "gérer différemment les différentes parties d'une parcelle, d'après l'observation et la mesure."], ["Variabilité", "à quel point le sol, l'eau ou la croissance des plantes changent d'une partie de la parcelle à l'autre."], ["Zone de gestion", "une partie d'une parcelle gérée comme un seul ensemble parce qu'elle se comporte de façon semblable."]],
          slides: [
            { title: "Une parcelle, plusieurs parties", bullets: ["Butte sableuse, bas humide, ancien parc à bétail riche", "Tout traiter pareil gaspille les intrants"] },
            { title: "La précision à la main", bullets: ["Plus de fumier là où le sol est pauvre", "Drainage dans la partie humide", "La bonne variété pour chaque partie"] },
            { title: "Observer, mesurer, décider, vérifier", bullets: ["D'abord vos yeux et vos registres", "Les outils confirment et mesurent"] },
            { title: "Parcourir et demander", bullets: ["Culture faible, jaune ou irrégulière", "Eau stagnante, mauvaises herbes, ravageurs", "Demandez aux ouvriers"] }
          ],
          tryIt: "Parcourez une de vos parcelles. Faites un croquis simple et marquez au moins trois différences (par exemple une tache faible, une partie humide, une partie pleine de mauvaises herbes). À côté de chacune, écrivez comment vous l'avez vue : à l'œil, par les rendements ou grâce aux ouvriers.",
          youCanNow: "voir une parcelle comme des parties différentes, et lister les différences que vous pourriez gérer séparément.",
          quickCheck: [
            { objective: "O1", q: "Quelle est l'idée principale de l'agriculture de précision ?", options: ["Acheter les machines les plus chères", "Utiliser la même dose partout", "Gérer différemment les différentes parties d'une parcelle", "Cultiver seulement avec des drones"], answer: 2, why: "Elle donne à chaque partie de la parcelle ce dont elle a besoin." },
            { objective: "O1", q: "Qui peut vous dire rapidement où les rendements sont faibles dans une parcelle ?", options: ["Les ouvriers qui la désherbent et la récoltent", "Une publicité pour un capteur", "Un acheteur en ville", "Personne"], answer: 0, why: "Les ouvriers voient chaque coin de la parcelle pendant la saison." }
          ]
        },
        {
          title: "Les cartes satellite gratuites et ce que montre le NDVI",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparer le NDVI de votre parcelle à deux dates dans une visionneuse satellite gratuite.",
          text: [
            "Les satellites européens Sentinel-2 photographient toute l'Afrique environ tous les 5 jours, avec des pixels de 10 mètres (un pixel est un carré de 10 m x 10 m). Les images sont gratuites et ouvertes. Le Copernicus Browser vous permet de les voir sans payer ; vous pouvez commencer sans compte, et un compte gratuit donne plus d'options. Digital Earth Africa propose aussi des services satellitaires gratuits conçus pour l'Afrique, comme des cartes d'anomalies de NDVI et des terres cultivées.",
            "Le NDVI (indice de végétation par différence normalisée) est un nombre calculé à partir des couleurs que renvoient les plantes. Des feuilles vertes, saines et denses donnent un NDVI élevé ; un sol nu, une culture sèche ou clairsemée donnent un NDVI faible. Dans la visionneuse, trouvez votre parcelle, choisissez un affichage NDVI et comparez deux dates, par exemple quatre et huit semaines après le semis. Une tache qui reste basse quand le reste est haut mérite d'être visitée.",
            "Ce que le NDVI ne montre PAS : la cause. Un NDVI faible peut venir de la sécheresse, de l'excès d'eau, d'un manque d'azote, de ravageurs, de maladies, de mauvaises herbes ou d'un semis tardif. Il ne voit pas non plus sous les nuages, et en saison des pluies vous pouvez attendre des semaines une image claire. Sur les parcelles de moins d'un demi-hectare environ, ou les parcelles longues et étroites, les pixels de 10 m sont grossiers et mélangent la culture ou les arbres du voisin. Les mauvaises herbes peuvent aussi paraître vertes et saines. Le NDVI vous dit donc où regarder, et vos pieds vous disent pourquoi."
          ],
          steps: ["Ouvrez le Copernicus Browser sur un ordinateur ou dans le navigateur du téléphone.", "Cherchez votre zone et zoomez sur votre parcelle.", "Choisissez une image avec peu de nuages et un affichage NDVI.", "Comparez deux dates de la même saison.", "Marquez les taches basses sur votre croquis et allez les voir pour trouver la cause."],
          words: [["Sentinel-2", "deux satellites européens qui prennent des images gratuites de la Terre environ tous les 5 jours, avec un détail de 10 m."], ["NDVI", "un nombre tiré des couleurs vues par le satellite, qui montre à quel point les plantes sont vertes et denses."], ["Pixel", "un carré d'une image satellite ; pour Sentinel-2, 10 m x 10 m."]],
          slides: [
            { title: "Des images satellite gratuites", bullets: ["Sentinel-2 : environ tous les 5 jours, pixels de 10 m", "Copernicus Browser : consultation gratuite", "Digital Earth Africa : services gratuits pour l'Afrique"] },
            { title: "Ce que montre le NDVI", bullets: ["Élevé : plantes vertes et denses", "Faible : sol nu, culture sèche ou clairsemée", "Comparez deux dates"] },
            { title: "Ce que le NDVI ne montre PAS", bullets: ["La cause d'une tache basse", "Ce qui est sous les nuages", "Le détail des parcelles de moins d'un demi-hectare environ"] },
            { title: "La carte dit où, les pieds disent pourquoi", bullets: ["Marquez les taches basses", "Allez les voir et trouvez la cause"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Ouvrez le Copernicus Browser, trouvez une de vos parcelles (ou une parcelle près de chez vous) et regardez le NDVI à deux dates claires de cette saison. Marquez toute tache basse sur votre croquis, puis allez la voir et écrivez la cause que vous pensez avoir trouvée.",
          youCanNow: "lire une carte satellite NDVI gratuite de votre parcelle et vous en servir pour décider où regarder, pas pour trouver la cause.",
          quickCheck: [
            { objective: "O2", q: "Une tache de votre champ de maïs a un NDVI faible. Qu'est-ce que cela vous dit ?", options: ["Qu'elle manque d'azote", "Qu'elle a la chenille légionnaire d'automne", "Qu'elle a besoin d'irrigation", "Que les plantes y sont moins vertes ou clairsemées, donc il faut aller voir pourquoi"], answer: 3, why: "Le NDVI montre où la croissance est faible, pas la cause." },
            { objective: "O2", q: "Pourquoi une carte Sentinel-2 gratuite peut-elle être difficile à utiliser sur une parcelle de 0,2 hectare ?", options: ["Les pixels de 10 m sont grossiers et mélangent les terres voisines", "Les images ne concernent que l'Europe", "Elle coûte trop cher", "Le NDVI ne marche pas sur le maïs"], answer: 0, why: "Une parcelle de 0,2 ha ne fait qu'une vingtaine de pixels, dont beaucoup mélangés avec ses bords." }
          ]
        },
        {
          title: "Cartographier une parcelle avec le GPS de votre téléphone",
          objectives: ["O3"],
          minutes: 5,
          goal: "Enregistrer la limite d'une parcelle et ses zones avec une application GPS sur téléphone et lire leurs surfaces.",
          text: [
            "Le GPS d'un téléphone peut cartographier votre parcelle. Beaucoup d'applications gratuites peuvent enregistrer une limite pendant que vous marchez, ou vous laisser poser des points autour de la parcelle, puis afficher la surface. Vous pouvez aussi poser un repère sur une application de cartes et partager ses coordonnées. Connaître la vraie taille d'une parcelle et de chaque zone compte : l'engrais, la semence, la main-d'œuvre et le rendement par acre ou par hectare en dépendent, et beaucoup d'agriculteurs découvrent que leur parcelle est plus grande ou plus petite qu'ils ne le pensaient.",
            "Le GPS n'est pas exact. Sous un ciel dégagé, les smartphones sont en général précis à environ 5 mètres près, et moins bien près des arbres, des bâtiments et dans les vallées. Sur une petite parcelle, cette erreur compte : marchez lentement, restez immobile quelques secondes à chaque coin, gardez le téléphone sous un ciel dégagé, et faites le tour de la limite deux fois pour comparer. Si les deux surfaces sont très différentes, refaites le tour.",
            "Cartographiez aussi les zones. Longez le bord de la partie humide ou de la butte sableuse et enregistrez-le comme une forme séparée, ou posez des repères à ses coins. Nommez chaque forme avec la parcelle et la zone (\"P2 Zone A humide\"), et gardez le fichier ou une capture d'écran avec la surface. Ces formes seront la base de votre carte des zones à la leçon 6."
          ],
          steps: ["Ouvrez dehors, sous un ciel dégagé, une application GPS de mesure de surface ou de cartographie.", "Faites lentement le tour de la limite de la parcelle, en vous arrêtant à chaque coin.", "Lisez et notez la surface ; refaites le tour pour vérifier.", "Longez ou marquez les bords de chaque zone et enregistrez chacune avec un nom.", "Gardez le fichier ou une capture d'écran avec les surfaces."],
          words: [["GPS", "Global Positioning System (système de positionnement par satellite) : des satellites qui permettent à un téléphone de savoir où il se trouve sur la Terre."], ["Limite", "le bord d'une parcelle."], ["Hectare", "une surface de 100 m x 100 m, environ 2,5 acres."]],
          slides: [
            { title: "Votre téléphone peut cartographier une parcelle", bullets: ["Faites le tour de la limite ou posez des points aux coins", "Lisez la surface", "La taille de la parcelle commande chaque chiffre par acre"] },
            { title: "Le GPS n'est pas exact", bullets: ["Environ 5 m sous un ciel dégagé", "Moins bien près des arbres, des bâtiments, dans les vallées"] },
            { title: "De meilleures mesures", bullets: ["Marchez lentement, arrêtez-vous aux coins", "Faites le tour deux fois et comparez"] },
            { title: "Cartographier les zones", bullets: ["Une forme enregistrée par zone", "Nom : P2 Zone A humide", "Gardez la surface"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Avec une application GPS sur téléphone, faites deux fois le tour de la limite d'une parcelle et écrivez les deux surfaces. Puis cartographiez le bord d'une zone trouvée à la leçon 1, donnez-lui un nom et écrivez sa surface.",
          youCanNow: "cartographier une parcelle et ses zones avec le GPS du téléphone et noter leurs surfaces, en tenant compte de l'erreur du GPS.",
          quickCheck: [
            { objective: "O3", q: "Vous avez fait deux fois le tour d'une parcelle et obtenu 0,9 acre et 1,4 acre. Que faites-vous ?", options: ["Faire la moyenne et s'arrêter là", "Refaire le tour lentement, en s'arrêtant aux coins, sous un ciel dégagé", "Prendre le plus grand chiffre", "Abandonner le GPS"], answer: 1, why: "Un grand écart signifie de mauvaises mesures ; refaites le tour avec soin." },
            { objective: "O3", q: "Où le GPS du téléphone est-il en général le moins précis ?", options: ["Dans un champ ouvert", "Par une journée ensoleillée", "Sur une plaine", "Sous les arbres et près des bâtiments"], answer: 3, why: "Les arbres et les bâtiments bloquent et renvoient les signaux des satellites." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Voir votre parcelle par parties",
        questions: [
          { objective: "O1", q: "Un petit exploitant met du fumier en plus seulement sur le bout sableux et pauvre de la parcelle. C'est :", options: ["Du gaspillage", "De l'agriculture de précision à la main", "Contraire aux règles", "Possible seulement avec un tracteur"], answer: 1, why: "Gérer différemment les parties d'une parcelle est le cœur de l'agriculture de précision." },
          { objective: "O2", q: "À peu près tous les combien les satellites Sentinel-2 photographient-ils le même endroit ?", options: ["Environ tous les 5 jours", "Une fois par an", "Toutes les heures", "Seulement sur demande"], answer: 0, why: "Les deux satellites repassent environ tous les 5 jours ; les nuages peuvent cacher certaines images." },
          { objective: "O2", q: "Laquelle de ces choses le NDVI ne peut-il PAS vous dire ?", options: ["Où la culture est plus verte", "Où la croissance est faible", "Pourquoi une tache est faible", "Comment se comparent deux dates"], answer: 2, why: "Beaucoup de causes donnent un NDVI faible ; vous allez voir la tache pour savoir laquelle." },
          { objective: "O3", q: "La précision habituelle du GPS d'un smartphone sous un ciel dégagé est d'environ :", options: ["1 centimètre", "500 mètres", "5 kilomètres", "5 mètres"], answer: 3, why: "Environ 4,9 m sous un ciel dégagé, moins bien près des arbres et des bâtiments." },
          { objective: "O3", q: "Pourquoi est-il important de connaître la vraie surface de la parcelle ?", options: ["La semence, l'engrais, la main-d'œuvre et le rendement par acre en dépendent", "Les acheteurs paient à la surface", "Les applications GPS en ont besoin", "Ce n'est pas important"], answer: 0, why: "Une mauvaise surface fausse chaque chiffre par acre." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mesurer le sol et planifier par zone",
      lessons: [
        {
          title: "Kits et capteurs de sol : jusqu'où leur faire confiance",
          objectives: ["O4"],
          minutes: 6,
          goal: "Choisir une méthode d'analyse du sol pour chaque zone et dire jusqu'où se fier à ses résultats.",
          text: [
            "Il y a trois grandes façons d'analyser le sol. Une analyse en laboratoire (dans un institut national de recherche comme KALRO, une université ou un laboratoire privé agréé) est la plus précise, prend de quelques jours à quelques semaines et coûte plus cher. Un kit de terrain (bandelettes de couleur ou produits dans des tubes) donne des résultats rapides sur place. Un capteur ou un appareil électronique portatif donne une mesure en quelques minutes et est souvent vendu avec une application.",
            "Des tests indépendants de kits portables, comme une évaluation de l'IFDC (un centre international sur les engrais), ont trouvé un bon accord avec les laboratoires pour le pH du sol, mais des résultats irréguliers pour l'azote, le phosphore et le potassium. Une recherche dans le comté d'Embu, au Kenya, a montré que certains capteurs portatifs avancés peuvent bien prédire plusieurs propriétés du sol, mais ces appareils sont chers et doivent être étalonnés avec des échantillons de laboratoire. Méfiez-vous des sondes bon marché qui prétendent lire le NPK instantanément : les chiffres de précision donnés par le vendeur lui-même ne sont pas une preuve indépendante.",
            "Un plan pratique : envoyez au laboratoire un bon échantillon composite par zone tous les quelques années, et utilisez un kit ou un appareil pour vérifier rapidement le pH entre deux analyses en laboratoire. Prélevez chaque échantillon de la même façon (beaucoup de petites carottes, mélangées, à la même profondeur, en évitant les chemins et les tas de fumier). Les cartes gratuites iSDAsoil estiment les propriétés du sol de toute l'Afrique à 30 m et sont utiles pour voir la situation générale, mais ce sont des estimations de modèles, pas une analyse de votre parcelle."
          ],
          steps: ["Décidez : laboratoire, kit ou capteur, pour chaque question que vous avez.", "Prélevez un échantillon composite par zone : beaucoup de carottes, même profondeur, mélangées.", "Envoyez les échantillons à un laboratoire agréé tous les quelques années.", "Utilisez un kit ou un appareil pour vérifier rapidement le pH entre-temps.", "Écrivez chaque résultat à côté de sa zone, avec sa méthode."],
          words: [["Échantillon composite", "beaucoup de petites carottes de sol d'une même zone mélangées en un seul échantillon."], ["Étalonnage", "vérifier et régler un capteur en le comparant à un résultat de laboratoire fiable."], ["pH", "une mesure de l'acidité ou de l'alcalinité du sol."]],
          slides: [
            { title: "Trois façons d'analyser", bullets: ["Laboratoire : le plus précis, plus lent, plus cher", "Kit de terrain : rapide, sur place", "Capteur portatif : quelques minutes, souvent avec une application"] },
            { title: "Jusqu'où leur faire confiance", bullets: ["Kits : bons pour le pH", "Kits : irréguliers pour N, P et K", "Les capteurs avancés doivent être étalonnés"] },
            { title: "Un plan pratique", bullets: ["Un échantillon au laboratoire par zone tous les quelques années", "Kit ou appareil pour vérifier rapidement le pH", "La même méthode de prélèvement à chaque fois"] },
            { title: "Cartes du sol gratuites", bullets: ["iSDAsoil : estimations à 30 m", "Une vue générale, pas l'analyse de votre parcelle"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Pour chaque zone de votre croquis, écrivez quelle analyse vous utiliserez (laboratoire, kit ou capteur) et pourquoi. Prélevez, ou prévoyez, un échantillon composite par zone, et écrivez jusqu'où vous feriez confiance à un résultat de kit pour le pH et pour l'azote.",
          youCanNow: "choisir une méthode d'analyse du sol pour chaque zone et juger jusqu'où vous fier à ses résultats.",
          quickCheck: [
            { objective: "O4", q: "Pour quel résultat les kits portables de sol sont-ils les plus fiables, comparés à un laboratoire ?", options: ["L'azote", "Le potassium", "Le pH du sol", "Le phosphore"], answer: 2, why: "Des tests indépendants ont trouvé un bon accord pour le pH, mais des résultats irréguliers pour N, P et K." },
            { objective: "O4", q: "Un vendeur dit que sa sonde bon marché lit le NPK instantanément avec 95 pour cent de précision. Vous devez :", options: ["Demander des résultats de tests indépendants et comparer quelques mesures avec un laboratoire", "L'acheter tout de suite", "L'utiliser à la place de toutes les analyses en laboratoire", "Le croire parce qu'elle a une application"], answer: 0, why: "Les chiffres du vendeur lui-même ne sont pas une preuve indépendante ; comparez avec un laboratoire." }
          ]
        },
        {
          title: "Coûts et bénéfices, et quand les drones sont utiles",
          objectives: ["O5"],
          minutes: 5,
          goal: "Comparer le coût d'un outil ou d'une pratique de précision à son bénéfice attendu.",
          text: [
            "Un outil de précision n'a de sens que si le bénéfice est plus grand que le coût. Utilisez un budget partiel simple : que vais-je gagner ou économiser en plus (plus de rendement, moins d'engrais ou de semence gaspillés), et que vais-je dépenser en plus (l'analyse, le capteur, l'application, votre temps, la main-d'œuvre) ? Exemple seulement : si le travail par zones économise 2 sacs d'engrais sur une zone faible qui ne rapportait jamais (2 x GHS 400 = GHS 800 économisés), et que l'analyse en laboratoire a coûté GHS 300, cela rapporte.",
            "Sur les petites exploitations, commencez par ce qui est gratuit ou bon marché : vos yeux, vos registres, le GPS du téléphone et les cartes satellite gratuites. Dépensez ensuite pour une analyse en laboratoire par zone. N'achetez un capteur portatif que si vous l'utiliserez souvent et pouvez le comparer à un laboratoire. Les groupes peuvent partager les coûts : une coopérative en Côte d'Ivoire ou un groupement d'agriculteurs au Nigeria peut acheter un seul appareil ou payer ensemble les analyses en laboratoire.",
            "Les drones donnent des images de quelques centimètres au lieu de 10 mètres, volent sous les nuages et peuvent voler le jour où vous en avez besoin. Ils sont utiles pour les cultures de grande valeur, les parcelles plus grandes, ou quand un groupe paie un service ensemble. Ils coûtent beaucoup plus cher, et les piloter demande une licence de l'autorité de l'aviation civile. Si vous pensez en avoir besoin, suivez les cours \"Drones pour la surveillance agricole\" et \"Drones agricoles : analyse des données et agriculture de précision\" ; ce cours ne les répète pas."
          ],
          steps: ["Écrivez ce que coûte l'outil ou la pratique : argent, temps, main-d'œuvre.", "Écrivez le revenu ou l'économie en plus que vous attendez, avec des chiffres d'exemple.", "Comparez : bénéfice moins coût.", "Commencez par les outils gratuits ; puis une analyse en laboratoire par zone ; puis un capteur ou un service de drone seulement si cela rapporte.", "Pensez à partager les coûts avec un groupe."],
          words: [["Budget partiel", "un calcul simple qui ne compte que les coûts en plus et les bénéfices en plus d'un changement."], ["Service de drone", "une entreprise qui fait voler un drone au-dessus de votre parcelle contre paiement."], ["Rentabilité", "ce que vous récupérez par rapport à ce que vous dépensez."]],
          slides: [
            { title: "Le bénéfice doit dépasser le coût", bullets: ["Revenu ou économie en plus", "Moins le coût en plus", "Exemple seulement : GHS 800 économisés contre GHS 300 d'analyse"] },
            { title: "Dépenser dans cet ordre", bullets: ["Gratuit : yeux, registres, GPS, satellite", "Analyse en laboratoire par zone", "Capteur seulement s'il sert souvent et est vérifié"] },
            { title: "Partager les coûts", bullets: ["Groupements et coopératives", "Un appareil ou plusieurs analyses ensemble"] },
            { title: "Quand les drones sont utiles", bullets: ["Détail au centimètre, sous les nuages", "Cultures de valeur, grandes parcelles, services en groupe", "Voir les cours sur les drones ; licence obligatoire"] }
          ],
          tryIt: "Choisissez un outil ou une pratique de précision pour votre ferme (une analyse en laboratoire par zone, un appareil de mesure du sol, un service de drone ou un engrais par zone). Écrivez un budget partiel avec des chiffres d'exemple en monnaie locale : coût en plus, bénéfice en plus, et votre décision.",
          youCanNow: "décider avec un budget partiel simple si un outil de précision vaut la peine pour votre ferme.",
          quickCheck: [
            { objective: "O5", q: "Sur une petite exploitation, que faut-il en général essayer d'abord ?", options: ["Un drone", "Un grand réseau de capteurs", "Un abonnement cher à une application", "Vos yeux, vos registres, le GPS du téléphone et les cartes satellite gratuites"], answer: 3, why: "Commencez par les outils gratuits et ne dépensez que là où cela rapporte." },
            { objective: "O5", q: "Un appareil de mesure du sol coûte plus que ce que vous économiseriez en cinq saisons. Quel est un choix raisonnable ?", options: ["L'acheter quand même", "Partager le coût avec un groupe, ou faire plutôt des analyses en laboratoire", "Emprunter pour en acheter deux", "Arrêter de mettre de l'engrais"], answer: 1, why: "Si le bénéfice ne dépasse pas le coût pour vous seul, partagez-le ou choisissez une méthode moins chère." }
          ]
        },
        {
          title: "Faire une carte des zones de la parcelle et un plan pour chaque zone",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Diviser une parcelle en 2 à 4 zones et écrire un plan pour chaque zone.",
          text: [
            "Rassemblez maintenant les preuves. Placez vos formes GPS sur votre croquis. Pour chaque partie de la parcelle, listez ce que vous savez : le NDVI à deux dates, les résultats d'analyse ou de kit de sol, les rendements passés, ce que vous et les ouvriers voyez. Une zone a besoin d'au moins deux types de preuves qui concordent, par exemple un NDVI faible et un pH bas, ou une partie humide vue chaque saison et des rendements faibles notés.",
            "Restez simple : sur une petite exploitation, 2 à 4 zones suffisent. Nommez-les d'après ce qu'elles sont : \"Zone A bon sol\", \"Zone B acide et faible\", \"Zone C engorgée\". Écrivez la surface de chaque zone d'après votre carte GPS.",
            "Écrivez ensuite un plan pour chaque zone : ce que vous ferez autrement (plus de compost et de chaux là où le pH est bas, comme le conseille le laboratoire ; des drains ou une culture de riz ou de légumes dans la zone humide ; une dose d'engrais plus faible là où la culture ne rapporte jamais), ce que cela coûtera, à titre d'exemple, dans votre monnaie, et comment vous le vérifierez : notez le rendement par zone à la récolte et comparez le NDVI la saison suivante. N'utilisez que des engrais et pesticides homologués, selon l'étiquette. Un plan de précision n'est juste que si les registres de la saison suivante montrent qu'il a marché."
          ],
          steps: ["Mettez sur une seule carte les formes GPS, les notes de NDVI, les résultats de sol et les rendements.", "Tracez 2 à 4 zones là où deux types de preuves concordent.", "Nommez chaque zone et écrivez sa surface.", "Écrivez un plan, un coût et une vérification pour chaque zone.", "Notez le rendement par zone à la récolte et comparez la saison suivante."],
          words: [["Carte des zones", "une carte d'une parcelle divisée en zones de gestion."], ["Preuve", "un fait que vous pouvez montrer, comme un résultat d'analyse, une image NDVI ou un relevé de rendement."], ["Chaux", "un traitement du sol qui rend un sol acide moins acide."]],
          slides: [
            { title: "Rassembler les preuves", bullets: ["Formes GPS et croquis", "NDVI à deux dates, résultats de sol", "Rendements et ce que vous voyez"] },
            { title: "Tracer 2 à 4 zones", bullets: ["Deux types de preuves doivent concorder", "Nommez-les d'après ce qu'elles sont", "Écrivez chaque surface"] },
            { title: "Un plan pour chaque zone", bullets: ["Ce qui change", "Coût d'exemple", "Comment vous le vérifierez"] },
            { title: "Vérifier la saison suivante", bullets: ["Rendement par zone à la récolte", "Comparez le NDVI", "Intrants homologués, selon l'étiquette"] }
          ],
          tryIt: "Tâche finale : faites la carte des zones de votre parcelle avec 2 à 4 zones, chacune indiquée avec sa surface et au moins deux types de preuves. Écrivez un plan pour chaque zone : le changement, le coût d'exemple dans votre monnaie, et comment vous vérifierez à la saison suivante si cela a marché.",
          youCanNow: "faire une carte des zones d'une parcelle à partir de plusieurs types de preuves et écrire un plan vérifiable pour chaque zone.",
          quickCheck: [
            { objective: "O6", q: "Quelles preuves suffisent pour tracer une zone ?", options: ["Un NDVI faible à une seule date nuageuse", "La supposition d'un voisin", "Un NDVI faible à deux dates et un pH bas à l'analyse", "Une publicité"], answer: 2, why: "Deux types de preuves qui concordent rendent une zone fiable." },
            { objective: "O6", q: "Comment saurez-vous qu'un plan de zone a marché ?", options: ["En notant le rendement par zone à la récolte et en comparant la saison suivante", "En supposant qu'il a marché", "En demandant au vendeur d'intrants", "En relisant le plan"], answer: 0, why: "Seuls les relevés par zone montrent si le changement a rapporté." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mesurer le sol et planifier par zone",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un échantillon de sol composite ?", options: ["Une pelletée prise au milieu", "Beaucoup de petites carottes d'une zone mélangées", "De la terre du tas de fumier", "Un échantillon pris sur la route"], answer: 1, why: "Mélanger beaucoup de carottes donne une image juste de la zone." },
          { objective: "O4", q: "Les cartes gratuites iSDAsoil servent surtout à :", options: ["Remplacer toutes les analyses de sol", "Décider des doses de pesticide", "Voir la situation générale du sol avant d'analyser votre parcelle", "Mesurer l'humidité du sol aujourd'hui"], answer: 2, why: "Ce sont des estimations de modèles, pas une analyse de votre parcelle." },
          { objective: "O5", q: "Un budget partiel compare :", options: ["Le coût en plus et le bénéfice en plus d'un changement", "Tous les coûts de la ferme sur dix ans", "Seulement le prix de la récolte", "Le solde de votre compte en banque"], answer: 0, why: "Il ne regarde que ce qui change." },
          { objective: "O5", q: "Quand un service de drone peut-il avoir du sens ?", options: ["Toujours, sur chaque parcelle", "Jamais en Afrique", "Seulement sans licence", "Pour des cultures de grande valeur ou de plus grandes parcelles, ou partagé par un groupe, quand cela rapporte"], answer: 3, why: "Les drones coûtent plus cher ; ils sont utiles quand la valeur est élevée ou que les coûts sont partagés." },
          { objective: "O6", q: "Combien de zones ce cours propose-t-il pour une petite exploitation ?", options: ["2 à 4", "20 à 40", "Une seule", "Une par plante"], answer: 0, why: "Quelques zones suffisent pour gérer et vérifier à la main." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Agriculture de précision : suivi par satellite et capteurs de sol",
    questions: [
      { objective: "O1", q: "Sur une petite exploitation, l'agriculture de précision veut dire :", options: ["Acheter un tracteur avec des capteurs", "Gérer différemment les différentes parties de la parcelle", "Utiliser une seule dose d'engrais partout", "Cultiver sans registres"], answer: 1, why: "Chaque partie reçoit ce dont elle a besoin." },
      { objective: "O1", q: "Laquelle est une différence dans une parcelle sur laquelle vous pourriez agir ?", options: ["La couleur de votre téléphone", "Le prix du marché", "Une partie humide dans le bas", "La culture de votre voisin"], answer: 2, why: "Une partie humide peut être drainée ou cultivée autrement." },
      { objective: "O1", q: "Qu'est-ce qui vient en premier dans l'agriculture de précision sur une petite ferme ?", options: ["Parcourir la parcelle et noter les différences", "Acheter un capteur", "Louer un drone", "Changer tous les intrants"], answer: 0, why: "L'observation est gratuite et guide tout le reste." },
      { objective: "O2", q: "Qu'est-ce que Sentinel-2 offre gratuitement ?", options: ["Des images avec un détail de 1 cm", "Des prévisions météo", "Des analyses de sol", "Des images environ tous les 5 jours avec des pixels de 10 m"], answer: 3, why: "Les données Sentinel-2 sont gratuites et ouvertes, à 10 m." },
      { objective: "O2", q: "Un NDVI élevé veut en général dire :", options: ["Un sol nu", "Des plantes vertes et denses", "De l'eau stagnante", "Un nuage"], answer: 1, why: "Les feuilles saines renvoient la lumière d'une façon qui donne un NDVI élevé." },
      { objective: "O2", q: "Pourquoi comparer le NDVI à deux dates ?", options: ["Pour voir quelles taches restent faibles pendant que les autres poussent", "Parce qu'une image est toujours fausse", "Pour rendre la carte colorée", "Pour compter les plantes"], answer: 0, why: "Une tache qui reste basse d'une date à l'autre mérite d'être visitée." },
      { objective: "O2", q: "En saison des pluies, vous n'aurez peut-être pas d'image satellite claire parce que :", options: ["Les satellites s'arrêtent", "Le NDVI ne marche qu'en saison sèche", "Les nuages cachent le sol", "Les cultures sont trop hautes"], answer: 2, why: "Sentinel-2 ne voit pas à travers les nuages." },
      { objective: "O3", q: "Un hectare, c'est :", options: ["10 m x 10 m", "1 km x 1 km", "Un demi-acre", "100 m x 100 m, environ 2,5 acres"], answer: 3, why: "Un hectare = 10 000 mètres carrés." },
      { objective: "O3", q: "Comment obtenir une meilleure mesure de surface au GPS ?", options: ["En courant vite autour de la parcelle", "En marchant lentement sous un ciel dégagé, en s'arrêtant aux coins et en faisant le tour deux fois", "En gardant le téléphone dans la poche", "En restant sous un arbre"], answer: 1, why: "Marcher lentement, faire des pauses et rester sous un ciel dégagé améliorent la précision." },
      { objective: "O3", q: "Pourquoi cartographier chaque zone comme une forme séparée avec un nom ?", options: ["Pour connaître la surface de chaque zone pour planifier et noter", "Parce que le GPS l'exige", "Pour la partager sur les réseaux sociaux", "Ce n'est pas utile"], answer: 0, why: "La surface de chaque zone détermine ses intrants et son rendement par acre." },
      { objective: "O4", q: "Quelle méthode d'analyse du sol est la plus précise ?", options: ["Une sonde bon marché", "Deviner d'après la couleur", "Une analyse dans un laboratoire agréé", "Une photo sur WhatsApp"], answer: 2, why: "Les laboratoires sont la référence avec laquelle on vérifie les kits et les capteurs." },
      { objective: "O4", q: "Les kits portables ont donné des résultats irréguliers pour :", options: ["La couleur du sol", "L'azote, le phosphore et le potassium", "La taille de la parcelle", "La pluie"], answer: 1, why: "Des tests indépendants ont trouvé un bon pH mais des résultats irréguliers pour N, P et K." },
      { objective: "O4", q: "Pour faire davantage confiance à un capteur portatif, vous devez :", options: ["L'utiliser seulement la nuit", "Ne jamais le comparer à rien", "En acheter un deuxième", "Comparer certaines de ses mesures à des résultats de laboratoire"], answer: 3, why: "L'étalonnage avec un laboratoire montre jusqu'où lui faire confiance." },
      { objective: "O5", q: "Exemple seulement : le travail par zones économise GHS 800 d'engrais et l'analyse en laboratoire a coûté GHS 300. Le résultat est :", options: ["Une perte de GHS 500", "Aucun changement", "Un gain de GHS 500", "Un gain de GHS 1 100"], answer: 2, why: "800 économisés moins 300 de coût = 500 gagnés." },
      { objective: "O5", q: "Un groupement d'agriculteurs peut réduire le coût des outils de précision en :", options: ["Partageant un appareil ou en payant ensemble les analyses en laboratoire", "Achetant chacun un drone", "Sautant toutes les analyses", "Utilisant un engrais non homologué"], answer: 0, why: "Le partage répartit le coût sur beaucoup de fermes." },
      { objective: "O5", q: "Pour apprendre la cartographie par drone, vous devez :", options: ["Voler sans licence", "Suivre les cours sur les drones qui existent déjà et respecter les règles de l'aviation civile", "Utiliser seulement ce cours", "Copier une vidéo en ligne"], answer: 1, why: "Les cours sur les drones le couvrent ; une licence est obligatoire." },
      { objective: "O6", q: "Une zone doit reposer sur :", options: ["Une image nuageuse", "Le conseil d'un vendeur", "Votre humeur", "Au moins deux types de preuves qui concordent"], answer: 3, why: "Deux sources qui concordent rendent une zone fiable." },
      { objective: "O6", q: "Quel est un bon plan pour une zone engorgée d'eau ?", options: ["Mettre plus d'engrais et espérer", "L'ignorer", "Creuser des drains ou planter une culture qui supporte un sol humide, et noter le résultat", "Planter la même chose que sur la butte sèche"], answer: 2, why: "Le plan correspond à la cause et il est vérifié par les registres." },
      { objective: "O6", q: "Chaque plan de zone doit contenir :", options: ["Ce qui change, son coût d'exemple et comment vous le vérifierez", "Seulement la couleur de la zone", "Seulement le prix de la récolte", "Rien ; les zones servent juste aux cartes"], answer: 0, why: "Un plan qu'on ne peut ni chiffrer ni vérifier n'est pas un plan." },
      { objective: "O6", q: "Les engrais et pesticides d'un plan de zone doivent être :", options: ["Les moins chers que vous trouvez", "Des produits homologués, utilisés selon l'étiquette", "Mélangés au hasard", "Doublés dans les zones faibles"], answer: 1, why: "Seuls les produits homologués, utilisés selon l'étiquette, sont sûrs et légaux." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Parcelle et zones cartographiées", objective: "O3", notYet: "Pas de limite, ou des surfaces devinées.", meets: "La limite a été parcourue au GPS et chaque zone a une forme nommée et une surface.", exceeds: "La limite a été parcourue deux fois et les surfaces sont très proches." },
      { name: "Preuves satellite utilisées avec prudence", objective: "O2", notYet: "Pas de vue satellite, ou le NDVI pris pour la cause.", meets: "Le NDVI a été comparé à deux dates et les taches basses ont été visitées pour trouver la cause.", exceeds: "Note ce que la carte ne pouvait pas montrer pour cette parcelle (nuages, petites parcelles, mauvaises herbes)." },
      { name: "Preuves sur le sol", objective: "O4", notYet: "Pas d'informations sur le sol, ou des mesures NPK de kit prises comme exactes.", meets: "Une méthode d'analyse choisie pour chaque zone, avec jusqu'où on peut s'y fier.", exceeds: "Au moins un résultat de laboratoire par zone, ou des mesures de kit comparées à un laboratoire." },
      { name: "Zones et plans", objective: "O6", notYet: "Zones tracées à partir d'une seule source, ou pas de plan par zone.", meets: "2 à 4 zones, chacune avec deux types de preuves et un plan, un coût et une vérification.", exceeds: "Chaque plan nomme le relevé qui montrera à la saison suivante s'il a marché." },
      { name: "Vaut son coût", objective: "O5", notYet: "Outils choisis sans compter le coût.", meets: "Un budget partiel avec des chiffres d'exemple en monnaie locale appuie le plan.", exceeds: "Envisage de partager les coûts avec un groupe, ou une méthode moins chère qui donne la même réponse." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui appliquent au moins un plan de zone à la saison suivante (suivi à 30 jours et en fin de saison)",
      "Apprenants qui notent le rendement par zone à la récolte",
      "Économies d'intrants ou changements de rendement par zone signalés après une saison",
      "Groupements d'agriculteurs qui partagent des analyses de sol ou des outils après le cours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un smartphone avec une application GPS gratuite de mesure de surface ou de cartographie",
      "Un accès à internet pour le Copernicus Browser (ordinateur ou navigateur du téléphone)",
      "Une parcelle à parcourir, du papier, un stylo et un croquis simple de la parcelle",
      "Une tarière ou une bêche et des seaux propres pour les échantillons composites ; un laboratoire ou un kit si possible",
      "Environ 90 minutes au total, plus le temps sur le terrain"
    ],
    facilitatorNotes: [
      "Faites les leçons 1 et 3 sur le terrain : parcourez ensemble la limite et les zones, et comparez les surfaces données par le GPS des différents téléphones.",
      "Préparez à l'avance une image claire du Copernicus Browser d'une parcelle locale ; les nuages de la saison des pluies peuvent empêcher les démonstrations en direct.",
      "Ne vendez ni ne recommandez aucun capteur de sol ni aucune application ; si un vendeur est présent, demandez-lui des résultats de tests indépendants.",
      "Rappelez aux apprenants que le NDVI montre où, pas pourquoi, et que les mesures NPK des kits doivent être vérifiées en laboratoire.",
      "Renvoyez les questions sur les drones vers les cours sur les drones ; ce cours n'enseigne pas le pilotage.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
