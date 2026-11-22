"use strict";

// Koach Learn course (French translation of shared/ev-technician-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "ev-technician-basics-fr",
  lang: "fr",
  translationOf: "ev-technician-basics",
  category: "Workforce Development",
  name: "Les bases du métier de technicien en véhicules électriques (VE)",
  skills: "Nommer les pièces d'un VE, Respecter les règles de sécurité haute tension, Faire les calculs de recharge, Préparer l'entretien basse tension d'un VE, Préparer un parcours de certification ASE",
  outcome: "expliquer comment fonctionne un véhicule électrique, respecter les règles de sécurité haute tension qu'un nouvel employé d'atelier doit suivre, calculer des temps de recharge d'entraînement, préparer l'entretien courant dont un VE a besoin, et écrire votre propre plan daté vers la certification ASE et un emploi de technicien en VE.",
  about: [
    "Chaque année, il y a plus de véhicules électriques et hybrides sur les routes, et les ateliers ont besoin de techniciens qui les comprennent. Ce cours s'adresse aux personnes qui cherchent un emploi, aux anciens militaires, aux jeunes adultes, aux personnes qui réparent déjà des voitures et à toute personne curieuse du travail sur les véhicules électriques (VE).",
    "Vous allez découvrir les principales pièces d'un VE, les dangers de la haute tension et les règles qui vous protègent, le fonctionnement de la recharge, l'entretien dont les VE ont encore besoin, et le vrai parcours de certification : les tests A6 et A8 d'ASE (l'organisme américain qui certifie les techniciens automobiles), puis le test L3 sur les véhicules hybrides et électriques. Ce cours vous prépare. Il ne vous certifie pas, et il ne vous demande jamais de toucher des pièces haute tension. Ce travail s'apprend uniquement dans une formation encadrée et agréée, avec le bon équipement de protection.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites l'activité « Essayez maintenant » avec du papier, un stylo et la calculatrice de votre téléphone. Un court contrôle suit chaque leçon et chaque chapitre, et un quiz de 20 questions termine le cours. La dernière leçon vous fait construire votre propre Plan de départ technicien VE."
  ],
  finalTask: "Préparez votre Plan de départ technicien VE sur une page : (1) expliquez en 3 ou 4 phrases comment fonctionne un VE, en nommant ses principales pièces ; (2) écrivez les règles de sécurité haute tension que vous suivrez comme nouvel employé d'atelier ; (3) résolvez deux problèmes d'entraînement sur le temps de recharge en montrant vos calculs ; (4) écrivez une liste d'entretien basse tension pour un VE ; (5) écrivez votre parcours de certification avec de vraies dates (programme de formation, ASE A6 et A8, puis L3, et toute formation de l'employeur ou du constructeur), avec la page officielle de chaque étape ; et (6) écrivez une rubrique « Compétences VE » de 3 points pour votre CV.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui cherchent un emploi qualifié dans l'entretien automobile : demandeurs d'emploi, anciens militaires (beaucoup ont une expérience des véhicules ou de l'électricité), jeunes adultes, immigrés et employés actuels de vidange ou de pneus qui veulent évoluer. Certains ont déjà réparé des voitures à essence ; beaucoup n'ont jamais travaillé sur un VE.",
    startingPoint: "Savent faire des calculs simples avec une calculatrice et lire des consignes courtes. Certains connaissent les moteurs à essence et l'entretien de base d'une voiture ; la plupart ne connaissent pas les pièces d'un VE, les dangers de la haute tension ni les certifications demandées par les ateliers.",
    gap: "Les ateliers ont besoin d'employés capables d'entretenir les VE en sécurité et de savoir quand s'arrêter. Un nouvel employé qui touche des pièces orange haute tension sans formation peut en mourir. Les apprenants ont besoin du vocabulaire, des règles de sécurité, des tâches d'entretien courantes d'un VE et d'un parcours de certification clair pour être embauchés et évoluer.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (fin du primaire, début du collège environ)",
      "Aucun travail pratique sur la haute tension dans ce cours : ne touchez jamais les câbles orange, la batterie ni l'intérieur des bornes de recharge",
      "Outils gratuits uniquement : papier, stylo, calculatrice du téléphone et sites officiels",
      "Les règles et les frais de certification changent : les apprenants vérifient ase.com et les autres pages officielles",
      "Temps : leçons de 4 à 6 minutes, faciles à placer entre le travail et les rendez-vous"
    ],
    prerequisites: "Aucun. Les cours « Les métiers techniques qualifiés » et « Les bases de la sécurité au travail (OSHA) » sont utiles mais pas obligatoires."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste ou d'un dessin des pièces d'un VE", action: "nommer les principales pièces d'un véhicule électrique et dire à quoi sert chacune", standard: "en trouvant au moins 5 pièces sur 6" },
    { id: "O2", condition: "Face à une situation d'atelier avec un VE", action: "lister les dangers de la haute tension et la règle de sécurité pour chacun", standard: "en incluant « ne pas toucher les câbles orange ni la batterie sans formation » et la consignation (lockout/tagout)" },
    { id: "O3", condition: "À partir de chiffres d'entraînement pour une batterie et une borne", action: "calculer l'énergie nécessaire et le temps de recharge", standard: "sans erreur de calcul, en montrant votre démarche" },
    { id: "O4", condition: "Face à un VE venu pour un entretien courant", action: "écrire une liste d'entretien basse tension qui suit les informations d'entretien du constructeur", standard: "avec au moins 6 points corrects et aucune tâche haute tension" },
    { id: "O5", condition: "En utilisant ase.com et d'autres pages officielles", action: "lister les étapes de certification vers un emploi de technicien en VE", standard: "en indiquant la page source de chaque étape" },
    { id: "O6", condition: "En utilisant vos notes de ce cours", action: "écrire un Plan de départ technicien VE daté, avec une rubrique de compétences pour le CV", standard: "en remplissant chaque ligne de la grille d'évaluation" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les VE et comment rester en sécurité",
      lessons: [
        {
          title: "Les pièces d'un véhicule électrique",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les principales pièces d'un VE et dire à quoi sert chacune.",
          text: [
            "Un véhicule électrique (VE) roule grâce à l'électricité stockée dans une grosse batterie haute tension, le plus souvent sous le plancher. Sur beaucoup de VE, cette batterie fonctionne à environ 400 à 1 000 volts. C'est bien plus qu'une prise de maison, et cela peut tuer.",
            "La batterie stocke du courant continu (DC). Un onduleur le transforme en courant alternatif (AC), utilisé par le moteur électrique. Le moteur fait tourner les roues. Quand le conducteur ralentit, le moteur fonctionne à l'envers, comme un générateur, et renvoie un peu d'énergie dans la batterie. C'est le freinage régénératif.",
            "Le chargeur embarqué transforme l'AC d'une borne de recharge en DC pour remplir la batterie. Un convertisseur DC-DC abaisse la haute tension pour charger la batterie normale de 12 volts, qui alimente toujours les phares, la radio et les calculateurs. Les câbles haute tension sont en général orange vif.",
            "Un hybride (HEV) a un moteur à essence et un moteur électrique avec une petite batterie. Un hybride rechargeable (PHEV) a une plus grosse batterie qu'on peut recharger sur une prise, plus un moteur à essence."
          ],
          words: [["VE (véhicule électrique)", "un véhicule qui roule uniquement avec l'électricité d'une batterie."], ["Hybride (HEV)", "un véhicule avec un moteur à essence et un moteur électrique, qui ne se branche pas."], ["Hybride rechargeable (PHEV)", "un hybride avec une plus grosse batterie qu'on peut recharger sur une prise."], ["Batterie haute tension", "la grosse batterie qui alimente le moteur ; elle peut être mortelle."], ["Onduleur", "la pièce qui transforme le DC de la batterie en AC pour le moteur."], ["Freinage régénératif", "ralentir la voiture en utilisant le moteur comme générateur, ce qui renvoie de l'énergie dans la batterie."], ["Chargeur embarqué", "la pièce de la voiture qui transforme l'AC d'une borne en DC pour la batterie."], ["Convertisseur DC-DC", "la pièce qui abaisse la haute tension pour charger la batterie de 12 volts."]],
          slides: [
            { title: "La grosse batterie", bullets: ["Batterie haute tension, souvent sous le plancher", "Souvent 400 à 1 000 volts : mortel", "Les câbles orange portent la haute tension"] },
            { title: "Faire avancer la voiture", bullets: ["Onduleur : DC de la batterie vers AC du moteur", "Le moteur fait tourner les roues", "Le freinage régénératif renvoie de l'énergie"] },
            { title: "La recharge et la batterie de 12 volts", bullets: ["Chargeur embarqué : AC de la borne vers DC pour la batterie", "Le convertisseur DC-DC charge la batterie de 12 volts"] },
            { title: "VE, HEV, PHEV", bullets: ["VE : batterie seulement", "HEV : moteur à essence plus moteur électrique, sans prise", "PHEV : plus grosse batterie qui se branche, plus moteur à essence"] }
          ],
          sources: [{ name: "Département de l'Énergie des États-Unis, Alternative Fuels Data Center (AFDC) : entretien et sécurité des véhicules électriques", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Sur papier, dessinez une voiture simple vue de côté. Dessinez et nommez six pièces : batterie haute tension, onduleur, moteur électrique, chargeur embarqué, convertisseur DC-DC et batterie de 12 volts. Dessinez les câbles orange d'une autre couleur. À côté de chaque pièce, écrivez une ligne sur son rôle.",
          youCanNow: "nommer les principales pièces d'un VE et dire à quoi sert chacune.",
          quickCheck: [
            { objective: "O1", q: "De quelle couleur sont en général les câbles haute tension des VE ?", options: ["Noir", "Vert", "Orange", "Blanc"], answer: 2, why: "Les câbles haute tension sont en général orange vif pour que les employés repèrent le danger." },
            { objective: "O1", q: "À quoi sert le freinage régénératif ?", options: ["Il utilise le moteur pour ralentir la voiture et renvoyer de l'énergie dans la batterie", "Il ajoute du liquide de frein automatiquement", "Il recharge la voiture à partir d'un réservoir d'essence", "Il coupe la batterie de 12 volts"], answer: 0, why: "Au ralentissement, le moteur sert de générateur et renvoie de l'énergie vers la batterie." }
          ]
        },
        {
          title: "Sécurité haute tension : savoir quand s'arrêter",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lister les dangers de la haute tension dans un atelier et la règle de sécurité pour chacun.",
          text: [
            "Le système haute tension peut provoquer une électrocution, des brûlures et un arc électrique. Il peut rester dangereux après l'arrêt de la voiture, et une batterie endommagée peut prendre feu, même des heures ou des jours plus tard.",
            "Première règle pour un nouvel employé : ne touchez pas les câbles orange, la batterie, ni aucune pièce portant une étiquette d'avertissement haute tension. Seuls des techniciens formés et habilités travaillent sur le système haute tension. Ils suivent les informations d'entretien du constructeur pour couper le système, attendre le temps indiqué et vérifier qu'il n'y a plus de tension.",
            "Les techniciens formés portent des gants isolants adaptés à la tension, vérifiés avant chaque utilisation, et appliquent la consignation (lockout/tagout) pour que personne ne puisse remettre le courant pendant qu'ils travaillent. La règle d'OSHA (l'agence américaine de sécurité au travail) sur la consignation est la 29 CFR 1910.147.",
            "Les autres règles de l'atelier s'appliquent aussi : levez la voiture uniquement aux points de levage du constructeur (la batterie est dessous), gardez la zone dégagée, et signalez à un responsable toute batterie endommagée, qui fuit, qui fume ou qui chauffe. Éloignez-vous et n'essayez pas de la réparer."
          ],
          steps: ["Repérez les câbles orange et les étiquettes d'avertissement haute tension.", "Ne les touchez pas si vous n'êtes pas formé et habilité.", "Levez uniquement aux points de levage du constructeur.", "Signalez toute batterie endommagée, chaude, qui fume ou qui fuit, et éloignez-vous.", "Techniciens formés : couper, attendre, vérifier, consigner, selon les informations d'entretien."],
          words: [["Électrocution", "blessure quand l'électricité traverse votre corps."], ["Arc électrique", "une explosion soudaine de chaleur et de lumière quand l'électricité saute dans l'air."], ["Habilité", "autorisé par votre employeur parce que vous avez la bonne formation."], ["Gants isolants", "gants spéciaux en caoutchouc conçus pour protéger contre une certaine tension."], ["Consignation (lockout/tagout)", "étapes qui coupent et verrouillent le courant pour que personne ne puisse le remettre pendant le travail."], ["Informations d'entretien", "les étapes officielles de réparation du constructeur pour un véhicule."], ["Point de levage", "l'endroit sous la voiture où l'on peut la soulever en sécurité."]],
          slides: [
            { title: "Les dangers", bullets: ["Électrocution, brûlures et arc électrique", "Peut rester dangereux voiture arrêtée", "Une batterie endommagée peut prendre feu plus tard"] },
            { title: "Règle n° 1 pour les nouveaux", bullets: ["Ne touchez pas les câbles orange ni la batterie", "Ne touchez pas les pièces avec une étiquette haute tension", "Seuls des techniciens formés et habilités font ce travail"] },
            { title: "Comment travaillent les techniciens formés", bullets: ["Ils suivent les informations d'entretien du constructeur", "Couper, attendre, vérifier l'absence de tension", "Gants isolants adaptés ; consignation"] },
            { title: "Règles de tous les jours à l'atelier", bullets: ["Levez uniquement aux points du constructeur", "Signalez les batteries endommagées, chaudes ou qui fument", "Éloignez-vous ; n'essayez pas de réparer"] }
          ],
          sources: [
            { name: "OSHA : maîtrise des énergies dangereuses (consignation)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "Département de l'Énergie des États-Unis, AFDC : sécurité des VE et intervention d'urgence", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "Bureau of Labor Statistics des États-Unis (BLS) : techniciens et mécaniciens automobiles", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Situation d'entraînement : un VE arrive après un petit accrochage. Il y a une bosse sous la voiture, près de la batterie, et une odeur forte. Un collègue dit : « Débranche juste ce câble orange pour qu'on puisse la lever. » Sur papier, faites un tableau à deux colonnes : Danger et Ce que je fais. Écrivez au moins quatre lignes.",
          youCanNow: "repérer les dangers de la haute tension dans un atelier et dire la règle de sécurité pour chacun, y compris quand s'arrêter et appeler un technicien formé.",
          quickCheck: [
            { objective: "O2", q: "Vous êtes nouveau et vous voyez un câble orange sous une voiture sur laquelle vous travaillez. Que faites-vous ?", options: ["Je le débranche par sécurité", "Je le pousse sur le côté", "Je l'entoure de ruban adhésif", "Je n'y touche pas ; je préviens un technicien formé"], answer: 3, why: "Les câbles orange portent la haute tension ; seuls des techniciens formés et habilités travaillent dessus." },
            { objective: "O2", q: "À quoi sert la consignation (lockout/tagout) ?", options: ["À fermer l'atelier le soir", "À s'assurer que personne ne peut remettre le courant pendant le travail", "À étiqueter les pneus stockés", "À mettre sous clé les clés du client"], answer: 1, why: "La consignation garde le courant coupé pendant que quelqu'un travaille sur le système." }
          ]
        },
        {
          title: "Les bases de la recharge et les calculs de recharge (entraînement)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer l'énergie nécessaire et le temps de recharge à partir de chiffres d'entraînement.",
          text: [
            "Aux États-Unis, il existe trois niveaux de recharge courants. Le niveau 1 utilise une prise normale de 120 volts et il est lent. Le niveau 2 utilise 240 volts à la maison ou 208 volts dans beaucoup d'entreprises ; c'est la borne publique la plus courante. La recharge rapide DC envoie du DC directement dans la batterie et c'est la plus rapide.",
            "Les prises courantes sont J1772 (niveaux 1 et 2), CCS (J1772 plus deux broches pour la recharge rapide DC) et J3400, aussi appelée NACS, basée sur le modèle de Tesla. Installer une borne dans une maison ou une entreprise est un travail électrique réservé à un électricien agréé.",
            "La taille d'une batterie se mesure en kilowattheures (kWh). La puissance d'une borne se mesure en kilowatts (kW). Formule d'entraînement : heures = kWh nécessaires / kW de la borne. Tous les chiffres ici sont inventés, seulement pour s'entraîner. En réalité, la recharge ralentit quand la batterie se remplit, et les pertes la rendent plus longue."
          ],
          steps: ["Trouvez la taille de la batterie en kWh.", "Calculez ce dont vous avez besoin : kWh de la batterie x (pourcentage à ajouter / 100).", "Divisez les kWh nécessaires par les kW de la borne.", "Écrivez la réponse en heures et précisez que c'est une estimation."],
          words: [["Niveau 1", "recharge lente sur une prise normale de 120 volts."], ["Niveau 2", "recharge plus rapide à 240 ou 208 volts."], ["Recharge rapide DC", "la recharge la plus rapide, qui envoie du DC directement dans la batterie."], ["Kilowattheure (kWh)", "une mesure d'énergie ; la taille d'une batterie s'exprime en kWh."], ["Kilowatt (kW)", "une mesure de puissance ; la vitesse d'une borne s'exprime en kW."], ["J1772, CCS, J3400 (NACS)", "noms de prises de recharge courantes pour VE aux États-Unis."]],
          slides: [
            { title: "Trois niveaux de recharge", bullets: ["Niveau 1 : prise de 120 volts, lent", "Niveau 2 : 240 ou 208 volts, la plupart des bornes publiques", "Rapide DC : DC directement dans la batterie"] },
            { title: "Les prises", bullets: ["J1772 pour les niveaux 1 et 2", "CCS ajoute des broches de recharge rapide DC", "J3400 (NACS), basée sur le modèle de Tesla"] },
            { title: "Calculs de recharge (entraînement)", bullets: ["Heures = kWh nécessaires / kW de la borne", "Exemple : 60 kWh x 50 % = 30 kWh ; 30 / 7,5 kW = 4 heures"] },
            { title: "En réalité, c'est plus lent", bullets: ["La recharge ralentit quand la batterie se remplit", "Les réponses sont des estimations", "Installer une borne : électriciens agréés seulement"] }
          ],
          sources: [
            { name: "Département de l'Énergie des États-Unis, AFDC : recharger les véhicules électriques", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP : programme de formation aux infrastructures pour véhicules électriques (pour électriciens agréés)", url: "https://evitp.org/" }
          ],
          tryIt: "Entraînement seulement. Résolvez sur papier en montrant vos calculs : (a) Une batterie de 80 kWh passe de 20 % à 80 %. Combien de kWh cela fait-il ? (b) Combien de temps cela prendrait-il sur une borne de niveau 2 de 9,6 kW ? (c) Une batterie de 40 kWh a besoin de 10 kWh sur une prise de niveau 1 de 1,25 kW. Combien d'heures ? Réponses pour vérifier : (a) 48 kWh, (b) 5 heures, (c) 8 heures.",
          youCanNow: "nommer les niveaux de recharge et les prises, et estimer un temps de recharge à partir de chiffres d'entraînement.",
          quickCheck: [
            { objective: "O3", q: "Entraînement : il vous faut 24 kWh et la borne donne 6 kW. Combien de temps environ ?", options: ["2 heures", "18 heures", "4 heures", "30 heures"], answer: 2, why: "Heures = kWh / kW, donc 24 / 6 = 4 heures." },
            { objective: "O3", q: "Quel niveau de recharge utilise une prise domestique normale de 120 volts ?", options: ["Niveau 1", "Niveau 2", "Recharge rapide DC", "J3400 seulement"], answer: 0, why: "Le niveau 1 utilise une prise standard de 120 volts." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les VE et comment rester en sécurité",
        questions: [
          { objective: "O1", q: "Quelle pièce transforme le DC de la batterie en AC pour le moteur ?", options: ["La batterie de 12 volts", "L'onduleur", "Les plaquettes de frein", "La trappe de recharge"], answer: 1, why: "L'onduleur transforme le DC de la batterie en AC pour le moteur." },
          { objective: "O1", q: "À quoi sert le convertisseur DC-DC ?", options: ["À remplir la grosse batterie depuis la prise murale", "À faire tourner les roues", "À charger la batterie de 12 volts à partir du système haute tension", "À refroidir l'habitacle"], answer: 2, why: "Il abaisse la haute tension pour garder la batterie de 12 volts chargée." },
          { objective: "O2", q: "La voiture est arrêtée. Peut-on toucher le système haute tension sans danger ?", options: ["Oui, toujours", "Oui, si la radio est éteinte", "Oui, après une minute", "Pas forcément ; seuls les techniciens formés suivent les étapes de coupure et de vérification"], answer: 3, why: "La haute tension peut rester dangereuse voiture arrêtée ; les techniciens formés coupent, attendent et vérifient d'abord." },
          { objective: "O2", q: "Une batterie sous une voiture est chaude et fume. Que faites-vous ?", options: ["Je m'éloigne et je préviens tout de suite un responsable", "Je l'arrose d'eau moi-même", "Je lève la voiture pour regarder", "Je débranche les câbles orange"], answer: 0, why: "Une batterie endommagée peut prendre feu ; éloignez-vous et signalez-le." },
          { objective: "O3", q: "Entraînement : batterie de 60 kWh, ajouter 50 %. Combien de kWh cela fait-il ?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'entretien et votre chemin vers l'emploi",
      lessons: [
        {
          title: "L'entretien courant d'un VE",
          objectives: ["O4"],
          minutes: 5,
          goal: "Écrire une liste d'entretien basse tension pour un VE qui suit les informations d'entretien du constructeur.",
          text: [
            "Les VE demandent moins d'entretien que les voitures à essence : pas de vidange, pas de bougies, pas d'échappement. Mais ils ont quand même besoin d'entretien, et une grande partie est du travail basse tension qu'un nouveau technicien peut apprendre.",
            "Pneus : les VE sont souvent lourds, donc vérifiez la pression, la bande de roulement et l'usure des pneus, et faites la permutation comme l'indique le constructeur. Freins : avec le freinage régénératif, les plaquettes s'usent lentement, mais il faut quand même contrôler les freins, et les pièces peu utilisées peuvent rouiller ou se bloquer. Vérifiez aussi les essuie-glaces, les phares, les pièces de suspension et de direction, le filtre d'habitacle et la batterie de 12 volts.",
            "Certains VE utilisent un liquide de refroidissement pour la batterie et l'électronique. Les contrôles et les remplacements suivent le calendrier et les étapes du constructeur ; n'ouvrez jamais une pièce de refroidissement haute tension si vous n'êtes pas formé.",
            "Utilisez toujours les informations d'entretien du constructeur pour le véhicule exact : le calendrier, les points de levage et les étapes. Si une tâche touche quelque chose d'orange ou étiqueté haute tension, arrêtez-vous et confiez-la à un technicien formé."
          ],
          steps: ["Cherchez les informations d'entretien pour la marque, le modèle et l'année exacts.", "Levez uniquement aux points de levage indiqués.", "Contrôlez les pneus, les freins, les essuie-glaces, les phares, la suspension et la direction.", "Contrôlez le filtre d'habitacle et la batterie de 12 volts.", "Contrôlez le liquide de refroidissement uniquement comme l'indiquent les informations d'entretien.", "Arrêtez-vous et confiez tout ce qui est orange ou étiqueté haute tension."],
          words: [["Basse tension", "les systèmes normaux de 12 volts, comme les phares et la radio, sur lesquels on travaille plus en sécurité."], ["Permutation des pneus", "changer les pneus de place pour qu'ils s'usent de façon égale."], ["Filtre d'habitacle", "le filtre qui nettoie l'air qui entre dans l'habitacle."], ["Liquide de refroidissement", "le liquide qui empêche les pièces de trop chauffer."], ["Calendrier d'entretien", "la liste du constructeur qui dit quoi vérifier et quand."]],
          slides: [
            { title: "Moins d'entretien, mais pas zéro", bullets: ["Pas de vidange, de bougies ni d'échappement", "Il faut quand même des contrôles réguliers"] },
            { title: "Pneus et freins", bullets: ["Voitures lourdes : vérifiez pression, bande de roulement et usure", "Les freins s'usent lentement mais peuvent rouiller ou se bloquer", "Permutez les pneus comme l'indique le constructeur"] },
            { title: "Autres contrôles", bullets: ["Essuie-glaces, phares, suspension, direction", "Filtre d'habitacle et batterie de 12 volts", "Liquide de refroidissement selon les informations d'entretien"] },
            { title: "Connaissez votre limite", bullets: ["Utilisez les informations d'entretien de ce véhicule exact", "Levez uniquement aux points indiqués", "Orange ou étiquette haute tension ? Arrêtez et confiez"] }
          ],
          sources: [{ name: "Département de l'Énergie des États-Unis, AFDC : entretien des véhicules électriques", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Choisissez un modèle de VE que vous avez déjà vu. Sur papier, écrivez une liste d'entretien d'au moins 8 points pour une visite courante. Marquez chaque point BT (basse tension, vous pouvez le faire) ou STOP (haute tension, à confier). Puis vérifiez : avez-vous mis quelque chose d'orange dans la colonne BT ? Si oui, corrigez.",
          youCanNow: "écrire une liste d'entretien basse tension pour un VE et dire quels travaux confier à un technicien formé à la haute tension.",
          quickCheck: [
            { objective: "O4", q: "De quel travail un VE n'a-t-il PAS besoin ?", options: ["Permutation des pneus", "Vidanges", "Contrôle des freins", "Contrôle du filtre d'habitacle"], answer: 1, why: "Un véhicule 100 % électrique n'a pas d'huile moteur à vidanger." },
            { objective: "O4", q: "Où trouvez-vous les bons points de levage et le calendrier d'entretien d'un VE ?", options: ["En devinant à partir d'une autre voiture", "Dans une vidéo sur les réseaux sociaux", "Dans les souvenirs du client", "Dans les informations d'entretien du constructeur pour ce véhicule exact"], answer: 3, why: "Les informations d'entretien du constructeur donnent les bons points de levage et le bon calendrier." }
          ]
        },
        {
          title: "Certifications et formations pour travailler sur les VE",
          objectives: ["O5"],
          minutes: 5,
          goal: "Lister les étapes de certification vers un emploi de technicien en VE, avec la source officielle de chacune.",
          text: [
            "La plupart des techniciens automobiles commencent par un programme de formation dans un lycée, un community college (établissement public d'enseignement court aux États-Unis) ou une école technique, ou commencent comme employé de vidange ou de pneus et apprennent sur le tas. L'apprentissage et les programmes de formation des constructeurs sont d'autres portes d'entrée.",
            "ASE (National Institute for Automotive Service Excellence, l'institut américain de l'excellence en entretien automobile) propose les certifications de technicien les plus connues. Son test L3, Light Duty Hybrid/Electric Vehicle Specialist (spécialiste des véhicules légers hybrides et électriques), porte sur le diagnostic du système de batterie, de la chaîne de traction, de l'électronique de puissance et plus encore. Avant de vous inscrire au L3, vous devez réussir l'A6 (systèmes électriques et électroniques) et l'A8 (performance du moteur). La certification ASE demande aussi une expérience pratique de travail ; vérifiez les règles actuelles sur ase.com.",
            "Beaucoup de constructeurs forment aussi des techniciens sur leurs propres VE. Les électriciens qui installent des bornes peuvent suivre la formation EVITP, réservée aux électriciens agréés. Les frais, les règles des tests et les exigences d'expérience changent, alors vérifiez chaque page officielle avant de payer.",
            "Ce cours vous prépare à commencer. Il ne vous certifie pas."
          ],
          steps: ["Cherchez les formations en technologie automobile et les apprentissages près de chez vous.", "Lisez la page du test L3 d'ASE et notez ses prérequis (A6 et A8).", "Lisez les règles d'expérience de travail d'ASE.", "Demandez aux ateliers et aux concessionnaires de votre région quelles certifications et formations constructeur ils demandent.", "Écrivez chaque étape, une date cible et la page officielle."],
          words: [["ASE", "le National Institute for Automotive Service Excellence, qui certifie les techniciens automobiles aux États-Unis."], ["Certification", "la preuve que vous avez réussi un test et rempli les règles d'expérience."], ["Prérequis", "ce que vous devez terminer avant de pouvoir commencer l'étape suivante."], ["Diagnostiquer", "trouver ce qui ne va pas et pourquoi."], ["EVITP", "le programme de formation aux infrastructures pour véhicules électriques, qui forme des électriciens agréés à installer des bornes."]],
          slides: [
            { title: "Les portes d'entrée", bullets: ["Formations automobiles en lycée ou en community college", "Commencer comme employé de vidange ou de pneus", "Apprentissage et formations constructeur"] },
            { title: "Le parcours ASE vers les VE", bullets: ["Réussir l'A6, systèmes électriques et électroniques", "Réussir l'A8, performance du moteur", "Puis le L3, spécialiste des véhicules légers hybrides et électriques"] },
            { title: "À savoir aussi", bullets: ["ASE exige aussi une expérience pratique de travail", "Les constructeurs forment sur leurs propres VE", "EVITP est pour les électriciens agréés qui installent des bornes"] },
            { title: "Vérifiez avant de payer", bullets: ["Les règles et les frais changent : utilisez ase.com", "Écrivez chaque étape, une date et la source", "Ce cours vous prépare ; il ne vous certifie pas"] }
          ],
          sources: [
            { name: "ASE : test L3 Light Duty Hybrid/Electric Vehicle Specialist", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE : les tests", url: "https://www.ase.com/tests" },
            { name: "EVITP : programme de formation aux infrastructures pour véhicules électriques", url: "https://evitp.org/" },
            { name: "Bureau of Labor Statistics des États-Unis (BLS) : comment devenir technicien automobile", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Ouvrez la page du test L3 d'ASE. Notez les deux tests à réussir d'abord et trois sujets couverts par le L3. Puis cherchez une formation en technologie automobile ou un apprentissage près de chez vous et notez son nom et son adresse web.",
          youCanNow: "nommer le parcours ASE vers les VE (A6, A8, puis L3), dire ce qu'il demande d'autre et trouver une formation près de chez vous sur des pages officielles.",
          quickCheck: [
            { objective: "O5", q: "Quel test ASE est celui de spécialiste des véhicules hybrides et électriques ?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "Le L3 est le test ASE Light Duty Hybrid/Electric Vehicle Specialist." },
            { objective: "O5", q: "Que devez-vous réussir avant de vous inscrire au L3 d'ASE ?", options: ["L'A6 et l'A8", "Un test de permis poids lourd (CDL)", "L'épreuve de sciences du GED", "La section 608 de l'EPA"], answer: 0, why: "ASE exige l'A6 (systèmes électriques et électroniques) et l'A8 (performance du moteur) avant le L3." }
          ]
        },
        {
          title: "Votre Plan de départ technicien VE",
          objectives: ["O6"],
          minutes: 6,
          goal: "Écrire un Plan de départ technicien VE daté, avec une rubrique de compétences pour le CV.",
          text: [
            "Maintenant, rassemblez tout sur une page que vous pourrez apporter à un centre de formation, à un atelier ou à un concessionnaire. Un plan avec de vraies dates montre que vous êtes sérieux.",
            "Votre plan a six parties : le fonctionnement d'un VE avec vos propres mots ; vos règles de sécurité haute tension ; deux problèmes de recharge d'entraînement avec vos calculs ; une liste d'entretien basse tension ; votre parcours de certification avec dates et sources ; et une rubrique « Compétences VE » pour votre CV.",
            "Pour le CV, écrivez des choses vraies que vous savez faire maintenant, en points courts qui commencent par un verbe d'action. Par exemple : « Connaître les principales pièces de la chaîne de traction d'un VE et d'un hybride. » « Formé à la sensibilisation à la sécurité haute tension : repérer les câbles orange et s'arrêter pour appeler un technicien qualifié. » « Estimer un temps de recharge à partir de la taille de la batterie et de la borne. » Ajoutez l'expérience passée utile : entretien de voitures, travail sur les pneus ou les vidanges, véhicules militaires, aide-électricien ou engins d'entrepôt.",
            "Anciens militaires : beaucoup de compétences militaires en véhicules et en électricité sont utiles ici. Demandez à un centre pour l'emploi près de chez vous une aide pour la formation."
          ],
          steps: ["Écrivez votre explication en 3 ou 4 phrases du fonctionnement d'un VE.", "Écrivez vos règles de sécurité haute tension.", "Ajoutez deux problèmes de recharge d'entraînement avec vos calculs.", "Ajoutez votre liste d'entretien basse tension.", "Écrivez votre parcours de certification avec des dates cibles et les pages sources.", "Écrivez 3 points de CV qui commencent par un verbe d'action."],
          words: [["CV", "un document court qui présente vos compétences, votre expérience et vos formations aux employeurs."], ["Date cible", "le jour où vous prévoyez de terminer une étape."], ["Centre pour l'emploi", "un bureau public gratuit qui aide les gens à trouver un emploi et une formation ; aux États-Unis, beaucoup s'appellent American Job Centers."]],
          slides: [
            { title: "Une page, six parties", bullets: ["Fonctionnement d'un VE ; règles de sécurité", "Calculs de recharge ; liste d'entretien", "Parcours de certification daté ; rubrique CV"] },
            { title: "De vraies dates", bullets: ["Quand vous commencez une formation", "Quand vous visez l'A6 et l'A8", "Quand vous visez le L3, après l'expérience de travail"] },
            { title: "CV : compétences VE", bullets: ["Points courts qui commencent par un verbe d'action", "Seulement des choses vraies que vous savez faire", "Ajoutez l'expérience avec les voitures, les outils ou l'électricité"] },
            { title: "Trouver de l'aide", bullets: ["American Job Centers et services pour anciens militaires", "Demandez aux ateliers et concessionnaires ce qu'ils cherchent"] }
          ],
          sources: [{ name: "CareerOneStop : trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Activité finale : préparez votre Plan de départ technicien VE sur une page, avec les six parties. Mettez une vraie date à côté de chaque étape de formation et de certification, et l'adresse web de chaque exigence que vous avez vérifiée. Lisez vos points de CV à voix haute, comme en entretien d'embauche.",
          youCanNow: "montrer à un atelier ou à un centre de formation un plan écrit pour commencer à travailler sur les VE, avec des dates, des sources et une rubrique de compétences pour le CV.",
          quickCheck: [
            { objective: "O6", q: "Quel est le meilleur point de CV pour un premier emploi dans un atelier VE ?", options: ["« Certifié ASE L3. » (alors que vous ne l'êtes pas)", "« Passionné de voitures. »", "« Estimer un temps de recharge à partir de la taille de la batterie et de la borne. »", "« J'adore les Tesla. »"], answer: 2, why: "C'est vrai et précis ; n'affirmez jamais avoir une certification que vous n'avez pas." },
            { objective: "O6", q: "Votre plan dit « Obtenir la certification ASE ». Qu'est-ce qui le rend plus solide ?", options: ["Le supprimer", "L'écrire en majuscules", "Ajouter le nom d'un ami", "Nommer l'A6, l'A8 et le L3 avec des dates cibles et la page ase.com"], answer: 3, why: "Des tests nommés, des dates et la source officielle transforment un souhait en plan." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'entretien et votre chemin vers l'emploi",
        questions: [
          { objective: "O4", q: "Pourquoi faut-il contrôler les freins d'un VE alors qu'ils s'usent lentement ?", options: ["Les pièces peu utilisées peuvent rouiller ou se bloquer", "Les VE n'ont pas de freins", "Les freins rechargent complètement la batterie", "Ils n'ont jamais besoin de contrôle"], answer: 0, why: "Avec le freinage régénératif, les freins servent moins, donc leurs pièces peuvent rouiller ou se bloquer." },
          { objective: "O4", q: "Sur votre liste d'entretien, une tâche concerne un câble orange. Comment la marquez-vous ?", options: ["BT, je peux le faire", "Je la saute sans le dire à personne", "STOP : je la confie à un technicien formé à la haute tension", "Je la fais vite"], answer: 2, why: "Tout ce qui est orange ou étiqueté haute tension va à un technicien formé et habilité." },
          { objective: "O5", q: "De quoi la certification ASE a-t-elle besoin en plus de la réussite à un test ?", options: ["Un diplôme universitaire", "Une expérience pratique de travail", "Un permis poids lourd (CDL)", "Posséder un VE"], answer: 1, why: "La certification ASE demande une expérience de travail en plus de la réussite au test." },
          { objective: "O5", q: "À qui s'adresse la formation EVITP sur l'installation des bornes ?", options: ["À toute personne qui a un téléphone", "Aux vendeurs de voitures", "Aux clients", "Aux électriciens agréés"], answer: 3, why: "EVITP forme les électriciens agréés qui installent des bornes pour VE." },
          { objective: "O6", q: "Que doit avoir chaque étape de votre Plan de départ technicien VE ?", options: ["Une date cible et la page officielle que vous avez vérifiée", "Un prix deviné", "La signature d'un ami", "Rien de plus"], answer: 0, why: "Les dates et les sources rendent chaque étape réelle et vérifiable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du métier de technicien en véhicules électriques (VE)",
    questions: [
      { objective: "O1", q: "Où se trouve en général la batterie haute tension d'un VE ?", options: ["Dans le hayon du coffre", "Sous le plancher", "Derrière la radio", "Dans le volant"], answer: 1, why: "La plupart des batteries de VE sont placées sous le plancher." },
      { objective: "O1", q: "Qu'est-ce qui alimente les phares et la radio d'un VE ?", options: ["La batterie de 12 volts", "Les pneus", "Le câble de recharge", "Le réservoir d'essence"], answer: 0, why: "Une batterie normale de 12 volts alimente toujours les systèmes basse tension." },
      { objective: "O1", q: "Qu'est-ce qu'un hybride rechargeable (PHEV) ?", options: ["Une voiture sans batterie", "Une voiture à essence avec un chargeur de téléphone", "Un VE sans moteur", "Un hybride avec une plus grosse batterie qu'on peut recharger sur une prise"], answer: 3, why: "Un PHEV a un moteur à essence et une plus grosse batterie qui se branche." },
      { objective: "O1", q: "Quelle pièce transforme l'AC d'une borne de recharge en DC pour la batterie ?", options: ["Le moteur", "Les plaquettes de frein", "Le chargeur embarqué", "Le filtre d'habitacle"], answer: 2, why: "Le chargeur embarqué transforme l'AC de la borne en DC pour la batterie." },
      { objective: "O2", q: "Comme nouvel employé, quelle pièce ne devez-vous JAMAIS toucher sans formation ?", options: ["Les balais d'essuie-glace", "Les câbles orange haute tension", "Les bouchons de valve des pneus", "Le filtre d'habitacle"], answer: 1, why: "Les câbles orange portent une haute tension mortelle." },
      { objective: "O2", q: "Qu'est-ce qu'un arc électrique ?", options: ["Une explosion soudaine de chaleur et de lumière quand l'électricité saute dans l'air", "Un réglage des phares", "Un type de pneu", "Une prise de recharge"], answer: 0, why: "L'arc électrique est une explosion électrique qui peut brûler et blesser." },
      { objective: "O2", q: "Avant de travailler sur la haute tension, que fait un technicien formé ?", options: ["Il monte le son de la radio", "Il ouvre seulement le capot", "Il met des gants en coton", "Il coupe, attend, vérifie l'absence de tension et consigne selon les informations d'entretien"], answer: 3, why: "Couper, attendre, vérifier et consigner suivent les étapes du constructeur." },
      { objective: "O2", q: "Où soulevez-vous un VE sur un pont élévateur ?", options: ["Sous la batterie", "N'importe où sur une surface plate", "Uniquement aux points de levage du constructeur", "Par les pare-chocs"], answer: 2, why: "La batterie est dessous ; les points indiqués la protègent, et vous aussi." },
      { objective: "O3", q: "Entraînement : il faut 36 kWh sur une borne de 9 kW. Combien de temps ?", options: ["4 heures", "45 heures", "27 heures", "3 heures"], answer: 0, why: "36 / 9 = 4 heures." },
      { objective: "O3", q: "La taille d'une batterie se mesure en :", options: ["Miles par gallon", "Kilowattheures (kWh)", "Livres par pouce carré", "Gallons"], answer: 1, why: "L'énergie d'une batterie se mesure en kilowattheures." },
      { objective: "O3", q: "Quelle est en général la façon la plus rapide de recharger ?", options: ["Niveau 1", "Niveau 2", "Un câble de démarrage de 12 volts", "La recharge rapide DC"], answer: 3, why: "La recharge rapide DC envoie du DC directement dans la batterie à forte puissance." },
      { objective: "O3", q: "Pourquoi un temps de recharge calculé n'est-il qu'une estimation ?", options: ["Les bornes ne marchent jamais", "Les batteries n'ont pas de taille", "La recharge ralentit quand la batterie se remplit, et il y a des pertes", "kWh et kW veulent dire la même chose"], answer: 2, why: "En réalité, la recharge ralentit près du plein et perd un peu d'énergie." },
      { objective: "O4", q: "Quel est un bon point pour une liste d'entretien de VE ?", options: ["Vérifier la pression et la bande de roulement des pneus", "Vidanger l'huile moteur", "Remplacer les bougies", "Réparer le pot d'échappement"], answer: 0, why: "Les VE ont besoin de contrôles des pneus ; ils n'ont ni huile moteur, ni bougies, ni échappement." },
      { objective: "O4", q: "Pourquoi faut-il surveiller de près l'usure des pneus sur les VE ?", options: ["Les VE n'ont pas de pneus", "Les VE sont souvent lourds", "Les pneus rechargent la batterie", "Les pneus de VE ne s'usent jamais"], answer: 1, why: "Les véhicules lourds peuvent user les pneus plus vite, alors vérifiez-les souvent." },
      { objective: "O4", q: "Où trouvez-vous les bonnes étapes pour le liquide de refroidissement d'un VE ?", options: ["Dans le manuel de n'importe quelle voiture à essence", "En devinant", "Dans les souvenirs d'un collègue", "Dans les informations d'entretien du constructeur"], answer: 3, why: "Les contrôles du liquide de refroidissement de chaque VE suivent les informations d'entretien de son constructeur." },
      { objective: "O5", q: "Que veut dire ASE ?", options: ["Auto Sales Experts (experts en vente automobile)", "Association of Safe Electricians (association des électriciens prudents)", "National Institute for Automotive Service Excellence (institut de l'excellence en entretien automobile)", "American Solar Energy (énergie solaire américaine)"], answer: 2, why: "ASE est le National Institute for Automotive Service Excellence." },
      { objective: "O5", q: "Où vérifiez-vous les règles et les frais actuels des tests ASE ?", options: ["ase.com", "Une publication sur les réseaux sociaux", "Une publicité commerciale", "Les vieilles notes d'un ami"], answer: 0, why: "Le site officiel d'ASE donne les règles actuelles." },
      { objective: "O5", q: "Ce cours vous certifie-t-il comme technicien en VE ?", options: ["Oui, après le quiz", "Non ; il vous prépare, et la certification vient d'ASE et d'autres programmes", "Oui, si vous le finissez en un jour", "Seulement pour les hybrides"], answer: 1, why: "Le cours vous prépare ; les certifications viennent d'ASE, des constructeurs et de programmes agréés." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans votre Plan de départ technicien VE ?", options: ["Le mot de passe de votre banque", "Une certification que vous n'avez pas", "Vos couleurs de voiture préférées", "Des dates cibles pour l'A6, l'A8 et le L3"], answer: 3, why: "Des dates pour chaque étape rendent le plan réel." },
      { objective: "O6", q: "Un bon point de CV doit être :", options: ["Long et vague", "Sur une compétence que vous espérez apprendre", "Vrai, précis et commencer par un verbe d'action", "Copié sur un inconnu"], answer: 2, why: "Les employeurs font confiance à des points courts, vrais et précis." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà sur les VE ?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Fonctionnement d'un VE", objective: "O1", notYet: "Oublie la batterie ou l'onduleur, ou mélange leurs rôles.", meets: "Nomme la batterie, l'onduleur, le moteur, le chargeur embarqué, le convertisseur DC-DC et la batterie de 12 volts, et dit à quoi sert chacun.", exceeds: "Explique aussi le freinage régénératif et la différence entre un VE, un HEV et un PHEV." },
      { name: "Règles de sécurité haute tension", objective: "O2", notYet: "Ne dit pas de rester loin des câbles orange et de la batterie.", meets: "Dit de ne pas toucher les pièces orange ou étiquetées haute tension sans formation, d'utiliser les points de levage du constructeur et de signaler les batteries endommagées.", exceeds: "Explique aussi couper, attendre, vérifier et consigner, et qui a le droit de le faire." },
      { name: "Calculs de recharge", objective: "O3", notYet: "Une erreur de calcul, ou aucune démarche montrée.", meets: "Les deux problèmes sont justes, avec la formule et les unités.", exceeds: "Dit aussi pourquoi le temps réel sera plus long." },
      { name: "Liste d'entretien", objective: "O4", notYet: "Contient une vidange, ou une tâche haute tension marquée comme possible.", meets: "Au moins 6 points basse tension corrects, avec les tâches haute tension marquées STOP.", exceeds: "Indique que chaque point suit les informations d'entretien du constructeur pour le véhicule exact." },
      { name: "Parcours de certification", objective: "O5", notYet: "Pas de dates, ou des étapes sans source.", meets: "Nomme une voie de formation et l'ASE A6, A8 et L3, chacun avec une date cible et une adresse web.", exceeds: "Ajoute une formation constructeur ou un employeur local, et un plan de secours." },
      { name: "Rubrique du CV", objective: "O6", notYet: "Les points sont vagues ou affirment une certification que l'apprenant n'a pas.", meets: "Trois points vrais qui commencent par un verbe d'action et correspondent au travail en atelier VE.", exceeds: "Relie l'expérience passée (entretien de voitures, véhicules militaires, électricité) aux tâches sur VE." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'activité finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent dans une formation en technologie automobile, un apprentissage ou une formation constructeur dans les 90 jours",
      "Apprenants qui réussissent l'ASE A6 ou A8 dans les 12 mois (selon leurs déclarations)",
      "Apprenants embauchés dans un atelier automobile ou au service après-vente d'un concessionnaire dans les 6 mois (enquête de suivi ou rapport d'un partenaire)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur avec internet pour lire les leçons et consulter les pages officielles",
      "Papier, stylo, stylos de couleur et une calculatrice (celle du téléphone suffit)",
      "Facultatif : une image imprimée des pièces d'un VE à légender",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Dans ce cours, personne ne touche le système haute tension d'un véhicule. Si vous visitez un atelier ou montrez un véhicule, un technicien formé et habilité dirige et les apprenants regardent seulement.",
      "Faites le test de départ ensemble, puis un chapitre par séance, et faites les calculs de recharge au tableau.",
      "Demandez aux apprenants d'ouvrir en direct la page du L3 d'ASE et de trouver eux-mêmes les prérequis.",
      "Invitez un chef d'atelier de concession, un formateur automobile de community college ou un technicien VE certifié ASE à parler de l'embauche.",
      "Notez l'activité finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois.",
      "Orientez les anciens militaires et les personnes qui reprennent le travail vers les American Job Centers pour une aide à la formation."
    ]
  }
};
