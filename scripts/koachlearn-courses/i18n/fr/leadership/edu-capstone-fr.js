"use strict";

// Koach Learn course (French translation of leadership/edu-capstone.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-capstone-fr",
  lang: "fr",
  translationOf: "edu-capstone",
  category: "Leadership Development",
  name: "L'IA pour les responsables scolaires et éducatifs 8 : projet final de synthèse",
  skills: "Choisir un problème centré sur les élèves, Concevoir un projet pilote d'IA bien délimité, Mener un contrôle de vie privée et d'équité, Prévoir la formation du personnel, Communiquer avec les familles, Fixer des mesures de réussite et présenter à la direction",
  outcome: "concevoir un plan de projet pilote d'IA complet et prêt à présenter pour votre école ou votre district : un vrai problème, un projet pilote délimité avec un outil évalué, un contrôle de vie privée et d'équité, un plan de formation du personnel, une communication aux familles, des mesures de réussite et une règle de décision, présenté en dix minutes à une équipe de direction ou à un conseil.",
  about: [
    "Ceci est le dernier cours de la série « L'IA pour les responsables scolaires et éducatifs ». Vous rassemblez tout ce que vous avez vu dans les cours 1 à 7, les bases, les outils, la préparation des leçons, l'évaluation, la culture de l'IA des élèves, la productivité et l'usage responsable, dans un plan que vous pourriez vraiment mettre en œuvre.",
    "Le chapitre 1 conçoit le projet pilote : le problème qui vaut la peine d'être résolu, le périmètre et l'outil, et le contrôle de vie privée et d'équité. Le chapitre 2 prépare les personnes et les preuves : formation du personnel, communication aux familles, mesures de réussite et présentation.",
    "Choisissez un projet pilote que vous avez l'autorité de proposer, ou que vous proposerez à quelqu'un qui l'a. Utilisez les lignes directrices rédigées dans le cours 7. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Terminez et présentez votre plan de projet pilote d'IA (environ quatre pages) : le problème et les personnes qu'il concerne, avec des preuves ; le périmètre du projet pilote (qui, quoi, combien de temps) et l'outil, avec son évaluation du fournisseur ; un contrôle de vie privée et d'équité (FERPA, COPPA pour les moins de 13 ans, accessibilité, accès) ; un plan de formation du personnel ; une lettre aux familles et une courte FAQ ; trois à cinq mesures de réussite avec un point de départ ; et une règle « continuer, ajuster ou arrêter ». Présentez-le en dix minutes à une équipe de direction, un groupe de collègues ou un conseil, et notez les questions et vos réponses.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chefs d'établissement, des responsables de district, des conseillers pédagogiques, des équipes du numérique et des enseignants référents qui terminent L'IA pour les responsables scolaires et éducatifs et qui vont proposer un projet pilote d'IA dans leur école ou leur district.",
    startingPoint: "Ils ont terminé les cours 1 à 7 : bases de l'IA, examen des outils, préparation des leçons, évaluation, culture de l'IA des élèves, productivité et lignes directrices écrites sur l'IA responsable. Ils n'ont pas encore conçu un projet pilote complet avec des mesures, une formation et une communication aux familles.",
    gap: "Beaucoup de projets d'IA scolaires partent d'un outil au lieu d'un problème, sautent les contrôles de vie privée et d'équité, et n'ont aucun moyen de savoir s'ils ont marché. Les responsables ont besoin d'un plan pilote complet et honnête qu'ils peuvent présenter et mener, pour que l'IA ne soit utilisée que là où elle aide les élèves.",
    constraints: [
      "Le projet pilote doit être un projet que l'apprenant a le pouvoir de proposer, ou qu'il proposera à quelqu'un qui a ce pouvoir",
      "FERPA, COPPA pour les élèves de moins de 13 ans, la politique du district et la loi de l'État s'appliquent ; le délégué à la protection des données donne son accord",
      "Aucune vraie donnée d'élève dans les documents du plan ; utilisez des preuves globales",
      "Les règles de financement fédéral changent : les apprenants vérifient auprès de leur service des programmes fédéraux",
      "Temps : des leçons courtes, le plan et la présentation demandant plusieurs séances"
    ],
    prerequisites: "Les cours 1 à 7 de L'IA pour les responsables scolaires et éducatifs, surtout le cours 7 (« Éthique, sécurité et IA responsable »)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une difficulté de votre école", action: "rédiger un énoncé du problème centré sur les élèves, avec des preuves", standard: "en disant ce qui ne va pas, pour qui et dans quelle mesure, et si l'IA est la bonne réponse" },
    { id: "O2", condition: "À partir de votre problème", action: "fixer un périmètre de projet pilote réduit et choisir un outil qui passe l'évaluation du fournisseur", standard: "en nommant qui, ce qui change et pour combien de temps, avec l'outil choisi après le périmètre" },
    { id: "O3", condition: "Avant le début du projet pilote", action: "mener un contrôle de vie privée et d'équité avec une protection et un responsable pour chaque risque", standard: "couvrant FERPA, COPPA si les élèves ont moins de 13 ans, l'accessibilité et l'accès, validé par le délégué à la protection des données" },
    { id: "O4", condition: "Pour le personnel du projet pilote", action: "prévoir une formation pratique, des règles et un accompagnement", standard: "avec un programme de formation de 60 minutes, une personne de contact nommée et les notes que les enseignants tiendront" },
    { id: "O5", condition: "Pour les familles des élèves du projet pilote", action: "rédiger une lettre aux familles honnête et une FAQ de cinq questions", standard: "en moins d'une page, relues par un parent ou un médiateur auprès des familles, avec les traductions vérifiées par des locuteurs qualifiés" },
    { id: "O6", condition: "Pour votre plan pilote complet", action: "fixer trois à cinq mesures de réussite avec une situation de départ et une règle « continuer, ajuster ou arrêter », et présenter le plan", standard: "en dix minutes, avec la règle écrite avant le début et les questions et réponses notées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Concevoir le projet pilote",
      lessons: [
        {
          objectives: ["O1"],
          title: "Partir d'un problème centré sur les élèves",
          minutes: 5,
          goal: "Définir le problème que votre projet pilote va résoudre, avec des preuves et les élèves concernés.",
          text: [
            "Les bons projets pilotes partent d'un problème, pas d'un produit. Demandez-vous : qu'est-ce qui freine l'apprentissage ou le bien-être des élèves, ou le temps que les enseignants passent avec eux ? Exemples : les enseignants passent des heures chaque semaine à traduire des messages pour les familles ; les élèves de première année du secondaire en algèbre ont besoin de plus d'exercices avec retour ; les nouveaux enseignants ont du mal à différencier.",
            "Rassemblez des preuves : les données que vous avez déjà (avec des protections de la vie privée), des enquêtes auprès des enseignants et des élèves, et des conversations. Écrivez le problème en une phrase avec qui est touché et dans quelle mesure : « Nos enseignants d'algèbre de 9e année disent disposer de moins de 10 minutes par semaine et par élève pour un retour individuel, et 40 % des élèves ont échoué au premier test. »",
            "Demandez-vous ensuite si l'IA est vraiment la bonne réponse. Parfois, un changement d'emploi du temps, un modèle de document ou plus de temps de personnel règle mieux le problème. Si l'IA convient, dites exactement ce qu'elle fera."
          ],
          steps: ["Listez les problèmes qui freinent l'apprentissage, le bien-être ou le temps des enseignants.", "Rassemblez des preuves : données, enquêtes, conversations.", "Écrivez le problème en une phrase : qui, quoi, dans quelle mesure.", "Demandez-vous si l'IA est la bonne réponse.", "Si oui, dites exactement ce que fera l'IA."],
          words: [["Énoncé du problème", "une phrase qui dit ce qui ne va pas, pour qui, et dans quelle mesure."], ["Preuves", "des données et des observations qui montrent qu'un problème est réel."]],
          slides: [
            { title: "Le problème d'abord, le produit ensuite", bullets: ["Qu'est-ce qui freine l'apprentissage, le bien-être ou le temps des enseignants ?", "Traductions, exercices, différenciation"] },
            { title: "Montrez les preuves", bullets: ["Données existantes, avec protection de la vie privée", "Enquêtes et conversations", "Une phrase : qui, quoi, dans quelle mesure"] },
            { title: "L'IA est-elle la réponse ?", bullets: ["Parfois un emploi du temps ou un modèle fait mieux", "Si l'IA convient, dites exactement ce qu'elle fait"] }
          ],
          tryIt: "Écrivez votre énoncé du problème en une phrase avec des preuves, et une phrase sur ce que l'IA ferait exactement, ou sur la raison pour laquelle autre chose marcherait mieux.",
          youCanNow: "définir un problème centré sur les élèves, avec des preuves, avant de choisir un outil d'IA.",
          quickCheck: [
            { objective: "O1", q: "Que dit un énoncé du problème ?", options: ["Quel outil d'IA vous voulez acheter", "Ce qui ne va pas, pour qui et dans quelle mesure", "Combien coûtera le projet pilote", "Qui présentera le plan"], answer: 1, why: "Un énoncé clair du problème garde le projet pilote centré sur les élèves, pas sur un outil." },
            { objective: "O1", q: "Un fournisseur offre à votre école un outil d'IA gratuit. Que feriez-vous d'abord ?", options: ["Commencer à l'utiliser, puisqu'il est gratuit", "Choisir plus tard un problème qu'il pourrait résoudre", "Définir le problème des élèves et se demander si l'IA est vraiment la bonne réponse", "Demander aux élèves de l'essayer à la maison"], answer: 2, why: "Les bons projets pilotes partent d'un problème centré sur les élèves, pas d'un outil." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Délimiter le projet pilote et choisir l'outil",
          minutes: 6,
          goal: "Fixer un périmètre de projet pilote petit et clair, et choisir un outil qui passe l'évaluation du fournisseur.",
          text: [
            "Restez petit : quelques enseignants, ou un niveau ou un cours, pendant six à douze semaines. Un petit projet pilote est plus facile à accompagner, à mesurer et à arrêter si besoin. Écrivez qui participe, ce qu'ils feront différemment, et quand.",
            "Choisissez l'outil en dernier. Préférez des outils déjà approuvés dans votre district, ou ceux qui passent l'évaluation du fournisseur du cours 7 (la liste Model Terms of Service plus les questions sur l'exactitude, les biais, l'accessibilité et la reprise de la main par l'enseignant). Vérifiez les règles d'âge de l'outil si des élèves l'utilisent.",
            "Pensez au financement. Selon K-12 Dive, la lettre officielle (Dear Colleague Letter) de juillet 2025 du ministère de l'Éducation des États-Unis indique que les fonds fédéraux existants peuvent financer l'IA pour des outils de programme de qualité, du tutorat à fort impact et l'orientation vers les études et les métiers, si les exigences légales sont respectées. Vérifiez la lettre sur ed.gov et auprès de votre service des programmes fédéraux avant de compter sur des fonds. Hors des États-Unis, renseignez-vous sur les financements de votre ministère ou de vos partenaires."
          ],
          steps: ["Choisissez un petit groupe et six à douze semaines.", "Écrivez qui, ce qui change, et quand.", "Préférez des outils approuvés ; sinon, menez l'évaluation du fournisseur.", "Vérifiez les règles d'âge si des élèves l'utilisent.", "Vérifiez le financement avec votre service des programmes fédéraux."],
          words: [["Périmètre", "la taille et les limites d'un projet : qui, quoi et combien de temps."], ["Service des programmes fédéraux", "le service du district qui gère les subventions fédérales américaines comme Title I."]],
          slides: [
            { title: "Restez petit", bullets: ["Quelques enseignants, un niveau ou un cours", "Six à douze semaines", "Facile à accompagner, à mesurer et à arrêter"] },
            { title: "Choisissez l'outil en dernier", bullets: ["Préférez les outils approuvés par le district", "Sinon, menez l'évaluation du fournisseur", "Vérifiez les règles d'âge pour les élèves"] },
            { title: "Financement", bullets: ["Lettre fédérale de juillet 2025 : certains usages de l'IA finançables", "Outils de programme, tutorat, orientation", "Confirmez avec votre service des programmes fédéraux"] }
          ],
          sources: [{ name: "K-12 Dive : le ministère de l'Éducation publie ses priorités sur l'IA (juillet 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology : liste de contrôle Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Écrivez le périmètre de votre projet pilote (qui, ce qui change, combien de temps) et nommez l'outil, avec son statut d'approbation ou l'évaluation du fournisseur que vous avez menée.",
          youCanNow: "délimiter un petit projet pilote d'IA et choisir un outil correctement évalué.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un bon périmètre de projet pilote ?", options: ["Toutes les écoles du district pendant trois ans", "Quelques enseignants dans un cours pendant six à douze semaines", "Un élève pendant un jour", "Aucune durée fixée"], answer: 1, why: "Un périmètre réduit et clair permet d'apprendre vite et de limiter les risques." },
            { objective: "O2", q: "L'outil que vous voulez n'est pas encore approuvé par le district. Que faites-vous ?", options: ["Mener l'évaluation du fournisseur avant le projet pilote", "L'utiliser quand même pour un court projet pilote", "Demander aux enseignants de l'acheter eux-mêmes", "Choisir un outil au hasard"], answer: 0, why: "Les outils doivent passer l'évaluation du fournisseur avant que les élèves ou le personnel les utilisent." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Le contrôle de vie privée et d'équité",
          minutes: 6,
          goal: "Mener un contrôle de vie privée et d'équité sur votre projet pilote avant son lancement.",
          text: [
            "Vie privée : listez exactement quelles données d'élèves le projet pilote utilise et où elles vont. Selon FERPA (la loi fédérale américaine sur les dossiers scolaires), partager avec un fournisseur des informations permettant d'identifier un élève demande en général un consentement, sauf exception, comme un fournisseur agissant en « responsable scolaire » sous le contrôle direct de l'école avec des limites sur le partage. Si des élèves ont moins de 13 ans, COPPA s'applique ; l'accord de l'école ne vaut que pour un usage scolaire sans autre but commercial. Obtenez la validation de votre responsable de la protection des données. Hors des États-Unis, appliquez les lois de votre pays.",
            "Équité : qui pourrait être laissé de côté ou subir un tort ? Vérifiez l'accès (appareils, internet, accessibilité pour les élèves en situation de handicap, langues des familles), si les résultats pourraient varier selon les groupes d'élèves, et si un résultat de l'IA pourrait influer sur les notes, l'orientation ou la discipline ; si oui, ajoutez un examen humain.",
            "Écrivez le contrôle sur une page avec chaque risque, sa protection et son responsable. Un projet pilote qui n'a pas passé ce contrôle n'est pas prêt à démarrer."
          ],
          steps: ["Listez les données d'élèves, où elles vont et pourquoi.", "Vérifiez FERPA, et COPPA si des élèves ont moins de 13 ans.", "Obtenez la validation du responsable de la protection des données.", "Vérifiez l'accès, l'accessibilité, les langues et les écarts entre groupes.", "Écrivez chaque risque avec sa protection et son responsable."],
          words: [["Validation", "l'approbation officielle de la personne responsable."], ["Accessibilité", "le fait que les personnes en situation de handicap puissent utiliser pleinement un outil."]],
          slides: [
            { title: "Vie privée", bullets: ["Quelles données, où elles vont, pourquoi", "FERPA ; COPPA pour les moins de 13 ans", "Validation du responsable des données"] },
            { title: "Équité", bullets: ["Appareils, internet, accessibilité, langues", "Résultats différents selon les groupes ?", "Examen humain pour tout enjeu important"] },
            { title: "Une page", bullets: ["Risque, protection, responsable", "Pas validé = pas prêt"] }
          ],
          sources: [{ name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC : se conformer à COPPA, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Écrivez votre contrôle de vie privée et d'équité d'une page avec au moins trois risques pour la vie privée et trois risques d'iniquité, chacun avec une protection et un responsable.",
          youCanNow: "contrôler un projet pilote d'IA pour les risques de vie privée et d'iniquité avant son lancement.",
          quickCheck: [
            { objective: "O3", q: "Laquelle est une question d'équité pour un projet pilote ?", options: ["L'outil est-il populaire ?", "L'outil est-il le plus récent ?", "L'outil a-t-il un joli design ?", "Les élèves en situation de handicap peuvent-ils utiliser pleinement l'outil ?"], answer: 3, why: "L'accessibilité et l'accès font partie du contrôle d'équité." },
            { objective: "O3", q: "Votre contrôle de vie privée et d'équité n'est pas fini, mais le lancement est demain. Que faites-vous ?", options: ["Lancer quand même et finir le contrôle plus tard", "Reporter le lancement jusqu'à ce que le contrôle soit fini et validé", "Sauter la partie équité", "Commencer avec seulement la moitié des élèves"], answer: 1, why: "Un projet pilote qui n'a pas passé le contrôle de vie privée et d'équité n'est pas prêt à démarrer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir le projet pilote",
        questions: [
          { objective: "O1", q: "Par quoi un bon projet pilote doit-il commencer ?", options: ["Une démonstration de produit", "Une remise d'un fournisseur", "Un problème centré sur les élèves, avec des preuves", "Un communiqué de presse"], answer: 2, why: "Le problème d'abord, le produit ensuite." },
          { objective: "O2", q: "Quel périmètre de projet pilote est le meilleur ?", options: ["Quelques enseignants dans un cours pendant 6 à 12 semaines", "Toutes les écoles du district pendant trois ans", "Aucun groupe défini", "Seulement le chef d'établissement"], answer: 0, why: "Les petits projets pilotes sont plus faciles à accompagner, à mesurer et à arrêter." },
          { objective: "O2", q: "Quand choisir l'outil ?", options: ["En premier", "Après la fin du projet pilote", "Jamais", "Après avoir défini le problème et le périmètre"], answer: 3, why: "L'outil doit correspondre au problème." },
          { objective: "O3", q: "Les élèves du projet pilote ont 10 ans. Aux États-Unis, quelle loi s'applique au service en ligne ?", options: ["Aucune loi", "COPPA", "Seulement le code de la route", "Seulement le droit d'auteur"], answer: 1, why: "COPPA couvre les enfants de moins de 13 ans." },
          { objective: "O3", q: "Un résultat de l'IA dans votre projet pilote pourrait influer sur l'orientation dans les cours. Que devez-vous ajouter ?", options: ["Rien", "Un modèle plus rapide", "Plus d'IA", "Un examen humain avant toute décision d'orientation"], answer: 3, why: "Les décisions à enjeu important demandent un examen humain." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Personnes, preuves et présentation",
      lessons: [
        {
          objectives: ["O4"],
          title: "Préparer le personnel",
          minutes: 5,
          goal: "Prévoir la formation et l'accompagnement dont le personnel du projet pilote a besoin.",
          text: [
            "Les enseignants du projet pilote ont besoin de plus qu'un identifiant. Prévoyez trois choses. Compétences : bien utiliser l'outil, les consignes (prompts) ou les réglages qui marchent, et la façon de vérifier ses résultats. Règles : vie privée, niveaux d'usage de l'IA pour les élèves, et quoi faire si quelque chose tourne mal. Accompagnement : un contact nommé, un point hebdomadaire et du temps pour essayer.",
            "Rendez la formation pratique. Les enseignants doivent utiliser l'outil sur leurs propres supports réels (non privés) pendant la séance, pas regarder une démonstration. Associez les pionniers aux collègues plus prudents.",
            "Demandez aux enseignants du projet pilote de tenir de courtes notes : temps passé, ce qui a marché, ce qui a échoué, réactions des élèves. Leurs notes font partie de vos preuves et orienteront la décision finale."
          ],
          steps: ["Prévoyez les compétences : usage, consignes, vérification des résultats.", "Prévoyez les règles : vie privée, niveaux d'usage des élèves, incidents.", "Prévoyez l'accompagnement : contact, point hebdomadaire, temps.", "Rendez les séances pratiques avec de vrais supports.", "Demandez aux enseignants de tenir de courtes notes."],
          words: [["Développement professionnel (PD)", "la formation et l'apprentissage des enseignants et du personnel."], ["Pionnier", "quelqu'un qui essaie tôt les nouveaux outils et peut aider les autres."]],
          slides: [
            { title: "Compétences, règles, accompagnement", bullets: ["Compétences : usage, consignes, vérification", "Règles : vie privée, niveaux des élèves, incidents", "Accompagnement : contact, points réguliers, temps"] },
            { title: "Formation pratique", bullets: ["Utiliser l'outil sur de vrais supports non privés", "Associer pionniers et collègues prudents"] },
            { title: "Les notes des enseignants sont des preuves", bullets: ["Temps passé, ce qui a marché, ce qui a échoué", "Réactions des élèves"] }
          ],
          tryIt: "Écrivez un plan d'une page pour le personnel : un programme de formation pratique de 60 minutes, les règles que les enseignants doivent suivre, l'accompagnement qu'ils recevront, et les notes que vous leur demanderez de tenir.",
          youCanNow: "préparer et accompagner le personnel pour un projet pilote d'IA.",
          quickCheck: [
            { objective: "O4", q: "Que doit comprendre l'accompagnement du personnel pendant le projet pilote ?", options: ["Une personne de contact nommée et des points chaque semaine", "Un seul e-mail", "Seulement un chatbot d'IA", "Rien ; les enseignants se débrouillent"], answer: 0, why: "Un accompagnement nommé et des points réguliers empêchent les problèmes de grossir." },
            { objective: "O4", q: "Les enseignants demandent pourquoi ils doivent prendre des notes pendant le projet pilote. Que diriez-vous ?", options: ["C'est une règle du fournisseur", "C'est pour juger leur enseignement", "Leurs notes font partie des preuves pour décider de la suite", "C'est une tâche facultative sans intérêt"], answer: 2, why: "Les notes des enseignants sont des preuves pour la décision « continuer, ajuster ou arrêter »." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Communiquer avec les familles",
          minutes: 5,
          goal: "Rédiger une lettre aux familles et une FAQ qui expliquent honnêtement le projet pilote.",
          text: [
            "Les familles font confiance à ce qu'elles comprennent. Informez-les avant le début du projet pilote : quel problème vous traitez, ce que fait l'outil d'IA, ce qu'il ne fait pas (il ne décide ni des notes ni de l'orientation), quelles données d'élèves sont utilisées et comment elles sont protégées, et qui contacter en cas de question.",
            "Ajoutez une courte FAQ : les données de mon enfant serviront-elles à entraîner l'IA ? (Répondez d'après votre accord avec le fournisseur.) Mon enfant peut-il ne pas participer, et quelle est l'alternative ? Comment saurez-vous si cela marche ? La FTC conseille aux écoles d'informer les parents des services en ligne qu'elles ont approuvés ; FERPA donne aux parents le droit de consulter les dossiers scolaires de leur enfant.",
            "Écrivez en langage simple et fournissez des traductions vérifiées par des locuteurs qualifiés pour les familles qui en ont besoin. Proposez une courte séance d'information ou un moment pour poser des questions."
          ],
          steps: ["Expliquez le problème, ce que l'outil fait et ne fait pas.", "Expliquez l'usage et la protection des données.", "Ajoutez une FAQ : entraînement, refus de participer, mesures.", "Traduisez, avec vérification par des locuteurs qualifiés.", "Proposez un moment pour les questions."],
          words: [["FAQ", "foire aux questions : une courte liste de questions fréquentes avec leurs réponses."], ["Refuser de participer", "choisir de ne pas prendre part."]],
          slides: [
            { title: "Informez d'abord les familles", bullets: ["Le problème et ce que fait l'outil", "Ce qu'il ne fait pas", "Les données utilisées et leur protection"] },
            { title: "Une courte FAQ", bullets: ["Les données servent-elles à entraîner l'IA ?", "Mon enfant peut-il refuser ? Quelle alternative ?", "Comment saurez-vous que ça marche ?"] },
            { title: "Touchez chaque famille", bullets: ["Langage simple", "Traductions vérifiées", "Un moment pour les questions"] }
          ],
          sources: [{ name: "FTC : se conformer à COPPA, questions fréquentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FERPA : protéger la vie privée des élèves", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Rédigez la lettre aux familles (moins d'une page) et une FAQ de cinq questions pour votre projet pilote. Demandez à un parent ou à un médiateur famille-école de la lire et de vous dire ce qui n'est pas clair.",
          youCanNow: "expliquer clairement et honnêtement un projet pilote d'IA aux familles.",
          quickCheck: [
            { objective: "O5", q: "Que doit dire la lettre aux familles sur ce que l'outil NE fait PAS ?", options: ["Aider les élèves à s'entraîner", "Prendre des décisions de notes ou d'orientation", "Fonctionner sur les ordinateurs de l'école", "Utiliser internet"], answer: 1, why: "Les familles doivent savoir que ce sont des personnes, pas l'IA, qui prennent les décisions sur leurs enfants." },
            { objective: "O5", q: "Un médiateur auprès des familles dit que votre lettre est difficile à comprendre. Que feriez-vous ?", options: ["L'envoyer quand même", "Ajouter plus de détails et de termes juridiques", "L'envoyer seulement en anglais", "La réécrire en mots simples et lui demander de la relire"], answer: 3, why: "La lettre ne sert que si les familles peuvent la comprendre." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer la réussite et présenter votre plan",
          minutes: 6,
          goal: "Fixer des mesures et une règle de décision, et présenter le plan en dix minutes.",
          text: [
            "Choisissez trois à cinq mesures liées à votre problème, avec un point de départ d'avant le projet pilote : un résultat d'élèves (résultats aux tests, exercices faits), une mesure pour les enseignants (temps gagné, confiance), une mesure de l'expérience des élèves ou des familles (une courte enquête) et une mesure de sécurité (incidents, problèmes de vie privée). Présentez les résultats par groupe d'élèves quand la vie privée le permet, pour repérer des effets inégaux.",
            "Écrivez la règle de décision à l'avance : continuer (étendre), ajuster (modifier et retester) ou arrêter. Par exemple : « Étendre si les résultats aux tests s'améliorent et que les enseignants gagnent du temps, sans incident grave et sans qu'aucun groupe ne fasse moins bien. »",
            "Présentez en dix minutes : le problème et les preuves, le projet pilote et l'outil, le contrôle de vie privée et d'équité, le plan pour les personnes, les mesures et la règle de décision. Accueillez les questions difficiles ; elles renforcent le plan."
          ],
          steps: ["Choisissez 3 à 5 mesures : élèves, enseignants, expérience, sécurité.", "Recueillez un point de départ.", "Prévoyez d'examiner les résultats par groupe quand la vie privée le permet.", "Écrivez la règle « continuer, ajuster ou arrêter ».", "Présentez en dix minutes et notez les questions."],
          words: [["Mesure", "quelque chose que l'on compte ou que l'on évalue pour voir si un changement a marché."], ["Règle de décision", "une règle écrite à l'avance pour décider d'étendre, d'ajuster ou d'arrêter."]],
          slides: [
            { title: "Des mesures avec un point de départ", bullets: ["Résultat des élèves", "Temps et confiance des enseignants", "Enquête d'expérience et sécurité"] },
            { title: "Fixez la règle d'abord", bullets: ["Continuer, ajuster ou arrêter", "Aucun groupe qui fait moins bien", "Aucun incident grave"] },
            { title: "Présentation de dix minutes", bullets: ["Problème et preuves ; projet pilote et outil", "Vie privée et équité ; plan pour les personnes", "Mesures et règle de décision"] }
          ],
          tryIt: "Tâche finale : rassemblez votre plan de projet pilote complet (problème, périmètre et outil, contrôle de vie privée et d'équité, plan pour le personnel, lettre aux familles et FAQ, mesures avec point de départ, règle de décision), présentez-le en dix minutes à une équipe de direction, un groupe de collègues ou un conseil, et notez les questions et vos réponses.",
          youCanNow: "concevoir, défendre et piloter un projet pilote d'IA responsable dans votre école ou votre district.",
          quickCheck: [
            { objective: "O6", q: "Quand recueille-t-on la situation de départ ?", options: ["Avant le projet pilote", "À la moitié du projet pilote", "Après la fin du projet pilote", "Seulement si le projet pilote échoue"], answer: 0, why: "Une situation de départ recueillie avant le projet pilote montre si quelque chose a changé." },
            { objective: "O6", q: "Les résultats sont bons dans l'ensemble, mais un groupe d'élèves a fait moins bien. Que prévoit votre plan ?", options: ["Communiquer seulement le résultat global", "Continuer, puisque la plupart des élèves ont bien réussi", "Examiner les résultats par groupe et choisir d'ajuster ou d'arrêter comme le dit la règle de décision", "Retirer ce groupe des données"], answer: 2, why: "Examiner par groupe repère les effets inégaux, et la règle de décision guide ce qu'il faut faire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Personnes, preuves et présentation",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui rend une formation à l'IA pour les enseignants la plus efficace ?", options: ["Regarder une longue démonstration", "Lire la publicité du fournisseur", "Une pratique avec leurs propres supports non privés", "Aucune formation"], answer: 2, why: "On apprend un outil en l'utilisant sur un vrai travail." },
          { objective: "O5", q: "Que doit dire la lettre aux familles sur ce que l'outil NE fait PAS ?", options: ["Prendre les décisions de notes ou d'orientation", "Aider aux exercices", "Faire gagner du temps aux enseignants", "Donner un retour"], answer: 0, why: "Les familles doivent savoir que les décisions restent aux éducateurs." },
          { objective: "O6", q: "Pourquoi examiner les résultats du projet pilote par groupe d'élèves ?", options: ["Pour classer les élèves publiquement", "Pour repérer des effets inégaux", "Ce n'est pas utile", "Pour gagner du temps"], answer: 1, why: "Un projet pilote peut aider certains élèves et nuire à d'autres." },
          { objective: "O6", q: "Quand écrire la règle « continuer, ajuster ou arrêter » ?", options: ["Avant le début du projet pilote", "Après les résultats", "Jamais", "Seulement en cas d'échec"], answer: 0, why: "Décider à l'avance garde la décision honnête." },
          { objective: "O6", q: "Pendant votre présentation, un membre du conseil pose une question difficile sur la vie privée. Meilleure réaction ?", options: ["L'éviter", "Promettre qu'il n'y a aucun risque", "Arrêter la présentation", "L'accueillir et répondre à partir de votre contrôle de vie privée"], answer: 3, why: "Les questions difficiles renforcent le plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les responsables scolaires et éducatifs 8 : projet final de synthèse",
    questions: [
      { objective: "O1", q: "Un énoncé du problème dit :", options: ["Quel produit acheter", "Ce qui ne va pas, pour qui, et dans quelle mesure", "Seulement le budget", "La liste du personnel"], answer: 1, why: "Il définit le problème avec des preuves." },
      { objective: "O1", q: "Les preuves d'un problème peuvent comprendre :", options: ["Des publicités de fournisseurs", "Des rumeurs", "Des données existantes, des enquêtes et des conversations", "Des suppositions"], answer: 2, why: "De vraies preuves montrent que le problème est réel." },
      { objective: "O1", q: "Avant de choisir l'IA, demandez-vous :", options: ["Laquelle est la moins chère ?", "Quelle IA est la plus connue ?", "L'IA est-elle vraiment la bonne réponse ?", "Laquelle a le plus beau logo ?"], answer: 2, why: "Parfois une solution sans IA est meilleure." },
      { objective: "O2", q: "Une bonne durée de projet pilote est d'environ :", options: ["Six à douze semaines", "Un jour", "Cinq ans", "Aucune durée fixée"], answer: 0, why: "Assez long pour apprendre, assez court pour être gérable." },
      { objective: "O2", q: "L'outil doit être choisi :", options: ["Par les élèves seuls", "Avant tout le reste", "Par le fournisseur", "Une fois le problème et le périmètre clairs"], answer: 3, why: "L'outil doit correspondre au problème." },
      { objective: "O2", q: "Si un outil n'est pas encore approuvé, vous devez :", options: ["L'utiliser quand même", "Mener l'évaluation du fournisseur", "Demander aux élèves de s'inscrire", "Sauter la vie privée"], answer: 1, why: "L'approbation vient avant l'usage." },
      { objective: "O2", q: "La lettre fédérale de juillet 2025 indique que les subventions peuvent financer l'IA pour :", options: ["Du matériel de sport", "N'importe quel achat", "Remplacer les enseignants", "Des outils de programme, du tutorat à fort impact et l'orientation"], answer: 3, why: "Ces usages sont cités dans la lettre, selon les comptes rendus." },
      { objective: "O2", q: "Avant de compter sur des fonds fédéraux, vérifiez auprès :", options: ["D'un élève", "D'un fournisseur", "De votre service des programmes fédéraux", "Des réseaux sociaux"], answer: 2, why: "Il gère les règles des subventions fédérales." },
      { objective: "O3", q: "Selon FERPA, partager des données identifiantes d'élèves avec un fournisseur demande en général :", options: ["Un consentement, sauf exception", "Rien", "Seulement un appel téléphonique", "L'autorisation du fournisseur"], answer: 0, why: "Les exceptions incluent les « responsables scolaires » contrôlés." },
      { objective: "O3", q: "Qui valide le contrôle de vie privée ?", options: ["Le fournisseur", "Le responsable de la protection des données du district", "Un élève", "Personne"], answer: 1, why: "La personne responsable donne son approbation." },
      { objective: "O3", q: "Laquelle est une question d'équité ?", options: ["Les élèves en situation de handicap peuvent-ils utiliser pleinement l'outil ?", "De quelle couleur est l'application ?", "Est-elle à la mode ?", "Est-elle nouvelle ?"], answer: 0, why: "L'accessibilité fait partie de l'équité." },
      { objective: "O3", q: "Un projet pilote qui n'a pas passé le contrôle de vie privée et d'équité est :", options: ["Terminé", "Prêt quand même", "Approuvé", "Pas prêt à démarrer"], answer: 3, why: "Le contrôle est une étape obligatoire." },
      { objective: "O4", q: "L'accompagnement du personnel doit comprendre :", options: ["Rien après l'identifiant", "Un contact nommé et des points hebdomadaires", "Seulement un courriel", "Seulement l'assistance du fournisseur"], answer: 1, why: "L'accompagnement garde les projets pilotes sur la bonne voie." },
      { objective: "O4", q: "Les notes des enseignants du projet pilote sont :", options: ["Inutiles", "Des journaux intimes", "Une partie de vos preuves", "Réservées au fournisseur"], answer: 2, why: "Elles montrent ce qui a marché et ce qui a échoué." },
      { objective: "O5", q: "La FAQ pour les familles doit répondre à :", options: ["Qui est l'enseignant le plus populaire ?", "Quel est le cours de l'action du fournisseur ?", "Les données de mon enfant servent-elles à entraîner l'IA ?", "Rien"], answer: 2, why: "L'usage des données est une préoccupation majeure des familles." },
      { objective: "O5", q: "Les traductions pour les familles doivent être :", options: ["Vérifiées par des locuteurs qualifiés", "Des résultats d'IA non vérifiés", "Abandonnées", "Faites par les élèves"], answer: 0, why: "Les familles ont besoin d'une information exacte." },
      { objective: "O6", q: "Laquelle est une mesure de sécurité ?", options: ["Le chiffre d'affaires du fournisseur", "Le nombre de connexions", "Le nombre de diapositives", "Le nombre d'incidents ou de problèmes de vie privée"], answer: 3, why: "La sécurité doit aussi être mesurée." },
      { objective: "O6", q: "Un point de départ est recueilli :", options: ["Après le projet pilote", "Avant le projet pilote", "Jamais", "Seulement si les résultats sont mauvais"], answer: 1, why: "Il montre ce qui a changé." },
      { objective: "O6", q: "Quels choix offre une règle de décision ?", options: ["Attendre indéfiniment", "Acheter ou vendre", "Seulement oui", "Continuer, ajuster ou arrêter"], answer: 3, why: "Le projet pilote se termine par une décision claire." },
      { objective: "O6", q: "Votre présentation finale doit durer environ :", options: ["Une minute", "Deux heures", "Dix minutes", "Une journée entière"], answer: 2, why: "Courte et ciblée, avec du temps pour les questions." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      5,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Problème et preuves",
        objective: "O1",
        notYet: "Part d'un outil, ou n'a pas de preuves.",
        meets: "Énonce le problème et pour qui, avec des preuves.",
        exceeds: "Explique pourquoi l'IA est la bonne réponse, ou ce qui a été envisagé d'autre."
      },
      {
        name: "Périmètre et outil",
        objective: "O2",
        notYet: "Pas de qui, quoi ou durée clairs, ou l'outil n'a pas d'évaluation du fournisseur.",
        meets: "Périmètre du projet pilote (qui, quoi, durée) et l'outil, avec son évaluation du fournisseur.",
        exceeds: "Le périmètre est assez réduit pour être mené en six à douze semaines."
      },
      {
        name: "Contrôle de vie privée et d'équité",
        objective: "O3",
        notYet: "FERPA, COPPA (si moins de 13 ans), l'accessibilité ou l'accès manque.",
        meets: "Couvre FERPA, COPPA si moins de 13 ans, l'accessibilité et l'accès.",
        exceeds: "Chaque risque a une protection et un responsable, et le délégué à la protection des données l'a examiné."
      },
      {
        name: "Personnel et familles",
        objective: "O5",
        notYet: "Pas de plan de formation du personnel, ou pas de lettre aux familles et de FAQ.",
        meets: "Un plan de formation du personnel, et une lettre aux familles avec une courte FAQ.",
        exceeds: "La lettre a été lue par un parent ou un médiateur auprès des familles et améliorée."
      },
      {
        name: "Mesures et règle de décision",
        objective: "O6",
        notYet: "Moins de trois mesures, pas de situation de départ, ou pas de règle de décision.",
        meets: "Trois à cinq mesures de réussite avec une situation de départ, et une règle « continuer, ajuster ou arrêter ».",
        exceeds: "Comprend une mesure de sécurité et un plan pour examiner les résultats par groupe d'élèves."
      },
      {
        name: "Présentation",
        objective: "O6",
        notYet: "Pas présenté, ou questions non notées.",
        meets: "Présenté en dix minutes, avec les questions et réponses notées.",
        exceeds: "Les questions difficiles ont été bien accueillies et ont reçu des réponses tirées des preuves du plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Responsables qui terminent le programme et réussissent le projet final (grille d'évaluation)",
      "Plans pilotes présentés à une équipe de direction ou un conseil dans les 60 jours (enquête de suivi)",
      "Projets pilotes lancés avec un contrôle de vie privée et d'équité validé et une règle de décision écrite (enquête de suivi)",
      "Projets pilotes qui aboutissent à une décision « continuer, ajuster ou arrêter » à partir de leur situation de départ et de leurs mesures"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet",
      "Vos lignes directrices sur l'IA responsable du cours 7 et les politiques de votre district",
      "Des données globales ou des résultats d'enquête sur le problème (aucune donnée individuelle d'élève)",
      "Un modèle de plan d'environ quatre pages",
      "Environ 90 minutes pour les leçons et les contrôles, plus le temps de rédiger et de présenter le plan"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites partager les énoncés du problème en petits groupes avant de choisir des outils.",
      "Invitez le délégué à la protection des données du district à examiner les contrôles de vie privée et d'équité avant les présentations.",
      "Demandez à un parent ou à un médiateur auprès des familles de lire les brouillons de lettres aux familles.",
      "Prévoyez une séance de présentation devant une vraie équipe de direction ou un groupe de collègues qui joue le rôle du conseil.",
      "Notez le projet final avec la grille, et recueillez les questions et réponses notées."
    ]
  }
};
