"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-education.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-education-fr",
  lang: "fr",
  translationOf: "underserved-ai-education",
  category: "Undeserved Community",
  name: "L'IA pour l'éducation et l'apprentissage",
  skills: "Utiliser l'IA comme un professeur patient, Créer des questions d'entraînement, Trouver des sites d'apprentissage gratuits, Construire un plan d'étude, Aider un enfant à apprendre sans faire le travail à sa place",
  outcome: "utiliser un assistant d'IA gratuit et un site d'apprentissage gratuit pour apprendre quelque chose de nouveau : vous faire expliquer une idée difficile, vous entraîner avec des questions créées par l'IA, et suivre un plan d'étude simple de deux semaines que vous avez fait vous-même.",
  about: [
    "Il n'est jamais trop tard pour apprendre. Vous voulez peut-être finir un diplôme, améliorer votre anglais, apprendre une compétence pour le travail, ou suivre les devoirs de votre enfant. Les outils d'IA gratuits peuvent être un professeur patient qui ne se lasse jamais de vos questions.",
    "Vous apprendrez à demander à l'IA d'expliquer les choses à votre niveau, à créer des questions d'entraînement, à trouver des sites d'apprentissage gratuits, à construire un plan d'étude adapté à une vie chargée, et à aider un enfant à apprendre sans que l'IA fasse ses devoirs à sa place.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez une chose que vous voulez apprendre. Faites avec un assistant d'IA un plan d'étude de deux semaines qui utilise un site d'apprentissage gratuit (comme Khan Academy ou LearnFree) 20 minutes par jour. Puis demandez à l'IA cinq questions d'entraînement sur le premier sujet, répondez-y vous-même et vérifiez vos réponses.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes de communautés mal desservies qui veulent apprendre quelque chose de nouveau : finir un diplôme, améliorer leur anglais, apprendre une compétence professionnelle ou aider leurs enfants à faire leurs devoirs. Beaucoup travaillent, élèvent des enfants ou s'occupent de leur famille.",
    startingPoint: "Ils utilisent un peu le téléphone et internet. Certains ont eu une scolarité difficile ou ont quitté l'école tôt, et peu ont déjà utilisé un assistant d'IA ou un site d'apprentissage gratuit pour étudier.",
    gap: "Les outils d'IA et les sites d'apprentissage gratuits peuvent servir de tuteur patient, mais les apprenants ne savent pas demander des explications à leur niveau, s'entraîner au lieu de seulement relire, ni faire un plan d'étude adapté à une vie chargée. Sans cela, beaucoup abandonnent des objectifs d'apprentissage qui aideraient leur travail et leur famille.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque",
      "Temps : de courtes séances d'étude par jour, souvent 20 minutes ou moins",
      "L'IA peut se tromper en maths et sur les faits ; les apprenants vérifient les étapes et des sources fiables",
      "Les écoles ont leurs propres règles sur l'IA, et beaucoup d'outils d'IA ont une limite d'âge pour les enfants"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et autonomie numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à une idée que vous trouvez difficile", action: "demander à un assistant d'IA de l'expliquer à votre niveau avec un exemple de tous les jours, et dire quelle partie reste confuse", standard: "jusqu'à pouvoir la réexpliquer avec vos propres mots" },
    { id: "O2", condition: "Après avoir appris une idée", action: "demander à un assistant d'IA des questions d'entraînement une par une, y répondre vous-même et vérifier les réponses", standard: "en répondant avant de regarder et en vérifiant toute réponse qui semble fausse" },
    { id: "O3", condition: "Face à une compétence que vous voulez apprendre", action: "trouver un cours gratuit sur un site d'apprentissage ou à votre bibliothèque", standard: "en ouvrant sa première leçon" },
    { id: "O4", condition: "À partir du temps réel dont vous disposez chaque semaine", action: "créer avec un assistant d'IA un plan d'étude de deux semaines qui utilise un site d'apprentissage gratuit", standard: "avec un petit sujet par jour, des jours de repos, et le plan placé là où vous le verrez" },
    { id: "O5", condition: "Face au sujet des devoirs d'un enfant", action: "utiliser un assistant d'IA pour qu'il vous explique l'idée afin de pouvoir l'enseigner, sans donner les réponses à l'enfant", standard: "en suivant les règles de l'école sur l'IA" },
    { id: "O6", condition: "À la fin d'une semaine d'étude", action: "vérifier vos progrès avec un court quiz et ajuster votre plan", standard: "en révisant chaque sujet raté" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'IA comme professeur particulier",
      lessons: [
        {
          objectives: ["O1"],
          title: "Se faire expliquer une idée difficile à son niveau",
          minutes: 5,
          goal: "Demander à un assistant d'IA d'expliquer une idée difficile d'une façon que vous comprenez.",
          text: [
            "Un professeur particulier est quelqu'un qui explique les choses en tête-à-tête. Un assistant d'IA gratuit peut jouer ce rôle avec patience. Vous pouvez poser la même question plusieurs fois, et il ne vous juge pas.",
            "Dites-lui votre niveau : « Explique-moi les fractions comme à un débutant » ou « Explique avec un exemple de cuisine. » Les exemples tirés de votre vie rendent les idées plus faciles à retenir.",
            "Si c'est encore flou, dites quelle partie vous ne comprenez pas : « Je comprends la première partie, mais pas pourquoi on retourne la deuxième fraction. »"
          ],
          steps: ["Nommez l'idée que vous voulez apprendre.", "Dites à l'IA votre niveau et demandez un exemple de la vie courante.", "Lisez la réponse lentement.", "Dites exactement quelle partie reste floue et redemandez."],
          words: [["Professeur particulier", "un enseignant qui aide une seule personne à la fois."], ["Exemple", "un cas de la vie réelle qui montre comment une idée fonctionne."]],
          slides: [
            { title: "L'IA peut être un professeur patient", bullets: ["Demandez autant de fois que nécessaire", "Elle ne vous juge pas"] },
            { title: "Dites-lui votre niveau", bullets: ["« Explique comme à un débutant »", "« Prends un exemple de cuisine ou de travail »"] },
            { title: "Encore perdu ?", bullets: ["Dites quelle partie vous ne comprenez pas", "Demandez un autre exemple"] }
          ],
          tryIt: "Choisissez une idée que vous avez toujours trouvée difficile (les pourcentages, une règle de grammaire, le fonctionnement des intérêts). Demandez à un assistant d'IA de l'expliquer à un niveau débutant avec un exemple de votre vie quotidienne.",
          youCanNow: "vous faire expliquer une idée difficile à votre niveau et poser des questions de suivi jusqu'à ce qu'elle soit claire.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un tuteur ?", options: ["Une personne qui explique en tête-à-tête", "Un examen passé à l'école", "Un type de calculatrice", "Un bâtiment scolaire"], answer: 0, why: "Un tuteur aide une seule personne à apprendre, et un assistant d'IA peut jouer le rôle d'un tuteur patient." },
            { objective: "O1", q: "Vous comprenez la première partie d'une explication mais pas la deuxième. Que demandez-vous ?", options: ["« Réexplique tout. »", "« Je comprends la première partie, mais pas pourquoi on inverse la deuxième fraction. »", "« Laisse tomber. »", "« Donne-moi la réponse. »"], answer: 1, why: "Dire exactement quelle partie est confuse aide l'IA à expliquer cette partie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "S'entraîner avec des questions créées par l'IA",
          minutes: 5,
          goal: "Demander à un assistant d'IA de vous interroger et de vérifier vos réponses.",
          text: [
            "Lire n'est pas la même chose qu'apprendre. On retient mieux en s'entraînant : répondre à des questions oblige le cerveau à aller rechercher l'idée.",
            "Demandez : « Donne-moi cinq questions d'entraînement sur les pourcentages, une à la fois. Attends ma réponse, puis dis-moi si j'ai juste et pourquoi. »",
            "L'IA peut se tromper en calcul et sur les faits. Si une réponse semble fausse, demandez-lui de montrer les étapes, ou vérifiez avec un site d'apprentissage fiable ou un enseignant."
          ],
          steps: ["Demandez un petit nombre de questions, une à la fois.", "Répondez vous-même à chacune avant de chercher quoi que ce soit.", "Demandez à l'IA de vérifier votre réponse et d'expliquer.", "Si sa réponse semble fausse, demandez-lui les étapes ou vérifiez une autre source."],
          words: [["Question d'entraînement", "une question à laquelle vous répondez pour retenir et tester ce que vous avez appris."]],
          slides: [
            { title: "S'entraîner vaut mieux que relire", bullets: ["Répondre fait ressortir l'idée de la mémoire", "Vous retenez mieux"] },
            { title: "Demandez à l'IA de vous interroger", bullets: ["« Donne-moi cinq questions, une à la fois »", "« Attends ma réponse, puis explique »"] },
            { title: "L'IA peut aussi se tromper", bullets: ["Demandez-lui de montrer les étapes", "Vérifiez avec un site d'apprentissage ou un enseignant"] }
          ],
          tryIt: "Demandez à un assistant d'IA trois questions d'entraînement sur l'idée de la leçon 1, une à la fois. Répondez à chacune avant qu'il vous donne la réponse.",
          youCanNow: "utiliser un assistant d'IA pour vous interroger et vérifier ce que vous avez appris.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi demander les questions d'entraînement une par une ?", options: ["L'IA ne peut en écrire qu'une", "Ça coûte moins cher", "Vous répondez à chacune avant de voir la suivante", "Ça rend les questions plus difficiles"], answer: 2, why: "Une par une, vous répondez vous-même à chaque question avant de passer à la suivante." },
            { objective: "O2", q: "L'IA dit que 25 % de 80 font 25. Que faites-vous ?", options: ["L'accepter", "Arrêter de vous entraîner", "Supprimer la conversation", "Lui demander de montrer les étapes ou vérifier avec une autre source"], answer: 3, why: "L'IA peut faire des erreurs de calcul, donc vous demandez les étapes ou vérifiez avec une source fiable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver des sites d'apprentissage gratuits",
          minutes: 4,
          goal: "Trouver un site d'apprentissage gratuit avec des leçons sur la compétence que vous voulez.",
          text: [
            "L'IA est une très bonne aide, mais elle s'utilise mieux à côté de vraies leçons. Les sites d'apprentissage gratuits vous donnent des cours dans l'ordre, avec des vidéos et des exercices.",
            "Khan Academy est une organisation à but non lucratif avec des cours gratuits en mathématiques, sciences, lecture, économie, informatique et préparation aux examens ; elle existe aussi en français. LearnFree propose des leçons gratuites, à votre rythme, sur l'informatique, Microsoft Office, les outils Google, la recherche d'emploi, les bases de l'argent, la lecture et les maths.",
            "Votre bibliothèque publique propose peut-être aussi des cours gratuits, du soutien scolaire ou des comptes d'apprentissage en ligne. Si vous pensez à l'université aux États-Unis, demandez de l'aide pour payer au bureau d'aide financière de l'établissement, ou consultez studentaid.gov, le site officiel du ministère américain de l'Éducation. Ailleurs, renseignez-vous auprès du service des bourses de votre pays."
          ],
          steps: ["Choisissez la compétence que vous voulez apprendre.", "Cherchez-la sur Khan Academy ou LearnFree.", "Choisissez un cours et regardez sa première leçon.", "Demandez à votre bibliothèque quels cours gratuits ou quel soutien elle propose."],
          words: [["À votre rythme", "vous avancez à votre vitesse, à n'importe quelle heure."], ["À but non lucratif", "une organisation qui travaille pour une mission, pas pour enrichir des propriétaires."]],
          sources: [
            { name: "Khan Academy : À propos", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (leçons gratuites à votre rythme)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (ministère de l'Éducation des États-Unis)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Utilisez l'IA à côté de vraies leçons", bullets: ["Des cours dans l'ordre", "Des vidéos et des exercices"] },
            { title: "Sites d'apprentissage gratuits", bullets: ["Khan Academy : maths, sciences, lecture, examens", "LearnFree : informatique, emploi, argent, lecture, maths"] },
            { title: "Encore de l'aide gratuite", bullets: ["Cours et soutien à la bibliothèque", "Financer l'université : aide financière de l'école ou studentaid.gov (É.-U.)"] }
          ],
          tryIt: "Allez sur Khan Academy ou LearnFree et trouvez un cours sur une compétence que vous voulez. Ouvrez la première leçon et notez son nom.",
          youCanNow: "trouver un site d'apprentissage gratuit avec un cours sur la compétence que vous voulez.",
          quickCheck: [
            { objective: "O3", q: "Que propose LearnFree ?", options: ["Des leçons gratuites sur l'ordinateur, la recherche d'emploi, l'argent, la lecture et les maths", "Des diplômes universitaires payants", "Des téléphones gratuits", "Seulement du placement en emploi"], answer: 0, why: "LearnFree propose des leçons gratuites, à votre rythme, sur des compétences de tous les jours." },
            { objective: "O3", q: "Vous voulez de l'aide gratuite en personne pour mieux lire. Où demandez-vous ?", options: ["Chez un vendeur de voitures", "À votre bibliothèque publique", "Dans une publicité sur les réseaux sociaux", "À une banque"], answer: 1, why: "Les bibliothèques publiques proposent souvent des cours gratuits, du tutorat ou des comptes d'apprentissage en ligne." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA comme professeur particulier",
        questions: [
          { objective: "O1", q: "L'explication de l'IA est trop difficile. Que devez-vous demander ?", options: ["Rien ; abandonner", "« Explique comme à un débutant, avec un exemple de cuisine. »", "« Utilise des mots plus compliqués. »", "« Fais plus long. »"], answer: 1, why: "Donner votre niveau et demander un exemple courant rend l'explication plus claire." },
          { objective: "O2", q: "Pourquoi s'entraîner avec des questions aide plus que relire ?", options: ["C'est plus rapide de sauter", "C'est plus joli", "Répondre oblige le cerveau à aller rechercher l'idée, donc on retient mieux", "Ça coûte moins cher"], answer: 2, why: "L'entraînement renforce la mémoire." },
          { objective: "O2", q: "L'IA dit que votre réponse de maths est fausse, mais vous pensez qu'elle est juste. Que faites-vous ?", options: ["Lui demander de montrer les étapes, ou vérifier une autre source", "Toujours faire confiance à l'IA", "Arrêter les maths", "Supprimer l'application"], answer: 0, why: "L'IA peut faire des erreurs de calcul ; les étapes montrent qui a raison." },
          { objective: "O3", q: "Lequel est un site d'apprentissage gratuit à but non lucratif ?", options: ["Un site de shopping", "Une application de réseau social", "Une boutique de jeux", "Khan Academy"], answer: 3, why: "Khan Academy est un site d'apprentissage gratuit à but non lucratif." },
          { objective: "O3", q: "Que veut dire « à votre rythme » ?", options: ["Vous devez finir en un jour", "Vous avancez à votre vitesse", "Un enseignant fixe chaque horaire", "Vous payez à la minute"], answer: 1, why: "Les leçons à votre rythme s'adaptent à votre emploi du temps." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Un apprentissage adapté à votre vie",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construire un plan d'étude adapté à une vie chargée",
          minutes: 5,
          goal: "Faire un plan d'étude simple de deux semaines avec un assistant d'IA.",
          text: [
            "Beaucoup d'adultes apprennent tout en travaillant, en élevant des enfants et en s'occupant de leur famille. Étudier peu mais régulièrement marche mieux que de longues séances impossibles à tenir.",
            "Demandez à l'IA un plan adapté à votre vraie semaine : « Je travaille le soir et j'ai 20 minutes chaque matin. Fais un plan de deux semaines pour apprendre les bases d'Excel avec LearnFree. Un petit sujet par jour, avec un jour de repos par semaine. »",
            "Mettez le plan là où vous le verrez : dans l'agenda de votre téléphone, sur le frigo ou dans un cahier. Cochez chaque jour."
          ],
          steps: ["Choisissez une compétence et un site d'apprentissage gratuit.", "Dites à l'IA combien de temps vous avez et quand.", "Demandez un plan de deux semaines avec un petit sujet par jour et des jours de repos.", "Mettez-le dans votre agenda ou sur le frigo et cochez chaque jour."],
          words: [["Plan d'étude", "un calendrier de ce que vous allez apprendre et quand."]],
          slides: [
            { title: "Peu mais régulier, ça gagne", bullets: ["20 minutes par jour valent mieux que 3 heures une fois", "Organisez autour du travail et de la famille"] },
            { title: "Demandez un plan à l'IA", bullets: ["Votre compétence et votre site", "Combien de temps et quand", "Un petit sujet par jour, avec des jours de repos"] },
            { title: "Gardez-le sous les yeux", bullets: ["Agenda du téléphone, frigo ou cahier", "Cochez chaque jour"] }
          ],
          tryIt: "Demandez à un assistant d'IA de faire un plan d'étude de deux semaines pour le cours trouvé à la leçon 3, selon le temps réel dont vous disposez chaque jour.",
          youCanNow: "faire un plan d'étude adapté à votre vraie semaine.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi des séances d'étude courtes et régulières marchent-elles pour les adultes occupés ?", options: ["Elles sont toujours plus faciles", "Elles ne demandent pas de plan", "Vous pouvez les tenir chaque jour", "Elles remplacent l'entraînement"], answer: 2, why: "Des séances courtes s'intègrent dans une vraie semaine, donc vous continuez au lieu d'abandonner." },
            { objective: "O4", q: "Vous n'avez que 15 minutes à midi. Que dites-vous à l'IA en demandant un plan ?", options: ["Rien sur votre temps", "Que vous pouvez étudier 3 heures par jour", "Seulement la matière", "Que vous avez 15 minutes à midi chaque jour"], answer: 3, why: "Dire à l'IA votre temps réel lui permet de faire un plan que vous pouvez suivre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Aider un enfant à apprendre sans faire le travail",
          minutes: 5,
          goal: "Utiliser l'IA pour aider un enfant à comprendre ses devoirs au lieu de lui donner les réponses.",
          text: [
            "L'IA peut vous aider à aider votre enfant, même dans des matières que vous n'avez jamais apprises ou que vous avez oubliées. L'essentiel est de l'utiliser pour expliquer, pas pour faire les devoirs.",
            "Les écoles ont des règles sur l'IA. Beaucoup n'acceptent pas que les élèves rendent un travail écrit par une IA. Demandez à l'enseignant de votre enfant quelles sont les règles. Vérifiez aussi les limites d'âge : beaucoup d'outils d'IA sont réservés aux 13 ans et plus, et certains demandent l'autorisation d'un parent pour les adolescents ; lisez les conditions d'utilisation de l'outil.",
            "Bonnes consignes pour les parents : « Explique comment calculer l'aire d'un rectangle pour que je puisse l'apprendre à mon enfant de 10 ans. Ne donne pas la réponse de cet exercice. » Ou : « Donne-moi trois questions faciles pour vérifier si mon enfant a compris. »"
          ],
          steps: ["Lisez les devoirs avec votre enfant.", "Demandez à l'IA de vous expliquer l'idée, pas de résoudre l'exercice.", "Expliquez-la à votre enfant avec vos mots.", "Laissez votre enfant faire le travail ; utilisez des questions de l'IA pour vérifier qu'il a compris.", "Suivez les règles de l'école sur l'IA."],
          words: [["Conditions d'utilisation", "les règles que vous acceptez en utilisant une application ou un site, y compris les limites d'âge."]],
          slides: [
            { title: "Expliquer, pas faire", bullets: ["Utilisez l'IA pour comprendre l'idée vous-même", "Votre enfant fait le travail"] },
            { title: "Suivez les règles", bullets: ["Demandez à l'enseignant les règles sur l'IA", "Beaucoup d'outils d'IA sont pour les 13 ans et plus", "Lisez les conditions d'utilisation"] },
            { title: "Consignes pour les parents", bullets: ["« Explique pour que je l'apprenne à mon enfant de 10 ans »", "« Ne donne pas la réponse »", "« Donne-moi trois questions faciles de vérification »"] }
          ],
          tryIt: "Prenez un sujet de devoirs (ou un sujet du niveau de votre enfant). Demandez à une IA de l'expliquer pour que vous puissiez l'enseigner, sans résoudre l'exercice. Notez comment vous l'expliqueriez avec vos mots.",
          youCanNow: "utiliser l'IA pour aider un enfant à apprendre en suivant les règles de l'école et en lui laissant son travail.",
          quickCheck: [
            { objective: "O5", q: "Quelle est la règle clé pour utiliser l'IA avec les devoirs d'un enfant ?", options: ["S'en servir pour expliquer, pas pour faire le travail", "La laisser écrire toute la réponse", "S'en servir seulement pendant les contrôles", "Ne jamais regarder les devoirs"], answer: 0, why: "L'IA doit vous aider à expliquer l'idée ; votre enfant fait quand même le travail." },
            { objective: "O5", q: "Votre enfant de 11 ans veut utiliser seul un outil d'IA. Que vérifiez-vous d'abord ?", options: ["Ses couleurs", "Sa limite d'âge et ses conditions, et les règles de l'école sur l'IA", "La vitesse à laquelle il écrit", "S'il a des jeux"], answer: 1, why: "Beaucoup d'outils d'IA sont pour les 13 ans et plus, et les écoles ont leurs propres règles." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Garder le cap et vérifier vos progrès",
          minutes: 5,
          goal: "Vérifier vos propres progrès et ajuster votre plan.",
          text: [
            "Après une semaine, faites le bilan. Quels jours avez-vous étudié ? Que savez-vous faire maintenant que vous ne saviez pas faire avant ? Les petites victoires comptent.",
            "Demandez à l'IA de vous interroger sur toute la semaine : « J'ai étudié ces cinq sujets. Donne-moi une question sur chacun. » Les questions ratées vous montrent quoi revoir.",
            "Si le plan était trop chargé, allégez-le. S'il était facile, ajoutez un peu. Un plan qui change reste un plan."
          ],
          steps: ["Comptez les jours où vous avez étudié.", "Demandez à l'IA une question sur chaque sujet étudié.", "Marquez celles que vous avez ratées et revoyez-les.", "Allégez ou renforcez le plan pour qu'il s'adapte à votre vie."],
          words: [["Progrès", "le chemin parcouru vers votre objectif."], ["Révision", "le fait de revoir quelque chose pour mieux le retenir."]],
          slides: [
            { title: "Faites le bilan chaque semaine", bullets: ["Quels jours avez-vous étudié ?", "Que savez-vous faire maintenant ?", "Les petites victoires comptent"] },
            { title: "Interrogez-vous sur la semaine", bullets: ["Une question par sujet", "Les questions ratées montrent quoi revoir"] },
            { title: "Ajustez votre plan", bullets: ["Trop chargé ? Allégez-le", "Trop facile ? Ajoutez un peu"] }
          ],
          tryIt: "Tâche finale : faites votre plan d'étude de deux semaines avec un assistant d'IA et un site d'apprentissage gratuit, puis demandez cinq questions d'entraînement sur le premier sujet, répondez-y vous-même et vérifiez vos réponses.",
          youCanNow: "apprendre une nouvelle compétence avec un plan d'étude, des leçons gratuites et l'entraînement par l'IA, en ajustant au fur et à mesure.",
          quickCheck: [
            { objective: "O6", q: "Que vous montrent les questions ratées à un quiz de la semaine ?", options: ["Que vous devriez abandonner", "Que l'IA se trompe", "Ce qu'il faut réviser ensuite", "Que le plan était parfait"], answer: 2, why: "Les questions ratées montrent les sujets à réviser." },
            { objective: "O6", q: "Votre plan vous a semblé trop facile cette semaine. Que faites-vous ?", options: ["Arrêter d'étudier", "Commencer une nouvelle matière", "Ne rien faire", "Ajouter un peu plus au plan"], answer: 3, why: "Un plan doit s'adapter à vous ; s'il est facile, ajoutez-en un peu." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Un apprentissage adapté à votre vie",
        questions: [
          { objective: "O4", q: "Quel plan d'étude a le plus de chances de marcher pour un parent occupé ?", options: ["Trois heures chaque soir", "20 minutes par jour avec des jours de repos", "Seulement pendant les vacances", "Aucun plan"], answer: 1, why: "Étudier peu mais régulièrement convient à une vie chargée." },
          { objective: "O4", q: "Que dire à l'IA quand vous demandez un plan d'étude ?", options: ["Votre mot de passe", "Vos coordonnées bancaires", "La compétence, le site et le temps dont vous disposez", "Rien"], answer: 2, why: "Ces détails adaptent le plan à votre vraie semaine." },
          { objective: "O5", q: "Votre enfant a des devoirs de maths. Quelle est la meilleure façon d'utiliser l'IA ?", options: ["Lui faire expliquer l'idée pour que vous puissiez l'enseigner", "Lui faire écrire les réponses pour votre enfant", "Copier les réponses dans les devoirs", "Ignorer les devoirs"], answer: 0, why: "Utiliser l'IA pour expliquer laisse l'apprentissage et le travail à votre enfant." },
          { objective: "O5", q: "Où connaître les règles d'une école sur l'IA ?", options: ["Une publication sur les réseaux sociaux", "L'IA elle-même", "Un inconnu en ligne", "Demander à l'enseignant ou à l'école"], answer: 3, why: "Chaque école fixe ses propres règles." },
          { objective: "O6", q: "Votre quiz de la semaine montre que vous avez raté deux sujets. Et ensuite ?", options: ["Abandonner", "Revoir ces deux sujets", "Les sauter pour toujours", "Commencer une nouvelle compétence"], answer: 1, why: "Les questions ratées montrent quoi revoir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour l'éducation et l'apprentissage",
    questions: [
      { objective: "O1", q: "Un professeur particulier est :", options: ["Quelqu'un qui aide une personne à apprendre", "Un type d'ordinateur", "Un examen", "Un bâtiment scolaire"], answer: 0, why: "Un professeur particulier enseigne en tête-à-tête." },
      { objective: "O1", q: "Pour avoir une explication plus claire, dites à l'IA :", options: ["Votre adresse", "Votre niveau, et demandez un exemple de la vie courante", "D'utiliser des mots plus difficiles", "Rien"], answer: 1, why: "Votre niveau et un exemple rendent l'explication plus claire." },
      { objective: "O1", q: "Vous comprenez une partie de la réponse mais pas tout. Dites :", options: ["« Laisse tomber. »", "« Fais plus long. »", "Quelle partie exacte est floue", "« Mets plus de chiffres. »"], answer: 2, why: "Nommer la partie floue donne une meilleure suite." },
      { objective: "O1", q: "Pourquoi un professeur IA patient est-il utile ?", options: ["Il note vos devoirs d'école", "Il vous donne un diplôme", "Chaque question coûte de l'argent", "Vous pouvez poser la même question plusieurs fois"], answer: 3, why: "Il ne se fatigue pas et ne vous juge pas." },
      { objective: "O2", q: "Quelle consigne fait que l'IA vous interroge bien ?", options: ["« Donne-moi cinq questions, une à la fois, et vérifie mes réponses. »", "« Donne-moi toutes les réponses. »", "« Quiz. »", "« Fais mon examen. »"], answer: 0, why: "Une à la fois, avec vérification, c'est un vrai entraînement." },
      { objective: "O2", q: "Avant que l'IA vous donne la réponse, vous devez :", options: ["La chercher", "Répondre vous-même", "Passer la question", "Fermer la conversation"], answer: 1, why: "Répondre d'abord, c'est ce qui rend l'entraînement efficace." },
      { objective: "O2", q: "Si une réponse de maths de l'IA semble fausse :", options: ["Lui faire confiance quand même", "Arrêter d'apprendre", "Lui demander les étapes ou vérifier une autre source", "Dénoncer votre ami"], answer: 2, why: "L'IA peut faire des erreurs de calcul." },
      { objective: "O3", q: "Khan Academy est :", options: ["Une université payante", "Un jeu", "Un magasin", "Un site d'apprentissage gratuit à but non lucratif"], answer: 3, why: "Elle offre des cours gratuits en tant qu'organisation à but non lucratif." },
      { objective: "O3", q: "LearnFree propose des leçons gratuites sur :", options: ["L'informatique, la recherche d'emploi, les bases de l'argent, la lecture et les maths", "Seulement la cuisine", "Seulement le sport", "Rien pour les adultes"], answer: 0, why: "LearnFree couvre beaucoup de compétences du quotidien et du travail." },
      { objective: "O3", q: "Où trouver aussi des cours gratuits ou du soutien ?", options: ["Une station de lavage", "Votre bibliothèque publique", "Le hall d'une banque", "Une publicité surgissante"], answer: 1, why: "Les bibliothèques proposent souvent des cours gratuits et du soutien." },
      { objective: "O3", q: "Pour des questions sur le financement de l'université aux États-Unis, où chercher ?", options: ["Un site au hasard qui demande des frais", "Le SMS d'un inconnu", "Le bureau d'aide financière de l'école ou studentaid.gov", "Un jeu vidéo"], answer: 2, why: "Ce sont les sources officielles." },
      { objective: "O4", q: "Un bon plan d'étude pour la plupart des adultes, c'est :", options: ["Cinq heures chaque dimanche", "Quand vous en avez envie", "Tout en une nuit", "Un peu d'étude chaque jour avec des jours de repos"], answer: 3, why: "Étudier peu mais régulièrement est plus facile à tenir." },
      { objective: "O4", q: "Où garder votre plan d'étude ?", options: ["Là où vous le verrez, comme l'agenda ou le frigo", "Caché dans un tiroir", "Seulement dans votre tête", "À la poubelle"], answer: 0, why: "Le voir vous rappelle d'étudier." },
      { objective: "O4", q: "En demandant un plan d'étude à l'IA, indiquez :", options: ["Votre numéro de sécurité sociale", "Le temps dont vous disposez vraiment et quand", "Le code de votre carte bancaire", "Votre adresse complète"], answer: 1, why: "Votre vrai temps donne un plan que vous pouvez suivre." },
      { objective: "O5", q: "Beaucoup d'outils d'IA ont une limite d'âge de :", options: ["5 ans et plus", "10 ans et plus", "13 ans et plus, parfois avec l'autorisation d'un parent", "Jamais de limite"], answer: 2, why: "Beaucoup d'outils d'IA sont pour les 13 ans et plus ; vérifiez les conditions de chaque outil." },
      { objective: "O5", q: "Pour les devoirs de votre enfant, l'IA doit :", options: ["Écrire les devoirs", "Passer l'examen", "Écrire à l'enseignant à votre place", "Expliquer l'idée, pas faire le travail"], answer: 3, why: "Expliquer laisse l'apprentissage à votre enfant." },
      { objective: "O5", q: "Laquelle est une bonne consigne de parent ?", options: ["« Explique pour que je l'apprenne à mon enfant de 10 ans. Ne donne pas la réponse. »", "« Fais les devoirs de mon enfant. »", "« Écris la rédaction. »", "« Donne toutes les réponses. »"], answer: 0, why: "Elle demande une explication, pas des réponses." },
      { objective: "O6", q: "À la fin d'une semaine d'étude, vous devez :", options: ["Supprimer vos notes", "Faire le bilan de ce que vous avez fait et vous interroger", "Tout recommencer à zéro", "Arrêter d'étudier"], answer: 1, why: "Le bilan montre les progrès et ce qu'il faut revoir." },
      { objective: "O6", q: "Votre plan était trop chargé pour votre semaine. Que faites-vous ?", options: ["Abandonner", "Culpabiliser", "L'alléger", "Le doubler"], answer: 2, why: "Un plan doit s'adapter à votre vie ; l'ajuster est normal." },
      { objective: "O2", q: "Dans la tâche finale, après que l'IA a donné cinq questions d'entraînement, vous :", options: ["Copiez ses réponses", "Les sautez", "Les publiez en ligne", "Y répondez vous-même, puis vérifiez vos réponses"], answer: 3, why: "Répondre vous-même et vérifier prouve l'apprentissage." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      11,
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
        name: "Site d'apprentissage gratuit",
        objective: "O3",
        notYet: "Pas de site d'apprentissage, ou un site payant.",
        meets: "Nomme un site d'apprentissage gratuit et le cours ou les leçons utilisés.",
        exceeds: "Nomme aussi un cours gratuit ou du tutorat proposé par la bibliothèque."
      },
      {
        name: "Plan de deux semaines",
        objective: "O4",
        notYet: "Pas de plan, ou un plan qui ne correspond pas au temps réel de l'apprenant.",
        meets: "Deux semaines, environ 20 minutes par jour, un petit sujet par jour, avec des jours de repos.",
        exceeds: "Placé sur un calendrier ou sur le réfrigérateur, avec les jours cochés."
      },
      {
        name: "Questions d'entraînement",
        objective: "O2",
        notYet: "A regardé les réponses d'abord, ou n'a pas répondu aux questions.",
        meets: "Cinq questions répondues avant de vérifier, et chacune vérifiée.",
        exceeds: "A demandé à l'IA de montrer les étapes pour toute réponse qui semblait fausse."
      },
      {
        name: "Vérification des progrès",
        objective: "O6",
        notYet: "Aucun retour sur ce qui a été raté.",
        meets: "Liste les questions ratées et ce qu'il faut réviser.",
        exceeds: "Dit comment le plan va changer d'après les résultats."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui suivent leur plan d'étude au moins 10 jours sur 14 (questionnaire de suivi)",
      "Apprenants qui s'inscrivent à un cours gratuit, au GED, à un cours d'anglais ou à un programme universitaire dans les 90 jours",
      "Parents qui disent aider un enfant pour ses devoirs en utilisant l'IA pour expliquer, pas pour répondre"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque ou de centre communautaire",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Un site d'apprentissage gratuit comme Khan Academy ou LearnFree",
      "Un cahier ou un calendrier pour le plan d'étude",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Commencez par demander à chaque apprenant ce qu'il veut apprendre, et utilisez cette compétence dans chaque exercice.",
      "Montrez comment demander une explication plus simple ; beaucoup d'apprenants sont gênés de redemander.",
      "Avec les parents, insistez : l'IA explique et l'enfant fait le travail, et les règles de l'école passent en premier.",
      "Faites un point après une semaine pour voir qui a tenu son plan, et aidez chacun à le réduire ou à l'augmenter.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
