"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-soil-health.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FAO_SOM = { name: "FAO : L'importance de la matière organique du sol (clé d'un sol résistant à la sécheresse)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO : Techniques de gestion du ruissellement pour lutter contre l'érosion", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "Portail FAO TECA/STI : Stratégies mécaniques de conservation des sols contre l'érosion", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO) : contact pour l'analyse de sol", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO : Guide d'échantillonnage et de préparation du sol pour évaluer sa fertilité", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Soil Research Institute, Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "Gestion des nutriments selon les 4B dans l'agriculture africaine : manuel de vulgarisation sur les engrais (en anglais)", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-fr",
  lang: "fr",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Santé et fertilité du sol",
  skills: "Lire son sol au champ, Prélever un échantillon de sol pour l'analyse, Augmenter la matière organique avec le compost et le fumier, Planifier les rotations et les associations avec des légumineuses, Arrêter l'érosion avec le paillage et les courbes de niveau, Utiliser les engrais selon les 4B",
  outcome: "vérifier la santé de votre propre sol, prélever un bon échantillon pour une analyse en laboratoire, et écrire un plan de sol pour une saison qui augmente la matière organique, fait une rotation avec des légumineuses, empêche le sol de partir avec l'eau, et utilise l'engrais avec le bon produit, la bonne dose, au bon moment et au bon endroit.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs en croissance, aux ouvriers agricoles et aux jeunes agriculteurs au Kenya, au Nigeria, au Ghana et partout en Afrique qui veulent tirer plus de la même terre. Un sol en bonne santé garde plus d'eau, nourrit mieux la culture et rembourse chaque shilling, naira ou cedi que vous mettez dans les semences et l'engrais.",
    "Le chapitre 1 vous apprend à connaître votre sol : le lire avec les yeux et les mains, faire faire une vraie analyse de sol, et augmenter la matière organique avec le compost et le fumier. Le chapitre 2 vous apprend à le garder en bonne santé saison après saison : rotations et associations avec des légumineuses, paillage et lutte contre l'érosion, et bonne utilisation des engrais.",
    "Les sols changent d'un champ à l'autre. Utilisez ce cours avec les résultats de votre analyse de sol et les conseils de votre agent de vulgarisation, d'un institut de recherche ou de votre vendeur d'intrants agricoles, et essayez les nouvelles pratiques d'abord sur une petite parcelle. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre ferme. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan de sol d'une page pour un champ de votre ferme (ou un champ d'exemple, comme 1 acre de maïs et de haricots à Kakamega, 2 acres de manioc à Oyo, ou 1 acre de tomates près de Kumasi) : ce que votre observation du champ a montré, quand et où vous ferez analyser le sol (ou ce que l'analyse a dit), comment vous ajouterez de la matière organique, votre rotation ou votre association avec une légumineuse, comment vous garderez le sol couvert et arrêterez l'érosion, et votre plan d'engrais écrit en produit, dose, moment et endroit.",
  chapters: [
    {
      name: "Chapitre 1 : Connaître et nourrir votre sol",
      lessons: [
        {
          title: "Lire votre sol avec les yeux et les mains",
          minutes: 5,
          goal: "Faire une simple observation de votre sol au champ et noter ce qu'elle vous apprend.",
          text: [
            "Avec une bêche, vos mains et vos yeux, vous pouvez apprendre beaucoup sur le sol. Un sol en bonne santé est sombre, grumeleux et sent la terre. Il contient des vers de terre et d'autres petites bêtes, les racines descendent profond, et la pluie s'infiltre au lieu de ruisseler. Un sol pauvre est pâle ou dur, forme une croûte après la pluie, se fend beaucoup quand il est sec, ou reste mouillé et sent mauvais.",
            "Touchez la texture : mouillez une petite boule de terre et frottez-la entre vos doigts. Un sol sableux est rugueux et s'effrite ; l'eau le traverse vite et emporte les nutriments. Un sol argileux est collant et peut former un long ruban fin ; il garde l'eau et les nutriments mais peut être engorgé et devenir dur. Le sol limoneux équilibré (loam) est entre les deux et c'est le plus facile à cultiver.",
            "Regardez aussi les plantes. Des feuilles du bas jaunes sur le maïs peuvent indiquer un manque d'azote. Des feuilles violettes sur le jeune maïs peuvent indiquer un manque de phosphore. Des mauvaises herbes comme le striga montrent souvent un sol fatigué et peu fertile. Ce sont des indices, pas des preuves : seule une analyse de sol vous le dit avec certitude."
          ],
          steps: ["Creusez un trou d'environ une profondeur de bêche à trois endroits du champ.", "Regardez la couleur, les couches, les racines et toute couche dure.", "Comptez les vers de terre dans une pelletée.", "Mouillez une boule de terre et touchez-la : rugueuse (sableux), collante (argileux) ou entre les deux (loam).", "Après la pluie, notez où l'eau ruisselle ou stagne.", "Écrivez ce que vous avez trouvé pour chaque partie du champ."],
          words: [["Texture du sol", "la part de sable, de limon et d'argile dans un sol ; elle décide de la vitesse à laquelle l'eau s'écoule."], ["Loam", "un sol avec un bon mélange de sable, de limon et d'argile."], ["Semelle dure", "une couche dure sous la surface que les racines et l'eau ne peuvent pas traverser."], ["Striga", "une mauvaise herbe parasite qui attaque le maïs, le sorgho et le mil, fréquente sur les sols pauvres."]],
          slides: [
            { title: "Un sol en bonne santé", bullets: ["Sombre, grumeleux, sent la terre", "Des vers de terre et des racines profondes", "La pluie s'infiltre et ne ruisselle pas"] },
            { title: "Touchez la texture", bullets: ["Rugueux et s'effrite : sableux, l'eau part vite", "Collant, forme un ruban : argileux, garde l'eau", "Entre les deux : loam, le plus facile à cultiver"] },
            { title: "Indices des plantes (pas des preuves)", bullets: ["Feuilles du bas jaunes sur le maïs : peut-être peu d'azote", "Jeunes feuilles de maïs violettes : peut-être peu de phosphore", "Beaucoup de striga : souvent un sol fatigué et pauvre"] },
            { title: "Observation du champ", bullets: ["Creusez à trois endroits", "Regardez, sentez, comptez les vers, touchez la texture", "Observez l'eau après la pluie ; notez tout"] }
          ],
          tryIt: "Faites l'observation dans un de vos champs : creusez à trois endroits, touchez la texture, comptez les vers de terre, et écrivez une ligne pour chaque endroit. Prenez une photo de chaque trou avec votre téléphone pour comparer à la saison prochaine.",
          youCanNow: "observer votre sol au champ et décrire sa texture, sa vie, son drainage et ses signes d'alerte."
        },
        {
          title: "Faire analyser le sol et prélever un bon échantillon",
          minutes: 5,
          goal: "Prélever un échantillon de sol correctement et savoir où l'envoyer pour l'analyse.",
          text: [
            "Une analyse de sol vous dit ce que vos yeux ne voient pas : l'acidité du sol (le pH) et la quantité des principaux nutriments qu'il contient. Beaucoup de sols des zones plus humides du Kenya, du Nigeria et du Ghana sont acides, ce qui bloque les nutriments pour la culture ; l'analyse vous dit si la chaux aiderait. Sans analyse, vous risquez de dépenser de l'argent pour le mauvais engrais.",
            "Où faire analyser : au Kenya, KALRO a des laboratoires de sol (par exemple son laboratoire de fertilité des sols à Kabete, Nairobi) et certains comtés ont leurs propres laboratoires. Au Ghana, le CSIR-Soil Research Institute de Kwadaso, à Kumasi, propose des analyses en laboratoire. Au Nigeria et ailleurs, demandez au service de vulgarisation de votre État ou comté, à une université agricole ou à un institut de recherche. Les prix, les lieux et les délais changent : appelez ou vérifiez avant d'y aller.",
            "Le guide de KALRO dit que l'échantillonnage est la plus grande source d'erreur dans une analyse de sol. Une poignée prise à un seul endroit ne représente pas un champ. Prenez beaucoup de petits échantillons dans tout le champ, mélangez-les, et envoyez un seul échantillon propre et mélangé par champ ou par partie qui paraît différente."
          ],
          steps: ["Choisissez un champ (ou une partie qui paraît uniforme).", "Marchez en zigzag et prenez 10 à 20 petits échantillons, dans les 15 à 20 cm du dessus, avec une bêche ou une tarière propre.", "Évitez les endroits inhabituels : anciens tas de fumier, cendres, chemins, termitières, lignes d'engrais.", "Mélangez bien tous les échantillons dans un seau propre (pas un sac d'engrais).", "Prenez environ un demi-kilo du mélange, séchez-le à l'air à l'ombre, et étiquetez-le : nom, champ, date, culture prévue.", "Apportez-le au laboratoire avant le semis pour que les résultats arrivent à temps."],
          words: [["pH", "un chiffre qui montre si le sol est acide ou alcalin ; la plupart des cultures l'aiment proche du neutre."], ["Sol acide", "un sol au pH bas qui bloque des nutriments comme le phosphore."], ["Chaux", "un produit de roche broyée qui rend un sol acide moins acide."], ["Échantillon composite", "beaucoup de petits échantillons d'un même champ mélangés en un seul."]],
          slides: [
            { title: "Pourquoi analyser ?", bullets: ["Montre le pH et les principaux nutriments", "Dit si la chaux aiderait", "Évite de dépenser pour le mauvais engrais"] },
            { title: "Où faire analyser", bullets: ["Kenya : laboratoires KALRO (ex. Kabete) et certains comtés", "Ghana : CSIR-Soil Research Institute, Kumasi", "Ailleurs : vulgarisation, université, institut de recherche"] },
            { title: "Prendre un bon échantillon", bullets: ["Zigzag, 10 à 20 points, 15 à 20 cm du dessus", "Évitez tas de fumier, cendres, chemins, termitières", "Mélangez dans un seau propre ; envoyez un demi-kilo"] },
            { title: "Étiqueter et bien choisir le moment", bullets: ["Nom, champ, date, culture prévue", "Séchez à l'air à l'ombre", "Envoyez avant le semis ; vérifiez prix et laboratoire"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Trouvez le lieu le plus proche qui analyse le sol : appelez votre agent de vulgarisation ou renseignez-vous auprès de KALRO, du CSIR-SRI ou de l'institut de recherche de votre État. Notez son nom, son prix et le délai. Puis dessinez votre champ et marquez le chemin en zigzag que vous suivrez pour l'échantillonner.",
          youCanNow: "prélever un bon échantillon de sol mélangé et savoir où le faire analyser."
        },
        {
          title: "Augmenter la matière organique avec le compost et le fumier",
          minutes: 5,
          goal: "Faire un tas de compost et utiliser le fumier sans danger pour augmenter la matière organique du sol.",
          text: [
            "La matière organique, ce sont les restes sombres et décomposés de plantes et d'animaux dans le sol. La FAO l'appelle la clé d'un sol résistant à la sécheresse : elle garde l'eau comme une éponge, nourrit les vers de terre et la vie du sol, retient les nutriments pour que la pluie ne les emporte pas, et rend le sol grumeleux pour que les racines poussent.",
            "Vous ajoutez de la matière organique en laissant les résidus de culture au champ au lieu de les brûler, en apportant du fumier et du compost, et en cultivant des légumineuses et des plantes de couverture. Brûler les résidus et labourer encore et encore font tous les deux disparaître la matière organique.",
            "Le compost est facile à faire : montez un tas ou une fosse avec des couches de matières sèches (tiges de maïs, herbe sèche), de matières vertes (mauvaises herbes fraîches, feuilles, déchets de cuisine) et de fumier, avec un peu de terre entre les couches. Gardez-le humide comme une éponge essorée, et retournez-le toutes les deux à trois semaines. Il est prêt en deux à trois mois environ, quand il est sombre, grumeleux et sent la terre. Laissez le fumier frais se décomposer avant de l'utiliser ; le fumier frais et chaud peut brûler les jeunes plants."
          ],
          steps: ["Choisissez un endroit ombragé près du champ et de l'eau.", "Posez une base de grosses tiges pour l'air.", "Ajoutez des couches : matières sèches, matières vertes, fumier, un peu de terre ; recommencez.", "Arrosez chaque couche pour qu'elle soit humide, pas trempée.", "Enfoncez un bâton dans le tas ; s'il est chaud, le compost travaille.", "Retournez le tas toutes les deux à trois semaines.", "Utilisez-le quand il est sombre et grumeleux, dans les poquets ou les lignes."],
          words: [["Matière organique", "matière végétale et animale décomposée dans le sol, qui garde l'eau et les nutriments."], ["Compost", "déchets végétaux et animaux décomposés, utilisés pour nourrir le sol."], ["Résidus de culture", "tiges, feuilles et enveloppes qui restent après la récolte."], ["Plante de couverture", "une culture semée surtout pour couvrir et nourrir le sol."]],
          slides: [
            { title: "Pourquoi la matière organique compte", bullets: ["Garde l'eau comme une éponge (FAO)", "Nourrit la vie du sol et retient les nutriments", "Rend le sol grumeleux pour les racines"] },
            { title: "Ajoutez-la, ne la brûlez pas", bullets: ["Laissez les résidus ; ne brûlez pas", "Apportez du fumier et du compost", "Cultivez des légumineuses et des plantes de couverture"] },
            { title: "Faire du compost", bullets: ["Couches : sec, vert, fumier, un peu de terre", "Humide comme une éponge essorée", "Retournez toutes les 2 à 3 semaines ; prêt en 2 à 3 mois"] },
            { title: "Le fumier sans danger", bullets: ["Laissez d'abord le fumier frais se décomposer", "Le fumier frais et chaud peut brûler les jeunes plants", "Lavez-vous les mains après"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Commencez un tas ou une fosse de compost cette semaine avec ce que vous avez : tiges, mauvaises herbes, déchets de cuisine et fumier. Notez la date et les couches utilisées, et mettez un rappel dans votre téléphone pour le retourner dans deux semaines.",
          youCanNow: "faire du compost, utiliser le fumier sans danger et expliquer comment la matière organique aide votre sol."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître et nourrir votre sol",
        questions: [
          { q: "Vous mouillez une boule de terre et elle est rugueuse et s'effrite. Quel type de sol est-ce le plus probablement ?", options: ["Argileux", "Sableux", "Loam", "Tourbe"], answer: 1, why: "Un sol rugueux qui s'effrite est sableux ; l'eau le traverse vite et emporte les nutriments." },
          { q: "Le jeune maïs a des feuilles violettes. Quelle est la meilleure chose à faire ensuite ?", options: ["Acheter tout de suite n'importe quel engrais", "Brûler le champ", "Le voir comme un indice et confirmer par une analyse de sol", "Arracher la culture"], answer: 2, why: "La couleur des feuilles est un indice, pas une preuve ; l'analyse de sol vous le dit avec certitude." },
          { q: "Comment prélever un échantillon de sol dans un champ ?", options: ["Une poignée au meilleur endroit", "De la terre de l'ancien tas de fumier", "De la terre du chemin, où c'est facile à creuser", "10 à 20 petits échantillons en zigzag, mélangés en un seul"], answer: 3, why: "Un échantillon mélangé pris à beaucoup d'endroits représente tout le champ ; KALRO dit que l'échantillonnage est la plus grande source d'erreur." },
          { q: "Au Ghana, quel institut propose des analyses de sol en laboratoire ?", options: ["Le CSIR-Soil Research Institute, Kumasi", "La fédération nationale de football", "L'agence météorologique", "La poste"], answer: 0, why: "Le CSIR-Soil Research Institute de Kwadaso, à Kumasi, propose des analyses en laboratoire." },
          { q: "Que faire des tiges de maïs après la récolte pour améliorer la santé du sol ?", options: ["Les brûler", "Les laisser au champ ou les composter", "Les jeter dans la rivière", "Les vendre toutes chaque saison"], answer: 1, why: "Les résidus laissés au champ ou compostés ajoutent de la matière organique ; les brûler la fait disparaître." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder le sol en bonne santé saison après saison",
      lessons: [
        {
          title: "Rotation des cultures et association avec des légumineuses",
          minutes: 5,
          goal: "Planifier une rotation sur trois saisons et une association avec une légumineuse pour un champ.",
          text: [
            "Cultiver la même plante sur le même champ chaque saison épuise les mêmes nutriments et fait augmenter ses ravageurs, ses maladies et ses mauvaises herbes. La rotation des cultures, c'est changer de culture sur un champ d'une saison à l'autre, par exemple maïs, puis haricot ou arachide, puis sorgho ou manioc.",
            "Les légumineuses comme le haricot, le niébé, l'arachide, le soja et le pois d'Angole travaillent avec des bactéries dans de petites boules (nodules) sur leurs racines pour prendre l'azote de l'air. Une partie de cet azote reste dans les racines et les feuilles pour la culture suivante, surtout si vous laissez les résidus au champ.",
            "L'association de cultures, c'est cultiver deux plantes ensemble, comme le maïs avec le haricot, le sorgho avec le niébé, ou le manioc avec l'arachide. Elle couvre le sol, répartit les risques, et peut donner plus de nourriture au total sur la même terre. Gardez des écartements qui laissent la lumière aux deux cultures, et semez la légumineuse assez tôt pour qu'elle s'installe."
          ],
          steps: ["Listez les champs que vous cultivez et ce qui y a poussé la saison dernière.", "Planifiez les trois prochaines saisons pour qu'aucun champ n'ait deux fois de suite la même culture.", "Mettez une légumineuse dans chaque champ au moins une fois en trois saisons.", "Choisissez un couple de cultures associées, comme maïs et haricot.", "Laissez les résidus de légumineuses au champ après la récolte."],
          words: [["Rotation des cultures", "changer la culture d'un champ d'une saison à la suivante."], ["Légumineuse", "une plante comme le haricot, le niébé ou l'arachide qui peut ajouter de l'azote au sol."], ["Nodules", "petites boules sur les racines des légumineuses où des bactéries fixent l'azote de l'air."], ["Association de cultures", "cultiver deux cultures ou plus ensemble sur le même champ."]],
          slides: [
            { title: "Pourquoi faire une rotation", bullets: ["La même culture chaque saison épuise les mêmes nutriments", "Ravageurs, maladies et mauvaises herbes augmentent", "Exemple : maïs, puis haricot, puis sorgho"] },
            { title: "Les légumineuses nourrissent le sol", bullets: ["Haricot, niébé, arachide, soja, pois d'Angole", "Les nodules des racines prennent l'azote de l'air", "Laissez les résidus pour la culture suivante"] },
            { title: "Associer les cultures", bullets: ["Maïs + haricot, sorgho + niébé, manioc + arachide", "Couvre le sol et répartit les risques", "Espacez pour que les deux cultures aient la lumière"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Dessinez un tableau simple : vos champs sur le côté, les trois prochaines saisons en haut. Mettez une culture dans chaque case pour que chaque champ ait une légumineuse une fois et qu'aucun champ ne répète une culture. Arrachez un pied de haricot ou d'arachide et cherchez les nodules sur les racines.",
          youCanNow: "planifier une rotation des cultures et une association avec une légumineuse qui nourrissent votre sol."
        },
        {
          title: "Le paillage et la lutte contre l'érosion",
          minutes: 5,
          goal: "Choisir et mettre en place un paillage et des moyens simples contre l'érosion sur un champ en pente.",
          text: [
            "Un sol nu est un sol perdu. La pluie forte détache la terre et le ruissellement emporte la couche du dessus, la plus riche. Le paillis, une couche de résidus de culture, d'herbe sèche ou de feuilles sur le sol, adoucit la pluie, garde le sol humide et frais, et nourrit le sol en se décomposant. La FAO note que sur les pentes, il faut couvrir une bien plus grande partie du sol avec des résidus que sur un terrain plat pour arrêter l'érosion.",
            "Sur les pentes, travaillez en travers de la pente, jamais dans le sens de la pente. Semez et faites les billons le long de la courbe de niveau (une ligne à la même hauteur en travers de la pente). La FAO décrit les billons en courbe de niveau comme une bonne méthode pour les petits exploitants qui travaillent à la main ou avec des bœufs, et les bandes enherbées (par exemple d'herbe à éléphant, ou Napier) le long des courbes comme une solution bon marché à la place des terrasses ; l'herbe peut aussi nourrir le bétail.",
            "Sur les terres plus raides, les cordons pierreux, les diguettes en courbe de niveau et les terrasses en gradins (comme les terrasses fanya juu au Kenya) retiennent le sol et l'eau. Il faut du travail pour les construire et les entretenir, et des lignes mal tracées peuvent aggraver l'érosion : demandez à votre agent de vulgarisation de vous aider à marquer la courbe de niveau."
          ],
          steps: ["Parcourez le champ après la pluie et marquez où l'eau coule et où la terre est emportée.", "Marquez les courbes de niveau en travers de la pente avec un simple cadre en A ou un niveau à tuyau d'eau, ou avec l'aide de la vulgarisation.", "Semez, faites les billons et désherbez le long des courbes de niveau.", "Plantez des bandes enherbées ou construisez des cordons pierreux ou des diguettes le long de certaines courbes.", "Couvrez le sol entre les lignes avec du paillis.", "Vérifiez et réparez après chaque forte pluie."],
          words: [["Paillis", "une couche de résidus, d'herbe ou de feuilles étalée sur le sol."], ["Érosion", "la terre emportée par l'eau ou le vent."], ["Courbe de niveau", "une ligne en travers d'une pente où chaque point est à la même hauteur."], ["Terrasse", "une marche plate creusée dans une pente pour retenir le sol et l'eau."]],
          slides: [
            { title: "Un sol nu est un sol perdu", bullets: ["La pluie détache la terre ; le ruissellement l'emporte", "Le paillis adoucit la pluie et garde le sol humide", "Les pentes ont besoin de plus de couverture"] },
            { title: "Travaillez en travers de la pente", bullets: ["Ne labourez jamais dans le sens de la pente", "Billons et semis le long de la courbe de niveau", "Bandes enherbées : bon marché, et fourrage pour le bétail"] },
            { title: "Terres plus raides", bullets: ["Cordons pierreux, diguettes, terrasses", "Tracez les lignes avec soin ; demandez à la vulgarisation", "Réparez après les fortes pluies"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Après la prochaine pluie, parcourez votre champ et marquez sur un dessin où l'eau coule et où la terre est emportée. Choisissez un moyen de lutte (paillis, billons en courbe de niveau, bande enherbée ou cordon pierreux) pour le pire endroit et écrivez quand vous le mettrez en place.",
          youCanNow: "repérer l'érosion sur votre ferme et choisir le paillage et les courbes de niveau pour l'arrêter."
        },
        {
          title: "Les bases des engrais : bon produit, bonne dose, bon moment, bon endroit",
          minutes: 6,
          goal: "Écrire un plan d'engrais pour une culture en utilisant les 4B.",
          text: [
            "Les cultures ont besoin d'azote (N), de phosphore (P) et de potassium (K), plus de petites quantités d'autres nutriments. L'engrais minéral les apporte vite et en quantités connues. L'idée des 4B, utilisée en vulgarisation partout en Afrique, vous aide à tirer le maximum de chaque sac : le bon produit, à la bonne dose, au bon moment, au bon endroit.",
            "Bon produit : celui qui apporte ce qui manque selon votre analyse de sol (par exemple un engrais phosphaté au semis, un engrais azoté pour la couverture, et de la chaux si le sol est acide). Bonne dose : la quantité que donnent votre analyse et la recommandation locale pour votre culture et le rendement visé ; plus n'est pas toujours mieux et gaspille de l'argent. Bon moment : quand la culture en a besoin, par exemple l'azote de couverture sur le maïs à hauteur de genou environ, quand le sol est humide. Bon endroit : près des racines, dans le poquet ou en bande à côté de la ligne, sans toucher la semence, et recouvert pour que la pluie ne l'emporte pas.",
            "Utilisez l'engrais avec la matière organique ; les deux marchent mieux ensemble que séparément. Achetez des sacs scellés chez des vendeurs d'intrants agréés et vérifiez l'étiquette. Un assistant d'IA sur téléphone peut vous aider à comprendre un rapport d'analyse de sol avec des mots simples, mais les doses viennent du laboratoire, de votre agent de vulgarisation ou de la recommandation officielle pour votre zone."
          ],
          steps: ["Lisez votre analyse de sol ou la recommandation locale pour la culture.", "Produit : écrivez quel produit apporte chaque nutriment qui manque (et la chaux si besoin).", "Dose : écrivez la quantité par acre ou par hectare que donne la recommandation.", "Moment : notez les dates de semis et d'engrais de couverture dans votre calendrier.", "Endroit : prévoyez de le mettre dans le poquet ou en bande, sans toucher la semence, et de le recouvrir.", "Achetez des sacs scellés chez un vendeur d'intrants agréé ; gardez le reçu."],
          words: [["NPK", "azote (N), phosphore (P) et potassium (K), les trois principaux nutriments des cultures."], ["4B", "bon produit, bonne dose, bon moment, bon endroit pour l'engrais."], ["Engrais de couverture", "engrais, souvent azoté, apporté à une culture qui pousse déjà."], ["Vendeur d'intrants", "un magasin qui vend semences, engrais et autres intrants agricoles."]],
          slides: [
            { title: "Les 4B", bullets: ["Bon produit : ce qui manque à votre sol", "Bonne dose : la quantité recommandée", "Bon moment : quand la culture en a besoin", "Bon endroit : près des racines, recouvert"] },
            { title: "Exemple : le maïs", bullets: ["Engrais phosphaté dans le poquet, sans toucher la semence", "Azote de couverture à hauteur de genou, sol humide", "Chaux si l'analyse dit que le sol est acide"] },
            { title: "En avoir pour son argent", bullets: ["Plus n'est pas toujours mieux", "Associez au compost et au fumier", "Sacs scellés chez des vendeurs agréés"] },
            { title: "L'IA explique, elle ne prescrit pas", bullets: ["Demandez à une IA d'expliquer simplement votre analyse", "Les doses viennent du laboratoire ou de la vulgarisation"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Tâche finale : écrivez votre plan de sol d'une page pour un champ. Mettez-y ce que votre observation a montré, votre plan d'analyse ou ses résultats, comment vous ajouterez de la matière organique, votre rotation ou association, comment vous arrêterez l'érosion, et une ligne d'engrais pour chaque nutriment : produit, dose, moment et endroit.",
          youCanNow: "utiliser l'engrais selon les 4B et monter un plan de sol complet d'une saison pour votre champ."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder le sol en bonne santé saison après saison",
        questions: [
          { q: "Pourquoi les légumineuses comme le haricot aident-elles la culture suivante ?", options: ["Elles tuent toutes les mauvaises herbes", "Leurs racines travaillent avec des bactéries pour ajouter de l'azote", "Elles rendent le sol plus acide", "Elles n'ont pas besoin de pluie"], answer: 1, why: "Les nodules des racines fixent l'azote de l'air ; une partie reste dans le sol pour la culture suivante." },
          { q: "Quel plan est une bonne rotation des cultures ?", options: ["Maïs, puis haricot, puis sorgho", "Maïs, puis maïs, puis maïs", "Tomates après tomates chaque saison", "Laisser le champ nu une saison sur deux"], answer: 0, why: "Changer de culture et inclure une légumineuse casse le cycle des ravageurs et nourrit le sol." },
          { q: "Sur un champ en pente, comment labourer et semer ?", options: ["Tout droit dans le sens de la pente", "En cercles", "En travers de la pente, le long de la courbe de niveau", "Seulement en haut"], answer: 2, why: "Travailler le long de la courbe de niveau ralentit le ruissellement et garde le sol en place." },
          { q: "Que veut dire « bon moment » pour l'azote de couverture sur le maïs ?", options: ["N'importe quand, quand vous avez de l'argent", "Avant d'acheter la semence", "Après la récolte", "Quand la culture en a besoin, vers la hauteur du genou, sol humide"], answer: 3, why: "L'azote est mieux utilisé quand la culture qui pousse en a besoin et que le sol est humide." },
          { q: "Quel est le bon endroit pour l'engrais de semis ?", options: ["Sur la semence", "Près des racines, sans toucher la semence, et recouvert", "Étalé sur la route", "Dans le tas de compost"], answer: 1, why: "Placer l'engrais près des racines, recouvert et sans toucher la semence, l'utilise au mieux et évite de brûler la graine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Santé et fertilité du sol",
    questions: [
      { q: "Lequel est un signe de sol en bonne santé ?", options: ["Pâle et dur avec une croûte", "Sombre, grumeleux, avec des vers de terre", "Toujours engorgé d'eau", "La pluie ruisselle tout de suite"], answer: 1, why: "Un sol sombre et grumeleux avec des vers de terre est en bonne santé." },
      { q: "Un sol collant qui forme un long ruban est surtout :", options: ["Du sable", "Du gravier", "De l'argile", "De la cendre"], answer: 2, why: "Un sol collant qui forme un ruban est riche en argile." },
      { q: "Un champ a beaucoup de striga. C'est souvent le signe :", options: ["D'un sol fatigué et peu fertile", "De trop de compost", "D'un sol parfait", "De trop d'ombre"], answer: 0, why: "Le striga est fréquent sur les sols pauvres et fatigués." },
      { q: "Que vous dit une analyse de sol en laboratoire que vos yeux ne voient pas ?", options: ["La couleur du sol", "Le nombre de vers", "Où l'eau coule", "Le pH et le niveau des nutriments"], answer: 3, why: "Une analyse de sol mesure l'acidité et les nutriments." },
      { q: "Au Kenya, quel institut national a des laboratoires d'analyse de sol ?", options: ["KALRO", "Kenya Power", "Kenya Airways", "Le Kenya Wildlife Service"], answer: 0, why: "KALRO, la Kenya Agricultural and Livestock Research Organization, a des laboratoires de sol comme celui de Kabete." },
      { q: "En prélevant un échantillon de sol, quel endroit faut-il éviter ?", options: ["Le milieu du champ", "Un point du zigzag", "Le bord d'une ligne de semis", "Un ancien tas de fumier ou de cendres"], answer: 3, why: "Les endroits inhabituels donnent une fausse image du champ." },
      { q: "Dans quoi mélanger les échantillons de sol ?", options: ["Un vieux sac d'engrais", "Un seau propre", "Un bidon de produit chimique usagé", "Votre poche"], answer: 1, why: "Un seau propre évite que de l'engrais ou des produits chimiques faussent le résultat." },
      { q: "Selon la FAO, la matière organique du sol est essentielle parce qu'elle :", options: ["Rend le sol plus dur", "Enlève tous les nutriments", "Garde l'eau et les nutriments comme une éponge", "Empêche les racines de pousser"], answer: 2, why: "La matière organique garde l'eau et les nutriments et nourrit la vie du sol." },
      { q: "Quelle humidité doit avoir un tas de compost ?", options: ["Tout à fait sec", "Noyé d'eau", "Humide comme une éponge essorée", "Ça n'a pas d'importance"], answer: 2, why: "Le compost a besoin d'humidité sans être trempé." },
      { q: "Pourquoi laisser le fumier frais se décomposer avant de l'utiliser près des jeunes plants ?", options: ["Le fumier frais et chaud peut brûler les jeunes plants", "Le fumier décomposé est plus lourd", "Le fumier frais n'a pas de nutriments", "C'est la loi partout"], answer: 0, why: "Le fumier frais peut être trop fort et trop chaud pour les jeunes plantes." },
      { q: "Quelle pratique fait disparaître la matière organique du sol ?", options: ["Ajouter du compost", "Brûler les résidus de culture", "Cultiver des légumineuses", "Pailler"], answer: 1, why: "Brûler détruit les résidus qui auraient nourri le sol." },
      { q: "Laquelle est une légumineuse ?", options: ["Le maïs", "Le sorgho", "Le manioc", "Le niébé"], answer: 3, why: "Le niébé est une légumineuse qui peut ajouter de l'azote au sol." },
      { q: "Cultiver le maïs et le haricot ensemble sur le même champ s'appelle :", options: ["L'association de cultures", "Le chaulage", "Le terrassement", "L'engrais de couverture"], answer: 0, why: "Cultiver deux cultures ensemble, c'est l'association de cultures." },
      { q: "Pourquoi faire une rotation au lieu de cultiver la même chose chaque saison ?", options: ["Pour utiliser plus d'engrais", "Pour rendre le désherbage plus difficile", "Pour casser la montée des ravageurs et des maladies et équilibrer les nutriments", "Parce que la loi l'exige"], answer: 2, why: "La rotation casse le cycle des ravageurs et évite qu'une culture épuise toujours les mêmes nutriments." },
      { q: "À quoi sert le paillis ?", options: ["Il rend le sol plus chaud et plus sec", "Il tue les vers de terre", "Il remplace tout l'engrais", "Il adoucit la pluie, garde le sol humide et le nourrit"], answer: 3, why: "Le paillis protège et nourrit le sol." },
      { q: "Un moyen bon marché de ralentir l'érosion sur une pente douce, qui peut aussi nourrir le bétail, c'est :", options: ["Des bandes enherbées le long des courbes de niveau", "Labourer dans le sens de la pente", "Brûler le champ", "Enlever toutes les plantes"], answer: 0, why: "La FAO décrit les bandes enherbées comme une solution bon marché à la place des terrasses." },
      { q: "Pourquoi demander à un agent de vulgarisation d'aider à marquer les courbes de niveau ?", options: ["Ce n'est pas du tout nécessaire", "Les courbes doivent être peintes", "Des lignes mal tracées peuvent aggraver l'érosion", "Les agents de vulgarisation possèdent la terre"], answer: 2, why: "Des lignes qui ne sont pas vraiment de niveau peuvent concentrer l'eau et augmenter l'érosion." },
      { q: "Lequel ne fait PAS partie des 4B de l'utilisation des engrais ?", options: ["Bon produit", "Bonne dose", "Bon endroit", "Bonne couleur"], answer: 3, why: "Les 4B sont le produit, la dose, le moment et l'endroit." },
      { q: "D'où doit venir la dose d'engrais pour votre culture ?", options: ["D'une estimation au hasard", "De votre analyse de sol et de la recommandation locale", "De ce que votre voisin a utilisé", "Du plus gros sac du magasin"], answer: 1, why: "Les doses doivent correspondre à votre sol et à la recommandation officielle." },
      { q: "Vous interrogez un assistant d'IA sur téléphone au sujet de votre analyse de sol. Quelle est la bonne façon de l'utiliser ?", options: ["Pour expliquer le rapport avec des mots simples, puis vérifier les doses avec le laboratoire ou la vulgarisation", "Pour choisir les doses d'engrais à la place du laboratoire", "Pour lui envoyer vos coordonnées bancaires", "Pour remplacer l'analyse de sol"], answer: 0, why: "L'IA peut expliquer, mais les doses viennent du laboratoire, de l'agent de vulgarisation ou de la recommandation officielle." }
    ]
  }
};
