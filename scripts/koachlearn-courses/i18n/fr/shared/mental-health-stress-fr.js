"use strict";

// Koach Learn course (French translation of shared/mental-health-stress.js). See scripts/koachlearn-courses/README.md, "Translations".
// General education only, as in the English: coping skills and how and when to get help; never diagnoses. US crisis lines kept; readers outside the US are told to use their own country's crisis line or emergency number.

module.exports = {
  id: "mental-health-stress-fr",
  lang: "fr",
  translationOf: "mental-health-stress",
  category: "Seniors and Technology",
  name: "Santé mentale et gestion du stress",
  skills: "Repérer vos signaux de stress, Calmer votre corps par la respiration et l'ancrage, Prendre des habitudes de sommeil et d'activité, Demander du soutien à quelqu'un, Repérer les signes d'alerte et obtenir de l'aide en cas de crise, Écrire un plan personnel pour faire face au stress",
  outcome: "remarquer tôt vos propres signaux de stress, calmer votre corps en quelques minutes par la respiration et l'ancrage, garder des habitudes quotidiennes qui protègent votre moral, demander du soutien, repérer les signes d'alerte chez vous ou chez quelqu'un d'autre, et savoir exactement qui appeler quand c'est grave : le 988 aux États-Unis, ou la ligne d'écoute et le numéro d'urgence de votre pays ailleurs.",
  about: [
    "Tout le monde ressent du stress : un parent avec des factures, un agriculteur qui attend la pluie, un joueur avant un grand match, un ancien militaire de retour chez lui, une personne qui sort de prison et cherche du travail, une grand-mère qui s'occupe de son mari, une cheffe d'entreprise pendant un mois difficile. Le stress est normal. Trop de stress pendant trop longtemps peut abîmer votre sommeil, votre corps, votre travail et vos relations avec les gens autour de vous.",
    "Ce cours enseigne des compétences que vous pouvez utiliser dès aujourd'hui : remarquer le stress tôt, calmer votre corps rapidement, prendre des habitudes qui vous protègent, parler à quelqu'un, et repérer les signes qui montrent qu'il est temps d'obtenir plus d'aide. Il ne pose aucun diagnostic et ne remplace pas un médecin, un conseiller ou un psychothérapeute. Il vous aide à savoir quand et comment en consulter un.",
    "Si vous êtes en danger en ce moment ou si vous pensez à mettre fin à vos jours : hors des États-Unis, appelez tout de suite la ligne d'écoute ou le numéro d'urgence de votre pays. Aux États-Unis, appelez ou envoyez un SMS au 988 (la ligne 988 de prévention du suicide et d'aide en cas de crise) ; les anciens combattants et les militaires peuvent appeler le 988 puis taper 1. Vous n'avez pas besoin de finir ce cours d'abord.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez votre plan personnel d'une page pour faire face au stress : trois de vos propres signaux de stress précoces, deux techniques pour vous calmer que vous avez pratiquées, deux habitudes quotidiennes que vous allez garder, deux personnes à qui parler (avec le moyen de les joindre), un endroit où obtenir une aide professionnelle, et les numéros de crise de l'endroit où vous vivez (la ligne d'écoute et le numéro d'urgence de votre pays ; aux États-Unis, le 988, et le 988 puis 1 pour les anciens combattants). Gardez-le sur votre téléphone et sur papier.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes et des grands adolescents de tous horizons qui ressentent du stress : parents, personnes âgées et aidants, agriculteurs, sportifs, anciens combattants, personnes qui sortent de prison et propriétaires de petites entreprises.",
    startingPoint: "Ils savent ce qu'est le stress et ont leurs propres façons d'y faire face, certaines utiles et d'autres non. Beaucoup n'ont jamais nommé leurs signaux précoces de stress, pratiqué une technique pour se calmer ni enregistré de numéros de crise.",
    gap: "Trop de stress pendant trop longtemps abîme le sommeil, la santé, le travail et les relations, et certaines personnes ne connaissent pas les signes qui montrent qu'il est temps de chercher plus d'aide. Les apprenants ont besoin de techniques simples pour repérer et calmer le stress, demander du soutien et joindre vite une aide en cas de crise, réunies dans un plan qu'ils peuvent utiliser.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Ce n'est ni un diagnostic ni un traitement ; le cours oriente vers des médecins, des conseillers et des lignes de crise",
      "La sécurité d'abord : les numéros de crise (988 aux États-Unis, 988 puis 1 pour les anciens combattants, ou la ligne de crise locale) sont donnés avant toute leçon",
      "Confidentialité : les apprenants gardent pour eux leur journal du stress et leur plan, sauf s'ils choisissent de les partager",
      "Temps : des leçons d'environ cinq minutes ; certains apprenants peuvent être en détresse"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Après avoir tenu un journal du stress pendant une journée", action: "nommer trois de vos propres signaux précoces de stress dans votre corps, vos pensées, vos émotions ou vos actions", standard: "avec chaque signal écrit avec vos propres mots" },
    { id: "O2", condition: "Quand vous sentez le stress monter", action: "utiliser la respiration carrée et l'ancrage 5-4-3-2-1 pour calmer votre corps", standard: "en notant votre stress de 0 à 10 avant et après" },
    { id: "O3", condition: "Pour la semaine à venir", action: "choisir deux petites habitudes quotidiennes pour le sommeil, l'activité, les repas ou l'entourage, et prévoir quand vous les ferez", standard: "avec une heure ou un rappel pour chacune" },
    { id: "O4", condition: "Avec une personne de confiance", action: "commencer une conversation qui dit ce qui se passe et ce dont vous avez besoin", standard: "en utilisant vos deux premières phrases à vous" },
    { id: "O5", condition: "Face à des signes de crise chez vous ou chez quelqu'un d'autre", action: "repérer les signes d'alerte du suicide et contacter la bonne aide en cas de crise", standard: "avec les numéros de crise enregistrés dans votre téléphone et les mots pour poser la question directement prêts" },
    { id: "O6", condition: "Avec ce que vous avez pratiqué dans ce cours", action: "écrire un plan personnel d'une page pour faire face au stress", standard: "avec les six parties, enregistré sur votre téléphone et sur papier" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Remarquer et calmer le stress",
      lessons: [
        {
          objectives: ["O1"],
          title: "Repérer vos propres signaux de stress",
          minutes: 5,
          goal: "Nommer trois signes précoces qui montrent que le stress monte en vous.",
          text: [
            "Le stress est l'alarme de votre corps. Il accélère votre cœur et votre respiration pour que vous puissiez faire face à un défi. Un peu de stress peut vous aider à vous concentrer avant un examen, un match ou un entretien d'embauche. Le problème, c'est quand l'alarme reste allumée pendant des jours ou des semaines.",
            "Le stress se montre à quatre endroits. Dans votre corps : épaules tendues, maux de tête, ventre noué, cœur qui bat vite. Dans vos pensées : soucis qui tournent en boucle, mal à vous concentrer, toujours vous attendre au pire. Dans vos émotions : vous vous énervez vite, vous êtes triste, vous vous sentez vide ou à bout. Dans vos actions : dormir trop ou trop peu, manger autrement, boire ou fumer plus, vous éloigner des gens.",
            "Les signaux de chacun sont différents. Un entraîneur peut remarquer qu'il crie sur ses joueurs. Une grand-mère peut remarquer qu'elle n'arrive plus à dormir. Si vous apprenez vos propres signaux précoces, vous pouvez agir avant que le stress ne grandisse."
          ],
          steps: ["Pensez à la dernière fois où vous vous êtes senti très stressé.", "Demandez-vous : qu'est-ce que j'ai ressenti dans mon corps, pensé, éprouvé et fait ?", "Notez les premiers signes que vous avez remarqués.", "Choisissez vos trois principaux. Ce sont vos voyants d'alerte précoce."],
          words: [["Stress", "la réaction du corps et de l'esprit face à une pression ou à un défi."], ["Signal", "un signe qui vous dit que quelque chose se passe, comme un voyant d'alerte dans une voiture."]],
          slides: [
            { title: "Le stress est l'alarme de votre corps", bullets: ["Un peu peut aider à se concentrer", "Trop, trop longtemps, vous épuise"] },
            { title: "Où le stress se montre", bullets: ["Corps : épaules tendues, maux de tête, cœur qui bat vite", "Pensées : soucis en boucle, mal à se concentrer", "Émotions : énervement, tristesse, être à bout", "Actions : sommeil, repas, alcool, s'éloigner des gens"] },
            { title: "Connaissez vos signaux précoces", bullets: ["Ceux de chacun sont différents", "Les repérer tôt, agir tôt", "Choisissez vos trois principaux"] }
          ],
          tryIt: "Tenez un petit journal du stress pendant une journée. Trois fois aujourd'hui (matin, après-midi, soir), notez votre niveau de stress de 0 à 10 et une chose que vous avez remarquée dans votre corps, vos pensées, vos émotions ou vos actions. Entourez vos trois signaux principaux.",
          youCanNow: "nommer vos propres signaux de stress précoces dans votre corps, vos pensées, vos émotions et vos actions.",
          quickCheck: [
            { objective: "O1", q: "Lequel est un signal de stress dans le corps ?", options: ["Des épaules tendues ou la mâchoire serrée", "Se sentir reposé après le sommeil", "Rire avec un ami", "Apprécier un repas"], answer: 0, why: "Les muscles tendus sont un signal précoce de stress fréquent dans le corps." },
            { objective: "O1", q: "Vous remarquez que cette semaine, vous vous emportez contre votre famille presque tous les soirs. Que faites-vous ?", options: ["L'ignorer ; tout le monde le fait", "L'écrire dans votre journal du stress comme un signal possible", "Ne plus parler à votre famille", "Attendre que ça empire"], answer: 1, why: "Remarquer et noter vos signaux vous aide à agir avant que le stress grandisse." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Calmer votre corps vite : respiration et ancrage",
          minutes: 5,
          goal: "Utiliser la respiration lente et un exercice d'ancrage pour vous calmer en quelques minutes.",
          text: [
            "Quand le stress arrive, respirer lentement dit à votre corps qu'il est en sécurité et qu'il peut baisser l'alarme. Une méthode facile est la respiration carrée : inspirez en comptant jusqu'à 4, retenez 4, expirez 4, retenez 4. Recommencez quatre fois. Si retenir votre souffle est difficile, faites simplement une expiration plus longue que l'inspiration, par exemple inspirez sur 4 et expirez sur 6.",
            "L'ancrage ramène votre esprit au moment présent quand les soucis partent en avant. Essayez le 5-4-3-2-1 : nommez 5 choses que vous voyez, 4 choses que vous pouvez toucher, 3 choses que vous entendez, 2 choses que vous sentez et 1 chose que vous goûtez. Vous pouvez le faire partout : dans le bus, avant une réunion, dans un vestiaire, dans une salle d'attente.",
            "Ces techniques marchent mieux avec de l'entraînement. Essayez-les quand vous êtes calme, pour qu'elles soient prêtes quand vous en aurez besoin. Des applications gratuites peuvent vous guider, mais vous n'avez besoin d'aucune application. Si les exercices de respiration vous donnent le vertige, arrêtez et respirez normalement."
          ],
          steps: ["Remarquez un signal de stress.", "Respiration carrée : inspirez 4, retenez 4, expirez 4, retenez 4. Recommencez quatre fois.", "Si les soucis continuent : faites l'ancrage 5-4-3-2-1.", "Notez à nouveau votre niveau de stress de 0 à 10."],
          words: [["Respiration carrée", "inspirer, retenir, expirer et retenir, chaque étape sur le même compte, en général 4."], ["Ancrage", "utiliser vos sens pour ramener votre attention au moment présent."]],
          slides: [
            { title: "Respiration carrée", bullets: ["Inspirez sur 4", "Retenez 4", "Expirez 4, retenez 4", "Recommencez quatre fois"] },
            { title: "Version plus facile", bullets: ["Expiration plus longue que l'inspiration", "Inspirez sur 4, expirez sur 6", "Vertige ? Arrêtez et respirez normalement"] },
            { title: "Ancrage 5-4-3-2-1", bullets: ["5 choses que vous voyez, 4 que vous pouvez toucher", "3 que vous entendez, 2 que vous sentez, 1 que vous goûtez", "Marche partout : bus, vestiaire, salle d'attente"] },
            { title: "Entraînez-vous au calme", bullets: ["Ainsi, la technique est prête quand il le faut", "Aucune application nécessaire"] }
          ],
          sources: [{ name: "National Institute of Mental Health (institut américain de santé mentale) : fiche sur le stress (en anglais)", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" }],
          tryIt: "Notez votre stress de 0 à 10. Faites quatre tours de respiration carrée, puis un tour d'ancrage 5-4-3-2-1. Notez à nouveau votre stress et écrivez les deux chiffres.",
          youCanNow: "calmer votre corps en quelques minutes par la respiration lente et ramener votre esprit au présent par l'ancrage.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert l'ancrage 5-4-3-2-1 ?", options: ["À s'endormir tout de suite", "À compter son argent", "À ramener votre esprit au moment présent grâce à vos sens", "À se souvenir de son numéro de téléphone"], answer: 2, why: "L'ancrage utilise vos cinq sens pour ramener votre attention au moment présent." },
            { objective: "O2", q: "Votre cœur bat vite avant un appel téléphonique difficile. Que faites-vous ?", options: ["Retenir votre souffle le plus longtemps possible", "Faire quelques tours de respiration carrée, puis passer l'appel", "Boire trois tasses de café", "Annuler tous vos appels de la semaine"], answer: 1, why: "La respiration carrée lente peut calmer votre corps en quelques minutes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Des habitudes quotidiennes qui vous protègent : sommeil, activité, repas et entourage",
          minutes: 5,
          goal: "Choisir deux petites habitudes quotidiennes qui rendent le stress plus facile à gérer.",
          text: [
            "La respiration aide sur le moment. Les habitudes aident tous les jours. Les CDC (l'agence de santé publique des États-Unis) disent que la plupart des adultes ont besoin de 7 heures de sommeil ou plus par nuit, et les adolescents de 13 à 17 ans de 8 à 10 heures. Bonnes habitudes de sommeil : se coucher et se lever à la même heure, garder la chambre sombre, calme et fraîche, ranger les écrans environ 30 minutes avant de dormir, et limiter la caféine en fin de journée et l'alcool avant le coucher.",
            "Bouger brûle le stress. Les CDC disent que les adultes ont besoin d'environ 150 minutes d'activité modérée par semaine, par exemple 30 minutes 5 jours par semaine, plus du renforcement musculaire 2 jours par semaine. Une marche rapide compte. Sportifs : les jours de repos et le sommeil font aussi partie de l'entraînement. Des repas réguliers et assez d'eau stabilisent aussi votre humeur.",
            "Les gens vous protègent. Passer du temps avec quelqu'un qui vous fait du bien, même un court appel, fait baisser le stress. Écrire dans un carnet et limiter les informations et les réseaux sociaux quand ils vous bouleversent aident aussi. Commencez petit : une habitude que vous gardez vaut mieux que cinq que vous abandonnez."
          ],
          steps: ["Regardez votre journal du stress de la leçon 1.", "Choisissez deux habitudes : une pour le sommeil ou l'activité, une pour l'entourage ou le repos.", "Rendez chacune petite et précise (\"marcher 15 minutes après le déjeuner\").", "Faites-les pendant une semaine et remarquez la différence."],
          words: [["Habitude", "une chose que vous faites si souvent qu'elle devient automatique."], ["Activité modérée", "un mouvement qui vous fait respirer plus fort mais qui vous laisse encore parler, comme une marche rapide."]],
          slides: [
            { title: "Sommeil", bullets: ["Adultes : 7 heures ou plus ; ados de 13 à 17 ans : 8 à 10 heures", "Même heure de coucher et de lever", "Écrans rangés environ 30 minutes avant de dormir"] },
            { title: "Activité", bullets: ["Adultes : environ 150 minutes par semaine", "Exemple : 30 minutes, 5 jours", "Une marche rapide compte"] },
            { title: "Repas, eau et entourage", bullets: ["Repas réguliers et assez d'eau", "Parlez à quelqu'un qui vous remonte le moral", "Faites des pauses avec les informations pénibles"] },
            { title: "Commencez petit", bullets: ["Choisissez deux habitudes", "Rendez-les précises", "Essayez-les pendant une semaine"] }
          ],
          sources: [
            { name: "CDC : À propos du sommeil (en anglais)", url: "https://www.cdc.gov/sleep/about/index.html" },
            { name: "CDC : Recommandations d'activité physique pour les adultes (en anglais)", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
          ],
          tryIt: "Écrivez deux petites habitudes pour cette semaine, une pour le sommeil ou l'activité et une pour l'entourage ou le repos, avec le moment où vous les ferez. Mettez un rappel sur votre téléphone ou notez-les dans votre agenda.",
          youCanNow: "choisir et planifier de petites habitudes quotidiennes de sommeil, d'activité et de lien avec les autres qui vous protègent du stress.",
          quickCheck: [
            { objective: "O3", q: "Quel objectif d'habitude est le plus facile à tenir ?", options: ["« Être en meilleure santé »", "« Ne plus jamais être stressé »", "« Faire deux heures de sport chaque jour à partir d'aujourd'hui »", "« Appeler ma sœur le dimanche après-midi »"], answer: 3, why: "Les petites habitudes précises avec un moment fixé sont plus faciles à tenir." },
            { objective: "O3", q: "Vous restez souvent tard au lit à faire défiler votre téléphone. Quelle petite habitude essayez-vous ?", options: ["Ranger le téléphone environ 30 minutes avant de dormir", "Utiliser plus le téléphone pour vous fatiguer", "Dormir avec la télévision allumée", "Vous coucher plus tard en semaine"], answer: 0, why: "Ranger les écrans avant de dormir est un conseil de sommeil donné dans cette leçon." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Remarquer et calmer le stress",
        questions: [
          { objective: "O1", q: "Lequel de ces signes est un signal de stress précoce dans vos actions ?", options: ["Dormir beaucoup moins que d'habitude", "Sentir le soleil sur votre visage", "Manger votre déjeuner habituel", "Rire à une blague"], answer: 0, why: "Les changements de sommeil, de repas, de consommation d'alcool ou le fait de s'éloigner des gens sont des signaux de stress dans vos actions." },
          { objective: "O2", q: "Qu'est-ce que la respiration carrée ?", options: ["Respirer dans un sac en papier", "Retenir votre souffle aussi longtemps que possible", "Inspirer, retenir, expirer et retenir, chaque étape sur environ 4", "Respirer vite pour vous réveiller"], answer: 2, why: "La respiration carrée utilise quatre comptes égaux pour calmer votre corps." },
          { objective: "O2", q: "Votre esprit s'emballe avant un entretien d'embauche. Quelle technique d'ancrage convient ?", options: ["Regarder les réseaux sociaux", "Nommer 5 choses que vous voyez, 4 que vous pouvez toucher, 3 que vous entendez, 2 que vous sentez et 1 que vous goûtez", "Boire trois cafés", "Repenser à toutes vos erreurs passées"], answer: 1, why: "Le 5-4-3-2-1 ramène votre attention au moment présent." },
          { objective: "O3", q: "Selon les CDC, de combien de sommeil la plupart des adultes ont-ils besoin ?", options: ["4 heures", "5 heures", "6 heures", "7 heures ou plus"], answer: 3, why: "Les CDC disent que les adultes ont besoin de 7 heures ou plus par nuit." },
          { objective: "O3", q: "Quel objectif d'habitude est le plus facile à tenir ?", options: ["\"Être en meilleure santé\"", "\"Ne plus jamais être stressé\"", "\"Courir un marathon la semaine prochaine\"", "\"Marcher 15 minutes après le déjeuner les jours de semaine\""], answer: 3, why: "Les petites habitudes précises sont plus faciles à commencer et à garder." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver du soutien et aider les autres",
      lessons: [
        {
          objectives: ["O4"],
          title: "Parler à quelqu'un et demander de l'aide",
          minutes: 5,
          goal: "Commencer une conversation pour demander du soutien à une personne de confiance.",
          text: [
            "Beaucoup de gens attendent trop longtemps avant de parler parce qu'ils se sentent faibles, ont honte ou ne veulent pas être un poids. Demander de l'aide est une compétence, pas une faiblesse. Les entraîneurs, les soldats, les agriculteurs et les chefs d'entreprise comptent tous sur une équipe.",
            "À qui parler : un ami ou un proche, un responsable religieux, un entraîneur, un mentor ou un parrain, un travailleur social ou un conseiller en réinsertion, un enseignant ou un conseiller scolaire, votre médecin, ou un conseiller ou un psychothérapeute. Votre médecin peut chercher une cause physique et vous aider à trouver des soins en santé mentale. Aux États-Unis, la ligne nationale d'aide de SAMHSA (1-800-662-4357 ; SAMHSA est l'agence fédérale de santé mentale et de lutte contre les addictions) est une ligne d'orientation gratuite, confidentielle et ouverte 24 h/24, 7 j/7, pour la santé mentale et la consommation de substances ; elle vous met en contact avec des traitements et des groupes de soutien près de chez vous, mais elle ne fait pas elle-même de suivi psychologique. Les anciens combattants peuvent aussi demander à leur équipe de santé du VA (le ministère américain des Anciens combattants). Ailleurs, votre médecin ou un centre de santé peut vous orienter.",
            "Comment commencer : choisissez un moment calme, dites-le simplement et dites ce dont vous avez besoin. Par exemple : \"Je suis très stressé ces temps-ci et je dors mal. Est-ce que je peux te parler quelques minutes ? J'ai surtout besoin que tu m'écoutes.\" Un chatbot d'IA peut vous aider à préparer vos mots, mais ce n'est pas un conseiller. N'y tapez pas de détails privés et, en cas de crise, contactez une vraie personne."
          ],
          steps: ["Choisissez une personne de confiance.", "Choisissez un moment et un endroit calmes.", "Dites ce qui se passe en une ou deux phrases.", "Dites ce dont vous avez besoin : être écouté, un conseil, de l'aide pour une tâche, ou de l'aide pour trouver un professionnel."],
          words: [["Conseiller ou psychothérapeute", "un professionnel formé qui aide les gens face au stress, aux émotions et aux problèmes de santé mentale."], ["Orientation", "le fait d'être dirigé ou envoyé vers le bon service ou le bon professionnel."], ["Confidentiel", "gardé secret."]],
          slides: [
            { title: "Demander de l'aide est une compétence", bullets: ["Pas une faiblesse", "Les équipes gagnent : entraîneurs, unités, familles, coopératives"] },
            { title: "Des personnes à qui parler", bullets: ["Ami, proche, responsable religieux, entraîneur, mentor", "Travailleur social, enseignant, conseiller scolaire", "Votre médecin, un conseiller ou un psychothérapeute"] },
            { title: "Trouver des soins aux États-Unis", bullets: ["Ligne SAMHSA : 1-800-662-4357, gratuite, 24 h/24", "Vous oriente vers des traitements et groupes locaux", "Anciens combattants : demandez à votre équipe du VA"] },
            { title: "Comment commencer", bullets: ["Moment calme, mots simples", "\"Je suis très stressé. On peut parler ?\"", "Dites ce dont vous avez besoin"] }
          ],
          sources: [{ name: "Ligne nationale d'aide de SAMHSA (en anglais)", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }],
          tryIt: "Écrivez les deux premières phrases que vous diriez à une personne de confiance au sujet de votre stress, y compris ce dont vous avez besoin de sa part. Si vous vous sentez prêt, envoyez le message ou ayez cette conversation cette semaine.",
          youCanNow: "choisir une personne à qui parler, commencer la conversation avec des mots simples et dire quel type de soutien il vous faut.",
          quickCheck: [
            { objective: "O4", q: "Quelle est une bonne première phrase pour demander du soutien ?", options: ["« Laisse tomber, ce n'est rien. »", "« Tu ne m'aides jamais. »", "« Je suis vraiment stressé ces temps-ci, et j'aimerais en parler quelques minutes. »", "« Règle mes problèmes. »"], answer: 2, why: "Dire simplement ce qui se passe et ce dont vous avez besoin ouvre la porte à l'aide." },
            { objective: "O4", q: "Vous êtes stressé et vous utilisez un chatbot d'IA la nuit. Que faites-vous si vous commencez à ne plus vous sentir en sécurité ?", options: ["Continuer à parler seulement au chatbot", "Joindre une vraie personne, comme le 988 aux États-Unis ou votre ligne de crise locale", "Éteindre votre téléphone et attendre", "Chercher plus d'informations sur le stress"], answer: 1, why: "Un chatbot peut aider à préparer des mots, mais en cas de crise vous contactez une vraie personne." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Les signes d'alerte et l'aide en cas de crise",
          minutes: 6,
          goal: "Repérer des signes d'alerte graves chez vous ou chez quelqu'un d'autre et savoir qui appeler.",
          text: [
            "Parfois, le stress devient quelque chose de plus grave. Le National Institute of Mental Health (NIMH, l'institut américain de santé mentale) cite des signes d'alerte du suicide, dont : parler de vouloir mourir, se sentir sans espoir ou pris au piège, se sentir un poids pour les autres, chercher des moyens de mourir, donner des objets importants ou faire ses adieux, s'éloigner des gens, boire plus d'alcool ou prendre plus de drogues, de grandes sautes d'humeur, et de grands changements de sommeil ou d'appétit. Des signes nouveaux ou qui s'aggravent demandent une aide rapide.",
            "Si vous voyez des signes chez quelqu'un : posez-lui la question directement et calmement : \"Est-ce que tu penses à te suicider ?\" Poser la question ne lui met pas l'idée en tête. Écoutez sans juger, restez avec la personne et aidez-la à obtenir de l'aide. Si quelqu'un est en danger immédiat, appelez votre numéro d'urgence (le 911 aux États-Unis).",
            "Hors des États-Unis : appelez la ligne d'écoute en cas de crise ou le numéro d'urgence de votre pays, et enregistrez-le dès aujourd'hui dans votre téléphone. Aux États-Unis : appelez ou envoyez un SMS au 988, ou discutez en ligne sur 988lifeline.org, pour joindre la ligne 988 de prévention du suicide et d'aide en cas de crise. C'est gratuit, confidentiel et ouvert 24 h/24, 7 j/7. Anciens combattants, militaires et leurs familles : appelez le 988 puis tapez 1, ou envoyez un SMS au 838255, pour joindre la Veterans Crisis Line (ligne de crise des anciens combattants) ; pas besoin d'être inscrit aux soins du VA.",
            "Demandez aussi de l'aide (à votre médecin ou à un conseiller) quand le stress ou l'inquiétude ne partent pas, vous empêchent de vivre votre quotidien, ou vous font éviter des choses que vous devez faire."
          ],
          steps: ["Remarquez le signe d'alerte.", "Posez la question directement et écoutez sans juger.", "Restez avec la personne ; ne la laissez pas seule si elle est en danger.", "Appelez ensemble la ligne d'écoute de votre pays, ou, aux États-Unis, appelez ou envoyez un SMS au 988 (anciens combattants : 988 puis 1).", "Danger immédiat : appelez le numéro d'urgence de votre pays (911 aux États-Unis)."],
          words: [["Crise", "un moment où la sécurité d'une personne ou sa capacité à faire face est gravement menacée."], ["Ligne 988", "la ligne 988 de prévention du suicide et d'aide en cas de crise, aux États-Unis : appelez ou envoyez un SMS au 988 pour une aide gratuite et confidentielle à toute heure."]],
          slides: [
            { title: "Signes d'alerte", bullets: ["Parler de vouloir mourir ou d'être un poids", "Se sentir sans espoir ou pris au piège", "Donner ses affaires, faire ses adieux", "S'éloigner des gens, plus d'alcool ou de drogues"] },
            { title: "Si vous voyez des signes chez quelqu'un", bullets: ["Posez la question directement et calmement", "Écoutez sans juger", "Restez avec la personne et aidez-la à obtenir de l'aide"] },
            { title: "Aide en cas de crise aux États-Unis", bullets: ["Appelez ou envoyez un SMS au 988, ou discutez sur 988lifeline.org", "Gratuit, confidentiel, 24 h/24, 7 j/7", "Anciens combattants : 988 puis 1, ou SMS au 838255"] },
            { title: "Hors des États-Unis et urgences", bullets: ["Enregistrez dès maintenant la ligne d'écoute ou le numéro d'urgence de votre pays", "Danger immédiat : appelez le numéro d'urgence de votre pays (911 aux États-Unis)"] }
          ],
          sources: [
            { name: "Ligne 988 de prévention du suicide et d'aide en cas de crise (en anglais)", url: "https://988lifeline.org/" },
            { name: "Veterans Crisis Line, ligne de crise des anciens combattants (en anglais)", url: "https://www.veteranscrisisline.net/" },
            { name: "National Institute of Mental Health : signes d'alerte du suicide (en anglais)", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" }
          ],
          tryIt: "Enregistrez tout de suite dans votre téléphone les numéros de crise de l'endroit où vous vivez : hors des États-Unis, la ligne d'écoute et le numéro d'urgence de votre pays ; aux États-Unis, le 988 (et le 988 puis 1 pour les anciens combattants). Puis écrivez les mots exacts que vous utiliseriez pour demander à un ami s'il pense au suicide.",
          youCanNow: "repérer des signes d'alerte graves, poser la question directement à quelqu'un, et le mettre en contact, ou vous-même, avec une aide en cas de crise.",
          quickCheck: [
            { objective: "O5", q: "Lequel de ces signes est un signe d'alerte du suicide ?", options: ["Préparer une fête d'anniversaire", "Être fatigué après le travail", "Dire qu'on est un fardeau ou qu'on veut mourir", "Être occupé par un nouvel emploi"], answer: 2, why: "Dire qu'on est un fardeau ou qu'on veut mourir est un signe d'alerte grave." },
            { objective: "O5", q: "Un ami ancien combattant vous dit qu'il a un plan pour mettre fin à ses jours. Que faites-vous ?", options: ["Changer de sujet", "Promettre de garder le secret", "Le laisser seul se reposer", "Rester avec lui et appeler le 988 puis taper 1, ou le 911 s'il est en danger immédiat"], answer: 3, why: "Restez avec lui et mettez-le tout de suite en contact avec une aide en cas de crise." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Écrire votre plan personnel pour faire face au stress",
          minutes: 5,
          goal: "Écrire un plan d'une page qui vous dit quoi faire quand le stress monte.",
          text: [
            "Quand vous êtes très stressé, il est difficile de penser clairement. Un plan pour faire face au stress est une courte page que vous écrivez quand vous êtes calme, pour savoir quoi faire quand les choses deviennent difficiles.",
            "Votre plan a six parties : vos signaux de stress précoces, vos techniques pour vous calmer, vos habitudes quotidiennes, les personnes à qui parler, l'aide professionnelle et les numéros de crise. Gardez-le court et écrit avec vos propres mots.",
            "Gardez le plan à portée de main : sur papier dans votre portefeuille ou votre sac, et sur votre téléphone. Partagez-le avec une personne de confiance. Relisez-le tous les quelques mois, et après un grand changement comme un nouveau travail, un déménagement, la fin d'une saison ou un retour à la maison."
          ],
          steps: ["Écrivez vos trois principaux signaux de stress précoces.", "Écrivez deux techniques pour vous calmer que vous avez pratiquées.", "Écrivez deux habitudes quotidiennes que vous allez garder.", "Écrivez deux personnes à qui parler, avec le moyen de les joindre.", "Écrivez un endroit où obtenir une aide professionnelle, et vos numéros de crise."],
          words: [["Plan pour faire face au stress", "un court plan écrit de ce que vous ferez et de qui vous appellerez quand le stress monte."]],
          slides: [
            { title: "Pourquoi écrire un plan", bullets: ["Le stress rend la réflexion difficile", "Écrivez-le quand vous êtes calme"] },
            { title: "Six parties", bullets: ["Signaux, techniques pour se calmer, habitudes", "Personnes, aide professionnelle, numéros de crise"] },
            { title: "Gardez-le près de vous", bullets: ["Une copie papier et une copie sur le téléphone", "Partagez-le avec une personne de confiance", "Mettez-le à jour après un grand changement"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'une page avec les six parties, y compris la ligne d'écoute et le numéro d'urgence de votre pays (aux États-Unis : le 988, et le 988 puis 1 pour les anciens combattants). Gardez une copie sur votre téléphone et une sur papier.",
          youCanNow: "écrire et utiliser un plan personnel qui vous dit exactement quoi faire et qui appeler quand le stress monte.",
          quickCheck: [
            { objective: "O6", q: "Quelle partie d'un plan pour faire face au stress vient en premier pour vous aider à agir tôt ?", options: ["Vos propres signaux précoces de stress", "Votre plat préféré", "Votre emploi du temps au travail", "Le solde de votre compte bancaire"], answer: 0, why: "Connaître vos signaux vous dit quand utiliser le reste du plan." },
            { objective: "O6", q: "Votre plan est terminé. Qu'en faites-vous ?", options: ["Le jeter après l'avoir lu une fois", "Le garder sur papier et sur votre téléphone, et le partager avec une personne de confiance", "Le publier en ligne", "Le cacher pour que personne ne le voie jamais"], answer: 1, why: "Garder le plan à portée de main et le partager fait qu'il est là quand vous en avez besoin." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver du soutien et aider les autres",
        questions: [
          { objective: "O4", q: "Quelle est la meilleure façon de commencer à demander du soutien à un ami ?", options: ["Attendre que les choses aillent beaucoup plus mal", "Dire simplement ce qui se passe et ce dont vous avez besoin de lui", "En parler sur internet sans le lui dire", "Faire des allusions et espérer qu'il devine"], answer: 1, why: "Des mots simples et une demande claire aident l'autre personne à vous aider." },
          { objective: "O5", q: "Une collègue dit qu'elle se sent un poids pour les autres et qu'elle donne ses affaires. Que devez-vous faire ?", options: ["Changer de sujet", "Lui dire de se changer les idées", "Lui demander directement si elle pense au suicide, rester avec elle et l'aider à obtenir de l'aide", "Attendre un mois pour voir si ça passe"], answer: 2, why: "Ce sont des signes d'alerte. Poser la question directement et l'aider à obtenir de l'aide peut sauver une vie." },
          { objective: "O5", q: "Aux États-Unis, comment joindre la ligne 988 de prévention du suicide et d'aide en cas de crise ?", options: ["Seulement par e-mail", "En appelant ou en envoyant un SMS au 988, ou en discutant sur 988lifeline.org", "En allant dans un bureau", "En appelant le 411"], answer: 1, why: "On joint le 988 par appel, SMS ou discussion en ligne, gratuitement et 24 h/24." },
          { objective: "O5", q: "Comment un ancien combattant américain peut-il joindre la Veterans Crisis Line ?", options: ["En appelant le 988 puis en tapant 1", "Seulement en allant dans un bureau du VA", "Seulement s'il est inscrit aux soins du VA", "En envoyant une lettre"], answer: 0, why: "Les anciens combattants appellent le 988 puis tapent 1 (ou envoient un SMS au 838255) ; aucune inscription n'est nécessaire." },
          { objective: "O6", q: "Qu'est-ce qui a sa place dans un plan personnel pour faire face au stress ?", options: ["Le mot de passe de votre banque", "Une liste des gens contre qui vous êtes en colère", "Rien ; les plans ne servent à rien", "Vos numéros de crise et deux personnes à qui parler"], answer: 3, why: "Le plan contient vos signaux, techniques, habitudes, personnes, aide professionnelle et numéros de crise." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Santé mentale et gestion du stress",
    questions: [
      { objective: "O1", q: "La meilleure description du stress est :", options: ["Toujours un signe de faiblesse", "La réaction d'alarme du corps et de l'esprit face à une pression", "Quelque chose que seuls les adultes ressentent", "Une maladie que seul un médecin peut voir"], answer: 1, why: "Le stress est une réaction normale ; il devient un problème quand il dure trop ou qu'il est trop fort." },
      { objective: "O1", q: "Lequel est un signal de stress dans vos pensées ?", options: ["Un souci qui tourne en boucle", "Un muscle douloureux après le sport", "Se sentir rassasié après le déjeuner", "Une journée ensoleillée"], answer: 0, why: "Les soucis en boucle et le mal à se concentrer sont des signaux dans les pensées." },
      { objective: "O1", q: "Pourquoi apprendre vos propres signaux de stress précoces ?", options: ["Pour pouvoir les cacher", "Pour agir avant que le stress ne grandisse", "Pour ne plus jamais être stressé", "Pour vous diagnostiquer vous-même"], answer: 1, why: "Repérer les signaux tôt vous permet d'utiliser vos techniques plus vite." },
      { objective: "O2", q: "Dans la respiration carrée, les comptes sont en général :", options: ["Inspirez 1, expirez 1", "Inspirez 10, retenez 30", "Inspirez 4, retenez 4, expirez 4, retenez 4", "Le plus vite possible"], answer: 2, why: "Quatre comptes égaux ralentissent votre respiration et calment votre corps." },
      { objective: "O2", q: "Les exercices de respiration vous donnent le vertige. Que devez-vous faire ?", options: ["Respirer plus vite", "Retenir votre souffle plus longtemps", "Continuer quoi qu'il arrive", "Arrêter et respirer normalement"], answer: 3, why: "Si vous avez le vertige, arrêtez et respirez normalement." },
      { objective: "O2", q: "L'ancrage 5-4-3-2-1 utilise :", options: ["Vos cinq sens", "Cinq applications", "Cinq amis", "Cinq minutes de course"], answer: 0, why: "Vous nommez des choses que vous voyez, touchez, entendez, sentez et goûtez." },
      { objective: "O2", q: "Quel est le meilleur moment pour vous entraîner aux techniques pour vous calmer ?", options: ["Seulement pendant une crise", "Jamais ; elles marchent sans entraînement", "Quand vous êtes calme, pour qu'elles soient prêtes plus tard", "Seulement avec une application payante"], answer: 2, why: "L'entraînement rend la technique prête quand vous en avez besoin." },
      { objective: "O3", q: "Selon les CDC, de combien de sommeil les adolescents de 13 à 17 ans ont-ils besoin environ ?", options: ["8 à 10 heures", "5 à 6 heures", "4 heures", "12 à 14 heures"], answer: 0, why: "Les CDC indiquent 8 à 10 heures pour les adolescents de 13 à 17 ans." },
      { objective: "O3", q: "Lequel est un conseil de sommeil des CDC ?", options: ["Boire du café tard le soir", "Changer d'heure de coucher chaque soir", "Dormir avec des lumières fortes allumées", "Ranger les écrans environ 30 minutes avant de dormir"], answer: 3, why: "Ranger les écrans avant le coucher aide à dormir." },
      { objective: "O3", q: "Combien d'activité modérée par semaine les CDC conseillent-ils environ aux adultes ?", options: ["10 minutes", "150 minutes", "1 000 minutes", "Aucune"], answer: 1, why: "Les adultes ont besoin d'environ 150 minutes d'activité modérée par semaine, plus du renforcement musculaire 2 jours." },
      { objective: "O4", q: "Demander de l'aide, c'est :", options: ["Un signe que vous avez échoué", "Seulement pour les gens sans amis", "Une compétence que les personnes fortes et les équipes utilisent", "Quelque chose à éviter"], answer: 2, why: "Demander de l'aide est une compétence, pas une faiblesse." },
      { objective: "O4", q: "Que fait la ligne nationale d'aide de SAMHSA aux États-Unis ?", options: ["Elle oriente gratuitement et en toute confidentialité vers des traitements et du soutien près de chez vous", "Elle envoie la police chez vous", "Elle rédige des ordonnances", "Elle fait payer chaque appel"], answer: 0, why: "C'est une ligne d'orientation gratuite ouverte 24 h/24 ; elle ne fait pas elle-même de suivi psychologique." },
      { objective: "O4", q: "Si vous utilisez un chatbot d'IA quand vous êtes stressé, quelle est l'attitude la plus sûre ?", options: ["Lui donner votre nom complet, votre adresse et votre numéro de pièce d'identité", "L'utiliser pour préparer les mots d'une conversation, et contacter une vraie personne en cas de crise", "Le traiter comme votre psychothérapeute au lieu de voir quelqu'un", "Suivre tous ses conseils médicaux sans vérifier"], answer: 1, why: "L'IA peut vous aider à vous préparer, mais ce n'est pas un conseiller ; une crise demande une vraie personne." },
      { objective: "O5", q: "Lequel est un signe d'alerte du suicide ?", options: ["Préparer une fête d'anniversaire", "Commencer un nouveau loisir", "Faire ses adieux et donner des objets importants", "Bien dormir"], answer: 2, why: "Donner ses affaires et faire ses adieux sont des signes d'alerte cités par le NIMH." },
      { objective: "O5", q: "Demander directement à quelqu'un s'il pense au suicide lui met-il l'idée en tête ?", options: ["Oui, toujours", "Seulement chez les adolescents", "Seulement au téléphone", "Non ; poser la question calmement ouvre la porte à l'aide"], answer: 3, why: "Poser la question directement et calmement aide la personne à parler et à obtenir de l'aide." },
      { objective: "O5", q: "Aux États-Unis, quelqu'un est en danger immédiat. Que faites-vous ?", options: ["Vous en parlez sur internet", "Vous appelez le 911", "Vous attendez demain", "Vous lui envoyez un lien vers ce cours"], answer: 1, why: "Un danger immédiat demande les services d'urgence : le 911 aux États-Unis." },
      { objective: "O5", q: "Vous vivez hors des États-Unis et un ami est en crise. Que faites-vous ?", options: ["Vous appelez la ligne d'écoute ou le numéro d'urgence de votre pays", "Vous envoyez un SMS au 988 depuis l'étranger et vous attendez", "Vous ne faites rien", "Vous demandez à une IA de s'en occuper"], answer: 0, why: "Le 988 est la ligne des États-Unis ; ailleurs, utilisez la ligne d'écoute ou le numéro d'urgence de votre pays." },
      { objective: "O6", q: "Quand devez-vous voir un médecin ou un conseiller pour le stress, même sans crise ?", options: ["Jamais", "Seulement si un ami vous le dit", "Seulement une fois par an", "Quand le stress ne part pas ou vous empêche de vivre votre quotidien"], answer: 3, why: "Un stress qui dure ou qui gêne le quotidien est un signe qu'il faut demander de l'aide." },
      { objective: "O6", q: "Où devez-vous garder votre plan pour faire face au stress ?", options: ["Caché là où vous ne le trouvez pas", "Seulement dans votre tête", "Sur papier et sur votre téléphone, partagé avec une personne de confiance", "Dans une publication publique sur les réseaux sociaux"], answer: 2, why: "Des copies faciles à trouver aident quand le stress rend la réflexion difficile." },
      { objective: "O6", q: "Quelle partie du plan vous dit qui appeler en cas d'urgence ?", options: ["Les habitudes quotidiennes", "Les techniques pour se calmer", "Les signaux de stress", "Les numéros de crise"], answer: 3, why: "Les numéros de crise, comme la ligne de votre pays ou le 988 aux États-Unis, ont leur place dans chaque plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      6,
      8,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Signaux précoces",
        objective: "O1",
        notYet: "Moins de trois signaux, ou des signaux trop généraux comme « stress ».",
        meets: "Trois signaux précoces personnels écrits avec les mots de l'apprenant.",
        exceeds: "Les signaux viennent d'un vrai journal du stress et touchent le corps, les pensées ou les actions."
      },
      {
        name: "Techniques pour se calmer",
        objective: "O2",
        notYet: "Des techniques sont listées mais pas pratiquées.",
        meets: "Deux techniques pratiquées, avec une note de stress avant et après.",
        exceeds: "Indique quand et où chaque technique marche le mieux pour lui."
      },
      {
        name: "Habitudes quotidiennes",
        objective: "O3",
        notYet: "Les habitudes sont vagues ou sans moment fixé.",
        meets: "Deux petites habitudes avec une heure ou un rappel pour chacune.",
        exceeds: "Les habitudes ont été essayées pendant au moins quelques jours."
      },
      {
        name: "Personnes de soutien et aide",
        objective: "O4",
        notYet: "Aucune personne notée, ou aucun moyen de la joindre.",
        meets: "Deux personnes avec la façon de les joindre, et un endroit où trouver une aide professionnelle.",
        exceeds: "L'apprenant a déjà parlé avec l'une d'elles."
      },
      {
        name: "Numéros de crise",
        objective: "O5",
        notYet: "Les numéros de crise manquent ou ne sont pas les bons pour son lieu de vie.",
        meets: "Le 988 (et le 988 puis 1 pour les anciens combattants) ou la ligne de crise locale et le numéro d'urgence sont dans le plan et enregistrés dans le téléphone.",
        exceeds: "Connaît aussi les mots pour demander directement à un ami s'il pense au suicide."
      },
      {
        name: "Plan gardé à portée de main",
        objective: "O6",
        notYet: "Il manque des parties au plan ou il n'est pas enregistré.",
        meets: "Les six parties sur une page, gardée sur papier et sur le téléphone.",
        exceeds: "Partagé avec une personne de confiance."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui disent avoir utilisé une technique pour se calmer ou leur plan dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui ont les numéros de crise enregistrés dans leur téléphone à 30 jours",
      "Apprenants qui ont contacté une personne de soutien ou un professionnel dans les 30 jours",
      "Apprenants qui commencent un autre cours Koach Learn de compétences de vie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone pour enregistrer les numéros de crise et le plan",
      "Du papier et un stylo pour le journal du stress et le plan",
      "Un endroit calme pour pratiquer la respiration",
      "Environ 60 minutes au total, plus une journée pour le journal du stress"
    ],
    facilitatorNotes: [
      "Donnez les numéros de crise au début de chaque séance : le 988 aux États-Unis (988 puis 1 pour les anciens combattants) ou la ligne de crise locale et le numéro d'urgence.",
      "Prévoyez quoi faire si un apprenant est en détresse : connaissez la ligne de crise locale et qui peut aider sur place, et ne laissez jamais seule une personne en danger.",
      "Ne demandez pas aux apprenants de lire à voix haute leur journal du stress ou leur plan ; le partage est toujours facultatif.",
      "Rappelez que ce cours ne pose pas de diagnostic et ne soigne pas ; encouragez les apprenants à voir un médecin ou un conseiller quand le stress ne part pas.",
      "Pratiquez ensemble la respiration et l'ancrage, et dites aux apprenants d'arrêter et de respirer normalement s'ils ont la tête qui tourne."
    ]
  }
};
