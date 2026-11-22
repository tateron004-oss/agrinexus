"use strict";

// Koach Learn course, French translation of shared/python-basics.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code is kept exactly as in the English course; the temperature exercise uses Celsius for French-speaking students.

const COLAB = { name: "Google Colab : questions fréquentes", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-fr",
  lang: "fr",
  translationOf: "python-basics",
  category: "Youth",
  name: "Introduction à la programmation avec Python",
  skills: "Exécuter du Python dans Google Colab, Utiliser des variables et input, Prendre des décisions avec if, Travailler avec des listes et des boucles, Écrire une fonction",
  outcome: "écrire et exécuter dans Google Colab un court programme Python qui demande des informations à l'utilisateur, les garde, prend une décision avec elles, répète des étapes avec une boucle et affiche un résultat clair.",
  about: [
    "Ce cours est pour toute personne qui n'a jamais écrit de code : élèves, anciens militaires qui changent de métier, et adultes qui cherchent un emploi dans la tech. Il vous faut seulement un compte Google gratuit et un navigateur web.",
    "Vous allez écrire du vrai Python dans Google Colab, un site gratuit qui exécute le code pour vous, donc il n'y a rien à installer. Chaque leçon ajoute un nouvel outil : afficher, variables, décisions, listes, boucles et fonctions.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis tapez le code vous-même dans « Essayez maintenant ». À la fin, vous construirez de zéro un petit vérificateur de budget de courses. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Dans Google Colab, écrivez un vérificateur de budget de courses : une fonction qui reçoit une liste de prix et un budget, additionne les prix avec une boucle, et affiche le total puis « Dans le budget » ou « Hors budget » avec la différence. Demandez le budget à l'utilisateur avec input(), appelez votre fonction et testez-la avec deux budgets différents.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes et des adultes qui essaient la programmation pour la première fois : lycéens et étudiants, membres de programmes jeunesse, personnes en reconversion et stagiaires en formation professionnelle curieux du code, des données ou de l'IA.",
    startingPoint: "Ils savent utiliser un ordinateur et un navigateur web et se connecter à un compte Google. La plupart n'ont jamais écrit de code et ne savent pas ce que sont une variable, une condition, une liste, une boucle ou une fonction.",
    gap: "La programmation ouvre la porte aux métiers de la technologie, des données et de l'IA, et c'est un outil utile dans beaucoup d'autres métiers. Les apprenants qui n'ont jamais écrit un programme qui fonctionne pensent souvent que le code n'est pas pour eux ; un premier programme qui règle un vrai problème donne les compétences et la confiance pour continuer.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de programmation est expliqué avec un exemple",
      "Appareils : un ordinateur fixe ou portable avec un navigateur web marche le mieux ; une tablette est possible mais rend la saisie du code plus difficile",
      "Comptes et coût : un compte Google gratuit pour Google Colab ; rien à installer ni à acheter",
      "Temps : environ 5 à 6 minutes par leçon plus les exercices, environ 60 à 75 minutes au total",
      "Maths : seulement additionner, comparer et des décimaux simples"
    ],
    prerequisites: "Aucun. « Les bases de l'ordinateur » aide les apprenants qui découvrent la saisie au clavier et le navigateur."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec Google Colab dans un navigateur web", action: "ouvrir un notebook, écrire et exécuter une ligne print, et lire la dernière ligne d'un message d'erreur", standard: "avec le programme qui s'exécute et toute faute de frappe corrigée grâce au message d'erreur" },
    { id: "O2", condition: "À partir des informations dont un programme a besoin", action: "les ranger dans des variables du bon type, demander une saisie à l'utilisateur et l'afficher avec une f-string", standard: "en convertissant la saisie en nombre avec float() ou int() avant de faire un calcul" },
    { id: "O3", condition: "À partir d'une règle avec deux résultats possibles ou plus", action: "écrire un bloc if, elif et else qui choisit le bon résultat", standard: "avec les bons signes de comparaison, les deux-points et l'indentation, et le bon résultat pour chaque valeur de test" },
    { id: "O4", condition: "À partir de plusieurs valeurs", action: "créer une liste, y ajouter un élément et lire des éléments par leur indice, et utiliser len() et sum() dessus", standard: "avec chaque indice et chaque résultat justes" },
    { id: "O5", condition: "À partir d'une liste ou d'une tâche à répéter", action: "écrire une boucle for avec un total cumulé et une boucle while qui s'arrête", standard: "avec le bon total et aucune boucle qui tourne sans fin" },
    { id: "O6", condition: "À partir d'un petit problème comme un vérificateur de budget", action: "écrire une fonction avec des paramètres et une valeur de retour, l'appeler dans un programme complet et la tester", standard: "avec un programme qui donne des résultats justes pour au moins deux entrées différentes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Vos premiers programmes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ouvrir Google Colab et exécuter votre première ligne",
          minutes: 5,
          goal: "Ouvrir un notebook Colab, taper une ligne de Python et l'exécuter.",
          text: [
            "Un programme est une liste d'instructions qu'un ordinateur suit dans l'ordre. Python est un langage de programmation : une façon d'écrire ces instructions que les humains peuvent lire. On l'utilise pour les sites web, les données, les jeux, les robots et l'IA.",
            "Google Colab est un site gratuit qui exécute Python dans votre navigateur. Vous n'installez rien. Votre travail est enregistré sous forme de notebook dans votre Google Drive. Un notebook est fait de cellules : des cases où vous tapez du code et l'exécutez.",
            "Votre première instruction est print. print(\"Hello, world!\") affiche les mots entre les guillemets. Les guillemets disent à Python que c'est du texte, pas une commande. Si vous faites une faute de frappe, Python affiche un message d'erreur. Lisez-en la dernière ligne : elle dit ce qui ne va pas."
          ],
          steps: ["Allez sur colab.research.google.com et connectez-vous avec un compte Google.", "Choisissez de créer un nouveau notebook.", "Cliquez dans la première cellule de code et tapez : print(\"Hello, world!\")", "Appuyez sur le bouton lecture à côté de la cellule, ou sur Maj + Entrée, pour l'exécuter.", "Lisez le résultat sous la cellule."],
          words: [["Programme", "une liste d'instructions qu'un ordinateur suit dans l'ordre."], ["Python", "un langage de programmation populaire et facile à lire."], ["Notebook", "un fichier Colab fait de cellules où l'on écrit et exécute du code."], ["Cellule", "une case d'un notebook qui contient du code à exécuter."], ["Message d'erreur", "la note de Python qui dit que quelque chose ne va pas dans le code ; la dernière ligne dit quoi."]],
          slides: [
            { title: "Ce qu'est Python", bullets: ["Un langage pour écrire des instructions à un ordinateur", "Utilisé pour les sites web, les données, les jeux et l'IA", "Facile à lire comparé à beaucoup d'autres langages"] },
            { title: "Google Colab", bullets: ["Un site gratuit qui exécute Python dans le navigateur", "Rien à installer", "Les notebooks s'enregistrent dans votre Google Drive"] },
            { title: "Votre première ligne", bullets: ["Tapez : print(\"Hello, world!\")", "Exécutez avec le bouton lecture ou Maj + Entrée", "Les mots apparaissent sous la cellule"] },
            { title: "Les erreurs sont normales", bullets: ["Lisez la dernière ligne de l'erreur", "Vérifiez l'orthographe, les guillemets et les parenthèses", "Corrigez et exécutez à nouveau"] }
          ],
          sources: [COLAB],
          tryIt: "Ouvrez un nouveau notebook Colab. Dans une cellule, affichez votre prénom. Dans une deuxième cellule, affichez une phrase sur votre plat préféré. Puis enlevez exprès un guillemet, exécutez, et lisez l'erreur. Remettez le guillemet et exécutez à nouveau.",
          youCanNow: "ouvrir Google Colab, écrire une ligne print, l'exécuter et lire un message d'erreur.",
          quickCheck: [
            { objective: "O1", q: "Dans un notebook Colab, qu'est-ce qu'une cellule ?", options: ["Un dossier Google Drive", "Une case où vous tapez du code et l'exécutez", "Un message d'erreur", "Un type de nombre"], answer: 1, why: "Un notebook est fait de cellules où vous tapez et exécutez du code." },
            { objective: "O1", q: "Vous avez tapé prnt(\"Hi\") et Python affiche une longue erreur. Que faites-vous ?", options: ["Fermer Colab et créer un nouveau compte", "L'ignorer et taper plus de code", "Lire la dernière ligne de l'erreur, puis corriger l'orthographe en print", "Supprimer tout le notebook"], answer: 2, why: "La dernière ligne de l'erreur vous dit ce qui n'a pas marché, ici un nom mal écrit." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les variables : donner un nom aux données",
          minutes: 5,
          goal: "Garder des informations dans des variables et demander une saisie à l'utilisateur.",
          text: [
            "Une variable est un nom qui contient une valeur, comme une boîte avec une étiquette. name = \"Maya\" met le texte Maya dans une boîte appelée name. hours = 20 met le nombre 20 dans une boîte appelée hours. Le signe = veut dire « range ceci », pas « est égal à ».",
            "Les valeurs ont des types. Le texte entre guillemets est une chaîne de caractères (str). Les nombres entiers sont des int. Les nombres à virgule sont des float ; en Python, on écrit la virgule avec un point, comme 7.5. Le type compte : \"5\" + \"5\" donne \"55\", mais 5 + 5 donne 10.",
            "input() demande à la personne qui utilise le programme de taper quelque chose. Il renvoie toujours une chaîne de caractères, donc pour calculer, on la change en nombre : hours = float(input(\"Hours worked: \")).",
            "Une f-string mélange texte et variables : print(f\"Hi {name}, you worked {hours} hours.\") Le f avant les guillemets et les accolades font le travail."
          ],
          steps: ["Choisissez un nom de variable court et clair, sans espaces (avec_des_tirets_bas).", "Rangez une valeur avec =.", "Pour une saisie, utilisez input(\"question : \").", "Entourez-la de int() ou float() si vous avez besoin d'un nombre.", "Affichez le résultat avec une f-string."],
          words: [["Variable", "un nom qui contient une valeur."], ["Chaîne de caractères (str)", "du texte, écrit entre guillemets."], ["Entier (int)", "un nombre entier, comme 7."], ["Float", "un nombre à virgule, écrit avec un point, comme 7.5."], ["input()", "demande à l'utilisateur de taper quelque chose et le renvoie sous forme de texte."], ["f-string", "un texte qui commence par f et peut montrer des variables entre { }."]],
          slides: [
            { title: "Une variable est une boîte étiquetée", bullets: ["name = \"Maya\"", "hours = 20", "= veut dire ranger, pas égal"] },
            { title: "Trois types courants", bullets: ["str : du texte entre guillemets", "int : des nombres entiers", "float : des nombres à virgule (avec un point)"] },
            { title: "Demander à l'utilisateur", bullets: ["input() renvoie toujours du texte", "hours = float(input(\"Hours worked: \"))", "Changez le texte en nombre avant de calculer"] },
            { title: "Afficher avec les f-strings", bullets: ["print(f\"Hi {name}!\")", "Mettez les variables entre accolades"] }
          ],
          tryIt: "Écrivez un programme qui demande le prénom de l'utilisateur, son salaire horaire et le nombre d'heures travaillées cette semaine. Rangez chaque réponse dans une variable, multipliez le salaire par les heures et affichez : Bonjour <prénom>, vous avez gagné <montant> cette semaine.",
          youCanNow: "ranger des valeurs dans des variables, demander une saisie à l'utilisateur, changer du texte en nombre et afficher un résultat clair.",
          quickCheck: [
            { objective: "O2", q: "Quel est le type de la valeur 3.75 ?", options: ["str", "int", "list", "float"], answer: 3, why: "Un nombre avec un point décimal est un float." },
            { objective: "O2", q: "Vous voulez que l'utilisateur tape son taux horaire pour le multiplier par les heures. Quelle ligne écrivez-vous ?", options: ["rate = float(input(\"Pay rate: \"))", "rate = input(\"Pay rate: \")", "print(\"Pay rate\")", "rate == input(\"Pay rate: \")"], answer: 0, why: "input() donne une chaîne de caractères, donc float() la transforme en nombre avec lequel on peut calculer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Prendre des décisions avec if, elif et else",
          minutes: 6,
          goal: "Écrire du code qui fait des choses différentes selon une condition.",
          text: [
            "Les programmes font des choix avec if (« si »). Une condition est une question dont la réponse est True (vrai) ou False (faux), comme hours > 40. Si elle est vraie, les lignes indentées en dessous s'exécutent.",
            "Les signes de comparaison : == égal à (deux signes égal), != différent de, > plus grand que, < plus petit que, >= au moins, <= au plus. On peut combiner des conditions avec and (et) et or (ou).",
            "elif veut dire « sinon si » : une deuxième vérification quand la première est fausse. else (« sinon ») s'exécute quand aucune vérification n'était vraie. L'indentation (quatre espaces) permet à Python de savoir quelles lignes appartiennent au if. Colab l'ajoute pour vous après les deux-points.",
            "Exemple : if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Chaque partie va sur sa propre ligne, avec le print indenté."
          ],
          steps: ["Écrivez if, puis une condition, puis deux-points.", "Indentez les lignes qui doivent s'exécuter quand c'est vrai.", "Ajoutez elif pour une autre vérification si besoin.", "Ajoutez else pour tout le reste.", "Testez avec des valeurs qui passent par chaque branche."],
          words: [["Condition", "une question dont la réponse est True ou False."], ["Booléen", "le type True ou False en Python."], ["Indentation", "les espaces au début d'une ligne qui montrent à quel bloc elle appartient."], ["Branche", "l'un des chemins qu'une instruction if peut prendre."]],
          slides: [
            { title: "if exécute le code seulement si c'est vrai", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "N'oubliez ni les deux-points ni l'indentation"] },
            { title: "Les signes de comparaison", bullets: ["== égal, != différent", "> plus grand, < plus petit", ">= au moins, <= au plus"] },
            { title: "elif et else", bullets: ["elif : vérifier une autre condition", "else : s'exécute quand rien d'autre ne correspond", "Python vérifie de haut en bas"] },
            { title: "Testez chaque branche", bullets: ["Essayez une valeur pour chaque chemin", "Essayez la limite, comme exactement 40"] }
          ],
          tryIt: "Écrivez un programme qui demande une température en degrés Celsius. Si elle est de 30 ou plus, affichez « Chaud : buvez de l'eau. » Si elle est de 10 ou plus, affichez « Belle journée. » Sinon, affichez « Prenez une veste. » Exécutez-le trois fois avec 35, 10 et 0.",
          youCanNow: "écrire des blocs if, elif et else et tester chaque branche.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire le signe != ?", options: ["Égal à", "Plus grand que", "Différent de", "Ranger cette valeur"], answer: 2, why: "!= veut dire différent de ; == veut dire égal à." },
            { objective: "O3", q: "Vous voulez afficher « Billet gratuit » si l'âge est inférieur à 5 ou d'au moins 65. Quelle condition utilisez-vous ?", options: ["if age < 5 and age >= 65:", "if age < 5 or age >= 65:", "if age = 5 or 65:", "if age > 5 or age < 65:"], answer: 1, why: "or rend la condition True quand une des deux parties est True ; aucun âge n'est à la fois inférieur à 5 et d'au moins 65." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Vos premiers programmes",
        questions: [
          { objective: "O1", q: "Que fait print(\"Hello\") ?", options: ["Il enregistre un fichier appelé Hello", "Il envoie Hello à une imprimante", "Il affiche le mot Hello sous la cellule", "Il supprime la cellule"], answer: 2, why: "print affiche du texte comme résultat." },
          { objective: "O1", q: "Votre code affiche une erreur. Où regardez-vous d'abord ?", options: ["La dernière ligne du message d'erreur", "Le premier mot du notebook", "Votre Google Drive", "L'historique du navigateur"], answer: 0, why: "La dernière ligne d'une erreur Python dit ce qui ne va pas." },
          { objective: "O2", q: "Vous exécutez age = input(\"Age: \") et tapez 16. Quel est le type de age ?", options: ["int", "float", "Booléen", "str (texte)"], answer: 3, why: "input() renvoie toujours une chaîne ; utilisez int() pour en faire un nombre." },
          { objective: "O3", q: "Quelle ligne vérifie correctement si hours est plus grand que 40 ?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, la condition, puis deux-points." },
          { objective: "O3", q: "Quand la partie else s'exécute-t-elle ?", options: ["Toujours, en premier", "Seulement quand aucune condition if ou elif n'était vraie", "Seulement quand le if était vrai", "Jamais"], answer: 1, why: "else attrape tous les cas que les vérifications précédentes n'ont pas pris." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Des programmes qui répètent et qui retiennent",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les listes : garder plusieurs valeurs ensemble",
          minutes: 5,
          goal: "Créer une liste, y ajouter des éléments et lire ses éléments.",
          text: [
            "Une liste contient plusieurs valeurs dans l'ordre, entre crochets : prices = [3.50, 12.00, 6.25]. Une liste peut aussi contenir du texte : chores = [\"dishes\", \"laundry\"].",
            "Chaque élément a un numéro de position appelé indice. Python compte à partir de 0, donc prices[0] est le premier élément (3.50) et prices[-1] est le dernier.",
            "Des outils utiles pour les listes : prices.append(4.99) ajoute un élément à la fin. len(prices) dit combien il y a d'éléments. sum(prices) additionne une liste de nombres. \"dishes\" in chores vaut True si l'élément est dans la liste."
          ],
          steps: ["Créez une liste avec des crochets et des virgules.", "Lisez un élément avec nom_de_liste[indice], en partant de 0.", "Ajoutez avec .append(valeur).", "Comptez les éléments avec len().", "Additionnez des nombres avec sum()."],
          words: [["Liste", "un groupe ordonné de valeurs entre crochets."], ["Indice", "la position d'un élément dans une liste, en partant de 0."], ["append", "ajoute un élément à la fin d'une liste."], ["len()", "donne le nombre d'éléments."]],
          slides: [
            { title: "Une liste contient plusieurs valeurs", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "On compte à partir de 0", bullets: ["prices[0] est le premier élément", "prices[-1] est le dernier élément"] },
            { title: "Les outils des listes", bullets: ["append() ajoute à la fin", "len() compte les éléments", "sum() additionne les nombres", "in vérifie si un élément est présent"] }
          ],
          tryIt: "Créez une liste de trois choses à acheter, avec leurs prix dans une deuxième liste. Ajoutez un article et un prix de plus. Affichez combien il y a d'articles, le premier article et le total des prix avec sum().",
          youCanNow: "créer une liste, lire des éléments par leur indice, ajouter des éléments et les compter ou les additionner.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un indice dans une liste ?", options: ["Le numéro de position d'un élément, en commençant à 0", "Le total de la liste", "Le nom de la liste", "Seulement le dernier élément"], answer: 0, why: "Chaque élément a un indice, et Python compte à partir de 0." },
            { objective: "O4", q: "chores = [\"dishes\", \"laundry\"]. Vous voulez vérifier si \"laundry\" est dans la liste. Que tapez-vous ?", options: ["len(\"laundry\")", "chores[\"laundry\"]", "sum(chores)", "\"laundry\" in chores"], answer: 3, why: "\"laundry\" in chores vaut True si l'élément est dans la liste." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Les boucles : répéter des étapes sans tout retaper",
          minutes: 6,
          goal: "Utiliser une boucle for pour parcourir une liste et une boucle while pour répéter jusqu'à la fin.",
          text: [
            "Une boucle répète du code. Une boucle for s'exécute une fois pour chaque élément d'une liste : for price in prices: print(price). À chaque tour, la variable price contient l'élément suivant.",
            "range() crée une suite de nombres pour compter : for i in range(5) s'exécute cinq fois avec i = 0, 1, 2, 3, 4.",
            "Le total cumulé est un modèle courant : commencez avec total = 0 avant la boucle, puis ajoutez total = total + price à l'intérieur (ou total += price). Après la boucle, total contient la somme.",
            "Une boucle while répète tant qu'une condition est vraie, par exemple while answer != \"done\". Assurez-vous que quelque chose dans la boucle change la condition, sinon elle tournera pour toujours. Dans Colab, appuyez sur le bouton stop pour arrêter une boucle qui ne s'arrête pas."
          ],
          steps: ["Décidez ce qui se répète.", "Pour chaque élément d'une liste, utilisez : for item in my_list:", "Indentez le code qui se répète.", "Pour un total, mettez total = 0 avant la boucle et ajoutez à l'intérieur.", "Pour une boucle while, assurez-vous que la condition peut devenir fausse."],
          words: [["Boucle", "du code qui se répète."], ["Boucle for", "se répète une fois pour chaque élément d'une liste ou d'un range."], ["Boucle while", "se répète tant qu'une condition est vraie."], ["range()", "crée une suite de nombres, qui commence à 0 par défaut."], ["Total cumulé", "une variable à laquelle on ajoute sans cesse dans une boucle."]],
          slides: [
            { title: "for : une fois par élément", bullets: ["for price in prices:", "    print(price)", "price contient l'élément suivant à chaque tour"] },
            { title: "Compter avec range", bullets: ["for i in range(5): s'exécute 5 fois", "i vaut 0, 1, 2, 3, 4"] },
            { title: "Le modèle du total cumulé", bullets: ["total = 0 avant la boucle", "total += price dans la boucle", "Affichez total après la boucle"] },
            { title: "while : jusqu'à ce qu'une condition change", bullets: ["Se répète tant que la condition est vraie", "Changez quelque chose dedans, sinon elle ne finit jamais", "Le bouton stop arrête une boucle bloquée"] }
          ],
          tryIt: "Écrivez une boucle while qui demande sans cesse « Ajoutez un prix (ou tapez fini) : ». Ajoutez chaque nombre à une liste. Quand l'utilisateur tape fini, utilisez une boucle for et un total cumulé pour additionner les prix et afficher le total.",
          youCanNow: "répéter du code avec des boucles for et while et tenir un total cumulé.",
          quickCheck: [
            { objective: "O5", q: "Quels nombres donne range(4) ?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "Seulement 4"], answer: 1, why: "range(4) compte à partir de 0 et s'arrête avant 4." },
            { objective: "O5", q: "Votre boucle additionne des prix mais total revient à 0 à chaque tour. Où déplacez-vous total = 0 ?", options: ["Dans la boucle", "Après la boucle", "Avant la boucle", "Dans une ligne print"], answer: 2, why: "Mettez total = 0 une seule fois avant la boucle, puis ajoutez-y dans la boucle." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les fonctions : emballer du code réutilisable",
          minutes: 6,
          goal: "Écrire une fonction avec des entrées et une valeur de retour, puis l'utiliser dans un programme complet.",
          text: [
            "Une fonction est un bloc de code avec un nom, que vous pouvez exécuter quand vous en avez besoin. Vous en avez déjà utilisé qui existent dans Python : print(), len(), sum(). Maintenant, vous allez écrire les vôtres avec def.",
            "def check_budget(prices, budget): commence une fonction avec deux paramètres, les entrées dont elle a besoin. À l'intérieur, vous faites le travail. return renvoie un résultat à celui qui l'a appelée.",
            "Appeler la fonction l'exécute : result = check_budget([3.5, 12, 6.25], 25). Une bonne fonction fait une seule tâche et a un nom qui dit quelle est cette tâche.",
            "Tout assembler : la tâche finale utilise tout ce que vous avez appris dans ce cours. Écrivez d'abord le plan avec des mots simples (obtenir le budget, additionner les prix, comparer, afficher), puis transformez chaque ligne en code et testez avec deux budgets."
          ],
          steps: ["Écrivez le plan avec des mots simples en commentaires commençant par #.", "Commencez la fonction avec def nom(paramètres):", "Indentez le corps ; utilisez une boucle et un if à l'intérieur.", "Utilisez return pour renvoyer un résultat, ou print à l'intérieur.", "Appelez la fonction et testez-la avec différentes entrées."],
          words: [["Fonction", "un bloc de code avec un nom, qu'on peut exécuter encore et encore."], ["def", "le mot qui commence une nouvelle fonction."], ["Paramètre", "une entrée dont une fonction a besoin, nommée entre ses parenthèses."], ["return", "renvoie une valeur depuis une fonction."], ["Commentaire", "une note dans le code qui commence par # ; Python l'ignore."]],
          slides: [
            { title: "Pourquoi des fonctions", bullets: ["Écrire le code une fois, l'utiliser souvent", "Une seule tâche par fonction", "Un nom clair qui dit ce qu'elle fait"] },
            { title: "En écrire une", bullets: ["def check_budget(prices, budget):", "Indentez le corps", "return renvoie un résultat"] },
            { title: "En appeler une", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Essayez différentes entrées pour la tester"] },
            { title: "Plan de la tâche finale", bullets: ["Obtenir le budget avec input()", "Additionner les prix avec une boucle", "Comparer avec if, afficher le résultat"] }
          ],
          tryIt: "Tâche finale : écrivez check_budget(prices, budget). À l'intérieur, utilisez une boucle pour totaliser les prix, puis affichez le total et « Dans le budget de X » ou « Hors budget de X ». Demandez le budget à l'utilisateur avec float(input()), appelez la fonction avec votre liste de courses, et testez-la avec un budget élevé et un budget faible.",
          youCanNow: "écrire et appeler votre propre fonction et combiner variables, input, if, listes et boucles dans un programme qui marche.",
          quickCheck: [
            { objective: "O6", q: "Que sont les paramètres d'une fonction ?", options: ["Des messages d'erreur", "Des boucles dans la fonction", "Le nom de la fonction", "Les entrées dont la fonction a besoin"], answer: 3, why: "Les paramètres, comme prices et budget, sont les entrées dont une fonction a besoin." },
            { objective: "O6", q: "Avant d'écrire le vérificateur de budget, que faites-vous d'abord ?", options: ["Le planifier avec des mots simples : demander le budget, additionner les prix, comparer, afficher", "Taper le plus de code possible en espérant que ça marche", "Écrire seulement le nom de la fonction", "Le tester sans budget"], answer: 0, why: "Planifier d'abord avec des mots simples rend chaque ligne facile à transformer en code." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Des programmes qui répètent et qui retiennent",
        questions: [
          { objective: "O4", q: "colors = [\"red\", \"blue\", \"green\"]. Que vaut colors[0] ?", options: ["\"blue\"", "\"green\"", "Une erreur", "\"red\""], answer: 3, why: "Python compte les positions à partir de 0, donc l'indice 0 est le premier élément." },
          { objective: "O4", q: "Quelle ligne ajoute 4.99 à la fin de la liste prices ?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append ajoute un élément à la fin d'une liste." },
          { objective: "O5", q: "Combien de fois s'exécute for i in range(3): ?", options: ["2", "4", "3", "Pour toujours"], answer: 2, why: "range(3) donne 0, 1 et 2 : trois fois." },
          { objective: "O5", q: "Votre boucle while ne s'arrête jamais. Quelle est la cause la plus probable ?", options: ["Vous avez utilisé une liste", "Colab est hors ligne", "Vous avez utilisé print", "Rien dans la boucle ne rend jamais la condition fausse"], answer: 3, why: "Une boucle while ne s'arrête que quand sa condition devient fausse." },
          { objective: "O6", q: "Que fait return dans une fonction ?", options: ["Il supprime la fonction", "Il redémarre Colab", "Il renvoie une valeur là où la fonction a été appelée", "Il affiche une erreur"], answer: 2, why: "return rend le résultat à celui qui a appelé la fonction." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à la programmation avec Python",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'un programme ?", options: ["Un type d'écran d'ordinateur", "Une liste d'instructions qu'un ordinateur suit dans l'ordre", "Une adresse de site web", "Un compte Google"], answer: 1, why: "Un programme est un ensemble d'instructions exécutées dans l'ordre." },
      { objective: "O1", q: "Pourquoi Google Colab est-il pratique pour débuter ?", options: ["Il exécute Python dans le navigateur sans rien installer", "Il ne marche que hors ligne", "Il écrit tout le code pour vous", "Il demande une licence payante"], answer: 0, why: "Colab est un notebook gratuit en ligne ; vous n'installez rien." },
      { objective: "O1", q: "Comment exécuter une cellule de code dans Colab ?", options: ["Fermer l'onglet", "Taper run en haut de la page", "Appuyer sur le bouton lecture ou Maj + Entrée", "Se l'envoyer par e-mail"], answer: 2, why: "Le bouton lecture ou Maj + Entrée exécute la cellule." },
      { objective: "O1", q: "Quelle ligne affiche le texte Good job ?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Le texte va entre guillemets, à l'intérieur des parenthèses de print." },
      { objective: "O2", q: "En Python, que fait = dans pay = 15 ?", options: ["Il vérifie si pay est égal à 15", "Il affiche 15", "Il supprime pay", "Il range 15 dans la variable pay"], answer: 3, why: "Un seul = range une valeur ; == compare." },
      { objective: "O2", q: "Que donne \"5\" + \"5\" ?", options: ["10", "\"55\"", "Une erreur à chaque fois", "5"], answer: 1, why: "Deux chaînes collées ensemble donnent \"55\"." },
      { objective: "O2", q: "Vous devez calculer avec ce que tape l'utilisateur. Quelle ligne est juste ?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input donne du texte ; float() le transforme en nombre." },
      { objective: "O2", q: "name = \"Ana\". Quelle ligne affiche Hi Ana ?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "Le f avant les guillemets permet à {name} d'afficher la variable." },
      { objective: "O3", q: "Quel signe veut dire « est égal à » dans une condition ?", options: ["==", "=", "=>", "!="], answer: 0, why: "== compare ; = range." },
      { objective: "O3", q: "Que faut-il mettre à la fin d'une ligne if ?", options: ["Un point-virgule", "Un point", "Deux-points", "Rien"], answer: 2, why: "Les lignes if, elif, else, for, while et def finissent par deux-points." },
      { objective: "O3", q: "score = 85. Quelle branche s'exécute ? if score >= 90 / elif score >= 80 / else", options: ["Le if", "Le else", "Aucune", "Le elif"], answer: 3, why: "85 n'est pas 90 ou plus, mais c'est 80 ou plus, donc le elif s'exécute." },
      { objective: "O3", q: "Comment Python sait-il quelles lignes appartiennent à un if ?", options: ["Par la couleur du texte", "Par les majuscules", "Par l'indentation", "Par les numéros de ligne"], answer: 2, why: "Les lignes indentées sous le if forment son bloc." },
      { objective: "O4", q: "nums = [4, 8, 2]. Que donne len(nums) ?", options: ["2", "3", "8", "14"], answer: 1, why: "len compte les éléments ; il y en a trois." },
      { objective: "O4", q: "nums = [4, 8, 2]. Que donne sum(nums) ?", options: ["3", "8", "14", "482"], answer: 2, why: "sum additionne les nombres : 4 + 8 + 2 = 14." },
      { objective: "O4", q: "Qu'est-ce que prices[-1] ?", options: ["Le premier élément", "Une erreur", "Le dernier élément", "Moins le premier prix"], answer: 2, why: "L'indice -1 veut dire le dernier élément." },
      { objective: "O5", q: "Vous voulez totaliser une liste dans une boucle. Que met-on avant la boucle ?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Un total cumulé commence à 0 avant la boucle." },
      { objective: "O5", q: "Que fait for chore in chores: ?", options: ["Il supprime la liste", "Il s'exécute une seule fois", "Il trie la liste", "Il s'exécute une fois pour chaque élément de chores"], answer: 3, why: "Une boucle for parcourt chaque élément dans l'ordre." },
      { objective: "O6", q: "Quel mot commence une nouvelle fonction ?", options: ["func", "def", "new", "make"], answer: 1, why: "def définit une fonction." },
      { objective: "O6", q: "Dans def check_budget(prices, budget):, que sont prices et budget ?", options: ["Des erreurs", "Des paramètres : les entrées dont la fonction a besoin", "Des listes de fonctions", "Des commentaires"], answer: 1, why: "Les noms entre parenthèses sont les paramètres." },
      { objective: "O6", q: "Vous avez écrit un vérificateur de budget. Quelle est la meilleure façon de le tester ?", options: ["L'exécuter une fois et espérer", "Supprimer les commentaires", "Le partager avant de l'exécuter", "L'exécuter avec un budget élevé et un budget faible et vérifier les deux résultats"], answer: 3, why: "Tester différentes entrées vérifie que chaque branche marche." }
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
      8,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Fonction",
        objective: "O6",
        notYet: "Il n'y a pas de fonction, ou elle ne prend pas les prix et un budget.",
        meets: "Une fonction avec des paramètres pour les prix et le budget, qui renvoie ou affiche le résultat.",
        exceeds: "La fonction a un nom clair, fait une seule tâche et utilise return."
      },
      {
        name: "Boucle et total",
        objective: "O5",
        notYet: "Le total est faux ou aucune boucle n'est utilisée.",
        meets: "Une boucle for additionne les prix dans un total cumulé qui commence à 0.",
        exceeds: "Affiche aussi combien d'articles ont été vérifiés avec len()."
      },
      {
        name: "Décision",
        objective: "O3",
        notYet: "Le programme ne dit pas Dans le budget ou Hors budget, ou dit le mauvais.",
        meets: "if et else affichent le bon message avec la différence.",
        exceeds: "Gère aussi le cas où le total est exactement égal au budget avec elif."
      },
      {
        name: "Saisie",
        objective: "O2",
        notYet: "Le budget n'est pas demandé, ou il est utilisé comme du texte et le calcul échoue.",
        meets: "input() demande le budget et float() le transforme en nombre.",
        exceeds: "Affiche le résultat avec une f-string facile à lire."
      },
      {
        name: "Tests",
        objective: "O6",
        notYet: "Le programme a été exécuté une fois ou pas du tout.",
        meets: "Exécuté avec deux budgets différents, et les deux résultats sont justes.",
        exceeds: "Testé aussi avec un budget exactement égal au total, ou avec une liste vide."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille du vérificateur de budget",
      "Apprenants qui disent avoir écrit un autre programme Python à eux dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui suivent ensuite un autre cours, comme « Programmer l'IA avec Python pour débutants » ou « Introduction à la science des données et à l'analyse de données »",
      "Apprenants qui rejoignent un club de code, un cours, un stage ou un programme de formation après le cours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur fixe ou portable avec un navigateur web",
      "Un compte Google gratuit pour utiliser Google Colab",
      "Du papier et un stylo pour planifier le programme avec des mots simples",
      "Environ 60 à 75 minutes au total, plus le temps d'exercice"
    ],
    facilitatorNotes: [
      "Avant le cours, vérifiez que chaque apprenant peut se connecter à Google Colab ; les comptes scolaires le bloquent parfois, donc prévoyez des comptes personnels ou un autre notebook Python gratuit.",
      "Encouragez les apprenants à taper le code eux-mêmes plutôt qu'à le copier-coller, et à lire les messages d'erreur à voix haute ensemble.",
      "Utilisez la programmation en binôme : l'un tape, l'autre lit et vérifie, puis on échange à chaque leçon.",
      "Présentez les erreurs comme une partie normale du code ; montrez à l'écran comment vous corrigez une de vos propres erreurs.",
      "Pour l'exercice final, donnez des exemples de listes de prix et de budgets pour que les apprenants comparent leurs résultats aux vôtres."
    ]
  }
};
