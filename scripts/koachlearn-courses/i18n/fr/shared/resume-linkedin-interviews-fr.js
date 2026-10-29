"use strict";

// Koach Learn course (French translation of shared/resume-linkedin-interviews.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "resume-linkedin-interviews-fr",
  lang: "fr",
  translationOf: "resume-linkedin-interviews",
  category: "Athletes",
  name: "CV, LinkedIn et entretiens d'embauche",
  skills: "Rédiger un CV d'une page, Écrire des puces de réalisations, Créer un profil LinkedIn, Répondre avec la méthode STAR, Répondre honnêtement sur une interruption ou un casier judiciaire, Faire un suivi après un entretien",
  outcome: "rédiger un CV d'une page avec des puces de réalisations fortes, créer un profil LinkedIn simple, et répondre à voix haute aux questions d'entretien courantes avec la méthode STAR, y compris une réponse courte et honnête sur une interruption de carrière ou un casier judiciaire.",
  about: [
    "Ce cours s'adresse à toute personne qui se prépare à chercher un emploi : un élève qui cherche un premier travail, un sportif qui passe à une carrière après le sport, un ancien militaire qui passe à un travail civil, une personne qui sort de prison, ou quelqu'un qui change d'emploi après des années au même endroit.",
    "Vous allez préparer trois choses utilisables tout de suite : un CV d'une page, un profil LinkedIn, et des réponses d'entretien que vous avez pratiquées à voix haute. Vous apprendrez aussi quoi demander à l'employeur et comment faire un suivi.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Des outils d'IA comme ChatGPT ou Microsoft Copilot peuvent vous aider à trouver les mots, mais les faits et la façon de parler doivent être les vôtres."
  ],
  finalTask: "Choisissez une vraie offre d'emploi. Rédigez pour elle un CV d'une page avec au moins quatre puces de réalisations, mettez à jour votre titre LinkedIn et votre section Infos pour qu'ils correspondent, puis enregistrez-vous en répondant à voix haute à trois questions d'entretien avec la méthode STAR, dont une réponse honnête sur une interruption ou un casier judiciaire si cela vous concerne. Terminez en écrivant un court message de remerciement que vous pourriez envoyer après l'entretien.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Toute personne qui se prépare à chercher un emploi : étudiants qui cherchent un premier emploi, sportifs qui passent à une carrière après le sport, anciens combattants qui passent au travail civil, personnes qui sortent de prison et personnes qui changent d'emploi après des années au même endroit.",
    startingPoint: "Ils ont une expérience de travail, d'études, de sport, de service ou de vie, et savent utiliser un téléphone ou un ordinateur. Beaucoup ont un CV ancien ou pas de CV, pas de profil LinkedIn, et ne se sont jamais entraînés à voix haute à répondre en entretien, surtout sur une interruption de parcours ou un casier.",
    gap: "Les employeurs décident vite à partir d'un CV, d'un profil et d'un court entretien. Les apprenants ont besoin d'un CV clair d'une page, d'un profil LinkedIn simple et de réponses honnêtes bien préparées, pour que leurs vraies compétences soient vues et qu'ils obtiennent des entretiens et des offres.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur avec un outil de document gratuit et un enregistreur vocal",
      "Honnêteté : tout ce qui figure sur un CV, un profil ou une réécriture par l'IA doit être vrai",
      "Confidentialité : aucune adresse personnelle ni numéro de pièce d'identité sur LinkedIn ou dans les outils d'IA",
      "Les règles sur le casier et les lois « fair chance » changent selon le lieu ; les apprenants vérifient leurs règles locales"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une vraie offre d'emploi", action: "mettre en page un CV d'une page avec les coordonnées, un résumé, les compétences qui correspondent et l'expérience datée", standard: "sur une page, adapté à l'offre" },
    { id: "O2", condition: "À partir de simples tâches de travail", action: "écrire des puces de réalisations avec un verbe d'action, ce que vous avez fait et un résultat ou un chiffre", standard: "avec au moins quatre puces, toutes vraies" },
    { id: "O3", condition: "À partir de votre CV", action: "créer un profil LinkedIn avec une photo, un titre, une section Infos et votre expérience", standard: "sans adresse personnelle ni numéro de pièce d'identité, et avec trois demandes de connexion envoyées" },
    { id: "O4", condition: "Face à une question comportementale en entretien", action: "répondre avec une histoire STAR : Situation, Tâche, Action et Résultat", standard: "en une à deux minutes, en passant le plus de temps sur l'Action" },
    { id: "O5", condition: "Face à une question difficile sur une interruption de parcours ou un casier", action: "donner à voix haute une réponse courte et honnête qui dit ce que vous avez fait depuis", standard: "enregistrée, réécoutée et améliorée au moins une fois" },
    { id: "O6", condition: "À la fin d'un entretien", action: "poser de bonnes questions et écrire un message de remerciement", standard: "avec le message envoyé dans les 24 heures" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre CV et LinkedIn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Préparer un CV d'une page",
          minutes: 5,
          goal: "Présenter un CV d'une page clair, avec les bonnes rubriques dans le bon ordre.",
          text: [
            "Un CV (curriculum vitae) est un résumé d'une page de ce que vous pouvez apporter à un employeur. La plupart des recruteurs passent moins d'une minute sur la première lecture, donc la page doit se lire vite : titres clairs, beaucoup d'espace blanc, et une seule police simple comme Calibri ou Arial, en taille 10 à 12.",
            "Utilisez ces rubriques, de haut en bas : votre nom et vos coordonnées (téléphone, adresse e-mail professionnelle, ville et État ou région, et votre lien LinkedIn si vous en avez un) ; un résumé de deux lignes ; vos compétences ; votre expérience, avec le poste le plus récent en premier ; puis vos études, formations et certificats.",
            "L'expérience ne se limite pas aux emplois payés. Comptez le bénévolat, le service militaire, les rôles de capitaine d'équipe ou d'entraîneur, le travail pour une église ou la communauté, et les emplois ou formations faits en détention, comme la cuisine, l'entretien ou un programme de métier. Si vous préférez, décrivez ce que vous avez fait, pas l'endroit.",
            "Adaptez un peu votre CV pour chaque offre. Lisez l'offre, repérez les compétences demandées, et vérifiez que vos mots correspondent aux compétences que vous avez vraiment. Beaucoup d'employeurs utilisent un logiciel qui cherche ces mots dans les CV."
          ],
          steps: ["Ouvrez un traitement de texte gratuit comme Google Docs ou Microsoft Word, ou utilisez un modèle de CV simple.", "Mettez votre nom et vos coordonnées en haut. Utilisez une adresse e-mail professionnelle, par exemple avec votre prénom et votre nom.", "Écrivez un résumé de deux lignes : qui vous êtes et ce que vous apportez.", "Listez 6 à 10 compétences qui correspondent à l'offre d'emploi.", "Listez votre expérience, la plus récente en premier : poste, organisation, ville, dates et 3 à 4 puces pour chacun.", "Ajoutez études, formations et certificats. Gardez le tout sur une seule page."],
          words: [["CV", "un résumé d'une page de vos compétences, de votre expérience et de vos formations, que vous envoyez quand vous postulez à un emploi."], ["Offre d'emploi", "l'annonce qui décrit un poste et ce que l'employeur recherche."], ["Logiciel de suivi des candidatures", "un logiciel (en anglais : applicant tracking system) que beaucoup d'employeurs utilisent pour recevoir les CV et y chercher des mots-clés."]],
          slides: [
            { title: "Le CV, c'est votre présentation en une page", bullets: ["Facile à lire en moins d'une minute", "Une seule police simple, taille 10 à 12", "Titres clairs et espace blanc"] },
            { title: "Les rubriques, de haut en bas", bullets: ["Nom et coordonnées", "Résumé de deux lignes et compétences", "Expérience, la plus récente en premier", "Études, formations et certificats"] },
            { title: "Toute expérience compte", bullets: ["Bénévolat et service militaire", "Capitaine d'équipe, entraîneur, rôles dans la communauté", "Travail et programmes de formation en détention"] },
            { title: "Adaptez à chaque offre", bullets: ["Repérez les compétences demandées dans l'offre", "Utilisez les mêmes mots pour les compétences que vous avez vraiment"] }
          ],
          tryIt: "Trouvez une vraie offre d'emploi à laquelle vous postuleriez. Créez un nouveau document et faites le plan du CV pour cette offre : vos coordonnées, un résumé de deux lignes, six compétences qui correspondent à l'offre, et votre expérience avec les dates. Gardez les puces pour la prochaine leçon.",
          youCanNow: "présenter un CV d'une page avec les bonnes rubriques et l'adapter à une offre d'emploi.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le résumé d'un CV ?", options: ["Deux lignes en haut qui disent qui vous êtes et ce que vous apportez", "La liste de tous les emplois que vous avez eus", "Les numéros de téléphone de vos références", "L'historique de vos salaires"], answer: 0, why: "Un court résumé dit vite à l'employeur ce que vous apportez." },
            { objective: "O1", q: "Une offre d'emploi demande des compétences en chariot élévateur et en inventaire, que vous avez. Que faites-vous avec votre CV ?", options: ["Le garder identique pour chaque emploi", "Y ajouter toute l'histoire de votre vie", "Ajouter ces compétences dans vos rubriques compétences et expérience", "Le faire tenir sur trois pages"], answer: 2, why: "Adapter votre CV à l'offre montre que vous correspondez au poste." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écrire des puces de réalisations",
          minutes: 5,
          goal: "Transformer de simples tâches en puces qui montrent ce que vous avez accompli.",
          text: [
            "Les puces faibles listent des tâches : \"Chargé du nettoyage.\" Les puces fortes montrent des résultats : \"Nettoyé et réapprovisionné 12 chambres par service et réussi chaque inspection hebdomadaire.\" L'employeur peut vous imaginer faire bien le travail.",
            "Une formule simple : verbe d'action + ce que vous avez fait + un résultat ou un chiffre. Commencez par un verbe fort comme dirigé, créé, formé, réparé, servi, organisé, réduit ou amélioré. Puis ajoutez un chiffre si possible : combien de personnes, combien d'argent, à quelle fréquence, ou combien plus vite.",
            "Exemples de vies différentes : \"Formé 4 nouveaux membres de l'équipe à la liste d'ouverture du magasin.\" (commerce) \"Dirigé un groupe de 9 soldats lors des contrôles quotidiens du matériel, sans aucune perte.\" (armée) \"Capitaine d'une équipe universitaire de 22 joueurs ; organisé l'analyse vidéo chaque semaine.\" (sportif) \"Préparé les repas de 300 personnes par jour dans la cuisine d'un établissement, en réussissant chaque contrôle d'hygiène.\" (réinsertion)",
            "Soyez honnête. N'inventez jamais de chiffres ni de titres de poste. Si vous n'êtes pas sûr d'un chiffre, donnez une estimation juste avec le mot \"environ\", ou décrivez le résultat avec des mots."
          ],
          steps: ["Notez une tâche que vous avez faite dans un emploi, une équipe ou un programme.", "Commencez par un verbe d'action.", "Ajoutez ce que vous avez fait et pour qui.", "Ajoutez un chiffre ou un résultat.", "Lisez-la à voix haute : est-ce que cela ressemble à quelque chose que vous avez vraiment fait ?"],
          words: [["Puce de réalisation", "une ligne courte sur un CV qui montre un résultat obtenu, pas seulement une tâche."], ["Verbe d'action", "un verbe qui décrit une action, comme dirigé, créé, formé ou réparé."]],
          slides: [
            { title: "Tâches ou résultats", bullets: ["Faible : \"Chargé du nettoyage\"", "Fort : \"Nettoyé 12 chambres par service et réussi chaque inspection\""] },
            { title: "La formule de la puce", bullets: ["Verbe d'action", "+ ce que vous avez fait", "+ un chiffre ou un résultat"] },
            { title: "Exemples de vies différentes", bullets: ["\"Formé 4 nouveaux membres de l'équipe aux contrôles d'ouverture\"", "\"Capitaine d'une équipe de 22 ; organisé l'analyse vidéo\"", "\"Préparé 300 repas par jour en réussissant chaque contrôle\""] },
            { title: "Restez honnête", bullets: ["N'inventez jamais de chiffres ni de titres", "Utilisez \"environ\" pour une estimation juste", "Décrivez le résultat avec des mots si vous n'avez pas de chiffre"] }
          ],
          tryIt: "Écrivez quatre puces de réalisations pour votre CV avec la formule. Vous pouvez demander à un assistant d'IA : \"Rends cette puce de CV plus forte sans rien ajouter qui ne soit pas vrai : [votre puce].\" Vérifiez que chaque mot qu'il vous donne est vrai avant de le garder.",
          youCanNow: "écrire des puces de réalisations qui commencent par un verbe d'action et montrent un résultat.",
          quickCheck: [
            { objective: "O2", q: "Lequel est un verbe d'action qui commence une puce forte ?", options: ["Responsable de", "Formé", "Tâches comprenant", "Était chargé de"], answer: 1, why: "Les puces commencent par un verbe d'action qui montre ce que vous avez fait." },
            { objective: "O2", q: "Votre puce dit « Fait du service client ». Qu'écrivez-vous à la place ?", options: ["« Fait beaucoup de service client »", "« Service client, caisse, téléphone »", "« Le meilleur en service client »", "« Aidé environ 50 clients par jour et géré les retours avec calme »"], answer: 3, why: "Les puces fortes montrent ce que vous avez fait avec un résultat ou un chiffre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer un profil LinkedIn",
          minutes: 5,
          goal: "Créer un profil LinkedIn avec une photo, un titre, une section Infos et votre expérience.",
          text: [
            "LinkedIn est un site et une application gratuits de réseau professionnel. Les employeurs et les recruteurs y cherchent des personnes à embaucher, et beaucoup d'offres d'emploi y sont publiées. Votre profil fonctionne comme un CV en ligne que les gens peuvent trouver.",
            "Les parties les plus importantes : une photo claire de votre visage sur un fond uni ; un titre (la ligne sous votre nom) qui dit ce que vous faites ou voulez faire, comme \"Cariste | OSHA 10 | Fiable sur les horaires du matin\" ; une section Infos de trois à cinq phrases avec vos propres mots ; et votre expérience, avec les puces de votre CV. (OSHA est l'agence américaine de la sécurité au travail ; OSHA 10 est une formation de sécurité de 10 heures.)",
            "Ensuite, construisez votre réseau. Connectez-vous avec les personnes que vous connaissez : anciens entraîneurs, superviseurs, enseignants, conseillers ou travailleurs sociaux, personnes avec qui vous avez servi, camarades de classe. Envoyez un petit mot quand vous demandez la connexion. Suivez les entreprises où vous voulez travailler pour voir leurs offres.",
            "Restez professionnel et prudent. Ne publiez pas votre adresse personnelle, votre date de naissance ni vos numéros de pièce d'identité. Votre profil n'a pas besoin de parler d'un casier judiciaire ou d'une interruption ; il montre vos compétences."
          ],
          steps: ["Allez sur linkedin.com ou installez l'application officielle LinkedIn, et créez un compte gratuit avec une adresse e-mail professionnelle.", "Ajoutez une photo claire et souriante.", "Écrivez un titre qui dit ce que vous faites ou le poste que vous voulez.", "Écrivez une section Infos de trois à cinq phrases.", "Ajoutez votre expérience et vos compétences à partir de votre CV.", "Connectez-vous avec cinq personnes que vous connaissez, avec un petit mot."],
          words: [["LinkedIn", "un site et une application gratuits de réseau professionnel où les gens montrent leur parcours et où les employeurs publient des offres."], ["Titre", "la ligne courte sous votre nom sur LinkedIn qui dit ce que vous faites."], ["Réseau", "les personnes que vous connaissez et qui peuvent vous signaler des offres ou parler de votre travail."]],
          slides: [
            { title: "Pourquoi LinkedIn", bullets: ["Les recruteurs y cherchent des gens à embaucher", "Beaucoup d'offres d'emploi y sont publiées", "Votre CV en ligne que les gens peuvent trouver"] },
            { title: "Les parties clés", bullets: ["Photo claire sur un fond uni", "Titre : ce que vous faites ou voulez faire", "Infos : 3 à 5 phrases avec vos mots", "Puces d'expérience reprises de votre CV"] },
            { title: "Construisez votre réseau", bullets: ["Entraîneurs, superviseurs, enseignants, conseillers", "Envoyez un petit mot avec chaque demande", "Suivez les entreprises où vous voulez travailler"] },
            { title: "Restez prudent", bullets: ["Pas d'adresse, de date de naissance ni de numéro d'identité", "Montrez vos compétences ; vous choisissez ce que vous partagez"] }
          ],
          tryIt: "Créez ou mettez à jour votre profil LinkedIn. Écrivez votre titre et votre section Infos, ajoutez un emploi avec vos nouvelles puces, et envoyez des demandes de connexion avec un petit mot à trois personnes que vous connaissez.",
          youCanNow: "créer un profil LinkedIn avec une photo, un titre, une section Infos et votre expérience, et commencer à construire votre réseau.",
          quickCheck: [
            { objective: "O3", q: "À quoi sert la section Infos sur LinkedIn ?", options: ["À indiquer votre adresse personnelle", "À raconter votre parcours et ce que vous cherchez en quelques lignes courtes", "À montrer vos mots de passe", "À lister vos amis des réseaux sociaux"], answer: 1, why: "La section Infos est une courte histoire de vos compétences et de vos objectifs." },
            { objective: "O3", q: "Vous voulez vous connecter sur LinkedIn avec un ancien superviseur. Que faites-vous ?", options: ["Envoyer une demande avec un petit mot amical", "Envoyer une demande sans mot, avec votre numéro de téléphone", "Lui écrire tout de suite pour demander un emploi", "Attendre qu'il vous trouve"], answer: 0, why: "Un petit mot lui rappelle qui vous êtes et commence bien la relation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre CV et LinkedIn",
        questions: [
          { objective: "O1", q: "Quelle longueur doit avoir un CV pour la plupart des postes de débutant ou de niveau intermédiaire ?", options: ["Trois pages", "Une page", "Une demi-page", "Le plus long possible"], answer: 1, why: "Une page se lit vite et c'est la norme pour la plupart des emplois." },
          { objective: "O2", q: "Quelle puce est la plus forte ?", options: ["\"Responsable de la réserve\"", "\"Fait des tâches diverses\"", "\"Travailleur acharné\"", "\"Organisé la réserve et réduit d'environ moitié le temps de recherche des pièces\""], answer: 3, why: "Elle commence par un verbe d'action et montre un résultat." },
          { objective: "O1", q: "Vous avez tenu la ligne de cuisine dans un programme en détention. Faut-il le mettre sur votre CV ?", options: ["Oui, comme expérience, en décrivant les compétences utilisées", "Non, cela ne compte jamais", "Seulement si vous étiez très bien payé", "Seulement sur LinkedIn"], answer: 0, why: "Les programmes de travail et de formation sont une vraie expérience ; décrivez ce que vous avez fait." },
          { objective: "O3", q: "Quel est un bon titre LinkedIn ?", options: ["\"Je cherche\"", "Votre adresse personnelle", "\"Soudeur certifié | La sécurité d'abord | Ouvert à l'apprentissage\"", "Votre date de naissance"], answer: 2, why: "Un titre dit ce que vous faites ou voulez faire et montre vos points forts." },
          { objective: "O2", q: "Un outil d'IA a réécrit votre puce et ajouté un titre de manager que vous n'avez jamais eu. Que faites-vous ?", options: ["Vous le gardez, ça sonne mieux", "Vous le retirez, car tout sur un CV doit être vrai", "Vous ajoutez un autre titre", "Vous le mettez seulement sur LinkedIn"], answer: 1, why: "Un CV doit être honnête ; vous vérifiez chaque mot écrit par une IA." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Entretiens et suivi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Répondre avec la méthode STAR",
          minutes: 5,
          goal: "Répondre à une question comportementale avec une courte histoire STAR.",
          text: [
            "Beaucoup de questions d'entretien commencent par \"Parlez-moi d'une fois où...\". L'employeur veut un vrai exemple de votre façon d'agir. La méthode STAR garde votre réponse claire et courte.",
            "STAR vient de l'anglais. S, c'est la Situation : où vous étiez et ce qui se passait. T, c'est Task, la tâche : ce que vous deviez faire. A, c'est l'Action : ce que VOUS avez fait, étape par étape. R, c'est Result, le résultat : comment cela s'est fini, avec un chiffre si possible, et ce que vous avez appris.",
            "Exemple : \"Parlez-moi d'une fois où vous avez réglé un problème.\" S : \"Dans mon travail en entrepôt, une livraison est arrivée avec deux heures de retard un jour chargé.\" T : \"Je devais tout mettre en rayon avant l'ouverture du magasin.\" A : \"J'ai demandé à mon chef d'équipe si je pouvais diviser l'équipe, j'ai organisé deux lignes de déchargement et j'ai vérifié les étiquettes moi-même.\" R : \"Nous avons fini 15 minutes avant l'ouverture et rien ne manquait.\"",
            "Préparez cinq histoires avant tout entretien : une fois où vous avez réglé un problème, travaillé en équipe, géré une erreur, eu affaire à une personne difficile, et appris quelque chose vite. Le sport, l'armée, l'école, la famille et les programmes donnent tous de bonnes histoires."
          ],
          steps: ["Lisez la question et choisissez une vraie histoire.", "Situation : une phrase sur le lieu et le moment.", "Tâche (Task) : une phrase sur ce que vous deviez faire.", "Action : deux ou trois phrases sur ce que vous avez fait.", "Résultat (Result) : une phrase sur la fin et ce que vous avez appris.", "Gardez la réponse entière à environ une à deux minutes."],
          words: [["Question comportementale", "une question d'entretien qui demande de raconter une fois où vous avez fait quelque chose, pour voir comment vous agissez au travail."], ["Méthode STAR", "une façon de répondre : Situation, Task (tâche), Action, Result (résultat)."]],
          slides: [
            { title: "\"Parlez-moi d'une fois où...\"", bullets: ["L'employeur veut un vrai exemple", "STAR garde la réponse claire et courte"] },
            { title: "STAR", bullets: ["Situation : où et quand", "Task (tâche) : ce que vous deviez faire", "Action : ce que VOUS avez fait", "Result (résultat) : la fin et ce que vous avez appris"] },
            { title: "Préparez cinq histoires", bullets: ["Régler un problème ; travailler en équipe", "Gérer une erreur ; une personne difficile", "Apprendre quelque chose vite"] },
            { title: "Restez bref", bullets: ["Environ une à deux minutes", "Dites \"je\" pour vos actions", "Finissez par un résultat"] }
          ],
          tryIt: "Écrivez une histoire STAR pour \"Parlez-moi d'une fois où vous avez travaillé en équipe.\" Utilisez une phrase pour la Situation et une pour la Tâche, deux ou trois pour l'Action, et une pour le Résultat.",
          youCanNow: "répondre à une question \"parlez-moi d'une fois où\" avec une histoire STAR claire.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire le S de STAR ?", options: ["Savoir-faire", "Sérieux", "Situation", "Synthèse"], answer: 2, why: "STAR veut dire Situation, Tâche, Action et Résultat." },
            { objective: "O4", q: "On vous demande : « Parlez-moi d'une fois où vous avez résolu un problème. » Que faites-vous ?", options: ["Dire « Je suis doué pour résoudre les problèmes » et vous arrêter", "Parler dix minutes de plusieurs problèmes", "Dire que vous n'avez jamais eu de problème", "Raconter une seule histoire courte : la situation, la tâche, ce que vous avez fait et le résultat"], answer: 3, why: "Une courte histoire STAR prouve votre compétence avec un exemple réel." }
          ]
        },
        {
          objectives: ["O5"],
          title: "S'entraîner à voix haute et répondre honnêtement sur une interruption ou un casier",
          minutes: 6,
          goal: "S'entraîner à voix haute, y compris une réponse courte et honnête sur une interruption ou une condamnation.",
          text: [
            "Les réponses que vous avez seulement lues dans votre tête sortent en désordre. Dites-les à voix haute, enregistrez-vous sur un téléphone et réécoutez. Entraînez-vous sur les questions courantes : \"Parlez-moi de vous\", \"Pourquoi voulez-vous ce poste ?\", \"Quels sont vos points forts ?\" et \"Parlez-moi d'une fois où...\". Vous pouvez demander à un assistant d'IA de jouer le recruteur et de vous poser une question à la fois.",
            "Une interruption dans le parcours est courante : études, sport, service militaire, s'occuper de la famille, santé ou détention. Gardez la réponse courte et tournée vers l'avenir : ce qu'était l'interruption, ce que vous avez fait ou appris, et pourquoi vous êtes prêt maintenant. Exemple : \"Pendant deux ans, je me suis occupé de ma mère. J'ai entretenu mes compétences avec un cours en ligne, et je suis prêt à travailler à temps plein.\"",
            "Si vous avez une condamnation, ne mentez pas dans une candidature ni en entretien. Quand on vous pose la question, répondez brièvement et honnêtement : assumez-la, dites ce que vous avez fait depuis, et revenez au poste. Exemple : \"J'ai fait une grave erreur en 2019 et j'ai purgé ma peine. Depuis, j'ai obtenu un certificat de cariste et travaillé 18 mois sans manquer un seul service. Je suis prêt à apporter cette fiabilité ici.\" Ne donnez pas de longs détails sauf si on vous les demande.",
            "Connaissez vos droits. Selon les conseils de l'EEOC (l'agence fédérale américaine contre la discrimination à l'emploi), une arrestation seule n'est pas la preuve d'un crime, et l'employeur doit regarder l'infraction, son ancienneté et le poste. Beaucoup d'États et de villes ont des lois \"ban the box\" ou \"fair chance\" (seconde chance) qui retardent les questions sur le casier. Certains casiers peuvent être scellés ou effacés ; renseignez-vous auprès d'un service d'aide juridique ou de votre programme de réinsertion. Consultez les pages officielles ci-dessous."
          ],
          steps: ["Écrivez votre réponse à \"Parlez-moi de vous\" en quatre phrases : aujourd'hui, avant, points forts, pourquoi ce poste.", "Enregistrez-vous sur un téléphone en répondant à trois questions et réécoutez.", "Écrivez une réponse en trois parties pour toute interruption : ce que c'était, ce que vous avez fait, pourquoi vous êtes prêt.", "Si vous avez un casier : assumez-le, montrez ce que vous avez fait depuis, revenez au poste.", "Répétez la réponse difficile à voix haute jusqu'à ce qu'elle soit calme et courte."],
          words: [["Interruption de carrière", "une période sans travail, visible par des dates manquantes sur un CV."], ["Ban the box", "des lois de beaucoup d'États et de villes américains qui interdisent aux employeurs de poser des questions sur le casier dans le premier formulaire de candidature."], ["Effacement (expungement)", "une procédure judiciaire qui peut effacer ou sceller certains casiers ; les règles changent selon l'État."]],
          slides: [
            { title: "Entraînez-vous à voix haute", bullets: ["Enregistrez-vous sur votre téléphone", "Réécoutez et raccourcissez la réponse", "Demandez à un assistant d'IA de jouer le recruteur"] },
            { title: "Répondre sur une interruption", bullets: ["Ce qu'était l'interruption", "Ce que vous avez fait ou appris", "Pourquoi vous êtes prêt maintenant"] },
            { title: "Répondre sur un casier", bullets: ["Ne mentez jamais dans une candidature", "Assumez-le en une phrase", "Montrez ce que vous avez fait depuis", "Revenez au poste"] },
            { title: "Connaissez vos droits", bullets: ["Une arrestation seule n'est pas la preuve d'un crime", "Beaucoup d'endroits ont des lois ban the box ou fair chance", "Demandez à l'aide juridique pour sceller ou effacer un casier"] }
          ],
          sources: [
            { name: "EEOC : Casiers d'arrestation et de condamnation, ce que les demandeurs d'emploi et les travailleurs doivent savoir", url: "https://www.eeoc.gov/arrestandconviction" }
          ],
          tryIt: "Enregistrez-vous en répondant à \"Parlez-moi de vous\" et à une question difficile (une interruption, un casier, ou \"Pourquoi avez-vous quitté votre dernier emploi ?\"). Réécoutez. Coupez tout ce qui n'est pas utile, puis enregistrez-vous de nouveau.",
          youCanNow: "vous entraîner à voix haute et donner une réponse courte, honnête et tournée vers l'avenir sur une interruption ou un casier.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi vous enregistrer en train de répondre aux questions d'entretien ?", options: ["Pour entendre ce qu'il faut couper et améliorer", "Pour le publier en ligne", "Pour l'envoyer à l'employeur", "Parce que les entretiens sont toujours enregistrés"], answer: 0, why: "Vous réécouter montre ce qu'il faut raccourcir et corriger." },
            { objective: "O5", q: "Un recruteur vous interroge sur une interruption de deux ans pendant laquelle vous étiez en détention. Que répondez-vous ?", options: ["Inventer un autre emploi", "Refuser de répondre et partir", "Raconter longuement l'affaire", "Donner une réponse courte et honnête et dire ce que vous avez fait depuis"], answer: 3, why: "Court et honnête, puis on se concentre sur ce que vous avez fait depuis." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Poser des questions et faire un suivi",
          minutes: 4,
          goal: "Poser de bonnes questions à la fin d'un entretien et envoyer un message de remerciement.",
          text: [
            "Vers la fin, la plupart des recruteurs demandent : \"Avez-vous des questions pour nous ?\" Ayez toujours deux ou trois questions prêtes. Cela montre votre intérêt. Bonnes questions : \"À quoi ressemble un très bon premier mois dans ce poste ?\", \"Que font différemment les meilleurs de cette équipe ?\", \"Quelles sont les prochaines étapes, et quand puis-je espérer une réponse ?\"",
            "Gardez les questions sur le salaire et les avantages pour le moment où ils en parlent ou font une offre, sauf si l'offre d'emploi n'indiquait pas le salaire et que vous avez besoin de le savoir. Demandez poliment.",
            "Dans les 24 heures, envoyez un court message de remerciement par e-mail (ou une carte pour une petite entreprise locale). Remerciez pour le temps accordé, citez une chose dont vous avez parlé, et redites pourquoi vous voulez le poste. Limitez-vous à quatre ou cinq phrases.",
            "Si vous n'avez pas de nouvelles à la date annoncée, envoyez un seul message de suivi poli quelques jours plus tard. Continuez à postuler ailleurs en attendant."
          ],
          steps: ["Préparez deux ou trois questions avant l'entretien.", "Demandez quelles sont les prochaines étapes et le calendrier.", "Notez le nom et l'e-mail du recruteur.", "Envoyez un court message de remerciement dans les 24 heures.", "Faites un suivi une fois si la date annoncée est passée."],
          words: [["Suivi", "un message court et poli après un entretien pour remercier l'employeur ou demander les prochaines étapes."]],
          slides: [
            { title: "Ayez toujours des questions", bullets: ["\"À quoi ressemble un très bon premier mois ?\"", "\"Que font différemment les meilleurs ici ?\"", "\"Quelles sont les prochaines étapes ?\""] },
            { title: "Salaire et avantages", bullets: ["Attendez en général qu'ils en parlent ou fassent une offre", "Demandez poliment si le salaire n'était pas indiqué"] },
            { title: "Message de remerciement", bullets: ["Envoyez-le dans les 24 heures", "Citez une chose dont vous avez parlé", "Quatre ou cinq phrases"] },
            { title: "Toujours pas de réponse ?", bullets: ["Faites un seul suivi après la date annoncée", "Continuez à postuler ailleurs"] }
          ],
          tryIt: "Tâche finale : écrivez un court message de remerciement pour l'entretien auquel vous vous êtes préparé. Puis rassemblez tout : votre CV d'une page, votre titre LinkedIn et votre section Infos mis à jour, et trois réponses STAR enregistrées.",
          youCanNow: "poser de bonnes questions à la fin d'un entretien et faire un suivi avec un court message de remerciement.",
          quickCheck: [
            { objective: "O6", q: "Que contient un bon message de remerciement ?", options: ["Des remerciements, une chose dont vous avez parlé et pourquoi vous voulez le poste", "Seulement le mot merci", "Une demande de salaire plus élevé", "À nouveau tout votre CV"], answer: 0, why: "Citer une chose dont vous avez parlé montre un vrai intérêt." },
            { objective: "O6", q: "À la fin de l'entretien, on vous demande si vous avez des questions. Que demandez-vous ?", options: ["« Dans combien de temps puis-je prendre des congés ? »", "« Non, ça va. »", "« Quelles sont les prochaines étapes, et quand puis-je espérer une réponse ? »", "« Est-ce que j'ai le poste ? »"], answer: 2, why: "Demander les prochaines étapes montre votre intérêt et vous dit quand relancer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Entretiens et suivi",
        questions: [
          { objective: "O4", q: "Que veut dire le A de STAR ?", options: ["Answer (réponse)", "Attitude", "Action", "Award (prix)"], answer: 2, why: "STAR veut dire Situation, Task (tâche), Action, Result (résultat)." },
          { objective: "O5", q: "Quelle est la meilleure façon de s'entraîner aux réponses d'entretien ?", options: ["Les lire une fois en silence", "Apprendre un texte par cœur sans jamais le dire à voix haute", "Ne pas s'entraîner pour paraître naturel", "Les dire à voix haute et s'enregistrer"], answer: 3, why: "Parler puis réécouter vous montre ce qu'il faut corriger." },
          { objective: "O5", q: "Vous n'avez pas travaillé pendant un an pour vous occuper d'un parent. Quelle réponse est la meilleure ?", options: ["\"Je me suis occupé de ma mère pendant un an, j'ai entretenu mes compétences avec un cours, et je suis prêt à travailler à temps plein.\"", "\"Je préfère ne pas le dire.\"", "Inventer un emploi pour combler le vide", "Une histoire de dix minutes sur des problèmes de famille"], answer: 0, why: "Elle est courte, honnête et explique pourquoi vous êtes prêt." },
          { objective: "O5", q: "Un recruteur vous pose une question sur votre casier judiciaire. Que devez-vous faire ?", options: ["Le nier", "Donner une réponse courte et honnête et dire ce que vous avez fait depuis", "Partir", "Raconter chaque détail pendant dix minutes"], answer: 1, why: "L'honnêteté et ce que vous avez fait depuis créent la confiance ; mentir peut vous coûter le poste plus tard." },
          { objective: "O6", q: "Quand devez-vous envoyer un message de remerciement ?", options: ["Dans les 24 heures", "Après un mois", "Seulement si vous obtenez le poste", "Jamais"], answer: 0, why: "Un message rapide montre votre intérêt tant qu'ils se souviennent bien de vous." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : CV, LinkedIn et entretiens d'embauche",
    questions: [
      { objective: "O1", q: "Qu'est-ce qui doit être tout en haut d'un CV ?", options: ["Vos loisirs", "Vos références", "Votre nom et vos coordonnées", "Votre date de naissance"], answer: 2, why: "Le nom et les coordonnées viennent en premier pour que l'employeur puisse vous joindre." },
      { objective: "O1", q: "Pourquoi adapter un peu votre CV à chaque offre ?", options: ["Pour correspondre aux compétences demandées dans l'offre", "Parce que la loi l'exige", "Pour le rendre plus long", "Pour ajouter des emplois que vous n'avez pas eus"], answer: 0, why: "Faire correspondre vos vraies compétences à l'offre aide les gens et les logiciels à vous trouver." },
      { objective: "O1", q: "Quelle adresse e-mail est la meilleure sur un CV ?", options: ["roidelafete99@example.com", "jordan.smith@example.com", "Aucune adresse e-mail", "Votre ancienne adresse d'école que vous ne pouvez plus ouvrir"], answer: 1, why: "Une adresse simple et professionnelle que vous consultez souvent est la meilleure." },
      { objective: "O2", q: "Un ancien militaire a dirigé une équipe de 9 lors des contrôles quotidiens du matériel. Quelle puce est la plus forte ?", options: ["\"J'étais dans l'armée\"", "\"Fait des contrôles\"", "\"Tâches diverses\"", "\"Dirigé 9 soldats lors des contrôles quotidiens du matériel, sans aucune perte\""], answer: 3, why: "Verbe d'action, ce qui a été fait, et un résultat." },
      { objective: "O2", q: "Quelle est la formule de la puce ?", options: ["Titre du poste + salaire", "Verbe d'action + ce que vous avez fait + un résultat ou un chiffre", "Adjectif + adjectif + adjectif", "Date + lieu"], answer: 1, why: "Cette formule transforme des tâches en réalisations." },
      { objective: "O2", q: "Vous n'êtes pas sûr du chiffre exact pour une puce. Que faites-vous ?", options: ["Donner une estimation juste avec \"environ\" ou décrire le résultat avec des mots", "Inventer un gros chiffre", "Retirer tout l'emploi", "Copier un chiffre du CV d'un ami"], answer: 0, why: "Restez honnête ; une estimation doit être juste et présentée comme telle." },
      { objective: "O3", q: "Qu'est-ce que le titre sur LinkedIn ?", options: ["Votre adresse personnelle", "Un article d'actualité", "La ligne courte sous votre nom qui dit ce que vous faites", "Votre mot de passe"], answer: 2, why: "Le titre dit aux recruteurs ce que vous faites ou voulez faire." },
      { objective: "O3", q: "Quelle photo est la meilleure pour LinkedIn ?", options: ["Une photo de groupe prise à une fête", "Une photo de votre voiture", "Pas de visage, juste un logo", "Une photo claire de votre visage sur un fond uni"], answer: 3, why: "Une photo claire et souriante de votre visage fait professionnel." },
      { objective: "O3", q: "Que ne devez-vous PAS mettre sur votre profil LinkedIn ?", options: ["Vos compétences", "Votre adresse personnelle et vos numéros de pièce d'identité", "Votre expérience professionnelle", "Vos certificats"], answer: 1, why: "Les informations privées peuvent être mal utilisées ; ne les mettez pas." },
      { objective: "O3", q: "Avec qui est-il bon de se connecter en premier sur LinkedIn ?", options: ["Un ancien entraîneur ou superviseur qui connaît votre travail", "Une célébrité au hasard", "Personne", "Seulement des gens que vous n'avez jamais rencontrés"], answer: 0, why: "Les gens qui connaissent votre travail peuvent vous signaler des offres et parler pour vous." },
      { objective: "O4", q: "\"Parlez-moi d'une fois où vous avez fait une erreur.\" Quel type de question est-ce ?", options: ["Une question piège à éviter", "Une question sur le salaire", "Une question comportementale, bonne pour une réponse STAR", "Une question à laquelle on répond par oui ou non"], answer: 2, why: "Elle demande un vrai exemple, et STAR y répond bien." },
      { objective: "O4", q: "Dans une réponse STAR, quelle partie doit prendre le plus de temps ?", options: ["La Situation", "La tâche (Task)", "Le résultat (Result)", "L'Action : ce que vous avez fait"], answer: 3, why: "L'employeur veut surtout entendre ce que vous avez fait." },
      { objective: "O4", q: "Combien de temps environ doit durer une réponse STAR ?", options: ["Une à deux minutes", "Dix secondes", "Dix minutes", "Une demi-heure"], answer: 0, why: "Une réponse courte et claire garde l'attention du recruteur." },
      { objective: "O5", q: "Comment un assistant d'IA peut-il vous aider à vous entraîner ?", options: ["En allant à l'entretien à votre place", "En jouant le recruteur et en posant une question à la fois", "En inventant votre parcours professionnel", "En gardant votre numéro de pièce d'identité"], answer: 1, why: "L'IA peut poser des questions d'entraînement ; les réponses doivent rester les vôtres." },
      { objective: "O5", q: "Quelle est une réponse forte et honnête sur un casier ?", options: ["\"Je n'en ai pas\" alors que vous en avez un", "\"Ça ne vous regarde pas\"", "\"J'ai fait une erreur en 2019 et j'ai purgé ma peine. Depuis, j'ai obtenu un certificat et je n'ai manqué aucun jour.\"", "Une longue histoire qui accuse les autres"], answer: 2, why: "Assumez, montrez ce que vous avez fait depuis, et revenez au poste." },
      { objective: "O5", q: "Selon les conseils de l'EEOC, une arrestation seule :", options: ["Est la preuve d'un crime", "N'est pas la preuve d'un crime", "Doit figurer sur chaque CV", "Ne peut jamais faire l'objet d'une question"], answer: 1, why: "Une arrestation seule ne prouve pas que quelqu'un a commis un crime." },
      { objective: "O5", q: "Que sont les lois \"ban the box\" ou \"fair chance\" ?", options: ["Des règles sur l'envoi de cartons", "Des lois qui interdisent pour toujours toute vérification d'antécédents", "Des lois qui interdisent les CV", "Des lois de beaucoup d'endroits qui retardent les questions sur le casier dans la première candidature"], answer: 3, why: "Elles permettent d'être jugé d'abord sur ses compétences ; les règles changent selon l'endroit." },
      { objective: "O6", q: "À la fin de l'entretien, on vous demande : \"Avez-vous des questions ?\" Vous dites :", options: ["\"Quelles sont les prochaines étapes, et quand puis-je espérer une réponse ?\"", "\"Non.\"", "\"Dans combien de temps puis-je prendre des vacances ?\"", "\"Que fait cette entreprise ?\""], answer: 0, why: "Une question préparée et utile montre votre intérêt." },
      { objective: "O6", q: "Un bon message de remerciement :", options: ["Fait trois pages", "Redemande un salaire plus élevé", "Remercie, cite une chose dont vous avez parlé, et dit pourquoi vous voulez le poste", "Est envoyé un mois plus tard"], answer: 2, why: "Court, précis et rapide, c'est ce qui marche le mieux." },
      { objective: "O6", q: "L'employeur a dit qu'il appellerait avant vendredi. Nous sommes le mercredi de la semaine suivante. Vous :", options: ["Appelez dix fois par jour", "Envoyez un seul suivi poli et continuez à postuler ailleurs", "Arrêtez toute recherche d'emploi", "Allez à leur bureau sans être invité tous les jours"], answer: 1, why: "Un seul suivi poli est professionnel ; continuez votre recherche." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      6,
      8,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "CV d'une page",
        objective: "O1",
        notYet: "Plus d'une page, des rubriques manquantes, ou pas adapté à l'offre.",
        meets: "Une page avec les coordonnées, un résumé, les compétences qui correspondent et l'expérience datée.",
        exceeds: "Les compétences et le résumé reprennent des mots de l'offre d'emploi."
      },
      {
        name: "Puces de réalisations",
        objective: "O2",
        notYet: "Les puces listent seulement des tâches, ou quelque chose n'est pas vrai.",
        meets: "Au moins quatre puces vraies avec un verbe d'action et un résultat ou un chiffre.",
        exceeds: "Chaque puce montre un résultat clair."
      },
      {
        name: "Profil LinkedIn",
        objective: "O3",
        notYet: "Pas de titre ni de section Infos, ou des informations privées visibles.",
        meets: "Le titre et la section Infos correspondent au CV, sans information privée.",
        exceeds: "Photo ajoutée et trois demandes de connexion envoyées avec un mot."
      },
      {
        name: "Réponses STAR",
        objective: "O4",
        notYet: "Les réponses sont vagues ou il manque une partie de STAR.",
        meets: "Trois réponses STAR enregistrées avec les quatre parties, chacune d'une à deux minutes.",
        exceeds: "Les réponses finissent par un résultat clair, et la plus grande partie du temps porte sur l'Action."
      },
      {
        name: "Réponse honnête à une question difficile",
        objective: "O5",
        notYet: "Aucune réponse préparée, ou elle est longue, défensive ou fausse.",
        meets: "Une réponse courte et honnête sur une interruption ou un casier, qui passe ensuite à ce qui a été fait depuis.",
        exceeds: "Enregistrée, améliorée et dite avec calme."
      },
      {
        name: "Message de remerciement",
        objective: "O6",
        notYet: "Pas de message, ou un message général d'un seul mot.",
        meets: "Un court message avec des remerciements, une chose dont vous avez parlé et pourquoi vous voulez le poste.",
        exceeds: "Prêt à être envoyé dans les 24 heures, avec un plan de relance poli."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui postulent à au moins un emploi avec le nouveau CV dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui obtiennent un entretien dans les 60 jours",
      "Apprenants qui reçoivent une offre d'emploi dans les 90 jours",
      "Apprenants qui commencent un autre cours de carrière Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un outil de document gratuit comme Google Docs ou Microsoft Word",
      "Un compte LinkedIn gratuit",
      "Un enregistreur vocal ou vidéo sur un téléphone",
      "Une vraie offre d'emploi",
      "Environ 60 minutes pour les leçons et les contrôles, plus le temps de finir le CV et les enregistrements"
    ],
    facilitatorNotes: [
      "Faites des simulations d'entretien par deux pour que chaque apprenant réponde à voix haute au moins trois fois.",
      "Aidez les apprenants à transformer le sport, le service militaire, l'aide à des proches et le travail fait en détention en expérience honnête sur le CV.",
      "Vérifiez que les réécritures par l'IA restent vraies ; retirez tout ce que l'apprenant n'a pas fait.",
      "Rappelez aux apprenants de ne pas mettre leur adresse personnelle ni de numéro de pièce d'identité sur LinkedIn ou dans les outils d'IA.",
      "Notez le dossier final avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
