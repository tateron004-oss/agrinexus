"use strict";

// Koach Learn course (French translation of shared/ged-reasoning-language-arts.js). See scripts/koachlearn-courses/README.md, "Translations".
// The grammar examples stay in English inside quotes: the RLA grammar items this course practices test English.

const GED_SUBJECTS = { name: "GED Testing Service : matières de l'examen (durée, types de questions, rédaction)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service : Reasoning Through Language Arts (raisonnement et langue)", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service : les scores", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service : tests d'entraînement gratuits (en anglais et en espagnol)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, le test d'entraînement officiel", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, un autre examen d'équivalence du diplôme de fin d'études secondaires (site officiel)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-fr",
  lang: "fr",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Préparation au GED : Raisonnement et langue (Reasoning Through Language Arts)",
  skills: "Trouver l'idée principale et les preuves, Faire des déductions, Corriger la grammaire et la ponctuation, Évaluer des arguments et des preuves, Rédiger la réponse développée, Faire un plan de révision",
  outcome: "lire un texte et répondre à des questions de type GED sur son idée principale, ses preuves et sa grammaire, et rédiger en 45 minutes une réponse développée d'entraînement qui choisit l'argument le mieux appuyé et explique pourquoi avec des preuves.",
  about: [
    "Ce cours s'adresse aux adultes qui préparent l'épreuve GED Reasoning Through Language Arts (RLA, raisonnement et langue) : personnes en recherche d'emploi, personnes qui sortent de prison, anciens militaires, jeunes adultes, immigrés et toute personne qui reprend ses études. Le GED est un examen américain d'équivalence du diplôme de fin d'études secondaires. Son diplôme peut ouvrir la porte à des emplois, à des formations et à l'université.",
    "Ce cours vous prépare à l'examen. Il ne vous donne pas le diplôme du GED. L'organisme GED Testing Service organise l'examen, et votre État fixe les règles pour le passer. Certains États utilisent un autre examen appelé HiSET. Consultez ged.com et le service d'éducation des adultes de votre État pour connaître les règles, les frais et les dates en vigueur.",
    "Vous apprendrez comment fonctionne l'examen, à lire pour trouver l'idée principale et les preuves, à corriger les fautes de grammaire courantes, à évaluer des arguments et à rédiger la réponse développée (la rédaction). Chaque leçon contient des exemples corrigés, un exercice \"Essayez maintenant\" avec les réponses expliquées, et un contrôle rapide de deux questions.",
    "Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. La tâche finale est une rédaction d'entraînement que vous écrivez en 45 minutes et que vous notez avec une grille d'évaluation."
  ],
  finalTask: "Rédigez en 45 minutes une réponse développée d'entraînement au GED sur les deux textes de la bibliothèque de la leçon 6. Choisissez l'argument qui a les meilleures preuves, expliquez pourquoi avec au moins deux preuves tirées des textes, et utilisez une introduction, des paragraphes de développement et une conclusion. Ensuite, relisez la grammaire et notez votre rédaction avec la grille d'évaluation du cours.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui préparent l'épreuve GED Reasoning Through Language Arts : personnes en recherche d'emploi, personnes qui sortent de prison, anciens militaires, jeunes adultes qui ont quitté l'école, immigrés et adultes qui reprennent leurs études après de nombreuses années.",
    startingPoint: "Ils savent lire des textes de tous les jours comme des panneaux, des formulaires et des articles courts. Beaucoup n'ont pas écrit de rédaction ni étudié la grammaire depuis des années, et certains sont stressés par les examens ou apprennent encore l'anglais.",
    gap: "Beaucoup d'emplois, de formations et d'universités demandent un diplôme de fin d'études secondaires ou un diplôme équivalent. Les apprenants doivent lire attentivement pour trouver des preuves, évaluer des arguments, utiliser une grammaire correcte et rédiger un texte en temps limité : des compétences évaluées à l'examen et utiles aussi au travail.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes dans les leçons ; les textes d'entraînement sont courts",
      "Appareils : un téléphone, un ordinateur de bibliothèque, ou du papier et un stylo",
      "Temps : leçons de 4 à 6 minutes, à placer entre le travail, les rendez-vous et la famille",
      "Les règles, les frais et l'examen utilisé par chaque État (GED ou HiSET) changent ; les apprenants vérifient sur ged.com et auprès de leur État",
      "Certains apprenants ont peur des examens ; l'entraînement se fait sans enjeu et les réponses sont expliquées"
    ],
    prerequisites: "Aucun. Les apprenants dont le niveau de lecture est inférieur à celui d'un élève de 11 ou 12 ans (6e année aux États-Unis) peuvent suivre en même temps un cours de lecture pour adultes."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À l'aide du site officiel du GED", action: "nommer les parties, les types de questions et la durée de l'épreuve de langue du GED, et écrire un plan de révision avec des dates", standard: "en nommant chaque partie de l'épreuve et en prévoyant au moins une date de révision chaque semaine jusqu'à l'examen" },
    { id: "O2", condition: "À partir d'un texte court", action: "repérer l'idée principale, les détails qui l'appuient et une déduction appuyée par des preuves", standard: "en montrant la phrase exacte qui justifie chaque réponse" },
    { id: "O3", condition: "À partir de phrases qui contiennent des fautes", action: "corriger les fautes de grammaire, de ponctuation, de majuscules et de choix des mots", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O4", condition: "À partir d'un argument court", action: "repérer l'affirmation et les preuves, et classer chaque preuve comme solide ou faible", standard: "en donnant une raison pour chaque classement" },
    { id: "O5", condition: "À partir de deux textes qui ne sont pas d'accord, avec un minuteur de 45 minutes", action: "rédiger une réponse développée qui choisit l'argument le mieux appuyé et explique pourquoi avec des preuves", standard: "avec une introduction, au moins deux preuves tirées des textes et une conclusion" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Lire attentivement et écrire correctement",
      lessons: [
        {
          title: "Comment fonctionne l'épreuve de langue du GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les parties de l'épreuve de langue du GED et écrire un plan de révision avec des dates.",
          text: [
            "Le GED comprend quatre épreuves : Mathématiques, Reasoning Through Language Arts (RLA, raisonnement et langue), Sciences et Sciences sociales. Vous pouvez les passer une par une. L'organisme GED Testing Service prépare l'examen. Certains États utilisent un autre examen d'équivalence, HiSET : vérifiez donc quel examen votre État utilise.",
            "Sur ged.com, l'épreuve RLA dure 150 minutes en trois sections, avec une pause de 10 minutes entre les parties 2 et 3. Elle porte sur la lecture pour comprendre le sens, le repérage et la construction d'arguments, et la grammaire et la langue. Une section est une rédaction, appelée réponse développée (extended response), en 45 minutes.",
            "La plupart des questions sont à choix multiple. D'autres vous demandent de glisser-déposer, de sélectionner une zone de l'écran ou de choisir dans une liste déroulante au milieu d'une phrase. Ged.com indique un score de réussite de 145 pour chaque matière. Les durées et les règles peuvent changer : vérifiez sur ged.com avant de vous inscrire.",
            "Un plan vaut mieux que tout réviser au dernier moment. De courtes séances quatre ou cinq jours par semaine marchent mieux qu'une seule longue nuit. Ged.com propose des tests d'entraînement gratuits et un test d'entraînement officiel, GED Ready, qui montre si vous avez de bonnes chances de réussir."
          ],
          steps: ["Allez sur ged.com et lisez la page Reasoning Through Language Arts.", "Notez la durée, les sections et les types de questions.", "Faites le test d'entraînement RLA gratuit pour voir où vous en êtes.", "Choisissez une semaine cible pour l'examen et comptez les semaines qui restent.", "Notez au moins une date de révision chaque semaine, avec la leçon ou la compétence du jour."],
          words: [["GED", "un examen américain d'équivalence du diplôme de fin d'études secondaires ; réussir les quatre matières donne un diplôme que beaucoup d'employeurs et d'universités acceptent comme un diplôme de fin d'études."], ["HiSET", "un autre examen d'équivalence utilisé par certains États."], ["Réponse développée", "le nom que le GED donne à la rédaction que vous écrivez pendant l'examen."], ["Liste déroulante", "une liste qui s'ouvre quand vous cliquez dessus, pour choisir une réponse."], ["Plan de révision", "un calendrier de ce que vous allez travailler et quand."]],
          slides: [
            { title: "Quatre matières au GED", bullets: ["Mathématiques", "Reasoning Through Language Arts (RLA)", "Sciences", "Sciences sociales"] },
            { title: "L'épreuve RLA (vérifiez sur ged.com)", bullets: ["150 minutes, trois sections, une pause de 10 minutes", "Lecture pour comprendre, arguments, grammaire", "Une rédaction : la réponse développée, 45 minutes"] },
            { title: "Types de questions", bullets: ["Choix multiple", "Glisser-déposer", "Sélectionner une zone", "Liste déroulante"] },
            { title: "Faites un plan", bullets: ["Faites d'abord le test d'entraînement gratuit", "Choisissez une semaine cible pour l'examen", "Révisez un peu, presque tous les jours de la semaine"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ouvrez ged.com et faites le test d'entraînement RLA gratuit (ou lisez la page RLA si vous ne pouvez pas le faire maintenant). Ensuite, écrivez votre plan de révision : votre semaine cible pour l'examen, et une date chaque semaine avec la compétence à travailler (lecture, grammaire, arguments ou rédaction). Gardez-le ; vous allez le compléter.",
          youCanNow: "nommer les parties de l'épreuve de langue du GED et suivre un plan de révision avec des dates.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que la réponse développée à l'épreuve de langue du GED ?", options: ["Une liste de mots de vocabulaire", "Un entretien oral", "La rédaction que vous écrivez pendant l'examen", "Une section de mathématiques"], answer: 2, why: "Ged.com appelle la rédaction écrite la réponse développée (extended response)." },
            { objective: "O1", q: "Votre examen est dans 8 semaines. Quel plan est le meilleur ?", options: ["Réviser 30 minutes quatre jours par semaine, avec une compétence pour chaque jour", "Réviser toute la nuit la veille", "Passer l'examen sans entraînement pour voir ce qui se passe", "Lire seulement les conseils pour la rédaction"], answer: 0, why: "Un entraînement court et régulier, avec une compétence prévue chaque jour, est plus efficace que tout réviser au dernier moment." }
          ]
        },
        {
          title: "Idée principale, détails et déductions",
          objectives: ["O2"],
          minutes: 6,
          goal: "Repérer l'idée principale, deux détails qui l'appuient et une déduction dans un texte court.",
          text: [
            "L'idée principale, c'est ce dont parle surtout le texte entier. Les détails qui l'appuient sont les faits, les exemples et les raisons qui la soutiennent. Demandez-vous : \"Si je devais dire ce texte en une seule phrase, que dirais-je ?\"",
            "Exemple corrigé. Texte : \"Beaucoup d'entrepôts fonctionnent maintenant toute la nuit. Le travail de nuit paie souvent plus par heure. Mais les travailleurs de nuit disent avoir plus de mal à dormir, et certains disent qu'il est plus difficile de voir leur famille.\" Idée principale : le travail de nuit paie plus, mais il a un coût pour les travailleurs. Détails : il paie plus ; les travailleurs dorment mal ; le temps en famille est plus difficile.",
            "Une déduction est une supposition intelligente fondée sur des indices du texte. Elle n'est pas écrite mot pour mot, mais le texte l'appuie. Ici, vous pouvez déduire qu'un travailleur avec de jeunes enfants pourrait hésiter avant d'accepter un poste de nuit. Vous ne pouvez pas déduire que le travail de nuit est interdit par la loi ; rien ne le dit.",
            "À l'examen, montrez toujours la phrase qui prouve votre réponse. Si vous ne pouvez pas la montrer, la réponse est probablement fausse."
          ],
          steps: ["Lisez d'abord la question, pour savoir quoi chercher.", "Lisez le texte une fois en entier.", "Dites l'idée principale en une phrase.", "Trouvez deux détails qui l'appuient.", "Pour une déduction, choisissez la réponse que le texte appuie et trouvez la phrase qui la prouve."],
          words: [["Idée principale", "ce dont parle surtout un texte."], ["Détail d'appui", "un fait, un exemple ou une raison qui soutient l'idée principale."], ["Déduction", "une conclusion que vous tirez d'indices du texte."], ["Preuve", "les mots du texte qui prouvent une réponse."]],
          slides: [
            { title: "Idée principale", bullets: ["Ce dont parle surtout le texte", "Dites-la en une phrase"] },
            { title: "Détails d'appui", bullets: ["Faits, exemples et raisons", "Ils soutiennent l'idée principale"] },
            { title: "Déduction", bullets: ["Une supposition intelligente à partir d'indices du texte", "Pas écrite mot pour mot", "Le texte doit l'appuyer"] },
            { title: "Prouvez-le", bullets: ["Montrez la phrase qui prouve votre réponse", "Pas de phrase à montrer ? Choisissez à nouveau"] }
          ],
          tryIt: "Texte d'entraînement : \"La ville a ouvert trois nouveaux centres de rafraîchissement cet été. Les jours où il faisait plus de 100 degrés Fahrenheit, ils sont restés ouverts jusqu'à 22 h. Les visites ont été les plus nombreuses chez les personnes âgées et les personnes sans climatisation.\" 1) Idée principale ? 2) Deux détails ? 3) Quelle déduction est appuyée : (a) la ville veut protéger les gens de la chaleur, ou (b) les centres coûtent trop cher ? Réponses : 1) La ville a ouvert des centres de rafraîchissement pour aider les gens pendant les fortes chaleurs. 2) Ouverts jusqu'à 22 h les jours très chauds ; la plupart des visiteurs étaient des personnes âgées et des personnes sans climatisation. 3) (a). Rien dans le texte ne parle du coût.",
          youCanNow: "trouver l'idée principale, les détails et une déduction appuyée, et montrer la preuve.",
          quickCheck: [
            { objective: "O2", q: "Un texte dit qu'une boulangerie a ajouté une équipe du soir, embauché cinq personnes et vendu 30 % de pain en plus. Quelle est l'idée principale ?", options: ["Le pain est bon pour la santé", "Ajouter une équipe du soir a aidé la boulangerie à se développer", "Cinq personnes ont été embauchées", "Les boulangeries ferment la nuit"], answer: 1, why: "Tout le texte parle de l'équipe du soir qui aide la boulangerie ; les embauches et les ventes sont des détails." },
            { objective: "O2", q: "Laquelle est une déduction, et non un détail écrit dans le texte ?", options: ["Un fait copié mot pour mot dans le texte", "Le titre du texte", "Le nombre de paragraphes", "Une conclusion que vous tirez des indices donnés par le texte"], answer: 3, why: "Une déduction est une conclusion appuyée par des indices, pas un fait dit directement." }
          ]
        },
        {
          title: "Corriger la grammaire et la ponctuation",
          objectives: ["O3"],
          minutes: 6,
          goal: "Corriger cinq types de fautes courantes de grammaire et de ponctuation dans des phrases.",
          text: [
            "Beaucoup de questions RLA montrent une phrase avec une liste déroulante et demandent quelle version est correcte. Quelques fautes reviennent sans cesse. Apprenez-les et vous gagnerez beaucoup de points. Les exemples sont en anglais, entre guillemets, car cette partie de l'examen évalue la grammaire anglaise.",
            "1) Le sujet et le verbe s'accordent : \"The list of jobs is long\" (le sujet est list, pas jobs). 2) Phrases complètes : \"Because the bus was late.\" est un fragment ; corrigez-le : \"I was late because the bus was late.\" 3) Phrases soudées : \"I applied I got the job\" a besoin d'un point, d'un point-virgule ou d'un mot de liaison : \"I applied, and I got the job.\"",
            "4) Les mots qui se prononcent pareil : their (leur), there (là), they're (they are, ils sont) ; its (son, sa), it's (it is, c'est) ; your (ton, votre), you're (you are, tu es). 5) Majuscules et apostrophes : en anglais, les noms de personnes, de lieux et de jours prennent une majuscule (Monday, Texas) ; l'apostrophe montre la possession (the manager's office) ou une lettre qui manque (don't), pas un pluriel (two shifts, et non two shift's).",
            "Les mots de liaison relient les idées : however (mais), therefore (donc), for example (par exemple), in addition (de plus). Choisissez celui qui correspond au sens entre les deux phrases."
          ],
          steps: ["Lisez toute la phrase, pas seulement la partie soulignée.", "Trouvez le sujet et le verbe, et vérifiez qu'ils s'accordent.", "Vérifiez que c'est une phrase complète et non deux phrases soudées.", "Vérifiez les mots qui se prononcent pareil, les majuscules et les apostrophes.", "Relisez la phrase avec le choix que vous avez fait pour être sûr qu'elle sonne juste."],
          words: [["Sujet", "qui ou quoi fait l'action, ou de qui parle la phrase."], ["Verbe", "le mot d'action ou d'état, comme runs ou is."], ["Fragment", "un morceau de phrase qui ne peut pas tenir seul."], ["Phrases soudées", "deux phrases collées sans la bonne ponctuation (en anglais, run-on)."], ["Mot de liaison", "un mot qui relie deux idées, comme however ou therefore."]],
          slides: [
            { title: "Cinq fautes à repérer", bullets: ["Sujet et verbe qui ne s'accordent pas", "Fragments et phrases soudées", "Mots qui se prononcent pareil", "Majuscules et apostrophes"] },
            { title: "Mots qui se prononcent pareil", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apostrophes", bullets: ["Possession : the manager's office", "Lettre qui manque : don't, it's", "Jamais pour un simple pluriel : two shifts"] },
            { title: "Mots de liaison", bullets: ["however = mais", "therefore = donc", "for example (par exemple), in addition (de plus)"] }
          ],
          tryIt: "Corrigez chaque phrase. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Réponses : 1) \"is\" (le sujet est box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (possession). 5) Ajoutez une idée principale : \"I signed up for class because I wanted to learn.\"",
          youCanNow: "repérer et corriger les fautes de grammaire et de ponctuation les plus courantes à l'examen.",
          quickCheck: [
            { objective: "O3", q: "Quelle phrase est correcte ?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "Le sujet est team (un seul groupe), donc le verbe est is." },
            { objective: "O3", q: "Quel mot convient : \"___ going to start training on Monday.\" ?", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're veut dire they are : they are going to start training." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Lire attentivement et écrire correctement",
        questions: [
          { objective: "O1", q: "D'après ged.com, quels types de questions trouve-t-on à l'épreuve de langue du GED ?", options: ["Seulement vrai ou faux", "Seulement des réponses orales", "Seulement des rédactions", "Choix multiple, glisser-déposer, sélection d'une zone, liste déroulante et une rédaction"], answer: 3, why: "Ged.com cite ces types de questions, plus une réponse développée." },
          { objective: "O2", q: "Un texte dit qu'un centre de santé a ouvert le samedi et que les visites de parents qui travaillent ont doublé. Quelle déduction est appuyée ?", options: ["Beaucoup de parents qui travaillent ne pouvaient pas venir en semaine", "Le centre de santé va bientôt fermer", "Le samedi est un jour férié", "Les médecins n'aiment pas le samedi"], answer: 0, why: "Plus de parents qui travaillent sont venus quand le samedi a ouvert, ce qui laisse penser que la semaine était difficile pour eux." },
          { objective: "O2", q: "Comment vérifiez-vous que votre réponse sur un texte est juste ?", options: ["Choisir la réponse la plus longue", "Montrer la phrase du texte qui la prouve", "Choisir la réponse que vous préférez", "Choisir C à chaque fois"], answer: 1, why: "Une bonne réponse est appuyée par des mots du texte." },
          { objective: "O3", q: "Quelle phrase est correcte ?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its sans apostrophe exprime la possession (son, sa)." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" Quel est le problème ?", options: ["Ce sont des phrases soudées ; il faut un point ou un mot de liaison", "Un mot est mal écrit", "Test doit prendre une majuscule", "Il n'y a pas de problème"], answer: 0, why: "Deux phrases complètes sont collées sans rien entre elles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les arguments et la réponse développée",
      lessons: [
        {
          title: "Affirmations, preuves et raisons solides",
          objectives: ["O4"],
          minutes: 5,
          goal: "Repérer l'affirmation et les preuves dans un argument et classer chaque preuve comme solide ou faible.",
          text: [
            "Un argument cherche à vous convaincre. L'affirmation, c'est ce que l'auteur veut que vous croyiez. Les preuves sont ce qu'il utilise pour le démontrer.",
            "Une preuve solide est précise et peut être vérifiée : des chiffres tirés d'une étude ou d'un registre, des faits, ou un expert dans ce domaine. Une preuve faible est un sentiment, l'histoire d'une seule personne présentée comme valable pour tout le monde, une personne célèbre qui n'est pas experte, ou une affirmation sans preuve.",
            "Exemple corrigé. Affirmation : \"Notre ville devrait ajouter une ligne de bus vers la zone industrielle.\" Preuve A : \"Une enquête du comté auprès de 600 travailleurs montre que 1 sur 4 manque des journées de travail faute de transport.\" Solide : un chiffre tiré d'une enquête. Preuve B : \"Mon cousin dit que le bus serait bien.\" Faible : l'avis d'une seule personne.",
            "Attention aussi aux pièges : des phrases comme \"tout le monde sait\", les attaques contre une personne au lieu de son idée, et le fait de donner seulement deux choix quand il y en a plus."
          ],
          steps: ["Trouvez l'affirmation : que veut l'auteur que vous croyiez ?", "Soulignez chaque preuve.", "Demandez-vous : est-elle précise, et pourrais-je la vérifier ?", "Classez-la solide ou faible, et écrivez une raison."],
          words: [["Argument", "un texte qui cherche à vous convaincre de quelque chose."], ["Affirmation", "l'idée principale que l'auteur veut que vous croyiez."], ["Preuve solide", "des faits ou des chiffres précis que vous pourriez vérifier, ou un expert dans ce domaine."], ["Preuve faible", "des sentiments, une seule histoire, ou des affirmations sans preuve."]],
          slides: [
            { title: "Les parties d'un argument", bullets: ["Affirmation : ce que l'auteur veut que vous croyiez", "Preuves : ce qu'il utilise pour le démontrer"] },
            { title: "Preuves solides", bullets: ["Des chiffres tirés d'une étude ou d'un registre", "Des faits que vous pourriez vérifier", "Un expert dans ce domaine"] },
            { title: "Preuves faibles", bullets: ["Des sentiments ou \"tout le monde sait\"", "L'histoire d'une seule personne", "Une personne célèbre qui n'est pas experte"] },
            { title: "Attention aux pièges", bullets: ["Attaquer la personne, pas l'idée", "Seulement deux choix quand il y en a plus"] }
          ],
          tryIt: "Argument d'entraînement : \"La ville devrait planter plus d'arbres dans le centre. Une étude de la ville a mesuré que les rues avec des arbres sont environ 10 degrés Fahrenheit plus fraîches en été. Une chanteuse locale a dit que les arbres sont jolis. Tous ceux qui ne sont pas d'accord détestent simplement la nature.\" Trouvez l'affirmation et classez chaque appui. Réponses : Affirmation : planter plus d'arbres dans le centre. Étude de la ville : solide (un chiffre mesuré dans une étude). Chanteuse : faible (pas experte ; juste un avis). \"Tous ceux qui ne sont pas d'accord détestent la nature\" : faible (attaque les personnes au lieu de donner des preuves).",
          youCanNow: "trouver l'affirmation, séparer les preuves solides des faibles et dire pourquoi.",
          quickCheck: [
            { objective: "O4", q: "Quelle est la preuve la plus solide qu'un programme de formation professionnelle fonctionne ?", options: ["Le directeur dit qu'il est excellent", "Une célébrité l'aime bien", "Les registres montrent que 70 % des diplômés ont trouvé un emploi en six mois", "Tout le monde sait qu'il fonctionne"], answer: 2, why: "C'est un chiffre précis tiré de registres, qu'on peut vérifier." },
            { objective: "O4", q: "\"Mon voisin est tombé malade après avoir mangé là-bas, donc ce restaurant est dangereux.\" Quel type de preuve est-ce ?", options: ["Une preuve d'expert", "Une étude", "Des données officielles", "Faible : l'histoire d'une seule personne"], answer: 3, why: "Une seule histoire ne prouve rien sur tous les repas servis là-bas." }
          ]
        },
        {
          title: "Comparer deux arguments et préparer votre rédaction",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Comparer deux arguments et écrire un court plan pour une réponse développée.",
          text: [
            "À l'examen, vous lisez deux textes qui défendent des positions différentes. Ged.com indique que vous les analysez, que vous décidez quel argument a les preuves les plus convaincantes et que vous expliquez pourquoi. On ne vous demande pas avec quelle position vous êtes d'accord ; vous jugez les preuves.",
            "Utilisez un tableau simple. Pour chaque texte, notez l'affirmation, les preuves, et une marque solide ou faible. Le texte qui a le plus de preuves solides est en général votre choix, même si vous pensez personnellement le contraire.",
            "Prenez environ 10 minutes pour faire votre plan : 1) votre thèse, une phrase qui dit quel argument est le mieux appuyé ; 2) deux ou trois preuves tirées de ce texte et pourquoi elles sont solides ; 3) une faiblesse de l'autre texte.",
            "Les textes d'entraînement sont dans la leçon 6. Aujourd'hui, entraînez-vous avec le tableau sur deux courts articles d'opinion qui ne sont pas d'accord, par exemple deux courriers des lecteurs."
          ],
          steps: ["Lisez les deux textes et trouvez chaque affirmation.", "Faites un tableau à deux colonnes : les preuves de chaque texte.", "Marquez chaque preuve solide ou faible.", "Écrivez une phrase de thèse : quel argument est le mieux appuyé.", "Notez les preuves que vous utiliserez dans chaque paragraphe de développement."],
          words: [["Thèse", "une phrase qui dit votre idée principale ; dans la rédaction du GED, quel argument est le mieux appuyé."], ["Analyser", "regarder de près les parties pour voir comment elles fonctionnent."], ["Paragraphe de développement", "un paragraphe du milieu qui donne une raison avec des preuves."]],
          slides: [
            { title: "Ce que demande la rédaction", bullets: ["Lire deux textes qui ne sont pas d'accord", "Décider lequel a les preuves les plus convaincantes", "Expliquer pourquoi ; pas quelle position vous préférez"] },
            { title: "Faites un tableau", bullets: ["L'affirmation de chaque texte", "Ses preuves", "Solide ou faible ?"] },
            { title: "Faites votre plan en 10 minutes environ", bullets: ["Thèse : quel argument est le mieux appuyé", "2 ou 3 preuves et pourquoi elles sont solides", "Une faiblesse de l'autre texte"] }
          ],
          sources: [GED_RLA],
          tryIt: "Entraînement : le texte 1 dit que la semaine de quatre jours est une bonne chose et cite un registre d'entreprise : les jours d'arrêt maladie sont passés de 6 à 4 par travailleur en un an. Le texte 2 dit que c'est une mauvaise chose parce que \"les travailleurs vont devenir paresseux\" et qu'un responsable \"a l'impression\" que la production va baisser. Écrivez une thèse. Réponse : \"Le texte 1 est mieux appuyé, car il utilise les registres de l'entreprise sur les arrêts maladie, alors que le texte 2 repose sur des impressions sans données.\"",
          youCanNow: "comparer deux arguments avec un tableau et écrire une thèse et un plan pour votre rédaction.",
          quickCheck: [
            { objective: "O5", q: "Que vous demande la réponse développée du GED ?", options: ["Raconter l'histoire de votre vie", "Décider quel argument a les preuves les plus convaincantes et expliquer pourquoi", "Résumer un roman", "Écrire un poème"], answer: 1, why: "Ged.com indique que vous analysez deux textes et expliquez quel argument a les meilleures preuves." },
            { objective: "O4", q: "Vous êtes d'accord avec le texte B, mais le texte A a plus de preuves solides. Quel texte votre thèse doit-elle choisir ?", options: ["Le texte A, parce qu'il est mieux appuyé", "Le texte B, parce que vous êtes d'accord avec lui", "Aucun des deux", "Les deux à égalité"], answer: 0, why: "La rédaction juge les preuves, pas votre opinion sur le sujet." }
          ]
        },
        {
          title: "Rédiger la réponse développée en 45 minutes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rédiger en temps limité une réponse développée qui choisit l'argument le mieux appuyé et explique pourquoi avec des preuves.",
          text: [
            "Utilisez une structure simple. Introduction (2 à 3 phrases) : présentez le sujet et donnez votre thèse. Paragraphes de développement (deux ou trois) : chacun donne une raison, cite ou décrit une preuve du texte, et explique pourquoi elle est solide ou faible. Conclusion (2 phrases) : redites votre thèse avec d'autres mots.",
            "Textes d'entraînement (inventés pour ce cours). Texte A, de la bibliothécaire de la ville : \"Gardons la bibliothèque centrale ouverte jusqu'à 21 h. Pendant un essai de trois mois, notre compteur à l'entrée a enregistré environ 340 visites après 18 h chaque semaine. Notre registre des ordinateurs montre que 6 séances de recherche d'emploi sur 10 ont eu lieu après 18 h. Les heures en plus coûtent moins de 1 % de notre budget.\" Texte B, d'un conseiller municipal : \"Fermons à 18 h. Je suis passé un soir et elle avait l'air vide. Les gens peuvent simplement utiliser leur téléphone. C'est du gaspillage d'argent.\"",
            "Plan de temps : environ 10 minutes pour lire et préparer, 30 minutes pour écrire, 5 minutes pour relire. Utilisez des mots de liaison (d'abord, de plus, cependant, donc). Écrivez des phrases complètes avec vos propres mots, et citez de courts passages des textes comme preuves.",
            "Relisez pour repérer les fautes de la leçon 3 : sujet et verbe, phrases soudées, mots qui se prononcent pareil, majuscules et apostrophes."
          ],
          steps: ["Réglez un minuteur sur 45 minutes.", "Lisez les deux textes et remplissez votre tableau solide ou faible (environ 10 minutes).", "Écrivez l'introduction avec votre thèse.", "Écrivez deux ou trois paragraphes de développement, chacun avec une preuve et pourquoi elle est solide ou faible.", "Écrivez une courte conclusion.", "Relisez pendant les 5 dernières minutes."],
          words: [["Introduction", "le premier paragraphe ; il présente le sujet et donne votre thèse."], ["Conclusion", "le dernier paragraphe ; il redit votre idée principale."], ["Citer", "recopier quelques mots exacts du texte, entre guillemets."], ["Relire", "lire à nouveau ce que vous avez écrit pour trouver et corriger les fautes."]],
          slides: [
            { title: "La structure de la rédaction", bullets: ["Une introduction avec votre thèse", "Deux ou trois paragraphes de développement avec des preuves", "Une courte conclusion"] },
            { title: "Chaque paragraphe de développement", bullets: ["Une raison", "Une preuve tirée du texte", "Pourquoi elle est solide, ou pourquoi l'autre position est faible"] },
            { title: "Plan de temps de 45 minutes", bullets: ["Environ 10 minutes : lire et préparer", "Environ 30 minutes : écrire", "Environ 5 minutes : relire"] }
          ],
          tryIt: "Tâche finale : réglez un minuteur sur 45 minutes et rédigez votre réponse développée sur les textes de la bibliothèque ci-dessus. Ensuite, relisez-la et notez-la avec la grille d'évaluation. Exemple de thèse : \"Le texte A est mieux appuyé, car il utilise les comptages de visites et les registres des ordinateurs de la bibliothèque elle-même, alors que le texte B repose sur une seule visite un soir et sur des opinions.\" Preuves solides à utiliser : environ 340 visites après 18 h chaque semaine ; 6 séances de recherche d'emploi sur 10 après 18 h ; un coût de moins de 1 % du budget. Faiblesse du texte B : une seule visite, aucun chiffre.",
          youCanNow: "rédiger en temps limité une réponse développée complète qui juge deux arguments d'après leurs preuves.",
          quickCheck: [
            { objective: "O5", q: "Que met-on dans l'introduction ?", options: ["Une liste de règles de grammaire", "Toutes les preuves", "Le sujet et votre thèse", "Votre nom et votre adresse"], answer: 2, why: "L'introduction présente le sujet et dit quel argument est le mieux appuyé." },
            { objective: "O5", q: "Dans les textes de la bibliothèque, quelle est la preuve la plus solide ?", options: ["\"Elle avait l'air vide\" un soir", "\"Les gens peuvent simplement utiliser leur téléphone\"", "\"C'est du gaspillage d'argent\"", "Le compteur à l'entrée a enregistré environ 340 visites après 18 h chaque semaine"], answer: 3, why: "C'est un chiffre précis tiré d'un registre, qu'on peut vérifier." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les arguments et la réponse développée",
        questions: [
          { objective: "O4", q: "Qu'est-ce que l'affirmation dans un argument ?", options: ["L'idée principale que l'auteur veut que vous croyiez", "Le titre", "La phrase la plus longue", "Une faute de grammaire"], answer: 0, why: "L'affirmation est ce dont l'auteur essaie de vous convaincre." },
          { objective: "O4", q: "\"Les gens qui veulent que la bibliothèque ouvre plus longtemps sont juste paresseux.\" Qu'est-ce qui ne va pas avec cet appui ?", options: ["Il utilise trop de chiffres", "Il cite un expert", "Il attaque les personnes au lieu de donner des preuves", "Rien ; c'est une preuve solide"], answer: 2, why: "Attaquer ceux qui ne sont pas d'accord n'est pas une preuve sur l'idée." },
          { objective: "O5", q: "Dans la rédaction de 45 minutes, combien de temps environ devez-vous passer à lire et à préparer ?", options: ["0 minute", "Environ 40 minutes", "Environ 2 minutes", "Environ 10 minutes"], answer: 3, why: "Environ 10 minutes de préparation laissent environ 30 minutes pour écrire et 5 pour relire." },
          { objective: "O5", q: "Que contient un bon paragraphe de développement ?", options: ["Une raison, une preuve tirée du texte et pourquoi elle est solide", "Seulement votre opinion", "Un nouveau sujet", "Une liste de mots sans phrases"], answer: 0, why: "Chaque paragraphe de développement relie une raison à une preuve et l'explique." },
          { objective: "O1", q: "Où devez-vous vérifier les règles, les durées et les frais actuels du GED ?", options: ["Dans les souvenirs d'un ami", "Dans une publication sur les réseaux sociaux", "Sur ged.com et auprès du service d'éducation des adultes de votre État", "Dans un vieux manuel"], answer: 2, why: "Les règles et les frais changent ; le site officiel et votre État ont les informations à jour." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au GED : Raisonnement et langue (Reasoning Through Language Arts)",
    questions: [
      { objective: "O1", q: "À quel examen ce cours vous prépare-t-il ?", options: ["L'épreuve GED Reasoning Through Language Arts", "Un examen du permis de conduire", "Un test de dactylographie", "Un entretien de naturalisation"], answer: 0, why: "Le cours vous prépare à l'épreuve RLA du GED ; il ne donne pas le diplôme." },
      { objective: "O1", q: "Quel autre examen d'équivalence du diplôme de fin d'études secondaires certains États utilisent-ils ?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET est un autre examen d'équivalence utilisé dans certains États." },
      { objective: "O1", q: "Quelle est la meilleure première étape pour un plan de révision ?", options: ["S'inscrire à l'examen pour demain", "Sauter les parties difficiles", "Faire un test d'entraînement gratuit pour voir où vous en êtes", "Réviser seulement la veille"], answer: 2, why: "Un test d'entraînement montre quelles compétences demandent le plus de travail." },
      { objective: "O1", q: "D'après ged.com, combien de temps dure la partie rédaction de l'épreuve RLA ?", options: ["10 minutes", "2 heures", "Il n'y a pas de rédaction", "45 minutes"], answer: 3, why: "Ged.com indique 45 minutes pour la réponse développée." },
      { objective: "O2", q: "L'idée principale d'un texte, c'est :", options: ["Le premier mot", "Ce dont parle surtout le texte", "Le mot le plus difficile", "Seulement la dernière phrase"], answer: 1, why: "L'idée principale, c'est le texte dit en une seule phrase." },
      { objective: "O2", q: "Un texte dit qu'une usine a ajouté une formation à la sécurité et que les accidents ont baissé de moitié. Quel détail appuie \"la formation a rendu l'usine plus sûre\" ?", options: ["Les accidents ont baissé de moitié", "L'usine est grande", "La formation avait lieu le lundi", "L'usine fabrique des chaises"], answer: 0, why: "La baisse des accidents est la preuve que la sécurité s'est améliorée." },
      { objective: "O2", q: "Quelle déduction est appuyée par : \"Les files d'attente à la banque alimentaire ont doublé après la fermeture de l'usine\" ?", options: ["La banque alimentaire va fermer", "Les prix de la nourriture ont baissé", "Beaucoup de personnes qui ont perdu leur emploi avaient besoin d'aide alimentaire", "L'usine a rouvert"], answer: 2, why: "Le moment de la fermeture et les files plus longues appuient cette conclusion." },
      { objective: "O3", q: "Quelle phrase est correcte ?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "Le sujet est list (une seule liste), donc le verbe est is." },
      { objective: "O3", q: "Quelle phrase utilise correctement les majuscules ?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "En anglais, les jours et les lieux prennent une majuscule ; les autres mots non." },
      { objective: "O3", q: "Laquelle est un fragment de phrase ?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "Elle ne peut pas tenir seule ; il lui faut une idée principale, comme \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Choisissez le bon mot : \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's veut dire it is : it is a good day to apply." },
      { objective: "O4", q: "Laquelle est une preuve solide ?", options: ["Un rapport de l'État qui montre 2 000 nouveaux emplois d'infirmier l'an dernier", "\"Je le sais, c'est tout\"", "L'avis d'une star de cinéma sur le métier d'infirmier", "\"Tout le monde le dit\""], answer: 0, why: "Des chiffres précis tirés d'un rapport officiel peuvent être vérifiés." },
      { objective: "O4", q: "\"Soit on supprime toutes les lignes de bus, soit la ville fait faillite.\" Quel est le piège ?", options: ["Il utilise une étude", "Il cite un expert", "C'est un fait", "Il donne seulement deux choix quand il y en a plus"], answer: 3, why: "Il existe d'autres options, comme supprimer certaines lignes ou trouver de nouveaux fonds." },
      { objective: "O4", q: "Pourquoi l'histoire d'une seule personne est-elle une preuve faible pour une grande affirmation ?", options: ["Les histoires sont toujours fausses", "Un seul cas n'est peut-être pas vrai pour la plupart des gens", "Les histoires sont trop longues", "C'est contraire au règlement"], answer: 1, why: "Un seul exemple ne montre pas ce qui est vrai en général." },
      { objective: "O4", q: "Pour juger un argument, vous cherchez d'abord :", options: ["Le mot le plus long", "L'âge de l'auteur", "L'affirmation et ses preuves", "Les fautes de grammaire"], answer: 2, why: "On juge un argument selon la manière dont ses preuves soutiennent son affirmation." },
      { objective: "O5", q: "Dans la rédaction du GED, votre thèse doit dire :", options: ["Quel argument est le mieux appuyé", "Votre couleur préférée", "Quel auteur vous aimez", "Que les deux sont parfaits"], answer: 0, why: "La tâche est de décider quel argument a les preuves les plus convaincantes." },
      { objective: "O5", q: "Quelle est une bonne façon d'utiliser les preuves dans votre rédaction ?", options: ["Recopier des textes entiers", "Inventer des chiffres", "Ne pas mettre de preuves", "Citer un court passage et expliquer pourquoi il est solide"], answer: 3, why: "De courtes citations avec votre explication montrent que vous avez analysé les preuves." },
      { objective: "O5", q: "Que faites-vous dans les dernières minutes de la rédaction ?", options: ["Commencer une nouvelle rédaction", "Relire la grammaire et la ponctuation", "Effacer votre thèse", "Quitter la salle"], answer: 1, why: "La relecture permet de trouver les fautes qui font perdre des points." },
      { objective: "O5", q: "Quelle conclusion est la meilleure ?", options: ["\"Fin.\"", "\"J'aime les bibliothèques.\"", "\"Comme le texte A utilise des registres et des comptages, et que le texte B utilise seulement des opinions, le texte A est mieux appuyé.\"", "\"Certaines personnes sont d'accord et d'autres non.\""], answer: 2, why: "Elle redit la thèse et la raison principale avec d'autres mots." },
      { objective: "O2", q: "Quand vous n'êtes pas sûr d'une réponse sur un texte, vous devez :", options: ["Revenir chercher la phrase qui prouve une réponse", "Choisir l'option la plus courte", "Ne pas lire et deviner", "Choisir la réponse avec les mots les plus difficiles"], answer: 0, why: "La bonne réponse est appuyée par le texte : revenez-y et trouvez la preuve." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, entraînez-vous sur cette partie et rédigez une nouvelle réponse sur deux nouveaux textes.",
    criteria: [
      { name: "Thèse claire", objective: "O5", notYet: "Pas de thèse, ou elle dit avec quelle position l'auteur est d'accord au lieu de dire laquelle est la mieux appuyée.", meets: "L'introduction contient une phrase qui dit quel argument est le mieux appuyé.", exceeds: "La thèse nomme aussi la raison principale, par exemple des registres contre des opinions." },
      { name: "Preuves tirées des textes", objective: "O4", notYet: "Aucune preuve tirée des textes, ou des preuves inventées.", meets: "Au moins deux preuves tirées des textes, chacune expliquée comme solide ou faible.", exceeds: "Signale aussi un piège ou une faiblesse dans l'autre texte et l'explique." },
      { name: "Organisation", objective: "O5", notYet: "Un seul bloc de texte, ou des idées qui sautent d'un sujet à l'autre.", meets: "Une introduction, au moins deux paragraphes de développement et une conclusion, avec des mots de liaison.", exceeds: "Chaque paragraphe de développement commence par une phrase claire qui le relie à la thèse." },
      { name: "Grammaire et ponctuation", objective: "O3", notYet: "Beaucoup de fautes rendent la lecture difficile.", meets: "Quelques petites fautes, mais le sens est toujours clair.", exceeds: "Presque aucune faute ; les mots qui se prononcent pareil, les majuscules et les apostrophes sont tous corrects." },
      { name: "Lecture exacte", objective: "O2", notYet: "Se trompe sur l'idée principale d'un texte.", meets: "Décrit correctement l'idée principale de chaque texte.", exceeds: "Utilise de courtes citations exactes qui correspondent à ce que disent les textes." },
      { name: "Plan et gestion du temps", objective: "O1", notYet: "N'a pas fini en 45 minutes et n'a pas de plan de révision.", meets: "A fini en 45 minutes, et le plan de révision a des dates jusqu'à la semaine de l'examen.", exceeds: "A aussi réservé un test GED Ready ou une vraie date d'examen sur ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent Atteint ou mieux sur toutes les lignes de la grille",
      "Apprenants qui passent GED Ready ou un test d'entraînement gratuit de ged.com dans les 30 jours",
      "Apprenants qui s'inscrivent à l'épreuve de langue du GED ou la réussissent dans les 90 jours (selon leurs propres déclarations)",
      "Les programmes partenaires signalent plus d'apprenants qui passent à une formation professionnelle ou à des cours universitaires"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur avec internet, ou les leçons imprimées",
      "Du papier et un stylo pour les tableaux, les réponses d'entraînement et les rédactions",
      "Un minuteur (celui du téléphone suffit) pour la rédaction de 45 minutes",
      "Les tests d'entraînement gratuits de ged.com ; GED Ready si l'apprenant choisit de l'acheter",
      "Environ 90 minutes au total pour les leçons et les contrôles, plus 45 minutes pour la rédaction finale"
    ],
    facilitatorNotes: [
      "Commencez par le test de départ et le test d'entraînement RLA gratuit de ged.com, puis formez des groupes selon les compétences dont les apprenants ont le plus besoin.",
      "Faites un tableau solide ou faible à voix haute, comme modèle, avant que les apprenants fassent le leur.",
      "Faites lire les rédactions à voix haute par deux, avec des commentaires sur une seule ligne de la grille à la fois.",
      "Vérifiez quel examen votre État utilise (GED ou HiSET) et indiquez les centres d'examen locaux et les aides possibles pour les frais.",
      "Gardez un entraînement sans enjeu ; beaucoup d'apprenants adultes ont gardé de l'école une peur des examens."
    ]
  }
};
