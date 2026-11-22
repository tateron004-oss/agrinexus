"use strict";

// Koach Learn course (French translation of re-entry/reentry-ai-continuing-education.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-ai-continuing-education-fr",
  lang: "fr",
  translationOf: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "L'IA et la reprise d'études",
  skills: "Fixer un objectif d'apprentissage lié à un emploi, Trouver des formations gratuites ou peu chères, Utiliser l'IA comme tuteur, Faire un plan d'étude, Vérifier une formation avant de s'inscrire, Se préparer à demander une aide financière",
  outcome: "choisir un objectif d'apprentissage qui mène à un emploi, trouver une vraie formation (un cours d'équivalence du diplôme de fin d'études secondaires, un certificat ou un cours universitaire) et la vérifier avant de vous inscrire, et utiliser un assistant d'IA comme tuteur avec un plan d'étude hebdomadaire.",
  about: [
    "Beaucoup de personnes sortent de prison prêtes à apprendre : obtenir une équivalence du diplôme de fin d'études secondaires, décrocher un certificat dans un métier, commencer un community college (établissement d'enseignement supérieur local) ou apprendre l'informatique. Les études peuvent ouvrir la porte à de meilleurs emplois.",
    "Vous fixerez un objectif qui mène à un emploi, trouverez des formations gratuites ou peu chères, vérifierez une formation avant de vous inscrire, préparerez votre demande d'aide financière, et utiliserez un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini comme un tuteur patient.",
    "Chaque leçon dure environ cinq minutes. L'IA est une aide pour étudier, pas un moyen de faire vos devoirs à votre place ; les écoles ont des règles à ce sujet. Ne tapez jamais de numéros privés ni de détails de votre dossier dans l'IA. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez un objectif d'apprentissage lié à un emploi. Trouvez une vraie formation pour cet objectif et vérifiez-la avec cinq questions (coût, durée, horaires, ce que vous obtenez à la fin, et comment elle vous aide à être embauché). Puis demandez à un assistant d'IA un plan d'étude sur quatre semaines, utilisez-le pour qu'il vous explique et vous interroge sur le premier sujet, et mettez vos deux premières séances d'étude dans votre calendrier.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui veulent continuer à apprendre : obtenir un équivalent du diplôme de fin d'études secondaires, un certificat dans un métier, commencer un community college ou apprendre l'informatique pour avoir un meilleur emploi.",
    startingPoint: "Ils savent utiliser un téléphone simple et quelques applications. Beaucoup n'ont pas été à l'école depuis des années, ne savent pas comment vérifier une formation ou demander une aide financière, et ont peu d'expérience de l'IA pour étudier.",
    gap: "Les études peuvent ouvrir la porte à de meilleurs emplois, mais les personnes qui sortent de prison peuvent perdre du temps et de l'argent dans des formations qui ne mènent pas à un emploi, ou dans des arnaques avec de gros prêts. Les apprenants doivent fixer un objectif lié à un emploi, trouver et vérifier de vraies formations, étudier honnêtement avec l'IA et se préparer à demander une aide financière.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes (fin d'école primaire environ)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque avec internet",
      "Temps : des leçons d'environ 5 minutes, à caser autour du travail et des rendez-vous",
      "Règles des écoles : l'IA aide à étudier, elle ne sert pas à faire les devoirs",
      "Vie privée : ne jamais taper de numéros privés, de données fiscales ou de détails de dossier dans l'IA ; les formulaires d'aide se remplissent seulement sur studentaid.gov"
    ],
    prerequisites: "Le cours « Découvrir l'IA et prendre confiance avec le numérique » est utile, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un emploi que vous voulez", action: "écrire un objectif d'apprentissage lié à cet emploi", standard: "en une phrase, avec les règles de licence vérifiées auprès de l'organisme de l'État si besoin" },
    { id: "O2", condition: "Avec careeronestop.org, les bibliothèques, les écoles pour adultes ou les community colleges", action: "trouver au moins deux vraies formations qui correspondent à votre objectif", standard: "avec des numéros de téléphone pris sur leurs sites officiels" },
    { id: "O3", condition: "Pour une formation", action: "la vérifier avec cinq questions sur le coût, la durée, les horaires, ce que vous obtenez et comment elle vous aide à être embauché", standard: "avec des réponses données par la formation elle-même, et toute pression pour signer un gros prêt vue comme un signal d'alerte" },
    { id: "O4", condition: "À partir d'un sujet lié à votre objectif", action: "demander à un assistant d'IA de l'expliquer, de donner un exemple et de vous interroger", standard: "sans faire faire vos devoirs par l'IA, et en vérifiant les erreurs avec votre enseignant ou votre manuel" },
    { id: "O5", condition: "En tenant compte de votre travail et de vos rendez-vous", action: "faire un plan d'étude sur quatre semaines avec l'aide de l'IA", standard: "avec des séances courtes et régulières, et les deux premières notées dans votre agenda" },
    { id: "O6", condition: "Avec studentaid.gov", action: "lister où demander l'aide fédérale aux études et quoi préparer", standard: "avec trois questions pour un bureau d'aide financière, et des données privées tapées seulement sur studentaid.gov" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir votre voie",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fixer un objectif d'apprentissage qui mène à un emploi",
          minutes: 5,
          goal: "Choisir un objectif d'apprentissage lié à un vrai emploi.",
          text: [
            "Apprendre est plus utile quand cela mène quelque part. Partez de l'emploi que vous voulez, puis remontez jusqu'à ce que vous devez apprendre.",
            "Demandez à l'IA : \"Je veux travailler comme cariste ou comme chef d'équipe dans un entrepôt. Quelles formations ou quels certificats les gens obtiennent-ils en général pour cela ? Lesquels sont courts et peu chers ?\" Ou : \"Je veux devenir électricien. Quelles sont les étapes habituelles ?\"",
            "Certains emplois demandent une licence, et certaines règles de licence tiennent compte du casier judiciaire. Renseignez-vous auprès de l'organisme de délivrance des licences de votre État ou d'un programme de réinsertion avant d'investir du temps et de l'argent. L'IA peut vous donner une liste de départ, mais c'est l'organisme officiel qui a le dernier mot."
          ],
          steps: ["Nommez l'emploi que vous voulez.", "Demandez à l'IA quelle formation les gens suivent en général pour cet emploi.", "Choisissez la prochaine étape utile la plus courte.", "S'il faut une licence, consultez l'organisme de votre État.", "Écrivez votre objectif en une phrase."],
          words: [["Certificat", "une preuve que vous avez terminé une formation dans une compétence précise."], ["Équivalence du diplôme de fin d'études secondaires", "un examen, comme le GED aux États-Unis, qui montre un niveau de fin d'études secondaires."]],
          slides: [
            { title: "Partez de l'emploi", bullets: ["Puis remontez", "Que dois-je apprendre ?"] },
            { title: "Demandez à l'IA", bullets: ["\"Quelle formation suivent les gens pour cet emploi ?\"", "\"Quelles options sont courtes et peu chères ?\""] },
            { title: "Vérifiez les licences", bullets: ["Certains emplois demandent une licence", "Les règles peuvent tenir compte du casier", "Demandez à l'organisme de l'État ou à un programme de réinsertion"] }
          ],
          tryIt: "Écrivez l'emploi que vous voulez. Demandez à un assistant d'IA quelle formation les gens suivent en général pour cet emploi, et écrivez votre objectif d'apprentissage en une phrase.",
          youCanNow: "fixer un objectif d'apprentissage qui mène à un emploi.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un certificat ?", options: ["Un diplôme universitaire", "Une preuve que vous avez terminé une formation dans une compétence", "Une offre d'emploi", "Un prêt"], answer: 1, why: "Un certificat montre que vous avez terminé une formation dans une compétence précise." },
            { objective: "O1", q: "Vous voulez devenir électricien. Comment commencez-vous votre objectif d'apprentissage ?", options: ["S'inscrire au premier cours que vous voyez", "Demander à un ami quel cours est le plus facile", "Partir de l'emploi, puis trouver la formation qu'il demande et vérifier auprès de l'organisme de licences de l'État", "Attendre que quelqu'un vous propose une formation"], answer: 2, why: "Partir de l'emploi et vérifier auprès de l'organisme de licences mène à la bonne formation." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Trouver des formations gratuites ou peu chères",
          minutes: 5,
          goal: "Trouver au moins deux vraies formations qui correspondent à votre objectif.",
          text: [
            "Il existe beaucoup d'endroits pour apprendre gratuitement ou pour peu d'argent : les centres d'éducation des adultes (souvent pour l'équivalence du diplôme et l'anglais), les bibliothèques publiques, les community colleges, les programmes de réinsertion, et les American Job Centers, qui peuvent offrir de l'orientation professionnelle et vous diriger vers des formations.",
            "Trouvez l'American Job Center le plus proche avec l'outil de recherche CareerOneStop sur careeronestop.org, un site du ministère du Travail des États-Unis, ou appelez sa ligne d'assistance au 1-877-872-5627. Les services varient selon les centres, alors appelez ou passez pour confirmer ce que le vôtre propose.",
            "En ligne, beaucoup de sites reconnus proposent des leçons gratuites, comme Khan Academy pour les maths et la lecture, et des cours gratuits de community colleges. Demandez des idées à l'IA, puis allez sur le site de chaque formation pour confirmer qu'elle existe et ce qu'elle coûte."
          ],
          steps: ["Demandez à l'IA où les gens de votre région peuvent apprendre votre compétence.", "Cherchez l'American Job Center le plus proche sur careeronestop.org.", "Renseignez-vous à la bibliothèque, à l'école pour adultes et au community college.", "Notez deux formations.", "Confirmez chacune sur son propre site ou par téléphone."],
          words: [["American Job Center", "un bureau financé par le ministère du Travail des États-Unis qui aide pour l'emploi et la formation."], ["Community college", "un établissement local d'enseignement supérieur, moins cher, qui propose des certificats et des diplômes en deux ans."]],
          slides: [
            { title: "Où apprendre pour peu cher", bullets: ["Éducation des adultes et bibliothèques", "Community colleges", "Programmes de réinsertion et American Job Centers"] },
            { title: "American Job Centers", bullets: ["Trouvez-en un sur careeronestop.org", "Ligne d'assistance : 1-877-872-5627", "Les services varient : appelez pour confirmer"] },
            { title: "En ligne", bullets: ["Leçons gratuites comme Khan Academy", "Confirmez les formations sur leur propre site"] }
          ],
          sources: [{ name: "CareerOneStop : outil de recherche des American Job Centers (ministère du Travail des États-Unis, en anglais)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Trouvez l'American Job Center le plus proche sur careeronestop.org et une autre formation (bibliothèque, école pour adultes ou community college) pour votre objectif. Notez les deux, avec les numéros de téléphone pris sur leurs sites officiels.",
          youCanNow: "trouver des formations gratuites ou peu chères pour votre objectif d'apprentissage.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un community college ?", options: ["Un établissement d'études supérieures local et moins cher", "Une école seulement en ligne", "Une agence privée pour l'emploi", "Un lycée réservé aux adultes"], answer: 0, why: "Les community colleges sont proches de chez vous et coûtent en général moins cher que les autres établissements." },
            { objective: "O2", q: "L'IA propose une formation près de chez vous. Que faites-vous ?", options: ["S'inscrire tout de suite", "Payer un acompte pour garder une place", "La partager sans vérifier", "La confirmer sur le site de la formation elle-même"], answer: 3, why: "L'IA peut se tromper, donc vous confirmez les formations sur leur site officiel." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Vérifier une formation avant de vous inscrire",
          minutes: 5,
          goal: "Poser cinq questions pour vérifier qu'une formation est réelle et qu'elle en vaut la peine.",
          text: [
            "Certaines formations sont excellentes. D'autres coûtent cher et ne mènent nulle part, et quelques-unes sont des arnaques qui visent les personnes qui veulent repartir de zéro. Vérifiez avant de signer ou de payer.",
            "Posez cinq questions : Quel est le coût total, livres et frais compris ? Combien de temps cela dure-t-il, et quels sont les horaires ? Qu'est-ce que j'obtiens à la fin (un certificat, une licence ou des crédits) ? L'école est-elle accréditée, ou le certificat est-il reconnu par les employeurs ? Combien de diplômés trouvent un emploi, et la formation aide-t-elle à trouver un poste ?",
            "L'IA peut vous aider à préparer les questions et à expliquer des mots comme \"accrédité\". Mais les réponses doivent venir de la formation elle-même, par écrit, et de vos propres vérifications. Méfiez-vous de la pression pour signer aujourd'hui ou pour prendre un gros prêt."
          ],
          steps: ["Demandez le coût total.", "Demandez la durée et les horaires.", "Demandez ce que vous obtenez à la fin.", "Demandez si elle est accréditée ou reconnue par les employeurs.", "Demandez les résultats en emploi et l'aide pour trouver un poste."],
          words: [["Accrédité", "approuvé par un organisme officiel qui contrôle la qualité d'une école."], ["Aide au placement", "de l'aide pour trouver un emploi une fois la formation terminée."]],
          slides: [
            { title: "Vérifiez avant de signer", bullets: ["Certaines formations ne mènent nulle part", "Certaines sont des arnaques"] },
            { title: "Cinq questions", bullets: ["Coût total ? Durée et horaires ?", "Qu'est-ce que j'obtiens à la fin ?", "Accréditée ou reconnue ?", "Résultats en emploi et aide au placement ?"] },
            { title: "Signaux d'alerte", bullets: ["Pression pour signer aujourd'hui", "Gros prêt pour une formation courte", "Aucune réponse par écrit"] }
          ],
          tryIt: "Choisissez une formation de la leçon 2. Demandez à un assistant d'IA de vous aider à transformer les cinq questions en un court texte pour un appel, puis appelez ou consultez le site de la formation et notez les réponses.",
          youCanNow: "vérifier une formation avec cinq questions avant de vous inscrire.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire « accrédité » ?", options: ["Approuvé par un organisme officiel de contrôle de la qualité", "Gratuit", "Seulement en ligne", "Géré par le gouvernement"], answer: 0, why: "L'accréditation veut dire qu'un organisme officiel a vérifié la qualité de la formation." },
            { objective: "O3", q: "Une école dit que vous devez signer un gros prêt aujourd'hui pour garder votre place. Que faites-vous ?", options: ["Signer pour ne pas perdre la place", "Signer en prévoyant de ne pas rembourser", "Y voir un signal d'alerte et prendre le temps de vérifier", "Demander à l'IA de signer pour vous"], answer: 2, why: "Une pression pour signer tout de suite un gros prêt est un signal d'alerte." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir votre voie",
        questions: [
          { objective: "O1", q: "Par où commencer un objectif d'apprentissage ?", options: ["Un cours au hasard", "Le cours qui a le plus de publicité", "L'emploi que vous voulez, puis remonter", "La formation la plus longue"], answer: 2, why: "Un objectif d'emploi rend l'apprentissage utile." },
          { objective: "O1", q: "L'IA dit qu'un emploi demande une licence. Qui a le dernier mot sur les règles ?", options: ["L'organisme de délivrance des licences de votre État", "L'IA", "Un ami", "Une publication sur les réseaux sociaux"], answer: 0, why: "Les organismes officiels fixent les règles des licences." },
          { objective: "O2", q: "Où trouver l'American Job Center le plus proche ?", options: ["Un site de cartes cadeaux", "Une publicité qui s'ouvre toute seule", "N'importe quel SMS", "careeronestop.org"], answer: 3, why: "CareerOneStop est l'outil de recherche du ministère du Travail." },
          { objective: "O3", q: "Quelle question vérifie la valeur d'une formation ?", options: ["\"De quelle couleur est le bâtiment ?\"", "\"Combien de diplômés trouvent un emploi ?\"", "\"Puis-je signer aujourd'hui sans lire ?\"", "\"Avez-vous un parking ?\""], answer: 1, why: "Les résultats en emploi montrent si elle mène quelque part." },
          { objective: "O3", q: "Une formation vous pousse à signer un gros prêt aujourd'hui. C'est :", options: ["Une super affaire", "Un signal d'alerte", "Obligatoire", "Normal dans toutes les écoles"], answer: 1, why: "La pression et les gros prêts sont des signaux d'alerte." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Apprendre avec l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Utiliser l'IA comme tuteur",
          minutes: 5,
          goal: "Demander à l'IA d'expliquer, de donner des exemples et de vous interroger, sans faire votre travail à votre place.",
          text: [
            "Un assistant d'IA peut être un tuteur patient, à toute heure. Demandez-lui d'expliquer simplement un sujet, de donner un exemple et de vous interroger : \"J'étudie les fractions pour mon examen d'équivalence. Explique comment additionner des fractions en étapes simples, donne-moi un exemple, puis donne-moi trois exercices un par un.\"",
            "Si vous ne comprenez pas, dites-le : \"Explique-le autrement.\" \"Prends l'argent comme exemple.\" Plus vous faites les exercices vous-même, plus vous apprenez.",
            "Ne faites pas écrire vos devoirs ni passer vos examens par l'IA. Les écoles considèrent cela comme de la triche, et vous passez à côté de l'apprentissage. Vérifiez aussi les faits : l'IA peut se tromper, même en maths. Votre manuel et votre enseignant ont le dernier mot."
          ],
          steps: ["Dites ce que vous étudiez et votre niveau.", "Demandez une explication simple et un exemple.", "Demandez des exercices un par un.", "Demandez une autre explication si vous bloquez.", "Faites vos devoirs vous-même ; vérifiez les faits avec votre enseignant ou votre manuel."],
          words: [["Tuteur", "un enseignant qui aide une personne à apprendre à son rythme."], ["Honnêteté scolaire", "faire votre propre travail et respecter les règles de votre école."]],
          slides: [
            { title: "Un tuteur à toute heure", bullets: ["Il explique simplement", "Il donne un exemple", "Il vous interroge une question à la fois"] },
            { title: "Vous bloquez ?", bullets: ["\"Explique-le autrement.\"", "\"Prends l'argent comme exemple.\""] },
            { title: "Apprenez, ne trichez pas", bullets: ["Faites vous-même devoirs et examens", "L'IA peut se tromper", "L'enseignant et le manuel ont le dernier mot"] }
          ],
          tryIt: "Choisissez un sujet lié à votre objectif. Demandez à un assistant d'IA de l'expliquer simplement, de donner un exemple et de vous poser trois questions une par une.",
          youCanNow: "utiliser l'IA comme tuteur de façon honnête.",
          quickCheck: [
            { objective: "O4", q: "Que doit contenir une bonne demande de tutorat à l'IA ?", options: ["Seulement le mot « aide »", "Votre devoir, pour que l'IA le termine", "Votre numéro d'étudiant", "Ce que vous étudiez et votre niveau"], answer: 3, why: "Dire à l'IA le sujet et votre niveau donne des explications adaptées à vous." },
            { objective: "O4", q: "Vous avez une rédaction à rendre et vous êtes tenté de la faire écrire par l'IA. Que faites-vous ?", options: ["La faire écrire par l'IA et la rendre", "Demander à l'IA d'expliquer le sujet et de vous interroger, puis l'écrire vous-même", "Copier la rédaction d'un camarade", "Ne pas faire le devoir"], answer: 1, why: "Faire écrire ses devoirs par l'IA enfreint les règles de l'école et vous fait sauter l'apprentissage." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faire un plan d'étude adapté à votre vie",
          minutes: 5,
          goal: "Faire un plan d'étude hebdomadaire qui tient compte du travail et de vos autres engagements.",
          text: [
            "Quand vous travaillez, allez à des rendez-vous et vous occupez de votre famille, le temps d'étude doit être prévu. Des séances courtes et régulières marchent mieux que le bachotage.",
            "Demandez à l'IA : \"Je travaille de 7 h à 15 h 30 en semaine et j'ai des rendez-vous le mardi après-midi. Fais un plan d'étude de quatre semaines pour les maths de mon examen d'équivalence, avec des séances de 30 minutes quatre fois par semaine et une courte révision chaque week-end.\"",
            "Mettez les séances dans le calendrier de votre téléphone avec des rappels. Étudiez dans un endroit calme, comme une bibliothèque, et utilisez le Wi-Fi et les ordinateurs gratuits de la bibliothèque si besoin. Si vous ratez une séance, n'abandonnez pas ; faites simplement la suivante."
          ],
          steps: ["Listez vos heures de travail et vos rendez-vous fixes.", "Demandez à l'IA un plan de quatre semaines avec des séances courtes.", "Mettez les séances dans votre calendrier avec des rappels.", "Trouvez un endroit calme pour étudier.", "Si vous en ratez une, faites simplement la suivante."],
          words: [["Séance d'étude", "un moment fixé que vous passez à apprendre."], ["Bachotage", "essayer d'apprendre beaucoup à la dernière minute."]],
          slides: [
            { title: "Prévoyez votre temps d'étude", bullets: ["Court et régulier vaut mieux que le bachotage"] },
            { title: "Demandez un plan à l'IA", bullets: ["Vos heures de travail et vos rendez-vous", "Des séances courtes, quelques fois par semaine", "Une révision le week-end"] },
            { title: "Tenez bon", bullets: ["Rappels dans le calendrier", "Un endroit calme, comme la bibliothèque", "Une séance ratée ? Faites la suivante"] }
          ],
          tryIt: "Demandez à un assistant d'IA un plan d'étude de quatre semaines adapté à votre travail et à vos rendez-vous. Mettez vos deux premières séances dans le calendrier de votre téléphone.",
          youCanNow: "faire et tenir un plan d'étude adapté à votre vie.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le bachotage de dernière minute ?", options: ["Étudier un peu chaque jour", "Prendre des notes en cours", "Apprendre beaucoup au dernier moment", "Demander de l'aide à un tuteur"], answer: 2, why: "Le bachotage, c'est essayer d'apprendre beaucoup juste avant un examen." },
            { objective: "O5", q: "Vous avez manqué la séance d'étude de mardi à cause du travail. Que faites-vous ?", options: ["Faire simplement la séance suivante", "Abandonner le plan", "Étudier six heures le mercredi", "Recommencer tout le plan"], answer: 0, why: "Manquer une séance n'est pas grave ; l'important est de reprendre le rythme." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Se préparer à demander une aide financière",
          minutes: 5,
          goal: "Trouver où demander l'aide fédérale aux études et lister ce qu'il faut préparer.",
          text: [
            "Pour l'université et beaucoup d'écoles professionnelles aux États-Unis, la première étape pour l'aide financière est la FAFSA, la demande gratuite d'aide fédérale aux études (Free Application for Federal Student Aid). Comme son nom l'indique, elle est gratuite. Faites la demande uniquement sur le site officiel, studentaid.gov ; ne payez aucun site pour la remplir.",
            "Les règles sur les condamnations pénales et l'aide aux études ont changé ces dernières années. Ne supposez pas que vous ne pouvez pas avoir d'aide. Vérifiez les règles actuelles sur studentaid.gov, ou demandez au service d'aide financière de l'école ; il aide chaque jour des étudiants sur ces questions.",
            "L'IA peut vous aider à comprendre des mots (\"Qu'est-ce qu'une Pell Grant ?\" \"Quelle est la différence entre une bourse et un prêt ?\") et à faire une liste de questions pour le service d'aide financière. Ne tapez vos informations personnelles et fiscales que sur studentaid.gov, jamais dans l'IA. Les bourses n'ont pas à être remboursées ; les prêts, si."
          ],
          steps: ["Allez uniquement sur studentaid.gov pour la FAFSA ; elle est gratuite.", "Vérifiez-y les règles actuelles sur les condamnations, ou auprès du service d'aide financière de l'école.", "Utilisez l'IA pour expliquer les mots et préparer vos questions.", "Ne tapez vos informations personnelles que sur le site officiel.", "Retenez la différence : les bourses ne se remboursent pas, les prêts si."],
          words: [["FAFSA", "la demande gratuite d'aide fédérale aux études, sur studentaid.gov."], ["Bourse (grant)", "de l'argent pour les études qui, en général, n'a pas à être remboursé."], ["Service d'aide financière", "le service d'une école qui aide les étudiants à payer leurs études."]],
          slides: [
            { title: "Commencez par la FAFSA", bullets: ["Demande gratuite d'aide fédérale aux études", "Uniquement sur studentaid.gov", "Ne payez jamais un site pour la remplir"] },
            { title: "Condamnations et aide", bullets: ["Les règles ont changé ces dernières années", "Ne supposez pas que l'aide vous est fermée", "Vérifiez sur studentaid.gov ou au service d'aide"] },
            { title: "Utilisez l'IA avec sagesse", bullets: ["Expliquer des mots comme Pell Grant", "Préparer des questions pour le service d'aide", "Informations personnelles seulement sur le site officiel"] }
          ],
          sources: [{ name: "Aide fédérale aux études : studentaid.gov (en anglais)", url: "https://studentaid.gov/" }],
          tryIt: "Tâche finale : écrivez votre objectif d'apprentissage lié à un emploi, vérifiez une vraie formation avec les cinq questions, demandez à l'IA un plan d'étude de quatre semaines, laissez-la vous expliquer et vous interroger sur le premier sujet, et mettez vos deux premières séances dans votre calendrier. Si la formation est universitaire ou professionnelle, ajoutez trois questions pour son service d'aide financière.",
          youCanNow: "planifier, trouver, vérifier et financer une reprise d'études, et étudier avec l'IA comme tuteur.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire FAFSA ?", options: ["Federal Aid for Students and Adults (aide fédérale pour les étudiants et les adultes)", "Free Application for Federal Student Aid (demande gratuite d'aide fédérale aux études)", "First Approved Funding for School Admission (premier financement approuvé pour l'admission)", "Financial Account for Student Assistance (compte financier d'aide aux étudiants)"], answer: 1, why: "La FAFSA est la Free Application for Federal Student Aid, la demande gratuite d'aide fédérale aux études." },
            { objective: "O6", q: "Un site web demande des frais pour remplir votre FAFSA. Que faites-vous ?", options: ["Payer pour gagner du temps", "Lui donner vos données fiscales", "Demander à l'IA de la remplir avec votre numéro de sécurité sociale", "La remplir gratuitement sur studentaid.gov"], answer: 3, why: "La FAFSA est gratuite sur studentaid.gov, et les données privées ne vont que là." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Apprendre avec l'IA",
        questions: [
          { objective: "O4", q: "Quel usage de l'IA pour les études est honnête ?", options: ["Copier ses réponses dans vos devoirs", "Lui faire écrire votre dissertation à rendre", "Lui faire passer votre examen", "Lui demander d'expliquer un sujet et de vous interroger"], answer: 3, why: "Expliquer et interroger vous aident à apprendre." },
          { objective: "O4", q: "Vous ne comprenez pas une explication. Que demandez-vous ?", options: ["\"Explique-le autrement.\"", "\"Fais mes devoirs.\"", "\"Quel est mon mot de passe ?\"", "Rien ; j'abandonne"], answer: 0, why: "Une nouvelle explication aide souvent." },
          { objective: "O5", q: "Quel plan d'étude marche le mieux ?", options: ["Étudier seulement quand vous en avez envie", "Une longue nuit avant l'examen", "Des séances courtes et régulières", "Aucun plan"], answer: 2, why: "Des séances régulières valent mieux que le bachotage." },
          { objective: "O6", q: "Où remplir la FAFSA ?", options: ["Par un lien dans un SMS", "Sur n'importe quel site payant", "Dans une discussion avec une IA", "Sur studentaid.gov, gratuitement"], answer: 3, why: "La FAFSA est gratuite sur le site officiel." },
          { objective: "O6", q: "Vous avez une condamnation et voulez une aide. Que faites-vous ?", options: ["Demander à un inconnu", "Supposer que vous ne pouvez pas en avoir", "Vérifier les règles actuelles sur studentaid.gov ou demander au service d'aide financière", "Renoncer aux études"], answer: 2, why: "Les règles ont changé ; les sources officielles connaissent les règles actuelles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et la reprise d'études",
    questions: [
      { objective: "O1", q: "Un bon objectif d'apprentissage est :", options: ["Choisi au hasard", "Lié à un emploi que vous voulez", "Celui qui a le plus de publicité", "Le plus long possible"], answer: 1, why: "Un objectif d'emploi rend l'apprentissage utile." },
      { objective: "O1", q: "Un certificat est :", options: ["Une preuve que vous avez terminé une formation dans une compétence", "Un prêt", "Une offre d'emploi", "Une plaque d'immatriculation"], answer: 0, why: "Les certificats montrent vos compétences aux employeurs." },
      { objective: "O1", q: "Un examen d'équivalence du diplôme de fin d'études secondaires, comme le GED :", options: ["Montre un niveau de fin d'études secondaires", "Est un examen du permis de conduire", "Est une candidature à un emploi", "Est un prêt"], answer: 0, why: "C'est une alternative au diplôme." },
      { objective: "O1", q: "Pour un emploi sous licence, renseignez-vous auprès de :", options: ["Seulement l'IA", "L'organisme de délivrance des licences de votre État", "Une rumeur", "Personne"], answer: 1, why: "Ces organismes fixent et expliquent les règles." },
      { objective: "O2", q: "Les American Job Centers sont financés par :", options: ["Un réseau social", "Une banque privée", "Le ministère du Travail des États-Unis", "Un prêteur sur salaire"], answer: 2, why: "Ils font partie du réseau du ministère du Travail." },
      { objective: "O2", q: "Les services des American Job Centers :", options: ["Sont seulement en ligne", "Sont les mêmes partout", "Coûtent cher", "Varient, donc appelez ou passez pour confirmer"], answer: 3, why: "Chaque centre propose des services différents." },
      { objective: "O2", q: "Un community college est :", options: ["Une banque", "Seulement un programme en prison", "Un établissement local d'enseignement supérieur moins cher", "Une agence pour l'emploi"], answer: 2, why: "Les community colleges proposent des certificats et des diplômes." },
      { objective: "O2", q: "Quand l'IA propose une formation, vous devez :", options: ["La confirmer sur le site de la formation", "Vous inscrire tout de suite", "Payer un inconnu", "L'ignorer"], answer: 0, why: "L'IA peut citer des formations qui n'existent pas." },
      { objective: "O3", q: "\"Accrédité\" veut dire :", options: ["Gratuit", "Cher", "Seulement en ligne", "Approuvé par un organisme officiel de contrôle de la qualité"], answer: 3, why: "L'accréditation contrôle la qualité." },
      { objective: "O3", q: "L'aide au placement, c'est :", options: ["Un bureau", "De l'aide pour trouver un emploi une fois la formation terminée", "Un examen", "Un prêt"], answer: 1, why: "Elle met les diplômés en relation avec des emplois." },
      { objective: "O3", q: "Les réponses sur le coût d'une formation doivent venir de :", options: ["Seulement l'IA", "La formation, par écrit", "Une rumeur", "Une publicité"], answer: 1, why: "Les réponses écrites de la formation sont fiables." },
      { objective: "O4", q: "Un bon prompt pour un tuteur dit :", options: ["Votre numéro de dossier", "Votre numéro de sécurité sociale", "Seulement \"aide\"", "Ce que vous étudiez et votre niveau"], answer: 3, why: "Le sujet et le niveau aident l'IA à bien enseigner." },
      { objective: "O4", q: "L'IA s'est trompée dans une réponse de maths. Qui a le dernier mot ?", options: ["Votre enseignant et votre manuel", "L'IA", "Un inconnu en ligne", "Personne"], answer: 0, why: "L'IA peut se tromper, même en maths." },
      { objective: "O4", q: "Faire écrire votre devoir par l'IA, c'est :", options: ["Obligatoire", "Toujours permis", "Contraire aux règles de l'école, et vous passez à côté de l'apprentissage", "Un bon entraînement"], answer: 2, why: "L'honnêteté scolaire veut dire faire votre propre travail." },
      { objective: "O5", q: "Le bachotage, c'est :", options: ["Une bibliothèque", "Étudier court et régulièrement", "Un groupe d'étude", "Apprendre beaucoup à la dernière minute"], answer: 3, why: "Le bachotage est moins efficace qu'une étude régulière." },
      { objective: "O5", q: "Pour tenir un plan d'étude, vous pouvez :", options: ["Ne pas planifier", "Compter seulement sur votre mémoire", "Mettre les séances dans votre calendrier avec des rappels", "Étudier seulement le jour de l'examen"], answer: 2, why: "Les rappels vous gardent sur la bonne voie." },
      { objective: "O5", q: "Si vous ratez une séance d'étude, vous devez :", options: ["Abandonner la formation", "Faire simplement la suivante", "Tout recommencer à zéro", "Penser que c'est sans espoir"], answer: 1, why: "Une séance ratée n'efface pas vos progrès." },
      { objective: "O6", q: "FAFSA veut dire :", options: ["Free Application for Federal Student Aid (demande gratuite d'aide fédérale aux études)", "Demande rapide de comptes étudiants", "Compte fédéral d'épargne", "Agence de services d'aide financière"], answer: 0, why: "C'est la demande gratuite d'aide fédérale." },
      { objective: "O6", q: "Une bourse (grant), en général :", options: ["N'a pas à être remboursée", "Doit être remboursée avec intérêts", "Est un type de carte de crédit", "Est un frais"], answer: 0, why: "Les bourses ne se remboursent pas ; les prêts, si." },
      { objective: "O6", q: "Les informations personnelles et fiscales pour la FAFSA doivent être tapées :", options: ["Dans l'IA", "Uniquement sur studentaid.gov", "Dans un SMS à un inconnu", "Sur n'importe quel site"], answer: 1, why: "Les informations privées ne vont que sur le site officiel." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      8,
      10,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif lié à un emploi",
        objective: "O1",
        notYet: "L'objectif est flou ou n'est pas lié à un emploi.",
        meets: "Une phrase qui nomme l'emploi et la formation qu'il demande.",
        exceeds: "Il note si l'emploi demande une licence d'État et où le vérifier."
      },
      {
        name: "Formation vérifiée",
        objective: "O3",
        notYet: "Pas de formation, ou moins de cinq questions avec une réponse.",
        meets: "Une vraie formation vérifiée avec les cinq questions, et les réponses données par la formation.",
        exceeds: "Les réponses sur le coût sont écrites, et une deuxième formation a été comparée."
      },
      {
        name: "L'IA comme tuteur",
        objective: "O4",
        notYet: "L'IA a fait le travail, ou il n'y a pas eu d'interrogation.",
        meets: "L'IA a expliqué le premier sujet, donné un exemple et interrogé l'apprenant.",
        exceeds: "L'apprenant a demandé à l'IA d'expliquer autrement quand il bloquait."
      },
      {
        name: "Plan d'étude dans l'agenda",
        objective: "O5",
        notYet: "Pas de plan, ou aucune séance dans l'agenda.",
        meets: "Un plan sur quatre semaines avec des séances courtes et régulières, et les deux premières séances dans l'agenda.",
        exceeds: "Les séances ont des rappels et s'intègrent autour du travail et des rendez-vous."
      },
      {
        name: "Questions sur l'aide financière",
        objective: "O6",
        notYet: "Absentes alors que la formation est un établissement d'études supérieures ou une école professionnelle.",
        meets: "Trois questions pour le bureau d'aide financière.",
        exceeds: "Il note aussi où remplir la FAFSA gratuitement."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui s'inscrivent à un équivalent du diplôme de fin d'études secondaires, à un certificat ou à des études supérieures dans les 90 jours (enquête de suivi)",
      "Les apprenants qui remplissent une FAFSA ou demandent une autre aide dans les 90 jours",
      "Les apprenants qui disent utiliser l'IA comme tuteur chaque semaine (enquête de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet et une application d'agenda",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Du papier et un stylo pour l'objectif et les questions sur les formations",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Ayez prêtes les coordonnées de l'American Job Center, de l'école pour adultes et du community college les plus proches.",
      "Expliquez que l'IA sert seulement à aider à étudier ; l'utiliser pour faire les devoirs enfreint les règles de l'école.",
      "Ne demandez jamais aux apprenants de taper un numéro de sécurité sociale, des données fiscales ou des détails de dossier dans l'IA ; la FAFSA se remplit seulement sur studentaid.gov, en privé.",
      "Envoyez les questions sur les condamnations et l'aide financière vers studentaid.gov ou un bureau d'aide financière, car les règles changent.",
      "Notez la tâche finale avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
