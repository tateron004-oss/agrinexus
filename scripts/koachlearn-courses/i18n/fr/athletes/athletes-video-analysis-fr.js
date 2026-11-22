"use strict";

// Koach Learn course (French translation of athletes/athletes-video-analysis.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// COUNTIF is kept as the function name, with its French-locale name NB.SI given the first time.

module.exports = {
  id: "athletes-video-analysis-fr",
  lang: "fr",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Analyse vidéo et intelligence de jeu",
  skills: "Filmer des vidéos de match et d'entraînement exploitables, Regarder la vidéo avec une question, Étiqueter les actions dans un tableur, Utiliser l'IA pour résumer les actions étiquetées, Transformer la vidéo en un axe de travail à l'entraînement",
  outcome: "filmer un match ou un entraînement, étiqueter au moins 20 actions dans un tableur en gardant une question claire en tête, utiliser un assistant IA pour résumer les tendances et en tirer un axe de travail validé avec votre entraîneur.",
  about: [
    "Ce cours s'adresse aux sportifs et aux entraîneurs qui veulent apprendre de la vidéo sans logiciel coûteux. Vous utiliserez l'appareil photo d'un téléphone, un tableur gratuit et un assistant IA gratuit.",
    "Regarder de la vidéo est une compétence. La plupart des gens ne regardent que les meilleurs moments. Vous apprendrez à regarder avec une question, à étiqueter ce qui se passe, à trouver des tendances et à en faire quelque chose à travailler.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Filmez un match ou un entraînement (avec autorisation), choisissez une question, étiquetez au moins 20 actions dans un tableau Google Sheets, demandez à un assistant IA de résumer les tendances à partir de vos étiquettes et écrivez un axe de travail pour l'entraînement. Revoyez-le avec votre entraîneur.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs et des entraîneurs de lycée, d'université et de club qui veulent apprendre des vidéos de match et d'entraînement sans logiciel coûteux.",
    startingPoint: "Ils savent filmer avec un téléphone et ont déjà regardé des vidéos de match, surtout pour les meilleurs moments. Peu ont filmé avec un plan, étiqueté des actions, compté des tendances dans un tableur ou vérifié un résumé d'IA avec leurs propres comptes.",
    gap: "Regarder une vidéo sans question montre surtout les meilleurs moments et les grosses erreurs, alors l'entraînement ne change pas. Étiqueter et compter transforme la vidéo en preuves qui mènent à un axe de travail clair et à une meilleure discussion avec l'entraîneur.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone avec caméra, Google Sheets gratuit et un assistant IA gratuit ; aucun logiciel payant nécessaire",
      "Environ 60 minutes de leçons, plus le temps de filmer et d'étiqueter un match ou un entraînement",
      "Les règles de l'équipe, de l'établissement et de la ligue sur le tournage ; les vidéos de sport jeunes montrent les enfants d'autres personnes",
      "Les noms des autres joueurs et leurs informations privées restent hors des outils d'IA"
    ],
    prerequisites: "Aucun. « Les outils d'IA pour les sportifs » aide si vous n'avez jamais utilisé Google Sheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un téléphone, à un match ou à un entraînement", action: "filmer une vidéo exploitable depuis un endroit haut et central, avec un plan large et stable", standard: "avec l'autorisation de votre entraîneur avant de filmer et avant de partager" },
    { id: "O2", condition: "Avant de regarder la vidéo d'un match ou d'un entraînement", action: "écrire une question précise et regarder deux fois, en faisant pause sur les actions qui y répondent", standard: "avec une question par visionnage et une courte note pour chaque action liée" },
    { id: "O3", condition: "Avec Google Sheets et votre vidéo", action: "étiqueter les actions avec N° d'action, Temps, Situation, Ce qui s'est passé, Résultat et Note", standard: "en étiquetant au moins 20 actions avec les mêmes mots d'étiquette à chaque fois" },
    { id: "O4", condition: "À partir d'au moins 20 actions étiquetées", action: "compter vos étiquettes avec le tri, le filtre ou COUNTIF (NB.SI) et écrire les deux principales tendances avec des chiffres", standard: "en marquant « à revoir » toute tendance basée sur seulement quelques actions" },
    { id: "O5", condition: "Avec un assistant IA gratuit et votre tableau d'étiquettes", action: "demander un résumé des principales tendances avec les comptes et le vérifier avec vos propres comptes", standard: "avec les noms des autres joueurs et leurs informations privées retirés, et chaque compte identique à votre tableau" },
    { id: "O6", condition: "À partir de votre tendance la plus forte", action: "écrire un axe de travail et le présenter à votre entraîneur avec des chiffres, des repères temporels et une question", standard: "avec l'axe validé par votre entraîneur et un plan pour refilmer et réétiqueter plus tard" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Obtenir de bonnes images",
      lessons: [
        {
          objectives: ["O1"],
          title: "Filmer une vidéo vraiment exploitable",
          minutes: 5,
          goal: "Installer un téléphone pour filmer une vidéo de match ou d'entraînement exploitable.",
          text: [
            "Une bonne vidéo commence par un bon emplacement. Filmez d'en haut si possible, par exemple du haut des gradins, pour voir toute l'action et l'espacement entre les joueurs. Tenez le téléphone à l'horizontale (mode paysage) et gardez-le stable avec un trépied ou en l'appuyant.",
            "Suivez le ballon, mais gardez assez de terrain dans le cadre pour voir ce que font les joueurs sans ballon. Ne zoomez pas trop.",
            "Demandez l'autorisation. Votre équipe, votre établissement ou votre ligue peut avoir des règles sur le tournage, et les enfants d'autres familles apparaissent dans les vidéos de sport jeunes. Demandez à votre entraîneur avant de filmer et avant de partager quoi que ce soit."
          ],
          steps: ["Demandez à votre entraîneur l'autorisation de filmer.", "Trouvez un emplacement en hauteur et central.", "Mettez le téléphone à l'horizontale et stabilisez-le.", "Gardez un cadre large ; suivez le ballon.", "Vérifiez la batterie et l'espace de stockage avant le match."],
          words: [["Mode paysage", "tenir le téléphone à l'horizontale, pour une vidéo large."], ["Trépied", "un support à trois pieds qui tient un appareil stable."]],
          slides: [
            { title: "Emplacement", bullets: ["En hauteur et central si possible", "Voir toute l'action et l'espacement"] },
            { title: "Réglage", bullets: ["Téléphone à l'horizontale", "Stable : trépied ou appui", "Cadre large ; suivez le ballon"] },
            { title: "Avant de filmer", bullets: ["Demandez à votre entraîneur", "Vérifiez batterie et stockage", "Demandez avant de partager"] }
          ],
          tryIt: "Au prochain entraînement, avec l'accord de votre entraîneur, filmez cinq minutes depuis l'endroit le plus haut possible. Regardez la vidéo : voyez-vous tous les joueurs impliqués dans chaque action ?",
          youCanNow: "installer un téléphone pour filmer une vidéo de match ou d'entraînement exploitable, avec autorisation.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi garder un plan large au lieu de zoomer de près ?", options: ["Une vidéo large prend moins de stockage", "Les gros plans sont interdits", "Pour voir ce que font les joueurs sans le ballon", "Le zoom vide la batterie"], answer: 2, why: "Un plan large montre les espaces et les joueurs loin du ballon." },
            { objective: "O1", q: "Vous voulez filmer le match de jeunes de votre petite sœur et le publier. Que faites-vous d'abord ?", options: ["Le publier et le retirer si quelqu'un se plaint", "Demander à l'entraîneur les règles avant de filmer et de partager", "Filmer seulement l'autre équipe", "Flouter votre propre visage"], answer: 1, why: "Les équipes et les ligues peuvent avoir des règles sur le tournage, et la vidéo montre les enfants d'autres personnes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Regarder la vidéo avec une question",
          minutes: 5,
          goal: "Choisir une question claire avant de regarder la vidéo.",
          text: [
            "Si vous regardez une vidéo sans plan, vous remarquez surtout les meilleurs moments et vos pires erreurs. Les entraîneurs regardent avec une question.",
            "Les bonnes questions sont précises : « Où est-ce que je perds le ballon ? » « À quelle vitesse je reviens en défense ? » « Quelles rotations en réception de service nous font perdre des points ? » « Que fait l'autre équipe sur les troisièmes tentatives ? »",
            "Une question par visionnage. Regardez une fois à vitesse normale pour avoir la vue d'ensemble, puis une deuxième fois en mettant sur pause à chaque action qui répond à votre question."
          ],
          steps: ["Écrivez une question précise.", "Regardez une fois à vitesse normale.", "Regardez à nouveau et faites pause à chaque action liée à votre question.", "Écrivez une courte note pour chaque action."],
          words: [["Étude vidéo", "regarder la vidéo des matchs ou des entraînements pour apprendre et progresser."], ["Intelligence de jeu", "comprendre pourquoi les actions se produisent, pas seulement ce qui s'est passé."]],
          slides: [
            { title: "Sans plan = meilleurs moments seulement", bullets: ["Vous voyez les grosses actions et les grosses erreurs", "Vous ratez les tendances"] },
            { title: "Des questions précises", bullets: ["« Où est-ce que je perds le ballon ? »", "« À quelle vitesse je reviens en défense ? »", "« Que font-ils sur les troisièmes tentatives ? »"] },
            { title: "Deux visionnages", bullets: ["1. Vitesse normale : vue d'ensemble", "2. Pause sur les actions qui répondent à la question"] }
          ],
          tryIt: "Écrivez trois questions possibles pour votre sport et votre poste. Choisissez-en une et regardez cinq minutes de vidéo avec elle, en notant chaque fois qu'elle apparaît.",
          youCanNow: "regarder une vidéo avec une question claire et noter les actions qui y répondent.",
          quickCheck: [
            { objective: "O2", q: "Laquelle est une question précise pour une vidéo ?", options: ["À quelle vitesse est-ce que je reviens en défense ?", "Avons-nous bien joué ?", "Était-ce une bonne saison ?", "Qui est le meilleur joueur ?"], answer: 0, why: "Les questions précises renvoient à des actions que vous pouvez mettre en pause et noter." },
            { objective: "O2", q: "Vous avez deux questions sur votre vidéo. Que faites-vous ?", options: ["Répondre aux deux en un seul visionnage", "Laisser tomber la deuxième question", "Demander à l'IA de la regarder à votre place", "Regarder avec une seule question à la fois"], answer: 3, why: "Choisissez une question par visionnage." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Étiqueter les actions dans un tableur",
          minutes: 6,
          goal: "Étiqueter les actions dans Google Sheets pour pouvoir compter les tendances.",
          text: [
            "Étiqueter, c'est écrire les mêmes quelques mots pour chaque action. Cela transforme la vidéo en données que l'on peut compter.",
            "Créez les colonnes : N° d'action, Temps dans la vidéo, Situation (par exemple « contre-attaque » ou « 2e tentative et long »), Ce qui s'est passé, Résultat (bon, neutre ou mauvais) et Note. Utilisez toujours les mêmes mots, pour que « perte de balle » soit toujours « perte de balle », et pas parfois « ballon perdu ».",
            "Des applications vidéo d'équipe comme Hudl étiquettent les actions pour beaucoup d'établissements ; si votre équipe en utilise une, demandez à votre entraîneur comment utiliser ses étiquettes. Un tableur marche pour tout le monde, gratuitement."
          ],
          steps: ["Ouvrez Google Sheets.", "Colonnes : N°, Temps, Situation, Ce qui s'est passé, Résultat, Note.", "Choisissez une courte liste de mots d'étiquette et tenez-vous-y.", "Faites pause et remplissez une ligne par action.", "Étiquetez au moins 20 actions."],
          words: [["Étiquette", "un mot que l'on donne à chaque action, comme « perte de balle » ou « contre-attaque »."], ["Repère temporel", "le moment dans la vidéo où une action commence, par exemple 12:45."]],
          slides: [
            { title: "Étiqueter = la vidéo devient des données", bullets: ["Les mêmes mots pour chaque action", "Vous pouvez compter les tendances"] },
            { title: "Vos colonnes", bullets: ["N°, Temps, Situation", "Ce qui s'est passé, Résultat, Note"] },
            { title: "Règles d'étiquetage", bullets: ["Une courte liste de mots", "Toujours le même mot", "Au moins 20 actions"] }
          ],
          tryIt: "Préparez votre tableau d'étiquetage et étiquetez 10 actions de votre vidéo avec votre question de la leçon 2.",
          youCanNow: "étiqueter des actions dans un tableur avec des mots constants et des repères temporels.",
          quickCheck: [
            { objective: "O3", q: "Quelle colonne indique si l'action s'est bien passée ?", options: ["N° d'action", "Temps", "Résultat", "Situation"], answer: 2, why: "Le Résultat est bon, neutre ou mauvais." },
            { objective: "O3", q: "Vous avez écrit « ballon perdu » pour certaines actions et « perte de balle » pour d'autres. Que faites-vous ?", options: ["Tout changer pour un seul mot, comme « perte de balle »", "Les laisser, ce n'est pas grave", "Supprimer ces actions", "Ajouter un troisième mot"], answer: 0, why: "Utiliser le même mot à chaque fois garde vos comptes justes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Obtenir de bonnes images",
        questions: [
          { objective: "O1", q: "Quel est le meilleur emplacement pour filmer un match ?", options: ["Seulement au sol derrière le but", "Dans votre sac", "En hauteur et central", "En zoom sur le visage d'un joueur"], answer: 2, why: "En hauteur et central, on voit toute l'action et l'espacement." },
          { objective: "O1", q: "Avant de filmer un entraînement, vous devez :", options: ["Demander l'autorisation à votre entraîneur", "Le diffuser en direct", "Filmer le vestiaire de l'autre équipe", "Mettre le téléphone à la verticale"], answer: 0, why: "Les équipes et les établissements ont souvent des règles sur le tournage." },
          { objective: "O2", q: "Laquelle est une bonne question d'étude vidéo ?", options: ["« C'était un bon match ? »", "« Pourquoi on est mauvais ? »", "« Qui a les plus belles chaussures ? »", "« Où est-ce que je perds le ballon ? »"], answer: 3, why: "Une question précise mène à des tendances que l'on peut corriger." },
          { objective: "O3", q: "À quoi sert l'étiquetage ?", options: ["À supprimer les mauvaises actions", "À transformer la vidéo en données que l'on peut compter", "À ajouter de la musique", "À raccourcir la vidéo"], answer: 1, why: "Des étiquettes constantes permettent de compter les tendances." },
          { objective: "O3", q: "Pourquoi utiliser toujours le même mot d'étiquette ?", options: ["Pour que ce soit plus long", "Pour que les comptes soient justes", "C'est plus joli", "Aucune raison"], answer: 1, why: "Des mots différents pour la même chose faussent les comptes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver les tendances et s'en servir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Compter les tendances dans vos étiquettes",
          minutes: 5,
          goal: "Compter vos étiquettes et trouver les principales tendances.",
          text: [
            "Avec 20 actions étiquetées ou plus, comptez combien de fois chaque situation et chaque résultat apparaissent. Dans Google Sheets, vous pouvez trier une colonne, utiliser un filtre, ou utiliser la formule COUNTIF (NB.SI dans la version française) pour compter une étiquette.",
            "Cherchez des tendances, pas des actions isolées : « 7 de mes 9 pertes de balle sont arrivées quand je dribblais à gauche sous pression » est une tendance. Une mauvaise passe n'en est pas une.",
            "Les petits nombres peuvent tromper. Si une chose n'est arrivée que deux fois, regardez plus de vidéo avant de décider que c'est une vraie tendance."
          ],
          steps: ["Triez ou filtrez par Résultat.", "Comptez chaque Situation pour les mauvais résultats.", "Écrivez les deux principales tendances en phrases avec des chiffres.", "Marquez « à revoir » toute tendance qui repose sur peu d'actions."],
          words: [["Tendance", "quelque chose qui se répète dans des situations semblables."], ["COUNTIF (NB.SI)", "une formule de tableur qui compte les cellules correspondant à un mot ou un nombre."]],
          slides: [
            { title: "Comptez vos étiquettes", bullets: ["Triez ou filtrez par Résultat", "COUNTIF (NB.SI) compte une étiquette"] },
            { title: "Tendance ou action isolée", bullets: ["Tendance : 7 pertes de balle sur 9 côté gauche", "Pas une tendance : une mauvaise passe"] },
            { title: "Attention aux petits nombres", bullets: ["Seulement deux fois ? Regardez d'abord plus de vidéo"] }
          ],
          tryIt: "Terminez l'étiquetage de 20 actions. Comptez vos résultats par situation et écrivez vos deux principales tendances en phrases avec des chiffres.",
          youCanNow: "compter des étiquettes et décrire des tendances avec des chiffres.",
          quickCheck: [
            { objective: "O4", q: "Laquelle de ces observations est une tendance ?", options: ["Une mauvaise passe en deuxième mi-temps", "5 de mes 6 tirs ratés venaient après un dribble", "Le score final", "La plus belle action du match"], answer: 1, why: "Une tendance se répète avec des chiffres ; une seule action n'est pas une tendance." },
            { objective: "O4", q: "Une tendance possible n'apparaît que sur deux actions. Que faites-vous ?", options: ["Construire tout un entraînement autour", "Ignorer toutes vos étiquettes", "Dire à l'équipe que c'est votre plus gros problème", "La marquer « à revoir » et filmer davantage d'abord"], answer: 3, why: "Les petits nombres peuvent tromper, alors regardez plus de vidéo avant de décider." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Utiliser l'IA pour résumer vos notes vidéo",
          minutes: 5,
          goal: "Demander à un assistant IA de résumer les actions étiquetées et vérifier son résumé.",
          text: [
            "Vous pouvez copier votre tableau d'étiquettes (sans autre nom de joueur que le vôtre, et sans information privée) dans un assistant IA et demander : « Voici mes actions étiquetées. Résume les trois principales tendances avec les chiffres, et propose une question à poser à mon entraîneur. »",
            "L'IA est douée pour repérer des tendances dans des tableaux de texte, mais elle peut mal compter ou inventer. Comparez ses chiffres avec les vôtres de la leçon précédente. S'ils diffèrent, faites confiance à votre tableau et corrigez la consigne.",
            "Certains outils d'IA peuvent regarder des images ou des vidéos, mais ils peuvent mal interpréter des actions sportives rapides. Utilisez vos propres étiquettes comme source principale et l'IA comme aide."
          ],
          steps: ["Copiez votre tableau d'étiquettes en retirant les noms des autres joueurs et les infos privées.", "Demandez les trois principales tendances avec les chiffres.", "Comparez avec vos propres comptes.", "Corrigez les erreurs ; c'est votre tableau qui fait foi."],
          words: [["Résumé", "une version courte qui garde les points principaux."]],
          slides: [
            { title: "Demandez un résumé à l'IA", bullets: ["Collez votre tableau d'étiquettes", "« Les trois principales tendances avec les chiffres »", "« Une question pour mon entraîneur »"] },
            { title: "Vérifiez-le", bullets: ["L'IA peut mal compter ou inventer", "Comparez avec vos comptes", "Votre tableau fait foi"] },
            { title: "Confidentialité", bullets: ["Pas de noms d'autres joueurs", "Pas d'informations privées"] }
          ],
          tryIt: "Collez vos 20 actions étiquetées dans un assistant IA et demandez les trois principales tendances avec les chiffres. Vérifiez chaque chiffre avec votre tableau.",
          youCanNow: "utiliser l'IA pour résumer des étiquettes vidéo et vérifier le résumé avec vos propres comptes.",
          quickCheck: [
            { objective: "O5", q: "Que peut-il mal se passer quand l'IA résume votre tableau d'étiquettes ?", options: ["Elle peut mal compter ou inventer des choses", "Elle supprime toujours votre tableau", "Elle publie la vidéo pour tout le monde", "Rien ne peut mal se passer"], answer: 0, why: "L'IA peut repérer des tendances mais peut mal compter, alors vérifiez avec vos propres comptes." },
            { objective: "O5", q: "Votre tableau d'étiquettes contient les noms de vos coéquipiers. Que faites-vous avant de le coller dans l'IA ?", options: ["Le coller tel quel", "Ajouter leurs numéros de téléphone", "Retirer les noms des autres joueurs et leurs informations privées", "Demander à vos coéquipiers de le coller à votre place"], answer: 2, why: "Gardez les noms des autres joueurs et leurs informations privées hors des outils d'IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Transformer la vidéo en axe de travail",
          minutes: 5,
          goal: "Transformer votre principale tendance en un axe de travail validé avec votre entraîneur.",
          text: [
            "La vidéo n'aide que si elle change l'entraînement. Prenez votre tendance la plus nette et transformez-la en un seul axe de travail : « Protéger le ballon quand je suis pressé sur mon côté gauche » ou « Revenir en défense en moins de trois secondes après une perte de balle. »",
            "Apportez à votre entraîneur la tendance, les chiffres et deux ou trois repères temporels qui la montrent. Demandez : « Quel exercice m'aiderait ? » Les entraîneurs adorent les sportifs qui viennent avec des preuves et une question.",
            "Filmez à nouveau dans quelques semaines et ré-étiquetez la même question pour voir si la tendance a changé. C'est cela, l'intelligence de jeu : apprendre, s'entraîner et vérifier."
          ],
          steps: ["Choisissez votre tendance la plus nette.", "Écrivez un axe de travail.", "Choisissez deux ou trois repères temporels qui la montrent.", "Demandez un exercice à votre entraîneur.", "Refilmez et ré-étiquetez dans quelques semaines."],
          words: [["Axe de travail", "une chose précise sur laquelle vous travaillez à l'entraînement."], ["Preuves", "des faits qui montrent qu'une chose est vraie, comme des chiffres et des repères temporels dans la vidéo."]],
          slides: [
            { title: "La vidéo doit changer l'entraînement", bullets: ["Tendance la plus nette → un axe de travail"] },
            { title: "Apportez à votre entraîneur", bullets: ["La tendance et les chiffres", "Deux ou trois repères temporels", "« Quel exercice m'aiderait ? »"] },
            { title: "Bouclez la boucle", bullets: ["Refilmez dans quelques semaines", "Ré-étiquetez la même question", "La tendance a-t-elle changé ?"] }
          ],
          tryIt: "Tâche finale : avec vos 20 actions étiquetées et le résumé de l'IA, écrivez un axe de travail et choisissez deux repères temporels. Partagez-les avec votre entraîneur et demandez-lui un exercice.",
          youCanNow: "transformer des tendances vidéo en axe de travail et vérifier plus tard s'il y a eu des progrès.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qui fait un bon axe de travail ?", options: ["« Mieux jouer »", "Une liste de toutes les erreurs", "Un changement précis tiré de votre tendance la plus forte", "Ce que l'IA propose"], answer: 2, why: "Un seul axe tiré de votre tendance la plus forte change l'entraînement." },
            { objective: "O6", q: "Votre entraîneur propose un exercice pour votre axe de travail. Comment vérifier qu'il a marché ?", options: ["Demander à un coéquipier", "Refilmer dans quelques semaines et réétiqueter avec la même question", "Se fier à son ressenti", "Demander à l'IA s'il a marché"], answer: 1, why: "Refilmer et réétiqueter montre si la tendance a changé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver les tendances et s'en servir",
        questions: [
          { objective: "O4", q: "Laquelle est une tendance ?", options: ["Une mauvaise passe", "Un super dunk", "Le score final", "7 pertes de balle sur 9 en dribblant à gauche sous pression"], answer: 3, why: "Une tendance se répète sur beaucoup d'actions semblables." },
          { objective: "O4", q: "Que fait COUNTIF (NB.SI) ?", options: ["Compte les cellules qui correspondent à une étiquette", "Lit la vidéo", "Supprime des lignes", "Ajoute des couleurs"], answer: 0, why: "COUNTIF compte les cellules correspondantes." },
          { objective: "O5", q: "Le compte de pertes de balle de l'IA diffère de votre tableau. À quoi vous fiez-vous ?", options: ["À l'IA", "Au plus élevé des deux", "À votre tableau, puis vous corrigez la consigne", "À aucun des deux"], answer: 2, why: "Vos étiquettes sont la source principale ; l'IA peut mal compter." },
          { objective: "O5", q: "Avant de coller vos étiquettes dans une IA, retirez :", options: ["Les repères temporels", "Les résultats", "Les situations", "Les noms des autres joueurs et les infos privées"], answer: 3, why: "Protégez la vie privée des autres." },
          { objective: "O6", q: "Qu'apporter à votre entraîneur ?", options: ["Seulement des plaintes", "La tendance, les chiffres et les repères temporels, avec une question", "Toute la vidéo sans notes", "Une dissertation écrite par l'IA"], answer: 1, why: "Des preuves et une question donnent une discussion utile." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Analyse vidéo et intelligence de jeu",
    questions: [
      { objective: "O1", q: "Tenir le téléphone à l'horizontale pour filmer s'appelle :", options: ["Le mode portrait", "Le selfie", "Le mode paysage", "Le zoom"], answer: 2, why: "Le mode paysage donne un cadre large." },
      { objective: "O1", q: "Pourquoi filmer d'en haut ?", options: ["Pour voir toute l'action et l'espacement", "Pour se cacher", "Pour un meilleur son", "C'est une règle"], answer: 0, why: "La hauteur montre tous les joueurs impliqués." },
      { objective: "O1", q: "Qu'est-ce qui garde l'appareil stable ?", options: ["Un trépied ou un appui", "Courir avec", "Zoomer", "Le secouer"], answer: 0, why: "Une vidéo stable est plus facile à étudier." },
      { objective: "O1", q: "Les vidéos de sport jeunes montrent souvent d'autres enfants. Vous devez donc :", options: ["Les publier n'importe où", "Ne rien flouter", "Demander avant de filmer et de partager", "Les vendre"], answer: 2, why: "Les équipes et les familles ont des règles de confidentialité." },
      { objective: "O2", q: "Regarder une vidéo sans plan veut en général dire que vous remarquez :", options: ["Toutes les tendances", "Seulement les meilleurs moments et les grosses erreurs", "Rien", "Les notes de l'entraîneur"], answer: 1, why: "Sans question, on rate les tendances." },
      { objective: "O2", q: "Combien de questions par visionnage ?", options: ["Dix", "Aucune", "Le plus possible", "Une"], answer: 3, why: "Une question précise garde la concentration." },
      { objective: "O2", q: "Au deuxième visionnage, vous :", options: ["Avancez rapidement sur tout", "Coupez le son", "Faites pause sur les actions qui répondent à votre question", "Le sautez"], answer: 2, why: "Faire pause permet de noter les détails." },
      { objective: "O2", q: "L'intelligence de jeu, c'est comprendre :", options: ["Seulement le score", "Seulement les statistiques", "Le calendrier", "Pourquoi les actions se produisent"], answer: 3, why: "Il s'agit du pourquoi, pas seulement du quoi." },
      { objective: "O3", q: "Un repère temporel, c'est :", options: ["Le moment de la vidéo où une action commence", "La date du match", "Un tampon sur un billet", "Le coup de sifflet final"], answer: 0, why: "Les repères temporels permettent de retrouver vite une action." },
      { objective: "O3", q: "Laquelle est une colonne d'étiquetage ?", options: ["Chanson préférée", "Situation", "Météo de demain", "Votre mot de passe"], answer: 1, why: "La situation est une étiquette clé." },
      { objective: "O3", q: "Combien d'actions faut-il étiqueter au minimum ?", options: ["1", "3", "20", "500"], answer: 2, why: "Vingt actions suffisent pour voir des tendances." },
      { objective: "O3", q: "Si votre équipe utilise une application vidéo comme Hudl, vous devez :", options: ["Demander à votre entraîneur comment utiliser ses étiquettes", "L'ignorer", "La supprimer", "Partager l'identifiant en ligne"], answer: 0, why: "Utilisez ce que votre équipe utilise, comme votre entraîneur le souhaite." },
      { objective: "O4", q: "Une chose n'est arrivée que deux fois. Vous devez :", options: ["Dire que c'est une grande tendance", "Le dire à tout le monde", "Changer de poste", "Regarder d'abord plus de vidéo"], answer: 3, why: "Les petits nombres peuvent tromper." },
      { objective: "O4", q: "Pour trouver vos principales tendances dans Sheets, vous pouvez :", options: ["L'imprimer", "Trier, filtrer ou utiliser COUNTIF (NB.SI)", "Changer les polices", "Ajouter des images"], answer: 1, why: "Ces outils comptent et regroupent les étiquettes." },
      { objective: "O5", q: "Que demander à l'IA de faire avec vos étiquettes ?", options: ["Choisir votre équipe", "Résumer les principales tendances avec les chiffres", "Les publier en ligne", "Noter votre entraîneur"], answer: 1, why: "Résumer est un point fort de l'IA." },
      { objective: "O5", q: "Les outils d'IA qui lisent directement la vidéo peuvent :", options: ["Ne jamais se tromper", "Remplacer les entraîneurs", "Être obligatoires", "Mal interpréter des actions sportives rapides"], answer: 3, why: "Utilisez vos propres étiquettes comme source principale." },
      { objective: "O6", q: "Un bon axe de travail est :", options: ["« Protéger le ballon quand je suis pressé à gauche »", "« Être meilleur »", "« Gagner »", "« Faire des efforts »"], answer: 0, why: "Il est précis et se travaille à l'entraînement." },
      { objective: "O6", q: "Quelle question à votre entraîneur est la meilleure ?", options: ["« Pourquoi je ne joue pas plus ? »", "« La vidéo, c'est ennuyeux ? »", "« Voici 3 extraits de cette tendance. Quel exercice m'aiderait ? »", "« Je peux sauter l'entraînement ? »"], answer: 2, why: "Des preuves plus une question donnent une réponse utile." },
      { objective: "O6", q: "Comment savoir si votre axe de travail a marché ?", options: ["Deviner", "Demander à un supporter", "Regarder les réseaux sociaux", "Refilmer et ré-étiqueter la même question plus tard"], answer: 3, why: "Ré-étiqueter montre si la tendance a changé." },
      { objective: "O6", q: "La vidéo n'aide que si elle :", options: ["A beaucoup de vues", "Change ce que vous travaillez", "Est longue", "A de la musique"], answer: 1, why: "Le but est de mieux s'entraîner et de mieux jouer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      9,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Vidéo et autorisation",
        objective: "O1",
        notYet: "Filmé sans autorisation, ou la vidéo tremble trop ou est trop serrée pour voir l'action.",
        meets: "Autorisation obtenue, vidéo à l'horizontale depuis un endroit haut, avec un plan large et stable.",
        exceeds: "Batterie et stockage vérifiés, et tout le match ou l'entraînement filmé sans coupure."
      },
      {
        name: "Tableau d'étiquettes",
        objective: "O3",
        notYet: "Moins de 20 actions, des colonnes manquent, ou les mots d'étiquette changent.",
        meets: "Au moins 20 actions étiquetées dans les six colonnes, avec les mêmes mots d'étiquette à chaque fois.",
        exceeds: "Chaque ligne a un repère temporel et une courte note liée à la question."
      },
      {
        name: "Tendances et vérification de l'IA",
        objective: "O5",
        notYet: "Pas de comptes, ou le résumé de l'IA est utilisé sans vérification.",
        meets: "Les principales tendances sont écrites avec les comptes, et les comptes de l'IA sont vérifiés avec le tableau, noms retirés.",
        exceeds: "Les écarts sont repérés et la demande est corrigée ; les tendances sur de petits nombres sont marquées « à revoir »."
      },
      {
        name: "Axe de travail",
        objective: "O6",
        notYet: "Pas d'axe, ou il est vague.",
        meets: "Un axe précis tiré de la tendance la plus forte, revu avec l'entraîneur à l'aide de chiffres et de repères temporels.",
        exceeds: "Un exercice est convenu et une date est fixée pour refilmer et réétiqueter avec la même question."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui disent avoir refilmé et réétiqueté la même question dans les 30 jours (questionnaire de suivi)",
      "Les entraîneurs qui disent avoir changé un exercice ou un axe de travail grâce aux preuves vidéo d'un sportif",
      "Les apprenants qui suivent un autre cours pour sportifs, comme L'IA pour les sports collectifs"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec caméra, chargé, avec de l'espace de stockage libre",
      "Un trépied ou un moyen de caler le téléphone (facultatif)",
      "Un compte Google gratuit pour Google Sheets",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Environ 60 minutes de leçons, plus 60 à 90 minutes pour filmer et étiqueter"
    ],
    facilitatorNotes: [
      "Vérifiez les règles de l'équipe, de l'établissement et de la ligue sur le tournage avant que quiconque filme, surtout aux matchs de jeunes avec des mineurs.",
      "Convenez avec les sportifs de l'endroit où les vidéos sont stockées, et qu'elles ne sont pas publiées sans autorisation.",
      "Donnez à tous la même liste de mots d'étiquette pour une séance d'équipe, pour pouvoir comparer les comptes.",
      "Montrez comment retirer les noms des autres joueurs avant de coller dans l'IA, et faites vérifier les comptes de l'IA avec le tableau.",
      "Prévoyez de courts points avec l'entraîneur pour que chaque sportif présente sa tendance, ses repères temporels et sa question."
    ]
  }
};
