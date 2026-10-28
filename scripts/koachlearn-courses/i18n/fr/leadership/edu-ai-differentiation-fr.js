"use strict";

// Koach Learn course (French translation of leadership/edu-ai-differentiation.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-differentiation-fr",
  lang: "fr",
  translationOf: "edu-ai-differentiation",
  category: "Leadership Development",
  name: "La différenciation pédagogique avec l'IA",
  skills: "Rédiger une évaluation diagnostique rapide, Concevoir des tâches par paliers, Construire des tableaux de choix, Former des groupes flexibles à partir de preuves, Animer une classe différenciée, Vérifier l'équité",
  outcome: "différencier une leçon avec l'IA du début à la fin : une évaluation diagnostique rapide, trois tâches par paliers vers le même objectif, un tableau de choix, et un plan de groupes flexibles fondé sur des preuves, vérifiés pour l'exactitude et l'équité.",
  about: [
    "Ce cours s'adresse aux enseignants, aux conseillers pédagogiques et aux responsables d'établissement qui veulent que chaque élève atteigne les objectifs de son niveau par des chemins différents. La différenciation a toujours été difficile parce qu'il faut du temps pour faire plusieurs versions de tout. L'IA peut faire les versions ; c'est toujours l'enseignant qui décide qui a besoin de quoi et pourquoi.",
    "Le chapitre 1 construit les supports : une évaluation diagnostique, des tâches par paliers et des tableaux de choix. Le chapitre 2 porte sur leur utilisation : former des groupes flexibles à partir de preuves, gérer une classe différenciée, et veiller à ce que la différenciation ouvre des portes au lieu d'enfermer les élèves dans des filières faibles.",
    "Ne saisissez jamais de noms d'élèves, de résultats ou d'autres informations identifiantes dans un outil que votre district ou votre administration n'a pas approuvé ; entraînez-vous avec des données inventées. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Différenciez une vraie leçon : rédigez une évaluation diagnostique de cinq questions avec corrigé, trois tâches par paliers qui atteignent toutes le même objectif (plus de soutien, au niveau attendu, approfondissement), un tableau de choix de neuf cases pour s'exercer, et un plan de groupes construit à partir des résultats diagnostiques d'une classe inventée (sans vrais noms). Vérifiez chaque tâche pour l'exactitude et l'équité, et écrivez comment et quand les élèves changeront de groupe.",
  chapters: [
    {
      name: "Chapitre 1 : Construire des supports différenciés",
      lessons: [
        {
          title: "La différenciation en une minute, et où l'IA aide",
          minutes: 5,
          goal: "Expliquer la différenciation selon le niveau de préparation, les intérêts et les préférences d'apprentissage, et nommer le rôle de l'IA.",
          text: [
            "Différencier, c'est adapter la manière dont les élèves atteignent le même objectif d'apprentissage. Les enseignants différencient souvent selon le niveau de préparation (ce qu'un élève sait et sait déjà faire), les intérêts (ce qui le motive) et les préférences d'apprentissage (par exemple lire, discuter, dessiner ou construire). L'objectif reste le même ; le chemin change.",
            "L'IA aide pour la partie lente : produire plusieurs versions d'une tâche, une série d'exemples liés aux intérêts des élèves ou une gamme d'exercices. Elle peut transformer une série de problèmes en trois, ou un texte en versions sur le sport, la musique et la cuisine qui travaillent la même compétence.",
            "L'IA ne connaît pas vos élèves. C'est l'enseignant qui fixe l'objectif, lit les preuves, choisit qui suit quel chemin, et vérifie chaque version pour l'exactitude et l'équité."
          ],
          words: [["Différenciation", "adapter la manière dont les élèves atteignent le même objectif d'apprentissage."], ["Niveau de préparation", "ce qu'un élève sait et sait déjà faire pour une compétence."], ["Préférence d'apprentissage", "une manière dont un élève apprend souvent bien, comme discuter ou dessiner."]],
          slides: [
            { title: "Même objectif, chemins différents", bullets: ["Préparation : ce qu'ils savent maintenant", "Intérêts : ce qui les motive", "Préférence : comment ils travaillent le mieux"] },
            { title: "L'IA fait les versions", bullets: ["Une tâche en trois niveaux", "Même compétence, intérêts différents", "Une gamme d'exercices"] },
            { title: "L'enseignant décide", bullets: ["L'objectif et les preuves", "Qui suit quel chemin", "Vérifications d'exactitude et d'équité"] }
          ],
          tryIt: "Prenez une tâche que vous enseignez. Demandez à l'IA de la réécrire de trois façons pour des intérêts différents (par exemple sport, musique, cuisine) avec la même compétence. Vérifiez que chacune garde la compétence.",
          youCanNow: "expliquer la différenciation et utiliser l'IA pour produire des versions d'une tâche pendant que vous prenez les décisions."
        },
        {
          title: "Évaluations diagnostiques et tâches par paliers",
          minutes: 6,
          goal: "Rédiger une évaluation diagnostique rapide et trois tâches par paliers vers un objectif.",
          text: [
            "Commencez par des preuves. Demandez à l'IA une évaluation diagnostique de cinq questions sur l'objectif : deux questions sur les compétences préalables, deux sur l'objectif lui-même, une question de défi. Demandez un corrigé et ce que suggère chaque mauvaise réponse. Vérifiez chaque question.",
            "Les tâches par paliers atteignent le même objectif avec différents niveaux de soutien et de complexité. Consigne (prompt) : « Objectif : [collez]. Écris trois tâches. Palier 1 : plus de soutien (exemple résolu, étapes, banque de mots). Palier 2 : au niveau attendu. Palier 3 : approfondissement (une tâche plus difficile ou de transfert dans la vie réelle). Les trois doivent faire pratiquer l'objectif. Ajoute les corrigés. »",
            "Vérifiez que le palier 1 n'est pas simplement plus facile, mais accompagné vers le même objectif, et que le palier 3 est plus profond, pas seulement plus long. Dans chaque palier, les élèves doivent finir en ayant pratiqué l'objectif."
          ],
          steps: ["Demandez une évaluation diagnostique de cinq questions avec corrigé.", "Vérifiez chaque question et le corrigé.", "Demandez trois paliers vers le même objectif.", "Palier 1 accompagné, pas plus facile ; palier 3 plus profond, pas plus long.", "Vérifiez tous les corrigés."],
          words: [["Évaluation diagnostique", "une courte vérification avant d'enseigner pour voir ce que les élèves savent déjà."], ["Tâche par paliers", "des versions d'une tâche à différents niveaux de soutien ou de complexité, visant le même objectif."], ["Tâche de transfert", "utiliser une compétence dans une situation nouvelle, souvent tirée de la vie réelle."]],
          slides: [
            { title: "Commencez par des preuves", bullets: ["5 questions : préalables, objectif, défi", "Corrigé et sens des mauvaises réponses"] },
            { title: "Trois paliers, un objectif", bullets: ["Palier 1 : plus de soutien", "Palier 2 : au niveau attendu", "Palier 3 : approfondissement ou transfert"] },
            { title: "Vérifiez les paliers", bullets: ["Palier 1 accompagné, pas plus facile", "Palier 3 plus profond, pas plus long", "Tout le monde pratique l'objectif"] }
          ],
          tryIt: "Rédigez avec l'IA une évaluation diagnostique de cinq questions et trois tâches par paliers pour un objectif. Vérifiez que les trois paliers font pratiquer le même objectif.",
          youCanNow: "créer une évaluation diagnostique et des tâches par paliers qui atteignent toutes le même objectif."
        },
        {
          title: "Les tableaux de choix",
          minutes: 5,
          goal: "Construire avec l'IA un tableau de choix de neuf cases pour s'exercer.",
          text: [
            "Un tableau de choix est une grille d'activités, souvent de neuf cases, qui font toutes pratiquer la même compétence de façons différentes : écrire, dessiner, expliquer à voix haute, résoudre, construire, enseigner à quelqu'un. Les élèves en choisissent un nombre fixé, par exemple trois alignées.",
            "Consigne : « Fais un tableau de choix de 3 sur 3 pour des élèves de 11 ans qui s'exercent à [compétence]. Chaque case est une façon différente de s'exercer : écrire, dessiner, discuter, résoudre des problèmes, créer, situation réelle. Chaque case doit faire pratiquer la compétence. Mets une case obligatoire au centre. »",
            "Vérifiez que chaque case fait vraiment pratiquer la compétence et prend à peu près le même temps, et que le matériel est disponible. Le choix augmente l'engagement ; il ne doit jamais devenir un moyen d'éviter la partie difficile."
          ],
          steps: ["Nommez la compétence et le niveau.", "Demandez un tableau de 3 sur 3 avec des façons variées de s'exercer.", "Faites de la case centrale une case obligatoire.", "Vérifiez que chaque case fait pratiquer la compétence et dure à peu près autant.", "Vérifiez que le matériel est disponible."],
          words: [["Tableau de choix", "une grille d'activités qui font pratiquer la même compétence de façons différentes, parmi lesquelles les élèves choisissent."], ["Case obligatoire", "une activité que chaque élève réalise."]],
          slides: [
            { title: "Une grille de façons de s'exercer", bullets: ["Écrire, dessiner, discuter, résoudre, construire", "Les élèves choisissent, par ex. trois alignées"] },
            { title: "La consigne", bullets: ["3 sur 3, façons variées de s'exercer", "Chaque case fait pratiquer la compétence", "Case obligatoire au centre"] },
            { title: "Vérifiez", bullets: ["Même compétence, durée à peu près égale", "Matériel disponible", "Choisir, pas éviter"] }
          ],
          tryIt: "Construisez avec l'IA un tableau de choix de 3 sur 3 pour une compétence. Vérifiez chaque case et remplacez celles qui ne font pas pratiquer la compétence.",
          youCanNow: "créer des tableaux de choix qui offrent un vrai choix tout en faisant pratiquer la même compétence."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire des supports différenciés",
        questions: [
          { q: "Dans la différenciation, qu'est-ce qui reste identique ?", options: ["Le chemin", "Les supports", "L'objectif d'apprentissage", "Le groupe"], answer: 2, why: "L'objectif reste ; le chemin change." },
          { q: "Que ne connaît PAS l'IA quand on différencie ?", options: ["Vos élèves", "Comment réécrire une tâche", "Comment faire trois niveaux", "Les centres d'intérêt courants"], answer: 0, why: "Les enseignants connaissent les élèves et décident des chemins." },
          { q: "Une bonne tâche de palier 1 est :", options: ["Une compétence différente et plus facile", "Sauter l'objectif", "Seulement du coloriage", "Accompagnée vers le même objectif"], answer: 3, why: "Du soutien, pas un objectif plus bas." },
          { q: "Une bonne tâche de palier 3 est :", options: ["Plus de problèmes identiques", "Plus profonde, comme une tâche de transfert", "Facultative", "Plus courte"], answer: 1, why: "Approfondir, c'est aller en profondeur, pas en quantité." },
          { q: "Chaque case d'un tableau de choix doit :", options: ["Demander du matériel spécial", "Être un jeu", "Prendre des durées différentes", "Faire pratiquer la même compétence"], answer: 3, why: "Choix du chemin, même compétence." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien utiliser la différenciation",
      lessons: [
        {
          title: "Des groupes flexibles fondés sur des preuves",
          minutes: 6,
          goal: "Former des groupes à partir des preuves de l'évaluation diagnostique et prévoir comment les élèves en changent.",
          text: [
            "Les groupes flexibles changent souvent, en fonction des preuves actuelles sur une compétence précise, pas d'une étiquette. Après l'évaluation diagnostique, classez les résultats en groupes pour cet objectif : a besoin de soutien sur les préalables, prêt pour l'objectif, prêt pour l'approfondissement.",
            "L'IA peut vous aider à voir des tendances, mais les résultats des élèves avec leurs noms sont des dossiers scolaires. Faites le tri vous-même dans votre carnet de notes, utilisez un outil approuvé par le district, ou remplacez les noms par des codes avant d'utiliser l'IA. Entraînez-vous avec une classe inventée.",
            "Prévoyez les changements : après chaque vérification (un billet de sortie, une question charnière), les élèves passent dans le groupe qui leur convient maintenant. Écrivez quand vous referez le point et comment un élève progresse. Des groupes qui ne changent jamais deviennent des filières."
          ],
          steps: ["Classez les résultats diagnostiques par compétence, pas par étiquette.", "Utilisez votre carnet de notes ou un outil approuvé ; jamais de noms dans des outils non approuvés.", "Formez trois groupes pour cet objectif.", "Prévoyez un nouveau point après chaque leçon.", "Changez les élèves de groupe quand les preuves changent."],
          words: [["Groupes flexibles", "regrouper les élèves selon les preuves actuelles sur une compétence, en changeant souvent."], ["Filière", "garder longtemps les élèves dans le même groupe de niveau, ce qui peut limiter leurs possibilités."]],
          slides: [
            { title: "Des groupes fondés sur des preuves", bullets: ["Selon la compétence actuelle, pas une étiquette", "Soutien sur les préalables, prêt, approfondissement"] },
            { title: "Protégez les données des élèves", bullets: ["Les résultats avec noms sont des dossiers scolaires", "Carnet de notes ou outil approuvé", "Ou des codes, pas des noms"] },
            { title: "Faites bouger les groupes", bullets: ["Nouveau point après chaque leçon", "Les élèves changent quand les preuves changent", "Des groupes figés deviennent des filières"] }
          ],
          sources: [{ name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Inventez des résultats diagnostiques pour 24 élèves en utilisant des codes (E1 à E24). Formez trois groupes pour l'objectif et écrivez quand et comment les élèves changeront de groupe.",
          youCanNow: "former des groupes flexibles à partir de preuves et les faire évoluer."
        },
        {
          title: "Animer une classe différenciée",
          minutes: 5,
          goal: "Prévoir les routines qui font fonctionner une leçon différenciée en classe.",
          text: [
            "Les leçons différenciées échouent plus souvent à cause de l'organisation que des supports. Prévoyez des routines : comment les élèves connaissent leur tâche (une diapositive ou une carte avec les noms ou les couleurs des groupes), où est le matériel, quoi faire en cas de blocage (« demande à trois camarades avant moi », une carte d'aide), et quoi faire quand on a fini (le tableau de choix).",
            "Prévoyez votre temps : commencez par une courte mini-leçon en classe entière, puis travaillez avec le groupe qui a le plus besoin de vous pendant que les autres travaillent, puis passez voir chaque groupe. L'IA peut rédiger les cartes de tâches, les cartes d'aide et un plan de minutage.",
            "Rendez cela normal. Utilisez des noms de groupes neutres (couleurs ou formes, pas « faibles » et « forts »), changez souvent les groupes, et donnez à chaque groupe un travail intéressant. Les élèves remarquent quand un groupe a toujours les tâches ennuyeuses."
          ],
          steps: ["Montrez clairement sa tâche à chaque groupe.", "Fixez les routines : matériel, blocage, travail fini.", "Mini-leçon, puis temps de l'enseignant avec le groupe qui en a le plus besoin.", "Passez voir chaque groupe.", "Utilisez des noms neutres et un travail intéressant pour tous."],
          words: [["Routine", "une façon habituelle de faire quelque chose que les élèves apprennent et suivent."], ["Enseignement en petit groupe", "l'enseignant enseigne à quelques élèves à la fois pendant que les autres travaillent."]],
          slides: [
            { title: "L'organisation décide du succès", bullets: ["Cartes de tâches claires", "Routines : matériel, blocage, travail fini"] },
            { title: "Prévoyez votre temps", bullets: ["Courte mini-leçon en classe entière", "Rejoignez le groupe qui a le plus besoin de vous", "Passez voir chaque groupe"] },
            { title: "Rendez cela normal", bullets: ["Noms de groupes neutres", "Les groupes changent souvent", "Un travail intéressant pour chaque groupe"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger des cartes de tâches pour vos trois paliers, une carte d'aide pour les élèves bloqués, et un plan de minutage pour un cours de 50 minutes.",
          youCanNow: "animer une leçon différenciée avec des routines claires et des pratiques de groupe équitables."
        },
        {
          title: "Vérifier l'équité de la différenciation",
          minutes: 6,
          goal: "Vérifier que la différenciation ouvre des portes au lieu d'abaisser les attentes.",
          text: [
            "La différenciation peut discrètement devenir des attentes plus basses : certains élèves ont toujours des tâches plus faciles et n'atteignent jamais l'objectif de leur niveau. Vérifiez quatre choses. Même objectif : chaque élève pratique-t-il l'objectif du niveau de la classe ? Mouvement : les élèves ont-ils changé de groupe pendant la séquence ?",
            "Tendances : regardez (avec des protections de la vie privée) qui se retrouve dans chaque groupe au fil du temps. Si les élèves d'une même origine, ceux qui apprennent la langue de l'école ou ceux en situation de handicap sont toujours dans le groupe de soutien, demandez-vous pourquoi. Accès : les aides comme la lecture à voix haute ou les visuels atteignent-elles chaque élève qui en a besoin, y compris les aménagements obligatoires des plans IEP et 504 ?",
            "Les supports de l'IA demandent la même vérification : les exemples et les prénoms sont-ils variés et respectueux, sans stéréotypes sur qui est doué pour quoi ? Les responsables peuvent demander aux équipes d'apporter une leçon différenciée en réunion et de faire cette vérification ensemble."
          ],
          steps: ["Même objectif pour chaque palier ?", "Les élèves ont-ils changé de groupe ?", "Qui est toujours dans quel groupe, et pourquoi ?", "Les aides et les aménagements obligatoires atteignent-ils tout le monde ?", "Les exemples de l'IA sont-ils variés et sans stéréotypes ?"],
          words: [["Attentes", "ce que les enseignants croient que les élèves peuvent réussir, ce qui influence ce qu'on leur enseigne."], ["Stéréotype", "une idée injuste et figée sur un groupe de personnes."]],
          slides: [
            { title: "Attention aux attentes plus basses", bullets: ["Chaque palier atteint l'objectif du niveau", "Les élèves changent de groupe"] },
            { title: "Regardez les tendances", bullets: ["Qui est toujours dans le groupe de soutien ?", "Langue, handicap, origine", "Demandez-vous pourquoi"] },
            { title: "Accès et contenu", bullets: ["Aides et aménagements pour tous", "Exemples de l'IA variés, sans stéréotypes"] }
          ],
          tryIt: "Tâche finale : rassemblez votre leçon différenciée (évaluation diagnostique avec corrigé, trois paliers, tableau de choix, plan de groupes à partir de données inventées avec règles de changement), puis appliquez-lui les quatre vérifications d'équité et corrigez tout ce qui échoue.",
          youCanNow: "différencier des leçons avec l'IA en gardant des attentes élevées pour chaque élève."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien utiliser la différenciation",
        questions: [
          { q: "Les groupes flexibles reposent sur :", options: ["Une étiquette de l'an dernier", "La popularité des élèves", "Les preuves actuelles sur une compétence précise", "Le plan de classe"], answer: 2, why: "Ce sont les preuves sur la compétence actuelle qui décident." },
          { q: "Vous voulez que l'IA aide à classer des résultats diagnostiques. Qu'est-ce qui est sûr ?", options: ["Utiliser des codes au lieu des noms, ou un outil approuvé", "Coller noms et résultats dans un outil gratuit", "Publier les résultats en ligne", "Les envoyer par courriel à un fournisseur"], answer: 0, why: "Les résultats avec noms sont des dossiers scolaires." },
          { q: "Quels noms de groupes sont les meilleurs ?", options: ["Faibles, moyens, forts", "Des couleurs ou des formes", "Malins et lents", "Les notes des élèves"], answer: 1, why: "Des noms neutres évitent d'étiqueter les élèves." },
          { q: "Les élèves qui apprennent la langue de l'école sont dans le groupe de soutien pendant toute la séquence. Que faites-vous ?", options: ["Vous demander pourquoi et vérifier si le groupe reflète la langue plutôt que la compréhension", "Rien", "Rendre cela permanent", "Les retirer de la classe"], answer: 0, why: "Les tendances peuvent révéler des groupes injustes." },
          { q: "Quel est le risque des groupes qui ne changent jamais ?", options: ["Aucun", "Ils font gagner du temps", "Ils améliorent l'apprentissage", "Ils deviennent des filières"], answer: 3, why: "Des groupes figés limitent les possibilités." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : La différenciation pédagogique avec l'IA",
    questions: [
      { q: "La différenciation signifie :", options: ["Donner des objectifs différents", "Adapter la manière dont les élèves atteignent le même objectif", "Des classes séparées", "Moins de travail pour certains"], answer: 1, why: "Même objectif, chemins différents." },
      { q: "Le niveau de préparation désigne :", options: ["L'âge", "Le fait d'être à l'heure", "Ce qu'un élève sait et sait déjà faire", "Seulement la vitesse de lecture"], answer: 2, why: "Il est propre à chaque compétence." },
      { q: "Les versions liées aux intérêts gardent :", options: ["Aucune compétence", "Des compétences différentes", "La même compétence", "Seulement le sujet"], answer: 2, why: "Le contexte change, pas la compétence." },
      { q: "Qui décide quel élève suit quel chemin ?", options: ["L'enseignant", "L'IA", "Le fournisseur", "Les parents de l'élève seuls"], answer: 0, why: "Les enseignants lisent les preuves et décident." },
      { q: "Une évaluation diagnostique se fait :", options: ["Seulement pour certains élèves", "À la fin de l'année", "Jamais", "Avant d'enseigner"], answer: 3, why: "Elle montre le point de départ des élèves." },
      { q: "Une bonne évaluation diagnostique comprend :", options: ["Seulement les questions les plus difficiles", "Les préalables, l'objectif et une question de défi", "Seulement des questions d'opinion", "Rien sur l'objectif"], answer: 1, why: "Elle montre la diversité des niveaux de préparation." },
      { q: "Les tâches par paliers visent :", options: ["Seulement les meilleurs élèves", "Des objectifs différents", "Aucun objectif", "Le même objectif"], answer: 3, why: "Les paliers varient le soutien et la complexité, pas l'objectif." },
      { q: "Une tâche de transfert :", options: ["Recopie une réponse", "Change un élève d'école", "Utilise une compétence dans une situation nouvelle", "Est un examen de rattrapage"], answer: 2, why: "Elle approfondit l'apprentissage." },
      { q: "Un tableau de choix a en général :", options: ["Neuf cases d'activités pour la même compétence", "Une seule activité", "Seulement des jeux", "Des notes"], answer: 0, why: "Une grille de façons de s'exercer." },
      { q: "La case obligatoire d'un tableau de choix est :", options: ["Facultative", "Réalisée par chaque élève", "Pour l'enseignant", "Seulement pour les élèves avancés"], answer: 1, why: "Elle garantit l'exercice essentiel." },
      { q: "Les cases d'un tableau de choix doivent prendre :", options: ["À peu près le même temps", "Des durées très différentes", "Aucun temps", "Seulement le temps des devoirs"], answer: 0, why: "Un choix équitable demande un effort semblable." },
      { q: "Les résultats des élèves avec leurs noms sont :", options: ["La propriété des entreprises d'IA", "Publics", "Sans risque dans n'importe quelle application", "Des dossiers scolaires protégés par FERPA"], answer: 3, why: "Protégez-les." },
      { q: "Remplacer les noms par des codes comme E1 aide à :", options: ["Noter plus vite", "Protéger la vie privée des élèves quand on s'entraîne avec l'IA", "Cacher les notes aux enseignants", "Rien"], answer: 1, why: "Les codes retirent les noms identifiants." },
      { q: "Les élèves doivent changer de groupe :", options: ["Seulement à la fin de l'année", "Jamais", "Quand de nouvelles preuves montrent un changement", "Au hasard"], answer: 2, why: "Flexible veut dire qui change avec les preuves." },
      { q: "Les leçons différenciées échouent souvent à cause :", options: ["De classes lumineuses", "De trop d'idées", "De l'organisation et des routines", "De noms trop courts"], answer: 2, why: "Les routines les font fonctionner." },
      { q: "« Demande à trois camarades avant moi » est une routine pour :", options: ["Quand les élèves sont bloqués", "Quand les élèves ont fini", "Se mettre en rang", "Le déjeuner"], answer: 0, why: "Elle développe l'autonomie." },
      { q: "Pendant le travail en groupes, l'enseignant doit d'abord rejoindre :", options: ["Le chef d'établissement", "Personne", "Seulement le groupe d'approfondissement", "Le groupe qui a le plus besoin de lui"], answer: 3, why: "Le temps de l'enseignant va là où il compte le plus." },
      { q: "La différenciation devient des attentes plus basses quand :", options: ["Chaque palier atteint l'objectif", "Certains élèves ne pratiquent jamais l'objectif du niveau", "Les groupes changent souvent", "Des aides sont proposées"], answer: 1, why: "Tous les élèves ont besoin de l'objectif du niveau." },
      { q: "Dans une leçon différenciée, les aménagements IEP et 504 obligatoires :", options: ["S'appliquent seulement aux tests", "Sont remplacés par les paliers", "Sont facultatifs", "Doivent toujours être fournis"], answer: 3, why: "Ils sont obligatoires." },
      { q: "Les exemples produits par l'IA doivent être vérifiés pour :", options: ["Seulement la longueur", "Seulement la taille de police", "La variété et les stéréotypes", "Rien"], answer: 2, why: "Les supports doivent être justes et respectueux." }
    ]
  }
};
