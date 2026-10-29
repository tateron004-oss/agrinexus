"use strict";

// Koach Learn course (French translation of re-entry/reentry-workplace-skills.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-workplace-skills-fr",
  lang: "fr",
  translationOf: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Compétences et efficacité au travail",
  skills: "E-mails et SMS professionnels, Parler avec un responsable, Planifier et organiser une journée de travail, Utiliser des documents et des plannings partagés, Gérer les remarques et les problèmes, Respecter les règles sur l'IA au travail",
  outcome: "écrire un message clair et professionnel à un responsable avec l'aide de l'IA, planifier et organiser une journée de travail avec une liste de tâches, et respecter les règles de votre lieu de travail sur l'utilisation de l'IA et la confidentialité des informations.",
  about: [
    "Ce cours s'adresse aux personnes qui rentrent chez elles après une peine de prison et qui commencent un emploi, ou qui s'y préparent. Le travail passe aujourd'hui par les e-mails, les SMS, les plannings partagés et les documents sur ordinateur, et beaucoup d'entreprises utilisent l'IA. Ces compétences vous aident à garder votre emploi et à progresser.",
    "Vous vous entraînerez à écrire des messages professionnels, à parler avec un responsable, à planifier votre service, à utiliser des documents et des plannings partagés, à recevoir des remarques et à utiliser l'IA au travail de la bonne façon.",
    "Chaque leçon dure environ cinq minutes. Les exemples viennent de vrais emplois de premier niveau : entrepôt, cuisine, commerce, ménage, bâtiment et bureau. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Utilisez un assistant d'IA pour écrire un e-mail ou un SMS court et professionnel à un responsable pour demander à échanger un service, avec une raison et une proposition d'aider à trouver un remplaçant. Faites qu'il vous ressemble et vérifiez qu'il ne contient aucun détail privé. Puis faites une liste de tâches classées par priorité pour une vraie journée de travail ou une journée d'entraînement.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui commencent un emploi ou s'y préparent, souvent dans des postes de débutant en entrepôt, en cuisine, dans le commerce, le nettoyage, le bâtiment ou le travail de bureau.",
    startingPoint: "Ils savent envoyer des SMS et passer des appels. Ils ont peu d'expérience avec les e-mails professionnels, les plannings partagés, les documents partagés ou l'IA au travail. Certains ne se sentent pas à l'aise pour parler à un responsable ou recevoir des remarques.",
    gap: "Aujourd'hui, le travail passe par des messages, des plannings et des documents partagés, et beaucoup d'entreprises utilisent l'IA. Les apprenants doivent communiquer de façon professionnelle, organiser leur poste, gérer les remarques et respecter les règles sur l'IA et la vie privée, pour garder leur emploi et y progresser.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes (fin d'école primaire environ)",
      "Appareils : un smartphone, parfois un ordinateur de bibliothèque ou du travail",
      "Temps : des leçons d'environ 5 minutes, à caser autour du travail et des rendez-vous",
      "Règles du lieu de travail : chaque employeur fixe ses propres règles sur l'IA et la vie privée",
      "Vie privée : aucune donnée privée de client, d'entreprise ou personnelle dans un outil d'IA"
    ],
    prerequisites: "Le cours « Introduction à l'IA et confiance numérique » est utile, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à une vraie situation de travail", action: "écrire avec l'aide de l'IA un e-mail ou un SMS court, clair et professionnel", standard: "avec l'idée principale dans la première ligne, une fin polie et vos propres mots" },
    { id: "O2", condition: "Avec un sujet à aborder avec un responsable", action: "préparer et répéter une conversation courte et respectueuse", standard: "avec votre idée écrite en une phrase et répétée au moins une fois" },
    { id: "O3", condition: "Face à une remarque ou un problème au travail", action: "répondre calmement et signaler le problème à la bonne personne", standard: "en disant ce qui s'est passé, quand, et ce que vous avez fait" },
    { id: "O4", condition: "À partir d'une liste de tâches pour une journée de travail", action: "faire une liste de tâches classée en « obligatoire », « important » et « si possible »", standard: "avec les tâches à rendre aujourd'hui en haut de la liste" },
    { id: "O5", condition: "Avec le lien d'un planning ou d'un document partagé", action: "l'ouvrir, trouver votre partie et y ajouter quelque chose", standard: "sans modifier les parties qui ne sont pas les vôtres" },
    { id: "O6", condition: "À partir des règles sur l'IA de votre lieu de travail", action: "choisir pour quelles tâches vous pouvez utiliser l'IA et quelles informations garder hors de l'IA", standard: "sans jamais mettre d'information privée d'un client ou de l'entreprise dans un outil d'IA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Communiquer au travail",
      lessons: [
        {
          objectives: ["O1"],
          title: "Écrire des messages professionnels",
          minutes: 5,
          goal: "Écrire un e-mail ou un SMS court, clair et professionnel à quelqu'un au travail.",
          text: [
            "Au travail, la façon d'écrire compte. Un message professionnel est court, poli et clair : il dit ce dont vous avez besoin dès la première ligne, donne une raison si nécessaire, et se termine par un merci.",
            "Un modèle simple : salutation, l'essentiel, un ou deux détails, ce que vous demandez, merci et votre prénom. Par exemple : \"Bonjour Maria, j'aimerais échanger mon service de samedi contre dimanche cette semaine à cause d'un événement familial. Je peux aider à trouver quelqu'un pour me remplacer. Merci, André.\"",
            "Un assistant d'IA peut aider : \"Rends ce message à mon responsable plus professionnel mais toujours aimable.\" Puis relisez-le, faites qu'il vous ressemble et vérifiez l'orthographe des noms. Évitez au travail l'argot des SMS, les messages tout en majuscules et trop d'émojis."
          ],
          steps: ["Commencez par une salutation et le nom de la personne.", "Dites l'essentiel dès la première ligne.", "Ajoutez un ou deux détails.", "Dites ce que vous demandez.", "Terminez par un merci et votre prénom."],
          words: [["Professionnel", "la façon respectueuse et claire de communiquer au travail."], ["Responsable", "la personne qui dirige votre travail et votre planning."]],
          slides: [
            { title: "Court, poli, clair", bullets: ["L'essentiel d'abord", "Une raison si nécessaire", "Terminez par un merci"] },
            { title: "Un modèle simple", bullets: ["Salutation, essentiel, détails", "Ce que vous demandez", "Merci et votre prénom"] },
            { title: "L'IA peut le peaufiner", bullets: ["\"Rends-le plus professionnel mais aimable.\"", "Faites qu'il vous ressemble", "Pas d'argot, de majuscules ni trop d'émojis"] }
          ],
          tryIt: "Écrivez un premier jet de message à un responsable pour poser une question sur votre planning. Demandez à un assistant d'IA de le rendre plus professionnel mais aimable, puis changez une chose pour qu'il vous ressemble.",
          youCanNow: "écrire un message court et professionnel à quelqu'un au travail.",
          quickCheck: [
            { objective: "O1", q: "Que doit faire la première ligne d'un message de travail ?", options: ["Dire l'idée principale", "Raconter une longue histoire", "S'excuser plusieurs fois", "Lister vos anciens emplois"], answer: 0, why: "Mettre l'idée principale en premier rend un message de travail rapide à lire." },
            { objective: "O1", q: "L'IA a rendu votre message à un responsable très formel et très long. Que faites-vous ?", options: ["L'envoyer tel quel", "Demander à l'IA de le rallonger", "Le raccourcir et changer des mots pour qu'il vous ressemble", "L'envoyer sans votre nom"], answer: 2, why: "Un bon message de travail est court, poli et écrit avec vos propres mots." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Parler avec votre responsable",
          minutes: 5,
          goal: "Préparer et mener une courte conversation respectueuse avec un responsable.",
          text: [
            "Certaines choses se disent mieux en face : demander de l'aide, expliquer une erreur, ou demander plus d'heures. Un peu de préparation rend les choses plus faciles.",
            "Avant de parler, écrivez l'essentiel en une phrase et ce que vous espérez obtenir. Choisissez un moment calme et demandez : \"Vous avez deux minutes ?\" Parlez clairement, écoutez jusqu'au bout et reformulez ce que vous avez entendu : \"Donc vous voulez que je finisse les retours avant de remettre en rayon. C'est noté.\"",
            "Vous pouvez vous entraîner avec l'IA : \"Fais semblant d'être mon responsable dans un entrepôt. Je veux demander plus d'heures. Pose-moi des questions, puis dis-moi comment je me suis débrouillé.\""
          ],
          steps: ["Écrivez l'essentiel en une phrase.", "Choisissez un moment calme et demandez s'il a une minute.", "Parlez clairement et écoutez jusqu'au bout.", "Reformulez ce que vous avez entendu.", "Entraînez-vous d'abord avec l'IA si vous voulez."],
          words: [["Reformuler", "dire avec vos propres mots ce que quelqu'un vous a dit, pour être sûr d'avoir compris."], ["Jeu de rôle", "s'entraîner à une conversation en la jouant."]],
          slides: [
            { title: "Certaines choses se disent en face", bullets: ["Demander de l'aide", "Expliquer une erreur", "Demander plus d'heures"] },
            { title: "Comment faire", bullets: ["L'essentiel en une phrase", "Choisissez un moment calme", "Écoutez, puis reformulez"] },
            { title: "Entraînez-vous avec l'IA", bullets: ["\"Fais semblant d'être mon responsable.\"", "Demandez un avis sur votre façon de faire"] }
          ],
          tryIt: "Demandez à un assistant d'IA de jouer votre responsable pendant que vous demandez plus d'heures. Faites la conversation, puis demandez-lui deux conseils pour faire mieux.",
          youCanNow: "préparer et mener une conversation respectueuse avec un responsable.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi écrire votre idée en une phrase avant de parler à un responsable ?", options: ["Pour la lui lire mot pour mot", "Pour savoir exactement ce que vous voulez dire", "Pour l'envoyer au lieu de parler", "Pour éviter la conversation"], answer: 1, why: "Une phrase claire vous aide à rester sur votre sujet pendant la conversation." },
            { objective: "O2", q: "Votre responsable a l'air occupé et stressé. Que faites-vous ?", options: ["Commencer à parler tout de suite", "Envoyer un SMS en colère", "Demander à un collègue de parler à votre place", "Attendre un moment calme et lui demander s'il a une minute"], answer: 3, why: "Attendre un moment calme et demander d'abord montre du respect et donne un meilleur résultat." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gérer les remarques et les problèmes",
          minutes: 5,
          goal: "Répondre calmement aux remarques et signaler un problème de la bonne façon.",
          text: [
            "Les remarques (on parle aussi de retour, ou de feedback) sont des informations sur votre travail. Même quand elles sont dures à entendre, c'est grâce à elles qu'on progresse et qu'on gagne la confiance. Écoutez, dites merci, posez une question si quelque chose n'est pas clair, et montrez que vous y travaillez.",
            "Les problèmes arrivent : vous allez être en retard, vous avez fait une erreur, une machine est en panne, un collègue cause des ennuis. Signalez-le tôt, à la bonne personne, avec des faits : ce qui s'est passé, quand, et ce que vous avez fait. \"J'ai fait tomber un carton de bocaux en verre dans l'allée 4 à 14 h. J'ai bloqué la zone et pris le balai. À qui dois-je le dire pour l'inventaire ?\"",
            "Si vous êtes en colère, respirez avant de répondre. Vous pouvez dire : \"Laissez-moi y réfléchir et je reviens vers vous.\" Utilisez l'IA pour préparer une réponse calme, pas pour en envoyer une sous le coup de la colère."
          ],
          steps: ["Écoutez sans discuter.", "Dites merci et posez des questions si besoin.", "Signalez les problèmes tôt, avec des faits.", "Respirez si vous êtes en colère.", "Faites ce que vous avez dit que vous feriez."],
          words: [["Remarques (retour)", "des informations sur votre travail, pour vous aider à progresser."], ["Signaler", "dire à la bonne personne ce qui s'est passé."]],
          slides: [
            { title: "Les remarques font progresser", bullets: ["Écoutez, dites merci", "Posez une question si ce n'est pas clair", "Montrez que vous y travaillez"] },
            { title: "Signalez les problèmes tôt", bullets: ["À la bonne personne", "Quoi, quand, ce que vous avez fait"] },
            { title: "Restez calme", bullets: ["Respirez", "\"Laissez-moi y réfléchir, je reviens vers vous.\"", "Utilisez l'IA pour préparer une réponse calme"] }
          ],
          tryIt: "Demandez à un assistant d'IA : \"Mon responsable m'a dit que je dois travailler plus vite sur la chaîne. Aide-moi à préparer une réponse calme et positive et deux façons de m'améliorer.\" Écrivez la réponse que vous utiliseriez.",
          youCanNow: "répondre calmement aux remarques et signaler clairement un problème.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une remarque sur votre travail ?", options: ["Une punition", "Une information sur la façon dont vous travaillez", "Une augmentation de salaire", "Seulement une plainte d'un client"], answer: 1, why: "Une remarque est une information sur votre travail, pour vous aider à progresser." },
            { objective: "O3", q: "Vous avez fait tomber un carton et cassé ce qu'il contenait. Que faites-vous ?", options: ["Le cacher en espérant que personne ne le voie", "Accuser un collègue", "Le signaler tôt à la bonne personne, avec les faits", "Attendre la fin de la semaine"], answer: 2, why: "Signaler tôt et avec les faits montre votre honnêteté et aide à régler le problème." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Communiquer au travail",
        questions: [
          { objective: "O1", q: "Où mettre l'essentiel dans un message de travail ?", options: ["Nulle part", "Tout à la fin", "Dans la première ligne", "Dans un message séparé"], answer: 2, why: "Les responsables occupés lisent d'abord la première ligne." },
          { objective: "O1", q: "Lequel est le plus professionnel ?", options: ["\"Bonjour Maria, puis-je échanger samedi contre dimanche cette semaine ? Je peux aider à trouver un remplaçant. Merci, André\"", "\"yo jpeux pa venir sam\"", "\"JE NE VIENS PAS SAMEDI\"", "\"??\""], answer: 0, why: "Il est poli, clair et propose de l'aide." },
          { objective: "O2", q: "Que veut dire \"reformuler\" ?", options: ["Partir", "Le dire plus fort", "Discuter", "Dire avec vos propres mots ce que vous avez entendu"], answer: 3, why: "Cela montre que vous avez compris." },
          { objective: "O3", q: "Votre responsable vous fait une remarque dure. Une bonne première réaction est :", options: ["Discuter tout de suite", "Écouter et dire merci", "Démissionner", "L'ignorer"], answer: 1, why: "Écouter montre que vous pouvez progresser." },
          { objective: "O3", q: "Vous avez cassé quelque chose au travail. Que faites-vous ?", options: ["Le cacher", "Le signaler tôt à la bonne personne avec les faits", "Accuser un collègue", "Attendre que quelqu'un le remarque"], answer: 1, why: "Un signalement rapide et honnête crée la confiance." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire le travail",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planifier et organiser votre journée de travail",
          minutes: 5,
          goal: "Faire une liste de tâches et mettre les plus importantes en premier.",
          text: [
            "Une liste de tâches vous évite d'oublier des choses et vous aide à faire d'abord les plus importantes. C'est ce qu'on appelle établir des priorités.",
            "Écrivez toutes les tâches. Puis marquez chacune : À faire aujourd'hui (délais, sécurité, ce que votre responsable a demandé), À faire si possible, et En plus s'il reste du temps. Commencez par les tâches à faire aujourd'hui. Si vous ne savez pas ce qui compte le plus, demandez à votre responsable ; c'est une question intelligente, pas une faiblesse.",
            "L'IA peut aider à trier une liste : \"Voici mes tâches pour mon service dans une épicerie. Mets-les par ordre d'importance et explique pourquoi.\" Vérifiez son ordre par rapport à ce que votre responsable a dit."
          ],
          steps: ["Écrivez toutes les tâches.", "Marquez chacune : obligatoire, souhaitable ou en plus.", "Faites d'abord les tâches obligatoires.", "Demandez à votre responsable si vous hésitez.", "Cochez les tâches au fur et à mesure."],
          words: [["Établir des priorités", "décider quelles tâches sont les plus importantes et les faire en premier."], ["Délai (date limite)", "le moment où quelque chose doit être fini."]],
          slides: [
            { title: "Une liste de tâches aide", bullets: ["Rien d'oublié", "L'important d'abord"] },
            { title: "Obligatoire, souhaitable, en plus", bullets: ["Obligatoire : délais, sécurité, demandes du responsable", "Souhaitable : important, moins urgent", "En plus : s'il reste du temps"] },
            { title: "L'IA peut trier", bullets: ["\"Mets mes tâches par ordre d'importance.\"", "Vérifiez avec ce que dit votre responsable"] }
          ],
          tryIt: "Écrivez six tâches d'un service réel ou imaginaire. Marquez chacune obligatoire, souhaitable ou en plus. Demandez à un assistant d'IA de les mettre en ordre, et comparez avec votre propre ordre.",
          youCanNow: "planifier une journée de travail et faire d'abord les tâches les plus importantes.",
          quickCheck: [
            { objective: "O4", q: "Dans une liste « obligatoire, important, si possible », quelles tâches vont dans « obligatoire » ?", options: ["Les tâches qui doivent être faites aujourd'hui", "Les tâches que vous préférez", "Les tâches les plus faciles", "Les tâches du mois prochain"], answer: 0, why: "Les tâches obligatoires sont celles qui doivent être faites aujourd'hui, souvent avec une échéance." },
            { objective: "O4", q: "Deux tâches semblent urgentes et vous ne savez pas laquelle faire en premier. Que faites-vous ?", options: ["Faire la plus facile", "Ne faire aucune des deux", "Faire les deux à moitié", "Demander à votre responsable laquelle compte le plus"], answer: 3, why: "Quand vous ne savez pas ce qui est le plus important, vous demandez à votre responsable." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Plannings et documents partagés",
          minutes: 6,
          goal: "Ouvrir un planning ou un document partagé, trouver votre partie et y ajouter quelque chose.",
          text: [
            "Beaucoup d'emplois partagent les plannings et les documents en ligne. Vos services peuvent être dans une application de planning choisie par votre employeur ; les listes et les formulaires peuvent être dans Google Docs, Google Sheets, Microsoft Word ou Excel.",
            "Quand quelqu'un partage un document, vous recevez un lien par e-mail ou par SMS. Touchez-le, connectez-vous si on vous le demande, et trouvez votre partie. Vous pouvez écrire dans le document, et les autres voient les changements. Un commentaire permet de poser une question sans changer le texte : sélectionnez les mots et choisissez Commentaire.",
            "Regardez votre application de planning chaque jour, et si un service change, confirmez avec votre responsable. Ne changez jamais dans un document partagé quelque chose qui n'est pas à vous ; demandez d'abord."
          ],
          steps: ["Touchez le lien partagé reçu par e-mail ou SMS.", "Connectez-vous si on vous le demande.", "Trouvez votre partie du document ou du planning.", "Écrivez votre mise à jour, ou ajoutez un commentaire pour poser une question.", "Regardez votre planning chaque jour et confirmez les changements."],
          words: [["Document partagé", "un fichier en ligne que plusieurs personnes peuvent ouvrir et modifier."], ["Commentaire", "une note ajoutée à côté du texte, pour poser ou répondre à des questions."]],
          slides: [
            { title: "Le travail se partage en ligne", bullets: ["Plannings dans une application", "Docs et Sheets, Word et Excel"] },
            { title: "Utiliser un document partagé", bullets: ["Touchez le lien, connectez-vous", "Trouvez votre partie", "Écrivez, ou ajoutez un commentaire"] },
            { title: "Bonnes habitudes", bullets: ["Regardez votre planning chaque jour", "Confirmez les changements avec votre responsable", "Ne changez que ce qui est à vous"] }
          ],
          tryIt: "Créez un document Google Docs ou Word gratuit appelé \"Ma semaine de travail\". Écrivez vos services pour une semaine, ajoutez un commentaire sous forme de question, et entraînez-vous à le partager par lien avec un membre de votre famille ou avec vous-même.",
          youCanNow: "utiliser des plannings et des documents partagés et y ajouter des informations correctement.",
          quickCheck: [
            { objective: "O5", q: "En général, comment accédez-vous à un document partagé ?", options: ["En l'achetant", "Par un lien envoyé par e-mail ou par SMS", "En l'imprimant", "En appelant l'entreprise"], answer: 1, why: "Quand un document est partagé avec vous, vous recevez en général un lien." },
            { objective: "O5", q: "Vous voyez une erreur dans la partie d'un collègue sur un planning partagé. Que faites-vous ?", options: ["La corriger vous-même", "Supprimer sa partie", "Ajouter un commentaire ou lui en parler", "L'ignorer pour toujours"], answer: 2, why: "Vous ne modifiez pas les parties qui ne sont pas les vôtres : vous commentez ou vous demandez d'abord." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Utiliser l'IA au travail de la bonne façon",
          minutes: 5,
          goal: "Respecter les règles de votre lieu de travail sur l'IA et garder privées les informations de l'entreprise et des clients.",
          text: [
            "Beaucoup d'entreprises utilisent l'IA, et beaucoup ont des règles à ce sujet. Certaines autorisent certains outils ; d'autres n'autorisent pas du tout l'IA pour certaines tâches. Demandez toujours à votre responsable ce qui est permis avant d'utiliser l'IA pour le travail.",
            "Ne mettez jamais d'informations de travail privées dans un outil d'IA public : noms, adresses ou moyens de paiement des clients, informations sur vos collègues, prix ou projets qui ne sont pas publics, ou mots de passe. Cela peut enfreindre les règles de l'entreprise et la loi.",
            "Utilisez l'IA pour des choses comme améliorer vos propres écrits, expliquer un mot ou vous entraîner à une conversation. Vérifiez ce qu'elle dit, et soyez honnête si vous l'avez utilisée pour quelque chose que vous rendez."
          ],
          steps: ["Demandez à votre responsable quel usage de l'IA est permis.", "Ne mettez jamais d'informations privées sur les clients, les collègues ou l'entreprise dans l'IA.", "Utilisez l'IA pour vos propres écrits et pour apprendre.", "Vérifiez ses réponses.", "Soyez honnête sur votre usage."],
          words: [["Confidentiel", "une information privée qui ne doit pas sortir de l'entreprise."], ["Règlement (politique interne)", "une règle écrite sur un lieu de travail."]],
          slides: [
            { title: "Demandez d'abord", bullets: ["Les entreprises ont des règles sur l'IA", "Demandez à votre responsable ce qui est permis"] },
            { title: "Ne mettez jamais dans l'IA", bullets: ["Noms ou moyens de paiement des clients", "Informations sur les collègues", "Projets, prix ou mots de passe de l'entreprise"] },
            { title: "Bons usages", bullets: ["Peaufiner vos propres écrits", "Expliquer un mot", "Vous entraîner à une conversation"] }
          ],
          tryIt: "Tâche finale : demandez à un assistant d'IA de vous aider à écrire un message court et professionnel à un responsable pour échanger un service, avec une raison et une proposition d'aider à trouver un remplaçant. Faites qu'il vous ressemble et vérifiez qu'il ne contient aucun détail privé. Puis faites une liste de tâches classées par priorité pour une journée de travail.",
          youCanNow: "communiquer de façon professionnelle, planifier votre travail, utiliser les outils partagés et utiliser l'IA au travail de la bonne façon.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une règle du lieu de travail ?", options: ["Une règle écrite au travail", "L'avis d'un collègue", "L'avis d'un client", "Un type d'application de planning"], answer: 0, why: "Une règle du lieu de travail est une règle écrite que votre employeur vous demande de suivre." },
            { objective: "O6", q: "Vous voulez que l'IA vous aide à répondre à la plainte d'un client qui contient son numéro de téléphone. Que faites-vous ?", options: ["Tout coller dans un outil d'IA public", "Vérifier les règles sur l'IA et retirer les données du client", "Publier la plainte en ligne pour avoir des conseils", "Envoyer le numéro du client à un ami"], answer: 1, why: "Suivez les règles de votre lieu de travail sur l'IA et gardez privées les informations des clients." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire le travail",
        questions: [
          { objective: "O4", q: "Que veut dire \"établir des priorités\" ?", options: ["Faire les tâches dans n'importe quel ordre", "Faire seulement les tâches les plus faciles", "Sauter des tâches", "Faire d'abord les tâches les plus importantes"], answer: 3, why: "Établir des priorités met les tâches importantes en premier." },
          { objective: "O4", q: "Quelle tâche est \"à faire aujourd'hui\" ?", options: ["Ce que votre responsable a demandé pour aujourd'hui", "Quelque chose que vous pourriez faire le mois prochain", "Ranger votre casier pour le plaisir", "Rien"], answer: 0, why: "Les délais et les demandes du responsable passent en premier." },
          { objective: "O5", q: "Vous voulez poser une question sur une ligne d'un document partagé. Vous :", options: ["La réécrivez sans demander", "Supprimez la ligne", "Ajoutez un commentaire", "L'ignorez"], answer: 2, why: "Les commentaires posent une question sans changer le texte." },
          { objective: "O6", q: "Pouvez-vous coller le nom et le numéro de carte d'un client dans un outil d'IA public ?", options: ["Seulement si l'IA le demande", "Oui, pour gagner du temps", "Seulement le week-end", "Non, jamais"], answer: 3, why: "Les informations des clients sont confidentielles." },
          { objective: "O6", q: "Avant d'utiliser l'IA pour des tâches de travail, vous devez :", options: ["Le cacher", "Supposer que c'est permis", "Demander à votre responsable ce qui est permis", "Utiliser n'importe quel outil"], answer: 2, why: "Chaque entreprise a ses propres règles sur l'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences et efficacité au travail",
    questions: [
      { objective: "O1", q: "Un message professionnel est :", options: ["Long et plein d'argot", "Court, poli et clair", "Tout en majuscules", "Surtout des émojis"], answer: 1, why: "Les messages clairs et respectueux marchent le mieux." },
      { objective: "O1", q: "Un bon message de travail se termine par :", options: ["Un merci et votre prénom", "Rien", "Une blague", "Votre numéro de sécurité sociale"], answer: 0, why: "Un merci et un prénom sont polis et clairs." },
      { objective: "O1", q: "L'IA peut aider un message de travail en :", options: ["Le rendant plus professionnel pendant que vous gardez votre voix", "L'envoyant sans que vous le lisiez", "Ajoutant des détails privés", "Le rendant plus long"], answer: 0, why: "L'IA peaufine ; vous vérifiez et personnalisez." },
      { objective: "O2", q: "Un responsable est :", options: ["Un collègue du même niveau", "La personne qui dirige votre travail", "Un client", "Un livreur"], answer: 1, why: "Les responsables gèrent le travail et les plannings." },
      { objective: "O2", q: "Avant de parler à un responsable, écrivez :", options: ["Rien", "Un long discours", "L'essentiel en une phrase", "Des plaintes sur vos collègues"], answer: 2, why: "Une phrase claire vous garde concentré." },
      { objective: "O2", q: "Un bon moment pour parler à un responsable est :", options: ["Jamais", "Pendant un coup de feu", "Pendant qu'il est avec un client", "Un moment calme, après avoir demandé s'il a une minute"], answer: 3, why: "Les moments calmes donnent de meilleurs résultats." },
      { objective: "O2", q: "Le jeu de rôle avec l'IA vous aide à :", options: ["Obtenir une augmentation automatiquement", "Éviter toutes les conversations", "Vous entraîner à une conversation avant qu'elle arrive", "Sauter le travail"], answer: 2, why: "L'entraînement donne confiance." },
      { objective: "O3", q: "Les remarques sur votre travail sont :", options: ["Des informations sur votre travail", "Une punition", "Un salaire", "Un planning"], answer: 0, why: "Les remarques vous aident à progresser." },
      { objective: "O3", q: "Quand vous signalez un problème, donnez :", options: ["Des rumeurs", "Le nom d'un coupable", "Rien", "Ce qui s'est passé, quand, et ce que vous avez fait"], answer: 3, why: "Les faits aident à régler le problème." },
      { objective: "O3", q: "Si vous êtes en colère au travail, une bonne réponse est :", options: ["Crier", "\"Laissez-moi y réfléchir et je reviens vers vous.\"", "Partir", "Envoyer un SMS énervé"], answer: 1, why: "Prendre du temps garde le calme." },
      { objective: "O4", q: "Un délai (date limite), c'est :", options: ["Une pause", "Le moment où quelque chose doit être fini", "Un jour de congé", "Le jour de paie"], answer: 1, why: "Les délais fixent quand le travail est dû." },
      { objective: "O4", q: "Avec obligatoire, souhaitable, en plus, vous commencez par :", options: ["Ce qui est amusant", "En plus", "Souhaitable", "Obligatoire"], answer: 3, why: "Les tâches obligatoires passent en premier." },
      { objective: "O4", q: "Si vous ne savez pas ce qui est le plus important, vous :", options: ["Demandez à votre responsable", "Devinez en espérant", "Ne faites rien", "Demandez à un client"], answer: 0, why: "Demander est intelligent, pas une faiblesse." },
      { objective: "O5", q: "Un document partagé est :", options: ["Un mot de passe", "Un papier dans votre casier", "Un fichier en ligne que plusieurs personnes peuvent modifier", "Un journal intime"], answer: 2, why: "Les documents partagés se modifient ensemble." },
      { objective: "O5", q: "Quand on partage un document avec vous, vous recevez en général :", options: ["Rien", "Une lettre par la poste", "Seulement un appel", "Un lien par e-mail ou SMS"], answer: 3, why: "Les liens ouvrent les fichiers partagés." },
      { objective: "O5", q: "Devez-vous changer des parties d'un document partagé qui ne sont pas à vous ?", options: ["Seulement la nuit", "Oui, à tout moment", "Non ; demandez d'abord", "Seulement si vous vous ennuyez"], answer: 2, why: "Respectez le travail des autres." },
      { objective: "O5", q: "À quelle fréquence regarder votre application de planning ?", options: ["Une fois par an", "Chaque jour", "Jamais", "Seulement si vous êtes renvoyé"], answer: 1, why: "Les services peuvent changer." },
      { objective: "O6", q: "Une information \"confidentielle\" est :", options: ["Privée et ne doit pas sortir de l'entreprise", "Une nouvelle publique", "La météo", "Votre chanson préférée"], answer: 0, why: "Elle reste dans l'entreprise." },
      { objective: "O6", q: "Un bon usage de l'IA au travail, si c'est permis, est :", options: ["Améliorer vos propres écrits", "Coller les moyens de paiement des clients", "Partager les adresses des collègues", "Publier les projets de l'entreprise"], answer: 0, why: "Vos propres écrits ne contiennent pas de données privées." },
      { objective: "O6", q: "Le \"règlement\" d'un lieu de travail est :", options: ["Seulement un type d'assurance", "Une règle écrite au travail", "Un collègue", "Une pause déjeuner"], answer: 1, why: "Les règlements fixent les règles au travail, y compris sur l'IA." }
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
      8,
      10,
      11,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Demande claire",
        objective: "O1",
        notYet: "Le message ne dit pas quel poste ni pourquoi, ou l'idée principale est noyée.",
        meets: "La première ligne demande à échanger un poste précis, avec une courte raison.",
        exceeds: "Il est assez court pour être lu en quelques secondes et finit par un merci et votre nom."
      },
      {
        name: "Proposer son aide",
        objective: "O1",
        notYet: "Aucune proposition d'aide pour trouver un remplaçant.",
        meets: "Propose d'aider à trouver quelqu'un pour prendre le poste.",
        exceeds: "Nomme un collègue possible ou un moment pour en parler."
      },
      {
        name: "Vos propres mots, sans données privées",
        objective: "O6",
        notYet: "Utilise des mots que l'apprenant ne dirait pas, ou contient des données privées.",
        meets: "Poli, avec les mots de l'apprenant, sans donnée privée.",
        exceeds: "L'apprenant a changé lui-même des mots de l'IA et peut dire pourquoi."
      },
      {
        name: "Liste de tâches classée",
        objective: "O4",
        notYet: "Les tâches ne sont pas classées, ou les tâches à rendre ne sont pas en premier.",
        meets: "Les tâches sont classées en « obligatoire », « important » et « si possible », avec les échéances du jour en premier.",
        exceeds: "Elle note aussi à qui demander si les priorités ne sont pas claires."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui ont toujours un emploi 90 jours après l'avoir commencé (enquête de suivi)",
      "Les apprenants qui disent avoir envoyé un message de travail professionnel ou utilisé un planning partagé dans les 30 jours",
      "Les employeurs ou les partenaires de réinsertion signalent une meilleure communication des diplômés du programme"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque ou du programme",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Un outil gratuit de document ou de planning partagé pour s'entraîner, comme Google Docs",
      "Du papier et un stylo pour la liste de tâches",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Après la leçon 2, faites jouer par deux des conversations avec un responsable ; cela donne vite confiance.",
      "Utilisez des noms d'exercice et des postes inventés ; jamais de vraies données privées de clients ou de collègues.",
      "Rappelez aux apprenants que chaque employeur a ses propres règles sur l'IA, et qu'il faut demander avant d'utiliser l'IA au travail.",
      "Préparez un document partagé d'entraînement pour que les apprenants puissent y ajouter quelque chose sans modifier les parties des autres.",
      "Notez la tâche finale avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
