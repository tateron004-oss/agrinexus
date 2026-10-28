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
  chapters: [
    {
      name: "Chapitre 1 : Où l'IA apparaît dans le sport",
      lessons: [
        {
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
          youCanNow: "expliquer ce qu'est l'IA, citer trois façons dont elle apparaît dans le sport et dire pourquoi ce sont toujours des personnes qui décident."
        },
        {
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
          youCanNow: "ouvrir un assistant IA gratuit, envoyer un message et quitter un ordinateur partagé en sécurité."
        },
        {
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
          youCanNow: "écrire une consigne claire sur le sport avec votre besoin, votre situation et la forme voulue."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Où l'IA apparaît dans le sport",
        questions: [
          { q: "Lequel est un exemple d'IA dans le sport ?", options: ["Un sifflet", "Une feuille de match en papier", "Un graphique télé montrant la chance qu'un tir rentre", "Le bus de l'équipe"], answer: 2, why: "Ce graphique vient d'un programme qui a appris des tendances à partir de très nombreux tirs passés." },
          { q: "Une application d'IA vous conseille de continuer à jouer malgré une douleur vive au genou. Que faites-vous ?", options: ["J'arrête et j'en parle à mon soigneur ou à un médecin", "Je suis le conseil, l'IA sait mieux", "J'ignore mon entraîneur", "Je laisse un coéquipier décider"], answer: 0, why: "L'IA n'est pas médecin. Les questions de douleur et de blessure vont à une personne qualifiée." },
          { q: "Où obtenir une application d'IA pour votre téléphone ?", options: ["Par un lien d'un inconnu en message privé", "Par une publicité qui s'ouvre toute seule", "Sur n'importe quel site", "Dans la boutique d'applications officielle, auprès de la vraie entreprise"], answer: 3, why: "La boutique officielle et l'application de la vraie entreprise sont le choix sûr." },
          { q: "Quelles sont les trois parties d'une consigne claire ?", options: ["Nom, école, numéro d'identité", "Besoin, situation, forme", "Sport, couleur de l'équipe, mascotte", "Bonjour, s'il te plaît, merci"], answer: 1, why: "Le besoin, la situation et la forme donnent à l'assistant ce qu'il lui faut pour aider." },
          { q: "Quelle consigne donnera sans doute la réponse la plus utile ?", options: ["« aide-moi à progresser »", "« Je suis meneur dans l'équipe de mon université, entraînement de 6 h à 8 h. Fais un emploi du temps cours et récupération pour la semaine, en tableau. »", "« basket »", "« dis-moi tout »"], answer: 1, why: "Elle contient le besoin, la situation et la forme." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser l'IA avec confiance",
      lessons: [
        {
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
          youCanNow: "améliorer une réponse de l'IA avec des consignes de suivi claires."
        },
        {
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
          youCanNow: "repérer ce qui doit être vérifié dans une réponse de l'IA et le soumettre à la bonne personne ou source officielle."
        },
        {
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
          youCanNow: "utiliser l'IA pour organiser votre semaine tout en protégeant vos informations privées et de santé, et repérer les arnaques qui visent les sportifs."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser l'IA avec confiance",
        questions: [
          { q: "Le plan de l'IA n'a aucun jour de repos. Quelle est la meilleure suite ?", options: ["L'accepter quand même", "Supprimer l'application", "S'entraîner tous les jours pour toujours", "Demander : « Ajoute un jour de repos. »"], answer: 3, why: "Une consigne de suivi demande à l'assistant de modifier sa réponse." },
          { q: "Qui doit vérifier un conseil de l'IA sur une blessure ?", options: ["Votre soigneur ou un médecin", "Un coéquipier", "L'IA elle-même", "Un commentaire sur les réseaux sociaux"], answer: 0, why: "Les questions de santé et de blessure vont à un professionnel qualifié." },
          { q: "Qu'est-ce qu'une hallucination en IA ?", options: ["Un rêve avant un match", "Une connexion internet lente", "Quelque chose d'inventé par l'IA qui a l'air vrai", "Un type d'exercice"], answer: 2, why: "L'IA peut inventer des faits, des règles ou des statistiques qui ont l'air vrais." },
          { q: "Quel détail peut-on mettre dans une consigne ?", options: ["Votre mot de passe", "Votre liste de médicaments", "Votre adresse", "Vos horaires d'entraînement"], answer: 3, why: "Les horaires d'entraînement aident la réponse et ne sont pas privés." },
          { q: "Un « recruteur » vous écrit en message privé et demande des frais pour envoyer vos meilleurs moments aux entraîneurs aujourd'hui. Que faites-vous ?", options: ["Je paie vite avant que la place parte", "Je vérifie d'abord avec mon entraîneur ou le service de conformité", "J'envoie mon code de connexion", "J'envoie mon numéro d'identité"], answer: 1, why: "L'urgence et les frais d'avance sont des signaux d'alerte. Vérifiez avant d'agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'IA dans le sport",
    questions: [
      { q: "L'IA, c'est avant tout :", options: ["Un nouveau type de ballon", "Un arbitre", "Des programmes qui apprennent des tendances à partir de données", "Une ligue sportive"], answer: 2, why: "L'IA apprend des tendances à partir de données et s'en sert pour répondre ou prédire." },
      { q: "Lequel n'est PAS un usage de l'IA dans le sport ?", options: ["Lacer ses chaussures", "Identifier les actions dans une vidéo de match", "Suivre ses courses avec une application", "Prédire la chance qu'un tir rentre"], answer: 0, why: "Lacer ses chaussures est le travail d'une personne ; les autres utilisent l'IA." },
      { q: "Qui a le dernier mot sur votre entraînement ?", options: ["Vous et votre entraîneur", "L'IA", "Une application au hasard", "Personne"], answer: 0, why: "L'IA aide ; les personnes décident." },
      { q: "Lequel est un assistant IA gratuit connu ?", options: ["Un chronomètre", "Un tableau d'affichage", "Google Gemini", "Un maillot"], answer: 2, why: "Gemini, ChatGPT et Copilot sont des assistants IA gratuits." },
      { q: "Vous avez 15 ans et voulez utiliser un assistant IA. Que faire d'abord ?", options: ["Mentir sur votre âge", "Vérifier les règles d'âge de l'application et demander à un parent ou tuteur", "Utiliser le compte d'un ami", "Partager votre mot de passe"], answer: 1, why: "Beaucoup d'assistants ont des règles d'âge ; un parent doit être au courant." },
      { q: "Où tape-t-on en général dans un assistant IA ?", options: ["Sur l'icône de la batterie", "Dans l'appareil photo", "À l'adresse de votre école", "Dans la zone de message en bas"], answer: 3, why: "La zone de message est là où l'on tape sa consigne." },
      { q: "Après avoir utilisé un ordinateur partagé de l'école, vous devez :", options: ["Rester connecté", "Enregistrer votre mot de passe", "Vous déconnecter et fermer le navigateur", "Laisser un mot avec votre mot de passe"], answer: 2, why: "Se déconnecter protège votre compte." },
      { q: "Qu'est-ce qu'une consigne (prompt) ?", options: ["Un exercice d'échauffement", "Un cri d'équipe", "Un temps mort", "Ce que vous tapez ou dites à un assistant IA"], answer: 3, why: "La consigne est votre demande à l'IA." },
      { q: "Quelle partie dit à l'IA comment présenter la réponse ?", options: ["La forme, comme un tableau ou une liste", "Votre numéro de maillot", "Votre mot de passe", "Le numéro de votre entraîneur"], answer: 0, why: "Dire la forme donne la réponse dans la présentation dont vous avez besoin." },
      { q: "Quelle consigne est la plus claire ?", options: ["« séance »", "« Je suis sprinteur à l'université, entraînement de 15 h à 17 h. Fais un plan de révisions pour la semaine en tableau. »", "« aide »", "« sport »"], answer: 1, why: "Elle a le besoin, la situation et la forme." },
      { q: "La première réponse ne colle pas à votre jour de match. Vous devez :", options: ["Abandonner", "L'accepter", "Demander un suivi pour changer le jour de match", "Payer une nouvelle application"], answer: 2, why: "Les suivis corrigent ce qui ne colle pas." },
      { q: "Combien de changements demander à la fois pour rester clair ?", options: ["Un à la fois", "Dix", "Aucun", "Autant que vous pouvez taper"], answer: 0, why: "Un changement à la fois garde la réponse sur la bonne voie." },
      { q: "Une conversation part toujours dans tous les sens. Une bonne idée est de :", options: ["Taper votre mot de passe", "Répéter les mêmes mots", "Arrêter de vous entraîner", "Ouvrir une nouvelle conversation avec une consigne plus claire"], answer: 3, why: "Une nouvelle conversation avec une consigne plus claire marche en général mieux." },
      { q: "L'IA vous donne une règle de recrutement. Vous devez :", options: ["La publier comme un fait", "La vérifier sur ncaa.org ou auprès du service de conformité", "Ignorer toutes les règles", "Redemander à l'IA et lui faire confiance"], answer: 1, why: "Les règles changent ; vérifiez la source officielle." },
      { q: "Qui est la bonne personne pour vérifier un plan alimentaire ?", options: ["Un influenceur au hasard", "Un diététicien diplômé", "L'IA", "Un jeu vidéo"], answer: 1, why: "Les diététiciens diplômés sont formés pour conseiller sur la nutrition." },
      { q: "Qui connaît les règles NIL et de recrutement de votre établissement ?", options: ["La cantine", "Le chauffeur du bus", "Une équipe rivale", "Le service de conformité"], answer: 3, why: "Le service de conformité gère les règles sportives." },
      { q: "Que ne faut-il JAMAIS taper dans un assistant IA ?", options: ["Votre liste de médicaments", "Votre emploi du temps d'entraînement", "Votre sport", "Votre poste"], answer: 0, why: "Les médicaments et dossiers de santé sont privés." },
      { q: "Comment poser une question sur une blessure sans partager votre dossier ?", options: ["Coller le compte rendu de votre IRM", "Taper les notes de votre médecin", "Poser une question générale et garder la question précise pour votre soigneur", "Donner votre numéro d'assurance"], answer: 2, why: "Les questions générales sont acceptables ; les soins précis relèvent d'un professionnel." },
      { q: "Un contrat de marque vous demande de payer des frais d'avance pour y participer. C'est :", options: ["Normal pour tous les contrats", "Exigé par la NCAA", "Bon signe", "Un signe d'arnaque"], answer: 3, why: "Les vraies marques vous paient ; les frais d'avance sont un signe d'arnaque fréquent." },
      { q: "Quelqu'un demande le code qui vient d'arriver par SMS sur votre téléphone. Vous devez :", options: ["Le lui lire", "Ne jamais le donner", "Le publier", "L'envoyer à votre équipe"], answer: 1, why: "Ce code protège votre compte. Les vrais recruteurs et les vraies marques ne le demandent jamais." }
    ]
  }
};
