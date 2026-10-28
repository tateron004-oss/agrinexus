"use strict";

// Koach Learn course (French translation of shared/excel-spreadsheets.js). See scripts/koachlearn-courses/README.md, "Translations".
// Function names are given in English with the French Excel name (SUM / SOMME, AVERAGE / MOYENNE, IF / SI). Menu names: English, with the French name where it is well known.

module.exports = {
  id: "excel-spreadsheets-fr",
  lang: "fr",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel et les tableurs au travail",
  skills: "Saisir et mettre en forme des données, Calculer des totaux et des moyennes avec SUM et AVERAGE (SOMME et MOYENNE), Prendre des décisions avec IF (SI), Trier et filtrer, Créer un graphique simple, Figer les en-têtes et partager une feuille",
  outcome: "créer une feuille de calcul de travail claire dans Excel ou Google Sheets : saisir et mettre en forme des données, ajouter des totaux et des moyennes avec des formules, étiqueter des lignes avec IF (SI), trier et filtrer, créer un graphique simple, figer la ligne d'en-tête, et la partager en toute sécurité avec un collègue.",
  about: [
    "Les tableurs sont utilisés dans presque tous les lieux de travail : une boutique suit ses ventes, une association suit les dons et les heures des bénévoles, un chef d'équipe suit les horaires, et une famille suit son budget. Bien les connaître est une compétence demandée par les employeurs.",
    "Ce cours fonctionne dans Microsoft Excel (sur un ordinateur, ou gratuitement sur le web sur office.com avec un compte Microsoft) et dans Google Sheets (gratuit avec un compte Google sur sheets.google.com). Les formules sont les mêmes dans les deux. Les noms des fonctions sont donnés en anglais, avec le nom utilisé dans Excel en français, par exemple SUM (dans Excel en français : SOMME). Quand les menus ont des noms différents, la leçon donne les deux ou décrit l'action.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\" dans un vrai tableur. Vous construirez une seule feuille d'entraînement tout au long du cours. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Créez une feuille \"Ventes de la semaine\" (ou \"Heures des bénévoles\" ou \"Heures de travail\") d'au moins 8 lignes : en-têtes en gras, montants affichés en format monétaire, un total avec SUM (SOMME) et une moyenne avec AVERAGE (MOYENNE), une colonne avec IF (SI) qui étiquette chaque ligne (par exemple \"Objectif atteint\" ou \"Sous l'objectif\"), les données triées de la plus grande à la plus petite, un filtre sur la ligne d'en-tête, un graphique en colonnes, la ligne du haut figée, et le fichier partagé avec une personne en lecture seule.",
  chapters: [
    {
      name: "Chapitre 1 : Construire votre feuille",
      lessons: [
        {
          title: "Cellules, lignes, colonnes et saisie des données",
          minutes: 5,
          goal: "Ouvrir une nouvelle feuille de calcul et saisir un petit tableau de données avec des en-têtes.",
          text: [
            "Une feuille de calcul est une grille. Les colonnes vont de haut en bas et portent des lettres (A, B, C). Les lignes vont de gauche à droite et portent des numéros (1, 2, 3). Chaque case est une cellule, nommée par sa colonne et sa ligne : la cellule en haut à gauche est A1. Un fichier peut contenir plusieurs feuilles, affichées sous forme d'onglets en bas.",
            "Pour saisir des données, cliquez sur une cellule, tapez, puis appuyez sur Entrée pour descendre ou sur Tab pour aller à droite. Mettez les en-têtes à la ligne 1, comme Date, Article, Quantité et Prix, et un enregistrement par ligne en dessous. Gardez un seul type de donnée par colonne : seulement des dates dans la colonne Date, seulement des nombres dans Prix.",
            "Pour corriger une cellule, cliquez dessus et tapez par-dessus, ou double-cliquez pour en modifier une partie. Annuler (Ctrl+Z sous Windows, Cmd+Z sur Mac) efface votre dernier changement. Excel sur le web et Google Sheets enregistrent pendant que vous travaillez ; dans Excel sur ordinateur, enregistrez souvent.",
            "Pour commencer : dans Google Sheets, allez sur sheets.google.com et choisissez une feuille de calcul vierge. Dans Excel, ouvrez Excel (ou Excel sur le web sur office.com) et choisissez un nouveau classeur vide."
          ],
          steps: ["Ouvrez une feuille de calcul vierge dans Google Sheets ou Excel.", "Cliquez sur la cellule A1 et tapez votre premier en-tête. Appuyez sur Tab pour aller à droite.", "Tapez les autres en-têtes à la ligne 1.", "Saisissez un enregistrement par ligne à partir de la ligne 2.", "Donnez au fichier un nom clair, comme \"Ventes de la semaine - mars\"."],
          words: [["Cellule", "une case de la grille, nommée par la lettre de sa colonne et le numéro de sa ligne, comme B3."], ["En-tête", "l'étiquette en haut d'une colonne qui dit ce qu'elle contient."], ["Classeur", "un fichier Excel ; il peut contenir plusieurs feuilles."]],
          slides: [
            { title: "La grille", bullets: ["Les colonnes ont des lettres ; les lignes ont des numéros", "Une cellule se nomme A1 ou B3", "Les onglets en bas sont des feuilles séparées"] },
            { title: "Saisir des données", bullets: ["Cliquez, tapez, puis Entrée (en bas) ou Tab (à droite)", "Les en-têtes à la ligne 1", "Un enregistrement par ligne, un type de donnée par colonne"] },
            { title: "Corriger et enregistrer", bullets: ["Tapez par-dessus ou double-cliquez pour modifier", "Annuler : Ctrl+Z (Windows) ou Cmd+Z (Mac)", "Les versions web enregistrent au fur et à mesure"] }
          ],
          tryIt: "Ouvrez une feuille de calcul vierge. À la ligne 1, tapez les en-têtes Jour, Article, Quantité, Prix. Saisissez 8 lignes de ventes d'entraînement (par exemple Lun, Café, 12, 3,50 ; ou 3.50 si votre ordinateur utilise le point pour les décimales). Nommez le fichier \"Ventes entraînement\".",
          youCanNow: "ouvrir une feuille de calcul, trouver n'importe quelle cellule par son nom, et saisir un tableau propre avec des en-têtes."
        },
        {
          title: "Mettre en forme pour faciliter la lecture",
          minutes: 4,
          goal: "Mettre en forme les en-têtes, les montants et la largeur des colonnes pour que la feuille soit claire.",
          text: [
            "La mise en forme change l'apparence des données, pas leur valeur. Une bonne mise en forme rend une feuille facile à lire d'un coup d'œil.",
            "Mettez les en-têtes en gras : sélectionnez la ligne 1 et cliquez sur le bouton Gras de la barre d'outils (B en anglais, G en français), ou appuyez sur Ctrl+B (Cmd+B sur Mac ; dans Excel en français, c'est souvent Ctrl+G). Vous pouvez aussi ajouter une couleur de remplissage à la ligne d'en-tête.",
            "Affichez l'argent en format monétaire : sélectionnez la colonne Prix, ouvrez le menu de format des nombres et choisissez Currency (Monétaire). Dans Excel, il se trouve dans l'onglet Home (Accueil) ; dans Google Sheets, il est dans Format, puis Number (Nombre), et il y a aussi un bouton de devise dans la barre d'outils.",
            "Ajustez les colonnes : double-cliquez sur le trait entre deux lettres de colonnes en haut, et la colonne de gauche s'élargit pour afficher son contenu le plus long. Cela marche dans Excel et dans Google Sheets."
          ],
          steps: ["Sélectionnez la ligne 1 en cliquant sur le chiffre 1 à gauche.", "Cliquez sur Gras ou appuyez sur Ctrl+B (Ctrl+G dans Excel en français).", "Sélectionnez la colonne Prix en cliquant sur sa lettre.", "Choisissez le format monétaire dans le menu de format des nombres (Excel : onglet Accueil ; Sheets : Format > Nombre, ou le bouton de devise).", "Double-cliquez sur la limite entre deux lettres de colonnes pour ajuster la largeur."],
          words: [["Mise en forme", "changer l'apparence des données (gras, couleur, format monétaire) sans changer leur valeur."], ["Sélectionner", "cliquer ou faire glisser sur des cellules pour les choisir avant d'agir dessus."]],
          slides: [
            { title: "La mise en forme change l'apparence", bullets: ["Pas la valeur à l'intérieur", "Rend une feuille facile à lire"] },
            { title: "En-têtes en gras", bullets: ["Sélectionnez la ligne 1", "Cliquez sur Gras ou Ctrl+B (Cmd+B sur Mac, Ctrl+G dans Excel en français)", "Ajoutez une couleur de remplissage si vous voulez"] },
            { title: "L'argent en format monétaire", bullets: ["Sélectionnez la colonne", "Excel : menu de format des nombres de l'onglet Accueil", "Sheets : Format > Nombre, ou le bouton de devise"] },
            { title: "Ajustez les colonnes", bullets: ["Double-cliquez sur le trait entre les lettres de colonnes", "Marche dans Excel et Google Sheets"] }
          ],
          tryIt: "Dans votre feuille Ventes entraînement, mettez la ligne 1 en gras avec une couleur de remplissage claire, affichez la colonne Prix en format monétaire, et ajustez la largeur de toutes les colonnes.",
          youCanNow: "mettre en forme les en-têtes, les montants et la largeur des colonnes pour qu'une feuille soit claire et professionnelle."
        },
        {
          title: "Totaux et moyennes avec SUM et AVERAGE",
          minutes: 5,
          goal: "Écrire des formules SUM et AVERAGE (SOMME et MOYENNE) et recopier une formule vers le bas.",
          text: [
            "Une formule commence toujours par le signe égal (=). Elle peut faire des calculs avec les noms des cellules : =C2*D2 multiplie la quantité en C2 par le prix en D2. Si vous changez C2, le résultat se met à jour tout seul.",
            "SUM (dans Excel en français : SOMME) additionne une plage de cellules. Une plage s'écrit : première cellule, deux-points, dernière cellule. =SUM(E2:E9) additionne E2 à E9. AVERAGE (en français : MOYENNE) calcule la moyenne : =AVERAGE(E2:E9). Les deux marchent de la même façon dans Excel et Google Sheets ; dans Excel en français, on tape =SOMME(E2:E9) et =MOYENNE(E2:E9).",
            "Pour recopier une formule vers le bas, cliquez sur la cellule qui contient la formule, puis faites glisser vers le bas le petit carré dans son coin inférieur droit (la poignée de recopie). Les noms des cellules changent pour chaque ligne : E2 devient E3, E4, et ainsi de suite.",
            "Vérifiez votre travail : si une formule affiche une erreur comme #NAME? ou #VALUE! (en français : #NOM? ou #VALEUR!), cherchez une faute de frappe dans le nom de la fonction ou du texte dans une colonne de nombres."
          ],
          steps: ["En E1, tapez l'en-tête Total.", "En E2, tapez =C2*D2 et appuyez sur Entrée.", "Faites glisser la poignée de recopie de E2 jusqu'à la dernière ligne.", "Sous la dernière ligne, tapez =SUM(E2:E9) (en français : =SOMME(E2:E9)) pour le total général.", "En dessous, tapez =AVERAGE(E2:E9) (en français : =MOYENNE(E2:E9)) pour la vente moyenne."],
          words: [["Formule", "un calcul dans une cellule qui commence par = et se met à jour quand les données changent."], ["Plage", "un bloc de cellules écrit première:dernière, comme E2:E9."], ["Poignée de recopie", "le petit carré en bas à droite d'une cellule sélectionnée, que l'on fait glisser pour recopier."]],
          slides: [
            { title: "Les formules commencent par =", bullets: ["=C2*D2 multiplie deux cellules", "Changez les données et le résultat se met à jour"] },
            { title: "SUM et AVERAGE", bullets: ["=SUM(E2:E9) additionne une plage (SOMME en français)", "=AVERAGE(E2:E9) calcule la moyenne (MOYENNE en français)", "Pareil dans Excel et Google Sheets"] },
            { title: "Recopier une formule vers le bas", bullets: ["Faites glisser la poignée de recopie dans le coin de la cellule", "Les noms des cellules s'adaptent à chaque ligne"] },
            { title: "Erreurs", bullets: ["#NAME? (#NOM?) : vérifiez l'orthographe", "#VALUE! (#VALEUR!) : du texte à la place d'un nombre"] }
          ],
          tryIt: "Dans votre feuille, ajoutez une colonne Total avec =C2*D2 recopiée vers le bas, puis ajoutez sous la colonne un total général avec SUM (SOMME) et la vente moyenne avec AVERAGE (MOYENNE). Changez une quantité et regardez les totaux se mettre à jour.",
          youCanNow: "écrire des formules SUM et AVERAGE (SOMME et MOYENNE), multiplier des cellules, et recopier une formule vers le bas."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire votre feuille",
        questions: [
          { q: "Quel est le nom de la cellule de la colonne C, ligne 4 ?", options: ["4C", "C4", "Ligne C", "Cellule 34"], answer: 1, why: "Une cellule se nomme par la lettre de sa colonne, puis le numéro de sa ligne." },
          { q: "Où doivent aller vos en-têtes ?", options: ["À la ligne 1, un par colonne", "En bas", "Dans des cellules au hasard", "Dans un autre fichier"], answer: 0, why: "Les en-têtes de la ligne 1 nomment chaque colonne de données en dessous." },
          { q: "Vous voulez que les prix s'affichent avec un symbole monétaire. Que faites-vous ?", options: ["Taper $ avant chaque nombre", "Mettre la colonne en gras", "Supprimer les prix", "Choisir le format monétaire dans le menu de format des nombres"], answer: 3, why: "Le format monétaire ajoute le symbole et les décimales à chaque cellule." },
          { q: "Quelle formule additionne les cellules B2 à B10 ?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Les formules commencent par =, et une plage utilise les deux-points. Dans Excel en français : =SOMME(B2:B10)." },
          { q: "Que se passe-t-il quand vous faites glisser la poignée de recopie depuis une cellule avec =C2*D2 ?", options: ["La formule est recopiée et s'adapte à chaque ligne", "La cellule est supprimée", "Chaque ligne reçoit exactement =C2*D2", "La feuille est partagée"], answer: 0, why: "Les noms des cellules changent ligne par ligne : C3*D3, C4*D4, et ainsi de suite." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Travailler avec vos données",
      lessons: [
        {
          title: "Prendre des décisions avec IF (SI)",
          minutes: 5,
          goal: "Écrire une formule IF (SI) qui étiquette chaque ligne selon une règle.",
          text: [
            "IF (dans Excel en français : SI) vérifie une condition et affiche un résultat si elle est vraie et un autre si elle est fausse. Le modèle est =IF(test, valeur si vrai, valeur si faux).",
            "Exemples : =IF(E2>=50,\"Objectif atteint\",\"Sous l'objectif\") étiquette une vente. =IF(C2>40,\"Heures sup\",\"Normal\") étiquette une semaine d'heures. =IF(D2=\"\",\"Manquant\",\"OK\") signale une cellule vide. Les réponses en texte vont entre guillemets doubles ; les nombres, non.",
            "Signes de comparaison : > plus grand que, < plus petit que, >= plus grand ou égal, <= plus petit ou égal, = égal, <> différent de.",
            "IF marche de la même façon dans Excel et Google Sheets. Dans Excel en français, et quand les réglages régionaux utilisent la virgule pour les décimales, le séparateur entre les arguments est un point-virgule (;) au lieu d'une virgule : =SI(E2>=50;\"Objectif atteint\";\"Sous l'objectif\"). L'application vous montre le modèle pendant que vous tapez."
          ],
          steps: ["Ajoutez un en-tête, comme Statut, dans la colonne vide suivante.", "À la ligne 2, tapez =IF( (en français : =SI().", "Tapez le test, comme E2>=50, puis une virgule (ou un point-virgule).", "Tapez le résultat si vrai entre guillemets, un séparateur, le résultat si faux entre guillemets, et ).", "Appuyez sur Entrée et recopiez la formule vers le bas avec la poignée de recopie."],
          words: [["IF (SI)", "une fonction qui affiche un résultat quand un test est vrai et un autre quand il est faux."], ["Condition", "le test dans une formule IF, comme E2>=50."]],
          slides: [
            { title: "Le modèle IF (SI)", bullets: ["=IF(test, si vrai, si faux)", "En français : =SI(test; si vrai; si faux)", "Pareil dans Excel et Google Sheets"] },
            { title: "Exemples", bullets: ["=IF(E2>=50,\"Objectif atteint\",\"Sous l'objectif\")", "=IF(C2>40,\"Heures sup\",\"Normal\")", "Le texte entre guillemets doubles ; les nombres sans"] },
            { title: "Signes de comparaison", bullets: ["> plus grand, < plus petit", ">= au moins, <= au plus", "= égal, <> différent"] }
          ],
          tryIt: "Ajoutez une colonne Statut à votre feuille avec =IF(E2>=50,\"Objectif atteint\",\"Sous l'objectif\") (dans Excel en français : =SI(E2>=50;\"Objectif atteint\";\"Sous l'objectif\")) et recopiez-la vers le bas. Changez un total pour qu'il passe au-dessus de 50 et regardez l'étiquette changer.",
          youCanNow: "écrire une formule IF (SI) qui étiquette les lignes automatiquement selon une règle."
        },
        {
          title: "Trier, filtrer et figer la ligne d'en-tête",
          minutes: 5,
          goal: "Trier vos données, les filtrer pour n'afficher que certaines lignes, et figer la ligne d'en-tête.",
          text: [
            "Trier met les lignes dans un ordre, comme la plus grosse vente en premier ou les noms de A à Z. Filtrer cache les lignes dont vous n'avez pas besoin pour le moment, par exemple pour n'afficher que les lignes \"Sous l'objectif\". Aucun des deux ne supprime de données.",
            "Excel : cliquez sur une cellule de votre tableau, allez dans l'onglet Data (Données), et choisissez Sort (Trier) pour choisir une colonne et un ordre, ou Filter (Filtrer) pour ajouter des flèches déroulantes à la ligne d'en-tête. Google Sheets : sélectionnez vos données, ouvrez le menu Data (Données) et choisissez Sort range (Trier une plage), en cochant que les données ont une ligne d'en-tête, ou choisissez Create a filter (Créer un filtre) pour ajouter les flèches. Cliquez sur la flèche d'un en-tête pour trier ou pour cocher seulement les valeurs que vous voulez voir.",
            "Triez toujours le tableau entier, jamais une seule colonne, sinon les lignes se mélangent. Sélectionner une cellule dans le tableau dans Excel, ou toute la plage dans Sheets, garde les lignes ensemble.",
            "Figer garde la ligne d'en-tête à l'écran quand vous descendez dans une longue liste. Excel : onglet View (Affichage), Freeze Panes (Figer les volets), puis Freeze Top Row (Figer la ligne supérieure). Google Sheets : menu View (Affichage), Freeze (Figer), puis 1 row (1 ligne)."
          ],
          steps: ["Cliquez dans votre tableau (Excel) ou sélectionnez tout le tableau (Sheets).", "Trier : Excel onglet Données > Trier ; Sheets Données > Trier une plage, avec une ligne d'en-tête.", "Filtrer : Excel onglet Données > Filtrer ; Sheets Données > Créer un filtre.", "Utilisez la flèche d'un en-tête pour n'afficher que les lignes voulues.", "Figer : Excel Affichage > Figer les volets > Figer la ligne supérieure ; Sheets Affichage > Figer > 1 ligne."],
          words: [["Trier", "mettre les lignes dans un ordre selon une colonne, en gardant chaque ligne entière."], ["Filtrer", "cacher les lignes qui ne correspondent pas à votre choix, sans les supprimer."], ["Figer", "garder des lignes ou des colonnes à l'écran pendant que vous faites défiler."]],
          slides: [
            { title: "Trier et filtrer", bullets: ["Trier : mettre les lignes dans un ordre", "Filtrer : n'afficher que les lignes voulues", "Aucun des deux ne supprime de données"] },
            { title: "Dans Excel", bullets: ["Onglet Données (Data) > Trier", "Onglet Données > Filtrer ajoute des flèches aux en-têtes", "Affichage (View) > Figer les volets > Figer la ligne supérieure"] },
            { title: "Dans Google Sheets", bullets: ["Données > Trier une plage (avec une ligne d'en-tête)", "Données > Créer un filtre", "Affichage > Figer > 1 ligne"] },
            { title: "Gardez les lignes ensemble", bullets: ["Triez le tableau entier, jamais une seule colonne"] }
          ],
          tryIt: "Triez votre feuille par Total, du plus grand au plus petit. Ajoutez un filtre et n'affichez que les lignes \"Sous l'objectif\", puis effacez le filtre. Figez la ligne du haut et descendez pour vérifier que les en-têtes restent visibles.",
          youCanNow: "trier et filtrer des données sans risque et figer la ligne d'en-tête."
        },
        {
          title: "Créer un graphique et partager votre feuille",
          minutes: 5,
          goal: "Créer un graphique en colonnes simple et partager la feuille avec la bonne autorisation.",
          text: [
            "Un graphique transforme des nombres en image. Un graphique en colonnes (aussi appelé histogramme dans Excel en français) est bien pour comparer des quantités, comme les ventes par jour ou les heures de bénévolat par personne.",
            "Sélectionnez deux colonnes : les étiquettes (comme Jour) et les nombres (comme Total), en-têtes compris. Pour sélectionner deux colonnes qui ne sont pas côte à côte, maintenez Ctrl (Cmd sur Mac) pendant que vous sélectionnez la deuxième. Excel : allez dans l'onglet Insert (Insertion) et choisissez un graphique en colonnes (ou les graphiques recommandés). Google Sheets : ouvrez le menu Insert (Insertion) et choisissez Chart (Graphique) ; l'éditeur de graphique s'ouvre à droite, où vous pouvez choisir le graphique en colonnes. Cliquez sur le titre du graphique pour le renommer.",
            "Pour partager : dans Google Sheets, cliquez sur le bouton Share (Partager) en haut à droite, tapez l'e-mail de la personne et choisissez Lecteur, Commentateur ou Éditeur. Dans Excel, le fichier doit être enregistré sur OneDrive ou SharePoint ; cliquez ensuite sur Partager, ajoutez l'e-mail et choisissez si la personne peut modifier ou seulement afficher.",
            "Partagez prudemment : donnez l'accès le plus faible dont la personne a besoin (lecture seule si elle doit seulement lire), et ne mettez jamais de mots de passe, de numéros de sécurité sociale (Social Security numbers aux États-Unis) ou de coordonnées bancaires dans une feuille partagée."
          ],
          steps: ["Sélectionnez la colonne des étiquettes et la colonne des nombres, avec les en-têtes.", "Excel : onglet Insertion > un graphique en colonnes. Sheets : Insertion > Graphique, puis choisissez le graphique en colonnes.", "Renommez le titre du graphique.", "Cliquez sur Partager et ajoutez l'e-mail de la personne.", "Choisissez la lecture seule sauf si elle doit modifier, puis envoyez."],
          words: [["Graphique en colonnes", "un graphique avec des barres verticales, bien pour comparer des quantités."], ["Lecteur", "une personne qui peut voir un fichier partagé mais pas le modifier (en anglais : Viewer)."], ["Éditeur", "une personne qui peut modifier un fichier partagé (en anglais : Editor)."]],
          slides: [
            { title: "Choisissez le bon graphique", bullets: ["Graphique en colonnes : comparer des quantités", "Exemple : ventes par jour, heures par personne"] },
            { title: "Créez le graphique", bullets: ["Sélectionnez étiquettes et nombres avec les en-têtes", "Excel : onglet Insertion > graphique en colonnes", "Sheets : Insertion > Graphique > graphique en colonnes"] },
            { title: "Partagez-le", bullets: ["Cliquez sur Partager, ajoutez un e-mail", "Choisissez lecture ou modification", "Les fichiers Excel doivent être sur OneDrive ou SharePoint"] },
            { title: "Partagez prudemment", bullets: ["Donnez l'accès le plus faible nécessaire", "Pas de mots de passe, de numéros d'identité ou de banque dans une feuille partagée"] }
          ],
          tryIt: "Tâche finale : terminez votre feuille avec au moins 8 lignes, des en-têtes en gras, le format monétaire, SUM et AVERAGE (SOMME et MOYENNE), une colonne Statut avec IF (SI), un tri du plus grand au plus petit, un filtre, un graphique en colonnes de Jour et Total, et la ligne du haut figée. Puis partagez-la avec une personne en lecture seule.",
          youCanNow: "créer un graphique en colonnes à partir de vos données et partager une feuille de calcul avec la bonne autorisation."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Travailler avec vos données",
        questions: [
          { q: "Qu'affiche =IF(C2>40,\"Heures sup\",\"Normal\") quand C2 vaut 45 ?", options: ["Normal", "45", "Heures sup", "Une erreur"], answer: 2, why: "45 est plus grand que 40, donc le résultat \"si vrai\" s'affiche." },
          { q: "Dans une formule IF (SI), où vont les résultats en texte ?", options: ["Entre guillemets doubles", "Entre crochets", "Après un signe #", "Nulle part"], answer: 0, why: "Les résultats en texte doivent être entre guillemets doubles." },
          { q: "Que fait un filtre ?", options: ["Il supprime des lignes", "Il change les nombres", "Il partage le fichier", "Il cache les lignes qui ne correspondent pas, sans les supprimer"], answer: 3, why: "Filtrer cache seulement des lignes ; en effaçant le filtre, elles réapparaissent." },
          { q: "Comment garder la ligne d'en-tête à l'écran dans Google Sheets ?", options: ["Format > Gras", "Affichage > Figer > 1 ligne", "Insertion > Graphique", "Données > Trier une plage"], answer: 1, why: "Figer la ligne 1 la garde visible pendant que vous faites défiler." },
          { q: "Un bénévole a seulement besoin de lire votre feuille. Quel accès lui donnez-vous ?", options: ["Éditeur", "Propriétaire", "Lecteur", "Aucun ; envoyez-lui votre mot de passe"], answer: 2, why: "Donnez l'accès le plus faible dont la personne a besoin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Excel et les tableurs au travail",
    questions: [
      { q: "Dans une feuille de calcul, les colonnes sont nommées avec :", options: ["Des chiffres", "Des lettres", "Des couleurs", "Des dates"], answer: 1, why: "Les colonnes utilisent des lettres ; les lignes utilisent des chiffres." },
      { q: "Quelle touche vous fait passer à la cellule de droite après avoir tapé ?", options: ["Tab", "Entrée", "Maj", "Échap"], answer: 0, why: "Tab va à droite ; Entrée va en bas." },
      { q: "Quelle est la meilleure présentation pour une liste de dons ?", options: ["Chaque don dans un fichier différent", "Toutes les données dans une seule cellule", "Des cellules au hasard dans la feuille", "Les en-têtes à la ligne 1 et un don par ligne"], answer: 3, why: "Un enregistrement par ligne sous des en-têtes clairs garde les données utilisables." },
      { q: "Vous avez tapé le mauvais nombre. Le moyen le plus rapide d'effacer votre dernier changement est :", options: ["Fermer le fichier", "Annuler : Ctrl+Z (Cmd+Z sur Mac)", "Supprimer la colonne", "Commencer un nouveau fichier"], answer: 1, why: "Annuler défait votre dernière action." },
      { q: "Mettre un nombre en format monétaire :", options: ["Change son apparence, pas sa valeur", "Double sa valeur", "Supprime le nombre", "Le transforme en texte qu'on ne peut pas additionner"], answer: 0, why: "La mise en forme change seulement l'apparence." },
      { q: "Comment ajuster une colonne à son contenu le plus long ?", options: ["Taper des espaces", "Supprimer l'en-tête", "Double-cliquer sur le trait entre les lettres de colonnes", "Appuyer deux fois sur Entrée"], answer: 2, why: "Double-cliquer sur la limite ajuste automatiquement la colonne." },
      { q: "Chaque formule commence par :", options: ["Seulement un signe plus", "Un signe dollar", "Une lettre", "Un signe égal"], answer: 3, why: "Le = dit à l'application qu'il s'agit d'une formule." },
      { q: "Quelle formule calcule la moyenne de D2 à D20 ?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE avec une plage écrite première:dernière. Dans Excel en français : =MOYENNE(D2:D20)." },
      { q: "Vous changez une quantité utilisée par une formule SUM. Que devient le total ?", options: ["Rien", "Il se met à jour tout seul", "Il affiche une erreur", "Il est supprimé"], answer: 1, why: "Les formules se recalculent quand leurs données changent." },
      { q: "Une cellule affiche #NAME? (en français : #NOM?). Quelle est la cause probable ?", options: ["Le fichier est partagé", "La colonne est en gras", "Le nom de la fonction est mal écrit", "La feuille est figée"], answer: 2, why: "#NAME? veut souvent dire que l'application ne reconnaît pas le nom de la fonction." },
      { q: "Qu'est-ce que la poignée de recopie ?", options: ["Un menu", "Le petit carré en bas à droite d'une cellule, qui sert à recopier", "Le bouton Partager", "Un type de graphique"], answer: 1, why: "La faire glisser recopie la formule et adapte les noms des cellules." },
      { q: "Quelle formule affiche \"Manquant\" quand D2 est vide et \"OK\" sinon ?", options: ["=IF(D2=\"\",\"Manquant\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Manquant)", "=AVERAGE(\"Manquant\")"], answer: 0, why: "Le test D2=\"\" vérifie si la cellule est vide. Dans Excel en français : =SI(D2=\"\";\"Manquant\";\"OK\")." },
      { q: "Que veut dire <> dans une formule ?", options: ["Plus grand que", "Égal à", "Plus petit que", "Différent de"], answer: 3, why: "<> veut dire différent de." },
      { q: "Dans Excel, où se trouvent Trier et Filtrer ?", options: ["Onglet Fichier", "Onglet Données", "Onglet Aide", "Onglet Dessin"], answer: 1, why: "Trier et Filtrer sont dans l'onglet Données (Data) d'Excel." },
      { q: "Dans Google Sheets, comment ajouter des flèches de filtre à la ligne d'en-tête ?", options: ["Données > Créer un filtre", "Insertion > Graphique", "Format > Nombre", "Fichier > Partager"], answer: 0, why: "Créer un filtre ajoute des flèches à chaque en-tête." },
      { q: "Pourquoi ne faut-il jamais trier une seule colonne d'un tableau ?", options: ["C'est trop lent", "Cela supprime la feuille", "Les lignes se mélangent", "Cela partage le fichier"], answer: 2, why: "Trier une seule colonne sépare les valeurs du reste de leur ligne." },
      { q: "Dans Excel, comment garder la ligne 1 visible en faisant défiler ?", options: ["Insertion > Graphique", "Accueil > Gras", "Données > Filtrer", "Affichage > Figer les volets > Figer la ligne supérieure"], answer: 3, why: "Figer la ligne supérieure garde l'en-tête à l'écran." },
      { q: "Quel graphique est le meilleur pour comparer les ventes par jour ?", options: ["Un graphique en colonnes", "Aucun graphique", "Un graphique sans étiquettes", "Un dessin de camembert fait à la main"], answer: 0, why: "Les graphiques en colonnes comparent des quantités côte à côte." },
      { q: "Dans Google Sheets, comment commencer un graphique ?", options: ["Données > Trier une plage", "Insertion > Graphique", "Affichage > Figer", "Format > Gras"], answer: 1, why: "Insertion > Graphique ouvre l'éditeur de graphique." },
      { q: "Qu'est-ce qu'il ne faut JAMAIS mettre dans une feuille que vous partagez ?", options: ["Les totaux des ventes", "Les noms des produits", "Les mots de passe et les numéros de sécurité sociale", "Les dates"], answer: 2, why: "Les numéros privés peuvent être mal utilisés si le fichier est partagé." }
    ]
  }
};
