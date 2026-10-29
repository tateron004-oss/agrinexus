"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-team-sports.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-team-sports-fr",
  lang: "fr",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "L'IA pour les sports collectifs",
  skills: "Suivre des statistiques d'équipe simples, Trouver des tendances de composition et de jeu, Écrire un résumé de scouting d'un adversaire avec l'IA, Planifier la communication de l'équipe, Protéger la vie privée des joueurs et l'équité",
  outcome: "utiliser un tableur partagé et un assistant IA pour suivre des statistiques d'équipe simples, trouver une tendance de composition ou de jeu, écrire un résumé de scouting d'une page sur un adversaire et le partager avec l'équipe d'une façon qui protège la vie privée des joueurs.",
  about: [
    "Ce cours s'adresse aux entraîneurs, aux responsables d'équipe, aux capitaines et aux analystes de tout sport collectif : basket, football, volley, football américain, hockey, baseball, softball et plus encore.",
    "Les équipes professionnelles ont des services d'analyse de données. Vous pouvez en faire une version simple avec un tableur et un assistant IA gratuit : suivre ce qui compte, repérer des tendances, étudier les adversaires et communiquer clairement avec les joueurs et les familles.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. Les données soutiennent le jugement de l'entraîneur ; elles ne le remplacent jamais."
  ],
  finalTask: "Pour votre équipe, créez un tableau de statistiques partagé pour trois matchs ou entraînements, trouvez une tendance de composition ou de jeu avec l'aide de l'IA, écrivez un résumé de scouting d'une page sur un vrai adversaire à partir de vidéos de match ou de résultats publics, et rédigez un message d'équipe qui partage le point clé sans exposer les informations privées d'aucun joueur.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des entraîneurs, des responsables d'équipe, des capitaines et des analystes d'équipe dans tous les sports collectifs, comme le basket-ball, le football, le volley-ball, le football américain, le hockey, le baseball et le softball.",
    startingPoint: "Ils connaissent bien leur sport et leur équipe, et utilisent un téléphone et parfois un tableur. La plupart suivent peu de statistiques ou les suivent de façon irrégulière, font le scouting de mémoire et n'ont pas fixé de règles pour partager les données des joueurs ou les utiliser avec l'IA.",
    gap: "Sans statistiques ni scouting réguliers, les équipes passent à côté de tendances qui pourraient changer l'entraînement et les plans de jeu, et un partage négligent peut exposer les informations privées des joueurs. Un tableau partagé simple, un usage prudent de l'IA et des règles claires de confidentialité aident les équipes à progresser tout en protégeant les joueurs.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec Google Sheets gratuit et un assistant IA gratuit",
      "Environ 60 minutes de leçons, plus les statistiques de trois matchs ou entraînements",
      "Les règles de l'établissement, de la ligue et du club sur les données des élèves, les applications autorisées, l'échange de vidéos et le contact avec des mineurs",
      "Aucun nom complet ni information de santé, scolaire ou de contact dans les tableaux de statistiques ou les outils d'IA"
    ],
    prerequisites: "Aucun. « Analyse vidéo et intelligence de jeu » aide à étiqueter les vidéos."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de l'identité de jeu de votre équipe", action: "choisir trois à cinq statistiques d'équipe et écrire une définition claire pour chacune", standard: "avec chaque statistique relevable à chaque match et une personne chargée de la relever" },
    { id: "O2", condition: "Avec Google Sheets", action: "créer un tableau de statistiques d'équipe partagé avec un onglet de synthèse et un accès sûr", standard: "avec l'accès en modification seulement pour le staff qui relève, la lecture seule pour les autres, jamais public, et aucune information médicale, scolaire ou de contact" },
    { id: "O3", condition: "À partir des statistiques d'au moins trois matchs ou entraînements", action: "identifier une tendance de composition ou de jeu avec le tri, les filtres ou un assistant IA", standard: "avec seulement les numéros ou les initiales des joueurs, les calculs de l'IA vérifiés, et les petits échantillons traités comme des questions" },
    { id: "O4", condition: "À partir des résultats publics et des vidéos autorisées d'un vrai adversaire", action: "écrire un résumé de scouting d'une page sur son attaque, sa défense, ses joueurs clés et trois clés pour le battre", standard: "avec chaque point tiré de vos propres notes et les règles de scouting de la ligue respectées" },
    { id: "O5", condition: "À partir de vos données et de votre résumé de scouting", action: "écrire un court message d'équipe avec un à trois points clés", standard: "envoyé par le canal d'équipe autorisé, avec les retours individuels gardés privés" },
    { id: "O6", condition: "Pour les données de votre équipe", action: "écrire des règles de données d'équipe qui protègent la vie privée des joueurs et gardent les décisions équitables", standard: "qui couvrent quoi relever, où le stocker, ce qui ne va jamais dans l'IA, qui autorise les applications, et comment les décisions sont expliquées aux joueurs" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les données de l'équipe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir les statistiques d'équipe qui comptent",
          minutes: 5,
          goal: "Choisir trois à cinq statistiques d'équipe liées à la façon dont votre équipe veut jouer.",
          text: [
            "L'analyse d'équipe commence par l'identité de votre équipe. Une équipe de basket qui joue en contre-attaque s'intéresse aux points en transition et aux pertes de balle. Une équipe de football qui joue la possession s'intéresse aux passes réussies et aux tirs dans la surface. Une équipe de volley s'intéresse à la réception de service et au pourcentage de side-out (points gagnés sur le service adverse).",
            "Choisissez trois à cinq statistiques que vous pouvez vraiment relever à chaque match avec les personnes dont vous disposez : un responsable, un parent bénévole, un joueur blessé ou la vidéo après coup.",
            "Écrivez une définition claire pour chacune afin que tout le monde compte de la même façon : « Une perte de balle est toute possession perdue sans tir. »"
          ],
          steps: ["Écrivez l'identité de votre équipe en une phrase.", "Listez les statistiques qui y correspondent.", "Choisissez-en trois à cinq que vous pouvez relever à chaque match.", "Écrivez une définition claire pour chacune.", "Désignez qui les relève."],
          words: [["Analyse d'équipe", "utiliser des chiffres sur une équipe pour comprendre et améliorer son jeu."], ["Définition", "une règle claire sur ce qui compte exactement."]],
          slides: [
            { title: "Partez de l'identité", bullets: ["Contre-attaque ? Possession ? Défense d'abord ?", "Des statistiques adaptées à votre jeu"] },
            { title: "Choisissez 3 à 5 statistiques", bullets: ["Que vous pouvez relever à chaque match", "Avec les personnes dont vous disposez"] },
            { title: "Définissez chacune", bullets: ["Tout le monde compte de la même façon", "Désignez qui la relève"] }
          ],
          tryIt: "Écrivez l'identité de votre équipe en une phrase. Demandez à un assistant IA des statistiques qui y correspondent, puis choisissez-en trois à cinq et écrivez leurs définitions.",
          youCanNow: "choisir et définir des statistiques d'équipe adaptées à votre façon de jouer.",
          quickCheck: [
            { objective: "O1", q: "Quelles statistiques conviennent à une équipe de football qui joue la possession ?", options: ["Les passes réussies et les tirs dans la surface", "Les lancers francs", "La réception de service", "Les coups de circuit"], answer: 0, why: "Les statistiques doivent correspondre à la façon dont votre équipe veut jouer." },
            { objective: "O1", q: "Deux bénévoles comptent les pertes de balle différemment. Que faites-vous ?", options: ["Faire la moyenne de leurs chiffres", "Arrêter de suivre les pertes de balle", "Laisser chacun compter à sa façon", "Écrire une définition claire que tout le monde utilise"], answer: 3, why: "Une définition claire fait compter tout le monde de la même façon." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Un tableau de statistiques d'équipe partagé",
          minutes: 5,
          goal: "Créer un tableau Google Sheets partagé pour les statistiques d'équipe avec un accès sûr.",
          text: [
            "Utilisez un seul fichier Google Sheets avec un onglet par match, ou un long tableau avec ces colonnes : Date, Adversaire, Quart-temps ou Set, Composition, et vos statistiques. Un onglet de synthèse peut totaliser la saison.",
            "Partagez-le seulement avec le staff et les responsables qui doivent le modifier. Utilisez des liens en lecture seule pour les autres, et ne rendez jamais public sur le web un tableau contenant des informations sur les joueurs.",
            "Ne gardez que les statistiques de match dans ce tableau. N'y mettez pas de notes médicales, de notes scolaires, d'informations familiales ou de coordonnées ; elles ont leur place dans les systèmes officiels de votre école, avec les bonnes protections de la vie privée."
          ],
          steps: ["Créez un fichier Google Sheets avec des colonnes claires.", "Ajoutez un onglet de synthèse pour les totaux de la saison.", "Donnez l'accès en modification seulement au staff qui relève les données.", "Lecture seule pour les autres ; jamais public.", "Laissez de côté les infos médicales, les notes scolaires et les coordonnées."],
          words: [["Tableau partagé", "un tableur que plusieurs personnes peuvent ouvrir, avec un accès que vous contrôlez."], ["Lecture seule", "les gens peuvent voir mais pas modifier."]],
          slides: [
            { title: "Organisation du tableau", bullets: ["Date, Adversaire, Période, Composition", "Vos 3 à 5 statistiques", "Onglet de synthèse pour la saison"] },
            { title: "Accès", bullets: ["Modification : le staff qui relève", "Lecture seule pour les autres", "Jamais public"] },
            { title: "À laisser de côté", bullets: ["Notes médicales", "Notes scolaires et infos familiales", "Coordonnées"] }
          ],
          tryIt: "Créez votre tableau de statistiques d'équipe, saisissez un match passé de mémoire ou à partir d'une feuille de match, et vérifiez les paramètres de partage.",
          youCanNow: "créer un tableau de statistiques d'équipe partagé avec un accès sûr.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert l'onglet de synthèse du tableau d'équipe ?", options: ["À stocker les numéros de téléphone des joueurs", "À faire le total de la saison", "À cacher les données", "À envoyer des messages aux joueurs"], answer: 1, why: "Un onglet de synthèse peut faire le total de la saison à partir de chaque match." },
            { objective: "O2", q: "Un parent demande le lien du tableau de statistiques de l'équipe. Que partagez-vous ?", options: ["Un accès en modification", "Un lien web public", "Un lien en lecture seule, si vos règles le permettent", "Tout le dossier avec les notes médicales"], answer: 2, why: "Utilisez la lecture seule pour les personnes qui ne relèvent pas les statistiques, et ne rendez jamais le tableau public." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver des tendances de composition et de jeu",
          minutes: 6,
          goal: "Utiliser votre tableau et un assistant IA pour repérer une tendance de composition ou de jeu.",
          text: [
            "Après quelques matchs, cherchez des tendances : quelles compositions marquent plus que l'adversaire ? Dans quel quart-temps ou quel set avons-nous du mal ? Quel type d'action rapporte le plus de points ?",
            "Utilisez le tri, les filtres ou un tableau croisé dynamique dans Google Sheets. Ou copiez le tableau (avec les initiales ou les numéros des joueurs au lieu de leurs noms complets) dans un assistant IA et demandez : « Quelles compositions ont le meilleur écart de points ? Quelle période est la plus faible ? Montre tes calculs. » Vérifiez ses calculs avec le tableau.",
            "Les petits échantillons trompent. Une composition qui a joué quatre minutes n'a rien prouvé. Traitez les tendances comme des questions pour l'entraînement et la vidéo, pas comme des réponses définitives : c'est l'entraîneur qui décide."
          ],
          steps: ["Triez ou filtrez par composition et par période.", "Avec l'IA, utilisez les numéros ou les initiales, pas les noms complets.", "Demandez à l'IA de trouver des tendances et de montrer ses calculs.", "Vérifiez ses calculs.", "Transformez une tendance en question pour l'entraînement ou la vidéo."],
          words: [["Écart de points", "les points marqués moins les points encaissés."], ["Tableau croisé dynamique", "un outil de tableur qui regroupe et totalise des données, comme les points par composition."], ["Taille de l'échantillon", "la quantité de données dont vous disposez ; les petits échantillons peuvent tromper."]],
          slides: [
            { title: "Questions de tendance", bullets: ["Quelles compositions dominent l'adversaire ?", "Quelle période est la plus faible ?", "Quel type d'action marque le plus ?"] },
            { title: "Les trouver", bullets: ["Tri, filtre ou tableau croisé dynamique", "L'IA avec des initiales, pas des noms complets", "« Montre tes calculs » et vérifiez-les"] },
            { title: "Prudence", bullets: ["Les petits échantillons trompent", "Les tendances sont des questions", "L'entraîneur décide"] }
          ],
          tryIt: "Saisissez au moins deux matchs dans votre tableau. Demandez à un assistant IA de trouver la meilleure et la pire période ou composition et de montrer ses calculs. Vérifiez-les et écrivez une question pour l'entraînement.",
          youCanNow: "trouver des tendances de composition et de jeu et les traiter comme des questions pour l'entraîneur.",
          quickCheck: [
            { objective: "O3", q: "Que demander à l'IA en plus de trouver des tendances de composition ?", options: ["De montrer ses calculs", "De choisir les titulaires", "De classer les joueurs publiquement", "De deviner les matchs manquants"], answer: 0, why: "Demandez à l'IA de montrer ses calculs pour pouvoir les vérifier avec le tableau." },
            { objective: "O3", q: "Votre troisième période est faible à chaque match jusqu'ici. Que faites-vous de cette tendance ?", options: ["Mettre toute l'équipe sur le banc", "La publier en ligne", "L'ignorer", "L'apporter à l'entraînement et à la séance vidéo comme une question pour l'entraîneur"], answer: 3, why: "Traitez les tendances comme des questions pour l'entraînement et la vidéo ; c'est l'entraîneur qui décide." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les données de l'équipe",
        questions: [
          { objective: "O1", q: "Par quoi l'analyse d'équipe doit-elle commencer ?", options: ["Ce que suivent les pros", "Toutes les statistiques possibles", "L'identité de votre équipe et la façon dont vous voulez jouer", "Les chiffres des réseaux sociaux"], answer: 2, why: "Les statistiques doivent correspondre à votre style de jeu." },
          { objective: "O1", q: "Pourquoi écrire une définition pour chaque statistique ?", options: ["Pour que tout le monde compte de la même façon", "Pour la rallonger", "Pour embrouiller les adversaires", "Ce n'est pas nécessaire"], answer: 0, why: "Un comptage cohérent rend les données fiables." },
          { objective: "O2", q: "Qui doit avoir l'accès en modification au tableau de statistiques ?", options: ["Tout le monde sur Internet", "Les entraîneurs adverses", "Les fans", "Le staff qui relève les statistiques"], answer: 3, why: "Limitez la modification aux personnes qui en ont besoin." },
          { objective: "O2", q: "Qu'est-ce qui ne doit PAS aller dans un tableau de statistiques d'équipe ?", options: ["Les points par quart-temps", "Les notes médicales d'un joueur", "Les pertes de balle", "Les compositions"], answer: 1, why: "Les infos médicales ont leur place dans des systèmes officiels protégés." },
          { objective: "O3", q: "Une composition a joué quatre minutes et a fini à +6. Vous devez :", options: ["La titulariser à chaque match", "La traiter comme une question à approfondir", "Ignorer toutes les données", "La publier en ligne"], answer: 1, why: "Les petits échantillons peuvent tromper." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Scouting et communication",
      lessons: [
        {
          objectives: ["O4"],
          title: "Étudier un adversaire avec l'IA",
          minutes: 6,
          goal: "Écrire un résumé de scouting d'une page sur un adversaire à partir d'informations publiques.",
          text: [
            "Le scouting, c'est apprendre comment joue un adversaire avant de l'affronter. Utilisez des sources publiques : résultats passés, feuilles de match publiées, pages de statistiques de la ligue, et vidéos de match que votre équipe possède ou qui sont publiques. Suivez les règles de votre ligue sur l'échange de vidéos et le scouting.",
            "Regardez avec trois questions : que font-ils le plus en attaque ? Que font-ils le plus en défense ? Qui sont leurs joueurs clés, et qu'aiment faire ces joueurs ?",
            "Collez vos notes dans un assistant IA et demandez : « Transforme ces notes de scouting en résumé d'une page : leur attaque, leur défense, leurs joueurs clés, trois clés pour les battre. Puces courtes. » Vérifiez que chaque point vient de vos notes, pas de suppositions de l'IA."
          ],
          steps: ["Rassemblez les résultats, statistiques et vidéos autorisées publics.", "Regardez avec trois questions.", "Prenez des notes avec les minutages.", "Demandez à l'IA un résumé d'une page à partir de vos notes seulement.", "Vérifiez chaque puce avec vos notes."],
          words: [["Rapport de scouting", "un résumé de la façon dont joue un adversaire et de comment le battre."], ["Tendance de jeu", "quelque chose qu'une équipe ou un joueur fait souvent dans une situation donnée."]],
          slides: [
            { title: "Sources publiques", bullets: ["Résultats et feuilles de match", "Pages de statistiques de la ligue", "Vidéos de match autorisées"] },
            { title: "Trois questions", bullets: ["Leur attaque", "Leur défense", "Les joueurs clés et ce qu'ils aiment faire"] },
            { title: "Résumé avec l'IA", bullets: ["À partir de vos notes seulement", "Trois clés pour les battre", "Vérifiez chaque puce"] }
          ],
          tryIt: "Choisissez un vrai adversaire à venir. Rassemblez les informations publiques, prenez des notes avec les trois questions et utilisez l'IA pour faire un résumé d'une page. Vérifiez chaque puce.",
          youCanNow: "écrire un résumé de scouting d'une page sur un adversaire à partir de sources publiques avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O4", q: "Laquelle fait partie des trois questions de scouting ?", options: ["Quelle est leur mascotte ?", "Que font-ils le plus en attaque ?", "Combien de supporters ont-ils ?", "De quelle couleur sont leurs maillots ?"], answer: 1, why: "Regardez l'attaque, la défense et les joueurs clés." },
            { objective: "O4", q: "Vous voulez une vidéo d'un adversaire qui n'est pas publique. Que faites-vous ?", options: ["Filmer leur entraînement en cachette", "Demander à un ami de leur équipe de vous l'envoyer", "Suivre les règles d'échange de vidéos de votre ligue", "Utiliser l'IA pour deviner ce qu'ils font"], answer: 2, why: "Suivez les règles de votre ligue sur l'échange de vidéos et le scouting." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Une communication d'équipe claire",
          minutes: 5,
          goal: "Transformer les données et le scouting en messages d'équipe courts et clairs.",
          text: [
            "Les joueurs n'ont pas besoin de tous les chiffres. Ils ont besoin d'un à trois points clairs : « Ils pressent après chaque panier marqué. Remise en jeu vers le centre. » Les messages courts restent en tête.",
            "Utilisez l'IA pour transformer votre résumé en plusieurs versions : un discours de 30 secondes pour le vestiaire, une diapositive pour la séance vidéo et un court message pour l'application de communication officielle de l'équipe. Respectez les règles de votre école sur la façon dont les entraîneurs contactent les joueurs, surtout les mineurs.",
            "Félicitez en public, corrigez en privé. Les messages d'équipe parlent de l'équipe, pas des erreurs d'un joueur."
          ],
          steps: ["Choisissez un à trois points clés.", "Demandez à l'IA un discours de 30 secondes, une diapositive et un court message.", "Envoyez-les par le canal officiel de votre équipe.", "Gardez les retours individuels en privé."],
          words: [["Point clé", "la chose que les joueurs doivent retenir."], ["Canal officiel", "le moyen de communication que votre école ou votre club approuve pour les messages d'équipe."]],
          slides: [
            { title: "Moins, c'est mieux", bullets: ["Un à trois points", "Les messages courts restent en tête"] },
            { title: "Trois versions avec l'IA", bullets: ["Discours de 30 secondes au vestiaire", "Une diapositive", "Un court message d'équipe"] },
            { title: "Respect", bullets: ["Utilisez les canaux officiels", "Félicitez en public, corrigez en privé"] }
          ],
          tryIt: "Prenez votre résumé de scouting et utilisez l'IA pour faire un discours de 30 secondes et un message d'équipe de trois phrases avec trois points clés au maximum.",
          youCanNow: "transformer les données en messages d'équipe courts, clairs et respectueux.",
          quickCheck: [
            { objective: "O5", q: "De quoi les joueurs ont-ils besoin dans un message d'équipe ?", options: ["D'un à trois points clairs", "De tous les chiffres du tableau", "D'un long rapport", "Des statistiques des autres équipes"], answer: 0, why: "Les messages courts avec quelques points clairs restent en tête." },
            { objective: "O5", q: "Un joueur refait sans cesse la même erreur. Comment en parlez-vous ?", options: ["Le signaler dans la discussion d'équipe", "Le publier sur la page de l'équipe", "Le montrer sur la diapositive de la séance vidéo", "En parler avec le joueur en privé"], answer: 3, why: "Félicitez en public, corrigez en privé." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vie privée et équité dans les données d'équipe",
          minutes: 5,
          goal: "Fixer des règles de données d'équipe qui protègent les joueurs et gardent les décisions équitables.",
          text: [
            "Les données des joueurs sont personnelles. Les statistiques, les vidéos et surtout les informations de santé, des objets connectés et scolaires demandent de l'attention. Ne collectez que ce dont vous avez besoin, gardez-le dans des endroits approuvés et supprimez ce dont vous n'avez plus besoin selon les règles de votre école.",
            "Ne collez pas de noms complets, d'informations de santé ou de détails privés dans les outils d'IA. Utilisez des numéros ou des initiales. Beaucoup d'écoles et de ligues ont des règles sur les données des élèves et les applications approuvées ; demandez à votre directeur sportif.",
            "Équité : les chiffres peuvent manquer des choses comme l'effort, le leadership ou une défense qui n'apparaît pas sur la feuille de match, et les petits échantillons peuvent être injustes pour les remplaçants. Utilisez les données pour poser de meilleures questions, et expliquez vos décisions aux joueurs en les traitant comme des personnes."
          ],
          steps: ["Ne collectez que ce dont vous avez besoin.", "Stockez-le dans des endroits approuvés.", "Utilisez des numéros ou des initiales avec l'IA.", "Demandez à votre directeur sportif les règles sur les données et les applications.", "Expliquez vos décisions aux joueurs comme à des personnes."],
          words: [["Données des élèves", "les informations sur les élèves, que les écoles doivent protéger."], ["Biais", "une injustice qui peut venir de données incomplètes ou de suppositions."]],
          slides: [
            { title: "Les données des joueurs sont personnelles", bullets: ["Ne collectez que le nécessaire", "Seulement dans des endroits approuvés", "Supprimez ce qui ne sert plus"] },
            { title: "Avec l'IA", bullets: ["Numéros ou initiales", "Pas d'infos de santé ni privées", "Vérifiez les règles d'applications de l'école"] },
            { title: "Équité", bullets: ["Les chiffres manquent l'effort et le leadership", "Les petits échantillons peuvent être injustes", "Expliquez les décisions aux joueurs"] }
          ],
          tryIt: "Tâche finale : écrivez cinq règles de données pour l'équipe, puis terminez votre tableau de statistiques, une tendance, votre résumé de scouting d'une page et un message d'équipe qui protège la vie privée des joueurs.",
          youCanNow: "utiliser les données d'équipe d'une façon qui protège les joueurs et garde les décisions équitables.",
          quickCheck: [
            { objective: "O6", q: "Que faire des données de joueurs dont vous n'avez plus besoin ?", options: ["Les garder pour toujours", "Les supprimer selon les règles de votre établissement", "Les partager avec d'autres équipes", "Les publier en ligne"], answer: 1, why: "Ne relevez que ce dont vous avez besoin et supprimez ce qui ne sert plus, selon les règles de votre établissement." },
            { objective: "O6", q: "Un remplaçant a de mauvais chiffres sur seulement six minutes de jeu. Qu'est-ce qui est équitable ?", options: ["L'exclure de l'équipe", "Partager ses statistiques avec tout le monde", "Traiter ce petit échantillon avec prudence et lui parler en tant que personne", "Ne plus jamais le faire jouer"], answer: 2, why: "Les petits échantillons peuvent être injustes pour les remplaçants ; expliquez les décisions aux joueurs en tant que personnes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Scouting et communication",
        questions: [
          { objective: "O4", q: "Quelle source est loyale pour le scouting ?", options: ["Filmer en secret leur entraînement fermé", "Pirater leur application", "Demander leurs mots de passe à leurs joueurs", "Les feuilles de match publiques et les vidéos autorisées"], answer: 3, why: "Utilisez des sources publiques et autorisées, selon les règles de la ligue." },
          { objective: "O4", q: "L'IA ajoute un point clé qui n'est pas dans vos notes. Vous :", options: ["Le retirez ou le vérifiez vous-même", "Le gardez", "Le mettez en gras", "Dites à l'équipe que c'est vrai"], answer: 0, why: "N'utilisez que ce que vos notes confirment." },
          { objective: "O5", q: "Combien de points clés un message d'équipe doit-il avoir ?", options: ["Vingt", "Aucun", "Un à trois", "Toutes les statistiques"], answer: 2, why: "Les messages courts restent en tête." },
          { objective: "O5", q: "Où doivent se faire les corrections individuelles ?", options: ["Dans le groupe de discussion de l'équipe", "Sur les réseaux sociaux", "Devant les fans", "En privé"], answer: 3, why: "Félicitez en public, corrigez en privé." },
          { objective: "O6", q: "Que coller dans l'IA à la place des noms des joueurs ?", options: ["Les noms complets et les dates de naissance", "Des numéros ou des initiales", "Des notes médicales", "Les adresses personnelles"], answer: 1, why: "Cela protège la vie privée des joueurs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les sports collectifs",
    questions: [
      { objective: "O1", q: "L'analyse d'équipe, c'est :", options: ["Seulement compter les fans", "Remplacer l'entraîneur", "Utiliser des chiffres pour comprendre et améliorer le jeu d'une équipe", "Vendre des billets"], answer: 2, why: "Elle soutient de meilleures décisions d'équipe." },
      { objective: "O1", q: "Une équipe qui joue en contre-attaque doit suivre :", options: ["Les points en transition et les pertes de balle", "Les couleurs des maillots", "Les horaires du bus", "Le nombre de spectateurs"], answer: 0, why: "Ils correspondent au jeu de contre-attaque." },
      { objective: "O1", q: "Avec combien de statistiques d'équipe commencer ?", options: ["Trois à cinq", "Cinquante", "Aucune", "Cent"], answer: 0, why: "Peu de statistiques que vous pouvez relever à chaque match." },
      { objective: "O1", q: "Qui peut aider à relever les statistiques ?", options: ["L'arbitre", "L'adversaire", "Un responsable, un bénévole ou un joueur blessé", "Personne"], answer: 2, why: "Utilisez les personnes dont vous disposez." },
      { objective: "O2", q: "Un tableau de statistiques d'équipe doit être :", options: ["Public sur le web", "Partagé seulement avec les personnes qui en ont besoin", "Envoyé aux adversaires", "Imprimé pour les fans"], answer: 1, why: "Limitez l'accès pour protéger les joueurs." },
      { objective: "O2", q: "L'accès en lecture seule veut dire que les gens :", options: ["Peuvent le supprimer", "Peuvent tout modifier", "Ne peuvent pas l'ouvrir", "Peuvent voir mais pas modifier"], answer: 3, why: "Il protège vos données." },
      { objective: "O3", q: "L'écart de points, c'est :", options: ["Le total des points", "Seulement les lancers francs", "Les points marqués moins les points encaissés", "Votre nombre d'abonnés"], answer: 2, why: "Il montre comment s'en sort une composition." },
      { objective: "O3", q: "Un tableau croisé dynamique :", options: ["Est un type d'exercice", "Est un geste de basket", "Supprime des lignes", "Regroupe et totalise des données"], answer: 3, why: "Il résume les données rapidement." },
      { objective: "O3", q: "Quand vous interrogez l'IA sur les compositions, demandez-lui aussi de :", options: ["Montrer ses calculs", "Choisir les titulaires", "Publier les résultats", "Deviner"], answer: 0, why: "Vous devez vérifier son travail." },
      { objective: "O3", q: "Les tendances tirées des données se traitent mieux comme :", options: ["Des réponses définitives", "Des questions pour l'entraînement et la vidéo", "Des secrets", "Des publications sur les réseaux"], answer: 1, why: "Les données soutiennent le jugement de l'entraîneur." },
      { objective: "O4", q: "Un rapport de scouting résume :", options: ["Seulement vos propres statistiques", "Les collations de l'équipe", "La façon dont joue un adversaire et comment le battre", "Les noms des arbitres"], answer: 2, why: "Il prépare votre équipe." },
      { objective: "O4", q: "Une tendance de jeu, c'est :", options: ["Quelque chose qu'une équipe fait souvent dans une situation", "Une action unique", "Une règle", "Un score"], answer: 0, why: "Les tendances aident à prévoir ce qu'ils feront." },
      { objective: "O4", q: "Le scouting doit suivre :", options: ["Aucune règle", "Les souhaits de l'adversaire", "Les tendances des réseaux sociaux", "Les règles de votre ligue sur la vidéo et le scouting"], answer: 3, why: "Les ligues fixent des règles de scouting loyales." },
      { objective: "O4", q: "Les résumés de scouting faits avec l'IA doivent venir :", options: ["De suppositions de l'IA", "De vos propres notes seulement", "De rumeurs", "De commentaires de fans"], answer: 1, why: "Vos notes sont vos preuves." },
      { objective: "O5", q: "Un discours de 30 secondes au vestiaire doit avoir :", options: ["Toutes les statistiques", "Un à trois points clés", "Aucun point", "Dix diapositives"], answer: 1, why: "Les joueurs retiennent quelques points clairs." },
      { objective: "O5", q: "Les entraîneurs doivent contacter les joueurs par :", options: ["N'importe quelle application", "Des comptes secrets", "Des commentaires publics", "Le canal approuvé par l'école ou le club"], answer: 3, why: "Les règles protègent les mineurs et les entraîneurs." },
      { objective: "O6", q: "Quelles données demandent le plus d'attention ?", options: ["Les informations de santé et scolaires", "Les scores finaux", "Les dates des matchs", "Les couleurs de l'équipe"], answer: 0, why: "Elles sont privées et protégées." },
      { objective: "O6", q: "Qui peut vous dire quelles applications votre école autorise pour les données des élèves ?", options: ["Un fan", "Une IA", "Le directeur sportif", "Un adversaire"], answer: 2, why: "Les écoles fixent les règles sur les données." },
      { objective: "O6", q: "Les feuilles de match peuvent manquer :", options: ["Les points", "Les rebonds", "Les scores finaux", "L'effort, le leadership et la défense sans ballon"], answer: 3, why: "Tout n'apparaît pas dans les chiffres." },
      { objective: "O6", q: "Quand une décision s'appuie sur des données, les entraîneurs doivent :", options: ["La cacher", "L'expliquer aux joueurs comme à des personnes", "Accuser le tableur", "La publier"], answer: 1, why: "Les joueurs méritent respect et clarté." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      2,
      4,
      8,
      10,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Tableau de statistiques",
        objective: "O2",
        notYet: "Moins de trois matchs, des statistiques floues, ou un partage risqué ou des données privées dans le tableau.",
        meets: "Trois à cinq statistiques définies pour trois matchs ou entraînements, un onglet de synthèse et un accès sûr selon le rôle.",
        exceeds: "Une personne est chargée de chaque statistique et les définitions sont sur un onglet que tout le monde peut lire."
      },
      {
        name: "Tendance trouvée",
        objective: "O3",
        notYet: "Pas de tendance, des calculs de l'IA non vérifiés, ou des noms complets utilisés avec l'IA.",
        meets: "Une tendance de composition ou de jeu avec des calculs vérifiés, en utilisant seulement des numéros ou des initiales.",
        exceeds: "Note la taille de l'échantillon et transforme la tendance en question d'entraînement ou de vidéo pour l'entraîneur."
      },
      {
        name: "Résumé de scouting",
        objective: "O4",
        notYet: "Des points qui ne viennent pas des notes, ou des sources hors des règles de la ligue.",
        meets: "Une page avec l'attaque, la défense, les joueurs clés et trois clés, chaque point tiré des notes de l'apprenant et de sources autorisées.",
        exceeds: "Comprend des repères temporels qui montrent chaque point clé."
      },
      {
        name: "Message d'équipe et vie privée",
        objective: "O5",
        notYet: "Trop de points, ou l'erreur ou les informations privées d'un joueur sont partagées.",
        meets: "Un à trois points clés envoyés par le canal autorisé, sans aucune information privée sur les joueurs.",
        exceeds: "Des versions pour un discours au vestiaire, une diapositive et un message, toutes respectueuses de la vie privée."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les équipes qui relèvent encore leurs statistiques définies 30 jours plus tard (questionnaire de suivi)",
      "Les entraîneurs qui disent avoir changé un entraînement ou un plan de jeu grâce à une tendance ou à un résumé de scouting",
      "Les équipes qui adoptent des règles écrites de confidentialité des données, approuvées par le directeur sportif"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un compte Google gratuit pour Google Sheets",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Les résultats publics, les feuilles de match ou les vidéos autorisées d'un adversaire",
      "Les règles de votre établissement ou de votre ligue sur les données des élèves et les applications autorisées",
      "Environ 60 minutes de leçons, plus les statistiques de trois matchs ou entraînements"
    ],
    facilitatorNotes: [
      "Vérifiez avec le directeur sportif quelles applications sont autorisées pour les données des élèves avant que les équipes créent leurs tableaux.",
      "Montrez comment remplacer les noms par des numéros ou des initiales avant de coller quoi que ce soit dans l'IA.",
      "Rappelez au staff que les informations de santé, scolaires et de contact ne vont jamais dans le tableau de statistiques.",
      "Suivez les règles de la ligue sur le scouting et l'échange de vidéos ; ne filmez pas les entraînements fermés des autres équipes.",
      "Parlez d'équité : les données ouvrent des questions, l'entraîneur décide, et les décisions sont expliquées aux joueurs en tant que personnes."
    ]
  }
};
