"use strict";

// Koach Learn course (French translation of leadership/edu-ai-stem.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-stem-fr",
  lang: "fr",
  translationOf: "edu-ai-stem",
  category: "Leadership Development",
  name: "L'IA dans l'enseignement des sciences, technologies, ingénierie et mathématiques (STIM)",
  skills: "Produire des problèmes de STIM avec des solutions vérifiées, Utiliser l'IA comme aide au code dans des enquêtes sur des données, Enseigner comment l'IA apprend à partir de données, Vérifier les affirmations de l'IA comme un scientifique, Utiliser l'IA dans la démarche de conception en ingénierie, Concevoir des tâches qui montrent le raisonnement",
  outcome: "concevoir et enseigner une leçon de STIM dans laquelle les élèves utilisent l'IA comme un outil, pour aider à écrire du code, analyser des données ou trouver des idées de conception, puis vérifient ses résultats comme des scientifiques et des ingénieurs, avec des tâches qui rendent visible le raisonnement des élèves.",
  about: [
    "Ce cours s'adresse aux enseignants, conseillers pédagogiques et responsables en sciences, technologie, ingénierie et mathématiques (STIM, en anglais STEM). L'IA est à la fois un outil pour apprendre les STIM et un sujet de STIM à part entière. Les élèves doivent apprendre à l'utiliser, à la vérifier et à comprendre comment elle fonctionne.",
    "Le chapitre 1 utilise l'IA comme outil pour l'enseignant et l'élève : séries de problèmes avec solutions vérifiées, simulations et graphiques, et enquêtes sur des données où l'IA aide à écrire du code. Le chapitre 2 fait de l'IA le sujet d'étude : comment les machines apprennent à partir de données, vérifier les affirmations de l'IA comme un scientifique, l'IA dans la démarche de conception en ingénierie, et des tâches qui gardent le raisonnement des élèves au centre.",
    "L'usage des outils d'IA par les élèves dépend de l'approbation de votre district ou de votre administration et des règles d'âge de chaque outil. Gardez les informations sur les élèves hors des outils non approuvés. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Préparez et (si possible) enseignez une leçon de STIM où les élèves utilisent un outil d'IA approuvé dans le cadre d'une enquête, par exemple en demandant à l'IA de les aider à écrire du code Python dans Google Colab pour tracer le graphique d'un jeu de données public, ou à trouver des idées de conception pour un défi d'ingénierie. La leçon doit comprendre une étape de vérification (les élèves vérifient le code, les chiffres ou les affirmations de l'IA à l'aide de données, d'un calcul ou d'un test), une tâche où les élèves expliquent leur raisonnement avec leurs propres mots, et un niveau d'usage de l'IA pour la tâche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des enseignants de sciences, de technologie, d'ingénierie et de mathématiques, des conseillers pédagogiques et des responsables d'établissement qui veulent que les élèves utilisent l'IA comme outil dans leurs enquêtes et leurs projets de conception, tout en construisant un vrai raisonnement.",
    startingPoint: "Ils savent enseigner les contenus de STIM, mener des travaux pratiques et donner des séries d'exercices. Certains ont utilisé un assistant IA pour créer des exercices. Peu ont une routine pour vérifier les calculs, le code ou les affirmations de l'IA, ou pour concevoir des tâches où le raisonnement des élèves reste visible.",
    gap: "L'IA fait des erreurs avec assurance dans les calculs en plusieurs étapes, le code, les schémas et les références, et elle peut résoudre à la place des élèves beaucoup de problèmes de manuel. Les enseignants ont besoin de leçons où les élèves utilisent l'IA comme le feraient des scientifiques et des ingénieurs : comme une aide dont le résultat est une hypothèse à tester, en expliquant eux-mêmes leur raisonnement.",
    constraints: [
      "Temps : des leçons courtes qui tiennent dans une heure de préparation",
      "Appareils : un ordinateur de l'école ; certains outils (Google Colab, Teachable Machine) demandent des comptes et l'approbation du district ou de l'administration",
      "Vie privée et règles : vérifiez la politique de votre district et les conditions de l'outil avant que les élèves utilisent une IA ou un outil en ligne",
      "Les ressources des outils gratuits ne sont pas garanties : prévoyez un plan de secours et faites enregistrer souvent le travail des élèves",
      "Chaque problème, explication ou morceau de code produit par l'IA doit être vérifié avant que les élèves le voient"
    ],
    prerequisites: "Aucun. Les enseignants qui découvrent les outils d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exercices de STIM produits par l'IA avec leurs solutions", action: "vérifier chaque solution avec une seconde méthode, une calculatrice ou un outil de graphiques", standard: "avant que les élèves voient le moindre problème" },
    { id: "O2", condition: "À partir d'un jeu de données public et d'une IA d'aide au code", action: "préparer une enquête sur des données où les élèves commentent chaque ligne de code, prédisent le résultat et vérifient un chiffre à la main", standard: "en incluant chaque étape de compréhension" },
    { id: "O3", condition: "À partir d'une explication, d'une analogie ou d'un schéma de l'IA", action: "repérer et corriger les idées fausses en les comparant à votre programme ou à une source fiable", standard: "avant de l'utiliser en classe" },
    { id: "O4", condition: "Avec un outil gratuit ou une activité débranchée avec des cartes", action: "expliquer comment l'apprentissage automatique utilise des données d'entraînement pour faire des prédictions, et pourquoi des données variées comptent", standard: "avec un exemple qui fonctionne en classe" },
    { id: "O5", condition: "À partir d'une affirmation de l'IA, comme une statistique, une conversion ou une référence", action: "appliquer la routine affirmation, preuve, test, conclusion", standard: "en concluant par accepter, rejeter ou pas assez de preuves, avec une raison" },
    { id: "O6", condition: "En préparant une tâche de STIM ou un défi de conception", action: "concevoir une tâche où les élèves montrent leur propre raisonnement, et indiquer son niveau d'usage de l'IA", standard: "avec une étape de vérification et une explication dans les mots des élèves" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'IA comme outil pour les STIM",
      lessons: [
        {
          objectives: ["O1"],
          title: "Des séries de problèmes avec solutions vérifiées",
          minutes: 5,
          goal: "Produire des exercices de STIM avec l'IA et vérifier chaque solution.",
          text: [
            "L'IA peut produire rapidement beaucoup de problèmes d'entraînement : problèmes concrets tirés de la vie réelle, problèmes à plusieurs niveaux de difficulté, et solutions détaillées étape par étape. Cela fait gagner du temps, mais l'IA est connue pour faire des erreurs de calcul et de raisonnement, surtout dans les problèmes en plusieurs étapes, et peut donner une mauvaise réponse avec assurance.",
            "Vérifiez donc chaque solution. Faites-la vous-même, vérifiez-la avec une calculatrice ou un outil de graphiques comme Desmos, ou demandez à l'IA de vérifier sa réponse par une seconde méthode et comparez. Si les deux méthodes ne concordent pas, faites le calcul vous-même.",
            "Demandez des problèmes avec des nombres simples pour l'entraînement, ou des nombres réalistes et moins ronds pour l'application. Demandez les erreurs fréquentes des élèves sur chaque problème ; elles font de bonnes questions de discussion."
          ],
          steps: ["Demandez des problèmes au niveau et dans le contexte voulus.", "Demandez des solutions étape par étape.", "Faites ou vérifiez chaque réponse avec une calculatrice ou un outil de graphiques.", "Demandez une seconde méthode et comparez.", "Demandez les erreurs fréquentes à discuter."],
          words: [["Solution détaillée", "une solution qui montre chaque étape."], ["Vérifier", "contrôler que quelque chose est juste avec une autre méthode ou une autre source."]],
          slides: [
            { title: "Des exercices rapides", bullets: ["Problèmes concrets tirés de la vie réelle", "Plusieurs niveaux de difficulté", "Solutions étape par étape"] },
            { title: "L'IA fait des erreurs de maths", bullets: ["Surtout dans les problèmes en plusieurs étapes", "Elle peut se tromper avec assurance", "Vérifiez chaque réponse"] },
            { title: "Comment vérifier", bullets: ["Faites-le vous-même", "Calculatrice ou outil de graphiques comme Desmos", "Seconde méthode ; comparez"] }
          ],
          tryIt: "Demandez à l'IA six problèmes en plusieurs étapes sur un sujet que vous enseignez, avec les solutions. Vérifiez chacun et comptez combien étaient faux.",
          youCanNow: "produire des exercices de STIM avec l'IA et vérifier chaque solution avant que les élèves la voient.",
          quickCheck: [
            { objective: "O1", q: "En maths, où l'IA risque-t-elle particulièrement de se tromper ?", options: ["En recopiant l'énoncé d'un problème", "Dans les problèmes en plusieurs étapes", "En écrivant le contexte d'un problème concret", "En choisissant des nombres simples"], answer: 1, why: "L'IA fait des erreurs de calcul et de raisonnement, surtout sur plusieurs étapes." },
            { objective: "O1", q: "La solution détaillée de l'IA et votre vérification à la calculatrice donnent des réponses différentes. Que faites-vous ?", options: ["Faire confiance à l'IA parce qu'elle a montré les étapes", "Faire confiance à la calculatrice sans regarder", "Supprimer le problème sans vérifier", "Résoudre le problème vous-même"], answer: 3, why: "Quand deux méthodes ne sont pas d'accord, la leçon dit de résoudre le problème vous-même." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Enquêtes sur des données avec l'IA comme aide au code",
          minutes: 6,
          goal: "Préparer une enquête sur des données où l'IA aide à écrire du code que les élèves vérifient et expliquent.",
          text: [
            "Les vraies données rendent les STIM concrètes. Les élèves peuvent étudier des jeux de données publics (météo, santé, sport, environnement) dans Google Colab, un carnet Python gratuit dans le navigateur ; il faut un compte Google, et les ressources gratuites ne sont pas garanties, donc enregistrez souvent. Vérifiez d'abord les règles de votre district sur les comptes Google des élèves.",
            "L'IA peut servir d'aide au code : les élèves décrivent ce qu'ils veulent (« lis ce fichier CSV et fais un graphique en courbe de la température par mois ») et l'IA propose du code. Beaucoup d'élèves peuvent alors exécuter du code qu'ils ne savaient pas encore écrire seuls, et en apprendre.",
            "Intégrez la compréhension : les élèves doivent ajouter un commentaire à chaque ligne pour expliquer ce qu'elle fait, prédire le graphique avant d'exécuter le code, et vérifier un nombre du résultat à la main. S'ils ne peuvent pas expliquer le code, ils ne l'ont pas encore appris."
          ],
          steps: ["Choisissez un jeu de données public et une question.", "Les élèves demandent à l'IA de les aider à écrire le code d'une étape.", "Les élèves commentent chaque ligne avec leurs propres mots.", "Ils prédisent le résultat, puis exécutent le code.", "Ils vérifient un nombre à la main."],
          words: [["Jeu de données", "un ensemble organisé de données, souvent un tableau."], ["CSV", "un format de fichier simple pour les tableaux, avec des valeurs séparées par des virgules."], ["Commentaire de code", "une note dans le code, qui commence souvent par #, et qui explique ce que fait le code."]],
          slides: [
            { title: "Vraies données, outils gratuits", bullets: ["Données publiques : météo, santé, sport", "Google Colab : gratuit, dans le navigateur", "Vérifiez les règles du district sur les comptes élèves"] },
            { title: "L'IA comme aide au code", bullets: ["Décrire l'étape avec des mots", "L'IA propose du code", "Les élèves exécutent ce qu'ils ne savaient pas encore écrire"] },
            { title: "Construire la compréhension", bullets: ["Commenter chaque ligne", "Prédire, puis exécuter", "Vérifier un nombre à la main"] }
          ],
          sources: [{ name: "FAQ de Google Colab", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Trouvez un jeu de données public sur un sujet qui intéresse vos élèves. Utilisez l'IA pour vous aider à écrire dans Colab un code qui trace le graphique d'une variable, ajoutez un commentaire à chaque ligne et vérifiez un nombre à la main.",
          youCanNow: "préparer une enquête sur des données où l'IA aide pour le code et où les élèves montrent qu'ils comprennent.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que Google Colab ?", options: ["Un carnet Python gratuit qui fonctionne dans le navigateur", "Un logiciel de statistiques payant", "Un outil qui ne fait que des diapositives", "Un jeu de données météo"], answer: 0, why: "Colab permet aux élèves d'exécuter du Python dans un navigateur avec un compte Google." },
            { objective: "O2", q: "Un élève a exécuté du code écrit par l'IA et obtenu un graphique, mais il ne sait pas dire ce que fait le code. Que faites-vous ?", options: ["Accepter le graphique comme travail terminé", "Lui faire commenter chaque ligne avec ses propres mots et vérifier un chiffre à la main", "Demander à l'IA d'écrire un programme plus long", "Lui mettre une note plus basse et passer à autre chose"], answer: 1, why: "Si l'élève ne sait pas expliquer le code, il ne l'a pas encore appris." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Simulations, visuels et explications",
          minutes: 5,
          goal: "Utiliser l'IA pour créer des explications et des visuels, et y repérer les idées fausses.",
          text: [
            "L'IA peut expliquer des notions de STIM de plusieurs façons (une analogie, une explication pas à pas, une histoire) et proposer des schémas, des simulations ou des démonstrations. Des outils gratuits de simulation et de graphiques comme les simulations PhET et Desmos permettent aux élèves d'explorer ; l'IA peut vous aider à écrire les questions qui guident l'exploration.",
            "Attention aux idées fausses. Les analogies de l'IA peuvent induire en erreur (par exemple, expliquer le courant électrique par l'écoulement de l'eau d'une façon qui ne tient plus), et les schémas produits par l'IA peuvent être scientifiquement faux. Vérifiez chaque explication avec votre programme et une source fiable.",
            "Une bonne idée en classe : donnez aux élèves une explication de l'IA contenant une erreur, voulue ou réelle, et demandez-leur de la trouver et de la corriger. Repérer les erreurs dans les résultats de l'IA est une compétence scientifique."
          ],
          steps: ["Demandez à l'IA deux ou trois explications d'une notion.", "Vérifiez chacune avec votre programme et une source fiable.", "Utilisez l'IA pour écrire des questions qui guident une simulation.", "Vérifiez l'exactitude scientifique des schémas.", "Faites trouver aux élèves les erreurs dans une explication de l'IA."],
          words: [["Simulation", "un modèle informatique qui permet d'explorer le fonctionnement de quelque chose."], ["Analogie", "expliquer quelque chose en le comparant à quelque chose de familier."], ["Idée fausse", "une erreur de compréhension fréquente sur le fonctionnement de quelque chose."]],
          slides: [
            { title: "Explications et simulations", bullets: ["Plusieurs façons d'expliquer une idée", "Questions guides pour PhET ou Desmos"] },
            { title: "Attention aux idées fausses", bullets: ["Les analogies peuvent induire en erreur", "Les schémas de l'IA peuvent être faux", "Vérifiez avec une source fiable"] },
            { title: "Trouvez l'erreur", bullets: ["Donnez aux élèves une explication erronée de l'IA", "Ils la trouvent et la corrigent"] }
          ],
          tryIt: "Demandez à l'IA d'expliquer de deux façons différentes une notion de STIM que vous enseignez. Repérez les idées fausses dans chacune et rédigez une tâche « trouve l'erreur » pour les élèves.",
          youCanNow: "utiliser les explications et les simulations de l'IA tout en repérant leurs idées fausses.",
          quickCheck: [
            { objective: "O3", q: "Quel est le risque d'une analogie de l'IA en sciences ?", options: ["Elle est toujours trop longue", "Elle ne peut pas être imprimée", "Elle peut induire en erreur là où l'analogie ne tient plus", "Elle ne fonctionne qu'en maths"], answer: 2, why: "Des analogies comme l'eau pour le courant électrique peuvent ne plus tenir et créer des idées fausses." },
            { objective: "O3", q: "Un schéma produit par l'IA que vous comptez montrer semble faux à un endroit. Que faites-vous ?", options: ["Le comparer à votre programme ou à une source fiable et le corriger", "Le montrer quand même puisque l'IA l'a fait", "Demander aux élèves de l'apprendre par cœur", "Supprimer tous vos schémas faits par l'IA"], answer: 0, why: "Les schémas de l'IA peuvent être scientifiquement faux : vérifiez-les avant de les utiliser." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA comme outil pour les STIM",
        questions: [
          { objective: "O1", q: "L'IA donne une solution étape par étape à un problème en plusieurs étapes. Vous devez :", options: ["L'utiliser telle quelle", "L'allonger", "La vérifier avant que les élèves la voient", "Supprimer les étapes"], answer: 2, why: "L'IA fait des erreurs de calcul et de raisonnement." },
          { objective: "O1", q: "Une bonne façon de vérifier une réponse de l'IA est de :", options: ["La vérifier par une seconde méthode ou une calculatrice", "Reposer la même question et accepter la même réponse", "Lui faire confiance si elle a l'air sûre", "Demander à un élève de deviner"], answer: 0, why: "Une seconde méthode repère les erreurs." },
          { objective: "O2", q: "Les ressources gratuites de Google Colab sont :", options: ["Garanties et illimitées", "Seulement payantes", "Réservées aux enseignants", "Non garanties ; enregistrez souvent"], answer: 3, why: "Colab indique que les ressources gratuites ne sont pas garanties." },
          { objective: "O2", q: "Des élèves ont utilisé l'IA pour écrire du code. Comment montrent-ils qu'ils comprennent ?", options: ["En l'exécutant sans le lire", "En commentant chaque ligne avec leurs mots et en vérifiant un résultat à la main", "En le copiant dans un autre carnet", "En demandant à l'IA de l'expliquer à l'enseignant"], answer: 1, why: "Expliquer et vérifier construisent la compréhension." },
          { objective: "O3", q: "Pourquoi donner aux élèves une explication de l'IA contenant une erreur ?", options: ["Pour les embrouiller", "C'est un test de vitesse", "Pour gagner du temps", "Repérer les erreurs de l'IA est une compétence scientifique"], answer: 3, why: "Vérifier les affirmations, c'est ce que font les scientifiques." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'IA comme sujet d'étude en STIM",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comment les machines apprennent à partir de données",
          minutes: 6,
          goal: "Enseigner l'idée de base de l'apprentissage automatique avec un exemple pratique.",
          text: [
            "L'apprentissage automatique est un sujet de STIM que les élèves peuvent comprendre. L'idée centrale : au lieu d'écrire des règles, on montre à un programme beaucoup d'exemples étiquetés (les données d'entraînement) ; il y trouve des régularités, puis fait des prédictions sur de nouveaux exemples. Sa précision dépend des données : trop peu d'exemples, ou des exemples pas assez variés, mènent à de mauvaises prédictions.",
            "En pratique : des outils gratuits comme Teachable Machine de Google permettent aux élèves d'entraîner un classificateur simple d'images ou de sons dans un navigateur ; vérifiez ses conditions et l'approbation de votre district avant l'usage par les élèves. Une version débranchée marche aussi : les élèves trient des cartes d'animaux selon leurs caractéristiques et écrivent des règles, puis les testent sur de nouvelles cartes.",
            "Posez ensuite les grandes questions : que se passe-t-il si les données d'entraînement ne montrent qu'un seul type d'exemple ? Comment mesurer la précision ? Cela relie l'apprentissage automatique aux statistiques, à la qualité des données et à l'équité."
          ],
          steps: ["Expliquez : des exemples étiquetés entrent, des régularités sont trouvées, des prédictions sortent.", "Entraînez un classificateur simple, ou faites le tri de cartes débranché.", "Testez-le sur de nouveaux exemples.", "Changez les données d'entraînement et observez ce qui se passe.", "Discutez de la précision, de la qualité des données et de l'équité."],
          words: [["Apprentissage automatique", "des programmes qui apprennent des régularités à partir d'exemples au lieu de suivre des règles écrites à la main."], ["Données d'entraînement", "les exemples étiquetés à partir desquels un programme apprend."], ["Classificateur", "un programme qui range des éléments dans des catégories."]],
          slides: [
            { title: "L'apprentissage automatique en une ligne", bullets: ["Des exemples étiquetés en entrée", "Des régularités trouvées", "Des prédictions sur de nouveaux exemples"] },
            { title: "En pratique", bullets: ["Entraîner un classificateur simple dans un navigateur", "Ou un tri de cartes débranché", "Vérifiez d'abord conditions et approbation"] },
            { title: "Grandes questions", bullets: ["Et si les données sont déséquilibrées ?", "Comment mesurer la précision ?", "Liens avec les statistiques et l'équité"] }
          ],
          tryIt: "Préparez une activité de 20 minutes où les élèves entraînent (ou simulent sans appareil) un classificateur simple, puis changent les données d'entraînement et expliquent ce qui est arrivé à ses prédictions.",
          youCanNow: "enseigner l'idée centrale de l'apprentissage automatique avec une activité pratique.",
          quickCheck: [
            { objective: "O4", q: "Quelle est l'idée centrale de l'apprentissage automatique ?", options: ["Une personne écrit chaque règle à la main", "Le programme mémorise une seule réponse", "L'ordinateur devine au hasard", "Un programme trouve des régularités dans beaucoup d'exemples étiquetés"], answer: 3, why: "L'apprentissage automatique apprend à partir de données d'entraînement plutôt que de règles écrites à la main." },
            { objective: "O4", q: "Votre classe n'a pas d'appareils pour Teachable Machine. Que faites-vous ?", options: ["Sauter ce thème", "Faire la version débranchée : trier des cartes d'animaux selon leurs caractéristiques, écrire des règles, tester sur de nouvelles cartes", "Montrer seulement une vidéo", "Attendre l'année prochaine"], answer: 1, why: "L'activité débranchée avec des cartes enseigne la même idée sans appareils." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vérifier les affirmations de l'IA comme un scientifique",
          minutes: 5,
          goal: "Enseigner aux élèves une routine pour tester les affirmations de l'IA à l'aide de preuves.",
          text: [
            "La pensée scientifique est la meilleure défense contre les erreurs de l'IA. Enseignez une routine en quatre étapes. Affirmation : que dit exactement l'IA ? Preuve : quelles données ou quelle source montreraient que c'est vrai ? Test : vérifier l'affirmation avec des données, un calcul, une expérience ou une source fiable. Conclusion : accepter, rejeter ou « pas assez de preuves ».",
            "Entraînez-vous avec des affirmations de STIM que l'IA pourrait rater : une conversion d'unités, une statistique, une affirmation de cause à effet, une formule chimique, ou une référence qui n'existe peut-être pas. Les élèves apprennent que les sources de l'IA doivent être retrouvées et vérifiées, pas crues sur parole.",
            "Cette routine marche dans toutes les matières et construit l'habitude que vous voulez pour la vie : un résultat de l'IA est une hypothèse à tester, pas une réponse à recopier."
          ],
          steps: ["Affirmation : énoncez exactement ce que dit l'IA.", "Preuve : qu'est-ce qui montrerait que c'est vrai ?", "Test : données, calcul, expérience ou source fiable.", "Conclusion : accepter, rejeter ou pas assez de preuves."],
          words: [["Affirmation", "une déclaration selon laquelle quelque chose est vrai."], ["Hypothèse", "une idée que l'on peut tester."], ["Référence", "l'indication de la source d'une information."]],
          slides: [
            { title: "Routine en quatre étapes", bullets: ["Affirmation", "Preuve", "Test", "Conclusion"] },
            { title: "Affirmations pour s'entraîner", bullets: ["Conversions d'unités et statistiques", "Cause et effet", "Références qui n'existent peut-être pas"] },
            { title: "L'habitude pour la vie", bullets: ["Un résultat de l'IA est une hypothèse", "Testez-le, ne le recopiez pas"] }
          ],
          tryIt: "Recueillez trois affirmations de STIM d'un outil d'IA sur un sujet que vous enseignez. Passez chacune par la routine en quatre étapes et notez celles qui ont tenu.",
          youCanNow: "apprendre aux élèves à tester les affirmations de l'IA comme des scientifiques.",
          quickCheck: [
            { objective: "O5", q: "Dans la routine de vérification, qu'est-ce qui vient juste après « Affirmation » ?", options: ["Conclusion", "Test", "Preuve", "Publication"], answer: 2, why: "La routine est : Affirmation, Preuve, Test, Conclusion." },
            { objective: "O5", q: "L'IA donne aux élèves une statistique avec une référence. Que doivent-ils faire ?", options: ["Copier la référence dans leur compte rendu", "Demander à l'IA si la référence est réelle", "Ignorer la statistique", "Retrouver la source et vérifier qu'elle existe et dit bien cela"], answer: 3, why: "Les sources de l'IA doivent être retrouvées et vérifiées, pas crues sur parole." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Conception en ingénierie et tâches qui montrent le raisonnement",
          minutes: 6,
          goal: "Utiliser l'IA dans la démarche de conception en ingénierie et concevoir des tâches où le raisonnement reste visible.",
          text: [
            "Dans la démarche de conception en ingénierie (définir le problème, chercher des idées, planifier, construire, tester, améliorer), l'IA est surtout utile aux étapes de recherche d'idées et d'amélioration : produire beaucoup d'idées de conception, proposer des tests, ou expliquer pourquoi un prototype a échoué. Les élèves continuent de choisir, construire, tester et justifier.",
            "Comme l'IA peut résoudre beaucoup de problèmes de manuel, concevez des tâches où le raisonnement est visible : demandez aux élèves d'expliquer pourquoi une méthode marche, de comparer deux méthodes, de trouver une erreur, de faire une prédiction avant de calculer, ou d'appliquer l'idée à leurs propres données ou à leur propre conception. Les explications orales et les cahiers de laboratoire montrent la réflexion.",
            "Indiquez un niveau d'usage de l'IA sur chaque tâche pour que les élèves sachent quand l'IA est un outil et quand la compétence doit être montrée seul, et expliquez pourquoi."
          ],
          steps: ["Utilisez l'IA pour chercher des idées et améliorer la conception.", "Les élèves choisissent, construisent, testent et justifient.", "Concevez des tâches : expliquer, comparer, trouver des erreurs, prédire, appliquer.", "Utilisez les explications orales et les cahiers de laboratoire.", "Indiquez le niveau d'usage de l'IA de chaque tâche."],
          words: [["Démarche de conception en ingénierie", "le cycle qui consiste à définir un problème, concevoir, construire, tester et améliorer."], ["Prototype", "un premier modèle construit pour tester une idée."], ["Cahier de laboratoire", "un compte rendu de ce qu'un élève a fait, observé et conclu."]],
          slides: [
            { title: "L'IA dans la conception en ingénierie", bullets: ["Trouver beaucoup d'idées", "Proposer des tests ; expliquer les échecs", "Les élèves choisissent, construisent, testent, justifient"] },
            { title: "Gardez le raisonnement visible", bullets: ["Expliquer pourquoi, comparer des méthodes", "Trouver l'erreur, prédire d'abord", "Appliquer à leurs données ou leur conception"] },
            { title: "Indiquez le niveau d'usage de l'IA", bullets: ["Quand l'IA est un outil", "Quand la compétence se montre seul"] }
          ],
          tryIt: "Tâche finale : préparez votre leçon de STIM où les élèves utilisent un outil d'IA approuvé dans une enquête ou un défi de conception, avec une étape de vérification, une tâche de raisonnement avec leurs propres mots et un niveau d'usage de l'IA. Enseignez-la si possible et notez ce que les élèves ont trouvé en vérifiant l'IA.",
          youCanNow: "piloter un apprentissage des STIM où les élèves utilisent l'IA comme un outil, la vérifient rigoureusement et gardent leur propre raisonnement visible.",
          quickCheck: [
            { objective: "O6", q: "À quelles étapes de la démarche de conception en ingénierie l'IA est-elle la plus utile ?", options: ["Chercher des idées et améliorer", "Seulement construire et tester", "Seulement définir le problème", "Aucune étape"], answer: 0, why: "L'IA aide à trouver des idées et à expliquer les échecs ; les élèves choisissent, construisent, testent et justifient toujours eux-mêmes." },
            { objective: "O6", q: "L'IA peut résoudre votre série d'exercices du manuel. Que changez-vous pour que le raisonnement reste visible ?", options: ["Donner davantage des mêmes exercices", "Interdire les calculatrices", "Demander aux élèves de prédire d'abord et d'expliquer pourquoi la méthode fonctionne", "Donner les réponses à l'avance"], answer: 2, why: "Prédire, expliquer et comparer des méthodes montrent une réflexion que l'IA ne peut pas faire à leur place." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'IA comme sujet d'étude en STIM",
        questions: [
          { objective: "O4", q: "En apprentissage automatique, les données d'entraînement sont :", options: ["La note finale", "Le code du programme", "Les exemples étiquetés à partir desquels un programme apprend", "Un mot de passe"], answer: 2, why: "Les régularités sont apprises à partir d'exemples." },
          { objective: "O4", q: "Un classificateur entraîné seulement sur des photos d'une seule race de chien va probablement :", options: ["Faire de mauvaises prédictions sur des exemples variés", "Reconnaître parfaitement tous les animaux", "Refuser de fonctionner", "Devenir plus rapide"], answer: 0, why: "Des données déséquilibrées mènent à de mauvaises prédictions." },
          { objective: "O5", q: "Quelle est l'étape 3 de la routine de vérification ?", options: ["Affirmation", "Test", "Preuve", "Conclusion"], answer: 1, why: "On teste l'affirmation avec des données ou une source fiable." },
          { objective: "O5", q: "L'IA donne une référence pour une statistique. Les élèves doivent :", options: ["Retrouver la source et vérifier qu'elle existe et dit bien cela", "La recopier", "L'ignorer", "Citer l'IA à la place"], answer: 0, why: "Les références données par l'IA peuvent ne pas exister." },
          { objective: "O6", q: "Quelle tâche garde le mieux le raisonnement des élèves visible ?", options: ["Résoudre 20 problèmes du manuel à la maison", "Seulement regarder une vidéo", "Recopier le corrigé", "Prédire avant de calculer et expliquer pourquoi la méthode marche"], answer: 3, why: "La prédiction et l'explication montrent la réflexion." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA dans l'enseignement des sciences, technologies, ingénierie et mathématiques (STIM)",
    questions: [
      { objective: "O1", q: "STEM (STIM en français) signifie :", options: ["Élèves, enseignants, éditeurs, gestionnaires", "Sciences, technologie, ingénierie et mathématiques", "Étudier, tester, évaluer, mémoriser", "Logiciels, outils, courriel, médias"], answer: 1, why: "Ce sont les quatre domaines." },
      { objective: "O1", q: "L'IA fait particulièrement d'erreurs sur :", options: ["Des listes de couleurs", "Des messages de salutation", "Les problèmes de maths en plusieurs étapes", "L'orthographe des mots courants"], answer: 2, why: "Le raisonnement en plusieurs étapes cause des erreurs." },
      { objective: "O1", q: "Desmos est utile pour :", options: ["Les courriels", "Noter les dissertations", "Tracer des graphiques et vérifier des maths", "Faire l'appel"], answer: 2, why: "Les outils de graphiques vérifient les réponses visuellement." },
      { objective: "O1", q: "Demander à l'IA les erreurs fréquentes sur un problème vous donne :", options: ["Des questions de discussion sur les idées fausses", "La réponse finale", "Une note", "Un raccourci"], answer: 0, why: "Les erreurs alimentent de bonnes discussions." },
      { objective: "O2", q: "Google Colab est :", options: ["Une application vidéo", "Un ordinateur portable payant", "Un outil de notation", "Un carnet Python gratuit dans le navigateur"], answer: 3, why: "Il exécute du Python en ligne." },
      { objective: "O2", q: "Un fichier CSV est :", options: ["Une image", "Un fichier de tableau simple avec des valeurs séparées par des virgules", "Une vidéo", "Un fichier de mots de passe"], answer: 1, why: "C'est un format courant pour les jeux de données." },
      { objective: "O2", q: "Un commentaire de code explique :", options: ["Rien", "La météo", "La note de l'élève", "Ce que fait une ligne de code"], answer: 3, why: "Les commentaires montrent la compréhension." },
      { objective: "O2", q: "Prédire un graphique avant d'exécuter le code aide les élèves à :", options: ["Exécuter le code plus vite", "Sauter l'apprentissage", "Réfléchir à ce que le code devrait faire", "Éviter automatiquement les erreurs"], answer: 2, why: "La prédiction construit le raisonnement." },
      { objective: "O3", q: "Les analogies de l'IA en sciences peuvent :", options: ["Induire en erreur quand elles ne tiennent plus", "N'être jamais fausses", "Remplacer les expériences", "Prouver des affirmations"], answer: 0, why: "Vérifiez les analogies pour repérer les idées fausses." },
      { objective: "O3", q: "Une simulation permet aux élèves de :", options: ["Éviter de réfléchir", "Explorer le fonctionnement de quelque chose avec un modèle", "Se noter eux-mêmes", "Sauter la leçon"], answer: 1, why: "Les modèles soutiennent l'exploration." },
      { objective: "O4", q: "L'apprentissage automatique trouve :", options: ["Des régularités dans des exemples étiquetés", "Seulement des règles écrites à la main", "Des mots de passe", "Des fichiers perdus"], answer: 0, why: "Il apprend à partir des données." },
      { objective: "O4", q: "Si les données d'entraînement ne sont pas variées, les prédictions :", options: ["S'arrêtent complètement", "Sont toujours justes", "Deviennent plus rapides", "Peuvent être fausses pour de nouveaux exemples"], answer: 3, why: "La qualité des données détermine la précision." },
      { objective: "O4", q: "Avant que les élèves utilisent un outil comme Teachable Machine, vérifiez :", options: ["Sa couleur", "Ses conditions et l'approbation de votre district", "Sa popularité", "Rien"], answer: 1, why: "L'usage par les élèves demande une approbation et une vérification de l'âge." },
      { objective: "O4", q: "Une activité d'apprentissage automatique débranchée utilise :", options: ["Seulement des téléphones", "Seulement des ordinateurs portables", "Des cartes et des règles, sans appareils", "Des robots"], answer: 2, why: "Les idées peuvent s'enseigner sans appareils." },
      { objective: "O5", q: "Dans la routine de vérification, la « conclusion » peut être :", options: ["Toujours rejeter", "Toujours accepter", "Accepter, rejeter ou pas assez de preuves", "Être sautée"], answer: 2, why: "Ce sont les preuves qui décident." },
      { objective: "O5", q: "Un résultat de l'IA doit être traité comme :", options: ["Une hypothèse à tester", "Une réponse finale", "Une loi", "Une note"], answer: 0, why: "Testez avant de faire confiance." },
      { objective: "O6", q: "Dans la conception en ingénierie, l'IA est surtout utile pour :", options: ["Noter les conceptions", "Construire le prototype à la place des élèves", "Tester elle-même les matériaux physiques", "Chercher des idées et améliorer"], answer: 3, why: "Les élèves continuent de construire, tester et justifier." },
      { objective: "O6", q: "Un prototype est :", options: ["Un produit final", "Un premier modèle pour tester une idée", "Une note de test", "Une licence de logiciel"], answer: 1, why: "Les prototypes sont testés et améliorés." },
      { objective: "O6", q: "Un cahier de laboratoire montre :", options: ["Les présences", "Seulement la réponse finale", "Le plan de l'enseignant", "Ce qu'un élève a fait, observé et conclu"], answer: 3, why: "Il rend la réflexion visible." },
      { objective: "O6", q: "Chaque tâche de STIM doit porter :", options: ["Un mot de passe", "Un prix", "Un niveau d'usage de l'IA", "Rien"], answer: 2, why: "Les élèves doivent savoir quand l'IA est permise." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "L'IA comme outil dans une enquête",
        objective: "O2",
        notYet: "L'IA fait l'enquête à la place des élèves, ou l'outil n'est pas approuvé.",
        meets: "Les élèves utilisent un outil d'IA approuvé pour une partie précise, comme écrire du code ou chercher des idées de conception.",
        exceeds: "Les élèves prédisent aussi ce que devrait montrer le résultat de l'IA avant de l'exécuter."
      },
      {
        name: "Étape de vérification",
        objective: "O5",
        notYet: "Aucune étape où les élèves vérifient le résultat de l'IA.",
        meets: "Les élèves vérifient le code, les chiffres ou les affirmations de l'IA à l'aide de données, d'un calcul ou d'un test.",
        exceeds: "Les élèves notent une conclusion : accepter, rejeter ou pas assez de preuves, avec une raison."
      },
      {
        name: "Raisonnement avec leurs propres mots",
        objective: "O6",
        notYet: "Les élèves rendent seulement une réponse ou un graphique.",
        meets: "Une tâche où les élèves expliquent leur raisonnement avec leurs propres mots.",
        exceeds: "Les élèves comparent aussi deux méthodes ou trouvent une erreur."
      },
      {
        name: "Niveau d'usage de l'IA",
        objective: "O6",
        notYet: "Aucun niveau d'usage de l'IA n'est indiqué.",
        meets: "La tâche porte un niveau d'usage de l'IA.",
        exceeds: "Le plan explique aux élèves pourquoi ce niveau convient à la tâche."
      },
      {
        name: "Supports vérifiés par l'enseignant",
        objective: "O1",
        notYet: "Les problèmes, le code ou les explications produits par l'IA n'ont pas été vérifiés.",
        meets: "Chaque solution et chaque explication produite par l'IA a été vérifiée avant le cours.",
        exceeds: "Le plan nomme la méthode de vérification, comme une calculatrice, Desmos ou une source fiable."
      }
    ]
  },
  evaluation: {
    results: [
      "Les enseignants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les enseignants qui donnent une leçon de STIM avec une étape de vérification de l'IA dans les 30 jours (enquête de suivi)",
      "Les élèves qui savent citer une erreur de l'IA qu'ils ont trouvée et comment ils l'ont vérifiée",
      "Les enseignants qui suivent un autre cours Koach Learn sur l'IA pour les éducateurs"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un assistant IA autorisé par votre district ou votre administration",
      "Des outils gratuits comme Desmos, les simulations PhET, Google Colab ou Teachable Machine, s'ils sont approuvés",
      "Une leçon de STIM ou un défi de conception que vous enseignerez bientôt",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Animez-le comme une séance d'équipe disciplinaire : passez le test de départ ensemble, puis demandez à chaque enseignant de préparer une leçon pour sa propre classe.",
      "Vérifiez l'approbation du district et les règles de comptes élèves avant que quiconque essaie Colab ou Teachable Machine avec des élèves.",
      "Faites échanger aux binômes une série d'exercices produite par l'IA pour qu'ils vérifient les solutions l'un de l'autre avec une seconde méthode.",
      "Utilisez l'activité débranchée avec des cartes quand les appareils ou les approbations ne sont pas prêts.",
      "Notez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
