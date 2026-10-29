"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-mechanization.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety and money rules kept from the English: machine safety in full, no investment advice, money figures are examples only.

const FAO_HIRE = { name: "FAO : Les services de location comme activité commerciale (mécanisation agricole durable)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO : Les services de location comme entreprise (manuel de formation)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO et Commission de l'Union africaine : Mécanisation agricole durable : un cadre pour l'Afrique (2018)", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO : Mécanisation agricole durable (des outils à main aux équipements motorisés)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor : réservation de tracteurs par application, site web ou agent de réservation ; suivi de flotte ; achat en paiement à l'usage", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "OIT : Construction et utilisation sûres des tracteurs (recueil de directives pratiques)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (office des produits phytosanitaires, Kenya) : produits homologués", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agence nationale pour l'administration et le contrôle des aliments et des médicaments (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-fr",
  lang: "fr",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Machines agricoles et services de mécanisation",
  skills: "Choisir les tâches à mécaniser, Comparer le coût de la location et de l'achat, Réserver et contrôler un service de location de tracteur, Choisir de petites machines, Travailler en sécurité et tenir un carnet d'entretien, Planifier une entreprise de services de mécanisation",
  outcome: "décider, chiffres à l'appui, s'il vaut mieux louer ou acheter une machine pour une tâche de la ferme : repérer les tâches qu'il est rentable de mécaniser, comparer le coût de la location et de l'achat, réserver et contrôler un service de location, choisir la bonne petite machine, l'utiliser en sécurité avec un carnet d'entretien, et prévoir un service de location pour vos voisins si l'achat n'est rentable qu'ainsi.",
  about: [
    "Ce cours s'adresse aux petits et moyens producteurs, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation du Nigeria, du Ghana, du Kenya, du Sénégal, du Burkina Faso et de toute l'Afrique. La plupart des travaux agricoles en Afrique se font encore à la main. Les machines permettent de semer à temps, réduisent le travail pénible et les pertes, mais une machine qui reste à l'arrêt presque toute l'année peut couler une exploitation sous les dettes.",
    "Le chapitre 1 porte sur la décision : quelles tâches il est rentable de mécaniser, louer ou acheter avec une comparaison chiffrée, et réserver des services de location de tracteurs, y compris par application comme Hello Tractor. Le chapitre 2 porte sur l'utilisation des machines : petites machines comme les motoculteurs, les égreneuses, les batteuses et les pulvérisateurs motorisés ; la sécurité et les carnets d'entretien ; et la création d'une entreprise de services de mécanisation pour vos voisins. La mise en commun des machines en groupe est traitée dans \"Mobilisation communautaire : mettre en commun les machines et négocier les intrants\".",
    "Les montants d'argent de ce cours sont seulement des exemples ; utilisez de vrais devis de concessionnaires, de services de location et de prêteurs. Ce cours explique comment fonctionnent les prêts et les contrats de location-vente, mais ne donne aucun conseil d'investissement : lisez entièrement chaque contrat et demandez l'avis d'un conseiller de confiance. Chaque leçon dure environ cinq minutes et se termine par une tâche pour votre propre ferme. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez une fiche de décision « louer ou acheter » pour une machine et une tâche de votre ferme (ou pour un exemple comme un tracteur pour labourer 10 hectares de maïs à Kaduna, ou une égreneuse à maïs pour un groupement près de Tamale) : la tâche et pourquoi il est rentable de la mécaniser ; le coût annuel de l'achat (coûts fixes et coûts par hectare) ; le coût de la location ; la surface d'équilibre ; votre décision ; et les règles de sécurité et le carnet d'entretien que vous utiliserez. Si vous décidez d'acheter, ajoutez un plan d'une page pour louer la machine à vos voisins : services, clients et hectares, prix, coûts, seuil de rentabilité, réservations et paiements, et principaux risques.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits et moyens producteurs, ouvriers agricoles, responsables de groupements, jeunes agripreneurs et agents de vulgarisation du Nigeria, du Ghana, du Kenya, d'Afrique de l'Ouest francophone et d'ailleurs en Afrique, qui louent ou pensent acheter un tracteur ou une petite machine.",
    startingPoint: "Ils font la plupart des travaux à la main ou en traction animale (bœufs), et louent parfois un tracteur par un intermédiaire. Peu ont comparé le coût complet de l'achat avec la location, contrôlé le travail payé ou tenu un carnet d'entretien. Certains jeunes voient la location de machines comme une activité, mais ne l'ont pas chiffrée.",
    gap: "Les producteurs achètent des machines sous-utilisées et chères à faire tourner, ou attendent des tracteurs en retard et sèment en retard. Ils doivent choisir les tâches rentables à mécaniser, comparer location et achat avec de vrais chiffres, réserver et contrôler des services de location, utiliser les machines en sécurité et, s'ils achètent, gagner de l'argent avec le travail chez les voisins.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un téléphone simple ou un smartphone et une calculatrice ; les applications de réservation demandent un smartphone ou un agent de réservation",
      "Temps : leçons de 4 à 6 minutes, à placer entre les travaux de la ferme",
      "Les montants sont des exemples ; les prix, les taux d'intérêt et les tarifs de location varient selon le lieu et changent",
      "Financement : expliquer les prêts et la location-vente et leurs risques ; aucun conseil d'investissement",
      "Sécurité : les machines peuvent tuer ; pas de travail des enfants près des machines ; pulvérisateurs seulement avec des pesticides homologués, selon l'étiquette"
    ],
    prerequisites: "Aucun. \"Agrobusiness et gestion de l'exploitation agricole\" aide pour le calcul des coûts."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir des tâches de votre ferme", action: "repérer les tâches qu'il est rentable de mécaniser", standard: "en donnant une raison pour chacune : le calendrier, la main-d'œuvre, les pertes ou le volume" },
    { id: "O2", condition: "À partir du prix, des coûts de fonctionnement et du tarif de location d'une machine", action: "calculer le coût annuel de l'achat, le coût de la location et la surface d'équilibre", standard: "avec des calculs justes et une décision claire de louer ou d'acheter" },
    { id: "O3", condition: "Quand vous louez un tracteur ou un service de machine", action: "convenir à l'avance du prix, de la surface, de la date et de la qualité, et contrôler le travail avant de payer", standard: "en mesurant le champ et en obtenant un reçu" },
    { id: "O4", condition: "À partir d'une tâche de la ferme et de votre marché local", action: "choisir une petite machine adaptée à la tâche, au volume de travail et aux pièces et mécaniciens proches", standard: "en listant au moins quatre vérifications avant l'achat" },
    { id: "O5", condition: "Avant et après chaque utilisation d'une machine", action: "faire les contrôles de sécurité et noter le travail et l'entretien dans un carnet", standard: "sans sauter aucune règle de sécurité et avec chaque ligne datée" },
    { id: "O6", condition: "À partir d'une machine et des fermes autour de vous", action: "écrire un plan d'une page pour un service de location de machines", standard: "avec les services, les clients, le prix, les coûts, le seuil de rentabilité et les risques" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Louer ou acheter ?",
      lessons: [
        {
          title: "Les tâches qu'il est rentable de mécaniser",
          objectives: ["O1"],
          minutes: 5,
          goal: "Repérer les tâches de votre ferme qu'il est rentable de mécaniser.",
          text: [
            "La mécanisation, c'est utiliser des outils et des machines pour les travaux de la ferme, des outils à main améliorés et de la traction animale jusqu'aux tracteurs et aux machines motorisées. La FAO insiste sur le choix de ce qui convient à la ferme, aux personnes et au lieu. Une machine est rentable quand elle rapporte ou fait économiser plus qu'elle ne coûte.",
            "Les tâches souvent rentables : la préparation du sol, quand labourer ou sous-soler à temps après les premières pluies vous permet de semer à temps ; le battage et l'égrenage, où une machine fait en quelques heures ce qui prend des jours à beaucoup de personnes, avec moins de grains perdus au sol ; le transport de la récolte et des intrants ; le pompage de l'eau ; et la transformation, comme râper le manioc ou moudre. Les tâches moins rentables : les petites parcelles, les travaux bon marché et rapides à la main, ou les tâches faites une seule fois par an pendant quelques heures.",
            "Posez quatre questions pour chaque tâche. Le calendrier : la faire en retard baisse-t-il le rendement ? La main-d'œuvre : manque-t-elle ou est-elle chère à ce moment-là ? Les pertes : la faire à la main fait-il perdre de la récolte ? Le volume : y a-t-il assez de travail pour occuper une machine ? Comparez ensuite le coût à la main et à la machine. Exemple (les chiffres sont seulement un exemple) : labourer 1 hectare à la main prend 25 journées de travail à 50 GHS = 1 250 GHS, alors que louer un tracteur coûte 600 GHS par hectare."
          ],
          steps: ["Listez chaque gros travail de votre ferme au cours de l'année.", "Pour chacun, posez les questions : calendrier, main-d'œuvre, pertes, volume.", "Calculez le coût à la main : journées de travail x salaire journalier.", "Trouvez le coût à la machine : tarif de location x hectares.", "Marquez les tâches où la machine coûte moins ou rapporte plus."],
          words: [["Mécanisation", "l'utilisation d'outils et de machines, des outils à main améliorés aux tracteurs, pour les travaux de la ferme."], ["Calendrier (respect du)", "faire une tâche au bon moment, comme semer peu après le début des pluies."], ["Journée de travail", "le travail qu'une personne fait en un jour."]],
          slides: [
            { title: "Quand une machine est rentable", bullets: ["Elle rapporte ou économise plus qu'elle ne coûte", "Des outils à main améliorés aux tracteurs", "Adaptée à la ferme, aux personnes et au lieu"] },
            { title: "Tâches souvent rentables", bullets: ["Préparer le sol à temps", "Battage et égrenage : rapide, moins de pertes", "Transport, pompage, transformation"] },
            { title: "Quatre questions", bullets: ["Calendrier : le retard baisse-t-il le rendement ?", "Main-d'œuvre : rare ou chère ?", "Pertes ? Volume de travail ?"] },
            { title: "Comparer le coût", bullets: ["À la main : journées x salaire", "Exemple : 25 journées x 50 GHS = 1 250 GHS par ha", "Exemple de location de machine : 600 GHS par ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Listez cinq gros travaux de votre ferme. Pour chacun, répondez aux quatre questions (calendrier, main-d'œuvre, pertes, volume) et comparez le coût à la main avec le coût à la machine. Entourez les deux tâches qu'il est le plus rentable de mécaniser.",
          youCanNow: "repérer les tâches de votre ferme qu'il est rentable de mécaniser et dire pourquoi.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi labourer à temps est-il souvent rentable ?", options: ["Les tracteurs coûtent moins cher en saison sèche", "Semer à temps après les pluies peut augmenter le rendement", "Un labour tardif tue mieux les mauvaises herbes", "Le champ a l'air plus propre"], answer: 1, why: "Le calendrier compte : semer en retard baisse souvent le rendement." },
            { objective: "O1", q: "Égrener 2 tonnes de maïs à la main prend 20 journées à 4 000 NGN. Un service d'égreneuse coûte 50 000 NGN. Qu'est-ce qui est le moins cher ?", options: ["Le service d'égreneuse", "L'égrenage à la main", "Ils coûtent pareil", "On ne peut pas savoir"], answer: 0, why: "L'égrenage à la main coûte 20 x 4 000 = 80 000 NGN, plus que 50 000 NGN." }
          ]
        },
        {
          title: "Louer ou acheter : une comparaison chiffrée",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculer le coût de l'achat et de la location et trouver la surface d'équilibre.",
          text: [
            "Posséder une machine entraîne des coûts fixes que vous payez chaque année même si elle ne bouge jamais : la perte de valeur au fil de sa vie (l'amortissement), les intérêts d'un prêt ou ce que l'argent aurait pu rapporter ailleurs, l'assurance et un hangar. Il y a aussi des coûts de fonctionnement par hectare : carburant, huile, réparations et conducteur. La location n'a qu'un coût : le tarif de location par hectare.",
            "Exemple chiffré pour un tracteur avec charrue au Nigeria (tous les chiffres sont seulement des exemples ; utilisez de vrais devis et le vrai taux de votre prêteur) : prix 30 000 000 NGN, valeur 6 000 000 NGN après 10 ans, donc amortissement = (30 000 000 - 6 000 000) / 10 = 2 400 000 NGN par an. Intérêts du prêt (exemple) 1 800 000 NGN par an, assurance et hangar 600 000 NGN. Coûts fixes = 4 800 000 NGN par an. Coûts de fonctionnement = 25 000 NGN par hectare. Tarif de location = 60 000 NGN par hectare.",
            "Chaque hectare labouré avec votre propre tracteur économise 60 000 - 25 000 = 35 000 NGN par rapport à la location. Surface d'équilibre = coûts fixes / économie par hectare = 4 800 000 / 35 000 = environ 137 hectares par an. Un producteur qui a 10 hectares doit louer ; l'achat n'est rentable que si le tracteur travaille aussi chez les voisins. Pesez aussi ce que les chiffres ne montrent pas : être propriétaire permet de labourer à temps, tandis que louer évite le prêt et les réparations. La location-vente et les formules de paiement à l'usage sont d'autres options ; lisez entièrement chaque contrat et demandez l'avis d'un conseiller de confiance."
          ],
          steps: ["Amortissement par an = (prix - valeur à la fin) / années d'utilisation.", "Ajoutez intérêts, assurance et hangar : ce sont les coûts fixes par an.", "Additionnez carburant, huile, réparations et conducteur par hectare : coûts de fonctionnement.", "Économie par hectare = tarif de location - coûts de fonctionnement.", "Surface d'équilibre = coûts fixes / économie par hectare.", "Comparez avec vos hectares et décidez ; notez le calendrier et le risque."],
          words: [["Amortissement", "la valeur qu'une machine perd chaque année en vieillissant."], ["Coûts fixes", "les coûts payés chaque année, que la machine travaille ou non."], ["Surface d'équilibre", "le nombre d'hectares par an pour lequel acheter coûte autant que louer."]],
          slides: [
            { title: "Les coûts de l'achat", bullets: ["Fixes : amortissement, intérêts, assurance, hangar", "Fonctionnement par hectare : carburant, huile, réparations, conducteur", "Location : un seul tarif par hectare"] },
            { title: "Exemple : tracteur au Nigeria", bullets: ["Amortissement (30 M - 6 M) / 10 = 2,4 M NGN par an", "Coûts fixes au total 4,8 M NGN par an", "Fonctionnement 25 000 NGN par ha ; location 60 000 NGN par ha"] },
            { title: "Surface d'équilibre", bullets: ["Économie par ha : 60 000 - 25 000 = 35 000", "4 800 000 / 35 000 = environ 137 ha par an", "Ferme de 10 ha : louer. Exemples seulement"] },
            { title: "Au-delà des chiffres", bullets: ["Propriétaire : vous labourez à temps", "Location : pas de prêt, pas de réparations", "Location-vente et prêts : tout lire, demander conseil"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Obtenez de vrais devis pour une machine que vous envisagez (prix, durée de vie prévue et valeur à la fin, coûts de fonctionnement et tarif de location local). Calculez ses coûts fixes par an, l'économie par hectare et la surface d'équilibre, et écrivez si vous devez louer ou acheter.",
          youCanNow: "comparer le coût de l'achat et de la location d'une machine et trouver la surface d'équilibre.",
          quickCheck: [
            { objective: "O2", q: "Une égreneuse coûte 20 000 GHS et vaut 4 000 GHS après 8 ans. Quel est son amortissement par an ?", options: ["1 500 GHS", "2 500 GHS", "2 000 GHS", "3 000 GHS"], answer: 2, why: "(20 000 - 4 000) / 8 = 2 000 par an." },
            { objective: "O2", q: "Les coûts fixes sont de 300 000 KES par an et l'achat fait économiser 6 000 KES par hectare. Quelle est la surface d'équilibre ?", options: ["30 hectares", "40 hectares", "60 hectares", "50 hectares"], answer: 3, why: "300 000 / 6 000 = 50 hectares par an." }
          ]
        },
        {
          title: "Location de tracteurs et services par application",
          objectives: ["O3"],
          minutes: 5,
          goal: "Réserver un service de location et contrôler le travail avant de payer.",
          text: [
            "Vous pouvez louer des machines à un voisin ou à un propriétaire de tracteur, à une coopérative ou un groupement, à un centre de location public ou privé, ou à un service par application. Hello Tractor en est un exemple : les producteurs réservent des services de tracteur par son application mobile ou son application web, ou par des agents de réservation (agents de vulgarisation et agents de terrain qui réservent pour les producteurs), et les propriétaires de tracteurs l'utilisent pour suivre leurs tracteurs et leur carburant par GPS. Il propose aussi des formules de paiement à l'usage pour aider des personnes à devenir propriétaires de tracteurs. L'entreprise dit travailler dans plus de 20 pays africains, dont le Nigeria ; vérifiez ce qui existe dans votre zone.",
            "Les tracteurs vont d'abord là où il y a beaucoup de travail au même endroit. Réserver avec vos voisins, pour que le tracteur fasse plusieurs fermes en un seul déplacement, augmente les chances qu'il arrive à temps.",
            "Avant le début du travail, convenez par écrit ou par message : du prix par acre ou par hectare, de la façon de mesurer la surface, de la date, de la profondeur et du type de travail, et de qui paie le carburant. Mesurez le champ vous-même, avec un ruban ou une application GPS sur téléphone. Après le travail, contrôlez-le : bonne profondeur, aucune bande oubliée, tout le champ fait. Ne payez qu'après contrôle, par l'application officielle, par mobile money ou contre un reçu. Ne payez jamais d'avance un inconnu en dehors de l'application officielle, et ne partagez jamais vos codes PIN ni vos codes."
          ],
          steps: ["Choisissez un service : voisin, groupement, centre de location ou application (par exemple Hello Tractor).", "Réservez tôt, avec vos voisins si possible.", "Convenez à l'avance du prix, de la mesure de la surface, de la date, de la profondeur et du carburant.", "Mesurez le champ vous-même.", "Contrôlez le travail : profondeur, aucune bande oubliée, tout le champ.", "Payez après contrôle ; demandez un reçu ou une trace dans l'application ; ne partagez jamais votre PIN."],
          words: [["Agent de réservation", "une personne qui réserve des services de machines pour les producteurs, souvent avec une application."], ["Paiement à l'usage", "payer quelque chose par petites sommes au fil du temps pendant qu'on l'utilise, jusqu'à en devenir propriétaire."], ["Tarif de location", "le prix demandé par le service, souvent par acre ou par hectare."]],
          slides: [
            { title: "Où louer", bullets: ["Voisins, groupements, centres de location", "Applications comme Hello Tractor : appli, web ou agent", "Vérifiez ce qui fonctionne dans votre zone"] },
            { title: "Avoir le tracteur à temps", bullets: ["Réservez tôt", "Réservez avec vos voisins", "Plusieurs fermes en un déplacement"] },
            { title: "Convenir avant le travail", bullets: ["Prix par acre ou hectare ; mesure de la surface", "Date, profondeur, type de travail, carburant", "Par écrit ou par message"] },
            { title: "Contrôler, puis payer", bullets: ["Mesurez le champ vous-même", "Bonne profondeur ; aucune bande oubliée", "Payez par appli, mobile money ou reçu ; jamais de PIN"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Trouvez deux services de location près de chez vous (un propriétaire de tracteur, un groupement, un centre de location ou une application). Demandez à chacun le prix par hectare, comment ils mesurent la surface, quand ils peuvent venir et comment payer. Écrivez un court message de réservation qui fixe toutes les conditions.",
          youCanNow: "réserver un tracteur ou un service de machine avec des conditions claires et contrôler le travail avant de payer.",
          quickCheck: [
            { objective: "O3", q: "Quand devez-vous payer un labour au tracteur loué ?", options: ["Après avoir contrôlé le travail et la surface, avec un reçu ou une trace dans l'application", "Avant l'arrivée du tracteur, en espèces à celui qui appelle", "La moitié à un inconnu par SMS", "Jamais"], answer: 0, why: "Contrôler d'abord et garder une trace vous protège du mauvais travail et des arnaques." },
            { objective: "O3", q: "Comment augmenter les chances qu'un tracteur loué arrive à temps ?", options: ["Réserver à la dernière minute", "Réserver seul pour une toute petite parcelle", "Réserver tôt, avec vos voisins", "Payer un supplément d'avance à un inconnu"], answer: 2, why: "Plusieurs fermes au même endroit rendent le déplacement rentable pour le propriétaire du tracteur." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Louer ou acheter ?",
        questions: [
          { objective: "O1", q: "Quelle tâche est en général la MOINS rentable à mécaniser ?", options: ["Labourer 20 hectares à temps", "Battre une grosse récolte de riz", "Un travail d'une heure une fois par an sur une toute petite parcelle", "Transporter la récolte au marché"], answer: 2, why: "Une machine pour de petits travaux rares coûte plus qu'elle ne fait économiser." },
          { objective: "O1", q: "Quelle question vérifie le respect du calendrier ?", options: ["La machine est-elle rouge ?", "Faire la tâche en retard baisse-t-il le rendement ?", "Le concessionnaire est-il aimable ?", "Quel âge a le producteur ?"], answer: 1, why: "Le calendrier, c'est savoir si un travail fait en retard coûte du rendement." },
          { objective: "O2", q: "Lequel est un coût fixe de l'achat d'un tracteur ?", options: ["L'assurance", "Le carburant par hectare", "La paie du conducteur par hectare", "L'huile par heure"], answer: 0, why: "L'assurance se paie chaque année, que le tracteur travaille ou non." },
          { objective: "O2", q: "La surface d'équilibre est de 137 hectares par an et vous cultivez 10 hectares. Que faire ?", options: ["Acheter tout de suite", "Acheter deux tracteurs", "Arrêter de cultiver", "Louer, ou acheter seulement si vous pouvez aussi travailler chez les voisins"], answer: 3, why: "Bien en dessous de l'équilibre, acheter coûte plus que louer, sauf si la machine travaille aussi ailleurs." },
          { objective: "O3", q: "Avant qu'un tracteur loué commence, de quoi devez-vous convenir ?", options: ["Seulement du nom du conducteur", "Du prix par hectare, de la mesure de la surface, de la date, de la profondeur et du carburant", "De rien ; faites-leur confiance", "De votre PIN de mobile money"], answer: 1, why: "Des conditions claires évitent les disputes et le mauvais travail ; un PIN ne se partage jamais." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire tourner les machines et une entreprise de services",
      lessons: [
        {
          title: "De petites machines pour les petits producteurs",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choisir une petite machine adaptée à votre tâche et à votre zone.",
          text: [
            "Toutes les fermes n'ont pas besoin d'un tracteur à quatre roues. Un motoculteur (tracteur à deux roues) peut labourer, fraiser, pomper l'eau et tirer une remorque sur de petites parcelles. Une égreneuse à maïs motorisée ou une batteuse multicultures (pour le riz, le sorgho, le mil, le haricot ou le soja) fait gagner des jours de travail et perd moins de grains. Un pulvérisateur à dos motorisé ou un atomiseur couvre plus de surface qu'un pulvérisateur à main. D'autres exemples sont les râpes à manioc, les moissonneuses à riz et les hache-paille pour le fourrage.",
            "Avant d'acheter, vérifiez : Y a-t-il assez de travail, chez vous et chez vos voisins, pour l'occuper ? Un mécanicien proche peut-il la réparer, et vend-on des pièces près de chez vous ? Le concessionnaire vous forme-t-il et donne-t-il une garantie ? Peut-on la déplacer d'une ferme à l'autre ? Les personnes qui vont l'utiliser, y compris les femmes et les jeunes, peuvent-elles la conduire en sécurité ? La FAO a publié un catalogue de machines adaptées aux agricultrices.",
            "Pulvérisateurs : utilisez seulement des pesticides homologués dans votre pays, selon l'étiquette, avec un équipement de protection. Au Kenya, consultez la liste du Pest Control Products Board (l'office des produits phytosanitaires) ; au Nigeria, la NAFDAC. Un pulvérisateur motorisé projette plus de produit, plus vite : réglez-le (étalonnez-le) comme le dit son manuel avant chaque saison."
          ],
          steps: ["Nommez la tâche et combien d'hectares ou de tonnes par an.", "Choisissez le type de machine pour cette tâche.", "Vérifiez qu'il y a des pièces et un mécanicien près de chez vous.", "Demandez au concessionnaire la formation et la garantie.", "Vérifiez qu'elle peut être déplacée et utilisée en sécurité par vos conducteurs.", "Pour les pulvérisateurs : pesticides homologués seulement, étiquette et équipement de protection."],
          words: [["Motoculteur", "un petit tracteur à deux roues qu'on conduit en marchant derrière, qui tire des outils et entraîne des pompes."], ["Batteuse", "une machine qui sépare les grains des tiges de la plante."], ["Étalonner", "régler un pulvérisateur pour qu'il projette la bonne quantité, comme le disent son manuel et l'étiquette du pesticide."]],
          slides: [
            { title: "Petites machines", bullets: ["Motoculteur : labour, pompage, remorque", "Égreneuse à maïs ; batteuse multicultures", "Pulvérisateur motorisé ; râpe à manioc ; hache-paille"] },
            { title: "Avant d'acheter", bullets: ["Assez de travail pour l'occuper ?", "Pièces et mécanicien à proximité ?", "Formation, garantie, facile à déplacer ?"] },
            { title: "Qui va l'utiliser ?", bullets: ["Sûre pour vos conducteurs", "Les femmes et les jeunes aussi", "Catalogue FAO de machines pour agricultrices"] },
            { title: "Pulvérisateurs", bullets: ["Pesticides homologués seulement, selon l'étiquette", "Kenya : liste du PCPB. Nigeria : NAFDAC", "Équipement de protection ; étalonner d'abord"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Prenez une tâche de la leçon 1. Choisissez une petite machine pour elle et allez voir ou appelez un concessionnaire. Demandez le prix, où trouver les pièces et les réparations, quelle formation et quelle garantie ils donnent, et combien de travail elle fait en une journée. Notez les réponses.",
          youCanNow: "choisir une petite machine adaptée à votre tâche, à votre zone et aux personnes qui vont l'utiliser.",
          quickCheck: [
            { objective: "O4", q: "Quelle machine convient pour labourer et pomper sur de petites parcelles ?", options: ["Une moissonneuse-batteuse", "Un motoculteur (tracteur à deux roues)", "Une égreneuse à maïs", "Un hache-paille"], answer: 1, why: "Un motoculteur laboure les petites parcelles et peut entraîner une pompe." },
            { objective: "O4", q: "L'égreneuse la moins chère n'a ni pièces ni mécanicien à moins de 200 km. Quel est le risque ?", options: ["Aucun ; les machines ne tombent jamais en panne", "Elle va égrener trop vite", "Quand elle tombera en panne, elle pourra rester à l'arrêt des semaines", "Elle consommera trop peu de carburant"], answer: 2, why: "Une machine sans pièces ni réparations à proximité peut être à l'arrêt quand vous en avez le plus besoin." }
          ]
        },
        {
          title: "Sécurité et carnets d'entretien",
          objectives: ["O5"],
          minutes: 6,
          goal: "Utiliser une machine en sécurité et tenir son carnet d'entretien.",
          text: [
            "Les machines peuvent tuer ou mutiler en quelques secondes. Les tracteurs qui se renversent, les personnes qui tombent sous les roues et les vêtements happés par des arbres en rotation sont des causes courantes de décès dans les fermes. L'OIT (Organisation internationale du Travail) publie un recueil de directives pratiques sur l'utilisation sûre des tracteurs. Les règles principales : seuls des adultes formés conduisent les machines ; aucun enfant près des machines en marche ; aucun passager sur le tracteur ni sur les outils ; utilisez l'arceau de sécurité et la ceinture quand il y en a ; roulez lentement et droit dans les pentes et loin des fossés ; gardez toutes les protections en place, surtout sur l'arbre de la prise de force (PDF) ; et portez des vêtements ajustés, cheveux attachés.",
            "Batteuses et égreneuses : ne mettez jamais la main dans l'ouverture d'alimentation ni dans un bourrage. Arrêtez le moteur et attendez que toutes les pièces soient immobiles avant de dégager. Protégez vos oreilles et vos poumons du bruit et de la poussière. Faites le plein seulement moteur arrêté et froid, sans fumer. Gardez une trousse de premiers secours et un téléphone à proximité.",
            "Une machine bien entretenue dure plus longtemps et tombe moins en panne pendant la saison chargée. Faites des contrôles quotidiens avant le travail : huile moteur, carburant, eau ou liquide de refroidissement, filtre à air, pneus, écrous et boulons desserrés, et points de graissage. Faites l'entretien selon les heures du compteur, comme le dit le manuel. Tenez un carnet avec : date, heures, travail et hectares ou tonnes, carburant, réparations et pièces, coût et nom du conducteur. Le carnet montre le vrai coût de fonctionnement par hectare."
          ],
          steps: ["Seulement un conducteur adulte et formé ; aucun enfant, aucun passager.", "Protections en place ; arceau de sécurité et ceinture utilisés quand il y en a.", "Roulez lentement dans les pentes ; restez loin des fossés.", "Arrêtez le moteur et attendez avant de dégager un bourrage.", "Contrôles quotidiens : huile, carburant, liquide de refroidissement, filtre à air, pneus, boulons, graissage.", "Notez dans le carnet le travail, le carburant, les réparations et les coûts de chaque jour."],
          words: [["Arbre de prise de force (PDF)", "un arbre qui tourne sur le tracteur et entraîne les outils ; il peut happer les vêtements et tuer."], ["Arceau de sécurité", "un cadre au-dessus du siège du conducteur qui le protège si le tracteur se renverse."], ["Carnet d'entretien", "un cahier où l'on note chaque travail, carburant, réparation et coût d'une machine."]],
          slides: [
            { title: "Les personnes d'abord", bullets: ["Adultes formés seulement ; aucun enfant à proximité", "Aucun passager", "Arceau de sécurité et ceinture"] },
            { title: "Points dangereux", bullets: ["Pentes et fossés : roulez lentement", "Arbre de PDF : protections en place ; vêtements ajustés, cheveux attachés", "Bourrage : arrêter le moteur, attendre, puis dégager"] },
            { title: "Contrôles quotidiens", bullets: ["Huile, carburant, liquide de refroidissement, filtre à air", "Pneus, écrous et boulons, graissage", "Entretien selon les heures, comme le dit le manuel"] },
            { title: "Le carnet", bullets: ["Date, heures, travail, hectares ou tonnes", "Carburant, réparations, pièces, coût, conducteur", "Montre le vrai coût par hectare"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Faites une liste de sécurité d'une page pour une machine que vous utilisez ou louez, et une page de carnet avec des colonnes pour la date, les heures, le travail, les hectares ou tonnes, le carburant, les réparations et pièces, le coût et le conducteur. Remplissez une ligne avec un travail réel ou d'exemple.",
          youCanNow: "utiliser une machine en respectant les règles clés de sécurité et tenir un carnet d'entretien qui montre son vrai coût de fonctionnement.",
          quickCheck: [
            { objective: "O5", q: "Une batteuse est bourrée. Que faites-vous ?", options: ["Pousser la récolte avec la main pendant qu'elle tourne", "Demander à un enfant de l'enlever", "Donner un coup de pied dans la machine", "Arrêter le moteur, attendre que toutes les pièces soient immobiles, puis dégager"], answer: 3, why: "Les pièces en mouvement peuvent arracher une main en une seconde ; on ne dégage qu'une machine arrêtée." },
            { objective: "O5", q: "Que met-on dans le carnet d'une machine ?", options: ["Date, heures, travail, carburant, réparations et coût", "Le PIN de mobile money du conducteur", "Seulement la couleur de la machine", "Rien ; la mémoire suffit"], answer: 0, why: "Ces notes montrent le vrai coût de fonctionnement et quand l'entretien est dû." }
          ]
        },
        {
          title: "Créer une entreprise de services de mécanisation",
          objectives: ["O6"],
          minutes: 6,
          goal: "Écrire un plan d'une page pour un service de location de machines.",
          text: [
            "Beaucoup de services de location sont tenus par des producteurs qui ont acheté une machine pour leur propre ferme et la proposent ensuite à leurs voisins, contre de l'argent ou en échange d'autres travaux ou de récolte. Le cadre de la FAO et de l'Union africaine pour la mécanisation en Afrique voit les jeunes qui tiennent des services de location comme un moyen clé d'apporter les machines aux petits producteurs. La FAO publie aussi un manuel de formation sur les services de location comme activité commerciale.",
            "Un plan d'une page répond à ces questions : Quels services, en quelles saisons (labour, égrenage, battage, transport, pompage) ? Qui sont les clients, et combien d'hectares ou de tonnes au total ? Quel prix, et comment se compare-t-il aux autres services ? Quels sont les coûts (fixes par an et de fonctionnement par hectare, des leçons 2 et 5) ? Quel est le seuil de rentabilité ? Comment prendrez-vous les réservations et les paiements (acomptes, mobile money, reçus) ? Qui est le conducteur, et est-il formé ? Quels sont les risques : pannes en pleine saison, travaux impayés, accidents, vol ? Comment les réduirez-vous (entretien, conditions écrites, assurance, traceur GPS) ?",
            "Exemple pour un service de motoculteur au Sénégal ou au Burkina Faso (tous les chiffres sont seulement des exemples) : coûts fixes 600 000 FCFA (XOF) par an, coûts de fonctionnement 15 000 XOF par hectare, prix 35 000 XOF par hectare. Seuil de rentabilité = 600 000 / (35 000 - 15 000) = 30 hectares. Avec 50 hectares réservés, bénéfice = 50 x 20 000 - 600 000 = 400 000 XOF. Regroupez les fermes proches pour réduire les déplacements, et ajoutez des travaux hors saison comme l'égrenage et le transport. Les options de financement comprennent les prêts, la location-vente et le paiement à l'usage : lisez entièrement chaque contrat et demandez l'avis d'un conseiller de confiance."
          ],
          steps: ["Listez vos services et vos saisons.", "Listez les clients et le total d'hectares ou de tonnes.", "Fixez un prix qui couvre le coût par hectare plus une marge ; comparez avec les autres.", "Calculez le seuil de rentabilité : coûts fixes / (prix - coût de fonctionnement par hectare).", "Prévoyez les réservations, le conducteur, les paiements et les registres.", "Listez les risques et comment vous réduirez chacun."],
          words: [["Service de location", "une entreprise qui fait des travaux agricoles avec ses machines pour d'autres producteurs, contre paiement."], ["Marge", "la part du prix qui reste après les coûts."], ["Travaux hors saison", "des travaux qu'une machine peut faire en dehors de la saison principale, comme le transport ou l'égrenage."]],
          slides: [
            { title: "Les services de location", bullets: ["Des producteurs servent leurs voisins contre paiement", "Moyen clé d'apporter les machines aux petits producteurs", "Manuel FAO : la location comme activité commerciale"] },
            { title: "Plan d'une page", bullets: ["Services, saisons, clients, hectares", "Prix, coûts, seuil de rentabilité", "Réservations, conducteur, paiements, risques"] },
            { title: "Exemple : motoculteur (XOF)", bullets: ["Fixes 600 000 ; fonctionnement 15 000 par ha ; prix 35 000", "Seuil 600 000 / 20 000 = 30 ha", "50 ha : bénéfice 400 000 XOF. Exemples seulement"] },
            { title: "Faire marcher l'activité", bullets: ["Regrouper les fermes proches ; moins de trajets", "Ajouter des travaux hors saison", "Prêts et location-vente : tout lire, demander conseil"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Tâche finale : faites votre fiche de décision « louer ou acheter » pour une machine et une tâche. Si l'achat n'est rentable qu'avec le travail chez les voisins, ajoutez un plan d'une page pour le service de location : services, clients et hectares, prix, coûts, seuil de rentabilité, réservations et paiements, et principaux risques.",
          youCanNow: "planifier un service de location de machines avec les prix, les coûts, le seuil de rentabilité et les risques.",
          quickCheck: [
            { objective: "O6", q: "Les coûts fixes sont de 400 000 XOF par an, les coûts de fonctionnement de 10 000 XOF par hectare et le prix de 30 000 XOF par hectare. Quelle est la surface d'équilibre ?", options: ["10 hectares", "13 hectares", "40 hectares", "20 hectares"], answer: 3, why: "400 000 / (30 000 - 10 000) = 20 hectares." },
            { objective: "O6", q: "Quelle mesure réduit le coût des trajets d'un service de location de tracteur ?", options: ["Regrouper les réservations de fermes proches", "Prendre des travaux très éloignés le même jour", "Refuser les petites fermes", "Ne jamais planifier les réservations"], answer: 0, why: "Faire ensemble les fermes proches économise carburant et temps sur la route." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire tourner les machines et une entreprise de services",
        questions: [
          { objective: "O4", q: "Avant d'acheter une petite machine, quelle vérification compte le plus pour qu'elle continue de fonctionner ?", options: ["Sa couleur", "Des pièces et un mécanicien près de chez vous", "Le prix payé par le voisin", "L'autocollant de la marque"], answer: 1, why: "Sans pièces ni réparations à proximité, une machine en panne reste à l'arrêt." },
          { objective: "O4", q: "Vous allez utiliser un pulvérisateur motorisé. Qu'est-ce qui est juste ?", options: ["N'importe quel pesticide du marché", "Mélanger deux pesticides pour gagner du temps", "Seulement des pesticides homologués, selon l'étiquette, avec un équipement de protection", "Pulvériser sans étalonner"], answer: 2, why: "Seuls des produits homologués, utilisés selon l'étiquette, sont sûrs et légaux." },
          { objective: "O5", q: "Laquelle est une règle de sécurité du tracteur ?", options: ["Aucun passager sur le tracteur ni sur les outils", "Les enfants peuvent monter s'ils font attention", "Enlever la protection de la PDF pour aller plus vite", "Rouler vite dans les pentes"], answer: 0, why: "Les passagers tombent sous les roues ; c'est une cause courante de décès dans les fermes." },
          { objective: "O5", q: "Pourquoi tenir le carnet d'une machine ?", options: ["C'est seulement pour la banque", "Pour montrer la couleur de la machine", "Pour que le conducteur travaille plus lentement", "Pour voir le vrai coût par hectare et quand l'entretien est dû"], answer: 3, why: "Noter le travail, le carburant et les réparations montre les vrais coûts et les dates d'entretien." },
          { objective: "O6", q: "Que met-on dans un plan de service de location ?", options: ["Seulement le prix de la machine", "Services, clients, prix, coûts, seuil de rentabilité et risques", "Le PIN du propriétaire", "Seulement un logo"], answer: 1, why: "Un plan montre si le service rapporte plus qu'il ne coûte et comment les risques sont gérés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Machines agricoles et services de mécanisation",
    questions: [
      { objective: "O1", q: "La mécanisation comprend :", options: ["Seulement les gros tracteurs", "Seulement les machines importées", "Les outils et machines, des outils à main améliorés aux tracteurs", "Seulement les drones"], answer: 2, why: "La FAO compte tous les niveaux, des outils à main aux équipements motorisés." },
      { objective: "O1", q: "Quelle est une bonne raison de mécaniser le battage ?", options: ["La machine fait en quelques heures ce qui prend des jours à beaucoup de personnes, avec moins de grains perdus", "Les machines ont l'air modernes", "Le battage à la main est interdit", "Les voisins ont des machines"], answer: 0, why: "Le temps gagné et les pertes réduites font du battage une bonne tâche à mécaniser." },
      { objective: "O1", q: "Désherber 1 hectare à la main coûte 6 000 KES et un service de machine coûte 9 000 KES. Sur le seul coût :", options: ["La machine est moins chère", "Ils sont égaux", "On ne peut pas les comparer", "Le désherbage à la main est moins cher"], answer: 3, why: "6 000 KES, c'est moins que 9 000 KES : la machine n'est pas rentable sur le seul coût." },
      { objective: "O2", q: "L'amortissement, c'est :", options: ["Le carburant utilisé par une machine", "La valeur qu'une machine perd chaque année", "Le tarif de location", "Le salaire du conducteur"], answer: 1, why: "L'amortissement répartit la perte de valeur sur la durée de vie de la machine." },
      { objective: "O2", q: "Lequel est un coût de fonctionnement par hectare ?", options: ["L'assurance", "Le hangar", "Le carburant", "Les intérêts du prêt par an"], answer: 2, why: "Le carburant augmente avec chaque hectare travaillé ; les autres sont fixes." },
      { objective: "O2", q: "Coûts fixes 2 000 000 NGN par an ; tarif de location 50 000 NGN par ha ; coût de fonctionnement 25 000 NGN par ha. Surface d'équilibre ?", options: ["80 hectares", "40 hectares", "50 hectares", "100 hectares"], answer: 0, why: "2 000 000 / (50 000 - 25 000) = 80 hectares." },
      { objective: "O2", q: "Quel avantage de l'achat les chiffres de coût oublient-ils souvent ?", options: ["Payer plus d'intérêts", "Labourer à temps sans attendre un tracteur loué", "Une assurance plus chère", "Plus de réparations"], answer: 1, why: "Le respect du calendrier a de la valeur même quand la location est moins chère sur le papier." },
      { objective: "O3", q: "Hello Tractor permet aux producteurs de réserver des services de tracteur :", options: ["Seulement par courrier", "Seulement à la banque", "Seulement en personne dans une usine", "Par une application mobile, une application web ou des agents de réservation"], answer: 3, why: "Hello Tractor dit que les producteurs réservent par ses applications ou par des agents de réservation." },
      { objective: "O3", q: "Comment mesurer le champ pour un travail en location ?", options: ["Faire confiance à l'estimation du conducteur", "Le mesurer vous-même avec un ruban ou une application GPS sur téléphone", "Compter les arbres", "Ne pas mesurer"], answer: 1, why: "Votre propre mesure vous protège contre le paiement d'une surface plus grande que celle travaillée." },
      { objective: "O3", q: "Un inconnu appelle, dit qu'il est agent de tracteurs et demande tout le paiement d'avance par mobile money. Vous :", options: ["Payez tout de suite", "Envoyez votre PIN", "Réservez par l'application officielle ou un agent connu, et payez après avoir contrôlé le travail", "Payez le double pour être sûr"], answer: 2, why: "Les appels d'inconnus qui demandent un paiement d'avance sont une arnaque courante." },
      { objective: "O4", q: "Une batteuse multicultures peut battre :", options: ["Le riz, le sorgho, le mil, le haricot ou le soja", "Seulement le manioc", "Seulement le café", "Seulement l'herbe"], answer: 0, why: "Les batteuses multicultures travaillent avec beaucoup de céréales et de légumineuses." },
      { objective: "O4", q: "Laquelle N'est PAS une vérification clé avant d'acheter une petite machine ?", options: ["Des pièces à proximité", "La formation et la garantie du concessionnaire", "Assez de travail pour l'occuper", "La couleur de sa peinture"], answer: 3, why: "Les pièces, la formation et l'usage font la valeur ; pas la couleur de la peinture." },
      { objective: "O4", q: "Au Kenya, la liste de quel organisme montre les pesticides homologués pour les pulvérisateurs ?", options: ["Le Kenya Dairy Board", "Le Kenya Fisheries Service", "Le Pest Control Products Board", "Le Kenya Wildlife Service"], answer: 2, why: "Le Pest Control Products Board homologue les pesticides au Kenya." },
      { objective: "O5", q: "Qui peut conduire un tracteur ?", options: ["N'importe quel enfant prudent", "Un adulte formé", "N'importe qui avec un téléphone", "Un passager"], answer: 1, why: "Seuls des adultes formés doivent conduire les machines." },
      { objective: "O5", q: "Pourquoi les protections doivent-elles rester sur l'arbre de PDF ?", options: ["L'arbre en rotation peut happer les vêtements et tuer", "Elles rendent le tracteur plus rapide", "Elles servent seulement de décoration", "Elles économisent du carburant"], answer: 0, why: "Être happé par la PDF est une cause courante de blessures graves et de décès dans les fermes." },
      { objective: "O5", q: "Quand faut-il faire le plein d'une machine ?", options: ["Pendant qu'elle tourne", "En fumant", "Près d'un feu", "Moteur arrêté et froid, sans fumer"], answer: 3, why: "Du carburant sur un moteur chaud ou près d'une flamme peut prendre feu." },
      { objective: "O5", q: "À quelle fréquence faire les contrôles de base (huile, carburant, liquide de refroidissement, pneus, boulons) ?", options: ["Une fois par an", "Seulement quand elle tombe en panne", "Chaque jour avant le travail", "Jamais"], answer: 2, why: "Les contrôles quotidiens repèrent les petits problèmes avant qu'ils arrêtent la machine en pleine saison." },
      { objective: "O6", q: "Coûts fixes 500 000 XOF par an ; coût de fonctionnement 15 000 XOF par ha ; prix 40 000 XOF par ha. Surface d'équilibre ?", options: ["12 hectares", "20 hectares", "25 hectares", "33 hectares"], answer: 1, why: "500 000 / (40 000 - 15 000) = 20 hectares." },
      { objective: "O6", q: "Qu'est-ce qui réduit le risque de panne en pleine saison ?", options: ["Sauter l'entretien pour économiser", "Prêter la machine sans carnet", "Un entretien régulier et des pièces en stock", "La faire tourner jour et nuit sans contrôle"], answer: 2, why: "L'entretien et les pièces gardent la machine en marche quand les clients en ont le plus besoin." },
      { objective: "O6", q: "Avant de signer une location-vente ou un prêt pour une machine, vous devez :", options: ["Lire tout le contrat et demander l'avis d'un conseiller de confiance", "Signer vite avant la fin de l'offre", "Lire seulement la première page", "Laisser le concessionnaire le remplir pour vous"], answer: 0, why: "Les contrats comportent des coûts et des risques ; lisez-les en entier et demandez conseil." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Choix de la tâche", objective: "O1", notYet: "Aucune raison donnée pour mécaniser la tâche.", meets: "La tâche est choisie avec des raisons (calendrier, main-d'œuvre, pertes ou volume) et un coût à la main.", exceeds: "Compare deux tâches ou plus et explique pourquoi celle-ci est la plus rentable." },
      { name: "Comparaison des coûts", objective: "O2", notYet: "Coûts fixes ou de fonctionnement manquants, ou calculs faux.", meets: "Amortissement, coûts fixes, coûts de fonctionnement, coût de location et surface d'équilibre justes, avec une décision claire.", exceeds: "Utilise de vrais devis et note le calendrier et le risque à côté des chiffres." },
      { name: "Vérifications de la machine et de la location", objective: "O4", notYet: "Aucune vérification des pièces, des réparations ou du service de location.", meets: "Liste les vérifications sur les pièces, le mécanicien, la formation et la garantie, ou sur les conditions du service de location.", exceeds: "A interrogé un concessionnaire ou un service de location et note les réponses." },
      { name: "Sécurité et entretien", objective: "O5", notYet: "Aucune règle de sécurité ou aucun carnet.", meets: "Règles clés de sécurité et un carnet avec date, heures, travail, carburant, réparations et coût.", exceeds: "Nomme qui est formé pour conduire et quand le premier entretien est dû." },
      { name: "Décision et plan d'entreprise", objective: "O6", notYet: "Aucune décision, ou une décision d'achat sans plan pour occuper la machine.", meets: "Décision claire ; en cas d'achat, un plan de location d'une page avec services, clients, prix, coûts, seuil de rentabilité et risques.", exceeds: "Montre que le plan tient avec 20 % d'hectares réservés en moins, ou dit ce qui changerait." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui prennent une décision de louer ou d'acheter avec la fiche de décision dans les 3 mois (enquête de suivi)",
      "Apprenants qui disent avoir semé à temps grâce à une machine réservée ou achetée à la saison suivante",
      "Apprenants qui lancent ou développent un service de location, et les hectares qu'ils servent, dans les 12 mois",
      "Blessures liées aux machines déclarées par les apprenants (objectif : aucune)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou un téléphone avec un tableur ou une application de notes",
      "Une calculatrice (celle du téléphone suffit)",
      "Un mètre ruban ou un téléphone avec une application GPS de mesure de surface",
      "De vrais devis d'un concessionnaire local et de services de location, réunis pendant le cours",
      "Environ 75 minutes au total, en courtes séances, plus une visite auprès d'une machine"
    ],
    facilitatorNotes: [
      "Organisez une démonstration avec un service de location ou un concessionnaire local : contrôles quotidiens, protections, et dégagement sûr d'une égreneuse ou d'une batteuse bourrée, moteur arrêté.",
      "Remplacez les prix d'exemple par des devis locaux avant les leçons 2 et 6, et dites clairement que ce sont des exemples.",
      "Expliquez les prêts, la location-vente et le paiement à l'usage et leurs risques, mais ne donnez aucun conseil d'investissement ; orientez les apprenants vers un conseiller de confiance.",
      "Tenez les enfants à l'écart de toutes les démonstrations de machines.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois.",
      "Orientez les groupes qui veulent partager des machines vers \"Mobilisation communautaire : mettre en commun les machines et négocier les intrants\"."
    ]
  }
};
