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
  chapters: [
    {
      name: "Chapitre 1 : Concevoir des flux de travail intelligents",
      lessons: [
        {
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
          youCanNow: "décrire toute automatisation comme un déclencheur suivi d'actions, et dire où l'IA pourrait aider."
        },
        {
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
          youCanNow: "cartographier un flux de travail et décider quelles étapes automatiser, lesquelles l'IA peut rédiger et lesquelles restent humaines."
        },
        {
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
          youCanNow: "concevoir une automatisation avec une étape d'IA, un point de contrôle humain et des règles sûres sur les données."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir des flux de travail intelligents",
        questions: [
          { q: "Dans « Quand un formulaire est envoyé, ajouter une ligne dans un tableur », quel est le déclencheur ?", options: ["Ajouter une ligne", "Le tableur", "Un formulaire est envoyé", "L'e-mail"], answer: 2, why: "Le déclencheur est l'événement qui lance l'automatisation." },
          { q: "Qu'apporte une étape d'IA à une automatisation ?", options: ["La capacité de lire, trier, résumer ou rédiger", "De l'électricité gratuite", "Des paiements automatiques à n'importe qui", "Rien"], answer: 0, why: "Les étapes d'IA gèrent des tâches de langage comme trier et rédiger." },
          { q: "Quelle étape est la meilleure candidate à une automatisation complète ?", options: ["Décider d'accepter une demande de logement", "Réconforter un client contrarié", "Licencier un employé", "Recopier les réponses d'un formulaire dans un tableur"], answer: 3, why: "Recopier de façon répétée selon des règles est idéal à automatiser." },
          { q: "Que veut dire « personne dans la boucle » ?", options: ["Une personne est coincée dans une boucle", "Une personne vérifie ou approuve avant que l'automatisation continue", "L'automatisation tourne sans personne", "Un type de déclencheur"], answer: 1, why: "Cela garde une personne aux commandes là où les erreurs comptent." },
          { q: "Qu'est-ce qui ne doit jamais passer par une étape d'IA ?", options: ["Un résumé général de demande", "Les numéros de carte des clients", "Le mot « Question »", "Les horaires d'ouverture"], answer: 1, why: "Les données de paiement sont privées et risquées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire, tester et faire tourner",
      lessons: [
        {
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
          youCanNow: "construire une automatisation de base formulaire-tableur-e-mail avec des outils sans code."
        },
        {
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
          youCanNow: "tester une automatisation avec des données d'exemple, noter les résultats et corriger ce qui échoue."
        },
        {
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
          youCanNow: "concevoir, construire, tester et faire tourner une automatisation avec IA sous le contrôle d'une personne."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire, tester et faire tourner",
        questions: [
          { q: "Quelle est l'automatisation la plus simple à construire sans outil supplémentaire ?", options: ["Un bras robotisé", "Une application mobile sur mesure", "Un serveur payant", "Google Forms qui enregistre les réponses dans Google Sheets"], answer: 3, why: "Les formulaires peuvent enregistrer seuls les réponses dans un tableur." },
          { q: "Quand faut-il ajouter l'étape d'IA ?", options: ["Une fois que le flux de base marche", "Avant tout le reste", "Jamais", "Seulement le week-end"], answer: 0, why: "On construit simple d'abord, puis on ajoute l'IA." },
          { q: "Quelles données utiliser pour les tests ?", options: ["Les numéros de carte de vrais clients", "De vrais dossiers de patients", "Des entrées d'exemple inventées", "Des mots de passe"], answer: 2, why: "Tester avec des données d'exemple protège les vraies personnes." },
          { q: "L'étape d'IA renvoie de longues phrases alors que vous vouliez un seul mot. Quelle est la correction ?", options: ["Supprimer l'automatisation", "L'ignorer", "Ajouter un deuxième formulaire", "Préciser le prompt : « Réponds par exactement un mot »"], answer: 3, why: "Des prompts plus clairs donnent des résultats d'IA plus prévisibles." },
          { q: "Pourquoi rédiger une fiche d'instructions d'une page ?", options: ["Pour la ralentir", "C'est obligatoire par la loi", "Pour que quelqu'un d'autre puisse faire tourner ou arrêter l'automatisation", "Pour partager des mots de passe"], answer: 2, why: "Elle permet de garder l'automatisation en marche si le responsable part." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Automatisation par l'IA et flux de travail intelligents",
    questions: [
      { q: "L'automatisation, c'est :", options: ["Embaucher plus de personnel", "Un logiciel qui fait des étapes à votre place sans personne à chaque fois", "Travailler plus longtemps", "Acheter un robot"], answer: 1, why: "Les automatisations font des étapes toutes seules." },
      { q: "Un e-mail qui arrive et lance une automatisation est :", options: ["Un déclencheur", "Un filtre", "Un champ", "Un historique des exécutions"], answer: 0, why: "L'événement de départ est le déclencheur." },
      { q: "« Envoyer un e-mail de confirmation » dans une automatisation est :", options: ["Un déclencheur", "Un prompt", "Une action", "Un responsable"], answer: 2, why: "Les actions sont ce qui se passe après le déclencheur." },
      { q: "Zapier appelle une automatisation :", options: ["Un Zap", "Un flux", "Un scénario", "Une fiche recette"], answer: 0, why: "Le terme de Zapier est Zap." },
      { q: "Quelle tâche vaut mieux laisser à une personne ?", options: ["Classer un reçu", "Envoyer un rappel", "Recopier les données d'un formulaire", "Décider si quelqu'un a droit à une aide"], answer: 3, why: "Les décisions sur des personnes demandent un jugement humain." },
      { q: "Une carte du flux de travail liste :", options: ["Seulement le résultat final", "Chaque étape, qui la fait, l'outil et le temps", "Les salaires des employés", "Les adresses des bureaux"], answer: 1, why: "Elle montre comment la tâche se fait aujourd'hui." },
      { q: "« Brouillon IA plus vérification humaine » convient à quelle étape ?", options: ["Ajouter une ligne dans une feuille", "Rédiger une réponse à un client", "Enregistrer un fichier", "Lancer l'automatisation"], answer: 1, why: "Les messages aux clients doivent être vérifiés avant l'envoi." },
      { q: "Un bon prompt d'IA dans une automatisation est :", options: ["Vague, comme « fais quelque chose »", "Vide", "Un mot de passe", "Précis, comme « Réponds par un seul mot : Devis, Question ou Réclamation »"], answer: 3, why: "Des prompts précis donnent des résultats prévisibles." },
      { q: "Où placer un point de contrôle humain ?", options: ["Partout où une erreur ferait du tort, comme les messages aux clients", "Nulle part", "Seulement au déclencheur", "Seulement après la suppression de l'automatisation"], answer: 0, why: "Les points de contrôle attrapent les erreurs coûteuses." },
      { q: "Les règles sur les données de votre conception disent :", options: ["Quelle police utiliser", "Qui reçoit une prime", "Ce qui passe, où c'est stocké et ce qui ne passe jamais par l'IA", "Rien"], answer: 2, why: "Elles protègent les informations privées." },
      { q: "Une question ou une case de formulaire s'appelle :", options: ["Un déclencheur", "Un Zap", "Un filtre", "Un champ"], answer: 3, why: "Chaque case est un champ." },
      { q: "Les offres gratuites des outils sans code :", options: ["Sont illimitées pour toujours", "Coûtent toujours 1 000 $", "Ont des limites ; consultez la page des tarifs", "N'existent pas"], answer: 2, why: "Les offres changent, donc consultez la page officielle des tarifs." },
      { q: "Connecter des applications dans un outil d'automatisation veut dire :", options: ["Brancher des câbles", "Donner à une application la permission de travailler avec une autre", "Partager publiquement votre mot de passe", "Acheter de nouveaux ordinateurs"], answer: 1, why: "Les connexions sont des permissions entre applications." },
      { q: "Combien de cas de test, au minimum, le cours conseille-t-il ?", options: ["Cinq", "Un", "Zéro", "Cinq cents"], answer: 0, why: "Cinq cas couvrent les entrées normales et pièges." },
      { q: "Lequel est un cas de test piège ?", options: ["Seulement une entrée parfaitement normale", "Aucune entrée, jamais testé", "Un formulaire avec un champ vide", "Votre mot de passe"], answer: 2, why: "Les champs vides cassent souvent les automatisations." },
      { q: "Un filtre dans une automatisation :", options: ["Ne laisse continuer que certains éléments", "Nettoie l'écran", "Supprime le tableur", "Lance l'automatisation"], answer: 0, why: "Les filtres contrôlent quels éléments passent." },
      { q: "Lors de la première mise en service, vous devez :", options: ["L'activer pour tout le monde et ne jamais vérifier", "Supprimer le journal de tests", "Retirer le point de contrôle humain", "Commencer petit et vérifier les résultats chaque jour"], answer: 3, why: "Commencer petit limite les dégâts en cas de problème." },
      { q: "L'historique des exécutions montre :", options: ["Votre historique de navigation", "Chaque fois que l'automatisation a tourné et si cela a marché", "Les heures des employés", "Les mots de passe des clients"], answer: 1, why: "Il aide à repérer les échecs." },
      { q: "Quelle est une raison courante de panne d'une automatisation ?", options: ["Le soleil s'est couché", "Un mot de passe ou un nom de champ a changé", "Trop de clients satisfaits", "Le logo a changé de couleur"], answer: 1, why: "Les changements dans les applications connectées cassent les automatisations." },
      { q: "Chaque automatisation doit avoir :", options: ["Personne de responsable", "Un accès illimité à toutes les données", "Un emplacement secret", "Un responsable qui surveille les alertes d'erreur"], answer: 3, why: "Un responsable la garde en bonne santé." }
    ]
  }
};
