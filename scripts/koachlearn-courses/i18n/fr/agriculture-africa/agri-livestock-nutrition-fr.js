"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-livestock-nutrition.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ et FAO) : système d'information sur les ressources alimentaires pour animaux", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia : grain de maïs (protéines d'environ 8 à 10,5 pour cent de la matière sèche)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia : tourteau de soja (protéines selon le type)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe : la technique push-pull, ou \"attirer et repousser\" (desmodium, herbe à éléphant et Brachiaria comme fourrage)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "Vulgarisation de l'Université du Tennessee : cahier d'activités sur les aliments du bétail (le carré de Pearson)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO : techniques de récolte et d'ensilage (faire de l'ensilage sous les tropiques)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO : l'ensilage pour les petits producteurs (conclusions : ensilage en sac, méthodes à faible coût)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI : les capteurs de mycotoxines, une solution pour un lait plus sûr au Kenya ?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-fr",
  lang: "fr",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Alimentation du bétail et formulation des rations avec des ingrédients locaux",
  skills: "Couvrir les besoins nutritifs des animaux, Choisir des ingrédients et des fourrages locaux, Équilibrer une ration avec le carré de Pearson, Faire de l'ensilage et du foin et bien stocker les aliments, Planifier l'alimentation par stade, Calculer le coût de l'aliment par kg de gain de poids ou par litre de lait",
  outcome: "préparer une ration équilibrée avec des ingrédients locaux pour une catégorie d'animaux et en calculer le coût : adapter l'énergie, les protéines, les minéraux et l'eau à son stade, équilibrer les protéines avec le carré de Pearson, conserver et stocker les aliments sans risque, et calculer le coût de l'aliment par kg de gain de poids, par plateau d'œufs ou par litre de lait.",
  about: [
    "Ce cours s'adresse aux petits éleveurs et aux éleveurs en croissance de bétail et de volailles, aux ouvriers agricoles, aux jeunes agripreneurs, aux petits fabricants d'aliments et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, en Côte d'Ivoire, au Burkina Faso et partout en Afrique. L'alimentation est en général la plus grosse dépense de l'élevage : bien nourrir à petit prix décide si la ferme gagne de l'argent.",
    "Le chapitre 1 porte sur ce dont les animaux ont besoin et ce que vous avez : les nutriments ; les ingrédients locaux comme le maïs, le son de maïs, le son de blé, les tourteaux de soja et de coton, et la farine de poisson ; les fourrages comme l'herbe à éléphant (Napier), le desmodium et le lablab ; et comment équilibrer une ration avec le carré de Pearson, étape par étape. Le chapitre 2 porte sur la conservation et la planification : l'ensilage et le foin, le stockage des aliments à l'abri des moisissures et des mycotoxines, l'alimentation par stade avec un plan d'alimentation en trois parties, et le coût de l'aliment par kg de gain de poids ou par litre de lait.",
    "Tous les prix de ce cours sont des exemples inventés : utilisez vos propres prix locaux. La valeur nutritive des ingrédients varie, alors vérifiez-la auprès de votre fournisseur, d'un laboratoire d'analyse des aliments ou de votre agent de vulgarisation. Ce cours ne donne aucune dose de médicament ou d'additif ; suivez l'étiquette et votre vétérinaire. Chaque leçon dure environ cinq minutes et se termine par une tâche. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez une ration chiffrée pour une catégorie d'animaux de votre ferme (ou pour un exemple comme des pondeuses près de Kumasi, des porcs en croissance près d'Ibadan, des poulets de chair près de Bouaké ou une vache laitière à Kiambu) : nommez la catégorie et le stade ; écrivez le plan d'alimentation en trois parties (aliment de base ou fourrage, concentré, compléments) et l'eau ; équilibrez les protéines du concentré avec le carré de Pearson, en montrant vos calculs ; donnez les kg de chaque ingrédient pour 100 kg de mélange ; calculez son coût par kg avec vos prix locaux ; et calculez le coût de l'aliment par kg de gain de poids, par plateau d'œufs ou par litre de lait.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits éleveurs et éleveurs commerciaux en croissance de bétail et de volailles, ouvriers agricoles, jeunes agripreneurs, petits fabricants d'aliments et agents de vulgarisation d'Afrique de l'Est, de l'Ouest et du Centre (y compris les pays francophones).",
    startingPoint: "Ils nourrissent leurs animaux avec le pâturage, les résidus de récolte et des aliments du commerce achetés. La plupart ne savent pas lire une étiquette d'aliment ni équilibrer une ration, ne conservent pas de fourrage pour la saison sèche, et ne savent pas combien leur coûte l'aliment par kg de viande, par œuf ou par litre de lait.",
    gap: "Les aliments achetés sont chers et leur qualité varie ; un aliment pauvre ou moisi réduit la croissance, la ponte et le lait et peut rendre les animaux malades. Les éleveurs qui savent mélanger une ration équilibrée avec des ingrédients locaux, conserver du fourrage et calculer le coût de leur alimentation peuvent réduire leurs dépenses, garder leurs animaux en production pendant la saison sèche et fixer le prix de leurs produits en confiance.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; seulement du calcul simple (multiplier, diviser, pourcentages) ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : papier et stylo ou la calculatrice du téléphone ; un tableur sur le téléphone est facultatif",
      "Argent : les prix en KES, NGN, GHS et XOF sont des exemples inventés ; les apprenants utilisent les prix locaux",
      "La valeur des ingrédients varie : les apprenants la vérifient auprès des fournisseurs, d'un laboratoire ou de l'agent de vulgarisation",
      "Règles de santé animale : aucune dose de médicament, d'additif ou d'aliment médicamenteux ; suivre le vétérinaire et l'étiquette"
    ],
    prerequisites: "Les soins de base aux animaux et le calcul simple. Il est conseillé de suivre d'abord \"Santé et conduite de l'élevage\"."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour une catégorie d'animaux et son stade", action: "dresser la liste des nutriments dont elle a besoin (énergie, protéines, minéraux et eau) et d'un aliment local qui apporte chacun d'eux", standard: "en citant un aliment correct pour chaque nutriment" },
    { id: "O2", condition: "À partir des aliments disponibles près de chez vous", action: "classer les ingrédients et les fourrages locaux en aliments énergétiques, aliments protéiques, fourrages grossiers et compléments", standard: "avec au moins 8 sur 10 bien classés" },
    { id: "O3", condition: "Avec deux ingrédients et un taux de protéines visé", action: "équilibrer une ration avec le carré de Pearson et écrire les kg de chaque ingrédient pour 100 kg de mélange", standard: "avec un mélange à moins de 0,5 point de pourcentage de l'objectif" },
    { id: "O4", condition: "Avec le fourrage et les aliments de votre ferme", action: "faire de l'ensilage ou du foin et stocker les aliments pour qu'ils restent secs et sans moisissure", standard: "en suivant chaque étape de la liste de contrôle" },
    { id: "O5", condition: "Pour une catégorie d'animaux", action: "écrire un plan d'alimentation par stade avec l'aliment de base ou le fourrage, le concentré et les compléments pour chaque stade", standard: "en couvrant tous les stades, du jeune animal à la vente, à la ponte ou à la production de lait" },
    { id: "O6", condition: "Avec vos prix locaux et vos registres", action: "calculer le coût de l'aliment par kg de mélange et par kg de gain de poids, plateau d'œufs ou litre de lait", standard: "avec des calculs justes et tous les ingrédients comptés" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ce dont les animaux ont besoin et ce que vous avez",
      lessons: [
        {
          title: "Les nutriments : énergie, protéines, minéraux et eau",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dresser la liste de ce qu'un animal doit manger et boire, et d'un aliment local pour chaque besoin.",
          text: [
            "Chaque animal a besoin de quatre choses dans ses aliments et son eau. L'énergie le garde en vie, au chaud et en mouvement, et nourrit la croissance, le lait et les œufs ; elle vient surtout des céréales (maïs, sorgho, manioc), des sons et de l'herbe fraîche ou conservée. Les protéines construisent les muscles, le lait, les œufs et les petits ; elles viennent des tourteaux d'oléagineux (soja, coton, arachide, tournesol), de la farine de poisson et des légumineuses comme le desmodium et le lablab. Les minéraux et les vitamines construisent les os et la coquille des œufs et font fonctionner le corps : le sel, le calcium du calcaire ou des coquillages, le phosphore et un prémélange de minéraux et de vitamines.",
            "L'eau est le nutriment le plus important et le moins cher. Sans elle, un animal arrête vite de manger, et les vaches en lactation et les poules pondeuses boivent beaucoup. Donnez de l'eau propre en permanence, plus quand il fait chaud, dans des abreuvoirs propres à l'ombre.",
            "Les besoins changent selon l'animal et son stade. Un jeune animal qui grandit vite, une poule pondeuse et une vache en lactation ont besoin de plus de protéines qu'un adulte au repos. Les bovins, les chèvres et les moutons sont des ruminants : leur estomac peut digérer l'herbe et les résidus de récolte, donc les fourrages grossiers sont la base de leur ration. Les porcs et les volailles ne digèrent pas bien les fourrages grossiers, donc ils ont besoin de farines à base de céréales, avec des protéines, des minéraux et des vitamines."
          ],
          words: [["Nutriment", "une partie de l'aliment dont le corps a besoin : énergie, protéines, minéraux, vitamines et eau."], ["Ruminant", "un animal avec un estomac en quatre parties qui peut digérer l'herbe : bovins, chèvres et moutons."], ["Prémélange", "un mélange acheté de minéraux et de vitamines qu'on ajoute en petite quantité à l'aliment, comme l'indique l'étiquette."], ["Fourrage grossier", "un aliment volumineux et riche en fibres, comme l'herbe, le foin, l'ensilage et les résidus de récolte."]],
          slides: [
            { title: "Quatre besoins", bullets: ["Énergie : céréales, sons, manioc, herbe", "Protéines : tourteaux, farine de poisson, légumineuses", "Minéraux et vitamines : sel, calcaire, prémélange", "Eau : propre, en permanence"] },
            { title: "L'eau d'abord", bullets: ["Le nutriment le moins cher et le plus important", "Plus quand il fait chaud ; les laitières et les pondeuses boivent beaucoup", "Abreuvoirs propres à l'ombre"] },
            { title: "Les besoins changent avec le stade", bullets: ["Les jeunes, les pondeuses et les laitières ont besoin de plus de protéines", "Les adultes au repos en ont besoin de moins"] },
            { title: "Ruminants et porcs ou volailles", bullets: ["Bovins, chèvres, moutons : les fourrages grossiers sont la base", "Porcs et volailles : farine à base de céréales avec protéines et prémélange"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Choisissez une catégorie d'animaux de votre ferme (par exemple des porcs en croissance, des pondeuses ou une vache en lactation). Écrivez ses quatre besoins et, à côté de chacun, un aliment que vous pouvez trouver sur place et qui le couvre.",
          youCanNow: "dresser la liste des besoins en énergie, en protéines, en minéraux et en eau d'un animal et citer un aliment local pour chacun.",
          quickCheck: [
            { objective: "O1", q: "Quel nutriment est le moins cher et le plus important ?", options: ["Les protéines", "L'énergie", "L'eau", "Les vitamines"], answer: 2, why: "Sans eau propre, les animaux arrêtent vite de manger et de produire." },
            { objective: "O1", q: "Quel aliment apporte surtout des protéines ?", options: ["Le tourteau de soja", "Le grain de maïs", "Le sel", "Les cossettes de manioc"], answer: 0, why: "Les tourteaux d'oléagineux comme le tourteau de soja sont riches en protéines ; le maïs et le manioc donnent surtout de l'énergie." }
          ]
        },
        {
          title: "Les ingrédients et les fourrages locaux",
          objectives: ["O2"],
          minutes: 6,
          goal: "Classer les aliments que vous pouvez trouver en aliments énergétiques, aliments protéiques, fourrages grossiers et compléments.",
          text: [
            "Aliments énergétiques : grain de maïs, de sorgho et de mil, manioc (épluché, séché ou transformé pour être sans danger), son de maïs et son de blé. Les sons coûtent moins cher que le grain et apportent un peu de protéines et de fibres, mais trop de son dans une farine pour volailles dilue l'énergie. Le grain de maïs n'a qu'environ 8 à 10 pour cent de protéines : seul, il ne peut pas nourrir un animal en croissance.",
            "Aliments protéiques : tourteau de soja (souvent autour de 44 à 48 pour cent de protéines, selon sa fabrication), tourteau de coton, tourteau d'arachide, tourteau de tournesol et farine de poisson (comme l'omena au Kenya). Le tourteau de coton contient du gossypol, qui peut nuire aux porcs, aux volailles et aux jeunes animaux : utilisez-le seulement dans les limites d'un guide d'alimentation ou d'un nutritionniste. La farine de poisson est riche mais chère, et sa qualité varie : achetez-la à une source de confiance et vérifiez qu'elle n'est pas mélangée à du sable ou du sel.",
            "Fourrages pour les ruminants : herbe à éléphant (Napier), Brachiaria, tiges de maïs, légumineuses comme le desmodium et le lablab, et feuilles d'arbres comme le leucaena et le calliandra. Les légumineuses sont riches en protéines et peuvent remplacer une partie du concentré acheté. La technique push-pull (\"attirer et repousser\") de l'icipe (le Centre international de physiologie et d'écologie des insectes) sème le desmodium entre les lignes de maïs et le Napier ou le Brachiaria autour du champ : elle protège le maïs des ravageurs et donne un fourrage de haute qualité. Compléments : le sel, le calcaire ou les coquillages pour le calcium, et un prémélange de minéraux et de vitamines utilisé comme l'indique l'étiquette."
          ],
          steps: ["Faites la liste de tous les aliments que vous pouvez acheter ou produire près de chez vous.", "Marquez chacun : énergétique, protéique, fourrage grossier ou complément.", "Écrivez son prix au kg et à quel moment de l'année vous pouvez l'avoir.", "Demandez sa valeur en protéines à votre fournisseur ou à votre agent de vulgarisation.", "Notez les limites, comme pour le tourteau de coton chez les porcs et les volailles."],
          words: [["Concentré", "un aliment riche en énergie ou en protéines, comme le grain, le son, un tourteau ou un aliment laitier acheté."], ["Tourteau", "ce qui reste après avoir pressé l'huile de graines comme le soja ou le coton ; riche en protéines."], ["Légumineuse", "une plante comme le desmodium, le lablab ou le haricot, riche en protéines, qui ajoute de l'azote au sol."], ["Gossypol", "une substance naturelle de la graine de coton qui peut nuire aux porcs, aux volailles et aux jeunes animaux."]],
          slides: [
            { title: "Les aliments énergétiques", bullets: ["Maïs, sorgho, mil, manioc transformé sans danger", "Son de maïs et son de blé : moins chers, plus de fibres", "Maïs seul : seulement environ 8 à 10 pour cent de protéines"] },
            { title: "Les aliments protéiques", bullets: ["Tourteau de soja, souvent environ 44 à 48 pour cent de protéines", "Tourteaux de coton, d'arachide et de tournesol", "Farine de poisson : riche, mais vérifiez la qualité"] },
            { title: "Les fourrages pour les ruminants", bullets: ["Napier, Brachiaria, tiges de maïs", "Légumineuses : desmodium, lablab, leucaena, calliandra", "Le push-pull donne du fourrage et protège le maïs"] },
            { title: "Compléments et limites", bullets: ["Sel, calcaire ou coquillages, prémélange selon l'étiquette", "Tourteau de coton : limites pour porcs, volailles et jeunes", "Vérifiez les valeurs avec le fournisseur ou la vulgarisation"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Faites un tableau de 8 à 10 aliments que vous pouvez trouver près de chez vous, avec quatre colonnes : aliment, type (énergétique, protéique, fourrage grossier ou complément), prix au kg et mois où on le trouve.",
          youCanNow: "classer les aliments disponibles près de chez vous en aliments énergétiques, aliments protéiques, fourrages grossiers et compléments, et noter leurs prix et leurs limites.",
          quickCheck: [
            { objective: "O2", q: "Quelle est une légumineuse fourragère riche en protéines pour les bovins et les chèvres ?", options: ["Les tiges de maïs", "Le son de blé", "Le desmodium", "Les épluchures de manioc"], answer: 2, why: "Le desmodium est une légumineuse riche en protéines ; les autres donnent surtout de l'énergie ou des fibres." },
            { objective: "O2", q: "Pourquoi faut-il faire attention au tourteau de coton pour les porcs et les volailles ?", options: ["Il n'a pas de protéines", "Il contient du gossypol, qui peut leur nuire", "Il est trop bon marché", "Il est seulement pour les poissons"], answer: 1, why: "Le gossypol de la graine de coton peut nuire aux porcs, aux volailles et aux jeunes animaux, donc on l'utilise dans les limites du guide." }
          ]
        },
        {
          title: "Équilibrer une ration avec le carré de Pearson",
          objectives: ["O3"],
          minutes: 6,
          goal: "Équilibrer deux ingrédients pour atteindre un taux de protéines visé avec le carré de Pearson.",
          text: [
            "Le carré de Pearson est un dessin simple qui vous dit combien mélanger de deux aliments pour atteindre un objectif, en général les protéines. Il marche avec un nutriment et deux aliments à la fois, et l'objectif doit se situer entre les valeurs des deux aliments. Utilisez des valeurs sur la même base (les deux en brut, tel que distribué, ou les deux en matière sèche).",
            "Exemple résolu avec des valeurs courantes (vérifiez les vôtres) : maïs à 9 pour cent de protéines, tourteau de soja à 44 pour cent, et un objectif de 18 pour cent. Votre objectif vient d'un guide d'alimentation, de votre agent de vulgarisation ou d'un nutritionniste pour cet animal et ce stade. Dessinez un carré. Écrivez 18 au centre, maïs 9 en haut à gauche et tourteau de soja 44 en bas à gauche. Soustrayez en suivant les diagonales et oubliez les signes moins : 44 moins 18 = 26 parts de maïs (en haut à droite) ; 18 moins 9 = 9 parts de tourteau de soja (en bas à droite). Total des parts = 26 + 9 = 35.",
            "Transformez les parts en kg pour 100 kg : maïs = 26 / 35 x 100 = 74,3 kg ; tourteau de soja = 9 / 35 x 100 = 25,7 kg. Vérifiez : 74,3 x 9 % = 6,7 kg de protéines, plus 25,7 x 44 % = 11,3 kg, au total 18,0 kg de protéines dans 100 kg : 18 pour cent. Dans une vraie farine, vous réservez d'abord la place des éléments fixes (prémélange, sel, calcaire pour les pondeuses, comme l'indiquent l'étiquette ou le guide), puis vous utilisez le carré pour le reste. Le carré équilibre seulement les protéines : vérifiez l'énergie, les fibres et les minéraux avec votre agent de vulgarisation."
          ],
          steps: ["Écrivez le taux de protéines visé au centre d'un carré.", "Écrivez l'aliment A (peu de protéines) en haut à gauche et l'aliment B (beaucoup de protéines) en bas à gauche.", "Soustrayez sur chaque diagonale ; oubliez les signes moins.", "En haut à droite = parts de l'aliment A ; en bas à droite = parts de l'aliment B.", "Divisez chacune par le total des parts et multipliez par 100 pour avoir les kg pour 100 kg.", "Vérifiez : kg x pourcentage de protéines de chaque aliment donnent l'objectif une fois additionnés."],
          words: [["Carré de Pearson", "un dessin simple qui montre combien mélanger de deux aliments pour atteindre l'objectif d'un nutriment."], ["Protéines brutes", "la valeur en protéines imprimée sur les étiquettes d'aliments et les résultats de laboratoire, en pourcentage."], ["Ration", "les aliments qu'un animal reçoit en une journée, ou le mélange avec lequel on le nourrit."], ["Brut (tel que distribué)", "mesuré tel quel, avec son eau ; les valeurs en matière sèche enlèvent l'eau."]],
          slides: [
            { title: "Le carré de Pearson", bullets: ["Un nutriment, deux aliments", "L'objectif doit être entre les deux valeurs", "Même base : brut ou matière sèche"] },
            { title: "Le mettre en place", bullets: ["Au centre : objectif de 18 pour cent", "En haut à gauche : maïs 9 ; en bas à gauche : tourteau de soja 44"] },
            { title: "Suivre les diagonales", bullets: ["44 - 18 = 26 parts de maïs", "18 - 9 = 9 parts de tourteau de soja", "Total : 35 parts"] },
            { title: "Pour 100 kg, puis vérifier", bullets: ["Maïs 26 / 35 x 100 = 74,3 kg", "Tourteau de soja 9 / 35 x 100 = 25,7 kg", "6,7 + 11,3 = 18,0 kg de protéines : objectif atteint"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Utilisez le carré de Pearson pour mélanger du son de maïs (prenez 10 pour cent de protéines comme valeur d'exercice) et du tourteau de soja (44 pour cent) pour un objectif de 16 pour cent. Écrivez les kg pour 100 kg et vérifiez que les protéines tombent juste. (Réponse : 28 parts de son et 6 parts de tourteau, soit 82,4 kg et 17,6 kg.)",
          youCanNow: "équilibrer deux aliments pour atteindre un objectif de protéines avec le carré de Pearson et vérifier le résultat.",
          quickCheck: [
            { objective: "O3", q: "Dans le carré de Pearson, qu'est-ce qu'on écrit au centre ?", options: ["Le prix de l'aliment", "Le poids de l'animal", "Le nombre d'animaux", "Le taux de protéines visé"], answer: 3, why: "Le taux visé du nutriment va au centre ; les aliments vont dans les coins de gauche." },
            { objective: "O3", q: "Vous mélangez du maïs (9 pour cent) et du tourteau de soja (44 pour cent) pour 18 pour cent. Combien de parts de maïs ?", options: ["26 parts (44 moins 18)", "9 parts (18 moins 9)", "35 parts", "18 parts"], answer: 0, why: "On soustrait sur la diagonale : 44 - 18 = 26 parts de maïs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce dont les animaux ont besoin et ce que vous avez",
        questions: [
          { objective: "O1", q: "Pourquoi les bovins et les chèvres peuvent-ils vivre surtout d'herbe, mais pas les porcs ni les poulets ?", options: ["Les porcs et les poulets n'ont pas besoin d'énergie", "L'herbe est un poison pour les porcs", "Les bovins et les chèvres sont des ruminants et peuvent digérer les fourrages grossiers", "Les poulets boivent seulement de l'eau"], answer: 2, why: "L'estomac des ruminants digère les fourrages grossiers ; les porcs et les volailles ont besoin de farines à base de céréales." },
          { objective: "O1", q: "Quel animal a besoin de plus de protéines dans son aliment ?", options: ["Un jeune poulet de chair qui grandit vite", "Une chèvre adulte au repos en saison sèche", "Une vache adulte vide qui n'est pas en lactation", "Un bœuf adulte au repos"], answer: 0, why: "Les jeunes animaux qui grandissent vite, les pondeuses et les laitières ont besoin de plus de protéines." },
          { objective: "O2", q: "Lequel de ces aliments est surtout un aliment énergétique ?", options: ["La farine de poisson", "Le grain de maïs", "Le tourteau de soja", "Le desmodium"], answer: 1, why: "Le grain de maïs apporte surtout de l'énergie, avec seulement environ 8 à 10 pour cent de protéines." },
          { objective: "O3", q: "Quelle paire le carré de Pearson peut-il équilibrer pour un objectif de 16 pour cent de protéines ?", options: ["Maïs (9 pour cent) et son de maïs (10 pour cent)", "Farine de poisson (60 pour cent) et tourteau de soja (44 pour cent)", "Deux aliments tous deux au-dessus de 30 pour cent", "Maïs (9 pour cent) et tourteau de soja (44 pour cent)"], answer: 3, why: "L'objectif doit se situer entre les valeurs des deux aliments : 16 est entre 9 et 44." },
          { objective: "O3", q: "Après le carré, vous avez 26 parts de maïs et 9 parts de tourteau de soja. Combien de kg de tourteau de soja dans 100 kg ?", options: ["9 kg", "35 kg", "Environ 25,7 kg", "Environ 74,3 kg"], answer: 2, why: "9 / 35 x 100 = 25,7 kg de tourteau de soja dans 100 kg de mélange." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conserver, planifier et calculer le coût de vos aliments",
      lessons: [
        {
          title: "L'ensilage, le foin et le bon stockage des aliments",
          objectives: ["O4"],
          minutes: 6,
          goal: "Faire de l'ensilage ou du foin et stocker les aliments pour qu'ils restent secs et sans moisissure.",
          text: [
            "En saison des pluies, il y a trop d'herbe ; en saison sèche, trop peu, et le lait et le poids baissent. Conserver du fourrage équilibre l'année. L'ensilage est un fourrage vert (maïs, sorgho ou Napier) gardé à l'abri de l'air pour qu'il fermente et reste humide et bon à manger pendant des mois. Le foin est de l'herbe ou une légumineuse coupée et séchée au soleil jusqu'à être assez sèche pour être stockée sans pourrir.",
            "L'ensilage, selon la FAO : hacher fin, remplir vite, tasser fort et fermer sans air. Coupez le maïs ou le sorgho quand le grain est tendre, entre le stade laiteux et le stade pâteux. Hachez le fourrage en petits morceaux, remplissez vite la fosse, la gaine en plastique, le sac ou un fût propre, chassez chaque poche d'air en piétinant ou en tassant, puis fermez avec du plastique et posez des poids dessus. Le Napier et les autres herbes contiennent peu de sucre ; les éleveurs ajoutent souvent de la mélasse pour les aider à fermenter (demandez la quantité à votre agent de vulgarisation). Laissez fermé quelques semaines et, une fois ouvert, prenez chaque jour ce dont vous avez besoin et refermez. Un bon ensilage sent l'aigre-doux ; jetez les parties moisies ou pourries.",
            "Les moisissures sur les aliments peuvent produire des mycotoxines, comme l'aflatoxine. Ce sont des poisons invisibles qui réduisent la croissance, le lait et la fertilité, rendent les animaux malades et peuvent passer dans le lait, les œufs et la viande. Des études de l'ILRI (l'Institut international de recherche sur l'élevage) au Kenya ont trouvé de l'aflatoxine dans beaucoup d'aliments pour vaches laitières. Pour l'éviter : achetez vos aliments dans des moulins de confiance, vérifiez qu'ils sont secs, qu'ils coulent bien et qu'ils sentent le frais, rangez les sacs sur des palettes, loin du sol et des murs, sous un toit qui ne fuit pas, utilisez d'abord les aliments les plus anciens, et ne donnez jamais un aliment moisi, même à d'autres animaux."
          ],
          steps: ["Ensilage : récoltez au bon stade et hachez fin.", "Remplissez vite la fosse, la gaine, le sac ou le fût, et tassez fort pour chasser l'air.", "Fermez sans air avec du plastique et posez des poids ; laissez fermé quelques semaines.", "Foin : coupez, séchez au soleil, retournez souvent, stockez au sec sous un toit.", "Magasin d'aliments : palettes loin du sol, loin des murs, toit qui ne fuit pas.", "Utilisez d'abord les aliments les plus anciens ; jetez tout ce qui est moisi, en mottes ou qui sent mauvais."],
          words: [["Ensilage", "un fourrage vert gardé sans air pour qu'il fermente et reste bon à donner pendant des mois."], ["Foin", "de l'herbe ou une légumineuse coupée et séchée au soleil pour être stockée."], ["Mycotoxine", "un poison produit par les moisissures sur les aliments, comme l'aflatoxine ; on ne peut pas le voir."], ["Palette", "un plateau surélevé en bois ou en plastique qui garde les sacs au-dessus du sol."]],
          slides: [
            { title: "Pourquoi conserver le fourrage", bullets: ["Trop d'herbe en saison des pluies, trop peu en saison sèche", "L'ensilage et le foin gardent le lait et la croissance stables"] },
            { title: "L'ensilage en quatre étapes (FAO)", bullets: ["Hacher fin", "Remplir vite", "Tasser fort pour chasser l'air", "Fermer sans air et poser des poids"] },
            { title: "Le foin", bullets: ["Couper l'herbe ou la légumineuse", "Sécher au soleil en retournant souvent", "Stocker au sec, sous un toit, au-dessus du sol"] },
            { title: "Arrêter moisissures et mycotoxines", bullets: ["Moulins de confiance ; aliment sec qui sent le frais", "Palettes, loin des murs, toit qui ne fuit pas", "Les plus anciens d'abord ; jamais d'aliment moisi"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Allez là où vous stockez vos aliments. Écrivez trois choses qui pourraient faire entrer l'humidité ou les moisissures, et comment vous allez corriger chacune. Ensuite, prévoyez un lot d'ensilage ou de foin : quel fourrage, quand le couper, et dans quoi vous le stockerez.",
          youCanNow: "faire de l'ensilage ou du foin et stocker les aliments à l'abri de l'humidité, des moisissures et des mycotoxines.",
          quickCheck: [
            { objective: "O4", q: "Quelle est la chose la plus importante quand on fait de l'ensilage ?", options: ["Le laisser ouvert pour qu'il respire", "Chasser l'air et fermer sans air", "Ajouter de l'eau chaque jour", "Le stocker au soleil"], answer: 1, why: "L'ensilage se conserve seulement si l'air est chassé et ne rentre plus, pour qu'il puisse fermenter." },
            { objective: "O4", q: "Un sac d'aliment pour vaches laitières a des mottes grises et durcies et sent le moisi. Que faites-vous ?", options: ["Vous le donnez aux vaches taries", "Vous le mélangez avec de l'aliment frais", "Vous le donnez plutôt aux poules", "Vous ne le donnez à aucun animal"], answer: 3, why: "Les moisissures peuvent porter des mycotoxines qui nuisent à tous les animaux et peuvent passer dans le lait et les œufs." }
          ]
        },
        {
          title: "Nourrir selon le stade : un plan d'alimentation en trois parties",
          objectives: ["O5"],
          minutes: 5,
          goal: "Écrire un plan d'alimentation pour chaque stade d'une catégorie d'animaux.",
          text: [
            "Les animaux ont besoin d'aliments différents selon le stade. Poulets de chair : démarrage, puis finition (certains éleveurs ajoutent une croissance entre les deux). Pondeuses : aliment poussin, puis aliment poulette, puis aliment ponte à partir de l'entrée en ponte, avec du calcium en plus pour la coquille. Porcs : aliment premier âge ou sevrage, croissance, finition, puis aliments spéciaux pour les truies gestantes et allaitantes. Vaches laitières : veau, génisse, vache tarie et lactation, avec le concentré adapté au lait de chaque vache. Passez d'un aliment au suivant sur quelques jours, pas du jour au lendemain.",
            "Utilisez un plan simple en trois parties pour chaque stade. Partie 1, l'aliment de base : ce qui fait la plus grande partie de la ration. Pour les bovins et les chèvres, ce sont les fourrages (pâturage, Napier, foin, ensilage, tiges) ; pour les porcs et les volailles, ce sont les céréales énergétiques et les sons de la farine. Partie 2, le concentré : la partie riche en protéines (tourteaux, farine de poisson, aliment laitier acheté ou farine équilibrée) qui complète ce qui manque à l'aliment de base. Partie 3, les compléments : sel, minéraux, vitamines et calcium, utilisés comme l'indique l'étiquette. Et de l'eau propre en permanence.",
            "Nourrir selon le stade fait économiser de l'argent : vous ne payez pas un aliment démarrage riche en protéines pour un animal qui n'en a plus besoin. Pesez ou estimez combien mange chaque stade et observez les animaux : s'ils sont maigres, pondent moins ou donnent moins de lait, demandez à votre agent de vulgarisation de revoir le plan. L'étiquette du sac ou le guide du couvoir ou de la race indique quand changer d'aliment pour les races commerciales."
          ],
          steps: ["Choisissez une catégorie d'animaux.", "Faites la liste de ses stades, du jeune animal à la vente, à la ponte ou au lait.", "Pour chaque stade, écrivez l'aliment de base.", "Ajoutez le concentré qui le complète.", "Ajoutez les compléments et l'eau.", "Écrivez quand passer au stade suivant, et faites le changement sur quelques jours."],
          words: [["Aliment de base", "la partie principale de la ration : le fourrage pour les ruminants, les céréales énergétiques pour les porcs et les volailles."], ["Entrée en ponte", "l'âge où les jeunes poules vont commencer à pondre."], ["Lactation", "la période où une femelle produit du lait."]],
          slides: [
            { title: "L'aliment change avec le stade", bullets: ["Poulets de chair : démarrage, puis finition", "Pondeuses : poussin, poulette, puis ponte", "Porcs : sevrage, croissance, finition, truie ; laitières : selon le lait"] },
            { title: "Le plan en trois parties", bullets: ["1. Base : fourrage, ou céréales et sons", "2. Concentré : le complément de protéines", "3. Compléments : sel, minéraux, vitamines, calcium"] },
            { title: "L'eau, et changer lentement", bullets: ["De l'eau propre en permanence", "Changez d'aliment sur quelques jours"] },
            { title: "Pourquoi ça fait économiser", bullets: ["Pas d'aliment démarrage cher pour ceux qui n'en ont pas besoin", "Surveillez l'état du corps, la ponte et le lait"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Choisissez une catégorie d'animaux. Faites un tableau avec une ligne par stade et quatre colonnes : aliment de base, concentré, compléments, et quand passer au stade suivant.",
          youCanNow: "écrire un plan d'alimentation par stade avec l'aliment de base, le concentré et les compléments pour chaque stade.",
          quickCheck: [
            { objective: "O5", q: "Dans un plan d'alimentation en trois parties pour une vache laitière, quel est l'aliment de base ?", options: ["Un fourrage comme le Napier, le foin ou l'ensilage", "Le prémélange de minéraux", "L'aliment laitier", "Le sel"], answer: 0, why: "Chez les ruminants, le fourrage fait la plus grande partie de la ration ; le concentré et les compléments la complètent." },
            { objective: "O5", q: "Vos poulettes approchent de l'entrée en ponte. À quel aliment passent-elles ?", options: ["L'aliment démarrage poulet de chair", "L'aliment poussin", "L'aliment ponte, avec un changement sur quelques jours", "Seulement du grain de maïs"], answer: 2, why: "L'aliment ponte donne le calcium en plus dont la coquille a besoin ; on change lentement, sur quelques jours." }
          ]
        },
        {
          title: "Calculer le coût de l'aliment par kg de gain de poids ou par litre de lait",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calculer le coût de votre ration par kg, et le coût de l'aliment par kg de gain de poids, par plateau d'œufs ou par litre de lait.",
          text: [
            "Étape 1, le coût par kg de mélange. Multipliez les kg de chaque ingrédient par son prix, additionnez et divisez par le total de kg. Exemple avec des prix inventés en shillings kényans (KES) : 74,3 kg de maïs à KES 40 = 2 972 ; 25,7 kg de tourteau de soja à KES 90 = 2 313. Total : KES 5 285 pour 100 kg, soit KES 52,85 le kg. Ajoutez la mouture, le transport et le prémélange si vous les payez.",
            "Étape 2, l'aliment par unité produite. Pour la viande, notez l'aliment consommé et le poids gagné : si 10 porcs mangent 900 kg d'aliment croissance et gagnent 300 kg, chaque kg de gain a demandé 3 kg d'aliment (l'indice de consommation, en anglais FCR). Coût de l'aliment par kg de gain = 3 x KES 52,85 = KES 158,55. Pour les œufs : l'aliment mangé par la bande en une semaine x le prix au kg, divisé par les plateaux ramassés. Pour le lait : le coût de l'aliment de la vache pour la journée (fourrage plus aliment laitier) divisé par les litres qu'elle donne ce jour-là.",
            "Servez-vous des chiffres pour décider. Comparez le coût de l'aliment par kg de gain ou par litre avec votre prix de vente. Essayez un ingrédient moins cher, comme plus de légumineuses fourragères ou du son local, mais vérifiez qu'il atteint toujours l'objectif et ne réduit pas la croissance ou le lait. Travaillez dans votre monnaie, NGN, GHS ou XOF : la méthode est la même. Les prix changent, alors mettez la fiche à jour à chaque achat."
          ],
          steps: ["Faites la liste de chaque ingrédient, de ses kg pour 100 kg et de son prix au kg.", "Multipliez les kg par le prix pour chaque ingrédient et additionnez.", "Ajoutez la mouture, le transport et le prémélange ; divisez par le total de kg.", "Notez l'aliment consommé et le poids gagné, les œufs ou le lait produits.", "Coût de l'aliment par kg de gain = FCR x coût du kg d'aliment.", "Coût de l'aliment par litre ou par plateau = coût de l'aliment du jour ou de la semaine / litres ou plateaux."],
          words: [["Indice de consommation (FCR)", "les kg d'aliment nécessaires pour 1 kg de gain de poids ; plus il est bas, mieux c'est."], ["Coût par kg de gain", "l'argent dépensé en aliment pour chaque kg que l'animal prend."], ["Plateau", "un plateau de 30 œufs, l'unité habituelle pour vendre les œufs."]],
          slides: [
            { title: "Étape 1 : le coût par kg de mélange", bullets: ["kg x prix pour chaque ingrédient, puis additionner", "Exemple : KES 5 285 pour 100 kg = KES 52,85 le kg", "Ajoutez mouture, transport et prémélange"] },
            { title: "Étape 2 : l'aliment par kg de gain", bullets: ["900 kg d'aliment / 300 kg de gain = FCR de 3", "3 x KES 52,85 = KES 158,55 par kg de gain"] },
            { title: "Les œufs et le lait", bullets: ["Œufs : coût de l'aliment de la semaine / plateaux ramassés", "Lait : coût de l'aliment du jour / litres du jour"] },
            { title: "S'en servir pour décider", bullets: ["Comparez avec votre prix de vente", "Essayez des ingrédients locaux moins chers ; vérifiez l'objectif", "Mettez à jour à chaque achat ; les prix sont des exemples"] }
          ],
          tryIt: "Tâche finale : préparez une ration chiffrée pour une catégorie d'animaux. Écrivez le plan en trois parties, équilibrez le concentré avec le carré de Pearson, donnez les kg pour 100 kg, calculez son coût au kg avec vos prix locaux, et calculez le coût de l'aliment par kg de gain de poids, par plateau d'œufs ou par litre de lait.",
          youCanNow: "calculer le coût d'une ration au kg et le coût de votre aliment par kg de gain de poids, par plateau d'œufs ou par litre de lait.",
          quickCheck: [
            { objective: "O6", q: "100 kg de mélange coûtent XOF 20 000 au total. Quel est le coût par kg ?", options: ["XOF 2 000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20 000 / 100 kg = XOF 200 le kg." },
            { objective: "O6", q: "Des poulets de chair ont mangé 400 kg d'aliment et gagné 250 kg. Quel est le FCR ?", options: ["1,6", "0,6", "2,5", "4,0"], answer: 0, why: "FCR = aliment consommé / poids gagné = 400 / 250 = 1,6." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conserver, planifier et calculer le coût de vos aliments",
        questions: [
          { objective: "O4", q: "Pourquoi les éleveurs ajoutent-ils de la mélasse quand ils font de l'ensilage d'herbe à éléphant (Napier) ?", options: ["Le Napier contient peu de sucre, et la mélasse l'aide à fermenter", "Pour qu'il soit plus sucré pour les enfants", "Pour empêcher la pluie d'entrer", "Pour remplacer la bâche en plastique"], answer: 0, why: "Les herbes pauvres en sucre fermentent mal ; la mélasse donne le sucre dont la fermentation a besoin." },
          { objective: "O4", q: "Quel magasin protège le mieux les aliments des moisissures ?", options: ["Des sacs posés sur le sol nu contre un mur", "Des sacs dehors sous un arbre", "Des sacs sur des palettes, loin des murs, sous un toit qui ne fuit pas", "Des tas ouverts dans le bâtiment des animaux"], answer: 2, why: "Garder les sacs au sec, loin du sol et des murs, arrête l'humidité, les moisissures et les mycotoxines." },
          { objective: "O5", q: "Quelles sont les trois parties du plan d'alimentation de ce cours ?", options: ["Le repas du matin, de midi et du soir", "L'aliment de base ou le fourrage, le concentré et les compléments", "Seulement l'herbe, l'eau et le sel", "Seulement démarrage, croissance et finition"], answer: 1, why: "Le plan, c'est l'aliment de base, le concentré et les compléments, plus l'eau, pour chaque stade." },
          { objective: "O6", q: "L'aliment coûte KES 50 le kg et le FCR est de 3. Quel est le coût de l'aliment par kg de gain ?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Coût de l'aliment par kg de gain = FCR x prix au kg = 3 x 50 = KES 150." },
          { objective: "O6", q: "L'aliment d'une vache coûte NGN 3 000 par jour et elle donne 10 litres. Quel est le coût de l'aliment par litre ?", options: ["NGN 30", "NGN 300", "NGN 3 000", "NGN 30 000"], answer: 1, why: "3 000 / 10 litres = NGN 300 par litre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Alimentation du bétail et formulation des rations avec des ingrédients locaux",
    questions: [
      { objective: "O1", q: "Quels sont les quatre grands besoins qu'un animal tire de ses aliments et de son eau ?", options: ["L'énergie, les protéines, les minéraux et vitamines, et l'eau", "L'herbe, le sel, le sucre et l'huile", "Le maïs, les haricots, le riz et le lait", "La chaleur, la lumière, l'air et le sol"], answer: 0, why: "L'énergie, les protéines, les minéraux et vitamines, et l'eau sont les quatre besoins." },
      { objective: "O1", q: "Quel aliment apporte surtout le calcium pour la coquille des œufs ?", options: ["Le son de maïs", "L'herbe à éléphant (Napier)", "Le calcaire ou les coquillages", "La mélasse"], answer: 2, why: "Le calcaire et les coquillages broyés sont des sources de calcium pour les poules pondeuses." },
      { objective: "O1", q: "Quels animaux ont besoin de fourrages grossiers comme base de leur ration ?", options: ["Les poulets de chair", "Les pondeuses", "Les porcelets sevrés", "Les bovins, les chèvres et les moutons"], answer: 3, why: "Les ruminants digèrent les fourrages grossiers ; c'est la base de leur ration." },
      { objective: "O2", q: "Environ combien de protéines contient le grain de maïs ?", options: ["Environ 8 à 10 pour cent", "Environ 44 pour cent", "Environ 60 pour cent", "Aucune"], answer: 0, why: "Feedipedia donne au maïs environ 8 à 10,5 pour cent de protéines : c'est surtout un aliment énergétique." },
      { objective: "O2", q: "Lequel de ces aliments est un aliment protéique ?", options: ["Les cossettes de manioc", "Le son de blé", "La farine de poisson", "Les tiges de maïs"], answer: 2, why: "La farine de poisson est riche en protéines ; les autres apportent surtout de l'énergie ou des fibres." },
      { objective: "O2", q: "Quel est un avantage de la technique push-pull de l'icipe pour un éleveur laitier ?", options: ["Elle remplace l'eau", "Le desmodium et le Napier ou le Brachiaria donnent un fourrage de haute qualité", "Elle supprime le besoin de minéraux", "Elle transforme les bovins en ruminants"], answer: 1, why: "Le push-pull protège le maïs, et ses plantes associées sont un fourrage de haute qualité." },
      { objective: "O2", q: "Que devez-vous vérifier en achetant de la farine de poisson ?", options: ["Qu'elle vient d'une source de confiance et n'est pas mélangée à du sable ou du sel", "Qu'elle est la moins chère", "Qu'elle est humide", "Qu'elle sent le moisi"], answer: 0, why: "La qualité de la farine de poisson varie et elle peut être fraudée : achetez-la à des sources de confiance." },
      { objective: "O3", q: "Le carré de Pearson équilibre combien de nutriments à la fois ?", options: ["Tous", "Trois", "Deux", "Un seul"], answer: 3, why: "Il équilibre un seul nutriment, en général les protéines, entre deux aliments." },
      { objective: "O3", q: "Maïs (9 pour cent) et tourteau de soja (44 pour cent), objectif 18. Combien de parts de tourteau de soja ?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = 9 parts de tourteau de soja." },
      { objective: "O3", q: "Pourquoi ne pouvez-vous pas utiliser du maïs (9 pour cent) et du son (10 pour cent) pour atteindre 18 pour cent de protéines ?", options: ["L'objectif doit se situer entre les valeurs des deux aliments", "Le son est trop bon marché", "Le carré ne marche que pour les bovins", "Le maïs n'a pas de protéines"], answer: 0, why: "18 est au-dessus des deux aliments, donc aucun mélange des deux ne peut l'atteindre." },
      { objective: "O3", q: "Après le carré, comment vérifiez-vous votre mélange ?", options: ["Vous demandez à un voisin", "Vous le sentez", "kg x pourcentage de protéines de chaque aliment doivent donner l'objectif une fois additionnés", "Vous pesez les animaux le même jour"], answer: 2, why: "Additionner les protéines de chaque ingrédient confirme que le mélange atteint l'objectif." },
      { objective: "O4", q: "Quelles sont les quatre étapes de l'ensilage enseignées par la FAO ?", options: ["Couper, laver, sécher, brûler", "Hacher, remplir vite, tasser, fermer", "Semer, arroser, désherber, vendre", "Tremper, bouillir, refroidir, ensacher"], answer: 1, why: "Hacher, remplir vite, tasser et fermer donnent un bon ensilage." },
      { objective: "O4", q: "Qu'est-ce qu'une mycotoxine ?", options: ["Une vitamine de l'aliment", "Une sorte d'herbe", "Un complément de protéines", "Un poison invisible produit par les moisissures sur les aliments"], answer: 3, why: "Les moisissures peuvent produire des mycotoxines comme l'aflatoxine, qui nuisent aux animaux et peuvent passer dans le lait." },
      { objective: "O4", q: "Quelle règle aide à garder les aliments stockés en bon état ?", options: ["Utiliser d'abord les aliments les plus anciens", "Ranger les sacs par terre contre le mur", "Garder les aliments dans le bâtiment des animaux", "Mélanger l'aliment moisi avec de l'aliment frais"], answer: 0, why: "Premier entré, premier sorti : l'aliment ne reste pas stocké jusqu'à se gâter." },
      { objective: "O5", q: "Pourquoi nourrir selon le stade ?", options: ["Ça fait manger les animaux davantage", "Chaque stade a des besoins différents, donc vous ne payez pas des nutriments dont ils n'ont pas besoin", "Les fabricants d'aliments l'exigent", "Ça supprime le besoin d'eau"], answer: 1, why: "Adapter l'aliment au stade couvre les besoins et fait économiser de l'argent." },
      { objective: "O5", q: "Comment devez-vous passer d'un aliment au suivant ?", options: ["Du jour au lendemain", "Seulement quand les animaux sont malades", "Sur quelques jours", "Ne jamais changer d'aliment"], answer: 2, why: "Les changements progressifs ne perturbent pas la digestion ni l'appétit de l'animal." },
      { objective: "O5", q: "Chez les porcs et les volailles, quelle est la partie de base de la ration ?", options: ["L'herbe à éléphant (Napier)", "Le sel", "La farine de poisson", "Les céréales énergétiques et les sons de la farine"], answer: 3, why: "Les porcs et les volailles ne digèrent pas bien les fourrages grossiers, donc les céréales et les sons sont leur base." },
      { objective: "O6", q: "Que veut dire un indice de consommation de 2 ?", options: ["2 kg d'aliment pour chaque kg de gain de poids", "2 repas par jour", "2 animaux par mangeoire", "2 pour cent de protéines"], answer: 0, why: "Le FCR, ce sont les kg d'aliment nécessaires pour 1 kg de gain." },
      { objective: "O6", q: "50 kg de maïs à GHS 4 et 50 kg de son à GHS 2. Coût du kg de mélange ?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 pour 100 kg, soit GHS 3 le kg." },
      { objective: "O6", q: "Une bande de pondeuses mange de l'aliment qui coûte KES 7 000 par semaine et vous ramassez 70 plateaux. Quel est le coût de l'aliment par plateau ?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7 000 / 70 plateaux = KES 100 d'aliment par plateau." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie de la ration et vérifiez-la à nouveau.",
    criteria: [
      { name: "Catégorie, stade et plan en trois parties", objective: "O5", notYet: "Pas de catégorie ni de stade, ou il manque l'aliment de base, le concentré ou les compléments.", meets: "Nomme la catégorie et le stade et donne l'aliment de base, le concentré, les compléments et l'eau.", exceeds: "Montre aussi le stade suivant et quand et comment changer d'aliment." },
      { name: "Ingrédients bien classés et adaptés", objective: "O2", notYet: "Les ingrédients sont mal classés ou dangereux (par exemple moisis, ou du tourteau de coton sans limite pour les volailles).", meets: "Utilise des ingrédients locaux bien classés en énergétiques, protéiques, fourrages grossiers et compléments.", exceeds: "Utilise une légumineuse ou un son local moins cher et explique comment l'objectif est tenu." },
      { name: "Carré de Pearson", objective: "O3", notYet: "Aucun calcul montré, ou l'objectif n'est pas entre les deux aliments.", meets: "Carré dessiné, parts et kg pour 100 kg justes, et la vérification donne l'objectif à moins de 0,5 point.", exceeds: "Réserve d'abord les éléments fixes comme le prémélange et équilibre le reste." },
      { name: "Calcul des coûts", objective: "O6", notYet: "Le coût par kg manque ou les calculs sont faux.", meets: "Coût juste par kg de mélange et coût de l'aliment par kg de gain, par plateau d'œufs ou par litre de lait, en monnaie locale.", exceeds: "Le compare avec le prix de vente et montre un moyen de réduire le coût." },
      { name: "Qualité et stockage des aliments", objective: "O4", notYet: "Ne dit rien sur le lieu de stockage ni sur la façon d'éviter les moisissures.", meets: "Dit où les aliments sont stockés et comment ils restent secs et sans moisissure, les plus anciens d'abord.", exceeds: "Comprend un plan d'ensilage ou de foin pour la saison sèche." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui mélangent ou ajustent au moins une ration avec le carré de Pearson dans les 30 jours (enquête de suivi)",
      "Apprenants qui font de l'ensilage ou du foin avant la prochaine saison sèche",
      "Évolution du coût de l'aliment par kg de gain, par plateau d'œufs ou par litre de lait déclarée par les apprenants après trois mois",
      "Moins de cas d'aliments moisis et de maladies liées à l'alimentation dans les troupeaux et les bandes des apprenants"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier, stylo et calculatrice du téléphone ; un tableur sur le téléphone est facultatif",
      "Les prix locaux de 8 à 10 aliments, et les étiquettes ou les valeurs du fournisseur pour leurs protéines",
      "Pour une démonstration en groupe : du fourrage haché, un sac ou une gaine en plastique solide, et une balance",
      "Environ 70 à 80 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Avant la séance, rassemblez les prix locaux des aliments et leurs valeurs en protéines (étiquettes des fournisseurs, laboratoire d'analyse ou service de vulgarisation) pour que les apprenants s'exercent avec de vrais chiffres.",
      "Faites le carré de Pearson ensemble au tableau ou sur un tableau de papier avec un exemple local, puis laissez les binômes en faire un second.",
      "Faites une démonstration d'ensilage en sac si la saison le permet, et ouvrez-le avec le groupe quelques semaines plus tard.",
      "Ne donnez aucune dose d'aliment médicamenteux, d'additif ou de médicament ; renvoyez ces questions au vétérinaire et à l'étiquette.",
      "Évaluez la ration chiffrée avec la grille et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
