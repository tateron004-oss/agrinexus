"use strict";

// Koach Learn course (French translation of shared/data-dashboards.js). See scripts/koachlearn-courses/README.md, "Translations".
// Product names (Power BI, Power BI Desktop, Power Query, Looker Studio, Data Studio, Google Sheets) stay as written. The practice
// data (columns Date, Product, Category, Units, Price, Total; values such as Muffin and Pastry) stays in English, as in the sibling
// data-analytics course, so every total matches. Menu names are given in French, with the English name the first time.

const PL300 = { name: "Microsoft Learn : Power BI Data Analyst Associate (examen PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (examen DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft : Power BI Desktop (téléchargement gratuit)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud : aide de Data Studio (anciennement Looker Studio)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud : connecter Data Studio à Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-fr",
  lang: "fr",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Créer des tableaux de bord de données (Power BI et Data Studio)",
  skills: "Planifier un tableau de bord et ses chiffres clés, Nettoyer les données en un tableau bien rangé, Choisir le bon graphique, Créer un tableau de bord d'une page avec des filtres, Vérifier et partager un tableau de bord en sécurité",
  outcome: "planifier, créer, vérifier et partager un tableau de bord d'une page dans Power BI Desktop ou Looker Studio (Data Studio) qui répond à une question claire de l'entreprise avec 3 à 5 chiffres clés, les bons graphiques et des filtres simples.",
  about: [
    "Les entreprises, les associations, les hôpitaux et l'armée utilisent des tableaux de bord (en anglais, dashboards) : un seul écran qui montre les chiffres dont les gens ont besoin pour prendre une décision. Savoir les créer est une compétence de base pour les métiers d'analyse de données, de reporting et d'opérations. Ce cours s'adresse aux personnes en recherche d'emploi, aux anciens militaires, aux patrons de petites entreprises et à toute personne qui a déjà utilisé un tableur et veut passer à l'étape suivante.",
    "Vous allez planifier un tableau de bord, nettoyer un petit jeu de données d'entraînement dans Google Sheets, le charger dans un outil gratuit, choisir les bons graphiques, ajouter des cartes de chiffres clés et des filtres, vérifier chaque chiffre et le partager en sécurité. Vous pouvez utiliser Power BI Desktop (un logiciel gratuit de Microsoft pour Windows) ou Looker Studio, que Google appelle maintenant Data Studio (gratuit dans n'importe quel navigateur web).",
    "Ce cours vous prépare au travail sur les tableaux de bord et à la partie reporting de deux vrais examens : le PL-300 de Microsoft (Power BI Data Analyst Associate) et CompTIA Data+ (DA0-002). CompTIA est un organisme qui certifie les compétences en informatique. Ce cours ne vous donne aucun de ces deux certificats. Consultez les pages officielles dans les sources pour savoir ce que couvre chaque examen, comment le programmer et combien il coûte aujourd'hui.",
    "Chaque leçon dure environ cinq minutes, puis vient une tâche « Essayez maintenant ». Un contrôle rapide de 2 questions suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions clôt le cours. Toutes les données d'entraînement sont inventées."
  ],
  finalTask: "Créez un tableau de bord d'une page pour votre propre parcours : utilisez les données d'entraînement des ventes de la boulangerie de ce cours, ou un petit jeu de données inventé lié à un métier qui vous intéresse (par exemple des commandes d'entrepôt ou des visites dans une clinique). Écrivez la question du tableau de bord et 3 à 5 chiffres clés, nettoyez les données en un tableau bien rangé, créez au moins 3 cartes de chiffres clés et 2 graphiques adaptés à la question, ajoutez un filtre de date et un autre filtre, vérifiez 3 totaux par rapport aux données sources, puis partagez-le ou exportez-le avec un résumé de 3 phrases sur ce qu'il montre. Gardez-le comme pièce de portfolio à montrer en entretien d'embauche.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes aux profils variés : personnes en recherche d'emploi qui visent des postes en données, reporting ou opérations, anciens militaires qui passent à la vie civile, patrons de petites entreprises, jeunes adultes et personnes sortant de prison qui reconstruisent leurs compétences professionnelles. Beaucoup ont déjà utilisé un tableur ; peu ont créé un tableau de bord.",
    startingPoint: "Savent saisir des données dans un tableur, calculer un total avec SUM (SOMME) et faire un graphique simple (ou ont suivi « Excel et tableurs pour le travail »). N'ont jamais utilisé Power BI ni Looker Studio. Certains ne savent pas quel graphique choisir ni pourquoi les chiffres d'un rapport peuvent être faux.",
    gap: "Les employeurs cherchent des personnes capables de transformer des données brutes en une page claire, fiable, qui répond à une question de l'entreprise. Les apprenants doivent savoir planifier, nettoyer, créer, vérifier et partager un tableau de bord, et en présenter un en entretien. C'est aussi la compétence de reporting évaluée par le PL-300 et CompTIA Data+.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot lié aux données est expliqué",
      "Appareils : Power BI Desktop exige un ordinateur Windows ; sur un Mac, un Chromebook ou un ordinateur de bibliothèque, on utilise Data Studio dans un navigateur",
      "Outils gratuits uniquement : Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Temps : leçons de 5 à 6 minutes, faciles à caser entre le travail et la recherche d'emploi",
      "Confidentialité : les données d'entraînement sont inventées ; on ne charge jamais de vraies données de clients, de patients ou d'employés pour s'entraîner"
    ],
    prerequisites: "Usage de base d'un tableur : saisir des données, SUM (SOMME), trier et faire un graphique simple. Si c'est nouveau pour vous, suivez d'abord « Excel et tableurs pour le travail »."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "Face à un besoin de l'entreprise comme « Quels produits se vendent le mieux ? »", action: "écrire en une phrase la question du tableau de bord, nommer son public et choisir 3 à 5 chiffres clés (KPI)", standard: "avec pour chaque chiffre clé son nom, son mode de calcul et sa période" },
    { id: "O2", condition: "Face à une feuille de ventes d'entraînement en désordre", action: "nettoyer les données en un tableau bien rangé avec une ligne par enregistrement et une colonne par champ", standard: "sans en-tête vide, sans ligne en double et avec un seul format par colonne" },
    { id: "O3", condition: "Face à une question sur une tendance, une comparaison ou une part d'un total", action: "choisir et créer le type de graphique qui répond à la question dans Power BI Desktop ou Data Studio", standard: "avec au moins 4 bons choix de graphique sur 5" },
    { id: "O4", condition: "Avec vos données nettoyées dans Power BI Desktop ou Data Studio", action: "créer un tableau de bord d'une page avec des cartes de chiffres clés, au moins 2 graphiques, un filtre de date et un autre filtre", standard: "pour qu'une personne puisse répondre à la question du tableau de bord en moins d'une minute" },
    { id: "O5", condition: "Face à un tableau de bord terminé et à ses données sources", action: "vérifier au moins 3 totaux du tableau de bord par rapport aux données sources et corriger ceux qui ne correspondent pas", standard: "avant que quelqu'un d'autre ne le voie" },
    { id: "O6", condition: "Quand votre tableau de bord est prêt", action: "partager ou exporter le tableau de bord en lecture seule et écrire un résumé de 3 phrases sur ce qu'il montre", standard: "sans partager aucune donnée privée" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier le tableau de bord et préparer les données",
      lessons: [
        {
          title: "Commencer par la question et les chiffres clés",
          objectives: ["O1"],
          minutes: 5,
          goal: "Écrire la question d'un tableau de bord, nommer son public et choisir 3 à 5 chiffres clés.",
          text: [
            "Un tableau de bord est un seul écran de chiffres et de graphiques qui aide quelqu'un à prendre une décision. Un bon tableau de bord commence par une question, pas par un graphique. Demandez-vous : qui va le regarder, et que doit-il décider ?",
            "Exemple : la patronne d'une petite boulangerie demande : « Quels produits et quels jours rapportent le plus d'argent chaque mois ? » Le public, c'est la patronne. La décision : quoi cuire en plus grande quantité et quand prévoir du personnel.",
            "Ensuite, choisissez 3 à 5 chiffres clés, appelés KPI (indicateurs clés de performance). Pour la boulangerie : le total des ventes en dollars, le nombre d'articles vendus, la vente moyenne par commande et le produit le plus vendu. Écrivez comment chacun est calculé et sur quelle période, par exemple « Total des ventes = somme de la colonne Total, ce mois-ci ».",
            "Trop de chiffres cachent les plus importants. Si un chiffre n'aide pas à répondre à la question, laissez-le de côté."
          ],
          steps: ["Nommez le public : qui va utiliser le tableau de bord ?", "Écrivez la question en une phrase.", "Nommez la décision qu'il les aide à prendre.", "Choisissez 3 à 5 chiffres clés qui y répondent.", "Pour chacun, écrivez son nom, son mode de calcul et sa période."],
          words: [["Tableau de bord (dashboard)", "un seul écran de chiffres clés et de graphiques qui aide quelqu'un à prendre une décision."], ["KPI (indicateur clé de performance)", "un des quelques chiffres qui montrent si les choses vont bien, comme le total des ventes du mois."], ["Public", "les personnes qui vont regarder le tableau de bord."], ["Indicateur", "tout chiffre que vous mesurez, comme les articles vendus ou la vente moyenne."]],
          slides: [
            { title: "Commencez par la question, pas par le graphique", bullets: ["Qui va le regarder ?", "Que doit-il décider ?", "Écrivez la question en une phrase"] },
            { title: "Exemple : une petite boulangerie", bullets: ["Question : quels produits et quels jours rapportent le plus ?", "Public : la patronne", "Décision : quoi cuire et quand prévoir du personnel"] },
            { title: "Choisissez 3 à 5 chiffres clés (KPI)", bullets: ["Total des ventes, articles vendus, vente moyenne, meilleure vente", "Écrivez comment chacun est calculé", "Écrivez la période : ce mois-ci, cette semaine"] },
            { title: "Moins, c'est mieux", bullets: ["Trop de chiffres cachent les plus importants", "S'il ne répond pas à la question, laissez-le de côté"] }
          ],
          tryIt: "Choisissez un métier qui vous intéresse (par exemple entrepôt, accueil d'une clinique, gérant de magasin ou l'exemple de la boulangerie). Sur papier, écrivez le public, la question en une phrase, la décision et 3 à 5 chiffres clés avec leur mode de calcul et leur période. Gardez cette page : c'est le plan de votre tableau de bord final.",
          youCanNow: "écrire la question d'un tableau de bord pour un vrai public et choisir 3 à 5 chiffres clés qui y répondent.",
          quickCheck: [
            { objective: "O1", q: "Que devez-vous faire EN PREMIER quand vous créez un tableau de bord ?", options: ["Écrire la question et pour qui il est", "Choisir les couleurs des graphiques", "Ajouter tous les graphiques que l'outil propose", "Choisir une police d'écriture"], answer: 0, why: "La question et le public décident quels chiffres et quels graphiques vont sur la page." },
            { objective: "O1", q: "Quel est le meilleur chiffre clé pour « Quels produits rapportent le plus d'argent chaque mois ? »", options: ["Le nombre d'employés", "L'adresse de la boulangerie", "Le total des ventes en dollars par produit, ce mois-ci", "La météo de chaque jour"], answer: 2, why: "Les ventes par produit sur le mois répondent directement à la question." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Nettoyer les données en un tableau bien rangé",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nettoyer une feuille en désordre pour obtenir un tableau bien rangé avec une ligne par enregistrement et une colonne par champ.",
          text: [
            "Les outils de tableau de bord fonctionnent mieux avec un tableau bien rangé : une seule ligne d'en-tête, une ligne pour chaque enregistrement (chaque vente, chaque commande) et une colonne pour chaque champ (Date, Product, Units). Pas de cellules fusionnées, pas de lignes vides, pas de totaux saisis au milieu des données.",
            "Des données en désordre donnent des chiffres faux. Problèmes fréquents : la même vente saisie deux fois (un doublon), des cellules vides, des dates écrites de façons différentes (10/3/26 et Oct 3), des nombres enregistrés comme du texte (« $4.50 » saisi avec une espace) et des différences d'orthographe (« Muffin » et « muffins »).",
            "Dans Google Sheets, vous pouvez corriger presque tout : Données > Nettoyage des données > Supprimer les doublons (en anglais, Data > Data cleanup > Remove duplicates), Format > Nombre pour les dates et la monnaie, et Édition > Rechercher et remplacer pour corriger l'orthographe. Gardez la feuille d'origine et nettoyez une copie, pour toujours pouvoir revenir en arrière.",
            "Données d'entraînement de ce cours (inventées), avec les noms de colonnes en anglais : Date, Product (produit), Category (catégorie), Units (unités), Price (prix), Total. Par exemple 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Faites une copie de la feuille et travaillez sur la copie.", "Vérifiez qu'il y a exactement une ligne d'en-tête avec un nom clair dans chaque colonne.", "Supprimez les lignes vides, les cellules fusionnées et toute ligne de total au milieu des données.", "Supprimez les lignes en double.", "Donnez un seul format à chaque colonne : les dates en dates, l'argent en monnaie, le texte toujours écrit pareil.", "Vérifiez une ligne à la main : Units multiplié par Price doit être égal à Total."],
          words: [["Tableau bien rangé", "des données avec une ligne d'en-tête, une ligne par enregistrement et une colonne par champ."], ["Enregistrement", "une ligne de données, comme une vente."], ["Champ", "une colonne de données, comme Date ou Product."], ["Doublon", "le même enregistrement saisi deux fois."], ["Type de données", "le genre de valeur que contient une colonne : nombre, date, monnaie ou texte."]],
          slides: [
            { title: "Un tableau bien rangé", bullets: ["Une seule ligne d'en-tête", "Une ligne par enregistrement, une colonne par champ", "Pas de cellules fusionnées, de lignes vides ni de totaux saisis"] },
            { title: "Désordres fréquents", bullets: ["Lignes en double", "Dates écrites de façons différentes", "Nombres enregistrés comme du texte", "La même chose écrite de façons différentes"] },
            { title: "Corrections dans Google Sheets", bullets: ["Données > Nettoyage des données > Supprimer les doublons", "Format > Nombre pour les dates et la monnaie", "Édition > Rechercher et remplacer pour l'orthographe"] },
            { title: "Travaillez en sécurité", bullets: ["Nettoyez une copie, gardez l'original", "Vérifiez une ligne à la main : Units x Price = Total"] }
          ],
          tryIt: "Dans Google Sheets, saisissez 15 lignes de ventes inventées de la boulangerie (Date, Product, Category, Units, Price, Total) sur deux semaines. Exprès, ajoutez 1 ligne en double, 1 ligne vide, 1 date écrite en texte (Oct 5) et 1 différence d'orthographe (« muffins »). Puis faites une copie et nettoyez-la en suivant les étapes. Comptez combien de problèmes vous avez corrigés.",
          youCanNow: "repérer et corriger les doublons, les cellules vides, les formats mélangés et les différences d'orthographe pour obtenir un tableau bien rangé.",
          quickCheck: [
            { objective: "O2", q: "Votre feuille affiche « Muffin » et « muffins » comme deux produits. Que faites-vous ?", options: ["Vous laissez comme ça ; l'outil devinera", "Vous supprimez toutes les lignes de muffins", "Vous ajoutez une troisième orthographe", "Vous utilisez Rechercher et remplacer pour que chaque ligne indique « Muffin »"], answer: 3, why: "Une seule orthographe par article permet à l'outil de les additionner correctement." },
            { objective: "O2", q: "Qu'est-ce qui décrit un tableau bien rangé ?", options: ["Des cellules de titre fusionnées au-dessus des données", "Une ligne d'en-tête, une ligne par enregistrement, une colonne par champ", "Une ligne de total au milieu des données", "Deux lignes d'en-tête avec des cellules vides"], answer: 1, why: "Les outils de tableau de bord lisent bien les tableaux bien rangés ; les cellules fusionnées et les totaux saisis les perturbent." }
          ],
          sources: [{ name: "Aide Éditeurs Google Docs : scinder du texte, supprimer les doublons ou les espaces inutiles", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Charger les données dans Power BI Desktop ou Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Charger un tableau bien rangé dans Power BI Desktop ou Data Studio et vérifier le type de données de chaque colonne.",
          text: [
            "Choisissez votre outil. Power BI Desktop est gratuit, il vient de Microsoft et fonctionne sur un ordinateur Windows. Looker Studio, que Google appelle maintenant Data Studio, est gratuit et fonctionne dans un navigateur web : il marche donc sur un Mac, un Chromebook ou un ordinateur de bibliothèque. Les deux sont utilisés dans de vrais emplois ; ce que vous apprenez dans l'un vous sert dans l'autre.",
            "Power BI Desktop : téléchargez-le uniquement sur le site officiel de Microsoft. Enregistrez votre feuille nettoyée en fichier Excel ou CSV. Choisissez Obtenir des données (Get data), sélectionnez le fichier et regardez l'aperçu. Choisissez Transformer les données (Transform data) si une colonne doit être corrigée : cela ouvre l'Éditeur Power Query, où vous pouvez changer le type de données d'une colonne.",
            "Data Studio : connectez-vous avec un compte Google, choisissez Créer, puis Source de données, choisissez le connecteur Google Sheets, sélectionnez votre feuille de calcul et l'onglet, puis choisissez Associer (Connect). Vous verrez la liste de vos champs avec leur type.",
            "Dans les deux outils, vérifiez chaque colonne : Date doit être une date, Units et Total doivent être des nombres, Product doit être du texte. Un nombre enregistré comme du texte ne peut pas être additionné. Les champs que vous comptez ou additionnez (Units, Total) s'appellent souvent mesures ou métriques ; les champs qui servent à regrouper (Product, Date) s'appellent dimensions."
          ],
          steps: ["Choisissez Power BI Desktop (Windows) ou Data Studio (n'importe quel navigateur).", "Power BI : Obtenir des données, choisissez votre fichier Excel ou CSV, regardez l'aperçu, choisissez Charger ou Transformer les données.", "Data Studio : Créer, Source de données, connecteur Google Sheets, choisissez la feuille, Associer.", "Vérifiez le type de chaque colonne : dates, nombres, texte.", "Corrigez tout type erroné avant de créer des graphiques."],
          words: [["Power BI Desktop", "un logiciel gratuit de Microsoft pour Windows qui crée des rapports et des tableaux de bord."], ["Data Studio (Looker Studio)", "l'outil gratuit de Google pour les rapports et tableaux de bord dans le navigateur ; Google a renommé Looker Studio en Data Studio."], ["Source de données", "le fichier ou la feuille où un tableau de bord lit ses données."], ["Éditeur Power Query", "la partie de Power BI où vous nettoyez et mettez en forme les données avant de créer des visuels."], ["Dimension", "un champ qui sert à regrouper, comme Product ou Date."], ["Mesure (métrique)", "un nombre que vous additionnez, comptez ou dont vous faites la moyenne, comme le total des ventes."], ["Fichier CSV", "un simple fichier texte de données dont les valeurs sont séparées par des virgules."]],
          slides: [
            { title: "Deux outils gratuits", bullets: ["Power BI Desktop : gratuit, Windows", "Data Studio (ex-Looker Studio) : gratuit, tout navigateur", "Ce que vous apprenez dans l'un sert dans l'autre"] },
            { title: "Power BI Desktop", bullets: ["Obtenir des données, choisissez votre fichier Excel ou CSV", "Vérifiez l'aperçu", "Transformer les données ouvre l'Éditeur Power Query"] },
            { title: "Data Studio", bullets: ["Créer, puis Source de données", "Connecteur Google Sheets, choisissez la feuille", "Associer, puis vérifiez la liste des champs"] },
            { title: "Vérifiez chaque type de données", bullets: ["Les dates en dates, les nombres en nombres", "Mesures : ce que vous additionnez, comme Total", "Dimensions : ce qui sert à regrouper, comme Product"] }
          ],
          tryIt: "Chargez votre feuille nettoyée de la boulangerie dans Power BI Desktop ou Data Studio. Notez chaque colonne et son type de données. Si un nombre apparaît comme du texte, corrigez-le dans l'outil ou dans la feuille, puis rechargez. Ensuite, dites quels champs sont des dimensions et lesquels sont des mesures.",
          youCanNow: "charger un tableau bien rangé dans Power BI Desktop ou Data Studio et vérifier que chaque colonne a le bon type de données.",
          quickCheck: [
            { objective: "O2", q: "Votre colonne Total a été chargée comme du texte. Que se passe-t-il si vous la laissez ainsi ?", options: ["L'outil ne peut pas additionner correctement les totaux", "Rien ; le texte et les nombres fonctionnent pareil", "Le tableau de bord a plus de couleurs", "Le fichier devient plus petit"], answer: 0, why: "Seules les colonnes de nombres peuvent être additionnées ou moyennées." },
            { objective: "O2", q: "Vous n'avez qu'un Chromebook. Quel outil pouvez-vous utiliser pour ce cours ?", options: ["Power BI Desktop", "Aucun outil ne marchera", "Data Studio dans le navigateur web", "Seulement du papier"], answer: 2, why: "Data Studio fonctionne dans un navigateur ; Power BI Desktop exige Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier le tableau de bord et préparer les données",
        questions: [
          { objective: "O1", q: "Un gérant de magasin veut savoir quel jour de la semaine demande plus de personnel. Quel chiffre clé aide le plus ?", options: ["Le numéro de téléphone du magasin", "Le nombre de produits du catalogue", "Le nombre de clients par jour de la semaine", "La date d'arrivée du gérant"], answer: 2, why: "Les clients par jour montrent directement les jours les plus chargés." },
          { objective: "O1", q: "Combien de chiffres clés un tableau de bord d'une page montre-t-il en général ?", options: ["De 3 à 5", "Un seul", "Le plus possible", "Au moins 20"], answer: 0, why: "Quelques chiffres clés permettent de bien voir les plus importants." },
          { objective: "O2", q: "Quel problème rendrait un total des ventes trop élevé ?", options: ["Une ligne d'en-tête claire", "Des dates au format date", "Une seule orthographe pour chaque produit", "La même vente saisie deux fois"], answer: 3, why: "Une ligne en double compte la même vente deux fois." },
          { objective: "O2", q: "Avant de nettoyer une feuille, que devez-vous faire ?", options: ["Supprimer la ligne d'en-tête", "Faire une copie et nettoyer la copie", "Fusionner toutes les cellules", "Saisir des totaux dans les données"], answer: 1, why: "Garder l'original vous permet de revenir en arrière si une correction tourne mal." },
          { objective: "O2", q: "Product et Date sont des champs qui servent à regrouper. Comment les appelle-t-on ?", options: ["Des mesures", "Des mots de passe", "Des dimensions", "Des filtres"], answer: 2, why: "Les dimensions servent à regrouper ou découper ; les mesures sont des nombres que l'on additionne ou dont on fait la moyenne." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer, vérifier et partager",
      lessons: [
        {
          title: "Choisir le bon graphique",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choisir et créer le graphique qui convient à chaque type de question.",
          text: [
            "Choisissez le graphique selon la question. Une évolution dans le temps (ventes par jour ou par mois) se montre avec un graphique en courbes. Une comparaison entre groupes (ventes par produit) se montre avec un graphique en barres ou en colonnes, trié du plus grand au plus petit. Les parts d'un tout (part des ventes par catégorie) peuvent aller dans un graphique en secteurs (camembert) ou en anneau, mais seulement avec peu de parts ; un graphique en barres est souvent plus clair.",
            "Un chiffre clé seul se montre avec une carte dans Power BI ou un tableau de résultats (scorecard) dans Data Studio. Les valeurs exactes que les gens doivent consulter vont dans un tableau. Une carte géographique n'aide que si le lieu compte.",
            "Pour le créer : dans Power BI Desktop, cliquez sur un visuel dans le volet Visualisations, puis faites glisser une dimension (Product) et une mesure (Total) dans ses champs. Dans Data Studio, choisissez Ajouter un graphique, choisissez le type, puis définissez la dimension et la métrique.",
            "Gardez des graphiques honnêtes : les barres partent de zéro, chaque graphique a un titre clair qui dit ce qu'il montre (« Ventes par produit, octobre ») et vous utilisez une seule couleur, sauf si la couleur a un sens."
          ],
          steps: ["Lisez la question : porte-t-elle sur le temps, la comparaison de groupes, les parts d'un tout ou un seul chiffre ?", "Temps : courbes. Comparer : barres triées. Parts : secteurs avec peu de parts, ou barres. Un chiffre : carte.", "Ajoutez le graphique et définissez la dimension et la mesure.", "Donnez-lui un titre qui dit ce qu'il montre et la période.", "Vérifiez que les barres partent de zéro."],
          words: [["Graphique en courbes", "un graphique qui montre comment un chiffre évolue dans le temps."], ["Graphique en barres", "un graphique de barres qui compare des groupes ; les graphiques en colonnes sont des barres debout."], ["Graphique en secteurs", "un cercle découpé en parts qui montre les parts d'un tout (on dit aussi camembert)."], ["Carte / tableau de résultats", "une case qui affiche un seul grand chiffre, comme le total des ventes."], ["Visuel", "le mot de Power BI pour un graphique, une carte, un tableau ou une carte géographique."]],
          slides: [
            { title: "Le graphique selon la question", bullets: ["Dans le temps : graphique en courbes", "Comparer des groupes : graphique en barres, trié", "Parts d'un tout : peu de parts, ou des barres", "Un chiffre : carte ou tableau de résultats"] },
            { title: "Créez-le", bullets: ["Power BI : choisissez un visuel, faites glisser les champs", "Data Studio : Ajouter un graphique, dimension et métrique"] },
            { title: "Restez honnête", bullets: ["Les barres partent de zéro", "Le titre dit ce qu'il montre et quand", "Une seule couleur, sauf si la couleur a un sens"] }
          ],
          tryIt: "Avec vos données de la boulangerie, créez trois graphiques : (1) le total des ventes par date en graphique en courbes, (2) le total des ventes par produit en graphique en barres trié du plus grand au plus petit, (3) le total des ventes dans une carte ou un tableau de résultats. Donnez à chacun un titre clair. Puis écrivez une phrase sur ce que chaque graphique vous apprend.",
          youCanNow: "choisir un graphique en courbes, en barres, en secteurs, une carte ou un tableau selon la question et le créer avec un titre clair.",
          quickCheck: [
            { objective: "O3", q: "Quel graphique montre le mieux l'évolution des ventes chaque jour de ce mois ?", options: ["Un graphique en secteurs", "Une carte géographique", "Une seule carte", "Un graphique en courbes"], answer: 3, why: "Les graphiques en courbes montrent l'évolution dans le temps." },
            { objective: "O3", q: "Vous voulez comparer les ventes de 8 produits. Qu'est-ce qui est le plus clair ?", options: ["Un graphique en secteurs à 8 parts", "Un graphique en barres trié du plus grand au plus petit", "Une carte géographique", "Un tableau de dates"], answer: 1, why: "Un graphique en barres trié rend la comparaison facile ; 8 parts de camembert sont difficiles à lire." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Organiser le tableau de bord avec des cartes et des filtres",
          objectives: ["O4"],
          minutes: 6,
          goal: "Créer un tableau de bord d'une page avec des cartes de chiffres clés, des graphiques, un filtre de date et un autre filtre.",
          text: [
            "On lit un écran en commençant en haut à gauche. Mettez les cartes de chiffres clés sur une ligne tout en haut, le graphique le plus important juste en dessous et les détails plus bas. Ajoutez un titre pour toute la page et la période qu'elle couvre.",
            "Les filtres permettent à la personne qui regarde de changer ce qu'elle voit. Dans Power BI, ils s'appellent des segments (slicers) : ajoutez un visuel Segment et mettez-y Date, puis ajoutez-en un autre pour Category. Dans Data Studio, ils s'appellent des commandes (controls) : choisissez Ajouter une commande, choisissez Commande de plage de dates, puis ajoutez une commande Liste déroulante pour Category.",
            "Testez les filtres : choisissez une catégorie et vérifiez que chaque carte et chaque graphique change. Si l'un ne change pas, il n'est pas relié aux mêmes données.",
            "Laissez de l'espace vide, alignez les éléments et retirez tout ce qui n'aide pas à répondre à la question. Puis faites le test d'une minute : montrez la page à un ami et posez-lui la question du tableau de bord. Peut-il y répondre en moins d'une minute ?"
          ],
          steps: ["Ajoutez un titre de page et la période.", "Mettez 3 à 5 cartes de chiffres clés sur une ligne en haut.", "Mettez le graphique principal sous les cartes et les autres graphiques plus bas.", "Ajoutez un filtre de date (segment ou commande de plage de dates).", "Ajoutez un autre filtre, par exemple Category.", "Testez : changez chaque filtre et regardez si chaque carte et chaque graphique change.", "Faites le test d'une minute avec une autre personne."],
          words: [["Mise en page", "l'endroit où se trouve chaque carte et chaque graphique sur la page."], ["Filtre", "une commande qui permet de n'afficher qu'une partie des données, comme un seul mois."], ["Segment (slicer)", "le nom que Power BI donne à un filtre sur la page."], ["Commande (control)", "le nom que Data Studio donne à un filtre sur la page, comme une commande de plage de dates."]],
          slides: [
            { title: "Mise en page", bullets: ["Cartes de chiffres clés en haut, sur une ligne", "Graphique principal en dessous, détails plus bas", "Titre de page avec la période"] },
            { title: "Filtres", bullets: ["Power BI : visuel Segment pour Date et Category", "Data Studio : Commande de plage de dates et Liste déroulante"] },
            { title: "Testez-le", bullets: ["Changez un filtre : tout se met-il à jour ?", "Retirez ce qui n'aide pas", "Test d'une minute avec un ami"] }
          ],
          tryIt: "Mettez vos trois graphiques de la leçon 4 sur une seule page. Ajoutez au moins une autre carte de chiffre clé (par exemple les articles vendus ou la vente moyenne), un filtre de date et un filtre Category. Alignez tout. Puis posez la question du tableau de bord à quelqu'un et chronométrez le temps qu'il met pour répondre à partir de la page.",
          youCanNow: "organiser un tableau de bord d'une page avec des cartes de chiffres clés, des graphiques et des filtres qui marchent, lisible en moins d'une minute.",
          quickCheck: [
            { objective: "O4", q: "Où placer en général les cartes de chiffres clés ?", options: ["Sur une ligne tout en haut", "Cachées sur une deuxième page", "Tout en bas", "Dans le graphique en secteurs"], answer: 0, why: "On lit un écran en commençant par le haut, donc les chiffres clés viennent en premier." },
            { objective: "O4", q: "Vous choisissez une catégorie dans le filtre, mais un graphique ne change pas. Qu'est-ce que cela veut dire ?", options: ["Le tableau de bord est terminé", "Ce graphique n'est pas relié aux mêmes données ou au même filtre", "Les filtres ne changent jamais les graphiques", "Il vous faut un écran plus grand"], answer: 1, why: "Chaque carte et chaque graphique doit réagir ; celui qui ne réagit pas doit être corrigé." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Vérifier les chiffres et partager en sécurité",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Vérifier 3 totaux du tableau de bord par rapport aux données sources, puis le partager en lecture seule avec un court résumé.",
          text: [
            "Un tableau de bord n'est utile que si l'on peut s'y fier. Avant que quiconque le voie, vérifiez au moins 3 chiffres. Exemple : la carte indique un total des ventes de 1 240 $. Dans votre feuille, utilisez SUM sur la colonne Total pour les mêmes dates. Est-ce que ça correspond ? Puis vérifiez un produit et un jour de la même façon.",
            "Si un chiffre ne correspond pas, cherchez les causes habituelles : un filtre est encore actif, des doublons sont revenus, une colonne est en texte au lieu d'être en nombres, la période n'est pas la même, ou la carte utilise Nombre (Count) au lieu de Somme (Sum).",
            "Partagez en sécurité. Dans Data Studio, utilisez le bouton Partager et donnez un accès en lecture, pas en modification. Avec Power BI Desktop, exportez la page en PDF ou enregistrez le fichier et envoyez-le seulement à la bonne personne ; publier en ligne peut demander un compte professionnel ou scolaire. Ne mettez jamais de vraies données de clients, de patients ou d'employés dans un tableau de bord d'entraînement.",
            "Ajoutez un résumé de 3 phrases : ce que montre le tableau de bord, le constat le plus important et une action proposée. Exemple : « Ceci montre les ventes de la boulangerie en octobre. Les muffins ont rapporté le plus et le samedi a été le jour le plus chargé. Nous pourrions cuire plus de muffins et ajouter une personne le samedi. »"
          ],
          steps: ["Retirez tous les filtres.", "Vérifiez 3 chiffres par rapport à la feuille source : le total, un produit et un jour.", "Si l'un est faux, vérifiez les filtres, les doublons, les types de données, les dates, et Somme ou Nombre.", "Partagez en lecture seule, ou exportez en PDF.", "Écrivez un résumé de 3 phrases : ce qu'il montre, le constat principal, une action."],
          words: [["Valider", "vérifier qu'un chiffre est juste en le comparant à la source."], ["Accès en lecture seule", "les personnes peuvent voir le tableau de bord mais pas le modifier."], ["Exporter", "enregistrer une copie dans un autre format, comme le PDF."], ["Constat", "une découverte utile qui aide quelqu'un à décider quoi faire."]],
          slides: [
            { title: "Vérifiez avant de partager", bullets: ["Retirez les filtres", "Vérifiez 3 chiffres par rapport à la feuille source", "Le total, un produit, un jour"] },
            { title: "Si un chiffre est faux", bullets: ["Un filtre est encore actif", "Des doublons ou des nombres en texte", "Une autre période, ou Nombre au lieu de Somme"] },
            { title: "Partagez en sécurité", bullets: ["Lecture seule, pas modification", "Ou exportez en PDF", "Aucune vraie donnée privée dans l'entraînement"] },
            { title: "Écrivez un résumé de 3 phrases", bullets: ["Ce qu'il montre", "Le constat principal", "Une action proposée"] }
          ],
          tryIt: "Terminez votre tâche finale : vérifiez 3 chiffres de votre tableau de bord par rapport à votre feuille et notez chaque paire. Corrigez tout écart. Puis partagez-le en lecture seule (Data Studio) ou exportez un PDF (Power BI), et écrivez votre résumé de 3 phrases. Évaluez-vous avec la grille avant de le considérer comme terminé.",
          youCanNow: "vérifier les chiffres d'un tableau de bord par rapport à leur source, le partager en sécurité et expliquer en trois phrases ce qu'il montre.",
          quickCheck: [
            { objective: "O5", q: "Votre carte indique 340 articles vendus, mais SUM de Units dans la feuille donne 310. Que vérifiez-vous d'abord ?", options: ["Les couleurs du graphique", "La police du titre de la page", "Si un filtre est actif ou si des doublons sont revenus", "La luminosité de l'écran"], answer: 2, why: "Les filtres et les doublons sont des causes fréquentes de totaux qui ne correspondent pas." },
            { objective: "O6", q: "Votre responsable a seulement besoin de regarder le tableau de bord. Quel accès lui donnez-vous ?", options: ["Votre mot de passe", "Un accès en modification", "Un accès propriétaire", "Un accès en lecture seule"], answer: 3, why: "La lecture seule lui permet de le voir sans le modifier par erreur." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer, vérifier et partager",
        questions: [
          { objective: "O3", q: "Quel graphique montre UN seul grand chiffre, comme le total des ventes du mois ?", options: ["Un graphique en courbes", "Une carte ou un tableau de résultats", "Une carte géographique", "Un tableau de 100 lignes"], answer: 1, why: "Une carte (Power BI) ou un tableau de résultats (Data Studio) affiche un seul chiffre clé." },
          { objective: "O3", q: "Les barres d'un graphique partent de 900 au lieu de 0. Quel est le problème ?", options: ["De petites différences paraissent beaucoup plus grandes qu'elles ne le sont", "Aucun ; c'est plus joli", "Les couleurs sont fausses", "Le titre est trop long"], answer: 0, why: "Des barres qui ne partent pas de zéro exagèrent les différences." },
          { objective: "O4", q: "Dans Power BI, comment s'appelle un filtre sur la page ?", options: ["Une carte", "Une source", "Une métrique", "Un segment (slicer)"], answer: 3, why: "Power BI appelle les filtres de page des segments ; Data Studio les appelle des commandes." },
          { objective: "O5", q: "Combien de chiffres devez-vous vérifier par rapport à la source avant de partager ?", options: ["Aucun ; l'outil a toujours raison", "Seulement le titre de la page", "Au moins 3, comme le total, un produit et un jour", "Seulement ceux que votre responsable demande"], answer: 2, why: "Vérifier plusieurs chiffres permet de repérer les erreurs de filtre, de doublon et de type." },
          { objective: "O6", q: "Quelle est la meilleure phrase de résumé à partager avec un tableau de bord ?", options: ["« Voici quelques graphiques. »", "« Les muffins ont rapporté le plus en octobre, nous pourrions donc en cuire plus le samedi. »", "« J'ai utilisé beaucoup de couleurs. »", "« Regardez vous-même. »"], answer: 1, why: "Un bon résumé donne le constat et une action proposée." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des tableaux de bord de données (Power BI et Data Studio)",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'un tableau de bord ?", options: ["Une liste de mots de passe", "Un écran de chiffres clés et de graphiques qui aide quelqu'un à décider", "Un type de formule de tableur", "Un réglage d'imprimante"], answer: 1, why: "Un tableau de bord réunit sur un seul écran les chiffres clés d'une décision." },
      { objective: "O1", q: "Laquelle est une question claire pour un tableau de bord ?", options: ["« Montrez-moi des données. »", "« Faites quelque chose de joli. »", "« Tout sur l'entreprise. »", "« Quels produits rapportent le plus d'argent chaque mois ? »"], answer: 3, why: "C'est une question précise à laquelle un tableau de bord peut répondre." },
      { objective: "O1", q: "Pour chaque chiffre clé, vous écrivez son nom, son mode de calcul et :", options: ["Sa période", "Sa couleur préférée", "Le prix de l'outil", "Votre mot de passe"], answer: 0, why: "Un chiffre clé a besoin d'une période, comme ce mois-ci, pour avoir un sens." },
      { objective: "O2", q: "Dans un tableau bien rangé, chaque ligne est :", options: ["Un graphique", "Un total", "Un enregistrement, comme une vente", "Un titre"], answer: 2, why: "Une ligne par enregistrement et une colonne par champ, c'est un tableau bien rangé." },
      { objective: "O2", q: "Les dates de votre feuille sont écrites « 10/3/26 » et « Oct 3 ». Que faites-vous ?", options: ["Vous laissez les deux", "Vous supprimez la colonne des dates", "Vous ajoutez un troisième style", "Vous mettez la colonne en forme pour que chaque date soit une vraie date dans un seul style"], answer: 3, why: "Un seul format de date permet à l'outil de regrouper et de filtrer correctement par date." },
      { objective: "O2", q: "Où obtenir Power BI Desktop ?", options: ["Sur le site web officiel de Microsoft", "Par un lien dans un SMS d'un inconnu", "Sur n'importe quel site de téléchargement gratuit", "Par une publicité qui s'ouvre toute seule"], answer: 0, why: "Téléchargez les logiciels uniquement sur le site officiel de l'entreprise." },
      { objective: "O2", q: "Dans Data Studio, comment connecter une feuille Google Sheets ?", options: ["Envoyer la feuille par e-mail à Google", "Créer une source de données avec le connecteur Google Sheets", "L'imprimer et la scanner", "Ressaisir chaque chiffre"], answer: 1, why: "Le connecteur Google Sheets relie la feuille comme source de données." },
      { objective: "O3", q: "Quelle question convient à un graphique en courbes ?", options: ["Quelle part des ventes vient du pain ?", "Quel est notre numéro de téléphone ?", "Comment les ventes hebdomadaires ont-elles évolué sur 3 mois ?", "Quel magasin se trouve dans quelle ville ?"], answer: 2, why: "Les graphiques en courbes montrent l'évolution dans le temps." },
      { objective: "O3", q: "Quelle question convient à un graphique en barres trié ?", options: ["Lequel de nos 6 produits s'est le plus vendu ?", "Quel est le total des ventes aujourd'hui ?", "À quelle heure ouvre le magasin ?", "Comment les ventes ont-elles évolué heure par heure ?"], answer: 0, why: "Les graphiques en barres comparent des groupes ; le tri fait ressortir le plus grand." },
      { objective: "O3", q: "Quand un graphique en secteurs est-il un choix raisonnable ?", options: ["Pour montrer une évolution sur 12 mois", "Pour montrer une part d'un total avec seulement quelques parts", "Pour comparer 15 produits", "Pour montrer un seul chiffre"], answer: 1, why: "Les secteurs montrent les parts d'un tout et ne se lisent bien qu'avec peu de parts." },
      { objective: "O3", q: "Un bon titre de graphique :", options: ["Dit « Graphique 1 »", "Est laissé vide", "Est écrit en tout petit", "Dit ce qu'il montre et la période"], answer: 3, why: "« Ventes par produit, octobre » dit exactement à la personne ce qu'elle voit." },
      { objective: "O4", q: "Dans Data Studio, un filtre sur la page s'appelle :", options: ["Un segment", "Un type de données", "Une commande", "Une mesure"], answer: 2, why: "Data Studio appelle les filtres de page des commandes, comme la commande de plage de dates." },
      { objective: "O4", q: "Qu'est-ce que le test d'une minute ?", options: ["Poser à quelqu'un la question du tableau de bord et voir s'il peut y répondre avec la page en moins d'une minute", "Créer le tableau de bord en une minute", "Montrer la page une seconde", "Redémarrer l'ordinateur"], answer: 0, why: "Si la personne répond vite, la mise en page fonctionne." },
      { objective: "O4", q: "Vous changez le filtre Category et chaque carte et chaque graphique se met à jour. Cela montre que :", options: ["Les données sont fausses", "Les filtres fonctionnent sur toute la page", "Le tableau de bord a besoin de plus de pages", "Les couleurs sont cassées"], answer: 1, why: "Si tout change ensemble, le filtre est relié à tous les visuels." },
      { objective: "O5", q: "Le total du tableau de bord est de 1 240 $ et SUM dans la feuille pour les mêmes dates donne 1 240 $. Cela veut dire que :", options: ["Le total est vérifié et correspond", "Le tableau de bord est faux", "Vous devez supprimer la feuille", "Il vous faut un nouvel outil"], answer: 0, why: "Comparer avec la source, c'est ainsi qu'on valide un chiffre." },
      { objective: "O5", q: "Une carte affiche 52 alors que vous attendiez un total des ventes de 1 240 $. Une cause probable :", options: ["Le titre de la page", "Les couleurs des barres", "La carte est réglée sur Nombre au lieu de Somme", "La taille de la police"], answer: 2, why: "Nombre donne le nombre de lignes, pas le total des valeurs." },
      { objective: "O5", q: "Quand devez-vous vérifier les chiffres ?", options: ["Jamais", "Seulement après que le chef a trouvé une erreur", "Seulement une fois par an", "Avant que quelqu'un d'autre ne voie le tableau de bord"], answer: 3, why: "Vérifier d'abord évite que des chiffres faux mènent à de mauvaises décisions." },
      { objective: "O6", q: "Qu'est-ce qui ne doit JAMAIS aller dans un tableau de bord d'entraînement ?", options: ["Des ventes inventées d'une boulangerie", "Les noms et numéros de téléphone de vrais clients", "Des catégories de produits", "Des dates"], answer: 1, why: "Les données d'entraînement restent inventées ; les vraies données privées doivent être protégées." },
      { objective: "O6", q: "Que vous apporte ce cours ?", options: ["Le certificat PL-300", "Le certificat CompTIA Data+", "Un permis de conduire", "Une préparation et un tableau de bord pour votre portfolio ; les examens se passent séparément"], answer: 3, why: "Le cours vous prépare ; Microsoft et CompTIA délivrent leurs certifications après leurs propres examens." },
      { objective: "O6", q: "Un bon résumé de 3 phrases contient ce que montre le tableau de bord, le constat principal et :", options: ["Une action proposée", "Votre adresse", "L'histoire de l'outil", "La liste de toutes les lignes"], answer: 0, why: "Une action transforme le constat en décision." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, corrigez cette partie et vérifiez-la de nouveau.",
    criteria: [
      { name: "Question et chiffres clés", objective: "O1", notYet: "Pas de question claire, ou plus de 5 chiffres sans période.", meets: "Question en une phrase, public nommé, 3 à 5 chiffres clés, chacun avec son mode de calcul et sa période.", exceeds: "Nomme aussi la décision que soutient le tableau de bord et pourquoi chaque chiffre compte pour elle." },
      { name: "Données bien rangées", objective: "O2", notYet: "Il reste des doublons, des lignes vides, des formats de date mélangés ou des nombres en texte.", meets: "Une ligne d'en-tête, une ligne par enregistrement, bons types de données, aucun doublon.", exceeds: "Garde la feuille d'origine et une courte note de chaque correction faite." },
      { name: "Bons graphiques", objective: "O3", notYet: "Les types de graphiques ne conviennent pas aux questions, ou les titres manquent.", meets: "Au moins 2 graphiques adaptés à leurs questions, avec des titres clairs ; les barres partent de zéro.", exceeds: "Sait expliquer pourquoi chaque type de graphique a été choisi plutôt qu'un autre." },
      { name: "Mise en page et filtres", objective: "O4", notYet: "Des cartes manquent, ou les filtres ne mettent pas à jour tous les visuels.", meets: "3 cartes de chiffres clés ou plus en haut, un filtre de date et un autre filtre qui mettent tout à jour ; réussit le test d'une minute.", exceeds: "Mise en page nette et alignée, sans rien de superflu ; la personne répond en bien moins d'une minute." },
      { name: "Chiffres vérifiés", objective: "O5", notYet: "Aucun chiffre vérifié par rapport à la source.", meets: "3 chiffres vérifiés et notés ; tout écart corrigé.", exceeds: "Explique la cause d'un écart trouvé et comment il a été corrigé." },
      { name: "Partagé en sécurité avec un résumé", objective: "O6", notYet: "Partagé avec un accès en modification, contient des données privées, ou pas de résumé.", meets: "Partagé en lecture seule ou exporté en PDF, sans données privées, avec un résumé de 3 phrases qui donne un constat et une action.", exceeds: "Le résumé est prêt à être lu à voix haute en entretien d'embauche comme pièce de portfolio." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et créent un tableau de bord conforme à la grille",
      "Apprenants qui ajoutent le tableau de bord à leur CV, leur portfolio ou leur profil LinkedIn dans les 30 jours",
      "Apprenants qui programment ou réussissent le PL-300 ou CompTIA Data+, ou commencent un emploi en données ou en reporting, dans les 6 mois (enquête de suivi)",
      "Apprenants patrons de petites entreprises qui utilisent un tableau de bord pour décider du stock, du personnel ou des prix"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un ordinateur avec internet : Windows pour Power BI Desktop, ou n'importe quel ordinateur avec un navigateur pour Data Studio",
      "Un compte Google gratuit (Google Sheets et Data Studio), et Power BI Desktop téléchargé sur le site officiel de Microsoft si l'on utilise Windows",
      "Les données inventées des ventes de la boulangerie (chaque apprenant saisit 15 lignes ou plus) ou un autre jeu de données inventé lié à son domaine",
      "Papier et stylo pour le plan du tableau de bord",
      "Environ 2 à 3 heures au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Vérifiez d'abord les appareils : les apprenants sur Mac, Chromebook ou ordinateur de bibliothèque utilisent Data Studio ; ceux sous Windows peuvent choisir l'un ou l'autre outil.",
      "Faites passer le test de départ avant la leçon 1 et comparez-le avec le quiz final.",
      "Demandez aux apprenants de garder la page de plan de la leçon 1 ; elle guide toute la tâche finale.",
      "N'utilisez jamais de vraies données de clients, de patients ou d'employés en classe. Rappelez aux anciens militaires et aux personnes en recherche d'emploi d'utiliser aussi des chiffres inventés dans leurs pièces de portfolio.",
      "Évaluez le tableau de bord final avec la grille et demandez à chaque apprenant de le présenter en 60 secondes, comme entraînement à l'entretien.",
      "Renvoyez les apprenants aux pages officielles du PL-300 et de CompTIA Data+ pour le contenu actuel des examens, l'inscription et les coûts ; ne citez pas de prix de mémoire."
    ]
  }
};
