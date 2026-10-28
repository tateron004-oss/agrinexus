"use strict";

// Koach Learn course, French translation of shared/data-science-beginners.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python/pandas code and the dataset's own values (Lunch, Dinner, column names) are kept exactly; the tips dataset is in US dollars.

const COLAB = { name: "Google Colab : questions fréquentes", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas : 10 minutes pour découvrir pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn : load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-fr",
  lang: "fr",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Introduction à la science des données et à l'analyse de données",
  skills: "Poser une question à laquelle les données peuvent répondre, Calculer des moyennes et repérer les valeurs aberrantes, Charger des données avec pandas, Nettoyer et regrouper des données, Faire un graphique et partager ses résultats",
  outcome: "prendre un vrai jeu de données dans Google Colab, le charger avec pandas, le nettoyer, répondre à une question claire avec des moyennes et des groupes, faire un graphique et rédiger trois constats honnêtes.",
  about: [
    "Les analystes de données transforment des lignes de chiffres en réponses sur lesquelles on peut agir : quel jour une boutique a le plus de monde, quel exercice aide le plus une équipe, où va l'argent d'un programme. C'est l'une des compétences professionnelles les plus utiles aujourd'hui, et on peut commencer gratuitement.",
    "Le chapitre 1 enseigne la façon de penser, sans code : poser une bonne question, connaître ses données et utiliser les moyennes sans se faire piéger. Le chapitre 2 passe à Google Colab, un site gratuit qui exécute Python, où vous utilisez pandas, l'outil de données le plus populaire en Python, sur un vrai jeu de données d'un restaurant.",
    "Chaque leçon dure environ cinq minutes et se termine par un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Dans Google Colab, chargez avec pandas le jeu de données des pourboires d'un restaurant, cherchez les valeurs manquantes, ajoutez une colonne avec le pourboire en pourcentage de l'addition, trouvez le pourcentage moyen de pourboire pour chaque jour et pour le déjeuner par rapport au dîner, faites un graphique en barres de l'un des deux, et écrivez trois constats en phrases simples, dont une chose que les données ne peuvent pas vous dire.",
  chapters: [
    {
      name: "Chapitre 1 : Penser comme un analyste de données",
      lessons: [
        {
          title: "Ce qu'est la science des données, et les cinq étapes",
          minutes: 4,
          goal: "Nommer les cinq étapes d'un projet de données et les relier à un exemple réel.",
          text: [
            "La science des données, c'est utiliser des données pour répondre à des questions et prendre de meilleures décisions. L'analyse de données en est la partie pratique : nettoyer, compter, comparer et faire des graphiques.",
            "Presque tous les projets suivent cinq étapes. Demander : que voulez-vous savoir ? Obtenir : trouver les données. Nettoyer : corriger les erreurs et les trous. Explorer : compter, faire des moyennes, comparer et faire des graphiques. Partager : dire aux gens ce que vous avez trouvé avec des mots simples.",
            "Exemple : une entraîneuse de football pour les jeunes se demande « Marquons-nous plus en deuxième mi-temps ? » Elle obtient les scores de chaque match, retire un match qui a été annulé, additionne les buts de la première et de la deuxième mi-temps, et montre un graphique simple à l'équipe."
          ],
          steps: ["Posez une question claire.", "Obtenez les données.", "Nettoyez-les.", "Explorez-les avec des comptes, des moyennes et des graphiques.", "Partagez ce que vous avez trouvé."],
          words: [["Données", "des faits et des nombres recueillis sur quelque chose."], ["Science des données", "utiliser des données pour répondre à des questions et guider des décisions."], ["Analyse de données", "nettoyer, résumer et mettre en graphique des données pour trouver des réponses."], ["Jeu de données", "un ensemble de données, en général un tableau."]],
          slides: [
            { title: "La science des données, c'est", bullets: ["Utiliser des données pour répondre à des questions", "Et pour prendre de meilleures décisions"] },
            { title: "Les cinq étapes", bullets: ["Demander, Obtenir, Nettoyer", "Explorer, Partager"] },
            { title: "Exemple : l'entraîneuse de football", bullets: ["Demander : plus de buts en deuxième mi-temps ?", "Obtenir et nettoyer les scores des matchs", "Explorer et partager un graphique simple"] }
          ],
          tryIt: "Pensez à une question de votre vie, de votre travail ou de votre quartier à laquelle des données pourraient répondre (par exemple « Quel jour est-ce que je dépense le plus ? »). Écrivez ce que vous feriez à chacune des cinq étapes.",
          youCanNow: "décrire les cinq étapes d'un projet de données et en préparer un."
        },
        {
          title: "Connaître ses données : lignes, colonnes et types",
          minutes: 5,
          goal: "Lire un tableau de données et dire ce que contient chaque colonne et de quel type elle est.",
          text: [
            "La plupart des données se présentent sous forme de tableau. Des données bien rangées (tidy data) veulent dire que chaque ligne est une chose mesurée (un match, une vente, une personne) et chaque colonne est un fait sur elle (date, montant, équipe).",
            "Les colonnes ont des types. Les nombres permettent de calculer, comme un prix ou des minutes. Les catégories sont des groupes, comme le jour de la semaine ou le nom d'une équipe : on les compte, mais on n'en fait pas la moyenne. Les dates sont un type à part.",
            "Les bonnes questions correspondent aux données que vous avez. « Quelle est la vente moyenne le samedi ? » demande une colonne avec le montant de la vente et une colonne avec le jour. Si les données ne l'ont pas, vous ne pouvez pas répondre, et le dire fait partie du travail."
          ],
          steps: ["Dites ce que représente une ligne.", "Listez chaque colonne et ce qu'elle veut dire.", "Marquez chaque colonne comme nombre, catégorie ou date.", "Vérifiez que votre question peut être résolue avec ces colonnes."],
          words: [["Ligne", "un enregistrement : une chose mesurée."], ["Colonne", "un fait noté pour chaque ligne."], ["Données bien rangées", "une ligne par chose, une colonne par fait."], ["Numérique", "une colonne de nombres avec lesquels on peut calculer."], ["Catégorielle", "une colonne de groupes ou d'étiquettes, comme le jour ou l'équipe."]],
          slides: [
            { title: "Des données bien rangées", bullets: ["Chaque ligne : une chose mesurée", "Chaque colonne : un fait sur elle"] },
            { title: "Les types de colonnes", bullets: ["Nombres : prix, minutes", "Catégories : jour, équipe", "Dates"] },
            { title: "Faire correspondre question et données", bullets: ["La question a besoin des bonnes colonnes", "Colonne manquante = pas de réponse possible", "Dites-le honnêtement"] }
          ],
          tryIt: "Faites un petit tableau de vos 7 derniers jours : date, jour de la semaine, heures de sommeil et humeur de 1 à 5. Marquez chaque colonne comme nombre, catégorie ou date, et écrivez une question à laquelle le tableau peut répondre et une à laquelle il ne peut pas.",
          youCanNow: "lire un tableau, nommer le type de chaque colonne et vérifier si une question correspond aux données."
        },
        {
          title: "Moyennes, valeurs aberrantes et pièges à éviter",
          minutes: 6,
          goal: "Calculer la moyenne et la médiane, repérer une valeur aberrante et éviter une erreur courante.",
          text: [
            "La moyenne est le total divisé par le nombre de valeurs. La médiane est la valeur du milieu quand on les trie. Pour 3, 4, 4, 5 et 34, la moyenne est 50 / 5 = 10, mais la médiane est 4.",
            "Ce 34 est une valeur aberrante : une valeur loin des autres. Ce peut être une faute de frappe, ou une valeur réelle et importante. Les valeurs aberrantes tirent beaucoup la moyenne mais bougent à peine la médiane, donc quand il y en a, la médiane décrit souvent mieux une valeur typique.",
            "Quand deux choses varient ensemble, on parle de corrélation, mais cela ne prouve pas que l'une cause l'autre. Les ventes de glaces et les coups de soleil augmentent tous les deux en été : c'est le soleil qui cause les deux. Avant d'affirmer une cause, cherchez une autre raison."
          ],
          steps: ["Triez les nombres.", "Moyenne : additionnez-les et divisez par leur nombre.", "Médiane : prenez celui du milieu (ou la moyenne des deux du milieu).", "Cherchez les valeurs loin des autres et vérifiez si ce sont des erreurs.", "Avant de dire « X cause Y », cherchez une autre explication."],
          words: [["Moyenne", "le total divisé par le nombre de valeurs."], ["Médiane", "la valeur du milieu quand les nombres sont triés."], ["Valeur aberrante", "une valeur loin des autres."], ["Corrélation", "deux choses qui ont tendance à varier ensemble."], ["Causalité", "une chose qui en fait vraiment arriver une autre."]],
          slides: [
            { title: "Moyenne et médiane", bullets: ["Moyenne : total / nombre", "Médiane : la valeur du milieu une fois triées", "3, 4, 4, 5, 34 : moyenne 10, médiane 4"] },
            { title: "Les valeurs aberrantes", bullets: ["Loin des autres valeurs", "Faute de frappe, ou réelles et importantes", "Elles tirent la moyenne, pas la médiane"] },
            { title: "Corrélation n'est pas causalité", bullets: ["Glaces et coups de soleil augmentent ensemble", "C'est le soleil qui cause les deux", "Cherchez d'abord une autre raison"] }
          ],
          tryIt: "Voici 7 temps de livraison en minutes : 22, 25, 19, 24, 95, 21, 23. Calculez à la main la moyenne et la médiane, nommez la valeur aberrante, et écrivez quel nombre décrit mieux une livraison typique et pourquoi. (Moyenne environ 32,7, médiane 23.)",
          youCanNow: "calculer une moyenne et une médiane, repérer les valeurs aberrantes et ne pas confondre corrélation et causalité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Penser comme un analyste de données",
        questions: [
          { q: "Quelle est la première étape d'un projet de données ?", options: ["Faire un graphique", "Supprimer les valeurs aberrantes", "Poser une question claire", "Partager les résultats"], answer: 2, why: "Une question claire guide toutes les autres étapes." },
          { q: "Dans un tableau de matchs, « nom de l'équipe » est quel type de colonne ?", options: ["Catégorielle", "Numérique", "Date", "Valeur aberrante"], answer: 0, why: "Les noms d'équipes sont des groupes, pas des nombres." },
          { q: "Quelle est la médiane de 2, 9, 3, 7, 5 ?", options: ["3", "5", "5,2", "7"], answer: 1, why: "Triés : 2, 3, 5, 7, 9. La valeur du milieu est 5." },
          { q: "Dans une liste, une maison coûte dix fois plus que les autres. Qu'est-ce qui décrit mieux une maison typique ?", options: ["La moyenne", "La médiane", "Le prix le plus haut", "Le total"], answer: 1, why: "La médiane est peu tirée par une seule grande valeur aberrante." },
          { q: "Les enfants qui font plus de sport ont de meilleures notes. Que ne devez-vous PAS conclure tout de suite ?", options: ["Que les deux varient ensemble", "Que le sport cause les meilleures notes", "Que plus de données pourraient aider", "Que d'autres raisons peuvent exister"], answer: 1, why: "Une corrélation seule ne prouve pas une causalité." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Analyser des données avec Python",
      lessons: [
        {
          title: "Charger et regarder des données avec pandas",
          minutes: 5,
          goal: "Charger un jeu de données dans un DataFrame pandas dans Colab et le décrire.",
          text: [
            "pandas est une bibliothèque Python gratuite pour travailler avec des tableaux, et elle est déjà dans Google Colab. Un tableau dans pandas s'appelle un DataFrame, souvent nommé df.",
            "Pour s'entraîner, on utilise un vrai jeu de données de 244 repas dans un restaurant américain, fourni avec seaborn, une bibliothèque de graphiques : df = sns.load_dataset(\"tips\"). Il faut internet, ce que Colab a. Ses colonnes comprennent total_bill (l'addition en dollars), tip (le pourboire), day (le jour), time (Lunch ou Dinner, déjeuner ou dîner) et size (le nombre de personnes à table). Pour vos propres données, pd.read_csv(\"file.csv\") charge un fichier CSV que vous envoyez.",
            "Quatre commandes vous montrent ce que vous avez : df.head() affiche les cinq premières lignes, df.shape donne le nombre de lignes et de colonnes, df.info() liste le type de chaque colonne, et df.describe() donne le nombre, la moyenne, le minimum, le maximum et plus pour les colonnes de nombres."
          ],
          steps: ["Dans un nouveau notebook Colab, exécutez : import pandas as pd et import seaborn as sns", "Chargez : df = sns.load_dataset(\"tips\")", "Regardez : df.head()", "Taille et types : df.shape et df.info()", "Résumé : df.describe()"],
          words: [["pandas", "une bibliothèque Python gratuite pour travailler avec des tableaux de données."], ["DataFrame", "un tableau dans pandas, avec des lignes et des colonnes nommées."], ["CSV", "un fichier texte simple qui contient un tableau, avec des virgules entre les valeurs."], ["head()", "affiche les premières lignes d'un DataFrame."], ["describe()", "donne des chiffres de résumé pour chaque colonne de nombres."]],
          slides: [
            { title: "pandas et les DataFrames", bullets: ["pandas : l'outil de tableaux de Python", "Un tableau est un DataFrame, souvent appelé df", "Déjà dans Google Colab"] },
            { title: "Charger les données", bullets: ["df = sns.load_dataset(\"tips\")", "Votre propre fichier : pd.read_csv(\"file.csv\")"] },
            { title: "Regarder avant d'analyser", bullets: ["df.head() : les premières lignes", "df.shape et df.info() : taille et types", "df.describe() : chiffres de résumé"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Chargez le jeu de données tips dans Colab. Notez combien il a de lignes et de colonnes, quelles colonnes sont des nombres et lesquelles des catégories, et la moyenne et le maximum de total_bill donnés par df.describe().",
          youCanNow: "charger un jeu de données avec pandas et décrire sa taille, ses colonnes et ses chiffres de résumé."
        },
        {
          title: "Nettoyer, filtrer et regrouper",
          minutes: 6,
          goal: "Chercher les valeurs manquantes, ajouter une colonne, filtrer des lignes et comparer des groupes.",
          text: [
            "Nettoyez d'abord. df.isna().sum() compte les valeurs manquantes dans chaque colonne. S'il en manque, vous pouvez supprimer ces lignes avec df.dropna() ou décider comment les remplir ; notez ce que vous avez fait. Cherchez aussi les valeurs impossibles, comme une addition négative.",
            "Créez la colonne dont vous avez besoin. Un pourboire de 5 dollars ne veut pas dire la même chose sur une addition de 20 dollars et sur une de 100 dollars, alors ajoutez une mesure juste : df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Filtrez des lignes avec une condition : df[df[\"time\"] == \"Dinner\"] ne garde que les dîners. Regroupez pour comparer : df.groupby(\"day\")[\"tip_pct\"].mean() donne le pourcentage moyen de pourboire pour chaque jour. Si pandas affiche un avertissement jaune, lisez-le, mais ce n'est pas une erreur. .round(1) rend les nombres plus lisibles."
          ],
          steps: ["Comptez les valeurs manquantes : df.isna().sum()", "Ajoutez une colonne : df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Filtrez : dinners = df[df[\"time\"] == \"Dinner\"]", "Regroupez : df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Essayez un autre groupe, comme time ou size."],
          words: [["Valeur manquante", "une case vide ; pandas l'affiche comme NaN."], ["Nettoyage", "trouver et corriger les valeurs manquantes, fausses ou impossibles."], ["Filtrer", "ne garder que les lignes qui remplissent une condition."], ["groupby", "séparer les lignes en groupes et résumer chaque groupe."]],
          slides: [
            { title: "Nettoyez d'abord", bullets: ["df.isna().sum() compte les valeurs manquantes", "Supprimez ou remplissez, et notez ce que vous avez fait", "Cherchez les valeurs impossibles"] },
            { title: "Créez une mesure juste", bullets: ["tip_pct = tip / total_bill * 100", "Compare justement les grosses et petites additions"] },
            { title: "Filtrer et regrouper", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Un avertissement n'est pas une erreur"] }
          ],
          sources: [PANDAS],
          tryIt: "Cherchez les valeurs manquantes dans les données tips. Ajoutez la colonne tip_pct. Trouvez le pourcentage moyen de pourboire pour chaque jour et pour Lunch par rapport à Dinner. Notez quel jour avait la moyenne la plus haute.",
          youCanNow: "chercher les valeurs manquantes, créer une nouvelle colonne, filtrer des lignes et comparer des groupes."
        },
        {
          title: "Faire un graphique et partager des constats honnêtes",
          minutes: 6,
          goal: "Faire un graphique en barres clair et écrire des constats dignes de confiance.",
          text: [
            "Un graphique montre une tendance plus vite qu'un tableau. Un graphique en barres est le meilleur pour comparer des groupes : tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() puis tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Donnez un titre à chaque graphique (vous pouvez l'écrire en français) et dites ce que veulent dire les nombres.",
            "Écrivez les constats en phrases simples avec le chiffre : « En moyenne, c'est le [jour] que les pourboires étaient les plus élevés, à environ X pour cent de l'addition. » Utilisez le chiffre que votre propre code a affiché.",
            "Soyez honnête sur les limites. Dites combien de lignes a un groupe : df[\"day\"].value_counts() montre un jour avec peu de repas, donc sa moyenne est moins fiable. Ces données viennent d'un seul restaurant, donc elles ne valent peut-être pas pour les autres. Et elles montrent ce qui s'est passé, pas pourquoi."
          ],
          steps: ["Calculez les chiffres par groupe.", "Mettez-les en graphique : .plot(kind=\"bar\", title=\"...\")", "Vérifiez la taille des groupes avec value_counts().", "Écrivez trois constats avec de vrais chiffres.", "Ajoutez une limite : ce que les données ne peuvent pas vous dire."],
          words: [["Graphique en barres", "un graphique fait de barres qui sert à comparer des groupes."], ["value_counts()", "compte combien de lignes a chaque groupe."], ["Constat", "une phrase claire qui dit ce que montrent les données, avec un chiffre."], ["Limite", "quelque chose que vos données ou votre analyse ne peuvent pas vous dire."]],
          slides: [
            { title: "Les graphiques en barres comparent des groupes", bullets: ["groupby, puis .plot(kind=\"bar\")", "Ajoutez toujours un titre"] },
            { title: "Écrire des constats clairs", bullets: ["Une phrase simple plus le chiffre", "Utilisez le chiffre affiché par votre code"] },
            { title: "Soyez honnête sur les limites", bullets: ["Les petits groupes sont moins fiables", "Un seul restaurant, pas tous les restaurants", "Montre ce qui s'est passé, pas pourquoi"] }
          ],
          sources: [PANDAS],
          tryIt: "Tâche finale : dans un notebook, chargez les données tips, cherchez les valeurs manquantes, ajoutez tip_pct, trouvez le pourcentage moyen de pourboire par jour et par moment du repas, faites un graphique en barres de l'un des deux avec un titre, et écrivez trois constats avec des chiffres, dont une chose que ces données ne peuvent pas vous dire.",
          youCanNow: "transformer un jeu de données en graphique et en constats honnêtes écrits avec des mots simples."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Analyser des données avec Python",
        questions: [
          { q: "Dans pandas, qu'est-ce qu'un DataFrame ?", options: ["Un cadre photo", "Un graphique", "Une erreur Python", "Un tableau avec des lignes et des colonnes nommées"], answer: 3, why: "Les DataFrames sont les tableaux de pandas." },
          { q: "Quelle commande compte les valeurs manquantes dans chaque colonne ?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna repère les cases vides et sum les compte." },
          { q: "Pourquoi ajouter une colonne de pourcentage de pourboire au lieu de comparer les pourboires en dollars ?", options: ["Les dollars ne sont pas des nombres", "pandas ne sait pas utiliser les dollars", "Un pourcentage compare justement les grosses et les petites additions", "Cela rend le tableau plus petit"], answer: 2, why: "Le pourcentage de l'addition est une comparaison juste." },
          { q: "Quelle ligne donne le pourcentage moyen de pourboire pour chaque jour ?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby sépare par jour ; mean fait la moyenne de chaque groupe." },
          { q: "Un jour n'a que 19 repas. Que doit dire votre compte rendu ?", options: ["Rien", "Que les données sont fausses", "Que sa moyenne est moins fiable parce que le groupe est petit", "Que c'est le meilleur jour"], answer: 2, why: "Les petits groupes rendent les moyennes moins sûres." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à la science des données et à l'analyse de données",
    questions: [
      { q: "La science des données consiste surtout à :", options: ["Réparer des ordinateurs", "Utiliser des données pour répondre à des questions et prendre des décisions", "Taper plus vite", "Construire des sites web"], answer: 1, why: "Elle transforme des données en réponses." },
      { q: "Quel ordre est le bon pour un projet de données ?", options: ["Demander, Obtenir, Nettoyer, Explorer, Partager", "Partager, Demander, Nettoyer, Obtenir, Explorer", "Explorer, Partager, Demander, Obtenir, Nettoyer", "Nettoyer, Partager, Obtenir, Demander, Explorer"], answer: 0, why: "On commence par la question et on finit par le partage." },
      { q: "Dans des données bien rangées, chaque ligne est :", options: ["Une colonne", "Un graphique", "Une chose mesurée", "Un total"], answer: 2, why: "Une ligne par enregistrement." },
      { q: "Quelle colonne est numérique ?", options: ["Minutes jouées", "Nom de l'équipe", "Jour de la semaine", "Ville"], answer: 0, why: "On peut calculer avec des minutes." },
      { q: "Vos données n'ont aucune colonne sur la météo. Pouvez-vous répondre à « Les gens laissent-ils plus de pourboire quand il pleut ? »", options: ["Oui, il suffit de deviner", "Oui, avec la moyenne", "Oui, avec un graphique", "Non, et vous devez le dire"], answer: 3, why: "Une question a besoin de données qui la couvrent." },
      { q: "Quelle est la moyenne de 4, 6 et 8 ?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { q: "Quelle est la médiane de 1, 3, 3, 9, 50 ?", options: ["3", "9", "13,2", "50"], answer: 0, why: "La valeur du milieu une fois triées est 3." },
      { q: "Une valeur aberrante est :", options: ["La médiane", "Une colonne manquante", "Le titre d'un graphique", "Une valeur loin des autres"], answer: 3, why: "Les valeurs aberrantes se tiennent à l'écart des autres." },
      { q: "Quel nombre les valeurs aberrantes tirent-elles le plus ?", options: ["La moyenne", "La médiane", "Le nombre de lignes", "Aucun des deux"], answer: 0, why: "La moyenne utilise toutes les valeurs, donc les extrêmes la font bouger." },
      { q: "Les ventes de parapluies et les accidents de voiture augmentent tous les deux les jours de pluie. Cela montre :", options: ["Les parapluies causent des accidents", "Les accidents font vendre des parapluies", "Une corrélation, probablement causée par la pluie", "Rien du tout"], answer: 2, why: "Un troisième facteur, la pluie, agit sur les deux." },
      { q: "pandas est :", options: ["Un tableur payant", "Une sorte de graphique", "Un site web", "Une bibliothèque Python gratuite pour les tableaux de données"], answer: 3, why: "pandas gère les DataFrames en Python." },
      { q: "Quelle commande affiche les cinq premières lignes ?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head affiche les lignes du haut." },
      { q: "df.shape renvoie (244, 7). Qu'est-ce que cela veut dire ?", options: ["244 colonnes et 7 lignes", "244 lignes et 7 colonnes", "244 valeurs manquantes", "7 graphiques"], answer: 1, why: "shape donne les lignes, puis les colonnes." },
      { q: "Qu'est-ce qui charge votre propre fichier CSV ?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv lit un CSV et en fait un DataFrame." },
      { q: "df.describe() donne :", options: ["Un graphique en barres", "Le nom du fichier", "Des chiffres de résumé comme la moyenne, le minimum et le maximum", "La correction des valeurs manquantes"], answer: 2, why: "describe résume les colonnes de nombres." },
      { q: "Qu'est-ce qui ne garde que les lignes des dîners ?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Une condition à l'intérieur de df[ ] filtre les lignes." },
      { q: "Vous trouvez des valeurs manquantes et supprimez ces lignes. Que devez-vous faire d'autre ?", options: ["Le cacher", "Supprimer tout le jeu de données", "Rien", "Noter ce que vous avez fait"], answer: 3, why: "Noter les étapes de nettoyage garde l'analyse honnête." },
      { q: "Quel graphique est le meilleur pour comparer des moyennes selon les jours ?", options: ["Une photo", "Un graphique en barres", "Un seul nombre", "Un nuage de mots"], answer: 1, why: "Les barres comparent clairement des groupes." },
      { q: "Lequel est un constat bien écrit ?", options: ["« Les pourboires sont bons. »", "« Le week-end, les ventes ont été en moyenne de 420 dollars par jour, environ 30 % de plus qu'en semaine. »", "« Les données montrent des trucs. »", "« Le week-end est meilleur parce que les gens sont contents. »"], answer: 1, why: "Il est précis, donne un chiffre et n'affirme pas une cause qu'il ne peut pas montrer." },
      { q: "Ces données de pourboires viennent d'un seul restaurant. Quelle est la bonne limite à indiquer ?", options: ["Les résultats valent partout", "Les données sont fausses", "Il n'y a aucune limite", "Les résultats ne valent peut-être pas pour d'autres restaurants"], answer: 3, why: "Une seule source ne peut pas parler pour tous les restaurants." }
    ]
  }
};
