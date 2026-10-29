"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-retail.js). See scripts/koachlearn-courses/README.md, "Translations".

const FTC_ADS = { name: "FTC : les bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "L'IA pour les commerces de détail",
  skills: "Rédiger des descriptions de produits, Créer des étiquettes de rayon, Suivre le stock dans un tableur, Fixer des seuils de réapprovisionnement, Lire les tendances de vente, Planifier une promotion saisonnière",
  outcome: "gérer la partie administrative d'une petite boutique avec l'aide de l'IA : rédiger des descriptions de produits et des étiquettes de rayon honnêtes, tenir une fiche de stock avec des seuils de réapprovisionnement, repérer vos meilleures et vos plus faibles ventes, et planifier une promotion saisonnière à partir de vos propres chiffres.",
  about: [
    "Ce cours s'adresse aux patrons et aux employés de petits commerces : boutiques de vêtements, épiceries de quartier, magasins de produits de beauté, boutiques de cadeaux, friperies, et personnes qui vendent en ligne ou au marché. Beaucoup de nos élèves sont des commerçants issus de minorités qui tiennent une boutique avec une petite équipe.",
    "Vous utiliserez un assistant d'IA gratuit et un tableur (Google Sheets ou Excel) pour présenter vos produits, suivre votre stock pour être moins souvent en rupture, voir ce qui se vend, et planifier une promotion fondée sur des faits plutôt que sur des suppositions.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez une boîte à outils pour votre boutique : cinq descriptions de produits honnêtes, trois étiquettes de rayon, une fiche de stock d'au moins 15 articles avec seuils de réapprovisionnement et alerte de commande, une courte note sur vos trois meilleures et vos trois plus faibles ventes, et un plan d'une page pour une promotion saisonnière avec les articles, le prix, les dates et la façon de mesurer le résultat.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires et des employés de petits commerces : boutiques, épiceries de quartier et bodegas, magasins de produits de beauté, boutiques de cadeaux, friperies, et personnes qui vendent en ligne ou sur les marchés. Beaucoup sont issus de minorités et tiennent une boutique avec une petite équipe.",
    startingPoint: "Ils connaissent bien leurs produits et leurs clients et utilisent une caisse ou un système de point de vente (POS). Ils utilisent peu les tableurs pour le stock, les rapports de ventes ou l'IA pour écrire, et les promotions sont souvent prévues au jugé.",
    gap: "Les boutiques perdent de l'argent quand elles manquent de leurs meilleures ventes, gardent trop de stock qui se vend mal, affichent de mauvais prix ou font des promotions qui ne rapportent rien. Les propriétaires doivent utiliser l'IA et un tableur pour écrire des textes de produits honnêtes, suivre le stock, lire les ventes et prévoir des promotions à partir de leurs propres chiffres, tout en protégeant les données de la boutique.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un ordinateur est préférable pour les tableurs ; un téléphone suffit pour écrire et faire des étiquettes",
      "Temps : des leçons d'environ 5 minutes, à caser autour des heures d'ouverture",
      "Règles : les règles de la FTC sur la vérité dans la publicité pour les affirmations sur les produits, et les prix affichés doivent correspondre à ceux de la caisse",
      "Vie privée et sécurité : aucun mot de passe de fournisseur ni donnée de client dans l'IA ; seulement les totaux par article"
    ],
    prerequisites: "Le cours « Les outils d'IA essentiels pour les petites entreprises » est utile pour les apprenants qui découvrent les tableurs."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des faits de l'étiquette ou de la facture d'un produit", action: "rédiger avec l'aide de l'IA une description de produit courte et honnête", standard: "avec chaque affirmation vérifiée sur l'étiquette et rien que vous ne pouvez pas prouver" },
    { id: "O2", condition: "Avec un assistant d'IA", action: "créer des étiquettes de rayon et des avis en magasin clairs", standard: "avec des prix qui correspondent à la caisse, de vraies dates de fin pour les soldes et des traductions vérifiées par une personne qui parle bien la langue" },
    { id: "O3", condition: "Avec Google Sheets ou Excel", action: "construire une fiche de stock avec des seuils de réapprovisionnement et un signal pour recommander", standard: "avec au moins 15 articles, des seuils corrects et une formule testée" },
    { id: "O4", condition: "À partir de 4 à 8 semaines de ventes par article", action: "trouver avec l'aide de l'IA vos meilleures et vos plus faibles ventes", standard: "en nommant les 3 premières et les 3 dernières, et en confirmant toute tendance de l'IA dans vos propres chiffres" },
    { id: "O5", condition: "À partir de vos chiffres de ventes et de stock", action: "planifier une promotion saisonnière", standard: "avec les articles, le prix, le bénéfice par vente, les dates et assez de stock, le tout décidé par vous" },
    { id: "O6", condition: "Pour une promotion et les données de votre boutique", action: "mesurer les résultats de la promotion et protéger les données de la boutique", standard: "en comparant avec les mêmes semaines d'avant, en vérifiant les calculs de l'IA et en gardant les mots de passe hors de l'IA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Produits, étiquettes et stock",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rédiger des descriptions de produits qui vendent, honnêtement",
          minutes: 5,
          goal: "Rédiger des descriptions de produits courtes et honnêtes avec l'aide de l'IA.",
          text: [
            "Une description de produit dit au client ce que c'est, à qui c'est destiné et pourquoi il le voudra. Elle sert sur une étiquette, votre site, une place de marché en ligne ou une publication sur les réseaux sociaux.",
            "Donnez les faits à l'IA : \"Écris une description de 40 mots pour une crème corporelle au beurre de karité de 350 ml, sans parfum, fabriquée au Ghana, pour peau sèche. Ton chaleureux. Mentionne la contenance.\" L'IA rend les mots aimables ; vous fournissez les faits.",
            "Vérifiez chaque fait : taille, matières, lieu de fabrication, conseils d'entretien. Retirez les affirmations que vous ne pouvez pas prouver, comme \"guérit l'eczéma\" ou \"la meilleure de la ville\". La FTC (l'agence américaine de protection des consommateurs) exige que les publicités soient vraies et appuyées par des preuves."
          ],
          steps: ["Écrivez les faits du produit : nom, taille, matière, origine, pour qui.", "Demandez à l'IA une courte description dans votre style.", "Vérifiez chaque fait sur l'étiquette ou la facture.", "Retirez les affirmations que vous ne pouvez pas prouver."],
          words: [["Description de produit", "un court texte qui dit aux clients ce qu'est un produit et pourquoi ils le voudront."], ["Affirmation", "une déclaration de fait sur un produit, par exemple ce qu'il fait."]],
          slides: [
            { title: "Quoi, pour qui et pourquoi", bullets: ["Ce que c'est", "À qui c'est destiné", "Pourquoi le client le voudra"] },
            { title: "Vous donnez les faits", bullets: ["Nom, taille, matière, origine", "L'IA rend les mots aimables"] },
            { title: "Restez honnête", bullets: ["Vérifiez sur l'étiquette ou la facture", "Pas d'allégation de santé ni de \"meilleur\" sans preuve", "FTC : les affirmations doivent être vraies et prouvées"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Choisissez cinq produits de votre boutique. Écrivez les faits de chacun, demandez à l'IA une description de 30 à 50 mots, et vérifiez-la sur l'étiquette.",
          youCanNow: "rédiger des descriptions de produits honnêtes avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O1", q: "Où vérifiez-vous les faits d'une description de produit ?", options: ["Sur l'étiquette ou la facture", "Sur le site d'un concurrent", "Dans ce que l'IA a écrit", "Dans la supposition d'un client"], answer: 0, why: "L'étiquette ou la facture contient les vrais faits sur le produit." },
            { objective: "O1", q: "L'IA écrit qu'un shampoing « arrête la chute des cheveux », mais l'étiquette ne le dit pas. Que faites-vous ?", options: ["Le garder pour vendre plus", "Ajouter un point d'interrogation", "Le retirer, sauf si vous pouvez le prouver", "L'écrire en plus petit"], answer: 2, why: "Les affirmations doivent être vraies et appuyées par des preuves." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Étiquettes de rayon, cartes de prix et avis en magasin",
          minutes: 4,
          goal: "Créer rapidement des étiquettes de rayon et des avis clairs.",
          text: [
            "Les affiches répondent aux questions avant que les clients ne les posent : prix, soldes, nouveautés, politique de retour, \"demandez-nous...\". Des affiches claires font gagner du temps au personnel.",
            "Demandez à l'IA des textes courts : \"Écris cinq étiquettes de rayon pour mon magasin de beauté : arrivage de mèches à tresser, 2 achetés le 3e offert sur le gel pour les bords jusqu'au 31 mai, retours acceptés sous 14 jours avec ticket. Moins de 12 mots chacune.\" Puis mettez-les en page dans Canva ou un document et imprimez.",
            "Les prix affichés doivent correspondre à ceux de la caisse. Une affiche de promotion indique la vraie date de fin et les éventuelles limites. Si vous servez des clients qui parlent une autre langue, demandez une traduction à l'IA, puis faites-la vérifier par une personne qui parle couramment cette langue."
          ],
          steps: ["Listez les affiches dont vous avez besoin.", "Demandez à l'IA des textes courts.", "Mettez-les en page et imprimez-les.", "Vérifiez que chaque prix correspond à la caisse.", "Faites vérifier toute traduction par une personne qui parle couramment la langue."],
          words: [["Étiquette de rayon", "une petite affiche sur une étagère qui indique un prix, une promotion ou une information."], ["Politique de retour", "vos règles sur quand les clients peuvent rapporter un article."]],
          slides: [
            { title: "Les affiches font gagner du temps", bullets: ["Prix, promotions et nouveautés", "Politique de retour et \"demandez-nous\""] },
            { title: "L'IA écrit, vous mettez en page", bullets: ["Demandez des textes courts, moins de 12 mots", "Mettez en page dans Canva ou un document"] },
            { title: "Vérifiez avant d'afficher", bullets: ["Le prix correspond à la caisse", "Date de fin et limites de la promotion", "Traductions vérifiées par une personne qui parle la langue"] }
          ],
          tryIt: "Demandez à l'IA trois étiquettes de rayon pour votre boutique. Vérifiez chaque prix par rapport à votre caisse, puis créez-les et imprimez-les ou enregistrez-les.",
          youCanNow: "créer avec l'aide de l'IA des étiquettes de rayon et des avis clairs et exacts.",
          quickCheck: [
            { objective: "O2", q: "Que doit montrer une affiche de soldes ?", options: ["Seulement le mot SOLDES", "La vraie date de fin et les éventuelles limites", "Le numéro de téléphone du propriétaire", "Tous les articles du magasin"], answer: 1, why: "Une affiche de soldes a besoin de la vraie date de fin et des limites pour être honnête." },
            { objective: "O2", q: "L'IA a traduit votre étiquette de rayon en espagnol. Que faites-vous avant de l'imprimer ?", options: ["L'imprimer tout de suite", "Demander à l'IA de se vérifier elle-même", "Retirer l'anglais", "La faire vérifier par une personne qui parle bien la langue"], answer: 3, why: "Une personne qui parle bien la langue peut repérer les erreurs de traduction." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tenir une fiche de stock avec des seuils de réapprovisionnement",
          minutes: 6,
          goal: "Construire un tableur de stock qui signale ce qu'il faut recommander.",
          text: [
            "Être en rupture de votre meilleure vente fait perdre des ventes ; trop de stock qui se vend mal immobilise votre argent. Une simple fiche de stock aide. Colonnes : Article, Fournisseur, En stock, Vendus par semaine, Jours de livraison, Seuil de commande, Recommander ?",
            "Le seuil de commande est le moment où il faut recommander. Une règle simple : ventes par semaine x semaines de livraison + un petit surplus (stock de sécurité). Si vous vendez 10 par semaine, que la livraison prend 1 semaine et que vous gardez 5 en plus, recommandez à 15.",
            "Demandez à l'IA de vous aider avec la formule : \"Dans Google Sheets, écris une formule qui affiche REORDER quand la colonne C est inférieure ou égale à la colonne F.\" Une réponse courante est =IF(C2<=F2,\"REORDER\",\"\") (en version française du tableur : =SI(C2<=F2;\"COMMANDER\";\"\")). Testez-la sur quelques lignes pour vérifier qu'elle marche."
          ],
          steps: ["Créez les sept colonnes.", "Remplissez vos 15 articles principaux.", "Calculez chaque seuil : ventes par semaine x semaines de livraison + stock de sécurité.", "Demandez à l'IA une formule IF (SI) qui signale les commandes.", "Testez-la sur quelques lignes, et mettez à jour En stock chaque semaine."],
          words: [["Stock (inventaire)", "les produits que vous avez sous la main pour vendre."], ["Seuil de commande", "la quantité restante à partir de laquelle vous recommandez."], ["Stock de sécurité", "des articles en plus, gardés au cas où les ventes augmentent ou la livraison est en retard."]],
          slides: [
            { title: "Pourquoi suivre le stock", bullets: ["Une rupture fait perdre des ventes", "Trop de stock lent immobilise l'argent"] },
            { title: "Colonnes de la fiche de stock", bullets: ["Article, Fournisseur, En stock", "Vendus par semaine, Jours de livraison", "Seuil de commande, Recommander ?"] },
            { title: "Seuil de commande", bullets: ["Ventes par semaine x semaines de livraison + stock de sécurité", "Exemple : 10 x 1 + 5 = recommander à 15"] },
            { title: "Laissez la fiche vous prévenir", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Testez sur quelques lignes", "Mettez à jour En stock chaque semaine"] }
          ],
          tryIt: "Construisez votre fiche de stock avec au moins 15 articles, calculez les seuils de commande, et ajoutez une formule IF qui affiche REORDER. Testez-la en changeant un nombre dans En stock.",
          youCanNow: "tenir une fiche de stock qui vous dit quand recommander.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que le stock de sécurité ?", options: ["Le stock gardé dans une pièce fermée à clé", "Les articles qui ne se vendent jamais", "Des articles en plus au cas où les ventes augmentent ou la livraison est en retard", "Le stock que vous renvoyez au fournisseur"], answer: 2, why: "Le stock de sécurité couvre les surprises dans les ventes ou les livraisons." },
            { objective: "O3", q: "L'IA a écrit une formule pour votre signal de réapprovisionnement. Que faites-vous ensuite ?", options: ["La tester sur quelques lignes en changeant un chiffre « En stock »", "Lui faire confiance pour tous les articles", "Supprimer la formule", "La copier dans toutes les feuilles sans vérifier"], answer: 0, why: "Tester une formule sur quelques lignes montre si elle marche." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Produits, étiquettes et stock",
        questions: [
          { objective: "O1", q: "Qui fournit les faits d'une description de produit ?", options: ["Les suppositions de l'IA", "Vous, à partir de l'étiquette ou de la facture", "Un concurrent", "Un avis client"], answer: 1, why: "L'IA écrit les mots ; vous fournissez des faits vérifiés." },
          { objective: "O1", q: "L'IA écrit que votre crème \"guérit l'eczéma\". Que faites-vous ?", options: ["Ajouter \"garanti\"", "La garder", "L'écrire plus gros", "La retirer, sauf si vous pouvez le prouver"], answer: 3, why: "La FTC exige des preuves pour les affirmations." },
          { objective: "O2", q: "Une affiche de promotion doit indiquer :", options: ["La vraie date de fin et les éventuelles limites", "Aucun prix", "Votre mot de passe", "Un faux ancien prix"], answer: 0, why: "Une affiche honnête indique les dates et les limites." },
          { objective: "O3", q: "Vous vendez 8 par semaine, la livraison prend 2 semaines, le stock de sécurité est de 4. Quel est le seuil de commande ?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { objective: "O3", q: "Que fait =IF(C2<=F2,\"REORDER\",\"\") ?", options: ["Elle additionne les ventes", "Elle supprime la ligne", "Elle affiche REORDER quand le stock est au seuil de commande ou en dessous", "Elle envoie une commande au fournisseur"], answer: 2, why: "Elle signale les articles à recommander." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Lire les ventes et planifier des promotions",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trouver vos meilleures et vos plus faibles ventes",
          minutes: 5,
          goal: "Utiliser un rapport de ventes et l'aide de l'IA pour trouver vos articles en tête et en queue.",
          text: [
            "La plupart des systèmes de caisse (POS) peuvent exporter un rapport des ventes par article dans un fichier que vous ouvrez dans un tableur. Si le vôtre ne le peut pas, un simple décompte par article chaque semaine suffit.",
            "Triez par unités vendues et par montant des ventes. Vos meilleures ventes méritent une bonne place en rayon et ne doivent jamais manquer. Vos ventes les plus lentes ont peut-être besoin d'un meilleur emplacement, d'un lot, d'une baisse de prix ou d'être retirées.",
            "Vous pouvez coller les totaux par article (sans données de clients) dans un assistant d'IA : \"Voici 8 semaines de ventes par article de ma boutique de cadeaux. Quels articles montent, baissent ou sont saisonniers ? Quelles questions devrais-je me poser ?\" Prenez les réponses comme des idées et confirmez-les dans votre rapport."
          ],
          steps: ["Exportez un rapport des ventes par article ou comptez à la main.", "Triez par unités et par montant.", "Repérez vos 3 premiers et vos 3 derniers.", "Demandez à l'IA des tendances avec les totaux par article seulement.", "Confirmez chaque tendance dans votre rapport."],
          words: [["POS", "point de vente : le système de caisse qui enregistre les ventes."], ["Exporter", "enregistrer les données d'un système dans un fichier que l'on peut ouvrir ailleurs."], ["Démarque", "une baisse de prix pour écouler un stock qui se vend mal."]],
          slides: [
            { title: "Obtenez les chiffres", bullets: ["Exportez un rapport des ventes par article depuis votre caisse", "Ou comptez les ventes par article chaque semaine"] },
            { title: "Triez de deux façons", bullets: ["Par unités vendues", "Par montant des ventes", "Repérez les 3 premiers et les 3 derniers"] },
            { title: "L'IA pour les tendances", bullets: ["Totaux par article seulement, sans données de clients", "En hausse, en baisse, saisonnier ?", "Confirmez dans votre rapport"] }
          ],
          tryIt: "Prenez 4 à 8 semaines de ventes par article. Trouvez vos 3 premiers et vos 3 derniers, puis demandez à l'IA quelles tendances elle voit et confirmez-en une.",
          youCanNow: "trouver vos meilleures et vos plus faibles ventes et vérifier les idées de l'IA avec vos propres chiffres.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire POS ?", options: ["Prix sur le rayon", "Point of sale, c'est-à-dire point de vente", "Fiche de commande de produits", "Bénéfice ou ventes"], answer: 1, why: "POS veut dire point de vente : le système qui enregistre vos ventes." },
            { objective: "O4", q: "Vous voulez que l'IA vous aide à lire vos ventes. Que collez-vous ?", options: ["Le nom et le numéro de carte des clients", "Le mot de passe de votre fournisseur", "Tous vos identifiants de POS", "Seulement les totaux par article"], answer: 3, why: "Les totaux par article suffisent, et les données privées restent hors de l'IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planifier une promotion saisonnière à partir de vos chiffres",
          minutes: 5,
          goal: "Planifier une promotion avec les articles, le prix, les dates et un contrôle du bénéfice.",
          text: [
            "Le commerce vit au rythme des saisons : rentrée scolaire, fêtes de fin d'année, remises de diplômes, été, fêtes locales et célébrations culturelles importantes pour vos clients. Planifiez les promotions un mois à l'avance.",
            "Servez-vous de vos chiffres : mettez en avant les articles qui se vendent bien à cette saison, ou associez une vente lente à une meilleure vente. Demandez des idées à l'IA : \"Ma meilleure vente, ce sont les mèches à tresser ; ma vente lente, les bonnets en satin. Donne-moi trois idées de lots pour la rentrée qui gardent un bénéfice.\"",
            "Vérifiez le calcul : prix, coût, bénéfice par vente, et combien il faut en vendre. Écrivez les dates et les limites, et commandez assez de stock grâce à votre fiche de réapprovisionnement."
          ],
          steps: ["Choisissez une saison ou un événement.", "Choisissez les articles à partir de votre rapport de ventes.", "Demandez à l'IA des idées de promotion ou de lot.", "Vérifiez le bénéfice par vente sur papier.", "Fixez les dates et les limites, et commandez le stock."],
          words: [["Promotion", "une offre spéciale pendant une période donnée."], ["Lot", "deux articles ou plus vendus ensemble à un seul prix."]],
          slides: [
            { title: "Planifiez un mois à l'avance", bullets: ["Rentrée, fêtes de fin d'année, diplômes", "Fêtes locales et célébrations culturelles"] },
            { title: "Servez-vous de vos chiffres", bullets: ["Mettez en avant les meilleures ventes de la saison", "Associez une vente lente à une meilleure vente"] },
            { title: "Vérifiez avant de lancer", bullets: ["Prix, coût et bénéfice par vente", "Dates et limites", "Assez de stock commandé"] }
          ],
          tryIt: "Planifiez une promotion pour la prochaine saison : articles, prix, bénéfice par vente, dates et quantité de stock nécessaire.",
          youCanNow: "planifier une promotion saisonnière à partir de vos propres chiffres de vente.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un lot ?", options: ["Des articles vendus ensemble pour un seul prix", "Une boîte de retours", "Une livraison d'un fournisseur", "Un type d'étiquette"], answer: 0, why: "Un lot regroupe des articles pour un seul prix, souvent une vente faible avec une meilleure vente." },
            { objective: "O5", q: "Vous prévoyez une promotion pour les fêtes. Que vérifiez-vous avant de la lancer ?", options: ["Seulement l'aspect de l'affiche", "Le prix d'un concurrent", "Le bénéfice par vente et si vous avez assez de stock", "Si l'IA aime l'idée"], answer: 2, why: "Une promotion doit rapporter un bénéfice et avoir assez de stock derrière elle." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer la promotion et protéger votre boutique",
          minutes: 5,
          goal: "Mesurer les résultats d'une promotion et protéger les données de la boutique.",
          text: [
            "Décidez comment vous allez mesurer avant de commencer : unités vendues des articles en promotion, ventes totales pendant les dates comparées aux mêmes semaines d'avant, et bénéfice. Un code promo ou un bouton à part sur la caisse pour le lot facilite le suivi.",
            "Ensuite, demandez à l'IA de vous aider à écrire un court bilan à partir de vos chiffres : ce qui a marché, ce qui n'a pas marché, quoi essayer la prochaine fois. Vérifiez ses calculs avec votre fiche.",
            "Protégez les données de la boutique : ne collez pas de noms de clients, de numéros de carte, de mots de passe de fournisseurs ni d'informations sur le personnel dans les outils d'IA. Méfiez-vous des fausses factures de fournisseurs et des demandes de paiement \"urgentes\" ; appelez le fournisseur à un numéro que vous connaissez."
          ],
          steps: ["Choisissez vos mesures avant la promotion.", "Ajoutez un code ou un bouton de caisse pour la suivre.", "Comparez avec les mêmes semaines d'avant.", "Demandez à l'IA d'aider à faire le bilan, et vérifiez les calculs.", "Gardez les données des clients et des fournisseurs hors de l'IA."],
          words: [["Période de comparaison", "une période antérieure à laquelle vous comparez les résultats, comme les mêmes semaines du mois précédent."], ["Code promo", "un code qui permet de suivre qui a utilisé une offre."]],
          slides: [
            { title: "Décidez des mesures d'abord", bullets: ["Unités des articles en promotion", "Ventes comparées aux mêmes semaines d'avant", "Bénéfice"] },
            { title: "Facilitez le suivi", bullets: ["Code promo ou bouton de caisse pour le lot", "L'IA aide à écrire le bilan ; vous vérifiez les calculs"] },
            { title: "Protégez votre boutique", bullets: ["Aucune donnée de client, de carte, de fournisseur ou du personnel dans l'IA", "Pour une facture, appelez le fournisseur à un numéro connu"] }
          ],
          tryIt: "Tâche finale : rassemblez votre boîte à outils : cinq descriptions de produits, trois étiquettes de rayon, votre fiche de stock avec alertes de commande, vos meilleures et plus faibles ventes, et votre plan de promotion avec la façon de le mesurer.",
          youCanNow: "mener et mesurer une promotion et utiliser l'IA en toute sécurité pour l'administration de votre boutique.",
          quickCheck: [
            { objective: "O6", q: "Comment mesurer une promotion ?", options: ["D'après l'affluence que vous avez ressentie", "En comparant avec les mêmes semaines d'avant", "En comptant les affiches imprimées", "En demandant à l'IA de deviner"], answer: 1, why: "Comparer avec les mêmes semaines d'avant montre le vrai changement." },
            { objective: "O6", q: "Un e-mail dit que votre fournisseur a un nouveau compte bancaire et que vous devez payer aujourd'hui. Que faites-vous ?", options: ["Payer tout de suite", "Répondre avec vos identifiants bancaires", "Le transférer à vos clients", "Appeler le fournisseur à un numéro que vous connaissez déjà"], answer: 3, why: "Appeler un numéro connu permet de vérifier sans risque une demande de paiement pressante." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Lire les ventes et planifier des promotions",
        questions: [
          { objective: "O4", q: "Votre caisse ne peut pas exporter de rapports. Que pouvez-vous faire ?", options: ["Tenir un simple décompte par article chaque semaine", "Deviner", "Demander à un concurrent", "Arrêter le suivi"], answer: 0, why: "Un décompte à la main montre quand même les tendances." },
          { objective: "O4", q: "Qu'est-ce qui peut aider un article qui se vend mal ?", options: ["En commander plus", "Le cacher", "Augmenter beaucoup son prix", "Un lot avec une meilleure vente"], answer: 3, why: "Les lots aident à écouler le stock lent." },
          { objective: "O5", q: "Avant de lancer un lot, vous devez vérifier :", options: ["Seulement la couleur", "Le bénéfice par vente", "Votre horoscope", "Rien"], answer: 1, why: "Une promotion doit quand même rapporter de l'argent." },
          { objective: "O6", q: "Comment suivre facilement une promotion ?", options: ["Un code promo ou un bouton de caisse dédié", "De mémoire", "En demandant à l'IA de deviner", "En comptant les voitures des clients"], answer: 0, why: "Les codes et les boutons enregistrent chaque vente." },
          { objective: "O6", q: "Un e-mail dit que votre fournisseur a changé de coordonnées bancaires et qu'il faut payer aujourd'hui. Vous :", options: ["Répondez avec votre mot de passe", "Payez tout de suite", "Appelez le fournisseur à un numéro que vous connaissez", "Transférez l'e-mail aux clients"], answer: 2, why: "Les fausses factures de fournisseurs sont une arnaque courante." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les commerces de détail",
    questions: [
      { objective: "O1", q: "Une description de produit répond à :", options: ["Votre mot de passe", "Ce que c'est, pour qui, pourquoi le client le voudra", "La banque du fournisseur", "Rien"], answer: 1, why: "Ces trois éléments aident le client à décider." },
      { objective: "O1", q: "Où vérifiez-vous les faits d'un produit ?", options: ["Chez un concurrent", "Auprès de l'IA", "Dans une publication sur les réseaux", "Sur l'étiquette ou la facture"], answer: 3, why: "L'étiquette et la facture contiennent les vrais faits." },
      { objective: "O1", q: "Selon la FTC, les affirmations publicitaires doivent être :", options: ["En majuscules", "Excitantes", "Courtes", "Vraies et appuyées par des preuves"], answer: 3, why: "C'est la règle de la FTC." },
      { objective: "O2", q: "Les prix sur les étiquettes de rayon doivent :", options: ["Être arrondis au-dessus", "Correspondre à la caisse", "Être cachés", "Changer chaque jour"], answer: 1, why: "Des prix différents mécontentent les clients." },
      { objective: "O2", q: "Une affiche traduite doit être vérifiée par :", options: ["L'imprimeur", "Personne", "Une personne qui parle couramment la langue", "Un site web au hasard"], answer: 2, why: "Les traductions de l'IA peuvent contenir des erreurs." },
      { objective: "O2", q: "Une bonne étiquette de rayon fait :", options: ["Moins de 12 mots environ", "Une page entière", "Rien, elle est vide", "Des lettres minuscules"], answer: 0, why: "Une affiche courte se lit vite." },
      { objective: "O3", q: "Qu'est-ce que le stock de sécurité ?", options: ["Une assurance", "Un coffre-fort", "Des articles en plus au cas où les ventes augmentent ou la livraison est en retard", "Des articles périmés"], answer: 2, why: "Il protège contre la rupture." },
      { objective: "O3", q: "5 vendus par semaine, livraison en 2 semaines, stock de sécurité 5. Seuil de commande ?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { objective: "O3", q: "Quand l'IA écrit une formule de tableur, vous devez :", options: ["Lui faire confiance", "La tester sur quelques lignes", "La supprimer", "L'imprimer"], answer: 1, why: "Les formules peuvent être fausses." },
      { objective: "O3", q: "Pourquoi suivre le stock ?", options: ["Pour embrouiller le personnel", "Pour s'amuser", "Parce que l'IA le dit", "Pour être moins en rupture et éviter trop de stock lent"], answer: 3, why: "Les deux vous coûtent de l'argent." },
      { objective: "O4", q: "POS veut dire :", options: ["Point de vente", "Prix du service", "Bordereau de la poste", "Fiche de commande produit"], answer: 0, why: "C'est le système qui enregistre les ventes." },
      { objective: "O4", q: "Trier par montant des ventes montre :", options: ["Les heures du personnel", "Les articles les plus lourds", "Les articles les plus récents", "Les articles qui rapportent le plus d'argent"], answer: 3, why: "Le montant montre le chiffre d'affaires par article." },
      { objective: "O4", q: "Quand vous collez des ventes dans l'IA, incluez :", options: ["Les numéros de carte", "Les noms des clients", "Les totaux par article seulement", "Les mots de passe des fournisseurs"], answer: 2, why: "Aucune donnée privée." },
      { objective: "O5", q: "Quand planifier une promotion saisonnière ?", options: ["Le jour même", "Environ un mois à l'avance", "Après la saison", "Jamais"], answer: 1, why: "Il faut le temps de commander le stock et de faire les affiches." },
      { objective: "O5", q: "Qu'est-ce qu'un lot ?", options: ["Un article cassé", "Une taxe", "Un prêt", "Des articles vendus ensemble à un seul prix"], answer: 3, why: "Un lot regroupe des articles." },
      { objective: "O5", q: "Avant une promotion, votre fiche de réapprovisionnement sert à :", options: ["Cacher les prix", "Supprimer des articles", "Vérifier que vous avez assez de stock", "Payer le personnel"], answer: 2, why: "Une rupture gâche une promotion." },
      { objective: "O6", q: "On mesure une promotion en la comparant avec :", options: ["Les mêmes semaines d'avant", "La supposition d'un concurrent", "Rien", "L'année prochaine"], answer: 0, why: "Une période de comparaison montre le changement." },
      { objective: "O6", q: "Quand l'IA écrit le bilan de votre promotion, vous :", options: ["Croyez chaque chiffre", "Vérifiez ses calculs avec votre fiche", "Ne le lisez pas", "Le publiez sans le lire"], answer: 1, why: "L'IA peut faire des erreurs de calcul." },
      { objective: "O6", q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA ?", options: ["Les noms d'articles", "Les mots de passe des comptes fournisseurs", "Les totaux de la semaine", "Les noms des saisons"], answer: 1, why: "Les mots de passe sont privés." },
      { objective: "O5", q: "Quelle décision ce cours vous laisse-t-il, et pas à l'IA ?", options: ["Quels articles mettre en promotion et à quel prix", "La formulation d'une légende", "Des idées de lots", "Le texte d'une affiche"], answer: 0, why: "L'IA propose ; vous décidez avec vos chiffres." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      6,
      7,
      10,
      12,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Descriptions de produits",
        objective: "O1",
        notYet: "Moins de cinq, ou une affirmation qui n'est pas sur l'étiquette.",
        meets: "Cinq descriptions courtes et honnêtes, vérifiées sur l'étiquette.",
        exceeds: "Chacune dit ce qu'est le produit, pour qui il est et pourquoi on le veut."
      },
      {
        name: "Étiquettes de rayon",
        objective: "O2",
        notYet: "Moins de trois, ou un prix qui ne correspond pas à la caisse.",
        meets: "Trois étiquettes claires avec des prix qui correspondent à la caisse.",
        exceeds: "Les affiches de soldes montrent la date de fin et les limites ; les traductions ont été vérifiées."
      },
      {
        name: "Fiche de stock",
        objective: "O3",
        notYet: "Moins de 15 articles, ou pas de signal de réapprovisionnement qui marche.",
        meets: "15 articles ou plus avec des seuils de réapprovisionnement et un signal REORDER testé.",
        exceeds: "Les seuils comprennent un stock de sécurité pour chaque article."
      },
      {
        name: "Meilleures et plus faibles ventes",
        objective: "O4",
        notYet: "Pas de liste des premières ou des dernières, ou une liste fondée sur une supposition.",
        meets: "Les 3 premières et les 3 dernières, à partir des vrais chiffres de ventes.",
        exceeds: "Une tendance de l'IA confirmée dans les chiffres, avec une idée pour une vente faible."
      },
      {
        name: "Plan de promotion",
        objective: "O5",
        notYet: "Il manque les articles, le prix, les dates ou le contrôle du bénéfice.",
        meets: "Les articles, le prix, le bénéfice par vente, les dates et le stock nécessaire.",
        exceeds: "Il dit comment elle sera mesurée par rapport aux mêmes semaines d'avant."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les propriétaires qui mettent à jour leur fiche de stock chaque semaine (enquête de suivi à 30 jours)",
      "Les propriétaires qui disent manquer moins souvent de leurs meilleures ventes dans les 60 jours",
      "Les propriétaires qui font une promotion saisonnière et donnent son résultat mesuré"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec Google Sheets ou Excel (un téléphone suffit pour les descriptions et les étiquettes)",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Des étiquettes ou des factures de produits, et 4 à 8 semaines de ventes par article tirées de la caisse ou d'un relevé à la main",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez aux propriétaires d'apporter des étiquettes ou des factures de produits et un rapport de ventes ou un relevé de la semaine.",
      "Faites ensemble au tableau un exemple de seuil de réapprovisionnement avant que les propriétaires construisent leur fiche.",
      "Ne collez jamais de mots de passe de fournisseurs, de noms de clients ou de données de carte dans l'IA ; les totaux par article suffisent.",
      "Rappelez aux propriétaires que ce sont eux, et pas l'IA, qui décident quels articles mettre en promotion et à quel prix.",
      "Notez la boîte à outils de la boutique avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
