"use strict";

// Koach Learn course (French translation of shared/time-management-goals.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "time-management-goals-fr",
  lang: "fr",
  translationOf: "time-management-goals",
  category: "Athletes",
  name: "Gestion du temps et fixation d'objectifs",
  skills: "Écrire des objectifs SMART, Découper un objectif en étapes hebdomadaires, Planifier une semaine, Choisir ses priorités, Vaincre la procrastination, Suivre ses progrès",
  outcome: "transformer quelque chose que vous voulez en objectif SMART, le découper en étapes hebdomadaires, organiser votre semaine autour de vos priorités principales, commencer même quand vous n'en avez pas envie, et suivre vos progrès avec un court bilan chaque semaine.",
  about: [
    "Tout le monde a les mêmes 24 heures. La différence, c'est à quel point nous savons clairement ce que nous voulons et comment nous utilisons le temps que nous avons. Bonne nouvelle : planifier est une compétence, et tout le monde peut l'apprendre.",
    "Ce cours s'adresse aux sportifs qui concilient entraînement et études, aux travailleurs et aux chercheurs d'emploi, aux chefs d'entreprise, aux anciens militaires qui commencent quelque chose de nouveau, aux jeunes, et à toute personne qui reconstruit sa routine après un grand changement, comme une sortie de prison. Les exemples sont tirés de la vie de tous les jours : chercher un emploi, un objectif sportif, une petite entreprise, épargner de l'argent, terminer une formation.",
    "Vous allez écrire un vrai objectif, le découper en étapes, planifier une semaine, choisir ce qui compte le plus, vaincre la procrastination et suivre vos progrès. Vous pouvez utiliser du papier, un agenda gratuit sur votre téléphone ou une application ; un assistant d'IA peut vous aider à découper un objectif en étapes, mais c'est vous qui faites le plan. Chaque leçon dure environ cinq minutes. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez un objectif SMART pour les quatre prochaines semaines. Découpez-le en étapes hebdomadaires, planifiez la semaine prochaine avec des blocs de temps pour vos trois priorités principales, notez ce que vous faites vraiment pendant sept jours, et terminez par un bilan de cinq minutes qui dit ce qui a marché et ce que vous allez changer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs qui concilient entraînement et études, des salariés et des demandeurs d'emploi, des propriétaires d'entreprise, des anciens combattants qui commencent quelque chose de nouveau, des jeunes et toute personne qui reconstruit une routine après un grand changement, comme une sortie de prison.",
    startingPoint: "Ils ont des choses qu'ils veulent faire et une certaine routine quotidienne, mais leurs objectifs sont souvent des souhaits flous, leurs semaines ne sont pas planifiées, les tâches urgentes passent devant les importantes, et ils repoussent souvent les choses.",
    gap: "Sans objectifs clairs ni plan pour la semaine, on reste occupé sans avancer dans une recherche d'emploi, une formation, une entreprise ou une épargne. Les apprenants ont besoin d'un système simple pour fixer un objectif, planifier la semaine, commencer les tâches difficiles et faire le point sur leurs progrès, afin d'atteindre les objectifs qui comptent pour eux.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Outils : du papier, un agenda gratuit sur le téléphone ou une application ; l'IA peut proposer des étapes mais c'est l'apprenant qui fait le plan",
      "Les apprenants ont des engagements fixes comme des horaires de travail, des entraînements, l'école, des rendez-vous ou des rendez-vous de suivi judiciaire",
      "Temps : des leçons d'environ cinq minutes, plus sept jours de suivi"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un souhait flou", action: "le réécrire en objectif SMART pour les quatre semaines à venir", standard: "en vérifiant chaque lettre de SMART" },
    { id: "O2", condition: "À partir de votre objectif SMART", action: "le découper en une étape par semaine et une petite prochaine action", standard: "avec une prochaine action faisable en environ 15 minutes" },
    { id: "O3", condition: "Pour la semaine à venir", action: "planifier votre agenda avec d'abord ce qui est fixe, puis des blocs de temps pour votre objectif et un bloc de marge", standard: "avec au moins deux blocs pour l'objectif et un bloc de marge vide" },
    { id: "O4", condition: "À partir d'une liste de dix tâches", action: "classer les tâches selon qu'elles sont urgentes et importantes, et choisir vos trois priorités", standard: "en entourant celle que vous ferez en premier" },
    { id: "O5", condition: "Pour une tâche que vous repoussez", action: "la commencer avec une toute petite première étape, sans distractions et avec un minuteur de 10 minutes", standard: "en commençant pendant la même séance" },
    { id: "O6", condition: "Après sept jours de suivi", action: "faire un bilan de la semaine en cinq minutes et modifier le plan de la semaine suivante", standard: "en répondant aux trois questions du bilan et en faisant au moins un changement" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Fixer des objectifs et planifier",
      lessons: [
        {
          objectives: ["O1"],
          title: "Écrire un objectif SMART",
          minutes: 5,
          goal: "Transformer un souhait vague en objectif SMART.",
          text: [
            "\"Me remettre en forme\" ou \"trouver un emploi\" sont des souhaits. C'est un bon début, mais cela ne vous dit pas quoi faire aujourd'hui. Un objectif SMART transforme un souhait en quelque chose que vous pouvez faire et mesurer.",
            "SMART vient de l'anglais. Chaque lettre est une question : S, spécifique (quoi exactement ?) ; M, mesurable (un chiffre ou une ligne d'arrivée claire) ; A, atteignable (exigeant mais possible) ; R, pertinent (il compte pour vous) ; T, limité dans le temps (une date limite). \"Trouver un emploi\" devient \"Postuler à 10 emplois en entrepôt ou en cuisine d'ici le 30 novembre\". \"Être plus rapide\" devient \"Gagner 2 secondes sur mon 400 mètres d'ici la fin de la saison\".",
            "Remarquez que l'objectif d'emploi porte sur ce que vous contrôlez (postuler), pas sur ce que vous ne contrôlez pas (être embauché). Les objectifs qui dépendent de vous vous font avancer même quand les autres tardent à répondre."
          ],
          steps: ["Écrivez votre souhait en quelques mots.", "Rendez-le spécifique : quoi exactement ?", "Ajoutez un chiffre ou une ligne d'arrivée claire.", "Vérifiez qu'il est possible avec le temps et l'aide que vous avez.", "Vérifiez qu'il compte pour vous.", "Ajoutez une date limite."],
          words: [["Objectif SMART", "un objectif spécifique, mesurable, atteignable, pertinent et limité dans le temps (les lettres viennent de l'anglais)."], ["Date limite", "le jour où quelque chose doit être fait."]],
          slides: [
            { title: "Souhait ou objectif", bullets: ["Souhait : \"Trouver un emploi\"", "Objectif : \"Postuler à 10 emplois en cuisine d'ici le 30 novembre\""] },
            { title: "SMART", bullets: ["S et M : spécifique et mesurable", "A et R : atteignable et pertinent", "T : limité dans le temps, avec une date limite"] },
            { title: "Autres exemples", bullets: ["\"Épargner 200 $ d'ici le 31 décembre\"", "\"Gagner 2 secondes sur mon 400 m d'ici la fin de la saison\"", "\"Trouver 5 clients payants ce mois-ci\""] },
            { title: "Visez ce que vous contrôlez", bullets: ["Postuler, pas être embauché", "S'entraîner, pas gagner", "Appeler des clients, pas leur réponse"] }
          ],
          tryIt: "Écrivez un souhait que vous avez en ce moment. Puis réécrivez-le sous forme d'objectif SMART pour les quatre prochaines semaines. Vérifiez chaque lettre : S, M, A, R, T.",
          youCanNow: "transformer un souhait vague en objectif SMART avec un chiffre et une date limite.",
          quickCheck: [
            { objective: "O1", q: "Que veut dire le M de SMART ?", options: ["Mesurable", "Motivant", "Mensuel", "Maximum"], answer: 0, why: "Mesurable veut dire que vous pouvez compter ou vérifier si vous l'avez fait." },
            { objective: "O1", q: "Votre souhait est « me remettre en forme ». Qu'écrivez-vous à la place ?", options: ["« Être vraiment en forme un jour »", "« Ne jamais rater une séance de sport »", "« Courir 20 minutes, 3 jours par semaine, pendant les 4 prochaines semaines »", "« Être la personne la plus forte de la salle de sport »"], answer: 2, why: "Cet objectif est spécifique, mesurable, atteignable, pertinent et limité dans le temps." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Découper un objectif en étapes hebdomadaires",
          minutes: 5,
          goal: "Découper un objectif SMART en étapes hebdomadaires et en une première petite action.",
          text: [
            "Un objectif sur quatre semaines peut sembler grand. Le découper en étapes hebdomadaires le rend faisable. Partez de la date limite et remontez : que faut-il avoir fait à la fin de la semaine 4, de la semaine 3, de la semaine 2 et de la semaine 1 ?",
            "Pour \"Postuler à 10 emplois d'ici le 30 novembre\" : semaine 1, mettre à jour le CV et lister 15 endroits ; semaine 2, postuler à 3 ; semaine 3, postuler à 4 ; semaine 4, postuler à 3 et relancer tout le monde. Pour un objectif d'entreprise de 5 nouveaux clients : semaine 1, lister 30 personnes à contacter ; semaines 2 à 4, en contacter 10 par semaine.",
            "Ensuite, choisissez la toute prochaine action, assez petite pour la faire en 15 minutes ou moins, par exemple \"Ouvrir mon CV et corriger le numéro de téléphone\". Un assistant d'IA peut proposer des étapes si vous êtes bloqué ; demandez-lui, puis réduisez sa liste à ce qui tient dans votre vraie semaine."
          ],
          steps: ["Écrivez l'objectif et la date limite en haut.", "Remontez depuis la date limite : que faut-il faire chaque semaine ?", "Écrivez une étape par semaine.", "Écrivez la prochaine petite action que vous pouvez faire en 15 minutes.", "Faites cette action aujourd'hui si vous le pouvez."],
          words: [["Jalon", "un point de contrôle sur le chemin d'un objectif, par exemple la fin de chaque semaine."], ["Prochaine action", "la toute prochaine petite chose concrète que vous allez faire."]],
          slides: [
            { title: "Les grands objectifs pèsent lourd", bullets: ["Découpez-les en étapes hebdomadaires", "Partez de la date limite et remontez"] },
            { title: "Exemple : 10 candidatures", bullets: ["Semaine 1 : CV + liste de 15 endroits", "Semaines 2-4 : postuler à 3, à 4, puis à 3", "Semaine 4 : relancer tout le monde"] },
            { title: "La prochaine action", bullets: ["Petite : 15 minutes ou moins", "Concrète : ouvrir, appeler, écrire, corriger", "\"Ouvrir mon CV et corriger le numéro de téléphone\""] },
            { title: "L'IA peut aider", bullets: ["Demandez-lui de proposer des étapes", "Réduisez la liste à ce qui tient dans votre semaine"] }
          ],
          tryIt: "Reprenez votre objectif SMART de la leçon 1. Écrivez une étape pour chacune des quatre semaines, puis écrivez la prochaine petite action et faites-la maintenant si vous le pouvez.",
          youCanNow: "découper un objectif en étapes hebdomadaires et choisir une petite prochaine action.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une prochaine action ?", options: ["Le résultat final de votre objectif", "Une petite étape concrète faisable en environ 15 minutes", "Un objectif pour l'année prochaine", "Une récompense une fois que vous avez fini"], answer: 1, why: "Une prochaine action est petite et claire, donc vous pouvez commencer tout de suite." },
            { objective: "O2", q: "Un assistant d'IA vous donne 25 étapes pour votre objectif. Que faites-vous ?", options: ["Essayer de faire les 25 cette semaine", "Ignorer la liste", "Demander à l'IA de fixer l'objectif à votre place", "La réduire aux étapes qui tiennent dans votre vraie semaine"], answer: 3, why: "L'IA peut proposer des étapes, mais c'est vous qui les réduisez à votre temps réel." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planifier votre semaine",
          minutes: 5,
          goal: "Planifier une semaine avec des blocs de temps pour ce qui compte le plus.",
          text: [
            "Un plan pour la semaine transforme les objectifs en temps réservé dans l'agenda. Choisissez un moment fixe, comme le dimanche soir, et consacrez-y 15 minutes.",
            "D'abord, placez ce qui est fixe : horaires de travail, cours, entraînements, rendez-vous, rendez-vous de contrôle judiciaire ou de probation, tâches familiales et sommeil. Ensuite, ajoutez des blocs de temps pour les étapes de votre objectif, par exemple \"Mardi de 18 h à 19 h : postuler à 2 emplois\". Traitez ces blocs comme des rendez-vous avec vous-même.",
            "Laissez un peu de temps libre. Il y a des imprévus, les bus sont en retard et les enfants tombent malades. Un plan sans place pour les imprévus casse dès le premier jour. Utilisez ce que vous allez vraiment regarder : un agenda papier, un tableau blanc ou un agenda gratuit sur votre téléphone avec des rappels."
          ],
          steps: ["Choisissez un moment pour planifier chaque semaine (par exemple le dimanche soir).", "Placez ce qui est fixe : travail, études, entraînement, rendez-vous, sommeil.", "Ajoutez des blocs de temps pour l'étape de cette semaine.", "Laissez du temps libre pour les imprévus.", "Mettez des rappels pour les blocs les plus importants."],
          words: [["Bloc de temps", "un moment fixe dans votre agenda pour une seule tâche."], ["Marge", "du temps que vous laissez libre pour les imprévus."]],
          slides: [
            { title: "Planifiez une fois par semaine", bullets: ["Au même moment chaque semaine, environ 15 minutes", "Par exemple, le dimanche soir"] },
            { title: "D'abord ce qui est fixe", bullets: ["Travail, études, entraînement", "Rendez-vous et contrôles", "Tâches familiales et sommeil"] },
            { title: "Ensuite les blocs de votre objectif", bullets: ["\"Mardi de 18 h à 19 h : postuler à 2 emplois\"", "Traitez-le comme un rendez-vous"] },
            { title: "Gardez de la place", bullets: ["Gardez un peu de temps libre comme marge", "Utilisez du papier ou l'agenda du téléphone", "Mettez des rappels pour les blocs clés"] }
          ],
          tryIt: "Planifiez la semaine prochaine sur papier ou dans l'agenda du téléphone. Placez ce qui est fixe, puis ajoutez au moins deux blocs de temps pour l'étape de votre objectif et un bloc libre comme marge.",
          youCanNow: "planifier une semaine avec vos engagements fixes, des blocs pour votre objectif et du temps de marge.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un bloc de marge ?", options: ["Du temps laissé libre dans votre semaine pour les imprévus", "Du temps pour votre tâche la plus importante", "Un bloc de temps réservé au sommeil", "Une réunion avec votre patron"], answer: 0, why: "La marge donne de la place à votre plan quand quelque chose tourne mal." },
            { objective: "O3", q: "Vous planifiez la semaine prochaine. Que mettez-vous d'abord dans l'agenda ?", options: ["Les blocs pour l'objectif", "Le temps sur les réseaux sociaux", "Ce qui est fixe, comme le travail, l'entraînement et les rendez-vous", "Rien ; vous planifiez chaque jour le matin"], answer: 2, why: "Ce qui est fixe va en premier, puis les blocs pour l'objectif se placent autour." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Fixer des objectifs et planifier",
        questions: [
          { objective: "O1", q: "Lequel est un objectif SMART ?", options: ["\"Être en meilleure santé\"", "\"Mieux gérer mon argent\"", "\"Marcher 30 minutes, 5 jours par semaine, pendant les 4 prochaines semaines\"", "\"Faire plus d'efforts au travail\""], answer: 2, why: "Il est spécifique, mesurable et a une durée précise." },
          { objective: "O1", q: "Que veut dire le T de SMART ?", options: ["Limité dans le temps", "Difficile", "En équipe", "De confiance"], answer: 0, why: "Un objectif SMART a une date limite." },
          { objective: "O2", q: "Votre objectif est de postuler à 10 emplois en 4 semaines. Quelle est une bonne prochaine action ?", options: ["Être embauché demain", "Ouvrir votre CV et corriger le numéro de téléphone", "Y penser le mois prochain", "Postuler à 100 emplois aujourd'hui"], answer: 1, why: "Une prochaine action est petite, concrète et faisable tout de suite." },
          { objective: "O3", q: "Quand vous planifiez une semaine, que mettez-vous en premier dans l'agenda ?", options: ["Les loisirs en plus", "Rien ; on verra bien", "Seulement les blocs de l'objectif", "Ce qui est fixe, comme le travail, les études, l'entraînement et le sommeil"], answer: 3, why: "Les engagements fixes passent d'abord ; les blocs de l'objectif s'organisent autour." },
          { objective: "O3", q: "Pourquoi laisser du temps libre comme marge dans votre semaine ?", options: ["Il y a des imprévus et un plan a besoin de place", "Pour perdre du temps", "Parce que planifier est facultatif", "Pour ne jamais finir"], answer: 0, why: "Un plan sans place casse au premier imprévu." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Passer à l'action",
      lessons: [
        {
          objectives: ["O4"],
          title: "Choisir ses priorités",
          minutes: 5,
          goal: "Classer les tâches selon qu'elles sont urgentes et importantes, et choisir vos trois priorités.",
          text: [
            "Il y a toujours plus à faire que de temps disponible. Les priorités décident de ce qui reçoit votre meilleur temps. Un outil simple classe les tâches dans quatre cases à l'aide de deux questions : Est-ce important (cela fait-il avancer mes objectifs ou protège-t-il ma santé, ma famille, mon emploi ou ma liberté) ? Est-ce urgent (faut-il le faire maintenant) ?",
            "Important et urgent : faites-le maintenant (un loyer à payer aujourd'hui, un rendez-vous de contrôle). Important mais pas urgent : planifiez-le (étudier, s'entraîner, développer votre entreprise). Urgent mais pas important : faites-le vite ou confiez-le à quelqu'un (beaucoup d'appels et de messages). Ni l'un ni l'autre : laissez tomber (faire défiler les réseaux sans fin).",
            "La plupart des progrès se trouvent dans la case important mais pas urgent, et c'est la plus facile à sauter. Chaque matin ou chaque soir, choisissez vos trois tâches principales pour le lendemain et faites d'abord la plus importante, avant que les messages ne vous détournent."
          ],
          steps: ["Listez tout ce que vous avez en tête.", "Demandez-vous pour chaque chose : est-ce important ? Est-ce urgent ?", "Mettez chaque tâche dans une des quatre cases : faire maintenant, planifier, faire vite ou confier, laisser tomber.", "Choisissez vos trois priorités pour demain.", "Faites d'abord la plus importante."],
          words: [["Priorité", "quelque chose qui compte plus et qu'on fait en premier."], ["Urgent", "à faire bientôt."], ["Important", "fait avancer vos objectifs ou protège ce qui compte le plus pour vous."]],
          slides: [
            { title: "Deux questions", bullets: ["Est-ce important ?", "Est-ce urgent ?"] },
            { title: "Quatre cases", bullets: ["Important + urgent : faites-le maintenant", "Important, pas urgent : planifiez-le", "Urgent, pas important : faites vite ou confiez-le", "Ni l'un ni l'autre : laissez tomber"] },
            { title: "Les progrès sont dans la case 2", bullets: ["Étudier, s'entraîner, développer votre entreprise", "Facile à sauter parce que ce n'est pas urgent", "Mettez-le dans l'agenda"] },
            { title: "Vos trois priorités", bullets: ["Choisissez trois tâches pour demain", "Faites d'abord la plus importante", "Avant que les messages ne vous détournent"] }
          ],
          tryIt: "Écrivez dix choses de votre liste de tâches. Mettez chacune dans une des quatre cases. Puis choisissez vos trois priorités pour demain et entourez celle que vous ferez en premier.",
          youCanNow: "classer vos tâches selon qu'elles sont importantes et urgentes, et choisir trois priorités pour chaque jour.",
          quickCheck: [
            { objective: "O4", q: "Dans quelle case va un rendez-vous de suivi prévu aujourd'hui ?", options: ["Ni urgent ni important", "Urgent mais pas important", "Important mais pas urgent", "Urgent et important"], answer: 3, why: "Il doit être fait aujourd'hui et il compte, donc il est urgent et important." },
            { objective: "O4", q: "Votre téléphone n'arrête pas de vibrer à cause d'un groupe de discussion pendant que vous remplissez une candidature. Que faites-vous ?", options: ["Répondre tout de suite à chaque message", "Finir d'abord la candidature et regarder les messages plus tard", "Arrêter la candidature pour aujourd'hui", "Quitter le groupe pour toujours"], answer: 1, why: "La plupart des messages semblent urgents mais sont moins importants que votre tâche prioritaire." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vaincre la procrastination",
          minutes: 5,
          goal: "Utiliser des astuces simples pour commencer une tâche que vous repoussez.",
          text: [
            "La procrastination n'est pas de la paresse. En général, nous repoussons une tâche parce qu'elle paraît trop grande, floue, ennuyeuse ou qu'elle fait peur. La solution, c'est de rendre le démarrage plus facile.",
            "Quatre astuces qui marchent. Réduisez-la : rendez la première étape minuscule, par exemple \"écrire une phrase de la lettre de motivation\". Utilisez un minuteur : travaillez seulement 10 minutes ; vous pouvez arrêter ensuite, mais souvent vous continuez. Supprimez les distractions : mettez le téléphone dans une autre pièce ou activez le mode Ne pas déranger. Associez-la à une routine : faites la tâche à la même heure et au même endroit chaque jour, ou avec un partenaire d'étude ou d'entraînement.",
            "Soyez indulgent avec vous-même quand vous flanchez. Vous blâmer rend la tâche encore plus pénible. Remarquez-le, choisissez la toute petite première étape, et recommencez."
          ],
          steps: ["Nommez la tâche que vous évitez.", "Demandez-vous pourquoi : trop grande, floue, ennuyeuse ou effrayante ?", "Réduisez-la à une toute petite première étape.", "Réglez un minuteur sur 10 minutes.", "Rangez votre téléphone et commencez.", "Quand le minuteur sonne, choisissez : arrêter ou continuer."],
          words: [["Procrastination", "repousser quelque chose que vous savez devoir faire."], ["Ne pas déranger", "un réglage du téléphone qui coupe les appels et les alertes pendant un moment."]],
          slides: [
            { title: "Pourquoi nous repoussons les choses", bullets: ["Trop grand ou flou", "Ennuyeux", "Effrayant"] },
            { title: "Rendez le démarrage facile", bullets: ["Réduisez-la à une toute petite première étape", "Réglez un minuteur sur 10 minutes", "Téléphone rangé ou en mode Ne pas déranger"] },
            { title: "Créez une habitude", bullets: ["Même heure et même endroit chaque jour", "Un partenaire d'étude ou d'entraînement"] },
            { title: "Quand vous flanchez", bullets: ["Soyez indulgent avec vous-même", "Choisissez la toute petite première étape", "Recommencez"] }
          ],
          tryIt: "Choisissez une tâche que vous évitez. Réduisez-la à une toute petite première étape, rangez votre téléphone, réglez un minuteur sur 10 minutes et commencez tout de suite.",
          youCanNow: "commencer une tâche que vous évitiez en la réduisant, en utilisant un minuteur et en supprimant les distractions.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi repousse-t-on souvent une tâche ?", options: ["Elle semble trop grande, floue, ennuyeuse ou effrayante", "On a trop de temps libre", "La tâche est trop facile", "On l'a déjà finie"], answer: 0, why: "Ce sont les tâches qui semblent grandes, floues, ennuyeuses ou effrayantes que l'on évite." },
            { objective: "O5", q: "Vous évitez de ranger votre garage depuis des mois. Que faites-vous ?", options: ["Attendre d'être motivé", "Prévoir de tout faire samedi prochain", "Prendre un seul carton, lancer un minuteur de 10 minutes et commencer maintenant", "Demander à quelqu'un d'autre de décider"], answer: 2, why: "Une toute petite première étape et un minuteur rendent le démarrage plus facile." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Suivre ses progrès et le bilan de la semaine",
          minutes: 5,
          goal: "Suivre vos progrès et ajuster votre plan lors d'un bilan de cinq minutes chaque semaine.",
          text: [
            "Ce qui est suivi est fait. Un suivi simple vous montre que vous avancez, et cela vous aide à continuer. Ce peut être une liste sur papier avec une coche pour chaque jour où vous avez fait votre étape, un chiffre dans les notes de votre téléphone (candidatures envoyées, argent épargné, kilomètres courus) ou une application gratuite de suivi des habitudes.",
            "Une fois par semaine, faites un bilan de cinq minutes. Posez-vous trois questions : Qu'est-ce que j'ai fait ? Qu'est-ce qui m'a gêné ? Qu'est-ce que je vais changer la semaine prochaine ? Puis planifiez la semaine suivante avec ce que vous avez appris.",
            "Si vous ratez souvent une étape, le problème vient du plan, pas de vous. Rendez l'étape plus petite, changez l'horaire ou déplacez la date limite. Les entraîneurs changent le programme quand un sportif ne progresse pas ; faites de même pour vous. Fêtez aussi les petites victoires."
          ],
          steps: ["Choisissez un chiffre ou une coche à noter chaque jour.", "Notez-le à la même heure chaque jour.", "Une fois par semaine, demandez-vous : qu'est-ce que j'ai fait, qu'est-ce qui m'a gêné, qu'est-ce que je vais changer ?", "Ajustez le plan de la semaine prochaine.", "Fêtez une petite victoire."],
          words: [["Suivi", "une trace simple de ce que vous avez fait chaque jour."], ["Bilan de la semaine", "un court retour sur la semaine pour apprendre et ajuster votre plan."]],
          slides: [
            { title: "Ce qui est suivi est fait", bullets: ["Cochez une liste, notez un chiffre ou utilisez une application d'habitudes", "Voir vos progrès vous aide à continuer"] },
            { title: "Bilan de la semaine en cinq minutes", bullets: ["Qu'est-ce que j'ai fait ?", "Qu'est-ce qui m'a gêné ?", "Qu'est-ce que je vais changer la semaine prochaine ?"] },
            { title: "Des étapes ratées ?", bullets: ["Changez le plan, votre valeur ne change pas", "Étape plus petite, nouvel horaire ou nouvelle date limite"] },
            { title: "Continuez", bullets: ["Fêtez les petites victoires", "Planifiez la semaine prochaine avec ce que vous avez appris"] }
          ],
          tryIt: "Tâche finale : notez l'étape de votre objectif chaque jour pendant sept jours. Le 7e jour, répondez par écrit aux trois questions du bilan et planifiez la semaine suivante avec au moins un changement.",
          youCanNow: "suivre vos progrès vers un objectif et utiliser un bilan chaque semaine pour ajuster votre plan.",
          quickCheck: [
            { objective: "O6", q: "Combien de temps doit durer le bilan de la semaine ?", options: ["Environ cinq minutes", "Une journée entière", "Deux heures", "Il n'est pas nécessaire"], answer: 0, why: "Un bilan court est facile à refaire chaque semaine." },
            { objective: "O6", q: "Votre suivi montre que vous n'avez jamais fait votre étape les matins de semaine. Que faites-vous ?", options: ["Abandonner l'objectif", "Garder le même plan en espérant", "Accuser votre emploi du temps", "Déplacer l'étape à un moment qui a mieux marché"], answer: 3, why: "Le bilan sert à changer le plan quand il ne marche pas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Passer à l'action",
        questions: [
          { objective: "O4", q: "Réviser pour un examen dans trois semaines, c'est :", options: ["Urgent et pas important", "Ni l'un ni l'autre", "Important mais pas urgent", "Quelque chose à laisser tomber"], answer: 2, why: "C'est important mais ce n'est pas pour aujourd'hui, alors vous le planifiez." },
          { objective: "O4", q: "Que faire d'une tâche importante et urgente, comme un rendez-vous de contrôle aujourd'hui ?", options: ["La laisser tomber", "La planifier pour le mois prochain", "La confier à un ami", "La faire maintenant"], answer: 3, why: "Les tâches importantes et urgentes passent en premier." },
          { objective: "O5", q: "Vous repoussez sans cesse un gros rapport. Quelle est une bonne première étape ?", options: ["Attendre de vous sentir prêt", "Écrire seulement la première phrase avec un minuteur de 10 minutes", "Tout faire d'un coup à minuit", "Regarder d'abord les réseaux sociaux"], answer: 1, why: "Réduire la tâche et utiliser un minuteur rend le démarrage plus facile." },
          { objective: "O6", q: "Quelle question fait partie d'un bilan de la semaine ?", options: ["Qu'est-ce que je vais changer la semaine prochaine ?", "Qui puis-je blâmer ?", "Comment éviter de planifier ?", "Pourquoi suis-je si nul ?"], answer: 0, why: "Le bilan regarde en arrière pour ajuster le plan." },
          { objective: "O6", q: "Vous avez raté votre étape trois semaines de suite. Que faire de mieux ?", options: ["Abandonner l'objectif", "Vous blâmer", "Changer le plan : étape plus petite, nouvel horaire ou nouvelle date limite", "Garder le même plan et espérer"], answer: 2, why: "Quand les étapes sont souvent ratées, ajustez le plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gestion du temps et fixation d'objectifs",
    questions: [
      { objective: "O1", q: "SMART veut dire :", options: ["Simple, Moderne, Actif, Rapide, Tenace", "Spécifique, Mesurable, Atteignable, Pertinent, Limité dans le temps", "Solide, Magnifique, Agile, Riche, Total", "Semaine, Mois, Année, Réel, Total"], answer: 1, why: "Ces cinq lettres rendent un objectif clair et faisable." },
      { objective: "O1", q: "Quel objectif est mesurable ?", options: ["\"Être un meilleur joueur\"", "\"Faire plus de publicité\"", "\"Être plus heureux\"", "\"Épargner 50 $ par semaine pendant 8 semaines\""], answer: 3, why: "Il contient un chiffre que vous pouvez vérifier." },
      { objective: "O1", q: "Pourquoi viser ce que vous contrôlez ?", options: ["Cela vous fait avancer même quand les autres tardent", "C'est plus facile de tricher", "Cela sonne mieux", "Les autres le feront pour vous"], answer: 0, why: "Vous pouvez toujours agir sur ce que vous contrôlez." },
      { objective: "O1", q: "Quel est le meilleur objectif de recherche d'emploi ?", options: ["\"Être embauché d'ici vendredi\"", "\"Espérer que quelqu'un appelle\"", "\"Postuler à 3 emplois cette semaine\"", "\"Réfléchir à des emplois\""], answer: 2, why: "Postuler dépend de vous et se mesure." },
      { objective: "O2", q: "Découper un objectif en étapes hebdomadaires marche le mieux quand vous :", options: ["Commencez par la semaine la plus dure", "Partez de la date limite et remontez", "Sautez la première semaine", "Gardez tout dans votre tête"], answer: 1, why: "Remonter depuis la date limite montre ce qu'il faut chaque semaine." },
      { objective: "O2", q: "Une \"prochaine action\" doit être :", options: ["Petite, concrète et faisable en environ 15 minutes", "La plus grande possible", "Quelque chose pour l'année prochaine", "Vague pour garder des options"], answer: 0, why: "Les petites actions sont faciles à commencer." },
      { objective: "O2", q: "Comment un assistant d'IA peut-il aider pour vos objectifs ?", options: ["Il atteint l'objectif à votre place", "Il choisit vos objectifs", "Il remplace votre agenda", "Il peut proposer des étapes que vous réduisez ensuite à votre vraie semaine"], answer: 3, why: "L'IA peut aider à trouver des idées ; c'est vous qui faites le plan." },
      { objective: "O3", q: "Quel est un bon moment pour planifier votre semaine ?", options: ["Jamais", "Le même moment chaque semaine, comme le dimanche soir", "Seulement quand ça va mal", "Une fois par an"], answer: 1, why: "Un moment régulier pour planifier crée l'habitude." },
      { objective: "O3", q: "Un bloc de temps, c'est :", options: ["Un moment fixe dans votre agenda pour une seule tâche", "Une pause au travail", "Un type d'alarme", "Un exercice sportif"], answer: 0, why: "Il réserve du temps pour une tâche précise." },
      { objective: "O3", q: "Que met-on dans le plan avant les blocs de l'objectif ?", options: ["Du temps pour les réseaux sociaux", "Des extras facultatifs", "Ce qui est fixe, comme les horaires de travail, l'entraînement et les rendez-vous", "Rien"], answer: 2, why: "Les engagements fixes passent en premier." },
      { objective: "O3", q: "Un plan sans temps libre, en général :", options: ["Marche parfaitement", "Casse au premier imprévu", "Fait gagner le plus de temps", "Vous rend riche"], answer: 1, why: "Le temps de marge absorbe les imprévus." },
      { objective: "O4", q: "Faire défiler les réseaux sans fin, c'est en général :", options: ["Important et urgent", "Important, pas urgent", "Urgent, pas important", "Ni important ni urgent"], answer: 3, why: "Cela ne fait pas avancer vos objectifs et ne doit pas être fait maintenant." },
      { objective: "O4", q: "Où se font la plupart des progrès à long terme ?", options: ["Dans les tâches importantes mais pas urgentes", "Dans les tâches urgentes mais pas importantes", "Dans les tâches qu'on laisse tomber", "Dans des tâches au hasard"], answer: 0, why: "L'entraînement, les études et la construction se font ici, alors planifiez-les." },
      { objective: "O4", q: "Pourquoi faire votre tâche la plus importante en premier chaque jour ?", options: ["C'est toujours la plus facile", "Plus tard, les messages et les imprévus peuvent vous détourner", "Cela rend la journée plus longue", "Personne d'autre ne vérifiera"], answer: 1, why: "La faire en premier la protège des distractions." },
      { objective: "O5", q: "Nous procrastinons souvent parce qu'une tâche paraît :", options: ["Trop petite et claire", "Trop amusante", "Trop grande, floue, ennuyeuse ou effrayante", "Déjà faite"], answer: 2, why: "Ces sentiments rendent le démarrage difficile." },
      { objective: "O5", q: "L'astuce du minuteur de 10 minutes veut dire :", options: ["Travailler seulement 10 minutes par semaine", "Commencer pendant 10 minutes, puis choisir d'arrêter ou de continuer", "Tout finir en 10 minutes", "Attendre 10 minutes avant de commencer"], answer: 1, why: "Un minuteur court rend le démarrage plus facile." },
      { objective: "O5", q: "Qu'est-ce qui aide à supprimer les distractions ?", options: ["Garder toutes les alertes activées", "Travailler devant la télévision", "Regarder ses messages chaque minute", "Mettre votre téléphone dans une autre pièce ou en mode Ne pas déranger"], answer: 3, why: "Moins de distractions rend la concentration plus facile." },
      { objective: "O6", q: "Quelle est une façon simple de suivre vos progrès ?", options: ["Cocher une liste chaque jour où vous faites votre étape", "Essayer de s'en souvenir", "Demander à un inconnu", "Ne rien suivre"], answer: 0, why: "Une trace visible montre que vous avancez." },
      { objective: "O6", q: "Dans le bilan de la semaine, vous demandez ce que vous avez fait, ce qui vous a gêné, et :", options: ["Qui est responsable", "Ce que je vais changer la semaine prochaine", "Comment sauter la semaine prochaine", "Ce que les autres ont fait"], answer: 1, why: "Le bilan mène à une meilleure semaine suivante." },
      { objective: "O6", q: "Votre entraîneur change votre entraînement quand vous ne progressez plus. Qu'est-ce que cela vous apprend sur vos propres plans ?", options: ["Ne jamais changer un plan", "Abandonner quand les progrès s'arrêtent", "Ajuster le plan quand il ne marche pas", "Les plans ne servent à rien"], answer: 2, why: "Les bons plans changent selon les résultats." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      5,
      8,
      10,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Objectif SMART",
        objective: "O1",
        notYet: "L'objectif est flou ou n'a ni date limite ni chiffre.",
        meets: "Un objectif sur quatre semaines qui est spécifique, mesurable, atteignable, pertinent et limité dans le temps.",
        exceeds: "L'objectif porte sur des actions que l'apprenant maîtrise."
      },
      {
        name: "Étapes hebdomadaires",
        objective: "O2",
        notYet: "Pas d'étapes hebdomadaires, ou des étapes trop grandes pour commencer.",
        meets: "Une étape pour chaque semaine et une petite prochaine action.",
        exceeds: "Les étapes ont été planifiées en partant de la date limite."
      },
      {
        name: "Plan de la semaine",
        objective: "O3",
        notYet: "Pas de blocs de temps, ou ce qui est fixe manque.",
        meets: "D'abord ce qui est fixe, des blocs de temps pour les trois priorités et un bloc de marge.",
        exceeds: "La tâche la plus importante est prévue tôt dans la journée."
      },
      {
        name: "Démarrage et suivi",
        objective: "O5",
        notYet: "A repoussé les étapes, ou moins de sept jours suivis.",
        meets: "Sept jours suivis, montrant ce qui a vraiment été fait.",
        exceeds: "Note quelles astuces de démarrage ont aidé les jours difficiles."
      },
      {
        name: "Bilan de la semaine",
        objective: "O6",
        notYet: "Pas de bilan, ou aucun changement prévu.",
        meets: "Répond à ce qui a été fait, ce qui a gêné et ce qui va changer, avec au moins un changement.",
        exceeds: "Le changement est déjà placé dans l'agenda de la semaine suivante."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui font un bilan de la semaine quatre semaines de suite (questionnaire de suivi)",
      "Apprenants qui disent avoir atteint leur objectif SMART sur quatre semaines",
      "Apprenants qui disent appliquer le système à une recherche d'emploi, une formation, une entreprise ou un objectif d'épargne",
      "Apprenants qui commencent un autre cours Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du papier et un stylo, un agenda gratuit sur le téléphone ou une application de planification",
      "Un assistant d'IA gratuit (facultatif) pour proposer des étapes",
      "Un minuteur sur un téléphone ou une horloge",
      "Environ 60 minutes pour les leçons et les contrôles, plus sept jours de suivi"
    ],
    facilitatorNotes: [
      "Faites le cours en deux séances à une semaine d'écart pour que les apprenants suivent sept jours entre les deux.",
      "Demandez aux apprenants de partager un objectif SMART avec un partenaire et de le vérifier lettre par lettre.",
      "Aidez les apprenants qui ont des engagements fixes, comme des horaires de travail, des entraînements ou des rendez-vous de suivi judiciaire, à les mettre d'abord dans l'agenda.",
      "Utilisez un minuteur de groupe de 10 minutes pour s'entraîner ensemble à commencer une tâche repoussée.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
