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
  chapters: [
    {
      name: "Chapitre 1 : Concevoir une équipe d'agents",
      lessons: [
        {
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
          youCanNow: "décider quand une tâche a vraiment besoin de plus d'un agent."
        },
        {
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
          youCanNow: "choisir entre une chaîne, un orchestrateur avec des exécutants, et un rédacteur avec un relecteur."
        },
        {
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
          youCanNow: "rédiger des consignes de rôle et des transmissions structurées pour une équipe d'agents."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir une équipe d'agents",
        questions: [
          { q: "Quel est le meilleur point de départ pour la plupart des nouveaux projets d'agents ?", options: ["Cinq agents", "Un orchestrateur avec dix exécutants", "Un seul agent avec de bons outils", "Aucun agent"], answer: 2, why: "Les agents en plus ajoutent coût et complexité ; commencez simple." },
          { q: "Quelle est une bonne raison d'ajouter un agent relecteur ?", options: ["Obtenir une vérification indépendante avec des règles claires", "Faire paraître le projet plus gros", "Utiliser plus de tokens", "Parce que deux, c'est toujours mieux"], answer: 0, why: "Des instructions neuves et une liste de contrôle repèrent des erreurs que le rédacteur ne voit pas." },
          { q: "Rechercher, puis rédiger, puis mettre en forme, dans un ordre fixe, c'est :", options: ["Un schéma", "Un orchestrateur", "Un déclencheur", "Une chaîne"], answer: 3, why: "Une chaîne fait passer le travail dans un ordre fixe." },
          { q: "Quelle transmission est la plus facile à vérifier par le code ?", options: ["« Voilà ce que j'en pense, j'espère que ça aide ! »", "{\"decision\": \"revise\", \"reasons\": [\"plus de 80 mots\"]}", "Un long paragraphe", "Une image"], answer: 1, why: "Un JSON structuré a des clés fixes que le code peut lire." },
          { q: "Quelle instruction de relecture donne la vérification la plus réelle ?", options: ["« Est-ce bien ? »", "« Sois critique. »", "« Est-ce que ça te plaît ? »", "« Chaque fait est-il dans la fiche, et est-ce sous les 80 mots ? »"], answer: 3, why: "Des vérifications précises oui/non évitent l'accord facile." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire et tester l'équipe",
      lessons: [
        {
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
          youCanNow: "garder le travail d'un système multi-agents dans un seul état partagé contrôlé par votre code."
        },
        {
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
          youCanNow: "arrêter le ping-pong entre agents avec une limite de tours et confier le travail non résolu à une personne."
        },
        {
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
          youCanNow: "construire un petit système multi-agents et prouver s'il fait mieux qu'un agent unique."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire et tester l'équipe",
        questions: [
          { q: "Qui doit mettre à jour l'état partagé ?", options: ["N'importe quel agent, quand il veut", "Seulement le relecteur", "Votre code, après avoir vérifié chaque transmission", "Personne"], answer: 2, why: "Un état géré par le code garde une seule vérité et bloque les mauvaises sorties." },
          { q: "Le relecteur n'a pas approuvé après 3 tours. Que doit-il se passer ?", options: ["Arrêter avec 'needs_human' et montrer le brouillon et les raisons", "L'approuver automatiquement", "Continuer jusqu'à ce qu'il approuve", "Supprimer le brouillon"], answer: 0, why: "Confiez-le à une personne au lieu de boucler." },
          { q: "Le relecteur approuve tous les brouillons, même mauvais. C'est :", options: ["Le ping-pong", "Le tampon automatique", "Une chaîne", "L'état partagé"], answer: 1, why: "Des listes de contrôle vagues mènent à tout approuver." },
          { q: "Comment noter les sorties de l'équipe et de l'agent unique ?", options: ["Les noter soi-même avec la même liste de contrôle", "Demander à l'agent relecteur", "Choisir la plus longue", "Compter seulement les mots"], answer: 0, why: "Un score indépendant et régulier rend la comparaison juste." },
          { q: "L'agent unique obtient le même score que l'équipe avec trois fois moins d'appels. Que faire ?", options: ["Utiliser l'équipe quand même", "Ajouter plus d'agents", "Arrêter de tester", "Utiliser l'agent unique"], answer: 3, why: "Même qualité pour moins cher : la conception la plus simple gagne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Systèmes multi-agents",
    questions: [
      { q: "Un système multi-agents, c'est :", options: ["Un agent avec une longue consigne", "Plusieurs agents avec leur propre rôle qui travaillent sur un même travail", "Un chatbot avec beaucoup d'utilisateurs", "Une base de données"], answer: 1, why: "Chaque agent a son rôle, ses instructions et ses outils." },
      { q: "Chaque agent en plus ajoute :", options: ["De la qualité gratuite", "Rien", "Du coût, des transmissions et du travail de test", "Moins de temps"], answer: 2, why: "Plus d'agents veut dire plus d'appels et plus à vérifier." },
      { q: "Le test de l'embauche demande :", options: ["L'agent est-il aimable ?", "Combien coûte le modèle ?", "Embaucheriez-vous deux personnes différentes pour ce travail ?", "La consigne est-elle longue ?"], answer: 2, why: "Des compétences nettement différentes suggèrent des agents séparés." },
      { q: "Quelle tâche n'a probablement besoin que d'un seul agent ?", options: ["Classer des messages en quatre catégories avec une liste de contrôle", "Rechercher, rédiger et vérifier un long rapport", "Lancer dix recherches à la fois", "Rédiger des annonces et les faire relire de façon indépendante"], answer: 0, why: "Une personne avec une liste de contrôle pourrait le faire." },
      { q: "Dans le modèle orchestrateur, l'orchestrateur :", options: ["Approuve son propre travail", "Met seulement le texte en forme", "Stocke la clé API", "Découpe l'objectif et confie les parties aux exécutants"], answer: 3, why: "Il planifie et délègue, puis rassemble les résultats." },
      { q: "Pourquoi le modèle rédacteur-relecteur est-il bon pour débuter ?", options: ["Il n'a besoin d'aucune limite", "Il ajoute une vérification de qualité indépendante", "Il n'utilise pas de modèle", "Il ne boucle jamais"], answer: 1, why: "Un second agent avec une liste de contrôle repère des erreurs." },
      { q: "Une chaîne est facile à déboguer parce que :", options: ["Elle tourne en secret", "Elle n'a pas d'agents", "Elle n'échoue jamais", "On sait toujours quel agent agit ensuite"], answer: 3, why: "L'ordre fixe rend chaque étape claire." },
      { q: "Une consigne de rôle doit contenir :", options: ["Votre mot de passe", "La consigne complète de tous les autres agents", "Le travail unique de l'agent, ses outils et son format de sortie", "Une blague"], answer: 2, why: "Chaque agent n'a besoin que de son propre rôle et de ses règles." },
      { q: "L'agent relecteur doit-il avoir des outils de rédaction ?", options: ["Non, seulement ce qu'il faut pour relire", "Oui, tous les outils", "Seulement l'outil d'e-mail", "Il doit avoir la clé API"], answer: 0, why: "Le moindre privilège s'applique à chaque agent." },
      { q: "Les transmissions structurées sont utiles parce que :", options: ["Elles sont plus longues", "Le code peut vérifier ce qui a été passé", "Elles cachent l'information", "Les modèles ne savent pas lire le texte"], answer: 1, why: "Des clés fixes rendent les transmissions vérifiables." },
      { q: "Un relecteur à qui l'on demande « Est-ce bien ? » va le plus souvent :", options: ["Être d'accord trop facilement", "Vérifier chaque fait", "Refuser de répondre", "Compter les mots exactement"], answer: 0, why: "Des questions vagues obtiennent une approbation vague." },
      { q: "L'état partagé appartient à :", options: ["Le navigateur de l'utilisateur", "L'agent rédacteur", "Le fournisseur du modèle", "Votre code"], answer: 3, why: "Le code garde l'unique source de vérité." },
      { q: "La divergence, c'est :", options: ["Le modèle qui devient plus rapide", "Des copies d'une information qui deviennent peu à peu différentes", "Une limite de tours", "Un déclencheur"], answer: 1, why: "L'état partagé empêche les copies divergentes." },
      { q: "Pourquoi enregistrer l'état dans le journal après chaque étape ?", options: ["Pour sauter des tours", "Pour rendre le modèle plus intelligent", "Pour voir exactement comment le travail a changé", "Pour partager votre clé"], answer: 2, why: "Le journal montre chaque changement pour le débogage." },
      { q: "MAX_ROUNDS empêche :", options: ["Tout appel au modèle", "Les bons brouillons", "Les allers-retours sans fin entre agents", "La tenue du journal"], answer: 2, why: "Une limite de tours met fin au ping-pong." },
      { q: "Le ping-pong dans une boucle rédacteur-relecteur, c'est quand :", options: ["Corriger un problème en fait revenir un ancien", "Le relecteur approuve tout", "Le brouillon est parfait", "L'état est enregistré"], answer: 0, why: "Les agents s'échangent sans fin les mêmes problèmes." },
      { q: "Le recours humain veut dire :", options: ["Supprimer le journal", "Ajouter plus d'agents", "Augmenter la limite de tours pour toujours", "Confier le travail non résolu à une personne"], answer: 3, why: "Les personnes règlent ce que le système ne peut pas régler." },
      { q: "Avec plus d'agents, le point de contrôle humain devient :", options: ["Inutile", "Plus important", "Automatique", "Illégal"], answer: 1, why: "Plus de pièces mobiles, c'est plus de façons de mal tourner." },
      { q: "Dans ce cours, la référence est :", options: ["La sortie la plus longue", "Le premier brouillon", "La clé API", "Un agent unique auquel on compare l'équipe"], answer: 3, why: "On compare l'équipe à l'option simple." },
      { q: "On compte les appels au modèle parce qu'ils représentent :", options: ["Le nombre de mots", "La qualité", "Le coût et le temps", "Le nombre d'utilisateurs"], answer: 2, why: "Plus d'appels coûtent plus et prennent plus de temps." }
    ]
  }
};
