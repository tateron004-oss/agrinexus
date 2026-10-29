"use strict";

// Koach Learn course, French translation of artificial-intelligence/agentic-tools-automation.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code, tool names, file names and the yes/no answers typed into the code are kept exactly as in the English course.

module.exports = {
  id: "agentic-tools-automation-fr",
  lang: "fr",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Outils des agents IA et automatisation",
  skills: "Décrire des outils avec un schéma, Valider les arguments des outils, Placer les outils d'écriture derrière une approbation, Simulations et relances sûres, Connecter des outils avec MCP, Exécuter un agent selon un calendrier",
  outcome: "donner à un agent de vrais outils en sécurité : décrire chaque outil avec un schéma, vérifier chaque argument, garder les actions d'écriture derrière une simulation et un oui humain, et faire tourner l'agent comme une automatisation répétable qui lit un fichier et écrit un rapport.",
  about: [
    "Voici le cours 4 du programme Concevoir, construire et déployer des agents IA autonomes. Votre agent du cours 3 avait deux outils sûrs. Les vrais agents lisent des fichiers, appellent des services web et écrivent des résultats, et c'est là qu'arrivent la plupart des accidents. Ce cours vous apprend à ajouter de vrais outils sans perdre le contrôle.",
    "Le chapitre 1 porte sur les outils : les décrire avec un schéma que le modèle comprend, vérifier chaque argument que reçoit votre code, et placer toute action qui modifie quelque chose derrière une simulation et une approbation humaine. Le chapitre 2 porte sur l'automatisation : déclencheurs et calendriers, relances sûres, le Model Context Protocol (MCP) pour connecter des outils, et la transformation de votre agent en tâche qui tourne toute seule.",
    "Vous travaillerez en Python dans Google Colab ou sur votre propre ordinateur. Le code apparaît sous forme de courtes lignes dans les leçons. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Construisez un agent de « rapport hebdomadaire ». Il lit avec un outil de lecture un fichier CSV de ventes ou de dépenses inventées, utilise un outil calculatrice pour calculer les totaux, et rédige un court résumé. Son seul outil d'écriture, save_report(filename, text), doit vérifier ses arguments (seulement des fichiers .txt ou .md, seulement dans un dossier reports), fonctionner en mode simulation par défaut, et demander « Enregistrer le rapport ? yes/no » avant d'écrire. Le lancer deux fois pour la même semaine ne doit pas créer de rapport en double. Montrez le journal d'une exécution complète.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes du programme Concevoir, construire et déployer des agents IA autonomes qui ont terminé les cours 1 à 3 : propriétaires de petites entreprises, personnes en reconversion, étudiants et employés qui veulent des agents qui font un vrai travail selon un horaire.",
    startingPoint: "Ils ont construit en Python une boucle d'agent à deux outils, avec une limite d'étapes, la gestion des erreurs et un journal d'exécution. Ils n'ont pas encore donné à un agent des outils qui lisent des fichiers ou modifient quelque chose, ni fait tourner un agent comme automatisation.",
    gap: "La plupart des accidents d'agents arrivent quand ils reçoivent de vrais outils qui lisent et écrivent. Les apprenants doivent décrire clairement les outils, vérifier chaque argument, garder les actions d'écriture derrière une simulation et un oui humain, et rendre les automatisations sûres à relancer, pour que leurs agents aident sans causer de dégâts.",
    constraints: [
      "Niveau de lecture : mots simples ; le code est montré en courtes lignes à copier",
      "Appareils : un ordinateur avec un navigateur web ; Colab pour construire, pas pour faire tourner des tâches planifiées",
      "Les exercices utilisent seulement des données CSV inventées, jamais de vrais dossiers de clients ou financiers",
      "Les actions d'écriture restent en mode simulation tant qu'une personne n'a pas approuvé",
      "Seulement des serveurs MCP de confiance, avec le moins d'accès nécessaire"
    ],
    prerequisites: "Le cours 3 de Concevoir, construire et déployer des agents IA autonomes (« Construire des agents IA »)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour chaque outil que votre agent utilise", action: "rédiger le schéma d'un outil avec un nom clair, un but et des entrées typées", standard: "pour qu'un modèle puisse choisir le bon outil et les bons arguments" },
    { id: "O2", condition: "À partir des arguments envoyés par le modèle", action: "vérifier chaque argument par rapport à une liste autorisée avant que l'outil l'utilise", standard: "en refusant avec une erreur claire les mauvais types de fichiers, les pièges de chemin et les mauvais types de valeurs" },
    { id: "O3", condition: "Pour tout outil qui modifie quelque chose", action: "placer l'action derrière une simulation et une approbation oui/non qui montre les détails exacts", standard: "pour que rien ne soit écrit avant qu'une personne dise oui" },
    { id: "O4", condition: "Pour une tâche qui revient régulièrement", action: "choisir un déclencheur et rendre l'automatisation sûre à relancer", standard: "pour qu'une deuxième exécution pour la même période ne crée aucun doublon" },
    { id: "O5", condition: "Pour un outil que vous voulez partager avec des applications d'IA", action: "expliquer ce que fait un serveur MCP et décider quand en utiliser un", standard: "en nommant les règles d'approbation et de vérification que vous garderiez" },
    { id: "O6", condition: "À partir d'outils de lecture, de calcul et d'enregistrement", action: "construire et tester de bout en bout l'automatisation du rapport hebdomadaire", standard: "avec un journal d'exécution complet et les données incorrectes signalées, pas ignorées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Donner de vrais outils à un agent",
      lessons: [
        {
          objectives: ["O1"],
          title: "Décrire un outil avec un schéma",
          minutes: 5,
          goal: "Rédiger la description d'un outil avec un nom, un but et des entrées typées.",
          text: [
            "Un modèle choisit les outils d'après leur description. Un schéma d'outil est une description précise : un nom, une ou deux phrases sur ce qu'il fait et quand l'utiliser, et chaque entrée avec son type et son sens. La plupart des fournisseurs décrivent les entrées en JSON Schema, une façon standard de décrire des données.",
            "Exemple : nom read_csv ; description « Lit un fichier CSV du dossier data et renvoie ses 50 premières lignes en texte. À utiliser quand tu as besoin des chiffres d'un fichier. » ; entrées : filename (chaîne de caractères, obligatoire, un nom de fichier du dossier data comme sales-week-42.csv).",
            "Les bons schémas sont petits et précis. Un outil, un travail. Dites ce que l'outil renvoie et quand ne pas l'utiliser. Utilisez des noms qui se lisent comme des actions : read_csv, save_report, pas tool1."
          ],
          steps: ["Nommez l'outil avec un verbe d'action.", "Décrivez ce qu'il fait, quand l'utiliser et ce qu'il renvoie.", "Listez chaque entrée avec son type et si elle est obligatoire.", "Limitez-le à un seul travail.", "Testez : donnez un objectif au modèle et voyez s'il choisit bien l'outil."],
          words: [["Schéma d'outil", "une description précise d'un outil : son nom, son but et ses entrées."], ["JSON Schema", "une façon standard de décrire la forme des données, par exemple quels champs sont du texte ou des nombres."], ["Argument", "une valeur passée à un outil ou à une fonction."]],
          slides: [
            { title: "Les modèles choisissent d'après les descriptions", bullets: ["Nom, but, entrées", "Entrées souvent décrites en JSON Schema"] },
            { title: "Exemple : read_csv", bullets: ["Lit un CSV du dossier data", "Renvoie les 50 premières lignes en texte", "Entrée : filename (chaîne, obligatoire)"] },
            { title: "Les bons schémas", bullets: ["Un outil, un travail", "Noms d'action : read_csv, save_report", "Dites ce qu'il renvoie et quand ne pas l'utiliser"] }
          ],
          tryIt: "Rédigez les schémas de trois outils : read_csv, calculator et save_report. Donnez les trois schémas à un chatbot gratuit avec l'objectif « Totaliser les ventes de la semaine dernière et enregistrer un rapport », et demandez-lui quel outil il appellerait en premier et avec quels arguments.",
          youCanNow: "décrire un outil pour qu'un modèle puisse le choisir et remplir correctement ses entrées.",
          quickCheck: [
            { objective: "O1", q: "Que disent au modèle les entrées typées d'un schéma d'outil ?", options: ["La vitesse de l'outil", "Qui a écrit l'outil", "Le type de valeur attendu pour chaque entrée, comme du texte ou un nombre", "Quel modèle utiliser"], answer: 2, why: "Les types décrivent la forme de chaque entrée pour que le modèle envoie les bons arguments." },
            { objective: "O1", q: "Vous voulez un seul outil qui lit des fichiers, envoie des e-mails et supprime les anciens rapports. Que feriez-vous plutôt ?", options: ["Le découper en outils séparés qui font chacun une tâche claire", "Le garder, car un seul outil est plus simple", "Lui donner une description plus longue", "Cacher la partie suppression dans le schéma"], answer: 0, why: "Un bon outil fait une seule tâche claire : il est plus facile à décrire, à vérifier et à approuver." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ne jamais faire confiance aux arguments : valider les entrées",
          minutes: 6,
          goal: "Vérifier chaque argument envoyé par le modèle avant qu'un outil ne l'utilise.",
          text: [
            "C'est le modèle qui écrit les arguments de votre outil, et le modèle peut se tromper ou être piégé par une injection de consigne. C'est donc l'outil, et non le modèle, qui doit faire respecter les règles. Traitez les arguments comme une entrée venue d'un inconnu sur Internet.",
            "Vérifiez le type et la forme : filename est-il une chaîne de caractères ? Vérifiez les valeurs permises : seulement des noms qui finissent par .csv, seulement dans le dossier data. Bloquez les ruses de chemin : un nom comme ../../secrets.txt essaie de sortir du dossier. En Python : from pathlib import Path, puis p = (DATA_DIR / filename).resolve(), et refusez si DATA_DIR.resolve() n'est pas dans p.parents.",
            "Quand une vérification échoue, renvoyez un message clair, pas un plantage : « erreur read_csv : seuls les fichiers .csv du dossier data sont permis ». N'exécutez jamais un texte écrit par le modèle comme du code ou comme une commande système : c'est ainsi qu'une petite erreur en devient une grosse."
          ],
          steps: ["Vérifiez le type de chaque argument.", "Vérifiez les valeurs permises : types de fichiers, dossiers, plages de nombres.", "Résolvez les chemins de fichiers et refusez tout ce qui sort du dossier permis.", "Renvoyez un message d'erreur clair en cas d'échec.", "N'exécutez jamais un texte du modèle comme du code ou une commande système."],
          words: [["Validation", "vérifier qu'une entrée est du bon type et dans les valeurs permises avant de l'utiliser."], ["Traversée de chemin", "une ruse qui utilise ../ dans un nom de fichier pour atteindre des fichiers hors du dossier permis."], ["Liste d'autorisation", "la liste des seules valeurs permises."]],
          slides: [
            { title: "L'outil fait respecter les règles", bullets: ["Le modèle peut se tromper ou être piégé", "Traitez les arguments comme venant d'un inconnu"] },
            { title: "Vérifiez chaque argument", bullets: ["Type : chaîne ou nombre ?", "Valeurs permises : seulement .csv, seulement data", "Bloquez les ruses de chemin ../"] },
            { title: "En cas d'échec", bullets: ["Renvoyez un message d'erreur clair", "Ne plantez jamais, ne devinez jamais", "N'exécutez jamais le texte du modèle comme code"] }
          ],
          tryIt: "Écrivez read_csv avec validation. Testez-le vous-même avec : 'sales.csv', 'notes.exe', '../secret.txt' et 42. Seul le premier doit lire un fichier ; les autres doivent renvoyer des erreurs claires.",
          youCanNow: "écrire des outils qui vérifient chaque argument avant d'agir.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi le code de l'outil doit-il lui-même vérifier ses arguments ?", options: ["Le schéma bloque déjà toutes les mauvaises valeurs", "Le modèle peut envoyer quelque chose de dangereux ou de faux", "Cela rend le modèle plus intelligent", "Ce n'est utile que pour les outils d'écriture"], answer: 1, why: "Seul le code de l'outil peut faire respecter ses règles ; le modèle peut se tromper ou être piégé." },
            { objective: "O2", q: "read_csv reçoit le nombre 42 comme nom de fichier. Que doit-il se passer ?", options: ["Lire un fichier nommé 42.csv", "Le transformer en texte et continuer", "Demander au modèle de deviner le bon fichier", "Renvoyer une erreur claire : le nom de fichier doit être un texte qui finit par .csv"], answer: 3, why: "Un mauvais type est refusé avec une erreur claire que le modèle peut utiliser." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Outils d'écriture : simulations et approbation humaine",
          minutes: 6,
          goal: "Placer une action d'écriture derrière une simulation et une approbation oui/non.",
          text: [
            "Un outil d'écriture change quelque chose : il enregistre un fichier, envoie un message, met à jour une feuille, dépense de l'argent. Donnez aux outils d'écriture deux verrous. D'abord, une simulation (dry run) : l'outil dit exactement ce qu'il ferait, mais ne le fait pas. Faites de la simulation le réglage par défaut, avec DRY_RUN = True en haut de votre code.",
            "Ensuite, l'approbation humaine : avant la vraie écriture, montrez à la personne ce qui va se passer et demandez-lui. Dans un notebook, answer = input('Save report to reports/week-42.md? yes/no '), et ne continuez que si answer == 'yes'. Dans une vraie application, c'est un bouton Approuver.",
            "Montrez les vrais détails dans l'approbation, pas un résumé écrit par le modèle : le nom du fichier, le destinataire, le montant. Notez dans le journal chaque approbation et chaque refus. Si le modèle redemande la même écriture après un non, c'est un signe qu'il faut arrêter l'exécution."
          ],
          steps: ["Marquez chaque outil LECTURE ou ÉCRITURE.", "Donnez à chaque outil d'écriture un mode simulation, activé par défaut.", "Avant une vraie écriture, montrez les détails exacts et demandez oui ou non.", "N'écrivez que sur un oui, et notez la réponse.", "Arrêtez l'exécution si le modèle redemande une écriture refusée."],
          words: [["Simulation", "une exécution d'essai qui montre ce qui se passerait sans le faire (dry run)."], ["Point d'approbation", "un moment où une personne doit dire oui avant qu'une action ait lieu."]],
          slides: [
            { title: "Les outils d'écriture changent les choses", bullets: ["Enregistrer, envoyer, mettre à jour, dépenser", "Il leur faut deux verrous"] },
            { title: "Verrou 1 : simulation par défaut", bullets: ["DRY_RUN = True", "Montre exactement ce qui se passerait", "Ne le fait pas"] },
            { title: "Verrou 2 : approbation humaine", bullets: ["Vrais détails : fichier, destinataire, montant", "Demandez oui ou non", "Écrivez seulement sur un oui ; notez la réponse"] }
          ],
          tryIt: "Écrivez save_report(filename, text) avec validation (seulement .md ou .txt, seulement dans un dossier reports), une simulation par défaut et une approbation oui/non. Essayez avec DRY_RUN activé, puis désactivé, en répondant non une fois et oui une fois.",
          youCanNow: "ajouter des outils d'écriture qui n'agissent qu'après une simulation et un oui humain.",
          quickCheck: [
            { objective: "O3", q: "Que fait une simulation (dry run) ?", options: ["Elle montre ce qui se passerait sans le faire", "Elle exécute l'action deux fois pour être sûr", "Elle supprime d'abord l'ancien fichier", "Elle enregistre une copie de sauvegarde du modèle"], answer: 0, why: "Une simulation permet à une personne de voir le résultat avant que quoi que ce soit change." },
            { objective: "O3", q: "La demande d'approbation dit seulement « Continuer ? oui/non ». Que changeriez-vous ?", options: ["Rien, c'est court et clair", "Faire répondre oui par l'agent lui-même", "Montrer le nom exact du fichier et le texte qui sera enregistré", "Supprimer l'approbation pour gagner du temps"], answer: 2, why: "Une personne ne peut bien approuver que si elle voit les détails exacts." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Donner de vrais outils à un agent",
        questions: [
          { objective: "O1", q: "Que donne un schéma d'outil au modèle ?", options: ["Votre clé API", "Le code source de l'outil", "Le nom, le but et les entrées de l'outil", "La permission de tout exécuter"], answer: 2, why: "Le modèle choisit et remplit les outils d'après leurs schémas." },
          { objective: "O1", q: "Quel nom d'outil est le meilleur ?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Les noms d'action disent au modèle ce que fait l'outil." },
          { objective: "O2", q: "Le modèle envoie à read_csv le nom de fichier '../../passwords.txt'. L'outil doit :", options: ["Le lire, le modèle l'a demandé", "Demander au modèle de promettre que c'est sûr", "En lire la moitié", "Refuser avec une erreur claire"], answer: 3, why: "Les ruses de chemin hors du dossier permis doivent être bloquées par l'outil." },
          { objective: "O3", q: "Pourquoi DRY_RUN doit-il être activé par défaut ?", options: ["C'est plus rapide", "Rien ne change tant que quelqu'un ne le désactive pas exprès", "Les modèles le préfèrent", "Cela économise des tokens"], answer: 1, why: "Un réglage sûr par défaut évite les écritures accidentelles." },
          { objective: "O3", q: "Que doit montrer une demande d'approbation ?", options: ["Un résumé écrit par le modèle", "Rien, juste « OK ? »", "Le nom du modèle", "Les détails exacts : nom du fichier, destinataire ou montant"], answer: 3, why: "Les personnes doivent approuver ce qui va vraiment se passer." }
        ]
      }
    },
    {
      name: "Chapitre 2 : De l'agent à l'automatisation",
      lessons: [
        {
          objectives: ["O4"],
          title: "Déclencheurs, calendriers et relances sûres",
          minutes: 5,
          goal: "Choisir un déclencheur pour un agent et rendre les relances sûres.",
          text: [
            "Une automatisation est un agent qui démarre tout seul. Un déclencheur le lance : un calendrier (chaque lundi à 8 h), un événement (un nouveau fichier dans un dossier, une nouvelle réponse à un formulaire) ou un bouton sur lequel quelqu'un appuie.",
            "Les automatisations sont relancées : un calendrier se déclenche deux fois, une exécution échoue à mi-chemin et vous la relancez. Prévoyez-le. Idempotent veut dire que deux exécutions donnent le même résultat qu'une seule. Nommez les sorties selon leur période (reports/week-42.md) et vérifiez avant d'écrire : si le rapport existe, arrêtez ou demandez, au lieu de faire une copie.",
            "Façons de planifier : sur votre propre ordinateur, le Planificateur de tâches de Windows ou cron sur Mac et Linux peuvent lancer un script Python ; des outils sans code comme Zapier, Make et n8n lancent des flux selon des déclencheurs ; les services en ligne ont aussi des planificateurs. Colab sert à construire et à tester, pas à tourner selon un calendrier. Vérifiez les limites gratuites actuelles de chaque outil sur son propre site."
          ],
          steps: ["Choisissez le déclencheur : calendrier, événement ou bouton.", "Nommez chaque sortie selon sa période, comme week-42.", "Avant d'écrire, vérifiez si la sortie existe déjà.", "Si oui, arrêtez ou demandez ; ne faites jamais de doublon.", "Choisissez où il tournera, et vérifiez les limites de cet outil."],
          words: [["Déclencheur", "l'événement qui lance une automatisation."], ["Idempotent", "qui peut être lancé plusieurs fois sans risque : la deuxième exécution ne change rien de plus."], ["Cron", "un planificateur sur Mac et Linux qui lance des commandes à heures fixes."]],
          slides: [
            { title: "Trois types de déclencheurs", bullets: ["Calendrier : chaque lundi à 8 h", "Événement : nouveau fichier ou réponse à un formulaire", "Bouton : une personne le lance"] },
            { title: "Prévoir les relances", bullets: ["Idempotent : deux fois = une fois", "Sorties nommées par période : week-42", "Vérifiez avant d'écrire ; jamais de doublon"] },
            { title: "Où il peut tourner", bullets: ["Planificateur de tâches ou cron sur votre ordinateur", "Sans code : Zapier, Make, n8n", "Colab sert à construire, pas à planifier"] }
          ],
          tryIt: "Modifiez save_report pour que le nom du fichier contienne le numéro de la semaine, et pour qu'une deuxième exécution pour la même semaine s'arrête avec « Le rapport de la semaine 42 existe déjà ». Lancez-le deux fois pour le prouver.",
          youCanNow: "choisir un déclencheur et rendre une automatisation sûre à lancer plusieurs fois.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire qu'une automatisation est idempotente ?", options: ["Elle ne tourne qu'une fois par an", "La lancer deux fois donne le même résultat que la lancer une fois", "Elle n'a jamais besoin de déclencheur", "Elle demande toujours une approbation"], answer: 1, why: "Une tâche idempotente peut être relancée sans risque, sans créer de doublons." },
            { objective: "O4", q: "Votre tâche hebdomadaire a tourné deux fois par erreur et a créé deux rapports. Que changeriez-vous ?", options: ["La lancer moins souvent", "Supprimer les rapports à la main chaque semaine", "Désactiver le journal", "Nommer le rapport d'après la semaine et s'arrêter si le rapport de cette semaine existe déjà"], answer: 3, why: "Un nom basé sur la semaine plus une vérification d'existence rendent les relances sûres." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Connecter des outils avec MCP",
          minutes: 5,
          goal: "Expliquer ce qu'est MCP et décider quand utiliser un serveur MCP.",
          text: [
            "Le Model Context Protocol (MCP) est un standard ouvert (open source) pour connecter les applications d'IA à des systèmes extérieurs : fichiers, bases de données, agendas, outils de recherche. Son propre site le compare à un port USB-C pour l'IA : on construit une connexion une fois et de nombreuses applications d'IA peuvent l'utiliser.",
            "Dans MCP, un serveur propose des outils et des données ; un client (dans une application d'IA comme Claude, ChatGPT ou un éditeur de code comme VS Code) s'y connecte et permet au modèle de les utiliser. Vous pouvez utiliser des serveurs tout faits ou écrire votre propre petit serveur en Python qui enveloppe des outils comme votre read_csv.",
            "MCP ne rend pas un outil sûr à lui seul. Toutes les règles du chapitre 1 s'appliquent toujours : vérifier les arguments, moindre privilège, approbation pour les écritures. N'installez des serveurs que depuis des sources de confiance, car un serveur tourne avec tous les accès que vous lui donnez. Lisez la page des bonnes pratiques de sécurité de MCP avant de connecter quoi que ce soit de privé."
          ],
          words: [["MCP", "Model Context Protocol : un standard ouvert pour connecter les applications d'IA à des outils et à des données."], ["Serveur MCP", "un programme qui propose des outils ou des données aux applications d'IA via MCP."], ["Client MCP", "la partie d'une application d'IA qui se connecte aux serveurs MCP."]],
          slides: [
            { title: "Ce qu'est MCP", bullets: ["Standard ouvert pour relier IA, outils et données", "Comme un port USB-C pour l'IA", "Construit une fois, utilisé par de nombreuses applis"] },
            { title: "Serveurs et clients", bullets: ["Serveur : propose outils et données", "Client : dans l'appli d'IA, se connecte aux serveurs", "Vous pouvez écrire un petit serveur en Python"] },
            { title: "Toujours votre travail", bullets: ["Vérifier les arguments, moindre privilège", "Approbation pour les écritures", "Serveurs seulement de sources de confiance"] }
          ],
          sources: [{ name: "Model Context Protocol : qu'est-ce que MCP ?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Lisez la page d'introduction de MCP. Puis écrivez trois phrases : lequel de vos outils vous proposeriez via un serveur MCP, quelle application d'IA l'utiliserait, et quelle règle d'approbation vous garderiez.",
          youCanNow: "expliquer les serveurs et clients MCP et décider quand il est utile de connecter un outil via MCP.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un serveur MCP ?", options: ["Un programme qui offre des outils et des données aux applications d'IA de façon standard", "Un modèle qui écrit du code", "Un dossier en ligne pour les rapports", "Une sorte de clé API"], answer: 0, why: "MCP, le Model Context Protocol, est une façon standard de relier des outils et des données aux applications d'IA." },
            { objective: "O5", q: "Vous proposez save_report via un serveur MCP. Que deviennent ses vérifications d'arguments et son approbation ?", options: ["On peut les supprimer, MCP s'occupe de la sécurité", "Elles passent dans l'application d'IA", "Vous les gardez dans l'outil", "Seule l'approbation reste"], answer: 2, why: "MCP relie des outils ; il ne remplace pas les vérifications et les approbations de votre propre code." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Construire l'automatisation du rapport hebdomadaire",
          minutes: 6,
          goal: "Réunir les outils, la boucle et les règles de sécurité en une seule automatisation.",
          text: [
            "Assemblez maintenant le tout. Les outils : read_csv (lecture, validé), calculator (lecture, validé), save_report (écriture : validé, simulation, approbation, pas de doublon). La boucle du cours 3 avec une limite d'étapes et un journal. Une consigne système du cours 2 avec l'objectif : résumer la semaine et enregistrer un rapport.",
            "Créez un petit fichier inventé pour tester, comme data/sales-week-42.csv avec les colonnes day, item, amount. Ne testez jamais avec de vraies données de clients ou personnelles.",
            "Lancez-le du début à la fin. Lisez le journal : a-t-il lu avant de calculer ? A-t-il demandé avant d'enregistrer ? Lancez-le une deuxième fois pour la même semaine : il ne doit pas créer de doublon. Puis essayez un fichier avec une mauvaise ligne (un mot là où il faut un nombre) et vérifiez qu'il signale le problème au lieu de deviner."
          ],
          steps: ["Créez un CSV inventé dans un dossier data.", "Enregistrez les trois outils avec leurs schémas.", "Lancez la boucle avec une limite d'étapes et un journal.", "Approuvez l'enregistrement une fois ; relancez pour tester l'absence de doublon.", "Testez un fichier avec une mauvaise ligne."],
          words: [["Données de test", "des données inventées utilisées pour vérifier un programme sans risquer de vraies informations."], ["Test de bout en bout", "lancer toute l'automatisation du début à la fin."]],
          slides: [
            { title: "Tout assembler", bullets: ["read_csv, calculator, save_report", "Boucle avec limite d'étapes et journal", "Consigne avec l'objectif hebdomadaire"] },
            { title: "Tester avec des données inventées", bullets: ["data/sales-week-42.csv", "Jamais de vraies données de clients ou personnelles"] },
            { title: "Vérifier l'exécution", bullets: ["Lecture avant calcul ?", "Demande avant d'enregistrer ?", "Deuxième exécution : pas de doublon", "Mauvaise ligne : signalée, pas devinée"] }
          ],
          tryIt: "Exercice final : construisez l'agent de rapport hebdomadaire avec read_csv, calculator et save_report (validé, simulation par défaut, approbation oui/non, pas de doublon). Lancez-le sur un CSV inventé, relancez-le pour la même semaine, et enregistrez le journal de l'exécution complète.",
          youCanNow: "transformer un agent en automatisation sûre et répétable avec de vrais outils.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un test de bout en bout de votre automatisation ?", options: ["Tester seulement la calculatrice", "Exécuter toute l'automatisation du début à la fin", "Lire le code à voix haute", "Tester le modèle dans un chatbot"], answer: 1, why: "De bout en bout veut dire que toutes les parties tournent ensemble, comme en situation réelle." },
            { objective: "O6", q: "Votre CSV contient le mot « none » à la place d'un chiffre de ventes. Que doit faire l'agent ?", options: ["Signaler le problème dans son résumé", "Le compter comme zéro sans le dire", "Ignorer tout le fichier", "Deviner un nombre"], answer: 0, why: "Un bon agent signale les données incorrectes au lieu de les cacher." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : De l'agent à l'automatisation",
        questions: [
          { objective: "O4", q: "Lequel est un déclencheur par événement ?", options: ["Une personne lit le journal", "Chaque lundi à 8 h", "Un nouveau fichier arrive dans un dossier", "La limite d'étapes"], answer: 2, why: "Un événement, comme un nouveau fichier, lance l'exécution." },
          { objective: "O4", q: "Une automatisation est idempotente quand :", options: ["La lancer deux fois donne le même résultat qu'une seule fois", "Elle tourne très vite", "Elle n'échoue jamais", "Elle n'utilise aucun outil"], answer: 0, why: "Des relances sûres ne refont pas le travail en double." },
          { objective: "O5", q: "Que fait un serveur MCP ?", options: ["Il entraîne le modèle", "Il propose des outils et des données aux applications d'IA", "Il stocke votre mot de passe", "Il remplace la vérification des arguments"], answer: 1, why: "Les serveurs exposent outils et données ; les clients des applis d'IA s'y connectent." },
          { objective: "O5", q: "Vous avez trouvé sur un site inconnu un serveur MCP qui veut accéder à vos fichiers. Meilleure décision ?", options: ["N'utiliser que des serveurs de sources de confiance, avec le moins d'accès nécessaire", "Lui donner accès à tout", "L'installer tout de suite", "Désactiver les approbations"], answer: 0, why: "Un serveur tourne avec tous les accès que vous lui donnez." },
          { objective: "O6", q: "Avec quelles données tester votre automatisation ?", options: ["De vrais dossiers de clients", "Votre relevé bancaire", "Les e-mails de votre ami", "Des données de test inventées"], answer: 3, why: "Les données de test évitent de risquer de vraies informations." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Outils des agents IA et automatisation",
    questions: [
      { objective: "O1", q: "Un schéma d'outil contient :", options: ["Les données d'entraînement du modèle", "Un nom, un but et des entrées", "Un mot de passe", "Une liste de prix"], answer: 1, why: "C'est ce que le modèle lit pour choisir et utiliser l'outil." },
      { objective: "O1", q: "JSON Schema sert à :", options: ["Stocker des clés API", "Faire des images", "Décrire la forme des entrées d'un outil", "Entraîner des modèles"], answer: 2, why: "Il décrit les types et les champs obligatoires." },
      { objective: "O1", q: "Un bon outil fait :", options: ["Tout ce que dit le modèle", "Tous les travaux à la fois", "Un seul travail clair", "Rien"], answer: 2, why: "Des outils petits et précis sont plus faciles à choisir et plus sûrs." },
      { objective: "O2", q: "Qui doit faire respecter les règles d'un outil ?", options: ["Le code de l'outil lui-même", "Le modèle", "Le navigateur de l'utilisateur", "Personne"], answer: 0, why: "Le modèle peut se tromper ou être piégé." },
      { objective: "O2", q: "Le nom de fichier '../secret.txt' est un exemple de :", options: ["Fichier normal", "Déclencheur", "Schéma", "Traversée de chemin"], answer: 3, why: "../ essaie de sortir du dossier permis." },
      { objective: "O2", q: "Une liste d'autorisation est :", options: ["Une liste d'utilisateurs bloqués", "Une liste des seules valeurs permises", "Une liste de tâches", "Un réglage du modèle"], answer: 1, why: "Seules les valeurs listées sont acceptées." },
      { objective: "O2", q: "Un agent doit-il exécuter comme commande système un texte écrit par le modèle ?", options: ["Oui, toujours", "Seulement le week-end", "Seulement s'il est court", "Non, jamais"], answer: 3, why: "Cela transforme une erreur du modèle en problème pour tout le système." },
      { objective: "O3", q: "Une simulation :", options: ["Supprime les fichiers de test", "Tourne sans modèle", "Montre ce qui se passerait sans le faire", "Tourne deux fois"], answer: 2, why: "Elle prévisualise l'action en sécurité." },
      { objective: "O3", q: "Lequel est un outil d'écriture ?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Enregistrer change quelque chose." },
      { objective: "O3", q: "Avant une vraie écriture, la personne doit voir :", options: ["Seulement un pouce levé", "Le fichier, le destinataire ou le montant exact", "La clé API", "Rien"], answer: 1, why: "L'approbation doit porter sur les vrais détails." },
      { objective: "O3", q: "Le modèle redemande d'enregistrer juste après votre non. Vous devez :", options: ["Arrêter l'exécution et lire le journal", "Dire oui pour qu'il arrête", "Désactiver l'approbation", "Lui donner plus d'outils"], answer: 0, why: "Redemander une écriture refusée est un signal d'alarme." },
      { objective: "O4", q: "Lequel est un déclencheur par calendrier ?", options: ["Une mauvaise ligne", "Une nouvelle réponse à un formulaire", "Un appui sur un bouton", "Chaque lundi à 8 h"], answer: 3, why: "Les calendriers lancent les exécutions à heures fixes." },
      { objective: "O4", q: "Nommer les rapports par semaine (week-42) aide à :", options: ["Rendre le modèle plus intelligent", "Éviter les rapports en double lors des relances", "Cacher le rapport", "Économiser des tokens"], answer: 1, why: "L'agent peut vérifier si le rapport de cette semaine existe déjà." },
      { objective: "O4", q: "Google Colab est-il le bon endroit pour lancer un calendrier hebdomadaire ?", options: ["Oui, il tourne pour toujours", "Oui, il a un agenda intégré", "Non, il sert à construire et à tester", "Seulement pour les utilisateurs payants"], answer: 2, why: "Utilisez un planificateur ou un service d'automatisation pour les exécutions planifiées." },
      { objective: "O4", q: "Cron et le Planificateur de tâches de Windows servent à :", options: ["Vérifier du JSON", "Rédiger des consignes", "Lancer des programmes à heures fixes", "Entraîner des modèles"], answer: 2, why: "Ce sont des planificateurs." },
      { objective: "O5", q: "MCP veut dire :", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "C'est un standard ouvert pour connecter les applis d'IA à des outils." },
      { objective: "O5", q: "Le site de MCP le compare à :", options: ["Un câble de chargeur réservé à Apple", "Un gestionnaire de mots de passe", "Un tableur", "Un port USB-C pour les applications d'IA"], answer: 3, why: "Une connexion standard que de nombreuses applis peuvent utiliser." },
      { objective: "O5", q: "Avec MCP, la vérification de vos arguments est :", options: ["Devenue inutile", "Toujours nécessaire", "Faite par le site du serveur", "Faite par le modèle"], answer: 1, why: "MCP connecte les outils ; il ne les rend pas sûrs." },
      { objective: "O6", q: "Une ligne de CSV contient un mot là où il faut un nombre. Un bon agent :", options: ["Devine un nombre", "Saute tout le rapport sans rien dire", "Supprime le fichier", "Signale le problème"], answer: 3, why: "Signalez les problèmes de données ; ne devinez jamais." },
      { objective: "O6", q: "Un test de bout en bout veut dire :", options: ["Tester une seule fonction", "Lire le schéma", "Lancer toute l'automatisation du début à la fin", "Vérifier seulement la réponse finale"], answer: 2, why: "Il vérifie que toutes les parties fonctionnent ensemble." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      7,
      9,
      11,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Outils décrits",
        objective: "O1",
        notYet: "Un outil n'a pas de schéma, ou son nom ou son but est vague.",
        meets: "read_csv, calculator et save_report ont chacun un nom, un but et des entrées typées.",
        exceeds: "Les descriptions sont assez claires pour que le modèle choisisse le bon outil du premier coup."
      },
      {
        name: "Arguments vérifiés",
        objective: "O2",
        notYet: "save_report accepte n'importe quel nom de fichier ou dossier.",
        meets: "Seulement des fichiers .txt ou .md, seulement dans le dossier reports ; une mauvaise entrée reçoit une erreur claire.",
        exceeds: "read_csv est vérifié de la même façon et les erreurs sont testées."
      },
      {
        name: "Simulation et approbation",
        objective: "O3",
        notYet: "Le rapport est écrit sans simulation ni oui.",
        meets: "La simulation est activée par défaut et « Enregistrer le rapport ? oui/non » est demandé avant d'écrire.",
        exceeds: "L'approbation montre le nom exact du fichier et un aperçu du texte."
      },
      {
        name: "Relance sûre",
        objective: "O4",
        notYet: "Une deuxième exécution pour la même semaine crée un rapport en double.",
        meets: "Une deuxième exécution pour la même semaine s'arrête sans doublon.",
        exceeds: "Elle dit clairement pour quelle semaine le rapport existe déjà."
      },
      {
        name: "Exécution complète notée",
        objective: "O6",
        notYet: "Pas de journal, ou l'exécution n'est pas allée au bout.",
        meets: "Le journal montre une exécution complète, de la lecture du CSV jusqu'à l'approbation.",
        exceeds: "Le résumé signale les lignes incorrectes dans les données."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui passent au cours 5 du programme sur les agents dans les 30 jours",
      "Apprenants qui disent faire tourner une automatisation planifiée avec approbation des actions d'écriture dans les 30 jours (enquête de suivi)",
      "Apprenants qui ne signalent aucune écriture non voulue ni doublon causés par leurs automatisations (enquête de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web et internet ; Colab ou Python sur votre propre ordinateur",
      "Une clé API de modèle du cours 2 ou un modèle local gratuit",
      "Un fichier CSV inventé de ventes ou de dépenses",
      "Votre boucle d'agent du cours 3",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis construisez chaque couche de sécurité en direct : schéma, vérifications, simulation, approbation.",
      "Donnez à tout le monde le même CSV inventé pour comparer les résultats ; n'utilisez jamais de vrais dossiers de clients ou d'argent.",
      "Faites essayer à voix haute, en groupe, les mauvais noms de fichiers de la leçon 2 pour voir chaque erreur.",
      "Insistez : seulement des serveurs MCP de confiance, avec le moins d'accès nécessaire.",
      "Notez l'exercice final avec la grille, et demandez à chaque apprenant de montrer sa deuxième exécution qui s'arrête sans doublon."
    ]
  }
};
