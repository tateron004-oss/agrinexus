"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-poultry-production.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const KENBRO = { name: "Kenchic : Kenbro (poulet local amélioré à double usage)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma et al. 2015, Livestock Research for Rural Development : Kuroiler et poulets locaux en Ouganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "Vulgarisation de l'Université du Missouri G8351 : démarrer et élever les poussins (température par semaine, comportement des poussins)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO : Bonnes pratiques de biosécurité dans les petits élevages de volailles commerciaux et villageois au Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "Organisation mondiale de la santé animale (WOAH) : la maladie de Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "Organisation mondiale de la santé animale (WOAH) : l'influenza aviaire", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS : l'influenza aviaire (signes chez les oiseaux)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (registre des vétérinaires et des para-professionnels vétérinaires)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (registre des vétérinaires)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO : Utilisation prudente et efficace des antimicrobiens chez les porcs et les volailles (vétérinaires, plans sanitaires, délais d'attente)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-fr",
  lang: "fr",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Aviculture commerciale",
  skills: "Choisir des poulets de chair, des pondeuses ou des poulets locaux améliorés, Préparer le poulailler et démarrer les poussins, Nourrir et abreuver selon le stade, Suivre un programme de vaccination et la biosécurité de la bande avec le vétérinaire, Manipuler les œufs et tenir les registres de la bande, Calculer le coût d'une bande et le seuil de rentabilité",
  outcome: "planifier et conduire une bande de volailles rentable : choisir des poulets de chair, des pondeuses ou des poulets locaux améliorés selon votre marché, préparer le poulailler et démarrer les poussins, les nourrir et les abreuver selon le stade, suivre un programme de vaccination fixé avec votre vétérinaire et une biosécurité stricte, manipuler les œufs et tenir des registres, et calculer le coût de la bande pour connaître votre prix de revient.",
  about: [
    "Ce cours s'adresse aux éleveurs, aux jeunes agripreneurs, aux ouvriers agricoles et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, au Sénégal, en Côte d'Ivoire et partout en Afrique qui veulent créer ou agrandir une activité avicole avec des poulets de chair, des pondeuses ou des poulets locaux améliorés.",
    "Le chapitre 1 met en place la bande : choisir le type de volaille, le poulailler, l'espace et le démarrage des poussins, et l'alimentation et l'eau. Le chapitre 2 la conduit de façon rentable : un programme de vaccination avec votre vétérinaire et la biosécurité de la bande, la manipulation des œufs et les registres, et les comptes d'une bande : coût par oiseau ou par plateau, mortalité et seuil de rentabilité.",
    "Ce cours fait suite à \"Santé et conduite de l'élevage\", qui couvre l'examen de santé quotidien et les bases de la maladie de Newcastle. Il ne donne aucune dose de vaccin ou de médicament : suivez toujours votre vétérinaire et l'étiquette. Tous les prix sont des exemples inventés ; utilisez les vôtres. Chaque leçon dure environ cinq minutes et se termine par une tâche. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan chiffré pour une bande dans votre ferme (ou pour un exemple comme 500 poulets de chair près de Thika, 300 pondeuses près d'Ibadan, 200 poulets Kenbro ou Kuroiler près de Tamale, ou 1 000 poulets de chair près de Thiès) : le type de volaille et pourquoi ; la taille du poulailler et combien d'oiseaux il peut recevoir ; votre installation de démarrage ; les aliments par stade et la quantité que vous pensez acheter ; le programme de vaccination convenu avec votre vétérinaire et vos règles de biosécurité ; les registres que vous tiendrez ; et une fiche de coûts avec chaque dépense, une mortalité prévue, le coût par oiseau vendu ou par plateau d'œufs, et votre prix de revient.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Éleveurs, jeunes agripreneurs, ouvriers agricoles et agents de vulgarisation d'Afrique de l'Est, de l'Ouest et du Centre (y compris les pays francophones) qui créent ou agrandissent une activité avicole de quelques centaines à quelques milliers d'oiseaux.",
    startingPoint: "Beaucoup ont quelques poulets de village ou ont déjà élevé une bande. La plupart achètent poussins et aliments sans plan écrit, démarrent les poussins au jugé, comptent sur le vendeur de produits vétérinaires pour les vaccins, tiennent peu de registres et ne connaissent pas leur coût par oiseau ou par plateau ; ils ne peuvent donc pas savoir si une bande a rapporté de l'argent.",
    gap: "La volaille peut rapporter vite, mais beaucoup de poussins morts au démarrage, les épidémies, l'aliment gaspillé et la vente à perte effacent les bénéfices. Les éleveurs qui planifient la bande, démarrent bien les poussins, vaccinent selon le programme du vétérinaire, tiennent des registres et connaissent leur prix de revient perdent moins d'oiseaux et peuvent fixer leurs prix et vendre en confiance.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; seulement du calcul simple ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : papier et stylo ou la calculatrice du téléphone ; un tableur sur le téléphone est facultatif",
      "Argent : les prix en KES, NGN, GHS et XOF sont des exemples inventés ; les apprenants utilisent les prix locaux",
      "Règles de santé animale : aucune dose de vaccin ou de médicament et aucun délai d'attente en chiffres ; suivre le vétérinaire et l'étiquette",
      "L'influenza aviaire est à déclaration obligatoire : les cas suspects sont signalés tout de suite au vétérinaire ou à l'autorité vétérinaire"
    ],
    prerequisites: "Les soins de base aux animaux et le calcul simple. Il est conseillé de suivre d'abord \"Santé et conduite de l'élevage\" ; \"Alimentation du bétail et formulation des rations\" aide pour le coût des aliments."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "En tenant compte de votre marché, de votre argent et de votre temps", action: "choisir des poulets de chair, des pondeuses ou des poulets locaux améliorés et donner vos raisons", standard: "en citant au moins trois raisons adaptées à votre ferme et à vos acheteurs" },
    { id: "O2", condition: "Avant l'arrivée des poussins et pendant le démarrage", action: "préparer le poulailler, fixer le nombre d'oiseaux selon l'espace et régler la chaleur de l'éleveuse en observant les poussins", standard: "avec le poulailler prêt un jour avant et les poussins bien répartis sous la chaleur" },
    { id: "O3", condition: "Pour chaque stade de votre bande", action: "prévoir le type d'aliment, les dates de changement et l'approvisionnement en eau", standard: "avec de l'eau propre disponible en permanence et tous les stades couverts" },
    { id: "O4", condition: "Avec votre vétérinaire ou votre agent de santé animale", action: "écrire un programme de vaccination et les règles de biosécurité de la bande, et noter chaque vaccination", standard: "avec chaque date de vaccin fixée par le vétérinaire et aucun vaccin donné hors programme" },
    { id: "O5", condition: "Chaque jour de la bande", action: "ramasser et stocker correctement les œufs et noter les oiseaux, les morts, l'aliment, les œufs et les traitements", standard: "sans aucun jour manquant dans le registre" },
    { id: "O6", condition: "Avec vos prix locaux et la mortalité prévue", action: "calculer le coût par oiseau vendu ou par plateau et le prix de revient d'une bande", standard: "avec tous les coûts comptés et des calculs justes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Mettre en place la bande",
      lessons: [
        {
          title: "Poulets de chair, pondeuses ou poulets locaux améliorés",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir le type de volaille adapté à votre marché, à votre argent et à votre temps.",
          text: [
            "Les poulets de chair sont sélectionnés pour la viande. Ils grandissent très vite et sont souvent vendus en 5 à 7 semaines environ, selon la souche et le poids que veulent les acheteurs. L'argent revient vite, mais ils ont besoin d'un aliment de haute qualité, d'un suivi rapproché et d'un acheteur prêt le jour où ils sont prêts : chaque jour de plus mange l'aliment et le bénéfice.",
            "Les pondeuses sont sélectionnées pour les œufs. Elles commencent à pondre vers 4 à 5 mois et pondent pendant plus d'un an : vous les nourrissez donc pendant des mois avant tout revenu, et il vous faut un marché d'œufs régulier. Les poulets locaux améliorés, ou à double usage, se situent entre les deux : ils sont plus résistants que les poulets de chair et les pondeuses, peuvent picorer dehors avec un peu d'aliment en plus, et se vendent pour la viande et pour les œufs, souvent à un meilleur prix par oiseau, mais ils grandissent et pondent moins que les hybrides commerciaux.",
            "Exemples : le Kenbro, vendu par Kenchic au Kenya, est un oiseau à double usage ; Kenchic dit qu'il est prêt pour la viande vers 10 à 14 semaines ou pond à partir de 25 semaines environ, mais qu'il n'atteindra pas la production des poulets de chair ou des pondeuses spécialisés. Le Kuroiler, créé en Inde, est un oiseau à double usage qui cherche sa nourriture dehors ; une étude en Ouganda a montré que les Kuroilers devenaient plus lourds que les poulets locaux dans les conditions du village. N'achetez une souche que dans un couvoir auquel votre service de l'élevage ou votre vétérinaire fait confiance, et demandez à d'autres éleveurs comment elle a marché chez eux."
          ],
          steps: ["Écrivez qui va acheter : oiseaux vivants, viande, œufs, hôtels, marchés.", "Écrivez combien d'argent vous pouvez dépenser avant les premiers revenus.", "Écrivez combien de temps vous pouvez donner chaque jour.", "Comparez poulets de chair, pondeuses et poulets locaux améliorés avec vos listes.", "Choisissez-en un, avec trois raisons, et un couvoir de confiance."],
          words: [["Poulet de chair", "un poulet sélectionné pour grandir vite et donner de la viande."], ["Pondeuse", "une poule sélectionnée pour pondre beaucoup d'œufs."], ["Poulet local amélioré", "un oiseau à double usage plus résistant, issu des races locales ou adapté aux conditions locales, élevé pour la viande et les œufs."], ["Couvoir", "une entreprise qui fait éclore et vend des poussins d'un jour."]],
          slides: [
            { title: "Les poulets de chair", bullets: ["Viande ; souvent vendus en 5 à 7 semaines environ", "Argent rapide ; bon aliment et suivi rapproché", "Il faut un acheteur prêt le jour même"] },
            { title: "Les pondeuses", bullets: ["Œufs ; début de ponte vers 4 à 5 mois", "Des mois d'aliment avant tout revenu", "Il faut un marché d'œufs régulier"] },
            { title: "Les poulets locaux améliorés", bullets: ["Plus résistants ; picorent dehors avec un complément", "Viande et œufs, souvent meilleur prix par oiseau", "Exemples : Kenbro (Kenchic), Kuroiler (venu d'Inde)"] },
            { title: "Bien choisir et bien acheter", bullets: ["Adapté au marché, à l'argent et au temps", "Seulement un couvoir de confiance", "Demandez aux éleveurs qui ont eu cette souche"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Écrivez vos trois listes : acheteurs, argent disponible avant les revenus, et temps par jour. Choisissez poulets de chair, pondeuses ou poulets locaux améliorés et écrivez trois raisons, plus le nom d'un couvoir auquel votre service de l'élevage ou votre vétérinaire fait confiance.",
          youCanNow: "choisir des poulets de chair, des pondeuses ou des poulets locaux améliorés adaptés à votre marché, à votre argent et à votre temps.",
          quickCheck: [
            { objective: "O1", q: "Un éleveur a peu d'argent pour attendre et un hôtel qui achète des poulets de chair toutes les six semaines. Quel type lui convient le mieux ?", options: ["Les pondeuses", "Les poulets de chair", "Les canards", "Des poulets de village laissés à picorer"], answer: 1, why: "Les poulets de chair se vendent en quelques semaines, ce qui correspond à un acheteur régulier de viande et à une attente courte avant le revenu." },
            { objective: "O1", q: "Que dit Kenchic du Kenbro par rapport aux poulets de chair et aux pondeuses spécialisés ?", options: ["Il grandit plus vite que les poulets de chair", "Il pond plus que les pondeuses", "Il n'atteindra pas leur niveau de production", "Il n'a besoin d'aucun aliment"], answer: 2, why: "Le Kenbro est plus résistant et à double usage, mais il n'égale pas la production des hybrides spécialisés." }
          ]
        },
        {
          title: "Le poulailler, l'espace et le démarrage des poussins",
          objectives: ["O2"],
          minutes: 6,
          goal: "Préparer le poulailler, fixer le nombre d'oiseaux selon l'espace et démarrer les poussins à la bonne chaleur.",
          text: [
            "Un bon poulailler est sec, aéré et sûr. Dans les zones chaudes, des côtés ouverts avec un grillage solide laissent passer l'air ; un poulailler long est souvent orienté est-ouest pour que le soleil entre moins, avec un toit qui déborde pour arrêter la pluie. Utilisez une litière épaisse et sèche, comme des copeaux de bois ou des balles de riz. Empêchez d'entrer les rats, les serpents, les oiseaux sauvages et les voleurs. Avant l'arrivée des poussins, nettoyez et désinfectez le poulailler vide et le matériel, et laissez-le vide pendant le vide sanitaire que conseille votre vétérinaire.",
            "L'espace : trop d'oiseaux entraîne un coup de chaleur, une litière mouillée, du picage et des maladies. Votre couvoir, le guide de la souche ou votre agent de vulgarisation donne le nombre d'oiseaux par mètre carré pour votre souche, l'âge et le bâtiment. Multipliez la surface au sol par ce nombre. À titre d'exemple seulement : un poulailler de 5 m sur 8 m fait 40 mètres carrés ; si votre guide dit 10 poulets de chair par mètre carré à l'âge de la vente, il reçoit 400 poulets de chair, pas 500.",
            "Le démarrage : les poussins d'un jour ne peuvent pas se tenir chaud tout seuls. Installez une garde (un cercle de carton ou de tôle) avec de la litière, une source de chaleur (éleveuse au gaz ou électrique, ampoules, ou réchaud à charbon avec une bonne aération, car les fumées du charbon peuvent tuer), des mangeoires et des abreuvoirs, et chauffez avant l'arrivée des poussins. La vulgarisation de l'Université du Missouri indique environ 32 à 35 °C sous l'éleveuse la première semaine, puis environ 3 °C de moins chaque semaine. Observez les poussins : serrés sous la chaleur, ils ont froid ; loin et haletants, ils ont trop chaud ; entassés d'un seul côté, il y a un courant d'air ; bien répartis, c'est parfait."
          ],
          steps: ["Nettoyez et désinfectez le poulailler vide et le matériel ; faites le vide sanitaire conseillé par le vétérinaire.", "Étalez une litière épaisse et sèche.", "Calculez combien d'oiseaux la surface peut recevoir d'après le guide de votre souche.", "Installez la garde, la source de chaleur, les mangeoires et les abreuvoirs.", "Chauffez avant l'arrivée des poussins.", "Observez les poussins plusieurs fois par jour et réglez la chaleur."],
          words: [["Démarrage", "garder les jeunes poussins au chaud et nourris pendant leurs premières semaines."], ["Garde", "un cercle de carton ou de tôle qui garde les poussins près de la chaleur, de l'aliment et de l'eau."], ["Litière", "une couche sèche sur le sol, comme des copeaux de bois ou des balles de riz."], ["Densité", "le nombre d'oiseaux par mètre carré de sol."]],
          slides: [
            { title: "Un bon poulailler", bullets: ["Sec, aéré, côtés ouverts grillagés s'il fait chaud", "Toit qui déborde ; souvent orienté est-ouest", "Litière épaisse et sèche ; ni rats ni oiseaux sauvages"] },
            { title: "L'espace", bullets: ["Trop d'oiseaux = coup de chaleur, litière mouillée, maladies", "Oiseaux par mètre carré selon le guide de la souche", "Exemple : 40 mètres carrés x 10 = 400 poulets de chair"] },
            { title: "Installer le démarrage", bullets: ["Garde, chaleur, mangeoires et abreuvoirs", "Chauffez avant l'arrivée des poussins", "Charbon : bonne aération, les fumées peuvent tuer"] },
            { title: "Lire les poussins", bullets: ["Environ 32 à 35 °C au début, environ 3 °C de moins chaque semaine", "Serrés = froid ; loin = trop chaud", "Entassés d'un côté = courant d'air ; répartis = parfait"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Mesurez votre poulailler (ou un poulailler prévu) et calculez la surface au sol. Demandez à votre couvoir ou à votre agent de vulgarisation combien d'oiseaux par mètre carré pour votre souche, et écrivez combien d'oiseaux il peut recevoir. Dessinez votre installation de démarrage.",
          youCanNow: "préparer un poulailler, fixer le nombre d'oiseaux selon son espace, et démarrer les poussins en observant leur comportement.",
          quickCheck: [
            { objective: "O2", q: "Vos poussins sont tous serrés sous l'éleveuse. Qu'est-ce que cela veut dire ?", options: ["Ils ont trop chaud", "Ils ont faim", "Ils sont prêts à quitter la garde", "Ils ont froid ; ajoutez de la chaleur ou bouchez les courants d'air"], answer: 3, why: "Se serrer sous la chaleur veut dire que les poussins ont froid." },
            { objective: "O2", q: "Votre poulailler mesure 6 m sur 5 m. Le guide dit 10 oiseaux par mètre carré. Combien d'oiseaux ?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = 30 mètres carrés, x 10 = 300 oiseaux." }
          ]
        },
        {
          title: "L'alimentation et l'eau selon le stade",
          objectives: ["O3"],
          minutes: 5,
          goal: "Prévoir l'aliment de chaque stade, le moment de le changer et un approvisionnement constant en eau propre.",
          text: [
            "L'aliment est la plus grosse dépense d'une bande : donnez le bon aliment au bon stade. Poulets de chair : aliment démarrage, puis aliment finition (certains programmes ajoutent une croissance). Pondeuses : aliment poussin, puis aliment poulette, puis aliment ponte à partir de l'entrée en ponte, qui contient le calcium en plus dont les poules ont besoin pour des coquilles solides. Poulets locaux améliorés : suivez le guide du couvoir ; en semi-liberté, ils ont quand même besoin d'un aliment équilibré en plus de ce qu'ils picorent pour bien grandir et bien pondre. Changez d'aliment sur quelques jours en mélangeant l'ancien et le nouveau.",
            "Achetez l'aliment chez un fabricant de confiance, vérifiez que le sac est étiqueté, sec et pas périmé, et stockez-le sur des palettes dans un endroit sec. Mettez assez de mangeoires pour que tous les oiseaux mangent en même temps, montez-les à la hauteur du dos des oiseaux à mesure qu'ils grandissent, et ne les remplissez pas à ras bord, car les oiseaux grattent, jettent l'aliment et le gaspillent.",
            "L'eau compte plus que l'aliment : les poulets boivent plus d'eau qu'ils ne mangent d'aliment, et ils arrêtent de manger et de pondre quand l'eau manque ou devient chaude. Donnez de l'eau propre et fraîche en permanence, avec assez d'abreuvoirs, nettoyés chaque jour. Une baisse brusque de la consommation d'eau est souvent le premier signe de maladie. Si vous donnez un vaccin ou un médicament dans l'eau, suivez exactement le vétérinaire et l'étiquette ; certains demandent une eau sans chlore ni désinfectant."
          ],
          steps: ["Écrivez les stades de votre type de volaille.", "Écrivez l'aliment de chaque stade et l'âge du changement.", "Prévoyez assez de mangeoires et d'abreuvoirs pour tous les oiseaux en même temps.", "Montez mangeoires et abreuvoirs quand les oiseaux grandissent ; ne les remplissez pas trop.", "Nettoyez les abreuvoirs chaque jour ; ne laissez jamais l'eau manquer.", "Notez la consommation d'eau chaque jour ; une baisse brusque veut dire : appelez le vétérinaire."],
          words: [["Aliment démarrage", "le premier aliment, riche en protéines, pour les jeunes poussins."], ["Aliment finition", "le dernier aliment des poulets de chair avant la vente."], ["Aliment ponte", "un aliment pour poules pondeuses avec du calcium en plus pour la coquille."], ["Entrée en ponte", "l'âge où les jeunes poules vont commencer à pondre."]],
          slides: [
            { title: "Les aliments par stade", bullets: ["Poulets de chair : démarrage, puis finition", "Pondeuses : poussin, poulette, puis ponte", "Changez sur quelques jours"] },
            { title: "Bien acheter et bien utiliser l'aliment", bullets: ["Fabricant de confiance ; étiqueté, sec, pas périmé", "Assez de mangeoires ; montez-les avec la croissance", "Pas à ras bord : en grattant, ils gaspillent"] },
            { title: "L'eau d'abord", bullets: ["Les oiseaux boivent plus qu'ils ne mangent", "Eau propre et fraîche en permanence", "Baisse brusque de l'eau bue = signal d'alerte"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Faites un tableau d'alimentation pour votre bande : stade, âge, type d'aliment, et à peu près combien de sacs vous pensez acheter (demandez à votre fournisseur d'aliments ou au couvoir). Ajoutez combien de mangeoires et d'abreuvoirs il vous faut et qui nettoie les abreuvoirs chaque jour.",
          youCanNow: "prévoir le bon aliment pour chaque stade, le moment de le changer, et un approvisionnement constant en eau propre.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi les poules en ponte ont-elles besoin d'aliment ponte plutôt que d'aliment poulette ?", options: ["Il est moins cher", "Il les fait grandir plus", "Il contient le calcium en plus nécessaire pour des coquilles solides", "Il remplace l'eau"], answer: 2, why: "Les poules en ponte ont besoin de calcium en plus pour la coquille, et l'aliment ponte le leur donne." },
            { objective: "O3", q: "Vos poulets de chair boivent brusquement beaucoup moins d'eau qu'hier. Qu'est-ce que cela laisse penser ?", options: ["Ils tombent peut-être malades ; examinez-les et appelez le vétérinaire", "Ils sont en bonne santé et rassasiés", "L'aliment est trop bon", "Il est temps de les vendre"], answer: 0, why: "Une baisse brusque de la consommation d'eau est souvent le premier signe de maladie." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Mettre en place la bande",
        questions: [
          { objective: "O1", q: "Quel est un risque important avec les poulets de chair ?", options: ["Ils mettent deux ans avant d'être vendus", "Ils pondent trop d'œufs", "On ne peut pas les manger", "Chaque jour de plus avant la vente mange l'aliment et le bénéfice, donc il faut un acheteur prêt"], answer: 3, why: "Les poulets de chair continuent de manger ; tout retard de vente fait vite baisser le bénéfice." },
          { objective: "O1", q: "Qu'est-ce qui est vrai pour les poulets locaux améliorés comme le Kuroiler ?", options: ["Ils sont plus résistants et à double usage, mais produisent moins que les hybrides spécialisés", "Ils n'ont pas besoin d'eau", "Ils sont seulement pour les œufs", "Ce sont les poulets de chair qui grandissent le plus vite"], answer: 0, why: "Les oiseaux à double usage échangent un peu de production contre la résistance et l'usage pour la viande et les œufs." },
          { objective: "O2", q: "Les poussins sont loin de l'éleveuse et halètent. Que faites-vous ?", options: ["Ajouter de la chaleur", "Bloquer tout l'air", "Baisser la chaleur ou remonter l'éleveuse", "Ajouter des poussins"], answer: 2, why: "S'éloigner et haleter veut dire que les poussins ont trop chaud." },
          { objective: "O2", q: "Quand devez-vous chauffer la garde ?", options: ["Après l'arrivée des poussins", "Avant l'arrivée des poussins", "Seulement la nuit en semaine 3", "Jamais ; les poussins se réchauffent seuls"], answer: 1, why: "Les poussins d'un jour ont besoin de chaleur dès leur arrivée." },
          { objective: "O3", q: "Comment devez-vous passer d'un aliment au suivant ?", options: ["Du jour au lendemain", "En arrêtant d'abord de nourrir pendant un jour", "Seulement quand les oiseaux ont l'air maigres", "Sur quelques jours, en mélangeant l'ancien et le nouveau"], answer: 3, why: "Un changement progressif ne perturbe pas l'appétit ni la digestion des oiseaux." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conduire une bande rentable",
      lessons: [
        {
          title: "Un programme de vaccination et la biosécurité de la bande",
          objectives: ["O4"],
          minutes: 6,
          goal: "Écrire un programme de vaccination avec votre vétérinaire et fixer les règles de biosécurité de la bande.",
          text: [
            "La vaccination protège la bande des maladies courantes dans votre zone. Quels vaccins, à quel âge et comment les donner (dans l'eau de boisson, en goutte dans l'œil, en injection ou par piqûre dans l'aile) doivent être fixés par un vétérinaire ou un agent de santé animale enregistré, car les maladies changent selon la zone et la saison. En Afrique, on trouve souvent la maladie de Newcastle et la maladie de Gumboro, ainsi que la maladie de Marek (souvent faite au couvoir) et la variole aviaire ; votre vétérinaire peut en ajouter d'autres. Demandez au couvoir la liste de ce que les poussins ont déjà reçu.",
            "Faites que les vaccins marchent : achetez-les chez un vendeur de produits vétérinaires agréé, vérifiez la date de péremption, gardez-les au frais de la boutique jusqu'aux oiseaux, donnez-les exactement comme le disent l'étiquette et le vétérinaire, vaccinez toute la bande, et notez dans vos registres la date, le vaccin, le numéro de lot et la méthode. Ne soignez jamais vous-même des oiseaux malades avec des antibiotiques : le vétérinaire décide, et vous notez le délai d'attente indiqué sur l'étiquette pour qu'aucun œuf ni aucune viande ne soit vendu avant la fin.",
            "La biosécurité de la bande : achetez les poussins dans un seul couvoir de confiance et conduisez le poulailler en bande unique (tous les oiseaux du même âge, qui entrent ensemble et sortent ensemble). Entre deux bandes, enlevez toute la litière, lavez et désinfectez le poulailler et le matériel, et laissez-le vide pendant le vide sanitaire que conseille votre vétérinaire. Pas de visiteurs, un pédiluve et des bottes de la ferme, pas d'oiseaux sauvages ni de rats, et ne ramenez jamais d'oiseaux du marché. L'influenza aviaire est à déclaration obligatoire : des morts brusques, des crêtes gonflées et violettes, des halètements ou une forte chute de ponte veulent dire : gardez les oiseaux enfermés, arrêtez toute vente et tout déplacement, et appelez tout de suite le vétérinaire."
          ],
          steps: ["Demandez au couvoir quels vaccins les poussins ont déjà reçus.", "Asseyez-vous avec votre vétérinaire et écrivez le programme : maladie, âge, méthode.", "Achetez les vaccins chez un vendeur agréé ; vérifiez la péremption ; gardez-les au frais.", "Vaccinez toute la bande exactement comme le disent l'étiquette et le vétérinaire ; notez-le.", "Bande unique ; nettoyez, désinfectez et faites le vide sanitaire entre les bandes.", "Influenza aviaire ou Newcastle suspectée : oiseaux enfermés, ventes arrêtées, appelez le vétérinaire."],
          words: [["Programme de vaccination", "un plan écrit des vaccins que reçoit la bande, à quel âge et comment, fixé par le vétérinaire."], ["Bande unique", "tous les oiseaux d'un poulailler ont le même âge, entrent ensemble et sortent ensemble (en anglais all-in, all-out)."], ["Délai d'attente", "le temps après un médicament avant de pouvoir vendre les œufs ou la viande ; il est sur l'étiquette."], ["Vendeur de produits vétérinaires agréé", "une boutique autorisée par la loi à vendre des médicaments et des vaccins pour animaux."]],
          slides: [
            { title: "Le vétérinaire fixe le programme", bullets: ["Quels vaccins, à quel âge, quelle méthode", "Courants : Newcastle, Gumboro, Marek, variole aviaire", "Demandez au couvoir ce que les poussins ont déjà reçu"] },
            { title: "Faire que les vaccins marchent", bullets: ["Vendeur agréé ; vérifiez la péremption ; gardez au frais", "Exactement comme le disent l'étiquette et le vétérinaire ; toute la bande", "Notez date, vaccin, numéro de lot, méthode"] },
            { title: "La biosécurité de la bande", bullets: ["Un seul couvoir ; bande unique", "Nettoyer, désinfecter, vide sanitaire entre les bandes", "Pédiluve, bottes de la ferme, pas de visiteurs, pas d'oiseaux du marché"] },
            { title: "Influenza aviaire : signalez tout de suite", bullets: ["Morts brusques, crêtes violettes, halètements, chute de ponte", "Oiseaux enfermés ; arrêtez ventes et déplacements", "Appelez maintenant le vétérinaire ou le service vétérinaire"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Prenez rendez-vous avec votre vétérinaire ou votre agent de santé animale. Apportez un tableau avec les colonnes : maladie, âge, méthode, date donnée, numéro de lot. Remplissez-le avec le programme que fixe le vétérinaire. En dessous, écrivez cinq règles de biosécurité pour votre bande.",
          youCanNow: "écrire un programme de vaccination avec votre vétérinaire, noter chaque vaccination et appliquer une biosécurité stricte pour la bande.",
          quickCheck: [
            { objective: "O4", q: "Qui doit décider quels vaccins reçoit votre bande et quand ?", options: ["Le vendeur d'aliments", "Un vétérinaire ou un agent de santé animale enregistré", "Un voisin qui a des poules", "Un groupe sur les réseaux sociaux"], answer: 1, why: "Les maladies changent selon la zone, donc c'est un vétérinaire enregistré qui fixe le programme." },
            { objective: "O4", q: "Que veut dire la conduite en bande unique ?", options: ["Les oiseaux sortent picorer chaque jour", "Les visiteurs peuvent entrer et sortir librement", "On ajoute de nouveaux oiseaux chaque semaine", "Tous les oiseaux d'un poulailler entrent ensemble et sortent ensemble"], answer: 3, why: "Un seul âge par poulailler permet de le nettoyer et de faire un vrai vide sanitaire entre les bandes, ce qui casse le cycle des maladies." }
          ]
        },
        {
          title: "La manipulation des œufs et les registres de la bande",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ramasser et stocker correctement les œufs et tenir des registres quotidiens de la bande.",
          text: [
            "Les œufs perdent leur qualité et attrapent des microbes s'ils restent dans les nids. Ramassez au moins deux fois par jour, plus quand il fait chaud. Gardez les nids propres avec une litière fraîche pour que les œufs sortent propres. Mettez à part les œufs fêlés, sales et très petits. Nettoyez les œufs un peu sales avec un chiffon sec ; ne les trempez pas dans l'eau, qui peut faire entrer des microbes à travers la coquille. Rangez les œufs sur des plateaux, pointe en bas, dans un endroit frais, à l'ombre et aéré, loin des odeurs fortes, et vendez les plus anciens d'abord.",
            "Les registres vous disent ce qui se passe avant qu'il soit trop tard. Chaque jour, notez : nombre d'oiseaux, morts et cause probable, aliment utilisé, eau utilisée, et œufs ramassés (par plateau et par calibre). Notez aussi chaque vaccination et chaque traitement, la date de fin du délai d'attente indiquée sur l'étiquette, chaque achat et chaque vente. Un cahier suffit ; un tableur sur le téléphone fait les totaux pour vous.",
            "Servez-vous des registres. Taux de mortalité = oiseaux morts / oiseaux au départ x 100. Taux de ponte = œufs ramassés en un jour / poules x 100. Si les morts augmentent, si l'eau bue baisse ou si le taux de ponte chute brusquement, examinez la bande et appelez le vétérinaire. À la fin de la bande, les registres vous donnent les chiffres de votre fiche de coûts."
          ],
          steps: ["Ramassez les œufs au moins deux fois par jour.", "Mettez à part les œufs fêlés, sales et petits ; nettoyez à sec les œufs un peu sales.", "Rangez-les sur des plateaux, pointe en bas, au frais et à l'ombre ; les plus anciens d'abord.", "Chaque jour, notez les oiseaux, les morts, l'aliment, l'eau et les œufs.", "Notez les vaccinations, les traitements, les dates de fin du délai d'attente, les achats et les ventes.", "Calculez chaque semaine la mortalité et le taux de ponte, et cherchez les changements brusques."],
          words: [["Taux de mortalité", "la part des oiseaux morts, en pourcentage des oiseaux du départ."], ["Taux de ponte", "les œufs ramassés en un jour, en pourcentage du nombre de poules."], ["Calibrer", "trier les œufs selon leur taille et leur qualité."]],
          slides: [
            { title: "La manipulation des œufs", bullets: ["Ramassez au moins deux fois par jour", "Nids propres ; mettez à part les œufs fêlés et sales", "Nettoyez à sec ; ne trempez pas dans l'eau"] },
            { title: "Le stockage des œufs", bullets: ["Plateaux, pointe en bas", "Frais, à l'ombre, aéré, sans odeurs fortes", "Vendez les plus anciens d'abord"] },
            { title: "Les registres quotidiens", bullets: ["Oiseaux, morts et cause, aliment, eau, œufs", "Vaccinations, traitements, fins de délai d'attente", "Chaque achat et chaque vente"] },
            { title: "Se servir des chiffres", bullets: ["Mortalité = morts / départ x 100", "Taux de ponte = œufs du jour / poules x 100", "Changement brusque : examinez la bande, appelez le vétérinaire"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Faites une page de registre quotidien avec les colonnes : date, oiseaux, morts et cause, aliment utilisé, eau utilisée, œufs ramassés, remarques. Remplissez une semaine d'exemple. Calculez ensuite le taux de mortalité et, pour les pondeuses, le taux de ponte d'une journée.",
          youCanNow: "ramasser et stocker correctement les œufs et tenir des registres quotidiens qui montrent la mortalité et le taux de ponte.",
          quickCheck: [
            { objective: "O5", q: "Comment faut-il ranger les œufs sur les plateaux ?", options: ["Pointe en haut, au soleil", "Pointe en bas, dans un endroit frais et à l'ombre", "Lavés et trempés d'abord", "À côté du pétrole et des oignons"], answer: 1, why: "Pointe en bas, au frais et à l'ombre, les œufs restent frais plus longtemps." },
            { objective: "O5", q: "Vous avez commencé avec 500 poulets de chair et 25 sont morts. Quel est le taux de mortalité ?", options: ["25 pour cent", "2,5 pour cent", "50 pour cent", "5 pour cent"], answer: 3, why: "25 / 500 x 100 = 5 pour cent." }
          ]
        },
        {
          title: "Les comptes d'une bande : coût par oiseau et seuil de rentabilité",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calculer le coût par oiseau ou par plateau et le prix de revient d'une bande.",
          text: [
            "Faites la liste de tous les coûts de la bande : poussins, aliment, vaccins et vétérinaire, litière, combustible ou électricité pour le démarrage, désinfectant, main-d'œuvre, transport et emballage. Exemple avec des prix inventés en shillings kényans (KES), 500 poulets de chair : poussins 50 000 ; aliment 122 500 ; vaccins et vétérinaire 5 000 ; litière, démarrage et électricité 8 000 ; transport et divers 6 500. Total : KES 192 000. Utilisez vos propres devis : les prix changent selon le lieu et la saison, et en NGN, GHS ou XOF la méthode est la même.",
            "La mortalité change tout, car les oiseaux morts ont quand même mangé. Si 5 pour cent meurent, vous vendez 475 oiseaux. Coût par oiseau vendu = 192 000 / 475 = KES 404. C'est votre prix de revient : si vous vendez en dessous, vous perdez de l'argent. Si 15 pour cent meurent, vous ne vendez que 425 oiseaux, et le prix de revient monte à environ KES 452. À un prix de vente de KES 550, 475 oiseaux rapportent 261 250, soit un bénéfice de 69 250. Pour savoir combien d'oiseaux vendre pour couvrir les coûts : 192 000 / 550 = 349,1, donc 350 oiseaux.",
            "Pondeuses : calculez par semaine. Exemple : 300 poules avec un taux de ponte de 80 pour cent donnent 300 x 0,8 x 7 = 1 680 œufs, soit 56 plateaux de 30. Si l'aliment et les autres coûts font KES 15 000 par semaine, le coût par plateau est de 15 000 / 56 = environ KES 268. Comparez-le avec le prix que paient les acheteurs. Avant de commencer, lisez aussi en entier tout prêt ou tout contrat avec un acheteur ou un fournisseur, et demandez conseil à une personne de confiance."
          ],
          steps: ["Faites la liste de tous les coûts de la bande avec vos prix locaux.", "Additionnez-les pour avoir le coût total.", "Estimez la mortalité et calculez combien d'oiseaux vous vendrez.", "Coût par oiseau = coût total / oiseaux vendus : votre prix de revient.", "Pondeuses : coût par plateau = coûts de la semaine / plateaux ramassés.", "Comparez avec le prix de vente ; calculez le bénéfice ou la perte."],
          words: [["Prix de revient (seuil de rentabilité)", "le prix par oiseau ou par plateau auquel les recettes couvrent juste tous les coûts."], ["Bénéfice", "les recettes moins tous les coûts."], ["Fiche de coûts", "la liste de tous les coûts de la bande avec les totaux."]],
          slides: [
            { title: "Listez tous les coûts", bullets: ["Poussins, aliment, vaccins et vétérinaire, litière, combustible", "Main-d'œuvre, transport, emballage", "Total d'exemple : KES 192 000 pour 500 poulets de chair"] },
            { title: "La mortalité augmente le coût par oiseau", bullets: ["5 pour cent de morts : 475 vendus, KES 404 chacun", "15 pour cent de morts : 425 vendus, environ KES 452 chacun", "Les oiseaux morts ont quand même mangé"] },
            { title: "Seuil de rentabilité et bénéfice", bullets: ["Prix de revient = coût total / oiseaux vendus", "À KES 550 : 475 x 550 - 192 000 = KES 69 250", "Oiseaux à vendre pour couvrir les coûts : 192 000 / 550 = 350"] },
            { title: "Pondeuses : coût par plateau", bullets: ["300 poules x 0,8 x 7 = 1 680 œufs = 56 plateaux", "KES 15 000 / 56 = environ KES 268 le plateau", "Les prix sont des exemples ; utilisez les vôtres"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan chiffré pour une bande : type de volaille, taille du poulailler et nombre d'oiseaux, installation de démarrage, aliments par stade, programme de vaccination et règles de biosécurité, registres, et une fiche de coûts avec chaque dépense, la mortalité prévue, le coût par oiseau vendu ou par plateau, et votre prix de revient.",
          youCanNow: "calculer le coût d'une bande, tenir compte de la mortalité, et trouver votre coût par oiseau ou par plateau et votre prix de revient.",
          quickCheck: [
            { objective: "O6", q: "Une bande coûte NGN 900 000 et vous pensez vendre 450 oiseaux. Quel est le prix de revient par oiseau ?", options: ["NGN 200", "NGN 450", "NGN 2 000", "NGN 20 000"], answer: 2, why: "900 000 / 450 = NGN 2 000 par oiseau." },
            { objective: "O6", q: "Pourquoi une mortalité plus forte augmente-t-elle votre coût par oiseau ?", options: ["Les oiseaux morts ont mangé et coûté de l'argent, mais ne sont pas vendus", "Les oiseaux morts se vendent plus cher", "L'aliment devient moins cher", "Les vaccins coûtent moins"], answer: 0, why: "Le même coût total est partagé entre moins d'oiseaux vendus." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conduire une bande rentable",
        questions: [
          { objective: "O4", q: "Avant d'acheter des vaccins, que devez-vous vérifier ?", options: ["Qu'ils sont les moins chers", "Qu'ils viennent d'un vendeur agréé, ne sont pas périmés et ont été gardés au frais", "Qu'ils n'ont pas d'étiquette", "Qu'un voisin en a en trop"], answer: 1, why: "Des vaccins périmés ou chauffés risquent de ne pas protéger la bande." },
          { objective: "O4", q: "Vos pondeuses meurent brusquement en grand nombre, avec des crêtes violettes. Que faites-vous ?", options: ["Vendre vite les œufs", "Donner des antibiotiques achetés en boutique", "Faire entrer de nouveaux oiseaux", "Garder les oiseaux enfermés, arrêter toute vente et tout déplacement, et appeler tout de suite le vétérinaire"], answer: 3, why: "Ces signes font penser à l'influenza aviaire, qui est à déclaration obligatoire et doit être signalée tout de suite." },
          { objective: "O5", q: "Pourquoi ramasser les œufs au moins deux fois par jour ?", options: ["Les œufs laissés dans les nids perdent leur qualité et attrapent des microbes", "Les poules pondent seulement la nuit", "Cela fait pondre les poules deux fois plus", "Les acheteurs préfèrent les œufs tièdes"], answer: 0, why: "Ramasser souvent garde les œufs propres et frais." },
          { objective: "O5", q: "250 poules ont pondu 200 œufs aujourd'hui. Quel est le taux de ponte ?", options: ["50 pour cent", "125 pour cent", "80 pour cent", "20 pour cent"], answer: 2, why: "200 / 250 x 100 = 80 pour cent." },
          { objective: "O6", q: "Les coûts des pondeuses font GHS 2 400 par semaine et vous ramassez 60 plateaux. Quel est le coût par plateau ?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2 400 / 60 = GHS 40 par plateau." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Aviculture commerciale",
    questions: [
      { objective: "O1", q: "Quel type de volaille donne un revenu le plus tôt ?", options: ["Les pondeuses", "Les poulets de chair", "Les coqs reproducteurs", "Les poulets locaux améliorés gardés pour les œufs"], answer: 1, why: "Les poulets de chair se vendent souvent en 5 à 7 semaines environ." },
      { objective: "O1", q: "De quoi les pondeuses ont-elles besoin, contrairement aux poulets de chair ?", options: ["D'un acheteur un jour fixe", "De pas d'aliment pendant des mois", "De mois d'alimentation avant tout revenu et d'un marché d'œufs régulier", "D'être vendues avant six semaines"], answer: 2, why: "Les pondeuses commencent à pondre seulement vers 4 à 5 mois, puis il leur faut des acheteurs d'œufs réguliers." },
      { objective: "O1", q: "Où devez-vous acheter les poussins d'un jour ?", options: ["Dans un couvoir auquel votre service de l'élevage ou votre vétérinaire fait confiance", "Chez n'importe quel vendeur au bord de la route", "Dans l'annonce en ligne la moins chère", "Dans une ferme qui a des oiseaux malades"], answer: 0, why: "Un couvoir de confiance donne des poussins sains de la bonne souche, avec la liste des vaccins faits." },
      { objective: "O2", q: "Les poussins s'entassent d'un côté de la garde, loin de l'éleveuse. Quelle est la cause probable ?", options: ["Trop de chaleur", "Trop d'aliment", "Ils ont sommeil", "Un courant d'air"], answer: 3, why: "S'entasser d'un côté, loin de la chaleur, fait penser à un courant d'air." },
      { objective: "O2", q: "Que se passe-t-il si vous mettez trop d'oiseaux dans un poulailler ?", options: ["Ils grandissent plus vite", "Coup de chaleur, litière mouillée, picage et maladies", "Ils ont besoin de moins d'eau", "Les œufs sont plus gros"], answer: 1, why: "Le surpeuplement nuit à la santé et à la croissance." },
      { objective: "O2", q: "Pourquoi une éleveuse à charbon doit-elle être bien aérée ?", options: ["Les fumées du charbon peuvent tuer les poussins et les personnes", "Pour rafraîchir les poussins", "Pour laisser entrer les oiseaux sauvages", "Pour économiser le charbon"], answer: 0, why: "Le charbon qui brûle dégage des fumées mortelles dans un espace fermé." },
      { objective: "O2", q: "Que devez-vous faire au poulailler avant l'arrivée d'une nouvelle bande ?", options: ["Ajouter les nouveaux oiseaux aux anciens", "Laisser la vieille litière pour la chaleur", "Le nettoyer, le désinfecter et faire le vide sanitaire conseillé par le vétérinaire", "Rien"], answer: 2, why: "Nettoyer, désinfecter et faire le vide sanitaire casse le cycle des maladies entre les bandes." },
      { objective: "O3", q: "Quel est l'ordre habituel des aliments pour les poulets de chair ?", options: ["Aliment ponte, puis démarrage", "Seulement de l'aliment poulette", "Aliment poussin, puis aliment ponte", "Démarrage, puis finition"], answer: 3, why: "Les poulets de chair commencent avec un démarrage riche en protéines et finissent avec l'aliment finition." },
      { objective: "O3", q: "Pourquoi ne pas remplir les mangeoires à ras bord ?", options: ["Les oiseaux grattent, jettent l'aliment et le gaspillent", "L'aliment refroidit", "Cela fait moins pondre les oiseaux", "Cela attire les vétérinaires"], answer: 0, why: "Des mangeoires trop pleines gaspillent l'aliment, la plus grosse dépense de la bande." },
      { objective: "O3", q: "Quel est souvent le premier signe que les oiseaux tombent malades ?", options: ["Ils pondent de plus gros œufs", "Leurs plumes deviennent blanches", "Une baisse brusque de l'eau bue", "Ils grandissent plus vite"], answer: 2, why: "Les oiseaux malades boivent moins, souvent avant que d'autres signes apparaissent." },
      { objective: "O4", q: "Quel est un vaccin avicole courant en Afrique, fixé par le vétérinaire ?", options: ["La maladie de Newcastle", "La rage", "La fièvre aphteuse", "La fièvre de la côte Est"], answer: 0, why: "Le vaccin contre la maladie de Newcastle est l'un des plus courants en aviculture ; le vétérinaire fixe le programme." },
      { objective: "O4", q: "Que devez-vous noter à chaque vaccination ?", options: ["Seulement le temps qu'il fait", "Rien ; le vendeur garde les registres", "Le prix des œufs", "La date, le vaccin, le numéro de lot et la méthode"], answer: 3, why: "Des registres complets montrent ce que la bande a reçu et aident le vétérinaire." },
      { objective: "O4", q: "Qui décide de donner des antibiotiques aux oiseaux malades ?", options: ["L'ouvrier de la ferme", "Le vétérinaire", "L'acheteur d'œufs", "Le vendeur d'aliments"], answer: 1, why: "Le vétérinaire décide, et vous notez la date de fin du délai d'attente indiquée sur l'étiquette." },
      { objective: "O5", q: "Comment nettoyer un œuf un peu sale ?", options: ["Le tremper dans l'eau", "Le frotter avec du savon", "L'essuyer avec un chiffon sec", "Le laisser dans le nid"], answer: 2, why: "Le nettoyage à sec évite de faire entrer des microbes à travers la coquille." },
      { objective: "O5", q: "Qu'est-ce qui doit figurer dans le registre quotidien de la bande ?", options: ["Oiseaux, morts, aliment, eau et œufs", "Seulement les œufs vendus", "Les ventes du voisin", "Rien si tout va bien"], answer: 0, why: "Les chiffres quotidiens montrent les problèmes tôt et alimentent la fiche de coûts." },
      { objective: "O5", q: "Vous avez démarré 1 000 poulets de chair et 80 sont morts. Quel est le taux de mortalité ?", options: ["80 pour cent", "0,8 pour cent", "12,5 pour cent", "8 pour cent"], answer: 3, why: "80 / 1 000 x 100 = 8 pour cent." },
      { objective: "O6", q: "Qu'est-ce que le prix de revient par oiseau ?", options: ["Le prix le plus haut du marché", "Le coût total divisé par le nombre d'oiseaux vendus", "Le prix d'un poussin", "Seulement le coût de l'aliment"], answer: 1, why: "À ce prix, les recettes couvrent juste tous les coûts." },
      { objective: "O6", q: "Une bande coûte XOF 1 500 000 et vous vendez 500 oiseaux à XOF 4 000. Quel est le bénéfice ?", options: ["XOF 2 000 000", "XOF 1 500 000", "XOF 500 000", "XOF 4 000"], answer: 2, why: "500 x 4 000 = 2 000 000 de recettes ; moins 1 500 000 de coût = XOF 500 000 de bénéfice." },
      { objective: "O6", q: "300 poules pondent à 80 pour cent pendant une semaine. Environ combien de plateaux de 30 œufs ?", options: ["56", "80", "240", "1 680"], answer: 0, why: "300 x 0,8 x 7 = 1 680 œufs ; 1 680 / 30 = 56 plateaux." },
      { objective: "O6", q: "Votre coût par oiseau vendu est de KES 404 et les acheteurs paient KES 380. Que se passe-t-il ?", options: ["Vous gagnez KES 24 par oiseau", "Vous êtes à l'équilibre", "Rien ; les prix n'ont pas d'importance", "Vous perdez environ KES 24 par oiseau"], answer: 3, why: "Vendre en dessous du prix de revient fait perdre de l'argent sur chaque oiseau." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie du plan et vérifiez-la à nouveau.",
    criteria: [
      { name: "Type de volaille et marché", objective: "O1", notYet: "Aucune raison au choix, ou aucun acheteur nommé.", meets: "Nomme le type de volaille, un couvoir de confiance et au moins trois raisons adaptées au marché, à l'argent et au temps.", exceeds: "Nomme un acheteur précis et le moment où il achète, et prévoit la bande en fonction." },
      { name: "Poulailler, espace et démarrage", objective: "O2", notYet: "Nombre d'oiseaux non calculé à partir de la surface, ou pas de plan de démarrage.", meets: "Surface x oiseaux par mètre carré selon le guide ; installation de démarrage avec la chaleur vérifiée d'après le comportement des poussins.", exceeds: "Couvre aussi le nettoyage, la désinfection et le vide sanitaire du poulailler, et une aération sûre pour la source de chaleur." },
      { name: "Plan d'alimentation et d'eau", objective: "O3", notYet: "Stades ou types d'aliment manquants, ou pas de plan pour l'eau.", meets: "Type d'aliment par stade, dates de changement, assez de mangeoires et d'abreuvoirs, et de l'eau propre en permanence.", exceeds: "Estime les sacs d'aliment par stade et nomme qui vérifie l'eau chaque jour." },
      { name: "Vaccination et biosécurité", objective: "O4", notYet: "Pas de vétérinaire, ou des doses inventées, ou pas de règles de biosécurité.", meets: "Programme fixé par un vétérinaire enregistré, et noté ; bande unique et au moins quatre règles de biosécurité ; signalement de l'influenza aviaire.", exceeds: "Donne le nom et le numéro du vétérinaire et la liste des vaccins faits au couvoir." },
      { name: "Registres", objective: "O5", notYet: "Pas de plan de registre quotidien.", meets: "Registre quotidien des oiseaux, des morts, de l'aliment, de l'eau et des œufs, plus les vaccinations, les traitements et les ventes.", exceeds: "Montre comment la mortalité et le taux de ponte seront vérifiés chaque semaine." },
      { name: "Fiche de coûts et seuil de rentabilité", objective: "O6", notYet: "Des coûts manquent, la mortalité est oubliée, ou les calculs sont faux.", meets: "Tous les coûts listés, la mortalité prise en compte, coût par oiseau ou par plateau et prix de revient justes.", exceeds: "Compare le prix de revient avec de vrais prix d'acheteurs et montre le bénéfice à deux niveaux de mortalité." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui conduisent leur bande suivante avec un plan écrit et des registres quotidiens (suivi à 30 jours)",
      "Mortalité par bande déclarée par les apprenants avant et après le cours",
      "Apprenants qui connaissent et peuvent dire leur coût par oiseau ou par plateau au moment de vendre",
      "Cas suspects d'influenza aviaire ou de maladie de Newcastle signalés par les apprenants au vétérinaire en moins d'un jour"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier, stylo et calculatrice du téléphone ; un tableur sur le téléphone est facultatif",
      "Un mètre ruban pour le poulailler",
      "Les prix locaux des poussins, de l'aliment, des vaccins et des autres dépenses, et le nom et le numéro d'un vétérinaire et d'un couvoir de confiance",
      "Environ 70 à 80 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Avant la séance, rassemblez les prix locaux des poussins, de l'aliment et des vaccins pour que les apprenants chiffrent une bande avec de vrais chiffres.",
      "Invitez un vétérinaire ou un agent de santé animale local à la séance du chapitre 2 pour présenter un programme de vaccination pour votre zone ; ne donnez jamais vous-même de doses de vaccin ou de médicament.",
      "Si vous visitez un élevage de volailles, suivez ses règles de biosécurité et ne visitez pas un autre élevage de volailles le même jour.",
      "Faites l'exemple du seuil de rentabilité au tableau, puis demandez aux binômes de chiffrer leur propre bande.",
      "Évaluez chaque plan de bande chiffré avec la grille et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
