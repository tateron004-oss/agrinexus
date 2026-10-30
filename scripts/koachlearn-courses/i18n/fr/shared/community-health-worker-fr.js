"use strict";

// Koach Learn course (French translation of shared/community-health-worker.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "community-health-worker-fr",
  lang: "fr",
  translationOf: "community-health-worker",
  category: "Workforce Development",
  name: "Les bases du métier d'agent de santé communautaire",
  skills: "Expliquer le rôle d'agent de santé communautaire et le parcours dans votre État, Écouter et parler simplement, Poser des questions sur les besoins avec respect, Trouver et vérifier des ressources locales, Orienter une personne et faire le suivi, Respecter la confidentialité et les limites",
  outcome: "réaliser un guide de ressources vérifiées pour votre communauté et l'utiliser pour préparer une orientation respectueuse pour un voisin imaginaire, comme le fait un agent de santé communautaire.",
  about: [
    "Les agents de santé communautaires (en anglais, community health workers ou CHW) sont des personnes de confiance d'une communauté qui aident leurs voisins à obtenir des soins et d'autres aides, comme la nourriture, le logement, le transport et une couverture santé. On les appelle aussi promotor ou promotora, agent de proximité, pair aidant ou accompagnateur de patients.",
    "Beaucoup de CHW sont embauchés parce qu'ils partagent la langue, la culture ou l'expérience de vie des personnes qu'ils servent, notamment des personnes sorties de prison, des anciens militaires et des immigrés. Votre expérience de vie compte.",
    "Ce cours vous prépare à la formation de CHW et à un premier emploi. Il ne vous certifie pas. Aux États-Unis, certains États certifient les CHW et d'autres non : vous apprendrez où vérifier les règles de votre État. Vous vous entraînerez à écouter, à poser des questions sur les besoins, à trouver et vérifier de l'aide locale, à orienter une personne, et à respecter la confidentialité et les limites.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" et un contrôle rapide de deux questions. À la fin, vous réalisez un guide de ressources pour votre propre communauté et un plan d'orientation pour un voisin imaginaire."
  ],
  finalTask: "Réalisez un guide de ressources d'une page pour votre communauté, avec au moins cinq ressources locales (nourriture, logement, soins, couverture santé et une autre), chacune vérifiée sur sa propre page officielle, avec l'adresse, le téléphone et la façon de faire une demande. Puis écrivez un plan d'orientation pour un voisin imaginaire (pour vous entraîner seulement) : son besoin dans ses propres mots, la ressource choisie et pourquoi, ce que vous allez dire, comment vous allez l'aider à prendre contact, et quand vous ferez le suivi.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui veulent aider leur propre communauté et être payés pour cela : personnes en recherche d'emploi, personnes qui rentrent chez elles après la prison, anciens militaires, immigrés, bénévoles d'églises et d'associations, et jeunes adultes. Beaucoup aident déjà leurs voisins de façon informelle.",
    startingPoint: "Un bon contact avec les gens et une bonne connaissance du quartier. La plupart n'ont aucune formation officielle en santé, ne connaissent ni l'intitulé du poste de CHW ni les règles de certification, et n'ont jamais vérifié des ressources sur des pages officielles.",
    gap: "Les centres de santé, les assurances santé, les services de santé publique et les associations embauchent des CHW pour relier les gens aux soins et aux services. Les apprenants doivent connaître le rôle, savoir écouter et poser des questions sur les besoins avec respect, trouver et vérifier des ressources, orienter et faire le suivi, et respecter la confidentialité et les limites.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 11 à 13 ans)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; toutes les tâches peuvent se faire sur papier",
      "La certification des CHW change d'un État à l'autre ; le cours renvoie à la page de l'État et n'indique ni heures ni frais",
      "Aucun conseil médical ni sur les médicaments ; les questions de santé vont aux soignants",
      "Les exercices utilisent des personnes imaginaires ; aucun vrai nom ni détail privé"
    ],
    prerequisites: "Aucun. Le cours \"Littératie en santé : comprendre vos soins\" est un bon complément."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À l'aide de sources nationales sur les CHW et de la page officielle de votre État", action: "décrire ce que fait un agent de santé communautaire et les étapes pour commencer dans votre État", standard: "en citant au moins 3 rôles du CHW et en disant si votre État certifie les CHW" },
    { id: "O2", condition: "Lors d'une conversation d'entraînement avec un voisin imaginaire", action: "utiliser l'écoute active, un langage simple et la méthode \"faire redire\"", standard: "en reformulant ce qu'il a dit et en vérifiant qu'il a compris, sans jargon" },
    { id: "O3", condition: "À l'aide d'une courte liste de besoins sociaux", action: "interroger un voisin imaginaire sur ses besoins avec son accord et avec respect", standard: "en demandant d'abord la permission et en abordant la nourriture, le logement, le transport, les factures d'énergie et d'eau, et la sécurité" },
    { id: "O4", condition: "Face à un besoin comme la nourriture ou un centre de santé", action: "trouver une ressource locale et la vérifier sur sa page officielle", standard: "avec l'adresse, le téléphone, les horaires et la façon de faire une demande, confirmés sur la page officielle" },
    { id: "O5", condition: "Face à une situation d'orientation", action: "préparer une orientation et un suivi en respectant la confidentialité et les limites", standard: "avec une date de suivi, l'accord pour partager et la bonne démarche en cas de crise" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le rôle du CHW et le contact avec les gens",
      lessons: [
        {
          title: "Ce que font les agents de santé communautaires et comment commencer",
          objectives: ["O1"],
          minutes: 5,
          goal: "Décrire le rôle du CHW et trouver les règles de votre État pour les CHW.",
          text: [
            "L'Association américaine de santé publique (APHA) définit l'agent de santé communautaire comme un agent de santé publique de première ligne en qui la communauté a confiance, ou qui la connaît bien. Les CHW relient les gens aux services de santé et aux services sociaux, et aident à adapter les soins à la culture de chacun.",
            "Le Bureau des statistiques du travail des États-Unis (BLS) indique que les CHW font un travail de proximité, comme des visites à domicile, aident à coordonner les soins, relient les gens à des aides pour le transport, le logement et la nourriture, et peuvent faire des dépistages de santé simples. Le National C3 Council (un groupe national qui définit le métier de CHW) cite dix rôles du CHW, dont le travail de proximité, l'éducation à la santé, la coordination des soins et l'orientation dans le système, la défense des droits, et l'accompagnement et le soutien social.",
            "En général, le minimum est un diplôme de fin d'études secondaires (high school), avec une formation sur le terrain. Certains États exigent une certification, qui peut inclure un programme de formation agréé. Consultez le département de la santé, l'ordre des infirmiers ou le département des services sociaux de votre État.",
            "Ce cours vous prépare. Il ne vous certifie pas. Parmi les employeurs, on trouve des centres de santé communautaires, des hôpitaux, des services de santé publique, des assurances santé et des associations."
          ],
          steps: ["Cherchez le nom de votre État suivi de \"community health worker certification\".", "Ouvrez le résultat qui vient du site du gouvernement de votre État.", "Notez si votre État certifie les CHW et ce qu'il exige.", "Regardez deux offres d'emploi de CHW près de chez vous et faites la liste des tâches."],
          words: [["Agent de santé communautaire (CHW)", "un membre de confiance de la communauté qui aide les gens à obtenir des soins et d'autres services."], ["Promotor ou promotora", "un nom courant en espagnol pour un agent de santé communautaire."], ["Travail de proximité", "aller là où sont les gens, comme les maisons, les événements ou les églises, pour partager des informations et proposer de l'aide."], ["Certification", "un document officiel qui montre que vous avez rempli les règles de formation et d'examen d'un État ou d'un organisme."]],
          slides: [
            { title: "Un CHW, c'est...", bullets: ["Un membre de confiance de la communauté", "Un lien vers les soins et les services", "Aussi appelé promotor, agent de proximité, accompagnateur"] },
            { title: "Ce que font les CHW", bullets: ["Travail de proximité et visites à domicile", "Éducation à la santé avec des mots simples", "Lien vers nourriture, logement, transport et soins", "Défense des droits et soutien"] },
            { title: "Pour commencer", bullets: ["En général, un diplôme du secondaire et une formation sur le terrain", "Certains États certifient les CHW", "Consultez la page du département de la santé de votre État"] },
            { title: "Ce cours vous prépare", bullets: ["Il ne vous certifie pas", "Employeurs : centres de santé, hôpitaux, assurances santé, associations"] }
          ],
          sources: [
            { name: "APHA : Section des agents de santé communautaires", url: "https://www.apha.org/apha-communities/member-sections/community-health-workers" },
            { name: "Bureau des statistiques du travail des États-Unis : Agents de santé communautaires", url: "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm" },
            { name: "National C3 Council : Rôles et compétences du CHW", url: "https://www.c3council.org/roles-competencies" }
          ],
          tryIt: "Vérifiez si votre État certifie les agents de santé communautaires, à l'aide de la page officielle de votre État. Puis trouvez une offre d'emploi de CHW près de chez vous. Sur papier, écrivez la règle de votre État, trois tâches tirées de l'offre et une façon dont votre propre expérience de vie correspond au poste.",
          youCanNow: "décrire ce que fait un agent de santé communautaire et trouver les règles de votre État sur une page officielle.",
          quickCheck: [
            { objective: "O1", q: "Laquelle de ces tâches est une partie essentielle du travail d'un CHW ?", options: ["Rédiger des ordonnances", "Faire des opérations chirurgicales", "Diagnostiquer des maladies", "Relier les gens aux soins et aux services"], answer: 3, why: "Les CHW relient les gens aux soins et aux services ; ce sont les soignants qui diagnostiquent et prescrivent." },
            { objective: "O1", q: "Tous les États exigent-ils une certification de CHW ?", options: ["Oui, partout la même", "Non ; certains oui, donc consultez la page de votre État", "Seulement pour les médecins", "Seulement en été"], answer: 1, why: "Le BLS indique que certains États exigent une certification ; les règles changent d'un État à l'autre." }
          ]
        },
        {
          title: "Écouter et parler simplement",
          objectives: ["O2"],
          minutes: 5,
          goal: "Utiliser l'écoute active, des mots simples et la méthode \"faire redire\" dans une conversation d'entraînement.",
          text: [
            "Les gens en disent plus quand ils se sentent écoutés. L'écoute active, c'est donner toute votre attention, laisser la personne finir et redire ce que vous avez entendu : \"Donc, aller au centre de santé est difficile parce que le bus ne passe pas tôt. C'est bien ça ?\"",
            "Utilisez un langage simple. Dites \"le sucre dans le sang\" plutôt que \"la glycémie\", et \"un papier qui montre où vous habitez\" plutôt que \"un justificatif de domicile\". Faites des phrases courtes, une idée à la fois. Proposez un interprète quand quelqu'un préfère une autre langue.",
            "La méthode \"faire redire\" (en anglais, teach-back) vérifie que vous avez bien expliqué. Demandez à la personne de redire le plan avec ses propres mots : \"Pour être sûr d'avoir bien expliqué, pouvez-vous me dire ce que vous allez apporter à la banque alimentaire ?\" Si elle n'y arrive pas, c'est votre explication qu'il faut améliorer, pas sa mémoire.",
            "Respecter, c'est ne pas juger. Demandez ce qui compte pour la personne et ce qu'elle a déjà essayé. C'est elle l'experte de sa propre vie."
          ],
          steps: ["Donnez toute votre attention et laissez la personne finir.", "Redites ce que vous avez entendu et demandez si vous avez bien compris.", "Expliquez l'étape suivante avec des mots simples, une idée à la fois.", "Utilisez la méthode \"faire redire\" : demandez-lui de redire le plan avec ses propres mots."],
          words: [["Écoute active", "écouter avec toute son attention et redire ce que l'on a entendu."], ["Langage simple", "des mots et des phrases courts et courants, faciles à comprendre."], ["Faire redire (teach-back)", "demander à une personne d'expliquer le plan avec ses propres mots pour vérifier que vous avez bien expliqué."], ["Jargon", "des mots spéciaux utilisés par un groupe, que d'autres personnes ne comprennent pas forcément."]],
          slides: [
            { title: "L'écoute active", bullets: ["Toute votre attention, laissez-la finir", "Redites ce que vous avez entendu", "\"C'est bien ça ?\""] },
            { title: "Un langage simple", bullets: ["\"Le sucre dans le sang\", pas \"la glycémie\"", "Phrases courtes, une idée à la fois", "Proposez un interprète"] },
            { title: "Faire redire", bullets: ["Demandez-lui de redire le plan à sa façon", "Si ce n'est pas clair, améliorez votre explication", "Cela vous évalue vous, pas la personne"] }
          ],
          tryIt: "Faites un jeu de rôle avec un ami ou un membre de votre famille, ou écrivez-le sur papier. Votre voisin imaginaire dit : \"Je rate sans arrêt mes rendez-vous au centre de santé parce que je commence le travail tôt et que le bus est en retard.\" Écrivez une phrase pour reformuler ce qu'il a dit, une étape suivante en langage simple et une question pour lui faire redire le plan.",
          youCanNow: "écouter activement, expliquer avec des mots simples et vérifier la compréhension avec la méthode \"faire redire\".",
          quickCheck: [
            { objective: "O2", q: "Laquelle est une question pour \"faire redire\" ?", options: ["\"Vous comprenez ?\"", "\"Des questions ? Non ? Très bien.\"", "\"Pouvez-vous me dire avec vos propres mots ce que vous allez apporter ?\"", "\"C'est bon, vous avez compris ?\""], answer: 2, why: "Faire redire, c'est demander à la personne de redire le plan avec ses propres mots." },
            { objective: "O2", q: "Lequel est un langage simple ?", options: ["\"Le sucre dans le sang\"", "\"L'index glycémique\"", "\"L'hyperglycémie\"", "\"La tolérance au glucose\""], answer: 0, why: "Les mots courants et courts sont les plus faciles à comprendre." }
          ]
        },
        {
          title: "Poser des questions sur les besoins avec respect",
          objectives: ["O3"],
          minutes: 5,
          goal: "Interroger un voisin imaginaire sur ses besoins, avec son accord, à l'aide d'une courte liste.",
          text: [
            "La santé dépend de bien plus que des visites chez le médecin. La nourriture, un endroit sûr où vivre, l'argent pour l'électricité, l'eau et le gaz, le transport et la sécurité influencent tous la santé. On les appelle souvent les besoins sociaux.",
            "Beaucoup de centres de santé et de programmes utilisent un court questionnaire de repérage. Votre employeur vous donnera le sien. Les sujets habituels sont : la nourriture, le logement, les factures d'énergie et d'eau, le transport et la sécurité personnelle.",
            "Demandez toujours la permission d'abord et expliquez pourquoi vous posez ces questions : \"Je pose à tout le monde quelques questions sur des choses comme la nourriture et le logement, pour pouvoir proposer une aide qui pourrait vous convenir. Vous pouvez passer n'importe quelle question.\" Laissez la personne choisir ce qu'elle partage.",
            "Notez seulement ce qui est nécessaire, sur le formulaire du programme, pas sur votre propre téléphone. Si quelqu'un dit qu'il n'est pas en sécurité chez lui, ou parle de se faire du mal, suivez tout de suite les étapes de sécurité de votre programme (voir la leçon 6)."
          ],
          steps: ["Demandez la permission et dites pourquoi vous posez ces questions.", "Dites qu'elle peut passer n'importe quelle question.", "Posez des questions sur la nourriture, le logement, les factures d'énergie et d'eau, le transport et la sécurité.", "Demandez quel besoin compte le plus pour elle en ce moment.", "Notez seulement ce qui est nécessaire, sur le formulaire du programme."],
          words: [["Besoins sociaux", "des besoins de tous les jours, comme la nourriture, le logement et le transport, qui influencent la santé."], ["Repérage", "une courte série de questions pour savoir de quelle aide une personne peut avoir besoin."], ["Consentement", "la permission qu'une personne donne après avoir compris ce que vous lui demandez."]],
          slides: [
            { title: "La santé, c'est plus que le centre de santé", bullets: ["Nourriture et logement", "Factures d'énergie et d'eau, transport", "Sécurité"] },
            { title: "Demandez d'abord la permission", bullets: ["Dites pourquoi vous posez ces questions", "Elle peut passer n'importe quelle question", "Elle choisit ce qu'elle partage"] },
            { title: "Commencez par ce qui compte le plus", bullets: ["\"Laquelle de ces choses compte le plus pour vous en ce moment ?\"", "Notez seulement ce qui est nécessaire", "Utilisez le formulaire du programme, pas votre téléphone"] }
          ],
          tryIt: "Écrivez un court script de repérage (pour vous entraîner seulement) : votre phrase pour demander la permission, une question simple sur chaque sujet (nourriture, logement, factures d'énergie et d'eau, transport et sécurité), et une question finale sur ce qui compte le plus. Lisez-le à voix haute pour vérifier qu'il sonne gentil et clair.",
          youCanNow: "poser des questions sur les besoins d'une personne avec son accord et avec respect, à l'aide d'une courte liste.",
          quickCheck: [
            { objective: "O3", q: "Que faites-vous avant de poser des questions sur les besoins d'une personne ?", options: ["Commencer par la question la plus difficile", "Demander la permission et dire pourquoi vous posez ces questions", "Lui demander son numéro de sécurité sociale", "Noter ses réponses sur votre propre téléphone"], answer: 1, why: "La permission et une raison claire créent la confiance avant le repérage." },
            { objective: "O3", q: "Lequel est un besoin social ?", options: ["Son émission de télévision préférée", "La marque de ses chaussures", "Aller au centre de santé quand le bus ne passe pas", "Sa couleur préférée"], answer: 2, why: "Le transport est un besoin social qui influence la santé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le rôle du CHW et le contact avec les gens",
        questions: [
          { objective: "O1", q: "Quel est un autre nom pour un agent de santé communautaire ?", options: ["Promotor ou promotora", "Chirurgien", "Pharmacien", "Juge"], answer: 0, why: "Promotor ou promotora est un nom courant pour les CHW, surtout dans les communautés hispanophones." },
          { objective: "O1", q: "Où vérifiez-vous si votre État certifie les CHW ?", options: ["Dans un groupe sur les réseaux sociaux", "Dans ce que devine un ami", "Sur la page du département de la santé ou de l'ordre professionnel de votre État", "Dans une publicité en ligne"], answer: 2, why: "La page officielle de chaque État explique ses règles." },
          { objective: "O2", q: "Qu'est-ce que l'écoute active ?", options: ["Parler plus que l'autre personne", "Préparer votre réponse pendant qu'elle parle", "Donner toute votre attention et redire ce que vous avez entendu", "Regarder votre téléphone en écoutant"], answer: 2, why: "L'écoute active, c'est toute votre attention et la reformulation de ce que vous avez entendu." },
          { objective: "O2", q: "Un voisin n'arrive pas à vous redire le plan. Qu'est-ce que cela veut dire ?", options: ["Qu'il ne fait pas d'effort", "Que votre explication doit être plus claire", "Qu'il ne devrait pas recevoir d'aide", "Rien ; passez à la suite"], answer: 1, why: "Faire redire vérifie votre explication ; expliquez à nouveau avec des mots plus simples." },
          { objective: "O3", q: "Une personne ne veut pas répondre à une question sur le logement. Vous :", options: ["Insistez pour qu'elle réponde", "Notez une supposition", "Lui dites qu'elle ne peut pas recevoir d'aide", "Respectez son choix et passez à la suite"], answer: 3, why: "On peut passer n'importe quelle question ; le consentement est libre." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Relier les gens à l'aide",
      lessons: [
        {
          title: "Trouver et vérifier des ressources locales",
          objectives: ["O4"],
          minutes: 6,
          goal: "Trouver une ressource locale pour un besoin et la vérifier sur sa page officielle.",
          text: [
            "Une liste de ressources de CHW ne vaut que par sa dernière vérification. Les programmes déménagent, changent d'horaires et manquent d'argent. Vérifiez toujours une ressource sur sa propre page officielle ou par téléphone avant d'y orienter quelqu'un.",
            "Bons points de départ : appelez le 211, un service gratuit et confidentiel qui relie les gens à l'aide locale. La page des aides de USA.gov (le portail du gouvernement fédéral) aide à trouver des programmes publics pour la nourriture, le logement, les soins et les factures. Find a Health Center, de la HRSA (l'agence fédérale des ressources et services de santé), montre les centres de santé communautaires. HealthCare.gov explique la couverture santé et comment faire une demande.",
            "Pour chaque ressource, notez : le nom, ce qu'elle propose, qui peut l'utiliser, l'adresse, le téléphone, les horaires, comment faire une demande, quoi apporter, les langues parlées et la date de votre vérification.",
            "Si un site web n'est pas le site officiel, trouvez la page officielle avant de lui faire confiance. Beaucoup de faux sites font payer des formulaires qui sont gratuits."
          ],
          steps: ["Nommez le besoin, par exemple la nourriture ou un centre de santé.", "Cherchez sur le 211, USA.gov, Find a Health Center de la HRSA ou le site de l'organisme lui-même.", "Ouvrez la page officielle et vérifiez l'adresse, le téléphone, les horaires et comment faire une demande.", "Notez-le avec la date de votre vérification."],
          words: [["Ressource", "un programme ou un service qui aide pour un besoin, comme une banque alimentaire ou un centre de santé."], ["211", "un service téléphonique gratuit et confidentiel qui relie les gens à l'aide locale."], ["Centre de santé communautaire", "un centre de soins qui reçoit les gens, qu'ils aient une assurance ou non."], ["Conditions d'accès", "les règles qui disent qui peut utiliser un programme."]],
          slides: [
            { title: "Vérifiez avant d'orienter", bullets: ["Les programmes déménagent et changent d'horaires", "Consultez la page officielle ou appelez", "Notez la date de votre vérification"] },
            { title: "Par où commencer", bullets: ["Appelez le 211", "Page des aides de USA.gov", "Find a Health Center de la HRSA", "HealthCare.gov pour la couverture santé"] },
            { title: "À noter", bullets: ["Nom, ce qu'elle propose, qui peut l'utiliser", "Adresse, téléphone, horaires", "Comment faire une demande, quoi apporter, langues"] },
            { title: "Attention aux faux sites", bullets: ["Trouvez d'abord la page officielle", "Beaucoup de formulaires sont gratuits ; ne payez pas des inconnus"] }
          ],
          sources: [
            { name: "211 : Trouver votre 211 local", url: "https://www.211.org/" },
            { name: "USA.gov : Aides publiques", url: "https://www.usa.gov/benefits" },
            { name: "HRSA : Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" },
            { name: "HealthCare.gov", url: "https://www.healthcare.gov/" }
          ],
          tryIt: "Choisissez deux besoins : la nourriture et un centre de santé à bas prix. Trouvez une vraie ressource pour chacun près de chez vous, vérifiez-la sur sa page officielle, et notez le nom, l'adresse, le téléphone, les horaires, comment faire une demande et la date du jour.",
          youCanNow: "trouver une ressource locale et la vérifier sur sa page officielle avant de la partager.",
          quickCheck: [
            { objective: "O4", q: "Avant d'orienter quelqu'un vers une banque alimentaire, que faites-vous ?", options: ["Je vérifie ses horaires et son adresse sur sa page officielle ou par téléphone", "Je fais confiance à une liste vieille de trois ans", "Je devine les horaires", "Je l'envoie sans vérifier"], answer: 0, why: "Les ressources changent : consultez d'abord la page officielle ou appelez." },
            { objective: "O4", q: "Quel service relie les gens à l'aide locale par téléphone ?", options: ["Le 411", "Le 211", "Le 311, dans une seule ville", "Un numéro quelconque vu dans une publicité"], answer: 1, why: "Le 211 est un service gratuit et confidentiel qui relie les gens à l'aide locale." }
          ]
        },
        {
          title: "Orienter une personne et faire le suivi",
          objectives: ["O5", "O4"],
          minutes: 5,
          goal: "Préparer une orientation accompagnée, avec l'accord de la personne et une date de suivi.",
          text: [
            "Orienter, c'est mettre une personne en contact avec un service. Une orientation \"accompagnée\" (en anglais, warm referral) veut dire que vous aidez à établir le contact, par exemple en appelant le centre de santé ensemble, au lieu de seulement donner un numéro de téléphone.",
            "Demandez avant de partager quoi que ce soit sur la personne : \"Est-ce que je peux dire au centre de santé que vous avez besoin d'un rendez-vous le soir ?\" Partagez seulement ce qui est nécessaire et suivez le formulaire de consentement de votre programme.",
            "Aidez à lever les obstacles. La personne a-t-elle un moyen de transport, quelqu'un pour garder les enfants, les papiers nécessaires, un téléphone qui marche ? Notez ce qu'elle va apporter et quand elle va y aller.",
            "Faites le suivi. Fixez une date pour reprendre contact : \"Je vous appelle vendredi pour savoir comment ça s'est passé.\" Si le service n'a pas marché, trouvez-en un autre. Notez le résultat dans le dossier du programme."
          ],
          steps: ["Mettez-vous d'accord avec la personne sur le besoin et le service.", "Obtenez son accord avant de partager une information.", "Établissez un contact accompagné, par exemple un appel ensemble.", "Prévoyez les obstacles : transport, garde des enfants, papiers.", "Fixez une date de suivi, tenez-la et notez le résultat."],
          words: [["Orientation", "mettre une personne en contact avec un service qui peut l'aider."], ["Orientation accompagnée", "aider la personne à prendre contact directement, par exemple en appelant ensemble, pas seulement donner un numéro."], ["Obstacle", "quelque chose qui rend l'aide difficile à obtenir, comme ne pas avoir de transport ou de garde d'enfants."], ["Suivi", "reprendre contact plus tard pour voir si l'aide a marché."]],
          slides: [
            { title: "Orientation accompagnée", bullets: ["Aidez à établir le contact", "Appelez ensemble quand c'est possible", "Pas seulement un numéro de téléphone"] },
            { title: "D'abord l'accord", bullets: ["Demandez avant de partager quoi que ce soit", "Partagez seulement le nécessaire", "Utilisez le formulaire de consentement du programme"] },
            { title: "Levez les obstacles", bullets: ["Transport et garde des enfants", "Papiers à apporter", "Un téléphone qui marche"] },
            { title: "Faites le suivi", bullets: ["Fixez une date", "Ça a marché ? Sinon, essayez autre chose", "Notez le résultat"] }
          ],
          tryIt: "Pour vous entraîner seulement : votre voisine imaginaire, Mme Carter, a besoin de nourriture pour ses deux enfants et n'a pas de voiture. À l'aide d'une ressource alimentaire vérifiée à la leçon 4, écrivez un plan d'orientation accompagnée : ce que vous allez dire, la question pour obtenir son accord, un obstacle et comment vous allez l'aider à le lever, et une date de suivi.",
          youCanNow: "préparer une orientation accompagnée avec l'accord de la personne, aider à lever les obstacles et fixer une date de suivi.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui rend une orientation \"accompagnée\" ?", options: ["Donner seulement un numéro de téléphone", "Lui dire de chercher en ligne", "L'aider à prendre contact, par exemple en appelant ensemble", "Lui envoyer un dépliant"], answer: 2, why: "Une orientation accompagnée aide la personne à prendre contact directement." },
            { objective: "O5", q: "Vous voulez parler à un centre de santé de la situation d'un voisin. D'abord, vous :", options: ["Partagez tout ce que vous savez", "Demandez l'accord du voisin", "Le publiez dans une discussion de groupe", "En parlez à la famille du voisin"], answer: 1, why: "L'accord vient avant tout partage d'information." }
          ]
        },
        {
          title: "Confidentialité, limites, conduite en cas de crise et votre guide de ressources",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Respecter la confidentialité et les limites, suivre la conduite à tenir en cas de crise et réaliser votre guide de ressources.",
          text: [
            "Les gens vous confient des choses privées. Quand vous travaillez pour un centre de santé, un hôpital ou une assurance santé, les informations de santé sont protégées par une loi fédérale appelée HIPAA, et tout bon programme garde les informations des gens confidentielles. Ne parlez pas des personnes que vous servez avec vos amis, ne publiez rien sur elles et ne gardez pas de notes sur votre propre téléphone.",
            "Les limites gardent le travail sain. Vous êtes un guide, pas un médecin, un avocat ni une banque. Ne donnez pas de conseils médicaux ou juridiques, ne prêtez pas d'argent et ne promettez pas ce que vous ne pouvez pas tenir. Les questions de santé vont aux soignants.",
            "Connaissez la conduite à tenir en cas de crise. Si quelqu'un est en danger maintenant, appelez le 911. Si quelqu'un parle de suicide ou traverse une crise émotionnelle, il peut appeler le 988 ou lui envoyer un SMS (la ligne d'écoute 988 Suicide and Crisis Lifeline), ou discuter en ligne. Prévenez tout de suite votre responsable et suivez le plan de sécurité de votre programme.",
            "Prenez soin de vous aussi. Aider des personnes qui ont une vie difficile est un travail lourd. Parlez avec votre responsable, faites des pauses et appuyez-vous sur votre propre soutien. Vous êtes maintenant prêt à réaliser votre guide de ressources et votre plan d'orientation."
          ],
          steps: ["Gardez les informations confidentielles : pas de conversations, de publications ni de notes sur votre téléphone personnel.", "Restez dans votre rôle : pas de conseils médicaux ou juridiques, pas de prêt d'argent.", "Crise : 911 en cas de danger immédiat ; 988 pour le suicide ou une crise émotionnelle ; prévenez votre responsable.", "Réalisez votre guide avec au moins cinq ressources vérifiées et un plan d'orientation."],
          words: [["HIPAA", "une loi fédérale qui protège la confidentialité des informations de santé détenues par les soignants et les assurances santé."], ["Limite", "une frontière claire sur ce que vous faites dans une relation de travail."], ["988", "la ligne d'écoute pour le suicide et les crises : appel, SMS ou discussion en ligne."], ["Prendre soin de soi", "ce que vous faites pour rester en bonne santé et pouvoir continuer à aider."]],
          slides: [
            { title: "Confidentialité", bullets: ["Ne parlez pas et ne publiez rien sur les personnes que vous servez", "Aucune note sur votre propre téléphone", "HIPAA protège les informations de santé"] },
            { title: "Limites", bullets: ["Vous êtes un guide, pas un médecin ni un avocat", "Pas de prêt d'argent ni de grandes promesses", "Les questions de santé vont aux soignants"] },
            { title: "En cas de crise", bullets: ["Danger immédiat : 911", "Suicide ou crise émotionnelle : appel ou SMS au 988", "Prévenez tout de suite votre responsable"] },
            { title: "Votre guide de ressources", bullets: ["5 ressources vérifiées ou plus", "Adresse, téléphone, horaires, comment faire une demande, date de vérification", "Plus un plan d'orientation pour un voisin imaginaire"] }
          ],
          sources: [
            { name: "988 : Ligne d'écoute pour le suicide et les crises", url: "https://988lifeline.org/" },
            { name: "MedlinePlus : Droits des patients", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Tâche finale : réalisez votre guide de ressources communautaires d'une page avec au moins cinq ressources (nourriture, logement, soins, couverture santé et une autre), chacune vérifiée sur sa page officielle, avec l'adresse, le téléphone, les horaires, comment faire une demande et la date de vérification. Puis écrivez un plan d'orientation pour un voisin imaginaire : son besoin dans ses mots, la ressource, ce que vous allez dire, la question pour obtenir son accord, un obstacle et une date de suivi.",
          youCanNow: "réaliser un guide de ressources vérifiées et préparer une orientation qui respecte la confidentialité, les limites et la sécurité.",
          quickCheck: [
            { objective: "O5", q: "Une personne que vous servez dit qu'elle pense à mettre fin à ses jours. Que faites-vous ?", options: ["Vous promettez de garder le secret", "Vous changez de sujet", "Vous lui dites d'attendre demain pour y réfléchir", "Vous la mettez en contact avec le 988 (ou le 911 en cas de danger immédiat) et prévenez votre responsable"], answer: 3, why: "Suivez la conduite à tenir en cas de crise : 988 ou 911, et prévenez tout de suite votre responsable." },
            { objective: "O5", q: "Une personne vous demande de lui prêter 100 $. Que faites-vous ?", options: ["Vous refusez gentiment et l'aidez à trouver une ressource pour ce besoin", "Vous les prêtez en secret", "Vous lui donnez votre carte", "Vous l'ignorez"], answer: 0, why: "Prêter de l'argent dépasse une limite ; aidez-la plutôt à trouver une ressource." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Relier les gens à l'aide",
        questions: [
          { objective: "O4", q: "Quelle est la meilleure façon de vérifier les horaires d'un centre de santé ?", options: ["Un dépliant vieux de trois ans", "Deviner", "La page officielle du centre ou un appel", "Un commentaire quelconque en ligne"], answer: 2, why: "La page officielle ou un appel donnent des informations à jour." },
          { objective: "O4", q: "Quel outil trouve les centres de santé communautaires ?", options: ["Find a Health Center de la HRSA", "Une application de films", "Un site d'achats", "Une application météo"], answer: 0, why: "Find a Health Center de la HRSA liste les centres de santé communautaires." },
          { objective: "O5", q: "Quand devez-vous faire le suivi après une orientation ?", options: ["Jamais", "Seulement si la personne vous appelle", "À une date fixée ensemble", "Après un an"], answer: 2, why: "Fixer une date de suivi permet de s'assurer que l'aide a marché." },
          { objective: "O5", q: "Où devez-vous garder vos notes sur les personnes que vous servez ?", options: ["Sur votre téléphone personnel", "Dans une discussion de groupe", "Sur les réseaux sociaux", "Sur le formulaire ou dans le dossier du programme"], answer: 3, why: "Les notes vont dans le dossier du programme pour rester confidentielles." },
          { objective: "O5", q: "Quelqu'un vous demande un conseil médical sur son médicament. Vous :", options: ["Lui dites ce que vous prendriez", "L'aidez à poser la question à son soignant ou à son pharmacien", "Cherchez et lui dites quoi faire", "Lui dites que les médicaments ne comptent pas"], answer: 1, why: "Les CHW restent dans leur rôle ; les questions de santé vont aux soignants." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du métier d'agent de santé communautaire",
    questions: [
      { objective: "O1", q: "La meilleure description d'un agent de santé communautaire est :", options: ["Un membre de confiance de la communauté qui relie les gens aux soins et aux services", "Un médecin", "Un policier", "Un préparateur de déclarations d'impôts"], answer: 0, why: "Les CHW sont des agents de première ligne, de confiance, qui relient les gens aux soins." },
      { objective: "O1", q: "Lequel de ces rôles du CHW est cité par le National C3 Council ?", options: ["Faire des opérations chirurgicales", "Faire du travail de proximité", "Prescrire des médicaments", "Diriger une banque"], answer: 1, why: "Le travail de proximité est l'un des dix rôles du CHW." },
      { objective: "O1", q: "Que fait ce cours ?", options: ["Il vous certifie comme CHW", "Il vous donne une licence de l'État", "Il remplace la formation de votre employeur", "Il vous prépare à la formation de CHW et à un premier emploi"], answer: 3, why: "Le cours vous prépare ; certains États certifient les CHW à part." },
      { objective: "O1", q: "Pourquoi beaucoup de CHW sont-ils embauchés ?", options: ["Ils partagent la langue, la culture ou l'expérience de vie de la communauté", "Ils ont des diplômes de médecine", "Ils ne parlent jamais aux gens", "Ils travaillent seulement en ligne"], answer: 0, why: "Une expérience partagée crée la confiance avec les personnes que les CHW servent." },
      { objective: "O2", q: "Laquelle est une bonne phrase pour reformuler ?", options: ["\"Vous auriez dû mieux vous organiser.\"", "\"Donc, le bus est en retard et ça vous fait rater vos rendez-vous. C'est bien ça ?\"", "\"Ce n'est pas mon problème.\"", "\"Tout le monde a ce problème.\""], answer: 1, why: "Reformuler montre que vous avez écouté et permet à la personne de vous corriger." },
      { objective: "O2", q: "La méthode \"faire redire\" vérifie :", options: ["L'intelligence de la personne", "La vitesse à laquelle elle parle", "Si vous avez bien expliqué", "Sa note à un test de lecture"], answer: 2, why: "Faire redire vérifie votre explication, pas la personne." },
      { objective: "O2", q: "Un voisin préfère parler espagnol et vous ne le parlez pas. Vous :", options: ["Parlez plus fort en anglais", "Annulez la visite", "Demandez à son enfant d'interpréter les détails médicaux", "Proposez un interprète qualifié"], answer: 3, why: "Proposer un interprète permet à la personne de comprendre et d'être comprise." },
      { objective: "O3", q: "Quels sujets un repérage des besoins sociaux couvre-t-il en général ?", options: ["Nourriture, logement, factures d'énergie et d'eau, transport et sécurité", "Plats et musiques préférés", "Sports et loisirs", "Pointures et tailles de vêtements"], answer: 0, why: "Ces besoins sociaux influencent la santé." },
      { objective: "O3", q: "Que devez-vous dire avant un repérage ?", options: ["\"Vous devez répondre à tout.\"", "Rien ; vous commencez directement", "\"Je pose à tout le monde quelques questions pour pouvoir proposer de l'aide. Vous pouvez en passer.\"", "\"Ceci est un test.\""], answer: 2, why: "Expliquer pourquoi et dire qu'on peut passer des questions crée la confiance et respecte le consentement." },
      { objective: "O3", q: "Après les questions de repérage, une bonne question suivante est :", options: ["\"Laquelle de ces choses compte le plus pour vous en ce moment ?\"", "\"Pourquoi vous n'avez pas réglé ça plus tôt ?\"", "\"Quel est le code de votre carte bancaire ?\"", "\"À qui d'autre est-ce que je peux le dire ?\""], answer: 0, why: "Commencer par ce qui compte le plus pour la personne respecte ses choix." },
      { objective: "O4", q: "Le 211 est :", options: ["Un numéro d'urgence seulement pour les incendies", "Un service gratuit et confidentiel qui relie les gens à l'aide locale", "Une ligne payante", "Une application de réseau social"], answer: 1, why: "Le 211 relie les gens à l'aide locale." },
      { objective: "O4", q: "La page des aides de USA.gov aide les gens à :", options: ["Acheter des places de concert", "Payer des amendes de stationnement", "Trouver des programmes publics pour la nourriture, le logement, les soins et les factures", "Réserver des vols"], answer: 2, why: "Elle aide à trouver les aides publiques et comment les demander." },
      { objective: "O4", q: "Que doit contenir la fiche d'une ressource ?", options: ["Seulement le nom", "Des horaires devinés", "Le nom d'un ami qui y est allé", "Adresse, téléphone, horaires, comment faire une demande et date de vérification"], answer: 3, why: "Des informations complètes et vérifiées rendent une ressource utile." },
      { objective: "O4", q: "Un site web fait payer pour \"aider\" à remplir un formulaire du gouvernement. Vous :", options: ["Trouvez d'abord la page officielle ; beaucoup de formulaires sont gratuits", "Payez vite", "Partagez le site avec tout le monde", "Lui donnez les informations de la personne que vous aidez"], answer: 0, why: "Les faux sites font souvent payer des formulaires gratuits ; trouvez la page officielle." },
      { objective: "O5", q: "Une orientation accompagnée veut dire :", options: ["Donner une carte de visite", "Aider la personne à prendre contact directement, par exemple en appelant ensemble", "Lui dire de chercher en ligne", "Lui envoyer un dépliant par la poste"], answer: 1, why: "Une orientation accompagnée aide à établir le contact." },
      { objective: "O5", q: "Avant de partager des informations avec un centre de santé, il vous faut :", options: ["L'accord de la personne", "L'avis de votre ami", "Rien", "Une publication sur les réseaux sociaux"], answer: 0, why: "L'accord passe en premier, et vous partagez seulement le nécessaire." },
      { objective: "O5", q: "Lequel est un obstacle pour obtenir de l'aide ?", options: ["Un téléphone qui marche", "Un moyen de transport pour aller au rendez-vous", "Personne pour garder les enfants pendant le rendez-vous", "Les bons papiers"], answer: 2, why: "Ne pas avoir de garde d'enfants peut empêcher quelqu'un d'aller à un service." },
      { objective: "O5", q: "Quelqu'un traverse une crise émotionnelle et veut parler à quelqu'un tout de suite. Il peut :", options: ["Attendre la visite du mois prochain", "Appeler le 988 ou lui envoyer un SMS", "Publier en ligne", "Appeler le 411"], answer: 1, why: "Le 988 est la ligne d'écoute pour le suicide et les crises : appel, SMS ou discussion en ligne." },
      { objective: "O5", q: "Une orientation n'a pas marché. Vous :", options: ["Abandonnez", "Accusez la personne", "Arrêtez le suivi", "Trouvez une autre ressource et fixez un nouveau suivi"], answer: 3, why: "Faire le suivi, c'est essayer une autre option quand la première n'a pas marché." },
      { objective: "O5", q: "Laquelle est une limite saine pour un CHW ?", options: ["Donner des conseils médicaux", "Prêter de l'argent", "Promettre un logement pour vendredi", "Renvoyer les questions de santé vers le soignant de la personne"], answer: 3, why: "Les CHW restent dans leur rôle et renvoient les questions de santé vers les soignants." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : Que savez-vous déjà ?", from: [0, 2, 4, 5, 7, 8, 10, 12, 14, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et vérifiez-la à nouveau.",
    criteria: [
      { name: "Ressources vérifiées", objective: "O4", notYet: "Moins de cinq ressources, ou informations non vérifiées sur des pages officielles.", meets: "Au moins cinq ressources (nourriture, logement, soins, couverture santé et une autre), chacune avec l'adresse, le téléphone, les horaires, comment faire une demande et la date de vérification.", exceeds: "Indique aussi qui peut utiliser chacune, quoi apporter et les langues parlées." },
      { name: "Le besoin dans ses mots", objective: "O3", notYet: "Le besoin est une supposition ou utilise du jargon.", meets: "Le besoin du voisin imaginaire est écrit dans ses propres mots, avec son accord noté.", exceeds: "Montre quel besoin compte le plus pour lui et pourquoi." },
      { name: "Parler simplement et avec respect", objective: "O2", notYet: "Ce que vous allez dire utilise du jargon ou juge la personne.", meets: "Des mots simples, une phrase pour reformuler et une question pour faire redire.", exceeds: "Propose un interprète ou un autre moyen de communiquer si besoin." },
      { name: "Orientation accompagnée et suivi", objective: "O5", notYet: "Seulement un numéro de téléphone, ou pas de date de suivi.", meets: "Un contact accompagné, un obstacle avec un plan et une date de suivi.", exceeds: "Prévoit une ressource de secours si la première ne marche pas." },
      { name: "Confidentialité et rôle", objective: "O5", notYet: "Utilise les informations d'une vraie personne ou donne des conseils médicaux.", meets: "Personne imaginaire, accord avant tout partage, aucun conseil médical ou juridique.", exceeds: "Indique la conduite à tenir en cas de crise (911, 988, prévenir le responsable) sur le guide." },
      { name: "Le parcours dans votre État", objective: "O1", notYet: "Aucune information sur comment devenir CHW dans votre État.", meets: "Indique si votre État certifie les CHW, avec la page officielle.", exceeds: "Ajoute un employeur ou un programme de formation local à contacter." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui postulent à un emploi ou à une formation de CHW dans les 60 jours",
      "Apprenants qui obtiennent la certification de CHW de leur État, là où elle existe",
      "Apprenants embauchés comme CHW, agents de proximité ou accompagnateurs dans les 6 mois (enquête de suivi)",
      "Organisations partenaires qui signalent des orientations qui arrivent au service et sont suivies"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour vérifier les ressources sur des pages officielles",
      "Du papier et un stylo pour le script de repérage, le guide de ressources et le plan d'orientation",
      "Un partenaire pour le jeu de rôle (facultatif ; l'écrire marche aussi)",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Avant le cours, trouvez la page de certification des CHW de votre État (ou notez que votre État n'en a pas) et partagez-la.",
      "Faites les leçons sur l'écoute et le repérage sous forme de jeux de rôle à deux, avec des personnes imaginaires seulement.",
      "Si possible, invitez un CHW ou une promotora en poste à raconter une journée de travail.",
      "Demandez aux apprenants de réunir leurs ressources vérifiées dans un seul guide de groupe, avec la date de vérification de chacune.",
      "Revoyez la conduite à tenir en cas de crise (911, 988, prévenir le responsable) et le plan de sécurité de votre programme avant les jeux de rôle sur des sujets difficiles."
    ]
  }
};
