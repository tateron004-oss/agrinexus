"use strict";

// Koach Learn course (French translation of leadership/edu-ai-assessment-feedback.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-assessment-feedback-fr",
  lang: "fr",
  translationOf: "edu-ai-assessment-feedback",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 4 : l'IA pour l'évaluation et la rétroaction",
  skills: "Rédiger avec l'IA des questions d'évaluation alignées, Construire des grilles d'évaluation, Concevoir des vérifications formatives rapides, Rédiger une rétroaction dont l'enseignant reste maître, Protéger les travaux et les notes des élèves, Traiter équitablement les soupçons d'écriture par l'IA",
  outcome: "construire avec l'IA un dossier d'évaluation, des questions alignées avec un corrigé vérifié, une grille à quatre niveaux avec une version pour les élèves, un billet de sortie et une banque de commentaires, et l'utiliser avec une démarche de rétroaction qui protège la vie privée des élèves et laisse chaque note entre les mains de l'enseignant.",
  about: [
    "Ce cours s'adresse aux enseignants, aux conseillers pédagogiques, aux responsables de l'évaluation et aux chefs d'établissement. L'évaluation et la rétroaction prennent une grande part du temps des enseignants, et l'IA peut aider, mais les notes et les jugements sur les élèves ont des conséquences importantes. Ce cours montre où l'IA aide et où elle ne doit pas décider.",
    "Le chapitre 1 utilise l'IA pour construire des évaluations : questions alignées, grilles d'évaluation et vérifications formatives rapides. Le chapitre 2 porte sur la rétroaction : une démarche où l'IA rédige un brouillon et l'enseignant décide, la protection des travaux d'élèves selon FERPA (la loi fédérale américaine sur les dossiers scolaires), et le traitement équitable des soupçons d'usage de l'IA dans les travaux d'élèves.",
    "Entraînez-vous uniquement avec des travaux d'élèves inventés ou des travaux dont tout détail identifiant a été retiré, et utilisez seulement les outils que votre district ou votre administration a approuvés pour les travaux d'élèves. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Il s'agit du cours 4 sur 8 de la série « L'IA pour les responsables scolaires et éducatifs »."
  ],
  finalTask: "Construisez un dossier d'évaluation pour un objectif : cinq questions alignées avec un corrigé que vous avez vérifié, une grille à quatre niveaux avec trois ou quatre critères et une version pour les élèves, un billet de sortie de trois questions, et une banque d'au moins huit commentaires liés à la grille. Essayez la démarche de rétroaction sur trois réponses d'élèves inventées, modifiez au moins un commentaire proposé par l'IA et attribuez les notes vous-même.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des enseignants, des conseillers pédagogiques, des responsables de l'évaluation et des chefs d'établissement dans des écoles des États-Unis qui rédigent des évaluations, donnent des rétroactions ou accompagnent des enseignants qui le font.",
    startingPoint: "Ils savent préparer une leçon avec l'IA et la vérifier, et connaissent les bases de FERPA vues dans les cours précédents. Ils rédigent les évaluations et les rétroactions à la main, et ne savent pas toujours comment réagir à un soupçon d'usage de l'IA par un élève.",
    gap: "L'évaluation et la rétroaction prennent une grande part du temps des enseignants, et l'IA peut aider, mais les notes ont de lourdes conséquences. Les éducateurs doivent construire avec l'IA des évaluations alignées, travailler avec une démarche où l'IA rédige et l'enseignant décide, protéger les travaux des élèves et traiter avec justice les soupçons d'usage de l'IA.",
    constraints: [
      "Exercices seulement avec des travaux d'élèves inventés ou des travaux dont chaque détail identifiant a été retiré",
      "Utilisez seulement des outils approuvés par le district pour les travaux d'élèves",
      "Les enseignants décident de chaque note ; l'IA ne note jamais les élèves seule",
      "Le score d'un détecteur d'écriture par IA n'est jamais la seule preuve d'un usage abusif",
      "Temps : des leçons courtes à caser dans une journée d'enseignement"
    ],
    prerequisites: "« L'IA pour les responsables scolaires et éducatifs 3 : l'IA pour préparer les leçons »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un objectif", action: "produire avec l'IA des questions alignées sur trois niveaux et refaire chaque réponse du corrigé", standard: "en corrigeant ou en retirant toute question qui a une erreur ou deux réponses possibles" },
    { id: "O2", condition: "Pour une tâche que vous donnez", action: "créer avec l'IA une grille à quatre niveaux et une version pour les élèves", standard: "avec chaque case assez précise pour que deux enseignants notent le même travail de la même façon" },
    { id: "O3", condition: "Pour un objectif", action: "concevoir une question charnière et un billet de sortie de trois questions", standard: "en décidant avant la vérification ce que vous réenseignerez pour chaque mauvaise réponse" },
    { id: "O4", condition: "À partir de réponses d'élèves et de votre grille", action: "utiliser l'IA pour rédiger des commentaires « point fort et prochaine étape », puis les corriger et écrire vous-même les notes", standard: "avec au moins un commentaire de l'IA modifié et chaque note décidée par vous" },
    { id: "O5", condition: "Quand des outils d'IA touchent aux travaux ou aux notes des élèves", action: "appliquer les bases de FERPA et expliquer aux familles comment l'IA sert à la rétroaction", standard: "en utilisant seulement des outils approuvés, avec les détails identifiants retirés" },
    { id: "O6", condition: "Quand vous soupçonnez un usage abusif de l'IA dans un travail d'élève", action: "réagir avec une démarche juste et une règle claire d'usage de l'IA pour chaque tâche", standard: "sans jamais utiliser le score d'un détecteur comme seule preuve" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire des évaluations avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rédiger des questions alignées et vérifier le corrigé",
          minutes: 5,
          goal: "Produire des questions d'évaluation qui correspondent à un objectif et vérifier les réponses.",
          text: [
            "Donnez à l'IA l'objectif et les critères de réussite (comme dans le cours 3), le niveau de classe et le type de questions voulu : choix multiple, réponse courte, problème à résoudre ou tâche où l'élève explique sa pensée. Demandez des questions à différents niveaux de réflexion : se rappeler, appliquer, et expliquer ou analyser.",
            "Demandez un corrigé avec une courte justification pour chaque réponse et, pour les questions à choix multiple, la raison pour laquelle chaque mauvaise option est tentante. Des mauvaises options qui reflètent de vraies idées fausses vous en disent plus sur la pensée des élèves.",
            "Vérifiez ensuite chaque question vous-même. Les corrigés de l'IA contiennent des erreurs, une question à choix multiple peut avoir deux bonnes réponses, et la formulation peut gêner les élèves qui apprennent la langue de l'école. Retirez toute question qui ne mesure pas l'objectif."
          ],
          steps: ["Donnez l'objectif, les critères de réussite, le niveau et les types de questions.", "Demandez un mélange : se rappeler, appliquer, expliquer.", "Demandez un corrigé justifié, et pourquoi les mauvaises options sont tentantes.", "Refaites chaque réponse et relisez chaque question pour sa clarté.", "Retirez les questions qui ne mesurent pas l'objectif."],
          words: [["Question alignée", "une question qui mesure l'objectif qu'elle est censée mesurer."], ["Distracteur", "une mauvaise option dans une question à choix multiple."], ["Corrigé", "la liste des bonnes réponses."]],
          slides: [
            { title: "Dites à l'IA ce qu'il faut mesurer", bullets: ["Objectif et critères de réussite", "Niveau et types de questions", "Se rappeler, appliquer, expliquer"] },
            { title: "Demandez un corrigé justifié", bullets: ["Pourquoi chaque réponse est juste", "Pourquoi chaque mauvaise option tente", "Des distracteurs qui révèlent des idées fausses"] },
            { title: "Vérifiez chaque question", bullets: ["Les corrigés contiennent des erreurs", "Deux bonnes réponses ? Formulation confuse ?", "Retirez ce qui sort de l'objectif"] }
          ],
          tryIt: "Demandez à l'IA six questions sur un objectif, à trois niveaux, avec un corrigé. Refaites chaque réponse vous-même et comptez les erreurs ou les questions peu claires.",
          youCanNow: "rédiger avec l'IA des questions d'évaluation alignées et vérifier le corrigé.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un distracteur dans une question à choix multiples ?", options: ["Une mauvaise réponse dans la liste", "Une question trop difficile", "Un bruit dans la classe", "La bonne réponse"], answer: 0, why: "De bons distracteurs reflètent de vraies idées fausses, ce qui montre comment les élèves raisonnent." },
            { objective: "O1", q: "Vous refaites le corrigé de l'IA et une réponse est fausse. Que feriez-vous ?", options: ["La laisser ; les élèves ne le remarqueront pas", "Demander à l'IA de renoter la classe", "Corriger le corrigé et vérifier de près les autres questions", "Supprimer toutes les questions"], answer: 2, why: "Refaire chaque réponse permet de repérer les erreurs avant que les élèves soient notés." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire une grille que les élèves comprennent",
          minutes: 6,
          goal: "Créer avec l'IA une grille à quatre niveaux et une version pour les élèves.",
          text: [
            "Une grille d'évaluation décrit la qualité à chaque niveau pour chaque critère. Demandez à l'IA une grille analytique : trois ou quatre critères tirés de vos critères de réussite, quatre niveaux (par exemple : débutant, en progression, maîtrisé, avancé), et une courte description de ce à quoi ressemble le travail à chaque niveau.",
            "De bonnes descriptions de niveau disent ce qui est présent, pas seulement « plus » ou « moins » : « utilise deux éléments de preuve et explique comment chacun soutient l'affirmation » vaut mieux que « bonne utilisation des preuves ». Demandez à l'IA de réécrire les cases vagues.",
            "Demandez ensuite une version pour les élèves, formulée avec « je », et testez les deux sur un exemple : un travail correspond-il clairement à un niveau ? Une grille n'est juste que si deux enseignants noteraient le même travail de la même façon."
          ],
          steps: ["Donnez la tâche et les critères de réussite.", "Demandez 3 ou 4 critères et 4 niveaux.", "Réécrivez les cases vagues pour dire ce qui est présent dans le travail.", "Demandez une version pour les élèves, avec « je ».", "Testez sur un exemple : deux enseignants seraient-ils d'accord ?"],
          words: [["Grille d'évaluation", "un guide de notation qui décrit la qualité à différents niveaux."], ["Critère", "une qualité que l'on juge, comme l'usage des preuves."], ["Grille analytique", "une grille qui note chaque critère séparément."]],
          slides: [
            { title: "Grille analytique", bullets: ["3 ou 4 critères tirés des critères de réussite", "4 niveaux chacun", "Une courte description par case"] },
            { title: "Décrivez ce qui est présent", bullets: ["Pas « bonne utilisation des preuves »", "Mais « deux éléments de preuve, chacun expliqué »"] },
            { title: "Rendez-la juste et claire", bullets: ["Version pour les élèves, avec « je »", "Deux enseignants seraient-ils d'accord ?"] }
          ],
          tryIt: "Construisez avec l'IA une grille à quatre niveaux pour une tâche que vous donnez. Réécrivez toute case vague, faites la version pour les élèves et testez-la sur une réponse inventée.",
          youCanNow: "construire avec l'IA une grille claire à quatre niveaux et une version pour les élèves.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une grille analytique ?", options: ["Une grille avec une seule note globale", "Une grille qui note chaque critère séparément", "Une grille écrite par l'IA", "Une liste de matériel"], answer: 1, why: "Les grilles analytiques donnent des niveaux séparés pour chaque critère." },
            { objective: "O2", q: "Une case de la grille dit « bonne utilisation des preuves ». Que changeriez-vous ?", options: ["Rien, c'est clair", "Supprimer la case", "Ajouter le mot « très »", "Dire exactement ce que font les élèves, comme « utilise deux preuves et explique chacune »"], answer: 3, why: "Des cases précises rendent la notation juste et aident les élèves à savoir quoi faire." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Des vérifications formatives rapides",
          minutes: 5,
          goal: "Concevoir des billets de sortie et des vérifications en cours de leçon qui montrent ce dont chacun a besoin ensuite.",
          text: [
            "L'évaluation formative consiste à vérifier l'apprentissage pendant l'enseignement pour pouvoir s'ajuster. Elle est rapide et sans enjeu important. L'IA est douée pour produire beaucoup de courtes vérifications : billets de sortie de trois questions, une question charnière au milieu de la leçon, petits problèmes sur ardoise.",
            "Une question charnière a des choix de réponse conçus pour que chaque mauvaise réponse montre une idée fausse précise. Demandez à l'IA : « Écris une question charnière à choix multiple pour [objectif]. Chaque mauvaise réponse doit révéler une idée fausse fréquente différente ; explique laquelle. »",
            "Prévoyez ce que vous ferez des résultats avant de donner la vérification : qui sera réenseigné, qui passe à la suite. Une vérification dont on ne fait rien n'est que du papier en plus."
          ],
          steps: ["Choisissez le moment : milieu ou fin de leçon.", "Demandez à l'IA une question charnière ou un billet de sortie de trois questions.", "Vérifiez que chaque mauvaise réponse renvoie à une vraie idée fausse.", "Décidez à l'avance ce que vous ferez de chaque résultat.", "Agissez dès le lendemain."],
          words: [["Évaluation formative", "des vérifications sans enjeu important pendant l'apprentissage, pour ajuster l'enseignement."], ["Billet de sortie", "une courte tâche que les élèves font à la fin d'une leçon."], ["Question charnière", "une question dont chaque mauvaise réponse révèle une idée fausse précise."]],
          slides: [
            { title: "Formatif = vérifier et ajuster", bullets: ["Rapide et sans enjeu important", "Billets de sortie, questions charnières, ardoises"] },
            { title: "Questions charnières", bullets: ["Une question en milieu de leçon", "Chaque mauvaise réponse = une idée fausse", "Demandez à l'IA d'expliquer laquelle"] },
            { title: "Prévoyez la suite", bullets: ["Qui sera réenseigné ?", "Qui passe à la suite ?", "Une vérification inutilisée n'est que du papier"] }
          ],
          tryIt: "Demandez à l'IA une question charnière et un billet de sortie de trois questions pour votre objectif. Pour chaque mauvaise réponse à la question charnière, écrivez ce que vous réenseigneriez.",
          youCanNow: "concevoir des vérifications formatives rapides et prévoir quoi faire des résultats.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que l'évaluation formative ?", options: ["L'examen final", "Un test de l'État", "Des vérifications sans enjeu pendant l'apprentissage pour ajuster l'enseignement", "Une note de comportement"], answer: 2, why: "Les vérifications formatives vous disent quoi enseigner ensuite." },
            { objective: "O3", q: "La moitié de la classe choisit la même mauvaise réponse à la question charnière. Que faites-vous ?", options: ["Réenseigner l'idée fausse que révèle cette réponse", "Passer à la leçon suivante", "Baisser la note de tout le monde", "Demander à l'IA de noter la question charnière"], answer: 0, why: "Chaque mauvaise réponse à la question charnière pointe une idée fausse que vous pouvez réenseigner." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire des évaluations avec l'IA",
        questions: [
          { objective: "O1", q: "Pourquoi demander à l'IA d'expliquer pourquoi chaque mauvaise option est tentante ?", options: ["Cela allonge le test", "Pour piéger les élèves injustement", "Des distracteurs qui reflètent des idées fausses montrent comment les élèves pensent", "C'est obligatoire"], answer: 2, why: "De bons distracteurs révèlent les idées fausses." },
          { objective: "O1", q: "Une question à choix multiple de l'IA a deux réponses qui pourraient être justes. Vous devez :", options: ["La corriger ou la retirer", "La garder", "Accepter les deux", "Donner tous les points à tout le monde"], answer: 0, why: "Chaque question doit avoir une seule réponse clairement juste." },
          { objective: "O2", q: "Quelle case de grille est la mieux rédigée ?", options: ["« Bonnes preuves »", "« Plus de preuves »", "« Beau travail »", "« Utilise deux éléments de preuve et explique comment chacun soutient l'affirmation »"], answer: 3, why: "Elle décrit ce qui est présent dans le travail." },
          { objective: "O3", q: "Qu'est-ce qu'une question charnière ?", options: ["Une question sur les portes", "Une question dont chaque mauvaise réponse révèle une idée fausse", "Une question d'examen final", "Une question de devoir à la maison"], answer: 1, why: "Elle montre quoi réenseigner en milieu de leçon." },
          { objective: "O3", q: "Quand décider quoi faire des résultats d'un billet de sortie ?", options: ["Seulement si la plupart des élèves échouent", "Jamais", "À la fin de l'année", "Avant de donner la vérification"], answer: 3, why: "Prévoir la suite rend la vérification utile." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Une rétroaction dont l'enseignant reste maître",
      lessons: [
        {
          objectives: ["O4"],
          title: "Une démarche de rétroaction : l'IA rédige, l'enseignant décide",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger une rétroaction liée à une grille, puis la corriger et l'assumer.",
          text: [
            "Une bonne rétroaction est précise, liée aux critères, et dit à l'élève quoi faire ensuite. Une banque de commentaires aide : demandez à l'IA deux ou trois commentaires par critère et par niveau de la grille, chacun avec un point fort (« ce qui brille ») et une prochaine étape (« ce qui peut grandir »).",
            "Démarche : lisez d'abord vous-même le travail de l'élève et choisissez le niveau dans la grille. Choisissez ou rédigez ensuite les commentaires, en utilisant l'IA pour ajuster la formulation si besoin. Si vous utilisez l'IA pour rédiger des commentaires sur de vrais travaux d'élèves, faites-le seulement dans un outil que votre district a approuvé pour les travaux d'élèves, et retirez les noms et les détails identifiants.",
            "C'est vous qui attribuez la note. Les notes de l'IA peuvent être incohérentes, récompenser la longueur plutôt que la qualité, et être injustes envers les élèves qui apprennent la langue de l'école et ceux en situation de handicap. Corrigez chaque commentaire pour qu'il vous ressemble et convienne à l'élève ; les élèves remarquent une rétroaction générique."
          ],
          steps: ["Constituez une banque de commentaires par critère et par niveau : point fort et prochaine étape.", "Lisez vous-même le travail et choisissez le niveau dans la grille.", "Choisissez ou ajustez les commentaires ; outils approuvés seulement pour les vrais travaux.", "Retirez les noms et les détails identifiants.", "Attribuez la note vous-même ; corrigez chaque commentaire."],
          words: [["Banque de commentaires", "un ensemble enregistré de commentaires de rétroaction à réutiliser et à ajuster."], ["Point fort et prochaine étape", "une rétroaction avec une force et une piste pour progresser."]],
          slides: [
            { title: "Une bonne rétroaction", bullets: ["Précise et liée aux critères", "Un point fort, une prochaine étape"] },
            { title: "La démarche", bullets: ["Vous lisez le travail et choisissez le niveau", "Choisissez ou ajustez les commentaires", "Outils approuvés seulement pour les vrais travaux ; pas de noms"] },
            { title: "C'est vous qui notez", bullets: ["Les notes de l'IA peuvent être incohérentes", "Elles peuvent récompenser la longueur plutôt que la qualité", "Corrigez pour que cela vous ressemble"] }
          ],
          tryIt: "Constituez une banque de huit commentaires « point fort et prochaine étape » pour votre grille. Écrivez trois réponses d'élèves inventées, notez-les vous-même, puis choisissez et corrigez des commentaires pour chacune.",
          youCanNow: "mener une démarche de rétroaction où l'IA aide à rédiger et où vous décidez.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une banque de commentaires ?", options: ["Des rétroactions que l'IA envoie seule aux élèves", "Des commentaires enregistrés que vous réutilisez et ajustez", "Une liste de notes", "Un compte bancaire pour l'argent de l'école"], answer: 1, why: "Une banque de commentaires fait gagner du temps, et l'enseignant choisit et corrige toujours chaque commentaire." },
            { objective: "O4", q: "L'IA rédige un commentaire qui ne correspond pas au travail d'un élève. Que feriez-vous ?", options: ["L'envoyer quand même", "Laisser l'IA changer la note", "Ne pas donner de rétroaction à cet élève", "Corriger le commentaire pour qu'il corresponde au travail, et garder votre propre note"], answer: 3, why: "L'IA rédige et l'enseignant décide : vous êtes responsable de chaque commentaire et de chaque note." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Protéger les travaux et les notes des élèves",
          minutes: 5,
          goal: "Appliquer les bases de FERPA aux travaux, aux notes et aux outils d'IA.",
          text: [
            "Aux États-Unis, les travaux et les notes conservés par l'école font en général partie des dossiers scolaires au sens de FERPA. Communiquer à une entreprise extérieure des informations permettant d'identifier un élève demande en général un consentement, sauf exception ; par exemple, un fournisseur peut agir comme « responsable scolaire » quand il rend un service à l'école, est sous le contrôle direct de l'école et respecte des limites sur le partage. C'est pourquoi les accords du district comptent. Ailleurs, suivez les lois de votre pays sur la protection des données des élèves.",
            "Règles pratiques pour le personnel : n'utilisez que des outils approuvés par le district pour les vrais travaux d'élèves ; retirez quand même les noms et les détails identifiants ; ne téléversez jamais de carnets de notes, de documents IEP ou 504 ni d'informations disciplinaires dans des outils non approuvés ; et vérifiez dans les conditions de l'outil s'il conserve les travaux téléversés ou s'en sert pour s'entraîner.",
            "Expliquez aux familles comment l'IA est utilisée dans la rétroaction. Selon FERPA, les parents ont le droit de consulter et d'examiner les dossiers scolaires de leur enfant, et la transparence crée la confiance. Pour les règles exactes de votre district, demandez à votre responsable de la protection des données."
          ],
          steps: ["N'utilisez que des outils approuvés pour les vrais travaux d'élèves.", "Retirez les noms et les détails identifiants.", "Ne téléversez jamais de carnets de notes, de dossiers IEP, 504 ou disciplinaires dans des outils non approuvés.", "Vérifiez si l'outil conserve les fichiers téléversés ou s'entraîne dessus.", "Expliquez aux familles comment l'IA est utilisée dans la rétroaction."],
          words: [["Dossier scolaire", "un document directement lié à un élève et conservé par l'école."], ["Exception du « responsable scolaire »", "une règle de FERPA qui permet à certains fournisseurs sous le contrôle de l'école d'accéder aux dossiers pour un but scolaire."]],
          slides: [
            { title: "Travaux et notes sont des dossiers", bullets: ["En général des dossiers scolaires selon FERPA", "Partager des données identifiantes demande en général un consentement", "Sauf exception"] },
            { title: "Règles pour le personnel", bullets: ["Outils approuvés seulement pour les vrais travaux", "Retirez quand même les noms", "Pas de carnets de notes, de plans IEP ni de dossiers disciplinaires"] },
            { title: "Soyez transparent avec les familles", bullets: ["Expliquez comment l'IA aide à la rétroaction", "Les parents peuvent consulter les dossiers", "Demandez les détails au responsable des données"] }
          ],
          sources: [{ name: "FERPA : protéger la vie privée des élèves (ministère de l'Éducation des États-Unis)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Écrivez une note de trois phrases pour les familles expliquant comment votre classe ou votre école utilise l'IA pour aider à la rétroaction, ce qui est protégé, et que les enseignants décident de toutes les notes.",
          youCanNow: "protéger les travaux et les notes des élèves quand l'IA fait partie de la rétroaction.",
          quickCheck: [
            { objective: "O5", q: "Selon FERPA, de quoi les travaux d'élèves conservés par l'école font-ils généralement partie ?", options: ["Des dossiers scolaires", "Des documents publics que tout le monde peut voir", "Des notes privées de l'enseignant", "De la propriété du fournisseur"], answer: 0, why: "Les travaux d'élèves conservés par l'école font généralement partie des dossiers scolaires protégés." },
            { objective: "O5", q: "Un enseignant veut l'aide de l'IA pour commenter de vraies rédactions. Que lui conseilleriez-vous ?", options: ["Coller les rédactions dans n'importe quel chatbot gratuit", "Envoyer aussi le carnet de notes, pour le contexte", "Utiliser seulement un outil approuvé par le district, avec les détails identifiants retirés", "Demander aux élèves de coller eux-mêmes leurs rédactions dans une IA"], answer: 2, why: "Des outils approuvés et des identifiants retirés protègent les dossiers des élèves." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Soupçon d'usage de l'IA dans un travail : agir équitablement",
          minutes: 6,
          goal: "Réagir à un soupçon d'usage de l'IA avec des règles claires et une démarche juste, pas avec le score d'un détecteur.",
          text: [
            "Les détecteurs d'écriture par l'IA peuvent se tromper. Ils peuvent signaler un travail honnête, et des chercheurs et des enseignants craignent qu'ils signalent plus souvent les textes d'élèves qui apprennent la langue. Le score d'un détecteur ne doit jamais être à lui seul la preuve d'une tricherie.",
            "Prévenez d'abord : dites clairement aux élèves quel usage de l'IA est permis pour chaque tâche (par exemple : aucun, seulement pour trouver des idées, ou permis avec une note expliquant comment). Concevez des tâches où la réflexion est visible : brouillons, écriture en classe, explications orales, liens personnels.",
            "Si vous soupçonnez un abus, parlez avec l'élève : demandez-lui d'expliquer son travail, de montrer ses brouillons ou de refaire une partie en classe. Suivez la politique d'intégrité scolaire de votre école, impliquez les familles comme elle le demande, et faites-en un moment d'apprentissage quand c'est possible."
          ],
          steps: ["Indiquez l'usage de l'IA permis pour chaque tâche.", "Concevez des tâches où la réflexion est visible.", "Ne vous fiez jamais au seul score d'un détecteur.", "Parlez avec l'élève ; demandez-lui d'expliquer ou de montrer ses brouillons.", "Suivez votre politique d'intégrité scolaire."],
          words: [["Intégrité scolaire", "l'honnêteté dans le travail scolaire : faire son propre travail et dire quand on a été aidé."], ["Faux positif", "quand un détecteur signale à tort un travail honnête."]],
          slides: [
            { title: "Les détecteurs peuvent se tromper", bullets: ["Ils peuvent signaler un travail honnête", "Inquiétudes pour les élèves qui apprennent la langue", "Jamais la seule preuve"] },
            { title: "Prévenez d'abord", bullets: ["Indiquez l'usage de l'IA permis pour chaque tâche", "Rendez la réflexion visible : brouillons, oral, travail en classe"] },
            { title: "En cas de soupçon", bullets: ["Parlez avec l'élève", "Demandez-lui d'expliquer ou de refaire une partie", "Suivez votre politique d'intégrité"] }
          ],
          tryIt: "Tâche finale : terminez votre dossier d'évaluation (cinq questions vérifiées, grille et version élèves, billet de sortie, banque de huit commentaires), appliquez la démarche de rétroaction à trois réponses inventées avec vos propres notes, et ajoutez une règle d'une ligne sur l'usage de l'IA pour la tâche.",
          youCanNow: "utiliser l'IA dans l'évaluation et la rétroaction tout en gardant des notes justes, confidentielles et entre les mains de l'enseignant.",
          quickCheck: [
            { objective: "O6", q: "Quelle erreur les détecteurs d'écriture par IA peuvent-ils faire ?", options: ["Aucune ; ils ont toujours raison", "Signaler un travail honnête comme écrit par une IA", "Noter des rédactions", "Écrire des rédactions"], answer: 1, why: "Les détecteurs peuvent signaler à tort un travail honnête : ils ne sont jamais la seule preuve." },
            { objective: "O6", q: "Vous soupçonnez qu'un élève a utilisé l'IA contre la règle de la tâche. Quelle est une première étape juste ?", options: ["Mettre zéro tout de suite", "Le signaler devant toute la classe", "Lancer trois autres détecteurs", "Demander à l'élève d'expliquer son travail ou de montrer ses brouillons"], answer: 3, why: "Une conversation et d'autres preuves sont plus justes que le score d'un détecteur." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Une rétroaction dont l'enseignant reste maître",
        questions: [
          { objective: "O4", q: "Dans la démarche de rétroaction, que fait l'enseignant en premier ?", options: ["Coller le travail dans n'importe quel outil d'IA", "Laisser l'IA le noter", "Lire le travail et choisir le niveau dans la grille", "L'envoyer aux parents"], answer: 2, why: "Le jugement de l'enseignant passe en premier." },
          { objective: "O4", q: "Qui attribue la note ?", options: ["L'enseignant", "L'IA", "L'élève", "Le fournisseur"], answer: 0, why: "Les notes sont des décisions de l'enseignant." },
          { objective: "O5", q: "Selon FERPA, un travail d'élève conservé par l'école est en général :", options: ["Une information publique", "Une partie des dossiers scolaires", "La propriété de l'entreprise d'IA", "Non concerné"], answer: 1, why: "Les documents directement liés à un élève et conservés par l'école sont des dossiers scolaires." },
          { objective: "O6", q: "Un détecteur dit qu'une dissertation est écrite à 90 % par l'IA. Que faites-vous ?", options: ["Parler avec l'élève et examiner d'autres éléments", "Mettre zéro", "Signaler la famille", "Ignorer toutes les règles"], answer: 0, why: "Le score d'un détecteur seul n'est pas une preuve." },
          { objective: "O6", q: "Qu'est-ce qui prévient le mieux les abus de l'IA ?", options: ["Ne rien dire", "Interdire les ordinateurs pour toujours", "Utiliser plus de détecteurs", "Indiquer l'usage de l'IA permis pour chaque tâche et rendre la réflexion visible"], answer: 3, why: "Des règles claires et une réflexion visible préviennent les problèmes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 4 : l'IA pour l'évaluation et la rétroaction",
    questions: [
      { objective: "O1", q: "Une question alignée :", options: ["Est la plus difficile", "Mesure l'objectif qu'elle est censée mesurer", "Est la plus longue", "Est choisie par l'IA seule"], answer: 1, why: "L'alignement est le premier test d'une bonne question." },
      { objective: "O1", q: "Un distracteur est :", options: ["Un téléphone", "Un élève bruyant", "Une mauvaise option dans un choix multiple", "Une question bonus"], answer: 2, why: "De bons distracteurs révèlent les idées fausses." },
      { objective: "O1", q: "Après que l'IA a écrit un corrigé, vous devez :", options: ["L'imprimer", "Lui faire confiance", "Refaire chaque réponse vous-même", "Le donner aux élèves"], answer: 2, why: "Les corrigés contiennent des erreurs." },
      { objective: "O1", q: "Un mélange de niveaux de questions signifie :", options: ["Se rappeler, appliquer et expliquer", "Seulement des questions faciles", "Seulement des questions difficiles", "Seulement vrai ou faux"], answer: 0, why: "Différents niveaux montrent différentes profondeurs d'apprentissage." },
      { objective: "O2", q: "Une grille analytique :", options: ["Est écrite par les élèves", "Donne seulement une note globale", "N'a pas de niveaux", "Note chaque critère séparément"], answer: 3, why: "Chaque critère reçoit son propre niveau." },
      { objective: "O2", q: "Une grille pour les élèves utilise :", options: ["Un langage juridique", "Des phrases avec « je »", "Du code", "Seulement des chiffres"], answer: 1, why: "Les élèves doivent comprendre l'objectif." },
      { objective: "O2", q: "Une grille est juste quand :", options: ["Tout le monde a la meilleure note", "Elle est très longue", "L'IA l'a écrite", "Deux enseignants noteraient le même travail de la même façon"], answer: 3, why: "La cohérence, c'est l'équité." },
      { objective: "O3", q: "L'évaluation formative est :", options: ["Un bulletin scolaire", "L'examen final", "Une vérification sans enjeu important pendant l'apprentissage pour ajuster l'enseignement", "Un examen national"], answer: 2, why: "Elle guide l'étape suivante." },
      { objective: "O3", q: "Un billet de sortie est donné :", options: ["À la fin d'une leçon", "Au début de l'année", "Seulement le vendredi", "Seulement aux parents"], answer: 0, why: "Il vérifie l'apprentissage du jour." },
      { objective: "O3", q: "Une vérification dont on ne fait rien est :", options: ["La meilleure", "Juste du papier en plus", "Obligatoire", "Sommative"], answer: 1, why: "Les vérifications formatives comptent quand elles changent l'enseignement." },
      { objective: "O4", q: "Une rétroaction « point fort et prochaine étape » donne :", options: ["Une force et une piste pour progresser", "Seulement des compliments", "Seulement des critiques", "Seulement une note"], answer: 0, why: "Les élèves ont besoin des deux." },
      { objective: "O4", q: "Une banque de commentaires est :", options: ["Une application de notation", "Un compte d'épargne", "Une liste d'élèves", "Des commentaires enregistrés que l'on réutilise et ajuste"], answer: 3, why: "Elle fait gagner du temps tout en gardant une rétroaction précise." },
      { objective: "O4", q: "Les notes de l'IA peuvent être injustes parce qu'elles peuvent :", options: ["Être toujours parfaites", "Récompenser la longueur plutôt que la qualité", "Ne jamais lire le travail", "Suivre exactement la grille"], answer: 1, why: "Le biais de longueur est un problème fréquent." },
      { objective: "O5", q: "Pour de vrais travaux d'élèves, utilisez :", options: ["Les réseaux sociaux", "N'importe quel outil gratuit", "Seulement des outils approuvés par le district, sans détails identifiants", "Votre courriel personnel"], answer: 2, why: "Des outils approuvés et des détails retirés protègent la vie privée." },
      { objective: "O5", q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA non approuvé ?", options: ["Un billet de sortie vierge", "Une grille générique", "Un carnet de notes", "Une réponse inventée"], answer: 2, why: "Les carnets de notes contiennent des dossiers scolaires identifiants." },
      { objective: "O5", q: "Selon FERPA, les parents peuvent :", options: ["Consulter et examiner les dossiers scolaires de leur enfant", "Noter le travail", "Approuver les fournisseurs", "Écrire la grille"], answer: 0, why: "La consultation est un droit essentiel de FERPA." },
      { objective: "O5", q: "Un fournisseur peut agir comme « responsable scolaire » quand il :", options: ["A beaucoup d'utilisateurs", "Est gratuit", "Le demande poliment", "Rend un service scolaire sous le contrôle direct de l'école, avec des limites sur le partage"], answer: 3, why: "Ce sont les conditions de FERPA." },
      { objective: "O6", q: "Les détecteurs d'écriture par l'IA :", options: ["Ont toujours raison", "Peuvent signaler à tort un travail honnête", "Sont exigés par la loi", "Prouvent la tricherie"], answer: 1, why: "Les faux positifs existent." },
      { objective: "O6", q: "Si vous soupçonnez un abus de l'IA, une première étape juste est de :", options: ["Ignorer votre politique", "Mettre zéro", "En parler sur les réseaux", "Demander à l'élève d'expliquer son travail ou de montrer ses brouillons"], answer: 3, why: "La discussion permet de recueillir de vrais éléments." },
      { objective: "O6", q: "Chaque tâche doit indiquer :", options: ["Que l'IA est toujours interdite", "Rien sur l'IA", "Quel usage de l'IA est permis", "La note de l'élève"], answer: 2, why: "Des règles claires évitent les malentendus." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      7,
      10,
      12,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Questions alignées",
        objective: "O1",
        notYet: "Moins de cinq questions, ou corrigé non vérifié.",
        meets: "Cinq questions alignées sur l'objectif avec un corrigé que vous avez refait vous-même.",
        exceeds: "Les questions mêlent mémoriser, appliquer et expliquer, et les distracteurs reflètent de vraies idées fausses."
      },
      {
        name: "Grille",
        objective: "O2",
        notYet: "Moins de quatre niveaux, des cases vagues, ou pas de version pour les élèves.",
        meets: "Une grille à quatre niveaux avec trois ou quatre critères et une version pour les élèves.",
        exceeds: "Chaque case décrit ce que font les élèves, et la grille a été testée sur une réponse inventée."
      },
      {
        name: "Billet de sortie",
        objective: "O3",
        notYet: "Pas de billet de sortie, ou il ne correspond pas à l'objectif.",
        meets: "Un billet de sortie de trois questions pour l'objectif.",
        exceeds: "Dit ce que vous ferez de chaque résultat avant de le donner."
      },
      {
        name: "Démarche de rétroaction",
        objective: "O4",
        notYet: "Moins de huit commentaires, commentaires de l'IA utilisés sans changement, ou notes écrites par l'IA.",
        meets: "Au moins huit commentaires liés à la grille, trois réponses inventées, un commentaire de l'IA modifié et des notes écrites par vous.",
        exceeds: "Chaque réponse reçoit un point fort et une prochaine étape liés à un niveau de la grille."
      },
      {
        name: "Vie privée et usage juste de l'IA",
        objective: "O6",
        notYet: "De vrais détails d'élèves ont été utilisés, ou pas de règle d'usage de l'IA pour la tâche.",
        meets: "Seuls des travaux inventés ont été utilisés, et la tâche a une règle d'usage de l'IA d'une ligne.",
        exceeds: "Comprend une courte note aux familles sur la façon dont l'IA aide à la rétroaction et sur qui décide des notes."
      }
    ]
  },
  evaluation: {
    results: [
      "Éducateurs qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Enseignants qui disent avoir utilisé le kit d'évaluation ou la banque de commentaires avec une classe dans les 30 jours (enquête de suivi)",
      "Enseignants qui disent gagner du temps de rétroaction tout en écrivant eux-mêmes chaque note (enquête de suivi)",
      "Écoles où chaque tâche importante indique l'usage de l'IA permis (enquête de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et un assistant IA approuvé par le district pour cet usage",
      "Un objectif et une tâche que vous donnez",
      "Trois réponses d'élèves inventées",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites refaire les corrigés de l'IA par binômes et comparer les erreurs trouvées.",
      "Utilisez seulement des travaux d'élèves inventés ; ne collez jamais de vrais travaux ou de vraies notes dans des outils non approuvés.",
      "Faites noter la même réponse inventée par deux enseignants avec chaque grille pour vérifier qu'elle est juste.",
      "Discutez d'une démarche juste pour les soupçons d'usage de l'IA avant qu'un cas se présente, et convenez que le score d'un détecteur n'est jamais la seule preuve.",
      "Notez l'exercice final avec la grille, et vérifiez que chaque note a été écrite par l'enseignant."
    ]
  }
};
