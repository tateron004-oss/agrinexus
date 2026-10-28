"use strict";

// Koach Learn course (shared), French translation of "Building AI-Powered Chatbots (No Programming Needed)". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-chatbots-no-code-fr",
  lang: "fr",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Créer des chatbots avec l'IA (sans programmation)",
  skills: "Choisir la mission d'un chatbot, Rédiger les instructions du chatbot, Construire un fichier de connaissances, Poser des garde-fous, Tester avec de vraies questions, Lancer et améliorer",
  outcome: "créer sans code un chatbot d'IA qui répond aux questions courantes d'une entreprise, d'une association ou d'un club à partir de vos propres informations, avec des instructions et des garde-fous clairs, testé sur de vraies questions avant que quiconque l'utilise.",
  about: [
    "Un chatbot répond aux questions dans une fenêtre de discussion, à toute heure. Avec les outils d'IA d'aujourd'hui, vous pouvez en créer un sans écrire de code : vous lui donnez des instructions et vos propres informations, et il répond en langage simple.",
    "Ce cours s'adresse aux propriétaires de petites entreprises, au personnel et aux bénévoles d'associations, et aux jeunes qui veulent un vrai projet. Exemples : une boulangerie qui répond à « Êtes-vous ouverts dimanche ? », une banque alimentaire qui explique quoi apporter, un club scolaire qui répond aux questions sur les sélections.",
    "Vous définirez la mission du chatbot, rédigerez ses instructions, lui donnerez un fichier de connaissances, ajouterez des règles de sécurité, le testerez et le lancerez. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Créez un chatbot sans code qui fonctionne pour une organisation réelle ou fictive : une mission en une phrase, des instructions écrites avec un ton et des garde-fous, un fichier de connaissances d'une page, et un journal de tests d'au moins dix vraies questions avec les corrections apportées. Partagez-le avec une personne et notez son avis.",
  chapters: [
    {
      name: "Chapitre 1 : Planifier et construire le chatbot",
      lessons: [
        {
          title: "Ce qu'un chatbot d'IA sait faire, et le choix de sa mission",
          minutes: 4,
          goal: "Écrire la mission d'un chatbot en une phrase et lister les questions auxquelles il doit répondre.",
          text: [
            "Un chatbot d'IA est un assistant d'IA réglé pour un seul but. Au lieu de répondre à tout, il répond aux questions sur votre organisation, à partir des informations que vous lui donnez.",
            "Les bonnes premières missions sont étroites et répétitives : horaires et adresse, prix, comment s'inscrire, quoi apporter, conditions de retour, créneaux de bénévolat. Les mauvaises premières missions sont risquées : conseils médicaux, juridiques ou financiers, ou tout ce qui demande le jugement d'une personne.",
            "Partez des questions que les gens posent déjà. Regardez vos e-mails, messages, appels et commentaires sur les réseaux sociaux. Les dix questions les plus fréquentes deviennent la mission du chatbot."
          ],
          steps: ["Notez les dix questions qu'on vous pose le plus.", "Barrez celles qui demandent le jugement d'une personne ou qui sont risquées.", "Écrivez la mission du chatbot en une phrase : « Ce chatbot répond aux questions sur [sujet] pour [public]. »"],
          words: [["Chatbot", "un programme qui répond aux questions dans une fenêtre de discussion."], ["Cas d'usage", "la tâche précise pour laquelle on utilise un outil."]],
          slides: [
            { title: "Un chatbot est un assistant ciblé", bullets: ["Réglé pour un seul but", "Répond à partir de vos propres informations"] },
            { title: "De bonnes premières missions", bullets: ["Horaires, adresse, prix", "Comment s'inscrire ou quoi apporter", "Créneaux de bénévolat, conditions de retour"] },
            { title: "À laisser aux humains", bullets: ["Conseils médicaux, juridiques ou financiers", "Réclamations et décisions délicates"] },
            { title: "Partir de vraies questions", bullets: ["E-mails, appels, messages, commentaires", "Les dix questions principales = la mission"] }
          ],
          tryIt: "Choisissez une entreprise, une association ou un club (le vôtre ou un exemple). Écrivez ses dix questions les plus fréquentes et une mission en une phrase pour son chatbot.",
          youCanNow: "choisir une mission sûre et étroite pour un chatbot et lister les questions auxquelles il doit répondre."
        },
        {
          title: "Rédiger les instructions du chatbot",
          minutes: 5,
          goal: "Rédiger des instructions claires qui fixent le rôle, le ton et les limites du chatbot.",
          text: [
            "Les outils de chatbot sans code permettent de taper des instructions que l'IA suit dans chaque conversation. Exemples : les GPT personnalisés dans ChatGPT, les Gems dans Google Gemini et les agents dans Microsoft Copilot Studio. Les noms de fonctions, les menus et les offres qui les incluent changent souvent ; consultez la page d'aide de l'outil pour les étapes actuelles.",
            "De bonnes instructions couvrent cinq points : qui est le chatbot (« Tu es l'assistant d'aide de la banque alimentaire Soleil Levant »), à qui il parle, à quoi il répond, comment il s'exprime (aimable, bref, mots simples) et ce qu'il ne doit pas faire.",
            "Écrivez les instructions en phrases courtes et directes. Dites-lui quoi faire quand il ne sait pas : « Si la réponse n'est pas dans le fichier de connaissances, dis que tu n'es pas sûr et donne le numéro de téléphone. »"
          ],
          steps: ["Rôle : « Tu es l'assistant d'aide de [organisation]. »", "Public : qui posera les questions.", "Mission : les sujets auxquels il répond.", "Ton : aimable, bref, mots simples.", "Limites : ce qu'il ne doit pas faire, et quoi dire quand il ne sait pas."],
          words: [["Instructions", "les consignes permanentes qu'un chatbot suit dans chaque conversation ; on parle parfois de prompt système."], ["Ton", "la manière dont le texte sonne : formel, aimable, bref."]],
          slides: [
            { title: "Outils de chatbot sans code", bullets: ["GPT personnalisés, Gems de Gemini, agents Copilot Studio", "Les noms et les offres changent : voir la page d'aide"] },
            { title: "Les cinq parties des instructions", bullets: ["Rôle et public", "Ce à quoi il répond", "Ton", "Ce qu'il ne doit pas faire"] },
            { title: "Quand il ne sait pas", bullets: ["Dire « Je ne suis pas sûr »", "Donner un téléphone ou un e-mail pour joindre une personne"] }
          ],
          sources: [{ name: "Aide Google Gemini : Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Rédigez les instructions de votre chatbot avec les cinq parties, en huit phrases au maximum.",
          youCanNow: "rédiger des instructions de chatbot qui fixent son rôle, son public, sa mission, son ton et ses limites."
        },
        {
          title: "Donner vos informations au chatbot : le fichier de connaissances",
          minutes: 5,
          goal: "Construire un fichier de connaissances d'une page et le relier à un chatbot sans code.",
          text: [
            "Les outils d'IA savent beaucoup de choses en général, mais rien sur vos horaires du mardi. La plupart des créateurs de chatbots sans code permettent de téléverser un fichier, souvent dans une section appelée Connaissances (Knowledge), que le chatbot utilise pour répondre.",
            "Faites un fichier simple : un titre par sujet et des informations courtes et claires. Utilisez la forme question-réponse pour vos dix questions principales. Mettez la date en haut pour savoir quand le mettre à jour.",
            "Ne mettez jamais d'informations privées dans le fichier : pas de noms de clients, de numéros de téléphone, de mots de passe, de données de donateurs ni d'informations bancaires. Tout ce qui est dans le fichier peut apparaître dans une réponse."
          ],
          steps: ["Ouvrez un document Google Docs ou Word.", "Ajoutez la date et le nom de l'organisation en haut.", "Écrivez chaque question principale avec sa réponse en dessous.", "Ajoutez l'essentiel : horaires, adresse, contact, prix ou services.", "Retirez tout ce qui est privé, enregistrez et téléversez le fichier dans la section connaissances du créateur de chatbot."],
          words: [["Fichier de connaissances", "un document que vous téléversez pour que le chatbot réponde à partir de vos informations."], ["Téléverser", "envoyer un fichier de votre appareil vers un site ou une application."]],
          slides: [
            { title: "L'IA ne connaît pas vos détails", bullets: ["Vos horaires, prix, règles", "Donnez-lui un fichier de connaissances"] },
            { title: "Un bon fichier de connaissances", bullets: ["La date en haut", "Une question et sa réponse pour chaque question principale", "Des informations courtes et claires"] },
            { title: "À ne jamais inclure", bullets: ["Noms et numéros de clients ou de donateurs", "Mots de passe ou coordonnées bancaires", "Tout ce que vous ne publieriez pas"] }
          ],
          tryIt: "Rédigez un fichier de connaissances d'une page pour votre chatbot, avec la date et les réponses à vos dix questions principales. Puis ouvrez un créateur de chatbot sans code auquel vous avez accès, collez vos instructions, téléversez le fichier et enregistrez.",
          youCanNow: "construire un fichier de connaissances sûr et le relier à des instructions dans un créateur de chatbot sans code."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier et construire le chatbot",
        questions: [
          { q: "Quelle est la meilleure première mission pour le chatbot d'une petite organisation ?", options: ["Donner des conseils médicaux", "Accorder des prêts", "Répondre aux questions sur les horaires, l'adresse et l'inscription", "Gérer seul toutes les réclamations"], answer: 2, why: "Des questions étroites, répétitives et peu risquées font la meilleure première mission." },
          { q: "Où trouver les questions auxquelles votre chatbot doit répondre ?", options: ["Dans les e-mails, appels, messages et commentaires que les gens ont déjà envoyés", "Les inventer", "Copier la liste d'une autre entreprise", "Demander à l'IA de deviner"], answer: 0, why: "Les vraies questions de vraies personnes montrent la mission du chatbot." },
          { q: "Que doivent dire les instructions quand le chatbot ne connaît pas une réponse ?", options: ["Inventer quelque chose de plausible", "Fermer la discussion sans rien dire", "Demander le mot de passe du client", "Dire qu'il n'est pas sûr et donner un moyen de joindre une personne"], answer: 3, why: "Reconnaître qu'il ne sait pas et orienter vers une personne évite les mauvaises réponses." },
          { q: "Pourquoi téléverser un fichier de connaissances ?", options: ["Pour ralentir le chatbot", "Pour que le chatbot réponde à partir de vos propres informations", "Pour stocker les mots de passe des clients", "Ce n'est jamais nécessaire"], answer: 1, why: "L'IA ne connaît pas vos détails tant que vous ne les lui donnez pas." },
          { q: "Qu'est-ce qui a sa place dans le fichier de connaissances d'un chatbot ?", options: ["Les numéros de téléphone des donateurs", "Vos horaires d'ouverture", "Les mots de passe du personnel", "Les numéros de compte bancaire"], answer: 1, why: "Seules les informations publiques ont leur place dans le fichier." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Tester, lancer et améliorer",
      lessons: [
        {
          title: "Ajouter des garde-fous pour que le chatbot reste sûr",
          minutes: 5,
          goal: "Rédiger des garde-fous qui gardent le chatbot dans son sujet, honnête et sûr.",
          text: [
            "Les garde-fous sont des règles qui empêchent le chatbot d'aller là où il ne doit pas. Ajoutez-les aux instructions sous forme de lignes claires « ne jamais » et « toujours ».",
            "Garde-fous utiles : rester sur vos sujets et refuser poliment les autres ; ne jamais demander ni garder d'informations privées comme des numéros de carte ou d'identité (aux États-Unis, le Social Security number) ; ne jamais donner de conseils médicaux, juridiques ou financiers ; dire aux gens que c'est une IA, pas une personne ; et orienter les urgences vers le 911 aux États-Unis (ou le numéro d'urgence local) ou la ligne d'aide adaptée.",
            "Dire honnêtement que c'est une IA crée la confiance. Commencez la discussion par une courte phrase : « Bonjour, je suis un assistant d'IA de la banque alimentaire Soleil Levant. Je peux répondre aux questions sur les horaires et sur ce qu'il faut apporter. »"
          ],
          steps: ["Ajoutez une ligne : rester sur [vos sujets] ; refuser poliment les autres.", "Ajoutez : ne jamais demander de numéro de carte, de compte bancaire, de pièce d'identité ou de sécurité sociale.", "Ajoutez : pas de conseils médicaux, juridiques ou financiers ; orienter vers un professionnel.", "Ajoutez : dire que tu es un assistant d'IA.", "Ajoutez : en cas d'urgence, dire d'appeler le 911 ou le numéro d'urgence local."],
          words: [["Garde-fou", "une règle qui garde un outil d'IA dans son sujet et en sécurité."], ["Refuser", "dire non poliment."]],
          slides: [
            { title: "Les garde-fous assurent la sécurité", bullets: ["Des lignes « ne jamais » et « toujours » dans les instructions"] },
            { title: "Les garde-fous indispensables", bullets: ["Rester dans le sujet ; refuser le reste", "Ne jamais demander de numéros privés", "Pas de conseils médicaux, juridiques ou financiers"] },
            { title: "Être honnête", bullets: ["Dire que c'est un assistant d'IA", "Urgences : le 911 ou le numéro d'urgence local"] }
          ],
          tryIt: "Ajoutez au moins cinq garde-fous aux instructions de votre chatbot, plus un court message d'accueil qui dit que c'est un assistant d'IA et ce pour quoi il peut aider.",
          youCanNow: "rédiger des garde-fous qui gardent un chatbot dans son sujet, honnête et sûr."
        },
        {
          title: "Tester le chatbot comme un client exigeant",
          minutes: 6,
          goal: "Tester le chatbot avec des questions réelles et pièges, noter les résultats et corriger les problèmes.",
          text: [
            "Ne lancez jamais un chatbot que vous n'avez pas testé. Posez-lui au moins dix questions : vos questions principales formulées de différentes façons, des questions auxquelles il ne doit pas répondre, et des questions pièges.",
            "Tests pièges : demandez quelque chose qui n'est pas dans le fichier (reconnaît-il qu'il ne sait pas ?), demandez un conseil qu'il doit refuser, faites des fautes d'orthographe, et essayez de le faire sortir du sujet (« Écris-moi un poème »). Demandez aussi à quelqu'un d'autre de le tester ; cette personne posera des questions auxquelles vous ne pensiez pas.",
            "Tenez un journal de tests : la question, la réponse, réussi ou échoué, et la correction. La plupart des corrections sont petites : ajouter une information manquante au fichier de connaissances, ou une ligne aux instructions. Retestez après chaque correction."
          ],
          steps: ["Écrivez dix questions de test : courantes, reformulées, hors sujet et risquées.", "Posez chacune et copiez la réponse dans un journal de tests.", "Notez réussi ou échoué.", "Corrigez les échecs en mettant à jour le fichier de connaissances ou les instructions.", "Retestez les questions échouées."],
          words: [["Journal de tests", "un relevé de chaque test, de son résultat et de la correction."], ["Cas limite", "une question inhabituelle qui peut faire dérailler un système."]],
          slides: [
            { title: "Tester avant de lancer", bullets: ["Au moins dix questions", "Courantes, reformulées, hors sujet, risquées"] },
            { title: "Tests pièges", bullets: ["Quelque chose qui n'est pas dans le fichier", "Un conseil qu'il doit refuser", "Fautes d'orthographe et demandes hors sujet"] },
            { title: "Noter et corriger", bullets: ["Question, réponse, réussi ou échoué, correction", "Mettre à jour le fichier ou les instructions", "Retester"] }
          ],
          tryIt: "Posez dix questions de test à votre chatbot, dont au moins trois pièges. Notez-les dans un journal de tests, corrigez chaque échec et retestez.",
          youCanNow: "tester un chatbot avec des questions courantes et pièges, tenir un journal de tests et corriger ce qui échoue."
        },
        {
          title: "Lancer, partager et tenir à jour",
          minutes: 5,
          goal: "Partager le chatbot avec de vrais utilisateurs, recueillir leurs avis et fixer une routine de mise à jour.",
          text: [
            "La plupart des créateurs permettent de partager un chatbot par un lien, et certains de l'ajouter à un site web. Commencez petit : partagez-le d'abord avec quelques clients, membres ou bénévoles, et dites-leur qu'il est nouveau.",
            "Demandez leur avis : « A-t-il répondu à votre question ? Qu'est-ce qu'il a mal fait ? » Lisez les vraies conversations si votre outil les montre, et cherchez les questions auxquelles il n'a pas su répondre.",
            "Fixez une routine. Chaque mois, ou dès que les horaires, les prix ou les règles changent, mettez à jour le fichier de connaissances et sa date. Un chatbot dépassé est pire que pas de chatbot. Gardez toujours une personne joignable pour ce que le chatbot ne sait pas gérer."
          ],
          steps: ["Partagez le lien du chatbot avec trois à cinq personnes.", "Posez-leur deux questions pour avoir leur avis.", "Ajoutez les réponses manquantes au fichier de connaissances.", "Mettez un rappel mensuel de mise à jour dans votre agenda.", "Vérifiez que les gens peuvent toujours joindre une personne."],
          words: [["Lancer", "rendre quelque chose disponible pour que les gens l'utilisent."], ["Retour (avis)", "ce que les utilisateurs vous disent de ce qui a marché ou non."]],
          slides: [
            { title: "Lancer petit", bullets: ["Partager le lien avec quelques personnes", "Leur dire qu'il est nouveau"] },
            { title: "Demander des avis", bullets: ["« A-t-il répondu à votre question ? »", "« Qu'est-ce qu'il a mal fait ? »"] },
            { title: "Le tenir à jour", bullets: ["Mettre à jour chaque mois ou quand les faits changent", "Changer la date du fichier", "Une personne toujours joignable"] }
          ],
          tryIt: "Tâche finale : partagez votre chatbot testé avec au moins une personne. Notez son avis, faites une amélioration et créez un rappel mensuel pour mettre à jour le fichier de connaissances.",
          youCanNow: "créer, tester, lancer et entretenir un chatbot d'IA sans code pour une vraie organisation."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Tester, lancer et améliorer",
        questions: [
          { q: "Qu'est-ce qu'un garde-fou ?", options: ["Une clôture autour du bureau", "Une option payante", "Un type de fichier de connaissances", "Une règle qui garde un outil d'IA dans son sujet et en sécurité"], answer: 3, why: "Les garde-fous sont des règles dans les instructions." },
          { q: "Un utilisateur demande au chatbot de votre boulangerie un conseil médical sur une réaction allergique. Que doit-il faire ?", options: ["Refuser et l'orienter vers un médecin, ou le 911 (numéro d'urgence) en cas d'urgence", "Donner un diagnostic", "Demander son numéro d'assurance", "Parler de gâteaux à la place"], answer: 0, why: "Les chatbots ne doivent pas donner de conseils médicaux et doivent orienter les urgences vers les secours." },
          { q: "Pourquoi poser pendant les tests une question qui n'est PAS dans le fichier de connaissances ?", options: ["Pour le ralentir", "Pour supprimer le fichier", "Pour vérifier qu'il reconnaît ne pas savoir au lieu d'inventer", "Il n'y a aucune raison"], answer: 2, why: "Un bon chatbot dit qu'il n'est pas sûr plutôt que d'inventer une réponse." },
          { q: "Le chatbot donne les horaires du mois dernier. Quelle est la correction ?", options: ["Fermer l'entreprise", "Dire aux utilisateurs de deviner", "Ajouter seulement plus de garde-fous", "Mettre à jour le fichier de connaissances et sa date"], answer: 3, why: "Des informations dépassées viennent d'un fichier dépassé." },
          { q: "Quelle est la meilleure façon de lancer ?", options: ["Le publier partout sans test", "Le cacher", "Le partager d'abord avec quelques personnes et demander leur avis", "Supprimer le contact humain"], answer: 2, why: "Un petit lancement repère les problèmes avant que beaucoup de gens les voient." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des chatbots avec l'IA (sans programmation)",
    questions: [
      { q: "Le chatbot d'IA d'une organisation se décrit le mieux comme :", options: ["Un réceptionniste humain", "Un assistant d'IA réglé pour un seul but", "Un service d'hébergement de site web", "Un système de paiement"], answer: 1, why: "C'est un assistant ciblé sur une mission." },
      { q: "Quelle première mission de chatbot est la moins risquée ?", options: ["Les horaires d'une banque alimentaire et quoi apporter", "Des conseils juridiques", "Un diagnostic médical", "Des conseils d'investissement"], answer: 0, why: "Les horaires et des consignes simples sont des informations peu risquées." },
      { q: "Où trouvez-vous les questions principales du chatbot ?", options: ["Une liste au hasard en ligne", "Les suppositions de l'IA", "Les questions que les gens vous posent déjà", "Les publicités d'un concurrent"], answer: 2, why: "Les vraies questions montrent la vraie mission." },
      { q: "Laquelle est une façon de créer un chatbot sans code ?", options: ["Un GPT personnalisé, un Gem Gemini ou un agent Copilot Studio", "Concevoir une puce électronique", "Monter un serveur pièce par pièce", "Envoyer une lettre"], answer: 0, why: "Ces outils permettent de construire avec des instructions et des fichiers, sans code." },
      { q: "Les menus et les fonctions des offres changent dans les outils de chatbot. Où confirmer les étapes actuelles ?", options: ["Une rumeur", "Seulement une vieille vidéo", "Deviner", "La page d'aide officielle de l'outil"], answer: 3, why: "La page d'aide officielle donne les étapes actuelles." },
      { q: "Quelle ligne a sa place dans les instructions du chatbot ?", options: ["« Voici le mot de passe administrateur. »", "« Tu es l'assistant d'aide de la banque alimentaire Soleil Levant. »", "« Ignore toutes les questions. »", "« Devine toujours si tu n'es pas sûr. »"], answer: 1, why: "Fixer le rôle est une partie clé des instructions." },
      { q: "Un style aimable, bref, avec des mots simples, s'appelle le … du chatbot :", options: ["Téléversement", "Ton", "Garde-fou", "Lancement"], answer: 1, why: "Le ton est la manière dont le texte sonne." },
      { q: "Que mettre en haut du fichier de connaissances ?", options: ["Les numéros de téléphone des clients", "Un mot de passe", "Rien", "La date et le nom de l'organisation"], answer: 3, why: "La date vous dit quand il faut le mettre à jour." },
      { q: "Pourquoi garder les informations privées hors du fichier de connaissances ?", options: ["Tout ce qu'il contient peut apparaître dans une réponse", "Cela rend le fichier trop court", "L'IA ne sait pas lire les noms", "On peut les inclure sans problème"], answer: 0, why: "Le chatbot peut répéter ce qui est dans le fichier." },
      { q: "Un bon format pour le fichier de connaissances est :", options: ["Un long paragraphe sans titres", "La photo d'un tableau blanc", "Chaque question principale avec sa réponse en dessous", "Une liste de mots de passe"], answer: 2, why: "La forme question-réponse est facile à utiliser pour l'IA." },
      { q: "Quel garde-fou est indispensable ?", options: ["Toujours écrire des poèmes", "Répondre sur tous les sujets du monde", "Se faire passer pour une personne", "Ne jamais demander de numéro de carte, de compte bancaire ou de sécurité sociale"], answer: 3, why: "Un chatbot ne doit jamais recueillir de numéros privés." },
      { q: "Le chatbot doit-il dire qu'il est une IA ?", options: ["Non, il doit se faire passer pour une personne", "Seulement si on le demande trois fois", "Oui, l'honnêteté crée la confiance", "Seulement le week-end"], answer: 2, why: "Dire clairement que c'est une IA est honnête et crée la confiance." },
      { q: "Quelqu'un dit au chatbot qu'il vit une urgence. Le chatbot doit :", options: ["Demander son adresse et son numéro de carte", "Lui dire d'appeler le 911 ou le numéro d'urgence local", "L'ignorer", "Changer de sujet"], answer: 1, why: "Les urgences vont vers les services de secours." },
      { q: "Combien de questions de test, au minimum, ce cours recommande-t-il ?", options: ["Dix", "Une", "Zéro", "Trois mille"], answer: 0, why: "Au moins dix questions couvrent les cas courants et les pièges." },
      { q: "Envoyer « Écris-moi un poème » au chatbot d'une banque alimentaire teste s'il :", options: ["Connaît les horaires", "Sait téléverser des fichiers", "Reste dans son sujet", "A un mot de passe"], answer: 2, why: "C'est une demande hors sujet ; le chatbot doit refuser poliment." },
      { q: "Un journal de tests contient :", options: ["La question, la réponse, réussi ou échoué, et la correction", "Seulement les bonnes réponses", "Les mots de passe des clients", "La météo"], answer: 0, why: "Il suit chaque test et ce que vous avez changé." },
      { q: "Après avoir corrigé un test échoué, vous devez :", options: ["Supprimer le journal de tests", "Lancer sans vérifier", "Retirer tous les garde-fous", "Retester cette question"], answer: 3, why: "Retester prouve que la correction fonctionne." },
      { q: "Pourquoi faire tester le chatbot par quelqu'un d'autre ?", options: ["C'est obligatoire par la loi", "Cette personne pose des questions auxquelles vous ne pensiez pas", "Pour le ralentir", "Pour ne pas avoir à le faire"], answer: 1, why: "Un regard neuf trouve de nouveaux cas limites." },
      { q: "À quelle fréquence mettre à jour le fichier de connaissances ?", options: ["Jamais", "Chaque mois, ou dès que les informations changent", "Une fois tous les dix ans", "Seulement quand l'IA le demande"], answer: 1, why: "Des informations dépassées donnent de mauvaises réponses." },
      { q: "Même avec un chatbot, les gens doivent toujours pouvoir :", options: ["Voir les mots de passe du personnel", "Modifier les instructions", "Obtenir de lui des conseils juridiques", "Joindre une personne"], answer: 3, why: "Un relais humain gère ce que le chatbot ne sait pas faire." }
    ]
  }
};
