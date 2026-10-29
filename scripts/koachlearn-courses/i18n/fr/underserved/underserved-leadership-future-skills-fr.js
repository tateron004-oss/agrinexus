"use strict";

// Koach Learn course (French translation of underserved/underserved-leadership-future-skills.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-leadership-future-skills-fr",
  lang: "fr",
  translationOf: "underserved-leadership-future-skills",
  category: "Undeserved Community",
  name: "Leadership, confiance en soi et compétences d'avenir",
  skills: "Fixer un objectif clair, Résoudre les problèmes étape par étape, Prendre la parole avec confiance, Donner et demander des retours, Mener un petit projet, Planifier votre prochaine compétence",
  outcome: "planifier et mener un petit projet communautaire : fixer un objectif clair, résoudre les problèmes étape par étape, faire une intervention d'une minute qui recrute des volontaires, et utiliser un assistant d'IA gratuit comme partenaire d'entraînement tout au long du chemin.",
  about: [
    "Vous n'avez pas besoin d'un titre pour être un leader. Si vous organisez votre famille, aidez vos voisins, animez un comité d'église ou formez les nouveaux collègues de votre équipe, vous êtes déjà un leader.",
    "Ce cours développe les compétences qui donnent confiance aux leaders : fixer des objectifs clairs, résoudre les problèmes étape par étape, prendre la parole, donner des retours, mener un petit projet et choisir la prochaine compétence à apprendre. Un assistant d'IA gratuit est votre partenaire d'entraînement : il vous pose des questions, écoute vos interventions d'essai et vous donne des retours.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Planifiez un petit projet communautaire que vous pourriez vraiment réaliser, comme un échange de livres, une collecte de vêtements ou un nettoyage de parc. Écrivez un objectif clair, listez deux problèmes qui pourraient survenir et comment vous les résoudriez, et écrivez une intervention d'une minute pour demander l'aide de trois personnes. Entraînez-vous à voix haute avec un assistant d'IA, demandez des retours, et améliorez-la une fois.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes et des jeunes adultes de communautés mal desservies qui dirigent déjà sans en avoir le titre : parents, bénévoles d'église et d'associations de quartier, chefs d'équipe, et personnes qui veulent lancer un projet pour leur communauté.",
    startingPoint: "Ils organisent leur famille, leurs amis ou leurs collègues au quotidien, mais ne se voient pas toujours comme des leaders. Beaucoup sont nerveux pour parler devant un groupe et n'ont jamais planifié un projet avec des objectifs, des tâches et des dates.",
    gap: "Les projets communautaires s'arrêtent sans objectif clair, sans plan pour les problèmes et sans personnes prêtes à aider. Les apprenants ont besoin d'habitudes de leadership simples et de la confiance pour prendre la parole, et un assistant d'IA gratuit peut être un partenaire d'entraînement patient.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque",
      "Coût : seulement des outils gratuits et des formations gratuites",
      "Vie privée : aucun détail privé sur des personnes quand on décrit un problème à une IA",
      "Les projets doivent rester petits et faisables avec le temps et l'aide dont disposent les apprenants"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un souhait pour votre communauté ou d'une compétence que vous voulez développer", action: "écrire un objectif clair avec un quoi, un combien et un pour quand, et choisir une première étape", standard: "que vous pouvez vraiment réaliser avec le temps et l'aide dont vous disposez" },
    { id: "O2", condition: "Face à un vrai problème à la maison, au travail ou dans un groupe", action: "le résoudre en quatre étapes : le nommer, lister des options, en choisir une et vérifier le résultat", standard: "en pesant un point fort et un risque pour au moins trois options" },
    { id: "O3", condition: "À partir d'un objectif pour lequel vous voulez de l'aide", action: "écrire et répéter une intervention d'une minute avec un appel à l'action clair", standard: "répétée à voix haute et améliorée une fois grâce aux retours de l'IA" },
    { id: "O4", condition: "Après avoir travaillé avec un bénévole, un collègue ou un membre de la famille", action: "donner des retours bienveillants et utiles, et demander vous-même des retours", standard: "avec une chose qui a bien marché, une chose à essayer la prochaine fois, et un merci" },
    { id: "O5", condition: "Face à un petit projet communautaire", action: "le découper en tâches avec une personne et une date pour chacune, et prévoir deux problèmes", standard: "avec des bénévoles qui choisissent leurs tâches et un point chaque semaine" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se diriger soi-même",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fixer un objectif clair",
          minutes: 5,
          goal: "Transformer un souhait en objectif clair avec un quoi, un combien et un pour quand.",
          text: [
            "Les leaders commencent par un objectif clair. « Aider les enfants de ma rue à lire plus » est un souhait. « Organiser un échange de livres gratuit au centre communautaire le premier samedi du mois prochain et donner 50 livres » est un objectif.",
            "Un objectif clair dit ce que vous allez faire, combien, et pour quand. Il doit être réalisable avec le temps et l'aide dont vous disposez.",
            "Un assistant d'IA peut vous aider à préciser un objectif. Demandez : « Voici mon souhait : ... Aide-moi à en faire un objectif clair avec quoi, combien et pour quand. Pose-moi d'abord des questions. »"
          ],
          steps: ["Notez un souhait pour votre famille, votre travail ou votre communauté.", "Ajoutez ce que vous allez faire, combien, et pour quand.", "Demandez à l'IA de vous poser des questions et de vous aider à le préciser.", "Vérifiez que c'est vraiment réalisable."],
          words: [["Objectif", "quelque chose de précis que vous prévoyez de faire avant une certaine date."], ["Date limite", "la date à laquelle quelque chose doit être fait."]],
          slides: [
            { title: "Souhait ou objectif", bullets: ["Souhait : « Aider les enfants à lire plus »", "Objectif : « Échange de livres, 1er samedi du mois prochain, 50 livres »"] },
            { title: "Un objectif clair a", bullets: ["Ce que vous allez faire", "Combien", "Pour quand"] },
            { title: "Précisez-le avec l'IA", bullets: ["« Pose-moi d'abord des questions »", "Vérifiez que c'est vraiment réalisable"] }
          ],
          tryIt: "Écrivez un souhait pour votre communauté. Demandez à un assistant d'IA de vous poser des questions et de vous aider à en faire un objectif clair avec quoi, combien et pour quand.",
          youCanNow: "transformer un souhait en objectif clair et réalisable.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui transforme un souhait en objectif clair ?", options: ["Ajouter un quoi, un combien et un pour quand", "Le rendre plus long", "Ajouter plus de noms de personnes", "Le dire plus fort"], answer: 0, why: "Un objectif clair dit ce que vous ferez, combien et pour quand." },
            { objective: "O1", q: "Votre objectif est de donner 1 000 livres la semaine prochaine, seul. Que faites-vous ?", options: ["Le garder ; les grands objectifs sont les meilleurs", "En faire quelque chose que vous pouvez vraiment réaliser avec votre temps et votre aide", "Abandonner l'idée", "Demander à l'IA de le faire pour vous"], answer: 1, why: "Un bon objectif est quelque chose que vous pouvez vraiment réaliser avec le temps et l'aide dont vous disposez." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Résoudre les problèmes étape par étape",
          minutes: 5,
          goal: "Utiliser quatre étapes simples pour traiter un vrai problème.",
          text: [
            "Tout projet rencontre des problèmes. Les leaders restent calmes et les traitent par étapes : nommer le problème, lister quelques options, en choisir une, puis vérifier le résultat.",
            "L'IA est un bon partenaire de réflexion. Décrivez le problème sans détails privés et demandez : « Donne-moi trois options pour résoudre ceci, avec un point fort et un risque pour chacune. » Par exemple : « Seulement deux personnes se sont inscrites pour aider à notre collecte de vêtements. »",
            "C'est vous qui choisissez. Vous connaissez vos gens et votre communauté mieux que n'importe quelle IA. Après avoir essayé une option, faites le bilan : est-ce que ça a marché ? Que feriez-vous autrement ?"
          ],
          steps: ["Nommez le problème en une phrase.", "Demandez à l'IA trois options, chacune avec un point fort et un risque.", "Choisissez l'option qui convient à vos gens et à la situation.", "Essayez-la, puis vérifiez le résultat."],
          words: [["Option", "un choix possible."], ["Risque", "quelque chose qui pourrait mal tourner."]],
          slides: [
            { title: "Quatre étapes", bullets: ["1. Nommer le problème", "2. Lister des options", "3. En choisir une", "4. Vérifier le résultat"] },
            { title: "L'IA comme partenaire de réflexion", bullets: ["« Donne-moi trois options »", "« Un point fort et un risque pour chacune »"] },
            { title: "C'est vous qui choisissez", bullets: ["Vous connaissez mieux vos gens", "Bilan : que changeriez-vous ?"] }
          ],
          tryIt: "Choisissez un vrai problème à la maison, au travail ou dans votre groupe. Demandez à un assistant d'IA trois options avec un point fort et un risque pour chacune. Choisissez-en une et écrivez pourquoi.",
          youCanNow: "traiter un problème en quatre étapes avec l'IA comme partenaire de réflexion.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la dernière étape pour résoudre un problème étape par étape ?", options: ["Nommer le problème", "Lister des options", "Vérifier le résultat", "Accuser quelqu'un"], answer: 2, why: "Après avoir essayé une option, vous regardez si elle a marché et ce qu'il faut changer." },
            { objective: "O2", q: "Seulement deux personnes se sont inscrites à votre collecte de vêtements. Que demandez-vous à l'IA ?", options: ["« Règle ça. »", "« Qui sont les paresseux ? »", "« Annule la collecte. »", "« Donne-moi trois options, chacune avec un point fort et un risque. »"], answer: 3, why: "Demander des options avec un point fort et un risque vous aide à bien choisir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Prendre la parole avec confiance",
          minutes: 5,
          goal: "Préparer et répéter une courte intervention qui demande aux gens d'agir.",
          text: [
            "La confiance grandit avec la pratique. Une courte intervention est plus facile avec une forme simple : pourquoi c'est important, ce que vous voulez faire, et ce que vous demandez aux gens de faire.",
            "Écrivez une intervention d'une minute (environ 120 à 150 mots). Puis répétez-la à voix haute. Vous pouvez la taper dans un assistant d'IA et demander : « Est-ce clair et chaleureux ? Donne-moi deux façons de la renforcer. Garde-la sous une minute. »",
            "Le trac est normal. Respirez lentement, regardez quelques visages bienveillants, et parlez un peu plus lentement que vous ne le pensez nécessaire. S'entraîner devant un miroir ou un ami aide aussi."
          ],
          steps: ["Écrivez pourquoi c'est important, ce que vous voulez faire et ce que vous demandez.", "Gardez-la à environ une minute.", "Demandez à une IA deux façons de la renforcer.", "Répétez-la à voix haute trois fois, lentement."],
          words: [["Appel à l'action", "la partie d'une intervention qui dit exactement aux gens ce que vous voulez qu'ils fassent."]],
          slides: [
            { title: "Une forme simple", bullets: ["Pourquoi c'est important", "Ce que vous voulez faire", "Ce que vous demandez aux gens"] },
            { title: "Entraînez-vous avec l'IA", bullets: ["Environ une minute, 120-150 mots", "« Donne-moi deux façons de la renforcer »"] },
            { title: "Gérer le trac", bullets: ["Respirez lentement", "Trouvez des visages bienveillants", "Parlez un peu plus lentement"] }
          ],
          tryIt: "Écrivez une intervention d'une minute sur l'objectif de la leçon 1. Demandez à un assistant d'IA deux façons de la renforcer, puis répétez-la trois fois à voix haute.",
          youCanNow: "préparer et répéter une courte intervention avec un appel à l'action clair.",
          quickCheck: [
            { objective: "O3", q: "Quelle est la forme simple d'une courte intervention ?", options: ["Pourquoi c'est important, ce que vous voulez faire, et votre demande", "Une longue histoire, une blague et un au revoir", "Seulement des faits et des chiffres", "L'histoire de votre vie"], answer: 0, why: "Cette forme garde l'intervention courte et dit aux gens quoi faire." },
            { objective: "O3", q: "Vos mains tremblent avant votre intervention. Qu'est-ce qui aide ?", options: ["Ne pas faire l'intervention", "Respirer lentement et parler un peu plus lentement", "Parler le plus vite possible", "Lire sans lever les yeux"], answer: 1, why: "Respirer lentement et parler plus lentement aident à calmer le trac." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se diriger soi-même",
        questions: [
          { objective: "O1", q: "Lequel est un objectif clair ?", options: ["« Aider plus les gens »", "« Être un meilleur voisin »", "« Organiser un échange de livres le premier samedi du mois prochain et donner 50 livres »", "« Faire de bonnes choses »"], answer: 2, why: "Il dit quoi, combien et pour quand." },
          { objective: "O1", q: "Quelles sont les trois parties d'un objectif clair ?", options: ["Quoi, combien et pour quand", "Qui, pourquoi et où", "Un titre, un logo et un slogan", "Un budget, une banque et un prêt"], answer: 0, why: "Ces parties rendent un objectif clair et vérifiable." },
          { objective: "O2", q: "Quelle est la première étape pour résoudre un problème ?", options: ["Choisir n'importe quelle option", "Accuser quelqu'un", "Abandonner", "Nommer le problème en une phrase"], answer: 3, why: "On ne peut pas résoudre un problème qu'on n'a pas nommé." },
          { objective: "O2", q: "L'IA propose trois options. Qui choisit ?", options: ["L'IA", "Vous, parce que vous connaissez vos gens et votre communauté", "Personne", "La première personne qui répond"], answer: 1, why: "L'IA est un partenaire de réflexion ; c'est vous qui décidez." },
          { objective: "O3", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un appel téléphonique", "Un numéro d'urgence", "La partie d'une intervention qui dit aux gens ce que vous voulez qu'ils fassent", "Une sonnerie"], answer: 2, why: "Il transforme les auditeurs en volontaires." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Diriger les autres et grandir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Donner et demander des retours",
          minutes: 5,
          goal: "Donner des retours bienveillants et utiles, et en demander.",
          text: [
            "Un retour est une information qui aide quelqu'un à mieux faire. Les bons leaders en donnent avec bienveillance et en demandent souvent.",
            "Une façon simple de donner un retour : dire une chose qui s'est bien passée, une chose à essayer la prochaine fois, et remercier. Par exemple : « Tu as installé les tables vite. La prochaine fois, mettons la feuille d'inscription près de la porte. Merci d'être venu tôt. »",
            "Demandez aussi des retours : « Quelle est une chose que je pourrais mieux faire à notre prochaine réunion ? » Vous pouvez vous entraîner avec une IA : décrivez une situation et demandez-lui de vous aider à formuler un retour bienveillant et clair."
          ],
          steps: ["Dites une chose qui s'est bien passée.", "Dites une chose à essayer la prochaine fois.", "Remerciez la personne.", "Demandez aux autres : « Quelle est une chose que je pourrais mieux faire ? »"],
          words: [["Retour", "une information qui aide quelqu'un à voir ce qui s'est bien passé et ce qu'il peut améliorer."]],
          slides: [
            { title: "Les retours font grandir", bullets: ["Donnez-les avec bienveillance", "Demandez-en souvent"] },
            { title: "Une forme simple", bullets: ["Une chose qui s'est bien passée", "Une chose à essayer la prochaine fois", "Merci"] },
            { title: "Demandez-en", bullets: ["« Quelle chose pourrais-je mieux faire ? »", "Écoutez sans discuter"] }
          ],
          tryIt: "Pensez à un volontaire, un collègue ou un membre de la famille. Demandez à un assistant d'IA de vous aider à formuler un retour bienveillant avec une chose qui s'est bien passée et une chose à essayer la prochaine fois. Dites-le à voix haute.",
          youCanNow: "donner des retours bienveillants et utiles, et en demander.",
          quickCheck: [
            { objective: "O4", q: "Quelle est la dernière partie de la forme des retours dans ce cours ?", options: ["Un avertissement", "Une liste d'erreurs", "Un merci", "Une note"], answer: 2, why: "Des retours bienveillants se terminent en remerciant la personne." },
            { objective: "O4", q: "Vous voulez mieux animer les réunions. Que demandez-vous à votre groupe ?", options: ["« J'étais parfait ? »", "Rien ; les leaders ne demandent pas", "« Qui s'est plaint ? »", "« Quelle est une chose que je pourrais mieux faire à notre prochaine réunion ? »"], answer: 3, why: "Les bons leaders demandent souvent des retours, avec une question claire." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mener un petit projet",
          minutes: 5,
          goal: "Découper un projet en tâches, donner à chacune une personne et une date, et prévoir les problèmes.",
          text: [
            "Un projet est un objectif avec un début et une fin. Pour en mener un, découpez-le en petites tâches, donnez à chaque tâche une personne et une date, et faites des points réguliers.",
            "Demandez à l'IA : « J'organise une collecte de vêtements à notre église dans quatre semaines. Découpe-la en tâches avec une semaine proposée pour chacune. Liste deux problèmes possibles et comment les gérer. »",
            "Partagez la liste des tâches avec vos volontaires. Laissez les gens choisir les tâches qu'ils aiment. Faites un point chaque semaine, remerciez souvent, et fêtez la fin du projet."
          ],
          steps: ["Écrivez l'objectif de votre projet.", "Demandez à l'IA de le découper en tâches avec des dates et de lister les problèmes possibles.", "Donnez une personne à chaque tâche ; laissez les gens choisir.", "Faites un point chaque semaine et fêtez la fin."],
          words: [["Projet", "un travail avec un objectif, un début et une fin."], ["Tâche", "un petit travail qui fait partie d'un projet."]],
          slides: [
            { title: "Un projet a un début et une fin", bullets: ["Découpez-le en tâches", "Chaque tâche : une personne et une date"] },
            { title: "Planifiez avec l'IA", bullets: ["Tâches avec semaines proposées", "Deux problèmes et comment les gérer"] },
            { title: "Menez l'équipe", bullets: ["Laissez les gens choisir leurs tâches", "Faites un point chaque semaine", "Remerciez et fêtez"] }
          ],
          tryIt: "Reprenez votre objectif de la leçon 1. Demandez à un assistant d'IA de le découper en tâches avec des dates et de lister deux problèmes possibles, avec un plan pour chacun.",
          youCanNow: "planifier un petit projet avec des tâches, des personnes, des dates et des plans de secours.",
          quickCheck: [
            { objective: "O5", q: "Que doit avoir chaque tâche d'un projet ?", options: ["Une personne et une date", "Un budget de 100 $", "Une longue description", "Une IA pour la faire"], answer: 0, why: "Une personne et une date montrent clairement qui fait quoi et pour quand." },
            { objective: "O5", q: "Un bénévole n'a pas fait sa tâche à la date prévue. Que faites-vous d'abord ?", options: ["Le retirer du groupe", "Prendre de ses nouvelles avec bienveillance et lui demander de quelle aide il a besoin", "La faire vous-même sans lui dire", "En parler sur Internet"], answer: 1, why: "Les leaders prennent des nouvelles et soutiennent les bénévoles pour qu'ils restent impliqués." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Planifier votre prochaine compétence",
          minutes: 5,
          goal: "Choisir une compétence d'avenir à apprendre et une première étape pour commencer.",
          text: [
            "Le monde du travail change sans cesse. Les compétences utiles à presque tout le monde : utiliser les outils numériques, bien utiliser l'IA en sécurité, communiquer clairement, travailler en équipe et résoudre des problèmes.",
            "Demandez à une IA : « Voici ce que je fais maintenant et ce que j'aime. Propose trois compétences qui m'aideraient à progresser, et une façon gratuite de commencer chacune. » Puis vérifiez vous-même les options gratuites, par exemple à votre bibliothèque publique ou dans un centre pour l'emploi (American Job Center aux États-Unis).",
            "Choisissez une compétence et une première étape à faire cette semaine. Les leaders continuent d'apprendre, et ils entraînent les autres avec eux."
          ],
          steps: ["Dites à l'IA ce que vous faites maintenant et ce que vous aimez.", "Demandez trois compétences pour progresser et une façon gratuite de commencer chacune.", "Vérifiez vous-même les options gratuites.", "Choisissez une compétence et une première étape pour cette semaine."],
          words: [["Compétence d'avenir", "une compétence qui comptera de plus en plus avec l'évolution du travail et de la technologie."]],
          slides: [
            { title: "Des compétences utiles à presque tous", bullets: ["Outils numériques et IA, en sécurité", "Communication claire et travail d'équipe", "Résolution de problèmes"] },
            { title: "Demandez des idées à l'IA", bullets: ["Dites ce que vous faites et aimez", "Trois compétences et une façon gratuite de commencer"] },
            { title: "Faites un premier pas", bullets: ["Options gratuites : bibliothèque, centre pour l'emploi", "Une compétence, une étape cette semaine"] }
          ],
          tryIt: "Tâche finale : planifiez un petit projet communautaire avec un objectif clair, deux problèmes possibles et comment vous les résoudriez, et une intervention d'une minute pour demander l'aide de trois personnes. Répétez l'intervention avec un assistant d'IA, obtenez des retours, et améliorez-la une fois.",
          youCanNow: "mener un petit projet avec confiance et continuer à développer vos compétences.",
          quickCheck: [
            { objective: "O1", q: "Quelle compétence d'avenir aide presque tout le monde ?", options: ["Apprendre des numéros de téléphone par cœur", "Utiliser un fax", "Communiquer clairement", "Écrire en écriture cursive"], answer: 2, why: "Communiquer clairement aide dans presque tous les emplois et tous les rôles dans la communauté." },
            { objective: "O1", q: "L'IA propose un cours en ligne gratuit pour votre prochaine compétence. Que faites-vous ?", options: ["Vous inscrire et payer tout de suite", "L'ignorer", "Donner votre numéro de compte bancaire pour vous inscrire", "Le vérifier vous-même, par exemple avec votre bibliothèque ou votre centre pour l'emploi"], answer: 3, why: "Vous vérifiez vous-même les options gratuites avant de vous inscrire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Diriger les autres et grandir",
        questions: [
          { objective: "O4", q: "Lequel est un retour bienveillant et utile ?", options: ["« C'était mauvais. »", "« Tu as installé vite. La prochaine fois, mets la feuille d'inscription près de la porte. Merci. »", "Ne rien dire", "« Tous les autres ont fait mieux. »"], answer: 1, why: "Il nomme un point fort, une prochaine étape, et remercie." },
          { objective: "O4", q: "Quelqu'un vous donne un retour. La meilleure réaction est de :", options: ["Discuter", "L'ignorer", "Vous fâcher", "Écouter et remercier"], answer: 3, why: "Écouter vous aide à grandir." },
          { objective: "O5", q: "Qu'est-ce qu'une tâche ?", options: ["Un petit travail qui fait partie d'un projet", "Un projet entier", "Une réunion", "Un objectif"], answer: 0, why: "Les projets sont faits de tâches." },
          { objective: "O5", q: "Comment répartir les tâches d'un projet ?", options: ["Tout faire vous-même", "Tout donner à une seule personne", "Laisser les gens choisir les tâches qu'ils aiment, chacune avec une date", "Ne jamais les attribuer"], answer: 2, why: "Le choix et des dates claires gardent les volontaires motivés." },
          { objective: "O1", q: "L'IA propose un cours gratuit pour apprendre une compétence. Avant de vous inscrire, vous :", options: ["Payez d'abord des frais", "Vérifiez vous-même, par exemple avec votre bibliothèque ou un centre pour l'emploi", "Donnez votre numéro de compte", "Lui faites entièrement confiance"], answer: 1, why: "L'IA peut citer des programmes qui ont changé ; vérifiez vous-même." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Leadership, confiance en soi et compétences d'avenir",
    questions: [
      { objective: "O1", q: "Qui peut être un leader ?", options: ["Seulement les managers", "Seulement les gens qui ont un titre", "Toute personne qui organise et aide les autres", "Seulement les élus"], answer: 2, why: "Le leadership, c'est ce que vous faites, pas votre titre." },
      { objective: "O1", q: "« Aider les enfants à lire plus », c'est :", options: ["Un souhait, pas encore un objectif clair", "Un objectif clair", "Une date limite", "Une tâche"], answer: 0, why: "Il n'a ni combien ni pour quand." },
      { objective: "O1", q: "Une date limite est :", options: ["Un objectif", "Une réunion", "Un type d'intervention", "La date à laquelle quelque chose doit être fait"], answer: 3, why: "Les dates limites disent pour quand." },
      { objective: "O1", q: "Une bonne consigne pour préciser votre objectif est :", options: ["« Écris mon objectif sans rien me demander. »", "« Pose-moi d'abord des questions, puis aide-moi à ajouter quoi, combien et pour quand. »", "« Objectif. »", "« Rends-le impossible. »"], answer: 1, why: "Les questions aident l'IA à comprendre votre vraie situation." },
      { objective: "O2", q: "Les quatre étapes pour résoudre un problème sont :", options: ["Le nommer, lister des options, en choisir une, vérifier le résultat", "Paniquer, accuser, abandonner, oublier", "Demander à l'IA, copier, envoyer, fini", "Attendre, attendre, attendre, espérer"], answer: 0, why: "Ces étapes vous gardent calme et clair." },
      { objective: "O2", q: "En demandant des options à l'IA, demandez aussi :", options: ["Votre mot de passe", "Un point fort et un risque pour chacune", "Une seule option", "Une garantie"], answer: 1, why: "Voir le risque aide à bien choisir." },
      { objective: "O2", q: "En décrivant un problème à l'IA, vous laissez de côté :", options: ["Le problème", "L'objectif", "Les détails privés sur les personnes", "La date limite"], answer: 2, why: "Gardez les détails privés sur les autres hors de l'IA." },
      { objective: "O2", q: "Après avoir essayé une solution, vous devez :", options: ["Ne plus jamais y penser", "Accuser l'IA", "Faire toujours la même chose", "Faire le bilan : est-ce que ça a marché, et que changeriez-vous ?"], answer: 3, why: "Faire le bilan aide à s'améliorer." },
      { objective: "O3", q: "Une courte intervention doit avoir :", options: ["Pourquoi c'est important, ce que vous voulez faire, et votre demande", "Seulement des blagues", "Vingt minutes de faits", "Aucune demande"], answer: 0, why: "Cette forme pousse les gens à agir." },
      { objective: "O3", q: "Une intervention d'une minute fait environ :", options: ["10 mots", "120 à 150 mots", "1 000 mots", "5 pages"], answer: 1, why: "On prononce environ 120 à 150 mots en une minute." },
      { objective: "O3", q: "Pour calmer le trac avant de parler :", options: ["Parler très vite", "Regarder le sol", "Respirer lentement et parler un peu plus lentement", "Ne pas répéter"], answer: 2, why: "Une respiration et un rythme lents aident la confiance." },
      { objective: "O3", q: "Comment l'IA peut-elle aider pour votre intervention ?", options: ["Elle la fait à votre place", "Elle la rallonge", "Elle retire votre demande", "Elle propose des façons de la rendre plus claire et plus forte"], answer: 3, why: "L'IA peut commenter votre brouillon." },
      { objective: "O4", q: "Un retour est :", options: ["Une information qui aide quelqu'un à mieux faire", "Une punition", "Un type de nourriture", "Une plainte"], answer: 0, why: "Les retours servent à grandir." },
      { objective: "O4", q: "Une bonne forme de retour est :", options: ["Seulement des critiques", "Une chose qui s'est bien passée, une chose à essayer la prochaine fois, et merci", "Le silence", "Une longue liste d'erreurs"], answer: 1, why: "Un retour équilibré est plus facile à entendre." },
      { objective: "O4", q: "Les bons leaders demandent des retours :", options: ["Jamais", "Une fois par an seulement", "Souvent", "Seulement à l'IA"], answer: 2, why: "Demander souvent aide les leaders à grandir." },
      { objective: "O5", q: "Un projet est :", options: ["Un souhait d'un mot", "Un seul appel téléphonique", "Un sentiment", "Un objectif avec un début et une fin"], answer: 3, why: "Les projets ont un début et une fin clairs." },
      { objective: "O5", q: "Quand l'IA découpe votre projet en tâches, demandez-lui aussi de :", options: ["Lister les problèmes possibles et comment les gérer", "Faire chaque tâche", "Choisir vos volontaires", "L'annuler"], answer: 0, why: "Prévoir les problèmes renforce le projet." },
      { objective: "O5", q: "Qu'est-ce qui garde les volontaires motivés dans un projet ?", options: ["Ne jamais les remercier", "Les laisser choisir leurs tâches, faire des points et les remercier", "Tout faire vous-même", "Changer les dates sans prévenir"], answer: 1, why: "Les gens restent quand ils se sentent appréciés." },
      { objective: "O1", q: "Laquelle est une compétence d'avenir utile à presque tous ?", options: ["Ignorer le changement", "Éviter le travail d'équipe", "Utiliser les outils numériques et l'IA en sécurité", "Ne jamais apprendre"], answer: 2, why: "Les compétences numériques et en IA servent dans tous les métiers." },
      { objective: "O3", q: "Dans la tâche finale, après avoir répété votre intervention avec l'IA, vous :", options: ["Vous arrêtez là", "La rallongez", "L'envoyez à des inconnus", "Obtenez des retours et l'améliorez une fois"], answer: 3, why: "L'améliorer après les retours termine l'apprentissage." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      8,
      10,
      13,
      16,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif clair",
        objective: "O1",
        notYet: "Un souhait sans combien ni pour quand.",
        meets: "Un objectif avec un quoi, un combien et un pour quand, que l'apprenant peut vraiment réaliser.",
        exceeds: "Précisé grâce aux questions de l'IA, avec une première étape."
      },
      {
        name: "Problèmes et solutions",
        objective: "O2",
        notYet: "Moins de deux problèmes, ou aucun plan pour eux.",
        meets: "Deux problèmes possibles, chacun avec une solution choisie.",
        exceeds: "Chaque solution montre un point fort et un risque qui ont été pesés."
      },
      {
        name: "Intervention d'une minute",
        objective: "O3",
        notYet: "Pas d'intervention, ou pas de demande claire.",
        meets: "Environ une minute avec pourquoi c'est important, ce que vous ferez, et un appel à l'action qui demande l'aide de trois personnes.",
        exceeds: "Répétée à voix haute et améliorée une fois grâce aux retours de l'IA."
      },
      {
        name: "Plan du projet",
        objective: "O5",
        notYet: "Pas de tâches ni de dates.",
        meets: "Des tâches avec une personne et une date pour chacune.",
        exceeds: "Inclut un point chaque semaine et la façon de remercier les bénévoles."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui réalisent leur projet communautaire dans les 60 jours (questionnaire de suivi)",
      "Apprenants qui réunissent au moins trois bénévoles pour un projet",
      "Apprenants qui commencent la prochaine compétence choisie, comme un autre cours Koach Learn, dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Du papier et un stylo pour l'objectif, le plan du projet et l'intervention",
      "Un endroit calme pour répéter l'intervention à voix haute",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Commencez par demander aux apprenants comment ils dirigent déjà à la maison, au travail ou à l'église.",
      "Faites présenter l'intervention d'une minute à un partenaire autant qu'à l'IA, et utilisez la forme des retours.",
      "Gardez des projets petits ; aidez les apprenants à réduire un objectif trop grand pour leur temps et leur aide.",
      "Rappelez aux apprenants de garder les détails privés sur les personnes hors des demandes à l'IA.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
