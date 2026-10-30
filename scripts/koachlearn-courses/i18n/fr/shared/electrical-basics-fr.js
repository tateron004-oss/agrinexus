"use strict";

// Koach Learn course (French translation of shared/electrical-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "electrical-basics-fr",
  lang: "fr",
  translationOf: "electrical-basics",
  category: "Workforce Development",
  name: "Les bases du métier d'électricien",
  skills: "Utiliser la loi d'Ohm et la formule de la puissance, Lire un schéma électrique simple, Appliquer la consignation et vérifier avant de toucher, Lire un mètre ruban et un multimètre, Préparer votre parcours vers un apprentissage d'électricien",
  outcome: "faire les calculs électriques de base, lire un circuit simple, expliquer les règles de sécurité qui gardent les électriciens en vie, prendre des mesures précises et suivre un plan daté pour postuler à un apprentissage d'électricien et avancer vers une licence.",
  about: [
    "Les électriciens installent le câblage des maisons, des bureaux, des usines, des installations solaires et des bornes de recharge pour voitures. Aux États-Unis, la plupart apprennent le métier dans un apprentissage rémunéré (apprenticeship), et la plupart des États exigent une licence pour les électriciens. Ce cours est la première étape : il s'adresse aux personnes qui cherchent un emploi, aux anciens militaires, aux jeunes adultes, aux personnes qui sortent de prison, aux immigrés et aux adultes qui reprennent des études et qui veulent arriver prêts à un apprentissage.",
    "Vous allez apprendre ce que sont les volts, les ampères, les ohms et les watts, et faire les calculs avec la loi d'Ohm. Vous allez lire le dessin d'un circuit simple et comprendre pourquoi les maisons sont câblées de cette façon. Ensuite, vous verrez les règles de sécurité que suit tout électricien, les outils et les mesures que les apprentis utilisent dès le premier jour, et comment postuler à un apprentissage.",
    "Ce cours vous prépare. Il ne vous donne ni licence ni certificat, et il ne vous demande jamais de travailler sous tension. Le travail électrique est dangereux et peut tuer. Le vrai câblage s'apprend seulement dans un programme encadré, avec le bon équipement de protection. Les licences sont délivrées par votre État ou votre ville.",
    "Chaque leçon dure environ cinq minutes, avec une activité « Essayez maintenant » et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est votre propre dossier de départ d'électricien, avec un plan daté."
  ],
  finalTask: "Préparez votre dossier de départ d'électricien : (1) cinq problèmes de loi d'Ohm ou de puissance que vous écrivez vous-même, résolus avec les calculs visibles ; (2) un schéma d'un circuit en parallèle simple avec la source d'énergie, le disjoncteur, l'interrupteur, deux charges, la phase, le neutre et la terre indiqués ; (3) les six étapes de consignation écrites dans l'ordre sur une fiche ; (4) cinq mesures au mètre ruban d'objets de chez vous, au 1/16 de pouce près ; et (5) un plan daté pour postuler à deux programmes d'apprentissage d'électricien, avec les règles de licence de votre État prises sur la page officielle.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui veulent un métier qualifié sans diplôme universitaire de quatre ans : personnes qui cherchent un emploi, anciens militaires, jeunes adultes, personnes qui sortent de prison, immigrés et adultes qui reprennent des études. Certains ont fait un travail manuel ou militaire ; la plupart n'ont aucune formation en électricité.",
    startingPoint: "Savent calculer avec des nombres entiers et quelques fractions, et savent que l'électricité peut être dangereuse. La plupart ne savent pas encore définir les volts, les ampères ou les ohms, utiliser la loi d'Ohm, lire le dessin d'un circuit ni décrire la consignation.",
    gap: "Les programmes d'apprentissage évaluent souvent les mathématiques et la lecture, et recherchent des candidats qui connaissent les termes de base et prennent la sécurité au sérieux. Les apprenants ont besoin des bases en calcul, du vocabulaire, des réflexes de sécurité et d'un plan clair pour postuler, afin d'être admis et de rester en sécurité.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire à début du collège) ; chaque mot du métier est expliqué",
      "Aucun travail sous tension : la seule pratique avec un appareil de mesure se fait sur une pile ordinaire",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages officielles ; papier, stylo, calculatrice et mètre ruban",
      "Temps : leçons de 5 à 6 minutes qui s'adaptent au travail et aux rendez-vous",
      "Les licences changent selon l'État et la ville : chaque apprenant consulte la page officielle de son lieu de vie"
    ],
    prerequisites: "Calcul avec des nombres entiers et fractions simples. Le cours « Commencer une carrière dans les métiers qualifiés » aide à choisir un métier ; ce cours approfondit le métier d'électricien."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Avec des valeurs inventées pour un circuit", action: "calculer des volts, des ampères, des ohms ou des watts avec la loi d'Ohm et la formule de la puissance", standard: "en réussissant au moins 4 problèmes d'entraînement sur 5, avec les calculs visibles" },
    { id: "O2", condition: "Avec le dessin d'un circuit simple", action: "nommer chaque partie du circuit et dire si les charges sont en série ou en parallèle", standard: "avec toutes les parties correctement nommées" },
    { id: "O3", condition: "Face à un travail où il faut intervenir sur un équipement", action: "énumérer dans l'ordre les étapes de consignation et nommer les principaux dangers électriques et leur protection", standard: "avec les six étapes dans le bon ordre et au moins trois dangers associés à leur protection" },
    { id: "O4", condition: "Avec un mètre ruban et, si vous en avez un, un multimètre sur une pile ordinaire", action: "lire des mesures au 1/16 de pouce près et lire la tension d'une pile", standard: "en réussissant au moins 4 lectures sur 5" },
    { id: "O5", condition: "Avec les sites officiels de votre État", action: "rédiger un plan daté pour postuler à un apprentissage d'électricien et avancer vers une licence", standard: "avec deux vrais programmes, leurs conditions et une date pour chaque étape" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne l'électricité",
      lessons: [
        {
          title: "Volts, ampères, ohms et watts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Expliquer avec vos propres mots les volts, les ampères, les ohms et les watts, avec un exemple pour chacun.",
          text: [
            "L'électricité, c'est le passage de toutes petites particules chargées (les électrons) dans un fil. Quatre mots la décrivent, et vous les utiliserez tous les jours dans le métier.",
            "La tension (volts, V) est la poussée. Le courant (ampères, A) est la quantité d'électricité qui passe. La résistance (ohms, Ω) indique à quel point le matériau freine le passage. La puissance (watts, W) est la quantité de travail que fait l'électricité, par exemple chauffer, éclairer ou faire tourner un moteur.",
            "Un tuyau d'arrosage aide à comprendre : la pression de l'eau ressemble aux volts, la quantité d'eau qui coule ressemble aux ampères, et un pli ou un embout étroit ressemble à la résistance. Plus de poussée ou moins de résistance, c'est plus de débit.",
            "Dans les maisons aux États-Unis, la plupart des prises fonctionnent à environ 120 volts, et les gros appareils comme les sèche-linge et les cuisinières utilisent environ 240 volts. Les piles donnent un petit courant régulier, le courant continu (CC, en anglais DC) ; les maisons utilisent le courant alternatif (CA, en anglais AC), qui change de sens de nombreuses fois par seconde."
          ],
          words: [
            ["Volts (V)", "la poussée électrique, aussi appelée tension."],
            ["Ampères (A)", "la quantité de courant électrique qui passe, aussi appelée intensité ou courant."],
            ["Ohms (Ω)", "la résistance : à quel point un matériau freine le passage."],
            ["Watts (W)", "la puissance : la quantité de travail que fait l'électricité."],
            ["CA et CC (AC et DC)", "le courant alternatif (maisons et bâtiments) change de sens ; le courant continu (piles) va dans un seul sens."],
            ["Conducteur", "un matériau qui laisse passer l'électricité facilement, comme le fil de cuivre."]
          ],
          slides: [
            { title: "Quatre mots de tous les jours", bullets: ["Volts : la poussée", "Ampères : le débit", "Ohms : la résistance", "Watts : le travail fait"] },
            { title: "L'image du tuyau", bullets: ["Pression de l'eau = volts", "Eau qui coule = ampères", "Un pli ou un embout étroit = résistance"] },
            { title: "Dans les bâtiments aux États-Unis", bullets: ["La plupart des prises : environ 120 volts", "Sèche-linge et cuisinières : environ 240 volts", "Les maisons utilisent le CA ; les piles donnent du CC"] }
          ],
          tryIt: "Sur une feuille, écrivez les quatre mots (volts, ampères, ohms, watts). À côté de chacun, écrivez ce qu'il veut dire avec vos propres mots et un exemple de la maison. Par exemple : watts, « mon micro-ondes indique 1 000 watts sur son étiquette ». Regardez l'étiquette d'une lampe, d'un chargeur de téléphone ou d'un appareil (débranché, et seulement l'étiquette) et recopiez les volts, ampères ou watts indiqués.",
          youCanNow: "expliquer les volts, les ampères, les ohms et les watts, et les trouver sur l'étiquette d'un appareil.",
          quickCheck: [
            { objective: "O1", q: "Quel mot désigne la quantité de courant électrique qui passe ?", options: ["Volts", "Ohms", "Ampères", "Watts"], answer: 2, why: "Les ampères (le courant) mesurent la quantité d'électricité qui passe." },
            { objective: "O1", q: "Dans l'image du tuyau d'arrosage, qu'est-ce qui ressemble à la résistance ?", options: ["Un pli ou un embout étroit", "La pression de l'eau", "La quantité d'eau", "La couleur du tuyau"], answer: 0, why: "Un pli freine le débit, comme la résistance freine le courant." }
          ]
        },
        {
          title: "La loi d'Ohm et les calculs de puissance",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calculer des volts, des ampères, des ohms ou des watts avec la loi d'Ohm et la formule de la puissance.",
          text: [
            "La loi d'Ohm relie la poussée, le débit et la résistance : volts = ampères × ohms, ce qui s'écrit V = I × R (I représente le courant). Si vous en connaissez deux, vous pouvez trouver le troisième : I = V ÷ R et R = V ÷ I.",
            "La formule de la puissance : watts = volts × ampères, ce qui s'écrit P = V × I. Vous pouvez aussi trouver les ampères à partir des watts : I = P ÷ V.",
            "Exemples résolus (pour s'entraîner seulement, chiffres inventés) : une batterie de 12 volts est branchée sur une charge de 4 ohms. Ampères = 12 ÷ 4 = 3 ampères. Un circuit de 120 volts transporte 15 ampères. Watts = 120 × 15 = 1 800 watts. Un radiateur d'appoint de 1 500 watts sur 120 volts consomme 1 500 ÷ 120 = 12,5 ampères.",
            "Pourquoi c'est important : chaque circuit a un disjoncteur prévu pour un certain nombre d'ampères. Si trop d'appareils fonctionnent en même temps et demandent plus d'ampères que le circuit ne le permet, il est en surcharge et le disjoncteur saute. Les électriciens font ces calculs pour choisir des fils et des disjoncteurs sûrs, en suivant le code de l'électricité."
          ],
          steps: [
            "Écrivez ce que vous savez et ce que vous cherchez.",
            "Choisissez la formule : V = I × R, I = V ÷ R, R = V ÷ I, ou P = V × I.",
            "Remplacez par les chiffres et faites le calcul.",
            "Écrivez l'unité (V, A, Ω ou W) et demandez-vous : la réponse est-elle logique ?"
          ],
          words: [
            ["Loi d'Ohm", "la règle selon laquelle volts = ampères × ohms (V = I × R)."],
            ["Formule de la puissance", "watts = volts × ampères (P = V × I)."],
            ["Charge", "tout ce qui utilise de l'électricité, comme une lampe, un radiateur ou un moteur."],
            ["Disjoncteur", "un interrupteur de sécurité dans le tableau électrique qui coupe un circuit quand trop de courant passe."],
            ["Surcharge", "quand un circuit transporte plus de courant que prévu."]
          ],
          slides: [
            { title: "La loi d'Ohm", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "La puissance", bullets: ["P = V × I (watts = volts × ampères)", "I = P ÷ V"] },
            { title: "Exemples résolus (entraînement seulement)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1 800 W", "1 500 W ÷ 120 V = 12,5 A"] },
            { title: "Pourquoi les électriciens font ces calculs", bullets: ["Les disjoncteurs sont calibrés en ampères", "Trop d'ampères = surcharge, le disjoncteur saute", "Les calculs aident à choisir fils et disjoncteurs selon le code"] }
          ],
          tryIt: "Entraînement seulement. Résolvez en montrant vos calculs : (1) 9 volts et 3 ohms : combien d'ampères ? (2) 2 ampères et 6 ohms : combien de volts ? (3) 120 volts et 10 ampères : combien de watts ? (4) Un micro-ondes de 600 watts sur 120 volts : combien d'ampères ? (5) 24 volts et 4 ampères : combien d'ohms ? Réponses : 3 A ; 12 V ; 1 200 W ; 5 A ; 6 Ω. Ensuite, écrivez un problème à vous et résolvez-le : c'est le début de la partie 1 de votre tâche finale.",
          youCanNow: "utiliser la loi d'Ohm et la formule de la puissance pour trouver des volts, des ampères, des ohms ou des watts.",
          quickCheck: [
            { objective: "O1", q: "Entraînement seulement : 12 volts aux bornes d'une charge de 3 ohms. Combien d'ampères passent ?", options: ["36 ampères", "9 ampères", "15 ampères", "4 ampères"], answer: 3, why: "I = V ÷ R, donc 12 ÷ 3 = 4 ampères." },
            { objective: "O1", q: "Entraînement seulement : un circuit de 120 volts transporte 5 ampères. Combien de watts cela fait-il ?", options: ["24 watts", "600 watts", "125 watts", "115 watts"], answer: 1, why: "P = V × I, donc 120 × 5 = 600 watts." }
          ]
        },
        {
          title: "Les circuits et la lecture d'un schéma simple",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nommer les parties d'un circuit simple et distinguer, sur un schéma, un montage en série d'un montage en parallèle.",
          text: [
            "Un circuit est une boucle complète. Il comprend une source d'énergie, des conducteurs (fils), une charge, un moyen de le commander (un interrupteur) et une protection (un disjoncteur ou un fusible). Si la boucle est coupée, rien ne passe.",
            "Dans un circuit en série, les charges sont sur une seule ligne, donc le courant passe par chacune à son tour ; si l'une s'éteint, toutes s'éteignent. Dans un circuit en parallèle, chaque charge a son propre chemin, donc chacune reçoit toute la tension et l'une peut s'éteindre pendant que les autres restent allumées. Les prises et les lampes d'une maison sont montées en parallèle.",
            "Aux États-Unis, la plupart du câblage des bâtiments compte trois sortes de fils. La phase (en anglais, hot) amène le courant à la charge (souvent noire ou rouge). Le neutre le ramène (en général blanc). La terre (cuivre nu ou vert) offre un chemin sûr en cas de problème. Les électriciens testent quand même chaque fil, car les couleurs peuvent être fausses dans les installations anciennes ou mal faites.",
            "Deux protections spéciales : un GFCI (disjoncteur de fuite à la terre, proche du différentiel) coupe le courant très vite s'il y a une fuite, par exemple à travers une personne, et on l'utilise près de l'eau, comme dans les cuisines, les salles de bains et à l'extérieur. Un AFCI (disjoncteur de défaut d'arc) coupe le courant quand il détecte des arcs électriques qui pourraient causer un incendie. Un court-circuit se produit quand le courant prend un chemin facile qui n'était pas prévu ; il peut provoquer des étincelles et un incendie, et le disjoncteur devrait sauter."
          ],
          steps: [
            "Trouvez la source d'énergie (pile ou tableau électrique).",
            "Suivez le fil depuis la source, en passant par le disjoncteur ou le fusible et l'interrupteur.",
            "Trouvez chaque charge et regardez si elle est sur une seule ligne (série) ou sur sa propre branche (parallèle).",
            "Suivez le chemin de retour jusqu'à la source."
          ],
          words: [
            ["Circuit", "une boucle complète dans laquelle passe l'électricité."],
            ["Circuit en série", "charges sur une seule ligne ; le courant passe par chacune à son tour."],
            ["Circuit en parallèle", "chaque charge sur sa propre branche ; chacune reçoit toute la tension."],
            ["Phase, neutre et terre", "la phase amène le courant à la charge, le neutre le ramène, la terre est un chemin de sécurité."],
            ["GFCI", "disjoncteur de fuite à la terre : coupe le courant très vite en cas de fuite, pour protéger les personnes de l'électrocution."],
            ["AFCI", "disjoncteur de défaut d'arc : coupe le courant quand il détecte des arcs qui pourraient causer un incendie."],
            ["Court-circuit", "courant qui prend un chemin facile non prévu ; il peut provoquer des étincelles et un incendie."]
          ],
          slides: [
            { title: "Les parties de tout circuit", bullets: ["Source, fils, charge", "Commande : un interrupteur", "Protection : un disjoncteur ou un fusible"] },
            { title: "Série ou parallèle", bullets: ["Série : une ligne, une s'éteint = toutes s'éteignent", "Parallèle : sa propre branche, toute la tension pour chacune", "Maisons : en parallèle"] },
            { title: "Phase, neutre, terre", bullets: ["Phase : souvent noire ou rouge", "Neutre : en général blanc", "Terre : nue ou verte", "Testez toujours ; les couleurs peuvent être fausses"] },
            { title: "Protection en plus", bullets: ["GFCI : protège les personnes près de l'eau", "AFCI : aide à éviter les incendies dus aux arcs", "Court-circuit : le disjoncteur devrait sauter"] }
          ],
          tryIt: "Sur une feuille, dessinez une pile, un interrupteur et deux ampoules en série. Puis dessinez les mêmes éléments en parallèle. Indiquez la source, l'interrupteur et les charges sur les deux dessins, et écrivez ce qui se passe dans chacun si une ampoule grille. Ensuite, dessinez un circuit de maison : tableau électrique, disjoncteur, interrupteur et deux lampes en parallèle, avec la phase, le neutre et la terre indiqués. Gardez-le : c'est la partie 2 de votre tâche finale.",
          youCanNow: "nommer les parties d'un circuit simple et distinguer, sur un dessin, un montage en série d'un montage en parallèle.",
          quickCheck: [
            { objective: "O2", q: "Deux ampoules sont montées de façon que, si l'une grille, l'autre reste allumée. Comment sont-elles montées ?", options: ["En série", "En parallèle", "Sans interrupteur", "À l'envers"], answer: 1, why: "En parallèle, chaque ampoule a son propre chemin, donc l'une peut s'éteindre pendant que l'autre reste allumée." },
            { objective: "O2", q: "Quel appareil protège les personnes de l'électrocution près d'un évier de cuisine ?", options: ["Un AFCI", "Un interrupteur", "Un variateur", "Un GFCI"], answer: 3, why: "Un GFCI coupe le courant très vite en cas de fuite, par exemple à travers une personne près de l'eau." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne l'électricité",
        questions: [
          { objective: "O1", q: "Quel mot désigne la poussée électrique ?", options: ["Volts", "Ampères", "Ohms", "Watts"], answer: 0, why: "La tension est la poussée qui fait circuler le courant dans un circuit." },
          { objective: "O1", q: "Entraînement seulement : 2 ampères passent dans une charge de 10 ohms. Quelle est la tension ?", options: ["5 volts", "12 volts", "20 volts", "8 volts"], answer: 2, why: "V = I × R, donc 2 × 10 = 20 volts." },
          { objective: "O1", q: "Entraînement seulement : un sèche-cheveux de 1 200 watts fonctionne sur 120 volts. Combien d'ampères consomme-t-il ?", options: ["10 ampères", "100 ampères", "1 320 ampères", "12 ampères"], answer: 0, why: "I = P ÷ V, donc 1 200 ÷ 120 = 10 ampères." },
          { objective: "O2", q: "Quelle partie d'un circuit le coupe si trop de courant passe ?", options: ["La charge", "Le fil neutre", "La plaque de l'interrupteur", "Le disjoncteur ou le fusible"], answer: 3, why: "Les disjoncteurs et les fusibles protègent le circuit en arrêtant le courant quand il est trop fort." },
          { objective: "O2", q: "Dans la plupart du câblage des bâtiments aux États-Unis, quel fil est en général blanc ?", options: ["La phase", "Le neutre", "La terre", "Aucun ; on n'utilise jamais de couleurs"], answer: 1, why: "Le neutre est en général blanc, mais les électriciens testent quand même, car les couleurs peuvent être fausses." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Sécurité, outils et votre parcours",
      lessons: [
        {
          title: "Sécurité électrique : consignation et vérifier avant de toucher",
          objectives: ["O3"],
          minutes: 6,
          goal: "Énumérer dans l'ordre les six étapes de consignation et nommer les principaux dangers électriques.",
          text: [
            "L'électricité peut tuer. Les dangers électriques comprennent le choc électrique, l'électrocution, les brûlures, l'arc électrique (arc flash : un éclair soudain de chaleur et de lumière causé par un défaut électrique), l'incendie et les chutes après un choc. L'OSHA (l'agence fédérale américaine de sécurité au travail) cite des causes fréquentes de blessures électriques, comme le contact avec des lignes électriques, l'absence de protection contre les fuites à la terre, un chemin vers la terre interrompu, la mauvaise utilisation des équipements et la mauvaise utilisation des rallonges.",
            "La façon la plus sûre de travailler, c'est hors tension et consigné. La règle de consignation (lockout/tagout) de l'OSHA (29 CFR 1910.147) fixe l'ordre à suivre pour les travailleurs autorisés et formés : 1. Préparer : savoir quelle énergie est présente et comment la maîtriser. 2. Arrêter l'équipement. 3. L'isoler : ouvrir le sectionneur ou le disjoncteur. 4. Poser votre propre cadenas et votre étiquette. 5. Libérer ou bloquer l'énergie stockée (par exemple des condensateurs chargés ou des ressorts). 6. Vérifier : tester qu'il est vraiment hors tension avant de commencer.",
            "Vérifier avant de toucher : utilisez un testeur ou un appareil de mesure que vous contrôlez d'abord sur une source que vous savez sous tension, puis testez le circuit, puis contrôlez à nouveau le testeur. Seuls des travailleurs formés et qualifiés le font, dans le cadre du programme de leur employeur.",
            "Autres réflexes : utilisez des échelles non conductrices (en fibre de verre) près de l'électricité, restez bien à l'écart des lignes électriques aériennes, utilisez une protection GFCI pour les outils électriques, ne travaillez jamais sur un équipement électrique dans un endroit mouillé, et portez les lunettes de sécurité, les gants et les autres équipements de protection individuelle (EPI) exigés par votre employeur."
          ],
          steps: [
            "Préparer : connaître l'énergie et comment la maîtriser.",
            "Arrêter l'équipement.",
            "L'isoler de la source d'énergie.",
            "Poser votre propre cadenas et votre étiquette.",
            "Libérer ou bloquer l'énergie stockée.",
            "Vérifier qu'il est hors tension : tester avant de toucher."
          ],
          words: [
            ["Électrocution", "mort causée par un choc électrique."],
            ["Arc électrique (arc flash)", "un éclair soudain de chaleur, de lumière et de pression causé par un défaut électrique."],
            ["Consignation (lockout/tagout)", "couper et verrouiller la source d'énergie, avec une étiquette, pour que personne ne la remette en marche pendant le travail."],
            ["Énergie stockée", "énergie qui reste après la coupure du courant, par exemple dans un condensateur ou un ressort."],
            ["Travailleur qualifié", "une personne formée pour connaître les dangers et faire une tâche électrique précise en sécurité."],
            ["OSHA", "l'Occupational Safety and Health Administration, l'agence américaine qui fixe les règles de sécurité au travail."]
          ],
          slides: [
            { title: "L'électricité peut tuer", bullets: ["Choc, électrocution, brûlures", "Arc électrique et incendie", "Chutes après un choc"] },
            { title: "Consignation : six étapes", bullets: ["1. Préparer  2. Arrêter  3. Isoler", "4. Cadenas et étiquette  5. Libérer l'énergie stockée", "6. Vérifier : tester avant de toucher"] },
            { title: "Vérifier avant de toucher", bullets: ["Contrôler le testeur sur une source connue sous tension", "Tester le circuit", "Contrôler à nouveau le testeur"] },
            { title: "Réflexes de tous les jours", bullets: ["Échelles en fibre de verre près de l'électricité", "Restez loin des lignes électriques aériennes", "GFCI pour les outils ; jamais de travail mouillé"] }
          ],
          sources: [
            { name: "OSHA : Sécurité électrique (en anglais)", url: "https://www.osha.gov/electrical" },
            { name: "OSHA : Maîtrise des énergies dangereuses (consignation), 29 CFR 1910.147 (en anglais)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Sur une fiche, écrivez de mémoire, dans l'ordre, les six étapes de consignation. Comparez-les à la leçon et corrigez vos erreurs. Au dos, écrivez trois dangers électriques et la protection pour chacun (par exemple : ligne électrique aérienne, rester très loin et appeler la compagnie d'électricité). Gardez la fiche : c'est la partie 3 de votre tâche finale.",
          youCanNow: "énumérer dans l'ordre les six étapes de consignation et associer chaque danger électrique à la bonne protection.",
          quickCheck: [
            { objective: "O3", q: "Quelle est la dernière étape de consignation avant de commencer le travail ?", options: ["Vérifier par un test que l'équipement est hors tension", "Poser votre cadenas", "Prévenir le client", "Arrêter l'équipement"], answer: 0, why: "Après avoir consigné et libéré l'énergie stockée, vous vérifiez que tout est vraiment hors tension avant de toucher quoi que ce soit." },
            { objective: "O3", q: "Quelle échelle est le bon choix près d'un équipement électrique ?", options: ["En aluminium", "N'importe quelle échelle", "En fibre de verre", "Une échelle en bois mouillée"], answer: 2, why: "La fibre de verre ne conduit pas l'électricité comme le métal." }
          ]
        },
        {
          title: "Outils, mesures et code de l'électricité",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lire un mètre ruban au 1/16 de pouce près et lire la tension d'une pile avec un multimètre.",
          text: [
            "Les apprentis utilisent des outils à main comme la pince universelle d'électricien, la pince à dénuder, des tournevis isolés, un niveau et un mètre ruban, et des outils de test comme un testeur de tension et un multimètre. Votre employeur ou votre programme vous indique quels outils acheter et comment utiliser chacun en sécurité.",
            "Lire un mètre ruban : aux États-Unis, on mesure en pouces, et chaque pouce est divisé en 16 petits traits. Les traits les plus longs marquent le demi-pouce, puis les quarts, puis les huitièmes, puis les seizièmes. Comptez les petits traits après le dernier pouce entier et simplifiez la fraction : 5 pouces et 6 traits font 5 6/16, soit 5 3/8 pouces. Mesurez deux fois, coupez une fois.",
            "Un multimètre mesure les volts, les ampères et les ohms. Entraînez-vous seulement sur une pile AA ordinaire : mettez le sélecteur sur volts en courant continu (DC), posez la pointe rouge sur le + et la pointe noire sur le -, et lisez l'écran. Une pile AA neuve affiche environ 1,5 volt. Ne vous entraînez jamais sur une prise ni sur le câblage de la maison.",
            "Les électriciens suivent le National Electrical Code (NEC, le code national de l'électricité des États-Unis), aussi appelé NFPA 70, qui fixe des normes de sécurité pour le câblage et les équipements. Les États et les villes adoptent ce code, parfois avec leurs propres changements, et les examens de licence portent sur le code et les règles locales. Vous apprendrez à utiliser le livre du code pendant votre apprentissage."
          ],
          steps: [
            "Mètre ruban : trouvez le dernier pouce entier.",
            "Comptez les traits de 1/16 après celui-ci.",
            "Simplifiez la fraction : 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Multimètre (pile seulement) : réglez sur volts DC, rouge au +, noir au -, lisez l'écran."
          ],
          words: [
            ["Multimètre", "un appareil qui mesure les volts, les ampères et les ohms."],
            ["Testeur de tension", "un outil qui indique s'il y a de la tension."],
            ["Cordons de mesure", "les fils rouge et noir avec des pointes qui relient l'appareil à ce que vous testez."],
            ["NEC (NFPA 70)", "le National Electrical Code : normes de sécurité pour le câblage, adoptées par les États et les villes."],
            ["Simplifier une fraction", "l'écrire avec les plus petits nombres possibles, comme 6/16 = 3/8."]
          ],
          slides: [
            { title: "Les outils de départ", bullets: ["Pince universelle, pince à dénuder", "Tournevis isolés, niveau, mètre ruban", "Testeur de tension et multimètre"] },
            { title: "Lire un mètre ruban", bullets: ["16 traits par pouce", "Comptez les traits après le pouce entier", "5 6/16 = 5 3/8 pouces"] },
            { title: "Pratique au multimètre : pile seulement", bullets: ["Sélecteur sur volts DC", "Rouge au +, noir au -", "Une AA neuve affiche environ 1,5 volt", "Jamais sur une prise ou le câblage"] },
            { title: "Le code de l'électricité", bullets: ["NEC, aussi appelé NFPA 70", "Les États et les villes l'adoptent", "Les examens de licence portent sur le code"] }
          ],
          sources: [
            { name: "NFPA : NFPA 70, National Electrical Code (en anglais)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "Bureau américain des statistiques du travail (BLS) : Électriciens (en anglais)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Mesurez cinq objets chez vous avec un mètre ruban (une porte, un livre, une table, une fenêtre, une boîte) au 1/16 de pouce près, et écrivez chaque mesure sous forme simplifiée. Puis entraînez-vous : 3 et 12/16 = ? 7 et 2/16 = ? 10 et 8/16 = ? (Réponses : 3 3/4, 7 1/8, 10 1/2.) Si vous avez un multimètre, lisez la tension d'une pile AA et notez-la. Gardez vos mesures : elles sont la partie 4 de votre tâche finale.",
          youCanNow: "lire un mètre ruban au 1/16 de pouce près et lire la tension d'une pile avec un multimètre.",
          quickCheck: [
            { objective: "O4", q: "Une planche mesure 4 pouces et 12 traits de seizième. Combien cela fait-il sous forme simplifiée ?", options: ["4 1/2 pouces", "4 3/4 pouces", "4 12 pouces", "4 1/4 pouces"], answer: 1, why: "12/16 se simplifie en 3/4, donc cela fait 4 3/4 pouces." },
            { objective: "O4", q: "Dans ce cours, où peut-on s'entraîner au multimètre sans danger ?", options: ["Sur une prise murale", "Sur un tableau électrique", "Sur un interrupteur", "Sur une pile AA"], answer: 3, why: "Une pile ordinaire est à basse tension et sans danger ; les prises et le câblage sont réservés au travail encadré de personnes formées." }
          ]
        },
        {
          title: "Apprentissage, licence et votre plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rédiger un plan daté pour postuler à un apprentissage d'électricien et avancer vers une licence.",
          text: [
            "Le Bureau of Labor Statistics (BLS, le bureau américain des statistiques du travail) indique que la plupart des électriciens apprennent par un apprentissage de 4 ou 5 ans. Chaque année comprend en général environ 2 000 heures de formation rémunérée sur le terrain, plus des cours de théorie électrique, de lecture de plans et de sécurité. Un diplôme de fin d'études secondaires ou un équivalent (comme le GED, l'examen américain d'équivalence du lycée) est exigé, et certaines personnes passent d'abord par une école technique.",
            "La plupart des États exigent que les électriciens réussissent un examen et détiennent une licence. L'examen porte sur le National Electrical Code et sur les codes de l'État et locaux. Certains endroits exigent aussi une formation continue pour garder la licence. Les titres comme apprenti (apprentice), compagnon (journeyman) et maître (master) changent selon l'État, alors consultez l'organisme qui délivre les licences d'électricien dans votre État ou votre ville.",
            "Les programmes d'apprentissage sont gérés par des syndicats, des groupements d'entrepreneurs et des employeurs. Beaucoup demandent un diplôme ou le GED, une pièce d'identité, parfois un permis de conduire, un test de mathématiques et de lecture et un entretien, et certains n'acceptent les candidatures qu'à certaines périodes. Trouvez des programmes sur apprenticeship.gov, dans les American Job Centers et dans les community colleges (établissements d'enseignement supérieur de proximité). Les anciens militaires peuvent se renseigner auprès du VA (le ministère américain des Anciens combattants) sur le GI Bill ; si vous avez un casier judiciaire, demandez au programme et à l'organisme des licences comment ils l'examinent.",
            "Votre plan transforme tout cela en étapes datées : quoi étudier, à quels programmes postuler, quand ils ouvrent et ce que demande l'organisme des licences."
          ],
          steps: [
            "Écrivez votre objectif, par exemple « commencer un apprentissage d'électricien d'ici l'automne prochain ».",
            "Trouvez deux programmes près de chez vous ; notez ce que chacun demande et quand les candidatures ouvrent.",
            "Trouvez l'organisme des licences de votre État ou de votre ville et notez ce qu'il exige (avec l'adresse web).",
            "Rassemblez vos documents : diplôme ou GED, pièce d'identité, permis de conduire si nécessaire.",
            "Ajoutez des dates pour étudier les mathématiques et la lecture, et une date pour chaque candidature."
          ],
          words: [
            ["Apprentissage (apprenticeship)", "un emploi rémunéré où vous apprenez auprès d'électriciens expérimentés, avec des cours en plus."],
            ["Compagnon (journeyman)", "dans beaucoup d'États, un électricien qui a fini un apprentissage et réussi l'examen de licence ; les titres varient."],
            ["Organisme des licences", "le bureau de l'État ou de la ville qui délivre les licences d'électricien."],
            ["Formation continue", "des cours courts que certaines licences exigent pour rester à jour sur le code et la sécurité."],
            ["American Job Center", "un centre local gratuit d'aide à la recherche d'emploi et à la formation, financé par le ministère américain du Travail."]
          ],
          slides: [
            { title: "Comment la plupart des électriciens apprennent", bullets: ["Apprentissage de 4 ou 5 ans (BLS)", "Environ 2 000 heures payées par an, plus des cours", "Diplôme ou GED exigé"] },
            { title: "Les licences", bullets: ["La plupart des États exigent examen et licence", "L'examen porte sur le NEC et les codes locaux", "Consultez l'organisme de votre État ou ville"] },
            { title: "Être admis", bullets: ["Programmes de syndicats, d'entrepreneurs, d'employeurs", "Souvent : test de maths et de lecture, entretien", "Certains n'ouvrent qu'à certaines périodes"] },
            { title: "Votre plan", bullets: ["Deux programmes et leurs conditions", "Règles de licence de l'organisme officiel", "Une date pour chaque étape"] }
          ],
          sources: [
            { name: "Bureau américain des statistiques du travail (BLS) : Électriciens, comment le devenir (en anglais)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov : moteur de recherche d'apprentissages (en anglais)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop : recherche de licences (en anglais)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Tâche finale : préparez votre dossier de départ d'électricien. Rassemblez vos cinq problèmes de loi d'Ohm (leçon 2), votre schéma de circuit annoté (leçon 3), votre fiche de consignation (leçon 4) et vos cinq mesures au mètre ruban (leçon 5). Puis rédigez votre plan daté : votre objectif, deux programmes d'apprentissage près de chez vous avec ce que chacun demande et quand il accepte les candidatures, ce que votre État ou votre ville exige pour une licence (avec l'adresse web), et une date pour chaque étape.",
          youCanNow: "suivre votre propre plan daté pour postuler à un apprentissage d'électricien et avancer vers une licence.",
          quickCheck: [
            { objective: "O5", q: "Selon le BLS, comment la plupart des électriciens apprennent-ils le métier ?", options: ["Un cours en ligne d'une semaine", "En regardant des vidéos chez eux", "Un apprentissage rémunéré de 4 ou 5 ans", "Seulement un diplôme universitaire de quatre ans"], answer: 2, why: "La plupart des électriciens apprennent dans un apprentissage de 4 ou 5 ans qui mêle travail rémunéré et cours." },
            { objective: "O5", q: "Où trouvez-vous ce que votre État exige pour une licence d'électricien ?", options: ["Auprès de l'organisme des licences d'électricien de votre État ou de votre ville", "Dans un groupe sur les réseaux sociaux", "Dans un magasin d'outils", "Dans ce cours"], answer: 0, why: "Les règles de licence changent selon l'État et la ville, donc la source est l'organisme officiel." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Sécurité, outils et votre parcours",
        questions: [
          { objective: "O3", q: "Quelle étape de consignation vient juste après l'isolement de l'équipement ?", options: ["Vérifier par un test", "Poser votre propre cadenas et votre étiquette", "Libérer l'énergie stockée", "Préparer"], answer: 1, why: "L'ordre est : préparer, arrêter, isoler, cadenas et étiquette, libérer l'énergie stockée, vérifier." },
          { objective: "O3", q: "Pourquoi les travailleurs libèrent-ils ou bloquent-ils l'énergie stockée après la consignation ?", options: ["Pour économiser l'électricité", "Pour que le cadenas tienne", "Pour finir plus vite", "Parce que des pièces comme les condensateurs peuvent encore donner un choc une fois le courant coupé"], answer: 3, why: "L'énergie stockée peut encore vous blesser après la coupure du courant." },
          { objective: "O3", q: "L'OSHA cite une cause fréquente de blessures électriques. Laquelle ?", options: ["Le contact avec des lignes électriques", "Le port de lunettes de sécurité", "L'utilisation d'une échelle en fibre de verre", "La lecture du livre du code"], answer: 0, why: "Le contact avec des lignes électriques fait partie des causes fréquentes citées par l'OSHA." },
          { objective: "O4", q: "Combien font 9/16 de pouce plus 7/16 de pouce ?", options: ["1/2 pouce", "16 pouces", "1 pouce", "2 pouces"], answer: 2, why: "9/16 + 7/16 = 16/16, soit 1 pouce." },
          { objective: "O5", q: "Quelle étape de plan est complète ?", options: ["« Devenir électricien »", "« Postuler un jour »", "« Regarder des programmes »", "« Postuler au programme d'apprentissage du comté avant sa date limite du 1er mars, avec mon GED et ma pièce d'identité »"], answer: 3, why: "Elle indique le programme, la date limite et ce qu'il faut apporter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du métier d'électricien",
    questions: [
      { objective: "O1", q: "Quel mot désigne la quantité de travail que fait l'électricité ?", options: ["Watts", "Ohms", "Ampères", "Volts"], answer: 0, why: "Les watts mesurent la puissance : le travail fait, comme la chaleur ou la lumière." },
      { objective: "O1", q: "La loi d'Ohm dit :", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Les volts sont égaux aux ampères multipliés par les ohms." },
      { objective: "O1", q: "Entraînement seulement : 120 volts et 20 ampères. Combien de watts ?", options: ["140 watts", "6 watts", "2 400 watts", "100 watts"], answer: 2, why: "P = V × I, donc 120 × 20 = 2 400 watts." },
      { objective: "O1", q: "Entraînement seulement : 24 volts aux bornes d'une charge de 6 ohms. Combien d'ampères ?", options: ["144 ampères", "18 ampères", "30 ampères", "4 ampères"], answer: 3, why: "I = V ÷ R, donc 24 ÷ 6 = 4 ampères." },
      { objective: "O1", q: "Que se passe-t-il quand un circuit demande plus d'ampères que prévu ?", options: ["La tension double", "Il est en surcharge et le disjoncteur devrait sauter", "Les fils refroidissent", "Rien"], answer: 1, why: "Trop de courant, c'est une surcharge ; le disjoncteur saute pour protéger les fils." },
      { objective: "O2", q: "Dans un circuit en série avec trois ampoules, l'une grille. Que se passe-t-il ?", options: ["Elles s'éteignent toutes", "Seule celle-là s'éteint", "Les autres brillent plus", "Le disjoncteur grossit"], answer: 0, why: "En série, il n'y a qu'un seul chemin, donc une coupure arrête le courant pour toutes." },
      { objective: "O2", q: "Comment les prises d'une maison sont-elles en général montées ?", options: ["En série", "Sans disjoncteur", "En parallèle", "Sans neutre"], answer: 2, why: "Le montage en parallèle donne à chaque prise toute la tension et son propre chemin." },
      { objective: "O2", q: "Quel fil offre un chemin sûr en cas de problème ?", options: ["La phase", "Le neutre", "Le retour de l'interrupteur", "La terre"], answer: 3, why: "La terre (nue ou verte) est le chemin de sécurité." },
      { objective: "O2", q: "Quel appareil coupe le courant quand il détecte des arcs qui pourraient causer un incendie ?", options: ["Un GFCI", "Un AFCI", "Un variateur", "Une fiche"], answer: 1, why: "Un disjoncteur de défaut d'arc (AFCI) aide à éviter les incendies dus aux arcs." },
      { objective: "O3", q: "Quelle est la première étape de consignation ?", options: ["Préparer : connaître l'énergie et comment la maîtriser", "Poser votre cadenas", "Vérifier par un test", "Arrêter"], answer: 0, why: "Vous commencez par savoir quelle énergie est présente et comment la maîtriser." },
      { objective: "O3", q: "Quand vous vérifiez avant de toucher, pourquoi contrôlez-vous d'abord le testeur sur une source connue sous tension ?", options: ["Pour le réchauffer", "Pour charger sa pile", "Pour prouver que le testeur marche, afin de pouvoir se fier à une lecture « pas de tension »", "Ce n'est pas nécessaire"], answer: 2, why: "Un testeur en panne pourrait indiquer à tort qu'il n'y a pas de tension." },
      { objective: "O3", q: "Comment appelle-t-on un éclair soudain de chaleur et de lumière causé par un défaut électrique ?", options: ["Une terre", "Une charge", "Un disjoncteur", "Un arc électrique (arc flash)"], answer: 3, why: "L'arc électrique est une explosion dangereuse causée par un défaut électrique." },
      { objective: "O3", q: "Dans ce cours, quand pouvez-vous travailler sur un câblage sous tension ?", options: ["Jamais ; le vrai câblage s'apprend dans une formation encadrée", "Après la leçon 2", "Quand le disjoncteur est enclenché", "Le week-end"], answer: 0, why: "Ce cours ne comporte aucun travail sous tension ; cela relève d'un programme encadré avec des EPI." },
      { objective: "O4", q: "Un mètre ruban indique 6 pouces et 4 traits de seizième. Combien cela fait-il sous forme simplifiée ?", options: ["6 1/2 pouces", "6 1/4 pouces", "6 4 pouces", "6 1/8 pouces"], answer: 1, why: "4/16 se simplifie en 1/4." },
      { objective: "O4", q: "Qu'affiche en général une pile AA neuve sur un multimètre réglé sur volts DC ?", options: ["Environ 120 volts", "Environ 12 volts", "Environ 1,5 volt", "Environ 240 volts"], answer: 2, why: "Une pile AA neuve fait environ 1,5 volt." },
      { objective: "O4", q: "Comment appelle-t-on aussi le National Electrical Code ?", options: ["OSHA 10", "EPA 608", "NFPA 70", "Le GFCI"], answer: 2, why: "Le NEC est publié sous le nom NFPA 70." },
      { objective: "O5", q: "Ce cours va :", options: ["Vous donner une licence d'électricien", "Vous préparer à postuler ; il ne vous donne ni licence ni certificat", "Compter comme heures d'apprentissage", "Vous permettre de câbler des maisons"], answer: 1, why: "Les licences sont délivrées par votre État ou votre ville, et la vraie formation vient d'un apprentissage." },
      { objective: "O5", q: "Quel site gratuit vous aide à trouver des programmes d'apprentissage près de chez vous ?", options: ["Une publicité qui s'ouvre toute seule", "Un espace de commentaires", "Un prospectus de magasin d'outils", "apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov propose le moteur de recherche d'apprentissages du ministère américain du Travail." },
      { objective: "O5", q: "Sur quoi portent en général les examens de licence des électriciens ?", options: ["Le National Electrical Code et les codes de l'État et locaux", "La réparation automobile", "La plomberie seulement", "La vitesse de frappe"], answer: 0, why: "Le BLS indique que les examens de licence portent sur le NEC et sur les codes de l'État et locaux." },
      { objective: "O5", q: "Certains programmes n'acceptent les candidatures qu'à certaines périodes. Que doit contenir votre plan ?", options: ["Rien ; présentez-vous simplement", "Une supposition", "Seulement le logo du programme", "Les dates d'ouverture et de clôture des candidatures"], answer: 3, why: "Noter les dates de candidature vous évite de rater la période." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, passées avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Problèmes de loi d'Ohm et de puissance", objective: "O1", notYet: "Moins de 4 problèmes justes sur 5, ou aucun calcul visible.", meets: "Au moins 4 sur 5 justes, chacun avec la formule, les calculs et l'unité.", exceeds: "Les 5 justes, avec les quatre formules, et une vérification que chaque réponse est logique." },
      { name: "Schéma du circuit", objective: "O2", notYet: "Il manque des parties ou les charges ne sont pas en parallèle.", meets: "La source, le disjoncteur, l'interrupteur, deux charges en parallèle, la phase, le neutre et la terre sont tous indiqués.", exceeds: "Montre aussi où placer un GFCI et explique pourquoi." },
      { name: "Fiche de consignation", objective: "O3", notYet: "Il manque des étapes ou elles ne sont pas dans l'ordre.", meets: "Les six étapes dans l'ordre, plus trois dangers associés à leur protection.", exceeds: "Explique aussi la vérification avant de toucher avec le contrôle sous tension, hors tension, sous tension." },
      { name: "Mesures", objective: "O4", notYet: "Les lectures sont fausses ou les fractions ne sont pas simplifiées.", meets: "Au moins 4 lectures sur 5 justes au 1/16 de pouce près, sous forme simplifiée.", exceeds: "Les cinq justes, plus une lecture de pile avec l'appareil bien réglé." },
      { name: "Plan daté à partir de sources officielles", objective: "O5", notYet: "Les étapes n'ont pas de dates, ou les règles viennent de publicités ou de publications en ligne.", meets: "Deux vrais programmes avec leurs conditions et leurs dates de candidature, les règles de licence avec l'adresse web officielle, et une date pour chaque étape.", exceeds: "Contient aussi un calendrier de révision pour le test d'entrée et un plan B, comme un emploi d'aide-électricien." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à un apprentissage ou pré-apprentissage d'électricien dans les 90 jours",
      "Apprenants admis en apprentissage ou embauchés comme aide-électricien dans les 6 mois",
      "Les programmes partenaires signalent que les candidats réussissent le test de maths d'entrée et arrivent en connaissant les règles de sécurité de base"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur connecté à Internet pour les pages du BLS, de l'OSHA, d'apprenticeship.gov et des licences de l'État",
      "Papier, stylo, fiches cartonnées, une calculatrice et un mètre ruban",
      "Facultatif : un multimètre simple et une pile AA (pratique sur la pile seulement)",
      "Environ 60 à 75 minutes au total, en séances courtes : leçons, entraînement, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Aucun travail sous tension, quel qu'il soit. La seule pratique au multimètre se fait sur une pile ordinaire ; ne laissez jamais les apprenants tester des prises ou des tableaux électriques.",
      "Faites d'abord les calculs ensemble au tableau, puis demandez aux apprenants d'écrire leurs propres problèmes d'entraînement et de les échanger.",
      "Invitez un coordinateur d'apprentissage ou un électricien titulaire d'une licence à présenter la procédure de candidature et le test d'entrée.",
      "Aidez chaque apprenant à trouver la page des licences de son État ou de sa ville ; les règles changent, alors ne donnez pas une seule réponse pour tout le groupe.",
      "Orientez les apprenants qui ont un casier judiciaire ou qui sont d'anciens militaires vers les services de réinsertion ou d'aide aux anciens combattants ; ne promettez aucun résultat de la part d'un programme ou d'un organisme de licences.",
      "Évaluez la tâche finale avec la grille et donnez votre retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
