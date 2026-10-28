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
  chapters: [
    {
      name: "Chapitre 1 : Comprendre le problème",
      lessons: [
        {
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
          youCanNow: "écrire un énoncé de problème clair et factuel."
        },
        {
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
          youCanNow: "trouver la cause profonde d'un problème avec les 5 Pourquoi."
        },
        {
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
          youCanNow: "trouver et trier une liste d'options réalistes avec l'aide de l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comprendre le problème",
        questions: [
          { q: "Quel est l'énoncé de problème le plus clair ?", options: ["« C'est le désordre. »", "« En semaine de 17 h à 19 h, l'attente à la caisse est en moyenne de 12 minutes et nous recevons environ 5 plaintes par semaine. »", "« Les clients sont pénibles. »", "« Réglez ça. »"], answer: 1, why: "Il dit quoi, quand, quelle ampleur et pourquoi c'est important." },
          { q: "Qu'est-ce qu'une cause profonde ?", options: ["Une plainte", "La première chose qu'on remarque", "Une plante", "La raison profonde pour laquelle un problème arrive"], answer: 3, why: "Traiter la cause profonde empêche le problème de revenir." },
          { q: "Pendant les 5 Pourquoi, l'IA propose une cause. Que faites-vous ?", options: ["La vérifier avec des faits ou des collègues", "L'accepter", "Ignorer toutes les idées de l'IA", "Accuser quelqu'un"], answer: 0, why: "Seuls les faits confirment une cause." },
          { q: "Pourquoi inclure « ne rien changer » comme option ?", options: ["La loi l'exige", "C'est toujours le mieux", "Cela donne un point de référence pour comparer", "Ce n'est jamais utile"], answer: 2, why: "Un point de référence montre ce que chaque changement apporte." },
          { q: "Qui a souvent les meilleures idées pour régler un problème au travail ?", options: ["Les amis des clients", "Seulement l'IA", "Les personnes qui font le travail", "Personne"], answer: 2, why: "Ceux qui font le travail en connaissent les détails." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Décider et recommander",
      lessons: [
        {
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
          youCanNow: "comparer des options de façon équitable avec une matrice de décision pondérée."
        },
        {
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
          youCanNow: "tester le raisonnement de l'IA et repérer les erreurs avant de vous y fier."
        },
        {
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
          youCanNow: "résoudre un problème au travail étape par étape et présenter une recommandation sur laquelle votre responsable peut agir."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Décider et recommander",
        questions: [
          { q: "Dans une matrice de décision, qu'est-ce qu'un poids ?", options: ["L'importance d'un critère", "Le poids d'un carton", "La note d'une option", "Un mot de passe"], answer: 0, why: "Les poids montrent l'importance." },
          { q: "L'option A a 4 sur le coût (poids 3) et 2 sur le risque (poids 2). Son total pour ces deux critères est :", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { q: "Une bonne façon de tester le choix de l'IA est de demander :", options: ["Seulement « Tu es sûre ? »", "« Quelles sont les meilleures raisons de NE PAS choisir ceci ? »", "Rien", "« Choisis pour moi »"], answer: 1, why: "Défendre l'autre camp révèle les points faibles." },
          { q: "Où doit aller le point principal d'une recommandation ?", options: ["Dans les premières lignes", "Tout à la fin", "Dans une note de bas de page", "Nulle part"], answer: 0, why: "Les responsables lisent d'abord le début." },
          { q: "Pourquoi proposer un petit essai ?", options: ["Parce que ça coûte plus cher", "Pour retarder la décision pour toujours", "C'est plus facile à accepter et ça prouve l'idée", "Ce n'est pas utile"], answer: 2, why: "Les petits tests mesurables réduisent le risque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour résoudre des problèmes et prendre des décisions",
    questions: [
      { q: "Un énoncé de problème clair contient :", options: ["Seulement une plainte", "Quoi, où, quand, quelle ampleur et pourquoi c'est important", "Une personne à accuser", "Une solution"], answer: 1, why: "Ces éléments rendent le problème soluble." },
      { q: "Si vous n'avez pas de chiffres sur un problème, vous devez :", options: ["Demander à l'IA de les inventer", "Deviner", "Abandonner", "En recueillir pendant une semaine"], answer: 3, why: "Les faits valent mieux que les suppositions." },
      { q: "Comment l'IA peut-elle aider pour un énoncé de problème ?", options: ["Elle ne peut pas aider", "En inventant les faits", "En décidant à votre place", "En vous posant des questions qui le précisent"], answer: 3, why: "De bonnes questions révèlent ce dont vous avez besoin." },
      { q: "Un symptôme est :", options: ["La cause profonde", "Un signe d'un problème, pas sa cause", "Une solution", "Un outil"], answer: 1, why: "Les symptômes indiquent des causes plus profondes." },
      { q: "Dans les 5 Pourquoi, vous demandez « Pourquoi ? » sur :", options: ["Cinquante fois", "Une seule fois", "Chaque réponse, environ cinq fois", "Rien"], answer: 2, why: "Chaque pourquoi creuse plus profond." },
      { q: "Dans l'exemple de la caisse, la cause profonde était :", options: ["Le planning ne correspondait pas à l'activité du soir", "Les clients étaient lents", "Les caisses étaient vieilles", "Il pleuvait"], answer: 0, why: "Le planning avait été fait pour le matin." },
      { q: "Combien d'options faut-il comparer au minimum ?", options: ["Aucune", "Une", "Quatre, dont ne rien changer", "Seulement la première idée de l'IA"], answer: 2, why: "Comparer plusieurs options mène à de meilleures décisions." },
      { q: "Faire un remue-méninges veut dire :", options: ["Lister beaucoup d'idées rapidement sans les juger tout de suite", "Décider vite", "Se disputer", "Écrire un rapport"], answer: 0, why: "On juge plus tard." },
      { q: "L'IA propose une idée que votre lieu de travail n'accepterait jamais. Vous :", options: ["Insistez", "La barrez", "La cachez", "La payez vous-même"], answer: 1, why: "Gardez des options réalistes." },
      { q: "Lequel est un critère courant de matrice de décision ?", options: ["La météo de demain", "La couleur préférée", "Le chiffre porte-bonheur", "Le coût"], answer: 3, why: "Le coût est un critère clé." },
      { q: "Dans la matrice de ce cours, les notes vont de :", options: ["1 à 5", "1 à 100", "A à Z", "0 à 1 seulement"], answer: 0, why: "Une échelle simple de 1 à 5." },
      { q: "Le total le plus élevé de la matrice est :", options: ["Inutile", "Automatiquement la réponse", "Toujours faux", "Un bon candidat, que vous vérifiez quand même"], answer: 3, why: "Vérifiez que le résultat a du sens." },
      { q: "Qui choisit les poids et les notes ?", options: ["Un nombre au hasard", "L'IA seule", "Vous, selon les faits et ce que votre lieu de travail valorise", "Personne"], answer: 2, why: "Le jugement reste à vous." },
      { q: "Lequel est un problème courant du raisonnement de l'IA ?", options: ["Être toujours trop prudente", "Des chiffres inventés", "Refuser d'écrire", "Des calculs parfaits"], answer: 1, why: "L'IA peut inventer des chiffres." },
      { q: "Les règles et politiques citées par l'IA doivent être vérifiées auprès de :", options: ["Personne", "Une autre IA seulement", "Une rumeur", "La source officielle ou votre responsable"], answer: 3, why: "Les règles demandent une source qui fait autorité." },
      { q: "Pourquoi noter ce que vous avez vérifié ?", options: ["Ce n'est pas utile", "Pour remplir la page", "Cela renforce votre recommandation", "Pour accuser l'IA"], answer: 2, why: "Cela montre un travail soigné." },
      { q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA quand vous résolvez un problème ?", options: ["Des données confidentielles de clients", "Une description générale du problème", "Votre liste d'options", "Le nom des critères"], answer: 0, why: "Les données confidentielles restent dehors." },
      { q: "Une recommandation d'une page contient :", options: ["Seulement votre opinion", "Problème, cause profonde, options, recommandation, premières étapes, mesure, risques", "Tous les e-mails que vous avez envoyés", "Des mots de passe"], answer: 1, why: "Ces sections permettent d'agir." },
      { q: "Une mesure du succès est :", options: ["Votre salaire", "Le chiffre qui montre si le changement a marché", "Un compliment", "Une supposition"], answer: 1, why: "Les mesures prouvent les résultats." },
      { q: "Quel essai vaut-il mieux proposer ?", options: ["Deux semaines sur deux soirs, en mesurant les temps d'attente", "Tout changer pour toujours tout de suite", "Pas d'essai et pas de mesure", "Un changement secret"], answer: 0, why: "Les petits essais mesurés sont faciles à accepter." }
    ]
  }
};
