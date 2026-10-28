"use strict";

// Koach Learn course (French translation of workforce/workforce-data-science-certificate.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const GOOGLE_DA = { name: "Coursera : certificat professionnel Google Data Analytics", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera : certificat professionnel IBM Data Science", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn : Microsoft Certified: Power BI Data Analyst Associate (examen PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-fr",
  lang: "fr",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Préparation à un certificat professionnel en science des données",
  skills: "Choisir le bon certificat en données, Faire un plan d'étude hebdomadaire, Nettoyer et résumer un jeu de données, Poser une question sur des données et y répondre avec un graphique, Construire un projet de portfolio",
  outcome: "choisir le certificat en données qui correspond à votre objectif, faire un plan d'étude que vous pourrez tenir, et réaliser un petit projet d'entraînement comme ceux que demandent ces certificats : prendre un vrai jeu de données, le nettoyer, le résumer, faire un graphique clair et écrire ce qu'il signifie.",
  about: [
    "Ce cours s'adresse aux chercheurs d'emploi et aux travailleurs qui veulent passer à un métier des données, ou utiliser les données dans leur emploi actuel, et qui pensent à un certificat en ligne connu, comme le certificat professionnel Google Data Analytics, le certificat professionnel IBM Data Science ou le Power BI Data Analyst Associate de Microsoft.",
    "Il ne remplace pas ces programmes. Il vous y prépare : vous apprendrez ce que chacun couvre, vous choisirez celui qui convient à votre objectif et à votre semaine, et vous pratiquerez les compétences de base qu'ils utilisent tous, sur un petit projet que vous pourrez montrer aux employeurs.",
    "Un certificat est une façon d'apprendre et de montrer ce que vous avez appris. Il ne promet ni emploi ni augmentation. Ce qui aide le plus, c'est d'aller au bout, de pratiquer et de savoir expliquer vos propres projets. Consultez la page actuelle de chaque programme pour son coût, sa durée et son contenu avant de vous inscrire.",
    "Chaque leçon dure environ cinq minutes, avec une tâche pratique. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Réalisez un mini projet de portfolio : choisissez un jeu de données public et gratuit (ou le tableau de ventes d'exemple de la leçon 4), écrivez une question claire, nettoyez les données (cellules vides, doublons et formats), faites un tableau récapitulatif, faites un graphique qui répond à la question, et écrivez un constat en trois phrases avec une limite de vos données. Enregistrez-le dans Google Sheets, Excel ou Google Colab avec un titre court et une description.",
  chapters: [
    {
      name: "Chapitre 1 : Choisir son certificat et prévoir d'aller au bout",
      lessons: [
        {
          title: "Ce que font les analystes de données et les data scientists",
          minutes: 5,
          goal: "Décrire le parcours de travail sur les données et dire quelle partie vous intéresse le plus.",
          text: [
            "Le travail sur les données suit un chemin simple : poser une question, collecter les données, les nettoyer, les explorer et les analyser, les montrer avec des graphiques, et partager ce qu'elles signifient. Le programme de Google décrit la même idée avec ses propres étapes.",
            "Un analyste de données travaille surtout sur ce qui s'est déjà passé : « Quel produit s'est le mieux vendu le mois dernier ? » Il utilise des tableurs, SQL (un langage pour interroger les bases de données) et des outils de tableaux de bord comme Tableau ou Power BI.",
            "Un data scientist (scientifique des données) fait cela aussi, et construit en plus des modèles qui prédisent ou classent : « Quels clients risquent d'arrêter d'acheter ? » Il programme en général en Python et utilise plus de mathématiques. Beaucoup de gens commencent comme analystes et évoluent vers la science des données."
          ],
          words: [["Jeu de données", "un ensemble de données, en général un tableau de lignes et de colonnes."], ["SQL", "Structured Query Language : un langage pour extraire des données des bases de données."], ["Modèle", "un programme qui apprend des régularités dans les données pour prédire ou classer."], ["Tableau de bord", "une page de graphiques qui se met à jour quand les données changent."]],
          slides: [
            { title: "Le parcours des données", bullets: ["Poser une question", "Collecter et nettoyer les données", "Les analyser et en faire des graphiques", "Partager ce qu'elles signifient"] },
            { title: "Analyste de données", bullets: ["Explique ce qui s'est passé", "Tableurs, SQL, Tableau ou Power BI", "« Quel produit s'est le mieux vendu le mois dernier ? »"] },
            { title: "Data scientist", bullets: ["Prédit et classe aussi avec des modèles", "En général Python et plus de maths", "« Quels clients risquent d'arrêter d'acheter ? »"] }
          ],
          tryIt: "Pensez à votre emploi actuel ou au dernier (un magasin, un entrepôt, une clinique, un restaurant). Écrivez trois questions auxquelles les données pourraient répondre, comme « Quelles heures sont les plus chargées ? ». Marquez chacune « analyste » ou « data scientist ».",
          youCanNow: "décrire le parcours de travail sur les données et la différence entre un analyste de données et un data scientist."
        },
        {
          title: "Comparer les certificats en données les plus connus",
          minutes: 6,
          goal: "Comparer trois certificats en données très connus et choisir celui qui correspond à votre objectif.",
          text: [
            "Certificat professionnel Google Data Analytics (sur Coursera) : une série de 9 cours pour débutants, sans expérience requise. Sa page cite les tableurs, SQL, Tableau et les présentations, et sa FAQ indique qu'il enseigne Python. Il prévoit environ 6 mois à raison de 10 heures par semaine.",
            "Certificat professionnel IBM Data Science (sur Coursera) : une série de 12 cours pour débutants. Sa page cite Python, SQL, Jupyter et des bibliothèques comme Pandas, NumPy, Matplotlib et Scikit-learn, et couvre l'analyse de données, la visualisation et les modèles d'apprentissage automatique. Il prévoit environ 4 mois à raison de 10 heures par semaine.",
            "Microsoft Certified: Power BI Data Analyst Associate : une certification de niveau intermédiaire obtenue en réussissant l'examen PL-300, un examen surveillé. Il évalue la préparation, la modélisation, la visualisation et l'analyse des données dans Power BI, et vous le renouvelez gratuitement tous les 12 mois sur Microsoft Learn.",
            "Les coûts, les durées et les listes de cours changent, et certains programmes sont inclus dans des abonnements ou proposés gratuitement par des bibliothèques, des services de l'emploi ou des aides financières. Ouvrez chaque page officielle et vérifiez avant de vous inscrire. Aucun certificat ne garantit un emploi."
          ],
          steps: ["Écrivez votre objectif : analyste, data scientist, ou utiliser les données dans votre emploi actuel.", "Ouvrez la page officielle de chaque certificat.", "Notez son niveau, ses outils, sa durée et son coût actuel.", "Demandez à votre service de l'emploi ou à votre bibliothèque s'il existe un accès gratuit.", "Choisissez-en un, et écrivez pourquoi."],
          words: [["Certificat professionnel", "une série de cours en ligne d'une entreprise ou d'une école qui se termine par un certificat."], ["Examen surveillé", "un examen contrôlé par une personne officielle, sur place ou en ligne, pour éviter la triche."], ["Python", "un langage de programmation populaire utilisé en science des données."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["9 cours sur Coursera, niveau débutant", "Tableurs, SQL, Tableau ; la FAQ cite aussi Python", "Environ 6 mois à 10 heures par semaine (selon sa page)"] },
            { title: "IBM Data Science", bullets: ["12 cours sur Coursera, niveau débutant", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Environ 4 mois à 10 heures par semaine (selon sa page)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Intermédiaire : réussir l'examen PL-300", "Préparer, modéliser, visualiser et analyser dans Power BI", "Renouvellement gratuit tous les 12 mois sur Microsoft Learn"] },
            { title: "Avant de vous inscrire", bullets: ["Vérifiez le coût et la durée sur la page officielle", "Accès gratuit : bibliothèque, service de l'emploi, aides", "Aucun certificat ne garantit un emploi"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Faites un tableau comparatif de trois lignes : certificat, niveau, outils principaux, durée, coût actuel (d'après la page officielle). Entourez celui qui correspond à votre objectif et écrivez une phrase pour dire pourquoi.",
          youCanNow: "comparer les certificats en données de Google, IBM et Microsoft et choisir celui qui correspond à votre objectif."
        },
        {
          title: "Faire un plan d'étude que vous tiendrez",
          minutes: 5,
          goal: "Construire un plan d'étude hebdomadaire qui s'adapte au travail et à la famille.",
          text: [
            "La plupart des gens qui ne terminent pas un certificat arrêtent parce que la vie devient chargée, pas parce que c'était trop difficile. Un plan écrit, avec des heures fixes, rend l'achèvement beaucoup plus probable.",
            "Partez de votre vraie semaine. Si vous travaillez en horaires décalés, choisissez des blocs d'étude adaptés : par exemple trois blocs de 45 minutes en semaine et un bloc de 2 heures le week-end. Étudier peu mais régulièrement vaut mieux qu'une longue séance le week-end.",
            "Chaque semaine, fixez un petit objectif que vous pouvez cocher : « finir le module 2 et son quiz ». Prenez des notes avec vos mots, et faites tous les travaux pratiques : c'est là que la compétence se construit. Un assistant d'IA peut expliquer une idée confuse avec des mots plus simples ou vous interroger, mais faites vous-même le travail noté et respectez les règles d'honnêteté du programme."
          ],
          steps: ["Notez vos heures fixes : travail, famille, sommeil.", "Choisissez 3 à 5 blocs d'étude par semaine et mettez-les dans votre agenda.", "Fixez un objectif hebdomadaire que vous pouvez cocher.", "Demandez à un ami ou à un assistant d'IA de vous interroger sur vos notes.", "Faites le point chaque dimanche et ajustez."],
          words: [["Bloc d'étude", "un moment fixé dans votre agenda pour apprendre."], ["Travaux pratiques", "un exercice concret où vous pratiquez une compétence sur de vraies données ou du vrai code."]],
          slides: [
            { title: "Pourquoi un plan compte", bullets: ["On arrête quand la vie devient chargée", "Un plan écrit avec des heures fixes aide à finir"] },
            { title: "Adaptez-le à votre semaine", bullets: ["3 à 5 courts blocs valent mieux qu'une longue séance", "Exemple : trois blocs de 45 minutes en semaine", "Plus un bloc de 2 heures le week-end"] },
            { title: "Chaque semaine", bullets: ["Un petit objectif que vous pouvez cocher", "Faites tous les travaux pratiques", "L'IA peut vous interroger ; le travail noté, c'est vous"] }
          ],
          tryIt: "Placez quatre blocs d'étude pour la semaine prochaine dans votre téléphone ou votre agenda papier. Écrivez un objectif hebdomadaire tiré du certificat choisi, par exemple « finir le premier module ».",
          youCanNow: "faire un plan d'étude hebdomadaire avec des heures fixes et un objectif que vous pouvez cocher."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir son certificat et prévoir d'aller au bout",
        questions: [
          { q: "Quelle question ressemble le plus au travail d'un analyste de données ?", options: ["Comment réparer un moteur de voiture ?", "Quel produit s'est le mieux vendu le mois dernier ?", "Que cuisiner ce soir ?", "Qui va gagner le match ?"], answer: 1, why: "Les analystes expliquent ce qui s'est passé à partir de données existantes." },
          { q: "Quel certificat s'obtient en réussissant l'examen PL-300 ?", options: ["Le certificat professionnel Google Data Analytics", "Le certificat professionnel IBM Data Science", "Un diplôme de fin d'études secondaires", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "Le Power BI Data Analyst Associate de Microsoft s'obtient en réussissant le PL-300." },
          { q: "Votre objectif est de construire des modèles de prédiction en Python. Quel programme convient le mieux ?", options: ["Le certificat professionnel IBM Data Science", "Un cours de dactylographie", "Un permis de cariste", "Une carte d'hygiène alimentaire"], answer: 0, why: "Le programme d'IBM couvre Python, Scikit-learn et les modèles d'apprentissage automatique." },
          { q: "Un programme coûtait 49 $ par mois l'an dernier. Que faites-vous maintenant ?", options: ["Supposer que c'est pareil", "Demander à un inconnu en ligne", "Vérifier la page officielle aujourd'hui", "Ne pas vérifier"], answer: 2, why: "Les coûts changent ; la page officielle a le coût actuel." },
          { q: "Quel plan d'étude a le plus de chances de marcher pour quelqu'un en horaires décalés ?", options: ["Étudier 10 heures une fois par mois", "Étudier seulement quand on en a envie", "Trois blocs de 45 minutes en semaine et un bloc le week-end", "Sauter les travaux pratiques pour gagner du temps"], answer: 2, why: "De courts blocs réguliers dans l'agenda sont plus faciles à tenir." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Pratiquer les compétences de base",
      lessons: [
        {
          title: "Nettoyer un jeu de données",
          minutes: 6,
          goal: "Trouver et corriger les cellules vides, les doublons et les problèmes de format dans un petit jeu de données.",
          text: [
            "Les vraies données sont désordonnées. Avant d'analyser, on nettoie. Tous les certificats ci-dessus y consacrent du temps, parce que des données fausses donnent des réponses fausses.",
            "Problèmes courants : des cellules vides, la même ligne deux fois (doublons), la même chose écrite de différentes façons (« CA », « Calif. », « California »), des nombres enregistrés comme du texte et des dates dans des formats mélangés.",
            "Dans Google Sheets ou Excel, vous pouvez trier et filtrer pour trouver les problèmes, utiliser Supprimer les doublons, utiliser Rechercher et remplacer pour harmoniser les noms, et changer le format d'une colonne en nombre ou en date. Gardez une copie de l'original et notez chaque modification, pour que les autres puissent faire confiance à votre travail."
          ],
          steps: ["Enregistrez une copie des données d'origine.", "Triez et filtrez chaque colonne pour repérer les vides et les valeurs bizarres.", "Supprimez les lignes en double.", "Harmonisez les orthographes avec Rechercher et remplacer.", "Réglez les formats de nombre et de date.", "Écrivez un court journal de chaque modification."],
          words: [["Nettoyage des données", "corriger les erreurs dans les données avant de les analyser."], ["Doublon", "une ligne qui apparaît plus d'une fois."], ["Journal de nettoyage", "la liste de chaque modification faite aux données."]],
          slides: [
            { title: "Pourquoi nettoyer d'abord", bullets: ["Des données désordonnées donnent des réponses fausses", "Tous les certificats en données l'enseignent"] },
            { title: "Problèmes courants", bullets: ["Cellules vides et lignes en double", "« CA », « Calif. », « California »", "Nombres en texte ; formats de date mélangés"] },
            { title: "Comment les corriger", bullets: ["Trier et filtrer pour trouver les problèmes", "Supprimer les doublons ; Rechercher et remplacer", "Régler les formats de nombre et de date"] },
            { title: "Soyez digne de confiance", bullets: ["Gardez la copie d'origine", "Tenez un journal de chaque modification"] }
          ],
          tryIt: "Faites un petit tableau de 15 ventes : Date, Article, Magasin, Montant. Ajoutez 2 lignes en double, un montant vide et deux orthographes d'un même magasin. Puis nettoyez-le et écrivez votre journal de nettoyage.",
          youCanNow: "trouver et corriger les problèmes de données courants et tenir un journal de nettoyage."
        },
        {
          title: "Résumer des données et faire un graphique clair",
          minutes: 5,
          goal: "Répondre à une question avec un tableau récapitulatif et un graphique.",
          text: [
            "Commencez par une question claire, comme « Quel magasin a le plus vendu le mois dernier ? ». Une bonne question décide des colonnes dont vous avez besoin.",
            "Un tableau récapitulatif regroupe et totalise les données. Dans Sheets ou Excel, un tableau croisé dynamique le fait : mettez Magasin en lignes et la somme de Montant en valeurs. En Python, la bibliothèque Pandas fait la même chose avec groupby. Vous pouvez essayer Python gratuitement dans Google Colab, qui ressemble aux outils du programme d'IBM.",
            "Choisissez ensuite le graphique qui convient : un graphique en barres pour comparer des groupes, un graphique en courbe pour l'évolution dans le temps, et évitez les camemberts avec beaucoup de parts. Donnez-lui un titre qui énonce la réponse, comme « Eastside a le plus vendu en mars », et nommez les axes."
          ],
          steps: ["Écrivez une question.", "Faites un tableau croisé dynamique (ou un groupby avec Pandas).", "Choisissez le graphique : barres pour comparer, courbe pour le temps.", "Écrivez un titre qui énonce la réponse.", "Nommez les axes."],
          words: [["Tableau croisé dynamique", "un outil de tableur qui regroupe et totalise les données."], ["Pandas", "une bibliothèque Python pour travailler avec des tableaux de données."], ["Graphique en barres", "un graphique qui compare des groupes avec des barres de longueurs différentes."]],
          slides: [
            { title: "Commencez par une question", bullets: ["« Quel magasin a le plus vendu le mois dernier ? »", "La question choisit vos colonnes"] },
            { title: "Résumez", bullets: ["Tableur : tableau croisé dynamique", "Python : groupby de Pandas (essayez dans Google Colab)", "Lignes : Magasin. Valeurs : somme de Montant"] },
            { title: "Un graphique clair", bullets: ["Barres pour comparer, courbe pour le temps", "Le titre énonce la réponse", "Nommez les axes"] }
          ],
          sources: [COLAB],
          tryIt: "Reprenez votre tableau nettoyé de la leçon 4. Faites un tableau croisé dynamique du Montant total par Magasin, puis un graphique en barres avec un titre qui énonce la réponse.",
          youCanNow: "transformer une question en tableau récapitulatif et en graphique clair."
        },
        {
          title: "Raconter l'histoire et construire un projet de portfolio",
          minutes: 5,
          goal: "Écrire un court constat et présenter votre travail comme un projet de portfolio.",
          text: [
            "Les employeurs veulent voir que vous savez expliquer des données, pas seulement faire des graphiques. Un bon constat tient en trois phrases : ce que vous avez trouvé, pourquoi c'est important, et une limite des données. Exemple : « Eastside a fait 40 % des ventes de mars. Il faudrait peut-être plus de personnel le samedi. Les données ne couvrent qu'un mois. »",
            "La plupart de ces certificats se terminent par un projet final ou un projet de portfolio. Vous pouvez en commencer un maintenant : un titre, la question, l'origine des données, votre journal de nettoyage, le graphique et votre constat. Utilisez des données publiques gratuites, comme le site de données ouvertes d'une ville, ou votre tableau d'entraînement. N'utilisez jamais de données privées de clients ou d'entreprise sans autorisation.",
            "Un assistant d'IA peut vous aider à vérifier que votre texte est clair, mais assurez-vous que chaque chiffre de votre constat vient de votre propre tableau."
          ],
          steps: ["Écrivez votre constat en trois phrases : résultat, pourquoi c'est important, une limite.", "Rassemblez titre, question, source des données, journal de nettoyage, graphique.", "Vérifiez chaque chiffre avec votre tableau.", "Enregistrez-le dans un endroit que vous pouvez partager, comme un dossier Google Drive ou GitHub."],
          words: [["Projet final", "un projet de fin à la fin d'un programme."], ["Portfolio", "un ensemble de vos travaux que vous montrez aux employeurs."], ["Limite", "un aspect des données qui fait que la réponse n'est peut-être pas complète."]],
          slides: [
            { title: "Un constat en trois phrases", bullets: ["Ce que vous avez trouvé", "Pourquoi c'est important", "Une limite des données"] },
            { title: "Votre projet de portfolio", bullets: ["Titre, question et source des données", "Journal de nettoyage, graphique et constat", "Données publiques ou d'entraînement seulement"] },
            { title: "Avant de partager", bullets: ["Vérifiez chaque chiffre avec votre tableau", "L'IA vérifie la clarté, pas vos faits", "Enregistrez-le là où vous pouvez partager un lien"] }
          ],
          tryIt: "Tâche finale : terminez votre mini projet de portfolio. Question, données nettoyées, journal de nettoyage, tableau récapitulatif, un graphique et un constat en trois phrases avec une limite. Enregistrez-le avec un titre et une courte description.",
          youCanNow: "réaliser et expliquer un petit projet de données comme ceux que demandent les certificats en données."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Pratiquer les compétences de base",
        questions: [
          { q: "Vos données contiennent « CA », « Calif. » et « California ». Que faites-vous ?", options: ["Les harmoniser avec Rechercher et remplacer", "Laisser tel quel", "Supprimer la colonne", "Deviner les totaux"], answer: 0, why: "Harmoniser l'orthographe évite de compter un lieu comme trois." },
          { q: "Pourquoi tenir un journal de nettoyage ?", options: ["Ce n'est pas utile", "Pour grossir le fichier", "Parce que les graphiques en ont besoin", "Pour que les autres puissent faire confiance à vos modifications et les refaire"], answer: 3, why: "Un journal montre exactement ce que vous avez changé." },
          { q: "Quel outil regroupe et totalise les données dans un tableur ?", options: ["Le correcteur d'orthographe", "Un tableau croisé dynamique", "L'aperçu avant impression", "Les commentaires"], answer: 1, why: "Les tableaux croisés dynamiques regroupent et résument." },
          { q: "Vous voulez montrer l'évolution des ventes sur 12 mois. Quel graphique ?", options: ["Un graphique en courbe", "Un camembert", "Pas de graphique", "Une photo"], answer: 0, why: "Les courbes montrent l'évolution dans le temps." },
          { q: "Lequel est un bon constat en trois phrases ?", options: ["« Voici un graphique. »", "« Les données, c'est intéressant. »", "« Eastside a le plus vendu en mars. Il faudrait peut-être plus de personnel le samedi. Les données couvrent un mois. »", "« J'ai utilisé Excel. »"], answer: 2, why: "Il donne le résultat, pourquoi c'est important et une limite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation à un certificat professionnel en science des données",
    questions: [
      { q: "Quelle est en général la première étape du parcours des données ?", options: ["Faire un graphique", "Poser une question", "Acheter un logiciel", "Partager les résultats"], answer: 1, why: "Une question claire guide tout le reste." },
      { q: "Un data scientist, plus qu'un analyste, en général :", options: ["N'utilise que du papier", "Ne fait que saisir des données", "N'utilise jamais de données", "Construit des modèles qui prédisent"], answer: 3, why: "Les data scientists construisent des modèles de prédiction, souvent en Python." },
      { q: "À quoi sert SQL ?", options: ["À dessiner", "À monter des vidéos", "À envoyer des e-mails", "À extraire des données des bases de données"], answer: 3, why: "SQL est un langage pour interroger les bases de données." },
      { q: "Le certificat professionnel Google Data Analytics est proposé sur :", options: ["Microsoft Learn seulement", "Coursera", "Le service des permis de conduire", "Une boutique d'applications"], answer: 1, why: "Sa page officielle est sur Coursera." },
      { q: "Selon sa page, combien de cours compte le certificat professionnel IBM Data Science ?", options: ["3", "9", "12", "20"], answer: 2, why: "La page Coursera d'IBM indique une série de 12 cours." },
      { q: "Sur quel outil porte la certification de Microsoft ?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "C'est le Power BI Data Analyst Associate." },
      { q: "Que garantit l'obtention d'un certificat en données ?", options: ["Un emploi", "Une augmentation", "Rien ; il montre ce que vous avez appris", "Un diplôme universitaire"], answer: 2, why: "Les certificats montrent un apprentissage ; ils ne garantissent pas de résultat." },
      { q: "Avant de vous inscrire, vérifiez le coût sur :", options: ["La page officielle du programme", "Une publicité sur les réseaux sociaux", "Vos notes de l'an dernier", "La mémoire d'une IA"], answer: 0, why: "La page officielle a le coût et le contenu actuels." },
      { q: "Quel plan est le meilleur pour terminer un certificat ?", options: ["Étudier quand il y a du temps", "Fixer des blocs d'étude dans l'agenda avec un objectif hebdomadaire", "Sauter les travaux pratiques", "Étudier une journée par mois"], answer: 1, why: "Des blocs réguliers et planifiés avec des objectifs aident à finir." },
      { q: "En utilisant un assistant d'IA pendant un certificat, vous devez :", options: ["Lui faire faire le travail noté", "L'éviter complètement, toujours", "Coller votre examen", "L'utiliser pour expliquer des idées et vous interroger, et respecter les règles d'honnêteté"], answer: 3, why: "L'IA peut aider à apprendre, mais le travail noté doit être le vôtre." },
      { q: "Où la vraie compétence se construit-elle dans un cours en ligne ?", options: ["En faisant les travaux pratiques", "En regardant seulement les vidéos", "En lisant le titre", "En sautant les quiz"], answer: 0, why: "Les travaux pratiques sont de la pratique concrète." },
      { q: "Qu'est-ce qu'un doublon dans un jeu de données ?", options: ["Une cellule vide", "Un nom de colonne", "Un graphique", "Une ligne qui apparaît plus d'une fois"], answer: 3, why: "Les doublons sont des lignes répétées." },
      { q: "Avant de nettoyer, vous devez :", options: ["Supprimer l'original", "Faire un graphique", "Enregistrer une copie de l'original", "L'envoyer à tout le monde"], answer: 2, why: "Une copie permet de recommencer ou de vérifier votre travail." },
      { q: "Des nombres enregistrés comme du texte peuvent causer :", options: ["Un travail plus rapide", "Des totaux faux", "De meilleurs graphiques", "Rien"], answer: 1, why: "Des nombres en texte peuvent mal s'additionner." },
      { q: "En Python, quelle bibliothèque travaille avec des tableaux comme un tableur ?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas sert à travailler avec des tableaux de données." },
      { q: "Quel outil gratuit permet de faire tourner Python dans un navigateur web ?", options: ["Une calculatrice", "Le Bloc-notes", "Google Colab", "Paint"], answer: 2, why: "Google Colab exécute des notebooks Python en ligne." },
      { q: "Pour comparer les ventes de 5 magasins, le meilleur graphique est en général :", options: ["Un graphique en barres", "Un camembert à 20 parts", "Une carte", "Pas de graphique"], answer: 0, why: "Les barres comparent clairement des groupes." },
      { q: "Un bon titre de graphique :", options: ["« Graphique 1 »", "Énonce la réponse, comme « Eastside a le plus vendu en mars »", "Est laissé vide", "Est très long"], answer: 1, why: "Un titre qui énonce la réponse aide les lecteurs." },
      { q: "Quelles données ne faut-il PAS utiliser dans un portfolio public ?", options: ["Les données ouvertes d'une ville", "Des données privées de clients sans autorisation", "Votre tableau d'entraînement", "Des jeux de données publics gratuits"], answer: 1, why: "Les données privées demandent une autorisation et ne doivent pas être partagées." },
      { q: "Votre constat doit inclure une limite parce que :", options: ["Cela montre de l'honnêteté sur ce que les données peuvent et ne peuvent pas dire", "Cela le rallonge", "Les employeurs n'aiment pas ça", "La loi l'exige"], answer: 0, why: "Indiquer une limite montre une analyse soignée et fiable." }
    ]
  }
};
