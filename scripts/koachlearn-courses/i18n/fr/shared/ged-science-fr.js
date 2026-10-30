"use strict";

// Koach Learn course (French translation of shared/ged-science.js). See scripts/koachlearn-courses/README.md, "Translations".

const GED_SUBJECTS = { name: "GED Testing Service : matières de l'examen (durée, types de questions, calculatrice)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service : épreuve de sciences", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service : notes", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service : tests d'exemple gratuits (en anglais et en espagnol)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, le test d'entraînement officiel", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, un autre examen d'équivalence du diplôme de fin d'études secondaires (site officiel)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-fr",
  lang: "fr",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Préparation à l'examen GED : Sciences",
  skills: "Lire des textes scientifiques, Repérer les variables d'une expérience, Lire des tableaux et des graphiques, Calculs pour les sciences (moyenne, médiane, étendue, formules), Juger des conclusions, Faire un plan de révision",
  outcome: "lire un texte scientifique, un tableau ou un graphique et répondre à des questions de type GED à son sujet, nommer les variables d'une expérience, faire les calculs scientifiques demandés à l'examen et juger si une conclusion est appuyée par les données.",
  about: [
    "Ce cours s'adresse aux adultes qui préparent l'épreuve de sciences du GED : personnes en recherche d'emploi, personnes qui sortent de prison, anciens militaires, jeunes adultes, personnes immigrées et toute personne qui reprend ses études. Vous n'avez pas besoin d'être expert en sciences. L'épreuve porte surtout sur la lecture de textes scientifiques, la compréhension des expériences et le travail avec des nombres et des graphiques.",
    "Ce cours vous prépare à l'examen. Il ne vous donne pas le diplôme GED. Le GED Testing Service (l'organisme qui crée l'examen GED aux États-Unis) organise l'examen, et votre État fixe les règles pour le passer. Certains États utilisent un autre examen appelé HiSET. Consultez ged.com et le bureau d'éducation des adultes de votre État pour connaître les règles, les frais et les dates d'examen en vigueur.",
    "Chaque leçon enseigne une compétence avec des exemples corrigés et un exercice \"Essayez maintenant\" avec les réponses expliquées, puis un contrôle rapide de deux questions. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "La tâche finale est votre propre petite expérience sans danger, dans la cuisine : vous préparez un test équitable, vous notez les données dans un tableau, vous calculez la moyenne, vous dessinez un graphique et vous écrivez une conclusion appuyée par les données."
  ],
  finalTask: "Préparez et réalisez une petite expérience sans danger dans la cuisine (par exemple : est-ce que remuer l'eau change la vitesse à laquelle le sucre se dissout ?). Écrivez une question et une hypothèse, nommez les variables indépendante, dépendante et contrôlées, répétez chaque essai trois fois, notez les résultats dans un tableau, calculez la moyenne de chaque groupe, dessinez un diagramme en barres et écrivez une conclusion de deux phrases appuyée par les données. Ajoutez en bas votre plan de révision pour le GED, avec des dates.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes qui préparent l'épreuve de sciences du GED : personnes en recherche d'emploi, personnes qui sortent de prison, anciens militaires, jeunes adultes qui ont quitté l'école, personnes immigrées et adultes qui reprennent leurs études après de nombreuses années.",
    startingPoint: "Savent lire des textes de tous les jours et faire des calculs simples. Beaucoup n'ont pas suivi de cours de sciences depuis des années et pensent que la matière est difficile ou pleine de faits à apprendre par cœur. Certains prennent encore confiance en anglais ou en mathématiques.",
    gap: "L'épreuve de sciences du GED demande de lire des textes scientifiques, de comprendre comment fonctionnent les expériences et d'utiliser des nombres, des tableaux et des graphiques. Ces compétences s'apprennent, et elles servent aussi au travail dans la santé, l'industrie, les laboratoires et les métiers manuels.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot scientifique est expliqué",
      "Appareils : un téléphone, un ordinateur de bibliothèque, ou du papier et un stylo ; une calculatrice simple aide",
      "Temps : leçons de 4 à 6 minutes, à caser entre le travail, les rendez-vous et la famille",
      "Sécurité : les expériences à la maison utilisent seulement de l'eau, du sucre, du sel et de l'eau du robinet à température ambiante ou tiède ; pas de chaleur, pas de flamme, pas de produits chimiques",
      "Les règles de l'examen, les frais et l'examen utilisé par chaque État (GED ou HiSET) changent ; les apprenants vérifient sur ged.com et auprès de leur État"
    ],
    prerequisites: "Aucun. Les apprenants qui ont besoin d'aide pour les moyennes ou la lecture d'un graphique peuvent suivre en même temps le cours de mathématiques du GED ou un cours de calcul pour la vie de tous les jours."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "En utilisant le site officiel du GED", action: "énumérer les parties, les types de questions, la durée et les outils de l'épreuve de sciences du GED et écrire un plan de révision avec des dates", standard: "en nommant les trois domaines de compétences et avec au moins une date de révision chaque semaine jusqu'à l'examen" },
    { id: "O2", condition: "À partir d'un court texte scientifique", action: "identifier l'idée principale et l'affirmation appuyée par les preuves du texte", standard: "en montrant la phrase ou le nombre qui appuie chaque réponse" },
    { id: "O3", condition: "À partir de la description d'une expérience", action: "nommer l'hypothèse et les variables indépendante, dépendante et contrôlées", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O4", condition: "À partir d'un tableau ou d'un graphique", action: "lire des valeurs, décrire la tendance et choisir la conclusion appuyée par les données", standard: "sans ajouter de faits qui ne sont pas dans les données" },
    { id: "O5", condition: "À partir d'une petite série de données ou d'une formule", action: "calculer la moyenne, la médiane, le mode et l'étendue ou utiliser la formule pour trouver une réponse", standard: "avec les bonnes unités et au moins 4 bonnes réponses sur 5" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Lire les sciences et comprendre les expériences",
      lessons: [
        {
          title: "Comment se passe l'épreuve de sciences du GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Énumérer les parties et les outils de l'épreuve de sciences du GED et écrire un plan de révision avec des dates.",
          text: [
            "Le GED comprend quatre épreuves : mathématiques, raisonnement par la langue (Reasoning Through Language Arts), sciences et sciences sociales. Vous pouvez les passer une par une. Le GED Testing Service crée l'examen. Certains États utilisent un autre examen d'équivalence du diplôme de fin d'études secondaires, le HiSET : vérifiez donc quel examen utilise votre État.",
            "Sur ged.com, l'épreuve de sciences dure 90 minutes, sans pause. Elle couvre trois domaines de compétences : lire pour comprendre en sciences, concevoir et interpréter des expériences scientifiques, et utiliser des nombres et des graphiques en sciences. Les questions sont à choix multiples, à compléter, à glisser-déposer, à sélection de zone et à liste déroulante.",
            "Vous avez une calculatrice à l'écran et une fiche de référence de la calculatrice, et ged.com indique que vous pouvez apporter votre propre calculatrice TI-30XS dans un centre d'examen. Ged.com indique aussi que vous n'avez pas besoin d'apprendre les formules par cœur : les informations nécessaires sont données avec chaque question. Ce n'est pas un test de faits appris par cœur ; il mesure votre façon de lire et de raisonner.",
            "Ged.com indique une note de réussite de 145 pour chaque matière. Les durées et les règles peuvent changer : vérifiez sur ged.com avant de vous inscrire. Ged.com propose des tests d'exemple gratuits et un test d'entraînement officiel, GED Ready."
          ],
          steps: ["Allez sur ged.com et lisez la page de l'épreuve de sciences.", "Notez la durée, les trois domaines de compétences et les outils fournis.", "Faites le test d'exemple gratuit de sciences pour voir où vous en êtes.", "Choisissez une semaine cible pour l'examen.", "Notez au moins une date de révision par semaine, avec la compétence que vous allez travailler."],
          words: [["GED", "un examen d'équivalence du diplôme de fin d'études secondaires aux États-Unis ; réussir les quatre matières donne un diplôme que beaucoup d'employeurs et d'établissements acceptent comme un diplôme de fin d'études."], ["HiSET", "un autre examen d'équivalence du diplôme de fin d'études secondaires, utilisé par certains États."], ["TI-30XS", "le modèle de calculatrice de poche que l'examen GED utilise à l'écran et qui est autorisé dans les centres d'examen."], ["Fiche de référence de la calculatrice", "une fiche donnée pendant l'examen qui montre comment utiliser les touches de la calculatrice."]],
          slides: [
            { title: "L'épreuve de sciences du GED (vérifiez sur ged.com)", bullets: ["90 minutes, sans pause", "Choix multiples et autres types de questions", "Note de réussite indiquée : 145"] },
            { title: "Trois domaines de compétences", bullets: ["Lire pour comprendre en sciences", "Concevoir et interpréter des expériences", "Utiliser des nombres et des graphiques"] },
            { title: "Les outils fournis", bullets: ["Calculatrice à l'écran et fiche de référence", "Vous pouvez apporter une TI-30XS dans un centre d'examen", "Les informations nécessaires sont données avec chaque question"] },
            { title: "Faites un plan", bullets: ["Commencez par le test d'exemple gratuit", "Choisissez une semaine cible pour l'examen", "Révisez un peu, presque tous les jours de la semaine"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ouvrez ged.com et faites le test d'exemple gratuit de sciences (ou lisez la page de sciences si vous ne pouvez pas le faire maintenant). Écrivez votre plan de révision : votre semaine cible pour l'examen et une date par semaine avec la compétence à travailler : lire les sciences, les expériences, ou les nombres et les graphiques. Gardez-le pour la tâche finale.",
          youCanNow: "nommer les parties et les outils de l'épreuve de sciences du GED et suivre un plan de révision avec des dates.",
          quickCheck: [
            { objective: "O1", q: "D'après ged.com, que devez-vous apprendre par cœur pour l'épreuve de sciences du GED ?", options: ["Toutes les formules de sciences", "Le tableau périodique", "Pas les formules : les informations nécessaires sont données avec chaque question", "Les noms de tous les scientifiques"], answer: 2, why: "Ged.com indique que vous n'avez pas besoin d'apprendre les formules par cœur ; les informations nécessaires sont fournies." },
            { objective: "O1", q: "Lequel est l'un des trois domaines de compétences de l'épreuve de sciences ?", options: ["Concevoir et interpréter des expériences scientifiques", "Épeler des mots scientifiques", "Dessiner des animaux", "Monter un ordinateur"], answer: 0, why: "Ged.com cite la lecture pour comprendre, les expériences, et les nombres et graphiques." }
          ]
        },
        {
          title: "Lire un texte scientifique",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identifier l'idée principale d'un texte scientifique et l'affirmation appuyée par ses preuves.",
          text: [
            "Les textes scientifiques semblent difficiles à cause des mots nouveaux, mais ils se lisent comme n'importe quel texte. Cherchez de quoi il parle surtout, et cherchez les faits et les nombres qui le soutiennent. Souvent, le texte explique un mot difficile tout de suite. Cherchez \"s'appelle\", \"signifie\" ou une explication entre virgules après le mot.",
            "Exemple corrigé. \"La sueur refroidit le corps. Quand la sueur s'évapore, c'est-à-dire passe de l'état liquide à l'état de gaz, elle enlève de la chaleur à la peau. Les jours humides, l'air contient déjà beaucoup d'eau, donc la sueur s'évapore plus lentement.\" Idée principale : transpirer refroidit le corps par évaporation. Affirmation appuyée : vous pouvez avoir plus chaud les jours humides, car la sueur sèche plus lentement.",
            "Une affirmation est appuyée seulement si le texte donne des preuves. \"Transpirer brûle les graisses\" n'est pas appuyé ; le texte ne dit rien sur les graisses. Choisissez la réponse que le texte prouve, pas celle qui a l'air la plus scientifique."
          ],
          steps: ["Lisez d'abord la question.", "Lisez le texte ; entourez les mots nouveaux et cherchez leur sens tout près.", "Dites l'idée principale en une phrase.", "Pour chaque choix de réponse, demandez-vous : où le texte le prouve-t-il ?", "Barrez les choix qui ajoutent des faits que le texte ne donne pas."],
          words: [["S'évaporer", "passer de l'état liquide à l'état de gaz, comme une flaque qui sèche."], ["Humide", "quand l'air contient beaucoup de vapeur d'eau."], ["Affirmation", "une phrase qui dit que quelque chose est vrai."], ["Appuyée", "soutenue par des preuves dans le texte ou dans les données."]],
          slides: [
            { title: "Lisez les sciences comme tout autre texte", bullets: ["De quoi parle-t-il surtout ?", "Quels faits et quels nombres le soutiennent ?"] },
            { title: "Les mots nouveaux", bullets: ["Cherchez \"s'appelle\" ou \"signifie\"", "Cherchez une explication entre virgules après le mot"] },
            { title: "Appuyée ou non ?", bullets: ["Appuyée : le texte la prouve", "Non appuyée : elle ajoute des faits absents du texte", "Ne choisissez pas une réponse juste parce qu'elle a l'air savante"] }
          ],
          tryIt: "Texte d'entraînement : \"Les plantes fabriquent leur propre nourriture grâce à la photosynthèse. Elles utilisent la lumière, l'eau et le dioxyde de carbone, un gaz présent dans l'air, pour fabriquer du sucre. Elles rejettent ainsi de l'oxygène.\" 1) Idée principale ? 2) Quelle affirmation est appuyée : (a) une plante gardée dans un placard sombre aura du mal à fabriquer sa nourriture, ou (b) les plantes ont besoin de soda pour pousser ? Réponses : 1) Les plantes fabriquent leur nourriture avec la lumière, l'eau et le dioxyde de carbone. 2) (a) : le texte dit que les plantes ont besoin de lumière. (b) n'est pas dans le texte.",
          youCanNow: "trouver l'idée principale d'un texte scientifique et choisir l'affirmation appuyée par ses preuves.",
          quickCheck: [
            { objective: "O2", q: "Un texte dit : \"Les vaccins entraînent le système immunitaire, le système de défense du corps, à reconnaître les microbes.\" Que veut dire ici \"système immunitaire\" ?", options: ["Une sorte de microbe", "Le système de défense du corps", "Un cabinet médical", "Un type de médicament qu'on avale"], answer: 1, why: "Le sens est donné entre virgules juste après le mot." },
            { objective: "O2", q: "Un texte dit que l'acier rouille plus vite dans l'air humide et salé. Quelle affirmation est appuyée ?", options: ["L'acier ne rouille jamais", "Le sel rend l'acier plus solide", "La rouille n'apparaît que dans les déserts", "Un pont en acier près de la mer peut avoir besoin de plus de protection contre la rouille"], answer: 3, why: "L'air marin est humide et salé, et le texte dit que cela accélère la rouille." }
          ]
        },
        {
          title: "Les expériences : hypothèse et variables",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nommer l'hypothèse et les variables indépendante, dépendante et contrôlées d'une expérience.",
          text: [
            "Une expérience teste une question. L'hypothèse est une supposition sur la réponse que l'on peut tester, souvent écrite \"Si ..., alors ...\". Par exemple : \"Si les plantes reçoivent plus d'heures de lumière, alors elles pousseront plus haut.\"",
            "La variable indépendante est la seule chose que le scientifique change exprès (les heures de lumière). La variable dépendante est ce que l'on mesure pour voir l'effet (la hauteur de la plante). Les variables contrôlées restent les mêmes pour que le test soit équitable (même sorte de plante, même pot, même eau, même terre).",
            "Une astuce pour s'en souvenir : la variable dépendante dépend de la variable indépendante. La hauteur dépend de la lumière. Un test équitable ne change qu'une chose à la fois. Si vous changez la lumière et l'eau en même temps, vous ne pouvez pas savoir laquelle a fait pousser la plante.",
            "Les bonnes expériences répètent chaque essai plusieurs fois et ont souvent un groupe témoin, un groupe qui ne reçoit aucun changement, pour comparer. Plus d'essais rendent les résultats plus fiables."
          ],
          steps: ["Trouvez la question testée.", "Trouvez la seule chose changée exprès : la variable indépendante.", "Trouvez ce qui est mesuré : la variable dépendante.", "Faites la liste de ce qui reste pareil : les variables contrôlées.", "Vérifiez qu'une seule chose change et que les essais sont répétés."],
          words: [["Hypothèse", "une supposition que l'on peut tester, souvent \"Si ..., alors ...\"."], ["Variable indépendante", "la seule chose que vous changez exprès."], ["Variable dépendante", "ce que vous mesurez pour voir l'effet."], ["Variable contrôlée", "quelque chose que vous gardez pareil pour que le test soit équitable."], ["Groupe témoin", "un groupe qui ne reçoit aucun changement, utilisé pour comparer."]],
          slides: [
            { title: "L'hypothèse", bullets: ["Une supposition que l'on peut tester", "\"Si plus de lumière, alors plantes plus hautes\""] },
            { title: "Trois sortes de variables", bullets: ["Indépendante : ce que vous changez", "Dépendante : ce que vous mesurez", "Contrôlée : ce que vous gardez pareil"] },
            { title: "Un test équitable", bullets: ["Ne changez qu'une chose", "Répétez chaque essai", "Comparez avec un groupe témoin"] }
          ],
          tryIt: "Entraînement : une ouvrière teste si un nouveau gant garde les mains plus au chaud. Dix ouvriers portent le nouveau gant et dix portent l'ancien, dehors pendant 30 minutes, au même moment. On mesure la température des mains. Nommez : 1) la variable indépendante, 2) la variable dépendante, 3) deux variables contrôlées, 4) une hypothèse. Réponses : 1) le type de gant ; 2) la température des mains ; 3) le temps passé dehors, la même météo, la même heure de la journée ; 4) \"Si les ouvriers portent le nouveau gant, alors leurs mains seront plus chaudes.\"",
          youCanNow: "lire une expérience, nommer son hypothèse et ses variables, et repérer un test qui n'est pas équitable.",
          quickCheck: [
            { objective: "O3", q: "Un élève teste si le sel change la vitesse à laquelle la glace fond. Quelle est la variable dépendante ?", options: ["La quantité de sel", "La taille des glaçons", "La température de la pièce", "Le temps que met la glace à fondre"], answer: 3, why: "Le temps de fonte est ce qui est mesuré ; il dépend du sel." },
            { objective: "O3", q: "Pourquoi une expérience ne doit-elle changer qu'une chose à la fois ?", options: ["Pour savoir quel changement a causé le résultat", "Pour aller plus vite", "Pour utiliser moins de papier", "Cela n'a pas d'importance"], answer: 0, why: "Si deux choses changent, vous ne pouvez pas savoir laquelle a fait la différence." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Lire les sciences et comprendre les expériences",
        questions: [
          { objective: "O1", q: "Quel outil ged.com dit-il que vous avez pendant l'épreuve de sciences ?", options: ["Un téléphone", "Une calculatrice à l'écran et une fiche de référence de la calculatrice", "Un manuel de sciences", "Un cahier de formules que vous avez écrites"], answer: 1, why: "Ged.com cite une calculatrice à l'écran et une fiche de référence de la calculatrice." },
          { objective: "O2", q: "Un texte dit : \"L'exercice augmente la fréquence cardiaque, le nombre de battements du cœur par minute.\" Quelle affirmation est appuyée ?", options: ["L'exercice baisse la fréquence cardiaque", "La fréquence cardiaque se mesure en miles", "L'exercice fait battre le cœur plus de fois par minute", "La fréquence cardiaque ne change pas"], answer: 2, why: "Le texte dit que l'exercice augmente les battements par minute." },
          { objective: "O3", q: "\"Si j'arrose les tomates tous les jours, alors elles donneront plus de fruits.\" Qu'est-ce que c'est ?", options: ["Une conclusion", "Une hypothèse", "Un tableau de données", "Un groupe témoin"], answer: 1, why: "C'est une supposition que l'on peut tester, de type \"Si ..., alors ...\"." },
          { objective: "O3", q: "Dans le test des tomates, quelle est la variable indépendante ?", options: ["La fréquence d'arrosage des plantes", "La quantité de fruits", "La sorte de terre", "La taille des pots"], answer: 0, why: "L'arrosage est ce qui est changé exprès." },
          { objective: "O3", q: "Laquelle est une variable contrôlée dans le test des tomates ?", options: ["La fréquence d'arrosage", "Le nombre de tomates obtenues", "L'hypothèse", "La même sorte de plant de tomate pour chaque groupe"], answer: 3, why: "Utiliser la même sorte de plante garde le test équitable." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Nombres, tableaux et graphiques en sciences",
      lessons: [
        {
          title: "Lire des tableaux et des graphiques",
          objectives: ["O4"],
          minutes: 5,
          goal: "Lire des valeurs dans un tableau ou un graphique, décrire la tendance et choisir la conclusion appuyée par les données.",
          text: [
            "Beaucoup de questions de sciences donnent un tableau ou un graphique. Lisez d'abord le titre, les légendes et les unités. Sur un graphique, la légende du bas (axe x) est en général la variable indépendante, et la légende sur le côté (axe y) est la variable dépendante.",
            "Exemple corrigé. Tableau : \"Heures de lumière par jour : 4, 8, 12. Hauteur moyenne des plantes après 3 semaines : 5 cm, 9 cm, 14 cm.\" Lire une valeur : avec 8 heures, les plantes ont poussé de 9 cm. Tendance : quand la lumière augmente, la hauteur augmente. Conclusion appuyée : dans ce test, plus de lumière allait avec des plantes plus hautes.",
            "N'allez pas au-delà des données. Le tableau ne montre pas 20 heures de lumière, donc vous ne pouvez pas dire ce qui se passe dans ce cas. Il ne montre pas non plus l'eau ni la terre, donc une conclusion sur elles n'est pas appuyée.",
            "Types de graphiques : un diagramme en barres compare des groupes, un graphique en courbe montre un changement dans le temps ou une tendance, et un diagramme circulaire montre les parties d'un tout."
          ],
          steps: ["Lisez le titre, les légendes et les unités.", "Trouvez la valeur demandée par la question.", "Décrivez la tendance : en hausse, en baisse ou sans tendance claire.", "Choisissez la conclusion qui reste dans les limites des données.", "Barrez les réponses sur des choses que les données ne montrent pas."],
          words: [["Tendance", "la direction générale des données : en hausse, en baisse ou stable."], ["Axe x", "la ligne horizontale en bas d'un graphique."], ["Axe y", "la ligne verticale sur le côté d'un graphique."], ["Unités", "ce dans quoi un nombre est mesuré, comme les cm, les degrés ou les minutes."]],
          slides: [
            { title: "Lisez d'abord les légendes", bullets: ["Titre, légendes et unités", "En bas (axe x) : en général ce qui a été changé", "Sur le côté (axe y) : en général ce qui a été mesuré"] },
            { title: "Trouvez la tendance", bullets: ["En hausse, en baisse ou sans tendance claire", "Dites-la en une phrase"] },
            { title: "Restez dans les données", bullets: ["Pas de supposition au-delà des nombres montrés", "Pas de conclusion sur ce qui n'a pas été mesuré"] },
            { title: "Types de graphiques", bullets: ["Barres : comparer des groupes", "Courbe : changement dans le temps", "Circulaire : parties d'un tout"] }
          ],
          tryIt: "Tableau d'entraînement : \"Température de l'eau (degrés C) : 10, 20, 30, 40. Temps pour qu'un morceau de sucre se dissolve (secondes) : 120, 90, 60, 40.\" 1) Combien de temps à 30 degrés ? 2) Quelle est la tendance ? 3) Quelle conclusion est appuyée : (a) dans ce test, l'eau plus chaude a dissous le sucre plus vite, ou (b) le sel se dissout plus vite que le sucre ? Réponses : 1) 60 secondes. 2) Quand la température augmente, le temps de dissolution diminue. 3) (a) ; le sel n'a pas été testé.",
          youCanNow: "lire un tableau ou un graphique, décrire sa tendance et choisir une conclusion appuyée par les données.",
          quickCheck: [
            { objective: "O4", q: "Un graphique montre la température moyenne d'une ville qui monte à chaque décennie de 1980 à 2020. Quelle est la tendance ?", options: ["En baisse", "Aucun changement", "En hausse avec le temps", "On ne peut pas la lire"], answer: 2, why: "Les valeurs augmentent au fil des décennies." },
            { objective: "O4", q: "Un tableau montre la hauteur des plantes pour 4, 8 et 12 heures de lumière. Quelle conclusion va au-delà des données ?", options: ["Les plantes à 8 heures ont poussé plus haut que celles à 4 heures", "Les plantes qui reçoivent 24 heures de lumière seront les plus hautes", "La hauteur a augmenté quand la lumière a augmenté", "Les plantes à 12 heures ont le plus poussé dans ce test"], answer: 1, why: "24 heures n'ont pas été testées, donc les données ne peuvent pas vous le dire." }
          ]
        },
        {
          title: "Calculs pour les sciences : moyennes, étendue et formules",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer la moyenne, la médiane, le mode et l'étendue d'une série de données et utiliser une formule donnée.",
          text: [
            "Série de données (pour l'entraînement seulement) : fréquence cardiaque après une marche, en battements par minute : 80, 84, 84, 90, 92. Moyenne : additionnez-les et divisez par leur nombre : 430 / 5 = 86. Médiane : le nombre du milieu quand ils sont rangés dans l'ordre : 84. Mode : le nombre qui revient le plus souvent : 84. Étendue : le plus grand moins le plus petit : 92 - 80 = 12.",
            "S'il y a un nombre pair de valeurs, la médiane est la moyenne des deux nombres du milieu. Pour 3, 5, 7, 9 : (5 + 7) / 2 = 6.",
            "Les formules sont données à l'examen. Remplacez par les nombres et gardez les unités. Vitesse = distance / temps : un camion parcourt 120 miles en 2 heures, donc vitesse = 120 / 2 = 60 miles par heure. Masse volumique = masse / volume : un bloc de 40 grammes d'un volume de 20 centimètres cubes a une masse volumique de 40 / 20 = 2 grammes par centimètre cube.",
            "Vérifiez que votre réponse a du sens. Une moyenne doit se trouver entre la plus petite et la plus grande valeur. Écrivez l'unité avec chaque réponse."
          ],
          steps: ["Rangez les données de la plus petite à la plus grande.", "Moyenne : additionnez toutes les valeurs et divisez par leur nombre.", "Médiane : trouvez celle du milieu (ou la moyenne des deux du milieu).", "Mode : la valeur la plus fréquente. Étendue : la plus grande moins la plus petite.", "Pour une formule : écrivez-la, remplacez par les nombres, calculez et ajoutez les unités."],
          words: [["Moyenne", "le total divisé par le nombre de valeurs."], ["Médiane", "la valeur du milieu quand les nombres sont rangés dans l'ordre."], ["Mode", "la valeur qui apparaît le plus souvent."], ["Étendue", "la plus grande valeur moins la plus petite."], ["Masse volumique", "la quantité de masse dans un espace : la masse divisée par le volume (on dit aussi densité)."]],
          slides: [
            { title: "Quatre nombres qui décrivent les données", bullets: ["Moyenne : le total divisé par le nombre de valeurs", "Médiane : la valeur du milieu, dans l'ordre", "Mode : la valeur la plus fréquente", "Étendue : la plus grande moins la plus petite"] },
            { title: "Exemple corrigé", bullets: ["Données : 80, 84, 84, 90, 92", "Moyenne 86, médiane 84, mode 84, étendue 12"] },
            { title: "Utiliser une formule donnée", bullets: ["Vitesse = distance / temps", "Masse volumique = masse / volume", "Remplacez, calculez, écrivez les unités"] }
          ],
          tryIt: "Entraînement seulement. 1) Minutes pour qu'un glaçon fonde, sur cinq essais : 6, 7, 7, 8, 12. Trouvez la moyenne, la médiane, le mode et l'étendue. 2) Une cycliste parcourt 30 miles en 3 heures. Vitesse = distance / temps. Réponses : 1) Moyenne 40 / 5 = 8 minutes ; médiane 7 ; mode 7 ; étendue 12 - 6 = 6 minutes. 2) 30 / 3 = 10 miles par heure.",
          youCanNow: "trouver la moyenne, la médiane, le mode et l'étendue de données et utiliser une formule scientifique avec les bonnes unités.",
          quickCheck: [
            { objective: "O5", q: "Données : 2, 4, 4, 6, 9. Quelle est la moyenne ?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, et 25 / 5 = 5." },
            { objective: "O5", q: "Une pierre a une masse de 60 grammes et un volume de 20 centimètres cubes. Masse volumique = masse / volume. Quelle est la masse volumique ?", options: ["40 grammes par centimètre cube", "1 200 grammes par centimètre cube", "80 grammes par centimètre cube", "3 grammes par centimètre cube"], answer: 3, why: "60 / 20 = 3 grammes par centimètre cube." }
          ]
        },
        {
          title: "Tout ensemble : votre propre test équitable",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Préparer un test équitable, noter les données dans un tableau, calculer la moyenne et écrire une conclusion appuyée par les données.",
          text: [
            "Utilisez maintenant toutes les compétences à la fois. Beaucoup de questions d'examen décrivent une expérience complète avec un tableau, puis posent des questions sur les variables, les calculs et la conclusion. Faire vous-même une petite expérience rend ces questions beaucoup plus faciles.",
            "Exemple sans danger dans la cuisine. Question : est-ce que remuer change la vitesse à laquelle le sucre se dissout ? Hypothèse : si l'eau est remuée, alors le sucre se dissoudra plus vite. Variable indépendante : remué ou non remué. Variable dépendante : temps de dissolution (secondes). Contrôlées : même verre, même quantité d'eau du robinet, même température de l'eau, un morceau de sucre à chaque fois. Faites trois essais de chaque.",
            "Résultats d'exemple (pour l'entraînement seulement). Remué : 40, 45, 50 secondes ; moyenne 45. Non remué : 170, 180, 190 secondes ; moyenne 180. Conclusion : dans ce test, remuer a fait dissoudre le sucre plus vite, environ 4 fois plus vite en moyenne. Un diagramme en barres avec deux barres (remué, non remué) le montre clairement.",
            "Sécurité : utilisez seulement de l'eau du robinet à température ambiante ou tiède, du sucre ou du sel, et des verres propres. Pas de cuisinière, pas de flamme et pas de produits de nettoyage. Ne buvez et ne goûtez rien pendant le test."
          ],
          steps: ["Écrivez votre question et une hypothèse de type \"Si ..., alors ...\".", "Nommez les variables indépendante, dépendante et contrôlées.", "Faites au moins trois essais pour chaque groupe et notez les résultats dans un tableau.", "Calculez la moyenne de chaque groupe.", "Dessinez un diagramme en barres et écrivez une conclusion de deux phrases qui reste dans vos données."],
          words: [["Essai", "une réalisation de l'expérience."], ["Tableau de données", "des lignes et des colonnes qui contiennent vos résultats."], ["Conclusion", "ce que montrent les résultats, en une ou deux phrases."]],
          slides: [
            { title: "Votre test équitable", bullets: ["Question et hypothèse", "Variables indépendante, dépendante et contrôlées", "Trois essais par groupe"] },
            { title: "Notez et calculez", bullets: ["Écrivez les résultats dans un tableau", "Calculez la moyenne de chaque groupe", "Dessinez un diagramme en barres"] },
            { title: "Écrivez la conclusion", bullets: ["Dites ce que montrent les données", "Restez dans vos données", "Donnez une façon d'améliorer le test"] },
            { title: "Restez en sécurité", bullets: ["Seulement de l'eau du robinet, du sucre ou du sel", "Pas de cuisinière, de flamme ni de produits chimiques", "Ne goûtez pas et ne buvez pas les échantillons"] }
          ],
          tryIt: "Tâche finale : réalisez votre propre petite expérience sans danger dans la cuisine (remuer et sucre, ou un autre test à un seul changement avec de l'eau, du sucre ou du sel). Écrivez la question, l'hypothèse et les variables, notez trois essais par groupe dans un tableau, calculez chaque moyenne, dessinez un diagramme en barres et écrivez une conclusion de deux phrases. Ajoutez en bas votre plan de révision pour le GED avec des dates et évaluez-le avec la grille d'évaluation.",
          youCanNow: "préparer et réaliser un test équitable, noter les données et en faire la moyenne, et écrire une conclusion appuyée par les données.",
          quickCheck: [
            { objective: "O3", q: "Dans le test du sucre remué, qu'est-ce qui doit rester pareil pour que le test soit équitable ?", options: ["La quantité et la température de l'eau", "Le fait de remuer ou non l'eau", "Le temps de dissolution", "La conclusion"], answer: 0, why: "La quantité et la température de l'eau sont des variables contrôlées ; seul le fait de remuer change." },
            { objective: "O4", q: "Moyenne avec remuage : 45 secondes. Moyenne sans remuage : 180 secondes. Quelle conclusion est appuyée ?", options: ["Remuer rend le sucre plus sucré", "Dans ce test, remuer a fait dissoudre le sucre plus vite", "Le sel se dissout plus vite que le sucre", "Remuer n'a aucun effet"], answer: 1, why: "Le sucre s'est dissous beaucoup plus vite dans les verres remués, et la conclusion reste dans les données." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Nombres, tableaux et graphiques en sciences",
        questions: [
          { objective: "O4", q: "Sur la plupart des graphiques scientifiques, que montre l'axe du bas (axe x) ?", options: ["Le titre", "La conclusion", "En général la variable indépendante, ce qui a été changé", "Les unités de monnaie"], answer: 2, why: "L'axe x montre en général ce que le scientifique a changé." },
          { objective: "O4", q: "Quel graphique est le meilleur pour comparer la hauteur moyenne des plantes de trois groupes ?", options: ["Un diagramme en barres", "Une carte", "Un diagramme circulaire de tout le jardin", "Une photo"], answer: 0, why: "Les diagrammes en barres comparent des groupes côte à côte." },
          { objective: "O5", q: "Données : 10, 12, 15, 15, 18. Quelle est l'étendue ?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Données : 3, 8, 6, 1, 7. Quelle est la médiane ?", options: ["3", "6", "7", "5"], answer: 1, why: "Dans l'ordre : 1, 3, 6, 7, 8. La valeur du milieu est 6." },
          { objective: "O5", q: "Un bus parcourt 150 miles en 3 heures. Vitesse = distance / temps. Quelle est la vitesse ?", options: ["450 miles par heure", "153 miles par heure", "50 miles par heure", "147 miles par heure"], answer: 2, why: "150 / 3 = 50 miles par heure." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation à l'examen GED : Sciences",
    questions: [
      { objective: "O1", q: "Que fait ce cours pour vous ?", options: ["Il vous prépare à l'épreuve de sciences du GED", "Il vous donne un diplôme GED", "Il fait de vous un scientifique diplômé", "Il remplace l'examen GED"], answer: 0, why: "Le cours vous prépare ; le GED Testing Service organise l'examen et votre État délivre le diplôme." },
      { objective: "O1", q: "Quel est un autre examen d'équivalence du diplôme de fin d'études secondaires utilisé par certains États ?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "Le HiSET est un autre examen d'équivalence du diplôme de fin d'études secondaires." },
      { objective: "O1", q: "Quel domaine de compétences de l'épreuve de sciences ged.com cite-t-il ?", options: ["Apprendre par cœur le nom des os", "Utiliser des nombres et des graphiques en sciences", "Dessiner des cartes", "Écrire des poèmes"], answer: 1, why: "Les trois domaines sont la lecture pour comprendre, les expériences, et les nombres et graphiques." },
      { objective: "O1", q: "Où devez-vous vérifier la durée, les frais et les règles actuels de l'examen GED ?", options: ["Sur un vieux prospectus", "Auprès d'un ami", "Dans un commentaire sous une vidéo", "Sur ged.com et auprès du bureau d'éducation des adultes de votre État"], answer: 3, why: "Les règles et les frais changent ; les sources officielles ont les informations à jour." },
      { objective: "O2", q: "Un texte explique un mot nouveau entre virgules juste après lui. Que devez-vous faire ?", options: ["Sauter le texte", "Utiliser ce sens pour comprendre le texte", "Deviner un autre sens", "Le chercher sur votre téléphone pendant l'examen"], answer: 1, why: "Les textes définissent souvent les mots difficiles directement." },
      { objective: "O2", q: "Un texte dit que les abeilles transportent le pollen d'une fleur à l'autre, ce qui aide beaucoup de cultures à donner des fruits. Quelle affirmation est appuyée ?", options: ["Moins d'abeilles pourrait vouloir dire moins de fruits pour certaines cultures", "Les abeilles produisent toute la nourriture", "Les abeilles mangent des fruits", "Les fleurs n'ont pas besoin de pollen"], answer: 0, why: "Si les abeilles aident les cultures à donner des fruits, moins d'abeilles pourrait réduire les fruits." },
      { objective: "O2", q: "Quel choix de réponse devez-vous barrer ?", options: ["Celui que le texte prouve", "Celui qui contient un nombre du texte", "Celui qui ajoute des faits que le texte ne donne jamais", "Celui qui reprend l'idée principale"], answer: 2, why: "Les réponses qui ajoutent des faits absents du texte ne sont pas appuyées." },
      { objective: "O3", q: "Qu'est-ce qu'une hypothèse ?", options: ["La réponse finale", "Une supposition que l'on peut tester, souvent \"Si ..., alors ...\"", "Un graphique", "Une liste d'outils"], answer: 1, why: "Une hypothèse est une supposition que l'on peut tester sur ce qui va se passer." },
      { objective: "O3", q: "Un test vérifie si la musique change la vitesse à laquelle des ouvriers emballent des cartons. Quelle est la variable indépendante ?", options: ["Le nombre de cartons emballés", "La taille des cartons", "L'heure de la journée", "Avec ou sans musique"], answer: 3, why: "La musique est la seule chose changée exprès." },
      { objective: "O3", q: "Dans le test de la musique, quelle est la variable dépendante ?", options: ["Le nombre de cartons emballés", "Avec ou sans musique", "Le nom des ouvriers", "Le type de ruban adhésif"], answer: 0, why: "Le nombre de cartons emballés est ce qui est mesuré." },
      { objective: "O3", q: "Pourquoi répéter chaque essai plusieurs fois ?", options: ["Pour utiliser plus de matériel", "Pour que le test dure plus longtemps", "Pour rendre les résultats plus fiables", "Pour changer plus de variables"], answer: 2, why: "Plus d'essais réduisent le risque qu'un résultat bizarre vous trompe." },
      { objective: "O3", q: "Qu'est-ce qu'un groupe témoin ?", options: ["Le groupe qui a le plus de personnes", "Un groupe qui ne reçoit aucun changement, pour comparer", "Les scientifiques qui font le test", "Un groupe qui change deux choses"], answer: 1, why: "Le groupe témoin montre ce qui se passe sans le changement." },
      { objective: "O4", q: "Un graphique en courbe montre la température d'un patient qui baisse chaque heure après un médicament (pour l'entraînement seulement). Quelle est la tendance ?", options: ["En baisse", "En hausse", "Stable", "Pas de données"], answer: 0, why: "Les valeurs baissent chaque heure." },
      { objective: "O4", q: "Que devez-vous lire en premier sur un graphique ?", options: ["Le plus petit nombre", "Seulement les choix de réponse", "La couleur des barres", "Le titre, les légendes et les unités"], answer: 3, why: "Les légendes et les unités vous disent ce que veulent dire les nombres." },
      { objective: "O4", q: "Un tableau a testé de l'eau à 10, 20 et 30 degrés. Quelle phrase va au-delà des données ?", options: ["De l'eau à 30 degrés a été testée", "Le résultat à 20 degrés est dans le tableau", "À 100 degrés, le sucre se dissout instantanément", "Le test a utilisé trois températures"], answer: 2, why: "100 degrés n'ont pas été testés, donc les données ne peuvent pas le montrer." },
      { objective: "O4", q: "Quel graphique montre les parties d'un tout ?", options: ["Graphique en courbe", "Diagramme circulaire", "Nuage de points", "Droite numérique"], answer: 1, why: "Un diagramme circulaire divise un tout en parties." },
      { objective: "O5", q: "Données : 5, 7, 7, 9, 12. Quel est le mode ?", options: ["5", "8", "12", "7"], answer: 3, why: "7 apparaît le plus souvent." },
      { objective: "O5", q: "Données : 6, 8, 10, 12. Quelle est la médiane ?", options: ["9", "8", "10", "36"], answer: 0, why: "Les deux valeurs du milieu sont 8 et 10, et (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Une voiture parcourt 200 miles en 4 heures. Vitesse = distance / temps. Quelle est la vitesse ?", options: ["800 miles par heure", "50 miles par heure", "204 miles par heure", "196 miles par heure"], answer: 1, why: "200 / 4 = 50 miles par heure." },
      { objective: "O5", q: "Données : 20, 30, 40. Quelle est la moyenne ?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, et 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et refaites le test.",
    criteria: [
      { name: "Question et hypothèse", objective: "O3", notYet: "Pas de question, ou l'hypothèse ne peut pas être testée.", meets: "Une question claire et une hypothèse de type \"Si ..., alors ...\".", exceeds: "L'hypothèse dit aussi pourquoi l'apprenant attend ce résultat." },
      { name: "Variables et test équitable", objective: "O3", notYet: "Des variables manquent ou plus d'une chose change.", meets: "Les variables indépendante, dépendante et au moins deux variables contrôlées sont nommées ; une seule chose change.", exceeds: "Inclut aussi un groupe témoin et explique pourquoi chaque variable contrôlée compte." },
      { name: "Données et calculs", objective: "O5", notYet: "Moins de trois essais par groupe, ou la moyenne est fausse.", meets: "Trois essais par groupe dans un tableau, avec une moyenne juste et les unités.", exceeds: "Donne aussi l'étendue de chaque groupe et commente l'écart entre les essais." },
      { name: "Graphique et conclusion", objective: "O4", notYet: "Pas de graphique, ou la conclusion affirme plus que ce que montrent les données.", meets: "Un diagramme en barres avec légendes et une conclusion de deux phrases qui reste dans les données.", exceeds: "Donne aussi une façon d'améliorer le test la prochaine fois." },
      { name: "Lecture des résultats", objective: "O2", notYet: "La conclusion ne correspond pas aux nombres.", meets: "La conclusion correspond aux nombres du tableau.", exceeds: "Montre les nombres exacts qui appuient la conclusion." },
      { name: "Plan de révision", objective: "O1", notYet: "Pas de plan de révision, ou pas de dates.", meets: "Un plan de révision avec au moins une date par semaine jusqu'à la semaine cible de l'examen.", exceeds: "Inclut aussi une date pour GED Ready ou une date d'examen réservée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent Atteint ou mieux sur toutes les lignes de la grille",
      "Apprenants qui passent GED Ready ou un test d'exemple gratuit de ged.com dans les 30 jours",
      "Apprenants qui réservent ou réussissent l'épreuve de sciences du GED dans les 90 jours (selon leurs propres déclarations)",
      "Les programmes partenaires signalent plus d'apprenants qui passent à une formation professionnelle dans la santé, les laboratoires ou les métiers manuels"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur avec internet, ou les leçons imprimées",
      "Du papier, un stylo et une calculatrice simple (la calculatrice du téléphone suffit pour s'entraîner)",
      "Pour la tâche finale : deux verres propres, de l'eau du robinet, des morceaux de sucre ou du sel, une cuillère et le minuteur du téléphone",
      "Les tests d'exemple gratuits de ged.com ; GED Ready si l'apprenant choisit de l'acheter",
      "Environ 90 minutes pour les leçons et les contrôles, plus environ 45 minutes pour la tâche finale"
    ],
    facilitatorNotes: [
      "Commencez par le test de départ et le test d'exemple gratuit de sciences de ged.com pour voir de quel domaine de compétences chaque apprenant a le plus besoin.",
      "Faites d'abord l'expérience du sucre remué en démonstration de groupe, puis demandez aux apprenants de concevoir leur propre test à un seul changement.",
      "Vérifiez la sécurité de chaque plan d'expérience avant que les apprenants le réalisent : pas de source de chaleur, pas de flamme, pas de produits chimiques, rien à goûter.",
      "Entraînez-vous à lire les graphiques à voix haute : titre, légendes, unités, tendance, puis conclusion.",
      "Vérifiez quel examen votre État utilise (GED ou HiSET) et partagez les centres d'examen locaux et toute aide pour les frais."
    ]
  }
};
