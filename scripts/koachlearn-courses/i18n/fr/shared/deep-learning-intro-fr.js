"use strict";

// Koach Learn course, French translation of shared/deep-learning-intro.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python/Keras code is kept exactly as in the English course. Decimal numbers in worked examples use a point, as in code.

const COLAB = { name: "Google Colab : questions fréquentes", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Exemple de code Keras : réseau convolutif simple sur MNIST", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro-fr",
  lang: "fr",
  translationOf: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Introduction à l'apprentissage profond et aux réseaux de neurones",
  skills: "Expliquer comment fonctionne un réseau de neurones, Calculer la sortie d'un neurone, Charger et mettre à l'échelle des images, Construire et entraîner un réseau avec Keras, Évaluer et améliorer un modèle",
  outcome: "construire, entraîner et tester dans Google Colab, avec Keras, un petit réseau de neurones qui lit des chiffres écrits à la main, donner sa précision sur de nouvelles images, essayer un changement pour l'améliorer, et expliquer ce que le modèle sait faire et ne sait pas faire.",
  about: [
    "L'apprentissage profond (deep learning) fait fonctionner le déverrouillage par le visage des téléphones, les assistants vocaux, les applications de traduction, les outils d'imagerie médicale et les caméras qui contrôlent les pièces sur une chaîne d'usine. Ce cours explique son fonctionnement avec des mots simples, puis vous fait construire vous-même un réseau de neurones qui marche.",
    "Il convient aux anciens militaires qui se reconvertissent dans la tech, aux personnes qui connaissent un peu Python, et à tous ceux qui ont terminé « Introduction à l'apprentissage automatique ». Le chapitre 1 construit les idées avec des exercices sur papier. Le chapitre 2 passe à Google Colab, un site gratuit qui exécute Python, où vous entraînez un réseau avec Keras, une bibliothèque gratuite d'apprentissage profond. Chaque ligne de code est donnée et expliquée.",
    "Chaque leçon dure environ cinq minutes et se termine par un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Dans Google Colab, chargez les chiffres manuscrits MNIST, mettez-les à l'échelle, construisez et entraînez un réseau de neurones Keras, donnez sa précision sur les images de test, prédisez cinq images de test et comparez-les aux vraies étiquettes, puis faites un changement (plus de neurones ou plus d'époques), réentraînez, et écrivez deux phrases : le changement a-t-il aidé, et quelle est une limite du modèle.",
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les réseaux de neurones",
      lessons: [
        {
          title: "Ce qu'est l'apprentissage profond",
          minutes: 4,
          goal: "Expliquer l'apprentissage profond avec vos mots et dire où il est utilisé.",
          text: [
            "L'apprentissage profond est une forme d'apprentissage automatique qui utilise des réseaux de neurones : beaucoup de petites unités de calcul, appelées neurones, reliées en couches. « Profond » veut dire qu'il y a beaucoup de couches. Chaque couche trouve des régularités dans la sortie de la couche précédente.",
            "Pour une image, les premières couches remarquent des choses simples comme les contours, les couches du milieu remarquent des formes, et les dernières couches remarquent des objets entiers comme un visage ou un chiffre. Personne n'écrit ces règles : le réseau les apprend à partir de nombreux exemples étiquetés.",
            "Il marche le mieux quand il y a beaucoup de données, et des données riches et désordonnées : images, sons, paroles et longs textes. Il demande plus de données et de puissance de calcul que les modèles plus simples, c'est pourquoi il a décollé quand les grands jeux de données et les puces graphiques rapides (GPU) sont devenus courants."
          ],
          words: [["Apprentissage profond", "de l'apprentissage automatique avec des réseaux de neurones à plusieurs couches."], ["Réseau de neurones", "un modèle fait de nombreuses petites unités (neurones) reliées en couches."], ["Couche", "un groupe de neurones qui reçoivent tous leurs entrées de la couche précédente."], ["GPU", "une puce graphique qui fait beaucoup de calculs à la fois, utilisée pour entraîner vite les réseaux."]],
          slides: [
            { title: "L'apprentissage profond, c'est", bullets: ["De l'apprentissage automatique avec des réseaux de neurones", "Beaucoup de couches de petites unités de calcul", "« Profond » = beaucoup de couches"] },
            { title: "Les couches trouvent des régularités", bullets: ["Premières couches : les contours", "Couches du milieu : les formes", "Dernières couches : les objets entiers"] },
            { title: "Là où il excelle", bullets: ["Images, sons, paroles et textes", "Beaucoup de données", "Demande plus de puissance de calcul (GPU)"] }
          ],
          tryIt: "Notez quatre outils que vous avez utilisés et qui utilisent probablement l'apprentissage profond (par exemple le déverrouillage par le visage, la dictée vocale, la recherche de photos, la traduction). Pour chacun, écrivez de quel type de données il apprend : images, sons ou texte.",
          youCanNow: "expliquer ce qu'est l'apprentissage profond, pourquoi il utilise des couches et où il est utilisé."
        },
        {
          title: "Dans un neurone : poids, biais et activation",
          minutes: 6,
          goal: "Calculer à la main ce que donne un seul neurone.",
          text: [
            "Un neurone reçoit des nombres, multiplie chacun par un poids, les additionne, et ajoute encore un nombre appelé le biais. Les poids disent l'importance de chaque entrée ; le réseau les apprend.",
            "Ensuite, il applique une fonction d'activation, qui décide quoi transmettre. La plus courante, ReLU, est simple : si le total est sous zéro, la sortie est 0 ; sinon, la sortie est le total.",
            "Exemple : entrées 2 et 3, poids 0.5 et -1, biais 1. Total = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU transforme -1 en 0, donc ce neurone donne 0. Avec les entrées 2 et 1 à la place : 1 - 1 + 1 = 1, donc il donne 1.",
            "Un réseau en contient des milliers. La dernière couche utilise souvent softmax, qui transforme ses sorties en probabilités dont la somme fait 100 pour cent, une pour chaque réponse possible."
          ],
          steps: ["Multipliez chaque entrée par son poids.", "Additionnez les résultats.", "Ajoutez le biais.", "Appliquez l'activation : avec ReLU, un négatif devient 0.", "Ce nombre est la sortie du neurone."],
          words: [["Neurone", "une petite unité qui multiplie les entrées par des poids, ajoute un biais et applique une activation."], ["Poids", "un nombre que le réseau apprend et qui dit combien une entrée compte."], ["Biais", "un nombre de plus ajouté au total, lui aussi appris."], ["Fonction d'activation", "la règle qui décide ce qu'un neurone transmet."], ["ReLU", "une activation : les totaux négatifs deviennent 0, les autres restent pareils."], ["Softmax", "transforme les sorties de la dernière couche en probabilités dont la somme fait 1."]],
          slides: [
            { title: "Un neurone", bullets: ["Entrées x poids, additionnées", "Plus le biais", "Puis une fonction d'activation"] },
            { title: "ReLU", bullets: ["Sous zéro : sortie 0", "Zéro ou plus : sortie égale au total"] },
            { title: "Exemple calculé", bullets: ["Entrées 2, 3 ; poids 0.5, -1 ; biais 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "La dernière couche", bullets: ["Softmax donne une probabilité par réponse", "Les probabilités font 100 % au total"] }
          ],
          tryIt: "Calculez à la main la sortie d'un neurone : entrées 4 et 1, poids 0.5 et 2, biais -3, activation ReLU. Puis changez le biais en -6 et recalculez. (Réponses : 1, puis 0.)",
          youCanNow: "calculer la sortie d'un neurone à partir de ses entrées, ses poids, son biais et son activation."
        },
        {
          title: "Comment un réseau apprend : perte, époques et petits pas",
          minutes: 5,
          goal: "Expliquer comment l'entraînement change les poids pour faire moins d'erreurs.",
          text: [
            "Au début, les poids sont pris au hasard, donc les suppositions du réseau sont mauvaises. L'entraînement corrige cela. Le réseau fait une supposition, et une fonction de perte mesure à quel point elle était fausse : une grande perte veut dire très faux, une petite perte veut dire proche.",
            "Ensuite, il calcule, pour chaque poids, dans quelle direction la perte baisserait (cette étape s'appelle la rétropropagation) et déplace chaque poids d'un petit pas dans cette direction (la descente de gradient). La taille du pas est le taux d'apprentissage : trop grand, il dépasse la cible ; trop petit, c'est très lent.",
            "Un passage complet sur tous les exemples d'entraînement s'appelle une époque. L'entraînement prend en général plusieurs époques. On regarde la perte baisser et la précision monter, et on vérifie un ensemble de validation (des données gardées hors de l'entraînement) pour repérer le surapprentissage : si la précision d'entraînement continue de monter mais que la précision de validation baisse, on arrête."
          ],
          steps: ["Commencez avec des poids au hasard.", "Faites des suppositions sur les exemples d'entraînement.", "Mesurez l'erreur avec la fonction de perte.", "Déplacez chaque poids d'un petit pas pour baisser la perte.", "Répétez sur plusieurs époques en surveillant la précision de validation."],
          words: [["Perte", "un nombre qui mesure à quel point les suppositions du réseau sont fausses."], ["Rétropropagation", "calculer comment chaque poids a influencé la perte."], ["Descente de gradient", "déplacer les poids à petits pas pour baisser la perte."], ["Taux d'apprentissage", "la taille de chaque pas."], ["Époque", "un passage complet sur les données d'entraînement."], ["Ensemble de validation", "des données gardées de côté pendant l'entraînement pour repérer le surapprentissage."]],
          slides: [
            { title: "Deviner, mesurer, ajuster", bullets: ["Des poids au hasard au début", "La perte mesure l'erreur", "On ajuste les poids pour baisser la perte"] },
            { title: "Des petits pas", bullets: ["La rétropropagation trouve la direction", "La descente de gradient fait le pas", "Le taux d'apprentissage fixe la taille du pas"] },
            { title: "Époques et validation", bullets: ["Époque : un passage sur les données", "Surveillez la précision de validation", "Entraînement en hausse, validation en baisse = surapprentissage"] }
          ],
          tryIt: "Jouez à « devine le nombre » avec un ami ou seul : choisissez un nombre caché entre 1 et 100, devinez, recevez « trop grand » ou « trop petit », et changez votre supposition d'un pas plus petit à chaque fois. Notez quelle partie du jeu ressemble à la perte, laquelle au taux d'apprentissage, et combien de tours (époques) il a fallu.",
          youCanNow: "expliquer avec des mots simples la perte, la rétropropagation, la descente de gradient, le taux d'apprentissage, les époques et le surapprentissage."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les réseaux de neurones",
        questions: [
          { q: "Que veut dire « profond » dans apprentissage profond ?", options: ["Il utilise beaucoup d'électricité", "Il ne marche que sous l'eau", "Le réseau a beaucoup de couches", "Il est difficile à expliquer"], answer: 2, why: "Profond veut dire beaucoup de couches de neurones." },
          { q: "Le total d'un neurone est -2. Avec ReLU, quelle est la sortie ?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU transforme tout total négatif en 0." },
          { q: "Entrées 1 et 2, poids 3 et 1, biais 0, ReLU. Quelle est la sortie ?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, et 5 n'est pas négatif." },
          { q: "Que mesure la fonction de perte ?", options: ["Combien il y a de couches", "À quel point les suppositions du réseau sont fausses", "La vitesse de l'ordinateur", "La quantité de données"], answer: 1, why: "La perte est la taille de l'erreur." },
          { q: "La précision d'entraînement continue de monter mais la précision de validation baisse. Que se passe-t-il ?", options: ["Le réseau est parfait", "Du surapprentissage", "Le taux d'apprentissage est zéro", "Les données manquent"], answer: 1, why: "Faire mieux sur l'entraînement mais moins bien sur les données gardées de côté, c'est du surapprentissage." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire un réseau de neurones dans Colab",
      lessons: [
        {
          title: "Charger et préparer des images",
          minutes: 5,
          goal: "Charger les chiffres MNIST dans Colab, les mettre à l'échelle et regarder une image.",
          text: [
            "MNIST est un célèbre jeu de données d'entraînement : 70 000 petites images de chiffres de 0 à 9 écrits à la main, chacune de 28 sur 28 pixels, avec le bon chiffre comme étiquette. Keras, une bibliothèque gratuite d'apprentissage profond qui marche dans Google Colab, peut le charger en une ligne, déjà séparé en 60 000 images d'entraînement et 10 000 images de test.",
            "Chaque pixel est un nombre de 0 (noir) à 255 (blanc). Les réseaux apprennent mieux avec de petits nombres, donc on les ramène entre 0 et 1 en divisant par 255. C'est la normalisation.",
            "Regardez vos données avant d'entraîner. matplotlib, une bibliothèque de graphiques, peut dessiner une image pour vérifier que l'étiquette correspond à l'image."
          ],
          steps: ["Dans un nouveau notebook Colab, exécutez : import keras", "Chargez : (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Mettez à l'échelle : x_train = x_train / 255.0 et x_test = x_test / 255.0", "Vérifiez les tailles : print(x_train.shape, x_test.shape)", "Dessinez-en une : import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "un jeu de données d'entraînement de 70 000 images de chiffres manuscrits."], ["Keras", "une bibliothèque Python gratuite et facile pour débuter, qui sert à construire des réseaux de neurones."], ["Pixel", "un point d'une image, gardé sous forme de nombre."], ["Normalisation", "ramener des nombres dans une petite plage, comme de 0 à 1, pour que l'entraînement marche mieux."], ["matplotlib", "une bibliothèque Python pour dessiner des graphiques et des images."]],
          slides: [
            { title: "Les chiffres MNIST", bullets: ["70 000 chiffres manuscrits, de 0 à 9", "28 x 28 pixels chacun", "60 000 pour l'entraînement, 10 000 pour le test"] },
            { title: "Mettre les pixels à l'échelle", bullets: ["Les pixels vont de 0 à 255", "Divisez par 255.0 pour obtenir de 0 à 1", "Les petits nombres s'entraînent mieux"] },
            { title: "Regardez avant d'entraîner", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Affichez l'étiquette pour vérifier qu'elle correspond"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Chargez et mettez à l'échelle MNIST dans Colab. Affichez la forme des ensembles d'entraînement et de test. Dessinez les images aux positions 0, 1 et 2 et affichez leurs étiquettes pour vérifier qu'elles correspondent.",
          youCanNow: "charger un jeu de données d'images, le normaliser et le vérifier à l'œil."
        },
        {
          title: "Construire et entraîner le réseau",
          minutes: 6,
          goal: "Construire un réseau Keras, le compiler et l'entraîner sur quelques époques.",
          text: [
            "Un modèle Sequential est une pile de couches. Le nôtre : keras.Input(shape=(28, 28)) dit ce qui entre. layers.Flatten() transforme chaque image de 28 x 28 en une seule ligne de 784 nombres. layers.Dense(128, activation=\"relu\") est une couche de 128 neurones. layers.Dense(10, activation=\"softmax\") est la sortie : une probabilité pour chaque chiffre de 0 à 9.",
            "compile règle la façon d'apprendre : optimizer=\"adam\" (une sorte populaire de descente de gradient), loss=\"sparse_categorical_crossentropy\" (la bonne perte quand les étiquettes sont de simples nombres comme 7), et metrics=[\"accuracy\"] pour voir à quelle fréquence il a juste.",
            "fit l'entraîne : model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 garde de côté 10 pour cent des données d'entraînement pour repérer le surapprentissage. Chaque époque affiche loss, accuracy, val_loss et val_accuracy. Regardez la perte baisser."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() pour voir les couches.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Modèle Sequential", "un réseau fait de couches empilées les unes après les autres."], ["Flatten", "une couche qui transforme une grille de pixels en une seule longue ligne."], ["Couche Dense", "une couche où chaque neurone est relié à chaque entrée."], ["Optimiseur", "la méthode qui met à jour les poids ; adam est courant."], ["compile", "règle l'optimiseur, la perte et les mesures avant l'entraînement."], ["validation_split", "la part des données d'entraînement gardée de côté pour repérer le surapprentissage."]],
          slides: [
            { title: "Les couches", bullets: ["Entrée : une image de 28 x 28", "Flatten : une ligne de 784 nombres", "Dense 128, relu : la couche cachée", "Dense 10, softmax : une probabilité par chiffre"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5 : cinq passages sur les données", "validation_split=0.1 repère le surapprentissage", "Regardez la perte baisser et la précision monter"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Construisez, compilez et entraînez le réseau sur 5 époques. Notez accuracy et val_accuracy après l'époque 1 et après l'époque 5. Les deux ont-elles monté ?",
          youCanNow: "construire un réseau de neurones avec Keras, le compiler et l'entraîner en surveillant le surapprentissage."
        },
        {
          title: "Tester, prédire et améliorer",
          minutes: 6,
          goal: "Mesurer la précision de test, prédire de vraies images, essayer une amélioration et nommer les limites du modèle.",
          text: [
            "Le vrai test, ce sont des données que le réseau n'a jamais vues : model.evaluate(x_test, y_test) affiche la perte et la précision de test. Un petit réseau comme le nôtre dépasse en général largement 90 pour cent sur MNIST.",
            "Pour prédire, donnez-lui des images : probs = model.predict(x_test[:5]) donne 10 probabilités pour chaque image. probs.argmax(axis=1) choisit le chiffre avec la plus grande probabilité. Comparez-les avec y_test[:5].",
            "Pour l'améliorer, changez une seule chose à la fois et retestez : plus de neurones (Dense(256)), plus d'époques, ou un réseau convolutif (des couches qui parcourent de petits morceaux de l'image), qui atteint environ 99 pour cent dans l'exemple officiel de Keras.",
            "Connaissez les limites : il ne connaît que des chiffres seuls et centrés comme ceux de MNIST. Une photo de panneau ou une lettre recevra quand même un chiffre. Dans le travail réel, comme lire des formulaires ou contrôler des pièces, une personne vérifie les résultats peu sûrs, et le modèle est testé sur des données de l'endroit réel où il sera utilisé."
          ],
          steps: ["Exécutez model.evaluate(x_test, y_test) et notez la précision de test.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) pour comparer les suppositions avec la vérité.", "Changez une chose (neurones ou époques), reconstruisez, réentraînez et réévaluez.", "Écrivez si cela a aidé et une limite."],
          words: [["evaluate", "teste le modèle entraîné sur des données et donne la perte et la précision."], ["argmax", "choisit la position du plus grand nombre : ici, le chiffre le plus probable."], ["Réseau convolutif (CNN)", "un réseau avec des couches qui parcourent de petits morceaux d'une image ; très bon pour les images."], ["Hyperparamètre", "un réglage que vous choisissez, comme le nombre de neurones ou d'époques, et que le réseau n'apprend pas."]],
          slides: [
            { title: "Tester sur des données jamais vues", bullets: ["model.evaluate(x_test, y_test)", "Donne la perte et la précision de test"] },
            { title: "Faire des prédictions", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = les chiffres devinés", "Comparez avec y_test[:5]"] },
            { title: "Améliorer une chose à la fois", bullets: ["Plus de neurones ou plus d'époques", "Ou un réseau convolutif", "Retestez après chaque changement"] },
            { title: "Connaître les limites", bullets: ["Ne connaît que des chiffres seuls comme MNIST", "Testez sur des données réelles du lieu d'usage", "Une personne vérifie les résultats incertains"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Tâche finale : évaluez votre réseau sur l'ensemble de test, prédisez les cinq premières images de test et comparez-les avec les vraies étiquettes, puis changez Dense(128) en Dense(256) ou epochs en 10, réentraînez et réévaluez. Écrivez deux phrases : le changement a-t-il aidé, et quelle est une limite de ce modèle ?",
          youCanNow: "entraîner, tester, utiliser et améliorer un réseau de neurones, et expliquer quand on peut lui faire confiance et quand on ne doit pas."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire un réseau de neurones dans Colab",
        questions: [
          { q: "Pourquoi diviser les pixels MNIST par 255.0 ?", options: ["Pour agrandir les images", "Pour supprimer les pixels sombres", "Pour changer les étiquettes", "Pour les ramener entre 0 et 1 afin que l'entraînement marche mieux"], answer: 3, why: "Normaliser entre 0 et 1 aide le réseau à apprendre." },
          { q: "Que fait layers.Flatten() ?", options: ["Il transforme une grille de 28 x 28 en une ligne de 784 nombres", "Il éclaircit l'image", "Il ajoute 10 neurones", "Il sépare les données"], answer: 0, why: "Flatten change la grille en une ligne pour les couches Dense." },
          { q: "Pourquoi la dernière couche a-t-elle 10 neurones avec softmax ?", options: ["Il y a 10 époques", "C'est toujours 10", "Il y a 10 chiffres possibles, et softmax donne une probabilité pour chacun", "Pour économiser la mémoire"], answer: 2, why: "Une sortie par chiffre, sous forme de probabilités dont la somme fait 1." },
          { q: "Quelle ligne donne le chiffre le plus probable pour chaque image ?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax choisit la plus grande probabilité." },
          { q: "Vous voulez savoir si Dense(256) est meilleur que Dense(128). Que faites-vous ?", options: ["Changer cinq choses à la fois", "Regarder seulement la perte d'entraînement", "Le changer, réentraîner et comparer la précision de test", "Deviner"], answer: 2, why: "Changez une seule chose et retestez sur le même ensemble de test." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'apprentissage profond et aux réseaux de neurones",
    questions: [
      { q: "L'apprentissage profond, c'est :", options: ["Une façon de ranger des fichiers", "De l'apprentissage automatique avec des réseaux de neurones à plusieurs couches", "Une sorte de tableur", "Apprendre en dormant"], answer: 1, why: "Il utilise des réseaux profonds (à plusieurs couches)." },
      { q: "Dans quelle tâche l'apprentissage profond est-il particulièrement bon ?", options: ["Reconnaître des visages sur des photos", "Additionner deux nombres", "Trier une courte liste", "Imprimer une page"], answer: 0, why: "Les images, les sons et les textes sont ses points forts." },
      { q: "Dans un réseau pour images, les premières couches remarquent en général :", options: ["Des visages entiers", "Le nom du fichier", "Des contours simples", "L'étiquette"], answer: 2, why: "Les couches vont des contours aux formes puis aux objets." },
      { q: "Pourquoi l'apprentissage profond a-t-il décollé ces dernières années ?", options: ["Les grands jeux de données et les GPU rapides", "Les écrans plus petits", "Moins d'ordinateurs", "De nouveaux claviers"], answer: 0, why: "Il demande beaucoup de données et de puissance de calcul." },
      { q: "À quoi sert un poids dans un neurone ?", options: ["À compter les époques", "À garder l'étiquette", "À dessiner l'image", "À fixer combien une entrée compte"], answer: 3, why: "Les poids pondèrent chaque entrée." },
      { q: "Entrées 2 et 2, poids 1 et -2, biais 1, ReLU. Sortie ?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, et ReLU transforme -1 en 0." },
      { q: "Softmax dans la dernière couche donne :", options: ["Le nombre de couches", "Une probabilité pour chaque réponse, dont la somme fait 100 %", "La perte", "Un nombre au hasard"], answer: 1, why: "Softmax transforme les sorties en probabilités." },
      { q: "La perte qui baisse pendant l'entraînement veut dire :", options: ["Les données rétrécissent", "L'ordinateur ralentit", "Du surapprentissage à coup sûr", "Les suppositions du réseau sont de moins en moins fausses"], answer: 3, why: "Une perte plus basse veut dire des erreurs plus petites." },
      { q: "Le taux d'apprentissage contrôle :", options: ["La taille de chaque pas de mise à jour des poids", "Le nombre d'images", "La taille de l'écran", "Le nombre d'étiquettes"], answer: 0, why: "Il fixe la taille de chaque pas." },
      { q: "Une époque, c'est :", options: ["Un neurone", "Une image de test", "Un passage sur toutes les données d'entraînement", "Une minute d'entraînement"], answer: 2, why: "Une époque couvre une fois tout l'ensemble d'entraînement." },
      { q: "Un ensemble de validation sert à :", options: ["Entraîner plus vite", "Enregistrer le modèle", "Étiqueter les images", "Repérer le surapprentissage pendant l'entraînement"], answer: 3, why: "Il est gardé de côté pour vérifier le modèle pendant qu'il apprend." },
      { q: "Combien d'images MNIST met-il dans son ensemble de test ?", options: ["28", "784", "10 000", "60 000"], answer: 2, why: "MNIST a 60 000 images d'entraînement et 10 000 images de test." },
      { q: "Chaque image MNIST est :", options: ["Une photo en couleur d'une rue", "28 x 28 pixels d'un chiffre écrit à la main", "Un extrait sonore", "Une phrase"], answer: 1, why: "De petites images en niveaux de gris de chiffres." },
      { q: "Quelle couche Keras a chaque neurone relié à chaque entrée ?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense veut dire entièrement connectée." },
      { q: "Que règle model.compile ?", options: ["Le jeu de données", "La taille des images", "L'optimiseur, la perte et les mesures", "La précision de test"], answer: 2, why: "compile règle comment le modèle apprend et ce qu'il affiche." },
      { q: "Les étiquettes sont de simples nombres comme 7. Quelle perte convient ?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "Cette perte attend des étiquettes entières." },
      { q: "Que fait validation_split=0.1 dans fit ?", options: ["Il entraîne pendant 0.1 époque", "Il supprime 10 % des données", "Il règle le taux d'apprentissage", "Il garde de côté 10 % des données d'entraînement pour vérifier le modèle"], answer: 3, why: "Il réserve une part pour la validation." },
      { q: "Quelle ligne mesure la précision sur des images jamais vues ?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate teste sur les données que vous lui donnez." },
      { q: "Quel type de réseau parcourt de petits morceaux d'une image et est très bon pour les images ?", options: ["Un tableur", "Un réseau convolutif (CNN)", "Un chatbot à règles", "Un seul neurone"], answer: 1, why: "Les CNN sont faits pour les images." },
      { q: "Votre modèle de chiffres sert à lire des formulaires manuscrits au travail. Quelle est une étape responsable ?", options: ["Faire confiance à chaque réponse", "Ne jamais le tester", "Cacher qu'un modèle est utilisé", "Faire vérifier par une personne les résultats peu sûrs et le tester d'abord sur de vrais formulaires"], answer: 3, why: "Les tests en conditions réelles et les vérifications humaines rattrapent les erreurs du modèle." }
    ]
  }
};
