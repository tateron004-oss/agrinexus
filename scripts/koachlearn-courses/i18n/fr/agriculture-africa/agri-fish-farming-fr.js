"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-fish-farming.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety rule kept from the English: no drug or chemical doses; sick fish -> fisheries extension officer or vet.

const FAO_OXYGEN = { name: "FAO, Centre régional africain d'aquaculture (Kutty, 1987) : l'oxygène dissous dans les étangs piscicoles", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Manuel du producteur pour l'élevage de tilapia en petits étangs au Ghana (Agyakwah et al., 2020 ; dépôt du CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish : l'élevage du tilapia GIFT au Nigeria (écloseries, croissance, marchés), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001) : des densités élevées réduisent le rendement du tilapia du Nil en étangs en Côte d'Ivoire", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Commission des pêches du Ghana) : permis et licences, y compris l'aquaculture", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenya : loi de 2016 sur la gestion et le développement des pêches (enregistrement et licence de l'aquaculture), sur FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-fr",
  lang: "fr",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Les bases de la pisciculture (aquaculture)",
  skills: "Choisir le tilapia ou le poisson-chat, Choisir le site et construire un étang, Contrôler la qualité de l'eau, Acheter et empoissonner des alevins de qualité, Nourrir et suivre l'indice de conversion, Calculer le coût d'un cycle de production",
  outcome: "planifier et conduire un cycle de production de tilapia ou de poisson-chat africain en étang ou en bac : choisir l'espèce et le site, vérifier les permis, tester l'eau avec des outils simples, empoissonner des alevins de qualité à une densité sûre, bien nourrir et suivre l'indice de conversion, régler les problèmes courants, et récolter et vendre avec un bénéfice calculé à l'avance.",
  about: [
    "Ce cours s'adresse aux pisciculteurs nouveaux et petits, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation du Ghana, du Nigeria, du Kenya, de Côte d'Ivoire et de toute l'Afrique qui veulent élever du tilapia ou du poisson-chat africain en étang ou en bac. La pisciculture peut bien rapporter et nourrir les familles, mais beaucoup de premiers étangs échouent à cause de mauvais alevins, d'une eau de mauvaise qualité et d'un aliment qui coûte plus cher que la vente du poisson.",
    "Le chapitre 1 prépare la ferme : choisir l'espèce, choisir le site et construire l'étang ou le bac en vérifiant les permis, et garder une bonne qualité d'eau avec des tests simples. Le chapitre 2 élève et vend le poisson : alevins de qualité et densité d'empoissonnement, alimentation et indice de conversion avec les problèmes courants, et récolte, vente et économie d'un cycle.",
    "Les règles et les permis pour les fermes piscicoles varient selon le pays et changent ; ce cours nomme les organismes à consulter. Il ne donne aucune dose de médicament ni de produit chimique : pour des poissons malades, appelez votre agent de vulgarisation des pêches ou un vétérinaire. Les montants d'argent sont seulement des exemples ; utilisez vos propres devis. Chaque leçon dure environ cinq minutes et se termine par une tâche pour votre propre ferme. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan chiffré pour un cycle d'un étang (ou d'un bac) sur votre ferme, ou pour un exemple comme un étang de tilapia de 300 mètres carrés près de Kumasi ou des bacs de poisson-chat près d'Ibadan : l'espèce et pourquoi ; le site, la source d'eau et le permis vérifié ; les tests de l'eau et leur fréquence ; le nombre d'alevins, la densité et l'écloserie certifiée où vous les achèterez ; la survie prévue, le poids à la récolte et l'aliment nécessaire avec un indice de conversion (FCR) prévu ; chaque dépense ; les ventes prévues ; le bénéfice ou la perte ; et votre prix d'équilibre par kilogramme.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Pisciculteurs nouveaux et petits, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation du Ghana, du Nigeria, du Kenya, d'Afrique de l'Ouest francophone et d'ailleurs en Afrique, qui prévoient ou exploitent un ou quelques étangs en terre, étangs bâchés ou bacs de tilapia ou de poisson-chat africain.",
    startingPoint: "Ils savent qu'on peut élever du poisson et ont peut-être une source d'eau et un peu de terrain. Beaucoup n'ont jamais testé l'eau, achètent des alevins à n'importe quel vendeur, nourrissent au hasard et n'ont pas chiffré un cycle avant de commencer.",
    gap: "Les échecs courants sont des alevins de mauvaise qualité ou des deux sexes, trop de poissons, des chutes d'oxygène à l'aube, trop d'aliment et un coût d'aliment supérieur aux ventes de poisson. Les producteurs doivent planifier un cycle sur papier, garder l'eau saine avec des tests simples, empoissonner le bon nombre de bons alevins et comparer l'aliment à la croissance pour savoir avant la récolte s'ils feront un bénéfice.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un téléphone simple ou un smartphone, une calculatrice et des outils de test bon marché (thermomètre, bandelettes de pH, disque de Secchi fait maison)",
      "Temps : leçons de 4 à 6 minutes, à placer entre les travaux de la ferme",
      "Les permis et les règles sur les espèces varient selon le pays ; les apprenants doivent consulter leur service des pêches national ou local",
      "Aucune dose de médicament ni de produit chimique ; les poissons malades relèvent de l'agent de vulgarisation ou du vétérinaire",
      "Les montants sont des exemples ; les prix de l'aliment et du poisson varient beaucoup selon le lieu et la saison"
    ],
    prerequisites: "Aucun. Les notions de \"registres de l'exploitation et marge brute\" du cours \"Agrobusiness et gestion de l'exploitation agricole\" aident pour le calcul des coûts de la leçon 6."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Selon votre eau, votre terrain, votre argent et votre marché local", action: "choisir le tilapia ou le poisson-chat africain et un système en étang ou en bac", standard: "en donnant au moins trois raisons liées à votre site et à vos acheteurs" },
    { id: "O2", condition: "Face à un site possible", action: "vérifier l'eau, le sol, la pente et le risque d'inondation du site et lister les permis à demander", standard: "en nommant l'organisme des pêches de votre pays que vous contacterez" },
    { id: "O3", condition: "Avec un thermomètre, des bandelettes de pH et un disque de Secchi", action: "tester l'eau de l'étang et dire quoi faire quand l'oxygène, la température ou le pH sort des limites", standard: "en notant chaque test avec la date et l'heure" },
    { id: "O4", condition: "À partir de la taille d'un étang ou d'un bac", action: "calculer le nombre d'alevins à empoissonner et lister les vérifications pour choisir une écloserie certifiée", standard: "avec des calculs justes et une densité convenue avec un agent de vulgarisation ou l'écloserie" },
    { id: "O5", condition: "À partir des registres d'aliment et des pesées d'échantillons", action: "calculer l'indice de conversion alimentaire et repérer tôt les problèmes courants", standard: "juste à une décimale près" },
    { id: "O6", condition: "À partir des coûts, de la survie prévue, du poids à la récolte et du prix", action: "écrire un plan chiffré pour un cycle avec le bénéfice et le prix d'équilibre", standard: "avec toutes les dépenses comptées et des calculs justes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Planifier la ferme piscicole",
      lessons: [
        {
          title: "Choisir une espèce et un système",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir le tilapia ou le poisson-chat africain et un système en étang ou en bac pour votre ferme.",
          text: [
            "Deux poissons sont surtout élevés en Afrique. Le tilapia du Nil est populaire au Ghana, au Kenya, en Côte d'Ivoire et en Égypte. Il mange des granulés et la nourriture naturelle de l'eau verte, et se vend frais, frit ou braisé. Le tilapia des deux sexes se reproduit dans l'étang et le remplit de petits poissons ; c'est pourquoi les producteurs achètent des alevins monosexes (presque tous mâles). Les souches améliorées comme le GIFT grandissent plus vite ; WorldFish rapporte que des producteurs au Nigeria atteignent environ 600 g en six mois avec le GIFT et une bonne alimentation.",
            "Le poisson-chat africain (Clarias, appelé silure dans certains pays) est le principal poisson d'élevage au Nigeria et se vend frais ou fumé. Il peut respirer l'air, donc il supporte mieux le manque d'oxygène et peut être élevé plus serré, souvent en bacs. Mais il demande un aliment plus riche en protéines, et les gros mangent les petits : il faut donc les trier par taille.",
            "Choisissez le système : un étang en terre coûte peu à faire tourner là où le sol retient l'eau ; un étang bâché ou un bac en béton ou en plastique convient aux sols sableux ou aux petites parcelles, mais coûte plus cher à construire et demande plus de renouvellement d'eau. Le plus important : avant de choisir, demandez aux acheteurs quel poisson et quelle taille ils veulent, et à quel prix."
          ],
          steps: ["Demandez à trois acheteurs (vendeuses du marché, hôtels, fumeuses de poisson) quel poisson, quelle taille et quel prix ils veulent.", "Vérifiez votre eau : combien, toute l'année, et à quel point elle est propre.", "Vérifiez votre sol : retient-il l'eau ?", "Choisissez l'espèce que les acheteurs veulent et que votre eau peut faire vivre.", "Choisissez étang ou bac selon le sol, la place et l'argent."],
          words: [["Aquaculture", "l'élevage de poissons et d'autres animaux aquatiques."], ["Alevin", "un jeune poisson, à peu près de la taille d'un doigt, acheté pour l'empoissonnement."], ["Monosexe", "des alevins presque tous du même sexe (tilapia mâle), pour qu'ils grandissent au lieu de se reproduire."], ["GIFT", "Genetically Improved Farmed Tilapia (tilapia d'élevage génétiquement amélioré), une souche de tilapia à croissance plus rapide mise au point par WorldFish."]],
          slides: [
            { title: "Le tilapia du Nil", bullets: ["Populaire au Ghana, au Kenya, en Côte d'Ivoire", "Mange des granulés et la nourriture de l'eau verte", "Achetez des alevins monosexes ; le GIFT grandit plus vite"] },
            { title: "Le poisson-chat africain", bullets: ["Principal poisson d'élevage au Nigeria ; frais ou fumé", "Respire l'air ; peut être plus serré, en bacs", "Aliment riche en protéines ; trier par taille"] },
            { title: "Étang ou bac", bullets: ["Étang en terre : bon marché si le sol retient l'eau", "Étang bâché ou bac : sol sableux, petites parcelles", "Les bacs coûtent plus et demandent plus de renouvellement d'eau"] },
            { title: "Commencez par l'acheteur", bullets: ["Quel poisson ? Quelle taille ? Quel prix ?", "Demandez à au moins trois acheteurs", "Choisissez ensuite l'espèce et le système"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Demandez à au moins trois acheteurs près de chez vous quel poisson ils veulent, à quelle taille et à quel prix. Notez leurs réponses, puis choisissez tilapia ou poisson-chat et étang ou bac, avec trois raisons tirées de votre site et de vos acheteurs.",
          youCanNow: "choisir entre le tilapia et le poisson-chat africain, et entre un étang et un bac, selon votre eau, votre sol et vos acheteurs.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi les éleveurs de tilapia achètent-ils des alevins monosexes ?", options: ["Ils sont moins chers", "Pour que les poissons grandissent au lieu de se reproduire et de remplir l'étang de petits poissons", "Ils n'ont pas besoin d'aliment", "Ils ont meilleur goût"], answer: 1, why: "Le tilapia des deux sexes se reproduit dans l'étang et finit petit et rabougri." },
            { objective: "O1", q: "Votre sol est sableux et ne retient pas l'eau. Quel système convient le mieux ?", options: ["Un étang en terre sans bâche", "Aucune pisciculture n'est possible", "Un étang au bord de la rivière", "Un étang bâché ou un bac"], answer: 3, why: "Une bâche ou un bac retient l'eau là où le sol ne le fait pas." }
          ]
        },
        {
          title: "Choisir le site et construire un étang, et les permis",
          objectives: ["O2"],
          minutes: 6,
          goal: "Vérifier un site d'étang et lister les permis à demander.",
          text: [
            "Un bon site d'étang a : de l'eau toute l'année, propre et non polluée par des usines, des mines ou des champs traités ; un sol avec assez d'argile pour retenir l'eau (serrez une poignée de terre humide : si elle garde sa forme, c'est bon signe) ; une pente douce pour que l'étang se remplisse et se vide par gravité ; pas d'inondation ; et il est assez proche pour être surveillé contre les voleurs et les prédateurs.",
            "Construisez l'étang avec une digue solide et en pente, couverte d'herbe contre l'érosion, une entrée d'eau avec un grillage pour empêcher les poissons sauvages d'entrer, et une sortie ou un tuyau de vidange pour vider l'étang à la récolte. Un étang de quelques centaines de mètres carrés est facile à gérer pour un débutant. Clôturez-le si possible, et tenez les animaux et les enfants à l'écart. Préparez l'étang avant l'empoissonnement : asséchez-le, enlevez la vase et les poissons sauvages, et chaulez-le et fertilisez-le si votre agent de vulgarisation le conseille.",
            "Les fermes piscicoles doivent souvent être enregistrées ou avoir un permis, et parfois une autorisation pour l'eau ou pour l'environnement. Au Kenya, la loi de 2016 sur la gestion et le développement des pêches exige que l'aquaculture soit enregistrée et autorisée auprès du Kenya Fisheries Service (le service des pêches du Kenya). Au Ghana, la Fisheries Commission (Commission des pêches) délivre les permis d'aquaculture. Au Nigeria, adressez-vous au Département fédéral des pêches et de l'aquaculture et au ministère de votre État ; en Côte d'Ivoire, au ministère chargé des pêches. Certaines zones n'autorisent que certaines espèces ou souches. Les règles changent : vérifiez avant de creuser."
          ],
          steps: ["Vérifiez la source d'eau : assez toute l'année, et propre.", "Faites le test de la poignée de terre ; demandez à un agent de vulgarisation de confirmer.", "Choisissez un terrain en pente douce, au-dessus du niveau des crues, près d'un endroit d'où vous pouvez surveiller.", "Prévoyez une digue solide, une entrée grillagée et une sortie pour vider.", "Contactez le service des pêches : enregistrement, permis, usage de l'eau, espèces autorisées.", "Préparez l'étang avant l'empoissonnement, comme le conseille votre agent de vulgarisation."],
          words: [["Digue", "le talus de terre autour d'un étang."], ["Entrée et sortie", "les tuyaux ou canaux par où l'eau entre dans l'étang et en sort."], ["Permis", "l'autorisation officielle dont vous avez besoin avant de commencer ou de faire tourner la ferme."]],
          slides: [
            { title: "Un bon site", bullets: ["Eau propre toute l'année", "Sol argileux qui retient l'eau", "Pente douce ; pas d'inondation ; facile à surveiller"] },
            { title: "Bien construire", bullets: ["Digue solide et enherbée", "Entrée grillagée ; sortie pour vider", "Clôture ; animaux et enfants à l'écart"] },
            { title: "Permis : vérifiez d'abord", bullets: ["Kenya : enregistrement et licence auprès du Kenya Fisheries Service", "Ghana : permis d'aquaculture de la Fisheries Commission", "Nigeria et Côte d'Ivoire : services des pêches nationaux et des États"] },
            { title: "Avant de creuser", bullets: ["Demandez les règles sur l'eau et l'environnement", "Demandez quelles espèces sont autorisées", "Les règles changent : vérifiez auprès du service"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Parcourez votre site possible. Notez la source d'eau, le résultat du test de la poignée de terre, la pente, le risque d'inondation et comment vous le surveillerez. Trouvez ensuite le numéro ou le bureau de votre organisme des pêches et écrivez trois questions à poser sur les permis et les espèces.",
          youCanNow: "juger si un site convient à un étang piscicole, prévoir ses parties principales et savoir quel service des pêches consulter pour les permis.",
          quickCheck: [
            { objective: "O2", q: "Vous serrez de la terre humide et elle garde sa forme. Qu'est-ce que cela indique ?", options: ["Le sol contient de l'argile et peut retenir l'eau", "Le sol est trop sableux", "Le site va être inondé", "L'eau est polluée"], answer: 0, why: "Un sol argileux qui garde sa forme retient en général l'eau de l'étang ; faites confirmer par un agent de vulgarisation." },
            { objective: "O2", q: "Avant de creuser un étang au Ghana, qui devez-vous consulter pour les permis ?", options: ["La banque seulement", "Personne ; les étangs n'ont pas besoin de permis", "La Fisheries Commission", "L'office de contrôle des pesticides"], answer: 2, why: "La Fisheries Commission du Ghana délivre les permis d'aquaculture." }
          ]
        },
        {
          title: "La qualité de l'eau avec des tests simples",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tester l'eau de l'étang et agir quand elle se dégrade.",
          text: [
            "Les poissons vivent dans l'eau : une eau mauvaise les tue vite. Surveillez trois choses. L'oxygène : dans les étangs verts, il est au plus haut l'après-midi et au plus bas à l'aube, car les plantes et les algues consomment de l'oxygène la nuit. Les jours nuageux, trop d'algues, l'aliment qui pourrit et le fumier aggravent la situation. Un document de la FAO indique que le tilapia devient beaucoup moins actif quand l'oxygène tombe à environ 1 à 2 mg par litre. La température : le tilapia et le poisson-chat sont des poissons d'eau chaude ; ils mangent et grandissent lentement en eau fraîche, par exemple en altitude ou en saison froide. Le pH (l'acidité de l'eau) : une eau trop acide ou trop basique stresse les poissons.",
            "Des tests simples : un thermomètre pour la température ; des bandelettes de papier pH ou un kit ; un disque de Secchi (une plaque blanche et noire au bout d'un bâton gradué) pour voir à quel point l'eau est verte ; et vos yeux à l'aube. Des poissons qui happent l'air à la surface à l'aube montrent que l'oxygène est bas. Si vous pouvez vous le payer, un kit ou un appareil de mesure de l'oxygène donne un chiffre.",
            "Si l'oxygène est bas : arrêtez ou réduisez l'aliment jusqu'à ce que les poissons récupèrent, ajoutez de l'eau fraîche, faites des éclaboussures ou pompez l'eau pour y mélanger de l'air, et retirez les poissons morts. Si l'eau est très verte, fertilisez moins. Si le pH n'est pas bon, demandez à votre agent de vulgarisation pour le chaulage. Notez chaque test avec la date et l'heure."
          ],
          steps: ["Contrôlez l'étang à l'aube : des poissons happent-ils l'air à la surface ?", "Prenez la température de l'eau avec un thermomètre.", "Testez le pH avec des bandelettes ou un kit une fois par semaine.", "Descendez le disque de Secchi jusqu'à ce qu'il disparaisse ; notez la profondeur.", "Oxygène bas : arrêtez l'aliment, ajoutez de l'eau fraîche, éclaboussez ou aérez, retirez les poissons morts.", "Notez chaque résultat avec la date et l'heure."],
          words: [["Oxygène dissous", "l'oxygène mélangé à l'eau, que les poissons respirent par leurs branchies."], ["pH", "un chiffre qui montre si l'eau est acide ou basique."], ["Disque de Secchi", "une plaque blanche et noire qu'on descend dans l'eau pour voir si elle est claire ou verte."], ["Aération", "mélanger de l'air dans l'eau, avec une pompe, une pale ou en éclaboussant."]],
          slides: [
            { title: "L'oxygène", bullets: ["Au plus haut l'après-midi, au plus bas à l'aube", "Pire les jours nuageux, avec l'aliment qui pourrit", "Le tilapia ralentit vers 1 à 2 mg par litre"] },
            { title: "Température et pH", bullets: ["Eau chaude : croissance rapide ; fraîche : lente", "Trop acide ou trop basique stresse les poissons", "Demandez à l'agent de vulgarisation pour le chaulage"] },
            { title: "Tests simples", bullets: ["Thermomètre ; bandelettes de pH", "Disque de Secchi : l'eau est-elle verte ?", "Contrôle à l'aube : poissons qui happent l'air = oxygène bas"] },
            { title: "Oxygène bas : agir vite", bullets: ["Arrêter ou réduire l'aliment", "Ajouter de l'eau fraîche ; éclabousser ou aérer", "Retirer les poissons morts ; le noter"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Fabriquez un disque de Secchi avec une assiette blanche peinte de deux quarts noirs, attachée à un bâton marqué tous les 5 cm. Faites ensuite une fiche de suivi de l'eau avec des colonnes pour la date, l'heure, la température, le pH, la profondeur de Secchi, le comportement des poissons et l'action menée, et remplissez une ligne avec un étang ou une source d'eau près de chez vous.",
          youCanNow: "contrôler l'oxygène, la température, le pH et la couleur verte de l'eau avec des outils simples, et agir vite quand l'eau se dégrade.",
          quickCheck: [
            { objective: "O3", q: "Quand l'oxygène est-il en général au plus bas dans un étang vert ?", options: ["À midi", "L'après-midi", "À l'aube", "Il ne change jamais"], answer: 2, why: "La nuit, les plantes et les algues consomment de l'oxygène sans en produire, donc il baisse jusqu'à l'aube." },
            { objective: "O3", q: "À l'aube, vous voyez des poissons qui happent l'air à la surface. Que faites-vous d'abord ?", options: ["Leur donner plus d'aliment", "Arrêter l'aliment, ajouter de l'eau fraîche et éclabousser ou aérer", "Ajouter de l'engrais", "Attendre le lendemain"], answer: 1, why: "Happer l'air signifie manque d'oxygène ; moins d'aliment et plus d'eau fraîche et brassée le font remonter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier la ferme piscicole",
        questions: [
          { objective: "O1", q: "Qu'est-ce qui est vrai pour le poisson-chat africain ?", options: ["Il peut respirer l'air et supporte mieux le manque d'oxygène", "Il ne mange que de l'herbe", "Il se reproduit et surpeuple les étangs comme le tilapia des deux sexes", "On ne peut pas l'élever en bac"], answer: 0, why: "Le poisson-chat a un organe pour respirer l'air, donc il supporte le manque d'oxygène et les bacs." },
          { objective: "O1", q: "Que devez-vous savoir en premier, avant de choisir un poisson ?", options: ["La couleur du poisson", "Ce qu'élève votre cousin", "Le poisson le plus gros possible", "Quel poisson, quelle taille et quel prix veulent vos acheteurs"], answer: 3, why: "Un poisson que vous ne pouvez pas vendre à bon prix est une perte, même s'il grandit bien." },
          { objective: "O2", q: "Pourquoi un étang a-t-il besoin d'une sortie ou d'une vidange ?", options: ["Pour laisser entrer les poissons sauvages", "Pour pouvoir le vider à la récolte et au nettoyage", "Pour garder l'eau chaude", "Il n'en a pas besoin"], answer: 1, why: "La vidange facilite la récolte et la préparation de l'étang." },
          { objective: "O2", q: "Au Kenya, l'aquaculture doit être enregistrée et autorisée auprès :", options: ["Du Kenya Dairy Board", "Du Kenya Wildlife Service", "Du Kenya Fisheries Service", "Du service des routes du comté"], answer: 2, why: "La loi de 2016 sur la gestion et le développement des pêches exige l'enregistrement et la licence auprès du Kenya Fisheries Service." },
          { objective: "O3", q: "Que montre un disque de Secchi ?", options: ["À quel point l'eau est verte ou claire", "Le poids des poissons", "Le pH de l'étang", "L'oxygène en mg par litre"], answer: 0, why: "La profondeur où le disque disparaît montre la quantité d'algues dans l'eau." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Élever et vendre le poisson",
      lessons: [
        {
          title: "Des alevins de qualité et la densité d'empoissonnement",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calculer le nombre d'alevins à empoissonner et vérifier une écloserie.",
          text: [
            "De bons alevins, c'est la moitié du travail. Achetez dans une écloserie enregistrée ou certifiée par votre autorité des pêches, ou recommandée par votre agent de vulgarisation. Demandez : Les tilapias sont-ils monosexes, et de quelle souche ? Les alevins ont-ils tous à peu près la même taille ? Combien meurent dans les premières semaines, et sont-ils remplacés ? Pouvez-vous voir l'écloserie ? Des alevins en bonne santé nagent activement, n'ont pas de blessures et ont une taille régulière. Des poissons sauvages ou de tailles mélangées apportent maladies, reproduction et cannibalisme.",
            "La densité d'empoissonnement est le nombre de poissons par mètre carré (étangs) ou par mètre cube (bacs). Trop de poissons, c'est peu d'oxygène, une croissance lente et de petits poissons. Une étude sur des étangs de tilapia en Côte d'Ivoire nourris seulement avec de l'engrais a montré que 2 à 3 poissons par mètre carré réduisaient déjà le rendement. Avec un bon aliment en granulés, on peut mettre plus de poissons, et encore plus dans des bacs avec renouvellement d'eau ou aération, surtout pour le poisson-chat. Convenez de votre densité avec votre agent de vulgarisation ou l'écloserie selon votre système.",
            "Exemple (les chiffres sont seulement un exemple) : un étang de 20 m sur 15 m fait 300 mètres carrés. Avec une densité d'exemple de 3 poissons par mètre carré, vous empoissonnez 900 alevins. Transportez les alevins à la fraîche le matin, dans des sacs oxygénés ou de l'eau propre, et laissez flotter les sacs dans l'étang un moment pour que les températures s'égalisent avant de les relâcher."
          ],
          steps: ["Mesurez l'étang : longueur x largeur = surface en mètres carrés.", "Convenez d'une densité avec votre agent de vulgarisation ou l'écloserie.", "Surface x densité = nombre d'alevins.", "Choisissez une écloserie enregistrée ou recommandée ; demandez la souche, le monosexe, la taille et les pertes.", "Contrôlez les alevins : actifs, sans blessures, de taille régulière.", "Transportez à la fraîche le matin ; faites flotter les sacs pour égaliser la température avant de relâcher."],
          words: [["Densité d'empoissonnement", "le nombre de poissons par mètre carré d'étang, ou par mètre cube d'eau de bac."], ["Écloserie", "une ferme qui fait reproduire les poissons et élève des jeunes poissons pour les vendre."], ["Cannibalisme", "des poissons qui mangent d'autres poissons de leur espèce, fréquent chez le poisson-chat de tailles mélangées."]],
          slides: [
            { title: "De bons alevins", bullets: ["Écloserie enregistrée ou recommandée", "Tilapia : monosexe, souche connue", "Actifs, sans blessures, taille régulière"] },
            { title: "La densité compte", bullets: ["Trop de poissons : peu d'oxygène, croissance lente, petits poissons", "Étude en Côte d'Ivoire : 2-3 par m2 déjà trop avec l'engrais seul", "Densité à convenir avec l'agent de vulgarisation ou l'écloserie"] },
            { title: "Calcul d'exemple", bullets: ["20 m x 15 m = 300 m2", "300 m2 x 3 poissons par m2 = 900 alevins", "Les chiffres sont seulement un exemple"] },
            { title: "Le jour de l'empoissonnement", bullets: ["Le matin, à la fraîche", "Sacs oxygénés ou eau propre", "Faire flotter les sacs pour égaliser la température"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Mesurez votre étang ou votre bac (ou prenez 20 m sur 15 m). Demandez à un agent de vulgarisation ou à une écloserie une densité pour votre système, et calculez le nombre d'alevins à acheter. Écrivez ensuite cinq questions à poser à l'écloserie avant de payer.",
          youCanNow: "calculer le nombre d'alevins pour un étang et choisir une écloserie qui vend des poissons de qualité.",
          quickCheck: [
            { objective: "O4", q: "Un étang mesure 25 m sur 10 m et la densité convenue est de 2 poissons par mètre carré. Combien d'alevins ?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = 250 mètres carrés, et 250 x 2 = 500 alevins." },
            { objective: "O4", q: "Quel lot d'alevins de poisson-chat devez-vous refuser ?", options: ["Des poissons actifs de taille régulière", "Des poissons d'une écloserie enregistrée", "Des poissons sans blessures", "Des poissons de tailles très mélangées"], answer: 3, why: "Les tailles mélangées mènent au cannibalisme, car les gros poissons-chats mangent les petits." }
          ]
        },
        {
          title: "Alimentation, indice de conversion et problèmes courants",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer l'indice de conversion alimentaire et repérer tôt les problèmes.",
          text: [
            "L'aliment est en général la plus grosse dépense en pisciculture. Utilisez un aliment de bonne qualité, avec une taille de granulé adaptée à la bouche du poisson ; les granulés flottants vous permettent de voir ce qui est mangé. Nourrissez aux mêmes heures chaque jour, et donnez seulement ce que les poissons mangent en quelques minutes ; l'aliment non mangé pourrit et consomme l'oxygène. La quantité augmente à mesure que les poissons grandissent : toutes les deux à quatre semaines, pêchez et pesez un échantillon de poissons, calculez le poids moyen, et ajustez l'aliment avec le tableau du fabricant d'aliment ou de l'agent de vulgarisation. Stockez l'aliment au sec et au-dessus du sol ; un aliment moisi est un poison.",
            "L'indice de conversion alimentaire (FCR en anglais) montre si l'aliment se transforme bien en poisson : FCR = aliment donné / poids gagné. Exemple : vous avez donné 400 kg et les poissons ont gagné 250 kg, donc FCR = 400 / 250 = 1,6. Un FCR plus bas veut dire moins d'aliment par kg de poisson. Le FCR monte avec la suralimentation, un mauvais aliment, une eau mauvaise et des poissons malades.",
            "Problèmes courants : manque d'oxygène à l'aube ; prédateurs comme les oiseaux, les serpents et les loutres, et voleurs ; tilapias qui se reproduisent quand les alevins étaient des deux sexes ; poissons-chats qui se mangent entre eux quand les tailles diffèrent (triez-les) ; crues qui emportent les poissons ; et maladies. Les signes de poissons malades : ils ne mangent pas, ont des plaies, nagent bizarrement, ou beaucoup meurent. Retirez les poissons morts, arrêtez l'aliment, vérifiez l'eau, et appelez votre agent de vulgarisation des pêches ou un vétérinaire ; n'utilisez ni médicament ni produit chimique sans leur avis."
          ],
          steps: ["Donnez un aliment de bonne qualité et de bonne taille à heures fixes.", "Donnez seulement ce que les poissons mangent en quelques minutes.", "Toutes les 2 à 4 semaines, pesez un échantillon et ajustez l'aliment selon le tableau.", "Notez tout l'aliment donné.", "FCR = aliment donné / poids gagné.", "Surveillez les problèmes chaque jour ; appelez l'agent de vulgarisation ou le vétérinaire pour des poissons malades."],
          words: [["Indice de conversion alimentaire (FCR)", "les kilogrammes d'aliment utilisés pour produire un kilogramme de poisson."], ["Pesée d'échantillon", "pêcher et peser quelques poissons pour connaître leur poids moyen."], ["Prédateur", "un animal qui mange les poissons, comme certains oiseaux, serpents et loutres."]],
          slides: [
            { title: "Bien nourrir", bullets: ["Bon aliment, bonne taille de granulé", "Heures fixes ; seulement ce qu'ils mangent en quelques minutes", "Peser un échantillon toutes les 2 à 4 semaines"] },
            { title: "Indice de conversion", bullets: ["FCR = aliment donné / poids gagné", "400 kg d'aliment / 250 kg gagnés = 1,6", "Plus il est bas, mieux c'est"] },
            { title: "Problèmes courants", bullets: ["Manque d'oxygène ; prédateurs et voleurs", "Tilapias qui se reproduisent ; cannibalisme du poisson-chat", "Crues ; maladies"] },
            { title: "Poissons malades", bullets: ["Ne mangent plus, plaies, nage bizarre, morts", "Retirer les morts ; arrêter l'aliment ; vérifier l'eau", "Appeler l'agent ou le vétérinaire ; pas de médicament sans avis"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Faites une fiche d'alimentation avec des colonnes pour la date, l'aliment donné (kg), le poids moyen de l'échantillon et des notes. Calculez ensuite le FCR de cet exemple : 300 kg d'aliment donné, les poissons ont gagné 200 kg. Écrivez un moyen de le baisser.",
          youCanNow: "bien nourrir les poissons, calculer le FCR et repérer tôt les problèmes courants.",
          quickCheck: [
            { objective: "O5", q: "Vous avez donné 450 kg d'aliment et les poissons ont gagné 300 kg. Quel est le FCR ?", options: ["0,7", "1,2", "1,5", "2,0"], answer: 2, why: "450 divisé par 300 donne 1,5." },
            { objective: "O5", q: "Pourquoi ne donner que ce que les poissons mangent en quelques minutes ?", options: ["L'aliment non mangé pourrit, consomme l'oxygène et gaspille de l'argent", "Les poissons n'aiment pas l'aliment", "L'aliment est gratuit", "Cela rend l'eau plus claire pour nager"], answer: 0, why: "L'aliment non mangé est de l'argent perdu et pollue l'eau." }
          ]
        },
        {
          title: "Récolte, vente et économie d'un cycle",
          objectives: ["O6"],
          minutes: 6,
          goal: "Écrire un plan chiffré pour un cycle avec le bénéfice et le prix d'équilibre.",
          text: [
            "Prévoyez la vente avant d'empoissonner. Convenez avec les acheteurs de la taille, du jour et du prix, et récoltez à la fraîche le matin. Arrêtez l'aliment la veille pour que les poissons supportent mieux le transport. Videz l'étang en partie et pêchez au filet, ou videz-le entièrement pour une récolte complète. Gardez le poisson frais et propre, sur de la glace ou à l'ombre, et vendez vite : le poisson frais se gâte en quelques heures à la chaleur. Le fumage ou le séchage, courant pour le poisson-chat au Nigeria, ajoute de la valeur et donne plus de temps pour vendre. Des récoltes partielles des plus gros poissons peuvent étaler les ventes sur plusieurs semaines.",
            "Chiffrez d'abord un cycle sur papier. Exemple pour un étang de tilapia de 300 mètres carrés au Ghana (tous les chiffres sont seulement des exemples ; utilisez vos propres devis) : 900 alevins à 1,50 GHS = 1 350 GHS ; aliment : récolte prévue de 720 poissons (80 % de survie) x 0,35 kg = 252 kg, et avec un FCR prévu de 1,6 il faut environ 400 kg d'aliment à 12 GHS = 4 800 GHS ; préparation de l'étang 300 GHS ; main-d'œuvre et gardiennage 1 200 GHS ; récolte et transport 300 GHS. Total des dépenses 7 950 GHS.",
            "Ventes : 252 kg à 40 GHS le kg = 10 080 GHS. Bénéfice = 10 080 - 7 950 = 2 130 GHS. Prix d'équilibre = total des dépenses / kg récoltés = 7 950 / 252 = environ 31,50 GHS le kg. Si le prix de l'acheteur est proche de votre prix d'équilibre, changez le plan : de meilleurs alevins, moins de gaspillage d'aliment ou un meilleur acheteur."
          ],
          steps: ["Convenez de la taille, du jour et du prix avec les acheteurs avant d'empoissonner.", "Listez chaque dépense : alevins, aliment, préparation de l'étang, main-d'œuvre, gardiennage, récolte, transport.", "Récolte prévue = alevins x survie x poids à la récolte.", "Aliment nécessaire = poids gagné x FCR prévu.", "Bénéfice = ventes - total des dépenses.", "Prix d'équilibre = total des dépenses / kg récoltés."],
          words: [["Taux de survie", "la part des poissons empoissonnés encore vivants à la récolte."], ["Prix d'équilibre", "le prix au kg auquel les ventes couvrent juste toutes les dépenses."], ["Récolte partielle", "sortir les plus gros poissons et laisser les autres grandir."]],
          slides: [
            { title: "Récolter et vendre", bullets: ["Acheteur, taille, jour et prix convenus d'abord", "Le matin à la fraîche ; arrêter l'aliment la veille", "Glace ou ombre ; vendre vite, ou fumer ou sécher"] },
            { title: "Dépenses d'exemple (GHS)", bullets: ["Alevins 1 350 ; aliment 4 800", "Préparation 300 ; main-d'œuvre et gardiennage 1 200 ; récolte 300", "Total 7 950. Exemples seulement"] },
            { title: "Résultat d'exemple", bullets: ["720 poissons x 0,35 kg = 252 kg", "252 kg x 40 GHS = 10 080 GHS", "Bénéfice d'environ 2 130 GHS"] },
            { title: "Prix d'équilibre", bullets: ["Total des dépenses / kg récoltés", "7 950 / 252 = environ 31,50 GHS le kg", "Proche de l'équilibre ? Changez le plan"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Tâche finale : écrivez un plan chiffré pour un cycle de votre propre étang ou bac (ou de l'exemple) : espèce, site et permis vérifiés, tests de l'eau, alevins et écloserie, survie prévue, poids à la récolte et aliment, chaque dépense, ventes prévues, bénéfice et prix d'équilibre par kg.",
          youCanNow: "prévoir une récolte et une vente, et calculer le bénéfice et le prix d'équilibre d'un cycle de pisciculture.",
          quickCheck: [
            { objective: "O6", q: "Le total des dépenses est de 900 000 NGN et vous prévoyez de récolter 600 kg de poisson-chat. Quel est le prix d'équilibre ?", options: ["600 NGN le kg", "1 000 NGN le kg", "1 200 NGN le kg", "1 500 NGN le kg"], answer: 3, why: "900 000 divisé par 600 donne 1 500 le kg." },
            { objective: "O6", q: "Quand devez-vous convenir de la vente avec les acheteurs ?", options: ["Après la récolte, quand le poisson est sur la glace", "Avant l'empoissonnement, et confirmer avant la récolte", "Jamais ; vendre au bord de la route", "Seulement s'il reste du poisson"], answer: 1, why: "Le poisson frais se gâte vite ; un acheteur trouvé tôt évite de brader le poisson." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Élever et vendre le poisson",
        questions: [
          { objective: "O4", q: "Où devez-vous acheter les alevins ?", options: ["Dans une écloserie enregistrée ou recommandée", "Dans une rivière près de chez vous", "Chez le moins cher", "À n'importe quel vendeur de passage"], answer: 0, why: "Les écloseries enregistrées ou recommandées donnent une souche connue, du tilapia monosexe et des poissons sains." },
          { objective: "O4", q: "Un étang de 30 m sur 10 m à 2 poissons par mètre carré demande combien d'alevins ?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = 300 mètres carrés, et 300 x 2 = 600." },
          { objective: "O5", q: "Les poissons ne mangent pas, ont des plaies et certains meurent. Que faites-vous ?", options: ["Leur donner plus d'aliment", "Acheter un médicament au marché et le verser", "Retirer les poissons morts, arrêter l'aliment, vérifier l'eau et appeler l'agent de vulgarisation ou le vétérinaire", "Ajouter plus d'alevins"], answer: 2, why: "Des poissons malades ont besoin de l'avis d'un agent ou d'un vétérinaire ; un médicament sans avis peut nuire aux poissons et aux acheteurs." },
          { objective: "O5", q: "Un FCR qui baisse pendant le cycle signifie en général :", options: ["Que de l'aliment est gaspillé", "Que l'aliment se transforme mieux en poisson", "Que les poissons sont malades", "Que l'étang est trop vert"], answer: 1, why: "Moins d'aliment par kg gagné veut dire une meilleure conversion." },
          { objective: "O6", q: "Les ventes sont de 12 000 GHS et le total des dépenses de 9 500 GHS. Quel est le bénéfice ?", options: ["1 500 GHS", "2 000 GHS", "2 500 GHS", "21 500 GHS"], answer: 2, why: "12 000 moins 9 500 donne 2 500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la pisciculture (aquaculture)",
    questions: [
      { objective: "O1", q: "Quel est le principal poisson d'élevage au Nigeria ?", options: ["Le poisson-chat africain", "Le saumon", "La truite", "La carpe"], answer: 0, why: "Le poisson-chat africain est le principal poisson d'élevage du Nigeria, vendu frais et fumé." },
      { objective: "O1", q: "Du tilapia des deux sexes dans un étang mène en général à :", options: ["Des poissons plus gros", "Des ventes plus rapides", "Beaucoup de petits poissons rabougris à cause de la reproduction", "Moins d'aliment nécessaire"], answer: 2, why: "Le tilapia se reproduit dans l'étang et le surpeuple de petits poissons." },
      { objective: "O1", q: "Qu'est-ce que le tilapia GIFT ?", options: ["Un cadeau des acheteurs", "Une maladie des poissons", "Un modèle d'étang", "Une souche de tilapia améliorée à croissance plus rapide, de WorldFish"], answer: 3, why: "GIFT signifie Genetically Improved Farmed Tilapia, un tilapia d'élevage génétiquement amélioré." },
      { objective: "O2", q: "Quel site est le meilleur pour un étang en terre ?", options: ["Un sol sableux dans la plaine inondable d'une rivière", "Un sol argileux en pente douce au-dessus du niveau des crues, avec de l'eau propre toute l'année", "Une colline rocheuse sans eau", "À côté de la sortie d'eau d'une mine"], answer: 1, why: "L'argile retient l'eau, la pente permet de remplir et vider, et l'eau propre garde les poissons en vie." },
      { objective: "O2", q: "Pourquoi mettre un grillage à l'entrée de l'étang ?", options: ["Pour empêcher les poissons sauvages et les prédateurs d'entrer", "Pour réchauffer l'eau", "Pour nourrir les poissons", "Pour ralentir la récolte"], answer: 0, why: "Les poissons sauvages prennent la nourriture, apportent des maladies et mangent les alevins." },
      { objective: "O2", q: "Avant de construire un étang piscicole, vous devez :", options: ["Commencer à creuser et demander plus tard", "Demander seulement à vos voisins", "Consulter votre service des pêches national ou local sur les permis et les espèces autorisées", "Supposer qu'il n'y a pas de règles"], answer: 2, why: "Beaucoup de pays exigent un enregistrement ou un permis, et certains limitent les espèces." },
      { objective: "O3", q: "Qu'est-ce qui aggrave le manque d'oxygène à l'aube ?", options: ["Les jours ensoleillés et peu d'algues", "Les jours nuageux, trop d'algues et l'aliment qui pourrit", "Une eau claire et fraîche", "Moins de poissons"], answer: 1, why: "Ces facteurs réduisent la production d'oxygène ou le consomment la nuit." },
      { objective: "O3", q: "Le tilapia et le poisson-chat grandissent lentement quand l'eau est :", options: ["Fraîche", "Chaude", "Propre", "Verte"], answer: 0, why: "Ce sont deux poissons d'eau chaude ; l'eau fraîche ralentit l'appétit et la croissance." },
      { objective: "O3", q: "Quel outil mesure l'acidité de l'eau de l'étang ?", options: ["Un disque de Secchi", "Un thermomètre", "Un filet de pêche", "Des bandelettes de pH ou un kit de pH"], answer: 3, why: "Les bandelettes ou kits de pH montrent si l'eau est acide ou basique." },
      { objective: "O3", q: "Si l'oxygène est bas, quelle action est MAUVAISE ?", options: ["Ajouter de l'eau fraîche", "Éclabousser ou aérer l'eau", "Donner plus d'aliment que d'habitude", "Retirer les poissons morts"], answer: 2, why: "L'aliment en trop pourrit et consomme encore plus d'oxygène." },
      { objective: "O4", q: "La densité d'empoissonnement, c'est :", options: ["Le poids d'aliment par jour", "Le nombre de poissons par mètre carré ou par mètre cube", "La profondeur de l'étang", "Le prix d'un alevin"], answer: 1, why: "La densité est le nombre de poissons qui partagent chaque unité d'espace." },
      { objective: "O4", q: "Un étang de 400 mètres carrés à 2,5 poissons par mètre carré demande :", options: ["600 alevins", "800 alevins", "1 000 alevins", "1 600 alevins"], answer: 2, why: "400 x 2,5 = 1 000." },
      { objective: "O4", q: "Pourquoi faire flotter les sacs d'alevins dans l'étang avant de les relâcher ?", options: ["Pour que les températures de l'eau s'égalisent", "Pour compter les poissons", "Pour les nourrir", "Pour nettoyer les sacs"], answer: 0, why: "Un changement brusque de température choque les alevins et peut les tuer." },
      { objective: "O5", q: "Le FCR se calcule ainsi :", options: ["Poissons vendus / poissons empoissonnés", "Prix / coût", "Surface de l'étang x densité", "Aliment donné / poids gagné"], answer: 3, why: "Il montre combien de kg d'aliment font un kg de poisson." },
      { objective: "O5", q: "Vous avez donné 600 kg et les poissons ont gagné 400 kg. FCR ?", options: ["1,5", "0,7", "2,4", "1,0"], answer: 0, why: "600 divisé par 400 donne 1,5." },
      { objective: "O5", q: "À quelle fréquence peser un échantillon de poissons pour ajuster l'aliment ?", options: ["Jamais", "Seulement à la récolte", "Toutes les 2 à 4 semaines", "Toutes les heures"], answer: 2, why: "Des pesées régulières montrent la croissance pour que l'aliment la suive." },
      { objective: "O5", q: "Des poissons-chats de tailles très différentes dans un même étang peuvent mener à :", options: ["Une croissance plus rapide pour tous", "Du cannibalisme", "Une eau plus claire", "Un coût d'aliment plus bas"], answer: 1, why: "Les gros poissons-chats mangent les petits, donc les éleveurs les trient par taille." },
      { objective: "O6", q: "Le poids de récolte prévu se calcule par :", options: ["Aliment x prix", "Surface de l'étang x profondeur", "Alevins x survie x poids à la récolte", "Dépenses / prix"], answer: 2, why: "Seuls les poissons survivants comptent, à leur poids prévu." },
      { objective: "O6", q: "Le prix d'équilibre au kg est :", options: ["Le prix le plus haut du marché", "Le total des dépenses / kg récoltés", "Le coût de l'aliment seulement", "Le prix de l'alevin"], answer: 1, why: "À ce prix, les ventes couvrent juste toutes les dépenses." },
      { objective: "O6", q: "Quelle est en général la plus grosse dépense d'un cycle piscicole ?", options: ["Le filet", "Le panneau de l'étang", "Les tests de l'eau", "L'aliment"], answer: 3, why: "L'aliment prend en général la plus grande part des dépenses, d'où l'importance du FCR." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Espèce et site", objective: "O1", notYet: "Aucune raison donnée pour l'espèce, ou aucun acheteur interrogé.", meets: "Espèce et système choisis avec trois raisons tirées du site et des acheteurs.", exceeds: "Nomme les acheteurs, la taille qu'ils veulent et le prix qu'ils ont proposé." },
      { name: "Site et permis", objective: "O2", notYet: "Site non vérifié ou aucun organisme des pêches nommé.", meets: "Eau, sol, pente et inondation vérifiés ; l'organisme des pêches et les questions sur les permis listés.", exceeds: "A contacté le service des pêches et note sa réponse." },
      { name: "Plan pour la qualité de l'eau", objective: "O3", notYet: "Aucun test de l'eau dans le plan.", meets: "Contrôles à l'aube, température, pH et Secchi, avec leur fréquence et quoi faire hors des limites.", exceeds: "Contient une fiche de tests remplie et un plan d'urgence en cas de manque d'oxygène." },
      { name: "Alevins et empoissonnement", objective: "O4", notYet: "Nombre d'alevins absent ou faux, ou aucune écloserie nommée.", meets: "Nombre juste à partir de la surface et de la densité convenue ; une écloserie enregistrée ou recommandée nommée, avec les vérifications.", exceeds: "Note la souche, le statut monosexe et la politique de remplacement de l'écloserie." },
      { name: "Dépenses, bénéfice et équilibre", objective: "O6", notYet: "Dépenses manquantes, aliment non relié au FCR, ou calculs faux.", meets: "Toutes les dépenses, l'aliment à partir du gain prévu x FCR, le bénéfice et le prix d'équilibre justes.", exceeds: "Montre un second cas avec une survie plus faible ou un prix plus bas, et ce que ferait le producteur." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui empoissonnent avec des alevins d'une écloserie enregistrée ou recommandée dans les 6 mois (enquête de suivi)",
      "Apprenants qui tiennent les fiches de tests de l'eau et d'alimentation pendant tout un cycle (enquête de suivi)",
      "Taux de survie et FCR déclarés à la récolte, comparés au plan",
      "Apprenants qui font un bénéfice sur leur premier cycle, quand les registres le permettent"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou un téléphone avec un tableur ou une application de notes",
      "Une calculatrice (celle du téléphone suffit)",
      "Un thermomètre, des bandelettes de pH et un disque de Secchi fait maison (assiette blanche, peinture, bâton)",
      "Un mètre ruban pour l'étang",
      "Environ 75 minutes au total, en courtes séances, plus de la pratique au bord d'un étang"
    ],
    facilitatorNotes: [
      "Faites les leçons 3 et 4 au bord d'un étang en production : faites ensemble le contrôle de l'aube, les tests de Secchi et de pH et une pesée d'échantillon.",
      "Invitez un agent de vulgarisation des pêches à expliquer les permis et les écloseries enregistrées de votre pays ou de votre région.",
      "Ne donnez jamais de doses de médicament ou de produit chimique ; renvoyez les apprenants qui ont des poissons malades vers leur agent de vulgarisation ou un vétérinaire.",
      "Remplacez les prix d'exemple par des devis locaux pour les alevins, l'aliment et le poisson avant la leçon sur les coûts, et dites clairement que ce sont des exemples.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
