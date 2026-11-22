"use strict";

// Koach Learn course (French translation of shared/teacher-aide-paraprofessional.js). See scripts/koachlearn-courses/README.md, "Translations".
// The ParaPro Assessment is given in English, so the English practice sentences and words in the grammar and vocabulary items stay in English.

module.exports = {
  id: "teacher-aide-paraprofessional-fr",
  lang: "fr",
  translationOf: "teacher-aide-paraprofessional",
  category: "Workforce Development",
  name: "Préparation au métier d'aide-enseignant et de paraprofessionnel",
  skills: "Vérifier les exigences de votre État pour les paraprofessionnels, Se préparer au ParaPro Assessment, Animer une activité en petit groupe, Accompagner le comportement des élèves et protéger leur vie privée, Protéger les enfants et signaler les inquiétudes",
  outcome: "trouver exactement ce que votre État et votre district scolaire demandent à un paraprofessionnel, vous préparer au test de lecture, d'écriture et de mathématiques utilisé par beaucoup d'écoles, animer une activité en petit groupe à partir du plan d'un enseignant, et protéger les élèves et la confidentialité de leurs informations.",
  about: [
    "Les aides-enseignants, aussi appelés paraprofessionnels ou paraéducateurs, travaillent aux côtés des enseignants pour aider les élèves à apprendre. Les écoles les embauchent pour les classes ordinaires, l'éducation spécialisée, les petites classes et les élèves qui apprennent l'anglais. C'est un bon premier emploi dans l'éducation, et beaucoup d'aides deviennent ensuite enseignants.",
    "Ce cours vous prépare au métier et aux étapes de l'embauche. Vous allez vérifier les règles de votre propre État, vous entraîner sur le type de questions de lecture, d'écriture et de mathématiques du ParaPro Assessment d'ETS (l'organisme qui conçoit et fait passer le test), et apprendre le travail de tous les jours : animer des petits groupes, accompagner le comportement, garder les dossiers des élèves confidentiels et signaler quand un enfant peut être en danger.",
    "Ce cours vous prépare ; il ne vous donne ni certificat ni licence. Votre État et votre district scolaire décident qui peut être embauché, et ils fixent le test et le score de réussite. Chaque leçon vous montre où vérifier.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, faites la tâche « Essayez maintenant » et répondez à deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Rédigez votre Plan de préparation au poste de paraprofessionnel sur une ou deux pages : (1) les exigences de votre État et d'un district, avec les pages officielles que vous avez consultées ; (2) la voie que vous allez suivre (crédits universitaires, diplôme, ou test comme le ParaPro) et un plan d'étude avec des dates ; (3) une activité de 10 minutes en petit groupe, écrite à partir du plan d'un enseignant donné en exemple, avec les indices que vous donnerez et une note pour l'enseignant ; et (4) les étapes que vous suivriez et qui vous appelleriez si vous pensiez qu'un enfant subit des mauvais traitements.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes et de jeunes adultes qui veulent travailler dans les écoles : parents, bénévoles scolaires, chauffeurs de bus et personnel de cantine qui veulent un poste en classe, personnes en reconversion, personnes qui rentrent chez elles après la prison (là où les règles de l'État le permettent) et personnes de communautés mal desservies qui veulent servir les écoles de leur propre quartier.",
    startingPoint: "La plupart ont un diplôme de fin d'études secondaires (high school) ou le GED (l'équivalent américain de ce diplôme) et aiment travailler avec les enfants. Beaucoup n'ont pas étudié les mathématiques ou la grammaire depuis des années, ne connaissent pas les règles d'embauche et n'ont jamais vu comment une classe fonctionne du côté de l'adulte.",
    gap: "Les écoles ont besoin d'aides qui respectent les règles de l'État, peuvent réussir le test exigé, suivent le plan d'un enseignant, gèrent le comportement avec calme et protègent les enfants. Les apprenants doivent connaître les règles de leur propre État, revoir la lecture, l'écriture et les mathématiques, et apprendre les tâches quotidiennes, pour postuler avec confiance et garder leur emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes, avec chaque terme scolaire expliqué",
      "Les règles changent selon l'État et le district ; le cours apprend à vérifier, pas une règle nationale unique",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; les exercices marchent sur papier",
      "Sécurité des enfants et confidentialité des élèves : aucun vrai nom ni détail d'élève dans les exercices",
      "Vérification des antécédents : la plupart des écoles l'exigent ; le cours le dit et ne promet d'emploi à personne"
    ],
    prerequisites: "Un diplôme de fin d'études secondaires ou un équivalent est attendu pour ce poste. Ceux qui en ont besoin peuvent suivre d'abord les cours GED. « Les mathématiques au quotidien » aide toute personne qui veut plus d'exercices de mathématiques."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "Avec votre État et un district scolaire où vous voulez travailler", action: "énumérer les qualifications qu'ils demandent à un paraprofessionnel et les pages officielles qui les indiquent", standard: "en nommant la voie d'études, tout test et son score de réussite, et la vérification des antécédents" },
    { id: "O2", condition: "Avec des questions d'entraînement en lecture, écriture et mathématiques semblables à celles du ParaPro Assessment", action: "répondre aux questions et expliquer chaque erreur", standard: "avec au moins 8 bonnes réponses sur 10" },
    { id: "O3", condition: "Avec le plan de cours d'un enseignant pour un petit groupe", action: "animer une courte activité d'entraînement qui suit le plan et donne des indices avant les réponses", standard: "en restant sur l'objectif de l'enseignant et en lui écrivant une note de deux lignes" },
    { id: "O4", condition: "Avec une situation de comportement ou de confidentialité en classe", action: "choisir des actions calmes et positives et ne partager les informations sur les élèves qu'avec le personnel qui en a besoin", standard: "en suivant le plan de l'enseignant et celui de l'élève" },
    { id: "O5", condition: "Avec une situation où un enfant peut subir des mauvais traitements ou être en danger", action: "décrire les étapes que vous suivez, qui vous prévenez et quand", standard: "en signalant le jour même comme l'exigent votre État et votre école, sans mener l'enquête vous-même" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Obtenir les qualifications",
      lessons: [
        {
          title: "Le métier et les règles de votre État",
          objectives: ["O1"],
          minutes: 6,
          goal: "Énumérer les qualifications que votre État et un district scolaire demandent à un paraprofessionnel.",
          text: [
            "Un paraprofessionnel travaille sous la direction d'un enseignant. Vous pouvez aider un petit groupe à lire, aider un élève handicapé à suivre la leçon, surveiller la cantine ou la cour, ou préparer le matériel. L'enseignant prépare les cours et note ; vous apportez votre soutien. Les intitulés de poste incluent aide-enseignant, assistant pédagogique, paraéducateur et aide en éducation spécialisée.",
            "Des règles fédérales s'appliquent aux aides qui participent à l'enseignement dans les écoles financées par Title I, le programme fédéral pour les écoles qui accueillent beaucoup de familles à faibles revenus. Ces aides ont besoin d'un diplôme de fin d'études secondaires ou d'un équivalent, et d'une de ces options : deux ans d'études universitaires, un associate degree (diplôme universitaire en deux ans) ou plus, ou la réussite d'un test officiel de l'État ou local en lecture, écriture et mathématiques. Beaucoup d'écoles utilisent le ParaPro Assessment d'ETS comme test.",
            "Chaque État, et parfois chaque district, ajoute ses propres règles. ETS publie un score ParaPro accepté pour chaque État qui l'utilise ; dans certains États, chaque district fixe son propre score, et certains États utilisent d'autres tests (le Rhode Island n'accepte plus que ParaPathways). Presque toutes les écoles exigent aussi une vérification des antécédents et des empreintes digitales. Vérifiez donc toujours votre État et votre district avant de payer un test.",
            "Où vérifier : le site du département de l'éducation de votre État, l'offre d'emploi sur le site du district, et la page des exigences par État sur parapro.ets.org."
          ],
          steps: ["Cherchez « paraprofessional » ou « paraeducator » sur le site du département de l'éducation de votre État.", "Ouvrez une vraie offre d'emploi d'un district proche et lisez les exigences.", "Vérifiez sur parapro.ets.org le test et le score accepté dans votre État.", "Notez la voie que vous remplissez déjà ou que vous allez suivre : crédits universitaires, diplôme ou test.", "Notez la vérification des antécédents et les autres étapes (examen de santé, formation)."],
          words: [["Paraprofessionnel", "personne qui travaille dans une école et aide les élèves à apprendre sous la direction d'un enseignant ; aussi appelée aide-enseignant ou paraéducateur."], ["Title I", "programme fédéral qui donne de l'argent en plus aux écoles qui accueillent beaucoup d'élèves de familles à faibles revenus."], ["ParaPro Assessment", "test d'ETS sur les compétences en lecture, écriture et mathématiques, et sur leur utilisation pour aider en classe."], ["Score accepté", "le score le plus bas que votre État ou votre district accepte."], ["Vérification des antécédents", "contrôle du casier judiciaire et d'autres dossiers que les écoles font avant d'embaucher."]],
          slides: [
            { title: "Ce que fait un paraprofessionnel", bullets: ["Travaille sous la direction d'un enseignant", "Aide les petits groupes et les élèves un par un", "Soutient les élèves handicapés et ceux qui apprennent l'anglais", "Prépare le matériel et aide à surveiller"] },
            { title: "Règle fédérale pour les aides pédagogiques de Title I", bullets: ["Diplôme de fin d'études secondaires ou équivalent", "PLUS deux ans d'université, un associate degree, ou un test réussi de l'État ou local"] },
            { title: "Votre État et votre district ajoutent leurs règles", bullets: ["Certains utilisent le ParaPro ; d'autres, d'autres tests", "Le score accepté change selon l'État, parfois selon le district", "Vérification des antécédents et empreintes digitales sont courantes"] },
            { title: "Où vérifier", bullets: ["Le département de l'éducation de votre État", "L'offre d'emploi du district", "parapro.ets.org : page des exigences par État"] }
          ],
          sources: [
            { name: "34 CFR 200.58 : qualifications des paraprofessionnels de Title I (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/34/200.58" },
            { name: "ETS ParaPro : exigences et scores acceptés par État", url: "https://parapro.ets.org/state-requirements.html" },
            { name: "ETS ParaPro : à propos du test", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Trouvez une vraie offre d'emploi de paraprofessionnel dans un district scolaire près de chez vous. Notez : l'intitulé du poste, les études ou le test demandés, la vérification des antécédents, et le salaire s'il est indiqué. Puis cherchez votre État sur la page des exigences par État d'ETS et notez s'il utilise le ParaPro.",
          youCanNow: "énumérer ce que votre État et un district proche demandent à un paraprofessionnel, et montrer où vous l'avez vérifié.",
          quickCheck: [
            { objective: "O1", q: "Avec le diplôme de fin d'études secondaires, quelle voie respecte la règle fédérale pour un aide pédagogique de Title I ?", options: ["Cinq ans de baby-sitting", "Un permis de conduire", "Un associate degree", "Une lettre d'un parent"], answer: 2, why: "La règle cite deux ans d'université, un associate degree ou plus, ou un test officiel de l'État ou local." },
            { objective: "O1", q: "Un ami dit que le score de réussite au ParaPro est le même partout. Que faites-vous ?", options: ["Vérifier votre État, et votre district, sur les pages officielles", "Le croire et réserver le test", "Ne pas passer le test et postuler quand même", "Demander à l'ami de le passer à votre place"], answer: 0, why: "Chaque État fixe son score accepté, et dans certains États, chaque district." }
          ]
        },
        {
          title: "Entraînement au ParaPro : lecture et écriture",
          objectives: ["O2"],
          minutes: 5,
          goal: "Répondre à des questions d'entraînement en lecture et en écriture et expliquer chaque erreur.",
          text: [
            "ETS indique que le ParaPro mesure les compétences et les connaissances en lecture, écriture et mathématiques, et votre capacité à les utiliser pour aider en classe. Certaines questions vous demandent donc de bien lire ou écrire, et d'autres comment vous aideriez un élève en lecture ou en écriture. Le test est en anglais, c'est pourquoi les exemples d'entraînement sont en anglais.",
            "Les questions de lecture peuvent porter sur l'idée principale d'un texte, un détail, le sens d'un mot d'après les mots qui l'entourent, ou ce que l'auteur laisse entendre sans le dire. Lisez d'abord la question, puis le texte, puis revenez chercher la preuve.",
            "Les questions d'écriture peuvent vous demander de trouver une erreur de grammaire, d'orthographe ou de ponctuation, ou de choisir la meilleure façon de corriger une phrase. Les questions sur la classe peuvent demander comment aider un élève à déchiffrer un mot son par son, ou à corriger deux phrases collées sans la bonne ponctuation.",
            "ETS propose gratuitement un Study Companion et un Study Guide avec des exemples de questions sur sa page de préparation. Utilisez-les ; ils montrent le vrai type de questions mieux que toute autre source."
          ],
          steps: ["Lisez la question avant le texte.", "Trouvez la ligne du texte qui prouve votre réponse.", "Pour les questions d'écriture, lisez la phrase à voix haute dans votre tête et écoutez ce qui sonne faux.", "Barrez les réponses que vous savez fausses, puis choisissez.", "Pour chaque erreur, écrivez une ligne : pourquoi la bonne réponse est la bonne."],
          words: [["Idée principale", "ce dont parle surtout un texte."], ["Indices du contexte", "les mots autour d'un mot nouveau qui vous aident à deviner son sens."], ["Phrases soudées (run-on)", "deux phrases collées sans la bonne ponctuation ni le bon mot de liaison."], ["Méthode syllabique (phonics)", "associer les lettres à leurs sons pour lire des mots."]],
          slides: [
            { title: "Ce que mesure le ParaPro", bullets: ["Lecture, écriture et mathématiques", "L'utilisation de ces compétences pour aider les élèves en classe"] },
            { title: "Questions de lecture", bullets: ["Idée principale et détails", "Sens d'un mot grâce aux indices du contexte", "Ce que l'auteur laisse entendre", "Trouvez la preuve dans le texte"] },
            { title: "Questions d'écriture", bullets: ["Trouvez l'erreur de grammaire, d'orthographe ou de ponctuation", "Choisissez la meilleure correction d'une phrase", "Comment aider un élève à corriger ce qu'il écrit"] },
            { title: "Étudiez malin", bullets: ["Utilisez le Study Companion et le Study Guide gratuits d'ETS", "Écrivez le pourquoi de chaque erreur"] }
          ],
          sources: [
            { name: "ETS ParaPro : préparation au test (Study Companion et Study Guide)", url: "https://parapro.ets.org/parapro-test-prep.html" },
            { name: "ETS ParaPro : à propos du test", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Entraînez-vous maintenant. 1) Corrigez cette phrase : \"The students was excited, they ran to the window.\" 2) Dans \"The path was so narrow that two people could not walk side by side,\" que veut dire narrow ? 3) Écrivez une phrase sur la façon dont vous aideriez un enfant qui lit \"ship\" comme \"sip\". Correction : \"The students were excited, so they ran to the window\" (ou utilisez un point) ; narrow veut dire étroit, pas large ; montrez le \"sh\" et pratiquez ce son ensemble.",
          youCanNow: "répondre à des questions d'entraînement en lecture et en écriture, trouver la preuve et expliquer vos erreurs.",
          quickCheck: [
            { objective: "O2", q: "Quelle phrase est écrite correctement ?", options: ["Her and me helped the class.", "The children was ready.", "Each of the boys have a book.", "The teacher and I set up the tables."], answer: 3, why: "\"The teacher and I\" est le sujet, et \"set up\" s'accorde avec lui ; les autres ont des erreurs de sujet ou de verbe." },
            { objective: "O2", q: "Un texte dit : \"The garden was barren; nothing grew there.\" Que veut dire barren ?", options: ["Plein de fleurs", "Qui ne produit rien", "Très mouillé", "Planté récemment"], answer: 1, why: "L'indice \"nothing grew there\" (rien n'y poussait) vous dit que barren veut dire qui ne produit rien." }
          ]
        },
        {
          title: "Entraînement au ParaPro : mathématiques et plan d'étude",
          objectives: ["O2", "O1"],
          minutes: 6,
          goal: "Répondre à des questions d'entraînement en mathématiques et écrire un plan d'étude avec une date de test.",
          text: [
            "Les mathématiques du ParaPro couvrent les bases sur lesquelles vous aideriez les élèves : le sens des nombres, l'addition, la soustraction, la multiplication et la division, les fractions, les nombres décimaux et les pourcentages, les mesures simples, la lecture de tableaux et de graphiques, et les équations simples. Certaines questions demandent comment vous expliqueriez une notion de mathématiques à un enfant.",
            "Travaillez lentement et écrivez vos étapes sur une feuille de brouillon. Pour les problèmes : trouvez la question, relevez les nombres, choisissez l'opération, calculez, puis demandez-vous : « Est-ce que cette réponse a du sens ? »",
            "Un plan d'étude transforme « un jour » en une date. Renseignez-vous sur l'inscription (dans un centre de test ou à domicile, là où c'est possible), vérifiez les frais et les règles sur les pièces d'identité sur le site officiel, choisissez une date de test dans trois à six semaines, et donnez à chaque semaine un thème : lecture, écriture, mathématiques, puis une série complète d'entraînement."
          ],
          steps: ["Lisez le problème deux fois et entourez la question.", "Écrivez les nombres dont vous avez besoin.", "Choisissez l'opération et calculez sur papier.", "Vérifiez que la réponse a du sens.", "Inscrivez sur un calendrier la date du test et le thème d'étude de chaque semaine."],
          words: [["Fraction", "une partie d'un tout, comme 3/4."], ["Pourcentage", "un nombre sur 100 ; 25 % veut dire 25 sur 100."], ["Équation", "une phrase mathématique avec un signe égal, comme 3 + x = 10."]],
          slides: [
            { title: "Les mathématiques du ParaPro", bullets: ["Sens des nombres et les quatre opérations", "Fractions, nombres décimaux et pourcentages", "Mesures, graphiques et équations simples", "Comment expliquer les mathématiques à un enfant"] },
            { title: "Résoudre un problème", bullets: ["Entourez la question", "Relevez les nombres", "Choisissez l'opération et calculez", "La réponse a-t-elle du sens ?"] },
            { title: "Votre plan d'étude", bullets: ["Vérifiez l'inscription, les frais et les pièces d'identité sur le site officiel", "Choisissez une date dans 3 à 6 semaines", "Un thème par semaine, puis une série complète d'entraînement"] }
          ],
          sources: [
            { name: "ETS ParaPro : comment s'inscrire", url: "https://parapro.ets.org/how-to-register.html" },
            { name: "ETS ParaPro : pièces d'identité exigées", url: "https://parapro.ets.org/test-takers/register-requirements.html" }
          ],
          tryIt: "Entraînez-vous maintenant. 1) 24 élèves se répartissent également autour de 6 tables. Combien par table ? 2) Comment écrit-on 3/4 en pourcentage ? 3) 3 + x = 10 ; combien vaut x ? 4) Une classe lit 12 pages le lundi et 15 le mardi. Combien de pages en tout ? Réponses : 4, 75 %, 7, 27. Puis écrivez votre plan d'étude : date du test et un thème pour chaque semaine.",
          youCanNow: "résoudre étape par étape des problèmes simples et fixer un plan d'étude avec une vraie date de test.",
          quickCheck: [
            { objective: "O2", q: "Un tee-shirt coûte 8 $. Une enseignante en achète 5. Quel est le total ?", options: ["13 $", "35 $", "40 $", "45 $"], answer: 2, why: "5 x 8 $ = 40 $." },
            { objective: "O1", q: "Que devez-vous faire AVANT de payer le ParaPro ?", options: ["Vérifier que votre État ou votre district l'accepte et quel score il exige", "Acheter une nouvelle calculatrice", "Quitter votre emploi actuel", "Demander à un élève de vous interroger"], answer: 0, why: "ETS conseille de confirmer que votre agence d'État ou locale accepte le test avant de le programmer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Obtenir les qualifications",
        questions: [
          { objective: "O1", q: "Qui décide du score ParaPro dont vous avez besoin ?", options: ["Votre État, et dans certains États votre district", "L'enseignant avec qui vous travaillez", "Les parents de chaque élève", "N'importe quel site qui vend de la préparation aux tests"], answer: 0, why: "ETS publie les scores acceptés par État ; dans certains États, les districts fixent les leurs." },
          { objective: "O1", q: "Quel est le meilleur endroit pour vérifier les exigences d'un district ?", options: ["Une publication sur les réseaux sociaux", "L'offre d'emploi ou le site du district lui-même", "Un ami qui y a travaillé il y a des années", "Une publicité de préparation aux tests"], answer: 1, why: "L'offre du district lui-même est la source officielle et à jour." },
          { objective: "O2", q: "Quelle phrase corrige \"I finished my work I went to recess\" ?", options: ["I finished my work I, went to recess.", "I finished, my work I went to recess.", "I finished my work, then I went to recess.", "I finished my work, so I went to recess."], answer: 3, why: "Une virgule suivie du mot de liaison \"so\" relie correctement deux phrases complètes." },
          { objective: "O2", q: "Combien font 20 % de 50 ?", options: ["5", "25", "10", "70"], answer: 2, why: "20 % font 0.2, et 0.2 x 50 = 10." },
          { objective: "O2", q: "Dans une question de lecture, où devez-vous chercher la preuve de votre réponse ?", options: ["Dans le texte lui-même", "Dans votre propre avis", "Dans le choix de réponse le plus long", "Dans le titre du test"], answer: 0, why: "La bonne réponse s'appuie sur des mots du texte." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Travailler en classe",
      lessons: [
        {
          title: "Animer un petit groupe à partir du plan de l'enseignant",
          objectives: ["O3"],
          minutes: 5,
          goal: "Animer une courte activité d'entraînement en petit groupe qui suit le plan d'un enseignant.",
          text: [
            "L'enseignant décide ce que les élèves apprennent ; vous les aidez à s'entraîner. Avant de commencer avec le groupe, demandez à l'enseignant : Quel est l'objectif ? Que doivent savoir faire les élèves à la fin ? Quelle aide ai-je le droit de donner ?",
            "Donnez des indices avant les réponses. Un bon ordre : attendez quelques secondes, posez une question qui montre le chemin (« Par quel son ce mot commence-t-il ? »), montrez un exemple semblable, et seulement ensuite montrez la réponse. C'est ce qu'on appelle l'étayage : vous apportez un soutien, puis vous le retirez petit à petit.",
            "Félicitez l'effort avec des mots précis (« Vous avez vérifié votre travail, c'est comme ça que vous avez trouvé l'erreur »). Gardez le groupe concentré avec des consignes courtes et claires. À la fin, écrivez une courte note pour l'enseignant : qui a compris, qui a eu du mal et sur quoi."
          ],
          steps: ["Demandez à l'enseignant l'objectif et l'aide permise.", "Préparez le matériel avant l'arrivée des élèves.", "Expliquez la tâche en une ou deux phrases courtes.", "Donnez des indices avant les réponses : attendez, questionnez, montrez un exemple, puis montrez.", "Écrivez une note de deux lignes pour l'enseignant à la fin."],
          words: [["Plan de cours", "le plan écrit de l'enseignant sur ce que les élèves vont apprendre et comment."], ["Étayage", "aide qui permet à un élève de faire une tâche, puis qu'on retire étape par étape."], ["Temps d'attente", "quelques secondes de silence après une question pour que les élèves réfléchissent."]],
          slides: [
            { title: "L'enseignant dirige ; vous soutenez", bullets: ["Demandez : quel est l'objectif ?", "Demandez : quelle aide puis-je donner ?"] },
            { title: "Des indices avant les réponses", bullets: ["Attendez quelques secondes", "Posez une question qui montre le chemin", "Montrez un exemple semblable", "Seulement ensuite, montrez la réponse"] },
            { title: "Faites avancer le groupe", bullets: ["Consignes courtes et claires", "Félicitez l'effort avec des mots précis", "Note de deux lignes à l'enseignant à la fin"] }
          ],
          tryIt: "Voici le plan d'un enseignant donné en exemple : « Objectif : les élèves additionnent des nombres à deux chiffres avec retenue. Groupe : 4 élèves, 10 minutes. » Écrivez votre activité : comment vous l'expliquez en deux phrases, trois exercices, deux indices que vous donnerez avant de montrer une réponse, et une note de deux lignes à l'enseignant. Utilisez des initiales inventées, jamais de vrais noms d'élèves.",
          youCanNow: "transformer le plan d'un enseignant en une courte activité en petit groupe, avec des indices et une note en retour.",
          quickCheck: [
            { objective: "O3", q: "Un élève bloque sur un mot. Quelle est votre PREMIÈRE action ?", options: ["Lui dire le mot tout de suite", "Attendre, puis lui demander par quel son le mot commence", "Passer à l'élève suivant", "Lui dire de deviner"], answer: 1, why: "Le temps d'attente et une question qui montre le chemin laissent l'élève réfléchir d'abord." },
            { objective: "O3", q: "Qui décide de ce que le petit groupe doit apprendre ?", options: ["L'aide", "Les élèves", "L'enseignant", "Les parents"], answer: 2, why: "L'enseignant prépare la leçon ; l'aide aide les élèves à s'entraîner." }
          ]
        },
        {
          title: "Comportement, éducation spécialisée et confidentialité",
          objectives: ["O4"],
          minutes: 6,
          goal: "Choisir des actions calmes et positives face à un comportement et ne partager les informations sur les élèves qu'avec le personnel qui en a besoin.",
          text: [
            "Le comportement est une façon pour les élèves de communiquer. Restez calme et parlez d'une voix basse et posée. Rappelez la règle de façon positive (« On marche » plutôt que « Ne cours pas »). Remarquez et félicitez les élèves qui font ce qu'il faut. Donnez des choix quand c'est possible (« Tu veux commencer par la page rouge ou la bleue ? »). Suivez le plan de classe de l'enseignant, et allez chercher tout de suite l'enseignant ou le personnel de l'école si quelqu'un risque d'être blessé.",
            "Beaucoup d'aides travaillent avec des élèves qui ont un IEP, un programme d'éducation individualisé prévu par la loi fédérale sur l'éducation spécialisée (IDEA). L'IEP ou un plan de comportement peut dire exactement quels soutiens reçoit un élève, comme du temps en plus, une pause au calme ou un emploi du temps en images. Demandez à l'enseignant quelles parties du plan vous appliquez, et suivez-les à chaque fois.",
            "Les informations sur les élèves sont confidentielles. FERPA est une loi fédérale qui donne aux parents le droit de voir le dossier scolaire de leur enfant et un certain contrôle sur qui d'autre peut le voir. En tant qu'aide, vous ne partagez les notes, le comportement, la santé ou les détails de l'IEP qu'avec le personnel de l'école qui en a besoin pour son travail. Ne parlez jamais des élèves dans le quartier, ne publiez rien sur eux en ligne et ne les prenez pas en photo avec votre téléphone."
          ],
          steps: ["Restez calme et parlez d'une voix basse.", "Dites la règle comme ce qu'il faut faire, pas ce qu'il ne faut pas faire.", "Félicitez les élèves qui la suivent.", "Suivez le plan de l'enseignant et l'IEP ou le plan de comportement de l'élève.", "Demandez de l'aide tout de suite si quelqu'un risque d'être blessé.", "Ne partagez les détails sur les élèves qu'avec le personnel qui en a besoin."],
          words: [["IEP", "Individualized Education Program, programme d'éducation individualisé : plan écrit pour un élève handicapé, prévu par la loi fédérale IDEA."], ["IDEA", "Individuals with Disabilities Education Act, la loi fédérale américaine sur l'éducation spécialisée."], ["FERPA", "loi fédérale qui protège la confidentialité des dossiers scolaires des élèves."], ["Soutien au comportement positif", "enseigner et féliciter le comportement attendu, pas seulement réagir aux problèmes."]],
          slides: [
            { title: "Un soutien au comportement calme et positif", bullets: ["Voix basse et posée", "Dites ce qu'il FAUT faire : « On marche »", "Félicitez les élèves qui font bien", "Proposez des choix quand c'est possible"] },
            { title: "Les élèves qui ont un IEP", bullets: ["IEP : un plan écrit prévu par IDEA", "Demandez quelles parties vous appliquez", "Suivez-le à chaque fois"] },
            { title: "Gardez les informations des élèves confidentielles", bullets: ["FERPA protège les dossiers scolaires", "Partagez seulement avec le personnel qui en a besoin", "Pas de discussions dans le quartier, pas de publications, pas de photos"] }
          ],
          sources: [
            { name: "Département de l'Éducation des États-Unis : qu'est-ce que FERPA ?", url: "https://studentprivacy.ed.gov/faq/what-ferpa" },
            { name: "Département de l'Éducation des États-Unis : IDEA", url: "https://sites.ed.gov/idea/" }
          ],
          tryIt: "Situation : pendant la lecture, un élève (appelez-le J.) jette son livre et dit : « C'est nul. » Son plan de comportement dit qu'il peut prendre une pause de deux minutes au coin calme. Écrivez ce que vous dites et faites, dans l'ordre. Puis écrivez à qui vous en parleriez plus tard, et à qui vous n'en parleriez PAS.",
          youCanNow: "réagir à un comportement avec calme et de façon positive, suivre le plan d'un élève et garder les informations des élèves confidentielles.",
          quickCheck: [
            { objective: "O4", q: "Quelle consigne est formulée de façon positive ?", options: ["« Arrête de crier ! »", "« Ne touche pas à ça. »", "« Arrête de courir. »", "« Parle doucement, s'il te plaît. »"], answer: 3, why: "Elle dit à l'élève quoi faire, au lieu de dire seulement quoi ne pas faire." },
            { objective: "O4", q: "Au magasin, un voisin vous demande comment va un élève de votre classe. Vous :", options: ["Donnez quelques détails puisque c'est un voisin", "Dites poliment que vous ne pouvez pas parler des élèves", "Lui montrez le travail de l'élève sur votre téléphone", "Lui décrivez l'IEP de l'élève"], answer: 1, why: "Les informations sur les élèves sont confidentielles et partagées seulement avec le personnel de l'école qui en a besoin." }
          ]
        },
        {
          title: "Protéger les enfants et signaler les inquiétudes",
          objectives: ["O5", "O1"],
          minutes: 6,
          goal: "Décrire les étapes que vous suivez quand vous pensez qu'un enfant peut subir des mauvais traitements, et qui vous prévenez.",
          text: [
            "Chaque adulte dans une école aide à protéger les enfants. Si un enfant est en danger en ce moment, appelez le 911 (ou votre numéro d'urgence local) et obtenez de l'aide tout de suite.",
            "Les lois des États désignent les personnes qui doivent signaler les soupçons de maltraitance ou de négligence envers un enfant : on les appelle les déclarants obligatoires (mandated reporters). Dans beaucoup d'États, le personnel scolaire, y compris les aides, figure sur cette liste. Votre devoir est de signaler ce que vous avez vu ou entendu, pas de le prouver. Apprenez pendant votre formation la loi de votre État et la politique de votre école : à qui vous faites le signalement (souvent la ligne de signalement de l'État ou les services de protection de l'enfance) et dans quel délai. Dans certains États, prévenir un enseignant ou le directeur ne remplace pas votre propre signalement.",
            "Si un enfant vous confie quelque chose : restez calme, écoutez et remerciez-le de vous l'avoir dit. Ne posez pas de questions qui suggèrent la réponse et ne menez pas l'enquête. Ne promettez pas de garder le secret ; dites que vous allez chercher de l'aide auprès de personnes dont le travail est de protéger les enfants. Notez les mots exacts de l'enfant, la date et l'heure, et faites le signalement le jour même. N'en parlez à personne qui n'a pas besoin de savoir.",
            "La ligne nationale contre la maltraitance des enfants de Childhelp, 1-800-422-4453, offre écoute et aide à toute heure ; ce n'est pas elle-même une ligne de signalement, mais elle peut vous aider à trouver où signaler dans votre État."
          ],
          steps: ["Si l'enfant est en danger maintenant, appelez le 911.", "Écoutez calmement ; ne menez pas l'enquête et ne posez pas de questions qui suggèrent la réponse.", "Ne promettez pas de garder le secret.", "Notez les mots exacts de l'enfant, la date et l'heure.", "Signalez le jour même comme le prévoient la loi de votre État et la politique de votre école.", "N'en parlez à personne qui n'a pas besoin de savoir."],
          words: [["Déclarant obligatoire (mandated reporter)", "personne que la loi oblige à signaler les soupçons de maltraitance ou de négligence envers un enfant."], ["Négligence", "quand les besoins de base d'un enfant, comme la nourriture, le logement, les soins ou la surveillance, ne sont pas assurés."], ["Services de protection de l'enfance (CPS)", "l'agence de l'État ou du comté qui examine les signalements de maltraitance et de négligence."], ["Question qui suggère la réponse", "une question qui souffle la réponse, comme « Est-ce que ton papa t'a frappé ? »"]],
          slides: [
            { title: "Danger en ce moment ?", bullets: ["Appelez le 911 ou votre numéro d'urgence local", "Obtenez de l'aide tout de suite"] },
            { title: "Les déclarants obligatoires", bullets: ["Les lois des États disent qui doit signaler", "Dans beaucoup d'États, cela inclut le personnel scolaire", "Signalez ce que vous avez vu ou entendu ; vous n'avez pas à le prouver"] },
            { title: "Si un enfant vous confie quelque chose", bullets: ["Restez calme, écoutez, remerciez-le", "Pas de questions qui suggèrent la réponse, pas d'enquête", "Ne promettez pas le secret", "Notez ses mots exacts, la date et l'heure"] },
            { title: "Signalez le jour même", bullets: ["Suivez la loi de votre État et la politique de votre école", "Souvent la ligne de signalement de l'État ou les CPS", "Gardez-le confidentiel"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway : signalement obligatoire de la maltraitance et de la négligence", url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway : comment signaler une maltraitance ou une négligence", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway : recherche des lois des États", url: "https://www.childwelfare.gov/resources/states-territories-tribes/state-statutes/" },
            { name: "Ligne nationale contre la maltraitance des enfants de Childhelp", url: "https://www.childhelphotline.org/" }
          ],
          tryIt: "Tâche finale : écrivez votre Plan de préparation au poste de paraprofessionnel. Indiquez les exigences de votre État et de votre district avec les liens, votre voie et vos dates d'étude, votre activité en petit groupe de la leçon 4, et les étapes de sécurité de cette leçon avec le numéro de votre État pour signaler une maltraitance (cherchez-le sur la page « how to report » du Child Welfare Information Gateway, le centre d'information fédéral sur la protection de l'enfance).",
          youCanNow: "dire quoi faire quand un enfant peut subir des mauvais traitements, à qui le signaler et quand, et mettre sur papier tout votre parcours vers un poste de paraprofessionnel.",
          quickCheck: [
            { objective: "O5", q: "Un enfant vous dit qu'un adulte à la maison lui fait du mal et vous demande de ne rien dire. Que lui répondez-vous ?", options: ["« Je te promets que je ne le dirai à personne. »", "« Tu es sûr ? Ça n'a pas l'air vrai. »", "« Merci de me l'avoir dit. Je dois prévenir les personnes dont le travail est de te protéger. »", "« Raconte-moi tous les détails pour que je décide. »"], answer: 2, why: "Vous ne promettez jamais le secret, et vous n'interrogez ni ne jugez ; vous cherchez de l'aide auprès des bonnes personnes." },
            { objective: "O5", q: "Quand un déclarant obligatoire doit-il signaler une inquiétude ?", options: ["Seulement après avoir trouvé des preuves", "Après avoir d'abord parlé à la famille", "À la fin de l'année scolaire", "Le jour même, comme le prévoient la loi de l'État et la politique de l'école"], answer: 3, why: "Vous signalez vite ce que vous avez vu ou entendu ; prouver, c'est le travail des CPS ou de la police." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Travailler en classe",
        questions: [
          { objective: "O3", q: "Qu'est-ce que l'étayage ?", options: ["Une aide qui permet à un élève de faire une tâche, puis qu'on retire petit à petit", "Faire le travail à la place de l'élève", "Une punition pour les mauvaises réponses", "Des matériaux de construction pour la classe"], answer: 0, why: "L'étayage apporte un soutien et le retire peu à peu à mesure que l'élève apprend." },
          { objective: "O3", q: "Votre groupe a fini. Que donnez-vous à l'enseignant ?", options: ["Rien ; l'enseignant devinera", "Une courte note : qui a compris et qui a eu du mal, et sur quoi", "Le numéro de téléphone de chaque élève", "Un nouveau plan de cours que vous avez écrit"], answer: 1, why: "Une courte note aide l'enseignant à préparer la suite." },
          { objective: "O4", q: "L'IEP d'une élève dit qu'elle a du temps en plus aux examens. L'enseignant vous demande de surveiller l'examen. Vous :", options: ["Lui donnez le même temps qu'aux autres pour être juste", "Lui demandez si elle veut du temps en plus aujourd'hui", "Lui donnez le temps en plus, comme le dit l'IEP", "La laissez sauter l'examen"], answer: 2, why: "Les soutiens d'un IEP sont obligatoires et doivent être suivis à chaque fois." },
          { objective: "O4", q: "Quel choix respecte FERPA ?", options: ["Publier une photo amusante de la classe sur vos réseaux sociaux", "Parler des notes d'un élève lors d'un repas de famille", "Envoyer par SMS le rapport de comportement d'un élève à un ami", "Parler des progrès d'un élève seulement avec l'enseignant"], answer: 3, why: "Les dossiers et détails des élèves ne sont partagés qu'avec le personnel de l'école qui en a besoin." },
          { objective: "O5", q: "Vous voyez un enfant gravement blessé qui dit avoir peur de rentrer chez lui aujourd'hui. Que faites-vous d'abord ?", options: ["Obtenir de l'aide tout de suite, en appelant le 911 si l'enfant est en danger maintenant, et signaler le jour même", "Appeler les parents pour demander ce qui s'est passé", "Attendre une semaine pour voir si cela recommence", "Demander à ses camarades ce qu'ils savent"], answer: 0, why: "Un danger immédiat veut dire aide d'urgence ; ensuite, vous signalez comme l'exigent votre État et votre école, sans mener l'enquête vous-même." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au métier d'aide-enseignant et de paraprofessionnel",
    questions: [
      { objective: "O1", q: "Quelle phrase décrit le mieux un paraprofessionnel ?", options: ["Une personne qui travaille à l'école et aide les élèves à apprendre sous la direction d'un enseignant", "La personne qui prépare et note toutes les leçons", "Seulement l'assistant du directeur de l'école", "Un enseignant remplaçant avec une licence complète"], answer: 0, why: "Les aides soutiennent l'apprentissage ; l'enseignant prépare et note." },
      { objective: "O1", q: "Selon la règle fédérale, un aide pédagogique de Title I qui a un diplôme a aussi besoin d'une de ces options. Laquelle n'en fait PAS partie ?", options: ["Deux ans d'études universitaires", "Un associate degree ou plus", "La réussite d'un test officiel de l'État ou local", "Un an de bénévolat à l'école"], answer: 3, why: "Les trois options sont deux ans d'université, un diplôme, ou un test officiel des connaissances." },
      { objective: "O1", q: "Que demandent presque toutes les écoles avant d'embaucher un aide ?", options: ["Une licence d'enseignant", "Une vérification des antécédents", "Un master", "Une voiture"], answer: 1, why: "Les écoles vérifient les antécédents pour protéger les enfants." },
      { objective: "O1", q: "Quelle source vous donne le score ParaPro accepté dans votre État ?", options: ["Une publicité de préparation aux tests", "Un camarade de classe", "La page des exigences par État sur parapro.ets.org, et votre État ou votre district", "N'importe quel forum en ligne"], answer: 2, why: "ETS publie les scores acceptés par État ; votre État ou votre district les confirme." },
      { objective: "O2", q: "Le ParaPro mesure :", options: ["Des connaissances en sciences et en histoire", "La vitesse de frappe au clavier", "Seulement les règles de la classe", "La lecture, l'écriture et les mathématiques, et leur utilisation pour aider en classe"], answer: 3, why: "ETS dit qu'il mesure la lecture, l'écriture et les mathématiques et leur application dans l'enseignement en classe." },
      { objective: "O2", q: "Quel mot convient ? \"Neither the teacher nor the students ___ ready.\"", options: ["were", "was", "is", "be"], answer: 0, why: "Avec \"neither...nor\", le verbe s'accorde avec le sujet le plus proche, \"students\", donc \"were\"." },
      { objective: "O2", q: "Combien font 1/2 + 1/4 ?", options: ["2/6", "3/4", "1/8", "2/4"], answer: 1, why: "1/2 font 2/4, et 2/4 + 1/4 = 3/4." },
      { objective: "O2", q: "Une classe de 28 élèves part en sortie. Chaque minibus transporte 8 personnes. Combien de minibus faut-il ?", options: ["3", "3.5", "4", "5"], answer: 2, why: "28 / 8 = 3.5, et on ne peut pas prendre un demi-minibus, donc il en faut 4." },
      { objective: "O2", q: "Quelle est la meilleure façon d'utiliser le Study Companion gratuit d'ETS ?", options: ["Lire seulement les réponses", "Sauter les questions ratées", "L'utiliser seulement la veille", "Faire les exemples de questions et écrire le pourquoi de chaque erreur"], answer: 3, why: "Expliquer chaque erreur vous montre quoi étudier ensuite." },
      { objective: "O3", q: "Avant d'animer un petit groupe, que devez-vous demander à l'enseignant ?", options: ["L'objectif et l'aide que vous avez le droit de donner", "Si vous pouvez partir plus tôt", "Quels élèves sont les plus intelligents", "Si vous pouvez changer la leçon"], answer: 0, why: "Connaître l'objectif et l'aide permise vous garde dans le plan de l'enseignant." },
      { objective: "O3", q: "Un élève donne une mauvaise réponse. Quelle est la meilleure étape suivante ?", options: ["Dire « Faux » et passer à autre chose", "Poser une question qui montre l'erreur", "Donner la réponse tout de suite", "Laisser un autre élève se moquer"], answer: 1, why: "Une question qui montre le chemin permet à l'élève de trouver et corriger l'erreur." },
      { objective: "O3", q: "Quel compliment aide le plus ?", options: ["« Bien. »", "« Tu es tellement intelligent. »", "« Tu as vérifié ton travail, et c'est comme ça que tu as trouvé l'erreur. »", "« Enfin. »"], answer: 2, why: "Un compliment précis sur l'effort dit à l'élève quoi continuer à faire." },
      { objective: "O4", q: "Un élève commence à s'énerver. Quelle action est calme et positive ?", options: ["Hausser la voix pour qu'il écoute", "Parler d'une voix basse et lui proposer un choix", "L'ignorer complètement", "Menacer d'appeler ses parents"], answer: 1, why: "Une voix calme et un choix aident un élève à se calmer." },
      { objective: "O4", q: "Qu'est-ce qu'un IEP ?", options: ["Un plan écrit pour un élève handicapé, prévu par IDEA", "Un programme de repas scolaires", "Un plan de salaire pour les enseignants", "Un test pour les aides"], answer: 0, why: "IEP veut dire Individualized Education Program, un plan prévu par la loi fédérale IDEA." },
      { objective: "O4", q: "Le parent d'un autre élève vous pose des questions sur le comportement d'un camarade. Vous :", options: ["Expliquez ce qui s'est passé", "Partagez le plan de comportement du camarade", "Lui montrez les notes sur l'incident", "Dites que vous ne pouvez pas partager d'informations sur les autres élèves et l'orientez vers l'enseignant"], answer: 3, why: "Les informations sur les élèves sont confidentielles ; partagez-les seulement avec le personnel qui en a besoin." },
      { objective: "O4", q: "Est-il acceptable de prendre des élèves en photo avec votre propre téléphone ?", options: ["Oui, s'ils sont mignons", "Oui, si vous ne les publiez pas", "Non ; suivez la politique de l'école et gardez les images des élèves confidentielles", "Seulement pendant les sorties scolaires"], answer: 2, why: "Les photos sont des informations sur les élèves ; suivez la politique de l'école." },
      { objective: "O5", q: "Qu'est-ce qu'un déclarant obligatoire ?", options: ["Une personne que la loi oblige à signaler les soupçons de maltraitance ou de négligence envers un enfant", "Un journaliste aux événements de l'école", "Un élève qui signale du harcèlement", "Un parent bénévole"], answer: 0, why: "Les lois des États désignent les professionnels qui doivent signaler les soupçons de maltraitance ou de négligence." },
      { objective: "O5", q: "En tant que déclarant obligatoire, quel est votre rôle ?", options: ["Prouver que la maltraitance a eu lieu", "Interroger la famille", "Signaler ce que vous avez vu ou entendu, comme l'exigent votre État et votre école", "Attendre d'être certain"], answer: 2, why: "Vous signalez ; les CPS ou la police mènent l'enquête." },
      { objective: "O5", q: "Un enfant devant vous est en danger en ce moment. Vous :", options: ["Envoyez un e-mail au directeur", "Appelez le 911 ou votre numéro d'urgence local", "Écrivez une note pour demain", "Demandez à l'enfant d'attendre"], answer: 1, why: "Un danger immédiat veut dire aide d'urgence d'abord." },
      { objective: "O5", q: "Que devez-vous noter après qu'un enfant vous a parlé de mauvais traitements ?", options: ["Votre supposition sur le coupable", "Des questions à poser à la famille", "Rien ; il suffit de s'en souvenir", "Les mots exacts de l'enfant, la date et l'heure"], answer: 3, why: "Les mots exacts, la date et l'heure permettent un signalement clair et juste." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Exigences vérifiées", objective: "O1", notYet: "Les exigences sont devinées ou viennent d'une source non officielle.", meets: "Indique la voie d'études, le test et le score (s'il y en a) et la vérification des antécédents de l'État et d'un district, avec des liens officiels.", exceeds: "Compare aussi deux districts et note le salaire ou d'autres étapes, comme la formation." },
      { name: "Plan d'étude", objective: "O2", notYet: "Pas de date de test, ou pas de plan sur quoi étudier.", meets: "Une vraie date de test (ou une voie sans test) et un thème d'étude par semaine.", exceeds: "Inclut les scores des séries d'entraînement et les points faibles qu'elles ont montrés." },
      { name: "Activité en petit groupe", objective: "O3", notYet: "L'activité ne correspond pas à l'objectif de l'enseignant, ou donne les réponses d'abord.", meets: "Suit l'objectif, comporte des exercices, deux indices avant les réponses et une note pour l'enseignant.", exceeds: "Prévoit aussi un moyen rapide de voir quels élèves ont besoin de plus d'aide." },
      { name: "Comportement et confidentialité", objective: "O4", notYet: "Utilise de vrais noms ou détails d'élèves, ou prévoit de les partager hors du personnel de l'école.", meets: "Utilise des initiales inventées et dit qui peut et qui ne peut pas voir les informations sur les élèves.", exceeds: "Ajoute une réaction calme et positive à un comportement, qui suit le plan d'un élève." },
      { name: "Étapes de sécurité", objective: "O5", notYet: "Il manque l'étape d'urgence, promet le secret ou prévoit de mener l'enquête.", meets: "Liste les étapes dans l'ordre, avec le numéro de signalement de l'État et le délai du jour même.", exceeds: "Note ce qu'ajoute la politique de l'école elle-même, après l'avoir demandée à l'école ou lue." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui passent et réussissent le ParaPro ou le test exigé par leur État, ou qui remplissent l'exigence autrement, dans les 90 jours",
      "Apprenants qui postulent et sont embauchés comme paraprofessionnels, remplaçants ou personnel de soutien scolaire (enquête de suivi)",
      "Les écoles partenaires signalent de nouveaux aides qui suivent les plans de cours, gèrent le comportement avec calme et protègent la confidentialité des élèves"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour les pages officielles ; papier, crayon et feuilles de brouillon pour les exercices",
      "Le Study Companion et le Study Guide gratuits du ParaPro d'ETS (sur parapro.ets.org)",
      "Une vraie offre d'emploi d'un district scolaire proche",
      "Environ 75 minutes au total, en courtes séances, plus du temps d'étude en plus avant le test"
    ],
    facilitatorNotes: [
      "Avant le cours, renseignez-vous sur les règles de votre État pour les paraprofessionnels et trouvez une offre d'emploi d'un district local, pour pouvoir répondre aux questions.",
      "N'utilisez jamais de vrais noms ni de vrais détails d'élèves dans les exercices ; utilisez des initiales inventées.",
      "Faites la leçon 4 sous forme de jeu de rôle : un apprenant anime, les autres jouent les élèves, et le groupe donne son avis avec la grille d'évaluation.",
      "La leçon 6 peut être difficile pour les personnes qui ont subi des mauvais traitements dans leur enfance. Dites-le avant de commencer, laissez les apprenants sortir s'ils le veulent, et ayez à portée de main les coordonnées des services d'aide locaux.",
      "Dites aux apprenants qui ont des condamnations passées de vérifier directement les règles de vérification des antécédents de l'État et du district ; ne devinez pas s'ils remplissent les conditions.",
      "Invitez un paraprofessionnel en poste ou un membre du service de recrutement du district à répondre aux questions."
    ]
  }
};
