"use strict";

// Koach Learn course (French translation of youth/youth-ai-career-exploration.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-career-exploration-fr",
  lang: "fr",
  translationOf: "youth-ai-career-exploration",
  category: "Youth",
  name: "L'IA et la découverte des métiers",
  skills: "Trouver des métiers qui correspondent à vos centres d'intérêt, Se renseigner sur un métier avec des sources officielles, Voir comment l'IA change les métiers, Faire un plan de parcours professionnel, Se préparer à un premier emploi",
  outcome: "utiliser un questionnaire d'intérêts gratuit, un assistant d'IA et des sites officiels sur les métiers pour choisir deux métiers qui vous correspondent, vérifier leur salaire, leur formation et leurs perspectives, et faire un plan étape par étape du lycée jusqu'à votre premier emploi dans ce domaine.",
  about: [
    "Ce cours s'adresse aux jeunes de 13 à 18 ans environ qui se demandent : \"Qu'est-ce que je pourrais faire plus tard ?\" Vous n'avez pas besoin de le savoir déjà. Ce cours vous aide à explorer.",
    "Vous ferez un questionnaire d'intérêts gratuit, vous utiliserez l'IA pour trouver des idées de métiers qui correspondent à ce que vous aimez (jeux, musique, sport, aider les autres, construire des choses), vous vérifierez les vrais chiffres sur des sites officiels, vous verrez comment l'IA change le travail et vous construirez un plan à commencer dès cette année.",
    "Vérifiez la limite d'âge de chaque outil et les règles de votre école sur l'IA, et parlez-en à un parent ou tuteur avant de vous inscrire quelque part. Un conseiller d'orientation est aussi un excellent partenaire pour ce cours. Chaque leçon dure environ cinq minutes et se termine par une activité \"Essayez maintenant\".",
    "Les sites officiels cités sont américains. Si vous vivez dans un autre pays, cherchez aussi le site officiel d'orientation ou d'emploi de votre pays."
  ],
  finalTask: "Faites un plan de carrière d'une page pour un métier qui vous intéresse : pourquoi il correspond à vos centres d'intérêt, sa formation habituelle, son salaire et ses perspectives d'après un site officiel, une façon dont l'IA est utilisée dans ce travail, et trois étapes à faire cette année scolaire (un cours, un club ou une activité, et une personne à qui parler).",
  chapters: [
    {
      name: "Chapitre 1 : Trouver des métiers qui vous correspondent",
      lessons: [
        {
          title: "Partir de ce que vous aimez",
          minutes: 5,
          goal: "Faire un questionnaire d'intérêts gratuit et noter vos principaux centres d'intérêt.",
          text: [
            "Une bonne recherche de métier commence par vous : ce que vous aimez, ce que vous savez bien faire et ce qui compte pour vous. Peut-être que vous adorez réparer des choses, dessiner, organiser des événements, aider vos amis ou comprendre comment marche un jeu.",
            "My Next Move est un site gratuit sur les métiers du ministère du Travail des États-Unis (U.S. Department of Labor). Son questionnaire d'intérêts vous interroge sur les types de travail que vous pourriez aimer et propose des métiers qui correspondent. Votre conseiller d'orientation a peut-être d'autres questionnaires.",
            "Notez vos résultats et les trois activités que vous préférez. Ce sont vos premiers indices."
          ],
          steps: ["Allez sur mynextmove.org.", "Ouvrez le questionnaire d'intérêts et répondez honnêtement.", "Notez vos principaux domaines d'intérêt.", "Ajoutez les trois activités que vous préférez."],
          words: [["Questionnaire d'intérêts", "un quiz qui relie ce que vous aimez à des types de travail."], ["Métier", "le type de travail que vous faites longtemps, souvent avec des compétences qui grandissent."]],
          sources: [{ name: "My Next Move (ministère du Travail des États-Unis)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Partez de vous", bullets: ["Ce que vous aimez", "Ce que vous savez bien faire", "Ce qui compte pour vous"] },
            { title: "Faites un questionnaire gratuit", bullets: ["My Next Move (mynextmove.org)", "Gratuit, du ministère du Travail des États-Unis", "Votre conseiller en a peut-être d'autres"] },
            { title: "Notez vos indices", bullets: ["Vos principaux domaines d'intérêt", "Trois activités que vous adorez"] }
          ],
          tryIt: "Faites le questionnaire d'intérêts sur mynextmove.org (ou celui que vous donne votre conseiller). Notez vos principaux domaines d'intérêt et trois choses que vous adorez faire.",
          youCanNow: "décrire vos centres d'intérêt d'une façon qui vous aide à chercher des métiers."
        },
        {
          title: "Trouver des idées de métiers avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour transformer vos centres d'intérêt en une liste de métiers à explorer.",
          text: [
            "Donnez maintenant vos indices à un assistant d'IA que vous avez le droit d'utiliser : \"J'ai 15 ans. J'aime les jeux vidéo, le dessin et aider les plus petits. Propose 10 métiers qui mélangent tout ça, avec des formations courtes et d'autres qui demandent des études supérieures.\"",
            "Posez d'autres questions : \"Lesquels utilisent l'IA ?\" \"Lesquels puis-je essayer au lycée ?\" \"Explique à quoi ressemble une journée dans le métier 3.\"",
            "L'IA est bonne pour les idées mais peut se tromper sur les salaires, les formations et le nombre d'emplois. Considérez sa liste comme des idées à vérifier, pas comme des faits."
          ],
          steps: ["Donnez à l'IA votre tranche d'âge et vos centres d'intérêt (aucun détail privé).", "Demandez 10 métiers avec des formations différentes.", "Posez des questions sur une journée type et sur ce que vous pouvez faire au lycée.", "Choisissez-en deux à étudier."],
          words: [["Parcours de formation", "les études ou la pratique nécessaires pour un métier, comme un certificat, un apprentissage ou un diplôme universitaire."], ["Apprentissage", "un emploi payé où vous apprenez un métier manuel ou technique en travaillant."]],
          slides: [
            { title: "Donnez vos indices à l'IA", bullets: ["Vos centres d'intérêt et votre tranche d'âge", "Demandez 10 métiers", "Formations courtes et études supérieures"] },
            { title: "Posez d'autres questions", bullets: ["\"À quoi ressemble une journée ?\"", "\"Que puis-je essayer au lycée ?\""] },
            { title: "Des idées, pas des faits", bullets: ["L'IA peut se tromper sur salaires et formations", "Choisissez deux métiers à vérifier"] }
          ],
          tryIt: "Donnez vos centres d'intérêt à un assistant d'IA et demandez 10 métiers avec des formations différentes. Demandez à quoi ressemble une journée dans deux d'entre eux, puis choisissez vos deux préférés.",
          youCanNow: "utiliser l'IA pour trouver des métiers qui correspondent à vos centres d'intérêt."
        },
        {
          title: "Vérifier les faits sur des sites officiels",
          minutes: 5,
          goal: "Trouver le salaire, la formation et les perspectives d'un métier sur un site officiel.",
          text: [
            "L'Occupational Outlook Handbook du Bureau des statistiques du travail des États-Unis (Bureau of Labor Statistics, bls.gov/ooh) est un guide officiel et gratuit sur des centaines de métiers. Pour chacun, il donne le salaire habituel, les études et la formation nécessaires et le nombre d'emplois attendus à l'avenir.",
            "My Next Move montre aussi ce que font les gens dans chaque métier, les compétences qu'ils utilisent et la formation dont ils ont besoin. Les salaires changent avec le temps et selon les endroits : cherchez toujours les chiffres actuels au lieu de croire un chiffre donné par l'IA ou un ami.",
            "Comparez ce que l'IA vous a dit avec ce que dit le site officiel. S'ils ne sont pas d'accord, faites confiance au site officiel."
          ],
          steps: ["Ouvrez bls.gov/ooh ou mynextmove.org.", "Cherchez votre métier.", "Notez le salaire, la formation habituelle et les perspectives.", "Comparez avec ce qu'a dit l'IA et faites confiance au site officiel."],
          words: [["Salaire médian", "le salaire du milieu : la moitié des travailleurs gagnent plus, l'autre moitié gagnent moins."], ["Perspectives d'emploi", "le nombre d'emplois attendus à l'avenir."]],
          sources: [{ name: "Occupational Outlook Handbook (Bureau des statistiques du travail des États-Unis)", url: "https://www.bls.gov/ooh/" }, { name: "My Next Move (ministère du Travail des États-Unis)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Les guides officiels des métiers", bullets: ["bls.gov/ooh : salaire, formation, perspectives", "mynextmove.org : tâches, compétences, formation"] },
            { title: "Cherchez les chiffres actuels", bullets: ["Les salaires changent avec le temps et le lieu", "Ne croyez pas un chiffre donné seulement par l'IA"] },
            { title: "Comparez et décidez", bullets: ["L'IA contre le site officiel", "En cas de désaccord, croyez le site officiel"] }
          ],
          tryIt: "Cherchez vos deux métiers sur bls.gov/ooh ou mynextmove.org. Notez pour chacun la formation habituelle, le salaire et les perspectives, et une chose que l'IA a dite différemment.",
          youCanNow: "vérifier les vrais chiffres d'un métier sur un site officiel."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver des métiers qui vous correspondent",
        questions: [
          { q: "Que fait un questionnaire d'intérêts ?", options: ["Il trouve votre mot de passe", "Il relie ce que vous aimez à des types de travail", "Il vous donne un emploi", "Il note vos devoirs"], answer: 1, why: "Il propose des métiers à partir de vos centres d'intérêt." },
          { q: "Qui propose My Next Move ?", options: ["Une entreprise de jeux vidéo", "Un réseau social", "La cantine de votre école", "Le ministère du Travail des États-Unis"], answer: 3, why: "Le site est soutenu par le ministère du Travail des États-Unis." },
          { q: "Quelle demande est la meilleure pour trouver des idées de métiers ?", options: ["\"J'aime les jeux, le dessin et aider les enfants. Propose 10 métiers avec des formations différentes.\"", "\"métiers\"", "\"donne-moi un travail\"", "\"c'est quoi le travail\""], answer: 0, why: "Elle donne vos centres d'intérêt et demande de la variété." },
          { q: "L'IA dit qu'un métier paie une certaine somme. Vous devez :", options: ["La croire", "Le dire à tout le monde", "Vérifier le salaire actuel sur un site officiel", "Choisir ce métier tout de suite"], answer: 2, why: "L'IA peut se tromper ; les sites officiels ont les chiffres actuels." },
          { q: "Qu'est-ce que le salaire médian ?", options: ["Le salaire le plus haut", "Le salaire le plus bas", "Le salaire du milieu : la moitié gagne plus, l'autre moins", "Le salaire des stagiaires seulement"], answer: 2, why: "La médiane est le point du milieu." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier votre parcours",
      lessons: [
        {
          title: "Comment l'IA change le travail",
          minutes: 5,
          goal: "Décrire une façon dont l'IA est utilisée dans un métier qui vous plaît et les compétences humaines qui comptent toujours.",
          text: [
            "L'IA change beaucoup de métiers. Les infirmiers l'utilisent pour les dossiers, les mécaniciens pour trouver les pannes, les designers pour essayer des idées vite, et les studios de jeux pour tester des niveaux. Certaines tâches sont faites par l'IA ; de nouvelles tâches apparaissent.",
            "Les compétences humaines comptent encore plus : parler avec les gens, résoudre des problèmes nouveaux, être créatif, être fiable et savoir quand l'IA se trompe.",
            "Demandez à l'IA : \"Comment l'IA est-elle utilisée aujourd'hui dans [métier] ? Quelles compétences humaines restent les plus importantes ?\" Puis vérifiez sa réponse auprès d'une vraie personne qui fait ce métier ou sur un site d'actualité ou professionnel fiable."
          ],
          words: [["Automatisation", "quand des machines ou des logiciels font des tâches que des personnes faisaient avant."], ["Savoir-être", "les compétences relationnelles comme la communication, le travail d'équipe et la fiabilité."]],
          slides: [
            { title: "L'IA change les métiers", bullets: ["Infirmiers, mécaniciens, designers, testeurs de jeux", "Des tâches passent à l'IA ; d'autres apparaissent"] },
            { title: "Les compétences humaines comptent plus", bullets: ["Parler avec les gens", "Résoudre des problèmes nouveaux", "Créativité et fiabilité", "Voir quand l'IA se trompe"] },
            { title: "Renseignez-vous pour votre métier", bullets: ["Demandez à l'IA comment elle y est utilisée", "Vérifiez auprès d'une vraie personne ou d'un site fiable"] }
          ],
          tryIt: "Demandez à l'IA comment l'IA est utilisée dans l'un de vos deux métiers et quelles compétences humaines comptent le plus. Notez une utilisation de l'IA, deux compétences humaines et une question que vous poseriez à une vraie personne de ce métier.",
          youCanNow: "expliquer comment l'IA touche un métier et quelles compétences humaines comptent toujours."
        },
        {
          title: "Construire un parcours à partir du lycée",
          minutes: 5,
          goal: "Faire un plan étape par étape d'aujourd'hui jusqu'à un premier emploi dans un métier.",
          text: [
            "Un parcours professionnel est la route entre là où vous êtes aujourd'hui et le métier que vous voulez. Il peut comprendre des cours, des clubs, du bénévolat, un programme d'été, un certificat, un apprentissage, un établissement d'études courtes (community college) ou une université.",
            "Demandez à l'IA : \"Je suis en seconde (10th grade) et je voudrais devenir électricien. Fais-moi un parcours étape par étape d'aujourd'hui jusqu'à mon premier emploi, avec des choses à faire cette année.\" Puis vérifiez les règles de formation sur des sites officiels, car les licences et les programmes changent selon l'État ou le pays.",
            "Votre conseiller d'orientation peut vous dire quels cours et programmes propose votre école, comme l'enseignement professionnel et technique (CTE) ou la double inscription (dual enrollment)."
          ],
          steps: ["Donnez votre classe et le métier visé.", "Demandez à l'IA un parcours étape par étape avec des actions pour cette année.", "Vérifiez les règles de formation et de licence sur des sites officiels.", "Demandez à votre conseiller ce que propose votre école."],
          words: [["Parcours professionnel", "les étapes entre l'école et un emploi dans un domaine."], ["CTE", "enseignement professionnel et technique : des cours à l'école qui apprennent des compétences pour un métier."], ["Double inscription", "suivre des cours universitaires tout en étant encore au lycée."]],
          slides: [
            { title: "Un parcours est une route", bullets: ["De là où vous êtes au métier que vous voulez", "Cours, clubs, programmes, formation"] },
            { title: "Demandez les étapes à l'IA", bullets: ["Votre classe et le métier visé", "Ce que vous pouvez faire cette année"] },
            { title: "Vérifiez et demandez", bullets: ["Licences et programmes changent selon l'État", "Parlez CTE et double inscription au conseiller"] }
          ],
          tryIt: "Demandez à l'IA un parcours étape par étape vers l'un de vos métiers. Choisissez trois choses à faire cette année scolaire et vérifiez-en une avec votre conseiller ou sur un site officiel.",
          youCanNow: "construire un plan de parcours professionnel réaliste."
        },
        {
          title: "Se préparer à un premier emploi",
          minutes: 5,
          goal: "Connaître les règles de base sur le travail des jeunes et préparer une courte présentation de vous pour un premier emploi.",
          text: [
            "Un premier emploi, du bénévolat ou une journée d'observation vous aident à tester un métier. Aux États-Unis, la loi fédérale exige le plus souvent d'avoir au moins 14 ans. À 14 ou 15 ans, vos heures sont limitées, par exemple 3 heures maximum un jour d'école et seulement entre 7 h et 19 h la plus grande partie de l'année (jusqu'à 21 h du 1er juin à Labor Day, début septembre). À 16 et 17 ans, la loi fédérale ne limite pas les heures, mais personne de moins de 18 ans ne peut faire un travail dangereux.",
            "Beaucoup d'États ont des règles plus strictes et peuvent demander un permis de travail. Quand la loi fédérale et celle de l'État s'appliquent, c'est la plus stricte qui compte. Renseignez-vous auprès du service du travail de votre État et parlez-en à un parent ou tuteur. Si vous vivez dans un autre pays, cherchez les règles officielles sur le travail des jeunes dans votre pays.",
            "L'IA peut vous aider à écrire une courte présentation de vous : \"J'ai 15 ans, je suis fiable, j'aide à entraîner l'équipe de foot de mon petit frère et je veux apprendre le service client.\" Entraînez-vous à la dire à voix haute. Ne donnez pas votre adresse ni votre numéro de téléphone à l'IA."
          ],
          steps: ["Vérifiez les règles fédérales et celles de votre État sur le travail des jeunes.", "Parlez de travail ou de bénévolat avec un parent ou tuteur.", "Utilisez l'IA pour écrire une présentation de vous en 3 phrases.", "Entraînez-vous à la dire à voix haute."],
          words: [["Permis de travail", "un papier que certains États demandent avant qu'un adolescent puisse travailler."], ["Journée d'observation", "suivre un travailleur pendant une journée pour voir à quoi ressemble son métier."], ["Travail dangereux", "un travail risqué, interdit à toute personne de moins de 18 ans."]],
          sources: [{ name: "Ministère du Travail des États-Unis, fiche n° 43 : règles sur le travail des enfants hors agriculture", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }, { name: "Ministère du Travail des États-Unis : travail des enfants et lois des États", url: "https://www.dol.gov/agencies/whd/child-labor" }],
          slides: [
            { title: "Règles fédérales sur le travail des jeunes", bullets: ["La plupart des emplois : 14 ans et plus", "14-15 ans : 3 heures max un jour d'école", "14-15 ans : de 7 h à 19 h (21 h du 1er juin à Labor Day)", "Pas de travail dangereux avant 18 ans"] },
            { title: "Vérifiez votre État", bullets: ["Un permis de travail peut être demandé", "La règle la plus stricte compte", "Parlez-en à un parent ou tuteur"] },
            { title: "Votre présentation pour un premier emploi", bullets: ["3 phrases sur vous", "Écrite avec l'IA, sans détails privés", "Entraînez-vous à voix haute"] }
          ],
          tryIt: "Tâche finale : faites votre plan de carrière d'une page : pourquoi le métier vous correspond, sa formation, son salaire et ses perspectives d'après un site officiel, une façon dont l'IA y est utilisée, et trois étapes pour cette année scolaire. Ajoutez en bas votre présentation en 3 phrases pour un premier emploi.",
          youCanNow: "explorer des métiers, vérifier les faits, planifier votre parcours et vous présenter pour un premier emploi."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier votre parcours",
        questions: [
          { q: "Quelle compétence compte PLUS à mesure que l'IA se répand ?", options: ["Communiquer et résoudre des problèmes nouveaux", "Ignorer les gens", "Ne jamais apprendre de nouveaux outils", "Copier les réponses"], answer: 0, why: "Les compétences humaines prennent de la valeur quand l'IA fait les tâches répétitives." },
          { q: "Qu'est-ce qu'un parcours professionnel ?", options: ["Un sentier de randonnée", "Une carte de jeu vidéo", "Un type de CV", "Les étapes entre l'école et un emploi dans un domaine"], answer: 3, why: "Un parcours est la route d'aujourd'hui jusqu'au métier." },
          { q: "Qui peut vous dire quels cours CTE ou de double inscription propose votre école ?", options: ["Une publicité", "Votre conseiller d'orientation", "Une application au hasard", "Personne"], answer: 1, why: "Les conseillers connaissent les programmes de l'école." },
          { q: "Selon la loi fédérale américaine, un jeune de 15 ans peut travailler au maximum, un jour d'école :", options: ["3 heures", "8 heures", "12 heures", "Sans limite"], answer: 0, why: "La limite fédérale pour les 14-15 ans est de 3 heures un jour d'école." },
          { q: "La règle de votre État sur le travail des jeunes est plus stricte que la règle fédérale. Laquelle compte ?", options: ["La règle fédérale", "Aucune", "La règle la plus stricte", "Celle que préfère votre ami"], answer: 2, why: "Quand les deux s'appliquent, il faut suivre la plus stricte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et la découverte des métiers",
    questions: [
      { q: "Une bonne recherche de métier commence par :", options: ["Le métier le mieux payé seulement", "Ce que vous aimez et savez bien faire", "Un choix au hasard", "Ce que dit un inconnu"], answer: 1, why: "Vos centres d'intérêt sont les meilleurs premiers indices." },
      { q: "mynextmove.org est :", options: ["Un magasin de jeux", "Un site de rencontre", "Un réseau social", "Un site gratuit sur les métiers du ministère du Travail des États-Unis"], answer: 3, why: "Il est soutenu par le ministère du Travail." },
      { q: "Après un questionnaire d'intérêts, vous devez :", options: ["Oublier les résultats", "Publier votre mot de passe", "Quitter l'école", "Noter vos principaux domaines d'intérêt"], answer: 3, why: "Vos résultats sont des indices pour l'étape suivante." },
      { q: "Quand vous cherchez des métiers avec l'IA, ne donnez pas :", options: ["Vos centres d'intérêt", "Des détails privés comme votre adresse", "Votre tranche d'âge", "Votre matière préférée"], answer: 1, why: "Ne mettez jamais d'informations privées dans l'IA." },
      { q: "Un apprentissage est :", options: ["Un jeu vidéo", "Un test non payé", "Un emploi payé où vous apprenez un métier en travaillant", "Une résidence universitaire"], answer: 2, why: "Les apprentis gagnent de l'argent en apprenant." },
      { q: "La liste de métiers donnée par l'IA doit être vue comme :", options: ["Des idées à vérifier", "Des faits garantis", "Une offre d'emploi", "Une note scolaire"], answer: 0, why: "L'IA peut se tromper sur les salaires et les formations." },
      { q: "bls.gov/ooh montre pour chaque métier :", options: ["Des paroles de chansons", "Le salaire, la formation et les perspectives", "Des scores de jeux", "La météo"], answer: 1, why: "L'Occupational Outlook Handbook donne ces informations." },
      { q: "L'IA et bls.gov ne disent pas la même chose sur la formation d'un métier. Faites confiance à :", options: ["L'IA", "Aucun des deux", "Un mème", "Le site officiel"], answer: 3, why: "Les sites officiels sont vérifiés et à jour." },
      { q: "Les perspectives d'emploi, c'est :", options: ["Le nombre d'emplois attendus à l'avenir", "La vue depuis le bureau", "Votre tenue de travail", "L'humeur de votre patron"], answer: 0, why: "Les perspectives parlent du nombre d'emplois futurs." },
      { q: "L'automatisation, c'est :", options: ["Conduire une voiture", "Une règle de l'école", "Des machines ou logiciels qui font des tâches que des personnes faisaient avant", "Un style de musique"], answer: 2, why: "L'automatisation fait passer des tâches aux machines." },
      { q: "Lequel est un savoir-être ?", options: ["Seulement la vitesse de frappe", "Avoir un ordinateur portable", "Le travail d'équipe", "Connaître un mot de passe"], answer: 2, why: "Le savoir-être, ce sont les compétences relationnelles comme le travail d'équipe." },
      { q: "Pour vérifier ce que dit l'IA sur l'IA dans un métier, vous pouvez :", options: ["Demander à une vraie personne de ce métier", "La croire totalement", "Demander à une publicité", "Ne rien vérifier"], answer: 0, why: "Les gens du métier savent comment il se passe vraiment." },
      { q: "La double inscription, c'est :", options: ["Avoir deux casiers", "Avoir deux téléphones", "Avoir deux déjeuners", "Suivre des cours universitaires tout en étant au lycée"], answer: 3, why: "Les élèves gagnent des crédits universitaires plus tôt." },
      { q: "Pourquoi vérifier les licences sur des sites officiels ?", options: ["L'IA a toujours raison", "Les règles changent selon l'État", "Elles ne changent jamais", "Ce n'est pas utile"], answer: 1, why: "Les règles de formation et de licence varient selon l'État." },
      { q: "Une bonne demande de parcours à l'IA contient :", options: ["Votre classe et le métier visé", "Votre mot de passe", "Votre adresse", "Rien"], answer: 0, why: "La classe et l'objectif permettent à l'IA de faire un plan adapté." },
      { q: "Selon la loi fédérale américaine, les jeunes de 14 et 15 ans peuvent en général travailler seulement entre :", options: ["Minuit et 6 h", "N'importe quand", "7 h et 19 h (21 h du 1er juin à Labor Day)", "Seulement les jours d'école"], answer: 2, why: "Ce sont les limites horaires fédérales." },
      { q: "Selon la loi fédérale américaine, qui ne peut pas faire de travail dangereux ?", options: ["Seulement les moins de 12 ans", "Toute personne de moins de 18 ans", "Les adultes", "Personne"], answer: 1, why: "Les travaux dangereux sont interdits à toute personne de moins de 18 ans." },
      { q: "Avant de prendre un premier emploi, vous devez :", options: ["Mentir sur votre âge", "Sécher l'école", "Donner votre numéro de téléphone à l'IA", "Vérifier les règles de votre État et parler à un parent ou tuteur"], answer: 3, why: "Votre État peut demander un permis, et un parent ou tuteur doit être au courant." },
      { q: "Une journée d'observation, c'est :", options: ["Se cacher de son patron", "Un mode de jeu vidéo", "Un type de CV", "Suivre un travailleur pendant une journée pour voir son métier"], answer: 3, why: "L'observation permet de voir un métier de près." },
      { q: "Une présentation pour un premier emploi doit être :", options: ["Un texte de 10 pages", "Environ 3 phrases sur vous, répétées à voix haute", "Votre adresse et votre numéro de téléphone", "Écrite par l'IA et jamais relue"], answer: 1, why: "Courte et répétée, elle est facile à dire avec assurance." }
    ]
  }
};
