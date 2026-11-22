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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des managers, superviseurs, chefs d'équipe et dirigeants de petites entreprises et d'associations qui ont terminé le cours 1 ou qui comprennent déjà les bases de l'IA.",
    startingPoint: "Ils savent expliquer l'IA générative et agentique et nommer les principaux risques pour leur équipe. Ils utilisent l'IA de temps en temps, mais pas dans des façons de faire reproductibles pour les réunions, les décisions, la communication et la gestion des personnes.",
    gap: "Les responsables passent une grande partie de leur semaine sur des notes, des décisions et des messages. Des consignes testées et réutilisables font gagner du temps, mais seulement si les responsables gardent entre des mains humaines le jugement, les conversations avec les personnes et les données personnelles, et donnent à leur équipe un guide clair à suivre.",
    constraints: [
      "Niveau de lecture : mots simples, aucune formation technique supposée",
      "Appareils : un téléphone ou un ordinateur avec un assistant IA ; utilisez l'outil approuvé par votre organisation",
      "Vie privée : retirez les données personnelles et confidentielles avant de coller quoi que ce soit dans une IA",
      "Les règles RH, juridiques et de l'organisation s'appliquent aux décisions sur les personnes et aux messages sensibles",
      "Temps : des leçons courtes avec une tâche sur du vrai travail"
    ],
    prerequisites: "« Diriger à l'ère de l'IA agentique 1 : comprendre l'IA », ou une compréhension de base de l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de notes brutes d'une vraie réunion, sans données personnelles", action: "utiliser une consigne réutilisable pour transformer les notes en décisions, en actions avec responsables et dates, et en questions ouvertes", standard: "en vérifiant que la liste n'invente ni n'oublie rien" },
    { id: "O2", condition: "Pour une vraie décision que vous devez prendre", action: "rédiger une note de décision avec les options, les risques et les questions de suivi, puis écrire vous-même la recommandation", standard: "sans jamais donner « l'IA l'a recommandé » comme raison" },
    { id: "O3", condition: "À partir de trois points pour un message d'équipe", action: "rédiger un message d'équipe et l'ajuster selon le ton, la longueur et le public", standard: "en le lisant à voix haute avant de l'envoyer" },
    { id: "O4", condition: "Avant une conversation difficile avec une personne", action: "préparer avec l'IA une phrase d'ouverture et des questions à partir d'une description générale seulement", standard: "sans nom ni détail privé, en gardant pour vous la conversation et la décision" },
    { id: "O5", condition: "Pour un outil d'IA que votre équipe utilise ou veut utiliser", action: "comparer l'outil sur les données, les accès et les conditions de l'offre à l'aide des pages du fournisseur", standard: "en terminant par un avis d'une ligne : approuver, approuver avec des limites, ou pas encore" },
    { id: "O6", condition: "Pour votre équipe", action: "rédiger un guide d'usage de l'IA d'une page et enregistrer vos consignes testées à un seul endroit", standard: "couvrant les outils approuvés, ce qu'on n'y met jamais, ce qu'il faut vérifier, la transparence et la personne à qui s'adresser" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trois méthodes de travail avec l'IA pour les responsables",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "transformer des notes de réunion en liste d'actions vérifiée avec des responsables et des dates.",
          quickCheck: [
            { objective: "O1", q: "Que doit demander à l'IA une bonne consigne pour des notes de réunion ?", options: ["Qui a le plus parlé", "Les décisions, les actions avec responsables et dates, et les questions ouvertes", "Un résumé de chaque phrase", "Des idées de collation pour la prochaine réunion"], answer: 1, why: "Les décisions, les actions avec un responsable et les questions ouvertes, c'est ce dont une équipe a besoin après une réunion." },
            { objective: "O1", q: "La liste d'actions contient une tâche dont personne n'a parlé en réunion. Que feriez-vous ?", options: ["La garder, c'est une bonne idée", "Vous l'attribuer discrètement", "La supprimer et ajouter à la consigne « N'ajoute rien qui ne soit pas dans les notes »", "Demander à l'IA d'expliquer pourquoi"], answer: 2, why: "Les tâches inventées créent de la confusion ; la règle dans la consigne empêche l'outil d'en ajouter." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "utiliser l'IA pour élargir une décision et rédiger une note que vous assumez.",
          quickCheck: [
            { objective: "O2", q: "Quel est le meilleur rôle de l'IA dans une note de décision ?", options: ["Prendre la décision finale", "Choisir l'option que l'équipe préfère", "Signer la note", "Élargir vos options et repérer vos angles morts"], answer: 3, why: "L'IA vous aide à voir plus d'options et de risques ; c'est le responsable qui décide." },
            { objective: "O2", q: "Vous avez une option préférée. Quelle question de suivi enverriez-vous ?", options: ["« Quel est l'argument le plus fort contre l'option que je préfère ? »", "« Dis-moi que mon option est la meilleure. »", "« Écris la note plus courte. »", "« Choisis pour moi. »"], answer: 0, why: "Demander le contre-argument le plus fort met votre choix à l'épreuve de façon équitable." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "rédiger et ajuster des messages d'équipe avec l'IA tout en gardant votre propre style.",
          quickCheck: [
            { objective: "O3", q: "Comment faire qu'un brouillon de l'IA vous ressemble ?", options: ["Lui demander un langage soutenu", "Coller un ancien message que vous avez écrit et dire « garde ce ton »", "L'envoyer sans le lire", "Ajouter plus de points d'exclamation"], answer: 1, why: "Un exemple de votre propre écriture montre votre ton à l'outil." },
            { objective: "O3", q: "Le message d'équipe de l'IA est deux fois trop long. Que feriez-vous ?", options: ["L'envoyer quand même", "Ouvrir une nouvelle conversation avec un autre outil", "Supprimer la seconde moitié", "Demander un seul ajustement, comme « réduis à cinq phrases courtes », puis le lire à voix haute"], answer: 3, why: "Une seule demande claire corrige la longueur, et la lecture à voix haute repère ce que vous ne diriez pas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trois méthodes de travail avec l'IA pour les responsables",
        questions: [
          { objective: "O1", q: "Pourquoi ajouter « N'ajoute rien qui ne soit pas dans les notes » à la consigne de réunion ?", options: ["Cela cache les responsables", "Cela allonge la liste", "Cela empêche l'outil d'inventer des tâches", "La loi l'exige"], answer: 2, why: "L'IA peut combler les vides avec du contenu inventé." },
          { objective: "O1", q: "Avant d'activer un enregistreur de réunion IA, vous devez :", options: ["Vérifier la politique et prévenir les participants", "Enregistrer en secret", "Prévenir seulement le patron", "Couper le micro"], answer: 0, why: "Enregistrer des personnes pose des questions de consentement et de vie privée." },
          { objective: "O2", q: "Quelle relance apporte le plus à une note de décision ?", options: ["« Fais plus long. »", "« Ajoute des émojis. »", "« Utilise des mots plus compliqués. »", "« Quel est l'argument le plus fort contre l'option que je préfère ? »"], answer: 3, why: "Elle fait apparaître les angles morts." },
          { objective: "O2", q: "Qui écrit la recommandation dans une note de décision ?", options: ["L'IA", "Vous, le responsable", "Le fournisseur", "Personne"], answer: 1, why: "Les responsables assument les décisions ; l'IA ne fait qu'élargir la réflexion." },
          { objective: "O3", q: "Vous devez annoncer un changement de règles qui touche les salaires. Meilleure approche ?", options: ["Envoyer par e-mail un brouillon d'IA non relu", "Laisser l'IA l'annoncer", "Ne pas l'annoncer", "Structurer avec l'IA, faire relire par les RH, annoncer en personne"], answer: 3, why: "Les nouvelles sensibles demandent une relecture et une annonce humaines." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Personnes, outils et règles d'équipe",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "préparer des conversations difficiles avec l'IA tout en protégeant la vie privée des personnes et votre crédibilité.",
          quickCheck: [
            { objective: "O4", q: "Que pouvez-vous mettre dans un outil d'IA public pour préparer un entretien sur la performance ?", options: ["Le nom de l'employé et l'historique de ses évaluations", "Une description générale sans nom ni détail privé", "Ses notes médicales, pour être délicat", "Son dossier personnel complet"], answer: 1, why: "Seule une description générale garde les informations privées de la personne hors de l'outil." },
            { objective: "O4", q: "L'IA propose exactement quoi dire et quelle décision prendre au sujet d'un employé. Que faites-vous ?", options: ["Utiliser son idée de phrase d'ouverture pour vous entraîner, et prendre la décision vous-même", "Lire son texte mot pour mot", "Laisser l'IA envoyer le message", "Copier sa décision dans le dossier RH"], answer: 0, why: "L'IA peut vous aider à vous préparer, mais la conversation et la décision restent les vôtres." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "juger un outil d'IA sur les données, l'accès, l'approbation, l'exactitude et le coût.",
          quickCheck: [
            { objective: "O5", q: "Que demande la question des « accès » au sujet d'un outil d'IA ?", options: ["Combien il coûte", "À quelle vitesse il répond", "Ce qu'il peut lire ou faire dans vos systèmes", "Quelles langues il parle"], answer: 2, why: "Les accès vous disent ce que l'outil pourrait voir ou modifier en cas de problème." },
            { objective: "O5", q: "Votre équipe utilise une offre personnelle gratuite et vous voulez savoir si elle s'entraîne sur vos données. Où regardez-vous ?", options: ["Un article de presse de l'an dernier", "Les conditions de confidentialité du fournisseur pour cette offre", "La supposition d'un collègue", "La réponse de l'IA elle-même dans une conversation"], answer: 1, why: "Les offres gratuites et professionnelles peuvent avoir des conditions différentes, et les pages du fournisseur font foi." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "piloter l'usage quotidien de l'IA dans votre équipe avec une boîte à outils testée et un guide clair d'une page.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire la transparence dans un guide d'équipe sur l'IA ?", options: ["Partager vos mots de passe avec l'informatique", "Lister tous les outils d'IA qui existent", "Publier vos consignes en ligne", "Dire aux gens quand l'IA a aidé ou quand ils parlent à une IA"], answer: 3, why: "La transparence tient les gens informés de l'endroit où l'IA a été utilisée." },
            { objective: "O6", q: "Votre organisation a une politique officielle sur l'IA. Quel lien doit avoir votre guide d'équipe d'une page avec elle ?", options: ["S'inscrire dans cette politique et y renvoyer", "La remplacer par des règles plus simples", "L'ignorer, car les équipes sont différentes", "La recopier mot pour mot, en entier"], answer: 0, why: "Un guide d'équipe ajoute des détails pratiques mais doit rester dans le cadre de la politique de l'organisation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Personnes, outils et règles d'équipe",
        questions: [
          { objective: "O4", q: "Pour préparer un entretien de performance, que pouvez-vous mettre dans un outil d'IA public ?", options: ["Le nom et l'évaluation de l'employé", "Son certificat médical", "Une description générale sans noms ni détails privés", "Son dossier disciplinaire"], answer: 2, why: "Décrivez la situation en général ; gardez les données personnelles à l'écart." },
          { objective: "O4", q: "Quelle décision ne doit jamais être prise par l'IA ?", options: ["Sanctionner un employé", "Choisir l'heure d'une réunion", "Choisir une police", "Ordonner les points d'un ordre du jour"], answer: 0, why: "Les décisions sur les personnes restent entre les mains de personnes." },
          { objective: "O5", q: "Où vérifier si un outil s'entraîne sur vos données ?", options: ["Dans une publicité pour l'outil", "Dans les conditions de confidentialité du fournisseur pour votre offre", "Auprès d'un ami", "Sur le logo de l'outil"], answer: 1, why: "Les conditions officielles de votre offre réelle sont la source." },
          { objective: "O6", q: "Quel est le principal avantage d'un guide IA d'une page ?", options: ["Les gens le lisent et le suivent vraiment", "Il couvre tous les cas possibles", "Il n'a jamais besoin d'être mis à jour", "Il remplace toutes les politiques"], answer: 0, why: "Les guides courts et simples sont utilisés." },
          { objective: "O6", q: "À quelle fréquence revoir le guide IA de votre équipe ?", options: ["Jamais", "Tous les dix ans", "Seulement après une catastrophe", "Tous les quelques mois, car les outils et les risques changent"], answer: 3, why: "Les outils d'IA changent vite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Diriger à l'ère de l'IA agentique 2 : l'IA pour les responsables d'aujourd'hui et leurs outils",
    questions: [
      { objective: "O1", q: "Une bonne consigne pour des notes de réunion demande :", options: ["Un poème", "Les décisions, les actions avec responsables et dates, les questions ouvertes", "Les salaires de chacun", "Seulement un nouvel ordre du jour"], answer: 1, why: "Cette structure transforme les notes en actions." },
      { objective: "O1", q: "Si l'IA liste une action sans responsable, la consigne doit lui faire écrire :", options: ["Votre nom", "Un nom au hasard", "MANQUANT", "Rien"], answer: 2, why: "Marquer les vides évite des responsables inventés." },
      { objective: "O1", q: "Avant de coller des notes dans une IA, vous devez :", options: ["Ajouter des mots de passe", "Ajouter plus de noms", "Retirer les détails personnels ou confidentiels", "Les traduire"], answer: 2, why: "Les détails privés restent hors des outils publics." },
      { objective: "O2", q: "Dans une note de décision, le meilleur rôle de l'IA est :", options: ["D'élargir vos options et faire apparaître les angles morts", "De prendre la décision", "De signer la note", "De remplacer votre équipe"], answer: 0, why: "Vous décidez ; l'IA vous aide à élargir la réflexion." },
      { objective: "O2", q: "« Quelle information me manque ? » est :", options: ["Une commande de mise en forme", "Une perte de temps", "Un risque pour la vie privée", "Une relance utile qui trouve les angles morts"], answer: 3, why: "Elle fait apparaître les trous dans votre réflexion." },
      { objective: "O2", q: "Quelle raison une note ne doit-elle jamais donner ?", options: ["« Cela tient dans notre budget »", "« L'IA l'a recommandé »", "« Cela respecte l'échéance »", "« Notre équipe peut le réaliser »"], answer: 1, why: "Les responsables assument leurs raisons." },
      { objective: "O3", q: "Pour qu'un brouillon d'IA vous ressemble :", options: ["Utilisez un autre outil", "Mettez plus de points d'exclamation", "Demandez des mots plus longs", "Collez un ancien message et dites « garde ce ton »"], answer: 3, why: "Des exemples de votre écriture guident le ton." },
      { objective: "O3", q: "Lire un message à voix haute avant de l'envoyer vous aide à :", options: ["Ajouter du jargon", "L'allonger", "Supprimer ce que vous ne diriez pas en face", "Sauter la relecture"], answer: 2, why: "Votre oreille repère le mauvais ton." },
      { objective: "O3", q: "Pour une annonce de licenciements, l'IA peut vous aider à :", options: ["Structurer le message, avec une relecture RH ou juridique", "L'envoyer sans relecture", "Décider qui est licencié", "Éviter de prévenir les gens"], answer: 0, why: "Les nouvelles sensibles demandent une relecture humaine." },
      { objective: "O4", q: "Quel détail ne doit jamais aller dans un outil d'IA public ?", options: ["Un ordre du jour générique", "Les informations de santé d'un employé", "Les dates d'un événement public", "Le nom de votre équipe"], answer: 1, why: "Les informations de santé sont confidentielles." },
      { objective: "O4", q: "Le jeu de rôle avec l'IA vous aide à :", options: ["Vous entraîner à une conversation difficile", "Éviter la conversation", "Enregistrer l'employé", "Décider d'un salaire"], answer: 0, why: "L'entraînement donne confiance sans partager de données privées." },
      { objective: "O4", q: "Un retour écrit par l'IA doit être :", options: ["Caché à l'employé", "Envoyé tel quel", "Publié", "Réécrit avec vos propres mots"], answer: 3, why: "Les gens le sentent, et la confiance compte." },
      { objective: "O5", q: "Lequel est un assistant intégré ?", options: ["Un carnet papier", "Une fonction d'IA dans votre traitement de texte", "Un téléphone de bureau", "Une imprimante"], answer: 1, why: "Beaucoup d'outils familiers incluent maintenant des fonctions d'IA." },
      { objective: "O5", q: "La question des « données » sur un outil demande :", options: ["Est-il populaire ?", "De quelle couleur est-il ?", "Conserve-t-il ce que nous tapons ou s'entraîne-t-il dessus ?", "Combien a-t-il de boutons ?"], answer: 2, why: "Les conditions sur les données décident de ce qu'on peut taper sans risque." },
      { objective: "O5", q: "La question de l'« accès » demande :", options: ["Le bureau est-il ouvert ?", "Le personnel a-t-il Internet ?", "Que peut-il lire ou faire dans nos systèmes ?", "Qui a la clé de la porte ?"], answer: 2, why: "Les fonctions d'agent peuvent agir dans vos systèmes." },
      { objective: "O5", q: "Les offres personnelles gratuites et les offres entreprise :", options: ["Peuvent avoir des conditions sur les données différentes", "Ont toujours les mêmes conditions", "Ne conservent jamais de données", "Sont toujours gratuites"], answer: 0, why: "Lisez les conditions de l'offre que vous utiliserez." },
      { objective: "O6", q: "Un guide IA d'une page répond à :", options: ["Seulement qui commande", "Toutes les questions juridiques", "Seulement les prix", "Quels outils, ce qu'on n'y met jamais, ce qu'il faut vérifier, la transparence, à qui demander"], answer: 3, why: "Cinq questions simples couvrent l'usage quotidien." },
      { objective: "O6", q: "La transparence veut dire :", options: ["Cacher l'usage de l'IA", "Dire aux gens que l'IA a aidé ou qu'ils parlent à une IA", "Supprimer des dossiers", "Partager des mots de passe"], answer: 1, why: "L'honnêteté sur l'IA crée la confiance." },
      { objective: "O6", q: "Si votre organisation a une politique officielle sur l'IA, le guide de votre équipe doit :", options: ["La contredire", "La remplacer", "L'ignorer", "S'y inscrire"], answer: 3, why: "Les guides d'équipe fonctionnent dans le cadre de la politique de l'organisation." },
      { objective: "O6", q: "La meilleure façon de garder votre boîte à outils IA de responsable est :", options: ["Les mots de passe des autres", "Des consignes au hasard que vous oubliez", "Des consignes testées et réutilisables enregistrées au même endroit", "Une liste de tous les outils d'IA"], answer: 2, why: "Des consignes testées et enregistrées rendent les bonnes habitudes répétables." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Consigne pour les actions de réunion",
        objective: "O1",
        notYet: "Pas de consigne enregistrée, ou elle n'a pas été testée sur de vraies notes.",
        meets: "Une consigne enregistrée qui transforme des notes en actions avec responsables et dates, utilisée une fois sans détails privés.",
        exceeds: "La consigne signale les responsables manquants et interdit les tâches inventées."
      },
      {
        name: "Consigne pour la note de décision",
        objective: "O2",
        notYet: "Pas de consigne enregistrée, ou c'est l'IA qui a fait la recommandation.",
        meets: "Une consigne enregistrée pour les options et les risques, utilisée une fois, avec la recommandation écrite par le responsable.",
        exceeds: "Comprend des questions de suivi qui mettent à l'épreuve l'option préférée."
      },
      {
        name: "Consigne pour le message d'équipe",
        objective: "O3",
        notYet: "Pas de consigne enregistrée, ou le message n'a pas été vérifié.",
        meets: "Une consigne enregistrée pour les messages d'équipe, utilisée une fois et ajustée pour le ton ou la longueur.",
        exceeds: "Comprend un extrait de l'écriture du responsable pour garder son ton."
      },
      {
        name: "Guide de l'IA d'une page",
        objective: "O6",
        notYet: "Il manque les outils approuvés, ce qu'on n'y met jamais, ce qu'il faut vérifier ou la personne à qui s'adresser.",
        meets: "Une page qui couvre les outils approuvés, ce qu'on n'y met jamais, ce qu'une personne doit vérifier et à qui s'adresser.",
        exceeds: "Couvre aussi la transparence et a été montré à un collègue pour avoir son avis."
      },
      {
        name: "Détails privés tenus à l'écart",
        objective: "O4",
        notYet: "Une consigne ou un exemple contient des noms ou des détails privés.",
        meets: "Aucun détail personnel ou confidentiel dans les consignes ou exemples enregistrés.",
        exceeds: "Les consignes utilisent des repères comme [membre de l'équipe] pour être réutilisées sans risque."
      }
    ]
  },
  evaluation: {
    results: [
      "Responsables qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Équipes qui ont un guide d'usage de l'IA d'une page dans les 30 jours (enquête de suivi)",
      "Responsables qui disent gagner du temps chaque semaine grâce à leurs consignes réutilisables (enquête de suivi)",
      "Responsables qui passent au cours 3 de Diriger à l'ère de l'IA agentique"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un assistant IA ; utilisez celui approuvé par votre organisation",
      "Les notes d'une réunion récente, une vraie décision et un message d'équipe, sans détails privés",
      "Un document pour enregistrer les consignes et le guide d'usage de l'IA",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis essayez en direct la consigne pour notes de réunion sur des notes inventées avant que les responsables utilisent les leurs.",
      "Rappelez aux responsables de suivre la politique de leur organisation sur l'IA et d'impliquer les RH ou le service juridique pour les décisions sur les personnes et les nouvelles sensibles.",
      "Mettez les responsables par deux pour jouer une conversation difficile à partir de descriptions générales seulement.",
      "Faites échanger les brouillons de guides de l'IA et demandez un retour chacun.",
      "Notez l'exercice final avec la grille, et vérifiez qu'aucune consigne enregistrée ne contient de données personnelles."
    ]
  }
};
