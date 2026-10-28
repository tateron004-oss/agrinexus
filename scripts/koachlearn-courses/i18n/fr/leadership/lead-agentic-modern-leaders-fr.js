"use strict";

// Koach Learn course, French translation of leadership/lead-agentic-modern-leaders.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// The marker word MISSING in the meeting prompt is translated as MANQUANT, since students will write their prompts in French.

module.exports = {
  id: "lead-agentic-modern-leaders-fr",
  lang: "fr",
  translationOf: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Diriger à l'ère de l'IA agentique 2 : l'IA pour les responsables d'aujourd'hui et leurs outils",
  skills: "Transformer des notes de réunion en liste d'actions, Rédiger des notes de décision avec options et risques, Rédiger des communications d'équipe claires, Préparer les conversations difficiles, Choisir des outils approuvés, Rédiger un guide d'usage de l'IA d'une page pour l'équipe",
  outcome: "utiliser des outils d'IA dans votre propre travail de responsable, transformer des notes de réunion en liste d'actions, rédiger une note de décision avec options et risques, préparer des messages d'équipe, et rédiger un guide d'usage de l'IA d'une page que votre équipe peut suivre.",
  about: [
    "Ce cours s'adresse aux managers, aux encadrants, aux chefs d'équipe et aux dirigeants de petites entreprises et d'associations qui ont terminé le cours 1 ou qui comprennent déjà les bases de l'IA. Il porte sur votre propre travail de responsable : réunions, décisions, communication et personnes.",
    "Le chapitre 1 construit trois méthodes de travail avec l'IA, réutilisables chaque semaine : des notes de réunion à la liste d'actions, la note de décision, et les communications d'équipe. Le chapitre 2 aborde les parties plus difficiles : utiliser l'IA pour préparer les conversations avec les personnes sans les lui confier, bien choisir ses outils, et rédiger un guide simple d'usage de l'IA pour votre équipe.",
    "Vous pouvez utiliser n'importe quel assistant connu : ChatGPT, Microsoft Copilot, Google Gemini ou Claude. Si votre organisation a approuvé un outil précis, utilisez celui-là. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Constituez votre boîte à outils IA de responsable : enregistrez trois consignes (prompts) testées et réutilisables (des notes de réunion à la liste d'actions, note de décision avec options et risques, message de point d'équipe), chacune utilisée une fois sur un vrai travail sans les détails privés ; et rédigez pour votre équipe un guide d'usage de l'IA d'une page qui dit quels outils sont approuvés, ce qu'on n'y met jamais, ce qu'une personne doit vérifier, et à qui demander.",
  chapters: [
    {
      name: "Chapitre 1 : Trois méthodes de travail avec l'IA pour les responsables",
      lessons: [
        {
          title: "Des notes de réunion à la liste d'actions",
          minutes: 5,
          goal: "Transformer des notes de réunion brutes en une liste d'actions claire avec des responsables et des dates.",
          text: [
            "Les réunions se terminent plus souvent par un vague souvenir que par des actions claires. L'IA sait bien transformer des notes brutes en une structure. Collez vos notes (sans les détails personnels ou confidentiels) et demandez une liste des décisions, des actions avec un responsable et une échéance, et des questions ouvertes.",
            "Une consigne réutilisable : « À partir de ces notes de réunion, liste : 1) les décisions prises, 2) les actions sous forme de tableau avec tâche, responsable, échéance, 3) les questions ouvertes. S'il manque un responsable ou une date, écris MANQUANT. N'ajoute rien qui ne soit pas dans les notes. » La dernière phrase compte : elle empêche l'outil d'inventer des tâches.",
            "Beaucoup d'applications de réunion proposent maintenant des notes ou des résumés par IA. Avant de les activer, vérifiez la politique de votre organisation et prévenez les participants, car enregistrer et transcrire des personnes pose des questions de consentement et de vie privée."
          ],
          steps: ["Retirez des notes les détails personnels ou confidentiels.", "Collez les notes avec la consigne réutilisable.", "Vérifiez chaque action avec votre mémoire et les notes.", "Complétez tout ce qui est marqué MANQUANT.", "Envoyez la liste aux participants le jour même."],
          words: [["Point d'action", "une tâche décidée en réunion, avec un responsable et une échéance."], ["Consigne réutilisable", "une consigne (prompt) que vous enregistrez et réutilisez pour le même type de tâche."]],
          slides: [
            { title: "Des notes aux actions", bullets: ["Décisions prises", "Actions : tâche, responsable, échéance", "Questions ouvertes"] },
            { title: "Empêcher les tâches inventées", bullets: ["« S'il manque, écris MANQUANT »", "« N'ajoute rien qui ne soit pas dans les notes »"] },
            { title: "Enregistreurs de réunion IA", bullets: ["Vérifiez d'abord la politique de l'organisation", "Prévenez les participants avant d'enregistrer"] }
          ],
          tryIt: "Prenez les notes d'une réunion récente, retirez les détails personnels, lancez la consigne réutilisable, et vérifiez le résultat. Comptez ce qu'il a faux ou inventé.",
          youCanNow: "transformer des notes de réunion en liste d'actions vérifiée avec des responsables et des dates."
        },
        {
          title: "La note de décision : options, risques et recommandation",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger une note de décision qui compare les options de façon équitable.",
          text: [
            "Les responsables décident sous la pression du temps. L'IA peut vous aider à élargir votre réflexion, pas à décider à votre place. Donnez-lui la décision, les faits dont vous disposez, vos contraintes (budget, temps, personnes) et demandez trois options, chacune avec ses avantages, ses risques, ses coûts et ce qu'il faudrait croire pour qu'elle soit le meilleur choix.",
            "Puis poussez-la dans ses retranchements : « Quel est l'argument le plus fort contre l'option que je préfère ? » et « Quelle information me manque ? » Ces deux relances sont là où l'IA apporte le plus, car elles font apparaître les angles morts.",
            "C'est vous qui écrivez la recommandation. Vérifiez chaque chiffre, ajoutez ce que vous seul savez (vos équipes, votre histoire, vos valeurs) et assumez la décision. La note ne doit jamais donner « l'IA l'a recommandé » comme raison."
          ],
          steps: ["Décrivez la décision, les faits et les contraintes (sans données privées).", "Demandez trois options avec avantages, risques et coûts.", "Demandez l'argument le plus fort contre votre option préférée.", "Demandez quelle information manque.", "Vérifiez les chiffres et écrivez vous-même la recommandation."],
          words: [["Note de décision", "un court document qui présente une décision, les options et une recommandation."], ["Angle mort", "une chose importante que vous n'avez pas remarquée."]],
          slides: [
            { title: "L'IA élargit, vous décidez", bullets: ["Donnez la décision, les faits, les contraintes", "Demandez trois options : avantages, risques, coûts"] },
            { title: "Deux relances puissantes", bullets: ["« L'argument le plus fort contre mon option ? »", "« Quelle information me manque ? »"] },
            { title: "Vous assumez la décision", bullets: ["Vérifiez chaque chiffre", "Ajoutez ce que vous seul savez", "Jamais « l'IA l'a recommandé » comme raison"] }
          ],
          tryIt: "Choisissez une vraie décision qui vous attend (par exemple un nouvel horaire, un fournisseur ou un événement). Lancez la consigne de note de décision et les deux relances, puis écrivez une recommandation d'un paragraphe avec vos propres mots.",
          youCanNow: "utiliser l'IA pour élargir une décision et rédiger une note que vous assumez."
        },
        {
          title: "Une communication d'équipe claire",
          minutes: 5,
          goal: "Rédiger un message d'équipe et l'ajuster selon le ton, la longueur et le public.",
          text: [
            "Beaucoup de problèmes de management sont des problèmes de communication. L'IA vous aide à rédiger vite un point d'équipe, une annonce ou un remerciement, puis à l'ajuster : « plus court », « plus chaleureux », « pour les nouveaux employés », « en français simple pour des lecteurs dont ce n'est pas la langue maternelle ».",
            "Donnez-lui vos points clés sous forme de puces et votre public, et demandez un brouillon dans votre style. Collez un ancien message que vous avez écrit et dites « garde ce ton » pour qu'il vous ressemble.",
            "Lisez-le à voix haute avant de l'envoyer. Supprimez ce que vous ne diriez pas en face. Pour les nouvelles sensibles comme des licenciements, des changements de règles ou des incidents de sécurité, l'IA peut vous aider à structurer le message, mais les RH ou le service juridique doivent relire les mots finaux, et vous devez annoncer les nouvelles importantes en personne quand c'est possible."
          ],
          steps: ["Écrivez vos points clés sous forme de puces.", "Indiquez le public et le ton.", "Demandez un brouillon ; donnez un ancien message pour garder votre style.", "Ajustez avec une ou deux relances.", "Lisez-le à voix haute ; faites relire les nouvelles sensibles."],
          words: [["Ton", "l'impression que donne un message : chaleureux, formel, urgent, calme."], ["Public", "les personnes qui liront le message."]],
          slides: [
            { title: "Rédiger vite, puis ajuster", bullets: ["Points clés en puces", "Public et ton", "« Plus court », « plus chaleureux », « français simple »"] },
            { title: "Que cela vous ressemble", bullets: ["Collez un ancien message de vous", "« Garde ce ton »"] },
            { title: "Avant d'envoyer", bullets: ["Lisez-le à voix haute", "Nouvelles sensibles : relecture RH ou juridique", "Annoncez les grandes nouvelles en personne"] }
          ],
          tryIt: "Écrivez trois puces pour un vrai point d'équipe. Utilisez l'IA pour le rédiger, demandez un ajustement, lisez-le à voix haute et envoyez-le (ou gardez-le pour l'envoyer).",
          youCanNow: "rédiger et ajuster des messages d'équipe avec l'IA tout en gardant votre propre style."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trois méthodes de travail avec l'IA pour les responsables",
        questions: [
          { q: "Pourquoi ajouter « N'ajoute rien qui ne soit pas dans les notes » à la consigne de réunion ?", options: ["Cela cache les responsables", "Cela allonge la liste", "Cela empêche l'outil d'inventer des tâches", "La loi l'exige"], answer: 2, why: "L'IA peut combler les vides avec du contenu inventé." },
          { q: "Avant d'activer un enregistreur de réunion IA, vous devez :", options: ["Vérifier la politique et prévenir les participants", "Enregistrer en secret", "Prévenir seulement le patron", "Couper le micro"], answer: 0, why: "Enregistrer des personnes pose des questions de consentement et de vie privée." },
          { q: "Quelle relance apporte le plus à une note de décision ?", options: ["« Fais plus long. »", "« Ajoute des émojis. »", "« Utilise des mots plus compliqués. »", "« Quel est l'argument le plus fort contre l'option que je préfère ? »"], answer: 3, why: "Elle fait apparaître les angles morts." },
          { q: "Qui écrit la recommandation dans une note de décision ?", options: ["L'IA", "Vous, le responsable", "Le fournisseur", "Personne"], answer: 1, why: "Les responsables assument les décisions ; l'IA ne fait qu'élargir la réflexion." },
          { q: "Vous devez annoncer un changement de règles qui touche les salaires. Meilleure approche ?", options: ["Envoyer par e-mail un brouillon d'IA non relu", "Laisser l'IA l'annoncer", "Ne pas l'annoncer", "Structurer avec l'IA, faire relire par les RH, annoncer en personne"], answer: 3, why: "Les nouvelles sensibles demandent une relecture et une annonce humaines." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Personnes, outils et règles d'équipe",
      lessons: [
        {
          title: "Préparer les conversations avec les personnes sans les confier à l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour préparer une conversation difficile en gardant les données personnelles à l'écart.",
          text: [
            "Les conversations de retour, de conflit et de performance sont celles où les responsables veulent le plus d'aide et où l'IA est la plus dangereuse. Les détails personnels sur un employé sont confidentiels ; ne collez pas de noms, d'informations de santé, de dossiers disciplinaires ou d'évaluations dans des outils d'IA publics.",
            "Vous pouvez quand même vous préparer. Décrivez la situation en termes généraux (« un membre de l'équipe manque souvent ses échéances, il est apprécié, et sa situation familiale a changé récemment ») et demandez : une phrase d'ouverture, des questions pour comprendre son point de vue, et des façons de convenir des prochaines étapes. Demandez-lui de jouer l'autre personne pour vous entraîner.",
            "Ne laissez jamais l'IA décider d'une embauche, d'une sanction, d'un salaire ou d'un licenciement, et n'envoyez jamais un retour écrit par l'IA que vous n'avez pas réécrit avec vos propres mots. Les gens le sentent, et c'est la confiance que vous perdez."
          ],
          steps: ["Décrivez la situation en termes généraux, sans noms ni détails privés.", "Demandez une ouverture, des questions et des options de prochaines étapes.", "Entraînez-vous avec un jeu de rôle.", "Écrivez vos propres notes avec vos propres mots.", "Gardez les décisions sur les personnes entre les mains de personnes."],
          words: [["Jeu de rôle", "s'entraîner à une conversation avec quelqu'un (ou une IA) qui joue l'autre personne."], ["Confidentiel", "une information qui doit rester privée et n'être partagée qu'avec ceux qui en ont besoin."]],
          slides: [
            { title: "Gardez les données personnelles à l'écart", bullets: ["Ni noms, ni santé, ni dossiers disciplinaires", "Pas d'évaluations dans les outils publics"] },
            { title: "Préparez en termes généraux", bullets: ["Demandez une ouverture et de bonnes questions", "Demandez des options de prochaines étapes", "Entraînez-vous avec un jeu de rôle"] },
            { title: "Les limites à ne pas franchir", bullets: ["Aucune décision d'IA sur embauche, salaire ou sanction", "Réécrivez les retours avec vos mots"] }
          ],
          tryIt: "Pensez à une conversation que vous devez avoir. Décrivez-la en termes généraux sans aucun nom, demandez une phrase d'ouverture et trois questions, puis faites-en un jeu de rôle une fois.",
          youCanNow: "préparer des conversations difficiles avec l'IA tout en protégeant la vie privée des personnes et votre crédibilité."
        },
        {
          title: "Choisir et utiliser les outils d'IA avec discernement",
          minutes: 5,
          goal: "Comparer des outils d'IA selon les questions qui comptent pour votre équipe.",
          text: [
            "Il existe beaucoup d'outils d'IA : des assistants généraux (ChatGPT, Microsoft Copilot, Google Gemini, Claude), des assistants intégrés aux outils que vous utilisez déjà (Microsoft 365, Google Workspace, Canva, applications de réunion), et des fonctions d'agent qui peuvent agir. Les fonctions et les prix changent souvent.",
            "Posez cinq questions avant que votre équipe n'en adopte un. Données : conserve-t-il ce que nous tapons ou s'entraîne-t-il dessus, et peut-on le désactiver ? Accès : que peut-il lire ou faire dans nos systèmes ? Approbation : notre organisation ou le service informatique l'a-t-il approuvé ? Exactitude : peut-il montrer ses sources ? Coût : combien coûte-t-il par personne, aujourd'hui et au renouvellement ?",
            "Cherchez les réponses sur les pages de confidentialité et de tarifs du fournisseur lui-même et dans votre contrat, pas dans les publicités. Les offres entreprise et éducation ont souvent des conditions sur les données différentes des offres personnelles gratuites ; lisez celles de l'offre que vous utiliseriez vraiment."
          ],
          steps: ["Listez les outils que votre équipe utilise ou souhaite.", "Vérifiez les données : conservation et entraînement sur vos saisies.", "Vérifiez l'accès : ce qu'il peut lire ou faire.", "Vérifiez l'approbation, l'exactitude et le coût.", "Utilisez les pages du fournisseur et votre contrat."],
          words: [["Conditions sur les données", "les règles qui disent comment un fournisseur conserve et utilise ce que vous tapez."], ["Assistant intégré", "une fonction d'IA dans un outil que vous utilisez déjà, comme un traitement de texte."]],
          slides: [
            { title: "Types d'outils d'IA", bullets: ["Assistants généraux", "Assistants intégrés aux outils existants", "Fonctions d'agent qui agissent"] },
            { title: "Cinq questions", bullets: ["Données : conservées ou utilisées pour l'entraînement ?", "Accès : que peut-il lire ou faire ?", "Approbation, exactitude, coût"] },
            { title: "Où trouver les réponses", bullets: ["Pages de confidentialité et de tarifs du fournisseur", "Votre contrat", "Les conditions varient selon l'offre : vérifiez la vôtre"] }
          ],
          tryIt: "Choisissez un outil d'IA que votre équipe utilise ou souhaite. Répondez aux cinq questions à l'aide des pages du fournisseur. Écrivez un verdict d'une ligne : approuvé, approuvé avec limites, ou pas encore.",
          youCanNow: "juger un outil d'IA sur les données, l'accès, l'approbation, l'exactitude et le coût."
        },
        {
          title: "Rédiger un guide d'usage de l'IA d'une page pour l'équipe",
          minutes: 6,
          goal: "Rédiger un court guide d'usage de l'IA que votre équipe peut suivre.",
          text: [
            "Un guide d'une page vaut mieux qu'une longue politique que personne ne lit. Il répond à cinq questions : Quels outils avons-nous le droit d'utiliser ? Qu'est-ce qu'on n'y met jamais ? Qu'est-ce qu'une personne doit vérifier avant envoi ? Quand dit-on que l'IA a aidé ? À qui demande-t-on ?",
            "Écrivez-le en mots simples avec des exemples tirés du travail de votre équipe : « Ne collez jamais les noms, adresses ou données de paiement des clients. » « Une personne vérifie chaque fait, chiffre et citation. » « Dites au client s'il discute avec une IA. » Si votre organisation a une politique officielle, votre guide doit s'y inscrire ; vérifiez auprès des RH, du service informatique ou du service juridique.",
            "Utilisez l'IA pour le rédiger à partir de vos notes, puis corrigez sans pitié. Partagez-le, demandez à l'équipe ce qui n'est pas clair, et revoyez-le tous les quelques mois, car les outils et les risques changent sans cesse."
          ],
          steps: ["Répondez aux cinq questions en notes à puces.", "Utilisez l'IA pour rédiger une page à partir de vos notes.", "Ajoutez de vrais exemples tirés du travail de votre équipe.", "Vérifiez qu'il s'inscrit dans la politique de l'organisation.", "Partagez-le, demandez ce qui n'est pas clair, fixez une date de révision."],
          words: [["Guide d'usage de l'IA", "un court ensemble de règles sur la façon dont une équipe utilise les outils d'IA."], ["Transparence", "dire aux gens que l'IA a aidé à faire quelque chose ou qu'ils parlent à une IA."]],
          slides: [
            { title: "Cinq questions, une page", bullets: ["Quels outils ?", "Qu'est-ce qu'on n'y met jamais ?", "Que doit vérifier une personne ?", "Quand le dire ? À qui demander ?"] },
            { title: "Mots simples, vrais exemples", bullets: ["« Ne collez jamais les données de paiement des clients »", "« Une personne vérifie chaque fait et chiffre »"] },
            { title: "Le garder vivant", bullets: ["S'inscrire dans la politique officielle", "Demander à l'équipe ce qui n'est pas clair", "Le revoir tous les quelques mois"] }
          ],
          tryIt: "Exercice final : enregistrez vos trois consignes testées (actions de réunion, note de décision, point d'équipe) dans un seul document, et ajoutez votre guide d'usage de l'IA d'une page avec les outils, ce qu'on n'y met jamais, ce qu'il faut vérifier, la transparence et à qui demander. Partagez-le avec un collègue pour avoir son avis.",
          youCanNow: "piloter l'usage quotidien de l'IA dans votre équipe avec une boîte à outils testée et un guide clair d'une page."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Personnes, outils et règles d'équipe",
        questions: [
          { q: "Pour préparer un entretien de performance, que pouvez-vous mettre dans un outil d'IA public ?", options: ["Le nom et l'évaluation de l'employé", "Son certificat médical", "Une description générale sans noms ni détails privés", "Son dossier disciplinaire"], answer: 2, why: "Décrivez la situation en général ; gardez les données personnelles à l'écart." },
          { q: "Quelle décision ne doit jamais être prise par l'IA ?", options: ["Sanctionner un employé", "Choisir l'heure d'une réunion", "Choisir une police", "Ordonner les points d'un ordre du jour"], answer: 0, why: "Les décisions sur les personnes restent entre les mains de personnes." },
          { q: "Où vérifier si un outil s'entraîne sur vos données ?", options: ["Dans une publicité pour l'outil", "Dans les conditions de confidentialité du fournisseur pour votre offre", "Auprès d'un ami", "Sur le logo de l'outil"], answer: 1, why: "Les conditions officielles de votre offre réelle sont la source." },
          { q: "Quel est le principal avantage d'un guide IA d'une page ?", options: ["Les gens le lisent et le suivent vraiment", "Il couvre tous les cas possibles", "Il n'a jamais besoin d'être mis à jour", "Il remplace toutes les politiques"], answer: 0, why: "Les guides courts et simples sont utilisés." },
          { q: "À quelle fréquence revoir le guide IA de votre équipe ?", options: ["Jamais", "Tous les dix ans", "Seulement après une catastrophe", "Tous les quelques mois, car les outils et les risques changent"], answer: 3, why: "Les outils d'IA changent vite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Diriger à l'ère de l'IA agentique 2 : l'IA pour les responsables d'aujourd'hui et leurs outils",
    questions: [
      { q: "Une bonne consigne pour des notes de réunion demande :", options: ["Un poème", "Les décisions, les actions avec responsables et dates, les questions ouvertes", "Les salaires de chacun", "Seulement un nouvel ordre du jour"], answer: 1, why: "Cette structure transforme les notes en actions." },
      { q: "Si l'IA liste une action sans responsable, la consigne doit lui faire écrire :", options: ["Votre nom", "Un nom au hasard", "MANQUANT", "Rien"], answer: 2, why: "Marquer les vides évite des responsables inventés." },
      { q: "Avant de coller des notes dans une IA, vous devez :", options: ["Ajouter des mots de passe", "Ajouter plus de noms", "Retirer les détails personnels ou confidentiels", "Les traduire"], answer: 2, why: "Les détails privés restent hors des outils publics." },
      { q: "Dans une note de décision, le meilleur rôle de l'IA est :", options: ["D'élargir vos options et faire apparaître les angles morts", "De prendre la décision", "De signer la note", "De remplacer votre équipe"], answer: 0, why: "Vous décidez ; l'IA vous aide à élargir la réflexion." },
      { q: "« Quelle information me manque ? » est :", options: ["Une commande de mise en forme", "Une perte de temps", "Un risque pour la vie privée", "Une relance utile qui trouve les angles morts"], answer: 3, why: "Elle fait apparaître les trous dans votre réflexion." },
      { q: "Quelle raison une note ne doit-elle jamais donner ?", options: ["« Cela tient dans notre budget »", "« L'IA l'a recommandé »", "« Cela respecte l'échéance »", "« Notre équipe peut le réaliser »"], answer: 1, why: "Les responsables assument leurs raisons." },
      { q: "Pour qu'un brouillon d'IA vous ressemble :", options: ["Utilisez un autre outil", "Mettez plus de points d'exclamation", "Demandez des mots plus longs", "Collez un ancien message et dites « garde ce ton »"], answer: 3, why: "Des exemples de votre écriture guident le ton." },
      { q: "Lire un message à voix haute avant de l'envoyer vous aide à :", options: ["Ajouter du jargon", "L'allonger", "Supprimer ce que vous ne diriez pas en face", "Sauter la relecture"], answer: 2, why: "Votre oreille repère le mauvais ton." },
      { q: "Pour une annonce de licenciements, l'IA peut vous aider à :", options: ["Structurer le message, avec une relecture RH ou juridique", "L'envoyer sans relecture", "Décider qui est licencié", "Éviter de prévenir les gens"], answer: 0, why: "Les nouvelles sensibles demandent une relecture humaine." },
      { q: "Quel détail ne doit jamais aller dans un outil d'IA public ?", options: ["Un ordre du jour générique", "Les informations de santé d'un employé", "Les dates d'un événement public", "Le nom de votre équipe"], answer: 1, why: "Les informations de santé sont confidentielles." },
      { q: "Le jeu de rôle avec l'IA vous aide à :", options: ["Vous entraîner à une conversation difficile", "Éviter la conversation", "Enregistrer l'employé", "Décider d'un salaire"], answer: 0, why: "L'entraînement donne confiance sans partager de données privées." },
      { q: "Un retour écrit par l'IA doit être :", options: ["Caché à l'employé", "Envoyé tel quel", "Publié", "Réécrit avec vos propres mots"], answer: 3, why: "Les gens le sentent, et la confiance compte." },
      { q: "Lequel est un assistant intégré ?", options: ["Un carnet papier", "Une fonction d'IA dans votre traitement de texte", "Un téléphone de bureau", "Une imprimante"], answer: 1, why: "Beaucoup d'outils familiers incluent maintenant des fonctions d'IA." },
      { q: "La question des « données » sur un outil demande :", options: ["Est-il populaire ?", "De quelle couleur est-il ?", "Conserve-t-il ce que nous tapons ou s'entraîne-t-il dessus ?", "Combien a-t-il de boutons ?"], answer: 2, why: "Les conditions sur les données décident de ce qu'on peut taper sans risque." },
      { q: "La question de l'« accès » demande :", options: ["Le bureau est-il ouvert ?", "Le personnel a-t-il Internet ?", "Que peut-il lire ou faire dans nos systèmes ?", "Qui a la clé de la porte ?"], answer: 2, why: "Les fonctions d'agent peuvent agir dans vos systèmes." },
      { q: "Les offres personnelles gratuites et les offres entreprise :", options: ["Peuvent avoir des conditions sur les données différentes", "Ont toujours les mêmes conditions", "Ne conservent jamais de données", "Sont toujours gratuites"], answer: 0, why: "Lisez les conditions de l'offre que vous utiliserez." },
      { q: "Un guide IA d'une page répond à :", options: ["Seulement qui commande", "Toutes les questions juridiques", "Seulement les prix", "Quels outils, ce qu'on n'y met jamais, ce qu'il faut vérifier, la transparence, à qui demander"], answer: 3, why: "Cinq questions simples couvrent l'usage quotidien." },
      { q: "La transparence veut dire :", options: ["Cacher l'usage de l'IA", "Dire aux gens que l'IA a aidé ou qu'ils parlent à une IA", "Supprimer des dossiers", "Partager des mots de passe"], answer: 1, why: "L'honnêteté sur l'IA crée la confiance." },
      { q: "Si votre organisation a une politique officielle sur l'IA, le guide de votre équipe doit :", options: ["La contredire", "La remplacer", "L'ignorer", "S'y inscrire"], answer: 3, why: "Les guides d'équipe fonctionnent dans le cadre de la politique de l'organisation." },
      { q: "La meilleure façon de garder votre boîte à outils IA de responsable est :", options: ["Les mots de passe des autres", "Des consignes au hasard que vous oubliez", "Des consignes testées et réutilisables enregistrées au même endroit", "Une liste de tous les outils d'IA"], answer: 2, why: "Des consignes testées et enregistrées rendent les bonnes habitudes répétables." }
    ]
  }
};
