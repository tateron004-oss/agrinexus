"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-ecommerce.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-ecommerce-fr",
  lang: "fr",
  translationOf: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "Plateformes de commerce en ligne et IA pour les athlètes",
  skills: "Choisir quoi vendre, Comparer les plateformes de boutique et leurs frais, Écrire des fiches produit avec l'IA, Fixer un prix à partir des vrais coûts, Vérifier les règles NIL, de logos et de marques déposées avant de vendre",
  outcome: "préparer et lancer une offre en ligne simple, comme des produits dérivés, des cours particuliers ou un stage : choisir une plateforme, écrire une fiche produit avec l'IA, fixer un prix à partir des vrais coûts et vérifier les règles NIL, de logos et de marques déposées avant le lancement.",
  about: [
    "Ce cours s'adresse aux athlètes et aux entraîneurs qui veulent vendre quelque chose en ligne : des T-shirts ou des produits dérivés avec leur propre design, des cours particuliers, des programmes d'entraînement, ou des stages et des ateliers.",
    "Vous apprendrez quoi vendre, comment choisir une plateforme de boutique, comment écrire une fiche produit avec l'IA, comment fixer un prix qui couvre vos coûts et comment respecter les règles NIL (nom, image et ressemblance), de logos scolaires et de marques déposées.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. C'est une formation générale, pas un conseil juridique ou fiscal ; renseignez-vous auprès de votre service de conformité, d'un parent ou d'un tuteur si vous avez moins de 18 ans, et d'un professionnel de la fiscalité."
  ],
  finalTask: "Rédigez un plan de lancement d'une page pour un produit ou un service : ce que c'est et à qui il s'adresse, la plateforme choisie et ses frais actuels (pris sur sa page de tarifs), une fiche produit écrite avec l'IA et retouchée par vous, un prix calculé à partir des vrais coûts, et une liste de règles à vérifier (NIL, logos scolaires, marques déposées, impôts) avec les personnes que vous avez consultées.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes et des entraîneurs de lycée, d'université et en début de carrière qui veulent vendre quelque chose en ligne : des produits dérivés avec leur propre design, des cours particuliers, des plans d'entraînement, ou des stages et des ateliers.",
    startingPoint: "Ils ont un public sur les réseaux sociaux et une compétence sur laquelle on les interroge, et ont parfois déjà acheté en ligne. Peu ont comparé les frais des boutiques, fixé un prix à partir des vrais coûts, écrit une fiche produit ou vérifié les règles NIL, de logos, de marques déposées et d'impôts.",
    gap: "Les athlètes qui se lancent sans vérifier les règles peuvent perdre leur admissibilité ou avoir des problèmes de marque déposée, et fixer un prix sans compter les frais peut faire perdre de l'argent. Un plan simple, avec les règles vérifiées, une fiche honnête et un prix basé sur les coûts, leur permet de gagner de l'argent avec leurs compétences en sécurité.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur, un assistant IA gratuit et un tableur ; les frais des plateformes changent et doivent être lus sur chaque page de tarifs",
      "Environ 60 minutes au total",
      "Les règles NIL, de logos scolaires, de marques déposées des ligues et d'impôts ; vérifiez auprès du service de conformité ou de l'association de l'État",
      "Les athlètes de moins de 18 ans ont besoin qu'un adulte détienne ou codétienne les comptes de boutique et de paiement ; ceci est une formation, pas un conseil juridique ni fiscal"
    ],
    prerequisites: "Aucun. « Stratégies de marketing numérique avec l'IA pour les sportifs » aide à faire la promotion du lancement."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de ce que votre public vous demande", action: "choisir un premier produit physique, service ou produit numérique à vendre", standard: "avec le temps et l'argent qu'il demande notés par écrit" },
    { id: "O2", condition: "Avec les pages de tarifs officielles de deux plateformes", action: "comparer leurs frais mensuels, par vente et de paiement, et en choisir une", standard: "avec les vrais frais actuels notés par écrit et les règles d'âge vérifiées" },
    { id: "O3", condition: "Avant de vendre quoi que ce soit avec votre nom ou un logo", action: "vérifier les règles NIL, de logos, de marques déposées et d'impôts qui s'appliquent à vous", standard: "sans aucun logo d'école, d'équipe ou de ligue utilisé sans autorisation écrite, avec une recherche USPTO faite et le nom de la personne consultée" },
    { id: "O4", condition: "À partir d'un brouillon de l'IA", action: "écrire une fiche produit honnête qui répond à quoi, pour qui, ce qu'on reçoit, le prix, quand et comment", standard: "en moins de 200 mots, avec chaque détail vrai, de vraies photos qui vous appartiennent et des règles de remboursement claires" },
    { id: "O5", condition: "À partir de tous les coûts d'une vente", action: "calculer un prix qui couvre vos coûts et laisse un bénéfice", standard: "avec les calculs vérifiés dans un tableur et avec une calculatrice" },
    { id: "O6", condition: "Quand votre offre est prête", action: "planifier un lancement discret et une routine de service client", standard: "avec les problèmes corrigés avant la grande annonce et les messages traités dans la journée" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Quoi vendre et où",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir quoi vendre",
          minutes: 5,
          goal: "Choisir un produit ou un service adapté à vos compétences et à votre public.",
          text: [
            "Les athlètes vendent généralement l'une de trois choses. Des produits physiques : T-shirts, casquettes, autocollants ou affiches avec votre propre design ou logo. Des services : cours particuliers, entraînements en petit groupe, stages et ateliers. Des produits numériques : programmes d'entraînement, cours vidéo ou guides d'exercices.",
            "Commencez par une chose sur laquelle votre public vous pose déjà des questions. Si des parents vous demandent souvent des cours, vendez des cours. Si des fans commentent votre logo, essayez les produits dérivés.",
            "Pensez au temps et au risque. Les services rémunèrent votre temps mais dépendent de votre emploi du temps. Les produits dérivés demandent de l'argent au départ, sauf si vous utilisez l'impression à la demande. Les produits numériques prennent du temps à créer mais peuvent se vendre de nombreuses fois."
          ],
          steps: ["Listez ce que votre public vous demande.", "Classez les idées : physique, service ou numérique.", "Notez le temps et l'argent que chacune demande.", "Choisissez-en une pour commencer."],
          words: [["Commerce en ligne", "acheter et vendre sur Internet."], ["Impression à la demande", "un service qui imprime et expédie un article seulement après qu'une personne l'a commandé."], ["Produit numérique", "quelque chose vendu sous forme de fichier ou d'accès en ligne, comme un programme d'entraînement."]],
          slides: [
            { title: "Trois types d'offres", bullets: ["Physique : produits dérivés à votre design", "Services : cours, stages, ateliers", "Numérique : programmes, cours vidéo"] },
            { title: "Partez de la demande", bullets: ["Que vous demande votre public ?", "Choisissez une seule chose"] },
            { title: "Temps et risque", bullets: ["Services : votre temps", "Produits dérivés : argent au départ ou impression à la demande", "Numérique : créé une fois, vendu de nombreuses fois"] }
          ],
          tryIt: "Listez trois choses que des gens vous ont demandées. Demandez à un assistant IA les avantages et les inconvénients de vendre chacune, puis choisissez-en une.",
          youCanNow: "choisir un produit ou un service adapté à vos compétences et à votre public.",
          quickCheck: [
            { objective: "O1", q: "Lequel est un produit physique ?", options: ["Un cours en vidéo", "Un cours particulier", "Un stage", "Un t-shirt avec votre propre design"], answer: 3, why: "Les produits physiques comprennent les t-shirts, les casquettes, les autocollants et les affiches." },
            { objective: "O1", q: "Des parents vous demandent sans cesse des cours pour leurs enfants. Qu'essayez-vous d'abord ?", options: ["Vendre des cours particuliers", "Créer une affiche", "Lancer un cours en vidéo", "Vendre des casquettes"], answer: 0, why: "Commencez par quelque chose que votre public demande déjà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comparer les plateformes de boutique",
          minutes: 5,
          goal: "Comparer deux plateformes et en choisir une selon leurs frais et fonctions actuels.",
          text: [
            "Vous n'avez pas besoin de construire une boutique de zéro. Des créateurs de boutique comme Shopify, Square Online et Wix vous permettent de mettre des produits en ligne et d'encaisser des paiements. Des services d'impression à la demande comme Printful ou Printify se connectent aux boutiques et gèrent l'impression et l'expédition. Pour les cours et les stages, un outil de réservation et d'inscription ou un simple lien de paiement peut suffire.",
            "Chaque plateforme se fait payer d'une manière ou d'une autre : abonnement mensuel, pourcentage sur chaque vente, frais de traitement des paiements, ou les trois. Ces frais changent souvent : lisez la page de tarifs actuelle de chaque plateforme et notez les vrais chiffres.",
            "Si vous avez moins de 18 ans, beaucoup de plateformes et de services de paiement exigent qu'un adulte possède ou copossède le compte. Impliquez un parent ou un tuteur."
          ],
          steps: ["Choisissez deux plateformes adaptées à votre offre.", "Ouvrez la page de tarifs officielle de chacune.", "Notez le coût mensuel, les frais par vente et les frais de paiement.", "Vérifiez les règles d'âge.", "Choisissez celle qui a le coût total le plus bas pour vos ventes prévues."],
          words: [["Plateforme", "un service en ligne que vous utilisez pour faire fonctionner votre boutique."], ["Frais de traitement", "ce qu'un service de paiement facture pour encaisser un paiement par carte."]],
          slides: [
            { title: "Options de boutique", bullets: ["Créateurs de boutique : Shopify, Square Online, Wix", "Impression à la demande : Printful, Printify", "Cours et stages : outil de réservation ou lien de paiement"] },
            { title: "Frais à comparer", bullets: ["Abonnement mensuel", "Frais par vente", "Frais de traitement des paiements"] },
            { title: "Avant de vous inscrire", bullets: ["Lisez la page de tarifs actuelle", "Moins de 18 ans : un adulte devra peut-être posséder le compte"] }
          ],
          tryIt: "Choisissez deux plateformes. À partir de leurs pages de tarifs officielles, notez le coût mensuel et les frais de chacune dans un petit tableau, et choisissez le total le moins cher pour 20 ventes par mois.",
          youCanNow: "comparer des plateformes de boutique selon leurs frais réels et actuels, et en choisir une.",
          quickCheck: [
            { objective: "O2", q: "Que font Printful et Printify ?", options: ["Ils gèrent les inscriptions aux stages", "Ils s'occupent de l'impression et de l'expédition des commandes", "Ils remplissent vos déclarations d'impôts", "Ils dessinent votre logo gratuitement"], answer: 1, why: "Les services d'impression à la demande se connectent aux boutiques et s'occupent de l'impression et de l'expédition." },
            { objective: "O2", q: "Un ami dit qu'une plateforme ne coûte rien. Que faites-vous ?", options: ["Le croire et vous inscrire", "Demander le prix à une IA", "Lire la page de tarifs actuelle de la plateforme et noter les frais", "Deviner les frais"], answer: 2, why: "Chaque plateforme fait payer d'une façon ou d'une autre, et les frais changent, alors lisez la page de tarifs actuelle." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Les règles d'abord : NIL, logos et marques déposées",
          minutes: 6,
          goal: "Vérifier les règles qui s'appliquent avant de vendre quoi que ce soit avec votre nom ou un logo.",
          text: [
            "Vendre des articles avec votre nom, votre image ou votre ressemblance peut compter comme une activité NIL. Les athlètes universitaires devront peut-être la déclarer ; les règles de la NCAA (l'association du sport universitaire américain) disent qu'un revenu NIL doit avoir un vrai but commercial et ne pas être lié aux performances. Au lycée, les règles varient selon l'État. Demandez d'abord à votre service de conformité ou à l'association sportive de votre État.",
            "N'utilisez pas le logo, le nom, la mascotte ou les couleurs de votre école ou de votre équipe d'une manière qui semble officielle sans une permission écrite. Les écoles et les ligues possèdent et protègent généralement ces éléments. Les logos des ligues professionnelles et des autres marques sont aussi interdits.",
            "Créez votre propre logo et cherchez dans les registres de marques de l'USPTO (l'office américain des brevets et des marques) avant de choisir un nom de marque, pour éviter de copier celui de quelqu'un d'autre. Les revenus de vente sont généralement imposables ; l'IRS (l'administration fiscale américaine) dit que vous devez faire une déclaration si vos revenus nets de travailleur indépendant atteignent 400 $ ou plus : gardez vos justificatifs et parlez à un professionnel de la fiscalité."
          ],
          steps: ["Demandez à votre service de conformité ou à l'association de votre État les règles NIL pour la vente.", "N'utilisez pas les logos d'école, d'équipe ou de ligue sans permission écrite.", "Créez votre propre logo.", "Cherchez votre nom de marque dans les registres de l'USPTO.", "Mettez en place un registre simple des ventes et des coûts."],
          words: [["Marque déposée", "un nom, un logo ou un slogan qui identifie une entreprise et qui est protégé par la loi."], ["Licence", "une permission officielle d'utiliser le logo ou le nom de quelqu'un d'autre, souvent contre paiement."]],
          slides: [
            { title: "Règles NIL", bullets: ["Vendre avec votre nom peut être une activité NIL", "Université : déclaration parfois obligatoire", "Lycée : les règles varient selon l'État"] },
            { title: "Logos", bullets: ["Logos d'école, d'équipe et de ligue : permission écrite", "Logos d'autres marques : interdits", "Créez le vôtre"] },
            { title: "Nom et impôts", bullets: ["Cherchez dans l'USPTO avant de choisir un nom", "Gardez une trace des ventes et des coûts", "Parlez à un professionnel de la fiscalité"] }
          ],
          sources: [
            { name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO : les bases des marques déposées (en anglais)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Écrivez une liste de règles à vérifier pour votre produit : NIL (qui vous avez consulté), logos (lesquels, et la permission), recherche de marque (faite ou non) et justificatifs (où vous les garderez).",
          youCanNow: "vérifier les bases NIL, logos, marques déposées et impôts avant de vendre.",
          quickCheck: [
            { objective: "O3", q: "À qui appartiennent en général le logo, la mascotte et le nom d'une école ?", options: ["À l'école ou à la ligue", "Aux athlètes", "À toute personne qui les utilise", "Au journal local"], answer: 0, why: "Les écoles et les ligues possèdent et protègent en général ces éléments." },
            { objective: "O3", q: "Vous avez choisi un nom de marque pour vos produits dérivés. Que faites-vous avant d'imprimer ?", options: ["Imprimer 500 t-shirts", "Demander aux fans de voter", "Copier un logo célèbre", "Chercher ce nom dans les registres de marques de l'USPTO"], answer: 3, why: "Chercher dans les registres de l'USPTO vous aide à ne pas copier la marque déposée de quelqu'un d'autre." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Quoi vendre et où",
        questions: [
          { objective: "O1", q: "Quel service un athlète pourrait-il vendre ?", options: ["Un T-shirt", "Un autocollant", "Des cours particuliers", "Une affiche"], answer: 2, why: "Les cours sont un service qui rémunère votre temps." },
          { objective: "O2", q: "Que fait l'impression à la demande ?", options: ["Elle imprime et expédie les articles seulement après une commande", "Elle imprime de l'argent", "Elle vous oblige à acheter 500 T-shirts d'abord", "Elle écrit votre fiche produit"], answer: 0, why: "Elle réduit l'argent nécessaire au départ." },
          { objective: "O2", q: "Où trouver les vrais frais d'une plateforme ?", options: ["En devinant", "Dans une vieille vidéo", "Dans la mémoire d'une IA", "Sur sa page de tarifs officielle actuelle"], answer: 3, why: "Les frais changent ; la page officielle est à jour." },
          { objective: "O3", q: "Vous voulez vendre des T-shirts avec le logo de votre école. De quoi avez-vous besoin d'abord ?", options: ["De rien", "D'une permission écrite de l'école", "D'une plus jolie police", "De plus d'abonnés"], answer: 1, why: "Les écoles possèdent et protègent généralement leurs logos." },
          { objective: "O3", q: "Pourquoi chercher dans les registres de l'USPTO avant de nommer votre marque ?", options: ["Pour obtenir des T-shirts gratuits", "Pour éviter de copier la marque déposée de quelqu'un d'autre", "Pour trouver des clients", "Ce n'est pas utile"], answer: 1, why: "Cela vous aide à éviter les problèmes de marque." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire et lancer votre offre",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire une fiche produit avec l'IA",
          minutes: 5,
          goal: "Écrire une fiche produit claire et honnête avec l'aide de l'IA.",
          text: [
            "Une fiche produit répond aux questions des acheteurs : qu'est-ce que c'est ? Pour qui ? Qu'est-ce que je reçois ? Combien, quand et comment ? Pour un stage : les dates, les âges, le lieu, ce que les enfants apprennent, la sécurité, ce qu'il faut apporter et la politique de remboursement.",
            "Demandez à un assistant IA : « Écris une fiche produit pour un cours particulier de tir d'une heure pour des joueurs de 10 à 16 ans. Inclus ce qu'ils vont apprendre, ce qu'il faut apporter, le type de lieu, un emplacement pour le prix et une courte politique de remboursement. Ton amical, clair, moins de 200 mots. » Puis corrigez chaque détail pour qu'il soit vrai.",
            "Utilisez de vraies photos qui vous appartiennent. Ne promettez pas de résultats comme « titulaire garanti » et ne faites pas d'affirmations de santé. Des règles claires de remboursement et d'annulation évitent les disputes plus tard."
          ],
          steps: ["Listez ce que les acheteurs doivent savoir.", "Demandez à l'IA un brouillon de moins de 200 mots.", "Vérifiez chaque détail et corrigez tout ce qui est faux.", "Ajoutez de vraies photos qui vous appartiennent.", "Ajoutez des règles claires de remboursement et d'annulation."],
          words: [["Fiche produit", "la page qui décrit ce que vous vendez et permet de l'acheter."], ["Politique de remboursement", "vos règles pour rendre l'argent."]],
          slides: [
            { title: "Répondez aux questions des acheteurs", bullets: ["Qu'est-ce que c'est ? Pour qui ?", "Qu'est-ce que je reçois ?", "Combien, quand et comment ?"] },
            { title: "L'IA rédige, vous vérifiez", bullets: ["Moins de 200 mots", "Chaque détail est vrai", "Vos propres photos"] },
            { title: "À éviter", bullets: ["Résultats garantis", "Affirmations de santé", "Pas de règles de remboursement"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger votre fiche produit, puis corrigez-la pour que chaque détail soit vrai et ajoutez une politique de remboursement.",
          youCanNow: "écrire une fiche produit claire et honnête avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O4", q: "Quel détail a sa place sur la fiche produit d'un stage ?", options: ["Votre adresse", "Ce qu'il faut apporter", "Votre moyenne scolaire", "Les prix des autres entraîneurs"], answer: 1, why: "Les acheteurs ont besoin des dates, des âges, du lieu, de ce que les enfants apprennent, de ce qu'il faut apporter et des remboursements." },
            { objective: "O4", q: "Le brouillon de l'IA dit que vos cours « garantissent une bourse ». Que faites-vous ?", options: ["Le garder pour vendre plus", "Le changer en « garantissent presque »", "Le retirer ; ne promettez pas de résultats", "Ajouter d'autres promesses"], answer: 2, why: "Ne promettez pas de résultats et ne faites pas d'affirmations que vous ne pouvez pas tenir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fixer le prix à partir des vrais coûts",
          minutes: 5,
          goal: "Fixer un prix qui couvre vos coûts et laisse un bénéfice.",
          text: [
            "Le prix part du coût. Pour les produits dérivés : le coût de l'article, l'impression, l'expédition, les frais de plateforme et les frais de paiement. Pour les cours : la location du lieu, le matériel, les déplacements, votre temps et les frais.",
            "Additionnez le coût d'une vente, puis regardez combien coûtent des produits ou des cours similaires dans votre région. Choisissez un prix au-dessus de votre coût que votre public peut payer. La différence est votre bénéfice, avant impôts.",
            "Utilisez un tableur : une colonne pour chaque coût, un total, votre prix et le bénéfice. Un assistant IA peut créer les formules, mais vérifiez les calculs avec une calculatrice."
          ],
          steps: ["Listez chaque coût d'une vente.", "Additionnez-les.", "Regardez le prix d'offres similaires près de chez vous.", "Fixez un prix au-dessus du coût adapté à votre public.", "Vérifiez les calculs dans un tableur."],
          words: [["Coût", "l'argent que vous dépensez pour produire ou livrer une vente."], ["Bénéfice", "le prix moins tous les coûts, avant impôts."]],
          slides: [
            { title: "Listez chaque coût", bullets: ["Article, impression, expédition", "Frais de plateforme et de paiement", "Lieu, matériel, déplacements, temps"] },
            { title: "Fixez un prix", bullets: ["Au-dessus du coût total", "Comparez avec des offres similaires", "Ce que votre public peut payer"] },
            { title: "Tableur", bullets: ["Coûts, total, prix, bénéfice", "L'IA crée les formules ; vous vérifiez"] }
          ],
          tryIt: "Créez une feuille de prix pour une vente de votre produit. Demandez à l'IA d'écrire les formules du total et du bénéfice, puis vérifiez-les avec une calculatrice.",
          youCanNow: "fixer un prix à partir des vrais coûts et connaître votre bénéfice par vente.",
          quickCheck: [
            { objective: "O5", q: "Lequel est un coût pour un cours particulier ?", options: ["La location de l'installation", "Votre nombre d'abonnés", "Le trajet de l'acheteur", "Votre numéro de maillot"], answer: 0, why: "Les coûts d'un cours comprennent l'installation, le matériel, les trajets, votre temps et les frais." },
            { objective: "O5", q: "Votre t-shirt coûte 14 à fabriquer, expédier et vendre. Des t-shirts semblables se vendent de 12 à 25 près de chez vous. Quel prix a du sens ?", options: ["10, pour être le moins cher", "14, comme le coût", "12, le prix le plus bas autour de vous", "Un prix au-dessus de 14 que votre public peut payer, comme 20"], answer: 3, why: "Fixez un prix au-dessus de votre coût total pour faire un bénéfice, dans ce que votre public peut payer." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lancer et satisfaire vos clients",
          minutes: 5,
          goal: "Préparer un petit lancement et une routine simple de service client.",
          text: [
            "Commencez petit : un lancement discret auprès de votre famille, des familles de vos coéquipiers et de vos abonnés proches. Réglez les problèmes avant une grande annonce. Annoncez ensuite avec une publication, une courte vidéo et un lien dans votre biographie.",
            "Si vous publiez sur vos propres produits, c'est votre entreprise ; mais si une marque ou une autre personne vous donne quelque chose pour la promouvoir, signalez-le clairement. Athlètes universitaires : déclarez les contrats à temps si c'est obligatoire.",
            "Le service client fidélise les acheteurs : répondez aux messages dans la journée, expédiez ou confirmez les réservations à temps, respectez votre politique de remboursement et dites merci. Demandez à l'IA de rédiger des modèles de réponses polies aux questions courantes."
          ],
          steps: ["Faites un lancement discret auprès d'un petit groupe.", "Réglez les problèmes.", "Annoncez avec une publication, une vidéo et un lien dans la biographie.", "Répondez aux messages dans la journée.", "Utilisez l'IA pour rédiger des modèles de réponses."],
          words: [["Lancement discret", "une première sortie petite et tranquille pour repérer les problèmes."], ["Service client", "la façon dont vous aidez les acheteurs avant et après le paiement."]],
          slides: [
            { title: "Commencez petit", bullets: ["Lancement discret auprès de vos proches", "Réglez d'abord les problèmes"] },
            { title: "Puis annoncez", bullets: ["Publication, courte vidéo, lien en biographie", "Signalez tout lien avec une marque"] },
            { title: "Satisfaire vos clients", bullets: ["Répondez dans la journée", "À temps, selon votre politique de remboursement", "Modèles de réponses avec l'IA"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan de lancement d'une page : offre et public, plateforme et frais actuels, fiche produit rédigée avec l'IA, prix calculé sur les vrais coûts, et liste de règles avec les personnes consultées.",
          youCanNow: "lancer une petite offre en ligne et offrir un bon service client.",
          quickCheck: [
            { objective: "O6", q: "À qui s'adresse un lancement discret ?", options: ["À tout le monde sur internet", "À la famille, aux familles des coéquipiers et aux abonnés proches", "Seulement aux grandes marques", "À vos concurrents"], answer: 1, why: "Commencez petit et corrigez les problèmes avant la grande annonce." },
            { objective: "O6", q: "Un client demande un remboursement qui correspond à votre politique de remboursement. Que faites-vous ?", options: ["Ignorer le message", "Discuter dans les commentaires", "Suivre votre politique, rembourser poliment et dire merci", "Le bloquer"], answer: 2, why: "Suivre votre politique de remboursement et répondre poliment fidélise les acheteurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire et lancer votre offre",
        questions: [
          { objective: "O4", q: "La fiche produit d'un stage doit inclure :", options: ["Seulement un logo", "Votre adresse personnelle", "Des bourses garanties", "Les dates, les âges, le lieu, ce que les enfants apprennent et la politique de remboursement"], answer: 3, why: "Elle répond à ce que les acheteurs doivent savoir." },
          { objective: "O4", q: "L'IA écrit « intégration garantie dans l'équipe première » sur votre fiche. Vous :", options: ["Le retirez", "Le gardez", "Le mettez en plus grand", "Ajoutez d'autres promesses"], answer: 0, why: "Ne promettez pas des résultats que vous ne pouvez pas garantir." },
          { objective: "O5", q: "Le bénéfice, c'est :", options: ["Seulement le prix", "Le nombre d'abonnés", "Le prix moins tous les coûts", "Le total des ventes sans les coûts"], answer: 2, why: "Le bénéfice est ce qui reste après les coûts." },
          { objective: "O6", q: "Pourquoi faire un lancement discret ?", options: ["Pour cacher votre boutique", "Pour augmenter les prix", "C'est exigé par la loi", "Pour repérer les problèmes avant une grande annonce"], answer: 3, why: "Les petits lancements révèlent les problèmes sans risque." },
          { objective: "O6", q: "En combien de temps répondre aux messages des clients ?", options: ["Dans le mois", "Dans la journée", "Jamais", "Seulement s'ils se plaignent deux fois"], answer: 1, why: "Des réponses rapides créent la confiance et fidélisent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Plateformes de commerce en ligne et IA pour les athlètes",
    questions: [
      { objective: "O1", q: "Le commerce en ligne, c'est :", options: ["Le sport électrique", "Seulement l'e-mail", "Acheter et vendre sur Internet", "Un bus d'équipe"], answer: 2, why: "C'est la vente en ligne." },
      { objective: "O1", q: "Lequel est un produit numérique ?", options: ["Un programme d'entraînement", "Une casquette", "Un stage", "Une affiche"], answer: 0, why: "Il se vend sous forme de fichier ou d'accès en ligne." },
      { objective: "O1", q: "Une bonne façon de choisir votre premier produit :", options: ["Ce sur quoi votre public vous interroge déjà", "Ce qui est à la mode", "L'idée la plus chère", "Quelque chose que vous ne connaissez pas"], answer: 0, why: "La demande rend les ventes plus faciles." },
      { objective: "O1", q: "Les services rémunèrent votre :", options: ["Expédition", "Impression", "Temps", "Autocollants"], answer: 2, why: "Les cours et les stages demandent votre temps." },
      { objective: "O2", q: "Lequel est un créateur de boutique ?", options: ["Un chronomètre", "Shopify", "Un tableau d'affichage", "Un maillot"], answer: 1, why: "Shopify est un créateur de boutique." },
      { objective: "O2", q: "Quels frais une plateforme peut-elle facturer ?", options: ["Des frais de maillot", "Des frais d'arbitre", "Des frais de temps mort", "Des frais de traitement des paiements"], answer: 3, why: "Les frais de paiement sont courants." },
      { objective: "O2", q: "Si vous avez moins de 18 ans, un compte de boutique peut exiger :", options: ["Rien", "Un faux âge", "Qu'un adulte le possède ou le copossède", "La pièce d'identité d'un coéquipier"], answer: 2, why: "Beaucoup de plateformes exigent un adulte." },
      { objective: "O3", q: "Vendre des produits dérivés avec votre nom peut compter comme :", options: ["Du pay-for-play", "Une bourse", "Rien", "Une activité NIL"], answer: 3, why: "Cela utilise votre nom, votre image ou votre ressemblance." },
      { objective: "O3", q: "À qui un athlète universitaire doit-il demander les règles NIL pour la vente ?", options: ["Au service de conformité", "À un fan au hasard", "À un rival", "À personne"], answer: 0, why: "Il connaît les règles actuelles de l'école et de la NCAA." },
      { objective: "O3", q: "Pouvez-vous mettre un logo de la NFL sur vos produits ?", options: ["Oui, toujours", "Non, pas sans licence", "Seulement en rouge", "Seulement en ligne"], answer: 1, why: "Les logos des ligues sont protégés." },
      { objective: "O3", q: "Une marque déposée, c'est :", options: ["Un type de chaussure", "Une boisson sportive", "Un nom, un logo ou un slogan protégé", "Un programme d'entraînement"], answer: 2, why: "Les marques déposées identifient les entreprises." },
      { objective: "O3", q: "L'IRS dit que vous devez faire une déclaration si vos revenus nets de travailleur indépendant sont de :", options: ["400 $ ou plus", "1 million $ ou plus", "Jamais", "Seulement si vous avez plus de 30 ans"], answer: 0, why: "C'est le seuil indiqué par l'IRS sur sa page des travailleurs indépendants." },
      { objective: "O4", q: "Une fiche produit doit répondre à :", options: ["Seulement le prix", "Votre moyenne scolaire", "Votre mot de passe", "Quoi, pour qui, ce qu'on reçoit, le prix, quand et comment"], answer: 3, why: "Les acheteurs ont besoin de ces réponses." },
      { objective: "O4", q: "Les photos de produit doivent être :", options: ["Copiées sur d'autres boutiques", "De vraies photos qui vous appartiennent", "Fausses", "D'autres athlètes"], answer: 1, why: "Utilisez des photos sur lesquelles vous avez des droits." },
      { objective: "O4", q: "Pourquoi avoir une politique de remboursement ?", options: ["Pour toujours garder tout l'argent", "Pour éviter les disputes plus tard", "C'est de la décoration", "Ce n'est pas nécessaire"], answer: 1, why: "Des règles claires vous protègent, vous et les acheteurs." },
      { objective: "O5", q: "Le prix doit être :", options: ["En dessous de votre coût", "Au hasard", "Toujours gratuit", "Au-dessus de votre coût total"], answer: 3, why: "Sinon, vous perdez de l'argent à chaque vente." },
      { objective: "O5", q: "L'IA crée votre formule de bénéfice. Vous devez :", options: ["Vérifier les calculs avec une calculatrice", "Lui faire entièrement confiance", "La supprimer", "Doubler votre prix"], answer: 0, why: "L'IA peut faire des erreurs de calcul." },
      { objective: "O6", q: "Un lancement discret s'adresse à :", options: ["Tout le monde d'un coup", "Seulement aux rivaux", "La famille, les abonnés proches et les gens que vous connaissez", "Personne"], answer: 2, why: "Un petit groupe vous aide à régler les problèmes." },
      { objective: "O6", q: "Où mettre le lien de votre boutique ?", options: ["Caché nulle part", "Sur la page d'un rival", "Dans des messages indésirables", "Dans votre biographie"], answer: 3, why: "Les liens en biographie sont faciles à trouver." },
      { objective: "O6", q: "L'IA peut aider le service client en :", options: ["Gardant l'argent des clients", "Rédigeant des modèles de réponses polies", "Ignorant les messages", "Changeant en secret les règles de remboursement"], answer: 1, why: "Les modèles rendent les réponses rapides et polies." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      2,
      5,
      7,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Offre et public",
        objective: "O1",
        notYet: "Le produit ou son public n'est pas clair.",
        meets: "Un produit ou un service, à qui il s'adresse, et le temps et l'argent qu'il demande.",
        exceeds: "Montre la preuve que le public l'a demandé, comme des commentaires ou des demandes de parents."
      },
      {
        name: "Plateforme et frais",
        objective: "O2",
        notYet: "Aucun frais indiqué, ou des frais devinés au lieu d'être pris sur la page de tarifs.",
        meets: "La plateforme choisie avec ses frais actuels mensuels, par vente et de paiement tirés de sa page de tarifs, et les règles d'âge vérifiées.",
        exceeds: "Compare deux plateformes et montre le coût total pour le nombre de ventes prévu."
      },
      {
        name: "Fiche produit",
        objective: "O4",
        notYet: "Il manque des détails importants, il y a des affirmations fausses, ou pas de règles de remboursement.",
        meets: "Moins de 200 mots, répond à quoi, pour qui, ce qu'on reçoit, le prix, quand et comment, avec de vraies photos et des règles de remboursement claires.",
        exceeds: "Comprend des détails de sécurité pour les offres destinées aux jeunes et des réponses aux questions courantes."
      },
      {
        name: "Prix à partir des coûts",
        objective: "O5",
        notYet: "Le prix est sous le coût, ou des coûts manquent.",
        meets: "Chaque coût d'une vente listé et additionné, et un prix au-dessus du coût, avec les calculs vérifiés.",
        exceeds: "Montre le bénéfice par vente et le nombre de ventes qui couvre les coûts de départ."
      },
      {
        name: "Liste des règles",
        objective: "O3",
        notYet: "Il manque le NIL, les logos, les marques déposées ou les impôts, ou personne n'est nommé.",
        meets: "Le NIL, les logos scolaires, les marques déposées et les impôts sont chacun vérifiés, avec la personne consultée par l'athlète.",
        exceeds: "Comprend une autorisation écrite pour le logo ou le résultat d'une recherche USPTO, et un registre des ventes et des coûts mis en place."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le plan de lancement avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui lancent leur produit ou leur service dans les 30 jours (questionnaire de suivi)",
      "Les apprenants qui signalent leurs premières ventes ou réservations et un bénéfice après les coûts",
      "Les apprenants qui disent avoir vérifié les règles NIL, de logos et d'impôts auprès de leur école, de l'association de leur État ou d'un professionnel avant de vendre"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un tableur gratuit (Google Sheets) et une calculatrice",
      "Les pages de tarifs officielles de deux plateformes",
      "La politique NIL de votre école ou les règles de l'association de votre État",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Faites venir le service de conformité ou le directeur sportif pour expliquer les règles NIL et de logos avant que quiconque crée des produits dérivés.",
      "Pour les athlètes de moins de 18 ans, impliquez un parent ou un tuteur dans le choix et la détention des comptes de boutique et de paiement.",
      "Faites lire les frais sur les pages de tarifs en direct pendant la séance ; ne vous fiez pas aux chiffres de mémoire ou de l'IA.",
      "Pour les stages et les cours avec des mineurs, parlez de sécurité, d'encadrement et d'autorisation d'utiliser les installations avant le lancement.",
      "Orientez les apprenants vers un professionnel des impôts pour les questions de revenus ; ne donnez pas de conseil fiscal individuel."
    ]
  }
};
