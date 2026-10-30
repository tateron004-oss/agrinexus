"use strict";

// Koach Learn course (French translation of shared/welding-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "welding-basics-fr",
  lang: "fr",
  translationOf: "welding-basics",
  category: "Workforce Development",
  name: "Les bases de la soudure",
  skills: "Associer chaque travail au bon procédé de soudage, Lire les assemblages, les positions et les symboles de soudage, Repérer les défauts de soudure courants, Prévoir la sécurité et la prévention des incendies en soudage, Préparer votre parcours vers la certification de soudeur",
  outcome: "associer un travail au bon procédé de soudage, lire les types d'assemblage, les positions et un symbole de soudage simple, repérer les défauts de soudure courants, prévoir les équipements de protection et les précautions contre l'incendie d'une tâche de soudage, et suivre un plan daté pour vous former et passer un examen de certification de soudeur.",
  about: [
    "Les soudeurs assemblent le métal pour les bâtiments, les ponts, les navires, les pipelines, les camions, le matériel agricole et les usines. Beaucoup commencent dans une école professionnelle, un community college (établissement public d'enseignement court aux États-Unis), un apprentissage, l'armée ou par une formation sur le tas. Ce cours s'adresse à toute personne qui envisage cette voie : demandeurs d'emploi, jeunes adultes, personnes sortant de prison, anciens militaires, immigrés et adultes qui reprennent des études.",
    "Vous allez découvrir les principaux procédés de soudage et de coupage, les assemblages et les positions utilisés par les soudeurs, comment lire un symbole de soudage simple sur un plan, et comment distinguer une bonne soudure d'une mauvaise. Ensuite, vous verrez comment les soudeurs protègent leurs yeux, leur peau, leurs poumons et leurs oreilles, comment ils évitent les incendies et comment fonctionne la certification de soudeur.",
    "Ce cours vous prépare. Il ne donne ni certificat ni licence. Vous ne soudez pas et ne coupez pas dans ce cours : le soudage ne s'apprend que dans un atelier encadré, avec les bons équipements de protection. Une certification de soudeur, comme le Certified Welder de l'American Welding Society (AWS, la Société américaine de soudage), s'obtient en réussissant un examen pratique dans un centre d'examen agréé.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant » et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est votre propre plan pour débuter en soudure, avec de vraies dates."
  ],
  finalTask: "Préparez votre plan pour débuter en soudure : (1) un tableau des procédés qui associe quatre procédés de soudage ou de coupage à un vrai travail chacun ; (2) une fiche de lecture avec les cinq types d'assemblage dessinés, les quatre positions notées et cinq défauts de soudure avec une cause probable pour chacun ; (3) une liste de sécurité avant soudage pour une tâche à l'électrode enrobée ou en MIG, qui couvre les yeux, la peau, les poumons, les oreilles, l'incendie et l'électrocution ; et (4) un plan daté qui nomme deux formations près de chez vous, le procédé et la position dans lesquels vous visez une certification, où passer l'examen (un AWS Accredited Test Facility, centre d'examen agréé par l'AWS), ce que votre État ou votre ville exige (d'après la page officielle) et une date pour chaque étape.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui cherchent un métier manuel : demandeurs d'emploi, personnes sortant de prison, jeunes adultes, anciens militaires, immigrés et adultes qui reprennent des études. Certains ont travaillé en atelier, à la ferme, en mécanique auto ou dans l'armée ; la plupart n'ont jamais soudé.",
    startingPoint: "Savent lire des consignes courtes et calculer avec des nombres entiers. La plupart savent que le soudage utilise de la chaleur et une lumière très vive pour assembler du métal, mais ne savent pas nommer les procédés, lire un symbole de soudage, juger une soudure ni énumérer les règles de sécurité.",
    gap: "Les écoles de soudage, les apprentissages et les employeurs veulent des personnes qui connaissent les mots de base, prennent la sécurité au sérieux et savent ce que demande un examen de certification. Les apprenants ont besoin de cette base et d'un plan clair et daté pour choisir une bonne formation, ne pas gaspiller d'argent et arriver à l'atelier prêts à apprendre.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire, début du collège) ; chaque mot du métier est expliqué",
      "Pas de soudage, de coupage ni de meulage dans ce cours : le travail pratique exige un atelier encadré et les bons équipements de protection",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages officielles et les photos de soudures ; papier et stylo pour les croquis et les plans",
      "Temps : leçons de 5 à 6 minutes, faciles à caser entre le travail et les rendez-vous",
      "Les règles changent selon l'État et la ville : chaque apprenant vérifie les licences sur la page officielle de son lieu de résidence"
    ],
    prerequisites: "Aucun. « Débuter une carrière dans les métiers qualifiés » aide à choisir un métier ; ce cours approfondit le soudage."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir de la description d'un travail de soudage ou de coupage", action: "associer le travail à un procédé courant : électrode enrobée, MIG, fil fourré, TIG, oxycoupage ou plasma", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "À partir d'un plan, d'une photo ou d'un symbole de soudage", action: "nommer le type d'assemblage, la position de soudage et les parties de base d'un symbole de soudage", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O3", condition: "À partir de photos ou de descriptions de soudures terminées", action: "identifier les défauts de soudure courants et nommer une cause probable pour chacun", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O4", condition: "Pour une tâche de soudage donnée", action: "énumérer les équipements de protection, la ventilation et les précautions contre l'incendie nécessaires", standard: "en couvrant les yeux, la peau, les poumons, les oreilles, l'électrocution et au moins trois précautions contre l'incendie" },
    { id: "O5", condition: "En utilisant les sites officiels de votre région", action: "rédiger un plan daté pour vous former et passer un examen de certification de soudeur", standard: "avec deux vraies formations, un lieu d'examen et une date pour chaque étape" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne le soudage",
      lessons: [
        {
          title: "Le travail du soudeur et les principaux procédés",
          objectives: ["O1"],
          minutes: 6,
          goal: "Associer un travail de soudage ou de coupage au bon procédé courant.",
          text: [
            "Souder, c'est assembler des pièces de métal en les faisant fondre pour qu'elles se mélangent et durcissent en une seule pièce. La plupart des soudures utilisent un arc électrique, une étincelle très chaude entre une électrode et le métal. Souvent, on ajoute un métal d'apport, et quelque chose doit protéger le métal chaud de l'air pour que la soudure reste solide.",
            "Le soudage à l'électrode enrobée (SMAW, appelé « stick » en anglais) utilise une baguette enrobée. Il est simple et fonctionne dehors et par vent, d'où son usage courant dans le bâtiment, les pipelines et la réparation. Le soudage MIG (GMAW) fait avancer un fil dans une torche avec un gaz de protection ; il est rapide et courant dans les usines et les garages. Le soudage au fil fourré (FCAW) fait avancer un fil qui contient du flux ; on l'utilise pour l'acier plus épais et certains travaux dehors. Le soudage TIG (GTAW) utilise une électrode en tungstène et une baguette d'apport séparée ; il est lent mais très propre et précis, et sert pour le métal mince, l'acier inoxydable et l'aluminium.",
            "Les soudeurs coupent aussi le métal. L'oxycoupage utilise une flamme de gaz combustible et d'oxygène, surtout sur l'acier. Le coupage plasma utilise un arc électrique et un jet de gaz rapide, et peut couper beaucoup de métaux.",
            "Les employeurs vous testent en général dans un procédé et une position précis : connaître ces noms vous aide à lire les offres d'emploi et à choisir votre formation."
          ],
          words: [
            ["Arc", "une étincelle électrique très chaude entre l'électrode et le métal, qui fait fondre le métal."],
            ["Électrode", "la baguette ou le fil qui amène le courant pour créer l'arc ; dans certains procédés, elle devient aussi métal d'apport."],
            ["Métal d'apport", "du métal en plus, ajouté pour remplir l'assemblage."],
            ["Protection", "du gaz ou du flux qui tient l'air loin de la soudure chaude pour qu'elle reste solide."],
            ["Électrode enrobée (SMAW)", "soudage à l'arc avec électrode enrobée de flux ; en anglais, « stick »."],
            ["MIG (GMAW)", "soudage à l'arc sous gaz avec fil : un fil qui avance dans une torche avec un gaz de protection."],
            ["Fil fourré (FCAW)", "soudage à l'arc avec fil fourré : un fil qui avance et qui contient du flux."],
            ["TIG (GTAW)", "soudage à l'arc sous gaz avec électrode en tungstène : une électrode en tungstène et une baguette d'apport séparée ; lent et précis."]
          ],
          slides: [
            { title: "Qu'est-ce que souder ?", bullets: ["Faire fondre le métal pour en faire une seule pièce", "La plupart utilisent un arc électrique", "La protection tient l'air loin de la soudure"] },
            { title: "Quatre procédés courants", bullets: ["Électrode enrobée (SMAW) : simple, marche dehors", "MIG (GMAW) : rapide, usines et garages", "Fil fourré (FCAW) : acier épais, un peu dehors", "TIG (GTAW) : lent, propre, métal mince et aluminium"] },
            { title: "Coupage", bullets: ["Oxycoupage : flamme, surtout l'acier", "Plasma : arc et gaz rapide, beaucoup de métaux"] },
            { title: "Pourquoi les noms comptent", bullets: ["Les offres d'emploi nomment le procédé", "Les examens se font dans un procédé et une position"] }
          ],
          tryIt: "Cherchez « soudeur » sur un site d'emploi près de chez vous et lisez trois offres. Pour chacune, notez le procédé demandé (électrode enrobée, MIG, fil fourré ou TIG), ce qu'on y fabrique ou répare, et la certification citée. Ensuite, faites un petit tableau : les quatre procédés dans une colonne, et un vrai travail à côté de chacun. Gardez-le : c'est la partie 1 de votre tâche finale.",
          youCanNow: "nommer les principaux procédés de soudage et de coupage et associer chacun au type de travail qui lui convient.",
          quickCheck: [
            { objective: "O1", q: "Une équipe doit réparer une clôture en acier dehors, un jour de vent, avec du matériel simple. Quel procédé convient le mieux ?", options: ["TIG", "Électrode enrobée (SMAW)", "Coupage plasma", "MIG avec gaz de protection"], answer: 1, why: "Le soudage à l'électrode enrobée utilise une baguette enrobée et fonctionne dehors et par vent, là où le gaz de protection serait emporté." },
            { objective: "O1", q: "Un atelier a besoin de soudures très propres et précises sur de l'aluminium mince. Quel procédé convient le mieux ?", options: ["Oxycoupage", "Fil fourré", "Électrode enrobée", "TIG (GTAW)"], answer: 3, why: "Le TIG est lent mais très propre et précis, et sert pour le métal mince et l'aluminium." }
          ]
        },
        {
          title: "Assemblages, positions et symboles de soudage",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nommer le type d'assemblage et la position de soudage sur un plan et lire les parties de base d'un symbole de soudage.",
          text: [
            "Il existe cinq assemblages de base. Bout à bout : deux pièces bord contre bord, en ligne. En T : une pièce posée debout sur une autre, comme un T. À recouvrement : deux pièces qui se chevauchent. En angle : deux pièces qui se rejoignent en coin, comme un L. Sur chant : deux pièces côte à côte, soudées le long de leurs bords.",
            "Il existe quatre positions de soudage. À plat : vous soudez par le dessus ; c'est la plus facile. Horizontale : la soudure avance de côté sur une surface comme un mur. Verticale : la soudure monte ou descend. Au plafond : vous soudez par en dessous ; c'est la plus difficile. Aux examens, elles sont numérotées de 1 à 4, avec G pour une soudure en chanfrein et F pour une soudure d'angle ; par exemple, 3G est une soudure en chanfrein verticale et 2F une soudure d'angle horizontale.",
            "Une soudure en chanfrein remplit un espace ou une rainure préparée, souvent dans un assemblage bout à bout. Une soudure d'angle remplit le coin d'un assemblage en T, à recouvrement ou en angle, et ressemble à un triangle vue de côté.",
            "Les plans utilisent des symboles de soudage. La flèche montre l'assemblage. Le symbole de soudure se place sur une ligne de référence plate. Si le symbole est sous la ligne, la soudure se fait côté flèche ; s'il est au-dessus de la ligne, elle se fait de l'autre côté. Un petit triangle signifie une soudure d'angle, et le nombre à côté est en général la taille de la soudure. Une queue au bout peut porter des notes en plus, comme le procédé."
          ],
          steps: [
            "Trouvez la flèche : elle montre l'assemblage.",
            "Regardez la ligne de référence : symbole dessous = côté flèche, dessus = autre côté.",
            "Lisez le symbole : un triangle signifie soudure d'angle.",
            "Lisez le nombre à côté (taille) et les notes dans la queue."
          ],
          words: [
            ["Assemblage", "l'endroit où deux pièces de métal se rejoignent pour être soudées."],
            ["Bout à bout, en T, à recouvrement, en angle, sur chant", "les cinq types d'assemblage de base."],
            ["Soudure en chanfrein", "une soudure qui remplit un espace ou une rainure préparée entre les pièces."],
            ["Soudure d'angle", "une soudure dans un coin, en forme de triangle vue de côté."],
            ["Position", "le sens dans lequel vous soudez : à plat, horizontale, verticale ou au plafond (1 à 4)."],
            ["Symbole de soudage", "un code des plans, avec une flèche, une ligne de référence et des signes qui disent au soudeur quelle soudure faire."],
            ["Ligne de référence", "la ligne plate d'un symbole de soudage ; dessous signifie côté flèche, dessus signifie autre côté."]
          ],
          slides: [
            { title: "Cinq assemblages de base", bullets: ["Bout à bout : bord contre bord", "En T : comme un T ; À recouvrement : pièces qui se chevauchent", "En angle : comme un L ; Sur chant : côte à côte"] },
            { title: "Quatre positions", bullets: ["1 À plat, 2 Horizontale", "3 Verticale, 4 Au plafond", "G = chanfrein, F = angle (3G, 2F)"] },
            { title: "Chanfrein ou angle", bullets: ["Chanfrein : remplit un espace, souvent bout à bout", "Angle : remplit un coin, forme de triangle"] },
            { title: "Lire un symbole de soudage", bullets: ["La flèche montre l'assemblage", "Sous la ligne = côté flèche ; dessus = autre côté", "Triangle = soudure d'angle ; nombre = taille ; queue = notes"] }
          ],
          tryIt: "Avec des bandes de papier ou deux morceaux de carton, formez chacun des cinq assemblages et dessinez-les avec leur nom. À côté des croquis, notez les quatre positions avec leur numéro. Ensuite, cherchez une image de « symbole de soudure d'angle » et notez de quel côté se fait la soudure et ce que signifie le nombre. Gardez les croquis : ils sont la partie 2 de votre tâche finale.",
          youCanNow: "nommer les cinq assemblages et les quatre positions et lire les parties de base d'un symbole de soudage.",
          quickCheck: [
            { objective: "O2", q: "Une plaque est posée debout au milieu d'une autre plaque à plat, comme la lettre T. Quel est cet assemblage ?", options: ["Assemblage en T", "Assemblage bout à bout", "Assemblage à recouvrement", "Assemblage sur chant"], answer: 0, why: "Dans un assemblage en T, une pièce est posée debout sur une autre, comme un T." },
            { objective: "O2", q: "Sur un symbole de soudage, le triangle est sous la ligne de référence. Où se fait la soudure ?", options: ["De l'autre côté", "Des deux côtés", "Côté flèche", "Nulle part ; c'est une note"], answer: 2, why: "Un symbole sous la ligne de référence signifie que la soudure se fait côté flèche." }
          ]
        },
        {
          title: "Distinguer une bonne soudure d'une mauvaise",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identifier les défauts de soudure courants sur des photos ou des descriptions et nommer une cause probable pour chacun.",
          text: [
            "Les soudeurs et les inspecteurs contrôlent d'abord les soudures en les regardant. Une bonne soudure a une forme et une largeur régulières, se raccorde en douceur aux deux pièces et n'a ni trous ni fissures. Pour certains travaux, on teste aussi les soudures en les pliant ou avec un matériel spécial, et les inspecteurs en soudage sont formés et certifiés pour cela.",
            "Défauts courants : la porosité, ce sont de petits trous ou des bulles, souvent dus à un métal sale ou à un mauvais gaz de protection. Le caniveau est une rainure creusée dans le métal le long du bord de la soudure, souvent due à trop de chaleur ou à un mauvais angle. Le manque de fusion signifie que la soudure n'a pas fondu dans le métal, souvent à cause d'une chaleur trop faible ou d'une avance trop rapide. Les fissures sont des lignes dans la soudure ou à côté ; elles sont graves. Trop de projections (petites billes de métal autour de la soudure) viennent souvent de mauvais réglages. Le débordement, c'est du métal de soudure posé sur la surface sans fusion.",
            "À l'atelier, votre formateur vous apprendra à corriger chaque cause, par exemple en nettoyant d'abord le métal, en changeant les réglages, l'angle ou la vitesse d'avance, ou en vérifiant le gaz. Dans ce cours, vous vous entraînez à regarder et à nommer."
          ],
          steps: [
            "Regardez la forme : est-elle régulière en largeur et en hauteur ?",
            "Regardez les bords : la soudure se raccorde-t-elle, ou y a-t-il une rainure (caniveau) ou un bourrelet (débordement) ?",
            "Regardez la surface : des trous (porosité) ou des fissures ?",
            "Regardez autour : beaucoup de projections ?",
            "Notez le défaut et une cause probable."
          ],
          words: [
            ["Défaut", "une imperfection qui peut affaiblir une soudure ou la faire échouer au contrôle."],
            ["Porosité", "petits trous ou bulles dans une soudure, souvent dus à la saleté ou à une mauvaise protection."],
            ["Caniveau", "une rainure creusée dans le métal le long du bord de la soudure."],
            ["Manque de fusion", "la soudure n'a pas fondu dans le métal de base."],
            ["Projections", "petites billes de métal projetées autour de la soudure."],
            ["Contrôle visuel", "vérifier une soudure en la regardant avec attention ; c'est le premier test de toute soudure."]
          ],
          slides: [
            { title: "Une bonne soudure", bullets: ["Forme et largeur régulières", "Se raccorde en douceur aux deux pièces", "Ni trous ni fissures"] },
            { title: "Défauts courants", bullets: ["Porosité : trous ou bulles", "Caniveau : rainure au bord", "Manque de fusion ; fissures ; projections ; débordement"] },
            { title: "Causes probables", bullets: ["Métal sale ou mauvais gaz : porosité", "Trop de chaleur ou mauvais angle : caniveau", "Pas assez de chaleur ou trop vite : pas de fusion"] },
            { title: "Contrôlez chaque soudure", bullets: ["Forme, bords, surface, autour", "Nommez le défaut et une cause", "La correction s'apprend à l'atelier"] }
          ],
          tryIt: "Cherchez des photos de « porosité soudure », « caniveau soudure » et « belle soudure MIG » venant d'une école de soudage ou d'un fournisseur. Pour chaque photo, écrivez ce que vous voyez et nommez le défaut (ou dites qu'elle semble bonne). Ensuite, faites une liste de cinq défauts avec une cause probable pour chacun. Gardez la liste : elle va dans la partie 2 de votre tâche finale.",
          youCanNow: "repérer les défauts de soudure courants et nommer une cause probable pour chacun.",
          quickCheck: [
            { objective: "O3", q: "Une soudure a beaucoup de petits trous en surface. Quel est ce défaut ?", options: ["Caniveau", "Débordement", "Porosité", "Projections"], answer: 2, why: "Les petits trous ou bulles dans une soudure, c'est la porosité." },
            { objective: "O3", q: "Une rainure est creusée dans le métal le long du bord de la soudure. Quelle est une cause probable ?", options: ["Trop de chaleur ou un mauvais angle", "Le métal était trop propre", "Le masque était trop foncé", "La soudure était trop froide pour être touchée"], answer: 0, why: "Le caniveau vient souvent de trop de chaleur ou d'un mauvais angle." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne le soudage",
        questions: [
          { objective: "O1", q: "Quel procédé fait avancer un fil dans une torche avec un gaz de protection ?", options: ["Électrode enrobée (SMAW)", "MIG (GMAW)", "Oxycoupage", "TIG (GTAW)"], answer: 1, why: "Le MIG (soudage à l'arc sous gaz avec fil) utilise un fil qui avance et un gaz de protection." },
          { objective: "O1", q: "Quel procédé de coupage utilise un arc électrique et un jet de gaz rapide ?", options: ["Coupage plasma", "Soudage à l'électrode enrobée", "Soudage TIG", "Brasage"], answer: 0, why: "Le coupage plasma utilise un arc et un jet de gaz rapide pour couper beaucoup de métaux." },
          { objective: "O2", q: "Deux plaques se chevauchent et sont soudées. Quel est cet assemblage ?", options: ["Assemblage bout à bout", "Assemblage en angle", "Assemblage en T", "Assemblage à recouvrement"], answer: 3, why: "Un assemblage à recouvrement est fait de deux pièces qui se chevauchent." },
          { objective: "O2", q: "À un examen de soudage, que signifie 3G ?", options: ["Une soudure d'angle à plat", "Une soudure d'angle au plafond", "Une soudure en chanfrein verticale", "Une soudure en chanfrein horizontale"], answer: 2, why: "La position 3 est verticale, et G signifie soudure en chanfrein." },
          { objective: "O3", q: "Une soudure n'a pas fondu dans le métal de base. Comment s'appelle ce défaut ?", options: ["Manque de fusion", "Porosité", "Projections", "Caniveau"], answer: 0, why: "Le manque de fusion signifie que la soudure ne s'est pas liée au métal de base." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La sécurité et votre parcours",
      lessons: [
        {
          title: "Protéger vos yeux, votre peau, vos poumons et vos oreilles",
          objectives: ["O4"],
          minutes: 6,
          goal: "Énumérer les équipements de protection et la ventilation dont une tâche de soudage a besoin.",
          text: [
            "Les dangers du soudage sont une lumière très vive, du métal et des étincelles très chauds, des fumées et des gaz, le bruit et l'électrocution. Le Bureau of Labor Statistics (BLS, le Bureau des statistiques du travail des États-Unis) cite les masques de soudeur, les protections auditives, les gants résistants à la chaleur et les vêtements de protection comme l'équipement que portent les soudeurs. Vous n'apprendrez à souder que dans un atelier encadré, avec cet équipement.",
            "Yeux et visage : l'arc émet une lumière, y compris des rayons ultraviolets, qui peut brûler vos yeux et votre peau, même d'un seul coup d'œil. La règle de l'OSHA (l'agence fédérale américaine de sécurité au travail) sur le soudage exige un masque ou un écran à main pour le soudage à l'arc, avec un filtre assez foncé pour le procédé ; son tableau donne la teinte selon le procédé et la taille (par exemple, teinte 12 pour certaines tailles courantes d'électrode enrobée). Portez des lunettes de sécurité sous le masque, et protégez les personnes proches avec des écrans.",
            "Peau : portez des vêtements ignifugés qui couvrent les bras et les jambes (pas de tissu synthétique, qui peut fondre), des gants de soudeur en cuir et des chaussures en cuir. Poumons : les fumées et les gaz de soudage peuvent nuire à votre santé. Gardez la tête hors du panache de fumée, utilisez la ventilation ou l'aspiration des fumées, et portez un appareil respiratoire quand le programme de votre employeur l'exige. Les revêtements comme la peinture et le zinc de l'acier galvanisé produisent des fumées encore plus nocives. Oreilles : le meulage et certains procédés sont bruyants, alors portez une protection auditive.",
            "La règle de l'OSHA sur le soudage dit aussi qu'il ne faut jamais utiliser d'oxygène pour ventiler, car il fait brûler le feu beaucoup plus vite."
          ],
          steps: [
            "Yeux : masque avec la bonne teinte, lunettes de sécurité dessous, écrans pour les autres.",
            "Peau : vêtements ignifugés, gants et chaussures en cuir, pas de synthétique.",
            "Poumons : ventilation ou aspiration, tête hors du panache, appareil respiratoire si exigé.",
            "Oreilles : protection auditive pour le meulage et les travaux bruyants."
          ],
          words: [
            ["EPI", "équipement de protection individuelle : masque, lunettes, gants, vêtements, chaussures, protection auditive, appareil respiratoire."],
            ["Teinte du filtre", "le degré de noirceur d'un verre de soudeur ; plus le nombre est élevé, plus il est foncé."],
            ["Rayons ultraviolets (UV)", "une lumière invisible de l'arc qui brûle les yeux et la peau."],
            ["Fumées", "de minuscules particules de métal et des gaz produits par le soudage, qui peuvent nuire aux poumons et à la santé."],
            ["Panache de fumée", "le nuage de fumée qui monte de la soudure."],
            ["Acier galvanisé", "acier recouvert de zinc ; le souder produit des fumées nocives."],
            ["Ignifugé (FR)", "tissu fait pour résister au feu."]
          ],
          slides: [
            { title: "Les dangers du soudage", bullets: ["Lumière vive et rayons UV", "Métal chaud et étincelles", "Fumées et gaz ; bruit ; électrocution"] },
            { title: "Yeux et visage", bullets: ["Masque avec la bonne teinte de filtre (tableau de l'OSHA)", "Lunettes de sécurité sous le masque", "Des écrans protègent les personnes proches"] },
            { title: "Peau et poumons", bullets: ["Vêtements ignifugés, gants en cuir, chaussures", "Tête hors du panache ; ventilation en marche", "Appareil respiratoire si exigé ; attention aux revêtements"] },
            { title: "Oreilles et air", bullets: ["Protection auditive pour le meulage", "Jamais d'oxygène pour ventiler"] }
          ],
          sources: [
            { name: "OSHA : Soudage, coupage et brasage, exigences générales, 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "OSHA : Normes sur le soudage, le coupage et le brasage", url: "https://www.osha.gov/welding-cutting-brazing/standards" },
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Soudeurs, coupeurs, soudeurs à l'étain et braseurs", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" }
          ],
          tryIt: "Commencez votre liste de sécurité avant soudage pour ce travail : « Souder en MIG des supports en acier dans un atelier. » Écrivez quatre titres : Yeux, Peau, Poumons, Oreilles. Sous chacun, notez l'équipement ou l'étape vus dans la leçon. Ajoutez ensuite une ligne sur ce qu'il faut vérifier si l'acier est peint ou galvanisé. Gardez-la : elle devient la partie 3 de votre tâche finale.",
          youCanNow: "énumérer l'équipement et la ventilation qui protègent les yeux, la peau, les poumons et les oreilles d'un soudeur.",
          quickCheck: [
            { objective: "O4", q: "Quelle tenue est le bon choix pour souder ?", options: ["Un survêtement en polyester", "Un short et un T-shirt", "Une veste en nylon", "Des vêtements ignifugés qui couvrent les bras et les jambes"], answer: 3, why: "Les tissus synthétiques peuvent fondre sur la peau ; des vêtements ignifugés couvrants protègent des étincelles et des rayons UV." },
            { objective: "O4", q: "Vous voyez de la fumée monter de la soudure. Que faites-vous de votre tête ?", options: ["Vous vous penchez pour mieux voir", "Vous la gardez hors du panache et utilisez la ventilation", "Vous retenez votre respiration", "Vous enlevez le masque"], answer: 1, why: "Rester hors du panache et utiliser la ventilation réduit les fumées que vous respirez." }
          ]
        },
        {
          title: "Incendie, électrocution et travail par points chauds",
          objectives: ["O4"],
          minutes: 6,
          goal: "Énumérer les précautions contre l'incendie et l'électrocution à prendre avant, pendant et après le soudage.",
          text: [
            "Les étincelles et le laitier chaud peuvent voler loin et déclencher un feu là où vous ne voyez pas. La règle de l'OSHA sur le soudage (29 CFR 1910.252) dit que, quand c'est possible, ce qui peut brûler doit être éloigné d'au moins 35 pieds du travail, ou couvert ou protégé si on ne peut pas le déplacer. On ne soude que dans des zones sûres contre l'incendie, ou rendues sûres, après vérification par la personne responsable ; il vaut mieux donner cet accord par une autorisation écrite, souvent appelée permis de feu.",
            "Quand un feu pourrait se déclarer, par exemple s'il y a des matières combustibles à moins de 35 pieds, une surveillance incendie est obligatoire : une personne qui guette le feu, un extincteur prêt. L'OSHA dit que le surveillant doit rester au moins une demi-heure après la fin du soudage ou du coupage, car des matières peuvent couver et prendre feu plus tard.",
            "Électrocution : l'arc utilise du courant électrique. Gardez les gants et les vêtements secs, ne vous tenez pas dans l'eau ni sur un sol mouillé, vérifiez que les câbles ne sont pas abîmés avant usage, et ne touchez jamais l'électrode et le métal en même temps. Selon le BLS, les soudeurs doivent suivre une formation OSHA à la sécurité électrique.",
            "Les bouteilles de gaz pour le MIG, le TIG et le coupage se manipulent comme on vous l'apprend en formation : debout et attachées pour ne pas tomber. Les espaces confinés, comme les cuves, exigent une formation spéciale, des permis et une ventilation ; n'y entrez jamais sans eux."
          ],
          steps: [
            "Avant : obtenez le permis, éloignez à 35 pieds ce qui peut brûler ou couvrez-le, ayez un extincteur prêt.",
            "Mettez en place une surveillance incendie quand un feu pourrait se déclarer.",
            "Pendant : restez au sec, vérifiez les câbles, gardez la zone dégagée.",
            "Après : le surveillant incendie reste au moins 30 minutes."
          ],
          words: [
            ["Travail par points chauds", "soudage, coupage, meulage et autres travaux qui produisent des étincelles ou une flamme."],
            ["Permis de feu", "une autorisation écrite indiquant que la zone a été vérifiée et rendue sûre contre l'incendie avant le travail par points chauds."],
            ["Surveillant incendie", "une personne formée qui guette le feu pendant et après le travail par points chauds, un extincteur prêt."],
            ["Laitier", "la croûte dure qui reste sur certaines soudures ; elle est très chaude quand elle se détache."],
            ["Espace confiné", "un espace comme une cuve ou une fosse, où il est difficile d'entrer et de sortir ; il exige une formation spéciale et des permis."]
          ],
          slides: [
            { title: "Avant de souder", bullets: ["Permis de feu : zone vérifiée et sûre", "Éloigner à 35 pieds ce qui brûle, ou le couvrir", "Extincteur prêt"] },
            { title: "Surveillance incendie", bullets: ["Obligatoire quand un feu pourrait se déclarer", "Reste au moins 30 minutes après le travail"] },
            { title: "Électrocution", bullets: ["Gants et vêtements secs", "Jamais les pieds dans l'eau", "Vérifier les câbles avant usage"] },
            { title: "Bouteilles et espaces confinés", bullets: ["Bouteilles debout et attachées", "Espaces confinés : formation et permis d'abord"] }
          ],
          sources: [
            { name: "OSHA : Soudage, coupage et brasage, exigences générales (prévention des incendies), 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Soudeurs, comment le devenir", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" }
          ],
          tryIt: "Terminez votre liste de sécurité avant soudage. Ajoutez trois nouveaux titres à la liste de la leçon 4 : Incendie avant, Incendie après et Électrocution. Dessous, écrivez : le permis, la règle des 35 pieds, l'extincteur, la surveillance incendie et sa durée, et trois mesures contre l'électrocution. Lisez toute la liste à voix haute comme si vous briefiez un nouvel aide. C'est la partie 3 de votre tâche finale.",
          youCanNow: "énumérer les précautions contre l'incendie et l'électrocution à prendre avant, pendant et après le soudage.",
          quickCheck: [
            { objective: "O4", q: "Selon l'OSHA, combien de temps le surveillant incendie doit-il rester après la fin du soudage ?", options: ["5 minutes", "Pas du tout ; il peut partir", "Au moins une demi-heure", "Jusqu'au déjeuner"], answer: 2, why: "L'OSHA exige la surveillance incendie au moins une demi-heure après le travail, car un feu peut se déclarer plus tard." },
            { objective: "O4", q: "Des cartons sont à 15 pieds de l'endroit où vous allez souder. Que faites-vous ?", options: ["Les éloigner d'au moins 35 pieds, ou les couvrir ou les protéger", "Souder plus vite", "Les arroser d'oxygène", "Rien ; 15 pieds suffisent"], answer: 0, why: "L'OSHA dit que ce qui peut brûler doit être éloigné d'au moins 35 pieds quand c'est possible, ou couvert ou protégé." }
          ]
        },
        {
          title: "Formation, certification et votre plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rédiger un plan daté pour vous former et passer un examen de certification de soudeur.",
          text: [
            "Le Bureau of Labor Statistics indique que les employeurs demandent en général un diplôme de fin d'études secondaires ou l'équivalent, plus une formation technique et sur le tas. On se forme dans les cours techniques du lycée, les écoles professionnelles, les community colleges, les écoles privées de soudage et l'armée. Certains employeurs proposent des apprentissages, et même les soudeurs formés reçoivent souvent plusieurs mois de formation sur le tas. Savoir lire des plans, les maths d'atelier et les bases de l'électricité aident.",
            "Beaucoup d'employeurs veulent des soudeurs certifiés. Selon l'American Welding Society (AWS), sa certification Certified Welder est le point d'entrée le plus courant. C'est un examen pratique : vous soudez dans un procédé, une position et un matériau précis, et votre soudure est contrôlée selon une norme. Vous le passez dans un AWS Accredited Test Facility (ATF, centre d'examen agréé par l'AWS), et l'AWS dit qu'on ne peut pas obtenir une certification de soudage entièrement en ligne. Certaines certifications doivent être maintenues ou repassées : vérifiez les règles de la vôtre sur le site de l'AWS. Certains employeurs paient la formation et l'examen.",
            "Certains États et certaines villes délivrent des licences aux soudeurs, et les règles varient : vérifiez la page officielle du lieu où vous travaillez. Avant de payer une école, demandez : vous prépare-t-elle à un examen de l'AWS, et pouvez-vous le passer sur place ? Combien de diplômés trouvent un emploi en soudage ? Les anciens militaires peuvent se renseigner auprès du VA (le ministère américain des Anciens combattants) sur le GI Bill (aide aux études pour anciens militaires). Si vous avez un casier judiciaire, beaucoup d'employeurs du soudage embauchent des personnes qui en ont un ; renseignez-vous sur les contacts d'emploi du programme."
          ],
          steps: [
            "Écrivez votre objectif, par exemple « un poste de soudeur MIG dans un atelier de fabrication métallique d'ici l'été ».",
            "Choisissez le procédé et la position de votre première certification, d'après les offres d'emploi près de chez vous.",
            "Trouvez deux formations (community college, école de soudage ou apprentissage) et leurs dates de début.",
            "Trouvez un AWS Accredited Test Facility près de chez vous sur le site de l'AWS.",
            "Vérifiez les règles de votre État ou de votre ville, et ajoutez une date à chaque étape."
          ],
          words: [
            ["AWS", "l'American Welding Society (Société américaine de soudage), qui gère le programme Certified Welder et d'autres certifications de soudage."],
            ["Certified Welder", "une certification de l'AWS obtenue en réussissant un examen pratique de soudage dans un procédé, une position et un matériau fixés."],
            ["Accredited Test Facility (ATF)", "un lieu agréé par l'AWS pour faire passer les examens de certification de soudeur."],
            ["Examen pratique", "un examen où vous faites le geste ; ici, souder une pièce d'essai qui est ensuite contrôlée."],
            ["Atelier de fabrication métallique", "un atelier qui coupe, forme et soude le métal pour faire des pièces et des structures."]
          ],
          slides: [
            { title: "Les façons de se former", bullets: ["Community college ou école de soudage", "Cours techniques au lycée ; l'armée", "Apprentissage et formation sur le tas"] },
            { title: "AWS Certified Welder", bullets: ["Examen pratique : procédé, position, matériau", "Dans un AWS Accredited Test Facility", "Impossible à obtenir entièrement en ligne"] },
            { title: "Avant de payer", bullets: ["Prépare-t-elle à un examen de l'AWS ?", "Combien de diplômés trouvent un emploi en soudage ?", "Vérifier les règles de l'État ou de la ville"] },
            { title: "Votre plan", bullets: ["Objectif, procédé et position", "Deux formations et un centre d'examen", "Une date pour chaque étape"] }
          ],
          sources: [
            { name: "American Welding Society : Certification", url: "https://www.aws.org/certification/" },
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Soudeurs, comment le devenir", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" },
            { name: "Apprenticeship.gov : Recherche d'apprentissages", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop : Recherche de licences", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Tâche finale : préparez votre plan pour débuter en soudure. Rassemblez votre tableau des procédés (leçon 1), votre fiche de lecture avec les assemblages, les positions et les défauts (leçons 2 et 3) et votre liste de sécurité (leçons 4 et 5). Ensuite, rédigez votre plan daté : votre objectif, le procédé et la position de votre certification, deux formations près de chez vous avec leurs dates de début, un AWS Accredited Test Facility, ce que votre État ou votre ville exige (avec l'adresse web) et une date pour chaque étape.",
          youCanNow: "suivre votre propre plan daté pour vous former et passer un examen de certification de soudeur.",
          quickCheck: [
            { objective: "O5", q: "Où passe-t-on l'examen AWS Certified Welder ?", options: ["Entièrement en ligne, depuis chez soi", "Dans n'importe quelle quincaillerie", "Dans un AWS Accredited Test Facility", "Dans ce cours"], answer: 2, why: "L'AWS dit que la certification s'obtient en passant l'examen dans un Accredited Test Facility, pas entièrement en ligne." },
            { objective: "O5", q: "Quel type d'examen est l'AWS Certified Welder ?", options: ["Un test de frappe au clavier", "Un examen pratique où vous soudez une pièce qui est contrôlée", "Une dissertation", "Seulement un entretien"], answer: 1, why: "C'est un examen pratique dans un procédé, une position et un matériau précis." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La sécurité et votre parcours",
        questions: [
          { objective: "O4", q: "Pourquoi ne faut-il jamais jeter un coup d'œil à un arc sans protection des yeux ?", options: ["C'est impoli", "Sa lumière, y compris les rayons UV, peut brûler vos yeux", "Cela affaiblit la soudure", "Cela consomme plus de gaz"], answer: 1, why: "La lumière de l'arc peut brûler vos yeux, même d'un bref coup d'œil." },
          { objective: "O4", q: "L'acier que vous allez souder est galvanisé (recouvert de zinc). Pourquoi est-ce important ?", options: ["Il produit des fumées encore plus nocives, donc la ventilation et la bonne protection comptent encore plus", "On ne peut pas du tout le souder", "Il rend la soudure plus solide", "Cela n'a pas d'importance"], answer: 0, why: "Les revêtements comme le zinc produisent des fumées nocives quand ils chauffent." },
          { objective: "O4", q: "Quelle est une façon sûre d'éviter l'électrocution en soudant ?", options: ["Souder debout dans une flaque", "Porter des gants mouillés pour rester au frais", "Utiliser un câble à l'isolant fendu", "Garder les gants et les vêtements secs et vérifier d'abord les câbles"], answer: 3, why: "Un équipement sec et des câbles en bon état empêchent le courant de passer par vous." },
          { objective: "O5", q: "Quelle question vous aide le plus avant de payer une école de soudage ?", options: ["De quelle couleur est le logo ?", "Le parking est-il gratuit ?", "Vous prépare-t-elle à un examen de l'AWS, et combien de diplômés trouvent un emploi en soudage ?", "Quelle est la taille du hall d'accueil ?"], answer: 2, why: "Savoir si une formation mène à la certification et à l'emploi vous dit si elle vaut son prix." },
          { objective: "O5", q: "Quelle étape du plan est complète ?", options: ["« Apprendre à souder »", "« Me faire certifier un jour »", "« Regarder des écoles »", "« Passer l'examen AWS Certified Welder en MIG, position à plat, à l'ATF du college avant le 20 mai »"], answer: 3, why: "Elle nomme l'examen, le procédé et la position, le lieu et une date." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la soudure",
    questions: [
      { objective: "O1", q: "À quoi sert le soudage ?", options: ["Coller du métal avec du ruban adhésif", "Faire fondre le métal pour que les pièces n'en forment qu'une", "Peindre le métal", "Plier le métal à froid"], answer: 1, why: "Le soudage fait fondre le métal pour que les pièces se mélangent et durcissent en une seule." },
      { objective: "O1", q: "Quel procédé utilise une baguette enrobée de flux et marche bien dehors ?", options: ["Électrode enrobée (SMAW)", "TIG (GTAW)", "MIG (GMAW)", "Coupage plasma"], answer: 0, why: "Le soudage à l'électrode enrobée utilise une baguette enrobée et n'a pas besoin d'un gaz de protection que le vent pourrait emporter." },
      { objective: "O1", q: "Quel procédé utilise une électrode en tungstène et une baguette d'apport séparée ?", options: ["Fil fourré", "Électrode enrobée", "Oxycoupage", "TIG (GTAW)"], answer: 3, why: "Le TIG utilise une électrode en tungstène, et le soudeur ajoute le métal d'apport à la main." },
      { objective: "O1", q: "Pourquoi une soudure a-t-elle besoin d'une protection ?", options: ["Pour la rendre brillante", "Pour la refroidir plus vite", "Pour tenir l'air à distance et garder une soudure solide", "Pour la rendre plus bruyante"], answer: 2, why: "Le gaz ou le flux tient l'air loin du métal chaud." },
      { objective: "O2", q: "Deux pièces sont bord contre bord, en ligne droite. Quel est cet assemblage ?", options: ["Assemblage à recouvrement", "Assemblage bout à bout", "Assemblage en angle", "Assemblage en T"], answer: 1, why: "Un assemblage bout à bout, ce sont deux pièces qui se rejoignent bord contre bord." },
      { objective: "O2", q: "Quelle position de soudage est en général la plus difficile ?", options: ["À plat", "Horizontale", "Au plafond", "Aucune n'est plus difficile"], answer: 2, why: "Au plafond, on soude par en dessous, contre la gravité." },
      { objective: "O2", q: "Sur un symbole de soudage, que signifie un petit triangle ?", options: ["Une soudure d'angle", "Une soudure en chanfrein", "Arrêter le travail", "La queue"], answer: 0, why: "Le triangle est le symbole de la soudure d'angle." },
      { objective: "O2", q: "Le symbole de soudure est au-dessus de la ligne de référence. Où se fait la soudure ?", options: ["Côté flèche", "Des deux côtés", "Nulle part", "De l'autre côté"], answer: 3, why: "Au-dessus de la ligne signifie l'autre côté ; dessous signifie côté flèche." },
      { objective: "O3", q: "Qu'est-ce qui décrit une bonne soudure ?", options: ["Beaucoup de trous en surface", "Une rainure sur les bords", "Une largeur et une forme régulières, bien raccordées aux deux pièces", "Beaucoup de projections autour"], answer: 2, why: "Une bonne soudure est régulière, bien raccordée et sans trous ni fissures." },
      { objective: "O3", q: "Quelle est une cause probable de porosité ?", options: ["Un métal sale ou un mauvais gaz de protection", "Un masque foncé", "Un métal propre et sec", "Porter des gants en cuir"], answer: 0, why: "La saleté et une mauvaise protection laissent du gaz piégé sous forme de trous." },
      { objective: "O3", q: "Quel défaut est une ligne à travers la soudure ou à côté, et très grave ?", options: ["Projections", "Une fissure", "Débordement", "Porosité"], answer: 1, why: "Les fissures peuvent faire céder une soudure ; ce sont des défauts graves." },
      { objective: "O3", q: "Une soudure n'a pas fondu dans le métal de base. Quelle est une cause probable ?", options: ["Trop de chaleur", "Le port d'un masque", "Le nettoyage du métal", "Pas assez de chaleur ou une avance trop rapide"], answer: 3, why: "Le manque de fusion vient souvent d'une chaleur trop faible ou d'une vitesse d'avance trop rapide." },
      { objective: "O4", q: "Qu'exige l'OSHA pour protéger les yeux pendant le soudage à l'arc ?", options: ["Des lunettes de soleil", "Un masque ou un écran à main avec le bon filtre", "Rien si c'est rapide", "Un masque anti-poussière"], answer: 1, why: "L'OSHA exige un masque ou un écran à main avec un filtre pour le soudage à l'arc." },
      { objective: "O4", q: "Qu'est-ce qu'il ne faut jamais utiliser pour ventiler une zone de soudage ?", options: ["Un ventilateur", "L'aspiration des fumées", "L'oxygène", "Des portes ouvertes"], answer: 2, why: "L'oxygène fait brûler le feu beaucoup plus vite ; l'OSHA dit de ne jamais l'utiliser pour ventiler." },
      { objective: "O4", q: "Selon l'OSHA, à quelle distance du soudage faut-il éloigner ce qui peut brûler, quand c'est possible ?", options: ["Au moins 35 pieds", "5 pieds", "10 pieds", "Inutile de les déplacer"], answer: 0, why: "La règle de l'OSHA dit au moins 35 pieds, ou bien les couvrir ou les protéger." },
      { objective: "O4", q: "Qu'est-ce qu'une surveillance incendie ?", options: ["Une horloge dans l'atelier", "Un détecteur de fumée", "Un type de masque", "Une personne qui guette le feu pendant et après le travail par points chauds, avec un extincteur"], answer: 3, why: "Le surveillant incendie guette le feu et reste au moins une demi-heure après le travail." },
      { objective: "O5", q: "Ce cours va :", options: ["Vous donner une certification de l'AWS", "Vous donner une licence de soudeur", "Vous préparer à la formation et à l'examen ; il ne vous certifie pas", "Vous permettre de souder chez vous"], answer: 2, why: "La certification s'obtient par un examen pratique dans un Accredited Test Facility." },
      { objective: "O5", q: "Peut-on obtenir une certification de soudage de l'AWS entièrement en ligne ?", options: ["Non ; l'examen se passe en personne dans un Accredited Test Facility", "Oui, avec une vidéo", "Oui, en lisant un livre", "Oui, en faisant ce quiz"], answer: 0, why: "L'AWS dit que la certification de soudage ne peut pas s'obtenir entièrement en ligne." },
      { objective: "O5", q: "Qui dit quelle licence, s'il y en a une, un soudeur doit avoir là où vous travaillez ?", options: ["Une vidéo de soudage", "L'État ou la ville, sur sa page officielle", "Une offre d'emploi", "Vos amis"], answer: 1, why: "Certains États et villes délivrent des licences aux soudeurs ; la page officielle donne les règles." },
      { objective: "O5", q: "Qu'est-ce qui vous aide à choisir le procédé de votre première certification ?", options: ["Votre couleur préférée", "Le masque le moins cher", "Deviner", "Les procédés cités dans les offres d'emploi près de chez vous"], answer: 3, why: "Les offres d'emploi montrent les procédés que recherchent les employeurs de votre région." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 2, 4, 7, 9, 11, 12, 14, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Tableau des procédés", objective: "O1", notYet: "Moins de quatre procédés, ou les travaux ne correspondent pas au procédé.", meets: "Quatre procédés, chacun associé à un vrai travail qui lui convient.", exceeds: "Dit aussi pourquoi chaque procédé convient, avec des mots comme dehors, métal mince ou rapidité." },
      { name: "Assemblages, positions et symboles", objective: "O2", notYet: "Des assemblages ou des positions manquent ou sont mal nommés.", meets: "Les cinq assemblages dessinés et nommés, les quatre positions notées avec leur numéro.", exceeds: "Lit aussi correctement un symbole de soudage : côté, type et taille." },
      { name: "Liste des défauts", objective: "O3", notYet: "Moins de cinq défauts, ou des causes fausses.", meets: "Cinq défauts, chacun avec une cause probable.", exceeds: "Indique aussi comment l'atelier contrôlerait chaque défaut." },
      { name: "Liste de sécurité", objective: "O4", notYet: "Il manque les yeux, la peau, les poumons, les oreilles, l'incendie ou l'électrocution.", meets: "Couvre les yeux, la peau, les poumons, les oreilles, l'électrocution et au moins trois précautions contre l'incendie, dont la règle des 35 pieds et la surveillance incendie.", exceeds: "Couvre aussi le métal revêtu, les bouteilles et le permis de feu, et elle est assez claire pour briefer un nouvel aide." },
      { name: "Plan daté tiré de sources officielles", objective: "O5", notYet: "Les étapes n'ont pas de date, ou les règles viennent d'annonces ou de publications.", meets: "Deux vraies formations, un AWS Accredited Test Facility, les règles de l'État ou de la ville avec l'adresse web officielle, et une date pour chaque étape.", exceeds: "Note aussi les questions posées à chaque formation et une solution de repli, comme un poste d'aide pendant la formation." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent dans une formation en soudage ou un apprentissage dans les 90 jours",
      "Apprenants qui réussissent un examen de certification de soudeur dans les 12 mois (déclaré par eux lors du suivi)",
      "Apprenants embauchés comme soudeurs ou aides-soudeurs dans les 6 mois",
      "Les formations partenaires signalent que les nouveaux élèves arrivent en connaissant les mots de base et les règles de sécurité"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour les pages de l'AWS, de l'OSHA, du BLS et de l'État, et pour les photos de soudures",
      "Papier, stylo, ciseaux et bandes de papier ou carton pour les modèles d'assemblages",
      "Facultatif : des échantillons de soudures (bonnes et mauvaises) d'une école ou d'un atelier local, à regarder, jamais à fabriquer",
      "Environ 60 à 75 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Pas de soudage, de coupage ni de meulage dans ce cours. Le travail pratique se fait dans un atelier encadré, avec tous les EPI.",
      "Si possible, apportez des échantillons de soudures ou un masque et des gants usagés que les apprenants peuvent regarder et manipuler (pièces froides et propres uniquement).",
      "Invitez un formateur en soudage, un AWS Accredited Test Facility ou un atelier de fabrication local à parler de ce qu'ils recherchent.",
      "Aidez chaque apprenant à vérifier les règles de son propre État ou de sa ville ; ne donnez pas une seule réponse pour tout le groupe.",
      "Orientez les apprenants qui ont un casier judiciaire ou les anciens militaires vers les services de réinsertion ou d'aide aux anciens combattants ; ne promettez aucun résultat.",
      "Notez la tâche finale avec la grille et faites un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
