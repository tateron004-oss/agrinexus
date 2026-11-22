"use strict";

// Koach Learn course (French translation of youth/youth-ai-side-hustles.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-side-hustles-fr",
  lang: "fr",
  translationOf: "youth-ai-side-hustles",
  category: "Youth",
  name: "L'IA pour entreprendre et gagner un peu d'argent (jeunes)",
  skills: "Trouver une idée de petite activité qui vous correspond, Vérifier les règles sur le travail des jeunes et obtenir l'accord d'un parent, Fixer le prix d'un service, Faire une affiche simple avec l'IA, Suivre l'argent qui entre et qui sort, Bien traiter les clients",
  outcome: "préparer une petite activité rémunérée et sûre avec l'accord d'un parent ou tuteur : choisir une idée adaptée à vos compétences, fixer un prix juste, faire une affiche simple avec l'aide de l'IA et noter chaque somme que vous gagnez et dépensez.",
  about: [
    "Ce cours s'adresse aux jeunes de 13 à 18 ans environ qui veulent gagner un peu d'argent à eux : garder des animaux, donner des cours aux plus jeunes, entretenir des jardins, créer des dessins sur mesure, monter des vidéos pour des groupes du quartier ou vendre des objets faits main.",
    "Vous trouverez une idée adaptée à vos compétences et à votre emploi du temps, vous vérifierez les règles pour les jeunes travailleurs, vous fixerez un prix, vous ferez une affiche, vous suivrez votre argent et vous apprendrez à traiter vos clients pour qu'ils reviennent. L'IA est votre partenaire de préparation tout au long du cours.",
    "Important : parlez-en à un parent ou tuteur avant de commencer, et laissez-le gérer les applications de paiement, les contrats ou les comptes de vente en ligne qui demandent un adulte. Vérifiez la limite d'âge de chaque outil d'IA et gardez l'école en priorité. Chaque leçon dure environ cinq minutes et se termine par une activité \"Essayez maintenant\".",
    "Les règles citées sont celles des États-Unis. Si vous vivez ailleurs, demandez à un adulte de vérifier avec vous les règles officielles de votre pays."
  ],
  finalTask: "Faites un plan d'une page pour votre petite activité et montrez-le à un parent ou tuteur : votre service et pour qui il est, votre prix et pourquoi, une affiche faite avec l'aide de l'IA (sans votre adresse), un tableau simple pour suivre l'argent avec les colonnes date, argent qui entre, argent qui sort et notes, et deux règles de sécurité que vous suivrez.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes d'environ 13 à 18 ans aux États-Unis qui veulent gagner un peu d'argent à eux en gardant des animaux, en donnant des cours aux plus jeunes, en entretenant des jardins, en créant des dessins sur mesure, en montant des vidéos pour des groupes du quartier ou en vendant des objets faits main.",
    startingPoint: "Ils ont des compétences et des loisirs pour lesquels d'autres pourraient payer, et ont parfois fait de petits travaux pour leur famille ou leurs voisins. Peu ont fixé un prix, fait une affiche, suivi l'argent qui entre et qui sort, ou vérifié les règles sur le travail des jeunes, les impôts et la sécurité.",
    gap: "Les jeunes qui lancent une petite activité sans plan peuvent demander trop peu, perdre la trace de leur argent, passer à côté des règles sur les impôts et le travail des jeunes, ou se mettre en danger avec des inconnus. Un plan simple fait avec un parent ou tuteur les aide à gagner de l'argent en sécurité, à apprendre de vraies compétences d'entreprise et à prendre confiance.",
    constraints: [
      "Un parent ou tuteur approuve le plan et gère les applications de paiement, les contrats et les comptes de vente qui demandent un adulte",
      "Les règles sur le travail des jeunes et les impôts varient selon l'État et changent ; les apprenants vérifient auprès du service du travail de leur État et sur irs.gov",
      "Sécurité : pas d'adresse personnelle en ligne ni sur les affiches ; les nouveaux clients sont rencontrés avec un adulte",
      "Vie privée : aucun numéro de compte bancaire ou de carte dans les outils d'IA",
      "L'école passe d'abord ; peu d'heures disponibles chaque semaine"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de vos compétences et des heures dont vous disposez vraiment", action: "choisir une idée de petite activité sûre qui convient à votre emploi du temps et vérifier que des gens paieraient pour elle", standard: "en demandant à au moins trois personnes" },
    { id: "O2", condition: "Avec un parent ou tuteur", action: "vérifier les règles fédérales et celles de votre État sur le travail des jeunes et la règle de l'IRS sur l'impôt des indépendants, et vous mettre d'accord sur des règles de sécurité", standard: "avec au moins deux règles de sécurité sur lesquelles vous êtes tous les deux d'accord" },
    { id: "O3", condition: "Pour un service", action: "fixer un prix juste qui couvre vos frais et votre temps et qui correspond aux prix du quartier", standard: "en le vérifiant auprès de vraies personnes, pas seulement avec l'IA" },
    { id: "O4", condition: "Avec l'IA et un outil de design gratuit", action: "créer une affiche avec un titre, trois points courts, un prix et un appel à l'action", standard: "sans adresse personnelle et avec un contact approuvé par votre parent ou tuteur" },
    { id: "O5", condition: "Pour chaque travail et chaque achat", action: "suivre l'argent qui entre et l'argent qui sort dans un tableau à quatre colonnes et calculer votre bénéfice", standard: "en notant chaque ligne le jour même et en vérifiant chaque semaine" },
    { id: "O6", condition: "Avec chaque client", action: "confirmer les détails de chaque travail dans un message poli et répondre aux problèmes", standard: "en prévenant votre parent ou tuteur de tout ce qui est dangereux ou impayé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir et préparer votre petite activité",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver une idée qui vous correspond",
          minutes: 5,
          goal: "Choisir une idée de petite activité adaptée à vos compétences, à votre temps et à votre quartier.",
          text: [
            "La meilleure petite activité utilise quelque chose que vous savez déjà bien faire et règle un problème pour quelqu'un près de chez vous. Bon en maths ? Donnez des cours aux plus jeunes. Vous aimez les animaux ? Gardez-les ou promenez des chiens. Doué en vidéo ? Montez des clips pour une équipe ou une église du quartier.",
            "Demandez à l'IA : \"J'ai 15 ans, j'ai 5 heures par semaine, je dessine bien, j'aime les jeux vidéo et j'habite près d'un parc. Donne-moi 10 idées de petites activités sans danger pour un ado.\" Puis choisissez les idées qui tiennent dans votre vrai temps libre et votre emploi du temps scolaire.",
            "Vérifiez que des gens en ont besoin. Demandez à trois voisins, amis de la famille ou camarades : \"Est-ce que vous paieriez pour ça ?\""
          ],
          steps: ["Listez vos compétences et les heures que vous avez vraiment.", "Demandez à l'IA 10 idées sans danger qui correspondent.", "Barrez les idées qui ne vont pas avec l'école ou votre emploi du temps.", "Demandez à trois personnes si elles paieraient pour votre meilleure idée."],
          words: [["Petite activité", "une petite façon de gagner de l'argent en dehors de l'école ou d'un emploi principal."], ["Client", "la personne qui paie pour ce que vous proposez."]],
          slides: [
            { title: "Partez de ce que vous faites bien", bullets: ["Les maths : des cours", "Les animaux : garde d'animaux", "La vidéo : montage pour des groupes du quartier"] },
            { title: "Demandez des idées à l'IA", bullets: ["Votre âge, vos compétences, vos heures", "\"Sans danger pour un ado\"", "Barrez ce qui gêne l'école"] },
            { title: "Vérifiez que les gens en veulent", bullets: ["Demandez à trois personnes", "\"Vous paieriez pour ça ?\""] }
          ],
          tryIt: "Écrivez vos compétences et les heures que vous avez vraiment chaque semaine. Demandez à l'IA 10 idées de petites activités sans danger, choisissez votre préférée et demandez à trois personnes si elles paieraient pour elle.",
          youCanNow: "choisir une idée de petite activité qui vous correspond et que les gens veulent.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui fait une bonne idée de petite activité ?", options: ["L'idée qui a l'air la plus cool en ligne", "Elle utilise une compétence que vous avez et règle un problème pour quelqu'un près de chez vous", "Celle qui demande le plus d'heures", "N'importe quoi que fait un ami"], answer: 1, why: "La meilleure petite activité utilise quelque chose que vous savez déjà bien faire et règle un problème près de chez vous." },
            { objective: "O1", q: "Vous adorez votre idée, mais personne parmi ceux à qui vous demandez ne paierait pour elle. Que faites-vous ?", options: ["Vous commencez quand même en espérant", "Vous augmentez le prix", "Vous continuez à demander jusqu'à ce que quelqu'un dise oui", "Vous essayez une autre idée de votre liste"], answer: 3, why: "Demander aux gens vérifie la demande ; si personne ne paierait, choisissez une autre idée." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les règles, la sécurité et votre parent ou tuteur",
          minutes: 5,
          goal: "Vérifier les règles sur le travail des jeunes et décider des règles de sécurité avec un parent ou tuteur.",
          text: [
            "Certains travaux ont des règles d'âge. Aux États-Unis, selon la loi fédérale, le baby-sitting occasionnel et les petits travaux chez des particuliers ne sont pas concernés par les règles sur le travail des enfants, et le travail pour une entreprise qui appartient entièrement à vos parents a des règles spéciales. La plupart des autres emplois demandent d'avoir au moins 14 ans, et personne de moins de 18 ans ne peut faire un travail dangereux. Les États peuvent avoir des règles plus strictes : renseignez-vous auprès du service du travail de votre État.",
            "Règles sur l'argent : si vos revenus nets de travail indépendant atteignent 400 dollars ou plus dans l'année, l'IRS (l'administration fiscale des États-Unis) dit que vous devez faire une déclaration et payer l'impôt sur le travail indépendant, quel que soit votre âge. Demandez à un parent ou tuteur de vous aider à garder vos traces et à consulter irs.gov.",
            "Les règles de sécurité comptent le plus : un parent ou tuteur sait où vous êtes et pour qui vous travaillez, vous rencontrez les nouveaux clients avec un adulte, vous n'entrez jamais seul chez un inconnu, et vous ne publiez jamais votre adresse en ligne. Beaucoup d'applications de paiement et de sites de vente demandent un adulte : laissez votre parent ou tuteur s'en occuper."
          ],
          steps: ["Vérifiez les règles fédérales et celles de votre État sur le travail des jeunes.", "Montrez votre plan à un parent ou tuteur.", "Décidez ensemble des règles de sécurité.", "Laissez un adulte gérer les applications de paiement et les comptes de vente."],
          words: [["Travailleur indépendant", "quelqu'un qui travaille pour lui-même plutôt que pour un patron."], ["Revenus nets", "l'argent gagné moins ce que vous avez dépensé pour le gagner."]],
          sources: [
            { name: "Ministère du Travail des États-Unis, fiche n° 43 : règles sur le travail des enfants hors agriculture", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
            { name: "IRS : impôt sur le travail indépendant (Sécurité sociale et Medicare)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" }
          ],
          slides: [
            { title: "Règles sur le travail des jeunes", bullets: ["Baby-sitting occasionnel, petits travaux : hors règles fédérales", "La plupart des autres emplois : 14 ans et plus", "Pas de travail dangereux avant 18 ans", "Vérifiez les règles de votre État"] },
            { title: "Règles sur l'argent", bullets: ["IRS : 400 dollars nets ou plus = déclaration", "L'âge ne compte pas", "Gardez vos traces avec l'aide d'un parent"] },
            { title: "La sécurité d'abord", bullets: ["Un adulte sait où vous êtes", "Rencontrez les nouveaux clients avec un adulte", "Ne publiez jamais votre adresse"] }
          ],
          tryIt: "Cherchez les règles de votre État sur le travail des jeunes et lisez la page de l'IRS sur l'impôt des indépendants avec un parent ou tuteur (ou les règles officielles de votre pays). Écrivez trois règles de sécurité sur lesquelles vous êtes d'accord.",
          youCanNow: "vérifier les règles pour votre petite activité et fixer des règles de sécurité avec un parent ou tuteur.",
          quickCheck: [
            { objective: "O2", q: "D'après la loi fédérale, quel type de travail est interdit à toute personne de moins de 18 ans ?", options: ["Donner des cours", "Garder des animaux", "Le travail dangereux", "Faire de l'art"], answer: 2, why: "La loi fédérale interdit le travail dangereux à toute personne de moins de 18 ans." },
            { objective: "O2", q: "Un nouveau client vous demande de venir seul chez lui pour vous rencontrer. Que faites-vous ?", options: ["Vous le rencontrez avec un parent ou tuteur, qui sait où vous êtes", "Vous y allez seul pour être poli", "Vous lui envoyez votre adresse", "Vous lui demandez de payer d'abord"], answer: 0, why: "Rencontrez les nouveaux clients avec un adulte et n'entrez jamais seul chez un inconnu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fixer un prix juste",
          minutes: 5,
          goal: "Fixer un prix qui couvre vos frais, vous paie correctement et convient à vos clients.",
          text: [
            "Pour fixer un prix, regardez trois choses : ce que ça vous coûte (fournitures, trajets), ce que demandent d'autres jeunes ou des services du coin, et ce que vaut votre temps.",
            "Demandez à l'IA de vous aider à réfléchir, pas de décider : \"Je promène des chiens pendant 30 minutes. Aide-moi à réfléchir à un prix juste pour un ado dans une petite ville. Quelles questions devrais-je me poser ?\" Puis demandez à de vraies personnes ce qu'elles paient près de chez vous, car l'IA ne connaît pas votre quartier.",
            "Écrivez votre prix clairement, par exemple \"Promenade de chien, 30 minutes\" avec le montant. Restez simple et gardez le même prix pour tout le monde."
          ],
          steps: ["Additionnez vos frais pour chaque travail.", "Demandez aux gens combien coûtent des services semblables près de chez vous.", "Décidez ce que vaut votre temps.", "Écrivez un prix clair pour chaque service."],
          words: [["Frais", "ce que vous dépensez pour faire le travail."], ["Bénéfice", "l'argent qui reste après avoir payé vos frais."]],
          slides: [
            { title: "Trois choses fixent votre prix", bullets: ["Vos frais", "Ce que demandent les autres près de chez vous", "Ce que vaut votre temps"] },
            { title: "L'IA vous aide à réfléchir", bullets: ["Demandez quelles questions vous poser", "Demandez les prix locaux à de vraies personnes", "L'IA ne connaît pas votre quartier"] },
            { title: "Restez clair", bullets: ["Un prix par service", "Le même pour tout le monde"] }
          ],
          tryIt: "Listez vos frais pour un travail, demandez à deux personnes ce qu'elles paient pour quelque chose de semblable et écrivez un prix clair pour votre service.",
          youCanNow: "fixer un prix juste et clair pour votre petite activité.",
          quickCheck: [
            { objective: "O3", q: "Quelles sont les trois choses qui aident à fixer un prix ?", options: ["Vos frais, les prix du quartier et ce que vaut votre temps", "Seulement ce que suppose un ami", "Le prix le plus élevé trouvé en ligne", "Ce que dit l'IA"], answer: 0, why: "Un prix juste couvre vos frais, correspond aux prix du quartier et vous paie pour votre temps." },
            { objective: "O3", q: "L'IA propose un prix pour tondre une pelouse. Que faites-vous avant de l'utiliser ?", options: ["Vous l'utilisez tout de suite", "Vous le doublez", "Vous faites payer chaque client différemment", "Vous demandez à de vraies personnes ce qu'elles paient dans le quartier"], answer: 3, why: "L'IA ne connaît pas votre quartier, alors vérifiez les prix locaux auprès de vraies personnes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir et préparer votre petite activité",
        questions: [
          { objective: "O1", q: "La meilleure idée de petite activité, en général :", options: ["Prend tout votre temps d'école", "Est ce qui est à la mode en ligne", "Utilise une compétence que vous avez et règle un problème près de chez vous", "Demande du matériel cher"], answer: 2, why: "Des compétences plus un vrai besoin font une bonne idée." },
          { objective: "O1", q: "Comment vérifier que les gens veulent votre idée ?", options: ["Demander à quelques personnes si elles paieraient", "Supposer que oui", "Demander seulement à l'IA", "Publier votre adresse en ligne"], answer: 0, why: "Les réponses de vraies personnes montrent une vraie demande." },
          { objective: "O2", q: "Selon l'IRS, les règles sur l'impôt des indépendants :", options: ["S'appliquent seulement en été", "S'appliquent seulement aux adultes", "Ne s'appliquent jamais aux ados", "S'appliquent quel que soit votre âge"], answer: 3, why: "L'IRS dit que les règles s'appliquent quel que soit l'âge." },
          { objective: "O2", q: "Laquelle est une bonne règle de sécurité ?", options: ["Aller seul chez un inconnu", "Rencontrer les nouveaux clients avec un adulte", "Mettre votre adresse sur votre affiche", "Garder vos projets secrets"], answer: 1, why: "Être avec un adulte vous protège." },
          { objective: "O3", q: "Pourquoi demander les prix locaux à de vraies personnes ?", options: ["L'IA a toujours raison", "L'IA ne connaît pas votre quartier", "Les prix sont partout les mêmes", "La loi l'exige"], answer: 1, why: "Les gens du coin connaissent les prix du coin." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire tourner votre petite activité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faire une affiche simple avec l'IA",
          minutes: 5,
          goal: "Écrire et mettre en page une affiche claire pour votre service.",
          text: [
            "Une affiche dit aux gens ce que vous faites, combien ça coûte et comment vous joindre. L'IA peut aider pour le texte : \"Écris une affiche courte et sympathique pour un service de promenade de chiens tenu par un ado. Mets un titre, 3 points et un appel à l'action.\"",
            "Mettez-la en page dans un outil gratuit comme Canva, Google Docs ou Google Slides. Utilisez un grand titre, des lignes courtes et des couleurs faciles à lire.",
            "Sécurité : ne mettez jamais votre adresse sur une affiche. Utilisez le numéro ou l'e-mail d'un parent ou tuteur, ou un contact qu'il approuve. Demandez la permission avant de mettre des affiches dans des magasins, des bibliothèques ou des centres de quartier."
          ],
          steps: ["Demandez à l'IA un titre, 3 points et un appel à l'action.", "Modifiez le texte pour qu'il vous ressemble.", "Mettez-le en page dans un outil gratuit.", "Utilisez un contact approuvé par un parent ou tuteur, jamais votre adresse."],
          words: [["Appel à l'action", "une phrase qui dit aux gens quoi faire ensuite, comme \"Envoyez un SMS pour réserver une promenade\"."], ["Titre", "le grand titre en haut."]],
          slides: [
            { title: "Une affiche dit", bullets: ["Ce que vous faites", "Combien ça coûte", "Comment vous joindre"] },
            { title: "L'IA écrit, vous corrigez", bullets: ["Titre, 3 points, appel à l'action", "Faites qu'elle vous ressemble", "Mise en page dans Canva ou Google Docs"] },
            { title: "Restez en sécurité", bullets: ["Pas d'adresse", "Un contact approuvé par votre parent", "Demandez avant d'afficher"] }
          ],
          tryIt: "Demandez à l'IA d'écrire le texte d'une affiche pour votre service. Modifiez-le pour qu'il vous ressemble, mettez-le en page dans un outil gratuit et ajoutez un contact approuvé par votre parent ou tuteur.",
          youCanNow: "faire une affiche claire et sûre pour votre petite activité.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que le titre d'une affiche ?", options: ["Le numéro de contact", "La grande ligne en haut qui dit ce que vous proposez", "Les petites lignes en bas", "La liste des prix"], answer: 1, why: "Une affiche utilise un seul grand titre pour que les gens voient vite ce que vous proposez." },
            { objective: "O4", q: "Le texte d'affiche écrit par l'IA contient votre rue. Que faites-vous ?", options: ["Vous la laissez pour que les gens vous trouvent", "Vous écrivez le nom de la rue plus petit", "Vous l'enlevez et utilisez un contact approuvé par votre parent ou tuteur", "Vous publiez l'affiche seulement en ligne"], answer: 2, why: "Ne mettez jamais votre adresse sur une affiche ; utilisez un contact approuvé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Suivre l'argent qui entre et qui sort",
          minutes: 5,
          goal: "Créer un tableau simple pour suivre l'argent et l'utiliser pour chaque travail.",
          text: [
            "Les patrons d'entreprise suivent chaque somme. Un tableau simple a quatre colonnes : date, argent qui entre, argent qui sort, et notes (qui a payé, ce que vous avez acheté).",
            "Faites-le dans Google Sheets, Microsoft Excel ou un cahier. L'IA peut aider : \"Fais un tableau simple pour suivre l'argent d'une activité de garde d'animaux tenue par un ado, avec un total en bas.\" Ne tapez jamais de numéros de compte bancaire ou de carte dans l'IA.",
            "Regardez-le chaque semaine. L'argent qui entre moins l'argent qui sort, c'est votre bénéfice. Vos traces aident aussi votre parent ou tuteur pour les questions d'impôts."
          ],
          steps: ["Faites quatre colonnes : date, argent qui entre, argent qui sort, notes.", "Notez chaque travail et chaque achat le jour même.", "Ajoutez une ligne de total.", "Vérifiez chaque semaine : entrées moins sorties = bénéfice."],
          words: [["Tableur", "un tableau sur ordinateur, comme Google Sheets ou Excel."], ["Bénéfice", "l'argent qui entre moins l'argent qui sort."]],
          slides: [
            { title: "Suivez chaque somme", bullets: ["Date", "Argent qui entre", "Argent qui sort", "Notes"] },
            { title: "Des outils gratuits", bullets: ["Google Sheets ou Excel", "Un cahier marche aussi", "Jamais de numéros bancaires dans l'IA"] },
            { title: "Vérifiez chaque semaine", bullets: ["Entrées moins sorties = bénéfice", "Vos traces aident pour les impôts"] }
          ],
          tryIt: "Faites un tableau avec les quatre colonnes. Ajoutez deux travaux (vrais ou inventés) et un achat, et calculez votre bénéfice.",
          youCanNow: "suivre l'argent de votre petite activité et connaître votre bénéfice.",
          quickCheck: [
            { objective: "O5", q: "Que met-on dans la colonne « argent qui sort » ?", options: ["Les pourboires reçus", "Les paiements des clients", "Votre bénéfice", "Ce que vous avez dépensé, comme le matériel ou les trajets"], answer: 3, why: "L'argent qui sort, c'est ce que vous dépensez ; l'argent qui entre, c'est ce que les clients vous paient." },
            { objective: "O5", q: "Vous voulez que l'IA vous aide à créer votre tableau. Que laissez-vous de côté ?", options: ["Vos numéros de compte bancaire ou de carte", "Les noms des colonnes", "Le mot « total »", "Votre type d'activité"], answer: 0, why: "Ne tapez jamais de numéros de compte bancaire ou de carte dans un outil d'IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bien traiter les clients",
          minutes: 5,
          goal: "Écrire des messages clairs et polis et gérer un problème avec un client.",
          text: [
            "Les clients reviennent, et en parlent à leurs amis, quand vous êtes à l'heure, poli et honnête. Confirmez chaque travail : jour, heure, prix et ce que vous allez faire.",
            "L'IA peut vous aider à écrire vos messages, avec votre parent ou tuteur en copie : \"Écris un message poli pour confirmer une promenade de chien samedi à 10 h au prix convenu.\" Si quelque chose se passe mal, excusez-vous, expliquez ce que vous allez faire pour réparer, et tenez votre promesse.",
            "Si un client est impoli, vous demande quelque chose de dangereux ou ne paie pas, arrêtez et prévenez votre parent ou tuteur. Vous n'avez pas à gérer ça seul."
          ],
          steps: ["Confirmez le jour, l'heure, le prix et la tâche avant chaque travail.", "Soyez à l'heure et faites ce que vous avez promis.", "Si ça se passe mal : excusez-vous, dites comment vous réparez, faites-le.", "Danger ou impayé ? Prévenez votre parent ou tuteur."],
          words: [["Confirmer", "vérifier les détails et se mettre d'accord avant le travail."], ["Avis", "ce qu'un client dit de votre travail."]],
          slides: [
            { title: "Les clients reviennent si vous êtes", bullets: ["À l'heure", "Poli", "Honnête"] },
            { title: "Confirmez chaque travail", bullets: ["Jour et heure", "Prix", "Ce que vous allez faire"] },
            { title: "Quand ça se passe mal", bullets: ["Excusez-vous et proposez une solution", "Danger ou impayé ? Prévenez votre parent ou tuteur"] }
          ],
          tryIt: "Tâche finale : faites le plan d'une page de votre petite activité : service et client, prix et pourquoi, votre affiche, votre tableau d'argent et deux règles de sécurité. Montrez-le à un parent ou tuteur et demandez-lui ce qu'il changerait.",
          youCanNow: "préparer et mener une petite activité sûre avec l'IA comme aide.",
          quickCheck: [
            { objective: "O6", q: "Que doit contenir un message de confirmation d'un travail ?", options: ["Votre adresse", "Le jour, l'heure, le prix et la tâche", "Votre emploi du temps scolaire", "Vos coordonnées bancaires"], answer: 1, why: "Confirmer le jour, l'heure, le prix et la tâche évite les malentendus." },
            { objective: "O6", q: "Vous avez oublié de remplir la gamelle d'eau d'un animal. Que faites-vous ?", options: ["Vous le cachez", "Vous accusez l'animal", "Vous vous excusez, expliquez comment vous allez corriger et le faites", "Vous arrêtez de répondre aux messages"], answer: 2, why: "Reconnaître l'erreur et la corriger garde la confiance des clients." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire tourner votre petite activité",
        questions: [
          { objective: "O4", q: "Que ne faut-il jamais mettre sur votre affiche ?", options: ["Votre prix", "Un appel à l'action", "Ce que vous faites", "Votre adresse"], answer: 3, why: "Votre adresse met votre sécurité en danger." },
          { objective: "O4", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Une phrase qui dit aux gens quoi faire ensuite", "Une sonnerie de téléphone", "Un type de prix", "Une règle de l'école"], answer: 0, why: "Il dit aux clients comment vous réserver." },
          { objective: "O5", q: "Un tableau simple pour suivre l'argent a des colonnes pour :", options: ["Les mots de passe", "Seulement vos chansons préférées", "La date, l'argent qui entre, l'argent qui sort et des notes", "Seulement les noms de vos amis"], answer: 2, why: "Ces quatre colonnes suivent chaque somme." },
          { objective: "O5", q: "Le bénéfice, c'est :", options: ["Votre prix", "Tout l'argent reçu", "L'argent dépensé", "L'argent qui entre moins l'argent qui sort"], answer: 3, why: "Le bénéfice est ce qui reste après les frais." },
          { objective: "O6", q: "Un client vous demande de faire quelque chose de dangereux. Vous :", options: ["Le faites pour garder le client", "Vous disputez en ligne", "Arrêtez et prévenez votre parent ou tuteur", "L'ignorez et continuez"], answer: 2, why: "Votre sécurité compte plus que n'importe quel travail." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour entreprendre et gagner un peu d'argent (jeunes)",
    questions: [
      { objective: "O1", q: "Une petite activité, c'est :", options: ["Un pas de danse", "Une petite façon de gagner de l'argent en dehors de l'école ou d'un emploi principal", "Un club de l'école", "Un type de contrôle"], answer: 1, why: "C'est un travail en plus que vous faites sur votre temps libre." },
      { objective: "O1", q: "Une bonne demande à l'IA pour des idées contient :", options: ["Votre âge, vos compétences, vos heures et \"sans danger pour un ado\"", "Votre adresse", "Votre numéro de compte", "Rien"], answer: 0, why: "Ces détails donnent des idées qui vous correspondent." },
      { objective: "O1", q: "Une idée ne va pas avec votre emploi du temps scolaire. Vous devez :", options: ["La faire quand même", "Sécher l'école", "La barrer et en choisir une autre", "Demander à l'IA de faire vos devoirs"], answer: 2, why: "L'école passe en premier." },
      { objective: "O2", q: "Selon la loi fédérale américaine, le baby-sitting occasionnel :", options: ["N'est pas concerné par les règles sur le travail des enfants", "Demande d'avoir 18 ans", "Est interdit aux ados", "Demande une licence"], answer: 0, why: "Le ministère du Travail dit que le baby-sitting occasionnel n'est pas concerné par les règles fédérales." },
      { objective: "O2", q: "La règle de votre État sur le travail des jeunes est plus stricte que la loi fédérale. Vous suivez :", options: ["La règle de votre ami", "La règle la plus facile", "Aucune règle", "La règle la plus stricte"], answer: 3, why: "Quand les deux s'appliquent, la plus stricte compte." },
      { objective: "O2", q: "L'IRS dit que vous devez déclarer l'impôt sur le travail indépendant quand vos revenus nets sont de :", options: ["Plus d'un million de dollars", "400 dollars ou plus", "Plus de 1 dollar", "Jamais, pour les ados"], answer: 1, why: "Le seuil de l'IRS est de 400 dollars de revenus nets, à tout âge." },
      { objective: "O2", q: "Qui doit gérer les applications de paiement et les comptes de vente qui demandent un adulte ?", options: ["Un inconnu", "Votre parent ou tuteur", "Le grand cousin d'un ami", "Personne"], answer: 1, why: "Beaucoup demandent un adulte, et votre parent ou tuteur doit être au courant de votre argent." },
      { objective: "O3", q: "Votre prix doit couvrir :", options: ["Les frais de votre ami", "Seulement ce que dit l'IA", "Rien", "Vos frais et votre temps"], answer: 3, why: "Un prix juste paie vos frais et votre temps." },
      { objective: "O5", q: "Le bénéfice veut dire :", options: ["L'argent qui reste après les frais", "Tout l'argent reçu", "Vos dépenses", "Un pourboire"], answer: 0, why: "Bénéfice = argent qui entre moins argent qui sort." },
      { objective: "O3", q: "Pourquoi garder un prix clair pour chaque service ?", options: ["C'est illégal de faire autrement", "Ça embrouille les clients", "C'est simple et juste pour tout le monde", "L'IA l'exige"], answer: 2, why: "Des prix clairs et égaux donnent confiance." },
      { objective: "O4", q: "Quand l'IA écrit votre affiche, vous devez :", options: ["Laisser l'IA choisir votre prix", "La publier sans la lire", "Ajouter votre adresse", "La modifier pour qu'elle vous ressemble"], answer: 3, why: "Votre façon de parler rend l'affiche personnelle." },
      { objective: "O4", q: "Quel contact peut aller sur l'affiche d'un ado ?", options: ["Votre emploi du temps scolaire", "Votre adresse", "Un contact approuvé par votre parent ou tuteur", "Le code de votre casier"], answer: 2, why: "Les contacts approuvés vous protègent." },
      { objective: "O4", q: "Avant de mettre des affiches dans un magasin ou une bibliothèque, vous devez :", options: ["Les scotcher n'importe où", "Demander la permission", "Recouvrir les autres affiches", "Ne rien demander"], answer: 1, why: "Les lieux ont des règles pour leurs panneaux." },
      { objective: "O5", q: "Quel outil gratuit peut contenir un tableau pour suivre l'argent ?", options: ["Google Sheets", "Une application de musique", "Une console de jeux", "Un filtre photo"], answer: 0, why: "Les tableurs comme Google Sheets sont gratuits." },
      { objective: "O5", q: "Que ne faut-il jamais taper dans un outil d'IA ?", options: ["\"Écris une affiche\"", "\"Fais un tableau pour suivre l'argent\"", "Des numéros de compte bancaire ou de carte", "\"Donne-moi des idées\""], answer: 2, why: "Les numéros de compte et de carte sont privés." },
      { objective: "O5", q: "À quelle fréquence vérifier votre tableau ?", options: ["Chaque semaine", "Une fois par an", "Jamais", "Seulement quand vous perdez de l'argent"], answer: 0, why: "Une vérification chaque semaine montre où vous en êtes." },
      { objective: "O6", q: "Avant chaque travail, vous devez confirmer :", options: ["Votre goûter préféré", "Seulement le prix", "Rien", "Le jour, l'heure, le prix et la tâche"], answer: 3, why: "Confirmer évite les surprises." },
      { objective: "O6", q: "Vous êtes arrivé en retard à un travail. La meilleure réponse est :", options: ["Accuser le client", "Vous excuser, expliquer comment vous réparez et tenir votre promesse", "L'ignorer", "Faire payer plus cher"], answer: 1, why: "Reconnaître ses erreurs garde les clients." },
      { objective: "O6", q: "Un client ne paie pas. Vous devez :", options: ["Aller seul chez lui réclamer l'argent", "Prévenir votre parent ou tuteur", "Parler de lui en ligne", "Continuer à travailler gratuitement"], answer: 1, why: "Un adulte peut vous aider à gérer ça sans danger." },
      { objective: "O2", q: "Qui doit voir le plan de votre petite activité avant de commencer ?", options: ["Seulement l'IA", "Personne", "Seulement des inconnus en ligne", "Un parent ou tuteur"], answer: 3, why: "Un parent ou tuteur aide pour la sécurité, les règles et l'argent." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Service et client",
        objective: "O1",
        notYet: "Le service ou le client n'est pas clair.",
        meets: "Dit quel est le service, pour qui il est, et qu'au moins trois personnes ont dit qu'elles paieraient.",
        exceeds: "Montre aussi que l'idée tient dans les vraies heures de l'apprenant chaque semaine."
      },
      {
        name: "Prix",
        objective: "O3",
        notYet: "Pas de prix, ou pas de raison pour ce prix.",
        meets: "Un prix clair qui couvre les frais et le temps, vérifié auprès de gens du quartier.",
        exceeds: "Montre le coût par travail et comment le prix se compare aux offres du quartier."
      },
      {
        name: "Affiche",
        objective: "O4",
        notYet: "L'affiche contient une adresse personnelle, ou pas de prix ni de contact.",
        meets: "Un titre, des points courts, le prix et un contact approuvé, sans adresse personnelle.",
        exceeds: "Les mots ont été retouchés pour ressembler à l'apprenant, et le design est facile à lire."
      },
      {
        name: "Tableau de l'argent",
        objective: "O5",
        notYet: "Des colonnes manquent ou il n'y a aucun moyen de voir le bénéfice.",
        meets: "La date, l'argent qui entre, l'argent qui sort et des notes, avec un total qui montre le bénéfice.",
        exceeds: "Contient des lignes réelles ou d'entraînement et une note sur le moment de la vérification chaque semaine."
      },
      {
        name: "Règles de sécurité",
        objective: "O2",
        notYet: "Moins de deux règles de sécurité, ou aucune relecture par un parent ou tuteur.",
        meets: "Deux règles de sécurité convenues avec un parent ou tuteur, qui a vu le plan.",
        exceeds: "Note aussi les règles sur le travail des jeunes et les impôts qui s'appliquent, vérifiées sur des sites officiels."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui lancent leur petite activité avec l'accord d'un parent ou tuteur dans les 60 jours",
      "Les apprenants qui tiennent un tableau de l'argent pendant au moins quatre semaines",
      "Les apprenants qui signalent des gains et des clients fidèles dans le suivi à 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone, un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser, et Canva, Google Docs ou Google Slides",
      "Google Sheets, Excel ou un cahier pour le tableau de l'argent",
      "Un parent ou tuteur pour relire le plan",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Envoyez un mot aux familles pour que les parents et tuteurs sachent que le cours leur demande de relire le plan et de gérer les comptes réservés aux adultes.",
      "Vérifiez les affiches avant que les apprenants les publient ou les impriment, pour qu'aucune adresse personnelle ni aucun contact privé n'y figure.",
      "Rappelez aux apprenants que les règles sur le travail des jeunes et les impôts changent ; faites-les vérifier auprès du service du travail de leur État et sur irs.gov avec un adulte.",
      "Ne demandez jamais aux apprenants de taper des numéros de compte bancaire ou de carte dans les outils d'IA ; les tableaux d'entraînement peuvent utiliser des montants inventés.",
      "Organisez une courte présentation des plans et évaluez chaque plan avec la grille, en donnant un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
