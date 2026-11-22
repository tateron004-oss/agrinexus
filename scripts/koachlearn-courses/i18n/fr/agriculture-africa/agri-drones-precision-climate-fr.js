"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-precision-climate.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const FAO_CSA = { name: "FAO : guide de référence sur l'agriculture intelligente face au climat (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO et OMS : directives pour l'application aérienne des pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-fr",
  lang: "fr",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Drones pour la surveillance agricole 4 : précision, climat et suivi du bétail",
  skills: "Diviser un champ en zones de gestion, Cibler les intrants par zone, Évaluer la levée et estimer le rendement, Surveiller l'érosion, les inondations et la sécheresse, Suivre le bétail et les pâturages, Inspecter les infrastructures de la ferme",
  outcome: "utiliser des cartes de drone pour gérer une exploitation mixte par zone et rédiger un plan de surveillance sur toute la saison couvrant les cultures, les risques climatiques, le bétail et les infrastructures de la ferme.",
  about: [
    "Voici le cours 4 du parcours de surveillance par drone, pour les agriculteurs, les gestionnaires de fermes, le personnel des coopératives et de la vulgarisation, et les prestataires de services par drone au Kenya, au Nigeria et partout en Afrique. Vous devez savoir faire et lire une carte de drone (cours 2 et 3).",
    "Le chapitre 1 porte sur l'agriculture de précision : traiter chaque partie d'un champ selon ses besoins, au lieu de traiter tout le champ de la même façon. Vous diviserez un champ en zones, ciblerez les semences, l'engrais et la main-d'œuvre, et utiliserez des comptages de plants pour estimer le rendement. Le chapitre 2 élargit la vue à toute la ferme : les risques climatiques et environnementaux comme l'érosion, les inondations et la sécheresse, le bétail et les pâturages, et les barrages, mares, clôtures, canaux et serres qui font tourner une ferme.",
    "Les exemples portent sur le maïs et le haricot dans la vallée du Rift, le manioc et l'igname dans le sud-ouest du Nigeria, le thé à Kericho, et des exploitations mixtes cultures-élevage. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un plan de surveillance par drone sur toute la saison pour une exploitation mixte (réelle ou d'exemple, comme 10 hectares avec du maïs, des haricots, un enclos de pâturage, 30 bovins, une mare et une clôture de limite) : les zones du champ principal et ce que reçoit chacune, les vols que vous ferez et quand (cultures, risque climatique, bétail, infrastructures), ce que vous chercherez à chaque fois, et l'action à laquelle chaque constat pourrait mener.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des agriculteurs, des gestionnaires d'exploitation, le personnel des coopératives et de la vulgarisation, et des prestataires de services par drone au Kenya, au Nigeria et partout en Afrique qui suivent le cours 4 du parcours de surveillance par drone, souvent sur des fermes mixtes cultures-élevage.",
    startingPoint: "Les apprenants savent faire et lire une carte de drone (cours 2 et 3). La plupart traitent encore tout un champ de la même façon, vérifient le bétail, les pâturages et les infrastructures à pied, et réagissent à l'érosion, aux inondations et à la sécheresse après les dégâts. Peu planifient des vols sur toute une saison.",
    gap: "Les champs inégaux gaspillent des intrants là où ils ne rapportent pas, et une alerte tardive sur l'érosion, les périodes sèches, le surpâturage ou un barrage qui fuit coûte des récoltes et de l'argent. Un plan de surveillance sur toute la saison, avec des zones, permet aux fermes de mettre les intrants et la main-d'œuvre là où ils rapportent et d'agir tôt face aux risques pour le climat, le bétail et les infrastructures.",
    constraints: [
      "Niveau de lecture : des mots simples ; chaque terme d'agriculture de précision est expliqué",
      "Appareils : des cartes de drone d'une vraie ferme ou des exemples ; un téléphone avec GPS pour marquer les zones",
      "Règles : les vols demandent les autorisations du pays ; la pulvérisation par drone demande aussi des autorisations pour les pesticides",
      "Bien-être animal et vie privée : n'effrayez ni ne poursuivez les animaux ; ne filmez ni les personnes ni les concessions sans autorisation",
      "Les doses et les chiffres de rendement viennent de l'expérience locale ou de la vulgarisation, pas du cours"
    ],
    prerequisites: "« Drones pour la surveillance agricole 3 : santé des cultures, ravageurs et traitement des données »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de cartes de drone de plusieurs dates et de la connaissance de l'agriculteur", action: "diviser un champ en deux à quatre zones de gestion et les marquer sur le terrain", standard: "avec chaque zone nommée et sa raison indiquée" },
    { id: "O2", condition: "Pour chaque zone de gestion", action: "décider ce que reçoit la zone : semences, engrais, main-d'œuvre ou réparation", standard: "en adaptant l'action à la cause de la zone et sans jamais prévoir de pulvérisation par drone sans autorisations" },
    { id: "O3", condition: "À partir d'une carte de drone et de comptages par échantillon", action: "calculer la levée et une fourchette de rendement approximative", standard: "avec la levée calculée par rapport à l'écartement visé et le rendement donné en fourchette" },
    { id: "O4", condition: "Sur toute une saison", action: "planifier des vols de drone pour repérer les risques d'érosion, d'inondation et de sécheresse et suivre les pratiques climato-intelligentes", standard: "à des dates fixes pour pouvoir comparer les cartes" },
    { id: "O5", condition: "Pour un vol au-dessus du bétail ou des pâturages", action: "planifier un vol calme et sûr pour compter les animaux et vérifier les pâturages et les points d'eau", standard: "avec l'accord du berger et sans effrayer les animaux" },
    { id: "O6", condition: "Pour les barrages, canaux, clôtures, serres et magasins de la ferme", action: "les inspecter depuis le ciel et rédiger une liste de réparations", standard: "avec l'élément, l'endroit, le problème, l'urgence et qui le réparera" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'agriculture de précision",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les zones de gestion : un champ, des besoins différents",
          minutes: 5,
          goal: "Diviser un champ en deux à quatre zones de gestion à partir d'une carte de drone et de la connaissance de la ferme.",
          text: [
            "La plupart des champs ne sont pas homogènes. La profondeur du sol, la pente, d'anciennes termitières, du fumier passé, l'engorgement et l'ombre font que certaines parties poussent mieux que d'autres. L'agriculture de précision consiste à gérer chaque partie selon ses besoins.",
            "Une zone de gestion est une partie d'un champ qui se comporte de la même façon saison après saison. Pour tracer les zones, combinez plusieurs cartes de drone (NDVI ou couleur, de plusieurs dates ou saisons) avec ce que sait l'agriculteur : où l'eau stagne, où le sol est peu profond, où la culture réussit toujours.",
            "Restez simple. Deux à quatre zones suffisent pour la plupart des petites et moyennes fermes : par exemple une zone forte, une zone moyenne et une zone faible et humide. Nommez-les et marquez-les avec des piquets ou des points GPS pour que les ouvriers les trouvent."
          ],
          steps: ["Rassemblez des cartes du champ de deux dates ou plus si possible.", "Demandez à l'agriculteur où la culture est toujours forte ou faible, et pourquoi.", "Tracez deux à quatre zones qui correspondent aux cartes et à la connaissance de l'agriculteur.", "Nommez chaque zone et marquez-la au sol avec des piquets ou des points GPS."],
          words: [["Agriculture de précision", "gérer chaque partie d'un champ selon ses besoins."], ["Zone de gestion", "une partie d'un champ qui se comporte de la même façon saison après saison et qui est gérée comme un tout."]],
          slides: [
            { title: "Les champs ne sont pas homogènes", bullets: ["Sol, pente, eau, ombre, ancien fumier", "Certaines parties poussent toujours mieux"] },
            { title: "Tracer les zones", bullets: ["Cartes de plusieurs dates", "Plus la connaissance de l'agriculteur", "Des zones qui se comportent pareil chaque saison"] },
            { title: "Restez simple", bullets: ["Deux à quatre zones", "Forte, moyenne, faible ou humide", "Marquez-les au sol"] }
          ],
          tryIt: "Dessinez un champ que vous connaissez (ou utilisez une carte d'exemple). Tracez deux à quatre zones, nommez-les et écrivez pourquoi chaque zone est différente.",
          youCanNow: "diviser un champ en zones de gestion simples à l'aide de cartes et de la connaissance de l'agriculteur.",
          quickCheck: [
            { objective: "O1", q: "Quel découpage en zones de gestion est raisonnable pour le champ d'un petit exploitant ?", options: ["Une zone forte, une zone moyenne et une zone faible et humide", "Une zone pour chaque plant", "Vingt zones de même taille", "Aucune zone"], answer: 0, why: "Deux à quatre zones simples suffisent pour la plupart des petites et moyennes exploitations." },
            { objective: "O1", q: "L'agriculteur dit qu'un coin donne toujours de mauvais résultats, mais la seule carte de cette saison le montre vert. Que faites-vous ?", options: ["Ignorer l'agriculteur", "Tracer les zones à partir de cette seule carte", "Consulter des cartes d'autres dates et saisons et utiliser la connaissance de l'agriculteur", "Abandonner les zones"], answer: 2, why: "Les zones se tracent à partir de plusieurs cartes et dates, avec ce que sait l'agriculteur." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cibler les intrants par zone",
          minutes: 6,
          goal: "Décider ce que reçoit chaque zone : semences, engrais, main-d'œuvre ou réparation.",
          text: [
            "Une fois les zones tracées, demandez-vous ce dont chacune a besoin. Une zone faible sur un sol peu profond peut ne pas rentabiliser un surplus d'engrais ; une zone engorgée peut avoir besoin d'un drain, pas d'engrais ; une zone moyenne peut donner le meilleur retour sur des intrants supplémentaires. C'est la gestion à dose variable : des doses différentes à des endroits différents.",
            "Dans les grandes fermes, des machines peuvent appliquer des doses variables à partir d'une carte de préconisation. Dans les petites fermes, la même idée fonctionne à la main : les ouvriers mettent plus ou moins d'engrais ou de fumier par poquet selon la zone, ne ressèment les manques que là où le drone les montre, et désherbent ou inspectent d'abord les zones à problème.",
            "Certains drones peuvent pulvériser ou épandre. La pulvérisation de pesticides par drone demande ses propres autorisations de votre autorité de l'aviation et de l'autorité des pesticides de votre pays, des opérateurs formés et titulaires d'une licence, et des pratiques sûres comme celles des directives de la FAO et de l'OMS sur l'application aérienne. Ne pulvérisez jamais, et ne conseillez jamais de pulvériser, sans elles."
          ],
          steps: ["Pour chaque zone, écrivez pourquoi elle est faible ou forte.", "Choisissez l'action qui corrige la cause : drain, ressemis, plus ou moins d'engrais, désherbage.", "Écrivez la dose ou la tâche de chaque zone pour que les ouvriers la suivent.", "Pulvérisation par drone : seulement avec les autorisations aériennes et phytosanitaires exigées."],
          words: [["Dose variable", "appliquer des quantités différentes de semences, d'engrais ou d'eau dans différentes parties d'un champ."], ["Carte de préconisation", "une carte qui dit à une personne ou à une machine combien appliquer dans chaque zone."]],
          slides: [
            { title: "Corrigez la cause", bullets: ["Sol peu profond : plus d'engrais peut ne pas payer", "Engorgé : un drain, pas d'engrais", "Zone moyenne : souvent le meilleur retour"] },
            { title: "Dose variable à la main", bullets: ["Plus ou moins par poquet selon la zone", "Ressemis seulement là où il faut", "Désherbez et inspectez d'abord les zones à problème"] },
            { title: "Drones pulvérisateurs", bullets: ["Autorisations aériennes ET phytosanitaires", "Opérateurs formés et avec licence", "Suivez les directives FAO/OMS sur l'application aérienne"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Avec vos zones de la leçon 1, écrivez une consigne d'une ligne par zone qu'un ouvrier agricole pourrait suivre (par exemple : Zone C, coin humide : creuser un drain avant l'engrais de couverture ; pas d'engrais en plus).",
          youCanNow: "décider et écrire ce que doit recevoir chaque zone de gestion, et savoir quand la pulvérisation demande une autorisation spéciale.",
          quickCheck: [
            { objective: "O2", q: "Sur une grande exploitation, à quoi sert une carte de préconisation ?", options: ["À compter les bovins", "À inspecter les clôtures", "À écrire le budget de la ferme", "À dire aux machines quelle dose apporter à chaque endroit"], answer: 3, why: "Sur les grandes exploitations, les machines peuvent apporter des doses variables à partir d'une carte de préconisation." },
            { objective: "O2", q: "Le drone montre des manques seulement dans la zone moyenne. Que dites-vous aux ouvriers ?", options: ["Ressemer tout le champ", "Ressemer seulement les manques que montre le drone", "Mettre de l'engrais dans les manques", "Laisser les manques"], answer: 1, why: "Sur les petites exploitations, les ouvriers ressèment seulement là où le drone montre des manques." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Comptage des plants et premières estimations de rendement",
          minutes: 5,
          goal: "Estimer la levée et une fourchette de rendement à partir d'une carte de drone et de comptages par échantillon.",
          text: [
            "La levée, c'est le nombre de plants qui sont sortis par rapport au nombre semé. Une carte de drone très détaillée montre clairement les manques. Certains logiciels comptent les plants automatiquement ; vous pouvez aussi compter à la main dans des carrés d'échantillon sur la carte.",
            "Pour estimer la levée : marquez quelques zones d'échantillon de taille connue dans chaque zone, comptez les plants, et comparez avec l'écartement prévu. Si un champ de maïs a été semé à 75 cm sur 25 cm, l'objectif est d'environ 53 000 plants par hectare ; si vous en comptez 40 000, la levée est d'environ 75 %.",
            "Une estimation approximative du rendement multiplie les plants par hectare par un rendement attendu par plant, tiré de l'expérience locale ou des chiffres de la vulgarisation, zone par zone. Traitez-la comme une fourchette, pas comme une promesse : la météo, les ravageurs et les pertes à la récolte changent le chiffre final. Elle aide quand même à planifier tôt le stockage, les ventes et le transport."
          ],
          steps: ["Marquez sur la carte des carrés d'échantillon de taille connue dans chaque zone.", "Comptez les plants dans chaque carré (à l'œil ou par logiciel).", "Calculez les plants par hectare et comparez avec l'objectif.", "Multipliez par le rendement attendu par plant selon les chiffres locaux pour obtenir une fourchette.", "Écrivez la fourchette et ce qui pourrait la changer."],
          words: [["Levée", "le nombre de plants sortis par rapport au nombre semé."], ["Estimation de rendement", "une première estimation de ce que le champ va produire."]],
          slides: [
            { title: "La levée", bullets: ["Plants sortis par rapport aux plants semés", "Les manques se voient bien sur les cartes détaillées"] },
            { title: "Compter par échantillon", bullets: ["Carrés d'échantillon dans chaque zone", "Comptez, ramenez à l'hectare", "Maïs à 75 cm x 25 cm : environ 53 000 plants par ha"] },
            { title: "Première estimation de rendement", bullets: ["Plants par ha x rendement attendu par plant", "Une fourchette, pas une promesse", "Aide à planifier stockage, ventes et transport"] }
          ],
          tryIt: "Une zone de maïs d'un hectare a été semée à 75 cm sur 25 cm. Vos comptages suggèrent 44 000 plants par hectare. Calculez le pourcentage de levée, puis écrivez ce qui pourrait expliquer les manques et ce que vous vérifieriez.",
          youCanNow: "estimer la levée et une fourchette de rendement par zone à partir d'une carte de drone et de comptages par échantillon.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi compter les plants dans des zones d'échantillon de taille connue ?", options: ["Pour trouver la limite de la ferme", "Pour calculer le nombre de plants par hectare et le comparer à l'objectif", "Pour mesurer la pluie", "Pour vérifier la batterie du drone"], answer: 1, why: "Les comptages dans des zones de taille connue donnent les plants par hectare, que l'on compare à l'écartement visé." },
            { objective: "O3", q: "Un acheteur vous demande votre récolte exacte un mois avant la récolte. Que lui donnez-vous ?", options: ["Un seul chiffre exact comme une promesse", "Rien du tout", "Le chiffre de l'année dernière", "Une fourchette approximative, en expliquant que la météo, les ravageurs et les pertes peuvent la changer"], answer: 3, why: "Une estimation précoce du rendement est une fourchette, pas une promesse." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'agriculture de précision",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'une zone de gestion ?", options: ["N'importe quel carré au hasard", "Une partie d'un champ qui se comporte de la même façon saison après saison", "Le bureau de la ferme", "Une zone interdite de vol"], answer: 1, why: "Les zones regroupent des parties qui réagissent pareil, pour les gérer pareil." },
          { objective: "O1", q: "Quelle est la meilleure façon de tracer les zones ?", options: ["Utiliser une seule carte d'un seul jour", "Copier les zones d'un voisin", "Combiner des cartes de plusieurs dates avec la connaissance de l'agriculteur", "Tracer des carrés égaux"], answer: 2, why: "Plusieurs cartes plus la connaissance locale montrent des formes stables." },
          { objective: "O2", q: "Une zone est faible parce que l'eau y stagne après la pluie. La meilleure action est :", options: ["Améliorer le drainage", "Doubler l'engrais", "Pulvériser un pesticide", "Semer plus"], answer: 0, why: "Corrigez la cause ; l'engrais ne règle pas l'engorgement." },
          { objective: "O2", q: "Un service de drone propose de pulvériser un pesticide sur le maïs d'un client. Que faut-il avoir ?", options: ["Seulement la permission de l'agriculteur", "Rien de plus", "Une bonne caméra", "Les autorisations aériennes et phytosanitaires et des opérateurs avec licence"], answer: 3, why: "La pulvérisation par drone est une opération réglementée à risque plus élevé." },
          { objective: "O3", q: "Du maïs semé à 75 cm x 25 cm a un objectif d'environ :", options: ["5 300 plants par hectare", "53 000 plants par hectare", "530 000 plants par hectare", "530 plants par hectare"], answer: 1, why: "10 000 m2 divisés par 0,1875 m2 par plant donnent environ 53 000." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Climat, bétail et infrastructures",
      lessons: [
        {
          objectives: ["O4"],
          title: "Surveiller les risques climatiques et environnementaux",
          minutes: 6,
          goal: "Utiliser des vols de drone pour repérer les risques d'érosion, d'inondation et de sécheresse et suivre les pratiques climato-intelligentes.",
          text: [
            "Le changement climatique apporte des pluies plus fortes, des périodes sèches plus longues et plus de chaleur dans beaucoup de zones agricoles. La FAO décrit l'agriculture intelligente face au climat comme une agriculture qui augmente la productivité et les revenus, aide les fermes à s'adapter et à renforcer leur résilience, et réduit ou élimine les émissions de gaz à effet de serre quand c'est possible.",
            "Les drones aident du côté de l'adaptation. Après une forte pluie, un vol montre les ravines, les terrasses emportées, les drains envasés et les parcelles inondées ; les modèles d'élévation montrent où l'eau coulera la prochaine fois. Pendant les périodes sèches, les cartes thermiques et NDVI montrent quelles zones sèchent en premier. Au fil des saisons, les cartes montrent si les terrasses, les cultures de couverture, le paillage, la plantation d'arbres et la récupération de l'eau de pluie fonctionnent.",
            "Survolez la même zone à des dates fixes (par exemple avant les grandes pluies, après le premier gros orage, en milieu de saison et après la récolte) et comparez. Partagez les cartes avec le groupement d'agriculteurs ou les agents du comté ou de l'État : elles montrent à toute la communauté où agir en premier."
          ],
          steps: ["Choisissez des dates de vol fixes liées aux saisons.", "Après une forte pluie : cartographiez ravines, terrasses emportées, drains envasés, parcelles inondées.", "En période sèche : cartographiez les zones qui sèchent en premier avec le NDVI ou le thermique.", "Chaque saison : vérifiez terrasses, cultures de couverture, paillage, arbres, récupération de l'eau.", "Comparez les cartes dans le temps et partagez-les."],
          words: [["Agriculture intelligente face au climat (AIC)", "une agriculture qui augmente la productivité, aide les fermes à s'adapter au changement climatique et réduit les émissions quand c'est possible."], ["Érosion", "le sol emporté par l'eau ou le vent."], ["Ravine", "un chenal profond creusé dans le sol par l'eau qui ruisselle."]],
          slides: [
            { title: "L'agriculture intelligente face au climat", bullets: ["Augmenter productivité et revenus", "S'adapter et renforcer la résilience", "Réduire les émissions quand c'est possible"] },
            { title: "Ce que montrent les drones", bullets: ["Après la pluie : ravines, terrasses emportées, inondations", "Périodes sèches : zones qui sèchent en premier", "Si terrasses, paillage, arbres fonctionnent"] },
            { title: "Volez à dates fixes", bullets: ["Avant les pluies, après les orages, mi-saison, après récolte", "Comparez dans le temps", "Partagez avec groupements et agents"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Écrivez un calendrier annuel de quatre vols climat pour une ferme que vous connaissez, liés à ses saisons des pluies et sèches. Pour chaque vol, listez deux choses que vous chercherez.",
          youCanNow: "planifier des vols de drone qui suivent les risques d'érosion, d'inondation et de sécheresse et vérifient si les pratiques climato-intelligentes fonctionnent.",
          quickCheck: [
            { objective: "O4", q: "Après une forte pluie, que permet de montrer un modèle d'élévation ?", options: ["Quels bovins sont malades", "Le prix du maïs", "Où l'eau coulera la prochaine fois", "Quelle semence était certifiée"], answer: 2, why: "Les modèles d'élévation montrent la hauteur du sol : on voit donc où l'eau coulera la prochaine fois." },
            { objective: "O4", q: "Après un gros orage, vos cartes montrent des ravines dans plusieurs fermes du groupement. Que faites-vous ?", options: ["Partager les cartes avec le groupement et les agents du comté ou de l'État", "Garder les cartes pour vous", "Les supprimer puisque l'orage est passé", "Ne survoler que votre propre ferme la prochaine fois"], answer: 0, why: "Des cartes partagées montrent à toute la communauté où agir d'abord." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Suivre le bétail et les pâturages",
          minutes: 5,
          goal: "Planifier un vol de drone calme et sûr pour compter les animaux et vérifier les pâturages et les points d'eau.",
          text: [
            "Dans les ranchs et les grandes zones pastorales, un drone peut compter les bovins, les chèvres ou les chameaux, retrouver les animaux perdus ou malades, et vérifier que les points d'eau et les abreuvoirs fonctionnent, ce qui économise des heures de marche ou de route. Les caméras thermiques trouvent les animaux à l'aube ou dans la brousse épaisse.",
            "Les drones peuvent effrayer les animaux, surtout à basse hauteur. Volez assez haut pour ne pas les effrayer, approchez lentement par le côté, ne poursuivez ni ne rassemblez jamais des animaux avec un drone sauf si vous êtes formé et que c'est permis, et arrêtez s'ils commencent à courir. Demandez au berger avant de voler.",
            "Les cartes de pâturage (NDVI ou couleur) montrent où l'herbe est forte, surpâturée ou absente. Sur une saison, elles aident à planifier le pâturage tournant et à repérer les terres qui ont besoin de repos. Ne filmez jamais des personnes ou des habitations sans permission."
          ],
          steps: ["Demandez au berger ou au propriétaire ; convenez de l'heure et de la zone.", "Volez haut et approchez lentement par le côté.", "Comptez les animaux sur les photos, pas en tournant à basse hauteur.", "Vérifiez au passage les points d'eau, les abreuvoirs et les clôtures.", "Cartographiez le pâturage : fort, surpâturé, nu.", "Arrêtez si les animaux commencent à courir."],
          words: [["Pâturage tournant", "déplacer les animaux d'un enclos à l'autre pour que l'herbe se repose et repousse."], ["Surpâturage", "quand les animaux mangent l'herbe plus vite qu'elle ne repousse, laissant le sol nu."]],
          slides: [
            { title: "Ce que font les drones dans un ranch", bullets: ["Compter les animaux, retrouver les perdus ou malades", "Vérifier points d'eau et abreuvoirs", "Thermique à l'aube ou dans la brousse épaisse"] },
            { title: "Le bien-être animal d'abord", bullets: ["Demandez au berger", "Volez haut, approchez lentement par le côté", "Ne poursuivez jamais ; arrêtez si les animaux courent"] },
            { title: "Cartes de pâturage", bullets: ["Herbe forte, surpâturée ou absente", "Planifiez le pâturage tournant", "Repérez les terres qui ont besoin de repos"] }
          ],
          tryIt: "Écrivez un court plan de vol pour compter 60 bovins dans un enclos de 40 hectares : heure, hauteur, approche, ce que vous vérifierez d'autre, et quand vous arrêteriez.",
          youCanNow: "planifier un vol calme et sûr pour le bétail et les pâturages et l'utiliser pour appuyer les décisions de pâturage.",
          quickCheck: [
            { objective: "O5", q: "Que peut faire un drone dans un ranch ?", options: ["Compter les animaux et vérifier que les points d'eau et les abreuvoirs fonctionnent", "Rassembler le bétail dans l'enclos de nuit (boma)", "Soigner les animaux malades", "Traire les vaches"], answer: 0, why: "Les drones peuvent compter les animaux, retrouver ceux qui sont perdus ou malades et vérifier les points d'eau, ce qui évite de marcher ou de rouler." },
            { objective: "O5", q: "Un berger déplace des chèvres près de votre vol prévu. Que faites-vous ?", options: ["Voler bas pour prendre des photos de près", "Pousser les chèvres en un seul groupe", "Demander d'abord au berger, voler haut et approcher lentement par le côté", "Les survoler vite en ligne droite"], answer: 2, why: "Demandez au berger, et volez haut et lentement par le côté pour ne pas effrayer les animaux." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inspecter les infrastructures de la ferme",
          minutes: 5,
          goal: "Inspecter depuis le ciel les barrages, canaux, clôtures, serres et magasins et lister les réparations.",
          text: [
            "Les infrastructures de la ferme coûtent cher et on les oublie facilement jusqu'à ce qu'elles lâchent. Un court vol de drone peut vérifier qu'une mare ou la digue d'un petit barrage n'a pas de fissures ni de suintements, que les canaux et conduites d'irrigation n'ont pas de fuites ni de bouchons, que les clôtures de limite ne sont pas cassées, que les toits et filets des serres ne sont pas déchirés, et que les toits des magasins ne sont pas abîmés.",
            "Volez lentement le long de l'ouvrage avec la caméra inclinée, pas seulement à la verticale. Gardez une distance sûre avec les lignes électriques et les bâtiments, et restez dans les limites de vos autorisations. Prenez des photos aux mêmes endroits à chaque fois pour pouvoir comparer.",
            "Transformez les photos en liste de réparations : élément, emplacement, problème, urgence, et qui va réparer. Volez à nouveau après les réparations, et avant les pluies, quand une rupture ferait le plus de dégâts."
          ],
          steps: ["Listez les ouvrages à vérifier et leur emplacement.", "Volez lentement le long de chacun avec la caméra inclinée.", "Photographiez les mêmes endroits à chaque fois.", "Rédigez une liste de réparations : élément, emplacement, problème, urgence, qui répare.", "Volez à nouveau après les réparations et avant les pluies."],
          words: [["Mare", "un bassin creusé qui recueille l'eau de pluie pour les animaux ou l'irrigation (water pan en anglais)."], ["Suintement", "de l'eau qui fuit lentement à travers une digue ou la berge d'un canal."]],
          slides: [
            { title: "Ce qu'il faut inspecter", bullets: ["Mares et digues de petits barrages", "Canaux et conduites", "Clôtures, toits de serres, toits de magasins"] },
            { title: "Comment voler", bullets: ["Lentement le long de l'ouvrage", "Caméra inclinée, pas seulement à la verticale", "Mêmes endroits de photo à chaque fois"] },
            { title: "Des photos aux réparations", bullets: ["Élément, emplacement, problème, urgence, qui", "Revolez après réparation et avant les pluies"] }
          ],
          tryIt: "Exercice final : rédigez votre plan de surveillance sur toute la saison pour une exploitation mixte : zones et ce que reçoit chacune, vols cultures, vols climat, un vol bétail et pâturage, un vol infrastructures, ce que vous cherchez à chaque fois et l'action à laquelle chaque constat pourrait mener.",
          youCanNow: "inspecter les infrastructures de la ferme par drone et planifier la surveillance de toute la ferme sur une saison.",
          quickCheck: [
            { objective: "O6", q: "Quel problème un vol de drone peut-il trouver sur une serre ?", options: ["Le prix de vente de la culture", "Le pH du sol", "Le nom d'un ravageur", "Des déchirures dans le plastique du toit ou les filets"], answer: 3, why: "Les vols peuvent montrer des déchirures dans les toits et les filets des serres avant qu'elles ne s'aggravent." },
            { objective: "O6", q: "Les pluies commencent dans trois semaines et la digue de la mare a été réparée la semaine dernière. Que faites-vous ?", options: ["Attendre la fin des pluies", "Revoler pour vérifier la réparation avant les pluies", "Ne plus jamais la vérifier", "Voler seulement à la verticale, très haut au-dessus"], answer: 1, why: "Revolez après les réparations et avant les pluies, quand une rupture ferait le plus de dégâts." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Climat, bétail et infrastructures",
        questions: [
          { objective: "O4", q: "L'agriculture intelligente face au climat de la FAO a trois objectifs. Lequel en fait partie ?", options: ["Aider les fermes à s'adapter et à renforcer leur résilience", "Utiliser le plus d'engrais possible", "Abattre tous les arbres", "Ne cultiver qu'une seule culture"], answer: 0, why: "L'AIC vise la productivité, l'adaptation et la résilience, et moins d'émissions." },
          { objective: "O4", q: "Quel est un bon moment pour un vol climat afin de trouver ravines et terrasses emportées ?", options: ["Seulement à minuit", "Jamais", "Après le premier gros orage de la saison", "Pendant un salon de drones"], answer: 2, why: "Les dégâts récents se voient clairement juste après une forte pluie." },
          { objective: "O5", q: "Des bovins commencent à courir quand le drone est au-dessus. Vous devez :", options: ["Voler plus bas pour les calmer", "Les poursuivre pour les ramener", "Continuer à tourner", "Arrêter et éloigner le drone"], answer: 3, why: "Le bien-être des animaux et la sécurité passent d'abord." },
          { objective: "O5", q: "Une carte de pâturage montre un enclos avec beaucoup de sol nu. Cela suggère :", options: ["Un surpâturage ; l'enclos a peut-être besoin de repos", "Que le drone est cassé", "Seulement trop de pluie", "Un pâturage parfait"], answer: 0, why: "Un sol nu dans un pâturage veut souvent dire que les animaux ont mangé plus vite que l'herbe n'a repoussé." },
          { objective: "O6", q: "Pour inspecter la digue d'une mare, vous devez :", options: ["Voler seulement à la verticale, très vite", "Voler lentement le long de la digue avec la caméra inclinée", "Voler au-dessus des personnes proches", "Ne pas l'inspecter"], answer: 1, why: "Une caméra inclinée montre les fissures et les suintements de la digue." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones pour la surveillance agricole 4 : précision, climat et suivi du bétail",
    questions: [
      { objective: "O1", q: "L'agriculture de précision consiste à :", options: ["Traiter toutes les parties d'un champ de la même façon", "Gérer chaque partie d'un champ selon ses besoins", "Utiliser seulement des drones", "Cultiver la nuit"], answer: 1, why: "Elle adapte les intrants et le travail aux besoins de chaque zone." },
      { objective: "O1", q: "Pourquoi la plupart des champs ne sont-ils pas homogènes ?", options: ["Les drones les rendent inégaux", "Ils le sont", "Le sol, la pente, l'eau, l'ombre et l'usage passé diffèrent", "Les semences sont toujours mauvaises"], answer: 2, why: "La nature et l'histoire des cultures font que certaines zones poussent mieux." },
      { objective: "O1", q: "Combien de zones suffisent en général dans une petite ferme ?", options: ["Deux à quatre", "Cinquante", "Cent", "Aucune"], answer: 0, why: "Quelques zones simples sont faciles à gérer et à marquer." },
      { objective: "O1", q: "Pourquoi marquer les zones au sol ?", options: ["Pour décorer la ferme", "La loi exige des piquets", "Pour effrayer les oiseaux", "Pour que les ouvriers trouvent et traitent chaque zone"], answer: 3, why: "Les ouvriers doivent voir où commence et finit chaque zone." },
      { objective: "O2", q: "Dose variable veut dire :", options: ["Des quantités différentes à des endroits différents", "La même quantité partout", "Changer la vitesse du drone", "Changer les prix des cultures"], answer: 0, why: "Les doses changent selon la zone et ses besoins." },
      { objective: "O2", q: "Dans une petite ferme, la dose variable peut se faire :", options: ["Seulement avec de grosses machines", "Par des ouvriers qui mettent plus ou moins d'engrais par poquet selon la zone", "Par satellite", "Pas du tout"], answer: 1, why: "L'idée marche à la main avec des consignes claires par zone." },
      { objective: "O2", q: "Une zone faible sur un sol peu profond et caillouteux peut :", options: ["Toujours demander double engrais", "Être le meilleur endroit pour semer plus", "Ne pas rentabiliser un surplus d'engrais", "Avoir besoin de pulvérisation"], answer: 2, why: "Le sol limite la croissance ; l'intrant en plus peut être gaspillé." },
      { objective: "O2", q: "Qui doit autoriser la pulvérisation de pesticides par drone ?", options: ["Seulement le vendeur de drones", "Seulement l'agriculteur", "Seulement un voisin", "L'autorité de l'aviation et l'autorité des pesticides"], answer: 3, why: "Les règles aériennes et sur les pesticides s'appliquent toutes deux aux drones pulvérisateurs." },
      { objective: "O3", q: "La levée, c'est :", options: ["Les plants sortis par rapport aux plants semés", "La hauteur du drone", "Le panneau de la ferme", "Le prix des semences"], answer: 0, why: "Elle montre si la culture s'est bien installée." },
      { objective: "O3", q: "Vous comptez 40 000 plants de maïs par hectare pour un objectif d'environ 53 000. La levée est d'environ :", options: ["25 %", "50 %", "75 %", "100 %"], answer: 2, why: "40 000 divisé par 53 000 donne environ 0,75." },
      { objective: "O3", q: "Une première estimation de rendement doit être donnée comme :", options: ["Une promesse exacte", "Un secret", "Une fourchette qui peut changer", "Un montant de prêt"], answer: 2, why: "La météo, les ravageurs et les pertes changent le rendement final." },
      { objective: "O4", q: "Quelle pratique climato-intelligente les drones peuvent-ils aider à suivre ?", options: ["Brûler les résidus de culture", "Labourer dans le sens de la pente", "Abattre tous les arbres", "Les terrasses, le paillage et la plantation d'arbres"], answer: 3, why: "Les cartes montrent si ces pratiques fonctionnent au fil du temps." },
      { objective: "O4", q: "En période sèche, quelles cartes montrent les zones qui sèchent en premier ?", options: ["Les cartes NDVI ou thermiques", "Une carte routière", "Une liste de prix", "Une affiche sur la pluie"], answer: 0, why: "Le NDVI et le thermique montrent la vigueur des plantes et le stress thermique." },
      { objective: "O4", q: "Pourquoi survoler la même zone à des dates fixes ?", options: ["Pour utiliser plus de batteries", "Pour comparer les changements dans le temps", "Parce que les drones ont besoin de routine", "Pour filmer les voisins"], answer: 1, why: "Des cartes répétées montrent les tendances et l'effet des actions." },
      { objective: "O5", q: "Avant un vol sur le bétail, vous devez :", options: ["Voler bas au-dessus du troupeau", "Rassembler les animaux en les poursuivant", "Demander au berger et convenir de l'heure et de la zone", "Voler à vitesse maximale"], answer: 2, why: "La permission et une approche calme protègent les animaux et les personnes." },
      { objective: "O5", q: "Dans un ranch, les caméras thermiques aident à :", options: ["Faire pousser l'herbe", "Réparer les clôtures", "Lire les boucles d'oreille des animaux", "Trouver les animaux à l'aube ou dans la brousse épaisse"], answer: 3, why: "Les animaux apparaissent comme des points chauds." },
      { objective: "O5", q: "Le pâturage tournant consiste à :", options: ["Déplacer les animaux d'un enclos à l'autre pour que l'herbe repousse", "Garder les animaux au même endroit toute l'année", "Faire pâturer seulement la nuit", "Nourrir seulement au foin"], answer: 0, why: "Le repos des enclos permet à l'herbe de se rétablir." },
      { objective: "O6", q: "Un suintement sur une digue veut dire :", options: ["Que le barrage est plein de poissons", "Que l'eau fuit lentement à travers", "Que la digue est neuve", "Qu'il pleut"], answer: 1, why: "Le suintement peut affaiblir la digue et doit être réparé." },
      { objective: "O6", q: "Une bonne liste de réparations des infrastructures contient :", options: ["Seulement des photos", "Le modèle du drone", "L'élément, l'emplacement, le problème, l'urgence et qui va réparer", "Les prix du marché"], answer: 2, why: "Des détails clairs font que les réparations se font." },
      { objective: "O6", q: "Quand une inspection des infrastructures est-elle la plus utile ?", options: ["Jamais", "Seulement après une rupture", "Pendant un orage", "Avant les pluies et après les réparations"], answer: 3, why: "Réparer avant les pluies évite les ruptures." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      8,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du plan et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Zones de gestion",
        objective: "O1",
        notYet: "Pas de zones, ou des zones tracées sur une seule carte sans raison.",
        meets: "Deux à quatre zones nommées dans le champ principal, tirées des cartes et de la connaissance de l'agriculteur, avec la façon de les marquer.",
        exceeds: "Utilise des cartes de plusieurs dates ou saisons."
      },
      {
        name: "Ce que reçoit chaque zone",
        objective: "O2",
        notYet: "Toutes les zones reçoivent le même traitement, ou une pulvérisation par drone est prévue sans autorisations.",
        meets: "Chaque zone a une action adaptée à sa cause : semences, engrais, main-d'œuvre ou réparation.",
        exceeds: "Inclut une vérification de la levée et une fourchette de rendement approximative par zone."
      },
      {
        name: "Vols pour le climat",
        objective: "O4",
        notYet: "Pas de vols pour le climat ou l'environnement.",
        meets: "Des vols à dates fixes pour vérifier l'érosion, les inondations et la sécheresse, et ce à quoi mènerait chaque constat.",
        exceeds: "Suit une pratique climato-intelligente, comme les terrasses ou le paillage, au long de la saison."
      },
      {
        name: "Bétail et pâturages",
        objective: "O5",
        notYet: "Pas de vols pour le bétail, ou des vols qui effraieraient les animaux.",
        meets: "Des vols pour compter les animaux et vérifier les pâturages et les points d'eau, avec l'accord du berger et une hauteur sûre.",
        exceeds: "Relie les cartes de pâturage à un plan de pâturage tournant."
      },
      {
        name: "Infrastructures",
        objective: "O6",
        notYet: "Les barrages, les clôtures ou les autres ouvrages ne sont pas inclus.",
        meets: "Des vols pour inspecter la mare, les clôtures et les autres ouvrages, avec un modèle de liste de réparations.",
        exceeds: "Prévus avant les pluies et après les réparations, avec des photos prises aux mêmes endroits."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le plan de surveillance",
      "Les apprenants qui déclarent gérer un champ par zones ou suivre un plan de surveillance de saison dans la saison qui suit (enquête de suivi)",
      "Les fermes ou les groupements qui déclarent avoir agi tôt face à l'érosion, la sécheresse, le surpâturage ou une panne d'infrastructure",
      "Les apprenants qui passent au cours 5 du parcours drones"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Des cartes de drone d'une vraie ferme, ou la ferme mixte d'exemple du cours",
      "Un téléphone avec GPS, et des piquets ou des fanions pour marquer les zones",
      "Un cahier ou un tableur pour le tableau des zones et le plan de saison",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour écrire le plan de surveillance"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis tracez des zones sur une carte d'exemple en groupe avant que les apprenants tracent les leurs.",
      "Apportez les rendements attendus localement et les conseils d'engrais de la vulgarisation ; ne donnez pas de doses vous-même.",
      "Ne planifiez ni ne montrez de pulvérisation par drone sans les autorisations aériennes et phytosanitaires.",
      "Si vous volez près du bétail, demandez d'abord au berger, volez haut et arrêtez si les animaux commencent à courir.",
      "Évaluez le plan de surveillance avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
