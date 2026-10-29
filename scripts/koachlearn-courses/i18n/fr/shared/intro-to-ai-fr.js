"use strict";

// Koach Learn course, French translation of shared/intro-to-ai.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

module.exports = {
  id: "intro-to-ai-fr",
  lang: "fr",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Introduction à l'intelligence artificielle",
  skills: "Expliquer ce qu'est l'IA, Repérer l'IA au quotidien, Écrire des demandes claires, Améliorer et vérifier les réponses, Utiliser l'IA de façon juste et sûre",
  outcome: "expliquer avec des mots simples ce qu'est l'intelligence artificielle et comment elle apprend, la repérer dans les outils que vous utilisez déjà, et utiliser un assistant IA gratuit pour réaliser une vraie tâche du quotidien : demander clairement, améliorer la réponse, la vérifier et garder vos informations privées pour vous.",
  about: [
    "L'intelligence artificielle, ou IA, se trouve dans les téléphones, les cartes, les e-mails, les sites d'achat et les sites d'emploi. Ce cours explique ce qu'elle est avec des mots simples, puis vous montre comment bien l'utiliser. Il s'adresse à tout le monde : grands-parents, élèves, chercheurs d'emploi, bénévoles et petites équipes.",
    "Au chapitre 1, vous apprenez ce qu'est l'IA, comment elle apprend à partir d'exemples et où vous la rencontrez déjà. Au chapitre 2, vous utilisez un assistant IA gratuit pour faire un vrai travail, vérifier ce qu'il dit et l'utiliser de façon juste et sûre.",
    "Chaque leçon dure environ cinq minutes : lisez, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Un court contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez une vraie tâche, par exemple organiser un repas de famille, écrire un message pour recruter des bénévoles ou faire un plan d'étude pour la semaine. Utilisez un assistant IA gratuit pour la réaliser : écrivez une demande claire, demandez deux améliorations, vérifiez un fait de la réponse sur un site officiel ou fiable, et assurez-vous que la demande ne contient aucune information privée. Ensuite, expliquez à un ami en trois phrases ce qu'est l'IA et pourquoi vous avez vérifié la réponse.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui découvrent l'intelligence artificielle : seniors, élèves et étudiants, chercheurs d'emploi, bénévoles, personnes sortant de prison, personnel d'associations et de petites équipes. Beaucoup ont entendu parler de l'IA aux informations mais n'ont jamais utilisé volontairement un assistant IA.",
    startingPoint: "Ils savent utiliser un téléphone ou un ordinateur pour ouvrir un navigateur web, taper un court message et utiliser des applications courantes comme les cartes, l'e-mail et la vidéo. Peu savent dire ce qu'est l'IA, où elle se trouve dans leurs applications, ou comment demander de l'aide à un assistant IA et vérifier ce qu'il dit.",
    gap: "L'IA est maintenant dans les téléphones, les cartes, l'e-mail, les achats, la banque et les sites d'emploi, et les assistants IA gratuits peuvent faire gagner beaucoup de temps. Les personnes qui ne la comprennent pas évitent un outil utile, ou lui font trop confiance, partagent des informations privées ou tombent dans des arnaques qui utilisent l'IA.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot nouveau, comme demande, données et biais, est expliqué",
      "Appareils : un téléphone, une tablette ou un ordinateur avec internet et un navigateur web",
      "Temps : des leçons de 4 à 6 minutes, environ 60 minutes au total",
      "Coût : seulement des assistants IA gratuits (ChatGPT, Microsoft Copilot ou Google Gemini) ; aucune offre payante nécessaire",
      "Vie privée : les apprenants ne tapent jamais de numéro d'identité, de mot de passe, de coordonnées bancaires, de numéro médical ou d'adresse complète dans un assistant IA"
    ],
    prerequisites: "Aucun. Les apprenants doivent savoir ouvrir un navigateur web et taper un court message."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Sans notes", action: "expliquer avec des mots simples ce que sont l'intelligence artificielle et l'IA générative, et pourquoi l'IA peut sembler sûre d'elle et pourtant se tromper", standard: "en deux ou trois phrases qui utilisent les idées de régularités et de suppositions" },
    { id: "O2", condition: "À partir d'un exemple simple comme un filtre anti-spam", action: "décrire comment une IA apprend à partir de données et comment des données pauvres ou qui penchent d'un côté donnent des réponses biaisées", standard: "en nommant les exemples, les régularités et une façon dont les suppositions pourraient être injustes" },
    { id: "O3", condition: "Avec votre propre téléphone ou ordinateur", action: "repérer au moins cinq endroits où vous utilisez déjà l'IA et trouver un réglage qui la contrôle", standard: "avec cinq exemples justes et un réglage ouvert" },
    { id: "O4", condition: "Avec un assistant IA gratuit", action: "écrire une demande claire qui dit ce dont vous avez besoin, la situation et la forme de réponse voulue", standard: "avec les trois parties et aucune information privée" },
    { id: "O5", condition: "À partir d'une première réponse d'un assistant IA", action: "améliorer la réponse avec des relances et vérifier ses faits sur une source officielle ou fiable", standard: "avec au moins deux relances et au moins un fait vérifié" },
    { id: "O6", condition: "Avant d'envoyer une demande ou d'utiliser des mots écrits par l'IA", action: "vérifier que la demande ne contient aucune information privée, suivre les règles sur l'aide de l'IA et réagir sans danger aux arnaques qui utilisent l'IA", standard: "en remplaçant chaque détail privé par un espace réservé et en choisissant chaque fois la bonne action sûre" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ce qu'est l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "L'IA avec des mots simples",
          minutes: 4,
          goal: "Expliquer en deux phrases ce qu'est l'intelligence artificielle.",
          text: [
            "L'intelligence artificielle (IA), ce sont des programmes informatiques qui font des tâches qui demandent d'habitude une personne : comprendre la parole, reconnaître un visage sur une photo, proposer une chanson, traduire une phrase ou répondre à une question.",
            "L'IA ne pense pas et ne ressent rien comme une personne. Elle est très forte pour trouver des régularités dans d'énormes quantités d'exemples et s'en servir pour faire une supposition. Une bonne supposition peut paraître intelligente ; une mauvaise peut paraître tout aussi sûre d'elle.",
            "Il existe beaucoup de sortes d'IA. Celle dont on parle le plus aujourd'hui est l'IA générative : des outils comme ChatGPT, Microsoft Copilot et Google Gemini qui génèrent (fabriquent) du texte, des images ou du son nouveaux quand vous le demandez."
          ],
          words: [["Intelligence artificielle (IA)", "des programmes informatiques qui font des tâches qui demandent d'habitude une personne, comme comprendre la parole ou répondre à des questions."], ["Régularité", "quelque chose qui se répète d'une façon qu'on peut prévoir."], ["IA générative", "une IA qui fabrique du texte, des images ou du son nouveaux quand vous le demandez."]],
          slides: [
            { title: "L'IA, c'est...", bullets: ["Des programmes qui font des tâches qui demandent d'habitude une personne", "Parole, photos, suggestions, traduction, écriture"] },
            { title: "Comment elle marche, en une ligne", bullets: ["Elle trouve des régularités dans beaucoup d'exemples", "Puis elle fait sa meilleure supposition"] },
            { title: "Ce n'est pas une personne", bullets: ["Elle ne pense pas et ne ressent rien", "Une mauvaise supposition peut sembler aussi sûre qu'une bonne"] },
            { title: "L'IA générative", bullets: ["Elle fabrique du texte, des images ou du son nouveaux", "Exemples : ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Sans regarder en arrière, dites ou écrivez deux phrases qui expliquent l'IA à quelqu'un qui n'en a jamais entendu parler. Utilisez les mots « régularités » et « supposition ».",
          youCanNow: "expliquer avec des mots simples ce qu'est l'IA et pourquoi elle peut se tromper.",
          quickCheck: [
            { objective: "O1", q: "Dans ce cours, que fait l'IA générative ?", options: ["Elle range seulement les e-mails dans des dossiers", "Elle fabrique du texte, des images ou du son nouveaux quand vous le demandez", "Elle pense et ressent comme une personne", "Elle connaît toujours la vraie réponse"], answer: 1, why: "Les outils d'IA générative comme ChatGPT, Copilot et Gemini fabriquent du texte, des images ou du son nouveaux." },
            { objective: "O1", q: "Un ami dit : « L'IA avait l'air si sûre d'elle, elle a donc forcément raison. » Que lui répondriez-vous ?", options: ["C'est vrai : l'IA ne se trompe jamais quand elle a l'air sûre d'elle", "Seuls les outils d'IA payants peuvent se tromper", "L'IA fait des suppositions à partir de régularités, donc une mauvaise supposition peut sembler tout aussi sûre", "L'IA se trompe seulement quand internet est lent"], answer: 2, why: "L'IA utilise des régularités pour faire une supposition, et une mauvaise supposition peut sembler aussi sûre qu'une bonne." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comment l'IA apprend à partir d'exemples",
          minutes: 5,
          goal: "Décrire comment une IA apprend, avec un exemple simple.",
          text: [
            "La plupart des IA d'aujourd'hui apprennent à partir d'exemples plutôt qu'à partir de règles écrites par une personne. Pour apprendre à un programme à repérer les e-mails indésirables (spam), on lui montre beaucoup d'e-mails marqués « spam » ou « pas spam ». Le programme trouve les régularités, comme certains mots ou des liens étranges, et les applique aux nouveaux e-mails.",
            "Les exemples dont elle apprend s'appellent des données. Des données bonnes et variées donnent une meilleure IA. Si les données sont anciennes, partiales ou oublient certains groupes de personnes, les suppositions de l'IA seront aussi anciennes, partiales ou injustes. C'est ce qu'on appelle un biais.",
            "Les outils d'écriture comme ChatGPT ont appris à partir d'une énorme quantité de texte, donc ils savent bien prévoir quels mots doivent venir ensuite. C'est pour cela qu'ils écrivent de façon fluide, et aussi pour cela qu'ils peuvent écrire quelque chose qui sonne juste mais qui est faux."
          ],
          steps: ["Des personnes rassemblent beaucoup d'exemples (des données).", "Le programme cherche des régularités dans les exemples.", "Il utilise ces régularités pour deviner quelque chose de nouveau.", "Des personnes vérifient les suppositions et lui donnent de meilleurs exemples quand il se trompe."],
          words: [["Données", "les exemples, nombres, mots ou images dont une IA apprend."], ["Biais", "quand les données penchent d'un côté, si bien que les suppositions de l'IA sont injustes pour certaines personnes."], ["Entraînement", "l'étape où une IA apprend des régularités à partir de données."]],
          slides: [
            { title: "Apprendre à partir d'exemples", bullets: ["On lui montre beaucoup d'e-mails marqués spam ou pas spam", "Elle trouve les régularités", "Elle trie les nouveaux e-mails selon ces régularités"] },
            { title: "Les données comptent", bullets: ["Données bonnes et variées = meilleures suppositions", "Données anciennes ou partiales = suppositions anciennes ou injustes"] },
            { title: "Pourquoi une IA qui écrit peut se tromper", bullets: ["Elle prévoit les mots suivants à partir de régularités", "Elle peut sonner juste et pourtant être fausse"] }
          ],
          tryIt: "Pensez à quelque chose que vous avez appris par des exemples, comme distinguer un fruit mûr d'un fruit pas mûr. Écrivez comment vous l'apprendriez à un ordinateur : quels exemples lui montreriez-vous, et sur quoi pourrait-il se tromper ?",
          youCanNow: "décrire comment l'IA apprend à partir de données et pourquoi de mauvaises données donnent des réponses mauvaises ou injustes.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un biais en IA ?", options: ["Des suppositions qui penchent d'un côté parce que les données étaient anciennes, partiales ou oubliaient certains groupes", "Un réglage qui rend l'IA plus rapide", "Un type de virus informatique", "Une façon de rendre l'écran plus lumineux"], answer: 0, why: "Quand les exemples sont partiaux ou oublient des groupes de personnes, les suppositions de l'IA deviennent injustes elles aussi." },
            { objective: "O2", q: "Vous voulez apprendre à un programme à distinguer un fruit mûr d'un fruit pas mûr. Que feriez-vous d'abord ?", options: ["Taper une seule règle et espérer que ça marche", "Lui montrer une seule photo de banane", "Lui dire de deviner sans aucun exemple", "Lui montrer beaucoup de photos de fruits, chacune marquée mûr ou pas mûr"], answer: 3, why: "L'IA apprend en trouvant des régularités dans beaucoup d'exemples marqués, appelés données." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Repérer l'IA dans votre journée",
          minutes: 4,
          goal: "Trouver au moins cinq endroits où vous utilisez déjà l'IA.",
          text: [
            "Vous utilisez sans doute l'IA tous les jours sans l'appeler ainsi. L'application de cartes de votre téléphone choisit un trajet plus rapide pour éviter les bouchons. Votre messagerie range les e-mails indésirables dans un dossier spam. Les applications de vidéo et de musique proposent quoi regarder ensuite. Votre téléphone se déverrouille avec votre visage. Votre clavier propose le mot suivant.",
            "Les assistants vocaux comme Siri, Google Assistant et Alexa utilisent l'IA pour comprendre ce que vous dites. Les banques utilisent l'IA pour repérer les paiements par carte qui semblent inhabituels. Les sites d'emploi l'utilisent pour comparer votre CV aux offres.",
            "Savoir où se trouve l'IA vous aide à poser de bonnes questions : pourquoi l'application m'a-t-elle proposé ceci ? Puis-je le désactiver ? Que sait-elle de moi ? La plupart des applications ont des réglages où vous pouvez voir ou changer cela."
          ],
          words: [["Assistant vocal", "une IA à qui vous parlez à voix haute, comme Siri, Google Assistant ou Alexa."], ["Recommandation", "une suggestion qu'une application fait d'après ce que vous, ou des personnes comme vous, avez choisi avant."]],
          slides: [
            { title: "L'IA que vous utilisez déjà", bullets: ["Les cartes qui évitent les bouchons", "Les filtres anti-spam des e-mails", "Les vidéos, chansons et produits proposés"] },
            { title: "Encore de l'IA au quotidien", bullets: ["Le déverrouillage du téléphone par le visage", "Les assistants vocaux : Siri, Google Assistant, Alexa", "Les alertes de la banque sur un usage inhabituel de la carte"] },
            { title: "De bonnes questions à poser", bullets: ["Pourquoi m'a-t-elle proposé ceci ?", "Puis-je la désactiver ?", "Que sait-elle de moi ? Regardez les réglages"] }
          ],
          tryIt: "Parcourez votre téléphone ou votre ordinateur et notez cinq endroits qui utilisent l'IA. Pour l'un d'eux, ouvrez ses réglages et trouvez un choix que vous pouvez modifier.",
          youCanNow: "repérer l'IA dans les outils que vous utilisez chaque jour et trouver les réglages qui la contrôlent.",
          quickCheck: [
            { objective: "O3", q: "Lequel de ces outils utilise l'IA pour comprendre ce que vous dites ?", options: ["Un calendrier en papier", "Une lampe de bureau", "Un assistant vocal comme Siri ou Alexa", "Un horaire de bus imprimé"], answer: 2, why: "Les assistants vocaux utilisent l'IA pour comprendre la parole." },
            { objective: "O3", q: "Une application de musique vous propose sans cesse des chansons que vous n'aimez pas, et vous vous demandez ce qu'elle sait de vous. Que feriez-vous ?", options: ["Supprimer votre téléphone", "Ouvrir les réglages de l'application pour voir ou changer ce qu'elle utilise", "Arrêter d'écouter de la musique", "Taper votre mot de passe dans la barre de recherche"], answer: 1, why: "La plupart des applications ont des réglages où vous pouvez voir ou changer le fonctionnement des suggestions." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce qu'est l'IA",
        questions: [
          { objective: "O1", q: "Quelle est la meilleure description simple de l'IA ?", options: ["Un robot qui pense et ressent", "Un site web qui a toujours raison", "Un type de câble internet", "Des programmes qui trouvent des régularités et font des suppositions pour faire des tâches que font d'habitude les personnes"], answer: 3, why: "L'IA trouve des régularités dans des exemples et s'en sert pour faire des suppositions." },
          { objective: "O1", q: "Que fait l'IA générative ?", options: ["Elle répare les téléphones cassés", "Elle charge votre batterie", "Elle ne fait que stocker des fichiers", "Elle fabrique du texte, des images ou du son nouveaux quand vous le demandez"], answer: 3, why: "Générative veut dire qu'elle fabrique du contenu nouveau." },
          { objective: "O2", q: "Une IA a été entraînée seulement avec des photos d'un seul groupe de personnes. Quel est le problème probable ?", options: ["Elle marchera de la même façon pour tout le monde", "Elle ira plus vite", "Ses suppositions peuvent être injustes ou fausses pour d'autres groupes", "Elle cessera de fonctionner"], answer: 2, why: "Des données partiales créent un biais." },
          { objective: "O2", q: "Que sont les « données » en IA ?", options: ["Les exemples dont l'IA apprend", "L'écran du téléphone", "Un type de mot de passe", "Le prix de l'application"], answer: 0, why: "Les données sont les exemples, mots, nombres ou images dont une IA apprend." },
          { objective: "O3", q: "Lequel de ces exemples est un usage quotidien de l'IA ?", options: ["Un interrupteur", "Un calendrier en papier", "Une application de cartes qui choisit un trajet pour éviter les bouchons", "Un réveil mécanique"], answer: 2, why: "Les applications de cartes utilisent l'IA pour prévoir la circulation et choisir les trajets." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien utiliser l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Demander de l'aide à un assistant IA",
          minutes: 5,
          goal: "Ouvrir un assistant IA gratuit et écrire une demande claire en trois parties.",
          text: [
            "Parmi les assistants IA gratuits, il y a ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) et Google Gemini (gemini.google.com). Ils fonctionnent dans un navigateur web ou comme application téléchargée depuis le magasin d'applications officiel.",
            "Ce que vous tapez s'appelle une demande (en anglais, un « prompt »). Une demande claire a trois parties : ce dont vous avez besoin, un peu de contexte, et la forme de réponse voulue. Par exemple : « Je gère une petite banque alimentaire dans mon église. Écris un message aimable de 4 lignes pour trouver des bénévoles le samedi. Utilise des mots simples. »",
            "Une demande d'un seul mot comme « bénévoles » oblige l'IA à deviner ce que vous voulez, donc la réponse est générale et moins utile."
          ],
          steps: ["Ouvrez un assistant IA dans le navigateur ou dans l'application officielle.", "Dites ce dont vous avez besoin.", "Ajoutez le contexte, sans détails privés.", "Dites comment vous voulez la réponse : longueur, liste, étapes, mots simples.", "Envoyez et lisez la réponse."],
          words: [["Demande (prompt)", "ce que vous tapez ou dites à un assistant IA pour lui demander quelque chose."], ["Assistant IA", "un programme d'IA avec qui vous discutez en tapant ou en parlant, comme ChatGPT, Copilot ou Gemini."]],
          slides: [
            { title: "Des assistants IA gratuits", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Les trois parties d'une demande claire", bullets: ["1. Ce dont vous avez besoin", "2. Le contexte (sans détails privés)", "3. La forme de réponse voulue"] },
            { title: "Exemple", bullets: ["« Je gère une petite banque alimentaire. Écris un message aimable de 4 lignes", "pour trouver des bénévoles le samedi. Utilise des mots simples. »"] }
          ],
          tryIt: "Ouvrez un assistant IA gratuit. Écrivez une demande en trois parties pour une vraie tâche de cette semaine, comme un message d'anniversaire, un plan d'étude ou une liste de courses, et envoyez-la.",
          youCanNow: "ouvrir un assistant IA gratuit et écrire une demande claire qui donne une première réponse utile.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une demande (prompt) ?", options: ["Ce que vous tapez ou dites à un assistant IA", "Un avertissement de votre téléphone", "La réponse de l'IA", "Un type de mot de passe"], answer: 0, why: "La demande est ce que vous donnez à l'assistant IA pour lui dire ce dont vous avez besoin." },
            { objective: "O4", q: "Vous avez besoin d'un court message d'anniversaire pour votre tante. Quelle demande enverriez-vous ?", options: ["« Anniversaire »", "« Écris quelque chose »", "« Message »", "« Écris un message d'anniversaire chaleureux de 3 lignes pour ma tante, qui adore le jardinage. Utilise des mots simples. »"], answer: 3, why: "Elle dit ce dont vous avez besoin, la situation et la forme de réponse voulue." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Améliorer et vérifier la réponse",
          minutes: 5,
          goal: "Améliorer une réponse avec des relances et vérifier ses faits.",
          text: [
            "Considérez la première réponse comme un brouillon. Dans la même conversation, vous pouvez demander : « Fais plus court. » « Utilise des mots plus simples. » « Donne-moi trois choix. » « Mets-le dans un tableau. » L'assistant se souvient des messages précédents de cette conversation.",
            "L'IA peut inventer des choses : une mauvaise date, un numéro de téléphone qui n'existe pas, une règle dépassée. On appelle cela une hallucination. Vérifiez tout fait sur l'argent, la santé, la loi, les aides, les dates, les adresses ou les numéros de téléphone sur un site officiel (les sites du gouvernement américain finissent par .gov ; ailleurs, cherchez le site officiel de l'État) ou auprès d'une personne qui sait, comme un médecin, un bibliothécaire ou un travailleur social.",
            "Demandez à l'assistant « Où puis-je vérifier cela ? », puis allez vous-même sur ce site."
          ],
          steps: ["Lisez la première réponse.", "Demandez un seul changement à la fois.", "Soulignez les faits : nombres, dates, noms, règles.", "Vérifiez chaque fait auprès d'une source officielle ou fiable.", "S'ils diffèrent, faites confiance à la source officielle."],
          words: [["Relance", "un deuxième message qui demande à l'IA de changer ou d'expliquer sa réponse."], ["Hallucination", "quand une IA écrit quelque chose qui semble vrai mais qui est inventé."]],
          slides: [
            { title: "La première réponse est un brouillon", bullets: ["« Fais plus court. »", "« Utilise des mots plus simples. »", "« Donne-moi trois choix. »"] },
            { title: "L'IA peut inventer", bullets: ["Mauvaises dates, mauvais nombres ou règles", "Des bureaux ou des livres qui n'existent pas"] },
            { title: "Vérifiez avant de faire confiance", bullets: ["Argent, santé, loi, aides, dates, numéros de téléphone", "Sites officiels (.gov aux États-Unis) ou une personne qui sait"] }
          ],
          tryIt: "Reprenez votre réponse de la leçon précédente. Demandez deux changements, un à la fois. Puis choisissez un fait dans la réponse et vérifiez-le sur un site officiel ou fiable.",
          youCanNow: "améliorer une réponse d'IA avec des relances et vérifier ses faits avant de l'utiliser.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'une hallucination en IA ?", options: ["Quand l'IA n'a plus de batterie", "Quand l'IA refuse de répondre", "Quand l'IA invente quelque chose qui semble vrai", "Quand l'IA répond dans une autre langue"], answer: 2, why: "L'IA peut inventer une date, un nombre ou une règle faux qui semblent justes : c'est une hallucination." },
            { objective: "O5", q: "Une réponse de l'IA donne la date limite d'un formulaire d'aide sociale. Que feriez-vous avant de vous y fier ?", options: ["Vérifier la date sur le site officiel ou auprès d'une personne qui sait", "Lui faire confiance parce qu'elle vient de l'IA", "Reposer la même question à l'IA et utiliser cette réponse", "La partager d'abord avec des amis"], answer: 0, why: "Les faits sur les dates, l'argent, les aides et les règles doivent être vérifiés sur une source officielle." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Utiliser l'IA de façon juste et sûre",
          minutes: 5,
          goal: "Utiliser l'IA sans partager d'informations privées, de façon juste et honnête.",
          text: [
            "Ne tapez pas d'informations privées dans un assistant IA : numéros de sécurité sociale ou d'identité, mots de passe, numéros de compte bancaire ou de carte, numéros de dossier médical ou adresse complète. Écrivez « [mon numéro] » à la place. Vos conversations peuvent être conservées par l'entreprise.",
            "Soyez honnête sur l'aide de l'IA. Beaucoup d'écoles et d'employeurs ont des règles à ce sujet, alors demandez avant de rendre un travail écrit par l'IA. Relisez et modifiez ce qu'elle écrit pour que cela vous ressemble et dise ce que vous voulez dire.",
            "Pensez au biais : si une réponse semble injuste envers un groupe de personnes, remettez-la en question. Et méfiez-vous des arnaques qui utilisent l'IA, comme de fausses voix de proches qui demandent de l'argent. Arrêtez, raccrochez et rappelez sur un numéro que vous connaissez."
          ],
          steps: ["Relisez votre demande pour y repérer les informations privées avant de l'envoyer.", "Remplacez les détails privés par un espace réservé.", "Vérifiez les règles de votre école ou de votre travail sur l'aide de l'IA.", "Faites des mots finaux les vôtres.", "Considérez toute demande d'argent pressante comme un signal d'alerte."],
          words: [["Information privée", "des détails qui pourraient permettre à quelqu'un de se faire passer pour vous ou de prendre votre argent."], ["Espace réservé", "un texte de remplacement comme « [mon numéro] » que vous écrivez à la place du vrai détail."]],
          slides: [
            { title: "À ne pas donner à l'IA", bullets: ["Numéros d'identité et de sécurité sociale", "Mots de passe, numéros de compte et de carte", "Numéros de dossier médical, adresse complète"] },
            { title: "Soyez honnête", bullets: ["Suivez les règles de votre école ou de votre travail sur l'IA", "Modifiez les mots pour qu'ils soient les vôtres"] },
            { title: "Restez vigilant", bullets: ["Remettez en question les réponses qui semblent injustes", "De fausses voix peuvent demander de l'argent : raccrochez et rappelez"] }
          ],
          tryIt: "Tâche finale : choisissez une vraie tâche, écrivez une demande claire sans information privée, demandez deux améliorations, vérifiez un fait sur un site fiable, puis expliquez l'IA à un ami en trois phrases.",
          youCanNow: "utiliser l'IA pour réaliser une vraie tâche tout en protégeant vos informations privées et en l'utilisant honnêtement.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi faut-il garder les informations privées hors d'une conversation avec l'IA ?", options: ["Cela rend la réponse plus longue", "Les assistants IA ne savent pas lire les nombres", "C'est interdit par toutes les écoles", "L'entreprise peut garder vos conversations"], answer: 3, why: "L'entreprise peut garder vos conversations, donc les numéros d'identité, de banque et médicaux ne doivent jamais y être tapés." },
            { objective: "O6", q: "Vous recevez un appel avec la voix de votre petit-fils qui vous demande d'envoyer de l'argent tout de suite. Que feriez-vous ?", options: ["Envoyer l'argent vite", "Raccrocher et le rappeler sur un numéro que vous connaissez", "Donner le numéro de votre carte bancaire pour vérifier que c'est lui", "Demander à la personne d'envoyer plutôt un SMS"], answer: 1, why: "L'IA peut copier les voix : arrêtez-vous et rappelez sur un numéro que vous connaissez déjà." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien utiliser l'IA",
        questions: [
          { objective: "O4", q: "Quelle demande est la plus claire ?", options: ["« bénévoles »", "« aide »", "« trucs pour samedi »", "« Je gère une banque alimentaire. Écris un message aimable de 4 lignes pour trouver des bénévoles le samedi. Utilise des mots simples. »"], answer: 3, why: "Elle donne le besoin, le contexte et la forme." },
          { objective: "O5", q: "La réponse utilise des mots difficiles. Que tapez-vous ensuite ?", options: ["« Utilise des mots plus simples. »", "Votre mot de passe", "Rien ; vous fermez l'application", "« Recommence pour toujours. »"], answer: 0, why: "Une relance demande à l'IA de changer sa réponse." },
          { objective: "O5", q: "L'IA donne le numéro de téléphone d'un bureau d'aides sociales. Que devez-vous faire ?", options: ["L'appeler tout de suite", "Le partager sur les réseaux sociaux", "Le vérifier sur le site officiel du bureau", "Demander à l'IA si elle est sûre et la croire"], answer: 2, why: "L'IA peut inventer des numéros ; le site officiel est la source fiable." },
          { objective: "O6", q: "Que devez-vous écrire à la place du numéro de votre carte bancaire dans une demande ?", options: ["Le vrai numéro", "Votre code PIN", "Les 12 derniers chiffres", "Un espace réservé comme « [ma carte] »"], answer: 3, why: "Un espace réservé vous permet d'obtenir de l'aide sans partager d'informations privées." },
          { objective: "O6", q: "Vous voulez rendre un devoir qu'une IA vous a aidé à écrire. Que faites-vous d'abord ?", options: ["Vérifier les règles de votre école sur l'aide de l'IA", "Le rendre sans le lire", "Copier celui d'un ami", "Le supprimer"], answer: 0, why: "Les écoles et les employeurs ont des règles sur l'aide de l'IA ; l'honnêteté passe en premier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Introduction à l'intelligence artificielle",
    questions: [
      { objective: "O1", q: "La meilleure description de l'IA est :", options: ["Une personne dans l'ordinateur", "Une marque de téléphone", "Des programmes qui utilisent des régularités pour faire des tâches que font d'habitude les personnes", "Une sorte d'adresse e-mail"], answer: 2, why: "L'IA trouve des régularités et fait des suppositions pour réaliser des tâches." },
      { objective: "O1", q: "Pourquoi une IA peut-elle sembler sûre d'elle et pourtant se tromper ?", options: ["Elle plaisante", "Elle ne se trompe jamais", "Sa batterie est faible", "Elle fait sa meilleure supposition à partir de régularités, sans connaître la vérité"], answer: 3, why: "L'IA devine à partir de régularités, et une mauvaise supposition peut sembler sûre." },
      { objective: "O1", q: "Quel outil est une IA générative ?", options: ["Une calculatrice", "Une carte en papier", "Google Gemini", "Un interrupteur"], answer: 2, why: "Gemini fabrique du texte nouveau quand vous le demandez, c'est donc une IA générative." },
      { objective: "O2", q: "Comment la plupart des programmes d'IA apprennent-ils aujourd'hui ?", options: ["À partir de nombreux exemples (des données)", "En lisant dans vos pensées", "En devinant sans aucun exemple", "Grâce à la batterie du téléphone"], answer: 0, why: "Ils apprennent des régularités à partir de données." },
      { objective: "O2", q: "Un filtre anti-spam a été entraîné avec des milliers d'e-mails marqués spam ou pas spam. C'est un exemple de :", options: ["Entraînement sur des données", "Recharge d'un téléphone", "Envoi d'un SMS", "Mot de passe"], answer: 0, why: "Apprendre à partir d'exemples étiquetés, c'est l'entraînement." },
      { objective: "O2", q: "Qu'est-ce qu'un biais en IA ?", options: ["Un ordinateur rapide", "Des données qui penchent d'un côté et rendent les suppositions injustes pour certaines personnes", "Un type de demande", "Un réglage de luminosité du téléphone"], answer: 1, why: "Des données partiales mènent à des suppositions injustes." },
      { objective: "O3", q: "Lequel est un exemple quotidien d'IA ?", options: ["Une agrafeuse", "Une application vidéo qui propose quoi regarder ensuite", "Une enveloppe en papier", "Une clé de porte"], answer: 1, why: "Les recommandations viennent de l'IA." },
      { objective: "O3", q: "Siri, Google Assistant et Alexa sont :", options: ["Des banques", "Des assistants vocaux qui utilisent l'IA", "Des adresses e-mail", "Des imprimantes"], answer: 1, why: "Ils utilisent l'IA pour comprendre la parole." },
      { objective: "O3", q: "Une application vous propose sans cesse des choses que vous ne voulez pas. Une bonne première étape est de :", options: ["Jeter le téléphone", "Chercher dans les réglages de l'application ce que vous pouvez changer", "Lui donner votre mot de passe", "Ne plus jamais utiliser d'applications"], answer: 1, why: "La plupart des applications ont des réglages qui contrôlent les suggestions." },
      { objective: "O4", q: "Qu'est-ce qu'une demande (prompt) ?", options: ["Un chargeur de téléphone", "Ce que vous tapez ou dites à un assistant IA", "Une fin d'adresse de site web", "Un type de virus"], answer: 1, why: "Une demande, c'est ce que vous demandez à l'IA." },
      { objective: "O4", q: "Quelle adresse ouvre l'assistant IA de Microsoft ?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com est l'adresse officielle de Microsoft." },
      { objective: "O4", q: "Quelles sont les trois parties d'une demande claire ?", options: ["Nom, mot de passe, adresse", "Ce dont vous avez besoin, le contexte, la forme de réponse voulue", "Couleur, taille, prix", "Bonjour, merci, au revoir"], answer: 1, why: "Ces trois parties donnent une réponse utile." },
      { objective: "O5", q: "La première réponse est trop longue. Vous devez :", options: ["L'accepter quand même", "Payer une nouvelle application", "Demander « Fais plus court. »", "Commencer à taper des détails privés"], answer: 2, why: "Une relance modifie la réponse." },
      { objective: "O5", q: "Une « hallucination » en IA veut dire :", options: ["L'IA a inventé quelque chose qui semble vrai", "L'écran est flou", "L'application est gratuite", "L'IA est éteinte"], answer: 0, why: "L'IA peut inventer des faits qui semblent réels." },
      { objective: "O5", q: "Que devez-vous toujours vérifier auprès d'une source officielle ?", options: ["Un poème d'anniversaire", "Une blague", "Une liste de couleurs pour une fête", "Une date limite pour les impôts"], answer: 3, why: "Les dates, l'argent et les règles peuvent être faux et doivent être vérifiés." },
      { objective: "O5", q: "Les sites web du gouvernement américain finissent généralement par :", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: ".gov est utilisé par les sites du gouvernement américain." },
      { objective: "O6", q: "Que pouvez-vous taper sans danger dans un assistant IA ?", options: ["Votre numéro de sécurité sociale", "« [mon numéro] » comme espace réservé", "Le mot de passe de votre banque", "Le code de sécurité de votre carte"], answer: 1, why: "Un espace réservé garde vos informations privées hors de l'IA." },
      { objective: "O6", q: "Avant d'utiliser des mots écrits par l'IA pour l'école ou le travail, vous devez :", options: ["Vérifier les règles et faire des mots les vôtres", "Les rendre sans les lire", "Enlever votre nom", "Les publier en ligne d'abord"], answer: 0, why: "Un usage honnête, c'est suivre les règles et retravailler le texte." },
      { objective: "O6", q: "Une réponse de l'IA semble injuste envers un groupe de personnes. Que faites-vous ?", options: ["La partager largement", "La remettre en question et vérifier d'autres sources", "Supposer qu'elle est vraie", "Changer votre mot de passe"], answer: 1, why: "Le biais peut apparaître dans les réponses ; remettez-les en question." },
      { objective: "O6", q: "Un appel avec la voix d'un proche vous demande d'envoyer de l'argent tout de suite. Vous devez :", options: ["L'envoyer vite", "Lui lire votre numéro de carte", "Lui donner un code reçu sur votre téléphone", "Raccrocher et rappeler ce proche sur un numéro que vous connaissez"], answer: 3, why: "L'IA peut imiter des voix ; rappeler sur un numéro connu arrête l'arnaque." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Expliquer l'IA",
        objective: "O1",
        notYet: "L'explication manque, est fausse ou ne dit pas pourquoi la réponse a été vérifiée.",
        meets: "Trois phrases simples disent ce qu'est l'IA, qu'elle fait des suppositions à partir de régularités, et pourquoi la réponse a été vérifiée.",
        exceeds: "Donne aussi un exemple du quotidien et signale que de mauvaises données peuvent rendre les réponses injustes."
      },
      {
        name: "Demande claire",
        objective: "O4",
        notYet: "La demande fait un ou deux mots ou ne dit pas ce dont vous avez besoin.",
        meets: "La demande dit ce dont vous avez besoin, la situation et la forme de réponse voulue.",
        exceeds: "La demande fixe aussi une longueur ou une forme et donne une première réponse utile."
      },
      {
        name: "Améliorer la réponse",
        objective: "O5",
        notYet: "Aucune relance n'a été faite, ou la première réponse a été utilisée telle quelle.",
        meets: "Deux relances ont été faites, une à la fois, et la réponse s'est améliorée.",
        exceeds: "Les mots finaux ont aussi été modifiés pour qu'ils vous ressemblent."
      },
      {
        name: "Vérifier un fait",
        objective: "O5",
        notYet: "Aucun fait n'a été vérifié, ou il a été vérifié seulement en reposant la question à l'IA.",
        meets: "Un fait a été vérifié sur un site officiel ou fiable.",
        exceeds: "Chaque fait sur des dates, de l'argent, des règles ou des numéros de téléphone a été vérifié, et toute différence a été corrigée."
      },
      {
        name: "Vie privée et honnêteté",
        objective: "O6",
        notYet: "La demande contient un détail privé comme un numéro d'identité, un mot de passe ou une adresse complète.",
        meets: "La demande ne contient aucune information privée ; tout détail personnel est un espace réservé.",
        exceeds: "Les règles de l'école ou du travail sur l'aide de l'IA ont aussi été vérifiées quand elles s'appliquent."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille de l'exercice final",
      "Apprenants qui disent avoir utilisé un assistant IA gratuit pour une vraie tâche dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui disent avoir vérifié une réponse de l'IA sur une source officielle, ou repéré et évité un appel ou un message d'arnaque",
      "Apprenants qui suivent ensuite un autre cours, comme « Les bases de la culture numérique » ou « Introduction à la cybersécurité »"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur avec internet et un navigateur web",
      "Un assistant IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini (aucun paiement nécessaire)",
      "Du papier et un stylo pour noter la demande, les relances et le fait vérifié",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis enseignez un chapitre par séance avec les exercices « Essayez maintenant » faits en binôme ; associez les apprenants qui découvrent les appareils à un partenaire plus à l'aise.",
      "Certains assistants gratuits demandent de se connecter ; laissez chaque apprenant décider s'il crée un compte, et montrez ceux qui fonctionnent sans connexion quand c'est possible.",
      "Avant que quelqu'un envoie une demande, demandez-lui de la lire à voix haute et de remplacer tout détail privé par un espace réservé comme « [mon numéro] ».",
      "Préparez un site officiel pour l'exercice de vérification de chaque groupe (par exemple une page .gov ou le site d'une bibliothèque locale) pour que les apprenants vérifient un vrai fait.",
      "Parlez ouvertement des arnaques par clonage de voix ; dites aux apprenants de raccrocher et de rappeler leur proche sur un numéro connu, et donnez le contact local pour signaler une fraude si votre programme en a un."
    ]
  }
};
