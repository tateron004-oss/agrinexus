"use strict";

// Koach Learn course, French translation of shared/ai-programming-python.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code and the model name are kept exactly. The sentiment model reads English only, so the French course tells students to write the test comments in English.

const COLAB = { name: "Google Colab : questions fréquentes", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers : les pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face : fiche du modèle distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-fr",
  lang: "fr",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Programmer l'IA avec Python pour débutants",
  skills: "Utiliser des bibliothèques Python dans Colab, Construire un chatbot à règles, Charger un modèle d'IA pré-entraîné, Appliquer l'IA à beaucoup de textes, Vérifier les résultats de l'IA",
  outcome: "écrire dans Google Colab un programme Python qui utilise un modèle d'IA gratuit et pré-entraîné pour classer une liste de commentaires écrits en positifs et négatifs, affiche un résumé et signale les résultats dont l'IA n'est pas sûre pour qu'une personne les vérifie.",
  about: [
    "Ce cours est pour les débutants qui connaissent un peu de Python (variables, if, listes et boucles) et veulent créer un programme qui utilise l'IA. Si vous n'avez jamais codé, suivez d'abord « Introduction à la programmation avec Python ».",
    "Vous commencerez par construire un chatbot simple avec des règles en Python, pour voir ce qu'un programme peut faire sans IA. Puis vous chargerez un modèle d'IA gratuit et pré-entraîné depuis Hugging Face et l'utiliserez pour lire l'humeur de commentaires écrits, le même type d'outil que les entreprises utilisent sur les avis et les sondages.",
    "Tout se passe dans Google Colab, dans votre navigateur, gratuitement. Chaque leçon dure environ cinq minutes et se termine par du code que vous tapez vous-même. Le modèle utilisé lit l'anglais, donc les commentaires de test seront écrits en anglais. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Construisez un trieur d'avis dans Google Colab : écrivez une liste d'au moins six commentaires courts en anglais (par exemple sur un entraînement d'équipe, un cours ou une petite boutique), appliquez à chacun un modèle d'analyse de sentiment pré-entraîné, affichez chaque commentaire avec son étiquette et son score, marquez tout résultat avec un score inférieur à 0.80 comme « à vérifier à la main », et affichez combien de commentaires étaient positifs et combien négatifs.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes et des adultes qui ont écrit un peu de Python et veulent construire quelque chose avec l'IA : lycéens et étudiants, membres de clubs de code, personnes en reconversion et stagiaires en formation professionnelle.",
    startingPoint: "Ils savent écrire et exécuter de courts programmes Python dans Google Colab avec des variables, des if, des listes, des boucles et des fonctions. La plupart n'ont jamais importé une bibliothèque d'IA, utilisé un modèle pré-entraîné, ni réfléchi à la confiance qu'un modèle a dans sa réponse ou au moment où une personne doit vérifier ses réponses.",
    gap: "Les outils d'IA sont maintenant présents dans beaucoup de métiers et de produits, et les employeurs apprécient les personnes qui savent les utiliser dans du code et les vérifier de façon responsable. Sans pratique concrète, les apprenants pensent que l'IA est magique ou hors de portée, et n'apprennent pas à tester les limites d'un modèle ni à garder les données privées à l'écart.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les termes comme bibliothèque, modèle, score et seuil sont expliqués",
      "Appareils : un ordinateur fixe ou portable avec un navigateur web ; une tablette rend la saisie du code difficile",
      "Comptes et coût : un compte Google gratuit pour Google Colab et des modèles Hugging Face gratuits ; les ressources gratuites de Colab sont limitées et peuvent changer",
      "Temps : environ 5 à 6 minutes par leçon plus les exercices, environ 60 à 75 minutes au total",
      "Vie privée : les apprenants utilisent des commentaires inventés ou autorisés et ne collent jamais de mots de passe ou de clés API dans un notebook partagé"
    ],
    prerequisites: "« Introduction à la programmation avec Python » (variables, if, listes, boucles et fonctions)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Dans Google Colab", action: "expliquer en quoi un modèle d'IA diffère d'un code à règles et importer ou installer une bibliothèque Python", standard: "avec une explication juste en une phrase et la bibliothèque qui se charge sans erreur" },
    { id: "O2", condition: "À partir de mots-clés et de réponses pour un chatbot simple", action: "utiliser des outils de chaînes et un dictionnaire pour associer un message à la bonne réponse", standard: "en trouvant la correspondance quelles que soient les majuscules et en donnant une réponse par défaut quand rien ne correspond" },
    { id: "O3", condition: "À partir de votre fonction de réponse", action: "écrire une boucle de discussion qui s'arrête quand l'utilisateur dit bye et décrire les limites des réponses à règles", standard: "avec la boucle qui se termine sur bye et au moins un exemple que les règles ne savent pas gérer" },
    { id: "O4", condition: "Avec le pipeline de Hugging Face", action: "charger un modèle d'analyse de sentiment pré-entraîné, l'exécuter sur une phrase et lire son étiquette et son score", standard: "après avoir lu la fiche du modèle, avec l'étiquette et le score lus correctement" },
    { id: "O5", condition: "À partir d'une liste de commentaires", action: "exécuter le modèle sur chaque commentaire dans une boucle, compter les étiquettes et afficher un résumé propre", standard: "avec des comptes qui correspondent aux étiquettes et des scores arrondis à deux décimales" },
    { id: "O6", condition: "À partir des résultats du modèle", action: "signaler les résultats sous un seuil de confiance pour qu'une personne les vérifie, et suivre les bonnes pratiques d'une IA responsable", standard: "avec chaque score sous le seuil marqué « à vérifier à la main » et aucune donnée privée ni clé dans le notebook" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les briques de Python pour l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est la programmation d'IA, et préparer Colab",
          minutes: 5,
          goal: "Expliquer ce qu'est un modèle d'IA et importer une bibliothèque Python dans Colab.",
          text: [
            "En programmation classique, vous écrivez chaque règle vous-même : si le mot est « hi », répondre « hello ». En programmation d'IA, vous utilisez un modèle : un programme qui a appris des régularités à partir de nombreux exemples, et qui peut donc traiter des cas pour lesquels vous n'avez jamais écrit de règle.",
            "On construit rarement un modèle à partir de zéro. On utilise une bibliothèque : du code tout prêt que quelqu'un d'autre a écrit et partagé. En Python, on charge une bibliothèque avec import. Parmi les bibliothèques d'IA gratuites et populaires, il y a Hugging Face Transformers (modèles de langage), scikit-learn (apprentissage automatique classique) et PyTorch (apprentissage profond).",
            "Google Colab a déjà beaucoup de ces bibliothèques. S'il en manque une, vous l'installez dans une cellule avec !pip install suivi de son nom. Le ! dit à Colab d'exécuter une commande système au lieu de Python. Colab est gratuit, mais ses ordinateurs sont partagés, donc les ressources gratuites sont limitées et peuvent changer."
          ],
          steps: ["Ouvrez colab.research.google.com et créez un nouveau notebook.", "Dans une cellule, tapez : import random", "Ligne suivante : print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Exécutez-la plusieurs fois et regardez la réponse changer.", "Si un import échoue avec « No module named », exécutez !pip install <nom> dans une cellule, puis réessayez."],
          words: [["Modèle d'IA", "un programme qui a appris des régularités à partir de nombreux exemples et peut faire des suppositions sur de nouvelles données."], ["Bibliothèque", "du code tout prêt que vous pouvez charger et utiliser dans votre programme."], ["import", "le mot Python qui charge une bibliothèque."], ["pip", "l'outil qui installe les bibliothèques Python."], ["À règles", "un programme où une personne a écrit chaque règle à la main."]],
          slides: [
            { title: "Règles ou modèles", bullets: ["À règles : vous écrivez chaque règle", "Modèle d'IA : a appris des régularités à partir d'exemples", "Les modèles gèrent des cas que vous n'avez jamais écrits"] },
            { title: "Les bibliothèques font le gros du travail", bullets: ["import charge du code tout prêt", "Transformers, scikit-learn, PyTorch", "Toutes gratuites"] },
            { title: "Préparer Colab", bullets: ["Beaucoup de bibliothèques déjà installées", "Il en manque une ? !pip install <nom>", "Les ressources gratuites sont limitées et peuvent changer"] }
          ],
          sources: [COLAB],
          tryIt: "Dans un nouveau notebook Colab, importez la bibliothèque random et écrivez un programme qui choisit au hasard un exercice de sport, un en-cas ou un sujet d'étude dans une liste de cinq, et l'affiche. Exécutez-le trois fois.",
          youCanNow: "expliquer la différence entre un code à règles et un modèle d'IA, et importer une bibliothèque dans Colab.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une bibliothèque en Python ?", options: ["Une liste de vos notebooks enregistrés", "Un dossier Google Drive", "Du code tout prêt que quelqu'un d'autre a écrit et partagé", "Un message d'erreur"], answer: 2, why: "Une bibliothèque est du code tout prêt et partagé, que vous chargez avec import." },
            { objective: "O1", q: "Vous voulez utiliser scikit-learn mais vous ne savez pas si Colab l'a. Qu'essayez-vous d'abord ?", options: ["Exécuter import sklearn, et s'il affiche « No module named », exécuter !pip install scikit-learn", "Réécrire la bibliothèque vous-même", "Supprimer le notebook", "Taper le nom de la bibliothèque dans print()"], answer: 0, why: "Colab a déjà beaucoup de bibliothèques ; installez avec !pip seulement si l'import échoue." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Chaînes et dictionnaires : le cerveau d'un chatbot simple",
          minutes: 6,
          goal: "Utiliser un dictionnaire pour associer des mots-clés d'un message à des réponses.",
          text: [
            "Les programmes d'IA travaillent avec beaucoup de texte, donc il vous faut quelques outils pour les chaînes. message.lower() met le texte en minuscules, pour que « HELLO » et « hello » correspondent. \"hours\" in message vaut True si le mot apparaît quelque part dans le message. message.split() coupe une phrase en liste de mots.",
            "Un dictionnaire range des paires : une clé et une valeur, entre accolades. replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} On obtient une valeur avec replies[\"hours\"]. Vous pouvez bien sûr écrire vos clés et vos réponses en français.",
            "Pour construire le cerveau du chatbot, parcourez le dictionnaire : for keyword, answer in replies.items(): if keyword in message: return answer. Si rien ne correspond, renvoyez une réponse par défaut, comme « Désolé, je ne sais pas encore répondre à cela. »"
          ],
          steps: ["Créez un dictionnaire de mots-clés et de réponses.", "Écrivez une fonction reply(message).", "À l'intérieur, faites message = message.lower().", "Parcourez replies.items() et renvoyez la réponse du premier mot-clé trouvé.", "Après la boucle, renvoyez une réponse par défaut."],
          words: [["Chaîne", "du texte en Python."], ["Dictionnaire", "un ensemble de paires clé: valeur entre accolades."], ["Clé", "l'étiquette que l'on cherche dans un dictionnaire."], ["Valeur", "ce qui est rangé sous une clé."], [".items()", "donne chaque clé et chaque valeur d'un dictionnaire, pour une boucle."]],
          slides: [
            { title: "Les outils de texte", bullets: ["lower() : « HELLO » devient « hello »", "\"hours\" in message : True ou False", "split() : une phrase devient une liste de mots"] },
            { title: "Les dictionnaires", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Cherchez avec replies[\"hours\"]", "Les clés à gauche, les valeurs à droite"] },
            { title: "Le cerveau du chatbot", bullets: ["Mettre le message en minuscules", "Parcourir replies.items()", "Renvoyer la première correspondance, ou une réponse par défaut"] }
          ],
          tryIt: "Écrivez reply(message) pour une salle de sport, une bibliothèque ou un food truck imaginaires, avec au moins quatre mots-clés (par exemple horaires, prix, adresse, contact). Testez-la avec trois messages, dont un écrit en majuscules et un qu'elle ne devrait pas comprendre.",
          youCanNow: "utiliser les outils de chaînes et un dictionnaire pour associer un message à la bonne réponse.",
          quickCheck: [
            { objective: "O2", q: "Que donne \"I need help now\".split() ?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() coupe une phrase en une liste de mots." },
            { objective: "O2", q: "Votre chatbot ne trouve aucun mot-clé dans le message. Que doit-il faire ?", options: ["Planter avec une erreur", "Afficher toutes les réponses du dictionnaire", "Arrêter le programme", "Renvoyer une réponse par défaut comme « Désolé, je ne sais pas encore répondre à cela. »"], answer: 3, why: "Une réponse par défaut gère les messages qui ne correspondent à aucun mot-clé." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faire parler le chatbot, et voir ses limites",
          minutes: 5,
          goal: "Mettre votre fonction de réponse dans une boucle qui discute jusqu'à ce que l'utilisateur dise au revoir, et repérer ce que les règles ne savent pas faire.",
          text: [
            "Un chatbot a besoin d'une boucle : demander un message, afficher la réponse, et recommencer. while True: répète pour toujours, donc vous ajoutez une sortie : si le message est « bye », affichez un au revoir et utilisez break pour sortir de la boucle.",
            "Maintenant, testez-le comme un vrai utilisateur. Tapez « vous ouvrez quand ? » et votre robot échouera peut-être, parce que vous avez écrit « horaires », pas « ouvrez ». Chaque nouvelle façon de dire quelque chose demande une nouvelle règle. C'est la grande limite des programmes à règles.",
            "C'est justement pour cela que les modèles d'IA sont utiles : un modèle de langage a appris à partir de millions de phrases, donc il comprend beaucoup de façons de dire la même chose. Au prochain chapitre, vous en utiliserez un."
          ],
          steps: ["Commencez par while True:", "À l'intérieur, obtenez message = input(\"You: \")", "Si message.lower() == \"bye\", affichez un au revoir et faites break.", "Sinon, print(\"Bot:\", reply(message)).", "Testez avec cinq façons différentes de poser la même question."],
          words: [["while True", "une boucle qui continue jusqu'à ce que quelque chose à l'intérieur l'arrête."], ["break", "sort d'une boucle tout de suite."], ["Limite", "quelque chose qu'un programme ne sait pas bien faire."]],
          slides: [
            { title: "La boucle de discussion", bullets: ["while True: continue la discussion", "input() obtient le message", "break termine la discussion sur « bye »"] },
            { title: "Testez comme un vrai utilisateur", bullets: ["Posez la même question de cinq façons", "Comptez combien le robot en comprend"] },
            { title: "Pourquoi les règles atteignent leurs limites", bullets: ["Chaque nouvelle formulation demande une nouvelle règle", "Les modèles d'IA ont appris de millions de phrases", "C'est ce qu'utilise le chapitre 2"] }
          ],
          tryIt: "Mettez votre fonction de réponse de la leçon 2 dans une boucle de discussion qui se termine sur « bye ». Demandez les horaires de cinq façons différentes. Notez combien votre robot en a compris, puis ajoutez une règle pour corriger un échec.",
          youCanNow: "construire une boucle de chatbot à règles qui marche et expliquer pourquoi les règles seules sont limitées.",
          quickCheck: [
            { objective: "O3", q: "Que fait while True: tout seul ?", options: ["Il répète sans fin jusqu'à ce que quelque chose comme break l'arrête", "Il s'exécute une seule fois", "Il s'exécute seulement si l'utilisateur dit bye", "Il charge une bibliothèque"], answer: 0, why: "while True répète sans fin, il faut donc une sortie comme break." },
            { objective: "O3", q: "Les utilisateurs tapent sans cesse « à quelle heure vous fermez ? » et votre bot à règles échoue. Qu'est-ce que cela vous apprend ?", options: ["Le bot a une faute de frappe", "Colab est en panne", "Chaque nouvelle façon de dire quelque chose demande une nouvelle règle : c'est la limite des bots à règles", "Les utilisateurs devraient taper en majuscules"], answer: 2, why: "Les bots à règles ne reconnaissent que les règles que vous avez écrites ; les modèles de langage gèrent plus de façons de dire les choses." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les briques de Python pour l'IA",
        questions: [
          { objective: "O1", q: "Quelle est la grande différence entre un code à règles et un modèle d'IA ?", options: ["Le code à règles est toujours plus rapide", "Les modèles n'utilisent aucun code", "Un modèle a appris des régularités à partir d'exemples au lieu d'avoir chaque règle écrite à la main", "Il n'y a aucune différence"], answer: 2, why: "Les modèles apprennent à partir de données ; le code à règles demande d'écrire chaque règle." },
          { objective: "O1", q: "Votre cellule Colab dit « No module named » pour une bibliothèque. Que faites-vous ?", options: ["Exécuter !pip install avec le nom de la bibliothèque, puis refaire l'import", "Redémarrer votre ordinateur", "Supprimer le notebook", "Renommer la variable"], answer: 0, why: "pip installe une bibliothèque manquante." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. Que vaut replies[\"hours\"] ?", options: ["\"hours\"", "Une erreur", "True", "\"Open 9 to 5.\""], answer: 3, why: "Chercher une clé donne sa valeur." },
          { objective: "O2", q: "Pourquoi utiliser message.lower() dans un chatbot ?", options: ["Pour raccourcir le texte", "Pour que « HOURS » et « hours » correspondent tous les deux", "Pour supprimer le message", "Pour le traduire"], answer: 1, why: "Mettre en minuscules fait ignorer les majuscules lors de la comparaison." },
          { objective: "O3", q: "Quel mot fait sortir d'une boucle while True ?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break sort de la boucle tout de suite." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser un modèle d'IA pré-entraîné",
      lessons: [
        {
          objectives: ["O4"],
          title: "Charger un modèle pré-entraîné avec Hugging Face",
          minutes: 6,
          goal: "Charger un modèle gratuit d'analyse de sentiment dans Colab et l'utiliser sur une phrase.",
          text: [
            "Un modèle pré-entraîné est un modèle que quelqu'un a déjà entraîné et partagé, donc vous pouvez l'utiliser tout de suite. Hugging Face est un site qui héberge des milliers de modèles gratuits, et sa bibliothèque Transformers les charge en une ligne.",
            "L'outil le plus simple est pipeline. Vous lui donnez la tâche et le modèle : classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Ce modèle lit du texte en anglais et décide si son humeur (le sentiment) est POSITIVE ou NEGATIVE.",
            "Utilisez-le comme une fonction : classifier(\"The practice today was great!\"). Il renvoie une liste avec un dictionnaire à l'intérieur, par exemple [{'label': 'POSITIVE', 'score': 0.99}]. Le score dit à quel point le modèle est sûr, de 0 à 1. La première exécution télécharge le modèle, donc elle prend un peu plus de temps.",
            "Lisez toujours la page d'un modèle (sa « fiche de modèle ») avant de l'utiliser : elle dit sur quoi il a été entraîné, à quoi il sert et sa licence."
          ],
          steps: ["Dans une nouvelle cellule : from transformers import pipeline", "Créez classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Exécutez result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "Si transformers manque, exécutez d'abord !pip install transformers."],
          words: [["Modèle pré-entraîné", "un modèle que quelqu'un d'autre a déjà entraîné et que vous pouvez utiliser tout de suite."], ["Hugging Face", "un site et un ensemble de bibliothèques pour partager des modèles d'IA gratuits."], ["pipeline", "un outil de Transformers qui charge un modèle pour une tâche en une ligne."], ["Sentiment", "l'humeur d'un texte : positive ou négative."], ["Score", "à quel point le modèle est sûr, de 0 à 1."], ["Fiche de modèle", "la page qui explique ce que fait un modèle, ses données et sa licence."]],
          slides: [
            { title: "Les modèles pré-entraînés", bullets: ["Déjà entraînés par quelqu'un d'autre", "Hugging Face en héberge des milliers, gratuits", "Lisez d'abord la fiche du modèle"] },
            { title: "Une ligne pour charger", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "La première exécution télécharge le modèle"] },
            { title: "Lire le résultat", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] est l'humeur", "result[0][\"score\"] dit à quel point il est sûr"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Chargez le classifieur de sentiment et appliquez-le à trois phrases en anglais que vous écrivez : une clairement joyeuse, une clairement fâchée, et une mitigée comme « The food was good but the wait was long. » Affichez l'étiquette et le score de chacune et notez celle dont il était le moins sûr.",
          youCanNow: "charger un modèle pré-entraîné avec pipeline et lire son étiquette et son score.",
          quickCheck: [
            { objective: "O4", q: "Que vous apprend la fiche d'un modèle ?", options: ["Votre mot de passe Colab", "Combien de commentaires vous avez", "Le prix d'un ordinateur", "Sur quoi le modèle a été entraîné, à quoi il sert et sa licence"], answer: 3, why: "Lisez la fiche du modèle avant d'utiliser un modèle." },
            { objective: "O4", q: "Vous lancez le classifieur pour la première fois et il met du temps. Que faites-vous ?", options: ["L'arrêter et abandonner", "Attendre ; la première exécution télécharge le modèle", "Réinstaller Python", "Changer l'étiquette en POSITIVE à la main"], answer: 1, why: "La première exécution télécharge le modèle, donc elle prend plus de temps." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Appliquer le modèle à beaucoup de textes",
          minutes: 5,
          goal: "Utiliser une boucle pour classer une liste de commentaires et compter les résultats.",
          text: [
            "Les vrais programmes traitent beaucoup de textes, pas un seul. Mettez vos commentaires dans une liste, puis faites une boucle : for comment in comments: result = classifier(comment)[0]. Vous pouvez aussi donner toute la liste d'un coup, classifier(comments), et recevoir un résultat par commentaire.",
            "Pour résumer, gardez des compteurs : positive = 0 et negative = 0 avant la boucle, puis ajoutez 1 au bon compteur dans la boucle selon result[\"label\"].",
            "Arrondissez le score pour qu'il soit facile à lire : round(result[\"score\"], 2) donne deux chiffres après la virgule. Une f-string affiche une ligne propre : print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Mettez au moins cinq commentaires dans une liste.", "Mettez positive = 0 et negative = 0.", "Parcourez les commentaires et classez chacun.", "Affichez l'étiquette, le score arrondi et le commentaire.", "Ajoutez au bon compteur, puis affichez les totaux après la boucle."],
          words: [["Compteur", "une variable qui compte combien de fois quelque chose est arrivé."], ["round()", "raccourcit un nombre à un nombre choisi de chiffres après la virgule."], ["Lot", "un groupe d'entrées traitées ensemble."]],
          slides: [
            { title: "Beaucoup de textes, une boucle", bullets: ["Mettez les commentaires dans une liste", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Comptez au fur et à mesure", bullets: ["positive = 0, negative = 0 avant la boucle", "Ajoutez 1 au bon compteur dans la boucle", "Affichez les totaux après la boucle"] },
            { title: "Rendez-le lisible", bullets: ["round(score, 2) pour deux chiffres après la virgule", "Une ligne propre par commentaire"] }
          ],
          tryIt: "Écrivez six commentaires en anglais sur un cours, un entraînement d'équipe ou une boutique du quartier. Classez-les dans une boucle, affichez une ligne propre pour chacun, et affichez combien étaient positifs et combien négatifs.",
          youCanNow: "appliquer un modèle d'IA à une liste de textes et résumer les résultats avec des compteurs.",
          quickCheck: [
            { objective: "O5", q: "Que renvoie classifier(comments) quand comments est une liste ?", options: ["Un seul résultat pour toute la liste", "Une erreur à chaque fois", "Un résultat par commentaire", "Seulement le résultat du premier commentaire"], answer: 2, why: "Donner une liste renvoie un résultat pour chaque commentaire." },
            { objective: "O5", q: "Dans votre boucle, result[\"label\"] vaut \"POSITIVE\". Que faites-vous de vos compteurs ?", options: ["Ajouter 1 à positive", "Ajouter 1 à negative", "Remettre positive à 0", "Supprimer le commentaire"], answer: 0, why: "Ajoutez 1 au compteur qui correspond à l'étiquette." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vérifier l'IA et terminer le trieur d'avis",
          minutes: 6,
          goal: "Signaler les résultats peu sûrs pour qu'une personne les vérifie, et terminer le trieur d'avis.",
          text: [
            "Les modèles d'IA font des erreurs. Celui-ci ne connaît que positif et négatif, donc les commentaires neutres ou mitigés sont forcés dans l'une des deux cases. Il peut aussi rater l'ironie (« Great, another rainy game day. ») et il a été entraîné sur des critiques de films en anglais, donc l'argot ou d'autres langues, dont le français, peuvent le tromper.",
            "Une bonne habitude est le seuil de confiance : si le score est sous un nombre que vous choisissez, comme 0.80, le programme dit « à vérifier à la main » au lieu de faire confiance à l'étiquette. Une personne prend la décision finale pour tout ce qui compte.",
            "Utilisez l'IA de façon responsable : ne passez pas de messages privés dans un outil sans autorisation, ne collez pas de mots de passe ou de clés d'API dans un notebook partagé, et dites aux gens quand un résultat vient de l'IA.",
            "Vous avez maintenant tout pour la tâche finale : une liste, un modèle, une boucle, un if avec un seuil, des compteurs et un affichage clair."
          ],
          steps: ["Choisissez un seuil, par exemple THRESHOLD = 0.80.", "Dans la boucle, vérifiez : if result[\"score\"] < THRESHOLD:", "Affichez « à vérifier à la main » à côté de ces commentaires.", "Comptez les positifs et les négatifs comme avant.", "Affichez les totaux et combien demandent une vérification humaine."],
          words: [["Seuil", "un nombre limite que vous choisissez ; les résultats en dessous reçoivent un traitement spécial."], ["Confiance", "à quel point un modèle est sûr de sa réponse."], ["Ironie", "dire le contraire de ce qu'on pense, ce que les modèles ratent souvent."], ["Humain dans la boucle", "une personne revoit les résultats de l'IA avant qu'ils soient utilisés."]],
          slides: [
            { title: "Les modèles font des erreurs", bullets: ["Seulement positif ou négatif : le mitigé est forcé", "Rate l'ironie et l'argot", "Entraîné sur des critiques de films en anglais"] },
            { title: "Utilisez un seuil", bullets: ["THRESHOLD = 0.80", "Score en dessous : « à vérifier à la main »", "Une personne prend la décision finale"] },
            { title: "Utilisez l'IA de façon responsable", bullets: ["Demandez la permission pour les messages privés", "Pas de mots de passe ni de clés dans un notebook partagé", "Dites quand un résultat vient de l'IA"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Tâche finale : construisez le trieur d'avis. Utilisez au moins six commentaires en anglais, dont un mitigé et un ironique. Affichez chacun avec son étiquette et son score, marquez tout ce qui est sous 0.80 comme « à vérifier à la main », et affichez les totaux positifs, négatifs et à vérifier. Puis lisez vous-même ceux qui sont signalés et décidez.",
          youCanNow: "construire en Python un programme d'IA qui trie du texte, présente ses résultats et confie les cas incertains à une personne.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi ce modèle de sentiment peut-il se tromper sur un commentaire neutre ?", options: ["Il ne lit que des nombres", "Il ne connaît que positif et négatif, donc les commentaires neutres sont forcés dans l'un des deux", "Il a besoin d'un mot de passe", "Il ne marche que le vendredi"], answer: 1, why: "Le modèle n'a que deux étiquettes, donc les commentaires mitigés ou neutres sont forcés dans l'une d'elles." },
            { objective: "O6", q: "Un ami veut que vous passiez ses messages privés dans votre trieur. Que faites-vous ?", options: ["Les passer sans demander aux personnes qui les ont écrits", "Publier les résultats en ligne", "Coller votre clé API dans le notebook pour aller plus vite", "N'utiliser que des messages que vous avez la permission d'utiliser, et dire que les résultats viennent de l'IA"], answer: 3, why: "Utiliser l'IA de façon responsable, c'est avoir la permission pour les données privées et dire quand l'IA a été utilisée." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser un modèle d'IA pré-entraîné",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un modèle pré-entraîné ?", options: ["Un modèle que vous devez d'abord entraîner pendant des semaines", "Une liste de règles que vous écrivez", "Un site payant", "Un modèle que quelqu'un a déjà entraîné et que vous pouvez utiliser tout de suite"], answer: 3, why: "Les modèles pré-entraînés sont prêts à l'emploi." },
          { objective: "O4", q: "Le classifieur renvoie [{'label': 'NEGATIVE', 'score': 0.97}]. Que veut dire 0.97 ?", options: ["Le modèle est très sûr que le commentaire est négatif", "97 mots ont été lus", "Le commentaire est long à 97 %", "Cela a coûté 97 centimes"], answer: 0, why: "Le score est la confiance du modèle, de 0 à 1." },
          { objective: "O5", q: "Quelle ligne obtient l'étiquette à partir de result = classifier(text) ?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "Le résultat est une liste qui contient un dictionnaire, donc d'abord [0], puis [\"label\"]." },
          { objective: "O6", q: "Un commentaire obtient un score de 0.55. Avec un seuil de 0.80, que fait votre programme ?", options: ["Il le supprime", "Il le compte deux fois", "Il arrête le programme", "Il le marque « à vérifier à la main »"], answer: 3, why: "Les scores sous le seuil vont à une personne." },
          { objective: "O6", q: "Lequel de ces usages de l'IA est responsable ?", options: ["Coller votre clé d'API dans un notebook que vous partagez", "Analyser les messages privés de camarades sans demander", "Dire aux gens qu'un résultat vient de l'IA et vérifier ceux qui sont incertains", "Faire confiance à chaque étiquette"], answer: 2, why: "Être transparent et garder une personne dans la boucle, c'est un usage responsable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Programmer l'IA avec Python pour débutants",
    questions: [
      { objective: "O1", q: "La meilleure description d'un modèle d'IA est :", options: ["Une liste d'instructions if", "Un programme qui a appris des régularités à partir de nombreux exemples", "Un type de clavier", "Une adresse de site web"], answer: 1, why: "Les modèles apprennent des régularités à partir de données." },
      { objective: "O1", q: "Que fait import en Python ?", options: ["Il charge une bibliothèque pour utiliser son code", "Il télécharge un film", "Il affiche du texte", "Il supprime un fichier"], answer: 0, why: "import fait entrer une bibliothèque dans votre programme." },
      { objective: "O1", q: "Que veut dire le ! dans !pip install transformers dans Colab ?", options: ["C'est une erreur", "Parler plus fort", "Exécuter ceci comme une commande système, pas comme du Python", "L'installer deux fois"], answer: 2, why: "Le ! dit à Colab d'exécuter une commande système." },
      { objective: "O1", q: "Quelle phrase est vraie sur la version gratuite de Colab ?", options: ["Elle est gratuite, mais les ressources sont limitées et peuvent changer", "Les ressources sont illimitées", "Il faut d'abord l'installer", "Elle ne marche que sur téléphone"], answer: 0, why: "Colab dit que les ressources gratuites ne sont ni garanties ni illimitées." },
      { objective: "O2", q: "\"HELP\".lower() donne :", options: ["\"HELP\"", "\"Help\"", "Une erreur", "\"help\""], answer: 3, why: "lower() met chaque lettre en minuscule." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" donne :", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in vérifie si le mot apparaît dans le texte." },
      { objective: "O2", q: "Dans {\"hours\": \"Open 9 to 5.\"}, qu'est-ce que \"hours\" ?", options: ["La valeur", "La clé", "Une liste", "Une boucle"], answer: 1, why: "Le côté gauche de la paire est la clé." },
      { objective: "O3", q: "Votre chatbot ne comprend pas « vous ouvrez quand ? » mais connaît « horaires ». Pourquoi ?", options: ["Colab est en panne", "Python ne sait pas lire les questions", "Le dictionnaire est trop court pour marcher", "Les robots à règles ne reconnaissent que les règles que vous avez écrites"], answer: 3, why: "Dans un robot à règles, chaque formulation demande sa propre règle." },
      { objective: "O3", q: "Dans une boucle de discussion, que doit-il se passer quand l'utilisateur tape bye ?", options: ["Afficher un au revoir et faire break", "Commencer une nouvelle boucle", "Demander un mot de passe", "Rien"], answer: 0, why: "break termine proprement la boucle." },
      { objective: "O3", q: "Pourquoi les modèles de langage sont-ils utiles pour les chatbots ?", options: ["Ils ne se trompent jamais", "Ils n'ont pas besoin d'ordinateur", "Ils comprennent beaucoup de façons de dire la même chose", "Ils marchent sans données"], answer: 2, why: "Ils ont appris à partir de millions de phrases." },
      { objective: "O4", q: "Qu'est-ce que Hugging Face ?", options: ["Un réseau social", "Une erreur Python", "Un jeu vidéo", "Un site et des bibliothèques pour partager des modèles d'IA gratuits"], answer: 3, why: "Hugging Face héberge des modèles et la bibliothèque Transformers." },
      { objective: "O4", q: "Quelle ligne charge le modèle de sentiment ?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline prend la tâche et le nom du modèle." },
      { objective: "O4", q: "Pourquoi la première exécution du modèle est-elle plus longue ?", options: ["Colab est lent exprès", "Elle télécharge le modèle", "Elle entraîne le modèle à partir de zéro", "Elle vérifie vos e-mails"], answer: 1, why: "Les fichiers du modèle se téléchargent la première fois." },
      { objective: "O4", q: "Que devez-vous lire avant d'utiliser un modèle ?", options: ["Sa fiche de modèle", "L'historique de votre navigateur", "Le logo de Colab", "Rien"], answer: 0, why: "La fiche explique son usage, ses données et sa licence." },
      { objective: "O4", q: "Le score du modèle de sentiment, c'est :", options: ["La longueur du texte", "Le nombre de mots positifs", "À quel point le modèle est sûr, de 0 à 1", "Une note sur 100"], answer: 2, why: "Le score est la confiance." },
      { objective: "O5", q: "Pour compter les commentaires positifs dans une boucle, vous commencez par :", options: ["Mettre positive = 0 avant la boucle", "Afficher positive", "Supprimer la liste", "Importer counter"], answer: 0, why: "Un compteur commence à 0 avant la boucle." },
      { objective: "O5", q: "round(0.98765, 2) donne :", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Arrondi à deux chiffres après la virgule, 0.98765 donne 0.99." },
      { objective: "O6", q: "Quel commentaire ce modèle risque-t-il le plus de mal classer ?", options: ["« I loved it! »", "« Great, another rainy game day. »", "« This was terrible. »", "« Best class ever. »"], answer: 1, why: "L'ironie dit le contraire de ce qu'elle veut dire, et les modèles la ratent souvent." },
      { objective: "O6", q: "Pourquoi utiliser un seuil de confiance ?", options: ["Pour rendre le programme plus rapide", "Pour envoyer les résultats incertains à une personne qui vérifie", "Pour cacher les commentaires négatifs", "Pour supprimer les scores faibles"], answer: 1, why: "Les résultats peu sûrs demandent une vérification humaine." },
      { objective: "O6", q: "Qu'est-ce qu'il n'est PAS sûr de mettre dans un notebook que vous partagez ?", options: ["Une liste de commentaires inventés", "Une ligne de commentaire qui commence par #", "Une instruction print", "Votre mot de passe ou votre clé d'API"], answer: 3, why: "Les secrets dans un notebook partagé peuvent être copiés et mal utilisés." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      5,
      7,
      8,
      10,
      14,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Modèle chargé et utilisé",
        objective: "O4",
        notYet: "Le modèle ne se charge pas, ou aucune étiquette ni aucun score n'est produit.",
        meets: "Le modèle de sentiment pré-entraîné s'exécute et donne une étiquette et un score pour chaque commentaire.",
        exceeds: "Le notebook note sur quoi le modèle a été entraîné, d'après sa fiche."
      },
      {
        name: "Boucle et affichage",
        objective: "O5",
        notYet: "Moins de six commentaires, ou les commentaires ne sont pas chacun affichés avec étiquette et score.",
        meets: "Au moins six commentaires, chacun affiché avec son étiquette et un score arrondi.",
        exceeds: "L'affichage est bien aligné grâce à une f-string."
      },
      {
        name: "Comptes",
        objective: "O5",
        notYet: "Les comptes de positifs et de négatifs manquent ou sont faux.",
        meets: "Les bons comptes de commentaires positifs et négatifs sont affichés.",
        exceeds: "Affiche aussi combien ont été marqués « à vérifier à la main »."
      },
      {
        name: "Seuil de confiance",
        objective: "O6",
        notYet: "Pas de seuil, ou les scores bas ne sont pas signalés.",
        meets: "Chaque score sous 0.80 est marqué « à vérifier à la main ».",
        exceeds: "Inclut un commentaire ironique ou mitigé et explique pourquoi le modèle peut se tromper."
      },
      {
        name: "Usage responsable",
        objective: "O6",
        notYet: "Le notebook contient des messages privés sans permission, ou un mot de passe ou une clé API.",
        meets: "Seulement des commentaires inventés ou autorisés, et aucun mot de passe ni aucune clé dans le notebook.",
        exceeds: "Ajoute une note disant que les étiquettes viennent de l'IA et qu'une personne vérifie les cas incertains."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille du trieur d'avis",
      "Apprenants qui disent avoir construit ou modifié un autre programme d'IA dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui suivent ensuite un autre cours, comme « Introduction à l'apprentissage automatique » ou « Introduction à la science des données et à l'analyse de données »",
      "Apprenants qui montrent le trieur d'avis dans un portfolio, un cours, un club ou une candidature"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur fixe ou portable avec un navigateur web",
      "Un compte Google gratuit pour utiliser Google Colab",
      "Six courts commentaires inventés ou plus, par exemple sur un entraînement, un cours ou une petite boutique",
      "Environ 60 à 75 minutes au total, plus le temps d'exercice"
    ],
    facilitatorNotes: [
      "Lancez une fois le téléchargement du modèle avant le cours, sur le même réseau, pour vérifier qu'il marche ; les réseaux scolaires bloquent parfois le téléchargement des modèles.",
      "Faites utiliser aux apprenants des commentaires inventés ou qu'ils ont la permission d'utiliser ; jamais de vrais messages privés.",
      "Rappelez aux apprenants de ne jamais coller de mots de passe ou de clés API dans un notebook, surtout s'ils le partagent.",
      "Demandez à chaque apprenant de trouver un commentaire sur lequel le modèle se trompe, et discutez-en en groupe.",
      "Les ressources gratuites de Colab peuvent s'épuiser ; si une session s'arrête, montrez comment se reconnecter et relancer les cellules depuis le début."
    ]
  }
};
