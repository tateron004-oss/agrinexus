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
  chapters: [
    {
      name: "Chapitre 1 : Choisir votre voie",
      lessons: [
        {
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
          youCanNow: "fixer un objectif d'apprentissage qui mène à un emploi."
        },
        {
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
          youCanNow: "trouver des formations gratuites ou peu chères pour votre objectif d'apprentissage."
        },
        {
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
          youCanNow: "vérifier une formation avec cinq questions avant de vous inscrire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir votre voie",
        questions: [
          { q: "Par où commencer un objectif d'apprentissage ?", options: ["Un cours au hasard", "Le cours qui a le plus de publicité", "L'emploi que vous voulez, puis remonter", "La formation la plus longue"], answer: 2, why: "Un objectif d'emploi rend l'apprentissage utile." },
          { q: "L'IA dit qu'un emploi demande une licence. Qui a le dernier mot sur les règles ?", options: ["L'organisme de délivrance des licences de votre État", "L'IA", "Un ami", "Une publication sur les réseaux sociaux"], answer: 0, why: "Les organismes officiels fixent les règles des licences." },
          { q: "Où trouver l'American Job Center le plus proche ?", options: ["Un site de cartes cadeaux", "Une publicité qui s'ouvre toute seule", "N'importe quel SMS", "careeronestop.org"], answer: 3, why: "CareerOneStop est l'outil de recherche du ministère du Travail." },
          { q: "Quelle question vérifie la valeur d'une formation ?", options: ["\"De quelle couleur est le bâtiment ?\"", "\"Combien de diplômés trouvent un emploi ?\"", "\"Puis-je signer aujourd'hui sans lire ?\"", "\"Avez-vous un parking ?\""], answer: 1, why: "Les résultats en emploi montrent si elle mène quelque part." },
          { q: "Une formation vous pousse à signer un gros prêt aujourd'hui. C'est :", options: ["Une super affaire", "Un signal d'alerte", "Obligatoire", "Normal dans toutes les écoles"], answer: 1, why: "La pression et les gros prêts sont des signaux d'alerte." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Apprendre avec l'IA",
      lessons: [
        {
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
          youCanNow: "utiliser l'IA comme tuteur de façon honnête."
        },
        {
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
          youCanNow: "faire et tenir un plan d'étude adapté à votre vie."
        },
        {
          title: "Se préparer à demander une aide financière",
          minutes: 5,
          goal: "Savoir où demander l'aide fédérale aux études et quoi préparer.",
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
          youCanNow: "planifier, trouver, vérifier et financer une reprise d'études, et étudier avec l'IA comme tuteur."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Apprendre avec l'IA",
        questions: [
          { q: "Quel usage de l'IA pour les études est honnête ?", options: ["Copier ses réponses dans vos devoirs", "Lui faire écrire votre dissertation à rendre", "Lui faire passer votre examen", "Lui demander d'expliquer un sujet et de vous interroger"], answer: 3, why: "Expliquer et interroger vous aident à apprendre." },
          { q: "Vous ne comprenez pas une explication. Que demandez-vous ?", options: ["\"Explique-le autrement.\"", "\"Fais mes devoirs.\"", "\"Quel est mon mot de passe ?\"", "Rien ; j'abandonne"], answer: 0, why: "Une nouvelle explication aide souvent." },
          { q: "Quel plan d'étude marche le mieux ?", options: ["Étudier seulement quand vous en avez envie", "Une longue nuit avant l'examen", "Des séances courtes et régulières", "Aucun plan"], answer: 2, why: "Des séances régulières valent mieux que le bachotage." },
          { q: "Où remplir la FAFSA ?", options: ["Par un lien dans un SMS", "Sur n'importe quel site payant", "Dans une discussion avec une IA", "Sur studentaid.gov, gratuitement"], answer: 3, why: "La FAFSA est gratuite sur le site officiel." },
          { q: "Vous avez une condamnation et voulez une aide. Que faites-vous ?", options: ["Demander à un inconnu", "Supposer que vous ne pouvez pas en avoir", "Vérifier les règles actuelles sur studentaid.gov ou demander au service d'aide financière", "Renoncer aux études"], answer: 2, why: "Les règles ont changé ; les sources officielles connaissent les règles actuelles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et la reprise d'études",
    questions: [
      { q: "Un bon objectif d'apprentissage est :", options: ["Choisi au hasard", "Lié à un emploi que vous voulez", "Celui qui a le plus de publicité", "Le plus long possible"], answer: 1, why: "Un objectif d'emploi rend l'apprentissage utile." },
      { q: "Un certificat est :", options: ["Une preuve que vous avez terminé une formation dans une compétence", "Un prêt", "Une offre d'emploi", "Une plaque d'immatriculation"], answer: 0, why: "Les certificats montrent vos compétences aux employeurs." },
      { q: "Un examen d'équivalence du diplôme de fin d'études secondaires, comme le GED :", options: ["Montre un niveau de fin d'études secondaires", "Est un examen du permis de conduire", "Est une candidature à un emploi", "Est un prêt"], answer: 0, why: "C'est une alternative au diplôme." },
      { q: "Pour un emploi sous licence, renseignez-vous auprès de :", options: ["Seulement l'IA", "L'organisme de délivrance des licences de votre État", "Une rumeur", "Personne"], answer: 1, why: "Ces organismes fixent et expliquent les règles." },
      { q: "Les American Job Centers sont financés par :", options: ["Un réseau social", "Une banque privée", "Le ministère du Travail des États-Unis", "Un prêteur sur salaire"], answer: 2, why: "Ils font partie du réseau du ministère du Travail." },
      { q: "Les services des American Job Centers :", options: ["Sont seulement en ligne", "Sont les mêmes partout", "Coûtent cher", "Varient, donc appelez ou passez pour confirmer"], answer: 3, why: "Chaque centre propose des services différents." },
      { q: "Un community college est :", options: ["Une banque", "Seulement un programme en prison", "Un établissement local d'enseignement supérieur moins cher", "Une agence pour l'emploi"], answer: 2, why: "Les community colleges proposent des certificats et des diplômes." },
      { q: "Quand l'IA propose une formation, vous devez :", options: ["La confirmer sur le site de la formation", "Vous inscrire tout de suite", "Payer un inconnu", "L'ignorer"], answer: 0, why: "L'IA peut citer des formations qui n'existent pas." },
      { q: "\"Accrédité\" veut dire :", options: ["Gratuit", "Cher", "Seulement en ligne", "Approuvé par un organisme officiel de contrôle de la qualité"], answer: 3, why: "L'accréditation contrôle la qualité." },
      { q: "L'aide au placement, c'est :", options: ["Un bureau", "De l'aide pour trouver un emploi une fois la formation terminée", "Un examen", "Un prêt"], answer: 1, why: "Elle met les diplômés en relation avec des emplois." },
      { q: "Les réponses sur le coût d'une formation doivent venir de :", options: ["Seulement l'IA", "La formation, par écrit", "Une rumeur", "Une publicité"], answer: 1, why: "Les réponses écrites de la formation sont fiables." },
      { q: "Un bon prompt pour un tuteur dit :", options: ["Votre numéro de dossier", "Votre numéro de sécurité sociale", "Seulement \"aide\"", "Ce que vous étudiez et votre niveau"], answer: 3, why: "Le sujet et le niveau aident l'IA à bien enseigner." },
      { q: "L'IA s'est trompée dans une réponse de maths. Qui a le dernier mot ?", options: ["Votre enseignant et votre manuel", "L'IA", "Un inconnu en ligne", "Personne"], answer: 0, why: "L'IA peut se tromper, même en maths." },
      { q: "Faire écrire votre devoir par l'IA, c'est :", options: ["Obligatoire", "Toujours permis", "Contraire aux règles de l'école, et vous passez à côté de l'apprentissage", "Un bon entraînement"], answer: 2, why: "L'honnêteté scolaire veut dire faire votre propre travail." },
      { q: "Le bachotage, c'est :", options: ["Une bibliothèque", "Étudier court et régulièrement", "Un groupe d'étude", "Apprendre beaucoup à la dernière minute"], answer: 3, why: "Le bachotage est moins efficace qu'une étude régulière." },
      { q: "Pour tenir un plan d'étude, vous pouvez :", options: ["Ne pas planifier", "Compter seulement sur votre mémoire", "Mettre les séances dans votre calendrier avec des rappels", "Étudier seulement le jour de l'examen"], answer: 2, why: "Les rappels vous gardent sur la bonne voie." },
      { q: "Si vous ratez une séance d'étude, vous devez :", options: ["Abandonner la formation", "Faire simplement la suivante", "Tout recommencer à zéro", "Penser que c'est sans espoir"], answer: 1, why: "Une séance ratée n'efface pas vos progrès." },
      { q: "FAFSA veut dire :", options: ["Free Application for Federal Student Aid (demande gratuite d'aide fédérale aux études)", "Demande rapide de comptes étudiants", "Compte fédéral d'épargne", "Agence de services d'aide financière"], answer: 0, why: "C'est la demande gratuite d'aide fédérale." },
      { q: "Une bourse (grant), en général :", options: ["N'a pas à être remboursée", "Doit être remboursée avec intérêts", "Est un type de carte de crédit", "Est un frais"], answer: 0, why: "Les bourses ne se remboursent pas ; les prêts, si." },
      { q: "Les informations personnelles et fiscales pour la FAFSA doivent être tapées :", options: ["Dans l'IA", "Uniquement sur studentaid.gov", "Dans un SMS à un inconnu", "Sur n'importe quel site"], answer: 1, why: "Les informations privées ne vont que sur le site officiel." }
    ]
  }
};
