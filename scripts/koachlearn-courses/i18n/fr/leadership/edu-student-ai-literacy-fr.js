"use strict";

// Koach Learn course (French translation of leadership/edu-student-ai-literacy.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-student-ai-literacy-fr",
  lang: "fr",
  translationOf: "edu-student-ai-literacy",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 5 : apprentissage des élèves et culture de l'IA",
  skills: "Définir la culture de l'IA pour les élèves, Animer une leçon pratique de culture de l'IA, Utiliser l'IA comme partenaire d'apprentissage, Fixer des niveaux d'usage de l'IA en classe, Apprendre aux élèves à déclarer leur usage de l'IA, Assurer la sécurité des élèves",
  outcome: "apprendre aux élèves à comprendre, questionner et utiliser l'IA de façon responsable : animer une leçon de 30 minutes sur la culture de l'IA, fixer des niveaux clairs d'usage de l'IA pour les devoirs, apprendre aux élèves à dire comment ils ont utilisé l'IA, et expliquer les règles de sécurité aux élèves et aux familles.",
  about: [
    "Ce cours s'adresse aux enseignants, aux documentalistes, aux conseillers d'orientation, aux conseillers pédagogiques et aux responsables d'établissement qui façonnent la manière dont les élèves apprennent avec l'IA et sur l'IA. Les élèves utilisent déjà l'IA ; la culture de l'IA les aide à s'en servir pour apprendre, et non pour éviter d'apprendre.",
    "Le chapitre 1 définit la culture de l'IA, vous donne une leçon pratique pour l'enseigner, et montre comment utiliser l'IA comme partenaire d'apprentissage qui pose des questions au lieu de donner les réponses. Le chapitre 2 fixe les règles de la classe : niveaux d'usage de l'IA pour les devoirs, déclaration de l'usage, sécurité et vie privée, et un plan pour toute l'école.",
    "L'usage d'un outil d'IA par les élèves dépend de l'approbation de votre district ou de votre administration, des règles d'âge de l'outil et, pour les enfants de moins de 13 ans aux États-Unis, de la loi COPPA. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Il s'agit du cours 5 sur 8 de la série « L'IA pour les responsables scolaires et éducatifs »."
  ],
  finalTask: "Préparez un dossier de culture de l'IA pour les élèves d'un niveau : un plan de leçon de 30 minutes dans lequel les élèves testent un outil d'IA (ou regardent une démonstration de l'enseignant), repèrent une erreur et discutent des biais ; une échelle d'usage de l'IA en classe à cinq niveaux avec un exemple de devoir pour chaque niveau ; un format de déclaration d'une ligne que les élèves utiliseront ; et une lettre d'une demi-page aux familles expliquant ce que les élèves vont apprendre et les règles de sécurité.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des enseignants, des documentalistes, des conseillers, des conseillers pédagogiques et des chefs d'établissement dans des écoles des États-Unis qui influencent la façon dont les élèves apprennent avec l'IA et à son sujet.",
    startingPoint: "Ils connaissent les bases de l'IA, les règles de vie privée des élèves et l'examen des outils vus dans les cours précédents. Les élèves de leur école utilisent déjà l'IA, mais il n'y a pas de façon commune d'enseigner la culture de l'IA, de fixer des règles pour les devoirs ou de demander aux élèves de déclarer leur usage de l'IA.",
    gap: "Sans culture de l'IA, les élèves utilisent l'IA pour éviter d'apprendre, croient des réponses fausses ou biaisées et partagent des informations privées. Les éducateurs doivent apprendre aux élèves à comprendre l'IA et à la questionner, fixer des niveaux d'usage et une déclaration claire, et expliquer les règles de sécurité aux élèves et aux familles.",
    constraints: [
      "L'usage d'un outil d'IA par les élèves dépend de l'approbation du district, des règles d'âge de l'outil et, pour les enfants de moins de 13 ans, de COPPA",
      "Les plus jeunes élèves peuvent apprendre par des démonstrations de l'enseignant et des activités débranchées, sans compte",
      "Les élèves ne partagent jamais leur nom complet, leur adresse ou leurs mots de passe avec une IA",
      "Les outils d'IA changent : les questions préparées pour une leçon sont testées peu avant de l'enseigner",
      "Temps : des leçons courtes à caser dans une journée d'école, plus une leçon de 30 minutes avec les élèves"
    ],
    prerequisites: "« L'IA pour les responsables scolaires et éducatifs 2 : outils d'IA pour les enseignants » est recommandé."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour un niveau scolaire dont vous vous occupez", action: "décrire les quatre compétences de culture de l'IA des élèves en mots adaptés aux élèves", standard: "avec un exemple pour chaque compétence" },
    { id: "O2", condition: "Avec un outil approuvé ou une démonstration de l'enseignant", action: "préparer une leçon de 30 minutes où les élèves testent l'IA, repèrent une erreur et discutent des biais", standard: "avec cinq questions préparées et testées à l'avance, dont une à laquelle l'IA répond mal" },
    { id: "O3", condition: "Sur un sujet que vous enseignez", action: "rédiger des consignes « partenaire d'apprentissage » qui font poser des questions à l'IA au lieu de donner des réponses", standard: "et expliquer pourquoi elles font plus apprendre l'élève qu'une consigne « machine à réponses »" },
    { id: "O4", condition: "À partir de vos prochains devoirs", action: "indiquer sur chaque devoir un niveau de l'échelle d'usage de l'IA à cinq niveaux", standard: "avec une raison liée à l'objectif d'apprentissage" },
    { id: "O5", condition: "Quand les élèves utilisent l'IA pour un travail où elle est permise", action: "enseigner un format de déclaration de l'usage de l'IA en une ligne", standard: "qui nomme l'outil, ce qu'il a fait, la date et ce que l'élève a fait" },
    { id: "O6", condition: "Pour les élèves et les familles", action: "expliquer les règles de sécurité des élèves avec l'IA et planifier la culture de l'IA à travers les niveaux", standard: "dans une lettre aux familles d'une demi-page qui couvre les outils utilisés, pourquoi, et les règles de sécurité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Enseigner l'IA aux élèves",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que signifie la culture de l'IA pour les élèves",
          minutes: 5,
          goal: "Définir la culture de l'IA en quatre compétences d'élève que vous pouvez enseigner.",
          text: [
            "La culture de l'IA, c'est en savoir assez sur l'IA pour bien l'utiliser, la questionner et faire de bons choix à son sujet. Pour les élèves, elle se résume à quatre compétences. Comprendre : l'IA prédit des réponses probables à partir de régularités ; elle ne pense pas et ne sait pas comme une personne. Questionner : l'IA peut se tromper, inventer ou être biaisée, donc il faut vérifier.",
            "Utiliser : poser des questions claires, se servir de l'IA pour apprendre (explique-moi, interroge-moi, donne-moi un retour) plutôt que pour éviter d'apprendre, et suivre les règles de la classe. Décider : penser à la vie privée, à l'équité et à l'honnêteté, par exemple quoi partager, à qui appartient le travail, et quand ne pas utiliser l'IA du tout.",
            "L'âge compte. Les plus jeunes peuvent apprendre les idées grâce aux démonstrations de l'enseignant et à des activités débranchées, sans compte. Les plus grands peuvent utiliser directement des outils approuvés, avec des règles claires."
          ],
          words: [["Culture de l'IA", "en savoir assez sur l'IA pour bien l'utiliser, la questionner et faire de bons choix."], ["Activité débranchée", "une leçon sur la technologie qui n'utilise aucun appareil."]],
          slides: [
            { title: "Quatre compétences d'élève", bullets: ["Comprendre : l'IA prédit à partir de régularités", "Questionner : elle peut se tromper ou être biaisée", "L'utiliser pour apprendre ; décider avec sagesse"] },
            { title: "Pour apprendre, pas pour sauter l'étape", bullets: ["« Explique-le autrement »", "« Interroge-moi »", "« Donne-moi un retour sur mon brouillon »"] },
            { title: "Selon l'âge", bullets: ["Plus jeunes : démonstrations, activités débranchées", "Plus grands : outils approuvés, règles claires"] }
          ],
          tryIt: "Écrivez les quatre compétences de culture de l'IA avec des mots que vos élèves comprendraient, pour un niveau que vous suivez, avec un exemple pour chacune.",
          youCanNow: "définir la culture de l'IA comme quatre compétences d'élève qui s'enseignent.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que la culture de l'IA ?", options: ["Savoir construire des programmes d'IA", "En savoir assez sur l'IA pour bien l'utiliser, la questionner et faire de bons choix", "Lire des livres sur les robots", "Taper vite au clavier"], answer: 1, why: "La culture de l'IA, c'est bien utiliser l'IA et la questionner, pas programmer." },
            { objective: "O1", q: "Vos élèves de 7 ans n'ont pas de compte d'IA. Comment enseigneriez-vous la culture de l'IA ?", options: ["Attendre le lycée", "Les faire s'inscrire avec le compte d'un parent", "Utiliser des démonstrations de l'enseignant et des activités débranchées", "Ne pas aborder le sujet"], answer: 2, why: "Les démonstrations et les activités débranchées enseignent la culture de l'IA sans compte élève." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Une leçon pratique de culture de l'IA",
          minutes: 6,
          goal: "Préparer une leçon de 30 minutes où les élèves testent l'IA et repèrent ses erreurs.",
          text: [
            "Les élèves comprennent le mieux les limites de l'IA en les voyant. Structure : accroche (5 minutes) : demandez « L'IA a-t-elle toujours raison ? » et faites voter. Enquête (15 minutes) : en binômes, ou par une démonstration de l'enseignant, posez à un outil d'IA des questions que vous avez préparées, dont une à laquelle il répond faux ou invente (une fausse source, un problème de mathématiques piège, un fait local).",
            "Vérification des faits (5 minutes) : les élèves comparent les réponses avec le manuel, un site fiable ou l'enseignant. Discussion des biais (5 minutes) : demandez plusieurs fois à l'outil de décrire « un scientifique » ou « une infirmière » et remarquez les régularités ; discutez de leur origine.",
            "Terminez par un billet de sortie : « Cite une chose pour laquelle l'IA est utile et une raison de la vérifier. » Testez vos questions avant le cours, car les outils d'IA changent et peuvent corriger ou créer des erreurs."
          ],
          steps: ["Accroche : vote « L'IA a-t-elle toujours raison ? ».", "Enquête : questions préparées, dont une à laquelle elle répond faux.", "Vérifiez les faits avec des sources fiables.", "Discutez des biais avec le test « décris une personne ».", "Billet de sortie ; testez vos questions avant le cours."],
          words: [["Vérification des faits", "comparer une affirmation avec une source fiable."], ["Biais", "une régularité injuste, comme décrire toujours un métier avec le même type de personne."]],
          slides: [
            { title: "Leçon de 30 minutes", bullets: ["Accroche : l'IA a-t-elle toujours raison ?", "Enquête : questions préparées", "Vérification, discussion des biais, billet de sortie"] },
            { title: "Montrez une vraie erreur", bullets: ["Une fausse source ou un problème piège", "Un fait local qu'elle ignore peut-être", "Testez vos questions avant le cours"] },
            { title: "Repérer les biais", bullets: ["Demandez-lui plusieurs fois de décrire « un scientifique »", "Remarquez les régularités ; discutez de leur origine"] }
          ],
          tryIt: "Préparez cinq questions pour la leçon, dont au moins une à laquelle l'IA répond faux. Testez-les dans un outil approuvé et notez les réponses que vous utiliserez.",
          youCanNow: "préparer une leçon pratique qui apprend aux élèves à questionner l'IA.",
          quickCheck: [
            { objective: "O2", q: "Avec quoi les élèves comparent-ils les réponses de l'IA dans la leçon pratique ?", options: ["Le manuel, un site fiable ou l'enseignant", "Un autre outil d'IA", "La supposition d'un camarade", "Rien ; ils croient la première réponse"], answer: 0, why: "Des sources fiables permettent aux élèves de repérer eux-mêmes les erreurs de l'IA." },
            { objective: "O2", q: "La question préparée pour montrer une erreur de l'IA reçoit maintenant une bonne réponse. Que faites-vous ?", options: ["Dire aux élèves que l'IA ne se trompe jamais", "L'utiliser quand même et faire comme si c'était faux", "Annuler la leçon", "Tester d'autres questions jusqu'à en trouver une où l'IA se trompe, et noter les réponses"], answer: 3, why: "Les outils d'IA changent : testez les questions peu avant la leçon." }
          ]
        },
        {
          objectives: ["O3"],
          title: "L'IA comme partenaire d'apprentissage, pas comme machine à réponses",
          minutes: 5,
          goal: "Apprendre aux élèves des consignes qui font que l'IA les aide à réfléchir.",
          text: [
            "Le même outil peut faire la réflexion à la place de l'élève ou la soutenir. La différence, c'est la consigne (prompt). Machine à réponses : « Écris mon paragraphe sur les causes de la guerre de Sécession. » Partenaire d'apprentissage : « Pose-moi des questions, une à la fois, pour m'aider à trouver les causes, et ne me donne pas la réponse. »",
            "Enseignez trois consignes de partenaire d'apprentissage : « Explique-le autrement, avec un exemple » ; « Interroge-moi là-dessus et dis-moi ce que j'ai faux » ; « Voici mon brouillon. Donne-moi deux points forts et une chose à améliorer, mais ne le réécris pas. »",
            "Certains outils éducatifs sont conçus pour tutorer de cette façon. Avec n'importe quel outil, les élèves doivent vérifier les faits, et le travail rendu doit refléter leur propre réflexion, selon le niveau d'usage de l'IA permis en classe."
          ],
          steps: ["Montrez une consigne « machine à réponses » et son résultat.", "Montrez une consigne « partenaire d'apprentissage » et son résultat.", "Enseignez trois consignes de partenaire d'apprentissage.", "Faites pratiquer les élèves sur le sujet du jour.", "Rappelez : vérifiez les faits ; rendez votre propre réflexion."],
          words: [["Consigne de partenaire d'apprentissage", "une consigne qui demande à l'IA de vous aider à réfléchir plutôt que de faire le travail."], ["Questionnement socratique", "enseigner en posant des questions qui amènent l'apprenant à raisonner lui-même."]],
          slides: [
            { title: "Même outil, consigne différente", bullets: ["Machine à réponses : « Écris mon paragraphe »", "Partenaire : « Pose-moi des questions, ne me le dis pas »"] },
            { title: "Trois consignes de partenaire d'apprentissage", bullets: ["« Explique-le autrement, avec un exemple »", "« Interroge-moi et dis-moi ce que j'ai faux »", "« Deux points forts, une correction, sans réécrire »"] },
            { title: "Toujours le travail de l'élève", bullets: ["Vérifiez les faits", "Rendez votre propre réflexion"] }
          ],
          tryIt: "Essayez une consigne « machine à réponses » et une consigne « partenaire d'apprentissage » sur un sujet que vous enseignez. Écrivez laquelle aiderait le plus un élève à apprendre, et pourquoi.",
          youCanNow: "apprendre aux élèves à utiliser l'IA pour soutenir leur réflexion, pas pour la remplacer.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une consigne « machine à réponses » ?", options: ["Une consigne qui demande à l'IA de vous interroger", "Une consigne qui demande à l'IA de faire le travail à votre place", "Une consigne qui demande des indices", "Une consigne qui demande à l'IA d'expliquer vos erreurs"], answer: 1, why: "Les consignes « machine à réponses » sautent la réflexion que le devoir doit construire." },
            { objective: "O3", q: "Un élève veut l'aide de l'IA pour réviser un contrôle. Quelle consigne lui apprendriez-vous ?", options: ["« Donne-moi toutes les réponses. »", "« Écris mes notes à ma place. »", "« Fais mes devoirs. »", "« Interroge-moi une question à la fois et dis-moi ce que j'ai faux. »"], answer: 3, why: "Une consigne « partenaire d'apprentissage » fait réfléchir l'élève." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Enseigner l'IA aux élèves",
        questions: [
          { objective: "O1", q: "Laquelle fait partie des quatre compétences de culture de l'IA ?", options: ["Mémoriser les noms des entreprises d'IA", "Taper plus vite", "Questionner : l'IA peut se tromper ou être biaisée", "Éviter toute technologie"], answer: 2, why: "Questionner l'IA est au cœur de la culture de l'IA." },
          { objective: "O1", q: "Comment les plus jeunes peuvent-ils apprendre la culture de l'IA sans compte ?", options: ["Par des démonstrations de l'enseignant et des activités débranchées", "Ils ne peuvent pas", "Avec le mot de passe d'un parent", "En s'inscrivant avec un faux âge"], answer: 0, why: "Démonstrations et activités débranchées enseignent les idées sans risque." },
          { objective: "O2", q: "Pourquoi tester vos questions préparées avant la leçon ?", options: ["Pour l'allonger", "C'est la loi", "Les élèves préfèrent", "Les outils d'IA changent et peuvent corriger ou créer des erreurs"], answer: 3, why: "Une erreur prévue peut ne plus apparaître." },
          { objective: "O3", q: "Laquelle est une consigne de partenaire d'apprentissage ?", options: ["« Écris ma dissertation. »", "« Pose-moi des questions une à la fois ; ne donne pas la réponse. »", "« Fais mes devoirs. »", "« Donne-moi les réponses. »"], answer: 1, why: "Elle soutient la réflexion au lieu de la remplacer." },
          { objective: "O2", q: "Demander plusieurs fois à l'IA de décrire « une infirmière » aide les élèves à remarquer :", options: ["L'orthographe", "Le coût", "La vitesse", "Des biais dans les régularités"], answer: 3, why: "Des régularités répétées peuvent révéler des biais." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Règles, sécurité et plan pour toute l'école",
      lessons: [
        {
          objectives: ["O4"],
          title: "Niveaux d'usage de l'IA pour les devoirs",
          minutes: 6,
          goal: "Fixer une échelle d'usage de l'IA à cinq niveaux et l'indiquer sur les devoirs.",
          text: [
            "Pour chaque devoir, les élèves doivent savoir quel usage de l'IA est permis. Une échelle simple à cinq niveaux : niveau 0, pas d'IA. Niveau 1, IA pour les idées seulement (trouver des idées, puis travailler seul). Niveau 2, IA pour un retour (sur votre propre brouillon ; c'est vous qui faites les changements). Niveau 3, IA comme collaborateur (vous pouvez utiliser des parties produites par l'IA, signalées et expliquées). Niveau 4, exploration de l'IA (utiliser l'IA est le but de la tâche).",
            "Indiquez le niveau sur chaque devoir et expliquez pourquoi : une tâche de niveau 0 peut développer une compétence que les élèves doivent avoir seuls, comme écrire un paragraphe en temps limité ou faire du calcul mental. Une tâche de niveau 2 développe les compétences de révision.",
            "Utilisez la même échelle dans toute l'école pour que les élèves n'aient pas des règles différentes dans chaque classe. Plusieurs versions publiées d'échelles d'usage de l'IA pour l'évaluation existent ; adaptez-en une ou écrivez la vôtre avec votre équipe."
          ],
          steps: ["Convenez d'une échelle à cinq niveaux avec l'équipe.", "Indiquez le niveau sur chaque devoir.", "Expliquez pourquoi ce niveau convient à l'objectif d'apprentissage.", "Affichez l'échelle en classe et en ligne.", "Utilisez la même échelle dans toute l'école."],
          words: [["Niveau d'usage de l'IA", "une étiquette qui dit aux élèves combien d'IA ils peuvent utiliser pour une tâche."], ["Collaborateur", "quelqu'un (ou quelque chose) qui travaille avec vous sur une tâche."]],
          slides: [
            { title: "Cinq niveaux d'usage de l'IA", bullets: ["0 Pas d'IA ; 1 Idées seulement", "2 Retour sur votre brouillon", "3 Collaborateur, signalé et expliqué", "4 Exploration de l'IA"] },
            { title: "Indiquez le niveau sur chaque devoir", bullets: ["Dites le niveau", "Dites pourquoi il convient à l'objectif"] },
            { title: "Une échelle, toute l'école", bullets: ["Les mêmes règles dans chaque classe", "Adaptez une échelle publiée avec l'équipe"] }
          ],
          tryIt: "Écrivez l'échelle à cinq niveaux avec des mots simples pour les élèves. Indiquez ensuite un niveau et une raison d'une ligne sur cinq de vos prochains devoirs.",
          youCanNow: "dire clairement aux élèves combien d'IA ils peuvent utiliser pour chaque tâche, et pourquoi.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire le niveau 0 de l'échelle d'usage de l'IA ?", options: ["Aucune IA ne peut être utilisée", "Tout usage de l'IA est permis", "L'IA peut écrire le premier brouillon", "L'IA peut noter le travail"], answer: 0, why: "Le niveau 0 sert aux tâches où les élèves doivent montrer leur propre réflexion sans IA." },
            { objective: "O4", q: "L'objectif d'un devoir est de s'entraîner à écrire seul un premier brouillon. Quel niveau convient ?", options: ["Le niveau collaborateur, avec l'IA qui rédige des parties", "Aucun niveau ; laisser les élèves décider", "Un niveau bas comme « pas d'IA », avec une raison liée à cet objectif", "Le niveau le plus haut, pour que les élèves apprennent l'outil"], answer: 2, why: "Le niveau doit correspondre à l'objectif d'apprentissage, avec une raison que les élèves peuvent voir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dire comment on a utilisé l'IA",
          minutes: 5,
          goal: "Apprendre aux élèves une façon simple de déclarer et de citer leur usage de l'IA.",
          text: [
            "L'honnêteté sur l'IA est une compétence. Quand l'IA est permise, les élèves doivent dire comment ils l'ont utilisée. Une déclaration d'une ligne suffit pour la plupart des tâches : « J'ai utilisé [outil] pour [quoi] le [date]. J'ai [ce que j'en ai fait]. » Par exemple : « J'ai utilisé Gemini pour m'interroger sur le vocabulaire le 3 mars. J'ai écrit toutes les réponses moi-même. »",
            "Pour les travaux de recherche, les plus grands peuvent suivre le style de citation de votre école ; des guides de style comme MLA et APA publient sur leurs propres sites des conseils pour citer les outils d'IA. L'IA n'est pas une source fiable de faits : les élèves doivent quand même trouver et citer la source d'origine.",
            "Considérez une déclaration honnête comme une bonne chose. Les élèves qui disent ce qu'ils ont fait avec l'IA apprennent l'intégrité ; ne sanctionnez pas la déclaration honnête d'un usage permis."
          ],
          steps: ["Enseignez la déclaration d'une ligne.", "Montrez l'exemple avec votre propre travail assisté par l'IA.", "Pour la recherche, utilisez les conseils du style de citation de votre école.", "Exigez des sources d'origine pour les faits.", "Félicitez les déclarations honnêtes."],
          words: [["Déclaration", "dire ouvertement comment on a utilisé l'IA."], ["Citation", "une note qui indique au lecteur d'où vient une information."]],
          slides: [
            { title: "La déclaration d'une ligne", bullets: ["« J'ai utilisé [outil] pour [quoi] le [date]. »", "« J'ai [ce que j'en ai fait]. »"] },
            { title: "Travaux de recherche", bullets: ["Utilisez le style de citation de votre école", "L'IA n'est pas une source de faits", "Trouvez et citez la source d'origine"] },
            { title: "Récompensez l'honnêteté", bullets: ["Montrez l'exemple vous-même", "Ne sanctionnez jamais la déclaration honnête d'un usage permis"] }
          ],
          tryIt: "Écrivez une ligne de déclaration pour une chose pour laquelle vous avez utilisé l'IA cette semaine. Écrivez ensuite les instructions que vous donnerez aux élèves pour déclarer leur usage de l'IA.",
          youCanNow: "apprendre aux élèves à déclarer et citer honnêtement leur usage de l'IA.",
          quickCheck: [
            { objective: "O5", q: "Que doit contenir une déclaration d'usage de l'IA en une ligne ?", options: ["Seulement le mot « IA »", "L'outil, ce qu'il a fait, la date et ce que l'élève a fait", "Le mot de passe de l'élève", "Une note"], answer: 1, why: "Une ligne complète montre exactement comment l'IA a été utilisée." },
            { objective: "O5", q: "Un élève déclare honnêtement un usage permis de l'IA dans son travail. Comment réagiriez-vous ?", options: ["Voir la déclaration comme un point positif", "Baisser sa note", "Le signaler comme de la triche", "L'ignorer"], answer: 0, why: "La déclaration honnête est l'habitude que vous voulez : elle doit être bien accueillie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protéger les élèves et planifier pour toute l'école",
          minutes: 6,
          goal: "Enseigner les règles de sécurité aux élèves et planifier la culture de l'IA à travers les niveaux.",
          text: [
            "Enseignez quatre règles de sécurité aux élèves. Ne partagez pas d'informations personnelles (nom complet, adresse, école, photos, mots de passe) avec les outils d'IA. N'utilisez que les outils approuvés par l'école, en respectant les règles d'âge de leurs conditions. L'IA peut créer de fausses images, voix et vidéos (hypertrucages ou « deepfakes ») : faites attention à ce que vous croyez et ne créez jamais de faux de personnes réelles. Parlez à un adulte de confiance si une conversation avec une IA devient dérangeante, dangereuse ou demande des secrets.",
            "Aux États-Unis, pour les enfants de moins de 13 ans, la loi COPPA s'applique aux services en ligne ; la FTC (l'agence américaine de protection des consommateurs) indique qu'une école peut donner son accord à la place des parents seulement si le service collecte les informations pour l'usage et le bénéfice de l'école, sans autre but commercial. Ailleurs, suivez les lois de votre pays sur les données des enfants. Votre district décide quels outils les élèves peuvent utiliser ; dites aux familles lesquels et pourquoi.",
            "Planifiez la culture de l'IA par cycle, pour que chaque année s'appuie sur la précédente : les premières classes découvrent ce qu'est l'IA par des démonstrations ; la fin du primaire pratique le questionnement et la vérification des faits ; le collège ajoute les biais, la déclaration et l'usage en partenaire d'apprentissage ; le lycée ajoute l'éthique, les métiers et la création responsable. Partagez le plan avec les familles."
          ],
          steps: ["Enseignez les quatre règles de sécurité.", "Confirmez les outils approuvés et les règles d'âge ; pour les moins de 13 ans, l'accord prévu par COPPA.", "Dites aux familles quels outils sont utilisés et pourquoi.", "Répartissez les compétences de culture de l'IA par cycle.", "Partagez le plan avec les familles."],
          words: [["Hypertrucage (deepfake)", "une fausse image, voix ou vidéo faite avec l'IA pour paraître réelle."], ["Cycle", "un groupe de niveaux de classe, par exemple les trois premières années du primaire ou le collège."]],
          slides: [
            { title: "Quatre règles de sécurité pour les élèves", bullets: ["Aucune information personnelle", "Outils approuvés seulement, selon les règles d'âge", "Méfiez-vous des hypertrucages ; jamais de faux de vraies personnes", "Parlez à un adulte de confiance"] },
            { title: "Moins de 13 ans : COPPA", bullets: ["Accord de l'école seulement pour un usage scolaire", "Aucun autre but commercial", "Dites aux familles quels outils et pourquoi"] },
            { title: "Un plan par cycle", bullets: ["Premières classes : ce qu'est l'IA", "Fin du primaire : questionner et vérifier", "Collège et lycée : biais, déclaration, éthique"] }
          ],
          sources: [{ name: "FTC : se conformer à COPPA, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Tâche finale : rassemblez votre dossier de culture de l'IA pour les élèves d'un niveau : le plan de leçon de 30 minutes, l'échelle d'usage de l'IA à cinq niveaux avec un exemple de devoir pour chaque niveau, le format de déclaration d'une ligne, et une lettre d'une demi-page aux familles avec les règles de sécurité.",
          youCanNow: "piloter la culture de l'IA des élèves avec une leçon, des niveaux d'usage clairs, une déclaration honnête et des règles de sécurité que les familles comprennent.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un hypertrucage (deepfake) ?", options: ["Un fichier informatique abîmé", "Un mot de passe solide", "Une fausse image, voix ou vidéo créée avec l'IA", "Une sorte de moteur de recherche"], answer: 2, why: "Les hypertrucages sont des faux créés par l'IA : c'est pourquoi les élèves ne créent jamais de faux de personnes réelles." },
            { objective: "O6", q: "Un élève dit qu'une conversation avec une IA l'a bouleversé. Qu'aurait-il dû apprendre à faire ?", options: ["Continuer à discuter jusqu'à ce que ça s'arrête", "Supprimer l'application et ne rien dire", "En parler en ligne", "Le dire à un adulte de confiance"], answer: 3, why: "En parler à un adulte de confiance fait partie des règles de sécurité des élèves." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Règles, sécurité et plan pour toute l'école",
        questions: [
          { objective: "O4", q: "Pour un devoir de niveau 2 (retour), les élèves peuvent :", options: ["Faire tout écrire par l'IA", "Ne pas utiliser l'IA du tout", "Obtenir un retour de l'IA sur leur propre brouillon et faire eux-mêmes les changements", "Copier un texte de l'IA sans le signaler"], answer: 2, why: "Le niveau 2 est un retour sur le travail de l'élève." },
          { objective: "O4", q: "Pourquoi utiliser la même échelle d'usage de l'IA dans toute l'école ?", options: ["Les élèves ont des règles cohérentes dans chaque classe", "C'est moins cher", "Cela interdit l'IA", "Les fournisseurs l'exigent"], answer: 0, why: "La cohérence évite la confusion." },
          { objective: "O5", q: "Un élève déclare honnêtement un usage permis de l'IA. Vous devez :", options: ["Baisser sa note", "Considérer la déclaration comme une bonne chose", "Le signaler", "L'ignorer"], answer: 1, why: "Une déclaration honnête, c'est l'intégrité en action." },
          { objective: "O6", q: "Laquelle fait partie des quatre règles de sécurité des élèves ?", options: ["Ne jamais créer de faux de personnes réelles", "Partager son adresse pour avoir de meilleures réponses", "Utiliser n'importe quelle application trouvée", "Garder secrètes les conversations dérangeantes"], answer: 0, why: "Les hypertrucages de personnes réelles peuvent faire du mal." },
          { objective: "O6", q: "Aux États-Unis, quelle loi s'applique aux services en ligne pour les élèves de moins de 13 ans ?", options: ["Aucune", "Le code de la route", "Seulement le droit d'auteur", "COPPA"], answer: 3, why: "COPPA protège en ligne les enfants de moins de 13 ans." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 5 : apprentissage des élèves et culture de l'IA",
    questions: [
      { objective: "O1", q: "La culture de l'IA signifie :", options: ["Savoir construire une IA", "En savoir assez sur l'IA pour bien l'utiliser, la questionner et choisir avec sagesse", "Ne jamais utiliser l'IA", "Taper vite"], answer: 1, why: "C'est de la compréhension plus du jugement." },
      { objective: "O1", q: "Les élèves doivent comprendre que l'IA :", options: ["Sait tout", "Pense comme une personne", "Prédit des réponses probables à partir de régularités", "Ne se trompe jamais"], answer: 2, why: "Cela explique à la fois ses forces et ses erreurs." },
      { objective: "O1", q: "Une activité débranchée :", options: ["Est une coupure de courant", "Demande un ordinateur portable", "Enseigne la technologie sans appareils", "Est une vidéo"], answer: 2, why: "Elle convient aux plus jeunes." },
      { objective: "O2", q: "Dans la leçon pratique, les élèves vérifient les réponses de l'IA avec :", options: ["Le manuel, un site fiable ou l'enseignant", "Une autre IA seulement", "La supposition d'un ami", "Rien"], answer: 0, why: "Des sources fiables révèlent les erreurs." },
      { objective: "O2", q: "Une bonne question préparée pour la leçon est une question :", options: ["Très longue", "Que tout le monde connaît", "Sans réponse", "À laquelle l'IA répond faux ou invente"], answer: 3, why: "Voir une erreur installe l'habitude de vérifier." },
      { objective: "O2", q: "Le test « décris une personne » aide les élèves à voir :", options: ["Les fautes d'orthographe", "Les biais", "Les prix", "La vitesse"], answer: 1, why: "Les régularités révèlent les biais." },
      { objective: "O3", q: "« Interroge-moi et dis-moi ce que j'ai faux » est :", options: ["Un mot de passe", "De la tricherie", "Une consigne de machine à réponses", "Une consigne de partenaire d'apprentissage"], answer: 3, why: "Elle soutient l'apprentissage." },
      { objective: "O3", q: "« Écris mon paragraphe à ma place » fait de l'IA :", options: ["Un vérificateur de faits", "Un tuteur", "Une machine à réponses", "Un enseignant"], answer: 2, why: "Elle remplace la réflexion de l'élève." },
      { objective: "O4", q: "Le niveau 0 de l'échelle d'usage de l'IA signifie :", options: ["Pas d'IA", "L'IA pour tout", "Retour seulement", "Idées seulement"], answer: 0, why: "Certaines compétences doivent se construire seul." },
      { objective: "O4", q: "Le niveau 3 (collaborateur) demande aux élèves de :", options: ["Cacher l'usage de l'IA", "Signaler et expliquer les parties produites par l'IA", "N'utiliser aucune IA", "Laisser l'IA noter"], answer: 1, why: "La transparence est la condition." },
      { objective: "O4", q: "Le niveau d'IA de chaque devoir doit être accompagné :", options: ["D'une raison liée à l'objectif d'apprentissage", "D'un prix", "D'un mot de passe", "D'aucune explication"], answer: 0, why: "Les élèves suivent les règles qu'ils comprennent." },
      { objective: "O5", q: "Une déclaration d'IA d'une ligne comprend :", options: ["Rien", "L'adresse de l'élève", "Le prix de l'outil", "L'outil, ce qu'il a fait, la date et ce que l'élève a fait"], answer: 3, why: "Elle rend l'usage de l'IA transparent." },
      { objective: "O5", q: "Pour la recherche, les faits doivent être cités à partir :", options: ["De la conversation avec l'IA seulement", "De la source d'origine", "De la mémoire", "D'une rumeur"], answer: 1, why: "L'IA n'est pas une source fiable de faits." },
      { objective: "O5", q: "Les conseils pour citer l'IA dans les styles MLA ou APA se trouvent :", options: ["Nulle part", "Seulement dans la réponse de l'IA", "Sur les sites des guides de style eux-mêmes", "Sur les réseaux sociaux"], answer: 2, why: "Les guides de style publient leurs propres conseils." },
      { objective: "O6", q: "Les élèves ne doivent jamais partager avec l'IA :", options: ["Un sujet d'entraînement", "Une question de mathématiques", "Leur nom complet, leur adresse et leurs mots de passe", "Un mot de vocabulaire"], answer: 2, why: "Les informations personnelles restent privées." },
      { objective: "O6", q: "Un hypertrucage (deepfake) est :", options: ["Une fausse image, voix ou vidéo faite avec l'IA", "Une piscine profonde", "Une longue dissertation", "Un mot de passe sûr"], answer: 0, why: "L'IA peut créer des faux réalistes." },
      { objective: "O6", q: "Si une conversation avec une IA devient dérangeante, les élèves doivent :", options: ["Partager des détails personnels", "La garder secrète", "Continuer à discuter", "En parler à un adulte de confiance"], answer: 3, why: "Les adultes peuvent aider à protéger les élèves." },
      { objective: "O6", q: "L'âge minimum des outils d'IA se trouve dans :", options: ["La mémoire d'un collègue", "Les conditions actuelles de chaque outil", "Le menu de la cantine", "Un manuel de 2010"], answer: 1, why: "Chaque outil fixe et met à jour ses propres règles." },
      { objective: "O6", q: "Un plan par cycle signifie :", options: ["Seul le lycée apprend l'IA", "Une leçon pour tous les âges", "Aucun plan", "Des compétences de culture de l'IA qui se construisent année après année"], answer: 3, why: "Les compétences doivent se construire à travers les niveaux." },
      { objective: "O6", q: "Il faut dire aux familles :", options: ["Seulement après des problèmes", "Rien", "Quels outils d'IA sont utilisés, pourquoi, et les règles de sécurité", "Seulement le prix des outils"], answer: 2, why: "La transparence crée la confiance et le soutien." }
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
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Leçon pratique",
        objective: "O2",
        notYet: "Les élèves ne testent pas l'IA, ne repèrent pas d'erreur ou ne discutent pas des biais.",
        meets: "Un plan de 30 minutes où les élèves testent un outil d'IA ou regardent une démonstration, repèrent une erreur et discutent des biais.",
        exceeds: "Les questions préparées ont été testées à l'avance et conviennent au niveau."
      },
      {
        name: "Échelle d'usage de l'IA",
        objective: "O4",
        notYet: "Moins de cinq niveaux, ou des niveaux sans exemple de devoir.",
        meets: "Une échelle à cinq niveaux avec un exemple de devoir à chaque niveau.",
        exceeds: "Chaque exemple a une raison liée à l'objectif d'apprentissage."
      },
      {
        name: "Format de déclaration",
        objective: "O5",
        notYet: "Pas de format de déclaration, ou il manque des éléments clés.",
        meets: "Un format d'une ligne que les élèves utiliseront pour dire comment ils ont utilisé l'IA.",
        exceeds: "Comprend l'outil, ce qu'il a fait, la date et ce que l'élève a fait, avec un exemple."
      },
      {
        name: "Lettre aux familles et sécurité",
        objective: "O6",
        notYet: "Pas de lettre aux familles, ou les règles de sécurité manquent.",
        meets: "Une lettre d'une demi-page qui explique ce que les élèves vont apprendre et les règles de sécurité.",
        exceeds: "Dit aussi quels outils sont utilisés et pourquoi, en mots simples pour les familles."
      },
      {
        name: "Compétences de culture de l'IA adaptées aux élèves",
        objective: "O1",
        notYet: "L'ensemble n'apprend pas aux élèves à questionner l'IA.",
        meets: "La leçon apprend aux élèves que l'IA peut se tromper ou être biaisée, et comment la vérifier.",
        exceeds: "Utilise des consignes « partenaire d'apprentissage » pour que l'IA aide les élèves à réfléchir."
      }
    ]
  },
  evaluation: {
    results: [
      "Éducateurs qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Classes où la leçon de culture de l'IA de 30 minutes est enseignée dans les 30 jours (enquête de suivi)",
      "Écoles qui utilisent une seule échelle commune d'usage de l'IA pour les devoirs (enquête de suivi)",
      "Familles qui reçoivent une lettre sur l'usage de l'IA par les élèves et la sécurité"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et un outil d'IA approuvé par le district pour l'usage des élèves ou les démonstrations",
      "Une liste des prochains devoirs pour un niveau",
      "Du papier pour les activités débranchées avec les plus jeunes",
      "Environ 60 minutes au total, plus la leçon de 30 minutes avec les élèves"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites la leçon pratique avec le personnel dans le rôle des élèves.",
      "Vérifiez les outils approuvés par le district et les règles d'âge de chaque outil avant qu'un élève l'utilise ; utilisez des démonstrations de l'enseignant pour les moins de 13 ans si nécessaire.",
      "Convenez d'une seule échelle d'usage de l'IA pour toute l'école, pour que les élèves aient des règles cohérentes.",
      "Rappelez au personnel de bien accueillir les déclarations honnêtes plutôt que de les punir.",
      "Notez l'exercice final avec la grille, et relisez la lettre aux familles pour vérifier qu'elle est en mots simples."
    ]
  }
};
