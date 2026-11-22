"use strict";

// Koach Learn course (French translation of leadership/lead-managing-teams.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-managing-teams-fr",
  lang: "fr",
  translationOf: "lead-managing-teams",
  category: "Leadership Development",
  name: "Gérer une équipe",
  skills: "Fixer des attentes claires, Déléguer le travail, Mener des entretiens individuels, Donner un retour situation-comportement-impact, Gérer équitablement une performance insuffisante, Animer les réunions d'équipe et reconnaître le travail",
  outcome: "diriger une petite équipe semaine après semaine : fixer des attentes claires, confier du travail, tenir des entretiens individuels utiles, donner un retour juste et précis, traiter un problème de performance étape par étape, et animer une courte réunion d'équipe qui se termine par des actions claires et de vrais remerciements.",
  about: [
    "Ce cours s'adresse aux nouveaux managers et à ceux qui vont bientôt le devenir : un chef d'équipe dans un magasin, un chef d'équipe dans une ferme, un responsable dans une association, ou toute personne à qui l'on vient de demander de s'occuper du travail des autres.",
    "Vous allez pratiquer les habitudes de tous les jours des bons managers : passer de faire le travail à le diriger, dire clairement ce qu'est un bon résultat, déléguer, rencontrer chaque personne seule à seule, donner un retour qui aide, traiter un problème avec équité, et animer des réunions que personne ne redoute.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites la tâche \"Essayez maintenant\" avec votre propre équipe ou une équipe que vous connaissez. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Un assistant d'IA peut vous aider à préparer des notes et des ordres du jour, mais la compétence vous appartient."
  ],
  finalTask: "Écrivez un plan d'une page pour vos \"30 premiers jours\" avec une équipe que vous dirigez ou que vous connaissez : des attentes claires pour un poste, une tâche que vous allez déléguer (avec le résultat, la date limite et le point de suivi), un ordre du jour d'entretien individuel, un retour écrit selon la méthode situation-comportement-impact, et l'ordre du jour d'une réunion d'équipe de 20 minutes qui se termine par des actions et un remerciement précis.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chefs d'équipe nouveaux ou futurs, des superviseurs et des propriétaires de petites entreprises, y compris des personnes promues depuis le terrain et des bénévoles qui dirigent des équipes dans des associations.",
    startingPoint: "Ils font bien leur propre travail et savent suivre des consignes. Beaucoup n'ont jamais eu de formation au management, et certains dirigent maintenant d'anciens collègues.",
    gap: "Les nouveaux managers continuent souvent de faire le travail eux-mêmes, donnent des consignes floues, évitent les conversations difficiles et animent des réunions sans actions. Cela les épuise et freine l'équipe. Ils ont besoin d'habitudes simples et répétables pour les attentes, la délégation, les entretiens individuels, les retours, les problèmes de performance et les réunions.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Temps : des leçons courtes qui s'insèrent dans une journée de travail",
      "Appareils : un téléphone ou un ordinateur ; le papier suffit pour le plan",
      "Les règles varient selon le lieu de travail : les avertissements officiels et les licenciements suivent la politique de l'organisation et les ressources humaines",
      "Vie privée : les notes d'entretiens individuels et les détails de performance restent privés et respectueux"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Quand vous commencez à diriger des personnes", action: "décrire comment votre travail change et choisir une tâche que vous arrêtez de faire vous-même", standard: "en nommant au moins deux parties du travail principal d'un manager" },
    { id: "O2", condition: "À partir d'une tâche pour un membre de l'équipe", action: "écrire une attente claire et une délégation avec le résultat, la date limite, ce que la personne peut décider et un point de suivi", standard: "pour que la personne puisse redire la tâche avec ses propres mots" },
    { id: "O3", condition: "Pour un membre de l'équipe", action: "préparer un ordre du jour d'entretien individuel qui commence par ce qui le préoccupe", standard: "en couvrant les progrès, les blocages et le développement" },
    { id: "O4", condition: "À partir de quelque chose qu'a fait un membre de l'équipe", action: "écrire un retour selon la méthode situation-comportement-impact et demander comment la personne voit les choses", standard: "en nommant un comportement précis que vous avez vu ou entendu, sans « toujours » ni « jamais »" },
    { id: "O5", condition: "Face à un problème de performance", action: "préparer une discussion privée et un plan d'amélioration écrit", standard: "en vérifiant d'abord les attentes et en incluant ce qu'est un bon résultat, le soutien que vous allez donner et une date de bilan" },
    { id: "O6", condition: "Pour une réunion d'équipe régulière", action: "écrire un court ordre du jour qui se termine par des actions et un remerciement précis", standard: "avec qui fait quoi et pour quand, envoyé le jour même" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : D'exécutant à manager",
      lessons: [
        {
          objectives: ["O1"],
          title: "Passer d'exécutant à manager",
          minutes: 4,
          goal: "Décrire comment votre travail change quand vous commencez à diriger des personnes, et choisir ce que vous arrêtez de faire vous-même.",
          text: [
            "Beaucoup de managers obtiennent le poste parce qu'ils faisaient bien le travail. Mais le travail est maintenant différent : vos résultats sont ceux de l'équipe. Si vous continuez à tout faire vous-même, l'équipe arrête de progresser et vous vous épuisez.",
            "Votre nouveau travail consiste à rendre l'objectif clair, à donner aux gens ce dont ils ont besoin, à enlever ce qui les bloque, à les aider à progresser et à remarquer le bon travail. Vous donnez encore un coup de main quand c'est vraiment utile, mais ce n'est plus votre travail principal.",
            "Il est normal que cela paraisse étrange, surtout si vous dirigez maintenant d'anciens collègues. Soyez aimable, soyez juste avec tout le monde, et dites honnêtement que votre rôle a changé. Demandez à votre propre responsable à quoi ressemble la réussite pour vous."
          ],
          steps: ["Notez les tâches que vous faites encore vous-même chaque semaine.", "Marquez celles qu'une personne de l'équipe pourrait apprendre à faire.", "Choisissez-en une à confier ce mois-ci.", "Demandez à votre responsable : \"Qu'est-ce qui ferait de mon équipe une réussite dans six mois ?\""],
          words: [["Manager", "une personne responsable des résultats d'un groupe de personnes, et pas seulement de son propre travail."], ["Collaborateur direct", "une personne dont vous êtes le manager."]],
          slides: [
            { title: "Votre travail a changé", bullets: ["Avant : vos propres résultats", "Maintenant : les résultats de l'équipe", "Tout faire vous-même empêche l'équipe de progresser"] },
            { title: "Ce que fait un manager", bullets: ["Il rend l'objectif clair", "Il donne aux gens ce dont ils ont besoin", "Il enlève les blocages", "Il aide les gens à progresser et remarque le bon travail"] },
            { title: "Diriger d'anciens collègues", bullets: ["Soyez aimable et juste avec tout le monde", "Dites honnêtement que votre rôle a changé", "Demandez à votre responsable à quoi ressemble la réussite"] }
          ],
          tryIt: "Listez cinq tâches que vous faites chaque semaine. Entourez-en une qu'une personne de votre équipe pourrait apprendre. Écrivez une phrase pour dire qui pourrait la prendre et pourquoi cela l'aiderait.",
          youCanNow: "expliquer en quoi le travail d'un manager diffère de celui d'un exécutant, et choisir une tâche que vous arrêtez de faire vous-même.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui fait partie du nouveau travail d'un manager ?", options: ["Faire soi-même chaque tâche difficile", "Rendre l'objectif clair et remarquer le bon travail", "Éviter les anciens collègues", "Vérifier chaque e-mail envoyé par l'équipe"], answer: 1, why: "Le travail du manager est de rendre l'objectif clair, d'enlever les blocages, d'aider les gens à progresser et de remarquer le bon travail." },
            { objective: "O1", q: "Vous débutez comme manager et vous ne savez pas à quoi ressemble la réussite pour vous. Que faites-vous ?", options: ["Deviner et espérer que tout ira bien", "Copier exactement le manager précédent", "Demander à l'équipe de décider", "Demander à votre propre responsable à quoi ressemble la réussite"], answer: 3, why: "La leçon dit de demander à votre propre responsable à quoi ressemble la réussite." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fixer des attentes claires et déléguer",
          minutes: 6,
          goal: "Écrire une attente claire et confier une tâche avec un résultat, une date limite et un point de suivi.",
          text: [
            "La plupart des problèmes d'équipe commencent par des attentes floues. On ne peut pas atteindre une cible qu'on ne voit pas. Une attente claire dit quel est le résultat, quel niveau de qualité il faut, et pour quand. \"Garder le magasin propre\" est flou. \"Remplir et aligner les rayons de devant avant 9 h chaque jour\" est clair.",
            "Déléguer, c'est confier à quelqu'un une tâche et le pouvoir de la faire, pas seulement les corvées. Dites quel résultat vous voulez et pourquoi il compte, la date limite, ce que la personne peut décider seule, et quand vous ferez le point. Puis laissez-la faire à sa façon.",
            "Adaptez la délégation à la personne. Une personne nouvelle a besoin de plus d'étapes et de plus de points de suivi. Une personne expérimentée n'a peut-être besoin que de l'objectif. Demandez-lui de répéter ce qu'elle a compris, pour être sûrs que vous êtes d'accord."
          ],
          steps: ["Nommez le résultat voulu et pourquoi il compte.", "Dites le niveau de qualité attendu et la date limite.", "Dites ce que la personne peut décider seule et quand elle doit vous demander.", "Fixez ensemble un moment pour faire le point.", "Demandez-lui de redire la tâche avec ses propres mots."],
          words: [["Attente", "une déclaration claire du résultat dont une personne est responsable et de la façon dont il sera jugé."], ["Déléguer", "confier à quelqu'un une tâche et le pouvoir de la faire."], ["Point de suivi", "une courte discussion prévue pour voir comment avance une tâche."]],
          slides: [
            { title: "Des attentes claires", bullets: ["Quel résultat", "Quel niveau de qualité", "Pour quand"] },
            { title: "Flou ou clair", bullets: ["Flou : \"Garder le magasin propre\"", "Clair : \"Remplir et aligner les rayons de devant avant 9 h chaque jour\""] },
            { title: "Cinq éléments d'une bonne délégation", bullets: ["Le résultat et pourquoi il compte", "La qualité et la date limite", "Ce que la personne décide seule", "Le point de suivi, puis elle redit la tâche"] },
            { title: "Adaptez la délégation à la personne", bullets: ["Nouvelle : plus d'étapes, plus de points de suivi", "Expérimentée : l'objectif et de la liberté pour travailler"] }
          ],
          tryIt: "Prenez la tâche que vous avez entourée dans la leçon 1. Écrivez la délégation avec les cinq éléments. Lisez-la à un ami ou dites-la à voix haute, puis demandez-vous : quelqu'un pourrait-il faire cela sans me poser dix questions ?",
          youCanNow: "écrire une attente claire et déléguer une tâche avec un résultat, une date limite, des limites de décision et un point de suivi.",
          quickCheck: [
            { objective: "O2", q: "Quelles sont les trois choses que dit une attente claire ?", options: ["Le résultat, le niveau de qualité attendu, et pour quand", "Qui est responsable, le nom de l'équipe et le lieu", "Le salaire, les horaires et les pauses", "Les règles, les sanctions et les formulaires"], answer: 0, why: "Une attente claire nomme le résultat, la qualité et la date limite." },
            { objective: "O2", q: "Vous confiez une tâche à un membre expérimenté de l'équipe. Que faites-vous ?", options: ["Donner chaque étape et faire le point toutes les heures", "Ne donner aucune date limite", "Donner l'objectif et la date limite, puis le laisser faire à sa façon", "En faire d'abord la moitié vous-même"], answer: 2, why: "Adaptez la passation à la personne ; une personne expérimentée n'a parfois besoin que de l'objectif." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mener des entretiens individuels utiles",
          minutes: 5,
          goal: "Préparer et tenir un entretien individuel régulier qui appartient au membre de l'équipe.",
          text: [
            "Un entretien individuel est une courte réunion privée et régulière entre vous et une personne de votre équipe, souvent de 20 à 30 minutes chaque semaine ou toutes les deux semaines. C'est le meilleur moment pour repérer tôt les problèmes, créer la confiance et aider les gens à progresser.",
            "Faites-en sa réunion. Commencez par ce qui la préoccupe. Puis parlez de l'avancement de son travail, de ce qui la bloque et de sa progression. Les simples nouvelles que vous pourriez lire dans un message doivent rester dans un message.",
            "Protégez ce temps : n'annulez pas souvent, rangez votre téléphone, et écoutez plus que vous ne parlez. Notez chaque promesse que vous faites et tenez-la. Gardez vos notes privées et respectueuses."
          ],
          steps: ["Fixez un horaire régulier et respectez-le.", "Commencez par : \"Qu'est-ce qui vous préoccupe en ce moment ?\"", "Demandez où en est le travail et ce qui bloque.", "Parlez de progression : \"Dans quoi voulez-vous vous améliorer ?\"", "Terminez en vous mettant d'accord sur les prochaines étapes, et notez-les."],
          words: [["Entretien individuel", "une réunion privée et régulière entre un manager et un membre de l'équipe."], ["Blocage", "tout ce qui empêche une personne de faire son travail."]],
          slides: [
            { title: "Ce qu'est un entretien individuel", bullets: ["Court, privé et régulier", "Souvent 20 à 30 minutes chaque semaine ou toutes les deux semaines", "Il repère tôt les problèmes et crée la confiance"] },
            { title: "Faites-en sa réunion", bullets: ["Début : \"Qu'est-ce qui vous préoccupe ?\"", "Avancement et blocages", "Progression", "Prochaines étapes, notées par écrit"] },
            { title: "Protégez ce temps", bullets: ["N'annulez pas souvent", "Téléphone rangé, écoutez plus que vous ne parlez", "Tenez chaque promesse que vous faites"] }
          ],
          tryIt: "Écrivez un ordre du jour d'entretien individuel pour un membre de l'équipe, réel ou imaginaire, avec quatre questions : une pour commencer, une sur l'avancement, une sur les blocages et une sur la progression.",
          youCanNow: "préparer et tenir un entretien individuel qui place d'abord les besoins du membre de l'équipe et se termine par des prochaines étapes claires.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un entretien individuel ?", options: ["Un bilan annuel", "Une courte réunion privée et régulière avec un membre de l'équipe", "Une réunion de toute l'équipe", "Une procédure disciplinaire"], answer: 1, why: "Les entretiens individuels durent souvent 20 à 30 minutes, chaque semaine ou toutes les deux semaines." },
            { objective: "O3", q: "Vos entretiens individuels se transforment toujours en points d'avancement. Que changez-vous ?", options: ["Les annuler", "Les allonger", "Les faire en groupe", "Passer l'avancement dans un message et commencer par ce qui préoccupe la personne"], answer: 3, why: "C'est sa réunion à elle ; un avancement que vous pourriez lire a sa place dans un message." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : D'exécutant à manager",
        questions: [
          { objective: "O1", q: "Quel est le plus grand changement quand on passe d'exécutant à manager ?", options: ["Vous travaillez moins d'heures", "Vos résultats sont maintenant ceux de l'équipe", "Vous n'avez plus besoin d'écouter", "Vous faites vous-même toutes les tâches difficiles"], answer: 1, why: "Un manager est jugé sur ce que toute l'équipe accomplit." },
          { objective: "O2", q: "Quelle attente est la plus claire ?", options: ["\"Faites de votre mieux\"", "\"Gardez les choses en ordre\"", "\"Soyez plus à jour\"", "\"Envoyez la commande de la semaine au fournisseur avant jeudi midi\""], answer: 3, why: "Elle nomme le résultat et la date limite." },
          { objective: "O2", q: "Vous confiez un rapport à un nouveau membre de l'équipe. Que devez-vous ajouter ?", options: ["Plus d'étapes et un point de suivi rapide", "Rien ; laissez-le deviner", "Un avertissement que vous allez le refaire", "Seulement la date limite"], answer: 0, why: "Une personne nouvelle a besoin de plus de conseils et d'un point de suivi plus tôt." },
          { objective: "O3", q: "À qui appartient surtout un entretien individuel ?", options: ["Au chef du manager", "À toute l'équipe", "Au membre de l'équipe", "Aux ressources humaines"], answer: 2, why: "Commencez par ce qui le préoccupe ; c'est son temps." },
          { objective: "O2", q: "Après avoir délégué une tâche, une bonne façon de vérifier que vous êtes d'accord est de :", options: ["La renvoyer en lettres majuscules", "Demander à la personne de redire la tâche avec ses propres mots", "Vérifier son travail toutes les heures", "La faire vous-même au cas où"], answer: 1, why: "Redire la tâche montre si vous avez compris la même chose." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Le retour, la performance et l'équipe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Donner un retour avec situation-comportement-impact",
          minutes: 5,
          goal: "Donner un retour précis, positif ou correctif, avec la méthode situation-comportement-impact.",
          text: [
            "Un retour fonctionne quand il est précis, donné rapidement et porte sur ce que la personne a fait, pas sur qui elle est. Une façon simple de le dire est la méthode situation-comportement-impact, souvent appelée SCI.",
            "Situation : quand et où. Comportement : ce que la personne a fait, que vous avez vu ou entendu. Impact : ce qui s'est passé à cause de cela. Par exemple : \"Pendant l'appel client de ce matin (situation), vous avez coupé la parole à la cliente deux fois (comportement). Elle s'est fâchée et a demandé un responsable (impact).\" Puis demandez : \"Comment l'avez-vous vécu ?\" et décidez ensemble d'une prochaine étape.",
            "Utilisez aussi la méthode SCI pour féliciter : \"À la collecte alimentaire de samedi, vous avez installé la table d'accueil en avance. Nous avons enregistré 40 bénévoles sans file d'attente.\" Donnez votre retour vite, en privé pour les corrections, et évitez les mots comme \"toujours\" et \"jamais\"."
          ],
          steps: ["Situation : dites quand et où.", "Comportement : décrivez ce que la personne a fait, comme le verrait une caméra.", "Impact : dites ce qui s'est passé à cause de cela.", "Demandez comment elle voit les choses et écoutez.", "Mettez-vous d'accord sur une prochaine étape."],
          words: [["Retour", "une information sur l'effet des actions d'une personne sur le travail, donnée pour qu'elle continue ou qu'elle change."], ["SCI", "situation-comportement-impact : une façon de donner un retour qui dit quand, ce que la personne a fait et ce qui s'est passé."]],
          slides: [
            { title: "Un bon retour est", bullets: ["Précis", "Donné peu après les faits", "Sur ce que la personne a fait, pas sur qui elle est"] },
            { title: "Situation-comportement-impact", bullets: ["Situation : quand et où", "Comportement : ce que la personne a fait", "Impact : ce qui s'est passé à cause de cela"] },
            { title: "Puis parlez-en ensemble", bullets: ["Demandez : \"Comment l'avez-vous vécu ?\"", "Écoutez", "Mettez-vous d'accord sur une prochaine étape"] },
            { title: "Utilisez-la aussi pour féliciter", bullets: ["Un merci précis touche plus qu'un \"bon travail\"", "Corrigez en privé", "Évitez \"toujours\" et \"jamais\""] }
          ],
          tryIt: "Écrivez deux phrases SCI sur de vrais moments que vous avez vus : une pour féliciter un bon travail et une pour corriger un problème. Vérifiez que la partie comportement décrit seulement ce que vous avez vu ou entendu.",
          youCanNow: "donner un retour précis et juste avec la situation, le comportement et l'impact, et en faire une prochaine étape.",
          quickCheck: [
            { objective: "O4", q: "Dans un retour SCI, qu'est-ce que l'« impact » ?", options: ["Ce qui s'est passé à cause de ce que la personne a fait", "Quand et où cela s'est passé", "Ce que vous pensez de la personne", "La sanction pour la prochaine fois"], answer: 0, why: "L'impact est le résultat du comportement." },
            { objective: "O4", q: "Un membre de l'équipe est resté tard pour régler la commande d'une cliente. Que dites-vous ?", options: ["« Vous êtes toujours génial. »", "« Merci, je suppose. »", "« Hier soir, vous avez réglé la commande de Mme Lee : elle l'a reçue à temps et nous a remerciés. »", "Rien ; c'est son travail"], answer: 2, why: "La méthode SCI fonctionne aussi pour féliciter : situation, comportement et impact." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gérer équitablement une performance insuffisante",
          minutes: 6,
          goal: "Traiter un problème de performance par des étapes claires, justes et écrites.",
          text: [
            "Quand une personne ne répond pas aux attentes, agissez tôt. Attendre aggrave souvent la situation et c'est injuste pour le reste de l'équipe. Vérifiez d'abord votre part : l'attente était-elle claire ? La personne avait-elle la formation, les outils et le temps ?",
            "Parlez-lui en privé. Utilisez la méthode SCI pour nommer l'écart, puis demandez-lui ce qui la gêne. Parfois, il y a une cause que vous ne connaissiez pas, comme un problème de santé ou de famille, un outil en panne ou des consignes confuses. Établissez un plan ensemble : ce qu'est un bon résultat, le soutien que vous allez donner, et une date pour faire le bilan.",
            "Notez ce que vous avez convenu, et faites le suivi à la date prévue. Appliquez la même règle à tout le monde. Si les choses ne s'améliorent pas, ou avant tout avertissement officiel ou licenciement, suivez la politique de votre organisation et parlez aux ressources humaines ou à votre propre responsable. Les règles changent selon les pays, alors demandez conseil en cas de doute."
          ],
          steps: ["Vérifiez : l'attente était-elle claire, et la personne avait-elle ce qu'il lui fallait ?", "Rencontrez-la en privé et nommez l'écart avec la méthode SCI.", "Demandez ce qui la gêne, et écoutez.", "Convenez de ce qu'est un bon résultat, de votre soutien et d'une date de bilan.", "Notez-le par écrit et faites le suivi à la date prévue.", "Avant toute mesure officielle, suivez votre politique et parlez aux RH ou à votre responsable."],
          words: [["Performance insuffisante", "quand le travail d'une personne ne répond pas aux attentes qui ont été fixées."], ["Plan d'amélioration", "un accord écrit sur ce qui doit changer, le soutien donné et une date de bilan."], ["RH", "ressources humaines : les personnes qui s'occupent du recrutement, des règles internes et des questions liées aux employés."]],
          slides: [
            { title: "Agissez tôt", bullets: ["Attendre aggrave la situation", "C'est injuste pour le reste de l'équipe"] },
            { title: "Vérifiez d'abord votre part", bullets: ["L'attente était-elle claire ?", "La personne avait-elle la formation, les outils et le temps ?"] },
            { title: "La conversation", bullets: ["En privé, avec la méthode SCI", "Demandez ce qui la gêne", "Convenez d'un bon résultat, d'un soutien et d'une date"] },
            { title: "Restez juste", bullets: ["Notez ce que vous avez convenu", "Faites le suivi à la date prévue", "La même règle pour tout le monde", "Suivez la politique ; parlez aux RH avant toute mesure officielle"] }
          ],
          tryIt: "Pensez à un problème de performance réel ou inventé. Écrivez le plan d'amélioration en quatre lignes : l'écart (sous forme SCI), ce qu'est un bon résultat, le soutien que vous allez donner, et la date de bilan.",
          youCanNow: "traiter un problème de performance tôt et avec équité, avec une discussion privée, un plan écrit et un suivi.",
          quickCheck: [
            { objective: "O5", q: "Que devez-vous vérifier avant de soulever un problème de performance ?", options: ["Si l'attente était claire et si la personne avait ce qu'il lui fallait", "Si d'autres personnes ne l'aiment pas non plus", "Si vous pouvez la licencier aujourd'hui", "Si les RH sont occupées"], answer: 0, why: "Vérifiez-vous d'abord vous-même : attentes claires, formation, outils et temps." },
            { objective: "O5", q: "Vous avez convenu d'un plan d'amélioration avec une date de bilan. Que faites-vous à cette date ?", options: ["L'oublier si tout semble aller bien", "Faire le point et noter par écrit ce qui s'est passé", "Donner un avertissement officiel sans discuter", "Commencer un nouveau plan avec une autre personne"], answer: 1, why: "Notez par écrit ce que vous avez convenu et faites le point à cette date." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les réunions d'équipe et la reconnaissance",
          minutes: 5,
          goal: "Animer une courte réunion d'équipe qui se termine par des actions claires et des remerciements précis.",
          text: [
            "Une bonne réunion d'équipe a un but, un ordre du jour envoyé à l'avance, une heure de début et de fin, et une liste d'actions à la fin. Si vous avez seulement des nouvelles à partager, envoyez plutôt un message.",
            "Respectez l'horaire. Faites un tour de table pour que les personnes plus discrètes parlent, gardez les sujets secondaires pour plus tard, et terminez en relisant chaque action : qui fera quoi, et pour quand. Envoyez les actions le jour même. Un assistant d'IA peut vous aider à transformer vos notes en une liste propre, mais vérifiez-la.",
            "La reconnaissance motive les gens. Remerciez souvent, rapidement et de façon précise, et dites en quoi leur travail a aidé. Certaines personnes aiment être félicitées en public ; d'autres préfèrent un mot ou une note en privé. Demandez-leur ce qu'elles préfèrent."
          ],
          steps: ["Écrivez le but et un court ordre du jour ; envoyez-le à l'avance.", "Commencez et terminez à l'heure.", "Invitez chaque personne à parler.", "Terminez en relisant les actions : qui, quoi, pour quand.", "Envoyez les actions le jour même.", "Faites un remerciement précis."],
          words: [["Ordre du jour", "la liste des sujets d'une réunion, dans l'ordre."], ["Action à mener", "une tâche décidée en réunion, avec une personne responsable et une date limite."], ["Reconnaissance", "montrer aux gens que vous avez remarqué leur travail et que vous l'appréciez."]],
          slides: [
            { title: "Avant la réunion", bullets: ["Un but clair", "Un court ordre du jour envoyé à l'avance", "Seulement des nouvelles ? Envoyez plutôt un message"] },
            { title: "Pendant la réunion", bullets: ["Commencez et terminez à l'heure", "Invitez tout le monde à parler", "Gardez les sujets secondaires pour plus tard"] },
            { title: "Terminez par des actions", bullets: ["Qui fera quoi, et pour quand", "Envoyez-les le jour même"] },
            { title: "La reconnaissance", bullets: ["Souvent, rapidement et de façon précise", "Dites en quoi leur travail a aidé", "Demandez s'ils préfèrent un merci en public ou en privé"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'une page pour vos \"30 premiers jours\". Ajoutez des attentes pour un poste, une tâche à déléguer, un ordre du jour d'entretien individuel, un retour SCI, et l'ordre du jour d'une réunion de 20 minutes qui se termine par des actions et un remerciement précis.",
          youCanNow: "animer une réunion d'équipe courte et ciblée, la terminer par des actions claires, et reconnaître le bon travail d'une façon que les gens apprécient.",
          quickCheck: [
            { objective: "O6", q: "Qu'a une bonne réunion d'équipe ?", options: ["Aucun ordre du jour, pour rester souple", "Un objectif, un ordre du jour envoyé à l'avance, une heure de début et de fin, et des actions", "Seul le manager qui parle", "Aucune heure de fin fixée"], answer: 1, why: "Ces éléments gardent une réunion courte et utile." },
            { objective: "O6", q: "Un membre discret de l'équipe préfère les remerciements en privé. Que faites-vous ?", options: ["Le féliciter quand même à voix haute en réunion", "Ne pas le remercier", "Le remercier dans la discussion de l'équipe", "Lui adresser un remerciement précis en privé, de vive voix ou par un mot"], answer: 3, why: "Demandez aux gens quelle reconnaissance ils aiment et respectez-la." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Le retour, la performance et l'équipe",
        questions: [
          { objective: "O4", q: "Dans la méthode situation-comportement-impact, qu'est-ce que la partie \"comportement\" ?", options: ["Votre opinion sur son attitude", "Ce que d'autres personnes ont dit d'elle", "Ce qu'elle a fait, que vous avez vu ou entendu", "Son titre de poste"], answer: 2, why: "Le comportement, c'est ce que la personne a vraiment fait, décrit simplement." },
          { objective: "O4", q: "Quelle phrase est un retour SCI ?", options: ["\"Vous êtes paresseux.\"", "\"À la réunion de mardi, vous avez terminé le budget en avance, alors nous avons pu l'approuver à temps.\"", "\"Vous ratez toujours tout.\"", "\"Bon travail, je suppose.\""], answer: 1, why: "Elle nomme la situation, le comportement et l'impact." },
          { objective: "O5", q: "Avant de soulever un problème de performance, que devez-vous vérifier d'abord ?", options: ["Si l'attente était claire et si la personne avait ce qu'il lui fallait", "Si les autres ne l'aiment pas", "Si vous pouvez la licencier aujourd'hui", "Ses réseaux sociaux"], answer: 0, why: "Beaucoup de problèmes viennent d'attentes floues ou d'outils qui manquent." },
          { objective: "O5", q: "Le travail d'un membre de l'équipe baisse sans cesse. Quand devez-vous agir ?", options: ["À l'évaluation annuelle", "Jamais ; ça peut s'arranger tout seul", "Seulement quand les autres se plaignent", "Tôt, lors d'une discussion privée"], answer: 3, why: "Agir tôt est plus bienveillant et plus juste qu'attendre." },
          { objective: "O6", q: "Par quoi chaque réunion d'équipe doit-elle se terminer ?", options: ["Un long discours", "Des actions : qui fera quoi, et pour quand", "Une nouvelle réunion", "Rien par écrit"], answer: 1, why: "Des actions claires transforment la discussion en travail." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gérer une équipe",
    questions: [
      { objective: "O1", q: "Une nouvelle manager continue de faire elle-même toutes les tâches difficiles. Quel est le risque principal ?", options: ["L'équipe apprend plus vite", "Les clients sont plus contents", "L'équipe arrête de progresser et elle s'épuise", "Rien ne change"], answer: 2, why: "Tout faire soi-même bloque la progression de l'équipe." },
      { objective: "O1", q: "Qu'est-ce qui fait partie du travail principal d'un manager ?", options: ["Enlever ce qui bloque l'équipe", "Faire chaque tâche seul", "Éviter les discussions difficiles", "Garder les objectifs secrets"], answer: 0, why: "Les managers enlèvent les blocages pour que l'équipe puisse travailler." },
      { objective: "O1", q: "Vous dirigez maintenant d'anciens collègues. Une bonne approche est de :", options: ["Faire comme si rien n'avait changé", "Aider seulement vos amis", "Éviter de leur parler", "Être aimable, juste avec tout le monde et honnête sur le fait que votre rôle a changé"], answer: 3, why: "L'équité et l'honnêteté créent la confiance dans un nouveau rôle." },
      { objective: "O2", q: "Une attente claire comprend :", options: ["Seulement une impression", "Le résultat, le niveau de qualité attendu, et pour quand", "Une menace", "Un long historique"], answer: 1, why: "Le résultat, la qualité et la date limite la rendent claire." },
      { objective: "O2", q: "Déléguer, c'est :", options: ["Donner seulement les corvées que vous n'aimez pas", "Surveiller chaque étape", "Confier à quelqu'un une tâche et le pouvoir de la faire", "La faire vous-même plus tard"], answer: 2, why: "Une vraie délégation donne le pouvoir d'agir." },
      { objective: "O2", q: "Quand vous déléguez, vous devez dire ce que la personne peut :", options: ["Décider seule", "Ne jamais demander", "Vous cacher", "Sauter"], answer: 0, why: "Les limites de décision lui permettent d'agir sans vous attendre." },
      { objective: "O3", q: "À quelle fréquence tient-on souvent les entretiens individuels ?", options: ["Une fois par an", "Seulement quand il y a un problème", "Jamais", "Chaque semaine ou toutes les deux semaines"], answer: 3, why: "Des rencontres régulières repèrent tôt les problèmes." },
      { objective: "O3", q: "Une bonne façon de commencer un entretien individuel est :", options: ["\"Voici ce que vous avez mal fait.\"", "\"Qu'est-ce qui vous préoccupe en ce moment ?\"", "\"Faisons vite.\"", "Regarder votre téléphone"], answer: 1, why: "Cela en fait sa réunion." },
      { objective: "O3", q: "Pendant un entretien individuel, vous avez promis de faire réparer un scanner en panne. Que faites-vous ?", options: ["Vous le notez et vous le faites", "Vous l'oubliez", "Vous lui demandez de le réparer", "Vous attendez qu'il le redemande"], answer: 0, why: "Tenir ses promesses crée la confiance." },
      { objective: "O4", q: "Que veut dire SCI ?", options: ["Signaler, critiquer, insister", "Savoir-faire, coûts, idées", "Situation, comportement, impact", "Surveiller, couper, informer"], answer: 2, why: "Situation, comportement et impact." },
      { objective: "O4", q: "Où faut-il en général donner un retour correctif ?", options: ["Devant toute l'équipe", "Sur les réseaux sociaux", "Dans un message de groupe", "En privé"], answer: 3, why: "Corriger en privé protège la dignité." },
      { objective: "O4", q: "Après avoir donné un retour SCI, l'étape suivante est de :", options: ["Partir", "Demander comment la personne voit les choses et convenir d'une prochaine étape", "Le répéter plus fort", "Le dire à l'équipe"], answer: 1, why: "Un échange dans les deux sens mène au changement." },
      { objective: "O4", q: "Quel mot faut-il éviter dans un retour ?", options: ["\"Aujourd'hui\"", "\"Merci\"", "\"Toujours\"", "\"Parce que\""], answer: 2, why: "\"Toujours\" et \"jamais\" exagèrent et mettent les gens sur la défensive." },
      { objective: "O5", q: "Le travail d'un employé baisse après des années de bon travail. Que devez-vous demander lors d'une discussion privée ?", options: ["\"Qu'est-ce qui vous gêne en ce moment ?\"", "\"Pourquoi êtes-vous si mauvais ?\"", "\"Voulez-vous démissionner ?\"", "Rien ; donnez-lui simplement un avertissement écrit"], answer: 0, why: "Il peut y avoir une cause que vous ne connaissez pas." },
      { objective: "O5", q: "Un plan d'amélioration doit comprendre :", options: ["Seulement un avertissement", "Ce qu'est un bon résultat, le soutien que vous allez donner et une date de bilan", "Aucune date", "La liste de ses défauts"], answer: 1, why: "Des objectifs clairs, un soutien et une date le rendent juste." },
      { objective: "O5", q: "Avant un avertissement officiel ou un licenciement, vous devez :", options: ["L'annoncer dans le groupe de discussion de l'équipe", "Agir seul tout de suite", "Faire voter l'équipe", "Suivre votre politique et parler aux RH ou à votre responsable"], answer: 3, why: "Les règles et les lois varient ; demandez conseil d'abord." },
      { objective: "O6", q: "La réunion sert seulement à partager des nouvelles. Qu'est-ce qui est mieux ?", options: ["Une réunion de deux heures", "Envoyer plutôt un message", "Annuler toutes les réunions pour toujours", "Lire les nouvelles à voix haute"], answer: 1, why: "Gardez les réunions pour les discussions et les décisions." },
      { objective: "O6", q: "Deux personnes ne parlent jamais en réunion. Qu'est-ce qui aide ?", options: ["Faire un tour de table pour que chacun ait son tour", "Les ignorer", "Les interpeller sèchement", "Faire des réunions plus longues"], answer: 0, why: "Le tour de table invite les personnes discrètes à parler." },
      { objective: "O6", q: "Quand faut-il envoyer les actions décidées en réunion ?", options: ["Le mois prochain", "Jamais", "Seulement si quelqu'un le demande", "Le jour même"], answer: 3, why: "Un suivi rapide garde les actions sur la bonne voie." },
      { objective: "O6", q: "Quelle est la meilleure reconnaissance ?", options: ["\"Bon travail.\"", "Rien, puisque c'est son travail", "\"Votre appel au fournisseur a fait arriver notre commande un jour plus tôt, alors nous n'avons pas manqué de stock.\"", "Un e-mail de groupe sans détails"], answer: 2, why: "Un merci précis qui nomme l'impact compte le plus." }
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
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Attentes claires",
        objective: "O2",
        notYet: "L'attente est floue, comme « garder les choses en ordre ».",
        meets: "Dit le résultat, le niveau de qualité attendu, et pour quand.",
        exceeds: "Dit aussi pourquoi le résultat compte."
      },
      {
        name: "Tâche déléguée",
        objective: "O2",
        notYet: "La tâche n'a ni date limite ni point de suivi.",
        meets: "Indique le résultat, la date limite, ce que la personne peut décider et un point de suivi.",
        exceeds: "Adapte la passation à l'expérience de la personne."
      },
      {
        name: "Ordre du jour de l'entretien individuel",
        objective: "O3",
        notYet: "L'ordre du jour ne contient que des points d'avancement.",
        meets: "Commence par ce qui préoccupe la personne et couvre les progrès, les blocages et le développement.",
        exceeds: "Prévoit un moyen de suivre les promesses que vous faites."
      },
      {
        name: "Retour SCI",
        objective: "O4",
        notYet: "Le retour porte sur la personne, ou utilise « toujours » ou « jamais ».",
        meets: "Nomme la situation, un comportement précis et son impact.",
        exceeds: "Se termine par une question qui invite son point de vue et par une prochaine étape."
      },
      {
        name: "Réunion d'équipe et remerciement",
        objective: "O6",
        notYet: "Aucune action à la fin, ou le remerciement est général.",
        meets: "Un ordre du jour de 20 minutes qui se termine par qui fait quoi et pour quand, et un remerciement précis.",
        exceeds: "Donne un tour de parole aux personnes discrètes et prévoit d'envoyer les actions le jour même."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui tiennent des entretiens individuels réguliers dans les 30 jours (enquête de suivi)",
      "Les membres d'équipe qui disent recevoir des attentes plus claires et des retours plus précis",
      "Les apprenants qui suivent un autre cours Koach Learn sur le leadership"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour regarder les leçons",
      "Du papier ou un document pour le plan d'une page des « 30 premiers jours »",
      "Une équipe que vous dirigez ou que vous connaissez bien, comme exemple",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "En groupe, passez le test de départ ensemble, puis faites pratiquer à voix haute, en binômes, des retours SCI sur des situations inventées.",
      "Faites un jeu de rôle d'entretien individuel où le « membre de l'équipe » commence par ce qui le préoccupe.",
      "Rappelez aux apprenants que les avertissements officiels et les licenciements suivent la politique de leur propre organisation et les ressources humaines.",
      "Demandez aux apprenants de ne pas partager de vrais noms ni de détails privés sur des membres de leur équipe pendant le travail de groupe.",
      "Notez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
