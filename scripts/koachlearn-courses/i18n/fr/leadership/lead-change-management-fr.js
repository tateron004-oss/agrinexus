"use strict";

// Koach Learn course (French translation of leadership/lead-change-management.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-change-management-fr",
  lang: "fr",
  translationOf: "lead-change-management",
  category: "Leadership Development",
  name: "Conduire le changement",
  skills: "Comprendre la résistance, Expliquer pourquoi changer, Associer les personnes concernées, Écrire un plan de changement simple, Communiquer le changement et obtenir des premiers succès, Faire durer le changement",
  outcome: "conduire un vrai changement au travail ou dans votre communauté : comprendre pourquoi les gens résistent, expliquer pourquoi le changement compte, associer les personnes concernées, écrire un plan de changement d'une page, bien le communiquer, et le faire durer après le lancement.",
  about: [
    "Ce cours s'adresse à toute personne chargée de conduire un changement : un responsable qui met en place un nouvel horaire, une association qui passe à un nouveau système de gestion des donateurs, un petit commerçant qui change la façon de traiter les commandes, ou un groupement agricole qui passe aux registres numériques.",
    "La plupart des changements échouent non pas parce que l'idée est mauvaise, mais parce qu'on n'a pas embarqué les gens. Vous apprendrez pourquoi les gens résistent, comment expliquer le changement, comment associer les gens, et comment planifier, communiquer et faire durer un changement.",
    "Chaque leçon dure environ cinq minutes. Choisissez au début un vrai changement qui vous tient à cœur et utilisez-le dans chaque tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez un plan de changement d'une page pour un vrai changement que vous voulez conduire. Il doit couvrir ce qui change, pourquoi (en deux ou trois phrases qui parlent aux gens), qui est concerné et comment vous allez l'associer, quand chaque étape a lieu, comment vous saurez que cela marche, trois messages pour trois groupes différents, un premier succès dans le premier mois, et deux moyens de faire durer le changement.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chefs d'équipe, des superviseurs, des propriétaires de petites entreprises, et des responsables d'associations et de communautés qui doivent conduire un vrai changement, comme un nouveau système, une nouvelle façon de travailler ou une nouvelle façon de servir les gens.",
    startingPoint: "Ils savent quel changement ils veulent et peuvent l'expliquer à quelqu'un qui est déjà d'accord. La plupart ont vu des changements échouer, mais n'ont jamais écrit de plan de changement ni prévu comment associer les personnes concernées.",
    gap: "Les changements échouent souvent parce que les gens ne voient pas pourquoi, qu'on ne leur a pas demandé leur avis, qu'ils en entendent parler une seule fois, ou qu'ils reprennent leurs vieilles habitudes après le lancement. Les responsables ont besoin d'une façon simple de comprendre la résistance, d'expliquer pourquoi changer, d'associer les gens, de planifier, de communiquer et de faire durer le changement.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Temps : des leçons courtes qui s'insèrent dans une journée de travail",
      "Appareils : un téléphone ou un ordinateur ; le papier suffit pour le plan",
      "Le plan de changement doit tenir sur une page",
      "Les faits et les histoires qui expliquent le changement doivent venir de l'apprenant, pas être inventés par l'IA"
    ],
    prerequisites: "Aucun. Le cours « Gérer une équipe » est un bon complément."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un changement que vous voulez conduire", action: "lister qui est concerné, ce que chaque groupe peut perdre et gagner, et les raisons probables pour lesquelles il pourrait résister", standard: "en traitant chaque inquiétude comme une information à laquelle répondre" },
    { id: "O2", condition: "À partir d'un vrai changement", action: "écrire une explication du changement qui dit le problème, ce qui ira mieux et ce qui se passe si on ne fait rien", standard: "en deux ou trois phrases avec un vrai fait ou une vraie histoire" },
    { id: "O3", condition: "À partir des personnes touchées par un changement", action: "prévoir comment les associer tôt, par exemple avec des idées, un essai pilote ou des relais du changement", standard: "en disant ce qui est ouvert et ce qui ne l'est pas, et comment vous ferez un retour" },
    { id: "O4", condition: "À partir d'un vrai changement", action: "écrire un plan de changement d'une page qui répond à quoi, pourquoi, qui, quand et comment vous saurez", standard: "avec un responsable pour chaque étape et deux ou trois indicateurs avec des dates de vérification" },
    { id: "O5", condition: "Au moment d'annoncer un changement", action: "écrire des messages pour trois groupes différents et prévoir un premier succès", standard: "chaque message disant ce qui change, pourquoi, quand, l'aide reçue et à qui s'adresser" },
    { id: "O6", condition: "Après le lancement du changement", action: "prévoir deux moyens de faire durer le changement", standard: "par exemple vérifier les indicateurs à des dates fixées et intégrer la nouvelle façon de faire aux listes de contrôle ou à la formation" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comprendre le changement et embarquer les gens",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pourquoi les gens résistent au changement",
          minutes: 5,
          goal: "Nommer les raisons probables pour lesquelles les gens vont résister à votre changement, afin de pouvoir y répondre.",
          text: [
            "Changer, c'est perdre quelque chose de familier, même quand la nouvelle façon de faire est meilleure. Les gens résistent pour des raisons compréhensibles : ils ne voient pas pourquoi c'est nécessaire, ils ont peur de ne pas être à la hauteur, ils craignent de perdre du temps, de l'argent, leur place ou des collègues, on ne leur a pas demandé leur avis, ou les changements passés se sont mal passés.",
            "La résistance est une information, pas une attaque. La personne qui s'oppose voit souvent un vrai problème que vous n'avez pas vu. Prenez son inquiétude au sérieux et posez-lui des questions.",
            "Avant d'annoncer quoi que ce soit, listez qui est concerné et ce que chaque groupe peut perdre et gagner. Cette liste vous dit quoi expliquer, qui associer et quel soutien apporter."
          ],
          steps: ["Écrivez le changement en une phrase.", "Listez chaque groupe concerné.", "Pour chaque groupe, écrivez ce qu'il peut perdre et ce qu'il peut gagner.", "Repérez les inquiétudes auxquelles vous devez répondre."],
          words: [["Résistance", "le fait de s'opposer à un changement, ouvertement ou discrètement."], ["Partie prenante", "toute personne touchée par un changement ou qui peut influencer sa réussite."]],
          slides: [
            { title: "Changer, c'est perdre quelque chose", bullets: ["Même un bon changement fait perdre quelque chose de familier", "Les gens s'inquiètent avant de voir les avantages"] },
            { title: "Raisons fréquentes de résister", bullets: ["Ils ne voient pas pourquoi", "Ils ont peur de ne pas être à la hauteur", "Ils peuvent perdre du temps, de l'argent ou leur place", "On ne leur a pas demandé, ou les changements passés ont échoué"] },
            { title: "La résistance est une information", bullets: ["Ils voient peut-être un vrai problème que vous avez manqué", "Posez des questions, ne vous disputez pas"] },
            { title: "Faites d'abord la carte", bullets: ["Qui est concerné", "Ce que chaque groupe peut perdre et gagner"] }
          ],
          tryIt: "Choisissez un vrai changement que vous voulez conduire. Écrivez-le en une phrase. Puis listez trois groupes concernés et, pour chacun, une chose qu'il peut perdre et une chose qu'il peut gagner.",
          youCanNow: "prévoir pourquoi les gens peuvent résister à un changement et faire la carte de ce que chaque groupe peut perdre et gagner.",
          quickCheck: [
            { objective: "O1", q: "Laquelle est une raison compréhensible de résister à un changement ?", options: ["Les gens veulent que l'équipe échoue", "On ne leur a pas demandé leur avis", "Ils n'aiment jamais rien", "Ils sont payés pour résister"], answer: 1, why: "Ne pas avoir été consulté est l'une des raisons fréquentes et compréhensibles de résister." },
            { objective: "O1", q: "Avant d'annoncer un changement, que faites-vous d'abord ?", options: ["Envoyer un e-mail à tout le monde en même temps", "Attendre que les gens se plaignent", "Demander à l'IA d'écrire l'annonce", "Lister qui est concerné et ce que chaque groupe peut perdre et gagner"], answer: 3, why: "Cette liste vous dit quoi expliquer, qui associer et quel soutien donner." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Expliquer pourquoi changer",
          minutes: 5,
          goal: "Expliquer en quelques phrases pourquoi un changement est nécessaire, avec des mots qui comptent pour les personnes concernées.",
          text: [
            "Les gens doivent comprendre le pourquoi avant d'accepter le quoi. Une bonne explication répond à trois questions : quel est le problème aujourd'hui ? Qu'est-ce qui ira mieux après le changement ? Que se passe-t-il si on ne fait rien ?",
            "Utilisez des faits et une histoire vraie. \"Nos feuilles d'inscription papier ont perdu les noms de 30 bénévoles le mois dernier, et deux familles n'ont pas reçu leur livraison de nourriture\" touche plus que \"nous devons nous moderniser\". Parlez de ce qui compte pour chaque groupe : le temps, l'équité, la sécurité, les clients, les personnes que vous servez.",
            "Soyez honnête sur ce qui sera difficile. Si la nouvelle façon de faire demande plus de travail au début, dites-le et dites comment vous allez aider. Les gens font confiance à un responsable qui reconnaît les coûts. Un assistant d'IA peut vous aider à mieux formuler, mais les faits et l'histoire doivent venir de vous."
          ],
          steps: ["Décrivez le problème d'aujourd'hui, avec un fait.", "Décrivez ce qui ira mieux.", "Dites ce qui se passe si rien ne change.", "Ajoutez une histoire vraie.", "Soyez honnête sur ce qui sera difficile et sur la façon dont vous allez aider."],
          words: [["Raisons du changement", "une courte explication de pourquoi un changement est nécessaire et de ce qu'il va améliorer."]],
          slides: [
            { title: "Le pourquoi avant le quoi", bullets: ["Quel est le problème aujourd'hui ?", "Qu'est-ce qui ira mieux ?", "Et si on ne fait rien ?"] },
            { title: "Des faits et une histoire", bullets: ["Un vrai chiffre montre la taille du problème", "Une histoire vraie montre pourquoi c'est important"] },
            { title: "Parlez de ce qui compte pour eux", bullets: ["Le temps, l'équité, la sécurité", "Les clients ou les personnes que vous servez"] },
            { title: "Soyez honnête", bullets: ["Dites ce qui sera difficile", "Dites comment vous allez aider"] }
          ],
          tryIt: "Écrivez les raisons de votre changement en quatre phrases : le problème d'aujourd'hui avec un fait, ce qui ira mieux, ce qui se passe si rien ne change, et une phrase honnête sur ce qui sera difficile. Lisez-les à voix haute. Est-ce que cela parlerait aux personnes concernées ?",
          youCanNow: "écrire une explication courte et honnête du changement qui répond au pourquoi, et pas seulement au quoi.",
          quickCheck: [
            { objective: "O2", q: "Quelle explication du changement est la plus forte ?", options: ["« Le mois dernier, nos formulaires papier ont perdu 12 commandes et trois clients sont partis. »", "« Nous devons nous moderniser. »", "« Tout le monde le fait. »", "« Le patron le veut. »"], answer: 0, why: "Un vrai fait et une vraie histoire touchent plus les gens qu'un slogan." },
            { objective: "O2", q: "La nouvelle façon de faire prendra plus de temps au début. Que dites-vous ?", options: ["Le cacher jusqu'au lancement", "Dire que ce sera facile", "Le dire honnêtement et dire comment vous allez aider", "Rejeter la faute sur l'ancien système"], answer: 2, why: "Les gens font confiance à un responsable qui reconnaît les coûts." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Associer les personnes concernées",
          minutes: 5,
          goal: "Prévoir comment associer les personnes touchées par un changement avant que les décisions soient définitives.",
          text: [
            "Les gens soutiennent ce qu'ils aident à construire. Associez-les tôt, quand le plan peut encore changer. Demander l'avis des gens une fois que tout est décidé sonne faux, et ils le sentent.",
            "Façons d'associer les gens : demandez leurs idées lors d'une courte réunion ou d'un petit questionnaire, testez le changement d'abord avec un petit groupe, invitez quelques membres respectés de l'équipe à aider à le conduire, et laissez les gens choisir comment faire certaines parties.",
            "Dites clairement ce qui est ouvert et ce qui ne l'est pas. \"Nous passons au nouveau système d'ici mars ; vous pouvez aider à décider comment nous formons les gens et dans quel ordre les équipes changent.\" Ensuite, montrez ce que vous avez fait de leurs idées, même quand vous n'avez pas pu les utiliser."
          ],
          steps: ["Décidez ce qui est fixé et ce qui est ouvert.", "Demandez des idées tôt, en réunion ou par un court questionnaire.", "Testez avec un petit groupe pilote.", "Invitez des membres respectés de l'équipe à aider à conduire le changement.", "Faites un retour sur ce que vous avez fait des idées reçues."],
          words: [["Projet pilote", "un petit test d'un changement avec quelques personnes avant que tout le monde change."], ["Relais du changement", "un membre respecté de l'équipe qui aide à conduire et à expliquer le changement."]],
          slides: [
            { title: "On soutient ce qu'on aide à construire", bullets: ["Associez les gens tôt", "Demander une fois que tout est décidé sonne faux"] },
            { title: "Façons d'associer les gens", bullets: ["Demander des idées", "Faire un petit projet pilote", "Inviter des relais du changement", "Les laisser choisir une partie du comment"] },
            { title: "Dites clairement ce qui est ouvert", bullets: ["\"La date est fixée ; vous aidez à décider comment former\"", "Faites un retour sur ce que vous avez fait de leurs idées"] }
          ],
          tryIt: "Pour votre changement, écrivez ce qui est fixé et ce qui est ouvert. Puis nommez deux façons d'associer les gens et deux personnes à qui vous pourriez demander d'être des relais du changement.",
          youCanNow: "associer honnêtement les personnes touchées par un changement et leur faire un retour sur leurs idées.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi demander des idées une fois que tout est décidé se retourne-t-il contre vous ?", options: ["Cela prend trop de temps", "Cela sonne faux, et les gens le sentent", "Cela coûte de l'argent", "Les gens n'ont pas d'idées"], answer: 1, why: "Associez les gens quand le plan peut encore changer." },
            { objective: "O3", q: "Vous avez recueilli des idées mais n'avez pas pu en utiliser certaines. Que faites-vous ?", options: ["Ne rien en dire", "Les utiliser quand même", "Arrêter de demander des idées", "Faire un retour sur ce que vous avez fait des idées, et pourquoi"], answer: 3, why: "Montrer ce que vous avez fait des idées garde la confiance, même quand vous n'avez pas pu les utiliser." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comprendre le changement et embarquer les gens",
        questions: [
          { objective: "O1", q: "Pourquoi les gens résistent-ils souvent, même à un bon changement ?", options: ["Parce qu'ils sont paresseux", "Parce que changer, c'est perdre quelque chose de familier", "Parce que tout changement est mauvais", "Parce que les responsables ont toujours tort"], answer: 1, why: "Le changement apporte de la perte et de l'incertitude, même quand il aide." },
          { objective: "O1", q: "Un membre du personnel s'oppose fortement à votre plan. Quelle est la meilleure première réaction ?", options: ["Lui demander ce qui l'inquiète, car il voit peut-être un vrai problème", "Lui dire d'arrêter de se plaindre", "Le retirer de l'équipe", "L'ignorer"], answer: 0, why: "La résistance est une information ; posez des questions avant de discuter." },
          { objective: "O2", q: "À quelles trois questions répond une bonne explication du changement ?", options: ["Qui, où, combien", "Qui est responsable, quand, pourquoi pas", "Combien cela va me coûter, qui a décidé, est-ce que je peux m'en passer", "Quel est le problème, qu'est-ce qui ira mieux, et si on ne fait rien"], answer: 3, why: "Elles montrent pourquoi le changement compte." },
          { objective: "O3", q: "Quand faut-il associer les gens à un changement ?", options: ["Une fois que tout est décidé", "Jamais", "Tôt, quand le plan peut encore changer", "Seulement s'ils se plaignent"], answer: 2, why: "Un avis demandé tôt est un vrai avis, et il crée du soutien." },
          { objective: "O3", q: "Qu'est-ce qu'un projet pilote ?", options: ["Un petit test du changement avec quelques personnes d'abord", "Le chef du responsable", "Une date limite finale", "Un type de vidéo de formation"], answer: 0, why: "Les projets pilotes permettent d'apprendre et de corriger les problèmes avant que tout le monde change." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier, communiquer et faire durer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire un plan de changement simple",
          minutes: 6,
          goal: "Écrire un plan de changement d'une page qui répond à quoi, pourquoi, qui, quand, et comment vous saurez que cela marche.",
          text: [
            "Un plan de changement n'a pas besoin d'être long. Une page qui répond à cinq questions suffit pour la plupart des changements : qu'est-ce qui change ? Pourquoi ? Qui est concerné et qui fait quoi ? Quand chaque étape a-t-elle lieu ? Comment saurez-vous que cela marche ?",
            "\"Comment vous saurez\" est la partie que les gens oublient. Choisissez deux ou trois signes que vous pouvez vraiment vérifier, par exemple \"95 % des commandes saisies dans le nouveau système à la semaine 4\" ou \"aucune livraison manquée pendant un mois\". Fixez une date pour les regarder.",
            "Nommez un responsable pour chaque étape, prévoyez la formation et le soutien avant le passage au nouveau système, et dites ce que vous ferez en cas de problème, par exemple garder l'ancienne façon de faire disponible pendant un court moment."
          ],
          steps: ["Quoi : le changement en une phrase.", "Pourquoi : vos raisons en deux ou trois phrases.", "Qui : les groupes concernés, et un responsable pour chaque étape.", "Quand : les dates clés, y compris la formation avant le passage.", "Comment vous saurez : deux ou trois indicateurs et une date pour les vérifier.", "Un plan de secours en cas de problème."],
          words: [["Plan de changement", "un court plan écrit qui dit ce qui change, pourquoi, qui, quand et comment on mesurera la réussite."], ["Indicateur", "quelque chose que vous pouvez compter ou vérifier pour voir si un changement marche."], ["Responsable d'étape", "la seule personne chargée de faire en sorte qu'une étape se réalise."]],
          slides: [
            { title: "Cinq questions, une page", bullets: ["Qu'est-ce qui change ?", "Pourquoi ?", "Qui est concerné et qui fait quoi ?", "Quand ? Comment saurez-vous que cela marche ?"] },
            { title: "Comment vous saurez", bullets: ["Deux ou trois signes que vous pouvez vérifier", "Exemple : \"95 % des commandes dans le nouveau système à la semaine 4\"", "Fixez une date pour regarder"] },
            { title: "N'oubliez pas", bullets: ["Un responsable pour chaque étape", "La formation avant le passage", "Un plan de secours en cas de problème"] }
          ],
          tryIt: "Écrivez le premier brouillon de votre plan d'une page avec les cinq parties. Pour \"comment vous saurez\", écrivez deux indicateurs et la date où vous les vérifierez.",
          youCanNow: "écrire un court plan de changement avec des responsables clairs, des dates et des indicateurs de réussite.",
          quickCheck: [
            { objective: "O4", q: "Quelle partie d'un plan de changement oublie-t-on le plus souvent ?", options: ["Ce qui change", "Qui est concerné", "Comment vous saurez que cela marche", "Quand cela commence"], answer: 2, why: "Choisissez deux ou trois signes que vous pouvez vérifier et une date pour les regarder." },
            { objective: "O4", q: "Vous craignez que le nouveau système échoue la première semaine. Qu'ajoutez-vous au plan ?", options: ["Ce que vous ferez si cela tourne mal, par exemple garder l'ancienne façon de faire pendant peu de temps", "Rien ; prévoir seulement la réussite", "Une explication du changement plus longue", "Une deuxième date de lancement dans un an"], answer: 0, why: "Un bon plan dit ce que vous ferez si quelque chose tourne mal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Communiquer le changement et obtenir des premiers succès",
          minutes: 5,
          goal: "Écrire des messages clairs pour différents groupes et prévoir un premier succès visible.",
          text: [
            "Dites-le plus d'une fois, et de plus d'une façon. Les gens sont occupés et doivent entendre un message plusieurs fois avant qu'il soit retenu. Utilisez une réunion, une courte note écrite et des entretiens individuels. Prévenez d'abord les personnes les plus touchées, en personne si possible, avant qu'elles l'apprennent par quelqu'un d'autre.",
            "Adaptez le message à chaque groupe : ce qui change pour eux, pourquoi, quand, quelle aide ils recevront, et à qui s'adresser. Laissez de la place pour les questions, et si vous ne connaissez pas une réponse, dites-le et dites quand vous la trouverez.",
            "Prévoyez un premier succès : une réussite rapide et visible dans les premières semaines, comme une file d'attente plus courte ou un rapport plus rapide. Partagez-la et remerciez les personnes qui l'ont rendue possible. Les premiers succès montrent que le changement marche et convainquent ceux qui hésitaient."
          ],
          steps: ["Prévenez d'abord les personnes les plus touchées, en personne si possible.", "Pour chaque groupe : ce qui change pour eux, pourquoi, quand, l'aide, à qui s'adresser.", "Répétez par des réunions, des notes et des entretiens individuels.", "Répondez honnêtement aux questions ; dites quand vous aurez la réponse.", "Prévoyez et célébrez un premier succès dans le premier mois."],
          words: [["Premier succès", "une réussite rapide et visible qui montre qu'un changement marche."], ["Public", "le groupe de personnes à qui un message s'adresse."]],
          slides: [
            { title: "Dites-le plus d'une fois", bullets: ["Réunions, notes et entretiens individuels", "Les plus touchés d'abord, en personne"] },
            { title: "Chaque message couvre", bullets: ["Ce qui change pour eux et pourquoi", "Quand, et quelle aide ils reçoivent", "À qui s'adresser"] },
            { title: "Des réponses honnêtes", bullets: ["Vous ne savez pas ? Dites-le", "Dites quand vous aurez la réponse"] },
            { title: "Premiers succès", bullets: ["Une réussite rapide et visible", "Partagez-la et remerciez les personnes qui l'ont permise"] }
          ],
          tryIt: "Écrivez trois courts messages sur votre changement pour trois groupes différents (par exemple le personnel de terrain, les responsables et les clients). Puis écrivez un premier succès que vous pourriez montrer dans le premier mois.",
          youCanNow: "communiquer clairement un changement à différents groupes et prévoir un premier succès qui crée du soutien.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un premier succès ?", options: ["Terminer le changement en un jour", "Une réussite rapide et visible qui montre que le changement marche", "Sauter la formation", "Un prix pour la première personne qui change"], answer: 1, why: "Les premiers succès convainquent les personnes qui hésitaient." },
            { objective: "O5", q: "Comment annoncez-vous le changement aux personnes les plus concernées ?", options: ["Les laisser l'apprendre par quelqu'un d'autre", "Mettre une affiche au mur", "Envoyer un seul e-mail à tout le personnel", "Le leur dire en premier, en personne si possible"], answer: 3, why: "Les personnes les plus concernées doivent l'apprendre en premier, avant les rumeurs." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faire durer le changement",
          minutes: 5,
          goal: "Prévoir comment faire durer un changement après le lancement pour que les gens ne reviennent pas à l'ancienne façon de faire.",
          text: [
            "Le jour du lancement n'est pas la ligne d'arrivée. Beaucoup de changements s'essoufflent après quelques semaines, quand les gens reprennent leurs vieilles habitudes, surtout quand ils sont occupés ou stressés.",
            "Pour que cela dure : vérifiez vos indicateurs aux dates prévues, gardez l'aide facile à trouver, supprimez l'ancienne façon de faire une fois que la nouvelle marche, et intégrez le changement au quotidien, par exemple dans les listes de contrôle, l'accueil des nouveaux employés et ce qu'on attend de chaque poste.",
            "Continuez à écouter. Demandez aux gens ce qui reste difficile et corrigez-le. Remerciez ceux qui utilisent bien la nouvelle façon de faire, et partagez les résultats. Quand le changement fait partie de \"notre façon de faire ici\", regardez ce que vous avez appris pour le prochain changement."
          ],
          steps: ["Vérifiez vos indicateurs aux dates prévues.", "Gardez l'aide facile à trouver.", "Abandonnez l'ancienne façon de faire quand la nouvelle marche.", "Ajoutez le changement aux listes de contrôle, à la formation et aux attentes de chaque poste.", "Demandez ce qui reste difficile, et corrigez-le.", "Partagez les résultats et remerciez les gens."],
          words: [["Faire durer", "maintenir quelque chose dans le temps."], ["Routine", "la façon habituelle de faire le travail chaque jour ou chaque semaine."]],
          slides: [
            { title: "Le lancement n'est pas la ligne d'arrivée", bullets: ["Les changements s'essoufflent quand les gens sont occupés", "Les vieilles habitudes reviennent"] },
            { title: "Intégrez-le aux routines", bullets: ["Listes de contrôle et formation des nouveaux employés", "Attentes de chaque poste", "Abandonnez l'ancienne façon quand la nouvelle marche"] },
            { title: "Continuez à écouter", bullets: ["Vérifiez vos indicateurs aux dates prévues", "Demandez ce qui reste difficile et corrigez-le", "Partagez les résultats et remerciez les gens"] }
          ],
          tryIt: "Tâche finale : terminez votre plan de changement d'une page. Ajoutez trois messages pour trois groupes, un premier succès dans le premier mois, et deux moyens de faire durer le changement après le lancement.",
          youCanNow: "faire durer un changement après le lancement en vérifiant les résultats, en l'intégrant aux routines et en écoutant les personnes qui font le travail.",
          quickCheck: [
            { objective: "O6", q: "Que se passe-t-il souvent pour un changement quelques semaines après le lancement ?", options: ["Il s'essouffle parce que les gens reprennent leurs vieilles habitudes", "Il tient toujours tout seul", "Tout le monde oublie l'ancienne façon de faire", "Il grandit tout seul"], answer: 0, why: "Le jour du lancement n'est pas la ligne d'arrivée ; les habitudes ramènent les gens en arrière." },
            { objective: "O6", q: "La nouvelle façon de faire marche bien. Que faites-vous de l'ancienne ?", options: ["Garder les deux pour toujours", "Demander à chacun de choisir", "Supprimer l'ancienne et intégrer la nouvelle aux listes de contrôle et à la formation", "Cacher la nouvelle"], answer: 2, why: "Supprimer l'ancienne façon de faire et intégrer la nouvelle aide le changement à durer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier, communiquer et faire durer",
        questions: [
          { objective: "O4", q: "Quelle question fait partie d'un plan de changement simple ?", options: ["Qui pouvons-nous accuser ?", "Comment éviter de prévenir les gens ?", "Comment saurons-nous que cela marche ?", "Combien de temps pouvons-nous attendre ?"], answer: 2, why: "Les indicateurs montrent si le changement marche." },
          { objective: "O4", q: "Lequel est un bon indicateur de réussite ?", options: ["\"Les gens se sentent modernes\"", "\"Les choses vont mieux\"", "\"Nous avons fait de gros efforts\"", "\"Aucune livraison manquée pendant un mois\""], answer: 3, why: "C'est quelque chose que vous pouvez vraiment vérifier." },
          { objective: "O5", q: "Qui doit être informé d'un changement en premier ?", options: ["Les personnes les plus touchées, en personne si possible", "Le journal local", "Seulement l'équipe de direction, pour toujours", "Personne avant le début"], answer: 0, why: "Elles méritent de l'apprendre directement, pas par des rumeurs." },
          { objective: "O5", q: "Quelqu'un pose une question à laquelle vous ne pouvez pas encore répondre. Que faites-vous ?", options: ["Inventer une réponse", "Dire que vous ne savez pas et dire quand vous aurez la réponse", "Changer de sujet", "Terminer la réunion"], answer: 1, why: "L'honnêteté crée la confiance pendant un changement." },
          { objective: "O6", q: "Trois mois après le lancement, les gens reviennent à l'ancienne façon de faire. Qu'est-ce qui aide le plus ?", options: ["Ne plus en parler", "Remettre l'ancien système pour de bon", "Accuser l'équipe", "Intégrer la nouvelle façon aux listes de contrôle et à la formation, et demander ce qui reste difficile"], answer: 3, why: "Les routines et l'écoute font durer le changement." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Conduire le changement",
    questions: [
      { objective: "O1", q: "Quelle est une raison fréquente de résister au changement ?", options: ["La peur de ne pas être à la hauteur avec la nouvelle façon de faire", "Le goût du conflit", "L'envie d'avoir plus de réunions", "Ne jamais aimer son travail"], answer: 0, why: "La peur de ne pas réussir la nouvelle façon de faire est très fréquente." },
      { objective: "O1", q: "Traiter la résistance comme une information veut dire :", options: ["L'ignorer", "Enregistrer les gens en secret", "Demander ce qui inquiète les gens, car ils voient peut-être un vrai problème", "La punir"], answer: 2, why: "L'opposition peut signaler de vrais risques." },
      { objective: "O1", q: "Avant d'annoncer un changement, il est utile de lister :", options: ["Qui accuser si cela échoue", "Qui est concerné et ce que chaque groupe peut perdre et gagner", "Seulement les coûts", "Rien"], answer: 1, why: "Cette carte montre quoi expliquer et quel soutien apporter." },
      { objective: "O2", q: "Quelle explication du changement est la plus forte ?", options: ["\"Nous devons nous moderniser.\"", "\"Parce que je l'ai décidé.\"", "\"Tout le monde le fait.\"", "\"Les inscriptions papier ont perdu les noms de 30 bénévoles le mois dernier et deux familles n'ont pas été livrées.\""], answer: 3, why: "Un vrai fait et une histoire vraie montrent pourquoi c'est important." },
      { objective: "O2", q: "Pourquoi être honnête sur ce qui sera difficile ?", options: ["Pour faire peur aux gens", "Les gens font confiance à un responsable qui reconnaît les coûts", "Pour retarder le changement", "Ce n'est jamais une bonne idée"], answer: 1, why: "L'honnêteté crée la confiance et permet de prévoir le soutien." },
      { objective: "O2", q: "Une explication du changement doit dire :", options: ["Ce qui se passe si on ne fait rien", "Seulement l'avis du responsable", "Qui va perdre son emploi", "Rien sur le problème"], answer: 0, why: "Le coût de l'inaction montre pourquoi le changement est nécessaire." },
      { objective: "O3", q: "\"Les gens soutiennent ce qu'ils aident à construire\" veut dire que vous devez :", options: ["Garder les plans secrets", "Tout décider d'abord, puis demander", "Les associer tôt, quand le plan peut encore changer", "Associer seulement les responsables"], answer: 2, why: "Associer les gens tôt crée un vrai soutien." },
      { objective: "O3", q: "Un relais du changement est :", options: ["La personne qui résiste le plus", "Un membre respecté de l'équipe qui aide à conduire et à expliquer le changement", "Un trophée", "Un juge extérieur"], answer: 1, why: "Les relais aident les autres à faire confiance au changement." },
      { objective: "O3", q: "Vous avez demandé des idées et n'avez pas pu en utiliser certaines. Que faire ?", options: ["Ne rien dire", "Faire semblant de les avoir utilisées", "Arrêter de demander des idées", "Faire un retour sur ce que vous avez fait des idées, et pourquoi"], answer: 3, why: "Faire un retour garde la confiance, même quand les idées ne sont pas utilisées." },
      { objective: "O4", q: "Les cinq parties d'un plan de changement simple sont :", options: ["Quoi, pourquoi, qui, quand, comment vous saurez", "Qui, faute, coût, retard, annulation", "Prévoir, espérer, attendre, voir, abandonner", "Budget, logo, slogan, fête, photo"], answer: 0, why: "Ces cinq questions couvrent la plupart des changements." },
      { objective: "O4", q: "Chaque étape d'un plan de changement doit avoir :", options: ["Dix responsables", "Aucun responsable", "Un seul responsable chargé de la réaliser", "Un responsable choisi plus tard"], answer: 2, why: "Un responsable clair garantit que l'étape est faite." },
      { objective: "O4", q: "Quand la formation doit-elle avoir lieu ?", options: ["Des mois après le passage", "Avant le passage", "Jamais", "Seulement pour les responsables"], answer: 1, why: "Les gens ont besoin des compétences avant qu'on leur demande d'utiliser la nouvelle façon de faire." },
      { objective: "O5", q: "Pourquoi répéter votre message de différentes façons ?", options: ["Pour agacer les gens", "Parce que les gens doivent entendre un message plusieurs fois avant de le retenir", "Pour remplir le temps", "Parce que le premier message était faux"], answer: 1, why: "Les gens occupés ont besoin de l'entendre plus d'une fois." },
      { objective: "O5", q: "Le message pour chaque groupe doit inclure :", options: ["Seulement la date", "Seulement la raison", "Un long historique", "Ce qui change pour eux, pourquoi, quand, l'aide qu'ils reçoivent et à qui s'adresser"], answer: 3, why: "Cela répond aux questions que les gens se posent vraiment." },
      { objective: "O5", q: "Un premier succès est :", options: ["Une réussite rapide et visible qui montre que le changement marche", "Terminer le changement en un jour", "Gagner une dispute", "Sauter le plan"], answer: 0, why: "Les premiers succès créent la confiance et le soutien." },
      { objective: "O5", q: "Après un premier succès, vous devez :", options: ["Le garder pour vous", "En prendre tout le mérite", "Le partager et remercier les personnes qui l'ont rendu possible", "Arrêter le changement"], answer: 2, why: "Partager et remercier étend le soutien." },
      { objective: "O6", q: "Pourquoi le jour du lancement n'est-il \"pas la ligne d'arrivée\" ?", options: ["Parce que les changements s'essoufflent souvent quand les gens reprennent leurs vieilles habitudes", "Parce qu'il y a toujours une fête après", "Parce que les plans ne commencent jamais", "Parce que le jour du lancement est facultatif"], answer: 0, why: "Faire durer le changement demande un travail continu." },
      { objective: "O6", q: "Qu'est-ce qui aide un changement à durer ?", options: ["Garder aussi l'ancienne façon pour toujours", "L'intégrer aux listes de contrôle et à la formation des nouveaux employés", "Ne jamais vérifier les résultats", "Le changer à nouveau la semaine suivante"], answer: 1, why: "Les routines rendent la nouvelle façon de faire normale." },
      { objective: "O6", q: "Vous avez prévu de vérifier un indicateur à la semaine 4. À la semaine 4, vous devez :", options: ["Ne pas le faire", "Changer l'indicateur", "Attendre l'année prochaine", "Le vérifier et agir selon ce que vous trouvez"], answer: 3, why: "Les indicateurs ne servent que si vous les regardez à temps." },
      { objective: "O6", q: "Une fois que le changement fait partie de \"notre façon de faire ici\", une bonne dernière étape est de :", options: ["L'oublier", "Regarder ce que vous avez appris pour le prochain changement", "L'annuler", "Accuser ceux qui ont résisté"], answer: 1, why: "Les leçons apprises rendent le prochain changement plus facile." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Pourquoi c'est important",
        objective: "O2",
        notYet: "La raison est un slogan, comme « nous devons nous moderniser ».",
        meets: "Deux ou trois phrases sur le problème, ce qui ira mieux et ce qui se passe si rien ne change.",
        exceeds: "Utilise un vrai fait ou une vraie histoire qui compte pour les personnes concernées."
      },
      {
        name: "Qui est concerné et comment l'associer",
        objective: "O3",
        notYet: "Personne n'est associé avant que la décision soit définitive.",
        meets: "Nomme qui est concerné et comment ces personnes seront associées tôt.",
        exceeds: "Dit ce qui est ouvert et ce qui ne l'est pas, et comment un retour sera fait sur les idées reçues."
      },
      {
        name: "Plan et indicateurs",
        objective: "O4",
        notYet: "Il manque quoi, pourquoi, qui, quand ou comment vous saurez.",
        meets: "Répond aux cinq questions, avec la date de chaque étape et la façon de savoir que cela marche.",
        exceeds: "Chaque étape a un responsable et chaque indicateur a une date de vérification."
      },
      {
        name: "Messages et premier succès",
        objective: "O5",
        notYet: "Un seul message pour tout le monde, ou aucun premier succès.",
        meets: "Trois messages pour trois groupes et un premier succès dans le premier mois.",
        exceeds: "Chaque message dit l'aide que les gens recevront et à qui s'adresser."
      },
      {
        name: "Faire durer",
        objective: "O6",
        notYet: "Le plan s'arrête au lancement.",
        meets: "Deux moyens de faire durer le changement après le lancement.",
        exceeds: "Prévoit d'intégrer la nouvelle façon de faire aux listes de contrôle, à la formation ou aux attentes du poste."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui lancent le changement de leur plan dans les 90 jours (enquête de suivi)",
      "Les changements toujours en place trois mois après le lancement",
      "Les apprenants qui suivent un autre cours Koach Learn sur le leadership"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour regarder les leçons",
      "Du papier ou un document pour le plan de changement d'une page",
      "Un vrai changement que l'apprenant veut conduire",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez à chaque apprenant d'apporter un vrai changement avant le début de la séance.",
      "En binômes, faites jouer à l'un la personne qui résiste, pour que l'autre s'entraîne à demander ce qui l'inquiète.",
      "Faites échanger aux apprenants leur explication du changement, et demandez à chacun si celle de l'autre le convaincrait.",
      "Rappelez aux apprenants de garder leurs propres faits et histoires quand ils utilisent l'IA pour resserrer la formulation.",
      "Notez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
