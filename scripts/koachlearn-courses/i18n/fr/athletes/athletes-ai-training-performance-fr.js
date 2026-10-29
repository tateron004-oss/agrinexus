"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-training-performance.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-training-performance-fr",
  lang: "fr",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "L'IA pour l'entraînement et la performance",
  skills: "Fixer un objectif d'entraînement mesurable, Noter ses données d'entraînement, Lire une tendance simple, Préparer avec l'IA une question sur sa semaine d'entraînement pour l'entraîneur, Repérer les conseils d'entraînement dangereux de l'IA",
  outcome: "fixer un objectif de performance mesurable, noter quatre semaines de données d'entraînement dans un tableau, utiliser un assistant IA pour résumer la tendance et apporter à votre entraîneur une question claire et sûre sur votre entraînement.",
  about: [
    "Ce cours s'adresse aux sportifs qui veulent s'entraîner plus intelligemment et aux entraîneurs qui veulent que leurs sportifs comprennent leurs propres chiffres. C'est un enseignement général, pas un programme d'entraînement : ce sont votre entraîneur et votre soigneur qui fixent votre entraînement.",
    "Vous fixerez un objectif mesurable, suivrez les bons chiffres, verrez ce qu'ils disent, et utiliserez un assistant IA pour organiser vos données et préparer de meilleures discussions avec votre entraîneur.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez un objectif mesurable, notez au moins quatre séances dans un tableau Google Sheets (date, ce que vous avez fait, effort de 1 à 10, résultat), demandez à un assistant IA de décrire la tendance avec des mots simples, et écrivez trois questions sur votre prochain cycle d'entraînement à poser à votre entraîneur.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs de lycée, d'université et de club qui veulent s'entraîner plus intelligemment, et des entraîneurs qui veulent que leurs sportifs comprennent leurs propres chiffres.",
    startingPoint: "Ils s'entraînent régulièrement avec un entraîneur et utilisent un téléphone tous les jours. Beaucoup ont des objectifs comme « aller plus vite », mais pas de cible mesurable, pas de carnet d'entraînement régulier, et peu d'habitude de lire un graphique ou de juger les conseils d'entraînement trouvés en ligne.",
    gap: "Sans objectif mesurable ni carnet simple, les sportifs ne voient pas si l'entraînement marche, et les plans de l'IA ou d'internet peuvent pousser des conseils dangereux. Des chiffres clairs et des questions sûres améliorent les discussions avec l'entraîneur et protègent la santé du sportif.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec Google Sheets gratuit et un assistant IA gratuit",
      "Environ 60 minutes de leçons, plus quatre semaines de notes en parallèle de l'entraînement normal",
      "Formation générale seulement : l'entraîneur et le soigneur fixent l'entraînement, les charges et le retour après blessure",
      "Les données et dossiers de santé restent privés et ne sont jamais collés dans un assistant IA"
    ],
    prerequisites: "Aucun. « Les outils d'IA pour les sportifs » aide si vous n'avez jamais utilisé Google Sheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un objectif d'entraînement vague", action: "le réécrire en un objectif mesurable avec un chiffre, une date et un test", standard: "avec les quatre éléments présents et l'objectif validé avec votre entraîneur" },
    { id: "O2", condition: "Avec Google Sheets", action: "créer et tenir un carnet d'entraînement avec Date, Séance, Effort et Résultat", standard: "avec une ligne remplie après chaque séance pendant au moins quatre séances" },
    { id: "O3", condition: "À partir d'un graphique de votre propre carnet d'entraînement", action: "décrire la tendance en une ou deux phrases et comparer l'effort au résultat", standard: "en donnant la bonne direction et en vérifiant vous-même les calculs de l'IA" },
    { id: "O4", condition: "À partir d'une liste de tâches d'entraînement", action: "identifier les tâches où l'IA peut aider et celles qui reviennent à votre entraîneur ou à votre soigneur", standard: "en réussissant au moins 4 sur 5" },
    { id: "O5", condition: "Face à des conseils d'entraînement de l'IA ou d'internet", action: "repérer les signaux d'alarme comme s'entraîner malgré la douleur, réduire l'eau ou prendre des compléments risqués", standard: "en repérant chaque signal d'alarme et en le soumettant à votre entraîneur ou à votre soigneur au lieu de le suivre" },
    { id: "O6", condition: "Avec votre objectif, votre carnet et un assistant IA", action: "écrire un point de trois phrases pour l'entraîneur et trois questions sur votre prochain cycle d'entraînement", standard: "avec vos propres mots, sans partager de dossier de santé, et en utilisant la réponse de l'entraîneur pour mettre votre plan à jour" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Objectifs et données",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fixer un objectif mesurable",
          minutes: 5,
          goal: "Transformer un objectif vague en objectif mesurable avec une date.",
          text: [
            "« Aller plus vite » est un souhait. « Courir le 40 mètres 0,1 seconde plus vite d'ici la fin de la présaison, chronométré de la même façon à chaque fois » est un objectif mesurable.",
            "Un bon objectif d'entraînement nomme une seule chose, un chiffre, une date et la façon de le mesurer. Il doit être validé avec votre entraîneur pour s'accorder au plan de l'équipe.",
            "Un assistant IA peut vous aider à réécrire un objectif vague. Essayez : « Transforme mon objectif \"devenir plus fort pour le foot\" en un objectif mesurable avec une date. Pose-moi des questions s'il te manque des informations. »"
          ],
          steps: ["Écrivez votre objectif avec vos mots.", "Ajoutez un chiffre à mesurer.", "Ajoutez une date.", "Dites comment et quand il sera testé.", "Validez-le avec votre entraîneur."],
          words: [["Mesurable", "quelque chose que l'on peut compter ou chronométrer, pour savoir si cela a changé."], ["Point de départ", "votre chiffre de départ avant de vous entraîner pour l'objectif."]],
          slides: [
            { title: "Souhait ou objectif", bullets: ["Souhait : « aller plus vite »", "Objectif : « 40 m 0,1 s plus vite d'ici la fin de la présaison »"] },
            { title: "Un objectif a", bullets: ["Une seule chose", "Un chiffre et une date", "Une façon de le tester"] },
            { title: "L'IA pour le préciser", bullets: ["« Transforme mon objectif en objectif mesurable »", "Puis validez-le avec votre entraîneur"] }
          ],
          tryIt: "Écrivez un objectif vague. Demandez à un assistant IA de le rendre mesurable avec une date. Modifiez-le pour qu'il vous corresponde, puis notez votre point de départ si vous le connaissez.",
          youCanNow: "écrire un objectif d'entraînement mesurable avec un chiffre, une date et un test.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui transforme « devenir plus fort » en objectif mesurable ?", options: ["Ajouter le mot « vraiment »", "Ajouter un chiffre, une date et la façon de le tester", "Le publier en ligne", "Le rendre plus long"], answer: 1, why: "Un objectif mesurable nomme une chose, un chiffre, une date et la façon de le mesurer." },
            { objective: "O1", q: "Vous avez écrit un objectif mesurable avec l'aide de l'IA. Que faites-vous ensuite ?", options: ["Commencer à vous entraîner seul pour l'atteindre", "Demander à l'IA de l'approuver", "Le garder secret", "Le valider avec votre entraîneur"], answer: 3, why: "Votre objectif doit être validé avec votre entraîneur pour qu'il s'intègre au plan de l'équipe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Noter les bonnes données d'entraînement",
          minutes: 5,
          goal: "Mettre en place un carnet d'entraînement simple que vous tiendrez vraiment.",
          text: [
            "Les données ne sont utiles que si on les recueille de la même façon à chaque fois. Un carnet simple vaut mieux qu'une application sophistiquée abandonnée au bout d'une semaine.",
            "Quatre colonnes suffisent pour commencer : Date, Séance (ce que vous avez fait), Effort (la difficulté ressentie, de 1 à 10) et Résultat (le chiffre de votre objectif). Certains sportifs ajoutent les heures de sommeil ou une courte note.",
            "Les objets connectés comme les montres et les ceintures cardio peuvent ajouter des données, mais ils ne sont pas parfaits. Considérez leurs chiffres comme des indices, pas comme des faits, et gardez vos données de santé privées."
          ],
          steps: ["Ouvrez Google Sheets.", "Créez les colonnes : Date, Séance, Effort (1-10), Résultat.", "Remplissez une ligne après chaque séance.", "Gardez-le au même endroit sur votre téléphone pour que cela prenne une minute."],
          words: [["Note d'effort", "une note de 1 à 10 sur la difficulté ressentie d'une séance ; les entraîneurs l'appellent souvent RPE (effort perçu)."], ["Objet connecté", "un appareil que l'on porte, comme une montre, qui mesure la fréquence cardiaque ou les pas."]],
          slides: [
            { title: "Le simple bat le sophistiqué", bullets: ["De la même façon, à chaque fois", "Une minute après chaque séance"] },
            { title: "Quatre colonnes", bullets: ["Date", "Séance", "Effort 1-10", "Résultat"] },
            { title: "Les objets connectés", bullets: ["Des indices utiles, pas des faits parfaits", "Gardez vos données de santé privées"] }
          ],
          tryIt: "Créez votre carnet d'entraînement dans Google Sheets avec les quatre colonnes. Remplissez vos deux ou trois dernières séances de mémoire ou d'après vos notes.",
          youCanNow: "tenir un carnet d'entraînement simple et régulier.",
          quickCheck: [
            { objective: "O2", q: "Que met-on dans la colonne Résultat de votre carnet ?", options: ["Le chiffre de votre objectif", "La difficulté ressentie", "Ce que vous avez mangé", "Le nom de votre entraîneur"], answer: 0, why: "La colonne Résultat contient le chiffre que vous suivez pour votre objectif." },
            { objective: "O2", q: "Vous oubliez sans cesse de remplir votre carnet. Qu'est-ce qui aide le plus ?", options: ["Passer à une application plus sophistiquée", "Le remplir une fois par mois de mémoire", "Le garder au même endroit sur votre téléphone et remplir une ligne juste après chaque séance", "Arrêter de noter"], answer: 2, why: "Un carnet simple, rempli de la même façon à chaque fois, est celui que vous tiendrez." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Lire la tendance de votre entraînement",
          minutes: 5,
          goal: "Lire un graphique de vos données et décrire ce qu'il montre en une ou deux phrases.",
          text: [
            "Après quelques semaines, faites un graphique de votre colonne Résultat par date. Regardez la direction : en hausse, en baisse ou stable. Un mauvais jour ne veut pas dire grand-chose ; regardez la ligne dans son ensemble.",
            "Comparez Effort et Résultat. Si l'effort continue de monter alors que les résultats stagnent ou baissent, vous êtes peut-être fatigué, et c'est à dire à votre entraîneur.",
            "Vous pouvez coller votre tableau (sans noms ni dossier de santé) dans un assistant IA et demander : « Décris avec des mots simples la tendance de ces données d'entraînement. Quelles questions devrais-je poser à mon entraîneur ? » Vérifiez vous-même ses calculs."
          ],
          steps: ["Sélectionnez Date et Résultat et insérez un graphique en courbe.", "Dites la direction : en hausse, en baisse ou stable.", "Comparez l'Effort au Résultat.", "Écrivez un résumé d'une phrase."],
          words: [["Tendance", "la direction générale de vos chiffres dans le temps."], ["Plateau", "quand les résultats arrêtent de progresser pendant un moment."]],
          slides: [
            { title: "Regardez la ligne", bullets: ["En hausse, en baisse ou stable ?", "Un mauvais jour n'est pas une tendance"] },
            { title: "Effort et résultat", bullets: ["Effort en hausse, résultat stable ou en baisse ?", "Peut-être de la fatigue : dites-le à l'entraîneur"] },
            { title: "L'IA peut la décrire", bullets: ["Collez le tableau, sans noms ni dossier de santé", "Vérifiez vous-même ses calculs"] }
          ],
          tryIt: "Faites un graphique de votre colonne Résultat. Écrivez une phrase qui décrit la tendance. Puis demandez à un assistant IA de la décrire et comparez sa phrase avec la vôtre.",
          youCanNow: "faire un graphique de vos données d'entraînement et décrire la tendance avec des mots simples.",
          quickCheck: [
            { objective: "O3", q: "Que regardez-vous d'abord sur votre graphique d'entraînement ?", options: ["Le pire jour", "Les couleurs", "La direction générale : vers le haut, vers le bas ou à plat", "Le titre du graphique"], answer: 2, why: "Un mauvais jour ne veut pas dire grand-chose ; la ligne générale montre la tendance." },
            { objective: "O3", q: "Vous collez votre tableau dans un assistant IA. Que retirez-vous d'abord ?", options: ["Les noms et les dossiers de santé", "Les dates", "La colonne Résultat", "Rien"], answer: 0, why: "Gardez les noms et les dossiers de santé hors des outils d'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Objectifs et données",
        questions: [
          { objective: "O1", q: "Lequel est un objectif mesurable ?", options: ["Progresser", "Être une machine", "Réussir 16 lancers francs sur 20 d'ici le 15 janvier, testé à l'entraînement", "Travailler dur"], answer: 2, why: "Il a un chiffre, une date et un test." },
          { objective: "O1", q: "Qu'est-ce qu'un point de départ ?", options: ["Votre chiffre de départ avant de vous entraîner pour l'objectif", "La ligne de fond du terrain", "Votre meilleur jour de tous les temps", "La moyenne de l'équipe"], answer: 0, why: "Le point de départ montre d'où vous partez." },
          { objective: "O2", q: "Quel carnet d'entraînement est le plus utile ?", options: ["Un carnet sophistiqué abandonné au bout d'une semaine", "Un carnet rempli une fois par saison", "Un carnet rempli au hasard", "Un carnet simple rempli à chaque séance"], answer: 3, why: "Des données régulières rendent les tendances significatives." },
          { objective: "O2", q: "Comment considérer les chiffres d'un objet connecté ?", options: ["Comme des faits parfaits", "Comme des indices utiles mais pas parfaits", "Comme un avis médical", "Comme quelque chose à publier"], answer: 1, why: "Les objets connectés aident mais peuvent se tromper." },
          { objective: "O3", q: "Vos notes d'effort montent sans cesse mais vos temps ralentissent. Que faire ?", options: ["S'entraîner deux fois plus", "Le dire à votre entraîneur ; vous êtes peut-être fatigué", "Arrêter de noter", "L'ignorer"], answer: 1, why: "Un effort qui monte avec des résultats qui baissent peut signaler de la fatigue, que votre entraîneur doit connaître." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA avec votre entraîneur",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ce que l'IA peut et ne peut pas faire pour l'entraînement",
          minutes: 4,
          goal: "Classer les tâches d'entraînement entre celles où l'IA peut aider et celles qui reviennent à l'entraîneur ou au soigneur.",
          text: [
            "Les assistants IA sont bons pour organiser : transformer des notes en tableau, expliquer un terme d'entraînement, résumer votre carnet ou écrire des questions pour votre entraîneur.",
            "Ils ne sont pas bons pour connaître votre corps. Ils ne voient pas votre technique, ne connaissent pas vos blessures passées ni votre nuit, et les plans généraux trouvés sur internet peuvent ne pas convenir à votre âge, à votre niveau ou à votre saison.",
            "Utilisez donc l'IA pour comprendre et vous préparer, et laissez votre entraîneur et votre soigneur décider de vos séances, de vos charges et de votre retour après une blessure."
          ],
          words: [["Charge d'entraînement", "la quantité et l'intensité de votre entraînement dans le temps."], ["Soigneur", "un professionnel de santé diplômé qui prévient et soigne les blessures des sportifs et les aide à récupérer (aux États-Unis, l'« athletic trainer »)."]],
          slides: [
            { title: "L'IA est bonne pour", bullets: ["Mettre des notes en tableau", "Expliquer les mots de l'entraînement", "Résumer votre carnet", "Écrire des questions pour l'entraîneur"] },
            { title: "L'IA ne peut pas", bullets: ["Voir votre technique", "Connaître vos blessures passées", "Savoir comment vous vous sentez aujourd'hui"] },
            { title: "Qui décide", bullets: ["Entraîneur : séances et charges", "Soigneur : blessures et retour au jeu"] }
          ],
          tryIt: "Demandez à un assistant IA d'expliquer avec des mots simples un mot d'entraînement que vous avez entendu (par exemple « périodisation » ou « semaine de décharge »). Écrivez une question à ce sujet pour votre entraîneur.",
          youCanNow: "dire pour quelles tâches d'entraînement l'IA peut aider et lesquelles reviennent à votre entraîneur ou à votre soigneur.",
          quickCheck: [
            { objective: "O4", q: "Laquelle de ces tâches un assistant IA fait-il bien pour l'entraînement ?", options: ["Voir votre technique à l'entraînement", "Connaître vos antécédents de blessures", "Décider de votre retour après une blessure", "Expliquer un terme d'entraînement"], answer: 3, why: "L'IA est bonne pour organiser et expliquer, pas pour connaître votre corps." },
            { objective: "O4", q: "Un assistant IA vous donne un plan de musculation plus lourd que celui de votre entraîneur. Que faites-vous ?", options: ["Suivre le plan de l'IA", "S'en servir pour préparer une question et laisser votre entraîneur décider", "Faire les deux plans", "Arrêter la musculation"], answer: 1, why: "Utilisez l'IA pour comprendre et préparer ; c'est votre entraîneur qui décide des séances et des charges." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Repérer les conseils d'entraînement dangereux de l'IA",
          minutes: 5,
          goal: "Reconnaître les signaux d'alarme dans les conseils d'entraînement de l'IA ou d'internet.",
          text: [
            "L'IA et les plans trouvés en ligne peuvent donner des conseils trop chargés, trop rapides ou inadaptés aux jeunes sportifs ou aux sportifs blessés. Vous devez savoir les repérer.",
            "Signaux d'alarme : s'entraîner malgré une douleur vive ; augmenter fortement l'entraînement d'un coup ; réduire la nourriture ou l'eau pour faire le poids ; des compléments qui promettent des résultats rapides ; « aucun jour de repos » ; et tout plan qui ignore ce qu'a écrit votre entraîneur.",
            "Les compléments alimentaires sont un risque particulier : aux États-Unis, ils ne sont pas contrôlés par la FDA (l'agence américaine des aliments et des médicaments) avant leur vente, et certains contiennent des substances interdites. Parlez-en à votre soigneur ou à un diététicien diplômé avant d'en prendre."
          ],
          steps: ["Lisez le conseil lentement.", "Comparez-le à la liste des signaux d'alarme.", "Si un signal d'alarme apparaît, ne le suivez pas.", "Montrez-le à votre entraîneur ou à votre soigneur."],
          words: [["Signal d'alarme", "un signe qui avertit que quelque chose est dangereux ou faux."], ["Complément alimentaire", "une gélule, une poudre ou une boisson vendue pour ajouter quelque chose à l'alimentation."]],
          slides: [
            { title: "Signaux d'alarme", bullets: ["S'entraîner malgré une douleur vive", "De fortes hausses d'un coup", "Réduire nourriture ou eau pour faire le poids", "« Aucun jour de repos »"] },
            { title: "Compléments alimentaires", bullets: ["Pas contrôlés par la FDA avant la vente", "Certains contiennent des substances interdites", "Demandez d'abord à votre soigneur ou à un diététicien"] },
            { title: "Quand vous en voyez un", bullets: ["Ne le suivez pas", "Montrez-le à votre entraîneur ou à votre soigneur"] }
          ],
          sources: [{ name: "USADA : Supplement Connect (risques des compléments pour les sportifs, en anglais)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Demandez à un assistant IA « un plan pour aller plus vite en deux semaines ». Lisez-le et entourez les signaux d'alarme. Écrivez ce que vous demanderiez à votre entraîneur à ce sujet.",
          youCanNow: "repérer les conseils d'entraînement dangereux et les soumettre à la bonne personne.",
          quickCheck: [
            { objective: "O5", q: "Lequel de ces conseils d'entraînement est un signal d'alarme ?", options: ["Un jour de repos chaque semaine", "Un plan qui correspond à celui de votre entraîneur", "De grosses hausses d'entraînement d'un seul coup", "S'échauffer avant l'entraînement"], answer: 2, why: "Trop, trop vite, c'est l'un des signaux d'alarme de la leçon." },
            { objective: "O5", q: "Un coéquipier partage un complément alimentaire qui promet des résultats rapides. Que faites-vous ?", options: ["En parler d'abord à votre soigneur ou à un diététicien diplômé", "En prendre une petite quantité", "L'acheter si les avis sont bons", "Demander à l'IA de l'approuver"], answer: 0, why: "Les compléments ne sont pas contrôlés par la FDA avant leur vente, et certains contiennent des substances interdites." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Préparer une discussion d'entraînement avec votre entraîneur",
          minutes: 5,
          goal: "Utiliser l'IA pour préparer un point court et clair et trois questions pour votre entraîneur.",
          text: [
            "Les entraîneurs sont occupés. Un point court et clair avec vos chiffres améliore la discussion : votre objectif, ce que montrent vos données et ce que vous voulez demander.",
            "Demandez à un assistant IA : « Voici mon objectif et mon carnet d'entraînement. Écris un point de trois phrases pour mon entraîneur et propose trois questions sur mon prochain cycle d'entraînement. » Puis modifiez-le pour qu'il vous ressemble.",
            "Présentez ce point à votre entraîneur en personne ou de la façon que préfère votre équipe. Écoutez, prenez des notes et mettez votre plan à jour avec ce que dit votre entraîneur, pas avec ce qu'a dit l'IA."
          ],
          steps: ["Collez votre objectif et votre carnet (sans dossier de santé).", "Demandez un point de trois phrases et trois questions.", "Réécrivez-le avec vos mots.", "Partagez-le avec votre entraîneur comme votre équipe le préfère.", "Mettez votre plan à jour avec la réponse de votre entraîneur."],
          words: [["Cycle d'entraînement", "une série de semaines avec un objectif d'entraînement principal."], ["Point", "un court message qui dit où vous en êtes."]],
          slides: [
            { title: "Un bon point", bullets: ["Mon objectif", "Ce que montrent mes données", "Mes questions"] },
            { title: "L'IA pour le brouillon", bullets: ["Un point de trois phrases", "Trois questions", "Réécrivez-le avec vos mots"] },
            { title: "Ensuite", bullets: ["Parlez avec votre entraîneur", "Prenez des notes", "Suivez le plan de votre entraîneur"] }
          ],
          tryIt: "Tâche finale : notez au moins quatre séances, demandez à un assistant IA de décrire votre tendance, et écrivez un point de trois phrases avec trois questions pour votre entraîneur.",
          youCanNow: "transformer vos données d'entraînement en un point clair et des questions pour votre entraîneur.",
          quickCheck: [
            { objective: "O6", q: "Quelles trois choses contient un bon point pour l'entraîneur ?", options: ["Votre objectif, ce que montrent vos données et ce que vous voulez demander", "Vos réseaux sociaux, votre sommeil et vos notes", "Les statistiques des autres joueurs", "Seulement votre meilleur jour"], answer: 0, why: "Un point court donne votre objectif, vos données et vos questions." },
            { objective: "O6", q: "La réponse de votre entraîneur diffère de la suggestion de l'IA. Que faites-vous ?", options: ["Suivre l'IA", "Demander à une autre IA", "Ignorer les deux", "Mettre votre plan à jour avec ce qu'a dit votre entraîneur"], answer: 3, why: "Mettez votre plan à jour avec la réponse de votre entraîneur, pas avec ce qu'a dit l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA avec votre entraîneur",
        questions: [
          { objective: "O4", q: "Quelle tâche d'entraînement l'IA fait-elle bien ?", options: ["Voir votre technique en vrai", "Vous autoriser à reprendre après une blessure", "Savoir comment vous avez dormi", "Résumer votre carnet d'entraînement"], answer: 3, why: "Organiser et résumer sont des points forts de l'IA." },
          { objective: "O4", q: "Qui décide de votre retour après une blessure ?", options: ["Votre soigneur ou un médecin", "Un assistant IA", "Un coéquipier", "Un influenceur fitness"], answer: 0, why: "Le retour au jeu est une décision de santé pour des professionnels qualifiés." },
          { objective: "O5", q: "Lequel est un signal d'alarme dans un conseil d'entraînement ?", options: ["Des jours de repos chaque semaine", "S'échauffer d'abord", "S'entraîner malgré une douleur vive", "Demander à son entraîneur"], answer: 2, why: "Une douleur vive est un signal pour s'arrêter et se faire examiner." },
          { objective: "O5", q: "Pourquoi les compléments alimentaires sont-ils risqués pour les sportifs ?", options: ["Ils sont toujours interdits", "Ils sont testés par votre entraîneur", "Ils ont mauvais goût", "Ils ne sont pas contrôlés par la FDA avant la vente, et certains contiennent des substances interdites"], answer: 3, why: "L'USADA (agence antidopage américaine) avertit que les compléments peuvent être contaminés ou mal étiquetés." },
          { objective: "O6", q: "Après avoir parlé à votre entraîneur, quel plan suivez-vous ?", options: ["Celui de l'IA", "Celui de votre entraîneur", "Celui d'une vidéo au hasard", "Celui de votre rival"], answer: 1, why: "L'entraîneur fixe l'entraînement ; l'IA vous aide à vous préparer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour l'entraînement et la performance",
    questions: [
      { objective: "O1", q: "« Aller plus vite » est :", options: ["Un objectif parfait", "Un carnet d'entraînement", "Un souhait, pas un objectif mesurable", "Un exercice"], answer: 2, why: "Il n'a ni chiffre, ni date, ni test." },
      { objective: "O1", q: "Un bon objectif d'entraînement comprend :", options: ["Une seule chose, un chiffre, une date et un test", "Seulement un ressenti", "Votre mot de passe", "Dix objectifs à la fois"], answer: 0, why: "Ces éléments le rendent mesurable." },
      { objective: "O1", q: "Avec qui valider votre objectif ?", options: ["Votre entraîneur", "Un inconnu en ligne", "Seulement une IA", "Personne"], answer: 0, why: "Votre objectif doit s'accorder au plan de l'équipe." },
      { objective: "O2", q: "Que doit contenir votre premier carnet d'entraînement ?", options: ["Cinquante colonnes", "Votre dossier médical", "Date, Séance, Effort et Résultat", "Seulement des photos"], answer: 2, why: "Quatre colonnes simples suffisent pour commencer." },
      { objective: "O2", q: "Une note d'effort de 1 à 10 mesure :", options: ["Votre taille", "La difficulté ressentie d'une séance", "Vos notes scolaires", "Vos abonnés"], answer: 1, why: "C'est une note rapide de l'effort perçu." },
      { objective: "O2", q: "Les chiffres d'une montre ou d'une ceinture cardio sont :", options: ["Toujours exacts", "Des diagnostics médicaux", "Sans intérêt", "Des indices utiles qui peuvent se tromper"], answer: 3, why: "Les objets connectés aident, mais considérez-les comme des indices." },
      { objective: "O3", q: "En lisant votre graphique, il faut regarder surtout :", options: ["Votre pire journée", "La couleur du graphique", "La direction générale de la ligne", "Les graphiques des autres sportifs"], answer: 2, why: "La tendance compte plus qu'une seule journée." },
      { objective: "O3", q: "Les résultats stagnent pendant des semaines. On appelle cela :", options: ["Un sprint", "Un point de départ", "Un objet connecté", "Un plateau"], answer: 3, why: "Un plateau est une période sans progrès." },
      { objective: "O3", q: "Avant de coller votre carnet dans une IA, retirez :", options: ["Les noms et le dossier de santé", "Les dates", "Les notes d'effort", "Les résultats"], answer: 0, why: "Gardez les détails privés et de santé hors des outils d'IA." },
      { objective: "O3", q: "L'IA dit que votre moyenne s'est améliorée de 2 secondes. Vous devez :", options: ["Le publier", "Vérifier vous-même le calcul", "Lui faire entièrement confiance", "Supprimer votre carnet"], answer: 1, why: "L'IA peut faire des erreurs de calcul." },
      { objective: "O4", q: "Que ne peut PAS faire l'IA pour vous ?", options: ["Expliquer un mot d'entraînement", "Mettre des notes en tableau", "Voir votre technique à l'entraînement", "Écrire des questions pour votre entraîneur"], answer: 2, why: "Elle ne peut pas vous voir vous entraîner." },
      { objective: "O4", q: "Que fait un soigneur ?", options: ["Il prévient et soigne les blessures et aide à récupérer", "Il vend des chaussures", "Il gère les réseaux sociaux", "Il écrit le calendrier de l'équipe"], answer: 0, why: "Les soigneurs sont des professionnels de santé diplômés." },
      { objective: "O5", q: "Un plan en ligne dit de réduire l'eau pour faire le poids. C'est :", options: ["Sans danger pour tous", "Obligatoire", "Une bonne idée avant les matchs", "Un signal d'alarme"], answer: 3, why: "Réduire la nourriture ou l'eau pour faire le poids peut être dangereux." },
      { objective: "O5", q: "Un plan « sans aucun jour de repos » est :", options: ["Idéal pour progresser", "Un signal d'alarme", "Exigé par la NCAA", "Normal pour les débutants"], answer: 1, why: "Le repos fait partie de l'entraînement ; ne jamais se reposer est un signe d'alerte." },
      { objective: "O5", q: "Avant de prendre un complément alimentaire, parlez à :", options: ["Une publicité", "Votre soigneur ou un diététicien diplômé", "Un coéquipier", "Personne"], answer: 1, why: "Ils peuvent expliquer les risques, y compris les substances interdites." },
      { objective: "O5", q: "Si un conseil de l'IA contredit le plan de votre entraîneur, vous :", options: ["Suivez l'IA", "Quittez l'équipe", "Suivez votre entraîneur et lui posez la question", "Faites les deux"], answer: 2, why: "Votre entraîneur vous connaît, ainsi que le plan de l'équipe." },
      { objective: "O6", q: "Un bon point pour l'entraîneur contient :", options: ["Votre objectif, ce que montrent vos données et vos questions", "Seulement des plaintes", "Une longue dissertation", "Votre mot de passe"], answer: 0, why: "Court et clair aide les entraîneurs occupés." },
      { objective: "O6", q: "Après que l'IA a rédigé votre point, vous devez :", options: ["L'envoyer sans le lire", "Le publier", "Le réécrire avec vos mots", "L'envoyer à un rival"], answer: 2, why: "Il doit vous ressembler et être vrai." },
      { objective: "O6", q: "Un cycle d'entraînement, c'est :", options: ["Un vélo", "Un tir contré", "Un jour de repos", "Une série de semaines avec un objectif principal"], answer: 3, why: "Les entraîneurs planifient l'entraînement par cycles." },
      { objective: "O4", q: "Le meilleur usage de l'IA pour l'entraînement est de :", options: ["Remplacer votre entraîneur", "Comprendre vos données et préparer de meilleures questions", "Diagnostiquer des blessures", "Choisir vos compléments"], answer: 1, why: "L'IA vous aide à comprendre et à vous préparer ; les personnes décident." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif mesurable",
        objective: "O1",
        notYet: "L'objectif est vague, ou il manque un chiffre, une date ou un test.",
        meets: "Une chose, un chiffre, une date et un test, validés avec l'entraîneur.",
        exceeds: "Il comprend un chiffre de départ et s'intègre à une partie précise du plan de saison de l'équipe."
      },
      {
        name: "Carnet d'entraînement",
        objective: "O2",
        notYet: "Moins de quatre séances, ou il manque des colonnes.",
        meets: "Date, Séance, Effort et Résultat remplis pour au moins quatre séances.",
        exceeds: "Chaque séance est notée le jour même, avec une courte note ou les heures de sommeil en plus."
      },
      {
        name: "Résumé de la tendance",
        objective: "O3",
        notYet: "Pas de graphique, ou la direction est fausse ou absente.",
        meets: "Un graphique et un résumé d'une ou deux phrases sur la direction, avec l'effort comparé au résultat et les calculs de l'IA vérifiés.",
        exceeds: "Repère un plateau, ou un effort qui monte avec des résultats à plat, et le note comme question pour l'entraîneur."
      },
      {
        name: "Usage sûr de l'IA",
        objective: "O5",
        notYet: "Suit ou répète un conseil avec un signal d'alarme, ou partage des dossiers de santé avec l'IA.",
        meets: "Aucun conseil à signal d'alarme n'est suivi, et tout ce qui est douteux est soumis à l'entraîneur ou au soigneur.",
        exceeds: "Nomme le signal d'alarme précis et explique pourquoi il est dangereux en le signalant."
      },
      {
        name: "Questions pour l'entraîneur",
        objective: "O6",
        notYet: "Moins de trois questions, ou le point ressemble à un texte d'IA copié.",
        meets: "Un point de trois phrases et trois questions claires, avec les propres mots du sportif.",
        exceeds: "Le sportif note les réponses de l'entraîneur et met son plan à jour à partir d'elles."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui tiennent encore leur carnet d'entraînement 30 jours plus tard (questionnaire de suivi)",
      "Les apprenants qui disent avoir atteint leur objectif mesurable, ou s'en être rapprochés, à la date prévue",
      "Les apprenants qui disent avoir apporté un point et des questions à leur entraîneur, ou refusé un conseil dangereux"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un compte Google gratuit pour Google Sheets",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un objectif validé avec votre entraîneur",
      "Environ 60 minutes de leçons, puis environ une minute après chaque séance pendant quatre semaines"
    ],
    facilitatorNotes: [
      "Coordonnez-vous avec l'entraîneur principal avant de commencer, pour que les objectifs et les carnets s'intègrent au plan de l'équipe ; ce cours ne fixe pas l'entraînement.",
      "Apprenez aux sportifs à retirer les noms et les dossiers de santé avant de coller des données dans un outil d'IA.",
      "Envoyez toute question sur la douleur, les blessures, le poids ou les compléments au soigneur ou à un diététicien diplômé ; n'y répondez pas en groupe.",
      "Faites d'abord les leçons 1 et 2, laissez les sportifs noter pendant quatre semaines, puis faites les leçons 3 à 6 et la tâche finale.",
      "Prévoyez de courts rendez-vous avec l'entraîneur pour que les sportifs puissent présenter leur point et leurs questions."
    ]
  }
};
