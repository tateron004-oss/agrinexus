"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-program-impact.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-program-impact-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "L'IA pour mener les programmes et mesurer leur impact",
  skills: "Construire un modèle logique simple, Choisir des mesures de résultats, Écrire un court questionnaire pour les participants avec l'IA, Résumer des résultats anonymes, Rédiger un rapport d'impact d'une page",
  outcome: "utiliser l'IA pour construire un modèle logique simple pour un programme, écrire un court questionnaire pour les participants, résumer des résultats anonymes, et en faire un rapport d'impact honnête d'une page pour votre conseil d'administration et vos financeurs.",
  about: [
    "Ce cours s'adresse aux responsables de programme, coordinateurs et bénévoles d'associations et d'organisations religieuses qui mènent des programmes et doivent montrer quelle différence ces programmes font.",
    "Vous planifierez un programme sur une page, choisirez quoi mesurer, utiliserez l'IA pour écrire un questionnaire équitable, résumerez les résultats sans exposer les informations privées de quiconque, et rédigerez un rapport d'impact auquel les financeurs et votre conseil peuvent se fier.",
    "Chaque leçon dure environ cinq minutes et construit une partie de votre rapport d'impact. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Pour un vrai programme, rédigez un rapport d'impact d'une page qui comprend : un modèle logique simple (ressources, activités, réalisations, résultats), deux mesures de résultats, un court questionnaire pour les participants rédigé avec l'IA, un résumé de résultats anonymes (données réelles ou d'entraînement, sans noms), une histoire partagée avec autorisation, et une leçon tirée honnêtement.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des responsables de programmes, des coordinateurs et des bénévoles d'associations et d'organisations confessionnelles qui mènent des programmes et doivent montrer la différence qu'ils font.",
    startingPoint: "Ils mènent des programmes et tiennent des comptes, comme les repas servis ou les séances organisées. Beaucoup n'ont jamais construit de modèle logique, mesuré des résultats avant et après, ni rédigé de rapport d'impact.",
    gap: "Les financeurs et les conseils d'administration demandent de plus en plus des résultats, pas seulement des comptes. Les apprenants ont besoin d'une façon simple et honnête de planifier, mesurer et rendre compte du changement, en utilisant l'IA pour gagner du temps tout en protégeant la vie privée des participants et en gardant chaque chiffre vrai.",
    constraints: [
      "De petites équipes avec peu de temps pour le travail sur les données",
      "Vie privée : les questionnaires sont volontaires et anonymes ; pas de noms, d'informations de santé ou d'immigration sauf si c'est vraiment nécessaire et conservé en sécurité",
      "Seuls des comptes, jamais les réponses personnelles brutes, vont dans les outils d'IA",
      "L'IA fait des erreurs de calcul, donc chaque pourcentage est vérifié dans un tableur",
      "Des outils gratuits comme Google Forms ou Microsoft Forms"
    ],
    prerequisites: "« Introduction à l'IA pour les associations », ou une première expérience d'un assistant d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de résultats d'un programme", action: "repérer lesquels sont des réalisations et lesquels sont des résultats", standard: "en trouvant au moins 4 réponses justes sur 5" },
    { id: "O2", condition: "À partir de la description publique d'un programme", action: "construire avec l'aide de l'IA un modèle logique d'une page avec les ressources, les activités, les réalisations et les résultats", standard: "en retirant tout ce que vous ne faites pas vraiment" },
    { id: "O3", condition: "Pour un résultat", action: "choisir deux mesures simples que votre équipe peut recueillir, posées avant et après", standard: "honnêtes et réalistes pour le temps de vos salariés et bénévoles" },
    { id: "O4", condition: "À partir de vos mesures de résultats", action: "écrire avec l'IA un court questionnaire anonyme de 5 à 8 questions pour les participants", standard: "sans questions orientées et avec une note disant qu'il est volontaire" },
    { id: "O5", condition: "À partir des comptes anonymes d'un questionnaire", action: "résumer les résultats avec l'IA et vérifier vous-même chaque pourcentage", standard: "sans aucun détail qui permette de reconnaître une personne" },
    { id: "O6", condition: "À partir de votre modèle logique et de résultats vérifiés", action: "rédiger un rapport d'impact d'une page avec le besoin, ce que vous avez fait, ce qui a changé, une histoire et une leçon tirée", standard: "sans aucun chiffre ni affirmation absent de vos données" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier ce qu'il faut mesurer",
      lessons: [
        {
          objectives: ["O1"],
          title: "Réalisations et résultats : quelle différence ?",
          minutes: 4,
          goal: "Distinguer réalisations et résultats pour un de vos programmes.",
          text: [
            "Les réalisations comptent ce que vous avez fait : 300 repas servis, 40 séances de soutien scolaire, 25 bénévoles formés. Les résultats décrivent ce qui a changé pour les gens : les familles s'inquiètent moins pour la nourriture, les élèves ont amélioré leurs notes de lecture, les bénévoles se sentent prêts à encadrer.",
            "Les financeurs et les conseils d'administration demandent de plus en plus des résultats, pas seulement des réalisations. Les résultats montrent que votre mission fonctionne.",
            "L'IA peut vous aider à y réfléchir. Demandez : \"Notre programme [description publique] fait [activités]. Liste les réalisations probables et les résultats probables à court terme pour les participants.\" Puis gardez ceux qui sont vrais pour votre programme."
          ],
          words: [["Réalisation", "le décompte de ce que votre programme a fait, comme le nombre de repas servis."], ["Résultat", "un changement dans la vie des gens grâce à votre programme."], ["Impact", "la différence plus grande et plus durable que votre travail fait dans la communauté."]],
          slides: [
            { title: "Les réalisations comptent ce que vous faites", bullets: ["300 repas servis", "40 séances de soutien scolaire", "25 bénévoles formés"] },
            { title: "Les résultats montrent ce qui change", bullets: ["Les familles s'inquiètent moins pour la nourriture", "Les élèves améliorent leurs notes de lecture", "Les bénévoles sont prêts à encadrer"] },
            { title: "Demandez des idées à l'IA", bullets: ["Réalisations et résultats probables", "Vous choisissez ce qui est vrai"] }
          ],
          tryIt: "Pour un programme, écrivez trois réalisations et deux résultats. Utilisez l'IA pour trouver des idées, puis ne gardez que ceux qui sont vrais pour votre programme.",
          youCanNow: "distinguer les réalisations des résultats pour votre propre programme.",
          quickCheck: [
            { objective: "O1", q: "« 25 bénévoles formés » est un exemple de quoi ?", options: ["Une réalisation", "Un résultat", "Une ressource", "Un questionnaire"], answer: 0, why: "Les réalisations comptent ce que vous avez fait ; les résultats décrivent ce qui a changé pour les personnes." },
            { objective: "O1", q: "Votre rapport ne liste que les repas servis. Un financeur demande des résultats. Qu'ajoutez-vous ?", options: ["Plus de comptes de repas", "Ce qui a changé pour les familles, comme moins d'inquiétude pour se nourrir", "Le coût de la nourriture", "Une liste de bénévoles"], answer: 1, why: "Les résultats décrivent ce qui a changé pour les personnes grâce au programme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire un modèle logique simple",
          minutes: 5,
          goal: "Construire avec l'aide de l'IA un modèle logique d'une page pour un programme.",
          text: [
            "Un modèle logique est une image d'une page qui montre comment votre programme fonctionne : les ressources (ce que vous y mettez), les activités (ce que vous faites), les réalisations (ce que vous comptez) et les résultats (ce qui change).",
            "Demandez à l'IA : \"Fais un tableau de modèle logique pour ce programme : [description publique]. Colonnes : ressources, activités, réalisations, résultats à court terme, résultats à long terme. Garde chaque case courte.\"",
            "Puis corrigez-le pour qu'il corresponde à la réalité. Retirez tout ce que vous ne faites pas. Un modèle logique est un plan que vous pouvez défendre, pas une liste de souhaits."
          ],
          steps: ["Décrivez le programme en trois phrases publiques.", "Demandez à l'IA un tableau de modèle logique en cinq colonnes.", "Retirez tout ce que vous ne faites pas vraiment.", "Vérifiez que chaque résultat est relié à une activité."],
          words: [["Modèle logique", "un tableau d'une page qui montre les ressources, les activités, les réalisations et les résultats."], ["Ressource", "ce que vous mettez dans un programme : salariés, bénévoles, argent, locaux."]],
          slides: [
            { title: "Un modèle logique montre", bullets: ["Ressources : ce que vous y mettez", "Activités : ce que vous faites", "Réalisations : ce que vous comptez", "Résultats : ce qui change"] },
            { title: "Demandez un tableau à l'IA", bullets: ["Cinq colonnes", "Des cases courtes"] },
            { title: "Rendez-le vrai", bullets: ["Retirez ce que vous ne faites pas", "Chaque résultat est relié à une activité"] }
          ],
          tryIt: "Construisez avec l'IA un tableau de modèle logique pour votre programme, puis retouchez-le jusqu'à ce que chaque case soit vraie.",
          youCanNow: "construire un modèle logique simple et honnête pour un programme.",
          quickCheck: [
            { objective: "O2", q: "Dans un modèle logique, que sont les activités ?", options: ["Ce que vous comptez", "Ce qui change", "Ce que vous faites", "Ce que vous y mettez"], answer: 2, why: "Les activités sont ce que vous faites ; les ressources sont ce que vous y mettez, les réalisations ce que vous comptez, les résultats ce qui change." },
            { objective: "O2", q: "Le modèle logique de l'IA cite un résultat à long terme que vous n'avez aucun moyen d'atteindre. Que faites-vous ?", options: ["Vous le gardez ; les financeurs aiment les grands objectifs", "Vous le rendez plus ambitieux", "Vous le copiez dans tous les programmes", "Vous le retirez pour que le modèle corresponde à la réalité"], answer: 3, why: "Un modèle logique est un plan que vous pouvez défendre, pas une liste de souhaits." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choisir des mesures de résultats",
          minutes: 5,
          goal: "Choisir deux mesures de résultats que vous pouvez vraiment recueillir.",
          text: [
            "Une mesure, c'est la façon dont vous saurez qu'un résultat s'est produit. Pour \"les familles s'inquiètent moins pour la nourriture\", une mesure pourrait être : le pourcentage de familles qui disent s'inquiéter moins de manquer de nourriture, demandé à l'inscription puis après trois mois.",
            "Les bonnes mesures sont simples, peuvent être recueillies par votre équipe, et sont honnêtes. Comparer avant et après est plus solide que de demander une seule fois.",
            "Demandez à l'IA : \"Propose trois façons simples pour une petite association de mesurer ce résultat : [résultat]. Nous avons [temps des salariés et des bénévoles].\" Choisissez-en deux que vous pouvez vraiment faire."
          ],
          steps: ["Choisissez deux résultats de votre modèle logique.", "Demandez à l'IA des façons simples de mesurer chacun.", "Choisissez celles que votre équipe peut recueillir.", "Prévoyez de mesurer avant et après quand c'est possible."],
          words: [["Mesure", "la façon dont vous saurez qu'un résultat s'est produit, souvent un nombre ou un pourcentage."], ["Avant et après", "poser la même question au début et plus tard, pour voir le changement."]],
          slides: [
            { title: "Une mesure montre un résultat", bullets: ["\"Pourcentage de familles qui s'inquiètent moins pour la nourriture\"", "Demandé à l'inscription et après trois mois"] },
            { title: "Les bonnes mesures sont", bullets: ["Simples", "Recueillables par votre équipe", "Honnêtes"] },
            { title: "Avant et après", bullets: ["Plus solide que demander une fois", "Montre le changement dans le temps"] }
          ],
          tryIt: "Choisissez deux mesures de résultats pour votre programme, avec les suggestions de l'IA, et notez quand vous recueillerez chacune.",
          youCanNow: "choisir des mesures de résultats que votre équipe peut recueillir.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi poser la question à l'inscription puis plus tard est-il plus solide que de la poser une seule fois ?", options: ["Cela montre le changement dans le temps", "C'est plus court", "Cela ne demande aucun temps à l'équipe", "Cela évite d'utiliser des chiffres"], answer: 0, why: "Comparer avant et après montre le changement." },
            { objective: "O3", q: "L'IA propose trois mesures, mais l'une demande des heures de travail que votre équipe n'a pas. Que faites-vous ?", options: ["Vous utilisez quand même les trois", "Vous choisissez les deux que vous pouvez vraiment recueillir", "Vous engagez d'abord un consultant", "Vous renoncez à mesurer"], answer: 1, why: "De bonnes mesures peuvent être recueillies par votre équipe ; choisissez les deux que vous pouvez vraiment faire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier ce qu'il faut mesurer",
        questions: [
          { objective: "O1", q: "Lequel est un résultat ?", options: ["Les familles s'inquiètent moins pour la nourriture", "300 repas servis", "40 séances tenues", "25 bénévoles formés"], answer: 0, why: "Les résultats sont des changements dans la vie des gens." },
          { objective: "O1", q: "Laquelle est une réalisation ?", options: ["Les élèves ont plus confiance en eux", "40 séances de soutien scolaire tenues", "Les familles sont en meilleure santé", "Les bénévoles se sentent prêts à encadrer"], answer: 1, why: "Les réalisations comptent ce que vous avez fait." },
          { objective: "O2", q: "Le modèle logique de l'IA cite une activité que vous ne faites pas. Que faites-vous ?", options: ["Vous la gardez", "Vous commencez à la faire en secret", "Vous la retirez", "Vous demandez à un financeur"], answer: 2, why: "Un modèle logique doit être vrai." },
          { objective: "O3", q: "Quel plan de mesure est le plus solide ?", options: ["Demander une fois à la fin", "Deviner", "Demander seulement aux salariés", "Poser la même question à l'inscription et après trois mois"], answer: 3, why: "Avant et après montre le changement." },
          { objective: "O2", q: "Que sont les ressources ?", options: ["Ce que vous y mettez : salariés, bénévoles, argent, locaux", "Les réponses au questionnaire", "Les noms des financeurs", "Les résultats"], answer: 0, why: "Les ressources sont les moyens qu'un programme utilise." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Recueillir, résumer et rendre compte",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire un questionnaire court et équitable pour les participants",
          minutes: 5,
          goal: "Utiliser l'IA pour rédiger un court questionnaire qui mesure vos résultats.",
          text: [
            "Un questionnaire demande aux participants ce qui a changé pour eux. Gardez-le court, environ 5 à 8 questions, avec des mots simples et dans les langues qu'ils parlent.",
            "Demandez à l'IA : \"Écris un questionnaire anonyme de 6 questions pour les adultes de notre programme alimentaire, pour mesurer [résultat]. Langage simple, niveau de fin d'école primaire, surtout des choix multiples, une question ouverte. Évite les questions orientées.\"",
            "Retirez toute question qui demande le nom, des détails de santé ou la situation migratoire, sauf si vous en avez vraiment besoin et un moyen sûr de les garder. Dites aux gens que le questionnaire est facultatif et n'aura aucun effet sur leurs services. Des outils gratuits comme Google Forms ou Microsoft Forms peuvent recueillir les réponses."
          ],
          steps: ["Demandez à l'IA un court questionnaire anonyme qui mesure votre résultat.", "Réécrivez toute question orientée.", "Retirez les questions sur les noms ou les détails sensibles dont vous n'avez pas besoin.", "Ajoutez une note disant que le questionnaire est facultatif.", "Créez-le dans un outil de formulaire gratuit."],
          words: [["Questionnaire", "une série de questions pour savoir ce que les gens pensent ou ont vécu."], ["Anonyme", "sans nom ni détail qui pourrait montrer qui a répondu."], ["Question orientée", "une question qui pousse vers une réponse, comme \"À quel point notre excellent programme vous a-t-il aidé ?\""]],
          slides: [
            { title: "Gardez-le court", bullets: ["5 à 8 questions", "Mots simples, dans les langues des gens"] },
            { title: "Demandez à l'IA", bullets: ["Anonyme, niveau de fin d'école primaire", "Surtout des choix multiples, une question ouverte", "Pas de questions orientées"] },
            { title: "Protégez les gens", bullets: ["Pas de noms ni de détails sensibles sauf nécessité", "Facultatif : aucun effet sur les services"] }
          ],
          tryIt: "Rédigez avec l'IA un questionnaire anonyme de 6 questions pour votre programme. Trouvez et réécrivez toute question orientée, et ajoutez une note sur le caractère facultatif.",
          youCanNow: "écrire avec l'aide de l'IA un questionnaire court, équitable et anonyme pour les participants.",
          quickCheck: [
            { objective: "O4", q: "Quel genre de questions doit utiliser la plus grande partie du questionnaire ?", options: ["De longues questions à développement", "Des questions sur les noms et les adresses", "Surtout des choix multiples, avec une question ouverte", "Seulement des oui ou non sur l'équipe"], answer: 2, why: "La demande prévoit surtout des choix multiples et une question ouverte." },
            { objective: "O4", q: "Le questionnaire de l'IA demande à chaque participant ses problèmes de santé. Que faites-vous ?", options: ["Vous la gardez pour avoir plus de données", "Vous la rendez obligatoire", "Vous demandez aussi leur nom", "Vous la retirez, sauf si vous en avez vraiment besoin et pouvez la conserver en sécurité"], answer: 3, why: "Retirez les questions sur la santé ou l'immigration, sauf si elles sont vraiment nécessaires et conservées en sécurité." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Résumer les résultats sans exposer personne",
          minutes: 5,
          goal: "Résumer des résultats de questionnaire anonymes avec l'IA et vérifier vous-même les chiffres.",
          text: [
            "Avant d'utiliser l'IA sur les résultats, assurez-vous que les données ne contiennent ni noms, ni coordonnées, ni rien d'autre qui pourrait identifier une personne. Si un petit groupe pouvait être reconnu (par exemple les trois seuls aînés qui parlent anglais), regroupez ou retirez ces détails.",
            "Votre outil de formulaire ou votre tableur peut compter les réponses pour vous. Ensuite, vous pouvez coller dans l'IA les totaux, et non les réponses personnelles brutes : \"Voici les totaux du questionnaire : [totaux]. Résume les principaux constats en 4 points et propose un graphique.\"",
            "Vérifiez vous-même chaque pourcentage dans le tableur. L'IA fait souvent des erreurs de calcul. Pour les réponses ouvertes, lisez-les d'abord vous-même et retirez tout ce qui identifie avant de demander à l'IA de les regrouper par thèmes."
          ],
          steps: ["Retirez les noms et les détails qui identifient.", "Comptez les réponses dans votre outil de formulaire ou votre tableur.", "Collez dans l'IA les totaux, pas les réponses personnelles brutes.", "Demandez un court résumé et une idée de graphique.", "Vérifiez vous-même chaque pourcentage."],
          words: [["Données", "les informations que vous avez recueillies, comme les réponses au questionnaire."], ["Thème", "une idée qui revient souvent dans les réponses ouvertes."], ["Pourcentage", "une part sur 100, par exemple 60 personnes sur 100 font 60 pour cent."]],
          slides: [
            { title: "Protégez d'abord les gens", bullets: ["Ni noms ni coordonnées", "Les petits groupes peuvent être reconnus : regroupez-les"] },
            { title: "Comptez, puis résumez", bullets: ["Laissez le tableur compter", "Donnez à l'IA des totaux, pas des réponses brutes"] },
            { title: "Vérifiez les calculs", bullets: ["L'IA fait des erreurs de calcul", "Vérifiez vous-même chaque pourcentage"] }
          ],
          tryIt: "Utilisez des totaux d'entraînement (par exemple 30 personnes sur 40 disent s'inquiéter moins pour la nourriture). Demandez à l'IA un résumé en 4 points, puis vérifiez chaque pourcentage avec une calculatrice.",
          youCanNow: "résumer des résultats anonymes avec l'IA et vérifier les chiffres.",
          quickCheck: [
            { objective: "O5", q: "Que faites-vous des réponses ouvertes avant de demander à l'IA d'en tirer des thèmes ?", options: ["Vous les lisez vous-même et retirez tout ce qui permet de reconnaître quelqu'un", "Vous les collez toutes telles quelles", "Vous les supprimez", "Vous les envoyez au financeur"], answer: 0, why: "Lisez d'abord les réponses ouvertes et retirez tout ce qui permet de reconnaître quelqu'un." },
            { objective: "O5", q: "Seuls deux participants sont des hommes de plus de 70 ans, donc on pourrait les reconnaître. Que faites-vous ?", options: ["Vous les présentez à part, avec leur nom", "Vous regroupez ou laissez de côté ces détails", "Vous demandez à l'IA de deviner qui ils sont", "Vous publiez leurs réponses en ligne"], answer: 1, why: "Si un petit groupe peut être reconnu, regroupez ou laissez de côté ces détails." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rédiger un rapport d'impact d'une page",
          minutes: 5,
          goal: "Transformer votre modèle logique et vos résultats en rapport d'impact honnête d'une page.",
          text: [
            "Un rapport d'impact dit à votre conseil, à vos financeurs et à votre communauté ce que votre programme a fait et ce qui a changé. Une page suffit : le besoin, ce que vous avez fait (réalisations), ce qui a changé (résultats chiffrés), une histoire, et ce que vous avez appris.",
            "Demandez à l'IA : \"En utilisant seulement ces informations, écris un rapport d'impact d'une page avec ces titres : Le besoin, Ce que nous avons fait, Ce qui a changé, Une histoire, Ce que nous avons appris. [votre modèle logique, vos mesures, vos résultats vérifiés, une histoire partagée avec autorisation].\"",
            "Ajoutez une leçon honnête. Les financeurs font confiance aux organisations qui disent ce qui n'a pas marché et comment elles vont s'améliorer. Ne laissez jamais l'IA ajouter des chiffres ou des affirmations qui ne sont pas dans vos données."
          ],
          steps: ["Rassemblez votre modèle logique, vos mesures, vos résultats vérifiés et une histoire autorisée.", "Demandez à l'IA un rapport d'une page avec cinq titres, en n'utilisant que vos informations.", "Vérifiez chaque chiffre dans votre tableur.", "Ajoutez une leçon honnête.", "Faites relire par un collègue."],
          words: [["Rapport d'impact", "un court rapport sur ce qu'un programme a fait et ce qui a changé."], ["Leçon tirée", "une chose que vous avez découverte et qui vous aidera à mieux faire la prochaine fois."]],
          slides: [
            { title: "Une page, cinq parties", bullets: ["Le besoin", "Ce que nous avons fait et ce qui a changé", "Une histoire", "Ce que nous avons appris"] },
            { title: "Demandez à l'IA", bullets: ["\"En utilisant seulement ces informations...\"", "Cinq titres"] },
            { title: "Restez honnête", bullets: ["Chaque chiffre vient de vos données", "Ajoutez une leçon tirée", "Un collègue relit"] }
          ],
          tryIt: "Tâche finale : rédigez votre rapport d'impact d'une page avec un modèle logique, deux mesures, votre questionnaire, un résumé de résultats anonymes, une histoire partagée avec autorisation et une leçon tirée honnêtement.",
          youCanNow: "planifier, mesurer et rendre compte de l'impact d'un programme avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O6", q: "Quel titre fait partie du rapport d'impact d'une page de la leçon ?", options: ["Mots de passe des donateurs", "Salaires de l'équipe", "Ce que nous avons appris", "Adresses des participants"], answer: 2, why: "Les titres sont : le besoin, ce que nous avons fait, ce qui a changé, une histoire et ce que nous avons appris." },
            { objective: "O6", q: "Le rapport de l'IA ajoute « 90 % des familles ont trouvé un emploi », ce qui n'est pas dans vos données. Que faites-vous ?", options: ["Vous le gardez ; c'est excellent", "Vous le changez en 80 %", "Vous le mettez en note de bas de page", "Vous le retirez, car l'IA ne doit pas ajouter d'affirmations absentes de vos données"], answer: 3, why: "Ne laissez jamais l'IA ajouter des chiffres ou des affirmations absents de vos données." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Recueillir, résumer et rendre compte",
        questions: [
          { objective: "O4", q: "Laquelle est une question orientée ?", options: ["\"À quelle fréquence vous êtes-vous inquiété pour la nourriture le mois dernier ?\"", "\"À quel point notre merveilleux programme vous a-t-il aidé ?\"", "\"Quel jour venez-vous ?\"", "\"Comment avez-vous entendu parler de nous ?\""], answer: 1, why: "Elle pousse vers une réponse positive." },
          { objective: "O4", q: "Que devez-vous dire aux gens sur votre questionnaire ?", options: ["Qu'il est obligatoire pour recevoir les services", "Rien", "Qu'il est facultatif et n'aura aucun effet sur leurs services", "Que leurs réponses seront publiées"], answer: 2, why: "Les gens doivent se sentir libres de répondre honnêtement, ou pas du tout." },
          { objective: "O5", q: "Que collez-vous dans l'IA pour résumer les résultats ?", options: ["Les réponses brutes avec les noms", "Les numéros de téléphone des participants", "Toute la base de données des bénéficiaires", "Des totaux sans détail qui identifie"], answer: 3, why: "Les totaux protègent la vie privée." },
          { objective: "O5", q: "L'IA dit que 30 sur 40 font 80 pour cent. Que faites-vous ?", options: ["Vous vérifiez vous-même : c'est 75 pour cent", "Vous l'utilisez", "Vous arrondissez à 100", "Vous retirez tous les chiffres"], answer: 0, why: "L'IA fait des erreurs de calcul ; 30 sur 40 font 75 pour cent." },
          { objective: "O6", q: "Pourquoi ajouter une leçon tirée dans un rapport d'impact ?", options: ["Pour remplir la page", "Les financeurs font confiance aux organisations honnêtes qui s'améliorent", "L'IA l'exige", "Pour cacher les résultats"], answer: 1, why: "Être honnête sur ce qui n'a pas marché crée la confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour mener les programmes et mesurer leur impact",
    questions: [
      { objective: "O1", q: "Une réalisation, c'est :", options: ["Un changement dans la vie des gens", "Un donateur", "Le décompte de ce que votre programme a fait", "Une question de questionnaire"], answer: 2, why: "Les réalisations comptent l'activité." },
      { objective: "O1", q: "Un résultat, c'est :", options: ["Le nombre d'affiches imprimées", "Le budget", "L'adresse du bureau", "Un changement dans la vie des gens grâce à votre programme"], answer: 3, why: "Les résultats sont des changements pour les gens." },
      { objective: "O1", q: "Pourquoi les financeurs demandent-ils des résultats ?", options: ["Les résultats montrent que la mission fonctionne", "Ils sont plus faciles à compter", "Ils sont plus courts", "Les financeurs n'aiment pas les chiffres"], answer: 0, why: "Les résultats montrent une vraie différence." },
      { objective: "O2", q: "Qu'est-ce qui ne fait PAS partie d'un modèle logique ?", options: ["Les ressources", "Les mots de passe des donateurs", "Les activités", "Les résultats"], answer: 1, why: "Un modèle logique a des ressources, des activités, des réalisations et des résultats." },
      { objective: "O2", q: "Un modèle logique doit être :", options: ["Une liste de souhaits", "Secret", "Un plan que vous pouvez défendre, fidèle à ce que vous faites", "Écrit seulement par l'IA"], answer: 2, why: "Il doit correspondre à la réalité." },
      { objective: "O2", q: "Chaque résultat d'un modèle logique doit être relié à :", options: ["Un donateur", "Un logo", "Un jour férié", "Une activité"], answer: 3, why: "Les activités mènent aux résultats." },
      { objective: "O3", q: "Une bonne mesure est :", options: ["Simple, recueillable et honnête", "Complexe et chère", "Impossible à recueillir", "Inventée"], answer: 0, why: "Votre équipe doit pouvoir la recueillir." },
      { objective: "O3", q: "Mesurer avant et après vous aide à :", options: ["Éviter les questionnaires", "Voir le changement dans le temps", "Sauter les résultats", "Cacher les résultats"], answer: 1, why: "La comparaison montre le changement." },
      { objective: "O4", q: "Quelle longueur pour un questionnaire de participants ?", options: ["50 questions", "Un mot", "Environ 5 à 8 questions", "Aucune limite"], answer: 2, why: "Les questionnaires courts obtiennent plus de réponses." },
      { objective: "O4", q: "Un questionnaire anonyme :", options: ["Demande le nom complet", "Est seulement pour les salariés", "N'a pas de questions", "N'a ni noms ni détails qui montrent qui a répondu"], answer: 3, why: "L'anonymat protège les participants." },
      { objective: "O4", q: "Quelle question de questionnaire faut-il en général retirer ?", options: ["La situation migratoire, sauf si vraiment nécessaire et gardée en sécurité", "\"À quelle fréquence êtes-vous venu ?\"", "\"Vous êtes-vous senti bien accueilli ?\"", "\"Que pourrions-nous améliorer ?\""], answer: 0, why: "Les détails sensibles mettent les gens en danger." },
      { objective: "O4", q: "Quels outils gratuits peuvent recueillir les réponses ?", options: ["Une calculatrice", "Google Forms ou Microsoft Forms", "Une imprimante", "Un chargeur de téléphone"], answer: 1, why: "Les outils de formulaire recueillent et comptent les réponses." },
      { objective: "O5", q: "Un petit groupe pourrait être reconnu dans vos résultats. Vous devez :", options: ["Le nommer", "Le publier", "Regrouper ou retirer ces détails", "L'ignorer"], answer: 2, why: "Les petits groupes peuvent permettre d'identifier des personnes." },
      { objective: "O5", q: "Qui doit compter les réponses ?", options: ["L'IA en devinant", "Un donateur", "Personne", "Votre outil de formulaire ou votre tableur"], answer: 3, why: "Les tableurs comptent de façon fiable." },
      { objective: "O5", q: "L'IA fait des erreurs de calcul, donc vous devez :", options: ["Vérifier vous-même chaque pourcentage", "Lui faire confiance", "Retirer tous les chiffres", "Lui demander deux fois et en choisir un"], answer: 0, why: "C'est vous qui êtes responsable des chiffres." },
      { objective: "O5", q: "Un thème dans les réponses ouvertes, c'est :", options: ["Un jeu de couleurs", "Une idée qui revient souvent", "Un type de donateur", "Le nom d'un programme"], answer: 1, why: "Les thèmes résument les réponses ouvertes." },
      { objective: "O6", q: "Un rapport d'impact doit faire :", options: ["100 pages", "Seulement des photos", "Environ une page avec le besoin, ce que vous avez fait, ce qui a changé, une histoire et les leçons", "Seulement un budget"], answer: 2, why: "Une page claire suffit." },
      { objective: "O6", q: "Quelle demande garde un rapport d'impact honnête ?", options: ["\"Grossis nos chiffres.\"", "\"Invente une histoire de réussite.\"", "\"Ajoute des statistiques impressionnantes.\"", "\"En utilisant seulement ces informations, écris...\""], answer: 3, why: "Limiter l'IA à vos données empêche les affirmations inventées." },
      { objective: "O6", q: "Une histoire dans un rapport d'impact demande :", options: ["L'autorisation de la personne", "Son nom complet et son adresse", "Une célébrité", "Rien"], answer: 0, why: "Les histoires demandent un consentement." },
      { objective: "O6", q: "Qui doit lire le rapport d'impact avant sa diffusion ?", options: ["Personne", "Un collègue", "Seulement l'IA", "Un concurrent"], answer: 1, why: "Un deuxième lecteur repère les erreurs." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      8,
      12,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Modèle logique",
        objective: "O2",
        notYet: "Une colonne manque, ou il cite des choses que le programme ne fait pas.",
        meets: "Ressources, activités, réalisations et résultats, tous fidèles au programme.",
        exceeds: "Chaque résultat est clairement relié à une activité."
      },
      {
        name: "Mesures de résultats",
        objective: "O3",
        notYet: "Les mesures sont des réalisations, ou ne peuvent pas être recueillies.",
        meets: "Deux mesures de résultats simples et honnêtes que l'équipe peut recueillir.",
        exceeds: "Les deux sont posées avant et après pour montrer le changement."
      },
      {
        name: "Questionnaire équitable",
        objective: "O4",
        notYet: "Des questions orientées, ou il demande des noms ou des détails sensibles sans besoin.",
        meets: "5 à 8 questions simples, anonyme et volontaire.",
        exceeds: "Proposé dans les langues des participants."
      },
      {
        name: "Résultats anonymes et vérifiés",
        objective: "O5",
        notYet: "Les résultats pourraient permettre de reconnaître quelqu'un, ou un pourcentage est faux.",
        meets: "Un résumé à partir des comptes, sans détails qui permettent de reconnaître quelqu'un, avec chaque pourcentage vérifié.",
        exceeds: "Les réponses ouvertes sont regroupées en thèmes après le retrait des détails qui permettent de reconnaître quelqu'un."
      },
      {
        name: "Rapport honnête d'une page",
        objective: "O6",
        notYet: "Un chiffre ou une affirmation n'est pas dans les données, ou l'histoire n'a pas d'autorisation.",
        meets: "Une page avec le besoin, les réalisations, les résultats, une histoire autorisée et une leçon tirée.",
        exceeds: "Un collègue l'a lu, et la leçon tirée dit comment le programme va s'améliorer."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Programmes qui recueillent des données de résultats avant et après dans les 90 jours (enquête de suivi)",
      "Rapports d'impact partagés avec un conseil d'administration ou un financeur dans les 90 jours",
      "Renouvellements de subventions ou nouveaux financements que les organisations relient à leurs rapports d'impact"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet et un tableur gratuit",
      "Un assistant d'IA gratuit et Google Forms ou Microsoft Forms",
      "La description publique d'un programme, et des données d'entraînement sans noms si les vraies données ne sont pas prêtes",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Fournissez un jeu de données d'entraînement sans noms pour que les apprenants s'exercent à résumer en sécurité.",
      "Faites le tri entre réalisations et résultats sous forme de jeu en groupe avant le premier contrôle.",
      "Faites vérifier ensemble dans un tableur les pourcentages de l'IA pour voir combien de fois il faut les corriger.",
      "Rappelez que les questionnaires doivent être volontaires et ne doivent pas avoir d'effet sur les services de quiconque.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
