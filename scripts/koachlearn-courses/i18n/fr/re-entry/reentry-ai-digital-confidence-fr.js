"use strict";

// Koach Learn course (French translation of re-entry/reentry-ai-digital-confidence.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-ai-digital-confidence-fr",
  lang: "fr",
  translationOf: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Découvrir l'IA et prendre confiance avec le numérique",
  skills: "Ouvrir un assistant d'IA gratuit, Poser des questions claires, Améliorer une réponse, Vérifier une réponse, Protéger vos informations privées",
  outcome: "utiliser un assistant d'IA gratuit sur un téléphone ou un ordinateur de bibliothèque pour vous aider dans une tâche de tous les jours : poser une question claire, améliorer la réponse, la vérifier avant d'y croire, et ne pas y mettre vos informations privées.",
  about: [
    "La technologie a peut-être beaucoup changé pendant votre absence. Ce cours part du début et avance un petit pas à la fois.",
    "Vous apprendrez ce qu'est un assistant d'IA, comment en ouvrir un gratuitement, comment lui demander de l'aide, comment vérifier ce qu'il vous dit et comment protéger vos informations privées.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Utilisez un assistant d'IA pour écrire un message court et poli qui demande à une entreprise si elle embauche. Demandez-le avec des mots simples, demandez un changement pour l'améliorer, vérifiez qu'il ne contient aucune information privée, et lisez-le à voix haute pour être sûr qu'il vous ressemble.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui rentrent chez eux après la prison (réinsertion). Beaucoup sont restés absents pendant des années, pendant que les smartphones et les outils d'IA changeaient ; certains n'ont jamais utilisé de smartphone. Les âges sont très variés, et la plupart cherchent un travail et un logement et renouent avec leur famille.",
    startingPoint: "Ils savent appeler et envoyer des SMS sur un téléphone simple. Ils utilisent peu ou pas les applications, les navigateurs web ou les assistants d'IA. Certains manquent de confiance avec la lecture ou avec la technologie.",
    gap: "Aujourd'hui, les employeurs, les services du logement et les autres services attendent que les gens fassent leurs démarches en ligne. Les apprenants doivent utiliser un assistant d'IA gratuit en toute sécurité pour l'aide de tous les jours (messages, explication de courriers, listes) sans se laisser tromper par de mauvaises réponses ou des arnaques. Cela leur donne confiance et accélère la recherche d'un travail et d'un logement.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 10 à 12 ans)",
      "Appareils : parfois seulement un téléphone simple ou un ordinateur de bibliothèque avec un temps limité",
      "Temps : leçons de 4 à 5 minutes, à placer entre les rendez-vous et le travail",
      "Certaines conditions de libération conditionnelle ou de probation limitent l'usage d'internet ; chaque apprenant respecte ses propres conditions",
      "Risque élevé d'arnaques et d'atteinte à la vie privée : aucun vrai numéro privé dans les exercices"
    ],
    prerequisites: "Aucun. Les apprenants qui n'ont jamais utilisé d'écran tactile peuvent d'abord suivre \"Utiliser un smartphone et une tablette\"."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de cinq tâches", action: "repérer les tâches du quotidien pour lesquelles un assistant d'IA peut aider et celles qui demandent une personne ou une source officielle", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "Sur un téléphone ou un ordinateur de bibliothèque", action: "ouvrir un assistant d'IA gratuit depuis son application ou son site officiel, envoyer un premier message et vous déconnecter à la fin", standard: "sans aide" },
    { id: "O3", condition: "À partir d'une vraie tâche de votre vie", action: "écrire un prompt qui dit ce dont vous avez besoin, votre situation et la forme de réponse voulue", standard: "pour que la première réponse soit utile" },
    { id: "O4", condition: "Face à une réponse de l'IA qui ne convient pas tout à fait", action: "demander des changements avec des questions de suivi, un à la fois", standard: "jusqu'à ce qu'elle soit courte, claire et adaptée à votre besoin, en trois essais au plus" },
    { id: "O5", condition: "Face à une réponse de l'IA qui contient un fait comme un numéro de téléphone, une adresse ou une règle", action: "vérifier ce fait sur un site officiel (en .gov ou le site de l'organisation elle-même)", standard: "avant de l'utiliser" },
    { id: "O6", condition: "Quand vous écrivez un prompt ou recevez un message urgent", action: "garder vos informations privées pour vous et repérer les signaux d'alerte d'une arnaque", standard: "sans partager aucun numéro privé, mot de passe ni code" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Premiers pas avec l'IA",
      lessons: [
        {
          title: "Ce qu'est un assistant d'IA, et ce qu'il n'est pas",
          objectives: ["O1"],
          minutes: 4,
          goal: "Expliquer avec vos propres mots ce qu'un assistant d'IA peut faire et ne peut pas faire.",
          text: [
            "Un assistant d'IA est un programme informatique auquel vous pouvez écrire ou parler avec des mots de tous les jours. Vous posez une question, et il écrit une réponse. Des assistants gratuits connus sont ChatGPT, Microsoft Copilot et Google Gemini.",
            "Il a appris à partir d'une énorme quantité de textes, alors il est doué pour expliquer des choses, écrire des brouillons, faire des listes et des plans, et transformer des mots difficiles en mots simples.",
            "Ce n'est pas une personne, un avocat, un médecin ni un service de l'État. Il ne vous connaît pas, et il peut se tromper, même quand il a l'air sûr de lui. C'est vous qui décidez : vous choisissez ce que vous demandez, et vous choisissez ce que vous croyez."
          ],
          words: [["IA", "abréviation d'intelligence artificielle : des programmes informatiques qui font des tâches qui demandent d'habitude une personne, comme écrire ou répondre à des questions."], ["Assistant d'IA", "un programme d'IA avec lequel on discute en écrivant ou en parlant."]],
          slides: [
            { title: "Un assistant d'IA, c'est...", bullets: ["Un programme informatique avec qui on discute", "Vous écrivez ou dites une question avec des mots simples", "Il écrit une réponse en quelques secondes"] },
            { title: "Il est doué pour", bullets: ["Expliquer les choses avec des mots simples", "Écrire des brouillons : lettres, messages, CV", "Faire des listes, des plans et des horaires"] },
            { title: "Ce n'est PAS", bullets: ["Une personne, un avocat, un médecin ou un service de l'État", "Toujours juste, même quand il a l'air sûr", "Celui qui décide : c'est vous"] }
          ],
          tryIt: "Écrivez trois choses de votre vie pour lesquelles un assistant d'IA pourrait vous aider cette semaine, par exemple une liste de courses, un message à un membre de votre famille, ou l'explication d'une lettre que vous avez reçue.",
          youCanNow: "dire ce qu'est un assistant d'IA, citer trois choses pour lesquelles il peut aider, et expliquer pourquoi vous vérifiez toujours ce qu'il vous dit.",
          quickCheck: [
            { objective: "O1", q: "Pour quelle tâche un assistant d'IA peut-il aider ?", options: ["Écrire une liste de courses à partir des repas que vous prévoyez", "Signer un formulaire juridique à votre place", "Payer vos factures depuis votre banque", "Aller à votre rendez-vous à votre place"], answer: 0, why: "Un assistant d'IA peut écrire et expliquer ; il ne peut pas signer, payer ou se présenter à votre place." },
            { objective: "O1", q: "Un assistant d'IA vous donne une date d'audience au tribunal. Qu'est-ce qui est vrai ?", options: ["Elle est toujours juste, car c'est un ordinateur", "Elle peut être fausse, alors vous vérifiez auprès du tribunal", "Seule l'IA peut changer la date", "Vous n'avez pas besoin de la noter"], answer: 1, why: "L'IA peut sembler sûre d'elle et se tromper quand même ; les dates et les règles viennent du service officiel." }
          ]
        },
        {
          title: "Ouvrir un assistant d'IA gratuit sur un téléphone ou un ordinateur de bibliothèque",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ouvrir un assistant d'IA gratuit et trouver la case où l'on écrit.",
          text: [
            "Vous pouvez utiliser un assistant d'IA sur un smartphone ou sur n'importe quel ordinateur relié à internet, comme ceux d'une bibliothèque publique ou d'un centre pour l'emploi.",
            "Sur un téléphone : ouvrez la boutique d'applications (Google Play sur Android, l'App Store sur iPhone), cherchez le nom de l'assistant, et installez l'application faite par la vraie entreprise (OpenAI pour ChatGPT, Microsoft pour Copilot, Google pour Gemini). N'installez qu'à partir de la boutique d'applications officielle.",
            "Sur un ordinateur : ouvrez le navigateur web et tapez l'adresse : chatgpt.com, copilot.microsoft.com ou gemini.google.com. Certains permettent de discuter sans compte ; d'autres demandent de vous connecter.",
            "Sur un ordinateur partagé ou de bibliothèque, ne laissez pas le navigateur enregistrer votre mot de passe, et déconnectez-vous puis fermez le navigateur quand vous avez fini."
          ],
          steps: ["Choisissez un téléphone ou un ordinateur relié à internet.", "Téléphone : installez l'application officielle depuis la boutique d'applications. Ordinateur : tapez l'adresse web dans le navigateur.", "Cherchez la case de message en bas de l'écran. Elle indique souvent \"Posez une question\" ou \"Message\".", "Sur un ordinateur partagé : déconnectez-vous et fermez le navigateur quand vous avez fini."],
          words: [["Navigateur web", "le programme qui sert à visiter des sites web, comme Chrome, Edge ou Safari."], ["Boutique d'applications", "l'endroit officiel sur un téléphone pour obtenir des applications sans danger."]],
          slides: [
            { title: "Où l'utiliser", bullets: ["Votre smartphone", "Un ordinateur de bibliothèque publique", "Un ordinateur d'un centre pour l'emploi ou de réinsertion"] },
            { title: "Sur un téléphone", bullets: ["Ouvrez la boutique d'applications officielle", "Cherchez le nom de l'assistant", "Installez l'application de la vraie entreprise"] },
            { title: "Sur un ordinateur", bullets: ["Ouvrez le navigateur web", "Tapez chatgpt.com, copilot.microsoft.com ou gemini.google.com", "Trouvez la case de message en bas"] },
            { title: "Sur un ordinateur partagé", bullets: ["N'enregistrez pas votre mot de passe", "Déconnectez-vous quand vous avez fini", "Fermez le navigateur"] }
          ],
          tryIt: "Ouvrez un assistant d'IA gratuit sur un téléphone ou un ordinateur. Trouvez la case de message et tapez : Bonjour, j'apprends à utiliser l'IA. Lisez sa réponse.",
          youCanNow: "ouvrir un assistant d'IA gratuit sur un téléphone ou un ordinateur, trouver où écrire, et quitter un ordinateur partagé en toute sécurité.",
          quickCheck: [
            { objective: "O2", q: "Vous voulez une application d'IA sur votre téléphone. Où la trouvez-vous ?", options: ["Dans un lien envoyé par SMS par un inconnu", "Sur n'importe quel site avec un bouton de téléchargement gratuit", "Dans la boutique d'applications officielle, auprès de la vraie entreprise", "Dans une copie qu'un ami vous envoie par message"], answer: 2, why: "La boutique d'applications officielle et le nom de la vraie entreprise empêchent les fausses applications d'arriver sur votre téléphone." },
            { objective: "O2", q: "Vous avez fini d'utiliser l'IA sur un ordinateur de bibliothèque. Que faites-vous d'abord ?", options: ["Le laisser ouvert pour la personne suivante", "Éteindre seulement l'écran", "Écrire votre mot de passe sur un papier", "Vous déconnecter et fermer le navigateur"], answer: 3, why: "Se déconnecter et fermer le navigateur empêche la personne suivante d'accéder à vos discussions et à vos comptes." }
          ]
        },
        {
          title: "Poser une question claire",
          objectives: ["O3"],
          minutes: 5,
          goal: "Écrire une demande claire qui obtient une réponse utile du premier coup.",
          text: [
            "Ce que vous écrivez à un assistant d'IA s'appelle un prompt (une consigne). Un prompt clair donne une meilleure réponse.",
            "Un bon prompt a trois parties : ce dont vous avez besoin, un peu de votre situation (sans détails privés), et la forme de réponse que vous voulez. Par exemple : \"Je commence un nouveau travail dans un entrepôt lundi à 7 h. Fais-moi une liste simple de choses à préparer la veille. Utilise des phrases courtes.\"",
            "Un prompt faible est trop court, comme \"conseils emploi\". L'assistant doit deviner ce que vous voulez dire, alors la réponse est générale."
          ],
          steps: ["Dites ce dont vous avez besoin.", "Ajoutez un peu de votre situation, sans détails privés.", "Dites la forme de réponse voulue : courte, mots simples, étapes, liste ou tableau."],
          words: [["Prompt (consigne)", "ce que vous écrivez ou dites à un assistant d'IA pour lui demander quelque chose."]],
          slides: [
            { title: "Le prompt, c'est ce que vous écrivez", bullets: ["Prompt clair = meilleure réponse", "Prompt court et vague = réponse générale"] },
            { title: "Trois parties d'un bon prompt", bullets: ["1. Ce dont vous avez besoin", "2. Un peu de votre situation", "3. La forme de réponse voulue"] },
            { title: "Faible ou clair", bullets: ["Faible : \"conseils emploi\"", "Clair : \"Je commence dans un entrepôt lundi à 7 h.", "Fais-moi une liste pour la veille.", "Utilise des phrases courtes.\""] }
          ],
          tryIt: "Choisissez une vraie tâche dans votre liste de la leçon 1. Écrivez un prompt avec les trois parties, envoyez-le et lisez la réponse.",
          youCanNow: "écrire un prompt avec ce dont vous avez besoin, votre situation et la forme de réponse voulue.",
          quickCheck: [
            { objective: "O3", q: "Quel prompt a les trois parties : ce dont vous avez besoin, votre situation et la forme de réponse voulue ?", options: ["\"Aide-moi.\"", "\"J'ai un entretien mardi pour un travail dans un entrepôt. Donne-moi 5 questions fréquentes dans une liste courte.\"", "\"Écris une liste.\"", "\"Entretien.\""], answer: 1, why: "Il dit ce dont vous avez besoin (des questions), votre situation (un entretien dans un entrepôt mardi) et la forme (une liste courte de 5)." },
            { objective: "O3", q: "Votre prompt dit ce dont vous avez besoin et votre situation. Que manque-t-il ?", options: ["La forme de réponse voulue, par exemple des étapes courtes ou une liste", "Votre nom complet et votre date de naissance", "Un mot de remerciement", "Rien ; il est complet"], answer: 0, why: "Dire la forme de réponse voulue (courte, simple, en étapes, en liste) est la troisième partie d'un prompt clair." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Premiers pas avec l'IA",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un assistant d'IA ?", options: ["Une personne qui répond à vos messages", "Un programme informatique avec qui on discute avec des mots de tous les jours", "Un site web du gouvernement", "Un type de téléphone"], answer: 1, why: "Un assistant d'IA est un programme auquel on écrit ou on parle ; il écrit des réponses." },
          { objective: "O1", q: "Un assistant d'IA a l'air très sûr de sa réponse. Que devez-vous faire ?", options: ["Le croire, puisqu'il a l'air sûr", "Ne plus jamais utiliser l'IA", "Demander à un ami de le croire à votre place", "Vérifier quand même, car il peut se tromper"], answer: 3, why: "L'IA peut se tromper même quand elle a l'air sûre. C'est vous qui décidez et qui vérifiez." },
          { objective: "O2", q: "Où installer une application d'IA sur un téléphone ?", options: ["Depuis la boutique d'applications officielle, faite par la vraie entreprise", "Depuis n'importe quel site web", "Depuis un lien dans un SMS", "Depuis une publicité qui s'ouvre toute seule"], answer: 0, why: "La boutique officielle et l'application de la vraie entreprise sont le choix sûr." },
          { objective: "O2", q: "Vous avez utilisé l'IA sur un ordinateur de bibliothèque. Que faites-vous quand vous avez fini ?", options: ["Le laisser ouvert pour la personne suivante", "Enregistrer votre mot de passe pour aller plus vite la prochaine fois", "Vous déconnecter et fermer le navigateur", "Couper l'internet de la bibliothèque"], answer: 2, why: "Se déconnecter et fermer le navigateur empêche la personne suivante d'entrer dans votre compte." },
          { objective: "O3", q: "Quel est le prompt le plus clair ?", options: ["\"aide\"", "\"conseils emploi\"", "\"Je commence dans un entrepôt lundi à 7 h. Fais une liste pour la veille en phrases courtes.\"", "\"dis-moi tout\""], answer: 2, why: "Il dit ce dont vous avez besoin, votre situation et la forme de réponse voulue." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA avec confiance",
      lessons: [
        {
          title: "Améliorer une réponse",
          objectives: ["O4"],
          minutes: 4,
          goal: "Poser des questions de suivi pour améliorer une réponse.",
          text: [
            "Vous n'êtes pas obligé d'accepter la première réponse. Un assistant d'IA se souvient de ce que vous avez dit plus tôt dans la même discussion, alors vous pouvez lui demander de changer sa réponse.",
            "Des questions de suivi utiles : \"Fais plus court.\" \"Utilise des mots plus simples.\" \"Explique mieux l'étape 2.\" \"Donne-moi un exemple.\" \"Mets-le sous forme de liste.\" \"Rends-le plus poli.\"",
            "Si la discussion part dans la mauvaise direction, commencez une nouvelle discussion et écrivez un prompt plus clair."
          ],
          steps: ["Lisez la première réponse.", "Décidez ce que vous voulez changer.", "Demandez ce seul changement.", "Recommencez jusqu'à ce que la réponse vous convienne."],
          words: [["Question de suivi", "une deuxième question qui s'appuie sur la réponse reçue."]],
          slides: [
            { title: "La première réponse est un brouillon", bullets: ["Vous pouvez demander des changements", "Il se souvient de la même discussion"] },
            { title: "Des questions de suivi qui marchent", bullets: ["\"Fais plus court.\"", "\"Utilise des mots plus simples.\"", "\"Explique mieux l'étape 2.\"", "\"Donne-moi un exemple.\""] },
            { title: "Ça part de travers ?", bullets: ["Commencez une nouvelle discussion", "Écrivez un prompt plus clair"] }
          ],
          tryIt: "Reprenez la réponse de la leçon 3. Demandez deux changements, l'un après l'autre, comme \"fais plus court\" puis \"utilise des mots plus simples\". Comparez la première et la dernière réponse.",
          youCanNow: "améliorer une réponse de l'IA en posant des questions de suivi claires.",
          quickCheck: [
            { objective: "O4", q: "La réponse utilise des mots difficiles à lire. Qu'envoyez-vous ensuite ?", options: ["\"Faux. Recommence.\"", "Rien ; vous fermez l'application", "\"Fais plus long.\"", "\"Utilise des mots plus simples.\""], answer: 3, why: "Une question de suivi claire qui dit le changement voulu corrige la réponse sans tout recommencer." },
            { objective: "O4", q: "Pourquoi demander les changements un à la fois ?", options: ["L'IA ne peut lire qu'un mot à la fois", "Vous voyez ce que chaque changement a fait", "Cela coûte moins cher", "L'IA se fâche quand les demandes sont longues"], answer: 1, why: "Un changement à la fois vous montre quelle demande a amélioré la réponse." }
          ]
        },
        {
          title: "Vérifier la réponse avant d'y croire",
          objectives: ["O5"],
          minutes: 5,
          goal: "Vérifier une réponse de l'IA auprès d'une source de confiance.",
          text: [
            "Les assistants d'IA inventent parfois des choses, comme un mauvais numéro de téléphone, un bureau qui n'existe pas, une ancienne règle ou une mauvaise date. On appelle parfois cela une hallucination.",
            "Vérifiez toujours tout ce qui concerne l'argent, la loi, votre santé, les aides publiques, les dates, les adresses et les numéros de téléphone. Vérifiez auprès de la source officielle : un site web du gouvernement (aux États-Unis, l'adresse finit en général par .gov), le bureau lui-même, ou une personne de confiance comme votre conseiller de probation, votre conseiller en réinsertion ou un bibliothécaire.",
            "Une bonne habitude : demandez à l'assistant \"Où puis-je vérifier cela ?\" puis allez vous-même sur cette page officielle, au lieu de faire confiance à un lien sans regarder."
          ],
          steps: ["Repérez les faits dans la réponse : chiffres, dates, noms, règles.", "Cherchez-les sur le site officiel (souvent en .gov) ou appelez le bureau.", "S'ils ne correspondent pas, croyez la source officielle.", "Pour les grandes décisions, demandez aussi à une personne de confiance."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui semble vrai mais qui est inventé."], [".gov", "la fin des adresses des sites web officiels du gouvernement des États-Unis."]],
          slides: [
            { title: "L'IA peut inventer des choses", bullets: ["Mauvais numéros de téléphone ou adresses", "Anciennes règles ou mauvaises dates", "Bureaux qui n'existent pas"] },
            { title: "Vérifiez toujours", bullets: ["L'argent et les aides", "La loi et les règles", "La santé", "Les dates, adresses et numéros de téléphone"] },
            { title: "Comment vérifier", bullets: ["Site officiel, souvent en .gov", "Appelez le bureau", "Demandez à votre conseiller ou à un bibliothécaire"] }
          ],
          tryIt: "Demandez à un assistant d'IA le numéro de téléphone ou le site web d'un vrai bureau près de chez vous (par exemple le service des permis de conduire de votre État). Puis trouvez vous-même le site officiel de ce bureau et voyez si la réponse correspond.",
          youCanNow: "repérer les faits à vérifier et les vérifier auprès d'une source officielle.",
          quickCheck: [
            { objective: "O5", q: "L'IA vous donne un numéro de téléphone pour le service des permis de conduire. Que faites-vous ?", options: ["Vous cherchez le numéro sur le site officiel du service et vous comparez", "Vous appelez tout de suite", "Vous le partagez en ligne", "Vous demandez à l'IA si elle est sûre"], answer: 0, why: "Seul le site officiel peut confirmer le numéro ; l'IA peut inventer des numéros qui ont l'air vrais." },
            { objective: "O5", q: "Quelle adresse web est le plus probablement un site officiel du gouvernement des États-Unis ?", options: ["dmv-help-now.com", "freegovforms.net", "dmv.ca.gov", "govservices.info"], answer: 2, why: "Les sites officiels du gouvernement des États-Unis finissent en général par .gov." }
          ]
        },
        {
          title: "Protéger vos informations privées",
          objectives: ["O6"],
          minutes: 5,
          goal: "Utiliser l'IA sans partager d'informations privées, et repérer les arnaques qui utilisent l'IA.",
          text: [
            "Ne tapez pas d'informations privées dans un assistant d'IA : votre numéro de sécurité sociale (le Social Security number aux États-Unis), vos numéros de pièce d'identité, votre numéro de dossier ou d'écrou, vos mots de passe, vos numéros de compte bancaire ou de carte, ou votre adresse complète. Vous pouvez obtenir l'aide dont vous avez besoin sans eux. Écrivez \"[mon numéro]\" à la place.",
            "Les arnaqueurs utilisent aussi l'IA. Ils peuvent écrire des messages qui ont l'air vrais et même imiter la voix d'un membre de votre famille au téléphone. Méfiez-vous de tout message qui vous presse, qui demande de l'argent ou des cartes cadeaux, ou qui demande un code envoyé sur votre téléphone.",
            "Si quelque chose vous semble bizarre, arrêtez. Raccrochez, et rappelez la personne ou le bureau avec un numéro dont vous êtes sûr."
          ],
          steps: ["Avant d'envoyer un prompt, relisez-le pour repérer les informations privées et retirez-les.", "Utilisez un repère comme \"[mon numéro]\".", "Considérez les messages pressants, les demandes d'argent et les demandes de code comme des signaux d'alerte.", "Rappelez avec un numéro dont vous êtes sûr."],
          words: [["Informations privées", "des détails qui pourraient permettre à quelqu'un de se faire passer pour vous ou de prendre votre argent."], ["Arnaque", "une ruse pour voler de l'argent ou des informations."]],
          slides: [
            { title: "Ne tapez jamais dans l'IA", bullets: ["Numéro de sécurité sociale ou de pièce d'identité", "Numéro de dossier ou d'écrou", "Mots de passe, numéros de banque ou de carte"] },
            { title: "Utilisez un repère", bullets: ["Écrivez \"[mon numéro]\" à la place", "Vous obtenez quand même l'aide voulue"] },
            { title: "Signaux d'alerte d'arnaque", bullets: ["On vous presse", "On demande de l'argent ou des cartes cadeaux", "On demande un code envoyé sur votre téléphone"] },
            { title: "En cas de doute", bullets: ["Arrêtez", "Raccrochez", "Rappelez avec un numéro dont vous êtes sûr"] }
          ],
          tryIt: "Tâche finale : utilisez un assistant d'IA pour écrire un message court et poli qui demande à une entreprise si elle embauche. Demandez un changement pour l'améliorer, vérifiez qu'il ne contient aucune information privée, et lisez-le à voix haute.",
          youCanNow: "utiliser un assistant d'IA pour une vraie tâche tout en protégeant vos informations privées, et repérer les signes d'une arnaque.",
          quickCheck: [
            { objective: "O6", q: "Un formulaire d'embauche demande votre numéro de sécurité sociale et vous voulez l'aide de l'IA. Que tapez-vous ?", options: ["Votre vrai numéro, pour que l'IA le vérifie", "Votre numéro avec un chiffre changé", "Votre numéro de carte bancaire à la place", "Un repère comme [mon numéro]"], answer: 3, why: "Un repère permet à l'IA de vous aider à rédiger pendant que votre vrai numéro reste privé." },
            { objective: "O6", q: "Un SMS dit que vos aides s'arrêtent aujourd'hui si vous n'envoyez pas le code que vous venez de recevoir. Qu'est-ce que c'est ?", options: ["Une arnaque ; ne partagez jamais le code", "Un message normal de votre service", "Un test que vous devez réussir", "Un rappel pour mettre à jour votre téléphone"], answer: 0, why: "Vous presser et demander un code sont des signaux d'alerte d'arnaque ; les vrais services ne demandent pas ces codes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA avec confiance",
        questions: [
          { objective: "O4", q: "La première réponse est trop longue. Quelle est la meilleure chose à faire ?", options: ["Demander : \"Fais plus court\"", "Abandonner", "La copier quand même", "Éteindre le téléphone"], answer: 0, why: "Une question de suivi demande à l'assistant de changer sa réponse." },
          { objective: "O5", q: "Laquelle de ces choses devez-vous TOUJOURS vérifier auprès d'une source officielle ?", options: ["Une blague", "Une liste de courses", "Un poème", "Le numéro de téléphone d'un service public"], answer: 3, why: "Les numéros, les dates, l'argent, la loi et les aides peuvent être faux et doivent être vérifiés." },
          { objective: "O5", q: "Que veut dire \"hallucination\" quand on parle d'IA ?", options: ["L'IA est fatiguée", "L'IA a écrit quelque chose qui semble vrai mais qui est inventé", "L'écran est cassé", "Un type d'application"], answer: 1, why: "L'IA peut inventer des faits qui semblent vrais." },
          { objective: "O6", q: "Que devez-vous écrire à la place de votre numéro de sécurité sociale dans un prompt ?", options: ["Le vrai numéro", "Un repère comme \"[mon numéro]\"", "La moitié du numéro", "Votre numéro de compte bancaire"], answer: 1, why: "Un repère vous permet d'obtenir de l'aide sans partager d'informations privées." },
          { objective: "O6", q: "Vous recevez un appel avec la voix d'un membre de votre famille qui demande tout de suite des cartes cadeaux. Que faites-vous ?", options: ["Acheter vite les cartes cadeaux", "Lui donner le code reçu sur votre téléphone", "Envoyer votre numéro de compte", "Raccrocher et le rappeler avec un numéro dont vous êtes sûr"], answer: 3, why: "Les arnaqueurs peuvent imiter des voix. L'urgence et les cartes cadeaux sont des signaux d'alerte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Découvrir l'IA et prendre confiance avec le numérique",
    questions: [
      { objective: "O1", q: "La meilleure description d'un assistant d'IA est :", options: ["Un programme informatique avec qui on discute", "Un employé du gouvernement", "Une compagnie de téléphone", "Un site web qui ne fait que vendre"], answer: 0, why: "C'est un programme auquel on écrit ou on parle." },
      { objective: "O1", q: "Pour quelle tâche un assistant d'IA est-il doué ?", options: ["Prendre des décisions juridiques à votre place", "Signer des documents à votre place", "Expliquer une lettre difficile avec des mots simples", "Connaître votre passé privé"], answer: 2, why: "Expliquer avec des mots simples est l'un de ses points forts." },
      { objective: "O1", q: "Qui décide quand vous utilisez un assistant d'IA ?", options: ["L'IA", "La boutique d'applications", "Vous", "Personne"], answer: 2, why: "Vous choisissez ce que vous demandez et ce que vous croyez." },
      { objective: "O2", q: "Lequel est un assistant d'IA gratuit connu ?", options: ["Microsoft Copilot", "Une calculatrice", "Un SMS", "Une imprimante"], answer: 0, why: "Copilot, ChatGPT et Gemini sont des assistants gratuits connus." },
      { objective: "O2", q: "Sur un téléphone, l'endroit sûr pour obtenir une application d'IA est :", options: ["Un lien dans un SMS d'un inconnu", "N'importe quel site web", "Une publicité qui s'ouvre toute seule", "La boutique d'applications officielle"], answer: 3, why: "N'installez qu'à partir de la boutique officielle." },
      { objective: "O2", q: "Quelle adresse web ouvre un assistant d'IA sur un ordinateur ?", options: ["monjob.gift", "copilot.microsoft.com", "argentgratuit.win", "aucune de celles-ci"], answer: 1, why: "copilot.microsoft.com est l'adresse officielle de Microsoft pour Copilot." },
      { objective: "O2", q: "Où écrivez-vous en général votre question ?", options: ["Dans la barre d'adresse du téléphone", "Dans la case de message en bas de l'écran", "Sur l'icône de la batterie", "Dans l'appareil photo"], answer: 1, why: "La case de message indique souvent \"Posez une question\" ou \"Message\"." },
      { objective: "O2", q: "Après avoir utilisé un ordinateur de bibliothèque, vous devez :", options: ["Enregistrer votre mot de passe", "Écrire votre mot de passe sur un papier", "Laisser votre compte ouvert", "Vous déconnecter et fermer le navigateur"], answer: 3, why: "Cela protège votre compte de la personne suivante." },
      { objective: "O3", q: "Qu'est-ce qu'un prompt ?", options: ["Ce que vous écrivez ou dites à un assistant d'IA", "Une alarme de rappel", "Un type de chargeur de téléphone", "Une fin d'adresse de site web"], answer: 0, why: "Un prompt est votre demande à l'IA." },
      { objective: "O3", q: "Un bon prompt contient :", options: ["Un seul mot", "Votre numéro de sécurité sociale", "Ce dont vous avez besoin, votre situation et la forme de réponse voulue", "Votre mot de passe"], answer: 2, why: "Ces trois parties donnent une réponse utile." },
      { objective: "O3", q: "Quel prompt donnera sans doute la réponse la plus utile ?", options: ["\"cv\"", "\"aide-moi\"", "\"J'ai travaillé 3 ans en cuisine. Aide-moi à lister mes compétences pour un poste de cuisinier, en points courts.\"", "\"des trucs\""], answer: 2, why: "Il donne le besoin, la situation et la forme." },
      { objective: "O4", q: "La première réponse de l'IA n'est pas tout à fait juste. Vous pouvez :", options: ["Poser une question de suivi pour la changer", "Seulement l'accepter", "Payer pour la corriger", "Redémarrer votre téléphone"], answer: 0, why: "Des questions de suivi comme \"utilise des mots plus simples\" améliorent la réponse." },
      { objective: "O4", q: "Laquelle est une bonne question de suivi ?", options: ["\"Envoie de l'argent.\"", "\"Voici mon numéro de compte.\"", "\"Supprime mon téléphone.\"", "\"Explique mieux l'étape 2.\""], answer: 3, why: "Elle demande un changement clair de la réponse." },
      { objective: "O4", q: "Si une discussion part dans la mauvaise direction, une bonne idée est de :", options: ["Taper votre mot de passe", "Commencer une nouvelle discussion avec un prompt plus clair", "Répéter sans cesse les mêmes mots", "Ne plus jamais utiliser l'IA"], answer: 1, why: "Une nouvelle discussion avec un prompt plus clair marche en général mieux." },
      { objective: "O5", q: "Quand l'IA donne le numéro de téléphone d'un bureau, vous devez :", options: ["L'appeler sans vérifier", "Le vérifier sur le site officiel du bureau", "Le publier en ligne", "Lui donner votre numéro de pièce d'identité"], answer: 1, why: "L'IA peut donner de mauvais numéros ; vérifiez auprès de la source officielle." },
      { objective: "O5", q: "Les sites officiels du gouvernement des États-Unis finissent en général par :", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: ".gov est utilisé par les sites du gouvernement américain." },
      { objective: "O6", q: "Qu'est-ce que vous ne devez JAMAIS taper dans un assistant d'IA ?", options: ["Votre numéro de carte bancaire", "\"Fais plus court\"", "\"Donne-moi un exemple\"", "\"Utilise des mots plus simples\""], answer: 0, why: "Les numéros de banque et de carte sont des informations privées." },
      { objective: "O6", q: "Un message vous presse de payer avec des cartes cadeaux. C'est :", options: ["Une facture normale", "Une offre d'emploi", "Un signal d'alerte d'arnaque", "Une règle du gouvernement"], answer: 2, why: "L'urgence et les cartes cadeaux sont des signes d'arnaque courants." },
      { objective: "O6", q: "Quelqu'un vous demande le code que vous venez de recevoir par SMS. Vous devez :", options: ["Le lui lire", "Le publier en ligne", "Ne jamais le partager", "L'envoyer à vos amis"], answer: 2, why: "Ce code protège votre compte. Les vrais services ne le demandent pas." },
      { objective: "O6", q: "Si quelque chose vous semble bizarre pendant un appel, le plus sûr est de :", options: ["Raccrocher et rappeler avec un numéro dont vous êtes sûr", "Continuer à parler", "Donner votre adresse", "Envoyer un petit paiement"], answer: 0, why: "Rappeler avec un numéro connu arrête la plupart des arnaques." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Demande claire", objective: "O3", notYet: "Le prompt est vague, par exemple \"écris un message\".", meets: "Le prompt dit ce dont vous avez besoin, votre situation et la forme de réponse voulue.", exceeds: "Il nomme aussi l'entreprise et le poste, et la première réponse est presque prête." },
      { name: "Message amélioré", objective: "O4", notYet: "La première réponse a été utilisée telle quelle.", meets: "Un changement a été demandé et le message s'est amélioré.", exceeds: "Deux changements ou plus ont été demandés, un à la fois, et l'apprenant peut dire ce que chacun a corrigé." },
      { name: "Informations privées protégées", objective: "O6", notYet: "Le prompt ou le message contient un numéro privé, un mot de passe, une adresse ou une date de naissance.", meets: "Aucune information privée dans le prompt ni dans le message.", exceeds: "Un repère comme [mon numéro de téléphone] a été utilisé, puis rempli seulement dans le message que l'apprenant envoie lui-même." },
      { name: "Faits vérifiés", objective: "O5", notYet: "Le nom, l'adresse ou les horaires de l'entreprise ont été copiés de l'IA sans vérification.", meets: "Chaque fait sur l'entreprise a été vérifié sur son propre site ou dans un annuaire officiel.", exceeds: "L'apprenant peut dire où il a vérifié." },
      { name: "Ça vous ressemble", objective: "O1", notYet: "Le message utilise des mots que l'apprenant ne dirait pas ou ne comprend pas.", meets: "Lu à voix haute, il est poli, court et dans les mots de l'apprenant.", exceeds: "L'apprenant a lui-même changé quelques mots pour qu'il lui ressemble davantage." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui commencent un autre cours Koach Learn dans les 30 jours",
      "Apprenants qui disent avoir utilisé l'IA pour une candidature, un message ou un courrier dans les 30 jours (questionnaire de suivi)",
      "Les partenaires de réinsertion signalent moins de demandes d'aide pour des démarches en ligne simples"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un smartphone relié à internet, ou un ordinateur de bibliothèque ou du programme",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Du papier et un stylo pour les notes \"Essayez maintenant\"",
      "Environ 60 minutes au total, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Dans une salle informatique ou un centre de réinsertion : faites le test de départ ensemble, puis un chapitre par séance, avec les tâches \"Essayez maintenant\" faites en direct.",
      "Avant que les apprenants partent, vérifiez que chacun se déconnecte des ordinateurs partagés.",
      "Ne demandez jamais aux apprenants de taper de vraies informations privées pendant la pratique ; utilisez des repères comme [mon numéro].",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne Pas encore à la fois.",
      "Rappelez aux apprenants en libération conditionnelle ou en probation de respecter leurs conditions sur l'usage d'internet."
    ]
  }
};
