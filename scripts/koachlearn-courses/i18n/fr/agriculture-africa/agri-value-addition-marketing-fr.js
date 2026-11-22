"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-value-addition-marketing.js). See scripts/koachlearn-courses/README.md, "Translations".

const NAFDAC_FOOD = { name: "NAFDAC (Nigeria) : enregistrement des aliments, Division des aliments fabriqués au Nigeria (petite échelle et moyenne/grande échelle)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Autorité des aliments et des médicaments du Ghana (FDA) : enregistrement des produits", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Autorité des aliments et des médicaments du Ghana : Progressive Licensing Scheme (licence par étapes) pour les petits producteurs (rose, jaune, vert)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Bureau des normes du Kenya (KEBS) : Standardization Mark (certification des produits) et marques de qualité", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/OMS) : Comité sur l'hygiène alimentaire et Principes généraux d'hygiène alimentaire (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "Portail TECA/STI de la FAO : chambre de refroidissement sans énergie pour les légumes", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-fr",
  lang: "fr",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Valeur ajoutée, emballage et commercialisation agricole",
  skills: "Choisir un produit à valeur ajoutée, Calculer le coût et le prix d'un produit, Transformer dans de bonnes conditions d'hygiène, Emballer et étiqueter, Garder le produit sain pendant le transport, Vendre directement aux acheteurs",
  outcome: "transformer une culture ou le lait de votre ferme en un produit emballé et étiqueté : le choisir, calculer son coût, le fabriquer avec hygiène, savoir quel enregistrement il demande, et le proposer directement à une boutique, une école, un hôtel ou un acheteur en ligne à un prix qui rapporte.",
  about: [
    "Les produits bruts se vendent souvent à bas prix à la récolte, quand tout le monde vend la même chose. En faire un produit comme la mangue séchée, la farine de manioc, la pâte d'arachide ou le yaourt peut rapporter plus, se garder plus longtemps et toucher de nouveaux acheteurs. Ce cours s'adresse aux petits exploitants, aux groupements de femmes et de jeunes, aux jeunes agripreneurs et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, en Afrique de l'Ouest francophone et partout en Afrique.",
    "Vous allez choisir un produit adapté à votre ferme et à un vrai acheteur, calculer ce que coûte un paquet et le prix à demander, organiser une transformation hygiénique, concevoir une étiquette, savoir quel organisme national doit l'approuver, prévoir comment le garder sain jusqu'à l'acheteur, et préparer une présentation pour vendre en direct.",
    "Il s'appuie sur les cours Manutention et stockage après récolte et Coopératives agricoles et accès au marché, donc il ne répète pas le stockage, le séchage ni la vente en groupe. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" pour votre propre ferme. Tous les montants sont des exemples, pas des prix réels."
  ],
  finalTask: "Faites un plan produit d'une page pour un produit à valeur ajoutée de votre ferme : le produit et l'acheteur, une fiche de coûts avec le coût et le prix par paquet, une liste d'hygiène pour la fabrication, un projet d'étiquette avec l'organisme national à consulter, la façon de garder le produit sain en route, et une courte présentation pour un acheteur direct.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits et moyens exploitants, ouvriers agricoles, groupements de femmes et de jeunes, jeunes agripreneurs et agents de vulgarisation au Kenya, au Nigeria, au Ghana, en Afrique de l'Ouest francophone et partout en Afrique. Beaucoup vendent déjà leurs produits bruts bord champ ou au marché local et veulent un meilleur prix.",
    startingPoint: "Savent cultiver et récolter ou produire du lait, et savent bien stocker et sécher (voir Manutention et stockage après récolte). Certains font déjà de petites quantités d'un produit pour la famille ou les voisins, sans calcul des coûts, sans étiquette et sans enregistrement.",
    gap: "Beaucoup de produits de la ferme ont un prix fixé au hasard, sont fabriqués sans routine d'hygiène, vendus sans vraie étiquette et confiés à des intermédiaires qui paient tard ou peu. Les agriculteurs doivent choisir un produit qu'un acheteur veut vraiment, en calculer le coût, le fabriquer sans danger, l'étiqueter, vérifier quelle autorisation nationale il demande et le vendre en direct, pour que la valeur ajoutée rapporte de l'argent au lieu d'en faire perdre.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants parlent la langue du cours comme deuxième langue",
      "Appareils : un téléphone simple ou un smartphone, souvent partagé ; une calculatrice ; du papier",
      "Argent : petits budgets ; commencer par de petits lots et du matériel bon marché",
      "Règles : les règles d'enregistrement et d'étiquetage des aliments varient selon les pays et changent ; les apprenants vérifient auprès de leur organisme national",
      "Temps : leçons de 4 à 6 minutes, entre les travaux de la ferme"
    ],
    prerequisites: "Utile : Manutention et stockage après récolte, et Coopératives agricoles et accès au marché. Savoir additionner, multiplier et diviser."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir des principales cultures ou du lait de votre ferme et de ce que demandent les acheteurs proches", action: "choisir un produit à valeur ajoutée à fabriquer et l'acheteur à qui le vendre", standard: "après avoir comparé au moins deux options selon la demande, la matière première, le matériel et les règles" },
    { id: "O2", condition: "À partir des coûts d'un lot", action: "calculer le coût d'un paquet et fixer un prix de vente", standard: "en comptant la matière première, l'emballage, l'énergie, la main-d'œuvre, le transport et les pertes, avec un prix qui couvre tous les coûts plus une marge" },
    { id: "O3", condition: "Pour votre produit, de la transformation jusqu'à l'acheteur", action: "rédiger une liste de contrôle d'hygiène et de chaîne du froid", standard: "qui couvre les mains, l'eau, les surfaces, la matière première, l'emballage et la sécurité du produit pendant le stockage et le transport" },
    { id: "O4", condition: "À partir de votre produit et de votre pays", action: "rédiger un projet d'étiquette et nommer l'organisme national qui doit approuver le produit", standard: "avec le nom du produit, les ingrédients, le poids net, le producteur et son contact, le numéro de lot et les dates, et une note pour vérifier les règles actuelles de l'organisme" },
    { id: "O5", condition: "Face à une boutique, une école, un hôtel ou un acheteur en ligne", action: "préparer une présentation de vente directe avec des conditions écrites", standard: "qui indique le produit, le prix, la quantité, la livraison, la date de paiement et la façon de traiter les réclamations" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Fabriquer un produit qui rapporte",
      lessons: [
        {
          title: "Choisir un produit à valeur ajoutée",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparer deux produits à valeur ajoutée pour votre ferme et en choisir un qui a un vrai acheteur.",
          text: [
            "Ajouter de la valeur, c'est faire quelque chose à votre produit pour qu'un acheteur le paie plus cher : le sécher, le moudre, le griller, le broyer, le fermenter, le nettoyer, le trier en paquets ou simplement bien l'emballer. Des mangues fraîches qui pourrissent en une semaine peuvent devenir de la mangue séchée qui se garde des mois. Le manioc peut devenir de la farine ou du gari, l'arachide de la pâte, et le lait du yaourt.",
            "Commencez par l'acheteur, pas par la machine. Demandez aux boutiques, aux cuisiniers d'écoles, aux hôtels et aux commerçants du marché près de chez vous ce qu'ils achètent, combien, à quelle fréquence, dans quelle taille de paquet et à quel prix. Un produit que personne autour de vous ne demande est un risque.",
            "Vérifiez ensuite quatre choses : la demande (qui va l'acheter et combien), la matière première (vous ou vos voisins en avez-vous assez, toute l'année ou seulement en saison), le matériel et le savoir-faire (pouvez-vous commencer petit, par exemple avec un séchoir solaire ou un moulin loué) et les règles (les produits laitiers et la viande sont plus à risque et demandent en général plus d'autorisations qu'une farine sèche). Comparez au moins deux options avant de choisir."
          ],
          steps: ["Notez deux ou trois produits que vous pourriez faire avec vos propres cultures ou votre lait.", "Demandez à au moins trois acheteurs ce qu'ils achètent, combien et à quel prix.", "Notez chaque produit sur la demande, la matière première, le matériel et le savoir-faire, et les règles.", "Choisissez celui qui a la meilleure note et un acheteur bien précis."],
          words: [["Valeur ajoutée", "transformer ou emballer votre produit pour qu'un acheteur le paie plus cher."], ["Durée de conservation", "le temps pendant lequel un produit reste sain et bon à manger."], ["Périssable", "un produit qui s'abîme vite, comme le lait, le yaourt ou les tomates fraîches."]],
          slides: [
            { title: "Ce que veut dire ajouter de la valeur", bullets: ["Sécher, moudre, broyer, griller, fermenter ou emballer votre produit", "Mangue en mangue séchée ; manioc en farine ou en gari", "Arachide en pâte ; lait en yaourt"] },
            { title: "Commencez par l'acheteur", bullets: ["Demandez aux boutiques, cuisiniers d'écoles, hôtels et commerçants", "Ce qu'ils achètent, combien et à quelle fréquence", "Taille du paquet et prix qu'ils paient"] },
            { title: "Notez chaque option", bullets: ["Demande : qui achète et combien", "Matière première : assez, et pendant quels mois", "Matériel et savoir-faire ; règles (le lait est plus à risque)"] }
          ],
          tryIt: "Choisissez deux produits que vous pourriez faire. Interrogez trois acheteurs près de chez vous sur chacun, puis notez les deux sur la demande, la matière première, le matériel et les règles. Écrivez le produit choisi et l'acheteur que vous allez viser.",
          youCanNow: "comparer des produits à valeur ajoutée selon la demande, la matière première, le matériel et les règles, et en choisir un qui a un vrai acheteur.",
          quickCheck: [
            { objective: "O1", q: "Vous voulez ajouter de la valeur à vos mangues. Que devez-vous faire d'abord ?", options: ["Acheter un grand séchoir à crédit", "Copier ce que fait votre voisin", "Demander aux acheteurs proches ce qu'ils achètent et à quel prix", "En fabriquer le plus possible et chercher des acheteurs ensuite"], answer: 2, why: "Commencer par de vrais acheteurs montre s'il y a une demande avant de dépenser de l'argent." },
            { objective: "O1", q: "Quel produit demande en général PLUS d'autorisations et de soin pour être fabriqué sans danger ?", options: ["Le yaourt fait avec du lait", "La farine de manioc", "Les tranches de mangue séchée", "Des haricots propres et triés en paquets"], answer: 0, why: "Les produits laitiers s'abîment vite et peuvent porter des microbes, donc ils sont plus à risque et en général plus contrôlés." }
          ]
        },
        {
          title: "Calculer le coût et le prix de votre produit",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculer le coût d'un paquet et fixer un prix qui couvre tous les coûts plus une marge.",
          text: [
            "Beaucoup de petits transformateurs perdent de l'argent sans le savoir, parce qu'ils ne comptent que la matière première. Comptez tous les coûts d'un lot : matière première, emballages et étiquettes, énergie (carburant, charbon, électricité, frais de moulin), eau, main-d'œuvre (y compris votre propre temps), transport, et frais comme l'enregistrement ou les taxes de marché répartis sur l'année.",
            "Comptez ensuite les pertes : une partie du produit s'abîme, se renverse ou est donnée en échantillon. Divisez le coût total du lot par le nombre de paquets que vous pouvez vraiment vendre. Exemple (montants donnés à titre d'exemple) : un groupement du Ghana fait de la pâte d'arachide. Arachides GHS 400, pots et étiquettes GHS 150, moulin et carburant GHS 50, main-d'œuvre GHS 100, transport GHS 50 : total GHS 750. Il remplit 50 pots mais compte en vendre 48, donc chaque pot coûte environ GHS 15,60.",
            "Votre prix doit couvrir le coût par paquet plus une marge pour le bénéfice, l'épargne et les réparations. Comparez ensuite ce prix avec des produits semblables en boutique. S'il est bien plus élevé, cherchez une façon moins chère de fabriquer, un paquet plus petit ou un acheteur qui paie pour la qualité. La même méthode marche pour la mangue séchée en KES, le gari en NGN ou le yaourt en XOF (franc CFA)."
          ],
          steps: ["Notez tous les coûts d'un lot, y compris votre propre main-d'œuvre.", "Comptez combien de paquets vous pouvez vraiment vendre après les pertes.", "Divisez le coût total par le nombre de paquets vendables : c'est le coût par paquet.", "Ajoutez une marge pour obtenir votre prix.", "Comparez-le avec des produits semblables en boutique et ajustez votre plan si besoin."],
          words: [["Coût unitaire", "ce que vous coûte la fabrication d'un paquet."], ["Marge", "l'argent qui reste sur chaque vente une fois les coûts payés."], ["Lot", "une fournée du produit, par exemple 50 pots faits le même jour."]],
          slides: [
            { title: "Comptez tous les coûts d'un lot", bullets: ["Matière première, emballages, étiquettes", "Carburant, électricité, moulin, eau", "Main-d'œuvre (la vôtre aussi), transport, frais"] },
            { title: "Coût par paquet", bullets: ["Coût total du lot / paquets vraiment vendables", "Exemple : GHS 750 / 48 pots = environ GHS 15,60", "Montants donnés à titre d'exemple"] },
            { title: "Fixez le prix", bullets: ["Coût par paquet + marge = prix", "Comparez avec des produits semblables en boutique", "Trop cher ? Méthode moins chère, paquet plus petit ou autre acheteur"] }
          ],
          tryIt: "Faites une fiche de coûts pour un lot de votre produit. Notez tous les coûts, les paquets que vous pensez vendre, le coût par paquet et le prix que vous demanderiez. Comparez avec un produit semblable dans une boutique.",
          youCanNow: "établir une fiche de coûts, calculer le coût d'un paquet et fixer un prix qui le couvre avec une marge.",
          quickCheck: [
            { objective: "O2", q: "Quel coût les petits transformateurs oublient-ils le PLUS souvent ?", options: ["La matière première", "Leur propre main-d'œuvre et les pertes", "Le prix en boutique", "Le nom du produit"], answer: 1, why: "Votre temps et les paquets abîmés ou donnés en échantillon sont de vrais coûts, et les oublier cache les pertes." },
            { objective: "O2", q: "Un lot coûte KES 6 000 et vous pouvez vendre 40 paquets. Quel est le coût par paquet ?", options: ["KES 240", "KES 600", "KES 1 500", "KES 150"], answer: 3, why: "Le coût par paquet est le coût total du lot divisé par les paquets vendus : 6 000 / 40 = KES 150." }
          ]
        },
        {
          title: "Hygiène et sécurité sanitaire pendant la transformation",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rédiger une liste d'hygiène qui garde votre produit sain pendant sa fabrication.",
          text: [
            "Un acheteur ne reviendra pas, et une autorité peut arrêter vos ventes, si un produit rend quelqu'un malade. Les Principes généraux d'hygiène alimentaire du Codex Alimentarius, des règles internationales, couvrent toute la chaîne, de la ferme jusqu'à la personne qui mange l'aliment. Votre organisme national de contrôle des aliments s'appuie sur ces idées quand il vous inspecte.",
            "L'essentiel : une eau propre et saine ; des mains lavées au savon avant le travail et après les toilettes ; pas de travail quand on est malade ; cheveux couverts et blessures couvertes ; surfaces, outils et récipients propres ; matière première séparée du produit fini ; animaux, insectes et rats tenus dehors ; et un endroit propre et sec pour ranger les paquets.",
            "Commencez avec une matière première propre. Ne transformez jamais d'arachides ou de grains moisis, qui peuvent contenir de l'aflatoxine (voir Manutention et stockage après récolte). Le lait pour le yaourt doit être chauffé et manipulé selon une méthode éprouvée donnée par votre agent de vulgarisation laitière ou votre organisme de normalisation, et gardé au froid. Écrivez vos étapes pour que chaque lot soit fait de la même façon, et donnez à chaque lot un numéro et une date."
          ],
          steps: ["Écrivez les étapes de fabrication, de la matière première au paquet fermé.", "Pour chaque étape, notez ce qui pourrait rendre le produit dangereux (saleté, microbes, moisissure, insectes).", "Notez la règle d'hygiène qui l'empêche.", "Donnez à chaque lot un numéro et une date, et notez qui l'a fabriqué."],
          words: [["Sécurité sanitaire des aliments", "garder les aliments sans microbes, poisons ni saletés qui peuvent rendre malade."], ["Contamination", "quand de la saleté, des microbes ou des produits chimiques entrent dans les aliments."], ["Numéro de lot", "un code sur chaque paquet qui dit quand et comment il a été fait, pour pouvoir retrouver l'origine d'un problème."]],
          slides: [
            { title: "Pourquoi l'hygiène compte", bullets: ["Un seul client malade peut ruiner votre activité", "Principes d'hygiène du Codex : de la ferme à l'assiette", "Les inspecteurs vérifient ces points de base"] },
            { title: "L'essentiel", bullets: ["Eau saine ; lavez-vous les mains au savon", "Pas de travail malade ; couvrez cheveux et blessures", "Outils propres ; matière première et produit fini séparés"] },
            { title: "Partez propre, écrivez tout", bullets: ["Jamais de grains ni d'arachides moisis", "Lait : méthode éprouvée, toujours au froid", "Mêmes étapes à chaque lot ; numéro de lot et date"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Écrivez les étapes de fabrication de votre produit. À côté de chaque étape, notez une chose qui pourrait le rendre dangereux et la règle qui l'évite. C'est votre liste d'hygiène.",
          youCanNow: "rédiger une liste d'hygiène pour votre produit et donner à chaque lot un numéro et une date.",
          quickCheck: [
            { objective: "O3", q: "Un travailleur a la diarrhée le jour de la transformation. Que faut-il faire ?", options: ["Il reste loin de la transformation jusqu'à sa guérison", "Il travaille mais se lave les mains une fois", "Il travaille seulement avec des gants", "Il emballe au lieu de mélanger"], answer: 0, why: "Un travailleur malade peut transmettre des microbes aux aliments, il ne doit donc pas les toucher avant d'être guéri." },
            { objective: "O3", q: "Une partie des arachides d'un sac semble moisie. Que faites-vous ?", options: ["Vous les grillez plus longtemps pour tuer la moisissure", "Vous les mélangez avec les bonnes", "Vous les retirez et ne les utilisez pas pour la pâte", "Vous les vendez moins cher"], answer: 2, why: "La moisissure peut contenir de l'aflatoxine, que la cuisson n'élimine pas, donc les arachides moisies ne doivent pas être utilisées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Fabriquer un produit qui rapporte",
        questions: [
          { objective: "O1", q: "Lequel est un exemple de valeur ajoutée ?", options: ["Vendre du manioc frais bord champ", "Moudre le manioc en farine et l'emballer", "Planter plus de manioc", "Laisser le manioc plus longtemps en terre"], answer: 1, why: "Moudre et emballer transforment le produit brut en un produit qu'un acheteur paie plus cher." },
          { objective: "O1", q: "Vous n'avez du lait qu'en saison des pluies. Quelle vérification compte le plus avant de choisir le yaourt ?", options: ["La couleur de l'étiquette", "Le nom de votre marque", "Ce que vos amis aiment", "Avoir assez de matière première toute l'année et un acheteur"], answer: 3, why: "L'approvisionnement en matière première et la demande décident si le produit peut garder un acheteur." },
          { objective: "O2", q: "Qu'est-ce que le coût par paquet ?", options: ["Le coût total du lot divisé par les paquets vraiment vendables", "Le prix en boutique moins votre main-d'œuvre", "Le coût de la matière première seulement", "Ce que demande votre voisin"], answer: 0, why: "Diviser tous les coûts du lot par les paquets vendables donne le vrai coût d'un paquet." },
          { objective: "O3", q: "Quelle est une règle d'hygiène de base pour la transformation ?", options: ["Laisser les poules circuler dans l'atelier", "Utiliser n'importe quelle eau", "Se laver les mains au savon avant le travail et après les toilettes", "Ranger ensemble matière première et produit fini"], answer: 2, why: "Le lavage des mains au savon empêche les microbes des mains d'aller dans les aliments." },
          { objective: "O3", q: "Pourquoi donner un numéro et une date à chaque lot ?", options: ["Pour que le paquet soit joli", "Pour retrouver et régler un problème si un lot tourne mal", "Parce que les acheteurs aiment les chiffres", "Pour augmenter le prix"], answer: 1, why: "Un numéro de lot permet de savoir quels paquets viennent d'un lot à problème et quand il a été fait." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Emballer, étiqueter et vendre en direct",
      lessons: [
        {
          title: "Emballage, étiquettes, marque et enregistrement",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rédiger un projet d'étiquette pour votre produit et trouver l'organisme national qui doit l'approuver.",
          text: [
            "Un bon emballage protège le produit et donne confiance aux acheteurs. Choisissez des emballages alimentaires qui empêchent l'air, l'eau et les insectes d'entrer : sachets fermés pour la mangue séchée et la farine, pots propres à couvercle étanche pour la pâte d'arachide, et pots propres et scellés pour le yaourt. Votre marque, c'est votre nom, votre logo et votre promesse, par exemple « propre, local, sans sucre ajouté ». Gardez-la simple et identique sur chaque paquet.",
            "Une étiquette indique en général : le nom du produit, les ingrédients, le poids ou le volume net, le nom et le contact du producteur, le numéro de lot, la date de fabrication et une date limite de consommation ou de consommation recommandée, comment le conserver, et tout numéro d'enregistrement ou marque. Votre pays peut demander plus, alors vérifiez avant d'imprimer beaucoup d'étiquettes.",
            "La plupart des aliments emballés doivent être autorisés avant d'être vendus en boutique. Au Kenya, le KEBS (Bureau des normes du Kenya) délivre la Standardization Mark aux produits conformes à une norme kényane. Au Nigeria, la NAFDAC (agence nationale de contrôle des aliments et des médicaments) enregistre les aliments fabriqués localement par sa Division des aliments fabriqués au Nigeria, avec des voies pour les petits producteurs comme pour les moyens et grands. Au Ghana, l'Autorité des aliments et des médicaments (FDA) enregistre les produits, et son Progressive Licensing Scheme permet aux très petits producteurs (une à cinq personnes) de se mettre aux normes par étapes. En Côte d'Ivoire, renseignez-vous auprès de l'organisme national de normalisation, CODINORM ; les autres pays ont le leur. Les règles, les formulaires et les frais changent, alors contactez l'organisme avant de commencer."
          ],
          steps: ["Choisissez un emballage alimentaire qui empêche l'air, l'eau et les insectes d'entrer.", "Écrivez le nom de votre marque et une promesse d'une ligne.", "Rédigez l'étiquette : nom, ingrédients, poids net, producteur et contact, numéro de lot, dates, conservation.", "Trouvez votre organisme national (KEBS, NAFDAC, FDA du Ghana, CODINORM ou un autre) et demandez ce qu'il faut pour votre produit.", "N'imprimez les étiquettes qu'une fois les règles connues."],
          words: [["Marque", "le nom, le logo et la promesse qui font que les acheteurs reconnaissent votre produit et lui font confiance."], ["Poids net", "le poids de l'aliment dans le paquet, sans compter l'emballage."], ["Enregistrement", "l'autorisation officielle d'un organisme national pour vendre un aliment."], ["Date de consommation recommandée", "la date jusqu'à laquelle le produit garde sa meilleure qualité s'il est conservé comme l'indique l'étiquette."]],
          slides: [
            { title: "Des emballages qui protègent", bullets: ["Alimentaires ; empêchent l'air, l'eau et les insectes d'entrer", "Sachets fermés, pots propres, pots scellés", "La même marque simple sur chaque paquet"] },
            { title: "Ce qu'indique en général une étiquette", bullets: ["Nom, ingrédients, poids net", "Nom et contact du producteur", "Numéro de lot, date de fabrication, date limite ou recommandée", "Conservation ; numéro d'enregistrement ou marque"] },
            { title: "Qui autorise (vérifiez les règles actuelles)", bullets: ["Kenya : Standardization Mark du KEBS", "Nigeria : enregistrement NAFDAC (voie petite échelle aussi)", "Ghana : FDA ; Progressive Licensing Scheme pour les très petits producteurs"] },
            { title: "Avant d'imprimer", bullets: ["Côte d'Ivoire : CODINORM ; autres pays : leur propre organisme", "Les règles, formulaires et frais changent", "Demandez d'abord à l'organisme, puis imprimez"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Rédigez l'étiquette de votre produit sur papier ou avec un outil gratuit comme Canva. Puis trouvez le site ou le bureau de votre organisme national des aliments et notez les questions que vous lui poserez sur l'enregistrement et l'étiquetage.",
          youCanNow: "rédiger un projet d'étiquette et nommer l'organisme national à consulter avant de vendre en boutique.",
          quickCheck: [
            { objective: "O4", q: "Quelle mention une étiquette alimentaire demande-t-elle en général ?", options: ["Le code PIN bancaire de l'agriculteur", "Le prix des arachides brutes", "Une photo de la ferme", "Le numéro de lot et la date de consommation recommandée"], answer: 3, why: "Le numéro de lot et les dates disent aux acheteurs et aux inspecteurs quand le produit a été fait et combien de temps il se garde." },
            { objective: "O4", q: "Un petit transformateur du Ghana avec trois travailleurs veut l'autorisation de la FDA. Quel programme l'aide à se mettre aux normes par étapes ?", options: ["La Standardization Mark", "Le Progressive Licensing Scheme", "GLOBALG.A.P.", "La Division des aliments fabriqués au Nigeria"], answer: 1, why: "Le Progressive Licensing Scheme de la FDA du Ghana est fait pour les petits producteurs d'une à cinq personnes." }
          ]
        },
        {
          title: "Garder le produit sain en route : chaîne du froid et transport",
          objectives: ["O3"],
          minutes: 5,
          goal: "Prévoir comment votre produit reste sain et intact de votre magasin jusqu'à l'acheteur.",
          text: [
            "Un produit peut être parfaitement fabriqué et quand même s'abîmer sur la route. Les produits périssables comme le yaourt et le jus frais ont besoin d'une chaîne du froid : ils doivent rester froids à chaque étape, de la fabrication jusqu'au réfrigérateur de l'acheteur. S'ils se réchauffent en route, les microbes se multiplient et le produit peut rendre malade, même s'il a l'air bon.",
            "Pour les courts trajets, utilisez une glacière propre avec des pains de glace et livrez tôt le matin. Convenez avec l'acheteur qu'il le met tout de suite au réfrigérateur. Ne recongelez jamais et ne revendez jamais un yaourt qui a chauffé. Les produits secs comme la farine de manioc, la mangue séchée et la pâte d'arachide n'ont pas besoin de froid, mais ils doivent rester secs, fermés, à l'ombre et loin du carburant, des produits chimiques et des nuisibles.",
            "Préparez le trajet : qui le transporte, avec quoi (moto, matatu, okada, bus ou camion), combien de temps il dure, et comment les paquets sont protégés de l'écrasement, du soleil et de la pluie. Un refroidissement bon marché, comme la chambre de refroidissement sans énergie de la FAO, peut garder les produits plus frais avant la transformation. Ajoutez vos étapes de chaîne du froid et de transport à votre liste d'hygiène."
          ],
          steps: ["Décidez si votre produit est périssable (besoin de froid) ou sec (besoin de rester sec et fermé).", "Produits froids : glacière, pains de glace, livraison tôt, au réfrigérateur de l'acheteur tout de suite.", "Produits secs : fermés, à l'ombre, loin des produits chimiques et des nuisibles.", "Prévoyez qui le transporte, comment, combien de temps et comment les paquets sont protégés.", "Ajoutez ces étapes à votre liste d'hygiène."],
          words: [["Chaîne du froid", "garder un produit au froid à chaque étape, de sa fabrication jusqu'à sa vente."], ["Glacière", "une boîte isolée qui garde les choses au froid avec de la glace ou des pains de glace."]],
          slides: [
            { title: "Chaîne du froid pour les périssables", bullets: ["Yaourt et jus doivent rester froids tout le trajet", "Chaud en route = les microbes poussent, même s'il a l'air bon", "Ne revendez jamais un yaourt qui a chauffé"] },
            { title: "Courts trajets, petit budget", bullets: ["Glacière propre avec pains de glace", "Livrez tôt le matin", "L'acheteur le met tout de suite au réfrigérateur"] },
            { title: "Produits secs", bullets: ["Secs, fermés et à l'ombre", "Loin du carburant, des produits chimiques et des nuisibles", "Protégez les paquets de l'écrasement et de la pluie"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Écrivez le trajet de votre produit de votre magasin jusqu'à votre acheteur : qui le transporte, comment, combien de temps, et ce qui le garde au froid ou au sec et intact. Ajoutez-le à votre liste d'hygiène.",
          youCanNow: "prévoir une chaîne du froid ou un transport au sec qui garde votre produit sain jusqu'à ce que l'acheteur le reçoive.",
          quickCheck: [
            { objective: "O3", q: "Votre yaourt est resté trois heures au soleil dans un bus en retard. Que faites-vous ?", options: ["Vous le vendez vite à prix réduit", "Vous le remettez au réfrigérateur et le vendez demain", "Vous ne le vendez pas ; il n'est plus sain", "Vous le goûtez et le vendez s'il semble bon"], answer: 2, why: "Un yaourt qui a chauffé peut contenir des microbes qu'on ne voit pas et qu'on ne sent pas au goût, il ne doit donc pas être vendu." },
            { objective: "O3", q: "De quoi la mangue séchée a-t-elle le plus besoin sur la route vers un acheteur ?", options: ["Rester sèche, fermée et à l'ombre", "Rester congelée", "Rester à l'air libre", "Rester à côté du bidon de carburant"], answer: 0, why: "Les produits secs s'abîment avec l'humidité, la forte chaleur ou les produits chimiques, pas parce qu'ils ne sont pas au froid." }
          ]
        },
        {
          title: "Vendre en direct : boutiques, écoles, hôtels et en ligne",
          objectives: ["O5"],
          minutes: 6,
          goal: "Préparer une présentation et des conditions écrites pour vendre votre produit directement à un acheteur.",
          text: [
            "Tous les intermédiaires ne sont pas mauvais : certains commerçants paient correctement et transportent des produits que vous ne pouvez pas transporter. Mais repérez les signes d'exploitation : balances truquées, prix changé après la livraison, paiement qui arrive des mois plus tard ou jamais, et inconnus qui disent « j'achète maintenant, je paie plus tard » puis disparaissent. Vendre en direct peut vous donner un meilleur prix et un client régulier.",
            "Chaque acheteur veut des choses différentes. Les boutiques et les supermarchés veulent une étiquette, un approvisionnement régulier et vendent parfois en dépôt-vente (ils ne paient qu'une fois le produit vendu), ce qui est un risque. Les écoles et les hôpitaux achètent en gros selon un calendrier et demandent souvent un devis, une facture et parfois un enregistrement. Les hôtels et les restaurants veulent toujours la même qualité. Les acheteurs en ligne sur WhatsApp, Facebook ou une plateforme de vente veulent des photos claires, des prix et une livraison rapide.",
            "Une bonne présentation est courte : ce qu'est le produit, pourquoi il est bon (propre, local, frais), le prix, la taille du paquet, combien vous pouvez fournir et à quel rythme, et la livraison. Mettez ensuite les conditions par écrit, même dans un simple message : quantité, prix, jour de livraison, date et moyen de paiement (par exemple le mobile money), et ce qui se passe si un paquet arrive abîmé. Gardez une copie. Ne donnez jamais vos codes PIN ou mots de passe à un acheteur. Pour un contrat important ou long, demandez d'abord à un conseiller de confiance de le lire."
          ],
          steps: ["Choisissez un acheteur : une boutique, une école, un hôtel ou des clients en ligne.", "Écrivez une courte présentation : produit, pourquoi il est bon, prix, taille du paquet, quantité fournie, livraison.", "Apportez un échantillon et votre étiquette.", "Mettez les conditions par écrit : quantité, prix, livraison, date et moyen de paiement, paquets abîmés.", "Gardez une copie et notez chaque livraison et chaque paiement."],
          words: [["Intermédiaire", "un commerçant qui achète aux agriculteurs et revend à d'autres."], ["Dépôt-vente", "la boutique prend vos produits et ne vous paie qu'une fois qu'ils sont vendus."], ["Présentation de vente", "une offre courte et claire faite à un acheteur."], ["Facture", "un document écrit qui demande à l'acheteur de payer les produits livrés."]],
          slides: [
            { title: "Attention à l'exploitation", bullets: ["Balances truquées ; prix changé après la livraison", "Paiement des mois plus tard ou jamais", "Inconnus qui « paient plus tard » et disparaissent"] },
            { title: "Ce que veut chaque acheteur", bullets: ["Boutiques : étiquette, approvisionnement régulier ; risque du dépôt-vente", "Écoles : en gros, calendrier, devis et facture", "Hôtels : toujours la même qualité ; en ligne : photos, livraison rapide"] },
            { title: "Une courte présentation", bullets: ["Ce que c'est et pourquoi c'est bon", "Prix, taille du paquet, combien et à quel rythme", "Livraison ; apportez un échantillon et l'étiquette"] },
            { title: "Mettez les conditions par écrit", bullets: ["Quantité, prix, jour de livraison", "Date et moyen de paiement ; paquets abîmés", "Gardez une copie ; ne donnez jamais votre PIN"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan produit d'une page. Mettez-y le produit et l'acheteur, votre fiche de coûts et votre prix, votre liste d'hygiène et de chaîne du froid, votre projet d'étiquette et l'organisme national, et une courte présentation avec les conditions que vous demanderez à l'acheteur d'accepter par écrit.",
          youCanNow: "présenter votre produit à un acheteur direct et convenir par écrit de conditions claires sur le prix, la livraison et le paiement.",
          quickCheck: [
            { objective: "O5", q: "Une boutique propose de prendre votre pâte d'arachide en dépôt-vente. Quel est le risque ?", options: ["Vous devez d'abord payer la boutique", "Vous n'êtes payé qu'une fois le produit vendu, et les paquets invendus peuvent revenir", "La boutique va changer votre étiquette", "Il n'y a aucun risque"], answer: 1, why: "En dépôt-vente, c'est vous qui portez le risque jusqu'à la vente, alors convenez de la durée et du sort des paquets invendus." },
            { objective: "O5", q: "Un hôtel accepte d'acheter du yaourt chaque semaine. Que faut-il mettre par écrit ?", options: ["Seulement le nom de l'hôtel", "Votre code PIN de mobile money", "Rien ; une poignée de main suffit", "La quantité, le prix, le jour de livraison, la date de paiement et le sort des paquets abîmés"], answer: 3, why: "Des conditions écrites sur la quantité, le prix, la livraison et le paiement évitent les disputes plus tard." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Emballer, étiqueter et vendre en direct",
        questions: [
          { objective: "O4", q: "Quel organisme délivre la Standardization Mark aux produits au Kenya ?", options: ["NAFDAC", "FDA du Ghana", "KEBS", "CODINORM"], answer: 2, why: "Le KEBS, Bureau des normes du Kenya, délivre la Standardization Mark." },
          { objective: "O4", q: "Quand faut-il imprimer beaucoup d'étiquettes ?", options: ["Après avoir vérifié ce que demande votre organisme national", "Avant de choisir le produit", "Avant de parler à un acheteur", "Seulement après la plainte d'un acheteur"], answer: 0, why: "Les règles d'étiquetage varient selon les pays et changent, alors vérifiez d'abord pour ne pas gaspiller d'étiquettes." },
          { objective: "O3", q: "Quel produit a besoin d'une chaîne du froid ?", options: ["La farine de manioc", "La mangue séchée", "La pâte d'arachide en pot fermé", "Le yaourt"], answer: 3, why: "Le yaourt est périssable et doit rester froid de sa fabrication jusqu'à l'acheteur." },
          { objective: "O5", q: "Quel est un signe d'alerte d'un intermédiaire qui exploite ?", options: ["Payer le jour convenu", "Changer le prix après votre livraison", "Peser devant vous", "Donner un reçu"], answer: 1, why: "Changer le prix après la livraison fait porter la perte sur vous et casse la confiance." },
          { objective: "O5", q: "Que mettre dans une courte présentation pour le cuisinier d'une école ?", options: ["L'histoire de votre vie", "Les prix de votre voisin", "Produit, prix, taille du paquet, quantité fournie et livraison", "Votre code PIN bancaire"], answer: 2, why: "Un acheteur doit savoir ce que vous proposez, à quel prix, en quelle quantité et comment ça arrive." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Valeur ajoutée, emballage et commercialisation agricole",
    questions: [
      { objective: "O1", q: "Que veut dire ajouter de la valeur ?", options: ["Transformer ou emballer le produit pour que les acheteurs paient plus", "Planter une nouvelle culture", "Vendre bord champ", "Emprunter de l'argent pour la semence"], answer: 0, why: "Sécher, moudre, transformer ou bien emballer peut rapporter un meilleur prix." },
      { objective: "O1", q: "Qu'est-ce qui doit guider d'abord votre choix de produit ?", options: ["La machine la moins chère que vous trouvez", "Ce qui est joli sur une étiquette", "Ce que les acheteurs proches achètent vraiment", "Ce qui est à la mode à la télévision"], answer: 2, why: "Un produit qui a un vrai acheteur est moins risqué qu'un produit fait au hasard." },
      { objective: "O1", q: "Sur quelles quatre choses faut-il noter chaque option de produit ?", options: ["Couleur, goût, odeur, taille", "Demande, matière première, matériel et savoir-faire, règles", "Prix, marque, logo, slogan", "Pluie, soleil, vent, sol"], answer: 1, why: "Ces quatre points montrent si vous pouvez le fabriquer, le vendre et le faire légalement." },
      { objective: "O1", q: "Vos manguiers donnent des fruits deux mois par an. Qu'est-ce que cela veut dire pour la mangue séchée ?", options: ["Vous ne pouvez pas faire de mangue séchée", "Vous devez tout vendre frais", "Le prix ne compte pas", "Prévoir la matière première : acheter aux voisins ou en faire assez pour vendre toute l'année"], answer: 3, why: "Une matière première saisonnière limite le temps pendant lequel vous pouvez fournir un acheteur." },
      { objective: "O2", q: "Quel coût va dans votre fiche de coûts ?", options: ["Seulement la matière première", "Votre propre temps de travail", "Le transport de l'acheteur chez lui", "Les frais de scolarité de votre voisin"], answer: 1, why: "Votre propre travail est un vrai coût ; l'oublier cache si le produit rapporte." },
      { objective: "O2", q: "Un lot de gari coûte NGN 60 000 et vous pouvez vendre 120 sacs. Quel est le coût par sac ?", options: ["NGN 500", "NGN 200", "NGN 1 200", "NGN 7 200"], answer: 0, why: "60 000 divisé par 120 sacs donne NGN 500 par sac." },
      { objective: "O2", q: "Comment fixer votre prix ?", options: ["Copier le prix le plus bas du marché", "Demander ce que propose le premier acheteur", "Coût par paquet plus une marge, puis comparer avec les prix en boutique", "Demander le même prix que pour le produit brut"], answer: 2, why: "Le prix doit couvrir tous les coûts avec une marge tout en restant raisonnable pour les acheteurs." },
      { objective: "O2", q: "Votre prix est bien plus élevé que celui de produits semblables en boutique. Quelle est une bonne étape suivante ?", options: ["Abandonner tout de suite", "Augmenter encore le prix", "Cacher le prix", "Chercher une méthode moins chère, un paquet plus petit ou un acheteur qui paie pour la qualité"], answer: 3, why: "Changer le coût, la taille du paquet ou l'acheteur peut rendre le produit compétitif." },
      { objective: "O3", q: "Qu'est-ce qui fait partie d'une liste d'hygiène ?", options: ["Mains lavées au savon avant le travail", "Animaux admis dans l'atelier", "Matière première et produit fini rangés ensemble", "N'importe quelle eau trouvée"], answer: 0, why: "Le lavage des mains au savon garde les microbes hors des aliments." },
      { objective: "O3", q: "Pourquoi ne jamais utiliser d'arachides moisies pour la pâte ?", options: ["Elles sont trop lourdes", "Elles peuvent contenir de l'aflatoxine, que la cuisson n'élimine pas", "Elles salissent le pot", "Les acheteurs n'aiment pas la couleur"], answer: 1, why: "L'aflatoxine est un poison invisible que la torréfaction ne détruit pas." },
      { objective: "O3", q: "Le yaourt est livré tôt le matin dans une glacière avec des pains de glace. C'est un exemple de :", options: ["Marque", "Dépôt-vente", "Chaîne du froid", "Enregistrement"], answer: 2, why: "Garder un produit périssable au froid à chaque étape, c'est une chaîne du froid." },
      { objective: "O3", q: "Comment la farine de manioc doit-elle voyager jusqu'à un acheteur ?", options: ["En sacs ouverts sous la pluie", "À côté du carburant et des produits chimiques", "Congelée", "Sèche, fermée, à l'ombre et loin des nuisibles"], answer: 3, why: "Les produits secs s'abîment avec l'humidité ou la contamination, ils doivent donc rester secs et protégés." },
      { objective: "O4", q: "Quelle mention figure en général sur une étiquette alimentaire ?", options: ["Les ingrédients et le poids net", "Le code PIN de l'agriculteur", "Le nom de l'acheteur", "Le prix de l'engrais"], answer: 0, why: "Les ingrédients et le poids net disent aux acheteurs ce qu'il y a dedans et en quelle quantité." },
      { objective: "O4", q: "Au Nigeria, quel organisme enregistre les aliments emballés fabriqués localement ?", options: ["KEBS", "FDA du Ghana", "CODINORM", "NAFDAC"], answer: 3, why: "La NAFDAC enregistre les aliments fabriqués au Nigeria, y compris ceux des petits producteurs." },
      { objective: "O4", q: "Qu'est-ce qu'une marque ?", options: ["Un type de pot", "Le nom, le logo et la promesse que les acheteurs reconnaissent", "Une licence de l'État", "Un numéro de lot"], answer: 1, why: "Une marque aide les acheteurs à reconnaître votre produit et à lui faire confiance." },
      { objective: "O4", q: "Les règles d'enregistrement de votre produit ne sont pas claires. Que faites-vous ?", options: ["Vous vendez quand même et attendez", "Vous demandez l'avis d'un commerçant", "Vous contactez votre organisme national des aliments ou de normalisation et vérifiez ses règles actuelles", "Vous copiez le numéro d'enregistrement d'une autre marque"], answer: 2, why: "Seul l'organisme national peut dire ce qu'il faut pour votre produit ; les règles et les frais changent." },
      { objective: "O5", q: "Quelle est une bonne raison de vendre directement à une école ?", options: ["Des commandes en gros régulières selon un calendrier", "Jamais de paperasse", "Les écoles ne paient jamais en retard", "La qualité n'a pas d'importance"], answer: 0, why: "Les écoles achètent souvent en gros et régulièrement, mais elles demandent des devis, des factures et une qualité constante." },
      { objective: "O5", q: "À quoi les hôtels tiennent-ils le plus en général ?", options: ["Des échantillons gratuits chaque semaine", "La couleur de vos vêtements", "La taille de votre ferme", "Toujours la même qualité"], answer: 3, why: "Les hôtels servent des clients chaque jour et ont besoin d'une qualité et d'un approvisionnement constants." },
      { objective: "O5", q: "Vous vendez de la mangue séchée sur WhatsApp. Qu'est-ce qui aide les acheteurs en ligne ?", options: ["Ne pas afficher de prix", "Des photos claires, des prix et une livraison rapide", "Leur demander leur code PIN bancaire", "De longs messages vocaux"], answer: 1, why: "Les acheteurs en ligne décident sur les photos et les prix clairs, et attendent une livraison rapide." },
      { objective: "O5", q: "Un acheteur accepte au téléphone de prendre 50 pots par semaine. Quelle est la meilleure étape suivante ?", options: ["Livrer et espérer qu'il paie", "Lui envoyer votre code PIN de mobile money", "Écrire la quantité, le prix, le jour de livraison et la date de paiement dans un message et garder une copie", "Attendre qu'il fixe les conditions plus tard"], answer: 2, why: "Des conditions écrites, même dans un message, protègent les deux parties en cas de désaccord." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan produit et réessayez.",
    criteria: [
      { name: "Produit et acheteur", objective: "O1", notYet: "Un produit est nommé sans acheteur, ou le choix n'a pas été comparé à une autre option.", meets: "Un produit et un acheteur précis, choisis après avoir comparé deux options selon la demande, la matière première, le matériel et les règles.", exceeds: "Montre aussi comment trouver la matière première toute l'année, par exemple auprès des voisins ou d'un groupement." },
      { name: "Fiche de coûts et prix", objective: "O2", notYet: "Seule la matière première est comptée, ou il n'y a pas de coût par paquet.", meets: "Tous les coûts d'un lot, main-d'œuvre et pertes compris, donnent un coût par paquet et un prix avec une marge.", exceeds: "Le prix est comparé aux prix en boutique et le plan montre quoi changer s'il est trop élevé." },
      { name: "Hygiène et chaîne du froid", objective: "O3", notYet: "Pas d'étapes écrites, ou des risques clés manquent, comme le lavage des mains, la moisissure ou le froid.", meets: "Une liste qui couvre l'eau, les mains, les surfaces, la matière première, l'emballage, les numéros de lot et le transport sans danger.", exceeds: "Chaque étape nomme le risque et la règle, et une autre personne pourrait la suivre sans aide." },
      { name: "Étiquette et enregistrement", objective: "O4", notYet: "Il manque à l'étiquette les ingrédients, le poids net, le contact ou les dates, ou aucun organisme national n'est nommé.", meets: "L'étiquette indique le nom, les ingrédients, le poids net, le producteur et son contact, le numéro de lot, les dates et la conservation, et nomme l'organisme à consulter.", exceeds: "L'apprenant a contacté l'organisme et noté ce qu'il demande et ce que cela coûte." },
      { name: "Présentation et conditions", objective: "O5", notYet: "Pas de présentation, ou pas de conditions écrites sur le prix, la livraison et le paiement.", meets: "Une courte présentation plus des conditions écrites : quantité, prix, jour de livraison, date et moyen de paiement, paquets abîmés.", exceeds: "La présentation a été faite à un vrai acheteur, et l'apprenant a noté sa réponse." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui vendent au moins un lot d'un produit à valeur ajoutée dans les 90 jours (enquête de suivi)",
      "Apprenants qui déclarent un prix par kilo de produit brut plus élevé qu'en le vendant brut (enquête de suivi)",
      "Apprenants qui contactent leur organisme national des aliments ou de normalisation, ou s'y enregistrent",
      "Apprenants qui déclarent moins de pertes à la récolte parce que le produit a été transformé au lieu d'être bradé"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone (un smartphone aide) et une calculatrice",
      "Du papier et un stylo pour la fiche de coûts, la liste d'hygiène et l'étiquette",
      "En option : un outil de conception gratuit comme Canva pour l'étiquette",
      "Un échantillon de votre produit brut et un produit semblable d'une boutique locale pour comparer",
      "Environ 90 minutes en tout, en courtes séances, plus du temps pour rendre visite aux acheteurs"
    ],
    facilitatorNotes: [
      "Regroupez les apprenants par produit (par exemple mangue séchée, farine de manioc, pâte d'arachide, yaourt) pour qu'ils partagent leurs enquêtes auprès des acheteurs et leurs coûts.",
      "Faites la leçon sur les coûts avec un vrai lot fabriqué par le groupe, et laissez les apprenants vérifier les calculs les uns des autres.",
      "Invitez un agent de l'organisme national des aliments ou de normalisation (KEBS, NAFDAC, FDA du Ghana, CODINORM ou l'organisme de votre pays) pour expliquer les étapes d'enregistrement actuelles ; ne citez pas de frais de mémoire.",
      "Organisez une visite pratique d'hygiène dans un vrai lieu de transformation, et insistez sur le fait que les produits laitiers demandent une méthode éprouvée et une chaîne du froid.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois ; faites jouer la présentation avec un apprenant dans le rôle de l'acheteur."
    ]
  }
};
