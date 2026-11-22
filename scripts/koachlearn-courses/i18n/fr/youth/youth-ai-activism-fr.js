"use strict";

// Koach Learn course (French translation of youth/youth-ai-activism.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-activism-fr",
  lang: "fr",
  translationOf: "youth-ai-activism",
  category: "Youth",
  name: "L'IA pour l'engagement et l'impact social",
  skills: "Choisir un problème local, Se renseigner et vérifier les faits avec l'IA, Planifier une petite action, Écrire un message à un décideur, Faire passer le message en sécurité et avec respect",
  outcome: "planifier une petite action sûre sur un problème de votre école ou de votre quartier qui vous tient à cœur, en utilisant l'IA pour vous renseigner, en vérifiant les faits avec des sources fiables, en écrivant un message respectueux à un décideur et en faisant un plan simple pour le partager.",
  about: [
    "Ce cours s'adresse aux jeunes qui veulent changer les choses : un parc plus propre, un passage piéton plus sûr près de l'école, plus de poubelles de recyclage, une collecte de nourriture, ou un club qui accueille les nouveaux élèves. Les petites actions locales sont un excellent point de départ.",
    "Vous choisirez un problème, vous utiliserez un assistant d'IA comme ChatGPT, Microsoft Copilot ou Google Gemini pour vous renseigner et trouver des solutions, vous vérifierez chaque fait avec des sources fiables, vous planifierez une petite action, vous écrirez une lettre ou un e-mail respectueux à quelqu'un qui peut aider, et vous partagerez votre message en sécurité.",
    "Vérifiez les règles de votre école sur l'IA et les règles d'âge de chaque outil, et parlez-en à un parent, un tuteur ou un professeur avant de vous inscrire quelque part, de contacter des responsables ou d'organiser un événement. Chaque leçon se termine par une activité \"Essayez maintenant\", un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites un plan d'action d'une page pour un problème de votre école ou de votre quartier qui vous tient à cœur : le problème en une phrase, deux faits vérifiés avec des sources fiables, une petite action avec une date et des personnes pour aider, et l'adulte qui vous soutient. Utilisez l'IA pour aider à écrire une lettre ou un e-mail respectueux à un décideur (un directeur d'école, un conseil scolaire ou un élu municipal), vérifiez-le et réécrivez-le avec vos mots, et faites un plan simple pour partager votre message en sécurité.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes qui veulent changer les choses à l'école ou dans leur quartier, par exemple un parc plus propre, un passage piéton plus sûr, plus de poubelles de recyclage, une collecte de nourriture ou un club plus accueillant.",
    startingPoint: "Ils tiennent à certaines causes et voient des problèmes autour d'eux, et utilisent les réseaux sociaux et parfois des assistants d'IA. Peu ont vérifié des faits dans des sources fiables, préparé une action avec les autorisations nécessaires ou écrit à un décideur.",
    gap: "La passion sans plan peut s'essouffler, et l'IA peut répandre des faits inventés ou de fausses images qui détruisent la confiance. Les jeunes doivent choisir un changement à leur portée, vérifier chaque fait, préparer l'action en sécurité avec un adulte et parler avec respect aux personnes qui ont le pouvoir d'aider, pour que leur voix mène à de vrais résultats.",
    constraints: [
      "Âges minimum et règles de l'école sur l'IA ; un parent, un tuteur ou un professeur est impliqué avant de contacter des élus ou d'organiser un événement",
      "Sécurité : des autorisations pour les événements, ne jamais y aller seul, et aucune information privée en ligne",
      "Les faits doivent être vérifiés dans des sources fiables ; pas de fausses images ni de fausses citations",
      "Appareils : un téléphone ou un ordinateur de l'école ou de la bibliothèque avec des outils gratuits",
      "Des leçons courtes et des mots simples"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En pensant à votre école ou à votre quartier", action: "choisir un problème local et le décrire en une phrase avec qui est touché et qui pourrait le régler", standard: "en choisissant un problème sur lequel vous pouvez agir en sécurité" },
    { id: "O2", condition: "Avec un assistant d'IA et des sources fiables", action: "faire des recherches sur votre problème, vérifier chaque fait et rassembler vos propres preuves", standard: "en n'utilisant que des faits confirmés par un site officiel ou une vraie personne" },
    { id: "O3", condition: "À partir de votre problème", action: "planifier une petite action avec une date, des personnes pour aider, les autorisations nécessaires et un adulte qui vous soutient", standard: "avec les autorisations obtenues avant de commencer" },
    { id: "O4", condition: "À partir de vos faits vérifiés", action: "écrire un message court et respectueux à un décideur avec une demande précise", standard: "réécrit avec vos propres mots et lu par un adulte avant l'envoi" },
    { id: "O5", condition: "Quand vous faites connaître votre action", action: "créer une affiche ou une publication qui dit quoi, quand, où et pourquoi, et la partager en sécurité", standard: "depuis un compte approuvé, sans informations privées et sans attaques personnelles" },
    { id: "O6", condition: "Avant de partager quoi que ce soit sur votre cause", action: "vérifier que c'est vrai, vérifié et juste, signaler les images faites par l'IA et écrire un plan d'action d'une page", standard: "sans aucune fausse image ni fausse citation de vraies personnes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : De l'envie d'agir à un plan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir un problème que vous pouvez vraiment changer",
          minutes: 4,
          goal: "Choisir un problème local et le décrire en une phrase claire.",
          text: [
            "L'impact social, c'est rendre les choses meilleures pour les autres. S'engager (l'activisme), c'est travailler pour un changement. Vous n'avez pas à réparer le monde entier. Un petit problème local que vous pouvez voir, comme des fontaines à eau cassées à l'école ou des déchets à l'arrêt de bus, est plus facile à changer et vous apprend comment le changement se fait.",
            "Demandez-vous : Qui est touché ? À quoi ressemblerait le mieux ? Qui a le pouvoir de régler le problème, comme un directeur d'école, un responsable de club, un conseil scolaire ou un conseil municipal ?",
            "Un assistant d'IA peut vous aider à trouver des idées : \"J'ai 15 ans. Quels petits problèmes des ados peuvent-ils aider à régler dans un lycée ou un quartier ?\" Puis choisissez-en un qui compte pour vous et sur lequel vous pouvez travailler en sécurité."
          ],
          words: [["Impact social", "rendre les choses meilleures pour les autres."], ["Engagement (activisme)", "travailler pour un changement dans votre école, votre quartier ou le monde."], ["Décideur", "une personne ou un groupe qui a le pouvoir de faire un changement."]],
          slides: [
            { title: "Commencez petit et local", bullets: ["Un problème que vous voyez", "Plus facile à changer", "Apprend comment le changement se fait"] },
            { title: "Trois questions", bullets: ["Qui est touché ?", "À quoi ressemblerait le mieux ?", "Qui a le pouvoir de régler ça ?"] },
            { title: "Trouvez des idées avec l'IA", bullets: ["Demandez des idées pour les ados", "Choisissez ce qui compte pour vous", "Choisissez une action sans danger"] }
          ],
          tryIt: "Écrivez votre problème en une phrase, comme : \"Notre école n'a pas de poubelles de recyclage à la cantine, donc les canettes vont à la poubelle.\" Ajoutez qui est touché et qui pourrait régler le problème.",
          youCanNow: "choisir un problème local et dire qui il touche et qui peut le changer.",
          quickCheck: [
            { objective: "O1", q: "Que veut dire l'engagement (activisme) ?", options: ["Publier des choses sur soi", "Réparer le monde entier d'un coup", "Agir pour un changement", "Se disputer en ligne"], answer: 2, why: "L'engagement, c'est agir pour un changement ; l'impact social, c'est rendre les choses meilleures pour les autres." },
            { objective: "O1", q: "Plusieurs problèmes vous tiennent à cœur. Quel est le meilleur premier choix ?", options: ["Les déchets à votre arrêt de bus, que vous voyez et pouvez aider à régler", "Mettre fin à toute la pollution dans le monde", "Un problème dans un pays que vous ne connaissez pas du tout", "Ce qui est à la mode en ce moment"], answer: 0, why: "Un petit problème local est plus facile à changer et vous apprend comment le changement se fait." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Se renseigner avec l'IA et vérifier chaque fait",
          minutes: 6,
          goal: "Utiliser l'IA pour commencer vos recherches, puis confirmer les faits avec des sources fiables.",
          text: [
            "L'IA est un bon point de départ : \"Explique pourquoi les écoles recyclent et ce qui les en empêche souvent. Propose des questions à poser à mon directeur.\" Mais l'IA peut se tromper ou ne pas être à jour, et elle invente parfois des chiffres ou des sources. On appelle ça une hallucination.",
            "Chaque fait que vous voulez utiliser dans un message doit être vérifié. Les sources fiables sont le site de votre école ou de votre académie, le site officiel de votre ville, les sites du gouvernement (aux États-Unis, beaucoup finissent par .gov), et de vraies personnes comme un professeur, un bibliothécaire ou le service responsable.",
            "Vos propres preuves comptent aussi. Comptez les poubelles qui débordent, prenez des photos du problème (pas des gens sans leur accord), ou faites un court sondage auprès de vos camarades avec l'accord d'un professeur."
          ],
          steps: ["Demandez à l'IA d'expliquer le problème et de proposer des questions.", "Notez les faits que vous voulez utiliser.", "Vérifiez chaque fait sur un site officiel ou auprès d'une vraie personne.", "Rassemblez vos propres preuves : comptages, photos des lieux, court sondage.", "Laissez tomber tout fait que vous ne pouvez pas confirmer."],
          words: [["Hallucination", "quand l'IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Preuve", "des faits qui appuient ce que vous dites."], ["Sondage", "une courte série de questions posées à beaucoup de personnes."]],
          slides: [
            { title: "L'IA est un point de départ", bullets: ["Explique le problème", "Propose des questions à poser", "Peut se tromper ou inventer"] },
            { title: "Vérifiez chaque fait", bullets: ["Site de l'école ou de la ville", "Sites du gouvernement", "Profs, bibliothécaires, service responsable"] },
            { title: "Vos propres preuves", bullets: ["Comptages et photos des lieux", "Un court sondage, avec l'accord d'un prof", "Pas de photos de gens sans accord"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'expliquer votre problème et de vous donner trois faits. Vérifiez chaque fait avec une source fiable et marquez-le \"confirmé\" ou \"non confirmé\". Puis rassemblez une preuve à vous.",
          youCanNow: "vous renseigner sur un problème avec l'IA et garder seulement les faits confirmés par des sources fiables.",
          quickCheck: [
            { objective: "O2", q: "Laquelle est une source fiable pour une règle de votre établissement ou de votre district scolaire ?", options: ["Une publication au hasard sur les réseaux sociaux", "Une réponse de l'IA sans source", "Ce que suppose un ami", "Le site web de votre école ou de votre district scolaire"], answer: 3, why: "Les sites officiels de l'école, du district, de la ville et de l'État sont des sources fiables." },
            { objective: "O2", q: "Vous voulez des photos pour montrer le problème des déchets. Que photographiez-vous ?", options: ["Des inconnus qui jettent des déchets", "Les endroits pleins de déchets, pas des personnes sans leur accord", "Le visage de vos camarades", "Votre propre adresse"], answer: 1, why: "Des photos du problème sont de bonnes preuves ; ne photographiez pas de personnes sans leur accord." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planifier une petite action",
          minutes: 5,
          goal: "Transformer votre problème en une petite action avec une date, des personnes pour aider et un adulte qui vous soutient.",
          text: [
            "Les bonnes actions sont précises : une journée de nettoyage, une proposition de poubelles de recyclage au directeur, une collecte de fournitures, un discours au conseil des élèves. Choisissez-en une que vous pouvez faire dans les prochaines semaines.",
            "Demandez à l'IA : \"Aide-moi à préparer un nettoyage d'une heure dans un parc pour 10 élèves. Liste le matériel, les règles de sécurité, à qui demander la permission et un calendrier simple.\" Puis vérifiez le plan avec un adulte.",
            "La sécurité d'abord : obtenez la permission de votre école ou du propriétaire du parc, faites participer un parent, un tuteur ou un professeur, n'y allez jamais seul, et suivez les règles sur les gants, les routes ou les déchets."
          ],
          steps: ["Choisissez une action précise.", "Demandez à l'IA une liste : matériel, étapes, calendrier, permissions.", "Choisissez une date et des personnes pour aider.", "Demandez à un parent, un tuteur, un professeur ou un responsable de vous soutenir.", "Obtenez les permissions nécessaires avant de commencer."],
          words: [["Plan d'action", "une liste de ce que vous allez faire, quand et avec qui."], ["Adulte référent", "un adulte qui vous aide et vérifie votre plan."]],
          slides: [
            { title: "Une action précise", bullets: ["Un nettoyage, une proposition, une collecte, un discours", "Faisable dans les prochaines semaines"] },
            { title: "Préparez avec l'IA", bullets: ["Matériel et étapes", "Calendrier", "À qui demander la permission"] },
            { title: "La sécurité d'abord", bullets: ["Obtenez la permission", "Un adulte impliqué", "Jamais seul ; suivez les règles"] }
          ],
          tryIt: "Utilisez un assistant d'IA pour préparer une petite action pour votre problème. Notez la date, deux personnes pour aider, la permission nécessaire et l'adulte qui vous soutiendra.",
          youCanNow: "transformer un problème en plan d'action précis et sûr avec le soutien d'un adulte.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui rend une action précise ?", options: ["Elle dit clairement quoi, avec une date et qui aide", "Elle est très grande", "Elle n'a pas de date limite", "Ce n'est qu'une idée"], answer: 0, why: "Une action précise dit ce que vous allez faire, quand et avec qui." },
            { objective: "O3", q: "Vous prévoyez un nettoyage dans un parc de la ville. Que faites-vous avant le jour J ?", options: ["Vous venez simplement", "Vous y allez seul en avance", "Vous obtenez l'autorisation du responsable du parc et impliquez un adulte", "Vous publiez votre adresse pour les volontaires"], answer: 2, why: "La sécurité d'abord : obtenez l'autorisation, impliquez un adulte et n'y allez jamais seul." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : De l'envie d'agir à un plan",
        questions: [
          { objective: "O1", q: "Quel problème est le meilleur point de départ ?", options: ["Mettre fin à la faim dans le monde d'ici vendredi", "Obtenir des poubelles de recyclage à la cantine de votre école", "Changer toutes les lois", "Réparer tout internet"], answer: 1, why: "Les petits problèmes locaux sont plus faciles à changer et vous apprennent comment faire." },
          { objective: "O1", q: "Qu'est-ce qu'un décideur ?", options: ["Une personne ou un groupe qui a le pouvoir de faire le changement", "N'importe quel utilisateur de réseau social", "Un assistant d'IA", "Un camarade d'accord avec vous"], answer: 0, why: "Les décideurs, comme un directeur ou un conseil, peuvent faire le changement." },
          { objective: "O2", q: "L'IA vous donne une statistique pour votre lettre. Que faites-vous ?", options: ["L'utiliser tout de suite", "La grossir", "La vérifier avec une source fiable avant de l'utiliser", "Demander à l'IA si elle est sûre puis l'utiliser"], answer: 2, why: "L'IA peut inventer des chiffres ; confirmez avec des sources fiables." },
          { objective: "O2", q: "Laquelle est une preuve à vous ?", options: ["Une rumeur", "Une supposition", "Une histoire inventée", "Le comptage des poubelles qui débordent"], answer: 3, why: "Les comptages et les photos des lieux sont des preuves que vous rassemblez vous-même." },
          { objective: "O3", q: "Avant un nettoyage dans un parc, que devez-vous faire ?", options: ["Y aller seul la nuit", "Obtenir la permission et faire participer un adulte", "Ignorer les règles de sécurité", "Publier votre adresse en ligne"], answer: 1, why: "La permission et le soutien d'un adulte rendent l'action sûre." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Prendre la parole et faire passer le message",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire un message respectueux à un décideur",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire un premier jet de lettre ou d'e-mail clair et respectueux, puis le rendre personnel.",
          text: [
            "Un message fort est court et poli : qui vous êtes (prénom, classe, école ou quartier), le problème en une phrase, un ou deux faits vérifiés, une demande précise et un merci.",
            "Demandez à l'IA : \"Aide-moi à écrire un e-mail court et respectueux à mon directeur pour demander des poubelles de recyclage à la cantine. Je suis en seconde. Voici mes faits : [vos faits vérifiés]. Moins de 150 mots.\" Puis réécrivez-le avec vos mots et enlevez tout ce que vous n'avez pas vérifié.",
            "Pour savoir qui contacter, regardez le site de votre école ou de votre académie, ou le site officiel de votre ville. Aux États-Unis, USA.gov a une page avec des liens vers les élus fédéraux, des États et locaux ; ailleurs, cherchez le site officiel de votre mairie ou de votre gouvernement. Faites lire votre message à un parent, un tuteur ou un professeur avant de l'envoyer."
          ],
          steps: ["Dites qui vous êtes, sans détails privés en dehors du prénom et de la classe.", "Décrivez le problème en une phrase.", "Ajoutez un ou deux faits vérifiés.", "Faites une demande précise et dites merci.", "Réécrivez le jet de l'IA avec vos mots et faites-le lire par un adulte avant l'envoi."],
          words: [["Demande précise", "la chose exacte que vous voulez que la personne fasse."], ["Élu", "une personne choisie par un vote, comme un conseiller municipal."]],
          slides: [
            { title: "Un message fort", bullets: ["Qui vous êtes", "Le problème en une phrase", "Un ou deux faits vérifiés", "Une demande précise et un merci"] },
            { title: "L'IA écrit, vous décidez", bullets: ["Donnez-lui seulement des faits vérifiés", "Réécrivez avec vos mots", "Moins de 150 mots"] },
            { title: "Qui contacter", bullets: ["Site de l'école ou de l'académie", "Site officiel de votre ville", "USA.gov : page des élus (États-Unis)"] }
          ],
          sources: [{ name: "USA.gov : trouver vos élus", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Utilisez un assistant d'IA pour écrire un message au décideur de votre problème, avec seulement vos faits confirmés. Réécrivez-le avec vos mots et demandez à un adulte de le lire. Ne l'envoyez pas avant.",
          youCanNow: "écrire un message court, respectueux et vérifié qui demande un changement précis à un décideur.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une « demande précise » dans un message ?", options: ["Une longue liste de plaintes", "Une demande claire, comme ajouter des poubelles de recyclage à la cantine", "Une question sur la météo", "Votre numéro de téléphone"], answer: 1, why: "Une demande précise dit au décideur exactement ce que vous voulez qu'il fasse." },
            { objective: "O4", q: "Le brouillon de l'IA contient un chiffre que vous n'avez jamais vérifié. Que faites-vous ?", options: ["Vous le laissez ; ça sonne bien", "Vous l'arrondissez vers le haut", "Vous le mettez en gras", "Vous l'enlevez ou le vérifiez avant d'envoyer"], answer: 3, why: "Réécrivez le brouillon et enlevez tout ce que vous n'avez pas vérifié." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faire passer le message en sécurité",
          minutes: 5,
          goal: "Faire une affiche ou une publication simple sur votre action et la partager en sécurité.",
          text: [
            "Les gens participent quand le message est clair : quoi, quand, où et pourquoi c'est important. L'IA peut vous aider à écrire un slogan ou une publication courte, et des outils gratuits comme Canva peuvent vous aider à faire une affiche. Vérifiez chaque date, heure et lieu.",
            "Restez en sécurité en ligne : publiez depuis le compte d'un club de l'école ou un compte approuvé par votre famille si possible, gardez votre nom complet, votre numéro de téléphone et votre adresse privés, et ne partagez pas de photos d'autres personnes sans leur accord.",
            "Certaines personnes ne seront pas d'accord. C'est normal. Répondez poliment ou ne répondez pas, et ne publiez jamais d'attaques personnelles. Si quelqu'un vous menace ou vous harcèle, ne répondez pas : gardez une trace, bloquez, signalez et prévenez un adulte de confiance."
          ],
          steps: ["Écrivez quoi, quand, où et pourquoi en quelques mots.", "Demandez à l'IA trois idées de slogan et choisissez-en une ou réécrivez-la.", "Faites une affiche ou une publication et vérifiez chaque détail.", "Partagez depuis un compte de club ou approuvé par votre famille.", "Gardez vos détails privés et prévenez un adulte en cas de menace."],
          words: [["Slogan", "une phrase courte et frappante sur votre cause."], ["Harcèlement", "des messages méchants ou menaçants répétés."]],
          slides: [
            { title: "Un message clair", bullets: ["Quoi, quand, où, pourquoi", "Un slogan court", "Vérifiez chaque détail"] },
            { title: "Partagez en sécurité", bullets: ["Compte de club ou approuvé par la famille", "Pas de numéro de téléphone ni d'adresse", "Pas de photos des autres sans accord"] },
            { title: "Quand les gens ne sont pas d'accord", bullets: ["Restez poli ou ne répondez pas", "Pas d'attaques personnelles", "Menaces : trace, blocage, signalement, adulte"] }
          ],
          tryIt: "Demandez à un assistant d'IA trois idées de slogan pour votre action. Choisissez-en une, faites une affiche ou une publication simple avec quoi, quand, où et pourquoi, et faites-la vérifier par un adulte avant de la partager.",
          youCanNow: "faire un message clair sur votre cause et le partager en sécurité et avec respect.",
          quickCheck: [
            { objective: "O5", q: "Quelles quatre choses une affiche pour votre action doit-elle dire aux gens ?", options: ["Quoi, quand, où et pourquoi", "Votre nom complet, votre téléphone, votre adresse et votre école", "Seulement un slogan", "Qui accuser"], answer: 0, why: "Un message clair dit quoi, quand, où et pourquoi c'est important." },
            { objective: "O5", q: "Quelqu'un publie un commentaire méchant qui vous insulte. Que faites-vous ?", options: ["Vous l'insultez en retour", "Vous publiez ses informations personnelles", "Vous répondez poliment ou pas du tout, et prévenez un adulte si cela devient une menace", "Vous supprimez toute votre campagne"], answer: 2, why: "Ne publiez jamais d'attaques personnelles ; gardez une copie, bloquez, signalez et prévenez un adulte en cas de menace." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Une IA responsable dans l'engagement, et votre plan d'action",
          minutes: 6,
          goal: "Éviter les contenus trompeurs et terminer un plan d'action d'une page.",
          text: [
            "L'IA permet de créer facilement de fausses images, de fausses citations et de fausses informations. Les utiliser, même pour une bonne cause, brise la confiance et peut répandre des mensonges. Ne faites jamais de fausses photos ou citations de vraies personnes, et signalez toute image générée par l'IA que vous utilisez.",
            "Avant de partager quoi que ce soit, demandez-vous : Est-ce vrai ? L'ai-je vérifié ? Est-ce juste envers les personnes concernées ? Serais-je à l'aise si la personne dont je parle le lisait ?",
            "Maintenant, rassemblez tout sur une page : le problème, deux faits vérifiés, une action avec une date et des personnes pour aider, votre adulte référent, votre message à un décideur et la façon de le partager. Puis faites le bilan : qu'est-ce qui a marché, et que feriez-vous ensuite ?"
          ],
          steps: ["Vérifiez que chaque image et chaque citation est réelle ou clairement signalée comme IA.", "Demandez-vous : est-ce vrai, vérifié et juste ?", "Écrivez votre plan d'action d'une page.", "Joignez votre message et votre plan de partage.", "Après votre action, écrivez ce qui a marché et la suite."],
          words: [["Désinformation", "une fausse information, partagée par erreur ou exprès."], ["Mention", "une note qui dit que quelque chose a été fait avec l'IA."]],
          slides: [
            { title: "Pas de faux", bullets: ["Pas de fausses photos ou citations de vraies personnes", "Signalez les images générées par l'IA", "Les faux brisent la confiance, même pour une bonne cause"] },
            { title: "Avant de partager", bullets: ["Est-ce vrai ?", "L'ai-je vérifié ?", "Est-ce juste ?"] },
            { title: "Votre plan d'une page", bullets: ["Problème et deux faits vérifiés", "Une action, une date, des aides, un adulte", "Message et plan de partage"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'action d'une page avec le problème, deux faits vérifiés, une action avec une date et des personnes pour aider, votre adulte référent, votre message réécrit à un décideur et votre plan pour le partager en sécurité.",
          youCanNow: "utiliser l'IA de façon responsable pour planifier, prendre la parole et partager une petite action qui change vraiment les choses.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce que la désinformation ?", options: ["Un fait vérifié", "Une mention sur une image faite par l'IA", "Un design d'affiche", "Une information fausse partagée par erreur ou exprès"], answer: 3, why: "La désinformation est une information fausse, et l'IA la rend facile à créer." },
            { objective: "O6", q: "Une fausse citation d'un responsable local aiderait votre cause à devenir virale. Que faites-vous ?", options: ["Vous l'utilisez une seule fois", "Vous ne l'utilisez pas ; les fausses citations détruisent la confiance et répandent des mensonges", "Vous l'utilisez en floutant le nom", "Vous demandez à l'IA de la rendre crédible"], answer: 1, why: "Les fausses citations ou photos de vraies personnes détruisent la confiance, même pour une bonne cause." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Prendre la parole et faire passer le message",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui a sa place dans un message à un décideur ?", options: ["Une demande précise et un merci", "Des insultes", "Des faits non vérifiés", "Votre adresse et votre numéro de téléphone"], answer: 0, why: "Une demande claire et la politesse font un message fort." },
          { objective: "O4", q: "Où trouver des liens vers vos élus aux États-Unis ?", options: ["Une publication au hasard sur un réseau social", "Une supposition de l'IA", "La page des élus de USA.gov", "Une chaîne d'e-mails"], answer: 2, why: "USA.gov donne des liens vers les élus fédéraux, des États et locaux." },
          { objective: "O5", q: "Quelqu'un publie une menace sous la publication de votre campagne. Que faites-vous ?", options: ["Répondre par une menace", "Partager son adresse", "L'ignorer et n'en parler à personne", "Garder une trace, bloquer, signaler et prévenir un adulte de confiance"], answer: 3, why: "Les menaces doivent être gardées, bloquées, signalées et racontées à un adulte." },
          { objective: "O6", q: "Un ami propose une fausse photo IA du maire pour attirer l'attention. Vous :", options: ["Refusez ; les faux répandent des mensonges et brisent la confiance", "La faites sans la signaler", "La faites pour une bonne cause", "La publiez et la supprimez plus tard"], answer: 0, why: "Les fausses images de vraies personnes sont trompeuses, même pour une bonne cause." },
          { objective: "O6", q: "Que devez-vous vous demander avant de partager quoi que ce soit sur votre cause ?", options: ["Est-ce que ça va devenir viral ?", "Est-ce vrai, vérifié et juste ?", "Est-ce la publication la plus longue ?", "Est-ce que l'IA a tout écrit ?"], answer: 1, why: "La vérité, la vérification et la justice gardent votre campagne digne de confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour l'engagement et l'impact social",
    questions: [
      { objective: "O1", q: "L'impact social, c'est :", options: ["Rendre les choses meilleures pour les autres", "Avoir des likes", "Gagner des disputes", "Utiliser beaucoup l'IA"], answer: 0, why: "L'impact social, c'est améliorer la vie des autres." },
      { objective: "O1", q: "Pourquoi commencer par un petit problème local ?", options: ["Ça n'a pas d'importance", "Il est plus facile à changer et vous apprend comment le changement se fait", "Les grands problèmes sont illégaux", "Les adultes l'exigent"], answer: 1, why: "Les petites victoires construisent les compétences et la confiance." },
      { objective: "O1", q: "Laquelle est une phrase claire qui décrit un problème ?", options: ["\"Les choses vont mal\"", "\"Tout devrait changer\"", "\"Notre cantine n'a pas de poubelles de recyclage, donc les canettes vont à la poubelle\"", "\"Les gens sont énervants\""], answer: 2, why: "Elle dit quel est le problème et pourquoi il compte." },
      { objective: "O1", q: "Qui pourrait régler un problème de fontaines à eau à l'école ?", options: ["Une entreprise de jeux vidéo", "Un assistant d'IA", "Un abonné au hasard", "Le directeur ou l'administration scolaire"], answer: 3, why: "Les responsables de l'école peuvent faire les réparations." },
      { objective: "O2", q: "Une hallucination de l'IA, c'est :", options: ["L'IA a écrit quelque chose qui semble vrai mais qui est inventé", "L'IA est en panne", "L'IA est très créative", "L'IA est lente"], answer: 0, why: "L'IA peut inventer des faits et des sources." },
      { objective: "O2", q: "Quelle est une source fiable pour une règle de la ville ?", options: ["Un mème", "Le site officiel de la ville", "Un commentaire anonyme", "Une réponse de l'IA seule"], answer: 1, why: "Les sites officiels sont l'endroit pour confirmer les règles." },
      { objective: "O2", q: "Vous ne pouvez pas confirmer un fait donné par l'IA. Vous devez :", options: ["L'utiliser quand même", "Le rendre plus sûr de lui", "Le laisser de côté", "Citer l'IA"], answer: 2, why: "Utilisez seulement des faits confirmés." },
      { objective: "O2", q: "Avant de faire un court sondage auprès de vos camarades, vous devez :", options: ["Demander leurs adresses", "Le faire en secret", "Demander leurs mots de passe", "Avoir l'accord d'un professeur"], answer: 3, why: "Les sondages à l'école doivent être approuvés par un professeur." },
      { objective: "O3", q: "Quelle action est précise ?", options: ["Un nettoyage d'une heure du parc le samedi 14 avec 10 élèves", "\"Faire quelque chose un jour\"", "\"Réparer l'environnement\"", "\"Être plus gentil\""], answer: 0, why: "Elle dit quoi, quand et qui." },
      { objective: "O3", q: "Que devez-vous demander à l'IA pour préparer une action ?", options: ["De la faire à votre place", "Le matériel, les étapes, un calendrier et à qui demander la permission", "Les informations privées des gens", "De fabriquer de fausses preuves"], answer: 1, why: "L'IA peut faire une liste utile que vous vérifiez ensuite avec un adulte." },
      { objective: "O3", q: "Laquelle est une règle de sécurité pour une action de quartier ?", options: ["Y aller seul", "Se passer de permission", "Faire participer un parent, un tuteur ou un professeur", "Travailler près de la circulation sans plan"], answer: 2, why: "Le soutien d'un adulte et la permission protègent tout le monde." },
      { objective: "O4", q: "Qu'est-ce qui a sa place dans votre message au directeur ?", options: ["Votre numéro de téléphone pour des inconnus", "Des insultes", "Des rumeurs non vérifiées", "Votre prénom, votre classe et une demande précise"], answer: 3, why: "Dites simplement qui vous êtes et demandez clairement." },
      { objective: "O4", q: "Après que l'IA a écrit un premier jet de votre lettre, vous devez :", options: ["La réécrire avec vos mots et enlever les faits non vérifiés", "L'envoyer tout de suite", "La rallonger", "Ajouter une fausse citation"], answer: 0, why: "Votre message doit être le vôtre et exact." },
      { objective: "O4", q: "Qui doit lire votre message avant l'envoi ?", options: ["Personne", "Un parent, un tuteur ou un professeur", "Un inconnu en ligne", "Seulement l'IA"], answer: 1, why: "Un adulte peut repérer les erreurs et vous protéger." },
      { objective: "O5", q: "Une bonne affiche dit aux gens :", options: ["Votre adresse", "Seulement un slogan", "Quoi, quand, où et pourquoi", "Un long texte"], answer: 2, why: "Ces détails aident les gens à participer." },
      { objective: "O5", q: "Quel compte est le meilleur pour partager votre campagne ?", options: ["Le compte d'un inconnu", "Un compte avec votre numéro dans la bio", "Un faux compte", "Le compte d'un club de l'école ou approuvé par votre famille"], answer: 3, why: "Les comptes approuvés vous protègent mieux." },
      { objective: "O5", q: "Quelqu'un n'est pas d'accord avec votre publication, poliment. Vous :", options: ["Répondez poliment ou pas du tout", "L'insultez", "Partagez ses détails personnels", "Faites une fausse publication sur lui"], answer: 0, why: "Le respect garde votre cause forte." },
      { objective: "O6", q: "La désinformation, c'est :", options: ["Un type d'affiche", "Une fausse information, partagée par erreur ou exprès", "Un fait vérifié", "Un sondage"], answer: 1, why: "La désinformation est une information fausse." },
      { objective: "O6", q: "Vous utilisez une image d'un parc propre générée par l'IA sur votre affiche. Vous devez :", options: ["Dire que c'est une vraie photo", "La cacher en petits caractères", "Indiquer qu'elle est générée par l'IA", "Enlever la date"], answer: 2, why: "Les mentions vous gardent honnête avec votre public." },
      { objective: "O6", q: "Après votre action, une bonne dernière étape est de :", options: ["Tout supprimer", "Ne plus jamais recommencer", "Accuser les autres", "Écrire ce qui a marché et quoi faire ensuite"], answer: 3, why: "Faire le bilan aide votre prochaine action à mieux se passer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      8,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Problème clair",
        objective: "O1",
        notYet: "Le problème est vague ou trop grand pour agir dessus.",
        meets: "Le problème en une phrase, avec qui est touché et qui pourrait le régler.",
        exceeds: "Dit aussi à quoi ressemblerait une amélioration."
      },
      {
        name: "Faits vérifiés",
        objective: "O2",
        notYet: "Les faits ne sont pas vérifiés ou viennent seulement de l'IA.",
        meets: "Deux faits confirmés dans des sources fiables, et les sources sont nommées.",
        exceeds: "Comprend aussi les propres preuves de l'apprenant, comme un comptage ou un sondage."
      },
      {
        name: "Action et sécurité",
        objective: "O3",
        notYet: "Pas de date, pas de personnes pour aider ni d'adulte qui soutient, ou pas d'autorisation.",
        meets: "Une petite action avec une date, des personnes pour aider, un adulte qui soutient et l'autorisation nécessaire.",
        exceeds: "Comprend une courte liste de sécurité pour le jour J."
      },
      {
        name: "Message à un décideur",
        objective: "O4",
        notYet: "Le message est impoli, vague ou utilise des faits non vérifiés.",
        meets: "Un message court et respectueux avec le problème, des faits vérifiés, une demande précise et un merci, avec les propres mots de l'apprenant.",
        exceeds: "Un adulte l'a lu, et il nomme la bonne personne à contacter."
      },
      {
        name: "Partage sûr et honnête",
        objective: "O6",
        notYet: "Le plan de partage contient des informations privées, de fausses images ou du contenu IA non signalé.",
        meets: "Un plan pour partager depuis un compte approuvé sans informations privées, et toute image faite par l'IA signalée.",
        exceeds: "Dit aussi comment l'apprenant répondra aux désaccords."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui réalisent l'action prévue dans les 60 jours avec un adulte qui les soutient",
      "Les messages envoyés à un décideur, et les réponses ou les changements qui ont suivi",
      "Les apprenants qui rejoignent ou créent un club de service, un projet du conseil des élèves ou un groupe du quartier dans les 90 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser, et un outil de design gratuit comme Canva",
      "Du papier ou un document pour le plan d'action d'une page",
      "Un adulte qui soutient : parent, tuteur, professeur ou animateur",
      "Environ 60 minutes en tout, plus le temps de l'action elle-même"
    ],
    facilitatorNotes: [
      "Aidez les apprenants à choisir des problèmes locaux sur lesquels ils peuvent agir en sécurité ; évitez tout ce qui les obligerait à y aller seuls ou à affronter des personnes.",
      "Validez les autorisations et l'adulte qui soutient avant tout événement ou tout envoi de message.",
      "Relisez chaque message et chaque affiche avant leur diffusion pour vérifier les faits, le ton et la vie privée.",
      "Parlez de la façon de répondre aux désaccords et au harcèlement en ligne, et nommez la personne que les apprenants doivent prévenir.",
      "Évaluez le plan d'action avec la grille et faites un point après l'action pour aider les apprenants à en tirer des leçons."
    ]
  }
};
