"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-for-seniors.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-for-seniors-fr",
  lang: "fr",
  translationOf: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "L'IA pour les seniors : utiliser un assistant IA",
  skills: "Ouvrir un assistant IA gratuit, Taper ou dire une question, Demander des réponses plus simples, Vérifier ce qu'il dit, Protéger ses informations privées",
  outcome: "ouvrir un assistant IA gratuit sur votre téléphone, tablette ou ordinateur, lui poser une question claire en tapant ou en parlant, lui demander d'expliquer plus simplement et vérifier la réponse avant d'agir.",
  about: [
    "Ce cours s'adresse aux personnes âgées qui ont entendu parler des assistants IA comme ChatGPT, Microsoft Copilot ou Google Gemini et qui veulent en essayer un, doucement et en sécurité. Aucune expérience n'est nécessaire.",
    "Vous allez ouvrir un assistant, lui poser de vraies questions sur votre vie, par exemple une recette, une lettre du cabinet médical ou un message d'anniversaire pour un petit-enfant, et apprendre à rendre ses réponses plus claires.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant » à votre rythme. Un court contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. Vous pouvez refaire chaque leçon autant de fois que vous voulez."
  ],
  finalTask: "Utilisez un assistant IA pour préparer un repas de famille simple : demandez une recette facile pour quatre personnes, demandez-lui de mettre les étapes en courtes lignes numérotées, posez une question de suivi et vérifiez un fait (par exemple une température de cuisson) sur un site de confiance ou auprès d'une personne de confiance.",
  chapters: [
    {
      name: "Chapitre 1 : Découvrir votre assistant IA",
      lessons: [
        {
          title: "Ce qu'est un assistant IA",
          minutes: 4,
          goal: "Dire avec vos propres mots ce qu'un assistant IA peut faire et ne peut pas faire pour vous.",
          text: [
            "Un assistant IA est un programme informatique à qui vous pouvez parler ou écrire avec des mots de tous les jours, comme si vous écriviez un mot à un voisin serviable. Vous posez une question et, quelques secondes plus tard, il écrit une réponse.",
            "Parmi les assistants gratuits connus, il y a ChatGPT, Microsoft Copilot et Google Gemini. Ils savent bien expliquer les choses simplement, écrire un premier brouillon de carte ou de lettre, donner des idées pour un loisir et faire des listes.",
            "Un assistant n'est pas une personne, et ce n'est ni votre médecin, ni votre avocat, ni votre banque. Il ne vous connaît pas, et il peut se tromper même quand il a l'air très sûr de lui. C'est vous qui décidez : ce que vous demandez et ce que vous croyez."
          ],
          words: [["IA", "abréviation d'intelligence artificielle : des programmes informatiques capables d'écrire ou de répondre à des questions."], ["Assistant IA", "un programme d'IA avec lequel vous discutez en tapant ou en parlant."]],
          slides: [
            { title: "Un assistant IA, c'est...", bullets: ["Un programme informatique avec qui vous discutez", "Vous posez vos questions avec des mots simples", "Il écrit une réponse en quelques secondes"] },
            { title: "Il peut vous aider à", bullets: ["Expliquer simplement un mot ou une lettre difficile", "Préparer une carte d'anniversaire ou un mot de remerciement", "Trouver des idées de recettes, de loisirs et de voyages"] },
            { title: "Ce n'est PAS", bullets: ["Votre médecin, votre avocat ou votre banque", "Toujours juste, même s'il a l'air sûr", "Le chef : c'est vous"] }
          ],
          tryIt: "Sur une feuille, écrivez trois choses pour lesquelles un assistant IA pourrait vous aider ce mois-ci, par exemple une carte pour un petit-enfant, une question sur une plante du jardin ou une recette.",
          youCanNow: "dire ce qu'est un assistant IA, citer trois façons dont il peut vous aider et expliquer pourquoi vous vérifiez quand même ce qu'il dit."
        },
        {
          title: "Ouvrir un assistant sur votre téléphone, tablette ou ordinateur",
          minutes: 6,
          goal: "Ouvrir un assistant IA gratuit et trouver la zone où taper ou parler.",
          text: [
            "Vous pouvez utiliser un assistant sur un smartphone, une tablette ou un ordinateur. Choisissez l'appareil avec lequel vous êtes le plus à l'aise. Un petit-enfant, un ami ou un employé de la bibliothèque peut s'asseoir avec vous la première fois.",
            "Sur un téléphone ou une tablette : ouvrez la boutique d'applications (le Play Store sur Android, l'App Store sur iPhone et iPad). Touchez la zone de recherche, tapez le nom de l'assistant et installez l'application de la vraie entreprise : OpenAI pour ChatGPT, Microsoft pour Copilot, Google pour Gemini.",
            "Sur un ordinateur : ouvrez votre navigateur web et tapez l'adresse avec soin, par exemple chatgpt.com, copilot.microsoft.com ou gemini.google.com. Certains vous laissent commencer sans compte ; d'autres vous demandent de vous connecter.",
            "Cherchez la zone de message, en général en bas de l'écran. Elle affiche souvent « Posez une question » ou « Message ». Beaucoup d'applications montrent aussi un petit micro que vous pouvez toucher pour parler au lieu de taper."
          ],
          steps: ["Choisissez votre téléphone, tablette ou ordinateur.", "Téléphone ou tablette : installez l'application officielle depuis la boutique d'applications. Ordinateur : tapez l'adresse web dans le navigateur.", "Trouvez la zone de message en bas de l'écran.", "Trouvez le bouton micro si vous préférez parler."],
          words: [["Boutique d'applications", "l'endroit officiel sur un téléphone ou une tablette pour obtenir des applications en sécurité."], ["Navigateur web", "le programme qui sert à visiter des sites web, comme Chrome, Edge ou Safari."], ["Bouton micro", "un petit dessin de micro que vous touchez pour parler au lieu de taper."]],
          slides: [
            { title: "Utilisez ce qui vous convient", bullets: ["Smartphone, tablette ou ordinateur", "Demandez à un proche ou à un bibliothécaire de vous accompagner"] },
            { title: "Sur un téléphone ou une tablette", bullets: ["Ouvrez la boutique d'applications officielle", "Cherchez le nom de l'assistant", "Installez l'application de la vraie entreprise"] },
            { title: "Sur un ordinateur", bullets: ["Ouvrez le navigateur web", "Tapez chatgpt.com, copilot.microsoft.com ou gemini.google.com", "Tapez l'adresse avec soin"] },
            { title: "Trouver où parler", bullets: ["Zone de message en bas de l'écran", "Elle peut afficher « Posez une question »", "Le bouton micro vous permet de parler"] }
          ],
          tryIt: "Ouvrez un assistant gratuit. Trouvez la zone de message et tapez, ou dites : Bonjour, je débute. Merci de répondre avec des phrases courtes et simples. Lisez sa réponse.",
          youCanNow: "ouvrir un assistant IA gratuit et trouver où taper ou dire votre question."
        },
        {
          title: "Poser une question claire",
          minutes: 5,
          goal: "Écrire ou dire une question qui donne une réponse utile du premier coup.",
          text: [
            "Ce que vous tapez ou dites à un assistant s'appelle une consigne (en anglais, un « prompt »). Plus la consigne est claire, meilleure est la réponse.",
            "Une bonne consigne a trois parties : ce dont vous avez besoin, un peu de votre situation, et la forme de réponse voulue. Par exemple : « Ma petite-fille a 8 ans samedi et elle adore les chevaux. Écris un court message d'anniversaire de la part de Mamie. Utilise des mots simples. »",
            "Une consigne trop courte, comme « anniversaire », oblige l'assistant à deviner, et vous obtenez une réponse générale. Vous pouvez écrire quelques phrases. Prenez votre temps ; l'assistant vous attend."
          ],
          steps: ["Dites ce dont vous avez besoin.", "Ajoutez un peu de votre situation, sans détails privés.", "Dites quelle réponse vous voulez : courte, avec des mots simples, en grandes étapes ou sous forme de liste."],
          words: [["Consigne (prompt)", "ce que vous tapez ou dites à un assistant IA pour lui demander quelque chose."]],
          slides: [
            { title: "La consigne est votre question", bullets: ["Consigne claire = meilleure réponse", "Trop courte = réponse générale"] },
            { title: "Les trois parties d'une bonne consigne", bullets: ["1. Ce dont vous avez besoin", "2. Un peu de votre situation", "3. La forme de réponse voulue"] },
            { title: "Un exemple", bullets: ["« Ma petite-fille a 8 ans et adore les chevaux.", "Écris un court message d'anniversaire de la part de Mamie.", "Utilise des mots simples. »"] }
          ],
          tryIt: "Choisissez une idée de votre liste de la leçon 1. Écrivez une consigne avec les trois parties, envoyez-la et lisez la réponse lentement.",
          youCanNow: "poser une question claire à un assistant IA en disant ce dont vous avez besoin, votre situation et la forme de réponse voulue."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Découvrir votre assistant IA",
        questions: [
          { q: "Qu'est-ce qu'un assistant IA ?", options: ["Une personne dans un centre d'appels", "Un type de télévision", "Un programme informatique avec qui on discute avec des mots simples", "Un bureau de l'administration"], answer: 2, why: "Un assistant IA est un programme à qui vous écrivez ou parlez, et qui vous répond par écrit." },
          { q: "L'assistant a l'air très sûr de lui sur une question de médicament. Que faites-vous ?", options: ["Je vérifie avec mon médecin ou mon pharmacien", "Je suis son conseil tout de suite", "J'arrête tous mes médicaments", "Je dis à mon voisin de suivre son conseil"], answer: 0, why: "L'IA peut se tromper même quand elle a l'air sûre ; les questions de santé vont au médecin ou au pharmacien." },
          { q: "Où obtenir une application d'IA en sécurité sur un téléphone ou une tablette ?", options: ["Par un lien dans un SMS d'un inconnu", "Par une publicité qui s'ouvre toute seule", "Sur n'importe quel site", "Dans la boutique d'applications officielle, auprès de la vraie entreprise"], answer: 3, why: "La boutique officielle et l'application de la vraie entreprise sont le choix sûr." },
          { q: "Vous préférez parler plutôt que taper. Que cherchez-vous ?", options: ["L'icône de la batterie", "Le bouton micro", "L'appareil photo", "Le bouton du volume"], answer: 1, why: "Le bouton micro vous permet de dire votre question." },
          { q: "Quelle consigne est la plus claire ?", options: ["« anniversaire »", "« Ma petite-fille a 8 ans et adore les chevaux. Écris un court message d'anniversaire de la part de Mamie, avec des mots simples. »", "« aide »", "« carte »"], answer: 1, why: "Elle dit ce dont vous avez besoin, votre situation et la forme de réponse voulue." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Obtenir de bonnes réponses en sécurité",
      lessons: [
        {
          title: "Demander une réponse plus simple ou plus courte",
          minutes: 4,
          goal: "Utiliser des questions de suivi pour rendre une réponse plus facile à lire et à utiliser.",
          text: [
            "Vous n'êtes jamais obligé d'accepter la première réponse. L'assistant se souvient de ce que vous avez dit plus tôt dans la même conversation, donc vous pouvez lui demander de modifier sa réponse.",
            "Des questions de suivi utiles : « Utilise des mots plus simples. » « Fais plus court. » « Mets-le en étapes numérotées. » « Explique encore l'étape 3. » « Donne-moi un exemple. » « Rends-le plus chaleureux. »",
            "Si vous avez du mal à lire les petits caractères, vous pouvez aussi agrandir le texte sur votre appareil. Demandez à un proche de vous montrer le réglage de taille du texte, ou demandez à l'assistant : « Comment agrandir le texte sur mon iPhone ? »"
          ],
          steps: ["Lisez la première réponse lentement.", "Décidez ce qui la rendrait meilleure.", "Demandez ce seul changement.", "Recommencez jusqu'à ce que la réponse vous convienne."],
          words: [["Question de suivi", "une deuxième question qui s'appuie sur la réponse reçue."]],
          slides: [
            { title: "La première réponse n'est qu'un brouillon", bullets: ["Vous pouvez demander des changements", "Il se souvient de la même conversation"] },
            { title: "Des questions de suivi qui marchent", bullets: ["« Utilise des mots plus simples. »", "« Fais plus court. »", "« Mets-le en étapes numérotées. »", "« Explique encore l'étape 3. »"] },
            { title: "Difficile à lire ?", bullets: ["Agrandissez le texte sur votre appareil", "Demandez à l'assistant comment faire", "Demandez à un proche de vous montrer"] }
          ],
          tryIt: "Reprenez la réponse de la leçon 3. Demandez deux changements, l'un après l'autre, par exemple « fais plus court » puis « rends-le plus chaleureux ». Comparez la première et la dernière réponse.",
          youCanNow: "améliorer une réponse de l'IA en posant des questions de suivi claires."
        },
        {
          title: "Vérifier une réponse avant d'agir",
          minutes: 5,
          goal: "Vérifier une réponse de l'IA auprès d'une source de confiance avant de vous y fier.",
          text: [
            "Les assistants IA inventent parfois des choses : un faux numéro de téléphone, des horaires de magasin, un fait sur un médicament ou une règle qui a changé. On appelle cela une hallucination.",
            "Vérifiez toujours ce qui concerne votre santé, vos médicaments, votre argent, vos aides comme Social Security (la retraite publique américaine) ou Medicare (l'assurance santé publique américaine pour les seniors), les dates, les adresses et les numéros de téléphone. Vérifiez sur le site officiel, auprès du bureau lui-même, de votre médecin ou pharmacien, ou d'une personne de confiance.",
            "Une bonne habitude est de demander : « Où puis-je vérifier cela ? » Puis cherchez vous-même cette page officielle. Les sites officiels du gouvernement des États-Unis se terminent par .gov."
          ],
          steps: ["Repérez les faits dans la réponse : chiffres, dates, noms, règles.", "Cherchez-les sur le site officiel ou appelez le bureau.", "S'ils ne correspondent pas, faites confiance à la source officielle.", "Pour la santé et l'argent, demandez aussi à votre médecin, à votre pharmacien ou à une personne de confiance."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui a l'air vrai mais qui est inventé."], [".gov", "la fin des adresses des sites officiels du gouvernement des États-Unis."]],
          slides: [
            { title: "L'IA peut inventer", bullets: ["Faux numéros de téléphone ou horaires", "Règles dépassées", "Faux renseignements sur des médicaments"] },
            { title: "Vérifiez toujours", bullets: ["La santé et les médicaments", "L'argent et les aides", "Les dates, adresses et numéros de téléphone"] },
            { title: "Comment vérifier", bullets: ["Site officiel, souvent en .gov aux États-Unis", "Appelez le bureau", "Demandez à votre médecin, pharmacien ou à une personne de confiance"] }
          ],
          tryIt: "Demandez à un assistant les horaires d'ouverture de votre bibliothèque. Puis vérifiez sur le site de la bibliothèque ou appelez-la. La réponse était-elle juste ?",
          youCanNow: "repérer les faits à vérifier et les vérifier auprès d'une source de confiance."
        },
        {
          title: "Protéger vos informations privées",
          minutes: 5,
          goal: "Utiliser un assistant IA sans partager d'informations privées.",
          text: [
            "Ne tapez jamais d'informations privées dans un assistant IA : votre numéro de Social Security ou de sécurité sociale, votre numéro Medicare, vos numéros de compte ou de carte bancaire, vos mots de passe ou votre adresse complète. Vous pouvez obtenir l'aide nécessaire sans eux. Écrivez plutôt « [mon numéro] ».",
            "Les escrocs utilisent aussi l'IA. Ils peuvent écrire des messages très convaincants et même imiter au téléphone la voix d'un petit-enfant. Méfiez-vous de tout appel ou message qui vous presse, demande de l'argent ou des cartes cadeaux, ou demande un code envoyé sur votre téléphone.",
            "Si quelque chose vous semble anormal, arrêtez. Raccrochez, et rappelez la personne à un numéro que vous savez être le bon."
          ],
          steps: ["Avant d'envoyer une consigne, relisez-la pour repérer les informations privées.", "Remplacez-les par un mot de remplacement comme « [mon numéro] ».", "Considérez l'urgence, les cartes cadeaux et les demandes de code comme des signaux d'alerte.", "Rappelez à un numéro que vous connaissez déjà."],
          words: [["Informations privées", "des détails qui permettraient à quelqu'un de se faire passer pour vous ou de prendre votre argent."], ["Mot de remplacement", "un mot comme « [mon numéro] » utilisé à la place du vrai détail."]],
          slides: [
            { title: "Ne tapez jamais dans une IA", bullets: ["Vos numéros de sécurité sociale ou Medicare", "Vos numéros de compte ou de carte bancaire", "Vos mots de passe"] },
            { title: "Utilisez un mot de remplacement", bullets: ["Écrivez plutôt « [mon numéro] »", "Vous obtenez quand même l'aide nécessaire"] },
            { title: "Signaux d'alerte d'arnaque", bullets: ["On vous presse", "On veut de l'argent ou des cartes cadeaux", "On vous demande un code reçu sur votre téléphone"] },
            { title: "En cas de doute", bullets: ["Arrêtez", "Raccrochez", "Rappelez à un numéro que vous savez être le bon"] }
          ],
          tryIt: "Tâche finale : demandez à un assistant une recette facile pour quatre personnes, demandez-lui de mettre les étapes en courtes lignes numérotées, posez une question de suivi et vérifiez un fait, comme une température de cuisson, sur un site de confiance ou auprès d'une personne de confiance.",
          youCanNow: "utiliser un assistant IA pour une vraie tâche, vérifier sa réponse et protéger vos informations privées."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Obtenir de bonnes réponses en sécurité",
        questions: [
          { q: "La réponse contient des mots que vous ne comprenez pas. Que tapez-vous ?", options: ["« Fais plus long. »", "Votre numéro Medicare", "Rien ; je ferme l'application", "« Utilise des mots plus simples. »"], answer: 3, why: "Une question de suivi demande à l'assistant de modifier sa réponse." },
          { q: "Que faut-il TOUJOURS vérifier auprès d'une source de confiance ?", options: ["La dose de médicament à prendre", "Une blague", "Un poème d'anniversaire", "Une liste de noms de fleurs"], answer: 0, why: "Les renseignements sur la santé et les médicaments doivent être vérifiés avec votre médecin ou pharmacien." },
          { q: "Qu'est-ce qu'une « hallucination » en IA ?", options: ["L'écran est trop lumineux", "Un type d'application", "L'IA a écrit quelque chose qui a l'air vrai mais qui est inventé", "Une connexion internet lente"], answer: 2, why: "L'IA peut inventer des faits qui ont l'air réels." },
          { q: "Qu'écrire à la place de votre numéro Medicare dans une consigne ?", options: ["Le vrai numéro", "La moitié du numéro", "Votre numéro de compte bancaire", "Un mot de remplacement comme « [mon numéro] »"], answer: 3, why: "Un mot de remplacement vous permet d'obtenir de l'aide sans partager d'informations privées." },
          { q: "Un appelant a la voix de votre petit-fils et demande tout de suite des cartes cadeaux. Que faites-vous ?", options: ["Je les achète vite", "Je lui donne le code reçu sur mon téléphone", "Je raccroche et j'appelle mon petit-fils à un numéro que je connais", "J'envoie mes coordonnées bancaires"], answer: 2, why: "Les escrocs peuvent imiter les voix ; l'urgence et les cartes cadeaux sont des signaux d'alerte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour les seniors : utiliser un assistant IA",
    questions: [
      { q: "Un assistant IA, c'est avant tout :", options: ["Une personne dans un centre d'appels", "Un programme informatique avec qui on discute", "Une compagnie de téléphone", "Un magasin"], answer: 1, why: "C'est un programme à qui vous écrivez ou parlez." },
      { q: "Lequel est un bon usage d'un assistant IA ?", options: ["Préparer un mot de remerciement pour un ami", "Décider de votre dose de médicament", "Signer des papiers à votre place", "Connaître le solde de votre compte"], answer: 0, why: "Préparer des mots et des cartes fait partie de ses points forts." },
      { q: "Qui décide quand vous utilisez un assistant IA ?", options: ["Vous", "La compagnie de téléphone", "L'IA", "Personne"], answer: 0, why: "C'est vous qui décidez quoi demander et quoi croire." },
      { q: "Lequel est un assistant IA gratuit connu ?", options: ["Une calculatrice", "Google Gemini", "Une imprimante", "Une télécommande"], answer: 1, why: "Gemini, ChatGPT et Copilot sont des assistants gratuits connus." },
      { q: "L'endroit sûr pour obtenir une application d'IA sur une tablette est :", options: ["Un lien dans un e-mail d'un inconnu", "Une publicité qui s'ouvre toute seule", "La boutique d'applications officielle", "N'importe quel site"], answer: 2, why: "N'installez que depuis la boutique d'applications officielle." },
      { q: "Quelle adresse ouvre ChatGPT sur un ordinateur ?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com est l'adresse officielle." },
      { q: "Où tape-t-on en général sa question ?", options: ["Sur l'icône de la batterie", "Sur l'horloge", "Dans la zone de message en bas de l'écran", "Dans l'appareil photo"], answer: 2, why: "La zone de message affiche souvent « Posez une question » ou « Message »." },
      { q: "Vous voulez dire votre question à voix haute. Vous touchez :", options: ["Le bouton micro", "L'appareil photo", "Le bouton marche/arrêt", "Le bouton du volume"], answer: 0, why: "Le bouton micro vous permet de parler au lieu de taper." },
      { q: "Qu'est-ce qu'une consigne (prompt) ?", options: ["Une alarme de rappel", "La fin d'une adresse web", "Un chargeur de téléphone", "Ce que vous tapez ou dites à l'assistant"], answer: 3, why: "La consigne est votre demande à l'assistant." },
      { q: "Une bonne consigne contient :", options: ["Un seul mot", "Ce dont vous avez besoin, votre situation et la forme de réponse voulue", "Votre mot de passe", "Votre numéro de sécurité sociale"], answer: 1, why: "Ces trois parties donnent une réponse utile." },
      { q: "Quelle consigne donnera sans doute la réponse la plus utile ?", options: ["« jardin »", "« Les feuilles de mes tomates ont des taches jaunes. Quelle peut être la cause ? Réponds en étapes courtes et simples. »", "« plantes »", "« aide »"], answer: 1, why: "Elle donne le besoin, la situation et la forme." },
      { q: "La première réponse est trop longue. Vous pouvez :", options: ["Éteindre l'appareil", "Seulement l'accepter", "Payer pour la corriger", "Demander : « Fais plus court. »"], answer: 3, why: "Les questions de suivi modifient la réponse." },
      { q: "Laquelle est une question de suivi utile ?", options: ["« Mets-le en étapes numérotées. »", "« Voici mon numéro de carte. »", "« Supprime mon téléphone. »", "« Envoie de l'argent. »"], answer: 0, why: "Elle demande un changement clair de la réponse." },
      { q: "Le texte à l'écran est trop petit. Que pouvez-vous faire ?", options: ["Abandonner", "Acheter un nouveau téléphone aujourd'hui", "Agrandir le texte dans les réglages de l'appareil ou demander à quelqu'un de vous montrer", "Taper votre mot de passe"], answer: 2, why: "Les appareils ont un réglage de taille du texte ; un proche ou l'assistant peut vous montrer comment faire." },
      { q: "L'assistant vous donne le numéro de téléphone d'une clinique. Vous devez :", options: ["Lui donner votre numéro Medicare", "L'appeler sans vérifier", "Le publier en ligne", "Le vérifier sur le site de la clinique ou sur un courrier de la clinique"], answer: 3, why: "L'IA peut donner de faux numéros ; vérifiez la source officielle." },
      { q: "Les sites officiels du gouvernement des États-Unis se terminent par :", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: ".gov est utilisé par les sites du gouvernement américain." },
      { q: "Pour une question de médicament, la meilleure personne pour confirmer la réponse est :", options: ["Un inconnu sur internet", "Votre médecin ou votre pharmacien", "L'IA elle-même", "Une publicité"], answer: 1, why: "Les renseignements de santé doivent être vérifiés par un professionnel." },
      { q: "Que ne faut-il JAMAIS taper dans un assistant IA ?", options: ["Votre numéro de carte bancaire", "« Donne-moi un exemple. »", "« Utilise des mots plus simples. »", "« Rends-le plus chaleureux. »"], answer: 0, why: "Les numéros de compte et de carte sont des informations privées." },
      { q: "Quelqu'un vous demande le code qui vient d'arriver par SMS sur votre téléphone. Vous devez :", options: ["Ne jamais le donner", "Le publier", "Le lui envoyer par SMS", "Le lui lire"], answer: 0, why: "Ce code protège votre compte ; les vrais services ne le demandent pas." },
      { q: "Si un appel vous semble anormal, le plus sûr est de :", options: ["Continuer à parler", "Raccrocher et rappeler à un numéro que vous savez être le bon", "Donner votre adresse", "Envoyer un petit paiement"], answer: 1, why: "Rappeler à un numéro connu arrête la plupart des arnaques." }
    ]
  }
};
