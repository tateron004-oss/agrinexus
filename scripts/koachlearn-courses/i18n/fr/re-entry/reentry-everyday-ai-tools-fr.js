"use strict";

// Koach Learn course (French translation of re-entry/reentry-everyday-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-everyday-ai-tools-fr",
  lang: "fr",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Les outils d'IA du quotidien",
  skills: "Créer des rappels à la voix, Trouver un itinéraire en transports, Lire et traduire avec l'appareil photo, Trouver de l'aide près de chez vous, Écrire des messages du quotidien avec l'IA, Faire une liste de documents",
  outcome: "utiliser les outils d'IA gratuits d'un smartphone pour arriver à l'heure à un rendez-vous : trouver l'itinéraire en bus ou en train, créer un rappel, faire une liste de ce qu'il faut apporter, et écrire un court message si vous êtes en retard.",
  about: [
    "Ce cours s'adresse aux personnes qui rentrent chez elles après une peine de prison et qui veulent utiliser un smartphone pour gérer la vie de tous les jours : rendez-vous, déplacements, lecture de formulaires, recherche d'aide et contacts avec les proches.",
    "Vous utiliserez des outils gratuits déjà présents sur la plupart des téléphones : l'assistant vocal, les cartes, les outils de lecture de l'appareil photo, et un assistant d'IA comme ChatGPT, Microsoft Copilot ou Google Gemini. Chaque exemple vient de la vraie vie après la sortie : entretiens d'embauche, bureaux des pièces d'identité, rendez-vous pour un logement et famille.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives et faites la tâche \"Essayez maintenant\". Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Vous n'avez jamais besoin de taper un numéro de dossier, un numéro de pièce d'identité ou un détail privé pour faire ces tâches."
  ],
  finalTask: "Préparez votre trajet pour un vrai rendez-vous (un entretien d'embauche, un bureau des pièces d'identité ou une visite de logement) : trouvez l'itinéraire en transports ou à pied, créez un rappel pour l'heure de départ, demandez à l'IA une liste de ce qu'il faut apporter, et faites-vous aider par l'IA pour écrire un court SMS poli à envoyer si vous êtes en retard.",
  chapters: [
    {
      name: "Chapitre 1 : Votre téléphone, un assistant",
      lessons: [
        {
          title: "Rappels et alarmes à la voix",
          minutes: 5,
          goal: "Créer un rappel pour un rendez-vous en parlant à votre téléphone.",
          text: [
            "Rater un rendez-vous peut vous faire perdre un entretien d'embauche, une place de logement ou un pointage. Votre téléphone peut s'en souvenir pour vous.",
            "La plupart des téléphones ont un assistant vocal : Siri sur iPhone, et Google Assistant ou Gemini sur Android. Réveillez-le en disant \"Dis Siri\" ou \"Ok Google\", ou en appuyant longtemps sur le bouton latéral ou d'accueil. Puis dites : \"Rappelle-moi mon entretien chez Fresh Foods mardi à 9 h.\" \"Mets une alarme demain à 6 h 30.\"",
            "Créez deux rappels pour tout ce qui est important : un la veille, et un au moment de partir. Gardez des titres de rappel généraux ; vous n'avez pas besoin d'y mettre de détails privés."
          ],
          steps: ["Réveillez l'assistant vocal.", "Dites quoi, le jour et l'heure.", "Ajoutez un deuxième rappel pour l'heure de départ.", "Regardez l'écran pour vérifier qu'il est bien créé."],
          words: [["Assistant vocal", "un assistant intégré à votre téléphone qui fait des tâches simples quand vous parlez."], ["Rappel", "un message que votre téléphone vous affiche au moment que vous choisissez."]],
          slides: [
            { title: "Votre téléphone peut s'en souvenir", bullets: ["Entretiens, bureau des pièces d'identité, visites de logement", "Siri, Google Assistant ou Gemini"] },
            { title: "Dites-le", bullets: ["\"Rappelle-moi mon entretien mardi à 9 h.\"", "\"Mets une alarme demain à 6 h 30.\""] },
            { title: "Deux rappels pour les choses importantes", bullets: ["Un la veille", "Un au moment de partir", "Des titres généraux"] }
          ],
          tryIt: "Créez à la voix un rappel pour un vrai rendez-vous, ou un rendez-vous pour vous entraîner, et un deuxième rappel pour l'heure à laquelle vous devez partir.",
          youCanNow: "créer à la voix des rappels de rendez-vous et des alarmes."
        },
        {
          title: "Se déplacer avec les cartes et les transports",
          minutes: 6,
          goal: "Trouver un itinéraire en bus, en train ou à pied, et savoir quand partir.",
          text: [
            "Les applications de cartes comme Google Maps et Plans d'Apple montrent comment aller n'importe où en bus, en train, à pied ou en voiture, et combien de temps cela prend.",
            "Ouvrez l'application de cartes, tapez l'adresse dans la barre de recherche et touchez Itinéraire. Choisissez le symbole du bus ou du train pour les transports en commun, ou le piéton pour la marche. Vous verrez quel bus prendre, où le prendre et quand il passe. Vous pouvez aussi indiquer l'heure à laquelle vous devez arriver, et l'application montre quand partir.",
            "Prévoyez d'arriver 10 à 15 minutes en avance. Les bus peuvent être en retard. Enregistrez les adresses où vous allez souvent, comme votre domicile ou votre travail, pour les avoir en un seul geste. Certaines compagnies de transport ont aussi leur propre application avec les horaires de bus en direct."
          ],
          steps: ["Ouvrez votre application de cartes.", "Tapez l'adresse et touchez Itinéraire.", "Choisissez transports en commun (bus ou train) ou marche.", "Indiquez votre heure d'arrivée pour voir quand partir.", "Prévoyez d'arriver 10 à 15 minutes en avance."],
          words: [["Transports en commun", "les transports publics comme les bus et les trains."], ["Heure d'arrivée", "l'heure à laquelle vous devez être sur place."]],
          slides: [
            { title: "Les cartes connaissent le chemin", bullets: ["Google Maps ou Plans d'Apple", "Bus, train, marche ou voiture"] },
            { title: "Trouvez l'itinéraire", bullets: ["Tapez l'adresse, touchez Itinéraire", "Choisissez transports en commun ou marche", "Voyez quel bus et à quelle heure"] },
            { title: "Soyez à l'heure", bullets: ["Indiquez votre heure d'arrivée", "Arrivez 10 à 15 minutes en avance", "Enregistrez les adresses fréquentes"] }
          ],
          tryIt: "Trouvez l'itinéraire en transports ou à pied vers un vrai lieu où vous devez aller, comme un American Job Center (centre public pour l'emploi aux États-Unis), le service des permis de conduire (DMV) ou une bibliothèque. Indiquez l'heure d'arrivée et notez quand vous devez partir.",
          youCanNow: "trouver un itinéraire en transports ou à pied et calculer quand partir."
        },
        {
          title: "Lire et traduire avec votre appareil photo",
          minutes: 5,
          goal: "Utiliser l'appareil photo de votre téléphone pour lire, copier ou traduire un texte imprimé.",
          text: [
            "L'appareil photo de votre téléphone peut lire les mots imprimés. Avec Google Lens (dans l'application Google et sur beaucoup de téléphones Android) ou la fonction texte de l'appareil photo de l'iPhone, vous pouvez viser un prospectus, un panneau ou un formulaire et copier le texte, le rechercher ou le traduire.",
            "Ouvrez l'appareil photo ou Google Lens et visez les mots. Touchez le bouton texte ou le texte en surbrillance, puis choisissez Copier, Écouter, Traduire ou Rechercher. C'est utile pour copier un numéro de téléphone sur un prospectus ou lire des instructions dans une autre langue.",
            "Ne scannez pas dans des outils d'IA des documents avec des numéros privés, comme votre carte de sécurité sociale ou des papiers du tribunal. Utilisez ces outils pour des choses publiques comme des prospectus, des panneaux et des offres d'emploi."
          ],
          steps: ["Ouvrez l'appareil photo ou Google Lens.", "Visez les mots imprimés.", "Touchez le bouton texte ou les mots en surbrillance.", "Choisissez Copier, Écouter, Traduire ou Rechercher.", "Ne scannez pas de documents privés."],
          words: [["Google Lens", "un outil gratuit de Google qui utilise votre appareil photo pour lire, traduire et rechercher ce qu'il voit."], ["Traduire", "passer des mots d'une langue à une autre."]],
          slides: [
            { title: "L'appareil photo sait lire", bullets: ["Google Lens ou l'appareil photo de l'iPhone", "Prospectus, panneaux, offres d'emploi"] },
            { title: "Ce que vous pouvez faire", bullets: ["Copier un numéro de téléphone", "Entendre les mots lus à voix haute", "Traduire ou rechercher"] },
            { title: "Restez sur du public", bullets: ["Pas de carte de sécurité sociale", "Pas de papiers du tribunal ni de formulaires privés"] }
          ],
          tryIt: "Visez avec votre appareil photo ou Google Lens un prospectus, un panneau ou une offre d'emploi. Copiez-en un numéro de téléphone ou une adresse dans une note ou dans vos contacts.",
          youCanNow: "utiliser votre appareil photo pour copier, écouter ou traduire un texte imprimé."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre téléphone, un assistant",
        questions: [
          { q: "Quelle est la meilleure façon de ne pas rater un entretien d'embauche ?", options: ["L'écrire sur votre main", "Espérer vous en souvenir", "Créer un rappel la veille et un pour l'heure de départ", "Demander à un inconnu de vous le rappeler"], answer: 2, why: "Deux rappels couvrent la préparation et le départ à l'heure." },
          { q: "Dans une application de cartes, quel choix montre les trajets en bus et en train ?", options: ["Transports en commun", "Satellite", "Trafic", "Réglages"], answer: 0, why: "Transports en commun montre les transports publics." },
          { q: "Combien de temps en avance prévoir d'arriver à un rendez-vous ?", options: ["Une heure en retard", "Pile à l'heure", "5 minutes en retard", "10 à 15 minutes en avance"], answer: 3, why: "Les bus peuvent être en retard ; arriver en avance est plus sûr." },
          { q: "Que peut faire Google Lens avec un prospectus ?", options: ["Imprimer de l'argent", "Copier, lire à voix haute ou traduire son texte", "Appeler votre famille", "Signer des formulaires pour vous"], answer: 1, why: "Lens lit le texte que voit l'appareil photo." },
          { q: "Que ne devez-vous PAS scanner dans un outil d'IA ?", options: ["Une offre d'emploi", "Votre carte de sécurité sociale", "Un panneau de rue", "Des horaires de bus"], answer: 1, why: "Les documents privés restent hors des outils d'IA." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire avancer les choses",
      lessons: [
        {
          title: "Trouver de l'aide près de chez vous",
          minutes: 5,
          goal: "Trouver des services locaux pour le logement, la nourriture, l'emploi ou les transports.",
          text: [
            "De l'aide existe, mais elle peut être difficile à trouver. Aux États-Unis, le 211 est un service national qui vous met en contact avec de l'aide locale pour le logement, la nourriture, les transports, la santé et plus encore. Appelez le 211, ou cherchez votre 211 local sur 211.org. Les appels sont confidentiels et vous pouvez rester anonyme.",
            "Un assistant d'IA peut vous aider à vous préparer : \"Je viens de sortir et j'habite à Columbus, dans l'Ohio. Quels types de services locaux pourraient m'aider pour le logement, la nourriture et la formation professionnelle ? Quelles questions poser quand j'appelle le 211 ?\"",
            "L'IA peut citer des programmes qui ont fermé ou donner de mauvais numéros. Confirmez toujours auprès du 211, du site officiel du programme ou de votre conseiller en réinsertion avant d'y aller."
          ],
          steps: ["Demandez à l'IA quels types d'aide chercher et quoi demander.", "Appelez le 211 ou cherchez sur 211.org.", "Notez les programmes, les numéros et les horaires.", "Confirmez sur le site officiel ou par téléphone avant d'y aller."],
          words: [["211", "un numéro de téléphone et un site web qui vous mettent en contact avec de l'aide locale aux États-Unis."], ["Conseiller (case manager)", "une personne qui vous aide à faire des plans et à trouver des services."]],
          slides: [
            { title: "L'aide existe", bullets: ["Logement, nourriture, transports, santé", "Appelez le 211 ou allez sur 211.org", "Confidentiel ; vous pouvez rester anonyme"] },
            { title: "Préparez-vous avec l'IA", bullets: ["Quels types d'aide chercher", "Quelles questions poser"] },
            { title: "Confirmez avant d'y aller", bullets: ["L'IA peut citer des programmes fermés", "Vérifiez avec le 211 ou le site officiel", "Demandez à votre conseiller"] }
          ],
          sources: [{ name: "211 : qui sommes-nous (en anglais)", url: "https://www.211.org/about-us" }],
          tryIt: "Demandez à un assistant d'IA quels types de services locaux pourraient vous aider maintenant et quoi demander quand vous appelez. Puis cherchez votre 211 local sur 211.org et notez un programme à contacter.",
          youCanNow: "trouver de l'aide près de chez vous et la confirmer avant d'y aller."
        },
        {
          title: "Écrire des messages du quotidien avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire un message court et poli pour une situation réelle.",
          text: [
            "Beaucoup de situations de tous les jours demandent un message : prévenir un employeur que vous serez en retard, poser une question à un propriétaire sur un appartement, remercier quelqu'un pour un entretien, ou reprendre contact avec la famille.",
            "Dites à l'IA à qui c'est destiné, ce que vous devez dire et le ton voulu : \"Écris un SMS court et poli à une responsable du recrutement. Mon bus a 10 minutes de retard pour mon entretien de 9 h. Je suis désolé et toujours très intéressé.\"",
            "Lisez-le à voix haute et changez tout ce qui ne vous ressemble pas. Restez court et honnête. Vous n'avez pas besoin d'expliquer votre passé dans les messages de tous les jours."
          ],
          steps: ["Dites à qui c'est destiné.", "Dites ce que vous devez dire.", "Dites le ton voulu : poli, court, aimable.", "Lisez-le à voix haute et faites qu'il vous ressemble."],
          words: [["Poli", "respectueux et courtois."], ["Brouillon", "une première version que vous pouvez changer."]],
          slides: [
            { title: "Messages du quotidien", bullets: ["Être en retard", "Se renseigner sur un appartement", "Remercier après un entretien"] },
            { title: "Dites trois choses à l'IA", bullets: ["À qui c'est destiné", "Ce que vous devez dire", "Le ton voulu"] },
            { title: "Faites-le vôtre", bullets: ["Lisez-le à voix haute", "Court et honnête", "Pas besoin d'expliquer votre passé"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'écrire un SMS court et poli pour prévenir un recruteur que votre bus est en retard. Changez une chose pour qu'il vous ressemble.",
          youCanNow: "écrire des messages du quotidien clairs et polis avec l'aide de l'IA."
        },
        {
          title: "Listes pour les rendez-vous et les documents",
          minutes: 5,
          goal: "Demander à l'IA une liste de ce qu'il faut apporter, puis la confirmer auprès du bureau.",
          text: [
            "Arriver sans les bons papiers peut obliger à revenir une deuxième fois. Demandez une liste à l'IA : \"Je vais au DMV (le service des permis de conduire) de mon État pour obtenir une carte d'identité de l'État. Quels documents faut-il en général apporter ? Fais une courte liste.\"",
            "Puis confirmez auprès du bureau lui-même. Les règles varient selon les États et changent avec le temps, donc le site officiel (qui finit souvent par .gov) ou un appel téléphonique a le dernier mot. Votre programme de réinsertion ou votre conseiller peut aussi vous aider à obtenir des documents comme un acte de naissance.",
            "Gardez la liste dans les notes de votre téléphone ou sur papier. Ne tapez jamais vos vrais numéros de pièce d'identité, de dossier ou de sécurité sociale dans l'IA ; la liste n'a besoin que du nom des documents."
          ],
          steps: ["Demandez à l'IA ce qui est demandé en général.", "Demandez une courte liste.", "Confirmez sur le site officiel du bureau ou par téléphone.", "Rassemblez les papiers et cochez-les.", "Ne tapez jamais vos vrais numéros dans l'IA."],
          words: [["Liste de contrôle", "une liste de choses que l'on coche une par une."], ["Carte d'identité de l'État (state ID)", "une carte d'identité officielle avec photo délivrée par votre État, pour les personnes qui ne conduisent pas."]],
          slides: [
            { title: "Évitez de revenir une deuxième fois", bullets: ["Demandez une liste à l'IA", "\"Que faut-il apporter en général pour une carte d'identité de l'État ?\""] },
            { title: "Confirmez auprès du bureau", bullets: ["Les règles varient selon les États", "Site officiel, souvent en .gov, ou appel", "Demandez de l'aide à votre conseiller"] },
            { title: "Gardez vos numéros privés", bullets: ["La liste n'a besoin que du nom des documents", "Ne tapez jamais de numéro d'identité ou de dossier dans l'IA"] }
          ],
          tryIt: "Tâche finale : choisissez un vrai rendez-vous. Trouvez l'itinéraire en transports ou à pied, créez un rappel pour l'heure de départ, demandez à l'IA une liste de ce qu'il faut apporter (puis confirmez-la sur le site officiel), et faites-vous aider par l'IA pour écrire un court SMS à envoyer si vous êtes en retard.",
          youCanNow: "utiliser les outils d'IA du quotidien pour préparer un rendez-vous et y arriver à l'heure."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire avancer les choses",
        questions: [
          { q: "Quel numéro vous met en contact avec de l'aide locale pour le logement, la nourriture et plus encore ?", options: ["611", "411", "311 partout", "211"], answer: 3, why: "Le 211 met les gens en contact avec les services locaux." },
          { q: "L'IA vous donne le numéro d'un programme. Que faites-vous ?", options: ["Le confirmer auprès du 211 ou du site officiel", "Le croire complètement", "Le publier en ligne", "Lui donner votre numéro de dossier"], answer: 0, why: "L'IA peut citer des programmes fermés ou de mauvais numéros." },
          { q: "Quel prompt donnera un bon SMS de retard ?", options: ["\"retard\"", "\"SMS\"", "\"Écris un SMS court et poli à une responsable du recrutement. Mon bus a 10 minutes de retard pour mon entretien de 9 h.\"", "\"bus\""], answer: 2, why: "Il dit à qui, quoi et le ton voulu." },
          { q: "Devez-vous expliquer votre passé dans un message de tous les jours ?", options: ["Seulement par e-mail", "Oui, toujours", "Seulement aux propriétaires", "Non ; restez court et honnête"], answer: 3, why: "Les messages du quotidien n'ont besoin que de l'essentiel." },
          { q: "Qui a le dernier mot sur les documents à apporter ?", options: ["Un ami", "L'IA", "Le bureau lui-même", "Une publication sur les réseaux sociaux"], answer: 2, why: "Les règles varient selon les États ; c'est le bureau qui décide." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les outils d'IA du quotidien",
    questions: [
      { q: "Siri et Google Assistant sont :", options: ["Des sites d'emploi", "Des assistants vocaux sur les téléphones", "Des compagnies de bus", "Des banques"], answer: 1, why: "Ils font des tâches simples quand vous parlez." },
      { q: "Quelle demande vocale crée un rappel utile ?", options: ["\"Rappelle-moi mon entretien mardi à 9 h.\"", "\"Entretien.\"", "\"Mardi.\"", "\"Salut.\""], answer: 0, why: "Elle dit quoi, le jour et l'heure." },
      { q: "Pour les rendez-vous importants, créez :", options: ["Deux rappels : la veille et au moment de partir", "Aucun", "Un un mois plus tard", "Dix alarmes au hasard"], answer: 0, why: "Deux rappels couvrent la préparation et le départ." },
      { q: "Les titres de rappel doivent être :", options: ["Pleins de numéros d'identité", "Généraux, sans détails privés", "Votre numéro de dossier", "Votre mot de passe"], answer: 1, why: "Vous n'avez pas besoin de détails privés dans les rappels." },
      { q: "Dans une application de cartes, après avoir tapé l'adresse, vous touchez :", options: ["Appareil photo", "Supprimer", "Itinéraire", "Partager le mot de passe"], answer: 2, why: "Itinéraire montre comment y aller." },
      { q: "\"Transports en commun\" veut dire :", options: ["L'avion", "Seulement la marche", "Seulement les taxis", "Les bus et les trains"], answer: 3, why: "Ce sont les transports publics." },
      { q: "Indiquer votre heure d'arrivée dans une application de cartes montre :", options: ["Votre numéro d'identité", "Le solde de votre compte", "Quand vous devez partir", "Seulement la météo"], answer: 2, why: "Elle calcule à rebours à partir de votre arrivée." },
      { q: "Enregistrer les adresses où vous allez souvent les rend :", options: ["Accessibles en un geste", "Privées", "Invisibles", "Chères"], answer: 0, why: "Les lieux enregistrés sont rapides à retrouver." },
      { q: "Google Lens peut :", options: ["Appeler votre agent de probation", "Remplacer votre pièce d'identité", "Payer votre loyer", "Lire, copier et traduire un texte imprimé"], answer: 3, why: "Lens lit ce que voit l'appareil photo." },
      { q: "Un bon usage de l'outil texte de l'appareil photo est :", options: ["Scanner votre carte de sécurité sociale dans l'IA", "Copier un numéro de téléphone sur une offre d'emploi", "Scanner des papiers du tribunal dans l'IA", "Photographier votre carte bancaire pour l'IA"], answer: 1, why: "Seulement du texte public ; gardez les documents privés à l'écart." },
      { q: "Les appels au 211 sont :", options: ["Enregistrés pour le public", "Confidentiels, et vous pouvez rester anonyme", "Seulement pour les urgences", "Seulement pour les entreprises"], answer: 1, why: "Les appels au 211 sont confidentiels." },
      { q: "Avant d'appeler le 211, l'IA peut vous aider en :", options: ["Vous garantissant un lit", "Connaissant votre dossier", "Vous inscrivant automatiquement", "Vous suggérant les types d'aide à demander"], answer: 3, why: "Elle vous aide à préparer vos questions." },
      { q: "Un conseiller (case manager) est :", options: ["Une personne qui vous aide à faire des plans et à trouver des services", "Une application de téléphone", "Un chauffeur de bus", "Un site web"], answer: 0, why: "Les conseillers aident à préparer la réinsertion." },
      { q: "Quand l'IA écrit un message pour vous, vous devez :", options: ["Ajouter votre numéro de sécurité sociale", "L'envoyer sans le lire", "Le lire à voix haute et faire qu'il vous ressemble", "Le rendre très long"], answer: 2, why: "Votre message doit vous ressembler." },
      { q: "Un bon message du quotidien est :", options: ["Plein de détails privés", "Long et plein d'excuses", "Impoli", "Court, poli et honnête"], answer: 3, why: "Court et honnête, c'est ce qui marche le mieux." },
      { q: "Un \"brouillon\", c'est :", options: ["Un ticket de bus", "La version finale", "Une première version que vous pouvez changer", "Une pièce d'identité"], answer: 2, why: "On améliore les brouillons avant de les envoyer." },
      { q: "Avant d'aller chercher une carte d'identité de l'État, vous devez :", options: ["Croire seulement l'IA", "Confirmer la liste des documents sur le site officiel ou par téléphone", "N'apporter rien", "Demander à un inconnu"], answer: 1, why: "Les règles varient selon les États." },
      { q: "Les sites officiels du gouvernement américain finissent souvent par :", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: ".gov est utilisé par les services publics." },
      { q: "De quoi a besoin une liste de documents ?", options: ["Du nom des documents, pas de vos numéros", "De vos vrais numéros d'identité", "De votre numéro de dossier", "De votre numéro de sécurité sociale"], answer: 0, why: "Le nom des documents suffit." },
      { q: "Une carte d'identité de l'État (state ID) est :", options: ["Un ticket de bus", "Une carte d'identité officielle avec photo délivrée par votre État", "Une carte de bibliothèque", "Une application de téléphone"], answer: 1, why: "C'est une pièce d'identité officielle avec photo, notamment pour ceux qui ne conduisent pas." }
    ]
  }
};
