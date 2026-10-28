"use strict";

// Koach Learn course (French translation of leadership/edu-ai-pbl.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-pbl-fr",
  lang: "fr",
  translationOf: "edu-ai-pbl",
  category: "Leadership Development",
  name: "L'IA et l'apprentissage par projet",
  skills: "Concevoir un projet autour d'une question directrice, Planifier les étapes et les grilles avec l'IA, Apprendre aux élèves à faire des recherches avec l'IA de façon responsable, Fixer des règles d'usage de l'IA pour chaque étape du projet, Évaluer la démarche et l'apprentissage individuel, Organiser une présentation publique",
  outcome: "concevoir avec l'aide de l'IA une séquence d'apprentissage par projet, une question directrice, des étapes, une grille et une production publique authentique, avec des règles claires d'usage de l'IA pour chaque étape, un journal d'IA de l'élève, et des points de contrôle qui montrent l'apprentissage propre de chaque élève.",
  about: [
    "Ce cours s'adresse aux enseignants, aux conseillers pédagogiques et aux responsables d'établissement qui pratiquent ou veulent pratiquer l'apprentissage par projet (APP, en anglais PBL). Dans l'apprentissage par projet, les élèves apprennent en travaillant dans la durée sur une vraie question et en partageant une production avec un vrai public. L'IA change la façon dont les élèves cherchent, créent et collaborent ; elle rend aussi plus facile d'éviter d'apprendre.",
    "Le chapitre 1 utilise l'IA pour concevoir le projet : la question directrice, le lancement, les étapes et la grille, et apprend aux élèves à faire des recherches avec l'IA de façon responsable. Le chapitre 2 gère le projet : règles d'IA pour chaque étape, outils d'équipe, points de contrôle qui montrent l'apprentissage individuel, et une production publique avec une déclaration honnête de l'usage de l'IA.",
    "Utilisez des outils approuvés pour tout ce que font les élèves, et gardez les informations sur les élèves hors des outils non approuvés. Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Concevez une séquence d'apprentissage par projet de deux à quatre semaines : une question directrice, un événement de lancement, quatre à six étapes chacune avec un niveau d'usage de l'IA, une grille pour la production finale et pour la démarche, un point de contrôle individuel à chaque étape, un modèle de journal d'IA pour les élèves, et un plan de présentation publique devant un vrai public. Faites-la relire par un collègue et révisez une partie à partir de ses remarques.",
  chapters: [
    {
      name: "Chapitre 1 : Concevoir le projet avec l'IA",
      lessons: [
        {
          title: "L'essentiel de l'apprentissage par projet et la place de l'IA",
          minutes: 5,
          goal: "Nommer l'essentiel d'un bon projet et les endroits où l'IA aide ou nuit.",
          text: [
            "Les bons projets partagent quelques éléments essentiels : une question directrice ouverte et qui compte pour les élèves ; une enquête qui dure dans le temps ; un travail authentique relié au monde réel ; la voix et les choix des élèves ; la critique et la révision ; et une production publique partagée avec un public plus large que l'enseignant.",
            "L'IA peut aider l'enseignant à concevoir tout cela plus vite, et aider les élèves à trouver des idées, chercher, rédiger et recevoir des retours. Elle peut aussi court-circuiter l'enquête : un élève peut demander à l'IA la réponse à la question directrice en quelques secondes.",
            "Concevez donc en conséquence. La question directrice doit être assez locale ou personnelle pour que l'IA ne puisse pas simplement y répondre (« Comment réduire le gaspillage alimentaire dans notre cantine ? » plutôt que « Quelles sont les causes du gaspillage alimentaire ? »), et l'apprentissage doit se voir dans la démarche, pas seulement dans la production."
          ],
          words: [["Apprentissage par projet (APP)", "apprendre en travaillant dans la durée sur une vraie question et en partageant une production avec un public."], ["Question directrice", "la question ouverte qui guide tout un projet."], ["Authentique", "relié à de vraies personnes, de vrais lieux et de vrais problèmes."]],
          slides: [
            { title: "L'essentiel de l'apprentissage par projet", bullets: ["Question directrice ; enquête dans la durée", "Travail authentique ; voix et choix des élèves", "Critique et révision ; production publique"] },
            { title: "L'IA peut aider ou court-circuiter", bullets: ["Aide à concevoir, trouver des idées, chercher, rédiger", "Peut répondre à une question générale en quelques secondes"] },
            { title: "Concevez en conséquence", bullets: ["Questions directrices locales ou personnelles", "L'apprentissage se voit dans la démarche"] }
          ],
          tryIt: "Demandez à un outil d'IA de répondre à une question directrice que vous avez utilisée ou vue. Réécrivez ensuite la question pour qu'elle soit assez locale ou personnelle pour que l'IA ne puisse pas simplement y répondre.",
          youCanNow: "nommer l'essentiel d'un bon apprentissage par projet et concevoir des questions directrices que l'IA ne peut pas court-circuiter."
        },
        {
          title: "Questions directrices, lancements, étapes et grilles",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger la question directrice, l'événement de lancement, les étapes et la grille du projet.",
          text: [
            "Donnez à l'IA le niveau, la matière, les normes de programme (tirées de votre source officielle), la durée du projet et le contexte de votre communauté (en termes généraux). Demandez cinq propositions de questions directrices, puis choisissez-en une et affinez-la avec les élèves si possible.",
            "Demandez un événement de lancement qui éveille la curiosité (un invité, un objet mystère, un problème local, une visite sur le terrain) et quatre à six étapes : recherche, plan, premier brouillon ou prototype, critique, révision, production finale. Demandez les connaissances nécessaires à chaque étape, pour prévoir des mini-leçons.",
            "Demandez une grille en deux parties : la production finale (contenu et qualité) et la démarche (collaboration, révision, usage des preuves). Vérifiez que chaque critère correspond à vos normes de programme et que le calendrier est réaliste ; l'IA en met souvent trop."
          ],
          steps: ["Donnez le niveau, la matière, les normes, la durée et le contexte.", "Choisissez et affinez une question directrice.", "Rédigez l'événement de lancement et 4 à 6 étapes.", "Listez les connaissances nécessaires à chaque étape.", "Rédigez une grille production et démarche ; vérifiez normes et calendrier."],
          words: [["Événement de lancement", "une activité qui lance un projet et suscite des questions."], ["Étape", "un point d'étape où une partie du projet doit être rendue."], ["Critique", "un retour structuré sur un travail en cours."]],
          slides: [
            { title: "Donnez le contexte à l'IA", bullets: ["Niveau, matière, normes", "Durée du projet, contexte local"] },
            { title: "Rédigez la structure", bullets: ["Propositions de questions directrices", "Événement de lancement", "4 à 6 étapes avec les connaissances nécessaires"] },
            { title: "Grille en deux parties", bullets: ["Production : contenu et qualité", "Démarche : collaboration, révision, preuves", "Vérifiez normes et calendrier"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger la question directrice, l'événement de lancement, les étapes et une grille en deux parties pour un projet que vous pourriez mener. Ajustez le calendrier à votre année scolaire.",
          youCanNow: "concevoir rapidement la structure d'un projet avec l'IA et la vérifier au regard des normes et du temps."
        },
        {
          title: "Chercher avec l'IA : chercher, vérifier, citer",
          minutes: 5,
          goal: "Apprendre aux élèves une routine de recherche qui utilise l'IA sans lui faire aveuglément confiance.",
          text: [
            "Dans les projets, les élèves font des recherches. L'IA peut les aider à comprendre un sujet, à formuler des questions et à trouver des mots-clés, mais elle peut inventer des faits et des sources. Enseignez une routine en trois étapes : explorer avec l'IA (« Quelles questions dois-je me poser sur le gaspillage alimentaire à l'école ? » « Quels mots dois-je chercher ? ») ; trouver de vraies sources (moteurs de recherche, bases de données de bibliothèque, entretiens, données locales) ; vérifier et citer (contrôler chaque fait avec au moins une vraie source et citer cette source, pas l'IA).",
            "Les sources primaires sont une force de l'apprentissage par projet : les élèves peuvent interroger le personnel de la cantine, sonder leurs camarades (de façon anonyme), mesurer eux-mêmes le gaspillage. L'IA ne peut pas le faire à leur place, ce qui garde l'enquête réelle.",
            "Demandez aux élèves de tenir un journal de recherche : question, source, ce qu'ils ont appris, comment ils l'ont vérifié."
          ],
          steps: ["Explorer : utiliser l'IA pour formuler des questions et des mots-clés.", "Trouver de vraies sources : recherche, bases de données, entretiens, données locales.", "Vérifier chaque fait avec une vraie source.", "Citer la vraie source, pas l'IA.", "Tenir un journal de recherche."],
          words: [["Source primaire", "une preuve de première main, comme un entretien, une enquête ou une mesure."], ["Journal de recherche", "un relevé des questions, des sources, des découvertes et des vérifications."]],
          slides: [
            { title: "Routine de recherche en trois étapes", bullets: ["Explorer avec l'IA : questions, mots-clés", "Trouver de vraies sources", "Vérifier et citer la vraie source"] },
            { title: "Sources primaires", bullets: ["Entretiens, enquêtes anonymes, mesures", "L'IA ne peut pas le faire à leur place"] },
            { title: "Journal de recherche", bullets: ["Question, source, découverte, vérification"] }
          ],
          tryIt: "Rédigez la routine de recherche et un modèle de journal de recherche pour votre projet. Testez-les vous-même sur une question de recherche du projet.",
          youCanNow: "apprendre aux élèves à faire des recherches avec l'IA en s'appuyant sur de vraies sources vérifiées."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir le projet avec l'IA",
        questions: [
          { q: "À quelle question directrice l'IA aura-t-elle le plus de mal à répondre simplement ?", options: ["Quelles sont les causes du gaspillage alimentaire ?", "Qu'est-ce que le gaspillage alimentaire ?", "Comment réduire le gaspillage alimentaire dans notre cantine ?", "Qui a inventé le compostage ?"], answer: 2, why: "Les questions locales demandent une vraie enquête des élèves." },
          { q: "Qu'est-ce qu'un événement de lancement ?", options: ["Une activité qui lance un projet et suscite des questions", "La présentation finale", "Un test", "Une autorisation de sortie scolaire"], answer: 0, why: "Il crée de la curiosité au départ." },
          { q: "Une grille d'apprentissage par projet en deux parties évalue :", options: ["Seulement la production finale", "Seulement la présentation", "Seulement l'assiduité", "La production et la démarche"], answer: 3, why: "La démarche montre l'apprentissage en cours de route." },
          { q: "Les élèves doivent citer :", options: ["L'outil d'IA comme source", "La vraie source qu'ils ont vérifiée", "Rien", "Seulement Wikipédia"], answer: 1, why: "L'IA n'est pas une source fiable ; les vraies sources le sont." },
          { q: "Laquelle est une source primaire ?", options: ["Un résumé produit par l'IA", "La réponse d'un agent conversationnel", "Le résumé d'un manuel", "Un entretien avec le personnel de la cantine"], answer: 3, why: "Les preuves de première main gardent l'enquête réelle." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Gérer et évaluer le projet",
      lessons: [
        {
          title: "Des règles d'IA pour chaque étape et un journal d'IA de l'élève",
          minutes: 5,
          goal: "Fixer un niveau d'usage de l'IA pour chaque étape et un journal que les élèves tiennent.",
          text: [
            "Une seule règle d'IA pour tout un projet est trop grossière. Fixez un niveau pour chaque étape, avec l'échelle de votre école. Par exemple : recherche d'idées, IA permise pour les idées ; recherche, IA seulement pour les questions et les mots-clés ; premier brouillon, pas d'IA (les élèves montrent leur propre réflexion) ; critique, retour de l'IA permis en plus du retour des camarades ; production finale, outils d'IA permis pour la mise en forme et la finition, avec déclaration.",
            "Les élèves tiennent un journal d'IA : date, outil, ce qu'ils ont demandé, ce qu'ils ont utilisé et ce qu'ils ont modifié. Cela prend une minute par entrée et rend l'usage de l'IA visible et honnête.",
            "Expliquez les raisons. Les élèves suivent les règles qu'ils comprennent : « Le premier brouillon se fait sans IA parce que nous devons voir votre réflexion avant toute aide. »"
          ],
          steps: ["Listez les étapes.", "Fixez un niveau d'usage de l'IA pour chacune.", "Écrivez la raison de chaque niveau.", "Donnez aux élèves un modèle de journal d'IA.", "Vérifiez les journaux à chaque étape."],
          words: [["Journal d'IA", "le relevé que tient un élève sur quand et comment il a utilisé l'IA."], ["Déclaration", "dire ouvertement comment l'IA a été utilisée."]],
          slides: [
            { title: "Un niveau pour chaque étape", bullets: ["Recherche d'idées : idées permises", "Recherche : questions et mots-clés", "Premier brouillon : pas d'IA", "Production finale : outils permis, déclarés"] },
            { title: "Le journal d'IA", bullets: ["Date, outil, ce qui a été demandé", "Ce qui a été utilisé, ce qui a été modifié"] },
            { title: "Expliquez pourquoi", bullets: ["« Nous devons d'abord voir votre réflexion »"] }
          ],
          tryIt: "Écrivez un niveau d'usage de l'IA et une raison d'une ligne pour chaque étape de votre projet, et créez un modèle d'une page de journal d'IA pour les élèves.",
          youCanNow: "fixer des règles d'IA claires, étape par étape, pour un projet et rendre l'usage de l'IA visible."
        },
        {
          title: "Des points de contrôle qui montrent l'apprentissage individuel",
          minutes: 6,
          goal: "Prévoir des points de contrôle qui montrent ce que chaque élève a appris dans un projet d'équipe.",
          text: [
            "Les productions d'équipe peuvent cacher qui a appris quoi, et l'IA rend cela plus facile. Ajoutez des points de contrôle individuels à chaque étape : un court billet de sortie sur les connaissances de cette étape, un entretien de deux minutes, une réflexion écrite, ou l'explication individuelle d'une partie du travail de l'équipe.",
            "Utilisez l'IA pour vous préparer : questions pour chaque point de contrôle, pistes pour les entretiens, et questions de réflexion (« Qu'avez-vous changé après la critique, et pourquoi ? »). Gardez les noms et les notes des élèves hors des outils non approuvés quand vous notez les résultats.",
            "Utilisez bien les outils d'équipe : l'IA peut aider les équipes à répartir les tâches, à planifier le calendrier et à obtenir un retour sur leurs brouillons au regard de la grille. Mais chaque élève doit pouvoir expliquer le travail de l'équipe et sa propre contribution."
          ],
          steps: ["Ajoutez un point de contrôle individuel à chaque étape.", "Utilisez l'IA pour rédiger les questions de contrôle, d'entretien et de réflexion.", "Notez les résultats dans votre carnet de notes ou un outil approuvé.", "Laissez les équipes utiliser l'IA pour planifier et obtenir des retours sur leurs brouillons, selon les règles.", "Chaque élève explique le travail et sa part."],
          words: [["Point de contrôle", "une courte vérification individuelle de l'apprentissage pendant un projet."], ["Entretien", "une courte conversation en tête-à-tête entre l'enseignant et l'élève sur son travail."], ["Réflexion", "écrire ou parler de ce que l'on a appris et de la manière dont on l'a appris."]],
          slides: [
            { title: "Les productions d'équipe peuvent cacher l'apprentissage", bullets: ["Ajoutez des points de contrôle individuels", "Billets de sortie, entretiens, réflexions"] },
            { title: "L'IA vous aide à vous préparer", bullets: ["Questions de contrôle et d'entretien", "Pistes de réflexion", "Les relevés restent dans des outils approuvés"] },
            { title: "Outils d'équipe, preuve individuelle", bullets: ["L'IA pour planifier et commenter les brouillons", "Chaque élève explique le travail et sa part"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger un point de contrôle individuel pour chaque étape (une question de billet de sortie, une piste d'entretien ou une question de réflexion).",
          youCanNow: "évaluer l'apprentissage de chaque élève au sein d'un projet d'équipe."
        },
        {
          title: "La production publique, la présentation et la réflexion",
          minutes: 6,
          goal: "Prévoir une présentation authentique avec une déclaration honnête de l'usage de l'IA et une réflexion des élèves.",
          text: [
            "Un vrai public élève la qualité du travail : familles, membres de la communauté, experts locaux, conseil d'école ou une entreprise qui fait face au problème. Prévoyez la présentation tôt et invitez les gens avec un court message (l'IA peut le rédiger).",
            "Demandez aux équipes d'ajouter une déclaration d'usage de l'IA à leur production (« Nous avons utilisé l'IA pour trouver des idées de conception et vérifier la grammaire ; toutes les données de recherche ont été recueillies par nous »). Une déclaration honnête fait partie de l'intégrité de la production, et le public la respecte.",
            "Protégez les élèves : suivez les règles de votre école sur les photos, les noms et les enregistrements, et sur le partage des travaux en ligne. Terminez par une réflexion : ce que les élèves ont appris sur le sujet, sur le travail d'équipe, et sur les moments où l'IA a aidé ou gêné."
          ],
          steps: ["Choisissez un vrai public et invitez-le tôt.", "Les équipes ajoutent une déclaration d'usage de l'IA à leur production.", "Suivez les règles de l'école sur les photos, les noms et le partage en ligne.", "Organisez la présentation.", "Terminez par une réflexion sur l'apprentissage, le travail d'équipe et l'IA."],
          words: [["Présentation publique", "un événement où les élèves présentent leur travail à un public."], ["Public authentique", "de vraies personnes qui s'intéressent au travail, au-delà de l'enseignant."]],
          slides: [
            { title: "Un vrai public", bullets: ["Familles, experts, communauté, conseil", "Invitez tôt"] },
            { title: "Une déclaration d'IA sur chaque production", bullets: ["Ce qu'a fait l'IA et ce qu'ont fait les élèves", "L'honnêteté fait partie de l'intégrité"] },
            { title: "Protéger et réfléchir", bullets: ["Règles de l'école sur les photos et les noms", "Réflexion : sujet, travail d'équipe, IA"] }
          ],
          tryIt: "Tâche finale : rassemblez votre séquence d'apprentissage par projet (question directrice, événement de lancement, étapes avec niveaux d'IA, grille production et démarche, points de contrôle individuels, journal d'IA des élèves, plan de présentation). Montrez-la à un collègue et révisez une partie à partir de ses remarques.",
          youCanNow: "piloter un apprentissage par projet où l'IA soutient une vraie enquête et où l'apprentissage de chaque élève se voit."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Gérer et évaluer le projet",
        questions: [
          { q: "Pourquoi fixer un niveau d'usage de l'IA pour chaque étape plutôt qu'un seul pour tout le projet ?", options: ["L'IA l'exige", "C'est plus court", "Des étapes différentes développent des compétences différentes", "Pour embrouiller les élèves"], answer: 2, why: "Un premier brouillon peut se faire sans IA alors que la finition peut l'utiliser." },
          { q: "Que note le journal d'IA d'un élève ?", options: ["Date, outil, ce qui a été demandé, utilisé et modifié", "Les notes", "Les mots de passe", "Les notes de l'enseignant"], answer: 0, why: "Il rend l'usage de l'IA visible et honnête." },
          { q: "Comment voir ce que chaque élève a appris dans un projet d'équipe ?", options: ["Noter seulement la production de l'équipe", "Ajouter des points de contrôle individuels à chaque étape", "Demander à l'IA", "Ne pas évaluer"], answer: 1, why: "Des vérifications individuelles montrent l'apprentissage individuel." },
          { q: "Que doit dire la déclaration d'IA d'une équipe ?", options: ["Ce qu'a fait l'IA et ce qu'ont fait les élèves", "Rien", "Seulement le prix de l'outil", "Que l'IA n'existe pas"], answer: 0, why: "Une déclaration honnête fait partie de l'intégrité." },
          { q: "Avant de publier en ligne les travaux des élèves après la présentation, vérifiez :", options: ["L'avis de l'IA", "Rien", "Seulement la police", "Les règles de votre école sur les photos, les noms et le partage en ligne"], answer: 3, why: "Les règles de protection de la vie privée des élèves s'appliquent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et l'apprentissage par projet",
    questions: [
      { q: "Dans l'apprentissage par projet, les élèves apprennent en :", options: ["Lisant seulement des manuels", "Travaillant dans la durée sur une vraie question et en partageant une production", "Faisant seulement des quiz quotidiens", "Regardant des vidéos"], answer: 1, why: "C'est le cœur de l'apprentissage par projet." },
      { q: "Une question directrice doit être :", options: ["Secrète", "Résoluble en un mot", "Ouverte et importante pour les élèves", "Tirée d'une banque de tests"], answer: 2, why: "Elle guide une enquête dans la durée." },
      { q: "Rendre une question directrice locale aide parce que :", options: ["Elle ne demande pas de recherche", "Elle est plus courte", "L'IA ne peut pas simplement y répondre", "Elle évite les normes de programme"], answer: 2, why: "Les questions locales demandent une vraie enquête." },
      { q: "Lequel est un élément essentiel de l'apprentissage par projet ?", options: ["Une production publique pour un vrai public", "Pas de révision", "Un public limité à l'enseignant", "Aucun choix pour les élèves"], answer: 0, why: "Les productions publiques élèvent la qualité." },
      { q: "Les étapes sont :", options: ["Des niveaux de grille", "Des notes", "Des sorties scolaires", "Des points d'étape où des parties du projet doivent être rendues"], answer: 3, why: "Elles structurent le projet." },
      { q: "Pour chaque étape, l'IA peut lister :", options: ["Les noms des élèves", "Les connaissances nécessaires, pour prévoir des mini-leçons", "Les notes", "Les mots de passe"], answer: 1, why: "Cela aide à préparer l'enseignement." },
      { q: "Les calendriers de projet produits par l'IA :", options: ["Sautent des étapes", "Laissent trop de temps", "Sont toujours parfaits", "En mettent souvent trop"], answer: 3, why: "Vérifiez-les avec votre calendrier." },
      { q: "L'étape 1 de la routine de recherche est :", options: ["Citer l'IA", "Recopier la réponse de l'IA", "Explorer avec l'IA : questions et mots-clés", "Sauter la recherche"], answer: 2, why: "L'IA aide à commencer la recherche, pas à la finir." },
      { q: "Chaque fait utilisé par les élèves doit être :", options: ["Vérifié avec une vraie source", "Tiré de l'IA", "Non vérifié", "Inventé"], answer: 0, why: "L'IA peut inventer des faits." },
      { q: "Une enquête anonyme auprès des camarades est :", options: ["Un résumé produit par l'IA", "Une source primaire", "Une revue secondaire", "Interdite"], answer: 1, why: "Les élèves recueillent des preuves de première main." },
      { q: "Un journal de recherche note :", options: ["La question, la source, la découverte et la vérification", "Les mots de passe", "Les notes", "Les commandes de cantine"], answer: 0, why: "Il documente une vraie recherche." },
      { q: "Pourquoi le premier brouillon peut-il être une étape sans IA ?", options: ["Parce que les brouillons ne comptent pas", "L'IA est illégale", "Pour économiser de l'argent", "Pour voir la réflexion propre des élèves avant toute aide"], answer: 3, why: "D'abord la réflexion, ensuite l'aide." },
      { q: "Les règles que les élèves comprennent sont :", options: ["Des règles secrètes", "Des règles dont les raisons sont expliquées", "Des règles qui changent chaque jour", "Des règles données par l'IA"], answer: 1, why: "Les raisons favorisent l'adhésion." },
      { q: "Un point de contrôle individuel peut être :", options: ["Une note de groupe", "Seulement la production finale de l'équipe", "Un entretien de deux minutes", "Rien"], answer: 2, why: "Il montre l'apprentissage d'un élève." },
      { q: "Les questions de réflexion demandent aux élèves :", options: ["Leur note", "Leur mot de passe", "Ce qu'ils ont changé et pourquoi", "Rien"], answer: 2, why: "La réflexion approfondit l'apprentissage." },
      { q: "Chaque élève d'une équipe doit pouvoir :", options: ["Expliquer le travail de l'équipe et sa part", "Présenter seulement sa diapositive", "Rester silencieux", "Laisser l'IA expliquer"], answer: 0, why: "La compréhension partagée fait partie de l'apprentissage." },
      { q: "Un public authentique, c'est :", options: ["Personne", "Seulement l'enseignant", "Un outil d'IA", "De vraies personnes qui s'intéressent au travail"], answer: 3, why: "Un vrai public élève la qualité." },
      { q: "Une déclaration d'IA sur une production montre :", options: ["Le prix de l'IA", "Ce qu'a fait l'IA et ce qu'ont fait les élèves", "Les notes des élèves", "Rien"], answer: 1, why: "La transparence crée la confiance." },
      { q: "Les photos d'élèves lors de la présentation doivent suivre :", options: ["Les règles du fournisseur", "Aucune règle", "Les modes des réseaux sociaux", "Les règles de l'école sur les photos et les noms"], answer: 3, why: "La vie privée des élèves compte." },
      { q: "La réflexion finale doit porter sur :", options: ["Seulement l'outil d'IA", "Seulement la note", "Le sujet, le travail d'équipe et les moments où l'IA a aidé ou gêné", "Rien"], answer: 2, why: "Les élèves apprennent en réfléchissant aux trois." }
    ]
  }
};
