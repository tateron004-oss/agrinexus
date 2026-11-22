"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-uas-technology.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-fr",
  lang: "fr",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Drones agricoles : technologie UAS et maintenance",
  skills: "Nommer les parties d'un système de drone et leur rôle, Entretenir les batteries lithium-polymère en sécurité, Choisir et manipuler les charges utiles, Faire les inspections avant et après le vol, Tenir un calendrier et des registres de maintenance, Diagnostiquer les pannes courantes",
  outcome: "expliquer le rôle de chaque partie d'un système de drone agricole, entretenir ses batteries et ses charges utiles en sécurité, et mener un programme de maintenance avec des inspections, un calendrier, des étapes de diagnostic et des registres complets pour un drone.",
  about: [
    "Ce cours s'adresse aux pilotes de drones, aux techniciens, aux entreprises de services par drone, au personnel des agro-entreprises et des plantations, et aux jeunes qui veulent garder les drones agricoles en état de voler en sécurité au Kenya, au Nigeria et partout en Afrique.",
    "Le chapitre 1 ouvre le système de drone : structure, moteurs et hélices, contrôleur de vol et capteurs, liaison radio et station au sol, batteries et charges utiles comme les caméras et les systèmes de pulvérisation. Le chapitre 2 porte sur la maintenance : inspections quotidiennes, maintenance programmée, réparation des pannes courantes, mises à jour du micrologiciel, registres, et maintien des drones en état de marche dans la poussière, la chaleur, la pluie et là où l'électricité est peu fiable.",
    "Suivez toujours d'abord le manuel du fabricant et votre manuel d'exploitation ; ce cours enseigne les compétences générales qui se trouvent derrière. Les autorités de l'aviation attendent des exploitants qu'ils entretiennent leurs aéronefs et tiennent des registres : une bonne maintenance, c'est à la fois la sécurité et la conformité. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un programme de maintenance pour un drone agricole (réel ou d'exemple, comme un multirotor de cartographie utilisé par une coopérative) : une liste des pièces avec le rôle de chacune, une procédure d'entretien et de charge des batteries, une liste de vérification avant et après le vol, un calendrier de maintenance par heures de vol et par date, un tableau de diagnostic pour au moins cinq pannes courantes, et un modèle de registre de maintenance avec deux exemples d'entrées.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des télépilotes, des techniciens, des entreprises de services par drone, le personnel d'agro-entreprises et de domaines, et des jeunes au Kenya, au Nigeria et partout en Afrique qui veulent garder les drones agricoles en état de voler en sécurité.",
    startingPoint: "La plupart ont vu ou fait voler un drone agricole et savent charger une batterie et décoller avec l'application. Peu savent nommer chaque partie du système et son rôle, suivre une liste d'inspection écrite, planifier la maintenance par heures de vol ou tenir un registre de maintenance.",
    gap: "Les drones coûtent cher et s'abîment facilement avec la poussière, la chaleur et la pluie, et des batteries au lithium mal manipulées peuvent prendre feu. Un drone qui s'écrase ou reste au sol fait perdre des clients et de l'argent, et les autorités, les clients et les assureurs attendent des registres de maintenance. Connaître le système et suivre un programme de maintenance garde les drones sûrs, en service et conformes.",
    constraints: [
      "Niveau de lecture : des mots simples ; chaque terme technique est expliqué",
      "Appareils : un téléphone ou un ordinateur pour le cours ; un vrai drone aide mais n'est pas obligatoire",
      "Sécurité : les batteries au lithium peuvent prendre feu ; aucune réparation à l'intérieur des batteries ou de l'électronique",
      "Le manuel du fabricant et le manuel d'exploitation passent en premier ; le cours enseigne les compétences générales qui les sous-tendent",
      "Conditions de terrain : poussière, chaleur, pluie et courant peu fiable dans beaucoup de zones"
    ],
    prerequisites: "Il est conseillé de suivre d'abord « Drones pour la surveillance agricole 1 : introduction, réglementation et sécurité »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à un système de drone agricole", action: "nommer chaque partie principale de l'aéronef et du système au sol et expliquer son rôle", standard: "y compris le contrôleur de vol, les capteurs, la liaison C2 et la charge utile" },
    { id: "O2", condition: "Avec un lot de batteries de drone", action: "décrire comment les charger, les stocker, les transporter et les mettre hors service en sécurité", standard: "en suivant chaque étape de sécurité, sans utiliser aucune batterie gonflée ou abîmée" },
    { id: "O3", condition: "Face à une caméra, un capteur ou un système de pulvérisation", action: "décrire comment le monter, le nettoyer et le vérifier", standard: "avec la charge utile bien fixée, les optiques propres et les pièces de pulvérisation vérifiées pour l'usure" },
    { id: "O4", condition: "Avant et après chaque vol", action: "faire une inspection avant et après le vol et noter ce que vous trouvez", standard: "en vérifiant chaque point de la liste" },
    { id: "O5", condition: "Pour un drone", action: "écrire un calendrier de maintenance par heures de vol et par date, une routine de mise à jour du micrologiciel et un registre de maintenance", standard: "avec des intervalles « selon ce qui arrive en premier » et chaque champ du registre rempli" },
    { id: "O6", condition: "Face à une panne ou à des conditions de terrain difficiles", action: "diagnostiquer pas à pas et protéger le drone de la poussière, de la chaleur, de la pluie et des coupures de courant", standard: "en clouant le drone au sol quand un défaut de sécurité se répète" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne un système de drone agricole",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les parties d'un système de drone",
          minutes: 6,
          goal: "Nommer les principales parties d'un système de drone et expliquer leur rôle.",
          text: [
            "Les autorités parlent d'un système (UAS ou RPAS) parce que l'aéronef n'en est qu'une partie. Le système comprend l'aéronef, la station au sol (radiocommande, téléphone ou tablette, logiciel), la liaison radio entre les deux (souvent appelée liaison de commande et de contrôle, ou C2), les batteries et chargeurs, et la charge utile (caméra, capteur ou système de pulvérisation).",
            "Sur l'aéronef : la structure (corps et bras, ou ailes) ; les moteurs et les hélices qui créent la portance ; les contrôleurs électroniques de vitesse (ESC) qui disent à chaque moteur à quelle vitesse tourner ; le contrôleur de vol, le cerveau du drone ; et les capteurs : GNSS (positionnement par satellite comme le GPS), boussole, centrale inertielle (IMU) qui détecte l'inclinaison et les mouvements, baromètre pour la hauteur, et souvent des capteurs d'obstacles.",
            "Le contrôleur de vol lit les capteurs des centaines de fois par seconde et ajuste chaque moteur pour garder le drone stable et sur sa route. Si un capteur donne de mauvaises données, comme une boussole près d'un objet métallique, tout le drone peut se comporter bizarrement. C'est pourquoi l'étalonnage et le choix soigneux du lieu de décollage comptent."
          ],
          words: [["Structure", "le corps, les bras ou les ailes du drone."], ["ESC", "contrôleur électronique de vitesse : règle la vitesse de rotation de chaque moteur."], ["Contrôleur de vol", "l'ordinateur de bord du drone qui le garde stable et sur sa route."], ["GNSS", "systèmes mondiaux de navigation par satellite, comme le GPS, utilisés pour la position."], ["IMU", "centrale inertielle : détecte l'inclinaison, les rotations et les mouvements."], ["Liaison C2", "liaison de commande et de contrôle : la connexion radio entre la radiocommande et le drone."]],
          slides: [
            { title: "Un système, pas seulement un aéronef", bullets: ["L'aéronef", "Station au sol : radiocommande, téléphone, logiciel", "Liaison radio C2", "Batteries et charge utile"] },
            { title: "Sur l'aéronef", bullets: ["Structure, moteurs, hélices", "Les ESC commandent chaque moteur", "Contrôleur de vol : le cerveau"] },
            { title: "Les capteurs", bullets: ["GNSS pour la position, boussole pour la direction", "IMU pour l'inclinaison et les mouvements", "Baromètre pour la hauteur, capteurs d'obstacles"] },
            { title: "Pourquoi c'est important", bullets: ["Mauvaises données = comportement bizarre", "Étalonnez et choisissez bien le lieu de décollage"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Prenez un drone (ou une photo ou un schéma clair d'un drone) et étiquetez au moins huit parties : structure, moteurs, hélices, emplacement du contrôleur de vol, module GNSS, caméra ou charge utile, batterie, radiocommande. À côté de chacune, écrivez son rôle en une ligne.",
          youCanNow: "nommer les parties d'un système de drone et dire le rôle de chacune.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le contrôleur de vol ?", options: ["La radiocommande que tient le pilote", "Le cerveau du drone qui lit les capteurs et règle les moteurs", "Le chargeur de batterie", "Le support de caméra"], answer: 1, why: "Le contrôleur de vol lit les capteurs plusieurs fois par seconde et règle chaque moteur pour garder le drone stable." },
            { objective: "O1", q: "Vous allez décoller à côté d'une citerne d'eau en métal et le drone dérive de façon étrange. Quelle est une cause probable ?", options: ["Les hélices sont trop neuves", "La charge utile est trop propre", "La batterie est trop pleine", "De mauvaises données de la boussole à cause du métal tout proche"], answer: 3, why: "Une boussole près du métal donne de mauvaises données, et tout le drone peut se comporter bizarrement." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les batteries : la partie qui demande le plus de soin",
          minutes: 6,
          goal: "Charger, stocker, transporter et mettre au rebut les batteries de drone en sécurité.",
          text: [
            "La plupart des drones utilisent des batteries lithium-polymère (LiPo) ou d'autres batteries au lithium. Elles stockent beaucoup d'énergie pour leur poids, et c'est aussi pourquoi elles peuvent prendre feu si elles sont abîmées, trop chargées, trop déchargées ou surchauffées. L'entretien des batteries est la tâche de maintenance la plus importante.",
            "Chargez seulement avec le bon chargeur, sur une surface non inflammable, jamais sans surveillance, et jamais une batterie gonflée, percée ou chaude. Laissez une batterie refroidir après le vol avant de la charger, et laissez-la revenir à une température normale avant de voler. Ne laissez pas les batteries dans une voiture chaude ou en plein soleil dans le champ.",
            "Pour un stockage de plus de quelques jours, gardez les batteries à la charge de stockage (partiellement chargées, ni pleines ni vides ; beaucoup de batteries intelligentes le font seules), dans un endroit frais et sec, idéalement dans un sac ou une boîte ignifuge. Suivez le nombre de cycles et l'état de chaque batterie. Retirez du service les batteries gonflées ou abîmées et déposez-les dans un vrai point de collecte des déchets électroniques ou des piles, jamais dans le feu ou les ordures ordinaires. Transporter des batteries en avion obéit aux règles propres à chaque compagnie aérienne."
          ],
          steps: ["Numérotez chaque batterie et notez ses cycles.", "Chargez avec le bon chargeur, sur une surface non inflammable, sous surveillance.", "Ne chargez et ne faites jamais voler une batterie gonflée, percée ou chaude.", "Gardez les batteries hors des voitures chaudes et du plein soleil.", "Stockez-les à la charge de stockage dans un contenant frais, sec et ignifuge.", "Déposez les batteries abîmées dans un vrai point de collecte."],
          words: [["LiPo", "batterie lithium-polymère : légère et puissante, mais peut prendre feu si elle est maltraitée."], ["Cycle de charge", "une utilisation complète de la capacité d'une batterie, de pleine à vide et retour."], ["Charge de stockage", "un niveau de charge partiel qui garde les batteries au lithium en bonne santé quand on ne s'en sert pas."], ["Déchets électroniques", "les déchets d'appareils électroniques, qui demandent une collecte et un recyclage spéciaux."]],
          slides: [
            { title: "De la puissance avec un risque", bullets: ["LiPo : beaucoup d'énergie pour son poids", "Peut prendre feu si abîmée ou maltraitée", "Les batteries, tâche numéro un"] },
            { title: "Règles de charge", bullets: ["Bon chargeur, surface non inflammable", "Jamais sans surveillance", "Jamais gonflée, percée ou chaude"] },
            { title: "Chaleur et stockage", bullets: ["Ni voiture chaude ni plein soleil", "Charge de stockage, au frais et au sec", "Sac ou boîte ignifuge"] },
            { title: "Suivre et retirer", bullets: ["Numérotez les batteries, notez les cycles", "Retirez celles qui sont gonflées ou abîmées", "Déposez-les dans un vrai point de collecte"] }
          ],
          tryIt: "Rédigez une procédure batteries d'une page pour une équipe de drones : numérotation, charge, manipulation au champ par forte chaleur, stockage, registre des cycles et mise au rebut. Ajoutez un tableau de suivi des batteries avec des colonnes pour le numéro de batterie, la date, les cycles, l'état et des notes.",
          youCanNow: "charger, stocker, transporter et mettre au rebut les batteries de drone en sécurité, et tenir un registre des batteries.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que la charge de stockage ?", options: ["Partiellement chargée, ni pleine ni vide, pour un stockage de plus de quelques jours", "Complètement chargée", "Complètement vide", "Chargée dans une voiture chaude"], answer: 0, why: "Les batteries stockées plus de quelques jours sont gardées partiellement chargées dans un endroit frais et sec." },
            { objective: "O2", q: "Vous venez d'atterrir et voulez revoler bientôt. La batterie est chaude. Que faites-vous ?", options: ["La charger tout de suite au soleil", "La charger dans la voiture et s'éloigner", "La laisser refroidir avant de la charger, et la charger sous surveillance sur une surface non inflammable", "La mettre au congélateur"], answer: 2, why: "Charger une batterie chaude ou sans surveillance augmente le risque d'incendie." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Les charges utiles : caméras, capteurs et systèmes de pulvérisation",
          minutes: 5,
          goal: "Manipuler, monter et entretenir les principales charges utiles des drones agricoles.",
          text: [
            "La charge utile, c'est ce que le drone transporte pour faire le travail. Les drones de cartographie portent une caméra RVB (RGB en anglais), souvent sur une nacelle qui la garde stable. Les drones de suivi de la santé des cultures peuvent porter une caméra multispectrale avec un capteur de lumière solaire et un panneau d'étalonnage. Les caméras thermiques mesurent la chaleur. Les drones de pulvérisation portent un réservoir, une pompe, des tuyaux et des buses, et certains épandent des granulés ou des semences.",
            "Prenez soin de l'optique : gardez les objectifs et le capteur de lumière solaire propres avec un chiffon doux pour objectif, protégez-les avec des capuchons, et gardez les caméras à l'abri de la poussière et de l'humidité. Vérifiez que la nacelle bouge librement et que la charge utile est bien fixée ; une charge mal fixée perturbe l'équilibre et le contrôleur de vol.",
            "Les systèmes de pulvérisation demandent plus de soin : après chaque usage, ils sont rincés et nettoyés comme l'exigent le fabricant et l'étiquette du pesticide, les buses sont vérifiées pour l'usure et les bouchages, et tout le système est étalonné pour appliquer la bonne quantité. N'oubliez pas que la pulvérisation par drone demande des autorisations aériennes et phytosanitaires ; la maintenance ne les remplace pas."
          ],
          words: [["Charge utile", "l'équipement que le drone transporte pour faire le travail, comme une caméra ou un réservoir de pulvérisation."], ["Nacelle", "un support motorisé (gimbal) qui garde la caméra stable."], ["Capteur de lumière solaire", "un petit capteur sur le dessus de certains drones multispectraux qui mesure la lumière reçue pour corriger les mesures."], ["Buse", "l'embout qui transforme le liquide en gouttelettes."]],
          slides: [
            { title: "Charges utiles courantes", bullets: ["Caméra RVB sur nacelle", "Multispectrale avec capteur de lumière solaire", "Caméra thermique", "Réservoir, pompe, buses ; épandeurs"] },
            { title: "Prendre soin de l'optique", bullets: ["Nettoyez objectifs et capteurs avec un chiffon doux", "Capuchons, loin de la poussière et de l'humidité", "Nacelle libre, fixation serrée"] },
            { title: "Systèmes de pulvérisation", bullets: ["Rincez et nettoyez selon le fabricant et l'étiquette", "Vérifiez l'usure et le bouchage des buses", "Étalonnez le débit ; autorisations toujours nécessaires"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Choisissez une charge utile (caméra RVB, caméra multispectrale ou système de pulvérisation). Rédigez une liste d'entretien d'au moins six points pour avant et après chaque utilisation.",
          youCanNow: "monter, nettoyer et vérifier les principales charges utiles des drones agricoles.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que la charge utile d'un drone agricole ?", options: ["La batterie", "La station au sol", "Ce que le drone emporte pour faire le travail, comme une caméra ou un système de pulvérisation", "La liaison radio"], answer: 2, why: "La charge utile est la caméra, le capteur, le système de pulvérisation ou d'épandage qui fait le travail." },
            { objective: "O3", q: "Après une mission de pulvérisation, que faites-vous du système de pulvérisation ?", options: ["Le rincer et le nettoyer comme l'exigent le fabricant et l'étiquette, et vérifier les buses", "Laisser le reste de bouillie dans la cuve", "Laver tout le drone au jet d'eau", "Le ranger mouillé au soleil"], answer: 0, why: "Les systèmes de pulvérisation sont rincés et nettoyés après chaque usage, et les buses sont vérifiées pour l'usure et les bouchages." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne un système de drone agricole",
        questions: [
          { objective: "O1", q: "Pourquoi parle-t-on d'un système (UAS ou RPAS) pour un drone ?", options: ["Cela sonne mieux", "Il comprend l'aéronef, la station au sol, la liaison radio, les batteries et la charge utile", "Il a beaucoup d'hélices", "Il est fabriqué en usine"], answer: 1, why: "C'est l'ensemble des parties qui fait fonctionner le drone." },
          { objective: "O1", q: "Que détecte l'IMU ?", options: ["L'inclinaison, les rotations et les mouvements", "L'humidité du sol", "Le prix des cultures", "La couleur de la batterie"], answer: 0, why: "L'IMU détecte les mouvements du drone pour que le contrôleur de vol le stabilise." },
          { objective: "O2", q: "Une batterie est légèrement gonflée après un vol. Vous devez :", options: ["La charger vite", "L'aplatir en appuyant", "Voler encore une fois avec", "Arrêter de l'utiliser et la mettre au rebut en sécurité"], answer: 3, why: "Le gonflement est un signe de dommage et de risque d'incendie." },
          { objective: "O2", q: "Où stocker les batteries de drone pour une longue pause ?", options: ["Pleines, dans une voiture chaude", "Vides, en plein soleil", "À la charge de stockage, dans un contenant frais, sec et ignifuge", "Dans le feu de la cuisine"], answer: 2, why: "La charge de stockage et la fraîcheur gardent les batteries au lithium sûres et en bonne santé." },
          { objective: "O3", q: "À quoi sert une nacelle ?", options: ["À garder la caméra stable", "À charger la batterie", "À pulvériser le pesticide", "À mesurer la hauteur"], answer: 0, why: "Une nacelle stabilise la caméra pour des images nettes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La maintenance au champ et à l'atelier",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les inspections avant et après chaque vol",
          minutes: 5,
          goal: "Faire une inspection avant et après le vol et noter ce que vous trouvez.",
          text: [
            "Les inspections repèrent les petits problèmes avant qu'ils ne causent un accident. L'inspection avant le vol vérifie que le drone est apte à voler maintenant ; l'inspection après le vol trouve les dommages ou l'usure du vol qui vient d'avoir lieu et prépare le lendemain.",
            "Avant le vol : structure et bras sans fissures, bras verrouillés ; hélices propres, serrées, sans éclats ni fissures ; moteurs qui tournent librement sans grincer ; charge utile fixée et objectif propre ; batterie bien en place et verrouillée ; capteurs et fenêtres de vision propres ; radiocommande et application prêtes ; état du micrologiciel vérifié avant de quitter la base.",
            "Après le vol : laissez refroidir les moteurs et les batteries ; vérifiez la chaleur des moteurs (un moteur anormalement chaud est peut-être en train de lâcher) ; cherchez de nouveaux dommages, de la poussière ou de l'herbe dans les moteurs et les aérations ; nettoyez le drone avec une brosse douce ou un chiffon sec (pas de jet d'eau sur l'électronique) ; notez le temps de vol, les problèmes et les messages d'alerte dans le registre."
          ],
          steps: ["Avant le vol : structure, bras, hélices, moteurs, charge utile, batterie, capteurs, radiocommande.", "Ne volez que si chaque point est bon.", "Après le vol : refroidissement, chaleur des moteurs, dommages et saleté.", "Nettoyez avec une brosse douce ou un chiffon sec.", "Notez le temps de vol, les problèmes et les alertes."],
          words: [["Inspection", "une vérification soigneuse pour trouver des dommages, de l'usure ou des pannes."], ["Micrologiciel", "le logiciel intégré au drone, à la radiocommande et aux batteries (firmware en anglais)."]],
          slides: [
            { title: "Deux inspections", bullets: ["Avant le vol : apte à voler maintenant ?", "Après le vol : dommages ou usure du jour ?"] },
            { title: "Avant le vol", bullets: ["Structure, bras verrouillés, hélices intactes", "Moteurs libres, charge utile fixée", "Batterie verrouillée, capteurs propres, appli prête"] },
            { title: "Après le vol", bullets: ["Refroidissement ; chaleur des moteurs", "Dommages, poussière, herbe dans moteurs et aérations", "Nettoyage à sec ; notez temps, problèmes, alertes"] }
          ],
          tryIt: "Rédigez une liste de vérification avant le vol et une après le vol, d'au moins huit points chacune, pour un drone de cartographie. Si vous avez un drone, utilisez-les une fois et notez les résultats.",
          youCanNow: "inspecter un drone avant et après chaque vol et noter ce que vous trouvez.",
          quickCheck: [
            { objective: "O4", q: "À quoi sert une inspection avant le vol ?", options: ["Seulement à trouver les dégâts du vol précédent", "À charger la batterie", "À mettre à jour le micrologiciel sur le terrain", "À vérifier que le drone est apte à voler maintenant"], answer: 3, why: "L'inspection avant le vol vérifie que le drone est apte à voler avant le décollage." },
            { objective: "O4", q: "Pendant l'inspection avant le vol, un moteur fait un bruit de frottement quand vous le tournez. Que faites-vous ?", options: ["Voler prudemment", "Ne pas voler ; chercher du sable, de l'herbe ou des dégâts dans le moteur", "Mettre de l'huile sur l'hélice", "Faire une mission plus courte"], answer: 1, why: "Les moteurs doivent tourner librement ; un frottement signale un problème à régler avant de voler." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Maintenance programmée, micrologiciel et registres",
          minutes: 5,
          goal: "Fixer un calendrier de maintenance par heures de vol et par date, et tenir des registres de maintenance.",
          text: [
            "Certaines pièces s'usent avec l'usage. Les hélices, les moteurs, les roulements, les nacelles, le train d'atterrissage, les pompes et les buses de pulvérisation doivent être remplacés selon un calendrier. Le manuel du fabricant donne les intervalles ; votre manuel d'exploitation fixe votre propre calendrier. Planifiez par heures de vol (par exemple toutes les 50 heures) et par date (par exemple tous les trois mois), selon ce qui arrive en premier.",
            "Les mises à jour du micrologiciel corrigent des erreurs et ajoutent des fonctions de sécurité, mais une mise à jour peut aussi changer le comportement du drone. Lisez les notes de version, faites la mise à jour avant de quitter la base (pas au champ), mettez à jour ensemble le drone, la radiocommande et les batteries, et testez avec un court vol avant un vrai travail.",
            "Tenez un registre de maintenance pour chaque drone : date, heures de vol, ce qui a été inspecté, remplacé ou réparé, pièces utilisées, version du micrologiciel, qui l'a fait, et le résultat. Les autorités attendent des exploitants qu'ils entretiennent leurs aéronefs et tiennent des registres ; les clients et les assureurs peuvent aussi les demander."
          ],
          steps: ["Lisez les intervalles de maintenance du fabricant.", "Écrivez votre calendrier par heures de vol et par date.", "Planifiez les mises à jour à la base, après lecture des notes de version, avec un vol d'essai.", "Tenez un registre de maintenance pour chaque drone.", "Gardez en stock des hélices de rechange et les pièces courantes."],
          words: [["Maintenance programmée", "des vérifications et remplacements de pièces prévus à intervalles fixes."], ["Registre de maintenance", "le relevé de toute la maintenance faite sur un drone."], ["Notes de version", "la description, par le fabricant, de ce que change une mise à jour logicielle."]],
          slides: [
            { title: "Les pièces s'usent", bullets: ["Hélices, moteurs, roulements, nacelle", "Train d'atterrissage, pompes, buses", "Remplacement selon un calendrier"] },
            { title: "Heures et date", bullets: ["Par exemple toutes les 50 heures ou tous les 3 mois", "Selon ce qui arrive en premier", "Suivez le manuel du fabricant"] },
            { title: "Micrologiciel en sécurité", bullets: ["Lisez les notes de version", "Mise à jour à la base, tout ensemble", "Vol d'essai avant un vrai travail"] },
            { title: "Registre de maintenance", bullets: ["Date, heures, travaux, pièces, micrologiciel", "Qui l'a fait et le résultat", "Pour la sécurité, les autorités, les clients, les assureurs"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Faites un tableau de calendrier de maintenance pour un drone avec au moins six éléments (hélices, moteurs, nacelle, train d'atterrissage, batteries, micrologiciel), chacun avec un intervalle en heures et en mois, et commencez un registre de maintenance avec un exemple d'entrée.",
          youCanNow: "planifier la maintenance programmée et les mises à jour du micrologiciel, et tenir un vrai registre de maintenance.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire « selon ce qui arrive en premier » dans un calendrier de maintenance ?", options: ["Faire le travail seulement tous les trois mois", "Faire le travail à la limite d'heures de vol ou à la date prévue, selon ce qui arrive en premier", "Sauter le travail si le drone vole bien", "Faire le travail seulement après un accident"], answer: 1, why: "Planifier par heures de vol et par date, selon ce qui arrive en premier, évite que les pièces s'usent trop." },
            { objective: "O5", q: "Une mise à jour du micrologiciel apparaît pendant que vous êtes chez un client. Que faites-vous ?", options: ["L'installer tout de suite sur le terrain", "Mettre à jour seulement le drone et pas la radiocommande", "Désactiver toutes les mises à jour pour toujours", "Attendre, puis faire la mise à jour à la base après avoir lu les notes de version, et tester par un court vol"], answer: 3, why: "Les mises à jour peuvent changer le comportement : elles se font à la base, toutes ensemble, et sont testées avant le vrai travail." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Diagnostic des pannes et conditions de terrain en Afrique",
          minutes: 6,
          goal: "Diagnostiquer pas à pas les pannes courantes et protéger les drones de la poussière, de la chaleur, de la pluie et des coupures de courant.",
          text: [
            "Diagnostiquez une étape à la fois : lisez le message d'alerte dans l'application, vérifiez d'abord les causes les plus simples, changez une seule chose, et testez. Pannes courantes : erreur de boussole (éloignez-vous du métal, des véhicules et des lignes électriques, puis réétalonnez si on vous le demande) ; GNSS faible (attendez plus de satellites, éloignez-vous des grands arbres) ; vibrations ou oscillations (cherchez une hélice abîmée ou desserrée ou un bras tordu) ; erreur moteur (cherchez de l'herbe, du sable ou un moteur abîmé) ; temps de vol courts (batterie vieillissante, chaleur ou charge utile lourde).",
            "La poussière et le sable entrent dans les moteurs et les nacelles : décollez depuis un tapis ou une bâche, nettoyez après le vol et rangez le drone dans une mallette fermée. La chaleur réduit la durée de vie des batteries et peut faire surchauffer l'électronique : mettez les batteries et la radiocommande à l'ombre, volez aux heures plus fraîches, et laissez le drone se reposer entre les vols. La pluie et l'humidité abîment l'électronique, sauf si le drone est conçu pour cela : ne volez pas sous la pluie, séchez le matériel et rangez-le avec des sachets absorbeurs d'humidité.",
            "Là où l'électricité est peu fiable, planifiez la charge : un onduleur branché sur un véhicule ou un kit de charge solaire, assez de batteries pour la journée, et la charge de nuit à la base. Sachez quand arrêter : si une panne se répète ou touche la sécurité, interdisez le drone de vol et envoyez-le au centre de service du fabricant ou à un technicien qualifié."
          ],
          steps: ["Lisez le message d'alerte exact.", "Vérifiez d'abord les causes les plus simples.", "Changez une seule chose à la fois, puis testez.", "Utilisez un tapis de décollage ; nettoyez et rangez le drone en mallette après un travail poussiéreux.", "Batteries à l'ombre ; volez aux heures fraîches ; pas de vol sous la pluie sauf drone conçu pour.", "Interdisez le drone de vol si une panne de sécurité se répète."],
          words: [["Diagnostic", "trouver pas à pas la cause d'une panne."], ["Étalonnage", "une procédure qui remet à zéro un capteur, comme la boussole, pour qu'il mesure correctement."], ["Interdit de vol", "qui ne peut pas voler avant d'être réparé."]],
          slides: [
            { title: "Diagnostiquer pas à pas", bullets: ["Lisez l'alerte", "Les causes simples d'abord", "Changez une chose, puis testez"] },
            { title: "Pannes courantes", bullets: ["Erreur de boussole : loin du métal, réétalonnez", "Oscillations : hélices ou bras", "Vols courts : vieille batterie, chaleur, charge lourde"] },
            { title: "Poussière, chaleur et pluie", bullets: ["Tapis, nettoyage, mallette fermée", "Batteries à l'ombre, heures fraîches", "Pas de pluie sauf drone conçu pour ; séchez et rangez"] },
            { title: "Électricité et limites", bullets: ["Charge par véhicule ou solaire, batteries de rechange", "Interdisez de vol si une panne de sécurité se répète"] }
          ],
          tryIt: "Exercice final : rédigez le programme de maintenance d'un drone : liste des pièces avec leur rôle, procédure batteries, listes de vérification avant et après le vol, calendrier par heures et par date, tableau de diagnostic pour au moins cinq pannes, et modèle de registre de maintenance avec deux exemples d'entrées.",
          youCanNow: "diagnostiquer les pannes courantes des drones, les protéger dans les conditions de terrain africaines, et mener un programme de maintenance complet.",
          quickCheck: [
            { objective: "O6", q: "Quelle est la première étape d'un diagnostic de panne ?", options: ["Lire le message d'alerte et vérifier d'abord les causes les plus simples", "Changer plusieurs pièces à la fois", "Ouvrir la batterie", "Voler plus haut pour tester"], answer: 0, why: "Lisez le message, vérifiez d'abord les causes simples, changez une seule chose et testez." },
            { objective: "O6", q: "Vous allez voler toute la journée dans une ferme chaude et poussiéreuse, sans électricité. Que prévoyez-vous ?", options: ["Une seule batterie et un décollage sur le sable nu", "Laisser les batteries au soleil pour qu'elles restent chaudes", "Un tapis de décollage, de l'ombre pour les batteries, les heures plus fraîches et assez de batteries chargées ou un chargeur solaire ou de véhicule", "Voler sans laisser reposer le drone"], answer: 2, why: "Les tapis arrêtent la poussière, l'ombre et les heures fraîches protègent les batteries, et la recharge doit être prévue là où le courant n'est pas fiable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La maintenance au champ et à l'atelier",
        questions: [
          { objective: "O4", q: "Une hélice a un petit éclat sur le bord. Vous devez :", options: ["Voler prudemment", "La scotcher", "La remplacer avant de voler", "La poncer et voler"], answer: 2, why: "Une hélice abîmée cause des vibrations et peut casser en vol." },
          { objective: "O4", q: "Après un vol, un moteur est beaucoup plus chaud que les autres. Cela peut vouloir dire :", options: ["Que le moteur lâche ou est bloqué", "Que le drone a bien volé", "Que la caméra est sale", "Que la batterie est neuve"], answer: 0, why: "Une chaleur inhabituelle peut signaler un roulement abîmé, des débris ou un moteur qui lâche." },
          { objective: "O5", q: "Quand installer une mise à jour du micrologiciel ?", options: ["Au milieu du champ d'un client", "Pendant un vol", "Jamais", "À la base, après lecture des notes de version, puis vol d'essai"], answer: 3, why: "Les mises à jour peuvent changer le comportement ; testez avant un vrai travail." },
          { objective: "O6", q: "L'application affiche une erreur de boussole au décollage. Une bonne première étape est de :", options: ["Décoller quand même", "S'éloigner du métal, des véhicules et des lignes électriques et réétalonner si demandé", "Retirer la boussole", "Voler en mode sport"], answer: 1, why: "Le métal et les sources magnétiques perturbent la boussole." },
          { objective: "O6", q: "Comment protéger un drone de la poussière dans une ferme sèche ?", options: ["Décoller depuis un tapis, nettoyer après le vol, ranger en mallette fermée", "Le laver au tuyau", "Voler plus près du sol", "Le laisser à découvert"], answer: 0, why: "La poussière abîme moteurs et nacelles ; tapis, nettoyage et mallette aident." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones agricoles : technologie UAS et maintenance",
    questions: [
      { objective: "O1", q: "La liaison C2 est :", options: ["Un type de batterie", "La connexion radio entre la radiocommande et le drone", "Une taille d'hélice", "Un objectif de caméra"], answer: 1, why: "La liaison de commande et de contrôle transporte les ordres et les données." },
      { objective: "O1", q: "Les ESC commandent :", options: ["Le zoom de la caméra", "Le stockage des batteries", "La vitesse de rotation de chaque moteur", "Les satellites GPS"], answer: 2, why: "Les contrôleurs électroniques de vitesse pilotent les moteurs." },
      { objective: "O1", q: "Le contrôleur de vol est :", options: ["Le cerveau embarqué du drone qui le garde stable", "La personne qui pilote", "Le boîtier de radiocommande", "L'aire d'atterrissage"], answer: 0, why: "Il lit les capteurs et ajuste les moteurs de nombreuses fois par seconde." },
      { objective: "O1", q: "Le GNSS donne au drone :", options: ["Sa couleur", "Sa température", "Son niveau de batterie", "Sa position grâce aux satellites"], answer: 3, why: "Le GNSS, comme le GPS, donne la position." },
      { objective: "O1", q: "Le baromètre d'un drone mesure :", options: ["La direction du vent", "La pression de l'air, utilisée pour la hauteur", "La santé des cultures", "Les cycles de batterie"], answer: 1, why: "La pression de l'air change avec la hauteur." },
      { objective: "O2", q: "Pourquoi les batteries LiPo peuvent-elles être dangereuses ?", options: ["Elles sont lourdes", "Elles sont bruyantes", "Elles peuvent prendre feu si elles sont abîmées, trop chargées ou surchauffées", "Elles ne se chargent jamais"], answer: 2, why: "Beaucoup d'énergie stockée signifie un risque élevé en cas de mauvais traitement." },
      { objective: "O2", q: "Les batteries doivent être chargées :", options: ["Avec le bon chargeur, sous surveillance, sur une surface non inflammable", "La nuit sur un lit", "Dans une voiture chaude", "Avec n'importe quel chargeur qui s'adapte"], answer: 0, why: "Ces mesures réduisent le risque d'incendie." },
      { objective: "O2", q: "Un cycle de charge, c'est :", options: ["Une pièce de vélo", "Un plan de vol", "Un type de météo", "Une utilisation complète de la capacité d'une batterie"], answer: 3, why: "Noter les cycles montre le vieillissement de la batterie." },
      { objective: "O2", q: "Une batterie de drone abîmée et retirée du service doit aller :", options: ["Dans le feu de cuisine", "Dans un vrai point de collecte des déchets électroniques ou des piles", "Dans les ordures ordinaires", "Dans une rivière"], answer: 1, why: "Les batteries au lithium demandent une collecte et un recyclage sûrs." },
      { objective: "O3", q: "Le capteur de lumière solaire d'un drone multispectral :", options: ["Charge la batterie", "Mesure le vent", "Mesure la lumière reçue pour corriger les mesures", "Pulvérise de l'eau"], answer: 2, why: "Il aide à corriger les variations de lumière." },
      { objective: "O3", q: "Une charge utile mal fixée peut :", options: ["Perturber l'équilibre et le contrôle du drone", "Améliorer les photos", "Alléger le drone", "Accélérer la charge"], answer: 0, why: "Le contrôleur de vol attend une charge fixée et équilibrée." },
      { objective: "O3", q: "Les buses de pulvérisation doivent être vérifiées pour :", options: ["Leur couleur", "Les autocollants de marque", "La musique", "L'usure et les bouchages"], answer: 3, why: "Des buses usées ou bouchées appliquent une mauvaise quantité." },
      { objective: "O3", q: "Un bon entretien du système de pulvérisation remplace-t-il les autorisations de pulvérisation ?", options: ["Oui", "Non ; les autorisations aériennes et phytosanitaires restent nécessaires", "Seulement dans les petites fermes", "Seulement la nuit"], answer: 1, why: "La maintenance et l'autorisation légale sont deux exigences distinctes." },
      { objective: "O4", q: "L'inspection après le vol sert à :", options: ["Charger la radiocommande", "Planifier le prochain client", "Trouver les dommages ou l'usure du vol qui vient d'avoir lieu", "Retoucher les photos"], answer: 2, why: "Elle repère les problèmes avant le vol suivant." },
      { objective: "O4", q: "Comment nettoyer un drone après un vol poussiéreux ?", options: ["Brosse douce ou chiffon sec", "Eau à haute pression", "Papier de verre", "Essence"], answer: 0, why: "L'eau et les produits chimiques peuvent abîmer l'électronique." },
      { objective: "O5", q: "La maintenance programmée se planifie :", options: ["Seulement selon la couleur", "Seulement selon la météo", "Seulement selon le client", "Par heures de vol et par date, selon ce qui arrive en premier"], answer: 3, why: "Les pièces s'usent avec l'usage et avec le temps." },
      { objective: "O5", q: "Un registre de maintenance contient :", options: ["Seulement le prix du drone", "Date, heures, travaux, pièces, micrologiciel, qui l'a fait, résultat", "Les numéros de téléphone des agriculteurs", "Les prix des cultures"], answer: 1, why: "Des registres complets soutiennent la sécurité et la conformité." },
      { objective: "O6", q: "Le drone oscille en vol. Vérifiez d'abord :", options: ["La carte du client", "La météo du mois prochain", "Les hélices et les bras : dommages ou jeu", "La carte mémoire"], answer: 2, why: "Des hélices abîmées et des bras tordus causent des vibrations." },
      { objective: "O6", q: "Par très forte chaleur, vous devez :", options: ["Mettre les batteries à l'ombre et voler aux heures fraîches", "Laisser les batteries au soleil", "Voler sans arrêt sans repos", "Charger les batteries encore chaudes"], answer: 0, why: "La chaleur réduit la durée de vie des batteries et fatigue l'électronique." },
      { objective: "O6", q: "Une panne de sécurité revient malgré vos réparations. Vous devez :", options: ["Continuer à voler", "La cacher aux clients", "Masquer l'alerte", "Interdire le drone de vol et l'envoyer à un technicien qualifié"], answer: 3, why: "Une panne de sécurité répétée demande une réparation experte avant de voler." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du programme et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Liste des parties",
        objective: "O1",
        notYet: "Des parties principales manquent, ou leur rôle n'est pas expliqué.",
        meets: "Chaque partie principale de l'aéronef et du système au sol est listée avec son rôle.",
        exceeds: "Indique quelles parties s'usent et lesquelles demandent un étalonnage."
      },
      {
        name: "Soin des batteries",
        objective: "O2",
        notYet: "Les étapes de charge, de stockage ou de mise hors service manquent ou sont dangereuses.",
        meets: "Des étapes sûres pour la charge, le refroidissement, la charge de stockage, le transport et la mise hors service, avec le suivi des cycles.",
        exceeds: "Inclut un plan incendie pour la zone de charge."
      },
      {
        name: "Listes d'inspection",
        objective: "O4",
        notYet: "Pas de liste, ou des points clés comme les hélices et le verrou de la batterie manquent.",
        meets: "Les listes avant et après le vol couvrent la structure, les hélices, les moteurs, la charge utile, la batterie, les capteurs et les notes du registre.",
        exceeds: "Les vérifications de la charge utile correspondent au vrai travail du drone, comme la cartographie ou la pulvérisation."
      },
      {
        name: "Calendrier et registre",
        objective: "O5",
        notYet: "Pas d'intervalles, ou des champs manquent dans le registre.",
        meets: "Un calendrier par heures de vol et par date, une routine pour le micrologiciel, et un modèle de registre avec deux exemples d'entrées.",
        exceeds: "Les intervalles viennent du manuel du fabricant et la source est notée."
      },
      {
        name: "Tableau de diagnostic",
        objective: "O6",
        notYet: "Moins de cinq pannes, ou pas d'étapes.",
        meets: "Au moins cinq pannes courantes, chacune avec des premières vérifications simples et le moment où clouer le drone au sol.",
        exceeds: "Ajoute des mesures contre la poussière, la chaleur, la pluie et les coupures de courant dans les fermes de l'apprenant."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le programme de maintenance",
      "Les apprenants qui déclarent utiliser une liste d'inspection écrite et un registre de maintenance 30 jours plus tard (enquête de suivi)",
      "Les entreprises de drones ou les coopératives qui déclarent moins d'accidents, d'incidents de batterie ou de jours au sol après la formation",
      "Les apprenants qui suivent le cours de drones suivant ou une formation de technicien d'un fabricant"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour les leçons ; un vrai drone agricole, ou des photos claires d'un drone, pour s'exercer",
      "Le manuel du fabricant du drone, si possible",
      "Un cahier ou un tableur pour les listes, le calendrier et le registre",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour écrire le programme de maintenance"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites le tour d'un vrai drone (éteint, hélices retirées) pour nommer chaque partie.",
      "Manipulez les batteries seulement sur une surface non inflammable, et ne chargez, ne percez ni n'ouvrez jamais une batterie gonflée en classe.",
      "Utilisez le manuel du drone pour les intervalles et les procédures ; le cours ne donne que la méthode générale.",
      "Ne faites pas fonctionner les systèmes de pulvérisation avec du pesticide en classe ; entraînez-vous aux inspections avec de l'eau propre ou sans liquide.",
      "Évaluez le programme de maintenance avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
