"use strict";

// Koach Learn course (French translation of underserved/underserved-data-analytics-tools.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-data-analytics-tools-fr",
  lang: "fr",
  translationOf: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Introduction aux outils et techniques d'analyse de données",
  skills: "Préparer un tableur propre, Trier et filtrer des données, Utiliser SUM et AVERAGE, Faire un graphique, Utiliser l'IA pour expliquer des formules, Partager un résultat avec des mots simples",
  outcome: "mettre de vraies informations dans un tableur gratuit (Google Sheets ou Excel pour le web), les trier et les filtrer, en faire le total et la moyenne avec des formules, faire un graphique, et expliquer ce qu'il montre en deux phrases simples.",
  about: [
    "L'analyse de données, c'est utiliser des informations pour répondre à une question. Une banque alimentaire veut connaître son jour le plus chargé. Une famille veut savoir où part son argent. Un club sportif de jeunes veut savoir combien d'enfants sont venus chaque semaine. Vous pouvez répondre à ce genre de questions avec des outils gratuits.",
    "Dans ce cours, vous utiliserez un tableur gratuit, Google Sheets ou Excel pour le web, sur un téléphone, un ordinateur à la maison ou à la bibliothèque. Vous saisirez des données, les trierez et les filtrerez, utiliserez des formules simples, ferez un graphique, et utiliserez un assistant d'IA gratuit pour vous aider quand vous êtes bloqué.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » qui construit le même tableur, étape par étape. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez un tableur avec un mois de données réelles ou d'entraînement (par exemple les visites par jour à une banque alimentaire, ou les dépenses de la famille par catégorie). Triez-le, filtrez-le, ajoutez un total avec SUM et une moyenne avec AVERAGE, faites un graphique, et écrivez deux phrases simples qui disent ce que montrent les données.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes et des jeunes adultes de communautés mal desservies qui veulent une compétence informatique utile pour l'emploi, ou qui doivent suivre des chiffres pour leur famille, une banque alimentaire, une église, un club sportif de jeunes ou une petite association.",
    startingPoint: "Ils utilisent un téléphone et parfois un ordinateur pour naviguer sur internet. Beaucoup n'ont jamais utilisé de tableur, tapé de formule ni fait de graphique, et certains manquent d'assurance en maths.",
    gap: "Beaucoup d'emplois de bureau, de commerce et d'associations demandent de savoir utiliser un tableur, et les groupes de quartier doivent montrer ce que leurs chiffres veulent dire. Les apprenants doivent saisir des données propres, les trier, les filtrer, les additionner, en faire un graphique et les expliquer, avec des outils gratuits et en protégeant les informations des personnes.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un ordinateur de bibliothèque ou de la maison est le mieux ; une application sur téléphone suffit pour de petites feuilles",
      "Coût : Google Sheets ou Excel pour le web, gratuits avec un compte gratuit",
      "Vie privée : aucun nom, numéro de téléphone ni numéro de compte de vraies personnes collé dans l'IA",
      "Niveau de maths : seulement des additions et des moyennes ; le tableur fait les calculs"
    ],
    prerequisites: "Aucun. Les apprenants qui n'ont jamais utilisé une souris ou un clavier peuvent d'abord suivre un cours de base en informatique."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une chose qui compte pour vous à la maison, au travail ou dans votre communauté", action: "écrire une question claire à laquelle des données peuvent répondre et lister les données nécessaires", standard: "en commençant par quel, combien de ou combien" },
    { id: "O2", condition: "Avec Google Sheets ou Excel pour le web", action: "créer un tableur avec des en-têtes clairs et y saisir des données propres", standard: "un en-tête par colonne à la ligne 1 et un enregistrement par ligne, sur au moins dix lignes" },
    { id: "O3", condition: "Face à un tableur de données", action: "trier une colonne du plus grand au plus petit et filtrer pour n'afficher que certaines lignes", standard: "puis effacer le filtre pour que toutes les lignes reviennent" },
    { id: "O4", condition: "Face à une colonne de nombres", action: "calculer un total avec SUM et une moyenne avec AVERAGE", standard: "avec la bonne plage, pour que les deux se mettent à jour quand un nombre change" },
    { id: "O5", condition: "À partir de vos données et d'un assistant d'IA gratuit", action: "créer un graphique avec un titre clair et demander à l'IA d'expliquer une formule ou une erreur", standard: "en choisissant le bon type de graphique et sans coller de données privées" },
    { id: "O6", condition: "Quand votre feuille est terminée", action: "écrire deux phrases simples qui répondent à votre question, vérifier votre travail et le partager en sécurité", standard: "avec un chiffre qui appuie la réponse, et en le partageant seulement avec les personnes qui en ont besoin" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer vos données",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est l'analyse de données, et poser une bonne question",
          minutes: 4,
          goal: "Écrire une question claire à laquelle des données peuvent répondre.",
          text: [
            "Les données sont des informations qu'on peut compter ou lister : des dates, des montants, des noms de lieux, un nombre de visiteurs. Analyser, c'est regarder ces données pour répondre à une question.",
            "Tout bon projet commence par une question claire. « Quel jour de la semaine notre banque alimentaire reçoit-elle le plus de visiteurs ? » est clair. « Parle-moi de la banque alimentaire » ne l'est pas.",
            "Une question claire vous dit quelles données recueillir. Pour trouver le jour le plus chargé, il vous faut la date et le nombre de visiteurs de chaque jour."
          ],
          steps: ["Choisissez un sujet qui vous tient à cœur : famille, travail, école ou communauté.", "Écrivez une question qui commence par quel, combien de ou combien.", "Listez les données dont vous avez besoin pour y répondre."],
          words: [["Données", "des informations qu'on peut compter ou lister, comme des dates, des montants ou des noms."], ["Analyse", "le fait de regarder des données pour répondre à une question."]],
          slides: [
            { title: "Données et analyse", bullets: ["Données : des informations qu'on peut compter ou lister", "Analyse : utiliser les données pour répondre à une question"] },
            { title: "Commencez par une question claire", bullets: ["Clair : « Quel jour a le plus de visiteurs ? »", "Pas clair : « Parle-moi de la banque alimentaire »"] },
            { title: "La question dit quoi recueillir", bullets: ["Jour le plus chargé ? Il faut les dates et les visiteurs", "Plus grosse dépense ? Il faut catégories et montants"] }
          ],
          tryIt: "Écrivez une question claire sur votre famille, votre travail, votre école ou votre communauté à laquelle des chiffres pourraient répondre. En dessous, listez les deux ou trois types de données dont vous auriez besoin.",
          youCanNow: "écrire une question claire et nommer les données nécessaires pour y répondre.",
          quickCheck: [
            { objective: "O1", q: "Que sont des données ?", options: ["Des informations que l'on peut compter ou lister", "Seulement les chiffres d'un relevé bancaire", "Un type d'ordinateur", "Un site web"], answer: 0, why: "Les données sont des informations comme des dates, des montants, des lieux et des nombres de visiteurs." },
            { objective: "O1", q: "Votre église veut savoir si plus de gens viennent en hiver. De quelles données avez-vous besoin ?", options: ["Le numéro de téléphone du pasteur", "La date et le nombre de personnes à chaque office", "La couleur du bâtiment", "Aucune ; il suffit de deviner"], answer: 1, why: "Une question claire vous dit de noter la date et le nombre de personnes à chaque office." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ouvrir un tableur gratuit et saisir des données",
          minutes: 5,
          goal: "Créer un tableur avec des en-têtes de colonnes clairs et vos données.",
          text: [
            "Un tableur est une grille de cases appelées cellules. Les colonnes vont de haut en bas et ont des lettres (A, B, C). Les lignes vont de gauche à droite et ont des numéros (1, 2, 3). La cellule B2 est dans la colonne B, ligne 2.",
            "Choix gratuits : Google Sheets sur sheets.google.com avec un compte Google gratuit, ou Excel pour le web sur office.com avec un compte Microsoft gratuit. Les deux marchent dans un navigateur web et en application sur téléphone.",
            "Gardez des données propres : un en-tête par colonne à la ligne 1 (comme Date, Jour, Visiteurs), une ligne par enregistrement, et des nombres tapés comme de simples nombres, sans mots en plus. Des données propres facilitent toutes les étapes suivantes."
          ],
          steps: ["Ouvrez sheets.google.com ou office.com et créez un tableur vide.", "Donnez au fichier un nom clair.", "Tapez un en-tête dans chaque colonne de la ligne 1.", "Saisissez un enregistrement par ligne sous les en-têtes."],
          words: [["Tableur", "une grille de lignes et de colonnes pour travailler avec des chiffres et des listes."], ["Cellule", "une case du tableur, nommée par la lettre de sa colonne et le numéro de sa ligne, comme B2."], ["En-tête", "l'étiquette en haut d'une colonne."]],
          slides: [
            { title: "Un tableur est une grille", bullets: ["Les colonnes ont des lettres : A, B, C", "Les lignes ont des numéros : 1, 2, 3", "Cellule B2 = colonne B, ligne 2"] },
            { title: "Des tableurs gratuits", bullets: ["Google Sheets : sheets.google.com", "Excel pour le web : office.com", "Les deux marchent en bibliothèque ou sur téléphone"] },
            { title: "Gardez des données propres", bullets: ["Un en-tête par colonne à la ligne 1", "Un enregistrement par ligne", "Des nombres sans mots en plus"] }
          ],
          tryIt: "Ouvrez un tableur gratuit. Créez trois en-têtes pour votre question (par exemple Date, Jour, Visiteurs) et saisissez au moins dix lignes de données réelles ou d'entraînement.",
          youCanNow: "créer un tableur gratuit et saisir des données propres sous des en-têtes clairs.",
          quickCheck: [
            { objective: "O2", q: "Dans un tableur, avec quoi les lignes sont-elles nommées ?", options: ["Des lettres", "Des couleurs", "Des nombres", "Des noms"], answer: 2, why: "Les lignes vont de gauche à droite et ont des numéros ; les colonnes ont des lettres." },
            { objective: "O2", q: "Vous avez tapé « environ 40 personnes » dans la colonne Visiteurs. Que changez-vous ?", options: ["Rien", "Ajouter plus de mots", "Le mettre en gras", "Taper seulement 40, comme un simple nombre"], answer: 3, why: "Des données propres utilisent de simples nombres pour que le tableur puisse faire des calculs." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trier et filtrer",
          minutes: 5,
          goal: "Trier vos données du plus grand au plus petit et les filtrer pour n'afficher que certaines lignes.",
          text: [
            "Trier, c'est mettre les lignes dans un ordre, par exemple du plus grand au plus petit. Trier la colonne Visiteurs du plus grand au plus petit met le jour le plus chargé en haut.",
            "Filtrer, c'est cacher les lignes dont vous n'avez pas besoin pour l'instant. Vous pourriez filtrer la colonne Jour pour n'afficher que les samedis. Filtrer ne supprime rien ; vous pouvez retirer le filtre et toutes les lignes reviennent.",
            "Dans Google Sheets comme dans Excel pour le web, le tri et le filtre sont dans le menu ou l'onglet Données. Si vous ne les trouvez pas, demandez à un assistant d'IA gratuit : « Comment trier une colonne du plus grand au plus petit dans Google Sheets ? »"
          ],
          steps: ["Cliquez sur n'importe quelle cellule de vos données.", "Ouvrez le menu ou l'onglet Données et activez un filtre.", "Utilisez la petite flèche d'un en-tête pour trier du plus grand au plus petit.", "Utilisez la flèche d'un autre en-tête pour n'afficher que certaines valeurs, puis retirez le filtre."],
          words: [["Trier", "mettre les lignes dans un ordre, comme du plus grand au plus petit ou de A à Z."], ["Filtrer", "n'afficher que les lignes qui correspondent à votre choix, sans supprimer les autres."]],
          slides: [
            { title: "Trier : mettre les lignes en ordre", bullets: ["Du plus grand au plus petit : la plus grande valeur en premier", "De A à Z : les noms dans l'ordre"] },
            { title: "Filtrer : n'afficher que l'utile", bullets: ["Exemple : seulement les samedis", "Rien n'est supprimé", "Retirez le filtre et tout revient"] },
            { title: "Où les trouver", bullets: ["Le menu ou l'onglet Données", "Bloqué ? Demandez à l'IA comment faire dans votre outil"] }
          ],
          tryIt: "Triez votre colonne de chiffres principale du plus grand au plus petit et notez la première ligne. Puis filtrez pour n'afficher qu'un type de ligne, et retirez le filtre.",
          youCanNow: "trier et filtrer un tableur pour trouver ce que vous cherchez.",
          quickCheck: [
            { objective: "O3", q: "À quoi sert le tri ?", options: ["Mettre les lignes dans un ordre, par exemple du plus grand au plus petit", "Supprimer les lignes inutiles", "Additionner une colonne", "Faire un graphique"], answer: 0, why: "Trier met les lignes dans un ordre, par exemple le plus grand nombre en premier." },
            { objective: "O3", q: "Vous voulez voir seulement les lignes des lundis. Qu'utilisez-vous ?", options: ["SUM", "Un filtre sur la colonne Jour", "Un camembert", "Supprimer les autres lignes"], answer: 1, why: "Un filtre cache les lignes dont vous n'avez pas besoin sans les supprimer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer vos données",
        questions: [
          { objective: "O1", q: "Quelle est la question de données la plus claire ?", options: ["« Parle-moi de la banque alimentaire »", "« Des trucs ? »", "« Quel jour de la semaine la banque alimentaire a-t-elle le plus de visiteurs ? »", "« Des données, s'il te plaît »"], answer: 2, why: "Elle dit exactement quoi trouver, donc vous savez quelles données recueillir." },
          { objective: "O2", q: "Qu'est-ce que la cellule C4 ?", options: ["La case de la colonne C, ligne 4", "Le quatrième fichier", "Ligne C, colonne 4", "Un numéro de téléphone"], answer: 0, why: "Les cellules sont nommées par la lettre de colonne, puis le numéro de ligne." },
          { objective: "O2", q: "Où mettre les en-têtes de colonnes ?", options: ["En bas", "À la ligne 1, un en-tête par colonne", "Dans un autre fichier", "Nulle part"], answer: 1, why: "Des en-têtes à la ligne 1 gardent les données propres et faciles à trier." },
          { objective: "O3", q: "Vous filtrez pour n'afficher que les samedis. Que deviennent les autres lignes ?", options: ["Elles sont supprimées pour toujours", "Elles vont dans un nouveau fichier", "Elles deviennent un graphique", "Elles sont cachées et reviennent quand vous retirez le filtre"], answer: 3, why: "Le filtre cache des lignes ; il ne les supprime pas." },
          { objective: "O3", q: "Vous voulez le jour le plus chargé en haut. Que faites-vous ?", options: ["Trier la colonne des visiteurs du plus grand au plus petit", "Supprimer les autres lignes", "Changer le nom du fichier", "Mettre le texte en gras"], answer: 0, why: "Trier du plus grand au plus petit met le chiffre le plus élevé en premier." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver et partager des réponses",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les formules : SUM et AVERAGE",
          minutes: 5,
          goal: "Utiliser SUM pour faire le total d'une colonne et AVERAGE pour trouver sa moyenne.",
          text: [
            "Une formule est une petite instruction qui fait le calcul pour vous. Toute formule commence par un signe égal (=).",
            "=SUM(C2:C31) additionne tous les nombres de la cellule C2 à la cellule C31. =AVERAGE(C2:C31) trouve la moyenne de ces nombres. Dans un tableur réglé en français, ces formules s'appellent =SOMME et =MOYENNE. C2:C31 s'appelle une plage : toutes les cellules de C2 jusqu'à C31.",
            "Si vous changez un nombre dans la colonne, le total et la moyenne se mettent à jour tout seuls. C'est la force d'un tableur : plus besoin de recompter à la main."
          ],
          steps: ["Cliquez sur une cellule vide sous votre colonne de chiffres.", "Tapez =SUM( puis la première cellule, deux-points, et la dernière cellule, puis ).", "Appuyez sur Entrée pour voir le total.", "Dans une autre cellule vide, faites pareil avec =AVERAGE( ... )."],
          words: [["Formule", "une instruction qui commence par = et fait un calcul dans un tableur."], ["Plage", "un groupe de cellules, écrit comme C2:C31."], ["Moyenne", "le total divisé par le nombre de valeurs."]],
          slides: [
            { title: "Les formules commencent par =", bullets: ["Elles font le calcul pour vous", "Elles se mettent à jour quand les chiffres changent"] },
            { title: "Deux formules à connaître", bullets: ["=SUM(C2:C31) les additionne toutes (SOMME en français)", "=AVERAGE(C2:C31) trouve la moyenne (MOYENNE)"] },
            { title: "Qu'est-ce qu'une plage ?", bullets: ["C2:C31 veut dire de C2 jusqu'à C31", "Première cellule, deux-points, dernière cellule"] }
          ],
          tryIt: "Sous votre colonne de chiffres, ajoutez un total avec =SUM et une moyenne avec =AVERAGE (ou =SOMME et =MOYENNE). Changez un nombre et regardez les deux se mettre à jour.",
          youCanNow: "faire le total et la moyenne d'une colonne avec SUM et AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une plage comme B2:B20 ?", options: ["Une seule cellule", "Un type de graphique", "Toutes les cellules de B2 jusqu'à B20", "Un nom de fichier"], answer: 2, why: "Une plage, ce sont toutes les cellules de la première à la dernière, reliées par deux-points." },
            { objective: "O4", q: "Vous voulez le total des dépenses de D2 à D15. Que tapez-vous ?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) additionne tous les nombres de D2 à D15." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faire un graphique, avec l'IA comme aide",
          minutes: 5,
          goal: "Faire un graphique simple et utiliser l'IA pour expliquer une formule ou corriger une erreur.",
          text: [
            "Un graphique transforme des chiffres en image. Un graphique en barres compare des quantités, comme les visiteurs par jour. Un graphique en courbe montre une évolution dans le temps. Un camembert montre les parts d'un tout, comme les dépenses par catégorie.",
            "Pour en faire un, sélectionnez vos en-têtes et vos données, puis insérez un graphique depuis le menu ou l'onglet Insertion. Changez le titre pour dire ce que montre le graphique.",
            "Un assistant d'IA gratuit peut expliquer les formules et les erreurs. Tapez la formule ou l'erreur et demandez : « Explique ceci avec des mots simples et comment le corriger. » Ne collez pas de données privées comme des noms, des adresses ou des numéros de compte ; décrivez plutôt les colonnes."
          ],
          steps: ["Sélectionnez les en-têtes et les données à montrer.", "Ouvrez le menu ou l'onglet Insertion et choisissez Graphique.", "Choisissez barres, courbe ou camembert.", "Donnez au graphique un titre clair."],
          words: [["Graphique en barres", "un graphique qui compare des quantités avec des barres."], ["Graphique en courbe", "un graphique qui montre une évolution dans le temps."], ["Camembert", "un cercle qui montre les parts d'un tout."]],
          slides: [
            { title: "Choisissez le bon graphique", bullets: ["Barres : comparer des quantités", "Courbe : évolution dans le temps", "Camembert : parts d'un tout"] },
            { title: "Faire un graphique", bullets: ["Sélectionnez en-têtes et données", "Insertion, puis Graphique", "Donnez-lui un titre clair"] },
            { title: "L'IA comme aide", bullets: ["Demandez-lui d'expliquer une formule ou une erreur", "Décrivez les colonnes ; pas de données privées"] }
          ],
          tryIt: "Faites un graphique en barres ou en courbe de vos données et donnez-lui un titre clair. Puis demandez à un assistant d'IA d'expliquer avec des mots simples ce que fait =AVERAGE(C2:C31).",
          youCanNow: "faire un graphique et utiliser l'IA pour comprendre les formules sans partager de données privées.",
          quickCheck: [
            { objective: "O5", q: "Quel graphique compare des quantités, comme les visiteurs par jour ?", options: ["Un graphique en barres", "Un graphique en courbe", "Un camembert", "Pas de graphique"], answer: 0, why: "Un graphique en barres compare des quantités côte à côte." },
            { objective: "O5", q: "Votre formule affiche une erreur et la feuille contient les noms de bénéficiaires. Que collez-vous dans l'IA ?", options: ["Toute la feuille", "La formule et une description des colonnes", "Les numéros de téléphone des bénéficiaires", "Le mot de passe de votre compte"], answer: 1, why: "Décrivez les colonnes et collez la formule, pas les données privées." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dire ce que montrent les données",
          minutes: 5,
          goal: "Écrire deux phrases simples qui répondent à votre question et partager la feuille en sécurité.",
          text: [
            "Votre travail n'est pas fini tant que quelqu'un ne l'a pas compris. Écrivez deux phrases : une avec la réponse, une avec un chiffre qui la soutient. Par exemple : « Le samedi est notre jour le plus chargé. Nous avons eu en moyenne 64 visiteurs le samedi, contre 38 les autres jours. »",
            "Vérifiez votre travail avant de partager. Cherchez les fautes de frappe dans les chiffres, les lignes vides et les totaux qui semblent trop grands ou trop petits. Si quelque chose semble faux, c'est probablement le cas.",
            "Pour partager, utilisez le bouton Partager et choisissez qui peut voir. Pour des données sur des personnes, partagez seulement avec ceux qui en ont besoin, et retirez les noms ou les numéros de téléphone s'ils ne sont pas nécessaires."
          ],
          steps: ["Écrivez une phrase avec la réponse à votre question.", "Écrivez une phrase avec un chiffre qui la soutient.", "Vérifiez les fautes de frappe, les lignes vides et les totaux bizarres.", "Partagez seulement avec les personnes qui en ont besoin."],
          words: [["Résultat", "ce que montrent les données, dit avec des mots simples."]],
          slides: [
            { title: "Dites ce que ça montre", bullets: ["Phrase 1 : la réponse", "Phrase 2 : un chiffre qui la soutient"] },
            { title: "Vérifiez avant de partager", bullets: ["Fautes de frappe dans les chiffres", "Lignes vides", "Totaux trop grands ou trop petits"] },
            { title: "Partagez en sécurité", bullets: ["Utilisez le bouton Partager", "Seulement aux personnes qui en ont besoin", "Retirez noms ou téléphones s'ils sont inutiles"] }
          ],
          tryIt: "Tâche finale : terminez votre tableur avec un tri, un filtre, SUM, AVERAGE et un graphique. Écrivez deux phrases simples qui répondent à votre question, vérifiez votre travail, et partagez-le avec une personne.",
          youCanNow: "transformer des données en résultat clair et vérifié et le partager en sécurité.",
          quickCheck: [
            { objective: "O6", q: "Quelles sont les deux parties d'un bon résultat écrit ?", options: ["Un titre et une couleur", "Un graphique et une formule", "Une réponse et un chiffre qui l'appuie", "Un nom et un numéro de téléphone"], answer: 2, why: "Une phrase donne la réponse et une autre donne un chiffre qui l'appuie." },
            { objective: "O6", q: "Votre moyenne de visiteurs par jour affiche 4 200, mais la banque alimentaire est petite. Que faites-vous ?", options: ["La partager tout de suite", "Supprimer la feuille", "L'arrondir à 4 000", "Chercher les fautes de frappe, les lignes vides et la plage de la formule"], answer: 3, why: "Un chiffre qui semble faux l'est sans doute, donc vous vérifiez d'abord votre travail." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver et partager des réponses",
        questions: [
          { objective: "O4", q: "Toute formule de tableur commence par :", options: ["Un signe dollar", "Un point d'interrogation", "Une lettre", "Un signe égal (=)"], answer: 3, why: "Les formules commencent par =." },
          { objective: "O4", q: "Que fait =SUM(B2:B10) ?", options: ["Additionne les nombres de B2 à B10", "Trouve la moyenne", "Trie la colonne", "Fait un graphique"], answer: 0, why: "SUM additionne chaque nombre de la plage." },
          { objective: "O5", q: "Quel graphique montre le mieux une évolution dans le temps ?", options: ["Un camembert", "Un graphique en courbe", "Pas de graphique", "Une photo"], answer: 1, why: "Les courbes montrent comment quelque chose évolue dans le temps." },
          { objective: "O5", q: "Vous voulez que l'IA explique une erreur dans une feuille de noms et de téléphones de clients. Que faites-vous ?", options: ["Tout coller", "Coller seulement les téléphones", "Décrire les colonnes et coller la formule, pas les données privées", "Abandonner"], answer: 2, why: "Vous pouvez obtenir de l'aide sans partager d'informations privées." },
          { objective: "O6", q: "Quel est le meilleur résultat à partager ?", options: ["« Le samedi est le plus chargé. Nous avons eu en moyenne 64 visiteurs le samedi et 38 les autres jours. »", "« Des chiffres. »", "« C'est un graphique. »", "« Voir la feuille. »"], answer: 0, why: "Il donne la réponse et un chiffre qui la soutient." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction aux outils et techniques d'analyse de données",
    questions: [
      { objective: "O1", q: "L'analyse de données, c'est :", options: ["Supprimer de vieux fichiers", "Utiliser des données pour répondre à une question", "Acheter un ordinateur", "Taper vite"], answer: 1, why: "Analyser, c'est regarder des données pour trouver une réponse." },
      { objective: "O1", q: "Pourquoi commencer par une question claire ?", options: ["Elle dit quelles données recueillir", "Elle grossit le fichier", "Ce n'est pas utile", "Elle cache les données"], answer: 0, why: "La question détermine les données dont vous avez besoin." },
      { objective: "O1", q: "Pour savoir quelle catégorie de dépenses coûte le plus, il vous faut :", options: ["Seulement des dates", "Votre mot de passe", "Les catégories et les montants", "Des numéros de téléphone"], answer: 2, why: "Les catégories et les montants permettent de comparer les coûts." },
      { objective: "O2", q: "Lequel est un tableur gratuit ?", options: ["Une montre calculatrice", "Un cahier papier", "Une publicité surgissante", "Google Sheets"], answer: 3, why: "Google Sheets est gratuit avec un compte Google ; Excel pour le web est gratuit avec un compte Microsoft." },
      { objective: "O2", q: "Dans un tableur, les colonnes sont nommées avec :", options: ["Des lettres", "Des chiffres", "Des couleurs", "Des émojis"], answer: 0, why: "Les colonnes sont A, B, C ; les lignes sont 1, 2, 3." },
      { objective: "O2", q: "Lesquelles sont des données propres ?", options: ["Plusieurs en-têtes dans une seule cellule", "« environ 20 » dans une cellule de nombre", "Un en-tête par colonne et des nombres simples", "Des lignes vides entre chaque enregistrement"], answer: 2, why: "Des données propres ont des en-têtes clairs et des nombres simples." },
      { objective: "O3", q: "Trier du plus grand au plus petit met :", options: ["Le plus petit nombre en premier", "Le plus grand nombre en premier", "Les lignes au hasard", "Tout dans un graphique"], answer: 1, why: "Du plus grand au plus petit commence par la plus grande valeur." },
      { objective: "O3", q: "Filtrer une colonne :", options: ["Supprime des lignes pour toujours", "Envoie la feuille par e-mail", "Change les chiffres", "Cache les lignes qui ne correspondent pas, sans les supprimer"], answer: 3, why: "Les filtres cachent seulement des lignes jusqu'à ce que vous les retiriez." },
      { objective: "O3", q: "Où trouve-t-on en général le tri et le filtre ?", options: ["Dans le menu ou l'onglet Données", "Sur le bouton Imprimer", "Dans la corbeille", "Dans le nom du fichier"], answer: 0, why: "Les deux outils les rangent sous Données." },
      { objective: "O4", q: "Que trouve =AVERAGE(C2:C31) ?", options: ["Le plus grand nombre", "La moyenne de C2 à C31", "Le nombre de lignes", "La première valeur"], answer: 1, why: "AVERAGE divise le total par le nombre de valeurs." },
      { objective: "O4", q: "Dans C2:C31, les deux-points veulent dire :", options: ["Diviser", "Arrêter", "De C2 jusqu'à C31", "Multiplier"], answer: 2, why: "Les deux-points forment une plage de cellules." },
      { objective: "O4", q: "Vous changez un nombre dans la colonne. Le total SUM :", options: ["Reste le même pour toujours", "Disparaît", "Devient du texte", "Se met à jour tout seul"], answer: 3, why: "Les formules se recalculent quand les données changent." },
      { objective: "O5", q: "Quel graphique compare des quantités, comme les visiteurs par jour ?", options: ["Un graphique en barres", "Un camembert d'un seul élément", "Pas de graphique", "Une carte"], answer: 0, why: "Les barres comparent des quantités côte à côte." },
      { objective: "O5", q: "Quel graphique montre les parts d'un tout, comme les dépenses par catégorie ?", options: ["Un graphique en courbe", "Un camembert", "Un tableau de dates", "Un en-tête"], answer: 1, why: "Les camemberts montrent comment un tout est divisé." },
      { objective: "O5", q: "Pour faire un graphique, vous commencez par :", options: ["Supprimer les en-têtes", "Fermer le fichier", "Sélectionner les en-têtes et les données", "Changer la police"], answer: 2, why: "Le graphique doit savoir quelles données montrer." },
      { objective: "O5", q: "Qu'est-ce qu'il ne faut PAS coller dans un assistant d'IA ?", options: ["Une formule", "Un message d'erreur", "Une description de vos colonnes", "Les noms et téléphones des personnes que vous aidez"], answer: 3, why: "Les informations personnelles doivent rester privées." },
      { objective: "O6", q: "Un bon résultat contient :", options: ["Une réponse et un chiffre qui la soutient", "Seulement un graphique", "Aucun chiffre", "Votre mot de passe"], answer: 0, why: "Deux phrases : la réponse et la preuve." },
      { objective: "O6", q: "Votre total semble beaucoup trop grand. Que faites-vous ?", options: ["Le partager quand même", "Chercher les fautes de frappe, les lignes vides et la plage de la formule", "Supprimer le fichier", "Réduire la police"], answer: 1, why: "Un total bizarre signale en général une erreur à trouver." },
      { objective: "O6", q: "Quand vous partagez une feuille sur des personnes, vous devez :", options: ["La publier", "La partager avec tous ceux que vous connaissez", "La partager seulement avec ceux qui en ont besoin et retirer les détails inutiles", "L'imprimer et la laisser traîner"], answer: 2, why: "Partager moins protège les informations des gens." },
      { objective: "O2", q: "Quel outil gratuit permet d'utiliser Excel dans un navigateur web ?", options: ["Excel pour le web sur office.com", "Un fax", "Un SMS", "Une carte cadeau"], answer: 0, why: "Excel pour le web est gratuit avec un compte Microsoft." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      6,
      9,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Données propres",
        objective: "O2",
        notYet: "En-têtes manquants, mots et nombres mélangés, ou moins de dix lignes.",
        meets: "Un en-tête par colonne, un enregistrement par ligne, de simples nombres pour un mois de données.",
        exceeds: "Le fichier a un nom clair et les données n'ont besoin d'aucune correction."
      },
      {
        name: "Tri et filtre",
        objective: "O3",
        notYet: "Données non triées ni filtrées.",
        meets: "La colonne de nombres principale triée du plus grand au plus petit, et un filtre utilisé puis effacé.",
        exceeds: "Peut dire ce que le tri et le filtre ont montré."
      },
      {
        name: "SUM et AVERAGE",
        objective: "O4",
        notYet: "Formules manquantes ou avec la mauvaise plage.",
        meets: "SUM et AVERAGE corrects sur la colonne de nombres.",
        exceeds: "Montre que les deux se mettent à jour quand un nombre change."
      },
      {
        name: "Graphique",
        objective: "O5",
        notYet: "Pas de graphique, ou le mauvais type et pas de titre.",
        meets: "Un graphique du bon type avec un titre clair.",
        exceeds: "Le graphique rend la réponse à la question facile à voir."
      },
      {
        name: "Résultat en deux phrases",
        objective: "O6",
        notYet: "Pas de réponse, ou pas de chiffre pour l'appuyer.",
        meets: "Une phrase avec la réponse et une avec un chiffre qui l'appuie.",
        exceeds: "Le travail a été vérifié et partagé seulement avec les personnes qui en ont besoin."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui utilisent un tableur pour leur famille, leur travail ou leur groupe dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui ajoutent les compétences en tableur à leur CV ou obtiennent un emploi de bureau dans les 90 jours",
      "Les partenaires communautaires disent utiliser les feuilles et les graphiques faits par les apprenants dans leurs rapports ou leurs réunions"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet (bibliothèque ou maison) ; une application sur téléphone suffit pour de petites feuilles",
      "Un compte Google ou Microsoft gratuit pour Google Sheets ou Excel pour le web",
      "Un mois de données réelles ou d'entraînement, comme les visites à une banque alimentaire ou les dépenses par catégorie",
      "Un assistant d'IA gratuit pour expliquer les formules et les erreurs",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Prévoyez un jeu de données d'entraînement pour les apprenants qui n'ont pas les leurs.",
      "Montrez le tri, le filtre et SUM en direct sur un projecteur avant que les apprenants essaient.",
      "Rappelez aux apprenants de ne jamais coller de noms, de numéros de téléphone ni de numéros de compte dans l'IA ; ils décrivent les colonnes à la place.",
      "Mettez les apprenants qui découvrent l'ordinateur en binôme avec un partenaire plus expérimenté.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
