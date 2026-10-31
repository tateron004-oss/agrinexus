"use strict";

// Koach Learn course (French translation of shared/carpentry-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "carpentry-basics-fr",
  lang: "fr",
  translationOf: "carpentry-basics",
  category: "Workforce Development",
  name: "Les bases de la charpente-menuiserie",
  skills: "Lire un mètre ruban au 1/16 de pouce près, Choisir le bois et les fixations, Respecter la sécurité des outils et des échelles, Tracer un mur à montants à partir d'un plan, Rédiger une liste de débit, Planifier votre entrée en apprentissage de charpentier-menuisier",
  outcome: "mesurer et additionner des longueurs au 1/16 de pouce près, choisir le bon bois et les bonnes fixations, expliquer les règles de sécurité pour les scies et les échelles, tracer un mur simple à montants à partir d'un plan, rédiger une liste de débit avec peu de chutes et suivre un plan daté pour entrer en apprentissage ou en formation de charpentier-menuisier.",
  about: [
    "Les charpentiers-menuisiers construisent et réparent l'ossature des maisons et des bâtiments, posent les planchers, les escaliers, les portes, les fenêtres et les moulures, et fabriquent les coffrages en bois qui retiennent le béton. La plupart apprennent sur le tas ou dans un apprentissage rémunéré. Ce cours s'adresse aux demandeurs d'emploi, aux jeunes, aux anciens militaires, aux personnes qui sortent de prison et aux adultes en reconversion qui veulent arriver prêts dans un programme ou sur leur premier chantier.",
    "Vous allez apprendre à lire un mètre ruban et à faire les calculs de fractions que les charpentiers utilisent tous les jours, à reconnaître le bois, les panneaux et les fixations, et les bons réflexes de sécurité avec les scies, les cloueuses et les échelles. Ensuite, vous lirez un plan simple, tracerez un mur à montants sur papier, rédigerez une liste de débit pour un petit projet et planifierez votre entrée en formation.",
    "Ce cours vous prépare. Il ne délivre ni permis ni certification. L'utilisation d'une scie ou de tout outil électrique s'apprend en personne, avec un formateur qualifié, des lunettes de sécurité et une protection auditive. Rien dans ce cours ne vous demande de couper avec un outil électrique à la maison.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant » et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est votre propre dossier de départ en charpente-menuiserie."
  ],
  finalTask: "Préparez votre dossier de départ en charpente-menuiserie : (1) cinq mesures au mètre ruban d'objets chez vous, au 1/16 de pouce près, et deux d'entre elles additionnées et soustraites en montrant le calcul ; (2) une liste de vérifications de sécurité avant d'utiliser une scie circulaire et une échelle à coulisse ; (3) le tracé sur papier d'un mur à montants de 8 pieds avec un entraxe de 16 pouces, avec les lisses, chaque repère de montant et le nombre de montants ; (4) une liste de débit pour une petite étagère ou une jardinière, avec les dimensions réelles des planches, la marge pour le trait de scie et le nombre de planches à acheter ; et (5) un plan daté pour postuler à deux programmes d'apprentissage ou de formation en charpente-menuiserie près de chez vous, trouvés sur des sites officiels.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes et des jeunes qui veulent un métier du bâtiment sans diplôme universitaire de quatre ans : demandeurs d'emploi, jeunes en programme d'emploi, anciens militaires, personnes qui sortent de prison et adultes en reconversion. Certains ont fait du travail manuel, militaire ou en atelier de prison ; la plupart n'ont aucune formation formelle en charpente-menuiserie.",
    startingPoint: "Savent calculer avec des nombres entiers et quelques fractions, et ont déjà utilisé un marteau ou un tournevis. La plupart ne savent pas encore lire un mètre ruban au 1/16 de pouce près, additionner des longueurs avec des fractions, distinguer la dimension nominale de la dimension réelle du bois, lire un plan ni tracer un mur.",
    gap: "Les programmes d'apprentissage et les entrepreneurs attendent des nouveaux qu'ils mesurent avec précision, connaissent les matériaux et outils de base et travaillent en sécurité dès le premier jour. Les erreurs de mesure gaspillent du bois et de l'argent ; les mauvaises habitudes avec les scies et les échelles causent des blessures graves. Les apprenants ont besoin des calculs de base, du vocabulaire, des réflexes de sécurité et d'un plan clair pour postuler.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ de la 6e à la 8e année aux États-Unis) ; chaque mot du métier est expliqué",
      "Pas de coupe à l'outil électrique à la maison : la pratique se fait avec un mètre ruban, du papier, un crayon, une règle et des chutes de carton ou de bois",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages officielles ; une calculatrice aide mais n'est pas obligatoire",
      "Temps : des leçons de 5 à 6 minutes qui s'intègrent entre le travail et les rendez-vous",
      "Jeunes de moins de 18 ans : les règles fédérales sur le travail des enfants limitent le travail avec des scies électriques et des machines à bois ; les permis et les règles des programmes varient selon l'État"
    ],
    prerequisites: "Calcul avec des nombres entiers. « Commencer une carrière dans les métiers qualifiés » aide à choisir un métier ; « Les bases de la sécurité au travail (OSHA) » couvre la sécurité générale sur le chantier. Ce cours va plus loin en charpente-menuiserie."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un mètre ruban et des objets chez vous", action: "lire des mesures au 1/16 de pouce près et additionner ou soustraire des longueurs avec des fractions", standard: "en réussissant au moins 4 sur 5, avec le calcul montré" },
    { id: "O2", condition: "Face à un travail de construction simple", action: "choisir le bois, les panneaux et les fixations adaptés et donner leurs dimensions réelles", standard: "avec le bon matériau et la dimension réelle pour au moins 4 éléments sur 5" },
    { id: "O3", condition: "Avant d'utiliser une scie, une cloueuse ou une échelle", action: "énumérer les vérifications de sécurité et l'équipement de protection pour cet outil", standard: "en nommant l'équipement de protection et au moins quatre vérifications pour chaque outil" },
    { id: "O4", condition: "Avec le plan d'un mur simple", action: "tracer un mur à montants avec un entraxe de 16 pouces et compter les montants et les lisses", standard: "avec chaque repère de montant à moins de 1/16 de pouce et le bon nombre" },
    { id: "O5", condition: "Avec le dessin d'un petit projet", action: "rédiger une liste de débit avec les dimensions réelles, la marge pour le trait de scie et le nombre de planches à acheter", standard: "de sorte que toutes les pièces tiennent dans les planches indiquées" },
    { id: "O6", condition: "En utilisant les sites officiels de votre région", action: "rédiger un plan daté pour postuler à deux programmes d'apprentissage ou de formation en charpente-menuiserie", standard: "avec de vrais programmes, leurs conditions d'admission et une date pour chaque étape" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Mesurer, matériaux et sécurité",
      lessons: [
        {
          title: "Lire un mètre ruban et additionner des fractions",
          objectives: ["O1"],
          minutes: 6,
          goal: "Lire un mètre ruban au 1/16 de pouce près et additionner ou soustraire deux longueurs.",
          text: [
            "La charpente-menuiserie repose sur le mètre ruban. Aux États-Unis, on mesure en pouces et en pieds (1 pied = 12 pouces). Chaque pouce est divisé en 16 petits espaces. Le trait le plus long au milieu du pouce est 1/2. Les traits suivants sont 1/4 et 3/4. Viennent ensuite les huitièmes, et les traits les plus courts sont les seizièmes.",
            "Pour lire une longueur, trouvez le dernier pouce entier, puis comptez les petits traits après lui. Dix seizièmes après 5 pouces, c'est 5-10/16, qui se simplifie en 5-5/8. Beaucoup de rubans marquent aussi tous les 16 pouces d'une autre couleur, car c'est un écartement courant entre les montants.",
            "Le crochet en métal au bout glisse un peu, exprès. Il sort quand vous accrochez le bout d'une planche et rentre quand vous poussez contre un mur, pour que les deux mesures soient justes. Ne le redressez jamais et ne le limez pas.",
            "Pour additionner des fractions, mettez-les au même dénominateur (le nombre du bas). 5-3/8 + 2-7/16, c'est 5-6/16 + 2-7/16 = 7-13/16. Pour soustraire d'un nombre entier, empruntez un pouce : 10 - 3-5/8, c'est 9-8/8 - 3-5/8 = 6-3/8. Mesurez deux fois, coupez une fois."
          ],
          steps: ["Accrochez le ruban au bout de la planche ou posez-le à plat contre le mur.", "Trouvez le dernier pouce entier avant la fin.", "Comptez les traits de seizième après ce pouce.", "Simplifiez la fraction (8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8).", "Notez-la tout de suite et mesurez de nouveau avant de tracer."],
          words: [
            ["Fraction", "une partie d'un pouce entier, comme 1/2, 3/8 ou 5/16."],
            ["Seizième", "1/16 de pouce, le plus petit trait sur la plupart des rubans de charpentier."],
            ["Crochet", "la languette en métal au bout du ruban ; elle glisse pour que les mesures intérieures et extérieures soient justes."],
            ["Simplifier", "écrire une fraction avec des nombres plus petits qui valent la même chose, comme 10/16 = 5/8."]
          ],
          slides: [
            { title: "Dans un pouce", bullets: ["16 petits espaces", "Trait du milieu le plus long : 1/2", "Puis 1/4 et 3/4, puis les huitièmes, puis les seizièmes"] },
            { title: "Lire une longueur", bullets: ["Trouvez le dernier pouce entier", "Comptez les seizièmes après lui", "Simplifiez : 10/16 = 5/8"] },
            { title: "Le crochet bouge exprès", bullets: ["Il sort quand vous accrochez une planche", "Il rentre quand vous poussez contre un mur", "Ne le redressez pas, ne le limez pas"] },
            { title: "Additionner et soustraire", bullets: ["Même nombre du bas", "5-3/8 + 2-7/16 = 7-13/16", "10 - 3-5/8 = 6-3/8", "Mesurez deux fois, coupez une fois"] }
          ],
          tryIt: "Mesurez cinq objets chez vous (la largeur d'une porte, un livre, une étagère, une boîte, le bord d'une table) au 1/16 de pouce près et notez chaque mesure. Additionnez-en ensuite deux et soustrayez la plus courte de la plus longue, en montrant le calcul. Gardez cette page pour votre dossier de départ.",
          youCanNow: "lire un mètre ruban au 1/16 de pouce près et additionner ou soustraire des longueurs avec des fractions.",
          quickCheck: [
            { objective: "O1", q: "Le ruban montre 6 pouces entiers et 12 seizièmes de plus. Quelle est la longueur ?", options: ["6-1/2 pouces", "6-12 pouces", "6-3/4 pouces", "7-1/4 pouces"], answer: 2, why: "12/16 se simplifie en 3/4, donc la longueur est de 6-3/4 pouces." },
            { objective: "O1", q: "Combien font 4-1/2 + 3-3/16 ?", options: ["7-4/18", "7-11/16", "8-1/16", "7-1/2"], answer: 1, why: "1/2 vaut 8/16, et 8/16 + 3/16 = 11/16, donc le total est 7-11/16." }
          ]
        },
        {
          title: "Bois, panneaux et fixations",
          objectives: ["O2"],
          minutes: 5,
          goal: "Choisir la bonne planche, le bon panneau ou la bonne fixation pour un travail et donner sa dimension réelle.",
          text: [
            "Le bois se vend selon une dimension nominale, son nom, qui est plus grande que la dimension réelle. Un 2x4 mesure en réalité environ 1-1/2 sur 3-1/2 pouces. Un 2x6 mesure environ 1-1/2 sur 5-1/2. Un 1x10 mesure environ 3/4 sur 9-1/4. Planifiez toujours avec la dimension réelle, sinon votre projet ne s'ajustera pas.",
            "Les panneaux sont vendus en feuilles de 4 sur 8 pieds. Le contreplaqué est fait de fines couches de bois collées en croix ; l'OSB est fait de copeaux de bois pressés. Les deux couvrent les planchers, les murs et les toits. Le bois traité sous pression contient des produits chimiques qui résistent à la pourriture et aux insectes ; on l'utilise donc dehors et au contact du béton ou du sol. Portez des gants et un masque anti-poussière pour le couper, et ne brûlez jamais les chutes.",
            "Les clous se mesurent en « penny » (écrit d). Un clou ordinaire 16d, d'environ 3-1/2 pouces de long, est un clou de charpente standard. Les vis tiennent mieux et s'enlèvent plus facilement ; percez un petit avant-trou près du bout d'une planche pour qu'elle ne se fende pas. Dehors, utilisez des fixations traitées ou en inox pour qu'elles ne rouillent pas.",
            "Regardez le long de chaque planche avant de l'utiliser. La plupart ont une légère courbe sur la rive, appelée la couronne. Pour les solives de plancher et les chevrons, la couronne va vers le haut, pour que le poids la remette à plat."
          ],
          words: [
            ["Dimension nominale", "la dimension de nom du bois, comme 2x4, plus grande que sa vraie dimension."],
            ["Dimension réelle", "la vraie dimension mesurée, comme 1-1/2 sur 3-1/2 pouces pour un 2x4."],
            ["Contreplaqué et OSB", "feuilles de 4 sur 8 pieds pour les planchers, les murs et les toits ; le contreplaqué est fait de couches collées, l'OSB de copeaux de bois pressés."],
            ["Traité sous pression", "bois contenant des produits qui résistent à la pourriture et aux insectes, utilisé dehors et près du sol."],
            ["Penny (d)", "le système de taille des clous ; un clou ordinaire 16d mesure environ 3-1/2 pouces."],
            ["Couronne", "la légère courbe vers le haut le long de la rive d'une planche."]
          ],
          slides: [
            { title: "Nominal n'est pas réel", bullets: ["2x4 : environ 1-1/2 x 3-1/2 po", "2x6 : environ 1-1/2 x 5-1/2 po", "1x10 : environ 3/4 x 9-1/4 po", "Planifiez avec la dimension réelle"] },
            { title: "Panneaux et bois traité", bullets: ["Contreplaqué et OSB : feuilles de 4 x 8 pieds", "Traité sous pression : dehors, près du sol ou du béton", "Gants et masque pour le couper ; ne brûlez jamais les chutes"] },
            { title: "Fixations", bullets: ["Clou ordinaire 16d : environ 3-1/2 po, pour la charpente", "Les vis tiennent mieux ; avant-trou près des bouts", "Dehors : traitées ou en inox"] },
            { title: "Regardez le long de chaque planche", bullets: ["Trouvez la couronne", "Couronne vers le haut pour solives et chevrons"] }
          ],
          tryIt: "Dans un magasin, sur une page de bois en ligne ou chez vous, trouvez une planche et un panneau. Écrivez la dimension nominale, puis la dimension réelle. Choisissez ensuite une fixation pour chacun de ces travaux et écrivez pourquoi : monter l'ossature d'un mur, une terrasse dehors, une étagère près du bout d'une planche.",
          youCanNow: "distinguer la dimension nominale de la dimension réelle du bois et choisir des planches, des panneaux et des fixations adaptés au travail.",
          quickCheck: [
            { objective: "O2", q: "Vous empilez trois 2x4 à plat. Quelle est à peu près l'épaisseur de la pile ?", options: ["4-1/2 pouces", "6 pouces", "3 pouces", "10-1/2 pouces"], answer: 0, why: "Un 2x4 fait en réalité environ 1-1/2 pouce d'épaisseur, et 3 x 1-1/2 = 4-1/2 pouces." },
            { objective: "O2", q: "Quel bois utilisez-vous pour un poteau qui touche le sol dehors ?", options: ["Du contreplaqué pour l'intérieur", "N'importe quel 2x4 non traité", "De l'OSB", "Du bois traité sous pression"], answer: 3, why: "Le bois traité sous pression résiste à la pourriture et aux insectes qu'apporte le contact avec le sol." }
          ]
        },
        {
          title: "Sécurité des outils et des échelles",
          objectives: ["O3"],
          minutes: 6,
          goal: "Énumérer l'équipement de protection et les vérifications avant usage d'une scie circulaire, d'une cloueuse et d'une échelle.",
          text: [
            "En charpente-menuiserie, les blessures viennent souvent des scies, des cloueuses, des chutes et du port de charges. À chaque fois, portez des lunettes de sécurité, une protection auditive près des outils bruyants, des chaussures de sécurité et, sur un chantier, un casque. Portez un masque anti-poussière quand la coupe fait de la poussière. Pas de manches amples, de bijoux ni de cheveux longs détachés près d'une lame. Si vous avez moins de 18 ans, les règles fédérales interdisent la plupart des travaux avec des scies électriques et des machines à bois ; les apprentis et élèves en formation de 16 ans et plus, dans des programmes agréés, ont une exception limitée.",
            "Avant d'utiliser une scie circulaire : vérifiez le câble et la fiche ou la batterie, assurez-vous que le carter de protection de la lame revient seul en place, utilisez une lame bien affûtée faite pour le matériau et serrez la pièce avec des serre-joints pour qu'elle ne bouge pas. Débranchez la scie ou retirez la batterie avant de changer la lame. Placez-vous sur le côté de la ligne de coupe, gardez les deux mains loin d'elle et laissez la lame s'arrêter avant de soulever la scie. Une lame qui se coince peut renvoyer la scie vers vous.",
            "Cloueuses : gardez le doigt hors de la gâchette jusqu'au moment de clouer, ne la pointez jamais vers quelqu'un et coupez l'air ou retirez la batterie pour la débloquer. Un outil à gâchette coup par coup (séquentielle) est plus sûr pour les débutants.",
            "Échelles (d'après la fiche de sécurité des échelles de l'OSHA, l'agence fédérale américaine de sécurité au travail) : inspectez-la d'abord, gardez trois points d'appui, faites face à l'échelle, écartez le pied d'environ 1 pied pour chaque 4 pieds de hauteur jusqu'à l'appui du haut, faites-la dépasser d'au moins 3 pieds au-dessus du point d'arrivée, et ne montez pas sur la marche du haut sauf si elle est faite pour ça. Faites attention aux lignes électriques, surtout avec une échelle en métal."
          ],
          steps: ["Mettez lunettes de sécurité, protection auditive et chaussures de sécurité.", "Vérifiez le câble, la fiche ou la batterie et le carter.", "Serrez la pièce.", "Débranchez ou retirez la batterie avant de changer la lame ou de débloquer.", "Installez et vérifiez l'échelle avant de monter."],
          words: [
            ["EPI", "équipement de protection individuelle : lunettes de sécurité, protection auditive, gants, chaussures de sécurité, casque."],
            ["Carter de lame", "la protection qui revient sur la lame de la scie à la fin de la coupe."],
            ["Rebond", "quand la lame se coince et que la scie saute en arrière vers l'utilisateur."],
            ["Trois points d'appui", "deux mains et un pied, ou deux pieds et une main, sur l'échelle en permanence."]
          ],
          slides: [
            { title: "À porter à chaque fois", bullets: ["Lunettes de sécurité et protection auditive", "Chaussures de sécurité ; casque sur un chantier", "Masque anti-poussière quand la coupe fait de la poussière"] },
            { title: "Vérifications de la scie circulaire", bullets: ["Câble, fiche ou batterie en bon état", "Le carter revient seul", "Lame affûtée ; pièce serrée", "Débranchez avant de changer la lame"] },
            { title: "Pendant la coupe", bullets: ["Placez-vous sur le côté de la ligne de coupe", "Mains loin de la lame", "Laissez la lame s'arrêter avant de soulever"] },
            { title: "Échelles (OSHA)", bullets: ["Inspectez d'abord ; trois points d'appui", "1 pied d'écart pour 4 pieds de hauteur", "3 pieds au-dessus de l'arrivée ; pas sur la marche du haut", "Repérez les lignes électriques"] }
          ],
          sources: [
            { name: "OSHA QuickCard : sécurité des échelles portables (en anglais)", url: "https://www.osha.gov/sites/default/files/publications/portable_ladder_qc.pdf" },
            { name: "Département du Travail des États-Unis : règles sur le travail des enfants hors agriculture (fiche 43)", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }
          ],
          tryIt: "Écrivez sur une fiche une liste de vérifications de sécurité pour une scie circulaire (au moins quatre vérifications et l'équipement que vous portez) et une autre pour une échelle à coulisse (au moins quatre vérifications). Si vous avez une échelle chez vous, faites seulement l'inspection et le contrôle de la règle 1 pour 4 ; n'utilisez pas de scie électrique chez vous sans formation. Gardez la fiche pour votre dossier de départ.",
          youCanNow: "énumérer l'équipement et les vérifications avant d'utiliser une scie, une cloueuse ou une échelle, et vous savez que la coupe s'apprend en personne avec un formateur qualifié.",
          quickCheck: [
            { objective: "O3", q: "Vous devez changer la lame d'une scie circulaire à câble. Que faites-vous d'abord ?", options: ["Maintenir le verrou de gâchette désactivé", "Débrancher la scie", "Mettre seulement des gants", "Demander à quelqu'un de tenir le carter ouvert"], answer: 1, why: "Débrancher (ou retirer la batterie) empêche la scie de démarrer pendant que vos mains sont près de la lame." },
            { objective: "O3", q: "L'appui du haut est à 12 pieds de hauteur sur un mur. À quelle distance environ placez-vous le pied de l'échelle ?", options: ["1 pied", "6 pieds", "12 pieds", "3 pieds"], answer: 3, why: "La règle de l'OSHA est d'environ 1 pied d'écart pour 4 pieds de hauteur : 12 / 4 = 3 pieds." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Mesurer, matériaux et sécurité",
        questions: [
          { objective: "O1", q: "Combien font 10 - 4-3/8 ?", options: ["6-3/8", "5-5/8", "6-5/8", "5-3/8"], answer: 1, why: "Empruntez un pouce : 9-8/8 - 4-3/8 = 5-5/8." },
          { objective: "O2", q: "Votre plan indique qu'une étagère est un 1x10. Quelle est à peu près la vraie largeur de la planche ?", options: ["10 pouces", "9-1/2 pouces", "1 pouce", "9-1/4 pouces"], answer: 3, why: "Un 1x10 mesure environ 3/4 sur 9-1/4 pouces ; planifiez avec la dimension réelle." },
          { objective: "O2", q: "Vous vissez dans une planche à 1 pouce de son bout. Qu'est-ce qui l'empêche de se fendre ?", options: ["Percer d'abord un avant-trou", "Prendre une vis plus longue", "Taper sur la vis avec un marteau", "Utiliser de l'OSB à la place"], answer: 0, why: "Un avant-trou laisse de la place à la vis pour que le bois près du bout ne se fende pas." },
          { objective: "O3", q: "Où vous placez-vous quand vous coupez avec une scie circulaire ?", options: ["Juste derrière la lame", "Devant la scie", "Sur le côté de la ligne de coupe", "Sur la planche que vous coupez"], answer: 2, why: "Si la scie rebondit, elle revient droit le long de la ligne de coupe ; en vous plaçant sur le côté, vous restez hors de sa trajectoire." },
          { objective: "O3", q: "Quelle règle de l'OSHA sur les échelles est correcte ?", options: ["Monter sur la marche du haut pour atteindre plus haut", "Utiliser une échelle en métal près des lignes électriques", "Garder une main sur l'échelle", "Garder trois points d'appui pendant la montée"], answer: 3, why: "Trois points d'appui (deux mains et un pied, ou deux pieds et une main) vous empêchent de tomber." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Plans, traçage et votre parcours",
      lessons: [
        {
          title: "Lire un plan et tracer un mur à montants",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tracer un mur à montants de 8 pieds avec un entraxe de 16 pouces et compter les montants et les lisses.",
          text: [
            "Un plan est un dessin à l'échelle. Sur beaucoup de plans de maison, 1/4 de pouce sur le papier égale 1 pied en réalité. Un plan d'étage montre le bâtiment vu d'en haut ; une élévation montre un mur vu de côté. Les longueurs s'écrivent en pieds et en pouces, comme 12'-6\" (12 pieds 6 pouces). Ne mesurez jamais un plan imprimé avec une règle pour trouver une dimension ; utilisez les cotes écrites ou demandez.",
            "L'ossature de base d'un mur comprend une lisse basse, une lisse haute (souvent doublée) et des montants debout entre les deux. Les montants sont en général posés avec un entraxe de 16 pouces (« o.c. », on center en anglais), c'est-à-dire 16 pouces du centre d'un montant au centre du suivant. Certains murs ont un entraxe de 24 pouces ; suivez le plan.",
            "Pour tracer : placez la lisse basse et la lisse haute côte à côte, mesurez depuis un bout et marquez les deux en même temps. Marquez le premier montant au bout, puis des repères à 16, 32, 48, 64 et 80 pouces. Beaucoup de charpentiers marquent 3/4 de pouce avant chaque trait (15-1/4, 31-1/4, etc.) et mettent un X du côté où va le montant, pour que les bords des panneaux de 4 pieds tombent au centre des montants. Ajoutez un dernier montant à l'autre bout.",
            "Compter les montants : longueur du mur en pouces divisée par l'entraxe, plus un. Un mur de 8 pieds fait 96 pouces ; 96 / 16 = 6 espaces, donc 7 montants. Les angles, les portes et les fenêtres demandent des montants en plus ; le plan ou votre chef d'équipe vous les indique."
          ],
          steps: ["Lisez sur le plan la longueur du mur et l'entraxe des montants.", "Placez les lisses haute et basse côte à côte, bouts alignés.", "Marquez les deux lisses ensemble depuis le même bout.", "Mettez un X là où va chaque montant, et un montant à chaque bout.", "Comptez : longueur / entraxe + 1, plus les montants supplémentaires indiqués sur le plan."],
          words: [
            ["Échelle", "le rapport entre la taille du dessin et la taille réelle, comme 1/4 de pouce = 1 pied."],
            ["Plan d'étage et élévation", "le plan d'étage montre la vue d'en haut ; l'élévation montre un côté d'un mur ou d'un bâtiment."],
            ["Lisse", "la pièce de bois à plat en bas ou en haut d'un mur, sur laquelle les montants reposent ou qu'ils soutiennent."],
            ["Montant", "une pièce de bois verticale dans l'ossature d'un mur, souvent un 2x4 ou un 2x6."],
            ["Entraxe (o.c.)", "la distance mesurée du centre d'un montant au centre du suivant."]
          ],
          slides: [
            { title: "Lire un plan", bullets: ["Dessiné à l'échelle, souvent 1/4 po = 1 pied", "Plan d'étage : vu d'en haut ; élévation : vu de côté", "Utilisez les cotes écrites, pas une règle"] },
            { title: "Les parties d'un mur", bullets: ["Lisse basse et lisse haute", "Montants entre les deux", "En général, entraxe de 16 po"] },
            { title: "Tracer", bullets: ["Lisses côte à côte, marquez les deux à la fois", "Repères à 16, 32, 48, 64, 80 po", "Un X là où va chaque montant"] },
            { title: "Compter les montants", bullets: ["Longueur en pouces / entraxe + 1", "Mur de 8 pieds : 96 / 16 = 6, donc 7 montants", "Ajoutez-en pour les angles, portes et fenêtres"] }
          ],
          tryIt: "Sur papier (ou sur une longue bande de carton marquée jusqu'à 96 pouces si vous avez la place), dessinez un mur de 8 pieds. Tracez la lisse basse avec un entraxe de 16 pouces depuis le bout gauche, mettez un X là où va chaque montant et écrivez combien de montants et de lisses il vous faut. Vérifiez chaque repère avec votre ruban. Gardez-le pour votre dossier de départ.",
          youCanNow: "lire le plan d'un mur simple et tracer des montants avec un entraxe de 16 pouces en trouvant le bon nombre.",
          quickCheck: [
            { objective: "O4", q: "Que signifie un entraxe de 16 pouces ?", options: ["16 pouces entre les bords de deux montants", "16 pouces du centre d'un montant au centre du suivant", "16 montants dans le mur", "Un mur de 16 pouces de large"], answer: 1, why: "L'entraxe se mesure de centre à centre, donc chaque montant tombe au même écartement." },
            { objective: "O4", q: "Combien de montants faut-il pour un mur de 12 pieds avec un entraxe de 16 pouces, sans porte ni fenêtre ?", options: ["10", "9", "12", "8"], answer: 0, why: "12 pieds font 144 pouces ; 144 / 16 = 9 espaces, plus 1 = 10 montants." }
          ]
        },
        {
          title: "Rédiger une liste de débit",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rédiger une liste de débit pour un petit projet avec les dimensions réelles, la marge pour le trait de scie et les planches à acheter.",
          text: [
            "Une liste de débit est un tableau de toutes les pièces dont vous avez besoin : le nom de la pièce, la quantité, le matériau, et la longueur et la largeur exactes. Elle économise du bois, de l'argent et des allers-retours au magasin, et sur un chantier elle permet à un aide de couper pendant que le charpentier principal monte l'ouvrage.",
            "Utilisez les dimensions réelles. Exemple : une étagère de 24 pouces de large au total, en 1x10. Les deux côtés font chacun 3/4 de pouce d'épaisseur, donc la tablette entre eux mesure 24 - 3/4 - 3/4 = 22-1/2 pouces de long.",
            "Chaque coupe de scie transforme une bande de bois en sciure. Cette bande, c'est le trait de scie, environ 1/8 de pouce pour beaucoup de lames. Ajoutez un trait de scie pour chaque coupe quand vous calculez combien de pièces tiennent dans une planche.",
            "Ensuite, planifiez les planches. Dans un 1x10 de 8 pieds (96 pouces) : deux côtés de 30 pouces et une tablette de 22-1/2 pouces utilisent 82-1/2 pouces ; avec 3 traits de scie (3/8 de pouce), cela fait 82-7/8 pouces, et il reste environ 13 pouces de chute. Les planches ne sont pas toujours parfaitement d'équerre ni exactement de 96 pouces ; recoupez donc d'abord le bout d'usine et achetez un peu plus."
          ],
          steps: ["Listez chaque pièce avec son nom et sa quantité.", "Calculez chaque longueur et largeur à partir des dimensions réelles.", "Classez les pièces par matériau.", "Placez les pièces sur des planches de longueur standard, en ajoutant un trait de scie par coupe.", "Écrivez combien de planches acheter, avec un peu de marge."],
          words: [
            ["Liste de débit", "un tableau de toutes les pièces à couper, avec la quantité, le matériau et les dimensions."],
            ["Trait de scie", "la largeur de bois qu'enlève une lame de scie en une coupe, souvent environ 1/8 de pouce."],
            ["Chute", "le bois qui reste une fois toutes les pièces coupées."]
          ],
          slides: [
            { title: "Ce que contient une liste de débit", bullets: ["Nom de la pièce et quantité", "Matériau", "Longueur et largeur exactes"] },
            { title: "Utilisez les dimensions réelles", bullets: ["Étagère de 24 po avec des côtés de 3/4 po", "24 - 3/4 - 3/4 = tablette de 22-1/2 po"] },
            { title: "Prévoyez le trait de scie", bullets: ["Chaque coupe enlève environ 1/8 po", "Ajoutez un trait de scie par coupe"] },
            { title: "Placer les pièces sur les planches", bullets: ["Planche de 96 po : 30 + 30 + 22-1/2 + 3/8", "= 82-7/8 po, environ 13 po de chute", "Recoupez le bout d'usine ; achetez un peu plus"] }
          ],
          tryIt: "Dessinez une petite étagère ou une jardinière avec ses dimensions totales. Rédigez une liste de débit (pièce, quantité, matériau, longueur, largeur) avec les dimensions réelles des planches. Placez ensuite les pièces sur des planches de 8 pieds avec 1/8 de pouce par coupe et écrivez combien de planches acheter. Gardez-la pour votre dossier de départ.",
          youCanNow: "rédiger une liste de débit à partir d'un petit dessin et calculer combien de planches acheter.",
          quickCheck: [
            { objective: "O5", q: "Une boîte fait 18 pouces de large au total avec des côtés de 3/4 de pouce. Quelle est la longueur du fond qui se place entre les côtés ?", options: ["18 pouces", "17-1/4 pouces", "16-1/2 pouces", "18-3/4 pouces"], answer: 2, why: "Soustrayez l'épaisseur des deux côtés : 18 - 3/4 - 3/4 = 16-1/2 pouces." },
            { objective: "O5", q: "Pourquoi ajoutez-vous environ 1/8 de pouce pour chaque coupe ?", options: ["Le mètre ruban est faux", "Le bois grandit après la coupe", "Les planches sont toujours plus longues qu'annoncé", "La lame de scie transforme cette quantité de bois en sciure"], answer: 3, why: "Le trait de scie est le bois enlevé par la lame ; les pièces ont donc besoin de cette place sur la planche." }
          ]
        },
        {
          title: "Votre parcours : apprentissage, NCCER et premier emploi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Trouver deux programmes d'apprentissage ou de formation en charpente-menuiserie et rédiger un plan daté pour postuler.",
          text: [
            "Le Bureau des statistiques du travail des États-Unis (BLS) indique que les charpentiers apprennent en général sur le tas ou en apprentissage, souvent parrainé par des syndicats et des associations d'entrepreneurs. Chaque année d'apprentissage associe des cours techniques et un travail rémunéré. Un diplôme de fin d'études secondaires ou un équivalent est généralement exigé. Consultez le salaire et les perspectives sur la page du BLS, pas dans des publicités.",
            "Trouvez des programmes sur apprenticeship.gov : l'Apprenticeship Finder (moteur de recherche d'apprentissages) liste les offres par métier et par lieu, et le Partner Finder (moteur de recherche de partenaires) montre les organismes qui acceptent de nouveaux apprentis. Renseignez-vous aussi auprès des American Job Centers (centres publics pour l'emploi), des community colleges, des centres de formation syndicaux, de Helmets to Hardhats (pour les anciens militaires) et des programmes de pré-apprentissage pour les personnes sortant de prison.",
            "NCCER est un organisme national de formation en construction. Son programme de charpente-menuiserie commence par General Carpentry (charpente générale), avec des thèmes comme les matériaux et fixations, les plans de construction, l'implantation du terrain et du bâtiment, les planchers, les murs, la charpente de toit et les escaliers. La certification NCCER exige de réussir une évaluation écrite et une vérification pratique des compétences. Consultez nccer.org pour savoir où vous former et passer les examens près de chez vous.",
            "Beaucoup d'employeurs demandent aussi la carte OSHA 10 heures pour la construction. Avoir votre propre entreprise de charpente ou d'entrepreneur peut demander un permis de l'État ou local ; les salariés travaillent en général sous celui de l'entrepreneur. Consultez l'organisme de délivrance des permis d'entrepreneur de votre État. Vous avez moins de 18 ans ? Les règles fédérales limitent le travail avec des scies électriques et sur les toits ; consultez dol.gov/youthrules."
          ],
          steps: ["Lisez la page du BLS sur les charpentiers pour la formation et les perspectives.", "Cherchez la charpente-menuiserie près de chez vous sur apprenticeship.gov ; choisissez deux programmes.", "Notez les conditions d'admission et les dates de candidature de chaque programme.", "Rassemblez les documents : pièce d'identité, diplôme ou GED, et tout ce qui est demandé.", "Mettez une date sur chaque étape et un rappel dans votre téléphone."],
          words: [
            ["Apprentissage", "un emploi rémunéré avec des cours, où vous apprenez un métier auprès de travailleurs expérimentés."],
            ["Pré-apprentissage", "un programme court qui enseigne les calculs, les outils, la sécurité et les compétences professionnelles pour vous aider à entrer en apprentissage."],
            ["NCCER", "le Centre national pour l'enseignement et la recherche en construction, qui conçoit des formations en construction et délivre des certifications."],
            ["Vérification des compétences", "une épreuve pratique où un évaluateur vous regarde faire de vraies tâches."]
          ],
          slides: [
            { title: "Comment apprennent les charpentiers", bullets: ["Sur le tas ou en apprentissage", "Cours et travail rémunéré chaque année", "Diplôme ou équivalent généralement exigé"] },
            { title: "Trouver des programmes", bullets: ["apprenticeship.gov : Apprenticeship Finder et Partner Finder", "American Job Centers, community colleges, centres syndicaux", "Helmets to Hardhats ; pré-apprentissages de réinsertion"] },
            { title: "Charpente-menuiserie NCCER", bullets: ["General Carpentry : matériaux, plans, implantation, ossature", "Évaluation écrite et vérification pratique", "Consultez nccer.org pour la formation et les examens"] },
            { title: "Autres étapes", bullets: ["Carte OSHA 10 : beaucoup d'employeurs la demandent", "Entreprise à vous : consultez l'organisme des permis de l'État", "Moins de 18 ans : consultez dol.gov/youthrules"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis : Carpenters (Occupational Outlook Handbook, en anglais)", url: "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm" },
            { name: "Apprenticeship.gov : Apprenticeship Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "NCCER : Carpentry (charpente-menuiserie)", url: "https://www.nccer.org/craft-catalog/carpentry/" },
            { name: "NCCER : certifications reconnues par la profession", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "Département du Travail des États-Unis : YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Utilisez apprenticeship.gov et les autres ressources de cette leçon pour trouver deux programmes de charpente-menuiserie près de chez vous. Pour chacun, notez le nom, les conditions d'admission, la façon de postuler et la date limite. Rédigez ensuite votre plan avec une date pour chaque étape : documents, entraînement aux calculs, OSHA 10, candidature et relance. Gardez-le pour votre dossier de départ.",
          youCanNow: "trouver des programmes de charpente-menuiserie sur des sites officiels et suivre un plan daté pour postuler.",
          quickCheck: [
            { objective: "O6", q: "Où consultez-vous le salaire et les perspectives d'emploi des charpentiers ?", options: ["Une publicité sur les réseaux sociaux", "L'Occupational Outlook Handbook du BLS", "La page commerciale d'une école de formation", "Un commentaire sous une vidéo"], answer: 1, why: "Le BLS est la source officielle américaine sur les salaires et les perspectives, mise à jour régulièrement." },
            { objective: "O6", q: "Que devez-vous réussir pour obtenir une certification NCCER dans un métier ?", options: ["Une évaluation écrite et une vérification pratique des compétences", "Seulement une vidéo en ligne", "Un paiement et rien d'autre", "Un examen de conduite de l'État"], answer: 0, why: "NCCER indique que la certification exige de réussir une évaluation écrite et une vérification des compétences." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Plans, traçage et votre parcours",
        questions: [
          { objective: "O4", q: "Sur un plan dessiné à 1/4 de pouce = 1 pied, un mur mesure 3 pouces sur le papier. Quelle est la longueur du vrai mur ?", options: ["3 pieds", "6 pieds", "12 pieds", "16 pieds"], answer: 2, why: "3 pouces contiennent douze quarts de pouce, et chacun vaut 1 pied, donc le mur fait 12 pieds." },
          { objective: "O4", q: "Pourquoi marquez-vous les lisses haute et basse côte à côte, en même temps ?", options: ["Pour que les montants soient droits et alignés", "Pour économiser le crayon", "Parce que le plan le dit sur chaque chantier", "Pour avoir besoin de moins de montants"], answer: 0, why: "Marquer les deux ensemble place le haut et le bas de chaque montant au même endroit, donc les montants sont d'aplomb et régulièrement espacés." },
          { objective: "O5", q: "Qu'est-ce qui figure sur une liste de débit ?", options: ["Le numéro de téléphone du magasin", "Votre salaire horaire", "Le nom de chaque pièce, la quantité, le matériau et la dimension", "La couleur du mètre ruban"], answer: 2, why: "Une liste de débit contient chaque pièce avec sa quantité, son matériau et sa dimension exacte." },
          { objective: "O5", q: "Il vous faut quatre pièces de 23-3/4 pouces dans une planche de 96 pouces, avec 1/8 de pouce par coupe. Est-ce qu'elles tiennent ?", options: ["Non, il faut 100 pouces", "Non, il n'y a pas de place pour le trait de scie", "Seulement trois tiennent", "Oui : 95 + 1/2 = 95-1/2 pouces, il reste 1/2 pouce"], answer: 3, why: "4 x 23-3/4 = 95 pouces, plus 4 traits de 1/8 = 1/2 pouce, font 95-1/2 pouces ; elles tiennent avec 1/2 pouce de reste." },
          { objective: "O6", q: "Un site web promet un permis de charpentier garanti si vous payez aujourd'hui. Que faites-vous ?", options: ["Payer avant que le prix augmente", "Donner vos coordonnées bancaires pour réserver une place", "Vous inscrire parce que ça a l'air officiel", "Vérifier d'abord auprès de l'organisme des permis de votre État et sur apprenticeship.gov"], answer: 3, why: "Les permis sont délivrés par votre État ou votre ville, pas par un site payant ; vérifiez d'abord les sources officielles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la charpente-menuiserie",
    questions: [
      { objective: "O1", q: "Le ruban montre 9 pouces entiers et 6 seizièmes de plus. Quelle est la longueur ?", options: ["9-1/4 pouces", "9-3/8 pouces", "9-6 pouces", "9-1/2 pouces"], answer: 1, why: "6/16 se simplifie en 3/8, donc la longueur est de 9-3/8 pouces." },
      { objective: "O1", q: "Pourquoi le crochet au bout du mètre ruban glisse-t-il un peu ?", options: ["Il est cassé et doit être redressé", "Pour alléger le ruban", "Pour pouvoir le limer", "Pour qu'en accrochant une planche ou en poussant contre un mur, les deux mesures soient justes"], answer: 3, why: "Le crochet bouge de sa propre épaisseur, donc les mesures intérieures et extérieures sont justes." },
      { objective: "O1", q: "Combien font 2-5/8 + 1-3/4 ?", options: ["4-3/8", "3-8/12", "4-1/8", "3-7/8"], answer: 0, why: "3/4 vaut 6/8 ; 5/8 + 6/8 = 11/8 = 1-3/8, et 2 + 1 + 1-3/8 = 4-3/8." },
      { objective: "O2", q: "Quelle est à peu près la dimension réelle d'un 2x6 ?", options: ["2 sur 6 pouces", "1-3/4 sur 6 pouces", "1-1/2 sur 5-1/2 pouces", "1 sur 5 pouces"], answer: 2, why: "Un 2x6 mesure environ 1-1/2 sur 5-1/2 pouces ; les dimensions nominales sont plus grandes que les réelles." },
      { objective: "O2", q: "Vous construisez une terrasse dehors. Quelles fixations choisissez-vous ?", options: ["Des fixations traitées ou en inox faites pour l'extérieur", "Des clous ordinaires pour l'intérieur", "N'importe quelles vis du tiroir à bric-à-brac", "Seulement de la colle à bois"], answer: 0, why: "Les fixations d'extérieur sont traitées ou en inox pour ne pas rouiller ni céder." },
      { objective: "O2", q: "Vous regardez le long d'une solive de plancher et voyez une légère courbe. Dans quel sens la posez-vous ?", options: ["Courbe vers le bas, vers le sol", "Ça n'a pas d'importance", "Coupez d'abord la courbe", "Couronne vers le haut, pour que le poids la remette à plat"], answer: 3, why: "Les solives et les chevrons se posent couronne vers le haut, pour que la charge remette la courbe à plat." },
      { objective: "O3", q: "Quel équipement portez-vous à chaque utilisation d'une scie circulaire ?", options: ["Seulement des gants", "Des lunettes de sécurité et une protection auditive", "Une chemise ample à manches longues", "Rien si la coupe est courte"], answer: 1, why: "Les scies projettent des copeaux et sont bruyantes, donc les yeux et les oreilles sont protégés à chaque coupe." },
      { objective: "O3", q: "Le carter de lame de la scie reste ouvert et ne revient pas. Que faites-vous ?", options: ["Le fixer ouvert avec du ruban adhésif et continuer", "L'utiliser prudemment juste cette fois", "Arrêter, la débrancher et le signaler pour qu'elle soit réparée", "Retirer le carter"], answer: 2, why: "Un carter qui ne se ferme pas laisse la lame à découvert ; la scie n'est pas sûre tant qu'elle n'est pas réparée." },
      { objective: "O3", q: "Une échelle à coulisse atteint le bord d'un toit. De combien doit-elle dépasser le bord ?", options: ["D'au moins 3 pieds", "De 6 pouces", "Elle doit s'arrêter juste sous le bord", "D'au moins 10 pieds"], answer: 0, why: "La fiche de l'OSHA sur les échelles indique qu'une échelle utilisée pour accéder à une surface plus haute dépasse d'au moins 3 pieds au-dessus de l'appui." },
      { objective: "O3", q: "Une cloueuse se bloque. Quelle est la première étape sûre ?", options: ["Regarder dans le nez et appuyer sur la gâchette", "La taper par terre", "La pointer vers un collègue pour l'essayer", "Couper l'air ou retirer la batterie"], answer: 3, why: "Couper l'alimentation empêche l'outil de tirer pendant que vos mains sont près de lui." },
      { objective: "O4", q: "Sur un plan d'étage, une cote indique 10'-6\". Qu'est-ce que cela veut dire ?", options: ["10.6 pieds", "10 pieds 6 pouces", "106 pouces", "10 pouces 6 pieds"], answer: 1, why: "Le ' veut dire pieds et le \" veut dire pouces : 10 pieds 6 pouces." },
      { objective: "O4", q: "Combien de montants faut-il pour un mur de 16 pieds avec un entraxe de 16 pouces, sans ouverture ?", options: ["16", "12", "13", "11"], answer: 2, why: "16 pieds font 192 pouces ; 192 / 16 = 12 espaces, plus 1 = 13 montants." },
      { objective: "O4", q: "Quels repères doivent figurer sur une lisse tracée avec un entraxe de 16 pouces depuis un bout ?", options: ["16, 32, 48, 64, 80 pouces", "12, 24, 36, 48 pouces", "10, 20, 30, 40 pouces", "16, 30, 46, 60 pouces"], answer: 0, why: "Un entraxe de 16 pouces veut dire tous les 16 pouces : 16, 32, 48, 64, 80." },
      { objective: "O5", q: "Qu'est-ce que le trait de scie ?", options: ["Un type de clou", "La courbe le long d'une planche", "La chute qui reste", "Le bois qu'enlève une lame de scie en une coupe"], answer: 3, why: "Le trait de scie est la bande de bois que la lame transforme en sciure, souvent environ 1/8 de pouce." },
      { objective: "O5", q: "Une bibliothèque fait 30 pouces de large au total avec des côtés de 3/4 de pouce. Quelle est la longueur de chaque tablette entre les côtés ?", options: ["30 pouces", "28-1/2 pouces", "29-1/4 pouces", "29-1/2 pouces"], answer: 1, why: "30 - 3/4 - 3/4 = 28-1/2 pouces." },
      { objective: "O5", q: "Pourquoi faire une liste de débit avant d'aller au magasin ?", options: ["Le magasin l'exige", "Elle rend le bois plus solide", "Vous achetez les bonnes planches et gaspillez moins", "Elle remplace le plan"], answer: 2, why: "Une liste de débit montre chaque pièce, donc vous achetez le bon nombre de planches et gaspillez moins de bois et d'argent." },
      { objective: "O5", q: "Vos pièces font exactement 96 pouces avec les traits de scie, et vous avez une planche de 96 pouces. Que faites-vous ?", options: ["Acheter une planche de plus, car le bout doit être recoupé et les planches varient", "Couper sans mesurer", "Oublier le trait de scie", "Raccourcir chaque pièce de 1 pouce sans vérifier le plan"], answer: 0, why: "Les bouts d'usine sont souvent hors d'équerre et les longueurs varient ; un plan sans marge demande donc une planche de plus." },
      { objective: "O6", q: "Où pouvez-vous chercher des offres d'apprentissage en charpente-menuiserie par métier et par lieu ?", options: ["Une publicité qui s'affiche", "Un groupe quelconque sur les réseaux sociaux", "Un SMS d'un inconnu", "L'Apprenticeship Finder sur apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov est le site officiel du Département du Travail des États-Unis pour l'apprentissage." },
      { objective: "O6", q: "Qu'est-ce qu'un apprentissage ?", options: ["Un cours gratuit sans emploi", "Un emploi rémunéré avec des cours, où vous apprenez auprès de travailleurs expérimentés", "Un permis que vous achetez en ligne", "Une vidéo de sécurité d'une journée"], answer: 1, why: "Un apprentissage associe un travail rémunéré en entreprise et des cours techniques." },
      { objective: "O6", q: "Un jour, vous voulez créer votre propre entreprise de charpente. Où vérifiez-vous les règles sur les permis ?", options: ["Ce que devine un ami", "N'importe quel forum en ligne", "L'organisme de délivrance des permis d'entrepreneur de votre État", "Le magasin de bois"], answer: 2, why: "Les permis d'entrepreneur sont fixés par votre État ou votre ville ; l'organisme officiel a donc les règles en vigueur." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Mesures précises", objective: "O1", notYet: "Moins de 4 mesures sur 5 sont justes au 1/16 de pouce, ou les calculs de fractions ne sont pas montrés.", meets: "Au moins 4 mesures sur 5 sont justes au 1/16 de pouce, et la somme et la différence sont justes avec le calcul montré.", exceeds: "Les cinq mesures sont justes, chaque fraction est simplifiée et l'apprenant sait expliquer le crochet coulissant." },
      { name: "Liste de vérifications de sécurité", objective: "O3", notYet: "Il manque l'équipement de protection, ou il y a moins de quatre vérifications pour la scie ou l'échelle.", meets: "Nomme l'équipement et au moins quatre vérifications chacune pour la scie circulaire et l'échelle à coulisse, dont le débranchement et la règle 1 pour 4.", exceeds: "Couvre aussi le rebond, les lignes électriques et les trois points d'appui, et précise que la scie s'apprend avec un formateur." },
      { name: "Tracé du mur", objective: "O4", notYet: "Les repères de montants sont décalés de plus de 1/16 de pouce, ou le nombre de montants est faux.", meets: "Lisses tracées avec un entraxe de 16 pouces depuis un bout, un X sur chaque montant et le bon nombre (7 montants pour 8 pieds).", exceeds: "Montre aussi le décalage de 3/4 de pouce pour les bords des panneaux et note les montants en plus pour les angles ou les ouvertures." },
      { name: "Liste de débit", objective: "O5", notYet: "Utilise les dimensions nominales, oublie le trait de scie, ou les pièces ne tiennent pas dans les planches indiquées.", meets: "Chaque pièce avec quantité, matériau et dimension réelle ; trait de scie compté ; toutes les pièces tiennent dans les planches à acheter.", exceeds: "Montre aussi la chute restante sur chaque planche et un peu de marge pour la recoupe." },
      { name: "Matériaux choisis", objective: "O2", notYet: "La planche ou la fixation ne convient pas au travail (par exemple du bois non traité au contact du sol).", meets: "Le bois et les fixations conviennent au projet, avec les dimensions réelles écrites.", exceeds: "Explique pourquoi chaque choix convient, comme des fixations d'extérieur ou le sens de la couronne." },
      { name: "Plan daté tiré de sources officielles", objective: "O6", notYet: "Les étapes n'ont pas de date, ou les programmes et les règles viennent de publicités ou de publications.", meets: "Deux vrais programmes avec conditions d'admission et dates limites trouvées sur des sites officiels, et une date pour chaque étape.", exceeds: "Nomme aussi un programme de secours et une personne ou un bureau à appeler en cas de question." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à un apprentissage, un pré-apprentissage ou une formation NCCER en charpente-menuiserie dans les 30 jours (enquête de suivi)",
      "Apprenants admis dans un programme ou embauchés comme aide-charpentier ou apprenti dans les 90 jours",
      "Apprenants qui obtiennent une carte OSHA 10 construction ou une certification NCCER après le cours",
      "Les programmes partenaires signalent moins de nouveaux stagiaires qui échouent aux tests d'entrée de calcul ou de sécurité"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un mètre ruban (de 16 ou 25 pieds), un crayon, du papier et une règle ; une calculatrice aide",
      "Un téléphone ou un ordinateur de bibliothèque pour les sites officiels (bls.gov, apprenticeship.gov, nccer.org, dol.gov)",
      "Facultatif : une longue bande de carton ou une chute de planche pour s'exercer au tracé du mur",
      "Environ 60 à 75 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "En classe ou dans un programme d'emploi : faites le test de départ ensemble, puis un chapitre par séance, avec les tâches « Essayez maintenant » faites en direct.",
      "Faites des exercices de mètre ruban et de fractions en groupe ; beaucoup d'apprenants ont besoin de plus de pratique avec les seizièmes.",
      "Ne laissez pas les apprenants utiliser des scies ou des cloueuses dans le cadre de ce cours. L'utilisation pratique des outils est enseignée en personne par un formateur qualifié, avec l'équipement de protection adapté.",
      "Pour les jeunes de moins de 18 ans, respectez les règles fédérales et de l'État sur le travail des enfants ; la plupart des travaux avec des scies électriques et sur les toits sont interdits en dehors des programmes agréés d'apprentis ou d'élèves en formation.",
      "Évaluez la tâche finale avec la grille, et invitez un centre de formation syndical, un entrepreneur ou un programme de pré-apprentissage de la région à examiner les dossiers de départ."
    ]
  }
};
