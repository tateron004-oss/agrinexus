"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-post-harvest.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FAO_LOSS = { name: "FAO : Réduire les pertes et le gaspillage alimentaires (environ 14 pour cent des aliments perdus entre la récolte et la vente au détail, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO : Prévention et lutte contre les mycotoxines dans les grains : lutte contre l'aflatoxine dans le maïs", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "Portail FAO TECA/STI : Un maïs bien séché profite à tous : le séchoir solaire à maïs", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA : produits de lutte biologique Aflasafe contre l'aflatoxine pour les agriculteurs africains", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Université Purdue : sacs hermétiques Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "Portail FAO TECA/STI : chambre de refroidissement sans énergie pour les légumes", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-fr",
  lang: "fr",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Manutention et stockage après récolte",
  skills: "Trouver où votre récolte se perd, Récolter au bon moment, Sécher le grain jusqu'à une humidité sûre, Prévenir l'aflatoxine, Stocker le grain dans des sacs hermétiques, Refroidir, trier par qualité et emballer les produits frais",
  outcome: "mener un plan après récolte pour une culture : la récolter au bon moment, sécher le grain jusqu'à une humidité sûre, éviter l'aflatoxine, la stocker dans des sacs hermétiques, et garder les produits frais au frais, triés par qualité et bien emballés pour l'acheteur.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs en croissance, aux ouvriers agricoles, aux commerçants et aux jeunes de l'agro-industrie au Kenya, au Nigeria, au Ghana et partout en Afrique. Une bonne récolte peut encore perdre une grande partie de sa valeur après avoir quitté le champ : le grain moisit ou les charançons le mangent, les tomates sont écrasées, et les acheteurs paient moins ou refusent la marchandise.",
    "Le chapitre 1 explique comment bien rentrer la récolte : où et pourquoi les pertes arrivent, récolter au bon moment, et sécher le grain jusqu'à une humidité sûre. Le chapitre 2 explique comment la conserver : prévenir l'aflatoxine, stocker le grain dans des sacs hermétiques, et garder les produits frais au frais, triés par qualité et bien emballés.",
    "Les acheteurs et les normes nationales fixent leurs propres règles de qualité : demandez toujours à votre acheteur, à votre coopérative ou à votre agent de vulgarisation ce qu'ils exigent. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre ferme ou dans votre magasin. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan après récolte d'une page pour une culture (la vôtre, ou un exemple comme 2 acres de maïs à Trans Nzoia, 1 acre de tomates à Kaduna, ou du niébé à Tamale) : quand et comment vous récolterez, comment vous sécherez et vérifierez l'humidité (pour le grain), comment vous éviterez l'aflatoxine, comment et où vous stockerez, et comment vous refroidirez, trierez et emballerez pour votre acheteur, avec les règles de qualité de l'acheteur écrites en haut.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des petits et moyens agriculteurs, des ouvriers agricoles, des commerçants et de jeunes travailleurs de l'agrobusiness au Kenya, au Nigeria, au Ghana et partout en Afrique qui manipulent le grain, les légumineuses et les produits frais après la récolte.",
    startingPoint: "La plupart récoltent quand la culture a l'air prête, sèchent le grain au soleil sur la surface la plus proche, le stockent dans des sacs, et transportent les produits en sacs ou en tas. Peu vérifient l'humidité du grain, savent comment se forme l'aflatoxine, utilisent des sacs hermétiques ou trient et emballent les produits selon les règles d'un acheteur.",
    gap: "Une bonne partie d'une bonne récolte perd de la quantité ou de la valeur après avoir quitté le champ : charançons, moisissure et rats dans le magasin, produits écrasés, et grain refusé à cause de l'aflatoxine, qui nuit aussi aux familles qui le mangent. Un plan après récolte garde une plus grande part de la récolte, garde les aliments sûrs et rapporte de meilleurs prix.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes ; chaque terme est expliqué",
      "Appareils : un téléphone simple ; des bâches, des sacs et des caisses que l'apprenant a déjà ou peut emprunter",
      "Les acheteurs et les normes nationales fixent leurs propres règles de qualité : les apprenants les demandent à leur acheteur, leur coopérative ou la vulgarisation",
      "Sécurité des aliments : ne jamais manger, vendre ou donner aux animaux du grain moisi ; les produits de lutte biologique seulement s'ils sont homologués et selon l'étiquette",
      "Temps : des leçons d'environ 5 minutes qui s'adaptent aux travaux de la récolte"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour une culture", action: "tracer son chemin du champ à l'acheteur et marquer où elle perd de la quantité ou de la valeur", standard: "en nommant au moins trois points de perte et ce qui les réglerait" },
    { id: "O2", condition: "Pour chacune de vos cultures", action: "identifier les signes de maturité et planifier les jours de récolte avec la prévision météo", standard: "avec les outils, les sacs ou les caisses et la main-d'œuvre prêts avant la récolte" },
    { id: "O3", condition: "Pour du grain fraîchement récolté", action: "le sécher vite, hors du sol, et vérifier qu'il a atteint une humidité sûre", standard: "environ 13 à 14 % ou la limite de l'acheteur, vérifiée avec un humidimètre ou le test du sel" },
    { id: "O4", condition: "Pour le maïs, l'arachide ou d'autres cultures à risque", action: "lister et appliquer les principales étapes qui empêchent l'aflatoxine d'entrer", standard: "en retirant le grain moisi et abîmé, sans jamais le manger, le vendre ou le donner aux animaux" },
    { id: "O5", condition: "Avec du grain sec, propre et trié", action: "remplir, fermer et stocker un sac hermétique", standard: "avec chaque sac intérieur noué de façon étanche et le sac posé hors du sol, loin des murs et à l'abri des rats" },
    { id: "O6", condition: "Pour les produits frais", action: "les garder au frais, les trier selon la norme de l'acheteur et les emballer pour qu'ils arrivent sans meurtrissures", standard: "dans des caisses propres, aérées et étiquetées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Bien rentrer la récolte",
      lessons: [
        {
          objectives: ["O1"],
          title: "Où les récoltes se perdent, et pourquoi",
          minutes: 4,
          goal: "Suivre votre culture du champ à l'acheteur et marquer où elle perd de la quantité ou de la valeur.",
          text: [
            "La FAO a estimé en 2019 qu'environ 14 pour cent des aliments du monde sont perdus entre la récolte et le magasin, avant même d'arriver sur un étal. Dans beaucoup de fermes africaines, les pertes sont plus élevées pour certaines cultures. Chaque sac perdu, c'est de la semence, de l'engrais et du travail jetés.",
            "Les pertes arrivent à chaque étape : récolter trop tôt ou trop tard, laisser la récolte sous la pluie, manipuler brutalement et meurtrir, la chaleur, un séchage trop lent, les insectes comme les charançons et le grand capucin du grain, les rats, la moisissure, et un mauvais emballage sur des routes cahoteuses. Certaines pertes se voient (moins de sacs) ; d'autres non (une qualité plus basse, un prix plus bas, ou un grain dangereux à manger).",
            "La première étape est de trouver vos plus grandes pertes. Suivez votre culture du champ jusqu'à l'acheteur et demandez à chaque étape : qu'est-ce qui ne va pas ici, combien est perdu, et combien coûterait la solution ?"
          ],
          steps: ["Listez chaque étape que traverse votre culture : récolte, transport au champ, séchage, battage ou égrenage, stockage, emballage, transport, vente.", "À chaque étape, écrivez ce qui ne va pas (pluie, meurtrissures, insectes, rats, moisissure).", "Estimez combien est perdu ou de combien le prix baisse.", "Entourez les deux plus grandes pertes ; c'est par là que vous commencez."],
          words: [["Perte après récolte", "nourriture ou valeur perdue entre la récolte et la vente."], ["Grand capucin du grain", "un coléoptère qui perce le maïs et le manioc stockés et les réduit en poudre."], ["Qualité (catégorie)", "une classe de qualité, comme premier ou deuxième choix, qui fixe le prix."]],
          slides: [
            { title: "L'ampleur des pertes (FAO)", bullets: ["Environ 14 pour cent des aliments perdus entre récolte et magasin", "Souvent plus pour certaines cultures dans les fermes africaines", "Chaque sac perdu gaspille semence, engrais et travail"] },
            { title: "Pourquoi ça arrive", bullets: ["Mauvais moment de récolte, pluie, séchage lent", "Meurtrissures, chaleur, transport brutal", "Charançons, capucins, rats, moisissure"] },
            { title: "Trouvez vos plus grandes pertes", bullets: ["Suivez la culture du champ à l'acheteur", "Demandez ce qui ne va pas à chaque étape", "Commencez par les deux plus grandes"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Dessinez le chemin de votre culture du champ à l'acheteur sous forme de cases en ligne. Sous chaque case, écrivez ce qui ne va pas et à peu près combien est perdu. Entourez les deux plus grandes pertes.",
          youCanNow: "repérer où votre récolte perd de la quantité ou de la valeur et choisir les pertes à corriger d'abord.",
          quickCheck: [
            { objective: "O1", q: "Quel insecte est cité comme ravageur des stocks qui mange le grain ?", options: ["L'abeille", "La coccinelle", "Le grand capucin du grain", "Le papillon"], answer: 2, why: "Les charançons et le grand capucin du grain sont des insectes des stocks qui causent des pertes de grain." },
            { objective: "O1", q: "Au marché, beaucoup de vos tomates sont refusées parce qu'elles sont écrasées. Que faites-vous ?", options: ["Suivre la culture en remontant le chemin, trouver l'étape où elles s'écrasent et ce que coûterait la solution", "Vendre à un autre acheteur la prochaine fois sans rien changer", "Cultiver autre chose", "Accuser l'acheteur"], answer: 0, why: "Suivre la culture étape par étape montre où se font les pertes et quoi corriger." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Récolter au bon moment",
          minutes: 5,
          goal: "Identifier les signes de maturité de chacune de vos cultures et planifier les jours de récolte.",
          text: [
            "Récolter trop tôt donne un grain ou des produits petits et légers qui mûriront mal ; trop tard expose à la pluie, aux insectes, aux oiseaux, au vol et à la pourriture. Apprenez les signes de chaque culture.",
            "Le maïs est mûr quand les spathes sont sèches et le grain dur, avec un point noir à sa base ; il peut alors sécher encore un peu sur pied si le temps est sec, mais ne le laissez pas dehors pendant les pluies. Le haricot et le niébé sont prêts quand la plupart des gousses sont sèches et font du bruit quand on les secoue. Le sorgho est prêt quand le grain est dur et ne se marque pas avec l'ongle. Les tomates sont cueillies au stade de couleur que veut l'acheteur (souvent quand elles commencent à changer de couleur pour les marchés lointains). Le café : cueillez seulement les cerises rouges et mûres. Le thé : cueillez la pousse tendre, en général deux feuilles et un bourgeon. Les racines de manioc s'abîment quelques jours après la récolte, alors arrachez seulement ce que vous pouvez vendre ou transformer vite.",
            "Planifiez les jours de récolte avec la prévision météo. Récoltez les produits frais tôt le matin quand il fait frais, gardez-les à l'ombre, et préparez sacs, caisses, bâches et main-d'œuvre avant de commencer."
          ],
          steps: ["Écrivez les signes de maturité de chaque culture que vous faites.", "Parcourez le champ et vérifiez les signes chaque semaine quand la récolte approche.", "Regardez la prévision et choisissez des jours secs pour le grain.", "Préparez bâches, sacs ou caisses et main-d'œuvre.", "Récoltez les produits frais le matin au frais et gardez-les à l'ombre."],
          words: [["Maturité", "le stade où une culture a fini de pousser et est prête à être récoltée."], ["Point noir", "une tache sombre à la base du grain de maïs qui montre qu'il est mûr."], ["Deux feuilles et un bourgeon", "la pousse tendre du thé que cueillent les cueilleurs pour un thé de bonne qualité."]],
          slides: [
            { title: "Trop tôt ou trop tard, ça coûte", bullets: ["Trop tôt : petit, léger, mûrit mal", "Trop tard : pluie, insectes, oiseaux, vol, pourriture"] },
            { title: "Signes de maturité", bullets: ["Maïs : spathes sèches, grain dur, point noir", "Haricot : la plupart des gousses sèches et sonores", "Café : cerises rouges mûres ; thé : deux feuilles et un bourgeon"] },
            { title: "Cultures fraîches", bullets: ["Tomates : stade de couleur voulu par l'acheteur", "Manioc : arrachez seulement ce qui se vendra vite", "Récoltez le matin au frais ; gardez à l'ombre"] },
            { title: "Soyez prêt", bullets: ["Regardez la prévision ; choisissez des jours secs", "Bâches, sacs, caisses et main-d'œuvre d'abord"] }
          ],
          tryIt: "Pour deux cultures que vous faites, écrivez les signes de maturité et la date de récolte prévue. Demandez à votre acheteur quel stade ou quelle qualité il veut et notez-le. Mettez un rappel dans votre téléphone pour regarder la prévision une semaine avant.",
          youCanNow: "savoir quand vos cultures sont prêtes et planifier des jours de récolte qui protègent la qualité.",
          quickCheck: [
            { objective: "O2", q: "Comment savez-vous que le sorgho est prêt à récolter ?", options: ["Les feuilles sont encore vertes", "Les épis sont petits", "Le grain est mou et laiteux", "Le grain est dur et ne se marque pas avec l'ongle"], answer: 3, why: "Le sorgho est prêt quand le grain est dur et ne se marque pas avec l'ongle." },
            { objective: "O2", q: "Votre maïs est mûr et de fortes pluies sont prévues la semaine prochaine. Que faites-vous ?", options: ["Le laisser sur pied pendant les pluies", "Récolter avant la pluie, avec les bâches et les sacs prêts", "Récolter seulement après la fin des pluies", "Le couper et le laisser par terre"], answer: 1, why: "Planifiez la récolte avec la prévision et ne laissez pas le maïs mûr dehors pendant les pluies." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sécher le grain jusqu'à une humidité sûre",
          minutes: 6,
          goal: "Sécher le grain vite et vérifier qu'il a atteint une humidité sûre pour le stockage.",
          text: [
            "Le grain qui vient d'être récolté contient beaucoup d'eau. Le grain humide chauffe, moisit et attire les insectes. Les conseils de la FAO sur le maïs disent que le sécher jusqu'à une humidité sûre d'environ 13 à 14 pour cent avant que la moisissure pousse est le moyen le plus sûr de prévenir l'aflatoxine, et que le séchage doit être rapide : un grain qui reste humide plus de deux jours environ court un risque beaucoup plus grand. Votre acheteur, votre coopérative ou la norme nationale peut fixer son propre maximum, alors demandez.",
            "Séchez sur une bâche propre, une claie surélevée, une natte ou une aire cimentée, jamais sur la terre nue. Étalez le grain en couche fine, retournez-le plusieurs fois par jour, et couvrez-le ou rentrez-le avant la pluie et la nuit. Le grain égrené sèche plus vite que le grain sur l'épi. Les séchoirs solaires, de simples cadres avec une couverture en plastique transparent, sèchent plus vite et protègent de la pluie, de la poussière et des animaux.",
            "Vérifiez l'humidité avant le stockage. Le meilleur outil est un humidimètre ; les coopératives, les acheteurs, les services de vulgarisation et les entrepôts en ont souvent un. Un test approximatif à la maison est le test du sel : mettez une poignée de sel sec et un peu de grain dans une bouteille en verre propre et sèche, secouez deux à trois minutes, et si le sel colle au verre, le grain est encore trop humide. Un grain qui réussit le test peut encore être un peu trop humide, alors confirmez avec un humidimètre quand vous pouvez."
          ],
          steps: ["Récoltez par temps sec.", "Étalez le grain en couche fine sur une bâche, une natte, une claie ou du ciment, jamais sur la terre nue.", "Retournez-le plusieurs fois par jour ; couvrez-le contre la pluie et la nuit.", "Séchez vite : visez une humidité sûre dans les deux jours environ après l'égrenage.", "Faites le test du sel ; confirmez avec un humidimètre chez votre coopérative ou votre acheteur.", "Stockez seulement quand c'est sec."],
          words: [["Teneur en eau", "la quantité d'eau dans le grain, en pourcentage de son poids."], ["Humidimètre", "un appareil qui mesure l'humidité du grain."], ["Test du sel", "un test approximatif à la maison : le sel sec colle à la bouteille si le grain est trop humide."], ["Séchoir solaire", "un cadre avec une couverture transparente qui utilise le soleil pour sécher plus vite et plus proprement."]],
          slides: [
            { title: "Pourquoi sécher", bullets: ["Le grain humide chauffe, moisit et attire les insectes", "FAO : sécher le maïs à environ 13 à 14 pour cent", "Vite : en deux jours environ"] },
            { title: "Comment sécher", bullets: ["Bâche, natte, claie ou ciment, jamais la terre nue", "Couche fine, retournez souvent", "Couvrez avant la pluie et la nuit"] },
            { title: "Vérifier avant de stocker", bullets: ["Le mieux : un humidimètre (coopérative, acheteur, vulgarisation)", "Test approximatif : le sel dans une bouteille sèche", "Le sel colle = trop humide ; continuez à sécher"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Faites le test du sel sur une poignée de votre grain (ou celui d'un voisin) : bouteille sèche, sel sec, secouez deux à trois minutes, regardez le verre. Puis renseignez-vous sur qui a un humidimètre près de chez vous et sur l'humidité maximale de l'acheteur.",
          youCanNow: "sécher le grain vite sur une surface propre et vérifier qu'il a atteint une humidité sûre avant le stockage.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un séchoir solaire ?", options: ["Un four électrique", "Un cadre avec une couverture en plastique transparent qui sèche le grain plus vite et le protège de la pluie et de la poussière", "Un silo de stockage en métal", "Un humidimètre"], answer: 1, why: "Les séchoirs solaires sont de simples cadres avec une couverture transparente qui sèchent le grain plus vite et le protègent." },
            { objective: "O3", q: "L'après-midi, des nuages de pluie se forment pendant que votre maïs égrené sèche dehors. Que faites-vous ?", options: ["Le laisser ; il séchera plus tard", "L'étaler plus finement", "Vider l'eau après la pluie", "Le couvrir ou le rentrer avant la pluie"], answer: 3, why: "Couvrez le grain ou rentrez-le avant la pluie et la nuit, pour qu'il ne reprenne pas l'humidité." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien rentrer la récolte",
        questions: [
          { objective: "O1", q: "Selon l'estimation de la FAO (2019), environ quelle part des aliments est perdue entre la récolte et le magasin ?", options: ["1 pour cent", "50 pour cent", "Environ 14 pour cent", "Aucune"], answer: 2, why: "L'estimation de la FAO en 2019 était d'environ 14 pour cent perdus entre la récolte et la vente au détail." },
          { objective: "O2", q: "Lequel est un signe que le grain de maïs est mûr ?", options: ["Des spathes vertes et mouillées", "Un grain mou et laiteux", "Les soies qui viennent d'apparaître", "Un point noir à la base du grain"], answer: 3, why: "Le point noir montre que le grain est arrivé à maturité." },
          { objective: "O2", q: "Vous avez 2 acres de manioc et ne pouvez en vendre qu'un quart cette semaine. Que faites-vous ?", options: ["J'arrache seulement ce que je peux vendre ou transformer vite", "J'arrache tout d'un coup", "J'arrache tout et je le laisse au soleil", "Je ne récolte jamais le manioc"], answer: 0, why: "Les racines de manioc s'abîment quelques jours après la récolte." },
          { objective: "O3", q: "Où sécher le maïs ?", options: ["Sur la terre nue", "Sur une bâche propre, une natte, une claie ou une aire cimentée", "Dans un sac fermé sous la pluie", "En tas dans le champ"], answer: 1, why: "Une surface propre, surélevée ou couverte garde le grain propre et le sèche plus vite." },
          { objective: "O3", q: "Au test du sel, le sel colle au verre. Qu'est-ce que ça veut dire ?", options: ["Le grain est assez sec pour être stocké", "Le grain contient de l'aflatoxine", "Le grain est encore trop humide ; continuez à sécher", "Le sel est mauvais"], answer: 2, why: "Le sel qui colle au verre montre que le grain contient encore trop d'humidité." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder la récolte saine et vendable",
      lessons: [
        {
          objectives: ["O4"],
          title: "L'aflatoxine : ce que c'est et comment la prévenir",
          minutes: 6,
          goal: "Appliquer les principales étapes qui empêchent l'aflatoxine d'entrer dans votre maïs et votre arachide.",
          text: [
            "L'aflatoxine est un poison fabriqué par certaines moisissures (Aspergillus) qui poussent sur le maïs, l'arachide, le sorgho et d'autres cultures, au champ et pendant le stockage. Souvent, on ne peut pas la voir, la sentir ni la goûter. En manger pendant longtemps abîme le foie, est liée au cancer du foie et au retard de croissance chez les enfants ; de grandes quantités peuvent tuer. Elle passe aussi des aliments du bétail dans le lait et les œufs. Les acheteurs et les organismes nationaux de normes alimentaires la recherchent et refusent le grain au-dessus de la limite légale.",
            "La prévention commence au champ : des cultures saines, un semis à temps, et la lutte contre les insectes qui abîment les épis et les gousses. Récoltez à temps, ne laissez pas la récolte par terre, et séchez-la vite jusqu'à une humidité sûre. La FAO note que l'aflatoxine augmente dans le maïs stocké avec les dégâts des charançons : gardez les magasins propres et les insectes dehors.",
            "Triez avant de stocker : enlevez les grains et les épis moisis, cassés, décolorés, abîmés par les insectes et ratatinés. Ne mangez jamais, ne vendez jamais et ne donnez jamais aux animaux du grain moisi. Les produits de lutte biologique comme Aflasafe, mis au point par l'IITA et homologués dans des pays dont le Kenya, le Nigeria et le Ghana, sont épandus au champ avant la floraison pour chasser les moisissures toxiques ; demandez à votre agent de vulgarisation ou à votre vendeur d'intrants si l'un d'eux est autorisé pour votre culture et votre zone, et suivez l'étiquette."
          ],
          steps: ["Luttez contre les insectes qui abîment les épis et les gousses au champ.", "Récoltez à temps ; ne laissez pas la récolte par terre.", "Séchez vite jusqu'à une humidité sûre.", "Retirez les grains moisis, cassés, décolorés et abîmés par les insectes.", "Stockez dans un endroit propre, sec et protégé des insectes.", "Demandez à la vulgarisation un produit de lutte biologique autorisé pour votre zone."],
          words: [["Aflatoxine", "un poison fabriqué par certaines moisissures sur des cultures comme le maïs et l'arachide."], ["Aspergillus", "le groupe de moisissures qui peut fabriquer l'aflatoxine."], ["Lutte biologique", "utiliser un être vivant inoffensif pour chasser un être vivant nuisible."], ["Tri", "retirer à la main ou à la machine les mauvais grains ou produits."]],
          slides: [
            { title: "Ce qu'est l'aflatoxine", bullets: ["Un poison fabriqué par certaines moisissures", "Souvent invisible : pas d'odeur, pas de goût", "Abîme le foie ; liée au cancer et au retard de croissance"] },
            { title: "L'arrêter à chaque étape", bullets: ["Culture saine ; luttez contre les ravageurs des épis et gousses", "Récoltez à temps ; séchez vite jusqu'à une humidité sûre", "Stockage propre, sec, protégé des insectes"] },
            { title: "Triez et n'utilisez jamais de grain moisi", bullets: ["Retirez les grains moisis, cassés, décolorés", "Ne mangez, vendez ni donnez jamais de grain moisi", "Elle passe dans le lait et les œufs"] },
            { title: "Lutte biologique", bullets: ["Aflasafe (IITA) : homologué au Kenya, au Nigeria, au Ghana", "Épandu au champ avant la floraison", "Demandez à la vulgarisation ; suivez l'étiquette"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Prenez un échantillon de grain ou d'arachide stocké et triez-le sur un plateau : séparez les grains moisis, cassés, décolorés et abîmés par les insectes. Pesez-les ou comptez-les et écrivez la part que vous avez retirée. Écrivez deux étapes que vous changerez la saison prochaine pour la réduire.",
          youCanNow: "expliquer pourquoi l'aflatoxine est dangereuse et utiliser les étapes au champ, au séchage, au tri et au stockage pour l'éviter.",
          quickCheck: [
            { objective: "O4", q: "Sur quelles cultures les moisissures à aflatoxine peuvent-elles pousser ?", options: ["Le maïs, l'arachide et le sorgho", "Seulement les tomates", "Seulement le thé", "Seulement les feuilles de manioc"], answer: 0, why: "Les moisissures Aspergillus poussent sur le maïs, l'arachide, le sorgho et d'autres cultures." },
            { objective: "O4", q: "Vous trouvez des charançons dans votre maïs stocké. Que faites-vous ?", options: ["Les ignorer ; ils ne comptent pas", "Donner le grain abîmé aux poules", "Retirer le grain abîmé et nettoyer le magasin pour empêcher les insectes d'entrer, car les dégâts des charançons augmentent l'aflatoxine", "Mélanger le grain abîmé avec le bon grain"], answer: 2, why: "Le taux d'aflatoxine augmente avec les dégâts des charançons ; le grain abîmé est retiré et jamais donné aux animaux ni vendu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Stocker le grain dans des sacs hermétiques",
          minutes: 5,
          goal: "Remplir, fermer et stocker un sac hermétique pour que les insectes meurent sans produits chimiques.",
          text: [
            "Hermétique veut dire étanche à l'air. Un sac hermétique, comme le sac PICS mis au point à l'université Purdue, a deux sacs intérieurs en plastique dans un sac extérieur tissé. Une fois fermé, les insectes et le grain consomment l'oxygène à l'intérieur et les insectes meurent ou arrêtent de se reproduire, sans insecticide. Purdue cite le maïs, le sorgho, le haricot, le niébé, l'arachide, le riz et d'autres cultures comme adaptés à ces sacs.",
            "Le sac ne marche que si le grain est sec et le sac étanche. Stockez seulement du grain sec, propre et trié. Remplissez le sac intérieur, chassez le plus d'air possible, tordez le col et attachez-le serré ; faites de même avec le deuxième sac intérieur, puis enfin le sac extérieur. Vérifiez qu'il n'y a pas de trous avant l'usage ; un petit trou laisse entrer l'air et le sac ne marche plus.",
            "Gardez les sacs au-dessus du sol sur des palettes ou des planches, loin des murs, dans un magasin propre, sec et ombragé, et protégez-les des rats, qui font des trous. Ne les ouvrez pas souvent : chaque ouverture fait entrer de l'air frais. Les sacs encore intacts peuvent resservir la saison suivante. D'autres bonnes options sont les silos métalliques et les greniers propres, surélevés et bien aérés pour les épis."
          ],
          steps: ["Vérifiez que le grain est sec, propre et trié.", "Vérifiez que les sacs intérieurs n'ont pas de trous.", "Remplissez le sac intérieur, chassez l'air, tordez et attachez serré.", "Attachez le deuxième sac intérieur, puis le sac extérieur, de la même façon.", "Stockez sur des palettes, loin des murs, dans un magasin sec, ombragé et protégé des rats.", "Ouvrez seulement quand c'est nécessaire ; réutilisez les sacs intacts."],
          words: [["Hermétique", "étanche à l'air : l'air ne peut ni entrer ni sortir."], ["Sac intérieur", "un sac en plastique placé dans le sac extérieur."], ["Palette", "un plateau en bois qui garde les sacs au-dessus du sol."], ["Silo métallique", "un fût en métal fermé pour stocker le grain."]],
          slides: [
            { title: "Comment marchent les sacs hermétiques", bullets: ["Deux sacs plastique dans un sac tissé (PICS)", "Fermé : l'oxygène s'épuise, les insectes meurent", "Pas besoin d'insecticide"] },
            { title: "Bien fermer", bullets: ["Seulement du grain sec, propre et trié", "Chassez l'air ; tordez et attachez chaque couche", "Vérifiez d'abord les trous"] },
            { title: "Bien stocker", bullets: ["Sur des palettes, loin des murs", "Magasin sec, ombragé, protégé des rats", "Ouvrez rarement ; réutilisez les sacs intacts"] }
          ],
          sources: [PICS],
          tryIt: "Regardez votre magasin. Écrivez trois changements qui protégeraient les sacs (palettes, espace avec les murs, protection contre les rats, ombre). Si vous pouvez, achetez un sac hermétique chez un vendeur d'intrants et entraînez-vous à attacher chaque couche avec du grain sec.",
          youCanNow: "fermer et stocker le grain dans des sacs hermétiques pour qu'il se conserve sans produits chimiques.",
          quickCheck: [
            { objective: "O5", q: "Qu'y a-t-il à l'intérieur du sac tissé extérieur d'un sac PICS ?", options: ["Une doublure en métal", "De la poudre insecticide", "Deux sacs intérieurs en plastique", "Rien"], answer: 2, why: "Un sac PICS contient deux sacs intérieurs en plastique dans un sac extérieur tissé." },
            { objective: "O5", q: "Vous avez rempli et noué le premier sac intérieur. Que faites-vous ensuite ?", options: ["Chasser l'air, tordre et nouer le deuxième sac intérieur, puis nouer le sac extérieur", "Laisser le deuxième sac intérieur ouvert pour l'air", "Percer un trou pour vérifier le grain", "Le stocker au soleil"], answer: 0, why: "Chaque sac intérieur et le sac extérieur sont bien noués pour que le sac reste étanche à l'air." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Garder les produits au frais, les trier et les emballer",
          minutes: 5,
          goal: "Garder les produits frais au frais, les trier selon la norme de l'acheteur et les emballer pour qu'ils arrivent sans meurtrissures.",
          text: [
            "Les produits frais comme les tomates, le chou frisé, les mangues et les avocats continuent à vivre et à respirer après la récolte. La chaleur accélère cela, donc ils mûrissent, fanent et pourrissent plus vite. Récoltez le matin au frais, gardez les produits à l'ombre tout le temps, et livrez-les vite à l'acheteur.",
            "Sans électricité, un refroidisseur par évaporation aide. La chambre de refroidissement sans énergie présentée par la FAO est un double mur de briques avec du sable mouillé entre les deux murs et une couverture mouillée dessus ; en s'évaporant, l'eau refroidit l'intérieur et garde l'air humide pour que les produits ne fanent pas. Elle marche mieux dans les endroits secs et chauds. Les refroidisseurs en pots de terre marchent de la même façon en plus petit.",
            "Trier par qualité, c'est classer les produits par taille, maturité et qualité, et retirer ceux qui sont abîmés pour qu'ils ne gâtent pas le reste. Les acheteurs paient plus pour des produits réguliers, propres et triés. Pour les produits fragiles, emballez dans des caisses propres, solides et aérées plutôt que dans des sacs, ne les remplissez pas trop, et étiquetez chaque caisse avec la catégorie, la date et votre nom. Une photo de chaque lot trié prise au téléphone aide à régler les désaccords avec les acheteurs."
          ],
          steps: ["Demandez à l'acheteur ses catégories : taille, maturité, qualité.", "Récoltez le matin au frais et gardez les produits à l'ombre.", "Triez par catégorie ; retirez les produits abîmés.", "Utilisez un refroidisseur par évaporation si vous devez garder les produits.", "Emballez dans des caisses propres et aérées ; ne les remplissez pas trop.", "Étiquetez les caisses avec la catégorie, la date et le nom ; prenez une photo."],
          words: [["Refroidisseur par évaporation", "un lieu de stockage refroidi par l'eau qui s'évapore de murs, de sable ou de tissu mouillés."], ["Tri par qualité", "classer les produits en catégories de qualité."], ["Caisse aérée", "une caisse avec des trous qui laisse l'air circuler autour des produits."]],
          slides: [
            { title: "La chaleur est l'ennemie", bullets: ["Les produits respirent encore après la récolte", "Récoltez le matin au frais", "Ombre tout le temps ; vendez vite"] },
            { title: "Refroidir sans électricité (FAO)", bullets: ["Chambre sans énergie : sable mouillé entre deux murs de briques", "Frais et humide à l'intérieur", "Mieux dans les endroits secs et chauds"] },
            { title: "Trier et emballer", bullets: ["Triez par taille, maturité et qualité", "Caisses propres et aérées, pas des sacs", "Étiquetez catégorie, date, nom ; prenez une photo"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Tâche finale : écrivez votre plan après récolte d'une page pour une culture. Mettez les règles de qualité de l'acheteur en haut, puis le moment de la récolte, le séchage et la vérification de l'humidité (pour le grain), les étapes contre l'aflatoxine, le stockage, et comment vous refroidirez, trierez et emballerez.",
          youCanNow: "garder les produits frais au frais, les trier et les emballer selon la norme de l'acheteur, et mener un plan après récolte complet pour une culture.",
          quickCheck: [
            { objective: "O6", q: "Où une chambre de refroidissement sans énergie marche-t-elle le mieux ?", options: ["Dans les endroits froids et humides", "Dans les endroits secs et chauds", "Seulement dans un réfrigérateur", "Seulement la nuit"], answer: 1, why: "Les refroidisseurs par évaporation marchent le mieux dans les endroits secs et chauds, où l'eau s'évapore vite." },
            { objective: "O6", q: "Un acheteur dit que vos caisses n'étaient pas de la bonne catégorie. Qu'est-ce qui aide à régler le désaccord ?", options: ["Crier", "Baisser tout de suite votre prix", "Rapporter les caisses chez vous", "Des étiquettes avec la catégorie et la date, et une photo au téléphone de chaque lot trié"], answer: 3, why: "Des caisses étiquetées et une photo de chaque lot trié aident à régler les désaccords avec les acheteurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder la récolte saine et vendable",
        questions: [
          { objective: "O4", q: "Qu'est-ce que l'aflatoxine ?", options: ["Un engrais", "Un poison fabriqué par certaines moisissures sur les cultures", "Un type de charançon", "Un sac de stockage"], answer: 1, why: "L'aflatoxine est un poison produit par certaines moisissures Aspergillus." },
          { objective: "O4", q: "Votre maïs a quelques épis moisis. Que faire de ces épis ?", options: ["Les donner aux poules", "Les mélanger au bon grain", "Les vendre pas cher", "Les retirer ; ne pas les manger, les vendre ni les donner aux animaux"], answer: 3, why: "L'aflatoxine fait du mal aux gens et passe des aliments du bétail dans le lait et les œufs." },
          { objective: "O5", q: "Comment un sac hermétique tue-t-il les insectes du stock ?", options: ["L'oxygène à l'intérieur s'épuise une fois le sac fermé", "Il contient du poison", "Il est chauffé", "Il laisse entrer l'air frais"], answer: 0, why: "Bien fermé, l'oxygène est consommé et les insectes meurent sans produits chimiques." },
          { objective: "O5", q: "Pourquoi garder les sacs de grain sur des palettes et loin des murs ?", options: ["Seulement pour que ce soit rangé", "Pour les rendre plus lourds", "Pour éviter l'humidité et repérer plus facilement les rats et les ravageurs", "Pour que les sacs prennent le soleil"], answer: 2, why: "Les palettes et l'espace avec les murs gardent les sacs secs et faciles à vérifier." },
          { objective: "O6", q: "Quelle est la meilleure façon d'emballer des tomates mûres pour le marché ?", options: ["Serrées dans un sac", "En vrac sur le plancher d'un camion", "Dans un sac plastique fermé au soleil", "Dans des caisses propres et aérées, pas trop remplies"], answer: 3, why: "Les caisses protègent les produits fragiles de l'écrasement et laissent passer l'air." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Manutention et stockage après récolte",
    questions: [
      { objective: "O1", q: "Laquelle est une cause fréquente de perte après récolte ?", options: ["Un séchage rapide", "Les charançons, les rats et la moisissure dans le stock", "Des caisses propres", "Le tri par qualité"], answer: 1, why: "Les ravageurs et la moisissure dans le stock sont de grandes causes de pertes." },
      { objective: "O1", q: "Pourquoi dessiner le chemin de votre culture du champ à l'acheteur ?", options: ["Pour trouver où arrivent les plus grandes pertes", "Pour rendre le chemin plus long", "Pour éviter l'acheteur", "Ça ne sert à rien"], answer: 0, why: "Savoir où arrivent les pertes vous dit où agir d'abord." },
      { objective: "O1", q: "Un prix plus bas à cause d'une mauvaise qualité, c'est :", options: ["Pas une perte", "Un gain", "Une perte après récolte cachée", "Un impôt"], answer: 2, why: "Perdre en catégorie ou en prix est une perte de valeur même si aucun sac n'est perdu." },
      { objective: "O2", q: "Le haricot est prêt à récolter quand :", options: ["Les fleurs s'ouvrent", "Les feuilles sont vert foncé", "Les gousses sont encore molles", "La plupart des gousses sont sèches et sonores"], answer: 3, why: "Des gousses sèches et sonores montrent que les haricots sont mûrs." },
      { objective: "O2", q: "En cueillant le café, il faut cueillir :", options: ["Seulement les cerises rouges et mûres", "Les cerises vertes", "Les feuilles et les cerises ensemble", "Les cerises tombées par terre"], answer: 0, why: "Les cerises rouges et mûres donnent le café de meilleure qualité." },
      { objective: "O2", q: "La norme de cueillette habituelle du thé est :", options: ["Les vieilles feuilles dures", "Deux feuilles et un bourgeon", "Des branches entières", "Les racines"], answer: 1, why: "Les pousses tendres de deux feuilles et un bourgeon donnent un bon thé." },
      { objective: "O2", q: "Pourquoi récolter les produits frais le matin au frais ?", options: ["Les acheteurs se lèvent plus tard", "C'est moins cher", "La chaleur accélère le mûrissement, le flétrissement et la pourriture", "La rosée du matin ajoute du poids"], answer: 2, why: "Les produits gardés au frais durent plus longtemps." },
      { objective: "O3", q: "Selon les conseils de la FAO, l'humidité sûre pour stocker le maïs est d'environ :", options: ["13 à 14 pour cent", "25 pour cent", "40 pour cent", "2 pour cent"], answer: 0, why: "La FAO dit que sécher à environ 13 à 14 pour cent avant que la moisissure pousse est le moyen le plus sûr de prévenir l'aflatoxine." },
      { objective: "O3", q: "En combien de temps faut-il sécher le maïs qui vient d'être égrené ?", options: ["En deux semaines environ", "Rien ne presse", "Après la prochaine saison des pluies", "En deux jours environ"], answer: 3, why: "La FAO note que l'aflatoxine augmente vite si le maïs reste humide plus de deux jours environ." },
      { objective: "O3", q: "La façon la plus précise de vérifier l'humidité du grain est :", options: ["Croquer un grain", "Un humidimètre", "Regarder la couleur", "Peser le sac"], answer: 1, why: "Un humidimètre la mesure ; le test du sel n'est qu'un test approximatif." },
      { objective: "O3", q: "Pourquoi ne pas sécher le grain sur la terre nue ?", options: ["Il sèche trop vite", "C'est contraire à toutes les lois", "La terre, l'humidité et les spores de moisissure entrent dans le grain", "La terre rend le grain plus lourd et plus cher"], answer: 2, why: "La terre nue salit le grain et le garde humide." },
      { objective: "O4", q: "L'aflatoxine est dangereuse en partie parce que :", options: ["Elle sent fort, donc les gens l'évitent", "Souvent, on ne peut pas la voir, la sentir ni la goûter", "Elle ne touche que les plantes", "Elle disparaît à la cuisson du grain"], answer: 1, why: "Elle est en général invisible, donc la prévention et les analyses comptent." },
      { objective: "O4", q: "L'aflatoxine dans les aliments du bétail peut :", options: ["Passer dans le lait et les œufs", "Faire grandir les animaux plus vite", "Ne rien faire aux animaux", "Devenir de l'engrais"], answer: 0, why: "L'aflatoxine des aliments du bétail peut se retrouver dans le lait et les œufs." },
      { objective: "O4", q: "Aflasafe est :", options: ["Un sac de stockage", "Un humidimètre", "Une marque de semence de maïs", "Un produit de lutte biologique qui chasse les moisissures toxiques"], answer: 3, why: "Aflasafe, de l'IITA, utilise des moisissures inoffensives pour chasser les moisissures toxiques." },
      { objective: "O4", q: "Avant d'utiliser un produit de lutte biologique, il faut :", options: ["Le mélanger au grain stocké", "Vérifier avec la vulgarisation qu'il est autorisé pour votre culture et votre zone, et suivre l'étiquette", "Doubler la dose", "L'utiliser seulement après la récolte"], answer: 1, why: "Utilisez seulement des produits autorisés, comme le dit l'étiquette." },
      { objective: "O5", q: "Qu'est-ce qui doit être vrai avant de mettre le grain dans un sac hermétique ?", options: ["Il est sec, propre et trié", "Il est encore humide", "Il est mélangé à un insecticide", "Il est chaud du soleil"], answer: 0, why: "Les sacs hermétiques ne sèchent pas le grain ; un grain humide moisira quand même." },
      { objective: "O5", q: "Un sac intérieur hermétique a un petit trou. Que se passe-t-il ?", options: ["Rien", "Il marche mieux", "L'air entre et le sac ne marche plus", "Le grain sèche plus vite"], answer: 2, why: "Le sac doit être étanche pour priver les insectes d'oxygène." },
      { objective: "O5", q: "Pourquoi ne pas ouvrir souvent les sacs hermétiques ?", options: ["Ils deviennent plus lourds", "Chaque ouverture fait entrer de l'air frais", "Les ouvrir est interdit", "Les insectes aiment la lumière"], answer: 1, why: "L'air frais ramène de l'oxygène pour les insectes." },
      { objective: "O6", q: "Une chambre de refroidissement sans énergie refroidit les produits grâce à :", options: ["L'électricité", "La glace du magasin", "Le gaz", "L'eau qui s'évapore du sable mouillé entre des murs de briques"], answer: 3, why: "L'évaporation refroidit la chambre et garde l'air humide." },
      { objective: "O6", q: "Pourquoi trier les produits par qualité avant de vendre ?", options: ["Les acheteurs paient plus pour des produits réguliers, propres et triés", "Ça fait pourrir les produits plus vite", "Ça cache les produits abîmés", "C'est seulement pour l'exportation"], answer: 0, why: "Le tri répond aux normes des acheteurs et retire les produits abîmés." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      7,
      9,
      11,
      14,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du plan et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Règles de l'acheteur et moment de la récolte",
        objective: "O2",
        notYet: "Pas de règles de l'acheteur, ou pas de signes de maturité.",
        meets: "Les règles de qualité de l'acheteur sont en tête, avec les signes de maturité et la façon de planifier les jours de récolte.",
        exceeds: "Montre les outils, les sacs ou les caisses et la main-d'œuvre réservés avant la récolte."
      },
      {
        name: "Séchage et humidité",
        objective: "O3",
        notYet: "Pas de surface de séchage ni de vérification de l'humidité (pour le grain).",
        meets: "Séchage hors du sol, retourné et couvert, et vérification de l'humidité avec un humidimètre ou le test du sel.",
        exceeds: "Indique où utiliser un humidimètre, par exemple à la coopérative ou chez un acheteur."
      },
      {
        name: "Prévention de l'aflatoxine",
        objective: "O4",
        notYet: "Pas de mesures contre l'aflatoxine, ou le grain moisi est gardé.",
        meets: "Des mesures au champ, au séchage, au tri et au magasin, avec le grain moisi retiré et jamais mangé, vendu ou donné aux animaux.",
        exceeds: "Demande à la vulgarisation si un produit de lutte biologique homologué convient à la culture et à la zone."
      },
      {
        name: "Stockage",
        objective: "O5",
        notYet: "La méthode de stockage manque, ou le grain est stocké humide.",
        meets: "Du grain sec, propre et trié dans des sacs hermétiques ou un autre bon stockage, hors du sol et à l'abri des rats.",
        exceeds: "Note à quelle fréquence les sacs seront vérifiés sans les ouvrir."
      },
      {
        name: "Refroidissement, tri et emballage",
        objective: "O6",
        notYet: "Produits frais en sacs ou au soleil, ou pas de tri.",
        meets: "Récolte aux heures fraîches, ombre, tri selon la norme de l'acheteur, et caisses propres et aérées avec des étiquettes.",
        exceeds: "Utilise un refroidisseur par évaporation ou des photos de chaque lot trié."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le plan après récolte",
      "Les apprenants qui déclarent utiliser des sacs hermétiques, une vérification de l'humidité ou des caisses dans la saison qui suit (enquête de suivi)",
      "L'évolution des pertes au stockage, des chargements refusés ou du prix par sac déclarée par les apprenants ou leur groupement après une saison",
      "Les apprenants qui commencent un autre cours agricole Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un cahier, un stylo et un téléphone simple",
      "Une bouteille en verre propre et du sel sec pour le test du sel ; un humidimètre si on peut en emprunter un",
      "Un sac hermétique et une caisse pour la démonstration, si possible",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour écrire le plan après récolte"
    ],
    facilitatorNotes: [
      "Dans un groupement d'agriculteurs ou un magasin : faites le test de départ ensemble, puis suivez le chemin d'une culture du champ à l'acheteur.",
      "Montrez le test du sel et, si possible, un humidimètre d'une coopérative ou d'un acheteur.",
      "Entraînez-vous en groupe à remplir et à nouer un sac hermétique.",
      "Ne goûtez jamais et ne donnez jamais aux animaux du grain moisi pendant une démonstration ; montrez comment le trier et le retirer sans danger.",
      "Évaluez le plan après récolte avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
