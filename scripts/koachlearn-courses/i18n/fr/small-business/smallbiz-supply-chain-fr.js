"use strict";

// Koach Learn course (French translation of small-business/smallbiz-supply-chain.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-supply-chain-fr",
  lang: "fr",
  translationOf: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Les bases de l'approvisionnement et des stocks",
  skills: "Cartographier votre chaîne d'approvisionnement, Trouver et comparer des fournisseurs, Passer et vérifier les commandes, Compter le stock, Fixer le point de commande et le stock de sécurité, Tenir un stock sur tableur en premier entré, premier sorti",
  outcome: "choisir et comparer des fournisseurs, passer et vérifier des commandes, compter votre stock, calculer quand recommander et combien garder en plus, et tenir un stock simple sur tableur qui suit la règle du premier entré, premier sorti.",
  about: [
    "Être en rupture de votre meilleur produit fait perdre des ventes et des clients. Acheter trop immobilise de l'argent sur une étagère, et une partie du stock s'abîme ou passe de mode. De bonnes habitudes d'approvisionnement et de gestion des stocks gardent la bonne quantité des bons articles en stock.",
    "Ce cours est pour les propriétaires et le personnel de petites entreprises qui achètent et vendent des marchandises ou utilisent des fournitures : une épicerie de quartier, un food truck, un salon de coiffure, un stand de produits de la ferme, une boutique en ligne ou une entreprise de nettoyage. Vous allez cartographier votre chaîne d'approvisionnement, trouver et comparer des fournisseurs, passer et vérifier des commandes, compter le stock, calculer un point de commande et un stock de sécurité, et créer un tableur simple qui signale quand recommander.",
    "Il vous faut seulement un stylo et du papier ou un tableur gratuit comme Google Sheets ou Microsoft Excel sur le web. Les exemples utilisent des chiffres simples, alors vous pouvez suivre même si les maths ne sont pas votre point fort.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche à faire tout de suite. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Créez un tableur de stock simple pour cinq articles que vous achetez ou vendez, avec des colonnes pour l'article, le SKU, le fournisseur principal, le fournisseur de secours, le coût unitaire, le stock disponible, la consommation moyenne par jour, le délai de livraison en jours, le stock de sécurité, le point de commande (calculé avec une formule) et un signal de commande, et écrivez comment vous appliquerez le premier entré, premier sorti sur l'étagère.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des patrons et gérants de petites entreprises qui achètent et vendent des marchandises ou utilisent des fournitures, comme des boutiques, des épiceries de quartier, des restaurants, des salons, des vendeurs de marché et des vendeurs en ligne, dont beaucoup sont issus de minorités.",
    startingPoint: "Ils achètent régulièrement du stock et des fournitures et connaissent leurs meilleures ventes. La plupart commandent par habitude ou de mémoire, comptent rarement leur stock à date fixe et n'ont jamais utilisé de point de commande ni de stock sur tableur.",
    gap: "Manquer de ses meilleures ventes fait perdre des ventes, et acheter trop immobilise l'argent et laisse du stock abîmé ou invendu. Les apprenants ont besoin d'habitudes simples et d'un tableur qui leur disent quoi commander, quand et combien, et qui repèrent les erreurs et les pertes.",
    constraints: [
      "Calcul de base : multiplications et formules simples de tableur, expliquées pas à pas",
      "Appareils : un téléphone ou un ordinateur avec un tableur gratuit comme Google Sheets ou Excel sur le web",
      "Temps : environ 60 minutes au total, le comptage se faisant quand l'apprenant le peut",
      "Risque d'arnaque avec de nouveaux fournisseurs qui demandent des virements, des cartes cadeaux ou des cryptomonnaies",
      "Vie privée : pas besoin de mettre les prix des fournisseurs ni des données privées de l'entreprise dans les outils d'IA"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de vos cinq principaux articles", action: "dessiner votre chaîne d'approvisionnement et repérer ses points faibles", standard: "avec un fournisseur de secours ou du stock en plus prévu pour chaque point faible" },
    { id: "O2", condition: "Pour un article que vous achetez", action: "comparer trois fournisseurs sur le coût de revient rendu, la commande minimum, le délai de livraison, les conditions de paiement et la fiabilité", standard: "avec un devis écrit de chacun et les signaux d'alerte vérifiés" },
    { id: "O3", condition: "Pour une commande à passer", action: "écrire un bon de commande et vérifier la livraison par rapport à lui", standard: "avec chaque problème noté sur le bon de livraison et signalé le jour même" },
    { id: "O4", condition: "À partir de votre stock et de vos registres", action: "compter votre stock et trouver l'écart avec vos registres", standard: "avec chaque écart recompté par une deuxième personne" },
    { id: "O5", condition: "À partir de la consommation par jour et du délai de livraison d'un article", action: "calculer son stock de sécurité et son point de commande", standard: "en trouvant le bon point de commande avec la formule" },
    { id: "O6", condition: "Avec un tableur gratuit", action: "créer une feuille de stock qui signale les articles à recommander, et prévoir comment appliquer le premier entré, premier sorti sur l'étagère", standard: "avec le point de commande et le statut calculés par des formules" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Fournisseurs et commandes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cartographier votre chaîne d'approvisionnement",
          minutes: 5,
          goal: "Dessiner la chaîne d'approvisionnement de vos principaux articles et repérer où elle pourrait casser.",
          text: [
            "Une chaîne d'approvisionnement, ce sont toutes les étapes qui amènent un produit jusqu'à votre client : le fabricant, un grossiste ou un distributeur s'il y en a un, le transport, votre étagère ou votre réserve, et enfin le client. Même une petite entreprise en a une.",
            "Commencez par vos cinq articles principaux : ceux qui rapportent le plus d'argent ou sans lesquels vous ne pouvez pas tourner. Pour chacun, écrivez chez qui vous l'achetez, comment il vous arrive, combien de temps cela prend, et où vous le gardez.",
            "Puis cherchez les points faibles. Achetez-vous un article important chez un seul fournisseur ? Vient-il de loin ? S'abîme-t-il vite ? Est-il saisonnier ? Un point faible est l'endroit où vous devriez garder du stock en plus ou prévoir un fournisseur de secours.",
            "Un assistant d'IA peut vous aider à imaginer ce qui pourrait mal tourner pour chaque article, comme un fournisseur qui ferme, une hausse de prix ou un retard de livraison. C'est vous qui décidez quels risques sont réels pour votre entreprise."
          ],
          steps: ["Listez vos cinq articles principaux.", "Pour chacun, écrivez le fournisseur, le mode de transport, le délai et le lieu de stockage.", "Dessinez des flèches : fournisseur vers transport vers vous vers client.", "Entourez les points faibles : un seul fournisseur, longue distance, s'abîme vite, saisonnier.", "Écrivez une solution pour chaque point faible."],
          words: [["Chaîne d'approvisionnement", "toutes les étapes qui amènent un produit du fabricant à votre client."], ["Fournisseur", "une entreprise chez qui vous achetez des marchandises ou des matériaux."], ["Grossiste ou distributeur", "une entreprise qui achète en gros aux fabricants et revend à d'autres entreprises."], ["Point faible", "une étape où quelque chose pourrait facilement mal tourner."]],
          slides: [
            { title: "Ce qu'est une chaîne d'approvisionnement", bullets: ["Fabricant, grossiste, transport", "Votre étagère ou votre réserve", "Votre client"] },
            { title: "Cartographiez vos cinq articles principaux", bullets: ["Chez qui vous achetez", "Comment il arrive et en combien de temps", "Où vous le gardez"] },
            { title: "Trouvez les points faibles", bullets: ["Un seul fournisseur", "Loin ou livraison lente", "S'abîme vite ou est saisonnier"] },
            { title: "Corrigez les points faibles", bullets: ["Gardez un peu de stock en plus", "Prévoyez un fournisseur de secours"] }
          ],
          tryIt: "Dessinez sur une page la chaîne d'approvisionnement de vos cinq articles principaux. Entourez chaque point faible et écrivez une solution à côté de chacun, comme trouver un fournisseur de secours ou garder une semaine de stock en plus.",
          youCanNow: "cartographier votre chaîne d'approvisionnement pour vos articles les plus importants et montrer où elle pourrait casser.",
          quickCheck: [
            { objective: "O1", q: "Quels articles cartographier en premier ?", options: ["Vos cinq principaux articles, ceux qui rapportent le plus ou sans lesquels vous ne pouvez pas tourner", "Tous les articles que vous avez jamais vendus", "Seulement les articles en promotion", "Les articles que vendent vos concurrents"], answer: 0, why: "Commencez par vos cinq principaux articles selon l'argent qu'ils rapportent ou leur importance." },
            { objective: "O1", q: "Votre article clé vient de loin et s'abîme vite. Que faites-vous ?", options: ["Vous n'en tenez pas compte", "Vous le marquez comme point faible et prévoyez un fournisseur de secours ou du stock en plus", "Vous arrêtez de le vendre tout de suite", "Vous laissez l'IA décider quels risques sont réels"], answer: 1, why: "Un point faible est l'endroit où vous gardez du stock en plus ou prévoyez un fournisseur de secours ; c'est vous qui décidez quels risques sont réels." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Trouver et comparer des fournisseurs",
          minutes: 6,
          goal: "Trouver trois fournisseurs possibles pour un article et les comparer sur autre chose que le prix.",
          text: [
            "Où trouver des fournisseurs : les fabricants et les marques (demandez qui distribue dans votre région), les grossistes et distributeurs, les salons professionnels, les associations professionnelles, les fermes et artisans locaux, et d'autres chefs d'entreprise de votre secteur. Cherchez en ligne le nom de l'article avec grossiste ou distributeur.",
            "Comparez sur autre chose que le prix. Regardez le prix unitaire, la quantité minimum de commande, le délai de livraison, les frais de transport, les conditions de paiement, la qualité et la fiabilité. Ajoutez le transport et les frais au prix pour obtenir le coût de revient rendu (landed cost), le vrai coût de chaque unité quand elle arrive chez vous.",
            "Demandez à chaque fournisseur un devis écrit et, si possible, un échantillon. Demandez l'avis d'autres clients ou lisez les avis. Gardez au moins un fournisseur de secours pour chaque article important.",
            "Méfiez-vous des nouveaux fournisseurs qui n'acceptent que les virements, les cartes cadeaux ou les cryptomonnaies, qui ont des prix bien plus bas que tous les autres, ou qui vous pressent. Vérifiez leur adresse et leur numéro de téléphone, et commencez par une petite commande."
          ],
          steps: ["Listez trois fournisseurs possibles pour un article.", "Demandez à chacun un devis écrit : prix unitaire, commande minimum, délai, transport et conditions de paiement.", "Calculez le coût de revient rendu par unité pour chacun.", "Demandez un échantillon et vérifiez les avis ou les références.", "Choisissez un fournisseur principal et un fournisseur de secours."],
          words: [["Quantité minimum de commande (MOQ)", "la plus petite commande qu'un fournisseur accepte."], ["Délai de livraison", "le temps entre la commande et le moment où vous avez la marchandise en main."], ["Coût de revient rendu (landed cost)", "le coût total d'une unité quand elle arrive chez vous : prix plus transport et frais."], ["Conditions de paiement", "quand vous devez payer ; par exemple Net 30 veut dire dans les 30 jours."], ["Devis", "une offre de prix écrite d'un fournisseur."]],
          slides: [
            { title: "Où trouver des fournisseurs", bullets: ["Fabricants, grossistes et distributeurs", "Salons et associations professionnelles", "Artisans locaux et autres chefs d'entreprise"] },
            { title: "Comparez plus que le prix", bullets: ["Prix unitaire et commande minimum", "Délai et transport", "Conditions de paiement, qualité, fiabilité"] },
            { title: "Le coût de revient rendu", bullets: ["Prix + transport + frais", "Divisez par le nombre d'unités", "Le vrai coût de chaque unité"] },
            { title: "Restez prudent", bullets: ["Obtenez des devis écrits et des échantillons", "Gardez un fournisseur de secours", "Évitez les offres virement seulement, trop bon marché, pressantes"] }
          ],
          tryIt: "Choisissez un article que vous achetez. Trouvez trois fournisseurs possibles et remplissez un petit tableau : prix unitaire, commande minimum, délai, transport, conditions de paiement et coût de revient rendu par unité. Entourez votre choix principal et votre secours. Exemple : 100 unités à $2.00 avec $30 de transport, cela fait un coût de revient rendu de $2.30 par unité.",
          youCanNow: "trouver des fournisseurs, les comparer sur le coût de revient rendu, le délai, les conditions et la fiabilité, et choisir un fournisseur principal et un de secours.",
          quickCheck: [
            { objective: "O2", q: "Lequel est un bon endroit pour trouver des fournisseurs ?", options: ["Une publicité au hasard sur les réseaux sociaux qui promet des marchandises gratuites", "Seulement le site le moins cher que vous trouvez", "Les salons professionnels et les associations du secteur", "Des e-mails d'inconnus qui demandent des cartes cadeaux"], answer: 2, why: "Les salons, les associations, les grossistes et les autres patrons sont de bons endroits pour trouver des fournisseurs." },
            { objective: "O2", q: "Un nouveau fournisseur a un excellent prix. Que faites-vous avant une grosse commande ?", options: ["Vous commandez un an de stock pour bloquer le prix", "Vous payez tout de suite par virement", "Vous sautez le devis pour gagner du temps", "Vous demandez un devis écrit et un échantillon, vérifiez son adresse et son téléphone, et commencez petit"], answer: 3, why: "Demandez un devis écrit et un échantillon, vérifiez le fournisseur et commencez par une petite commande." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Passer et vérifier les commandes",
          minutes: 5,
          goal: "Écrire un bon de commande clair et vérifier une livraison par rapport à lui.",
          text: [
            "Un bon de commande (purchase order, PO) est votre commande écrite à un fournisseur. Il évite les confusions. Il indique un numéro de bon de commande, la date, le fournisseur, chaque article avec son code, la quantité, le prix, la date et l'adresse de livraison, et les conditions de paiement.",
            "Quand la livraison arrive, vérifiez-la avant de signer ou de la ranger. Comptez les cartons et les unités, vérifiez que les articles et les tailles correspondent au bon de commande, cherchez les dégâts, et vérifiez les dates de péremption sur la nourriture ou les autres produits qui s'abîment.",
            "Écrivez tout problème sur le bon de livraison et prévenez le fournisseur le jour même, avec des photos. Ne payez pas ce que vous n'avez pas reçu.",
            "Gardez ensemble chaque bon de commande, son bon de livraison et sa facture. Vérifier que les trois concordent avant de payer s'appelle un rapprochement à trois (three-way match), et cela repère les erreurs et les surfacturations."
          ],
          steps: ["Écrivez un bon de commande avec numéro, date, fournisseur, articles, quantités, prix, date de livraison et conditions.", "Quand la livraison arrive, comptez-la et comparez-la au bon de commande.", "Vérifiez les dégâts et les dates de péremption.", "Écrivez les problèmes sur le bon de livraison, prenez des photos et prévenez le fournisseur le jour même.", "Avant de payer, rapprochez le bon de commande, le bon de livraison et la facture."],
          words: [["Bon de commande (PO)", "votre commande écrite à un fournisseur."], ["Bon de livraison", "le papier qui accompagne une livraison et liste ce qui a été envoyé."], ["Facture", "la note du fournisseur à payer."], ["Rapprochement à trois", "vérifier que le bon de commande, le bon de livraison et la facture concordent avant de payer."]],
          slides: [
            { title: "Un bon de commande clair", bullets: ["Numéro, date et fournisseur", "Articles, codes, quantités et prix", "Date et adresse de livraison, conditions"] },
            { title: "Vérifiez chaque livraison", bullets: ["Comptez les cartons et les unités", "Comparez articles et tailles au bon de commande", "Vérifiez les dégâts et les dates de péremption"] },
            { title: "Un problème ?", bullets: ["Écrivez-le sur le bon de livraison", "Photos, et prévenez le fournisseur le jour même", "Ne payez pas ce que vous n'avez pas reçu"] },
            { title: "Rapprochement à trois", bullets: ["Bon de commande + bon de livraison + facture", "Comparez-les avant de payer"] }
          ],
          tryIt: "Écrivez un exemple de bon de commande pour un article de votre tableau de fournisseurs, avec toutes les parties de cette leçon. Puis écrivez une liste de contrôle de cinq lignes que vous utiliserez à la prochaine livraison.",
          youCanNow: "écrire un bon de commande clair, vérifier une livraison par rapport à lui, et rapprocher les papiers avant de payer.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui figure sur un bon de commande ?", options: ["Chaque article avec son code, sa quantité et son prix", "Les noms de vos clients", "Le mot de passe de votre banque", "Vos objectifs de ventes"], answer: 0, why: "Un bon de commande indique son numéro, la date, le fournisseur, les articles avec leurs codes, les quantités, les prix, la livraison et les conditions." },
            { objective: "O3", q: "Un carton de yaourts arrive avec des dates de péremption dépassées. Que faites-vous ?", options: ["Vous le mettez vite en rayon", "Vous le notez sur le bon de livraison, prenez des photos, prévenez le fournisseur le jour même et ne le payez pas", "Vous signez le bon et vous vous plaindrez le mois prochain", "Vous le jetez sans rien dire"], answer: 1, why: "Vérifiez les dates avant de signer, notez les problèmes sur le bon et ne payez pas ce que vous n'avez pas reçu correctement." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Fournisseurs et commandes",
        questions: [
          { objective: "O1", q: "Vous achetez votre article le plus vendu chez un seul fournisseur. Quel est le risque ?", options: ["Aucun", "Si ce fournisseur a un problème, vous êtes en rupture", "Vos prix baisseront toujours", "Les clients achèteront plus"], answer: 1, why: "Un seul fournisseur est un point faible ; un fournisseur de secours vous protège." },
          { objective: "O2", q: "Qu'est-ce que le délai de livraison ?", options: ["Le temps entre la commande et le moment où vous avez la marchandise en main", "Le temps qu'un client attend dans la file", "La durée de vie d'un produit sur l'étagère", "Les horaires d'ouverture du fournisseur"], answer: 0, why: "Le délai de livraison est le temps que met une commande à arriver." },
          { objective: "O2", q: "Le fournisseur A vend 100 unités pour $200 avec $50 de transport. Quel est le coût de revient rendu par unité ?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 plus $50 font $250 ; divisé par 100 unités, cela fait $2.50 chacune." },
          { objective: "O2", q: "Un nouveau fournisseur a des prix très bas et n'accepte que les cartes cadeaux. Que faites-vous ?", options: ["Commander beaucoup tout de suite", "Payer avec des cartes cadeaux", "Être prudent : le vérifier et éviter ce moyen de paiement", "Envoyer vos identifiants bancaires"], answer: 2, why: "Le paiement uniquement par carte cadeau et les prix trop bas sont des signes d'arnaque." },
          { objective: "O3", q: "Il manque deux cartons dans une livraison. Que devez-vous faire ?", options: ["Signer sans rien dire", "Tout payer quand même", "Jeter le bon de livraison", "L'écrire sur le bon, prendre des photos et prévenir le fournisseur le jour même"], answer: 3, why: "Noter les problèmes tout de suite vous permet d'obtenir ce que vous avez payé." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Gérer les stocks",
      lessons: [
        {
          objectives: ["O4"],
          title: "Compter votre stock",
          minutes: 5,
          goal: "Faire un comptage exact de votre stock et trouver l'écart avec vos registres.",
          text: [
            "Le stock (inventaire), ce sont les marchandises et fournitures que vous avez sous la main. Vos registres disent combien vous devriez avoir ; un comptage montre combien vous avez vraiment. L'écart s'appelle souvent la démarque (shrinkage) : les pertes dues au vol, aux dégâts, aux produits abîmés ou aux erreurs.",
            "Un inventaire physique complet veut dire tout compter, souvent une ou deux fois par an, quand l'entreprise est fermée. Un inventaire tournant (cycle count) veut dire compter quelques articles chaque semaine, pour que chaque article soit compté au fil du temps. Comptez le plus souvent vos articles les plus chers ou ceux qui se vendent le plus vite.",
            "Pour bien compter : donnez à chaque article un SKU (un code court), comptez dans la même unité que celle où vous achetez et vendez, comptez étagère par étagère, et faites recompter par une deuxième personne tout ce qui ne correspond pas. Notez le résultat, la date et qui a compté.",
            "Ensuite, comparez votre comptage avec vos registres. Cherchez pourquoi les gros écarts sont arrivés, et corrigez vos registres pour qu'ils correspondent au vrai comptage."
          ],
          steps: ["Donnez à chaque article un SKU et une unité, comme pièce, carton ou kilo.", "Choisissez un inventaire complet ou des inventaires tournants chaque semaine.", "Comptez étagère par étagère et notez le résultat, la date et la personne qui a compté.", "Faites recompter par une deuxième personne tout écart.", "Comparez avec vos registres, trouvez les raisons des gros écarts et mettez les registres à jour."],
          words: [["Stock (inventaire)", "les marchandises et fournitures que vous avez sous la main."], ["SKU", "stock keeping unit (unité de gestion de stock) : un code court pour chaque article que vous stockez."], ["Inventaire tournant", "compter quelques articles à la fois selon un calendrier régulier."], ["Démarque", "le stock perdu à cause du vol, des dégâts, des produits abîmés ou des erreurs."]],
          slides: [
            { title: "Registres ou réalité", bullets: ["Registres : ce que vous devriez avoir", "Comptage : ce que vous avez vraiment", "L'écart, c'est la démarque"] },
            { title: "Deux façons de compter", bullets: ["Inventaire complet : tout, une ou deux fois par an", "Inventaire tournant : quelques articles chaque semaine", "Comptez plus souvent les articles chers et rapides"] },
            { title: "Bien compter", bullets: ["Un SKU et une unité pour chaque article", "Étagère par étagère ; notez la date et qui compte", "Recomptez tout écart"] },
            { title: "Après le comptage", bullets: ["Comparez avec vos registres", "Trouvez les raisons des gros écarts", "Mettez les registres à jour"] }
          ],
          tryIt: "Choisissez cinq articles. Donnez à chacun un SKU et une unité. Comptez-les maintenant et notez le résultat, la date et votre nom. Si vous avez des registres, comparez et notez l'écart pour chacun.",
          youCanNow: "compter votre stock avec précision, faire des inventaires tournants et trouver la démarque en comparant les comptages et les registres.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un inventaire physique complet ?", options: ["Compter une seule étagère", "Compter seulement les articles chers", "Tout compter, souvent une ou deux fois par an", "Deviner à partir des ventes"], answer: 2, why: "Un inventaire physique complet consiste à tout compter, souvent une ou deux fois par an." },
            { objective: "O4", q: "Vous trouvez un grand écart entre votre comptage et vos registres. Que faites-vous après le recomptage ?", options: ["Vous changez le comptage pour qu'il corresponde aux registres", "Vous n'en tenez pas compte", "Vous supprimez l'article", "Vous cherchez pourquoi c'est arrivé et corrigez vos registres selon le vrai comptage"], answer: 3, why: "Cherchez la cause des grands écarts et corrigez vos registres pour qu'ils correspondent au vrai comptage." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Point de commande et stock de sécurité",
          minutes: 6,
          goal: "Calculer quand recommander un article et combien en garder en plus.",
          text: [
            "Le point de commande est le niveau de stock qui vous dit de recommander. Si vous commandez quand vous l'atteignez, le nouveau stock devrait arriver avant que vous soyez en rupture.",
            "Point de commande = consommation moyenne par jour x délai de livraison en jours + stock de sécurité. Exemple : vous vendez 10 sacs de riz par jour, et votre fournisseur met 4 jours à livrer. Sans réserve, il vous faut 10 x 4 = 40 sacs pour tenir jusqu'à l'arrivée de la commande.",
            "Le stock de sécurité est un stock en plus pour les surprises : une journée chargée ou un camion en retard. Une méthode simple : décidez combien de jours en plus couvrir et multipliez par la consommation par jour. Avec 2 jours en plus, le stock de sécurité est de 10 x 2 = 20 sacs. Donc le point de commande est de 40 + 20 = 60 sacs. Quand vous descendez à 60, commandez.",
            "Gardez plus de stock de sécurité pour les articles les plus importants, ceux dont le délai est long ou peu fiable, et ceux que vous achetez chez un seul fournisseur. Gardez-en moins pour les articles qui s'abîment vite ou qui coûtent cher à stocker. Revérifiez les chiffres tous les quelques mois, car les ventes et les délais changent."
          ],
          steps: ["Trouvez la consommation moyenne par jour : unités utilisées sur 30 jours divisées par 30.", "Trouvez le délai de livraison en jours de votre fournisseur.", "Choisissez des jours en plus à couvrir et multipliez par la consommation par jour : c'est le stock de sécurité.", "Point de commande = consommation par jour x délai + stock de sécurité.", "Revérifiez les chiffres tous les quelques mois."],
          words: [["Point de commande", "le niveau de stock qui vous dit de recommander."], ["Stock de sécurité", "un stock en plus gardé pour les surprises comme les journées chargées ou les livraisons en retard."], ["Consommation moyenne par jour", "combien d'unités vous utilisez ou vendez lors d'une journée normale."]],
          slides: [
            { title: "Le point de commande", bullets: ["Le niveau qui vous dit de commander", "Le nouveau stock arrive avant la rupture"] },
            { title: "La formule", bullets: ["Consommation par jour x délai + stock de sécurité"] },
            { title: "Exemple calculé", bullets: ["10 sacs par jour, délai de 4 jours : 40 sacs", "Stock de sécurité, 2 jours en plus : 20 sacs", "Point de commande : 60 sacs"] },
            { title: "Combien de stock de sécurité", bullets: ["Plus : articles clés, fournisseurs lents ou peu fiables", "Moins : articles qui s'abîment ou coûtent cher à stocker", "Revérifiez tous les quelques mois"] }
          ],
          tryIt: "Pour un article, trouvez sa consommation moyenne par jour et son délai de livraison. Choisissez des jours de couverture en plus. Calculez le stock de sécurité et le point de commande, et écrivez-les sur une fiche que vous gardez près de cet article.",
          youCanNow: "calculer le point de commande et le stock de sécurité d'un article, et savoir quand garder plus ou moins de réserve.",
          quickCheck: [
            { objective: "O5", q: "Vous utilisez 6 unités par jour et voulez 3 jours de réserve en plus. Quel est le stock de sécurité ?", options: ["18", "9", "3", "63"], answer: 0, why: "Le stock de sécurité, c'est les jours en plus multipliés par la consommation par jour : 3 x 6 = 18." },
            { objective: "O5", q: "Le délai de livraison de votre fournisseur passe de 4 à 8 jours. Que faites-vous ?", options: ["Vous gardez le même point de commande", "Vous recalculez le point de commande avec le nouveau délai", "Vous arrêtez d'utiliser un stock de sécurité", "Vous commandez seulement quand vous êtes en rupture"], answer: 1, why: "Revérifiez les chiffres quand les délais changent, car le point de commande en dépend." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Un stock sur tableur et le premier entré, premier sorti",
          minutes: 6,
          goal: "Créer un tableur qui signale les articles à recommander et faire tourner le stock en premier entré, premier sorti.",
          text: [
            "Un tableur gratuit, comme Google Sheets ou Microsoft Excel sur le web, peut gérer le stock d'une petite entreprise. Faites une ligne par article et ces colonnes : Article, SKU, Fournisseur principal, Fournisseur de secours, Coût unitaire, Disponible, Consommation par jour, Délai (jours), Stock de sécurité, Point de commande et Statut.",
            "Laissez le tableur faire les calculs. Si la consommation par jour est dans la colonne G, le délai dans H et le stock de sécurité dans I, le point de commande en J2 est =G2*H2+I2. Le statut en K2 peut être =IF(F2<=J2,\"REORDER\",\"OK\"), qui affiche REORDER (à recommander) quand le disponible (colonne F) est égal ou inférieur au point de commande. Dans un Excel en français, IF s'appelle SI et les virgules deviennent souvent des points-virgules. Recopiez les formules vers le bas. Mettez à jour Disponible après chaque comptage ou livraison.",
            "Le premier entré, premier sorti (FIFO, first-in-first-out) veut dire que vous vendez ou utilisez d'abord le stock le plus ancien. Cela évite que la nourriture et les autres produits périment au fond de l'étagère. Quand du nouveau stock arrive, mettez-le derrière ou sous l'ancien, et étiquetez les cartons avec la date de réception.",
            "Un assistant d'IA peut vous aider à écrire ou corriger une formule de tableur. Décrivez vos colonnes avec des mots ; vous n'avez pas besoin de partager les prix de vos fournisseurs ni d'autres données privées de l'entreprise."
          ],
          steps: ["Ouvrez un tableur gratuit et ajoutez les onze titres de colonnes.", "Remplissez cinq articles.", "Dans la colonne Point de commande, tapez =G2*H2+I2 et recopiez vers le bas.", "Dans la colonne Statut, tapez =IF(F2<=J2,\"REORDER\",\"OK\") et recopiez vers le bas.", "Mettez à jour Disponible après chaque comptage ou livraison.", "Sur l'étagère, mettez le nouveau stock derrière l'ancien et étiquetez chaque carton avec la date."],
          words: [["Tableur", "une grille de lignes et de colonnes qui peut faire des calculs pour vous."], ["Formule", "une instruction dans une cellule du tableur qui calcule un résultat ; elle commence par =."], ["Premier entré, premier sorti (FIFO)", "utiliser ou vendre d'abord le stock le plus ancien."]],
          slides: [
            { title: "Une ligne par article", bullets: ["Article, SKU, fournisseur principal et de secours", "Coût unitaire, disponible, consommation par jour, délai", "Stock de sécurité, point de commande, statut"] },
            { title: "Laissez les formules travailler", bullets: ["Point de commande : =G2*H2+I2", "Statut : =IF(F2<=J2,\"REORDER\",\"OK\")", "Recopiez vers le bas ; mettez à jour le disponible après les comptages"] },
            { title: "Premier entré, premier sorti", bullets: ["Vendez ou utilisez d'abord le stock le plus ancien", "Le nouveau stock va derrière ou sous l'ancien", "Étiquetez chaque carton avec la date"] },
            { title: "L'IA peut aider pour les formules", bullets: ["Décrivez vos colonnes avec des mots", "Pas besoin de partager les prix ou les données privées"] }
          ],
          tryIt: "Tâche finale : créez votre tableur de stock pour cinq articles avec les onze colonnes, la formule du point de commande et le signal REORDER. Puis écrivez deux phrases sur la façon dont vous appliquerez le premier entré, premier sorti sur votre étagère.",
          youCanNow: "tenir un stock simple sur tableur qui signale quand recommander, et faire tourner le stock en premier entré, premier sorti.",
          quickCheck: [
            { objective: "O6", q: "Dans la feuille de cette leçon, que calcule =G2*H2+I2 ?", options: ["Le coût unitaire", "Le statut", "Le point de commande", "Le nombre de fournisseurs"], answer: 2, why: "La consommation par jour multipliée par le délai, plus le stock de sécurité, donne le point de commande." },
            { objective: "O6", q: "Vous voulez que l'IA vous aide à corriger une formule de tableur. Que lui donnez-vous ?", options: ["Les prix de vos fournisseurs et vos coordonnées bancaires", "Toute votre liste de clients", "Votre mot de passe de connexion", "Une description de vos colonnes en mots"], answer: 3, why: "Décrivez vos colonnes ; vous n'avez pas besoin de partager vos prix ni des données privées de l'entreprise." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Gérer les stocks",
        questions: [
          { objective: "O4", q: "Compter quelques articles chaque semaine pour que chaque article soit compté au fil du temps s'appelle :", options: ["Un inventaire physique complet", "La démarque", "Un inventaire tournant", "Un bon de commande"], answer: 2, why: "Un inventaire tournant répartit le comptage sur l'année." },
          { objective: "O5", q: "Vous utilisez 5 unités par jour, le délai est de 6 jours et le stock de sécurité est de 10. Quel est le point de commande ?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, plus 10 de stock de sécurité = 40." },
          { objective: "O5", q: "Quel article doit en général avoir plus de stock de sécurité ?", options: ["Un article clé acheté chez un seul fournisseur lent et peu fiable", "Un article qui s'abîme en un jour", "Un article que vous ne vendez plus", "Un article très cher qui se vend une fois par an"], answer: 0, why: "Les articles importants dont l'approvisionnement est risqué ont besoin de plus de marge." },
          { objective: "O6", q: "Dans le tableur, le disponible est de 25 et le point de commande de 30. Qu'affiche le statut ?", options: ["OK", "Erreur", "Rien", "REORDER"], answer: 3, why: "Le disponible est égal ou inférieur au point de commande, donc la formule affiche REORDER." },
          { objective: "O6", q: "Du lait frais arrive. En suivant le FIFO, où le mettez-vous ?", options: ["Devant l'ancien lait", "Derrière l'ancien lait", "À la poubelle", "Sur l'ancien lait pour qu'il se vende en premier"], answer: 1, why: "Le FIFO met le nouveau stock derrière l'ancien pour que le plus ancien se vende en premier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de l'approvisionnement et des stocks",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'une chaîne d'approvisionnement ?", options: ["Toutes les étapes qui amènent un produit du fabricant à votre client", "Une chaîne qui ferme votre réserve", "Une liste de clients", "Un type de prêt"], answer: 0, why: "Une chaîne d'approvisionnement couvre chaque étape du fabricant au client." },
      { objective: "O1", q: "Lequel est un point faible dans une chaîne d'approvisionnement ?", options: ["Deux fournisseurs fiables", "Un article important acheté chez un seul fournisseur", "Un délai de livraison court", "Des comptages exacts"], answer: 1, why: "Dépendre d'un seul fournisseur est risqué." },
      { objective: "O1", q: "Quelle est une bonne solution pour un point faible ?", options: ["L'ignorer", "Augmenter les prix", "Prévoir un fournisseur de secours ou garder du stock en plus", "Arrêter de compter"], answer: 2, why: "Les solutions de secours et le stock en plus vous protègent des ruptures." },
      { objective: "O2", q: "Une quantité minimum de commande, c'est :", options: ["Le maximum que vous pouvez acheter", "Le temps que met une commande", "L'adresse du fournisseur", "La plus petite commande qu'un fournisseur accepte"], answer: 3, why: "La MOQ est la plus petite commande qu'un fournisseur accepte." },
      { objective: "O2", q: "Qu'est-ce que le coût de revient rendu ?", options: ["Le prix plus le transport et les frais, par unité", "Seulement le prix affiché sur le site", "Le prix d'un billet d'avion", "Votre loyer"], answer: 0, why: "Le coût de revient rendu est le vrai coût de chaque unité quand elle arrive chez vous." },
      { objective: "O2", q: "Des conditions de paiement Net 30 veulent dire :", options: ["Payer 30 % maintenant", "Payer dans les 30 jours", "Payer après 30 commandes", "Payer $30"], answer: 1, why: "Net 30 veut dire que le montant total est dû dans les 30 jours." },
      { objective: "O2", q: "Avant de choisir un nouveau fournisseur, il est malin de :", options: ["Payer toute l'année d'avance", "Envoyer vos identifiants bancaires", "Obtenir un devis écrit et un échantillon, et commencer petit", "Payer par carte cadeau"], answer: 2, why: "Les devis, les échantillons et les petites premières commandes réduisent votre risque." },
      { objective: "O3", q: "Qu'est-ce qu'un bon de commande ?", options: ["La facture du fournisseur", "Un ticket de caisse client", "Un camion de livraison", "Votre commande écrite à un fournisseur"], answer: 3, why: "Un bon de commande est votre commande écrite qui liste les articles, les quantités et les prix." },
      { objective: "O3", q: "Un rapprochement à trois compare :", options: ["Le bon de commande, le bon de livraison et la facture", "Les logos de trois fournisseurs", "Les horaires de trois employés", "Trois comptes bancaires"], answer: 0, why: "Comparer les trois repère les erreurs avant de payer." },
      { objective: "O3", q: "Quand une livraison arrive, vous devez d'abord :", options: ["Payer la facture", "La compter et la comparer au bon de commande", "Jeter le bon de livraison", "La mettre directement en rayon sans vérifier"], answer: 1, why: "Vérifier d'abord repère les marchandises manquantes ou abîmées." },
      { objective: "O4", q: "Qu'est-ce que la démarque ?", options: ["Des emballages plus petits", "Des prix plus bas", "Le stock perdu à cause du vol, des dégâts, des produits abîmés ou des erreurs", "Une promotion"], answer: 2, why: "La démarque est l'écart entre les registres et le stock réel." },
      { objective: "O4", q: "Qu'est-ce qu'un SKU ?", options: ["Le nom d'un fournisseur", "Un type d'étagère", "Une entreprise de transport", "Un code court pour chaque article que vous stockez"], answer: 3, why: "SKU veut dire stock keeping unit, unité de gestion de stock." },
      { objective: "O4", q: "Votre comptage ne correspond pas à vos registres pour un article. Que faites-vous ?", options: ["Le faire recompter par une deuxième personne", "L'ignorer", "Changer les registres sans vérifier", "Jeter l'article"], answer: 0, why: "Un recomptage confirme le vrai chiffre avant de mettre les registres à jour." },
      { objective: "O5", q: "La formule du point de commande est :", options: ["Prix x quantité", "Consommation par jour x délai + stock de sécurité", "Disponible - ventes", "Stock de sécurité x 10"], answer: 1, why: "Elle couvre la consommation pendant le délai plus une marge." },
      { objective: "O5", q: "Vous vendez 8 unités par jour avec un délai de 5 jours et 16 unités de stock de sécurité. Point de commande ?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, plus 16 = 56." },
      { objective: "O5", q: "Le stock de sécurité, c'est :", options: ["Du stock enfermé dans un coffre-fort", "Du stock que vous ne vendez jamais", "Du vieux stock", "Du stock en plus gardé pour les surprises comme les livraisons en retard"], answer: 3, why: "Le stock de sécurité couvre les journées chargées et les retards." },
      { objective: "O5", q: "La consommation a été de 300 unités sur les 30 derniers jours. Quelle est la consommation moyenne par jour ?", options: ["10", "30", "300", "9 000"], answer: 0, why: "300 divisé par 30 jours, cela fait 10 par jour." },
      { objective: "O6", q: "Dans un tableur, une formule commence par :", options: ["#", "=", "@", "$"], answer: 1, why: "Les formules de tableur commencent par un signe égal." },
      { objective: "O6", q: "Que veut dire premier entré, premier sorti ?", options: ["Vendre d'abord le stock le plus récent", "Commander chez le premier fournisseur trouvé", "Vendre ou utiliser d'abord le stock le plus ancien", "Compter seulement la première étagère"], answer: 2, why: "Le FIFO évite que le stock plus ancien périme." },
      { objective: "O6", q: "Comment rendre le FIFO facile sur l'étagère ?", options: ["Mettre le nouveau stock devant", "Mélanger tous les cartons", "Enlever les étiquettes", "Étiqueter les cartons avec la date et mettre le nouveau stock derrière l'ancien"], answer: 3, why: "Les étiquettes et le rangement permettent de prendre facilement le stock le plus ancien en premier." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Articles et fournisseurs",
        objective: "O2",
        notYet: "Il manque à des articles le SKU, le coût unitaire ou le fournisseur principal.",
        meets: "Cinq articles, chacun avec son SKU, son fournisseur principal, son fournisseur de secours et son coût unitaire.",
        exceeds: "Le coût unitaire est le coût de revient rendu, transport et frais compris."
      },
      {
        name: "Chiffres de stock et de consommation",
        objective: "O4",
        notYet: "Le disponible, la consommation par jour ou le délai sont devinés ou manquent.",
        meets: "Le disponible vient d'un vrai comptage, avec la consommation par jour et le délai remplis.",
        exceeds: "Indique la date du comptage et qui a compté."
      },
      {
        name: "Point de commande et stock de sécurité",
        objective: "O5",
        notYet: "Le point de commande est tapé à la main ou mal calculé.",
        meets: "Un stock de sécurité fixé et un point de commande calculé par une formule pour chaque article.",
        exceeds: "Plus de stock de sécurité est gardé pour les articles clés ou à fournisseur unique, avec une raison."
      },
      {
        name: "Signal de commande",
        objective: "O6",
        notYet: "Pas de colonne Statut, ou elle ne change pas quand le stock est bas.",
        meets: "Le statut affiche REORDER quand le disponible est égal ou inférieur au point de commande.",
        exceeds: "L'apprenant le teste en changeant le disponible et en vérifiant le signal."
      },
      {
        name: "Plan premier entré, premier sorti",
        objective: "O6",
        notYet: "Pas de plan pour faire tourner le stock.",
        meets: "Un plan écrit pour dater les cartons et mettre le nouveau stock derrière l'ancien.",
        exceeds: "Dit qui s'en charge et quand, par exemple à chaque livraison."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Patrons qui utilisent toujours la feuille de stock 30 jours plus tard (enquête de suivi)",
      "Patrons qui signalent moins de ruptures ou moins de stock abîmé ou gaspillé dans les 60 jours",
      "Patrons qui prévoient un fournisseur de secours pour au moins un article clé"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un tableur gratuit comme Google Sheets ou Excel sur le web",
      "Une liste de cinq articles que vous achetez ou vendez, avec des commandes et des bons de livraison récents",
      "Du papier, un stylo et une calculatrice pour compter et s'entraîner aux calculs",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites ensemble l'exemple du point de commande au tableau avant que les apprenants utilisent leurs propres chiffres.",
      "Apportez un tableur d'exemple avec les formules déjà en place pour les apprenants qui découvrent les tableurs.",
      "Prévenez les apprenants des arnaques de fournisseurs qui demandent des virements, des cartes cadeaux ou des cryptomonnaies.",
      "Laissez les apprenants utiliser des articles d'exemple s'ils ne veulent pas montrer leurs vrais prix en classe.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
