"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-mission-planning.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Système en ligne de la KCAA pour les drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Service météorologique du Kenya (KMD)", url: "https://meteo.go.ke" };
const NIMET = { name: "Agence météorologique du Nigeria (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-fr",
  lang: "fr",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Drones agricoles : planification des missions et opérations de vol",
  skills: "Transformer la demande d'un client en périmètre de mission, Reconnaître un site et vérifier l'espace aérien et les autorisations, Rédiger une évaluation des risques, Établir un plan de vol avec des mesures d'urgence, Animer le briefing de l'équipe et exécuter la mission, Faire les vérifications après le vol et signaler les incidents",
  outcome: "planifier et mener une mission professionnelle de drone agricole, de la demande du client à la livraison des données, avec un dossier de mission complet : périmètre, reconnaissance du site, vérifications de l'espace aérien et des autorisations, évaluation des risques, plan de vol, briefing de l'équipe, mesures d'urgence et registres après le vol.",
  about: [
    "Ce cours s'adresse aux télépilotes, aux entreprises de services par drone, aux équipes drones des plantations et des agro-entreprises, et aux programmes de vulgarisation au Kenya, au Nigeria et partout en Afrique qui font des missions de drone pour d'autres. Il suppose que vous connaissez déjà les bases du pilotage et de la cartographie, ainsi que les règles sur les drones de votre pays (voir le parcours de surveillance et le cours sur la réglementation).",
    "Le chapitre 1 porte sur la planification : s'entendre sur ce dont le client a vraiment besoin, reconnaître le site, vérifier l'espace aérien et les autorisations, évaluer les risques, et établir un plan de vol avec la hauteur, le recouvrement, les batteries et l'horaire calculés. Le chapitre 2 porte sur les opérations : les rôles de l'équipe et le briefing, l'exécution et la surveillance de la mission, la gestion des imprévus, et la clôture de la mission avec la vérification des données, les registres et les éventuels rapports d'incident.",
    "Les exemples sont de vrais types de missions : cartographier 40 hectares d'avocatiers pour un exportateur à Murang'a, compter les plants sur 25 exploitations de manioc sous contrat dans l'État d'Oyo, inspecter l'irrigation d'une ferme horticole près de Naivasha. Ne faites jamais une mission sans l'immatriculation, les licences, le certificat d'exploitant et les autorisations exigés par votre pays. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Constituez un dossier de mission complet pour une mission de drone agricole (réelle ou d'exemple, comme la cartographie de 40 hectares d'avocatiers pour un exportateur) : le périmètre de mission convenu avec le client, une reconnaissance du site avec les dangers et un croquis, les vérifications de l'espace aérien et des autorisations avec leurs sources, un tableau d'évaluation des risques, le plan de vol (zone, hauteur, niveau de détail des images, recouvrement, vitesse, batteries, horaire, limites météo), les rôles de l'équipe et les notes de briefing, les mesures d'urgence, et la liste de vérification et le registre d'après vol que vous remplirez.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des télépilotes, des entreprises de services par drone, des équipes de drones de domaines et d'agro-entreprises, et des programmes de vulgarisation au Kenya, au Nigeria et partout en Afrique qui réalisent des missions de drones agricoles pour des clients.",
    startingPoint: "Les apprenants savent déjà faire voler un drone, réaliser un vol de cartographie simple et connaissent les règles des drones de leur pays. Peu transforment la demande d'un client en un périmètre écrit, rédigent une évaluation des risques et des mesures d'urgence, briefent une équipe ou clôturent une mission avec des vérifications de données, des registres et des rapports d'incident.",
    gap: "Les missions sans périmètre clair mènent à des litiges, et les missions sans reconnaissance, évaluation des risques ni briefing mènent à des accidents, à des données refusées et à des clients perdus. Un dossier de mission complet permet à une équipe de drones de livrer ce dont le client a besoin, en sécurité, légalement et à temps, et montre aux clients et aux autorités que l'entreprise est professionnelle.",
    constraints: [
      "Niveau de lecture : des mots simples ; les termes de drones et de sécurité sont expliqués",
      "Appareils : un téléphone ou un ordinateur portable avec une application de cartes ; un drone et une application de planification aident mais ne sont pas obligatoires",
      "Règles : chaque mission demande l'immatriculation, les licences, le certificat d'exploitant et les autorisations exigés par le pays",
      "Conditions de terrain : chaleur, vent, pluie, réseau faible et curieux dans les fermes africaines",
      "Temps : des leçons courtes, plus du temps pour constituer le dossier de mission"
    ],
    prerequisites: "« Drones agricoles en Afrique : réglementation aérienne et licences » et le parcours « Drones pour la surveillance agricole », ou une expérience de vol équivalente."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à la demande d'un client pour une mission de drone", action: "rédiger un périmètre de mission avec la décision, la zone, les livrables, les dates, le contact, le prix et le partage des données", standard: "en indiquant ce que le drone ne peut pas faire" },
    { id: "O2", condition: "Pour un site de mission", action: "faire une reconnaissance sur carte et sur le terrain, et confirmer les limites de l'espace aérien et chaque autorisation", standard: "notées avec les dates et les sources avant le vol" },
    { id: "O3", condition: "Pour une mission prévue", action: "rédiger une évaluation des risques, un plan de vol et des plans d'urgence", standard: "avec une mesure de maîtrise pour chaque danger et des limites météo fixées" },
    { id: "O4", condition: "Avant le premier vol d'une mission", action: "attribuer les rôles de l'équipe et animer un briefing", standard: "couvrant les dangers, les limites, les mesures d'urgence, les annonces standard et qui peut ordonner l'arrêt" },
    { id: "O5", condition: "Pendant une mission", action: "surveiller le vol et la télémétrie et décider de voler ou non", standard: "en faisant une pause ou en atterrissant dès qu'une limite est dépassée" },
    { id: "O6", condition: "À la fin d'une mission", action: "vérifier les données, remplir les registres et signaler tout incident", standard: "avant de quitter le site, avec les trous revolés et les données sauvegardées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier la mission",
      lessons: [
        {
          objectives: ["O1"],
          title: "De la demande du client au périmètre de mission",
          minutes: 5,
          goal: "Transformer la demande d'un client en un périmètre de mission clair et écrit.",
          text: [
            "Les clients demandent souvent « un vol de drone » alors qu'ils ont besoin d'une réponse : Quels blocs ont une mauvaise levée ? Où l'irrigation fuit-elle ? Combien d'arbres avons-nous ? Commencez par demander quelle décision ils veulent prendre et ce qu'ils feront des résultats.",
            "Mettez-vous ensuite d'accord par écrit sur le périmètre : la zone (avec une carte ou un fichier de limites), la question et les livrables (par exemple une orthomosaïque, une carte NDVI, un comptage d'arbres, un rapport d'une page), le niveau de détail nécessaire, la période de dates, les conditions d'accès, la personne de contact à la ferme, le prix et le mode de paiement (comme l'argent mobile à la livraison), et la façon dont les données seront partagées et conservées.",
            "Dites clairement ce que le drone ne peut pas faire. Une carte peut montrer où les arbres sont stressés ; elle ne peut pas dire à elle seule de quelle maladie il s'agit. Un périmètre clair vous protège, vous et le client, des déceptions et des litiges."
          ],
          steps: ["Demandez quelle décision le client veut prendre.", "Mettez-vous d'accord sur la zone et obtenez une limite ou un croquis.", "Mettez-vous d'accord sur les livrables, le détail, les dates et les contacts.", "Mettez-vous d'accord sur le prix, le paiement et le partage des données.", "Indiquez les limites de ce que le drone peut montrer.", "Mettez-le par écrit et faites confirmer par les deux parties."],
          words: [["Périmètre de mission", "l'accord écrit sur ce qu'une mission de drone couvrira et livrera."], ["Livrable", "un produit que reçoit le client, comme une carte ou un rapport."]],
          slides: [
            { title: "Trouvez la vraie question", bullets: ["Quelle décision le client va-t-il prendre ?", "Que fera-t-il des résultats ?"] },
            { title: "Mettez-vous d'accord par écrit", bullets: ["Zone et limites", "Livrables et niveau de détail", "Dates, accès, contact à la ferme", "Prix, paiement, partage des données"] },
            { title: "Indiquez les limites", bullets: ["Les cartes montrent où, pas toujours pourquoi", "Un périmètre clair évite les litiges"] }
          ],
          tryIt: "Un exportateur d'avocats dit : « Survolez nos 40 hectares la semaine prochaine. » Écrivez cinq questions que vous poseriez, puis rédigez un périmètre de mission d'un paragraphe avec la zone, les livrables, les dates, le contact, un prix provisoire et les limites.",
          youCanNow: "transformer une demande vague d'un client en un périmètre de mission clair et écrit.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un livrable dans un périmètre de mission ?", options: ["La batterie du drone", "Le numéro de téléphone du client", "La hauteur de vol", "Ce que reçoit le client, comme une carte ou un rapport"], answer: 3, why: "Les livrables sont ce que vous remettez, comme une orthomosaïque, une carte NDVI, un comptage d'arbres ou un rapport." },
            { objective: "O1", q: "Un client veut que votre carte NDVI nomme la maladie de ses avocatiers. Qu'écrivez-vous dans le périmètre ?", options: ["Que la carte nommera chaque maladie", "Que la carte montre les arbres stressés, mais qu'une maladie doit être identifiée sur le terrain", "Rien à ce sujet", "Que vous traiterez aussi les arbres"], answer: 1, why: "Une carte peut montrer où les arbres sont stressés, mais ne peut pas dire seule de quelle maladie il s'agit." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reconnaissance du site, espace aérien et autorisations",
          minutes: 6,
          goal: "Reconnaître un site et confirmer les limites de l'espace aérien et chaque autorisation avant le vol.",
          text: [
            "Faites d'abord une reconnaissance sur carte : regardez la zone dans une application de cartes et en vue satellite pour repérer les pistes d'atterrissage, aéroports, routes, villes, lignes électriques, pylônes, rivières, zones protégées et sites sensibles. Vérifiez ensuite les règles et les cartes de votre autorité pour les zones réglementées et les distances avec les aérodromes, et si la mission demande une autorisation d'opération spécifique. Prévoyez le temps nécessaire pour obtenir les autorisations.",
            "Reconnaissez ensuite le terrain si vous le pouvez, ou demandez des photos au contact de la ferme : lieux de décollage et d'atterrissage, obstacles et leur hauteur, personnes et animaux, habitations, routes d'accès, couverture du réseau mobile, et où l'équipe peut s'abriter du soleil et de la pluie.",
            "Confirmez les autorisations : le propriétaire ou le gestionnaire par écrit, les voisins si vous survolez leurs terres, les chefs communautaires là où c'est l'usage, et l'autorité de l'aviation selon les règles. Notez tout dans le dossier de mission avec les dates et les sources."
          ],
          steps: ["Reconnaissance sur carte : carte et vue satellite de la zone.", "Vérifiez les règles aériennes : zones réglementées, distances avec les aérodromes, autorisations.", "Reconnaissance du terrain ou photos de la ferme : lieux de décollage, obstacles, personnes, réseau.", "Obtenez par écrit l'autorisation du propriétaire et des voisins.", "Notez toutes les vérifications avec les dates et les sources."],
          words: [["Reconnaissance sur carte", "l'examen d'un site à l'aide de cartes et de documents avant de s'y rendre."], ["Zone réglementée", "un espace aérien où le vol est limité ou demande une autorisation spéciale."], ["Autorisation d'opération", "la permission de l'autorité de l'aviation pour un type d'opération précis."]],
          slides: [
            { title: "Reconnaissance sur carte", bullets: ["Carte et vue satellite", "Pistes, routes, villes, lignes électriques, pylônes", "Zones protégées et sensibles"] },
            { title: "Espace aérien et autorisations", bullets: ["Zones réglementées et distances des aérodromes", "Autorisation d'opération spécifique nécessaire ?", "Prévoyez le délai d'autorisation"] },
            { title: "Reconnaissance du terrain", bullets: ["Lieux de décollage, obstacles, hauteurs", "Personnes, animaux, habitations, réseau", "Abri pour l'équipe"] },
            { title: "Autorisations par écrit", bullets: ["Propriétaire ou gestionnaire", "Voisins, chefs communautaires", "Autorité de l'aviation selon les règles"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Pour une ferme que vous trouvez sur une application de cartes, faites une reconnaissance sur carte : listez toutes les pistes, routes, lignes électriques, habitations et zones protégées dans un rayon de quelques kilomètres, et notez les règles aériennes à vérifier et les autorisations nécessaires.",
          youCanNow: "reconnaître un site, vérifier les limites de l'espace aérien et obtenir chaque autorisation avant une mission.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une reconnaissance sur carte ?", options: ["Une réunion au bureau du client", "Un vol d'essai", "L'étude des cartes et des vues satellite pour repérer les dangers et les zones réglementées avant d'aller sur le site", "Le comptage de l'équipe"], answer: 2, why: "La reconnaissance sur carte vérifie les cartes, les vues satellite et les règles de l'autorité avant la visite du site." },
            { objective: "O2", q: "Vos lignes de vol vont passer au-dessus du terrain d'un voisin. Que faites-vous avant le vol ?", options: ["Obtenir l'autorisation du voisin et la noter dans le dossier de mission", "Voler haut pour qu'il ne remarque rien", "Voler seulement tôt le matin", "Demander au client de le prévenir après"], answer: 0, why: "Les autorisations des propriétaires et des voisins sont confirmées et notées avant le vol." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Évaluation des risques et plan de vol",
          minutes: 6,
          goal: "Rédiger une évaluation des risques et un plan de vol complet avec des mesures d'urgence.",
          text: [
            "Une évaluation des risques liste ce qui pourrait mal tourner, avec quelle probabilité et quelle gravité, et ce que vous ferez pour réduire le risque. Par exemple : danger, une ligne électrique le long de la limite nord ; risque, une collision ; mesure, tracer les lignes de vol à 30 m et régler le retour au point de départ au-dessus de la ligne. Autres dangers courants : des personnes qui entrent dans la zone, du bétail, des rapaces, des vents forts l'après-midi, la chaleur, la perte de liaison derrière des collines, et une piste d'atterrissage proche.",
            "Le plan de vol fixe : la zone découpée en vols qui tiennent chacun sur une batterie ; la hauteur et le niveau de détail d'image qu'elle donne (dans la limite légale de hauteur) ; le recouvrement ; la vitesse ; le nombre de batteries, avec des réserves ; les points de décollage et d'atterrissage ; la plage horaire (par exemple de 10 h à 14 h pour une lumière régulière) ; et les limites météo (vent maximal, pas de pluie, visibilité). Consultez la prévision de votre service météo national la veille et le matin de la mission.",
            "Les mesures d'urgence disent ce que vous ferez si les choses changent : vent au-dessus de votre limite, donc pause ; pluie, donc on range et on revient à la date de réserve ; une personne entre dans la zone, donc on attend en vol stationnaire ou on atterrit ; perte de liaison, donc le retour au point de départ est réglé ; panne de batterie, donc atterrissage au point de secours."
          ],
          steps: ["Listez les dangers ; notez probabilité et gravité ; écrivez une mesure pour chacun.", "Découpez la zone en vols d'une batterie.", "Fixez hauteur, détail, recouvrement, vitesse et batteries avec réserves.", "Fixez la plage horaire et les limites météo ; consultez la prévision.", "Écrivez les mesures d'urgence et les points d'atterrissage de secours."],
          words: [["Évaluation des risques", "un examen écrit de ce qui pourrait mal tourner et de la façon de réduire le risque."], ["Mesure de maîtrise", "une action qui réduit un risque."], ["Mesure d'urgence", "une action prévue à l'avance si quelque chose change ou tourne mal."]],
          slides: [
            { title: "Évaluation des risques", bullets: ["Danger, probabilité, gravité, mesure", "Lignes électriques, personnes, bétail, oiseaux", "Vent, chaleur, perte de liaison, pistes"] },
            { title: "Le plan de vol", bullets: ["Vols d'une batterie, réserves", "Hauteur, détail, recouvrement, vitesse", "Décollage, atterrissage, plage horaire"] },
            { title: "Météo", bullets: ["Fixez des limites : vent, pluie, visibilité", "Prévision nationale la veille et le matin même"] },
            { title: "Mesures d'urgence", bullets: ["Vent : pause. Pluie : date de réserve", "Personne dans la zone : attente ou atterrissage", "Perte de liaison : RTH réglé. Panne : atterrissage de secours"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Rédigez un tableau d'évaluation des risques avec au moins six dangers pour la mission de 40 hectares d'avocatiers, puis rédigez son plan de vol et cinq mesures d'urgence.",
          youCanNow: "rédiger une évaluation des risques et un plan de vol complet avec des mesures d'urgence.",
          quickCheck: [
            { objective: "O3", q: "Dans une évaluation des risques, qu'est-ce qu'un danger ?", options: ["Quelque chose qui peut causer du tort, comme une ligne électrique", "Le paiement du client", "Le livrable du vol", "La couleur du drone"], answer: 0, why: "Un danger est ce qui peut mal tourner ; l'évaluation des risques ajoute la probabilité, la gravité et une mesure de maîtrise." },
            { objective: "O3", q: "Votre plan fixe un vent maximal. La prévision du matin annonce un vent au-dessus toute la journée. Que faites-vous ?", options: ["Voler quand même en espérant", "Retirer la limite de vent du plan", "Voler seulement de l'autre côté de la ferme", "Utiliser la date de réserve prévue dans le plan d'urgence"], answer: 3, why: "Les mesures d'urgence disent quoi faire quand les conditions dépassent une limite, par exemple revenir à la date de réserve." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier la mission",
        questions: [
          { objective: "O1", q: "Un client demande « un vol de drone ». Votre première question doit être :", options: ["De quelle couleur voulez-vous le drone ?", "Quelle décision voulez-vous prendre avec les résultats ?", "Puis-je voler aujourd'hui ?", "Avez-vous un drone ?"], answer: 1, why: "La décision définit les données et les livrables nécessaires." },
          { objective: "O1", q: "Qu'est-ce qui a sa place dans un périmètre de mission écrit ?", options: ["La musique préférée du pilote", "Seulement le prix", "Rien ; on se met d'accord par téléphone", "La zone, les livrables, les dates, le contact, le prix et le partage des données"], answer: 3, why: "Un périmètre écrit et clair évite les litiges." },
          { objective: "O2", q: "Pendant la reconnaissance sur carte, vous trouvez une piste d'atterrissage à 3 km. Vous devez :", options: ["Vérifier les règles de distance avec les aérodromes et toute autorisation nécessaire", "L'ignorer", "Voler seulement le matin", "Voler plus haut"], answer: 0, why: "Beaucoup de règles limitent les drones près des aérodromes." },
          { objective: "O3", q: "Dans une évaluation des risques, une mesure de maîtrise est :", options: ["La radiocommande", "Une action qui réduit un risque", "Une plainte du client", "Une batterie"], answer: 1, why: "Les mesures réduisent la probabilité ou la gravité." },
          { objective: "O3", q: "La prévision annonce des vents forts l'après-midi. Un plan raisonnable est de :", options: ["Voler l'après-midi quand même", "Annuler la mission pour toujours", "Placer la plage horaire aux heures plus calmes et garder une date de réserve", "Retirer les hélices"], answer: 2, why: "Planifiez en fonction des limites météo, avec une date de réserve." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Exécuter la mission",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les rôles de l'équipe et le briefing",
          minutes: 5,
          goal: "Attribuer les rôles de l'équipe et animer un briefing clair avant la mission.",
          text: [
            "Même les petites missions se passent mieux avec des rôles clairs. Le télépilote commandant de bord est responsable de la sécurité du vol et a le dernier mot. L'observateur surveille le drone et le ciel et signale les aéronefs, les oiseaux, les personnes et les animaux. Un opérateur au sol ou de charge utile peut gérer les batteries, la caméra, l'aire d'atterrissage et le client.",
            "Avant le premier vol, le commandant de bord fait le briefing pour tout le monde, y compris le contact de la ferme : la zone et les lignes de vol, la hauteur, la durée de chaque batterie, les points de décollage et d'atterrissage, les dangers et mesures de l'évaluation des risques, les limites météo, les mesures d'urgence, les mots que vous utiliserez (par exemple « attente », « atterris maintenant »), et qui peut ordonner l'arrêt. Tout le monde peut ordonner l'arrêt pour la sécurité.",
            "Vérifiez que chaque membre de l'équipe a de l'eau, une protection solaire et un équipement de sécurité comme un gilet haute visibilité, et que l'aire de décollage est balisée et tenue à l'écart des curieux."
          ],
          steps: ["Attribuez les rôles : commandant de bord, observateur et opérateur au sol ou de charge utile.", "Briefing : zone, hauteur, batteries, décollage et atterrissage, dangers, limites météo.", "Convenez des mesures d'urgence et des annonces standard (attente, atterris maintenant).", "Confirmez que tout le monde peut ordonner l'arrêt.", "Balisez l'aire de décollage ; vérifiez eau, protection solaire et gilets."],
          words: [["Commandant de bord", "le télépilote responsable de la sécurité du vol, qui a le dernier mot."], ["Annonces standard", "des mots courts convenus que l'équipe utilise pour que tous comprennent tout de suite."]],
          slides: [
            { title: "Rôles de l'équipe", bullets: ["Commandant de bord : dernier mot sur la sécurité", "Observateur : drone, ciel, personnes, animaux", "Opérateur au sol : batteries, caméra, client"] },
            { title: "Le briefing", bullets: ["Zone, hauteur, batteries, décollage, atterrissage", "Dangers, limites météo, mesures d'urgence", "Annonces standard : attente, atterris maintenant"] },
            { title: "Prenez soin de l'équipe", bullets: ["Tout le monde peut ordonner l'arrêt", "Eau, protection solaire, gilets", "Aire de décollage balisée, curieux à l'écart"] }
          ],
          tryIt: "Rédigez un texte de briefing d'une page pour la mission des avocatiers, qu'un commandant de bord pourrait lire en trois minutes, et qui couvre chaque point de cette leçon.",
          youCanNow: "attribuer les rôles de l'équipe et animer un briefing clair avant la mission.",
          quickCheck: [
            { objective: "O4", q: "Que fait l'observateur ?", options: ["Il paie l'équipe", "Il surveille le drone, le ciel et le sol et prévient le pilote", "Il rédige le rapport du client", "Il facture le client"], answer: 1, why: "L'observateur guette les aéronefs, les oiseaux, les personnes et les animaux et prévient le pilote." },
            { objective: "O4", q: "Le contact de la ferme se tiendra près de la zone de décollage. Que faites-vous pendant le briefing ?", options: ["Le laisser en dehors du briefing", "Lui dire de se taire", "L'inclure, lui expliquer les dangers et les annonces standard, et lui dire que tout le monde peut ordonner l'arrêt", "Lui demander de piloter le drone"], answer: 2, why: "Le briefing inclut toutes les personnes sur le site, y compris le contact de la ferme, et tout le monde peut ordonner l'arrêt pour la sécurité." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Exécuter et surveiller la mission",
          minutes: 5,
          goal: "Exécuter une mission planifiée, la surveiller et décider de voler ou non.",
          text: [
            "Avant chaque vol, suivez la liste de vérification avant vol et confirmez que les conditions sont dans les limites. Chargez ou vérifiez l'itinéraire prévu, confirmez le point de départ et la hauteur de retour au point de départ, et confirmez que l'observateur est en place.",
            "Pendant le vol, le pilote surveille le drone et la télémétrie (batterie, signal, satellites, alertes de vent, hauteur, progression sur les lignes). L'observateur surveille le ciel et le sol. Soyez prêt à reprendre le contrôle manuel à tout moment. Changez les batteries entre les vols selon votre procédure batteries, et notez les lignes terminées.",
            "Décidez de voler ou non toute la journée. Si le vent dépasse votre limite, si une personne entre dans la zone, si un orage se forme ou si une alerte se répète, faites une pause ou atterrissez. Finir demain vaut mieux qu'un accident aujourd'hui. Tenez le client informé de l'avancement et des changements."
          ],
          steps: ["Liste de vérification avant vol ; conditions dans les limites ?", "Vérifiez l'itinéraire, le point de départ et la hauteur de retour.", "Volez ; le pilote surveille drone et télémétrie, l'observateur le ciel et le sol.", "Changez les batteries en sécurité ; notez les lignes terminées.", "Pause ou atterrissage si les limites sont dépassées ; prévenez le client."],
          words: [["Télémétrie", "les données en direct que le drone envoie à la radiocommande : batterie, hauteur, position, signal, alertes."], ["Décision de vol (go / no-go)", "la décision de savoir s'il est sûr de voler ou de continuer."]],
          slides: [
            { title: "Avant chaque vol", bullets: ["Liste de vérification et limites", "Itinéraire, point de départ, hauteur RTH", "Observateur en place"] },
            { title: "Pendant le vol", bullets: ["Pilote : drone et télémétrie", "Observateur : ciel et sol", "Prêt pour le contrôle manuel"] },
            { title: "Voler ou non, toute la journée", bullets: ["Vent, personnes, orages, alertes répétées", "Pause ou atterrissage", "Mieux vaut demain qu'un accident"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Rédigez une fiche de décision de vol pour votre mission : cinq conditions qui veulent dire « on vole » et cinq qui veulent dire « on arrête ou on atterrit », en mots courts qu'une équipe peut lire sur le terrain.",
          youCanNow: "exécuter et surveiller une mission planifiée et prendre de bonnes décisions de voler ou non.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que la télémétrie ?", options: ["Le contrat du client", "La prévision météo", "Les données de vol en direct, comme la batterie, la hauteur, le signal et les alertes", "La liste de l'équipe"], answer: 2, why: "La télémétrie est l'ensemble des données en direct que le pilote surveille pendant le vol." },
            { objective: "O5", q: "Un orage se prépare et la moitié des lignes sont faites. Que faites-vous ?", options: ["Atterrir, et finir le reste plus tard", "Voler plus vite pour finir", "Désactiver les alertes", "Laisser l'observateur piloter pendant que vous rangez"], answer: 0, why: "Finir demain vaut mieux qu'un accident aujourd'hui ; faites une pause ou atterrissez quand les conditions deviennent dangereuses." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Clôturer la mission : données, registres et incidents",
          minutes: 5,
          goal: "Vérifier les données, remplir les registres et gérer les rapports d'incident avant de quitter le site.",
          text: [
            "Avant de quitter le site, vérifiez les données : comptez les images de chaque vol, regardez un échantillon pour le flou et l'exposition, cherchez les trous de couverture, et si possible faites un assemblage rapide en basse résolution sur un ordinateur portable. Refaites le vol sur les trous tant que l'équipe et les conditions sont là. Sauvegardez les données sur un deuxième appareil.",
            "Remplissez les registres : carnet de vol pour chaque vol (heure, batterie, pilote, problèmes), notes sur les batteries et la maintenance, et conditions réelles dans le dossier de mission. Remerciez le contact de la ferme et confirmez quand il recevra les livrables.",
            "Si quelque chose a mal tourné (accident, quasi-collision avec un aéronef, blessure, dommage aux biens, perte de contrôle du drone), sécurisez d'abord la zone, puis notez ce qui s'est passé et signalez-le à votre autorité de l'aviation comme ses règles l'exigent, et à votre assureur. Revoyez l'incident avec l'équipe et mettez à jour vos procédures pour qu'il ne se reproduise pas."
          ],
          steps: ["Comptez les images, vérifiez le flou sur un échantillon, cherchez les trous de couverture.", "Refaites les trous ; sauvegardez les données sur un deuxième appareil.", "Remplissez les registres de vol, de batteries et de maintenance.", "Confirmez la date de livraison avec le client.", "En cas d'incident : sécuriser, noter, signaler selon les règles, revoir et mettre à jour les procédures."],
          words: [["Quasi-accident", "un événement où un accident a failli se produire."], ["Trou de couverture", "une zone où les images manquent ou sont mauvaises."]],
          slides: [
            { title: "Vérifiez les données sur place", bullets: ["Comptez les images, vérifiez le flou", "Cherchez les trous ; assemblage rapide", "Refaites les trous, sauvegardez sur un 2e appareil"] },
            { title: "Remplissez les registres", bullets: ["Registres de vol, batteries et maintenance", "Conditions réelles dans le dossier de mission", "Confirmez la date de livraison"] },
            { title: "Si quelque chose a mal tourné", bullets: ["Sécurisez la zone", "Notez et signalez selon les règles ; prévenez l'assureur", "Revoyez et mettez à jour les procédures"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Exercice final : rassemblez votre dossier de mission complet : périmètre, reconnaissance du site et croquis, vérifications de l'espace aérien et des autorisations avec les sources, évaluation des risques, plan de vol, rôles de l'équipe et briefing, mesures d'urgence, fiche de décision de vol, et liste de vérification et modèle de registre d'après vol.",
          youCanNow: "clôturer une mission de façon professionnelle avec la vérification des données, des registres complets et une bonne gestion des incidents.",
          quickCheck: [
            { objective: "O6", q: "À quoi sert un assemblage rapide en basse résolution ?", options: ["À faire le rapport final", "À charger les batteries", "À envoyer la facture", "À repérer les trous de couverture avant de quitter le site"], answer: 3, why: "Un assemblage rapide montre les trous pendant que l'équipe et les conditions sont encore là pour revoler." },
            { objective: "O6", q: "Votre drone a heurté un piquet de clôture et cassé une hélice. Que faites-vous d'abord ?", options: ["Le signaler le mois prochain", "Sécuriser la zone, puis noter l'incident et le signaler comme l'exigent les règles", "Cacher les dégâts au client", "Faire la mission suivante avec la même hélice"], answer: 1, why: "Sécurisez d'abord la zone, puis notez l'incident et signalez-le à l'autorité et à l'assureur comme exigé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Exécuter la mission",
        questions: [
          { objective: "O4", q: "Qui a le dernier mot sur la sécurité d'un vol ?", options: ["Le client", "L'observateur", "Le commandant de bord", "Le fabricant du drone"], answer: 2, why: "Le commandant de bord est responsable de la sécurité du vol." },
          { objective: "O4", q: "Qui peut ordonner l'arrêt pour la sécurité pendant une mission ?", options: ["Tout membre de l'équipe", "Seulement le client", "Seulement l'observateur", "Personne une fois le drone en vol"], answer: 0, why: "Quiconque voit un danger peut ordonner l'arrêt." },
          { objective: "O5", q: "La télémétrie montre que le vent dépasse maintenant votre limite. Vous devez :", options: ["Voler plus vite pour finir", "Couper les alertes", "Monter plus haut", "Faire une pause ou atterrir"], answer: 3, why: "Dépasser les limites veut dire arrêter ; finissez plus tard." },
          { objective: "O6", q: "Avant de quitter le site, vous devez :", options: ["Supprimer des photos pour libérer de l'espace", "Vérifier le flou et les trous dans les images, et refaire les trous", "Partir sans prévenir le client", "Formater la carte mémoire"], answer: 1, why: "Réparer les trous sur place évite un second déplacement." },
          { objective: "O6", q: "Votre drone a frôlé un petit avion. Après avoir sécurisé la situation, vous devez :", options: ["Le noter et le signaler comme votre autorité l'exige", "Le garder secret", "Partir vite", "Accuser l'avion"], answer: 0, why: "Le signalement aide la sécurité et est souvent exigé par les règles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones agricoles : planification des missions et opérations de vol",
    questions: [
      { objective: "O1", q: "Un périmètre de mission est :", options: ["La caméra du drone", "L'accord écrit sur ce qu'une mission couvre et livre", "Un bulletin météo", "Un carnet de vol"], answer: 1, why: "Il fixe la zone, les livrables, les dates, le prix et les limites." },
      { objective: "O1", q: "Lequel est un livrable ?", options: ["La licence du pilote", "Une batterie", "Une carte NDVI et un rapport d'une page", "Une hélice"], answer: 2, why: "Les livrables sont ce que reçoit le client." },
      { objective: "O1", q: "Pourquoi indiquer les limites d'une carte de drone dans le périmètre ?", options: ["Pour éviter les déceptions et les litiges", "Pour facturer plus", "Pour embrouiller le client", "Ce n'est pas nécessaire"], answer: 0, why: "Des limites claires créent des attentes honnêtes." },
      { objective: "O2", q: "Une reconnaissance sur carte utilise :", options: ["Seulement une pelle", "Le drone en vol", "Un tracteur", "Des cartes et des vues satellite avant d'aller sur le site"], answer: 3, why: "Elle repère tôt les dangers et les questions d'espace aérien." },
      { objective: "O2", q: "Que devez-vous confirmer par écrit avant de survoler la ferme d'un client ?", options: ["La pointure du pilote", "L'autorisation du propriétaire ou du gestionnaire", "Le prix de la culture", "Rien"], answer: 1, why: "Une autorisation écrite protège tout le monde." },
      { objective: "O2", q: "Pourquoi vérifier la couverture du réseau mobile lors de la reconnaissance du terrain ?", options: ["Pour la musique", "Pour les réseaux sociaux", "Les applications, les cartes et la communication peuvent en avoir besoin", "Ce n'est pas utile"], answer: 2, why: "Sans réseau, les cartes, la coordination et les urgences peuvent être touchées." },
      { objective: "O3", q: "Une évaluation des risques liste :", options: ["Les dangers, la probabilité, la gravité et les mesures", "Seulement les coûts", "Les noms des clients", "Les variétés cultivées"], answer: 0, why: "Elle montre ce qui pourrait mal tourner et comment le réduire." },
      { objective: "O3", q: "Une ligne électrique longe le bord du champ. Une bonne mesure est de :", options: ["Voler plus près pour de meilleures photos", "L'ignorer", "Voler de nuit", "Garder les lignes de vol bien à l'écart et régler la hauteur RTH au-dessus"], answer: 3, why: "La distance et une hauteur de retour sûre réduisent le risque de collision." },
      { objective: "O3", q: "Pourquoi découper une grande zone en vols d'une batterie ?", options: ["Pour utiliser moins d'images", "Pour que chaque vol se termine en sécurité avec une batterie", "Pour embrouiller le logiciel", "Parce que le recouvrement l'exige"], answer: 1, why: "Planifier par batterie évite les urgences de batterie faible." },
      { objective: "O3", q: "Où obtenir la prévision météo ?", options: ["Au hasard", "Auprès d'un ami", "Auprès de votre service météo national, la veille et le matin même", "Dans l'agenda de l'an dernier"], answer: 2, why: "Les prévisions officielles sont les plus fiables." },
      { objective: "O3", q: "Une mesure d'urgence est :", options: ["Une action prévue à l'avance si quelque chose change ou tourne mal", "Un réglage de caméra", "Un paiement", "Une pièce de drone"], answer: 0, why: "Les mesures d'urgence permettent à l'équipe d'agir vite et en sécurité." },
      { objective: "O4", q: "Le rôle principal de l'observateur est de :", options: ["Traiter les données", "Payer l'équipe", "Piloter le drone", "Surveiller le drone, le ciel et le sol et prévenir le pilote"], answer: 3, why: "L'observateur guette les dangers." },
      { objective: "O4", q: "Les annonces standard comme « attente » et « atterris maintenant » aident parce que :", options: ["Elles font professionnel", "Tout le monde les comprend tout de suite", "Le drone les exige", "Elles économisent la batterie"], answer: 1, why: "Des mots courts et convenus réduisent la confusion dans l'urgence." },
      { objective: "O5", q: "La télémétrie comprend :", options: ["Les prix des cultures", "Les noms des agriculteurs", "La batterie, la hauteur, la position, le signal et les alertes", "La météo du mois prochain"], answer: 2, why: "La télémétrie, ce sont les données de vol en direct." },
      { objective: "O5", q: "Une personne entre dans la zone de vol. L'équipe doit :", options: ["Mettre le drone en attente ou le faire atterrir", "Voler plus bas au-dessus d'elle", "Continuer les lignes", "Lui demander de courir"], answer: 0, why: "Des personnes dans la zone augmentent le risque ; pause ou atterrissage." },
      { objective: "O5", q: "« Mieux vaut finir demain qu'un accident aujourd'hui » veut dire :", options: ["Toujours voler tard", "Ne jamais finir les missions", "Facturer les retards", "Arrêter quand les conditions ne sont pas sûres, même si la mission n'est pas finie"], answer: 3, why: "La sécurité passe avant le calendrier." },
      { objective: "O6", q: "Pourquoi sauvegarder les données sur un deuxième appareil avant de partir ?", options: ["Pour remplir la mémoire", "Pour que les données survivent si un appareil tombe en panne ou est perdu", "Parce que le drone l'exige", "Pour les partager avec des inconnus"], answer: 1, why: "Une deuxième copie protège les données du client et votre travail." },
      { objective: "O6", q: "Les carnets de vol après une mission notent :", options: ["Seulement le nom du client", "Seulement le prix", "L'heure, la batterie, le pilote et les problèmes de chaque vol", "Rien"], answer: 2, why: "Les registres soutiennent la sécurité, la maintenance et la conformité." },
      { objective: "O6", q: "Après un incident, la première priorité est de :", options: ["Sécuriser la zone", "Publier des photos en ligne", "Partir vite", "Supprimer les registres"], answer: 0, why: "Les personnes et les biens passent d'abord." },
      { objective: "O6", q: "Pourquoi revoir un incident avec l'équipe ?", options: ["Pour accuser quelqu'un", "Pour passer le temps", "Ce n'est pas utile", "Pour mettre à jour les procédures afin qu'il ne se reproduise pas"], answer: 3, why: "Apprendre des incidents améliore la sécurité." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      4,
      6,
      10,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du dossier et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Périmètre de mission",
        objective: "O1",
        notYet: "La décision du client, la zone ou les livrables manquent.",
        meets: "La décision, la zone, les livrables, le niveau de détail, les dates, le contact, le prix et le partage des données sont écrits, avec ce que le drone ne peut pas faire.",
        exceeds: "Signé ou confirmé par écrit par le client."
      },
      {
        name: "Reconnaissance du site et autorisations",
        objective: "O2",
        notYet: "Pas de reconnaissance, ou les autorisations et les vérifications de l'espace aérien manquent.",
        meets: "Reconnaissance sur carte et sur le terrain avec un croquis des dangers, vérifications de l'espace aérien avec leurs sources, et autorisations écrites.",
        exceeds: "Inclut la couverture réseau, un abri pour l'équipe et la date de chaque vérification."
      },
      {
        name: "Évaluation des risques",
        objective: "O3",
        notYet: "Les dangers sont listés sans mesures de maîtrise.",
        meets: "Un tableau avec le danger, la probabilité, la gravité et la mesure de maîtrise pour chaque danger principal.",
        exceeds: "Couvre la chaleur, le vent, les curieux, la perte de liaison et toute piste d'atterrissage proche."
      },
      {
        name: "Plan de vol et mesures d'urgence",
        objective: "O3",
        notYet: "La hauteur, le recouvrement, les batteries ou les limites météo manquent.",
        meets: "Zone découpée en vols, hauteur, niveau de détail des images, recouvrement, vitesse, batteries avec des réserves, horaires, limites météo et mesures d'urgence.",
        exceeds: "Montre le calcul du nombre de batteries et une date de réserve."
      },
      {
        name: "Équipe et briefing",
        objective: "O4",
        notYet: "Pas de rôles ni de notes de briefing.",
        meets: "Des rôles nommés et des notes de briefing avec les dangers, les limites, les mesures d'urgence et les annonces standard.",
        exceeds: "Inclut l'équipement de sécurité, l'eau et la façon de tenir les curieux à distance."
      },
      {
        name: "Clôture de la mission",
        objective: "O6",
        notYet: "Pas de liste après le vol ni de registre.",
        meets: "Une liste après le vol avec les vérifications de données, les sauvegardes, les registres de vol et les étapes de rapport d'incident.",
        exceeds: "Indique comment les leçons des incidents mettent à jour les procédures."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le dossier de mission",
      "Les apprenants qui déclarent utiliser un dossier de mission écrit pour une vraie mission client dans les 60 jours (enquête de suivi)",
      "Les entreprises de drones qui déclarent moins de vols à refaire, de litiges ou d'incidents après la formation",
      "Les apprenants qui suivent un autre cours de drones ou obtiennent un client qui revient"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur portable avec une application de cartes et la vue satellite",
      "Des modèles ou un cahier pour le périmètre, l'évaluation des risques, le plan de vol et les registres",
      "Un drone et son application de planification, si possible, pour une mission d'entraînement",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour constituer le dossier de mission"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis construisez un dossier de mission d'exemple en groupe avant que les apprenants construisent le leur.",
      "Organisez un jeu de rôle de briefing avec un pilote, un observateur et un contact de la ferme, et entraînez-vous aux annonces standard.",
      "Tout vol d'entraînement doit suivre les règles des drones du pays, avec des pilotes titulaires d'une licence et les autorisations en place.",
      "Utilisez les missions d'exemple du cours si les apprenants n'ont pas encore de client.",
      "Évaluez le dossier de mission avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
