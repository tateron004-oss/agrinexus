"use strict";

// Koach Learn course (French translation of youth/youth-digital-wellbeing.js). See scripts/koachlearn-courses/README.md, "Translations".
// Phone menus are given with their usual French names (Réglages, Temps d'écran, Paramètres, Bien-être numérique) and a "search Settings" fallback, as in the English.
// 988 is US-only; readers elsewhere are told to use their own country's crisis line or emergency number.

module.exports = {
  id: "youth-digital-wellbeing-fr",
  lang: "fr",
  translationOf: "youth-digital-wellbeing",
  category: "Youth",
  name: "Bien-être numérique et temps d'écran sain",
  skills: "Vérifier votre vrai temps d'écran, Repérer les fonctions faites pour vous faire défiler sans fin, Protéger votre sommeil des écrans, Maîtriser les notifications et limiter les applis, Construire un fil d'actualité plus sain, Créer et tester un plan écrans",
  outcome: "vérifier comment vous utilisez vraiment votre téléphone, repérer les fonctions qui vous y ramènent, changer vos réglages et vos habitudes pour protéger votre sommeil, votre concentration et votre humeur, et suivre un plan écrans personnel pendant une semaine.",
  about: [
    "Les téléphones, les jeux et les réseaux sociaux peuvent être super : des amis, de la musique, apprendre, créer, trouver de l'aide. Mais ils sont aussi conçus pour vous garder dessus le plus longtemps possible. Le bien-être numérique, c'est utiliser les écrans d'une façon qui vous aide, pas d'une façon qui envahit votre sommeil, vos devoirs, votre sport, votre travail ou votre humeur.",
    "Ce cours est pour les jeunes qui veulent plus de contrôle, pas une leçon de morale. Personne ne va vous dire de jeter votre téléphone. Vous allez regarder vos propres chiffres, apprendre les astuces des applis, changer quelques réglages et construire un plan qui colle à votre vie.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\" sur votre propre téléphone ou appareil. Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez votre plan écrans personnel et testez-le pendant sept jours : votre objectif de temps d'écran, vos deux applis principales à limiter (avec les limites réglées dans votre téléphone), vos changements de notifications, une heure d'arrêt des écrans avant de dormir et un endroit où garer votre téléphone la nuit, deux choses à faire au lieu de défiler, et un changement dans votre fil d'actualité. À la fin de la semaine, comparez votre temps d'écran et votre sommeil avec la semaine d'avant.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes, surtout des adolescents, qui utilisent chaque jour des téléphones, des jeux et les réseaux sociaux et veulent mieux maîtriser leur temps d'écran sans qu'on leur fasse la morale.",
    startingPoint: "Ils utilisent leur téléphone avec aisance pour les applis, les jeux et les messages. La plupart sous-estiment leur temps d'écran, laissent presque toutes les notifications activées, défilent tard le soir et n'ont jamais fixé de limites aux applis ni changé exprès leur fil.",
    gap: "Les applis sont conçues pour garder les gens dessus, ce qui peut empiéter sur le sommeil, les devoirs, le sport, le travail et l'humeur. Les jeunes ont besoin de voir leurs vrais chiffres, de repérer les hameçons, de changer leurs réglages et leurs habitudes et de tester un plan, pour que les écrans les aident au lieu de prendre le dessus.",
    constraints: [
      "Il faut son propre téléphone ou appareil pour les tâches pratiques ; les menus changent selon le téléphone",
      "Pas de morale : les apprenants choisissent leurs propres objectifs",
      "Santé mentale : les apprenants qui se sentent souvent mal sont orientés vers un adulte de confiance, un médecin ou une ligne d'écoute, et ne sont pas pris en charge dans le cours",
      "Vie privée : les apprenants gardent leurs chiffres et leurs notes pour eux, sauf s'ils choisissent de les partager",
      "Des leçons courtes et des mots simples"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec les réglages de votre propre téléphone", action: "trouver votre temps d'écran quotidien, vos applis principales et vos prises en main ou notifications, et les comparer à vos objectifs", standard: "en notant les trois chiffres" },
    { id: "O2", condition: "Dans une appli que vous utilisez souvent", action: "repérer les hameçons de conception qui vous ramènent à l'appli et en désactiver ou en contourner un", standard: "en citant au moins trois hameçons" },
    { id: "O3", condition: "Pour vos nuits", action: "fixer une heure d'arrêt des écrans, un endroit où garer votre téléphone loin de votre lit et un mode sommeil", standard: "avec les écrans rangés environ 30 minutes avant l'heure du coucher" },
    { id: "O4", condition: "Avec les réglages de votre téléphone", action: "désactiver les notifications qui ne sont pas essentielles et fixer une limite quotidienne à votre appli principale", standard: "en désactivant les notifications d'au moins trois applis" },
    { id: "O5", condition: "Sur votre principal réseau social", action: "changer votre fil en masquant ou en arrêtant de suivre les comptes qui vous font vous sentir moins bien, et en suivant ceux qui vous aident à grandir", standard: "en changeant au moins deux comptes dans chaque sens" },
    { id: "O6", condition: "Avec ce que vous avez mis en place dans ce cours", action: "écrire un plan écrans personnel, le suivre pendant sept jours et comparer vos résultats avec vos chiffres de départ", standard: "avec toutes les parties du plan et une comparaison avant-après" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Connaître vos habitudes d'écran",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vérifier votre vrai temps d'écran",
          minutes: 4,
          goal: "Trouver votre temps d'écran quotidien et vos applis les plus utilisées sur votre propre téléphone.",
          text: [
            "La plupart des gens sous-estiment leur temps d'écran. Votre téléphone le mesure déjà. Sur un iPhone, ouvrez Réglages et cherchez Temps d'écran. Sur beaucoup de téléphones Android, ouvrez Paramètres et cherchez Bien-être numérique. Les noms peuvent changer selon le téléphone ; si vous ne trouvez pas, tapez \"temps d'écran\" dans la recherche des paramètres.",
            "Regardez trois chiffres : votre moyenne par jour, vos applis les plus utilisées, et combien de fois vous prenez votre téléphone en main ou recevez des notifications. Ces prises en main et ces notifications montrent à quelle fréquence votre téléphone vous ramène à lui.",
            "Il n'existe pas de chiffre parfait. Ce qui compte, c'est que votre temps d'écran colle à vos objectifs : assez de sommeil, devoirs ou travail faits, du temps avec vos amis en vrai, du sport, du repos et des loisirs. Vos chiffres sont un point de départ, pas une note."
          ],
          steps: ["Ouvrez les réglages de votre téléphone.", "Trouvez Temps d'écran (iPhone) ou Bien-être numérique (beaucoup d'Android), ou tapez \"temps d'écran\" dans la recherche.", "Notez votre moyenne par jour, vos trois applis principales et vos prises en main ou notifications.", "Demandez-vous : est-ce que cela colle à mes objectifs ?"],
          words: [["Temps d'écran", "le temps que vous passez à regarder un écran."], ["Prise en main", "chaque fois que vous prenez ou déverrouillez votre téléphone."], ["Bien-être numérique", "utiliser la technologie d'une façon qui soutient votre santé, vos objectifs et votre humeur."]],
          slides: [
            { title: "Votre téléphone le mesure déjà", bullets: ["iPhone : Réglages, puis Temps d'écran", "Beaucoup d'Android : Paramètres, puis Bien-être numérique", "Introuvable ? Cherchez \"temps d'écran\" dans les réglages"] },
            { title: "Trois chiffres à vérifier", bullets: ["Moyenne par jour", "Applis les plus utilisées", "Prises en main et notifications"] },
            { title: "Pas de chiffre parfait", bullets: ["Est-ce que cela colle à vos objectifs ?", "Sommeil, école ou travail, amis, sport, repos", "Un point de départ, pas une note"] }
          ],
          tryIt: "Ouvrez la page de temps d'écran de votre téléphone. Notez votre moyenne par jour, vos trois applis principales et vos prises en main ou notifications par jour. Puis écrivez un objectif que les écrans vous empêchent d'atteindre, s'il y en a un.",
          youCanNow: "trouver votre vrai temps d'écran, vos applis principales et vos prises en main sur votre propre téléphone.",
          quickCheck: [
            { objective: "O1", q: "Que montre le nombre de « prises en main » de votre téléphone ?", options: ["Le poids de votre téléphone", "Le nombre d'applis que vous avez", "À quelle fréquence votre téléphone vous ramène à lui", "Le niveau de votre batterie"], answer: 2, why: "Les prises en main et les notifications montrent à quelle fréquence votre téléphone vous ramène à lui." },
            { objective: "O1", q: "Vous ne trouvez ni Temps d'écran ni Bien-être numérique sur votre téléphone. Que faites-vous ?", options: ["Vous cherchez « temps d'écran » dans les réglages", "Vous devinez le chiffre", "Vous abandonnez", "Vous téléchargez une appli au hasard depuis une publicité"], answer: 0, why: "Les noms changent selon le téléphone, alors cherchez « temps d'écran » dans les réglages." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comment les applis vous font défiler sans fin",
          minutes: 5,
          goal: "Repérer les fonctions de conception qui vous ramènent à l'appli.",
          text: [
            "Beaucoup d'applis gagnent de l'argent grâce à votre attention : plus vous restez, plus elles vous montrent de publicités. Elles sont donc conçues pour être difficiles à lâcher. Connaître leurs astuces vous aide à choisir par vous-même.",
            "Les hameçons courants : le défilement infini (il n'y a jamais de fin), la lecture automatique (la vidéo suivante démarre toute seule), les notifications et les pastilles rouges (elles vous poussent à vérifier), les séries de jours (la peur de les perdre), les j'aime et les nombres de vues (vous revenez voir s'il y en a plus), et les fils \"pour vous\" qui apprennent exactement ce qui vous garde devant l'écran.",
            "Rien de cela ne veut dire que vous êtes faible. Ces fonctions sont conçues par des équipes d'experts. La solution, c'est d'ajouter vos propres points d'arrêt : désactivez la lecture automatique, fixez des limites de temps, et décidez avant d'ouvrir une appli ce que vous venez y faire."
          ],
          steps: ["Ouvrez votre appli principale de la leçon 1.", "Trouvez chaque hameçon : défilement infini, lecture automatique, notifications, séries, j'aime.", "Choisissez un hameçon à désactiver ou à contourner.", "Avant d'ouvrir une appli, dites ce que vous venez y faire."],
          words: [["Défilement infini", "un fil qui charge toujours plus de contenu, si bien qu'il n'y a pas de moment naturel pour s'arrêter."], ["Lecture automatique", "quand la vidéo suivante démarre toute seule."], ["Algorithme", "les règles informatiques qu'une appli utilise pour choisir ce qu'elle vous montre ensuite."]],
          slides: [
            { title: "Votre attention est le produit", bullets: ["Plus de temps sur l'appli = plus de publicités", "Les applis sont donc faites pour être difficiles à lâcher"] },
            { title: "Hameçons courants", bullets: ["Défilement infini et lecture automatique", "Notifications et pastilles rouges", "Séries, j'aime et nombres de vues", "Fils \"pour vous\""] },
            { title: "Ajoutez vos propres points d'arrêt", bullets: ["Désactivez la lecture automatique", "Fixez des limites de temps", "Décidez d'abord ce que vous venez faire"] }
          ],
          tryIt: "Ouvrez votre appli la plus utilisée et listez tous les hameçons que vous trouvez. Désactivez-en un (par exemple la lecture automatique ou un type de notification) si l'appli le permet. Écrivez lequel vous avez changé.",
          youCanNow: "repérer les fonctions que les applis utilisent pour vous faire défiler sans fin et ajouter vos propres points d'arrêt.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que la lecture automatique ?", options: ["Un mode de jeu", "La vidéo suivante qui démarre toute seule", "Un économiseur de batterie", "Un réglage de confidentialité"], answer: 1, why: "La lecture automatique lance la vidéo suivante sans que vous la choisissiez, ce qui rend l'arrêt difficile." },
            { objective: "O2", q: "Vous ouvrez une appli pour répondre à un message et finissez par défiler pendant une heure. Quelle habitude aide la prochaine fois ?", options: ["Activer plus de notifications", "Ouvrir plus d'applis à la fois", "Garder une série de jours", "Décider ce que vous venez faire avant d'ouvrir l'appli"], answer: 3, why: "Décider ce que vous venez faire ajoute votre propre point d'arrêt." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Les écrans, le sommeil et votre humeur",
          minutes: 5,
          goal: "Fixer une heure d'arrêt des écrans et un endroit où garer votre téléphone la nuit.",
          text: [
            "Le sommeil, c'est le moment où votre corps et votre cerveau récupèrent. Les CDC (l'agence de santé publique des États-Unis) disent que les adolescents de 13 à 17 ans ont besoin de 8 à 10 heures par nuit, et les adultes de 18 ans et plus de 7 heures ou plus. Défiler, jouer et envoyer des messages tard le soir sont parmi les plus grands voleurs de sommeil : vous vous couchez plus tard et vous vous réveillez avec des notifications.",
            "Les conseils de sommeil des CDC comprennent : garder une heure de coucher et de lever régulière, garder la chambre sombre, calme et fraîche, et ranger les écrans environ 30 minutes avant de dormir. Un endroit où garer votre téléphone hors de votre lit, ou à l'autre bout de la chambre, rend cela plus facile. Prenez un petit réveil pas cher si votre téléphone vous sert de réveil.",
            "Remarquez aussi l'effet des écrans sur votre humeur. Si certaines applis vous laissent anxieux, en colère ou avec une moins bonne image de vous, c'est une information utile. Si vous vous sentez souvent déprimé, si vous n'arrivez pas à dormir ou si vous vous sentez sans espoir, parlez à un adulte de confiance ou à un médecin. Hors des États-Unis, appelez la ligne d'écoute ou le numéro d'urgence de votre pays ; aux États-Unis, vous pouvez appeler ou envoyer un SMS au 988 à toute heure."
          ],
          steps: ["Choisissez votre heure de coucher et retirez 30 minutes : c'est votre heure d'arrêt des écrans.", "Choisissez un endroit où garer votre téléphone, loin de votre lit.", "Activez le mode sommeil ou Ne pas déranger de votre téléphone pour la nuit.", "Remarquez quelles applis changent votre humeur, et comment."],
          words: [["Ne pas déranger", "un réglage du téléphone qui coupe le son des appels et des notifications pendant un temps choisi."], ["Rythme de sommeil", "se coucher et se lever à peu près à la même heure chaque jour."]],
          slides: [
            { title: "Combien dormir (CDC)", bullets: ["Ados de 13 à 17 ans : 8 à 10 heures", "Adultes de 18 ans et plus : 7 heures ou plus"] },
            { title: "Protégez votre sommeil", bullets: ["Même heure de coucher et de lever", "Chambre sombre, calme et fraîche", "Écrans rangés environ 30 minutes avant de dormir"] },
            { title: "Garez votre téléphone", bullets: ["Loin de votre lit", "Mode sommeil ou Ne pas déranger activé", "Un réveil si besoin"] },
            { title: "Surveillez votre humeur", bullets: ["Quelles applis vous font vous sentir moins bien ?", "Souvent déprimé ou sans sommeil ? Parlez à quelqu'un", "Ligne d'écoute de votre pays ; aux États-Unis, le 988"] }
          ],
          sources: [{ name: "CDC : À propos du sommeil (en anglais)", url: "https://www.cdc.gov/sleep/about/index.html" }, { name: "Ligne 988 de prévention du suicide et d'aide en cas de crise (États-Unis, en anglais)", url: "https://988lifeline.org/" }],
          tryIt: "Fixez votre heure d'arrêt des écrans et l'endroit où garer votre téléphone pour ce soir. Activez le mode sommeil ou Ne pas déranger. Demain, écrivez comment vous avez dormi et comment vous vous sentiez le matin.",
          youCanNow: "protéger votre sommeil avec une heure d'arrêt des écrans, un endroit où garer votre téléphone et le mode Ne pas déranger.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un endroit où garer votre téléphone ?", options: ["Une coque pour votre téléphone", "Un câble de chargement", "Un réglage d'appli", "Un endroit loin de votre lit où le téléphone reste la nuit"], answer: 3, why: "Garer le téléphone loin de votre lit rend le défilement tard le soir plus difficile." },
            { objective: "O3", q: "Vous vous couchez à 22 h 30. Quand rangez-vous les écrans ?", options: ["À 22 h 30", "Vers 22 h", "Quand vous vous sentez fatigué", "Après une dernière vidéo"], answer: 1, why: "Ranger les écrans environ 30 minutes avant le coucher vous aide à dormir." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître vos habitudes d'écran",
        questions: [
          { objective: "O1", q: "Où trouve-t-on en général le temps d'écran sur un iPhone ?", options: ["Dans l'appli Appareil photo", "Dans Réglages, puis Temps d'écran", "Dans la calculatrice", "Dans l'App Store"], answer: 1, why: "Les iPhone le mesurent dans Temps d'écran, dans les Réglages." },
          { objective: "O1", q: "Que vous apprend un nombre élevé de prises en main ?", options: ["Votre batterie est vieille", "Votre téléphone vous ramène à lui très souvent", "Votre téléphone est rapide", "Rien du tout"], answer: 1, why: "Les prises en main montrent à quelle fréquence vous revenez à votre téléphone." },
          { objective: "O2", q: "Pourquoi beaucoup d'applis utilisent-elles le défilement infini et la lecture automatique ?", options: ["Pour vous garder plus longtemps sur l'appli", "Pour économiser votre batterie", "Pour vous aider à dormir", "Parce que la loi l'exige"], answer: 0, why: "Plus de temps sur l'appli, c'est plus de publicités et plus d'argent pour l'appli." },
          { objective: "O3", q: "Combien d'heures de sommeil les CDC conseillent-ils aux ados de 13 à 17 ans ?", options: ["4 à 5", "5 à 6", "12 à 14", "8 à 10"], answer: 3, why: "Les CDC indiquent 8 à 10 heures pour les ados de 13 à 17 ans." },
          { objective: "O3", q: "Quelle habitude protège votre sommeil ?", options: ["Défiler au lit jusqu'à vous endormir", "Laisser les notifications avec le son fort", "Ranger les écrans environ 30 minutes avant de dormir", "Jouer jusqu'à 2 h du matin les soirs d'école"], answer: 2, why: "Les CDC conseillent de ranger les écrans avant de dormir." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Reprendre le contrôle",
      lessons: [
        {
          objectives: ["O4"],
          title: "Maîtriser les notifications et limiter les applis",
          minutes: 5,
          goal: "Désactiver les notifications qui ne sont pas essentielles et fixer une limite à une appli.",
          text: [
            "Chaque notification est une interruption. Retrouver sa concentration après avoir regardé son téléphone peut prendre un moment, ce qui ralentit les devoirs, l'entraînement, les révisions ou le travail. C'est vous qui décidez quelles applis ont le droit de vous interrompre.",
            "Gardez les notifications pour les personnes et les choses qui comptent (appels et messages de la famille, alertes de l'école ou du travail, votre transport). Désactivez-les pour les jeux, les achats et la plupart des réseaux sociaux. En général, cela se fait dans les réglages, à la rubrique Notifications, appli par appli.",
            "L'iPhone comme Android permettent de fixer des limites de temps par jour pour les applis, et des modes concentration ou Ne pas déranger pour l'école, le travail ou l'entraînement. Quand vous atteignez une limite, le téléphone vous le rappelle. Vous pouvez passer outre, mais cette pause vous laisse le choix. Certaines personnes enlèvent aussi les applis qui les tentent de l'écran d'accueil ou se déconnectent après usage, pour que les ouvrir demande un petit effort de plus."
          ],
          steps: ["Ouvrez les réglages, puis Notifications.", "Gardez les personnes et les alertes importantes ; désactivez les jeux, les achats et la plupart des réseaux sociaux.", "Fixez une limite par jour sur votre appli principale (Temps d'écran ou Bien-être numérique).", "Activez un mode concentration ou Ne pas déranger pendant l'école, le travail ou l'entraînement.", "Enlevez de votre écran d'accueil une appli qui vous tente."],
          words: [["Notification", "un message ou une alerte d'une appli qui s'affiche sur votre téléphone."], ["Limite d'appli", "une limite de temps par jour que vous fixez pour une appli."], ["Mode concentration", "un réglage qui coupe les distractions pendant que vous travaillez, étudiez ou vous reposez."]],
          slides: [
            { title: "Vous choisissez qui vous interrompt", bullets: ["Chaque alerte casse votre concentration", "Gardez les personnes et les alertes importantes", "Coupez jeux, achats, la plupart des réseaux"] },
            { title: "Fixez des limites d'applis", bullets: ["Une limite par jour sur votre appli principale", "Le rappel vous laisse le choix"] },
            { title: "Modes concentration", bullets: ["École, travail ou entraînement", "Coupez le bruit"] },
            { title: "Ajoutez un petit effort", bullets: ["Enlevez les applis tentantes de l'écran d'accueil", "Déconnectez-vous après usage"] }
          ],
          tryIt: "Passez en revue vos notifications et désactivez-les pour au moins trois applis qui n'ont pas besoin de vous interrompre. Puis fixez une limite de temps par jour sur votre appli principale de la leçon 1.",
          youCanNow: "choisir quelles applis peuvent vous interrompre, fixer des limites d'applis et utiliser les modes concentration.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi les notifications peuvent-elles ralentir vos devoirs ?", options: ["Chacune vous interrompt, et il faut du temps pour retrouver votre concentration", "Elles prennent de la place en mémoire", "Elles rendent l'écran plus sombre", "Elles changent vos notes"], answer: 0, why: "Chaque notification est une interruption qui détourne votre attention." },
            { objective: "O4", q: "Une appli de shopping vous envoie des alertes de soldes toute la journée. Que faites-vous ?", options: ["Vous les gardez ; vous pourriez rater une bonne affaire", "Vous regardez chacune tout de suite", "Vous désactivez les notifications de cette appli dans les réglages", "Vous désactivez plutôt vos appels et vos messages"], answer: 2, why: "Gardez les notifications des personnes et les alertes importantes ; désactivez celles du shopping et des jeux." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Un fil d'actualité plus sain et moins de comparaison",
          minutes: 5,
          goal: "Changer votre fil d'actualité pour qu'il vous laisse de meilleure humeur, pas l'inverse.",
          text: [
            "Les réseaux sociaux montrent une vitrine des meilleurs moments : les plus belles photos, des filtres et des retouches. Comparer votre vie de tous les jours aux meilleurs moments de quelqu'un d'autre peut vous donner l'impression de ne pas être à la hauteur. Rappelez-vous que ce que vous voyez a été choisi et retouché.",
            "Vous pouvez entraîner votre fil. Arrêtez de suivre ou masquez les comptes qui vous font vous sentir mal par rapport à votre corps, votre argent ou votre vie. Suivez des personnes qui vous apprennent quelque chose, vous font rire ou soutiennent vos objectifs : votre sport, la musique, l'art, un métier qui vous attire, votre culture. Utilisez l'option \"pas intéressé\" quand l'appli la propose. L'algorithme apprend de ce que vous regardez, alors regardez exprès.",
            "Faites le point avec vous-même : \"Comment je me sens après 10 minutes sur cette appli ?\" Si la réponse est souvent \"moins bien\", changez ce que vous suivez ou le temps que vous y passez. Si quelqu'un est cruel avec vous en ligne, parlez-en à un adulte de confiance ; le cours Koach Learn Se protéger du cyberharcèlement vous montre quoi faire."
          ],
          steps: ["Faites défiler votre fil pendant deux minutes et remarquez ce que chaque compte vous fait ressentir.", "Arrêtez de suivre ou masquez deux comptes qui vous font vous sentir moins bien.", "Suivez deux comptes qui vous apprennent quelque chose, vous inspirent ou vous font rire.", "Utilisez \"pas intéressé\" sur les contenus que vous ne voulez pas."],
          words: [["Vitrine des meilleurs moments", "seulement les meilleurs moments, choisis et retouchés pour faire bonne impression."], ["Masquer", "cacher les publications de quelqu'un sans arrêter de le suivre ni le prévenir."]],
          slides: [
            { title: "C'est une vitrine", bullets: ["Plus belles photos, filtres et retouches", "Ne comparez pas votre quotidien à leurs meilleurs moments"] },
            { title: "Entraînez votre fil", bullets: ["Arrêtez de suivre ou masquez ce qui vous fait du mal", "Suivez ce qui vous apprend, vous inspire ou vous fait rire", "Utilisez \"pas intéressé\""] },
            { title: "Faites le point", bullets: ["Comment je me sens après 10 minutes ?", "Souvent moins bien ? Changez ce que vous suivez"] }
          ],
          tryIt: "Passez deux minutes sur votre appli principale et notez ce que chacune des dix premières publications vous fait ressentir (mieux, pareil, moins bien). Masquez ou arrêtez de suivre deux comptes \"moins bien\" et suivez-en deux qui vous aident à grandir.",
          youCanNow: "façonner votre fil d'actualité pour qu'il soutienne votre humeur et vos objectifs au lieu de vous pousser à vous comparer.",
          quickCheck: [
            { objective: "O5", q: "À partir de quoi l'algorithme de l'appli apprend-il ?", options: ["De ce que vous regardez et faites dans l'appli", "De vos notes à l'école", "De la météo", "De rien ; les fils sont au hasard"], answer: 0, why: "L'algorithme apprend de ce que vous regardez, alors regarder exprès façonne votre fil." },
            { objective: "O5", q: "La plupart des jours, vous vous sentez moins bien après 10 minutes sur une appli. Qu'essayez-vous ?", options: ["Défiler plus longtemps pour aller mieux", "Suivre plus de comptes comme ceux qui vous contrarient", "Ignorer ce que vous ressentez", "Changer les comptes que vous suivez ou le temps que vous y passez"], answer: 3, why: "Si une appli vous laisse souvent de moins bonne humeur, changez votre fil ou votre temps dessus." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Créer et tester votre plan écrans",
          minutes: 6,
          goal: "Écrire un plan écrans et le tester pendant sept jours.",
          text: [
            "Un plan transforme les bonnes idées en habitudes. Votre plan écrans est court et précis, et il est à vous : c'est vous qui choisissez les objectifs.",
            "Mettez-y : votre objectif de temps d'écran par jour, vos deux applis principales à limiter (avec les limites réglées dans votre téléphone), vos changements de notifications, votre heure d'arrêt des écrans et l'endroit où garer votre téléphone, deux choses à faire au lieu de défiler quand vous vous ennuyez (marcher, vous entraîner, dessiner, appeler un ami, lire, cuisiner), et un changement dans votre fil.",
            "Testez-le pendant sept jours, puis comparez votre temps d'écran, vos prises en main et votre sommeil avec vos chiffres de la leçon 1. Gardez ce qui a marché et changez ce qui n'a pas marché. Craquer un jour, c'est normal ; recommencez simplement le lendemain. En parler à un ami ou à quelqu'un de votre famille, ou le faire ensemble, rend les choses plus faciles."
          ],
          steps: ["Écrivez votre objectif de temps d'écran.", "Fixez des limites sur vos deux applis principales.", "Notez vos changements de notifications et votre heure d'arrêt des écrans.", "Écrivez deux choses à faire au lieu de défiler.", "Testez pendant sept jours et comparez avec la leçon 1."],
          words: [["Plan écrans", "vos propres règles écrites sur quand, où et combien vous utilisez les écrans."]],
          slides: [
            { title: "Votre plan écrans", bullets: ["Objectif de temps d'écran et deux limites d'applis", "Changements de notifications", "Heure d'arrêt des écrans et endroit pour le téléphone"] },
            { title: "Au lieu de défiler", bullets: ["Marcher, s'entraîner, dessiner, lire, cuisiner", "Appeler ou voir un ami"] },
            { title: "Testez pendant sept jours", bullets: ["Comparez avec vos chiffres de la leçon 1", "Gardez ce qui marche, changez le reste", "Vous avez craqué ? Recommencez demain"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan écrans avec toutes ses parties, réglez les limites dans votre téléphone et suivez-le pendant sept jours. Le septième jour, comparez votre temps d'écran, vos prises en main et votre sommeil avec vos chiffres de la leçon 1.",
          youCanNow: "créer, suivre et ajuster un plan écrans personnel qui protège votre sommeil, votre concentration et votre humeur.",
          quickCheck: [
            { objective: "O6", q: "Que comparez-vous à la fin de votre test de sept jours ?", options: ["Votre temps d'écran, vos prises en main et votre sommeil avec vos chiffres de la leçon 1", "Le temps d'écran de vos amis", "Le prix de votre téléphone", "Votre nombre d'abonnés"], answer: 0, why: "Comparer avec vos chiffres de départ montre ce qui a marché." },
            { objective: "O6", q: "Vous vous ennuyez et attrapez votre téléphone. Que dit votre plan ?", options: ["Ouvrir votre appli principale", "Désactiver les limites d'applis", "Faire l'une de vos deux activités au lieu de défiler, comme marcher ou appeler quelqu'un", "Vous coucher plus tard"], answer: 2, why: "Votre plan liste deux choses à faire au lieu de défiler quand vous vous ennuyez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Reprendre le contrôle",
        questions: [
          { objective: "O4", q: "Quelles notifications vaut-il en général la peine de garder ?", options: ["Les messages de la famille et les alertes de l'école ou du travail", "Celles de tous les jeux", "Les promotions des boutiques", "Tous les j'aime des réseaux sociaux"], answer: 0, why: "Gardez les alertes qui comptent ; coupez le reste." },
          { objective: "O4", q: "Que se passe-t-il quand vous atteignez une limite d'appli que vous avez fixée ?", options: ["Votre téléphone est bloqué pour toujours", "L'appli est supprimée", "Votre téléphone vous le rappelle et vous laisse le choix", "Votre compte est banni"], answer: 2, why: "La limite ajoute une pause pour que vous puissiez choisir." },
          { objective: "O5", q: "Pourquoi vous comparer aux publications des réseaux sociaux est-il injuste envers vous ?", options: ["Les publications sont toujours fausses", "Les téléphones sont trop petits", "Personne ne publie rien de vrai", "Les publications sont souvent une vitrine : les meilleurs moments, choisis et retouchés"], answer: 3, why: "Vous comparez votre quotidien aux meilleurs moments de quelqu'un d'autre." },
          { objective: "O5", q: "Un compte vous donne souvent une moins bonne image de vous. Que pouvez-vous faire ?", options: ["Le regarder davantage", "Le masquer ou arrêter de le suivre", "Lui envoyer votre mot de passe", "Supprimer votre téléphone"], answer: 1, why: "Masquer ou arrêter de suivre change ce que votre fil vous montre." },
          { objective: "O6", q: "Vous n'avez pas suivi votre plan écrans le troisième jour. Et maintenant ?", options: ["Abandonner pour de bon", "Supprimer toutes vos applis", "Recommencer le lendemain et ajuster si besoin", "Le cacher à tout le monde"], answer: 2, why: "Craquer est normal ; continuez et ajustez le plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Bien-être numérique et temps d'écran sain",
    questions: [
      { objective: "O1", q: "Le bien-être numérique, c'est :", options: ["Ne jamais utiliser de téléphone", "Utiliser les écrans d'une façon qui soutient votre santé, vos objectifs et votre humeur", "Avoir le téléphone le plus récent", "Avoir le plus d'abonnés"], answer: 1, why: "Il s'agit que les écrans vous aident, pas qu'ils prennent le dessus." },
      { objective: "O1", q: "Sur beaucoup de téléphones Android, le temps d'écran se trouve dans les Paramètres, à la rubrique :", options: ["Bien-être numérique", "Appareil photo", "Fond d'écran", "Bluetooth"], answer: 0, why: "Beaucoup d'Android l'appellent Bien-être numérique ; le nom peut varier." },
      { objective: "O1", q: "Quels trois chiffres est-il le plus utile de vérifier d'abord ?", options: ["Batterie, stockage, luminosité", "Abonnés, j'aime, commentaires", "Moyenne par jour, applis principales, prises en main ou notifications", "Prix, âge et couleur du téléphone"], answer: 2, why: "Ils montrent combien et à quelle fréquence vous utilisez votre téléphone." },
      { objective: "O1", q: "Existe-t-il un chiffre de temps d'écran parfait pour tout le monde ?", options: ["Oui, exactement 1 heure", "Oui, exactement 3 heures", "Oui, zéro", "Non ; ce qui compte, c'est qu'il colle à vos objectifs"], answer: 3, why: "Votre temps d'écran doit coller à votre sommeil, à l'école, au travail et à votre vie." },
      { objective: "O2", q: "Le défilement infini est un hameçon parce que :", options: ["Il n'y a pas de moment naturel pour s'arrêter", "Il économise des données", "La loi l'exige", "Il rend l'écran plus lumineux"], answer: 0, why: "Sans fin, il est facile de continuer." },
      { objective: "O2", q: "Un \"algorithme\" dans une appli, c'est :", options: ["Un type de coque de téléphone", "Une personne qui lit vos messages", "Les règles informatiques qui choisissent ce qu'on vous montre ensuite", "Un niveau de jeu"], answer: 2, why: "Les algorithmes apprennent ce qui vous garde devant l'écran." },
      { objective: "O2", q: "Quel bon point d'arrêt pouvez-vous ajouter ?", options: ["Activer la lecture automatique", "Désactiver la lecture automatique", "Ajouter plus de notifications", "Supprimer toutes les limites"], answer: 1, why: "Désactiver la lecture automatique empêche la vidéo suivante de démarrer toute seule." },
      { objective: "O2", q: "Avant d'ouvrir une appli, une habitude utile est de :", options: ["Mettre le son au maximum", "Ouvrir cinq autres applis", "Vérifier toutes les notifications", "Décider ce que vous venez y faire"], answer: 3, why: "Un but clair rend plus facile de fermer l'appli." },
      { objective: "O3", q: "Combien d'heures de sommeil les CDC conseillent-ils aux adultes de 18 ans et plus ?", options: ["7 ou plus", "4", "5", "3 à 4"], answer: 0, why: "Les CDC disent que les adultes ont besoin de 7 heures ou plus." },
      { objective: "O3", q: "La nuit, l'endroit où garer votre téléphone doit être :", options: ["Sous votre oreiller", "Dans votre main", "Loin de votre lit", "Avec le son fort"], answer: 2, why: "La distance avec votre lit protège votre sommeil." },
      { objective: "O3", q: "Aux États-Unis, vous vous sentez souvent déprimé et n'arrivez pas à dormir. Où pouvez-vous demander de l'aide à toute heure ?", options: ["Dans un espace de commentaires", "En appelant ou en envoyant un SMS au 988", "En attendant sans rien dire à personne", "En demandant à une appli au hasard"], answer: 1, why: "Le 988 est gratuit et ouvert 24 h/24 aux États-Unis ; ailleurs, appelez la ligne d'écoute ou le numéro d'urgence de votre pays, et parlez aussi à un adulte de confiance ou à un médecin." },
      { objective: "O4", q: "Quelle notification vaut-il mieux désactiver ?", options: ["Votre transport est arrivé", "Un message de votre parent", "Une alerte de l'école", "Un jeu qui vous demande de revenir"], answer: 3, why: "Les alertes de jeux et de boutiques ont rarement besoin de vous interrompre." },
      { objective: "O4", q: "Qu'est-ce qu'un mode concentration ?", options: ["Un réglage qui coupe les distractions pendant que vous étudiez, travaillez ou vous reposez", "Un filtre d'appareil photo", "Une appli payante", "Un jeu"], answer: 0, why: "Les modes concentration coupent les alertes pendant un temps choisi." },
      { objective: "O4", q: "Enlever une appli tentante de l'écran d'accueil aide parce que :", options: ["Cela supprime votre compte", "L'ouvrir demande un petit effort de plus", "L'appli devient plus rapide", "Vous gagnez des points"], answer: 1, why: "Une petite étape en plus vous laisse le temps de choisir." },
      { objective: "O5", q: "Une \"vitrine des meilleurs moments\", c'est :", options: ["Un outil de pêche", "Un direct sans montage", "Votre rapport de temps d'écran", "Seulement les meilleurs moments, choisis et retouchés"], answer: 3, why: "Les réseaux sociaux montrent souvent seulement les meilleurs moments, retouchés." },
      { objective: "O5", q: "Que fait le fait de masquer un compte ?", options: ["Il le signale à la police", "Il supprime son compte", "Il cache ses publications sans arrêter de le suivre ni le prévenir", "Il lui envoie un message"], answer: 2, why: "Masquer cache ses publications discrètement." },
      { objective: "O5", q: "Une bonne question pour faire le point après avoir utilisé une appli, c'est :", options: ["Combien de j'aime j'ai eus ?", "Comment je me sens après 10 minutes sur cette appli ?", "Qui a le plus d'abonnés ?", "Qu'est-ce que je devrais acheter ?"], answer: 1, why: "Remarquer comment vous vous sentez vous aide à changer ce que vous utilisez." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans votre plan écrans ?", options: ["Vos mots de passe", "Une liste de gens avec qui vous disputer", "Activer toutes les notifications", "Deux choses à faire au lieu de défiler"], answer: 3, why: "Avoir d'autres activités prêtes rend plus facile de poser le téléphone." },
      { objective: "O6", q: "Combien de temps devez-vous tester votre plan écrans avant de le juger ?", options: ["Une minute", "Une heure", "Sept jours", "Ne jamais le tester"], answer: 2, why: "Une semaine vous donne de vrais chiffres à comparer." },
      { objective: "O6", q: "Qu'est-ce qui aide à tenir un plan écrans ?", options: ["En parler à un ami ou à sa famille, ou le faire ensemble", "Le garder secret", "Le rendre le plus strict possible", "Le changer toutes les heures"], answer: 0, why: "Le soutien des autres vous aide à continuer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif et limites d'applis",
        objective: "O4",
        notYet: "Pas d'objectif de temps d'écran, ou limites non réglées dans le téléphone.",
        meets: "Un objectif de temps d'écran par jour et des limites réglées sur les deux applis principales.",
        exceeds: "Utilise aussi un mode concentration pour l'école, le travail ou l'entraînement."
      },
      {
        name: "Notifications",
        objective: "O4",
        notYet: "Aucun changement dans les notifications.",
        meets: "Les notifications d'au moins trois applis non essentielles désactivées, en gardant les personnes et les alertes importantes.",
        exceeds: "A aussi enlevé une appli tentante de l'écran d'accueil."
      },
      {
        name: "Plan pour le sommeil",
        objective: "O3",
        notYet: "Pas d'heure d'arrêt des écrans ni d'endroit où garer le téléphone.",
        meets: "Une heure d'arrêt des écrans environ 30 minutes avant le coucher et un endroit où garer le téléphone loin du lit.",
        exceeds: "Le mode sommeil ou Ne pas déranger est activé chaque nuit du test."
      },
      {
        name: "Fil et autres activités",
        objective: "O5",
        notYet: "Aucun changement dans le fil, ou rien à faire au lieu de défiler.",
        meets: "Un changement dans le fil et deux choses à faire au lieu de défiler.",
        exceeds: "Note comment le changement de fil a joué sur l'humeur."
      },
      {
        name: "Test de sept jours",
        objective: "O6",
        notYet: "Le plan n'a pas été testé, ou les résultats n'ont pas été comparés.",
        meets: "Suivi pendant sept jours, avec le temps d'écran, les prises en main et le sommeil comparés à la leçon 1.",
        exceeds: "Dit ce qu'il faut garder et ce qu'il faut changer pour la semaine suivante."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants dont le temps d'écran ou les prises en main baissent après le test de sept jours (déclaré par eux-mêmes)",
      "Les apprenants qui disent dormir plus d'heures dans le suivi à 30 jours",
      "Les apprenants qui utilisent encore leur plan écrans après 30 jours (sondage de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Le téléphone ou l'appareil de l'apprenant",
      "Du papier ou une appli de notes pour le plan écrans et les notes de chaque jour",
      "Un petit réveil pas cher si le téléphone sert de réveil (facultatif)",
      "Environ 60 minutes en tout, plus un test de sept jours"
    ],
    facilitatorNotes: [
      "Gardez-le comme un choix, pas une leçon de morale : les apprenants fixent leurs propres objectifs et gardent leurs chiffres pour eux, sauf s'ils veulent les partager.",
      "Aidez les apprenants qui ont des téléphones différents à trouver les bons réglages ; les menus changent selon l'appareil.",
      "Donnez les ressources locales de santé mentale et d'aide en cas de crise, dont le 988 aux États-Unis, et dites aux apprenants à qui parler s'ils se sentent souvent mal.",
      "Faites du test de sept jours un défi de groupe avec un point en fin de semaine.",
      "Évaluez le plan écrans avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
