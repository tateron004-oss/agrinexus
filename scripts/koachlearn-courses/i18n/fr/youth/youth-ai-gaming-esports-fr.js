"use strict";

// Koach Learn course (French translation of youth/youth-ai-gaming-esports.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-gaming-esports-fr",
  lang: "fr",
  translationOf: "youth-ai-gaming-esports",
  category: "Youth",
  name: "L'IA pour le jeu vidéo et l'esport",
  skills: "Fixer un objectif d'entraînement, Construire un plan d'entraînement avec l'IA, Analyser un match, Communiquer en équipe, Jouer en sécurité et de façon loyale, Découvrir les métiers de l'esport",
  outcome: "utiliser un assistant d'IA gratuit comme coach d'entraînement : fixer un objectif clair pour un jeu auquel vous jouez, construire un plan d'entraînement d'une semaine, analyser un match avec des notes, et garder votre pratique du jeu sûre, loyale et équilibrée avec l'école et le sommeil.",
  about: [
    "Ce cours s'adresse aux jeunes qui jouent aux jeux vidéo, des joueurs occasionnels aux membres d'une équipe d'esport de l'école ou d'un club. Pas besoin de matériel cher. Il vous faut un jeu auquel vous jouez et un assistant d'IA gratuit.",
    "Vous verrez comment l'IA est déjà présente dans les jeux, puis comment utiliser un assistant d'IA comme un coach : pour fixer un objectif, planifier l'entraînement et repérer des tendances dans vos matchs. Vous apprendrez aussi à bien communiquer en équipe, à rester en sécurité et loyal en ligne, et quels métiers existent autour de l'esport.",
    "Vérifiez les règles de votre école sur l'IA, la classification d'âge de vos jeux et l'âge minimum de chaque application, et parlez-en à un parent ou tuteur avant de vous inscrire. Chaque leçon se termine par une activité \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Choisissez un jeu auquel vous jouez et une compétence à améliorer. Utilisez un assistant d'IA pour construire un plan d'entraînement d'une semaine qui laisse la place à l'école, aux devoirs et au sommeil. Jouez et analysez un match avec trois notes écrites, demandez à l'IA de trouver une tendance et de proposer un exercice, et écrivez un court message à votre équipe ou votre club sur ce que vous allez travailler ensuite.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes qui jouent aux jeux vidéo, des joueurs occasionnels aux membres d'équipes d'esport d'une école ou d'un club.",
    startingPoint: "Ils jouent régulièrement à au moins un jeu et discutent en ligne avec d'autres joueurs. Peu s'entraînent avec un plan, analysent leurs matchs ou savent repérer les arnaques aux comptes et les discussions dangereuses.",
    gap: "Beaucoup de jeunes jouent beaucoup sans progresser, et le jeu peut prendre la place de l'école et du sommeil. Les jeux en ligne amènent aussi des arnaques, des triches et des inconnus. Utiliser l'IA comme coach d'entraînement, avec des objectifs clairs et des habitudes de sécurité, aide les jeunes à progresser, à garder l'équilibre et à découvrir de vrais métiers autour de l'esport.",
    constraints: [
      "Classifications d'âge, âges minimum des applications et règles de l'école sur l'IA ; un parent ou tuteur est impliqué avant toute inscription",
      "Pas besoin de matériel cher ; n'importe quel jeu et un assistant d'IA gratuit",
      "L'école, les devoirs et le sommeil passent d'abord dans chaque plan",
      "Vie privée et sécurité : pas de vrais noms, d'écoles, d'identifiants ni d'informations sur d'autres joueurs dans les discussions ou les outils d'IA",
      "Des leçons courtes avec des mots simples"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En pensant à un jeu auquel vous jouez", action: "repérer des façons dont l'IA est utilisée dans les jeux, et ce qu'un assistant d'IA peut et ne peut pas faire pour vous aider à vous entraîner", standard: "en réussissant au moins 3 questions sur 4" },
    { id: "O2", condition: "À partir d'une compétence à améliorer et de votre vrai emploi du temps", action: "construire avec l'IA un plan d'entraînement d'une semaine avec un petit objectif mesurable et de courts exercices", standard: "en l'organisant autour de l'école, des devoirs et du sommeil" },
    { id: "O3", condition: "Après avoir joué ou regardé un match", action: "écrire trois notes sur le match et demander à l'IA de trouver une tendance et de proposer un exercice", standard: "sans pseudos d'autres joueurs ni messages privés" },
    { id: "O4", condition: "Pour votre équipe ou votre club", action: "créer une liste d'annonces courtes et un message d'équipe sympathique avec votre propre voix", standard: "avec des annonces courtes et calmes et un message de moins de 80 mots" },
    { id: "O5", condition: "Face à des triches, des arnaques ou des discussions dangereuses", action: "refuser les triches et les arnaques, garder les informations privées hors des discussions, et bloquer, signaler et prévenir un adulte de confiance", standard: "sans partager aucun identifiant, aucun code ni aucune information personnelle" },
    { id: "O6", condition: "Avec l'IA et une source fiable", action: "lister des métiers de l'esport autres que joueur professionnel et en vérifier un auprès d'un conseiller ou dans une vraie offre d'emploi", standard: "en nommant les compétences que demande le métier" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : S'entraîner plus intelligemment avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Où l'IA apparaît dans les jeux, et comment elle peut vous coacher",
          minutes: 4,
          goal: "Citer des façons dont l'IA est utilisée dans les jeux et des façons dont un assistant d'IA peut vous aider à vous entraîner.",
          text: [
            "Les jeux utilisent l'IA depuis longtemps. Les personnages contrôlés par l'ordinateur contre qui vous jouez, le système qui vous associe à des joueurs de votre niveau et les outils qui attrapent les tricheurs peuvent tous utiliser l'IA.",
            "Un assistant d'IA comme ChatGPT, Microsoft Copilot ou Google Gemini, c'est différent. Il ne peut pas voir votre écran ni jouer à votre place, mais il peut vous aider à réfléchir : fixer des objectifs, planifier l'entraînement, expliquer des idées de stratégie et trouver des tendances dans les notes que vous lui donnez.",
            "Il ne connaît pas chaque patch ou mise à jour des jeux, et il peut se tromper. Vérifiez ses conseils de stratégie avec les notes officielles du jeu, votre capitaine ou votre coach, et vos propres résultats."
          ],
          words: [["IA", "intelligence artificielle : des programmes informatiques qui font des tâches qui demandent d'habitude une personne."], ["Matchmaking", "le système qui choisit avec ou contre qui vous jouez."], ["Patch", "une mise à jour qui change un jeu."]],
          slides: [
            { title: "L'IA dans les jeux", bullets: ["Personnages contrôlés par l'ordinateur", "Matchmaking selon le niveau", "Outils qui attrapent les tricheurs"] },
            { title: "Un assistant d'IA comme coach", bullets: ["Aide à fixer des objectifs et planifier", "Explique des idées de stratégie", "Trouve des tendances dans vos notes"] },
            { title: "Ses limites", bullets: ["Il ne voit pas votre écran et ne joue pas pour vous", "Il ne connaît pas toujours le dernier patch", "Vérifiez ses conseils avec vos résultats"] }
          ],
          tryIt: "Notez le jeu auquel vous jouez le plus et trois choses que vous aimeriez y améliorer. Entourez celle qui compte le plus pour vous en ce moment.",
          youCanNow: "citer des façons dont l'IA est utilisée dans les jeux et expliquer ce qu'un assistant d'IA peut faire ou non comme coach d'entraînement.",
          quickCheck: [
            { objective: "O1", q: "Lequel de ces éléments peut utiliser l'IA dans un jeu ?", options: ["L'illustration de la boîte du jeu", "La batterie de votre manette", "La classification d'âge du jeu", "Les outils qui attrapent les tricheurs"], answer: 3, why: "Les personnages contrôlés par l'ordinateur, le matchmaking et les outils anti-triche peuvent tous utiliser l'IA." },
            { objective: "O1", q: "Après une nouvelle mise à jour, l'IA vous donne une stratégie qui semble fausse. Que faites-vous ?", options: ["Vous l'utilisez dans votre prochain match classé sans vérifier", "Vous la comparez aux notes officielles du jeu ou demandez à votre coach", "Vous arrêtez de jouer au jeu", "Vous demandez son identifiant à un inconnu"], answer: 1, why: "L'IA ne connaît peut-être pas le dernier patch, alors comparez ses conseils aux notes officielles et à vos résultats." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fixer un objectif et construire un plan d'entraînement",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour transformer un objectif en plan d'entraînement hebdomadaire adapté à votre vie.",
          text: [
            "On progresse en travaillant une chose exprès, pas seulement en jouant plus. Un bon objectif est petit et mesurable : \"Toucher plus de tirs en mode entraînement\" ou \"Annoncer la position des ennemis à chaque manche\", pas \"devenir bon\".",
            "Donnez à l'IA votre jeu, votre objectif, votre niveau actuel et votre vrai emploi du temps. Par exemple : \"Je joue à Rocket League. Je veux mieux réussir les frappes aériennes. Je peux m'entraîner 30 minutes 4 soirs de semaine après les devoirs. Fais un plan simple d'une semaine avec de courts exercices et un moyen de suivre mes progrès.\"",
            "Placez d'abord l'école, les devoirs, le sommeil et le temps en famille. À tous les niveaux, les joueurs d'esport font des pauses, s'étirent et reposent leurs yeux. Un plan que vous pouvez vraiment tenir vaut mieux qu'un énorme plan que vous abandonnez."
          ],
          steps: ["Choisissez un objectif petit et mesurable.", "Donnez à l'IA votre jeu, votre objectif, votre niveau et votre vrai temps libre.", "Demandez un plan d'une semaine avec de courts exercices et un moyen de suivre vos progrès.", "Vérifiez qu'il laisse du temps pour l'école, les devoirs et le sommeil.", "Demandez un changement si c'est trop."],
          words: [["Objectif mesurable", "un objectif que vous pouvez vérifier avec un nombre ou un oui ou non."], ["Exercice", "un court entraînement qui travaille une seule compétence."]],
          slides: [
            { title: "Entraînez-vous exprès", bullets: ["Une compétence à la fois", "Petit et mesurable", "Pas juste \"devenir bon\""] },
            { title: "Ce qu'il faut dire à l'IA", bullets: ["Votre jeu et votre objectif", "Votre niveau", "Votre vrai temps libre"] },
            { title: "Un plan que vous pouvez tenir", bullets: ["L'école, les devoirs et le sommeil d'abord", "Exercices courts, pauses courtes", "Suivez vos progrès chaque jour"] }
          ],
          tryIt: "Demandez à un assistant d'IA un plan d'entraînement d'une semaine pour la compétence entourée à la leçon 1, avec votre vrai emploi du temps. Demandez-lui de raccourcir le plan s'il prend plus de 30 à 45 minutes par jour.",
          youCanNow: "transformer un objectif de jeu en plan d'entraînement hebdomadaire réaliste avec un assistant d'IA.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui vous aide le plus à progresser ?", options: ["Travailler une compétence exprès", "Jouer plus d'heures sans objectif", "Acheter du nouveau matériel", "Changer de jeu chaque jour"], answer: 0, why: "On progresse en travaillant une chose exprès." },
            { objective: "O2", q: "Vous voulez « devenir bon ». Comment en faire un meilleur objectif ?", options: ["Le garder tel quel : « devenir bon »", "En faire « jouer tout le week-end »", "Le rendre petit et mesurable, comme réussir plus de tirs en mode entraînement", "En faire « gagner chaque match »"], answer: 2, why: "Un petit objectif mesurable vous permet de voir de vrais progrès." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Analyser un match avec l'IA",
          minutes: 5,
          goal: "Écrire des notes sur un match et utiliser l'IA pour trouver une tendance et proposer un exercice.",
          text: [
            "Les meilleurs joueurs analysent leurs matchs. Après un match, ou en regardant un replay si votre jeu en a un, écrivez trois notes courtes : une chose qui a bien marché, une erreur, et quand elle est arrivée.",
            "Collez les notes dans un assistant d'IA et demandez : \"Voici mes notes de trois matchs. Quelles tendances vois-tu, et quel exercice m'aiderait ?\" L'IA est douée pour repérer des répétitions que vous pourriez manquer.",
            "Écrivez des notes sur le jeu, pas sur les autres. Ne collez pas les pseudos d'autres joueurs, leurs messages privés ou quoi que ce soit de personnel. Et soyez indulgent avec vous-même : le but est d'apprendre, pas de vous sentir mal."
          ],
          steps: ["Jouez ou regardez le replay d'un match.", "Écrivez trois notes : une chose réussie, une erreur, et quand elle est arrivée.", "Rassemblez les notes de deux ou trois matchs.", "Demandez à l'IA les tendances et un exercice.", "Ajoutez l'exercice à votre plan d'entraînement."],
          words: [["Replay", "un enregistrement d'un match que vous pouvez revoir."], ["Tendance", "quelque chose qui arrive encore et encore."]],
          slides: [
            { title: "Trois notes par match", bullets: ["Une chose qui a bien marché", "Une erreur", "Quand elle est arrivée"] },
            { title: "Demandez les tendances à l'IA", bullets: ["Collez les notes de 2-3 matchs", "\"Quelles tendances vois-tu ?\"", "\"Quel exercice m'aiderait ?\""] },
            { title: "Parlez du jeu", bullets: ["Pas de pseudos ni de messages d'autres joueurs", "Apprenez, ne vous rabaissez pas"] }
          ],
          tryIt: "Jouez un match, écrivez trois notes et demandez à un assistant d'IA ce qu'il remarque et quel exercice il propose. Ajoutez cet exercice à votre plan.",
          youCanNow: "analyser un match avec des notes et utiliser l'IA pour trouver une tendance et choisir un exercice.",
          quickCheck: [
            { objective: "O3", q: "À quoi sert l'analyse d'un match ?", options: ["À accuser ses coéquipiers", "À se sentir mal d'avoir perdu", "À publier les noms d'autres joueurs", "À apprendre de ce qui a bien marché et de ce qui a mal tourné"], answer: 3, why: "Analyser vous aide à apprendre ; le but n'est pas de vous sentir mal." },
            { objective: "O3", q: "Vos notes contiennent le pseudo et la discussion d'un coéquipier. Que faites-vous avant de les coller dans l'IA ?", options: ["Vous enlevez le pseudo et la discussion, et gardez les notes sur le jeu", "Vous collez tout", "Vous ajoutez aussi son vrai nom", "Vous n'écrivez pas de notes"], answer: 0, why: "Gardez des notes sur le jeu, pas sur les autres personnes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'entraîner plus intelligemment avec l'IA",
        questions: [
          { objective: "O1", q: "Lequel est un exemple d'IA dans un jeu ?", options: ["Le câble d'alimentation", "Les personnages contrôlés par l'ordinateur contre qui vous jouez", "La boîte du jeu", "Votre casque"], answer: 1, why: "Les personnages contrôlés par l'ordinateur utilisent souvent l'IA." },
          { objective: "O2", q: "Quel est le meilleur objectif d'entraînement ?", options: ["\"Devenir bon\"", "\"Jouer toute la nuit\"", "\"Annoncer la position des ennemis à chaque manche cette semaine\"", "\"Tout gagner\""], answer: 2, why: "Il est petit et mesurable." },
          { objective: "O2", q: "Que devez-vous dire à l'IA pour obtenir un plan utile ?", options: ["Votre jeu, votre objectif, votre niveau et votre vrai temps libre", "Votre mot de passe", "Seulement le mot \"plan\"", "Votre adresse"], answer: 0, why: "Ces détails lui permettent de faire un plan qui vous convient." },
          { objective: "O2", q: "Le plan de l'IA prend 3 heures chaque soir d'école. Que faites-vous ?", options: ["Sauter les devoirs", "Vous coucher tard", "Demander à l'IA de le raccourcir pour laisser la place à l'école et au sommeil", "Le suivre quand même"], answer: 2, why: "Un plan tenable met l'école et le sommeil en premier." },
          { objective: "O3", q: "Que devez-vous enlever des notes de match que vous donnez à l'IA ?", options: ["Quand une erreur est arrivée", "Ce qui a bien marché", "Les pseudos et messages privés des autres joueurs", "Le nom du jeu"], answer: 2, why: "Écrivez sur le jeu, pas sur les détails personnels des autres." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Équipe, sécurité et avenir dans l'esport",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bien communiquer avec votre équipe",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire de courtes annonces d'équipe et un message clair pour le club ou l'équipe.",
          text: [
            "Les bonnes équipes parlent clairement et gentiment. Les annonces (callouts) sont des mots courts sur lesquels l'équipe est d'accord, comme \"deux à gauche\" ou \"je passe au milieu\". Des annonces courtes et calmes valent mieux que des longues ou des énervées.",
            "Un assistant d'IA peut vous aider à faire une liste d'annonces pour votre jeu, ou à écrire un message pour le club de votre école : horaires d'entraînement, ce que vous allez travailler et un rappel d'être respectueux. Demandez : \"Écris un message court et sympathique au club d'esport de mon école pour l'entraînement de jeudi. Moins de 80 mots.\"",
            "Si un coéquipier fait une erreur, concentrez-vous sur l'action suivante, pas sur les reproches. Les équipes qui restent positives jouent mieux et s'amusent plus."
          ],
          steps: ["Listez les moments les plus fréquents du jeu qui demandent une annonce.", "Demandez à l'IA des mots courts et clairs pour chacun.", "Mettez-vous d'accord sur la liste avec votre équipe.", "Utilisez l'IA pour écrire un court message sympathique à l'équipe ou au club.", "Relisez-le, faites qu'il vous ressemble, puis partagez-le."],
          words: [["Annonce (callout)", "un mot ou une courte phrase qui dit aux coéquipiers ce qui se passe."], ["Esport", "le jeu vidéo organisé et en compétition, souvent avec des équipes et des ligues."]],
          slides: [
            { title: "Des annonces claires", bullets: ["Des mots courts choisis par l'équipe", "Le calme vaut mieux que le bruit", "Exemple : \"deux à gauche\""] },
            { title: "L'IA pour les messages d'équipe", bullets: ["Heure et lieu de l'entraînement", "Ce que vous allez travailler", "Un rappel d'être respectueux"] },
            { title: "Restez positif", bullets: ["Pensez à l'action suivante", "Pas de reproches", "Faites que ça vous ressemble"] }
          ],
          tryIt: "Demandez à un assistant d'IA de vous aider à faire une liste de cinq annonces pour votre jeu. Puis faites-lui écrire un court message à votre équipe ou club sur le prochain entraînement, et réécrivez-le avec vos mots.",
          youCanNow: "créer des annonces d'équipe claires et un message d'équipe sympathique avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une annonce (callout) ?", options: ["Un long discours après le match", "Un message énervé", "Une phrase courte qui dit aux coéquipiers ce qui se passe", "Un code de triche"], answer: 2, why: "Les annonces sont des mots courts sur lesquels l'équipe est d'accord, comme « deux à gauche »." },
            { objective: "O4", q: "L'IA a rédigé le message pour votre club, mais il sonne raide. Que faites-vous ?", options: ["Vous l'envoyez quand même", "Vous le réécrivez pour qu'il vous ressemble avant de le partager", "Vous le rendez beaucoup plus long", "Vous ajoutez les numéros de téléphone des coéquipiers"], answer: 1, why: "Relisez et modifiez les brouillons de l'IA pour qu'ils vous ressemblent." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Jouer en sécurité et de façon loyale",
          minutes: 5,
          goal: "Repérer les triches, les arnaques et les discussions dangereuses, et savoir quoi faire.",
          text: [
            "Les triches comme les aimbots ou les fichiers piratés enfreignent les règles d'un jeu et peuvent faire bannir votre compte. Les sites qui promettent de la monnaie de jeu gratuite, des skins ou des \"triches IA\" volent souvent des comptes ou installent des logiciels dangereux. Ne les téléchargez jamais et ne donnez votre identifiant à personne.",
            "Faites attention dans les discussions. Ne donnez pas votre vrai nom, votre école, votre adresse, votre numéro de téléphone ou des photos à des personnes que vous connaissez seulement en ligne. Si quelqu'un vous met la pression, vous demande des secrets ou vous met mal à l'aise, bloquez-le, signalez-le dans le jeu et prévenez un parent, un tuteur ou un adulte de confiance.",
            "Les jeux ont une classification d'âge. Aux États-Unis, c'est l'ESRB qui classe les jeux, par exemple T (Teen) pour environ 13 ans et plus et M (Mature) pour 17 ans et plus. Ailleurs, d'autres systèmes existent, comme PEGI en Europe. Parlez avec votre famille des jeux et du temps d'écran qui vous conviennent."
          ],
          steps: ["N'utilisez jamais de triches ni d'outils de \"monnaie gratuite\".", "Ne donnez jamais à personne votre identifiant ni le code reçu sur votre téléphone.", "Gardez votre vrai nom, votre école et votre adresse hors des discussions.", "Bloquez, signalez et prévenez un adulte de confiance quand quelque chose ne va pas.", "Vérifiez la classification d'âge d'un jeu avec votre famille."],
          words: [["Aimbot", "une triche qui vise à votre place ; elle enfreint les règles du jeu."], ["Bannissement", "quand un jeu bloque votre compte parce que vous avez enfreint les règles."], ["Classification d'âge", "une étiquette qui dit à quels âges un jeu est destiné."]],
          slides: [
            { title: "Jouez loyal", bullets: ["Les triches peuvent faire bannir votre compte", "Les sites de \"monnaie gratuite\" volent les comptes", "Ne donnez jamais votre identifiant ni votre code"] },
            { title: "Sécurité dans les discussions", bullets: ["Pas de vrai nom, d'école ni d'adresse", "Pas de photos à des inconnus", "Bloquez, signalez, prévenez un adulte de confiance"] },
            { title: "Classification d'âge", bullets: ["ESRB T : en général 13 ans et plus", "ESRB M : en général 17 ans et plus", "Parlez des jeux et du temps d'écran en famille"] }
          ],
          sources: [{ name: "ESRB : guide des classifications", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Ouvrez les paramètres d'un jeu ou d'une plateforme que vous utilisez et trouvez où bloquer et signaler un joueur. Puis cherchez la classification d'âge de votre jeu préféré sur le site de l'ESRB (ou du système de votre pays).",
          youCanNow: "repérer les triches, les arnaques aux comptes et les discussions dangereuses, et savoir comment bloquer, signaler et demander de l'aide.",
          quickCheck: [
            { objective: "O5", q: "Que se passe-t-il en général sur les sites qui promettent de la monnaie de jeu ou des skins gratuits ?", options: ["Vous recevez des objets gratuits en toute sécurité", "Votre jeu tourne plus vite", "Rien du tout", "Ils volent souvent des comptes ou installent des logiciels dangereux"], answer: 3, why: "Les sites de monnaie gratuite et de triche volent souvent des comptes ou installent des logiciels dangereux." },
            { objective: "O5", q: "Un joueur en ligne vous demande sans cesse votre photo et dit de garder le secret. Que faites-vous ?", options: ["Vous envoyez une photo", "Vous le bloquez, le signalez et prévenez un parent, un tuteur ou un adulte de confiance", "Vous gardez le secret", "Vous lui donnez plutôt le nom de votre école"], answer: 1, why: "La pression et les secrets sont des signaux d'alerte ; bloquez, signalez et prévenez un adulte de confiance." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les métiers de l'esport et tout rassembler",
          minutes: 6,
          goal: "Découvrir les métiers autour de l'esport et terminer votre plan d'entraînement et votre analyse de match.",
          text: [
            "Très peu de gens deviennent joueurs professionnels, mais l'esport a besoin de beaucoup d'autres personnes : coachs, managers d'équipe, commentateurs (shoutcasters) qui commentent les matchs, monteurs vidéo, graphistes, organisateurs d'événements, et ceux qui conçoivent et testent les jeux.",
            "Demandez à un assistant d'IA : \"Quels métiers existent dans l'esport à part joueur pro ? Quelles matières et quels clubs aident pour chacun ?\" Puis vérifiez les réponses avec un conseiller d'orientation ou une vraie offre d'emploi, car l'IA peut ne pas être à jour.",
            "Beaucoup d'écoles ont un club ou une équipe d'esport. Si la vôtre n'en a pas, un professeur peut vous aider à en créer un. Maintenant, rassemblez tout : objectif, plan, analyse de match et message d'équipe."
          ],
          steps: ["Demandez à l'IA la liste des métiers de l'esport et les compétences de chacun.", "Choisissez un métier qui vous intéresse.", "Vérifiez-le avec un conseiller ou une vraie offre d'emploi.", "Terminez votre objectif, votre plan, votre analyse de match et votre message d'équipe."],
          words: [["Commentateur (shoutcaster)", "une personne qui commente en direct des matchs d'esport."], ["Organisateur d'événements", "une personne qui prépare et dirige des tournois."]],
          slides: [
            { title: "Bien plus que des joueurs pro", bullets: ["Coachs et managers d'équipe", "Commentateurs et monteurs vidéo", "Concepteurs, testeurs, organisateurs"] },
            { title: "Explorez avec l'IA, puis vérifiez", bullets: ["Demandez les compétences de chaque métier", "Vérifiez avec un conseiller ou une offre"] },
            { title: "Votre tâche finale", bullets: ["Un objectif et un plan d'une semaine", "Un match analysé avec trois notes", "Un exercice et un message d'équipe"] }
          ],
          tryIt: "Tâche finale : construisez avec l'IA un plan d'entraînement d'une semaine qui laisse la place à l'école et au sommeil, analysez un match avec trois notes, demandez à l'IA une tendance et un exercice, et écrivez un court message à votre équipe ou club sur ce que vous allez travailler ensuite.",
          youCanNow: "utiliser l'IA comme coach d'entraînement, jouer en sécurité et de façon loyale, et citer des métiers de l'esport autres que joueur pro.",
          quickCheck: [
            { objective: "O6", q: "Lequel de ces choix est un métier de l'esport, en dehors de joueur professionnel ?", options: ["Manager d'équipe", "Vendeur d'aimbots", "Acheteur de comptes", "Distributeur de skins gratuits"], answer: 0, why: "L'esport a besoin de coachs, de managers, de commentateurs, de monteurs, de designers et d'organisateurs d'événements." },
            { objective: "O6", q: "L'IA liste des métiers de l'esport et les compétences qu'ils demandent. Que faites-vous ensuite ?", options: ["Vous croyez chaque détail", "Vous choisissez un métier au hasard", "Vous ignorez la liste", "Vous vérifiez un métier auprès d'un conseiller d'orientation ou dans une vraie offre d'emploi"], answer: 3, why: "L'IA peut ne pas être à jour, alors vérifiez auprès d'un conseiller ou dans une vraie offre." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Équipe, sécurité et avenir dans l'esport",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui fait une bonne annonce ?", options: ["Longue et détaillée", "Courte, calme et choisie par l'équipe", "Forte et énervée", "Différente à chaque fois"], answer: 1, why: "Des annonces courtes et convenues sont rapides et claires." },
          { objective: "O5", q: "Un site propose de la monnaie de jeu gratuite si vous entrez votre identifiant. Que faites-vous ?", options: ["L'entrer vite", "Partager le lien avec des amis", "Leur donner le code de votre téléphone", "Ne pas l'entrer ; c'est sûrement une arnaque"], answer: 3, why: "Les sites de monnaie gratuite volent souvent les comptes." },
          { objective: "O5", q: "Quelqu'un que vous connaissez seulement en ligne demande dans quelle école vous êtes. Que faites-vous ?", options: ["Lui dire", "Envoyer une photo de votre uniforme", "Ne pas le dire ; bloquer et prévenir un adulte de confiance s'il insiste", "Donner votre adresse à la place"], answer: 2, why: "Gardez vos détails personnels privés en ligne." },
          { objective: "O5", q: "Une classification ESRB M veut dire qu'un jeu est en général pour :", options: ["17 ans et plus", "6 ans et plus", "10 ans et plus", "Tout le monde"], answer: 0, why: "M (Mature) est en général pour 17 ans et plus." },
          { objective: "O6", q: "Lequel est un métier de l'esport autre que joueur pro ?", options: ["Commentateur (shoutcaster)", "Fabricant d'aimbots", "Vendeur de comptes", "Testeur de triches"], answer: 0, why: "Les commentateurs commentent les matchs ; les autres enfreignent les règles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour le jeu vidéo et l'esport",
    questions: [
      { objective: "O1", q: "Le matchmaking dans un jeu, c'est :", options: ["Une façon d'acheter des skins", "Le système qui choisit avec ou contre qui vous jouez", "Une triche", "Un type de manette"], answer: 1, why: "Le matchmaking associe les joueurs, souvent selon leur niveau." },
      { objective: "O1", q: "Que ne peut PAS faire un assistant d'IA pour votre jeu ?", options: ["Aider à planifier l'entraînement", "Expliquer des idées de stratégie", "Voir votre écran et jouer à votre place", "Trouver des tendances dans vos notes"], answer: 2, why: "Un assistant de discussion vous aide à réfléchir ; il ne joue pas pour vous." },
      { objective: "O1", q: "Pourquoi vérifier les conseils de stratégie de l'IA avec les notes officielles du jeu ?", options: ["L'IA ne connaît peut-être pas le dernier patch", "L'IA a toujours raison", "Les notes officielles sont illégales", "C'est une règle de l'école"], answer: 0, why: "Les jeux changent avec les patchs et l'IA peut ne pas être à jour." },
      { objective: "O2", q: "Un objectif mesurable est un objectif que vous pouvez :", options: ["Ne jamais terminer", "Seulement ressentir", "Vérifier avec un nombre ou un oui ou non", "Oublier"], answer: 2, why: "Mesurable veut dire qu'on peut le vérifier." },
      { objective: "O2", q: "Qu'est-ce qui passe en premier dans votre plan d'entraînement ?", options: ["Les sessions tard le soir", "L'école, les devoirs et le sommeil", "Acheter du nouveau matériel", "Jouer à d'autres jeux"], answer: 1, why: "Un bon plan s'organise autour de l'école et du repos." },
      { objective: "O2", q: "Un exercice, c'est :", options: ["Un court entraînement qui travaille une seule compétence", "Un code de triche", "Un nom d'équipe", "Une classification de jeu"], answer: 0, why: "Les exercices travaillent une compétence à la fois." },
      { objective: "O2", q: "Votre plan vous semble trop lourd. Que faites-vous ?", options: ["Arrêter de jouer", "Demander à l'IA de le raccourcir", "Sauter des heures de sommeil", "L'ignorer"], answer: 1, why: "D'autres demandes permettent d'ajuster le plan." },
      { objective: "O3", q: "Quelles trois notes écrire après un match ?", options: ["Score, météo, goûter", "Les noms et messages des autres joueurs", "Une chose réussie, une erreur, et quand elle est arrivée", "Rien"], answer: 2, why: "Ces notes vous aident à apprendre du match." },
      { objective: "O3", q: "Pourquoi donner à l'IA les notes de plusieurs matchs ?", options: ["Pour qu'elle repère les tendances qui se répètent", "Pour la ralentir", "Pour qu'elle se connecte à votre place", "Elle a besoin de votre mot de passe"], answer: 0, why: "Les tendances apparaissent sur plusieurs matchs." },
      { objective: "O3", q: "Que faire de l'exercice proposé par l'IA ?", options: ["L'ignorer", "Le publier", "Effacer vos notes", "L'ajouter à votre plan d'entraînement"], answer: 3, why: "Un exercice n'aide que si vous le pratiquez." },
      { objective: "O4", q: "Une annonce (callout) est :", options: ["Une courte phrase qui dit aux coéquipiers ce qui se passe", "Une triche", "Un bannissement", "Une classification"], answer: 0, why: "Les annonces aident l'équipe à communiquer vite." },
      { objective: "O4", q: "Un coéquipier fait une erreur. La meilleure réaction est :", options: ["Le critiquer dans le chat", "Quitter le match", "Penser à l'action suivante", "Le signaler"], answer: 2, why: "Les équipes positives jouent mieux." },
      { objective: "O4", q: "Avant de partager un message de club écrit par l'IA, vous devez :", options: ["L'envoyer sans le lire", "Le relire et faire qu'il vous ressemble", "Ajouter votre mot de passe", "Le rallonger"], answer: 1, why: "Vous êtes responsable de ce que vous envoyez." },
      { objective: "O5", q: "Utiliser un aimbot peut :", options: ["Faire bannir votre compte", "Vous aider à apprendre plus vite", "Augmenter votre classification d'âge", "Faire de vous un coach"], answer: 0, why: "Les triches enfreignent les règles et peuvent mener à un bannissement." },
      { objective: "O5", q: "Quelqu'un vous demande le code qui vient d'arriver sur votre téléphone. Vous :", options: ["Le lui lisez", "Ne le donnez jamais", "Le publiez dans le chat", "L'envoyez à votre équipe"], answer: 1, why: "Ce code protège votre compte." },
      { objective: "O5", q: "Un joueur en ligne vous met mal à l'aise. Que faites-vous ?", options: ["Continuer à discuter", "Lui donner votre numéro", "Le bloquer, le signaler et prévenir un adulte de confiance", "Envoyer une photo"], answer: 2, why: "Bloquer, signaler et prévenir un adulte vous protège." },
      { objective: "O5", q: "La classification ESRB T (Teen) est en général pour :", options: ["3 ans et plus", "13 ans et plus", "18 ans et plus seulement", "Moins de 10 ans"], answer: 1, why: "T convient en général à partir de 13 ans." },
      { objective: "O5", q: "Avant de s'inscrire à une nouvelle application de jeu ou d'IA, un ado doit :", options: ["Donner une fausse date de naissance", "Ne pas lire les conditions", "Utiliser le mot de passe d'un parent", "Vérifier l'âge minimum et en parler à un parent ou tuteur"], answer: 3, why: "Les limites d'âge et l'avis d'un parent vous protègent et vous gardent dans les règles." },
      { objective: "O6", q: "Un commentateur (shoutcaster) :", options: ["Commente des matchs d'esport", "Fabrique des triches", "Bannit des joueurs", "Classe les jeux"], answer: 0, why: "Les commentateurs sont les voix des diffusions d'esport." },
      { objective: "O6", q: "L'IA vous donne une liste de métiers de l'esport. Et ensuite ?", options: ["Croire chaque détail", "Quitter l'école", "Vérifier avec un conseiller ou une vraie offre d'emploi", "Payer une formation tout de suite"], answer: 2, why: "L'IA peut ne pas être à jour ; vérifiez avec de vraies sources." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      4,
      7,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif et plan",
        objective: "O2",
        notYet: "L'objectif est vague, comme « devenir bon », ou il n'y a pas de plan.",
        meets: "Un petit objectif mesurable et un plan d'une semaine avec de courts exercices.",
        exceeds: "Le plan prévoit un moyen de suivre les progrès chaque jour."
      },
      {
        name: "Équilibre avec la vie",
        objective: "O2",
        notYet: "Le plan empiète sur l'école, les devoirs ou le sommeil.",
        meets: "L'école, les devoirs et le sommeil passent d'abord, et l'entraînement s'organise autour.",
        exceeds: "Prévoit aussi des pauses, des étirements ou du repos pour les yeux."
      },
      {
        name: "Analyse de match",
        objective: "O3",
        notYet: "Moins de trois notes, ou des notes sur d'autres personnes.",
        meets: "Trois notes (ce qui a bien marché, une erreur, quand) et un exercice proposé par l'IA ajouté au plan.",
        exceeds: "Des notes sur deux matchs ou plus, avec la tendance trouvée par l'IA expliquée avec les mots de l'apprenant."
      },
      {
        name: "Message d'équipe",
        objective: "O4",
        notYet: "Le message manque, est long ou n'est pas gentil.",
        meets: "Un message court et sympathique sur ce que l'équipe va travailler, avec la propre voix de l'apprenant.",
        exceeds: "Comprend aussi une liste d'annonces convenue."
      },
      {
        name: "Sûr et loyal",
        objective: "O5",
        notYet: "Le plan ou les notes contiennent des informations privées, ou parlent de triches.",
        meets: "Aucune information privée nulle part, et aucune triche ni aucun outil dangereux.",
        exceeds: "L'apprenant peut montrer où bloquer et signaler dans son jeu."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui suivent leur plan d'entraînement une semaine entière et signalent des progrès sur leur objectif (sondage de suivi)",
      "Les apprenants qui rejoignent ou créent une équipe d'esport d'école ou de club dans les 90 jours",
      "Les apprenants qui disent, dans le suivi à 30 jours, avoir bloqué et signalé un joueur dangereux ou évité une arnaque"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un jeu auquel l'apprenant joue déjà et a le droit de jouer, sur n'importe quel appareil",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser",
      "Du papier ou une application de notes pour les notes de match et le plan d'entraînement",
      "Environ 60 minutes en tout, plus une semaine d'entraînement pour le plan"
    ],
    facilitatorNotes: [
      "Faites-le avec une équipe d'esport d'école ou de club, pour que les apprenants planifient et analysent ensemble.",
      "Vérifiez la classification d'âge des jeux utilisés dans votre programme et communiquez-la aux familles.",
      "Assurez-vous que chaque plan d'entraînement laisse du temps pour l'école, les devoirs et le sommeil avant de l'approuver.",
      "Montrez aux apprenants où bloquer et signaler dans les jeux de votre groupe, et nommez l'adulte de confiance qu'ils peuvent prévenir.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
