"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-business-strategy.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-ai-business-strategy-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Construire une stratégie d'IA et connecter ses outils",
  skills: "Repérer où passe votre temps, Choisir des projets d'IA selon la valeur et le risque, Mener un projet pilote de 30 jours, Mesurer les résultats, Connecter ses outils sans danger, Rédiger une charte d'utilisation de l'IA",
  outcome: "rédiger un plan d'IA d'une page pour votre entreprise : les deux tâches que vous améliorerez en premier et pourquoi, un projet pilote de 30 jours avec une mesure avant et après, la façon dont vos outils se connecteront et qui approuve quoi, et une courte charte d'utilisation de l'IA pour vous et votre équipe.",
  about: [
    "Ce cours s'adresse aux patrons de petites entreprises qui ont un peu essayé l'IA et qui veulent maintenant un plan plutôt que des essais au hasard : boutiques, restaurants, salons, entreprises de ménage et de réparation, et petits bureaux.",
    "Vous ferez la carte de l'usage de votre temps, choisirez les projets d'IA qui en valent la peine, en testerez un pendant 30 jours en le mesurant, apprendrez comment les outils se connectent entre eux (les intégrations), et écrirez des règles simples sur la façon dont votre entreprise utilise l'IA.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les tâches forment ensemble votre plan d'IA d'une page."
  ],
  finalTask: "Rédigez votre plan d'IA d'une page en cinq parties : (1) la carte de votre temps et les deux tâches choisies, avec une note de valeur et de risque pour chacune ; (2) un projet pilote de 30 jours pour la première tâche, avec une mesure avant et après ; (3) un schéma ou une liste simple de la façon dont vos outils se connectent et des étapes qui demandent votre approbation ; (4) une vérification des coûts ; (5) une charte d'utilisation de l'IA en cinq règles pour vous et votre équipe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises qui ont un peu essayé l'IA et veulent maintenant un plan au lieu d'essais au hasard : commerces, restaurants, salons, services de nettoyage et de réparation, et petits bureaux, certains avec quelques employés.",
    startingPoint: "Ils ont utilisé un assistant de discussion pour quelques tâches et utilisent plusieurs applications pour l'entreprise, comme un outil de réservation, un outil de paiement et un tableur. Ils n'ont aucun plan écrit sur les projets d'IA à mener, la façon de les mesurer, la façon dont les outils se connectent ou les règles à suivre.",
    gap: "Les essais d'IA au hasard font perdre du temps et de l'argent, et les automatisations sans approbation peuvent répéter des erreurs coûteuses ou laisser fuir des données. Les propriétaires doivent choisir les projets qui en valent la peine, en tester un et le mesurer, connecter leurs outils sans risque et fixer des règles claires sur l'IA pour eux-mêmes et leur équipe.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un ordinateur ou un smartphone avec les applications actuelles de l'entreprise",
      "Temps : des leçons d'environ 5 minutes, à caser dans une journée de travail chargée",
      "Les prix et les fonctions des outils changent ; les propriétaires consultent la page de tarifs de chaque outil",
      "Vie privée et sécurité : les décisions sur l'argent, le juridique, l'embauche et la sécurité restent aux personnes ; les données des clients sont protégées"
    ],
    prerequisites: "« Découvrir l'IA pour les petites entreprises » ou « Les outils d'IA essentiels pour les petites entreprises » d'abord."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "De mémoire, à partir d'une semaine normale", action: "faire une carte du temps des tâches qui vous prennent du temps", standard: "avec au moins dix tâches, les minutes pour chacune, classées par groupes, et les trois plus grosses entourées" },
    { id: "O2", condition: "À partir d'au moins cinq idées d'IA", action: "noter chacune selon sa valeur et son risque et choisir deux projets par lesquels commencer", standard: "avec un gain rapide et un projet plus important, chacun avec une raison en une phrase" },
    { id: "O3", condition: "À partir de votre projet de gain rapide", action: "préparer un projet pilote de 30 jours avec une mesure avant et après", standard: "avec un point de départ, un objectif clair et un relevé chaque semaine" },
    { id: "O4", condition: "À partir des outils que votre entreprise utilise", action: "dessiner comment vos outils se transmettent des informations", standard: "avec des cases et des flèches, et au moins une étape faite à la main qui pourrait être automatisée" },
    { id: "O5", condition: "À partir de votre carte des outils et de vos coûts", action: "marquer les étapes qui demandent votre approbation et calculer le vrai coût de l'automatisation", standard: "en mettant une étoile à chaque étape qui envoie de l'argent ou des messages à beaucoup de personnes, et en comparant le coût aux heures gagnées" },
    { id: "O6", condition: "À partir de la façon dont votre entreprise utilise l'IA", action: "écrire une charte d'utilisation de l'IA en cinq règles et un plan d'IA d'une page", standard: "avec les cinq parties du plan et des règles qu'un membre de l'équipe trouve claires" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir quoi améliorer",
      lessons: [
        {
          objectives: ["O1"],
          title: "Repérer où passe votre temps",
          minutes: 5,
          goal: "Faire une carte simple des tâches qui prennent votre temps chaque semaine.",
          text: [
            "Une stratégie commence par des faits sur votre propre entreprise. Pendant une semaine, notez les tâches qui prennent votre temps et environ combien de temps chacune prend : répondre aux messages, faire les plannings, commander les fournitures, publier sur les réseaux sociaux, tenir la comptabilité, faire des devis, ranger, former le personnel.",
            "Regroupez-les en catégories : clients, ventes et marketing, opérations (commandes, plannings), argent (factures, comptabilité), et personnel (embauche, formation).",
            "Vous verrez souvent que quelques tâches mangent la plus grande partie de votre temps. C'est là que l'IA pourrait aider, mais seulement si la tâche lui convient, ce qui est le sujet de la leçon suivante."
          ],
          steps: ["Pendant une semaine, notez chaque tâche et les minutes qu'elle prend.", "Regroupez les tâches en cinq catégories.", "Faites le total du temps de chaque catégorie.", "Entourez les trois tâches qui prennent le plus de temps."],
          words: [["Stratégie", "un plan de ce qu'il faut faire en premier et pourquoi."], ["Carte du temps", "une liste de vos tâches et du temps que prend chacune."], ["Opérations", "le travail quotidien pour faire tourner l'entreprise, comme les commandes et les plannings."]],
          slides: [
            { title: "Partez de vos propres faits", bullets: ["Notez chaque tâche pendant une semaine", "Écrivez environ combien de temps chacune prend"] },
            { title: "Cinq catégories", bullets: ["Clients ; ventes et marketing", "Opérations ; argent", "Personnel"] },
            { title: "Trouvez ce qui mange votre temps", bullets: ["Faites le total de chaque catégorie", "Entourez les trois plus grosses tâches"] }
          ],
          tryIt: "Commencez la carte de votre temps. De mémoire, listez au moins dix tâches de la semaine avec les minutes de chacune, classez-les dans les cinq catégories, et entourez les trois plus grosses.",
          youCanNow: "faire la carte de l'usage de votre temps et trouver les tâches qui en prennent le plus.",
          quickCheck: [
            { objective: "O1", q: "Que liste une carte du temps ?", options: ["Vos tâches et le temps que prend chacune", "L'adresse personnelle de vos employés", "Vos ventes du mois", "Seulement vos heures d'ouverture"], answer: 0, why: "Une carte du temps montre où passe votre temps chaque semaine." },
            { objective: "O1", q: "Votre carte du temps montre que trois tâches prennent la plus grande partie de votre semaine. Que faites-vous avec elles ?", options: ["Les ignorer", "Les entourer comme les endroits où l'IA pourrait le plus aider", "Les retirer de la liste", "Les faire plus vite sans rien changer"], answer: 1, why: "Les tâches qui prennent le plus de temps sont celles où l'IA pourrait le plus aider." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Choisir des projets d'IA selon la valeur et le risque",
          minutes: 5,
          goal: "Noter les projets d'IA possibles et choisir les deux par lesquels commencer.",
          text: [
            "Toutes les tâches qui prennent du temps ne sont pas de bons projets d'IA. Donnez à chacune une note de 1 à 5 pour la valeur (temps ou argent gagné, meilleur service) et de 1 à 5 pour le risque (ce qui se passe si l'IA se trompe : clients en colère, argent perdu, problèmes juridiques).",
            "Commencez par une grande valeur et un faible risque. Rédiger des publications pour les réseaux sociaux et répondre aux questions fréquentes sont souvent de bons débuts. Classer les dépenses en comptabilité ou faire des devis peut avoir une grande valeur mais demande des vérifications soigneuses. Les décisions d'embauche, les documents juridiques et tout ce qui touche à la santé ou à la sécurité sont à haut risque : laissez une personne et un professionnel aux commandes.",
            "Choisissez deux projets. Un gain rapide pour prendre confiance, et un projet plus important que vous planifierez avec soin."
          ],
          steps: ["Listez vos trois plus grosses tâches et vos autres idées.", "Notez la valeur de 1 à 5 et le risque de 1 à 5.", "Choisissez un gain rapide (grande valeur, faible risque).", "Choisissez un projet plus important que vous planifierez avec soin."],
          words: [["Valeur", "ce qu'un projet fait gagner ou économiser, ou à quel point il améliore le service."], ["Risque", "le mal qu'une erreur pourrait causer."], ["Gain rapide", "un petit projet qui marche vite et donne confiance."]],
          slides: [
            { title: "Notez chaque idée", bullets: ["Valeur de 1 à 5 : temps, argent, meilleur service", "Risque de 1 à 5 : dégâts si l'IA se trompe"] },
            { title: "Par où commencer", bullets: ["D'abord grande valeur et faible risque", "Publications et questions fréquentes : bons débuts", "Embauche, juridique, santé et sécurité : des personnes aux commandes"] },
            { title: "Choisissez-en deux", bullets: ["Un gain rapide", "Un projet plus important, bien planifié"] }
          ],
          tryIt: "Notez au moins cinq idées d'IA selon la valeur et le risque dans un petit tableau. Choisissez votre gain rapide et votre projet plus important, et écrivez une phrase pour expliquer chaque choix.",
          youCanNow: "choisir des projets d'IA pour votre entreprise en comparant la valeur et le risque.",
          quickCheck: [
            { objective: "O2", q: "Dans la notation valeur et risque, que veut dire le risque ?", options: ["Le prix de l'outil", "Le temps de mise en place", "Le tort causé si l'IA se trompe", "Le nombre d'employés qui l'utilisent"], answer: 2, why: "Le risque est le tort qui pourrait arriver si l'IA fait une erreur." },
            { objective: "O2", q: "Une idée a une forte valeur et un faible risque, une autre a une forte valeur et un fort risque. Par laquelle commencez-vous ?", options: ["Celle qui a un fort risque", "Aucune des deux", "Les deux en même temps", "Celle qui a une forte valeur et un faible risque"], answer: 3, why: "Une forte valeur et un faible risque font le meilleur premier projet." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mener un projet pilote de 30 jours et le mesurer",
          minutes: 5,
          goal: "Préparer un petit test de 30 jours avec une mesure claire avant et après.",
          text: [
            "Un projet pilote est un petit test limité dans le temps. Au lieu de tout changer, vous essayez l'IA sur une tâche pendant 30 jours et vous mesurez si elle a aidé.",
            "Mesurez d'abord l'\"avant\" : combien de temps prend la tâche aujourd'hui, combien d'erreurs, comment réagissent les clients. Puis fixez l'objectif \"après\" : \"Répondre aux messages fréquents passe de 60 à 25 minutes par jour, sans hausse des plaintes.\"",
            "Pendant le pilote, tenez un court journal : ce qui a marché, ce qui a mal tourné, ce que vous avez corrigé. À la fin, décidez : garder, modifier ou arrêter. Arrêter n'est pas grave ; vous avez appris quelque chose pour pas cher."
          ],
          steps: ["Choisissez la tâche et écrivez les chiffres d'avant.", "Écrivez l'objectif d'après.", "Faites le test pendant 30 jours et tenez un court journal.", "Au jour 30 : garder, modifier ou arrêter."],
          words: [["Projet pilote", "un petit test limité dans le temps d'une nouvelle façon de travailler."], ["Point de départ", "les chiffres \"avant\" auxquels vous comparez."], ["Objectif", "le résultat que vous espérez atteindre."]],
          slides: [
            { title: "Un pilote est un petit test", bullets: ["Une tâche, 30 jours", "Mesurez si cela a aidé"] },
            { title: "Avant et après", bullets: ["Avant : temps, erreurs, réaction des clients", "Exemple d'objectif : de 60 à 25 minutes par jour", "Sans hausse des plaintes"] },
            { title: "Au jour 30", bullets: ["Relisez votre journal", "Garder, modifier ou arrêter", "Arrêter, c'est une leçon pas chère"] }
          ],
          tryIt: "Écrivez un plan de pilote pour votre gain rapide : la tâche, les chiffres d'avant (estimez si besoin), l'objectif d'après, et ce que vous noterez dans votre journal chaque semaine.",
          youCanNow: "préparer et mesurer un projet pilote d'IA de 30 jours pour une tâche de l'entreprise.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que le point de départ dans un projet pilote ?", options: ["Les chiffres « avant » auxquels vous comparez", "Le résultat final", "Le prix de l'outil", "Le planning de l'équipe"], answer: 0, why: "Le point de départ est l'endroit d'où vous partez, pour pouvoir mesurer le changement." },
            { objective: "O3", q: "Au jour 30, votre projet pilote ne vous a fait gagner aucun temps. Que faites-vous ?", options: ["Le garder pour toujours", "L'arrêter ou le changer : vous avez appris à petit prix", "Acheter une version plus chère", "Cacher les résultats"], answer: 1, why: "Un projet pilote est un petit test, donc un échec coûte peu et apprend beaucoup." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir quoi améliorer",
        questions: [
          { objective: "O1", q: "Quelle est la première étape d'une stratégie d'IA dans ce cours ?", options: ["Acheter beaucoup d'outils", "Repérer où passe votre temps", "Licencier du personnel", "Copier un concurrent"], answer: 1, why: "Une stratégie commence par des faits sur votre entreprise." },
          { objective: "O2", q: "Quel projet est le meilleur premier choix ?", options: ["Le plus récent", "Faible valeur, risque élevé", "Risque élevé, n'importe quelle valeur", "Grande valeur, faible risque"], answer: 3, why: "Commencez là où l'IA aide le plus et peut faire peu de dégâts." },
          { objective: "O2", q: "Quelle tâche doit rester sous la responsabilité d'une personne et d'un professionnel ?", options: ["Les décisions d'embauche", "Rédiger des publications", "Répondre à \"Quels sont vos horaires ?\"", "Trouver des noms de plats"], answer: 0, why: "L'embauche est à haut risque." },
          { objective: "O3", q: "Qu'est-ce qu'un projet pilote ?", options: ["Un métier de l'aviation", "Un changement définitif", "Un petit test limité dans le temps", "Une licence de logiciel"], answer: 2, why: "Un pilote teste une tâche pendant un temps fixé." },
          { objective: "O3", q: "Au jour 30, le pilote n'a pas aidé. Quelle est la bonne décision ?", options: ["Cacher les résultats", "L'étendre à tout", "L'arrêter ou le modifier ; vous avez appris pour pas cher", "Ne plus jamais mesurer"], answer: 2, why: "Arrêter un test qui n'a pas marché est une bonne décision." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Connecter les outils et fixer des règles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comment les outils se connectent : les intégrations en mots simples",
          minutes: 5,
          goal: "Dessiner comment les outils de votre entreprise se transmettent des informations.",
          text: [
            "Une intégration est une connexion qui permet à un outil d'envoyer automatiquement des informations à un autre. Par exemple : un formulaire de réservation ajoute le rendez-vous à votre calendrier ; une commande payée ajoute une ligne à votre tableau de ventes ; un nouvel avis vous envoie un SMS.",
            "Beaucoup d'outils ont des connexions intégrées listées dans leurs réglages, souvent appelées applications, intégrations ou comptes connectés. Des services de connexion comme Zapier, Make ou Microsoft Power Automate relient des outils qui ne se connectent pas tout seuls. Consultez le site officiel de chaque outil pour savoir à quoi il se connecte et ce que cela coûte.",
            "Dessinez vos outils comme des boîtes et les informations comme des flèches : \"application de réservation -> calendrier\", \"caisse -> tableau de ventes\". Puis indiquez quelles flèches fonctionnent déjà, lesquelles vous faites à la main, et lesquelles vous pourriez automatiser."
          ],
          steps: ["Listez les outils que vous utilisez : caisse, réservation, e-mail, calendrier, tableurs, réseaux sociaux.", "Dessinez chacun comme une boîte.", "Dessinez des flèches pour les informations qui passent de l'un à l'autre.", "Marquez chaque flèche : automatique, à la main, ou à automatiser."],
          words: [["Intégration", "une connexion qui permet à un outil d'envoyer automatiquement des informations à un autre."], ["Service de connexion", "un outil comme Zapier, Make ou Power Automate qui relie d'autres outils."], ["Automatiser", "faire qu'une tâche se fasse toute seule, sans qu'une personne fasse chaque étape."]],
          slides: [
            { title: "Une intégration est une connexion", bullets: ["Formulaire de réservation -> calendrier", "Commande payée -> tableau de ventes", "Nouvel avis -> alerte par SMS"] },
            { title: "Façons de connecter", bullets: ["Connexions intégrées dans les réglages d'un outil", "Services de connexion : Zapier, Make, Power Automate", "Vérifiez les coûts sur chaque site officiel"] },
            { title: "Dessinez votre carte", bullets: ["Les outils sont des boîtes ; les informations, des flèches", "Marquez : automatique, à la main, à automatiser"] }
          ],
          tryIt: "Dessinez sur papier la carte de vos outils avec des boîtes et des flèches. Marquez au moins une flèche que vous faites à la main aujourd'hui et qui pourrait être automatisée.",
          youCanNow: "faire la carte des connexions entre les outils de votre entreprise et repérer les tâches à automatiser.",
          quickCheck: [
            { objective: "O4", q: "Que montrent les flèches sur votre carte des outils ?", options: ["Qui commande", "Quel outil coûte le plus", "Les informations qui passent d'un outil à l'autre", "L'ordre dans lequel vous avez acheté les outils"], answer: 2, why: "Les flèches montrent comment les informations passent d'un outil à un autre." },
            { objective: "O4", q: "Vous recopiez à la main chaque commande payée dans votre tableau des ventes. Que faites-vous ?", options: ["Arrêter de noter les ventes", "Embaucher quelqu'un qui tape plus vite", "Supprimer le tableau des ventes", "La marquer sur votre carte comme une étape qui pourrait être automatisée"], answer: 3, why: "Les étapes faites à la main pour déplacer des informations sont de bonnes candidates pour une intégration." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Garder le contrôle : approbations, coûts et données",
          minutes: 5,
          goal: "Décider quelles étapes automatiques demandent votre approbation et vérifier le vrai coût.",
          text: [
            "L'automatisation fait gagner du temps, mais elle peut aussi répéter une erreur cent fois. Gardez une personne qui approuve tout ce qui envoie de l'argent, envoie des messages à beaucoup de clients, change des prix, supprime des données ou fait des promesses.",
            "Comptez le coût complet : abonnements, frais à l'utilisation, temps de mise en place et temps de vérification du travail. Comparez-le au temps gagné pendant votre pilote. Si les chiffres ne tiennent pas, restez manuel pour l'instant.",
            "Sachez où vont vos données. Avant de connecter un outil, lisez quelles données il peut voir et réduisez-les au minimum. Utilisez des mots de passe solides et la connexion en deux étapes sur les comptes de l'entreprise, et retirez les accès des employés qui partent."
          ],
          steps: ["Marquez chaque étape automatique qui envoie de l'argent, écrit à beaucoup de gens, change des prix ou supprime des données.", "Exigez votre approbation pour ces étapes.", "Additionnez le coût mensuel complet.", "Vérifiez quelles données chaque connexion peut voir.", "Activez la connexion en deux étapes."],
          words: [["Étape d'approbation", "un moment où une personne doit dire oui pour que le processus continue."], ["Connexion en deux étapes", "une deuxième vérification, comme un code sur votre téléphone, quand vous vous connectez."], ["Abonnement", "un paiement régulier pour continuer à utiliser un outil."]],
          slides: [
            { title: "Une personne approuve", bullets: ["Tout ce qui envoie de l'argent", "Les messages à beaucoup de clients", "Changements de prix, suppressions, promesses"] },
            { title: "Comptez le coût complet", bullets: ["Abonnements et frais à l'utilisation", "Temps de mise en place et de vérification", "Comparez avec le temps gagné"] },
            { title: "Protégez vos données", bullets: ["Le minimum de données pour chaque outil", "Mots de passe solides et connexion en deux étapes", "Retirez les accès des employés qui partent"] }
          ],
          tryIt: "Sur la carte de vos outils, mettez une étoile sur chaque étape qui demande votre approbation. Puis écrivez une vérification des coûts : coûts mensuels des outils comparés aux heures gagnées multipliées par la valeur de votre heure.",
          youCanNow: "garder le contrôle des automatisations avec des étapes d'approbation, des vérifications de coûts et des limites sur les données.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi garder une approbation sur les automatisations qui envoient de l'argent ou des messages en masse ?", options: ["Une automatisation peut répéter une erreur de nombreuses fois", "Les approbations rendent les outils moins chers", "La loi l'exige toujours", "Cela rend l'automatisation plus rapide"], answer: 0, why: "Une seule erreur dans une automatisation peut se répéter de nombreuses fois avant que vous la remarquiez." },
            { objective: "O5", q: "Un employé quitte votre entreprise. Que faites-vous ?", options: ["Laisser ses accès au cas où il reviendrait", "Donner son mot de passe à la nouvelle recrue", "Retirer ses accès aux outils de l'entreprise", "Ne rien changer"], answer: 2, why: "Retirer les accès protège les données de votre entreprise." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rédiger votre charte d'utilisation de l'IA et votre plan d'une page",
          minutes: 5,
          goal: "Écrire cinq règles simples sur l'IA pour votre entreprise et terminer votre plan d'IA d'une page.",
          text: [
            "Une charte d'utilisation de l'IA est une courte liste de règles sur la façon dont vous et votre équipe utilisez l'IA. Elle protège les clients et assure que tout le monde fait pareil. Cinq règles suffisent pour commencer.",
            "Exemples de règles : (1) Aucun nom de client avec ses coordonnées, aucun numéro de carte, mot de passe ou dossier d'employé n'entre dans les outils d'IA. (2) Une personne vérifie chaque fait avant que les clients le voient. (3) Nous n'écrivons jamais de faux avis ni de fausses affirmations. (4) Seuls les outils approuvés sont utilisés pour l'entreprise. (5) Les décisions sur l'argent, le juridique, l'embauche et la sécurité sont prises par des personnes.",
            "Demandez à l'IA de rendre vos règles claires et courtes, puis mettez-les sur une page avec la carte de votre temps, les projets choisis, le plan du pilote, la carte des outils et la vérification des coûts. Revoyez le plan tous les trois mois."
          ],
          steps: ["Écrivez cinq règles en mots simples.", "Demandez à l'IA de les rendre claires et courtes.", "Partagez-les avec l'équipe et recueillez ses questions.", "Mettez tout sur une page et fixez une date de révision."],
          words: [["Charte d'utilisation de l'IA", "les règles écrites sur la façon dont une entreprise utilise l'IA."], ["Outil approuvé", "un outil que le patron a vérifié et autorisé pour l'entreprise."]],
          slides: [
            { title: "Pourquoi une charte", bullets: ["Elle protège les clients", "Toute l'équipe fait pareil", "Cinq règles suffisent pour commencer"] },
            { title: "Exemples de règles", bullets: ["Aucune donnée privée de client ou d'employé dans l'IA", "Une personne vérifie les faits ; pas de faux avis", "Outils approuvés seulement ; les personnes prennent les grandes décisions"] },
            { title: "Votre plan d'une page", bullets: ["Carte du temps et deux projets", "Pilote, carte des outils et vérification des coûts", "Cinq règles ; révision tous les trois mois"] }
          ],
          tryIt: "Tâche finale : écrivez vos cinq règles sur l'IA et votre plan d'IA d'une page avec les cinq parties. Partagez les règles avec un employé ou une personne de confiance et demandez si quelque chose n'est pas clair.",
          youCanNow: "diriger l'usage de l'IA dans votre entreprise avec un plan écrit et des règles claires.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une charte d'utilisation de l'IA ?", options: ["Un abonnement payant à l'IA", "Des règles écrites sur la façon dont votre entreprise utilise l'IA", "L'avis d'un client", "Les conditions d'utilisation d'un outil"], answer: 1, why: "Une charte d'utilisation de l'IA fixe des règles claires pour vous et votre équipe." },
            { objective: "O6", q: "Vous avez écrit vos cinq règles sur l'IA. Que faites-vous ensuite ?", options: ["Les garder secrètes", "Les publier en ligne sans les relire", "Demander à l'IA de les approuver", "Les montrer à un membre de l'équipe et lui demander si quelque chose n'est pas clair"], answer: 3, why: "Des règles ne marchent que si les personnes qui les suivent les comprennent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Connecter les outils et fixer des règles",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'une intégration ?", options: ["Une connexion qui permet à un outil d'envoyer des informations à un autre", "Un nouvel employé", "Un formulaire fiscal", "Un type de prêt"], answer: 0, why: "Les intégrations font passer les informations entre les outils." },
          { objective: "O4", q: "Lequel est un service de connexion ?", options: ["Une agrafeuse", "Un tiroir-caisse", "Un fax", "Zapier"], answer: 3, why: "Zapier relie des outils qui ne se connectent pas tout seuls." },
          { objective: "O5", q: "Quelle étape automatique a le plus besoin de votre approbation ?", options: ["Enregistrer un nom de fichier", "Envoyer un e-mail de réduction à vos 800 clients", "Ajouter une couleur au calendrier", "Trier une liste"], answer: 1, why: "Les messages à beaucoup de clients demandent le oui d'une personne." },
          { objective: "O5", q: "Une automatisation coûte chaque mois plus que le temps qu'elle fait gagner. Que faites-vous ?", options: ["Rester manuel pour l'instant", "Continuer à payer", "Ajouter plus d'outils", "Ignorer le coût"], answer: 0, why: "Les chiffres doivent tenir." },
          { objective: "O6", q: "Laquelle est une bonne règle d'utilisation de l'IA ?", options: ["Coller les numéros de carte des clients pour gagner du temps", "Utiliser n'importe quel outil trouvé", "Une personne vérifie chaque fait avant que les clients le voient", "L'IA prend les décisions d'embauche"], answer: 2, why: "Vérifier les faits protège les clients." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Construire une stratégie d'IA et connecter ses outils",
    questions: [
      { objective: "O1", q: "Une carte du temps liste :", options: ["Vos mots de passe", "Vos tâches et le temps que prend chacune", "Les adresses de vos clients", "Vos concurrents"], answer: 1, why: "Elle montre où passe votre temps." },
      { objective: "O1", q: "Laquelle fait partie des cinq catégories ?", options: ["Les films", "La météo", "Le sport", "Les opérations"], answer: 3, why: "Clients, ventes et marketing, opérations, argent, personnel." },
      { objective: "O1", q: "Pourquoi entourer les trois tâches qui prennent le plus de temps ?", options: ["Pour décorer", "Pour les supprimer", "Pour les partager en ligne", "C'est là que l'IA pourrait aider le plus"], answer: 3, why: "Les grosses tâches offrent le plus de temps à gagner." },
      { objective: "O2", q: "Dans la notation valeur-risque, le risque veut dire :", options: ["À quel point c'est amusant", "Les dégâts si l'IA se trompe", "À quel point l'outil est récent", "Combien d'applications vous avez"], answer: 1, why: "Le risque mesure le mal possible." },
      { objective: "O2", q: "Un gain rapide est :", options: ["Un ticket de loto", "Le projet le plus gros et le plus risqué", "Un petit projet qui marche vite", "Un procès"], answer: 2, why: "Les gains rapides donnent confiance." },
      { objective: "O2", q: "Quel projet est à haut risque ?", options: ["Rédiger un contrat juridique", "Rédiger une légende Instagram", "Trouver le nom d'un plat du jour", "Mettre en forme une liste de contrôle"], answer: 0, why: "Les documents juridiques demandent un professionnel." },
      { objective: "O3", q: "Les chiffres \"avant\" d'un pilote s'appellent :", options: ["Le budget", "L'objectif", "Le point de départ", "Le mot de passe"], answer: 2, why: "Le point de départ est ce à quoi on compare." },
      { objective: "O3", q: "Un bon objectif de pilote est :", options: ["\"Les messages passent de 60 à 25 minutes par jour sans hausse des plaintes\"", "\"Faire mieux\"", "\"Utiliser plus l'IA\"", "\"Essayer des trucs\""], answer: 0, why: "Il est précis et mesurable." },
      { objective: "O3", q: "Pendant le pilote, vous tenez :", options: ["Aucune note", "Un court journal de ce qui a marché et de ce qui a mal tourné", "Les numéros de carte des clients", "Seulement les bonnes nouvelles"], answer: 1, why: "Le journal guide votre décision au jour 30." },
      { objective: "O4", q: "\"Commande payée -> tableau de ventes\" est un exemple de :", options: ["Impôt", "Charte", "Avis", "Intégration"], answer: 3, why: "Les informations passent automatiquement d'un outil à l'autre." },
      { objective: "O4", q: "Où trouve-t-on en général les connexions intégrées ?", options: ["Dans les réglages d'un outil", "Sur un ticket de caisse", "Dans le courrier", "Nulle part"], answer: 0, why: "Les réglages listent souvent les applications ou intégrations." },
      { objective: "O4", q: "Sur la carte de vos outils, les flèches montrent :", options: ["Les noms des employés", "L'humeur des clients", "Les prix", "Les informations qui passent entre les outils"], answer: 3, why: "Les boîtes sont des outils ; les flèches, des informations." },
      { objective: "O5", q: "Pourquoi garder une approbation sur les automatisations qui envoient de l'argent ?", options: ["Pour embêter l'équipe", "C'est plus lent", "L'automatisation peut répéter une erreur de nombreuses fois", "Ce n'est pas nécessaire"], answer: 2, why: "Une personne arrête les erreurs coûteuses répétées." },
      { objective: "O5", q: "Le coût complet d'un outil comprend :", options: ["Seulement le prix affiché dans la publicité", "L'abonnement, les frais à l'utilisation, la mise en place et le temps de vérification", "Rien", "Seulement l'électricité"], answer: 1, why: "Tous les coûts comptent face au temps gagné." },
      { objective: "O5", q: "Quand un employé part, vous devez :", options: ["Ne rien faire", "Laisser son accès ouvert", "Partager son mot de passe", "Retirer son accès aux outils de l'entreprise"], answer: 3, why: "Retirer l'accès protège vos données." },
      { objective: "O5", q: "Qu'apporte la connexion en deux étapes ?", options: ["Une mise à niveau gratuite", "Un deuxième mot de passe sur papier", "Une deuxième vérification, comme un code sur le téléphone", "Rien"], answer: 2, why: "Elle rend les comptes plus difficiles à pirater." },
      { objective: "O6", q: "Une charte d'utilisation de l'IA est :", options: ["Les règles écrites sur la façon dont votre entreprise utilise l'IA", "Un contrat d'assurance", "Un bail", "Un outil"], answer: 0, why: "Elle protège tout le monde et assure la cohérence." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans votre charte d'IA ?", options: ["L'IA décide qui embaucher", "Les personnes prennent les décisions sur l'argent, le juridique, l'embauche et la sécurité", "N'importe quel outil convient", "Les faux avis sont acceptables"], answer: 1, why: "Les grandes décisions restent aux personnes." },
      { objective: "O6", q: "À quelle fréquence revoir votre plan d'IA ?", options: ["Jamais", "Environ tous les trois mois", "Toutes les heures", "Seulement après une catastrophe"], answer: 1, why: "Des révisions régulières le gardent à jour." },
      { objective: "O6", q: "Votre plan d'IA d'une page contient :", options: ["Carte du temps, projets, pilote, carte des outils, vérification des coûts et règles", "Seulement une liste d'applications", "Les mots de passe des clients", "Les prix d'un concurrent"], answer: 0, why: "Ces parties font un plan complet." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Carte du temps et deux projets",
        objective: "O2",
        notYet: "Pas de carte du temps, ou des projets choisis sans note de valeur et de risque.",
        meets: "Une carte du temps et deux tâches choisies, chacune avec une note de valeur et de risque.",
        exceeds: "Chaque choix a une raison claire en une phrase, liée à la carte du temps."
      },
      {
        name: "Projet pilote de 30 jours",
        objective: "O3",
        notYet: "Pas de mesure, ou pas de chiffres « avant ».",
        meets: "Un projet pilote pour la première tâche, avec un point de départ et un objectif « après ».",
        exceeds: "Il prévoit aussi un relevé chaque semaine et une règle pour arrêter ou changer au jour 30."
      },
      {
        name: "Connexions des outils et approbations",
        objective: "O4",
        notYet: "Pas de carte des outils, ou aucune approbation marquée.",
        meets: "Un schéma ou une liste qui montre comment les outils se connectent, avec les étapes d'approbation marquées.",
        exceeds: "Chaque étape qui envoie de l'argent ou des messages en masse a une étoile."
      },
      {
        name: "Vérification du coût",
        objective: "O5",
        notYet: "Pas de vérification du coût.",
        meets: "Le coût mensuel des outils comparé aux heures gagnées multipliées par la valeur de votre heure.",
        exceeds: "Elle compte aussi les frais à l'usage, la mise en place et le temps de vérification."
      },
      {
        name: "Charte d'utilisation de l'IA",
        objective: "O6",
        notYet: "Moins de cinq règles, ou des règles qui confient à l'IA des décisions sur l'argent, le juridique, l'embauche ou la sécurité.",
        meets: "Cinq règles claires pour vous et votre équipe.",
        exceeds: "Montrée à un membre de l'équipe ou à une personne de confiance, et rendue plus claire grâce à ses remarques."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les propriétaires qui mènent leur projet pilote de 30 jours et donnent le résultat avant et après (enquête de suivi)",
      "Les propriétaires qui disent gagner des heures chaque semaine après le projet pilote",
      "Les propriétaires qui partagent une charte d'utilisation de l'IA écrite avec leur équipe dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur ou un smartphone avec internet et les applications actuelles de l'entreprise",
      "Un assistant d'IA gratuit et un tableur gratuit pour noter et suivre",
      "Du papier et un stylo pour la carte du temps et la carte des outils",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez aux propriétaires d'estimer les tâches d'une semaine normale avant la séance, pour que la carte du temps aille vite.",
      "Dessinez au tableau un exemple de carte des outils avec des cases et des flèches avant que les propriétaires dessinent la leur.",
      "Rappelez aux propriétaires de consulter la page de tarifs de chaque outil ; les prix et les fonctions changent.",
      "Insistez sur le fait que les décisions sur l'argent, le juridique, l'embauche et la sécurité restent aux personnes, et que les données des clients restent protégées.",
      "Notez le plan d'une page avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
