"use strict";

// Koach Learn course (French translation of leadership/lead-coaching-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-coaching-mentoring-fr",
  lang: "fr",
  translationOf: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Coaching et mentorat",
  skills: "Distinguer coaching et mentorat, Écouter pleinement, Poser des questions puissantes, Mener une conversation GROW, Fixer un objectif de développement, Accords de mentorat et suivi des progrès",
  outcome: "mener une conversation de coaching avec le modèle GROW en écoutant bien et en posant des questions ouvertes, aider une personne à fixer un objectif de développement clair, convenir du fonctionnement d'une relation de mentorat, et suivre ses progrès dans le temps.",
  about: [
    "Ce cours s'adresse à toute personne qui aide les autres à grandir : managers, chefs d'équipe, enseignants, entraîneurs, pasteurs, responsables de jeunes, et travailleurs expérimentés qui accompagnent les nouveaux.",
    "Le coaching et le mentorat sont des compétences qui s'apprennent. Vous verrez la différence entre les deux, comment écouter pour que les gens se sentent entendus, comment poser des questions qui aident à réfléchir, comment mener une conversation avec le modèle GROW, et comment fixer et suivre un objectif de développement.",
    "Chaque leçon dure environ cinq minutes. Si possible, trouvez un partenaire d'entraînement (un collègue, un ami ou un membre de votre famille) pour les tâches \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Menez une conversation de coaching de 20 minutes avec un partenaire d'entraînement en suivant GROW. Écoutez plus que vous ne parlez et posez au moins cinq questions ouvertes. Ensemble, écrivez son objectif de développement sous une forme claire et mesurable, un accord de mentorat d'un paragraphe (à quelle fréquence vous vous voyez, comment, pendant combien de temps, ce qui reste confidentiel) et un tableau de suivi simple avec trois dates de point d'étape.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chefs d'équipe, des superviseurs, des managers, des enseignants, des responsables de communautés et d'associations, et des travailleurs expérimentés qui veulent accompagner d'autres personnes par le coaching ou le mentorat.",
    startingPoint: "On leur demande souvent de l'aide, et ils répondent en général en donnant des conseils. Peu ont pratiqué l'écoute complète, les questions ouvertes, une conversation de coaching structurée ou un accord de mentorat écrit.",
    gap: "Donner les réponses rend les gens dépendants et passe à côté de ce dont ils ont vraiment besoin. Les responsables doivent écouter, poser des questions ouvertes, guider une conversation avec GROW, aider à fixer un objectif de développement clair et suivre les progrès, pour que les personnes qu'ils accompagnent apprennent à réfléchir par elles-mêmes.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Temps : des leçons courtes, plus une conversation d'entraînement de 20 minutes",
      "Un partenaire d'entraînement est nécessaire pour la tâche finale",
      "Vie privée : ce qui se dit en coaching et en mentorat reste confidentiel, sauf accord contraire",
      "Les consignes de sécurité se donnent directement, sans passer par le coaching"
    ],
    prerequisites: "Aucun. Le cours « Gérer une équipe » est un bon complément."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à une situation où quelqu'un a besoin d'aide", action: "choisir si elle demande du coaching, du mentorat ou une consigne", standard: "en réussissant au moins 4 situations sur 5" },
    { id: "O2", condition: "Pendant une conversation", action: "écouter sans interrompre et résumer ce que vous avez entendu", standard: "pour que la personne confirme que vous avez compris ou vous corrige" },
    { id: "O3", condition: "Quand quelqu'un vous demande conseil", action: "poser des questions ouvertes qui commencent par « qu'est-ce que » ou « comment » au lieu de donner des conseils", standard: "en posant au moins cinq questions ouvertes dans une même conversation" },
    { id: "O4", condition: "Pendant une conversation de coaching de 20 minutes", action: "guider l'échange à travers Goal (objectif), Reality (réalité), Options et Will (volonté)", standard: "en terminant par une première étape, une date et une note d'engagement" },
    { id: "O5", condition: "À partir d'un souhait de développer une compétence", action: "écrire un objectif de développement clair avec de petites étapes d'apprentissage", standard: "qui dit quoi, combien et pour quand, et qui appartient à la personne" },
    { id: "O6", condition: "Au début d'une relation de mentorat", action: "écrire un accord de mentorat d'un paragraphe et un tableau de suivi avec trois dates de point d'étape", standard: "en couvrant la fréquence, la façon de se voir, la durée et ce qui reste confidentiel" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les conversations de coaching",
      lessons: [
        {
          objectives: ["O1"],
          title: "Coaching et mentorat : quelle différence ?",
          minutes: 4,
          goal: "Choisir si une situation demande du coaching, du mentorat ou simplement une consigne.",
          text: [
            "Le coaching aide une personne à trouver ses propres réponses grâce aux questions et à l'écoute. Le coach n'a pas besoin de mieux connaître le travail ; c'est la personne coachée qui fait l'essentiel de la réflexion. Cela marche bien quand quelqu'un a les compétences ou les connaissances mais se sent bloqué, ou doit développer son jugement.",
            "Le mentorat est une relation plus longue où une personne plus expérimentée partage des conseils, des histoires, des contacts et des leçons apprises. Le mentor travaille souvent dans le même domaine. Cela marche bien pour les choix de carrière, pour comprendre \"comment les choses se passent vraiment\" et pour se construire un réseau.",
            "Parfois, ni l'un ni l'autre ne convient, et il faut simplement dire quoi faire. Un nouveau travailleur sur le point de faire une erreur de sécurité a besoin d'une consigne, pas de questions. Les bons leaders passent de la consigne au coaching et au mentorat selon ce dont la personne a besoin."
          ],
          words: [["Coaching", "aider quelqu'un à trouver ses propres réponses en posant des questions et en écoutant."], ["Mentorat", "une relation plus longue où une personne plus expérimentée partage des conseils et des leçons."], ["Mentoré", "la personne accompagnée par un mentor."], ["Coaché", "la personne qui reçoit le coaching."]],
          slides: [
            { title: "Le coaching", bullets: ["Questions et écoute", "La personne fait la réflexion", "Utile quand elle est bloquée ou développe son jugement"] },
            { title: "Le mentorat", bullets: ["Une relation plus longue", "Partage d'expérience, de conseils et de contacts", "Utile pour la carrière et pour comprendre comment les choses se passent"] },
            { title: "Parfois, il faut simplement dire", bullets: ["Risques pour la sécurité", "Tâches toutes nouvelles", "Changez de style selon le besoin"] }
          ],
          tryIt: "Écrivez trois situations réelles de votre travail ou de votre vie où quelqu'un vous a demandé de l'aide. Pour chacune, notez si le coaching, le mentorat ou la consigne aiderait le plus, et pourquoi.",
          youCanNow: "distinguer le coaching du mentorat et choisir la bonne approche selon la situation.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le mentorat ?", options: ["Une consigne de sécurité donnée une seule fois", "Une relation plus longue où une personne plus expérimentée partage conseils et leçons", "Poser seulement des questions fermées", "Une évaluation de la performance"], answer: 1, why: "Le mentorat partage l'expérience dans la durée, souvent dans le même domaine." },
            { objective: "O1", q: "Un membre de l'équipe veut savoir comment fonctionnent vraiment les promotions dans votre domaine. Quelle approche convient le mieux ?", options: ["Lui dire de lire seul la politique", "Le coacher uniquement avec des questions", "L'ignorer jusqu'à l'entretien annuel", "Le mentorer en partageant votre expérience et vos contacts"], answer: 3, why: "Le mentorat convient aux choix de carrière et à la compréhension de la façon dont les choses fonctionnent vraiment." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écouter pour que les gens se sentent entendus",
          minutes: 5,
          goal: "Écouter pleinement et montrer que vous avez compris en résumant.",
          text: [
            "La plupart d'entre nous écoutent en préparant ce qu'ils vont dire ensuite. En coaching, cela gêne. Écouter pleinement, c'est donner toute votre attention à l'autre : téléphone rangé, regard sur la personne, pas d'interruption, et sans placer votre propre histoire.",
            "Montrez que vous écoutez. Hochez la tête, dites \"continuez\", et toutes les quelques minutes, résumez : \"Si je comprends bien, vous voulez diriger le projet mais vous avez peur que l'équipe ne suive pas. C'est bien ça ?\" Un bon résumé permet à la personne d'entendre sa propre réflexion et de vous corriger si vous vous êtes trompé.",
            "Écoutez les sentiments et les valeurs, pas seulement les faits : \"Vous avez l'air frustré\" ou \"On dirait que la justice compte beaucoup pour vous.\" Apprenez à être à l'aise avec le silence. Une pause vient souvent juste avant la meilleure idée de la personne."
          ],
          steps: ["Rangez votre téléphone et tournez-vous vers la personne.", "N'interrompez pas et ne placez pas votre propre histoire.", "Encouragez-la : hochez la tête, \"continuez\".", "Résumez ce que vous avez entendu et demandez si c'est juste.", "Nommez les sentiments que vous remarquez.", "Laissez de la place au silence."],
          words: [["Écoute active", "écouter avec toute son attention et montrer qu'on a compris, par exemple en résumant."], ["Résumer", "redire brièvement les points principaux avec ses propres mots."]],
          slides: [
            { title: "Écouter pleinement", bullets: ["Téléphone rangé, regard sur la personne", "Pas d'interruption", "Ne placez pas votre propre histoire"] },
            { title: "Montrez que vous écoutez", bullets: ["Hochez la tête, \"continuez\"", "Résumez : \"Si je comprends bien...\"", "Demandez : \"C'est bien ça ?\""] },
            { title: "Écouter plus profondément", bullets: ["Entendez les sentiments et les valeurs, pas seulement les faits", "Laissez le silence : les bonnes idées suivent souvent"] }
          ],
          tryIt: "Demandez à un partenaire de parler pendant trois minutes de quelque chose qu'il veut améliorer. Ne donnez aucun conseil. Ensuite, résumez ce que vous avez entendu en deux phrases et demandez : \"Est-ce que j'ai bien compris ?\"",
          youCanNow: "écouter avec toute votre attention et résumer pour que l'autre se sente entendu.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui empêche d'écouter pleinement ?", options: ["Préparer ce que vous allez dire ensuite", "Hocher la tête", "Résumer", "Laisser des silences"], answer: 0, why: "Préparer votre réponse veut dire que vous n'écoutez pas pleinement." },
            { objective: "O2", q: "Pendant qu'une personne parle d'un problème, vous pensez à une histoire semblable qui vous est arrivée. Que faites-vous ?", options: ["Raconter votre histoire tout de suite", "L'interrompre pour donner un conseil", "Continuer d'écouter et résumer ce qu'elle a dit", "Regarder votre téléphone"], answer: 2, why: "Écouter pleinement, c'est ne pas se lancer dans sa propre histoire." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Poser des questions puissantes",
          minutes: 5,
          goal: "Transformer des conseils en questions ouvertes qui aident les gens à réfléchir par eux-mêmes.",
          text: [
            "Une question puissante est ouverte (on ne peut pas y répondre par oui ou non), courte, et porte sur la réflexion de l'autre. Elle commence souvent par \"qu'est-ce que\" ou \"comment\" : \"À quoi ressemblerait la réussite ?\" \"Qu'avez-vous déjà essayé ?\" \"Qu'est-ce qui vous retient vraiment ?\"",
            "Méfiez-vous des conseils déguisés en questions, comme \"Avez-vous pensé à l'appeler ?\" C'est votre idée, pas la sienne. Faites aussi attention aux questions \"pourquoi\", qui peuvent sembler accusatrices. \"Qu'est-ce qui vous a amené à cela ?\" paraît souvent plus bienveillant que \"Pourquoi avez-vous fait ça ?\"",
            "Une question très efficace est : \"Et quoi d'autre ?\" Elle aide les gens à aller au-delà de leur première réponse. Posez une seule question à la fois, puis taisez-vous et écoutez."
          ],
          steps: ["Commencez par \"qu'est-ce que\" ou \"comment\".", "Restez court et centré sur sa réflexion.", "Évitez les conseils déguisés en questions.", "Remplacez \"pourquoi\" par \"qu'est-ce qui vous a amené à...\".", "Demandez : \"Et quoi d'autre ?\"", "Posez une question, puis taisez-vous et écoutez."],
          words: [["Question ouverte", "une question à laquelle on ne peut pas répondre seulement par oui ou non."], ["Question fermée", "une question à laquelle on répond par oui, par non ou par un seul fait."]],
          slides: [
            { title: "Une question puissante est", bullets: ["Ouverte et courte", "Centrée sur la réflexion de l'autre", "Commence souvent par \"qu'est-ce que\" ou \"comment\""] },
            { title: "Exemples", bullets: ["\"À quoi ressemblerait la réussite ?\"", "\"Qu'avez-vous déjà essayé ?\"", "\"Qu'est-ce qui vous retient vraiment ?\"", "\"Et quoi d'autre ?\""] },
            { title: "Attention aux pièges", bullets: ["Un conseil déguisé en question", "Les questions \"pourquoi\" qui semblent accusatrices", "Poser deux questions à la fois"] }
          ],
          tryIt: "Notez trois conseils que vous donnez souvent. Transformez chacun en question ouverte. Par exemple, \"Vous devriez demander à votre chef\" devient \"Qui pourrait vous aider avec cela ?\"",
          youCanNow: "poser des questions courtes et ouvertes qui aident les gens à trouver leurs propres réponses.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui rend une question « ouverte » ?", options: ["Elle est très longue", "On ne peut pas y répondre par oui ou par non", "Elle contient votre conseil", "Elle commence par « pourquoi »"], answer: 1, why: "Les questions ouvertes invitent la personne à réfléchir et à expliquer." },
            { objective: "O3", q: "Vous voulez proposer votre idée : « Parlez à votre superviseur ». Comment la transformer en question de coaching ?", options: ["« Avez-vous pensé à parler à votre superviseur ? »", "« Pourquoi n'avez-vous pas parlé à votre superviseur ? »", "« Vous devriez parler à votre superviseur. »", "« Qui pourrait vous aider là-dessus ? »"], answer: 3, why: "Une question ouverte laisse la personne trouver l'idée ; les autres sont des conseils ou des reproches." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les conversations de coaching",
        questions: [
          { objective: "O1", q: "En coaching, qui fait l'essentiel de la réflexion ?", options: ["Le coach", "La personne coachée", "Le chef", "Un livre"], answer: 1, why: "Le coaching aide la personne à trouver ses propres réponses." },
          { objective: "O1", q: "Un nouveau travailleur est sur le point d'utiliser une machine de façon dangereuse. Quelle approche convient le mieux ?", options: ["Une longue conversation de coaching", "Un accord de mentorat", "Lui dire clairement comment faire en sécurité", "Demander \"Et quoi d'autre ?\""], answer: 2, why: "Les risques pour la sécurité demandent une consigne claire." },
          { objective: "O2", q: "Quel est un bon résumé pendant l'écoute ?", options: ["\"Ça m'est arrivé à moi aussi, une fois...\"", "\"Vous n'avez qu'à démissionner.\"", "\"Bon, passons à autre chose.\"", "\"Donc vous voulez diriger le projet mais vous craignez que l'équipe ne suive pas. C'est bien ça ?\""], answer: 3, why: "Il reprend ses points principaux et vérifie que vous avez compris." },
          { objective: "O3", q: "Laquelle est une question ouverte ?", options: ["\"Qu'avez-vous déjà essayé ?\"", "\"Vous l'avez appelée ?\"", "\"On est mardi ?\"", "\"Vous avez fini ?\""], answer: 0, why: "On ne peut pas y répondre par oui ou non." },
          { objective: "O3", q: "\"Avez-vous pensé à l'appeler ?\" pose problème parce que c'est :", options: ["Trop long", "Un conseil déguisé en question", "Trop ouvert", "Centré sur les sentiments"], answer: 1, why: "Elle apporte votre idée au lieu de faire émerger la sienne." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Des progrès qui durent",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mener une conversation avec le modèle GROW",
          minutes: 6,
          goal: "Guider une conversation de coaching à travers l'objectif (Goal), la réalité (Reality), les options (Options) et l'engagement (Will).",
          text: [
            "GROW est une carte simple et très utilisée pour une conversation de coaching. Le nom vient de l'anglais. G, c'est le Goal, l'objectif : qu'est-ce que la personne veut de cet échange, et à plus long terme ? R, c'est la Reality, la réalité : que se passe-t-il maintenant, qu'a-t-elle essayé ? O, ce sont les Options : que pourrait-elle faire ? W, c'est le Will, la volonté (ou la suite) : que va-t-elle faire, et quand ?",
            "Prenez le temps sur la réalité avant de passer aux options. Souvent, la personne voit la réponse dès que la situation est claire. Pour les options, demandez plusieurs idées, et \"quoi d'autre ?\", avant de choisir. Si vous avez une idée, vous pouvez la proposer en dernier, comme une option parmi d'autres.",
            "Terminez par un engagement clair : \"Quelle est votre première étape, et quand allez-vous la faire ?\" Demandez à quel point la personne est sûre d'elle, sur une échelle de 1 à 10. Si la note est basse, demandez ce qui la ferait monter."
          ],
          steps: ["Objectif : \"Qu'attendez-vous de cet échange ?\"", "Réalité : \"Que se passe-t-il maintenant ? Qu'avez-vous essayé ?\"", "Options : \"Que pourriez-vous faire ? Quoi d'autre ?\"", "Volonté : \"Qu'allez-vous faire, et pour quand ?\"", "Vérifiez l'engagement : \"À quel point êtes-vous sûr, de 1 à 10 ?\""],
          words: [["Modèle GROW", "une carte de coaching en quatre étapes : Goal (objectif), Reality (réalité), Options, Will (volonté)."], ["Engagement", "une promesse claire de faire une action précise avant une date donnée."]],
          slides: [
            { title: "Le modèle GROW", bullets: ["Goal (objectif) : que voulez-vous ?", "Reality (réalité) : que se passe-t-il maintenant ?", "Options : que pourriez-vous faire ?", "Will (volonté) : qu'allez-vous faire, et pour quand ?"] },
            { title: "Prenez le temps sur la réalité", bullets: ["La réponse apparaît souvent quand la situation est claire", "Ne vous précipitez pas vers les solutions"] },
            { title: "Les options, puis l'engagement", bullets: ["Demandez plusieurs idées, et \"quoi d'autre ?\"", "Proposez votre idée en dernier, comme une option", "\"À quel point êtes-vous sûr, de 1 à 10 ?\""] }
          ],
          tryIt: "Écrivez une question GROW pour chaque étape sur une fiche. Avec un partenaire, menez une conversation GROW de 15 minutes sur quelque chose qu'il veut améliorer. Terminez par sa première étape et une date.",
          youCanNow: "guider une conversation de coaching, de l'objectif jusqu'à une prochaine étape claire et engagée, avec GROW.",
          quickCheck: [
            { objective: "O4", q: "Dans GROW, que signifie le O ?", options: ["Options", "Outcome (résultat)", "Order (ordre)", "Opinion"], answer: 0, why: "GROW signifie Goal, Reality, Options, Will." },
            { objective: "O4", q: "Au bout de dix minutes, la personne n'a cité qu'une seule option. Que demandez-vous ?", options: ["« C'est votre réponse définitive ? »", "« Voilà ce que je ferais. »", "« Et quoi d'autre ? »", "« Pourquoi une seule ? »"], answer: 2, why: "« Et quoi d'autre ? » aide les gens à aller au-delà de leur première réponse." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fixer un objectif de développement",
          minutes: 5,
          goal: "Aider quelqu'un à transformer un souhait en objectif de développement clair et mesurable.",
          text: [
            "Un objectif de développement porte sur une compétence à faire grandir, pas seulement sur une tâche à terminer. \"Mieux parler en public\" est un souhait. Un objectif clair dit quoi, combien et pour quand : \"Animer seul la réunion d'équipe du lundi, trois semaines de suite, d'ici fin mars.\"",
            "Beaucoup de gens utilisent SMART pour vérifier un objectif : Spécifique, Mesurable, Atteignable, Pertinent et limité dans le Temps. L'objectif doit appartenir à la personne. Demandez-lui ce qu'elle veut développer, et pourquoi c'est important pour elle, avant d'ajouter ce que le poste demande.",
            "Découpez l'objectif en petites étapes d'apprentissage : quelque chose à lire ou à regarder, quelqu'un à observer ou à accompagner, une occasion de s'entraîner, et quelqu'un pour donner un retour. On progresse surtout en faisant, pas seulement en suivant des cours."
          ],
          steps: ["Demandez ce qu'elle veut développer et pourquoi c'est important.", "Écrivez-le sous forme de quoi, combien, pour quand.", "Vérifiez-le avec SMART.", "Listez les étapes d'apprentissage : lire, observer quelqu'un, s'entraîner, recevoir un retour.", "Convenez de la première étape."],
          words: [["Objectif de développement", "un objectif pour faire grandir une compétence ou une capacité."], ["SMART", "une vérification d'objectif : Spécifique, Mesurable, Atteignable, Pertinent, limité dans le Temps."], ["Observation en situation", "apprendre en regardant quelqu'un faire le travail (en anglais, shadowing)."]],
          slides: [
            { title: "Souhait ou objectif", bullets: ["Souhait : \"Mieux parler en public\"", "Objectif : \"Animer seul la réunion du lundi, 3 semaines de suite, d'ici fin mars\""] },
            { title: "Vérifiez-le avec SMART", bullets: ["Spécifique et Mesurable", "Atteignable et Pertinent", "Limité dans le Temps"] },
            { title: "Son objectif, ses raisons", bullets: ["Demandez ce qu'elle veut développer", "Demandez pourquoi c'est important pour elle"] },
            { title: "Les étapes d'apprentissage", bullets: ["Lire ou regarder", "Observer quelqu'un au travail", "S'entraîner", "Recevoir un retour"] }
          ],
          tryIt: "Avec votre partenaire d'entraînement, transformez un souhait en objectif de développement SMART. Ensuite, listez trois étapes d'apprentissage, dont au moins une occasion de s'entraîner.",
          youCanNow: "aider quelqu'un à écrire un objectif de développement clair et les étapes d'apprentissage pour l'atteindre.",
          quickCheck: [
            { objective: "O5", q: "Lequel est un souhait plutôt qu'un objectif de développement clair ?", options: ["« Présenter seul le rapport mensuel lors de deux réunions d'ici juin »", "« Devenir meilleur à l'oral »", "« Animer seul trois briefings de sécurité d'ici la fin du trimestre »", "« Former deux nouveaux employés à la caisse d'ici le 1er mai »"], answer: 1, why: "Un objectif clair dit quoi, combien et pour quand ; un souhait, non." },
            { objective: "O5", q: "La personne que vous mentorez veut mieux gérer les clients mécontents. Quelle étape d'apprentissage ajoutez-vous d'abord ?", options: ["Seulement un long cours en ligne", "Rien avant l'année prochaine", "Observer un collègue compétent, puis s'entraîner avec des retours", "Lire l'histoire de l'entreprise"], answer: 2, why: "L'essentiel des progrès vient de la pratique, avec des retours." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Accords de mentorat et suivi des progrès",
          minutes: 5,
          goal: "Écrire un accord de mentorat simple et un tableau de suivi pour suivre les progrès d'une personne.",
          text: [
            "Une relation de mentorat marche mieux avec un court accord au départ. Mettez-vous d'accord sur le but, la fréquence des rencontres (par exemple une fois par mois pendant six mois), la manière (en personne, par téléphone ou en vidéo), ce qui reste confidentiel, qui fixe l'ordre du jour (en général le mentoré), et comment chacun peut y mettre fin avec respect.",
            "Suivez les progrès pour que vous les voyiez tous les deux. Un tableau de suivi simple peut être un document ou un tableur partagé avec l'objectif, les étapes d'apprentissage, les dates des points d'étape, ce qui a été essayé, ce qui a été appris et la prochaine étape. Célébrez les progrès, même les petits.",
            "À chaque point d'étape, revenez à l'objectif, demandez ce qui s'est bien passé et ce qui a été difficile, et convenez de la prochaine étape. À la fin, faites ensemble le bilan de ce qui a changé, et parlez de la suite : un nouvel objectif, un nouveau mentor, ou devenir mentor à son tour."
          ],
          steps: ["Convenez du but, de la fréquence, de la manière et de la durée.", "Convenez de ce qui reste confidentiel et de qui fixe l'ordre du jour.", "Convenez de la façon dont chacun peut y mettre fin avec respect.", "Créez un tableau de suivi : objectif, étapes, dates, apprentissages, prochaine étape.", "À chaque point d'étape : revoir, réfléchir, prochaine étape.", "À la fin, faites le bilan de ce qui a changé et de la suite."],
          words: [["Accord de mentorat", "une courte entente écrite sur le fonctionnement d'une relation de mentorat."], ["Tableau de suivi", "un relevé simple des progrès vers un objectif, avec des dates."], ["Point d'étape", "une rencontre prévue pour faire le point sur les progrès."]],
          slides: [
            { title: "L'accord de mentorat", bullets: ["But, fréquence, manière, durée", "Ce qui reste confidentiel", "Le mentoré fixe en général l'ordre du jour", "Comment y mettre fin avec respect"] },
            { title: "Un tableau de suivi simple", bullets: ["Objectif et étapes d'apprentissage", "Dates des points d'étape", "Ce qui a été essayé et appris, prochaine étape"] },
            { title: "À chaque point d'étape", bullets: ["Revenez à l'objectif", "Qu'est-ce qui a bien marché ? Qu'est-ce qui a été difficile ?", "Convenez de la prochaine étape ; célébrez les progrès"] }
          ],
          tryIt: "Tâche finale : menez une conversation GROW de 20 minutes avec votre partenaire. Ensuite, écrivez ensemble son objectif de développement SMART, un accord de mentorat d'un paragraphe et un tableau de suivi avec trois dates de point d'étape.",
          youCanNow: "mettre en place une relation de mentorat avec un accord clair et suivre les progrès d'une personne dans le temps.",
          quickCheck: [
            { objective: "O6", q: "Qui fixe en général l'ordre du jour d'une rencontre de mentorat ?", options: ["Le responsable du mentor", "Le mentor", "Les ressources humaines", "La personne mentorée"], answer: 3, why: "C'est en général la personne mentorée qui fixe l'ordre du jour, puisqu'il s'agit de ses progrès." },
            { objective: "O6", q: "Lors d'un point d'étape, la personne que vous mentorez a fait un petit pas en avant. Que faites-vous ?", options: ["Le célébrer et convenir de la prochaine étape", "Dire que ce n'est pas assez", "Passer à un nouvel objectif", "Annuler le prochain point d'étape"], answer: 0, why: "Célébrer les petits progrès garde les gens motivés." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Des progrès qui durent",
        questions: [
          { objective: "O4", q: "Que signifie le R de GROW ?", options: ["Results (résultats)", "Rules (règles)", "Reward (récompense)", "Reality (réalité)"], answer: 3, why: "Reality, la réalité : ce qui se passe maintenant." },
          { objective: "O4", q: "Quand proposer votre propre idée à l'étape des options ?", options: ["En premier, pour ne pas perdre de temps", "En dernier, comme une option parmi d'autres", "Jamais, en aucun cas", "Seulement par écrit"], answer: 1, why: "La proposer en dernier laisse sa réflexion passer en premier." },
          { objective: "O5", q: "Lequel est un objectif de développement clair ?", options: ["\"Être un meilleur leader\"", "\"Faire plus d'efforts\"", "\"Animer seul la réunion du lundi trois semaines de suite d'ici fin mars\"", "\"Apprendre des trucs\""], answer: 2, why: "Il dit quoi, combien et pour quand." },
          { objective: "O6", q: "Qui fixe en général l'ordre du jour d'une rencontre de mentorat ?", options: ["Le mentoré", "Le chef du mentor", "Les ressources humaines", "Personne"], answer: 0, why: "La relation sert à faire grandir le mentoré." },
          { objective: "O6", q: "Que contient un tableau de suivi simple ?", options: ["Seulement les avis du mentor", "Des mots de passe privés", "Rien d'écrit", "L'objectif, les étapes, les dates des points d'étape, ce qui a été appris et la prochaine étape"], answer: 3, why: "Cela permet aux deux personnes de voir les progrès." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Coaching et mentorat",
    questions: [
      { objective: "O1", q: "Le coaching consiste surtout à :", options: ["Dire aux gens quoi faire", "Aider les gens à trouver leurs propres réponses grâce aux questions et à l'écoute", "Distribuer des récompenses", "Contrôler les présences"], answer: 1, why: "C'est la personne coachée qui fait la réflexion." },
      { objective: "O1", q: "Le mentorat est en général :", options: ["Un ordre ponctuel", "Un examen", "Une relation plus longue où l'on partage son expérience", "Une punition"], answer: 2, why: "Les mentors partagent leur expérience dans la durée." },
      { objective: "O1", q: "Un travailleur compétent hésite entre deux bonnes approches. Qu'est-ce qui convient le mieux ?", options: ["Le coaching", "Lui donner la réponse", "Ignorer la situation", "Un avertissement écrit"], answer: 0, why: "Il a les compétences ; le coaching l'aide à utiliser son jugement." },
      { objective: "O2", q: "Écouter pleinement, c'est :", options: ["Regarder son téléphone pendant que l'autre parle", "Préparer sa réponse", "Raconter tout de suite sa propre histoire", "Donner toute son attention, sans interrompre"], answer: 3, why: "Une attention sans interruption aide les gens à réfléchir." },
      { objective: "O2", q: "Pourquoi résumer ce que vous avez entendu ?", options: ["Pour terminer l'échange", "Pour que la personne entende sa propre réflexion et puisse vous corriger", "Pour montrer que vous êtes plus intelligent", "Pour changer de sujet"], answer: 1, why: "Un résumé vérifie la compréhension et aide à réfléchir." },
      { objective: "O2", q: "La personne se tait après une question. Vous devez :", options: ["Combler le silence avec des conseils", "Poser trois autres questions", "Laisser le silence ; une bonne idée suit souvent", "Mettre fin à la rencontre"], answer: 2, why: "Le silence laisse aux gens de la place pour réfléchir." },
      { objective: "O3", q: "Quelle est la question de coaching la plus puissante ?", options: ["\"Vous l'avez fait ?\"", "\"Ce n'est pas évident ?\"", "\"Pourquoi feriez-vous ça ?\"", "\"Qu'est-ce qui vous retient vraiment ?\""], answer: 3, why: "Elle est ouverte et va au cœur du problème." },
      { objective: "O3", q: "Une façon plus bienveillante de demander \"Pourquoi avez-vous fait ça ?\" est :", options: ["\"Qu'est-ce qui vous a amené à cela ?\"", "\"Qui vous a dit de faire ça ?\"", "\"Vous êtes sérieux ?\"", "\"Vous ne saviez pas mieux faire ?\""], answer: 0, why: "Elle explore la réflexion sans paraître accusatrice." },
      { objective: "O3", q: "La question \"Et quoi d'autre ?\" aide les gens à :", options: ["Arrêter de parler", "Aller au-delà de leur première réponse", "Être d'accord avec vous", "Se sentir accusés"], answer: 1, why: "La première réponse est rarement la seule." },
      { objective: "O4", q: "GROW signifie :", options: ["Grade, Review, Order, Wait", "Give, Rest, Own, Win", "Goal, Reality, Options, Will (objectif, réalité, options, volonté)", "Growth, Rules, Outcome, Work"], answer: 2, why: "Goal, Reality, Options, Will (ou Way forward, la suite)." },
      { objective: "O4", q: "Quelle question GROW appartient à l'étape Will (volonté) ?", options: ["\"Qu'allez-vous faire, et pour quand ?\"", "\"Que se passe-t-il maintenant ?\"", "\"Qu'attendez-vous de cet échange ?\"", "\"Que pourriez-vous faire ?\""], answer: 0, why: "L'étape Will porte sur l'engagement à agir." },
      { objective: "O4", q: "Quelqu'un note son engagement à 4 sur 10. Vous demandez :", options: ["\"Pourquoi si bas ?\"", "Rien", "\"Faites-le quand même.\"", "\"Qu'est-ce qui le ferait monter ?\""], answer: 3, why: "Cela l'aide à lever ce qui le retient." },
      { objective: "O4", q: "Pourquoi passer du temps sur la réalité avant les options ?", options: ["Pour remplir le temps", "La réponse apparaît souvent quand la situation est claire", "Les options ne servent jamais à rien", "Pour trouver un coupable"], answer: 1, why: "Voir clairement le présent mène à de meilleurs choix." },
      { objective: "O5", q: "SMART signifie :", options: ["Simple, Moderne, Actif, Rapide, Total", "Spécifique, Mesurable, Atteignable, Pertinent, limité dans le Temps", "Solide, Multiple, Apte, Réel, Tout", "Sommaire, Majeur, Absolu, Rigoureux, Tout de suite"], answer: 1, why: "Ces cinq vérifications rendent un objectif clair." },
      { objective: "O5", q: "À qui doit appartenir un objectif de développement ?", options: ["À la personne qui progresse", "Seulement au manager", "À l'avocat de l'entreprise", "À personne"], answer: 0, why: "On s'engage pour les objectifs qui nous appartiennent." },
      { objective: "O5", q: "D'où vient l'essentiel des progrès ?", options: ["Seulement de la lecture", "Seulement des certificats", "De la pratique, avec des retours", "De l'attente"], answer: 2, why: "La pratique avec des retours développe les compétences." },
      { objective: "O6", q: "Un accord de mentorat doit préciser :", options: ["Le salaire du mentor", "La fréquence des rencontres, ce qui reste confidentiel et comment y mettre fin avec respect", "Seulement la date de début", "Une liste des défauts du mentoré"], answer: 1, why: "Des règles claires évitent les malentendus plus tard." },
      { objective: "O6", q: "À chaque point d'étape de mentorat, vous devez :", options: ["Commencer un nouvel objectif à chaque fois", "Parler uniquement de vous", "Annuler si tout va bien", "Revenir à l'objectif, réfléchir et convenir de la prochaine étape"], answer: 3, why: "Faire le point régulièrement garde les progrès sur la bonne voie." },
      { objective: "O6", q: "Pourquoi célébrer les petits progrès ?", options: ["Cela garde les gens motivés", "Cela remplace l'objectif", "La loi l'exige", "Cela met fin à la relation"], answer: 0, why: "Voir ses progrès donne envie de continuer." },
      { objective: "O6", q: "À la fin d'une relation de mentorat, une bonne étape consiste à :", options: ["Ne plus se parler", "Cacher le tableau de suivi", "Faire le bilan de ce qui a changé et parler de la suite", "Tout recommencer depuis le début"], answer: 2, why: "Un bilan conclut bien et ouvre la prochaine étape de progrès." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
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
        name: "Écoute",
        objective: "O2",
        notYet: "A parlé plus que le partenaire ou l'a souvent interrompu.",
        meets: "A plus écouté que parlé et a résumé au moins une fois.",
        exceeds: "A nommé un sentiment ou une valeur entendus, et le partenaire a confirmé."
      },
      {
        name: "Questions ouvertes",
        objective: "O3",
        notYet: "Moins de cinq questions ouvertes, ou surtout des conseils.",
        meets: "Au moins cinq questions ouvertes, une à la fois.",
        exceeds: "A utilisé « Et quoi d'autre ? » et évité les « pourquoi » qui accusent."
      },
      {
        name: "Conversation GROW",
        objective: "O4",
        notYet: "A sauté une étape ou est passé directement aux conseils.",
        meets: "A couvert Goal, Reality, Options et Will, et a terminé par une première étape et une date.",
        exceeds: "A demandé une note d'engagement de 1 à 10 et ce qui la ferait monter."
      },
      {
        name: "Objectif de développement",
        objective: "O5",
        notYet: "L'objectif est un souhait, comme « devenir meilleur à l'oral ».",
        meets: "Un objectif clair qui dit quoi, combien et pour quand, et qui appartient au partenaire.",
        exceeds: "Découpé en petites étapes d'apprentissage avec pratique et retours."
      },
      {
        name: "Accord et tableau de suivi",
        objective: "O6",
        notYet: "L'accord ou le tableau de suivi manque.",
        meets: "Un accord d'un paragraphe (fréquence, façon de se voir, durée, ce qui reste confidentiel) et un tableau de suivi avec trois dates de point d'étape.",
        exceeds: "Dit aussi comment chacun peut y mettre fin avec respect."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui commencent une relation de coaching ou de mentorat dans les 30 jours (enquête de suivi)",
      "Les personnes mentorées qui atteignent leur objectif de développement à la date fixée",
      "Les apprenants qui suivent un autre cours Koach Learn sur le leadership"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour regarder les leçons",
      "Un partenaire d'entraînement pour la conversation de 20 minutes",
      "Du papier ou un document partagé pour l'objectif, l'accord et le tableau de suivi",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Mettez les apprenants en binômes pour s'entraîner à GROW ; faites-leur échanger les rôles de coach et de personne accompagnée.",
      "Ajoutez une troisième personne comme observateur, qui compte les questions ouvertes et les résumés.",
      "Demandez aux partenaires d'utiliser un objectif réel mais sans grand enjeu, et de garder confidentiel ce qui se dit.",
      "Rappelez aux apprenants qu'une erreur de sécurité demande une consigne directe, pas du coaching.",
      "Notez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
