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
  chapters: [
    {
      name: "Chapitre 1 : Vos premiers programmes",
      lessons: [
        {
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
          youCanNow: "ouvrir Google Colab, écrire une ligne print, l'exécuter et lire un message d'erreur."
        },
        {
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
          youCanNow: "ranger des valeurs dans des variables, demander une saisie à l'utilisateur, changer du texte en nombre et afficher un résultat clair."
        },
        {
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
          youCanNow: "écrire des blocs if, elif et else et tester chaque branche."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Vos premiers programmes",
        questions: [
          { q: "Que fait print(\"Hello\") ?", options: ["Il enregistre un fichier appelé Hello", "Il envoie Hello à une imprimante", "Il affiche le mot Hello sous la cellule", "Il supprime la cellule"], answer: 2, why: "print affiche du texte comme résultat." },
          { q: "Votre code affiche une erreur. Où regardez-vous d'abord ?", options: ["La dernière ligne du message d'erreur", "Le premier mot du notebook", "Votre Google Drive", "L'historique du navigateur"], answer: 0, why: "La dernière ligne d'une erreur Python dit ce qui ne va pas." },
          { q: "Vous exécutez age = input(\"Age: \") et tapez 16. Quel est le type de age ?", options: ["int", "float", "Booléen", "str (texte)"], answer: 3, why: "input() renvoie toujours une chaîne ; utilisez int() pour en faire un nombre." },
          { q: "Quelle ligne vérifie correctement si hours est plus grand que 40 ?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, la condition, puis deux-points." },
          { q: "Quand la partie else s'exécute-t-elle ?", options: ["Toujours, en premier", "Seulement quand aucune condition if ou elif n'était vraie", "Seulement quand le if était vrai", "Jamais"], answer: 1, why: "else attrape tous les cas que les vérifications précédentes n'ont pas pris." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Des programmes qui répètent et qui retiennent",
      lessons: [
        {
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
          youCanNow: "créer une liste, lire des éléments par leur indice, ajouter des éléments et les compter ou les additionner."
        },
        {
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
          youCanNow: "répéter du code avec des boucles for et while et tenir un total cumulé."
        },
        {
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
          youCanNow: "écrire et appeler votre propre fonction et combiner variables, input, if, listes et boucles dans un programme qui marche."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Des programmes qui répètent et qui retiennent",
        questions: [
          { q: "colors = [\"red\", \"blue\", \"green\"]. Que vaut colors[0] ?", options: ["\"blue\"", "\"green\"", "Une erreur", "\"red\""], answer: 3, why: "Python compte les positions à partir de 0, donc l'indice 0 est le premier élément." },
          { q: "Quelle ligne ajoute 4.99 à la fin de la liste prices ?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append ajoute un élément à la fin d'une liste." },
          { q: "Combien de fois s'exécute for i in range(3): ?", options: ["2", "4", "3", "Pour toujours"], answer: 2, why: "range(3) donne 0, 1 et 2 : trois fois." },
          { q: "Votre boucle while ne s'arrête jamais. Quelle est la cause la plus probable ?", options: ["Vous avez utilisé une liste", "Colab est hors ligne", "Vous avez utilisé print", "Rien dans la boucle ne rend jamais la condition fausse"], answer: 3, why: "Une boucle while ne s'arrête que quand sa condition devient fausse." },
          { q: "Que fait return dans une fonction ?", options: ["Il supprime la fonction", "Il redémarre Colab", "Il renvoie une valeur là où la fonction a été appelée", "Il affiche une erreur"], answer: 2, why: "return rend le résultat à celui qui a appelé la fonction." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à la programmation avec Python",
    questions: [
      { q: "Qu'est-ce qu'un programme ?", options: ["Un type d'écran d'ordinateur", "Une liste d'instructions qu'un ordinateur suit dans l'ordre", "Une adresse de site web", "Un compte Google"], answer: 1, why: "Un programme est un ensemble d'instructions exécutées dans l'ordre." },
      { q: "Pourquoi Google Colab est-il pratique pour débuter ?", options: ["Il exécute Python dans le navigateur sans rien installer", "Il ne marche que hors ligne", "Il écrit tout le code pour vous", "Il demande une licence payante"], answer: 0, why: "Colab est un notebook gratuit en ligne ; vous n'installez rien." },
      { q: "Comment exécuter une cellule de code dans Colab ?", options: ["Fermer l'onglet", "Taper run en haut de la page", "Appuyer sur le bouton lecture ou Maj + Entrée", "Se l'envoyer par e-mail"], answer: 2, why: "Le bouton lecture ou Maj + Entrée exécute la cellule." },
      { q: "Quelle ligne affiche le texte Good job ?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Le texte va entre guillemets, à l'intérieur des parenthèses de print." },
      { q: "En Python, que fait = dans pay = 15 ?", options: ["Il vérifie si pay est égal à 15", "Il affiche 15", "Il supprime pay", "Il range 15 dans la variable pay"], answer: 3, why: "Un seul = range une valeur ; == compare." },
      { q: "Que donne \"5\" + \"5\" ?", options: ["10", "\"55\"", "Une erreur à chaque fois", "5"], answer: 1, why: "Deux chaînes collées ensemble donnent \"55\"." },
      { q: "Vous devez calculer avec ce que tape l'utilisateur. Quelle ligne est juste ?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input donne du texte ; float() le transforme en nombre." },
      { q: "name = \"Ana\". Quelle ligne affiche Hi Ana ?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "Le f avant les guillemets permet à {name} d'afficher la variable." },
      { q: "Quel signe veut dire « est égal à » dans une condition ?", options: ["==", "=", "=>", "!="], answer: 0, why: "== compare ; = range." },
      { q: "Que faut-il mettre à la fin d'une ligne if ?", options: ["Un point-virgule", "Un point", "Deux-points", "Rien"], answer: 2, why: "Les lignes if, elif, else, for, while et def finissent par deux-points." },
      { q: "score = 85. Quelle branche s'exécute ? if score >= 90 / elif score >= 80 / else", options: ["Le if", "Le else", "Aucune", "Le elif"], answer: 3, why: "85 n'est pas 90 ou plus, mais c'est 80 ou plus, donc le elif s'exécute." },
      { q: "Comment Python sait-il quelles lignes appartiennent à un if ?", options: ["Par la couleur du texte", "Par les majuscules", "Par l'indentation", "Par les numéros de ligne"], answer: 2, why: "Les lignes indentées sous le if forment son bloc." },
      { q: "nums = [4, 8, 2]. Que donne len(nums) ?", options: ["2", "3", "8", "14"], answer: 1, why: "len compte les éléments ; il y en a trois." },
      { q: "nums = [4, 8, 2]. Que donne sum(nums) ?", options: ["3", "8", "14", "482"], answer: 2, why: "sum additionne les nombres : 4 + 8 + 2 = 14." },
      { q: "Qu'est-ce que prices[-1] ?", options: ["Le premier élément", "Une erreur", "Le dernier élément", "Moins le premier prix"], answer: 2, why: "L'indice -1 veut dire le dernier élément." },
      { q: "Vous voulez totaliser une liste dans une boucle. Que met-on avant la boucle ?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Un total cumulé commence à 0 avant la boucle." },
      { q: "Que fait for chore in chores: ?", options: ["Il supprime la liste", "Il s'exécute une seule fois", "Il trie la liste", "Il s'exécute une fois pour chaque élément de chores"], answer: 3, why: "Une boucle for parcourt chaque élément dans l'ordre." },
      { q: "Quel mot commence une nouvelle fonction ?", options: ["func", "def", "new", "make"], answer: 1, why: "def définit une fonction." },
      { q: "Dans def check_budget(prices, budget):, que sont prices et budget ?", options: ["Des erreurs", "Des paramètres : les entrées dont la fonction a besoin", "Des listes de fonctions", "Des commentaires"], answer: 1, why: "Les noms entre parenthèses sont les paramètres." },
      { q: "Vous avez écrit un vérificateur de budget. Quelle est la meilleure façon de le tester ?", options: ["L'exécuter une fois et espérer", "Supprimer les commentaires", "Le partager avant de l'exécuter", "L'exécuter avec un budget élevé et un budget faible et vérifier les deux résultats"], answer: 3, why: "Tester différentes entrées vérifie que chaque branche marche." }
    ]
  }
};
