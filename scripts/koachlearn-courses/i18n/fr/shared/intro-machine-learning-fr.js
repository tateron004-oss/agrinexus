"use strict";

// Koach Learn course, French translation of shared/intro-machine-learning.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code, library and dataset names are kept exactly as in the English course.

const COLAB = { name: "Google Colab : questions fréquentes", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn : bien démarrer", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-fr",
  lang: "fr",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Introduction à l'apprentissage automatique",
  skills: "Expliquer comment les machines apprennent, Choisir les variables et les étiquettes, Séparer les données d'entraînement et de test, Entraîner un modèle avec scikit-learn, Mesurer et comparer la précision",
  outcome: "entraîner deux modèles simples d'apprentissage automatique dans Google Colab avec scikit-learn, les tester sur des données qu'ils n'ont jamais vues, comparer leur précision, et expliquer lequel vous utiliseriez et quelles sont ses limites.",
  about: [
    "L'apprentissage automatique (machine learning) se cache derrière les filtres anti-spam, les suggestions de films, les temps de trajet des cartes et les alertes de fraude sur une carte bancaire. Ce cours vous montre comment il fonctionne, puis vous fait construire un modèle vous-même.",
    "Le chapitre 1 ne demande aucun code : vous apprenez les idées avec des exemples du quotidien et de petits tableaux que vous faites vous-même. Le chapitre 2 passe à Google Colab, un site gratuit qui exécute Python, où vous entraînez et testez de vrais modèles avec une bibliothèque gratuite appelée scikit-learn. Connaître un peu de Python aide, mais chaque ligne de code est donnée et expliquée.",
    "Chaque leçon dure environ cinq minutes et se termine par un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Dans Google Colab, chargez le jeu de données des fleurs d'iris, séparez-le en ensembles d'entraînement et de test, entraînez un arbre de décision et un modèle des k plus proches voisins, affichez la précision de chaque modèle sur l'ensemble de test, utilisez le meilleur pour prédire l'espèce d'une nouvelle fleur, et écrivez deux phrases : quel modèle vous choisiriez et une limite de votre modèle.",
  chapters: [
    {
      name: "Chapitre 1 : Comment les machines apprennent",
      lessons: [
        {
          title: "Ce qu'est l'apprentissage automatique",
          minutes: 4,
          goal: "Expliquer l'apprentissage automatique avec vos mots et le repérer dans la vie de tous les jours.",
          text: [
            "En programmation classique, une personne écrit les règles. En apprentissage automatique (ML), vous donnez à l'ordinateur beaucoup d'exemples avec les bonnes réponses, et il trouve les règles lui-même. Le résultat s'appelle un modèle.",
            "Exemples de tous les jours : votre messagerie apprend à quoi ressemble le spam grâce à des millions d'e-mails marqués. Une application de musique propose des chansons d'après ce qu'ont écouté des gens comme vous. Une application de cartes prévoit la circulation d'après les trajets passés.",
            "Deux tâches courantes : la classification range les choses dans des groupes (spam ou pas spam, quelle sorte de fleur). La régression prédit un nombre (le prix d'une maison, les minutes avant l'arrivée du bus). Quand les exemples viennent avec les réponses, on parle d'apprentissage supervisé, et c'est ce que ce cours enseigne."
          ],
          words: [["Apprentissage automatique (ML)", "des ordinateurs qui trouvent des régularités dans des exemples au lieu de suivre des règles écrites par une personne."], ["Modèle", "ce que produit le ML : un ensemble de régularités apprises qui fait des prédictions."], ["Classification", "prédire un groupe ou une catégorie."], ["Régression", "prédire un nombre."], ["Apprentissage supervisé", "apprendre à partir d'exemples qui viennent avec les bonnes réponses."]],
          slides: [
            { title: "Règles ou apprentissage", bullets: ["Programmation : une personne écrit les règles", "ML : l'ordinateur trouve les règles à partir d'exemples", "Le résultat est un modèle"] },
            { title: "Le ML que vous utilisez déjà", bullets: ["Les filtres anti-spam", "Les suggestions de chansons et de vidéos", "Les temps de trajet des cartes", "Les alertes de fraude à la carte"] },
            { title: "Deux tâches courantes", bullets: ["Classification : quel groupe ?", "Régression : quel nombre ?", "Supervisé : les exemples ont les réponses"] }
          ],
          tryIt: "Listez trois applications que vous utilisez et qui utilisent probablement l'apprentissage automatique. Pour chacune, écrivez ce qu'elle prédit et si c'est de la classification (un groupe) ou de la régression (un nombre).",
          youCanNow: "expliquer ce qu'est l'apprentissage automatique et distinguer la classification de la régression."
        },
        {
          title: "Les données : variables et étiquettes",
          minutes: 5,
          goal: "Construire un petit jeu de données avec des variables et une étiquette.",
          text: [
            "Le ML apprend à partir de données, en général un tableau. Chaque ligne est un exemple. Les colonnes qui décrivent l'exemple sont les variables (en anglais, features). La colonne avec la réponse à prédire est l'étiquette (label).",
            "Exemple : pour prédire si un bus sera en retard, chaque ligne est un trajet. Les variables peuvent être l'heure, le jour de la semaine et s'il a plu. L'étiquette est en retard ou à l'heure.",
            "De bonnes variables sont des choses qui influencent vraiment la réponse. Plus de lignes aident en général. Les données doivent aussi être justes et complètes : si vous ne notez que les trajets en semaine, le modèle sera mauvais le week-end. Un modèle n'est jamais meilleur que ses données."
          ],
          steps: ["Décidez ce que vous voulez prédire : c'est votre étiquette.", "Listez ce qui pourrait l'influencer : ce sont vos variables.", "Faites un tableau avec une ligne par exemple.", "Remplissez au moins 10 lignes avec des cas réels.", "Vérifiez : manque-t-il certains types d'exemples ?"],
          words: [["Jeu de données", "un ensemble d'exemples, en général un tableau."], ["Variable", "une colonne qui décrit un exemple, utilisée pour faire la prédiction."], ["Étiquette", "la colonne réponse que le modèle apprend à prédire."], ["Biais dans les données", "quand les données oublient ou comptent trop certains groupes, et que le modèle devient injuste ou faux pour eux."]],
          slides: [
            { title: "Les données sont un tableau", bullets: ["Chaque ligne : un exemple", "Variables : les colonnes qui décrivent", "Étiquette : la réponse à prédire"] },
            { title: "Exemple : le bus est-il en retard ?", bullets: ["Variables : heure, jour, pluie", "Étiquette : en retard ou à l'heure"] },
            { title: "De bonnes données", bullets: ["Des variables qui comptent vraiment", "Assez de lignes", "Aucun groupe oublié, comme le week-end"] }
          ],
          tryIt: "Choisissez quelque chose à prédire dans votre quotidien, par exemple si vous serez fatigué après l'entraînement ou si un magasin sera bondé. Faites un tableau avec deux ou trois variables et une étiquette, et remplissez 10 lignes.",
          youCanNow: "choisir une étiquette et des variables utiles et construire un petit jeu de données."
        },
        {
          title: "Entraîner et tester : le modèle est-il bon ?",
          minutes: 5,
          goal: "Séparer les données en ensemble d'entraînement et ensemble de test, et mesurer la précision.",
          text: [
            "L'entraînement, c'est quand le modèle étudie des exemples pour trouver des régularités. Mais un modèle qui a seulement appris ses exemples par cœur peut sembler parfait et pourtant échouer sur de nouveaux cas. C'est le surapprentissage, comme un élève qui a appris par cœur les réponses du contrôle de l'an dernier.",
            "Alors on garde une partie des données de côté. L'ensemble d'entraînement (souvent environ 75 à 80 pour cent des lignes) sert à apprendre. L'ensemble de test (le reste) reste caché jusqu'à la fin et sert à vérifier le modèle sur des exemples qu'il n'a jamais vus.",
            "La précision (accuracy) est la part des exemples de test qu'il a eus justes. 18 justes sur 20, c'est 90 pour cent. Demandez-vous toujours ce que coûte une erreur : une mauvaise suggestion de chanson, ce n'est pas grave ; une alerte de fraude manquée, si."
          ],
          steps: ["Mélangez vos lignes.", "Mettez environ 75 pour cent dans l'ensemble d'entraînement.", "Gardez le reste comme ensemble de test et ne le regardez pas.", "Trouvez une régularité (une règle) à partir de l'ensemble d'entraînement seulement.", "Appliquez-la à l'ensemble de test et comptez combien de réponses sont justes."],
          words: [["Entraînement", "le modèle qui apprend des régularités à partir d'exemples."], ["Ensemble d'entraînement", "les lignes utilisées pour apprendre."], ["Ensemble de test", "les lignes gardées de côté pour vérifier le modèle sur de nouveaux exemples."], ["Surapprentissage", "quand un modèle apprend par cœur ses données d'entraînement et se trompe sur les nouvelles."], ["Précision", "la part des prédictions qui étaient justes."]],
          slides: [
            { title: "L'entraînement", bullets: ["Le modèle étudie des exemples", "Il trouve des régularités", "Apprendre par cœur, ce n'est pas apprendre"] },
            { title: "Gardez des données de côté", bullets: ["Ensemble d'entraînement : environ 75-80 % des lignes", "Ensemble de test : le reste, caché jusqu'à la fin"] },
            { title: "La précision", bullets: ["Réponses justes / nombre d'exemples de test", "18 justes sur 20 = 90 %", "Demandez-vous ce que coûte une erreur"] }
          ],
          tryIt: "Reprenez votre tableau de 10 lignes de la leçon 2. Cachez les 2 dernières lignes. À partir des 8 premières, écrivez une règle simple (par exemple « s'il a plu, le bus est en retard »). Testez la règle sur les 2 lignes cachées et calculez la précision.",
          youCanNow: "séparer des données en ensembles d'entraînement et de test et calculer la précision."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment les machines apprennent",
        questions: [
          { q: "À partir de quoi un modèle d'apprentissage automatique apprend-il ?", options: ["De règles tapées par une personne pour chaque cas", "De la batterie de l'ordinateur", "D'exemples, souvent avec les bonnes réponses", "Seulement de suppositions au hasard"], answer: 2, why: "Le ML trouve des régularités dans des exemples." },
          { q: "Prédire la température de demain en degrés, c'est :", options: ["De la régression", "De la classification", "Pas du ML", "Une étiquette"], answer: 0, why: "Prédire un nombre, c'est de la régression." },
          { q: "Dans un tableau pour prédire si un magasin sera bondé, « bondé ou pas bondé » est :", options: ["Une variable", "L'ensemble de test", "La précision", "L'étiquette"], answer: 3, why: "L'étiquette est la réponse à prédire." },
          { q: "Pourquoi garder un ensemble de test caché jusqu'à la fin ?", options: ["Pour accélérer l'entraînement", "Pour vérifier le modèle sur des exemples qu'il n'a jamais vus", "Parce qu'il est cassé", "Pour agrandir les données"], answer: 1, why: "Tester sur de nouvelles données montre si le modèle a vraiment appris." },
          { q: "Un modèle a 15 exemples de test justes sur 20. Quelle est sa précision ?", options: ["15 %", "20 %", "50 %", "75 %"], answer: 3, why: "15 divisé par 20 donne 0,75, soit 75 pour cent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Entraîner votre premier modèle dans Colab",
      lessons: [
        {
          title: "Charger un jeu de données avec scikit-learn",
          minutes: 5,
          goal: "Charger un jeu de données d'entraînement dans Colab et regarder ses variables et ses étiquettes.",
          text: [
            "scikit-learn est une bibliothèque Python gratuite pour l'apprentissage automatique, déjà installée dans Google Colab. Elle contient de petits jeux de données pour s'entraîner. Le jeu de données iris contient 150 fleurs. Chacune a quatre variables (la longueur et la largeur de deux parties de la fleur, en centimètres) et une étiquette : l'une des trois espèces.",
            "Chargez-le avec : from sklearn.datasets import load_iris, puis iris = load_iris(). Les variables sont dans iris.data et les étiquettes dans iris.target. iris.feature_names et iris.target_names disent ce que veulent dire les colonnes et les étiquettes.",
            "Regardez toujours vos données avant d'entraîner : combien de lignes, quelles colonnes, et quelques lignes d'exemple. iris.data.shape donne le nombre de lignes et de colonnes : (150, 4)."
          ],
          steps: ["Ouvrez un nouveau notebook sur colab.research.google.com.", "Exécutez : from sklearn.datasets import load_iris", "Exécutez : iris = load_iris()", "Affichez iris.data.shape, iris.feature_names et iris.target_names.", "Affichez les trois premières lignes : print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "une bibliothèque Python gratuite pour l'apprentissage automatique, importée sous le nom sklearn."], ["Jeu de données iris", "un célèbre jeu de données d'entraînement de 150 fleurs de trois espèces."], ["shape", "le nombre de lignes et de colonnes des données."], ["X et y", "des noms courants : X pour les variables, y pour les étiquettes."]],
          slides: [
            { title: "scikit-learn", bullets: ["Bibliothèque Python de ML gratuite", "Déjà dans Google Colab", "Contient des jeux de données pour s'entraîner"] },
            { title: "Le jeu de données iris", bullets: ["150 fleurs, 4 variables chacune", "Étiquette : l'une des 3 espèces", "iris.data et iris.target"] },
            { title: "Regardez avant d'entraîner", bullets: ["iris.data.shape donne (150, 4)", "feature_names et target_names", "Affichez quelques lignes"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Chargez le jeu de données iris dans Colab. Affichez la forme, les quatre noms de variables, les trois noms d'espèces, et les cinq premières lignes avec leurs étiquettes. Notez quel nombre correspond à quelle espèce.",
          youCanNow: "charger un jeu de données dans Colab et décrire ses variables, ses étiquettes et sa taille."
        },
        {
          title: "Entraîner et tester un arbre de décision",
          minutes: 6,
          goal: "Séparer les données, entraîner un arbre de décision et mesurer sa précision.",
          text: [
            "Un arbre de décision apprend une série de questions oui ou non, comme un organigramme : « Le pétale fait-il moins de 2,5 cm ? Alors c'est l'espèce 0. » Il est facile à expliquer, ce qui en fait un bon premier modèle.",
            "Tous les modèles scikit-learn fonctionnent de la même façon : on le crée, on l'ajuste (fit) sur les données d'entraînement, puis on prédit (predict) sur de nouvelles données. Le code : X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Puis testez-le : predictions = model.predict(X_test) et print(accuracy_score(y_test, predictions)). random_state=42 fixe simplement le mélange pour obtenir le même résultat à chaque exécution."
          ],
          steps: ["Importez : from sklearn.model_selection import train_test_split", "Importez : from sklearn.tree import DecisionTreeClassifier", "Importez : from sklearn.metrics import accuracy_score", "Séparez avec train_test_split(X, y, test_size=0.25, random_state=42).", "Créez le modèle, appelez model.fit(X_train, y_train), puis prédisez sur X_test et affichez la précision."],
          words: [["Arbre de décision", "un modèle qui apprend un organigramme de questions oui ou non."], ["fit", "entraîner le modèle sur des données."], ["predict", "utiliser le modèle entraîné pour deviner les étiquettes de nouvelles données."], ["train_test_split", "l'outil de scikit-learn qui sépare les données en ensembles d'entraînement et de test."], ["random_state", "un nombre qui fixe le mélange au hasard pour que les résultats se répètent."]],
          slides: [
            { title: "Les arbres de décision", bullets: ["Un organigramme de questions oui ou non", "Facile à expliquer", "Un bon premier modèle"] },
            { title: "Le modèle de base pour tout modèle", bullets: ["Le créer", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Le mesurer", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 garde 25 % pour le test", "random_state rend les résultats répétables"] }
          ],
          sources: [SKLEARN],
          tryIt: "Tapez et exécutez tout le code de l'arbre de décision dans Colab. Affichez la précision. Puis changez test_size en 0.5, exécutez à nouveau, et notez si la précision a monté ou baissé.",
          youCanNow: "séparer des données, entraîner un arbre de décision avec fit, prédire avec lui et mesurer la précision."
        },
        {
          title: "Comparer les modèles et connaître leurs limites",
          minutes: 6,
          goal: "Entraîner un deuxième modèle, le comparer au premier, prédire un nouvel exemple et nommer une limite.",
          text: [
            "Il y a rarement un modèle parfait, alors on en essaie plusieurs. Les k plus proches voisins (KNN) prédisent en trouvant les k exemples les plus semblables dans les données d'entraînement et en faisant voter. Créez-le avec KNeighborsClassifier(n_neighbors=5) depuis sklearn.neighbors ; il utilise les mêmes étapes fit et predict.",
            "Comparez les deux modèles sur le même ensemble de test. Pour prédire une nouvelle fleur, donnez au modèle une liste dans une liste : model.predict([[5.1, 3.5, 1.4, 0.2]]). Il renvoie le numéro de l'espèce ; iris.target_names le transforme en nom.",
            "Connaissez les limites. Ces modèles ne connaissent que ces trois espèces et ces quatre mesures : montrez-leur une rose et ils donneront quand même le nom d'un iris. Un petit ensemble de test peut faire paraître la précision meilleure ou pire qu'elle n'est. Et avec de vraies données sur des personnes, vérifiez que le modèle est juste pour chaque groupe avant que quiconque s'y fie."
          ],
          steps: ["Importez : from sklearn.neighbors import KNeighborsClassifier", "Créez knn = KNeighborsClassifier(n_neighbors=5) et entraînez-le sur les mêmes données d'entraînement.", "Affichez les deux précisions.", "Prédisez une nouvelle fleur avec le meilleur modèle : model.predict([[5.1, 3.5, 1.4, 0.2]])", "Écrivez quel modèle vous choisiriez et une limite."],
          words: [["k plus proches voisins (KNN)", "un modèle qui prédit par un vote des exemples d'entraînement les plus semblables."], ["n_neighbors", "le nombre d'exemples semblables que regarde KNN (le k)."], ["Limite", "un cas que le modèle ne sait pas bien traiter."], ["Équité", "un modèle qui marche aussi bien pour chaque groupe de personnes qu'il concerne."]],
          slides: [
            { title: "Essayez plus d'un modèle", bullets: ["KNN : vote des k exemples les plus semblables", "KNeighborsClassifier(n_neighbors=5)", "Mêmes étapes fit et predict"] },
            { title: "Comparer et prédire", bullets: ["Le même ensemble de test pour les deux", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names transforme les numéros en noms"] },
            { title: "Connaître les limites", bullets: ["Ne connaît que ce sur quoi il a été entraîné", "Un petit ensemble de test peut tromper", "Avec des données sur des personnes, vérifiez l'équité"] }
          ],
          sources: [SKLEARN],
          tryIt: "Tâche finale : dans un notebook, entraînez l'arbre de décision et un modèle KNN sur la même séparation, affichez les deux précisions, prédisez l'espèce de la fleur [6.0, 2.9, 4.5, 1.5] avec le meilleur modèle et affichez son nom, puis écrivez deux phrases sur le modèle choisi et une de ses limites.",
          youCanNow: "entraîner, tester et comparer deux modèles, faire une prédiction et expliquer les limites d'un modèle."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Entraîner votre premier modèle dans Colab",
        questions: [
          { q: "Que vous dit iris.data.shape (150, 4) ?", options: ["150 espèces et 4 fleurs", "Le modèle est précis à 150 %", "4 lignes et 150 colonnes", "150 lignes et 4 colonnes de variables"], answer: 3, why: "shape donne les lignes, puis les colonnes." },
          { q: "Quel est le bon ordre des étapes pour un modèle scikit-learn ?", options: ["Le créer, l'entraîner (fit) sur les données d'entraînement, puis prédire", "predict, puis fit, puis créer", "fit sur l'ensemble de test, puis predict sur l'entraînement", "Seulement predict"], answer: 0, why: "Chaque modèle est créé, entraîné, puis utilisé pour prédire." },
          { q: "Que veut dire test_size=0.25 dans train_test_split ?", options: ["Utiliser 25 lignes", "Entraîner pendant 25 minutes", "Garder 25 % des lignes pour le test", "La précision doit être de 25 %"], answer: 2, why: "test_size fixe la part des lignes gardées de côté." },
          { q: "Comment les k plus proches voisins font-ils une prédiction ?", options: ["Ils demandent à une personne", "Ils jouent à pile ou face", "Ils écrivent des règles à la main", "Ils font voter les exemples d'entraînement les plus semblables"], answer: 3, why: "KNN utilise les k exemples les plus proches." },
          { q: "On donne à votre modèle iris les mesures d'une rose. Que se passe-t-il ?", options: ["Il dit « rose »", "Il refuse", "Il donne quand même le nom d'une des trois espèces d'iris", "Il apprend les roses tout seul"], answer: 2, why: "Un modèle ne connaît que les étiquettes sur lesquelles il a été entraîné." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'apprentissage automatique",
    questions: [
      { q: "L'apprentissage automatique, c'est :", options: ["Une personne qui écrit chaque règle", "Un ordinateur qui trouve des régularités à partir d'exemples", "Un robot qui marche", "Un internet plus rapide"], answer: 1, why: "Le ML apprend à partir de données." },
      { q: "Lequel est un usage quotidien de l'apprentissage automatique ?", options: ["Un filtre anti-spam", "Un interrupteur", "Une carte en papier", "Une calculatrice qui fait 2 + 2"], answer: 0, why: "Les filtres anti-spam apprennent à partir de nombreux e-mails marqués." },
      { q: "Décider si une photo montre un chat ou un chien, c'est :", options: ["De la régression", "Du surapprentissage", "De la classification", "Une variable"], answer: 2, why: "Choisir un groupe, c'est de la classification." },
      { q: "Prédire dans combien de minutes arrive le bus, c'est :", options: ["De la régression", "De la classification", "Un ensemble d'étiquettes", "Un test"], answer: 0, why: "Prédire un nombre, c'est de la régression." },
      { q: "L'apprentissage supervisé utilise :", options: ["Aucune donnée", "Seulement des images", "Seulement un professeur dans la salle", "Des exemples avec les bonnes réponses"], answer: 3, why: "Supervisé veut dire que les exemples sont étiquetés." },
      { q: "Dans un jeu de données, chaque ligne est en général :", options: ["Une variable", "Un exemple", "Le modèle entier", "Une note de test"], answer: 1, why: "Les lignes sont des exemples ; les colonnes sont des variables ou l'étiquette." },
      { q: "Pour prédire si un match sera complet, quelle variable est sensée ?", options: ["La couleur du site de billetterie", "Le jour de la semaine et l'adversaire", "La précision du modèle", "L'étiquette"], answer: 1, why: "Les variables doivent vraiment influencer la réponse." },
      { q: "Vos données de bus ne contiennent que des trajets en semaine. Quel est le risque ?", options: ["Aucun", "Il s'entraînera trop vite", "La précision sera de 100 %", "Le modèle prédira mal le week-end"], answer: 3, why: "Les types d'exemples manquants rendent le modèle faux pour eux." },
      { q: "Le surapprentissage, c'est quand un modèle :", options: ["Apprend par cœur les données d'entraînement et échoue sur les nouvelles", "Est trop petit pour être chargé", "A trop peu de variables", "Manque de mémoire"], answer: 0, why: "Un modèle en surapprentissage ne généralise pas." },
      { q: "Quelles données utiliser pour mesurer la précision ?", options: ["L'ensemble d'entraînement", "N'importe quelles données", "L'ensemble de test que le modèle n'a pas vu", "Une seule ligne"], answer: 2, why: "Seules des données jamais vues montrent la vraie performance." },
      { q: "Un modèle a 45 lignes de test justes sur 50. La précision est de :", options: ["45 %", "50 %", "90 %", "95 %"], answer: 2, why: "45 divisé par 50 donne 0,9." },
      { q: "scikit-learn est :", options: ["Une application payante", "Un type de jeu de données", "Une bibliothèque Python gratuite pour l'apprentissage automatique", "Un tableur"], answer: 2, why: "scikit-learn (sklearn) est gratuit et open source." },
      { q: "Dans le jeu de données iris, l'espèce est :", options: ["Une variable", "L'étiquette", "La forme", "Le modèle"], answer: 1, why: "L'espèce est ce qu'on prédit, donc c'est l'étiquette." },
      { q: "Quelle ligne entraîne un modèle ?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit entraîne le modèle." },
      { q: "Quelle ligne donne les prédictions pour l'ensemble de test ?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict applique le modèle entraîné à de nouvelles données." },
      { q: "Pourquoi mettre random_state=42 ?", options: ["Pour avoir les mêmes résultats à chaque exécution", "Pour rendre le modèle meilleur de 42 %", "Pour utiliser 42 lignes", "C'est obligatoire pour exécuter Python"], answer: 0, why: "Cela fixe le mélange au hasard." },
      { q: "Un arbre de décision ressemble à :", options: ["Un vote de voisins", "Un total de tableur", "Une supposition au hasard", "Un organigramme de questions oui ou non"], answer: 3, why: "Les arbres séparent les données avec des questions." },
      { q: "Pour prédire une nouvelle fleur, vous écrivez :", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "Le modèle attend une liste de lignes, donc une ligne va dans une autre liste." },
      { q: "Deux modèles obtiennent 93 % et 97 % sur le même ensemble de test. Une bonne étape suivante est de :", options: ["Supprimer les deux", "Choisir 97 % et réfléchir aussi à ses limites et au coût des erreurs", "Réentraîner sur l'ensemble de test", "Choisir le plus lent"], answer: 1, why: "Comparez équitablement, puis pesez les limites et le coût des erreurs." },
      { q: "Avant d'utiliser un modèle qui prend des décisions sur des personnes, vous devez :", options: ["Ne pas le tester", "Cacher son fonctionnement", "N'utiliser que les données d'entraînement", "Vérifier qu'il est juste pour chaque groupe"], answer: 3, why: "Les vérifications d'équité protègent les personnes concernées." }
    ]
  }
};
