"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-intro.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Système en ligne de la KCAA pour les drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO et OMS : directives pour l'application aérienne des pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-fr",
  lang: "fr",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drones pour la surveillance agricole 1 : introduction, réglementation et sécurité",
  skills: "Expliquer ce que font les drones agricoles, Choisir un type de drone pour une tâche, Trouver les règles de votre autorité de l'aviation, Évaluer les risques d'un site de vol, Mener un briefing de sécurité avant le vol",
  outcome: "décider si un drone est le bon outil pour un problème agricole, nommer l'autorité de l'aviation et les papiers nécessaires avant de voler, et rédiger un plan simple d'utilisation du drone avec une liste de sécurité pour une ferme.",
  about: [
    "Ce cours s'adresse aux agriculteurs, aux agents de vulgarisation, aux chefs d'agro-entreprises et aux jeunes au Kenya, au Nigeria et partout en Afrique qui veulent commencer à utiliser des drones pour surveiller les cultures, les animaux et les terres. Vous n'avez pas besoin de posséder un drone.",
    "Dans le chapitre 1, vous apprenez ce qu'un drone peut et ne peut pas faire dans une ferme, les principaux types de drones, et comment juger si un drone vaut son coût par rapport à la marche dans le champ ou aux images satellite gratuites. Dans le chapitre 2, vous apprenez qui fait les règles sur les drones dans votre pays, quels papiers sont en général nécessaires, et comment vérifier un site de vol et faire le briefing de votre équipe pour que personne ne soit blessé.",
    "Les règles sur les drones sont des lois, et elles changent. Ce cours ne vous dit jamais que vous avez le droit de voler : il vous montre comment trouver les règles officielles de votre pays et les suivre. C'est le cours 1 d'un parcours en six parties ; les cours suivants enseignent le pilotage, l'imagerie, la santé des cultures, l'agriculture de précision et la gestion de programmes de drones.",
    "Chaque leçon dure environ cinq minutes : lisez, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un plan d'utilisation du drone d'une page pour une ferme réelle ou d'exemple (par exemple 3 acres de maïs et de haricots à Nakuru, ou 5 hectares de manioc dans l'État d'Oyo) : le problème que le drone aidera à résoudre, le type de drone et pourquoi, l'autorité de l'aviation et les papiers à vérifier ou à obtenir, les dangers du site que vous avez trouvés, et une liste de sécurité avant vol d'au moins huit points.",
  chapters: [
    {
      name: "Chapitre 1 : Les drones à la ferme",
      lessons: [
        {
          title: "Ce qu'un drone peut faire pour une ferme",
          minutes: 5,
          goal: "Nommer quatre tâches agricoles qu'un drone peut aider à faire, et deux qu'il ne peut pas faire.",
          text: [
            "Un drone est un petit aéronef sans pilote à bord. Une personne le pilote depuis le sol avec une radiocommande ou un téléphone, ou le programme pour suivre seul un itinéraire prévu. Les autorités de l'aviation l'appellent système d'aéronef sans pilote (UAS) ou système d'aéronef télépiloté (RPAS).",
            "À la ferme, la plupart des drones portent une caméra. D'en haut, vous voyez tout le champ d'un coup : les manques où la semence n'a pas levé, les taches jaunes ou flétries, les coins engorgés d'eau, l'érosion du sol, les clôtures cassées et les animaux qui ne sont pas à leur place. La FAO et l'UIT citent le suivi des cultures, l'alerte précoce, la surveillance des ravageurs, le suivi des animaux et la surveillance des forêts parmi les principaux usages agricoles.",
            "Certains drones plus grands pulvérisent ou épandent des semences et des engrais. La pulvérisation de pesticides par drone est une tâche spéciale, à risque plus élevé, qui demande ses propres autorisations de l'autorité de l'aviation et de l'autorité des pesticides ; ce cours ne traite donc que de la surveillance.",
            "Un drone ne peut pas vous dire POURQUOI une tache est jaune. Il vous montre OÙ regarder. Vous devez toujours aller sur place, regarder les feuilles, le sol et les insectes, et décider quoi faire. Il ne peut pas non plus voler sous une forte pluie ou par vent fort, et sa batterie dure en général bien moins d'une heure."
          ],
          words: [["Drone", "un petit aéronef piloté sans personne à bord."], ["UAS / RPAS", "les noms officiels : système d'aéronef sans pilote, système d'aéronef télépiloté. L'aéronef avec sa radiocommande et sa liaison."], ["Observation au champ", "parcourir un champ pour chercher des problèmes comme des ravageurs, des maladies ou des mauvaises herbes."]],
          slides: [
            { title: "Un drone, c'est", bullets: ["Un petit aéronef sans pilote à bord", "Piloté depuis le sol, ou sur un itinéraire prévu", "Appelé officiellement UAS ou RPAS"] },
            { title: "Ce qu'il permet", bullets: ["Voir tout le champ d'un coup", "Trouver les manques, les taches jaunes ou flétries", "Repérer l'eau stagnante, l'érosion, les clôtures cassées", "Compter et retrouver les animaux"] },
            { title: "Ce qu'il ne peut pas faire", bullets: ["Dire POURQUOI une tache est malade : il faut y aller", "Voler sous forte pluie ou par vent fort", "Rester en l'air des heures avec une batterie"] },
            { title: "La pulvérisation, c'est autre chose", bullets: ["Les drones pulvérisateurs demandent plus d'autorisations", "Autorité de l'aviation ET autorité des pesticides", "Ce cours ne traite que de la surveillance"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Pensez à une ferme que vous connaissez. Notez trois problèmes de cette ferme que vous pourriez VOIR depuis le ciel, et un problème pour lequel un drone ne pourrait pas aider (par exemple, des prix bas sur le marché).",
          youCanNow: "expliquer ce que fait un drone agricole, nommer les tâches où il aide, et dire pourquoi il faut toujours parcourir le champ."
        },
        {
          title: "Choisir le bon type de drone",
          minutes: 5,
          goal: "Associer un type de drone et une caméra à une tâche agricole.",
          text: [
            "Il existe trois grands types de drones agricoles. Le multirotor a quatre hélices ou plus, comme un petit hélicoptère. Il décolle d'un petit espace, peut faire du vol stationnaire et est facile à apprendre, mais il couvre moins de terrain par batterie. Il convient aux petites parcelles, aux serres et aux contrôles ponctuels.",
            "Le drone à voilure fixe ressemble à un petit avion. Il plane, donc il couvre de grandes surfaces comme une plantation de thé de 200 hectares ou un ranch, mais il a besoin d'espace pour décoller et atterrir et il est plus difficile à piloter. Le drone hybride (VTOL) décolle à la verticale comme un multirotor puis vole comme un avion.",
            "La caméra compte autant que le drone. Une caméra couleur normale (RVB) suffit pour voir les manques, les mauvaises herbes, l'eau stagnante et les animaux. Une caméra multispectrale mesure une lumière que l'œil ne voit pas et aide à montrer plus tôt le stress des plantes. Une caméra thermique montre la chaleur : utile pour le stress hydrique, les fuites d'irrigation et la recherche d'animaux.",
            "Commencez petit. Beaucoup d'agents de vulgarisation et de jeunes prestataires débutent avec un petit multirotor à caméra RVB, apprennent bien, et ajoutent des capteurs plus tard."
          ],
          steps: ["Décrivez la tâche : que devez-vous voir, et quelle est la taille de la zone ?", "Petite zone ou besoin de vol stationnaire : multirotor. Grande zone : voilure fixe ou hybride.", "Choisissez la caméra : RVB pour la plupart des tâches, multispectrale pour le stress précoce des plantes, thermique pour la chaleur et l'eau.", "Vérifiez que le drone est autorisé et peut être immatriculé dans votre pays avant de l'acheter."],
          words: [["Multirotor", "un drone à quatre hélices ou plus qui peut faire du vol stationnaire."], ["Voilure fixe", "un drone en forme de petit avion qui plane et couvre de grandes surfaces."], ["Caméra RVB", "une caméra couleur normale (rouge, vert, bleu ; RGB en anglais)."], ["Caméra multispectrale", "une caméra qui mesure aussi une lumière que l'œil ne voit pas, comme le proche infrarouge."]],
          slides: [
            { title: "Trois types de drones agricoles", bullets: ["Multirotor : vol stationnaire, petit espace, petites zones", "Voilure fixe : plane, grandes zones, besoin d'espace", "Hybride (VTOL) : décolle à la verticale, vole comme un avion"] },
            { title: "Trois types de caméras", bullets: ["RVB : couleur normale, suffit pour la plupart des tâches", "Multispectrale : montre plus tôt le stress des plantes", "Thermique : chaleur, stress hydrique, animaux"] },
            { title: "Associer drone et tâche", bullets: ["Parcelle de maïs de 2 acres : petit multirotor, RVB", "Plantation de thé de 200 ha : voilure fixe ou hybride", "Ranch à l'aube : caméra thermique pour trouver le bétail"] },
            { title: "Commencez petit", bullets: ["Apprenez sur un petit multirotor RVB", "Ajoutez des capteurs quand il le faut", "Vérifiez l'immatriculation avant d'acheter"] }
          ],
          tryIt: "Pour chacune de ces tâches, choisissez un type de drone et une caméra et donnez une raison : (a) vérifier la levée sur 2 acres de haricots, (b) cartographier 150 hectares de canne à sucre, (c) retrouver une vache perdue dans la brousse à l'aube.",
          youCanNow: "choisir un type de drone et une caméra adaptés à une tâche agricole et à la taille de la zone."
        },
        {
          title: "Un drone en vaut-il la peine ? Drone, satellite ou marche",
          minutes: 5,
          goal: "Décider si un drone, des images satellite gratuites ou la marche dans le champ est le meilleur outil pour un problème agricole.",
          text: [
            "Un drone n'est pas toujours le meilleur outil. Pour un potager d'un quart d'acre, parcourir les rangs est plus rapide et gratuit. Pour toute une région, les images satellite gratuites (par exemple celles des satellites européens Sentinel-2, visibles dans des outils en ligne gratuits) montrent les grandes tendances tous les quelques jours, mais chaque pixel fait environ 10 mètres, trop grossier pour voir des plantes une par une.",
            "Les drones sont entre les deux. Ils voient jusqu'à quelques centimètres, le jour que vous choisissez, même sous un léger voile nuageux. Cela les rend utiles pour les fermes moyennes et grandes, pour les coopératives qui partagent un drone entre les champs de nombreux membres, et pour les cultures à forte valeur comme le thé, le café, l'avocat et l'horticulture.",
            "Comptez tous les coûts, pas seulement le prix du drone : immatriculation et frais de licence, formation, batteries et hélices de rechange, un téléphone ou une tablette, données mobiles, déplacements et votre temps. Puis demandez-vous : quelle décision les images vont-elles changer, et cette décision vaut-elle plus que le coût ?"
          ],
          steps: ["Écrivez la décision que vous voulez prendre (par exemple : où ressemer, ou quel bloc traiter).", "Demandez-vous quelle est la taille de la zone et la taille de ce que vous devez voir.", "Comparez la marche, le satellite et le drone pour cette taille et ce niveau de détail.", "Listez tous les coûts de l'option drone et comparez-les à la valeur d'une meilleure décision."],
          words: [["Image satellite", "une photo de la Terre prise depuis l'espace ; les gratuites montrent de grandes zones mais avec moins de détail."], ["Résolution", "la taille du plus petit objet qu'une image peut montrer ; les images de drone montrent quelques centimètres, les images satellite gratuites environ 10 mètres."]],
          slides: [
            { title: "Trois façons de surveiller une ferme", bullets: ["Marche : gratuite, idéale pour les petites parcelles, lente pour les grandes", "Satellite : gratuit, grandes zones, détail d'environ 10 m", "Drone : détail au centimètre, le jour choisi"] },
            { title: "Où les drones sont rentables", bullets: ["Fermes moyennes et grandes", "Coopératives qui partagent un drone", "Cultures à forte valeur : thé, café, avocat, légumes"] },
            { title: "Comptez tous les coûts", bullets: ["Immatriculation, licence et formation", "Batteries, hélices, téléphone ou tablette, données", "Déplacements et votre temps"] },
            { title: "La question clé", bullets: ["Quelle décision les images vont-elles changer ?", "Cette décision vaut-elle plus que le coût ?"] }
          ],
          tryIt: "Choisissez un problème agricole de la leçon 1. Écrivez quel outil vous utiliseriez (marche, satellite ou drone), pourquoi, et listez au moins cinq coûts si vous choisissiez le drone.",
          youCanNow: "décider si un drone en vaut la peine pour un problème agricole en le comparant à la marche et aux images satellite."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les drones à la ferme",
        questions: [
          { q: "Une carte de drone montre une tache jaune dans un champ de maïs. Que faire ensuite ?", options: ["Pulvériser tout le champ tout de suite", "Aller jusqu'à la tache et regarder les plantes, le sol et les insectes", "L'ignorer ; les cartes de drone sont toujours fausses", "Voler encore jusqu'à ce que la tache disparaisse"], answer: 1, why: "Un drone montre OÙ regarder ; on découvre POURQUOI sur le terrain." },
          { q: "Quel drone convient le mieux pour cartographier une plantation de thé de 200 hectares ?", options: ["Un drone jouet", "Un petit drone d'intérieur", "Un drone à voilure fixe ou hybride", "Aucun drone ne peut le faire"], answer: 2, why: "Les drones à voilure fixe et hybrides planent et couvrent de grandes surfaces par batterie." },
          { q: "Quelle caméra aide le plus à trouver du bétail dans la brousse à l'aube ?", options: ["Une caméra thermique", "Seulement la caméra d'un téléphone", "Une caméra sans objectif", "Une buse de pulvérisation"], answer: 0, why: "Une caméra thermique montre la chaleur des animaux quand la lumière est faible." },
          { q: "Pulvériser un pesticide avec un drone :", options: ["Ne demande aucun papier en plus", "C'est la même chose que prendre des photos", "Demande ses propres autorisations de l'autorité de l'aviation et de l'autorité des pesticides", "Est permis partout si le champ est à vous"], answer: 2, why: "La pulvérisation est une opération spéciale, à risque plus élevé, avec des autorisations en plus." },
          { q: "Pour un potager d'un quart d'acre, le meilleur outil est en général :", options: ["Un drone à voilure fixe", "Un drone multispectral", "Des images satellite", "Parcourir les rangs à pied"], answer: 3, why: "Sur une très petite parcelle, la marche est plus rapide, moins chère et montre plus." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Règles et sécurité",
      lessons: [
        {
          title: "Qui fait les règles sur les drones dans votre pays",
          minutes: 6,
          goal: "Trouver l'autorité de l'aviation de votre pays et lister les papiers qu'elle peut exiger pour un drone.",
          text: [
            "Chaque pays contrôle son propre espace aérien. Dans chaque pays, une autorité de l'aviation civile fait et applique les règles sur les drones. Au Kenya, c'est l'Autorité de l'aviation civile du Kenya (KCAA), avec les Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020. Au Nigeria, c'est l'Autorité de l'aviation civile du Nigeria (NCAA), avec la partie 21 des règlements de l'aviation civile du Nigeria de 2023. D'autres pays, comme le Ghana, le Rwanda, l'Ouganda, la Tanzanie et l'Afrique du Sud, ont leur propre autorité et leurs propres règles. En Afrique francophone, cherchez l'agence nationale de l'aviation civile de votre pays (souvent appelée ANAC).",
            "Les papiers comprennent en général : l'immatriculation du drone ; un permis pour l'importer ; une licence de télépilote pour la personne qui pilote (surtout pour un travail commercial ou à risque plus élevé) ; un certificat d'exploitant pour une entreprise payée pour voler (la KCAA l'appelle Remote Air Operator Certificate, la NCAA RPAS Operator Certificate) ; et une autorisation pour certains types de vols. La KCAA et la NCAA ont toutes deux des systèmes en ligne pour les drones.",
            "Ne vous fiez pas à un ami, à un vendeur ou aux réseaux sociaux pour les règles. Lisez la page drones de l'autorité elle-même, ou appelez ou écrivez à l'autorité. Les redevances et les étapes changent : vérifiez-les le jour de votre demande.",
            "Ne volez jamais avant d'avoir l'immatriculation, la licence et les autorisations exigées par votre pays pour ce vol. Voler sans elles peut entraîner des amendes, la saisie du drone ou pire, et met en danger des personnes et des aéronefs."
          ],
          steps: ["Cherchez l'autorité de l'aviation civile de votre pays et ouvrez son site officiel.", "Trouvez la page sur les drones, UAS ou RPAS.", "Notez : immatriculation, permis d'importation, licence de pilote, certificat d'exploitant et autorisation de vol : lesquels vous concernent ?", "Notez les redevances, le système en ligne et la date de votre vérification.", "Si quelque chose n'est pas clair, contactez directement l'autorité."],
          words: [["Autorité de l'aviation civile", "l'organisme public qui fait et applique les règles pour tout ce qui vole dans un pays."], ["Immatriculation", "l'enregistrement de votre drone auprès de l'autorité pour qu'il ait un numéro officiel."], ["Licence de télépilote (RPL)", "la licence officielle d'une personne qui pilote un drone."], ["Certificat d'exploitant", "l'agrément dont une entreprise a besoin pour faire voler des drones contre paiement."]],
          slides: [
            { title: "Chaque pays a son autorité", bullets: ["Kenya : KCAA, règlements UAS de 2020", "Nigeria : NCAA, Nig.CARs 2023, partie 21", "Autres pays : leur propre autorité et leurs règles"] },
            { title: "Papiers parfois nécessaires", bullets: ["Immatriculation et permis d'importation", "Licence de télépilote pour la personne qui pilote", "Certificat d'exploitant pour voler contre paiement", "Autorisation pour certains vols"] },
            { title: "Les règles à la source", bullets: ["Lisez la page drones de l'autorité", "Appelez ou écrivez à l'autorité", "Vérifiez redevances et étapes le jour de la demande"] },
            { title: "La règle d'or", bullets: ["Sans immatriculation, licence ou autorisation : pas de vol", "Amendes, drone saisi, danger pour les personnes et les aéronefs"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Ouvrez le site de l'autorité de l'aviation civile de votre pays (KCAA, NCAA ou la vôtre). Trouvez la page drones et faites la liste des papiers exigés, l'adresse du système en ligne et la date d'aujourd'hui.",
          youCanNow: "nommer votre autorité de l'aviation, trouver ses règles sur les drones et lister les papiers nécessaires avant de voler."
        },
        {
          title: "Vérifier les dangers d'un site de vol",
          minutes: 5,
          goal: "Parcourir une ferme et marquer les dangers et les zones interdites de vol avant tout vol.",
          text: [
            "Avant tout vol, regardez le site sur le terrain et sur une carte. Beaucoup de règles tiennent les drones loin des aéroports et des pistes d'atterrissage, des sites militaires, des prisons, des foules et des zones gouvernementales. Par exemple, la partie 21 du Nigeria fixe des distances autour des aérodromes et limite les vols au-dessus des zones habitées et près des personnes qui ne participent pas à l'opération. Les règles de votre pays donnent les distances exactes ; vérifiez-les.",
            "Dans la ferme elle-même, cherchez les lignes électriques, les grands arbres, les antennes télécom, les bâtiments, les routes, les habitations, les écoles, les marchés et les animaux au pâturage. Cherchez un endroit dégagé et plat pour décoller et atterrir, loin des personnes et de la poussière.",
            "Parlez aux gens : l'agriculteur, les voisins et toute personne qui travaille à proximité. Dites-leur quand vous allez voler. Demandez avant de survoler le terrain ou la maison d'un voisin. Respectez la vie privée : ne filmez pas les personnes ni les maisons."
          ],
          steps: ["Ouvrez une application de cartes et regardez les environs de la ferme : pistes, routes, villes, sites sensibles.", "Vérifiez les règles de votre autorité sur les distances avec les aéroports et les personnes.", "Parcourez la ferme et marquez les lignes électriques, arbres, antennes, bâtiments et animaux.", "Choisissez un endroit dégagé pour décoller et atterrir.", "Dites à l'agriculteur et aux voisins quand vous volerez, et demandez avant de survoler leur terrain."],
          words: [["Zone interdite de vol", "une zone où les drones ne sont pas permis sans autorisation spéciale, comme près des aéroports."], ["Danger", "tout ce qui peut causer un dommage : lignes électriques, arbres, personnes, animaux."], ["Aérodrome", "tout aéroport, piste d'atterrissage ou héliport."]],
          slides: [
            { title: "Regardez au-delà de la ferme", bullets: ["Aéroports, pistes et héliports", "Sites militaires, prisons, foules", "Vérifiez les distances exactes de votre pays"] },
            { title: "Regardez dans la ferme", bullets: ["Lignes électriques, grands arbres, antennes", "Habitations, routes, écoles, marchés", "Animaux au pâturage"] },
            { title: "Choisissez un endroit sûr", bullets: ["Aire de décollage et d'atterrissage dégagée et plate", "Loin des personnes et de la poussière"] },
            { title: "Parlez aux gens", bullets: ["Prévenez l'agriculteur et les voisins", "Demandez avant de survoler leur terrain", "Ne filmez ni les personnes ni les maisons"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Dessinez un croquis simple d'une ferme. Marquez le lieu de décollage, chaque danger que vous trouvez, les maisons proches, les routes et toute piste d'atterrissage à quelques kilomètres que vous trouvez sur une application de cartes.",
          youCanNow: "vérifier les dangers et les zones interdites de vol d'un site et choisir un endroit sûr pour décoller."
        },
        {
          title: "Le briefing avant le vol et que faire si ça tourne mal",
          minutes: 5,
          goal: "Mener un briefing de sécurité avant le vol et connaître les premiers gestes en cas d'urgence.",
          text: [
            "Les équipes de drones professionnelles commencent chaque vol par un court briefing. Tout le monde entend le plan : où le drone va voler, à quelle hauteur, combien de temps, qui est le pilote, qui est l'observateur qui surveille le ciel et le drone, et où se trouve le lieu d'atterrissage.",
            "Vérifiez la météo : pas de vol sous la pluie, par orage, par vent fort ou en rafales, par tempête de poussière ou par mauvaise lumière, sauf si votre drone et vos autorisations le permettent. Vérifiez le drone : batterie chargée, hélices intactes, caméra propre, radiocommande connectée.",
            "Convenez de ce que vous ferez si quelque chose tourne mal : si la batterie est faible, atterrissez ; si une personne ou un animal passe sous le drone, éloignez-vous ou atterrissez ; si un avion ou un hélicoptère apparaît, descendez et atterrissez tout de suite. Si le drone est perdu ou s'écrase, sécurisez la zone, et signalez les incidents graves à votre autorité comme ses règles l'exigent."
          ],
          steps: ["Briefing de l'équipe : zone, hauteur, durée, pilote, observateur, lieu d'atterrissage.", "Vérifiez la météo : pluie, vent, poussière, lumière.", "Vérifiez le drone : batterie, hélices, caméra, liaison avec la radiocommande.", "Convenez du plan d'urgence : batterie faible, personnes en dessous, aéronef proche, drone perdu.", "Après le vol, notez ce qui s'est passé dans un carnet de vol."],
          words: [["Observateur", "un membre de l'équipe qui surveille le drone et le ciel et prévient le pilote."], ["Briefing", "une courte réunion avant un vol pour que tout le monde connaisse le plan."], ["Carnet de vol", "un registre de chaque vol : date, lieu, heure, pilote, problèmes."]],
          slides: [
            { title: "Briefing de l'équipe", bullets: ["Où, à quelle hauteur, combien de temps", "Qui est pilote, qui est observateur", "Où vous atterrirez"] },
            { title: "Vérifiez la météo et le drone", bullets: ["Ni pluie, ni orage, ni vent fort, ni poussière", "Batterie, hélices, caméra, radiocommande"] },
            { title: "Si ça tourne mal", bullets: ["Batterie faible : atterrissez", "Personnes ou animaux en dessous : éloignez-vous ou atterrissez", "Aéronef proche : descendez et atterrissez tout de suite"] },
            { title: "Après le vol", bullets: ["Notez-le dans le carnet de vol", "Signalez les incidents graves selon vos règles"] }
          ],
          tryIt: "Exercice final : rédigez votre plan d'utilisation du drone d'une page pour une ferme : le problème, le type de drone et la caméra, l'autorité et les papiers, les dangers de votre croquis, et une liste avant vol d'au moins huit points, plan d'urgence compris.",
          youCanNow: "faire le briefing d'une équipe avant un vol, vérifier la météo et le drone, et suivre un plan d'urgence simple."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Règles et sécurité",
        questions: [
          { q: "Qui fait et applique les règles sur les drones au Kenya ?", options: ["L'Autorité de l'aviation civile du Kenya (KCAA)", "Le bureau agricole du comté", "Le vendeur de drones", "Le chef local"], answer: 0, why: "La KCAA est l'autorité de l'aviation civile du Kenya et réglemente les drones." },
          { q: "Un ami dit que vous pouvez faire voler un nouveau drone sur la ferme d'un client sans aucun papier. Que faites-vous ?", options: ["Vous volez ; votre ami l'a déjà fait", "Vous vérifiez les règles officielles de l'autorité de l'aviation et obtenez ce qui est exigé avant de voler", "Vous volez très tôt pour que personne ne voie", "Vous volez seulement au-dessus du terrain du client"], answer: 1, why: "Seules les règles de l'autorité officielle comptent ; sans papiers, pas de vol." },
          { q: "Lequel est un danger à marquer avant de voler ?", options: ["Un ciel dégagé", "Un lieu de décollage sec et plat", "Des lignes électriques qui traversent le champ", "Une batterie chargée"], answer: 2, why: "Les lignes électriques peuvent accrocher ou abîmer le drone et sont un vrai danger." },
          { q: "Pendant un vol, un petit avion apparaît à proximité. Que doit faire le pilote ?", options: ["Monter plus haut pour mieux voir", "Continuer à filmer", "Voler vers lui", "Descendre et atterrir tout de suite"], answer: 3, why: "Les aéronefs avec pilote passent toujours en premier ; faites descendre le drone et dégagez." },
          { q: "Quel est le rôle de l'observateur ?", options: ["Surveiller le drone et le ciel et prévenir le pilote", "Piloter le drone", "Seulement charger les batteries", "Filmer les voisins"], answer: 0, why: "L'observateur surveille pour que le pilote se concentre sur un vol sûr." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones pour la surveillance agricole 1 : introduction, réglementation et sécurité",
    questions: [
      { q: "Qu'est-ce qu'un drone ?", options: ["Un petit aéronef sans pilote à bord", "Un tracteur", "Un satellite météo", "Une application de téléphone"], answer: 0, why: "Un drone est piloté depuis le sol ou suit un itinéraire prévu, sans personne à bord." },
      { q: "Pour quelle tâche agricole un drone à caméra peut-il aider ?", options: ["Faire monter les prix du marché", "Trouver les manques où la semence n'a pas levé", "Réparer une pompe cassée", "Signer un contrat"], answer: 1, why: "D'en haut, on voit vite les manques dans une culture." },
      { q: "Un drone montre une tache de manioc flétri. Le drone vous dit :", options: ["Exactement de quelle maladie il s'agit", "Quel pesticide acheter", "Où aller regarder", "Rien d'utile"], answer: 2, why: "Il montre où ; vous découvrez pourquoi sur le terrain." },
      { q: "Quel drone peut faire du vol stationnaire et décoller d'un petit espace ?", options: ["La voilure fixe", "Un planeur en papier", "Un satellite", "Le multirotor"], answer: 3, why: "Les multirotors ont plusieurs hélices et peuvent faire du vol stationnaire." },
      { q: "Une caméra multispectrale est utile parce qu'elle :", options: ["Mesure une lumière que l'œil ne voit pas et montre plus tôt le stress des plantes", "Ne prend que des photos en noir et blanc", "Fait voler le drone plus vite", "Épand de l'engrais"], answer: 0, why: "Elle mesure le proche infrarouge et d'autres bandes liées à la santé des plantes." },
      { q: "Une caméra thermique montre :", options: ["Seulement les couleurs", "La chaleur", "Directement les éléments nutritifs du sol", "Les prix"], answer: 1, why: "Les caméras thermiques mesurent la chaleur, utile pour le stress hydrique et les animaux." },
      { q: "Une coopérative de 300 petites fermes veut surveiller le maïs de ses membres. Une bonne option est :", options: ["Chaque agriculteur achète un drone à voilure fixe", "Ne jamais utiliser de drones", "Un seul service de drone partagé pour tous les membres", "Seulement des appels téléphoniques"], answer: 2, why: "Partager un drone entre de nombreux champs répartit le coût." },
      { q: "Les images satellite gratuites sont moins utiles pour les plantes une par une parce que :", options: ["Il y a toujours des nuages", "Elles sont en noir et blanc", "Elles coûtent cher", "Chaque pixel fait environ 10 mètres"], answer: 3, why: "Des pixels grossiers montrent des tendances sur de grandes zones, pas des plantes une par une." },
      { q: "Lequel est un coût de l'utilisation d'un drone en plus de son achat ?", options: ["Batteries et hélices de rechange", "La pluie gratuite", "Le soleil", "Rien d'autre"], answer: 0, why: "Batteries, hélices, redevances, formation, données et déplacements coûtent tous de l'argent." },
      { q: "Avant d'acheter un drone, la question clé est :", options: ["De quelle couleur est-il ?", "Quelle décision les images vont-elles changer, et cela vaut-il le coût ?", "Est-ce le modèle le plus récent ?", "Mes amis en ont-ils un ?"], answer: 1, why: "Un drone n'est rentable que s'il améliore une décision de plus que ce qu'il coûte." },
      { q: "Les règles nigérianes sur les drones se trouvent dans :", options: ["La brochure d'un vendeur", "Un groupe sur les réseaux sociaux", "La partie 21 des Nig.CARs 2023 de la NCAA", "Le carnet de reçus de la ferme"], answer: 2, why: "La partie 21 de la NCAA couvre l'immatriculation, la certification et l'exploitation des RPAS." },
      { q: "Les règles sur les drones du Ghana, du Rwanda et de l'Ouganda sont :", options: ["Exactement les mêmes que celles du Kenya", "Inutiles", "Fixées seulement par les Nations unies", "Fixées par l'autorité de l'aviation de chaque pays"], answer: 3, why: "Chaque pays contrôle son espace aérien et a ses propres règles." },
      { q: "Une entreprise payée par des agriculteurs pour faire voler des drones a en général besoin :", options: ["D'un certificat d'exploitant de l'autorité de l'aviation", "De rien de plus", "Seulement d'un téléphone", "Seulement d'une carte de visite"], answer: 0, why: "La KCAA et la NCAA ont toutes deux des certificats d'exploitant pour le travail commercial par drone." },
      { q: "Où vérifier les redevances actuelles pour les drones ?", options: ["Dans un vieux journal", "Sur la page officielle de l'autorité de l'aviation le jour de la demande", "Dans une rumeur", "Sur la boîte du drone"], answer: 1, why: "Les redevances changent ; la page officielle est la source fiable." },
      { q: "Pulvériser un pesticide par drone demande l'autorisation :", options: ["Seulement de l'agriculteur", "Seulement du vendeur", "De l'autorité de l'aviation et de l'autorité des pesticides", "De personne"], answer: 2, why: "La pulvérisation est une opération spéciale couverte par les règles aériennes et sur les pesticides." },
      { q: "Quel lieu a en général des restrictions pour les drones à proximité ?", options: ["Un champ de maïs loin des villes", "Une berge de rivière", "Une parcelle de haricots", "Une piste d'atterrissage"], answer: 3, why: "Les règles tiennent les drones loin des aéroports et des pistes." },
      { q: "Avant de survoler la maison d'un voisin, vous devez :", options: ["Lui demander d'abord", "Voler bas pour le surprendre", "Le filmer", "Voler de nuit"], answer: 0, why: "Respectez le terrain et la vie privée des gens ; demandez d'abord." },
      { q: "Quelle météo veut dire qu'il ne faut pas faire voler un petit drone ?", options: ["Calme et dégagé", "Vent fort en rafales ou orage", "Léger voile nuageux sans vent", "Soleil du matin"], answer: 1, why: "Le vent, les orages et la pluie peuvent vous faire perdre le contrôle." },
      { q: "L'alerte batterie indique « faible » pendant un vol. Vous devez :", options: ["Faire encore une ligne", "Monter plus haut", "Atterrir", "Éteindre la radiocommande"], answer: 2, why: "Batterie faible veut dire faire redescendre le drone en sécurité maintenant." },
      { q: "Après chaque vol, vous devez :", options: ["Supprimer toutes les photos", "Vendre le drone", "L'oublier", "Noter le vol dans un carnet de vol"], answer: 3, why: "Un carnet de vol garde la trace de chaque vol et de chaque problème." }
    ]
  }
};
