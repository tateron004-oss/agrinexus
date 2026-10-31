"use strict";

// Koach Learn course (French translation of shared/capm-project-management.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "capm-project-management-fr",
  lang: "fr",
  translationOf: "capm-project-management",
  category: "Workforce Development",
  name: "Les bases de la gestion de projet (préparation au CAPM)",
  skills: "Définir un projet et ses contraintes, Rédiger une charte de projet, Construire un WBS et trouver le chemin critique, Gérer les risques et les changements, Choisir une approche prédictive ou Agile, Préparer l'examen CAPM",
  outcome: "planifier un petit projet réel comme l'attend l'examen CAPM : rédiger une charte, découper le travail, trouver le chemin critique, suivre les risques et les changements, choisir une approche adaptée et construire votre propre plan daté pour préparer le CAPM.",
  about: [
    "Ce cours s'adresse aux personnes qui cherchent un emploi, aux anciens militaires, aux jeunes adultes, aux propriétaires de petites entreprises et à toute personne qui veut un premier poste en projet, comme coordinateur de projet, assistant de projet ou chef d'équipe. C'est aussi une première étape vers le Certified Associate in Project Management (CAPM), une certification de niveau débutant délivrée par le Project Management Institute (PMI), l'organisation internationale de la gestion de projet.",
    "Vous apprendrez les outils de base : une charte de projet, une liste des parties prenantes, une structure de découpage du travail (WBS), un calendrier avec un chemin critique, un registre des risques et un journal des changements. Vous vous exercerez avec chacun sur papier ou dans un tableur gratuit, à partir d'un petit projet de votre vie ou de votre travail.",
    "Ce cours vous PRÉPARE. Il ne vous donne pas le CAPM. Seul le PMI le délivre, et c'est le PMI qui fixe les règles : qui peut s'inscrire, les heures de formation nécessaires, les frais, l'examen et le renouvellement. Ces règles peuvent changer : vous les vérifierez donc vous-même sur pmi.org.",
    "Chaque leçon dure environ cinq minutes, suivie d'une tâche \"Essayez maintenant\" et de deux questions rapides. Il y a un test de départ au début, un contrôle des connaissances après chaque chapitre et un quiz final de 20 questions."
  ],
  finalTask: "Menez votre propre préparation au CAPM comme un projet. Faites une charte d'une page (objectif, périmètre, sponsor, mesure de réussite), un WBS de votre travail d'étude, un calendrier daté avec des jalons qui se termine à une date d'examen visée et montre le chemin critique, un registre des risques avec au moins trois risques (chacun avec un score, une réponse et un responsable), et la liste des pages officielles du PMI que vous avez consultées pour les conditions d'admission, les frais et le plan de contenu de l'examen.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes et des jeunes adultes, aux États-Unis et ailleurs, qui veulent un premier poste en projet ou le CAPM : personnes qui cherchent un emploi, anciens militaires qui passent à la vie civile, personnes qui sortent de prison, propriétaires de petites entreprises, salariés d'associations et travailleurs qui coordonnent déjà des tâches sans en avoir le titre.",
    startingPoint: "La plupart ont déjà organisé du travail de façon informelle (un événement, un déménagement, un planning d'équipe, une mission militaire, un programme d'église) mais n'ont pas utilisé les outils ni le vocabulaire officiels de la gestion de projet. Certains savent utiliser un tableur simple ; peu ont déjà vu un diagramme de Gantt ou un registre des risques.",
    gap: "Les employeurs citent la coordination de projet et le CAPM dans leurs offres d'emploi, et l'examen utilise le vocabulaire du PMI. Les apprenants doivent transformer ce qu'ils font déjà de façon informelle en outils et en mots standard, et ils ont besoin d'un plan réaliste pour remplir les conditions du PMI et réussir l'examen.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme du PMI est expliqué",
      "Appareils : papier et stylo suffisent pour chaque tâche ; un tableur gratuit (Google Sheets ou Excel en ligne) aide",
      "Temps : leçons de 4 à 6 minutes, à placer entre le travail et la famille",
      "Les règles, les frais et le plan de l'examen du PMI changent : les apprenants les confirment sur pmi.org, pas dans ce cours",
      "Le cours prépare ; il ne délivre pas le CAPM et ne compte pas automatiquement dans les heures de formation exigées par le PMI"
    ],
    prerequisites: "Aucun. Les apprenants qui débutent avec les tableurs peuvent d'abord suivre \"Excel et les tableurs\" ; \"Gestion de projet Agile\" est un bon cours à suivre ensuite."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir de la description d'un travail", action: "dire s'il s'agit d'un projet et nommer les phases de son cycle de vie et ses principales contraintes", standard: "correctement pour au moins 4 exemples sur 5" },
    { id: "O2", condition: "Pour un petit projet réel", action: "rédiger une charte de projet d'une page et une liste des parties prenantes avec l'intérêt et l'influence de chacune", standard: "avec l'objectif, le périmètre inclus et exclu, le sponsor, la date limite et une mesure de réussite chiffrée" },
    { id: "O3", condition: "À partir d'un objectif de projet et d'une liste de tâches avec leurs durées", action: "construire un WBS et un calendrier qui indique le chemin critique", standard: "avec chaque dépendance montrée et la durée du chemin critique calculée correctement" },
    { id: "O4", condition: "Pour le même projet", action: "noter les risques dans un registre des risques et traiter une demande de changement par la maîtrise des changements", standard: "avec un score, une réponse et un seul responsable pour chaque risque, et aucun changement fait sans approbation" },
    { id: "O5", condition: "À partir d'un court scénario de projet", action: "choisir une approche prédictive, Agile ou hybride et expliquer ce choix", standard: "en donnant au moins deux raisons tirées du scénario" },
    { id: "O6", condition: "À l'aide des pages officielles du PMI", action: "construire un plan daté d'étude et d'examen pour le CAPM", standard: "avec les conditions d'admission vérifiées, le plan de contenu de l'examen noté et une date d'examen visée" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Bien démarrer un projet",
      lessons: [
        {
          title: "Ce qui fait d'un travail un projet",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dire si un travail est un projet et nommer ses phases et ses contraintes.",
          text: [
            "Un projet est un travail temporaire pour créer quelque chose de nouveau : il a un début, une fin et un résultat unique. Ouvrir un food truck, déménager un bureau, organiser une campagne d'inscription des électeurs ou créer un site web sont des projets. Préparer le même menu chaque midi, ou répondre au téléphone à chaque service, ce sont des opérations courantes, pas un projet.",
            "La plupart des projets passent par des phases. Une façon simple de les voir : démarrer (se mettre d'accord sur le pourquoi et le quoi), planifier (comment, quand, qui, combien), faire le travail, surveiller et maîtriser, puis clôturer (remettre le résultat et noter les leçons apprises). Le PMI appelle \"gestion de projet\" les personnes et les pratiques qui guident tout cela.",
            "Chaque projet est limité par des contraintes. Les trois classiques sont le périmètre (ce que vous allez livrer), le délai (le temps) et le coût (l'argent). La qualité, les ressources et le risque comptent aussi. Si l'une change, les autres le ressentent : ajoutez du périmètre avec la même date limite, et il vous faut plus de personnes ou d'argent, sinon la qualité baisse."
          ],
          steps: ["Demandez-vous : ce travail a-t-il un début et une fin clairs ?", "Demandez-vous : crée-t-il quelque chose de nouveau ou de différent ?", "Si oui aux deux, c'est un projet. S'il se répète chaque jour, ce sont des opérations.", "Nommez la phase où il en est et sa contrainte la plus serrée."],
          words: [["Projet", "travail temporaire avec un début, une fin et un résultat unique."], ["Opérations", "travail courant et répété qui fait tourner une entreprise."], ["Contrainte", "une limite du projet, comme le temps, l'argent ou le périmètre."], ["Périmètre", "tout le travail et tous les résultats que le projet va livrer, et rien de plus."], ["Cycle de vie", "les phases que traverse un projet, du démarrage à la clôture."]],
          slides: [
            { title: "Projet ou opérations ?", bullets: ["Projet : temporaire, avec un début, une fin et un résultat unique", "Opérations : le même travail répété chaque jour"] },
            { title: "Cinq phases simples", bullets: ["Démarrer : pourquoi et quoi", "Planifier : comment, quand, qui, combien", "Faire, puis surveiller et maîtriser", "Clôturer : remettre le résultat et noter les leçons apprises"] },
            { title: "Les contraintes", bullets: ["Périmètre, délai et coût", "Aussi la qualité, les ressources et le risque", "Changez-en une et les autres le ressentent"] }
          ],
          sources: [{ name: "Project Management Institute : qu'est-ce que la gestion de projet ?", url: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }],
          tryIt: "Notez cinq travaux tirés de votre vie, de votre emploi ou de votre service militaire. Marquez chacun P (projet) ou O (opérations). Pour chaque projet, écrivez sa contrainte la plus serrée : périmètre, temps ou argent.",
          youCanNow: "distinguer un projet des opérations courantes, nommer ses phases et dire quelle contrainte est la plus serrée.",
          quickCheck: [
            { objective: "O1", q: "Lequel de ces travaux est un projet ?", options: ["Remplir les rayons chaque nuit", "Répondre aux appels des clients à chaque service", "Ouvrir un deuxième magasin d'ici juin", "Faire la paie toutes les deux semaines"], answer: 2, why: "Ouvrir un nouveau magasin est temporaire, a une date de fin et crée quelque chose de nouveau." },
            { objective: "O1", q: "Le sponsor ajoute trois nouvelles fonctions mais garde la même date limite et le même budget. Qu'est-ce qui risque le plus d'en souffrir ?", options: ["Rien ; le périmètre ne touche pas les autres contraintes", "La qualité, sauf si l'on ajoute du temps, des personnes ou de l'argent", "Seulement le nom du projet", "La liste des parties prenantes"], answer: 1, why: "Le périmètre, le délai et le coût sont liés ; plus de périmètre avec le même temps et le même argent met la qualité sous pression." }
          ]
        },
        {
          title: "La charte de projet et vos parties prenantes",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rédiger une charte d'une page et une liste des parties prenantes pour un petit projet.",
          text: [
            "La charte de projet est le document qui lance officiellement un projet. Elle nomme le sponsor (la personne qui approuve et finance le projet) et donne au chef de projet le pouvoir d'utiliser des personnes et de l'argent. Voyez-la comme un ordre de mission : pas de charte, pas de projet.",
            "Une bonne charte d'une page contient : la raison d'être (pourquoi), un objectif mesurable (\"ouvrir l'inscription en ligne de la banque alimentaire d'ici le 1er mars, avec 50 familles inscrites le premier mois\"), ce qui est dans le périmètre et ce qui n'y est pas, la date limite et les grands jalons, le budget, les principaux risques et le nom du sponsor.",
            "Les parties prenantes sont toutes les personnes qui agissent sur le projet ou qui sont touchées par lui : le sponsor, l'équipe, les clients, les voisins, les inspecteurs, les fournisseurs. Faites-en la liste, puis placez chacune sur une grille simple d'influence (forte ou faible) et d'intérêt (fort ou faible). Forte influence et fort intérêt : gérez-les de près. Forte influence, faible intérêt : gardez-les satisfaites. Faible influence, fort intérêt : tenez-les informées. Faible et faible : prenez des nouvelles de temps en temps."
          ],
          steps: ["Écrivez la raison d'être en une phrase.", "Écrivez l'objectif avec un chiffre et une date.", "Listez ce qui est dans le périmètre et ce qui n'y est pas.", "Ajoutez la date limite, les jalons, le budget et le sponsor.", "Listez les parties prenantes et placez chacune sur la grille influence et intérêt."],
          words: [["Charte de projet", "le document qui lance officiellement le projet et donne son pouvoir au chef de projet."], ["Sponsor", "la personne ou le groupe qui approuve, finance et soutient le projet."], ["Partie prenante", "toute personne qui agit sur le projet ou qui est touchée par lui."], ["Jalon", "un point important du calendrier, sans durée propre, comme \"permis accordé\"."]],
          slides: [
            { title: "La charte lance le projet", bullets: ["Elle nomme le sponsor", "Elle donne son pouvoir au chef de projet", "Pas de charte, pas de projet"] },
            { title: "Ce qui tient sur une page", bullets: ["Raison d'être et objectif mesurable", "Périmètre inclus et exclu", "Date limite, jalons, budget, principaux risques"] },
            { title: "La grille des parties prenantes", bullets: ["Forte influence, fort intérêt : gérer de près", "Forte influence, faible intérêt : garder satisfaites", "Faible influence, fort intérêt : tenir informées"] }
          ],
          tryIt: "Choisissez un petit projet réel, comme une réunion de famille, une collecte de fonds pour l'église, une vente de garage ou le rangement d'un local de stockage au travail. Rédigez une charte d'une page avec toutes les parties ci-dessus, puis listez au moins cinq parties prenantes et placez chacune sur la grille.",
          youCanNow: "rédiger une charte d'une page et décider comment travailler avec chaque partie prenante.",
          quickCheck: [
            { objective: "O2", q: "Quel objectif convient le mieux à une charte ?", options: ["\"Améliorer le site web\"", "\"Faire du bon travail sur les inscriptions\"", "\"Essayer de finir bientôt\"", "\"Ouvrir l'inscription en ligne d'ici le 1er mars avec 50 familles inscrites le premier mois\""], answer: 3, why: "Un bon objectif a un chiffre et une date, pour que chacun puisse savoir s'il a été atteint." },
            { objective: "O2", q: "L'inspecteur de la ville a une forte influence mais peu d'intérêt pour votre projet. Comment le traitez-vous ?", options: ["Le garder satisfait : répondre à ses besoins sans mises à jour lourdes", "L'ignorer jusqu'à la fin", "Lui envoyer chaque mise à jour quotidienne", "En faire le sponsor"], answer: 0, why: "Les parties prenantes à forte influence et faible intérêt sont gardées satisfaites pour qu'elles ne bloquent pas le projet." }
          ]
        },
        {
          title: "Découper le travail et trouver le chemin critique",
          objectives: ["O3"],
          minutes: 6,
          goal: "Construire un WBS et un calendrier, et indiquer le chemin critique.",
          text: [
            "Une structure de découpage du travail (WBS, de l'anglais work breakdown structure) divise tout le projet en livrables plus petits, niveau par niveau, jusqu'à ce que chaque morceau soit assez petit pour être estimé et confié à une seule personne. Le plus petit morceau est un lot de travail. Si ce n'est pas dans le WBS, ce n'est pas dans le projet.",
            "Ensuite, listez les tâches, le temps que prend chacune (durée) et celles qui doivent finir avant qu'une autre puisse commencer (dépendances). Dessinez-les sous forme de cases reliées par des flèches, de gauche à droite. Exemple : A, obtenir le permis (2 jours) ; B, construire le stand (3 jours, après A) ; C, commander les panneaux (1 jour, après A) ; D, s'installer à la foire (2 jours, après B et C).",
            "Additionnez chaque chemin du début à la fin. A-B-D prend 2 + 3 + 2 = 7 jours. A-C-D prend 2 + 1 + 2 = 5 jours. Le chemin le plus long est le chemin critique : il fixe la fin la plus rapide possible, 7 jours. Un retard sur A, B ou D retarde tout le projet. C a une marge de 7 - 5 = 2 jours : elle peut glisser de 2 jours sans déplacer la fin."
          ],
          steps: ["Écrivez les principaux livrables du projet comme premier niveau du WBS.", "Découpez chacun jusqu'à ce qu'un morceau soit assez petit pour qu'une personne l'estime.", "Listez les tâches avec leur durée et ce que chacune doit attendre.", "Dessinez des cases et des flèches, puis additionnez chaque chemin.", "Le chemin le plus long est le chemin critique ; les autres ont de la marge."],
          words: [["Structure de découpage du travail (WBS)", "un arbre qui divise les livrables du projet en morceaux plus petits."], ["Lot de travail", "le plus petit morceau du WBS, assez petit pour être estimé et confié."], ["Dépendance", "un lien qui veut dire qu'une tâche doit finir (ou commencer) avant qu'une autre puisse le faire."], ["Chemin critique", "la plus longue suite de tâches liées ; il fixe la date de fin la plus proche possible du projet."], ["Marge (flottement)", "le temps dont une tâche peut glisser sans retarder la fin du projet."], ["Diagramme de Gantt", "un graphique en barres qui montre chaque tâche sur un calendrier."]],
          slides: [
            { title: "La structure de découpage du travail", bullets: ["Le projet entier, puis les livrables, puis les lots de travail", "Chaque lot de travail : un responsable, facile à estimer", "Pas dans le WBS veut dire pas dans le projet"] },
            { title: "Durées et dépendances", bullets: ["Le temps que prend chaque tâche", "Ce qui doit finir avant qu'elle commence", "Dessinez des cases et des flèches, de gauche à droite"] },
            { title: "Trouver le chemin critique", bullets: ["Additionnez chaque chemin du début à la fin", "Exemple : A-B-D = 7 jours, A-C-D = 5 jours", "Chemin le plus long = chemin critique = 7 jours"] },
            { title: "La marge", bullets: ["La tâche C peut glisser de 2 jours sans déplacer la fin", "Les tâches du chemin critique n'ont aucune marge", "Surveillez de plus près les tâches critiques"] }
          ],
          tryIt: "Prenez le projet de votre charte. Dessinez sur papier un WBS d'au moins deux niveaux. Puis listez cinq à huit tâches avec leurs durées et leurs dépendances, dessinez-les en cases et en flèches, additionnez chaque chemin et entourez le chemin critique. Écrivez la marge d'une tâche qui n'est pas sur ce chemin.",
          youCanNow: "découper un projet en WBS, construire un calendrier simple et trouver le chemin critique et la marge.",
          quickCheck: [
            { objective: "O3", q: "Le chemin 1 prend 9 jours et le chemin 2 prend 6 jours. Quel est le chemin critique, et combien de temps dure le projet ?", options: ["Le chemin 2, 6 jours", "Les deux chemins, 15 jours", "Le chemin 1, 9 jours", "Le chemin 1, 3 jours"], answer: 2, why: "Le chemin le plus long est le chemin critique, et il fixe la fin la plus rapide : 9 jours." },
            { objective: "O3", q: "Une tâche a 2 jours de marge et glisse de 1 jour. Qu'arrive-t-il à la date de fin ?", options: ["Elle ne bouge pas", "Elle recule de 1 jour", "Elle recule de 2 jours", "Le projet est annulé"], answer: 0, why: "Une tâche peut glisser jusqu'à sa marge sans retarder la fin." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien démarrer un projet",
        questions: [
          { objective: "O1", q: "Qu'est-ce qui distingue un projet des opérations ?", options: ["Un projet coûte plus cher", "Un projet est temporaire et crée un résultat unique", "Les opérations n'utilisent jamais de calendrier", "Un projet n'a pas de budget"], answer: 1, why: "Les projets ont un début, une fin et un résultat unique ; les opérations se répètent." },
          { objective: "O2", q: "Quel document lance officiellement un projet et donne son pouvoir au chef de projet ?", options: ["Le registre des risques", "Le diagramme de Gantt", "Le rapport des leçons apprises", "La charte de projet"], answer: 3, why: "La charte autorise le projet et nomme le sponsor." },
          { objective: "O2", q: "Les voisins tiennent beaucoup au nettoyage de votre parc mais ne peuvent pas l'arrêter. Quelle est la meilleure approche ?", options: ["Les tenir informés", "Les gérer d'aussi près que le sponsor", "Les retirer de la liste", "Leur demander de le financer"], answer: 0, why: "Les parties prenantes à faible influence et fort intérêt sont tenues informées." },
          { objective: "O3", q: "Qu'est-ce qu'un lot de travail ?", options: ["Le carton dans lequel arrivent les fournitures du projet", "Le rapport final", "Le plus petit morceau du WBS, assez petit pour être estimé et confié", "Le budget du sponsor"], answer: 2, why: "Un lot de travail est le niveau le plus bas de la structure de découpage du travail." },
          { objective: "O3", q: "Tâches : A (3 jours), puis B (4 jours) et C (2 jours), toutes deux après A, puis D (1 jour) après B et C. Quelle est la durée du chemin critique ?", options: ["6 jours", "10 jours", "7 jours", "8 jours"], answer: 3, why: "A-B-D = 3 + 4 + 1 = 8 jours, plus long que A-C-D = 6 jours." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder le projet sur la bonne voie et préparer le CAPM",
      lessons: [
        {
          title: "Risques, problèmes et maîtrise des changements",
          objectives: ["O4"],
          minutes: 6,
          goal: "Noter les risques dans un registre des risques et faire passer une demande de changement par la maîtrise des changements.",
          text: [
            "Un risque est quelque chose qui POURRAIT arriver et qui toucherait le projet. Un problème est une difficulté qui arrive MAINTENANT. Notez les risques tôt dans un registre des risques : le risque, sa probabilité (à quel point il est probable, de 1 à 5), son impact (à quel point il serait grave, de 1 à 5), un score (probabilité multipliée par impact), une réponse et un seul responsable.",
            "Il existe quatre réponses principales à une menace. L'éviter (changer le plan pour qu'elle ne puisse pas arriver). La transférer (la confier à quelqu'un d'autre, par exemple avec une assurance ou un contrat). L'atténuer (la rendre moins probable ou moins grave). L'accepter (ne rien faire pour l'instant, mais la surveiller, et peut-être garder un peu de temps ou d'argent en réserve). Exemple : de la pluie pendant un événement en plein air, probabilité 3, impact 4, score 12 ; réponse : atténuer en louant une tente ; responsable : Maria.",
            "Les changements viendront. La dérive du périmètre, c'est quand du travail est ajouté sans approbation. Pour l'arrêter, utilisez la maîtrise des changements : rédigez une demande de changement, vérifiez son effet sur le périmètre, le temps, le coût, la qualité et le risque, faites approuver ou refuser la demande par la bonne personne (souvent le sponsor ou un comité des changements), puis mettez à jour le plan et le journal des changements. Pas d'approbation, pas de changement."
          ],
          steps: ["Listez ce qui pourrait mal tourner (et ce qui pourrait mieux se passer que prévu).", "Donnez un score à chaque risque : probabilité x impact.", "Choisissez une réponse : éviter, transférer, atténuer ou accepter.", "Donnez à chaque risque un seul responsable.", "Pour tout changement : écrivez-le, vérifiez l'impact, obtenez l'approbation, puis mettez à jour le plan."],
          words: [["Risque", "quelque chose d'incertain qui pourrait arriver et toucherait le projet."], ["Problème", "une difficulté qui est déjà en train d'arriver."], ["Registre des risques", "un tableau des risques avec leurs scores, leurs réponses et leurs responsables."], ["Atténuer", "rendre un risque moins probable ou moins grave."], ["Dérive du périmètre", "du travail ajouté au projet sans approbation."], ["Maîtrise des changements", "la démarche pour examiner, approuver ou refuser les changements avant de les faire."]],
          slides: [
            { title: "Risque ou problème ?", bullets: ["Risque : pourrait arriver", "Problème : arrive maintenant", "Notez les risques tôt"] },
            { title: "Le registre des risques", bullets: ["Probabilité x impact = score", "Une réponse et un responsable par risque", "Relisez-le à chaque réunion d'équipe"] },
            { title: "Quatre réponses à une menace", bullets: ["Éviter, transférer, atténuer, accepter", "Exemple : risque de pluie, score 12, atténuer avec une tente"] },
            { title: "La maîtrise des changements", bullets: ["Rédigez la demande", "Vérifiez l'effet sur le périmètre, le temps, le coût, la qualité, le risque", "Approuvez ou refusez, puis mettez à jour le plan"] }
          ],
          tryIt: "Faites un registre des risques pour votre projet, dans un tableur ou sur papier, avec ces colonnes : risque, probabilité, impact, score, réponse, responsable. Ajoutez au moins trois risques. Puis rédigez une demande de changement que quelqu'un pourrait faire, et notez son effet sur le temps et le coût et qui doit l'approuver.",
          youCanNow: "tenir un registre des risques et arrêter la dérive du périmètre grâce à la maîtrise des changements.",
          quickCheck: [
            { objective: "O4", q: "Un risque a une probabilité de 4 et un impact de 3. Quel est son score ?", options: ["7", "12", "1", "43"], answer: 1, why: "Score = probabilité x impact = 4 x 3 = 12." },
            { objective: "O4", q: "Un membre de l'équipe ajoute une nouvelle fonction parce qu'un client l'a demandée dans le couloir. Qu'est-ce qui n'a pas marché ?", options: ["Rien ; le client passe en premier", "Le registre des risques était trop long", "La charte était trop courte", "La dérive du périmètre : le changement n'est pas passé par la maîtrise des changements"], answer: 3, why: "Les changements doivent être écrits, vérifiés pour leur impact et approuvés avant le début du travail." }
          ]
        },
        {
          title: "Prédictive, Agile ou hybride : choisir l'approche",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir une approche prédictive, Agile ou hybride pour un projet et donner les raisons.",
          text: [
            "Une approche prédictive (parfois appelée en cascade ou fondée sur un plan) planifie dès le départ le périmètre, le calendrier et le coût, puis suit le plan ; les changements passent par la maîtrise des changements. Elle convient au travail dont les exigences sont claires et stables et où les changements coûtent cher, comme construire une rampe d'accès, déménager un entrepôt ou un chantier avec des permis.",
            "Une approche Agile livre par cycles courts (itérations ou sprints), recueille des retours à chaque fois et ajuste le plan. Elle convient au travail dont les besoins sont flous ou vont changer, comme une nouvelle application ou un nouveau service où il faut découvrir ce que veulent les clients. Scrum et Kanban sont des méthodes Agile courantes.",
            "Une approche hybride mélange les deux : par exemple, un plan prédictif pour l'achat du matériel et une date d'ouverture fixe, avec des sprints Agile pour le site web et le marketing. Quelle que soit l'approche, quelqu'un doit comprendre les exigences : ce dont le client a vraiment besoin. Trouver, écrire et vérifier les exigences s'appelle l'analyse métier, et cela fait partie de ce que couvre le CAPM."
          ],
          steps: ["Demandez-vous : les exigences sont-elles claires et stables ?", "Demandez-vous : combien coûte un changement tard dans le projet ?", "Demandez-vous : pouvons-nous livrer et recevoir des retours par petits morceaux ?", "Clair et coûteux à changer : prédictive. Flou et facile à livrer par morceaux : Agile. Un mélange : hybride."],
          words: [["Approche prédictive", "planifier le périmètre, le temps et le coût dès le départ, puis suivre le plan ; aussi appelée en cascade."], ["Approche Agile", "livrer par cycles courts, recueillir des retours et ajuster le plan."], ["Approche hybride", "un mélange de parties prédictives et Agile dans un même projet."], ["Exigence", "un besoin que le résultat doit satisfaire, comme \"les clients peuvent payer par téléphone\"."], ["Analyse métier", "trouver, écrire et vérifier ce dont le client a vraiment besoin."]],
          slides: [
            { title: "Prédictive (fondée sur un plan)", bullets: ["Planifier dès le départ le périmètre, le calendrier et le coût", "Idéale quand les exigences sont claires et stables", "Exemple : construire une rampe pour fauteuil roulant"] },
            { title: "Agile", bullets: ["Cycles courts avec des retours à chaque fois", "Idéale quand les besoins sont flous ou vont changer", "Exemple : une nouvelle application mobile pour les clients"] },
            { title: "Hybride et exigences", bullets: ["Mélanger les deux dans un même projet", "Toujours trouver ce dont le client a vraiment besoin", "Ce travail, c'est l'analyse métier"] }
          ],
          sources: [{ name: "Manifeste pour le développement Agile de logiciels", url: "https://agilemanifesto.org/" }, { name: "Le Guide Scrum", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Lisez ces trois cas : (1) goudronner le parking d'une église avec un permis et un budget fixes ; (2) une nouvelle application de livraison pour laquelle les clients demandent sans cesse des changements ; (3) ouvrir un restaurant à une date fixe avec un nouveau site de commande en ligne. Écrivez prédictive, Agile ou hybride pour chacun, avec deux raisons. Puis décidez quelle approche convient à votre propre projet et pourquoi.",
          youCanNow: "choisir une approche prédictive, Agile ou hybride et expliquer pourquoi elle convient.",
          quickCheck: [
            { objective: "O5", q: "Une équipe crée une nouvelle application et ne sait pas encore quelles fonctions les clients vont utiliser. Quelle approche convient le mieux ?", options: ["Prédictive, avec toutes les fonctions fixées dès maintenant", "Aucune approche", "Agile, en livrant de petits morceaux et en recueillant des retours", "Attendre que les clients envoient une liste complète"], answer: 2, why: "Des besoins flous conviennent à l'Agile : les cycles courts et les retours montrent ce que veulent les clients." },
            { objective: "O5", q: "Goudronner un parking avec un permis fixe, un budget fixe et un cahier des charges clair : quelle approche convient ?", options: ["Prédictive", "Agile", "Kanban seulement", "Aucune, car ce sont des opérations"], answer: 0, why: "Des exigences claires et stables et des changements tardifs coûteux conviennent à un plan prédictif." }
          ]
        },
        {
          title: "Le CAPM : vérifier les règles et planifier votre examen",
          objectives: ["O6"],
          minutes: 6,
          goal: "Construire un plan daté d'étude et d'examen pour le CAPM à partir des pages officielles du PMI.",
          text: [
            "Le Certified Associate in Project Management (CAPM) est une certification de niveau débutant délivrée uniquement par le Project Management Institute (PMI). Elle est faite pour les personnes qui débutent : elle ne demande donc pas des années d'expérience en projet comme le Project Management Professional (PMP) du PMI. Le PMI exige tout de même une formation en gestion de projet avant l'examen. Ce cours vous prépare ; il n'est pas la certification, et il peut compter ou non dans les heures de formation du PMI : vérifiez sur pmi.org.",
            "Avant de planifier, lisez la page officielle du CAPM sur le site du PMI, ainsi que le manuel du CAPM et le plan de contenu de l'examen (Exam Content Outline) vers lesquels elle renvoie. Notez : qui peut s'inscrire, combien d'heures de formation il faut et ce qui compte, les frais actuels (les membres du PMI et les non-membres peuvent payer des montants différents), comment et où passer l'examen, et comment garder la certification (elle doit être renouvelée). Les plans récents ont couvert les bases de la gestion de projet, les méthodes prédictives, les méthodes Agile et l'analyse métier, mais utilisez le plan que le PMI affiche aujourd'hui.",
            "Anciens militaires américains : le GI Bill (l'aide aux études des anciens combattants) peut rembourser les frais d'examen de licence et de certification. Consultez la page du VA (le ministère américain des Anciens combattants) sur les frais d'examen et son outil GI Bill Comparison Tool pour voir si un examen est approuvé. Hors des États-Unis, le PMI a des sections locales dans de nombreux pays ; cherchez-en une sur pmi.org pour trouver des groupes d'étude. Méfiez-vous de quiconque vend une \"réussite garantie\" ou les vraies questions de l'examen : c'est contraire aux règles du PMI et cela peut vous coûter la certification."
          ],
          steps: ["Ouvrez pmi.org et trouvez la page du CAPM, le manuel et le plan de contenu de l'examen.", "Notez les conditions d'admission, les heures de formation, les frais, le format de l'examen et les règles de renouvellement.", "Choisissez une date d'examen visée dans 8 à 12 semaines (ou ce qui convient à votre vie).", "Découpez votre étude en WBS par thème de l'examen, avec des jalons et des examens d'entraînement.", "Ajoutez un registre des risques : heures de travail, famille, stress de l'examen, coût."],
          words: [["CAPM", "Certified Associate in Project Management, une certification de niveau débutant du PMI."], ["PMI", "Project Management Institute, l'organisation qui délivre le CAPM et le PMP."], ["Plan de contenu de l'examen", "la liste officielle du PMI (Exam Content Outline) des thèmes couverts par un examen."], ["PMP", "Project Management Professional, la certification du PMI pour les chefs de projet expérimentés."], ["Conditions d'admission", "les exigences à remplir avant de pouvoir s'inscrire à l'examen."]],
          slides: [
            { title: "Ce qu'est le CAPM", bullets: ["Certification de niveau débutant, délivrée uniquement par le PMI", "Pas besoin d'années d'expérience en projet, contrairement au PMP", "Ce cours vous prépare ; il n'est pas la certification"] },
            { title: "À vérifier sur pmi.org", bullets: ["Conditions d'admission et heures de formation", "Frais actuels, membre et non-membre", "Format de l'examen, plan de contenu de l'examen, renouvellement"] },
            { title: "De l'aide pour les coûts", bullets: ["Anciens militaires : le GI Bill peut rembourser les frais d'examen", "Consultez va.gov et le GI Bill Comparison Tool", "À l'étranger : trouvez une section locale du PMI"] },
            { title: "Planifiez votre examen comme un projet", bullets: ["Charte : objectif et date d'examen visée", "WBS par thème de l'examen, avec des jalons", "Registre des risques ; n'achetez jamais de \"vraies questions d'examen\""] }
          ],
          sources: [{ name: "PMI : Certified Associate in Project Management (CAPM)", url: "https://www.pmi.org/certifications/certified-associate-capm" }, { name: "PMI : les certifications", url: "https://www.pmi.org/certifications" }, { name: "Ministère américain des Anciens combattants (VA) : remboursement des frais d'examen de licence ou de certification", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" }],
          tryIt: "Tâche finale : ouvrez la page du CAPM sur le site du PMI et notez les conditions d'admission, les heures de formation, les frais et les thèmes de l'examen. Puis planifiez votre préparation au CAPM comme un projet : une charte d'une page avec une date d'examen visée, un WBS de votre étude par thème, un calendrier daté avec des jalons et le chemin critique indiqué, et un registre des risques avec au moins trois risques. Ajoutez la liste des pages du PMI que vous avez consultées.",
          youCanNow: "vérifier les règles actuelles du CAPM sur le site du PMI et construire votre propre plan daté d'étude et d'examen.",
          quickCheck: [
            { objective: "O6", q: "Qui délivre le CAPM ?", options: ["Ce cours", "L'organisme de licence de votre État", "N'importe quel organisme de formation", "Le Project Management Institute (PMI)"], answer: 3, why: "Seul le PMI délivre le CAPM ; les cours ne font que vous préparer." },
            { objective: "O6", q: "Où vérifier les frais actuels du CAPM et les heures de formation ?", options: ["Une publication sur les réseaux sociaux", "La page officielle du CAPM et le manuel du PMI sur pmi.org", "Un vendeur d'examens d'entraînement", "La réponse d'un chatbot d'IA"], answer: 1, why: "Les frais et les exigences changent ; les pages du PMI sont la source officielle." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder le projet sur la bonne voie et préparer le CAPM",
        questions: [
          { objective: "O4", q: "Votre fournisseur pourrait être en retard. Vous prévoyez un deuxième fournisseur au cas où. De quelle réponse s'agit-il ?", options: ["Accepter", "Éviter", "Atténuer", "Ignorer"], answer: 2, why: "Un fournisseur de secours rend la menace moins grave : c'est de l'atténuation." },
          { objective: "O4", q: "Le sponsor demande une scène plus grande. Que doit-il se passer d'abord ?", options: ["La construire tout de suite", "Rédiger une demande de changement et vérifier son effet sur le temps et le coût", "Refuser tous les changements", "Supprimer une autre tâche sans le dire à personne"], answer: 1, why: "La maîtrise des changements vérifie l'impact et obtient l'approbation avant tout changement." },
          { objective: "O5", q: "Quelle situation convient à une approche hybride ?", options: ["Un nouveau restaurant avec une date d'ouverture fixe et un nouveau site de commande construit en sprints", "Goudronner une route selon un plan fixe", "Répondre au téléphone tous les jours", "Peindre une pièce"], answer: 0, why: "L'hybride mélange un plan prédictif pour les parties fixes et l'Agile pour les parties qui vont changer." },
          { objective: "O6", q: "En quoi le CAPM est-il différent du PMP ?", options: ["Le CAPM est délivré par votre État", "Il n'y a aucune différence", "Le PMP est pour les débutants", "Le CAPM est de niveau débutant et ne demande pas des années d'expérience en projet"], answer: 3, why: "Le CAPM est la certification de niveau débutant du PMI ; le PMP est pour les chefs de projet expérimentés." },
          { objective: "O6", q: "Quelqu'un en ligne vend \"les vraies questions de l'examen CAPM\". Que faites-vous ?", options: ["Les acheter pour réussir plus vite", "Les partager avec votre groupe d'étude", "Refuser : c'est contraire aux règles du PMI et cela peut vous coûter la certification", "Ne les utiliser qu'une fois"], answer: 2, why: "Utiliser des contenus d'examen divulgués est contraire aux règles du PMI ; étudiez à partir du plan et d'examens d'entraînement honnêtes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la gestion de projet (préparation au CAPM)",
    questions: [
      { objective: "O1", q: "Lequel relève des opérations courantes et non d'un projet ?", options: ["Créer un nouveau site web", "Traiter les commandes des clients chaque jour", "Déménager un bureau dans une autre ville", "Organiser un salon de l'emploi unique"], answer: 1, why: "Le traitement quotidien des commandes se répète ; les autres sont temporaires avec un résultat unique." },
      { objective: "O1", q: "Quelles sont les trois contraintes classiques du triangle des contraintes ?", options: ["Papier, stylos et imprimantes", "Sponsor, équipe et client", "Risque, problème et changement", "Périmètre, délai et coût"], answer: 3, why: "Le périmètre, le délai et le coût sont les trois classiques, et ils agissent les uns sur les autres." },
      { objective: "O1", q: "Dans quelle phase remettez-vous le résultat et notez-vous les leçons apprises ?", options: ["La clôture", "Le démarrage", "La planification", "La réalisation du travail"], answer: 0, why: "La clôture remet le résultat et garde les leçons pour la prochaine fois." },
      { objective: "O2", q: "Qui approuve et finance le projet ?", options: ["Le dernier arrivé dans l'équipe", "Toutes les parties prenantes à égalité", "Le sponsor", "Le fournisseur"], answer: 2, why: "Le sponsor approuve, finance et soutient le projet." },
      { objective: "O2", q: "Qu'est-ce qui a sa place dans une charte de projet ?", options: ["Un objectif chiffré et daté, plus le périmètre inclus et exclu", "La commande de déjeuner de chaque membre de l'équipe", "La liste détaillée des tâches de chaque jour", "La déclaration d'impôts de l'an dernier"], answer: 0, why: "La charte donne la raison d'être, un objectif mesurable, le périmètre, la date limite, le budget et le sponsor." },
      { objective: "O2", q: "Un conseiller municipal a une forte influence et un fort intérêt pour votre jardin communautaire. Comment le traitez-vous ?", options: ["Le tenir informé avec une note par an", "Prendre de ses nouvelles de temps en temps", "Le retirer de la liste", "Le gérer de près"], answer: 3, why: "Les parties prenantes à forte influence et fort intérêt sont gérées de près." },
      { objective: "O3", q: "À quoi sert une structure de découpage du travail ?", options: ["À lister les risques du projet", "À diviser les livrables en morceaux plus petits que l'on peut estimer et confier", "À approuver les changements", "À payer l'équipe"], answer: 1, why: "Le WBS découpe tout le projet en lots de travail." },
      { objective: "O3", q: "Qu'est-ce que le chemin critique ?", options: ["La plus courte suite de tâches", "Les tâches que le sponsor préfère", "La plus longue suite de tâches liées, qui fixe la date de fin la plus proche", "La liste des risques"], answer: 2, why: "Le chemin le plus long fixe la durée la plus courte possible du projet." },
      { objective: "O3", q: "Chemins : A-B-E = 10 jours, A-C-E = 7 jours, A-D-E = 9 jours. Quelle est la marge du chemin A-D-E ?", options: ["0 jour", "3 jours", "9 jours", "1 jour"], answer: 3, why: "Le chemin critique dure 10 jours, donc A-D-E peut glisser de 10 - 9 = 1 jour." },
      { objective: "O3", q: "Une tâche du chemin critique a 2 jours de retard. Que se passe-t-il ?", options: ["La fin du projet recule de 2 jours, sauf si vous rattrapez du temps", "Rien, car elle a de la marge", "Seul le budget change", "La tâche sort du WBS"], answer: 0, why: "Les tâches du chemin critique n'ont aucune marge, donc leur retard déplace la fin." },
      { objective: "O4", q: "Quelle est la différence entre un risque et un problème ?", options: ["Il n'y en a pas", "Un problème pourrait arriver ; un risque arrive maintenant", "Un risque pourrait arriver ; un problème arrive maintenant", "Les risques ne concernent que l'argent"], answer: 2, why: "Un risque est incertain et dans le futur ; un problème est une difficulté actuelle." },
      { objective: "O4", q: "Vous prenez une assurance événement au cas où la salle annulerait. De quelle réponse s'agit-il ?", options: ["Éviter", "Transférer", "Accepter", "Atténuer"], answer: 1, why: "L'assurance fait passer l'impact financier à quelqu'un d'autre : c'est un transfert." },
      { objective: "O4", q: "Qu'est-ce que la dérive du périmètre ?", options: ["Un outil de calendrier", "Une façon de noter les risques", "Un type de partie prenante", "Du travail ajouté au projet sans approbation"], answer: 3, why: "La dérive du périmètre est du travail ajouté sans approbation ; la maîtrise des changements l'arrête." },
      { objective: "O5", q: "Les exigences sont claires et stables, et les changements tardifs coûtent très cher. Quelle approche convient ?", options: ["Prédictive", "Agile", "Aucun plan", "Changer chaque semaine"], answer: 0, why: "Des besoins clairs et stables et des changements coûteux conviennent à une approche fondée sur un plan." },
      { objective: "O5", q: "Qu'est-ce que l'analyse métier ?", options: ["Compter l'argent à la fin", "Choisir le déjeuner de l'équipe", "Trouver, écrire et vérifier ce dont le client a vraiment besoin", "Signer la charte"], answer: 2, why: "L'analyse métier détermine les vraies exigences." },
      { objective: "O5", q: "Une association crée une nouvelle application pour ses bénévoles et s'attend à ce que les retours changent les fonctions. Quelle approche convient le mieux ?", options: ["Prédictive, avec toutes les fonctions fixées dès maintenant", "Agile, en livrant de petits morceaux avec des retours", "Aucune approche", "Tout construire et ne le montrer qu'à la fin"], answer: 1, why: "Des besoins qui changent conviennent aux cycles courts et aux retours de l'Agile." },
      { objective: "O6", q: "Qu'est-ce que ce cours vous apporte pour le CAPM ?", options: ["La certification CAPM elle-même", "Une réussite garantie", "Une adhésion au PMI", "Une préparation aux idées de base ; seul le PMI délivre le CAPM"], answer: 3, why: "Le cours vous prépare ; seul le PMI délivre la certification." },
      { objective: "O6", q: "Quel document officiel liste les thèmes couverts par l'examen CAPM ?", options: ["Le plan de contenu de l'examen (Exam Content Outline) du PMI", "Un message sur un forum", "Votre fiche de poste", "Une publicité sur les réseaux sociaux"], answer: 0, why: "Le PMI publie le plan de contenu de chaque examen." },
      { objective: "O6", q: "Un ancien militaire américain veut de l'aide pour payer les frais d'examen du CAPM. Où doit-il vérifier ?", options: ["Chez un vendeur d'examens d'entraînement", "À sa banque", "Sur la page du VA sur les frais d'examen de licence et de certification et dans le GI Bill Comparison Tool", "Sur un forum au hasard"], answer: 2, why: "Le GI Bill peut rembourser les frais d'examens de certification approuvés ; les pages du VA expliquent comment." },
      { objective: "O6", q: "Quelle est la meilleure façon de préparer l'examen CAPM ?", options: ["Étudier quand vous y pensez", "Le traiter comme un projet : charte, WBS par thème, calendrier daté et registre des risques", "Acheter les vraies questions de l'examen", "Passer l'examen sans vérifier les conditions d'admission"], answer: 1, why: "Un plan daté construit à partir du plan officiel du PMI est la voie la plus sûre." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et remettez votre travail.",
    criteria: [
      { name: "Charte", objective: "O2", notYet: "L'objectif est vague ou sans date, ou le périmètre inclus et exclu manque.", meets: "Une page avec la raison d'être, un objectif avec un chiffre et une date, le périmètre inclus et exclu, le sponsor et les jalons.", exceeds: "Liste aussi les parties prenantes avec leur influence et leur intérêt, et comment chacune sera tenue informée." },
      { name: "WBS et calendrier", objective: "O3", notYet: "Les tâches sont listées sans découpage, sans durées ou sans dépendances.", meets: "Un WBS d'au moins deux niveaux et un calendrier daté avec des jalons, des dépendances et le chemin critique indiqué.", exceeds: "Montre la marge des tâches non critiques, et la durée du chemin critique est calculée correctement." },
      { name: "Registre des risques", objective: "O4", notYet: "Moins de trois risques, ou des risques sans réponse ni responsable.", meets: "Au moins trois risques, chacun avec une probabilité, un impact, un score, une réponse et un seul responsable.", exceeds: "Utilise plus d'un type de réponse et inclut une note de maîtrise des changements qui dit comment le plan sera modifié." },
      { name: "Approche", objective: "O5", notYet: "Aucune approche choisie, ou aucune raison donnée.", meets: "Nomme une approche prédictive, Agile ou hybride pour le plan d'étude et donne deux raisons.", exceeds: "Montre comment l'approche est utilisée, par exemple des cycles d'étude d'une semaine avec un bilan." },
      { name: "Règles officielles du CAPM vérifiées", objective: "O6", notYet: "Les frais, les heures ou les thèmes de l'examen sont copiés d'une source non officielle ou absents.", meets: "Liste les conditions d'admission, les heures de formation, les frais et les thèmes de l'examen tirés des pages du PMI, avec le nom des pages.", exceeds: "Liste aussi l'aide possible pour les coûts (par exemple le GI Bill ou le soutien de l'employeur) et une section locale du PMI ou un groupe d'étude." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent au CAPM ou terminent la formation exigée par le PMI dans les 90 jours (enquête de suivi)",
      "Apprenants qui réussissent le CAPM ou sont embauchés ou promus à un poste de coordinateur de projet, d'assistant de projet ou de chef d'équipe",
      "Apprenants qui disent utiliser une charte, un calendrier ou un registre des risques au travail ou dans leur communauté dans les 30 jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier et stylo, ou un tableur gratuit (Google Sheets ou Excel en ligne)",
      "Un accès à internet pour lire la page du CAPM, le manuel et le plan de contenu de l'examen sur pmi.org",
      "Un petit projet réel à planifier (famille, travail, église, communauté ou unité militaire)",
      "Environ 75 à 90 minutes au total, en courtes séances, plus le temps de la tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; résolvez l'exemple du chemin critique au tableau avant que les apprenants fassent le leur.",
      "Laissez les apprenants utiliser un projet de leur propre vie ; les anciens militaires peuvent reporter un plan de mission sur la charte, le WBS et le registre des risques.",
      "Ouvrez pmi.org ensemble lors de la dernière séance pour que les apprenants voient les conditions d'admission, les frais et le plan de contenu de l'examen actuels ; ne citez pas de chiffres de mémoire.",
      "Dites clairement que le cours prépare les apprenants et ne délivre pas le CAPM ; dites-leur de vérifier auprès du PMI s'il compte dans les heures de formation exigées.",
      "Mettez en garde contre les vendeurs de vraies questions d'examen ou de réussite garantie, et notez la tâche finale avec la grille d'évaluation."
    ]
  }
};
