"use strict";

// Koach Learn course (French translation of athletes/athletes-mental-performance.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// General education only, as in the English: points to coaches, athletic trainers, school counselors, licensed mental health professionals and the 988 Lifeline (US). No therapy or diagnosis.

module.exports = {
  id: "athletes-mental-performance-fr",
  lang: "fr",
  translationOf: "athletes-mental-performance",
  category: "Athletes",
  name: "Préparation mentale et concentration",
  skills: "Respiration carrée pour calmer le trac, Écrire des mots-clés et un discours intérieur, Construire une routine d'avant-match, Se remettre d'une erreur, Savoir quand et où trouver du soutien",
  outcome: "construire et utiliser une routine d'avant-match écrite avec une respiration pour se recentrer, des mots-clés et un plan pour se remettre d'une erreur, et savoir exactement à qui vous adresser quand le stress dépasse le simple trac.",
  about: [
    "Ce cours s'adresse aux sportifs qui ont le trac, perdent leur concentration ou ont du mal à rebondir après une erreur, et aux entraîneurs qui veulent enseigner des compétences mentales simples. Ce sont des compétences générales de performance, pas une thérapie.",
    "Vous pratiquerez des techniques utilisées par les sportifs de tous niveaux : respiration lente, discours intérieur utile, routines et remises à zéro rapides. Vous utiliserez un assistant IA pour vous aider à écrire votre routine, et vous apprendrez quand parler à une vraie personne.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Si vous vous sentez un jour en danger ou sans espoir, appelez ou envoyez un SMS au 988 aux États-Unis, appelez le numéro d'urgence de votre pays ailleurs, ou parlez tout de suite à un adulte de confiance."
  ],
  finalTask: "Écrivez une fiche d'une page avec votre routine d'avant-match : le déroulé avant le match, une respiration carrée pour vous recentrer, trois mots-clés et une remise à zéro en trois étapes après une erreur. Utilisez un assistant IA pour vous aider à la formuler, pratiquez-la à deux entraînements, puis montrez-la à votre entraîneur et ajustez-la.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs de lycée, d'université et de club qui ont le trac, perdent leur concentration ou ont du mal à rebondir après une erreur, et des entraîneurs qui veulent enseigner des compétences mentales simples.",
    startingPoint: "Ils sont en compétition régulièrement et ressentent le trac du jour de match. La plupart n'ont pas de routine écrite, ont un discours intérieur négatif sans s'en rendre compte et ne savent pas qui contacter quand le stress dépasse le trac.",
    gap: "Un trac mal géré et le fait de ressasser ses erreurs font perdre de la performance, et un stress sérieux peut passer inaperçu. Des compétences simples et pratiquées aident à performer sous pression, et savoir quand et où trouver un vrai soutien peut protéger la santé et la vie.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Compétences de performance générales seulement, pas une thérapie ni un remplacement d'un conseiller",
      "Un téléphone ou un ordinateur avec un assistant IA gratuit, ou du papier",
      "Environ 60 minutes de leçons, plus de la pratique pendant deux entraînements d'équipe",
      "La santé mentale est privée et sensible ; les ressources de crise (988, 911) concernent les États-Unis"
    ],
    prerequisites: "Aucun"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En repensant à un grand match récent", action: "décrire vos propres signes physiques et pensées de trac, et quand ils commencent", standard: "en nommant au moins deux signes physiques et une pensée" },
    { id: "O2", condition: "Avant ou pendant l'entraînement", action: "faire une démonstration de respiration carrée pendant quatre cycles", standard: "avec des temps égaux de quatre, ou une respiration lente sans pause si retenir votre souffle est désagréable" },
    { id: "O3", condition: "À partir d'une pensée négative que vous avez souvent", action: "écrire trois mots-clés qui disent à votre corps quoi faire", standard: "avec chaque mot-clé de un à trois mots et portant sur quelque chose que vous contrôlez" },
    { id: "O4", condition: "Avec votre programme du jour de match", action: "écrire une routine d'avant-match de la veille au soir jusqu'au coup d'envoi", standard: "avec seulement des étapes que vous contrôlez, une respiration pour vous recentrer, vos mots-clés, et des horaires vérifiés avec votre entraîneur" },
    { id: "O5", condition: "Après une erreur pendant un match ou un entraînement", action: "appliquer la remise à zéro en trois étapes : relâcher, se recentrer et se reconcentrer", standard: "en faisant les trois étapes avant l'action suivante et en gardant l'analyse pour après le match" },
    { id: "O6", condition: "Face à des signes que le stress dépasse le trac", action: "identifier les signaux d'alerte et nommer qui contacter, y compris le 988 et le 911", standard: "en nommant au moins deux personnes de confiance et le bon numéro pour une crise et pour une urgence" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Calme et concentration",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comprendre le trac du jour de match",
          minutes: 4,
          goal: "Repérer vos propres signes de trac et les voir comme une énergie que vous pouvez gérer.",
          text: [
            "Avant un grand match, votre cœur bat plus vite, vos mains peuvent transpirer et vous pouvez avoir l'estomac noué. C'est votre corps qui se prépare à performer. Un peu de trac aide ; trop peut vous rendre crispé ou précipité.",
            "Tout le monde le ressent, y compris les professionnels. La compétence n'est pas de faire disparaître le trac, mais de le remarquer et de le ramener à un niveau qui vous aide.",
            "Commencez par observer. Que ressentez-vous dans votre corps, quelles pensées arrivent, et quand commencent-elles ? L'écrire rend le trac plus facile à gérer."
          ],
          words: [["Trac", "la réaction naturelle du corps avant quelque chose d'important : cœur rapide, mains moites, estomac noué."], ["Niveau d'activation", "à quel point vous vous sentez remonté, de très calme à très tendu."]],
          slides: [
            { title: "Le trac est normal", bullets: ["Cœur rapide, mains moites, estomac noué", "Votre corps se prépare", "Les pros le ressentent aussi"] },
            { title: "La compétence", bullets: ["Pas zéro trac", "La bonne dose pour vous"] },
            { title: "Commencez par observer", bullets: ["Qu'est-ce que je ressens dans mon corps ?", "Quelles pensées arrivent ?", "Quand commencent-elles ?"] }
          ],
          tryIt: "Pensez à votre dernier grand match. Écrivez trois signes dans votre corps et deux pensées que vous avez eues avant le début, et quand ils ont commencé.",
          youCanNow: "repérer vos propres signes de trac et les décrire.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un nœud à l'estomac avant un match ?", options: ["Un signe que vous ne devriez pas jouer", "Un signe que vous êtes faible", "Votre corps qui se prépare à performer", "Un signe que vous êtes malade"], answer: 2, why: "Ces signes physiques, c'est votre corps qui se prépare ; la compétence consiste à les gérer." },
            { objective: "O1", q: "Vous voulez commencer à gérer votre trac. Que faites-vous d'abord ?", options: ["Noter ce que vous ressentez, ce que vous pensez et quand cela commence", "Essayer de faire disparaître le trac", "L'ignorer complètement", "Sauter l'échauffement"], answer: 0, why: "Le remarquer et le noter rend le trac plus facile à gérer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "La respiration carrée : se recentrer en 60 secondes",
          minutes: 5,
          goal: "Utiliser la respiration carrée pour calmer votre corps en une minute environ.",
          text: [
            "Respirer lentement est l'un des moyens les plus rapides de calmer le corps. La respiration carrée est simple : inspirez en comptant jusqu'à quatre, retenez quatre temps, expirez sur quatre temps, retenez quatre temps. Répétez quatre fois.",
            "Vous pouvez la faire sur le banc, sur la ligne des lancers francs avec des temps plus courts, au vestiaire ou avant un examen. Pratiquez-la quand vous êtes calme pour qu'elle marche quand vous avez le trac.",
            "Si retenir votre souffle est désagréable, sautez les pauses et inspirez simplement lentement, puis expirez encore plus lentement. Arrêtez si vous avez des vertiges."
          ],
          steps: ["Inspirez par le nez sur 4 temps.", "Retenez 4 temps.", "Expirez lentement sur 4 temps.", "Retenez 4 temps.", "Répétez 4 tours."],
          words: [["Respiration carrée", "inspirer, retenir, expirer et retenir pendant des temps égaux, comme les quatre côtés d'un carré."]],
          slides: [
            { title: "Respiration carrée", bullets: ["Inspirez 4", "Retenez 4", "Expirez 4", "Retenez 4"] },
            { title: "Où l'utiliser", bullets: ["Sur le banc ou au vestiaire", "Avant un lancer franc ou un service", "Avant un examen"] },
            { title: "Conseils", bullets: ["Pratiquez quand vous êtes calme", "Sautez les pauses si c'est désagréable", "Arrêtez en cas de vertiges"] }
          ],
          tryIt: "Faites tout de suite quatre tours de respiration carrée. Notez votre tension de 1 à 10 avant et après.",
          youCanNow: "utiliser la respiration carrée pour calmer votre corps en une minute environ.",
          quickCheck: [
            { objective: "O2", q: "Combien de cycles de respiration carrée la leçon propose-t-elle ?", options: ["Un", "Dix", "Quatre", "Vingt"], answer: 2, why: "Inspirez sur 4, retenez sur 4, expirez sur 4, retenez sur 4, et répétez quatre fois." },
            { objective: "O2", q: "Vous avez des vertiges pendant la respiration carrée. Que faites-vous ?", options: ["Retenir votre souffle plus longtemps", "Arrêter", "Respirer plus vite", "Continuer encore dix cycles"], answer: 1, why: "La leçon dit d'arrêter si vous avez des vertiges." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mots-clés et discours intérieur",
          minutes: 5,
          goal: "Écrire trois mots-clés et transformer un discours intérieur négatif en consignes utiles.",
          text: [
            "Le discours intérieur, c'est ce que vous vous dites dans votre tête. « Ne rate pas » met l'image de l'échec dans votre esprit. « Lâcher souple, accompagner le geste » dit à votre corps quoi faire.",
            "Les mots-clés sont un à trois mots qui orientent votre attention : « regard haut », « pieds rapides », « action suivante », « grand et solide ». Choisissez des mots sur ce que vous contrôlez, pas sur le score.",
            "Un assistant IA peut aider. Essayez : « Je suis serveur au volley. Quand j'ai le trac, je pense \"ne mets pas le service dans le filet\". Donne-moi cinq mots-clés courts qui me disent quoi faire à la place. » Gardez ceux qui vous ressemblent."
          ],
          steps: ["Écrivez une pensée négative que vous avez souvent.", "Demandez-vous : que veux-je que mon corps fasse à la place ?", "Transformez-la en 1 à 3 mots.", "Choisissez trois mots-clés et entraînez-vous à les dire."],
          words: [["Discours intérieur", "les mots que vous vous dites dans votre tête."], ["Mot-clé", "un mot ou une courte phrase qui oriente votre attention vers ce qu'il faut faire."]],
          slides: [
            { title: "Le discours intérieur guide l'action", bullets: ["« Ne rate pas » → l'image de l'échec", "« Lâcher souple » → dit quoi faire"] },
            { title: "De bons mots-clés", bullets: ["1 à 3 mots", "Sur ce que vous contrôlez", "« Regard haut » « Pieds rapides » « Action suivante »"] },
            { title: "L'IA peut aider", bullets: ["Donnez-lui votre pensée négative", "Demandez 5 mots-clés courts qui disent quoi faire", "Gardez ceux qui vous conviennent"] }
          ],
          tryIt: "Écrivez une pensée négative que vous avez en match. Utilisez un assistant IA pour obtenir cinq mots-clés qui disent quoi faire à la place. Choisissez vos trois préférés.",
          youCanNow: "écrire des mots-clés et transformer un discours intérieur négatif en consignes utiles.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un mot-clé ?", options: ["Un long discours avant un match", "Un mot sur le score", "Un mot que dit votre adversaire", "Un à trois mots qui orientent votre attention"], answer: 3, why: "Les mots-clés sont des expressions courtes comme « regard haut » qui orientent votre attention." },
            { objective: "O3", q: "Avant un penalty, vous pensez souvent « ne rate pas ». Par quoi le remplacez-vous ?", options: ["« Ne rate pas encore »", "« Frappe propre, accompagne le geste »", "« On va perdre si je rate »", "« Pourvu qu'il rentre »"], answer: 1, why: "Un discours intérieur utile dit à votre corps quoi faire, pas quoi éviter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Calme et concentration",
        questions: [
          { objective: "O1", q: "Avant un grand match, votre cœur s'emballe. Cela veut dire :", options: ["Que quelque chose ne va pas chez vous", "Que vous devriez abandonner", "Que votre corps se prépare à performer", "Que vous n'êtes pas assez bon"], answer: 2, why: "Le trac est une réaction normale du corps avant les moments importants." },
          { objective: "O1", q: "Quel est l'objectif face au trac ?", options: ["Le ramener à un niveau qui vous aide", "Le faire disparaître complètement", "L'ignorer toujours", "L'augmenter"], answer: 0, why: "Un peu de trac aide ; la compétence, c'est de gérer son niveau." },
          { objective: "O2", q: "Quels sont les temps de la respiration carrée ?", options: ["Inspirer 1, expirer 10", "Inspirer 10, retenir 10", "Seulement des respirations rapides", "Inspirer 4, retenir 4, expirer 4, retenir 4"], answer: 3, why: "Des temps égaux, comme les côtés d'un carré." },
          { objective: "O3", q: "Lequel est un mot-clé utile ?", options: ["« Ne te plante pas »", "« Pieds rapides »", "« Ne rate pas »", "« Je craque toujours »"], answer: 1, why: "Il dit à votre corps quoi faire." },
          { objective: "O2", q: "Quand faut-il pratiquer la respiration carrée ?", options: ["Seulement pendant le plus grand match", "Quand on est calme, pour qu'elle marche quand on a le trac", "Jamais", "Seulement le soir"], answer: 1, why: "S'entraîner au calme rend la technique prête sous pression." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Routines, remises à zéro et soutien",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construire une routine d'avant-match",
          minutes: 5,
          goal: "Écrire une routine d'avant-match avec des horaires et des étapes que vous contrôlez.",
          text: [
            "Une routine est une série d'étapes que vous faites de la même façon avant chaque match. Elle donne à votre esprit un repère familier, pour que vous vous sentiez prêt quel que soit l'adversaire.",
            "Une routine simple : la veille (préparer son sac, routine de sommeil), le repas du jour de match, l'arrivée, l'échauffement, une minute de respiration pour se recentrer, vos mots-clés, et votre attention sur votre première tâche dans le match.",
            "Gardez des étapes sur ce que vous contrôlez. Les superstitions, c'est amusant, mais la routine doit marcher même si vous oubliez vos chaussettes porte-bonheur. Vérifiez les horaires avec votre entraîneur pour qu'elle s'accorde à l'échauffement de l'équipe."
          ],
          steps: ["Listez ce que vous faites de la veille au coup de sifflet.", "Ajoutez une respiration pour vous recentrer et vos mots-clés.", "Nommez votre première tâche dans le match.", "Gardez seulement les étapes que vous contrôlez.", "Vérifiez qu'elle s'accorde à l'échauffement de l'équipe."],
          words: [["Routine", "des étapes que l'on répète de la même façon à chaque fois."], ["Contrôlable", "quelque chose que vous pouvez choisir ou changer vous-même, comme l'effort ou la préparation."]],
          slides: [
            { title: "Pourquoi les routines marchent", bullets: ["Un repère familier", "Prêt face à n'importe quel adversaire"] },
            { title: "Une routine simple", bullets: ["La veille : sac, sommeil", "Repas du jour de match et arrivée", "Échauffement, respiration, mots-clés", "Première tâche dans le match"] },
            { title: "Restez sur le contrôlable", bullets: ["Elle marche sans chaussettes porte-bonheur", "Elle s'accorde à l'échauffement de l'équipe"] }
          ],
          tryIt: "Demandez à un assistant IA de transformer votre liste d'étapes d'avant-match en un déroulé clair, de la veille au coup de sifflet. Modifiez-le pour qu'il corresponde à votre vrai jour de match.",
          youCanNow: "écrire une routine d'avant-match fondée sur des étapes que vous contrôlez.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une routine d'avant-match ?", options: ["Des étapes que vous faites de la même façon avant chaque match", "Un nouveau plan pour chaque adversaire", "Une liste de porte-bonheur", "Le plan de jeu de l'entraîneur"], answer: 0, why: "Une routine, ce sont les mêmes étapes à chaque match, qui donnent à votre esprit quelque chose de familier." },
            { objective: "O4", q: "Votre routine dépend d'un maillot porte-bonheur. Que faites-vous ?", options: ["Ajouter d'autres superstitions", "Ne pas jouer si vous oubliez le maillot", "Vous assurer que la routine marche quand même avec des étapes que vous contrôlez", "Demander à l'entraîneur d'en apporter un de rechange"], answer: 2, why: "Gardez des étapes qui portent sur ce que vous contrôlez, pour que la routine marche quoi qu'il arrive." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Se remettre d'une erreur",
          minutes: 5,
          goal: "Utiliser une remise à zéro en trois étapes pour passer à autre chose après une erreur en match.",
          text: [
            "Tous les sportifs font des erreurs. Ce qui compte, c'est la vitesse à laquelle vous passez à l'action suivante. Ressasser une erreur provoque souvent la suivante.",
            "Une remise à zéro en trois étapes : 1. Lâcher : un geste qui veut dire « c'est fini », comme s'essuyer les mains, toucher sa chaussure ou souffler. 2. Se recentrer : une respiration lente. 3. Se reconcentrer : dites votre mot-clé pour l'action suivante.",
            "Après le match, pas pendant, revenez sur l'erreur pour en tirer une leçon avec votre entraîneur ou la vidéo. Sur le moment, la seule tâche est l'action suivante."
          ],
          steps: ["Lâcher : un geste qui veut dire « c'est fini ».", "Se recentrer : une respiration lente.", "Se reconcentrer : dites votre mot-clé pour l'action suivante.", "Tirez la leçon après le match, pas pendant."],
          words: [["Remise à zéro", "une courte routine pour se vider la tête et se préparer au moment suivant."], ["État d'esprit « action suivante »", "se concentrer sur ce qui vient, pas sur ce qui vient de se passer."]],
          slides: [
            { title: "Les erreurs arrivent", bullets: ["Ressasser provoque la suivante", "La vitesse de la remise à zéro compte"] },
            { title: "Remise à zéro en trois étapes", bullets: ["1. Lâcher : un geste « c'est fini »", "2. Se recentrer : une respiration lente", "3. Se reconcentrer : mot-clé de l'action suivante"] },
            { title: "Apprendre plus tard", bullets: ["Revenez dessus après le match", "Avec votre entraîneur ou la vidéo"] }
          ],
          tryIt: "Choisissez votre geste pour lâcher et votre mot-clé pour l'action suivante. Au prochain entraînement, utilisez la remise à zéro en trois étapes après chaque erreur et comptez combien de fois vous l'avez utilisée.",
          youCanNow: "utiliser une remise à zéro en trois étapes pour passer vite à autre chose après une erreur.",
          quickCheck: [
            { objective: "O5", q: "En quoi consiste l'étape « relâcher » de la remise à zéro après une erreur ?", options: ["Discuter avec l'arbitre", "Revoir l'erreur dans votre tête", "Dire à vos coéquipiers ce qui n'a pas marché", "Un geste physique qui dit « c'est fini »"], answer: 3, why: "Relâcher, c'est un geste physique comme s'essuyer les mains ou toucher sa chaussure." },
            { objective: "O5", q: "Vous venez de rater une réception. Quel est votre travail maintenant ?", options: ["Réfléchir à pourquoi c'est arrivé", "Relâcher, prendre une respiration lente et dire votre mot-clé pour l'action suivante", "Regarder le ralenti", "Demander à sortir"], answer: 1, why: "Sur le moment, le seul travail est l'action suivante ; vous en tirerez les leçons après le match." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Quand c'est plus que du trac : trouver du soutien",
          minutes: 5,
          goal: "Identifier les signes qu'un stress demande un vrai soutien et nommer qui contacter.",
          text: [
            "Les compétences mentales aident face à la pression normale. Mais parfois, le stress est plus fort : vous vous sentez mal la plupart des jours, vous perdez l'intérêt pour ce que vous aimiez, vous n'arrivez plus à dormir ou à manger, vous vous sentez sans espoir, ou vous pensez à vous faire du mal. Ce n'est pas une faiblesse, et ce n'est pas quelque chose qu'un exercice de respiration ou un chatbot d'IA peut régler.",
            "Adressez-vous à une vraie personne : un parent ou un adulte de confiance, votre entraîneur, votre soigneur, un conseiller ou psychologue scolaire, le médecin de l'équipe ou un professionnel de santé mentale diplômé. Beaucoup d'établissements scolaires et d'universités proposent un accompagnement psychologique gratuit.",
            "Si vous ou quelqu'un que vous connaissez êtes en crise ou pensez au suicide aux États-Unis, appelez ou envoyez un SMS au 988, ou discutez en ligne sur 988lifeline.org. C'est gratuit et ouvert 24 h/24, 7 j/7. En cas d'urgence, appelez le 911. Hors des États-Unis, appelez la ligne d'écoute ou le numéro d'urgence de votre pays."
          ],
          steps: ["Repérez les signes que c'est plus que du trac.", "Parlez-en à un adulte de confiance, à votre entraîneur, à votre soigneur ou à un conseiller.", "Trouvez le service d'accompagnement psychologique de votre établissement.", "En crise : appelez ou envoyez un SMS au 988 (États-Unis). En urgence : 911, ou le numéro d'urgence de votre pays."],
          words: [["Professionnel de santé mentale diplômé", "un conseiller, psychologue ou thérapeute formé et autorisé à exercer."], ["988 Lifeline", "la ligne nationale gratuite de prévention du suicide et d'aide en cas de crise aux États-Unis : appel, SMS ou discussion en ligne 24 h/24."]],
          slides: [
            { title: "Plus que du trac si", bullets: ["Mal la plupart des jours", "Plus d'envie, plus de sommeil ni d'appétit", "Sentiment d'être sans espoir ou idées de se faire du mal"] },
            { title: "Parlez à une vraie personne", bullets: ["Adulte de confiance, entraîneur, soigneur", "Conseiller scolaire ou médecin de l'équipe", "Professionnel de santé mentale diplômé"] },
            { title: "En crise", bullets: ["Appelez ou SMS au 988 (États-Unis), gratuit, 24 h/24", "Discussion sur 988lifeline.org", "Urgence : 911, ou le numéro d'urgence de votre pays"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline (États-Unis, en anglais et en espagnol)", url: "https://988lifeline.org/" }],
          tryIt: "Tâche finale : écrivez votre fiche d'une page avec votre routine d'avant-match, votre respiration pour vous recentrer, trois mots-clés et la remise à zéro en trois étapes. En bas, notez le nom de deux personnes à qui vous pourriez parler et comment joindre le service d'accompagnement psychologique de votre établissement. Montrez la fiche à votre entraîneur.",
          youCanNow: "utiliser votre routine de préparation mentale et savoir quand et où trouver un vrai soutien.",
          quickCheck: [
            { objective: "O6", q: "Lequel est un signe qu'un stress demande un vrai soutien ?", options: ["Se sentir sans espoir la plupart des jours", "Le trac avant un grand match", "Le cœur qui bat vite sur la ligne de départ", "Les mains moites sur la ligne des lancers francs"], answer: 0, why: "Se sentir abattu ou sans espoir la plupart des jours, c'est plus que du trac normal." },
            { objective: "O6", q: "Un ami vous écrit qu'il pense au suicide. Aux États-Unis, que faites-vous ?", options: ["Garder le secret", "Lui dire d'essayer la respiration carrée", "Demander à un chatbot d'IA quoi faire", "Prévenir tout de suite un adulte de confiance et lui donner le 988, ou appeler le 911 s'il est en danger maintenant"], answer: 3, why: "Une vraie personne doit aider ; le 988 est la ligne de crise et le 911 sert aux urgences." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Routines, remises à zéro et soutien",
        questions: [
          { objective: "O4", q: "Pourquoi les sportifs utilisent-ils des routines d'avant-match ?", options: ["Pour sauter l'échauffement", "Pour impressionner le public", "Pour éviter l'entraîneur", "Pour donner à l'esprit un repère familier et se sentir prêt"], answer: 3, why: "Les routines créent un chemin familier vers le sentiment d'être prêt." },
          { objective: "O4", q: "Quelle étape de la routine est contrôlable ?", options: ["Votre minute de respiration", "Les décisions de l'arbitre", "La météo", "La composition de l'autre équipe"], answer: 0, why: "C'est vous qui choisissez de faire votre respiration." },
          { objective: "O5", q: "Quelle est l'étape 1 de la remise à zéro après une erreur ?", options: ["Contester l'arbitre", "Revoir l'erreur dans sa tête", "Lâcher : un geste qui veut dire « c'est fini »", "Quitter le match"], answer: 2, why: "Un geste physique aide à lâcher prise." },
          { objective: "O5", q: "Quand faut-il étudier une erreur ?", options: ["Au milieu de l'action suivante", "Jamais", "Pendant que l'entraîneur parle", "Après le match, avec votre entraîneur ou la vidéo"], answer: 3, why: "Pendant le match, la seule tâche est l'action suivante." },
          { objective: "O6", q: "Un coéquipier vous dit qu'il se sent sans espoir et parle de se faire du mal. Que faites-vous ?", options: ["Je lui dis de faire de la respiration carrée", "J'en parle tout de suite à un adulte de confiance et je lui donne le 988 (ou la ligne d'écoute du pays)", "Je garde le secret", "Je lui dis de demander à un chatbot"], answer: 1, why: "Cela demande de vraies personnes et une aide en cas de crise, tout de suite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation mentale et concentration",
    questions: [
      { objective: "O1", q: "Avoir les mains moites avant un match, c'est :", options: ["Un signe qu'il faut abandonner", "Toujours dangereux", "Un signe normal de trac", "Une infraction au règlement"], answer: 2, why: "C'est votre corps qui se prépare." },
      { objective: "O1", q: "Les sportifs professionnels ont-ils le trac ?", options: ["Oui, ils le gèrent", "Jamais", "Seulement les débutants", "Seulement à l'entraînement"], answer: 0, why: "Tout le monde a le trac ; les pros le gèrent." },
      { objective: "O1", q: "La première étape pour gérer le trac est :", options: ["Observer ce que vous ressentez et pensez", "L'ignorer", "Crier", "Sauter le match"], answer: 0, why: "On ne peut pas gérer ce qu'on ne remarque pas." },
      { objective: "O2", q: "La respiration carrée a combien de parties égales ?", options: ["Deux", "Trois", "Quatre", "Cinq"], answer: 2, why: "Inspirer, retenir, expirer, retenir." },
      { objective: "O2", q: "Si retenir votre souffle est désagréable, vous pouvez :", options: ["Retenir plus longtemps", "Sauter les pauses et expirer lentement", "Arrêter de respirer", "Respirer très vite"], answer: 1, why: "Une respiration lente sans pauses calme aussi." },
      { objective: "O3", q: "Le discours intérieur, c'est :", options: ["Parler à l'arbitre", "Un chant d'équipe", "Une publication en ligne", "Ce que vous vous dites dans votre tête"], answer: 3, why: "C'est votre voix intérieure." },
      { objective: "O3", q: "Quel discours intérieur aide le plus ?", options: ["« Ne rate pas »", "« Je craque toujours »", "« Lâcher souple, accompagner le geste »", "« C'est sans espoir »"], answer: 2, why: "Il dit à votre corps quoi faire." },
      { objective: "O3", q: "Les bons mots-clés portent sur :", options: ["Le score", "Le public", "L'autre équipe", "Ce que vous contrôlez"], answer: 3, why: "Contrôlez ce que vous pouvez contrôler." },
      { objective: "O3", q: "Comment l'IA peut-elle aider pour les mots-clés ?", options: ["Elle peut proposer de courtes consignes parmi lesquelles vous choisissez", "Elle peut jouer à votre place", "Elle peut diagnostiquer l'anxiété", "Elle ne peut pas aider du tout"], answer: 0, why: "L'IA est douée pour formuler ; c'est vous qui choisissez ce qui vous convient." },
      { objective: "O4", q: "Une routine d'avant-match doit marcher même si :", options: ["Vous gagnez", "Vous oubliez vos chaussettes porte-bonheur", "L'entraîneur s'en va", "Il pleut"], answer: 1, why: "Elle repose sur des étapes contrôlables, pas sur la chance." },
      { objective: "O4", q: "Avec qui vérifier les horaires de votre routine ?", options: ["Votre rival", "Un inconnu en ligne", "Votre entraîneur", "Personne"], answer: 2, why: "Elle doit s'accorder à l'échauffement de l'équipe." },
      { objective: "O5", q: "Qu'est-ce que l'état d'esprit « action suivante » ?", options: ["Se concentrer sur ce qui vient, pas sur ce qui s'est passé", "Revoir ses erreurs", "Accuser ses coéquipiers", "Regarder le tableau d'affichage"], answer: 0, why: "L'action suivante est la seule que vous pouvez changer." },
      { objective: "O5", q: "Quelle est l'étape 2 de la remise à zéro après une erreur ?", options: ["Contester", "Quitter le terrain", "Regarder les réseaux sociaux", "Une respiration lente"], answer: 3, why: "Lâcher, se recentrer par une respiration, se reconcentrer." },
      { objective: "O5", q: "Quelle est l'étape 3 de la remise à zéro après une erreur ?", options: ["Crier", "Se reconcentrer avec son mot-clé pour l'action suivante", "Revoir l'erreur", "Regarder le public"], answer: 1, why: "Le mot-clé vous oriente vers la tâche suivante." },
      { objective: "O6", q: "Lequel est un signe que le stress dépasse le trac ?", options: ["Avoir l'estomac noué avant un match", "Se sentir mal la plupart des jours et perdre l'intérêt", "Être enthousiaste", "Un cœur rapide avant le coup d'envoi"], answer: 1, why: "Un moral bas qui dure demande un vrai soutien." },
      { objective: "O6", q: "Un chatbot d'IA peut-il remplacer un conseiller ?", options: ["Oui", "Seulement le week-end", "Seulement pour les sportifs", "Non, parlez à une vraie personne"], answer: 3, why: "Un stress sérieux demande une personne formée." },
      { objective: "O6", q: "À qui parler d'un stress sérieux ?", options: ["À un adulte de confiance, à l'entraîneur, au soigneur ou à un conseiller scolaire", "Seulement à vous-même", "À personne", "Aux adversaires"], answer: 0, why: "Ces personnes peuvent aider ou vous orienter vers de l'aide." },
      { objective: "O6", q: "Aux États-Unis, le numéro de la ligne de crise est :", options: ["411", "311", "988", "0"], answer: 2, why: "Appelez ou envoyez un SMS au 988 pour la Suicide and Crisis Lifeline." },
      { objective: "O6", q: "Quand la 988 Lifeline est-elle ouverte ?", options: ["Seulement en semaine", "Seulement la nuit", "Seulement pendant la saison", "24 h/24, 7 j/7"], answer: 3, why: "Elle est gratuite et ouverte 24 heures sur 24, tous les jours." },
      { objective: "O6", q: "Aux États-Unis, en cas d'urgence où quelqu'un est en danger maintenant, vous appelez :", options: ["Seulement votre entraîneur", "Le 911", "Un ami plus tard", "Personne"], answer: 1, why: "Le 911 est pour les urgences qui se passent maintenant ; ailleurs, appelez le numéro d'urgence de votre pays." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      2,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Déroulé d'avant-match",
        objective: "O4",
        notYet: "Des étapes n'ont pas d'horaire, ou dépendent de choses que le sportif ne contrôle pas.",
        meets: "Un déroulé de la veille au soir jusqu'au coup d'envoi, avec seulement des étapes contrôlables, vérifié avec l'entraîneur.",
        exceeds: "Nomme la première tâche du sportif dans le match et s'accorde exactement avec l'échauffement de l'équipe."
      },
      {
        name: "Respiration pour se recentrer",
        objective: "O2",
        notYet: "Pas de respiration pour se recentrer, ou les temps ne sont pas clairs.",
        meets: "La respiration carrée (ou une respiration lente sans pause) figure sur la fiche à un moment précis et a été pratiquée à deux entraînements.",
        exceeds: "Comprend une version plus courte pour les moments du match, comme sur la ligne des lancers francs."
      },
      {
        name: "Mots-clés",
        objective: "O3",
        notYet: "Moins de trois mots-clés, ou ils portent sur le score ou sur ce qu'il faut éviter.",
        meets: "Trois mots-clés de un à trois mots chacun, sur ce que le sportif contrôle.",
        exceeds: "Chaque mot-clé remplace une pensée négative précise que le sportif a souvent."
      },
      {
        name: "Remise à zéro après une erreur",
        objective: "O5",
        notYet: "Il manque une ou plusieurs des trois étapes.",
        meets: "Relâcher, se recentrer et se reconcentrer sont écrits avec le geste et le mot-clé du sportif.",
        exceeds: "Le sportif dit l'avoir utilisée à l'entraînement et note ce qu'il analysera après le match."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la fiche de routine avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui disent utiliser encore leur routine et leur remise à zéro après une erreur 30 jours plus tard (questionnaire de suivi)",
      "Les apprenants qui savent nommer qui contacter et la 988 Lifeline lors du suivi",
      "Les entraîneurs qui disent avoir ajouté une respiration ou une remise à zéro en équipe à l'entraînement"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du papier ou une note sur le téléphone pour la fiche de routine",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini), facultatif",
      "L'heure de votre prochain match et le plan d'échauffement de l'équipe",
      "Les coordonnées du conseiller de votre établissement ou de votre soigneur",
      "Environ 60 minutes, plus de la pratique pendant deux entraînements d'équipe"
    ],
    facilitatorNotes: [
      "Dites clairement que ce sont des compétences de performance, pas une thérapie ; n'essayez pas de conseiller les sportifs en groupe.",
      "Avant la leçon 6, renseignez-vous sur le service d'écoute de votre établissement et partagez-le avec le 988 et le 911.",
      "Si un sportif dit qu'il est en crise ou qu'il pense à se faire du mal, restez avec lui et faites venir tout de suite un adulte de confiance ou un professionnel.",
      "Pratiquez la respiration carrée ensemble dans le calme ; dites aux sportifs de supprimer les pauses ou d'arrêter s'ils ont des vertiges.",
      "Gardez les fiches de routine privées, sauf si le sportif choisit de les montrer à l'entraîneur."
    ]
  }
};
