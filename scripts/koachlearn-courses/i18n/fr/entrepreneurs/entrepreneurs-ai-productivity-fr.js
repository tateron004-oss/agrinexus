"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-productivity.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-productivity-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "L'IA pour la productivité de l'entreprise",
  skills: "Planifier une semaine avec l'IA, Vider une boîte de réception plus vite, Écrire des modèles réutilisables, Rédiger une procédure standard, Mesurer le temps gagné",
  outcome: "utiliser l'IA pour planifier la semaine de votre entreprise, traiter les e-mails plus vite avec des modèles de réponse réutilisables, transformer une tâche répétée en procédure écrite étape par étape, et mesurer le temps gagné.",
  about: [
    "La plupart des chefs d'entreprise ne manquent pas d'idées ; ils manquent d'heures. Ce cours s'adresse aux patrons qui font tout eux-mêmes et veulent récupérer un peu de temps.",
    "Vous utiliserez un assistant IA gratuit pour planifier votre semaine par priorité, trier et répondre aux e-mails plus vite, créer des modèles pour les messages que vous écrivez encore et encore, et écrire une procédure simple pour qu'un aide (ou vous-même plus tard) fasse un travail de la même façon à chaque fois. Vous mesurerez ensuite le temps gagné.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche à faire sur votre vraie entreprise. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin."
  ],
  finalTask: "Créez un « kit pour gagner du temps » pour votre entreprise : une semaine planifiée avec l'IA et vos trois priorités principales, trois modèles de réponse réutilisables, une procédure écrite pour une tâche répétée, et un relevé de temps simple avant-après qui montre les minutes gagnées sur une tâche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises qui font eux-mêmes la plupart des tâches et manquent de temps, comme des prestataires de services indépendants, des commerçants et des personnes avec une activité complémentaire.",
    startingPoint: "Ils tiennent une liste de tâches, répondent aux e-mails et font les mêmes tâches chaque semaine, surtout de mémoire. Certains ont utilisé un assistant IA pour écrire, mais pas pour planifier, créer des modèles ou décrire leur travail par écrit.",
    gap: "Les entrepreneurs perdent des heures à cause de semaines non planifiées, d'e-mails traités lentement et de messages répétés, et chaque tâche dépend de leur mémoire. Ils doivent planifier par priorité, réutiliser des modèles, écrire leurs procédures et mesurer si l'IA fait vraiment gagner du temps, pour que les heures libérées servent à développer l'entreprise.",
    constraints: [
      "Des mots simples ; aucune formation technique nécessaire",
      "Appareils : un téléphone ou un ordinateur avec l'e-mail, un agenda et un assistant IA gratuit",
      "Temps : environ cinq minutes par leçon, plus des tâches faites pendant la vraie semaine de travail",
      "Aucune adresse de client, aucun numéro de carte ni aucun détail privé de contrat collé dans l'IA",
      "Les questions juridiques, de licence et d'argent vont à l'organisme officiel ou à un professionnel"
    ],
    prerequisites: "« Introduction à l'IA pour les entrepreneurs », ou un peu d'expérience pour demander de l'aide à un assistant IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste désordonnée des tâches de la semaine prochaine", action: "utiliser l'IA pour regrouper les tâches et créer un plan de semaine en blocs de temps avec vos trois priorités", standard: "avec le plan inscrit dans votre agenda" },
    { id: "O2", condition: "À partir de la boîte de réception du jour", action: "trier les e-mails en groupes et envoyer des réponses rédigées par l'IA que vous vérifiez d'abord", standard: "sans coller aucun détail privé de client dans l'IA" },
    { id: "O3", condition: "À partir des trois questions que vos clients posent le plus", action: "créer pour chacune un modèle de réponse réutilisable avec des blancs à remplir", standard: "avec vos vrais faits vérifiés et les modèles enregistrés là où vous les trouvez facilement" },
    { id: "O4", condition: "À partir d'une tâche que vous répétez chaque semaine", action: "écrire une procédure numérotée étape par étape avec une liste de contrôle", standard: "testée une fois en la suivant mot pour mot, puis corrigée" },
    { id: "O5", condition: "À partir d'un long document professionnel sans ses détails privés", action: "obtenir de l'IA un résumé des dates, des frais et des obligations et le comparer avec l'original", standard: "en lisant vous-même les parties sur l'argent et le droit" },
    { id: "O6", condition: "Pour une tâche que vous faites chaque semaine", action: "noter votre temps avant et après l'utilisation de l'IA et calculer les minutes gagnées par semaine", standard: "en comptant le temps passé à vérifier et à corriger le travail de l'IA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier et communiquer plus vite",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planifier votre semaine par priorité",
          minutes: 5,
          goal: "Utiliser l'IA pour transformer une liste de tâches désordonnée en plan de semaine avec trois priorités.",
          text: [
            "Une longue liste de tâches cache ce qui compte. L'IA est douée pour trier. Collez votre liste (sans informations privées sur les clients) et demandez-lui de regrouper les tâches et de proposer les trois qui aideront le plus votre entreprise cette semaine.",
            "Une façon simple de juger : les tâches qui rapportent de l'argent ou gardent les clients satisfaits passent généralement en premier ; celles qui peuvent attendre ou être confiées à quelqu'un viennent après. C'est vous qui décidez de l'ordre final, car vous connaissez votre entreprise.",
            "Demandez ensuite un plan en blocs de temps : « Place ces tâches dans ma semaine. Je travaille de 8 h à 16 h, du lundi au vendredi, et je fais des livraisons le mardi et le jeudi matin. » Reportez le plan dans votre agenda."
          ],
          steps: ["Écrivez sous forme de liste toutes les tâches que vous avez en tête.", "Demandez à l'IA de regrouper les tâches et de proposer les trois principales de la semaine.", "Choisissez vos propres trois priorités.", "Demandez à l'IA de placer les tâches en blocs de temps autour de vos horaires fixes.", "Recopiez les blocs dans votre agenda."],
          words: [["Priorité", "une tâche qui compte le plus en ce moment."], ["Bloc de temps", "une période fixée dans votre agenda pour un type de travail."]],
          slides: [
            { title: "Les longues listes cachent l'essentiel", bullets: ["Collez votre liste dans l'IA (sans infos privées)", "Demandez-lui de regrouper les tâches", "Demandez les trois priorités de la semaine"] },
            { title: "Ce qui passe généralement en premier", bullets: ["Les tâches qui rapportent de l'argent", "Les tâches qui gardent les clients satisfaits", "Vous décidez de l'ordre final"] },
            { title: "En blocs de temps", bullets: ["Donnez à l'IA vos horaires et vos tâches fixes", "Obtenez un plan de semaine", "Mettez-le dans votre agenda"] }
          ],
          tryIt: "Écrivez votre liste complète de tâches pour la semaine prochaine, demandez à un assistant IA de la regrouper et de proposer trois priorités, choisissez vos propres trois priorités, et obtenez un plan en blocs de temps que vous mettez dans votre agenda.",
          youCanNow: "transformer une liste désordonnée en plan de semaine avec des priorités claires et des blocs de temps.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un bloc de temps ?", options: ["Une période fixée dans votre agenda pour un type de travail", "Une liste de toutes les tâches", "Une pause entre deux réunions", "Une date limite donnée par un client"], answer: 0, why: "Les blocs de temps protègent du temps pour vos priorités." },
            { objective: "O1", q: "L'IA propose vos trois tâches prioritaires, mais l'une est une corvée peu utile. Que faites-vous ?", options: ["Accepter la liste de l'IA", "Choisir vous-même vos trois priorités", "Faire toutes les tâches en même temps", "Ne pas planifier cette semaine"], answer: 1, why: "C'est vous qui décidez des priorités finales ; l'IA ne fait que proposer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vider votre boîte de réception plus vite",
          minutes: 5,
          goal: "Utiliser l'IA pour trier les e-mails et rédiger des réponses que vous vérifiez avant d'envoyer.",
          text: [
            "Les e-mails dévorent des heures. Triez d'abord : à répondre maintenant (clients, argent, urgent), à répondre plus tard, à lire seulement, et à supprimer ou se désabonner. Beaucoup d'applications de messagerie peuvent aussi filtrer automatiquement les messages dans des dossiers ou des libellés.",
            "Pour les réponses, l'IA peut transformer vos notes rapides en message poli : « Réponds à un client qui demande de déplacer sa réservation du vendredi. Dis oui, propose samedi 10 h ou lundi 14 h, et reste bref et chaleureux. » Gmail et Outlook peuvent aussi proposer des suggestions d'IA intégrées selon votre abonnement.",
            "Ne collez jamais dans un outil de conversation l'e-mail complet d'un client avec son numéro de téléphone, son adresse ou ses données de carte. Résumez plutôt sa question avec vos mots. Et lisez toujours une réponse avant de l'envoyer."
          ],
          steps: ["Triez votre boîte de réception : à répondre maintenant, plus tard, à lire seulement, à supprimer.", "Pour chaque e-mail à répondre maintenant, écrivez une note d'une ligne sur ce que vous voulez dire.", "Demandez à l'IA de transformer la note en réponse courte.", "Lisez, corrigez et envoyez-la vous-même."],
          words: [["Filtre", "une règle de messagerie qui range automatiquement les messages dans un dossier ou un libellé."], ["Se désabonner", "le lien qui empêche une entreprise de continuer à vous envoyer des e-mails."]],
          slides: [
            { title: "Triez d'abord", bullets: ["À répondre maintenant : clients, argent, urgent", "À répondre plus tard", "À lire seulement, ou supprimer et se désabonner"] },
            { title: "L'IA transforme les notes en réponses", bullets: ["Écrivez ce que vous voulez dire en une ligne", "Demandez une réponse courte et chaleureuse", "L'IA intégrée peut aider dans Gmail ou Outlook"] },
            { title: "Restez prudent", bullets: ["Résumez vous-même la question du client", "Pas de téléphone, d'adresse ni de données de carte", "Lisez avant d'envoyer"] }
          ],
          tryIt: "Triez la boîte de réception du jour dans les quatre groupes. Pour deux e-mails à répondre maintenant, écrivez une note d'une ligne, faites rédiger la réponse par l'IA, vérifiez-la et envoyez-la. Chronométrez le temps que cela a pris.",
          youCanNow: "trier les e-mails par importance et envoyer plus vite des réponses vérifiées avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O2", q: "Quels e-mails vont dans le groupe « à traiter maintenant » ?", options: ["Les lettres d'information", "Les vieux reçus", "Les clients, l'argent et les urgences", "Les publicités d'autres entreprises"], answer: 2, why: "Les e-mails à traiter maintenant touchent les clients et l'argent." },
            { objective: "O2", q: "L'IA rédige une réponse à un client. Que faites-vous avant de l'envoyer ?", options: ["L'envoyer sans la lire", "Ajouter le numéro de carte du client", "La renvoyer à l'IA", "La lire et corriger ce qui est faux"], answer: 3, why: "Vous vérifiez chaque brouillon de l'IA avant qu'il parte sous votre nom." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Des modèles réutilisables pour les messages que vous écrivez sans cesse",
          minutes: 4,
          goal: "Créer trois modèles de réponse pour les questions que les clients posent le plus.",
          text: [
            "Si vous répondez à la même question chaque semaine (prix, horaires, comment réserver, politique de remboursement), écrivez la réponse une fois et réutilisez-la. L'IA peut vous aider à écrire un modèle clair et amical.",
            "Un bon modèle a des blancs à remplir : « Bonjour [nom], merci de votre question sur [service]. Notre prix pour [taille] est de [prix]. Vous pouvez réserver sur [lien ou numéro]. » Mettez vos vrais faits dans le modèle, et vérifiez-les chaque fois que les prix ou les règles changent.",
            "Enregistrez les modèles là où vous pouvez les retrouver vite : un document, l'application de notes de votre téléphone, ou la fonction de réponses enregistrées que proposent beaucoup d'applications de messagerie et de messagerie professionnelle."
          ],
          steps: ["Listez les cinq questions que les clients posent le plus.", "Choisissez les trois principales.", "Demandez à l'IA un modèle court et amical pour chacune, avec des [blancs].", "Remplissez avec vos vrais faits et vérifiez-les.", "Enregistrez les modèles là où vous pouvez les retrouver vite."],
          words: [["Modèle", "un message tout prêt avec des blancs que vous remplissez à chaque fois."], ["Réponse enregistrée", "une fonction de messagerie qui garde un modèle pour l'utiliser en un clic."]],
          slides: [
            { title: "Écrivez une fois, réutilisez", bullets: ["Prix, horaires, réservation, remboursements", "L'IA vous aide à l'écrire clairement"] },
            { title: "Un bon modèle", bullets: ["Amical et court", "Des [blancs] pour le nom, le service, le prix", "Vos vrais faits, vérifiés"] },
            { title: "Gardez-les à portée de main", bullets: ["Un document ou une application de notes", "Réponses enregistrées dans la messagerie", "À mettre à jour quand les prix changent"] }
          ],
          tryIt: "Notez les trois questions que vos clients posent le plus et utilisez l'IA pour créer un modèle pour chacune. Remplissez avec vos vrais faits et enregistrez-les.",
          youCanNow: "écrire et réutiliser des modèles pour les questions de clients auxquelles vous répondez le plus.",
          quickCheck: [
            { objective: "O3", q: "À quoi servent les blancs comme [nom] dans un modèle ?", options: ["Aux détails que vous remplissez à chaque fois", "Aux mots que l'IA ne doit pas lire", "Aux erreurs à supprimer", "À des liens cachés"], answer: 0, why: "Les blancs permettent de réutiliser un même modèle pour beaucoup de clients." },
            { objective: "O3", q: "Vous avez changé vos horaires d'ouverture. Que faites-vous de vos modèles ?", options: ["Rien", "Mettre à jour et revérifier chaque modèle qui parle des horaires", "Tous les supprimer", "Attendre qu'un client se plaigne"], answer: 1, why: "Les modèles doivent correspondre à vos faits actuels." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier et communiquer plus vite",
        questions: [
          { objective: "O1", q: "Quelles tâches méritent généralement d'être dans vos trois priorités de la semaine ?", options: ["Celles qui sont amusantes", "Celles qui rapportent de l'argent ou gardent les clients satisfaits", "Celles qui prennent 30 secondes", "Celles que quelqu'un d'autre a demandées"], answer: 1, why: "Les tâches liées à l'argent et aux clients font tourner l'entreprise." },
          { objective: "O1", q: "Que dire à l'IA pour obtenir un plan utile en blocs de temps ?", options: ["Rien du tout", "Votre solde bancaire", "Votre mot de passe", "Vos horaires de travail et vos tâches fixes"], answer: 3, why: "L'IA a besoin de vos horaires et de vos engagements fixes pour placer les tâches." },
          { objective: "O2", q: "L'e-mail d'un client contient son adresse et son numéro de carte. Comment obtenir l'aide de l'IA pour répondre ?", options: ["Résumer sa question avec vos mots", "Coller tout l'e-mail", "Le transférer à l'entreprise d'IA", "Ignorer le client"], answer: 0, why: "Résumer garde les infos privées hors de l'outil d'IA." },
          { objective: "O3", q: "Lequel est un bon modèle ?", options: ["« Voir le site »", "Un message différent écrit de zéro à chaque fois", "« Bonjour [nom], notre prix pour [service] est de [prix]. Réservez sur [lien]. »", "Un message avec le numéro de carte d'un client"], answer: 2, why: "Il a des blancs à remplir avec de vrais faits." },
          { objective: "O3", q: "Vos prix ont augmenté. Que devez-vous faire de vos modèles ?", options: ["Tous les supprimer", "Rien", "Les mettre à jour et les revérifier", "Laisser l'IA deviner les nouveaux prix"], answer: 2, why: "Les modèles doivent correspondre à vos faits actuels." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Des systèmes qui font gagner du temps",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rédiger une procédure standard",
          minutes: 5,
          goal: "Transformer une tâche que vous répétez en procédure écrite étape par étape avec l'IA.",
          text: [
            "Une procédure standard (en anglais SOP, standard operating procedure) est une liste écrite d'étapes pour faire un travail de la même façon à chaque fois. Elle permet à un aide de faire le travail sans vous appeler, et elle évite les erreurs quand vous êtes débordé.",
            "Une façon simple d'en faire une : faites le travail une fois en disant ou en tapant chaque étape sous forme de notes rapides. Demandez ensuite à l'IA : « Transforme ces notes en procédure numérotée claire qu'un nouvel aide peut suivre. Ajoute une courte liste de contrôle à la fin. »",
            "Testez la procédure : donnez-la à quelqu'un (ou suivez-la vous-même mot pour mot) et corrigez toute étape confuse ou manquante."
          ],
          steps: ["Choisissez un travail que vous répétez chaque semaine, comme ouvrir la boutique ou emballer une commande.", "Faites-le une fois en prenant des notes rapides de chaque étape.", "Demandez à l'IA de transformer les notes en procédure numérotée avec une liste de contrôle.", "Testez-la en la suivant exactement, ou faites-la essayer par un aide.", "Corrigez les étapes peu claires et enregistrez la version finale."],
          words: [["Procédure standard (SOP)", "des étapes écrites pour faire un travail de la même façon à chaque fois."], ["Liste de contrôle", "une courte liste que l'on coche pour être sûr de n'avoir rien oublié."]],
          slides: [
            { title: "À quoi sert une procédure standard", bullets: ["Même travail, même façon, à chaque fois", "Un aide peut le faire sans vous appeler", "Moins d'erreurs quand vous êtes débordé"] },
            { title: "En créer une avec l'IA", bullets: ["Faites le travail une fois et prenez des notes", "Demandez à l'IA des étapes numérotées et une liste de contrôle"] },
            { title: "Testez-la", bullets: ["Suivez-la mot pour mot", "Ou faites-la essayer par un aide", "Corrigez les étapes confuses ou manquantes"] }
          ],
          tryIt: "Choisissez un travail hebdomadaire, prenez des notes rapides pendant que vous le faites, et demandez à l'IA d'en faire une procédure numérotée avec une liste de contrôle. Testez-la une fois et corrigez-la.",
          youCanNow: "transformer une tâche répétée en procédure écrite et testée.",
          quickCheck: [
            { objective: "O4", q: "À quoi sert une procédure standard ?", options: ["À suivre vos ventes", "À remplacer votre agenda", "À écrire les étapes d'une tâche répétée pour que n'importe qui la fasse de la même façon", "À répondre aux e-mails des clients"], answer: 2, why: "Une procédure standard permet à une aide de faire la tâche sans vous appeler." },
            { objective: "O4", q: "Votre aide suit votre nouvelle procédure et bloque à l'étape 4. Que faites-vous ?", options: ["Accuser votre aide", "Jeter la procédure", "Faire la tâche vous-même pour toujours", "Clarifier l'étape 4 et tester de nouveau"], answer: 3, why: "Le test montre où une procédure doit être corrigée." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Résumés et recherches rapides",
          minutes: 4,
          goal: "Utiliser l'IA pour résumer de longs documents et faire des recherches rapides et vérifiées.",
          text: [
            "Les chefs d'entreprise reçoivent de longs documents : conditions de fournisseurs, règles de subventions, projets de bail, rapports. L'IA peut les résumer : « Résume ceci en 8 puces. Liste les dates, les frais et ce que je dois faire. » Retirez d'abord les informations privées, et lisez les passages originaux qui comptent, surtout ce qui touche à l'argent ou aux obligations légales.",
            "L'IA peut aussi accélérer les recherches : comparer des fournisseurs, expliquer un nouveau terme ou lister les questions à poser à un comptable. Demandez-lui ses sources, puis ouvrez-les vous-même.",
            "Pour les questions juridiques, fiscales ou de licence, utilisez l'IA pour préparer de bonnes questions, puis obtenez la réponse sur le site officiel de l'administration ou auprès d'un professionnel."
          ],
          steps: ["Retirez les informations privées du document.", "Demandez un court résumé avec les dates, les frais et les obligations.", "Lisez les passages originaux sur l'argent ou les obligations légales.", "Pour les recherches, demandez les sources et ouvrez-les vous-même."],
          words: [["Résumé", "une version courte qui garde les points principaux."], ["Conditions", "les règles et modalités d'un accord."]],
          slides: [
            { title: "Résumer de longs documents", bullets: ["Retirez d'abord les infos privées", "Demandez des puces, des dates, des frais et des obligations", "Lisez vous-même les parties sur l'argent et le droit"] },
            { title: "Recherches rapides", bullets: ["Comparer des options, expliquer des termes", "Demandez les sources", "Ouvrez les sources vous-même"] },
            { title: "Droit, impôts, licences", bullets: ["Utilisez l'IA pour préparer vos questions", "Obtenez les réponses de l'administration ou d'un professionnel"] }
          ],
          tryIt: "Prenez un long document d'entreprise que vous avez (sans les informations privées), demandez à l'IA un résumé en 8 puces avec les dates, les frais et les obligations, et comparez-le avec l'original.",
          youCanNow: "obtenir un résumé rapide et vérifié d'un long document d'entreprise.",
          quickCheck: [
            { objective: "O5", q: "Que doit demander une bonne demande de résumé ?", options: ["Les points principaux, plus les dates, les frais et les obligations", "Seulement le titre", "Un poème sur le document", "La phrase la plus longue"], answer: 0, why: "Les dates, les frais et les obligations sont ce sur quoi l'entrepreneur doit agir." },
            { objective: "O5", q: "L'IA résume votre bail et dit qu'il n'y a pas de pénalité de retard. Que faites-vous ?", options: ["La croire", "Vérifier vous-même la partie du bail sur l'argent", "Signer un nouveau bail", "Reposer la même question à l'IA"], answer: 1, why: "Vous lisez vous-même les parties sur l'argent et le droit." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer le temps que vous gagnez",
          minutes: 5,
          goal: "Noter votre temps avant et après l'utilisation de l'IA sur une tâche pour voir si elle aide vraiment.",
          text: [
            "L'IA doit vous faire gagner du temps, pas seulement vous donner l'impression d'être occupé. Mesurez-le. Choisissez une tâche, comme répondre aux questions de réservation ou écrire la publication de la semaine. Notez combien de temps elle prend à l'ancienne, puis avec l'IA, en comptant le temps de vérifier et de corriger.",
            "Multipliez : les minutes gagnées à chaque fois, par le nombre de fois par semaine. Dix minutes gagnées sur une tâche faite 15 fois par semaine, cela fait 150 minutes, soit deux heures et demie.",
            "Si une tâche n'est pas plus rapide avec l'IA, ou demande tellement de corrections que ça n'en vaut pas la peine, arrêtez d'utiliser l'IA pour cette tâche. Mettez le temps gagné dans les tâches qui font grandir votre entreprise."
          ],
          steps: ["Choisissez une tâche que vous faites souvent.", "Chronométrez-la une fois à l'ancienne.", "Chronométrez-la avec l'IA, en comptant la vérification et les corrections.", "Multipliez les minutes gagnées par le nombre de fois par semaine.", "Gardez, changez ou abandonnez l'IA pour cette tâche."],
          words: [["Relevé de temps", "un simple registre du temps que prennent les tâches."]],
          slides: [
            { title: "Mesurez, ne devinez pas", bullets: ["Chronométrez à l'ancienne", "Chronométrez avec l'IA, vérification comprise", "Comparez"] },
            { title: "Faites le calcul", bullets: ["Minutes gagnées x fois par semaine", "10 min x 15 fois = 150 min par semaine"] },
            { title: "Décidez", bullets: ["Plus rapide ? Gardez", "Plus lent ou trop de corrections ? Abandonnez", "Mettez le temps gagné dans la croissance"] }
          ],
          tryIt: "Tâche finale : créez votre kit pour gagner du temps : votre semaine planifiée avec l'IA, vos trois modèles, votre procédure standard et un relevé de temps avant-après pour une tâche avec les minutes gagnées par semaine.",
          youCanNow: "prouver si l'IA vous fait gagner du temps et décider où l'utiliser dans votre entreprise.",
          quickCheck: [
            { objective: "O6", q: "Que doit inclure votre temps « avec l'IA » ?", options: ["Seulement le temps que l'IA a mis à écrire", "Rien ; l'IA est instantanée", "Aussi le temps de vérifier et de corriger le travail de l'IA", "Le temps passé à déjeuner"], answer: 2, why: "Vérifier et corriger font partie du vrai coût en temps." },
            { objective: "O6", q: "Vous gagnez 4 minutes sur une tâche que vous faites 10 fois par semaine. Qu'écrivez-vous dans votre relevé ?", options: ["4 minutes par semaine", "10 minutes par semaine", "14 minutes par semaine", "40 minutes par semaine"], answer: 3, why: "4 minutes multipliées par 10 fois par semaine font 40 minutes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Des systèmes qui font gagner du temps",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'une procédure standard ?", options: ["Une procédure écrite étape par étape pour une tâche répétée", "Un type de facture", "Une publication sur les réseaux sociaux", "Un formulaire fiscal"], answer: 0, why: "Une procédure standard permet de faire un travail de la même façon à chaque fois." },
          { objective: "O4", q: "Comment savoir si votre procédure marche ?", options: ["Demander à l'IA si elle est bonne", "L'imprimer en couleur", "La rallonger", "La suivre mot pour mot ou la faire essayer par un aide"], answer: 3, why: "Le test montre les étapes manquantes ou confuses." },
          { objective: "O5", q: "L'IA a résumé un bail. Quelles parties devez-vous quand même lire vous-même ?", options: ["Rien", "Les parties sur l'argent et les obligations légales", "Seulement le titre", "Les numéros de page"], answer: 1, why: "Les résumés peuvent oublier ou déformer des détails importants." },
          { objective: "O6", q: "Vous gagnez 5 minutes à chaque fois sur une tâche faite 20 fois par semaine. Combien de temps cela fait-il ?", options: ["100 minutes par semaine", "25 minutes par semaine", "5 minutes par semaine", "20 minutes par semaine"], answer: 0, why: "5 x 20 = 100 minutes." },
          { objective: "O6", q: "Utiliser l'IA sur une tâche prend plus de temps à cause de toutes les corrections. Que faire ?", options: ["Utiliser deux outils d'IA en même temps", "Continuer quand même", "Arrêter d'utiliser l'IA pour cette tâche", "Arrêter de vérifier le travail"], answer: 2, why: "N'utilisez l'IA que là où elle fait vraiment gagner du temps." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la productivité de l'entreprise",
    questions: [
      { objective: "O1", q: "La première étape pour planifier une semaine avec l'IA est :", options: ["Acheter une nouvelle application", "Noter toutes les tâches", "Supprimer votre agenda", "Demander à un client"], answer: 1, why: "L'IA ne peut trier que ce que vous listez." },
      { objective: "O1", q: "Quand vous choisissez vos trois priorités, qui décide de l'ordre final ?", options: ["Votre application de messagerie", "L'IA", "Un concurrent", "Vous"], answer: 3, why: "L'IA propose ; vous connaissez votre entreprise." },
      { objective: "O1", q: "Un bloc de temps, c'est :", options: ["Un type d'e-mail", "Une horloge cassée", "Des frais de retard", "Une période fixée dans votre agenda pour un type de travail"], answer: 3, why: "Les blocs de temps protègent le temps des priorités." },
      { objective: "O2", q: "Quel groupe de la boîte de réception passe en premier ?", options: ["Les lettres d'information", "À répondre maintenant : clients, argent, urgent", "Les vieux reçus", "Les publicités"], answer: 1, why: "Les e-mails des clients et d'argent comptent le plus." },
      { objective: "O2", q: "Un filtre de messagerie :", options: ["Envoie de l'argent", "Supprime votre compte", "Range automatiquement les messages dans un dossier", "Écrit les réponses"], answer: 2, why: "Les filtres trient les e-mails sans vous." },
      { objective: "O2", q: "Une façon sûre d'obtenir l'aide de l'IA sur l'e-mail d'un client est de :", options: ["Résumer sa question avec vos mots", "Coller son numéro de carte", "Coller son adresse", "Transférer son mot de passe"], answer: 0, why: "Gardez les infos privées des clients hors des outils d'IA." },
      { objective: "O2", q: "Avant d'envoyer une réponse rédigée par l'IA, vous devez :", options: ["Ajouter une remise au hasard", "L'envoyer sans la lire", "La lire et la corriger", "La copier à tous les clients"], answer: 2, why: "Vous êtes responsable de ce que vous envoyez." },
      { objective: "O3", q: "Les modèles sont surtout utiles pour :", options: ["Les questions que les clients posent sans cesse", "Les litiges juridiques ponctuels", "Les virements bancaires", "Les mots de passe"], answer: 0, why: "Écrivez la réponse une fois et réutilisez-la." },
      { objective: "O3", q: "Les blancs comme [nom] et [prix] dans un modèle sont :", options: ["Des erreurs", "Des endroits à remplir à chaque fois", "Des mots de passe", "Des liens vers l'IA"], answer: 1, why: "Ils permettent à un seul modèle de servir pour beaucoup de clients." },
      { objective: "O3", q: "Où garder vos modèles à portée de main ?", options: ["Dans la conversation avec l'IA avec les données des clients", "Seulement dans votre tête", "Sur un post-it collé sur la porte", "Dans les réponses enregistrées de la messagerie ou une application de notes"], answer: 3, why: "Les réponses enregistrées et les notes les rendent rapides à utiliser." },
      { objective: "O4", q: "Une procédure standard est utile parce que :", options: ["Un aide peut faire le travail de la même façon sans vous appeler", "Elle rallonge les tâches", "Elle remplace les clients", "C'est un formulaire fiscal"], answer: 0, why: "Des étapes écrites rendent le travail reproductible." },
      { objective: "O4", q: "La façon la plus rapide de commencer une procédure standard est de :", options: ["Sauter le test", "Deviner les étapes", "Copier le manuel d'un concurrent", "Faire le travail une fois en prenant des notes, puis demander à l'IA de les organiser"], answer: 3, why: "De vraies notes organisées par l'IA donnent des étapes exactes." },
      { objective: "O4", q: "Une liste de contrôle à la fin d'une procédure standard :", options: ["Remplace les étapes", "Ajoute des frais", "Aide à vérifier que rien n'a été oublié", "Est un contrat juridique"], answer: 2, why: "Cocher les éléments repère les étapes oubliées." },
      { objective: "O5", q: "Avant de demander à l'IA de résumer un contrat fournisseur, vous devez :", options: ["Ajouter vos identifiants bancaires", "Retirer les informations privées", "Le signer", "L'envoyer aux clients"], answer: 1, why: "Gardez les informations privées hors des outils d'IA." },
      { objective: "O5", q: "Une bonne demande de résumé demande :", options: ["Une version plus longue", "Seulement le titre", "Des blagues", "Les points principaux plus les dates, les frais et ce que vous devez faire"], answer: 3, why: "Les dates, les frais et les obligations sont ce sur quoi vous agissez." },
      { objective: "O5", q: "Quand l'IA donne des sources pour une recherche, vous devez :", options: ["Ne jamais les regarder", "Faire aveuglément confiance aux liens", "Les ouvrir et les lire vous-même", "Les partager tout de suite comme des faits"], answer: 2, why: "L'IA peut lister des sources fausses ou inventées." },
      { objective: "O5", q: "Pour une question de licence, l'IA sert le mieux à :", options: ["Préparer des questions pour l'administration officielle ou un professionnel", "Donner la réponse juridique finale", "Faire la demande à votre place", "Payer les frais"], answer: 0, why: "Les sources officielles et les professionnels donnent la réponse finale." },
      { objective: "O6", q: "Quand vous chronométrez avec l'IA, comptez :", options: ["Seulement les secondes que met l'IA à répondre", "Le temps de vérifier et de corriger le travail de l'IA", "Rien", "Votre pause déjeuner"], answer: 1, why: "La vérification fait partie du vrai coût." },
      { objective: "O6", q: "Dix minutes gagnées sur une tâche faite 15 fois par semaine, cela fait :", options: ["10 minutes", "25 minutes", "150 minutes", "1 500 minutes"], answer: 2, why: "10 x 15 = 150 minutes." },
      { objective: "O6", q: "Où doit aller le temps gagné ?", options: ["Dans les tâches qui font grandir votre entreprise", "Dans plus d'e-mails", "Dans l'essai de chaque nouvelle application", "Nulle part"], answer: 0, why: "Le but de gagner du temps est de l'utiliser pour la croissance." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      10,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan de la semaine",
        objective: "O1",
        notYet: "Aucune priorité choisie, ou le plan n'est pas dans l'agenda.",
        meets: "Trois priorités choisies par l'entrepreneur et des blocs de temps dans l'agenda.",
        exceeds: "Les trois priorités sont clairement liées à l'argent ou aux clients, et les tâches fixes sont bloquées en premier."
      },
      {
        name: "Modèles de réponse",
        objective: "O3",
        notYet: "Moins de trois modèles, ou des faits faux.",
        meets: "Trois modèles avec des blancs et des faits vérifiés, enregistrés là où ils sont faciles à trouver.",
        exceeds: "Les modèles servent déjà et ont été mis à jour une fois."
      },
      {
        name: "Procédure",
        objective: "O4",
        notYet: "Des étapes manquent ou la procédure n'a pas été testée.",
        meets: "Des étapes numérotées et une liste de contrôle, testées une fois et corrigées.",
        exceeds: "Une aide l'a suivie sans poser de questions."
      },
      {
        name: "Relevé de temps",
        objective: "O6",
        notYet: "Pas de temps avant et après, ou le temps de vérification est oublié.",
        meets: "Les temps avant et après pour une tâche, vérification comprise, avec les minutes gagnées par semaine.",
        exceeds: "Dit aussi à quoi servira le temps gagné."
      },
      {
        name: "Détails privés",
        objective: "O2",
        notYet: "Des adresses de clients, des numéros de carte ou des détails privés de contrat ont été mis dans l'IA.",
        meets: "Les questions ont été résumées avec les mots de l'entrepreneur ; aucun détail privé partagé.",
        exceeds: "Les détails privés ont aussi été retirés des documents avant de les résumer."
      }
    ]
  },
  evaluation: {
    results: [
      "Les entrepreneurs qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les minutes gagnées par semaine, telles qu'indiquées dans l'enquête de suivi à 30 jours",
      "Les entrepreneurs qui confient une procédure écrite à une aide ou à un membre de la famille dans les 30 jours",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec l'e-mail, un agenda et un assistant IA gratuit",
      "Une application de notes ou du papier pour les modèles, les procédures et le relevé de temps",
      "Un minuteur (l'horloge du téléphone suffit)",
      "Environ 60 minutes pour les leçons et les vérifications, plus des tâches réparties sur une vraie semaine de travail"
    ],
    facilitatorNotes: [
      "Déroulez le cours sur une semaine pour que les entrepreneurs puissent noter de vrais temps avant et après.",
      "Montrez comment résumer l'e-mail d'un client avec vos propres mots au lieu de le coller.",
      "Formez des binômes qui échangent et testent la procédure de l'autre.",
      "Rappelez aux entrepreneurs que les questions juridiques, de licence et d'argent vont à l'organisme officiel ou à un professionnel.",
      "Notez le kit « temps gagné » avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
