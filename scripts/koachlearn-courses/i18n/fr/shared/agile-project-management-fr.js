"use strict";

// Koach Learn course (shared), French translation of "Agile Project Management". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "agile-project-management-fr",
  lang: "fr",
  translationOf: "agile-project-management",
  category: "Veterans (military)",
  name: "Gestion de projet Agile",
  skills: "Rédiger des user stories, Construire un backlog, Planifier un sprint, Tenir un tableau des tâches, Mener une revue et une rétrospective",
  outcome: "mener un petit projet à la manière Agile : transformer le travail en un backlog de user stories classées par priorité, planifier un sprint d'une ou deux semaines, le suivre sur un tableau des tâches et le clôturer par une revue et une rétrospective.",
  about: [
    "Agile est une façon de mener des projets par courtes étapes de travail, en vérifiant souvent les résultats et en changeant de cap quand on apprend quelque chose de nouveau. Beaucoup d'employeurs de la tech, de l'administration, de la santé et de la logistique l'utilisent, et les offres d'emploi le demandent souvent.",
    "Ce cours s'adresse à toute personne qui dirige une équipe ou y travaille : anciens militaires qui passent à des postes de projet civils, travailleurs qui visent un poste de coordinateur ou d'analyste, et personnes qui mènent un projet au travail, à l'église ou dans leur quartier. Les habitudes de planification militaire, comme le briefing de mission et le retour d'expérience après action, se transposent bien à Agile.",
    "Vous vous exercerez sur un vrai petit projet personnel, de la première à la dernière leçon. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Un contrôle des connaissances suit chaque chapitre, et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Choisissez un vrai projet de deux à six semaines (par exemple une recherche d'emploi avec CV, un événement de quartier ou un petit site web). Construisez un backlog d'au moins huit user stories classées par priorité, planifiez un sprint d'une semaine avec un objectif de sprint, menez-le sur un tableau des tâches gratuit et terminez par une revue de sprint écrite et une rétrospective qui note une chose à garder, une chose à arrêter et une chose à essayer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des anciens militaires et des militaires en transition qui vont vers des postes civils comme coordinateur de projet, opérations, informatique ou gestion de programmes. Beaucoup ont dirigé des équipes, mené des missions et animé des retours d'expérience (RETEX) dans l'armée.",
    startingPoint: "Ils ont l'expérience de la planification, des briefings, des chaînes de responsabilité et des retours d'expérience. La plupart n'ont jamais utilisé le vocabulaire Agile, les user stories ni les tableaux des tâches numériques.",
    gap: "Beaucoup d'employeurs civils mènent leurs projets de façon Agile et demandent une expérience de Scrum ou de Kanban dans leurs offres d'emploi. Les apprenants doivent montrer qu'ils savent mener un petit projet en sprints avec les mots du monde civil, et relier cela aux compétences de leadership qu'ils ont déjà, pour être compétitifs sur ces postes.",
    constraints: [
      "Niveau de lecture : mots simples ; les termes Agile sont expliqués la première fois",
      "Appareils : un téléphone ou un ordinateur pour un outil de tableau gratuit, ou des post-it sur un mur",
      "Temps : des leçons de 5 minutes, plus un sprint d'une semaine pour la tâche finale",
      "Les frais et les conditions de certification changent ; les apprenants vérifient le site de l'organisme certificateur",
      "Aucun détail privé ou classifié dans les projets d'exercice ou les consignes données à une IA"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de la description d'un projet", action: "expliquer comment Agile mène le travail par courtes étapes et quand le modèle en cascade convient mieux", standard: "avec vos mots, en donnant un exemple de chaque" },
    { id: "O2", condition: "À partir d'une petite équipe Scrum", action: "nommer les trois responsabilités de Scrum, les cinq événements et les trois artefacts", standard: "en ayant au moins 9 réponses justes sur 11" },
    { id: "O3", condition: "Pour un vrai projet de deux à six semaines", action: "rédiger un backlog d'au moins huit user stories avec des critères d'acceptation, classées par priorité", standard: "avec chaque story sur le modèle « En tant que..., je veux... afin de... »" },
    { id: "O4", condition: "À partir de votre backlog et des heures dont vous disposez vraiment", action: "planifier un sprint d'une semaine avec un objectif de sprint en une phrase et des tâches d'une journée ou moins", standard: "pour que le travail prévu tienne dans le temps dont vous disposez" },
    { id: "O5", condition: "Pendant votre sprint", action: "suivre le travail sur un tableau des tâches avec une limite de travail en cours (WIP) et un point quotidien de 15 minutes", standard: "en déplaçant chaque carte au fur et à mesure du travail" },
    { id: "O6", condition: "À la fin de votre sprint", action: "mener une revue de sprint et une rétrospective Garder, Arrêter, Essayer, puis ajouter une amélioration au sprint suivant", standard: "avec les retours écrits dans le backlog" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier à la manière Agile",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est Agile, et en quoi il diffère d'un grand plan",
          minutes: 4,
          goal: "Expliquer avec vos propres mots comment Agile mène un projet par courtes étapes.",
          text: [
            "Dans un projet classique, dit « en cascade » (waterfall), on planifie tout au départ, puis on construit, puis on teste, puis on livre à la fin. Cela marche quand le travail est bien connu, comme couler des fondations. Cela ne marche plus quand les besoins changent en cours de route.",
            "Agile livre par courtes étapes, souvent d'une à quatre semaines. Chaque étape produit quelque chose d'utilisable, l'équipe le montre aux personnes concernées, et le plan est ajusté selon leurs retours. Le Manifeste Agile (2001) le dit simplement : des résultats qui fonctionnent et l'adaptation au changement comptent plus que suivre un plan figé.",
            "Scrum et Kanban sont les deux façons les plus courantes de pratiquer Agile. Scrum utilise des étapes de durée fixe appelées sprints. Kanban utilise un tableau et un flux de travail régulier, avec une limite au nombre de tâches en cours en même temps. Vous pouvez reprendre des idées des deux."
          ],
          words: [["Agile", "une façon de mener des projets par courtes étapes, avec des vérifications et des ajustements fréquents."], ["Cascade (waterfall)", "une façon de mener des projets où chaque phase est terminée avant que la suivante commence."], ["Scrum", "une méthode Agile qui travaille par étapes de durée fixe appelées sprints."], ["Kanban", "une méthode Agile qui utilise un tableau et limite la quantité de travail en cours."]],
          slides: [
            { title: "Cascade ou Agile", bullets: ["Cascade : tout planifier, tout construire, livrer à la fin", "Agile : livrer quelque chose d'utilisable toutes les quelques semaines", "Agile ajuste le plan à mesure qu'on apprend"] },
            { title: "Pourquoi les équipes utilisent Agile", bullets: ["Les besoins changent en cours de route", "Les problèmes apparaissent tôt, pas à la fin", "Les personnes servies voient souvent les progrès"] },
            { title: "Deux méthodes courantes", bullets: ["Scrum : des sprints de durée fixe, d'un mois ou moins", "Kanban : un tableau et une limite au travail en cours"] }
          ],
          sources: [{ name: "Manifeste pour le développement Agile de logiciels", url: "https://agilemanifesto.org/" }, { name: "Le Guide Scrum (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Choisissez un vrai projet que vous voulez terminer dans les deux à six prochaines semaines. Écrivez une phrase pour le décrire et une phrase sur les personnes à qui il s'adresse.",
          youCanNow: "expliquer en quoi Agile diffère d'un grand plan établi à l'avance et citer Scrum et Kanban.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que Kanban ?", options: ["Un plan fixe de quatre semaines", "Un type de user story", "Un examen de certification", "Une façon de pratiquer Agile avec un tableau et une limite de travail en cours"], answer: 3, why: "Kanban utilise un tableau et un flux de travail régulier, avec une limite sur la quantité de travail en cours." },
            { objective: "O1", q: "Votre association d'anciens militaires crée un nouveau site web, et les membres changent sans cesse d'avis sur ce qu'ils veulent. Quelle approche convient ?", options: ["La cascade : tout planifier au départ et livrer à la fin", "Agile : livrer par courtes étapes et ajuster après chacune", "Aucun plan du tout", "Attendre que tout le monde soit d'accord sur tout"], answer: 1, why: "Agile convient au travail dont les besoins changent, car chaque étape est montrée et le plan est ajusté." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rôles, événements et artefacts de Scrum",
          minutes: 5,
          goal: "Dire qui fait quoi dans Scrum et citer les cinq événements d'un sprint.",
          text: [
            "Le Guide Scrum (version 2020) définit trois responsabilités. Le Product Owner décide de ce qui compte le plus et tient la liste du travail en ordre. Les Developers sont les personnes qui font le travail, de toute nature, pas seulement du logiciel. Le Scrum Master aide l'équipe à suivre Scrum et lève les obstacles.",
            "Il y a cinq événements. Le Sprint est le cadre, d'un mois ou moins. La Sprint Planning fixe l'objectif du sprint et choisit le travail. La Daily Scrum est un point de 15 minutes sur l'avancement vers l'objectif. La Sprint Review montre les résultats aux personnes concernées. La Sprint Retrospective examine la façon dont l'équipe a travaillé et choisit des améliorations.",
            "Il y a trois artefacts : le Product Backlog (tout le travail, dans l'ordre), le Sprint Backlog (le travail choisi pour ce sprint) et l'Increment (le résultat utilisable). Sur un petit projet, une même personne peut tenir plusieurs rôles. C'est bien, tant que chaque tâche est faite."
          ],
          words: [["Product Owner", "la personne qui décide quel travail compte le plus et classe le backlog."], ["Scrum Master", "la personne qui aide l'équipe à bien utiliser Scrum et lève les obstacles."], ["Increment", "le résultat utilisable produit par un sprint."], ["Rétrospective", "une réunion en fin de sprint sur la façon dont l'équipe a travaillé ; proche du retour d'expérience après action."]],
          slides: [
            { title: "Trois responsabilités", bullets: ["Product Owner : ce qui compte le plus", "Developers : font le travail", "Scrum Master : aide l'équipe et lève les obstacles"] },
            { title: "Cinq événements", bullets: ["Sprint : un mois ou moins", "Sprint Planning et Daily Scrum (15 minutes)", "Sprint Review et Sprint Retrospective"] },
            { title: "Trois artefacts", bullets: ["Product Backlog : tout le travail, dans l'ordre", "Sprint Backlog : le travail de ce sprint", "Increment : le résultat utilisable"] }
          ],
          sources: [{ name: "Le Guide Scrum (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Pour votre projet, écrivez qui jouera le rôle de Product Owner, de Scrum Master et de Developers. Si vous êtes seul, écrivez quelle casquette vous porterez à chaque événement.",
          youCanNow: "citer les trois responsabilités, les cinq événements et les trois artefacts de Scrum, et les attribuer dans votre projet.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que l'Incrément dans Scrum ?", options: ["Le résultat utilisable produit par le sprint", "La liste de tout le travail", "Une réunion quotidienne", "Le rapport du Scrum Master"], answer: 0, why: "L'Incrément est le résultat utilisable ; le Product Backlog est la liste de tout le travail." },
            { objective: "O2", q: "Vous êtes la seule personne sur un petit projet. Que faites-vous des rôles de Scrum ?", options: ["Arrêter, car Scrum demande au moins trois personnes", "Embaucher d'abord un Scrum Master", "Tenir plusieurs rôles et vous assurer que chaque tâche est faite", "Laisser de côté le travail du Product Owner"], answer: 2, why: "Sur un petit projet, une personne peut tenir plusieurs rôles, du moment que chaque tâche est faite." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rédiger des user stories et construire un backlog",
          minutes: 6,
          goal: "Transformer un projet en un backlog de user stories classées par priorité, avec des critères de fin clairs.",
          text: [
            "Une user story décrit une partie du travail du point de vue de la personne qu'elle aide : « En tant que [type de personne], je veux [quelque chose] afin de [raison]. » Par exemple : « En tant que recruteur, je veux un CV d'une page afin de voir vite les compétences du candidat. »",
            "Chaque story a besoin de critères d'acceptation : deux ou trois vérifications qui disent quand elle est terminée. Pour la story du CV : tient sur une page, cite trois résultats mesurables, sans faute d'orthographe. Des critères clairs évitent les disputes plus tard.",
            "Classez les stories : la plus utile et la plus urgente en haut. Un assistant d'IA comme ChatGPT, Microsoft Copilot ou Google Gemini peut vous aider à rédiger des stories à partir d'une description du projet, mais c'est vous qui décidez de l'ordre et qui vérifiez que chaque story correspond à un vrai travail."
          ],
          steps: ["Listez tout ce dont le projet a besoin, un élément par ligne.", "Réécrivez chaque élément sous la forme « En tant que..., je veux... afin de... ».", "Ajoutez deux ou trois critères d'acceptation à chacun.", "Découpez toute story trop grosse pour être finie en un sprint.", "Classez les stories par priorité, de haut en bas."],
          words: [["User story", "une courte description d'un travail du point de vue de la personne qu'il aide."], ["Critères d'acceptation", "les vérifications qui disent qu'une story est terminée."], ["Backlog", "la liste ordonnée de tout le travail du projet."]],
          slides: [
            { title: "Le modèle de user story", bullets: ["En tant que [type de personne]", "je veux [quelque chose]", "afin de [raison]"] },
            { title: "Critères d'acceptation", bullets: ["Deux ou trois vérifications qui veulent dire « terminé »", "Exemple : une page, trois résultats, aucune faute"] },
            { title: "Classer le backlog", bullets: ["Le plus utile et urgent en haut", "Découper les stories trop grosses pour un sprint", "L'IA peut rédiger ; vous décidez de l'ordre"] }
          ],
          tryIt: "Rédigez au moins huit user stories pour votre projet, chacune avec ses critères d'acceptation, et classez-les par priorité. Vous pouvez demander à un assistant d'IA : « Transforme ce projet en user stories avec critères d'acceptation », puis corriger le résultat.",
          youCanNow: "rédiger des user stories avec des critères d'acceptation et les classer dans un backlog.",
          quickCheck: [
            { objective: "O3", q: "Qu'apporte la partie « afin de » d'une user story ?", options: ["La date limite", "La personne qui fait le travail", "La raison pour laquelle le travail compte", "Le coût"], answer: 2, why: "« Afin de » donne la raison ou le bénéfice pour la personne que la story aide." },
            { objective: "O3", q: "Un assistant IA rédige des stories pour votre événement de quartier. L'une d'elles est « Organiser tout l'événement ». Que faites-vous ?", options: ["La découper en stories plus petites qui tiennent dans un sprint", "La garder comme story prioritaire", "Supprimer toutes les stories de l'IA", "L'ajouter à chaque sprint"], answer: 0, why: "Une story trop grosse pour un sprint doit être découpée en morceaux plus petits." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier à la manière Agile",
        questions: [
          { objective: "O1", q: "Quelle est la principale différence entre Agile et la cascade ?", options: ["Agile n'a aucun plan", "Agile livre par courtes étapes et s'ajuste à mesure qu'il apprend", "La cascade utilise des sprints", "Agile ne marche que pour le logiciel"], answer: 1, why: "Agile travaille par courtes étapes qui livrent chacune quelque chose, puis ajuste le plan." },
          { objective: "O2", q: "Selon le Guide Scrum, combien de temps peut durer un sprint ?", options: ["Un mois ou moins", "La durée que veut le patron", "Un an", "Exactement six mois"], answer: 0, why: "Le Guide Scrum dit que les sprints durent un mois ou moins." },
          { objective: "O2", q: "Qui décide quel travail compte le plus et tient le backlog en ordre ?", options: ["Celui qui finit le premier", "Le Scrum Master", "L'avocat du client", "Le Product Owner"], answer: 3, why: "Le Product Owner classe le Product Backlog." },
          { objective: "O3", q: "Laquelle est une user story bien rédigée ?", options: ["« CV »", "« Réparer des trucs »", "« En tant que recruteur, je veux un CV d'une page afin de voir vite les compétences »", "« Tout faire pour vendredi »"], answer: 2, why: "Elle nomme la personne, ce qu'elle veut et pourquoi." },
          { objective: "O3", q: "Une story est trop grosse pour être finie en un sprint. Que faites-vous ?", options: ["Faire durer le sprint un an", "La supprimer", "La découper en stories plus petites", "Ignorer les critères d'acceptation"], answer: 2, why: "On découpe les grosses stories pour que chaque morceau tienne dans un sprint." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mener un sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planifier un sprint avec un objectif clair",
          minutes: 5,
          goal: "Planifier un sprint d'une ou deux semaines avec un objectif de sprint et la bonne quantité de travail.",
          text: [
            "La Sprint Planning répond à trois questions : pourquoi ce sprint a de la valeur (l'objectif du sprint), ce qui peut être fait (quelles stories) et comment ce sera fait (les tâches).",
            "Un objectif de sprint tient en une phrase, comme l'intention du chef dans un ordre militaire : « D'ici vendredi, j'ai un CV terminé et cinq candidatures adaptées envoyées. » Si les plans changent en route, l'objectif dit à tout le monde ce qui compte encore.",
            "Prenez les stories du haut du backlog jusqu'à remplir le temps de l'équipe, et gardez une marge. Les nouvelles équipes prévoient presque toujours trop. Découpez chaque story en tâches d'une journée ou moins."
          ],
          steps: ["Choisissez la durée du sprint (une ou deux semaines, c'est bien pour débuter).", "Écrivez un objectif de sprint en une phrase.", "Prenez en haut du backlog les stories qui servent l'objectif.", "Découpez chaque story en tâches d'une journée ou moins.", "Comparez le total aux heures dont vous disposez vraiment, et coupez si besoin."],
          words: [["Objectif de sprint", "une phrase qui dit ce que le sprint doit accomplir."], ["Capacité", "le temps dont l'équipe dispose vraiment pendant le sprint."]],
          slides: [
            { title: "La Sprint Planning répond à", bullets: ["Pourquoi : l'objectif du sprint", "Quoi : quelles stories", "Comment : les tâches"] },
            { title: "Un bon objectif de sprint", bullets: ["Une phrase, comme l'intention du chef", "Dit ce qui compte encore si les plans changent"] },
            { title: "Ne pas surcharger", bullets: ["Prendre en haut du backlog", "Des tâches d'une journée ou moins", "Garder une marge : les nouvelles équipes prévoient trop"] }
          ],
          tryIt: "Planifiez un sprint d'une semaine pour votre projet : écrivez l'objectif du sprint, choisissez les stories, découpez-les en tâches et comparez-les aux heures dont vous disposez vraiment cette semaine.",
          youCanNow: "planifier un sprint avec un objectif, des stories choisies et des tâches qui tiennent dans votre temps réel.",
          quickCheck: [
            { objective: "O4", q: "Combien de temps une tâche d'un plan de sprint devrait-elle idéalement prendre ?", options: ["Un sprint entier", "Une journée ou moins", "Au moins une semaine", "Un mois"], answer: 1, why: "Découper les stories en tâches d'une journée ou moins rend l'avancement facile à suivre." },
            { objective: "O4", q: "Au milieu du sprint, les plans changent. Qu'est-ce qui dit à l'équipe ce qui compte encore ?", options: ["La carte la plus ancienne du tableau", "La personne qui parle le plus fort", "La rétrospective de l'an dernier", "L'objectif de sprint"], answer: 3, why: "Comme l'intention du chef, l'objectif de sprint dit ce qui compte encore quand les plans changent." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Suivre le travail sur un tableau des tâches",
          minutes: 5,
          goal: "Mettre en place un tableau des tâches et utiliser un point quotidien pour faire avancer le travail.",
          text: [
            "Un tableau des tâches montre le travail en colonnes : À faire, En cours et Terminé. Chaque tâche est une carte qui se déplace vers la droite à mesure que le travail avance. Vous pouvez utiliser des post-it sur un mur, un tableur ou un outil gratuit comme Trello, Microsoft Planner ou GitHub Projects.",
            "Kanban ajoute une limite de travail en cours (limite WIP, de l'anglais « work in progress ») : par exemple, pas plus de deux cartes En cours par personne. Finir le travail vaut mieux que commencer du nouveau.",
            "La Daily Scrum dure 15 minutes. Chaque personne partage son avancement vers l'objectif du sprint, la suite, et ce qui la bloque. Les obstacles se règlent après la réunion, pas pendant."
          ],
          steps: ["Créez trois colonnes : À faire, En cours, Terminé.", "Ajoutez une carte par tâche de votre plan de sprint.", "Fixez une limite WIP, par exemple deux cartes En cours.", "Chaque jour, déplacez les cartes et faites un point de 15 minutes.", "Notez les obstacles et qui va les lever."],
          words: [["Tableau des tâches", "un tableau avec des colonnes qui montrent où en est chaque tâche."], ["Limite WIP", "un plafond au nombre de tâches en cours en même temps."], ["Obstacle", "tout ce qui empêche une tâche d'avancer."]],
          slides: [
            { title: "Un tableau des tâches simple", bullets: ["À faire, En cours, Terminé", "Une carte par tâche", "Post-it, tableur ou outil gratuit"] },
            { title: "Limiter le travail en cours", bullets: ["Par exemple : deux cartes par personne", "Finir avant de commencer autre chose"] },
            { title: "La Daily Scrum de 15 minutes", bullets: ["L'avancement vers l'objectif du sprint", "La suite", "Les obstacles : à régler après la réunion"] }
          ],
          tryIt: "Construisez un tableau des tâches pour votre sprint avec trois colonnes et une carte par tâche. Fixez une limite WIP. Pendant les trois prochains jours, déplacez les cartes et écrivez un point quotidien de deux lignes.",
          youCanNow: "mener un sprint sur un tableau des tâches avec une limite WIP et un court point quotidien.",
          quickCheck: [
            { objective: "O5", q: "Quelles sont les trois choses que chaque personne partage au point quotidien (Daily Scrum) ?", options: ["Son salaire, son titre et ses heures", "Chaque détail de chaque tâche", "Son avis sur le Product Owner", "L'avancement vers l'objectif, la suite et les blocages éventuels"], answer: 3, why: "Le point quotidien est une courte vérification de l'avancement vers l'objectif de sprint, des prochaines étapes et des blocages." },
            { objective: "O5", q: "Vous terminez une tâche. Que faites-vous de sa carte ?", options: ["La laisser dans En cours", "La déplacer dans Terminé", "La jeter avant que quelqu'un la voie", "La remettre dans À faire"], answer: 1, why: "Les cartes avancent au fur et à mesure du travail : une tâche finie va donc dans Terminé." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Clôturer le sprint : revue et rétrospective",
          minutes: 5,
          goal: "Mener une revue de sprint et une rétrospective, et en tirer un changement pour le sprint suivant.",
          text: [
            "La Sprint Review montre le travail terminé aux personnes concernées et leur demande leur avis. Ne montrez que le travail qui respecte ses critères d'acceptation. Leurs retours retournent dans le backlog.",
            "La Sprint Retrospective porte sur la façon dont vous avez travaillé, pas sur ce que vous avez construit. Elle fonctionne comme un retour d'expérience après action : ce qui devait se passer, ce qui s'est passé, pourquoi, et quoi faire autrement. Un format simple : Garder, Arrêter, Essayer.",
            "Choisissez une amélioration et mettez-la dans le sprint suivant comme une vraie tâche. Une rétrospective qui ne change rien n'est qu'une réunion. Les certifications Agile, comme le Certified ScrumMaster de Scrum Alliance ou le Professional Scrum Master de Scrum.org, peuvent venir plus tard ; consultez leurs sites pour les conditions et les tarifs actuels."
          ],
          steps: ["Listez ce qui est terminé et respecte ses critères d'acceptation.", "Montrez-le aux personnes concernées et notez leurs retours.", "Ajoutez les retours au backlog.", "Menez une rétrospective Garder / Arrêter / Essayer.", "Mettez une amélioration dans le sprint suivant."],
          words: [["Sprint Review", "une réunion pour montrer le travail terminé et recueillir des retours."], ["Retour d'expérience après action", "un débriefing militaire sur ce qui était prévu, ce qui s'est passé et ce qu'il faut changer."], ["Garder / Arrêter / Essayer", "un format simple de rétrospective."]],
          slides: [
            { title: "Sprint Review", bullets: ["Ne montrer que le travail terminé", "Demander aux personnes concernées", "Les retours vont dans le backlog"] },
            { title: "Rétrospective = retour d'expérience après action", bullets: ["Porte sur la façon de travailler", "Garder, Arrêter, Essayer"] },
            { title: "La rendre utile", bullets: ["Choisir une amélioration", "La mettre dans le sprint suivant comme une tâche"] }
          ],
          sources: [{ name: "Scrum Alliance : Certified ScrumMaster", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Scrum.org : évaluations", url: "https://www.scrum.org/assessments" }],
          tryIt: "Tâche finale : terminez votre sprint d'une semaine. Écrivez une courte revue de sprint (ce qui est fait, qui l'a vu, ce qu'ils ont dit) et une rétrospective Garder / Arrêter / Essayer, puis ajoutez une amélioration au sprint suivant.",
          youCanNow: "clôturer un sprint par une revue et une rétrospective et reporter une amélioration dans le sprint suivant.",
          quickCheck: [
            { objective: "O6", q: "À quelle pratique militaire une rétrospective ressemble-t-elle le plus ?", options: ["Un retour d'expérience (RETEX) après une mission", "Une cérémonie de passation de commandement", "Une demande de ravitaillement", "Une inspection de tenue"], answer: 0, why: "Comme un retour d'expérience, elle demande ce qui était prévu, ce qui s'est passé, pourquoi, et ce qu'il faut changer." },
            { objective: "O6", q: "Votre équipe a listé cinq choses à essayer au prochain sprint. Qu'est-ce qui rend la rétrospective utile ?", options: ["Essayer les cinq en même temps", "Les noter puis les oublier", "En choisir une et l'ajouter au sprint suivant comme une vraie tâche", "Organiser une autre réunion pour en parler"], answer: 2, why: "Une amélioration transformée en vraie tâche, c'est ce qui change la façon de travailler de l'équipe." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mener un sprint",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un objectif de sprint ?", options: ["La liste de toutes les tâches", "Le salaire de l'équipe", "Une phrase qui dit ce que le sprint doit accomplir", "Une date limite pour tout le projet"], answer: 2, why: "L'objectif de sprint est un but en une phrase qui guide les choix pendant le sprint." },
          { objective: "O4", q: "Votre équipe a prévu 60 heures de travail mais n'a que 40 heures disponibles. Que faites-vous ?", options: ["Garder les 60 heures et travailler le week-end", "Retirer des stories jusqu'à ce que le plan tienne dans le temps réel", "Supprimer la Daily Scrum", "Allonger le sprint sans prévenir personne"], answer: 1, why: "On planifie selon la capacité réelle ; les sprints surchargés échouent." },
          { objective: "O5", q: "À quoi sert une limite WIP ?", options: ["À plafonner le nombre de tâches en cours en même temps", "À limiter le nombre de personnes dans l'équipe", "À fixer le budget du projet", "À supprimer la colonne Terminé"], answer: 0, why: "Une limite WIP pousse l'équipe à finir avant de commencer autre chose." },
          { objective: "O5", q: "Un coéquipier signale un obstacle pendant la Daily Scrum. Quand faut-il le régler ?", options: ["Pendant la réunion, pendant une heure", "Jamais", "À la fin du projet", "Après la réunion, avec les personnes qui peuvent aider"], answer: 3, why: "La Daily Scrum reste à 15 minutes ; les obstacles se traitent juste après." },
          { objective: "O6", q: "Sur quoi porte la rétrospective ?", options: ["Vendre le produit", "Choisir un nouveau Product Owner", "Rédiger le budget", "La façon dont l'équipe a travaillé et ce qu'il faut changer"], answer: 3, why: "La rétrospective examine la façon de travailler, comme un retour d'expérience après action." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gestion de projet Agile",
    questions: [
      { objective: "O1", q: "Les projets Agile livrent :", options: ["Tout à la toute fin", "Seulement des papiers", "Quelque chose d'utilisable par courtes étapes", "Rien tant que le budget n'est pas dépensé"], answer: 2, why: "Agile livre du travail utilisable toutes les quelques semaines." },
      { objective: "O1", q: "Quelle situation convient mieux à la cascade qu'à Agile ?", options: ["Une nouvelle appli dont les besoins des utilisateurs sont flous", "Un travail bien connu qui ne changera pas, comme couler des fondations", "Un test marketing aux résultats inconnus", "Un projet où les retours changent le plan chaque semaine"], answer: 1, why: "La cascade marche quand le travail est bien connu et stable." },
      { objective: "O1", q: "Scrum et Kanban sont :", options: ["Deux façons courantes de pratiquer Agile", "Deux langages de programmation", "Deux examens de certification", "Deux types de budget"], answer: 0, why: "Ce sont deux méthodes Agile populaires." },
      { objective: "O2", q: "Qui aide l'équipe à bien utiliser Scrum et lève les obstacles ?", options: ["Le Product Owner", "Le comptable", "Le client", "Le Scrum Master"], answer: 3, why: "C'est le rôle du Scrum Master." },
      { objective: "O2", q: "Dans Scrum, « Developers » désigne :", options: ["Seulement les programmeurs", "Les managers", "Les promoteurs immobiliers", "Les personnes qui font le travail, quel qu'il soit"], answer: 3, why: "Les Developers sont ceux qui font le travail du sprint." },
      { objective: "O2", q: "Combien de temps dure la Daily Scrum ?", options: ["Une journée entière", "Deux heures", "15 minutes", "Il n'y a pas de limite"], answer: 2, why: "Le Guide Scrum fixe la Daily Scrum à 15 minutes." },
      { objective: "O2", q: "Lequel n'est PAS un des trois artefacts de Scrum ?", options: ["Product Backlog", "Rapport annuel", "Increment", "Sprint Backlog"], answer: 1, why: "Les artefacts sont le Product Backlog, le Sprint Backlog et l'Increment." },
      { objective: "O3", q: "Complétez le modèle de user story : « En tant que ___, je veux ___ ... »", options: ["« ...afin de [raison] »", "« ...pour vendredi »", "« ...gratuitement »", "« ...sinon gare »"], answer: 0, why: "Le modèle se termine par la raison : afin de..." },
      { objective: "O3", q: "Les critères d'acceptation sont :", options: ["Les vérifications qui disent qu'une story est terminée", "Les candidatures de l'équipe", "Le prix du projet", "La liste des membres de l'équipe"], answer: 0, why: "Ils définissent quand une story compte comme terminée." },
      { objective: "O3", q: "Un assistant d'IA rédige dix user stories pour vous. Quel est votre rôle ?", options: ["Les utiliser sans les lire", "Demander à l'IA de mener le sprint", "Supprimer le backlog", "Les vérifier, les corriger et décider de l'ordre"], answer: 3, why: "L'IA peut rédiger ; vous vérifiez le travail et fixez les priorités." },
      { objective: "O3", q: "Les éléments en haut du backlog doivent être :", options: ["Les plus faciles", "Choisis au hasard", "Les plus utiles et urgents", "Les plus anciens"], answer: 2, why: "Le backlog est classé par valeur et par urgence." },
      { objective: "O4", q: "À quelles trois questions répond la Sprint Planning ?", options: ["Qui, où, quand", "Pourquoi, quoi et comment", "Coût, prix, bénéfice", "Début, arrêt, pause"], answer: 1, why: "Pourquoi (l'objectif), quoi (les stories), comment (les tâches)." },
      { objective: "O4", q: "Un objectif de sprint ressemble le plus à quelle idée militaire ?", options: ["L'inspection de l'uniforme", "L'intention du chef", "Le grade et la solde", "La demande de permission"], answer: 1, why: "Les deux disent ce qui compte si les plans changent." },
      { objective: "O4", q: "Les tâches d'un sprint devraient idéalement durer :", options: ["Une journée ou moins", "Un mois chacune", "Un an", "Aucun temps"], answer: 0, why: "Les petites tâches montrent les progrès et révèlent tôt les problèmes." },
      { objective: "O5", q: "Quelles colonnes a un tableau des tâches de base ?", options: ["Rouge, blanc, bleu", "Oui et Non", "Lundi à vendredi", "À faire, En cours, Terminé"], answer: 3, why: "Ces trois colonnes montrent où en est chaque tâche." },
      { objective: "O5", q: "Vous avez cinq cartes En cours et une limite WIP de deux. Que faites-vous ?", options: ["Commencer une sixième tâche", "Supprimer la limite", "Finir le travail avant de commencer autre chose", "Les déplacer toutes dans Terminé"], answer: 2, why: "Une limite WIP veut dire que finir passe avant commencer." },
      { objective: "O6", q: "Pendant la Sprint Review, vous devez montrer :", options: ["Rien ; c'est une réunion de planification", "Du travail à moitié fait comme s'il était fini", "Seulement le travail qui respecte ses critères d'acceptation", "Les emplois du temps personnels de l'équipe"], answer: 2, why: "On ne montre que le travail terminé, pour que les retours soient honnêtes." },
      { objective: "O6", q: "Les retours de la Sprint Review vont :", options: ["À la poubelle", "Dans le backlog", "Seulement dans la rétrospective", "Chez un avocat"], answer: 1, why: "Les nouveaux retours deviennent des éléments du backlog." },
      { objective: "O6", q: "Garder / Arrêter / Essayer est un format pour :", options: ["La rétrospective", "Le budget", "Le recrutement", "Les user stories"], answer: 0, why: "C'est une façon simple de mener une rétrospective." },
      { objective: "O6", q: "Où confirmer les conditions et le tarif actuels d'une certification Agile ?", options: ["Un message au hasard sur un forum", "Une publicité sur les réseaux sociaux", "Une seule réponse d'un chat d'IA", "Le site officiel de l'organisme certificateur, comme Scrum Alliance ou Scrum.org"], answer: 3, why: "Les conditions et les tarifs changent ; le site officiel fait foi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      6,
      7,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Backlog de user stories",
        objective: "O3",
        notYet: "Moins de huit stories, ou des éléments écrits comme de simples tâches sans « afin de ».",
        meets: "Au moins huit stories sur le modèle, chacune avec deux ou trois critères d'acceptation, classées par priorité.",
        exceeds: "Les grosses stories sont découpées et l'apprenant sait expliquer pourquoi la première story est en tête."
      },
      {
        name: "Plan de sprint",
        objective: "O4",
        notYet: "Pas d'objectif de sprint, ou plus de travail que le temps disponible.",
        meets: "Un objectif de sprint en une phrase, des stories prises en haut du backlog et des tâches d'une journée ou moins qui tiennent dans les heures disponibles.",
        exceeds: "Garde un peu de marge et dit ce qui serait retiré en premier."
      },
      {
        name: "Tableau des tâches",
        objective: "O5",
        notYet: "Le tableau a été créé, mais les cartes n'ont pas bougé pendant la semaine.",
        meets: "Des colonnes À faire, En cours et Terminé, une limite WIP et des cartes déplacées chaque jour.",
        exceeds: "Les blocages ont été notés avec le nom de la personne qui les a levés."
      },
      {
        name: "Revue et rétrospective",
        objective: "O6",
        notYet: "La revue ou la rétrospective manque.",
        meets: "Une revue écrite avec les retours ajoutés au backlog, et les listes Garder, Arrêter et Essayer.",
        exceeds: "Une amélioration est déjà une tâche du sprint suivant."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui ajoutent une expérience Agile ou Scrum à leur CV ou à leur profil LinkedIn dans les 30 jours",
      "Apprenants qui postulent ou commencent un poste en gestion de projet, de programmes ou en opérations dans les 90 jours",
      "Apprenants qui passent ensuite une certification Agile comme Certified ScrumMaster ou Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un outil de tableau des tâches gratuit (Trello, Microsoft Planner ou GitHub Projects), un tableur, ou des post-it sur un mur",
      "Un téléphone ou un ordinateur ; un assistant IA est facultatif pour rédiger des stories",
      "Du papier et un stylo, ou un document, pour le backlog, le plan de sprint, la revue et la rétrospective",
      "Environ 60 minutes pour les leçons et les contrôles, plus une semaine pour mener le sprint"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; montrez un exemple de tableau sur un écran partagé.",
      "Reliez chaque idée à l'expérience militaire : l'objectif de sprint et l'intention du chef, la rétrospective et le retour d'expérience.",
      "Faites choisir aux apprenants un vrai projet personnel ou de quartier pour que le sprint soit un vrai travail.",
      "Organisez un court point de groupe pendant la semaine du sprint pour que les apprenants pratiquent le point quotidien à voix haute.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
