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
  chapters: [
    {
      name: "Chapitre 1 : Les données de l'équipe",
      lessons: [
        {
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
          youCanNow: "choisir et définir des statistiques d'équipe adaptées à votre façon de jouer."
        },
        {
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
          youCanNow: "créer un tableau de statistiques d'équipe partagé avec un accès sûr."
        },
        {
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
          youCanNow: "trouver des tendances de composition et de jeu et les traiter comme des questions pour l'entraîneur."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les données de l'équipe",
        questions: [
          { q: "Par quoi l'analyse d'équipe doit-elle commencer ?", options: ["Ce que suivent les pros", "Toutes les statistiques possibles", "L'identité de votre équipe et la façon dont vous voulez jouer", "Les chiffres des réseaux sociaux"], answer: 2, why: "Les statistiques doivent correspondre à votre style de jeu." },
          { q: "Pourquoi écrire une définition pour chaque statistique ?", options: ["Pour que tout le monde compte de la même façon", "Pour la rallonger", "Pour embrouiller les adversaires", "Ce n'est pas nécessaire"], answer: 0, why: "Un comptage cohérent rend les données fiables." },
          { q: "Qui doit avoir l'accès en modification au tableau de statistiques ?", options: ["Tout le monde sur Internet", "Les entraîneurs adverses", "Les fans", "Le staff qui relève les statistiques"], answer: 3, why: "Limitez la modification aux personnes qui en ont besoin." },
          { q: "Qu'est-ce qui ne doit PAS aller dans un tableau de statistiques d'équipe ?", options: ["Les points par quart-temps", "Les notes médicales d'un joueur", "Les pertes de balle", "Les compositions"], answer: 1, why: "Les infos médicales ont leur place dans des systèmes officiels protégés." },
          { q: "Une composition a joué quatre minutes et a fini à +6. Vous devez :", options: ["La titulariser à chaque match", "La traiter comme une question à approfondir", "Ignorer toutes les données", "La publier en ligne"], answer: 1, why: "Les petits échantillons peuvent tromper." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Scouting et communication",
      lessons: [
        {
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
          youCanNow: "écrire un résumé de scouting d'une page sur un adversaire à partir de sources publiques avec l'aide de l'IA."
        },
        {
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
          youCanNow: "transformer les données en messages d'équipe courts, clairs et respectueux."
        },
        {
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
          youCanNow: "utiliser les données d'équipe d'une façon qui protège les joueurs et garde les décisions équitables."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Scouting et communication",
        questions: [
          { q: "Quelle source est loyale pour le scouting ?", options: ["Filmer en secret leur entraînement fermé", "Pirater leur application", "Demander leurs mots de passe à leurs joueurs", "Les feuilles de match publiques et les vidéos autorisées"], answer: 3, why: "Utilisez des sources publiques et autorisées, selon les règles de la ligue." },
          { q: "L'IA ajoute un point clé qui n'est pas dans vos notes. Vous :", options: ["Le retirez ou le vérifiez vous-même", "Le gardez", "Le mettez en gras", "Dites à l'équipe que c'est vrai"], answer: 0, why: "N'utilisez que ce que vos notes confirment." },
          { q: "Combien de points clés un message d'équipe doit-il avoir ?", options: ["Vingt", "Aucun", "Un à trois", "Toutes les statistiques"], answer: 2, why: "Les messages courts restent en tête." },
          { q: "Où doivent se faire les corrections individuelles ?", options: ["Dans le groupe de discussion de l'équipe", "Sur les réseaux sociaux", "Devant les fans", "En privé"], answer: 3, why: "Félicitez en public, corrigez en privé." },
          { q: "Que coller dans l'IA à la place des noms des joueurs ?", options: ["Les noms complets et les dates de naissance", "Des numéros ou des initiales", "Des notes médicales", "Les adresses personnelles"], answer: 1, why: "Cela protège la vie privée des joueurs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les sports collectifs",
    questions: [
      { q: "L'analyse d'équipe, c'est :", options: ["Seulement compter les fans", "Remplacer l'entraîneur", "Utiliser des chiffres pour comprendre et améliorer le jeu d'une équipe", "Vendre des billets"], answer: 2, why: "Elle soutient de meilleures décisions d'équipe." },
      { q: "Une équipe qui joue en contre-attaque doit suivre :", options: ["Les points en transition et les pertes de balle", "Les couleurs des maillots", "Les horaires du bus", "Le nombre de spectateurs"], answer: 0, why: "Ils correspondent au jeu de contre-attaque." },
      { q: "Avec combien de statistiques d'équipe commencer ?", options: ["Trois à cinq", "Cinquante", "Aucune", "Cent"], answer: 0, why: "Peu de statistiques que vous pouvez relever à chaque match." },
      { q: "Qui peut aider à relever les statistiques ?", options: ["L'arbitre", "L'adversaire", "Un responsable, un bénévole ou un joueur blessé", "Personne"], answer: 2, why: "Utilisez les personnes dont vous disposez." },
      { q: "Un tableau de statistiques d'équipe doit être :", options: ["Public sur le web", "Partagé seulement avec les personnes qui en ont besoin", "Envoyé aux adversaires", "Imprimé pour les fans"], answer: 1, why: "Limitez l'accès pour protéger les joueurs." },
      { q: "L'accès en lecture seule veut dire que les gens :", options: ["Peuvent le supprimer", "Peuvent tout modifier", "Ne peuvent pas l'ouvrir", "Peuvent voir mais pas modifier"], answer: 3, why: "Il protège vos données." },
      { q: "L'écart de points, c'est :", options: ["Le total des points", "Seulement les lancers francs", "Les points marqués moins les points encaissés", "Votre nombre d'abonnés"], answer: 2, why: "Il montre comment s'en sort une composition." },
      { q: "Un tableau croisé dynamique :", options: ["Est un type d'exercice", "Est un geste de basket", "Supprime des lignes", "Regroupe et totalise des données"], answer: 3, why: "Il résume les données rapidement." },
      { q: "Quand vous interrogez l'IA sur les compositions, demandez-lui aussi de :", options: ["Montrer ses calculs", "Choisir les titulaires", "Publier les résultats", "Deviner"], answer: 0, why: "Vous devez vérifier son travail." },
      { q: "Les tendances tirées des données se traitent mieux comme :", options: ["Des réponses définitives", "Des questions pour l'entraînement et la vidéo", "Des secrets", "Des publications sur les réseaux"], answer: 1, why: "Les données soutiennent le jugement de l'entraîneur." },
      { q: "Un rapport de scouting résume :", options: ["Seulement vos propres statistiques", "Les collations de l'équipe", "La façon dont joue un adversaire et comment le battre", "Les noms des arbitres"], answer: 2, why: "Il prépare votre équipe." },
      { q: "Une tendance de jeu, c'est :", options: ["Quelque chose qu'une équipe fait souvent dans une situation", "Une action unique", "Une règle", "Un score"], answer: 0, why: "Les tendances aident à prévoir ce qu'ils feront." },
      { q: "Le scouting doit suivre :", options: ["Aucune règle", "Les souhaits de l'adversaire", "Les tendances des réseaux sociaux", "Les règles de votre ligue sur la vidéo et le scouting"], answer: 3, why: "Les ligues fixent des règles de scouting loyales." },
      { q: "Les résumés de scouting faits avec l'IA doivent venir :", options: ["De suppositions de l'IA", "De vos propres notes seulement", "De rumeurs", "De commentaires de fans"], answer: 1, why: "Vos notes sont vos preuves." },
      { q: "Un discours de 30 secondes au vestiaire doit avoir :", options: ["Toutes les statistiques", "Un à trois points clés", "Aucun point", "Dix diapositives"], answer: 1, why: "Les joueurs retiennent quelques points clairs." },
      { q: "Les entraîneurs doivent contacter les joueurs par :", options: ["N'importe quelle application", "Des comptes secrets", "Des commentaires publics", "Le canal approuvé par l'école ou le club"], answer: 3, why: "Les règles protègent les mineurs et les entraîneurs." },
      { q: "Quelles données demandent le plus d'attention ?", options: ["Les informations de santé et scolaires", "Les scores finaux", "Les dates des matchs", "Les couleurs de l'équipe"], answer: 0, why: "Elles sont privées et protégées." },
      { q: "Qui peut vous dire quelles applications votre école autorise pour les données des élèves ?", options: ["Un fan", "Une IA", "Le directeur sportif", "Un adversaire"], answer: 2, why: "Les écoles fixent les règles sur les données." },
      { q: "Les feuilles de match peuvent manquer :", options: ["Les points", "Les rebonds", "Les scores finaux", "L'effort, le leadership et la défense sans ballon"], answer: 3, why: "Tout n'apparaît pas dans les chiffres." },
      { q: "Quand une décision s'appuie sur des données, les entraîneurs doivent :", options: ["La cacher", "L'expliquer aux joueurs comme à des personnes", "Accuser le tableur", "La publier"], answer: 1, why: "Les joueurs méritent respect et clarté." }
    ]
  }
};
