"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-strategy.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-strategy-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Construire une stratégie d'IA pour votre association",
  skills: "Trouver les bonnes tâches pour l'IA, Classer les idées selon la valeur et le risque, Rédiger une politique d'utilisation de l'IA, Planifier un petit projet pilote, Mesurer les résultats et rendre compte au conseil d'administration",
  outcome: "rédiger un plan d'IA d'une page pour votre association, qui nomme trois tâches où l'IA aidera, les règles que salariés et bénévoles doivent suivre, un projet pilote de 30 jours avec un responsable, et la façon de mesurer s'il a marché.",
  about: [
    "Ce cours s'adresse aux directeurs, pasteurs, membres de conseil d'administration, responsables de programme et responsables de bénévoles qui veulent utiliser l'IA volontairement plutôt que par hasard.",
    "Vous ferez la carte du temps de votre équipe, choisirez les tâches où l'IA aide le plus avec le moins de risque, écrirez des règles simples qui protègent les donateurs et les personnes que vous servez, et planifierez un petit essai dont vous pourrez rendre compte à votre conseil d'administration.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche qui construit une partie de votre plan. À la leçon 6, vous aurez un plan d'IA complet d'une page. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un plan d'IA d'une page pour votre organisation, en cinq parties : (1) votre mission en une phrase, (2) trois tâches où l'IA aidera, classées selon la valeur et le risque, (3) au moins cinq règles d'utilisation de l'IA, dont des règles de confidentialité, (4) un projet pilote de 30 jours avec un responsable, un outil et une date de début, et (5) deux mesures dont vous rendrez compte à votre conseil d'administration.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des directeurs, des pasteurs, des membres de conseils d'administration, des responsables de programmes et des responsables bénévoles d'associations et d'organisations confessionnelles qui veulent utiliser l'IA de façon réfléchie plutôt que par hasard.",
    startingPoint: "Ils dirigent des équipes et connaissent bien leur mission et leurs programmes. Certains salariés et bénévoles utilisent déjà des outils d'IA de leur côté, mais l'organisation n'a ni plan commun ni règles.",
    gap: "Sans plan, l'utilisation de l'IA est dispersée : elle peut mettre en danger les informations des donateurs ou des bénéficiaires, ou passer à côté des tâches où elle aiderait le plus la mission. Les responsables ont besoin d'un plan d'une page qui choisit les bonnes tâches, fixe des règles, teste en sécurité et rend compte des résultats au conseil d'administration.",
    constraints: [
      "Petits budgets : préférer l'IA déjà intégrée aux outils que l'organisation possède",
      "Les responsables ont peu de temps, donc chaque leçon dure environ 5 minutes",
      "Vie privée : les informations des donateurs, des bénévoles et des bénéficiaires restent en dehors de l'IA ; d'autres lois peuvent s'appliquer aux informations de santé, sur les enfants ou juridiques",
      "L'IA ne décide jamais qui reçoit des services, qui est embauché ou qui est refusé",
      "Approbation et contrôle par le conseil d'administration"
    ],
    prerequisites: "« Introduction à l'IA pour les associations », ou une première expérience d'un assistant d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de la mission de votre organisation", action: "expliquer à votre conseil d'administration ou à votre direction pourquoi votre organisation a besoin d'un plan d'IA simple", standard: "en partant de la mission, pas de l'outil" },
    { id: "O2", condition: "Après avoir demandé aux salariés et aux bénévoles ce qui leur prend leur semaine", action: "lister vos tâches répétitives et repérer celles où l'IA pourrait aider et celles qui restent aux personnes", standard: "en laissant toute décision sur des personnes à des personnes" },
    { id: "O3", condition: "À partir de votre liste de tâches adaptées à l'IA", action: "noter chaque tâche de 1 à 3 pour la valeur et le risque, et choisir les trois premières", standard: "en plaçant d'abord les tâches à forte valeur et faible risque" },
    { id: "O4", condition: "Pour vos salariés et vos bénévoles", action: "écrire au moins cinq règles claires d'utilisation de l'IA, dont des règles de confidentialité", standard: "assez courtes pour tenir sur une page et assez simples pour un nouveau bénévole" },
    { id: "O5", condition: "Pour l'une de vos trois premières tâches", action: "planifier un pilote de 30 jours avec un outil, un responsable, une date de début et un point de départ", standard: "avec le point de départ mesuré avant de commencer" },
    { id: "O6", condition: "À la fin du pilote", action: "comparer deux mesures avec le point de départ et écrire un point de cinq phrases pour le conseil d'administration", standard: "avec une décision claire de garder, modifier ou arrêter" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir où l'IA aide",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pourquoi une association a besoin d'un plan d'IA",
          minutes: 4,
          goal: "Expliquer à votre conseil d'administration ou à votre direction pourquoi votre organisation a besoin d'un plan d'IA simple.",
          text: [
            "Vos salariés et bénévoles utilisent peut-être déjà des outils d'IA chacun de leur côté, sans règles communes. Cela peut faire gagner du temps, mais aussi mettre en danger les informations des donateurs ou des bénéficiaires, ou produire des textes qui ne vous ressemblent pas.",
            "Un plan d'IA est un court document qui dit à quoi sert l'IA dans votre organisation, à quoi elle ne sert pas, qui décide, et comment vous vérifierez qu'elle aide votre mission.",
            "Un bon plan part de la mission, pas de l'outil. La question n'est pas \"Quelle IA acheter ?\" mais \"Où notre équipe perd-elle du temps qui pourrait revenir aux personnes que nous servons ?\""
          ],
          words: [["Plan d'IA", "un court document qui dit comment votre organisation utilisera ou n'utilisera pas l'IA."], ["Mission", "la raison d'être de votre organisation."], ["Partie prenante", "toute personne touchée par votre travail : bénéficiaires, donateurs, bénévoles, salariés, conseil d'administration."]],
          slides: [
            { title: "Pourquoi un plan ?", bullets: ["Des gens utilisent peut-être déjà l'IA sans règles", "La vie privée et la confiance sont en jeu", "Un plan transforme un usage dispersé en vraie aide"] },
            { title: "Un plan d'IA dit", bullets: ["À quoi sert l'IA, et à quoi elle ne sert pas", "Qui décide", "Comment vérifier qu'elle aide"] },
            { title: "Partez de la mission", bullets: ["Pas \"Quel outil ?\"", "Mais \"Où perdons-nous du temps ?\"", "Rendez ce temps aux personnes que vous servez"] }
          ],
          tryIt: "Écrivez votre mission en une phrase en haut d'une page blanche intitulée \"Notre plan d'IA\". En dessous, écrivez une phrase sur pourquoi votre organisation a besoin d'un plan maintenant.",
          youCanNow: "expliquer pourquoi une association a besoin d'un plan d'IA et en commencer un à partir de votre mission.",
          quickCheck: [
            { objective: "O1", q: "Que dit un plan d'IA ?", options: ["À quoi sert l'IA, à quoi elle ne sert pas, qui décide et comment vous vérifierez qu'elle aide", "Dans quelle entreprise d'IA investir", "Le mot de passe de chaque salarié", "Seulement le prix des outils d'IA"], answer: 0, why: "Un plan dit à quoi sert l'IA et à quoi elle ne sert pas, qui décide et comment vous vérifiez qu'elle aide la mission." },
            { objective: "O1", q: "Un membre du conseil demande : « Quelle IA devons-nous acheter ? » Que répondez-vous ?", options: ["Achetons la plus populaire", "Commençons par chercher où notre équipe perd du temps qui pourrait revenir aux personnes que nous servons", "Achetons tous les outils et voyons", "Attendons que d'autres organisations décident"], answer: 1, why: "Un bon plan part de la mission, pas de l'outil." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faire la carte du temps de votre équipe",
          minutes: 5,
          goal: "Lister les tâches répétitives de votre organisation et repérer celles où l'IA pourrait aider.",
          text: [
            "L'IA aide surtout pour les tâches qui se répètent, qui demandent beaucoup d'écriture ou de tri, et qui suivent un modèle. Exemples : rappels hebdomadaires aux bénévoles, lettres de remerciement aux donateurs, brouillons de bulletin, comptes rendus de réunion, résumés de rapports de subvention, et réponses aux mêmes questions du public.",
            "L'IA ne doit pas prendre de décisions sur les personnes : qui reçoit les services, qui est embauché, qui est refusé. Ces décisions demandent du jugement humain, de l'équité et de l'attention.",
            "Demandez à trois ou quatre personnes de votre équipe, dont un bénévole, quelles tâches leur mangent la semaine. Vous serez surpris de ce que vous apprendrez."
          ],
          steps: ["Listez dix tâches que votre équipe fait chaque semaine ou chaque mois.", "À côté de chacune, notez à peu près combien d'heures elle prend.", "Marquez les tâches qui se répètent et demandent d'écrire, de trier ou de résumer.", "Barrez les tâches qui décident de quelque chose concernant une personne."],
          words: [["Tâche répétitive", "un travail fait de la même façon encore et encore, comme les rappels hebdomadaires."], ["Jugement humain", "les décisions qu'une personne prend avec attention, équité et connaissance de la situation."]],
          slides: [
            { title: "Les bonnes tâches pour l'IA", bullets: ["Se répètent souvent", "Beaucoup d'écriture, de tri ou de résumé", "Suivent un modèle"] },
            { title: "Exemples associatifs", bullets: ["Rappels aux bénévoles et remerciements aux donateurs", "Brouillons de bulletin et comptes rendus de réunion", "Réponses aux questions courantes du public"] },
            { title: "À garder aux personnes", bullets: ["Qui reçoit les services", "Qui est embauché ou refusé", "Tout ce qui demande attention et équité"] }
          ],
          tryIt: "Faites la liste des dix tâches de votre organisation avec les heures. Marquez celles qui conviennent à l'IA et barrez celles qui décident pour des personnes.",
          youCanNow: "faire la carte du travail répétitif de votre équipe et repérer les tâches adaptées à l'IA.",
          quickCheck: [
            { objective: "O2", q: "Pour quel genre de tâche l'IA aide-t-elle le plus ?", options: ["Les décisions sur qui reçoit des services", "Les choix d'embauche", "Les tâches qui se répètent, demandent d'écrire ou de trier, et suivent un modèle", "Les conversations d'accompagnement pastoral"], answer: 2, why: "L'IA aide surtout pour les tâches répétitives d'écriture et de tri qui suivent un modèle." },
            { objective: "O2", q: "Quelqu'un propose d'utiliser l'IA pour décider quelles familles entrent dans le programme alimentaire. Que répondez-vous ?", options: ["Oui, c'est plus rapide", "Oui, si l'IA explique son choix", "Seulement pour les nouvelles familles", "Non ; les décisions sur des personnes demandent un jugement humain"], answer: 3, why: "L'IA ne doit pas décider qui reçoit des services." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Classer les idées selon la valeur et le risque",
          minutes: 5,
          goal: "Classer vos idées d'IA et choisir les trois premières par lesquelles commencer.",
          text: [
            "Pour chaque tâche adaptée à l'IA, posez deux questions. Valeur : combien de temps ou de qualité gagnerions-nous ? Risque : qu'est-ce qui pourrait mal tourner, et à quel point ?",
            "Les tâches à faible risque et forte valeur passent en premier, par exemple rédiger des rappels aux bénévoles à partir des informations publiques d'un événement. Les tâches à risque élevé, comme tout ce qui touche aux notes de suivi des bénéficiaires ou à la santé, attendent que vous ayez des règles solides et un outil approuvé et sécurisé, ou restent hors de la liste.",
            "Notez chacune de 1 (faible) à 3 (élevé). Commencez par la forte valeur et le faible risque. Trois bonnes tâches valent mieux que dix à moitié faites."
          ],
          steps: ["Donnez à chaque tâche une note de valeur de 1 à 3.", "Donnez à chaque tâche une note de risque de 1 à 3.", "Triez : forte valeur et faible risque d'abord.", "Choisissez vos trois premières."],
          words: [["Valeur", "le temps, l'argent ou la qualité qu'un changement ferait gagner."], ["Risque", "ce qui pourrait mal tourner et le tort que cela causerait."]],
          slides: [
            { title: "Deux questions par tâche", bullets: ["Valeur : que gagnons-nous ?", "Risque : qu'est-ce qui peut mal tourner ?"] },
            { title: "Notez de 1 à 3", bullets: ["Forte valeur + faible risque = commencez ici", "Risque élevé = attendez des règles ou laissez tomber"] },
            { title: "Exemples", bullets: ["Faible risque : rappels aux bénévoles avec des infos publiques", "Risque élevé : tout ce qui touche aux notes de suivi"] },
            { title: "Choisissez-en trois", bullets: ["Trois bien faites valent mieux que dix à moitié"] }
          ],
          tryIt: "Notez vos tâches marquées selon la valeur et le risque. Écrivez vos trois premières sous un titre \"Où l'IA va aider\" dans votre plan.",
          youCanNow: "classer des idées d'IA selon la valeur et le risque et en choisir trois pour commencer.",
          quickCheck: [
            { objective: "O3", q: "Dans cette leçon, quelle échelle utilisez-vous pour noter la valeur et le risque ?", options: ["De 1 (faible) à 3 (élevé)", "De 1 à 100", "Seulement oui ou non", "De A à F"], answer: 0, why: "Notez chacun de 1 (faible) à 3 (élevé)." },
            { objective: "O3", q: "Vous avez dix idées d'IA. Que faites-vous ?", options: ["Vous lancez les dix en même temps", "Vous en choisissez environ trois à forte valeur et faible risque", "Vous choisissez les trois plus risquées", "Vous laissez chaque salarié en choisir une"], answer: 1, why: "Trois bonnes tâches valent mieux que dix à moitié faites." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir où l'IA aide",
        questions: [
          { objective: "O1", q: "De quoi doit partir le plan d'IA d'une association ?", options: ["De la mission", "Du dernier outil sorti", "Du prix le plus bas", "Du site web d'une autre organisation"], answer: 0, why: "Un plan part de la mission et du temps qui pourrait revenir aux personnes servies." },
          { objective: "O2", q: "Quelle tâche convient le mieux à l'IA ?", options: ["Décider qui reçoit l'aide alimentaire", "Rédiger les rappels hebdomadaires aux bénévoles", "Choisir quels salariés embaucher", "Refuser un bénéficiaire"], answer: 1, why: "Les tâches d'écriture répétitives conviennent à l'IA ; les décisions sur les personnes restent aux personnes." },
          { objective: "O3", q: "Une tâche a une forte valeur et un faible risque. Que faites-vous ?", options: ["Vous la laissez tomber", "Vous attendez cinq ans", "Vous la mettez en haut de votre liste", "Vous demandez au conseil de l'écrire"], answer: 2, why: "Les tâches à forte valeur et faible risque passent en premier." },
          { objective: "O3", q: "Une tâche touche aux informations de santé des bénéficiaires. Comment la classer ?", options: ["Risque le plus faible", "À faire en premier", "À publier", "Risque élevé : attendre des règles solides et un outil sécurisé, ou laisser tomber"], answer: 3, why: "Les données sensibles des bénéficiaires sont à risque élevé." },
          { objective: "O2", q: "Pourquoi demander aux bénévoles et salariés ce qui leur mange la semaine ?", options: ["Pour trouver les vraies tâches répétitives", "Pour trouver un coupable", "Pour réduire les bénévoles", "La loi l'exige"], answer: 0, why: "Les personnes qui font le travail savent où passe le temps." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Règles, projet pilote et résultats",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire des règles d'IA simples",
          minutes: 5,
          goal: "Écrire au moins cinq règles claires sur la façon dont vos salariés et bénévoles utilisent l'IA.",
          text: [
            "Les règles rendent l'IA sûre à utiliser. Gardez-les assez courtes pour tenir sur une page et assez simples pour qu'un nouveau bénévole les suive.",
            "Les règles de base dont la plupart des associations ont besoin : n'utiliser que des outils approuvés ; ne jamais coller d'informations privées sur les donateurs, bénévoles ou bénéficiaires ; une personne relit tout avant envoi ou publication ; vérifier chaque fait et chaque chiffre ; dire honnêtement quand l'IA a aidé, là où cela compte ; et l'IA ne décide jamais qui reçoit les services.",
            "Les organisations religieuses peuvent ajouter une règle pour que les sermons, les prières et l'accompagnement pastoral restent personnels. Demandez conseil à un avocat ou à votre assureur si vous traitez des informations de santé, sur des enfants ou juridiques, car des lois supplémentaires peuvent s'appliquer."
          ],
          steps: ["Listez les outils d'IA approuvés.", "Écrivez la règle de confidentialité : ce qui ne va jamais dans l'IA.", "Écrivez la règle de relecture : qui vérifie avant que quoi que ce soit ne sorte.", "Écrivez la règle des décisions : l'IA ne décide jamais pour des personnes.", "Ajoutez les règles dont votre mission a besoin."],
          words: [["Politique d'utilisation de l'IA", "les règles écrites sur la façon dont les membres de votre organisation peuvent utiliser l'IA."], ["Outil approuvé", "un outil d'IA que vos responsables ont vérifié et autorisé."]],
          slides: [
            { title: "Des règles courtes", bullets: ["Une page", "Assez simples pour un nouveau bénévole"] },
            { title: "Les règles de base", bullets: ["Outils approuvés seulement", "Aucune information privée de donateur ou bénéficiaire", "Une personne relit avant que cela sorte", "Vérifier chaque fait et chaque chiffre"] },
            { title: "Autres règles", bullets: ["L'IA ne décide jamais qui reçoit les services", "Dire honnêtement quand l'IA a aidé", "Ajouter les règles propres à votre mission"] },
            { title: "Demandez conseil", bullets: ["Santé, enfants ou données juridiques : demandez à un avocat ou à l'assureur"] }
          ],
          tryIt: "Écrivez au moins cinq règles sous le titre \"Nos règles d'IA\" dans votre plan. Lisez-les à un bénévole et demandez-lui si quelque chose n'est pas clair.",
          youCanNow: "rédiger une politique d'utilisation de l'IA simple que votre équipe peut suivre.",
          quickCheck: [
            { objective: "O4", q: "Quelle longueur doivent faire vos règles d'IA ?", options: ["Au moins 20 pages", "Seulement dites à l'oral, jamais écrites", "Assez courtes pour tenir sur une page", "Aussi longues que les statuts"], answer: 2, why: "Gardez des règles assez courtes pour une page et simples pour un nouveau bénévole." },
            { objective: "O4", q: "Votre église veut une règle sur les prières et les sermons. Que pourrait-elle dire ?", options: ["L'IA écrit tous les sermons", "L'IA choisit qui reçoit des visites de prière", "Rien ; les églises n'ont pas besoin de règles", "Les sermons, les prières et l'accompagnement pastoral restent personnels"], answer: 3, why: "Les organisations confessionnelles peuvent ajouter une règle disant que ces choses restent personnelles." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planifier un projet pilote de 30 jours",
          minutes: 5,
          goal: "Planifier un petit essai de l'IA de 30 jours sur une tâche avec un responsable.",
          text: [
            "Un projet pilote est un petit essai avant de tout changer. Choisissez une de vos trois tâches principales, un outil, une personne responsable, et 30 jours.",
            "Avant de commencer, mesurez comment les choses marchent aujourd'hui. Si les rappels aux bénévoles prennent 3 heures par semaine, notez-le. C'est votre point de départ, ou situation de référence.",
            "Prenez des notes pendant le pilote : temps passé, problèmes, et ce que les gens ont dit. Utilisez si possible un outil que votre organisation a déjà, comme l'IA intégrée à Microsoft 365 ou Google Workspace, pour ne pas ajouter de coût."
          ],
          steps: ["Choisissez une tâche parmi vos trois principales.", "Choisissez un outil approuvé et un responsable.", "Notez la situation de référence : combien de temps cela prend aujourd'hui.", "Fixez une date de début et une date de fin 30 jours plus tard.", "Prenez des notes simples chaque semaine."],
          words: [["Projet pilote", "un petit essai court avant un changement plus grand."], ["Situation de référence", "comment une chose marche aujourd'hui, mesurée avant de la changer."], ["Responsable", "la seule personne chargée du projet pilote."]],
          slides: [
            { title: "Un pilote est un petit essai", bullets: ["Une tâche, un outil, un responsable", "30 jours"] },
            { title: "Mesurez d'abord", bullets: ["Référence : combien de temps cela prend aujourd'hui", "Exemple : les rappels prennent 3 heures par semaine"] },
            { title: "Pendant le pilote", bullets: ["Notez le temps passé", "Notez les problèmes", "Notez ce que les gens ont dit"] }
          ],
          tryIt: "Sous \"Notre projet pilote de 30 jours\", écrivez la tâche, l'outil, le responsable, la date de début, la date de fin et la situation de référence.",
          youCanNow: "planifier un projet pilote d'IA de 30 jours avec un responsable et une situation de référence clairs.",
          quickCheck: [
            { objective: "O5", q: "Quelles notes prenez-vous pendant un pilote ?", options: ["Le temps passé, les problèmes et ce que les gens ont dit", "Seulement la date de début", "Le montant des dons des donateurs", "Rien jusqu'à la fin"], answer: 0, why: "Notez le temps passé, les problèmes et ce que les gens ont dit." },
            { objective: "O5", q: "Vous voulez lancer la semaine prochaine un pilote sur les brouillons du bulletin. Que faites-vous d'abord ?", options: ["Vous achetez un nouvel outil d'IA", "Vous notez combien de temps prennent les bulletins aujourd'hui", "Vous commencez sans prévenir personne", "Vous planifiez cinq tâches en même temps"], answer: 1, why: "Mesurez d'abord comment les choses se passent aujourd'hui ; c'est votre point de départ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer les résultats et rendre compte au conseil",
          minutes: 5,
          goal: "Choisir deux mesures et présenter les résultats du pilote dans un court point au conseil d'administration.",
          text: [
            "Choisissez deux mesures : une pour le temps ou le coût (heures gagnées par semaine) et une pour la qualité (moins d'erreurs, plus d'inscriptions de bénévoles, réponses plus rapides au public, ou ce que les lecteurs ont dit).",
            "À la fin, comparez avec votre situation de référence. Puis décidez : garder, modifier ou arrêter. Arrêter est un bon résultat ; vous avez appris quelque chose à peu de frais.",
            "Rendez compte à votre conseil en cinq phrases : ce que vous avez testé, ce qui a changé, les problèmes éventuels, si les règles ont été respectées, et ce que vous recommandez ensuite. Un conseil d'administration s'intéresse à la mission, à l'argent, au risque et à la confiance."
          ],
          steps: ["Choisissez une mesure de temps et une mesure de qualité.", "Comparez la fin du pilote avec la situation de référence.", "Décidez : garder, modifier ou arrêter.", "Rédigez un point de cinq phrases pour le conseil."],
          words: [["Mesure", "un chiffre ou un signe que vous suivez pour voir si quelque chose a marché."], ["Conseil d'administration", "le groupe de personnes qui dirige une association et supervise ses responsables."]],
          slides: [
            { title: "Deux mesures", bullets: ["Temps : heures gagnées chaque semaine", "Qualité : erreurs, inscriptions, réponses, retours"] },
            { title: "Décidez", bullets: ["Garder", "Modifier", "Arrêter : un résultat utile aussi"] },
            { title: "Un point de cinq phrases au conseil", bullets: ["Ce que nous avons testé et ce qui a changé", "Problèmes et respect des règles", "Ce que nous recommandons ensuite"] }
          ],
          tryIt: "Tâche finale : terminez votre plan d'IA d'une page. Ajoutez deux mesures, puis rassemblez les cinq parties : mission, trois tâches, règles, projet pilote de 30 jours et mesures dont vous rendrez compte au conseil.",
          youCanNow: "rédiger un plan d'IA complet d'une page et rendre compte des résultats à votre conseil d'administration.",
          quickCheck: [
            { objective: "O6", q: "Laquelle est une mesure de temps ou de coût ?", options: ["Ce que les lecteurs ont dit", "Moins d'erreurs", "Les heures gagnées par semaine", "Plus d'inscriptions de bénévoles"], answer: 2, why: "Les heures gagnées par semaine mesurent le temps ; les autres mesurent la qualité." },
            { objective: "O6", q: "Le pilote a fait gagner du temps, mais l'équipe a enfreint une fois une règle de confidentialité. Que met-on dans le point au conseil ?", options: ["Seulement le temps gagné", "Rien ; c'était une petite erreur", "Seulement une demande de plus d'argent", "Les résultats, le problème, si les règles ont été suivies et ce que vous recommandez ensuite"], answer: 3, why: "Le point couvre ce que vous avez testé, ce qui a changé, les problèmes, le respect des règles et les prochaines étapes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Règles, projet pilote et résultats",
        questions: [
          { objective: "O4", q: "Laquelle est une règle d'IA de base pour une association ?", options: ["Coller les dossiers des bénéficiaires pour de meilleures réponses", "Une personne relit tout avant que cela sorte", "L'IA choisit qui reçoit les services", "N'importe quel outil convient"], answer: 1, why: "La relecture humaine protège la qualité et la confiance." },
          { objective: "O5", q: "Qu'est-ce que la situation de référence ?", options: ["La note finale", "Un type d'IA", "Comment la tâche marche aujourd'hui, avant le changement", "Le budget du conseil"], answer: 2, why: "Vous comparez les résultats à la situation de référence." },
          { objective: "O5", q: "Quelle taille pour un premier pilote ?", options: ["Toutes les tâches d'un coup", "Sans limite de temps", "Tout le conseil", "Une tâche, un outil, un responsable, 30 jours"], answer: 3, why: "Un petit essai apprend à peu de frais et en sécurité." },
          { objective: "O6", q: "Le pilote n'a pas fait gagner de temps. Quelle est une bonne décision ?", options: ["L'arrêter ou le modifier ; vous avez appris quelque chose", "Cacher les résultats", "Obliger tout le monde à l'utiliser", "Accuser les bénévoles"], answer: 0, why: "Arrêter est un résultat honnête et valable." },
          { objective: "O4", q: "Votre association traite des informations sur des enfants. Que devez-vous ajouter ?", options: ["Rien", "L'avis d'un avocat ou d'un assureur sur les règles supplémentaires", "Les coller dans l'IA", "Les rendre publiques"], answer: 1, why: "Des lois supplémentaires peuvent s'appliquer aux informations sur les enfants, la santé et le juridique." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Construire une stratégie d'IA pour votre association",
    questions: [
      { objective: "O1", q: "Le plan d'IA d'une association, c'est :", options: ["Un achat de logiciel", "Un événement de collecte de fonds", "Un court document sur comment vous utiliserez et n'utiliserez pas l'IA", "Une liste de donateurs"], answer: 2, why: "Il fixe le but, les règles et les vérifications de l'usage de l'IA." },
      { objective: "O1", q: "La meilleure première question d'un plan d'IA est :", options: ["Quel outil est le plus connu ?", "Comment remplacer les bénévoles ?", "Combien paient les autres organisations ?", "Où notre équipe perd-elle du temps que nous pourrions rendre à notre mission ?"], answer: 3, why: "Partez de la mission et du temps, pas des outils." },
      { objective: "O1", q: "Pourquoi est-il risqué de ne pas avoir de plan d'IA ?", options: ["Des gens peuvent utiliser l'IA sans règles de confidentialité", "L'IA est illégale", "Les donateurs exigent l'IA", "Ce n'est pas risqué"], answer: 0, why: "Un usage non prévu peut exposer des informations privées." },
      { objective: "O2", q: "Quelle tâche convient à l'IA ?", options: ["Décider qui est expulsé d'un logement", "Résumer un long rapport de subvention", "Embaucher un nouveau pasteur", "Signer un bail"], answer: 1, why: "Résumer est une tâche à modèle ; les autres sont des décisions humaines." },
      { objective: "O2", q: "Qu'est-ce qui doit rester aux personnes ?", options: ["Rédiger des rappels", "Mettre en page un bulletin", "Décider qui reçoit les services", "Lister les sujets d'une réunion"], answer: 2, why: "Les décisions sur les personnes demandent du jugement humain." },
      { objective: "O2", q: "Pour faire la carte du temps, vous devez :", options: ["Deviner une tâche", "Demander seulement au conseil", "Oublier les bénévoles", "Lister les tâches et les heures qu'elles prennent"], answer: 3, why: "Les heures montrent où l'IA pourrait le plus aider." },
      { objective: "O3", q: "Quelle paire de notes sert à classer les idées ?", options: ["Valeur et risque", "Couleur et taille", "Prix et marque", "Âge et taille"], answer: 0, why: "Forte valeur et faible risque passent en premier." },
      { objective: "O3", q: "Par combien de tâches commencer ?", options: ["Toutes", "Environ trois", "Aucune", "Cinquante"], answer: 1, why: "Trois bien faites valent mieux que dix à moitié." },
      { objective: "O3", q: "Quelle tâche a le risque le plus faible ?", options: ["Résumer les notes de suivi des bénéficiaires", "Analyser les données bancaires des donateurs", "Des rappels aux bénévoles avec les infos publiques d'un événement", "Écrire des conseils médicaux"], answer: 2, why: "Elle n'utilise que des informations publiques." },
      { objective: "O4", q: "Une politique d'utilisation de l'IA doit être :", options: ["Longue de cinquante pages", "Secrète", "Écrite seulement en termes juridiques", "Courte et assez simple pour un nouveau bénévole"], answer: 3, why: "Des règles simples sont suivies." },
      { objective: "O4", q: "Laquelle est une règle de confidentialité ?", options: ["Ne jamais coller d'informations privées de donateurs ou bénéficiaires dans l'IA", "Utiliser l'outil qu'on veut", "Partager les mots de passe pour gagner du temps", "Publier les histoires des bénéficiaires avec leur nom"], answer: 0, why: "Protéger les informations privées garde la confiance." },
      { objective: "O4", q: "Que veut dire \"outil approuvé\" ?", options: ["N'importe quel outil gratuit", "Un outil que vos responsables ont vérifié et autorisé", "Un outil avec de la publicité", "Un outil qu'un donateur aime"], answer: 1, why: "Les responsables vérifient la sécurité des outils approuvés." },
      { objective: "O5", q: "Un projet pilote, c'est :", options: ["Un déploiement complet", "Une subvention", "Un petit essai court avant un changement plus grand", "Une élection du conseil"], answer: 2, why: "Le pilote teste d'abord à peu de frais." },
      { objective: "O5", q: "Pourquoi mesurer la situation de référence avant un pilote ?", options: ["Pour ralentir les choses", "Parce que les donateurs le demandent", "Ce n'est pas utile", "Pour pouvoir comparer les résultats ensuite"], answer: 3, why: "Sans référence, impossible de savoir si cela a aidé." },
      { objective: "O5", q: "Chaque pilote a besoin :", options: ["D'un responsable", "De personne aux commandes", "De tous les salariés aux commandes", "Seulement de l'IA"], answer: 0, why: "Un seul responsable le garde sur les rails." },
      { objective: "O5", q: "Pourquoi utiliser l'IA déjà présente dans vos outils, comme Microsoft 365 ou Google Workspace ?", options: ["Elle est toujours parfaite", "Cela évite d'ajouter un coût", "Elle partage les données avec les donateurs", "C'est obligatoire"], answer: 1, why: "Utiliser ce que vous avez déjà limite les coûts." },
      { objective: "O6", q: "Laquelle est une mesure de qualité ?", options: ["La couleur du logo de l'outil", "Le nombre d'applications d'IA installées", "Plus de bénévoles inscrits après les rappels", "La longueur de la politique"], answer: 2, why: "Les mesures de qualité montrent si le travail s'est amélioré." },
      { objective: "O6", q: "Après le pilote, vos trois choix sont :", options: ["Le cacher, l'ignorer ou le nier", "Acheter plus d'outils", "Renvoyer le responsable", "Le garder, le modifier ou l'arrêter"], answer: 3, why: "Décidez d'après les mesures." },
      { objective: "O6", q: "Un bon point au conseil d'administration, c'est :", options: ["Environ cinq phrases claires sur les résultats, les risques et la suite", "Un rapport technique de 40 pages", "Rien", "Seulement le coût de l'outil"], answer: 0, why: "Le conseil a besoin d'une image courte et claire." },
      { objective: "O6", q: "Un conseil d'administration s'intéresse surtout à :", options: ["L'IA qui a le plus beau logo", "La mission, l'argent, le risque et la confiance", "Le nombre de demandes tapées", "Seulement les mentions J'aime sur les réseaux"], answer: 1, why: "Ce sont les devoirs essentiels du conseil." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      6,
      10,
      12,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "La mission d'abord",
        objective: "O1",
        notYet: "Pas de phrase sur la mission, ou le plan part d'un outil.",
        meets: "La mission en une phrase ouvre le plan.",
        exceeds: "Chaque tâche choisie dit comment elle rend du temps à la mission."
      },
      {
        name: "Trois tâches classées",
        objective: "O3",
        notYet: "Les tâches ne sont pas classées, ou une tâche à risque élevé est en premier.",
        meets: "Trois tâches notées pour la valeur et le risque, avec la forte valeur et le faible risque en premier.",
        exceeds: "Indique quelles tâches ont été écartées et pourquoi."
      },
      {
        name: "Règles d'IA claires",
        objective: "O4",
        notYet: "Moins de cinq règles, ou pas de règle de confidentialité.",
        meets: "Au moins cinq règles courtes, dont la confidentialité, les outils approuvés et la relecture humaine.",
        exceeds: "Ajoute des règles pour les risques propres à l'organisation, comme les informations sur les enfants."
      },
      {
        name: "Pilote de 30 jours",
        objective: "O5",
        notYet: "Pas de responsable, d'outil ou de date de début.",
        meets: "Une tâche, un outil, un responsable, une date de début et un point de départ mesuré.",
        exceeds: "Utilise un outil que l'organisation a déjà, avec une note sur le coût."
      },
      {
        name: "Mesures pour le conseil",
        objective: "O6",
        notYet: "Pas de mesures, ou des mesures impossibles à comparer avec le point de départ.",
        meets: "Une mesure de temps ou de coût et une mesure de qualité.",
        exceeds: "Contient un brouillon du point de cinq phrases pour le conseil."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Organisations dont le conseil d'administration approuve un plan d'IA écrit dans les 60 jours (enquête de suivi)",
      "Organisations qui terminent un pilote de 30 jours et signalent les heures gagnées",
      "Apprenants qui commencent un autre cours Koach Learn pour les associations dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et un traitement de texte",
      "La déclaration de mission et une liste des tâches hebdomadaires de l'équipe",
      "Un assistant d'IA gratuit ou celui que votre organisation a déjà, pour rédiger",
      "Environ 60 minutes au total, plus le temps de parler avec les salariés et les bénévoles"
    ],
    facilitatorNotes: [
      "Cela marche mieux avec deux ou trois responsables de la même organisation qui écrivent un seul plan ensemble.",
      "Avant la séance, demandez aux apprenants de recueillir auprès des salariés et d'un bénévole ce qui prend la semaine de l'équipe.",
      "Orientez les apprenants vers un avocat ou un assureur quand ils traitent des informations de santé, sur des enfants ou juridiques.",
      "Faites lire à voix haute le point de cinq phrases pour le conseil, pour s'entraîner.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
