"use strict";

// Koach Learn course (French translation of shared/construction-core-nccer.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "construction-core-nccer-fr",
  lang: "fr",
  translationOf: "construction-core-nccer",
  category: "Workforce Development",
  name: "Compétences de base en construction (préparation à NCCER Core)",
  skills: "Repérer les dangers du chantier et les moyens de les maîtriser, Lire un mètre ruban et faire les calculs du bâtiment, Choisir et vérifier les outils à main et électriques, Lire des plans de construction simples, Manutentionner les matériaux en sécurité, Planifier la formation et les examens NCCER Core",
  outcome: "vous préparer à la formation NCCER Core : nommer les principaux dangers du chantier et la façon de les maîtriser, lire un mètre ruban au seizième de pouce près, transformer un plan simple en liste de débit, vérifier un outil avant de l'utiliser, planifier un levage sûr et rédiger un plan daté pour vous former et passer les examens dans un centre agréé par NCCER.",
  about: [
    "NCCER Core est le programme de départ de la plupart des métiers de la construction aux États-Unis, comme la menuiserie, l'électricité, la plomberie, le CVC (chauffage, ventilation et climatisation) et la soudure. NCCER est le Centre national pour l'enseignement et la recherche en construction. Beaucoup de lycées, de collèges communautaires, de programmes de réinsertion, de programmes pour anciens militaires et de pré-apprentissages l'enseignent. Ce cours s'adresse à toute personne qui veut prendre de l'avance : jeunes, personnes en reconversion, anciens militaires et personnes qui sortent de prison.",
    "Vous allez pratiquer les connaissances de base : la sécurité sur le chantier, les calculs du bâtiment avec un mètre ruban, les outils à main et électriques, la lecture de plans, la manutention des matériaux et le rôle d'un bon équipier. À la fin, vous préparez un vrai dossier : une liste de débit d'entraînement et un plan daté pour vous former et passer les examens.",
    "Ce cours vous PRÉPARE. Il ne délivre pas de certification NCCER. Les certifications NCCER s'obtiennent dans des centres de formation agréés par NCCER, avec des examens écrits et des tâches pratiques réalisées devant un évaluateur qualifié. Les outils, les échelles et le levage s'apprennent en personne avec un formateur, jamais seul devant une vidéo.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites l'exercice « Essayez maintenant » avec du papier, un crayon et, si vous en avez un, un mètre ruban. Un court contrôle suit chaque leçon et chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez votre dossier Core. Partie 1 : à partir d'un plan simple d'un cadre en bois de 36 pouces de large et 24 pouces de haut, fait de planches de 3/4 de pouce d'épaisseur, rédigez une liste de débit (pièce, combien, longueur au seizième de pouce près), nommez la scie que vous utiliseriez et trois vérifications à faire avant de vous en servir, prévoyez comment porter et empiler les planches, et nommez les dangers des « Quatre principaux » (Focus Four) qui pourraient exister sur un vrai chantier, avec un moyen de maîtrise pour chacun. Partie 2 : rédigez un plan de formation et d'examens : le centre ou programme agréé par NCCER le plus proche (trouvé sur la page Find a Center), les modules Core que vous allez étudier, une date de début, un temps d'étude par semaine et une date visée pour vos examens Core.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des demandeurs d'emploi qui veulent débuter dans la construction : jeunes adultes qui sortent du lycée, personnes en reconversion, anciens militaires et personnes qui sortent de prison. Certains entreront dans un pré-apprentissage, un apprentissage ou un programme d'emploi qui enseigne NCCER Core ; d'autres veulent montrer à un employeur qu'ils sont prêts à apprendre.",
    startingPoint: "Savent lire des consignes courtes et calculer avec des nombres entiers. Beaucoup n'ont jamais lu un mètre ruban au-delà des repères de pouces, n'ont plus utilisé de fractions depuis l'école, n'ont jamais lu un plan de construction ni utilisé d'outils électriques en suivant une règle de sécurité.",
    gap: "Les employeurs de la construction et les programmes d'apprentissage attendent des nouveaux ouvriers qu'ils connaissent dès le premier jour les bases de la sécurité, de la mesure, des outils et des plans. Les personnes qui arrivent avec ces connaissances apprennent plus vite pendant la formation pratique, sont plus en sécurité sur le chantier et ont plus de chances de terminer Core et d'entrer dans un métier.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ niveau 6e à 8e année) ; chaque mot du métier est expliqué",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; les exercices se font sur papier, avec un mètre ruban si l'apprenant en a un",
      "Temps : des leçons de 4 à 6 minutes, entre le travail et les rendez-vous",
      "Sécurité : aucun exercice seul avec des outils électriques, des échelles ou du levage ; cela s'apprend avec un formateur",
      "Le cours prépare seulement ; les certifications NCCER viennent de programmes agréés, et les exigences peuvent changer"
    ],
    prerequisites: "Calcul avec des nombres entiers et lecture de consignes courtes. Les cours « Mathématiques du quotidien » et « Les bases de la sécurité au travail (OSHA) » sont utiles mais pas obligatoires."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "Face à une scène de chantier ou une liste de tâches", action: "identifier les dangers des Quatre principaux (Focus Four) et nommer un moyen de maîtrise pour chacun", standard: "avec au moins 4 réponses justes sur 5, dont la règle de protection contre les chutes à 6 pieds et les règles des échelles" },
    { id: "O2", condition: "Avec un mètre ruban ou son dessin, et du papier", action: "lire des mesures au 1/16 de pouce près et additionner, soustraire et convertir des pieds et des pouces", standard: "avec au moins 4 réponses exactes sur 5" },
    { id: "O3", condition: "Face à une tâche de coupe, de perçage ou de fixation", action: "choisir un outil à main ou électrique adapté et lister les vérifications de sécurité à faire avant de l'utiliser", standard: "en nommant au moins trois vérifications correctes, dont les carters, le câble et la coupure du courant pour changer une lame ou un foret" },
    { id: "O4", condition: "Face à un plan de construction simple", action: "trouver le cartouche, l'échelle, les vues et les cotes, et les transformer en liste de débit", standard: "avec chaque longueur juste au 1/16 de pouce près" },
    { id: "O5", condition: "Face à un lot de matériaux à déplacer ou à stocker", action: "planifier un levage, un transport et un empilage sûrs, y compris quand demander de l'aide ou du matériel", standard: "en couvrant la vérification du poids, le trajet, la posture de levage et l'empilage" },
    { id: "O6", condition: "Avec le site web de NCCER et votre propre calendrier", action: "rédiger un plan de formation et d'examens NCCER Core avec un centre, les modules et des dates", standard: "avec un vrai centre ou programme, tous les modules Core et une date d'examen visée" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Sécurité, calculs et mesures",
      lessons: [
        {
          title: "Ce qu'est NCCER Core et comment obtenir les certifications",
          objectives: ["O6"],
          minutes: 5,
          goal: "Expliquer ce que couvre NCCER Core et comment un apprenant obtient une certification NCCER.",
          text: [
            "NCCER est le Centre national pour l'enseignement et la recherche en construction (National Center for Construction Education and Research), aux États-Unis. Il rédige des formations pour les métiers de la construction et tient un registre des certifications obtenues. Core est le programme de départ sur lequel s'appuient la plupart des métiers.",
            "Dans la 6e édition de Core, les modules sont : Basic Safety (orientation sur la sécurité de chantier), Introduction aux calculs du bâtiment, Introduction aux outils à main, Introduction aux outils électriques, Introduction aux plans de construction, Compétences de base en communication, Compétences de base pour l'emploi et Introduction à la manutention des matériaux. Build Your Future in Construction et Introduction à l'élingage de base (Basic Rigging) sont optionnels. Consultez la page Core, car les éditions changent.",
            "Les certifications NCCER s'obtiennent dans des centres de formation agréés. Vous passez des examens écrits sur vos connaissances, et vous réalisez des tâches en sécurité sous les yeux d'un évaluateur. Vos résultats sont enregistrés sous votre propre numéro NCCER, pour que les employeurs puissent les vérifier en ligne.",
            "Core est souvent enseigné dans les lycées, les collèges communautaires, les programmes d'emploi et de réinsertion, et les pré-apprentissages. Utilisez la page Find a Center (Trouver un centre) de NCCER pour en chercher un près de chez vous. Ce cours vous prépare ; il ne vous donne pas la certification."
          ],
          steps: ["Ouvrez nccer.org et trouvez la page Core dans le catalogue des métiers.", "Notez les modules Core de l'édition actuelle.", "Ouvrez la page Find a Center et cherchez près de chez vous.", "Notez deux lieux près de chez vous et comment les contacter."],
          words: [["NCCER", "Centre national pour l'enseignement et la recherche en construction : l'organisme qui rédige cette formation et enregistre les certifications."], ["Core", "le premier programme NCCER ; la plupart des métiers de la construction commencent par lui."], ["Module", "une partie d'un programme, comme un chapitre de livre, avec son propre examen."], ["Certification", "la preuve que vous avez réussi la formation et les examens, qu'un employeur peut vérifier."], ["Agréé", "approuvé par NCCER pour former et évaluer des apprenants en vue des certifications NCCER."], ["Pré-apprentissage", "un programme court qui vous prépare à entrer en apprentissage."]],
          slides: [
            { title: "NCCER Core", bullets: ["Le programme de départ de la plupart des métiers de la construction", "Menuiserie, électricité, plomberie, CVC et soudure s'appuient dessus"] },
            { title: "Modules de la 6e édition de Core", bullets: ["Sécurité, calculs, outils à main, outils électriques, plans", "Communication, employabilité, manutention des matériaux", "Optionnels : Build Your Future, élingage de base"] },
            { title: "Comment l'obtenir", bullets: ["Se former dans un centre agréé par NCCER", "Réussir les examens écrits", "Réaliser les tâches en sécurité devant un évaluateur", "Résultats enregistrés sous votre numéro NCCER"] },
            { title: "Ce cours", bullets: ["Vous prépare", "Ne délivre pas la certification", "Utilisez Find a Center pour trouver un programme"] }
          ],
          sources: [
            { name: "NCCER : programme Core (catalogue des métiers)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "NCCER : certifications reconnues par le secteur", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "NCCER : Find a Center (Trouver un centre)", url: "https://www.nccer.org/find-a-center/" },
            { name: "Apprenticeship.gov : qu'est-ce qu'un pré-apprentissage ?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" }
          ],
          tryIt: "Ouvrez la page Core de NCCER et la page Find a Center. Sur papier, écrivez les modules Core et le nom de deux lieux près de chez vous qui enseignent ou font passer les examens NCCER. Si vous ne pouvez pas aller en ligne, écrivez les modules de cette leçon et demandez à votre American Job Center local (centre public pour l'emploi) quels programmes enseignent NCCER Core.",
          youCanNow: "dire ce que couvre NCCER Core, comment on obtient ses certifications et où chercher un programme près de chez vous.",
          quickCheck: [
            { objective: "O6", q: "Où obtient-on les certifications NCCER ?", options: ["Dans n'importe quel cours vidéo en ligne", "Dans un centre de formation agréé par NCCER", "En achetant un certificat en ligne", "Au DMV (service des permis de conduire) de votre État"], answer: 1, why: "Les certifications NCCER viennent de centres agréés, avec des examens écrits et des tâches pratiques." },
            { objective: "O6", q: "À quoi sert ce cours Koach Learn ?", options: ["Il vous délivre la certification NCCER Core", "Il remplace les examens pratiques", "Il vous prépare à la formation et aux examens Core", "Il fait de vous un entrepreneur agréé"], answer: 2, why: "Il vous prépare ; la certification vient d'un programme agréé." }
          ]
        },
        {
          title: "Sécurité sur le chantier : les Quatre principaux et leur maîtrise",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identifier les dangers des Quatre principaux sur un chantier et nommer un moyen de maîtrise pour chacun.",
          text: [
            "L'OSHA (l'agence fédérale américaine de santé et sécurité au travail) appelle Focus Four, ou les Quatre principaux, les quatre causes qui tuent le plus dans la construction : les chutes, les heurts par un objet, le coincement dans ou entre des objets, et l'électrocution. Le module Basic Safety de Core commence ici.",
            "Chutes : l'OSHA exige une protection contre les chutes à partir de six pieds (environ 1,8 mètre) dans la construction, par exemple des garde-corps, des filets de sécurité ou un système antichute individuel. Couvrez ou protégez les trémies et les trous. Sur une échelle portable utilisée pour monter à un autre niveau, les montants doivent dépasser d'au moins 3 pieds au-dessus du palier, et le pied de l'échelle est écarté d'environ un pied pour quatre pieds de hauteur (la règle du 4 pour 1).",
            "Heurts : portez un casque et un gilet haute visibilité, ne restez pas sous les charges et ne vous tenez jamais derrière un véhicule qui recule. Coincement : n'entrez pas dans une tranchée non protégée et restez loin des pièces en mouvement et des engins qui pivotent. Électrocution : levez les yeux pour repérer les lignes électriques, branchez les outils sur des prises protégées par un GFCI et ne travaillez jamais sur un circuit sous tension sans être formé et autorisé.",
            "Les EPI sont la dernière ligne de défense. Lunettes de sécurité, casque, gants, protection auditive et chaussures de sécurité vous protègent, mais il faut d'abord supprimer ou isoler le danger. Si quelque chose semble dangereux, arrêtez-vous et prévenez votre chef."
          ],
          steps: ["Regardez la tâche et la zone autour.", "Demandez-vous : quelqu'un peut-il tomber, être heurté, être coincé ou toucher l'électricité ?", "Nommez le moyen de maîtrise : carter, couvercle, distance, protection ou coupure du courant.", "Mettez les bons EPI.", "Si vous ne pouvez pas maîtriser le danger, arrêtez-vous et prévenez votre chef."],
          words: [["Quatre principaux (Focus Four)", "le nom donné par l'OSHA aux quatre premières causes de décès dans la construction : chutes, heurts, coincement dans ou entre des objets, et électrocution."], ["Protection contre les chutes", "garde-corps, filets de sécurité ou harnais qui empêchent ou arrêtent une chute."], ["GFCI", "disjoncteur différentiel : un appareil qui coupe très vite le courant en cas de fuite, pour éviter l'électrocution."], ["EPI", "équipement de protection individuelle : casque, lunettes de sécurité, gants, chaussures, protection auditive, gilet."], ["Moyen de maîtrise", "une façon de supprimer ou de réduire un danger."]],
          slides: [
            { title: "Les Quatre principaux", bullets: ["Chutes", "Heurts par un objet", "Coincement dans ou entre des objets", "Électrocution"] },
            { title: "Chutes", bullets: ["Protection contre les chutes dès 6 pieds dans la construction", "Couvrir ou protéger les trous", "Montants 3 pieds au-dessus du palier ; angle de 4 pour 1"] },
            { title: "Heurts, coincement, électrocution", bullets: ["Casque, gilet, jamais sous une charge", "Pas de tranchée non protégée ; loin des pièces en mouvement", "Repérer les lignes ; utiliser un GFCI ; pas de travail sous tension sans formation"] },
            { title: "Les EPI en dernier recours", bullets: ["D'abord supprimer ou isoler le danger", "Ensuite porter les bons EPI", "Dangereux ? Arrêtez-vous et prévenez votre chef"] }
          ],
          sources: [
            { name: "OSHA : formation Focus Four pour la construction", url: "https://www.osha.gov/training/outreach/construction/focus-four" },
            { name: "OSHA : protection contre les chutes", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA : 29 CFR 1926.1053, échelles", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" }
          ],
          tryIt: "Dessinez un chantier simple sur papier : l'ossature d'une maison à un étage, une échelle, une tranchée, une ligne électrique et un camion. Marquez un danger des Quatre principaux pour chacun et écrivez à côté le moyen de maîtrise. Puis calculez à quelle distance du mur doit se trouver le pied d'une échelle qui monte à 16 pieds (réponse : environ 4 pieds).",
          youCanNow: "nommer les dangers des Quatre principaux, donner un moyen de maîtrise pour chacun et appliquer la règle des 6 pieds et les règles des échelles.",
          quickCheck: [
            { objective: "O1", q: "Un ouvrier est au bord d'un toit à 10 pieds de haut, sans garde-corps. Qu'est-ce qui s'applique ?", options: ["Rien, c'est moins de 20 pieds", "Un casque suffit", "Des gants règlent le problème", "Une protection contre les chutes est obligatoire dès 6 pieds"], answer: 3, why: "L'OSHA exige une protection contre les chutes à partir de six pieds dans la construction." },
            { objective: "O1", q: "Une échelle monte à 12 pieds contre un mur. À quelle distance environ doit être son pied ?", options: ["3 pieds", "6 pieds", "1 pied", "12 pieds"], answer: 0, why: "La règle du 4 pour 1 : 1 pied d'écart pour 4 pieds de hauteur, donc 12 / 4 = 3 pieds." }
          ]
        },
        {
          title: "Calculs du bâtiment : le mètre ruban et les fractions",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lire un mètre ruban au 1/16 de pouce près, additionner et convertir des pieds et des pouces.",
          text: [
            "Aux États-Unis, la plupart des mètres ruban de chantier divisent chaque pouce en seizièmes. Le trait le plus long au milieu d'un pouce, c'est 1/2. Les traits un peu plus courts sont 1/4 et 3/4, puis viennent les huitièmes, et les traits les plus courts sont les seizièmes. Comptez les petits traits après le dernier pouce entier : 6 petits traits après 5 pouces donnent 5 6/16, qui se simplifie en 5 3/8.",
            "Pour simplifier, divisez le nombre du haut et celui du bas par 2 jusqu'à ce que celui du haut soit impair : 12/16 = 6/8 = 3/4. Pour additionner des fractions, donnez-leur le même nombre du bas : 2 3/4 + 1 5/8 = 2 6/8 + 1 5/8 = 3 11/8 = 4 3/8.",
            "Un pied fait 12 pouces. Pour passer des pieds aux pouces, multipliez par 12 et ajoutez les pouces en plus : 7 pieds 4 pouces = 84 + 4 = 88 pouces. Pour passer des pouces aux pieds, divisez par 12 ; le reste, ce sont des pouces : 100 pouces = 8 pieds 4 pouces.",
            "Vérifiez l'équerrage avec la règle 3-4-5 : mesurez 3 pieds sur un côté et 4 pieds sur l'autre ; si la diagonale entre ces deux repères fait 5 pieds, l'angle est d'équerre. Mesurez deux fois, coupez une fois."
          ],
          steps: ["Trouvez le dernier pouce entier avant la fin de ce que vous mesurez.", "Comptez les traits de seizième après lui.", "Écrivez le nombre en seizièmes, puis simplifiez.", "Pour les pieds et pouces, multipliez les pieds par 12 et ajoutez les pouces.", "Vérifiez votre réponse en mesurant à nouveau."],
          words: [["Seizième", "1/16 de pouce, le plus petit repère sur la plupart des mètres ruban de chantier."], ["Simplifier", "écrire une fraction avec des nombres plus petits qui valent la même chose, comme 8/16 = 1/2."], ["D'équerre", "un angle d'exactement 90 degrés."], ["Règle 3-4-5", "une façon de vérifier qu'un angle est d'équerre : 3 et 4 sur les côtés donnent 5 sur la diagonale."]],
          slides: [
            { title: "Lire le mètre ruban", bullets: ["Chaque pouce est divisé en 16", "Le trait du milieu le plus long : 1/2", "Puis 1/4 et 3/4, puis les huitièmes, puis les seizièmes"] },
            { title: "Les fractions au travail", bullets: ["Simplifier : 12/16 = 6/8 = 3/4", "Même nombre du bas pour additionner : 2 3/4 + 1 5/8 = 4 3/8"] },
            { title: "Pieds et pouces", bullets: ["1 pied = 12 pouces", "7 pi 4 po = 88 po", "100 po = 8 pi 4 po"] },
            { title: "Vérifier l'équerrage", bullets: ["3 pieds d'un côté, 4 pieds de l'autre", "Diagonale de 5 pieds = d'équerre", "Mesurez deux fois, coupez une fois"] }
          ],
          tryIt: "Sur papier, calculez : (1) 9 pieds 7 pouces en pouces ; (2) 3 7/16 + 2 5/8 ; (3) 50 pouces en pieds et pouces ; (4) 10/16 simplifié. Réponses : 115 pouces ; 6 1/16 ; 4 pieds 2 pouces ; 5/8. Si vous avez un mètre ruban, mesurez une table, une porte et un livre au 1/16 de pouce près.",
          youCanNow: "lire un mètre ruban au 1/16 de pouce, simplifier et additionner des fractions, convertir des pieds et des pouces, et vérifier qu'un angle est d'équerre.",
          quickCheck: [
            { objective: "O2", q: "Combien de pouces font 6 pieds 3 pouces ?", options: ["63 pouces", "75 pouces", "72 pouces", "93 pouces"], answer: 1, why: "6 x 12 = 72, plus 3 = 75 pouces." },
            { objective: "O2", q: "Combien font 2 1/2 + 1 3/8 ?", options: ["3 4/10", "3 1/2", "3 7/8", "4 1/8"], answer: 2, why: "2 4/8 + 1 3/8 = 3 7/8." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Sécurité, calculs et mesures",
        questions: [
          { objective: "O6", q: "Lequel de ces modules est obligatoire dans NCCER Core, 6e édition ?", options: ["Introduction aux calculs du bâtiment", "Soudure avancée de tuyauterie", "Conduite de poids lourds", "Droit immobilier"], answer: 0, why: "Introduction aux calculs du bâtiment est l'un des modules Core." },
          { objective: "O1", q: "Lequel n'est PAS un des dangers des Quatre principaux de l'OSHA ?", options: ["Chutes", "Électrocution", "Erreurs de paperasse", "Heurts par un objet"], answer: 2, why: "Les Quatre principaux sont les chutes, les heurts, le coincement dans ou entre des objets, et l'électrocution." },
          { objective: "O1", q: "Vous branchez une scie sur un chantier. Qu'est-ce qui vous protège de l'électrocution en cas de fuite de courant ?", options: ["Un câble plus long", "Des gants mouillés", "Du ruban adhésif sur la fiche", "Un GFCI"], answer: 3, why: "Un GFCI coupe très vite le courant en cas de fuite." },
          { objective: "O2", q: "Vous comptez 10 traits de seizième après 4 pouces. Quelle est la mesure ?", options: ["4 1/10", "4 5/8", "4 3/4", "4 1/2"], answer: 1, why: "10/16 se simplifie en 5/8, donc 4 5/8 pouces." },
          { objective: "O2", q: "Vous mesurez 3 pieds et 4 pieds sur les deux côtés d'un angle. La diagonale fait 5 pieds 2 pouces. Qu'est-ce que cela veut dire ?", options: ["L'angle est d'équerre", "Le mètre est cassé", "L'angle n'est pas encore d'équerre", "Il faut prendre 6 pieds à la place"], answer: 2, why: "Un angle d'équerre donne exactement 5 pieds sur la diagonale." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Outils, plans et votre plan",
      lessons: [
        {
          title: "Outils à main et électriques : choisir, vérifier et utiliser en sécurité",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choisir un outil adapté à une tâche et lister les vérifications de sécurité avant de l'utiliser.",
          text: [
            "Prenez l'outil fait pour le travail. Un marteau arrache-clou enfonce et retire les clous ; un mètre ruban, une équerre de charpentier triangulaire et un niveau servent à tracer et à vérifier ; une scie égoïne ou une scie circulaire coupe les planches ; une perceuse visse et fait des trous ; un cutter entaille les plaques de plâtre. Utiliser le mauvais outil, comme un tournevis à la place d'un ciseau, provoque des blessures et des dégâts.",
            "Avant d'utiliser un outil, inspectez-le. Outils à main : pas de tête qui bouge, pas de manche fendu, pas de tête de frappe écrasée en champignon. Outils électriques : carters en place et qui fonctionnent, câble et fiche sans coupure et avec la broche de terre, interrupteur qui marche, lame ou foret bien affûté et du bon type.",
            "Pour changer une lame ou un foret, débranchez l'outil ou retirez la batterie. Ne portez jamais un outil par son câble et ne tirez jamais sur le câble pour le débrancher. Gardez les câbles hors des passages. Portez des lunettes de sécurité à chaque fois, et une protection auditive avec les outils bruyants.",
            "Se servir d'un outil est une compétence pratique. Apprenez et pratiquez chaque outil électrique avec un formateur avant de l'utiliser seul, et suivez la notice du fabricant et les règles de votre chantier."
          ],
          steps: ["Choisissez l'outil fait pour la tâche.", "Inspectez-le : manche, tête, carter, câble, fiche, interrupteur, lame ou foret.", "Mettez vos lunettes de sécurité et vos autres EPI.", "Débranchez ou retirez la batterie avant de changer une lame ou un foret.", "Étiquetez et signalez un outil abîmé ; ne l'utilisez pas."],
          words: [["Carter", "un capot sur un outil électrique qui tient vos mains loin de la lame ou des pièces en mouvement."], ["Broche de terre", "la troisième broche ronde d'une fiche, qui aide à éviter l'électrocution."], ["Équerre triangulaire", "un outil en forme de triangle pour tracer des lignes droites et des angles (speed square en anglais)."], ["Tête en champignon", "quand le bout de frappe d'un ciseau ou d'un chasse-clou s'élargit à force d'être frappé ; des éclats peuvent sauter."]],
          slides: [
            { title: "Le bon outil pour le bon travail", bullets: ["Marteau : enfoncer et retirer les clous", "Scie : couper ; perceuse : trous et vis", "Équerre et niveau : tracer et vérifier"] },
            { title: "Inspecter avant d'utiliser", bullets: ["Outils à main : pas de tête qui bouge, pas de manche fendu", "Outils électriques : carter, câble, fiche, interrupteur, lame"] },
            { title: "Bonnes habitudes", bullets: ["Débrancher avant de changer une lame ou un foret", "Jamais porter un outil par le câble", "Lunettes de sécurité à chaque fois"] },
            { title: "La pratique avec un formateur", bullets: ["Pratiquer d'abord chaque outil électrique avec un formateur", "Suivre la notice et les règles du chantier", "Étiqueter et signaler les outils abîmés"] }
          ],
          sources: [
            { name: "OSHA : outils à main et électriques", url: "https://www.osha.gov/hand-power-tools" }
          ],
          tryIt: "Pour chaque tâche, écrivez l'outil et trois vérifications à faire : (1) couper un 2x4 à longueur ; (2) visser une planche de terrasse ; (3) retirer un clou tordu. Exemple pour (1) : scie circulaire ; le carter se referme tout seul, câble et fiche intacts, lame affûtée et bien serrée.",
          youCanNow: "choisir un outil pour une tâche, l'inspecter et suivre les bonnes habitudes avec les outils à main et électriques.",
          quickCheck: [
            { objective: "O3", q: "Vous devez changer la lame d'une scie circulaire. Que faites-vous d'abord ?", options: ["Débrancher la scie", "Garder la gâchette enfoncée", "Retirer le carter pour de bon", "Demander à un collègue de la tenir en marche"], answer: 0, why: "Débrancher, ou retirer la batterie, empêche la scie de démarrer pendant que vos mains sont sur la lame." },
            { objective: "O3", q: "Il manque la broche de terre sur la fiche d'une rallonge. Que faites-vous ?", options: ["L'utiliser si vous faites vite", "Mettre du ruban adhésif sur le trou", "La retirer du service et la signaler", "Couper la fiche"], answer: 2, why: "Une fiche abîmée est un risque d'électrocution ; étiquetez-la hors service et signalez-la." }
          ]
        },
        {
          title: "Lire des plans de construction et faire une liste de débit",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Trouver le cartouche, l'échelle, les vues et les cotes d'un plan et en tirer une liste de débit.",
          text: [
            "Les plans de construction montrent ce qu'il faut construire. Commencez par le cartouche : le nom du projet, le numéro de feuille, la date, l'auteur du dessin et l'échelle. La légende explique les symboles et les abréviations.",
            "Les plans montrent différentes vues. Une vue en plan regarde d'en haut. Une élévation (ou façade) regarde un côté de face. Une coupe est une tranche du bâtiment qui montre l'intérieur. Un détail est un gros plan sur une partie.",
            "L'échelle indique le rapport entre le dessin et la taille réelle. À 1/4 de pouce = 1 pied, un trait de 2 1/2 pouces de long représente 10 pieds. Utilisez toujours les cotes écrites ; si une cote manque ou ne colle pas, demandez à votre chef au lieu de mesurer sur le papier.",
            "Une liste de débit transforme un plan en pièces à couper : nom, combien, longueur. Pour un cadre de 36 pouces de large et 24 pouces de haut en planches de 3/4 de pouce, avec les montants placés entre la traverse du haut et celle du bas : haut et bas, 2 de 36 pouces ; côtés, 2 de 24 - 3/4 - 3/4 = 22 1/2 pouces."
          ],
          steps: ["Lisez le cartouche : projet, feuille, date et échelle.", "Lisez la légende pour comprendre les symboles.", "Trouvez la vue dont vous avez besoin : plan, élévation, coupe ou détail.", "Notez les cotes de chaque pièce.", "Retirez ce qui se chevauche, puis écrivez la liste de débit : pièce, combien, longueur."],
          words: [["Cartouche", "le cadre d'un plan qui donne le nom du projet, le numéro de feuille, la date et l'échelle."], ["Échelle", "le rapport entre la taille du dessin et la taille réelle, par exemple 1/4 de pouce = 1 pied."], ["Vue en plan", "un dessin vu d'en haut."], ["Élévation", "un dessin qui regarde un côté de face."], ["Liste de débit", "la liste des pièces à couper, avec combien et quelle longueur."]],
          slides: [
            { title: "Commencer par le cartouche", bullets: ["Projet, numéro de feuille, date", "L'échelle", "Puis la légende des symboles"] },
            { title: "Quatre vues", bullets: ["Plan : vu d'en haut", "Élévation : un côté", "Coupe : une tranche ; détail : un gros plan"] },
            { title: "Échelle et cotes", bullets: ["1/4 de pouce = 1 pied : 2 1/2 pouces sur papier = 10 pieds", "Utiliser les cotes écrites ; ne pas mesurer le papier", "Cote manquante ou fausse ? Demandez à votre chef"] },
            { title: "Faire une liste de débit", bullets: ["Pièce, combien, longueur", "Retirer ce qui se chevauche", "Cadre de 36 x 24 : 2 de 36 po, 2 de 22 1/2 po"] }
          ],
          tryIt: "Dessinez une caisse sur papier et notez 48 pouces de large et 30 pouces de haut, en planches de 3/4 de pouce, avec les côtés placés entre la planche du haut et celle du bas. Écrivez la liste de débit. Réponse : 2 de 48 pouces et 2 de 28 1/2 pouces. Ensuite : à 1/4 de pouce = 1 pied, quelle est la longueur d'un mur dessiné sur 3 3/4 pouces ? (Réponse : 15 pieds.)",
          youCanNow: "lire le cartouche, l'échelle et les vues d'un plan simple, et transformer ses cotes en liste de débit.",
          quickCheck: [
            { objective: "O4", q: "Où trouvez-vous l'échelle et le numéro de feuille sur un plan ?", options: ["Dans la vue en coupe", "Dans le cartouche", "Au dos de la feuille", "Seulement dans la légende des symboles"], answer: 1, why: "Le cartouche donne le nom du projet, le numéro de feuille, la date et l'échelle." },
            { objective: "O4", q: "L'échelle est 1/4 de pouce = 1 pied. Un mur est dessiné sur 2 pouces. Quelle est sa longueur ?", options: ["2 pieds", "4 pieds", "6 pieds", "8 pieds"], answer: 3, why: "2 pouces font huit quarts de pouce, donc 8 pieds." }
          ]
        },
        {
          title: "Manutention, travail d'équipe et votre plan Core",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Planifier un levage et un transport de matériaux sûrs et rédiger un plan daté de formation et d'examens NCCER Core.",
          text: [
            "Avant de soulever, évaluez la charge : son poids, sa taille, ses arêtes coupantes. Vérifiez votre trajet : obstacles, portes. Si la charge est lourde ou encombrante, demandez à un collègue ou utilisez un chariot, un diable ou un autre matériel pour lequel vous êtes formé. Soulevez avec les jambes : pieds écartés, genoux pliés, charge près du corps, sans vous tordre. Tournez avec les pieds.",
            "Empilez les matériaux sur un sol plat et ferme, les objets lourds en bas, avec des cales ou un empilage croisé pour que les piles ne glissent pas et ne roulent pas. Gardez les passages et les sorties dégagés. Portez les planches longues avec l'avant relevé et surveillez l'arrière quand vous tournez.",
            "Un bon équipier arrive à l'heure, prêt et avec ses EPI. Il écoute, répète les consignes (« Quatre à 22 et demi, c'est noté »), pose des questions en cas de doute et signale tout de suite les dangers. Core enseigne cela dans les modules Compétences de base en communication et Compétences de base pour l'emploi.",
            "Faites maintenant votre plan. Choisissez un centre ou un programme, listez les modules Core, fixez une date de début et un temps d'étude par semaine, et une date visée pour vos examens. Notez les dates dans votre calendrier et parlez-en à quelqu'un qui vous demandera où vous en êtes."
          ],
          steps: ["Évaluez la charge et le trajet.", "Demandez de l'aide ou du matériel pour les charges lourdes ou encombrantes.", "Soulevez avec les jambes, charge près du corps, sans vous tordre.", "Empilez sur un sol ferme, lourd en bas, passages dégagés.", "Écrivez votre plan : centre, modules, date de début, temps par semaine, date d'examen."],
          words: [["Cales", "des morceaux de bois placés pour empêcher une pile de rouler ou de glisser."], ["Empilage croisé", "poser chaque couche en travers de celle du dessous pour que la pile reste stable."], ["Répéter la consigne", "redire une consigne à la personne qui l'a donnée, pour que les deux sachent qu'elle a été bien comprise."]],
          slides: [
            { title: "Avant de soulever", bullets: ["Évaluer le poids, la taille et les arêtes", "Vérifier le trajet", "Lourd ou encombrant ? De l'aide ou du matériel"] },
            { title: "Soulever et empiler", bullets: ["Genoux pliés, charge près du corps, sans torsion", "Lourd en bas, avec cales ou empilage croisé", "Passages et sorties dégagés"] },
            { title: "Être un bon équipier", bullets: ["À l'heure, prêt, avec ses EPI", "Répéter les consignes", "Demander en cas de doute ; signaler les dangers"] },
            { title: "Votre plan Core", bullets: ["Un centre ou programme près de chez vous", "Modules Core et temps d'étude par semaine", "Date de début et date d'examen visée"] }
          ],
          sources: [
            { name: "NCCER : Find a Center (Trouver un centre)", url: "https://www.nccer.org/find-a-center/" },
            { name: "NCCER : programme Core (catalogue des métiers)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "Apprenticeship.gov : recherche d'apprentissages", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Écrivez un plan de levage pour déplacer dix planches 2x6 de 12 pieds d'un camion jusqu'à une zone de travail à 50 pieds : la vérification du poids, le trajet, qui aide, comment vous portez et comment vous empilez. Puis commencez votre plan Core : notez le centre trouvé à la leçon 1, les modules Core, une date de début, votre temps d'étude par semaine et une date d'examen visée.",
          youCanNow: "planifier un levage, un transport et un empilage sûrs, agir en bon équipier et rédiger un plan daté pour vous former et passer les examens NCCER Core.",
          quickCheck: [
            { objective: "O5", q: "Une caisse est plus lourde que ce que vous pouvez soulever à l'aise. Que faites-vous ?", options: ["La soulever vite pour en finir", "Vous tordre pour la balancer en l'air", "Demander à un collègue ou prendre un chariot", "La traîner par un coin"], answer: 2, why: "Les charges lourdes ou encombrantes demandent de l'aide ou du matériel." },
            { objective: "O6", q: "Quel plan de formation est complet ?", options: ["« Étudier un peu. »", "« Trouver un centre plus tard. »", "« Passer l'examen un jour. »", "« Centre : programme d'emploi du comté ; modules Core ; début le 3 nov. ; mardi et jeudi de 18 h à 20 h ; examen visé le 15 févr. »"], answer: 3, why: "Il nomme un centre, les modules, une date de début, un temps par semaine et une date d'examen visée." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Outils, plans et votre plan",
        questions: [
          { objective: "O3", q: "Avant d'utiliser une scie électrique, quelle vérification compte le plus ?", options: ["Le carter fonctionne et le câble n'est pas abîmé", "La scie a une jolie couleur", "Le câble est assez long pour atteindre votre voiture", "La lame est émoussée pour couper lentement"], answer: 0, why: "Un carter qui fonctionne et un câble en bon état évitent les coupures et l'électrocution." },
          { objective: "O4", q: "Quelle vue regarde un côté d'un bâtiment de face ?", options: ["Vue en plan", "Élévation", "Détail", "Cartouche"], answer: 1, why: "Une élévation montre un côté de face." },
          { objective: "O4", q: "Un cadre fait 40 pouces de haut. Les côtés se placent entre des planches du haut et du bas de 3/4 de pouce d'épaisseur. Quelle est la longueur des côtés ?", options: ["40 pouces", "39 1/4 pouces", "38 1/2 pouces", "41 1/2 pouces"], answer: 2, why: "40 - 3/4 - 3/4 = 38 1/2 pouces." },
          { objective: "O5", q: "Comment empiler le bois sur le chantier ?", options: ["Sur de la boue molle", "En travers de la porte de sortie", "Les objets légers en bas", "Sur un sol ferme, avec cales ou empilage croisé, passages dégagés"], answer: 3, why: "Un sol ferme, des cales ou un empilage croisé et des passages dégagés gardent les piles stables et les gens en sécurité." },
          { objective: "O5", q: "Votre chef d'équipe dit : « Coupe quatre à 22 et demi. » Quelle est une bonne réponse ?", options: ["« Quatre à 22 et demi, c'est noté. »", "Rien ; commencer à couper", "« Peu importe. »", "« Je devinerai le reste. »"], answer: 0, why: "Répéter la consigne montre qu'elle a été bien comprise." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences de base en construction (préparation à NCCER Core)",
    questions: [
      { objective: "O6", q: "Que signifie NCCER ?", options: ["Conseil national des règles d'emploi des entrepreneurs", "Centre national pour l'enseignement et la recherche en construction", "Nouveaux codes de construction et règlements électriques", "Comité national de menuiserie et de réparation électrique"], answer: 1, why: "NCCER est le Centre national pour l'enseignement et la recherche en construction (National Center for Construction Education and Research)." },
      { objective: "O6", q: "Comment obtient-on une certification NCCER ?", options: ["En regardant des vidéos et en imprimant un certificat", "En payant des frais en ligne sans examen", "En réussissant des examens écrits et en réalisant des tâches devant un évaluateur dans un centre agréé", "En travaillant une journée sur n'importe quel chantier"], answer: 2, why: "Les certifications demandent des examens écrits et des tâches pratiques dans un centre agréé." },
      { objective: "O6", q: "Quelle page de NCCER aide à trouver un lieu pour se former ou passer les examens ?", options: ["Find a Center", "La légende", "Une fiche de données de sécurité", "Votre fiche de paie"], answer: 0, why: "La page Find a Center de NCCER liste les lieux de formation et d'examen." },
      { objective: "O1", q: "Quelle liste correspond aux Quatre principaux de l'OSHA ?", options: ["Bruit, chaleur, poussière et froid", "Chutes, heurts, coincement dans ou entre des objets, électrocution", "Feu, inondation, vent et neige", "Paperasse, heures supplémentaires, pauses et salaire"], answer: 1, why: "Ces quatre causes provoquent la plupart des décès dans la construction." },
      { objective: "O1", q: "À partir de quelle hauteur l'OSHA exige-t-elle une protection contre les chutes dans la construction ?", options: ["2 pieds", "20 pieds", "10 pieds", "6 pieds"], answer: 3, why: "L'OSHA exige une protection contre les chutes à partir de six pieds dans la construction." },
      { objective: "O1", q: "Une échelle donne accès à un palier supérieur. De combien ses montants doivent-ils dépasser au-dessus du palier ?", options: ["D'au moins 3 pieds", "Ils doivent être juste au niveau", "De 6 pouces", "D'au moins 10 pieds"], answer: 0, why: "Règle de l'OSHA pour les échelles : montants à au moins 3 pieds au-dessus du palier supérieur." },
      { objective: "O1", q: "Vous voyez une ligne électrique au-dessus de l'endroit où une équipe veut dresser une échelle. Que faites-vous ?", options: ["La dresser vite", "Prendre une échelle en métal", "Vous arrêter et prévenir le chef avant de continuer", "Toucher la ligne pour la tester"], answer: 2, why: "L'électrocution fait partie des Quatre principaux ; arrêtez-vous et signalez-le." },
      { objective: "O2", q: "Combien de pouces font 8 pieds 5 pouces ?", options: ["85", "96", "105", "101"], answer: 3, why: "8 x 12 = 96, plus 5 = 101 pouces." },
      { objective: "O2", q: "Combien vaut 14/16 simplifié ?", options: ["7/8", "3/4", "1/2", "14/8"], answer: 0, why: "Divisez le haut et le bas par 2 : 7/8." },
      { objective: "O2", q: "Combien font 1 3/4 + 2 3/8 ?", options: ["3 6/12", "4 1/8", "3 3/8", "4 3/4"], answer: 1, why: "1 6/8 + 2 3/8 = 3 9/8 = 4 1/8." },
      { objective: "O3", q: "Quel outil est fait pour enfoncer et retirer les clous ?", options: ["Équerre triangulaire", "Cutter", "Marteau arrache-clou", "Niveau"], answer: 2, why: "Un marteau arrache-clou enfonce les clous et les retire." },
      { objective: "O3", q: "La tête d'un marteau bouge sur son manche. Que faites-vous ?", options: ["L'utiliser avec prudence", "L'étiqueter hors service et le signaler", "L'entourer de ruban adhésif", "Le prêter à un collègue"], answer: 1, why: "Une tête qui bouge peut s'envoler ; retirez l'outil du service et signalez-le." },
      { objective: "O3", q: "Quelle est une bonne habitude avec les outils électriques à câble ?", options: ["Porter l'outil par son câble", "Retirer le carter pour mieux voir", "Débrancher en tirant sur le câble", "Garder les câbles hors des passages et porter des lunettes de sécurité"], answer: 3, why: "Des passages dégagés évitent les chutes, et les lunettes de sécurité protègent vos yeux." },
      { objective: "O4", q: "Quelle vue d'un plan regarde d'en haut ?", options: ["Vue en plan", "Élévation", "Coupe", "Détail"], answer: 0, why: "Une vue en plan regarde d'en haut." },
      { objective: "O4", q: "Une cote écrite sur un plan ne correspond pas à ce que vous mesurez sur le papier. Que faites-vous ?", options: ["Utiliser votre mesure sur le papier", "Utiliser la cote écrite, ou demander à votre chef si elle semble fausse", "Faire la moyenne des deux", "Sauter cette partie"], answer: 1, why: "Les cotes écrites font foi ; demandez quand quelque chose ne colle pas." },
      { objective: "O4", q: "À 1/4 de pouce = 1 pied, quelle est la longueur d'un mur dessiné sur 5 pouces ?", options: ["5 pieds", "10 pieds", "20 pieds", "25 pieds"], answer: 2, why: "5 pouces font vingt quarts de pouce, donc 20 pieds." },
      { objective: "O5", q: "Quelle est la bonne façon de soulever ?", options: ["Se pencher en avant, jambes tendues", "Se tordre pour poser la charge", "Tenir la charge loin du corps", "Plier les genoux, garder la charge près du corps, tourner avec les pieds"], answer: 3, why: "Utiliser les jambes et garder la charge près du corps protège votre dos." },
      { objective: "O5", q: "Vous portez une longue planche à travers une porte. Que surveillez-vous ?", options: ["L'arrière de la planche quand vous tournez", "Seulement votre téléphone", "Rien ; les planches sont légères", "Les lampes du plafond"], answer: 0, why: "L'arrière balaie quand vous tournez et peut heurter des personnes ou des objets." },
      { objective: "O5", q: "Avant de déplacer une charge, qu'évaluez-vous d'abord ?", options: ["Qui vous regarde", "Le poids, la taille et les arêtes de la charge, et le trajet", "La couleur de la charge", "À quelle vitesse vous pouvez courir avec"], answer: 1, why: "Connaître la charge et le trajet vous dit si vous avez besoin d'aide ou de matériel." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans un plan de formation et d'examens ?", options: ["Seulement les mots « un jour »", "Le code PIN de votre carte bancaire", "Un centre, les modules, une date de début, un temps d'étude par semaine et une date d'examen visée", "Une liste d'outils à acheter avant de commencer"], answer: 2, why: "Un plan avec un lieu, des modules et des dates est un plan que vous pouvez suivre." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 4, 5, 7, 9, 11, 13, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Liste de débit", objective: "O4", notYet: "Des longueurs manquent ou ne tiennent pas compte des planches de 3/4 de pouce.", meets: "Deux pièces de 36 pouces et deux de 22 1/2 pouces, avec le nom des pièces et les quantités.", exceeds: "Tient aussi compte du trait de scie (la largeur enlevée par la lame) et indique la face depuis laquelle mesurer." },
      { name: "Mesures et calculs", objective: "O2", notYet: "Les fractions sont fausses ou non simplifiées.", meets: "Chaque longueur est juste au 1/16 de pouce près et simplifiée.", exceeds: "Montre les calculs et vérifie l'équerrage du cadre avec la règle 3-4-5." },
      { name: "Choix et vérification de l'outil", objective: "O3", notYet: "Aucun outil nommé, ou moins de trois vérifications.", meets: "Nomme une scie adaptée et trois vérifications correctes, dont le carter, le câble et le débranchement pour changer la lame.", exceeds: "Liste aussi les EPI et précise que l'outil ne sera utilisé qu'après une formation avec un formateur." },
      { name: "Manutention sûre", objective: "O5", notYet: "Aucun plan pour le poids, le trajet ou l'empilage.", meets: "Couvre la vérification du poids, le trajet, la posture de levage et l'empilage.", exceeds: "Dit aussi quand demander un aide ou du matériel, et comment porter les planches longues dans les virages." },
      { name: "Dangers du chantier", objective: "O1", notYet: "Aucun danger nommé.", meets: "Nomme au moins deux dangers des Quatre principaux qui pourraient exister, avec un moyen de maîtrise pour chacun.", exceeds: "Couvre les quatre, avec leurs moyens de maîtrise." },
      { name: "Plan de formation et d'examens", objective: "O6", notYet: "Pas de centre ou pas de dates.", meets: "Un vrai centre ou programme, les modules Core, une date de début, un temps d'étude par semaine et une date d'examen visée.", exceeds: "Les dates sont dans un calendrier et une personne de soutien est nommée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent à un programme NCCER Core ou à un pré-apprentissage dans les 60 jours (enquête de suivi)",
      "Apprenants qui obtiennent des certifications NCCER Core, selon l'apprenant ou le programme partenaire",
      "Apprenants embauchés dans un emploi de la construction ou en apprentissage dans les 6 mois",
      "Les programmes partenaires signalent moins de lacunes en sécurité et en calcul chez les nouveaux élèves de Core"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier, crayon et règle ; un mètre ruban si possible",
      "Un téléphone ou un ordinateur pour ouvrir nccer.org et osha.gov",
      "Des copies imprimées du plan du cadre d'entraînement pour les séances en groupe",
      "Environ 75 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis enseignez un chapitre par séance, avec les exercices « Essayez maintenant » faits en direct.",
      "Apportez plusieurs mètres ruban ; faites lire aux apprenants les repères sur le mètre des autres et vérifier les réponses par deux.",
      "Ne laissez pas les apprenants utiliser des outils électriques, des échelles ou du matériel de levage dans ce cours ; cela s'enseigne en personne par un formateur NCCER qualifié.",
      "Aidez les apprenants à utiliser la page Find a Center de NCCER et mettez-les en contact avec des programmes Core locaux, des pré-apprentissages ou l'American Job Center.",
      "Notez la tâche finale avec la grille d'évaluation et faites un retour sur une seule ligne Pas encore à la fois.",
      "Pour les apprenants en réinsertion, indiquez des employeurs et des programmes de seconde chance ; pour les anciens militaires, renseignez-vous auprès du VA (ministère américain des Anciens combattants) sur l'usage des aides à la formation pour l'apprentissage ou la formation."
    ]
  }
};
