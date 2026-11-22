"use strict";

// Koach Learn course (French translation of shared/solar-installer-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "solar-installer-basics-fr",
  lang: "fr",
  translationOf: "solar-installer-basics",
  category: "Workforce Development",
  name: "Les bases du métier d'installateur de panneaux solaires",
  skills: "Nommer les parties d'un système solaire, Repérer les dangers d'un chantier solaire, Faire les calculs solaires de base, Suivre les étapes d'une installation, Préparer son parcours vers une attestation solaire",
  outcome: "expliquer comment fonctionne un système solaire dans une maison, repérer les principaux dangers d'un chantier solaire, faire des calculs solaires simples d'entraînement, mettre dans l'ordre les étapes d'une installation sur un toit, et rédiger votre propre plan daté pour obtenir un emploi solaire de premier niveau et l'attestation NABCEP PV Associate.",
  about: [
    "Les installateurs solaires posent des panneaux solaires sur les toits et au sol, et aident à les raccorder. Beaucoup commencent comme aide dans une équipe d'installation et apprennent sur le terrain. Ce cours s'adresse aux personnes en recherche d'emploi, aux anciens militaires, aux jeunes adultes, aux personnes qui sortent de prison et à toute personne qui veut travailler dehors, avec ses mains.",
    "Vous apprendrez les parties d'un système solaire, les règles de sécurité qui protègent la vie des installateurs, les calculs de base que font les équipes, les étapes d'une installation sur un toit, et les vraies attestations que recherchent les employeurs, comme la NABCEP PV Associate. Ce cours vous prépare ; il ne vous donne ni licence ni attestation. Celles-ci viennent de NABCEP (l'organisme nord-américain qui certifie les professionnels de l'énergie), de votre État et des programmes de formation agréés.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites l'activité « Essayez maintenant » avec une feuille et un stylo, ou la calculatrice gratuite de votre téléphone. Un court contrôle suit chaque leçon et chaque chapitre, et un quiz de 20 questions termine le cours. La dernière leçon vous fait construire votre propre Plan de départ dans le solaire."
  ],
  finalTask: "Préparez votre Plan de départ dans le solaire sur une page : (1) expliquez en 3 ou 4 phrases comment fonctionne un système solaire résidentiel raccordé au réseau, en nommant ses parties principales ; (2) remplissez une liste de sécurité pour un chantier d'entraînement sur un toit ; (3) résolvez deux problèmes d'entraînement de dimensionnement en montrant vos calculs ; (4) mettez dans l'ordre les étapes d'une installation sur un toit ; (5) écrivez votre parcours vers l'attestation avec de vraies dates (programme de formation, date visée pour l'examen NABCEP PV Associate, toute exigence de l'État ou de l'employeur que vous avez vérifiée sur la page officielle) ; et (6) rédigez une rubrique « Compétences solaires » de 3 points pour votre CV.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un métier manuel dans l'énergie propre : personnes en recherche d'emploi, anciens militaires, jeunes adultes, personnes qui sortent de prison, immigrés et adultes qui reprennent des études. La plupart n'ont aucune expérience du solaire ; certains ont travaillé dans le bâtiment, la couverture de toits ou comme aide-électricien.",
    startingPoint: "Ils savent faire des calculs de base avec une calculatrice et lire de courtes consignes. La plupart ne sont jamais allés sur un chantier solaire et ne connaissent ni les parties d'un système solaire, ni les règles de sécurité, ni les attestations que demandent les employeurs.",
    gap: "Les équipes solaires embauchent des aides qui connaissent déjà les mots de base, respectent les règles de sécurité et présentent un plan de formation. Les apprenants doivent en savoir assez pour parler avec assurance en entretien, rester en sécurité pendant leurs premières semaines dans une équipe, et choisir les bonnes étapes de formation et d'attestation sans gaspiller d'argent.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire et début du collège)",
      "Aucun travail pratique sur un toit ni sur l'électricité dans ce cours : les vraies installations s'apprennent dans une équipe encadrée ou dans un programme de formation agréé",
      "Outils gratuits seulement : papier, stylo, calculatrice du téléphone et sites web officiels",
      "Les exigences pour les licences, les frais et les attestations changent et varient selon les États : les apprenants les vérifient sur les pages officielles",
      "Temps : leçons de 4 à 6 minutes qui s'intègrent entre le travail et les rendez-vous"
    ],
    prerequisites: "Aucun. Les cours « Les carrières des métiers qualifiés » et « Les bases de la sécurité au travail (OSHA) » sont utiles, mais pas obligatoires."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'un dessin ou d'une liste des parties d'un système solaire résidentiel raccordé au réseau", action: "nommer chaque partie principale et dire à quoi elle sert", standard: "en trouvant au moins 5 parties sur 6" },
    { id: "O2", condition: "À partir d'une situation d'entraînement sur un chantier solaire", action: "lister les dangers et la mesure de sécurité pour chacun", standard: "en nommant les chutes, l'électrocution, la chaleur et le port de charges, avec une mesure de sécurité correcte pour chacun" },
    { id: "O3", condition: "À partir de chiffres d'entraînement sur des panneaux, des volts et des ampères", action: "calculer des watts, la taille d'un système et la tension d'une chaîne", standard: "sans erreur de calcul, en montrant votre démarche" },
    { id: "O4", condition: "À partir des étapes d'une installation solaire sur un toit données dans le désordre", action: "remettre les étapes dans le bon ordre et dire qui fait chacune", standard: "avec au plus une étape mal placée" },
    { id: "O5", condition: "En utilisant les sites officiels de NABCEP et de votre État", action: "lister les attestations et les licences nécessaires pour un emploi solaire de premier niveau là où vous vivez", standard: "en indiquant la page source de chacune" },
    { id: "O6", condition: "En utilisant vos notes de ce cours", action: "rédiger un Plan de départ dans le solaire avec des dates et une rubrique de compétences pour votre CV", standard: "en remplissant chaque ligne de la grille d'évaluation" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne le solaire et comment rester en sécurité",
      lessons: [
        {
          title: "Les parties d'un système solaire résidentiel",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les parties principales d'un système solaire raccordé au réseau et dire à quoi sert chacune.",
          text: [
            "Les panneaux solaires, aussi appelés modules, transforment la lumière du soleil en électricité. Ils produisent du courant continu (DC, sigle anglais). Les maisons utilisent du courant alternatif (AC), donc un onduleur transforme le DC en AC.",
            "Les panneaux reposent sur une structure de montage (racking), un cadre en métal fixé au toit par des boulons ou posé au sol. Des câbles vont des panneaux à l'onduleur, puis au tableau électrique principal de la maison. Des interrupteurs de sectionnement permettent aux ouvriers de couper certaines parties du système. Un compteur mesure l'électricité que la maison consomme et celle qu'elle envoie au réseau.",
            "La plupart des systèmes résidentiels sont raccordés au réseau : ils restent reliés aux lignes de la compagnie d'électricité, qu'on appelle le réseau. Le surplus d'électricité peut partir vers le réseau, et la nuit la maison utilise l'électricité du réseau. Certaines maisons ajoutent aussi une batterie pour stocker l'électricité pour plus tard ou pour les coupures de courant."
          ],
          words: [["Panneau solaire (module)", "un panneau plat qui transforme la lumière du soleil en électricité."], ["PV (photovoltaïque)", "la technologie qui produit de l'électricité à partir de la lumière ; les panneaux solaires sont des panneaux PV."], ["DC (courant continu)", "une électricité qui circule dans un seul sens, comme celle d'une pile ou d'un panneau solaire."], ["AC (courant alternatif)", "une électricité qui change de sens plusieurs fois par seconde ; les maisons utilisent de l'AC."], ["Onduleur", "le boîtier qui transforme le DC des panneaux en AC pour la maison."], ["Structure de montage (racking)", "le cadre en métal qui tient les panneaux."], ["Raccordé au réseau", "relié aux lignes de la compagnie d'électricité."], ["Sectionneur", "un interrupteur qui coupe le courant dans une partie du système."]],
          slides: [
            { title: "Les panneaux produisent du DC", bullets: ["Les panneaux solaires (modules) transforment la lumière en électricité DC", "PV veut dire photovoltaïque : de l'électricité à partir de la lumière"] },
            { title: "Du toit à la maison", bullets: ["La structure de montage tient les panneaux", "Les câbles vont à l'onduleur", "L'onduleur transforme le DC en AC pour la maison"] },
            { title: "Interrupteurs de sécurité et compteur", bullets: ["Les sectionneurs coupent certaines parties du système", "Le compteur mesure l'électricité consommée et envoyée au réseau"] },
            { title: "Systèmes raccordés au réseau", bullets: ["Ils restent reliés aux lignes de la compagnie d'électricité", "Le surplus d'électricité peut partir vers le réseau", "La batterie est facultative : pour plus tard ou pour les coupures"] }
          ],
          sources: [{ name: "Département de l'Énergie des États-Unis : guide du propriétaire pour passer au solaire", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
          tryIt: "Sur une feuille, dessinez une maison simple avec des panneaux sur le toit. Dessinez et nommez six cases dans l'ordre : panneaux, structure de montage, onduleur, sectionneur, tableau électrique principal, compteur. À côté de chacune, écrivez une courte ligne sur son rôle. Puis cachez vos noms et dites chaque partie à voix haute.",
          youCanNow: "nommer les parties principales d'un système solaire raccordé au réseau et dire à quoi sert chacune.",
          quickCheck: [
            { objective: "O1", q: "Quelle partie transforme le DC des panneaux en AC pour la maison ?", options: ["La structure de montage", "Le compteur", "L'onduleur", "Le sectionneur"], answer: 2, why: "L'onduleur transforme le DC des panneaux en AC, que les maisons utilisent." },
            { objective: "O1", q: "Que veut dire « raccordé au réseau » ?", options: ["Le système est relié aux lignes de la compagnie d'électricité", "Les panneaux sont attachés avec une corde", "La maison n'a pas de compteur", "Le système ne fonctionne que la nuit"], answer: 0, why: "Un système raccordé au réseau reste relié au réseau de la compagnie : le surplus peut partir et l'électricité du réseau peut entrer." }
          ]
        },
        {
          title: "Rester en sécurité sur un chantier solaire",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lister les principaux dangers d'un chantier solaire et la mesure de sécurité pour chacun.",
          text: [
            "Les chutes sont le plus grand danger du travail solaire. Dans le bâtiment, l'OSHA (l'agence fédérale américaine de la sécurité et de la santé au travail) exige une protection contre les chutes quand vous travaillez à 6 pieds ou plus au-dessus d'un niveau inférieur. Sur un toit, cela veut souvent dire un système antichute individuel : un harnais complet, une longe et un point d'ancrage sur le toit, installés par une personne formée. Vérifiez votre harnais avant chaque utilisation.",
            "L'électrocution est le deuxième grand danger. Les panneaux solaires produisent de l'électricité dès que la lumière les touche, et on ne peut pas éteindre le soleil. Les câbles des panneaux peuvent être sous tension en plein jour, même quand un interrupteur est coupé. En tant que nouvel aide, vous ne raccordez et ne touchez aucun câble : seuls des ouvriers qualifiés et formés font le travail électrique, en suivant les étapes de consignation (verrouillage et étiquetage).",
            "Échelles : posez-les sur un sol ferme et plat, faites dépasser les montants d'au moins 3 pieds au-dessus du bord du toit, et gardez trois points d'appui. Chaleur : buvez de l'eau souvent, reposez-vous à l'ombre, et prévenez votre chef d'équipe si vous avez un vertige ou vous sentez mal. Port de charges : les panneaux sont grands et prennent le vent, alors portez-les à deux et soulevez avec les jambes.",
            "Portez vos équipements de protection individuelle (EPI) : casque, lunettes de sécurité, gants de travail et chaussures antidérapantes. Arrêtez le travail et prévenez votre chef d'équipe dès que quelque chose vous semble dangereux."
          ],
          steps: ["Avant de monter : vérifiez l'échelle, la météo et votre harnais.", "Sur le toit : restez attaché à un point d'ancrage dès que vous êtes à 6 pieds ou plus de hauteur.", "Considérez chaque panneau et chaque câble comme sous tension ; ne touchez pas aux branchements si vous n'êtes pas qualifié.", "Buvez de l'eau, faites des pauses à l'ombre et portez les panneaux à deux.", "Arrêtez-vous et signalez tout danger à votre chef d'équipe."],
          words: [["OSHA", "l'agence fédérale américaine de la sécurité et de la santé au travail (Occupational Safety and Health Administration)."], ["Protection contre les chutes", "les équipements et installations qui vous empêchent de tomber ou arrêtent une chute sans danger."], ["Système antichute individuel", "un harnais complet, une longe et un point d'ancrage qui vous retiennent si vous tombez."], ["EPI", "équipements de protection individuelle : le matériel de sécurité que vous portez, comme le casque et les gants."], ["Consignation", "les étapes qui coupent et verrouillent le courant pour que personne ne puisse le remettre pendant le travail."], ["Sous tension", "parcouru par l'électricité."]],
          slides: [
            { title: "Les chutes : le danger n° 1", bullets: ["OSHA : protection contre les chutes à 6 pieds ou plus dans le bâtiment", "Harnais, longe et point d'ancrage sur le toit", "Vérifiez votre harnais avant chaque utilisation"] },
            { title: "L'électrocution", bullets: ["Les panneaux produisent du courant dès que la lumière les touche", "Les câbles peuvent être sous tension même interrupteur coupé", "Seuls des ouvriers qualifiés font le travail électrique"] },
            { title: "Échelles, chaleur et port de charges", bullets: ["Montants à 3 pieds au-dessus du bord du toit ; sol ferme et plat", "Eau, ombre et pauses", "Portez les panneaux à deux"] },
            { title: "Protégez-vous et parlez", bullets: ["Casque, lunettes, gants, chaussures antidérapantes", "Arrêtez le travail et prévenez votre chef si c'est dangereux"] }
          ],
          sources: [
            { name: "OSHA : protection contre les chutes", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA : 29 CFR 1926.501, obligation de protection contre les chutes (bâtiment)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501" },
            { name: "OSHA : 29 CFR 1926.1053, échelles", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
            { name: "OSHA : chaleur", url: "https://www.osha.gov/heat-exposure" },
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : installateurs photovoltaïques", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" }
          ],
          tryIt: "Situation d'entraînement : c'est un matin chaud de juillet. Votre équipe pose 18 panneaux sur le toit d'une maison à deux niveaux. L'échelle est posée sur de l'herbe molle, un collègue n'a pas de harnais, et les câbles d'un panneau pendent. Sur une feuille, faites une liste en deux colonnes : Danger et Mesure de sécurité. Écrivez au moins quatre lignes (chutes, électrocution, chaleur, port de charges, et l'échelle).",
          youCanNow: "repérer les principaux dangers d'un chantier solaire et nommer la mesure de sécurité pour chacun.",
          quickCheck: [
            { objective: "O2", q: "Dans le bâtiment, à partir de quelle hauteur l'OSHA exige-t-elle une protection contre les chutes ?", options: ["10 pieds", "20 pieds", "Seulement en haut du toit", "6 pieds"], answer: 3, why: "La règle de l'OSHA pour le bâtiment demande une protection contre les chutes à 6 pieds ou plus au-dessus d'un niveau inférieur." },
            { objective: "O2", q: "Il fait soleil et le sectionneur est coupé. Pouvez-vous toucher les câbles du panneau sans danger ?", options: ["Oui, l'interrupteur rend tout sûr", "Non, les panneaux produisent du courant dès que la lumière les touche, donc considérez les câbles comme sous tension", "Oui, si vous portez des gants de travail", "Seulement si l'onduleur ne fait pas de bruit"], answer: 1, why: "Les panneaux continuent à produire de l'électricité à la lumière, donc leurs câbles peuvent rester sous tension." }
          ]
        },
        {
          title: "Calculs solaires de base (entraînement seulement)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer des watts, la taille d'un système et la tension d'une chaîne à partir de chiffres d'entraînement.",
          text: [
            "Les équipes utilisent chaque jour quelques formules simples. Tous les chiffres de cette leçon sont inventés, pour s'entraîner seulement. Les vrais projets utilisent l'étiquette du panneau, la fiche technique du fabricant et le code de l'électricité, et sont vérifiés par un concepteur qualifié.",
            "Puissance : watts = volts x ampères. Un panneau d'entraînement qui donne 40 volts à 10 ampères produit 40 x 10 = 400 watts. 1 000 watts font 1 kilowatt (kW).",
            "Taille du système : nombre de panneaux x watts par panneau. 20 panneaux d'entraînement de 400 watts chacun = 8 000 watts, soit 8 kW.",
            "Chaînes : des panneaux branchés en série forment une chaîne (string). En série, les tensions s'additionnent et les ampères restent les mêmes. Trois panneaux d'entraînement de 40 volts chacun en série = 120 volts. En parallèle, les ampères s'additionnent et la tension reste la même."
          ],
          steps: ["Écrivez d'abord la formule.", "Mettez les chiffres avec leurs unités (V, A, W).", "Faites le calcul à la calculatrice.", "Passez des watts aux kilowatts en divisant par 1 000.", "Vérifiez : la réponse est-elle logique ?"],
          words: [["Volt (V)", "une mesure de la poussée ou de la pression électrique."], ["Ampère (A)", "une mesure de la quantité d'électricité qui circule."], ["Watt (W)", "une mesure de la puissance : volts fois ampères."], ["Kilowatt (kW)", "1 000 watts."], ["Série", "branchés bout à bout sur une seule ligne ; les tensions s'additionnent."], ["Parallèle", "branchés côte à côte ; les ampères s'additionnent."], ["Chaîne (string)", "un groupe de panneaux branchés en série."]],
          slides: [
            { title: "Entraînement seulement", bullets: ["Des chiffres inventés pour apprendre la méthode", "Les vrais projets : fiche technique, code et concepteur qualifié"] },
            { title: "Watts = volts x ampères", bullets: ["40 V x 10 A = 400 W", "1 000 W = 1 kW"] },
            { title: "Taille du système", bullets: ["Panneaux x watts par panneau", "20 x 400 W = 8 000 W = 8 kW"] },
            { title: "Série et parallèle", bullets: ["Série : les volts s'additionnent, les ampères restent les mêmes", "3 x 40 V en série = 120 V", "Parallèle : les ampères s'additionnent, les volts restent les mêmes"] }
          ],
          tryIt: "Entraînement seulement. Résolvez sur une feuille en montrant vos calculs : (a) Un panneau donne 36 volts à 11 ampères. Combien de watts ? (b) Une maison a 24 panneaux de 350 watts. Quelle est la taille du système en kW ? (c) Cinq panneaux de 40 volts chacun sont branchés en série. Quelle est la tension de la chaîne ? Réponses pour vous vérifier : (a) 396 W, (b) 8 400 W = 8,4 kW, (c) 200 V.",
          youCanNow: "calculer des watts, la taille d'un système et la tension d'une chaîne à partir de chiffres d'entraînement, en montrant vos calculs.",
          quickCheck: [
            { objective: "O3", q: "Entraînement seulement : 15 panneaux de 400 watts chacun. Quelle est la taille du système ?", options: ["4 kW", "6 kW", "15 kW", "400 kW"], answer: 1, why: "15 x 400 W = 6 000 W, et 6 000 / 1 000 = 6 kW." },
            { objective: "O3", q: "Entraînement seulement : quatre panneaux de 40 volts chacun sont branchés en série. Quelle est la tension de la chaîne ?", options: ["40 V", "80 V", "10 V", "160 V"], answer: 3, why: "En série, les tensions s'additionnent : 4 x 40 V = 160 V." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne le solaire et comment rester en sécurité",
        questions: [
          { objective: "O1", q: "Quel type d'électricité les panneaux solaires produisent-ils ?", options: ["De l'AC", "Du DC", "De l'énergie au gaz", "De l'énergie de batterie uniquement"], answer: 1, why: "Les panneaux produisent du courant continu (DC) ; l'onduleur le transforme en AC." },
          { objective: "O1", q: "À quoi sert la structure de montage ?", options: ["Elle tient les panneaux sur le toit ou au sol", "Elle mesure l'électricité envoyée au réseau", "Elle transforme le DC en AC", "Elle stocke l'électricité pour la nuit"], answer: 0, why: "La structure de montage est le cadre en métal qui tient les panneaux." },
          { objective: "O2", q: "Vous êtes sur un toit à 12 pieds de hauteur. Que devez-vous utiliser ?", options: ["Rien, si vous faites attention", "Seulement un casque", "Une protection contre les chutes, comme un harnais attaché à un point d'ancrage", "Une échelle plus haute"], answer: 2, why: "À 6 pieds ou plus dans le bâtiment, il faut une protection contre les chutes." },
          { objective: "O2", q: "Vous êtes un nouvel aide, et un collègue vous demande de raccorder deux câbles de panneau. Que faites-vous ?", options: ["Vous les raccordez vite avec des gants", "Vous attendez qu'un nuage passe", "Vous demandez de l'aide au client", "Vous refusez et prévenez votre chef d'équipe, car seuls des ouvriers qualifiés font le travail électrique"], answer: 3, why: "Les raccordements électriques sont réservés aux ouvriers qualifiés et formés ; les nouveaux aides ne touchent pas aux câbles." },
          { objective: "O3", q: "Entraînement seulement : un panneau donne 50 volts à 8 ampères. Combien de watts cela fait-il ?", options: ["58 W", "400 W", "42 W", "800 W"], answer: 1, why: "Watts = volts x ampères, donc 50 x 8 = 400 W." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Du toit à votre premier emploi",
      lessons: [
        {
          title: "Les étapes d'une installation sur un toit",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mettre dans l'ordre les étapes d'une installation solaire sur un toit et dire qui fait chacune.",
          text: [
            "Chaque installation suit un parcours. D'abord, une visite technique du site : quelqu'un vérifie l'âge et l'état du toit, son orientation, l'ombre des arbres et le tableau électrique de la maison. Ensuite, un concepteur prévoit l'emplacement des panneaux et le câblage.",
            "Puis vient le permis. Le service de l'urbanisme de la ville ou du comté examine les plans avant le début des travaux. Le jour de l'installation, l'équipe installe le matériel de sécurité, trace des repères sur le toit et fixe les supports dans les chevrons. Chaque support reçoit un solin (flashing) et est rendu étanche pour que le toit ne fuie pas. Ensuite, l'équipe boulonne la structure de montage et pose les panneaux.",
            "Un électricien qualifié ou un ouvrier titulaire d'une licence fait les raccordements électriques, en suivant le code national de l'électricité des États-Unis (NEC) et les règles locales. Ensuite, l'inspecteur local du bâtiment inspecte le système. Enfin, la compagnie d'électricité autorise le raccordement du système au réseau : c'est souvent ce qu'on appelle l'autorisation de mise en service. C'est seulement alors que le système est mis en marche.",
            "Les aides portent et préparent surtout le matériel, aident à poser la structure et les panneaux, gardent le chantier propre et suivent les consignes du chef d'équipe."
          ],
          steps: ["Visite technique : toit, orientation, ombre, tableau électrique.", "Conception : emplacement des panneaux et plan de câblage.", "Permis de la ville ou du comté.", "Mise en place de la sécurité, puis supports sur le toit, avec solin et étanchéité.", "Structure de montage, puis pose des panneaux.", "Raccordements électriques par des ouvriers qualifiés.", "Inspection par l'inspecteur local.", "Accord de la compagnie d'électricité (autorisation de mise en service), puis mise en marche."],
          words: [["Visite technique", "une visite pour vérifier si un toit ou un terrain convient au solaire."], ["Permis", "l'autorisation officielle de la ville ou du comté pour faire les travaux."], ["Solin (flashing)", "une pièce en métal ou autre matériau qui empêche l'eau d'entrer là où quelque chose traverse le toit."], ["Chevron", "une des pièces de bois qui portent un toit."], ["NEC", "le code national de l'électricité des États-Unis (NFPA 70), les règles pour un travail électrique sûr que les États et les villes adoptent."], ["Inspection", "un contrôle par un agent officiel pour vérifier que le travail respecte le code."], ["Autorisation de mise en service", "l'accord de la compagnie d'électricité pour mettre en marche un système raccordé au réseau."]],
          slides: [
            { title: "Avant l'arrivée de l'équipe", bullets: ["Visite technique : toit, orientation, ombre, tableau", "Conception : emplacement et câblage", "Permis de la ville ou du comté"] },
            { title: "Le jour de l'installation", bullets: ["D'abord la mise en place de la sécurité", "Supports dans les chevrons, avec solin et étanchéité", "Structure de montage, puis panneaux"] },
            { title: "Pour finir", bullets: ["Travail électrique par des ouvriers qualifiés, selon le NEC", "Inspection locale", "Accord de la compagnie d'électricité, puis mise en marche"] },
            { title: "Le rôle des aides", bullets: ["Porter et préparer le matériel", "Aider à poser la structure et les panneaux", "Garder le chantier propre ; suivre le chef d'équipe"] }
          ],
          sources: [
            { name: "Département de l'Énergie des États-Unis : guide du propriétaire pour passer au solaire", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
            { name: "NFPA 70 : code national de l'électricité (vérifiez quelle édition votre État applique)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" }
          ],
          tryIt: "Écrivez chacune des 8 étapes de l'installation sur un petit morceau de papier. Mélangez-les, puis remettez-les dans l'ordre sans regarder la leçon. À côté de chacune, écrivez qui la fait : concepteur, ville ou comté, équipe, électricien qualifié, inspecteur ou compagnie d'électricité. Comparez votre ordre avec la leçon.",
          youCanNow: "mettre dans l'ordre les étapes d'une installation solaire sur un toit et dire qui fait chacune.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui vient en général juste avant le jour de l'installation ?", options: ["L'obtention du permis", "L'inspection finale", "L'autorisation de mise en service de la compagnie d'électricité", "La mise en marche du système"], answer: 0, why: "Le permis de la ville ou du comté arrive avant le début des travaux sur le toit." },
            { objective: "O4", q: "Pourquoi les supports sur le toit reçoivent-ils un solin et sont-ils rendus étanches ?", options: ["Pour faire briller les panneaux", "Pour que le toit ne fuie pas", "Pour accélérer l'inspection", "Pour que les panneaux produisent plus d'électricité"], answer: 1, why: "Le solin et l'étanchéité empêchent l'eau d'entrer là où les boulons traversent le toit." }
          ]
        },
        {
          title: "Attestations, licences et formation",
          objectives: ["O5"],
          minutes: 5,
          goal: "Lister les attestations et les licences nécessaires pour un emploi solaire de premier niveau là où vous vivez, avec la source officielle de chacune.",
          text: [
            "Beaucoup d'installateurs commencent comme aides et apprennent sur le terrain, souvent pendant un mois à un an. Certains suivent d'abord une formation courte dans un community college (établissement public d'enseignement supérieur court), une école technique ou un programme d'apprentissage. Les électriciens, les couvreurs et les ouvriers du bâtiment peuvent souvent passer plus vite au solaire.",
            "NABCEP (North American Board of Certified Energy Practitioners, l'organisme nord-américain de certification des professionnels de l'énergie) délivre des attestations solaires bien connues. Celle de premier niveau est la NABCEP PV Associate. Vous pouvez y avoir droit en terminant une formation auprès d'un organisme de formation enregistré par NABCEP pour le programme Associate (NABCEP Associate Registered Training Provider), ou en prouvant au moins six mois de travail solaire à temps plein, puis en réussissant l'examen. Plus tard, les installateurs expérimentés peuvent viser la certification NABCEP (Board Certification), comme PV Installation Professional.",
            "Les licences sont fixées par les États, et par certaines villes. Certains États exigent une licence solaire ou électrique pour certains travaux ; d'autres non. Les frais, les règles d'examen et les exigences changent : vérifiez donc vous-même la page officielle de NABCEP et l'organisme de délivrance des licences de votre État avant de payer quoi que ce soit.",
            "Ce cours vous prépare à commencer. Il ne vous donne ni attestation ni licence."
          ],
          steps: ["Lisez la page du programme Associate de NABCEP.", "Trouvez un organisme de formation enregistré, ou comptez vos mois de travail solaire.", "Cherchez les règles pour le solaire auprès de l'organisme des licences d'entrepreneur ou d'électricien de votre État.", "Notez chaque exigence et la page où vous l'avez trouvée.", "Demandez aux employeurs solaires de votre région quelles attestations ils veulent."],
          words: [["NABCEP", "le North American Board of Certified Energy Practitioners, qui délivre des attestations solaires."], ["Attestation", "la preuve que vous avez réussi un examen ou atteint un niveau exigé."], ["Licence", "l'autorisation d'un État ou d'une ville pour faire certains travaux."], ["Apprentissage", "un emploi payé avec formation, où vous apprenez auprès d'ouvriers expérimentés."], ["Organisme de formation enregistré", "une école que NABCEP inscrit sur sa liste comme agréée pour préparer à son examen Associate."]],
          slides: [
            { title: "Les façons d'entrer", bullets: ["Commencer comme aide et apprendre sur le terrain", "Formations courtes, community colleges, apprentissages", "L'expérience en électricité, toiture ou bâtiment aide"] },
            { title: "NABCEP PV Associate", bullets: ["Attestation solaire de premier niveau", "Accès par une formation enregistrée ou 6 mois de travail solaire", "Puis réussir l'examen"] },
            { title: "Les licences sont locales", bullets: ["Fixées par votre État et parfois votre ville", "Certains États exigent une licence solaire ou électrique"] },
            { title: "Vérifiez avant de payer", bullets: ["Page officielle de NABCEP et organisme des licences de votre État", "Notez chaque exigence et sa source", "Ce cours vous prépare ; il ne vous donne pas de licence"] }
          ],
          sources: [
            { name: "NABCEP : programme Associate (PV Associate)", url: "https://www.nabcep.org/certification/associate-program/" },
            { name: "NABCEP : certifications", url: "https://www.nabcep.org/certifications/" },
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : comment devenir installateur photovoltaïque", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
            { name: "CareerOneStop : outil de recherche de licences", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Ouvrez la page du programme Associate de NABCEP et notez les façons d'avoir droit à la PV Associate. Puis cherchez le nom de votre État suivi de « solar contractor license » et trouvez la page officielle de l'organisme des licences de votre État (elle se termine souvent par .gov). Écrivez une ligne sur ce qu'elle dit, avec l'adresse web.",
          youCanNow: "nommer l'attestation NABCEP de premier niveau, dire comment y avoir droit et trouver les règles de licence de votre État sur la page officielle.",
          quickCheck: [
            { objective: "O5", q: "Quelle est l'attestation solaire photovoltaïque de premier niveau de NABCEP ?", options: ["EPA Section 608", "CDL Class A", "NABCEP PV Associate", "CompTIA A+"], answer: 2, why: "La NABCEP PV Associate est l'attestation solaire photovoltaïque de premier niveau." },
            { objective: "O5", q: "Où vérifier si votre État exige une licence pour le travail solaire ?", options: ["Dans une publication sur les réseaux sociaux", "Dans une publicité pour une formation rapide en ligne", "Auprès d'un ami qui vit dans un autre État", "Sur la page officielle de l'organisme des licences de votre État"], answer: 3, why: "Chaque État fixe ses licences, donc la page officielle de son organisme est la source fiable." }
          ]
        },
        {
          title: "Votre Plan de départ dans le solaire",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rédiger un Plan de départ dans le solaire avec des dates et une rubrique de compétences pour votre CV.",
          text: [
            "Rassemblez maintenant tout sur une page que vous pourrez apporter à un programme de formation ou à un entretien. Un plan avec de vraies dates montre à un employeur que vous êtes sérieux.",
            "Votre plan a six parties : comment fonctionne le solaire, avec vos propres mots ; une liste de sécurité ; deux problèmes d'entraînement avec vos calculs ; les étapes de l'installation dans l'ordre ; votre parcours vers l'attestation avec des dates et des sources ; et une rubrique « Compétences solaires » pour votre CV.",
            "Pour la rubrique du CV, écrivez des choses vraies que vous savez faire maintenant, en points courts qui commencent par un mot d'action. Par exemple : « Connaître les parties d'un système PV raccordé au réseau et la transformation du DC en AC. » « Formé aux dangers d'un chantier solaire : protection contre les chutes, électrocution, chaleur et port de charges en sécurité. » « Calculer la taille d'un système et la tension d'une chaîne. » Ajoutez l'expérience passée qui aide : bâtiment, toiture, armée, entrepôt ou tout emploi avec des outils, de la hauteur ou du travail d'équipe.",
            "Anciens militaires et personnes ayant un casier judiciaire : beaucoup d'employeurs du solaire recrutent dans ces groupes. Soyez honnête dans vos candidatures, et demandez une aide à la formation à un centre local pour l'emploi ou à un programme de réinsertion."
          ],
          steps: ["Rédigez votre explication de 3 ou 4 phrases d'un système raccordé au réseau.", "Recopiez votre liste de sécurité de la leçon 2 et terminez-la.", "Ajoutez deux problèmes d'entraînement avec vos calculs.", "Listez les 8 étapes de l'installation dans l'ordre.", "Écrivez votre parcours vers l'attestation avec des dates visées et les pages sources.", "Rédigez 3 points de CV qui commencent par un mot d'action."],
          words: [["CV", "un court document qui présente vos compétences, vos emplois et vos formations aux employeurs."], ["Date visée", "le jour où vous prévoyez de terminer une étape."], ["Centre pour l'emploi", "un bureau public gratuit qui aide à trouver un emploi et une formation ; aux États-Unis, beaucoup s'appellent American Job Centers."]],
          slides: [
            { title: "Une page, six parties", bullets: ["Comment fonctionne le solaire ; liste de sécurité", "Calculs d'entraînement ; étapes de l'installation", "Parcours daté vers l'attestation ; rubrique du CV"] },
            { title: "De vraies dates", bullets: ["Quand vous commencerez la formation", "Quand vous visez l'examen NABCEP PV Associate", "Quand vous postulerez à des emplois d'aide"] },
            { title: "CV : compétences solaires", bullets: ["Des points courts qui commencent par un mot d'action", "Seulement des choses vraies que vous savez faire", "Ajoutez l'expérience avec des outils, en hauteur ou en équipe"] },
            { title: "Faites-vous aider", bullets: ["American Job Centers et programmes de réinsertion", "Demandez une aide à la formation et des employeurs locaux"] }
          ],
          sources: [{ name: "CareerOneStop : trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tâche finale : préparez votre Plan de départ dans le solaire sur une page, avec les six parties. Mettez une vraie date à côté de chaque étape d'attestation et d'emploi, et l'adresse web de chaque exigence que vous avez vérifiée. Lisez vos points de CV à voix haute, comme en entretien.",
          youCanNow: "montrer à un employeur ou à un programme de formation un plan écrit pour commencer dans le solaire, avec des dates, des sources et une rubrique de compétences pour le CV.",
          quickCheck: [
            { objective: "O6", q: "Quel est le meilleur point de CV pour un emploi d'aide dans le solaire ?", options: ["« Travailleur acharné. »", "« Formé aux dangers d'un chantier solaire : protection contre les chutes, électrocution, chaleur et port de charges en sécurité. »", "« Électricien solaire titulaire d'une licence. » (alors que ce n'est pas vrai)", "« J'aime le soleil. »"], answer: 1, why: "Il est vrai, précis et commence par un mot d'action ; n'affirmez jamais avoir une licence que vous n'avez pas." },
            { objective: "O6", q: "Qu'est-ce qui rend un Plan de départ dans le solaire plus solide ?", options: ["De vraies dates visées et la page source de chaque exigence", "Aucune date, pour rester souple", "Copier le plan d'un ami", "Laisser de côté la partie sécurité"], answer: 0, why: "Des dates et des sources officielles transforment un souhait en un plan auquel un employeur peut faire confiance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Du toit à votre premier emploi",
        questions: [
          { objective: "O4", q: "Qui donne l'accord final pour raccorder un système au réseau ?", options: ["L'aide", "Le fabricant du panneau", "Le voisin du client", "La compagnie d'électricité"], answer: 3, why: "La compagnie d'électricité donne l'autorisation de mise en service avant que le système soit mis en marche." },
          { objective: "O4", q: "Quelle étape vient en premier ?", options: ["La pose des panneaux", "L'inspection", "La visite technique", "La mise en marche du système"], answer: 2, why: "La visite technique vérifie le toit, l'orientation, l'ombre et le tableau électrique avant tout le reste." },
          { objective: "O5", q: "Quelle est une façon d'avoir droit à l'examen NABCEP PV Associate ?", options: ["Terminer une formation auprès d'un organisme de formation enregistré par NABCEP pour le programme Associate", "Acheter un panneau solaire", "Regarder une vidéo en ligne", "Travailler une journée sur un toit"], answer: 0, why: "La voie de la formation passe par un organisme de formation enregistré ; une autre voie est d'avoir au moins six mois de travail solaire." },
          { objective: "O5", q: "Ce cours vous donne-t-il une licence solaire ?", options: ["Oui, après le quiz", "Non ; il vous prépare, et les licences viennent de votre État ou de votre ville", "Oui, si vous le terminez en un jour", "Seulement dans les États ensoleillés"], answer: 1, why: "Le cours vous prépare ; les attestations viennent de NABCEP et les licences de l'État ou de la ville." },
          { objective: "O6", q: "Votre plan dit « Passer l'examen PV Associate. » Que devez-vous ajouter ?", options: ["Rien", "Le nom d'un ami", "Une date visée et la page officielle que vous avez vérifiée", "Une photo d'un panneau"], answer: 2, why: "Une date et une source rendent l'étape réelle et vérifiable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du métier d'installateur de panneaux solaires",
    questions: [
      { objective: "O1", q: "En quoi les panneaux solaires transforment-ils la lumière du soleil ?", options: ["En chaleur seulement", "En électricité DC", "En gaz naturel", "En électricité AC sans onduleur"], answer: 1, why: "Les panneaux solaires PV produisent de l'électricité en courant continu (DC)." },
      { objective: "O1", q: "Quelle partie mesure l'électricité qu'une maison consomme et envoie au réseau ?", options: ["Le compteur", "La structure de montage", "Le solin", "Le harnais"], answer: 0, why: "Le compteur mesure l'électricité qui entre et qui sort." },
      { objective: "O1", q: "Un système résidentiel qui reste relié aux lignes de la compagnie d'électricité s'appelle :", options: ["Tout-terrain", "Autoportant", "Sur batterie uniquement", "Raccordé au réseau"], answer: 3, why: "Les systèmes raccordés au réseau sont reliés au réseau de la compagnie d'électricité." },
      { objective: "O1", q: "À quoi sert une batterie dans certaines maisons solaires ?", options: ["À tenir les panneaux sur le toit", "À transformer l'AC en DC pour le compteur", "À stocker l'électricité pour plus tard ou pour les coupures", "À remplacer l'onduleur"], answer: 2, why: "Une batterie stocke l'électricité pour l'utiliser plus tard, par exemple la nuit ou pendant une coupure." },
      { objective: "O2", q: "Quel est le plus grand danger du travail d'installation solaire ?", options: ["Les coupures de papier", "Les chutes depuis les toits et les échelles", "La musique forte", "La pluie sur le camion"], answer: 1, why: "Les chutes sont le danger n° 1 pour les installateurs solaires." },
      { objective: "O2", q: "Quel équipement fait partie d'un système antichute individuel ?", options: ["Les lunettes de sécurité", "Les chaussures de travail", "Un harnais complet, une longe et un point d'ancrage", "Une ceinture à outils"], answer: 2, why: "Ensemble, le harnais, la longe et le point d'ancrage arrêtent une chute." },
      { objective: "O2", q: "Il fait très chaud et un collègue a un vertige. Que faites-vous ?", options: ["Vous prévenez le chef d'équipe, l'emmenez à l'ombre et lui donnez de l'eau", "Vous lui dites de continuer à travailler", "Vous l'envoyez monter à l'échelle", "Vous n'en tenez pas compte jusqu'au déjeuner"], answer: 0, why: "Un vertige peut être un coup de chaleur : l'ombre, l'eau, le repos et prévenir le chef d'équipe passent en premier." },
      { objective: "O2", q: "Comment porter un grand panneau solaire ?", options: ["Seul, au-dessus de la tête", "Au bord du toit quand il y a du vent", "Par les câbles", "À deux, en soulevant avec les jambes"], answer: 3, why: "Les panneaux sont grands et prennent le vent : on les porte à deux, en utilisant les jambes." },
      { objective: "O3", q: "Entraînement seulement : 30 volts x 9 ampères = ?", options: ["39 W", "270 W", "21 W", "2 700 W"], answer: 1, why: "Watts = volts x ampères : 30 x 9 = 270 W." },
      { objective: "O3", q: "Entraînement seulement : 25 panneaux de 400 watts. Quelle est la taille du système ?", options: ["10 kW", "4 kW", "25 kW", "1 kW"], answer: 0, why: "25 x 400 W = 10 000 W = 10 kW." },
      { objective: "O3", q: "Dans une chaîne en série, que devient la tension ?", options: ["Elle reste la même", "Elle tombe à zéro", "Les tensions s'additionnent", "Elle est divisée par deux"], answer: 2, why: "En série, la tension de chaque panneau s'ajoute à la tension de la chaîne." },
      { objective: "O3", q: "Combien de watts y a-t-il dans 1 kilowatt ?", options: ["10", "100", "10 000", "1 000"], answer: 3, why: "Kilo veut dire 1 000, donc 1 kW = 1 000 W." },
      { objective: "O4", q: "Que se passe-t-il avant le début des travaux sur le toit ?", options: ["Le permis de la ville ou du comté", "L'inspection finale", "L'autorisation de mise en service", "La mise en marche du système"], answer: 0, why: "Le permis est accordé avant le début de l'installation." },
      { objective: "O4", q: "Qui fait les raccordements électriques sur une installation solaire ?", options: ["N'importe quel nouvel aide", "Le client", "Un électricien qualifié ou un ouvrier titulaire d'une licence", "Le releveur de compteur de la compagnie d'électricité"], answer: 2, why: "Le travail électrique est fait par des ouvriers qualifiés qui suivent le NEC et les règles locales." },
      { objective: "O4", q: "Quelle est la dernière étape avant la mise en marche du système ?", options: ["La visite technique", "La conception", "La pose de la structure de montage", "L'autorisation de mise en service de la compagnie d'électricité"], answer: 3, why: "L'accord de la compagnie d'électricité vient après l'inspection et avant la mise en marche." },
      { objective: "O5", q: "Que propose NABCEP ?", options: ["Des permis de conduire", "Des attestations solaires comme la PV Associate", "Des permis de construire", "Des factures d'électricité"], answer: 1, why: "NABCEP délivre des attestations solaires et des certifications." },
      { objective: "O5", q: "Qui fixe les règles de licence pour le travail solaire et électrique ?", options: ["Chaque État, et parfois la ville", "Le fabricant des panneaux", "NABCEP pour tous les États", "Le client"], answer: 0, why: "Les licences sont fixées par les États et parfois par les autorités locales." },
      { objective: "O5", q: "Une publicité en ligne dit que vous serez « installateur solaire titulaire d'une licence en 2 jours ». Que faites-vous ?", options: ["Vous payez tout de suite", "Vous la partagez avec vos amis", "Vous leur donnez votre numéro de sécurité sociale américain (Social Security number)", "Vous vérifiez cette promesse sur les pages de NABCEP et de l'organisme des licences de votre État"], answer: 3, why: "Les pages officielles vous donnent les vraies exigences avant que vous payiez." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans votre Plan de départ dans le solaire ?", options: ["Le mot de passe de votre banque", "Des dates visées pour la formation et l'examen PV Associate", "La liste de vos chansons préférées", "Une licence que vous n'avez pas"], answer: 1, why: "Des dates pour chaque étape rendent le plan réel." },
      { objective: "O6", q: "Un bon point de CV doit être :", options: ["Long et vague", "Copié sur un inconnu", "Vrai, précis et commencer par un mot d'action", "Sur une compétence que vous comptez apprendre un jour"], answer: 2, why: "Les employeurs font confiance aux points courts, vrais et précis." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà du solaire ?", from: [0, 2, 4, 6, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Comment fonctionne le solaire", objective: "O1", notYet: "L'explication oublie l'onduleur ou confond AC et DC.", meets: "Nomme les panneaux, la structure de montage, l'onduleur, le sectionneur, le compteur et le réseau, et dit à quoi sert chacun.", exceeds: "Explique aussi, avec ses propres mots, pourquoi le sectionneur compte pour la sécurité pendant l'entretien et pourquoi les panneaux sont sous tension dès qu'il fait jour." },
      { name: "Liste de sécurité", objective: "O2", notYet: "Oublie les chutes ou l'électrocution, ou ne donne aucune mesure de sécurité.", meets: "Liste les chutes, l'électrocution, la chaleur et le port de charges, chacun avec une mesure de sécurité correcte (dont la protection contre les chutes à 6 pieds).", exceeds: "Ajoute la mise en place de l'échelle et une règle d'arrêt du travail, et dit qui prévenir." },
      { name: "Calculs d'entraînement", objective: "O3", notYet: "Une erreur de calcul, ou aucun calcul montré.", meets: "Les deux problèmes sont justes, avec la formule et les unités.", exceeds: "Vérifie aussi que chaque réponse est logique et passe correctement des watts aux kW." },
      { name: "Étapes de l'installation", objective: "O4", notYet: "Deux étapes ou plus dans le désordre, ou le permis ou l'inspection manque.", meets: "Les 8 étapes dans l'ordre, avec au plus une mal placée, et qui fait chacune.", exceeds: "Explique pourquoi le solin et l'accord de la compagnie d'électricité sont importants." },
      { name: "Parcours vers l'attestation", objective: "O5", notYet: "Pas de dates, ou des exigences sans source.", meets: "Nomme la NABCEP PV Associate et une façon d'y avoir droit, plus la vérification de la licence dans l'État, chacune avec une date visée et une adresse web.", exceeds: "Nomme un organisme de formation enregistré ou un employeur local précis, et un plan de secours." },
      { name: "Rubrique du CV", objective: "O6", notYet: "Les points sont vagues ou affirment une licence ou une attestation que l'apprenant n'a pas.", meets: "Trois points vrais qui commencent par un mot d'action et correspondent au travail solaire.", exceeds: "Relie l'expérience passée (bâtiment, armée, entrepôt) à des tâches du solaire." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent à un programme de formation solaire ou à un apprentissage dans les 90 jours",
      "Apprenants qui réussissent l'examen NABCEP PV Associate dans les 12 mois (selon leur propre déclaration)",
      "Apprenants embauchés comme aides ou installateurs solaires dans les 6 mois (enquête de suivi ou rapport d'un partenaire)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur avec internet pour lire les leçons et consulter les pages officielles",
      "Du papier, un stylo et une calculatrice (celle du téléphone suffit)",
      "Facultatif : une image imprimée d'un système solaire résidentiel à annoter",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Dans ce cours, personne ne monte sur un toit ni ne touche de pièce électrique. Si vous montrez du vrai matériel, gardez-le débranché, à l'abri de la lumière et posé au sol.",
      "Faites le test de départ ensemble, puis un chapitre par séance, et travaillez les calculs d'entraînement au tableau.",
      "Demandez aux apprenants de chercher en direct la page des licences de leur propre État ; les exigences varient d'un État à l'autre.",
      "Invitez un installateur solaire local, un centre de formation syndical ou un organisme de formation enregistré par NABCEP à parler du recrutement.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une ligne Pas encore à la fois.",
      "Pour les apprenants qui ont un casier judiciaire ou qui sont sous contrôle judiciaire : orientez-les vers des programmes de réinsertion et d'emploi, et rappelez-leur d'être honnêtes dans leurs candidatures."
    ]
  }
};
