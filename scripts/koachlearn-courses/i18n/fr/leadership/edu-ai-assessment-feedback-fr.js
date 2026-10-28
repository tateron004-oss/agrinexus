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
  chapters: [
    {
      name: "Chapitre 1 : Construire des évaluations avec l'IA",
      lessons: [
        {
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
          youCanNow: "rédiger avec l'IA des questions d'évaluation alignées et vérifier le corrigé."
        },
        {
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
          youCanNow: "construire avec l'IA une grille claire à quatre niveaux et une version pour les élèves."
        },
        {
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
          youCanNow: "concevoir des vérifications formatives rapides et prévoir quoi faire des résultats."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire des évaluations avec l'IA",
        questions: [
          { q: "Pourquoi demander à l'IA d'expliquer pourquoi chaque mauvaise option est tentante ?", options: ["Cela allonge le test", "Pour piéger les élèves injustement", "Des distracteurs qui reflètent des idées fausses montrent comment les élèves pensent", "C'est obligatoire"], answer: 2, why: "De bons distracteurs révèlent les idées fausses." },
          { q: "Une question à choix multiple de l'IA a deux réponses qui pourraient être justes. Vous devez :", options: ["La corriger ou la retirer", "La garder", "Accepter les deux", "Donner tous les points à tout le monde"], answer: 0, why: "Chaque question doit avoir une seule réponse clairement juste." },
          { q: "Quelle case de grille est la mieux rédigée ?", options: ["« Bonnes preuves »", "« Plus de preuves »", "« Beau travail »", "« Utilise deux éléments de preuve et explique comment chacun soutient l'affirmation »"], answer: 3, why: "Elle décrit ce qui est présent dans le travail." },
          { q: "Qu'est-ce qu'une question charnière ?", options: ["Une question sur les portes", "Une question dont chaque mauvaise réponse révèle une idée fausse", "Une question d'examen final", "Une question de devoir à la maison"], answer: 1, why: "Elle montre quoi réenseigner en milieu de leçon." },
          { q: "Quand décider quoi faire des résultats d'un billet de sortie ?", options: ["Seulement si la plupart des élèves échouent", "Jamais", "À la fin de l'année", "Avant de donner la vérification"], answer: 3, why: "Prévoir la suite rend la vérification utile." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Une rétroaction dont l'enseignant reste maître",
      lessons: [
        {
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
          youCanNow: "mener une démarche de rétroaction où l'IA aide à rédiger et où vous décidez."
        },
        {
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
          youCanNow: "protéger les travaux et les notes des élèves quand l'IA fait partie de la rétroaction."
        },
        {
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
          youCanNow: "utiliser l'IA dans l'évaluation et la rétroaction tout en gardant des notes justes, confidentielles et entre les mains de l'enseignant."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Une rétroaction dont l'enseignant reste maître",
        questions: [
          { q: "Dans la démarche de rétroaction, que fait l'enseignant en premier ?", options: ["Coller le travail dans n'importe quel outil d'IA", "Laisser l'IA le noter", "Lire le travail et choisir le niveau dans la grille", "L'envoyer aux parents"], answer: 2, why: "Le jugement de l'enseignant passe en premier." },
          { q: "Qui attribue la note ?", options: ["L'enseignant", "L'IA", "L'élève", "Le fournisseur"], answer: 0, why: "Les notes sont des décisions de l'enseignant." },
          { q: "Selon FERPA, un travail d'élève conservé par l'école est en général :", options: ["Une information publique", "Une partie des dossiers scolaires", "La propriété de l'entreprise d'IA", "Non concerné"], answer: 1, why: "Les documents directement liés à un élève et conservés par l'école sont des dossiers scolaires." },
          { q: "Un détecteur dit qu'une dissertation est écrite à 90 % par l'IA. Que faites-vous ?", options: ["Parler avec l'élève et examiner d'autres éléments", "Mettre zéro", "Signaler la famille", "Ignorer toutes les règles"], answer: 0, why: "Le score d'un détecteur seul n'est pas une preuve." },
          { q: "Qu'est-ce qui prévient le mieux les abus de l'IA ?", options: ["Ne rien dire", "Interdire les ordinateurs pour toujours", "Utiliser plus de détecteurs", "Indiquer l'usage de l'IA permis pour chaque tâche et rendre la réflexion visible"], answer: 3, why: "Des règles claires et une réflexion visible préviennent les problèmes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 4 : l'IA pour l'évaluation et la rétroaction",
    questions: [
      { q: "Une question alignée :", options: ["Est la plus difficile", "Mesure l'objectif qu'elle est censée mesurer", "Est la plus longue", "Est choisie par l'IA seule"], answer: 1, why: "L'alignement est le premier test d'une bonne question." },
      { q: "Un distracteur est :", options: ["Un téléphone", "Un élève bruyant", "Une mauvaise option dans un choix multiple", "Une question bonus"], answer: 2, why: "De bons distracteurs révèlent les idées fausses." },
      { q: "Après que l'IA a écrit un corrigé, vous devez :", options: ["L'imprimer", "Lui faire confiance", "Refaire chaque réponse vous-même", "Le donner aux élèves"], answer: 2, why: "Les corrigés contiennent des erreurs." },
      { q: "Un mélange de niveaux de questions signifie :", options: ["Se rappeler, appliquer et expliquer", "Seulement des questions faciles", "Seulement des questions difficiles", "Seulement vrai ou faux"], answer: 0, why: "Différents niveaux montrent différentes profondeurs d'apprentissage." },
      { q: "Une grille analytique :", options: ["Est écrite par les élèves", "Donne seulement une note globale", "N'a pas de niveaux", "Note chaque critère séparément"], answer: 3, why: "Chaque critère reçoit son propre niveau." },
      { q: "Une grille pour les élèves utilise :", options: ["Un langage juridique", "Des phrases avec « je »", "Du code", "Seulement des chiffres"], answer: 1, why: "Les élèves doivent comprendre l'objectif." },
      { q: "Une grille est juste quand :", options: ["Tout le monde a la meilleure note", "Elle est très longue", "L'IA l'a écrite", "Deux enseignants noteraient le même travail de la même façon"], answer: 3, why: "La cohérence, c'est l'équité." },
      { q: "L'évaluation formative est :", options: ["Un bulletin scolaire", "L'examen final", "Une vérification sans enjeu important pendant l'apprentissage pour ajuster l'enseignement", "Un examen national"], answer: 2, why: "Elle guide l'étape suivante." },
      { q: "Un billet de sortie est donné :", options: ["À la fin d'une leçon", "Au début de l'année", "Seulement le vendredi", "Seulement aux parents"], answer: 0, why: "Il vérifie l'apprentissage du jour." },
      { q: "Une vérification dont on ne fait rien est :", options: ["La meilleure", "Juste du papier en plus", "Obligatoire", "Sommative"], answer: 1, why: "Les vérifications formatives comptent quand elles changent l'enseignement." },
      { q: "Une rétroaction « point fort et prochaine étape » donne :", options: ["Une force et une piste pour progresser", "Seulement des compliments", "Seulement des critiques", "Seulement une note"], answer: 0, why: "Les élèves ont besoin des deux." },
      { q: "Une banque de commentaires est :", options: ["Une application de notation", "Un compte d'épargne", "Une liste d'élèves", "Des commentaires enregistrés que l'on réutilise et ajuste"], answer: 3, why: "Elle fait gagner du temps tout en gardant une rétroaction précise." },
      { q: "Les notes de l'IA peuvent être injustes parce qu'elles peuvent :", options: ["Être toujours parfaites", "Récompenser la longueur plutôt que la qualité", "Ne jamais lire le travail", "Suivre exactement la grille"], answer: 1, why: "Le biais de longueur est un problème fréquent." },
      { q: "Pour de vrais travaux d'élèves, utilisez :", options: ["Les réseaux sociaux", "N'importe quel outil gratuit", "Seulement des outils approuvés par le district, sans détails identifiants", "Votre courriel personnel"], answer: 2, why: "Des outils approuvés et des détails retirés protègent la vie privée." },
      { q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA non approuvé ?", options: ["Un billet de sortie vierge", "Une grille générique", "Un carnet de notes", "Une réponse inventée"], answer: 2, why: "Les carnets de notes contiennent des dossiers scolaires identifiants." },
      { q: "Selon FERPA, les parents peuvent :", options: ["Consulter et examiner les dossiers scolaires de leur enfant", "Noter le travail", "Approuver les fournisseurs", "Écrire la grille"], answer: 0, why: "La consultation est un droit essentiel de FERPA." },
      { q: "Un fournisseur peut agir comme « responsable scolaire » quand il :", options: ["A beaucoup d'utilisateurs", "Est gratuit", "Le demande poliment", "Rend un service scolaire sous le contrôle direct de l'école, avec des limites sur le partage"], answer: 3, why: "Ce sont les conditions de FERPA." },
      { q: "Les détecteurs d'écriture par l'IA :", options: ["Ont toujours raison", "Peuvent signaler à tort un travail honnête", "Sont exigés par la loi", "Prouvent la tricherie"], answer: 1, why: "Les faux positifs existent." },
      { q: "Si vous soupçonnez un abus de l'IA, une première étape juste est de :", options: ["Ignorer votre politique", "Mettre zéro", "En parler sur les réseaux", "Demander à l'élève d'expliquer son travail ou de montrer ses brouillons"], answer: 3, why: "La discussion permet de recueillir de vrais éléments." },
      { q: "Chaque tâche doit indiquer :", options: ["Que l'IA est toujours interdite", "Rien sur l'IA", "Quel usage de l'IA est permis", "La note de l'élève"], answer: 2, why: "Des règles claires évitent les malentendus." }
    ]
  }
};
