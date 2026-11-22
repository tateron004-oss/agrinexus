"use strict";

// Koach Learn course (French translation of youth/youth-ai-school-success.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-school-success-fr",
  lang: "fr",
  translationOf: "youth-ai-school-success",
  category: "Youth",
  name: "L'IA pour réussir à l'école",
  skills: "Planifier sa semaine de cours, Découper un gros projet en étapes, Comprendre une lecture difficile, Obtenir un avis sur son propre texte, Faire un plan de révision pour un contrôle, Utiliser l'IA dans le respect des règles de l'école",
  outcome: "utiliser un assistant d'IA gratuit, dans le respect des règles de votre école, pour planifier votre semaine, découper un gros devoir en étapes, comprendre une lecture difficile, obtenir un avis sur un texte que vous avez écrit, et construire un plan de révision pour un vrai contrôle.",
  about: [
    "Ce cours s'adresse aux collégiens et lycéens d'environ 13 à 18 ans qui veulent que l'école paraisse moins écrasante. Il présente l'IA comme un agenda, un coach et un partenaire d'étude, jamais comme quelqu'un qui fait votre travail à votre place.",
    "Vous planifierez une vraie semaine, découperez un gros projet en petites étapes, vous ferez aider pour comprendre une lecture difficile, obtiendrez un avis sur un brouillon que vous avez écrit, et ferez un plan de révision pour un contrôle à venir.",
    "Les règles d'abord : chaque école et chaque professeur a ses propres règles sur l'IA. Vérifiez-les, vérifiez l'âge minimum de l'outil, et parlez avec un parent ou tuteur avant de vous inscrire où que ce soit. Utilisez votre compte scolaire pour les outils approuvés par l'école. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\"."
  ],
  finalTask: "Choisissez un vrai contrôle ou projet prévu dans les deux semaines. Utilisez l'IA pour faire un plan de révision jour par jour qui tient compte de vos cours, de vos activités et de votre petit boulot ou de vos tâches à la maison, puis demandez-lui 5 questions d'entraînement avec les réponses cachées, répondez vous-même, vérifiez avec vos notes, et écrivez une ligne sur la façon dont vous avez respecté les règles de votre école sur l'IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des collégiens et lycéens d'environ 13 à 18 ans qui se sentent débordés par l'école, souvent entre les cours, le sport, les clubs, un petit boulot ou les tâches à la maison.",
    startingPoint: "Ils utilisent chaque jour des téléphones et des ordinateurs de l'école, et ont parfois essayé un assistant d'IA. Beaucoup bachotent la veille, repoussent les gros projets et ne savent pas bien quelle utilisation de l'IA leur école autorise.",
    gap: "Les élèves peuvent utiliser l'IA pour s'organiser, comprendre des textes difficiles et mieux réviser, mais s'en servir pour faire leur travail peut compter comme de la triche et fait sauter l'apprentissage. Ils doivent utiliser l'IA comme agenda, coach et partenaire d'étude, dans le respect des règles de leur école, pour suivre le rythme et réussir leurs contrôles.",
    constraints: [
      "Les règles sur l'IA varient selon l'école et le professeur ; c'est la règle du professeur pour chaque devoir qui compte",
      "Âges minimum et accord d'un parent ou tuteur pour les nouveaux comptes ; des comptes scolaires pour les outils scolaires",
      "Appareils : un téléphone, un ordinateur de l'école ou de la bibliothèque ; seulement des outils gratuits",
      "Vie privée : aucune information privée collée dans les outils d'IA",
      "Des emplois du temps chargés : des leçons de 5 minutes et des mots simples"
    ],
    prerequisites: "Aucun. « C'est quoi l'IA ? (pour les jeunes) » aide les apprenants qui n'ont jamais utilisé d'assistant d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de vos tâches, de vos dates limites et de vos horaires fixes de la semaine", action: "faire un plan de semaine simple avec l'IA et l'adapter à votre vraie vie", standard: "avec le travail le plus difficile en premier, des pauses, et le plan recopié dans un agenda ou un calendrier" },
    { id: "O2", condition: "À partir d'un gros devoir et de sa date limite", action: "découper le devoir en étapes de 30 minutes avec des dates et les comparer à la grille d'évaluation du professeur", standard: "en finissant deux jours en avance avec toutes les parties demandées" },
    { id: "O3", condition: "À partir d'un paragraphe difficile d'une lecture de cours", action: "le lire vous-même, demander à l'IA de l'expliquer et de définir les mots difficiles, puis le relire", standard: "en écrivant avec vos propres mots une phrase juste sur son sens" },
    { id: "O4", condition: "À partir d'un brouillon que vous avez écrit et avec l'accord de votre professeur", action: "demander à l'IA trois points à améliorer plutôt qu'une réécriture, et réviser le brouillon avec vos propres mots", standard: "en écrivant vous-même chaque modification" },
    { id: "O5", condition: "À partir de la date d'un vrai contrôle, de ses sujets et de votre temps chaque jour", action: "construire un plan de révision jour par jour avec des questions d'entraînement, y répondre d'abord et vérifier dans vos notes", standard: "en passant plus de temps sur les questions que vous avez ratées" },
    { id: "O6", condition: "Pour tout devoir où vous pourriez utiliser l'IA", action: "respecter la règle de votre professeur sur l'IA, vérifier vous-même chaque fait ou source, et écrire une ligne sur votre utilisation de l'IA", standard: "sans rendre aucun travail écrit par l'IA qui n'est pas autorisé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : S'organiser",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planifier votre semaine de cours",
          minutes: 5,
          goal: "Transformer une liste de tâches en désordre en un plan de semaine simple.",
          text: [
            "L'école, l'entraînement, les clubs, un petit boulot, les tâches à la maison et les amis se disputent votre temps. Un assistant d'IA peut vous aider à mettre de l'ordre si vous lui donnez les faits.",
            "Listez ce qui est à rendre et quand, plus vos horaires fixes comme l'entraînement ou le travail. Puis demandez : \"Voici ma semaine. Fais un plan simple avec du temps de travail chaque jour, le plus difficile en premier, et des pauses. Que ça tienne sur un écran.\"",
            "Le plan est un brouillon. Déplacez les choses jusqu'à ce qu'il colle à votre vraie vie, puis recopiez-le dans un agenda, Google Agenda ou l'application d'agenda de votre école."
          ],
          steps: ["Notez chaque tâche et chaque date de remise.", "Ajoutez les horaires fixes : cours, entraînement, travail, famille.", "Demandez à l'IA un plan de semaine simple avec des pauses.", "Adaptez-le à vous, puis recopiez-le dans votre agenda."],
          words: [["Date de remise", "le jour où un travail doit être rendu."], ["Prioriser", "décider quoi faire en premier parce que c'est le plus important ou le plus urgent."]],
          slides: [
            { title: "Donnez les faits à l'IA", bullets: ["Ce qui est à rendre et quand", "Les horaires d'entraînement, de travail et de famille"] },
            { title: "Demandez un plan simple", bullets: ["Du temps de travail chaque jour", "Le plus difficile en premier", "Des pauses prévues", "Tient sur un écran"] },
            { title: "Rendez-le réel", bullets: ["Déplacez les choses pour coller à votre vie", "Recopiez-le dans un agenda"] }
          ],
          tryIt: "Listez tout ce qui est à rendre cette semaine et vos horaires fixes. Demandez à un assistant d'IA que vous avez le droit d'utiliser un plan de semaine simple. Changez une chose pour l'adapter à votre vie, et recopiez-le dans un agenda.",
          youCanNow: "construire un plan de semaine réaliste avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O1", q: "Que sont les « horaires fixes » quand vous planifiez votre semaine ?", options: ["Des moments que vous ne pouvez pas déplacer, comme les cours, l'entraînement ou le travail", "Des moments prévus pour vous détendre", "Seulement les dates limites des devoirs", "Des moments que l'IA choisit pour vous"], answer: 0, why: "Les horaires fixes sont des engagements autour desquels le plan doit s'organiser." },
            { objective: "O1", q: "Le plan de l'IA place du temps de révision pendant vos heures de travail. Que faites-vous ?", options: ["Vous n'allez pas au travail", "Vous ignorez le plan", "Vous déplacez le temps de révision pour l'adapter à votre vrai emploi du temps", "Vous demandez à l'IA d'annuler vos heures de travail"], answer: 2, why: "Le plan de l'IA est un brouillon ; c'est vous qui l'adaptez à votre vraie vie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Découper un gros projet en petites étapes",
          minutes: 5,
          goal: "Découper un gros devoir en petites étapes datées.",
          text: [
            "Les gros projets font peur parce qu'ils ressemblent à une seule énorme chose. Les découper en petites étapes les rend faisables.",
            "Donnez à l'IA les consignes du devoir (avec vos mots ou collées, sans information privée) et la date de remise. Demandez : \"Découpe ce travail en petites étapes de 30 minutes chacune, avec une date pour chaque étape, pour finir deux jours en avance.\"",
            "Lisez les étapes et vérifiez qu'elles correspondent à ce que votre professeur a demandé. Les consignes et la grille d'évaluation de votre professeur passent toujours avant le plan de l'IA."
          ],
          steps: ["Donnez les consignes et la date de remise.", "Demandez des étapes de 30 minutes avec des dates.", "Demandez de finir deux jours en avance.", "Comparez les étapes avec la grille d'évaluation du professeur."],
          words: [["Grille d'évaluation", "la liste que votre professeur utilise pour noter le travail."], ["Jalon", "un petit objectif sur le chemin d'un objectif plus grand."]],
          slides: [
            { title: "Gros projet, petites étapes", bullets: ["Les énormes tâches font peur", "Les petites étapes paraissent faisables"] },
            { title: "Demandez à l'IA de découper", bullets: ["Des étapes de 30 minutes", "Une date pour chacune", "Finir deux jours en avance"] },
            { title: "La grille d'évaluation l'emporte", bullets: ["Comparez les étapes aux consignes", "Les règles du professeur passent d'abord"] }
          ],
          tryIt: "Prenez un gros devoir que vous avez maintenant ou que vous avez eu récemment. Demandez à l'IA de le découper en étapes de 30 minutes avec des dates. Comparez-les aux consignes et corrigez toute étape qui ne correspond pas.",
          youCanNow: "transformer un gros devoir en petites étapes datées.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi demander à l'IA de finir les étapes deux jours en avance ?", options: ["Les professeurs donnent des points en plus", "Cela rend le projet plus court", "L'IA travaille plus vite comme ça", "Cela laisse du temps pour les imprévus ou les corrections"], answer: 3, why: "Finir en avance vous laisse de la marge si quelque chose prend plus de temps que prévu." },
            { objective: "O2", q: "Les étapes de l'IA oublient la bibliographie que votre professeur demande. Que faites-vous ?", options: ["Vous la laissez de côté, puisque l'IA sait mieux", "Vous ajoutez une étape pour elle, car les consignes du professeur l'emportent", "Vous demandez à un ami de la faire", "Vous commencez un autre projet"], answer: 1, why: "Les consignes et la grille d'évaluation de votre professeur passent toujours avant le plan de l'IA." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Comprendre une lecture difficile",
          minutes: 5,
          goal: "Utiliser l'IA pour comprendre un texte difficile tout en le lisant vous-même.",
          text: [
            "Certaines lectures sont dures : langue ancienne, mots scientifiques ou longs paragraphes. L'IA peut vous aider à les comprendre, à condition que vous lisiez quand même le texte.",
            "Essayez ceci : lisez d'abord un paragraphe. Puis demandez à l'IA : \"Explique ce paragraphe avec des mots simples\", \"Que veulent dire ces 3 mots ?\" ou \"Donne-moi 3 questions à garder en tête pendant ma lecture.\"",
            "Un résumé fait par l'IA peut oublier des choses ou se tromper, et il ne remplace pas la lecture demandée en classe. Servez-vous-en pour ouvrir le texte, puis relisez-le."
          ],
          steps: ["Lisez d'abord le paragraphe vous-même.", "Demandez à l'IA de l'expliquer simplement ou de définir les mots difficiles.", "Demandez des questions pour guider votre lecture.", "Relisez le paragraphe avec votre nouvelle compréhension."],
          words: [["Résumé", "une version courte des idées principales."], ["Contexte", "les mots et les idées autour d'un mot qui aident à comprendre son sens."]],
          slides: [
            { title: "Lisez d'abord", bullets: ["Essayez le paragraphe vous-même", "Repérez les mots que vous ne connaissez pas"] },
            { title: "Puis demandez à l'IA", bullets: ["\"Explique ceci avec des mots simples\"", "\"Que veulent dire ces 3 mots ?\"", "\"Donne-moi des questions pour guider ma lecture\""] },
            { title: "Puis relisez", bullets: ["Les résumés de l'IA peuvent oublier des choses", "Ils ne remplacent pas la lecture"] }
          ],
          tryIt: "Prenez un paragraphe difficile d'une lecture de classe. Lisez-le, demandez à l'IA de l'expliquer simplement et de définir deux mots difficiles, puis relisez-le et écrivez une phrase avec vos mots sur ce qu'il veut dire.",
          youCanNow: "utiliser l'IA pour ouvrir une lecture difficile puis la comprendre vous-même.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi un résumé de l'IA ne peut-il pas remplacer la lecture ?", options: ["Les résumés sont toujours trop longs", "Les professeurs peuvent voir votre écran", "Il peut oublier des choses ou se tromper", "L'IA ne sait pas lire le français"], answer: 2, why: "Un résumé de l'IA peut oublier ou fausser des détails, alors vous lisez quand même le texte." },
            { objective: "O3", q: "Vous bloquez sur un paragraphe plein de mots scientifiques. Quelle est la meilleure première étape ?", options: ["Le lire vous-même, puis demander à l'IA ce que veulent dire les mots difficiles", "Demander à l'IA de résumer tout le livre", "Sauter la lecture", "Copier le résumé de l'IA dans vos notes"], answer: 0, why: "Lisez d'abord, utilisez l'IA pour débloquer les passages difficiles, puis relisez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'organiser",
        questions: [
          { objective: "O1", q: "Que donner à l'IA pour l'aider à planifier votre semaine ?", options: ["Votre mot de passe", "Ce qui est à rendre et vos horaires fixes", "Votre adresse", "Rien"], answer: 1, why: "L'IA a besoin de vos tâches et de vos horaires pour faire un plan utile." },
          { objective: "O1", q: "L'IA a fait un plan de semaine qui ne tient pas compte de votre entraînement. Vous :", options: ["Le suivez quand même", "Arrêtez l'entraînement", "Supprimez votre agenda", "L'adaptez à votre vraie vie"], answer: 3, why: "Le plan est un brouillon ; c'est vous qui l'adaptez." },
          { objective: "O2", q: "Qu'est-ce qu'une grille d'évaluation ?", options: ["La liste que votre professeur utilise pour noter le travail", "Un type de casse-tête", "Une application de révision", "Un mot de passe"], answer: 0, why: "La grille montre ce que votre professeur note." },
          { objective: "O2", q: "Les étapes de l'IA oublient une partie exigée par votre professeur. Vous :", options: ["Sautez cette partie", "Demandez à l'IA de vous noter", "L'ajoutez, car les consignes du professeur l'emportent", "Changez les dates de remise"], answer: 2, why: "Les consignes du professeur passent d'abord." },
          { objective: "O3", q: "Quelle est la meilleure façon d'utiliser l'IA avec une lecture difficile ?", options: ["Sauter la lecture et n'utiliser que le résumé de l'IA", "Demander à l'IA de passer le contrôle", "La lire d'abord, demander à l'IA d'expliquer, puis relire", "Ne jamais la lire"], answer: 2, why: "L'IA vous aide à comprendre, mais c'est vous qui lisez." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Écrire et réviser plus intelligemment",
      lessons: [
        {
          objectives: ["O4"],
          title: "Obtenir un avis sur votre propre texte",
          minutes: 5,
          goal: "Demander à l'IA un avis sur un brouillon que vous avez écrit, puis le réviser vous-même.",
          text: [
            "Écrire votre propre brouillon, c'est là que l'apprentissage se fait. L'IA peut ensuite jouer le rôle d'un coach : elle peut signaler des phrases peu claires, des preuves qui manquent ou des fautes de grammaire.",
            "Demandez un avis, pas une réécriture : \"Voici mon paragraphe. Ne le réécris pas. Dis-moi 3 choses à améliorer et pourquoi.\" Ensuite, c'est vous qui faites les changements, avec vos mots.",
            "Si votre professeur n'autorise pas l'avis de l'IA, trouvez une autre aide : un camarade, le centre d'aide à l'écriture ou le CDI de l'école, ou votre professeur pendant ses heures de disponibilité."
          ],
          steps: ["Écrivez d'abord votre propre brouillon.", "Vérifiez que votre professeur autorise l'avis de l'IA.", "Demandez 3 choses à améliorer, pas une réécriture.", "Révisez avec vos propres mots."],
          words: [["Brouillon", "une première version de votre texte."], ["Réviser", "améliorer votre texte en changeant des idées, l'ordre ou des mots."]],
          slides: [
            { title: "Écrivez d'abord", bullets: ["Votre brouillon, c'est là que vous apprenez", "L'IA vient après, comme un coach"] },
            { title: "Demandez un avis, pas une réécriture", bullets: ["\"Ne le réécris pas\"", "\"Dis-moi 3 choses à améliorer et pourquoi\""] },
            { title: "C'est vous qui changez", bullets: ["Révisez avec vos propres mots", "IA interdite ? Demandez à un camarade ou au professeur"] }
          ],
          tryIt: "Prenez un paragraphe que vous avez écrit (si votre professeur autorise l'avis de l'IA). Demandez 3 choses à améliorer sans réécriture. Faites les changements vous-même et comparez les deux versions.",
          youCanNow: "obtenir un avis de l'IA et réviser votre propre texte.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire « un avis, pas une réécriture » ?", options: ["L'IA écrit une nouvelle version pour vous", "L'IA note votre travail", "L'IA supprime votre brouillon", "L'IA montre ce qu'il faut améliorer et c'est vous qui faites les changements"], answer: 3, why: "Un avis vous dit quoi corriger ; vous révisez avec vos propres mots." },
            { objective: "O4", q: "Votre professeur n'autorise pas l'avis de l'IA sur cette rédaction. Que faites-vous ?", options: ["Vous utilisez l'IA quand même", "Vous demandez un avis à un camarade, au centre d'aide à l'écriture ou à votre professeur", "Vous rendez le premier brouillon sans le relire", "Vous faites réécrire le texte en cachette par l'IA"], answer: 1, why: "Quand l'IA n'est pas autorisée, d'autres personnes peuvent vous donner un avis." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faire un plan de révision pour un contrôle",
          minutes: 5,
          goal: "Construire un plan de révision jour par jour et des questions d'entraînement pour un vrai contrôle.",
          text: [
            "Bachoter la veille marche en général mal. Réviser un peu chaque jour et se tester, ça marche.",
            "Donnez à l'IA la date du contrôle, les chapitres et le temps dont vous disposez chaque jour : \"Mon contrôle de SVT est vendredi sur les cellules et l'ADN. J'ai 30 minutes par jour. Fais un plan de révision avec un petit quiz chaque jour.\"",
            "Demandez des questions d'entraînement avec les réponses cachées, répondez vous-même, puis vérifiez avec vos notes ou votre manuel. Passez plus de temps sur les questions où vous vous êtes trompé."
          ],
          steps: ["Donnez à l'IA la date du contrôle, les chapitres et votre temps quotidien.", "Demandez un plan jour par jour avec de l'entraînement.", "Répondez aux questions avant de voir les réponses.", "Vérifiez avec vos notes et concentrez-vous sur vos erreurs."],
          words: [["Bachotage", "essayer de tout apprendre juste avant un contrôle."], ["Révision espacée", "réviser un peu sur plusieurs jours au lieu de tout d'un coup."]],
          slides: [
            { title: "Peu et souvent vaut mieux que bachoter", bullets: ["Révisez un peu chaque jour", "Testez-vous au fur et à mesure"] },
            { title: "Demandez un plan", bullets: ["La date du contrôle et les chapitres", "Les minutes dont vous disposez chaque jour", "Un petit quiz chaque jour"] },
            { title: "S'entraîner de la bonne façon", bullets: ["Répondez avant de regarder", "Vérifiez avec vos notes", "Concentrez-vous sur vos erreurs"] }
          ],
          tryIt: "Choisissez un vrai contrôle à venir. Demandez à l'IA un plan de révision jour par jour avec le temps dont vous disposez vraiment. Faites les questions d'entraînement du premier jour et vérifiez-les avec vos notes.",
          youCanNow: "faire un plan de révision et vous entraîner avec l'IA pour un vrai contrôle.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui marche mieux que bachoter la veille ?", options: ["Relire ses notes une fois", "Réviser un peu chaque jour et se tester", "Dormir avec son livre", "Lire seulement le plan de l'IA"], answer: 1, why: "Réviser un peu chaque jour en se testant aide à retenir davantage." },
            { objective: "O5", q: "Vous avez raté 3 questions d'entraînement sur 5 sur les parties de la cellule. Que faites-vous ensuite ?", options: ["Vous passez à un nouveau sujet", "Vous supprimez les questions", "Vous demandez les réponses à l'IA et les apprenez par cœur", "Vous passez plus de temps sur les parties de la cellule et vérifiez dans vos notes"], answer: 3, why: "Concentrez votre temps de révision sur ce que vous avez raté." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Utiliser l'IA honnêtement à l'école",
          minutes: 5,
          goal: "Respecter les règles de votre école sur l'IA et dire comment vous l'avez utilisée.",
          text: [
            "Les écoles ont des règles différentes sur l'IA. Certaines l'autorisent pour trouver des idées et avoir un avis, certaines veulent que vous disiez quand vous l'avez utilisée, et certaines l'interdisent pour certains travaux. C'est la règle de votre professeur pour ce devoir qui compte.",
            "Ne rendez jamais un travail écrit par l'IA comme le vôtre quand ce n'est pas permis. Cela peut compter comme de la triche, et vous ratez l'apprentissage. Si l'IA a aidé, dites comment : \"J'ai utilisé l'IA pour faire des questions d'entraînement et pour avoir un avis sur mon deuxième paragraphe.\"",
            "L'IA peut inventer des faits et des sources. Ne recopiez jamais dans votre travail une citation ou un titre de livre donné par l'IA sans l'avoir trouvé vous-même. Gardez les informations privées hors des outils d'IA, et utilisez votre compte scolaire pour les outils de l'école."
          ],
          steps: ["Lisez la règle de votre professeur sur l'IA pour ce devoir.", "N'utilisez l'IA que de la façon permise.", "Écrivez une ligne qui dit comment vous l'avez utilisée.", "Vérifiez vous-même tout fait ou toute source avant de l'utiliser."],
          words: [["Intégrité scolaire", "être honnête dans le travail scolaire : ce que vous rendez montre ce que vous avez fait."], ["Citer ses sources", "dire d'où vient une information."]],
          slides: [
            { title: "Les règles varient", bullets: ["Certaines autorisent l'IA pour les idées ou l'avis", "Certaines l'interdisent pour certains travaux", "La règle de votre professeur compte"] },
            { title: "Soyez transparent sur l'aide de l'IA", bullets: ["Ne faites jamais passer le travail de l'IA pour le vôtre", "Dites en une ligne comment l'IA a aidé"] },
            { title: "Vérifiez les faits et les sources", bullets: ["L'IA peut inventer des citations et des livres", "Trouvez vous-même chaque source", "Pas d'informations privées dans l'IA"] }
          ],
          tryIt: "Tâche finale : pour un vrai contrôle ou projet dans les deux semaines, faites un plan de révision jour par jour avec l'IA, faites 5 questions d'entraînement aux réponses cachées, vérifiez-les avec vos notes, et écrivez une ligne sur la façon dont vous avez respecté les règles de votre école sur l'IA.",
          youCanNow: "utiliser l'IA à l'école de façon permise, honnête et qui vous aide vraiment à apprendre.",
          quickCheck: [
            { objective: "O6", q: "Quelle règle sur l'IA compte pour un devoir précis ?", options: ["Celle de votre ami", "Celle de l'entreprise d'IA", "Celle de votre professeur", "La plus facile"], answer: 2, why: "Les écoles sont différentes, et c'est la règle de votre professeur pour ce devoir qui compte." },
            { objective: "O6", q: "L'IA vous donne une très bonne citation pour votre rédaction. Que faites-vous avant de l'utiliser ?", options: ["Vous la retrouvez vous-même dans la vraie source", "Vous l'utilisez ; l'IA ne se trompe pas", "Vous changez quelques mots", "Vous ajoutez un numéro de page inventé"], answer: 0, why: "L'IA peut inventer des citations et des sources, alors retrouvez-les d'abord vous-même." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Écrire et réviser plus intelligemment",
        questions: [
          { objective: "O4", q: "Quelle demande donne un avis utile sans faire votre travail ?", options: ["\"Ne le réécris pas. Dis-moi 3 choses à améliorer et pourquoi.\"", "\"Réécris ma rédaction\"", "\"Écris-la pour moi\"", "\"Rends-la parfaite\""], answer: 0, why: "Demander un avis garde le texte à vous." },
          { objective: "O4", q: "Votre professeur n'autorise pas l'avis de l'IA. Vous pouvez :", options: ["Utiliser l'IA en cachette", "Ne pas écrire", "Copier un ami", "Demander à un camarade, au centre d'aide à l'écriture ou au professeur"], answer: 3, why: "D'autres personnes peuvent donner un avis en respectant les règles." },
          { objective: "O5", q: "Qu'est-ce que la révision espacée ?", options: ["Réviser toute la nuit avant le contrôle", "Réviser un peu sur plusieurs jours", "Ne pas réviser", "Réviser dans l'espace"], answer: 1, why: "Étaler la révision sur plusieurs jours aide à retenir." },
          { objective: "O6", q: "L'IA vous donne une citation d'un livre pour votre rédaction. Vous devez :", options: ["Trouver d'abord vous-même la citation dans le vrai livre", "La recopier", "Inventer un numéro de page", "Demander à l'IA si elle est vraie"], answer: 0, why: "L'IA peut inventer des citations ; vérifiez la vraie source." },
          { objective: "O6", q: "Quelle règle sur l'IA compte pour un devoir ?", options: ["Celle d'un ami", "Celle de l'entreprise d'IA", "Celle de votre professeur", "Aucune"], answer: 2, why: "C'est votre professeur qui fixe la règle pour ce devoir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour réussir à l'école",
    questions: [
      { objective: "O1", q: "Pour planifier votre semaine avec l'IA, listez :", options: ["Vos mots de passe", "Les tâches, les dates de remise et les horaires fixes", "Les numéros de téléphone de vos amis", "Rien"], answer: 1, why: "Ces faits permettent à l'IA de construire un vrai plan." },
      { objective: "O1", q: "Un bon plan de semaine contient :", options: ["Aucune pause", "Seulement des jeux vidéo", "Tout le dimanche soir", "Le plus difficile en premier et des pauses"], answer: 3, why: "Les pauses et le travail difficile en premier aident à finir." },
      { objective: "O1", q: "Une fois que l'IA a fait un plan, vous devez :", options: ["L'ignorer", "Le partager avec des inconnus", "Le supprimer", "L'adapter à votre vie et le recopier dans un agenda"], answer: 3, why: "Le plan n'aide que s'il vous convient et que vous le voyez." },
      { objective: "O2", q: "Pourquoi découper un gros projet en étapes ?", options: ["Pour le rendre plus long", "Les petites étapes paraissent faisables", "Les professeurs détestent ça", "La loi l'exige"], answer: 1, why: "Les petites étapes rendent le gros travail gérable." },
      { objective: "O2", q: "Une bonne demande pour découper un projet :", options: ["\"projet\"", "\"Fais mon projet\"", "\"Découpe ce travail en étapes de 30 minutes avec des dates, pour finir deux jours en avance\"", "\"Fais-le disparaître\""], answer: 2, why: "Elle fixe la taille des étapes, les dates et une marge." },
      { objective: "O2", q: "Si les étapes de l'IA et la grille d'évaluation de votre professeur ne sont pas d'accord :", options: ["Suivez la grille", "Suivez l'IA", "Ne suivez ni l'un ni l'autre", "Demandez à un inconnu"], answer: 0, why: "Votre professeur note avec la grille." },
      { objective: "O3", q: "Quand vous utilisez l'IA avec une lecture difficile, d'abord :", options: ["Sautez au résumé", "Lisez le paragraphe vous-même", "Fermez le livre", "Demandez à l'IA les réponses du quiz"], answer: 1, why: "Lire d'abord veut dire que l'IA vous aide à comprendre, pas à sauter." },
      { objective: "O3", q: "Pourquoi un résumé de l'IA ne peut-il pas remplacer la lecture ?", options: ["Il est trop long", "Il coûte de l'argent", "Il est toujours parfait", "Il peut oublier des choses ou se tromper"], answer: 3, why: "Les résumés peuvent omettre ou déformer des parties importantes." },
      { objective: "O3", q: "Laquelle est une demande utile pour la lecture ?", options: ["\"Que veulent dire ces 3 mots ?\"", "\"Écris ma fiche de lecture\"", "\"Donne-moi ma note\"", "\"Lis-le pour moi pour toujours\""], answer: 0, why: "Définir les mots difficiles aide à comprendre." },
      { objective: "O4", q: "Où se fait surtout l'apprentissage en écriture ?", options: ["En recopiant un texte de l'IA", "En imprimant la page", "En écrivant votre propre brouillon et en le révisant", "En choisissant une police"], answer: 2, why: "Écrire le brouillon et le réviser construit la compétence." },
      { objective: "O4", q: "Quand l'IA donne un avis, qui fait les changements ?", options: ["L'IA", "Un inconnu", "Vous, avec vos propres mots", "Personne"], answer: 2, why: "Réviser vous-même garde le travail à vous." },
      { objective: "O4", q: "Que veut dire réviser un texte ?", options: ["L'améliorer en le changeant", "Le supprimer", "L'imprimer", "Le rendre en retard"], answer: 0, why: "Réviser, c'est améliorer un brouillon." },
      { objective: "O5", q: "Quelle habitude de révision marche le mieux ?", options: ["Bachoter la veille", "Seulement relire", "Ne pas réviser", "Un peu chaque jour avec des auto-tests"], answer: 3, why: "La révision espacée avec auto-tests marche bien." },
      { objective: "O5", q: "Quelles trois choses dire à l'IA pour un plan de révision ?", options: ["Votre mot de passe, votre adresse et votre âge", "La date du contrôle, les chapitres et votre temps quotidien", "Couleur, plat et chanson préférés", "Rien"], answer: 1, why: "Cela permet à l'IA de construire un plan adapté." },
      { objective: "O5", q: "Après les questions d'entraînement, passez plus de temps sur :", options: ["Celles où vous vous êtes trompé", "Celles que vous avez réussies", "Aucune", "De nouveaux sujets au hasard"], answer: 0, why: "Se concentrer sur les erreurs comble les lacunes." },
      { objective: "O6", q: "Rendre un travail écrit par l'IA quand ce n'est pas permis :", options: ["C'est toujours acceptable", "C'est obligatoire", "Peut compter comme de la triche", "Donne des points en plus"], answer: 2, why: "Cela enfreint les règles et fait sauter l'apprentissage." },
      { objective: "O6", q: "Une bonne ligne sur l'usage de l'IA est :", options: ["Rien du tout", "\"J'ai utilisé l'IA pour faire des questions d'entraînement et avoir un avis sur le paragraphe 2\"", "\"L'IA a tout fait\" alors que ce n'est pas vrai", "\"Je n'utilise jamais d'ordinateur\""], answer: 1, why: "Elle dit honnêtement comment l'IA a aidé." },
      { objective: "O6", q: "L'IA cite un livre comme source pour votre projet. Vous devez :", options: ["Le recopier dans votre liste", "Inventer un auteur", "Ignorer toutes les sources", "Trouver vous-même le livre avant de l'utiliser"], answer: 3, why: "L'IA peut inventer des sources." },
      { objective: "O6", q: "Quel compte utiliser pour les outils approuvés par l'école ?", options: ["Le compte d'un ami", "Un faux compte", "Jamais de compte", "Votre compte scolaire"], answer: 3, why: "Les outils scolaires sont configurés pour votre compte scolaire." },
      { objective: "O6", q: "Avant de vous inscrire sur une nouvelle application d'IA, vous devez :", options: ["Utiliser n'importe quelle date de naissance", "Vérifier son âge minimum et parler avec un parent ou tuteur", "Lui donner votre mot de passe scolaire", "Ne pas lire les conditions"], answer: 1, why: "L'âge minimum et l'accord d'un parent ou tuteur passent d'abord." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      6,
      7,
      9,
      10,
      12,
      14,
      15
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Un plan de révision adapté à la vraie vie",
        objective: "O5",
        notYet: "Pas de plan, ou il ne tient pas compte des cours, des activités et du travail.",
        meets: "Un plan jour par jour jusqu'à la date du contrôle, organisé autour des horaires fixes.",
        exceeds: "Le plan a été modifié après le premier jour selon ce qui a été manqué."
      },
      {
        name: "Organisation du temps de la semaine",
        objective: "O1",
        notYet: "Le temps de révision n'est pas dans un calendrier ou un agenda.",
        meets: "Les séances de révision sont recopiées dans un agenda ou un calendrier, avec des pauses.",
        exceeds: "Les sujets les plus difficiles sont placés en premier dans chaque séance."
      },
      {
        name: "Entraînement et vérification",
        objective: "O5",
        notYet: "Les réponses ont été regardées avant d'essayer, ou n'ont pas été vérifiées.",
        meets: "Cinq questions d'entraînement faites d'abord, puis vérifiées dans les notes.",
        exceeds: "Les réponses fausses sont listées avec ce qu'il faut réviser davantage."
      },
      {
        name: "Utilisation honnête de l'IA",
        objective: "O6",
        notYet: "Pas de ligne sur l'utilisation de l'IA, ou l'IA a été utilisée d'une façon que le professeur n'autorise pas.",
        meets: "Une ligne claire sur la façon dont l'IA a été utilisée, conforme à la règle du professeur.",
        exceeds: "Indique aussi chaque fait ou source venant de l'IA qui a été vérifié."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui disent avoir eu une meilleure note à un contrôle ou un projet après avoir suivi leur plan de révision (suivi à 30 jours)",
      "Les apprenants qui disent, dans le suivi à 30 jours, avoir rendu leurs gros projets à temps",
      "Les professeurs ou programmes qui signalent moins de problèmes de règles liés à l'IA chez les apprenants"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone, un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser, de préférence avec un compte scolaire",
      "Un agenda, Google Agenda ou l'application d'agenda de l'école",
      "Des notes de cours et les consignes d'un vrai contrôle ou projet",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Présentez au début la politique de votre école sur l'IA, et demandez aux apprenants d'apporter la règle de chaque professeur pour le contrôle ou le projet choisi.",
      "Demandez aux apprenants d'utiliser un vrai contrôle ou projet à venir, pour que le plan serve tout de suite.",
      "Rappelez aux apprenants de ne jamais coller d'informations privées et d'utiliser les comptes scolaires pour les outils scolaires.",
      "Faites le point une semaine plus tard pour voir si les apprenants ont suivi leur plan de révision, et ajustez-le ensemble.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
