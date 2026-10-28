"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-irrigation-water.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FAO_WATERNEEDS = { name: "FAO, manuel de formation sur la gestion de l'eau d'irrigation n° 3 : les besoins en eau d'irrigation", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO : La collecte des eaux, manuel pour concevoir et construire des ouvrages de collecte d'eau pour les cultures", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO : Manuel technique des techniques d'irrigation sous pression (avec les systèmes de goutte-à-goutte familiaux à bas coût)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO : Des perspectives positives pour les systèmes d'irrigation solaires", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO : La qualité de l'eau en agriculture (salinité, lessivage et drainage)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Water Resources Authority, Kenya (permis d'utilisation de l'eau)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-fr",
  lang: "fr",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Irrigation et gestion de l'eau",
  skills: "Savoir quand une culture a besoin d'eau, Récupérer l'eau de pluie, Stocker l'eau sans danger, Installer un kit de goutte-à-goutte bon marché, Planifier l'irrigation sans engorgement ni accumulation de sel, Choisir une pompe, y compris solaire",
  outcome: "planifier l'irrigation d'une petite parcelle : savoir quand votre culture a le plus besoin d'eau, récupérer et stocker l'eau de pluie, installer et faire marcher un kit de goutte-à-goutte bon marché selon un calendrier, éviter l'engorgement et l'accumulation de sel, et choisir une pompe adaptée.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs en croissance, aux ouvriers agricoles et aux jeunes agriculteurs au Kenya, au Nigeria, au Ghana et partout en Afrique qui veulent produire malgré les périodes sèches, faire une deuxième culture en saison sèche, ou mieux utiliser l'eau qu'ils ont. Il présente des méthodes bon marché que vous pouvez commencer sur une petite parcelle, comme un jardin potager de tomates et de chou frisé ou une pépinière de plants de café.",
    "Le chapitre 1 explique d'où vient l'eau : combien d'eau les cultures demandent et à quel moment, comment récupérer l'eau de pluie des toits et des champs, et comment la stocker sans danger. Le chapitre 2 explique comment l'apporter à la culture : le goutte-à-goutte bon marché, le calendrier d'arrosage sans engorgement ni accumulation de sel, et le choix d'une pompe, y compris solaire.",
    "Les règles et les permis pour l'eau changent d'un pays à l'autre : renseignez-vous auprès de votre autorité de l'eau et de votre agent de vulgarisation avant de creuser un forage, de pomper dans une rivière ou de construire un grand bassin. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre ferme. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan d'irrigation d'une page pour une petite parcelle (la vôtre, ou un exemple comme 200 mètres carrés de tomates près de Nakuru, ou 500 mètres carrés d'oignons et de piments près de Kano) : la culture et ses stades où elle a le plus soif, d'où viendra l'eau et combien vous pouvez en stocker, le goutte-à-goutte ou l'autre système que vous utiliserez, un calendrier d'arrosage par semaine avec la façon de vérifier le sol, comment vous éviterez l'engorgement et l'accumulation de sel, et la pompe que vous choisiriez et pourquoi.",
  chapters: [
    {
      name: "Chapitre 1 : Trouver et garder l'eau",
      lessons: [
        {
          title: "De combien d'eau votre culture a-t-elle besoin, et quand ?",
          minutes: 5,
          goal: "Nommer les stades où votre culture a le plus soif et vérifier l'humidité du sol à la main.",
          text: [
            "Le manuel de formation de la FAO sur les besoins en eau d'irrigation explique que le besoin en eau d'une culture dépend de trois choses : le climat, le type de culture et son stade de croissance. Les journées chaudes, ensoleillées, sèches et venteuses font consommer plus d'eau aux cultures ; les journées fraîches, nuageuses et sans vent, moins. Les cultures hautes et feuillues consomment plus que les petites.",
            "Le stade de croissance compte le plus pour planifier. Une culture a besoin de peu d'eau quand elle est petite, du plus d'eau à la floraison et quand le grain ou le fruit se forme, et de moins quand elle mûrit. Le maïs souffre le plus de la sécheresse à la sortie des panicules et des soies ; la tomate à la floraison et à la nouaison ; le haricot à la floraison et au remplissage des gousses. Une période sèche à ces stades fait perdre le plus de récolte.",
            "Vérifiez le sol, pas seulement la surface. Enfoncez un doigt ou un petit bâton dans le sol près des racines, à environ 10 à 15 cm de profondeur, ou creusez un petit trou et serrez une poignée de terre. Si elle tient ensemble et paraît humide, attendez. Si elle s'effrite et paraît sèche à la profondeur des racines, il est temps d'arroser. Une partie de la pluie qui tombe est perdue par ruissellement ou descend trop profond ; la partie que la culture peut utiliser s'appelle la pluie efficace."
          ],
          steps: ["Écrivez votre culture et le nombre de jours du semis à la récolte.", "Marquez ses stades où elle a le plus soif (par exemple le maïs : sortie des panicules et des soies).", "Chaque semaine, vérifiez le sol à la profondeur des racines avec un doigt, un bâton ou un trou.", "Notez le temps : les journées chaudes, venteuses et sèches veulent dire plus d'eau consommée.", "Arrosez avant que le sol sèche à la profondeur des racines, surtout aux stades où la culture a soif."],
          words: [["Besoin en eau de la culture", "la quantité d'eau qu'une culture utilise pour bien pousser."], ["Stade de croissance", "une période de la vie d'une culture, comme la levée, la floraison ou la maturation."], ["Pluie efficace", "la partie de la pluie qui reste dans la zone des racines et que la culture peut utiliser."], ["Zone racinaire", "la couche de sol où se trouvent la plupart des racines de la culture."]],
          slides: [
            { title: "Trois choses fixent le besoin en eau (FAO)", bullets: ["Climat : chaud, ensoleillé, sec, venteux = plus d'eau", "Type de culture : haute et feuillue = plus d'eau", "Stade : le plus à la floraison et au remplissage du grain ou du fruit"] },
            { title: "Les stades où la culture a le plus soif", bullets: ["Maïs : sortie des panicules et des soies", "Tomate : floraison et nouaison", "Haricot : floraison et remplissage des gousses"] },
            { title: "Vérifiez le sol, pas la surface", bullets: ["Doigt ou bâton à 10 à 15 cm près des racines", "Tient ensemble et humide : attendez", "S'effrite et sec : il est temps d'arroser"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Pour une culture que vous faites, écrivez les semaines après le semis où elle arrive à ses stades où elle a le plus soif. Puis vérifiez aujourd'hui votre sol à la profondeur des racines avec un doigt, un bâton ou un petit trou, et écrivez : humide ou sec.",
          youCanNow: "dire quand votre culture a le plus besoin d'eau et vérifier l'humidité du sol à la profondeur des racines."
        },
        {
          title: "Récupérer l'eau de pluie des toits et des champs",
          minutes: 5,
          goal: "Calculer combien de pluie votre toit peut récupérer et choisir une méthode au champ pour garder la pluie sur votre terre.",
          text: [
            "La collecte des eaux, c'est attraper la pluie là où elle tombe ou coule, et la garder pour les cultures, les animaux ou la maison. Le manuel de la FAO sur la collecte des eaux décrit beaucoup de méthodes au champ utilisées dans les zones sèches : les poquets de plantation (comme le zaï), les demi-lunes, les billons en courbe de niveau, les petits impluviums en losange autour des arbres (negarim) et les cordons pierreux.",
            "Le toit est le début le plus simple. Chaque millimètre de pluie sur 1 mètre carré de toit donne environ 1 litre d'eau. Un toit de 50 mètres carrés dans un lieu qui reçoit 600 mm de pluie par an peut donner jusqu'à 30 000 litres par an, mais une partie est toujours perdue, donc prévoyez moins. Installez des gouttières, un tuyau de premier rinçage qui jette la première eau sale, et une citerne couverte.",
            "L'eau qui ruisselle des routes, des chemins et des pentes peut être conduite vers un bassin bâché ou une mare de ferme. Les poquets de plantation remplis de compost ou de fumier attrapent la pluie juste aux racines du maïs, du sorgho ou des jeunes arbres fruitiers. Commencez petit et regardez où l'eau coule sur votre terre au prochain orage."
          ],
          steps: ["Mesurez votre toit : longueur fois largeur en mètres.", "Trouvez la pluie annuelle chez votre service météo ou votre agent de vulgarisation.", "Multipliez la surface du toit par la pluie en mm pour avoir des litres, puis prévoyez moins à cause des pertes.", "Installez des gouttières, un tuyau de premier rinçage et une citerne couverte.", "Choisissez une méthode au champ (poquets, demi-lunes ou billons en courbe de niveau) pour une parcelle."],
          words: [["Collecte des eaux", "attraper et garder l'eau de pluie ou de ruissellement pour plus tard."], ["Récupération sur toiture", "recueillir la pluie d'un toit par des gouttières dans une citerne."], ["Premier rinçage", "un tuyau qui jette la première pluie du toit, la plus sale."], ["Zaï", "un petit trou de plantation rempli de fumier qui attrape la pluie aux racines."]],
          slides: [
            { title: "Attraper la pluie là où elle tombe", bullets: ["Poquets de plantation (zaï), demi-lunes", "Billons en courbe de niveau, cordons pierreux", "Impluviums negarim autour des arbres (FAO)"] },
            { title: "Le calcul du toit", bullets: ["1 mm de pluie sur 1 mètre carré = environ 1 litre", "Toit de 50 m2 x 600 mm = jusqu'à 30 000 litres par an", "Prévoyez moins : une partie est toujours perdue"] },
            { title: "L'installation", bullets: ["Gouttières et tuyau de premier rinçage", "Citerne couverte", "Conduire l'eau de la route vers un bassin bâché"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Mesurez le toit de votre maison ou de votre magasin et trouvez la pluie annuelle. Calculez combien de litres il pourrait récupérer en un an. Utilisez la calculatrice de votre téléphone, ou demandez à un assistant d'IA sur téléphone de vérifier votre calcul.",
          youCanNow: "estimer combien d'eau de pluie vous pouvez récupérer et choisir une méthode au champ pour garder la pluie sur votre terre."
        },
        {
          title: "Stocker l'eau sans danger",
          minutes: 4,
          goal: "Choisir un moyen de stockage de l'eau et le garder propre, couvert et en règle.",
          text: [
            "Les moyens de stockage courants sont les citernes en plastique ou en ferrociment, les citernes enterrées, et les bassins ou mares de ferme. Les bassins perdent beaucoup d'eau dans le sol s'ils ne sont pas bâchés (par exemple avec une géomembrane) et beaucoup au soleil s'ils ne sont pas ombragés ou couverts.",
            "Gardez l'eau stockée propre et sans danger. Couvrez les citernes et les bassins pour empêcher la saleté, les animaux et les enfants d'y entrer, et pour empêcher les moustiques de s'y reproduire. Clôturez les bassins. Nettoyez les gouttières et les citernes avant les pluies. L'eau à boire demande plus de soins que l'eau pour les cultures ; demandez à votre service de santé comment la traiter.",
            "Une plus grande utilisation d'eau peut demander un permis. Au Kenya, la Water Resources Authority (WRA, l'autorité des ressources en eau) contrôle l'utilisation de l'eau et délivre des permis, par exemple pour les forages et le pompage dans les rivières. Les autres pays ont leurs propres autorités de l'eau. Renseignez-vous avant de forer, de faire un barrage ou de pomper."
          ],
          steps: ["Décidez à quoi servira l'eau : cultures, animaux ou maison.", "Choisissez un stockage : citerne, citerne enterrée ou bassin bâché.", "Couvrez-le et clôturez les bassins.", "Nettoyez les gouttières et les citernes avant chaque saison des pluies.", "Avant de forer ou de pomper dans une rivière, renseignez-vous auprès de votre autorité de l'eau."],
          words: [["Bassin de collecte", "une mare creusée qui recueille l'eau de ruissellement."], ["Géomembrane", "une bâche plastique solide qui empêche un bassin de fuir dans le sol."], ["Permis", "une autorisation officielle d'utiliser ou de prélever de l'eau."]],
          slides: [
            { title: "Moyens de stockage", bullets: ["Citernes en plastique ou en ferrociment", "Citernes enterrées", "Bassins bâchés et mares de ferme"] },
            { title: "Sans danger", bullets: ["Couvrez : saleté, animaux, moustiques", "Clôturez les bassins ; des enfants s'y noient", "Nettoyez gouttières et citernes avant les pluies"] },
            { title: "Vérifiez les règles", bullets: ["Kenya : Water Resources Authority (WRA)", "Autres pays : votre autorité de l'eau", "Demandez avant de forer, barrer ou pomper"] }
          ],
          sources: [WRA],
          tryIt: "Écrivez quel stockage convient à votre ferme et à votre budget, comment vous allez le couvrir et le clôturer, et le nom du service de votre pays que vous consulteriez avant de forer ou de pomper.",
          youCanNow: "choisir un stockage d'eau, le garder sans danger et savoir quand il vous faut un permis."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver et garder l'eau",
        questions: [
          { q: "Quand le maïs souffre-t-il le plus de la sécheresse ?", options: ["À la sortie des panicules et des soies", "Juste après la récolte", "Avant le semis", "Quand les épis sont secs"], answer: 0, why: "Les stades de floraison sont les plus sensibles ; une période sèche à ce moment fait perdre le plus de récolte." },
          { q: "Comment vérifier si une culture a besoin d'eau ?", options: ["Regarder seulement le dessus du sol", "Attendre que les feuilles meurent", "Vérifier l'humidité à la profondeur des racines avec un doigt, un bâton ou un petit trou", "Arroser toutes les heures"], answer: 2, why: "Les racines sont sous la surface, alors vérifiez là." },
          { q: "Un toit fait 40 mètres carrés et reçoit 500 mm de pluie par an. Combien pourrait-il récupérer au maximum, environ ?", options: ["200 litres", "2 000 litres", "540 litres", "20 000 litres"], answer: 3, why: "40 x 500 = 20 000 litres ; la récolte réelle sera un peu plus faible." },
          { q: "À quoi sert un tuyau de premier rinçage ?", options: ["À pomper l'eau vers le haut", "À jeter la première pluie du toit, la plus sale", "À chauffer l'eau", "À mesurer la pluie"], answer: 1, why: "Il empêche la poussière et les fientes d'entrer dans la citerne." },
          { q: "Pourquoi couvrir une citerne ou un bassin ?", options: ["Pour empêcher la saleté et les animaux d'entrer et les moustiques de s'y reproduire", "Pour rendre l'eau plus chaude", "Pour la rendre plus lourde", "Les couvercles ne servent à rien"], answer: 0, why: "Couvrir garde l'eau propre et sans danger." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Apporter l'eau à la culture",
      lessons: [
        {
          title: "Le goutte-à-goutte bon marché",
          minutes: 6,
          goal: "Installer et entretenir un kit de goutte-à-goutte à seau ou à fût pour une petite parcelle.",
          text: [
            "Le goutte-à-goutte apporte l'eau lentement au pied de chaque plante par de fins tuyaux percés de petits trous (goutteurs). On perd moins d'eau au soleil et au vent, les feuilles restent sèches donc il y a moins de maladies, et les mauvaises herbes entre les lignes reçoivent moins d'eau.",
            "Le manuel de la FAO sur l'irrigation sous pression décrit des systèmes de goutte-à-goutte familiaux bon marché pour des parcelles d'environ 100 à 500 mètres carrés : un seau ou un fût placé au moins 1 mètre au-dessus des planches alimente un filtre, un tuyau principal et des lignes de goutteurs le long de chaque rangée. C'est la gravité qui donne la pression, donc il n'y a pas besoin de pompe pour le faire marcher. Les kits sont vendus par les vendeurs d'intrants et les fournisseurs d'irrigation ; comparez les prix et demandez des pièces de rechange.",
            "Le bouchage est le principal problème. Utilisez de l'eau propre, gardez le filtre en place et nettoyez-le souvent, et rincez régulièrement le bout des lignes. Couvrez le sol de paillis par-dessus les lignes pour réduire encore l'évaporation. Vérifiez que chaque goutteur goutte ; une plante sèche veut souvent dire un trou bouché."
          ],
          steps: ["Nivelez les planches et posez les lignes de goutteurs le long de chaque rangée de plantes.", "Montez le seau ou le fût sur un support au moins 1 mètre au-dessus des planches.", "Reliez fût, robinet, filtre, tuyau principal et lignes ; fermez le bout des lignes.", "Remplissez d'eau propre, ouvrez le robinet et vérifiez que chaque goutteur goutte.", "Paillez par-dessus les lignes.", "Nettoyez le filtre et rincez le bout des lignes toutes les une ou deux semaines."],
          words: [["Goutte-à-goutte", "arroser les plantes goutte à goutte aux racines par de fins tuyaux."], ["Goutteur", "le petit trou ou distributeur qui laisse sortir l'eau près de chaque plante."], ["Filtre", "une grille qui empêche la saleté de boucher les goutteurs."], ["Par gravité", "poussé par la hauteur du réservoir d'eau, pas par une pompe."]],
          slides: [
            { title: "Pourquoi le goutte-à-goutte", bullets: ["L'eau va aux racines", "Moins de pertes au soleil et au vent", "Feuilles sèches, moins de maladies et de mauvaises herbes"] },
            { title: "Kit familial (FAO)", bullets: ["Pour des parcelles d'environ 100 à 500 mètres carrés", "Seau ou fût au moins 1 m au-dessus des planches", "Filtre, tuyau principal, lignes le long des rangées"] },
            { title: "Le garder en marche", bullets: ["Eau propre et filtre propre", "Rincez régulièrement le bout des lignes", "Vérifiez chaque goutteur ; paillez par-dessus"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Dessinez un plan de goutte-à-goutte pour une petite parcelle : où se trouve le fût (au moins 1 m de haut), le filtre, le tuyau principal et chaque ligne. Puis demandez à deux fournisseurs ou vendeurs d'intrants le prix d'un kit de cette taille et notez les deux.",
          youCanNow: "installer, faire marcher et entretenir un kit de goutte-à-goutte par gravité bon marché."
        },
        {
          title: "Le calendrier d'arrosage : sans engorgement ni sel",
          minutes: 5,
          goal: "Faire un calendrier d'arrosage par semaine et repérer tôt l'engorgement et l'accumulation de sel.",
          text: [
            "Un calendrier répond à deux questions : quand arroser et combien. Arrosez tôt le matin ou en fin d'après-midi, quand on perd moins d'eau au soleil. Arrosez plus souvent par temps chaud et venteux et aux stades où la culture a soif, et n'arrosez pas après une bonne pluie. Continuez à vérifier le sol à la profondeur des racines ; le calendrier est un guide, c'est le sol qui a le dernier mot.",
            "Trop d'eau fait autant de mal que pas assez. Un sol engorgé n'a pas d'air pour les racines : les plantes jaunissent et fanent même si le sol est mouillé, et les racines pourrissent. Les signes sont l'eau qui stagne, une odeur aigre et le jaunissement. Arrosez moins, ouvrez des rigoles de drainage, et utilisez des planches surélevées ou des billons sur l'argile lourde.",
            "La FAO explique que le sel s'accumule quand l'eau d'irrigation apporte plus de sel que le drainage n'en enlève, et que trop arroser et mal drainer sont des causes fréquentes. Surveillez une croûte blanche sur le sol, des bords de feuilles qui brûlent et une mauvaise croissance. Un bon drainage, le paillis et assez d'eau (pas trop) aident. Si vous voyez ces signes, ou si vous utilisez l'eau d'un forage en zone sèche, demandez à votre agent de vulgarisation ou au laboratoire de sol d'analyser l'eau et le sol."
          ],
          steps: ["Écrivez un plan par semaine : quels jours, matin ou soir, combien de temps.", "Arrosez plus aux stades où la culture a soif et pendant les semaines chaudes et venteuses.", "N'arrosez pas après une bonne pluie.", "Vérifiez le sol à la profondeur des racines avant chaque arrosage.", "Cherchez l'eau qui stagne, l'odeur aigre et le jaunissement (engorgement).", "Cherchez une croûte blanche et des bords de feuilles brûlés (sel) ; demandez une analyse de l'eau et du sol."],
          words: [["Calendrier d'irrigation", "un plan qui dit quand et combien arroser."], ["Engorgement", "un sol si plein d'eau que les racines n'ont plus d'air."], ["Salinité", "trop de sel dans le sol ou l'eau, ce qui abîme les cultures."], ["Drainage", "la façon dont l'eau en trop quitte le sol."]],
          slides: [
            { title: "Quand et combien", bullets: ["Arrosez tôt le matin ou en fin d'après-midi", "Plus aux stades où la culture a soif et par temps chaud et venteux", "Pas après une bonne pluie ; le sol décide"] },
            { title: "L'engorgement", bullets: ["Eau qui stagne, odeur aigre, plantes jaunes qui fanent", "Arrosez moins et ouvrez des rigoles", "Planches surélevées ou billons sur l'argile lourde"] },
            { title: "Accumulation de sel (FAO)", bullets: ["Causée par trop d'arrosage et un mauvais drainage", "Croûte blanche, bords de feuilles brûlés, mauvaise croissance", "Drainez bien, paillez, analysez l'eau et le sol"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Écrivez un calendrier d'arrosage d'une semaine pour une culture : les jours, le moment de la journée et la durée. À côté, écrivez les deux signes d'alerte de l'engorgement et les deux de l'accumulation de sel que vous chercherez à chaque arrosage.",
          youCanNow: "planifier l'irrigation et repérer l'engorgement et l'accumulation de sel avant qu'ils détruisent une culture."
        },
        {
          title: "Choisir une pompe, y compris une pompe solaire",
          minutes: 5,
          goal: "Comparer les pompes à pédales, à carburant et solaires et lister les questions à poser à un fournisseur.",
          text: [
            "Si l'eau est plus bas que votre parcelle ou loin d'elle, il vous faut une pompe. Les pompes à pédales et les pompes à main sont bon marché et marchent avec votre propre force ; elles conviennent aux petites parcelles près d'une eau peu profonde. Les motopompes à essence ou à gasoil sont bon marché à l'achat et faciles à déplacer, mais le carburant et les réparations coûtent de l'argent chaque semaine. Les pompes solaires coûtent plus cher à l'achat mais utilisent le soleil gratuit, donc elles coûtent très peu à faire marcher.",
            "Pour choisir, il faut connaître trois choses : combien d'eau il vous faut chaque jour, de quelle hauteur l'eau doit être montée (du niveau de l'eau jusqu'à la citerne ou au champ), et quelle distance elle doit parcourir. Le fournisseur en a besoin pour choisir la taille de la pompe. Une pompe trop petite ne donnera pas assez d'eau ; une pompe trop grande gaspille de l'argent.",
            "La FAO signale un risque avec les pompes solaires : comme chaque heure de pompage en plus est gratuite, les agriculteurs peuvent pomper plus que la rivière ou la nappe ne peut supporter. Pompez seulement ce dont votre culture a besoin, partagez l'eau de façon juste avec vos voisins, et suivez les règles de votre autorité de l'eau. Gardez les panneaux propres et bien protégés, et demandez par écrit une garantie, des pièces de rechange et un service après-vente. Certains fournisseurs proposent un paiement à l'usage ; lisez d'abord le prix total et les conditions."
          ],
          steps: ["Calculez l'eau nécessaire par jour pour votre parcelle.", "Mesurez la hauteur à monter : du niveau de l'eau à la citerne ou au champ.", "Mesurez la distance de la source à la parcelle.", "Comparez pédales, carburant et solaire sur le prix d'achat, le coût de fonctionnement et le travail.", "Demandez au fournisseur la taille, la garantie, les pièces et le service par écrit.", "Vérifiez les permis pour l'eau avant de pomper dans une rivière ou un forage."],
          words: [["Pompe à pédales", "une pompe actionnée avec les pieds pour monter l'eau d'une source peu profonde."], ["Pompe solaire", "une pompe alimentée par des panneaux solaires."], ["Hauteur de refoulement", "la hauteur à laquelle la pompe doit monter l'eau."], ["Surexploitation", "prendre plus d'eau dans une rivière ou sous terre que la nature n'en remet."]],
          slides: [
            { title: "Types de pompes", bullets: ["Pédales ou main : bon marché, votre propre force", "Essence ou gasoil : bon marché à l'achat, chère à faire marcher", "Solaire : chère à l'achat, très peu de frais de fonctionnement"] },
            { title: "La bonne taille", bullets: ["Eau nécessaire par jour", "Hauteur : jusqu'où monter", "Distance : jusqu'où aller"] },
            { title: "Solaire : à utiliser avec sagesse (FAO)", bullets: ["Un pompage gratuit peut pousser à trop pomper", "Pompez seulement ce dont la culture a besoin", "Suivez les règles de votre autorité de l'eau"] },
            { title: "Questions au fournisseur", bullets: ["Taille pour votre hauteur et votre distance", "Garantie, pièces et service par écrit", "Prix total et conditions de tout paiement à l'usage"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Tâche finale : écrivez votre plan d'irrigation d'une page. Mettez-y les stades où votre culture a soif, votre source d'eau et votre stockage, votre goutte-à-goutte ou autre système, un calendrier par semaine, comment vous éviterez l'engorgement et le sel, et la pompe que vous choisiriez avec votre hauteur, votre distance et votre besoin en eau par jour.",
          youCanNow: "choisir le bon type de pompe et monter un plan d'irrigation complet pour une petite parcelle."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Apporter l'eau à la culture",
        questions: [
          { q: "Quel est le principal problème à éviter avec les kits de goutte-à-goutte ?", options: ["Trop de pression", "Les goutteurs bouchés", "Trop de plantes", "Les feuilles mouillées"], answer: 1, why: "La saleté bouche les goutteurs ; un filtre propre et le rinçage l'évitent." },
          { q: "À quelle hauteur placer le fût d'un kit de goutte-à-goutte par gravité ?", options: ["Par terre", "Enterré sous les planches", "Au moins 1 mètre au-dessus des planches", "Ça n'a pas d'importance"], answer: 2, why: "La FAO dit de placer le fût au moins 1 mètre plus haut pour avoir assez de pression." },
          { q: "Les plantes sont jaunes et fanées, le sol sent l'aigre et l'eau stagne. Quel est le problème ?", options: ["Pas assez d'eau", "Trop de soleil", "Du sel dans l'air", "L'engorgement"], answer: 3, why: "L'eau qui stagne et l'odeur aigre montrent que les racines n'ont pas d'air." },
          { q: "Vous voyez une croûte blanche sur le sol et des bords de feuilles brûlés. Que faire ?", options: ["Demander une analyse de l'eau et du sol et améliorer le drainage", "Arroser beaucoup plus chaque jour", "Ajouter du sel", "Ne rien faire"], answer: 0, why: "Ce sont des signes d'accumulation de sel ; la FAO la relie à trop d'arrosage et à un mauvais drainage." },
          { q: "Pourquoi la FAO met-elle en garde au sujet des pompes solaires ?", options: ["Elles ne marchent jamais", "Elles font trop de bruit", "Un pompage gratuit peut pousser à prendre trop d'eau", "Elles ont besoin d'essence"], answer: 2, why: "Avec presque aucun frais de fonctionnement, les agriculteurs risquent de trop pomper les rivières et les nappes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Irrigation et gestion de l'eau",
    questions: [
      { q: "Selon la FAO, le besoin en eau d'une culture dépend :", options: ["Seulement du prix de l'eau", "Du climat, du type de culture et du stade de croissance", "De la couleur de la culture", "Du jour de la semaine"], answer: 1, why: "La FAO cite le climat, le type de culture et le stade de croissance." },
      { q: "Quel temps fait consommer le plus d'eau aux cultures ?", options: ["Frais et nuageux", "Calme et brumeux", "Chaud, ensoleillé, sec et venteux", "Froid et humide"], answer: 2, why: "La chaleur, le soleil, l'air sec et le vent augmentent la consommation d'eau." },
      { q: "La tomate est la plus sensible au manque d'eau :", options: ["À la floraison et à la nouaison", "À l'achat des semences", "Après la dernière récolte", "Quand le champ est nu"], answer: 0, why: "La floraison et la nouaison sont les stades où elle a le plus soif." },
      { q: "La pluie efficace, c'est :", options: ["Toute la pluie qui tombe", "La pluie qui tombe la nuit", "La pluie annoncée à la radio", "La partie de la pluie que la culture peut vraiment utiliser"], answer: 3, why: "Une partie de la pluie ruisselle ou descend trop profond ; le reste est efficace." },
      { q: "Environ combien d'eau donne 1 mm de pluie sur 1 mètre carré de toit ?", options: ["1 litre", "10 litres", "100 litres", "1 000 litres"], answer: 0, why: "1 mm sur 1 mètre carré donne environ 1 litre." },
      { q: "Un zaï, c'est :", options: ["Un forage", "Un petit trou de plantation avec du fumier qui attrape la pluie aux racines", "Un type de pompe", "Une citerne"], answer: 1, why: "Le zaï concentre la pluie et les nutriments près de la plante." },
      { q: "Pourquoi bâcher une mare de ferme ?", options: ["Pour rendre l'eau salée", "Pour attirer les animaux", "Pour empêcher l'eau de fuir dans le sol", "La bâche n'est jamais utile"], answer: 2, why: "Une mare non bâchée perd beaucoup d'eau dans le sol." },
      { q: "Pourquoi faut-il clôturer les mares de ferme ?", options: ["Pour protéger les enfants et les animaux", "Pour les rendre plus profondes", "Pour arrêter la pluie", "Pour chauffer l'eau"], answer: 0, why: "Une mare ouverte présente un risque de noyade." },
      { q: "Au Kenya, quel organisme délivre les permis d'utilisation de l'eau, par exemple pour les forages ?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "La WRA contrôle l'utilisation de l'eau et délivre les permis." },
      { q: "Un grand avantage du goutte-à-goutte est que :", options: ["Il mouille les feuilles", "L'eau va aux racines avec moins de pertes", "Il n'a pas besoin d'eau", "Il fait pousser les mauvaises herbes plus vite"], answer: 1, why: "Le goutte-à-goutte apporte l'eau aux racines avec peu de pertes." },
      { q: "Selon la FAO, les kits de goutte-à-goutte familiaux conviennent à des parcelles d'environ :", options: ["1 à 5 mètres carrés", "100 hectares", "Tout un comté", "100 à 500 mètres carrés"], answer: 3, why: "Le manuel de la FAO présente le goutte-à-goutte familial simplifié pour environ 100 à 500 mètres carrés." },
      { q: "Une plante de votre ligne de goutte-à-goutte est sèche. La cause la plus probable est :", options: ["Un goutteur bouché", "Trop de soleil sur le fût", "La plante est trop verte", "Le filtre est trop propre"], answer: 0, why: "Une plante sèche veut souvent dire que son goutteur est bouché." },
      { q: "Pourquoi mettre du paillis sur les lignes de goutte-à-goutte ?", options: ["Seulement pour les cacher du soleil", "Pour rendre l'eau plus chaude", "Pour boucher les goutteurs", "Pour réduire l'évaporation du sol"], answer: 3, why: "Le paillis empêche l'humidité du sol de s'évaporer." },
      { q: "Le meilleur moment de la journée pour irriguer est en général :", options: ["Midi en plein soleil", "Tôt le matin ou en fin d'après-midi", "Seulement à minuit", "N'importe quand ; ça ne change rien"], answer: 1, why: "On perd moins d'eau au soleil aux heures fraîches de la journée." },
      { q: "Il a bien plu cette nuit. Votre calendrier dit d'arroser aujourd'hui. Que faites-vous ?", options: ["J'arrose le double", "J'arrose quand même comme prévu", "Je vérifie le sol ; je n'arrose pas s'il est humide à la profondeur des racines", "Je draine le champ"], answer: 2, why: "C'est le sol qui a le dernier mot ; on n'arrose pas après une bonne pluie." },
      { q: "Sur une argile lourde qui s'engorge facilement, une bonne pratique est :", options: ["Inonder le champ", "Ajouter plus d'eau", "Planter dans un creux", "Des planches surélevées ou des billons et des rigoles de drainage"], answer: 3, why: "Les planches surélevées et les rigoles laissent partir l'eau en trop." },
      { q: "Selon la FAO, une cause fréquente d'accumulation de sel dans un sol irrigué est :", options: ["Le paillage", "La culture de légumineuses", "Trop d'arrosage et un mauvais drainage", "L'utilisation d'un filtre"], answer: 2, why: "Il entre plus de sel qu'il n'en part quand il y a trop d'eau et un mauvais drainage." },
      { q: "Pour choisir la taille d'une pompe, le fournisseur doit connaître :", options: ["Votre couleur préférée", "Le besoin en eau par jour, la hauteur et la distance", "Seulement votre budget", "Le code de votre carte bancaire"], answer: 1, why: "Le besoin en eau, la hauteur et la distance décident de la bonne pompe." },
      { q: "Par rapport à une motopompe à essence, une pompe solaire en général :", options: ["Coûte plus cher à l'achat mais très peu à faire marcher", "Coûte moins cher à l'achat et plus cher à faire marcher", "A besoin de gasoil", "Ne marche que la nuit"], answer: 0, why: "Les pompes solaires coûtent plus cher à l'achat mais utilisent le soleil gratuit." },
      { q: "Un fournisseur propose une pompe solaire avec paiement à l'usage. Que faire d'abord ?", options: ["Signer tout de suite", "Lui donner votre code secret", "Lire par écrit le prix total, les conditions, la garantie et le service", "En acheter deux"], answer: 2, why: "Connaissez le coût total et l'aide que vous recevrez avant de signer." }
    ]
  }
};
