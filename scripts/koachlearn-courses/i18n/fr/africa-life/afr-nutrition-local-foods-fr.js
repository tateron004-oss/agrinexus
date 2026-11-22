"use strict";

// Koach Learn course (French translation of africa-life/afr-nutrition-local-foods.js). See scripts/koachlearn-courses/README.md, "Translations".

const WHO_DIET = { name: "OMS, aide-mémoire : Alimentation saine (fruits et légumes, sel, sucre et graisses)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "OMS, aide-mémoire : Alimentation du nourrisson et du jeune enfant", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "OMS, aide-mémoire : Anémie (personnes à risque, aliments riches en fer, aliments qui bloquent le fer)", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "OMS : Manuel sur les cinq clefs pour des aliments plus sûrs", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-fr",
  lang: "fr",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Bien manger avec peu d'argent grâce aux aliments locaux",
  skills: "Classer les aliments locaux par groupes, Composer une assiette équilibrée, Réduire le sel, le sucre et l'huile et garder les aliments sûrs, Comparer les prix des aliments pour trouver le meilleur rapport qualité-prix, Nourrir les jeunes enfants et les femmes enceintes ou allaitantes, Écrire un menu de la semaine avec un petit budget",
  outcome: "écrire un menu de la semaine pour votre foyer qui utilise chaque jour des aliments locaux de plusieurs groupes, qui respecte votre budget alimentaire, qui suit les conseils de l'OMS sur le sel, le sucre et la sécurité des aliments, et qui donne aux jeunes enfants et aux femmes enceintes ou allaitantes ce dont ils ont besoin.",
  about: [
    "Ce cours s'adresse à toute personne qui achète ou prépare la nourriture d'un foyer en Afrique : mères et pères, grands-mères, étudiants qui vivent seuls et personnes qui vendent des plats cuisinés. Vous n'avez pas besoin d'argent pour des aliments spéciaux. Une bonne alimentation vient des haricots, des feuilles vertes, des céréales, du poisson, des œufs et des fruits qui sont déjà sur votre marché.",
    "Le chapitre 1 porte sur la connaissance des aliments : les groupes d'aliments avec des exemples locaux, la composition d'une assiette équilibrée, et la réduction du sel, du sucre et de l'huile tout en gardant les aliments sûrs. Le chapitre 2 porte sur bien manger avec un petit budget : comparer les prix pour trouver le meilleur rapport qualité-prix, nourrir ceux qui en ont le plus besoin et écrire un menu de la semaine.",
    "Ce cours suit les conseils de l'Organisation mondiale de la Santé (OMS, en anglais WHO). Il ne donne pas de régime pour des maladies comme le diabète, le VIH ou la malnutrition, ni de conseils sur les compléments ; pour cela, adressez-vous à un centre de santé, à un nutritionniste ou à un agent de santé communautaire. Tous les prix sont des exemples ; utilisez les prix de votre propre marché. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un menu d'une semaine pour votre foyer (ou un exemple, comme une famille de cinq personnes à Kisumu, une famille de quatre à Ibadan ou un étudiant à Accra) : pour chaque jour, les repas et les groupes d'aliments qu'ils couvrent, avec des fruits ou des légumes tous les jours ; les aliments pour tout jeune enfant ou toute femme enceinte ou allaitante ; une liste de courses avec les prix de votre marché et le total de la semaine comparé à votre budget ; et trois habitudes que vous allez adopter (moins de sel, moins de sucre et une clef pour des aliments plus sûrs).",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Personnes qui achètent ou préparent la nourriture d'un foyer au Kenya, au Nigeria, au Ghana, au Sénégal, en Côte d'Ivoire, au Cameroun, au Maroc, en Égypte et partout en Afrique : parents, grands-mères, jeunes adultes qui vivent seuls et petits vendeurs de plats cuisinés. Beaucoup ont des revenus faibles et irréguliers et utilisent un téléphone simple.",
    startingPoint: "La plupart préparent chaque jour des plats de base qui calent (ugali, riz, gari, foufou, banku, attiéké, pain), mais souvent avec peu de légumes, de haricots ou d'aliments d'origine animale. Beaucoup mettent beaucoup de sel, de bouillon cube, de sucre ou d'huile. Peu comparent les prix des aliments selon leur valeur ou prévoient les repas de la semaine, et beaucoup ne savent pas bien comment nourrir un bébé à partir de 6 mois.",
    gap: "Beaucoup de familles mangent assez pour se sentir rassasiées, mais pas assez varié, ce qui entraîne l'anémie, une mauvaise croissance des enfants et, de plus en plus, l'hypertension et le diabète chez les adultes. Les apprenants peuvent mieux manger pour le même prix en choisissant des aliments locaux de plusieurs groupes, en réduisant le sel et le sucre et en prévoyant leurs achats.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de nutrition est expliqué",
      "Budget : faible et irrégulier ; le cours ne donne jamais de vrais prix, seulement des exemples, et les apprenants utilisent les prix de leur marché",
      "Les aliments varient selon le pays et la saison : les exemples viennent du Kenya, du Nigeria, du Ghana, du Sénégal, de Côte d'Ivoire, du Maroc et d'Égypte",
      "Pas de régime pour des maladies, de compléments ni de médicaments : ces questions vont au centre de santé ou à un nutritionniste",
      "Appareils : un téléphone simple pour la calculatrice et les notes, ou du papier"
    ],
    prerequisites: "Aucun. Savoir faire des additions et des multiplications simples aide pour la leçon 4 ; la calculatrice du téléphone suffit."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste d'aliments vendus sur votre marché", action: "classer les aliments locaux dans les groupes énergétiques, bâtisseurs et protecteurs", standard: "avec au moins 8 bonnes réponses sur 10" },
    { id: "O2", condition: "À partir des aliments de votre cuisine", action: "prévoir une assiette équilibrée avec un aliment de base, un aliment bâtisseur et des légumes ou des fruits", standard: "avec des légumes ou des fruits sur environ la moitié de l'assiette" },
    { id: "O3", condition: "À partir d'une recette ou d'un plat de votre foyer", action: "modifier la recette pour utiliser moins de sel, de sucre et d'huile et appliquer les cinq clefs de l'OMS pour des aliments plus sûrs", standard: "en citant au moins deux changements et les cinq clefs" },
    { id: "O4", condition: "Avec les prix de votre propre marché", action: "comparer le coût d'aliments du même groupe pour trouver le meilleur rapport qualité-prix", standard: "en choisissant l'option la moins chère qui apporte les mêmes nutriments, avec des calculs justes" },
    { id: "O5", condition: "Pour un enfant de 6 à 23 mois, ou une femme enceinte ou allaitante", action: "prévoir les repas d'une journée selon les conseils d'alimentation de l'OMS", standard: "avec le bon nombre de repas pour l'âge de l'enfant, ou plus d'aliments riches en fer pour la femme" },
    { id: "O6", condition: "Selon la taille de votre foyer et votre budget alimentaire", action: "écrire un menu de la semaine et une liste de courses", standard: "couvrant plusieurs groupes d'aliments chaque jour et sans dépasser le budget" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Connaître vos aliments",
      lessons: [
        {
          title: "Les groupes d'aliments avec des aliments locaux",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classer les aliments vendus sur votre marché dans les groupes énergétiques, bâtisseurs et protecteurs.",
          text: [
            "Aucun aliment ne donne à lui seul tout ce dont le corps a besoin. Pour s'en souvenir facilement, on utilise trois groupes. Les aliments énergétiques (ils « font bouger ») donnent de la force : maïs, riz, mil, sorgho, manioc, igname, banane plantain, patate douce, pain, et aussi l'huile. Les aliments bâtisseurs (ils « font grandir ») construisent les muscles et le sang : haricots, lentilles, niébé, arachides, œufs, poisson, viande, poulet et lait. Les aliments protecteurs (ils « font briller ») aident à lutter contre les maladies : légumes et fruits.",
            "Exemples locaux : au Kenya, ugali (énergie), githeri ou omena (bâtisseurs) et sukuma wiki (protecteur). Au Nigeria, gari ou igname (énergie), haricots ou egusi (bâtisseurs) et ugu ou feuilles amères (protecteurs). Au Ghana, banku ou kenkey (énergie), poisson ou soupe d'arachide (bâtisseurs) et kontomire (protecteur). Au Sénégal, riz ou mil avec du niébé et des légumes. En Égypte, pain avec du foul (fèves) et de la salade.",
            "Certains aliments sont des aides spéciales. Les feuilles vert foncé (amarante, feuilles de manioc, moringa, kontomire) et les aliments orange (patate douce à chair orange, papaye, mangue, carotte) sont riches en vitamines. Les haricots, les petits poissons séchés, les œufs, le foie et les feuilles vert foncé apportent du fer, qui prévient l'anémie."
          ],
          steps: ["Écrivez les aliments que votre foyer a mangés hier.", "Marquez chacun : énergétique, bâtisseur ou protecteur.", "Voyez quel groupe manque ou est trop petit.", "Nommez un aliment local que vous pouvez ajouter pour ce groupe."],
          words: [["Groupe d'aliments", "des aliments qui font un travail semblable dans le corps."], ["Aliment de base", "l'aliment principal qui cale, mangé presque tous les jours, comme l'ugali, le riz, le gari ou le pain."], ["Anémie", "un sang faible, souvent par manque de fer ; elle rend fatigué et faible."]],
          slides: [
            { title: "Trois groupes d'aliments", bullets: ["Énergétiques (bouger) : maïs, riz, manioc, igname, plantain, pain", "Bâtisseurs (grandir) : haricots, arachides, œufs, poisson, viande, lait", "Protecteurs (briller) : légumes et fruits"] },
            { title: "Assiettes locales", bullets: ["Kenya : ugali, omena, sukuma wiki", "Nigeria : gari ou igname, haricots, ugu", "Ghana : banku, poisson, kontomire ; Égypte : pain, foul, salade"] },
            { title: "Aides spéciales", bullets: ["Feuilles vert foncé et aliments orange : vitamines", "Haricots, petits poissons séchés, œufs, foie, feuilles : fer"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Écrivez tout ce que votre foyer a mangé hier. Marquez chaque aliment E (énergétique), B (bâtisseur) ou P (protecteur). Entourez le groupe le moins mangé et écrivez un aliment local que vous pourriez ajouter demain.",
          youCanNow: "classer les aliments locaux dans les groupes énergétiques, bâtisseurs et protecteurs et repérer ce qui manque.",
          quickCheck: [
            { objective: "O1", q: "Lequel de ces aliments est un aliment bâtisseur ?", options: ["Manioc", "Haricots", "Riz", "Sucre"], answer: 1, why: "Les haricots sont riches en protéines, qui construisent le corps." },
            { objective: "O1", q: "Une famille d'Accra a mangé du banku et de la sauce pimentée toute la journée. Quel groupe manque le plus ?", options: ["Les aliments énergétiques", "Le sel", "Les aliments bâtisseurs et protecteurs", "Rien"], answer: 2, why: "Le banku est un aliment énergétique ; le repas a besoin de poisson ou de haricots et de légumes." }
          ]
        },
        {
          title: "Composer une assiette équilibrée",
          objectives: ["O2"],
          minutes: 5,
          goal: "Prévoir une assiette équilibrée avec un aliment de base, un aliment bâtisseur et des légumes ou des fruits.",
          text: [
            "Un guide simple pour chaque repas principal : environ la moitié de l'assiette en légumes et fruits, environ un quart en aliment de base et environ un quart en aliment bâtisseur. Vous n'avez pas besoin d'une vraie assiette ; imaginez le bol ou le plat commun avec les mêmes parts.",
            "L'OMS conseille aux adultes de manger au moins 400 grammes de fruits et légumes par jour, soit environ cinq poignées. Les feuilles cuites dans une soupe ou une sauce comptent. Les céréales complètes et les aliments moins raffinés, comme le riz complet, le mil, le sorgho ou la farine de maïs complète, calent plus longtemps.",
            "Faites de petits changements, pas une nouvelle cuisine. Ajoutez une poignée de feuilles vertes à la sauce. Ajoutez des haricots au riz (waakye au Ghana, riz aux haricots au Nigeria, githeri au Kenya). Ajoutez un petit morceau de poisson ou un œuf pour les enfants. Mangez un fruit de saison au lieu d'une friandise sucrée.",
            "Pour aider le corps à utiliser le fer des haricots et des feuilles, mangez-les avec un aliment riche en vitamine C comme la tomate, l'orange, la goyave ou la mangue. Buvez le thé ou le café entre les repas, pas pendant, car ils rendent le fer plus difficile à absorber."
          ],
          steps: ["Imaginez l'assiette en quatre parts.", "Remplissez environ la moitié avec des légumes et des fruits.", "Remplissez environ un quart avec un aliment de base.", "Remplissez environ un quart avec un aliment bâtisseur.", "Ajoutez un aliment riche en vitamine C ; gardez le thé pour entre les repas."],
          words: [["Équilibré", "un repas avec le bon mélange de groupes d'aliments."], ["Céréale complète", "une céréale qui garde son enveloppe, comme le riz complet, le mil ou la farine de maïs complète."]],
          slides: [
            { title: "L'assiette équilibrée", bullets: ["Environ la moitié : légumes et fruits", "Environ un quart : aliment de base", "Environ un quart : aliment bâtisseur"] },
            { title: "Fruits et légumes", bullets: ["OMS : au moins 400 g par jour pour les adultes", "Environ cinq poignées", "Les feuilles dans la soupe ou la sauce comptent"] },
            { title: "Petits changements", bullets: ["Des feuilles dans la sauce ; des haricots dans le riz", "Un œuf ou du poisson pour les enfants", "Un fruit de saison au lieu de sucreries"] },
            { title: "Aider le fer à agir", bullets: ["Haricots et feuilles avec tomate, orange ou mangue", "Thé et café entre les repas, pas pendant"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Prévoyez le repas principal de demain avec les aliments que vous avez déjà. Dessinez l'assiette (ou le bol) et écrivez ce qui va dans chaque part. Ajoutez un aliment riche en vitamine C.",
          youCanNow: "prévoir une assiette équilibrée avec un aliment de base, un aliment bâtisseur et beaucoup de légumes ou de fruits.",
          quickCheck: [
            { objective: "O2", q: "Dans une assiette équilibrée, quelle part environ doit être en légumes et fruits ?", options: ["Environ la moitié", "Rien", "Un petit coin", "Toute l'assiette"], answer: 0, why: "Environ la moitié de l'assiette en légumes et fruits : c'est le guide simple." },
            { objective: "O2", q: "Pourquoi manger des tomates ou une orange avec des haricots et des feuilles ?", options: ["Elles ajoutent du sel", "Elles aident le corps à absorber le fer", "Elles remplacent les haricots", "Elles font durer la nourriture plus longtemps"], answer: 1, why: "La vitamine C aide le corps à utiliser le fer des aliments végétaux." }
          ]
        },
        {
          title: "Moins de sel, de sucre et d'huile, et des aliments sûrs",
          objectives: ["O3"],
          minutes: 5,
          goal: "Modifier une recette pour utiliser moins de sel, de sucre et d'huile et appliquer les cinq clefs pour des aliments plus sûrs.",
          text: [
            "Trop de sel fait monter la tension artérielle, ce qui peut causer un accident vasculaire cérébral (AVC) et des maladies du cœur. L'OMS conseille aux adultes de manger moins de 5 grammes de sel par jour, un peu moins d'une cuillère à café rase, en comptant tout le sel des bouillons cubes, des assaisonnements en poudre, du poisson salé et du pain. Mettez moins de sel et moins de cubes, et donnez du goût avec de l'oignon, de l'ail, du gingembre, du piment et des herbes. Si vous utilisez du sel, choisissez du sel iodé.",
            "Sucre : l'OMS conseille de garder les sucres libres (le sucre ajouté aux aliments et aux boissons, et le sucre du miel, des sodas et des jus) à moins de 10 % de l'énergie de la journée, et moins, c'est mieux. Pour la plupart des adultes, cela fait moins d'environ 12 cuillères à café rases par jour. Le thé sucré, les sodas et les jus s'additionnent vite. Huile : utilisez-en peu et faites moins souvent de la friture ; faites plutôt bouillir, cuire à la vapeur ou mijoter.",
            "La sécurité des aliments évite la diarrhée et les intoxications alimentaires. Les cinq clefs de l'OMS pour des aliments plus sûrs : prenez l'habitude de la propreté (lavez les mains et les surfaces) ; séparez les aliments crus des aliments cuits ; faites bien cuire, surtout la viande, le poisson et les œufs ; maintenez les aliments à bonne température (ne laissez pas un plat cuit dehors pendant des heures) ; et utilisez de l'eau et des aliments frais et sûrs.",
            "Ces règles comptent encore plus si vous vendez des plats cuisinés, car une seule erreur peut rendre malades beaucoup de clients."
          ],
          steps: ["Comptez le sel, les cubes et le sucre d'une recette habituelle.", "Réduisez un peu chacun et ajoutez oignon, ail, piment ou herbes.", "Choisissez de mijoter ou de bouillir au lieu de frire une fois par semaine.", "Vérifiez la recette avec les cinq clefs pour des aliments plus sûrs."],
          words: [["Sel iodé", "du sel auquel on a ajouté de l'iode, dont le corps a besoin."], ["Sucres libres", "le sucre ajouté aux aliments et aux boissons, plus le sucre du miel, des sirops et des jus de fruits."], ["Intoxication alimentaire", "une maladie causée par un aliment qui contient des microbes ou du poison."]],
          slides: [
            { title: "Moins de sel", bullets: ["OMS : moins de 5 g par jour, un peu moins d'une cuillère à café rase", "Comptez cubes, assaisonnements, poisson salé et pain", "Oignon, ail, piment, herbes ; utilisez du sel iodé"] },
            { title: "Moins de sucre et d'huile", bullets: ["OMS : sucres libres sous 10 % de l'énergie, moins c'est mieux", "Thé sucré, sodas et jus s'additionnent vite", "Moins de friture : bouillir, vapeur ou mijoter"] },
            { title: "Cinq clefs pour des aliments plus sûrs (OMS)", bullets: ["Propreté ; séparez le cru et le cuit", "Cuisez bien ; maintenez les aliments à bonne température", "Utilisez de l'eau et des produits crus sûrs"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Prenez un plat que votre foyer mange souvent, comme le riz jollof, la soupe d'egusi, le thiéboudienne ou une sauce aux haricots. Écrivez deux changements qui réduisent le sel, le sucre ou l'huile, et une clef de sécurité des aliments que vous appliquerez en le préparant.",
          youCanNow: "modifier une recette pour utiliser moins de sel, de sucre et d'huile et garder les aliments sûrs avec les cinq clefs.",
          quickCheck: [
            { objective: "O3", q: "Quel changement réduit le sel dans une sauce ?", options: ["Ajouter deux bouillons cubes de plus", "Ajouter du poisson salé et plus de sel", "Mettre moins de cubes et ajouter oignon, ail et piment", "Ajouter plus d'assaisonnement en poudre"], answer: 2, why: "Les cubes et les assaisonnements en poudre sont salés ; les herbes et les épices donnent du goût sans sel." },
            { objective: "O3", q: "Laquelle est l'une des cinq clefs de l'OMS pour des aliments plus sûrs ?", options: ["Laisser le plat cuit dehors toute la journée", "Séparer les aliments crus des aliments cuits", "Utiliser la même planche pour la viande crue et la salade sans la laver", "Goûter la viande crue pour la vérifier"], answer: 1, why: "Séparer le cru et le cuit empêche les microbes de se propager." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître vos aliments",
        questions: [
          { objective: "O1", q: "Lequel est un aliment protecteur (qui fait briller) ?", options: ["Kontomire (feuilles de taro)", "Gari", "Huile de palme", "Pain blanc"], answer: 0, why: "Les feuilles vertes sont des aliments protecteurs pleins de vitamines." },
          { objective: "O1", q: "Quel aliment apporte du fer pour aider à prévenir l'anémie ?", options: ["Le sucre", "Le soda", "Les petits poissons séchés comme l'omena", "Le thé"], answer: 2, why: "Les petits poissons séchés, les haricots, les œufs et les feuilles vert foncé apportent du fer." },
          { objective: "O2", q: "Quel repas est le plus équilibré ?", options: ["Riz et soda", "Ugali, haricots et sukuma wiki", "Pain et thé sucré", "Gari et sucre"], answer: 1, why: "Il contient un aliment de base, un aliment bâtisseur et des légumes." },
          { objective: "O2", q: "Quelle quantité environ de fruits et légumes l'OMS conseille-t-elle aux adultes chaque jour ?", options: ["Une tranche", "Aucune", "Seulement le dimanche", "Au moins 400 g, environ cinq poignées"], answer: 3, why: "L'OMS conseille au moins 400 g par jour pour les adultes." },
          { objective: "O3", q: "L'OMS conseille aux adultes de limiter le sel à moins de :", options: ["5 g par jour, un peu moins d'une cuillère à café rase", "Une tasse par jour", "Dix cuillères à café par jour", "Il n'y a pas de limite"], answer: 0, why: "Moins de 5 g de sel par jour réduit le risque d'hypertension." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien manger avec un petit budget",
      lessons: [
        {
          title: "Comparer les prix des aliments pour bien dépenser",
          objectives: ["O4"],
          minutes: 5,
          goal: "Comparer le coût d'aliments du même groupe pour trouver le meilleur rapport qualité-prix.",
          text: [
            "Bien manger ne coûte pas forcément plus cher. L'astuce est de comparer des aliments qui font le même travail. Pour les aliments bâtisseurs, comparez les haricots, les lentilles, le niébé, les arachides, les œufs, les petits poissons séchés et la viande selon le prix d'un repas familial de chacun. Les haricots et les petits poissons donnent souvent beaucoup pour peu d'argent.",
            "Comment comparer : écrivez le prix et la quantité obtenue, puis calculez le coût d'un repas familial. Exemple (chiffres inventés, pas de vrais prix) : une tasse de haricots secs coûte 600 NGN et nourrit la famille une fois ; la viande pour le même repas coûte 3 000 NGN. Les haricots sont cinq fois moins chers pour ce repas. Utilisez les prix de votre propre marché ; ils changent avec la saison.",
            "Pour économiser : achetez les fruits et légumes de saison, quand ils sont les moins chers. Achetez les produits secs (haricots, céréales, poisson séché) en plus grande quantité avec vos voisins ou votre groupe d'épargne, et partagez. Cultivez des feuilles comme l'amarante, le chou, le moringa ou les épinards dans un petit jardin, un sac ou une boîte de conserve. Achetez moins de sodas, de bonbons et de snacks en sachet, qui coûtent cher et apportent peu.",
            "Ne gaspillez pas : rangez les produits secs dans des récipients fermés et secs, loin de l'humidité et des nuisibles, et utilisez les restes sans danger le lendemain."
          ],
          steps: ["Choisissez un groupe d'aliments, par exemple les aliments bâtisseurs.", "Écrivez le prix et la quantité de trois aliments de ce groupe.", "Calculez le coût d'un repas familial pour chacun.", "Choisissez le meilleur rapport qualité-prix et notez les aliments de saison."],
          words: [["Rapport qualité-prix", "la quantité de bonne nourriture que vous obtenez pour votre argent."], ["De saison", "la période de l'année où une culture est récoltée, donc abondante et moins chère."]],
          slides: [
            { title: "Comparer ce qui est comparable", bullets: ["Même groupe d'aliments, même travail", "Coût d'un repas familial", "Haricots et petits poissons : souvent beaucoup pour peu"] },
            { title: "Comment comparer", bullets: ["Écrivez le prix et la quantité", "Calculez le coût par repas familial", "Utilisez les prix de votre marché ; ils changent"] },
            { title: "Pour économiser", bullets: ["Achetez de saison", "Achetez les produits secs en gros avec vos voisins", "Feuilles dans un sac ou une boîte ; moins de sodas et snacks"] }
          ],
          tryIt: "Au marché ou à la boutique, écrivez le prix et la quantité de trois aliments bâtisseurs (par exemple haricots, œufs et poisson séché). Calculez avec la calculatrice du téléphone le coût d'un repas familial pour chacun. Entourez le meilleur rapport qualité-prix. Écrivez la monnaie (KES, NGN, GHS, XOF, MAD ou la vôtre).",
          youCanNow: "comparer les prix des aliments selon le coût par repas et choisir le meilleur rapport qualité-prix dans chaque groupe.",
          quickCheck: [
            { objective: "O4", q: "Quelle est la façon la plus juste de comparer les haricots et la viande ?", options: ["La couleur du sac", "La boutique la plus proche", "Le plus lourd", "Le coût d'un repas familial de chacun"], answer: 3, why: "Le coût par repas compare ce que vous obtenez vraiment pour votre argent." },
            { objective: "O4", q: "Exemple seulement : les haricots pour un repas coûtent 500 XOF et le poisson pour un repas coûte 1 500 XOF. Combien de fois les haricots sont-ils moins chers ?", options: ["2 fois", "3 fois", "5 fois", "Le même prix"], answer: 1, why: "1 500 divisé par 500 font 3." }
          ]
        },
        {
          title: "Nourrir les jeunes enfants et les femmes enceintes ou allaitantes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Prévoir les repas d'une journée pour un jeune enfant ou une femme enceinte ou allaitante selon les conseils de l'OMS.",
          text: [
            "Les jeunes enfants grandissent vite et ont un petit estomac : ils ont besoin de petits repas fréquents, pleins de bonne nourriture. L'OMS conseille seulement le lait maternel pendant les 6 premiers mois. À partir d'environ 6 mois, ajoutez des aliments familiaux mous et écrasés et continuez l'allaitement jusqu'à 2 ans ou plus. Commencez par de petites quantités puis donnez peu à peu plus de nourriture, plus épaisse et plus variée.",
            "Combien de fois (OMS) : 2 à 3 repas par jour pour les bébés de 6 à 8 mois ; 3 à 4 repas par jour pour les enfants de 9 à 23 mois, plus 1 à 2 collations si besoin. Faites une bouillie assez épaisse pour tenir sur la cuillère, et ajoutez un aliment d'un autre groupe : haricots écrasés ou pâte d'arachide, un œuf, petit poisson moulu en poudre, feuilles écrasées ou papaye. Donnez à l'enfant son propre bol pour voir combien il mange.",
            "Les femmes enceintes et allaitantes ont besoin de plus de bonne nourriture, pas seulement de plus d'aliment de base. Ajoutez chaque jour un petit repas ou une collation en plus, avec des aliments riches en fer (haricots, petits poissons, œufs, foie, feuilles vert foncé) mangés avec un aliment riche en vitamine C. Allez à toutes les consultations prénatales et prenez seulement les compléments donnés par le centre de santé.",
            "Quand un enfant est malade, l'OMS conseille plus de boissons et plus de tétées, et ses aliments mous préférés. Après la maladie, donnez plus de nourriture pour l'aider à rattraper. Si un enfant ne grandit pas bien, ou s'il est très maigre ou gonflé, allez au centre de santé."
          ],
          steps: ["Vérifiez l'âge de l'enfant en mois.", "Prévoyez le nombre de repas pour cet âge.", "Rendez chaque repas épais et ajoutez un autre groupe d'aliments.", "Pour une femme enceinte ou allaitante : ajoutez une collation avec un aliment riche en fer et de la vitamine C."],
          words: [["Alimentation de complément", "donner des aliments familiaux à partir d'environ 6 mois tout en continuant l'allaitement."], ["Collation", "une petite quantité de nourriture entre les repas, comme une banane, des arachides ou un œuf."]],
          slides: [
            { title: "Bébés et jeunes enfants (OMS)", bullets: ["0-6 mois : seulement le lait maternel", "Dès environ 6 mois : aliments familiaux mous plus lait maternel", "Continuez l'allaitement jusqu'à 2 ans ou plus"] },
            { title: "Combien de fois", bullets: ["6-8 mois : 2-3 repas par jour", "9-23 mois : 3-4 repas par jour, plus 1-2 collations", "Bouillie épaisse plus un autre groupe d'aliments"] },
            { title: "Femmes enceintes et allaitantes", bullets: ["Un petit repas ou une collation en plus", "Aliments riches en fer avec vitamine C", "Seulement les compléments du centre de santé"] },
            { title: "Enfant malade", bullets: ["Plus de boissons et de tétées", "Aliments mous préférés ; plus de nourriture après", "Ne grandit pas bien : allez au centre de santé"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Prévoyez une journée de repas pour un enfant de 10 mois (par exemple à Douala ou à Kumasi) ou pour une mère qui allaite. Écrivez chaque repas et chaque collation, et les groupes d'aliments qu'ils couvrent.",
          youCanNow: "prévoir les repas d'une journée pour un jeune enfant ou une femme enceinte ou allaitante selon les conseils de l'OMS.",
          quickCheck: [
            { objective: "O5", q: "Combien de repas par jour l'OMS conseille-t-elle pour un bébé de 7 mois ?", options: ["2 à 3", "1", "6 à 8", "Aucun ; seulement le lait maternel"], answer: 0, why: "L'OMS conseille 2 à 3 repas par jour de 6 à 8 mois, avec l'allaitement." },
            { objective: "O5", q: "Quelle bouillie est la meilleure pour un enfant de 9 mois ?", options: ["Une bouillie claire et liquide avec du sucre", "Du thé seul", "Une bouillie épaisse avec de la pâte d'arachide ou un œuf écrasé", "Du soda"], answer: 2, why: "Une bouillie épaisse avec un autre groupe d'aliments apporte plus de nutriments dans un petit estomac." }
          ]
        },
        {
          title: "Écrire un menu de la semaine avec un petit budget",
          objectives: ["O6"],
          minutes: 6,
          goal: "Écrire un menu de la semaine et une liste de courses qui respectent votre budget.",
          text: [
            "Un menu fait économiser de l'argent et aide à bien manger. Commencez par votre budget alimentaire de la semaine. Puis prévoyez les repas principaux, avec des aliments de base bon marché, des haricots ou des petits poissons la plupart des jours, et des légumes tous les jours. Prévoyez des œufs, de la viande ou du poulet certains jours si le budget le permet.",
            "Refaites les plats que votre famille aime, mais changez le légume ou le haricot pour varier. Faites cuire les haricots une fois et utilisez-les pour deux repas. Prévoyez d'abord les repas de l'enfant et la collation de la femme enceinte ou allaitante, pour qu'ils ne soient jamais ceux qui manquent.",
            "À partir du menu, écrivez la liste de courses avec les prix de votre marché, additionnez-les et comparez avec le budget. Si vous dépassez, remplacez un aliment cher par un aliment moins cher du même groupe, et non par rien. Exemple (chiffres inventés) : une famille de Nakuru avec un budget de 2 500 KES par semaine remplace deux repas de viande par de l'omena et des haricots pour rester dans le budget.",
            "Affichez le menu au mur ou gardez-en une photo dans votre téléphone. À la fin de la semaine, vérifiez ce que vous avez dépensé et ce que vous avez jeté, et modifiez le menu de la semaine suivante."
          ],
          steps: ["Écrivez votre budget alimentaire de la semaine.", "Prévoyez les repas principaux des sept jours avec plusieurs groupes d'aliments chaque jour.", "Prévoyez d'abord les repas des enfants et des femmes enceintes ou allaitantes.", "Écrivez la liste de courses avec vos prix et faites le total.", "Si vous dépassez le budget, remplacez dans le même groupe d'aliments."],
          words: [["Budget", "la somme d'argent que vous prévoyez de dépenser."], ["Menu de la semaine", "une liste de ce que vous allez cuisiner chaque jour."]],
          slides: [
            { title: "Commencez par le budget", bullets: ["L'argent de la nourriture pour la semaine", "Aliments de base bon marché, haricots ou petits poissons", "Des légumes tous les jours"] },
            { title: "Prévoyez malin", bullets: ["Refaites les plats aimés, changez le légume", "Cuire les haricots une fois, les utiliser deux fois", "Les enfants et les mères d'abord"] },
            { title: "Liste de courses", bullets: ["Les prix de votre propre marché", "Additionnez et comparez avec le budget", "Dépassement ? Remplacez dans le même groupe"] },
            { title: "Vérifier et ajuster", bullets: ["Combien avez-vous dépensé ?", "Qu'avez-vous gaspillé ?", "Modifiez le menu de la semaine suivante"] }
          ],
          tryIt: "Tâche finale : écrivez votre menu d'une semaine. Pour chaque jour, notez les repas et les groupes d'aliments, avec des fruits ou des légumes tous les jours ; marquez les aliments pour tout jeune enfant ou toute femme enceinte ou allaitante ; écrivez la liste de courses avec vos prix et comparez le total avec le budget ; et écrivez trois habitudes que vous allez adopter.",
          youCanNow: "écrire un menu de la semaine et une liste de courses qui nourrissent bien le foyer sans dépasser votre budget.",
          quickCheck: [
            { objective: "O6", q: "Votre liste de courses dépasse le budget. Quel est le meilleur changement ?", options: ["Supprimer tous les légumes", "Remplacer un aliment cher par un moins cher du même groupe", "Donner moins aux enfants", "Acheter plus de sodas"], answer: 1, why: "Remplacer dans un même groupe garde le repas équilibré et moins cher." },
            { objective: "O6", q: "Les repas de qui faut-il prévoir en premier ?", options: ["Ceux des invités", "Seulement ceux des adultes", "Ceux de personne en particulier", "Ceux des jeunes enfants et des femmes enceintes ou allaitantes"], answer: 3, why: "Ce sont eux qui ont le plus besoin de bonne nourriture, ils ne doivent jamais en manquer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien manger avec un petit budget",
        questions: [
          { objective: "O4", q: "Quelle est une bonne façon d'économiser sur les légumes ?", options: ["Acheter seulement hors saison", "Les acheter de saison ou cultiver des feuilles dans un sac", "Acheter seulement des snacks en sachet", "Acheter moins souvent et les laisser pourrir"], answer: 1, why: "Les produits de saison sont moins chers, et les feuilles poussent facilement à la maison." },
          { objective: "O4", q: "Exemple seulement : 1 kg de lentilles à Casablanca coûte 20 MAD et donne 4 repas familiaux. Quel est le coût par repas ?", options: ["80 MAD", "4 MAD", "5 MAD", "24 MAD"], answer: 2, why: "20 divisé par 4 repas font 5." },
          { objective: "O5", q: "Jusqu'à quel âge l'OMS conseille-t-elle de continuer l'allaitement ?", options: ["2 ans ou plus", "6 mois", "1 mois", "Il faut arrêter quand les aliments commencent"], answer: 0, why: "L'allaitement continue avec les aliments familiaux jusqu'à 2 ans ou plus." },
          { objective: "O5", q: "Qu'est-ce qu'une mère qui allaite doit ajouter chaque jour ?", options: ["Plus de thé sucré", "Rien", "Seulement plus de riz", "Un petit repas ou une collation en plus avec un aliment riche en fer"], answer: 3, why: "Elle a besoin de plus de bonne nourriture, surtout d'aliments riches en fer." },
          { objective: "O6", q: "Quelle est la première chose à écrire pour prévoir les repas de la semaine ?", options: ["Votre budget alimentaire de la semaine", "La liste des invités", "La commande de sodas", "Rien ; il suffit d'aller acheter"], answer: 0, why: "Le budget fixe ce que le menu peut contenir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Bien manger avec peu d'argent grâce aux aliments locaux",
    questions: [
      { objective: "O1", q: "Lequel est un aliment énergétique (qui fait bouger) ?", options: ["Sukuma wiki", "Igname", "Œufs", "Oranges"], answer: 1, why: "L'igname est un aliment de base qui donne de l'énergie." },
      { objective: "O1", q: "Lequel est un aliment bâtisseur (qui fait grandir) ?", options: ["Arachides", "Manioc", "Sucre", "Papaye"], answer: 0, why: "Les arachides apportent des protéines." },
      { objective: "O1", q: "La patate douce à chair orange, la papaye et la mangue sont riches en :", options: ["Sel", "Rien d'utile", "Vitamines", "Huile"], answer: 2, why: "Les aliments orange sont riches en vitamines." },
      { objective: "O1", q: "L'anémie est souvent causée par un manque de :", options: ["Sucre", "Sel", "Huile", "Fer"], answer: 3, why: "Le manque de fer est la cause nutritionnelle la plus fréquente de l'anémie." },
      { objective: "O2", q: "Dans l'assiette équilibrée, environ un quart est :", options: ["Des sucreries", "Un aliment bâtisseur", "Du sel", "Du soda"], answer: 1, why: "Environ un quart d'aliment de base, un quart d'aliment bâtisseur et la moitié de légumes et fruits." },
      { objective: "O2", q: "Quand boire le thé si vous voulez profiter du fer de votre repas ?", options: ["Entre les repas", "À chaque repas", "À la place du repas", "Cela n'a pas d'importance"], answer: 0, why: "Le thé pendant les repas rend le fer plus difficile à absorber." },
      { objective: "O2", q: "Quel petit changement rend le riz plus équilibré ?", options: ["Ajouter plus de sel", "Ajouter du sucre", "Ajouter des haricots et des feuilles", "Ajouter un soda"], answer: 2, why: "Les haricots et les feuilles ajoutent des aliments bâtisseurs et protecteurs." },
      { objective: "O3", q: "Qu'est-ce qui cache beaucoup de sel ?", options: ["Les tomates fraîches", "Les bouillons cubes et l'assaisonnement en poudre", "Les haricots nature", "Les fruits frais"], answer: 1, why: "Les cubes et les assaisonnements en poudre sont très salés." },
      { objective: "O3", q: "Quelle boisson ajoute le plus de sucres libres ?", options: ["L'eau propre", "Le thé non sucré", "Le lait nature", "Une bouteille de soda"], answer: 3, why: "Les sodas sont pleins de sucre ajouté." },
      { objective: "O3", q: "Une vendeuse d'Abidjan laisse l'attiéké et le poisson cuits dehors tout l'après-midi, en pleine chaleur. Quelle clef n'est pas respectée ?", options: ["Maintenir les aliments à bonne température", "Bien faire cuire", "Utiliser du sel iodé", "Manger plus de légumes"], answer: 0, why: "Les microbes se multiplient vite dans un plat cuit laissé tiède pendant des heures." },
      { objective: "O3", q: "Une façon de cuisiner moins chère et plus saine que la friture est :", options: ["Plus d'huile", "Mijoter, bouillir ou cuire à la vapeur", "Frire deux fois", "Ajouter du sucre"], answer: 1, why: "Mijoter, bouillir et cuire à la vapeur demandent peu d'huile." },
      { objective: "O4", q: "Pour comparer le rapport qualité-prix, vous calculez :", options: ["Le sac qui paraît le plus gros", "Le nom du vendeur", "Le coût d'un repas familial", "La boutique la plus fréquentée"], answer: 2, why: "Le coût par repas montre ce que vous obtenez vraiment." },
      { objective: "O4", q: "Les fruits et légumes sont en général les moins chers :", options: ["Hors saison", "Quand ils sont de saison", "En sachets", "Seulement la nuit"], answer: 1, why: "En saison, ils sont abondants et moins chers." },
      { objective: "O4", q: "Exemple seulement : les œufs pour un repas coûtent 30 GHS et les haricots 10 GHS. Lequel a le meilleur rapport qualité-prix pour ce repas ?", options: ["Les œufs", "C'est pareil", "Aucun", "Les haricots"], answer: 3, why: "Ce sont deux aliments bâtisseurs, et les haricots coûtent trois fois moins cher." },
      { objective: "O5", q: "Pendant les 6 premiers mois, un bébé a besoin :", options: ["Seulement de lait maternel", "D'eau et de bouillie", "De thé", "De lait de vache et de sucre"], answer: 0, why: "L'OMS conseille seulement le lait maternel pendant les 6 premiers mois." },
      { objective: "O5", q: "Combien de repas par jour environ un enfant de 12 mois doit-il manger ?", options: ["Un", "3 à 4, plus 1 à 2 collations si besoin", "Seulement du lait maternel", "Dix"], answer: 1, why: "L'OMS conseille 3 à 4 repas de 9 à 23 mois, plus des collations si besoin." },
      { objective: "O5", q: "Quand un jeune enfant est malade, l'OMS conseille :", options: ["D'arrêter toute nourriture", "D'arrêter l'allaitement", "Plus de boissons, plus de tétées et ses aliments mous préférés", "Seulement de l'eau"], answer: 2, why: "Plus de liquides et de nourriture aident l'enfant à guérir." },
      { objective: "O6", q: "Un bon menu de la semaine contient :", options: ["Le même aliment de base seulement, tous les jours", "Des légumes seulement le dimanche", "Aucun budget", "Plusieurs groupes d'aliments chaque jour"], answer: 3, why: "Le but, c'est de la variété chaque jour." },
      { objective: "O6", q: "Une façon économique de faire durer les haricots dans le menu est de :", options: ["Les cuire une fois et les utiliser pour deux repas", "Jeter les restes", "Les cuire toutes les heures", "Les acheter en tout petits sachets"], answer: 0, why: "Cuire une seule fois économise le combustible et le temps, et les restes bien conservés font un deuxième repas." },
      { objective: "O6", q: "À la fin de la semaine, vous devez :", options: ["Jeter le menu", "Vérifier ce que vous avez dépensé et gaspillé, et modifier le menu de la semaine suivante", "Doubler le budget", "Arrêter de prévoir"], answer: 1, why: "Vérifier vous aide à améliorer le menu suivant." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Groupes d'aliments chaque jour", objective: "O1", notYet: "La plupart des jours, il n'y a qu'un aliment de base, ou les groupes sont mal nommés.", meets: "Chaque jour contient des aliments énergétiques, bâtisseurs et protecteurs, bien nommés.", exceeds: "Contient aussi des feuilles vert foncé ou des aliments orange et un aliment riche en fer la plupart des jours." },
      { name: "Repas équilibrés", objective: "O2", notYet: "Il manque des légumes ou des fruits certains jours.", meets: "Des légumes ou des fruits tous les jours, et les repas principaux suivent l'assiette équilibrée.", exceeds: "Les aliments riches en fer sont associés à un aliment riche en vitamine C, et le thé est gardé pour entre les repas." },
      { name: "Sel, sucre et sécurité", objective: "O3", notYet: "Aucune habitude notée, ou elles ne réduisent ni le sel ni le sucre.", meets: "Note une habitude pour le sel, une pour le sucre et l'une des cinq clefs pour des aliments plus sûrs.", exceeds: "Montre les changements dans des recettes précises du menu." },
      { name: "Budget et liste de courses", objective: "O4", notYet: "Pas de prix, ou le total est faux ou dépasse le budget sans remplacement.", meets: "Liste de courses avec les prix de son marché et un total juste dans le budget.", exceeds: "Montre au moins un remplacement plus économique dans un même groupe et note les aliments de saison." },
      { name: "Nourrir ceux qui en ont le plus besoin", objective: "O5", notYet: "Rien de prévu pour un jeune enfant ou une femme enceinte ou allaitante du foyer.", meets: "Les repas et collations suivent les conseils de l'OMS pour l'âge de l'enfant ou pour la femme.", exceeds: "La bouillie épaisse avec un autre groupe d'aliments et le bon nombre de repas sont écrits pour chaque jour." },
      { name: "Menu de la semaine", objective: "O6", notYet: "Il manque des jours.", meets: "Sept jours de repas, prêts à afficher au mur ou à garder dans le téléphone.", exceeds: "Utilise les restes sans danger et refait les plats préférés en variant." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent manger des légumes ou des fruits tous les jours et des haricots ou des petits poissons la plupart des jours 30 jours plus tard (enquête de suivi)",
      "Foyers qui disent utiliser un menu de la semaine et rester dans leur budget alimentaire",
      "Apprenants qui disent avoir réduit les bouillons cubes, le sel ou les boissons sucrées",
      "Les centres de santé partenaires ou les agents de santé communautaires constatent une meilleure alimentation des enfants de 6 à 23 mois dans les familles des apprenants"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone simple avec calculatrice, ou du papier et un stylo",
      "Les prix d'un marché ou d'une boutique du quartier pour les leçons sur les prix",
      "Une assiette, un bol ou un dessin pour montrer l'assiette équilibrée",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Bons partenaires : groupements de femmes, groupes d'épargne, écoles, centres de santé et agents de santé communautaires ; une démonstration de cuisine avec des aliments locaux fonctionne bien.",
      "Utilisez les aliments et les prix de votre région ; les prix du cours sont seulement des exemples.",
      "Ne donnez pas de régime pour des maladies ni de conseils sur les compléments ; envoyez ces questions au centre de santé ou à un nutritionniste.",
      "Soyez délicat : certains apprenants n'ont peut-être pas assez à manger. Mettez l'accent sur des changements peu coûteux et indiquez l'aide alimentaire locale quand elle existe.",
      "Notez la tâche finale avec la grille d'évaluation et faites un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
