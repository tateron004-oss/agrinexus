"use strict";

// Koach Learn course, French translation of shared/typing-keyboarding.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// The English course teaches the QWERTY (US) layout; this translation keeps it and adds short notes for AZERTY keyboards (France, francophone Africa).
// Key names are the ones French keyboards show (Maj, Verr Maj, Verr Num, Entrée, Retour arrière, Suppr, Début, Fin).

module.exports = {
  id: "typing-keyboarding-fr",
  lang: "fr",
  translationOf: "typing-keyboarding",
  category: "Workforce Development",
  name: "Dactylographie et maîtrise du clavier",
  skills: "Bonne posture pour taper, Taper sans regarder à partir de la rangée de repos, Chiffres et pavé numérique, Mesurer sa vitesse et sa précision, Raccourcis clavier, Planifier un entraînement quotidien",
  outcome: "installer un poste de frappe sûr, taper sans regarder les touches à partir de la rangée de repos, saisir des chiffres et des symboles, mesurer vous-même votre vitesse et votre précision, utiliser les principaux raccourcis d'édition et suivre un plan d'entraînement de quatre semaines pour vous préparer à un test de frappe d'embauche.",
  about: [
    "Beaucoup d'emplois demandent de taper au clavier : travail de bureau et d'accueil, discussion en ligne avec les clients, saisie de données, dossiers médicaux, travail scolaire et candidatures en ligne. Certains employeurs font passer un court test de frappe avant d'embaucher. Ce cours s'adresse aux jeunes qui cherchent un premier emploi, aux adultes qui changent de métier, aux seniors qui veulent taper avec moins d'effort et à toute personne qui tape avec deux doigts et veut progresser.",
    "Vous allez régler votre chaise et votre clavier pour que la frappe ne fasse pas mal, apprendre où va chaque doigt, vous exercer aux chiffres et aux symboles, vous chronométrer et calculer vos mots par minute et votre précision, et apprendre les raccourcis qui font gagner du temps au travail. À la fin, vous écrivez votre propre plan d'entraînement de quatre semaines, avec un score de départ et un objectif.",
    "Il vous faut seulement un clavier d'ordinateur et un programme où taper, comme le Bloc-notes, TextEdit, Google Docs ou Microsoft Word. Un site d'entraînement gratuit aide, mais n'est pas obligatoire : chaque exercice marche aussi avec un éditeur de texte, du papier et le minuteur d'un téléphone.",
    "Chaque leçon dure environ cinq minutes, suivie d'un exercice « Essayez maintenant » et d'une vérification rapide de deux questions. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. La frappe s'améliore avec un entraînement quotidien : le cours vous donne donc un plan, pas un raccourci."
  ],
  finalTask: "Préparez votre plan d'entraînement à la frappe sur quatre semaines. Faites un test chronométré d'une minute et notez vos mots par minute et votre précision de départ, fixez un objectif pour chacun, et écrivez un plan quotidien avec des dates : 10 à 15 minutes par jour avec un échauffement, un exercice sur vos touches les plus faibles, un exercice de chiffres ou de raccourcis, et un test chronométré par semaine. Ajoutez un tableau de suivi à remplir chaque semaine et une note sur la façon dont vous passerez un test de frappe d'embauche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chercheurs d'emploi de tous âges : jeunes qui cherchent un premier emploi, adultes qui changent de métier ou reprennent le travail, seniors, personnes sortant de prison et personnes dont ce n'est pas la langue maternelle. Beaucoup utilisent un téléphone tous les jours, mais tapent sur un ordinateur avec deux doigts en regardant les touches.",
    startingPoint: "Ils savent allumer un ordinateur, ouvrir un programme et taper une phrase en regardant les touches (comme dans le cours « Les bases de l'ordinateur »). La plupart n'ont jamais appris la rangée de repos, ne connaissent pas leur vitesse et utilisent la souris pour chaque copier, coller et annuler.",
    gap: "Les emplois de bureau, de service client, de saisie de données et de santé demandent une frappe régulière et précise, et certains employeurs testent la vitesse de frappe avant d'embaucher. Taper en cherchant chaque touche est lent, fatigant et plein d'erreurs. Les apprenants ont besoin de bonnes habitudes de doigts, d'un moyen de mesurer leurs progrès, d'une posture sûre et d'un plan quotidien qu'ils peuvent suivre seuls.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 11 ou 12 ans)",
      "Appareils : le clavier d'un ordinateur de bureau ou portable ; le clavier à l'écran d'un téléphone ou d'une tablette ne convient pas aux exercices de frappe sans regarder",
      "Certains apprenants n'ont accès qu'à un ordinateur de bibliothèque ou de programme, pour de courtes séances",
      "Temps : leçons de 4 à 6 minutes, plus 10 à 15 minutes d'entraînement par jour",
      "Confort et santé : arrêter si la frappe cause une douleur ou un engourdissement, et en parler à un professionnel de santé"
    ],
    prerequisites: "Savoir allumer un ordinateur et ouvrir un programme pour taper. Les apprenants qui n'ont jamais utilisé d'ordinateur suivent d'abord « Les bases de l'ordinateur »."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Avec une chaise, un bureau et un ordinateur", action: "régler la chaise, le clavier et l'écran et adopter une posture de frappe sûre", standard: "en respectant au moins 5 des 6 points de la liste de contrôle d'installation" },
    { id: "O2", condition: "Avec un clavier d'ordinateur", action: "placer les doigts sur la rangée de repos et appuyer sur chaque lettre avec le bon doigt", standard: "en tapant une ligne complète d'exercice sans regarder les touches" },
    { id: "O3", condition: "Après un test de frappe chronométré d'une minute ou plus", action: "calculer vos mots par minute et votre précision", standard: "avec les deux résultats calculés correctement" },
    { id: "O4", condition: "Avec une liste de numéros de téléphone, de prix, de dates et de majuscules", action: "taper des chiffres, des symboles et des majuscules avec la rangée des chiffres, les touches Maj et le pavé numérique", standard: "avec au plus 2 erreurs sur 10 lignes" },
    { id: "O5", condition: "En tapant et en corrigeant un court document", action: "utiliser les raccourcis clavier pour sélectionner, copier, coller, annuler et enregistrer", standard: "en faisant les cinq sans la souris" },
    { id: "O6", condition: "À partir de votre propre score au test de départ", action: "écrire un plan d'entraînement de quatre semaines avec un objectif, des exercices quotidiens, des dates et un tableau de suivi", standard: "qui respecte chaque ligne de la grille d'évaluation du cours" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer vos mains",
      lessons: [
        {
          title: "S'installer pour taper en sécurité",
          objectives: ["O1"],
          minutes: 5,
          goal: "Régler votre chaise, votre clavier et votre écran et vous asseoir dans une posture qui ne fatigue pas votre corps.",
          text: [
            "Taper pendant des heures dans une mauvaise position peut causer des douleurs au cou, au dos, aux poignets et aux mains. Une bonne installation ne coûte rien et vous aide à taper plus vite, car des mains détendues bougent plus facilement.",
            "L'OSHA, l'agence américaine de la sécurité au travail, décrit une posture neutre pour le travail sur ordinateur : la tête et le cou en équilibre, dans l'axe du corps, les épaules détendues, les coudes près du corps, les poignets et les mains droits dans l'axe des avant-bras, le bas du dos soutenu et les pieds à plat sur le sol. Le haut de l'écran doit être à hauteur des yeux ou juste en dessous. Il n'y a pas une position parfaite pour tout le monde : ajustez jusqu'à vous sentir à l'aise.",
            "Gardez le clavier près de vous, pour ne pas tendre les bras. Laissez les doigts flotter au-dessus des touches et tapez légèrement ; n'appuyez pas fort vos poignets sur le bord du bureau en tapant. Faites de courtes pauses pour vous lever, vous étirer et regarder loin de l'écran. Si la frappe cause une douleur, des fourmillements ou un engourdissement qui ne passe pas, arrêtez et parlez-en à un médecin ou à un infirmier."
          ],
          steps: ["Asseyez-vous au fond de la chaise pour que le bas de votre dos soit soutenu. Utilisez une serviette roulée ou un coussin si besoin.", "Posez les pieds à plat sur le sol ou sur une boîte ou un repose-pieds.", "Rapprochez le clavier pour que vos coudes restent près du corps.", "Gardez les poignets droits, dans l'axe des avant-bras, et les épaules détendues.", "Placez l'écran pour que le haut soit à hauteur des yeux ou juste en dessous.", "Prévoyez une courte pause pour vous lever et vous étirer environ toutes les 30 à 60 minutes."],
          words: [["Posture", "la façon dont vous tenez votre corps quand vous êtes assis ou debout."], ["Posture neutre", "une position détendue et équilibrée, où les articulations ne sont ni pliées ni tordues."], ["Ergonomie", "organiser le travail et les outils pour qu'ils s'adaptent à votre corps et ne lui fassent pas de mal."], ["OSHA", "l'Occupational Safety and Health Administration, l'agence américaine chargée de la sécurité au travail."]],
          slides: [
            { title: "Pourquoi l'installation compte", bullets: ["Une mauvaise posture peut faire mal au cou, au dos et aux poignets", "Des mains détendues tapent plus vite", "Une bonne installation est gratuite"] },
            { title: "La posture neutre", bullets: ["Tête dans l'axe du corps, épaules détendues", "Coudes près du corps, poignets droits", "Bas du dos soutenu, pieds à plat"] },
            { title: "Clavier et écran", bullets: ["Clavier proche pour ne pas tendre les bras", "Haut de l'écran à hauteur des yeux ou juste en dessous", "Tapez légèrement ; laissez les doigts flotter"] },
            { title: "Prenez soin de votre corps", bullets: ["Faites de courtes pauses pour vous lever et vous étirer", "Douleur, fourmillements ou engourdissement : arrêtez et voyez un médecin ou un infirmier"] }
          ],
          sources: [{ name: "OSHA : outil en ligne sur les postes de travail informatiques (en anglais)", url: "https://www.osha.gov/etools/computer-workstations" }],
          tryIt: "Recopiez cette liste de six points sur papier : dos soutenu, pieds à plat, coudes près du corps, poignets droits, épaules détendues, haut de l'écran à hauteur des yeux ou en dessous. Asseyez-vous devant l'ordinateur sur lequel vous allez vous entraîner, cochez chaque point respecté et corrigez les autres.",
          youCanNow: "régler une chaise, un clavier et un écran pour taper en sécurité et vérifier votre posture avec une liste de six points.",
          quickCheck: [
            { objective: "O1", q: "Où doit se trouver le haut de l'écran de votre ordinateur ?", options: ["Bien au-dessus de votre tête", "À hauteur des yeux ou juste en dessous", "À plat sur le bureau", "À côté de vos genoux"], answer: 1, why: "Les conseils de l'OSHA placent le haut de l'écran à hauteur des yeux ou juste en dessous, pour que votre cou reste en équilibre." },
            { objective: "O1", q: "Vos poignets se plient fortement vers le haut quand vous tapez. Que changez-vous ?", options: ["Taper plus vite pour finir plus tôt", "Éloigner encore le clavier", "Lever les épaules", "Régler la chaise ou le clavier pour avoir les poignets droits"], answer: 3, why: "Les poignets doivent être droits, dans l'axe des avant-bras ; des poignets pliés ajoutent de la tension." }
          ]
        },
        {
          title: "La rangée de repos et la carte des doigts",
          objectives: ["O2"],
          minutes: 6,
          goal: "Placer les doigts sur la rangée de repos et appuyer sur chaque lettre avec le bon doigt sans regarder.",
          text: [
            "Taper sans regarder (la « dactylographie ») veut dire taper sans regarder les touches. Chaque doigt a ses propres touches, et vos mains apprennent où sont les lettres. Au début cela semble plus lent, mais après quelques semaines d'entraînement, c'est plus rapide et plus précis que de regarder.",
            "Vos doigts partent de la rangée de repos et y reviennent. Ce cours utilise le clavier QWERTY (américain). Main gauche : auriculaire sur A, annulaire sur S, majeur sur D, index sur F. Main droite : index sur J, majeur sur K, annulaire sur L, auriculaire sur le point-virgule (;). Les pouces reposent sur la barre d'espace. La plupart des claviers ont un petit relief sur F et J pour trouver la position sans regarder. Sur un clavier AZERTY (France, Afrique francophone), la rangée de repos est Q S D F et J K L M.",
            "Chaque doigt monte et descend à partir de sa touche de repos. Auriculaire gauche : Q, A, Z. Annulaire gauche : W, S, X. Majeur gauche : E, D, C. Index gauche : R, F, V et aussi T, G, B. Index droit : Y, H, N et aussi U, J, M. Majeur droit : I, K et la virgule. Annulaire droit : O, L et le point. Auriculaire droit : P, le point-virgule, la barre oblique et la touche Entrée. Après chaque mouvement, le doigt revient à sa place."
          ],
          steps: ["Trouvez les reliefs sur F et J avec vos index.", "Posez les autres doigts sur A S D et K L ;, les pouces sur la barre d'espace.", "Regardez l'écran, pas vos mains. Couvrez vos mains avec un tissu si vous regardez sans cesse.", "Tapez lentement : allez chercher la touche avec le bon doigt, puis ramenez-le à sa place.", "Au début, dites chaque lettre à voix basse en la tapant et gardez un rythme régulier."],
          words: [["Taper sans regarder", "taper sans regarder les touches, en utilisant toujours le même doigt pour chaque touche."], ["Rangée de repos", "la rangée de lettres du milieu où reposent vos doigts : A S D F et J K L ; (Q S D F et J K L M sur un clavier AZERTY)."], ["Taper en cherchant", "chercher chaque touche des yeux et appuyer dessus avec un ou deux doigts."], ["Mouvement", "déplacer un doigt de sa touche de repos vers une autre touche, puis le ramener."]],
          slides: [
            { title: "Taper sans regarder", bullets: ["Taper sans regarder les touches", "Chaque doigt a ses propres touches", "Plus lent au début, plus rapide après l'entraînement"] },
            { title: "La rangée de repos", bullets: ["Gauche : A S D F", "Droite : J K L ;", "Pouces sur la barre d'espace ; reliefs sur F et J"] },
            { title: "Les mouvements", bullets: ["Chaque doigt monte ou descend depuis sa place", "Les index couvrent aussi T G B et Y H N", "Revenez à votre place après chaque mouvement"] },
            { title: "Les habitudes qui marchent", bullets: ["Les yeux sur l'écran", "Un rythme lent et régulier", "La précision d'abord ; la vitesse viendra ensuite"] }
          ],
          tryIt: "Ouvrez le Bloc-notes, TextEdit, Google Docs ou Word. Sans regarder vos mains, tapez chaque ligne trois fois : asdf jkl; puis fdsa ;lkj puis sad lad fall flask puis dad has a glass. Tapez ensuite : the quick brown fox jumps over the lazy dog. Comptez combien de fois vous avez baissé les yeux.",
          youCanNow: "trouver la rangée de repos au toucher, utiliser le bon doigt pour chaque lettre et taper une ligne d'exercice sans regarder les touches.",
          quickCheck: [
            { objective: "O2", q: "Quelles touches ont de petits reliefs pour trouver la rangée de repos ?", options: ["F et J", "A et ;", "Q et P", "Z et M"], answer: 0, why: "Les reliefs sur F et J permettent à vos index de trouver leur place sans regarder." },
            { objective: "O2", q: "Quel doigt tape la lettre E ?", options: ["L'index droit", "L'auriculaire gauche", "Le majeur gauche", "Le pouce droit"], answer: 2, why: "E se trouve juste au-dessus de D, la touche du majeur gauche." }
          ]
        },
        {
          title: "Majuscules, chiffres, symboles et pavé numérique",
          objectives: ["O4"],
          minutes: 6,
          goal: "Taper des majuscules, des chiffres et les symboles courants, et saisir des chiffres sur le pavé numérique.",
          text: [
            "Pour une majuscule, maintenez la touche Maj avec l'auriculaire de l'AUTRE main, appuyez sur la lettre, puis relâchez. Pour un A majuscule (main gauche), utilisez la touche Maj de droite. Pour un J majuscule (main droite), utilisez la touche Maj de gauche. Verr Maj sert à taper un mot entier en majuscules ; désactivez-le ensuite.",
            "La rangée des chiffres est au-dessus des lettres. Chaque doigt monte depuis sa touche de repos : l'auriculaire gauche tape 1, l'annulaire gauche 2, le majeur gauche 3, l'index gauche 4 et 5, l'index droit 6 et 7, le majeur droit 8, l'annulaire droit 9, l'auriculaire droit 0. Sur un clavier QWERTY, les symboles des mêmes touches, comme $ % @ # et !, demandent Maj. Sur un clavier AZERTY, c'est l'inverse : il faut Maj pour les chiffres.",
            "Beaucoup de claviers d'ordinateur de bureau ont un pavé numérique à droite, disposé comme une calculatrice. Les emplois de saisie de données, de facturation, de banque et de gestion de stock l'utilisent beaucoup. Activez Verr Num. Posez l'index droit sur 4, le majeur sur 5 (il a un relief) et l'annulaire sur 6. Le pouce appuie sur 0 et l'auriculaire sur Entrée. Beaucoup d'ordinateurs portables n'ont pas de pavé numérique ; utilisez alors la rangée des chiffres."
          ],
          steps: ["Majuscules : maintenez Maj avec l'auriculaire de l'autre main, appuyez sur la lettre, relâchez.", "Rangée des chiffres : montez depuis votre place avec le même doigt, puis revenez.", "Symboles : maintenez Maj et appuyez sur la touche du chiffre qui montre le symbole.", "Pavé numérique : activez Verr Num et posez les doigts sur 4 5 6, grâce au relief du 5.", "Vérifiez les chiffres deux fois ; un seul chiffre faux dans un prix ou un numéro de téléphone est une vraie erreur."],
          words: [["Touche Maj", "la touche que l'on maintient pour obtenir une majuscule ou le symbole du haut d'une touche (Shift en anglais)."], ["Verr Maj", "une touche qui met toutes les lettres en majuscules jusqu'à ce qu'on appuie de nouveau dessus (Caps Lock en anglais)."], ["Pavé numérique", "le bloc de touches de chiffres sur le côté droit de beaucoup de claviers, aussi appelé « 10-key » en anglais."], ["Verr Num", "la touche qui active les chiffres du pavé numérique (Num Lock en anglais)."], ["Saisie de données", "taper des informations comme des noms, des chiffres et des codes dans un système informatique."]],
          slides: [
            { title: "Les majuscules", bullets: ["Maintenez Maj avec l'autre main", "A majuscule : Maj de droite ; J majuscule : Maj de gauche", "Verr Maj seulement pour des mots entiers"] },
            { title: "Rangée des chiffres et symboles", bullets: ["Montez depuis votre place avec le même doigt", "En QWERTY, les symboles comme $ % @ demandent Maj", "Revenez à votre place après chaque mouvement"] },
            { title: "Le pavé numérique", bullets: ["Activez Verr Num", "Doigts sur 4 5 6 ; le relief est sur le 5", "Pouce sur 0, auriculaire sur Entrée"] },
            { title: "Les chiffres doivent être exacts", bullets: ["Un seul chiffre faux est une vraie erreur", "Vérifiez deux fois les prix, les dates et les numéros de téléphone"] }
          ],
          tryIt: "Tapez ces dix lignes, puis comparez chacune avec la page : (555) 014-2290 | $12.75 | 03/15/2026 | Order #4471 | 40% off | Maria Lopez | Dr. Kim, Room 210 | 7:30 a.m. | ID 88-31-05 | Total: $1,049.60. Utilisez le pavé numérique si vous en avez un. Comptez vos erreurs et entraînez-vous sur les lignes ratées.",
          youCanNow: "taper des majuscules avec la touche Maj opposée, saisir des chiffres et des symboles avec la rangée des chiffres et utiliser le pavé numérique à partir de 4 5 6.",
          quickCheck: [
            { objective: "O4", q: "Vous voulez un P majuscule (une touche de la main droite). Quelle touche Maj maintenez-vous ?", options: ["La touche Maj de droite", "Verr Maj", "N'importe quelle touche Maj, avec la même main", "La touche Maj de gauche"], answer: 3, why: "Utilisez la touche Maj de la main opposée, pour que la main droite reste libre d'appuyer sur P." },
            { objective: "O4", q: "Sur le pavé numérique, où repose votre majeur ?", options: ["Sur 0", "Sur 5, la touche avec le relief", "Sur Entrée", "Sur 9"], answer: 1, why: "Les touches de repos du pavé numérique sont 4 5 6, et le 5 a un relief pour votre majeur." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer vos mains",
        questions: [
          { objective: "O1", q: "Lequel de ces points fait partie d'une posture de frappe sûre ?", options: ["Les pieds à plat sur le sol et le bas du dos soutenu", "Les épaules remontées vers les oreilles", "Les poignets pliés très haut", "Le clavier à bout de bras"], answer: 0, why: "Pieds à plat, dos soutenu et épaules détendues font partie de la posture neutre décrite par l'OSHA." },
          { objective: "O1", q: "Après une heure de frappe, votre main fourmille et cela ne passe pas. Que faites-vous ?", options: ["Taper plus fort pour la réchauffer", "Ignorer et continuer", "Arrêter et en parler à un médecin ou à un infirmier", "Passer à la frappe avec un seul doigt"], answer: 2, why: "Une douleur, des fourmillements ou un engourdissement qui durent sont un signal pour arrêter et consulter un professionnel de santé." },
          { objective: "O2", q: "Où repose votre index droit ?", options: ["Sur F", "Sur H", "Sur ;", "Sur J"], answer: 3, why: "L'index droit repose sur J, la touche avec le relief." },
          { objective: "O2", q: "Vous regardez sans cesse vos mains. Qu'est-ce qui aide le plus ?", options: ["Regarder les touches plus attentivement", "Couvrir vos mains avec un tissu et taper lentement", "Taper plutôt avec deux doigts", "Éteindre l'écran"], answer: 1, why: "Couvrir vos mains vous oblige à compter sur la mémoire des doigts, et c'est ainsi qu'on apprend à taper sans regarder." },
          { objective: "O4", q: "Un formulaire d'emploi demande un prix : $49.99. Sur un clavier QWERTY américain, comment tapez-vous le signe $ ?", options: ["Maintenir Maj et appuyer sur la touche 4", "Appuyer sur Verr Maj, puis sur 4", "Appuyer deux fois sur la touche 4", "Maintenir Maj et appuyer sur la touche S"], answer: 0, why: "Le $ est le symbole obtenu avec Maj sur la touche 4 de la rangée des chiffres d'un clavier américain." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Vitesse, précision et plan",
      lessons: [
        {
          title: "Mesurer votre vitesse et votre précision",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer vos mots par minute et votre précision à partir d'un test de frappe chronométré.",
          text: [
            "La vitesse de frappe se compte en mots par minute (MPM, en anglais WPM). Comme les mots n'ont pas tous la même longueur, les tests de frappe comptent 5 caractères (lettres, espaces et ponctuation) pour un mot. Si vous tapez 200 caractères en une minute, cela fait 200 divisé par 5 = 40 MPM. Pour un test plus long, divisez aussi par le nombre de minutes : 450 caractères en 3 minutes, c'est 90 mots divisés par 3 = 30 MPM.",
            "La précision indique combien de vos mots étaient justes. Précision = mots corrects divisés par le total des mots tapés, fois 100. Si vous avez tapé 50 mots dont 4 avec des erreurs, la précision est de 46 divisé par 50 = 92 %. Certains tests donnent aussi des MPM nets, qui retirent les erreurs : le nombre d'erreurs divisé par les minutes, soustrait de votre vitesse.",
            "La précision compte plus que la vitesse. Une personne qui tape vite mais fait beaucoup d'erreurs est lente au travail, car chaque erreur doit être trouvée et corrigée. Travaillez d'abord la précision, puis la vitesse. Vous pouvez vous chronométrer avec le minuteur d'un téléphone et un éditeur de texte (beaucoup de programmes affichent le nombre de caractères), ou utiliser un site d'entraînement gratuit comme typing.com (en anglais), qui calcule la vitesse et la précision pour vous."
          ],
          steps: ["Choisissez un paragraphe que vous n'avez pas encore tapé, tiré d'un livre, d'un article ou d'une offre d'emploi.", "Réglez un minuteur sur 1 minute (ou 3 minutes pour un score plus stable).", "Tapez à votre rythme normal sans vous arrêter pour corriger.", "Comptez les caractères, espaces compris, ou utilisez le compteur de caractères du programme.", "Vitesse : caractères divisés par 5, puis divisés par le nombre de minutes.", "Précision : mots corrects divisés par mots tapés, fois 100. Notez les deux avec la date."],
          words: [["MPM", "mots par minute : le nombre de mots que vous tapez en une minute (WPM en anglais)."], ["Mot standard", "5 caractères, espaces et ponctuation compris, comptés comme un mot dans les tests de frappe."], ["Précision", "le pourcentage de ce que vous avez tapé qui est correct."], ["MPM nets", "votre vitesse après déduction des erreurs."], ["Caractère", "toute lettre, tout chiffre, espace ou symbole que vous tapez."]],
          slides: [
            { title: "Les mots par minute", bullets: ["Tous les 5 caractères comptent pour 1 mot", "200 caractères en 1 minute = 40 MPM", "450 caractères en 3 minutes = 30 MPM"] },
            { title: "La précision", bullets: ["Mots corrects divisés par mots tapés, fois 100", "46 justes sur 50 = 92 %", "Les MPM nets retirent les erreurs"] },
            { title: "La précision d'abord", bullets: ["Chaque erreur coûte du temps à corriger", "Travaillez la précision, puis la vitesse"] },
            { title: "Comment vous tester", bullets: ["Un nouveau paragraphe et le minuteur d'un téléphone", "Ou un site gratuit comme typing.com", "Notez le score et la date"] }
          ],
          sources: [{ name: "Typing.com (leçons et tests de frappe gratuits, en anglais)", url: "https://www.typing.com/" }],
          tryIt: "Faites un test d'une minute : réglez un minuteur, tapez un nouveau paragraphe tiré d'une offre d'emploi ou d'un article, et arrêtez quand le minuteur sonne. Comptez les caractères (ou utilisez le compteur), calculez vos MPM, repérez vos erreurs et calculez votre précision. Écrivez les deux résultats et la date du jour en haut d'une page. C'est votre score de départ.",
          youCanNow: "vous chronométrer, calculer vos mots par minute et votre précision, et noter un score de départ.",
          quickCheck: [
            { objective: "O3", q: "Vous avez tapé 250 caractères en une minute. Quelle est votre vitesse ?", options: ["25 MPM", "250 MPM", "100 MPM", "50 MPM"], answer: 3, why: "250 caractères divisés par 5 font 50 mots, en une minute : 50 MPM." },
            { objective: "O3", q: "Vous avez tapé 40 mots, dont 2 avec des erreurs. Quelle est votre précision ?", options: ["80 %", "98 %", "95 %", "38 %"], answer: 2, why: "38 mots corrects divisés par 40 mots tapés font 0,95, soit 95 %." }
          ]
        },
        {
          title: "Raccourcis et touches d'édition qui font gagner du temps",
          objectives: ["O5"],
          minutes: 5,
          goal: "Utiliser les raccourcis clavier pour sélectionner, copier, coller, annuler et enregistrer sans la souris.",
          text: [
            "Chaque fois que vous prenez la souris, vos mains quittent la rangée de repos. Les raccourcis clavier permettent de modifier un texte sans vous arrêter. Sous Windows, ils utilisent la touche Ctrl ; sur un Mac, la plupart utilisent plutôt la touche Commande (⌘).",
            "Les cinq essentiels : Ctrl+A sélectionne tout, Ctrl+C copie, Ctrl+V colle, Ctrl+Z annule votre dernière modification et Ctrl+S enregistre. Ctrl+X coupe (retire et copie). Pour faire un raccourci, maintenez Ctrl, appuyez brièvement sur la lettre, puis relâchez les deux. Sur un clavier AZERTY, les lettres A et Z ne sont pas au même endroit, mais les raccourcis gardent les mêmes lettres.",
            "Les touches d'édition aident aussi. Retour arrière efface à gauche du curseur ; Suppr efface à droite. Les flèches déplacent le curseur. Début et Fin sautent au début ou à la fin d'une ligne. Maintenez Maj avec une flèche pour sélectionner le texte lettre par lettre. Dans beaucoup de programmes, Ctrl avec la flèche gauche ou droite saute d'un mot entier. Corrigez une erreur quand vous la voyez, mais ne vous arrêtez pas pour revérifier chaque lettre."
          ],
          steps: ["Maintenez Ctrl (Commande sur un Mac) avec l'auriculaire gauche.", "Appuyez sur la lettre : A tout sélectionner, C copier, X couper, V coller, Z annuler, S enregistrer.", "Relâchez les deux touches.", "Utilisez Maj avec les flèches pour sélectionner une partie de ligne.", "Faites chaque raccourci cinq fois pour qu'il devienne une habitude."],
          words: [["Raccourci", "une combinaison de touches qui fait une tâche sans la souris."], ["Ctrl", "la touche Contrôle d'un clavier Windows, utilisée pour la plupart des raccourcis."], ["Touche Commande", "la touche avec le symbole ⌘ sur les claviers Mac, qui fait ce que fait Ctrl sous Windows."], ["Curseur", "le trait qui clignote et montre où votre texte va s'écrire."], ["Annuler", "défaire la dernière modification que vous avez faite."]],
          slides: [
            { title: "Pourquoi les raccourcis", bullets: ["Les mains restent sur le clavier", "Moins d'allers-retours vers la souris", "Windows : Ctrl ; Mac : en général Commande"] },
            { title: "Les cinq essentiels", bullets: ["Ctrl+A tout sélectionner, Ctrl+C copier, Ctrl+V coller", "Ctrl+Z annuler", "Ctrl+S enregistrer ; Ctrl+X couper"] },
            { title: "Les touches d'édition", bullets: ["Retour arrière efface à gauche ; Suppr efface à droite", "Début et Fin sautent au début ou à la fin de la ligne", "Maj + flèche sélectionne du texte"] }
          ],
          tryIt: "Tapez trois courtes lignes sur un emploi que vous voulez. Ensuite, sans toucher la souris : sélectionnez tout (Ctrl+A), copiez (Ctrl+C), allez à la fin avec la touche Fin et les flèches, collez (Ctrl+V), annulez le collage (Ctrl+Z) et enregistrez le fichier (Ctrl+S). Sur un Mac, utilisez Commande à la place de Ctrl. Faites-le deux fois.",
          youCanNow: "sélectionner, copier, couper, coller, annuler et enregistrer au clavier, et vous déplacer dans une ligne avec les touches d'édition.",
          quickCheck: [
            { objective: "O5", q: "Vous venez d'effacer un paragraphe par erreur. Quel raccourci le fait revenir sous Windows ?", options: ["Ctrl+Z", "Ctrl+S", "Ctrl+A", "Ctrl+P"], answer: 0, why: "Ctrl+Z annule la dernière modification." },
            { objective: "O5", q: "Sur un Mac, quelle touche la plupart des raccourcis utilisent-ils à la place de Ctrl ?", options: ["Maj", "Commande", "Verr Maj", "Tab"], answer: 1, why: "La plupart des raccourcis Mac utilisent la touche Commande là où Windows utilise Ctrl." }
          ]
        },
        {
          title: "Votre plan d'entraînement et le test de frappe d'embauche",
          objectives: ["O6", "O3"],
          minutes: 6,
          goal: "Écrire un plan d'entraînement de quatre semaines avec votre score de départ, un objectif, des exercices quotidiens et un tableau de suivi.",
          text: [
            "La frappe progresse avec un court entraînement quotidien, pas avec de longues séances le week-end. 10 à 15 minutes par jour, la plupart des jours, marchent mieux qu'une heure une fois par semaine, car vos doigts prennent des habitudes par la répétition. Gardez les yeux sur l'écran et une posture neutre à chaque fois.",
            "Une bonne séance quotidienne a quatre parties : 2 minutes d'échauffement sur la rangée de repos, un exercice sur vos touches les plus faibles (celles que vous avez le plus ratées au test), un court exercice de chiffres ou de raccourcis, et un vrai texte, comme une offre d'emploi ou un article. Une fois par semaine, faites un test chronométré et notez le score dans votre tableau de suivi. Fixez d'abord un objectif de précision, puis de vitesse, et comparez chaque semaine avec votre score de départ.",
            "Certains employeurs font passer un test de frappe avant d'embaucher. L'offre d'emploi ou le service de recrutement indique en général ce qui est testé et la vitesse demandée ; sinon, demandez. Avant le test : installez-vous dans une bonne position, échauffez-vous deux minutes, lisez les consignes et tapez de façon régulière sans vous précipiter. Ne payez jamais un site web qui promet un certificat de frappe comme condition pour obtenir un emploi ; l'employeur fait passer son propre test."
          ],
          steps: ["Notez vos MPM, votre précision et la date de départ, tirés de la leçon 4.", "Fixez un objectif pour la semaine 4 : la précision d'abord, puis la vitesse.", "Listez vos touches les plus faibles d'après votre test.", "Prévoyez chaque jour : échauffement, exercice sur les touches faibles, exercice de chiffres ou de raccourcis, vrai texte.", "Choisissez un jour par semaine pour un test chronométré et faites un tableau de suivi : date, MPM, précision, remarque.", "Ajoutez un plan pour le jour du test : posture, échauffement, lecture des consignes, rythme régulier."],
          words: [["Plan d'entraînement", "un programme écrit de ce que vous allez travailler, quand, et comment vous mesurerez vos progrès."], ["Tableau de suivi", "un tableau où vous notez vos scores chaque semaine."], ["Touches faibles", "les touches que vous ratez ou sur lesquelles vous ralentissez le plus souvent."], ["Test préalable à l'embauche", "un test qu'un employeur fait passer pour vérifier une compétence avant d'embaucher."]],
          slides: [
            { title: "Court et souvent", bullets: ["10 à 15 minutes par jour, la plupart des jours", "Mieux qu'une longue séance par semaine", "Les yeux sur l'écran, une bonne posture à chaque fois"] },
            { title: "Une séance quotidienne", bullets: ["Échauffement sur la rangée de repos", "Exercice sur vos touches les plus faibles", "Chiffres ou raccourcis, puis un vrai texte"] },
            { title: "Suivre vos progrès", bullets: ["Un test chronométré par semaine", "Suivi : date, MPM, précision, remarque", "Objectif de précision d'abord, puis de vitesse"] },
            { title: "Le test de frappe d'embauche", bullets: ["L'offre ou l'employeur dit ce qui est testé", "Échauffez-vous, lisez les consignes, gardez un rythme régulier", "Ne payez jamais un site pour un certificat afin d'être embauché"] }
          ],
          sources: [{ name: "Typing.com (leçons et tests de frappe gratuits, en anglais)", url: "https://www.typing.com/" }],
          tryIt: "Tâche finale : écrivez votre plan d'entraînement de quatre semaines. Mettez en haut vos MPM et votre précision de départ tirés de la leçon 4, fixez un objectif pour chacun, listez vos touches les plus faibles et écrivez la séance de 10 à 15 minutes de chaque jour, avec les dates. Ajoutez un tableau de suivi avec quatre lignes de test hebdomadaire et un court plan pour le jour du test.",
          youCanNow: "écrire et suivre un plan de frappe de quatre semaines avec un score de départ, des objectifs, des exercices quotidiens et un suivi hebdomadaire, et vous préparer à un test de frappe d'embauche.",
          quickCheck: [
            { objective: "O6", q: "Quel rythme d'entraînement développe en général le mieux la frappe ?", options: ["Une séance de trois heures par mois", "S'entraîner seulement la veille d'un test", "10 à 15 minutes la plupart des jours", "S'entraîner seulement quand on en a envie"], answer: 2, why: "Un entraînement court et régulier crée des habitudes de doigts par la répétition." },
            { objective: "O6", q: "Que faut-il mettre en haut de votre plan d'entraînement ?", options: ["Votre numéro de sécurité sociale", "Une liste de sites de frappe", "Votre chanson préférée", "Vos MPM, votre précision et la date de départ"], answer: 3, why: "Un score de départ vous permet de fixer un objectif et de voir vos progrès chaque semaine." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Vitesse, précision et plan",
        questions: [
          { objective: "O3", q: "Dans un test de frappe, combien de caractères comptent pour un mot ?", options: ["1", "10", "5", "3"], answer: 2, why: "Les tests de frappe comptent 5 caractères, espaces compris, pour un mot standard." },
          { objective: "O3", q: "Vous avez tapé 600 caractères en 3 minutes. Quelle est votre vitesse ?", options: ["40 MPM", "120 MPM", "200 MPM", "60 MPM"], answer: 0, why: "600 divisé par 5 font 120 mots ; 120 divisé par 3 minutes font 40 MPM." },
          { objective: "O5", q: "Quel raccourci copie le texte sélectionné sous Windows ?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+S", "Ctrl+Z"], answer: 1, why: "Ctrl+C copie ; Ctrl+V colle." },
          { objective: "O5", q: "Vous voulez sélectionner tout un document pour changer la police. Sur quoi appuyez-vous ?", options: ["Ctrl+X", "Début", "Retour arrière", "Ctrl+A"], answer: 3, why: "Ctrl+A sélectionne tout le texte." },
          { objective: "O6", q: "Votre test montre que vous ratez surtout P, Q et Z. Qu'ajoutez-vous à votre plan ?", options: ["Un exercice quotidien sur P, Q et Z", "Rien ; on saute ces lettres", "Taper plus vite pour cacher les erreurs", "S'entraîner seulement sur la rangée de repos"], answer: 0, why: "Travailler vos touches les plus faibles, c'est ainsi qu'un plan corrige les erreurs trouvées par votre test." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Dactylographie et maîtrise du clavier",
    questions: [
      { objective: "O1", q: "Dans une posture de frappe neutre, vos poignets sont :", options: ["Pliés très haut", "Droits, dans l'axe des avant-bras", "Appuyés fort sur le bord du bureau", "Tordus sur le côté"], answer: 1, why: "Des poignets droits, dans l'axe des avant-bras, réduisent la tension." },
      { objective: "O1", q: "Vos pieds ne touchent pas le sol sur la chaise de bureau. Que pouvez-vous faire ?", options: ["Les laisser pendre", "Vous asseoir au bord de la chaise", "Croiser fort les jambes", "Utiliser une boîte ou un repose-pieds pour les avoir à plat"], answer: 3, why: "Les pieds doivent être à plat et soutenus ; un repose-pieds ou une boîte le permet." },
      { objective: "O1", q: "Pourquoi garder le clavier près de vous ?", options: ["Pour que vos coudes restent près du corps sans tendre les bras", "Pour mieux voir les touches", "Pour que l'écran paraisse plus grand", "Pour taper d'une seule main"], answer: 0, why: "Un clavier proche garde les coudes près du corps et les épaules détendues." },
      { objective: "O2", q: "Qu'est-ce que taper sans regarder ?", options: ["Taper sur un écran tactile", "Taper avec un seul doigt", "Taper sans regarder les touches, avec un doigt fixe pour chaque touche", "Taper seulement des majuscules"], answer: 2, why: "Taper sans regarder, c'est utiliser le même doigt pour chaque touche, ce qui évite de regarder." },
      { objective: "O2", q: "Sur un clavier QWERTY, quelles touches forment la rangée de repos de la main gauche ?", options: ["A S D F", "Q W E R", "Z X C V", "J K L ;"], answer: 0, why: "Les doigts gauches reposent sur A S D F ; les doigts droits sur J K L ;." },
      { objective: "O2", q: "Votre index gauche va chercher le T. Que fait-il ensuite ?", options: ["Il reste sur T", "Il revient sur F, sa touche de repos", "Il va sur la barre d'espace", "Il va sur J"], answer: 1, why: "Après chaque mouvement, le doigt revient à sa touche de repos." },
      { objective: "O2", q: "Quel doigt appuie sur la barre d'espace ?", options: ["L'auriculaire gauche", "L'annulaire droit", "L'index gauche", "Un pouce"], answer: 3, why: "Les pouces reposent sur la barre d'espace et appuient dessus." },
      { objective: "O4", q: "Pour taper un S majuscule (une touche de la main gauche), vous maintenez :", options: ["La touche Maj de gauche", "Verr Maj pour toute la phrase", "La touche Maj de droite", "La touche Ctrl"], answer: 2, why: "Utilisez la touche Maj de la main opposée à la lettre." },
      { objective: "O4", q: "Le pavé numérique tape des flèches au lieu de chiffres. Que vérifiez-vous ?", options: ["Que Verr Num est activé", "Que Verr Maj est activé", "Que l'écran est assez lumineux", "Que Ctrl est maintenu"], answer: 0, why: "Verr Num active les chiffres du pavé numérique." },
      { objective: "O4", q: "Vous saisissez le numéro de téléphone d'un client. Pourquoi le vérifier deux fois ?", options: ["Pour taper plus vite", "Un seul chiffre faux rend tout le numéro faux", "Les chiffres ne comptent pas comme des erreurs", "Pour que l'écran l'enregistre"], answer: 1, why: "Dans un nombre, un seul chiffre faux est une vraie erreur, qui peut vous faire joindre la mauvaise personne." },
      { objective: "O3", q: "Que veut dire MPM ?", options: ["Méthode de pratique de la machine", "Mots par mois", "Mots imprimés par minute", "Mots par minute"], answer: 3, why: "MPM veut dire mots par minute, la mesure habituelle de la vitesse de frappe." },
      { objective: "O3", q: "Vous avez tapé 300 caractères en 2 minutes. Quelle est votre vitesse ?", options: ["60 MPM", "150 MPM", "30 MPM", "15 MPM"], answer: 2, why: "300 divisé par 5 font 60 mots ; 60 divisé par 2 minutes font 30 MPM." },
      { objective: "O3", q: "Vous avez tapé 60 mots, dont 6 avec des erreurs. Votre précision est de :", options: ["90 %", "94 %", "54 %", "10 %"], answer: 0, why: "54 mots corrects divisés par 60 mots tapés font 0,90, soit 90 %." },
      { objective: "O3", q: "Que faut-il développer en premier ?", options: ["La vitesse, même avec beaucoup d'erreurs", "La précision, puis la vitesse", "Aucune des deux ; seule la posture compte", "La vitesse sur le pavé numérique seulement"], answer: 1, why: "Chaque erreur prend du temps à corriger : travailler la précision d'abord vous rend plus rapide dans le vrai travail." },
      { objective: "O5", q: "Quel raccourci enregistre votre fichier sous Windows ?", options: ["Ctrl+A", "Ctrl+V", "Ctrl+X", "Ctrl+S"], answer: 3, why: "Ctrl+S enregistre." },
      { objective: "O5", q: "Pourquoi utiliser les raccourcis clavier en tapant ?", options: ["Ils agrandissent le texte", "Ils activent Verr Num", "Vos mains restent sur le clavier, donc vous travaillez plus vite", "Ils vérifient l'orthographe"], answer: 2, why: "Les raccourcis évitent les allers-retours vers la souris et gardent vos mains près de la rangée de repos." },
      { objective: "O5", q: "Quelle touche saute à la fin de la ligne ?", options: ["Fin", "Tab", "Verr Maj", "Maj"], answer: 0, why: "Fin saute à la fin de la ligne ; Début saute au début." },
      { objective: "O6", q: "Dans votre plan de quatre semaines, à quelle fréquence faire un test chronométré ?", options: ["Toutes les quelques minutes", "Une fois par semaine, noté dans votre tableau de suivi", "Jamais ; les tests ralentissent", "Une seule fois, tout à la fin"], answer: 1, why: "Un test hebdomadaire noté dans un tableau montre les progrès sans prendre de temps sur l'entraînement." },
      { objective: "O6", q: "Un site web dit que vous devez payer son certificat de frappe pour être embauché. Que faites-vous ?", options: ["Payer tout de suite", "Donner vos coordonnées bancaires pour réserver une place", "Envoyer le lien à des amis pour qu'ils paient", "Ne pas payer ; les employeurs font passer leur propre test"], answer: 3, why: "Les employeurs testent eux-mêmes la frappe ; payer un site pour être embauché est un signal d'alerte." },
      { objective: "O6", q: "Quelle séance quotidienne convient à un bon plan d'entraînement ?", options: ["Une heure seulement sur la rangée de repos", "Taper n'importe quoi sans regarder l'écran", "Échauffement, exercice sur les touches faibles, exercice de chiffres ou de raccourcis, puis un vrai texte", "Seulement des tests chronométrés tous les jours"], answer: 2, why: "Une courte séance qui échauffe, corrige les touches faibles et utilise un vrai texte développe la compétence de façon régulière." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 10, 12, 14, 17] },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      { name: "Score de départ", objective: "O3", notYet: "Pas de score de départ, ou MPM et précision mal calculés.", meets: "MPM et précision de départ tirés d'un test chronométré, calculés correctement, avec la date.", exceeds: "Montre aussi le calcul (caractères, minutes, erreurs) pour qu'une autre personne puisse le vérifier." },
      { name: "Objectifs et dates", objective: "O6", notYet: "Pas d'objectif, ou pas de dates pour les quatre semaines.", meets: "Un objectif de précision et un de vitesse, avec des dates pour chaque jour ou chaque semaine.", exceeds: "L'objectif est réaliste pour 10 à 15 minutes par jour et prévoit un point d'étape à la semaine 2." },
      { name: "Exercices quotidiens", objective: "O2", notYet: "L'entraînement se résume à « taper plus ».", meets: "Chaque séance a un échauffement sur la rangée de repos, un exercice sur des touches faibles nommées et un vrai texte.", exceeds: "Les touches faibles changent d'une semaine à l'autre selon le tableau de suivi." },
      { name: "Chiffres et raccourcis", objective: "O4", notYet: "Aucun entraînement aux chiffres, aux symboles ou aux raccourcis dans le plan.", meets: "Le plan comprend des lignes de chiffres ou de pavé numérique et les raccourcis essentiels.", exceeds: "L'entraînement aux chiffres correspond à un emploi visé, comme des prix pour la vente ou des identifiants pour la saisie de données." },
      { name: "Utilisation des raccourcis", objective: "O5", notYet: "Utilise la souris pour chaque copier, coller, annuler et enregistrer.", meets: "Sait montrer tout sélectionner, copier, coller, annuler et enregistrer au clavier.", exceeds: "Utilise aussi Début, Fin et Maj avec les flèches pour modifier le texte." },
      { name: "Installation sûre et jour du test", objective: "O1", notYet: "Pas de vérification de la posture ni de plan pour le jour du test.", meets: "Le plan commence chaque séance par la vérification d'installation en six points et contient un plan pour le jour du test.", exceeds: "Prévoit des pauses et ce qu'il faut faire si la frappe fait mal." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Évolution des MPM et de la précision entre le score de départ et le test de la semaine 4",
      "Apprenants qui déclarent avoir réussi un test de frappe ou de saisie de données d'un employeur dans les 30 jours (enquête de suivi)",
      "Apprenants qui postulent à un emploi de bureau, de service client ou de saisie de données, ou qui en commencent un, dans les 90 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur de bureau ou portable avec un vrai clavier (un pavé numérique aide, mais n'est pas obligatoire)",
      "Un programme pour taper : Bloc-notes, TextEdit, Google Docs ou Microsoft Word",
      "Le minuteur d'un téléphone ou de cuisine, du papier et un stylo pour le tableau de suivi",
      "Facultatif : un site d'entraînement gratuit comme typing.com",
      "Environ 45 minutes pour les leçons et les contrôles, plus 10 à 15 minutes d'entraînement la plupart des jours pendant quatre semaines"
    ],
    facilitatorNotes: [
      "Commencez par la vérification d'installation en six points à chaque poste ; réglez les chaises et les écrans avant que quiconque ne tape. Avec des claviers AZERTY, montrez la rangée de repos Q S D F et J K L M.",
      "Faites passer le test de départ et un test chronométré d'une minute le premier jour, pour que chaque apprenant ait un score de départ.",
      "Attendez-vous à ce que la vitesse baisse pendant une ou deux semaines quand les apprenants abandonnent la frappe en cherchant les touches ; dites-leur que c'est normal.",
      "Laissez les apprenants qui baissent sans cesse les yeux couvrir leurs mains avec un tissu ou du papier.",
      "Organisez un test chronométré de groupe une fois par semaine et faites mettre à jour les tableaux de suivi ; félicitez les progrès en précision, pas seulement en vitesse.",
      "Sur les ordinateurs partagés ou de bibliothèque, rappelez aux apprenants de ne pas enregistrer de mots de passe et de se déconnecter à la fin."
    ]
  }
};
