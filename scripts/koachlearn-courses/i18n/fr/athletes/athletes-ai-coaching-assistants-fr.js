"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-coaching-assistants.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-coaching-assistants-fr",
  lang: "fr",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Assistants de coaching IA",
  skills: "Configurer un assistant IA avec des consignes de coaching, Planifier les entraînements avec l'IA, Écrire des messages aux parents et aux joueurs, Créer des fiches d'exercices et des quiz, Garder les données des athlètes privées et les décisions humaines",
  outcome: "configurer un assistant IA comme aide au coaching avec vos propres consignes permanentes, puis l'utiliser pour planifier un entraînement de 90 minutes, écrire un message clair aux parents, et créer une fiche d'exercice et un quiz de cinq questions sur le système de jeu, le tout vérifié par vous et sans aucune donnée privée sur les athlètes.",
  about: [
    "Ce cours s'adresse aux entraîneurs principaux, aux entraîneurs adjoints, aux directeurs de club et aux athlètes qui aident à entraîner des plus jeunes. Les entraîneurs passent des heures sur la planification et l'administratif ; un assistant IA peut en prendre une partie.",
    "Vous allez configurer un assistant IA gratuit avec des consignes permanentes sur votre équipe, puis l'utiliser pour planifier des entraînements, écrire des messages et créer du matériel pédagogique. Vous fixerez aussi des règles claires : ce qui reste privé et quelles décisions restent humaines.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. Suivez les règles de votre école, de votre club ou de votre ligue sur la technologie, la communication avec les mineurs et les données des élèves."
  ],
  finalTask: "Écrivez les consignes permanentes de votre assistant de coaching (niveau de l'équipe, style, règles de sécurité, ce qu'il ne faut pas inclure), puis utilisez-le pour produire un plan d'entraînement de 90 minutes, un message aux parents sur le programme de la semaine prochaine, une fiche pour un exercice et un quiz de cinq questions sur le système de jeu. Vérifiez et retouchez chaque élément, et confirmez qu'aucune information privée sur les athlètes n'a été utilisée.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des entraîneurs principaux, des entraîneurs adjoints, des directeurs de club et des athlètes qui aident à entraîner des joueurs plus jeunes, souvent bénévoles ou à temps partiel, avec peu de temps pour préparer.",
    startingPoint: "Ils dirigent déjà des entraînements et envoient des messages à l'équipe. Certains ont essayé un assistant IA, mais peu lui donnent des consignes permanentes ou ont écrit des règles sur la vie privée et la sécurité.",
    gap: "La préparation et la paperasse prennent des heures, et une utilisation imprudente de l'IA peut divulguer des données privées d'athlètes, produire des exercices dangereux ou remplacer des décisions qui appartiennent à l'entraîneur. Les entraîneurs doivent utiliser l'IA comme une aide vérifiée, avec des garde-fous clairs, pour gagner du temps tout en gardant les athlètes en sécurité et traités équitablement.",
    constraints: [
      "Des mots simples ; aucune formation technique nécessaire",
      "Appareils : un téléphone ou un ordinateur avec un assistant IA gratuit",
      "Temps : environ cinq minutes par leçon, dans une semaine d'entraînement chargée",
      "Les règles de l'école, du club et de la ligue sur la technologie, les messages aux mineurs et les données des élèves passent en premier",
      "Aucun nom de joueur, aucun détail de santé ni aucune autre donnée privée d'athlète dans une demande à l'IA"
    ],
    prerequisites: "Aucun. Les entraîneurs qui découvrent les assistants IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de tâches d'entraînement de la semaine", action: "lister les tâches de coaching à faire rédiger par un assistant IA et les décisions à garder pour vous", standard: "en gardant pour l'entraîneur les décisions sur le temps de jeu, la sélection et la sécurité" },
    { id: "O2", condition: "Pour votre propre équipe", action: "écrire des consignes permanentes avec le niveau de l'équipe, la durée de l'entraînement, le style et les règles de sécurité", standard: "avec une règle interdisant d'utiliser les noms des joueurs ou des détails de santé" },
    { id: "O3", condition: "Avec vos consignes permanentes", action: "rédiger avec l'IA un plan d'entraînement de 90 minutes et l'ajuster", standard: "pour que les durées s'additionnent, que les exercices conviennent à la tranche d'âge et au matériel, et avec au moins deux changements" },
    { id: "O4", condition: "À partir d'un changement de calendrier ou d'une nouvelle de l'équipe", action: "écrire avec l'IA un message clair et bienveillant aux parents ou aux joueurs et l'envoyer par un canal approuvé", standard: "avec chaque date vérifiée et rien sur un seul joueur dans un message de groupe" },
    { id: "O5", condition: "À partir d'un exercice et d'une combinaison de jeu", action: "créer avec l'IA une fiche d'exercice et un quiz de cinq questions sur le système de jeu", standard: "avec chaque étape et chaque réponse vérifiées par rapport à votre vrai exercice et votre vraie combinaison" },
    { id: "O6", condition: "Avant d'utiliser l'IA pour une tâche de coaching", action: "écrire et respecter des garde-fous sur la vie privée, la sécurité et l'équité", standard: "en confiant les questions médicales et de chaleur au personnel formé et aux recommandations des instances sportives" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Configurer votre assistant de coaching",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'un assistant de coaching IA peut faire",
          minutes: 4,
          goal: "Lister les tâches de coaching à confier à l'IA et les décisions à garder pour vous.",
          text: [
            "Un assistant de coaching IA est un assistant IA général, comme ChatGPT, Microsoft Copilot ou Google Gemini, que vous utilisez pour votre travail d'entraîneur. Il peut rédiger des plans d'entraînement, écrire des e-mails, expliquer des règles, créer des descriptions d'exercices, des quiz et des plannings, et résumer des notes.",
            "Il ne peut pas voir vos joueurs, connaître leur santé ou leurs sentiments, ni assumer de responsabilité. Le temps de jeu, la discipline, les décisions de blessure et de reprise du jeu, les choix de sécurité et tout ce qui touche au bien-être d'un joueur restent entre vos mains et celles des bons professionnels.",
            "Une bonne règle : l'IA rédige, l'entraîneur décide. Tout ce qu'elle écrit est un premier brouillon que vous vérifiez."
          ],
          words: [["Assistant de coaching IA", "un assistant IA général utilisé pour aider aux tâches d'entraîneur."], ["Reprise du jeu", "la décision du moment où un athlète blessé peut rejouer sans danger ; elle est prise par des professionnels de santé."]],
          slides: [
            { title: "L'IA peut rédiger", bullets: ["Plans d'entraînement et plannings", "E-mails et messages", "Descriptions d'exercices et quiz", "Résumés de vos notes"] },
            { title: "L'entraîneur garde", bullets: ["Le temps de jeu et la discipline", "Les choix de sécurité", "Le bien-être ; les blessures vont au personnel médical"] },
            { title: "La règle", bullets: ["L'IA rédige", "L'entraîneur décide"] }
          ],
          tryIt: "Écrivez deux listes : cinq tâches hebdomadaires d'entraîneur que l'IA pourrait rédiger, et cinq décisions que vous garderez toujours.",
          youCanNow: "décider quelles tâches de coaching l'IA peut aider à faire et quelles décisions restent humaines.",
          quickCheck: [
            { objective: "O1", q: "Quelle tâche de coaching l'IA peut-elle rédiger pour vous ?", options: ["Le programme d'entraînement de la semaine", "Qui est titulaire samedi", "Si un joueur blessé peut reprendre", "Comment un joueur se sent aujourd'hui"], answer: 0, why: "L'IA peut rédiger des plans ; la sélection, les blessures et les émotions relèvent de l'entraîneur et du personnel formé." },
            { objective: "O1", q: "À partir de vos notes, l'IA propose de mettre un joueur sur le banc. Que faites-vous ?", options: ["Suivre exactement sa proposition", "Prendre vous-même la décision d'après ce que vous avez vu", "Faire voter les joueurs", "Redemander à l'IA jusqu'à ce qu'elle soit d'accord"], answer: 1, why: "L'IA rédige, l'entraîneur décide, surtout pour le temps de jeu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écrire des consignes permanentes",
          minutes: 5,
          goal: "Écrire des consignes permanentes qui informent l'IA sur votre équipe et vos règles.",
          text: [
            "Les consignes permanentes sont un paragraphe que vous collez au début d'une conversation (ou que vous enregistrez dans les instructions personnalisées ou la fonction projet de l'assistant, s'il en a) pour qu'il connaisse toujours votre contexte.",
            "Incluez : le sport, le niveau et la catégorie d'âge ; la taille de l'équipe ; la durée des entraînements et les installations ; votre style et vos valeurs d'entraîneur ; les règles de sécurité (exercices adaptés à l'âge, pauses pour boire, pas de préparation physique en guise de punition) ; et ce qu'il ne doit jamais inclure (noms des joueurs, détails de santé, notes scolaires).",
            "Exemple : « J'entraîne une équipe de football féminine U12 de 16 joueuses. Les entraînements durent 90 minutes sur un demi-terrain, le mardi et le jeudi. Je valorise l'effort, le plaisir et l'esprit d'équipe. Les plans doivent inclure un échauffement, une pause pour boire toutes les 20 minutes et des exercices adaptés à l'âge. Ne demande et n'utilise jamais les noms des joueuses ni de détails de santé. »"
          ],
          steps: ["Écrivez votre sport, votre niveau, la catégorie d'âge et la taille de l'équipe.", "Ajoutez la durée des entraînements et les installations.", "Ajoutez vos valeurs et votre style d'entraîneur.", "Ajoutez les règles de sécurité.", "Ajoutez ce qu'il ne doit jamais inclure.", "Enregistrez-les là où vous pourrez les coller à chaque fois."],
          words: [["Consignes permanentes", "le contexte que vous donnez à une IA au départ pour que chaque réponse corresponde à votre situation."], ["Adapté à l'âge", "qui convient à l'âge et au développement des joueurs."]],
          slides: [
            { title: "Consignes permanentes", bullets: ["À coller au début de chaque conversation", "Ou à enregistrer dans les réglages de l'assistant, s'il le permet"] },
            { title: "À inclure", bullets: ["Sport, niveau, âge, taille de l'équipe", "Durée des entraînements et espace", "Valeurs et règles de sécurité"] },
            { title: "À ne jamais inclure", bullets: ["Les noms des joueurs", "Les détails de santé", "Les notes scolaires ou infos familiales"] }
          ],
          tryIt: "Écrivez vos consignes permanentes en un paragraphe et enregistrez-les dans une note. Collez-les dans un assistant IA et demandez : « Résume ce que tu sais de mon équipe. » Corrigez tout ce qui est faux.",
          youCanNow: "écrire des consignes permanentes qui adaptent les réponses de l'IA à votre équipe.",
          quickCheck: [
            { objective: "O2", q: "Que sont les consignes permanentes ?", options: ["Une liste des numéros de téléphone des joueurs", "Le règlement de la ligue", "Le contexte sur votre équipe et vos règles que vous donnez à l'IA au départ", "Un exercice d'entraînement"], answer: 2, why: "Les consignes permanentes adaptent chaque réponse de l'IA à votre équipe." },
            { objective: "O2", q: "Le résumé de vos consignes par l'IA dit que votre équipe est en moins de 16 ans, alors qu'elle est en moins de 12 ans. Que faites-vous ?", options: ["L'ignorer", "Supprimer l'application d'IA", "Utiliser quand même les réponses", "Corriger les consignes pour qu'elle ait la bonne tranche d'âge"], answer: 3, why: "Un mauvais contexte donne de mauvais plans, alors vous le corrigez d'abord." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planifier un entraînement avec l'IA",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger un plan d'entraînement de 90 minutes et l'ajuster.",
          text: [
            "Après avoir collé vos consignes permanentes, demandez : « Planifie un entraînement de 90 minutes centré sur [compétence]. Inclus un échauffement, trois exercices progressifs, un jeu réduit, un retour au calme et des pauses pour boire. Donne les durées, l'installation, les points clés de coaching et comment rendre chaque exercice plus facile ou plus difficile. »",
            "Vérifiez-le en entraîneur : les exercices sont-ils sûrs et adaptés à l'âge ? Les durées tombent-elles juste ? Avez-vous l'espace et le matériel ? L'équilibre effort-récupération est-il bon ? Y a-t-il trop de files d'attente et de temps passé à attendre ?",
            "Posez des questions de suivi : « Nous n'avons que 10 ballons. » « Deux joueuses sont nouvelles. » « Remplace l'exercice 2 par quelque chose avec plus de touches de balle. » Gardez les plans qui vous plaisent dans un dossier pour les réutiliser et les améliorer."
          ],
          steps: ["Collez vos consignes permanentes.", "Demandez un plan de 90 minutes avec les durées, l'installation et les points clés.", "Vérifiez la sécurité, les durées, l'espace et le matériel.", "Posez des questions de suivi pour corriger les problèmes.", "Enregistrez le plan final."],
          words: [["Progression", "des exercices qui vont du simple au plus difficile."], ["Jeu réduit", "un jeu avec moins de joueurs et un espace plus petit pour que chacun touche plus le ballon."]],
          slides: [
            { title: "Demandez", bullets: ["Échauffement, 3 exercices progressifs", "Jeu réduit, retour au calme", "Durées, installation, points clés"] },
            { title: "Vérifiez en entraîneur", bullets: ["Sûr et adapté à l'âge ?", "Durées justes ? Espace et matériel ?", "Peu de temps d'attente ?"] },
            { title: "Ajustez", bullets: ["« Nous n'avons que 10 ballons. »", "« Deux joueuses sont nouvelles. »", "Gardez les plans qui vous plaisent"] }
          ],
          tryIt: "Utilisez vos consignes permanentes pour obtenir un plan de 90 minutes pour un vrai entraînement à venir. Faites au moins deux modifications de suivi et enregistrez-le.",
          youCanNow: "planifier un entraînement sûr et bien minuté avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une progression dans un plan d'entraînement ?", options: ["Des exercices qui vont du simple au plus difficile", "Une liste de scores de matchs", "L'ordre d'arrivée des joueurs", "Une pause pour boire"], answer: 0, why: "Une progression construit les compétences étape par étape." },
            { objective: "O3", q: "Le plan de l'IA demande 20 plots et vous en avez 8. Que faites-vous ?", options: ["Annuler l'entraînement", "Dire à l'IA que vous avez 8 plots et lui demander d'ajuster", "Utiliser le plan en espérant que ça marche", "Acheter des plots avant l'entraînement"], answer: 1, why: "Donnez à l'IA vos vraies limites pour que le plan marche sur le terrain." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Configurer votre assistant de coaching",
        questions: [
          { objective: "O1", q: "Quelle tâche convient bien à un assistant de coaching IA ?", options: ["Décider de la reprise du jeu après une commotion", "Sanctionner un joueur", "Rédiger un plan d'entraînement", "Juger les sentiments d'un joueur"], answer: 2, why: "L'IA rédige ; les décisions médicales et personnelles restent aux personnes." },
          { objective: "O1", q: "Quelle est la règle de coaching pour l'IA ?", options: ["L'IA rédige, l'entraîneur décide", "L'IA décide de tout", "Ne jamais utiliser l'IA", "Les joueurs décident"], answer: 0, why: "Chaque production de l'IA est un premier brouillon." },
          { objective: "O2", q: "Qu'est-ce qui a sa place dans les consignes permanentes ?", options: ["Les noms des joueurs", "Les détails de santé des joueurs", "Les notes scolaires des joueurs", "La catégorie d'âge et la durée des entraînements"], answer: 3, why: "Le contexte de l'équipe aide ; les données privées restent dehors." },
          { objective: "O3", q: "Le plan de l'IA contient un exercice dangereux pour des enfants de 10 ans. Vous :", options: ["L'utilisez quand même", "Le remplacez par un exercice adapté à l'âge", "Le rendez plus difficile", "Supprimez les pauses pour boire"], answer: 1, why: "La sécurité et l'adaptation à l'âge passent en premier." },
          { objective: "O3", q: "Un jeu réduit est utile parce que :", options: ["Il est plus long", "Chacun touche plus le ballon", "Il demande plus de matériel", "Les joueurs attendent en file"], answer: 1, why: "Moins de joueurs, c'est plus de participation." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Communication, supports et garde-fous",
      lessons: [
        {
          objectives: ["O4"],
          title: "Messages aux parents et aux joueurs",
          minutes: 5,
          goal: "Écrire un message clair et bienveillant aux parents ou aux joueurs avec l'IA et l'envoyer par les canaux approuvés.",
          text: [
            "Les entraîneurs écrivent beaucoup de messages : plannings, changements, rappels, attentes. Demandez : « Écris un court message amical aux parents sur les changements d'entraînement de la semaine prochaine : mardi passe à 17 h, jeudi est annulé pour la réparation du terrain. Indique quoi apporter. Moins de 100 mots. »",
            "Vérifiez les faits, les dates et le ton. Les messages de groupe parlent de l'équipe ; ne parlez jamais des performances, de la santé ou du comportement d'un joueur dans un message de groupe.",
            "Utilisez le moyen de communication approuvé par votre école ou votre club. Beaucoup d'organisations ont des règles pour les entraîneurs qui écrivent à des mineurs, par exemple inclure un parent ou un autre entraîneur. Les conversations difficiles, comme le temps de jeu ou le comportement, se font mieux en personne ou par téléphone, pas par des textos écrits par l'IA."
          ],
          steps: ["Demandez à l'IA un brouillon court et amical.", "Vérifiez les faits, les dates et le ton.", "Gardez les messages de groupe centrés sur l'équipe.", "Envoyez par les canaux approuvés.", "Menez les conversations difficiles en personne."],
          words: [["Canal approuvé", "le moyen de communication que votre école ou votre club autorise pour les entraîneurs."], ["Ton", "le sentiment que donne un message : amical, ferme, chaleureux."]],
          slides: [
            { title: "L'IA rédige les messages", bullets: ["Plannings, changements, rappels", "Courts et amicaux"] },
            { title: "Vérifiez", bullets: ["Les faits et les dates", "Le ton", "Seulement des sujets d'équipe en groupe"] },
            { title: "Bien l'envoyer", bullets: ["Canaux approuvés", "Respectez les règles pour écrire aux mineurs", "Conversations difficiles en personne"] }
          ],
          tryIt: "Utilisez l'IA pour écrire un vrai message aux parents, ou un message d'entraînement, sur un changement de planning. Vérifiez chaque date et envoyez-le (ou enregistrez-le) par votre canal approuvé.",
          youCanNow: "écrire des messages d'équipe clairs avec l'IA et les envoyer de la bonne façon.",
          quickCheck: [
            { objective: "O4", q: "Sur quoi doit porter un message de groupe à l'équipe ?", options: ["Le comportement d'un joueur", "La blessure d'un joueur", "L'équipe, comme les horaires et les lieux", "Qui va sur le banc"], answer: 2, why: "Les messages de groupe servent aux nouvelles de l'équipe ; les problèmes d'un joueur restent privés." },
            { objective: "O4", q: "L'IA écrit un message aux parents qui dit que l'entraînement a lieu le mardi 14. Que faites-vous avant de l'envoyer ?", options: ["L'envoyer tout de suite", "Ajouter plus d'émojis", "L'envoyer depuis votre compte personnel aux joueurs seulement", "Vérifier la date sur le calendrier"], answer: 3, why: "L'IA peut se tromper de date, alors vous vérifiez chaque date." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fiches d'exercices et quiz sur le système de jeu",
          minutes: 5,
          goal: "Créer une fiche d'exercice et un quiz de cinq questions sur le système de jeu.",
          text: [
            "Les fiches d'exercices aident les entraîneurs adjoints et les joueurs à faire les exercices de la même façon. Demandez : « Fais une fiche d'une page pour [exercice] : objectif, installation, étapes, points clés de coaching, erreurs courantes, et comment le rendre plus facile ou plus difficile. » Ajoutez un schéma simple avec un outil comme Canva ou à la main.",
            "Les quiz aident les joueurs à apprendre le système de jeu et les règles. Demandez : « Écris cinq questions à choix multiples sur notre combinaison de touche : [décrivez-la]. Une seule bonne réponse par question, avec une courte explication. » Vérifiez chaque réponse avec votre vraie combinaison.",
            "Utilisez un outil de quiz comme Google Forms pour le partager, sans collecter plus d'informations personnelles que nécessaire."
          ],
          steps: ["Demandez à l'IA une fiche d'exercice avec l'objectif, l'installation, les étapes et les points clés.", "Ajoutez un schéma simple.", "Décrivez une combinaison et demandez cinq questions de quiz.", "Vérifiez chaque réponse avec votre vraie combinaison.", "Partagez avec un formulaire simple, en collectant le minimum d'infos."],
          words: [["Fiche d'exercice", "un guide d'une page qui explique comment mener un exercice."], ["Système de jeu", "l'ensemble des combinaisons d'une équipe et des règles pour les exécuter."]],
          slides: [
            { title: "Fiche d'exercice", bullets: ["Objectif, installation, étapes", "Points clés, erreurs courantes", "Versions plus faciles et plus difficiles"] },
            { title: "Quiz sur le système de jeu", bullets: ["Décrivez la combinaison", "Cinq questions avec explications", "Vérifiez chaque réponse"] },
            { title: "Partagez simplement", bullets: ["Google Forms ou équivalent", "Collectez le minimum d'infos personnelles"] }
          ],
          tryIt: "Créez avec l'IA une fiche d'exercice et un quiz de cinq questions sur une de vos combinaisons. Vérifiez les deux et corrigez tout ce qui est faux.",
          youCanNow: "créer des fiches d'exercices et des quiz sur le système de jeu avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O5", q: "À quoi sert une fiche d'exercice ?", options: ["À faire l'exercice de la même façon à chaque fois", "À choisir les capitaines", "À payer la cotisation du club", "À réserver un bus"], answer: 0, why: "Une fiche d'exercice donne le but, la mise en place, les étapes et les points clés pour que tout le monde le fasse de la même façon." },
            { objective: "O5", q: "Une réponse du quiz de l'IA ne correspond pas à votre vraie combinaison. Que faites-vous ?", options: ["La partager quand même", "Corriger la réponse avant de partager", "Changer votre combinaison pour qu'elle corresponde", "Retirer le quiz du cours"], answer: 1, why: "Chaque réponse du quiz doit correspondre à la façon dont votre équipe joue vraiment la combinaison." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Garde-fous : vie privée, sécurité et équité",
          minutes: 5,
          goal: "Écrire vos garde-fous pour l'IA dans le coaching et les respecter.",
          text: [
            "Vie privée : ne collez jamais dans les outils d'IA les noms des joueurs avec des informations de santé, des blessures, des notes scolaires, des situations familiales, des coordonnées ou des photos de mineurs. Utilisez les postes ou les numéros. Vérifiez les règles de votre organisation sur les outils autorisés avec les données des élèves ou des joueurs.",
            "Sécurité : l'IA peut proposer des exercices, une préparation physique ou des pratiques par forte chaleur dépassés ou dangereux. Vérifiez les exercices avec les recommandations de votre instance dirigeante et votre soigneur sportif, et n'utilisez jamais l'IA pour des décisions médicales, de commotion ou de reprise du jeu ; la formation gratuite HEADS UP du CDC (l'agence de santé publique américaine) est un bon point de départ pour les bases sur les commotions.",
            "Équité et honnêteté : les décisions de sélection et de temps de jeu viennent de ce que vous observez, et s'expliquent aux joueurs en personne. Soyez transparent avec les familles sur votre usage de l'IA pour la planification, si votre organisation le demande."
          ],
          steps: ["Écrivez votre règle de vie privée : pas de noms avec des infos privées.", "Écrivez votre règle de sécurité : vérifier les exercices ; pas de décisions médicales.", "Écrivez votre règle d'équité : des décisions fondées sur l'observation, expliquées en personne.", "Vérifiez les règles technologiques de votre organisation.", "Partagez les garde-fous avec votre staff."],
          words: [["Garde-fou", "une règle qui vous protège pendant que vous utilisez un outil."], ["Instance dirigeante", "l'organisation qui fixe les règles de votre sport ou de votre niveau."]],
          slides: [
            { title: "Vie privée", bullets: ["Pas de noms avec santé, notes ou infos familiales", "Utilisez les postes ou les numéros", "Suivez les règles d'outils de votre organisation"] },
            { title: "Sécurité", bullets: ["Vérifiez exercices et préparation physique", "Pas de décisions médicales ou de reprise du jeu", "CDC HEADS UP pour les bases sur les commotions"] },
            { title: "Équité", bullets: ["Des décisions fondées sur ce que vous observez", "Expliquées en personne"] }
          ],
          sources: [{ name: "CDC : formation HEADS UP sur les commotions cérébrales (en anglais)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Tâche finale : écrivez vos garde-fous et vos consignes permanentes, puis produisez avec l'IA un plan d'entraînement, un message aux parents, une fiche d'exercice et un quiz, en vérifiant chacun et en confirmant qu'aucune donnée privée d'athlète n'a été utilisée.",
          youCanNow: "utiliser un assistant de coaching IA avec des garde-fous clairs pour la vie privée, la sécurité et l'équité.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un garde-fou pour l'IA dans le coaching ?", options: ["Une clôture autour du terrain", "Un exercice pour les défenseurs", "Une règle qui vous protège quand vous utilisez l'IA", "Un type de graphique"], answer: 2, why: "Les garde-fous fixent ce que vous ferez et ne ferez pas avec l'IA." },
            { objective: "O6", q: "Vous voulez l'aide de l'IA pour la récupération d'un joueur après une commotion cérébrale. Que faites-vous ?", options: ["Coller ses notes médicales", "Suivre la date de reprise donnée par l'IA", "Demander à ses coéquipiers", "Laisser cela aux professionnels de santé"], answer: 3, why: "La décision de reprise après une commotion cérébrale appartient aux professionnels de santé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Communication, supports et garde-fous",
        questions: [
          { objective: "O4", q: "Où parler du comportement d'un joueur ?", options: ["Dans le groupe de discussion de l'équipe", "Sur les réseaux sociaux", "Dans un message de groupe écrit par l'IA", "En privé, en personne ou par téléphone"], answer: 3, why: "Les messages de groupe restent centrés sur l'équipe." },
          { objective: "O5", q: "Une fiche d'exercice contient :", options: ["L'objectif, l'installation, les étapes et les points clés", "Les notes scolaires des joueurs", "Les notes de santé des joueurs", "Rien"], answer: 0, why: "Elle aide tout le monde à mener l'exercice de la même façon." },
          { objective: "O5", q: "L'IA écrit un quiz sur le système de jeu. Avant de le partager, vous :", options: ["Le partagez sans le lire", "Ajoutez des réponses pièges", "Vérifiez chaque réponse avec votre vraie combinaison", "Laissez l'IA noter les joueurs"], answer: 2, why: "L'IA peut se tromper sur votre combinaison." },
          { objective: "O6", q: "Que peut-on coller sans risque dans l'IA ?", options: ["« Maria Lopez, rupture du ligament croisé, sous traitement »", "L'adresse personnelle d'un joueur", "La photo et le nom complet d'un mineur", "« Notre arrière gauche perd souvent son marquage sur les corners »"], answer: 3, why: "Des postes sans nom ni info de santé protègent la vie privée." },
          { objective: "O6", q: "Qui décide de la reprise du jeu après une commotion ?", options: ["Un assistant IA", "Des professionnels de santé", "Le capitaine de l'équipe", "Les parents dans un groupe de discussion"], answer: 1, why: "Les décisions médicales reviennent à des professionnels qualifiés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Assistants de coaching IA",
    questions: [
      { objective: "O1", q: "Un assistant de coaching IA, c'est :", options: ["Un robot sur le banc", "Un arbitre", "Un assistant IA général utilisé pour les tâches d'entraîneur", "Un recruteur payé"], answer: 2, why: "Les entraîneurs utilisent des assistants gratuits pour leur travail." },
      { objective: "O1", q: "Que ne peut PAS faire l'IA ?", options: ["Voir vos joueurs et connaître leurs sentiments", "Rédiger un planning", "Écrire la description d'un exercice", "Résumer des notes"], answer: 0, why: "Elle ne sait que ce que vous lui dites." },
      { objective: "O1", q: "Qui décide du temps de jeu ?", options: ["L'entraîneur", "L'IA", "Un groupe de discussion de parents", "L'adversaire"], answer: 0, why: "Le temps de jeu est une décision humaine." },
      { objective: "O2", q: "Les consignes permanentes sont :", options: ["Un étirement d'équipe", "Un règlement", "Le contexte que vous donnez à l'IA au départ", "Un trophée"], answer: 2, why: "Elles adaptent les réponses à votre équipe." },
      { objective: "O2", q: "Quelle règle de sécurité convient aux consignes permanentes ?", options: ["Jamais de repos", "Une pause pour boire toutes les 20 minutes", "Des tours de terrain en punition", "Pas d'échauffement"], answer: 1, why: "Les règles de sécurité ont leur place dans les consignes." },
      { objective: "O2", q: "Que doivent dire les consignes permanentes de ne jamais inclure ?", options: ["La durée des entraînements", "La catégorie d'âge", "La taille du terrain", "Les noms des joueurs et les détails de santé"], answer: 3, why: "Les données privées restent dehors." },
      { objective: "O3", q: "Une progression, c'est :", options: ["Un défilé", "Des phases finales", "Des exercices qui vont du simple au plus difficile", "Un changement de planning"], answer: 2, why: "Les progressions construisent les compétences pas à pas." },
      { objective: "O3", q: "Les durées du plan de l'IA font 120 minutes pour un entraînement de 90. Vous :", options: ["Faites quand même 120 minutes", "Supprimez l'échauffement", "L'ignorez", "Lui demandez de corriger les durées"], answer: 3, why: "Vérifiez que les durées tombent juste." },
      { objective: "O3", q: "Vous n'avez que 10 ballons. Vous :", options: ["Le dites à l'IA et lui demandez d'ajuster", "Annulez l'entraînement", "En achetez 50 aujourd'hui", "Ignorez le plan"], answer: 0, why: "Les questions de suivi adaptent le plan à vos ressources." },
      { objective: "O4", q: "Un message aux parents sur un changement de planning doit être :", options: ["Long et vague", "Court, amical et vérifié pour les dates", "Envoyé sans vérifier", "Envoyé depuis un compte personnel contre les règles du club"], answer: 1, why: "Clair et exact, c'est le mieux." },
      { objective: "O4", q: "Les messages de groupe doivent parler :", options: ["Des erreurs d'un joueur", "Des détails de la blessure d'un joueur", "De l'équipe", "De rumeurs"], answer: 2, why: "Les questions individuelles restent privées." },
      { objective: "O4", q: "Les règles pour écrire à des mineurs exigent souvent :", options: ["D'inclure un parent ou un autre entraîneur", "Des messages secrets", "Des textos tard le soir", "Des comptes sociaux personnels"], answer: 0, why: "Ces règles protègent les athlètes et les entraîneurs." },
      { objective: "O4", q: "Les conversations difficiles sur le temps de jeu se font mieux :", options: ["Par un texto écrit par l'IA", "Sur les réseaux sociaux", "Dans le groupe de discussion", "En personne ou par téléphone"], answer: 3, why: "Les conversations difficiles demandent une touche humaine." },
      { objective: "O5", q: "Une fiche d'exercice aide à :", options: ["Cacher l'exercice", "Ce que les adjoints et les joueurs fassent les exercices de la même façon", "Remplacer l'entraînement", "Suivre les notes scolaires"], answer: 1, why: "La cohérence améliore l'entraînement." },
      { objective: "O5", q: "Un quiz sur le système de jeu vérifie :", options: ["La santé des joueurs", "Si les joueurs connaissent les combinaisons", "Les notes scolaires des joueurs", "Les emplois du temps des parents"], answer: 1, why: "Les quiz renforcent l'apprentissage." },
      { objective: "O5", q: "Quand vous partagez un quiz avec un formulaire, collectez :", options: ["Les adresses personnelles", "Les mots de passe", "Les antécédents médicaux", "Seulement les informations nécessaires"], answer: 3, why: "Un minimum de données protège les joueurs." },
      { objective: "O6", q: "Un garde-fou, c'est :", options: ["Une règle qui vous protège pendant que vous utilisez un outil", "Une clôture", "Un exercice", "Un uniforme"], answer: 0, why: "Les garde-fous évitent les mauvais usages." },
      { objective: "O6", q: "L'IA propose une préparation physique intense par forte chaleur. Vous :", options: ["La faites", "La rallongez", "Vérifiez avec votre soigneur sportif et les recommandations de l'instance dirigeante", "Supprimez l'eau"], answer: 2, why: "L'IA peut proposer des pratiques dangereuses." },
      { objective: "O6", q: "Une instance dirigeante, c'est :", options: ["Une salle de sport", "Un sponsor", "Un groupe de parents", "L'organisation qui fixe les règles de votre sport ou de votre niveau"], answer: 3, why: "Elle fixe les règles officielles." },
      { objective: "O1", q: "Les décisions de sélection doivent venir :", options: ["De suppositions de l'IA", "De ce que l'entraîneur observe", "Des réseaux sociaux", "De rumeurs"], answer: 1, why: "Les décisions équitables viennent d'une vraie observation." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Consignes permanentes",
        objective: "O2",
        notYet: "Il manque le niveau de l'équipe, la durée de l'entraînement ou les règles de sécurité.",
        meets: "Niveau de l'équipe, durée, style, règles de sécurité et une règle « aucune donnée privée ».",
        exceeds: "Liste aussi le matériel et l'espace pour que les plans collent au vrai terrain."
      },
      {
        name: "Plan d'entraînement",
        objective: "O3",
        notYet: "Les durées ne font pas 90 minutes, ou un exercice est dangereux pour la tranche d'âge.",
        meets: "Un plan de 90 minutes avec des durées justes et des exercices sûrs, modifié au moins deux fois.",
        exceeds: "A une progression claire et des pauses pour boire, et note la raison de chaque changement."
      },
      {
        name: "Message aux parents",
        objective: "O4",
        notYet: "Des dates fausses, un ton peu aimable ou des détails privés sur un joueur.",
        meets: "Court, aimable, dates vérifiées, envoyé ou enregistré par un canal approuvé.",
        exceeds: "Indique aussi qui contacter en cas de question, en respectant les règles sur les messages aux mineurs."
      },
      {
        name: "Fiche d'exercice et quiz",
        objective: "O5",
        notYet: "Une étape ou une réponse du quiz ne correspond pas au vrai exercice ou à la vraie combinaison.",
        meets: "Fiche avec le but, la mise en place, les étapes et les points clés ; cinq questions de quiz vérifiées.",
        exceeds: "Le quiz ne recueille pas plus d'informations que nécessaire et couvre les moments clés de la combinaison."
      },
      {
        name: "Garde-fous et vie privée",
        objective: "O6",
        notYet: "Une demande contient des noms de joueurs ou des détails de santé, ou l'IA a pris une décision d'entraîneur.",
        meets: "Garde-fous écrits et respectés ; aucune donnée privée d'athlète utilisée ; les décisions restent à l'entraîneur.",
        exceeds: "Les garde-fous disent aussi où vont les questions médicales et de chaleur."
      }
    ]
  },
  evaluation: {
    results: [
      "Les entraîneurs qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les entraîneurs qui disent gagner du temps sur la préparation et les messages de la semaine (enquête de suivi à 30 jours)",
      "Les clubs ou les écoles qui adoptent des garde-fous écrits sur l'IA pour leurs entraîneurs",
      "Les apprenants qui commencent un autre cours Koach Learn pour athlètes dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un assistant IA gratuit",
      "Une application de notes ou du papier pour garder les consignes permanentes et les garde-fous",
      "Le calendrier de votre équipe, la liste du matériel et une combinaison ou un exercice à travailler",
      "Environ 60 minutes au total pour les leçons, les exercices pratiques, les vérifications et le quiz"
    ],
    facilitatorNotes: [
      "Organisez-le comme un atelier d'entraîneurs : écrivez ensemble les consignes permanentes, puis chaque entraîneur rédige un plan pour sa propre équipe.",
      "Présentez les règles de votre club ou de votre école sur les messages aux mineurs et les données des élèves avant la leçon 4.",
      "Vérifiez que personne ne colle de noms de joueurs, de détails de santé ou de photos de mineurs dans un outil d'IA.",
      "Faites relire les recommandations sur la chaleur et la préparation physique par un soigneur sportif ou un responsable de la sécurité.",
      "Notez la tâche finale avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
