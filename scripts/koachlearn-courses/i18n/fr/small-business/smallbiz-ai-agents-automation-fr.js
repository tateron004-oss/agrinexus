"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-agents-automation.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-ai-agents-automation-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "Les agents d'IA pour automatiser votre entreprise",
  skills: "Distinguer les automatisations des agents d'IA, Décomposer une tâche répétitive étape par étape, Concevoir un flux déclencheur-actions, Ajouter une validation humaine, Tester avec des données fictives, Tenir un journal et surveiller",
  outcome: "concevoir, construire et tester en toute sécurité une automatisation simple pour votre entreprise, par exemple transformer une nouvelle demande reçue par formulaire web en une ligne de tableur, un brouillon de réponse et un rappel pour vous, avec une étape de validation humaine avant tout envoi, un test sur des données fictives et un journal que vous vérifiez chaque semaine.",
  about: [
    "Ce cours s'adresse aux patrons de petites entreprises qui refont chaque jour les mêmes tâches sur ordinateur : copier les réponses d'un formulaire dans un tableau, envoyer le même e-mail de suivi, créer des factures, trier les demandes. Les exemples viennent de boutiques, restaurants, salons, entreprises de ménage et de réparation, et petits bureaux.",
    "Vous apprendrez la différence entre une automatisation simple et un agent d'IA, à décomposer une tâche en étapes, à concevoir un flux avec un déclencheur et des actions, et à le construire avec un outil sans code comme Zapier, Make ou Microsoft Power Automate, ou avec les fonctions d'automatisation des outils que vous utilisez déjà. Surtout, vous garderez une personne aux commandes.",
    "Les outils changent souvent leurs écrans et leurs prix, donc nous décrivons quoi faire plutôt que le nom exact des menus ; regardez sur le site de chaque outil son offre gratuite actuelle. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez une automatisation qui fonctionne pour une vraie tâche répétitive : écrivez la carte des étapes, choisissez le déclencheur et les actions, placez une étape de validation humaine avant tout envoi ou paiement, testez avec trois entrées fictives (sans vraies données de clients), corrigez ce qui ne marche pas, et mettez en place un journal simple et une vérification hebdomadaire. Rédigez une description d'une page pour qu'une autre personne puisse la comprendre ou l'arrêter.",
  chapters: [
    {
      name: "Chapitre 1 : Comprendre et concevoir l'automatisation",
      lessons: [
        {
          title: "Automatisations et agents d'IA : quelle différence ?",
          minutes: 5,
          goal: "Expliquer la différence entre une automatisation fixe et un agent d'IA, et quand utiliser chacun.",
          text: [
            "Une automatisation suit des règles fixes que vous définissez : \"Quand un nouveau formulaire est envoyé, ajoute une ligne à mon tableau et envoie-moi un e-mail.\" Elle fait la même chose à chaque fois. Elle est prévisible et facile à vérifier.",
            "Un agent d'IA est un système d'IA qui peut décider lui-même de certaines étapes pour atteindre un but, comme lire une demande, décider de quel type elle est, rédiger une réponse et choisir l'outil suivant. Les agents sont plus souples mais moins prévisibles, et ils peuvent se tromper avec assurance.",
            "Pour une petite entreprise, commencez par des automatisations fixes, et ajoutez l'IA à une seule étape où le jugement sur les mots aide, comme rédiger une réponse ou trier des messages. Gardez des personnes aux commandes de tout ce qui dépense de l'argent, envoie des messages aux clients ou modifie des dossiers."
          ],
          words: [["Automatisation", "une suite d'étapes fixes qu'un ordinateur fait tout seul quand quelque chose se produit."], ["Agent d'IA", "un système d'IA qui peut choisir certaines de ses propres étapes pour atteindre un but."], ["Flux de travail", "la suite d'étapes qui permet de réaliser une tâche."]],
          slides: [
            { title: "Automatisation", bullets: ["Des règles fixes que vous définissez", "Le même résultat à chaque fois", "Prévisible et facile à vérifier"] },
            { title: "Agent d'IA", bullets: ["Choisit certaines de ses propres étapes", "Souple, mais moins prévisible", "Peut se tromper avec assurance"] },
            { title: "Commencez simple", bullets: ["D'abord une automatisation fixe", "Ajoutez l'IA à une étape de rédaction", "Les personnes valident l'argent, les messages et les dossiers"] }
          ],
          tryIt: "Notez deux tâches répétitives de votre entreprise. Pour chacune, écrivez si une automatisation fixe pourrait la faire, ou si elle demande du jugement (une étape d'IA possible).",
          youCanNow: "expliquer la différence entre une automatisation et un agent d'IA et choisir la solution la plus sûre."
        },
        {
          title: "Décomposer une tâche répétitive étape par étape",
          minutes: 5,
          goal: "Découper une tâche répétitive en une carte d'étapes claire.",
          text: [
            "On ne peut pas automatiser ce qu'on n'a pas écrit. Choisissez une tâche que vous faites souvent et écrivez chaque étape telle que vous la faites aujourd'hui. Exemple pour une entreprise de ménage : (1) une demande arrive par formulaire web, (2) je copie le nom, l'adresse et le type de travail dans mon tableau, (3) j'écris une réponse avec ma fourchette de prix, (4) j'ajoute un rappel pour rappeler, (5) j'envoie le devis.",
            "Marquez chaque étape : Règle (toujours pareille), Mots (demande de l'écriture ou du jugement), Décision (demande le patron), Argent ou envoi (demande une validation).",
            "Les étapes Règle peuvent être automatisées. Les étapes Mots peuvent recevoir un brouillon de l'IA. Les étapes Décision et Argent ou envoi restent à une personne."
          ],
          steps: ["Choisissez une tâche que vous faites au moins chaque semaine.", "Écrivez chaque étape telle que vous la faites aujourd'hui.", "Marquez chacune : Règle, Mots, Décision, Argent ou envoi.", "Entourez les étapes Règle à automatiser en premier."],
          words: [["Carte des étapes", "une liste numérotée de toutes les étapes d'une tâche."], ["Manuel", "fait à la main par une personne."]],
          slides: [
            { title: "Écrivez avant d'automatiser", bullets: ["Choisissez une tâche fréquente", "Listez chaque étape telle que vous la faites aujourd'hui"] },
            { title: "Marquez chaque étape", bullets: ["Règle : toujours pareille", "Mots : écriture ou jugement", "Décision / Argent ou envoi : une personne"] },
            { title: "Ce qui est automatisé", bullets: ["Étapes Règle : automatiser", "Étapes Mots : brouillon de l'IA", "Étapes Décision et argent : des personnes"] }
          ],
          tryIt: "Écrivez la carte des étapes d'une tâche répétitive de votre entreprise et marquez chaque étape Règle, Mots, Décision ou Argent/envoi.",
          youCanNow: "découper une tâche répétitive en une carte d'étapes qui montre ce qui peut être automatisé."
        },
        {
          title: "Concevoir le flux : déclencheur, actions, validation",
          minutes: 5,
          goal: "Concevoir un flux avec un déclencheur, des actions et une étape de validation humaine.",
          text: [
            "Chaque automatisation a un déclencheur (l'événement qui la lance) et des actions (ce qui se passe ensuite). Déclencheur : \"nouvel envoi de formulaire\". Actions : \"ajouter une ligne au tableau\", \"rédiger une réponse avec l'IA\", \"m'envoyer le brouillon pour validation\", \"créer un rappel dans l'agenda\".",
            "Placez la validation humaine avant que quoi que ce soit ne sorte de l'entreprise : messages aux clients, paiements, changements de prix, suppression de dossiers. L'automatisation peut tout préparer ; c'est vous qui appuyez sur Envoyer.",
            "Dessinez-le d'abord sur papier avec des cases et des flèches. Écrivez le nom de l'outil dans chaque case : votre outil de formulaire, Google Sheets ou Excel, une étape d'IA, votre messagerie, votre agenda. Vérifiez que chaque outil se connecte au service d'automatisation que vous comptez utiliser."
          ],
          steps: ["Écrivez le déclencheur.", "Listez les actions dans l'ordre.", "Ajoutez une étape de validation avant tout envoi ou paiement.", "Dessinez-le avec des cases et des flèches.", "Écrivez l'outil de chaque case et vérifiez qu'il se connecte."],
          words: [["Déclencheur", "l'événement qui lance une automatisation."], ["Action", "une étape que fait l'automatisation après le déclencheur."], ["Étape de validation", "un moment où une personne doit dire oui avant que le flux continue."]],
          slides: [
            { title: "Déclencheur et actions", bullets: ["Déclencheur : nouvel envoi de formulaire", "Actions : ajouter une ligne, brouillon IA, me rappeler"] },
            { title: "Validation humaine", bullets: ["Avant que les messages quittent l'entreprise", "Avant les paiements, changements de prix ou suppressions", "L'automatisation prépare ; vous appuyez sur Envoyer"] },
            { title: "Dessinez d'abord", bullets: ["Cases et flèches sur papier", "Le nom de l'outil dans chaque case", "Vérifiez que chaque outil se connecte"] }
          ],
          tryIt: "Dessinez le flux de votre tâche de la leçon 2 : déclencheur, actions et une étape de validation. Écrivez le nom de l'outil dans chaque case.",
          youCanNow: "concevoir un flux avec un déclencheur, des actions et une étape de validation humaine."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comprendre et concevoir l'automatisation",
        questions: [
          { q: "Qu'est-ce qui décrit le mieux une automatisation fixe ?", options: ["Elle choisit ses propres buts", "Elle suit les règles que vous fixez et fait la même chose à chaque fois", "C'est une personne", "Elle ne s'exécute jamais"], answer: 1, why: "Les automatisations suivent des règles fixes." },
          { q: "Lequel est le plus prévisible ?", options: ["Aucun ne marche jamais", "Un agent d'IA", "Ils sont toujours identiques", "Une automatisation fixe"], answer: 3, why: "Les agents choisissent leurs étapes et sont moins prévisibles." },
          { q: "Dans une carte des étapes, \"envoyer le devis\" est marqué :", options: ["Argent ou envoi : demande une validation", "Règle : tout automatiser", "À ignorer", "À supprimer"], answer: 0, why: "Tout ce qui est envoyé à un client demande la validation d'une personne." },
          { q: "Qu'est-ce qu'un déclencheur ?", options: ["Un mot de passe", "La dernière étape", "L'événement qui lance une automatisation", "Un prix"], answer: 2, why: "Les déclencheurs lancent les flux." },
          { q: "Où se place l'étape de validation ?", options: ["Nulle part", "Après que le client l'a reçu", "Avant que quoi que ce soit ne quitte l'entreprise", "Seulement en fin d'année"], answer: 2, why: "Validez avant d'envoyer, de payer ou de supprimer." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire, tester et faire tourner en sécurité",
      lessons: [
        {
          title: "La construire avec un outil sans code",
          minutes: 6,
          goal: "Construire votre flux dans un outil d'automatisation sans code.",
          text: [
            "Les outils sans code permettent de construire des automatisations en choisissant dans des menus au lieu d'écrire du code. Les plus courants sont Zapier, Make et Microsoft Power Automate. Certaines applications que vous utilisez déjà, comme votre outil de formulaire, de réservation ou de messagerie, ont des automatisations simples intégrées. Regardez sur le site de chaque outil son offre gratuite et ses limites.",
            "Le principe est le même partout : créez une nouvelle automatisation, choisissez l'application et l'événement du déclencheur, connectez-vous pour relier votre compte, puis ajoutez chaque action et faites correspondre les champs (par exemple, le \"Nom\" du formulaire va dans la colonne \"Nom\" du tableau).",
            "Pour une étape d'IA, beaucoup d'outils proposent une action qui envoie du texte à un modèle d'IA et renvoie un brouillon. Dites-lui exactement quoi écrire et ne lui donnez que les champs dont elle a besoin. Envoyez le brouillon à vous-même, pas directement au client."
          ],
          steps: ["Créez une nouvelle automatisation dans l'outil choisi.", "Choisissez l'application et l'événement du déclencheur ; reliez votre compte.", "Ajoutez chaque action et faites correspondre les champs.", "Ajoutez l'étape de brouillon IA avec des instructions claires et seulement les champs utiles.", "Envoyez-vous le brouillon pour validation."],
          words: [["Sans code", "construire un logiciel en choisissant des options au lieu d'écrire du code."], ["Correspondance des champs", "indiquer à l'outil où va chaque information."], ["Relier un compte", "permettre à l'outil d'automatisation d'utiliser une de vos applications, après connexion."]],
          slides: [
            { title: "Les outils sans code", bullets: ["Zapier, Make, Microsoft Power Automate", "Automatisations intégrées aux applications que vous utilisez", "Vérifiez les limites des offres gratuites sur chaque site"] },
            { title: "Le même principe", bullets: ["Choisissez l'application et l'événement déclencheur", "Reliez votre compte", "Ajoutez les actions et faites correspondre les champs"] },
            { title: "L'étape d'IA", bullets: ["Des instructions claires", "Seulement les champs nécessaires", "Le brouillon va à vous, pas au client"] }
          ],
          tryIt: "Construisez votre flux avec l'offre gratuite d'un outil sans code (ou sur papier si vous ne pouvez pas encore vous inscrire) : déclencheur, correspondance des champs pour chaque action, et un brouillon IA qui vous est envoyé.",
          youCanNow: "construire un flux déclencheur-actions dans un outil d'automatisation sans code."
        },
        {
          title: "Tester avec des données fictives et corriger ce qui casse",
          minutes: 5,
          goal: "Tester l'automatisation avec des entrées fictives et corriger les erreurs avant la mise en service.",
          text: [
            "Ne testez jamais sur de vrais clients. Créez trois entrées fictives avec des noms inventés comme \"Client Test\" et une adresse e-mail de test qui vous appartient. Prévoyez une entrée normale, une avec un champ manquant, et une avec un texte bizarre (très long, dans une autre langue, avec des emojis).",
            "Lancez chacune et vérifiez chaque étape : la ligne est-elle arrivée dans les bonnes colonnes ? Le brouillon de l'IA a-t-il du sens et reste-t-il dans le sujet ? La validation vous est-elle parvenue ? Quelque chose a-t-il été envoyé alors qu'il ne fallait pas ?",
            "Corrigez une chose à la fois et testez à nouveau. Problèmes courants : mauvaise correspondance des champs, une étape qui échoue quand un champ est vide, un brouillon de l'IA qui invente des prix. Corrigez les instructions (\"Utilise seulement la fourchette de prix du champ ; n'invente pas de prix\") et testez de nouveau."
          ],
          steps: ["Créez trois entrées fictives : normale, champ manquant, texte bizarre.", "Faites passer chacune dans l'automatisation.", "Vérifiez le résultat de chaque étape.", "Corrigez un problème à la fois et testez de nouveau.", "Ne mettez en service que quand les trois passent."],
          words: [["Données fictives", "des informations inventées utilisées pour tester."], ["Cas limite", "une entrée inhabituelle qui pourrait casser un processus, comme un champ vide."], ["Mise en service", "activer l'automatisation pour un vrai usage."]],
          slides: [
            { title: "Testez avec des données inventées", bullets: ["\"Client Test\" et votre propre e-mail de test", "Normale, champ manquant, texte bizarre"] },
            { title: "Vérifiez chaque étape", bullets: ["Les bonnes colonnes ?", "Brouillon IA sensé et dans le sujet ?", "Validation reçue ? Rien envoyé par erreur ?"] },
            { title: "Corrigez et retestez", bullets: ["Une correction à la fois", "Dites à l'étape IA de ne pas inventer de prix", "Mise en service quand les trois passent"] }
          ],
          tryIt: "Faites passer trois entrées fictives dans votre automatisation (ou suivez-les sur votre schéma papier). Notez ce qui s'est passé à chaque étape et une correction.",
          youCanNow: "tester une automatisation en sécurité et corriger les problèmes avant qu'elle ne touche de vrais clients."
        },
        {
          title: "La faire tourner en sécurité : journal, surveillance et interrupteur",
          minutes: 5,
          goal: "Mettre en place un journal, une vérification hebdomadaire et un moyen d'arrêter l'automatisation.",
          text: [
            "Une fois en service, continuez à surveiller. La plupart des outils montrent un historique de chaque exécution ; vérifiez-le chaque semaine pour repérer les erreurs. Vous pouvez aussi ajouter une ligne de journal dans un tableau : date, ce qui l'a déclenchée, ce qu'elle a fait, validé par qui.",
            "Rédigez une description d'une page : ce que fait l'automatisation, son déclencheur et ses actions, les comptes qu'elle utilise, qui valide, et comment l'arrêter. Rangez-la là où un membre de la famille ou du personnel pourrait la trouver.",
            "Protégez les accès : activez la connexion en deux étapes sur l'outil d'automatisation et les comptes reliés, ne lui donnez accès qu'à ce dont elle a besoin, gardez les numéros de carte et les mots de passe des clients hors des étapes d'IA, et retirez les accès quand un employé part."
          ],
          steps: ["Vérifiez l'historique des exécutions chaque semaine.", "Ajoutez une ligne de journal pour chaque exécution.", "Rédigez la description d'une page avec l'interrupteur.", "Activez la connexion en deux étapes et limitez les accès.", "Chaque mois, vérifiez qu'elle fait toujours gagner du temps."],
          words: [["Historique des exécutions", "une liste que l'outil tient de chaque fois que l'automatisation a tourné."], ["Journal", "un registre de ce qui s'est passé et quand."], ["Interrupteur", "le moyen d'arrêter rapidement une automatisation."]],
          slides: [
            { title: "Continuez à surveiller", bullets: ["Vérifiez l'historique chaque semaine", "Journal : date, déclencheur, action, validateur"] },
            { title: "Description d'une page", bullets: ["Ce qu'elle fait et quels comptes elle utilise", "Qui valide", "Comment l'arrêter"] },
            { title: "Protégez les accès", bullets: ["Connexion en deux étapes", "Le moins d'accès possible", "Pas de numéro de carte ni de mot de passe dans l'IA"] }
          ],
          tryIt: "Tâche finale : terminez votre automatisation : carte des étapes, flux avec validation, trois tests réussis, un journal et une vérification hebdomadaire, et une description d'une page avec l'interrupteur.",
          youCanNow: "faire tourner une automatisation d'entreprise en sécurité avec validation, tests, journal et interrupteur."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire, tester et faire tourner en sécurité",
        questions: [
          { q: "Lequel est un outil d'automatisation sans code ?", options: ["Zapier", "Une agrafeuse", "Un tiroir-caisse", "Un fax"], answer: 0, why: "Zapier construit des automatisations sans code." },
          { q: "Qu'est-ce que la correspondance des champs ?", options: ["Imprimer une carte", "Dessiner une ferme", "Choisir un mot de passe", "Indiquer à l'outil où va chaque information"], answer: 3, why: "Elle relie les champs du formulaire aux colonnes du tableau." },
          { q: "Avec quelles données faut-il tester ?", options: ["Les détails de vrais clients", "Des entrées fictives inventées", "Des numéros de carte", "Vos identifiants bancaires"], answer: 1, why: "Ne testez jamais sur de vrais clients." },
          { q: "Le brouillon de l'IA invente un prix. Que corrigez-vous ?", options: ["Les instructions de l'étape IA, puis vous retestez", "Rien", "Vous l'envoyez quand même", "Vous fermez l'entreprise"], answer: 0, why: "Des instructions claires réduisent les faits inventés." },
          { q: "Pourquoi rédiger une description d'une page avec un interrupteur ?", options: ["Pour décorer", "Pour allonger le dossier", "Pour qu'une autre personne puisse la comprendre ou l'arrêter", "Ce n'est pas utile"], answer: 2, why: "N'importe qui doit pouvoir l'arrêter vite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les agents d'IA pour automatiser votre entreprise",
    questions: [
      { q: "Un agent d'IA, c'est :", options: ["Une personne", "Un système d'IA qui peut choisir certaines de ses propres étapes", "Une règle fixe", "Une imprimante"], answer: 1, why: "Les agents choisissent des étapes vers un but." },
      { q: "Par où une petite entreprise doit-elle commencer ?", options: ["Tout automatiser d'un coup", "Un agent entièrement autonome avec accès à la banque", "Rien", "Des automatisations fixes, puis une étape d'IA"], answer: 3, why: "Simple et prévisible d'abord." },
      { q: "Qu'est-ce qui doit toujours rester à une personne ?", options: ["Mettre en forme une ligne", "Copier un formulaire dans un tableau", "Ajouter un rappel dans l'agenda", "Dépenser de l'argent"], answer: 3, why: "Les décisions d'argent demandent une personne." },
      { q: "La première étape avant d'automatiser est de :", options: ["Acheter un outil", "Écrire la carte des étapes de la tâche", "L'activer", "Embaucher quelqu'un"], answer: 1, why: "On ne peut pas automatiser ce qu'on n'a pas écrit." },
      { q: "Une étape \"Règle\" est une étape :", options: ["Liée à l'argent", "Qui est une grosse décision", "Toujours pareille", "Pas claire"], answer: 2, why: "Les étapes Règle peuvent être automatisées." },
      { q: "Une étape \"Mots\" peut recevoir :", options: ["Un brouillon de l'IA", "Un paiement", "Une suppression", "Rien"], answer: 0, why: "L'IA aide à écrire." },
      { q: "\"Nouvel envoi de formulaire\" est un exemple de :", options: ["Journal", "Action", "Déclencheur", "Mot de passe"], answer: 2, why: "Il lance le flux." },
      { q: "\"Ajouter une ligne au tableau\" est un exemple de :", options: ["Action", "Déclencheur", "Validation", "Interrupteur"], answer: 0, why: "Les actions suivent le déclencheur." },
      { q: "Dans un flux sûr, l'IA rédige les réponses aux clients puis :", options: ["Les envoie directement aux clients", "Vous les envoie pour validation", "Les supprime", "Les publie"], answer: 1, why: "C'est vous qui appuyez sur Envoyer." },
      { q: "Pourquoi dessiner d'abord le flux sur papier ?", options: ["Ce n'est pas utile", "C'est exigé par la loi", "Juste pour s'amuser", "Pour voir chaque étape et chaque outil avant de construire"], answer: 3, why: "Planifier évite les erreurs." },
      { q: "Quand vous reliez un compte à un outil d'automatisation, vous :", options: ["Laissez l'outil utiliser cette application après connexion", "Supprimez l'application", "La rendez publique", "Payez une amende"], answer: 0, why: "La connexion donne l'accès à l'outil." },
      { q: "Que doit recevoir l'étape d'IA ?", options: ["Des mots de passe", "Toutes les données des clients", "Des numéros de carte", "Seulement les champs dont elle a besoin"], answer: 3, why: "Le minimum de données nécessaire." },
      { q: "Où vérifier les limites de l'offre gratuite d'un outil ?", options: ["Dans une vieille vidéo", "Au hasard", "Sur le site officiel de l'outil", "Chez un concurrent"], answer: 2, why: "Les offres changent." },
      { q: "Un cas limite, c'est :", options: ["Le coin d'une table", "Une entrée inhabituelle qui pourrait casser le processus", "Une entrée normale", "Un mot de passe"], answer: 1, why: "Testez aussi les entrées bizarres." },
      { q: "Combien d'entrées fictives doivent passer avant la mise en service dans ce cours ?", options: ["Mille", "Zéro", "Un vrai client", "Trois : normale, champ manquant, texte bizarre"], answer: 3, why: "Elles couvrent les problèmes courants." },
      { q: "On corrige les problèmes en :", options: ["Les ignorant", "Changeant tout d'un coup", "Changeant une chose à la fois et en retestant", "Mettant en service quand même"], answer: 2, why: "Une correction à la fois montre ce qui a marché." },
      { q: "L'historique des exécutions montre :", options: ["Chaque fois que l'automatisation a tourné", "Votre historique de navigation", "Les mots de passe des clients", "Les déclarations d'impôts"], answer: 0, why: "Il aide à repérer les erreurs." },
      { q: "À quelle fréquence vérifier une automatisation en service ?", options: ["Jamais", "Au moins chaque semaine", "Une fois tous les quelques ans", "Seulement quand les clients se plaignent"], answer: 1, why: "Des vérifications régulières repèrent tôt les problèmes." },
      { q: "La connexion en deux étapes sur les comptes d'automatisation :", options: ["Ne ralentit rien d'utile", "Les rend plus difficiles à pirater", "N'est pas autorisée", "Partage votre mot de passe"], answer: 1, why: "Elle ajoute une deuxième vérification." },
      { q: "Chaque mois, il faut se demander si l'automatisation :", options: ["Fait toujours gagner du temps", "A un joli nom", "Utilise plus d'applications", "Est populaire"], answer: 0, why: "Si elle n'aide plus, changez-la ou arrêtez-la." }
    ]
  }
};
