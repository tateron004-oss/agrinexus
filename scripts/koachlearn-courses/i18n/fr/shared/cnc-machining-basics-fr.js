"use strict";

// Koach Learn course (French translation of shared/cnc-machining-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "cnc-machining-basics-fr",
  lang: "fr",
  translationOf: "cnc-machining-basics",
  category: "Workforce Development",
  name: "Les bases de l'usinage CNC",
  skills: "Nommer les machines CNC et leurs axes, Lire les cotes et les tolérances sur un plan, Lire du code G et du code M de base, Ordonner les étapes d'un réglage sûr et d'une première pièce, Repérer les dangers de l'atelier et leurs mesures de protection, Planifier votre parcours vers une formation et une certification en usinage",
  outcome: "nommer les principales machines CNC et leurs axes, lire les cotes et les tolérances d'un plan simple, lire un court programme en code G et dessiner sa trajectoire sur du papier quadrillé, mettre dans l'ordre les étapes d'un réglage sûr et d'une première pièce, nommer les mesures de protection contre les dangers courants de l'atelier, et suivre un plan daté pour vous former et obtenir une certification en usinage.",
  about: [
    "Les usineurs et les opérateurs CNC fabriquent les pièces en métal et en plastique qui se trouvent dans les voitures, les avions, le matériel agricole, les appareils médicaux et les machines de toutes les usines. Beaucoup commencent comme opérateurs sur machine, puis passent au réglage, à la programmation et au contrôle. Ce cours s'adresse à toute personne qui s'intéresse à ce parcours : demandeurs d'emploi, jeunes, anciens militaires, personnes sortant de prison, immigrés et adultes qui reprennent des études.",
    "Vous allez apprendre ce que font les machines CNC et comment leurs axes se déplacent, comment lire les dimensions et les tolérances sur le plan d'une pièce, comment lire un court programme CNC ligne par ligne, et l'ordre d'un réglage sûr et d'une première pièce. Ensuite, vous verrez les dangers de l'atelier, comment les usineurs s'en protègent, et comment fonctionnent les formations et les certifications.",
    "Ce cours vous prépare. Il ne vous donne ni certificat ni licence, et vous n'utiliserez aucune machine. On apprend à conduire une fraiseuse ou un tour uniquement dans un atelier encadré, avec un formateur qualifié. Les certifications en usinage, comme celles du National Institute for Metalworking Skills (NIMS, l'institut national américain des compétences en travail des métaux), demandent en général un examen écrit et une épreuve pratique.",
    "Chaque leçon dure environ cinq minutes, avec une activité « Essayez maintenant » sur papier ou sur ordinateur et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est votre propre plan de démarrage en CNC, avec de vraies dates."
  ],
  finalTask: "Préparez votre plan de démarrage en CNC : (1) un croquis d'une page d'une fraiseuse et d'un tour avec les axes X, Y et Z indiqués ; (2) une fiche de lecture de plan pour une pièce d'exercice, avec les limites calculées pour trois cotes tolérancées ; (3) un court programme d'exercice (8 à 12 lignes) qui usine un carré ou une rainure simple, avec chaque ligne expliquée avec vos propres mots et la trajectoire dessinée sur du papier quadrillé ; (4) une liste de contrôle de réglage et de sécurité pour une première pièce qui couvre les protecteurs, la protection des yeux, la tenue, les copeaux, le liquide de coupe, le bridage, les décalages, une marche à vide et le contrôle de la première pièce ; et (5) un plan daté qui nomme deux formations ou apprentissages près de chez vous, la certification NIMS que vous visez (prise sur le site officiel) et une date pour chaque étape.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes et des adultes qui cherchent un métier manuel dans l'industrie : demandeurs d'emploi, lycéens et jeunes diplômés, anciens militaires, personnes sortant de prison, immigrés et adultes qui reprennent des études. Certains ont fait de l'atelier à l'école, de la mécanique auto, de l'entretien agricole ou militaire ; la plupart n'ont jamais conduit une machine CNC.",
    startingPoint: "Ils savent lire des consignes courtes, lire un mètre ruban et calculer avec des nombres entiers et des nombres décimaux. La plupart savent que les usines utilisent des machines commandées par ordinateur, mais ne savent pas nommer les machines ni les axes, lire une tolérance, lire une ligne de code G ni citer les étapes d'un réglage sûr.",
    gap: "Les employeurs, les organismes d'apprentissage et les formations en usinage cherchent des personnes qui connaissent le vocabulaire de base, savent lire un plan et un programme simple, et prennent la sécurité au sérieux. Les apprenants ont besoin de cette base et d'un plan daté, pour choisir une bonne formation, ne pas gaspiller d'argent et arriver prêts à apprendre sur la machine.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire à début du collège) ; chaque mot d'atelier est expliqué",
      "Aucun travail sur machine dans ce cours : conduire une fraiseuse ou un tour demande un atelier encadré et un formateur qualifié",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les sites officiels ; du papier quadrillé, un crayon et une règle pour les croquis et les trajectoires",
      "Calcul : décimales jusqu'à trois chiffres (millièmes de pouce) et millimètres simples ; des exemples résolus sont donnés",
      "Temps : leçons de 5 à 6 minutes, à caser entre l'école, le travail et les rendez-vous",
      "Le code G change selon la commande numérique de la machine : chaque apprenant suit le manuel de la machine sur laquelle il se forme"
    ],
    prerequisites: "Aucun. « Les maths de tous les jours, au travail et dans la vie » aide pour les décimales ; « Commencer une carrière dans les métiers techniques » aide à choisir un métier, et ce cours va plus loin sur l'usinage."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'images ou de descriptions de machines et de pièces d'atelier", action: "nommer la machine CNC qui fabrique chaque pièce et montrer ses axes X, Y et Z", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "À partir du plan simple d'une pièce avec des cotes tolérancées", action: "écrire la plus petite et la plus grande dimension permises pour chaque cote et décider si une pièce mesurée est conforme", standard: "sans erreur de calcul sur 3 cotes" },
    { id: "O3", condition: "À partir d'un court programme CNC de 8 à 12 lignes", action: "expliquer ce que fait chaque ligne de code G et de code M et dessiner la trajectoire sur du papier quadrillé", standard: "avec les déplacements et les points de départ et d'arrivée corrects" },
    { id: "O4", condition: "À partir des étapes d'un réglage et d'une première pièce dans le désordre", action: "mettre dans le bon ordre les étapes d'un réglage sûr et d'une première pièce", standard: "avec la marche à vide et le contrôle de la première pièce avant la production" },
    { id: "O5", condition: "Face à cinq dangers courants d'un atelier d'usinage", action: "nommer une mesure de protection pour chaque danger : protecteur, équipement de protection, bonne habitude ou consignation", standard: "avec une mesure correcte pour les cinq" },
    { id: "O6", condition: "En utilisant les sites officiels de formation, d'apprentissage et de NIMS", action: "rédiger un plan daté pour vous former et obtenir une certification en usinage", standard: "avec deux formations, une certification et une date pour chaque étape" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Machines, plans et programmes",
      lessons: [
        {
          title: "Ce que font les machines CNC et comment elles bougent",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les principales machines CNC et montrer leurs axes X, Y et Z.",
          text: [
            "CNC veut dire commande numérique par calculateur (en anglais, computer numerical control). Une machine CNC suit un programme pour déplacer un outil de coupe ou une pièce sur des trajectoires précises. Usiner, c'est enlever de la matière, sous forme de copeaux, jusqu'à ce que la pièce ait la bonne forme et la bonne taille.",
            "Une fraiseuse CNC (ou centre d'usinage) tient la pièce immobile sur une table pendant qu'un outil qui tourne la coupe. Elle fait des faces planes, des poches, des rainures et des trous, par exemple sur une équerre ou une plaque de moteur. Un tour CNC (ou centre de tournage) fait tourner la pièce pendant qu'un outil immobile la coupe. Il fait des pièces rondes, comme des arbres, des goupilles et des bagues. Les ateliers utilisent aussi des défonceuses CNC pour le bois et le plastique, et des découpeuses CNC plasma et laser pour la tôle.",
            "Chaque direction dans laquelle une machine peut se déplacer est un axe. Sur une fraiseuse verticale classique, X va à gauche et à droite, Y vient vers vous et s'éloigne de vous, et Z monte et descend avec la broche. Sur un tour, Z suit la longueur de la pièce qui tourne et X la traverse, ce qui règle le diamètre. Les grosses machines ajoutent des axes de rotation : une machine « 5 axes » peut aussi incliner et tourner la pièce."
          ],
          words: [["CNC", "commande numérique par calculateur : une machine qui suit un programme de nombres et de codes."], ["Fraiseuse", "une machine où un outil qui tourne coupe une pièce tenue sur une table."], ["Tour", "une machine où la pièce tourne et un outil immobile la coupe ; il fait des pièces rondes."], ["Broche", "la partie de la machine qui fait tourner l'outil (fraiseuse) ou la pièce (tour)."], ["Axe", "une direction dans laquelle une machine peut se déplacer, comme X, Y ou Z."]],
          slides: [
            { title: "CNC = commande numérique par calculateur", bullets: ["Un programme déplace l'outil ou la pièce sur des trajectoires précises", "Usiner, c'est enlever de la matière en copeaux"] },
            { title: "Fraiseuse ou tour", bullets: ["Fraiseuse : pièce immobile, outil qui tourne : faces, poches, rainures, trous", "Tour : la pièce tourne, outil immobile : arbres, goupilles, bagues"] },
            { title: "Les axes d'une fraiseuse verticale", bullets: ["X : gauche et droite", "Y : vers vous et loin de vous", "Z : haut et bas avec la broche"] },
            { title: "Les axes d'un tour", bullets: ["Z : le long de la pièce", "X : en travers de la pièce ; règle le diamètre", "Les machines 5 axes ajoutent l'inclinaison et la rotation"] }
          ],
          tryIt: "Trouvez chez vous trois pièces en métal ou en plastique (un boulon, une charnière de porte, un capuchon de stylo, une pièce de vélo). Pour chacune, écrivez « fraiseuse » ou « tour » et pourquoi. Ensuite, dessinez une fraiseuse verticale comme une boîte avec une broche en haut, et indiquez X, Y et Z avec des flèches.",
          youCanNow: "dire ce que fabriquent une fraiseuse CNC et un tour CNC, et montrer les axes X, Y et Z sur chacun.",
          quickCheck: [
            { objective: "O1", q: "Un atelier a besoin de 500 goupilles rondes en acier. Quelle machine convient le mieux ?", options: ["Une découpeuse CNC plasma", "Un tour CNC", "Une défonceuse CNC pour le bois", "Une plieuse de tôle"], answer: 1, why: "Un tour fait tourner la pièce : il fabrique des pièces rondes comme des goupilles et des arbres." },
            { objective: "O1", q: "Sur une fraiseuse verticale classique, quel axe fait monter et descendre la broche ?", options: ["X", "Y", "A", "Z"], answer: 3, why: "Sur une fraiseuse verticale, Z est l'axe de montée et de descente de la broche." }
          ]
        },
        {
          title: "Lire un plan : cotes et tolérances",
          objectives: ["O2"],
          minutes: 6,
          goal: "Écrire la plus petite et la plus grande dimension permises pour une cote tolérancée et décider si une pièce est conforme.",
          text: [
            "Un plan (on dit aussi dessin technique) montre la pièce sous différents côtés et donne toutes les dimensions utiles. Chaque dimension est une cote. Les ateliers américains utilisent souvent des pouces écrits avec trois ou quatre décimales ; beaucoup d'ateliers utilisent des millimètres. Le cartouche, dans un coin du plan, donne le nom de la pièce, la matière, les unités et la tolérance générale.",
            "Aucune pièce ne peut être parfaite, alors le plan indique de combien une dimension peut s'écarter. Cet écart permis, c'est la tolérance. « 1.000 ±0.005 » veut dire que la dimension peut aller de 0.995 à 1.005 pouce. Ces deux nombres sont les limites. Si aucune tolérance n'est écrite à côté d'une cote, c'est la tolérance générale du cartouche qui s'applique.",
            "Les usineurs vérifient les dimensions avec des instruments de mesure. Le pied à coulisse mesure vite les dimensions extérieures, intérieures et de profondeur. Le micromètre mesure plus précisément sur une petite plage. Les instruments sont gardés propres et vérifiés avec un étalon connu, car un instrument sale ou tombé peut donner une mauvaise mesure."
          ],
          steps: ["Trouvez la cote et ses unités (pouce ou mm) sur le plan.", "Trouvez sa tolérance à côté, ou la tolérance générale dans le cartouche.", "Soustrayez la tolérance pour la plus petite dimension ; ajoutez-la pour la plus grande.", "Comparez la dimension mesurée : si elle est entre les limites, la cote est conforme."],
          words: [["Plan", "un dessin d'une pièce avec toutes ses dimensions ; on dit aussi dessin technique."], ["Cote", "une dimension indiquée sur le plan, comme une longueur, une largeur ou le diamètre d'un trou."], ["Tolérance", "de combien une dimension peut s'écarter tout en restant bonne, par exemple ±0.005."], ["Limites", "la plus petite et la plus grande dimension permises."], ["Cartouche", "le cadre du plan qui donne le nom de la pièce, la matière, les unités et la tolérance générale."], ["Pied à coulisse / micromètre", "des instruments de mesure ; le micromètre est plus précis sur une petite plage."]],
          slides: [
            { title: "Un plan donne toutes les dimensions", bullets: ["Chaque dimension est une cote", "Pouces (souvent 3 ou 4 décimales) ou millimètres", "Cartouche : pièce, matière, unités, tolérance générale"] },
            { title: "Tolérance = écart permis", bullets: ["1.000 ±0.005 veut dire de 0.995 à 1.005", "Pas de tolérance écrite ? Prenez celle du cartouche"] },
            { title: "Calculez les limites", bullets: ["Plus petite = cote moins tolérance", "Plus grande = cote plus tolérance", "Entre les limites = conforme"] },
            { title: "Instruments de mesure", bullets: ["Pied à coulisse : mesures rapides extérieures, intérieures et de profondeur", "Micromètre : plus précis sur une petite plage", "Gardez les instruments propres et vérifiés"] }
          ],
          tryIt: "Exercice seulement. Calculez les limites de : (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Puis décidez : une pièce mesurée à 0.753 pour (b) est-elle conforme ? (Réponses : a de 2.490 à 2.510 ; b de 0.748 à 0.752 ; c de 24.9 à 25.1 mm ; 0.753 est trop grand, donc la pièce n'est pas conforme.)",
          youCanNow: "trouver une cote et sa tolérance sur un plan, calculer ses limites et décider si une pièce mesurée est conforme.",
          quickCheck: [
            { objective: "O2", q: "Un plan indique 1.250 ±0.003. Quelles sont les limites ?", options: ["De 1.247 à 1.253", "De 1.250 à 1.253", "De 1.220 à 1.280", "De 1.247 à 1.250"], answer: 0, why: "On soustrait 0.003 pour la plus petite dimension et on ajoute 0.003 pour la plus grande." },
            { objective: "O2", q: "Aucune tolérance n'est écrite à côté d'une cote. Où regardez-vous ?", options: ["Vous demandez à la machine", "Vous supposez ±0.1", "La tolérance générale dans le cartouche", "N'importe quelle tolérance convient"], answer: 2, why: "Le cartouche donne la tolérance générale pour les cotes qui n'ont pas la leur." }
          ]
        },
        {
          title: "Lire un court programme CNC",
          objectives: ["O3"],
          minutes: 6,
          goal: "Expliquer ce que fait chaque ligne d'un court programme en code G et dessiner sa trajectoire.",
          text: [
            "La plupart des machines CNC lisent un programme écrit en code G. Chaque ligne, appelée bloc, donne une ou quelques instructions. Les codes G indiquent surtout à la machine comment se déplacer. Les codes M mettent en marche et arrêtent des fonctions de la machine. Les lettres suivies de nombres donnent les détails : X, Y et Z sont des positions, F est l'avance (la vitesse de l'outil pendant la coupe), S est la vitesse de broche et T choisit un outil.",
            "Codes courants sur beaucoup de machines : G00 est un déplacement rapide (vite, sans couper). G01 est un déplacement de coupe en ligne droite à la vitesse d'avance. G02 et G03 coupent des arcs, dans le sens des aiguilles d'une montre et dans le sens inverse. G20 règle les pouces et G21 les millimètres. G90 veut dire que les positions sont mesurées depuis le point zéro de la pièce (absolu). M03 met la broche en marche dans le sens des aiguilles d'une montre, M05 l'arrête, M08 ouvre le liquide de coupe, M09 le ferme et M30 termine le programme.",
            "Les codes peuvent changer d'une commande numérique à l'autre : un usineur vérifie donc toujours le manuel de la machine qu'il a devant lui. Beaucoup d'ateliers écrivent les programmes avec un logiciel de FAO (CAM en anglais), mais les usineurs lisent quand même le code pour repérer les erreurs avant que l'outil ne bouge. Un visualiseur gratuit de code G dans le navigateur peut dessiner la trajectoire d'un programme, mais pour s'exercer, le papier quadrillé marche tout aussi bien."
          ],
          steps: ["Lisez les premières lignes : unités (G20 ou G21) et mode absolu (G90).", "Trouvez l'outil (T), la vitesse de broche (S) et la mise en marche de la broche (M03).", "Pour chaque déplacement, notez le code (G00 ou G01) et la position X, Y et Z.", "Placez chaque point X et Y sur le papier quadrillé et reliez-les dans l'ordre : en pointillé pour un rapide, en trait plein pour une coupe.", "Trouvez la fin : arrêt de la broche (M05), liquide de coupe fermé (M09) et fin du programme (M30)."],
          words: [["Code G", "les codes, surtout de déplacement, que lit une machine CNC."], ["Code M", "des codes qui mettent en marche ou arrêtent des fonctions de la machine, comme la broche ou le liquide de coupe."], ["Bloc", "une ligne d'un programme CNC."], ["Avance (F)", "la vitesse à laquelle l'outil se déplace pendant qu'il coupe."], ["Vitesse de broche (S)", "la vitesse à laquelle tourne la broche, en tours par minute."], ["Trajectoire", "le chemin que suit l'outil."], ["FAO (CAM)", "un logiciel qui transforme un modèle 3D en programme CNC."]],
          slides: [
            { title: "Un programme est une liste de blocs", bullets: ["Codes G : surtout des déplacements", "Codes M : fonctions de la machine en marche ou à l'arrêt", "Positions X, Y, Z ; F avance ; S vitesse ; T outil"] },
            { title: "Codes G courants", bullets: ["G00 déplacement rapide, sans couper", "G01 déplacement de coupe en ligne droite", "G02 / G03 arcs, sens horaire / sens antihoraire", "G20 pouce, G21 mm, G90 absolu"] },
            { title: "Codes M courants", bullets: ["M03 broche en marche sens horaire, M05 arrêt broche", "M08 liquide de coupe ouvert, M09 fermé", "M30 fin du programme"] },
            { title: "Lisez, puis tracez", bullets: ["Placez chaque point X et Y sur du papier quadrillé", "Pointillé = rapide, trait plein = coupe", "Les codes changent selon la commande : voyez le manuel de la machine"] }
          ],
          tryIt: "Exercice seulement, sur papier quadrillé (1 carreau = 0.1 pouce). Expliquez chaque ligne, puis tracez-la : G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. Vous devez obtenir un carré de 1 pouce usiné à 0.05 pouce de profondeur.",
          youCanNow: "lire un court programme CNC ligne par ligne et dessiner le chemin que suivra l'outil.",
          quickCheck: [
            { objective: "O3", q: "Que demande G01 X2.0 F10.0 à la machine ?", options: ["Aller vite à X2.0 sans couper", "Arrêter la broche", "Ouvrir le liquide de coupe", "Couper en ligne droite jusqu'à X2.0 avec une avance de 10"], answer: 3, why: "G01 est un déplacement de coupe en ligne droite, et F règle l'avance." },
            { objective: "O3", q: "Quel code met en général la broche en marche dans le sens des aiguilles d'une montre ?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 met la broche en marche en sens horaire sur la plupart des commandes ; M30 termine le programme et M09 ferme le liquide de coupe." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Machines, plans et programmes",
        questions: [
          { objective: "O1", q: "Une pièce est une plaque plate en aluminium avec une poche et quatre trous. Quelle machine convient le mieux ?", options: ["Un tour CNC", "Une fraiseuse CNC", "Un mètre ruban", "Seulement une perceuse à colonne"], answer: 1, why: "Une fraiseuse fait des faces planes, des poches et des trous sur une pièce tenue immobile sur la table." },
          { objective: "O1", q: "Sur un tour, quel axe suit la longueur de la pièce qui tourne ?", options: ["Z", "X", "Y", "B"], answer: 0, why: "Sur un tour, Z suit la pièce et X la traverse, ce qui règle le diamètre." },
          { objective: "O2", q: "Un arbre doit mesurer 0.500 ±0.001. Il mesure 0.4995. Est-il conforme ?", options: ["Non, il est trop petit", "Non, toute dimension sous 0.500 est refusée", "Oui, il est entre 0.499 et 0.501", "On ne peut pas savoir"], answer: 2, why: "Les limites vont de 0.499 à 0.501, et 0.4995 est entre les deux." },
          { objective: "O3", q: "Une ligne du programme indique G00 Z1.0. Que se passe-t-il ?", options: ["L'outil coupe 1 pouce vers le bas", "Le liquide de coupe s'ouvre", "Le programme se termine", "L'outil va vite, sans couper, jusqu'à Z1.0"], answer: 3, why: "G00 est un déplacement rapide ; ici, il remonte l'outil à Z1.0, loin de la pièce." },
          { objective: "O3", q: "Votre machine de formation utilise un code que vous ne connaissez pas. Que faites-vous ?", options: ["Deviner d'après une autre machine", "Consulter le manuel de la commande de cette machine", "Effacer la ligne", "Lancer le programme et regarder"], answer: 1, why: "Les codes changent selon la commande, donc la référence est le manuel de la machine elle-même." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Réglage, sécurité et votre parcours",
      lessons: [
        {
          title: "Régler la machine et faire une première pièce",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mettre dans le bon ordre les étapes d'un réglage sûr et d'une première pièce.",
          text: [
            "Avant qu'un atelier fabrique beaucoup de pièces, quelqu'un règle la machine et valide le programme. Les nouveaux opérateurs commencent souvent par charger les pièces et vérifier les dimensions, puis apprennent le réglage auprès d'un usineur confirmé.",
            "Régler, c'est : lire le plan et la fiche de réglage, nettoyer la table ou le mandrin, tenir la pièce solidement (le bridage, par exemple un étau ou un mandrin), charger les bons outils et régler les décalages. Le décalage d'origine pièce indique à la machine où se trouve le point zéro de la pièce. Le décalage d'outil lui indique la longueur de chaque outil, pour que la pointe arrive au bon endroit.",
            "Ensuite, on valide le programme lentement. Pendant une marche à vide, la machine bouge avec l'outil à bonne distance au-dessus de la pièce. Le mode bloc par bloc exécute une ligne à la fois. Le bouton de correction d'avance ralentit les déplacements, et l'opérateur garde une main près de l'arrêt d'avance ou de l'arrêt d'urgence. Une fois la première pièce usinée, on la mesure par rapport à chaque cote du plan. C'est le contrôle de la première pièce. La production ne commence que si elle est conforme."
          ],
          steps: ["Lisez le plan, la fiche de réglage et le programme.", "Nettoyez la table, l'étau ou le mandrin et tenez la pièce solidement.", "Chargez les outils indiqués sur la fiche de réglage.", "Réglez le décalage d'origine pièce et les décalages d'outils.", "Faites une marche à vide au-dessus de la pièce, puis passez en bloc par bloc avec la correction d'avance baissée.", "Mesurez la première pièce par rapport à chaque cote (contrôle de la première pièce).", "Lancez la production seulement quand la première pièce est conforme ; continuez à vérifier les pièces en cours de route."],
          words: [["Fiche de réglage", "le document qui indique les outils, le bridage et les décalages d'un travail."], ["Bridage", "ce qui tient la pièce immobile, comme un étau, des brides ou un mandrin."], ["Décalage d'origine pièce", "le réglage qui indique à la machine où se trouve le point zéro de la pièce."], ["Décalage d'outil", "le réglage de la longueur (et de la taille) de chaque outil, pour que la pointe arrive au bon endroit."], ["Marche à vide", "faire tourner le programme avec l'outil à bonne distance de la pièce."], ["Contrôle de la première pièce", "mesurer la première pièce par rapport à tout le plan avant d'en faire d'autres."]],
          slides: [
            { title: "Se préparer", bullets: ["Lire le plan, la fiche de réglage et le programme", "Nettoyer et tenir la pièce solidement", "Charger les bons outils"] },
            { title: "Régler les décalages", bullets: ["Origine pièce : où se trouve le zéro de la pièce", "Décalages d'outils : la longueur de chaque outil"] },
            { title: "Valider lentement", bullets: ["Marche à vide avec l'outil loin de la pièce", "Bloc par bloc, correction d'avance baissée", "Main près de l'arrêt d'avance ou de l'arrêt d'urgence"] },
            { title: "La première pièce d'abord", bullets: ["Mesurer chaque cote du plan", "La production commence seulement si elle est conforme", "Continuer à vérifier les pièces pendant la série"] }
          ],
          tryIt: "Écrivez chacune de ces étapes sur un petit papier, mélangez-les, puis remettez-les dans l'ordre : régler les décalages d'outils ; contrôle de la première pièce ; nettoyer et tenir la pièce ; marche à vide ; lire le plan et la fiche de réglage ; passage en bloc par bloc ; régler l'origine pièce ; charger les outils ; lancer la production. Comparez votre ordre avec les étapes de cette leçon.",
          youCanNow: "mettre dans l'ordre les étapes d'un réglage et d'une première pièce, et dire pourquoi la marche à vide et le contrôle de la première pièce passent avant la production.",
          quickCheck: [
            { objective: "O4", q: "Quel réglage indique à la machine où se trouve le point zéro de la pièce ?", options: ["L'avance", "Le décalage d'outil", "Le décalage d'origine pièce", "La vitesse de broche"], answer: 2, why: "Le décalage d'origine pièce situe le zéro de la pièce ; les décalages d'outils règlent la longueur de chaque outil." },
            { objective: "O4", q: "La première pièce est usinée. Que faut-il faire avant de lancer le reste de la série ?", options: ["La mesurer par rapport à chaque cote du plan", "Mettre la correction d'avance au maximum", "Enlever les protecteurs pour mieux voir", "Effacer le programme"], answer: 0, why: "Le contrôle de la première pièce valide le réglage et le programme avant la production." }
          ]
        },
        {
          title: "Rester en sécurité dans l'atelier d'usinage",
          objectives: ["O5"],
          minutes: 5,
          goal: "Nommer une mesure de protection pour chaque danger courant de l'atelier d'usinage.",
          text: [
            "Les machines peuvent écraser des doigts ou des mains, causer des amputations, des brûlures et la cécité. Les principaux dangers sont la broche, le mandrin et l'outil qui tournent, les copeaux projetés, les copeaux et les arêtes coupants et chauds, le liquide de coupe sur la peau, les pièces lourdes et le bruit. Les règles de l'OSHA (l'agence américaine de santé et sécurité au travail) sur la protection des machines, 29 CFR 1910.212, exigent des protecteurs qui mettent les travailleurs à l'abri de ces dangers.",
            "Les bonnes habitudes à l'atelier : portez toujours des lunettes de sécurité avec protections latérales, et des protections auditives là où c'est bruyant. Gardez les portes et les protecteurs de la machine fermés pendant qu'elle tourne, et ne mettez jamais la main dedans avant l'arrêt complet de la broche. La plupart des ateliers interdisent les gants, les manches larges, les bijoux et les cheveux longs détachés près d'une broche qui tourne, car ils peuvent être happés et vous entraîner. Enlevez les copeaux avec un crochet à copeaux ou une brosse, jamais avec les mains, et ne soufflez jamais de copeaux vers vous ou vers d'autres personnes. Lavez le liquide de coupe sur votre peau et lisez la fiche de données de sécurité (FDS, SDS en anglais).",
            "Quand on nettoie, répare ou entretient une machine, on coupe son énergie et on la verrouille pour que personne ne puisse la démarrer. C'est la consignation (lockout/tagout), couverte par la règle de l'OSHA sur les énergies dangereuses (29 CFR 1910.147), et seuls des travailleurs formés et autorisés la font. La sécurité pratique s'apprend à l'atelier avec un formateur qualifié ; suivez toujours les règles de votre atelier."
          ],
          steps: ["Mettez des lunettes de sécurité avec protections latérales, et des protections auditives si besoin.", "Enlevez gants, bijoux et manches larges ; attachez les cheveux longs.", "Vérifiez que les protecteurs et les portes sont en place et fermés.", "Attendez l'arrêt complet de la broche avant d'ouvrir la porte ou de mettre la main dedans.", "Enlevez les copeaux avec un crochet ou une brosse, pas avec les mains.", "Pour un nettoyage ou une réparation, suivez les étapes de consignation de l'atelier."],
          words: [["Protecteur", "un capot ou une porte qui tient les mains et les copeaux loin des pièces en mouvement."], ["Copeaux", "les petites spirales et morceaux de métal ou de plastique que l'outil enlève ; souvent coupants et chauds."], ["Liquide de coupe", "le liquide qui refroidit l'outil et la pièce et évacue les copeaux."], ["FDS (SDS)", "fiche de données de sécurité : le document qui indique les dangers d'un produit et les protections."], ["Consignation", "couper et verrouiller l'énergie d'une machine pour que personne ne la démarre pendant l'entretien."]],
          slides: [
            { title: "Les dangers des machines", bullets: ["Broche, mandrin et outil qui tournent", "Copeaux projetés, coupants et chauds", "Liquide de coupe sur la peau, pièces lourdes, bruit"] },
            { title: "Protégez-vous", bullets: ["Lunettes de sécurité avec protections latérales, toujours", "Protections auditives là où c'est bruyant", "Pas de gants, de bijoux ni de manches larges près d'une broche qui tourne ; cheveux attachés"] },
            { title: "Bonnes habitudes", bullets: ["Protecteurs et portes fermés pendant le fonctionnement", "Attendre l'arrêt complet avant de mettre la main", "Crochet ou brosse, jamais les mains"] },
            { title: "Entretien = consignation", bullets: ["Énergie coupée et verrouillée avant nettoyage ou réparation", "OSHA 29 CFR 1910.147 ; travailleurs formés seulement", "Suivez toujours les règles de votre atelier"] }
          ],
          sources: [
            { name: "OSHA : normes sur la protection des machines", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA : maîtrise des énergies dangereuses (consignation)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Faites sur papier un tableau à deux colonnes : Danger et Protection. Remplissez cinq lignes : broche qui tourne, copeaux projetés, copeaux coupants et chauds, liquide de coupe sur la peau, machine en réparation. Écrivez une protection pour chacun, puis comparez avec cette leçon.",
          youCanNow: "nommer les principaux dangers de l'atelier d'usinage et une mesure de protection pour chacun.",
          quickCheck: [
            { objective: "O5", q: "Un tas de copeaux chauds s'accumule près de l'étau. Comment l'enlevez-vous ?", options: ["Avec la main", "En soufflant de l'air vers un collègue", "En mettant la main pendant que la broche tourne", "En attendant l'arrêt complet, puis avec un crochet ou une brosse"], answer: 3, why: "Les copeaux sont coupants et chauds ; un crochet ou une brosse protège vos mains." },
            { objective: "O5", q: "Une machine a besoin d'une réparation à l'intérieur. Que faut-il faire d'abord ?", options: ["Baisser la correction d'avance", "Un travailleur autorisé coupe et consigne son énergie", "Ouvrir la porte pendant qu'elle tourne", "Mettre des gants"], answer: 1, why: "La consignation empêche quiconque de démarrer la machine pendant l'entretien." }
          ]
        },
        {
          title: "Formation, certifications et votre plan CNC",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rédiger un plan daté pour vous former et obtenir une certification en usinage.",
          text: [
            "La plupart des usineurs apprennent sur le tas, souvent en commençant comme opérateurs sur machine. Aux États-Unis, les community colleges (établissements publics d'enseignement supérieur court) et les écoles techniques proposent des certificats et des diplômes en deux ans qui couvrent la lecture de plans ainsi que la programmation et la conduite CNC. Les apprentissages enregistrés combinent un travail payé et des cours, et durent en général plusieurs années. Cherchez-en un avec l'Apprenticeship Job Finder (l'outil de recherche d'apprentissages) sur apprenticeship.gov. Les anciens militaires peuvent se renseigner sur leurs droits à la formation, et les jeunes sur les programmes de leur école ou de leur agence pour l'emploi.",
            "Les certifications montrent à un employeur ce que vous savez faire. Le National Institute for Metalworking Skills (NIMS) fixe des normes et des certifications pour les métiers de l'usinage. La plupart des certifications NIMS ont deux parties : un examen sur les connaissances du poste et une épreuve pratique, par exemple usiner une pièce conforme au plan. Vérifiez les noms et les exigences actuels des certifications sur nims-skills.org. Certains employeurs apprécient aussi des certificats CNC ou CAO/FAO (CAD/CAM) délivrés par une école ou un fabricant de machines.",
            "Ce cours vous prépare ; il ne vous certifie pas. Méfiez-vous de toute formation qui promet un emploi ou une certification rapide contre une grosse somme. Demandez à l'école combien de temps vous passerez sur de vraies machines, à quelles certifications elle prépare et combien de diplômés trouvent un emploi."
          ],
          steps: ["Choisissez un premier objectif : emploi d'opérateur, formation en école ou apprentissage.", "Trouvez deux formations près de chez vous : un community college ou une école technique, et un apprentissage sur apprenticeship.gov.", "Cherchez sur nims-skills.org la certification NIMS du poste que vous visez.", "Interrogez chaque formation sur le temps machine, les certifications, le coût et l'aide à l'embauche.", "Écrivez une date pour chaque étape : candidater, commencer, s'entraîner, passer l'examen."],
          words: [["Apprentissage", "un emploi payé avec une formation sur le poste et des cours, souvent sur plusieurs années."], ["Certification", "une preuve, comme un certificat, que vous avez réussi une évaluation de vos compétences."], ["NIMS", "le National Institute for Metalworking Skills, qui fixe des normes et des certifications en usinage."], ["Épreuve pratique", "un examen où vous faites la tâche, par exemple usiner une pièce conforme au plan."]],
          slides: [
            { title: "Les portes d'entrée", bullets: ["Commencer comme opérateur sur machine et apprendre sur le tas", "Certificat d'un community college ou d'une école technique", "Apprentissage enregistré : travail payé plus cours"] },
            { title: "Certifications", bullets: ["NIMS : normes et certifications en usinage", "En général, un examen plus une épreuve pratique", "Vérifiez les noms et étapes actuels sur nims-skills.org"] },
            { title: "Bien choisir une formation", bullets: ["Demandez le temps passé sur de vraies machines", "Demandez à quelles certifications elle prépare", "Méfiez-vous des promesses rapides et chères"] },
            { title: "Votre plan daté", bullets: ["Deux formations, une certification", "Une date pour candidater, commencer, s'entraîner et passer l'examen"] }
          ],
          tryIt: "Tâche finale : préparez votre plan de démarrage en CNC. Dessinez une fraiseuse et un tour avec leurs axes, calculez les limites de trois cotes tolérancées, écrivez et expliquez un court programme pour un carré ou une rainure et tracez-le, rédigez votre liste de réglage et de sécurité, et écrivez un plan daté avec deux formations près de chez vous et une certification NIMS prise sur le site officiel.",
          youCanNow: "trouver une formation en usinage près de chez vous, nommer la certification que vous visez et suivre un plan daté pour y arriver.",
          quickCheck: [
            { objective: "O6", q: "Où pouvez-vous chercher des apprentissages enregistrés aux États-Unis ?", options: ["Dans une offre d'emploi qui demande des frais pour postuler", "Dans une publication sur les réseaux sociaux", "Avec l'Apprenticeship Job Finder sur apprenticeship.gov", "Dans un SMS d'un inconnu"], answer: 2, why: "Apprenticeship.gov est le site officiel du ministère du Travail des États-Unis, avec un outil de recherche d'apprentissages." },
            { objective: "O6", q: "Que comprennent la plupart des certifications NIMS ?", options: ["Un examen et une épreuve pratique", "Seulement une vidéo en ligne", "Seulement des frais", "Un mot d'un ami"], answer: 0, why: "NIMS décrit un examen sur les connaissances du poste plus une évaluation pratique." }
          ],
          sources: [
            { name: "NIMS : certification", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (ministère du Travail des États-Unis)", url: "https://www.apprenticeship.gov/" },
            { name: "Occupational Outlook Handbook du BLS : usineurs et outilleurs", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Réglage, sécurité et votre parcours",
        questions: [
          { objective: "O4", q: "Pourquoi faire une marche à vide avant d'usiner la première pièce ?", options: ["Pour trouver les erreurs du programme avec l'outil à bonne distance de la pièce", "Pour que la machine aille plus vite", "Pour sauter le contrôle de la première pièce", "Pour réchauffer le liquide de coupe"], answer: 0, why: "Une marche à vide montre les déplacements sans couper, donc les erreurs sont repérées sans danger." },
          { objective: "O4", q: "Quelle étape vient juste après avoir bridé la pièce et chargé les outils ?", options: ["Lancer la production", "Le contrôle de la première pièce", "Régler l'origine pièce et les décalages d'outils", "Expédier les pièces"], answer: 2, why: "Les décalages doivent être réglés avant de valider le programme et d'usiner la première pièce." },
          { objective: "O5", q: "Pourquoi la plupart des ateliers interdisent-ils les gants près d'une broche qui tourne ?", options: ["Ils refroidissent les mains", "Ils peuvent être happés et entraîner la main", "Ils coûtent trop cher", "Ils cachent les tatouages"], answer: 1, why: "Une broche ou un outil qui tourne peut attraper un gant et entraîner la main." },
          { objective: "O5", q: "Quelle protection portez-vous en permanence dans un atelier d'usinage ?", options: ["Seulement un casque", "Des gants", "Des sandales", "Des lunettes de sécurité avec protections latérales"], answer: 3, why: "Les copeaux projetés peuvent rendre aveugle, donc la protection des yeux se porte en permanence." },
          { objective: "O6", q: "Une école promet un emploi en CNC en une semaine contre une grosse somme. Que faites-vous ?", options: ["Demander le temps machine, les certifications et les embauches, et comparer avec d'autres formations", "Payer tout de suite", "Leur donner vos identifiants bancaires", "Signer sans lire"], answer: 0, why: "Vérifier ce qu'une formation offre vraiment protège votre temps et votre argent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de l'usinage CNC",
    questions: [
      { objective: "O1", q: "Que veut dire CNC ?", options: ["Coupe numérique centrale", "Commande numérique par calculateur", "Couper net, c'est conseillé", "Couche de nickel à froid"], answer: 1, why: "CNC veut dire commande numérique par calculateur (computer numerical control)." },
      { objective: "O1", q: "Quelle pièce a le plus de chances d'être faite sur un tour CNC ?", options: ["Une équerre plate avec des rainures", "Une boîte en tôle", "Un arbre rond", "Un panneau en bois"], answer: 2, why: "Un tour fait tourner la pièce : il fabrique des pièces rondes comme des arbres." },
      { objective: "O1", q: "Sur une fraiseuse verticale, quel axe vient vers vous et s'éloigne de vous ?", options: ["Y", "Z", "X", "C"], answer: 0, why: "Sur une fraiseuse verticale, Y vient vers l'opérateur et s'en éloigne." },
      { objective: "O2", q: "Qu'est-ce qu'une tolérance ?", options: ["La matière de la pièce", "La vitesse de la machine", "De combien une dimension peut s'écarter tout en restant bonne", "Le nom de la pièce"], answer: 2, why: "Une tolérance est l'écart permis sur une dimension." },
      { objective: "O2", q: "Un plan indique 3.000 ±0.005. Quelle dimension mesurée n'est pas conforme ?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "Les limites vont de 2.995 à 3.005, donc 3.006 est trop grand." },
      { objective: "O2", q: "Où trouvez-vous les unités et la tolérance générale sur un plan ?", options: ["Dans le programme", "Dans le cartouche", "Sur la porte de la machine", "Seulement sur la fiche de réglage"], answer: 1, why: "Le cartouche indique la pièce, la matière, les unités et la tolérance générale." },
      { objective: "O2", q: "Quel instrument mesure plus précisément sur une petite plage ?", options: ["Un micromètre", "Un mètre ruban", "Une règle", "Un crochet à copeaux"], answer: 0, why: "Un micromètre est plus précis qu'un pied à coulisse ou une règle sur sa petite plage." },
      { objective: "O3", q: "Quel code est en général un déplacement rapide, sans couper ?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 est un déplacement rapide de positionnement." },
      { objective: "O3", q: "Dans un programme CNC, que règle le mot F ?", options: ["Le numéro de l'outil", "L'avance pendant la coupe", "La vitesse de broche", "Le nom du fichier"], answer: 1, why: "F est l'avance ; S est la vitesse de broche et T l'outil." },
      { objective: "O3", q: "Un programme commence par G21. Que règle ce code ?", options: ["Les pouces", "Le liquide de coupe ouvert", "Les millimètres", "La fin du programme"], answer: 2, why: "G21 règle les millimètres ; G20 règle les pouces." },
      { objective: "O3", q: "Quel code termine en général le programme ?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 termine le programme sur la plupart des commandes." },
      { objective: "O4", q: "Qu'indique le décalage d'outil à la machine ?", options: ["Où se trouve le point zéro de la pièce", "À quelle vitesse couper", "Quel liquide de coupe utiliser", "La longueur de chaque outil, pour que la pointe arrive au bon endroit"], answer: 3, why: "Les décalages d'outils règlent la longueur de chaque outil ; le décalage d'origine pièce règle le zéro de la pièce." },
      { objective: "O4", q: "Pour valider un nouveau programme, quelle est une façon sûre de le lancer ?", options: ["À pleine vitesse avec la porte ouverte", "En bloc par bloc avec la correction d'avance baissée", "Sans marche à vide", "En laissant la machine tourner seule"], answer: 1, why: "Le bloc par bloc et une faible correction d'avance vous laissent le temps d'arrêter avant une erreur." },
      { objective: "O4", q: "Qu'est-ce que le contrôle de la première pièce ?", options: ["Lire la première page du manuel", "Nettoyer le premier copeau", "Mesurer la première pièce par rapport à chaque cote du plan", "Charger le premier outil"], answer: 2, why: "La première pièce est entièrement mesurée avant le début de la production." },
      { objective: "O5", q: "La broche ralentit mais ne s'est pas arrêtée. Que faites-vous ?", options: ["Attendre son arrêt complet avant d'ouvrir la porte", "Mettre la main pour prendre la pièce", "L'arrêter avec la main", "Ouvrir la porte pour regarder de plus près"], answer: 0, why: "Ne mettez jamais la main dedans avant l'arrêt complet de la broche." },
      { objective: "O5", q: "Quelle règle de l'OSHA couvre la consignation des énergies dangereuses ?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 est la règle de l'OSHA sur la maîtrise des énergies dangereuses (consignation)." },
      { objective: "O5", q: "Du liquide de coupe est tombé sur vos bras. Que faites-vous ?", options: ["L'ignorer", "Le laver et consulter la FDS pour savoir comment se protéger", "L'essuyer sur votre chemise", "Ajouter du liquide de coupe"], answer: 1, why: "Le liquide de coupe peut irriter la peau ; lavez-le et suivez la FDS." },
      { objective: "O6", q: "Que vous apporte ce cours ?", options: ["Une certification NIMS", "Une licence d'État", "Une préparation à la formation et à un examen de certification", "Un emploi garanti"], answer: 2, why: "Le cours vous prépare ; les certifications s'obtiennent en réussissant des épreuves comme les examens et les épreuves pratiques NIMS." },
      { objective: "O6", q: "Où vérifiez-vous les noms et les exigences actuels des certifications NIMS ?", options: ["Dans une publication sur les réseaux sociaux", "Sur nims-skills.org", "Dans un commentaire sous une vidéo", "Dans n'importe quelle offre d'emploi"], answer: 1, why: "Le site officiel de NIMS donne les certifications et les exigences actuelles." },
      { objective: "O6", q: "Que doit contenir un bon plan de démarrage en CNC ?", options: ["Deux formations, une certification et une date pour chaque étape", "Seulement l'envie de travailler en usine", "Des frais payés à un inconnu", "Aucune date, pour rester souple"], answer: 0, why: "Un plan avec des formations précises, une certification et des dates transforme l'objectif en étapes." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Machines et axes", objective: "O1", notYet: "Le croquis confond la fraiseuse et le tour, ou les axes manquent ou sont faux.", meets: "La fraiseuse et le tour sont dessinés avec X, Y et Z correctement indiqués.", exceeds: "Nomme aussi une pièce que fait chaque machine et où une machine 5 axes ajoute du mouvement." },
      { name: "Lecture de plan", objective: "O2", notYet: "Une ou plusieurs limites sont fausses, ou la décision conforme / non conforme est fausse.", meets: "Les trois cotes ont les bonnes limites et une décision conforme / non conforme correcte.", exceeds: "Montre aussi un exemple en millimètres et dit avec quel instrument mesurer chaque dimension." },
      { name: "Programme et trajectoire", objective: "O3", notYet: "Les lignes ne sont pas expliquées, ou la trajectoire tracée ne correspond pas au code.", meets: "Chaque ligne est expliquée et la trajectoire dessinée correspond au code, avec les rapides et les coupes indiqués.", exceeds: "Repère et corrige aussi une erreur placée exprès dans le programme par un partenaire ou le formateur." },
      { name: "Liste de réglage et de sécurité", objective: "O5", notYet: "La liste oublie les protecteurs, la protection des yeux, la tenue ou les copeaux.", meets: "Couvre les protecteurs, la protection des yeux et des oreilles, la tenue, les copeaux, le liquide de coupe et la consignation pour l'entretien.", exceeds: "Explique aussi en une ligne courte pourquoi chaque point compte." },
      { name: "Ordre du réglage", objective: "O4", notYet: "La production commence avant la marche à vide ou le contrôle de la première pièce.", meets: "Les étapes sont dans l'ordre, avec les décalages, une marche à vide et le contrôle de la première pièce avant la production.", exceeds: "Ajoute aussi des contrôles en cours de production." },
      { name: "Plan daté", objective: "O6", notYet: "Pas de vraies formations, pas de certification ou pas de dates.", meets: "Deux vraies formations près de chez l'apprenant, une certification NIMS prise sur le site officiel et une date pour chaque étape.", exceeds: "Note aussi les questions posées à chaque formation et les réponses." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à une formation en usinage, un apprentissage ou un emploi d'opérateur dans les 90 jours",
      "Apprenants qui obtiennent une certification NIMS ou une autre certification en usinage dans l'année",
      "Apprenants embauchés comme opérateurs sur machine, opérateurs CNC ou apprentis, et avis des employeurs partenaires sur la préparation des nouvelles recrues"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur de bibliothèque pour les sites officiels (nims-skills.org, apprenticeship.gov)",
      "Du papier quadrillé, un crayon, une règle et une calculatrice",
      "Facultatif : un visualiseur gratuit de code G dans le navigateur pour vérifier les trajectoires tracées",
      "Facultatif, avec un formateur : un pied à coulisse et un micromètre pour s'exercer à lire des mesures sur des pièces d'exemple",
      "Environ 75 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance, avec les activités « Essayez maintenant » faites en direct.",
      "Aucun travail sur machine dans ce cours. Si vous l'animez dans un atelier, les apprenants regardent seulement et ne touchent pas aux machines, sauf sous la surveillance d'un formateur qualifié, avec tous les protecteurs et les équipements de sécurité en place.",
      "Rappelez aux apprenants que le code G change selon la commande ; si votre formation utilise une machine précise, distribuez sa liste de codes.",
      "Pour l'exercice de trajectoire, glissez une erreur dans un court programme (un M05 manquant ou une valeur de X fausse) et faites-la trouver par des binômes.",
      "Notez la tâche finale avec la grille d'évaluation et faites un retour sur une ligne Pas encore à la fois.",
      "Invitez un usineur de la région, un organisme d'apprentissage ou un formateur de community college à parler des vrais emplois et des formations près de chez vous."
    ]
  }
};
