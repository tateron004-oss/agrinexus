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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des enseignants, des conseillers pédagogiques et des responsables d'établissement qui veulent que chaque élève atteigne les objectifs de son niveau par des chemins différents, et qui commencent à utiliser l'IA pour gagner du temps de préparation.",
    startingPoint: "Ils savent préparer et enseigner une leçon à toute la classe et faire passer un quiz. Certains ont essayé un assistant IA pour des fiches d'exercices. Peu ont une méthode pour créer rapidement des tâches par paliers, des tableaux de choix ou des groupes flexibles.",
    gap: "Faire plusieurs versions de chaque tâche demande plus de temps que la plupart des enseignants n'en ont : la différenciation est souvent abandonnée ou devient des groupes fixes de faibles et de forts. Les enseignants doivent utiliser l'IA pour produire les versions tout en gardant les décisions, en protégeant la vie privée des élèves et en gardant des attentes élevées pour chacun.",
    constraints: [
      "Temps : des leçons courtes qui tiennent dans une heure de préparation",
      "Appareils : un ordinateur de l'école avec un assistant IA autorisé par le district ou l'administration",
      "Vie privée : aucun nom, résultat ou détail identifiant d'élève dans un outil non approuvé ; l'entraînement se fait avec des données inventées",
      "Les aménagements IEP et 504 obligatoires doivent toujours être fournis dans chaque version",
      "Chaque tâche produite par l'IA doit être vérifiée par l'enseignant pour l'exactitude et l'équité avant utilisation"
    ],
    prerequisites: "Aucun. Les enseignants qui découvrent les outils d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une tâche que vous enseignez", action: "expliquer la différenciation selon le niveau de préparation, les intérêts et les préférences d'apprentissage, et décrire ce que fait l'IA et ce que décide l'enseignant", standard: "en gardant le même objectif d'apprentissage dans chaque version" },
    { id: "O2", condition: "À partir d'un objectif d'apprentissage et d'un assistant IA", action: "créer une évaluation diagnostique de cinq questions avec corrigé et trois tâches par paliers", standard: "avec les trois paliers qui font pratiquer le même objectif" },
    { id: "O3", condition: "À partir d'une compétence à pratiquer", action: "créer un tableau de choix de neuf cases avec une case obligatoire", standard: "avec chaque case qui fait pratiquer la compétence et prend à peu près le même temps" },
    { id: "O4", condition: "À partir des résultats diagnostiques d'une classe inventée", action: "former des groupes à partir des preuves et écrire quand et comment les élèves changent de groupe", standard: "en utilisant des codes au lieu des noms et sans groupes fixes" },
    { id: "O5", condition: "En préparant une leçon différenciée", action: "prévoir les routines, les cartes de tâches et le minutage de la classe", standard: "en couvrant comment les élèves trouvent leur tâche, quoi faire quand ils sont bloqués et quoi faire quand ils ont fini" },
    { id: "O6", condition: "À partir d'une leçon différenciée terminée", action: "vérifier le même objectif, les changements de groupe, les tendances et l'accès, et corriger tout ce qui échoue", standard: "en réussissant les quatre vérifications d'équité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire des supports différenciés",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "expliquer la différenciation et utiliser l'IA pour produire des versions d'une tâche pendant que vous prenez les décisions.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui change quand vous différenciez une leçon ?", options: ["Le chemin que suivent les élèves vers l'objectif", "L'objectif d'apprentissage lui-même", "Les attendus du niveau", "Les élèves qui passent l'examen final"], answer: 0, why: "Dans la différenciation, l'objectif reste le même ; seul le chemin change." },
            { objective: "O1", q: "L'IA transforme votre tâche de lecture en une version sport, une version musique et une version cuisine. Que faites-vous ensuite ?", options: ["Les distribuer sans les lire", "Vérifier que chaque version fait toujours pratiquer la même compétence", "Donner la version sport à tous les élèves", "Demander à l'IA de choisir quel élève reçoit quelle version"], answer: 1, why: "L'IA produit les versions, mais c'est l'enseignant qui les vérifie et décide qui reçoit laquelle." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "créer une évaluation diagnostique et des tâches par paliers qui atteignent toutes le même objectif.",
          quickCheck: [
            { objective: "O2", q: "Que doit contenir une évaluation diagnostique de cinq questions selon cette leçon ?", options: ["Cinq questions de défi", "Cinq questions sur la séquence de l'an dernier", "Deux questions sur les préalables, deux sur l'objectif et une question de défi", "Seulement des questions que les élèves réussiront à coup sûr"], answer: 2, why: "Ce mélange montre qui a besoin d'aide sur les préalables, qui est prêt et qui peut aller plus loin." },
            { objective: "O2", q: "Votre tâche de palier 3 est la tâche de palier 2 avec deux fois plus d'exercices. Que faites-vous ?", options: ["La garder, car plus de travail, c'est plus difficile", "Supprimer le palier 3", "La donner au groupe de soutien", "La remplacer par une tâche plus profonde, comme utiliser la compétence dans une situation nouvelle"], answer: 3, why: "Le palier 3 doit être plus profond, pas seulement plus long." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "créer des tableaux de choix qui offrent un vrai choix tout en faisant pratiquer la même compétence.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un tableau de choix ?", options: ["Une grille d'activités qui font toutes pratiquer la même compétence de façons différentes", "Une liste de sujets différents que les élèves peuvent sauter", "Un plan de classe", "Un tableau où les élèves votent pour les devoirs"], answer: 0, why: "Chaque case fait pratiquer la même compétence ; seule la façon de s'exercer change." },
            { objective: "O3", q: "Une case de votre tableau de choix produit par l'IA demande de dessiner son animal préféré, ce qui ne fait pas pratiquer la compétence. Que faites-vous ?", options: ["La garder pour offrir un choix amusant", "En faire la case obligatoire", "La remplacer par une case qui fait pratiquer la compétence", "Supprimer tout le tableau"], answer: 2, why: "Le choix ne doit jamais devenir un moyen d'éviter la compétence." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire des supports différenciés",
        questions: [
          { objective: "O1", q: "Dans la différenciation, qu'est-ce qui reste identique ?", options: ["Le chemin", "Les supports", "L'objectif d'apprentissage", "Le groupe"], answer: 2, why: "L'objectif reste ; le chemin change." },
          { objective: "O1", q: "Que ne connaît PAS l'IA quand on différencie ?", options: ["Vos élèves", "Comment réécrire une tâche", "Comment faire trois niveaux", "Les centres d'intérêt courants"], answer: 0, why: "Les enseignants connaissent les élèves et décident des chemins." },
          { objective: "O2", q: "Une bonne tâche de palier 1 est :", options: ["Une compétence différente et plus facile", "Sauter l'objectif", "Seulement du coloriage", "Accompagnée vers le même objectif"], answer: 3, why: "Du soutien, pas un objectif plus bas." },
          { objective: "O2", q: "Une bonne tâche de palier 3 est :", options: ["Plus de problèmes identiques", "Plus profonde, comme une tâche de transfert", "Facultative", "Plus courte"], answer: 1, why: "Approfondir, c'est aller en profondeur, pas en quantité." },
          { objective: "O3", q: "Chaque case d'un tableau de choix doit :", options: ["Demander du matériel spécial", "Être un jeu", "Prendre des durées différentes", "Faire pratiquer la même compétence"], answer: 3, why: "Choix du chemin, même compétence." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien utiliser la différenciation",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "former des groupes flexibles à partir de preuves et les faire évoluer.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui rend un groupe « flexible » ?", options: ["Les élèves choisissent le groupe qu'ils veulent", "Il change souvent, selon les preuves actuelles sur une compétence", "Il reste le même toute l'année", "Il repose sur l'étiquette d'un élève"], answer: 1, why: "Les groupes flexibles suivent les preuves actuelles et changent à mesure que les élèves apprennent." },
            { objective: "O4", q: "Vous voulez que l'IA vous aide à repérer des tendances dans les résultats diagnostiques de votre classe. Que faites-vous d'abord ?", options: ["Coller le carnet de notes avec les noms", "Envoyer les résultats par e-mail à un collègue", "Afficher les résultats au mur", "Remplacer les noms par des codes comme E1, ou utiliser un outil approuvé"], answer: 3, why: "Les résultats des élèves avec leurs noms sont des dossiers scolaires : protégez-les avant d'utiliser l'IA." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "animer une leçon différenciée avec des routines claires et des pratiques de groupe équitables.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi les leçons différenciées échouent-elles le plus souvent ?", options: ["À cause de l'organisation et des routines", "Parce qu'il y a trop peu de fiches d'exercices", "Parce que les élèves n'aiment pas choisir", "Parce que l'IA produit trop de versions"], answer: 0, why: "La leçon explique qu'elles échouent davantage sur l'organisation que sur les supports." },
            { objective: "O5", q: "Des élèves finissent leur tâche de palier dix minutes en avance. Que doit leur dire votre plan ?", options: ["Attendre en silence", "Commencer la tâche du palier suivant", "Aller au tableau de choix", "Rejoindre le groupe de l'enseignant"], answer: 2, why: "Le plan doit dire quoi faire quand on a fini, par exemple aller au tableau de choix." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "différencier des leçons avec l'IA en gardant des attentes élevées pour chaque élève.",
          quickCheck: [
            { objective: "O6", q: "Que demande la vérification d'équité « même objectif » ?", options: ["Tous les groupes ont-ils la même fiche ?", "Chaque élève pratique-t-il l'objectif du niveau ?", "Tous les groupes finissent-ils en même temps ?", "Tous les élèves obtiennent-ils la même note ?"], answer: 1, why: "La différenciation ne doit pas éloigner certains élèves de l'objectif du niveau." },
            { objective: "O6", q: "Tout au long de la séquence, les mêmes élèves d'un même milieu sont toujours dans le groupe de soutien. Que faites-vous ?", options: ["Les y laisser, puisque cela fonctionne", "Les mettre en approfondissement sans preuve", "Arrêter d'utiliser des groupes", "Vous demander pourquoi, et vérifier si le groupe reflète la compétence ou autre chose"], answer: 3, why: "Une telle tendance est un signal d'alerte : la différenciation devient des attentes plus basses." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien utiliser la différenciation",
        questions: [
          { objective: "O4", q: "Les groupes flexibles reposent sur :", options: ["Une étiquette de l'an dernier", "La popularité des élèves", "Les preuves actuelles sur une compétence précise", "Le plan de classe"], answer: 2, why: "Ce sont les preuves sur la compétence actuelle qui décident." },
          { objective: "O4", q: "Vous voulez que l'IA aide à classer des résultats diagnostiques. Qu'est-ce qui est sûr ?", options: ["Utiliser des codes au lieu des noms, ou un outil approuvé", "Coller noms et résultats dans un outil gratuit", "Publier les résultats en ligne", "Les envoyer par courriel à un fournisseur"], answer: 0, why: "Les résultats avec noms sont des dossiers scolaires." },
          { objective: "O5", q: "Quels noms de groupes sont les meilleurs ?", options: ["Faibles, moyens, forts", "Des couleurs ou des formes", "Malins et lents", "Les notes des élèves"], answer: 1, why: "Des noms neutres évitent d'étiqueter les élèves." },
          { objective: "O6", q: "Les élèves qui apprennent la langue de l'école sont dans le groupe de soutien pendant toute la séquence. Que faites-vous ?", options: ["Vous demander pourquoi et vérifier si le groupe reflète la langue plutôt que la compréhension", "Rien", "Rendre cela permanent", "Les retirer de la classe"], answer: 0, why: "Les tendances peuvent révéler des groupes injustes." },
          { objective: "O4", q: "Quel est le risque des groupes qui ne changent jamais ?", options: ["Aucun", "Ils font gagner du temps", "Ils améliorent l'apprentissage", "Ils deviennent des filières"], answer: 3, why: "Des groupes figés limitent les possibilités." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : La différenciation pédagogique avec l'IA",
    questions: [
      { objective: "O1", q: "La différenciation signifie :", options: ["Donner des objectifs différents", "Adapter la manière dont les élèves atteignent le même objectif", "Des classes séparées", "Moins de travail pour certains"], answer: 1, why: "Même objectif, chemins différents." },
      { objective: "O1", q: "Le niveau de préparation désigne :", options: ["L'âge", "Le fait d'être à l'heure", "Ce qu'un élève sait et sait déjà faire", "Seulement la vitesse de lecture"], answer: 2, why: "Il est propre à chaque compétence." },
      { objective: "O1", q: "Les versions liées aux intérêts gardent :", options: ["Aucune compétence", "Des compétences différentes", "La même compétence", "Seulement le sujet"], answer: 2, why: "Le contexte change, pas la compétence." },
      { objective: "O1", q: "Qui décide quel élève suit quel chemin ?", options: ["L'enseignant", "L'IA", "Le fournisseur", "Les parents de l'élève seuls"], answer: 0, why: "Les enseignants lisent les preuves et décident." },
      { objective: "O2", q: "Une évaluation diagnostique se fait :", options: ["Seulement pour certains élèves", "À la fin de l'année", "Jamais", "Avant d'enseigner"], answer: 3, why: "Elle montre le point de départ des élèves." },
      { objective: "O2", q: "Une bonne évaluation diagnostique comprend :", options: ["Seulement les questions les plus difficiles", "Les préalables, l'objectif et une question de défi", "Seulement des questions d'opinion", "Rien sur l'objectif"], answer: 1, why: "Elle montre la diversité des niveaux de préparation." },
      { objective: "O2", q: "Les tâches par paliers visent :", options: ["Seulement les meilleurs élèves", "Des objectifs différents", "Aucun objectif", "Le même objectif"], answer: 3, why: "Les paliers varient le soutien et la complexité, pas l'objectif." },
      { objective: "O2", q: "Une tâche de transfert :", options: ["Recopie une réponse", "Change un élève d'école", "Utilise une compétence dans une situation nouvelle", "Est un examen de rattrapage"], answer: 2, why: "Elle approfondit l'apprentissage." },
      { objective: "O3", q: "Un tableau de choix a en général :", options: ["Neuf cases d'activités pour la même compétence", "Une seule activité", "Seulement des jeux", "Des notes"], answer: 0, why: "Une grille de façons de s'exercer." },
      { objective: "O3", q: "La case obligatoire d'un tableau de choix est :", options: ["Facultative", "Réalisée par chaque élève", "Pour l'enseignant", "Seulement pour les élèves avancés"], answer: 1, why: "Elle garantit l'exercice essentiel." },
      { objective: "O3", q: "Les cases d'un tableau de choix doivent prendre :", options: ["À peu près le même temps", "Des durées très différentes", "Aucun temps", "Seulement le temps des devoirs"], answer: 0, why: "Un choix équitable demande un effort semblable." },
      { objective: "O4", q: "Les résultats des élèves avec leurs noms sont :", options: ["La propriété des entreprises d'IA", "Publics", "Sans risque dans n'importe quelle application", "Des dossiers scolaires protégés par FERPA"], answer: 3, why: "Protégez-les." },
      { objective: "O4", q: "Remplacer les noms par des codes comme E1 aide à :", options: ["Noter plus vite", "Protéger la vie privée des élèves quand on s'entraîne avec l'IA", "Cacher les notes aux enseignants", "Rien"], answer: 1, why: "Les codes retirent les noms identifiants." },
      { objective: "O4", q: "Les élèves doivent changer de groupe :", options: ["Seulement à la fin de l'année", "Jamais", "Quand de nouvelles preuves montrent un changement", "Au hasard"], answer: 2, why: "Flexible veut dire qui change avec les preuves." },
      { objective: "O5", q: "Les leçons différenciées échouent souvent à cause :", options: ["De classes lumineuses", "De trop d'idées", "De l'organisation et des routines", "De noms trop courts"], answer: 2, why: "Les routines les font fonctionner." },
      { objective: "O5", q: "« Demande à trois camarades avant moi » est une routine pour :", options: ["Quand les élèves sont bloqués", "Quand les élèves ont fini", "Se mettre en rang", "Le déjeuner"], answer: 0, why: "Elle développe l'autonomie." },
      { objective: "O5", q: "Pendant le travail en groupes, l'enseignant doit d'abord rejoindre :", options: ["Le chef d'établissement", "Personne", "Seulement le groupe d'approfondissement", "Le groupe qui a le plus besoin de lui"], answer: 3, why: "Le temps de l'enseignant va là où il compte le plus." },
      { objective: "O6", q: "La différenciation devient des attentes plus basses quand :", options: ["Chaque palier atteint l'objectif", "Certains élèves ne pratiquent jamais l'objectif du niveau", "Les groupes changent souvent", "Des aides sont proposées"], answer: 1, why: "Tous les élèves ont besoin de l'objectif du niveau." },
      { objective: "O6", q: "Dans une leçon différenciée, les aménagements IEP et 504 obligatoires :", options: ["S'appliquent seulement aux tests", "Sont remplacés par les paliers", "Sont facultatifs", "Doivent toujours être fournis"], answer: 3, why: "Ils sont obligatoires." },
      { objective: "O6", q: "Les exemples produits par l'IA doivent être vérifiés pour :", options: ["Seulement la longueur", "Seulement la taille de police", "La variété et les stéréotypes", "Rien"], answer: 2, why: "Les supports doivent être justes et respectueux." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Évaluation diagnostique",
        objective: "O2",
        notYet: "Moins de cinq questions, pas de corrigé, ou aucun lien avec l'objectif.",
        meets: "Cinq questions (préalables, objectif, défi) avec un corrigé.",
        exceeds: "Le corrigé indique aussi ce que révèle chaque mauvaise réponse."
      },
      {
        name: "Tâches par paliers",
        objective: "O2",
        notYet: "Les paliers font pratiquer des objectifs différents, ou le palier 3 est seulement plus long.",
        meets: "Trois paliers (plus de soutien, au niveau attendu, approfondissement) font tous pratiquer le même objectif, avec corrigés.",
        exceeds: "Le palier 1 a des aides claires et le palier 3 est une vraie tâche de transfert."
      },
      {
        name: "Tableau de choix",
        objective: "O3",
        notYet: "Certaines cases ne font pas pratiquer la compétence.",
        meets: "Neuf cases qui font toutes pratiquer la compétence, avec une case obligatoire au milieu.",
        exceeds: "Les cases prennent à peu près le même temps et utilisent des façons de travailler différentes."
      },
      {
        name: "Plan de groupes",
        objective: "O4",
        notYet: "Utilise de vrais noms, ou les groupes ne changent pas.",
        meets: "Les groupes viennent des résultats inventés avec des codes, et le plan dit quand et comment les élèves changent de groupe.",
        exceeds: "Nomme la nouvelle vérification, comme un billet de sortie, qui fait changer les élèves de groupe."
      },
      {
        name: "Vérification d'équité",
        objective: "O6",
        notYet: "Les vérifications d'équité n'ont pas été faites.",
        meets: "Les quatre vérifications (même objectif, changements de groupe, tendances, accès) ont été faites et les échecs corrigés.",
        exceeds: "Sait dire ce qui a changé grâce à la vérification."
      }
    ]
  },
  evaluation: {
    results: [
      "Les enseignants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les enseignants qui donnent au moins une leçon différenciée dans les 30 jours (enquête de suivi)",
      "Le temps de préparation que les enseignants disent gagner sur la création de versions de tâches",
      "Les établissements où les responsables font la vérification d'équité en équipe"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un assistant IA autorisé par votre district ou votre administration",
      "Un vrai objectif de leçon que vous enseignez",
      "Une liste de classe inventée avec des codes (E1 à E24)",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Animez-le comme une séance de formation continue : passez le test de départ ensemble, puis demandez aux enseignants d'apporter une leçon qu'ils donneront bientôt.",
      "Ne laissez jamais les participants coller de vrais noms ou résultats d'élèves dans l'IA ; donnez-leur une classe inventée avec des codes.",
      "Mettez en binôme des enseignants du même niveau ou de la même matière pour qu'ils vérifient les paliers l'un de l'autre.",
      "Notez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois.",
      "Les responsables peuvent terminer en faisant ensemble les quatre vérifications d'équité sur une leçon commune."
    ]
  }
};
