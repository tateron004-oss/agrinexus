"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-smart-homes.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// As in the English: no prices or exact menu names; students check the product's own app and help pages.

module.exports = {
  id: "seniors-ai-smart-homes-fr",
  lang: "fr",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "L'IA et la maison connectée",
  skills: "Comprendre les appareils de la maison connectée, Donner des commandes vocales claires à une enceinte connectée, Créer une routine simple, Choisir des appareils pour la sécurité et le confort, Protéger sa vie privée à la maison",
  outcome: "utiliser une enceinte connectée ou l'assistant vocal de votre téléphone pour donner des commandes vocales claires, prévoir ou créer une routine quotidienne simple (comme un rappel du matin et la météo) et protéger votre vie privée en coupant le micro et en vérifiant les réglages.",
  about: [
    "Une maison connectée est une maison avec des appareils que l'on commande à la voix ou depuis son téléphone : des enceintes qui répondent aux questions, des lampes qui s'allument toutes seules, des prises qui allument et éteignent une lampe, et des sonnettes avec caméra. Pour les personnes âgées, ces appareils peuvent rendre la vie quotidienne plus facile et plus sûre, surtout quand on vit seul.",
    "Vous apprendrez ce que font les appareils les plus courants, comment parler à une enceinte connectée comme Amazon Echo (Alexa) ou Google Nest (Google Assistant), comment créer une routine simple et comment protéger votre maison et votre vie privée.",
    "Vous n'avez besoin d'aucun appareil connecté pour suivre ce cours : vous pouvez pratiquer les commandes vocales avec l'assistant déjà présent sur votre téléphone. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Prévoyez une routine quotidienne pour votre maison, comme « Bonjour » : l'enceinte ou le téléphone vous donne la météo, vous rappelle votre médicament du matin et allume une lampe. Écrivez-la, créez-en autant que vos appareils le permettent et entraînez-vous à la voix. Puis trouvez et utilisez le bouton ou le réglage qui coupe le micro.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées, beaucoup vivant seules, qui ont ou envisagent une enceinte connectée, des lampes connectées ou une sonnette vidéo, souvent offertes par la famille, et qui veulent qu'elles les aident pour les rappels, la sécurité et les appels.",
    startingPoint: "Elles utilisent un téléphone pour appeler et envoyer des SMS et ont le Wi-Fi à la maison. Beaucoup ont une enceinte connectée mais ne s'en servent que pour la météo ou la musique, et ne savent pas bien comment marchent les routines ou les réglages de confidentialité.",
    gap: "Les appareils de la maison connectée peuvent aider les seniors à vivre en sécurité et de façon autonome, avec des rappels, des lumières qui évitent les chutes et des appels à la voix, mais beaucoup restent inutilisés ou inquiètent pour la vie privée. Des commandes claires, une routine simple et savoir couper le micro et revoir les réglages en font une aide de tous les jours.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : Amazon Echo ou Google Nest, ou l'assistant vocal d'un téléphone ; les menus des applications changent avec le temps",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille",
      "Les fonctions d'urgence changent selon le produit et le pays ; toutes les enceintes ne peuvent pas appeler les secours (le 911 aux États-Unis)",
      "Vie privée : les enceintes et les caméras enregistrent ; ne donnez jamais à quelqu'un qui appelle un code reçu par SMS"
    ],
    prerequisites: "Aucun. Les apprenants sans enceinte connectée peuvent suivre avec l'assistant vocal de leur téléphone."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'appareils courants de la maison connectée", action: "nommer ce que peuvent faire une enceinte connectée, une prise connectée, une ampoule connectée et une sonnette vidéo", standard: "en trouvant au moins 3 bonnes réponses sur 4" },
    { id: "O2", condition: "Avec une enceinte connectée ou l'assistant vocal de votre téléphone", action: "donner des commandes vocales claires qui commencent par le mot de réveil", standard: "pour que l'appareil fasse ce que vous avez demandé, en essayant des mots plus simples si besoin" },
    { id: "O3", condition: "Avec l'application Alexa ou Google Home", action: "prévoir et créer une routine quotidienne qui fait plusieurs choses avec une seule phrase", standard: "avec deux ou trois actions, essayée à la voix" },
    { id: "O4", condition: "À partir des problèmes de sécurité que vous voulez régler à la maison", action: "choisir les fonctions connectées qui y répondent et vérifier ce que le produit peut faire et ne peut pas faire", standard: "avant de l'acheter ou de compter dessus" },
    { id: "O5", condition: "Quand vous voulez de l'intimité à la maison", action: "couper le micro et revoir les réglages de confidentialité et les enregistrements vocaux", standard: "sans donner aucun code reçu par SMS ni aucun mot de passe à quelqu'un qui appelle" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Découvrir la maison connectée",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que font les appareils de la maison connectée",
          minutes: 5,
          goal: "Citer les appareils connectés courants et ce que chacun peut faire pour vous.",
          text: [
            "Les appareils de la maison connectée se branchent au Wi-Fi de votre maison pour que vous puissiez les commander à la voix ou avec une application sur votre téléphone.",
            "Les plus courants : une enceinte connectée, comme Amazon Echo avec Alexa ou Google Nest avec Google Assistant, répond aux questions, joue de la musique et la radio, règle des minuteurs et des rappels, et passe des appels. Une prise connectée permet d'allumer et d'éteindre une lampe ou un ventilateur à la voix ou à heure fixe. Les ampoules connectées changent d'intensité. Une sonnette vidéo vous permet de voir sur votre téléphone qui est à la porte avant d'ouvrir.",
            "Pour une personne âgée qui vit seule, les plus utiles sont souvent une enceinte pour les rappels et les appels, des lampes connectées pour ne jamais entrer dans une pièce sombre, et une sonnette vidéo pour la sécurité."
          ],
          words: [["Appareil connecté", "un appareil relié à internet que l'on commande à la voix ou par téléphone."], ["Wi-Fi", "l'internet sans fil de votre maison."], ["Prise connectée", "un adaptateur de prise qui permet d'allumer et d'éteindre une lampe ou un appareil à la voix ou par application."]],
          slides: [
            { title: "Les appareils connectés utilisent le Wi-Fi", bullets: ["On les commande à la voix", "Ou avec une application sur le téléphone"] },
            { title: "Appareils courants", bullets: ["Enceinte connectée : questions, musique, rappels, appels", "Prise et ampoules connectées : lumière allumée ou éteinte", "Sonnette vidéo : voir qui est à la porte"] },
            { title: "Les plus utiles quand on vit seul", bullets: ["Rappels et appels à la voix", "Fini les pièces sombres", "Voir les visiteurs avant d'ouvrir"] }
          ],
          tryIt: "Faites le tour de votre maison et notez deux tâches quotidiennes qu'un appareil connecté pourrait faciliter, comme allumer une lampe difficile à atteindre ou voir qui est à la porte.",
          youCanNow: "citer des appareils connectés courants et dire comment ils pourraient vous aider.",
          quickCheck: [
            { objective: "O1", q: "Que fait une prise connectée ?", options: ["Elle charge votre téléphone plus vite", "Elle vous permet d'allumer et d'éteindre une lampe ou un ventilateur à la voix ou à heure fixe", "Elle enregistre des vidéos", "Elle passe des appels"], answer: 1, why: "Une prise connectée commande ce qui y est branché, à la voix ou selon un horaire." },
            { objective: "O1", q: "Vous vivez seul et vous vous inquiétez de savoir qui frappe le soir. Quel appareil vous aide le plus ?", options: ["Une ampoule connectée", "Une prise connectée", "Une sonnette vidéo", "Une enceinte pour la musique"], answer: 2, why: "Une sonnette vidéo vous permet de voir sur votre téléphone qui est à la porte avant d'ouvrir." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Parler à une enceinte connectée",
          minutes: 5,
          goal: "Donner des commandes vocales claires à une enceinte connectée ou à l'assistant de votre téléphone.",
          text: [
            "On lance une enceinte connectée avec son mot de réveil : « Alexa » pour Amazon Echo, ou « Ok Google » pour Google Nest. Une lumière montre qu'elle écoute. L'assistant vocal de votre téléphone marche de la même façon avec « Dis Siri » ou « Ok Google ».",
            "Parlez clairement, à un rythme normal, et dites exactement ce que vous voulez : « Alexa, quel temps fait-il aujourd'hui ? » « Ok Google, mets un minuteur de 15 minutes. » « Alexa, mets la radio de musique classique. » « Ok Google, appelle Marguerite. »",
            "Si elle ne comprend pas, redites-le avec des mots plus simples. Les enceintes récentes utilisent l'IA pour comprendre des questions plus naturelles, mais les commandes courtes et claires marchent toujours le mieux."
          ],
          steps: ["Dites le mot de réveil : « Alexa » ou « Ok Google ».", "Attendez la lumière.", "Dites clairement ce que vous voulez.", "Si elle ne comprend pas, réessayez avec des mots plus simples."],
          words: [["Mot de réveil", "le mot qui dit à une enceinte connectée de commencer à écouter, comme « Alexa »."], ["Commande", "une courte instruction à voix haute, comme « mets un minuteur de 15 minutes »."]],
          slides: [
            { title: "Réveillez-la", bullets: ["« Alexa » pour Amazon Echo", "« Ok Google » pour Google Nest", "Une lumière montre qu'elle écoute"] },
            { title: "Des commandes claires", bullets: ["« Quel temps fait-il aujourd'hui ? »", "« Mets un minuteur de 15 minutes. »", "« Appelle Marguerite. »"] },
            { title: "Pas compris ?", bullets: ["Redites-le avec des mots plus simples", "Les commandes courtes marchent le mieux"] }
          ],
          tryIt: "Avec une enceinte connectée ou l'assistant de votre téléphone, donnez trois commandes : demandez la météo du jour, mettez un minuteur de 5 minutes et demandez un rappel demain à 9 h.",
          youCanNow: "donner des commandes vocales claires à une enceinte connectée ou à un assistant vocal.",
          quickCheck: [
            { objective: "O2", q: "Quel est le mot de réveil d'Amazon Echo ?", options: ["\"Alexa\"", "\"Bonjour\"", "\"Dis Siri\"", "\"Démarrer\""], answer: 0, why: "Amazon Echo écoute \"Alexa\" ; Google Nest écoute \"Hey Google\"." },
            { objective: "O2", q: "Vous avez posé une longue question et l'enceinte s'est trompée. Que faites-vous ?", options: ["La débrancher", "Crier plus fort", "Arrêter de l'utiliser", "Redire votre demande avec des mots plus courts et plus simples"], answer: 3, why: "Les commandes courtes et claires marchent toujours le mieux ; réessayez avec des mots plus simples." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer une routine simple",
          minutes: 6,
          goal: "Prévoir une routine qui fait plusieurs choses avec une seule phrase.",
          text: [
            "Une routine permet à une seule phrase de faire plusieurs choses. Par exemple, dire « Bonjour » peut allumer une lampe, vous donner la météo et vous rappeler de prendre votre médicament.",
            "Les routines se créent dans l'application de l'appareil sur le téléphone : l'application Alexa pour Echo, ou l'application Google Home pour Nest. Cherchez une rubrique Routines, touchez pour en ajouter une, choisissez la phrase qui la lance, puis ajoutez les actions. Les menus changent de temps en temps : si vous ne trouvez pas, consultez l'aide de l'application ou demandez à un proche.",
            "Commencez par une seule routine simple. Vous pouvez demander à un assistant IA de vous aider à la prévoir : « Aide-moi à prévoir une routine du matin pour mon enceinte connectée. Je veux la météo, un rappel de médicament et ma lampe allumée. »"
          ],
          steps: ["Prévoyez la phrase et les actions sur papier.", "Ouvrez l'application Alexa ou Google Home.", "Trouvez Routines et ajoutez-en une.", "Choisissez la phrase de départ.", "Ajoutez chaque action, enregistrez et essayez à la voix."],
          words: [["Routine", "une phrase ou une heure qui fait faire plusieurs choses d'affilée à un appareil."], ["Application compagnon", "l'application du téléphone qui sert à installer et commander un appareil connecté."]],
          slides: [
            { title: "Une phrase, plusieurs actions", bullets: ["« Bonjour » peut...", "Allumer une lampe", "Donner la météo et rappeler le médicament"] },
            { title: "Où la créer", bullets: ["Application Alexa ou Google Home", "Trouvez Routines, ajoutez-en une", "Choisissez la phrase, ajoutez les actions, enregistrez"] },
            { title: "Commencez simple", bullets: ["Prévoyez d'abord sur papier", "Demandez à l'IA de vous aider à prévoir", "Demandez à un proche si un menu est difficile à trouver"] }
          ],
          tryIt: "Écrivez une routine « Bonjour » ou « Bonne nuit » avec une phrase et deux ou trois actions. Demandez à un assistant IA de vérifier votre plan et de proposer une amélioration.",
          youCanNow: "prévoir une routine simple pour la maison connectée et savoir où la créer.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une routine sur une enceinte connectée ?", options: ["Une promenade quotidienne", "Une phrase qui fait faire plusieurs choses à l'appareil", "Une liste de chansons", "Un mot de passe"], answer: 1, why: "Une routine permet à une seule phrase, comme « Bonjour », de lancer plusieurs actions." },
            { objective: "O3", q: "Vous ne trouvez pas Routines dans l'application parce que le menu a changé. Que faites-vous ?", options: ["Renoncer aux routines", "Acheter une nouvelle enceinte", "Consulter les pages d'aide de l'application ou demander à un membre de la famille", "Réinitialiser l'enceinte"], answer: 2, why: "Les menus changent de temps en temps ; les pages d'aide ou un membre de la famille peuvent vous montrer où il se trouve." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Découvrir la maison connectée",
        questions: [
          { objective: "O1", q: "À quoi se connectent les appareils de la maison connectée ?", options: ["À la boîte aux lettres", "Aux tuyaux d'eau", "Au Wi-Fi de votre maison", "Seulement à un chargeur de piles"], answer: 2, why: "Ils utilisent le Wi-Fi pour que vous puissiez les commander." },
          { objective: "O1", q: "Quel appareil vous permet de voir sur votre téléphone qui est à la porte ?", options: ["Une sonnette vidéo", "Une prise connectée", "Une ampoule connectée", "Un grille-pain"], answer: 0, why: "Les sonnettes vidéo montrent les visiteurs sur votre téléphone." },
          { objective: "O2", q: "Qu'est-ce qu'un mot de réveil ?", options: ["Une carte de bonjour", "Le son d'un réveil", "Un mot de passe", "Un mot qui fait commencer l'écoute de l'enceinte"], answer: 3, why: "« Alexa » ou « Ok Google » réveille l'enceinte." },
          { objective: "O2", q: "L'enceinte ne vous a pas compris. Que faut-il essayer ?", options: ["Crier", "Le redire avec des mots plus simples", "La débrancher pour toujours", "Lui donner votre mot de passe"], answer: 1, why: "Les commandes courtes et claires marchent le mieux." },
          { objective: "O3", q: "Où crée-t-on une routine pour une enceinte Google Nest ?", options: ["Dans la Calculatrice", "Dans l'application Google Home", "Sur la télécommande de la télé", "Dans l'Appareil photo"], answer: 1, why: "L'application compagnon contient les Routines." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Sécurité, confort et vie privée",
      lessons: [
        {
          objectives: ["O4","O1"],
          title: "Des appareils connectés pour la sécurité",
          minutes: 5,
          goal: "Choisir les fonctions de la maison connectée qui rendent la vie seule plus sûre.",
          text: [
            "Les appareils connectés peuvent vous aider à vous sentir plus en sécurité chez vous. Des lumières à heure fixe ou à détecteur de mouvement vous évitent d'entrer dans une pièce sombre la nuit, ce qui peut aider à prévenir les chutes. Une sonnette vidéo vous permet de voir les visiteurs et de leur parler sans ouvrir la porte.",
            "Une enceinte connectée peut appeler un proche à la voix si vous n'arrivez pas à atteindre votre téléphone. Certaines enceintes et certains services proposent des fonctions d'urgence, mais elles varient selon le produit et le pays, et toutes ne peuvent pas appeler les secours (le 911 aux États-Unis). Consultez l'aide du produit pour savoir exactement ce que le vôtre peut et ne peut pas faire. Les dispositifs d'alerte médicale faits pour les urgences sont un autre choix à discuter avec votre famille.",
            "Avant d'acheter, faites la liste des problèmes que vous voulez résoudre, et demandez à un proche ou à un vendeur quel appareil convient. Vous n'avez pas besoin de tout."
          ],
          steps: ["Listez les problèmes de sécurité que vous voulez résoudre.", "Associez chacun à un appareil : lumières, sonnette ou enceinte.", "Consultez l'aide du produit pour ce qu'il peut et ne peut pas faire.", "Demandez à un proche ou à un vendeur avant d'acheter."],
          words: [["Détecteur de mouvement", "un appareil qui remarque un mouvement et peut allumer une lumière."], ["Dispositif d'alerte médicale", "un bouton que l'on porte sur soi, fait pour appeler à l'aide en cas d'urgence."]],
          slides: [
            { title: "Plus en sécurité chez soi", bullets: ["Lumières programmées ou à détecteur contre les chutes", "Sonnette vidéo : voir les visiteurs d'abord", "Appeler un proche à la voix"] },
            { title: "Connaissez votre appareil", bullets: ["Les fonctions d'urgence varient", "Tous ne peuvent pas appeler les secours", "Consultez l'aide du produit"] },
            { title: "Achetez avec un plan", bullets: ["Listez d'abord les problèmes", "Un appareil pour chacun", "Vous n'avez pas besoin de tout"] }
          ],
          tryIt: "Notez une inquiétude de sécurité que vous avez chez vous, comme un couloir sombre la nuit, et l'appareil connecté qui pourrait aider. Demandez à un assistant IA quelles questions poser avant de l'acheter.",
          youCanNow: "choisir les fonctions de la maison connectée adaptées à vos besoins de sécurité.",
          quickCheck: [
            { objective: "O4", q: "Comment des lumières avec détecteur de mouvement peuvent-elles vous aider à rester en sécurité ?", options: ["Elles ferment vos portes à clé", "Elles appellent le 911", "Elles s'allument pour que vous n'entriez pas dans une pièce sombre", "Elles jouent de la musique"], answer: 2, why: "Des lumières qui s'allument toutes seules peuvent aider à éviter les chutes la nuit." },
            { objective: "O4", q: "Vous voulez une enceinte qui peut appeler à l'aide en cas d'urgence. Que faites-vous avant de compter dessus ?", options: ["Consulter les pages d'aide du produit pour savoir ce qu'il peut faire et ne peut pas faire", "Supposer que toutes les enceintes peuvent appeler le 911", "Demander à l'enceinte de promettre", "Couper son micro"], answer: 0, why: "Les fonctions d'urgence changent selon le produit et le pays ; vérifiez exactement ce que la vôtre peut faire." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Protéger votre vie privée à la maison",
          minutes: 5,
          goal: "Utiliser le bouton de coupure du micro et les réglages de confidentialité d'un appareil connecté.",
          text: [
            "Les enceintes connectées écoutent leur mot de réveil. Elles peuvent parfois confondre un autre mot avec lui et enregistrer un peu. Les caméras enregistrent des vidéos. Il est donc sage de savoir comment les contrôler.",
            "Chaque enceinte connectée a un bouton pour couper le micro ; quand il est coupé, une lumière (souvent rouge) montre qu'elle n'écoute pas. Utilisez-le pendant les conversations privées. Les caméras ont souvent un mode confidentialité ou un cache. Dans l'application de l'appareil, cherchez les réglages de Confidentialité, où vous pouvez en général revoir et supprimer les enregistrements vocaux.",
            "Utilisez un mot de passe solide pour votre Wi-Fi et pour les comptes des appareils, et ne donnez jamais les codes reçus par SMS à quelqu'un qui vous appelle au sujet de vos appareils."
          ],
          steps: ["Trouvez le bouton qui coupe le micro sur votre enceinte.", "Appuyez dessus pendant les conversations privées ; regardez la lumière de couleur.", "Ouvrez l'application de l'appareil et trouvez les réglages de Confidentialité.", "Revoyez et supprimez les enregistrements vocaux si vous le souhaitez.", "Utilisez des mots de passe solides et ne donnez jamais les codes reçus par SMS."],
          words: [["Couper le micro", "désactiver un micro pour qu'il ne puisse pas entendre."], ["Réglages de confidentialité", "les choix dans une application sur ce qui est enregistré, gardé et partagé."]],
          slides: [
            { title: "Enceintes et caméras écoutent et voient", bullets: ["Les enceintes attendent le mot de réveil", "Elles peuvent parfois mal entendre", "Les caméras enregistrent des vidéos"] },
            { title: "Gardez le contrôle", bullets: ["Bouton micro coupé : une lumière le montre", "Mode confidentialité ou cache pour la caméra", "Revoyez et supprimez les enregistrements dans l'application"] },
            { title: "Protégez vos comptes", bullets: ["Mots de passe solides pour le Wi-Fi et les comptes", "Ne donnez jamais les codes reçus par SMS"] }
          ],
          tryIt: "Trouvez le bouton ou le réglage qui coupe le micro sur une enceinte connectée, ou le réglage du micro de l'assistant de votre téléphone. Coupez-le puis réactivez-le, et remarquez comment on voit qu'il est coupé.",
          youCanNow: "couper le micro d'un appareil connecté et trouver ses réglages de confidentialité.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi une enceinte connectée peut-elle enregistrer un peu par erreur ?", options: ["Elle enregistre tout, tout le temps", "Elle peut confondre un autre mot avec son mot de réveil", "Elle est en panne", "Elle n'enregistre que la musique"], answer: 1, why: "Les enceintes écoutent le mot de réveil et peuvent parfois le confondre avec un autre mot." },
            { objective: "O5", q: "Votre famille est là et vous voulez parler d'argent en privé. Que faites-vous avec l'enceinte ?", options: ["Monter la musique", "Lui demander d'arrêter d'écouter", "Débrancher la box Wi-Fi", "Appuyer sur le bouton qui coupe le micro et regarder le voyant"], answer: 3, why: "Le bouton qui coupe le micro arrête le micro ; un voyant, souvent rouge, montre qu'elle n'écoute pas." }
          ]
        },
        {
          objectives: ["O3","O2"],
          title: "Mettre votre maison connectée au travail",
          minutes: 5,
          goal: "Prévoir et pratiquer une routine quotidienne complète.",
          text: [
            "Maintenant, réunissez les morceaux. Une bonne première routine est simple, utile chaque jour et facile à dire.",
            "Exemple : « Bonjour » allume la lampe de la chambre, vous donne la météo et votre agenda, et vous rappelle de prendre votre médicament du matin. « Bonne nuit » éteint les lampes et règle votre réveil.",
            "Entraînez-vous à dire votre routine plusieurs fois. Si quelque chose ne marche pas, vérifiez une action à la fois dans l'application, ou demandez à un proche de regarder avec vous. Gardez une note écrite de vos commandes près de l'enceinte jusqu'à ce qu'elles deviennent une habitude."
          ],
          steps: ["Choisissez une phrase dont vous vous souviendrez.", "Choisissez deux ou trois actions utiles.", "Créez-la dans l'application, autant que vos appareils le permettent.", "Entraînez-vous plusieurs fois à la voix.", "Gardez une note de vos commandes près de l'enceinte."],
          words: [["Habitude", "une chose que l'on fait si souvent qu'elle devient automatique."]],
          slides: [
            { title: "Une bonne première routine", bullets: ["Simple", "Utile chaque jour", "Facile à dire"] },
            { title: "Exemple", bullets: ["« Bonjour » : lampe, météo, agenda, rappel de médicament", "« Bonne nuit » : lampes éteintes, réveil réglé"] },
            { title: "Pour que ça tienne", bullets: ["Entraînez-vous plusieurs fois", "Corrigez une action à la fois", "Gardez une note près de l'enceinte"] }
          ],
          tryIt: "Tâche finale : écrivez votre routine « Bonjour », créez-en autant que vos appareils le permettent et entraînez-vous à la voix. Puis trouvez et utilisez le bouton ou le réglage qui coupe le micro.",
          youCanNow: "utiliser des commandes vocales et une routine simple pour rendre votre maison plus facile et plus sûre, tout en protégeant votre vie privée.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui fait une bonne première routine ?", options: ["Simple, utile chaque jour et facile à dire", "Le plus d'actions possible", "Une longue phrase", "Seulement de la musique"], answer: 0, why: "Commencez simplement : une phrase dont vous vous souviendrez, avec deux ou trois actions utiles." },
            { objective: "O3", q: "Votre nouvelle routine « Bonne nuit » a éteint les lampes mais n'a pas mis le réveil. Que faites-vous ?", options: ["Supprimer toute la routine", "Ne plus jamais utiliser de routines", "La dire plus fort", "Vérifier cette action dans l'application, ou la regarder avec un membre de la famille"], answer: 3, why: "Si quelque chose ne marche pas, vérifiez une action à la fois dans l'application." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Sécurité, confort et vie privée",
        questions: [
          { objective: "O4", q: "Comment les lampes connectées peuvent-elles aider à prévenir les chutes ?", options: ["Elles verrouillent les portes", "Elles sont plus lourdes", "Elles appellent le médecin", "Elles s'allument pour que vous n'entriez pas dans une pièce sombre"], answer: 3, why: "Des pièces éclairées la nuit aident à prévenir les chutes." },
          { objective: "O4", q: "Toutes les enceintes connectées peuvent-elles appeler les secours ?", options: ["Non ; vérifiez ce que votre produit peut et ne peut pas faire", "Oui, toutes", "Seulement les rouges", "Seulement le week-end"], answer: 0, why: "Les fonctions d'urgence varient selon le produit et le pays." },
          { objective: "O5", q: "La lumière de l'enceinte devient rouge après avoir appuyé sur le bouton du micro. Cela veut dire :", options: ["Elle appelle les secours", "Elle est cassée", "Le micro est coupé", "Elle enregistre davantage"], answer: 2, why: "La lumière de couleur montre que le micro est coupé." },
          { objective: "O5", q: "Où peut-on en général revoir et supprimer les enregistrements vocaux ?", options: ["Dans une publicité", "Dans le micro-ondes", "Dans le programme télé", "Dans les réglages de confidentialité de l'application de l'appareil"], answer: 3, why: "Les réglages de confidentialité de l'application gèrent les enregistrements." },
          { objective: "O5", q: "Un appelant dit venir de la société de l'enceinte et demande le code reçu par SMS. Vous :", options: ["Le lui envoyez par SMS", "Le lui lisez", "Ne le donnez jamais et raccrochez", "Le publiez en ligne"], answer: 2, why: "Les codes reçus par SMS protègent votre compte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et la maison connectée",
    questions: [
      { objective: "O1", q: "Un appareil connecté est :", options: ["N'importe quelle vieille lampe", "Un appareil commandé à la voix ou par téléphone via internet", "Un calendrier en papier", "Un téléphone fixe"], answer: 1, why: "Les appareils connectés sont reliés à internet." },
      { objective: "O1", q: "Quel assistant vocal utilise Amazon Echo ?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Les enceintes Echo utilisent Alexa." },
      { objective: "O1", q: "Une prise connectée permet de :", options: ["Allumer et éteindre une lampe à la voix ou à heure fixe", "Recharger une voiture", "Passer des appels", "Verrouiller les portes"], answer: 0, why: "Elle commande ce qui est branché dessus." },
      { objective: "O2", q: "Quel mot réveille une enceinte Google Nest ?", options: ["« Bonjour téléphone »", "« Ok Google »", "« Ordinateur »", "« Démarrer »"], answer: 1, why: "« Ok Google » est son mot de réveil." },
      { objective: "O2", q: "Laquelle est une commande claire ?", options: ["« Minuteur, truc. »", "« Euh, peut-être, la chose ? »", "« Mets un minuteur de 15 minutes. »", "« Tu sais bien. »"], answer: 2, why: "Une commande claire dit exactement ce que vous voulez." },
      { objective: "O2", q: "Une lumière sur l'enceinte montre en général :", options: ["Qu'elle est éteinte pour toujours", "Qu'elle est cassée", "Qu'il faut la repeindre", "Qu'elle écoute"], answer: 3, why: "La lumière montre qu'elle a entendu le mot de réveil." },
      { objective: "O3", q: "Une routine, c'est :", options: ["Un mot de passe", "Un type de prise", "Une phrase qui fait faire plusieurs choses à un appareil", "Une émission de télé"], answer: 2, why: "Les routines regroupent des actions." },
      { objective: "O3", q: "Les routines d'Amazon Echo se créent dans :", options: ["L'application Alexa", "La Calculatrice", "L'Appareil photo", "La télé"], answer: 0, why: "L'application Alexa gère les routines Echo." },
      { objective: "O3", q: "Un bon moyen de préparer une routine avant de la créer :", options: ["Ne pas préparer", "Deviner", "Acheter d'abord beaucoup d'appareils", "L'écrire sur papier ou demander à l'IA de vérifier votre plan"], answer: 3, why: "Préparer rend la création plus facile." },
      { objective: "O3", q: "Si un menu de l'application est difficile à trouver, vous pouvez :", options: ["Abandonner", "Consulter l'aide de l'application ou demander à un proche", "Donner votre mot de passe à un inconnu", "Supprimer votre Wi-Fi"], answer: 1, why: "Les menus changent ; l'aide et la famille peuvent vous guider." },
      { objective: "O4", q: "Une sonnette vidéo vous aide à :", options: ["Préparer le dîner", "Voir les visiteurs avant d'ouvrir la porte", "Laver le linge", "Payer les factures"], answer: 1, why: "Elle montre qui est à la porte." },
      { objective: "O4", q: "Une lumière à détecteur de mouvement :", options: ["Verrouille la porte", "Joue de la musique", "Appelle la famille", "S'allume quand elle remarque un mouvement"], answer: 3, why: "Elle réagit au mouvement." },
      { objective: "O4", q: "Avant d'acheter un appareil connecté, vous devez :", options: ["Lister les problèmes à résoudre", "Tout acheter", "Partager vos mots de passe", "Ignorer les avis et l'aide"], answer: 0, why: "Une liste vous aide à n'acheter que le nécessaire." },
      { objective: "O4", q: "Un dispositif d'alerte médicale, c'est :", options: ["Une enceinte pour la musique", "Une ampoule connectée", "Un bouton porté sur soi fait pour appeler à l'aide", "Une télécommande"], answer: 2, why: "Il est conçu pour les urgences." },
      { objective: "O5", q: "Pendant une conversation privée, vous pouvez :", options: ["Ouvrir la caméra", "Monter le volume", "Dire le mot de réveil", "Appuyer sur le bouton qui coupe le micro de l'enceinte"], answer: 3, why: "Couper le micro l'empêche d'écouter." },
      { objective: "O5", q: "Les réglages de confidentialité permettent de :", options: ["Commander à manger", "Changer la météo", "Revoir et supprimer les enregistrements", "Accélérer le Wi-Fi"], answer: 2, why: "Ils contrôlent ce qui est gardé." },
      { objective: "O5", q: "On protège la vie privée face à une caméra avec :", options: ["Une lampe braquée dessus", "Le mode confidentialité ou un cache", "En la rapprochant", "En montant le volume"], answer: 1, why: "Le mode confidentialité ou un cache arrête l'enregistrement." },
      { objective: "O5", q: "Il faut des mots de passe solides pour :", options: ["Votre Wi-Fi et les comptes de vos appareils", "Rien", "Seulement l'e-mail", "Seulement la télé"], answer: 0, why: "Ils empêchent les autres d'entrer dans vos appareils." },
      { objective: "O3", q: "Une bonne première routine est :", options: ["Simple, utile chaque jour et facile à dire", "Longue et compliquée", "Utilisée une fois par an", "Difficile à retenir"], answer: 0, why: "Les routines simples deviennent des habitudes." },
      { objective: "O3", q: "Garder une note de vos commandes près de l'enceinte vous aide à :", options: ["Les cacher", "Vous en souvenir jusqu'à ce qu'elles deviennent une habitude", "Partager vos mots de passe", "Couper le micro"], answer: 1, why: "Une note est un rappel pratique." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Routine prévue",
        objective: "O3",
        notYet: "Pas de plan écrit, ou pas de phrase de départ.",
        meets: "Une routine écrite avec une phrase de départ et deux ou trois actions utiles, comme la météo, un rappel de médicament et une lampe.",
        exceeds: "Le plan comprend aussi une routine « Bonne nuit »."
      },
      {
        name: "Routine créée",
        objective: "O3",
        notYet: "Rien n'a été créé sur l'appareil ou le téléphone.",
        meets: "Autant de la routine que les appareils le permettent a été créé.",
        exceeds: "Vous pouvez dire quelles actions les appareils n'ont pas pu faire et quoi utiliser à la place."
      },
      {
        name: "Commandes vocales claires",
        objective: "O2",
        notYet: "L'appareil n'a pas répondu aux commandes.",
        meets: "La routine a été essayée à la voix, en commençant par le mot de réveil, et elle a marché.",
        exceeds: "Les commandes sont écrites sur un papier près de l'enceinte."
      },
      {
        name: "Micro coupé",
        objective: "O5",
        notYet: "Vous n'avez pas trouvé le bouton ou le réglage pour couper le micro.",
        meets: "Vous avez trouvé et utilisé le bouton ou le réglage pour couper le micro, et vu le voyant changer.",
        exceeds: "Vous avez aussi trouvé où revoir les enregistrements vocaux dans l'application."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui utilisent une routine quotidienne ou un rappel vocal au suivi à 30 jours",
      "Apprenants qui disent se sentir plus en sécurité chez eux, par exemple grâce aux lumières la nuit ou à une sonnette vidéo",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Une enceinte connectée (Amazon Echo ou Google Nest) ou un smartphone avec un assistant vocal",
      "L'application Alexa ou Google Home sur un téléphone, avec le Wi-Fi à la maison",
      "Du papier et un stylo pour prévoir la routine et noter les commandes",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Apportez une enceinte de démonstration pour que les apprenants sans appareil puissent s'exercer aux commandes.",
      "Les menus des applications changent ; vérifiez les menus actuels Routines et Confidentialité avant la séance.",
      "Ne promettez pas qu'une enceinte peut appeler le 911 ; dites aux apprenants de vérifier leur propre produit.",
      "Rappelez aux apprenants de ne jamais donner un code reçu par SMS à quelqu'un qui appelle au sujet de leurs appareils.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
