"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-livestock-health.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const WOAH_ND = { name: "Organisation mondiale de la santé animale (WOAH) : la maladie de Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO : la maladie de Newcastle chez les poulets villageois", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO : Bonnes pratiques de biosécurité dans les petits élevages de volailles commerciaux et villageois au Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO : Utilisation prudente et efficace des antimicrobiens chez les porcs et les volailles (vétérinaires, plans sanitaires, délais d'attente)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (registre des vétérinaires)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-fr",
  lang: "fr",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Santé et conduite de l'élevage",
  skills: "Distinguer un animal en bonne santé d'un animal malade, Bien nourrir et abreuver, Garder les logements propres et sûrs, Planifier les vaccinations avec un vétérinaire, Protéger les volailles de la maladie de Newcastle, Lutter contre les parasites et tenir les registres sanitaires",
  outcome: "suivre un plan sanitaire simple pour vos bovins, vos chèvres ou vos volailles : examiner chaque animal tous les jours pour repérer les signes de maladie, bien les nourrir et les abreuver, garder les logements propres, suivre un calendrier de vaccination fait avec votre vétérinaire local, empêcher la maladie de Newcastle et les parasites d'entrer, noter chaque traitement, et savoir quand appeler le vétérinaire.",
  about: [
    "Ce cours s'adresse aux petits éleveurs et aux éleveurs en croissance, aux bergers, aux aviculteurs, aux ouvriers agricoles et aux jeunes agriculteurs au Kenya, au Nigeria, au Ghana et partout en Afrique qui élèvent des bovins, des chèvres, des moutons ou des poules. Les animaux en bonne santé grandissent plus vite, donnent plus de lait et d'œufs, et valent plus au marché ; une seule épidémie peut faire disparaître des années d'économies.",
    "Le chapitre 1 porte sur les soins de tous les jours : distinguer un animal en bonne santé d'un animal malade, l'alimentation et l'eau, et le logement et l'hygiène. Le chapitre 2 porte sur la prévention et le traitement : les calendriers de vaccination avec un vétérinaire, la biosécurité des volailles et la maladie de Newcastle, et les parasites, les registres et le moment d'appeler le vétérinaire.",
    "Ce cours ne donne pas de doses de médicaments ni de vaccins. Les maladies, les vaccins et les médicaments autorisés changent selon le pays et la zone : suivez toujours votre vétérinaire local ou votre agent de santé animale et l'étiquette du produit. Chaque leçon dure environ cinq minutes et se termine par une tâche avec vos propres animaux. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan sanitaire d'une page pour vos animaux (les vôtres, ou un exemple comme 3 vaches laitières à Kiambu, 15 chèvres à Kano, ou 200 pondeuses près de Kumasi) : votre examen de santé quotidien, votre plan d'alimentation et d'eau y compris pour la saison sèche, deux règles de logement et d'hygiène, le calendrier de vaccination convenu avec votre vétérinaire, vos règles de biosécurité (pour les volailles : la maladie de Newcastle), comment vous lutterez contre les vers et les tiques, les registres que vous tiendrez, et les signes qui veulent dire que vous appelez tout de suite le vétérinaire, avec son nom et son numéro.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des petits et moyens éleveurs, des bergers, des aviculteurs, des ouvriers agricoles et de jeunes agriculteurs au Kenya, au Nigeria, au Ghana et partout en Afrique qui élèvent des bovins, des chèvres, des moutons ou des poules.",
    startingPoint: "La plupart regardent leurs animaux chaque jour et soignent la maladie quand ils la voient, souvent avec des médicaments achetés sans l'avis d'un vétérinaire. Peu suivent un calendrier de vaccination écrit, appliquent des règles de biosécurité, notent les traitements et les délais d'attente, ou planifient l'alimentation et l'eau pour la saison sèche.",
    gap: "Une seule épidémie peut effacer des années d'économies, et une mauvaise alimentation, un logement sale, les parasites et un mauvais usage des médicaments réduisent le lait, les œufs et la croissance, et peuvent nuire aux personnes. Un plan de santé écrit simple, fait avec un vétérinaire, garde les animaux en bonne santé, évite les pertes et garde sûrs les aliments qui sortent de la ferme.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes ; chaque terme de santé animale est expliqué",
      "Appareils : un téléphone simple et un cahier pour les registres et le numéro du vétérinaire",
      "Aucune dose de médicament ou de vaccin : les maladies, les vaccins et les médicaments autorisés varient selon les zones ; les apprenants suivent leur vétérinaire et l'étiquette",
      "Sécurité : certaines maladies animales infectent l'homme ; n'ouvrez jamais une carcasse après une mort soudaine avec saignements",
      "Temps : des leçons d'environ 5 minutes qui s'adaptent aux soins des animaux"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pendant l'examen quotidien de vos animaux", action: "identifier les signes d'un animal en bonne santé et d'un animal malade, et isoler celui qui est peut-être malade", standard: "en nommant au moins cinq signes d'alerte et en contactant le vétérinaire ou l'agent de santé animale" },
    { id: "O2", condition: "Pour vos animaux toute l'année", action: "planifier l'alimentation et l'eau propre, y compris pendant la saison sèche", standard: "sans aliment moisi et avec des changements d'alimentation progressifs" },
    { id: "O3", condition: "Pour le logement de vos animaux", action: "vérifier le logement et fixer des règles d'hygiène pour la ferme", standard: "avec un logement sec, ombragé et pas surpeuplé, les nouveaux animaux tenus à part et les animaux malades isolés" },
    { id: "O4", condition: "Avec un vétérinaire enregistré ou un agent de santé animale", action: "convenir d'un calendrier de vaccination écrit et garder les vaccins au frais et non périmés", standard: "avec chaque vaccin, les animaux, l'âge et quand le répéter" },
    { id: "O5", condition: "Pour un élevage de volailles", action: "fixer des règles de biosécurité et un plan en cas d'épidémie de maladie de Newcastle", standard: "avec la vaccination selon le calendrier du vétérinaire et les étapes à suivre si des oiseaux meurent soudainement" },
    { id: "O6", condition: "Pour votre troupeau ou votre élevage de volailles", action: "planifier la lutte contre les parasites avec votre vétérinaire, tenir un registre des traitements et lister les signes qui demandent un vétérinaire tout de suite", standard: "en notant chaque traitement avec son délai d'attente" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les soins de tous les jours",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les signes d'un animal en bonne santé et d'un animal malade",
          minutes: 5,
          goal: "Faire un rapide examen de santé quotidien et repérer un animal qui est peut-être malade.",
          text: [
            "C'est vous qui connaissez le mieux vos animaux. Un coup d'œil chaque jour, au moment de nourrir ou de traire, permet de repérer la maladie tôt, quand elle coûte le moins cher à soigner et avant qu'elle se propage.",
            "Un animal en bonne santé est éveillé et curieux, se tient debout et marche normalement, mange et boit bien, et les bovins, les chèvres et les moutons ruminent quand ils se reposent. Les yeux sont brillants et clairs, le nez est propre, le pelage ou les plumes sont lisses et brillants, la respiration est calme, et les bouses et l'urine ont l'air normales. Une poule en bonne santé est active, a une crête rouge vif et pond comme d'habitude.",
            "Signes d'alerte : rester à l'écart du groupe, tête basse, ne pas manger ou ne pas ruminer, yeux ternes ou qui coulent, nez qui coule, toux ou respiration rapide, diarrhée ou sang dans les bouses, boiterie, gonflements, plaies, chute soudaine du lait ou des œufs, plumes ébouriffées, cou tordu chez les oiseaux, ou morts soudaines. Séparez l'animal malade des autres et contactez votre vétérinaire ou votre agent de santé animale."
          ],
          steps: ["Examinez chaque animal une fois par jour, au moment de nourrir ou de traire.", "Regardez : éveillé, debout et marche normale, mange, rumine.", "Regardez de plus près : yeux, nez, pelage ou plumes, respiration, bouses.", "Notez toute baisse du lait ou des œufs.", "Séparez tout animal qui montre des signes d'alerte.", "Écrivez ce que vous avez vu et appelez votre vétérinaire ou votre agent de santé animale."],
          words: [["Ruminer", "quand les bovins, les chèvres et les moutons font remonter la nourriture et la mâchent à nouveau ; un signe de bonne santé."], ["Isoler", "garder un animal malade à l'écart des autres."], ["Agent de santé animale", "un agent formé, public ou privé, qui aide les éleveurs pour la santé des animaux."]],
          slides: [
            { title: "En bonne santé", bullets: ["Éveillé, marche normalement, mange et boit", "Rumine ; yeux brillants, nez propre", "Pelage ou plumes lisses ; bouses normales"] },
            { title: "Signes d'alerte", bullets: ["Seul, tête basse, ne mange pas", "Yeux ou nez qui coulent, toux, diarrhée", "Boiterie, gonflements, moins de lait ou d'œufs"] },
            { title: "Agir tôt", bullets: ["Examinez chaque animal tous les jours", "Séparez tout animal malade", "Appelez votre vétérinaire ou votre agent de santé animale"] }
          ],
          tryIt: "Demain au moment de nourrir, examinez chaque animal avec la liste : éveillé, mange, rumine, yeux, nez, pelage, respiration, bouses. Écrivez une ligne par animal (ou par enclos pour les volailles). Marquez ceux que vous surveilleriez ou pour lesquels vous appelleriez le vétérinaire.",
          youCanNow: "faire un examen de santé quotidien et repérer les signes d'un animal malade.",
          quickCheck: [
            { objective: "O1", q: "Quel signe est une alerte chez une poule ?", options: ["Une crête rouge vif", "Une ponte normale", "Elle est active et mange bien", "Des plumes ébouriffées"], answer: 3, why: "Des plumes ébouriffées sont un signe d'alerte ; une poule en bonne santé est active, avec une crête rouge vif." },
            { objective: "O1", q: "Vous êtes occupé et prévoyez de vérifier vos animaux seulement une fois par semaine. Quel est le risque ?", options: ["Les animaux mangeront plus", "La maladie est repérée tard, quand elle coûte plus cher à soigner et s'est peut-être propagée", "Le lait sera meilleur", "Il n'y a aucun risque"], answer: 1, why: "Un coup d'œil quotidien repère la maladie tôt, quand elle coûte le moins cher à soigner et avant qu'elle se propage." }
          ]
        },
        {
          objectives: ["O2"],
          title: "L'alimentation et l'eau",
          minutes: 5,
          goal: "Prévoir l'alimentation et l'eau propre de vos animaux toute l'année, y compris pendant la saison sèche.",
          text: [
            "L'eau passe en premier. Les animaux ont besoin d'eau propre chaque jour, et de plus d'eau par temps chaud ; une vache en lactation boit beaucoup plus qu'une vache tarie, et la production de lait baisse vite sans assez d'eau. Gardez les abreuvoirs propres et à l'ombre, et ne laissez jamais les volailles boire de l'eau sale et stagnante.",
            "Les bovins, les chèvres et les moutons ont besoin de fourrage grossier (herbe, cultures fourragères comme l'herbe à éléphant ou Napier, le Rhodes, le desmodium ou la luzerne, et résidus de culture comme les tiges de maïs et les fanes de haricot), plus de l'énergie et des protéines pour les animaux qui donnent du lait, qui sont pleines ou qui grandissent. Les chèvres broutent aussi les arbustes et les feuilles d'arbres. Donnez des pierres à lécher ou du sel comme le conseille votre vétérinaire ou votre agent de vulgarisation. Les poules élevées pour les œufs ou la viande ont besoin d'un aliment équilibré ; les poules villageoises cherchent leur nourriture mais pondent et grandissent mieux avec un peu de grain en plus, de la verdure et de l'eau propre.",
            "Préparez la saison sèche : cultivez du fourrage, et gardez du foin, de l'ensilage ou des résidus de culture séchés quand il y en a beaucoup. Ne donnez jamais d'aliment moisi : la moisissure peut contenir de l'aflatoxine, qui fait du mal aux animaux et passe dans le lait et les œufs. Changez d'aliment lentement sur plusieurs jours pour éviter les troubles digestifs."
          ],
          steps: ["Donnez de l'eau propre chaque jour ; plus par temps chaud et pour les animaux en lactation.", "Nettoyez les abreuvoirs ; gardez-les à l'ombre.", "Prévoyez le fourrage grossier : pâturage, cultures fourragères et résidus de culture.", "Ajoutez énergie et protéines pour les animaux en lactation, pleines et en croissance.", "Stockez foin, ensilage ou résidus pour la saison sèche.", "Jetez l'aliment moisi ; changez d'aliment lentement."],
          words: [["Fourrage grossier", "un aliment volumineux comme l'herbe, le foin et les résidus de culture."], ["Culture fourragère", "une culture semée pour nourrir les animaux, comme l'herbe à éléphant ou la luzerne."], ["Ensilage", "du fourrage vert conservé à l'abri de l'air pour qu'il se garde des mois."], ["Pierre à lécher", "un bloc de sel et de minéraux que les animaux lèchent."]],
          slides: [
            { title: "L'eau d'abord", bullets: ["De l'eau propre chaque jour", "Plus par la chaleur et pour les animaux en lactation", "Abreuvoirs propres, à l'ombre"] },
            { title: "Nourrir", bullets: ["Fourrage grossier : herbe, fourrage, résidus de culture", "Énergie et protéines en plus pour le lait et la croissance", "Minéraux selon le conseil du vétérinaire"] },
            { title: "Prévoir et protéger", bullets: ["Stockez foin, ensilage ou résidus pour la saison sèche", "Jamais d'aliment moisi", "Changez d'aliment lentement"] }
          ],
          tryIt: "Listez les aliments que reçoivent vos animaux aujourd'hui et d'où vient chacun. Marquez ceux qui manquent en saison sèche et écrivez un moyen d'en stocker ou d'en cultiver plus avant. Vérifiez chaque abreuvoir aujourd'hui et nettoyez ceux qui sont sales.",
          youCanNow: "prévoir l'alimentation et l'eau propre de vos animaux toute l'année.",
          quickCheck: [
            { objective: "O2", q: "Lequel de ces aliments est un fourrage grossier pour les bovins ?", options: ["Les tiges de maïs et les fanes de haricot", "Seulement du sel", "Seulement une pierre à lécher", "De l'eau propre"], answer: 0, why: "Le fourrage grossier comprend l'herbe, les fourrages et les résidus de culture comme les tiges de maïs et les fanes de haricot." },
            { objective: "O2", q: "Par une journée chaude, l'abreuvoir de votre vache laitière est vide et sale. Que faites-vous ?", options: ["Attendre le soir", "Lui donner plus d'aliment sec à la place", "Le nettoyer et le remplir d'eau propre, à l'ombre", "La laisser boire dans une flaque"], answer: 2, why: "Les animaux ont besoin d'eau propre chaque jour, plus encore par temps chaud, et le lait baisse vite sans eau." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Le logement et l'hygiène",
          minutes: 5,
          goal: "Vérifier le logement de vos animaux et fixer trois règles d'hygiène pour votre ferme.",
          text: [
            "Un bon logement garde les animaux au sec, à l'ombre, à l'abri des voleurs et des prédateurs, et sans entassement. Il lui faut de l'air frais sans courants d'air froids, un sol sec qui s'égoutte, et assez de place pour que chaque animal puisse se coucher, manger et boire. Un logement entassé, humide et sale propage les maladies, les vers et les problèmes de pattes.",
            "Gardez-le propre : enlevez souvent les bouses et la litière mouillée (elles font un bon compost), nettoyez mangeoires et abreuvoirs, et luttez contre les mouches, les rats et les oiseaux sauvages. Pour les volailles, utilisez une litière sèche et changez-la quand elle est mouillée. Lavez-vous les mains après avoir touché les animaux, surtout les malades.",
            "Empêchez les maladies d'entrer et de sortir : gardez les nouveaux animaux à l'écart de votre troupeau pendant la durée que conseille votre vétérinaire avant de les mélanger, et gardez les animaux malades dans un enclos séparé. Certaines maladies animales touchent aussi les humains, comme la brucellose et la fièvre charbonneuse (charbon). Si un animal meurt brusquement avec du sang qui sort du nez ou d'autres ouvertures, n'ouvrez pas la carcasse ; éloignez les gens et les animaux et appelez tout de suite le vétérinaire. Éliminez les animaux morts comme le dit votre vétérinaire ou votre agent de santé animale."
          ],
          steps: ["Vérifiez le logement : sec, ombragé, aéré, bien drainé, sans entassement.", "Enlevez souvent les bouses et la litière mouillée.", "Nettoyez mangeoires et abreuvoirs ; luttez contre les mouches et les rats.", "Gardez les nouveaux animaux à l'écart avant de les mélanger, comme le conseille le vétérinaire.", "Gardez un enclos séparé pour les animaux malades.", "Lavez-vous les mains après avoir touché les animaux ; appelez le vétérinaire en cas de mort soudaine."],
          words: [["Litière", "un couchage sec, comme des copeaux de bois, sur le sol d'un poulailler."], ["Quarantaine", "garder à l'écart les animaux nouveaux ou malades pour empêcher la maladie de se propager."], ["Zoonose", "une maladie qui peut passer des animaux aux humains et inversement."], ["Carcasse", "le corps d'un animal mort."]],
          slides: [
            { title: "Un bon logement", bullets: ["Sec, ombragé, aéré, sans courants d'air", "Un sol qui s'égoutte", "De la place pour se coucher, manger et boire ; à l'abri des voleurs"] },
            { title: "Le garder propre", bullets: ["Enlevez souvent bouses et litière mouillée", "Nettoyez mangeoires et abreuvoirs", "Luttez contre mouches, rats et oiseaux sauvages"] },
            { title: "Empêcher la maladie d'entrer", bullets: ["Nouveaux animaux à l'écart avant le mélange", "Enclos séparé pour les animaux malades", "Lavez-vous les mains après"] },
            { title: "Mort soudaine", bullets: ["N'ouvrez pas la carcasse", "Éloignez les gens et les animaux", "Appelez tout de suite le vétérinaire"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Faites le tour de votre étable, de votre bergerie ou de votre poulailler avec la liste : sec, ombragé, aéré, drainé, sans entassement, abreuvoirs propres. Écrivez une chose à réparer cette semaine, et trois règles d'hygiène pour tous ceux qui travaillent avec vos animaux.",
          youCanNow: "vérifier le logement et le garder propre, garder à l'écart les animaux malades et nouveaux, et agir sans danger face à une mort soudaine.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi enlever souvent la bouse et la litière mouillée ?", options: ["Pour que les animaux mangent moins", "Pour économiser l'aliment", "Un logement sale et humide propage les maladies, les vers et les problèmes de pattes", "Pour que le logement paraisse vide"], answer: 2, why: "Un logement surpeuplé, humide et sale propage les maladies, les vers et les problèmes de pattes." },
            { objective: "O3", q: "La pluie est entrée dans votre poulailler et la litière est mouillée. Que faites-vous ?", options: ["Remplacer la litière mouillée par de la litière sèche et réparer la fuite", "La laisser sécher toute seule", "Mettre de l'aliment dessus", "Sortir les oiseaux sous la pluie"], answer: 0, why: "Les volailles ont besoin d'une litière sèche ; la litière mouillée est remplacée et la cause réparée." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les soins de tous les jours",
        questions: [
          { objective: "O1", q: "Lequel est un signe d'une vache ou d'une chèvre en bonne santé ?", options: ["Rester seule tête basse", "Ruminer en se reposant", "Les yeux et le nez qui coulent", "Ne pas boire"], answer: 1, why: "La rumination montre que l'estomac fonctionne normalement." },
          { objective: "O1", q: "Une chèvre ne mange pas et reste à l'écart du troupeau. Que faites-vous d'abord ?", options: ["J'attends une semaine", "Je la vends tout de suite", "Je la sépare et je contacte mon vétérinaire ou mon agent de santé animale", "Je lui donne n'importe quel médicament du magasin"], answer: 2, why: "L'isoler protège le troupeau, et le vétérinaire peut trouver la cause." },
          { objective: "O2", q: "Votre son de maïs a moisi. Que faut-il faire ?", options: ["Le jeter ; ne pas le donner aux animaux", "Le donner aux poules", "Le mélanger à un bon aliment", "Le donner seulement aux vaches laitières"], answer: 0, why: "La moisissure peut contenir de l'aflatoxine, qui fait du mal aux animaux et passe dans le lait et les œufs." },
          { objective: "O2", q: "Comment se préparer à la saison sèche ?", options: ["Vendre tous les abreuvoirs", "Donner du foin moisi", "Arrêter de donner de l'eau", "Cultiver du fourrage et stocker foin, ensilage ou résidus de culture"], answer: 3, why: "L'aliment stocké permet aux animaux de passer la saison sèche." },
          { objective: "O3", q: "Une vache meurt brusquement avec du sang qui sort du nez. Que faites-vous ?", options: ["Je l'ouvre pour voir la cause", "Je ne l'ouvre pas ; j'éloigne les gens et j'appelle tout de suite le vétérinaire", "Je vends vite la viande", "Je la laisse aux chiens"], answer: 1, why: "Une mort soudaine avec saignement peut être la fièvre charbonneuse, qui peut toucher les humains ; il ne faut pas ouvrir la carcasse." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Prévenir et soigner les maladies",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les calendriers de vaccination avec votre vétérinaire local",
          minutes: 5,
          goal: "Convenir d'un calendrier de vaccination écrit avec un vétérinaire enregistré et garder les vaccins efficaces.",
          text: [
            "Les vaccins préviennent beaucoup de maladies graves du bétail pour bien moins cher que le traitement. Les vaccins dont vos animaux ont besoin, et à quel moment, dépendent de votre pays, de votre zone et des maladies qui y sont présentes. Parmi les exemples courants : la fièvre aphteuse, la dermatose nodulaire contagieuse, la fièvre charbonneuse et le charbon symptomatique chez les bovins ; la peste des petits ruminants (PPR) chez les chèvres et les moutons ; et la maladie de Newcastle, la maladie de Gumboro et la variole aviaire chez les volailles. Seul un vétérinaire ou un agent de santé animale qui connaît votre zone peut donner le bon calendrier.",
            "Demandez à votre vétérinaire d'écrire un calendrier sur l'année : chaque vaccin, pour quels animaux, à quel âge, et quand le répéter. Faites appel à un vétérinaire enregistré ou à un agent de santé animale formé. Au Nigeria, le Veterinary Council of Nigeria tient le registre des vétérinaires ; au Kenya, le Kenya Veterinary Board enregistre les vétérinaires et les para-vétérinaires ; au Ghana, la Veterinary Services Directorate du ministère de l'Alimentation et de l'Agriculture gère les services de santé animale et les campagnes de vaccination. Les campagnes du gouvernement sont parfois gratuites ou peu chères, alors guettez les annonces.",
            "Les vaccins sont des produits vivants ou fragiles. Achetez-les seulement chez des vendeurs de produits vétérinaires agréés, vérifiez la date de péremption, gardez-les au frais (dans une glacière ou un réfrigérateur, à l'abri du soleil) du magasin jusqu'à l'animal, et utilisez-les comme le disent l'étiquette et le vétérinaire. Un vaccin qui a chauffé peut ne pas protéger vos animaux."
          ],
          steps: ["Demandez à un vétérinaire enregistré ou à un agent de santé animale quelles maladies sont un risque dans votre zone.", "Obtenez un calendrier écrit sur l'année : vaccin, animaux, âge, dates de rappel.", "Achetez les vaccins seulement chez des vendeurs agréés ; vérifiez les dates de péremption.", "Gardez les vaccins au frais du magasin jusqu'à l'animal.", "Utilisez-les exactement comme le disent l'étiquette et le vétérinaire.", "Notez chaque vaccination : date, animaux, vaccin, lot, qui l'a faite."],
          words: [["Vaccin", "un produit qui apprend au corps d'un animal à combattre une maladie avant qu'il tombe malade."], ["Calendrier de vaccination", "un calendrier qui dit quels vaccins donner, à quels animaux, et quand."], ["Chaîne du froid", "garder les vaccins au frais tout le long du chemin, du fabricant jusqu'à l'animal."], ["PPR", "la peste des petits ruminants, une maladie virale mortelle des chèvres et des moutons."]],
          slides: [
            { title: "Pourquoi vacciner", bullets: ["Prévenir coûte bien moins cher que soigner", "Les vaccins dépendent de votre zone", "Seul un vétérinaire local peut fixer le calendrier"] },
            { title: "Exemples courants", bullets: ["Bovins : fièvre aphteuse, dermatose nodulaire, charbons", "Chèvres et moutons : PPR", "Volailles : Newcastle, Gumboro, variole aviaire"] },
            { title: "Faites appel à des agents enregistrés", bullets: ["Nigeria : Veterinary Council of Nigeria", "Kenya : Kenya Veterinary Board", "Ghana : Veterinary Services Directorate (MoFA)"] },
            { title: "Garder les vaccins efficaces", bullets: ["Vendeurs agréés ; vérifiez la péremption", "Au frais du magasin jusqu'à l'animal", "Suivez l'étiquette et le vétérinaire"] }
          ],
          sources: [VCN],
          tryIt: "Appelez ou allez voir votre vétérinaire local ou votre agent de santé animale et demandez : contre quelles maladies dois-je vacciner mes animaux ici, et quand ? Écrivez sa réponse sous forme de calendrier de 12 mois et enregistrez son numéro dans votre téléphone.",
          youCanNow: "obtenir un calendrier de vaccination d'un vétérinaire enregistré et garder les vaccins au frais et efficaces.",
          quickCheck: [
            { objective: "O4", q: "Laquelle est une maladie des volailles qu'un vaccin peut prévenir ?", options: ["La fièvre de la côte Est", "La maladie de Newcastle", "La brucellose chez les chèvres", "Le piétin"], answer: 1, why: "La maladie de Newcastle, la maladie de Gumboro et la variole aviaire sont des maladies courantes des volailles prévenues par des vaccins." },
            { objective: "O4", q: "Votre vétérinaire a fait les premiers vaccins mais n'a rien donné par écrit. Que lui demandez-vous ?", options: ["Un vaccin moins cher", "Rien ; vous vous en souviendrez", "Un vaccin pour chaque maladie du monde", "Un calendrier écrit sur l'année : chaque vaccin, quels animaux, à quel âge et quand le répéter"], answer: 3, why: "Un calendrier écrit du vétérinaire permet de faire chaque vaccination à temps." }
          ]
        },
        {
          objectives: ["O5"],
          title: "La biosécurité des volailles et la maladie de Newcastle",
          minutes: 5,
          goal: "Fixer des règles de biosécurité qui empêchent la maladie de Newcastle et d'autres infections d'entrer dans votre élevage.",
          text: [
            "La maladie de Newcastle est l'une des maladies des volailles les plus graves en Afrique. L'Organisation mondiale de la santé animale (WOAH) décrit des signes comme le bec ouvert pour respirer, la toux et les éternuements ; des signes nerveux comme les tremblements, la paralysie et le cou tordu ; la diarrhée ; et une chute de la ponte. La mortalité peut atteindre 100 pour cent d'un élevage, et presque tous les oiseaux d'un élevage peuvent être infectés en quelques jours.",
            "La WOAH explique qu'elle se propage par le contact avec les oiseaux malades et leurs fientes, et par les aliments, l'eau, le matériel et les vêtements contaminés. C'est pourquoi la biosécurité, ces gestes simples de tous les jours qui empêchent les microbes d'entrer, compte autant que la vaccination. Les conseils de la FAO pour les petits élevages au Kenya soulignent que beaucoup de ces gestes coûtent peu ou rien.",
            "Vaccinez tout l'élevage contre la maladie de Newcastle selon le calendrier que donne votre vétérinaire. Pour les poules villageoises, la FAO décrit des vaccins qui supportent la chaleur (comme le I-2) et qui peuvent être donnés en goutte dans l'œil ; demandez à votre agent de santé animale ce qui est disponible. Si beaucoup d'oiseaux tombent malades ou meurent brusquement, gardez l'élevage enfermé, prévenez tout de suite le vétérinaire ou l'agent de santé animale, et ne vendez ni ne déplacez d'oiseaux. La WOAH conseille de laisser un poulailler nettoyé vide de volailles pendant 21 jours avant de le repeupler après une épidémie."
          ],
          steps: ["Interdisez le poulailler aux visiteurs ; lavez-vous les mains et utilisez un pédiluve ou des chaussures réservées.", "Achetez des oiseaux seulement chez des fournisseurs fiables et sains ; gardez d'abord les nouveaux à l'écart.", "Tenez les oiseaux sauvages, les rats et les volailles des autres loin des aliments et de l'eau.", "Nettoyez et désinfectez souvent abreuvoirs, mangeoires et caisses.", "Vaccinez tout l'élevage selon le calendrier du vétérinaire.", "Si des oiseaux tombent malades ou meurent brusquement : enfermez l'élevage, appelez le vétérinaire, ne vendez ni ne déplacez d'oiseaux."],
          words: [["Biosécurité", "des gestes simples de tous les jours qui empêchent les microbes d'entrer dans une ferme et de s'y propager."], ["Maladie de Newcastle", "une maladie virale des volailles qui se propage vite et peut tuer tout un élevage."], ["Pédiluve", "un bac de désinfectant dans lequel on marche avant d'entrer dans un bâtiment d'élevage."], ["Vaccin thermostable", "un vaccin qui supporte mieux la chaleur, utile dans les villages ; il faut quand même le garder le plus au frais possible."]],
          slides: [
            { title: "Maladie de Newcastle (WOAH)", bullets: ["Bec ouvert, toux, cou tordu, diarrhée", "Chute de ponte ; mortalité jusqu'à 100 pour cent", "Tout l'élevage infecté en quelques jours"] },
            { title: "Comment elle se propage", bullets: ["Oiseaux malades et leurs fientes", "Aliments, eau, matériel, vêtements contaminés", "La biosécurité l'arrête ; elle est souvent gratuite"] },
            { title: "Règles de biosécurité", bullets: ["Limitez les visiteurs ; lavez-vous les mains ; pédiluve", "Nouveaux oiseaux d'abord à l'écart", "Éloignez oiseaux sauvages et rats ; abreuvoirs propres"] },
            { title: "Vacciner et agir vite", bullets: ["Tout l'élevage, selon le calendrier du vétérinaire", "Poules villageoises : demandez les vaccins en goutte oculaire", "Morts soudaines : enfermez, appelez le vétérinaire, ne vendez pas"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Écrivez cinq règles de biosécurité pour vos volailles et affichez-les à la porte du poulailler. Puis demandez à votre vétérinaire ou à votre agent de santé animale quand votre élevage doit être vacciné à nouveau contre la maladie de Newcastle et ajoutez-le à votre calendrier.",
          youCanNow: "protéger un élevage de la maladie de Newcastle par la biosécurité et la vaccination, et agir vite si des oiseaux meurent.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que la biosécurité ?", options: ["Un type de vaccin", "Une race de poule", "Un complément alimentaire", "Les gestes simples de chaque jour qui empêchent les microbes d'entrer dans une ferme"], answer: 3, why: "La biosécurité, ce sont les gestes de chaque jour qui empêchent les microbes d'entrer, et beaucoup coûtent peu ou rien." },
            { objective: "O5", q: "Un voisin dont les oiseaux ont été malades veut emprunter vos plateaux à œufs et vos mangeoires. Que faites-vous ?", options: ["Les prêter et les réutiliser à leur retour", "Ne pas partager le matériel, car les microbes s'y propagent", "Les prêter seulement pour un jour", "Échanger vos oiseaux à la place"], answer: 1, why: "La maladie de Newcastle se propage par l'aliment, l'eau, le matériel et les vêtements contaminés." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les parasites, les registres et quand appeler le vétérinaire",
          minutes: 6,
          goal: "Planifier la lutte contre les parasites avec votre vétérinaire, tenir un registre des traitements, et connaître les signes qui demandent un vétérinaire tout de suite.",
          text: [
            "Les vers dans l'intestin, et les tiques, les acariens et les puces à l'extérieur, prennent du sang, ralentissent la croissance et propagent des maladies ; les tiques transmettent la fièvre de la côte Est (East Coast fever) aux bovins en Afrique de l'Est. Les signes des vers sont une mauvaise croissance, un poil terne, un gros ventre, la diarrhée et des paupières ou des gencives pâles. Réduisez les parasites avec un logement propre et sec, en déplaçant les animaux au pâturage vers une herbe nouvelle, et en évitant l'entassement. Votre vétérinaire peut vous dire quand déparasiter, baigner ou pulvériser, et avec quel produit. Utilisez toujours la dose de l'étiquette ou du vétérinaire : trop peu rend les vers et les tiques résistants, et trop peut faire du mal à l'animal.",
            "Les médicaments laissent des résidus. Chaque médicament a un délai d'attente : le temps après le traitement avant que le lait, les œufs ou la viande de cet animal puissent être vendus ou mangés. La FAO insiste pour travailler avec votre vétérinaire sur un plan sanitaire et pour noter chaque traitement avec son délai d'attente. N'utilisez jamais d'antibiotiques pour faire grandir les animaux plus vite ni sans l'avis d'un vétérinaire.",
            "Les registres remplacent les suppositions par des faits. Pour chaque animal ou chaque bande, écrivez : identité, naissances, vaccinations, traitements (date, produit, qui l'a donné, fin du délai d'attente), poids ou production, et morts. Un cahier suffit ; un tableur sur téléphone aussi. Appelez tout de suite le vétérinaire pour : des morts soudaines, plusieurs animaux malades en même temps, un animal qui ne mange pas depuis plus d'un jour, une mise bas difficile, un saignement abondant, des signes nerveux, ou toute maladie que votre gouvernement oblige à déclarer."
          ],
          steps: ["Demandez à votre vétérinaire un plan contre les parasites : quand déparasiter et baigner ou pulvériser, et avec quoi.", "Utilisez la dose de l'étiquette ou du vétérinaire, jamais une estimation.", "Déplacez les animaux au pâturage vers une herbe nouvelle ; gardez le logement sec.", "Notez chaque traitement avec la date de fin du délai d'attente.", "Ne vendez ni lait, ni œufs, ni viande avant la fin du délai d'attente.", "Appelez tout de suite le vétérinaire en cas de morts soudaines, plusieurs malades, mise bas difficile ou signes nerveux."],
          words: [["Parasite", "un ver, une tique, un acarien ou une puce qui vit sur ou dans un animal et lui fait du mal."], ["Déparasitage", "donner un médicament pour tuer les vers dans le corps d'un animal."], ["Délai d'attente", "le temps après un traitement avant que le lait, les œufs ou la viande puissent être vendus ou mangés."], ["Résistance", "quand des vers, des tiques ou des microbes survivent à un médicament qui les tuait avant."]],
          slides: [
            { title: "Les parasites", bullets: ["Vers : mauvaise croissance, gros ventre, paupières pâles", "Les tiques propagent des maladies, ex. East Coast fever", "Logement propre, herbe nouvelle, pas d'entassement"] },
            { title: "Bien traiter", bullets: ["Plan du vétérinaire pour déparasiter et baigner", "Dose de l'étiquette ou du vétérinaire ; jamais au hasard", "De mauvaises doses créent des résistances"] },
            { title: "Délais d'attente", bullets: ["Temps avant de vendre le lait, les œufs ou la viande", "Notez la date de fin pour chaque traitement", "Pas d'antibiotiques sans l'avis d'un vétérinaire"] },
            { title: "Appelez tout de suite le vétérinaire", bullets: ["Morts soudaines ; plusieurs malades à la fois", "Ne mange pas depuis plus d'un jour ; mise bas difficile", "Saignement, signes nerveux, maladies à déclarer"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Tâche finale : écrivez votre plan sanitaire d'une page. Mettez-y votre examen quotidien, votre plan d'alimentation et d'eau, vos règles de logement, le calendrier de vaccination de votre vétérinaire, vos règles de biosécurité, votre plan contre les parasites, les registres que vous tiendrez, et les signes qui veulent dire que vous appelez le vétérinaire, avec son nom et son numéro en haut.",
          youCanNow: "lutter contre les parasites avec votre vétérinaire, tenir des registres de traitement avec les délais d'attente, et savoir quand appeler le vétérinaire.",
          quickCheck: [
            { objective: "O6", q: "Quelle maladie les tiques transmettent-elles aux bovins en Afrique de l'Est ?", options: ["La fièvre de la côte Est (East Coast fever)", "La maladie de Newcastle", "La variole aviaire", "La PPR"], answer: 0, why: "Les tiques transmettent la fièvre de la côte Est aux bovins en Afrique de l'Est." },
            { objective: "O6", q: "Vous avez soigné une chèvre aujourd'hui. Qu'écrivez-vous dans le registre ?", options: ["Rien, si la chèvre va mieux", "Seulement le prix du médicament", "La date, le produit, qui l'a donné et quand finit le délai d'attente", "Le nom du voisin"], answer: 2, why: "Noter chaque traitement avec son délai d'attente garde le lait et la viande sûrs à vendre et à manger." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Prévenir et soigner les maladies",
        questions: [
          { objective: "O4", q: "Qui doit fixer le calendrier de vaccination de vos animaux ?", options: ["Un voisin dans un autre pays", "L'affiche du magasin d'aliments", "Un vétérinaire enregistré ou un agent de santé animale qui connaît votre zone", "N'importe qui sur Internet"], answer: 2, why: "Les vaccins nécessaires, et leur moment, dépendent des maladies présentes dans votre zone." },
          { objective: "O4", q: "Vous achetez un vaccin et rentrez chez vous en trois heures au soleil. Quel est le risque ?", options: ["La chaleur peut abîmer le vaccin et il peut ne pas protéger vos animaux", "Il devient plus fort", "Aucun risque", "Il devient un vermifuge"], answer: 0, why: "Les vaccins doivent rester au frais du magasin jusqu'à l'animal." },
          { objective: "O5", q: "Lequel est un signe de la maladie de Newcastle chez les poules ?", options: ["Des crêtes plus vives", "Plus d'œufs", "Une croissance plus rapide", "Cou tordu, bec ouvert pour respirer et morts soudaines"], answer: 3, why: "La WOAH cite les signes respiratoires et nerveux, la chute de ponte et une forte mortalité." },
          { objective: "O5", q: "Beaucoup de vos oiseaux meurent brusquement. Que faire ?", options: ["Vendre vite le reste au marché", "Enfermer l'élevage, appeler le vétérinaire et ne pas déplacer ni vendre d'oiseaux", "Donner les oiseaux morts aux voisins", "Acheter de nouveaux oiseaux le jour même"], answer: 1, why: "Déplacer ou vendre des oiseaux propage la maladie ; le vétérinaire doit trouver la cause." },
          { objective: "O6", q: "Qu'est-ce qu'un délai d'attente ?", options: ["Le temps avant que le lait, les œufs ou la viande d'un animal traité puissent être vendus ou mangés", "Des vacances pour les éleveurs", "La durée d'efficacité d'un vaccin", "Le temps pour sécher le grain"], answer: 0, why: "Il empêche les résidus de médicaments d'arriver dans les aliments." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Santé et conduite de l'élevage",
    questions: [
      { objective: "O1", q: "Quel est un bon moment pour l'examen de santé quotidien ?", options: ["Une fois par mois", "Seulement quand un animal meurt", "Au moment de nourrir ou de traire", "Jamais ; les animaux se débrouillent seuls"], answer: 2, why: "Les animaux sont rassemblés et actifs au moment de nourrir ou de traire." },
      { objective: "O1", q: "Une poule en bonne santé a en général :", options: ["Une crête pâle et rétrécie", "Des plumes ébouriffées", "Le cou tordu", "Une crête rouge vif et elle est active"], answer: 3, why: "Une crête vive et l'activité sont des signes de bonne santé." },
      { objective: "O1", q: "Lequel est un signe d'alerte chez une vache laitière ?", options: ["Une chute soudaine du lait", "Elle rumine", "Des yeux brillants", "Elle mange bien"], answer: 0, why: "Une chute soudaine du lait veut souvent dire une maladie." },
      { objective: "O2", q: "Qu'est-ce qui passe en premier pour nourrir les animaux ?", options: ["Des compléments chers", "De l'eau propre chaque jour", "Seulement des pierres à lécher", "Du foin moisi"], answer: 1, why: "Sans assez d'eau propre, la santé et la production baissent vite." },
      { objective: "O2", q: "L'herbe à éléphant (Napier) et la luzerne sont des exemples de :", options: ["Vaccins", "Vermifuges", "Cultures fourragères", "Litière"], answer: 2, why: "Ce sont des cultures fourragères semées pour nourrir les animaux." },
      { objective: "O2", q: "Pourquoi changer l'aliment des animaux lentement sur plusieurs jours ?", options: ["Pour éviter les troubles digestifs", "Parce qu'un nouvel aliment est toujours mauvais", "Pour économiser l'eau", "Ça n'a pas d'importance"], answer: 0, why: "Un changement brusque d'aliment dérange la digestion." },
      { objective: "O3", q: "Un bon logement pour les animaux est :", options: ["Entassé et chaud", "Humide et sombre", "Sec, ombragé, aéré et sans entassement", "Ouvert aux voleurs"], answer: 2, why: "Un logement sec, aéré et sans entassement réduit les maladies." },
      { objective: "O3", q: "Vous achetez trois nouvelles chèvres. Que faire avant de les mélanger à votre troupeau ?", options: ["Les mélanger tout de suite", "Les garder à l'écart pendant la durée que conseille votre vétérinaire", "Vendre vos anciennes chèvres", "Leur donner des antibiotiques au cas où"], answer: 1, why: "Garder les nouveaux animaux à l'écart les empêche d'apporter une maladie." },
      { objective: "O3", q: "Une zoonose est :", options: ["Un type de fourrage", "Un vaccin", "Une maladie qui peut passer des animaux aux humains et inversement", "Un poulailler"], answer: 2, why: "La brucellose et la fièvre charbonneuse en sont des exemples." },
      { objective: "O4", q: "La PPR est une maladie grave :", options: ["Des chèvres et des moutons", "Des poules", "Du maïs", "Des poissons"], answer: 0, why: "La peste des petits ruminants touche les chèvres et les moutons." },
      { objective: "O4", q: "Au Nigeria, quel organisme tient le registre des vétérinaires ?", options: ["L'agence météorologique du Nigeria", "Le Veterinary Council of Nigeria", "La Banque centrale", "Une entreprise d'aliments du bétail"], answer: 1, why: "Le VCN enregistre les vétérinaires." },
      { objective: "O4", q: "Où acheter les vaccins ?", options: ["À n'importe qui au bord de la route", "En ligne chez des vendeurs inconnus", "Dans le vieux réfrigérateur d'un voisin", "Chez un vendeur de produits vétérinaires agréé, en vérifiant la date de péremption"], answer: 3, why: "Des vendeurs agréés et des vaccins non périmés ont plus de chances de marcher." },
      { objective: "O5", q: "Selon la WOAH, la maladie de Newcastle se propage par :", options: ["Le soleil seulement", "L'eau propre", "Les oiseaux vaccinés seulement", "Les oiseaux malades, les fientes, et les aliments, l'eau, le matériel et les vêtements contaminés"], answer: 3, why: "Le contact direct et les objets contaminés propagent le virus." },
      { objective: "O5", q: "Lequel est un geste de biosécurité peu coûteux ?", options: ["Laisser les visiteurs traverser le poulailler", "Partager des caisses avec d'autres fermes sans les nettoyer", "Se laver les mains et passer par un pédiluve avant d'entrer", "Laisser les oiseaux sauvages manger dans la mangeoire"], answer: 2, why: "Une hygiène simple empêche les microbes d'entrer." },
      { objective: "O5", q: "Pour les poules villageoises, la FAO décrit des vaccins contre la maladie de Newcastle qui sont :", options: ["Mélangés au béton", "Seulement pour les bovins", "Jamais nécessaires", "Donnés en goutte dans l'œil et qui supportent mieux la chaleur"], answer: 3, why: "Les vaccins thermostables comme le I-2 conviennent aux élevages villageois." },
      { objective: "O5", q: "Après une épidémie de Newcastle, la WOAH conseille de laisser le poulailler nettoyé vide de volailles pendant :", options: ["1 jour", "21 jours", "2 heures", "On peut le repeupler tout de suite"], answer: 1, why: "La WOAH indique 21 jours de vide avant de repeupler." },
      { objective: "O6", q: "Lequel est un signe de vers chez les chèvres ?", options: ["Croissance rapide et poil brillant", "Paupières rouge vif", "Manger plus que d'habitude et prendre du poids", "Mauvaise croissance, gros ventre et paupières pâles"], answer: 3, why: "Les vers prennent du sang et des nutriments, ce qui cause ces signes." },
      { objective: "O6", q: "Comment décider de la dose d'un vermifuge ?", options: ["À l'œil", "En donnant la moitié pour économiser", "En suivant l'étiquette ou votre vétérinaire", "En donnant le double pour être sûr"], answer: 2, why: "De mauvaises doses font du mal aux animaux ou créent des résistances." },
      { objective: "O6", q: "Une vache a été traitée hier et le délai d'attente n'est pas fini. Et son lait ?", options: ["Le vendre comme d'habitude", "Ne pas le vendre ni le boire avant la fin du délai d'attente", "Le mélanger à d'autre lait", "Le faire bouillir et le vendre"], answer: 1, why: "Le lait pendant le délai d'attente peut contenir des résidus de médicament." },
      { objective: "O6", q: "Quelle situation veut dire qu'il faut appeler tout de suite le vétérinaire ?", options: ["Plusieurs animaux malades en même temps", "Un animal qui rumine", "Des poules qui pondent comme d'habitude", "Un veau qui boit bien"], answer: 0, why: "Plusieurs animaux malades peuvent signaler une maladie qui se propage." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du plan et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Examen quotidien",
        objective: "O1",
        notYet: "Pas d'examen quotidien, ou aucun signe d'alerte listé.",
        meets: "Un examen quotidien à l'heure du repas ou de la traite, avec les principaux signes d'alerte et quoi faire.",
        exceeds: "Adapte l'examen à chaque espèce élevée."
      },
      {
        name: "Alimentation, eau et logement",
        objective: "O2",
        notYet: "Pas de plan pour la saison sèche, ou les règles de logement et d'hygiène manquent.",
        meets: "L'alimentation et l'eau propre toute l'année avec un plan pour la saison sèche, et deux règles de logement et d'hygiène.",
        exceeds: "Inclut la culture ou le stockage de fourrage et la mise à l'écart des nouveaux animaux."
      },
      {
        name: "Calendrier de vaccination",
        objective: "O4",
        notYet: "Pas de calendrier, ou un calendrier non convenu avec un vétérinaire.",
        meets: "Un calendrier écrit d'un vétérinaire enregistré, avec la façon de garder les vaccins au frais et non périmés.",
        exceeds: "Note les campagnes de l'État et le nom et le numéro du vétérinaire."
      },
      {
        name: "Biosécurité",
        objective: "O5",
        notYet: "Pas de règles de biosécurité.",
        meets: "Des règles de biosécurité et, pour les volailles, la vaccination contre la maladie de Newcastle et les étapes si des oiseaux meurent soudainement.",
        exceeds: "Des gestes peu coûteux comme le lavage des mains et un pédiluve sont en place."
      },
      {
        name: "Parasites, registres et vétérinaire",
        objective: "O6",
        notYet: "Pas de registres, ou des doses devinées.",
        meets: "La lutte contre les parasites planifiée avec le vétérinaire, un registre des traitements avec les délais d'attente, et les signes qui demandent d'appeler le vétérinaire tout de suite.",
        exceeds: "Les registres couvrent aussi les naissances, les poids ou la production, et les morts."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le plan de santé",
      "Les apprenants qui déclarent avoir un calendrier de vaccination écrit d'un vétérinaire enregistré dans les 60 jours (enquête de suivi)",
      "L'évolution des morts d'animaux ou d'oiseaux et de la production de lait ou d'œufs déclarée par les apprenants après six mois",
      "Les apprenants qui déclarent tenir un registre des traitements et respecter les délais d'attente"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un cahier ou un tableur sur téléphone pour les registres",
      "Le numéro de téléphone d'un vétérinaire enregistré ou d'un agent de santé animale",
      "L'accès aux animaux de l'apprenant pour l'examen quotidien",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour écrire le plan de santé"
    ],
    facilitatorNotes: [
      "Dans un groupement d'agriculteurs : faites le test de départ ensemble, puis entraînez-vous à l'examen de santé quotidien sur de vrais animaux.",
      "Invitez un vétérinaire enregistré ou un agent de santé animale à expliquer les maladies et les vaccins locaux ; ne donnez pas de doses vous-même.",
      "Lavez-vous les mains après avoir manipulé les animaux, et ne manipulez jamais un animal mort soudainement avec des saignements.",
      "Aidez chaque apprenant à noter le nom et le numéro de son vétérinaire avant de partir.",
      "Évaluez le plan de santé avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
