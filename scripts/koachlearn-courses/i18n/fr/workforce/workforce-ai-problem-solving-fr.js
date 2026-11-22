"use strict";

// Koach Learn course (French translation of workforce/workforce-ai-problem-solving.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-ai-problem-solving-fr",
  lang: "fr",
  translationOf: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "L'IA pour résoudre des problèmes et prendre des décisions",
  skills: "Définir clairement un problème, Trouver les causes profondes avec les 5 Pourquoi, Trouver des options avec l'IA, Comparer les options avec une matrice de décision, Vérifier le raisonnement de l'IA, Présenter une recommandation",
  outcome: "résoudre un vrai problème au travail étape par étape avec l'IA comme partenaire de réflexion : écrire un énoncé de problème clair, trouver la cause profonde avec les 5 Pourquoi, lister des options, les comparer dans une matrice de décision, vérifier le raisonnement de l'IA, et présenter une recommandation d'une page à votre responsable.",
  about: [
    "Ce cours s'adresse aux travailleurs et aux chercheurs d'emploi qui veulent être la personne qui résout les problèmes, pas seulement celle qui les signale : responsables en entrepôt ou en magasin, personnel d'aide dans la santé, employés de bureau, service client et métiers manuels. Savoir résoudre des problèmes est l'une des compétences les plus demandées par les employeurs.",
    "Vous apprendrez une méthode simple qui marche pour tous les problèmes, d'une longue file à la caisse à des livraisons manquées ou une procédure confuse. Un assistant d'IA vous aide à poser de meilleures questions, à trouver des options et à organiser votre réflexion. C'est vous qui apportez les faits et qui prenez la décision.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant ». Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Gardez les informations confidentielles de l'entreprise et des clients hors des outils d'IA et suivez les règles de votre lieu de travail."
  ],
  finalTask: "Choisissez un vrai problème au travail (ou un exemple réaliste) et produisez une recommandation d'une page : un énoncé du problème avec des faits, une cause profonde trouvée avec les 5 Pourquoi, au moins quatre options (dont certaines venant de l'IA), une matrice de décision avec des critères pondérés, des notes sur ce que vous avez vérifié dans le raisonnement de l'IA, et votre recommandation avec les premières étapes et la façon de mesurer le succès.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des travailleurs et des demandeurs d'emploi qui veulent être la personne qui résout les problèmes, pas seulement celle qui les signale : chefs d'équipe en entrepôt et en magasin, aides en santé, employés de bureau, service client et métiers manuels.",
    startingPoint: "Ils remarquent les problèmes au travail et ont souvent des idées, et savent utiliser un smartphone ou un ordinateur. La plupart n'ont pas utilisé de méthode structurée comme les 5 Pourquoi ou une matrice de décision, et peu ont utilisé l'IA comme partenaire de réflexion ou vérifié son raisonnement.",
    gap: "Savoir résoudre des problèmes fait partie des compétences que les employeurs demandent le plus, mais les plaintes sans faits et les solutions sans cause sont rarement approuvées. Les apprenants ont besoin d'une méthode pas à pas, de l'énoncé du problème jusqu'à la recommandation, qui utilise l'IA pour élargir leur réflexion pendant qu'ils vérifient son raisonnement et assument la décision.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les méthodes sont montrées pas à pas",
      "Appareils : un ordinateur ou un smartphone ; un tableur gratuit aide pour la matrice de décision",
      "Vie privée et règles : aucune donnée confidentielle de client dans les outils d'IA ; les règles d'IA du lieu de travail passent en premier",
      "Faits : les chiffres, les règles et les politiques donnés par l'IA sont vérifiés avec de vraies données, la source officielle ou un responsable",
      "Temps : des leçons d'environ 5 minutes ; rassembler des faits sur un vrai problème peut prendre une semaine"
    ],
    prerequisites: "Aucun. « Les outils d'IA essentiels au travail » aide les apprenants qui découvrent les assistants d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une plainte vague au travail", action: "écrire un énoncé du problème clair et factuel, avec l'IA qui vous pose des questions pour le préciser", standard: "en disant quoi, où, quand, quelle ampleur et pourquoi c'est important" },
    { id: "O2", condition: "À partir d'un énoncé du problème", action: "utiliser les 5 Pourquoi pour trouver la cause profonde", standard: "en vérifiant avec des faits ou des collègues toute cause proposée par l'IA" },
    { id: "O3", condition: "À partir d'une cause profonde", action: "créer une liste de solutions possibles avec l'IA, des collègues et votre propre expérience", standard: "en gardant au moins quatre options qui conviennent, dont « ne rien changer »" },
    { id: "O4", condition: "À partir d'au moins quatre options", action: "comparer les options dans une matrice de décision avec des critères pondérés", standard: "avec des poids et des notes fixés par vous et des totaux justes" },
    { id: "O5", condition: "Face au raisonnement de l'IA sur vos options", action: "vérifier le raisonnement pour repérer les chiffres inventés et les règles non vérifiées, et demander les arguments contre", standard: "en notant au moins deux choses que vous avez vérifiées" },
    { id: "O6", condition: "À partir de votre analyse", action: "écrire une recommandation d'une page avec les premières étapes, un petit essai et une mesure de réussite", standard: "avec le point principal dans les premières lignes et les sept parties" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comprendre le problème",
      lessons: [
        {
          objectives: ["O1"],
          title: "Écrire un énoncé de problème clair",
          minutes: 5,
          goal: "Transformer une plainte vague en un énoncé de problème clair et factuel.",
          text: [
            "« C'est le désordre » n'est pas un problème qu'on peut résoudre. Un énoncé de problème clair dit ce qui se passe, où, quand, quelle ampleur cela a et pourquoi c'est important. Exemple : « En semaine de 17 h à 19 h, les clients attendent en moyenne 12 minutes à la caisse, et nous recevons environ 5 plaintes par semaine. »",
            "Utilisez des faits que vous pouvez voir ou compter : des heures, des chiffres, une fréquence. Si vous n'avez pas de chiffres, recueillez-en pendant une semaine.",
            "L'IA peut aider : « Voici ma description rapide. Pose-moi cinq questions qui en feraient un énoncé de problème plus clair. » Répondre à ces questions montre souvent ce que vous avez vraiment besoin de savoir."
          ],
          steps: ["Écrivez le problème avec vos mots.", "Ajoutez quoi, où, quand, quelle ampleur et pourquoi c'est important.", "Remplacez les suppositions par des comptages ou des mesures.", "Demandez à l'IA des questions pour le préciser, puis réécrivez-le."],
          words: [["Énoncé de problème", "une description courte et factuelle d'un problème."], ["Données", "des faits et des chiffres que vous pouvez compter ou mesurer."]],
          slides: [
            { title: "Vague ou clair", bullets: ["Vague : « C'est le désordre »", "Clair : quoi, où, quand, quelle ampleur, pourquoi c'est important"] },
            { title: "Exemple", bullets: ["En semaine de 17 h à 19 h", "Attente moyenne de 12 minutes à la caisse", "Environ 5 plaintes par semaine"] },
            { title: "Précisez-le avec l'IA", bullets: ["« Pose-moi cinq questions pour le rendre plus clair »", "Répondez avec des faits, puis réécrivez"] }
          ],
          tryIt: "Choisissez un problème réel ou fictif au travail. Écrivez une description rapide, demandez à l'IA cinq questions pour la préciser, répondez-y, et réécrivez-la sous forme d'énoncé de problème clair.",
          youCanNow: "écrire un énoncé de problème clair et factuel.",
          quickCheck: [
            { objective: "O1", q: "Que contient un énoncé du problème clair ?", options: ["Qui est responsable", "Quoi, où, quand, quelle ampleur et pourquoi c'est important", "Seulement ce que vous ressentez", "La solution que vous voulez déjà"], answer: 1, why: "Un énoncé clair décrit les faits du problème, sans chercher de coupable ni donner de solution." },
            { objective: "O1", q: "Votre note dit « Les livraisons sont toujours en retard. » Que faites-vous ensuite ?", options: ["L'envoyer telle quelle à votre responsable", "Ajouter « très » pour insister", "Accuser les chauffeurs", "Répondre aux questions de l'IA pour préciser et ajouter des faits, comme les jours et l'ampleur du retard"], answer: 3, why: "Les questions pour préciser transforment une plainte vague en faits sur lesquels on peut agir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Trouver la cause profonde avec les 5 Pourquoi",
          minutes: 5,
          goal: "Utiliser les 5 Pourquoi pour trouver la cause derrière un problème.",
          text: [
            "Traiter un symptôme fait revenir le problème. Les 5 Pourquoi vous aident à creuser jusqu'à la cause profonde : demandez « Pourquoi ? » sur le problème, puis « Pourquoi ? » sur cette réponse, environ cinq fois.",
            "Exemple : longues files à la caisse. Pourquoi ? Une seule caisse est ouverte à 17 h. Pourquoi ? Le poste d'un caissier finit à 17 h. Pourquoi ? Le planning a été fait pour les heures de pointe du matin. Pourquoi ? Personne n'a regardé les ventes du soir quand il a été fait. Cause profonde : le planning ne correspond pas à l'activité du soir.",
            "L'IA peut proposer des « pourquoi » auxquels vous n'aviez pas pensé, mais seuls vous et vos collègues savez lesquels sont vrais. Vérifiez chaque réponse avec des faits ou en demandant aux personnes qui font le travail."
          ],
          steps: ["Écrivez l'énoncé du problème en haut.", "Demandez « Pourquoi ? » et notez la réponse.", "Demandez « Pourquoi ? » sur cette réponse ; recommencez environ cinq fois.", "Vérifiez chaque réponse avec des faits ou des collègues.", "Entourez la cause profonde."],
          words: [["Cause profonde", "la raison profonde pour laquelle un problème arrive."], ["Symptôme", "un signe d'un problème, pas sa cause."], ["5 Pourquoi", "une méthode qui consiste à demander « pourquoi ? » plusieurs fois pour trouver une cause profonde."]],
          slides: [
            { title: "Symptôme ou cause profonde", bullets: ["Traiter un symptôme : le problème revient", "Traiter la cause profonde : le problème disparaît"] },
            { title: "Demandez « Pourquoi ? » environ cinq fois", bullets: ["Longues files -> une seule caisse ouverte", "-> le poste finit à 17 h -> planning fait pour le matin", "Cause : le planning ne suit pas l'activité du soir"] },
            { title: "L'IA propose, vous confirmez", bullets: ["L'IA peut proposer des pourquoi possibles", "Vérifiez chacun avec des faits ou des collègues"] }
          ],
          tryIt: "Faites les 5 Pourquoi sur votre problème. Demandez à l'IA d'autres causes possibles, puis vérifiez lesquelles sont vraies avec des faits ou un collègue. Entourez la cause profonde.",
          youCanNow: "trouver la cause profonde d'un problème avec les 5 Pourquoi.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la différence entre un symptôme et une cause profonde ?", options: ["Un symptôme est un signe du problème ; la cause profonde est la vraie raison pour laquelle il arrive", "Ils veulent dire la même chose", "Un symptôme est toujours plus grave", "La cause profonde est ce dont les clients se plaignent"], answer: 0, why: "Traiter seulement les symptômes laisse le problème revenir ; la cause profonde explique pourquoi il arrive." },
            { objective: "O2", q: "L'IA suggère que la cause profonde est « le personnel s'en moque ». Vous n'êtes pas sûr. Que faites-vous ?", options: ["La noter comme cause", "Dire à votre responsable que le personnel s'en moque", "La vérifier avec des faits ou des collègues avant de l'accepter", "Arrêter les 5 Pourquoi"], answer: 2, why: "Les suggestions de l'IA sont des idées à vérifier, pas des causes prouvées." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver des options avec l'IA",
          minutes: 5,
          goal: "Créer une liste d'au moins quatre solutions possibles, en utilisant l'IA pour élargir votre réflexion.",
          text: [
            "La plupart des gens sautent sur la première solution. On décide mieux en comparant plusieurs options. Visez au moins quatre options, dont « ne rien changer » comme point de référence.",
            "Demandez à l'IA un remue-méninges : « La cause profonde est que notre planning ne correspond pas à l'activité du soir dans une petite épicerie. Donne-moi huit solutions possibles, des moins chères et rapides aux changements plus importants. » Elle peut proposer de décaler une pause, d'ouvrir une caisse libre-service ou de former les employés de rayon à la caisse.",
            "Barrez les idées qui ne conviennent pas à votre lieu de travail ou qui ne seraient jamais acceptées, et ajoutez les idées de vos collègues. Les personnes qui font le travail ont souvent les meilleures idées."
          ],
          steps: ["Écrivez la cause profonde.", "Demandez à l'IA six à huit options, des petites aux grandes.", "Barrez celles qui ne conviennent pas.", "Ajoutez les idées de vos collègues.", "Gardez-en au moins quatre, dont « ne rien changer »."],
          words: [["Option", "une solution possible."], ["Remue-méninges", "lister beaucoup d'idées rapidement sans les juger tout de suite."], ["Point de référence", "ce qui se passe si vous ne changez rien."]],
          slides: [
            { title: "Ne vous arrêtez pas à la première idée", bullets: ["Comparez au moins quatre options", "Incluez « ne rien changer »"] },
            { title: "L'IA élargit votre réflexion", bullets: ["Donnez-lui la cause profonde", "Demandez des options, des petites aux grandes"] },
            { title: "Rendez-les réalistes", bullets: ["Barrez les idées qui ne conviennent pas", "Ajoutez les idées de vos collègues", "Ceux qui font le travail savent souvent mieux"] }
          ],
          tryIt: "Demandez à l'IA huit options pour traiter votre cause profonde. Barrez celles qui ne conviennent pas, ajoutez-en une venant d'un collègue ou de votre expérience, et gardez-en au moins quatre.",
          youCanNow: "trouver et trier une liste d'options réalistes avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire faire un remue-méninges ?", options: ["Choisir la première idée", "Juger chaque idée dès qu'on l'entend", "Demander seulement à votre responsable", "Lister beaucoup d'idées rapidement sans les juger tout de suite"], answer: 3, why: "Le remue-méninges rassemble d'abord beaucoup d'idées ; on les juge ensuite." },
            { objective: "O3", q: "L'IA vous donne huit options, et deux demandent un budget que votre magasin n'a pas. Que faites-vous ?", options: ["Toutes les garder", "Barrer celles qui ne conviennent pas et ajouter une idée d'un collègue", "Choisir la plus chère", "Demander 50 options de plus à l'IA"], answer: 1, why: "Vous gardez les options qui conviennent à votre lieu de travail et ajoutez des idées des personnes qui font le travail." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comprendre le problème",
        questions: [
          { objective: "O1", q: "Quel est l'énoncé de problème le plus clair ?", options: ["« C'est le désordre. »", "« En semaine de 17 h à 19 h, l'attente à la caisse est en moyenne de 12 minutes et nous recevons environ 5 plaintes par semaine. »", "« Les clients sont pénibles. »", "« Réglez ça. »"], answer: 1, why: "Il dit quoi, quand, quelle ampleur et pourquoi c'est important." },
          { objective: "O2", q: "Qu'est-ce qu'une cause profonde ?", options: ["Une plainte", "La première chose qu'on remarque", "Une plante", "La raison profonde pour laquelle un problème arrive"], answer: 3, why: "Traiter la cause profonde empêche le problème de revenir." },
          { objective: "O2", q: "Pendant les 5 Pourquoi, l'IA propose une cause. Que faites-vous ?", options: ["La vérifier avec des faits ou des collègues", "L'accepter", "Ignorer toutes les idées de l'IA", "Accuser quelqu'un"], answer: 0, why: "Seuls les faits confirment une cause." },
          { objective: "O3", q: "Pourquoi inclure « ne rien changer » comme option ?", options: ["La loi l'exige", "C'est toujours le mieux", "Cela donne un point de référence pour comparer", "Ce n'est jamais utile"], answer: 2, why: "Un point de référence montre ce que chaque changement apporte." },
          { objective: "O3", q: "Qui a souvent les meilleures idées pour régler un problème au travail ?", options: ["Les amis des clients", "Seulement l'IA", "Les personnes qui font le travail", "Personne"], answer: 2, why: "Ceux qui font le travail en connaissent les détails." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Décider et recommander",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparer les options avec une matrice de décision",
          minutes: 6,
          goal: "Noter les options selon des critères pondérés dans une matrice de décision.",
          text: [
            "Une matrice de décision est un tableau qui compare les options de façon équitable. Les options vont sur le côté ; les critères vont en haut. Critères courants : le coût, le temps de mise en place, la façon dont l'option traite la cause profonde, l'effet sur les clients, l'effet sur les collègues et le risque.",
            "Donnez à chaque critère un poids (de 1 à 3) selon son importance, notez chaque option de 1 à 5 sur chaque critère, multipliez la note par le poids, et additionnez. Le total le plus élevé est un bon candidat, pas un gagnant automatique.",
            "Vous pouvez demander à l'IA de construire le tableau vide ou un tableur avec des formules. C'est vous qui choisissez les poids et les notes, selon les faits et ce que votre lieu de travail valorise. Ensuite, demandez-vous : le gagnant a-t-il du sens ? Sinon, revoyez vos notes."
          ],
          steps: ["Listez vos options sur le côté.", "Choisissez quatre à six critères et donnez à chacun un poids de 1 à 3.", "Notez chaque option de 1 à 5 sur chaque critère.", "Multipliez note x poids et additionnez.", "Vérifiez que le résultat a du sens."],
          words: [["Matrice de décision", "un tableau qui note les options selon des critères."], ["Critères", "ce qui sert à juger les options, comme le coût ou le risque."], ["Poids", "l'importance d'un critère par rapport aux autres."]],
          slides: [
            { title: "Préparez le tableau", bullets: ["Les options sur le côté", "Les critères en haut", "Coût, temps, cause profonde, personnes, risque"] },
            { title: "Notez", bullets: ["Poids de 1 à 3 pour chaque critère", "Note de 1 à 5 pour chaque option", "Note x poids, puis additionnez"] },
            { title: "C'est vous qui décidez", bullets: ["L'IA peut construire le tableau", "Vous choisissez les poids et les notes", "Le gagnant a-t-il du sens ?"] }
          ],
          tryIt: "Construisez une matrice de décision pour vos quatre options avec au moins quatre critères pondérés. Utilisez l'IA pour préparer le tableau ou le tableur, puis remplissez les notes vous-même et faites les totaux.",
          youCanNow: "comparer des options de façon équitable avec une matrice de décision pondérée.",
          quickCheck: [
            { objective: "O4", q: "Dans une matrice de décision, qu'est-ce qu'un critère ?", options: ["La réponse finale", "L'une des options", "Un point sur lequel on juge les options, comme le coût ou la sécurité", "La personne qui décide"], answer: 2, why: "Les critères sont les points sur lesquels on note chaque option." },
            { objective: "O4", q: "L'option B obtient 3 en rapidité (poids 2) et 5 en coût (poids 1). Quel est son total pour ces deux critères ?", options: ["11", "8", "15", "10"], answer: 0, why: "On multiplie chaque note par son poids et on additionne : 3 x 2 + 5 x 1 = 11." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vérifier le raisonnement de l'IA",
          minutes: 5,
          goal: "Repérer les erreurs courantes de raisonnement de l'IA avant de vous y fier.",
          text: [
            "L'IA peut paraître sûre d'elle et pourtant se tromper. Problèmes courants : faits ou chiffres inventés, erreurs de calcul, idées qui ignorent les règles ou le budget de votre lieu de travail, et oubli du côté humain (moral, sécurité, équité).",
            "Demandez à l'IA de montrer son raisonnement : « Explique étape par étape pourquoi tu as classé l'option B en premier. » Puis demandez-lui de défendre l'autre camp : « Quelles sont les meilleures raisons de NE PAS choisir l'option B ? » Cela révèle souvent les points faibles.",
            "Vérifiez les chiffres vous-même, vérifiez toute règle ou politique auprès de la source officielle ou de votre responsable, et demandez l'avis d'un collègue. Notez ce que vous avez vérifié ; cela renforce votre recommandation."
          ],
          steps: ["Demandez à l'IA d'expliquer son raisonnement étape par étape.", "Demandez les meilleurs arguments contre son choix.", "Refaites les chiffres et les calculs vous-même.", "Vérifiez les règles auprès de la source officielle ou de votre responsable.", "Demandez l'avis d'un collègue et notez ce que vous avez vérifié."],
          words: [["Raisonnement", "les étapes de pensée qui mènent à une conclusion."], ["Avocat du diable", "défendre volontairement l'autre camp pour tester une idée."]],
          slides: [
            { title: "Sûr de soi ne veut pas dire juste", bullets: ["Faits ou chiffres inventés", "Erreurs de calcul", "Oubli des règles, du budget ou du côté humain"] },
            { title: "Testez le raisonnement", bullets: ["« Explique étape par étape »", "« Quelles raisons de NE PAS choisir ceci ? »"] },
            { title: "Vérifiez et notez", bullets: ["Refaites les chiffres vous-même", "Règles : source officielle ou responsable", "Avis d'un collègue ; notez ce que vous avez vérifié"] }
          ],
          tryIt: "Demandez à l'IA laquelle de vos options elle choisirait et pourquoi. Puis demandez-lui les meilleurs arguments contre. Revérifiez un chiffre et notez deux choses que vous avez vérifiées.",
          youCanNow: "tester le raisonnement de l'IA et repérer les erreurs avant de vous y fier.",
          quickCheck: [
            { objective: "O5", q: "Lequel est un problème fréquent dans le raisonnement de l'IA ?", options: ["Elle refuse toujours de répondre", "Des chiffres inventés qui semblent vrais", "Elle n'utilise que des sources officielles", "Elle ne sait pas faire de tableaux"], answer: 1, why: "L'IA peut inventer des chiffres qui semblent justes : vous les revérifiez donc." },
            { objective: "O5", q: "L'IA dit que la politique de l'entreprise autorise les heures supplémentaires pour votre solution. Que faites-vous ?", options: ["Le mettre dans votre recommandation", "Supposer que c'est vrai", "Demander à l'IA si elle est sûre", "Vérifier la politique auprès de la source officielle ou de votre responsable"], answer: 3, why: "Les règles et les politiques viennent de la source officielle ou de votre responsable, pas de l'IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Présenter votre recommandation",
          minutes: 5,
          goal: "Écrire une recommandation d'une page sur laquelle votre responsable peut agir.",
          text: [
            "Les responsables disent oui aux propositions claires et courtes. Suivez cet ordre : Problème (une ou deux phrases avec des faits), Cause profonde, Options étudiées, Recommandation et pourquoi, Premières étapes, Comment mesurer le succès, Risques et comment les gérer.",
            "Tenez-vous à une page. Demandez à l'IA de resserrer votre brouillon : « Fais-en une recommandation d'une page pour ma responsable, le point principal d'abord, en mots simples. » Puis vérifiez que chaque fait et chaque chiffre correspond à votre travail.",
            "Proposez d'abord un petit essai : « Essayons pendant deux semaines le mardi et le jeudi soir et mesurons les temps d'attente. » Un petit essai mesurable est plus facile à faire accepter et prouve votre idée."
          ],
          steps: ["Écrivez les sept sections.", "Commencez par votre recommandation dans les premières lignes.", "Demandez à l'IA de la resserrer sur une page.", "Vérifiez chaque fait et chaque chiffre.", "Proposez un petit essai mesurable."],
          words: [["Recommandation", "l'option que vous proposez et pourquoi."], ["Essai", "un test court et limité d'un changement."], ["Mesure du succès", "le chiffre qui montre si le changement a marché."]],
          slides: [
            { title: "L'ordre sur une page", bullets: ["Problème et cause profonde", "Options et recommandation", "Premières étapes, mesure du succès, risques"] },
            { title: "Facilitez le oui", bullets: ["Le point principal d'abord, une page", "L'IA resserre ; vous vérifiez les faits"] },
            { title: "Proposez un petit essai", bullets: ["« Deux semaines, deux soirs par semaine »", "Mesurez le résultat", "Plus facile à accepter ; prouve l'idée"] }
          ],
          tryIt: "Tâche finale : écrivez votre recommandation d'une page avec les sept sections, en joignant vos 5 Pourquoi et votre matrice de décision, des notes sur ce que vous avez vérifié dans le raisonnement de l'IA, et un petit essai avec une mesure du succès.",
          youCanNow: "résoudre un problème au travail étape par étape et présenter une recommandation sur laquelle votre responsable peut agir.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une mesure de réussite ?", options: ["Le chiffre qui montre si le changement a marché", "La longueur de votre rapport", "Le nombre de personnes qui ont aimé l'idée", "L'accord de votre responsable"], answer: 0, why: "Une mesure de réussite est un chiffre que vous suivez pour prouver que le changement a marché." },
            { objective: "O6", q: "Votre responsable a deux minutes. Comment commencez-vous votre recommandation d'une page ?", options: ["Par l'historique du problème", "Par la liste de toutes les personnes à qui vous avez parlé", "Par votre recommandation et la première étape, dans les premières lignes", "Par la matrice de décision"], answer: 2, why: "Mettre le point principal en premier permet à un responsable occupé d'agir." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Décider et recommander",
        questions: [
          { objective: "O4", q: "Dans une matrice de décision, qu'est-ce qu'un poids ?", options: ["L'importance d'un critère", "Le poids d'un carton", "La note d'une option", "Un mot de passe"], answer: 0, why: "Les poids montrent l'importance." },
          { objective: "O4", q: "L'option A a 4 sur le coût (poids 3) et 2 sur le risque (poids 2). Son total pour ces deux critères est :", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { objective: "O5", q: "Une bonne façon de tester le choix de l'IA est de demander :", options: ["Seulement « Tu es sûre ? »", "« Quelles sont les meilleures raisons de NE PAS choisir ceci ? »", "Rien", "« Choisis pour moi »"], answer: 1, why: "Défendre l'autre camp révèle les points faibles." },
          { objective: "O6", q: "Où doit aller le point principal d'une recommandation ?", options: ["Dans les premières lignes", "Tout à la fin", "Dans une note de bas de page", "Nulle part"], answer: 0, why: "Les responsables lisent d'abord le début." },
          { objective: "O6", q: "Pourquoi proposer un petit essai ?", options: ["Parce que ça coûte plus cher", "Pour retarder la décision pour toujours", "C'est plus facile à accepter et ça prouve l'idée", "Ce n'est pas utile"], answer: 2, why: "Les petits tests mesurables réduisent le risque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour résoudre des problèmes et prendre des décisions",
    questions: [
      { objective: "O1", q: "Un énoncé de problème clair contient :", options: ["Seulement une plainte", "Quoi, où, quand, quelle ampleur et pourquoi c'est important", "Une personne à accuser", "Une solution"], answer: 1, why: "Ces éléments rendent le problème soluble." },
      { objective: "O1", q: "Si vous n'avez pas de chiffres sur un problème, vous devez :", options: ["Demander à l'IA de les inventer", "Deviner", "Abandonner", "En recueillir pendant une semaine"], answer: 3, why: "Les faits valent mieux que les suppositions." },
      { objective: "O1", q: "Comment l'IA peut-elle aider pour un énoncé de problème ?", options: ["Elle ne peut pas aider", "En inventant les faits", "En décidant à votre place", "En vous posant des questions qui le précisent"], answer: 3, why: "De bonnes questions révèlent ce dont vous avez besoin." },
      { objective: "O2", q: "Un symptôme est :", options: ["La cause profonde", "Un signe d'un problème, pas sa cause", "Une solution", "Un outil"], answer: 1, why: "Les symptômes indiquent des causes plus profondes." },
      { objective: "O2", q: "Dans les 5 Pourquoi, vous demandez « Pourquoi ? » sur :", options: ["Cinquante fois", "Une seule fois", "Chaque réponse, environ cinq fois", "Rien"], answer: 2, why: "Chaque pourquoi creuse plus profond." },
      { objective: "O2", q: "Dans l'exemple de la caisse, la cause profonde était :", options: ["Le planning ne correspondait pas à l'activité du soir", "Les clients étaient lents", "Les caisses étaient vieilles", "Il pleuvait"], answer: 0, why: "Le planning avait été fait pour le matin." },
      { objective: "O3", q: "Combien d'options faut-il comparer au minimum ?", options: ["Aucune", "Une", "Quatre, dont ne rien changer", "Seulement la première idée de l'IA"], answer: 2, why: "Comparer plusieurs options mène à de meilleures décisions." },
      { objective: "O3", q: "Faire un remue-méninges veut dire :", options: ["Lister beaucoup d'idées rapidement sans les juger tout de suite", "Décider vite", "Se disputer", "Écrire un rapport"], answer: 0, why: "On juge plus tard." },
      { objective: "O3", q: "L'IA propose une idée que votre lieu de travail n'accepterait jamais. Vous :", options: ["Insistez", "La barrez", "La cachez", "La payez vous-même"], answer: 1, why: "Gardez des options réalistes." },
      { objective: "O4", q: "Lequel est un critère courant de matrice de décision ?", options: ["La météo de demain", "La couleur préférée", "Le chiffre porte-bonheur", "Le coût"], answer: 3, why: "Le coût est un critère clé." },
      { objective: "O4", q: "Dans la matrice de ce cours, les notes vont de :", options: ["1 à 5", "1 à 100", "A à Z", "0 à 1 seulement"], answer: 0, why: "Une échelle simple de 1 à 5." },
      { objective: "O4", q: "Le total le plus élevé de la matrice est :", options: ["Inutile", "Automatiquement la réponse", "Toujours faux", "Un bon candidat, que vous vérifiez quand même"], answer: 3, why: "Vérifiez que le résultat a du sens." },
      { objective: "O4", q: "Qui choisit les poids et les notes ?", options: ["Un nombre au hasard", "L'IA seule", "Vous, selon les faits et ce que votre lieu de travail valorise", "Personne"], answer: 2, why: "Le jugement reste à vous." },
      { objective: "O5", q: "Lequel est un problème courant du raisonnement de l'IA ?", options: ["Être toujours trop prudente", "Des chiffres inventés", "Refuser d'écrire", "Des calculs parfaits"], answer: 1, why: "L'IA peut inventer des chiffres." },
      { objective: "O5", q: "Les règles et politiques citées par l'IA doivent être vérifiées auprès de :", options: ["Personne", "Une autre IA seulement", "Une rumeur", "La source officielle ou votre responsable"], answer: 3, why: "Les règles demandent une source qui fait autorité." },
      { objective: "O5", q: "Pourquoi noter ce que vous avez vérifié ?", options: ["Ce n'est pas utile", "Pour remplir la page", "Cela renforce votre recommandation", "Pour accuser l'IA"], answer: 2, why: "Cela montre un travail soigné." },
      { objective: "O5", q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA quand vous résolvez un problème ?", options: ["Des données confidentielles de clients", "Une description générale du problème", "Votre liste d'options", "Le nom des critères"], answer: 0, why: "Les données confidentielles restent dehors." },
      { objective: "O6", q: "Une recommandation d'une page contient :", options: ["Seulement votre opinion", "Problème, cause profonde, options, recommandation, premières étapes, mesure, risques", "Tous les e-mails que vous avez envoyés", "Des mots de passe"], answer: 1, why: "Ces sections permettent d'agir." },
      { objective: "O6", q: "Une mesure du succès est :", options: ["Votre salaire", "Le chiffre qui montre si le changement a marché", "Un compliment", "Une supposition"], answer: 1, why: "Les mesures prouvent les résultats." },
      { objective: "O6", q: "Quel essai vaut-il mieux proposer ?", options: ["Deux semaines sur deux soirs, en mesurant les temps d'attente", "Tout changer pour toujours tout de suite", "Pas d'essai et pas de mesure", "Un changement secret"], answer: 0, why: "Les petits essais mesurés sont faciles à accepter." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      6,
      9,
      11,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Énoncé du problème",
        objective: "O1",
        notYet: "L'énoncé est vague ou n'a pas de faits.",
        meets: "Dit quoi, où, quand, quelle ampleur et pourquoi c'est important, avec des faits.",
        exceeds: "Comprend des chiffres que l'apprenant a recueillis lui-même."
      },
      {
        name: "Cause profonde",
        objective: "O2",
        notYet: "Pas de 5 Pourquoi, ou une cause reprise de l'IA sans vérification.",
        meets: "Une chaîne de 5 Pourquoi jusqu'à une cause profonde vérifiée avec des faits ou des collègues.",
        exceeds: "Montre quelles causes proposées par l'IA ont été écartées et pourquoi."
      },
      {
        name: "Options et matrice",
        objective: "O4",
        notYet: "Moins de quatre options, ou pas de matrice pondérée.",
        meets: "Au moins quatre options dont « ne rien changer », notées dans une matrice avec au moins quatre critères pondérés et des totaux justes.",
        exceeds: "L'apprenant explique pourquoi les poids conviennent à son lieu de travail."
      },
      {
        name: "Raisonnement de l'IA vérifié",
        objective: "O5",
        notYet: "Aucune note sur ce qui a été vérifié.",
        meets: "Des notes sur au moins deux choses vérifiées dans le raisonnement de l'IA, et aucune donnée confidentielle utilisée.",
        exceeds: "Comprend le meilleur argument contre l'option choisie et la réponse à cet argument."
      },
      {
        name: "Recommandation",
        objective: "O6",
        notYet: "Le point principal est noyé, ou les étapes et la mesure manquent.",
        meets: "Une page avec le point principal en premier, les premières étapes, un petit essai et une mesure de réussite.",
        exceeds: "Liste les risques et la façon de les gérer."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui présentent leur recommandation à un responsable dans les 30 jours (enquête de suivi)",
      "Recommandations qui mènent à un essai ou à un changement au travail",
      "Apprenants qui obtiennent une promotion, un rôle de chef d'équipe ou un nouvel emploi dans les 6 mois"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur ou un smartphone avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini, ou l'outil approuvé par le lieu de travail",
      "Un tableur gratuit (Google Sheets ou Microsoft Excel en ligne) ou du papier pour la matrice de décision",
      "Un vrai problème de travail ou un exemple réaliste, comme le temps d'attente aux caisses",
      "Environ 60 minutes au total, plus le temps de rassembler des faits sur un vrai problème"
    ],
    facilitatorNotes: [
      "Proposez un problème d'exemple commun aux apprenants qui ne peuvent pas utiliser un vrai problème, pour que tout le monde pratique chaque étape.",
      "Faites faire les 5 Pourquoi en petits groupes ; les personnes qui font le travail voient souvent la cause profonde en premier.",
      "Vérifiez qu'aucune donnée confidentielle de client n'entre dans les outils d'IA pendant les exercices.",
      "Faites présenter la recommandation d'une page en deux minutes à un partenaire qui joue le responsable.",
      "Notez la recommandation avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
