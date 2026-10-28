"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-piloting.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Stick terms keep the English names (throttle, yaw, pitch, roll) in brackets, since drone apps often show them in English.

const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA : organismes de formation aux systèmes d'aéronefs sans pilote (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "Système en ligne de la KCAA pour les drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-fr",
  lang: "fr",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drones pour la surveillance agricole 6 : cours de pilotage de drone en ligne",
  skills: "Utiliser les manches de commande, S'exercer aux figures de vol sur simulateur, Choisir et changer de mode de vol, Gérer les urgences (perte de liaison, batterie faible, perte du GPS), Tenir un carnet de vol de pilote, Planifier votre parcours vers une licence de télépilote",
  outcome: "faire voler avec souplesse une série de figures standard dans un simulateur de drone, gérer calmement les principales urgences, tenir un vrai carnet de vol, et suivre un plan personnel clair pour obtenir une licence de télépilote auprès de l'autorité de l'aviation de votre pays.",
  about: [
    "Voici le dernier cours du parcours de surveillance par drone, pour toute personne au Kenya, au Nigeria ou ailleurs en Afrique qui veut devenir un pilote de drone agricole compétent et titulaire d'une licence. Il est conçu pour être suivi en ligne : la plupart des exercices se font dans un simulateur de drone gratuit ou peu cher, sur ordinateur ou téléphone, pour que vous puissiez faire des erreurs sans écraser un vrai drone ni enfreindre une règle.",
    "Le chapitre 1 enseigne les commandes, une série de figures d'entraînement et les modes de vol que votre drone peut avoir. Le chapitre 2 enseigne les procédures d'urgence, la tenue d'un carnet de vol et les étapes vers une licence de télépilote.",
    "Important : ce cours ne vous donne pas de licence et ne vous autorise pas à voler. Au Kenya et au Nigeria, comme dans la plupart des pays, la licence de télépilote est délivrée par l'autorité de l'aviation civile après une formation dans un organisme agréé et la réussite de ses examens. Ne faites jamais voler un vrai drone sans l'immatriculation, la licence et les autorisations exigées par votre pays."
  ],
  finalTask: "Dans un simulateur de drone, réussissez les cinq figures de ce cours (vol stationnaire, carré, huit, orbite et grille en « tondeuse ») jusqu'à pouvoir faire chacune avec souplesse trois fois de suite, entraînez-vous aux trois exercices d'urgence, notez chaque séance dans un carnet de vol, et rédigez un plan personnel d'une page pour la licence : l'autorité de votre pays, les organismes de formation agréés que vous avez trouvés, la licence dont vous avez besoin, les étapes, les documents, le coût estimé selon les sources officielles, et vos dates cibles.",
  chapters: [
    {
      name: "Chapitre 1 : Apprendre à piloter",
      lessons: [
        {
          title: "Les commandes : manches, boutons et écran",
          minutes: 5,
          goal: "Dire ce que fait chaque mouvement de manche et lire les principaux éléments de l'écran de vol.",
          text: [
            "La plupart des radiocommandes de drone ont deux manches. En mode 2, le réglage le plus courant, le manche gauche commande la hauteur (gaz, throttle : vers le haut pour monter, vers le bas pour descendre) et la rotation sur place (lacet, yaw : à gauche et à droite). Le manche droit fait avancer et reculer le drone (tangage, pitch) et le déplace sur le côté (roulis, roll). Certains pilotes utilisent d'autres modes ; vérifiez le vôtre dans les réglages de l'application.",
            "Des mouvements de manche petits et doux donnent un vol souple. Les débutants poussent trop loin et trop vite. Entraînez-vous à bouger les manches doucement, puis à les laisser revenir au centre, où la plupart des drones gardent leur position.",
            "L'écran de vol montre le niveau de batterie, la force du signal, les satellites GPS, la hauteur, la distance au point de départ et la vue de la caméra. Apprenez à y jeter un coup d'œil, puis à regarder de nouveau le drone. Sachez où se trouvent les boutons de retour au point de départ et de pause ou de freinage sans regarder."
          ],
          words: [["Gaz (throttle)", "le mouvement vers le haut et vers le bas (monter ou descendre)."], ["Lacet (yaw)", "faire tourner le drone à gauche ou à droite sur place."], ["Tangage (pitch)", "avancer ou reculer."], ["Roulis (roll)", "se déplacer sur le côté, à gauche ou à droite."], ["Mode 2", "le réglage de manches le plus courant : manche gauche pour les gaz et le lacet, manche droit pour le tangage et le roulis."]],
          slides: [
            { title: "Les manches en mode 2", bullets: ["Manche gauche : monter/descendre (gaz), tourner (lacet)", "Manche droit : avancer/reculer (tangage), côté (roulis)", "Vérifiez votre mode dans l'application"] },
            { title: "Des mains douces", bullets: ["Mouvements petits et souples", "Laissez les manches revenir au centre", "La plupart des drones gardent alors leur position"] },
            { title: "L'écran de vol", bullets: ["Batterie, signal, satellites GPS", "Hauteur, distance au départ, vue caméra", "Un coup d'œil, puis regardez le drone"] },
            { title: "Connaître vos boutons", bullets: ["Retour au point de départ", "Pause ou freinage", "Trouvez-les sans regarder"] }
          ],
          tryIt: "Installez un simulateur de drone sur un ordinateur ou un téléphone (cherchez un simulateur de vol de drone dans votre magasin d'applications ou sur votre ordinateur ; certains fabricants en proposent un dans leur application). Trouvez le réglage du mode des manches, choisissez le mode 2, et bougez doucement chaque manche pour voir ce qu'il fait.",
          youCanNow: "dire ce que fait chaque manche en mode 2, lire l'écran de vol et trouver les boutons d'urgence."
        },
        {
          title: "Les figures d'entraînement sur simulateur",
          minutes: 6,
          goal: "Réussir avec souplesse cinq figures standard dans un simulateur.",
          text: [
            "Les bons pilotes progressent avec les mêmes figures, répétées de nombreuses fois. Entraînez-vous à chaque figure jusqu'à la réussir avec souplesse trois fois de suite, puis passez à la suivante. De courtes séances quotidiennes de 15 à 20 minutes marchent mieux qu'une longue séance par semaine.",
            "Figure 1, vol stationnaire : décollez à hauteur des yeux et gardez le drone immobile pendant une minute. Figure 2, carré : volez en carré avec le nez toujours vers l'avant, puis encore avec le nez qui tourne à chaque coin. Figure 3, huit : faites un huit bien régulier. Figure 4, orbite : tournez autour d'un point (comme un arbre) en gardant la caméra pointée dessus. Figure 5, tondeuse : volez à la main en lignes droites parallèles au-dessus d'un champ, comme un vol de cartographie.",
            "Entraînez-vous aussi avec le drone tourné vers vous (nez vers soi), quand la gauche et la droite semblent inversées. C'est là que la plupart des débutants s'écrasent. Après chaque séance, notez ce qui s'est bien passé et ce qu'il faut améliorer."
          ],
          steps: ["Vol stationnaire à hauteur des yeux pendant une minute.", "Carré : nez vers l'avant, puis nez qui tourne aux coins.", "Huit, souple et à niveau.", "Orbite autour d'un arbre, caméra pointée dessus.", "Lignes en tondeuse au-dessus d'un champ.", "Refaites chaque figure nez vers soi."],
          words: [["Figure", "un court exercice répété pour acquérir une compétence."], ["Nez vers soi", "voler avec l'avant du drone tourné vers vous, ce qui donne l'impression que les commandes sont inversées."], ["Orbite", "voler en cercle autour d'un point."]],
          slides: [
            { title: "Comment s'entraîner", bullets: ["Les mêmes figures, de nombreuses fois", "Trois passages souples de suite, puis la suite", "15-20 minutes par jour valent mieux qu'une longue séance"] },
            { title: "Cinq figures", bullets: ["1 Stationnaire  2 Carré  3 Huit", "4 Orbite autour d'un arbre  5 Lignes en tondeuse"] },
            { title: "La difficile : nez vers soi", bullets: ["Gauche et droite semblent inversées", "Là où la plupart des débutants s'écrasent", "Refaites chaque figure nez vers soi"] }
          ],
          tryIt: "Dans votre simulateur, faites aujourd'hui les figures 1 et 2. Notez dans un carnet : date, minutes, figures faites, nombre de passages souples, une chose à améliorer.",
          youCanNow: "vous entraîner à cinq figures standard dans un simulateur et suivre vos progrès."
        },
        {
          title: "Les modes de vol et quand les utiliser",
          minutes: 5,
          goal: "Expliquer les principaux modes de vol et changer de mode en sécurité quand le GPS est faible.",
          text: [
            "La plupart des drones à caméra volent en mode positionnement ou GPS. Le drone utilise les satellites et ses capteurs pour garder sa place quand vous lâchez les manches, ce qui facilite le pilotage et permet le retour au point de départ et la cartographie automatique.",
            "Certains drones ont aussi un mode d'assiette (certaines marques l'appellent ATTI). Le drone garde sa hauteur mais pas sa place : il dérive avec le vent comme une barque sur une rivière. Un drone peut passer seul dans ce mode quand le GPS est faible, par exemple près de grandes structures métalliques, sous des arbres épais ou dans une vallée profonde. Les pilotes qui s'y sont entraînés restent calmes ; ceux qui ne l'ont pas fait s'écrasent souvent.",
            "Les autres modes comprennent le mode sport (plus rapide, moins de protections), le mode trépied ou ciné (lent et souple pour filmer) et les missions automatiques. Beaucoup de simulateurs permettent de voler sans l'aide du GPS. Entraînez-vous-y pour que la dérive ne vous surprenne pas."
          ],
          words: [["Mode GPS", "un mode de vol où le drone utilise les satellites pour garder sa place."], ["Mode d'assiette (ATTI)", "un mode où le drone garde sa hauteur mais dérive avec le vent."], ["Dérive", "le drone qui s'éloigne tout seul, en général avec le vent."]],
          slides: [
            { title: "Mode GPS / positionnement", bullets: ["Garde sa place quand vous lâchez", "Permet le retour au départ et la cartographie", "Mode normal pour le travail agricole"] },
            { title: "Mode d'assiette (ATTI)", bullets: ["Garde la hauteur, pas la place", "Dérive avec le vent", "Peut s'activer seul quand le GPS est faible"] },
            { title: "Autres modes", bullets: ["Sport : rapide, moins de protections", "Trépied / ciné : lent et souple", "Entraînez-vous sans l'aide du GPS"] }
          ],
          tryIt: "Dans votre simulateur, coupez l'aide GPS ou choisissez le mode d'assiette, ajoutez du vent, et tenez un vol stationnaire pendant 30 secondes en corrigeant la dérive. Puis faites la figure du carré dans ce mode.",
          youCanNow: "expliquer les principaux modes de vol et garder le contrôle quand le drone dérive sans GPS."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Apprendre à piloter",
        questions: [
          { q: "En mode 2, que fait le manche gauche poussé vers le haut ?", options: ["Il fait avancer", "Il fait tourner à droite", "Il fait monter", "Il déplace sur le côté"], answer: 2, why: "En mode 2, le manche gauche commande les gaz (la hauteur) et le lacet." },
          { q: "Qu'est-ce que le lacet ?", options: ["Faire tourner le drone à gauche ou à droite sur place", "Monter", "Atterrir", "Prendre une photo"], answer: 0, why: "Le lacet fait pivoter le drone autour de son centre." },
          { q: "Quel plan d'entraînement fait le mieux progresser ?", options: ["Une séance de trois heures par mois", "De courtes séances quotidiennes avec les mêmes figures", "Seulement regarder des vidéos", "Faire voler un vrai drone sans formation"], answer: 1, why: "Une répétition courte et régulière donne un contrôle souple." },
          { q: "Pourquoi s'entraîner à voler nez vers soi ?", options: ["C'est plus rapide", "Cela économise la batterie", "Les simulateurs l'exigent", "Les commandes semblent inversées et beaucoup de débutants s'écrasent là"], answer: 3, why: "S'y entraîner rend cette sensation d'inversion familière." },
          { q: "En mode d'assiette (ATTI), le drone :", options: ["Garde sa hauteur mais dérive avec le vent", "Atterrit automatiquement", "Garde parfaitement sa place", "Ne peut pas bouger"], answer: 0, why: "Sans positionnement GPS, il garde sa hauteur mais pas sa place." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Devenir pilote titulaire d'une licence",
      lessons: [
        {
          title: "Exercices d'urgence : perte de liaison, batterie faible, perte du GPS",
          minutes: 6,
          goal: "Suivre les bonnes étapes dans trois urgences courantes.",
          text: [
            "Les urgences sont rares mais rapides. Les pilotes les gèrent bien parce qu'ils ont répété les étapes jusqu'à ce qu'elles deviennent automatiques. Avant chaque vrai vol, vérifiez que la hauteur de retour au point de départ et l'action en cas de perte de signal sont bien réglées.",
            "Perte de liaison (la radiocommande perd le signal) : restez calme, orientez les antennes de la radiocommande vers le drone, montez sur un point plus haut si c'est sûr. La plupart des drones lancent le retour au point de départ après quelques secondes ; surveillez le ciel et soyez prêt à reprendre la main quand la liaison revient. Batterie faible : arrêtez la tâche et rentrez directement, ou atterrissez à l'endroit sûr le plus proche ; n'essayez jamais de finir une dernière ligne.",
            "Perte du GPS ou dérive soudaine : passez mentalement en pilotage d'assiette, gardez le drone en vue, ramenez-le doucement vers vous contre le vent, et atterrissez dès que c'est sûr. Après toute urgence ou tout accident, sécurisez la zone, cherchez les dégâts, notez-le dans votre carnet de vol, et signalez-le à l'autorité si vos règles l'exigent."
          ],
          steps: ["Perte de liaison : restez calme, orientez les antennes, montez plus haut si c'est sûr, guettez le retour au départ.", "Batterie faible : arrêtez la tâche, rentrez ou atterrissez à l'endroit sûr le plus proche.", "Perte du GPS : pilotez doucement à la main, contre le vent, atterrissez vite.", "Après tout incident : sécurisez, cherchez les dégâts, notez-le, signalez-le si c'est exigé."],
          words: [["Perte de liaison", "quand le drone et la radiocommande perdent leur connexion radio."], ["Fuite du drone (fly-away)", "quand un drone s'en va hors du contrôle du pilote."], ["Incident", "un événement imprévu qui a causé, ou aurait pu causer, un dommage."]],
          slides: [
            { title: "Répétez jusqu'à l'automatisme", bullets: ["Les urgences sont rares mais rapides", "Vérifiez d'abord la hauteur RTH et l'action perte de signal"] },
            { title: "Perte de liaison", bullets: ["Restez calme, orientez les antennes", "Montez plus haut si c'est sûr", "Guettez le retour au point de départ"] },
            { title: "Batterie faible et perte du GPS", bullets: ["Batterie faible : arrêtez, rentrez ou atterrissez", "Perte du GPS : à la main, contre le vent, atterrissez vite"] },
            { title: "Après tout incident", bullets: ["Sécurisez la zone", "Cherchez les dégâts, notez-le", "Signalez-le si vos règles l'exigent"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Dans votre simulateur, entraînez-vous à chaque urgence : réglez une alerte de batterie faible et rentrez, coupez le GPS en plein vol et atterrissez à la main, et (si le simulateur le permet) déclenchez une perte de signal et observez le retour au point de départ. Ensuite, écrivez les étapes de mémoire.",
          youCanNow: "suivre les bonnes étapes en cas de perte de liaison, de batterie faible et de perte du GPS."
        },
        {
          title: "Tenir un carnet de vol de pilote",
          minutes: 4,
          goal: "Noter chaque vol, sur simulateur ou réel, dans un carnet de vol.",
          text: [
            "Le carnet de vol est votre historique de pilote. Les organismes de formation et les autorités de l'aviation utilisent les carnets de vol pour vérifier l'expérience, et les employeurs et clients font confiance aux pilotes qui en tiennent un. Gardez le temps sur simulateur et le temps de vol réel dans des colonnes séparées.",
            "Pour chaque séance, notez : la date, le lieu (ou le simulateur), le nom du drone ou du simulateur, le total des minutes, le type de vol (figures, cartographie, inspection), les conditions (vent, lumière), les problèmes ou incidents, et ce que vous avez appris. Pour les vrais vols, notez aussi l'immatriculation du drone et l'autorisation utilisée.",
            "Utilisez un carnet papier, un tableur ou une application de carnet de vol, mais remplissez-le à chaque fois et sauvegardez-le. Demandez à votre organisme de formation quel format il accepte pour les demandes de licence."
          ],
          steps: ["Choisissez papier, tableur ou application, et sauvegardez.", "Colonnes séparées pour simulateur et vols réels.", "Notez date, lieu, aéronef, minutes, type, conditions, problèmes, leçons.", "Pour les vols réels, ajoutez l'immatriculation et l'autorisation utilisée.", "Demandez à votre organisme de formation quel format il accepte."],
          words: [["Carnet de vol", "un registre de chaque vol fait par un pilote."], ["Temps de vol", "les minutes ou heures qu'un pilote a passées à voler."]],
          slides: [
            { title: "Pourquoi tenir un carnet", bullets: ["Il prouve votre expérience", "Utilisé par les écoles et les autorités", "Il crée la confiance des clients"] },
            { title: "Ce qu'il faut noter", bullets: ["Date, lieu, drone ou simulateur", "Minutes, type de vol, conditions", "Problèmes, incidents, leçons"] },
            { title: "Bien le tenir", bullets: ["Chaque séance, sauvegardé", "Simulateur et réel séparés", "Le format accepté par votre formateur"] }
          ],
          tryIt: "Commencez dès maintenant votre carnet de vol dans un tableur avec les colonnes de cette leçon, et notez chaque séance de simulateur faite jusqu'ici dans ce cours.",
          youCanNow: "tenir un carnet de vol complet pour les vols sur simulateur et les vols réels."
        },
        {
          title: "Votre parcours vers une licence de télépilote",
          minutes: 6,
          goal: "Rédiger un plan personnel pour obtenir une licence de télépilote dans votre pays.",
          text: [
            "Chaque pays décide comment les télépilotes obtiennent leur licence. Au Kenya, la KCAA agrée les organismes de formation aux systèmes d'aéronefs sans pilote (UTO) et les liste sur son site ; son barème comprend une licence d'élève télépilote, une licence de télépilote (RPL) et des qualifications en plus comme le vol hors de la vue directe. Les demandes passent par le système en ligne de la KCAA pour les drones. Au Nigeria, la partie 21 de la NCAA fixe les règles des licences de télépilote et les autres exigences pour les RPAS. Les autres pays ont leurs propres règles ; en Afrique francophone, renseignez-vous auprès de l'agence nationale de l'aviation civile de votre pays.",
            "Le parcours habituel : choisir un organisme de formation agréé ; étudier la théorie (droit aérien, espace aérien et cartes, météo, l'aéronef, facteurs humains, procédures d'urgence) ; suivre des leçons de vol et passer un examen pratique ; remplir les exigences de l'autorité ; demander la licence ; et la garder valide en la renouvelant comme exigé.",
            "Vérifiez chaque étape, document et redevance sur les pages officielles de l'autorité ou en l'appelant, et vérifiez qu'une école figure sur la liste agréée de l'autorité avant de payer. Votre carnet de simulateur montre que vous êtes prêt à apprendre vite, mais il ne remplace pas une formation agréée."
          ],
          steps: ["Trouvez les pages drones de votre autorité de l'aviation.", "Trouvez sa liste d'organismes de formation agréés ; choisissez-en deux à contacter.", "Demandez à chacun : durée du cours, contenu théorique et pratique, coût, examen, documents nécessaires.", "Vérifiez le prix de la licence dans le barème officiel.", "Écrivez des dates cibles pour la formation, l'examen et la demande."],
          words: [["Organisme de formation agréé", "une école de drones agréée par l'autorité de l'aviation pour former des pilotes à la licence (la KCAA les appelle UTO)."], ["Qualification", "une permission en plus sur une licence pour un type de vol, comme le vol hors de la vue directe."], ["Droit aérien", "les règles sur le vol et l'espace aérien."]],
          slides: [
            { title: "Chaque pays délivre ses licences", bullets: ["Kenya : la KCAA agrée les UTO ; RPL via le système en ligne", "Nigeria : la partie 21 de la NCAA couvre les licences", "Autres pays : leur propre autorité"] },
            { title: "Le parcours habituel", bullets: ["École agréée", "Théorie : droit aérien, espace aérien, météo, aéronef", "Formation pratique et examen", "Demande, puis renouvellement"] },
            { title: "Vérifiez avant de payer", bullets: ["L'école est-elle sur la liste agréée ?", "Prix selon le barème officiel", "Le simulateur aide, mais ce n'est pas une licence"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Exercice final : terminez les cinq figures et les trois exercices d'urgence dans votre simulateur, notez chaque séance dans votre carnet de vol, et rédigez votre plan d'une page pour la licence : autorité, écoles agréées trouvées, licence nécessaire, étapes, documents, coût selon les sources officielles, et dates cibles.",
          youCanNow: "faire les figures standard et les procédures d'urgence dans un simulateur, tenir un carnet de vol, et suivre un plan clair vers une licence officielle de télépilote."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Devenir pilote titulaire d'une licence",
        questions: [
          { q: "La radiocommande perd le signal avec le drone. Une bonne première étape est de :", options: ["Éteindre la radiocommande", "Courir après le drone", "Rester calme, orienter les antennes vers le drone et guetter le retour au point de départ", "Couper les moteurs du drone"], answer: 2, why: "La plupart des drones rentrent après une perte de liaison ; mieux orienter les antennes peut la rétablir." },
          { q: "L'alerte de batterie faible sonne alors qu'il reste une ligne de cartographie. Vous devez :", options: ["Faire vite la dernière ligne", "Arrêter la tâche et rentrer ou atterrir en sécurité", "Monter plus haut", "L'ignorer"], answer: 1, why: "Ne forcez jamais une batterie faible ; atterrissez en sécurité et finissez plus tard." },
          { q: "Que doit noter un carnet de vol de pilote ?", options: ["Date, lieu, aéronef, minutes, type, conditions, problèmes, leçons", "Seulement les accidents", "Seulement le prix du drone", "Rien ; il est facultatif"], answer: 0, why: "Un carnet complet prouve l'expérience et montre les tendances." },
          { q: "Terminer ce cours en ligne vous donne-t-il une licence ?", options: ["Oui, tout de suite", "Oui, après le quiz", "Seulement au Nigeria", "Non ; les licences viennent de l'autorité de l'aviation après une formation agréée et des examens"], answer: 3, why: "Seule l'autorité nationale délivre les licences de télépilote." },
          { q: "Avant de payer une école de drones, vous devez :", options: ["Vérifier qu'elle est sur la liste agréée de l'autorité de l'aviation", "Croire sa publicité", "Demander seulement à un ami", "Payer en espèces pour gagner du temps"], answer: 0, why: "Seule une formation agréée compte pour la licence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones pour la surveillance agricole 6 : cours de pilotage de drone en ligne",
    questions: [
      { q: "En mode 2, le manche droit commande :", options: ["La hauteur et la rotation", "L'avant/arrière et le côté", "Le zoom de la caméra", "Le retour au point de départ"], answer: 1, why: "En mode 2, le manche droit commande le tangage et le roulis." },
      { q: "Les gaz commandent :", options: ["La rotation", "Le déplacement sur le côté", "La montée et la descente", "La caméra"], answer: 2, why: "Les gaz font monter et descendre le drone." },
      { q: "Un vol souple vient :", options: ["De mouvements de manche petits et doux", "De pousser les manches à fond à chaque fois", "De voler vite", "De voler la nuit"], answer: 0, why: "Des commandes douces donnent un vol souple et contrôlé." },
      { q: "Qu'est-ce qui n'apparaît PAS normalement sur l'écran de vol ?", options: ["Le niveau de batterie", "Les satellites GPS", "La hauteur", "Le solde bancaire de l'agriculteur"], answer: 3, why: "L'écran montre les données de vol, pas des finances personnelles." },
      { q: "Pourquoi s'entraîner d'abord sur simulateur ?", options: ["C'est la loi partout", "Les erreurs ne coûtent rien et n'enfreignent aucune règle", "Cela donne une licence", "Les vrais drones ne peuvent pas faire de vol stationnaire"], answer: 1, why: "Les simulateurs permettent d'apprendre en sécurité avant les vrais vols." },
      { q: "Combien de temps doit durer une bonne séance quotidienne ?", options: ["Environ 15 à 20 minutes", "Cinq heures", "Une minute", "Une seule fois par an"], answer: 0, why: "Des séances courtes et régulières font le mieux progresser." },
      { q: "La figure de la tondeuse entraîne à :", options: ["Couper l'herbe", "Atterrir", "Voler en lignes droites parallèles comme un vol de cartographie", "Prendre des selfies"], answer: 2, why: "Elle développe le contrôle utilisé dans les parcours de cartographie." },
      { q: "Une figure d'orbite consiste à :", options: ["Monter tout droit", "Faire du vol stationnaire", "Atterrir sur un arbre", "Tourner autour d'un point en gardant la caméra pointée dessus"], answer: 3, why: "L'orbite garde la caméra sur une cible tout en tournant." },
      { q: "En volant nez vers soi, les commandes semblent :", options: ["Inversées à gauche et à droite", "Exactement pareilles", "Plus lentes", "Bloquées"], answer: 0, why: "Le drone vous fait face, donc gauche et droite sont inversées de votre point de vue." },
      { q: "En mode GPS, quand vous lâchez les manches, le drone :", options: ["Tombe", "Garde sa place", "Rentre au départ", "Tourne sur lui-même"], answer: 1, why: "Le positionnement par satellite maintient le drone sur place." },
      { q: "Un drone peut passer en mode d'assiette quand :", options: ["La batterie est pleine", "Le ciel est dégagé", "Le GPS est faible, par exemple sous des arbres épais ou près de structures métalliques", "Vous prenez une photo"], answer: 2, why: "Un signal satellite faible supprime le maintien de position." },
      { q: "En mode d'assiette par vent, le drone va :", options: ["Rester parfaitement immobile", "Atterrir tout seul", "Monter sans fin", "Dériver avec le vent"], answer: 3, why: "Il garde sa hauteur mais pas sa place." },
      { q: "Le mode sport veut dire en général :", options: ["Un vol plus rapide avec moins de protections", "Un tournage lent et souple", "Un atterrissage automatique", "Pas de caméra"], answer: 0, why: "Le mode sport échange des fonctions de sécurité contre de la vitesse." },
      { q: "Après tout accident ou incident grave, vous devez :", options: ["Le cacher", "Sécuriser la zone, chercher les dégâts, le noter et le signaler si c'est exigé", "Revoler tout de suite sans vérification", "Supprimer le carnet"], answer: 1, why: "La sécurité d'abord, puis les registres et tout signalement exigé." },
      { q: "En cas de perte du GPS, le plan le plus sûr est de :", options: ["Voler plus loin", "Monter le plus haut possible", "Ramener doucement le drone à la main contre le vent et atterrir vite", "Lâcher les manches et attendre"], answer: 2, why: "Le pilotage manuel et un atterrissage rapide évitent la fuite du drone." },
      { q: "Une fuite du drone (fly-away), c'est :", options: ["Un vol de cartographie normal", "Un type d'hélice", "Une aire d'atterrissage", "Un drone qui s'en va hors du contrôle du pilote"], answer: 3, why: "C'est une perte de contrôle, souvent après un problème de GPS ou de liaison." },
      { q: "Dans un carnet de vol, le temps sur simulateur et le temps de vol réel doivent être :", options: ["Dans des colonnes séparées", "Additionnés sans étiquette", "Non notés", "Notés seulement au-delà d'une heure"], answer: 0, why: "Les autorités et les formateurs doivent voir chaque type séparément." },
      { q: "Au Kenya, les écoles de drones agréées s'appellent :", options: ["Des clubs de drones", "Des organismes de formation aux systèmes d'aéronefs sans pilote (UTO)", "Des agrovets", "Des cliniques des plantes"], answer: 1, why: "La KCAA agrée et liste les UTO." },
      { q: "Quel sujet fait partie de la formation théorique de télépilote ?", options: ["La cuisine", "Les règles du football", "Le droit aérien, l'espace aérien et la météo", "La musique"], answer: 2, why: "Les pilotes doivent connaître le droit aérien, l'espace aérien, la météo et leur aéronef." },
      { q: "Où vérifier le prix de la licence ?", options: ["Dans une publication sur les réseaux sociaux", "Dans la publicité d'un vendeur", "Dans les souvenirs d'un vieil ami", "Dans le barème officiel de l'autorité de l'aviation"], answer: 3, why: "Les redevances changent ; seul le barème officiel est fiable." }
    ]
  }
};
