"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-climate-smart.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FAO_CSA = { name: "FAO : Guide de référence sur l'agriculture intelligente face au climat", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Kenya Meteorological Department (prévisions saisonnières, bulletins agrométéorologiques)", url: "https://meteo.go.ke" };
const NIMET = { name: "Agence météorologique du Nigeria (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR : maïs intelligent face au climat (tolérant à la sécheresse)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe : la technique push-pull stoppe la chenille légionnaire d'automne", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO SMIAR : observation de la Terre (indicateurs de sécheresse et de végétation)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-fr",
  lang: "fr",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Agriculture intelligente face au climat",
  skills: "Expliquer l'agriculture intelligente face au climat, Lire les prévisions saisonnières officielles, Cartographier les risques climatiques de sa ferme, Choisir des pratiques pour le sol et l'eau, Choisir des cultures et des variétés résistantes, Utiliser les arbres, l'élevage et l'assurance pour répartir les risques",
  outcome: "écrire et démarrer un plan intelligent face au climat pour votre propre ferme : les risques climatiques qu'elle connaît au cours de l'année, ce que dit la prévision saisonnière officielle, et les pratiques pour le sol, l'eau, les cultures, les arbres, l'élevage et l'assurance que vous utiliserez cette saison.",
  about: [
    "Ce cours s'adresse aux petits exploitants, aux jeunes agriculteurs, aux agents de vulgarisation et aux responsables de groupements au Kenya, au Nigeria et partout en Afrique qui voient des périodes sèches plus longues, des pluies plus fortes, plus de chaleur et de nouveaux ravageurs, et qui veulent des moyens pratiques de garder des récoltes et des revenus stables.",
    "Le chapitre 1 vous aide à comprendre le risque climatique sur votre propre ferme : ce que veut dire l'agriculture intelligente face au climat, comment lire la prévision saisonnière officielle de votre service météorologique national, et comment dessiner un calendrier simple des risques climatiques. Le chapitre 2 porte sur les pratiques : garder le sol et l'eau sur la ferme, choisir des cultures et des variétés qui résistent, et utiliser les arbres, l'élevage et l'assurance pour répartir les risques.",
    "Chaque ferme est différente. Utilisez ce cours avec les conseils de votre agent de vulgarisation, de votre vendeur d'intrants agricoles ou d'un institut de recherche, et testez les nouvelles pratiques d'abord sur une petite parcelle. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre ferme. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan d'une page intelligent face au climat pour votre ferme (ou une ferme d'exemple, comme 2 acres de maïs et de haricots à Machakos, ou 3 acres de sorgho et de niébé à Kano) : un calendrier mois par mois des risques climatiques, ce que dit la prévision officielle de cette saison et la date à laquelle vous l'avez lue, et au moins cinq pratiques que vous utiliserez (au moins une pour le sol et l'eau, une pour les cultures et les variétés, et une pour répartir les risques), avec la date de début de chacune et comment vous saurez si elle a marché.",
  chapters: [
    {
      name: "Chapitre 1 : Comprendre le risque climatique sur votre ferme",
      lessons: [
        {
          title: "Ce que veut dire l'agriculture intelligente face au climat",
          minutes: 5,
          goal: "Expliquer les trois objectifs de l'agriculture intelligente face au climat et juger si une pratique en fait partie.",
          text: [
            "L'agriculture intelligente face au climat (AIC) est une façon de choisir les pratiques agricoles en tenant compte du changement climatique. La FAO décrit trois objectifs : augmenter durablement la productivité et les revenus ; aider les fermes et les familles à s'adapter et à renforcer leur résilience face aux chocs climatiques ; et réduire ou éliminer les émissions de gaz à effet de serre quand c'est possible.",
            "La FAO souligne qu'une pratique n'a pas besoin de remplir les trois objectifs. Pour la plupart des petits exploitants, la nourriture et le revenu passent d'abord ; la baisse des émissions est un bonus. Une pratique est intelligente face au climat si elle convient à votre ferme et la rend plus productive et plus résiliente.",
            "Exemples que les agriculteurs africains utilisent déjà : le paillage et le travail minimum du sol pour garder l'humidité, les poquets de plantation et les mares de récupération d'eau, les variétés tolérantes à la sécheresse et précoces, l'association du maïs avec le haricot ou le niébé, le push-pull contre les foreurs de tiges et la chenille légionnaire d'automne, les arbres dans les champs, les fourrages améliorés, et l'assurance des cultures ou du bétail."
          ],
          words: [["Agriculture intelligente face au climat (AIC)", "une agriculture qui augmente la productivité, aide les fermes à s'adapter au changement climatique et réduit les émissions quand c'est possible."], ["Résilience", "la capacité d'une ferme et d'une famille à faire face à un choc, comme une sécheresse, et à s'en remettre vite."], ["Adaptation", "changer sa façon de cultiver pour faire face à un climat qui change."]],
          slides: [
            { title: "Trois objectifs (FAO)", bullets: ["Augmenter la productivité et les revenus", "S'adapter et renforcer la résilience", "Réduire les émissions quand c'est possible"] },
            { title: "Pas les trois à la fois", bullets: ["La nourriture et le revenu d'abord", "La baisse des émissions est un bonus", "Adaptée à la ferme + plus résiliente = AIC"] },
            { title: "Exemples en Afrique", bullets: ["Paillage, travail minimum, poquets, mares", "Variétés résistantes à la sécheresse, associations, push-pull", "Arbres dans les champs, fourrage, assurance"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Listez trois pratiques déjà utilisées sur votre ferme ou dans votre village. Pour chacune, écrivez lequel des trois objectifs de l'AIC elle aide (productivité, résilience, émissions).",
          youCanNow: "expliquer les trois objectifs de l'agriculture intelligente face au climat et juger si une pratique en fait partie."
        },
        {
          title: "Lire la prévision saisonnière officielle",
          minutes: 5,
          goal: "Trouver et utiliser la prévision saisonnière de votre service météorologique national pour planifier la saison.",
          text: [
            "Avant chaque saison des pluies, les services météorologiques nationaux publient une prévision saisonnière : si les pluies devraient être au-dessus, proches ou en dessous de la normale, et quand elles pourraient commencer et finir. Au Kenya, le Kenya Meteorological Department (KMD) publie des prévisions saisonnières et des bulletins agrométéorologiques. Au Nigeria, l'Agence météorologique du Nigeria (NiMet) publie des prévisions climatiques saisonnières. Les autres pays ont leurs propres services ; beaucoup de prévisions sont aussi diffusées à la radio et par les agents de vulgarisation.",
            "Une prévision saisonnière donne des probabilités, pas des promesses. « En dessous de la normale » veut dire une plus forte probabilité de pluies plus faibles que d'habitude dans votre zone, pas qu'il fera forcément sec. Utilisez-la pour ajuster, pas pour tout miser : par exemple choisir une variété à cycle plus court, semer à la bonne date, prévoir la récupération de l'eau, ou réduire la surface d'une culture qui a besoin de beaucoup d'eau.",
            "Utilisez les prévisions à court terme (les prochains jours) pour les décisions quotidiennes, comme quand semer après le début des pluies, quand traiter ou apporter l'engrais de couverture, et quand récolter et sécher."
          ],
          steps: ["Trouvez le site, l'émission de radio ou le bulletin de vulgarisation de votre service météorologique national.", "Lisez la prévision saisonnière pour votre comté, État ou région.", "Notez : au-dessus, proche ou en dessous de la normale ; début et fin prévus des pluies.", "Écrivez deux changements que vous ferez à cause d'elle.", "Consultez les prévisions à court terme pour les jours de semis, d'engrais de couverture et de récolte."],
          words: [["Prévision saisonnière", "une perspective des pluies et des températures pour la saison à venir, exprimée en probabilités."], ["Installation des pluies", "le début de la saison des pluies."], ["Bulletin agrométéorologique", "un bulletin météo écrit pour les agriculteurs, qui relie le temps aux cultures."]],
          slides: [
            { title: "Prévisions saisonnières officielles", bullets: ["Kenya : Kenya Meteorological Department (KMD)", "Nigeria : NiMet", "Aussi à la radio et par les agents de vulgarisation"] },
            { title: "Des probabilités, pas des promesses", bullets: ["Au-dessus, proche ou en dessous de la normale", "Début et fin prévus des pluies", "Ajustez ; ne misez pas tout"] },
            { title: "Utilisez-la", bullets: ["Variété à cycle plus court si les pluies sont faibles", "Prévoyez la récupération de l'eau", "Prévisions à court terme pour les travaux du jour"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Trouvez la dernière prévision saisonnière pour votre zone auprès du KMD, de NiMet ou du service météo de votre pays. Écrivez ce qu'elle dit, la date à laquelle vous l'avez lue, et deux changements que vous ferez à votre plan.",
          youCanNow: "trouver la prévision saisonnière officielle et l'utiliser pour ajuster votre plan de saison."
        },
        {
          title: "Dessiner le calendrier des risques climatiques de votre ferme",
          minutes: 5,
          goal: "Dessiner un calendrier mois par mois des risques climatiques de votre ferme.",
          text: [
            "Un calendrier des risques climatiques place vos cultures et vos animaux à côté des risques de chaque mois. Dessinez 12 colonnes pour les mois. Sur la première ligne, écrivez vos saisons (grandes pluies, petites pluies, saison sèche, ou saison des pluies et saison sèche dans une grande partie du Nigeria). En dessous, écrivez ce que vous faites chaque mois : préparation du sol, semis, sarclage, engrais de couverture, récolte, séchage, vente, et les moments où les animaux ont le plus besoin d'aliments et d'eau.",
            "Ensuite, marquez les risques : installation tardive ou fin précoce des pluies, périodes sèches en milieu de saison, gros orages et inondations, chaleur à la floraison, ravageurs et maladies liés à la météo (chenille légionnaire d'automne, pucerons, maladies fongiques par temps humide), et pertes après récolte quand le grain est stocké humide.",
            "Cherchez les points dangereux : les mois où un travail important rencontre un gros risque, comme la floraison du maïs pendant un mois qui connaît souvent une période sèche. C'est là que les pratiques intelligentes face au climat aident le plus. Demandez aux anciens comment le schéma a changé au fil des années."
          ],
          steps: ["Dessinez 12 colonnes de mois ; écrivez vos saisons.", "Écrivez les travaux de la ferme et les besoins des animaux par mois.", "Marquez les risques climatiques et les ravageurs liés à la météo.", "Entourez les points dangereux où un travail clé rencontre un gros risque.", "Demandez aux anciens ce qui a changé."],
          words: [["Période sèche", "une période de plusieurs jours ou semaines sans pluie utile pendant la saison des pluies."], ["Point dangereux", "un moment où un travail agricole important rencontre un risque climatique élevé."]],
          slides: [
            { title: "Douze colonnes", bullets: ["Les saisons en haut", "Travaux de la ferme et besoins des animaux par mois"] },
            { title: "Marquez les risques", bullets: ["Installation tardive, fin précoce, périodes sèches", "Orages, inondations, chaleur à la floraison", "Ravageurs liés à la météo, stockage humide"] },
            { title: "Trouvez les points dangereux", bullets: ["Un travail clé rencontre un gros risque", "Là où l'AIC aide le plus", "Demandez aux anciens ce qui a changé"] }
          ],
          sources: [FAO_EO],
          tryIt: "Dessinez le calendrier des risques climatiques de votre ferme sur papier ou dans un tableur sur téléphone. Entourez au moins deux points dangereux.",
          youCanNow: "dessiner un calendrier des risques climatiques pour votre ferme et trouver ses points dangereux."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comprendre le risque climatique sur votre ferme",
        questions: [
          { q: "Lequel est l'un des trois objectifs de l'agriculture intelligente face au climat selon la FAO ?", options: ["Utiliser le plus de produits chimiques possible", "Aider les fermes à s'adapter et à renforcer leur résilience", "Ne planter qu'une seule culture", "Abattre tous les arbres"], answer: 1, why: "L'AIC vise la productivité, l'adaptation et la résilience, et moins d'émissions quand c'est possible." },
          { q: "Une pratique intelligente face au climat doit-elle remplir les trois objectifs à la fois ?", options: ["Oui, toujours", "Seulement au Kenya", "Non ; elle doit convenir à la ferme et améliorer la productivité et la résilience", "Seulement dans les grandes fermes"], answer: 2, why: "La FAO dit qu'une pratique n'a pas à remplir chaque objectif ; la nourriture et le revenu passent d'abord." },
          { q: "La prévision saisonnière annonce « des pluies en dessous de la normale ». Cela veut dire :", options: ["Une plus forte probabilité de pluies plus faibles que d'habitude", "Qu'il ne pleuvra certainement pas", "Que des inondations sont certaines", "Rien d'utile"], answer: 0, why: "Les prévisions saisonnières donnent des probabilités, pas des certitudes." },
          { q: "Où un agriculteur nigérian doit-il chercher la prévision saisonnière officielle ?", options: ["Une rumeur au marché", "Le calendrier de l'an dernier", "Un inconnu sur les réseaux sociaux", "NiMet ou ses prévisions relayées par la vulgarisation et la radio"], answer: 3, why: "NiMet est le service météorologique officiel du Nigeria." },
          { q: "Un point dangereux dans un calendrier des risques climatiques est :", options: ["Un moment où un travail agricole important rencontre un risque climatique élevé", "Un lieu pour vendre les récoltes", "Un type de ravageur", "Un mois sans travail agricole"], answer: 0, why: "Les points dangereux montrent où les pratiques aident le plus." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les pratiques intelligentes face au climat",
      lessons: [
        {
          title: "Garder le sol et l'eau sur la ferme",
          minutes: 6,
          goal: "Choisir des pratiques pour le sol et l'eau adaptées à votre ferme et à sa pente.",
          text: [
            "Un sol en bonne santé retient plus d'eau et nourrit les cultures pendant les périodes sèches. Trois principes de l'agriculture de conservation aident : perturber le sol le moins possible (travail minimum du sol), le garder couvert (résidus de culture ou paillis au lieu de brûler), et faire des rotations ou des associations (par exemple maïs avec haricot, niébé ou pois d'Angole). Ajoutez du fumier ou du compost pour augmenter la matière organique.",
            "Captez la pluie là où elle tombe. Les poquets ou cuvettes de plantation (appelés zaï au Sahel) recueillent l'eau et le fumier autour de chaque plant. Les billons cloisonnés et les cordons en courbes de niveau empêchent l'eau de ruisseler. Sur les pentes, les terrasses comme le fanya juu au Kenya, les bandes enherbées et les arbres le long des courbes de niveau arrêtent l'érosion. Les mares et la récupération d'eau de toiture stockent l'eau pour les animaux, les pépinières et les jardins potagers.",
            "Commencez petit : essayez une pratique sur une partie du champ, comparez-la avec votre façon habituelle, et gardez ce qui marche. Demandez à votre agent de vulgarisation des modèles locaux et le travail qu'ils demandent."
          ],
          steps: ["Arrêtez de brûler les résidus ; laissez-les en paillis.", "Réduisez le labour là où les mauvaises herbes peuvent être maîtrisées.", "Faites une rotation ou une association avec une légumineuse.", "Captez la pluie : poquets, billons cloisonnés, cordons en courbes de niveau.", "Sur les pentes : terrasses, bandes enherbées, arbres en courbes de niveau.", "Essayez d'abord sur une petite surface et comparez."],
          words: [["Agriculture de conservation", "une agriculture avec un minimum de perturbation du sol, une couverture permanente du sol et la rotation des cultures."], ["Paillis", "une couche de résidus de culture, d'herbe ou de feuilles sur le sol pour le garder humide et frais."], ["Zaï / cuvettes de plantation", "de petits trous qui recueillent l'eau de pluie et le fumier autour des plants."], ["Fanya juu", "une terrasse kenyane faite en rejetant la terre d'un fossé vers le haut pour former un talus."]],
          slides: [
            { title: "Un sol sain retient l'eau", bullets: ["Travail minimum du sol", "Sol couvert : paillis, pas de brûlis", "Rotation ou association avec des légumineuses"] },
            { title: "Captez la pluie là où elle tombe", bullets: ["Poquets et cuvettes (zaï)", "Billons cloisonnés et cordons en courbes de niveau", "Mares et récupération d'eau de toiture"] },
            { title: "Protégez les pentes", bullets: ["Terrasses comme le fanya juu", "Bandes enherbées et arbres en courbes de niveau"] },
            { title: "Commencez petit", bullets: ["Essayez sur une partie du champ", "Comparez avec votre façon habituelle", "Demandez des modèles locaux à la vulgarisation"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Parcourez votre ferme après une pluie ou regardez-la maintenant. Marquez où l'eau ruisselle, où le sol part, et où l'eau stagne. Choisissez une pratique pour le sol ou l'eau pour un endroit et écrivez comment vous allez la tester.",
          youCanNow: "choisir et tester des pratiques qui gardent l'humidité et le sol sur votre ferme."
        },
        {
          title: "Choisir des cultures et des variétés qui résistent",
          minutes: 5,
          goal: "Choisir des cultures, des variétés et des stratégies de semis qui réduisent le risque climatique.",
          text: [
            "Les variétés comptent. Le CIMMYT, centre de recherche du CGIAR sur le maïs, et ses partenaires ont sélectionné des variétés de maïs tolérantes à la sécheresse diffusées dans de nombreux pays d'Afrique subsaharienne ; le CGIAR indique qu'elles peuvent nettement mieux rendre que les variétés classiques en cas de sécheresse. Les haricots et le maïs précoces échappent à la sécheresse de fin de saison. Demandez à votre vendeur d'intrants ou à votre agent de vulgarisation quelles variétés certifiées conviennent à votre zone, et achetez des semences certifiées chez des vendeurs agréés.",
            "Les cultures comptent aussi. Le sorgho, le mil, le manioc, le niébé et le pois d'Angole supportent mieux la sécheresse que le maïs dans beaucoup de zones. Cultiver plus d'une culture, et les associer, répartit le risque : si l'une échoue, une autre peut réussir.",
            "Les ravageurs changent avec le climat. Le push-pull, mis au point par l'icipe et ses partenaires, associe le maïs ou le sorgho au desmodium et l'entoure d'une bordure d'herbe à éléphant (Napier) ou de Brachiaria ; l'icipe indique qu'il réduit fortement les dégâts des foreurs de tiges, du striga et de la chenille légionnaire d'automne. Échelonnez les dates de semis par petits blocs, et semez sans tarder à la vraie installation des pluies."
          ],
          steps: ["Demandez à la vulgarisation ou à un vendeur d'intrants des variétés certifiées tolérantes à la sécheresse ou précoces pour votre zone.", "Achetez des semences certifiées chez un vendeur agréé.", "Ajoutez une culture résistante à la sécheresse (sorgho, manioc, niébé, pois d'Angole).", "Associez les cultures pour répartir le risque ; pensez au push-pull pour le maïs ou le sorgho.", "Semez sans tarder à la vraie installation des pluies ; échelonnez par petits blocs."],
          words: [["Variété tolérante à la sécheresse", "une variété sélectionnée pour mieux rendre que les autres quand l'eau manque."], ["Précoce", "prête à récolter plus tôt, ce qui lui permet d'échapper à la sécheresse de fin de saison."], ["Semence certifiée", "une semence contrôlée par l'autorité officielle des semences pour sa pureté et sa qualité."], ["Push-pull", "un système où le desmodium repousse les ravageurs du maïs ou du sorgho et l'herbe de bordure les attire ailleurs."]],
          slides: [
            { title: "Les variétés", bullets: ["Maïs tolérant à la sécheresse (CGIAR/CIMMYT)", "Maïs et haricots précoces", "Semences certifiées de vendeurs agréés"] },
            { title: "Les cultures", bullets: ["Sorgho, mil, manioc, niébé, pois d'Angole", "Plusieurs cultures répartissent le risque"] },
            { title: "Ravageurs et calendrier", bullets: ["Push-pull : desmodium + herbe de bordure (icipe)", "Semez sans tarder à la vraie installation", "Échelonnez par petits blocs"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Pour votre culture principale, trouvez une variété certifiée tolérante à la sécheresse ou précoce vendue près de chez vous (demandez à un vendeur d'intrants ou à un agent de vulgarisation), et choisissez une culture résistante à la sécheresse à ajouter. Écrivez où vous sèmerez chacune.",
          youCanNow: "choisir des cultures, des variétés et des stratégies de semis qui réduisent le risque climatique de votre ferme."
        },
        {
          title: "Arbres, élevage et assurance : répartir le risque",
          minutes: 6,
          goal: "Ajouter au moins un moyen de répartir le risque au-delà de votre culture principale, puis écrire votre plan.",
          text: [
            "Les arbres dans les fermes (agroforesterie) donnent de l'ombre, des brise-vent, du fourrage, des fruits, du bois de feu et de construction, protègent le sol et stockent du carbone. Les arbres fruitiers comme le manguier et l'avocatier, les arbres fixateurs d'azote et les arbres en limite de parcelle peuvent tous ajouter un revenu qui ne dépend pas des pluies d'une seule saison.",
            "L'élevage peut servir d'amortisseur, mais il souffre aussi de la sécheresse. Plantez et stockez du fourrage (herbe à éléphant, Brachiaria, résidus de culture, foin), protégez les points d'eau, choisissez des races robustes, et gardez un nombre d'animaux adapté au fourrage que vous pouvez produire ou acheter. Le petit bétail comme les chèvres et la volaille peut être plus facile à garder pendant les années sèches.",
            "L'assurance transfère une partie du risque à un assureur. Les assurances indicielles météo et les assurances au rendement de zone paient quand la pluie ou les rendements de la zone tombent en dessous d'un niveau fixé, et sont vendues dans certaines zones par des coopératives, des vendeurs d'intrants ou le mobile money. Renseignez-vous auprès de votre coopérative ou de votre agent de vulgarisation, lisez ce qui déclenche un paiement, et vérifiez que l'assureur est agréé par votre autorité de contrôle des assurances (au Kenya l'Insurance Regulatory Authority, au Nigeria la NAICOM ; en Afrique francophone, souvent la CIMA). Les groupes d'épargne et la diversification des revenus répartissent aussi le risque."
          ],
          steps: ["Choisissez des arbres adaptés à votre ferme : fruitiers, fourragers, de limite ou fixateurs d'azote.", "Prévoyez le fourrage et l'eau des animaux pour la saison sèche.", "Adaptez le nombre d'animaux au fourrage que vous pouvez produire ou acheter.", "Renseignez-vous sur l'assurance indicielle météo ou au rendement de zone ; lisez le déclencheur ; vérifiez que l'assureur est agréé.", "Écrivez votre plan intelligent face au climat."],
          words: [["Agroforesterie", "cultiver des arbres avec des cultures ou de l'élevage sur la même terre."], ["Fourrage", "des plantes cultivées ou stockées pour nourrir les animaux."], ["Assurance indicielle météo", "une assurance qui paie quand une mesure météo, comme la pluie, tombe en dessous d'un niveau fixé."], ["Déclencheur de paiement", "la condition qui fait payer l'assureur."]],
          slides: [
            { title: "Des arbres dans la ferme", bullets: ["Ombre, brise-vent, fourrage, fruits, bois", "Protègent le sol, stockent du carbone", "Un revenu au-delà d'une saison"] },
            { title: "L'élevage comme amortisseur", bullets: ["Produisez et stockez du fourrage", "Protégez l'eau, races robustes", "Nombre d'animaux adapté au fourrage"] },
            { title: "Assurance et épargne", bullets: ["Assurance indicielle météo et au rendement de zone", "Lisez le déclencheur de paiement", "Vérifiez que l'assureur est agréé"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tâche finale : écrivez votre plan d'une page intelligent face au climat : calendrier des risques, prévision de cette saison et date de lecture, et au moins cinq pratiques (sol et eau, cultures et variétés, répartition des risques), avec les dates de début et comment vous jugerez la réussite.",
          youCanNow: "utiliser les arbres, l'élevage, l'assurance et l'épargne pour répartir le risque climatique, et écrire un plan complet intelligent face au climat pour votre ferme."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les pratiques intelligentes face au climat",
        questions: [
          { q: "Lequel est un principe de l'agriculture de conservation ?", options: ["Brûler les résidus après la récolte", "Labourer profondément chaque saison", "Garder le sol couvert de paillis ou de résidus", "Cultiver la même plante pour toujours"], answer: 2, why: "La couverture du sol garde l'humidité et protège contre l'érosion." },
          { q: "Les poquets de plantation (zaï) aident parce qu'ils :", options: ["Recueillent la pluie et le fumier autour de chaque plant", "Éloignent les oiseaux", "Accélèrent la récolte", "Remplacent la semence"], answer: 0, why: "Ils concentrent l'eau et les nutriments là où sont les racines." },
          { q: "Où acheter la semence d'une variété tolérante à la sécheresse ?", options: ["Chez n'importe quel vendeur au bord de la route", "Dans le grenier d'un voisin", "Du grain acheté au marché", "Chez un vendeur agréé qui vend des semences certifiées"], answer: 3, why: "La semence certifiée est contrôlée pour sa pureté et sa qualité." },
          { q: "Dans le push-pull, que fait le desmodium ?", options: ["Il attire les ravageurs dans le maïs", "Il repousse les ravageurs du maïs ou du sorgho", "Il remplace complètement l'engrais", "Il nourrit les oiseaux"], answer: 1, why: "Le desmodium repousse les ravageurs ; l'herbe de bordure les attire dehors." },
          { q: "Avant d'acheter une assurance indicielle météo, vous devez :", options: ["Lire le déclencheur de paiement et vérifier que l'assureur est agréé", "Payer la première personne qui le demande", "Donner votre code mobile money", "L'acheter pour vos voisins"], answer: 0, why: "Sachez quand elle paie, et assurez-vous que l'assureur est légitime." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Agriculture intelligente face au climat",
    questions: [
      { q: "L'agriculture intelligente face au climat, c'est :", options: ["Cultiver seulement avec des machines", "Choisir des pratiques qui augmentent la productivité, renforcent la résilience et réduisent les émissions quand c'est possible", "Cultiver seulement en ville", "Un type d'engrais"], answer: 1, why: "C'est la description de l'AIC par la FAO." },
      { q: "Pour la plupart des petits exploitants, quel objectif de l'AIC passe en général d'abord ?", options: ["Réduire les émissions", "Acheter des drones", "La sécurité alimentaire et le revenu", "Exporter"], answer: 2, why: "La FAO note que la nourriture et le revenu passent d'abord ; les émissions sont souvent un bénéfice en plus." },
      { q: "La résilience veut dire :", options: ["La capacité à faire face à un choc et à s'en remettre", "Semer tard", "Utiliser plus d'eau", "Un type de sol"], answer: 0, why: "Les fermes résilientes se relèvent après une sécheresse ou une inondation." },
      { q: "Les prévisions saisonnières officielles du Kenya viennent :", options: ["De la KCAA", "De NiMet", "D'une entreprise semencière", "Du Kenya Meteorological Department (KMD)"], answer: 3, why: "Le KMD publie les prévisions saisonnières et les bulletins agrométéo." },
      { q: "Une prévision saisonnière doit servir à :", options: ["Tout miser sur une seule culture", "Ajuster les plans, par exemple choisir une variété à cycle plus court", "Ignorer les dates de semis", "Arrêter de cultiver"], answer: 1, why: "Les prévisions donnent des probabilités ; ajustez avec bon sens." },
      { q: "L'installation des pluies veut dire :", options: ["La fin de la récolte", "Un ravageur", "Le début de la saison des pluies", "Un engrais"], answer: 2, why: "C'est le moment où les pluies commencent." },
      { q: "Une période sèche est :", options: ["Des jours ou des semaines sans pluie utile pendant la saison des pluies", "Une inondation", "Une nuit froide", "Un jour de marché"], answer: 0, why: "Les périodes sèches en milieu de saison peuvent nuire aux cultures à des stades clés." },
      { q: "La floraison du maïs pendant un mois qui connaît souvent une période sèche est :", options: ["Une occasion de marché", "Un bon signe", "Une méthode de semis", "Un point dangereux"], answer: 3, why: "Un stade clé qui rencontre un risque élevé est un point dangereux." },
      { q: "Brûler les résidus de culture :", options: ["Est un principe de l'agriculture de conservation", "Laisse le sol nu et fait perdre de la matière organique", "Fait retenir plus d'eau au sol", "Est intelligent face au climat"], answer: 1, why: "Les résidus gardés en paillis protègent et nourrissent le sol." },
      { q: "Le travail minimum du sol veut dire :", options: ["Labourer deux fois", "Ne pas désherber", "Perturber le sol le moins possible", "Ne planter que des arbres"], answer: 2, why: "Moins de perturbation protège la structure et l'humidité du sol." },
      { q: "Quelle pratique arrête l'érosion sur une pente ?", options: ["Des terrasses comme le fanya juu, et des bandes enherbées en courbes de niveau", "Labourer droit dans le sens de la pente", "Enlever toute l'herbe", "Brûler la pente"], answer: 0, why: "Les terrasses et les bandes en courbes de niveau ralentissent l'eau et retiennent le sol." },
      { q: "Une mare de récupération d'eau est :", options: ["Une marmite", "Un piège à ravageurs", "Un sachet de semences", "Un bassin creusé qui stocke l'eau de pluie"], answer: 3, why: "Les mares stockent l'eau pour les animaux et une petite irrigation." },
      { q: "Le CGIAR indique que les variétés de maïs tolérantes à la sécheresse :", options: ["Ont besoin de plus d'eau", "Peuvent nettement mieux rendre que les variétés classiques en cas de sécheresse", "Ne peuvent pas être cultivées en Afrique", "Sont identiques au maïs ordinaire"], answer: 1, why: "Elles ont été sélectionnées pour mieux produire quand l'eau manque." },
      { q: "Quelle culture supporte souvent mieux la sécheresse que le maïs ?", options: ["Le riz irrigué", "La canne à sucre", "Le sorgho", "Le thé"], answer: 2, why: "Le sorgho est une céréale résistante à la sécheresse." },
      { q: "Associer le maïs avec le haricot ou le niébé :", options: ["Répartit le risque et ajoute une légumineuse", "Baisse toujours le revenu", "N'est pas autorisé", "Demande un drone"], answer: 0, why: "Deux cultures répartissent le risque ; les légumineuses apportent de l'azote." },
      { q: "Dans le push-pull, l'herbe de bordure :", options: ["Repousse les ravageurs", "Est récoltée pour l'exportation", "Est traitée", "Attire les ravageurs loin de la culture"], answer: 3, why: "Les bordures d'herbe à éléphant ou de Brachiaria attirent les ravageurs ailleurs." },
      { q: "L'agroforesterie veut dire :", options: ["Défricher la forêt pour cultiver", "Cultiver des arbres avec des cultures ou de l'élevage", "Ne planter que des fleurs", "Acheter du bois"], answer: 1, why: "Les arbres dans les fermes ajoutent du revenu, de l'ombre et protègent le sol." },
      { q: "En cas de sécheresse, les éleveurs doivent :", options: ["Continuer à ajouter des animaux", "Vendre tout le fourrage", "Prévoir le fourrage et l'eau et adapter le nombre d'animaux au fourrage", "Arrêter d'abreuver les animaux"], answer: 2, why: "Prévoir l'alimentation et l'eau garde les animaux en vie pendant la saison sèche." },
      { q: "Le déclencheur de paiement d'une assurance indicielle météo est :", options: ["La condition qui fait payer l'assureur", "Le prix de la semence", "Un type de fusil", "L'adresse de l'assureur"], answer: 0, why: "Il définit quand le contrat paie." },
      { q: "Avant d'utiliser une nouvelle pratique sur toute votre ferme, vous devez :", options: ["L'utiliser partout d'un coup", "Ignorer les conseils de la vulgarisation", "Attendre dix ans", "La tester sur une petite surface et comparer"], answer: 3, why: "Les petits essais montrent si elle marche sur votre ferme." }
    ]
  }
};
