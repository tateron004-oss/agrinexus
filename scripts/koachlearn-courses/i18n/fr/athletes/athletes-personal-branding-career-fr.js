"use strict";

// Koach Learn course (French translation of athletes/athletes-personal-branding-career.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-personal-branding-career-fr",
  lang: "fr",
  translationOf: "athletes-personal-branding-career",
  category: "Athletes",
  name: "Image personnelle et développement de carrière de l'athlète",
  skills: "Nommer vos compétences transférables, Écrire votre histoire d'athlète, Créer un CV avec l'IA, Créer un profil LinkedIn, Réseauter et faire des entretiens d'information",
  outcome: "transformer votre expérience d'athlète en outils de carrière : une liste de compétences transférables avec des preuves, une histoire de 60 secondes, un CV d'une page créé avec l'IA, un profil LinkedIn et une demande d'entretien d'information envoyée à une personne qui exerce un métier qui vous intéresse.",
  about: [
    "Ce cours s'adresse aux athlètes du lycée, de l'université et en début de carrière qui pensent à leur vie pendant et après le sport, ainsi qu'aux entraîneurs qui les accompagnent. La plupart des athlètes auront une carrière en dehors du terrain, et le sport vous a déjà appris des compétences que les employeurs recherchent.",
    "Vous allez nommer ces compétences, raconter votre histoire d'une façon que les employeurs comprennent, créer un CV et un profil LinkedIn avec l'aide de l'IA, et commencer à construire un réseau.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Créez votre kit de démarrage de carrière : une liste de cinq compétences transférables avec un exemple sportif pour chacune, une histoire de 60 secondes, un CV d'une page créé avec l'IA et vérifié par vous, un profil LinkedIn (si vous respectez ses règles d'âge) ou une page de portfolio de carrière, et une demande polie d'entretien d'information envoyée à une vraie personne.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes de lycée, d'université et en début de carrière qui réfléchissent à leur vie pendant et après le sport, et les entraîneurs qui les accompagnent.",
    startingPoint: "Ils ont des années d'expérience sportive, souvent avec des rôles de responsabilité, et utilisent un téléphone tous les jours. Beaucoup n'ont pas de CV, ne savent pas décrire leurs compétences avec le langage du travail, n'ont pas exploré d'autres métiers que celui de joueur et n'ont jamais demandé conseil à un professionnel.",
    gap: "La plupart des athlètes auront une carrière en dehors du jeu, et le changement peut être difficile s'ils s'y prennent tard. Transformer l'expérience sportive en preuves de compétences, en une histoire claire, en un CV et en un réseau leur donne de la confiance et des options, maintenant et après le sport.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec un assistant IA gratuit ; LinkedIn seulement si l'apprenant respecte ses règles d'âge actuelles, sinon Google Sites",
      "Environ 60 minutes au total",
      "Aucun numéro de sécurité sociale ni autre numéro privé collé dans l'IA",
      "Les athlètes de moins de 18 ans doivent impliquer un parent ou un tuteur avant de contacter des adultes qu'ils ne connaissent pas"
    ],
    prerequisites: "Aucun"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de vos rôles, de vos routines et de vos défis dans le sport", action: "lister cinq compétences transférables avec un vrai exemple sportif pour chacune", standard: "avec chaque exemple vrai et assez précis pour servir de preuve" },
    { id: "O2", condition: "Avec la structure Passé, Présent et Avenir", action: "écrire et dire une histoire de 60 secondes sur qui vous êtes et où vous allez", standard: "environ 150 mots, avec votre voix, et répétée à voix haute jusqu'à ce qu'elle sonne naturelle" },
    { id: "O3", condition: "À partir de vos centres d'intérêt et avec un assistant IA", action: "lister trois métiers à explorer et une façon d'en apprendre plus sur chacun", standard: "avec la formation et la rémunération vérifiées sur un site officiel des métiers ou avec un conseiller d'orientation" },
    { id: "O4", condition: "Avec vos notes et un assistant IA", action: "créer un CV d'une page qui décrit le sport avec le langage du travail", standard: "avec des puces qui commencent par un verbe d'action, des chiffres quand ils sont vrais, chaque fait vérifié, aucun numéro privé partagé et une relecture par une personne" },
    { id: "O5", condition: "Si vous respectez les règles d'âge de LinkedIn, ou sinon avec Google Sites", action: "créer un profil professionnel avec une photo, un titre, une section « À propos », vos expériences et vos compétences", standard: "cohérent avec votre CV, et avec cinq connexions faites avec une courte note personnelle" },
    { id: "O6", condition: "À partir d'une personne qui exerce un métier qui vous intéresse", action: "écrire et envoyer une demande polie d'entretien d'information", standard: "avec qui vous êtes, comment vous l'avez trouvée, pourquoi son métier vous intéresse, une petite demande, trois questions préparées et un remerciement après" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre histoire et vos compétences",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vos compétences transférables",
          minutes: 5,
          goal: "Nommer cinq compétences du sport utiles au travail, chacune avec un vrai exemple.",
          text: [
            "Les compétences transférables sont des compétences utiles dans de nombreux métiers. Le sport en développe beaucoup : le travail d'équipe, le leadership, la gestion du temps, la gestion de la pression, l'acceptation des critiques, la discipline, la communication et la capacité à rebondir après une défaite.",
            "Les employeurs veulent des preuves, pas seulement des mots. « Leadership » est une affirmation. « Capitaine d'une équipe de 20 joueurs ; je dirigeais les échauffements et réglais les conflits » est une preuve.",
            "Un assistant IA peut vous aider à trouver des compétences que vous n'aviez pas remarquées : « J'ai joué quatre ans au football dans l'équipe première de mon lycée, j'étais capitaine en dernière année, je conciliais les entraînements avec un emploi à temps partiel et je suis revenu après une rupture du ligament croisé. Quelles compétences transférables cela montre-t-il, avec un exemple pour chacune ? » Ne gardez que ce qui est vrai."
          ],
          steps: ["Listez ce que vous avez fait dans le sport : rôles, routines, défis.", "Demandez à l'IA quelles compétences cela montre.", "Choisissez cinq compétences.", "Écrivez un vrai exemple pour chacune.", "Retirez tout ce qui n'est pas vrai."],
          words: [["Compétence transférable", "une compétence utile dans de nombreux métiers différents."], ["Résilience", "la capacité à rebondir après un échec."]],
          slides: [
            { title: "Le sport développe des compétences de travail", bullets: ["Travail d'équipe, leadership", "Gestion du temps, de la pression", "Critiques, discipline, résilience"] },
            { title: "Affirmation ou preuve", bullets: ["Affirmation : « leadership »", "Preuve : « Capitaine de 20 joueurs ; je dirigeais les échauffements »"] },
            { title: "L'IA vous aide à les repérer", bullets: ["Décrivez ce que vous avez fait", "Ne gardez que ce qui est vrai"] }
          ],
          tryIt: "Utilisez un assistant IA pour trouver les compétences de votre expérience sportive. Écrivez vos cinq principales, chacune avec un exemple vrai.",
          youCanNow: "nommer vos compétences transférables et prouver chacune par un exemple.",
          quickCheck: [
            { objective: "O1", q: "Laquelle est une compétence transférable ?", options: ["Votre numéro de maillot", "Le bilan de votre équipe", "Accepter les retours", "Votre exercice préféré"], answer: 2, why: "Les compétences transférables, comme accepter les retours, servent dans beaucoup de métiers." },
            { objective: "O1", q: "Vous avez écrit « travail d'équipe » sur votre liste. Comment en faire une preuve ?", options: ["Ajouter un vrai exemple, comme organiser des séances d'étude d'équipe avant les matchs à l'extérieur", "L'écrire en majuscules", "Ajouter plus de compétences", "Demander à l'IA de le faire paraître plus impressionnant"], answer: 0, why: "Les employeurs veulent des preuves, alors ajoutez un vrai exemple." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Votre histoire d'athlète en 60 secondes",
          minutes: 5,
          goal: "Écrire et répéter une histoire de 60 secondes sur qui vous êtes et où vous allez.",
          text: [
            "On vous dira « Parlez-moi de vous » en entretien, en réseautage et même lors du recrutement sportif. Ayez une réponse de 60 secondes prête.",
            "Utilisez trois parties : le passé (le sport et ce qu'il vous a appris), le présent (ce que vous faites maintenant : études, travail, entraînement), l'avenir (la direction qui vous intéresse). Exemple : « Je joue au basket depuis dix ans, et être capitaine m'a appris à diriger un groupe sous pression. Aujourd'hui, j'étudie le commerce et je travaille à temps partiel dans une salle de sport. Le marketing sportif m'intéresse et je veux apprendre comment les équipes construisent des communautés de fans. »",
            "Demandez à un assistant IA de la resserrer à environ 150 mots, puis répétez-la à voix haute jusqu'à ce qu'elle sonne naturelle, pas apprise par cœur."
          ],
          steps: ["Écrivez votre passé, votre présent et votre avenir en une ou deux phrases chacun.", "Demandez à l'IA de la resserrer à environ 150 mots.", "Retouchez-la avec votre voix.", "Répétez-la trois fois à voix haute.", "Chronométrez-vous : environ 60 secondes."],
          words: [["Présentation éclair", "une courte présentation orale que vous pourriez faire le temps d'un trajet en ascenseur."], ["Réseautage", "construire des relations avec des personnes qui peuvent partager des conseils et des opportunités."]],
          slides: [
            { title: "« Parlez-moi de vous »", bullets: ["Entretiens, réseautage, recrutement", "Ayez 60 secondes prêtes"] },
            { title: "Trois parties", bullets: ["Passé : le sport et ce qu'il vous a appris", "Présent : études, travail, entraînement", "Avenir : ce qui vous intéresse"] },
            { title: "Peaufinez-la", bullets: ["L'IA la resserre à ~150 mots", "Répétez à voix haute", "Naturelle, pas apprise par cœur"] }
          ],
          tryIt: "Écrivez votre histoire passé-présent-avenir, resserrez-la avec l'IA et enregistrez-vous en la disant sur votre téléphone. Réécoutez une fois et corrigez une chose.",
          youCanNow: "raconter votre histoire d'athlète de 60 secondes de façon claire et naturelle.",
          quickCheck: [
            { objective: "O2", q: "Que dit la partie « Présent » de votre histoire ?", options: ["Votre enfance", "Le salaire de vos rêves", "Votre meilleur match", "Ce que vous faites maintenant : études, travail, entraînement"], answer: 3, why: "Le Passé, c'est le sport ; le Présent, ce que vous faites maintenant ; l'Avenir, votre direction." },
            { objective: "O2", q: "Votre histoire sonne raide et récitée. Que faites-vous ?", options: ["La lire sur votre téléphone", "La répéter à voix haute jusqu'à ce qu'elle sonne naturelle", "La faire durer cinq minutes", "Arrêter de l'utiliser"], answer: 1, why: "Répétez à voix haute jusqu'à ce qu'elle sonne naturelle, pas apprise par cœur." }
          ]
        },
        {
          objectives: ["O3"],
          title: "La vie après le sport : explorer les métiers",
          minutes: 5,
          goal: "Lister trois métiers à explorer et une façon d'en apprendre plus sur chacun.",
          text: [
            "Chaque athlète arrête un jour la compétition, par choix, à cause d'une blessure ou de l'âge. Préparer tôt rend ce changement plus facile et vous donne confiance dès maintenant.",
            "Explorez des métiers liés à vos centres d'intérêt, pas seulement au sport. Dans le sport : entraîneur, soigneur sportif, marketing sportif, journalisme sportif, analyse de données, gestion d'installations. En dehors du sport : commerce, santé, technologie, métiers manuels, enseignement, service public et plus encore.",
            "Utilisez un assistant IA pour trouver des idées et expliquer les métiers, puis vérifiez les vrais détails comme la formation nécessaire et le salaire sur des sites officiels d'orientation, comme l'Occupational Outlook Handbook du Bureau des statistiques du travail des États-Unis (BLS), ou auprès d'un conseiller d'orientation de votre école."
          ],
          steps: ["Listez vos centres d'intérêt en dehors de la victoire.", "Demandez à l'IA des métiers qui y correspondent.", "Choisissez-en trois à explorer.", "Vérifiez chacun sur un site officiel d'orientation ou auprès d'un conseiller d'orientation.", "Écrivez une façon d'en apprendre plus sur chacun."],
          words: [["Conseiller d'orientation", "une personne de l'école ou de la communauté qui vous aide à explorer les métiers."], ["Occupational Outlook Handbook", "un guide du gouvernement américain sur les métiers, la formation nécessaire et les salaires."]],
          slides: [
            { title: "Chaque athlète fait une transition", bullets: ["Choix, blessure ou âge", "Préparez tôt, soyez confiant dès maintenant"] },
            { title: "Explorez largement", bullets: ["Dans le sport : entraîneur, soigneur, marketing, données", "En dehors : commerce, santé, tech, métiers manuels, enseignement"] },
            { title: "Vérifiez les vrais détails", bullets: ["L'IA pour trouver des idées", "Sites officiels pour la formation et le salaire", "Parlez à un conseiller d'orientation"] }
          ],
          sources: [{ name: "Bureau des statistiques du travail des États-Unis : Occupational Outlook Handbook (en anglais)", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Demandez à un assistant IA dix métiers qui correspondent à vos centres d'intérêt. Choisissez-en trois et cherchez la formation nécessaire pour chacun sur un site officiel d'orientation, ou demandez à votre conseiller d'orientation.",
          youCanNow: "explorer des métiers au-delà du terrain et vérifier les détails auprès de sources officielles.",
          quickCheck: [
            { objective: "O3", q: "Lequel est un métier en dehors du sport ?", options: ["Entraîneur", "Soigneur", "Commentateur sportif", "Enseignant"], answer: 3, why: "L'enseignement est en dehors du sport ; les autres sont des métiers dans le sport." },
            { objective: "O3", q: "L'IA vous donne la rémunération d'un métier qui vous plaît. Que faites-vous ensuite ?", options: ["La vérifier sur un site officiel des métiers ou avec un conseiller d'orientation", "La croire complètement", "La publier en ligne", "Choisir ce métier tout de suite"], answer: 0, why: "Vérifiez les vrais détails, comme la rémunération et la formation, auprès de sources officielles." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre histoire et vos compétences",
        questions: [
          { objective: "O1", q: "Laquelle est une preuve de leadership ?", options: ["« Je suis un leader »", "« Leadership ! »", "« Capitaine d'une équipe de 20 joueurs ; je dirigeais les échauffements et réglais les conflits »", "« Tout le monde m'aime »"], answer: 2, why: "Un vrai exemple prouve la compétence." },
          { objective: "O1", q: "L'IA dit que vous avez une « certification en gestion de projet ». Vous ne l'avez pas. Vous :", options: ["La retirez", "La gardez", "En ajoutez d'autres", "La mettez en gras"], answer: 0, why: "Ne gardez que ce qui est vrai." },
          { objective: "O2", q: "Quelles sont les trois parties de votre histoire de 60 secondes ?", options: ["Victoires, défaites, matchs nuls", "Nom, âge, adresse", "Statistiques, taille, poids", "Passé, présent, avenir"], answer: 3, why: "Elle montre d'où vous venez, où vous êtes et où vous allez." },
          { objective: "O3", q: "Pourquoi préparer tôt la vie après le sport ?", options: ["Vous devez arrêter maintenant", "Chaque athlète arrête un jour la compétition", "Les entraîneurs l'exigent", "Ce n'est pas utile"], answer: 1, why: "Préparer tôt rend le changement plus facile." },
          { objective: "O3", q: "Où vérifier la formation et le salaire d'un métier ?", options: ["Dans un commentaire au hasard", "Sur un site officiel d'orientation ou auprès d'un conseiller d'orientation", "Seulement auprès d'une IA", "Dans un jeu vidéo"], answer: 1, why: "Les sources officielles sont fiables." }
        ]
      }
    },
    {
      name: "Chapitre 2 : CV, LinkedIn et réseau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer un CV avec l'IA",
          minutes: 6,
          goal: "Créer un CV d'une page qui traduit le sport en langage professionnel.",
          text: [
            "Un CV est un résumé d'une page de votre formation, de votre expérience et de vos compétences. Les athlètes doivent y inclure le sport comme expérience, écrit en langage professionnel.",
            "Rubriques : Coordonnées (nom, ville, e-mail professionnel, téléphone), Formation, Expérience (emplois, stages, bénévolat et sport), Compétences et Distinctions. Écrivez des puces qui commencent par un verbe d'action et contiennent des chiffres : « Concilié 20 heures d'entraînement par semaine avec une moyenne de 3,4 sur 4 ».",
            "Demandez à un assistant IA : « Transforme ces notes en CV d'une page pour un stage en marketing sportif. Utilise des verbes d'action et des chiffres. » Ne collez pas de numéros privés comme votre numéro de sécurité sociale. Vérifiez chaque détail et faites relire le CV par un enseignant, un entraîneur ou un conseiller d'orientation."
          ],
          steps: ["Rassemblez votre formation, vos emplois, votre bénévolat et vos rôles sportifs.", "Demandez à l'IA un brouillon de CV d'une page.", "Vérifiez chaque fait et chaque chiffre.", "Utilisez des verbes d'action et des chiffres.", "Faites-le relire par un conseiller, un enseignant ou un entraîneur."],
          words: [["CV", "un résumé d'une page de votre formation, de votre expérience et de vos compétences."], ["Verbe d'action", "un verbe fort qui commence une puce, comme dirigé, organisé ou entraîné."]],
          slides: [
            { title: "Rubriques du CV", bullets: ["Coordonnées et formation", "Expérience, y compris le sport", "Compétences et distinctions"] },
            { title: "Des puces fortes", bullets: ["Commencez par un verbe d'action", "Ajoutez un chiffre", "« Concilié 20 h/semaine d'entraînement et 3,4 de moyenne »"] },
            { title: "Utilisez l'IA prudemment", bullets: ["Pas de numéros d'identité privés", "Vérifiez chaque fait", "Faites relire par une personne"] }
          ],
          tryIt: "Utilisez l'IA pour transformer vos notes en CV d'une page. Corrigez les faits erronés et demandez à un adulte de le relire.",
          youCanNow: "créer un CV d'une page qui présente votre expérience d'athlète en langage professionnel.",
          quickCheck: [
            { objective: "O4", q: "Quelle rubrique d'un CV contient votre numéro de téléphone et votre adresse e-mail professionnelle ?", options: ["Distinctions", "Compétences", "Contact", "Formation"], answer: 2, why: "La rubrique Contact contient votre nom, votre ville, votre e-mail professionnel et votre téléphone." },
            { objective: "O4", q: "Le brouillon de CV fait avec l'IA est prêt. Que faites-vous avant de l'envoyer ?", options: ["L'envoyer tout de suite", "Ajouter votre numéro de sécurité sociale", "Le faire tenir sur trois pages", "Vérifier chaque fait et le faire relire par un conseiller, un enseignant ou un entraîneur"], answer: 3, why: "Vérifiez chaque détail et faites-le relire par une personne." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Votre profil LinkedIn",
          minutes: 5,
          goal: "Créer un profil LinkedIn professionnel (ou une page de portfolio si vous n'avez pas l'âge requis).",
          text: [
            "LinkedIn est un réseau social professionnel où se retrouvent employeurs, recruteurs et anciens élèves. Vérifiez l'âge minimum actuel de LinkedIn avant de vous inscrire ; si vous êtes trop jeune, créez plutôt une page de carrière simple dans Google Sites.",
            "Un bon profil a : une photo claire et professionnelle ; un titre qui dit qui vous êtes et où vous allez (« Étudiant-athlète | Études de commerce | Intéressé par le marketing sportif ») ; une section Infos adaptée de votre histoire de 60 secondes ; une expérience qui inclut le sport ; et des compétences.",
            "Restez professionnel et cohérent avec votre CV. Connectez-vous avec des entraîneurs, des enseignants, des coéquipiers, des anciens élèves de votre école et des personnes qui exercent des métiers qui vous plaisent, avec un court message personnel."
          ],
          steps: ["Vérifiez les règles d'âge actuelles de LinkedIn.", "Ajoutez une photo et un titre professionnels.", "Adaptez votre histoire de 60 secondes pour la section Infos.", "Ajoutez votre expérience, y compris le sport.", "Connectez-vous avec cinq personnes avec un court message."],
          words: [["LinkedIn", "un réseau social professionnel pour les carrières et l'emploi."], ["Titre", "la courte ligne sous votre nom sur LinkedIn."], ["Anciens élèves", "les personnes diplômées de votre école."]],
          slides: [
            { title: "LinkedIn", bullets: ["Réseau social professionnel", "Vérifiez ses règles d'âge actuelles"] },
            { title: "Un bon profil", bullets: ["Photo professionnelle", "Titre : qui vous êtes et où vous allez", "Infos : votre histoire de 60 secondes"] },
            { title: "Connectez-vous", bullets: ["Entraîneurs, enseignants, anciens élèves", "Des personnes dans des métiers qui vous plaisent", "Ajoutez un court message personnel"] }
          ],
          tryIt: "Créez ou mettez à jour votre profil LinkedIn (ou une page de carrière Google Sites si vous êtes trop jeune). Demandez à l'IA trois propositions de titre et choisissez-en une.",
          youCanNow: "créer un profil en ligne professionnel qui correspond à votre CV.",
          quickCheck: [
            { objective: "O5", q: "Que doit dire un titre LinkedIn ?", options: ["Qui vous êtes et où vous allez", "Votre numéro de téléphone", "Le score de votre dernier match", "Une blague"], answer: 0, why: "Un bon titre dit qui vous êtes et où vous allez." },
            { objective: "O5", q: "Vous voulez vous connecter avec un ancien élève qui travaille dans le marketing sportif. Que faites-vous ?", options: ["Envoyer une demande sans message", "Envoyer une courte note personnelle avec la demande", "Lui demander tout de suite un emploi", "Lui écrire tous les jours"], answer: 1, why: "Connectez-vous avec une courte note personnelle." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Réseautage et entretiens d'information",
          minutes: 5,
          goal: "Écrire et envoyer une demande polie d'entretien d'information.",
          text: [
            "Un entretien d'information est une courte conversation, souvent de 15 à 20 minutes, où vous interrogez une personne sur son métier. Vous demandez des conseils, pas un emploi.",
            "Les athlètes ont un excellent réseau : anciens coéquipiers, anciens athlètes de votre école, contacts de vos entraîneurs et commerçants locaux qui soutiennent votre équipe. Beaucoup aiment aider les étudiants-athlètes.",
            "Écrivez une courte demande : qui vous êtes, comment vous les avez trouvés, pourquoi leur métier vous intéresse, et une petite demande claire (« Pourrais-je vous poser quelques questions pendant 15 minutes dans les semaines à venir ? »). Préparez trois questions, soyez à l'heure et envoyez un message de remerciement ensuite."
          ],
          steps: ["Choisissez une personne qui exerce un métier qui vous intrigue.", "Utilisez l'IA pour rédiger une courte demande.", "Rendez-la personnelle et polie.", "Préparez trois questions.", "Envoyez un remerciement après l'échange."],
          words: [["Entretien d'information", "une courte conversation pour découvrir le métier de quelqu'un, pas pour demander un emploi."], ["Réseau", "les personnes que vous connaissez et qui peuvent partager des conseils et des opportunités."]],
          slides: [
            { title: "Entretien d'information", bullets: ["15 à 20 minutes", "Demandez des conseils, pas un emploi"] },
            { title: "Votre réseau d'athlète", bullets: ["Anciens coéquipiers et anciens athlètes", "Contacts des entraîneurs", "Soutiens locaux"] },
            { title: "La demande", bullets: ["Qui vous êtes, comment vous les avez trouvés", "Pourquoi leur métier vous intéresse", "Une petite demande claire"] }
          ],
          tryIt: "Tâche finale : terminez votre liste de compétences, votre histoire de 60 secondes, votre CV et votre profil en ligne, puis envoyez une demande d'entretien d'information à une vraie personne et préparez trois questions.",
          youCanNow: "demander et préparer un entretien d'information pour développer votre réseau.",
          quickCheck: [
            { objective: "O6", q: "Que demandez-vous lors d'un entretien d'information ?", options: ["Une offre d'emploi", "De l'argent", "Des conseils sur son parcours professionnel", "Une lettre de recommandation"], answer: 2, why: "Vous demandez des conseils, pas un emploi." },
            { objective: "O6", q: "Un ancien élève a accepté de parler 15 minutes la semaine prochaine. Comment vous préparez-vous ?", options: ["Préparer trois questions et être à l'heure", "Prévoir de parler de vous tout le temps", "Demander plutôt une heure", "Apporter votre CV et demander un emploi"], answer: 0, why: "Préparez trois questions, soyez à l'heure et envoyez un remerciement après." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : CV, LinkedIn et réseau",
        questions: [
          { objective: "O4", q: "Quelle puce de CV est la plus forte ?", options: ["« J'ai fait du sport »", "« J'étais dans une équipe »", "« Travailleur »", "« Concilié 20 heures d'entraînement par semaine avec une moyenne de 3,4 sur 4 »"], answer: 3, why: "Elle utilise une action et un chiffre." },
          { objective: "O4", q: "Que ne devez-vous PAS coller dans l'IA en créant un CV ?", options: ["Votre numéro de sécurité sociale", "Vos rôles sportifs", "Le nom de votre école", "Vos tâches au travail"], answer: 0, why: "Les numéros d'identité privés restent privés." },
          { objective: "O5", q: "Vous êtes trop jeune pour LinkedIn. Que pouvez-vous faire ?", options: ["Mentir sur votre âge", "Utiliser le compte d'un parent", "Créer une page de carrière dans Google Sites", "Abandonner"], answer: 2, why: "Une page de carrière simple suffit jusqu'à ce que vous ayez l'âge." },
          { objective: "O6", q: "Dans un entretien d'information, vous demandez :", options: ["Un emploi tout de suite", "De l'argent", "Son mot de passe", "Des conseils sur son métier"], answer: 3, why: "C'est pour apprendre, pas pour chercher un emploi." },
          { objective: "O6", q: "Après un entretien d'information, vous devez :", options: ["Demander un emploi immédiatement", "Envoyer un message de remerciement", "Ne plus jamais le contacter", "Publier sur cette personne"], answer: 1, why: "Les remerciements créent des relations durables." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Image personnelle et développement de carrière de l'athlète",
    questions: [
      { objective: "O1", q: "Une compétence transférable, c'est :", options: ["Un échange entre équipes", "Une règle de transfert", "Une compétence utile dans de nombreux métiers", "Une boisson sportive"], answer: 2, why: "Elle vous suit d'un métier à l'autre." },
      { objective: "O1", q: "Laquelle est une compétence transférable venue du sport ?", options: ["Gérer la pression", "Votre numéro de maillot", "Votre marque de chaussures", "Votre mascotte"], answer: 0, why: "Les employeurs apprécient la gestion de la pression." },
      { objective: "O1", q: "La résilience, c'est :", options: ["Rebondir après un échec", "Ne jamais perdre", "Être le plus grand", "Courir vite"], answer: 0, why: "C'est se remettre des échecs." },
      { objective: "O1", q: "Les employeurs veulent :", options: ["Seulement des affirmations", "Seulement vos statistiques", "Des preuves, pas seulement des mots", "Vos abonnés"], answer: 2, why: "Les exemples prouvent les compétences." },
      { objective: "O2", q: "Votre histoire de 60 secondes doit sonner :", options: ["Robotique", "Naturelle, pas apprise par cœur", "Très longue", "Comme quelqu'un d'autre"], answer: 1, why: "Naturelle, elle paraît sûre et vraie." },
      { objective: "O2", q: "La partie « avenir » de votre histoire dit :", options: ["Vos anciens scores", "Votre mot de passe", "Les projets de votre rival", "La direction qui vous intéresse"], answer: 3, why: "Elle montre où vous allez." },
      { objective: "O2", q: "Combien de temps doit durer votre histoire orale ?", options: ["Dix minutes", "Cinq secondes", "Environ 60 secondes", "Une heure"], answer: 2, why: "Assez courte pour garder l'attention." },
      { objective: "O3", q: "Un métier dans le sport, c'est :", options: ["Plombier", "Infirmier", "Professeur de maths", "Soigneur sportif"], answer: 3, why: "Soigneur sportif est un métier du sport." },
      { objective: "O3", q: "L'Occupational Outlook Handbook est :", options: ["Un guide du gouvernement américain sur les métiers, la formation et les salaires", "Un cahier de tactiques", "Une application sociale", "Un magazine de sport"], answer: 0, why: "C'est une source officielle d'orientation." },
      { objective: "O4", q: "Un CV doit généralement faire :", options: ["Dix pages", "Une page", "Une vidéo", "Un tweet"], answer: 1, why: "Court et facile à parcourir." },
      { objective: "O4", q: "Quelle rubrique montre le sport dans un CV ?", options: ["Coordonnées", "Seulement les loisirs", "Expérience", "Nulle part"], answer: 2, why: "Le sport est une vraie expérience." },
      { objective: "O4", q: "Une puce de CV doit commencer par :", options: ["Un verbe d'action", "« Euh »", "Votre mot de passe", "Un émoji"], answer: 0, why: "Les verbes d'action montrent ce que vous avez fait." },
      { objective: "O4", q: "Après que l'IA a rédigé votre CV, vous devez :", options: ["L'envoyer sans le lire", "Ajouter de faux emplois", "Le faire passer à trois pages", "Vérifier chaque fait et le faire relire par une personne"], answer: 3, why: "L'exactitude et un second regard comptent." },
      { objective: "O5", q: "LinkedIn, c'est :", options: ["Un jeu vidéo", "Un réseau social professionnel", "Une ligue sportive", "Un magasin"], answer: 1, why: "C'est pour les carrières et l'emploi." },
      { objective: "O5", q: "Un bon titre LinkedIn, c'est :", options: ["« salut »", "« Étudiant-athlète | Études de commerce | Intéressé par le marketing sportif »", "« je m'ennuie »", "Vide"], answer: 1, why: "Il dit qui vous êtes et où vous allez." },
      { objective: "O5", q: "Quand vous vous connectez sur LinkedIn, ajoutez :", options: ["Jamais rien", "Une demande d'emploi", "Votre adresse", "Un court message personnel"], answer: 3, why: "Les messages personnels sont plus souvent acceptés." },
      { objective: "O5", q: "Les anciens élèves sont :", options: ["Les personnes diplômées de votre école", "Les adversaires", "Les arbitres", "Seulement les fans"], answer: 0, why: "Ils aiment souvent aider les élèves de leur école." },
      { objective: "O6", q: "Un entretien d'information dure généralement :", options: ["5 heures", "1 minute", "15 à 20 minutes", "Toute la journée"], answer: 2, why: "Les petites demandes obtiennent plus de oui." },
      { objective: "O6", q: "Avant l'entretien, préparez :", options: ["Un contrat", "Un cadeau", "Rien", "Trois questions"], answer: 3, why: "Des questions préparées respectent son temps." },
      { objective: "O6", q: "Qui fait partie du réseau d'un athlète ?", options: ["Seulement des célébrités", "Les anciens coéquipiers, les anciens athlètes et les contacts des entraîneurs", "Personne", "Seulement les rivaux"], answer: 1, why: "Votre communauté sportive est un réseau solide." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Compétences transférables",
        objective: "O1",
        notYet: "Moins de cinq compétences, ou des compétences sans vrai exemple.",
        meets: "Cinq compétences, chacune avec un exemple sportif vrai et précis.",
        exceeds: "Chaque exemple comprend un chiffre ou un résultat, comme la taille de l'équipe ou les heures à concilier."
      },
      {
        name: "Histoire de 60 secondes",
        objective: "O2",
        notYet: "Il manque le Passé, le Présent ou l'Avenir, ou elle dure bien plus d'une minute.",
        meets: "Environ 60 secondes avec le Passé, le Présent et l'Avenir, avec la voix de l'athlète.",
        exceeds: "Dite à voix haute de façon naturelle et adaptée pour la section « À propos » de LinkedIn."
      },
      {
        name: "CV",
        objective: "O4",
        notYet: "Plus d'une page, des détails faux, ou le sport est absent.",
        meets: "Une page, avec le sport décrit dans le langage du travail, des puces avec des verbes d'action, des faits vérifiés et une relecture par une personne.",
        exceeds: "Adapté à un métier ou un stage de la liste explorée par l'athlète."
      },
      {
        name: "Profil",
        objective: "O5",
        notYet: "Pas de profil, ou il ne correspond pas au CV.",
        meets: "Un profil LinkedIn ou une page de carrière avec photo, titre, « À propos », expériences et compétences, cohérent avec le CV.",
        exceeds: "Cinq connexions faites avec des notes personnelles, dont des anciens élèves."
      },
      {
        name: "Demande d'entretien d'information",
        objective: "O6",
        notYet: "Aucune demande envoyée, ou elle demande un emploi.",
        meets: "Une demande polie envoyée à une vraie personne, avec qui, comment, pourquoi et une petite demande, plus trois questions prêtes.",
        exceeds: "L'entretien a eu lieu et un message de remerciement a été envoyé."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le kit de démarrage de carrière avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui font au moins un entretien d'information dans les 30 jours (questionnaire de suivi)",
      "Les apprenants qui postulent à un stage, un emploi ou un rôle bénévole, ou en obtiennent un, grâce à leur CV",
      "Les apprenants qui suivent un autre cours, comme Entrepreneuriat et IA pour les athlètes"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un compte LinkedIn si vous respectez ses règles d'âge, ou un compte Google gratuit pour Google Sites",
      "Des notes sur vos études, vos emplois, votre bénévolat et vos rôles dans le sport",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Invitez un conseiller d'orientation de l'école ou d'anciens athlètes à relire les CV et à faire répéter les histoires de 60 secondes.",
      "Rappelez aux apprenants de ne jamais coller de numéro de sécurité sociale ni d'autre numéro privé dans l'IA.",
      "Vérifiez avec le groupe les règles d'âge actuelles de LinkedIn et proposez Google Sites aux plus jeunes.",
      "Pour les athlètes de moins de 18 ans, impliquez les parents ou tuteurs avant qu'ils contactent des adultes qu'ils ne connaissent pas, et conseillez de se rencontrer dans un lieu public ou en vidéo.",
      "Soyez attentif aux athlètes qui vivent une blessure ou la fin de leur carrière de joueur, et orientez-les vers du soutien s'ils en ont besoin."
    ]
  }
};
