"use strict";

// Koach Learn course (French translation of athletes/athletes-intro-ai-sports.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-intro-ai-sports-fr",
  lang: "fr",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Introduction à l'IA dans le sport",
  skills: "Expliquer ce que fait l'IA dans le sport, Ouvrir un assistant IA gratuit, Écrire une consigne claire sur le sport, Vérifier les réponses de l'IA, Protéger ses informations privées et de santé",
  outcome: "utiliser un assistant IA gratuit pour construire un plan d'entraînement et d'études d'une semaine autour de votre emploi du temps sportif : poser une question claire, améliorer la réponse, la vérifier avec votre entraîneur et laisser de côté les détails privés et de santé.",
  about: [
    "Ce cours s'adresse aux sportifs du lycée, de l'université et en début de carrière, ainsi qu'aux entraîneurs qui veulent un premier contact simple avec l'intelligence artificielle (IA). Aucune connaissance technique n'est nécessaire.",
    "Vous verrez où l'IA est déjà présente dans le sport, des statistiques de match à l'analyse vidéo et au recrutement, et comment utiliser vous-même un assistant IA gratuit pour organiser votre semaine.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Utilisez un assistant IA gratuit pour construire un plan d'une semaine adapté à votre vrai emploi du temps d'entraînements, de matchs et de cours. Écrivez une consigne claire, demandez au moins deux améliorations, retirez tout détail privé ou de santé, et montrez le plan à votre entraîneur ou à votre soigneur avant de le suivre.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs du lycée et de l'université, et quelques jeunes adultes en club ou en sport amateur, qui jonglent entre les entraînements, les matchs, les cours et parfois un travail, le recrutement ou les accords NIL.",
    startingPoint: "Ils utilisent tous les jours un smartphone, les réseaux sociaux et des applications de sport. Beaucoup ont déjà essayé un assistant IA en passant, mais n'écrivent pas de consignes claires, ne vérifient pas les réponses et ne réfléchissent pas aux informations privées et de santé qu'ils partagent.",
    gap: "L'IA peut aider les sportifs à prévoir leur semaine, à étudier et à rester organisés, mais de mauvaises réponses sur l'entraînement, les blessures, la nutrition ou l'éligibilité peuvent nuire à leur santé ou à leur éligibilité, et de faux recruteurs et de faux contrats de marque les visent. Ils doivent bien utiliser l'IA et la vérifier avec leur entraîneur, leur soigneur ou le service de conformité.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur de l'école ou de la bibliothèque",
      "Temps : environ 5 minutes par leçon, à caser entre les entraînements et les cours",
      "Règles d'âge : les apprenants de moins de 18 ans vérifient les règles d'âge de l'application et demandent à un parent ou tuteur",
      "Santé et vie privée : aucun rapport de blessure, médicament, mot de passe ou numéro d'identité dans les consignes ; les conseils sur l'entraînement, la santé et l'éligibilité sont vérifiés avec le bon professionnel"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exemples de technologie dans le sport", action: "identifier où l'IA est utilisée dans le sport et ce qu'elle ne peut pas faire pour vous", standard: "en nommant au moins trois utilisations et une limite" },
    { id: "O2", condition: "Avec votre téléphone ou un ordinateur", action: "ouvrir un assistant IA gratuit depuis son application ou son site officiel, envoyer un premier message et vous déconnecter sur un ordinateur partagé", standard: "après avoir vérifié les règles d'âge de l'application" },
    { id: "O3", condition: "À partir de votre vrai planning d'entraînements, de matchs et de cours", action: "écrire une consigne avec votre besoin, votre situation et le format voulu", standard: "pour que la première réponse soit utile" },
    { id: "O4", condition: "Face à une réponse de l'IA qui ne convient pas à votre semaine", action: "corriger la réponse avec des consignes de suivi, un changement à la fois", standard: "en faisant au moins deux améliorations" },
    { id: "O5", condition: "Face à une réponse de l'IA avec des conseils sur l'entraînement, la santé, la nutrition ou l'éligibilité", action: "vérifier la réponse avec votre entraîneur, votre soigneur, un diététicien, un médecin, le service de conformité ou une page officielle", standard: "avant de la suivre" },
    { id: "O6", condition: "Quand vous écrivez une consigne ou recevez une offre en ligne", action: "garder vos informations privées et de santé pour vous et repérer les arnaques qui visent les sportifs", standard: "sans partager aucun mot de passe, code, numéro d'identité ou dossier de santé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Où l'IA apparaît dans le sport",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est l'IA, et où vous la voyez déjà dans le sport",
          minutes: 4,
          goal: "Citer trois usages actuels de l'IA dans le sport et dire ce que l'IA ne peut pas faire.",
          text: [
            "L'IA, ou intelligence artificielle, désigne des programmes informatiques qui font des tâches qui demandent d'habitude une personne, comme repérer des tendances, écrire un texte ou reconnaître ce qu'il y a dans une vidéo.",
            "Dans le sport, vous la voyez déjà : des retransmissions qui affichent la vitesse d'un joueur ou la probabilité qu'un tir rentre, des applications qui comptent vos répétitions ou suivent vos courses, des outils vidéo qui identifient chaque action, et des sites de recrutement qui classent les sportifs selon leurs statistiques.",
            "L'IA est une aide, pas un entraîneur, un médecin ou un arbitre. Elle ne connaît ni votre corps, ni votre équipe, ni vos objectifs si vous ne les lui dites pas, et elle peut se tromper. Ce sont les entraîneurs et les sportifs qui décident."
          ],
          words: [["IA", "abréviation d'intelligence artificielle : des programmes qui apprennent des tendances à partir de données et s'en servent pour répondre, prédire ou créer."], ["Données", "des faits et des chiffres, comme des temps, des scores, des répétitions ou des vidéos."]],
          slides: [
            { title: "L'IA en une phrase", bullets: ["Des programmes qui apprennent des tendances à partir de données", "Puis répondent, prédisent ou créent"] },
            { title: "Où vous la voyez dans le sport", bullets: ["Statistiques télé comme la vitesse ou la chance de marquer", "Applications qui suivent courses et répétitions", "Outils vidéo qui identifient les actions", "Sites de recrutement qui classent par statistiques"] },
            { title: "Ce que l'IA n'est pas", bullets: ["Ni votre entraîneur, ni votre médecin, ni l'arbitre", "Elle peut se tromper, même si elle semble sûre", "Vous et votre entraîneur décidez"] }
          ],
          tryIt: "Notez trois endroits où vous avez vu de l'IA ou des statistiques « intelligentes » dans votre sport cette saison, par exemple un graphique à la télé, une application de sport ou un outil vidéo de votre équipe.",
          youCanNow: "expliquer ce qu'est l'IA, citer trois façons dont elle apparaît dans le sport et dire pourquoi ce sont toujours des personnes qui décident.",
          quickCheck: [
            { objective: "O1", q: "Que veut dire IA ?", options: ["Une sorte de boisson pour sportifs", "Des programmes informatiques qui font des tâches qui demandent d'habitude une personne", "Une machine d'entraînement", "Un signal de l'arbitre"], answer: 1, why: "L'IA, ce sont des programmes informatiques qui repèrent des tendances, écrivent du texte ou reconnaissent ce qu'il y a dans une vidéo." },
            { objective: "O1", q: "Une application d'IA dit que vous devriez changer de poste dans l'équipe. Que faites-vous ?", options: ["En parler avec votre entraîneur ; l'IA est une aide, pas votre entraîneur", "Changer de poste tout de suite", "Quitter l'équipe", "Ne plus écouter votre entraîneur"], answer: 0, why: "L'IA ne connaît ni votre équipe ni vos objectifs ; ce sont toujours les entraîneurs et les sportifs qui décident." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ouvrir un assistant IA gratuit",
          minutes: 5,
          goal: "Ouvrir un assistant IA gratuit sur votre téléphone ou un ordinateur et envoyer votre premier message.",
          text: [
            "Un assistant IA est un programme d'IA avec qui vous discutez avec des mots de tous les jours. Les plus connus et gratuits sont ChatGPT, Microsoft Copilot et Google Gemini.",
            "Sur un téléphone, téléchargez l'application officielle dans la boutique d'applications, publiée par la vraie entreprise : OpenAI pour ChatGPT, Microsoft pour Copilot, Google pour Gemini. Sur un ordinateur, ouvrez un navigateur et allez sur chatgpt.com, copilot.microsoft.com ou gemini.google.com.",
            "Certains assistants demandent un compte et ont des règles d'âge. Si vous avez moins de 18 ans, vérifiez les règles d'âge de l'application et demandez d'abord à un parent ou tuteur. Sur un ordinateur de l'école ou partagé, déconnectez-vous à la fin."
          ],
          steps: ["Choisissez votre téléphone ou un ordinateur.", "Téléphone : installez l'application officielle. Ordinateur : tapez l'adresse web.", "Trouvez la zone de message en bas de l'écran.", "Tapez un message de bonjour et lisez la réponse.", "Sur un ordinateur partagé, déconnectez-vous et fermez le navigateur."],
          words: [["Assistant IA", "un programme d'IA avec qui l'on discute en tapant ou en parlant."], ["Navigateur", "le programme qui sert à visiter des sites web, comme Chrome, Edge ou Safari."]],
          slides: [
            { title: "Des assistants IA gratuits", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Comment en ouvrir un", bullets: ["Téléphone : application officielle de la boutique", "Ordinateur : chatgpt.com, copilot.microsoft.com ou gemini.google.com", "Trouvez la zone de message en bas"] },
            { title: "Avant de commencer", bullets: ["Moins de 18 ans ? Vérifiez les règles d'âge et demandez à un parent", "Ordinateur partagé : déconnectez-vous à la fin"] }
          ],
          tryIt: "Ouvrez un assistant IA gratuit et tapez : « Je pratique [votre sport]. Explique en trois phrases courtes comment l'IA est utilisée dans mon sport. » Lisez la réponse.",
          youCanNow: "ouvrir un assistant IA gratuit, envoyer un message et quitter un ordinateur partagé en sécurité.",
          quickCheck: [
            { objective: "O2", q: "Quelle adresse web ouvre Google Gemini sur un ordinateur ?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com est l'adresse officielle ; utilisez le site ou l'application de la vraie entreprise." },
            { objective: "O2", q: "Vous avez utilisé ChatGPT sur un ordinateur de la bibliothèque pour prévoir votre semaine. Que faites-vous quand vous avez fini ?", options: ["Le laisser ouvert pour un coéquipier", "Enregistrer votre mot de passe", "Éteindre seulement l'écran", "Vous déconnecter et fermer le navigateur"], answer: 3, why: "Se déconnecter sur un ordinateur partagé empêche les autres d'accéder à vos conversations et à vos comptes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Écrire une consigne claire sur le sport",
          minutes: 5,
          goal: "Écrire une consigne avec votre besoin, votre situation et la forme de réponse voulue.",
          text: [
            "Ce que vous tapez à un assistant IA s'appelle une consigne (en anglais, un « prompt »). Une consigne claire donne une réponse utile du premier coup.",
            "Une bonne consigne a trois parties : ce dont vous avez besoin, votre situation et la forme de la réponse. Exemple : « Je suis milieu de terrain dans l'équipe de foot de mon lycée. J'ai entraînement du lundi au jeudi de 15 h 30 à 17 h 30 et un match le vendredi. Fais un emploi du temps de révisions simple pour la semaine autour des entraînements. Présente-le dans un tableau. »",
            "Une consigne faible comme « aide-moi à progresser » oblige l'assistant à deviner. Ajoutez le sport, le poste, votre emploi du temps et la forme voulue."
          ],
          steps: ["Dites ce dont vous avez besoin.", "Ajoutez votre sport, votre poste, votre niveau et votre emploi du temps (sans détails privés).", "Dites la forme voulue : liste, tableau, étapes courtes ou mots simples."],
          words: [["Consigne (prompt)", "ce que vous tapez ou dites à un assistant IA pour lui demander quelque chose."], ["Forme", "la présentation de la réponse, comme une liste, un tableau ou des étapes."]],
          slides: [
            { title: "Les trois parties d'une bonne consigne", bullets: ["1. Ce dont vous avez besoin", "2. Votre sport, poste, niveau et emploi du temps", "3. La forme voulue"] },
            { title: "Faible ou claire", bullets: ["Faible : « aide-moi à progresser »", "Claire : « Je suis milieu au lycée, entraînement lun-jeu... »", "« ...fais un emploi du temps de révisions en tableau »"] },
            { title: "Des détails, pas des secrets", bullets: ["Oui : sport, poste, horaires d'entraînement", "Non : nom complet, numéro d'élève, dossier médical"] }
          ],
          tryIt: "Écrivez une consigne en trois parties pour demander un emploi du temps de révisions ou de jours de récupération autour de votre vraie semaine d'entraînement. Envoyez-la et lisez la réponse.",
          youCanNow: "écrire une consigne claire sur le sport avec votre besoin, votre situation et la forme voulue.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que la partie format d'une consigne ?", options: ["La forme de réponse que vous voulez, comme un tableau ou une courte liste", "Votre sport", "Le nom de votre entraîneur", "Votre mot de passe"], answer: 0, why: "Le format dit à l'assistant comment présenter la réponse." },
            { objective: "O3", q: "Vous voulez de l'aide pour organiser vos devoirs autour du basket. Quelle consigne est la meilleure ?", options: ["\"devoirs\"", "\"aide-moi à progresser\"", "\"basket\"", "\"Je suis meneur dans l'équipe de mon lycée, avec entraînement de 15 h à 17 h du lundi au jeudi et un match le vendredi. Fais-moi un planning de devoirs pour la semaine dans un tableau.\""], answer: 3, why: "Elle donne le besoin, la situation et le format." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Où l'IA apparaît dans le sport",
        questions: [
          { objective: "O1", q: "Lequel est un exemple d'IA dans le sport ?", options: ["Un sifflet", "Une feuille de match en papier", "Un graphique télé montrant la chance qu'un tir rentre", "Le bus de l'équipe"], answer: 2, why: "Ce graphique vient d'un programme qui a appris des tendances à partir de très nombreux tirs passés." },
          { objective: "O1", q: "Une application d'IA vous conseille de continuer à jouer malgré une douleur vive au genou. Que faites-vous ?", options: ["J'arrête et j'en parle à mon soigneur ou à un médecin", "Je suis le conseil, l'IA sait mieux", "J'ignore mon entraîneur", "Je laisse un coéquipier décider"], answer: 0, why: "L'IA n'est pas médecin. Les questions de douleur et de blessure vont à une personne qualifiée." },
          { objective: "O2", q: "Où obtenir une application d'IA pour votre téléphone ?", options: ["Par un lien d'un inconnu en message privé", "Par une publicité qui s'ouvre toute seule", "Sur n'importe quel site", "Dans la boutique d'applications officielle, auprès de la vraie entreprise"], answer: 3, why: "La boutique officielle et l'application de la vraie entreprise sont le choix sûr." },
          { objective: "O3", q: "Quelles sont les trois parties d'une consigne claire ?", options: ["Nom, école, numéro d'identité", "Besoin, situation, forme", "Sport, couleur de l'équipe, mascotte", "Bonjour, s'il te plaît, merci"], answer: 1, why: "Le besoin, la situation et la forme donnent à l'assistant ce qu'il lui faut pour aider." },
          { objective: "O3", q: "Quelle consigne donnera sans doute la réponse la plus utile ?", options: ["« aide-moi à progresser »", "« Je suis meneur dans l'équipe de mon université, entraînement de 6 h à 8 h. Fais un emploi du temps cours et récupération pour la semaine, en tableau. »", "« basket »", "« dis-moi tout »"], answer: 1, why: "Elle contient le besoin, la situation et la forme." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA avec confiance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Améliorer la réponse",
          minutes: 4,
          goal: "Utiliser des consignes de suivi pour corriger une réponse jusqu'à ce qu'elle colle à votre semaine.",
          text: [
            "La première réponse est un brouillon. L'assistant se souvient de ce que vous avez dit plus tôt dans la même conversation, donc vous pouvez demander des changements.",
            "Des consignes de suivi utiles pour les sportifs : « Mets les révisions après le dîner les jours de match. » « Fais plus court. » « Ajoute un jour de repos. » « Utilise des mots plus simples. » « Explique pourquoi tu as mis ça ici. »",
            "Demandez un changement à la fois. Si la conversation part dans tous les sens, ouvrez une nouvelle conversation avec une consigne plus claire."
          ],
          steps: ["Lisez la première réponse.", "Repérez ce qui ne colle pas à votre vrai emploi du temps.", "Demandez un changement.", "Recommencez jusqu'à ce que ça colle."],
          words: [["Consigne de suivi", "une deuxième demande qui s'appuie sur la réponse obtenue."]],
          slides: [
            { title: "Première réponse = brouillon", bullets: ["Vous pouvez demander des changements", "Il se souvient de la même conversation"] },
            { title: "Des suivis qui marchent", bullets: ["« Ajoute un jour de repos. »", "« Mets les révisions après le dîner les jours de match. »", "« Explique pourquoi tu as mis ça ici. »"] },
            { title: "Ça part dans tous les sens ?", bullets: ["Un changement à la fois", "Ou une nouvelle conversation avec une consigne plus claire"] }
          ],
          tryIt: "Reprenez votre emploi du temps de la leçon 3. Demandez deux changements, l'un après l'autre, pour qu'il corresponde à votre vraie semaine. Comparez la première et la dernière version.",
          youCanNow: "améliorer une réponse de l'IA avec des consignes de suivi claires.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi pouvez-vous demander à l'assistant de changer sa réponse ?", options: ["Il oublie chaque message", "Il se souvient de ce que vous avez dit plus tôt dans la même conversation", "C'est votre entraîneur", "Il doit être d'accord avec vous"], answer: 1, why: "Dans la même conversation, l'assistant se souvient des messages précédents, donc vous pouvez demander des changements." },
            { objective: "O4", q: "Le planning met beaucoup d'étude juste avant votre match du vendredi. Qu'envoyez-vous ?", options: ["\"Faux.\"", "\"Recommence et ajoutes-en plus.\"", "\"Le jour du match, déplace l'étude après le dîner.\"", "Rien ; vous le suivez quand même"], answer: 2, why: "Une demande de suivi claire qui nomme un seul changement corrige le planning." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vérifier les réponses de l'IA avec votre entraîneur",
          minutes: 5,
          goal: "Repérer les parties d'une réponse de l'IA à vérifier et les vérifier auprès de la bonne personne ou source.",
          text: [
            "L'IA peut inventer des choses ou donner des informations dépassées. On parle parfois d'hallucination. Dans le sport, cela peut être une mauvaise règle, une statistique inventée, une date de recrutement dépassée ou un conseil d'entraînement dangereux.",
            "Vérifiez toujours les charges d'entraînement, les conseils sur les blessures et la santé, la nutrition, les compléments alimentaires, l'éligibilité, le recrutement et les règles NIL (droit des sportifs universitaires américains d'être payés pour leur nom, leur image et leur notoriété). Vérifiez avec votre entraîneur, votre soigneur, un médecin, un diététicien diplômé ou le service de conformité de votre établissement, et sur les pages officielles comme ncaa.org (la NCAA gère le sport universitaire américain).",
            "Une bonne habitude : demandez à l'assistant « Qu'est-ce que je dois revérifier avec mon entraîneur ? » Puis posez vraiment la question à votre entraîneur."
          ],
          steps: ["Repérez chaque fait, chiffre, règle ou conseil de santé dans la réponse.", "Décidez qui doit le vérifier : entraîneur, soigneur, médecin, diététicien ou service de conformité.", "Vérifiez les règles sur les pages officielles.", "En cas de désaccord, suivez la personne ou la source officielle."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui a l'air vrai mais qui est inventé."], ["Service de conformité", "le service de l'établissement qui connaît les règles sportives, y compris celles du recrutement et du NIL."]],
          slides: [
            { title: "L'IA peut se tromper sur", bullets: ["Les règles et les dates de recrutement", "Les statistiques et les records", "Les conseils d'entraînement, de blessure et de nutrition"] },
            { title: "Qui vérifie quoi", bullets: ["Entraînement : l'entraîneur", "Blessure et santé : soigneur ou médecin", "Alimentation : diététicien diplômé", "Règles et NIL : service de conformité"] },
            { title: "Une bonne habitude", bullets: ["Demandez : « Qu'est-ce que je dois revérifier ? »", "Puis vérifiez-le avec une vraie personne"] }
          ],
          sources: [{ name: "NCAA : Name, Image and Likeness (règles pour les sportifs universitaires, en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Posez à un assistant IA une question de règlement sur votre sport, par exemple combien de temps morts a chaque équipe. Puis trouvez la réponse dans le règlement officiel de votre ligue ou fédération, ou demandez à votre entraîneur, et voyez si elle correspond.",
          youCanNow: "repérer ce qui doit être vérifié dans une réponse de l'IA et le soumettre à la bonne personne ou source officielle.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Un rêve pendant une sieste", "Le replay d'une vidéo", "Une réponse rapide", "Quelque chose que l'IA invente et qui semble vrai"], answer: 3, why: "L'IA peut inventer des règles, des statistiques ou des dates qui semblent réelles." },
            { objective: "O5", q: "L'IA vous conseille un complément alimentaire pour récupérer plus vite. Qui le vérifie ?", options: ["Un coéquipier", "Un diététicien diplômé, votre médecin ou votre soigneur", "Le site du complément", "Personne ; l'IA a toujours raison"], answer: 1, why: "Les compléments et les conseils de nutrition doivent être vérifiés avec le bon professionnel, et avec le service de conformité pour l'éligibilité." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protéger vos informations privées et de santé",
          minutes: 5,
          goal: "Utiliser l'IA pour une vraie tâche sans partager d'informations privées, de santé ou de compte.",
          text: [
            "Ne tapez pas de détails privés dans un assistant IA : mots de passe, numéros de sécurité sociale ou d'identité, adresse, coordonnées bancaires, ou dossiers de santé comme rapports de blessure, médicaments ou résultats d'examens.",
            "Vous pouvez quand même obtenir de l'aide. Écrivez « [mon école] » ou « une blessure aux ischio-jambiers que soigne mon soigneur » au lieu des noms et des détails médicaux. Posez des questions générales ; gardez les questions précises pour le professionnel.",
            "Attention aux arnaques visant les sportifs : faux recruteurs, faux contrats de marque et faux agents qui vous pressent, demandent de l'argent d'avance ou un code de connexion. Vérifiez d'abord avec votre entraîneur ou le service de conformité."
          ],
          steps: ["Relisez votre consigne avant de l'envoyer.", "Retirez noms, numéros, mots de passe et détails de santé.", "Utilisez des mots de remplacement comme « [mon école] ».", "Considérez l'urgence, les frais d'avance et les demandes de code comme des signaux d'alerte."],
          words: [["Mot de remplacement", "un mot comme « [mon école] » qui garde le vrai détail privé."], ["Arnaque", "une ruse pour voler de l'argent, des comptes ou des informations."]],
          slides: [
            { title: "Ne tapez jamais dans une IA", bullets: ["Mots de passe et codes de connexion", "Numéros d'identité ou bancaires, adresse", "Rapports de blessure, médicaments, résultats d'examens"] },
            { title: "Utilisez des mots de remplacement", bullets: ["« [mon école] » au lieu du nom", "Question générale à l'IA, question précise au professionnel"] },
            { title: "Arnaques qui visent les sportifs", bullets: ["Faux recruteurs et faux agents", "Faux contrats de marque qui demandent de l'argent d'avance", "Quiconque demande un code de connexion"] }
          ],
          tryIt: "Tâche finale : construisez votre plan d'entraînement et d'études d'une semaine avec un assistant IA. Utilisez une consigne en trois parties, demandez deux améliorations, retirez les détails privés et de santé, et montrez le plan à votre entraîneur ou à votre soigneur.",
          youCanNow: "utiliser l'IA pour organiser votre semaine tout en protégeant vos informations privées et de santé, et repérer les arnaques qui visent les sportifs.",
          quickCheck: [
            { objective: "O6", q: "Quelle information devez-vous garder hors d'une consigne ?", options: ["Vos horaires d'entraînement", "Votre sport", "Votre rapport de blessure et la liste de vos médicaments", "Que vous voulez un tableau"], answer: 2, why: "Les dossiers de santé, comme les rapports de blessure et les médicaments, restent hors des outils d'IA." },
            { objective: "O6", q: "Un « agent » vous écrit pour un contrat de marque et vous demande un code de connexion pour tout finaliser aujourd'hui. Que faites-vous ?", options: ["Ne jamais partager le code, et vérifier avec votre entraîneur ou le service de conformité", "Envoyer le code vite", "Payer les frais pour réserver le contrat", "Lui donner plutôt votre mot de passe"], answer: 0, why: "Vous presser et demander un code sont des signes d'arnaque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA avec confiance",
        questions: [
          { objective: "O4", q: "Le plan de l'IA n'a aucun jour de repos. Quelle est la meilleure suite ?", options: ["L'accepter quand même", "Supprimer l'application", "S'entraîner tous les jours pour toujours", "Demander : « Ajoute un jour de repos. »"], answer: 3, why: "Une consigne de suivi demande à l'assistant de modifier sa réponse." },
          { objective: "O5", q: "Qui doit vérifier un conseil de l'IA sur une blessure ?", options: ["Votre soigneur ou un médecin", "Un coéquipier", "L'IA elle-même", "Un commentaire sur les réseaux sociaux"], answer: 0, why: "Les questions de santé et de blessure vont à un professionnel qualifié." },
          { objective: "O5", q: "Qu'est-ce qu'une hallucination en IA ?", options: ["Un rêve avant un match", "Une connexion internet lente", "Quelque chose d'inventé par l'IA qui a l'air vrai", "Un type d'exercice"], answer: 2, why: "L'IA peut inventer des faits, des règles ou des statistiques qui ont l'air vrais." },
          { objective: "O6", q: "Quel détail peut-on mettre dans une consigne ?", options: ["Votre mot de passe", "Votre liste de médicaments", "Votre adresse", "Vos horaires d'entraînement"], answer: 3, why: "Les horaires d'entraînement aident la réponse et ne sont pas privés." },
          { objective: "O6", q: "Un « recruteur » vous écrit en message privé et demande des frais pour envoyer vos meilleurs moments aux entraîneurs aujourd'hui. Que faites-vous ?", options: ["Je paie vite avant que la place parte", "Je vérifie d'abord avec mon entraîneur ou le service de conformité", "J'envoie mon code de connexion", "J'envoie mon numéro d'identité"], answer: 1, why: "L'urgence et les frais d'avance sont des signaux d'alerte. Vérifiez avant d'agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'IA dans le sport",
    questions: [
      { objective: "O1", q: "L'IA, c'est avant tout :", options: ["Un nouveau type de ballon", "Un arbitre", "Des programmes qui apprennent des tendances à partir de données", "Une ligue sportive"], answer: 2, why: "L'IA apprend des tendances à partir de données et s'en sert pour répondre ou prédire." },
      { objective: "O1", q: "Lequel n'est PAS un usage de l'IA dans le sport ?", options: ["Lacer ses chaussures", "Identifier les actions dans une vidéo de match", "Suivre ses courses avec une application", "Prédire la chance qu'un tir rentre"], answer: 0, why: "Lacer ses chaussures est le travail d'une personne ; les autres utilisent l'IA." },
      { objective: "O1", q: "Qui a le dernier mot sur votre entraînement ?", options: ["Vous et votre entraîneur", "L'IA", "Une application au hasard", "Personne"], answer: 0, why: "L'IA aide ; les personnes décident." },
      { objective: "O2", q: "Lequel est un assistant IA gratuit connu ?", options: ["Un chronomètre", "Un tableau d'affichage", "Google Gemini", "Un maillot"], answer: 2, why: "Gemini, ChatGPT et Copilot sont des assistants IA gratuits." },
      { objective: "O2", q: "Vous avez 15 ans et voulez utiliser un assistant IA. Que faire d'abord ?", options: ["Mentir sur votre âge", "Vérifier les règles d'âge de l'application et demander à un parent ou tuteur", "Utiliser le compte d'un ami", "Partager votre mot de passe"], answer: 1, why: "Beaucoup d'assistants ont des règles d'âge ; un parent doit être au courant." },
      { objective: "O2", q: "Où tape-t-on en général dans un assistant IA ?", options: ["Sur l'icône de la batterie", "Dans l'appareil photo", "À l'adresse de votre école", "Dans la zone de message en bas"], answer: 3, why: "La zone de message est là où l'on tape sa consigne." },
      { objective: "O2", q: "Après avoir utilisé un ordinateur partagé de l'école, vous devez :", options: ["Rester connecté", "Enregistrer votre mot de passe", "Vous déconnecter et fermer le navigateur", "Laisser un mot avec votre mot de passe"], answer: 2, why: "Se déconnecter protège votre compte." },
      { objective: "O3", q: "Qu'est-ce qu'une consigne (prompt) ?", options: ["Un exercice d'échauffement", "Un cri d'équipe", "Un temps mort", "Ce que vous tapez ou dites à un assistant IA"], answer: 3, why: "La consigne est votre demande à l'IA." },
      { objective: "O3", q: "Quelle partie dit à l'IA comment présenter la réponse ?", options: ["La forme, comme un tableau ou une liste", "Votre numéro de maillot", "Votre mot de passe", "Le numéro de votre entraîneur"], answer: 0, why: "Dire la forme donne la réponse dans la présentation dont vous avez besoin." },
      { objective: "O3", q: "Quelle consigne est la plus claire ?", options: ["« séance »", "« Je suis sprinteur à l'université, entraînement de 15 h à 17 h. Fais un plan de révisions pour la semaine en tableau. »", "« aide »", "« sport »"], answer: 1, why: "Elle a le besoin, la situation et la forme." },
      { objective: "O4", q: "La première réponse ne colle pas à votre jour de match. Vous devez :", options: ["Abandonner", "L'accepter", "Demander un suivi pour changer le jour de match", "Payer une nouvelle application"], answer: 2, why: "Les suivis corrigent ce qui ne colle pas." },
      { objective: "O4", q: "Combien de changements demander à la fois pour rester clair ?", options: ["Un à la fois", "Dix", "Aucun", "Autant que vous pouvez taper"], answer: 0, why: "Un changement à la fois garde la réponse sur la bonne voie." },
      { objective: "O4", q: "Une conversation part toujours dans tous les sens. Une bonne idée est de :", options: ["Taper votre mot de passe", "Répéter les mêmes mots", "Arrêter de vous entraîner", "Ouvrir une nouvelle conversation avec une consigne plus claire"], answer: 3, why: "Une nouvelle conversation avec une consigne plus claire marche en général mieux." },
      { objective: "O5", q: "L'IA vous donne une règle de recrutement. Vous devez :", options: ["La publier comme un fait", "La vérifier sur ncaa.org ou auprès du service de conformité", "Ignorer toutes les règles", "Redemander à l'IA et lui faire confiance"], answer: 1, why: "Les règles changent ; vérifiez la source officielle." },
      { objective: "O5", q: "Qui est la bonne personne pour vérifier un plan alimentaire ?", options: ["Un influenceur au hasard", "Un diététicien diplômé", "L'IA", "Un jeu vidéo"], answer: 1, why: "Les diététiciens diplômés sont formés pour conseiller sur la nutrition." },
      { objective: "O5", q: "Qui connaît les règles NIL et de recrutement de votre établissement ?", options: ["La cantine", "Le chauffeur du bus", "Une équipe rivale", "Le service de conformité"], answer: 3, why: "Le service de conformité gère les règles sportives." },
      { objective: "O6", q: "Que ne faut-il JAMAIS taper dans un assistant IA ?", options: ["Votre liste de médicaments", "Votre emploi du temps d'entraînement", "Votre sport", "Votre poste"], answer: 0, why: "Les médicaments et dossiers de santé sont privés." },
      { objective: "O6", q: "Comment poser une question sur une blessure sans partager votre dossier ?", options: ["Coller le compte rendu de votre IRM", "Taper les notes de votre médecin", "Poser une question générale et garder la question précise pour votre soigneur", "Donner votre numéro d'assurance"], answer: 2, why: "Les questions générales sont acceptables ; les soins précis relèvent d'un professionnel." },
      { objective: "O6", q: "Un contrat de marque vous demande de payer des frais d'avance pour y participer. C'est :", options: ["Normal pour tous les contrats", "Exigé par la NCAA", "Bon signe", "Un signe d'arnaque"], answer: 3, why: "Les vraies marques vous paient ; les frais d'avance sont un signe d'arnaque fréquent." },
      { objective: "O6", q: "Quelqu'un demande le code qui vient d'arriver par SMS sur votre téléphone. Vous devez :", options: ["Le lui lire", "Ne jamais le donner", "Le publier", "L'envoyer à votre équipe"], answer: 1, why: "Ce code protège votre compte. Les vrais recruteurs et les vraies marques ne le demandent jamais." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Consigne claire",
        objective: "O3",
        notYet: "La consigne est vague, comme \"fais-moi un plan\".",
        meets: "La consigne donne le besoin, votre vrai planning d'entraînements, de matchs et de cours, et le format.",
        exceeds: "La première réponse convient déjà à la plus grande partie de votre semaine."
      },
      {
        name: "Réponse améliorée",
        objective: "O4",
        notYet: "Vous avez utilisé la première réponse telle quelle.",
        meets: "Vous avez demandé au moins deux améliorations, une à la fois.",
        exceeds: "Vous pouvez dire ce que chaque changement a corrigé, comme un jour de repos ou l'horaire le jour du match."
      },
      {
        name: "Informations privées et de santé protégées",
        objective: "O6",
        notYet: "La consigne contient un nom, un numéro d'identité, un mot de passe ou une information de santé.",
        meets: "Aucune information privée ou de santé dans la consigne ni dans le plan.",
        exceeds: "Vous avez utilisé des textes de remplacement comme \"[mon école]\" et gardé les questions de santé pour le soigneur."
      },
      {
        name: "Vérifié avec l'entraîneur",
        objective: "O5",
        notYet: "Vous avez suivi le plan sans le montrer à personne.",
        meets: "Vous avez montré le plan à votre entraîneur ou à votre soigneur avant de le suivre.",
        exceeds: "Vous avez changé le plan selon leurs remarques et vous pouvez dire ce qui a changé."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir utilisé un plan fait avec l'IA pour l'entraînement et les études dans les 30 jours (questionnaire de suivi)",
      "Entraîneurs ou soigneurs qui disent que les sportifs vérifient avec eux les conseils de l'IA",
      "Apprenants qui commencent un autre cours pour les sportifs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Un assistant IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Le vrai planning d'entraînements, de matchs et de cours de l'apprenant pour une semaine",
      "Environ 60 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Vérifiez les règles d'âge de chaque application d'IA pour votre groupe ; les apprenants de moins de 18 ans ont besoin de l'accord d'un parent ou tuteur.",
      "Demandez à un entraîneur ou à un soigneur de revoir les plans finaux avec les sportifs.",
      "Ne demandez jamais aux sportifs de taper des rapports de blessure, des médicaments ou des numéros d'identité dans des outils d'IA.",
      "Parlez des arnaques aux faux recruteurs et aux faux contrats de marque, et orientez les sportifs vers le service de conformité pour les questions NIL.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
