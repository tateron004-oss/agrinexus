"use strict";

// Koach Learn course (French translation of shared/public-speaking.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "public-speaking-fr",
  lang: "fr",
  translationOf: "public-speaking",
  category: "Athletes",
  name: "Prendre la parole en public et présenter",
  skills: "Préparer une courte intervention, Structurer un message, Faire des diapositives simples, S'entraîner et gérer le trac, Utiliser la voix et le langage du corps, Répondre aux questions",
  outcome: "préparer, répéter et faire une intervention claire de 2 minutes avec une ouverture forte, trois points clés et une conclusion claire, gérer votre trac, bien utiliser votre voix et votre corps, et répondre aux questions avec calme.",
  about: [
    "Parler devant des gens est l'une des peurs les plus courantes, et l'une des compétences les plus utiles. Vous l'utilisez dans les entretiens d'embauche, les réunions d'équipe, les présentations à des clients ou à des investisseurs, les interventions devant des donateurs et des bénévoles, les interviews avec les médias, les réunions de quartier et au vestiaire.",
    "Ce cours s'adresse aux athlètes, aux chefs d'entreprise, au personnel des associations, aux anciens militaires, aux jeunes, aux travailleurs et à toute personne qui veut prendre la parole avec confiance. Pas besoin d'être doué dès le départ. Les bons orateurs se forment par la préparation et l'entraînement.",
    "Vous allez préparer une courte intervention, lui donner une structure claire, faire des diapositives simples si vous en avez besoin, vous entraîner, gérer le trac, utiliser votre voix et votre corps, et répondre aux questions. Chaque leçon dure environ cinq minutes et se termine par un exercice. La tâche finale est une intervention de 2 minutes que vous enregistrez avec votre téléphone. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Enregistrez-vous avec votre téléphone pendant une intervention de 2 minutes sur un sujet que vous connaissez bien (votre sport, votre entreprise, votre cause, votre métier ou une compétence que vous avez). Elle doit avoir une accroche, trois points clés et une conclusion claire. Regardez la vidéo, notez une chose que vous avez bien faite et une chose à améliorer, puis enregistrez-la encore une fois.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs, des propriétaires d'entreprise, le personnel d'associations, des anciens combattants, des jeunes, des salariés et toute personne qui doit parler en entretien, en réunion d'équipe, en présentation commerciale, devant des donateurs, face aux médias, en réunion de quartier ou dans le vestiaire.",
    startingPoint: "Ils parlent avec des gens tous les jours et connaissent bien certains sujets, comme leur sport, leur entreprise, leur cause ou leur métier. Beaucoup sont nerveux devant un groupe, parlent sans structure, lisent leurs diapositives et ne se sont jamais regardés en vidéo.",
    gap: "Prendre la parole clairement aide à être embauché, à gagner des clients et des donateurs, à diriger une équipe et à être entendu dans sa communauté. Les apprenants ont besoin d'une méthode simple pour préparer, répéter et faire une courte intervention et répondre aux questions, pour que la peur ne les freine pas.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone avec un appareil photo et un minuteur ; les diapositives sont facultatives",
      "L'entraînement et l'enregistrement se font seul ou avec un ami, pour réduire la pression",
      "Confidentialité : les enregistrements restent sur le téléphone de l'apprenant, sauf s'il choisit de les partager",
      "Temps : des leçons d'environ cinq minutes, avec une intervention finale de 2 minutes"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour un sujet que vous connaissez bien", action: "écrire votre public, ce que vous attendez de lui et votre grande idée", standard: "avec la grande idée en une phrase" },
    { id: "O2", condition: "Pour une intervention de 2 minutes", action: "faire le plan avec une accroche, trois points clés avec des exemples et une conclusion avec un seul appel à l'action", standard: "sur une page de notes courtes" },
    { id: "O3", condition: "Pour votre intervention", action: "décider si vous avez besoin de diapositives et, si oui, en faire trois simples au maximum", standard: "avec une idée par diapositive et chaque fait vérifié" },
    { id: "O4", condition: "Avant de faire l'intervention", action: "répéter à voix haute avec un minuteur et utiliser la respiration pour gérer le trac", standard: "en finissant en 2 minutes ou moins" },
    { id: "O5", condition: "Pendant que vous parlez", action: "utiliser votre voix, votre regard et votre posture pour paraître sûr de vous", standard: "en corrigeant au moins un point remarqué sur votre enregistrement" },
    { id: "O6", condition: "Après une intervention", action: "répondre aux questions avec calme, y compris celles auxquelles vous ne savez pas répondre", standard: "en répétant chaque question et en finissant par votre grande idée" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer votre intervention",
      lessons: [
        {
          objectives: ["O1"],
          title: "Préparer une courte intervention : public, objectif et une grande idée",
          minutes: 5,
          goal: "Écrire votre public, votre objectif et votre grande idée pour une courte intervention.",
          text: [
            "Avant d'écrire le moindre mot, répondez à trois questions. Qui m'écoute ? Qu'est-ce que je veux qu'ils fassent, pensent ou ressentent après ? Quelle est la grande idée que je veux qu'ils retiennent ?",
            "Le même sujet change selon le public. Si vous parlez de la banque alimentaire de votre association à des donateurs, vous pouvez insister sur les résultats et sur ce que permet leur argent. Avec de nouveaux bénévoles, vous parleriez de ce qui se passe pendant un service. Devant une équipe de jeunes, un entraîneur qui parle de discipline prendrait leurs propres matchs comme exemples.",
            "Écrivez votre grande idée en une phrase qu'un enfant de 12 ans pourrait répéter : \"Arriver tôt chaque jour, c'est ce qui fait gagner les matchs serrés.\" ou \"Notre application fait gagner deux heures par semaine aux petits commerces.\" Tout dans votre intervention doit soutenir cette phrase. Si quelque chose ne la soutient pas, supprimez-le."
          ],
          steps: ["Écrivez qui vous écoute et ce qui compte pour eux.", "Écrivez ce que vous voulez qu'ils fassent, pensent ou ressentent après.", "Écrivez votre grande idée en une phrase simple.", "Vérifiez : chaque chose que vous prévoyez de dire soutient-elle la grande idée ?"],
          words: [["Public", "les personnes qui écoutent votre intervention."], ["Grande idée", "le message principal que vous voulez que les gens retiennent."]],
          slides: [
            { title: "D'abord, trois questions", bullets: ["Qui m'écoute ?", "Que doivent-ils faire, penser ou ressentir après ?", "Quelle est ma grande idée ?"] },
            { title: "S'adapter au public", bullets: ["Donateurs : résultats et impact", "Nouveaux bénévoles : comment se passe un service", "Équipe de jeunes : leurs propres matchs comme exemples"] },
            { title: "Une grande idée", bullets: ["Une phrase qu'un enfant de 12 ans pourrait répéter", "\"Notre application fait gagner deux heures par semaine aux petits commerces.\"", "Si ça ne soutient pas l'idée, supprimez-le"] }
          ],
          tryIt: "Choisissez un sujet que vous connaissez bien pour votre intervention de 2 minutes. Écrivez votre public, votre objectif pour eux et votre grande idée en une phrase.",
          youCanNow: "préparer une intervention en choisissant votre public, votre objectif et une grande idée.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi penser à votre public avant d'écrire une intervention ?", options: ["Pour utiliser des mots plus compliqués", "Pour que l'intervention corresponde à ce dont il a besoin et à ce qui l'intéresse", "Pour parler plus longtemps", "Pour ne pas avoir à répéter"], answer: 1, why: "Connaître le public vous aide à choisir ce qui compte pour lui." },
            { objective: "O1", q: "Vous parlez à de jeunes joueurs pour qu'ils rejoignent votre club. Quelle sera votre grande idée ?", options: ["Toute l'histoire du club depuis sa création", "La liste de toutes les règles", "Pourquoi rejoindre le club les aidera à progresser et à s'amuser", "Votre propre palmarès"], answer: 2, why: "La grande idée doit être le seul message que ce public doit retenir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Structure : accroche, trois points, conclusion",
          minutes: 5,
          goal: "Faire le plan d'une intervention de 2 minutes avec une accroche, trois points clés et une conclusion claire.",
          text: [
            "Une structure simple aide votre public à vous suivre et vous aide à vous souvenir de la suite. Utilisez : accroche, trois points, conclusion.",
            "L'accroche capte l'attention dans les 15 premières secondes : une courte histoire, un fait surprenant ou une question. \"La saison dernière, nous avons perdu quatre matchs d'un seul point.\" Ensuite, donnez trois points clés. Trois, c'est facile à retenir. Appuyez chacun sur un exemple ou un chiffre. Puis concluez : répétez votre grande idée et dites aux gens quoi faire ensuite. \"Venez tôt cette semaine. Je serai là à 6 h.\" ou \"Inscrivez-vous à un service avant vendredi.\"",
            "Pour une intervention de 2 minutes, cela fait environ 15 secondes pour l'accroche, 30 secondes par point et 15 secondes pour la conclusion. Écrivez le plan sous forme de notes courtes, pas de texte complet, pour avoir l'air naturel."
          ],
          steps: ["Écrivez une accroche : histoire, fait surprenant ou question.", "Écrivez trois points clés, chacun avec un exemple ou un chiffre.", "Écrivez une conclusion : répétez la grande idée et demandez une action.", "Chronométrez : environ 15 s d'accroche, 30 s par point, 15 s de conclusion."],
          words: [["Accroche", "une ouverture qui capte l'attention."], ["Appel à l'action", "dire au public la seule chose à faire ensuite."], ["Plan", "une courte liste des parties de votre intervention, dans l'ordre."]],
          slides: [
            { title: "Accroche, trois points, conclusion", bullets: ["Facile à suivre pour le public", "Facile à retenir pour vous"] },
            { title: "L'accroche (environ 15 secondes)", bullets: ["Une courte histoire", "Un fait surprenant", "Une question au public"] },
            { title: "Trois points (environ 30 secondes chacun)", bullets: ["Trois, c'est facile à retenir", "Appuyez chacun sur un exemple ou un chiffre"] },
            { title: "La conclusion (environ 15 secondes)", bullets: ["Répétez votre grande idée", "Une action claire : \"Inscrivez-vous avant vendredi.\"", "Des notes, pas un texte complet"] }
          ],
          tryIt: "Écrivez le plan de votre intervention de 2 minutes : une accroche, trois points avec un exemple chacun, et une conclusion avec un appel à l'action. Gardez des notes courtes sur une page ou dans une note du téléphone.",
          youCanNow: "faire le plan d'une courte intervention avec une accroche, trois points clés et une conclusion avec un appel à l'action.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert une accroche ?", options: ["À capter l'attention dans les premières secondes", "À terminer l'intervention", "À lister vos trois points", "À remercier le public"], answer: 0, why: "Une accroche fait écouter les gens tout de suite." },
            { objective: "O2", q: "Votre plan contient sept points clés pour une intervention de 2 minutes. Que faites-vous ?", options: ["Parler plus vite pour tout faire entrer", "Ajouter des diapositives", "Tout garder et supprimer la conclusion", "Choisir les trois points les plus importants"], answer: 3, why: "Trois points tiennent dans le temps et sont faciles à retenir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Des diapositives simples qui aident au lieu de gêner",
          minutes: 4,
          goal: "Faire des diapositives simples, ou décider que vous n'en avez pas besoin.",
          text: [
            "Les diapositives doivent aider le public, pas contenir votre texte. Beaucoup d'excellentes interventions courtes n'utilisent aucune diapositive. Utilisez-en quand une image, un graphique ou quelques mots clés rendent votre idée plus claire.",
            "Des règles qui marchent : une idée par diapositive ; un titre court ; au plus quelques mots ou une image ; un texte assez grand pour être lu du fond de la salle ; un bon contraste, comme un texte foncé sur un fond clair. Ne lisez jamais vos diapositives mot à mot ; le public lit plus vite que vous ne parlez.",
            "Des outils gratuits comme Google Slides, Microsoft PowerPoint pour le web et Canva permettent de faire des diapositives dans un navigateur. Un assistant d'IA peut proposer des titres à partir de votre plan, mais raccourcissez beaucoup son texte et vérifiez chaque fait et chaque chiffre qu'il vous donne."
          ],
          steps: ["Demandez-vous : une diapositive rend-elle ce point plus clair ? Sinon, passez.", "Une idée par diapositive, avec un titre court.", "Utilisez quelques mots ou une image.", "Faites un texte grand avec un bon contraste.", "Entraînez-vous sans lire les diapositives à voix haute."],
          words: [["Présentation", "un ensemble de diapositives pour une intervention."], ["Contraste", "à quel point le texte ressort sur le fond."]],
          slides: [
            { title: "Les diapositives aident le public", bullets: ["Ce n'est pas votre texte", "Beaucoup d'excellentes interventions courtes n'en ont pas"] },
            { title: "Règles pour les diapositives", bullets: ["Une idée par diapositive", "Quelques mots ou une image", "Texte grand, bon contraste"] },
            { title: "Ne les lisez pas", bullets: ["Les gens lisent plus vite que vous ne parlez", "Parlez plutôt de la diapositive"] },
            { title: "Outils gratuits", bullets: ["Google Slides, PowerPoint pour le web, Canva", "L'IA peut proposer des titres ; raccourcissez et vérifiez"] }
          ],
          tryIt: "Décidez si votre intervention de 2 minutes a besoin de diapositives. Si oui, faites-en trois au maximum dans un outil gratuit, avec une idée chacune. Si non, écrivez une phrase qui explique pourquoi l'intervention marche sans elles.",
          youCanNow: "faire des diapositives simples et lisibles, ou décider avec assurance de parler sans elles.",
          quickCheck: [
            { objective: "O3", q: "Quand une diapositive aide-t-elle une intervention ?", options: ["Quand elle contient tout votre texte", "Quand une image, un graphique ou quelques mots rendent un point plus clair", "Quand vous n'avez rien à dire", "Toujours, pour chaque phrase"], answer: 1, why: "Les diapositives aident seulement quand elles rendent un point plus clair." },
            { objective: "O3", q: "Un assistant d'IA vous donne une diapositive remplie de 80 mots. Que faites-vous ?", options: ["La lire mot à mot", "Réduire la taille du texte", "Ajouter des mots", "La réduire à un titre court et quelques mots, et vérifier les faits"], answer: 3, why: "Des diapositives simples aux faits vérifiés aident ; les murs de texte nuisent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer votre intervention",
        questions: [
          { objective: "O1", q: "Que devez-vous décider avant d'écrire votre intervention ?", options: ["Seulement votre tenue", "Combien de diapositives utiliser", "Votre public, votre objectif et votre grande idée", "La durée des questions"], answer: 2, why: "Ces trois éléments décident de tout le reste de l'intervention." },
          { objective: "O2", q: "Quelle est une bonne accroche ?", options: ["\"La saison dernière, nous avons perdu quatre matchs d'un seul point.\"", "\"Euh, bon, je vais parler maintenant.\"", "\"Désolé, je ne suis pas doué pour ça.\"", "Lire la diapositive de titre"], answer: 0, why: "Une courte histoire ou un fait surprenant capte l'attention." },
          { objective: "O2", q: "Pourquoi utiliser trois points clés ?", options: ["C'est une loi", "Plus de points, ça paraît toujours plus intelligent", "Ça remplit le temps", "Trois, c'est facile à retenir pour les gens"], answer: 3, why: "Trois points sont faciles à suivre et à retenir." },
          { objective: "O2", q: "Que fait une bonne conclusion ?", options: ["Elle finit par \"Voilà, c'est tout, je crois\"", "Elle répète la grande idée et demande une action", "Elle ajoute un quatrième point nouveau", "Elle s'excuse pour l'intervention"], answer: 1, why: "Une conclusion claire laisse les gens savoir quoi faire." },
          { objective: "O3", q: "Quelle diapositive est la meilleure ?", options: ["Dix puces en petits caractères", "Une page entière de votre texte", "Une idée, un titre court et un texte grand", "Un texte gris clair sur fond blanc"], answer: 2, why: "Des diapositives simples et lisibles aident le public." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Parler avec assurance",
      lessons: [
        {
          objectives: ["O4"],
          title: "L'entraînement et le trac",
          minutes: 5,
          goal: "Répéter une intervention à voix haute et utiliser des outils simples pour gérer le trac.",
          text: [
            "Le trac est normal, même pour les orateurs professionnels et pour les athlètes avant un grand match. Un cœur qui bat vite et des mains qui tremblent, c'est votre corps qui se prépare. Vous n'avez pas besoin de faire disparaître le trac ; vous devez l'utiliser.",
            "L'entraînement est le meilleur remède. Dites votre intervention à voix haute au moins trois fois, debout, avec un minuteur. Ensuite, enregistrez-la avec votre téléphone et regardez-la. Puis essayez-la devant un ami, un membre de votre famille, un entraîneur ou un collègue. À chaque fois, c'est plus facile.",
            "Le jour même : respirez lentement (inspirez sur 4, expirez sur 6) avant de commencer ; tenez vos notes ou posez vos mains ; trouvez un visage bienveillant dans la salle ; et rappelez-vous que le public veut que vous réussissiez. Si vous perdez le fil, faites une pause, regardez vos notes et continuez. Une pause vous paraît longue, mais elle leur paraît courte."
          ],
          steps: ["Dites l'intervention à voix haute trois fois, debout, avec un minuteur.", "Enregistrez-la avec votre téléphone et regardez-la.", "Entraînez-vous une fois devant une personne et demandez-lui un conseil.", "Avant de commencer : inspirez sur 4, expirez sur 6.", "Si vous perdez le fil : pause, regardez vos notes, continuez."],
          words: [["Répéter", "s'entraîner à voix haute avant de faire une intervention."], ["Trac", "la nervosité avant quelque chose d'important ; c'est normal et utile."]],
          slides: [
            { title: "Le trac est normal", bullets: ["Même les pros et les athlètes le ressentent", "Votre corps se prépare", "Utilisez-le ; ne luttez pas contre lui"] },
            { title: "Entraînez-vous à voix haute", bullets: ["Trois fois, debout, avec un minuteur", "Enregistrez et regardez", "Essayez devant une personne"] },
            { title: "Le jour même", bullets: ["Respirez : inspirez sur 4, expirez sur 6", "Trouvez un visage bienveillant", "Le public veut que vous réussissiez"] },
            { title: "Vous avez perdu le fil ?", bullets: ["Faites une pause", "Regardez vos notes", "Continuez : la pause leur paraît plus courte"] }
          ],
          tryIt: "Levez-vous et dites votre intervention de 2 minutes à voix haute trois fois avec un minuteur. Notez la durée de chaque essai et supprimez ce qui vous fait dépasser 2 minutes.",
          youCanNow: "répéter une intervention à voix haute, la chronométrer, et utiliser la respiration et les pauses pour gérer le trac.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire un cœur qui bat vite avant une intervention ?", options: ["Votre corps se prépare, c'est normal", "Vous devriez annuler l'intervention", "Vous n'êtes pas prêt", "Vous êtes malade"], answer: 0, why: "Le trac est un signe normal que votre corps se prépare." },
            { objective: "O4", q: "Votre répétition dure 3 minutes, mais vous en avez 2. Que faites-vous ?", options: ["Parler beaucoup plus vite", "Sauter la conclusion le jour J", "Couper ce qui ne soutient pas votre grande idée et chronométrer à nouveau", "Demander plus de temps le jour J"], answer: 2, why: "Couper le superflu garde l'intervention dans le temps et centrée sur l'essentiel." }
          ]
        },
        {
          objectives: ["O5"],
          title: "La voix et le langage du corps",
          minutes: 5,
          goal: "Utiliser votre voix, votre regard et votre corps pour paraître sûr de vous.",
          text: [
            "La façon de dire compte autant que ce que vous dites. Parlez un peu plus lentement et un peu plus fort que dans une conversation normale. Faites une pause après les points importants pour qu'ils marquent les esprits. Variez le ton pour ne pas paraître monotone, et supprimez les mots de remplissage comme \"euh\" et \"genre\" en faisant plutôt une pause.",
            "Tenez-vous droit, les pieds écartés à peu près à la largeur des épaules et le poids bien réparti. Gardez les mains détendues le long du corps ou utilisez-les pour des gestes naturels ; évitez de croiser les bras ou de garder les mains dans les poches. Regardez de vraies personnes, une à la fois, pendant une ou deux phrases chacune. En visioconférence, regardez la caméra, pas votre propre visage à l'écran.",
            "Chaque culture comprend le regard et les gestes à sa façon, alors observez votre public et adaptez-vous. Le but est de paraître calme, ouvert et intéressé par eux."
          ],
          steps: ["Parlez un peu plus lentement et plus fort que d'habitude.", "Faites une pause après les points importants.", "Remplacez le \"euh\" par une courte pause.", "Tenez-vous droit, pieds à la largeur des épaules, mains détendues.", "Regardez une personne pendant une phrase, puis une autre.", "En vidéo, regardez la caméra."],
          words: [["Langage du corps", "ce que disent sans mots votre posture, votre visage, vos mains et vos yeux."], ["Mots de remplissage", "des sons comme \"euh\", \"ben\" et \"genre\" qui remplissent le silence."]],
          slides: [
            { title: "Votre voix", bullets: ["Un peu plus lentement et plus fort", "Pause après les points clés", "Variez le ton ; remplacez le \"euh\" par une pause"] },
            { title: "Votre corps", bullets: ["Droit, pieds à la largeur des épaules", "Mains détendues ou gestes naturels", "Pas de bras croisés ni de mains dans les poches"] },
            { title: "Votre regard", bullets: ["Une personne, une phrase, puis la suivante", "En vidéo : regardez la caméra"] },
            { title: "Observez la salle", bullets: ["Le regard et les gestes varient selon les cultures", "Visez un air calme, ouvert et intéressé"] }
          ],
          tryIt: "Enregistrez 30 secondes de votre intervention avec votre téléphone. Regardez sans le son : vérifiez la posture, les mains et le regard. Puis écoutez les yeux fermés : comptez les \"euh\" et remarquez votre vitesse. Choisissez une chose à corriger.",
          youCanNow: "utiliser votre voix, votre posture, vos mains et votre regard pour paraître calme et sûr de vous.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un mot de remplissage ?", options: ["Un mot clé de votre grande idée", "Un mot comme « euh » ou « genre » qui remplit un silence", "Un mot sur une diapositive", "Le dernier mot de votre intervention"], answer: 1, why: "Les mots de remplissage comblent le silence ; une courte pause marche mieux." },
            { objective: "O5", q: "En regardant votre enregistrement, vous voyez que vous fixez le sol. Que faites-vous ?", options: ["Regarder une personne pendant une phrase, puis une autre", "Fermer les yeux en parlant", "Lire vos notes tout le temps", "Regarder seulement le plafond"], answer: 0, why: "Regarder une personne à la fois donne une image d'assurance." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Répondre aux questions",
          minutes: 5,
          goal: "Répondre aux questions après une intervention avec calme et clarté, y compris celles auxquelles vous ne savez pas répondre.",
          text: [
            "Des questions, cela veut dire que les gens écoutaient. Préparez-vous en écrivant les trois questions qu'on vous posera le plus probablement et une réponse courte pour chacune.",
            "Quand quelqu'un pose une question : écoutez-la en entier, remerciez la personne, et répétez ou reformulez la question pour que tout le monde l'entende. Répondez brièvement, en 30 secondes ou moins si possible, puis vérifiez : \"Est-ce que cela répond à votre question ?\" Si vous ne savez pas, dites-le honnêtement : \"Je ne sais pas, mais je vais me renseigner et vous répondre d'ici vendredi.\" Puis faites-le. N'inventez jamais rien.",
            "Face à une question hostile ou hors sujet, restez calme et poli : \"C'est une préoccupation légitime. Parlons-en après pour y consacrer le temps qu'il faut.\" Un journaliste ou un sponsor peut aussi poser des questions délicates ; faites une transition pour revenir à votre grande idée : \"Ce que je peux vous dire, c'est que...\". Terminez la séance de questions en redisant votre conclusion, pour que votre grande idée soit la dernière chose que les gens entendent."
          ],
          steps: ["Avant : écrivez trois questions probables et des réponses courtes.", "Écoutez la question en entier.", "Remerciez la personne et répétez la question pour tous.", "Répondez brièvement, puis vérifiez que cela répond.", "Vous ne savez pas ? Dites-le et promettez de revenir vers la personne.", "Terminez en répétant votre conclusion."],
          words: [["Questions-réponses", "le moment après une intervention où le public pose des questions."], ["Transition", "une phrase qui ramène une réponse délicate vers votre message principal."]],
          slides: [
            { title: "Se préparer", bullets: ["Écrivez trois questions probables", "Écrivez une réponse courte pour chacune"] },
            { title: "Répondre", bullets: ["Écoutez la question en entier", "Remerciez et répétez-la", "Répondez brièvement, puis vérifiez"] },
            { title: "Quand vous ne savez pas", bullets: ["Dites-le honnêtement", "\"Je vais me renseigner et vous répondre d'ici vendredi.\"", "N'inventez jamais"] },
            { title: "Questions délicates", bullets: ["Restez calme et poli", "Proposez d'en parler après", "Transition : \"Ce que je peux vous dire, c'est que...\""] }
          ],
          tryIt: "Tâche finale : enregistrez votre intervention de 2 minutes avec votre téléphone. Puis demandez à un ami de vous poser deux questions (ou posez-vous-en deux) et enregistrez vos réponses. Regardez la vidéo, notez un point fort et une chose à corriger, puis enregistrez l'intervention encore une fois.",
          youCanNow: "faire une courte intervention et répondre aux questions avec calme, y compris celles auxquelles vous ne savez pas encore répondre.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une transition quand on répond aux questions ?", options: ["Une diapositive qui relie deux points", "Une pause avant votre intervention", "Une phrase qui vous ramène de la question à votre message principal", "Un moyen d'éviter toutes les questions"], answer: 2, why: "Une transition comme « Ce que je peux vous dire, c'est que... » vous ramène à votre message." },
            { objective: "O6", q: "Quelqu'un pose une question à laquelle vous ne savez pas répondre. Que dites-vous ?", options: ["Inventer une réponse", "Ignorer la question", "Dire que c'est une mauvaise question", "« Je ne sais pas, mais je vais me renseigner et je vous réponds d'ici vendredi. »"], answer: 3, why: "L'honnêteté avec une date de réponse fixée garde la confiance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Parler avec assurance",
        questions: [
          { objective: "O4", q: "Quelle est la meilleure façon de se préparer à une intervention ?", options: ["La lire une fois en silence", "La dire à voix haute plusieurs fois, debout, avec un minuteur", "Apprendre seulement les diapositives par cœur", "Improviser"], answer: 1, why: "S'entraîner à voix haute est le meilleur remède contre le trac." },
          { objective: "O4", q: "Vous perdez le fil au milieu de l'intervention. Que faites-vous ?", options: ["Vous excuser plusieurs fois", "Quitter la scène", "Tout recommencer depuis le début", "Faire une pause, regarder vos notes et continuer"], answer: 3, why: "Une courte pause est normale et passe presque inaperçue." },
          { objective: "O5", q: "En visioconférence, où devez-vous regarder quand vous parlez ?", options: ["La caméra", "Votre propre visage à l'écran", "Le clavier", "Par la fenêtre"], answer: 0, why: "Regarder la caméra donne l'impression d'un contact visuel." },
          { objective: "O5", q: "Quelle est une bonne façon de supprimer les mots de remplissage comme \"euh\" ?", options: ["Parler plus vite", "Les remplacer par une courte pause", "Dire \"genre\" à la place", "Ne jamais s'arrêter de parler"], answer: 1, why: "Une pause donne une impression d'assurance ; les mots de remplissage, non." },
          { objective: "O6", q: "Quelqu'un pose une question à laquelle vous ne savez pas répondre. Que faire de mieux ?", options: ["Inventer une réponse", "Ignorer la personne", "Dire que vous ne savez pas, et promettre de répondre avant un jour précis", "Changer de sujet sans rien dire"], answer: 2, why: "L'honnêteté et un suivi gardent la confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Prendre la parole en public et présenter",
    questions: [
      { objective: "O1", q: "La \"grande idée\" d'une intervention, c'est :", options: ["La partie la plus longue", "Le message principal que vous voulez que les gens retiennent", "Le style de vos diapositives", "Le titre de votre première diapositive"], answer: 1, why: "Tout dans l'intervention soutient la grande idée." },
      { objective: "O1", q: "Vous allez parler de votre banque alimentaire à de nouveaux bénévoles. Sur quoi devez-vous insister ?", options: ["Vos déclarations d'impôts", "Les comptes rendus du conseil de l'an dernier", "Tous les programmes que vous menez", "Comment se passe un service de bénévole"], answer: 3, why: "Adaptez l'intervention à ce dont ce public a besoin." },
      { objective: "O1", q: "Si une partie de votre intervention ne soutient pas la grande idée, vous devez :", options: ["La supprimer", "La rallonger", "La mettre au début", "La mettre sur une diapositive"], answer: 0, why: "Supprimer garde l'intervention claire et courte." },
      { objective: "O2", q: "La structure simple d'intervention de ce cours est :", options: ["Excuses, détails, au revoir", "Diapositives, encore des diapositives, questions", "Accroche, trois points, conclusion", "Histoire, histoire, histoire"], answer: 2, why: "Une accroche, trois points et une conclusion sont faciles à suivre." },
      { objective: "O2", q: "Dans une intervention de 2 minutes, combien de temps dure environ chaque point clé ?", options: ["5 secondes", "30 secondes", "2 minutes", "10 minutes"], answer: 1, why: "Environ 15 s d'accroche, 30 s par point, 15 s de conclusion." },
      { objective: "O2", q: "Lequel est un appel à l'action clair ?", options: ["\"Merci, voilà.\"", "\"Des questions ? Non ? D'accord.\"", "\"Pensez-y peut-être un jour.\"", "\"Inscrivez-vous à un service avant vendredi.\""], answer: 3, why: "Il dit aux gens exactement quoi faire et quand." },
      { objective: "O2", q: "Pourquoi utiliser des notes plutôt qu'un texte complet ?", options: ["Vous paraissez plus naturel", "Les textes complets sont interdits", "Les notes sont plus longues", "Pour pouvoir lire chaque mot"], answer: 0, why: "Des notes courtes vous gardent naturel tout en restant sur la bonne voie." },
      { objective: "O3", q: "Quand devez-vous utiliser une diapositive ?", options: ["Pour chaque phrase", "Quand une image, un graphique ou quelques mots rendent un point plus clair", "Jamais", "Seulement pour votre texte"], answer: 1, why: "Les diapositives doivent aider le public à comprendre." },
      { objective: "O3", q: "Pourquoi ne pas lire les diapositives mot à mot ?", options: ["C'est trop rapide", "Les diapositives sont secrètes", "Le public lit plus vite que vous ne parlez", "C'est contraire aux règles"], answer: 2, why: "Lire les diapositives fait décrocher le public." },
      { objective: "O3", q: "Un assistant d'IA vous donne du texte pour vos diapositives. Que devez-vous faire ?", options: ["Tout utiliser tel quel", "Le raccourcir et vérifier chaque fait et chaque chiffre", "Le lire à voix haute mot à mot", "Ajouter encore du texte"], answer: 1, why: "L'IA peut se tromper et être trop bavarde ; c'est vous qui décidez." },
      { objective: "O4", q: "Le trac avant une intervention est :", options: ["Un signe qu'il faut annuler", "Rare", "Réservé aux débutants", "Normal, c'est votre corps qui se prépare"], answer: 3, why: "Même les pros ont le trac ; vous pouvez l'utiliser." },
      { objective: "O4", q: "Quelle étape d'entraînement vient après l'avoir dite trois fois à voix haute ?", options: ["L'enregistrer avec votre téléphone et la regarder", "Effacer vos notes", "Ajouter dix points de plus", "Arrêter de s'entraîner"], answer: 0, why: "Regarder un enregistrement montre quoi corriger." },
      { objective: "O4", q: "Une façon rapide de vous calmer juste avant de commencer est de :", options: ["Boire beaucoup de café", "Inspirer sur 4, expirer sur 6", "Courir sur place pendant 5 minutes", "Lire tous vos e-mails"], answer: 1, why: "Une respiration lente calme le corps." },
      { objective: "O5", q: "Quelle posture donne une impression d'assurance ?", options: ["Bras croisés", "Mains dans les poches", "Debout et droit, pieds à la largeur des épaules, mains détendues", "Appuyé contre le mur"], answer: 2, why: "Une position ouverte et stable paraît calme et assurée." },
      { objective: "O5", q: "Un bon contact visuel avec un groupe, c'est :", options: ["Fixer une seule personne tout le temps", "Regarder le sol", "Regarder le plafond", "Regarder une personne pendant une phrase, puis une autre"], answer: 3, why: "Cela crée un lien avec beaucoup de personnes, tour à tour." },
      { objective: "O5", q: "Par rapport à une conversation normale, vous devez parler :", options: ["Un peu plus lentement et plus fort", "Beaucoup plus vite", "En chuchotant", "Sans aucune pause"], answer: 0, why: "Plus lentement et plus fort aide tout le monde à entendre et à suivre." },
      { objective: "O6", q: "Pourquoi répéter une question avant d'y répondre ?", options: ["Pour perdre du temps", "Pour que tout le monde l'entende et vérifier que vous l'avez comprise", "Pour vous mettre en valeur", "Parce que la personne l'a oubliée"], answer: 1, why: "Répéter aide la salle et vérifie votre compréhension." },
      { objective: "O6", q: "Un sponsor pose une question délicate. Une bonne \"transition\" est :", options: ["\"Pas de commentaire.\" et partir", "\"C'est une question stupide.\"", "\"Ce que je peux vous dire, c'est que...\" puis revenir à votre message principal", "Inventer des chiffres"], answer: 2, why: "Une transition répond poliment et revient à votre message." },
      { objective: "O6", q: "Quelqu'un fait une plainte hors sujet pendant les questions-réponses. Que faire de mieux ?", options: ["Discuter jusqu'à ce qu'il se taise", "L'ignorer complètement", "Terminer l'intervention plus tôt", "Rester poli et proposer d'en parler après"], answer: 3, why: "Cela le respecte et protège le temps de tout le monde." },
      { objective: "O6", q: "Quelle doit être la dernière chose que les gens entendent après les questions-réponses ?", options: ["Votre conclusion et votre grande idée, encore une fois", "Des excuses", "\"Euh, bon, au revoir.\"", "Un nouveau sujet"], answer: 0, why: "Finir par votre conclusion fait retenir la grande idée." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Grande idée",
        objective: "O1",
        notYet: "L'intervention n'a pas de message principal clair.",
        meets: "Une grande idée qu'un auditeur pourrait redire en une phrase.",
        exceeds: "La grande idée correspond au public et à ses besoins."
      },
      {
        name: "Structure",
        objective: "O2",
        notYet: "Il manque une accroche, un point ou une conclusion.",
        meets: "Une accroche, trois points clés avec des exemples et une conclusion avec un seul appel à l'action.",
        exceeds: "La conclusion reprend la grande idée et l'appel à l'action est précis."
      },
      {
        name: "Temps",
        objective: "O4",
        notYet: "Plus de 2 minutes, ou visiblement pas répétée.",
        meets: "Finit en 2 minutes ou moins, avec des notes et non un texte lu.",
        exceeds: "Sonne naturel et calme du début à la fin."
      },
      {
        name: "Voix et corps",
        objective: "O5",
        notYet: "Difficile à entendre, beaucoup de mots de remplissage, ou aucun regard.",
        meets: "Voix claire, rythme régulier, bonne posture et regard vers la caméra.",
        exceeds: "Le deuxième enregistrement montre la correction choisie après avoir regardé le premier."
      },
      {
        name: "Répondre aux questions",
        objective: "O6",
        notYet: "A inventé des réponses ou s'est mis sur la défensive.",
        meets: "A répété chaque question et répondu calmement, ou promis de revenir vers la personne.",
        exceeds: "A fait la transition vers la grande idée à la fin."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui font une intervention, une présentation commerciale ou un exposé au travail, à l'école, dans une équipe ou dans leur communauté dans les 60 jours (questionnaire de suivi)",
      "Apprenants qui disent se sentir plus à l'aise pour parler en entretien ou en réunion",
      "Apprenants dont le deuxième enregistrement obtient un meilleur résultat sur la grille que le premier",
      "Apprenants qui commencent un autre cours Koach Learn sur la carrière ou les relations humaines dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec un appareil photo et un minuteur",
      "Du papier ou une note sur le téléphone pour le plan",
      "Un outil gratuit de diapositives comme Google Slides ou Canva (facultatif)",
      "Environ 60 minutes au total, plus le temps d'enregistrer l'intervention finale"
    ],
    facilitatorNotes: [
      "Commencez en petits groupes ou par deux pour que les apprenants nerveux s'entraînent avec moins de pression.",
      "Donnez d'abord un point fort, puis un seul point à corriger.",
      "Laissez les apprenants garder leurs enregistrements privés ; ils ne les partagent que s'ils le choisissent.",
      "Laissez les apprenants choisir des sujets qu'ils connaissent bien, comme leur sport, leur métier, leur entreprise ou leur cause.",
      "Notez l'enregistrement final avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
