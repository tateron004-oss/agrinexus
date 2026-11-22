"use strict";

// Koach Learn course (shared), French translation of "AI in Business: Strategies and Applications". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-in-business-fr",
  lang: "fr",
  translationOf: "ai-in-business",
  category: "Small Business",
  name: "L'IA en entreprise : stratégies et applications",
  skills: "Repérer les occasions d'utiliser l'IA, Associer les tâches aux outils d'IA, Noter la valeur et le risque, Rédiger une note de projet d'une page, Mener un petit pilote, Mesurer les résultats",
  outcome: "trouver le meilleur endroit où utiliser l'IA dans une entreprise ou une organisation, le noter pour sa valeur et son risque, rédiger une note de projet d'une page, puis mener et mesurer un petit pilote de deux semaines.",
  about: [
    "L'IA fait désormais partie du quotidien des entreprises : rédaction, service client, planning, ventes, comptabilité et planification. Le plus difficile n'est pas l'outil. C'est de lui choisir la bonne tâche et de prouver qu'il aide.",
    "Ce cours s'adresse aux propriétaires de petites entreprises, aux responsables d'associations, aux managers, aux jeunes entrepreneurs et à toute personne qui veut faire entrer l'IA dans son lieu de travail de façon intelligente et sûre. Exemples : un salon de coiffure, une banque alimentaire, une équipe d'entretien d'espaces verts et une boutique tenue par des élèves.",
    "Vous cartographierez où passe le temps dans une organisation, choisirez la meilleure occasion d'utiliser l'IA, la défendrez et la testerez avec un petit pilote. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Pour une organisation réelle ou fictive, rédigez une note de projet IA d'une page : la tâche, l'outil d'IA, le temps ou l'argent qu'on espère gagner, les risques et la façon de les maîtriser, et à quoi ressemble la réussite. Menez ensuite un pilote de deux semaines (ou une version d'essai d'une journée), notez les chiffres avant et après, et écrivez une recommandation en trois phrases : étendre, modifier ou arrêter.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires, gérants et employés de petites entreprises, et des responsables d'associations et d'organisations locales qui veulent utiliser l'IA pour gagner du temps ou mieux servir leurs clients.",
    startingPoint: "Ils connaissent bien leur entreprise ou leur organisation et ont parfois essayé un assistant d'IA. Peu ont mesuré où passe le temps du personnel, pesé les risques de l'IA ou testé un nouvel outil de façon planifiée.",
    gap: "Beaucoup de propriétaires évitent l'IA ou l'essaient au hasard puis abandonnent. Les apprenants ont besoin d'une méthode simple et reproductible pour choisir la bonne tâche, peser la valeur et le risque, obtenir du soutien avec une courte note de projet et prouver les résultats par un petit pilote, pour que l'IA fasse gagner du vrai temps sans mettre en danger les données ou la confiance des clients.",
    constraints: [
      "Niveau de lecture : mots simples du monde des affaires ; aucune formation technique nécessaire",
      "Appareils : un téléphone ou un ordinateur ; un tableur aide pour l'analyse du temps",
      "Temps : des leçons de 5 minutes, plus un pilote de deux semaines ou une version d'essai d'une journée",
      "Vie privée : aucun détail privé de client, d'employé ou de donateur, aucun mot de passe ni numéro bancaire dans les outils d'IA",
      "Aucune décision juridique, médicale ou fiscale confiée à l'IA ; une personne vérifie et décide"
    ],
    prerequisites: "Aucun. Les apprenants qui n'ont jamais utilisé d'assistant d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de tâches d'entreprise", action: "repérer celles que les outils d'IA actuels font bien et celles qui demandent qu'une personne vérifie ou décide", standard: "en ayant au moins 4 réponses justes sur 5" },
    { id: "O2", condition: "Pour une organisation réelle ou fictive", action: "lister les tâches répétées d'une semaine normale et calculer les heures que prend chacune", standard: "en entourant les cinq tâches qui prennent le plus d'heures" },
    { id: "O3", condition: "À partir de vos meilleures candidates pour l'IA", action: "noter chacune selon la valeur, l'effort et le risque et en choisir une à mener en premier", standard: "en indiquant toute donnée privée concernée" },
    { id: "O4", condition: "Pour la tâche choisie", action: "rédiger une note de projet IA d'une page", standard: "avec les six parties et de vrais chiffres tirés de votre analyse du temps" },
    { id: "O5", condition: "Pour un petit pilote d'IA", action: "planifier et mener le pilote avec une situation de départ, des règles claires et un journal quotidien", standard: "en notant les mêmes chiffres avant et après" },
    { id: "O6", condition: "À partir de vos chiffres de départ et de ceux du pilote", action: "comparer les résultats et recommander d'étendre, de modifier ou d'arrêter", standard: "en comptant le temps passé à corriger les erreurs de l'IA, en trois phrases" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver la bonne occasion d'utiliser l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que l'IA fait bien en entreprise aujourd'hui",
          minutes: 5,
          goal: "Citer les types de travail que les outils d'IA actuels font bien et mal.",
          text: [
            "La plupart de l'IA utilisée en entreprise aujourd'hui est de l'IA générative : des outils comme ChatGPT, Microsoft Copilot et Google Gemini qui rédigent, résument, trient et répondent en langage simple. D'autres formes d'IA sont intégrées à des logiciels que vous utilisez peut-être déjà, comme les filtres d'e-mails, les prévisions de ventes et les alertes de fraude.",
            "L'IA est forte pour les premiers jets (e-mails, publications, propositions), les résumés (réunions, longs documents, avis), le tri et le classement (questions de clients, reçus), la recherche d'idées, et les réponses aux questions courantes à partir de vos propres informations.",
            "L'IA est faible pour les faits précis qu'on ne lui a pas donnés, les décisions finales sur des personnes ou de l'argent, tout ce qui demande un diplôme ou une autorisation (conseil juridique, médical, fiscal), et les situations où une erreur coûte cher et se repère mal. Dans ces cas, une personne doit vérifier ou décider."
          ],
          words: [["IA générative", "une IA qui crée du texte, des images ou d'autres contenus à partir d'une demande."], ["Cas d'usage", "une tâche précise pour laquelle on utilise un outil."]],
          slides: [
            { title: "L'IA est forte pour", bullets: ["Les premiers jets et les résumés", "Le tri et le classement", "Les idées et les questions courantes"] },
            { title: "L'IA est faible pour", bullets: ["Les faits précis qu'on ne lui a pas donnés", "Les décisions finales sur des personnes ou de l'argent", "Les conseils réglementés : juridique, médical, fiscal"] },
            { title: "Règle pratique", bullets: ["L'IA rédige ; les personnes décident", "Plus l'erreur coûte cher, plus on vérifie"] }
          ],
          tryIt: "Listez cinq tâches d'une entreprise ou d'une organisation que vous connaissez. Marquez chacune « IA forte », « IA avec vérification » ou « à garder pour les personnes », avec une raison.",
          youCanNow: "dire quelles tâches d'entreprise l'IA fait bien et lesquelles demandent une personne.",
          quickCheck: [
            { objective: "O1", q: "Pour quelle tâche l'IA actuelle est-elle faible ?", options: ["Résumer une longue réunion", "Rédiger une publication pour les réseaux sociaux", "Donner un conseil fiscal définitif pour votre entreprise", "Classer les questions des clients par sujet"], answer: 2, why: "Tout ce qui demande un agrément professionnel, comme un conseil fiscal, demande une personne ou un professionnel." },
            { objective: "O1", q: "Votre boutique reçoit des centaines d'avis en ligne. Comment l'IA pourrait-elle aider en premier ?", options: ["Les résumer pour trouver les plaintes les plus fréquentes", "Répondre aux clients mécontents sans que personne ne vérifie", "Décider quels employés licencier selon les avis", "Supprimer les mauvais avis"], answer: 0, why: "Résumer beaucoup d'avis est un point fort de l'IA, et c'est toujours une personne qui décide quoi faire." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cartographier où passe le temps",
          minutes: 5,
          goal: "Cartographier les tâches répétées d'une organisation et repérer les meilleures candidates pour l'IA.",
          text: [
            "Les meilleures occasions d'utiliser l'IA se cachent dans le travail répété qui prend du temps. Parcourez une semaine normale et listez les tâches par service ou par rôle : ventes, service client, marketing, administration, finances, opérations.",
            "Pour chaque tâche, estimez sa fréquence et sa durée. Une tâche faite 20 fois par semaine pendant 10 minutes représente plus de trois heures par semaine. C'est là que l'IA est rentable.",
            "Cherchez les schémas : répondre aux mêmes questions, écrire des e-mails semblables, recopier des informations d'un endroit à un autre, résumer des notes, établir des plannings. Ce sont des candidates classiques pour l'IA ou l'automatisation."
          ],
          steps: ["Listez les tâches faites dans une semaine normale, par rôle.", "Estimez la fréquence et la durée de chacune.", "Multipliez pour obtenir les heures par semaine.", "Entourez les cinq premières en heures.", "Marquez celles qui correspondent aux points forts de l'IA."],
          words: [["Tâche répétitive", "un travail fait de la même façon encore et encore."], ["Audit du temps", "une liste des tâches et du temps que prend chacune."]],
          slides: [
            { title: "Chercher le travail répété", bullets: ["Mêmes questions, e-mails semblables", "Recopier des informations d'un endroit à l'autre", "Résumés et plannings"] },
            { title: "Faire le calcul", bullets: ["Fréquence x durée = heures par semaine", "20 fois x 10 minutes = plus de 3 heures"] },
            { title: "Choisir les candidates", bullets: ["Les cinq premières en heures", "Les associer aux points forts de l'IA"] }
          ],
          tryIt: "Faites un audit du temps pour un rôle dans une organisation réelle ou fictive. Listez au moins huit tâches avec leurs heures par semaine, et entourez les trois meilleures candidates pour l'IA.",
          youCanNow: "cartographier le travail répété d'une organisation et repérer les meilleures candidates pour l'IA.",
          quickCheck: [
            { objective: "O2", q: "Une tâche revient 12 fois par semaine et prend 15 minutes à chaque fois. Combien d'heures par semaine cela fait-il ?", options: ["1 heure", "2 heures", "12 heures", "3 heures"], answer: 3, why: "12 fois 15 minutes font 180 minutes, soit 3 heures." },
            { objective: "O2", q: "Vous cartographiez le temps dans une association. Quelle tâche regardez-vous en premier pour l'IA ?", options: ["Un vote annuel du conseil d'administration", "Écrire chaque semaine le même e-mail de remerciement aux donateurs", "Choisir le nouveau directeur général", "Signer des contrats"], answer: 1, why: "Les tâches d'écriture répétées et semblables sont celles où l'IA rapporte le plus." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Noter les occasions selon leur valeur et leur risque",
          minutes: 5,
          goal: "Noter des idées d'IA selon la valeur, l'effort et le risque, et en choisir une.",
          text: [
            "Toutes les idées d'IA ne méritent pas de passer en premier. Notez chaque candidate de 1 à 5 sur trois critères. Valeur : combien de temps, d'argent ou de satisfaction client elle apporte. Effort : à quel point elle est difficile à mettre en place et à apprendre. Risque : ce qui se passe si l'IA se trompe, et s'il y a des données privées en jeu.",
            "Choisissez un gain rapide : forte valeur, faible effort, faible risque. Faire rédiger par l'IA des réponses aux e-mails clients courants, relues par une personne, est un gain rapide classique. Utiliser l'IA pour décider qui est embauché ou qui reçoit une aide est très risqué et n'est pas un premier projet.",
            "Vérifiez tôt les données et la vie privée. Si la tâche utilise des informations sur des clients, des employés, des donateurs ou la santé, renseignez-vous sur ce que votre outil d'IA fait des données et sur la nécessité d'une version professionnelle mieux protégée."
          ],
          steps: ["Listez vos trois meilleures candidates.", "Notez chacune de 1 à 5 sur la valeur, l'effort et le risque.", "Préférez forte valeur, faible effort, faible risque.", "Notez les données privées concernées.", "Choisissez-en une à lancer en premier."],
          words: [["Gain rapide", "un projet qui apporte vite une valeur claire avec peu d'effort et de risque."], ["Risque", "la probabilité et le coût que quelque chose tourne mal."]],
          slides: [
            { title: "Noter de 1 à 5", bullets: ["Valeur : temps, argent, satisfaction client", "Effort : mise en place et apprentissage", "Risque : coût des erreurs, données privées"] },
            { title: "Commencer par un gain rapide", bullets: ["Forte valeur, faible effort, faible risque", "Exemple : l'IA rédige les réponses, une personne relit"] },
            { title: "Pas un premier projet", bullets: ["Décisions d'embauche ou d'attribution d'aide", "Toute décision sur la santé ou l'argent"] }
          ],
          tryIt: "Notez vos trois meilleures candidates selon la valeur, l'effort et le risque dans un petit tableau. Choisissez un gain rapide et écrivez deux phrases pour expliquer pourquoi.",
          youCanNow: "noter des idées d'IA selon la valeur, l'effort et le risque et choisir un premier projet judicieux.",
          quickCheck: [
            { objective: "O3", q: "Quand vous notez une idée d'IA, que veut dire « effort » ?", options: ["La difficulté à la mettre en place et à l'apprendre", "L'argent qu'elle rapporte", "Le nombre de clients qui l'aiment", "Le caractère privé des données"], answer: 0, why: "L'effort, c'est la difficulté à mettre en place l'idée et à l'apprendre." },
            { objective: "O3", q: "Deux idées ont la même valeur. L'une utilise des dossiers médicaux, l'autre des informations publiques sur les produits. Laquelle choisissez-vous en premier ?", options: ["Celle des dossiers médicaux, parce qu'elle est plus difficile", "Aucune : l'IA n'est jamais sûre", "Celle des informations sur les produits, parce qu'elle est moins risquée", "Les deux en même temps"], answer: 2, why: "À valeur égale, choisissez l'idée la moins risquée, qui n'utilise pas de données privées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver la bonne occasion d'utiliser l'IA",
        questions: [
          { objective: "O1", q: "Pour quelle tâche l'IA générative actuelle est-elle la plus forte ?", options: ["Décider qui embaucher", "Donner des conseils fiscaux", "Rédiger une réponse à un e-mail client courant", "Signer des contrats"], answer: 2, why: "Les premiers jets sont un point fort ; les décisions et les conseils réglementés demandent des personnes." },
          { objective: "O2", q: "Une tâche revient 30 fois par semaine et prend 6 minutes. Combien d'heures par semaine cela fait-il ?", options: ["3 heures", "30 heures", "6 heures", "Une demi-heure"], answer: 0, why: "30 x 6 minutes = 180 minutes = 3 heures." },
          { objective: "O3", q: "Qu'est-ce qu'un gain rapide ?", options: ["Fort risque, gros effort", "Tout projet qui a « IA » dans son nom", "L'outil le plus cher", "Forte valeur, faible effort, faible risque"], answer: 3, why: "Les gains rapides prouvent vite leur valeur avec peu de risque." },
          { objective: "O3", q: "Pourquoi utiliser l'IA pour accepter ou refuser des candidats à un emploi est-il un mauvais premier projet ?", options: ["C'est trop facile", "C'est très risqué : les erreurs nuisent aux personnes et peuvent être injustes", "L'IA ne sait pas lire", "Cela ne fait gagner aucun temps"], answer: 1, why: "Les décisions sur des personnes sont risquées et demandent un contrôle humain attentif." },
          { objective: "O3", q: "Une tâche utilise des données de donateurs ou de clients. Que faut-il vérifier tôt ?", options: ["Les couleurs de l'outil", "Ce que l'outil d'IA fait de ces données", "Rien", "Combien d'émojis il utilise"], answer: 1, why: "La vie privée doit être vérifiée avant de mettre des données privées dans un outil." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Défendre le projet et le prouver",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rédiger une note de projet IA d'une page",
          minutes: 5,
          goal: "Rédiger une note de projet d'une page à laquelle un patron, un conseil d'administration ou un partenaire peut dire oui.",
          text: [
            "Une note de projet (en anglais « business case ») explique pourquoi un projet vaut la peine. Limitez-la à une page pour que les gens occupés la lisent.",
            "Incluez six parties : le problème (en heures ou en argent), la solution d'IA proposée et l'outil, le bénéfice attendu, le coût (abonnements, temps de formation), les risques et la façon de les maîtriser, et la façon de mesurer la réussite.",
            "Utilisez les vrais chiffres de votre audit du temps. « Le personnel passe 4 heures par semaine à répondre aux 10 mêmes questions. Une bibliothèque de réponses rédigées par l'IA et relues par le personnel pourrait ramener cela à 1 h 30, soit environ 10 heures gagnées par mois. » L'IA peut vous aider à rédiger la page ; c'est vous qui fournissez les faits."
          ],
          steps: ["Problème : ce qu'il coûte aujourd'hui en temps ou en argent.", "Solution : l'outil d'IA et la façon de l'utiliser.", "Bénéfice : gains ou améliorations attendus.", "Coût : argent et temps de formation.", "Risques et contrôles : qui vérifie le travail de l'IA.", "Mesure de réussite : le chiffre que vous suivrez."],
          words: [["Note de projet", "un court document qui explique pourquoi un projet vaut la peine."], ["Contrôle", "une étape qui réduit le risque, comme une personne qui relit le travail de l'IA."]],
          slides: [
            { title: "Une seule page", bullets: ["Les gens occupés lisent les documents courts", "Utiliser de vrais chiffres"] },
            { title: "Six parties", bullets: ["Problème, solution, bénéfice", "Coût, risques et contrôles", "Mesure de réussite"] },
            { title: "L'IA rédige, vous fournissez les faits", bullets: ["Coller les chiffres de votre audit", "Vérifier chaque chiffre du brouillon"] }
          ],
          tryIt: "Rédigez une note de projet d'une page pour le gain rapide choisi, avec les six parties. Vous pouvez demander à l'IA d'améliorer la formulation, mais vérifiez chaque chiffre.",
          youCanNow: "rédiger une note de projet courte et chiffrée pour un projet d'IA.",
          quickCheck: [
            { objective: "O4", q: "Quelle partie d'une note de projet dit qui vérifie le travail de l'IA ?", options: ["Le problème", "Les risques et les contrôles", "Le bénéfice", "Le coût"], answer: 1, why: "Les risques et les contrôles disent ce qui pourrait mal tourner et qui vérifie ce que produit l'IA." },
            { objective: "O4", q: "Votre patron demande pourquoi le projet d'IA en vaut la peine. Qu'est-ce qui rend votre note la plus convaincante ?", options: ["Un long rapport sans chiffres", "Dire que l'IA, c'est l'avenir", "La liste de tous les outils d'IA que vous avez trouvés", "De vrais chiffres tirés de votre analyse du temps qui montrent les heures gagnées"], answer: 3, why: "De vrais chiffres tirés de votre propre analyse du temps montrent clairement le bénéfice attendu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mener un petit pilote",
          minutes: 5,
          goal: "Planifier et mener un pilote d'IA de deux semaines avec des règles claires et une mesure avant-après.",
          text: [
            "Un pilote est un petit test limité dans le temps. Il permet d'apprendre à peu de frais avant de dépenser plus. Deux semaines avec une ou deux personnes suffisent souvent.",
            "Mesurez avant de commencer. Suivez pendant quelques jours les chiffres actuels : temps passé, nombre de tâches, erreurs ou plaintes de clients. Puis menez le pilote et suivez les mêmes chiffres.",
            "Fixez des règles claires : quelles tâches utilisent l'IA, qui vérifie le résultat, quelles informations ne doivent jamais entrer dans l'outil (données privées de clients, d'employés ou de donateurs, mots de passe, numéros bancaires), et quoi faire si l'IA se trompe."
          ],
          steps: ["Choisissez une ou deux personnes et une période de deux semaines.", "Notez les chiffres de départ pendant quelques jours.", "Écrivez des règles simples : tâches, qui vérifie, ce qui n'entre jamais dans l'outil.", "Menez le pilote et tenez un court journal quotidien.", "Notez les mêmes chiffres à la fin."],
          words: [["Pilote", "un petit test limité dans le temps d'une nouvelle idée."], ["Situation de départ", "les chiffres avant un changement, qui servent de comparaison après."]],
          slides: [
            { title: "Petit et limité dans le temps", bullets: ["Deux semaines, une ou deux personnes", "Apprendre à peu de frais avant de dépenser plus"] },
            { title: "Mesurer avant et après", bullets: ["Temps passé, tâches faites", "Erreurs ou plaintes"] },
            { title: "Règles du pilote", bullets: ["Quelles tâches utilisent l'IA et qui vérifie", "Aucune donnée privée dans l'outil", "Quoi faire quand l'IA se trompe"] }
          ],
          tryIt: "Rédigez un plan de pilote pour votre gain rapide : personnes, dates, chiffres de départ, règles et format du journal quotidien. Si possible, menez une version d'essai d'une journée et notez les chiffres.",
          youCanNow: "planifier et mener un petit pilote d'IA avec des règles et des chiffres avant-après.",
          quickCheck: [
            { objective: "O5", q: "Combien de temps dure un petit pilote d'IA typique dans ce cours ?", options: ["Un an", "Six mois", "Deux semaines", "Une heure"], answer: 2, why: "Deux semaines avec une ou deux personnes suffisent souvent pour apprendre à peu de frais." },
            { objective: "O5", q: "Vous allez commencer un pilote demain. Que devez-vous faire d'abord ?", options: ["Noter les chiffres de départ pendant quelques jours", "Acheter l'offre la plus chère", "Donner à l'outil les coordonnées de tous les clients", "Dire au personnel d'arrêter de vérifier ce que produit l'IA"], answer: 0, why: "Une situation de départ permet de comparer l'avant et l'après." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer les résultats et décider de la suite",
          minutes: 5,
          goal: "Comparer les résultats du pilote à la situation de départ et recommander d'étendre, de modifier ou d'arrêter.",
          text: [
            "À la fin du pilote, comparez. Le temps a-t-il baissé ? La qualité s'est-elle maintenue ou améliorée ? Les clients ou le personnel ont-ils remarqué une différence ? Les chiffres comptent, mais demandez aussi aux personnes qui l'ont utilisé ce qui a aidé et ce qui a gêné.",
            "Attention aux coûts cachés : le temps passé à corriger les erreurs de l'IA, la confusion du personnel, ou des clients qui n'ont pas aimé le changement. Un outil qui fait gagner 3 heures mais cause 2 heures de corrections ne fait gagner qu'une heure.",
            "Faites une recommandation claire. Étendez si cela a marché. Modifiez si cela a marché en partie. Arrêtez si cela n'a pas marché, et dites ce que vous avez appris. Arrêter un pilote n'est pas un échec ; cela vous a évité une plus grosse erreur."
          ],
          steps: ["Mettez côte à côte les chiffres de départ et ceux du pilote.", "Retirez le temps passé à corriger les erreurs de l'IA.", "Posez deux questions aux utilisateurs : qu'est-ce qui a aidé, qu'est-ce qui a gêné.", "Recommandez d'étendre, de modifier ou d'arrêter, en trois phrases."],
          words: [["Coût caché", "un coût facile à oublier, comme le temps passé à corriger des erreurs."], ["Recommandation", "votre conseil sur la suite, avec vos raisons."]],
          slides: [
            { title: "Comparer honnêtement", bullets: ["Temps, qualité, réaction des clients", "Interroger les utilisateurs"] },
            { title: "Compter les coûts cachés", bullets: ["Temps passé à corriger l'IA", "Confusion ou clients mécontents"] },
            { title: "Décider", bullets: ["Étendre, modifier ou arrêter", "Arrêter un pilote est une leçon, pas un échec"] }
          ],
          tryIt: "Tâche finale : mettez vos chiffres avant-après dans un tableau (réels ou issus de votre journée d'essai), retirez les coûts cachés, et rédigez une recommandation en trois phrases à joindre à votre note de projet d'une page.",
          youCanNow: "trouver, justifier, tester et évaluer un projet d'IA dans une entreprise ou une organisation.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi demander aux personnes qui ont utilisé l'outil d'IA ce qui les a gênées ?", options: ["Pour les accuser", "Parce que les chiffres ne servent jamais à rien", "Pour allonger le pilote", "Pour trouver des problèmes que les chiffres ne montrent pas forcément"], answer: 3, why: "Les utilisateurs peuvent nommer des coûts et des problèmes cachés que les chiffres ne montrent pas." },
            { objective: "O6", q: "Le pilote a fait gagner du temps, mais des clients se sont plaints des nouvelles réponses. Que recommandez-vous ?", options: ["L'étendre tout de suite à tout le monde", "Le modifier, par exemple en ajoutant une relecture par le personnel, et le tester de nouveau", "Cacher les plaintes", "Arrêter de mesurer"], answer: 1, why: "Si le pilote a marché en partie, modifiez-le et testez de nouveau." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Défendre le projet et le prouver",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui a sa place dans une note de projet IA ?", options: ["Les mots de passe du personnel", "La liste de tous les outils d'IA jamais créés", "Les numéros de téléphone des clients", "Les risques et qui vérifie le travail de l'IA"], answer: 3, why: "Les risques et les contrôles sont l'une des six parties." },
          { objective: "O5", q: "Qu'est-ce que la situation de départ ?", options: ["Les chiffres avant un changement, qui servent de comparaison", "Seulement un terme de sport", "Le prix de l'IA", "Le rapport final"], answer: 0, why: "On compare les résultats du pilote à la situation de départ." },
          { objective: "O5", q: "Quelle est une bonne règle de pilote ?", options: ["Laisser l'IA tout envoyer sans vérification", "Ne rien mesurer", "Ne jamais mettre de données privées de clients dans l'outil d'IA", "Le mener d'abord pendant trois ans"], answer: 2, why: "Garder les données privées hors de l'outil est une règle clé." },
          { objective: "O6", q: "L'IA a fait gagner 3 heures mais le personnel a passé 2 heures à corriger ses erreurs. Quel est le vrai gain ?", options: ["5 heures", "3 heures", "Rien ne compte", "1 heure"], answer: 3, why: "Les coûts cachés se retirent du gain." },
          { objective: "O6", q: "Le pilote n'a pas fait gagner de temps. Que recommander ?", options: ["L'étendre à toute l'entreprise", "Cacher les résultats", "L'arrêter ou le modifier, et noter ce que vous avez appris", "Acheter une offre plus chère sans tester"], answer: 2, why: "Des résultats honnêtes guident l'étape suivante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA en entreprise : stratégies et applications",
    questions: [
      { objective: "O1", q: "L'IA générative est une IA qui :", options: ["Ne fait que des calculs", "Crée du texte, des images ou d'autres contenus à partir d'une demande", "Remplace tous les travailleurs", "Ne fonctionne que hors ligne"], answer: 1, why: "Elle génère du contenu à partir d'une demande." },
      { objective: "O1", q: "Lequel est un bon usage de l'IA dans une petite entreprise ?", options: ["Résumer les avis clients pour trouver les plaintes fréquentes", "Décider seule du salaire des employés", "Donner des conseils juridiques aux clients", "Signer des chèques"], answer: 0, why: "Résumer est un point fort de l'IA." },
      { objective: "O1", q: "Qui doit prendre les décisions finales sur des personnes ou de l'argent ?", options: ["L'IA", "Personne", "Une personne", "Le vendeur du logiciel"], answer: 2, why: "L'IA rédige ; les personnes décident." },
      { objective: "O2", q: "Un audit du temps liste :", options: ["Les tâches et le temps que prend chacune", "Les anniversaires des employés", "Seulement les prix des logiciels", "Les abonnés sur les réseaux sociaux"], answer: 0, why: "Il montre où passe le temps." },
      { objective: "O2", q: "Quelle tâche est une candidate classique pour l'IA ?", options: ["Une inspection de bâtiment ponctuelle", "Serrer la main d'un nouveau client", "Signer un bail", "Écrire des e-mails semblables encore et encore"], answer: 3, why: "Les tâches d'écriture répétées conviennent à l'IA." },
      { objective: "O2", q: "15 tâches par semaine de 20 minutes chacune, cela fait :", options: ["5 heures", "15 heures", "20 heures", "35 minutes"], answer: 0, why: "15 x 20 = 300 minutes = 5 heures." },
      { objective: "O3", q: "Quand on note une idée d'IA, le « risque » désigne :", options: ["Le prix de l'outil", "La probabilité et le coût que quelque chose tourne mal", "À quel point c'est amusant", "Combien de gens l'aiment"], answer: 1, why: "Le risque concerne les erreurs et leur coût." },
      { objective: "O3", q: "Quel est le meilleur premier projet d'IA ?", options: ["L'IA décide qui reçoit des services", "L'IA choisit quels employés licencier", "L'IA donne des conseils médicaux", "L'IA rédige des réponses aux e-mails courants, une personne relit"], answer: 3, why: "C'est forte valeur, faible effort et faible risque." },
      { objective: "O3", q: "Pourquoi vérifier ce qu'un outil d'IA fait des données ?", options: ["Les données privées des clients ou donateurs doivent être protégées", "Cela change la police", "Ce n'est pas important", "Seulement pour les grandes entreprises"], answer: 0, why: "La vie privée compte pour toute organisation." },
      { objective: "O4", q: "Une note de projet doit être :", options: ["Longue de cinquante pages", "Rédigée sans chiffres", "Courte, environ une page, avec de vrais chiffres", "Cachée aux décideurs"], answer: 2, why: "Les gens occupés lisent des documents courts et clairs." },
      { objective: "O4", q: "Lequel est un « contrôle » ?", options: ["Acheter plus d'outils d'IA", "Éteindre l'ordinateur", "Ignorer les erreurs", "Une personne qui relit le travail de l'IA avant l'envoi"], answer: 3, why: "Les contrôles réduisent le risque." },
      { objective: "O4", q: "L'IA rédige votre note de projet. Votre rôle est de :", options: ["L'envoyer sans la lire", "Retirer tous les chiffres", "Vérifier chaque chiffre et chaque fait", "Ajouter de faux gains"], answer: 2, why: "C'est vous qui fournissez et vérifiez les faits." },
      { objective: "O5", q: "Un pilote est :", options: ["Un déploiement dans toute l'entreprise", "Un petit test limité dans le temps", "Un type de modèle d'IA", "Un contrat permanent"], answer: 1, why: "Les pilotes permettent d'apprendre à peu de frais." },
      { objective: "O5", q: "Quand noter les chiffres de départ ?", options: ["Avant le début du pilote", "Seulement après la fin", "Jamais", "Un an plus tard"], answer: 0, why: "Il faut les chiffres d'avant pour comparer." },
      { objective: "O5", q: "Qu'est-ce qui ne doit JAMAIS entrer dans un outil d'IA pendant un pilote ?", options: ["Une question d'exemple", "Un brouillon d'e-mail général", "Les numéros bancaires et mots de passe des clients", "Vos horaires d'ouverture"], answer: 2, why: "Les informations privées et financières restent dehors." },
      { objective: "O5", q: "Un journal quotidien pendant un pilote vous aide à :", options: ["Vous rappeler ce qui a marché et ce qui a mal tourné", "Cacher les problèmes", "Éviter de mesurer", "Sauter le bilan"], answer: 0, why: "Les notes rendent le bilan final exact." },
      { objective: "O6", q: "Lequel est un coût caché ?", options: ["Le prix affiché de l'outil", "La date de début du pilote", "Le nombre d'utilisateurs", "Le temps passé à corriger les erreurs de l'IA"], answer: 3, why: "Corriger les erreurs est facile à oublier." },
      { objective: "O6", q: "En plus des chiffres, que recueillir à la fin d'un pilote ?", options: ["Les mots de passe des utilisateurs", "Ce que les utilisateurs disent avoir aidé ou gêné", "Leurs adresses personnelles", "Rien"], answer: 1, why: "L'avis des utilisateurs explique les chiffres." },
      { objective: "O6", q: "Un pilote a marché en partie. Une recommandation sensée est :", options: ["L'étendre partout d'un coup", "Le modifier et le tester de nouveau", "Le cacher", "Ne plus jamais essayer l'IA"], answer: 1, why: "Un succès partiel veut dire ajuster et retester." },
      { objective: "O6", q: "Arrêter un pilote qui n'a pas marché, c'est :", options: ["Toujours un échec", "Contraire à la loi", "Impossible", "Une leçon utile qui a évité une plus grosse erreur"], answer: 3, why: "Les pilotes existent pour apprendre à peu de frais." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      2,
      4,
      5,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Tâche et outil",
        objective: "O3",
        notYet: "La tâche est à haut risque, comme des décisions d'embauche, ou aucun outil n'est nommé.",
        meets: "Une tâche répétée et moins risquée, un outil d'IA nommé, et toute donnée privée signalée.",
        exceeds: "Montre les notes de valeur, d'effort et de risque qui ont mené à ce choix."
      },
      {
        name: "Note de projet",
        objective: "O4",
        notYet: "Des parties manquent, ou il n'y a pas de chiffres.",
        meets: "Une page avec le problème, la solution, le bénéfice, le coût, les risques et contrôles, et une mesure de réussite.",
        exceeds: "Chaque chiffre vient de l'analyse du temps et se vérifie facilement."
      },
      {
        name: "Estimation du temps gagné",
        objective: "O2",
        notYet: "Le gain est deviné, sans analyse du temps.",
        meets: "Le gain s'appuie sur la fréquence de la tâche et sa durée.",
        exceeds: "Estime aussi le temps nécessaire pour vérifier le travail de l'IA."
      },
      {
        name: "Pilote et situation de départ",
        objective: "O5",
        notYet: "Pas de situation de départ, ou le pilote n'avait pas de règles.",
        meets: "Chiffres de départ et de fin notés, avec des règles sur les tâches, qui vérifie et ce qui ne doit jamais être saisi.",
        exceeds: "Un journal quotidien montre ce qui a marché et ce qui a mal tourné."
      },
      {
        name: "Recommandation",
        objective: "O6",
        notYet: "Pas de recommandation claire, ou elle ignore les chiffres.",
        meets: "Trois phrases qui recommandent d'étendre, de modifier ou d'arrêter, à partir des chiffres avant et après.",
        exceeds: "Retire le temps passé à corriger les erreurs de l'IA et inclut ce que les utilisateurs ont dit."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Organisations qui mènent un pilote dans les 30 jours (questionnaire de suivi)",
      "Heures gagnées par semaine sur la tâche testée, selon l'organisation",
      "Organisations qui étendent, modifient ou arrêtent leur pilote à partir des résultats mesurés"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini), ou l'outil que l'organisation utilise déjà",
      "Un tableur (Google Sheets ou Excel) pour l'analyse du temps et les chiffres du pilote",
      "Environ 60 minutes pour les leçons et les contrôles, plus un pilote de deux semaines ou une version d'essai d'une journée"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; construisez un exemple d'analyse du temps sur un écran partagé.",
      "Demandez aux apprenants d'apporter la vraie liste des tâches d'une semaine dans leur organisation.",
      "Avant tout pilote, revoyez les règles pour qu'aucun détail privé de client, d'employé ou de donateur n'entre dans les outils d'IA.",
      "Invitez les apprenants à présenter leur note de projet d'une page au groupe pour recevoir des retours.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
