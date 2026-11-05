"use strict";

// Koach Learn course (French translation of shared/data-analytics-excel-sql.js). See scripts/koachlearn-courses/README.md, "Translations".
// SQL code, formulas and the practice data (North, South, East, Coffee, Bagel, Juice) stay exactly as in the English, so every
// query and total matches. Decimals are written with a point, as the SQL editor shows them. Function names are given in English
// with the French Excel name the first time (SUMIFS / SOMME.SI.ENS, COUNTIFS / NB.SI.ENS). Menu names: English, with the French name.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002) : page officielle", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (éditeur SQL dans le navigateur)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (logiciel libre pour ordinateur)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-fr",
  lang: "fr",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Analyse de données avec un tableur et SQL",
  skills: "Poser une question sur des données, Nettoyer des données, Tableaux croisés dynamiques et COUNTIFS/SUMIFS, Écrire des requêtes SQL, Regrouper et joindre des tables, Présenter des constats",
  outcome: "travailler comme analyste de données débutant : transformer un besoin de l'entreprise en question claire, nettoyer un tableur en désordre, le résumer avec un tableau croisé dynamique et SUMIFS, répondre à des questions avec SQL (SELECT, WHERE, ORDER BY, GROUP BY et JOIN) et rédiger des constats courts et honnêtes à montrer à un employeur.",
  about: [
    "Les analystes de données transforment des lignes de chiffres en réponses utiles : quel magasin vend le plus, quel programme aide le plus de personnes, où va l'argent. Presque tous les employeurs en ont besoin, des commerces et hôpitaux aux mairies et aux associations.",
    "Vous allez utiliser deux outils que les analystes utilisent chaque jour : un tableur (Google Sheets, gratuit, ou Excel) et SQL, le langage qui sert à poser des questions à une base de données. Vous pratiquerez SQL gratuitement dans votre navigateur. Toutes les données d'exercice sont inventées et petites, pour que vous puissiez vérifier chaque réponse à la main.",
    "Si vous voulez une certification, CompTIA Data+ en est une pour les analystes de données débutants (CompTIA est un organisme qui certifie des compétences en informatique). Ce cours vous aide à vous préparer et développe des compétences qu'elle couvre, mais il ne délivre ni Data+ ni aucun certificat ; consultez la page officielle pour l'examen, le prix et les modalités actuels.",
    "Il vaut mieux connaître d'abord les bases du tableur (cours \"Excel et les tableurs au travail\"). Chaque leçon dure environ cinq minutes et se termine par une activité \"Essayez maintenant\" et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Réalisez un projet d'analyse d'une page pour votre portfolio : (1) une question claire sur les données de ventes d'exercice (ou sur un petit jeu de données public de votre choix) ; (2) les données nettoyées dans Google Sheets ou Excel, avec une colonne Revenue (chiffre d'affaires) et un tableau croisé dynamique qui répond à la question ; (3) au moins deux requêtes SQL que vous avez exécutées, l'une avec WHERE et ORDER BY, l'autre avec GROUP BY, avec leurs résultats ; (4) trois constats en phrases simples avec des chiffres, une limite des données et une prochaine étape proposée ; et (5) une ligne de CV qui décrit le projet.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Demandeurs d'emploi, jeunes adultes, anciens militaires et personnes en reconversion qui visent un premier poste dans les données (analyste de données, assistant de reporting, analyste des opérations ou analyste métier) ou qui veulent des compétences en données dans leur emploi actuel. Profils variés ; beaucoup ont déjà utilisé un tableur mais jamais SQL.",
    startingPoint: "Savent saisir des données, utiliser SUM et AVERAGE et trier dans un tableur. N'ont jamais nettoyé des données en désordre, créé un tableau croisé dynamique ni écrit une requête. Peu savent comment les analystes présentent leurs constats.",
    gap: "Les emplois de débutant dans les données demandent l'analyse sur tableur, des bases de SQL et une communication claire des résultats. Les apprenants ont besoin de pratiquer sur des données réalistes et en désordre, avec des outils gratuits, et d'un petit projet à montrer à un employeur.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme est expliqué",
      "Appareils : un ordinateur avec un navigateur web ; un téléphone est trop petit pour pratiquer SQL",
      "Outils gratuits uniquement : Google Sheets (ou Excel si disponible) et un éditeur SQL gratuit dans le navigateur",
      "Les données d'exercice sont inventées ; ne jamais mettre de vraies données de clients, de patients ou d'employeur dans un outil en ligne",
      "Durée : leçons de 4 à 6 minutes ; le projet demande une ou deux heures de plus"
    ],
    prerequisites: "Les bases du tableur. Le cours \"Excel et les tableurs au travail\" les couvre."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'un besoin exprimé par un responsable", action: "écrire une question claire et mesurable sur des données et lister les données nécessaires pour y répondre", standard: "avec un qui ou quoi, une mesure et une période" },
    { id: "O2", condition: "À partir d'un tableur en désordre", action: "nettoyer les données en supprimant les doublons, en retirant les espaces en trop et en uniformisant les libellés et les formats", standard: "sans laisser de doublons ni de libellés différents" },
    { id: "O3", condition: "À partir de données propres dans Google Sheets ou Excel", action: "créer un tableau croisé dynamique et une formule SUMIFS ou COUNTIFS qui répondent à la question", standard: "avec des totaux qui correspondent à une vérification à la main" },
    { id: "O4", condition: "Avec un éditeur SQL gratuit et une table d'exercice", action: "écrire des requêtes SELECT avec WHERE et ORDER BY qui renvoient les lignes demandées", standard: "en renvoyant exactement les bonnes lignes dans le bon ordre" },
    { id: "O5", condition: "Avec deux tables d'exercice", action: "écrire des requêtes qui utilisent GROUP BY avec SUM, COUNT ou AVG, et une jointure (JOIN) entre les tables", standard: "avec des résultats qui correspondent à une vérification à la main" },
    { id: "O6", condition: "À partir des résultats de votre analyse", action: "rédiger trois constats chiffrés, une limite des données et une prochaine étape", standard: "en phrases simples sur lesquelles un responsable peut agir" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'analyse sur tableur",
      lessons: [
        {
          title: "Le métier d'analyste : d'un besoin à une question claire",
          objectives: ["O1"],
          minutes: 5,
          goal: "Écrire une question claire et mesurable à partir de la demande d'un responsable.",
          text: [
            "Les analystes suivent un chemin simple : poser une question claire, obtenir les données, les nettoyer, les analyser et partager ce qu'elles veulent dire. Presque tout part de la question. Une demande floue donne une réponse floue.",
            "Un responsable dit : \"Comment vont les ventes ?\" C'est un besoin, pas une question. Une question claire indique qui ou quoi, une mesure et une période : \"Lequel de nos trois magasins a fait le plus gros chiffre d'affaires du 1er au 4 octobre ?\" Vous savez maintenant de quelles données vous avez besoin : dates, magasins, quantités et prix.",
            "Les bonnes questions sont mesurables (on peut y répondre par un nombre), précises et utiles (la réponse aide quelqu'un à décider). Notez les données nécessaires avant d'ouvrir le moindre fichier.",
            "Parmi les emplois qui utilisent ces compétences : analyste de données, analyste reporting, analyste des opérations et analyste métier. Si vous voulez une certification, CompTIA Data+ (examen DA0-002 quand nous avons vérifié en octobre 2026) couvre les notions de données, la préparation des données, l'analyse, la visualisation et le reporting, et la gouvernance des données. Consultez la page officielle pour les détails actuels."
          ],
          steps: ["Notez le besoin du responsable avec ses propres mots.", "Transformez-le en question avec qui ou quoi, une mesure et une période.", "Vérifiez : un nombre peut-il y répondre ?", "Listez les colonnes de données dont vous avez besoin."],
          words: [["Analyste de données", "personne qui transforme des données en réponses utiles."], ["Mesurable", "à quoi on peut répondre par un nombre ou un comptage."], ["Jeu de données", "un ensemble de données, souvent un tableau avec des lignes et des colonnes."], ["Chiffre d'affaires", "l'argent qui entre grâce aux ventes : quantité multipliée par le prix (dans les données d'exercice, la colonne Revenue)."]],
          slides: [
            { title: "Le chemin de l'analyste", bullets: ["Demander, obtenir les données, nettoyer, analyser, partager", "Tout part d'une question claire"] },
            { title: "Besoin ou question ?", bullets: ["Besoin : \"Comment vont les ventes ?\"", "Question : \"Quel magasin a fait le plus de chiffre d'affaires du 1er au 4 octobre ?\""] },
            { title: "Une question claire contient", bullets: ["Qui ou quoi", "Une mesure", "Une période"] },
            { title: "Une certification à préparer", bullets: ["CompTIA Data+ (DA0-002, vérifié en octobre 2026)", "Ce cours prépare ; CompTIA délivre la certification", "Consultez comptia.org pour les détails actuels"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Transformez chaque besoin en question claire et listez les données nécessaires : (a) \"La banque alimentaire a-t-elle plus de monde ces temps-ci ?\" (b) \"Quel produit faut-il commander en plus grande quantité ?\" Écrivez chacune avec qui ou quoi, une mesure et une période.",
          youCanNow: "transformer une demande floue en question claire et mesurable, et lister les données dont elle a besoin.",
          quickCheck: [
            { objective: "O1", q: "Quelle est la question la plus claire ?", options: ["\"Comment vont les affaires ?\"", "\"Parlez-moi des ventes.\"", "\"Est-ce que ça va bien ?\"", "\"Quel article a vendu le plus d'unités en septembre au magasin North ?\""], answer: 3, why: "Elle indique quoi (l'article), la mesure (les unités), le lieu et la période." },
            { objective: "O1", q: "Votre question est \"Quel magasin a fait le plus de chiffre d'affaires la semaine dernière ?\" De quelles données avez-vous besoin ?", options: ["Le magasin, la date, la quantité et le prix de chaque vente", "Seulement les noms des magasins", "L'adresse personnelle des employés", "La météo"], answer: 0, why: "Le chiffre d'affaires demande la quantité et le prix ; le magasin et la date le répartissent par lieu et par période." }
          ]
        },
        {
          title: "Nettoyer des données en désordre dans un tableur",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nettoyer un tableau en désordre en supprimant les doublons, les espaces en trop et en corrigeant les libellés.",
          text: [
            "Les vraies données sont en désordre. Le même magasin peut être écrit \"North\", \"north\" et \" North\" (avec un espace). Une vente peut être saisie deux fois. Les dates peuvent avoir des formats différents. Si vous ne nettoyez pas, vos totaux seront faux, car le tableur considère \"North\" et \"north \" comme deux magasins différents.",
            "Dans Google Sheets, sélectionnez vos données et utilisez Data > Data cleanup > Remove duplicates (en français : Données > Nettoyage des données > Supprimer les doublons) et Data > Data cleanup > Trim whitespace (Supprimer les espaces). Dans Excel, utilisez Data > Remove Duplicates (Données > Supprimer les doublons) et la fonction TRIM (dans Excel en français : SUPPRESPACE). Utilisez Rechercher et remplacer pour corriger les libellés, par exemple remplacer \"north\" par \"North\".",
            "Mettez un seul type par colonne : les dates en dates, les nombres en nombres (sans taper le signe \"$\"), le texte toujours écrit de la même façon. Ajoutez ensuite les colonnes utiles, comme Revenue (chiffre d'affaires) = Qty (quantité) multipliée par Price (prix), par exemple =D2*E2.",
            "Gardez toujours une copie des données brutes dans un onglet à part, et nettoyez une copie. Notez chaque modification, pour qu'une autre personne puisse faire confiance à votre travail et le refaire."
          ],
          steps: ["Copiez les données brutes dans un nouvel onglet nommé Clean (propre).", "Supprimez les lignes en double.", "Retirez les espaces en trop.", "Corrigez les libellés avec Rechercher et remplacer pour que chaque nom s'écrive d'une seule façon.", "Mettez un seul type par colonne : dates, nombres ou texte.", "Ajoutez les colonnes calculées, comme Revenue = Qty * Price.", "Écrivez une courte liste des modifications faites."],
          words: [["Nettoyage des données", "corriger les erreurs, les doublons et les saisies incohérentes pour que les résultats soient justes."], ["Doublon", "une ligne qui apparaît plus d'une fois par erreur."], ["Espaces en trop", "des espaces avant ou après le texte, difficiles à voir."], ["Données brutes", "les données telles que vous les avez reçues, avant toute modification."]],
          slides: [
            { title: "Pourquoi nettoyer ?", bullets: ["\"North\", \"north\" et \" North\" comptent comme différents", "Les lignes en double comptent une vente deux fois", "Des données en désordre donnent des totaux faux"] },
            { title: "Les outils de nettoyage", bullets: ["Sheets : Données > Nettoyage des données > Supprimer les doublons", "Sheets : Données > Nettoyage des données > Supprimer les espaces", "Excel : Supprimer les doublons et TRIM (SUPPRESPACE)", "Rechercher et remplacer pour corriger les libellés"] },
            { title: "Un type par colonne", bullets: ["Les dates en dates, les nombres en nombres", "Ajoutez Revenue = Qty * Price"] },
            { title: "Les bonnes habitudes", bullets: ["Gardez les données brutes dans un onglet à part", "Notez chaque modification"] }
          ],
          tryIt: "Dans Google Sheets, tapez ce tableau d'exercice avec les en-têtes Date, Store, Item, Qty, Price (date, magasin, article, quantité, prix) : 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Copiez-le dans un onglet Clean, supprimez la ligne East en double, remplacez \"north \" par \"North\" et ajoutez une colonne Revenue. Vous devez avoir 8 lignes.",
          youCanNow: "nettoyer un tableau en désordre pour que chaque total calculé dessus soit juste.",
          quickCheck: [
            { objective: "O2", q: "Le total de \"North\" semble trop bas. Certaines lignes indiquent \"north \" avec un espace. Que faites-vous ?", options: ["Vous supprimez ces lignes", "Vous retirez les espaces et écrivez le libellé \"North\" partout", "Vous ignorez le problème", "Vous agrandissez la police"], answer: 1, why: "Retirer les espaces et corriger les libellés permet de compter ensemble toutes les lignes de North." },
            { objective: "O2", q: "Avant de nettoyer, que devez-vous faire des données brutes ?", options: ["Les supprimer", "Les envoyer à tout le monde par e-mail", "En garder une copie dans un onglet à part et nettoyer une copie", "Les imprimer"], answer: 2, why: "Garder les données brutes vous permet de vérifier ou de refaire votre travail." }
          ]
        },
        {
          title: "Résumer avec un tableau croisé dynamique, SUMIFS et COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Créer un tableau croisé dynamique et une formule SUMIFS qui répondent à votre question.",
          text: [
            "Un tableau croisé dynamique résume un grand tableau en quelques secondes : par exemple, le chiffre d'affaires total de chaque magasin. Dans Google Sheets, sélectionnez vos données propres et choisissez Insert > Pivot table (Insertion > Tableau croisé dynamique). Dans Excel, choisissez Insert > PivotTable (Insertion > Tableau croisé dynamique). Mettez Store dans Rows (Lignes) et Revenue dans Values (Valeurs), résumé par SUM.",
            "Avec les données d'exercice nettoyées, le tableau doit afficher East 29.00, South 24.75 et North 14.00. East a donc fait le plus de chiffre d'affaires du 1er au 4 octobre. (Selon la langue de votre tableur, la virgule peut remplacer le point : 29,00.)",
            "Les formules répondent à une question à la fois. SUMIFS (dans Excel en français : SOMME.SI.ENS) additionne les nombres qui respectent une règle : =SUMIFS(F:F, B:B, \"South\") additionne la colonne Revenue (F) là où la colonne Store (B) indique South, ce qui donne 24.75. COUNTIFS (NB.SI.ENS) compte les lignes qui respectent la règle : =COUNTIFS(C:C, \"Coffee\") compte les ventes de Coffee, ce qui donne 3. AVERAGEIFS (MOYENNE.SI.ENS) fonctionne de la même façon pour les moyennes. Dans un Excel en français, les arguments sont souvent séparés par un point-virgule.",
            "Vérifiez toujours un nombre à la main. Si le tableau croisé dynamique et votre calcul à la main ne correspondent pas, les données ont sans doute encore besoin d'être nettoyées."
          ],
          steps: ["Sélectionnez les données propres, en-têtes compris.", "Insérez un tableau croisé dynamique dans une nouvelle feuille.", "Mettez la catégorie (Store) dans Lignes.", "Mettez la mesure (Revenue) dans Valeurs, résumée par SUM.", "Triez du plus grand au plus petit.", "Vérifiez un total à la main ou avec SUMIFS."],
          words: [["Tableau croisé dynamique", "outil qui regroupe et résume un tableau, par exemple les totaux par magasin."], ["SUMIFS", "formule qui additionne les nombres qui respectent une ou plusieurs règles (dans Excel en français : SOMME.SI.ENS)."], ["COUNTIFS", "formule qui compte les lignes qui respectent une ou plusieurs règles (dans Excel en français : NB.SI.ENS)."], ["Mesure", "le nombre que vous additionnez ou dont vous faites la moyenne, comme le chiffre d'affaires."]],
          slides: [
            { title: "Les tableaux croisés dynamiques", bullets: ["Sheets : Insertion > Tableau croisé dynamique", "Excel : Insertion > Tableau croisé dynamique", "Lignes : Store ; Valeurs : SUM de Revenue"] },
            { title: "La réponse de l'exercice", bullets: ["East 29.00, South 24.75, North 14.00", "East a fait le plus de chiffre d'affaires du 1er au 4 octobre"] },
            { title: "Des formules avec des règles", bullets: ["=SUMIFS(F:F, B:B, \"South\") donne 24.75", "=COUNTIFS(C:C, \"Coffee\") donne 3", "AVERAGEIFS pour les moyennes"] },
            { title: "Vérifiez à la main", bullets: ["Additionnez vous-même un groupe", "Ça ne correspond pas ? Nettoyez à nouveau les données"] }
          ],
          tryIt: "Avec vos données d'exercice propres, créez un tableau croisé dynamique du chiffre d'affaires par magasin et triez-le. Écrivez ensuite un SUMIFS pour East et un COUNTIFS pour Bagel. Vérifiez : East doit donner 29.00 et Bagel doit compter 3 lignes. Faites un deuxième tableau croisé dynamique de Qty par Item.",
          youCanNow: "résumer un tableau avec un tableau croisé dynamique et le vérifier avec SUMIFS et COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "Dans un tableau croisé dynamique du chiffre d'affaires par magasin, où va Store ?", options: ["Lignes", "Valeurs", "Seulement dans Filtres", "Il n'est pas utilisé"], answer: 0, why: "La catégorie qui sert à regrouper va dans Lignes ; le nombre à additionner va dans Valeurs." },
            { objective: "O3", q: "Quelle formule additionne Revenue (colonne F) seulement pour le magasin North (colonne B) ?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS additionne la plage à sommer (F) là où la plage de la règle (B) correspond à North." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'analyse sur tableur",
        questions: [
          { objective: "O1", q: "Lequel est un besoin, et pas encore une question claire ?", options: ["\"Comment ça se passe pour nous ?\"", "\"Quel magasin a fait le plus gros chiffre d'affaires en octobre ?\"", "\"Combien de ventes de Coffee y a-t-il eu le 2 octobre ?\"", "\"Quelle était la taille moyenne des commandes la semaine dernière ?\""], answer: 0, why: "Il n'y a ni mesure ni période, donc un nombre ne peut pas encore y répondre." },
          { objective: "O2", q: "Une vente a été saisie deux fois. Que se passe-t-il si vous ne supprimez pas le doublon ?", options: ["Rien ne change", "Le total compte cette vente deux fois", "Le tableur corrige tout seul", "La vente disparaît"], answer: 1, why: "Les doublons comptent deux fois, donc les totaux sont trop élevés." },
          { objective: "O2", q: "Quel menu de Google Sheets retire les espaces en trop ?", options: ["Insertion > Graphique", "Format > Thème", "Données > Nettoyage des données > Supprimer les espaces", "Fichier > Imprimer"], answer: 2, why: "Supprimer les espaces retire les espaces avant et après le texte." },
          { objective: "O3", q: "Que renvoie =COUNTIFS(C:C, \"Juice\") avec les données d'exercice propres ?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice apparaît sur deux lignes (North le 3 octobre et South le 4 octobre)." },
          { objective: "O3", q: "Le total de South dans votre tableau croisé dynamique ne correspond pas à votre calcul à la main. Quelle est la raison la plus probable ?", options: ["Les données contiennent encore un doublon ou un libellé différent", "Les tableaux croisés dynamiques ne savent pas additionner", "Il vous faut un écran plus grand", "Les calculs à la main sont toujours faux"], answer: 0, why: "Un écart signale le plus souvent des données qui ont encore besoin d'être nettoyées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : SQL et partage des résultats",
      lessons: [
        {
          title: "Vos premières requêtes SQL : SELECT, WHERE et ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Écrire des requêtes SELECT avec WHERE et ORDER BY dans un éditeur SQL gratuit.",
          text: [
            "Les grandes organisations gardent leurs données dans des bases de données, pas dans des tableurs. SQL (souvent prononcé \"sicoual\" en anglais) est le langage qui sert à poser des questions à une base de données. Une requête est une question. SQL ressemble à de l'anglais simple, et il est utilisé dans presque tous les métiers des données.",
            "Vous pouvez pratiquer gratuitement dans votre navigateur sur SQLite Online (sqliteonline.com) : tapez le SQL dans l'éditeur et cliquez sur Run (exécuter). Le site peut proposer des options payantes ; vous n'en avez pas besoin. DB Browser for SQLite est un logiciel libre et gratuit pour ordinateur. Dans un outil en ligne, utilisez seulement des données d'exercice, jamais de vraies données de clients.",
            "Créez la table d'exercice en exécutant : CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); puis INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Maintenant, posez vos questions. SELECT * FROM sales; affiche toutes les lignes. SELECT item, qty FROM sales WHERE store = 'North'; affiche seulement les articles de North. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; affiche les quatre plus grosses ventes, de la plus grande à la plus petite (8, 6, 5, 4). Le texte se met entre apostrophes droites ; les nombres, non."
          ],
          steps: ["Ouvrez un éditeur SQL gratuit dans votre navigateur.", "Exécutez la ligne CREATE TABLE, puis la ligne INSERT.", "Exécutez SELECT * FROM sales; pour voir les 8 lignes.", "Ajoutez WHERE pour garder seulement les lignes voulues.", "Ajoutez ORDER BY pour trier ; ajoutez DESC pour avoir le plus grand en premier.", "Vérifiez le résultat en regardant vous-même les lignes."],
          words: [["Base de données", "un ensemble organisé de données, rangées dans des tables."], ["SQL", "Structured Query Language (langage de requête structuré) : le langage qui sert à poser des questions à une base de données."], ["Requête", "une question écrite en SQL."], ["SELECT / FROM", "SELECT indique les colonnes voulues ; FROM indique la table."], ["WHERE", "garde seulement les lignes qui respectent une règle."], ["ORDER BY", "trie les résultats ; DESC veut dire du plus grand au plus petit."]],
          slides: [
            { title: "SQL en mots simples", bullets: ["Le langage pour poser des questions à une base de données", "Une question = une requête", "Utilisé dans presque tous les métiers des données"] },
            { title: "Pratiquez gratuitement", bullets: ["SQLite Online dans le navigateur : tapez, puis Run", "DB Browser for SQLite sur votre ordinateur", "Seulement des données d'exercice"] },
            { title: "Trois requêtes", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Les règles à retenir", bullets: ["Le texte entre apostrophes : 'North'", "Les nombres sans apostrophes", "Terminez chaque requête par ;"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Créez la table sales et exécutez les trois requêtes. Écrivez ensuite la vôtre : toutes les ventes de Coffee, triées par qty de la plus grande à la plus petite. Vous devez obtenir 3 lignes : qty 6, 4 et 3. Gardez chaque requête et son résultat pour la tâche finale.",
          youCanNow: "créer une table d'exercice et écrire des requêtes SQL qui filtrent et trient des lignes.",
          quickCheck: [
            { objective: "O4", q: "Quelle requête affiche seulement les ventes du magasin South ?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' garde seulement les lignes de ce magasin." },
            { objective: "O4", q: "Que fait DESC dans ORDER BY qty DESC ?", options: ["Supprime la colonne", "Décrit la table", "Trie du plus grand au plus petit", "Garde une seule ligne"], answer: 2, why: "DESC veut dire décroissant : le plus grand en premier." }
          ]
        },
        {
          title: "Des totaux avec GROUP BY, et joindre deux tables",
          objectives: ["O5"],
          minutes: 6,
          goal: "Écrire une requête GROUP BY avec SUM et une jointure (JOIN) entre deux tables.",
          text: [
            "GROUP BY fait en SQL ce qu'un tableau croisé dynamique fait dans un tableur. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; donne East 29.0, South 24.75, North 14.0, comme votre tableau croisé dynamique. AS donne un nom à la nouvelle colonne.",
            "Autres fonctions de synthèse : COUNT(*) compte les lignes, AVG(qty) donne la moyenne, MIN et MAX donnent le plus petit et le plus grand. SELECT item, SUM(qty) FROM sales GROUP BY item; donne Bagel 15, Coffee 13, Juice 3.",
            "Les données sont souvent réparties dans plusieurs tables. Une deuxième table peut contenir la ville de chaque magasin : CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); Une jointure (JOIN) associe les lignes où une colonne a la même valeur dans les deux tables.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; affiche chaque vente avec sa ville. Si le nom d'un magasin est écrit différemment dans les deux tables, la jointure le ratera : encore une raison de nettoyer les données d'abord."
          ],
          steps: ["Choisissez la colonne de regroupement (store, item, date).", "Choisissez la synthèse : SUM, COUNT, AVG, MIN ou MAX.", "Écrivez SELECT colonne, SUM(...) AS nom FROM table GROUP BY colonne;", "Ajoutez ORDER BY pour classer les groupes.", "Pour une jointure, nommez les deux tables et la colonne commune après ON.", "Comparez les résultats avec votre tableau croisé dynamique."],
          words: [["GROUP BY", "regroupe les lignes qui ont la même valeur pour additionner ou compter chaque groupe."], ["Fonction d'agrégation", "une synthèse comme SUM, COUNT, AVG, MIN ou MAX."], ["AS", "donne un nom à une colonne du résultat."], ["JOIN", "jointure : associe les lignes de deux tables qui ont une colonne commune."], ["Clé", "la colonne qui sert à faire correspondre les lignes entre les tables."]],
          slides: [
            { title: "GROUP BY = un tableau croisé dynamique en SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Les fonctions de synthèse", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Unités par article : Bagel 15, Coffee 13, Juice 3"] },
            { title: "Joindre deux tables", bullets: ["Table stores : magasin et ville", "JOIN stores ON sales.store = stores.store", "Chaque vente affiche maintenant sa ville"] },
            { title: "Des clés propres, c'est important", bullets: ["Orthographes différentes : la jointure rate des lignes", "Nettoyez d'abord, joignez ensuite"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Exécutez la requête GROUP BY du chiffre d'affaires et vérifiez qu'elle correspond à votre tableau croisé dynamique. Écrivez une requête qui compte les ventes de chaque magasin (COUNT(*)) ; vous devez obtenir 3, 3 et 2. Créez ensuite la table stores et exécutez la jointure. Gardez chaque requête et son résultat.",
          youCanNow: "additionner et compter des groupes avec GROUP BY et réunir deux tables avec une jointure.",
          quickCheck: [
            { objective: "O5", q: "Quelle requête donne le total des unités vendues pour chaque article ?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item crée un groupe par article, et SUM(qty) additionne chacun." },
            { objective: "O5", q: "Une jointure entre sales et stores rate les lignes de North. Quelle est la raison la plus probable ?", options: ["SQL ne peut pas joindre du texte", "Il y a trop de lignes", "Le nom du magasin est écrit différemment dans les deux tables", "JOIN ne marche que le lundi"], answer: 2, why: "Une jointure associe des valeurs exactes ; des orthographes différentes ne correspondent pas." }
          ]
        },
        {
          title: "Transformer les résultats en constats, et votre projet",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rédiger trois constats chiffrés, une limite et une prochaine étape.",
          text: [
            "Des chiffres seuls n'aident pas un responsable. Un constat est une phrase qui dit ce que montrent les données, avec le chiffre : \"East a fait le plus de chiffre d'affaires du 1er au 4 octobre : $29.00, plus du double des $14.00 de North.\"",
            "Soyez honnête sur les limites. Les données d'exercice couvrent seulement 4 jours et 8 ventes, elles ne disent donc rien d'une année entière. Corrélation n'est pas causalité : si le Coffee s'est mieux vendu un jour froid, les données seules ne prouvent pas que la météo en est la cause. Dites ce que les données ne peuvent pas montrer.",
            "Terminez par une prochaine étape concrète : \"Recueillir un mois complet de ventes avant de décider où envoyer plus de stock.\" Tenez sur une page, avec un graphique ou un tableau clair tiré de votre tableau croisé dynamique.",
            "Enfin, transformez le projet en ligne de CV : \"Nettoyage et analyse de données de ventes dans Google Sheets et SQL (GROUP BY, JOIN) ; identification du magasin au plus gros chiffre d'affaires et présentation des constats.\" Cela montre à un employeur ce que vous savez faire. Dans un portfolio, utilisez seulement des données inventées ou publiques, jamais les données privées d'un employeur."
          ],
          steps: ["Écrivez la question en haut.", "Ajoutez un tableau ou un graphique tiré de votre tableau croisé dynamique.", "Rédigez trois constats, chacun avec un chiffre.", "Écrivez une limite : ce que les données ne peuvent pas montrer.", "Écrivez une prochaine étape.", "Ajoutez vos requêtes SQL et leurs résultats.", "Écrivez une ligne de CV sur le projet."],
          words: [["Constat", "une phrase qui dit ce que montrent les données, avec un chiffre."], ["Limite", "ce que les données ne peuvent pas montrer, ou une raison d'être prudent avec elles."], ["Corrélation", "deux choses qui varient ensemble ; cela ne prouve pas que l'une cause l'autre."], ["Portfolio", "un ensemble d'exemples de votre travail à montrer aux employeurs."]],
          slides: [
            { title: "Un bon constat", bullets: ["Une phrase, un chiffre", "\"East a fait le plus de chiffre d'affaires : $29.00, le double des $14.00 de North.\""] },
            { title: "Soyez honnête sur les limites", bullets: ["Seulement 4 jours et 8 ventes", "Corrélation n'est pas causalité"] },
            { title: "Une page", bullets: ["La question, un graphique ou un tableau", "Trois constats, une limite, une prochaine étape", "Vos requêtes SQL et leurs résultats"] },
            { title: "Montrez-le", bullets: ["Écrivez une ligne de CV", "Seulement des données inventées ou publiques"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Tâche finale : réalisez votre projet d'une page avec la question, les données nettoyées et le tableau croisé dynamique, au moins deux requêtes SQL avec leurs résultats, trois constats chiffrés, une limite, une prochaine étape et une ligne de CV. Lisez-le à voix haute : un responsable pressé pourrait-il agir en une minute ?",
          youCanNow: "transformer une analyse en constats clairs et honnêtes, et en un projet à montrer à un employeur.",
          quickCheck: [
            { objective: "O6", q: "Quel est le meilleur constat ?", options: ["\"Il y a eu des ventes.\"", "\"Les données sont intéressantes.\"", "\"South a vendu 11 unités de nourriture et de boissons pour $24.75, deuxième des trois magasins.\"", "\"Les chiffres ont monté et baissé.\""], answer: 2, why: "Il dit ce qui s'est passé, avec des chiffres et une comparaison." },
            { objective: "O6", q: "Le Juice s'est mieux vendu le jour le plus chaud de vos données. Que pouvez-vous dire honnêtement ?", options: ["La chaleur fait vendre du jus", "Ici, le jus et les jours chauds sont allés ensemble, mais cela ne prouve pas la cause", "Le jus se vendra toujours mieux en été", "Les données sont fausses"], answer: 1, why: "Corrélation n'est pas causalité ; un petit jeu de données ne peut pas prouver le pourquoi." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : SQL et partage des résultats",
        questions: [
          { objective: "O4", q: "Que fait SELECT * FROM sales; ?", options: ["Supprime la table sales", "Affiche toutes les colonnes et toutes les lignes de la table sales", "Compte les lignes", "Trie la table"], answer: 1, why: "* veut dire toutes les colonnes, et sans WHERE toutes les lignes sont renvoyées." },
          { objective: "O4", q: "Laquelle est écrite correctement ?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Les valeurs texte vont entre apostrophes, et l'ordre est SELECT, FROM, WHERE." },
          { objective: "O5", q: "Quelle clause SQL fait le même travail que les Lignes d'un tableau croisé dynamique ?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY crée un groupe par valeur, comme les lignes d'un tableau croisé dynamique." },
          { objective: "O5", q: "Que renvoie COUNT(*) pour chaque magasin dans les données d'exercice ?", options: ["Le chiffre d'affaires total", "Le prix moyen", "Le nombre de lignes de ventes", "La ville"], answer: 2, why: "COUNT(*) compte les lignes de chaque groupe." },
          { objective: "O6", q: "Qu'est-ce qui a sa place dans la partie limites de votre rapport ?", options: ["\"Les données couvrent seulement 4 jours, elles ne peuvent donc pas montrer une tendance sur l'année.\"", "\"East est le meilleur magasin pour toujours.\"", "\"SQL, c'est difficile.\"", "\"J'aime le café.\""], answer: 0, why: "Une limite dit au lecteur ce que les données ne peuvent pas montrer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Analyse de données avec un tableur et SQL",
    questions: [
      { objective: "O1", q: "Une question claire sur des données contient :", options: ["Seulement un sujet", "Qui ou quoi, une mesure et une période", "Un graphique", "Un mot de passe"], answer: 1, why: "Ces trois éléments permettent d'y répondre par un nombre." },
      { objective: "O1", q: "Quelle est la première étape du chemin de l'analyste ?", options: ["Faire un graphique", "Écrire du SQL", "Poser une question claire", "Partager les constats"], answer: 2, why: "La question décide des données nécessaires et de la façon de les analyser." },
      { objective: "O1", q: "Quelle certification de CompTIA vise les analystes de données débutants ?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ couvre les notions de données, la préparation, l'analyse, la visualisation et la gouvernance." },
      { objective: "O2", q: "Pourquoi \"North\" et \"north \" posent-ils problème ?", options: ["Le fichier devient plus lourd", "Les tableurs ne lisent pas les minuscules", "La police change", "Ils sont comptés comme deux magasins différents"], answer: 3, why: "Des orthographes différentes coupent un groupe en deux, donc les totaux sont faux." },
      { objective: "O2", q: "Quel outil d'Excel supprime les lignes répétées ?", options: ["Insertion > Graphique", "Données > Supprimer les doublons", "Affichage > Zoom", "Fichier > Enregistrer sous"], answer: 1, why: "Supprimer les doublons efface les lignes qui apparaissent plus d'une fois." },
      { objective: "O2", q: "Quelle est une bonne habitude de nettoyage ?", options: ["Nettoyer la seule copie des données", "Garder les données brutes et noter chaque modification", "Supprimer toute ligne qui semble bizarre", "Taper le signe $ dans les cellules de nombres"], answer: 1, why: "Garder les données brutes et une liste des modifications rend votre travail vérifiable." },
      { objective: "O3", q: "Dans un tableau croisé dynamique, où va le nombre que vous additionnez ?", options: ["Valeurs", "Lignes", "Le titre", "Seulement dans Filtres"], answer: 0, why: "Valeurs contient la mesure, résumée par SUM, COUNT ou AVERAGE." },
      { objective: "O3", q: "Que fait COUNTIFS ?", options: ["Additionne des nombres", "Calcule la moyenne", "Compte les lignes qui respectent une ou plusieurs règles", "Trie une colonne"], answer: 2, why: "COUNTIFS compte les lignes qui respectent les règles que vous lui donnez." },
      { objective: "O3", q: "Dans les données d'exercice propres, quel magasin a fait le plus de chiffre d'affaires ?", options: ["North", "South", "Tous à égalité", "East"], answer: 3, why: "East a fait 29.00, South 24.75 et North 14.00." },
      { objective: "O4", q: "À quoi sert SQL ?", options: ["À dessiner", "À poser des questions à une base de données", "À envoyer des e-mails", "À faire des diapositives"], answer: 1, why: "SQL est le langage pour interroger les bases de données." },
      { objective: "O4", q: "Qu'est-ce qui garde seulement les lignes où qty vaut 4 ou plus ?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE filtre les lignes selon une règle." },
      { objective: "O4", q: "Pour trier les résultats avec le plus grand en premier, vous écrivez :", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC trie du plus grand au plus petit." },
      { objective: "O4", q: "Quelles données pouvez-vous mettre sans risque dans un outil SQL d'exercice en ligne ?", options: ["La liste des clients de votre employeur", "Des dossiers de patients", "Des données d'exercice inventées", "Vos relevés bancaires"], answer: 2, why: "Dans les outils en ligne, utilisez seulement des données d'exercice ou publiques." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; renvoie :", options: ["Chaque vente", "Le chiffre d'affaires total de chaque magasin", "Le nombre de magasins", "La ville de chaque magasin"], answer: 1, why: "GROUP BY store avec SUM donne un total de chiffre d'affaires par magasin." },
      { objective: "O5", q: "Quelle fonction donne une moyenne ?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG renvoie la moyenne d'une colonne." },
      { objective: "O5", q: "Une jointure (JOIN) associe les lignes de deux tables grâce à :", options: ["Une colonne qui a les mêmes valeurs dans les deux", "La couleur des lignes", "La taille de la table", "L'ordre alphabétique seulement"], answer: 0, why: "JOIN ... ON associe les lignes où la colonne clé est égale." },
      { objective: "O6", q: "Un constat doit contenir :", options: ["Seulement un graphique sans mots", "Un chiffre et ce qu'il signifie", "Toutes les lignes de données", "Votre avis sans données"], answer: 1, why: "Un constat clair dit ce qui s'est passé, avec un chiffre." },
      { objective: "O6", q: "Vos données couvrent une semaine. Qu'est-ce qui est honnête ?", options: ["\"Cela prouve la tendance de l'année.\"", "\"Cela ne changera jamais.\"", "\"Les données sont parfaites.\"", "\"Cette semaine seulement ; il faut plus de données pour voir une tendance.\""], answer: 3, why: "Nommer la limite évite que les lecteurs tirent de mauvaises conclusions." },
      { objective: "O6", q: "Quelle ligne de CV montre le mieux ce projet ?", options: ["\"À l'aise avec l'informatique.\"", "\"Nettoyage et analyse de données de ventes dans Google Sheets et SQL (GROUP BY, JOIN), et présentation des constats.\"", "\"Je connais un peu les données.\"", "\"J'ai utilisé Internet.\""], answer: 1, why: "Elle nomme les outils, les compétences et le résultat." },
      { objective: "O6", q: "Par quoi doit se terminer votre rapport d'une page ?", options: ["Une prochaine étape claire sur laquelle on peut agir", "Une longue liste de données brutes", "Votre mot de passe", "Rien"], answer: 0, why: "Une prochaine étape transforme les constats en action." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Question claire", objective: "O1", notYet: "La question est floue ou on ne peut pas y répondre par un nombre.", meets: "La question indique qui ou quoi, une mesure et une période.", exceeds: "Elle indique aussi qui utilisera la réponse et quelle décision elle aide à prendre." },
      { name: "Données propres", objective: "O2", notYet: "Il reste des doublons ou des libellés différents, ou les données brutes ont été perdues.", meets: "Aucun doublon, libellés et types uniformes, données brutes gardées, modifications notées.", exceeds: "La liste des modifications est assez claire pour qu'une autre personne refasse le nettoyage." },
      { name: "Tableau croisé et formules", objective: "O3", notYet: "Pas de tableau croisé dynamique, ou les totaux ne correspondent pas à une vérification à la main.", meets: "Un tableau croisé dynamique répond à la question et un SUMIFS ou COUNTIFS le confirme.", exceeds: "Un deuxième tableau ou une deuxième formule ajoute une comparaison utile." },
      { name: "Requêtes de filtrage", objective: "O4", notYet: "Aucune requête qui fonctionne, ou elle renvoie les mauvaises lignes.", meets: "Une requête avec WHERE et ORDER BY renvoie exactement les bonnes lignes.", exceeds: "Les requêtes sont bien écrites et chacune a une note d'une ligne sur ce à quoi elle répond." },
      { name: "Regroupement et jointure", objective: "O5", notYet: "Pas de requête GROUP BY, ou ses totaux sont faux.", meets: "Une requête GROUP BY avec SUM, COUNT ou AVG correspond au tableau croisé dynamique.", exceeds: "Elle comprend aussi une jointure qui fonctionne et explique la colonne commune." },
      { name: "Constats et ligne de CV", objective: "O6", notYet: "Les constats n'ont pas de chiffres, ou il manque la limite ou la prochaine étape.", meets: "Trois constats chiffrés, une limite, une prochaine étape et une ligne de CV.", exceeds: "Un responsable pourrait agir en une minute, et le graphique ou le tableau est clairement légendé." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui ajoutent le projet à leur CV ou à leur portfolio dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui postulent à un poste ou commencent un poste dans les données, le reporting ou l'analyse, ou utilisent ces compétences au travail, dans les 6 mois",
      "Apprenants qui s'inscrivent à CompTIA Data+ ou à une autre certification en données, ou la réussissent, dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web (l'écran d'un téléphone est trop petit pour pratiquer SQL)",
      "Un compte Google gratuit pour Google Sheets, ou Excel si disponible",
      "Un éditeur SQL gratuit : SQLite Online dans le navigateur, ou DB Browser for SQLite installé",
      "Environ 90 minutes pour les leçons, plus 1 à 2 heures pour le projet final"
    ],
    facilitatorNotes: [
      "Avant la séance, ouvrez l'éditeur SQL sur les ordinateurs de la salle et vérifiez qu'il se charge ; certains réseaux bloquent des sites.",
      "Donnez aux apprenants la table d'exercice en fichier ou sur papier pour gagner du temps de saisie ; la saisie est aussi un bon exercice.",
      "Formez des binômes pour les leçons 4 et 5 : l'un tape la requête, l'autre vérifie le résultat à la main, puis ils échangent.",
      "Insistez sur la règle de confidentialité : seulement des données inventées ou publiques dans les outils en ligne et les portfolios.",
      "Si des apprenants veulent une certification, orientez-les vers la page officielle de CompTIA Data+ ; ce cours prépare, mais ne la délivre pas.",
      "Évaluez le projet final avec la grille et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
