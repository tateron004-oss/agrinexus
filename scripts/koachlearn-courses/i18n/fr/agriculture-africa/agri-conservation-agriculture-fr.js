"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-conservation-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_CA = { name: "FAO : Agriculture de conservation (définition et les trois principes)", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT : trous de plantation zaï ou tassa (Niger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Effet de l'agriculture de conservation sur le rendement du maïs dans les zones semi-arides du Zimbabwe (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT : essais d'agriculture de conservation en milieu paysan en Zambie (cuvettes, sous-solage, semis direct contre labour, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenya : office des produits de lutte contre les ravageurs (produits homologués)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nigeria : agence nationale de contrôle des aliments et des médicaments (produits agrochimiques homologués)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana : agence de protection de l'environnement (homologation des pesticides)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO : L'importance de la matière organique du sol", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-fr",
  lang: "fr",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Agriculture de conservation pour les saisons sèches",
  skills: "Appliquer les trois principes de l'agriculture de conservation, Faire des cuvettes de semis et des trous de zaï, Choisir entre sous-solage et semis direct, Gérer le paillis, Désherber sans labourer, Planifier la saison et la transition",
  outcome: "planifier et démarrer une saison d'agriculture de conservation sur un champ : comment vous préparerez la terre sans labourer, la garderez couverte, ferez tourner les cultures et maîtriserez les mauvaises herbes, et quels outils et quelles dates vous utiliserez, avec une parcelle de comparaison pour suivre les résultats pendant les années de transition.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs commerciaux en croissance, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation des zones les plus sèches du Kenya, du Nigeria, du Ghana, du Burkina Faso, du Sénégal et de toute l'Afrique, où les pluies sont courtes, les poches de sécheresse fréquentes, et où le labour laisse le sol nu, dur et assoiffé.",
    "Le chapitre 1 explique les trois principes de l'agriculture de conservation tels que la FAO les définit, et montre comment préparer la terre sans labourer : cuvettes de semis, zaï, sous-solage et semis direct. Le chapitre 2 porte sur la couverture du sol avec du paillis, le désherbage sans labour, les outils et le calendrier d'une saison, ce qu'on peut attendre les années de sécheresse, et la façon de tenir pendant les premières saisons.",
    "L'irrigation et la collecte des eaux de pluie sont traitées dans \"Irrigation et gestion de l'eau\", et les bases du compost et du paillage dans \"Santé et fertilité du sol\" ; ce cours ne les répète pas. Commencez sur un champ et gardez à côté une parcelle labourée pour comparer. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre terre."
  ],
  finalTask: "Écrivez un plan d'une saison d'agriculture de conservation pour un champ (ou un exemple : 1 acre de maïs et de niébé à Machakos, 2 hectares de sorgho dans le nord du Ghana, ou 1 hectare de mil et d'arachide sur le Plateau central du Burkina Faso) : un croquis du champ ; comment vous le préparerez sans labourer (cuvettes, zaï, sous-solage ou semis direct) et pourquoi ; comment vous garderez au moins 30 pour cent du sol couvert ; la culture et la rotation ou l'association ; votre plan de désherbage ; un calendrier mois par mois des travaux, des outils et des coûts ; et comment vous le comparerez avec une parcelle labourée.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits exploitants et agriculteurs commerciaux en croissance, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation des zones agricoles sèches d'Afrique (Kenya, Nigeria, Ghana et Sahel francophone), qui cultivent le maïs, le sorgho, le mil, le niébé, le haricot et l'arachide, souvent avec des bovins ou des chèvres qui pâturent les résidus de culture.",
    startingPoint: "Ils préparent la terre en labourant avec des bœufs, un tracteur ou la houe, et souvent brûlent les résidus ou les font pâturer. Beaucoup ont entendu parler du zaï ou des cuvettes, mais n'ont pas mené une saison complète d'agriculture de conservation ni prévu les mauvaises herbes et la concurrence pour les résidus qui l'accompagnent.",
    gap: "Le labour et le sol nu gaspillent la pluie, qui est rare, et causent l'érosion, et un labour tardif retarde les semis. Les apprenants ont besoin d'une façon pratique de cultiver en remuant moins le sol, avec plus de couverture et de rotation, de planifier les outils, la main-d'œuvre et le calendrier, et de tenir pendant les premières saisons, quand les mauvaises herbes sont nombreuses et les résultats inégaux.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Main-d'œuvre et outils : houes, bœufs ou tracteur loué ; les cuvettes et le zaï sont un travail dur",
      "Résidus : selon la coutume locale, les animaux pâturent les champs après la récolte",
      "Sécurité des pesticides : herbicides seulement s'ils sont homologués dans le pays, utilisés comme le dit l'étiquette, avec un équipement de protection",
      "Temps : leçons de 4 à 6 minutes ; les résultats se construisent sur plusieurs saisons"
    ],
    prerequisites: "Aucun. \"Santé et fertilité du sol\" et \"Agriculture intelligente face au climat\" sont des bases utiles."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "En regardant un champ ou sa description", action: "dire si le champ suit chacun des trois principes de l'agriculture de conservation", standard: "en nommant les trois comme la FAO les décrit, dont une couverture du sol d'au moins 30 pour cent" },
    { id: "O2", condition: "Sur un champ, avant les pluies", action: "tracer et creuser des cuvettes de semis ou des trous de zaï avec du fumier ou du compost dans chacun", standard: "en lignes perpendiculaires à la pente, creusés en saison sèche" },
    { id: "O3", condition: "Selon votre sol, votre main-d'œuvre, votre traction et votre pluviométrie", action: "choisir entre cuvettes, sous-solage et semis direct pour un champ", standard: "en donnant au moins deux raisons à ce choix" },
    { id: "O4", condition: "Pour un champ en agriculture de conservation", action: "prévoir comment garder le sol couvert et maîtriser les mauvaises herbes sans labourer", standard: "en gardant au moins 30 pour cent de couverture et en n'utilisant, le cas échéant, que des herbicides homologués comme le dit l'étiquette" },
    { id: "O5", condition: "Pour une saison sur un champ", action: "écrire un calendrier de tous les travaux d'agriculture de conservation avec leur mois, leur outil et leur coût", standard: "de la préparation en saison sèche jusqu'à la récolte et à la gestion des résidus" },
    { id: "O6", condition: "Pendant les premières saisons d'agriculture de conservation", action: "comparer une parcelle en agriculture de conservation avec une parcelle labourée", standard: "en notant pour les deux le rendement, les jours de travail et les coûts à chaque saison" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les principes et la préparation de la terre sans labour",
      lessons: [
        {
          title: "Les trois principes de l'agriculture de conservation",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dire si un champ suit chacun des trois principes de l'agriculture de conservation.",
          text: [
            "L'agriculture de conservation (AC) est une façon de cultiver qui protège le sol pour qu'il garde plus de la petite pluie qui tombe. La FAO, l'organisation des Nations unies pour l'alimentation et l'agriculture, décrit trois principes qui marchent ensemble.",
            "1. Perturbation minimale du sol : pas de labour. La semence et l'engrais entrent dans le sol par de petits trous, des cuvettes ou d'étroites lignes de sous-solage, et le reste du sol n'est pas touché. 2. Couverture permanente du sol : garder les résidus de culture ou des plantes de couverture en surface, sur au moins 30 pour cent du sol, toute l'année. 3. Diversification des cultures : faire tourner ou associer au moins trois cultures différentes dans le temps, par exemple maïs, niébé et sorgho, et non du maïs chaque année.",
            "En appliquer un seul aide un peu ; appliquer les trois ensemble donne les vrais bénéfices. Labourer sans couvrir dessèche le sol ; couvrir sans rotation laisse les ravageurs s'installer ; ne pas labourer avec un sol nu laisse se former la croûte et la pluie ruisseler. Dans les zones sèches, le grand gain, c'est l'eau : un sol couvert et non remué laisse la pluie s'infiltrer et en perd moins au soleil."
          ],
          words: [["Agriculture de conservation (AC)", "une agriculture avec une perturbation minimale du sol, une couverture permanente du sol et une diversification des cultures."], ["Travail du sol", "retourner ou casser le sol, par exemple en labourant ou en bêchant."], ["Résidus de culture", "les tiges, les feuilles et les enveloppes qui restent après la récolte."], ["Croûte", "une couche dure qui se forme sur un sol nu après la pluie et empêche l'eau de s'infiltrer."]],
          slides: [
            { title: "Trois principes (FAO)", bullets: ["1. Perturbation minimale du sol : pas de labour", "2. Couverture permanente du sol : au moins 30 pour cent", "3. Diversification des cultures : au moins trois cultures"] },
            { title: "Ne remuer que là où l'on sème", bullets: ["Petits trous, cuvettes ou lignes de sous-solage", "Ne pas toucher au reste du sol"] },
            { title: "Couvrir et faire tourner", bullets: ["Résidus ou plantes de couverture en surface, toute l'année", "Ex. : maïs, puis niébé, puis sorgho"] },
            { title: "Les trois ensemble", bullets: ["Un seul aide un peu", "Ensemble : plus de pluie s'infiltre et reste", "Le grand gain en zone sèche, c'est l'eau"] }
          ],
          sources: [FAO_CA],
          tryIt: "Parcourez un de vos champs. Pour chaque principe, écrivez oui, en partie ou non : est-il labouré ? Quelle part du sol est couverte (estimez en pour cent) ? Combien de cultures différentes y ont poussé ces trois dernières saisons ? Entourez le principe le plus faible.",
          youCanNow: "nommer les trois principes de l'agriculture de conservation et vérifier un champ pour chacun.",
          quickCheck: [
            { objective: "O1", q: "Lequel est un des trois principes de l'agriculture de conservation de la FAO ?", options: ["Un labour profond à chaque saison", "Brûler les résidus pour nettoyer le champ", "Une couverture permanente du sol d'au moins 30 pour cent", "Cultiver la même plante chaque année"], answer: 2, why: "La FAO cite la perturbation minimale, la couverture permanente du sol (au moins 30 pour cent) et la diversification des cultures." },
            { objective: "O1", q: "Un agriculteur a arrêté de labourer, mais il laisse le sol nu et cultive du maïs chaque année. Que manque-t-il ?", options: ["La couverture du sol et la diversification des cultures", "Rien ; c'est de l'AC complète", "Plus de labour", "Plus de brûlage"], answer: 0, why: "Sans couverture ni rotation, l'absence de labour seule apporte peu de bénéfices." }
          ]
        },
        {
          title: "Cuvettes de semis et zaï",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tracer et creuser des cuvettes de semis ou des trous de zaï, avec du fumier dans chacun, avant les pluies.",
          text: [
            "Les cuvettes de semis et les trous de zaï sont de petits trous creusés à la main là où l'on sème la culture. Seule la cuvette est remuée ; le sol entre les cuvettes reste couvert. Chaque cuvette recueille la pluie et garde le fumier ou le compost juste là où sont les racines.",
            "Le zaï vient des agriculteurs du Burkina Faso et du Niger, qui l'ont utilisé pour remettre en culture de mil et de sorgho des terres dures et encroûtées. WOCAT, un réseau international qui documente les pratiques de gestion des terres, décrit des trous d'environ 30 à 40 cm de large et 10 à 15 cm de profondeur, en lignes décalées perpendiculaires à la pente, environ 10 000 par hectare, avec du fumier ou du compost dans chacun. Les cuvettes de semis utilisées en Afrique australe et de l'Est sont semblables : de petits trous réguliers en lignes, creusés au même écartement chaque année pour revenir aux mêmes endroits.",
            "Creusez-les en saison sèche après la récolte, quand il y a moins d'autres travaux, pour pouvoir semer dès les premières bonnes pluies au lieu d'attendre le labour. Mettez la terre sortie du trou du côté aval de la pente pour retenir plus d'eau. Ajoutez une ou deux poignées de fumier ou de compost dans chaque cuvette et recouvrez légèrement. Demandez à votre agent de vulgarisation l'écartement utilisé pour votre culture dans votre zone.",
            "C'est un travail dur, surtout la première année. Creusez une partie du champ chaque semaine, partagez le travail en groupe, et réutilisez les mêmes cuvettes les saisons suivantes, ce qui va beaucoup plus vite."
          ],
          steps: ["Choisissez le champ et tracez des lignes perpendiculaires à la pente avec une ficelle ou des piquets.", "Marquez l'emplacement des cuvettes à l'écartement conseillé par la vulgarisation pour votre culture.", "Creusez en saison sèche ; mettez la terre du côté aval.", "Ajoutez du fumier ou du compost dans chaque cuvette et recouvrez légèrement.", "Laissez le sol couvert entre les cuvettes.", "Semez dans les cuvettes dès les premières bonnes pluies."],
          words: [["Cuvette de semis", "un petit trou creusé à la main où vont la semence et le fumier, en laissant le reste du sol intact."], ["Zaï", "un trou de plantation rempli de fumier ou de compost, d'abord utilisé par les agriculteurs du Burkina Faso et du Niger pour restaurer les terres encroûtées."], ["Perpendiculaire à la pente", "le long des courbes de niveau, pour que les lignes retiennent l'eau au lieu de la conduire vers le bas."]],
          slides: [
            { title: "Petits trous, grand gain", bullets: ["Seule la cuvette est remuée", "Elle recueille la pluie près des racines", "Elle garde le fumier près de la culture"] },
            { title: "Zaï (Burkina Faso, Niger)", bullets: ["Environ 30-40 cm de large, 10-15 cm de profondeur (WOCAT)", "Lignes décalées perpendiculaires à la pente", "Fumier ou compost dans chaque trou"] },
            { title: "Le bon moment", bullets: ["Creuser en saison sèche après la récolte", "Semer dès les premières bonnes pluies", "Sans attendre le labour"] },
            { title: "Alléger le travail", bullets: ["Une partie du champ chaque semaine", "Partager le travail en groupe", "Réutiliser les mêmes cuvettes la saison suivante"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "Sur une petite partie d'un champ (par exemple 10 m sur 10 m), tracez des lignes perpendiculaires à la pente et creusez cinq cuvettes ou trous de zaï. Chronométrez le temps pour chacun, ajoutez le fumier, et calculez combien de jours prendrait le champ entier.",
          youCanNow: "tracer et creuser des cuvettes de semis ou des trous de zaï avec du fumier, perpendiculaires à la pente, avant les pluies.",
          quickCheck: [
            { objective: "O2", q: "Quand faut-il creuser les cuvettes de semis ou les trous de zaï ?", options: ["Après la levée de la culture", "Seulement quand il pleut fort", "À la récolte, par-dessus la culture", "En saison sèche, avant les pluies"], answer: 3, why: "Creuser tôt permet de semer dès les premières bonnes pluies et étale le travail." },
            { objective: "O2", q: "Où mettre la terre sortie d'un trou de zaï ?", options: ["Jetée loin", "Du côté aval du trou, pour retenir plus d'eau", "Remise tout de suite dans le trou", "Sur le chemin"], answer: 1, why: "Un petit bourrelet en aval aide chaque trou à capter et à garder l'eau de ruissellement." }
          ]
        },
        {
          title: "Sous-solage et semis direct",
          objectives: ["O3"],
          minutes: 5,
          goal: "Choisir entre cuvettes, sous-solage et semis direct pour un de vos champs.",
          text: [
            "Les cuvettes conviennent aux agriculteurs qui travaillent à la houe sur de petites parcelles. Si vous avez des bœufs ou pouvez louer un tracteur, une dent sous-soleuse ou un semoir de semis direct peut couvrir plus de terre avec moins de main-d'œuvre.",
            "Une sous-soleuse est une dent étroite, souvent fixée sur l'âge d'une charrue à bœufs à la place du versoir, qui ouvre une fente étroite (une ligne de sous-solage) pour la semence et l'engrais, en laissant le sol couvert entre les lignes. Le sous-solage en saison sèche peut aussi casser une couche dure sous la surface (la semelle de labour) pour que les racines et l'eau descendent plus profond. Le semis direct place la semence à travers les résidus avec une canne planteuse (un outil manuel) ou un semoir tiré par des animaux ou un tracteur, sans ouvrir de lignes du tout.",
            "Que choisir ? Pensez à votre main-d'œuvre (les cuvettes en demandent le plus), à votre traction (le sous-solage demande des bœufs ou un tracteur), à votre sol (les sols durs et encroûtés profitent des cuvettes ou du sous-solage) et à la taille du champ. Des essais dans toute la Zambie, de 2006 à 2015, ont comparé cuvettes, sous-solage et semis direct avec le labour à la charrue à versoir dans de vraies exploitations. Demandez à votre agent de vulgarisation ou à un projet d'AC où vous pouvez voir ces outils au travail, et s'ils peuvent être loués."
          ],
          steps: ["Notez la taille du champ, votre main-d'œuvre et votre accès à des bœufs ou à un tracteur.", "Vérifiez le sol : y a-t-il une couche dure ou une croûte ?", "Petite parcelle et travail à la main : cuvettes.", "Bœufs ou tracteur et sol dur : sous-solage.", "Bons résidus et un semoir disponible : semis direct.", "Demandez à la vulgarisation où voir et louer les outils."],
          words: [["Sous-soleuse", "une dent étroite tirée par des bœufs ou un tracteur qui ouvre une fente pour la semence sans retourner le sol."], ["Semelle de labour", "une couche dure juste sous la profondeur de labour qui bloque les racines et l'eau."], ["Canne planteuse", "un outil manuel qu'on enfonce dans le sol pour placer la semence (et parfois l'engrais) à travers les résidus."], ["Semis direct", "semer directement dans un sol non travaillé et couvert de résidus."]],
          slides: [
            { title: "Trois façons de semer sans labour", bullets: ["Cuvettes : houe, petites parcelles", "Sous-solage : bœufs ou tracteur ouvrent des lignes", "Semis direct : canne planteuse ou semoir"] },
            { title: "Sous-solage", bullets: ["Dent étroite sur l'âge de la charrue", "Peut casser une semelle de labour dure", "Le sol entre les lignes reste couvert"] },
            { title: "Comment choisir", bullets: ["Main-d'œuvre : les cuvettes en demandent le plus", "Traction : bœufs ou tracteur ?", "Dureté du sol et taille du champ"] },
            { title: "Voyez-le d'abord", bullets: ["Essais en Zambie : cuvettes, sous-solage, semis direct", "Demandez à la vulgarisation où voir les outils", "Peut-on les louer ?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Pour le champ choisi, écrivez sa taille, votre main-d'œuvre, votre accès à des bœufs ou à un tracteur, et la dureté du sol. Choisissez cuvettes, sous-solage ou semis direct et écrivez deux raisons de votre choix.",
          youCanNow: "choisir entre cuvettes, sous-solage et semis direct pour un champ, avec des raisons.",
          quickCheck: [
            { objective: "O3", q: "Un agriculteur a 3 hectares, une paire de bœufs et un sol dur. Quelle méthode convient le mieux ?", options: ["Le sous-solage avec une sous-soleuse tirée par les bœufs", "Des cuvettes creusées à la main sur les 3 hectares en une semaine", "Un labour profond deux fois", "Ne rien semer"], answer: 0, why: "Les bœufs et un sol dur conviennent au sous-solage, qui couvre plus de terre que les cuvettes à la main." },
            { objective: "O3", q: "Qu'est-ce qu'une canne planteuse ?", options: ["Une charrue de tracteur", "Un outil manuel qui place la semence à travers les résidus", "Une pompe à eau", "Un type d'engrais"], answer: 1, why: "La canne planteuse permet de semer directement dans un sol couvert et non travaillé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les principes et la préparation de la terre sans labour",
        questions: [
          { objective: "O1", q: "Selon la FAO, combien de cultures différentes une rotation ou une association en AC doit-elle comprendre ?", options: ["Une", "Deux au plus", "Au moins trois", "Aucune"], answer: 2, why: "Le principe de diversification de la FAO parle d'au moins trois cultures différentes." },
          { objective: "O1", q: "Pourquoi un sol couvert et non remué est-il particulièrement utile dans les zones sèches ?", options: ["Il rend le sol plus froid en hiver", "Plus de pluie s'infiltre et moins est perdue au soleil", "Il arrête toutes les mauvaises herbes pour toujours", "Il n'a pas besoin de semence"], answer: 1, why: "La couverture et l'absence de labour améliorent l'infiltration et réduisent l'évaporation." },
          { objective: "O2", q: "Dans quels pays le zaï s'est-il d'abord répandu chez les agriculteurs ?", options: ["Burkina Faso et Niger", "Égypte et Libye", "Afrique du Sud et Namibie", "Seulement Kenya et Ouganda"], answer: 0, why: "Le zaï vient d'agriculteurs du Sahel, notamment du Burkina Faso et du Niger." },
          { objective: "O2", q: "Que met-on dans chaque trou de zaï ou chaque cuvette avant de semer ?", options: ["Rien", "Du plastique", "Seulement la cendre des résidus brûlés", "Du fumier ou du compost"], answer: 3, why: "Le fumier ou le compost dans le trou nourrit la culture juste au niveau des racines." },
          { objective: "O3", q: "Que peut faire le sous-solage en saison sèche en plus d'ouvrir des lignes ?", options: ["Arroser la culture", "Casser une semelle de labour dure pour que les racines et l'eau descendent plus profond", "Tuer tous les ravageurs", "Remplacer l'engrais"], answer: 1, why: "Une sous-soleuse peut casser la couche dure que le labour laisse souvent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La saison et la transition",
      lessons: [
        {
          title: "Gérer le paillis et les résidus",
          objectives: ["O4"],
          minutes: 5,
          goal: "Prévoir comment garder au moins 30 pour cent d'un champ couvert toute l'année.",
          text: [
            "La couverture est le principe que les agriculteurs trouvent le plus difficile, car les résidus ont d'autres usages : les animaux pâturent les champs après la récolte, et les tiges servent de combustible, de clôture et de matériau de construction. Dans les zones sèches, les termites peuvent aussi manger les résidus en surface.",
            "Prévoyez-le. Décidez quelle part des résidus reste au champ et quelle part va aux animaux. Coupez et stockez des tiges comme aliment de saison sèche pour ne pas laisser les animaux entrer dans le champ en AC. Parlez du champ avec vos voisins et les éleveurs : certaines communautés conviennent que les champs en AC marqués ne sont pas pâturés, ou l'agriculteur clôture un petit champ avec une haie vive ou des branches épineuses. Trouvez de la couverture ailleurs : une association avec du niébé ou du lablab, de l'herbe des bordures du champ, ou des branches de taille des arbres.",
            "Pour vérifier la couverture, regardez droit vers le bas un mètre carré à plusieurs endroits et estimez la part du sol que vous ne voyez pas. Il faut au moins 30 pour cent de sol couvert (FAO) ; plus, c'est mieux. Étalez les résidus de façon régulière, pas en tas, et laissez-les en surface plutôt que de les enfouir.",
            "Ne brûlez jamais les résidus sur un champ en AC. Le brûlage enlève la couverture et la matière organique que vous êtes en train de construire."
          ],
          steps: ["Décidez la part des résidus pour la couverture et pour l'alimentation des animaux.", "Coupez et stockez l'aliment pour que les animaux restent hors du champ en AC.", "Mettez-vous d'accord avec les voisins et les éleveurs, ou clôturez le champ.", "Ajoutez de la couverture avec des associations, l'herbe des bordures ou des branches de taille.", "Vérifiez la couverture : regardez un mètre carré à plusieurs endroits.", "Étalez régulièrement ; ne brûlez jamais."],
          words: [["Paillis", "une matière étalée à la surface du sol pour le couvrir et le protéger."], ["Tiges (de maïs ou de sorgho)", "les tiges et les feuilles sèches du maïs ou du sorgho après la récolte."], ["Haie vive", "une rangée d'arbustes ou d'arbres plantés serrés pour empêcher les animaux d'entrer."]],
          slides: [
            { title: "La couverture a d'autres usages", bullets: ["Pâturage après la récolte", "Combustible, clôtures, construction", "Termites en zone sèche"] },
            { title: "Prévoir les résidus", bullets: ["Part pour la couverture, part pour l'alimentation", "Stocker l'aliment ; garder les animaux dehors", "S'entendre avec les éleveurs ou clôturer"] },
            { title: "Trouver plus de couverture", bullets: ["Association avec niébé ou lablab", "Herbe des bordures du champ", "Branches de taille des arbres"] },
            { title: "Vérifier : au moins 30 pour cent", bullets: ["Regarder un mètre carré vers le bas", "Étaler régulièrement, laisser en surface", "Jamais de brûlage sur un champ en AC"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Estimez aujourd'hui la couverture du champ choisi à trois endroits. Écrivez d'où viendra la couverture en plus, quelle quantité de tiges va aux animaux, et comment vous garderez les animaux hors du champ (accord, clôture ou aliment stocké).",
          youCanNow: "prévoir comment garder au moins 30 pour cent d'un champ en AC couvert, tout en nourrissant vos animaux.",
          quickCheck: [
            { objective: "O4", q: "Le bétail des voisins mange tous les résidus de votre champ en AC à chaque saison sèche. Qu'est-ce qui peut aider ?", options: ["Brûler d'abord les résidus", "Labourer le champ", "S'entendre avec les éleveurs, clôturer le champ ou stocker de l'aliment pour que les animaux restent dehors", "Renoncer à la couverture"], answer: 2, why: "Les accords communautaires, les clôtures et l'aliment stocké protègent la couverture." },
            { objective: "O4", q: "Comment vérifier qu'un champ a assez de couverture ?", options: ["Compter le bétail", "Regarder un mètre carré vers le bas à plusieurs endroits et estimer la part du sol cachée", "Peser la récolte", "Mesurer la pluie"], answer: 1, why: "Une estimation rapide à l'œil à plusieurs endroits montre si la couverture atteint 30 pour cent." }
          ]
        },
        {
          title: "Désherber sans labourer",
          objectives: ["O4"],
          minutes: 5,
          goal: "Prévoir le désherbage d'un champ en AC sans labour.",
          text: [
            "Le labour enfouit les mauvaises herbes ; sans lui, elles peuvent être nombreuses les premières saisons. C'est la principale raison pour laquelle les agriculteurs abandonnent l'AC, alors prévoyez le désherbage dès le départ.",
            "Désherbez tôt et souvent : les premières semaines après la levée de la culture comptent le plus. Utilisez la houe légèrement, en grattant juste sous la surface au lieu de retourner le sol, ou arrachez à la main. Ne laissez jamais les mauvaises herbes monter en graines ; chaque mauvaise herbe qui grène en ajoute des milliers pour l'année suivante. Le paillis et une plante de couverture font de l'ombre au sol et empêchent beaucoup de mauvaises herbes de pousser, et une association dense leur laisse moins de place. Après plusieurs saisons de désherbage avant la montée en graines, le stock de graines de mauvaises herbes dans le sol diminue et le désherbage devient plus facile.",
            "Certains agriculteurs en AC utilisent aussi un herbicide. Si vous le faites, n'utilisez que des produits homologués dans votre pays (au Kenya, vérifiez la liste du Pest Control Products Board, l'office des produits de lutte contre les ravageurs ; au Nigeria, celle de NAFDAC, l'agence nationale de contrôle des aliments et des médicaments ; au Ghana, celle de l'Environmental Protection Agency, l'agence de protection de l'environnement), achetez-les chez des vendeurs agréés et suivez l'étiquette à la lettre pour la culture, le moment et la quantité. Portez des vêtements de protection, des gants et des bottes, éloignez les enfants et les animaux, et ne traitez jamais près de l'eau. Demandez conseil à votre agent de vulgarisation avant de commencer."
          ],
          steps: ["Désherbez tôt : les premières semaines après la levée.", "Houe légère ou arrachage à la main ; ne retournez pas le sol.", "Ne laissez jamais les mauvaises herbes grener.", "Utilisez paillis, plantes de couverture et associations denses pour ombrager les mauvaises herbes.", "Si vous utilisez un herbicide : produit homologué, étiquette, équipement de protection.", "Prévoyez la main-d'œuvre de désherbage avant le début de la saison."],
          words: [["Stock de graines de mauvaises herbes", "les graines de mauvaises herbes gardées dans le sol, qui attendent de pousser."], ["Herbicide", "un produit chimique qui tue les mauvaises herbes."], ["Produit homologué", "un pesticide ou un herbicide autorisé par l'autorité nationale."]],
          slides: [
            { title: "Les mauvaises herbes, la grande épreuve", bullets: ["Plus nombreuses les premières saisons", "Principale raison d'abandon", "Prévoir le désherbage dès le départ"] },
            { title: "Désherber sans labour", bullets: ["Tôt et souvent après la levée", "Houe légère ou arrachage à la main", "Jamais de montée en graines"] },
            { title: "Laisser la couverture travailler", bullets: ["Paillis et couvertures ombragent les mauvaises herbes", "Les associations denses laissent moins de place", "Le stock de graines baisse au fil des saisons"] },
            { title: "Un herbicide ? Seulement en sécurité", bullets: ["Homologué : PCPB (KE), NAFDAC (NG), EPA (GH)", "Suivre l'étiquette à la lettre", "Protection ; loin de l'eau et des enfants"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Écrivez un plan de désherbage pour votre champ : quand vous désherberez (semaines après le semis), avec quel outil, qui le fera et combien de jours cela prendra, et comment la couverture ou une association aidera. Si vous pensez à un herbicide, écrivez où vous vérifierez qu'il est homologué.",
          youCanNow: "prévoir le désherbage d'un champ en AC sans labour, en n'utilisant d'herbicide, le cas échéant, que de façon sûre et légale.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi ne faut-il jamais laisser les mauvaises herbes grener dans un champ en AC ?", options: ["Les graines donnent mauvais goût à la récolte", "Les graines de mauvaises herbes sont un bon engrais", "C'est interdit par la loi", "Chaque mauvaise herbe qui grène ajoute des milliers de graines pour l'année suivante"], answer: 3, why: "Empêcher les mauvaises herbes de grener fait baisser le stock de graines au fil des saisons." },
            { objective: "O4", q: "Une agricultrice au Kenya veut utiliser un herbicide sur son maïs en AC. Que doit-elle vérifier d'abord ?", options: ["Qu'il est homologué par le Pest Control Products Board, et ce que dit l'étiquette sur son usage", "Que c'est le flacon le moins cher", "Qu'un voisin l'a aimé", "Qu'il n'a pas d'étiquette"], answer: 0, why: "Seuls les produits homologués, utilisés comme le dit l'étiquette et avec un équipement de protection, sont sûrs et légaux." }
          ]
        },
        {
          title: "Outils, calendrier, années de sécheresse et transition",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Écrire un calendrier de saison des travaux, outils et coûts de l'AC, et installer une parcelle de comparaison.",
          text: [
            "Une saison d'AC commence en saison sèche, pas avec les pluies. Un calendrier type : après la récolte, gardez les résidus et convenez du pâturage ; en saison sèche, creusez ou réutilisez les cuvettes, ou faites le sous-solage, et placez le fumier ; aux premières bonnes pluies, semez tout de suite (sans attendre le labour) ; les premières semaines, désherbez tôt et souvent ; pendant la saison, ajoutez l'association ou la plante de couverture ; à la récolte, laissez les résidus au champ et prévoyez la rotation de la saison suivante. À côté de chaque travail, écrivez l'outil (houe, sous-soleuse, canne planteuse, pulvérisateur et équipement de protection) et le coût, que vous le possédiez, le louiez ou l'empruntiez.",
            "Les années de sécheresse, le principal avantage de l'AC apparaît. Les cuvettes et le paillis captent et gardent plus d'eau, et semer à temps profite des premières pluies. Une synthèse de nombreux essais dans les zones semi-arides du Zimbabwe a montré que les cuvettes de semis donnaient plus de maïs que le labour dans plus de la moitié des essais. Mais l'AC ne bat pas le labour chaque année, et elle ne peut pas remplacer l'absence totale de pluie.",
            "Attendez-vous à une transition. Les rendements peuvent rester les mêmes ou même baisser les une ou deux premières saisons, quand les mauvaises herbes sont nombreuses et que le sol s'adapte ; les bénéfices se construisent en général sur plusieurs saisons, à mesure que la couverture et la matière organique augmentent. Commencez sur un champ, gardez une parcelle labourée à côté, et notez pour les deux le rendement, les jours de travail et les coûts à chaque saison. Jugez l'AC après trois saisons, pas une."
          ],
          steps: ["Listez chaque travail, de récolte à récolte.", "Placez chacun dans un mois.", "Ajoutez l'outil et si vous le possédez, le louez ou l'empruntez.", "Ajoutez le coût et les jours de travail.", "Marquez une parcelle labourée de comparaison de même taille.", "Notez rendement, travail et coût pour les deux à chaque saison ; jugez après trois saisons."],
          words: [["Période de transition", "les premières saisons après le passage à l'AC, quand les mauvaises herbes sont nombreuses et que les bénéfices se construisent encore."], ["Parcelle de comparaison", "une parcelle cultivée comme avant à côté de la parcelle en AC, pour comparer les résultats de façon juste."], ["Jour de travail", "une personne qui travaille une journée ; sert à mesurer le travail que demande une tâche."]],
          slides: [
            { title: "La saison commence au sec", bullets: ["Après la récolte : garder les résidus, convenir du pâturage", "Saison sèche : cuvettes ou sous-solage, fumier", "Premières bonnes pluies : semer tout de suite"] },
            { title: "Calendrier avec outils et coûts", bullets: ["Houe, sous-soleuse, canne planteuse, équipement de protection", "Possédé, loué ou emprunté ?", "Coût et jours de travail pour chaque tâche"] },
            { title: "Les années de sécheresse", bullets: ["Cuvettes et paillis gardent plus d'eau", "Zimbabwe : cuvettes meilleures que le labour dans plus de la moitié des essais", "Pas chaque année ; pas de pluie = pas de récolte"] },
            { title: "Traverser la transition", bullets: ["Les rendements peuvent baisser en saisons 1 à 2", "Garder une parcelle labourée pour comparer", "Noter rendement, travail, coût ; juger après 3 saisons"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Tâche finale : écrivez votre plan d'une saison d'AC pour un champ, avec un croquis, la méthode de préparation de la terre et ses raisons, les plans de couverture et de désherbage, la culture et la rotation, un calendrier mois par mois des travaux, outils et coûts, et l'emplacement de votre parcelle labourée de comparaison.",
          youCanNow: "planifier une saison complète d'AC avec les outils, le calendrier et les coûts, et la comparer de façon juste avec le labour pendant les années de transition.",
          quickCheck: [
            { objective: "O5", q: "Quand commence le travail d'une saison d'AC ?", options: ["Quand la culture fleurit", "En saison sèche, après la dernière récolte", "À la première pluie, avec le labour", "À la récolte de la culture suivante"], answer: 1, why: "Cuvettes, sous-solage, fumier et plan des résidus se font en saison sèche pour semer dès les premières pluies." },
            { objective: "O6", q: "Votre parcelle en AC donne le même rendement que la parcelle labourée la première saison. Que faire ?", options: ["Abandonner l'AC", "Labourer la parcelle en AC", "Brûler les résidus", "Continuer à noter pendant au moins trois saisons avant de juger"], answer: 3, why: "Les bénéfices se construisent sur plusieurs saisons ; une seule saison, c'est trop tôt pour juger." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La saison et la transition",
        questions: [
          { objective: "O4", q: "Que ne faut-il jamais faire des résidus sur un champ en AC ?", options: ["Les étaler régulièrement", "Les laisser en surface", "Les brûler", "En ajouter depuis les bordures du champ"], answer: 2, why: "Le brûlage enlève la couverture et la matière organique dont l'AC dépend." },
          { objective: "O4", q: "Quelle méthode de désherbage convient à l'AC ?", options: ["Enfouir les mauvaises herbes par le labour", "Brûler tout le champ", "Désherber seulement à la récolte", "Une houe légère ou l'arrachage à la main, tôt et souvent"], answer: 3, why: "Un désherbage superficiel sans retourner le sol garde la perturbation au minimum." },
          { objective: "O5", q: "Quel élément a sa place dans un calendrier de saison d'AC ?", options: ["Creuser ou réutiliser les cuvettes en saison sèche, avec l'outil et le coût", "Labourer deux fois avant de semer", "Brûler les résidus après la récolte", "Semer un mois après le début des pluies"], answer: 0, why: "Un calendrier d'AC donne chaque travail avec son mois, son outil et son coût." },
          { objective: "O5", q: "Pourquoi l'AC permet-elle souvent de semer plus tôt ?", options: ["La semence pousse plus vite", "Il pleut plus sur les champs en AC", "La terre est préparée en saison sèche, donc on sème dès les premières bonnes pluies", "La semence est moins chère"], answer: 2, why: "Ne pas attendre le labour, c'est semer à temps." },
          { objective: "O6", q: "Quelles trois choses faut-il noter pour la parcelle en AC et pour la parcelle labourée ?", options: ["Couleur, odeur et goût", "Seulement la pluie", "Rendement, jours de travail et coûts", "Le nombre de visiteurs"], answer: 2, why: "Le rendement, le travail et les coûts montrent si l'AC est rentable sur votre exploitation." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Agriculture de conservation pour les saisons sèches",
    questions: [
      { objective: "O1", q: "Quelle liste donne les trois principes de l'agriculture de conservation de la FAO ?", options: ["Labour, brûlage, monoculture", "Perturbation minimale du sol, couverture permanente du sol, diversification des cultures", "Irrigation, engrais, pesticides", "Travail profond du sol, sol nu, une seule culture"], answer: 1, why: "Ce sont les trois principes que décrit la FAO." },
      { objective: "O1", q: "Selon la FAO, quelle part du sol doit au moins être couverte en AC ?", options: ["5 pour cent", "10 pour cent", "30 pour cent", "100 pour cent en permanence"], answer: 2, why: "La FAO parle d'une couverture organique permanente d'au moins 30 pour cent." },
      { objective: "O1", q: "Que veut dire perturbation minimale du sol ?", options: ["Ne remuer le sol que là où vont la semence et l'engrais", "Labourer une fois au lieu de deux", "Ne jamais semer", "Bêcher tout le champ à la main"], answer: 0, why: "Seuls le poquet, la cuvette ou la ligne de sous-solage sont remués." },
      { objective: "O1", q: "Quelle rotation montre une diversification des cultures ?", options: ["Maïs, maïs, maïs", "Jachère nue chaque année", "Sorgho seulement", "Maïs, puis niébé, puis sorgho"], answer: 3, why: "Trois cultures différentes dans le temps, c'est la diversification." },
      { objective: "O2", q: "Qu'est-ce que le zaï ?", options: ["Des étangs à poissons", "Des trous de plantation avec du fumier ou du compost qui captent la pluie", "Des greniers", "Des puits pour l'irrigation"], answer: 1, why: "Le zaï concentre l'eau et les éléments nutritifs au pied de la plante." },
      { objective: "O2", q: "Les lignes de cuvettes doivent aller :", options: ["Dans le sens de la pente", "En cercles", "Perpendiculairement à la pente, le long des courbes de niveau", "Dans n'importe quel sens"], answer: 2, why: "Les lignes perpendiculaires à la pente retiennent l'eau au lieu de la conduire vers le bas." },
      { objective: "O2", q: "Pourquoi réutiliser les mêmes cuvettes les saisons suivantes ?", options: ["Cela économise beaucoup de travail et améliore le sol aux mêmes endroits", "On ne peut pas creuser une cuvette deux fois", "La loi l'exige", "Les nouvelles cuvettes attirent les ravageurs"], answer: 0, why: "Réutiliser les cuvettes va beaucoup plus vite et concentre les améliorations." },
      { objective: "O3", q: "Quel agriculteur est le mieux placé pour des cuvettes creusées à la main ?", options: ["Un agriculteur avec 20 hectares et un tracteur", "Un agriculteur sans aucune main-d'œuvre", "Un agriculteur qui veut labourer", "Un agriculteur qui travaille à la houe sur une petite parcelle"], answer: 3, why: "Les cuvettes conviennent aux petites parcelles travaillées à la main." },
      { objective: "O3", q: "Qu'est-ce qu'une semelle de labour ?", options: ["Une marmite", "Un type de semence", "Une mare peu profonde", "Une couche dure sous la profondeur de labour qui bloque les racines et l'eau"], answer: 3, why: "Des labours répétés peuvent former une couche dure qu'une sous-soleuse peut casser." },
      { objective: "O3", q: "Que veut dire semis direct ?", options: ["Semer directement dans un sol non travaillé et couvert de résidus", "Jeter la semence à la main sur un sol labouré", "Repiquer des plants d'une pépinière", "Acheter la semence directement à une société"], answer: 0, why: "Le semis direct place la semence sans ouvrir le sol au-delà du point de semis." },
      { objective: "O4", q: "D'où peut venir une couverture en plus si les animaux mangent la plupart des résidus ?", options: ["Du brûlage", "Du labour", "D'une association avec du niébé ou du lablab, de l'herbe des bordures ou de branches de taille", "De bâches en plastique"], answer: 2, why: "Associations, herbe et branches de taille ajoutent de la couverture sans prendre tout l'aliment." },
      { objective: "O4", q: "Au Nigeria, quel organisme homologue les produits agrochimiques comme les herbicides ?", options: ["NAFDAC", "Le service météorologique", "La banque centrale", "La fédération de football"], answer: 0, why: "NAFDAC homologue les produits agrochimiques au Nigeria ; vérifiez sa liste." },
      { objective: "O4", q: "Quand est-il le plus important de maîtriser les mauvaises herbes dans une culture en AC ?", options: ["Seulement à la récolte", "Jamais", "Seulement après la floraison", "Les premières semaines après la levée de la culture"], answer: 3, why: "Les mauvaises herbes précoces concurrencent le plus la jeune culture." },
      { objective: "O4", q: "Si vous utilisez un herbicide, que devez-vous faire ?", options: ["Préparer vous-même un mélange extra-fort", "Utiliser un produit homologué, suivre l'étiquette à la lettre et porter un équipement de protection", "Traiter près du puits", "Laisser les enfants aider à traiter"], answer: 1, why: "Seuls les produits homologués, utilisés comme le dit l'étiquette et avec protection, sont sûrs et légaux." },
      { objective: "O5", q: "Quel outil place la semence à la main à travers les résidus ?", options: ["Une charrue à versoir", "Un arrosoir", "Une canne planteuse", "Une herse"], answer: 2, why: "La canne planteuse est un outil manuel de semis direct." },
      { objective: "O5", q: "Que doit contenir chaque ligne de votre calendrier d'AC ?", options: ["Le travail, le mois, l'outil et le coût", "Seulement le nom de la culture", "Seulement la pluie", "Le nom du voisin"], answer: 0, why: "Le travail, le mois, l'outil et le coût rendent le calendrier utilisable." },
      { objective: "O5", q: "Quand creuse-t-on ou réutilise-t-on les cuvettes et place-t-on le fumier ?", options: ["À la floraison", "En saison sèche, avant les pluies", "Pendant la récolte", "Après la fin des pluies"], answer: 1, why: "Préparer en saison sèche permet de semer dès les premières bonnes pluies." },
      { objective: "O6", q: "Les années de sécheresse, pourquoi l'AC fait-elle souvent mieux que le labour ?", options: ["Elle fait pleuvoir", "Elle n'a pas besoin de semence", "Elle arrête tous les ravageurs", "Les cuvettes et le paillis captent et gardent plus d'eau"], answer: 3, why: "Sous la couverture, plus d'eau s'infiltre et moins s'évapore." },
      { objective: "O6", q: "Que peut-il arriver aux rendements les une ou deux premières saisons d'AC ?", options: ["Ils doublent toujours", "Ils peuvent rester les mêmes ou baisser pendant que les mauvaises herbes sont nombreuses et que le sol s'adapte", "Ils tombent toujours à zéro", "On ne peut rien savoir"], answer: 1, why: "La transition peut être difficile ; les bénéfices se construisent sur plusieurs saisons." },
      { objective: "O6", q: "Pourquoi garder une parcelle labourée à côté de votre parcelle en AC ?", options: ["Pour comparer de façon juste le rendement, le travail et le coût", "Pour nourrir le bétail", "Parce que l'AC l'exige par la loi", "Pour faire pousser des mauvaises herbes"], answer: 0, why: "Une parcelle de comparaison montre ce que l'AC fait vraiment sur votre exploitation." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et réessayez.",
    criteria: [
      { name: "Trois principes", objective: "O1", notYet: "Le plan laboure encore, laisse le sol nu, ou ne prévoit qu'une seule culture.", meets: "Le plan montre une perturbation minimale, une couverture et une rotation ou une association d'au moins trois cultures dans le temps.", exceeds: "Explique comment les trois principes se soutiennent sur ce champ." },
      { name: "Préparation de la terre", objective: "O3", notYet: "Aucune méthode choisie, ou pas de raisons.", meets: "Cuvettes, zaï, sous-solage ou semis direct choisis avec au moins deux raisons (main-d'œuvre, traction, sol, taille).", exceeds: "Dit d'où viennent les outils et a vu ou essayé la méthode." },
      { name: "Cuvettes ou zaï tracés", objective: "O2", notYet: "Les cuvettes ne sont pas perpendiculaires à la pente ou il n'y a pas de plan pour le fumier.", meets: "Lignes perpendiculaires à la pente, dates de creusement en saison sèche et fumier ou compost dans chaque cuvette (si cuvettes ou zaï sont utilisés).", exceeds: "A creusé une zone d'essai, chronométré le travail et calculé la main-d'œuvre pour tout le champ." },
      { name: "Couverture et mauvaises herbes", objective: "O4", notYet: "Pas de plan pour les résidus, le pâturage ou les mauvaises herbes.", meets: "Garde au moins 30 pour cent de couverture, règle la question du pâturage et a un calendrier de désherbage ; tout herbicide est homologué et utilisé comme le dit l'étiquette, avec un équipement de protection.", exceeds: "Ajoute une plante de couverture ou une association et un plan pour empêcher les mauvaises herbes de grener." },
      { name: "Calendrier de saison", objective: "O5", notYet: "Des travaux manquent ou n'ont pas de date.", meets: "Tous les travaux, de la préparation en saison sèche jusqu'à la récolte, avec mois, outil et coût.", exceeds: "Inclut les jours de travail et qui fait chaque tâche." },
      { name: "Comparaison pendant la transition", objective: "O6", notYet: "Pas de parcelle de comparaison ni de registres.", meets: "Une parcelle labourée de comparaison, avec rendement, jours de travail et coûts à noter à chaque saison.", exceeds: "S'engage à juger après trois saisons et note ce qui le ferait changer de plan." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui mènent une saison d'AC sur au moins un champ avec une parcelle de comparaison (enquête de suivi)",
      "Rendement, jours de travail et coût sur les parcelles en AC et labourées sur trois saisons, surtout les années sèches (registres de l'apprenant)",
      "Apprenants qui pratiquent encore l'AC après trois saisons, et la surface qu'ils cultivent en AC",
      "Voisins ou membres du groupement qui adoptent l'AC (rapports de vulgarisation)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Du papier et un stylo pour le croquis du champ et le calendrier",
      "Une houe, une ficelle ou des piquets et un mètre ruban ou un bâton mesuré pour tracer les cuvettes",
      "Du fumier ou du compost pour les cuvettes d'essai",
      "Les prix locaux ou les tarifs de location des sous-soleuses, des cannes planteuses et de la main-d'œuvre (ou des chiffres d'exemple)",
      "Environ 90 minutes au total, plus du temps au champ pour l'essai de cuvettes"
    ],
    facilitatorNotes: [
      "Faites la leçon 2 au champ : tracez et creusez ensemble quelques cuvettes ou trous de zaï, et chronométrez le travail.",
      "Invitez un agriculteur qui pratique déjà l'AC, ou organisez la visite d'une parcelle de démonstration, pour que les apprenants voient le sous-solage ou le semis direct au travail.",
      "Parlez ouvertement des coutumes de pâturage ; si possible, associez les éleveurs ou les responsables de la communauté à la discussion.",
      "Ne recommandez pas d'herbicide précis ; renvoyez les apprenants à la liste nationale d'homologation et à l'agent de vulgarisation, et insistez sur l'étiquette et l'équipement de protection.",
      "Donnez des attentes honnêtes sur la transition : les rendements peuvent ne pas augmenter les premières saisons.",
      "Notez le plan final avec la grille et faites un suivi après chaque saison pour comparer les parcelles."
    ]
  }
};
