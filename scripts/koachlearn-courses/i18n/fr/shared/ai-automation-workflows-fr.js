"use strict";

// Koach Learn course (shared), French translation of "AI Automation and Smart Workflows". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-automation-workflows-fr",
  lang: "fr",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Automatisation par l'IA et flux de travail intelligents",
  skills: "Cartographier un flux de travail, Repérer ce qui peut être automatisé, Concevoir des automatisations déclencheur-action, Ajouter une étape d'IA, Construire et tester une automatisation, La surveiller et la réparer",
  outcome: "cartographier une tâche répétée, concevoir une automatisation avec un déclencheur, des actions et une étape d'IA, la construire dans un outil sans code, la tester avec des données d'exemple, et garder une personne dans la boucle là où les erreurs compteraient.",
  about: [
    "L'automatisation, c'est un logiciel qui fait les étapes ennuyeuses à votre place : recopier les réponses d'un formulaire dans un tableur, envoyer un e-mail de confirmation, classer un reçu, rappeler une échéance. Ajouter l'IA permet aussi à l'automatisation de lire, trier et écrire, par exemple résumer une demande ou rédiger une réponse.",
    "Ce cours s'adresse aux propriétaires de petites entreprises, au personnel et aux bénévoles d'associations, et aux travailleurs qui veulent une compétence appréciée des employeurs. Exemples : une entreprise de nettoyage qui gère des demandes de devis, une association qui inscrit des bénévoles, et un assistant de bureau qui traite des factures.",
    "Vous cartographierez une vraie tâche, concevrez l'automatisation sur papier, puis la construirez dans un outil sans code comme Zapier, Microsoft Power Automate ou Make, ou avec les fonctions intégrées de Google Forms et Sheets. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant », un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez une automatisation qui fonctionne pour une organisation réelle ou fictive : par exemple, un formulaire de demande qui enregistre chaque réponse dans un tableur, utilise une étape d'IA pour résumer et trier la demande, et envoie par e-mail un brouillon de réponse à un membre du personnel pour approbation. Documentez la carte du flux de travail, le déclencheur et les actions, cinq essais avec leurs résultats, et qui vérifie le résultat.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises, des responsables administratifs et leur personnel, et des coordinateurs d'associations ou d'églises qui gèrent chaque semaine les mêmes formulaires, e-mails, inscriptions et rappels.",
    startingPoint: "Ils utilisent l'e-mail, les tableurs et les formulaires en ligne, et ont parfois essayé un assistant d'IA. La plupart n'ont jamais construit d'automatisation ni relié deux applications, et n'ont aucune expérience du code.",
    gap: "Des heures partent à copier, classer, relancer et confirmer à la main, et des choses passent entre les mailles du filet. Les apprenants doivent concevoir et construire une automatisation sans code et sûre avec une étape d'IA, la tester, et garder une personne aux commandes là où une erreur ferait du tort, pour gagner du temps sans envoyer de mauvais messages ni laisser fuiter de données.",
    constraints: [
      "Niveau de lecture : mots simples ; pas de code",
      "Appareils : un ordinateur est nécessaire pour construire l'automatisation",
      "Coût : les offres gratuites et les essais ont des limites ; les outils et les prix changent, donc les apprenants vérifient chaque page de tarifs",
      "Vie privée : aucun numéro de carte, de sécurité sociale, détail de santé ou mot de passe ne passe par une étape d'IA ; tests uniquement avec des données inventées",
      "Temps : des leçons de 5 minutes, environ 60 minutes en tout, plus le temps de construire et de tester"
    ],
    prerequisites: "Aucun. Être à l'aise avec Google Forms ou Microsoft Forms et un tableur aide."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une automatisation de tous les jours", action: "repérer son déclencheur, ses actions et la place d'une étape d'IA", standard: "en ayant au moins 4 réponses justes sur 5" },
    { id: "O2", condition: "Pour une tâche faite au moins chaque semaine", action: "cartographier chaque étape avec qui la fait, l'outil et le temps, et marquer chaque étape : automatiser, brouillon de l'IA plus vérification humaine, ou garder humaine", standard: "avec une estimation du temps gagné chaque semaine" },
    { id: "O3", condition: "Avant d'utiliser le moindre outil", action: "rédiger une conception d'automatisation avec le déclencheur, les actions, le prompt d'IA, les points de vérification humaine et les règles sur les données", standard: "avec une approbation humaine partout où une erreur ferait du tort" },
    { id: "O4", condition: "Avec un formulaire, un tableur et un outil sans code", action: "construire une automatisation qui enregistre les réponses, lance une étape d'IA et envoie un brouillon pour approbation", standard: "pour que le flux de base marche avant d'ajouter l'étape d'IA" },
    { id: "O5", condition: "À partir de votre automatisation construite", action: "la tester avec cinq entrées d'exemple, dont des cas pièges, et corriger ce qui casse", standard: "en n'utilisant que des données inventées, avec chaque échec corrigé et retesté" },
    { id: "O6", condition: "Quand l'automatisation est mise en service", action: "surveiller l'historique des exécutions, régler une alerte d'erreur, nommer un responsable et rédiger une fiche d'instructions d'une page", standard: "pour qu'une autre personne puisse la faire tourner ou l'arrêter" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Concevoir des flux de travail intelligents",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que sont l'automatisation et les flux de travail avec IA",
          minutes: 4,
          goal: "Expliquer les déclencheurs, les actions et la place d'une étape d'IA.",
          text: [
            "Toute automatisation a la même forme. Un déclencheur est l'événement qui la lance : un formulaire est envoyé, un e-mail arrive, une date arrive. Les actions sont ce qui se passe ensuite : ajouter une ligne dans un tableur, envoyer un e-mail, créer une tâche.",
            "Une automatisation simple suit des règles fixes : si un formulaire arrive, le recopier dans la feuille. Une étape d'IA ajoute un travail qui ressemble à du jugement : lire un message et décider s'il s'agit d'une réclamation, d'une question ou d'un client potentiel ; le résumer en deux phrases ; rédiger une réponse polie.",
            "Chaque outil emploie ses propres mots. Zapier appelle une automatisation un Zap, Power Automate l'appelle un flux (flow), et Make l'appelle un scénario. L'idée est la même : quand ceci se produit, faire cela."
          ],
          words: [["Automatisation", "un logiciel qui fait des étapes à votre place sans qu'une personne intervienne à chaque fois."], ["Déclencheur", "l'événement qui lance une automatisation."], ["Action", "une étape que fait l'automatisation après le déclencheur."], ["Flux de travail", "la suite d'étapes qui permet d'accomplir une tâche."]],
          slides: [
            { title: "Quand ceci se produit, faire cela", bullets: ["Déclencheur : l'événement qui lance", "Actions : ce qui se passe ensuite"] },
            { title: "Ajouter une étape d'IA", bullets: ["Trier : réclamation, question ou client potentiel", "Résumer en deux phrases", "Rédiger une réponse qu'une personne vérifie"] },
            { title: "Même idée, noms différents", bullets: ["Zapier : Zap", "Power Automate : flux", "Make : scénario"] }
          ],
          tryIt: "Écrivez trois automatisations « quand ceci se produit, faire cela » que vous aimeriez avoir au travail, à la maison ou dans un groupe dont vous faites partie. Entourez celle qui pourrait utiliser une étape d'IA.",
          youCanNow: "décrire toute automatisation comme un déclencheur suivi d'actions, et dire où l'IA pourrait aider.",
          quickCheck: [
            { objective: "O1", q: "Comment Power Automate appelle-t-il une automatisation ?", options: ["Un Zap", "Un scénario", "Un flux", "Une macro"], answer: 2, why: "Power Automate l'appelle un flux ; Zapier l'appelle un Zap et Make l'appelle un scénario." },
            { objective: "O1", q: "Vous voulez que chaque nouveau message soit classé comme réclamation, question ou piste commerciale. Quelle partie s'en charge ?", options: ["Une étape d'IA", "Le déclencheur", "Une ligne du tableur", "L'adresse e-mail"], answer: 0, why: "Lire un message et le classer est un travail de jugement qui convient à une étape d'IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cartographier un flux de travail et trouver quoi automatiser",
          minutes: 5,
          goal: "Cartographier une tâche répétée étape par étape et choisir les étapes à automatiser.",
          text: [
            "Avant de construire, cartographiez la tâche telle qu'elle se fait aujourd'hui. Écrivez chaque étape, qui la fait, avec quel outil et en combien de temps. L'inscription d'un bénévole peut donner : lire l'e-mail, recopier les informations dans un tableur, vérifier le planning, envoyer un e-mail de bienvenue, ajouter un rappel dans l'agenda.",
            "Les bonnes étapes à automatiser sont répétées, fondées sur des règles et ennuyeuses : recopier, classer, rappeler, confirmer. Les étapes qui demandent du jugement, de la gentillesse ou une décision sur la vie de quelqu'un doivent rester à une personne, ou n'utiliser l'IA que pour rédiger un brouillon.",
            "Marquez chaque étape : automatiser, brouillon de l'IA avec vérification humaine, ou garder humaine. Cette carte annotée est votre conception."
          ],
          steps: ["Choisissez une tâche faite au moins chaque semaine.", "Écrivez chaque étape dans l'ordre, avec qui, quel outil et combien de temps.", "Marquez chaque étape : automatiser, brouillon IA plus vérification humaine, ou garder humaine.", "Estimez le temps gagné chaque semaine."],
          words: [["Carte du flux de travail", "une liste ou un dessin, étape par étape, de la façon dont une tâche se fait."], ["Personne dans la boucle", "une personne vérifie ou approuve avant que l'automatisation continue."]],
          slides: [
            { title: "Cartographier d'abord", bullets: ["Chaque étape dans l'ordre", "Qui, quel outil, combien de temps"] },
            { title: "Bon à automatiser", bullets: ["Recopier et classer", "Rappels et confirmations", "Étapes répétées fondées sur des règles"] },
            { title: "Marquer chaque étape", bullets: ["Automatiser", "Brouillon IA plus vérification humaine", "Garder humaine"] }
          ],
          tryIt: "Cartographiez une tâche répétée d'au moins cinq étapes. Marquez chaque étape automatiser, brouillon IA plus vérification humaine, ou garder humaine, et estimez le temps gagné par semaine.",
          youCanNow: "cartographier un flux de travail et décider quelles étapes automatiser, lesquelles l'IA peut rédiger et lesquelles restent humaines.",
          quickCheck: [
            { objective: "O2", q: "Quelle étape est une bonne candidate pour être entièrement automatisée ?", options: ["Décider qui reçoit une bourse", "Réconforter un bénévole contrarié", "Choisir un nouvel employé", "Ajouter un rappel au calendrier après une inscription"], answer: 3, why: "Les étapes répétées qui suivent une règle, comme les rappels, sont bonnes à automatiser." },
            { objective: "O2", q: "Votre carte contient « répondre à une famille qui demande de l'aide pour le loyer ». Comment la marquez-vous ?", options: ["Entièrement automatisée", "Brouillon de l'IA plus vérification humaine, ou garder humaine", "Supprimer l'étape", "Ne pas répondre"], answer: 1, why: "Les étapes qui demandent de la bienveillance ou touchent la vie de quelqu'un restent à une personne, ou l'IA ne fait qu'un brouillon." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Concevoir l'automatisation sur papier",
          minutes: 5,
          goal: "Rédiger une conception complète : déclencheur, actions, prompt d'IA, vérifications et règles sur les données.",
          text: [
            "Concevez sur papier avant de toucher à un outil. Écrivez le déclencheur, chaque action dans l'ordre, et le prompt exact s'il y a une étape d'IA, par exemple : « Lis cette demande. Réponds par un seul mot : Devis, Question ou Réclamation. Puis écris un résumé en deux phrases. »",
            "Ajoutez un point de contrôle humain partout où une erreur ferait du tort : tout ce qui est envoyé à un client, tout mouvement d'argent, ou toute décision sur une personne. L'automatisation peut rédiger un brouillon puis attendre l'approbation.",
            "Écrivez des règles sur les données : quelles informations passent par l'automatisation, où elles sont stockées, et ce qui ne doit jamais passer par une étape d'IA, comme les numéros de carte, de sécurité sociale, les informations de santé ou les mots de passe. Vérifiez ce que chaque outil connecté fait de vos données."
          ],
          steps: ["Écrivez le déclencheur.", "Listez chaque action dans l'ordre.", "Écrivez le prompt exact de chaque étape d'IA.", "Ajoutez une approbation humaine là où les erreurs feraient du tort.", "Écrivez les règles sur les données : ce qui passe, où c'est stocké, ce qui ne passe jamais par l'IA."],
          words: [["Prompt", "l'instruction que vous donnez à une étape d'IA."], ["Point de contrôle", "un moment où une personne vérifie avant que l'automatisation continue."]],
          slides: [
            { title: "Concevoir avant de construire", bullets: ["Déclencheur et actions dans l'ordre", "Le prompt exact de l'IA"] },
            { title: "Points de contrôle humains", bullets: ["Tout ce qui est envoyé aux clients", "Les mouvements d'argent", "Les décisions sur des personnes"] },
            { title: "Règles sur les données", bullets: ["Ce qui passe et où c'est stocké", "Jamais de carte, sécurité sociale, santé ou mot de passe dans l'IA"] }
          ],
          tryIt: "Rédigez une conception d'une page pour votre automatisation : déclencheur, actions, prompt d'IA, point de contrôle humain et règles sur les données.",
          youCanNow: "concevoir une automatisation avec une étape d'IA, un point de contrôle humain et des règles sûres sur les données.",
          quickCheck: [
            { objective: "O3", q: "Que disent les règles sur les données dans une conception ?", options: ["La police de caractères de l'e-mail", "Ce qui passe, où c'est stocké et ce qui ne passe jamais par l'IA", "La vitesse de l'ordinateur", "Qui a dessiné le logo"], answer: 1, why: "Les règles sur les données couvrent les informations qui circulent, où elles sont stockées et ce qui ne passe jamais par l'IA." },
            { objective: "O3", q: "Votre automatisation va envoyer des réponses aux clients. Où ajoutez-vous un point de vérification humaine ?", options: ["Nulle part : ça fait gagner du temps", "Une seule fois par an", "Après l'envoi de la réponse", "Avant l'envoi de la réponse, pour qu'une personne approuve le brouillon"], answer: 3, why: "Tout ce qui est envoyé à un client doit attendre l'approbation d'une personne." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir des flux de travail intelligents",
        questions: [
          { objective: "O1", q: "Dans « Quand un formulaire est envoyé, ajouter une ligne dans un tableur », quel est le déclencheur ?", options: ["Ajouter une ligne", "Le tableur", "Un formulaire est envoyé", "L'e-mail"], answer: 2, why: "Le déclencheur est l'événement qui lance l'automatisation." },
          { objective: "O1", q: "Qu'apporte une étape d'IA à une automatisation ?", options: ["La capacité de lire, trier, résumer ou rédiger", "De l'électricité gratuite", "Des paiements automatiques à n'importe qui", "Rien"], answer: 0, why: "Les étapes d'IA gèrent des tâches de langage comme trier et rédiger." },
          { objective: "O2", q: "Quelle étape est la meilleure candidate à une automatisation complète ?", options: ["Décider d'accepter une demande de logement", "Réconforter un client contrarié", "Licencier un employé", "Recopier les réponses d'un formulaire dans un tableur"], answer: 3, why: "Recopier de façon répétée selon des règles est idéal à automatiser." },
          { objective: "O3", q: "Que veut dire « personne dans la boucle » ?", options: ["Une personne est coincée dans une boucle", "Une personne vérifie ou approuve avant que l'automatisation continue", "L'automatisation tourne sans personne", "Un type de déclencheur"], answer: 1, why: "Cela garde une personne aux commandes là où les erreurs comptent." },
          { objective: "O3", q: "Qu'est-ce qui ne doit jamais passer par une étape d'IA ?", options: ["Un résumé général de demande", "Les numéros de carte des clients", "Le mot « Question »", "Les horaires d'ouverture"], answer: 1, why: "Les données de paiement sont privées et risquées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire, tester et faire tourner",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construire votre première automatisation",
          minutes: 6,
          goal: "Construire une automatisation simple d'un formulaire vers un tableur puis vers un e-mail.",
          text: [
            "Commencez par la version la plus simple qui fonctionne. Google Forms peut enregistrer chaque réponse dans une feuille Google Sheets sans aucun outil supplémentaire, et Microsoft Forms peut envoyer les réponses vers Excel. C'est déjà une automatisation.",
            "Pour ajouter des actions, utilisez un outil sans code comme Zapier, Power Automate ou Make. La plupart ont des offres gratuites ou des essais avec des limites ; consultez la page des tarifs de chaque outil, car les offres changent. Connectez vos comptes, choisissez le déclencheur (nouvelle réponse au formulaire ou nouvelle ligne du tableur), puis ajoutez des actions (envoyer un e-mail, créer une tâche).",
            "Ajoutez l'étape d'IA en dernier, une fois que le flux de base marche. Beaucoup d'outils ont une action d'IA intégrée ou se connectent à un service d'IA. Collez le prompt de votre conception et envoyez son résultat à l'action suivante, par exemple un brouillon d'e-mail qui attend l'approbation d'une personne."
          ],
          steps: ["Créez un formulaire avec les champs nécessaires.", "Reliez-le à un tableur.", "Dans un outil sans code, définissez le déclencheur : nouvelle réponse ou nouvelle ligne.", "Ajoutez une action : envoyer un e-mail ou créer une tâche.", "Ajoutez l'étape d'IA avec votre prompt, et envoyez son résultat vers un brouillon à approuver."],
          words: [["Outil sans code", "un logiciel qui permet de construire sans écrire de code."], ["Connecter", "donner à une application la permission de travailler avec une autre."], ["Champ", "une question ou une case d'un formulaire."]],
          slides: [
            { title: "Commencer simple", bullets: ["Google Forms enregistre dans Sheets", "Microsoft Forms peut envoyer vers Excel"] },
            { title: "Ajouter des actions", bullets: ["Zapier, Power Automate ou Make", "Les offres gratuites et essais ont des limites", "Consulter chaque page des tarifs"] },
            { title: "Ajouter l'IA en dernier", bullets: ["Une fois le flux de base fonctionnel", "Coller votre prompt", "Le résultat va dans un brouillon à approuver"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Construisez la première partie de votre automatisation : un formulaire relié à un tableur. Si possible, ajoutez une action dans un outil sans code, comme un e-mail à vous-même pour chaque nouvelle réponse.",
          youCanNow: "construire une automatisation de base formulaire-tableur-e-mail avec des outils sans code.",
          quickCheck: [
            { objective: "O4", q: "Quel montage simple est déjà une automatisation, sans outil en plus ?", options: ["Microsoft Forms qui envoie les réponses dans Excel", "Recopier à la main les réponses du formulaire dans un tableur", "Imprimer chaque réponse", "Lire les réponses sur votre téléphone"], answer: 0, why: "Microsoft Forms peut envoyer automatiquement les réponses dans Excel." },
            { objective: "O4", q: "Votre flux de base, du formulaire à l'e-mail, marche. Qu'ajoutez-vous ensuite ?", options: ["Cinq applications de plus d'un coup", "De vrais numéros de carte de clients", "L'étape d'IA avec le prompt de votre conception", "Rien : supprimer le flux"], answer: 2, why: "Ajoutez l'étape d'IA en dernier, une fois que le flux de base marche." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tester avec des données d'exemple",
          minutes: 5,
          goal: "Tester une automatisation avec des entrées d'exemple normales et pièges, et corriger ce qui casse.",
          text: [
            "N'activez jamais une automatisation pour de vraies personnes avant qu'elle ait réussi les tests. Utilisez des entrées inventées, pas de vraies données de clients.",
            "Testez cinq cas : une entrée normale, un champ vide, un message très long, une entrée mal orthographiée ou inhabituelle, et une que l'étape d'IA pourrait mal classer. Vérifiez chaque étape : la ligne est-elle apparue, l'e-mail est-il allé au bon endroit, l'IA a-t-elle bien classé et résumé ?",
            "Tenez un journal de tests : entrée, résultat attendu, résultat obtenu, réussi ou échoué, correction. Corrections fréquentes : rendre un champ du formulaire obligatoire, préciser le prompt de l'IA (« Réponds par exactement un mot »), ou ajouter un filtre pour que seules certaines entrées continuent."
          ],
          steps: ["Écrivez cinq entrées d'exemple, dont des pièges.", "Faites passer chacune dans l'automatisation.", "Vérifiez le résultat de chaque étape.", "Notez réussi ou échoué dans un journal de tests.", "Corrigez et retestez les échecs."],
          words: [["Cas de test", "une entrée d'exemple qui sert à vérifier que quelque chose fonctionne."], ["Filtre", "une règle qui ne laisse continuer que certains éléments dans une automatisation."]],
          slides: [
            { title: "Tester avant la mise en service", bullets: ["Seulement des données d'exemple inventées", "Jamais de vraies données clients pour les tests"] },
            { title: "Cinq cas de test", bullets: ["Normal, champ vide, très long", "Mal orthographié ou inhabituel", "Un que l'IA pourrait mal classer"] },
            { title: "Noter et corriger", bullets: ["Champs obligatoires et filtres", "Prompts d'IA plus précis", "Retester après chaque correction"] }
          ],
          tryIt: "Faites passer cinq entrées d'exemple dans votre automatisation, dont au moins deux pièges. Tenez un journal de tests et corrigez un problème.",
          youCanNow: "tester une automatisation avec des données d'exemple, noter les résultats et corriger ce qui échoue.",
          quickCheck: [
            { objective: "O5", q: "Que contient le journal de tests d'une automatisation ?", options: ["Les vraies coordonnées des clients", "Seulement les tests réussis", "Le prix de l'outil", "L'entrée, le résultat attendu, le résultat obtenu, réussi ou échoué, et la correction"], answer: 3, why: "Un journal de tests note ce qui est entré, ce qui devait se passer, ce qui s'est passé, et la correction." },
            { objective: "O5", q: "Une entrée de test avec un champ e-mail vide fait casser le flux. Quelle est une correction courante ?", options: ["Rendre le champ e-mail obligatoire dans le formulaire", "Activer l'automatisation quand même", "Retirer l'étape d'e-mail", "Tester avec de vraies données de clients"], answer: 0, why: "Rendre le champ obligatoire empêche les entrées vides de casser le flux." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faire tourner, surveiller et améliorer",
          minutes: 5,
          goal: "Activer l'automatisation en sécurité, la surveiller, et savoir quoi faire quand elle échoue.",
          text: [
            "Activez-la d'abord pour un petit groupe, par exemple un seul formulaire ou une seule semaine. Vérifiez les résultats chaque jour au début. La plupart des outils ont un historique des exécutions qui liste chaque exécution et indique si elle a réussi.",
            "Les automatisations tombent en panne : un mot de passe change, un champ est renommé, une offre gratuite atteint sa limite, ou l'étape d'IA se met à classer bizarrement. Mettez en place une alerte d'erreur vers votre e-mail, et nommez un responsable qui la surveille.",
            "Rédigez une fiche d'instructions d'une page : ce que fait l'automatisation, où elle se trouve, qui en est responsable et comment l'arrêter. Si le responsable part, quelqu'un d'autre peut la faire tourner. Revoyez-la tous les quelques mois en vous demandant : fait-elle encore gagner du temps ?"
          ],
          steps: ["Activez-la pour un petit groupe ou une semaine.", "Vérifiez l'historique des exécutions chaque jour au début.", "Mettez en place une alerte d'erreur et nommez un responsable.", "Rédigez une fiche d'instructions d'une page.", "Revoyez-la tous les quelques mois."],
          words: [["Historique des exécutions", "la liste de chaque fois que l'automatisation a tourné et si cela a marché."], ["Alerte d'erreur", "un message qui vous dit qu'une automatisation a échoué."]],
          slides: [
            { title: "Démarrer petit", bullets: ["Un formulaire ou une semaine", "Vérifier les résultats chaque jour au début"] },
            { title: "Pourquoi les automatisations cassent", bullets: ["Mots de passe ou noms de champs changés", "Limites d'offre atteintes", "Le tri de l'IA dérive"] },
            { title: "La garder en bonne santé", bullets: ["Alertes d'erreur et un responsable", "Fiche d'instructions d'une page", "Revoir tous les quelques mois"] }
          ],
          tryIt: "Tâche finale : terminez votre automatisation avec son étape d'IA et l'approbation humaine, faites cinq essais, puis rédigez la fiche d'instructions d'une page avec la carte du flux de travail, le déclencheur et les actions, les résultats des tests et le responsable.",
          youCanNow: "concevoir, construire, tester et faire tourner une automatisation avec IA sous le contrôle d'une personne.",
          quickCheck: [
            { objective: "O6", q: "Que fait une alerte d'erreur ?", options: ["Elle accélère l'automatisation", "Elle envoie un e-mail au responsable quand une exécution échoue", "Elle supprime les anciennes exécutions", "Elle change votre mot de passe"], answer: 1, why: "Une alerte d'erreur prévient tout de suite le responsable quand quelque chose casse." },
            { objective: "O6", q: "La personne qui a construit votre automatisation s'en va. Qu'est-ce qui la fait continuer à tourner ?", options: ["Espérer que rien ne casse", "L'arrêter pour de bon", "Une fiche d'instructions d'une page et un nouveau responsable qui surveille les alertes", "Changer tous les mots de passe sans prévenir personne"], answer: 2, why: "La fiche d'instructions et un responsable nommé permettent à quelqu'un d'autre de la faire tourner ou de l'arrêter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire, tester et faire tourner",
        questions: [
          { objective: "O4", q: "Quelle est l'automatisation la plus simple à construire sans outil supplémentaire ?", options: ["Un bras robotisé", "Une application mobile sur mesure", "Un serveur payant", "Google Forms qui enregistre les réponses dans Google Sheets"], answer: 3, why: "Les formulaires peuvent enregistrer seuls les réponses dans un tableur." },
          { objective: "O4", q: "Quand faut-il ajouter l'étape d'IA ?", options: ["Une fois que le flux de base marche", "Avant tout le reste", "Jamais", "Seulement le week-end"], answer: 0, why: "On construit simple d'abord, puis on ajoute l'IA." },
          { objective: "O5", q: "Quelles données utiliser pour les tests ?", options: ["Les numéros de carte de vrais clients", "De vrais dossiers de patients", "Des entrées d'exemple inventées", "Des mots de passe"], answer: 2, why: "Tester avec des données d'exemple protège les vraies personnes." },
          { objective: "O5", q: "L'étape d'IA renvoie de longues phrases alors que vous vouliez un seul mot. Quelle est la correction ?", options: ["Supprimer l'automatisation", "L'ignorer", "Ajouter un deuxième formulaire", "Préciser le prompt : « Réponds par exactement un mot »"], answer: 3, why: "Des prompts plus clairs donnent des résultats d'IA plus prévisibles." },
          { objective: "O6", q: "Pourquoi rédiger une fiche d'instructions d'une page ?", options: ["Pour la ralentir", "C'est obligatoire par la loi", "Pour que quelqu'un d'autre puisse faire tourner ou arrêter l'automatisation", "Pour partager des mots de passe"], answer: 2, why: "Elle permet de garder l'automatisation en marche si le responsable part." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Automatisation par l'IA et flux de travail intelligents",
    questions: [
      { objective: "O1", q: "L'automatisation, c'est :", options: ["Embaucher plus de personnel", "Un logiciel qui fait des étapes à votre place sans personne à chaque fois", "Travailler plus longtemps", "Acheter un robot"], answer: 1, why: "Les automatisations font des étapes toutes seules." },
      { objective: "O1", q: "Un e-mail qui arrive et lance une automatisation est :", options: ["Un déclencheur", "Un filtre", "Un champ", "Un historique des exécutions"], answer: 0, why: "L'événement de départ est le déclencheur." },
      { objective: "O1", q: "« Envoyer un e-mail de confirmation » dans une automatisation est :", options: ["Un déclencheur", "Un prompt", "Une action", "Un responsable"], answer: 2, why: "Les actions sont ce qui se passe après le déclencheur." },
      { objective: "O1", q: "Zapier appelle une automatisation :", options: ["Un Zap", "Un flux", "Un scénario", "Une fiche recette"], answer: 0, why: "Le terme de Zapier est Zap." },
      { objective: "O2", q: "Quelle tâche vaut mieux laisser à une personne ?", options: ["Classer un reçu", "Envoyer un rappel", "Recopier les données d'un formulaire", "Décider si quelqu'un a droit à une aide"], answer: 3, why: "Les décisions sur des personnes demandent un jugement humain." },
      { objective: "O2", q: "Une carte du flux de travail liste :", options: ["Seulement le résultat final", "Chaque étape, qui la fait, l'outil et le temps", "Les salaires des employés", "Les adresses des bureaux"], answer: 1, why: "Elle montre comment la tâche se fait aujourd'hui." },
      { objective: "O2", q: "« Brouillon IA plus vérification humaine » convient à quelle étape ?", options: ["Ajouter une ligne dans une feuille", "Rédiger une réponse à un client", "Enregistrer un fichier", "Lancer l'automatisation"], answer: 1, why: "Les messages aux clients doivent être vérifiés avant l'envoi." },
      { objective: "O3", q: "Un bon prompt d'IA dans une automatisation est :", options: ["Vague, comme « fais quelque chose »", "Vide", "Un mot de passe", "Précis, comme « Réponds par un seul mot : Devis, Question ou Réclamation »"], answer: 3, why: "Des prompts précis donnent des résultats prévisibles." },
      { objective: "O3", q: "Où placer un point de contrôle humain ?", options: ["Partout où une erreur ferait du tort, comme les messages aux clients", "Nulle part", "Seulement au déclencheur", "Seulement après la suppression de l'automatisation"], answer: 0, why: "Les points de contrôle attrapent les erreurs coûteuses." },
      { objective: "O3", q: "Les règles sur les données de votre conception disent :", options: ["Quelle police utiliser", "Qui reçoit une prime", "Ce qui passe, où c'est stocké et ce qui ne passe jamais par l'IA", "Rien"], answer: 2, why: "Elles protègent les informations privées." },
      { objective: "O4", q: "Une question ou une case de formulaire s'appelle :", options: ["Un déclencheur", "Un Zap", "Un filtre", "Un champ"], answer: 3, why: "Chaque case est un champ." },
      { objective: "O4", q: "Les offres gratuites des outils sans code :", options: ["Sont illimitées pour toujours", "Coûtent toujours 1 000 $", "Ont des limites ; consultez la page des tarifs", "N'existent pas"], answer: 2, why: "Les offres changent, donc consultez la page officielle des tarifs." },
      { objective: "O4", q: "Connecter des applications dans un outil d'automatisation veut dire :", options: ["Brancher des câbles", "Donner à une application la permission de travailler avec une autre", "Partager publiquement votre mot de passe", "Acheter de nouveaux ordinateurs"], answer: 1, why: "Les connexions sont des permissions entre applications." },
      { objective: "O5", q: "Combien de cas de test, au minimum, le cours conseille-t-il ?", options: ["Cinq", "Un", "Zéro", "Cinq cents"], answer: 0, why: "Cinq cas couvrent les entrées normales et pièges." },
      { objective: "O5", q: "Lequel est un cas de test piège ?", options: ["Seulement une entrée parfaitement normale", "Aucune entrée, jamais testé", "Un formulaire avec un champ vide", "Votre mot de passe"], answer: 2, why: "Les champs vides cassent souvent les automatisations." },
      { objective: "O5", q: "Un filtre dans une automatisation :", options: ["Ne laisse continuer que certains éléments", "Nettoie l'écran", "Supprime le tableur", "Lance l'automatisation"], answer: 0, why: "Les filtres contrôlent quels éléments passent." },
      { objective: "O6", q: "Lors de la première mise en service, vous devez :", options: ["L'activer pour tout le monde et ne jamais vérifier", "Supprimer le journal de tests", "Retirer le point de contrôle humain", "Commencer petit et vérifier les résultats chaque jour"], answer: 3, why: "Commencer petit limite les dégâts en cas de problème." },
      { objective: "O6", q: "L'historique des exécutions montre :", options: ["Votre historique de navigation", "Chaque fois que l'automatisation a tourné et si cela a marché", "Les heures des employés", "Les mots de passe des clients"], answer: 1, why: "Il aide à repérer les échecs." },
      { objective: "O6", q: "Quelle est une raison courante de panne d'une automatisation ?", options: ["Le soleil s'est couché", "Un mot de passe ou un nom de champ a changé", "Trop de clients satisfaits", "Le logo a changé de couleur"], answer: 1, why: "Les changements dans les applications connectées cassent les automatisations." },
      { objective: "O6", q: "Chaque automatisation doit avoir :", options: ["Personne de responsable", "Un accès illimité à toutes les données", "Un emplacement secret", "Un responsable qui surveille les alertes d'erreur"], answer: 3, why: "Un responsable la garde en bonne santé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Carte du flux de travail",
        objective: "O2",
        notYet: "Des étapes manquent, ou aucune étape n'est marquée.",
        meets: "Chaque étape avec qui, l'outil et le temps, marquée : automatiser, brouillon de l'IA plus vérification humaine, ou garder humaine.",
        exceeds: "Inclut une estimation du temps gagné chaque semaine."
      },
      {
        name: "Déclencheur, actions et étape d'IA",
        objective: "O4",
        notYet: "L'automatisation ne part pas de son déclencheur, ou l'étape d'IA manque.",
        meets: "Un déclencheur qui marche, des actions dans l'ordre et une étape d'IA qui résume et trie la demande.",
        exceeds: "Utilise un filtre ou un prompt précis d'un seul mot pour que les résultats soient réguliers."
      },
      {
        name: "Vérification humaine et règles sur les données",
        objective: "O3",
        notYet: "Les réponses partent sans approbation, ou des données privées passent par l'étape d'IA.",
        meets: "Une personne approuve le brouillon de réponse, et les règles sur les données disent ce qui ne passe jamais par l'IA.",
        exceeds: "Note ce que chaque outil connecté fait des données."
      },
      {
        name: "Cinq essais",
        objective: "O5",
        notYet: "Moins de cinq tests, de vraies données utilisées, ou des échecs non corrigés.",
        meets: "Cinq entrées de test inventées, dont des cas pièges, notées avec réussi ou échoué et les corrections.",
        exceeds: "Chaque échec a été retesté et a réussi."
      },
      {
        name: "Responsable et instructions",
        objective: "O6",
        notYet: "Pas de responsable nommé ni d'instructions.",
        meets: "Un responsable nommé, une alerte d'erreur et une fiche d'instructions d'une page.",
        exceeds: "La fiche dit comment arrêter l'automatisation et quand elle sera revue."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Automatisations qui tournent encore, avec un responsable, 60 jours plus tard (questionnaire de suivi)",
      "Heures gagnées par semaine sur la tâche automatisée, selon l'organisation",
      "Organisations qui ne signalent aucun mauvais message envoyé ni aucune donnée privée exposée par l'automatisation"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet",
      "Google Forms et Sheets, ou Microsoft Forms et Excel",
      "Un outil d'automatisation sans code comme Zapier, Power Automate ou Make (vérifiez les limites actuelles de l'offre gratuite)",
      "Du papier ou un document pour la carte du flux de travail, la conception et le journal de tests",
      "Environ 60 minutes pour les leçons et les contrôles, plus le temps de construire et de tester"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; construisez en direct un flux du formulaire au tableur sur un écran partagé.",
      "Faites concevoir les apprenants sur papier et faites relire leur conception par un binôme avant qu'ils ouvrent un outil.",
      "Utilisez seulement des entrées d'exemple inventées pour les tests ; jamais de vraies données de clients, de bénéficiaires ou de donateurs.",
      "Vérifiez que chaque automatisation qui envoie des messages à des personnes a une étape d'approbation humaine.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
