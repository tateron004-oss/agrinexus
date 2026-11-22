"use strict";

// Koach Learn course (French translation of africa-life/afr-solar-home-systems.js). See scripts/koachlearn-courses/README.md, "Translations".
// Small home systems only, exactly as in the English: no grid or mains wiring work; sizing figures and prices are examples, not design values.

const VERASOL = { name: "VeraSol : assurance qualité indépendante pour le solaire hors réseau (successeur de Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Base de données des produits VeraSol : rechercher les kits solaires certifiés", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA (association américaine de prévention des incendies) : sécurité des batteries lithium-ion (signes d'alerte ; ne pas les jeter à la poubelle, les recycler)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA : Protection des consommateurs dans le solaire hors réseau (vente responsable, transparence, traitement équitable, bon service, qualité)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Autorité de régulation de l'énergie et du pétrole (EPRA), Kenya : énergies renouvelables et licences", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "OMS, aide-mémoire : Déchets électroniques, y compris les dangers du brûlage et des décharges", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-fr",
  lang: "fr",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Kits solaires domestiques : installer, vendre et créer une activité d'énergie hors réseau",
  skills: "Nommer les éléments d'un kit solaire domestique et vérifier sa qualité, Dimensionner un système selon la consommation d'énergie quotidienne, Installer en sécurité un petit système en courant continu, Entretenir un système et trouver les pannes, Vendre honnêtement au comptant ou en paiement à l'usage",
  outcome: "aider un foyer à choisir, installer et entretenir un petit kit solaire domestique : vérifier qu'un kit est certifié, le dimensionner selon la consommation d'énergie quotidienne du foyer, l'installer en sécurité, le garder en bon état de marche et le vendre honnêtement, avec des prix et des conditions clairs.",
  about: [
    "Ce cours s'adresse aux jeunes, aux aides-électriciens, aux commerçants et aux agents commerciaux de toute l'Afrique qui veulent gagner leur vie avec le petit solaire hors réseau : éclairage, recharge de téléphones, radio, petite télévision ou ventilateur pour les maisons et les kiosques sans raccordement fiable au réseau, dans le Kenya rural, le nord du Nigeria, la région Upper East du Ghana, la Casamance au Sénégal ou l'Extrême-Nord du Cameroun.",
    "Le chapitre 1 explique comment fonctionne un kit solaire domestique : ses éléments et comment vérifier la qualité, comment dimensionner un système selon ce qu'une famille utilise chaque jour, et comment installer un petit système en sécurité. Le chapitre 2 porte sur l'entretien et la gestion d'une activité : entretien et recherche de pannes, vente au comptant ou en paiement à l'usage, et rédaction d'un devis honnête.",
    "Ce cours concerne uniquement les petits systèmes domestiques. Il n'enseigne pas le travail sur le réseau, l'installation électrique de la maison ni les grands systèmes ; ces travaux demandent un électricien agréé. Certains pays délivrent des licences aux techniciens solaires : renseignez-vous auprès de votre régulateur de l'énergie. Tous les chiffres de dimensionnement et tous les prix sont des exemples. Chaque leçon dure environ cinq minutes et se termine par une tâche. Des questions rapides suivent chaque leçon, un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Rédigez un devis pour un foyer réel ou fictif (par exemple une famille de cinq personnes à Kitui, au Kenya, ou un kiosque à Kaolack, au Sénégal) : un tableau de ce qu'ils veulent alimenter, avec les watts et les heures par jour ; le total d'énergie par jour ; la taille du panneau et de la batterie choisie et votre calcul ; un kit certifié de la base de données VeraSol ou un kit avec une garantie claire ; une liste de sécurité pour l'installation ; le prix au comptant et, s'il y en a, les conditions du paiement à l'usage avec le total que le client paiera ; et une fiche d'entretien et de garantie pour le client.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jeunes, aides-électriciens, commerçants et agents commerciaux du solaire dans les villes et les villages de toute l'Afrique (Kenya, Nigeria, Ghana, Sénégal, Cameroun, Maroc et ailleurs) qui vendent ou installent du solaire, ou veulent lancer une petite activité solaire.",
    startingPoint: "Beaucoup ont déjà vu des lampes et des kits solaires, et certains en vendent. Peu savent dimensionner un système selon la consommation d'un foyer, vérifier si un kit est certifié, installer un petit système en sécurité, trouver des pannes simples ou expliquer honnêtement les conditions du paiement à l'usage.",
    gap: "Les kits trop petits ou contrefaits tombent vite en panne et les clients perdent de l'argent et la confiance ; une mauvaise installation provoque des incendies de batterie et des électrocutions ; des conditions de paiement à l'usage peu claires enferment les familles dans les dettes. Un installateur et vendeur formé et honnête fidélise ses clients et aide les familles à avoir une lumière et une énergie propres et fiables.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; calcul simple (multiplier, additionner, diviser) et chaque mot technique expliqué",
      "Appareils : un téléphone simple avec une calculatrice ; les données mobiles coûtent cher, donc les recherches dans la base de données restent courtes",
      "Portée et sécurité : petits systèmes domestiques uniquement ; ni réseau, ni installation électrique de la maison, ni grands systèmes ; les règles de licence varient selon les pays et les apprenants se renseignent auprès de leur régulateur de l'énergie",
      "Argent : les prix et les chiffres de dimensionnement sont des exemples ; aucun conseil d'investissement ; les conditions du paiement à l'usage sont expliquées honnêtement",
      "Le cours est aussi traduit en français et en arabe, donc les exemples comprennent des clients francophones et d'Afrique du Nord"
    ],
    prerequisites: "Calcul de base. Aucune formation en électricité n'est nécessaire pour commencer ; l'installation pratique doit se faire avec un installateur expérimenté."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à un kit solaire domestique", action: "nommer chaque élément (panneau, régulateur de charge, batterie, onduleur, lampes et appareils) et vérifier si le kit est certifié dans la base de données VeraSol", standard: "en nommant correctement tous les éléments et en notant le résultat de la certification" },
    { id: "O2", condition: "À partir d'une liste de ce qu'un foyer veut alimenter", action: "calculer le besoin d'énergie quotidien en wattheures et choisir la taille du panneau et de la batterie", standard: "avec des calculs justes et une marge pour les pertes" },
    { id: "O3", condition: "Lors de l'installation d'un petit kit solaire domestique en courant continu", action: "suivre une liste de sécurité pour placer le panneau, faire le câblage, poser les fusibles et placer la batterie", standard: "sans oublier aucune étape et sans aucun travail sur le réseau ni sur l'installation électrique de la maison" },
    { id: "O4", condition: "Quand un système fonctionne mal", action: "faire l'entretien courant et trouver les pannes simples étape par étape", standard: "en vérifiant dans l'ordre le panneau, les connexions, le régulateur et la batterie" },
    { id: "O5", condition: "Quand vous vendez un système à un client", action: "rédiger un devis honnête avec le prix au comptant, les conditions du paiement à l'usage s'il y en a, le coût total et la garantie", standard: "pour que le client puisse dire le total qu'il paiera avant de signer" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne un kit solaire domestique",
      lessons: [
        {
          title: "Les éléments d'un kit solaire domestique, et la qualité",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les éléments d'un kit solaire domestique et vérifier si un kit est certifié.",
          text: [
            "Un kit solaire domestique transforme la lumière du soleil en électricité pour une maison ou une petite boutique. Il a cinq éléments principaux. Le panneau solaire produit de l'électricité avec la lumière du soleil pendant la journée. Le régulateur de charge envoie cette électricité dans la batterie en sécurité et l'empêche de trop se charger ou de trop se décharger. La batterie stocke l'énergie pour la nuit. Les lampes et les appareils (les charges) utilisent l'énergie. Certains systèmes ont un onduleur, qui transforme le courant continu (CC) de la batterie en courant alternatif (CA) pour les prises normales.",
            "Beaucoup de petits kits se présentent en un seul boîtier, avec le régulateur et la batterie intégrés, des lampes en CC, une prise pour recharger les téléphones et parfois une radio, une télévision ou un ventilateur en CC. Les appareils en CC consomment moins que les appareils en CA avec un onduleur, donc un petit système tient plus longtemps.",
            "Les kits contrefaits et de mauvaise qualité sont courants. Avant de vendre ou d'installer un kit, vérifiez s'il est certifié par VeraSol, un programme de qualité indépendant issu de Lighting Global. Sa base de données gratuite en ligne (data.verasol.org) liste les kits solaires certifiés. Un kit certifié a été testé pour ses performances réelles, sa durée de vie et l'honnêteté de ses promesses. Si un kit n'est pas dans la liste, demandez sa garantie écrite et ses résultats de tests.",
            "Exemple : Fatou, à Kaolack, au Sénégal, compare deux kits de même taille. L'un est dans la base de données VeraSol et a une garantie écrite ; l'autre n'a ni étiquette ni garantie. Elle choisit le kit certifié pour ses clients."
          ],
          words: [["Panneau solaire", "une plaque plate qui produit de l'électricité avec la lumière du soleil."], ["Régulateur de charge", "un petit boîtier qui charge la batterie en sécurité et la protège."], ["Onduleur", "un appareil qui transforme le courant continu de la batterie en courant alternatif pour les prises normales."], ["CC et CA", "le CC (courant continu) est le courant stable des batteries et des panneaux ; le CA (courant alternatif) est celui du réseau et de la plupart des prises normales."]],
          slides: [
            { title: "Cinq éléments principaux", bullets: ["Panneau : produit l'énergie avec le soleil", "Régulateur de charge : charge la batterie en sécurité", "Batterie : stocke l'énergie pour la nuit ; les charges l'utilisent"] },
            { title: "Onduleur et appareils en CC", bullets: ["Onduleur : du CC de la batterie au CA pour les prises normales", "Lampes, radio, télé, ventilateur en CC consomment moins", "Beaucoup de kits sont en un seul boîtier"] },
            { title: "Vérifier la qualité : VeraSol", bullets: ["Programme de qualité indépendant (issu de Lighting Global)", "Base de données gratuite : data.verasol.org", "Pas dans la liste ? Demandez une garantie écrite et les résultats de tests"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Regardez un kit solaire (en boutique, à la maison ou sur une photo en ligne) et écrivez le nom de chaque élément. Si vous avez des données mobiles, cherchez un kit dans la base de données VeraSol et notez s'il y figure.",
          youCanNow: "nommer chaque élément d'un kit solaire domestique et vérifier si un kit est certifié.",
          quickCheck: [
            { objective: "O1", q: "Quel élément empêche la batterie de trop se charger ?", options: ["L'ampoule", "Le cadre du panneau", "Le régulateur de charge", "Le câble du chargeur de téléphone"], answer: 2, why: "Le régulateur de charge charge la batterie en sécurité et la protège contre la surcharge et la décharge excessive." },
            { objective: "O1", q: "Où pouvez-vous vérifier si un kit solaire est certifié ?", options: ["Dans la base de données des produits VeraSol", "À la couleur du carton", "Sur la seule parole du vendeur", "Au poids du panneau"], answer: 0, why: "La base de données gratuite de VeraSol liste les kits testés de façon indépendante et certifiés." }
          ]
        },
        {
          title: "Dimensionner un système selon ce qu'utilise un foyer",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculer le besoin d'énergie quotidien d'un foyer et choisir la taille du panneau et de la batterie.",
          text: [
            "Dimensionnez le système selon ce que la famille veut vraiment alimenter. Pour chaque appareil, multipliez sa puissance en watts (W) par le nombre d'heures d'utilisation par jour. Vous obtenez des wattheures (Wh) par jour. Additionnez-les.",
            "Exemple (les chiffres ne sont que des exemples) : 3 ampoules LED de 3 W pendant 5 heures = 45 Wh. Recharger 2 téléphones, environ 10 Wh chacun = 20 Wh. Une radio de 5 W pendant 4 heures = 20 Wh. Une télévision en CC de 20 W pendant 3 heures = 60 Wh. Total : 145 Wh par jour. Ajoutez environ 30 % pour les pertes dans les câbles, le régulateur et la batterie : environ 190 Wh par jour.",
            "Panneau : divisez le besoin quotidien par les heures d'ensoleillement maximal là où vit le client (le nombre d'heures de soleil à pleine puissance dans une journée). S'il y a environ 5 heures d'ensoleillement maximal : 190 / 5 = 38 W. Arrondissez à la taille de panneau supérieure, par exemple un panneau de 50 W. Ces heures changent selon le lieu et la saison ; consultez des données locales ou demandez à un installateur expérimenté, et dimensionnez pour les mois les plus nuageux.",
            "Batterie : elle doit contenir au moins le besoin d'une nuit. La plupart des batteries ne doivent pas être vidées complètement. Une batterie au lithium est souvent utilisée jusqu'à environ 80 % ; une batterie au plomb, jusqu'à environ 50 % (vérifiez le chiffre du fabricant). Pour 190 Wh avec du lithium : 190 / 0,8 = environ 238 Wh. Pour une batterie de 12 V, divisez par 12 : environ 20 Ah. Prévoyez plus si la famille veut de l'énergie les jours nuageux."
          ],
          steps: ["Listez chaque appareil, ses watts et ses heures par jour.", "Multipliez les watts par les heures pour chacun, puis additionnez : Wh par jour.", "Ajoutez environ 30 % pour les pertes.", "Panneau : besoin quotidien / heures d'ensoleillement maximal, puis arrondissez au-dessus.", "Batterie : besoin quotidien / part utilisable (par exemple 0,8), puis / 12 pour les ampères-heures à 12 V."],
          words: [["Watt (W)", "la puissance qu'un appareil utilise à un moment donné."], ["Wattheure (Wh)", "l'énergie utilisée : les watts multipliés par les heures."], ["Heures d'ensoleillement maximal", "le nombre d'heures de soleil à pleine puissance dans une journée à un endroit."], ["Ampère-heure (Ah)", "la quantité de charge que contient une batterie ; Wh = Ah x volts."]],
          slides: [
            { title: "Besoin d'énergie quotidien", bullets: ["Watts x heures = Wh pour chaque appareil", "Additionnez le tout", "Exemple : 145 Wh ; +30 % de pertes = environ 190 Wh"] },
            { title: "Taille du panneau", bullets: ["Wh par jour / heures d'ensoleillement maximal", "Exemple : 190 / 5 = 38 W : choisissez 50 W", "Dimensionnez pour les mois les plus nuageux"] },
            { title: "Taille de la batterie", bullets: ["Ne la videz pas complètement : lithium environ 80 %, plomb environ 50 %", "Exemple : 190 / 0,8 = environ 238 Wh", "À 12 V : 238 / 12 = environ 20 Ah"] },
            { title: "Les chiffres sont des exemples", bullets: ["Vérifiez les watts sur l'étiquette de chaque appareil", "Vérifiez les heures de soleil de votre région", "Vérifiez les chiffres du fabricant de la batterie"] }
          ],
          tryIt: "Faites un tableau d'énergie pour votre maison ou celle d'un voisin : chaque appareil, ses watts, ses heures et ses Wh. Faites le total, ajoutez 30 % et calculez la taille du panneau et de la batterie en suivant les étapes.",
          youCanNow: "calculer le besoin d'énergie quotidien d'un foyer et choisir la taille du panneau et de la batterie.",
          quickCheck: [
            { objective: "O2", q: "Une ampoule de 4 W est allumée 6 heures par jour. Combien de wattheures cela fait-il ?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x 6 heures = 24 Wh." },
            { objective: "O2", q: "Un foyer a besoin de 200 Wh par jour et il y a 5 heures d'ensoleillement maximal. Quelle est la plus petite taille de panneau d'après le calcul ?", options: ["40 W", "1 000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W ; arrondissez ensuite à la taille de panneau disponible juste au-dessus." }
          ]
        },
        {
          title: "Installer un petit système en sécurité",
          objectives: ["O3"],
          minutes: 6,
          goal: "Installer un petit kit solaire domestique en courant continu en suivant une liste de sécurité.",
          text: [
            "Panneau : placez-le là où il reçoit le plein soleil la plus grande partie de la journée, sans ombre d'arbres, de murs ou de fils. Orientez-le vers l'équateur : dans les pays au nord de l'équateur, vers le sud ; au sud de l'équateur, vers le nord. Inclinez-le au moins un peu, pour que la pluie lave la poussière. Fixez-le solidement pour que le vent ne puisse pas le soulever. Sur un toit, utilisez une échelle sûre, faites-la tenir par un aide et ne travaillez jamais sous la pluie ou par grand vent.",
            "Batterie : gardez-la à l'intérieur, dans un endroit sec, à l'ombre et aéré, surélevée du sol, hors de portée des enfants et loin du feu de cuisine. Les batteries au plomb dégagent un gaz inflammable pendant la charge et contiennent de l'acide : aérez-les, portez des lunettes de protection et des gants, et tenez les flammes à l'écart. Un court-circuit entre les bornes d'une batterie peut faire fondre des fils et provoquer un incendie.",
            "Câblage : utilisez la section de câble indiquée par le fabricant du kit, le rouge sur le positif (+) et le noir sur le négatif (-), et posez le fusible ou le disjoncteur indiqué par le fabricant, près de la batterie. Pour la plupart des kits avec un régulateur séparé, branchez d'abord la batterie au régulateur, puis le panneau, puis les charges ; suivez le manuel du fabricant s'il dit autre chose. Fixez les câbles pour qu'on ne puisse pas les arracher et que les animaux ne les rongent pas.",
            "Limites : ce cours couvre uniquement les petits systèmes en courant continu. Ne raccordez jamais un système solaire au réseau ni à l'installation électrique de la maison, et n'ouvrez jamais un onduleur. Ces travaux demandent un électricien agréé. Certains pays délivrent des licences aux techniciens solaires ; au Kenya, renseignez-vous auprès de l'EPRA, et ailleurs auprès de votre régulateur de l'énergie."
          ],
          steps: ["Choisissez un endroit ensoleillé et sans ombre ; orientez le panneau vers l'équateur avec une petite inclinaison ; fixez-le solidement.", "Travaillez en hauteur uniquement avec une échelle sûre et un aide ; jamais sous la pluie ou par grand vent.", "Placez la batterie à l'intérieur : au sec, à l'ombre, aérée, surélevée, loin des enfants et du feu.", "Utilisez le bon câble, rouge sur +, noir sur -, et posez le fusible près de la batterie.", "Branchez d'abord la batterie au régulateur, puis le panneau, puis les charges, sauf si le manuel dit autre chose.", "Aucun raccordement au réseau ni à l'installation de la maison ; n'ouvrez pas l'onduleur."],
          words: [["Polarité", "quel fil est le positif (+) et lequel est le négatif (-). Une erreur peut endommager les éléments."], ["Fusible", "une petite pièce de sécurité qui coupe le circuit si trop de courant passe."], ["Aéré", "où l'air frais circule, pour que les gaz ne s'accumulent pas."]],
          slides: [
            { title: "Placer le panneau", bullets: ["Plein soleil, pas d'ombre", "Vers l'équateur : au sud si vous êtes au nord, au nord si vous êtes au sud", "Petite inclinaison ; bien fixé ; échelle sûre et un aide"] },
            { title: "Placer la batterie", bullets: ["À l'intérieur : au sec, à l'ombre, aérée, surélevée", "Loin des enfants et du feu de cuisine", "Plomb : acide et gaz ; lunettes, gants, pas de flammes"] },
            { title: "Câblage", bullets: ["Bon câble ; rouge +, noir -", "Fusible près de la batterie", "D'abord batterie au régulateur, puis panneau, puis charges (ou selon le manuel)"] },
            { title: "Vos limites", bullets: ["Petits systèmes en courant continu uniquement", "Jamais le réseau ni l'installation de la maison ; jamais ouvrir un onduleur", "Licences : au Kenya, l'EPRA ; ailleurs, votre régulateur de l'énergie"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Rédigez votre liste de sécurité pour l'installation avec au moins huit lignes tirées de cette leçon. Si vous le pouvez, faites le tour d'une maison, choisissez le meilleur endroit pour le panneau et pour la batterie, et écrivez pourquoi.",
          youCanNow: "installer en sécurité un petit kit solaire domestique en courant continu en suivant une liste, et savoir quels travaux laisser à un électricien agréé.",
          quickCheck: [
            { objective: "O3", q: "La maison d'un client est à Nairobi, juste au sud de l'équateur. Vers où le panneau doit-il être orienté ?", options: ["Vers le sud", "Vers le bas", "Vers le nord, vers l'équateur", "Vers l'ombre"], answer: 2, why: "Les panneaux sont orientés vers l'équateur ; au sud de celui-ci, cela veut dire vers le nord." },
            { objective: "O3", q: "Un client vous demande de raccorder son kit solaire à l'installation électrique de sa maison reliée au réseau. Que faites-vous ?", options: ["Le faire vite", "Refuser : le travail sur le réseau et l'installation de la maison demande un électricien agréé", "Le faire la nuit", "Ouvrir d'abord l'onduleur"], answer: 1, why: "Ce cours couvre uniquement les petits systèmes en courant continu ; le travail sur le réseau et l'installation de la maison demande un électricien agréé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne un kit solaire domestique",
        questions: [
          { objective: "O1", q: "À quoi sert un onduleur ?", options: ["À stocker l'énergie", "À produire de l'énergie avec le soleil", "À mesurer la lumière du soleil", "À transformer le courant continu de la batterie en courant alternatif pour les prises normales"], answer: 3, why: "Un onduleur transforme le CC en CA." },
          { objective: "O1", q: "Pourquoi choisir un kit qui figure dans la base de données VeraSol ?", options: ["Il a été testé de façon indépendante pour ses performances, sa durée de vie et l'honnêteté de ses promesses", "C'est toujours le moins cher", "Il n'a jamais besoin d'entretien", "Il marche sans soleil"], answer: 0, why: "VeraSol certifie les kits après des tests indépendants." },
          { objective: "O2", q: "Un foyer a besoin de 120 Wh par jour avant les pertes. Combien environ en ajoutant 30 % ?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1,3 = 156 Wh." },
          { objective: "O2", q: "Pourquoi ne faut-il pas vider complètement une batterie au lithium chaque nuit ?", options: ["Cela rend les lampes plus lumineuses", "Elle ne sert que le jour", "C'est interdit par la loi", "La vider complètement réduit sa durée de vie, donc on dimensionne pour en utiliser environ 80 %"], answer: 3, why: "Garder un peu de charge protège la batterie ; le dimensionnement prévoit donc une part utilisable." },
          { objective: "O3", q: "Où faut-il placer un fusible ?", options: ["Près de la batterie, comme l'indique le fabricant", "Sur le toit", "Dans l'ampoule", "N'importe où, ou nulle part"], answer: 0, why: "Un fusible près de la batterie protège le câblage d'un court-circuit au niveau de la batterie." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Entretenir le système et gérer une activité solaire",
      lessons: [
        {
          title: "L'entretien et la recherche de pannes simples",
          objectives: ["O4"],
          minutes: 5,
          goal: "Faire l'entretien courant et trouver les pannes simples étape par étape.",
          text: [
            "Un système bien entretenu dure des années. Apprenez au client à : nettoyer le panneau avec de l'eau et un chiffon doux quand il est poussiéreux, tôt le matin ou le soir quand il fait frais (jamais avec un savon qui laisse un film, et sans jamais monter dessus) ; couper les branches qui font une nouvelle ombre ; garder la batterie propre et sèche ; éteindre les appareils inutiles.",
            "Quand un client dit \"les lampes s'éteignent trop tôt\", vérifiez dans cet ordre : (1) Panneau : est-il sale ou à l'ombre maintenant ? (2) Connexions : des fils ou des fiches desserrés, cassés ou corrodés ? (3) Régulateur : que montrent ses voyants ou son écran ? Lisez le manuel pour savoir ce qu'ils veulent dire. (4) Batterie : est-elle vieille, gonflée, chaude ou qui fuit ? (5) Charges : la famille a-t-elle ajouté une télévision plus grande ou plus d'ampoules que prévu au dimensionnement ?",
            "Beaucoup de pannes viennent de la saleté, de l'ombre, de fiches desserrées ou de charges en trop. Une batterie gonflée, très chaude ou qui fuit doit être remplacée ; ne la chargez jamais et ne l'ouvrez jamais. Les vieilles batteries sont des déchets électroniques : ne les brûlez pas, ne les enterrez pas et ne les jetez pas ; remettez-les à un collecteur agréé ou au programme de reprise de l'entreprise du kit.",
            "Exemple : Chinedu, à Kano, reçoit un appel : les lampes s'éteignent vers 20 h. Il trouve une nouvelle branche qui fait de l'ombre au panneau et une deuxième télévision branchée. Il coupe la branche avec l'accord du propriétaire et explique la taille du système ; la famille décide d'ajouter un deuxième panneau."
          ],
          steps: ["Vérifiez le panneau : propre et sans ombre ?", "Vérifiez les connexions : desserrées, cassées ou corrodées ?", "Comparez les voyants ou l'écran du régulateur avec le manuel.", "Vérifiez la batterie : vieille, gonflée, chaude ou qui fuit ?", "Vérifiez les charges : plus d'appareils ou de plus gros que prévu ?"],
          words: [["Corrosion", "une croûte verte ou blanche sur les connexions en métal qui empêche le courant de bien passer."], ["Programme de reprise", "un programme d'une entreprise pour récupérer ses anciens produits et les recycler en sécurité."]],
          slides: [
            { title: "Entretien courant", bullets: ["Nettoyez le panneau à l'eau avec un chiffon doux, au frais", "Coupez la nouvelle ombre ; batterie propre et sèche", "Éteignez ce qui ne sert pas"] },
            { title: "Chercher la panne dans l'ordre", bullets: ["1. Panneau : sale ou à l'ombre ?", "2. Connexions : desserrées ou corrodées ?", "3. Voyants du régulateur ; 4. Batterie ; 5. Charges en trop"] },
            { title: "Attention à la batterie", bullets: ["Gonflée, très chaude ou qui fuit : remplacez-la", "Ne chargez et n'ouvrez jamais une batterie abîmée", "Vieilles batteries : collecteur agréé ou reprise"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Rédigez une fiche d'entretien pour un client (quatre lignes d'entretien courant) et une liste de recherche de pannes en cinq étapes que vous emporterez à chaque intervention.",
          youCanNow: "apprendre à un client à entretenir son système et trouver les pannes simples dans le bon ordre.",
          quickCheck: [
            { objective: "O4", q: "Les lampes s'éteignent trop tôt. Que vérifiez-vous en premier ?", options: ["La couleur de la batterie", "Si le panneau est sale ou à l'ombre", "Le téléphone du client", "Le prix du kit"], answer: 1, why: "Commencez par le panneau : la saleté et une nouvelle ombre sont des causes fréquentes et faciles." },
            { objective: "O4", q: "Vous trouvez une batterie gonflée et chaude. Que faites-vous ?", options: ["La remplacer ; ne pas la charger ni l'ouvrir", "La charger plus longtemps", "L'ouvrir pour regarder dedans", "La brûler"], answer: 0, why: "Une batterie gonflée et chaude est dangereuse et doit être remplacée en sécurité." }
          ]
        },
        {
          title: "Vendre honnêtement : au comptant et en paiement à l'usage",
          objectives: ["O5"],
          minutes: 5,
          goal: "Expliquer le prix au comptant et les conditions du paiement à l'usage pour que le client puisse dire le total qu'il paiera.",
          text: [
            "Beaucoup de familles ne peuvent pas payer tout le prix en une fois ; beaucoup d'entreprises vendent donc les kits en paiement à l'usage (PAYGo, de l'anglais pay-as-you-go). Le client verse un acompte, puis de petits paiements, souvent chaque jour, chaque semaine ou chaque mois, par mobile money. Si les paiements s'arrêtent, le kit se bloque jusqu'au paiement suivant. Après le dernier paiement, le kit appartient au client.",
            "Le PAYGo aide les familles à avoir le solaire plus tôt, mais le total est en général plus élevé que le prix au comptant. Un vendeur honnête montre les deux. Exemple (les chiffres ne sont que des exemples) : prix au comptant 20 000 KES. PAYGo : acompte de 2 000 KES, puis 1 500 KES par mois pendant 18 mois : 2 000 + (1 500 x 18) = 29 000 KES au total. Le client doit pouvoir dire ce total avant de signer.",
            "GOGLA, l'association du secteur du solaire hors réseau, a un code de protection des consommateurs fondé sur la vente et les prix responsables (ne pas vendre plus que ce que la famille peut payer), la transparence (une information claire et honnête), un traitement équitable et respectueux, un bon service et la qualité des produits. Suivez-le, que votre entreprise l'ait signé ou non.",
            "Ne promettez jamais plus que ce que le système peut alimenter. Ne demandez jamais à un client son code PIN de mobile money ; les paiements vont au numéro officiel ou à la caisse de l'entreprise, et une vraie entreprise ne demande jamais de code PIN."
          ],
          steps: ["Montrez le prix au comptant.", "Montrez l'acompte du PAYGo, le montant des paiements, leur fréquence et leur durée.", "Calculez avec le client le coût total du PAYGo.", "Expliquez ce qui se passe en cas de paiement manqué, et la garantie.", "Vérifiez que le client peut payer ; ne demandez jamais de code PIN."],
          words: [["PAYGo (paiement à l'usage)", "acheter un kit avec un acompte et de petits paiements ; il se bloque si les paiements s'arrêtent et vous appartient après le dernier."], ["Acompte", "le premier paiement, avant que le client emporte le kit."], ["Protection des consommateurs", "des règles et des habitudes pour traiter les clients de façon équitable et honnête."]],
          slides: [
            { title: "Comment marche le PAYGo", bullets: ["Acompte, puis petits paiements par mobile money", "Le kit se bloque si les paiements s'arrêtent", "Le client en est propriétaire après le dernier paiement"] },
            { title: "Montrez le total", bullets: ["Le total en PAYGo est en général plus élevé qu'au comptant", "Exemple : 2 000 + 1 500 x 18 = 29 000 KES contre 20 000 KES au comptant", "Le client peut dire le total avant de signer"] },
            { title: "Vendre équitablement (code GOGLA)", bullets: ["Vente responsable : seulement ce qu'ils peuvent payer", "Transparence ; traitement équitable et respectueux", "Bon service et qualité"] },
            { title: "Jamais", bullets: ["Promettre plus que ce que le système peut alimenter", "Demander un code PIN de mobile money"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Pour un kit que vous connaissez (ou celui de l'exemple), écrivez côte à côte le prix au comptant et les conditions du PAYGo, et calculez le coût total du PAYGo. Entraînez-vous à l'expliquer à voix haute en moins d'une minute.",
          youCanNow: "expliquer honnêtement les prix au comptant et en paiement à l'usage pour que le client connaisse le total avant de signer.",
          quickCheck: [
            { objective: "O5", q: "Acompte PAYGo de 10 000 XOF, puis 5 000 XOF par mois pendant 12 mois. Quel est le total ?", options: ["15 000 XOF", "60 000 XOF", "50 000 XOF", "70 000 XOF"], answer: 3, why: "10 000 + (5 000 x 12) = 70 000." },
            { objective: "O5", q: "Laquelle de ces pratiques est une vente honnête ?", options: ["Cacher le coût total du PAYGo", "Promettre que le kit fera marcher un réfrigérateur alors que c'est impossible", "Montrer côte à côte le prix au comptant et le coût total du PAYGo", "Vendre à une famille plus que ce qu'elle peut payer"], answer: 2, why: "La transparence, c'est montrer clairement les deux prix." }
          ]
        },
        {
          title: "Rédiger un devis et gérer votre activité solaire",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Rédiger un devis complet et honnête pour un foyer.",
          text: [
            "Un bon devis inspire confiance. Il montre au client ce qu'il a demandé d'alimenter, le tableau d'énergie, le système choisi et pourquoi, le prix, les conditions de paiement et la garantie. Il porte aussi votre nom, votre numéro de téléphone et la date.",
            "Votre propre prix pour une installation doit couvrir le kit, les câbles et accessoires, le transport jusqu'à la maison, votre temps et un bénéfice. Exemple (les chiffres ne sont que des exemples) : kit 2 500 MAD, câbles et accessoires 300 MAD, transport 150 MAD, main-d'œuvre 400 MAD : coût 3 350 MAD. Ajoutez 400 MAD de bénéfice : 3 750 MAD.",
            "Après l'installation, remettez au client une fiche : les étapes d'entretien, la signification des voyants du régulateur, la garantie et votre numéro en cas de problème. Revenez au bout d'un mois pour vérifier. Les clients satisfaits vous envoient leurs voisins ; c'est ainsi que les activités solaires grandissent dans les villages, de Kitui à Kaolack.",
            "Tenez un registre simple de chaque chantier : le client, le kit et son numéro de série, la date, le prix et les retours pour dépannage. Cela vous aide à honorer les garanties et à voir quels kits tombent en panne."
          ],
          steps: ["Écrivez le tableau d'énergie et le dimensionnement que vous avez fait.", "Nommez le kit et dites s'il est certifié ou a une garantie écrite.", "Ajoutez votre liste de sécurité.", "Montrez le prix au comptant et, s'il y en a, les conditions du PAYGo avec le total.", "Joignez la fiche d'entretien et de garantie, avec votre nom, votre numéro et la date."],
          words: [["Devis", "une offre écrite qui montre ce que vous allez fournir et faire, et le prix."], ["Numéro de série", "le numéro unique d'un produit, utilisé pour sa garantie."], ["Retour pour dépannage", "une nouvelle visite pour régler un problème après l'installation."]],
          slides: [
            { title: "Ce que montre un devis", bullets: ["Ce qu'ils veulent alimenter : tableau d'énergie", "Le système et pourquoi ; certifié ou avec garantie", "Prix, conditions, garantie ; votre nom, numéro, date"] },
            { title: "Le prix de votre installation", bullets: ["Kit + câbles + transport + main-d'œuvre + bénéfice", "Exemple : coût 3 350 MAD + 400 MAD = 3 750 MAD", "Les chiffres ne sont que des exemples"] },
            { title: "Après le chantier", bullets: ["Fiche d'entretien et de garantie", "Revenez au bout d'un mois", "Registre : client, kit, numéro de série, date, prix"] }
          ],
          tryIt: "Rédigez votre devis complet pour un foyer, comme décrit dans la tâche finale. Lisez-le à un ami et demandez-lui de vous dire le total qu'il paierait.",
          youCanNow: "rédiger un devis complet et honnête pour un kit solaire domestique et bien noter chaque chantier.",
          quickCheck: [
            { objective: "O5", q: "Quel élément doit figurer sur chaque devis ?", options: ["Le code PIN de mobile money du client", "Le total que le client paiera, et la garantie", "La promesse d'une énergie gratuite pour toujours", "Seulement les prix de vos concurrents"], answer: 1, why: "Le coût total et la garantie permettent au client de décider en toute connaissance de cause." },
            { objective: "O2", q: "Pourquoi mettre le tableau d'énergie sur le devis ?", options: ["Il montre comment vous avez dimensionné le système selon l'usage réel de la famille", "Pour rendre le devis plus long", "Les clients aiment les chiffres", "Ce n'est pas utile"], answer: 0, why: "Le tableau montre que le système correspond à ce que la famille va alimenter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Entretenir et vendre",
        questions: [
          { objective: "O4", q: "Comment un client doit-il nettoyer un panneau poussiéreux ?", options: ["Avec du savon à midi", "En montant dessus pour frotter", "Avec de l'eau et un chiffon doux quand il est frais", "Avec du sable"], answer: 2, why: "De l'eau et un chiffon doux, sur un panneau frais, nettoient sans abîmer." },
          { objective: "O4", q: "Les lampes s'éteignent trop tôt et le panneau est propre et sans ombre. Que vérifiez-vous ensuite ?", options: ["La chaîne de télévision du client", "Les connexions : fils desserrés, cassés ou corrodés", "La météo", "Rien d'autre"], answer: 1, why: "Les connexions viennent ensuite dans l'ordre de recherche de pannes." },
          { objective: "O4", q: "Que faut-il faire d'une vieille batterie solaire ?", options: ["La brûler", "L'enterrer", "La jeter dans la rivière", "La remettre à un collecteur agréé ou à un programme de reprise"], answer: 3, why: "Les vieilles batteries sont des déchets électroniques et doivent être recyclées en sécurité." },
          { objective: "O5", q: "En PAYGo, que se passe-t-il quand les paiements s'arrêtent ?", options: ["Le kit se bloque jusqu'à ce que le client paie à nouveau", "Le client en devient tout de suite propriétaire", "Le panneau se casse", "Rien du tout"], answer: 0, why: "Les kits PAYGo se bloquent quand les paiements s'arrêtent et se débloquent une fois payés." },
          { objective: "O5", q: "Un client ne peut payer que la moitié de la mensualité. Que veut dire vendre de façon responsable ?", options: ["Vendre quand même le gros kit", "Cacher le montant des paiements", "Proposer un kit plus petit ou un plan qu'il peut payer", "Lui demander son code PIN"], answer: 2, why: "Vendre de façon responsable, c'est ne pas vendre plus que ce que la famille peut payer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Kits solaires domestiques : installer, vendre et créer une activité d'énergie hors réseau",
    questions: [
      { objective: "O1", q: "Quel élément stocke l'énergie pour la nuit ?", options: ["Le panneau", "La batterie", "Le fusible", "La lampe"], answer: 1, why: "La batterie stocke l'énergie pour l'utiliser quand il n'y a pas de soleil." },
      { objective: "O1", q: "Qu'est-ce que VeraSol ?", options: ["Une marque de batteries", "Une entreprise solaire qui vend en PAYGo", "Un programme de qualité indépendant qui certifie les kits solaires hors réseau", "Une taxe de l'État"], answer: 2, why: "VeraSol est un programme indépendant d'assurance qualité pour le solaire hors réseau." },
      { objective: "O1", q: "Un kit n'a ni étiquette, ni certification, ni garantie. Que faites-vous ?", options: ["Demander une garantie écrite et les résultats de tests, ou choisir un kit certifié", "Le vendre comme certifié", "Le vendre plus cher", "L'installer sans rien dire à personne"], answer: 0, why: "Sans preuve de qualité, demandez une garantie et des résultats de tests, ou choisissez un kit certifié." },
      { objective: "O1", q: "Pourquoi les petits kits utilisent-ils souvent des appareils en CC ?", options: ["Ils font plus de bruit", "Ils ont besoin du réseau", "Ils sont toujours gratuits", "Ils consomment moins que des appareils en CA avec un onduleur"], answer: 3, why: "Les appareils en CC évitent les pertes de l'onduleur et consomment moins." },
      { objective: "O2", q: "Une radio consomme 5 W pendant 6 heures par jour. Combien de Wh ?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "Pourquoi ajouter environ 30 % au total quotidien ?", options: ["Pour les pertes dans les câbles, le régulateur et la batterie", "Pour le bénéfice", "Pour les impôts", "Pour le crédit téléphonique du client"], answer: 0, why: "De l'énergie se perd en chemin, donc le système doit produire plus que ce que les charges consomment." },
      { objective: "O2", q: "Besoin quotidien de 300 Wh, 5 heures d'ensoleillement maximal. Quel est le plus petit panneau d'après le calcul ?", options: ["1 500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W ; arrondissez ensuite à la taille de panneau supérieure." },
      { objective: "O2", q: "Besoin quotidien de 240 Wh, batterie au lithium utilisée à 80 %, 12 V. Combien d'ampères-heures environ ?", options: ["Environ 25 Ah", "Environ 12 Ah", "Environ 300 Ah", "Environ 2 Ah"], answer: 0, why: "240 / 0,8 = 300 Wh ; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "Un client vit dans le nord du Ghana, au nord de l'équateur. Vers où le panneau doit-il être orienté ?", options: ["Vers le nord", "Tout droit vers le ciel, sans aucune inclinaison", "Vers le sud, vers l'équateur", "Seulement vers l'est"], answer: 2, why: "Au nord de l'équateur, les panneaux sont orientés vers le sud, vers l'équateur, avec une petite inclinaison." },
      { objective: "O3", q: "Où doit aller la batterie ?", options: ["Sur le toit, au soleil", "À côté du feu de cuisine", "À l'intérieur, au sec, à l'ombre, aérée, surélevée, loin des enfants", "Dans une boîte fermée sans air"], answer: 2, why: "Un endroit sec, à l'ombre et aéré, loin des enfants et du feu, est le plus sûr." },
      { objective: "O3", q: "Dans la plupart des kits avec un régulateur séparé, que branchez-vous en premier ?", options: ["Le panneau aux charges", "La batterie au régulateur", "Les charges au réseau", "Le panneau directement à la batterie"], answer: 1, why: "Brancher d'abord la batterie au régulateur permet au régulateur de se configurer ; ensuite le panneau, puis les charges, sauf si le manuel dit autre chose." },
      { objective: "O3", q: "Quel travail sort du cadre de ce cours et demande un électricien agréé ?", options: ["Nettoyer le panneau", "Placer la batterie", "Poser le fusible du fabricant", "Raccorder le système au réseau ou à l'installation électrique de la maison"], answer: 3, why: "Le travail sur le réseau et l'installation de la maison est réservé aux électriciens agréés." },
      { objective: "O3", q: "Pourquoi garder les batteries au plomb aérées et loin des flammes ?", options: ["Elles dégagent un gaz inflammable pendant la charge", "Elles deviennent trop froides", "Elles attirent les insectes", "Elles ont besoin de soleil"], answer: 0, why: "Pendant la charge, les batteries au plomb dégagent un gaz inflammable." },
      { objective: "O4", q: "Quel est le meilleur moment pour nettoyer un panneau ?", options: ["À midi, en plein soleil", "Tôt le matin ou le soir, quand il fait frais", "Pendant un orage", "Jamais"], answer: 1, why: "Un panneau frais est plus sûr à toucher et à nettoyer qu'un panneau chaud en plein soleil." },
      { objective: "O4", q: "Quel est le bon ordre pour chercher une panne ?", options: ["La batterie, puis deviner", "Les charges, puis acheter un nouveau kit", "Panneau, connexions, régulateur, batterie, charges", "Le régulateur seulement"], answer: 2, why: "Vérifier dans cet ordre permet de trouver d'abord les causes fréquentes et faciles." },
      { objective: "O4", q: "Une famille a ajouté une grande télévision et maintenant les lampes s'éteignent trop tôt. Quelle est la cause probable ?", options: ["Le panneau est à l'envers", "Le soleil est plus faible", "Le fusible est trop fort", "Plus de charge que prévu au dimensionnement du système"], answer: 3, why: "Les charges en trop consomment plus d'énergie que le système n'en produit et n'en stocke." },
      { objective: "O5", q: "Prix au comptant 150 000 NGN. PAYGo : acompte de 20 000 NGN, puis 12 000 NGN par mois pendant 12 mois. Quel est le total en PAYGo ?", options: ["164 000 NGN", "144 000 NGN", "32 000 NGN", "150 000 NGN"], answer: 0, why: "20 000 + (12 000 x 12) = 164 000." },
      { objective: "O5", q: "Qui demandera à un client son code PIN de mobile money ?", options: ["L'entreprise solaire", "Votre responsable", "Aucune vraie entreprise : seulement les escrocs", "L'installateur"], answer: 2, why: "Une vraie entreprise ne demande jamais de code PIN." },
      { objective: "O5", q: "Qu'est-ce qui fait partie du code de protection des consommateurs de GOGLA ?", options: ["Vendre le plus gros kit à tout le monde", "La transparence : une information claire et honnête", "Cacher le prix total", "Aucun service après-vente"], answer: 1, why: "La transparence et la vente responsable sont des principes essentiels." },
      { objective: "O5", q: "Kit 4 000 EGP, câbles 500 EGP, transport 300 EGP, main-d'œuvre 700 EGP, bénéfice 500 EGP. Quel est votre prix ?", options: ["5 500 EGP", "4 500 EGP", "5 000 EGP", "6 000 EGP"], answer: 3, why: "4 000 + 500 + 300 + 700 + 500 = 6 000." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie de votre devis et réessayez.",
    criteria: [
      { name: "Qualité vérifiée", objective: "O1", notYet: "Le kit n'est pas nommé, ou la qualité n'est pas vérifiée.", meets: "Le kit et ses éléments sont nommés, et le devis indique s'il figure dans la base de données VeraSol ou s'il a une garantie écrite.", exceeds: "Il explique aussi au client pourquoi un kit certifié compte." },
      { name: "Bon dimensionnement", objective: "O2", notYet: "Pas de tableau d'énergie, ou des calculs faux.", meets: "Le tableau d'énergie, la marge de 30 % et les tailles du panneau et de la batterie sont calculés correctement.", exceeds: "Il prévoit aussi les jours nuageux ou les mois les plus nuageux, et dit d'où vient le chiffre des heures de soleil." },
      { name: "Installation sûre", objective: "O3", notYet: "Pas de liste de sécurité, ou elle comprend du travail sur le réseau ou l'installation de la maison.", meets: "La liste couvre la place du panneau, la sécurité sur l'échelle, la place de la batterie, la polarité, le fusible et l'ordre des branchements, sans travail sur le réseau.", exceeds: "Elle nomme aussi le régulateur de l'énergie à consulter pour les licences." },
      { name: "Entretien et pannes", objective: "O4", notYet: "Pas de fiche d'entretien, ou des conseils dangereux.", meets: "La fiche donne l'entretien courant et l'ordre de recherche de pannes en cinq étapes, et dit quoi faire des vieilles batteries.", exceeds: "Elle explique aussi les voyants du régulateur de ce kit." },
      { name: "Prix et conditions honnêtes", objective: "O5", notYet: "Le coût total du PAYGo ou la garantie manque, ou les calculs sont faux.", meets: "Le prix au comptant, les conditions du PAYGo s'il y en a et le bon total sont présentés côte à côte, avec la garantie et le contact de l'installateur.", exceeds: "Il vérifie aussi que les paiements entrent dans le budget de la famille et dit ce qui se passe en cas de paiement manqué." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir rédigé un devis avec un tableau d'énergie pour un vrai client dans les 30 jours (enquête de suivi)",
      "Apprenants qui disent avoir vendu ou installé un kit certifié dans les 90 jours",
      "Apprenants qui ne signalent ni incendie de batterie, ni électrocution, ni plainte de client pour coûts cachés sur 90 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone simple avec une calculatrice ; des données mobiles pour une courte recherche dans la base de données VeraSol si possible",
      "Du papier et un stylo pour le tableau d'énergie, la liste de sécurité, la fiche d'entretien et le devis",
      "Si possible, un petit kit solaire certifié à observer pour en nommer les éléments",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Dans un groupe de jeunes, de formation professionnelle ou de femmes : faites le test de départ ensemble, puis un chapitre par séance, en faisant dimensionner un système pour une vraie maison que les apprenants connaissent.",
      "L'installation pratique ne doit se faire qu'avec un installateur expérimenté, sur de petits kits en courant continu ; ne laissez jamais les apprenants travailler sur le réseau, l'installation électrique de la maison ou les onduleurs.",
      "Avant le cours, renseignez-vous pour savoir si votre pays délivre des licences aux techniciens solaires et quels collecteurs de déchets électroniques ou programmes de reprise existent dans votre région.",
      "Ne demandez jamais aux apprenants de partager leurs codes PIN ou mots de passe en classe.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
