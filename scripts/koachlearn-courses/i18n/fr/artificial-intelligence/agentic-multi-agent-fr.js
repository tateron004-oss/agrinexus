"use strict";

// Koach Learn course, French translation of artificial-intelligence/agentic-multi-agent.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code, JSON keys and status values ('approved', 'needs_human', ...) are kept exactly as in the English course.

module.exports = {
  id: "agentic-multi-agent-fr",
  lang: "fr",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Systèmes multi-agents",
  skills: "Décider quand un seul agent suffit, Choisir un modèle d'organisation : chaîne, orchestrateur, relecteur, Rédiger des rôles et des transmissions, Partager l'état en sécurité, Arrêter les boucles de relecture, Comparer avec un agent unique",
  outcome: "concevoir et construire en Python un petit système multi-agents, un agent rédacteur et un agent relecteur avec des rôles clairs, une transmission écrite, un état partagé et une limite de tours, et montrer par un test simple s'il fait mieux qu'un agent unique.",
  about: [
    "Voici le cours 5 du programme Concevoir, construire et déployer des agents IA autonomes. Un système multi-agents répartit un travail entre plusieurs agents, chacun avec son rôle, ses instructions et ses outils, comme une équipe se partage le travail. Bien fait, il peut améliorer la qualité. Mal fait, il multiplie les coûts, la confusion et les erreurs.",
    "Le chapitre 1 porte sur la conception : quand utiliser plusieurs agents, les modèles d'organisation courants (chaîne, orchestrateur et exécutants, rédacteur et relecteur), et comment rédiger les rôles et les transmissions. Le chapitre 2 porte sur la construction : l'état partagé, l'arrêt des allers-retours sans fin, le maintien des humains aux commandes, et le test pour savoir si l'équipe fait vraiment mieux qu'un seul agent.",
    "Vous réutiliserez votre boucle Python et votre fonction d'aide ask_model du cours 3. Le code apparaît sous forme de courtes lignes dans les leçons. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Construisez en Python un système à deux agents : un agent rédacteur rédige une description de produit d'un paragraphe à partir d'une courte fiche de faits, et un agent relecteur la vérifie avec une liste de contrôle écrite (n'utilise que des faits de la fiche, moins de 80 mots, aucune affirmation comme « le meilleur » ou « garanti ») et renvoie du JSON : approuver ou réviser, avec les raisons. Faites passer le travail par un dictionnaire d'état partagé, arrêtez après 3 tours au maximum, et affichez le journal complet. Puis passez les 3 mêmes fiches de faits à un agent unique et écrivez lequel a fait mieux et pourquoi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes du programme Concevoir, construire et déployer des agents IA autonomes qui ont terminé les cours 1 à 4 : propriétaires de petites entreprises, personnes en reconversion, étudiants et employés qui veulent savoir quand et comment utiliser une équipe d'agents.",
    startingPoint: "Ils savent construire en Python un agent unique avec des outils, la vérification des arguments, une limite d'étapes, un journal d'exécution et une approbation pour les actions d'écriture. Ils n'ont pas encore réparti une tâche entre plusieurs agents.",
    gap: "Les systèmes multi-agents sont à la mode, mais mal faits, ils multiplient le coût, la confusion et les erreurs. Les apprenants doivent décider quand une équipe en vaut la peine, concevoir des rôles et des transmissions clairs, arrêter les boucles sans fin, garder une personne aux commandes et prouver par un test si l'équipe fait mieux qu'un seul agent.",
    constraints: [
      "Niveau de lecture : mots simples ; le code est montré en courtes lignes à copier",
      "Appareils : un ordinateur avec un navigateur web ; les offres d'API gratuites limitent le nombre d'appels au modèle",
      "Les exercices utilisent seulement des fiches produit inventées",
      "Chaque boucle a une limite de tours et confie à une personne le travail non résolu",
      "Temps : des leçons courtes avec un exercice pratique chacune"
    ],
    prerequisites: "Les cours 3 et 4 de Concevoir, construire et déployer des agents IA autonomes (« Construire des agents IA » et « Outils des agents IA et automatisation »)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour une tâche que vous pourriez automatiser", action: "décider si elle demande un seul agent ou une équipe, avec le test d'embauche", standard: "avec une raison d'une phrase pour chaque tâche" },
    { id: "O2", condition: "Pour une tâche qui demande une équipe", action: "choisir un modèle d'organisation (chaîne, orchestrateur et exécutants, ou rédacteur et relecteur) et dessiner comment le travail passe d'un agent à l'autre", standard: "en indiquant ce qui passe le long de chaque flèche" },
    { id: "O3", condition: "Pour chaque agent de l'équipe", action: "rédiger une consigne de rôle et un format de transmission en JSON", standard: "avec une seule tâche par agent et une liste de contrôle du relecteur vérifiable" },
    { id: "O4", condition: "Dans votre code Python", action: "garder le travail de l'équipe dans un seul état partagé que seul votre code met à jour", standard: "en notant l'état dans le journal après chaque étape" },
    { id: "O5", condition: "Pour une boucle rédacteur-relecteur", action: "ajouter une limite de tours et confier le travail non résolu à une personne", standard: "en s'arrêtant avec needs_human après 3 tours au plus" },
    { id: "O6", condition: "Avec les mêmes entrées de test", action: "comparer l'équipe à un agent unique de référence sur la qualité et le nombre d'appels au modèle", standard: "en notant les deux avec la même liste de contrôle et en choisissant le plus simple en cas d'égalité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Concevoir une équipe d'agents",
      lessons: [
        {
          objectives: ["O1"],
          title: "Quand un agent suffit, et quand il ne suffit pas",
          minutes: 5,
          goal: "Décider si une tâche a besoin de plus d'un agent.",
          text: [
            "Commencez avec un seul agent. Chaque agent en plus ajoute des appels au modèle (coût et temps), des transmissions (des endroits où l'information se perd) et plus de choses à tester. Beaucoup de tâches qui semblent demander une équipe marchent très bien avec un seul agent bien instruit et de bons outils.",
            "Envisagez plusieurs agents quand : le travail demande des compétences nettement différentes (rechercher, puis rédiger, puis vérifier) ; une seule consigne devient trop longue et confuse ; vous voulez une vérification indépendante, car un relecteur avec des instructions neuves repère des erreurs que le rédacteur ne voit pas ; ou des parties peuvent tourner en même temps.",
            "Un test utile : si vous embaucheriez deux personnes différentes pour ce travail, deux agents peuvent aider. Si une seule personne pouvait le faire avec une liste de contrôle, un seul agent avec une liste de contrôle est sans doute mieux."
          ],
          words: [["Système multi-agents", "plusieurs agents IA, chacun avec son rôle, qui travaillent ensemble sur un même travail."], ["Transmission", "le passage du travail et des informations d'un agent à un autre (handoff)."], ["Surcoût", "le coût et l'effort en plus qu'ajoute une conception."]],
          slides: [
            { title: "Commencez avec un seul agent", bullets: ["Chaque agent en plus ajoute coût et temps", "Chaque transmission peut perdre de l'information", "Plus de pièces à tester"] },
            { title: "Envisagez une équipe quand", bullets: ["Le travail demande des compétences différentes", "Une consigne devient trop longue et confuse", "Vous voulez une vérification indépendante", "Des parties peuvent tourner en même temps"] },
            { title: "Le test de l'embauche", bullets: ["Deux personnes différentes ? Peut-être deux agents", "Une personne avec une liste ? Un seul agent"] }
          ],
          tryIt: "Listez trois travaux que vous pourriez automatiser. Pour chacun, écrivez « un agent » ou « équipe » et une phrase qui explique pourquoi, avec le test de l'embauche.",
          youCanNow: "décider quand une tâche a vraiment besoin de plus d'un agent.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le test d'embauche ?", options: ["Se demander si une personne réussirait un entretien d'embauche", "Tester si une entreprise peut embaucher un modèle", "Se demander si vous embaucheriez deux personnes différentes pour cette tâche", "Compter le nombre d'outils dont une tâche a besoin"], answer: 2, why: "Si vous n'embaucheriez pas deux personnes, un seul agent suffit en général." },
            { objective: "O1", q: "Une tâche consiste à classer des messages en quatre catégories avec une liste de contrôle. Que construiriez-vous ?", options: ["Un seul agent avec des instructions claires", "Une équipe de quatre agents, un par catégorie", "Un orchestrateur avec des exécutants", "Un rédacteur et un relecteur"], answer: 0, why: "Une tâche simple et bien définie n'a pas besoin du coût et des transmissions en plus d'une équipe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Modèles courants : chaîne, orchestrateur, relecteur",
          minutes: 6,
          goal: "Choisir un modèle d'organisation multi-agents adapté à une tâche.",
          text: [
            "La chaîne (pipeline) : les agents travaillent dans un ordre fixe, chacun passant son résultat au suivant, comme une chaîne de montage : rechercher, puis rédiger, puis mettre en forme. Simple à construire et à déboguer, car on sait toujours qui agit ensuite.",
            "L'orchestrateur et les exécutants : un agent (l'orchestrateur) découpe l'objectif en parties, confie chaque partie à un agent exécutant, puis rassemble les résultats. C'est souple, mais l'orchestrateur peut mal découper le travail, et plus de liberté veut dire plus de choses à vérifier.",
            "Le rédacteur et le relecteur : un agent produit, un second juge avec une liste de contrôle et soit approuve, soit renvoie le travail avec les raisons. C'est le modèle le plus utile pour débuter, car il ajoute une vérification de qualité indépendante. Il lui faut une limite de tours pour que les deux ne se disputent jamais à l'infini."
          ],
          words: [["Chaîne (pipeline)", "des agents qui travaillent dans un ordre fixe, chacun passant le travail au suivant."], ["Orchestrateur", "un agent qui découpe un objectif en tâches et les confie à d'autres agents."], ["Agent relecteur", "un agent qui vérifie le travail d'un autre agent avec des règles claires."]],
          slides: [
            { title: "Chaîne", bullets: ["Ordre fixe : rechercher, rédiger, mettre en forme", "Facile à construire et à déboguer"] },
            { title: "Orchestrateur et exécutants", bullets: ["Un agent découpe l'objectif", "Les exécutants font les parties", "Souple, mais plus dur à vérifier"] },
            { title: "Rédacteur et relecteur", bullets: ["L'un produit, l'autre juge avec une liste", "Approuver, ou renvoyer avec les raisons", "Il faut une limite de tours"] }
          ],
          tryIt: "Pour le travail « équipe » de la leçon 1, dessinez les agents sous forme de boîtes reliées par des flèches (sur papier, c'est très bien). Indiquez de quel modèle il s'agit et ce qui passe sur chaque flèche.",
          youCanNow: "choisir entre une chaîne, un orchestrateur avec des exécutants, et un rédacteur avec un relecteur.",
          quickCheck: [
            { objective: "O2", q: "Que fait l'orchestrateur dans le modèle orchestrateur et exécutants ?", options: ["Il vérifie chaque brouillon avec une liste de contrôle", "Il découpe l'objectif et confie des parties aux exécutants", "Il enregistre des fichiers sur le disque", "Il ne tourne qu'à la fin"], answer: 1, why: "L'orchestrateur divise le travail et transmet des parties aux agents exécutants." },
            { objective: "O2", q: "Votre tâche suit toujours le même ordre : recherche, puis rédaction, puis mise en forme. Quel modèle convient ?", options: ["Rédacteur et relecteur", "Orchestrateur et exécutants", "Aucun modèle ; utilisez trois chatbots", "Chaîne"], answer: 3, why: "Un ordre d'étapes fixe, c'est une chaîne, qui est aussi facile à déboguer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rédiger les rôles et les transmissions",
          minutes: 5,
          goal: "Rédiger une consigne de rôle pour chaque agent et un format de transmission entre eux.",
          text: [
            "Chaque agent reçoit sa propre courte consigne système : qui il est, son travail unique, ses outils (seulement ceux dont il a besoin), et son format de sortie. Le rédacteur n'a pas besoin de toute la liste de contrôle du relecteur ; le relecteur n'a besoin d'aucun outil de rédaction.",
            "La transmission est le message échangé entre agents. Rendez-la structurée, pas bavarde : {\"draft\": \"...\", \"facts_used\": [...]} du rédacteur vers le relecteur, et {\"decision\": \"approve\" ou \"revise\", \"reasons\": [...]} en retour. Des transmissions structurées montrent clairement ce qui a été passé et sont faciles à vérifier par le code.",
            "Donnez au relecteur une liste de contrôle, pas une impression. « Est-ce bien ? » obtient un simple accord. « Chaque fait figure-t-il dans la fiche ? Est-ce sous les 80 mots ? Les mots meilleur et garanti sont-ils évités ? » obtient une vraie vérification."
          ],
          steps: ["Rédigez une consigne de rôle pour chaque agent : rôle, travail unique, outils, format de sortie.", "Donnez à chaque agent seulement les outils dont il a besoin.", "Définissez la transmission en JSON avec des clés fixes.", "Rédigez la liste de contrôle du relecteur sous forme de questions oui/non."],
          words: [["Consigne de rôle", "la consigne système qui donne à un agent son travail et ses règles."], ["Liste de contrôle", "une liste de vérifications précises oui/non qui servent à juger un travail."]],
          slides: [
            { title: "Une consigne de rôle par agent", bullets: ["Qui il est et son travail unique", "Seulement les outils dont il a besoin", "Son format de sortie"] },
            { title: "Transmissions structurées", bullets: ["Rédacteur -> relecteur : brouillon et faits utilisés", "Relecteur -> rédacteur : décision et raisons", "Le code peut vérifier chaque transmission"] },
            { title: "Une liste de contrôle pour le relecteur", bullets: ["« Est-ce bien ? » obtient un accord facile", "Des questions oui/non donnent une vraie relecture"] }
          ],
          tryIt: "Rédigez la consigne de rôle du rédacteur, celle du relecteur avec une liste de contrôle de 3 points, et les deux formats JSON de transmission pour le système de l'exercice final.",
          youCanNow: "rédiger des consignes de rôle et des transmissions structurées pour une équipe d'agents.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui a sa place dans une consigne de rôle ?", options: ["La tâche unique de l'agent, ses outils et son format de sortie", "Les instructions de tous les autres agents", "Votre clé API", "La liste de toutes les exécutions passées"], answer: 0, why: "Une consigne de rôle garde chaque agent concentré sur sa propre tâche et son format." },
            { objective: "O3", q: "On dit à votre relecteur : « Vérifie si le brouillon est bon. » Que changeriez-vous ?", options: ["Rien, c'est court", "Lui donner des outils d'écriture pour corriger les brouillons", "Remplacer cela par une liste de questions précises auxquelles il peut répondre par oui ou non", "Le laisser décider de ses propres règles"], answer: 2, why: "Des questions de relecture vagues mènent à approuver trop facilement ; une liste de contrôle donne une vraie vérification." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir une équipe d'agents",
        questions: [
          { objective: "O1", q: "Quel est le meilleur point de départ pour la plupart des nouveaux projets d'agents ?", options: ["Cinq agents", "Un orchestrateur avec dix exécutants", "Un seul agent avec de bons outils", "Aucun agent"], answer: 2, why: "Les agents en plus ajoutent coût et complexité ; commencez simple." },
          { objective: "O1", q: "Quelle est une bonne raison d'ajouter un agent relecteur ?", options: ["Obtenir une vérification indépendante avec des règles claires", "Faire paraître le projet plus gros", "Utiliser plus de tokens", "Parce que deux, c'est toujours mieux"], answer: 0, why: "Des instructions neuves et une liste de contrôle repèrent des erreurs que le rédacteur ne voit pas." },
          { objective: "O2", q: "Rechercher, puis rédiger, puis mettre en forme, dans un ordre fixe, c'est :", options: ["Un schéma", "Un orchestrateur", "Un déclencheur", "Une chaîne"], answer: 3, why: "Une chaîne fait passer le travail dans un ordre fixe." },
          { objective: "O3", q: "Quelle transmission est la plus facile à vérifier par le code ?", options: ["« Voilà ce que j'en pense, j'espère que ça aide ! »", "{\"decision\": \"revise\", \"reasons\": [\"plus de 80 mots\"]}", "Un long paragraphe", "Une image"], answer: 1, why: "Un JSON structuré a des clés fixes que le code peut lire." },
          { objective: "O3", q: "Quelle instruction de relecture donne la vérification la plus réelle ?", options: ["« Est-ce bien ? »", "« Sois critique. »", "« Est-ce que ça te plaît ? »", "« Chaque fait est-il dans la fiche, et est-ce sous les 80 mots ? »"], answer: 3, why: "Des vérifications précises oui/non évitent l'accord facile." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire et tester l'équipe",
      lessons: [
        {
          objectives: ["O4"],
          title: "L'état partagé : un seul endroit pour le travail",
          minutes: 5,
          goal: "Garder le travail d'une équipe dans un seul état partagé que chaque agent lit.",
          text: [
            "L'état partagé est un endroit unique où vit le travail de l'équipe, géré par votre code et non par un agent. En Python, un dictionnaire convient : state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Chaque agent reçoit seulement les parties dont il a besoin et renvoie une transmission ; votre code vérifie la transmission et met à jour l'état. Le rédacteur lit les faits et la dernière relecture ; le relecteur lit les faits et le brouillon. Aucun agent ne modifie l'état directement.",
            "Cela garde la vérité au même endroit, rend le journal facile (enregistrez l'état après chaque étape), et empêche les agents de se passer des copies qui divergent peu à peu. Si la sortie d'un agent est mauvaise, votre code peut la refuser avant qu'elle n'atteigne l'agent suivant."
          ],
          steps: ["Créez un dictionnaire d'état avec chaque champ dont l'équipe a besoin.", "Donnez à chaque agent seulement les champs dont il a besoin.", "Vérifiez chaque transmission dans le code avant de mettre à jour l'état.", "Enregistrez une copie de l'état dans le journal après chaque étape."],
          words: [["État partagé", "le relevé unique du travail de l'équipe, que garde le code et que lit chaque agent."], ["Divergence", "quand des copies d'une information deviennent peu à peu différentes les unes des autres."]],
          slides: [
            { title: "Un seul endroit pour le travail", bullets: ["state = {facts, draft, reviews, round, status}", "Géré par votre code, pas par un agent"] },
            { title: "Les agents lisent, le code écrit", bullets: ["Chaque agent reçoit seulement ses champs", "Le code vérifie la transmission, puis met à jour"] },
            { title: "Pourquoi cela aide", bullets: ["Une seule vérité, pas de copies divergentes", "Journal facile : état enregistré à chaque étape", "Mauvaise sortie bloquée avant l'agent suivant"] }
          ],
          tryIt: "Créez le dictionnaire d'état pour l'exercice final. Écrivez deux fonctions, run_writer(state) et run_reviewer(state), qui appellent chacune ask_model avec leur consigne de rôle et renvoient le JSON lu, sans modifier elles-mêmes l'état.",
          youCanNow: "garder le travail d'un système multi-agents dans un seul état partagé contrôlé par votre code.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que l'état partagé dans un système multi-agents ?", options: ["Les notes privées de chaque agent", "Un seul endroit, géré par votre code, qui contient le travail de l'équipe", "La mémoire du modèle d'un jour à l'autre", "Un mot de passe partagé"], answer: 1, why: "Un seul état partagé mis à jour par votre code fait travailler chaque agent à partir des mêmes faits." },
            { objective: "O4", q: "Le rédacteur et le relecteur gardent chacun leur copie du brouillon, et les copies commencent à différer. Que feriez-vous ?", options: ["Laisser chaque agent mettre à jour l'état directement", "Ajouter un troisième agent pour les fusionner", "L'ignorer si la réponse finale a l'air correcte", "Garder un seul état partagé que seul votre code met à jour après avoir vérifié chaque transmission"], answer: 3, why: "Des copies séparées divergent ; un seul état partagé et vérifié l'empêche." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Arrêter les boucles et garder les humains aux commandes",
          minutes: 5,
          goal: "Ajouter une limite de tours et un recours humain à une boucle rédacteur-relecteur.",
          text: [
            "Deux agents peuvent tourner en boucle à l'infini : le relecteur trouve toujours quelque chose, le rédacteur change toujours quelque chose. Fixez MAX_ROUNDS = 3. Si le relecteur n'a pas approuvé d'ici là, arrêtez avec le statut 'needs_human' et montrez le dernier brouillon et les raisons.",
            "Surveillez deux autres échecs d'équipe. Le tampon automatique : le relecteur approuve tout, souvent parce que sa liste de contrôle est vague. Le ping-pong : le rédacteur corrige un problème et en fait revenir un ancien. Lisez le journal pour repérer les deux.",
            "Gardez les humains maîtres du résultat. L'équipe produit un brouillon et une relecture ; une personne approuve tout ce qui sera publié, envoyé ou utilisé pour prendre une décision. Plus d'agents ne supprime pas ce point de contrôle ; cela le rend encore plus important."
          ],
          steps: ["Fixez MAX_ROUNDS.", "Boucle : le rédacteur rédige, le relecteur décide.", "Si approbation : statut 'approved', arrêt.", "Si révision : renvoyez les raisons au rédacteur.", "À la limite : statut 'needs_human', montrez le brouillon et les raisons."],
          words: [["Tour", "un cycle de rédaction et de relecture."], ["Tampon automatique", "tout approuver sans vraiment vérifier (rubber-stamping)."], ["Recours humain", "confier un problème à une personne quand le système ne peut pas le régler (escalade)."]],
          slides: [
            { title: "Deux agents peuvent boucler sans fin", bullets: ["MAX_ROUNDS = 3", "Pas d'approbation d'ici là : 'needs_human'"] },
            { title: "Deux échecs d'équipe", bullets: ["Tampon automatique : tout est approuvé", "Ping-pong : les anciens problèmes reviennent", "Lisez le journal pour les deux"] },
            { title: "Les humains restent aux commandes", bullets: ["L'équipe rédige et relit", "Une personne approuve ce qui est publié ou envoyé"] }
          ],
          tryIt: "Écrivez la boucle rédacteur-relecteur avec MAX_ROUNDS = 3. Testez-la avec une fiche de faits où le rédacteur risque d'exagérer. Puis testez la limite en rendant la liste de contrôle du relecteur impossible (« moins de 5 mots ») et vérifiez qu'elle s'arrête avec needs_human.",
          youCanNow: "arrêter le ping-pong entre agents avec une limite de tours et confier le travail non résolu à une personne.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le ping-pong dans une boucle rédacteur-relecteur ?", options: ["Corriger un problème en fait revenir un ancien, tour après tour", "Le relecteur approuve chaque brouillon", "Deux agents tournent en même temps", "Une boucle rapide qui finit en un tour"], answer: 0, why: "Le ping-pong, ce sont des allers-retours sans fin : c'est pourquoi la boucle a besoin d'une limite de tours." },
            { objective: "O5", q: "Le relecteur n'a toujours pas approuvé après 3 tours. Que doit faire le système ?", options: ["Approuver quand même le dernier brouillon", "Recommencer au tour 1", "S'arrêter avec needs_human et montrer le brouillon et les raisons", "Monter la limite à 10 tours"], answer: 2, why: "Le travail non résolu va à une personne, avec tout ce qu'il lui faut pour décider." }
          ]
        },
        {
          objectives: ["O6"],
          title: "L'équipe fait-elle mieux qu'un seul agent ? Le tester",
          minutes: 6,
          goal: "Comparer un système multi-agents à un agent unique sur les mêmes tests.",
          text: [
            "Une équipe ne vaut la peine que si elle fait mieux. Testez-la comme vous avez testé les consignes au cours 2 : les mêmes entrées, un score clair et une comparaison. Préparez trois fiches de faits, passez-les à l'équipe et à un agent unique qui a la liste de contrôle dans sa propre consigne.",
            "Notez vous-même chaque sortie avec la liste de contrôle du relecteur (pas avec l'agent relecteur), et comptez les appels au modèle de chaque approche. Les appels au modèle représentent le coût et le temps.",
            "Écrivez le résultat honnêtement. Si l'agent unique a obtenu le même score avec trois fois moins d'appels, utilisez l'agent unique. Si l'équipe a repéré de vraies erreurs que l'agent unique a manquées, les appels en plus vous ont acheté de la qualité. Les deux réponses sont un bon résultat d'ingénierie."
          ],
          steps: ["Préparez trois fiches de faits de test.", "Passez chacune à l'équipe et à un agent unique.", "Notez vous-même chaque sortie avec la liste de contrôle.", "Comptez les appels au modèle de chaque approche.", "Écrivez quelle approche gagne et pourquoi."],
          words: [["Référence", "la version simple à laquelle on compare, ici un agent unique (baseline)."], ["Appel au modèle", "une demande au modèle ; plus d'appels veut dire plus de coût et de temps."]],
          slides: [
            { title: "Une équipe doit mériter sa place", bullets: ["Mêmes entrées, score clair, comparaison", "Référence : un agent avec la liste de contrôle"] },
            { title: "Mesurer deux choses", bullets: ["Qualité : notez vous-même avec la liste", "Coût : comptez les appels au modèle"] },
            { title: "Rendre compte honnêtement", bullets: ["Même score, moins d'appels ? Un seul agent", "Vraies erreurs repérées ? L'équipe le mérite"] }
          ],
          tryIt: "Exercice final : terminez le système rédacteur-relecteur avec un état partagé, des transmissions structurées et MAX_ROUNDS = 3, lancez-le sur trois fiches de faits, lancez un agent unique de référence sur les mêmes fiches, et écrivez une courte comparaison de la qualité et des appels au modèle.",
          youCanNow: "construire un petit système multi-agents et prouver s'il fait mieux qu'un agent unique.",
          quickCheck: [
            { objective: "O6", q: "Dans ce cours, qu'est-ce qu'une référence (baseline) ?", options: ["Le premier brouillon du rédacteur", "Un agent unique auquel vous comparez l'équipe", "La note la plus basse permise", "La limite de tours"], answer: 1, why: "La comparaison avec un agent unique montre si l'équipe vaut son coût en plus." },
            { objective: "O6", q: "L'équipe obtient une note un peu plus haute qu'un seul agent mais fait trois fois plus d'appels au modèle. Que feriez-vous ?", options: ["Toujours choisir l'équipe, car les équipes sont meilleures", "Arrêter de tester", "Ajouter des agents pour monter la note", "Peser si ce petit gain vaut le coût et le temps en plus, et écrire pourquoi"], answer: 3, why: "Les appels au modèle représentent du coût et du temps : le choix met la qualité en balance avec eux." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire et tester l'équipe",
        questions: [
          { objective: "O4", q: "Qui doit mettre à jour l'état partagé ?", options: ["N'importe quel agent, quand il veut", "Seulement le relecteur", "Votre code, après avoir vérifié chaque transmission", "Personne"], answer: 2, why: "Un état géré par le code garde une seule vérité et bloque les mauvaises sorties." },
          { objective: "O5", q: "Le relecteur n'a pas approuvé après 3 tours. Que doit-il se passer ?", options: ["Arrêter avec 'needs_human' et montrer le brouillon et les raisons", "L'approuver automatiquement", "Continuer jusqu'à ce qu'il approuve", "Supprimer le brouillon"], answer: 0, why: "Confiez-le à une personne au lieu de boucler." },
          { objective: "O5", q: "Le relecteur approuve tous les brouillons, même mauvais. C'est :", options: ["Le ping-pong", "Le tampon automatique", "Une chaîne", "L'état partagé"], answer: 1, why: "Des listes de contrôle vagues mènent à tout approuver." },
          { objective: "O6", q: "Comment noter les sorties de l'équipe et de l'agent unique ?", options: ["Les noter soi-même avec la même liste de contrôle", "Demander à l'agent relecteur", "Choisir la plus longue", "Compter seulement les mots"], answer: 0, why: "Un score indépendant et régulier rend la comparaison juste." },
          { objective: "O6", q: "L'agent unique obtient le même score que l'équipe avec trois fois moins d'appels. Que faire ?", options: ["Utiliser l'équipe quand même", "Ajouter plus d'agents", "Arrêter de tester", "Utiliser l'agent unique"], answer: 3, why: "Même qualité pour moins cher : la conception la plus simple gagne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Systèmes multi-agents",
    questions: [
      { objective: "O1", q: "Un système multi-agents, c'est :", options: ["Un agent avec une longue consigne", "Plusieurs agents avec leur propre rôle qui travaillent sur un même travail", "Un chatbot avec beaucoup d'utilisateurs", "Une base de données"], answer: 1, why: "Chaque agent a son rôle, ses instructions et ses outils." },
      { objective: "O1", q: "Chaque agent en plus ajoute :", options: ["De la qualité gratuite", "Rien", "Du coût, des transmissions et du travail de test", "Moins de temps"], answer: 2, why: "Plus d'agents veut dire plus d'appels et plus à vérifier." },
      { objective: "O1", q: "Le test de l'embauche demande :", options: ["L'agent est-il aimable ?", "Combien coûte le modèle ?", "Embaucheriez-vous deux personnes différentes pour ce travail ?", "La consigne est-elle longue ?"], answer: 2, why: "Des compétences nettement différentes suggèrent des agents séparés." },
      { objective: "O1", q: "Quelle tâche n'a probablement besoin que d'un seul agent ?", options: ["Classer des messages en quatre catégories avec une liste de contrôle", "Rechercher, rédiger et vérifier un long rapport", "Lancer dix recherches à la fois", "Rédiger des annonces et les faire relire de façon indépendante"], answer: 0, why: "Une personne avec une liste de contrôle pourrait le faire." },
      { objective: "O2", q: "Dans le modèle orchestrateur, l'orchestrateur :", options: ["Approuve son propre travail", "Met seulement le texte en forme", "Stocke la clé API", "Découpe l'objectif et confie les parties aux exécutants"], answer: 3, why: "Il planifie et délègue, puis rassemble les résultats." },
      { objective: "O2", q: "Pourquoi le modèle rédacteur-relecteur est-il bon pour débuter ?", options: ["Il n'a besoin d'aucune limite", "Il ajoute une vérification de qualité indépendante", "Il n'utilise pas de modèle", "Il ne boucle jamais"], answer: 1, why: "Un second agent avec une liste de contrôle repère des erreurs." },
      { objective: "O2", q: "Une chaîne est facile à déboguer parce que :", options: ["Elle tourne en secret", "Elle n'a pas d'agents", "Elle n'échoue jamais", "On sait toujours quel agent agit ensuite"], answer: 3, why: "L'ordre fixe rend chaque étape claire." },
      { objective: "O3", q: "Une consigne de rôle doit contenir :", options: ["Votre mot de passe", "La consigne complète de tous les autres agents", "Le travail unique de l'agent, ses outils et son format de sortie", "Une blague"], answer: 2, why: "Chaque agent n'a besoin que de son propre rôle et de ses règles." },
      { objective: "O3", q: "L'agent relecteur doit-il avoir des outils de rédaction ?", options: ["Non, seulement ce qu'il faut pour relire", "Oui, tous les outils", "Seulement l'outil d'e-mail", "Il doit avoir la clé API"], answer: 0, why: "Le moindre privilège s'applique à chaque agent." },
      { objective: "O3", q: "Les transmissions structurées sont utiles parce que :", options: ["Elles sont plus longues", "Le code peut vérifier ce qui a été passé", "Elles cachent l'information", "Les modèles ne savent pas lire le texte"], answer: 1, why: "Des clés fixes rendent les transmissions vérifiables." },
      { objective: "O3", q: "Un relecteur à qui l'on demande « Est-ce bien ? » va le plus souvent :", options: ["Être d'accord trop facilement", "Vérifier chaque fait", "Refuser de répondre", "Compter les mots exactement"], answer: 0, why: "Des questions vagues obtiennent une approbation vague." },
      { objective: "O4", q: "L'état partagé appartient à :", options: ["Le navigateur de l'utilisateur", "L'agent rédacteur", "Le fournisseur du modèle", "Votre code"], answer: 3, why: "Le code garde l'unique source de vérité." },
      { objective: "O4", q: "La divergence, c'est :", options: ["Le modèle qui devient plus rapide", "Des copies d'une information qui deviennent peu à peu différentes", "Une limite de tours", "Un déclencheur"], answer: 1, why: "L'état partagé empêche les copies divergentes." },
      { objective: "O4", q: "Pourquoi enregistrer l'état dans le journal après chaque étape ?", options: ["Pour sauter des tours", "Pour rendre le modèle plus intelligent", "Pour voir exactement comment le travail a changé", "Pour partager votre clé"], answer: 2, why: "Le journal montre chaque changement pour le débogage." },
      { objective: "O5", q: "MAX_ROUNDS empêche :", options: ["Tout appel au modèle", "Les bons brouillons", "Les allers-retours sans fin entre agents", "La tenue du journal"], answer: 2, why: "Une limite de tours met fin au ping-pong." },
      { objective: "O5", q: "Le ping-pong dans une boucle rédacteur-relecteur, c'est quand :", options: ["Corriger un problème en fait revenir un ancien", "Le relecteur approuve tout", "Le brouillon est parfait", "L'état est enregistré"], answer: 0, why: "Les agents s'échangent sans fin les mêmes problèmes." },
      { objective: "O5", q: "Le recours humain veut dire :", options: ["Supprimer le journal", "Ajouter plus d'agents", "Augmenter la limite de tours pour toujours", "Confier le travail non résolu à une personne"], answer: 3, why: "Les personnes règlent ce que le système ne peut pas régler." },
      { objective: "O5", q: "Avec plus d'agents, le point de contrôle humain devient :", options: ["Inutile", "Plus important", "Automatique", "Illégal"], answer: 1, why: "Plus de pièces mobiles, c'est plus de façons de mal tourner." },
      { objective: "O6", q: "Dans ce cours, la référence est :", options: ["La sortie la plus longue", "Le premier brouillon", "La clé API", "Un agent unique auquel on compare l'équipe"], answer: 3, why: "On compare l'équipe à l'option simple." },
      { objective: "O6", q: "On compte les appels au modèle parce qu'ils représentent :", options: ["Le nombre de mots", "La qualité", "Le coût et le temps", "Le nombre d'utilisateurs"], answer: 2, why: "Plus d'appels coûtent plus et prennent plus de temps." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Rôles clairs et liste de contrôle",
        objective: "O3",
        notYet: "Les rôles se chevauchent, ou le relecteur demande seulement si le brouillon est bon.",
        meets: "Le rédacteur et le relecteur ont chacun une tâche ; le relecteur vérifie les faits d'après la fiche, moins de 80 mots et aucune affirmation comme « le meilleur ».",
        exceeds: "Le relecteur n'a pas d'outils d'écriture et donne une raison pour chaque demande de révision."
      },
      {
        name: "Transmissions structurées",
        objective: "O3",
        notYet: "Les agents se passent du texte libre que le code ne peut pas vérifier.",
        meets: "Le relecteur renvoie du JSON avec approve ou revise et des raisons.",
        exceeds: "Le code vérifie chaque transmission avant de l'utiliser."
      },
      {
        name: "État partagé",
        objective: "O4",
        notYet: "Les agents gardent des copies séparées du travail.",
        meets: "Le travail passe par un seul dictionnaire d'état que le code met à jour.",
        exceeds: "L'état est noté dans le journal après chaque étape."
      },
      {
        name: "Limite de tours et escalade",
        objective: "O5",
        notYet: "Pas de limite de tours, ou la boucle peut tourner sans fin.",
        meets: "S'arrête après 3 tours au plus et affiche tout le journal.",
        exceeds: "Le travail non résolu s'arrête avec needs_human et montre le brouillon et les raisons."
      },
      {
        name: "Comparaison équitable",
        objective: "O6",
        notYet: "Pas d'agent unique de référence, ou des entrées différentes ont été utilisées.",
        meets: "Les 3 mêmes fiches ont été passées dans les deux, avec une note écrite sur lequel a fait mieux et pourquoi.",
        exceeds: "Les deux ont été notés avec la même liste de contrôle et les appels au modèle ont été comptés."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui passent au cours 6 du programme sur les agents dans les 30 jours",
      "Apprenants qui disent choisir un seul agent ou une équipe d'après un test plutôt qu'au hasard (enquête de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web et internet ; Colab ou Python sur votre propre ordinateur",
      "Votre boucle d'agent et votre fonction ask_model du cours 3, et une clé API de modèle",
      "Trois courtes fiches produit inventées",
      "Du papier pour dessiner les modèles d'organisation des agents",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites appliquer le test d'embauche à de vraies tâches avant que quiconque écrive du code.",
      "Donnez à tout le monde les trois mêmes fiches produit pour comparer dans le groupe les résultats de l'équipe et de l'agent unique.",
      "Surveillez le nombre d'appels au modèle avec les offres gratuites ; gardez la limite à 3 tours.",
      "Demandez aux apprenants de montrer une exécution qui s'est arrêtée avec needs_human, et discutez de ce que la personne déciderait.",
      "Notez l'exercice final avec la grille, et acceptez « un seul agent a fait aussi bien » comme un bon résultat quand le test le montre."
    ]
  }
};
