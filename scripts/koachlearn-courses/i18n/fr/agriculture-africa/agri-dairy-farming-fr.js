"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-dairy-farming.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety rule kept from the English: no drug, vaccine or hormone doses or withdrawal periods as numbers; follow the vet and the label.

const ILRI_MANUAL = { name: "ILRI : Manuel de formation des petits producteurs laitiers (Goopy et Gakige, ILRI Manual 24, 2e édition, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO, Production et produits laitiers : conservation du lait (refroidir à 4 °C dans les 3 à 4 heures après la traite)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO, Production et produits laitiers : qualité et contrôle du lait", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO, Production et produits laitiers : santé animale (la mammite baisse la production et la qualité du lait)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "Service de vulgarisation de l'Université du Missouri : utiliser le California Mastitis Test (méthode et lecture)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (régule la filière laitière ; permis pour ceux qui manipulent le lait)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board : conditions de licence", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-fr",
  lang: "fr",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Élevage laitier : production et hygiène du lait",
  skills: "Choisir des vaches et des chèvres laitières, Aménager une étable en zéro pâturage, Traire proprement, Repérer et dépister la mammite, Refroidir et vendre un lait de qualité, Élever les veaux et calculer le coût par litre",
  outcome: "gérer une petite exploitation laitière qui produit un lait propre accepté par l'acheteur : choisir et loger vos vaches ou vos chèvres, les traire avec une routine propre, repérer tôt la mammite avec le California Mastitis Test, refroidir et vendre un lait qui passe les contrôles de qualité, élever des veaux en bonne santé et calculer ce que vous coûte chaque litre.",
  about: [
    "Ce cours s'adresse aux petits et moyens producteurs laitiers, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation du Kenya, du Nigeria, du Ghana, du Burkina Faso et de toute l'Afrique qui élèvent, ou veulent élever, des vaches ou des chèvres laitières. Un lait propre se vend mieux, est moins souvent refusé et protège la santé des familles ; un lait sale et une mammite cachée mangent vos bénéfices sans bruit.",
    "Le chapitre 1 met en place l'exploitation : le choix des animaux, l'étable en zéro pâturage et l'alimentation pour le lait, et une routine de traite propre. Le chapitre 2 protège et vend le lait : la mammite et le California Mastitis Test, le refroidissement et la vente à une coopérative ou à un transformateur, et l'élevage des veaux, les registres et le coût par litre. L'alimentation est traitée en détail dans le cours \"Alimentation du bétail et formulation des rations avec des ingrédients locaux\" ; ici, vous apprenez le lien entre l'aliment, le lait et le coût.",
    "Ce cours ne donne jamais de doses de médicaments, de vaccins ou d'hormones, ni de délais d'attente. Suivez toujours votre vétérinaire ou votre agent de santé animale et l'étiquette du produit. Les montants d'argent sont seulement des exemples ; utilisez vos propres prix. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre exploitation. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez deux pages pour votre propre exploitation laitière (ou pour un exemple comme 3 vaches à Kiambu ou 10 chèvres laitières près de Kumasi). Page 1, une routine d'hygiène de la traite à afficher dans le lieu de traite : les étapes, de la préparation du trayeur et des ustensiles jusqu'au refroidissement du lait, les signes de mammite à surveiller, quand vous faites un CMT, et ce que devient le lait des animaux malades ou traités. Page 2, une fiche de coût par litre pour un mois : chaque dépense (aliments et fourrage, main-d'œuvre, vétérinaire et reproduction, autres), les litres produits, le coût par litre, le prix payé par votre acheteur, et un changement que vous ferez pour baisser le coût par litre.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits et moyens producteurs laitiers, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation du Kenya, du Nigeria, du Ghana, d'Afrique de l'Ouest francophone et d'ailleurs en Afrique, qui ont de 1 à 20 vaches ou un petit troupeau de chèvres laitières, souvent en zéro pâturage ou en semi-stabulation.",
    startingPoint: "Ils savent nourrir, abreuver et traire à la main, et vendent du lait sur place. Beaucoup traient sans routine d'hygiène fixe, utilisent des récipients en plastique, ne voient la mammite que quand le lait a mauvais aspect, et ne savent pas combien leur coûte un litre.",
    gap: "Les acheteurs et les coopératives contrôlent le lait et refusent ou paient moins un lait aigre, mouillé (avec de l'eau ajoutée) ou contenant des résidus de médicaments. La mammite cachée (subclinique) fait baisser la production sans signe visible. Les producteurs ont besoin d'une routine qui donne un lait propre et frais, d'un moyen de repérer tôt la mammite, et de registres qui montrent si chaque litre rapporte.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un téléphone simple ou un smartphone et une calculatrice ; des registres sur papier suffisent",
      "Temps : leçons de 4 à 6 minutes, à placer entre les traites",
      "Beaucoup d'exploitations n'ont ni électricité ni tank à lait",
      "Santé animale : aucune dose de médicament, de vaccin ou d'hormone, aucun chiffre de délai d'attente ; suivre le vétérinaire et l'étiquette",
      "Les montants sont des exemples ; les prix, les permis et les règles des acheteurs varient selon le pays et l'acheteur"
    ],
    prerequisites: "Aucun. \"Santé et conduite de l'élevage\" (contrôles de santé quotidiens) et \"Alimentation du bétail et formulation des rations avec des ingrédients locaux\" (rations) sont de bons compléments."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Selon votre terrain, votre argent, votre fourrage et votre marché", action: "choisir des vaches ou des chèvres laitières et organiser une étable en zéro pâturage avec stalle, mangeoire, eau et évacuation", standard: "en citant au moins quatre vérifications faites avant l'achat" },
    { id: "O2", condition: "À chaque traite", action: "suivre une routine de traite propre, de la préparation du trayeur et des ustensiles jusqu'à la filtration et la couverture du lait", standard: "en faisant chaque étape dans l'ordre, sans en sauter aucune" },
    { id: "O3", condition: "Face à une vache ou une chèvre en lactation", action: "rechercher les signes de mammite et faire un California Mastitis Test sur chaque trayon", standard: "en notant le résultat de chaque quartier ou demi-mamelle et en appelant le vétérinaire pour tout animal positif ou malade" },
    { id: "O4", condition: "Après la traite, avec ou sans tank à lait", action: "refroidir, stocker et livrer le lait pour qu'il passe les contrôles de qualité de l'acheteur", standard: "en arrivant au tank ou chez l'acheteur dans le délai qu'il fixe, sans rien ajouter au lait" },
    { id: "O5", condition: "À partir d'un mois de registres de l'exploitation", action: "calculer le coût par litre de lait et le comparer au prix payé par votre acheteur", standard: "avec toutes les dépenses comptées et des calculs justes" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Installer une exploitation laitière propre",
      lessons: [
        {
          title: "Choisir des vaches et des chèvres laitières",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir des animaux laitiers adaptés à votre fourrage, à votre argent et à votre marché.",
          text: [
            "Un animal laitier ne vaut que par l'alimentation et les soins que vous pouvez lui donner. Une vache Frisonne (Holstein) à forte production a besoin de beaucoup de bon aliment et d'eau chaque jour ; si vous ne pouvez pas les lui fournir, un croisement avec une race locale, ou une race plus petite comme la Jersey ou l'Ayrshire, peut vous rapporter davantage. Dans les zones plus sèches, les races locales rustiques et leurs croisements, comme les croisements de zébus au nord du Nigeria ou le zébu Azawak au Niger et au Burkina Faso, supportent mieux la chaleur et le fourrage pauvre.",
            "Les chèvres laitières conviennent aux petites parcelles et aux petits budgets. Elles mangent moins, coûtent moins, et le lait de chèvre a ses propres acheteurs. Au Kenya, on élève pour le lait des chèvres Saanen, Toggenburg et Alpines et leurs croisements avec des chèvres locales.",
            "Avant d'acheter, vérifiez : Avez-vous du fourrage et de l'eau toute l'année, saison sèche comprise ? Qui achètera votre lait, et à quel prix ? Pouvez-vous joindre un vétérinaire et un service d'insémination artificielle (IA) ? Ensuite, vérifiez l'animal : achetez chez un éleveur connu qui tient des registres, cherchez un animal en bonne santé et éveillé, avec une mamelle bien formée et quatre (vache) ou deux (chèvre) trayons qui fonctionnent, demandez sa production passée, ses vêlages et ses maladies, et demandez à un vétérinaire ou à un agent de santé animale de l'examiner avant de payer."
          ],
          steps: ["Notez votre fourrage et votre eau pour la saison des pluies et la saison sèche.", "Trouvez votre acheteur et le prix au litre.", "Trouvez le vétérinaire et le service d'IA les plus proches.", "Choisissez la race ou le croisement que votre fourrage peut nourrir.", "Achetez chez un vendeur connu qui a des registres ; vérifiez mamelle, trayons et santé.", "Faites examiner l'animal par un vétérinaire avant de payer."],
          words: [["Race laitière", "une race élevée surtout pour le lait, comme les vaches Frisonne, Jersey ou Ayrshire, ou les chèvres Saanen et Toggenburg."], ["Croisement", "un animal dont les parents sont de deux races différentes, souvent une race laitière importée et une race locale."], ["Insémination artificielle (IA)", "placer chez la femelle la semence d'un taureau ou d'un bouc choisi ; c'est un technicien formé qui le fait."]],
          slides: [
            { title: "L'alimentation décide de la race", bullets: ["Les fortes productrices demandent beaucoup de bon aliment et d'eau", "Croisements et petites races : moins d'aliment", "Les races locales rustiques supportent chaleur et saison sèche"] },
            { title: "Les chèvres laitières", bullets: ["Moins d'aliment, moins d'argent, moins de place", "Saanen, Toggenburg, Alpine et croisements", "Trouvez d'abord des acheteurs de lait de chèvre"] },
            { title: "Avant d'acheter", bullets: ["Fourrage et eau toute l'année ?", "Un acheteur et un prix au litre ?", "Un vétérinaire et un service d'IA joignables ?"] },
            { title: "Vérifiez l'animal", bullets: ["Vendeur connu avec registres", "En bonne santé, éveillée ; bonne mamelle ; tous les trayons fonctionnent", "Examen par le vétérinaire avant de payer"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Écrivez votre propre liste d'achat : votre fourrage et votre eau pour la saison sèche, votre acheteur et le prix, le vétérinaire et le service d'IA les plus proches, la race ou le croisement que vous pouvez nourrir, et cinq points que vous vérifierez sur l'animal avant de payer.",
          youCanNow: "choisir une race laitière adaptée à votre fourrage et à votre marché, et bien vérifier un animal avant de l'acheter.",
          quickCheck: [
            { objective: "O1", q: "Vous avez peu de fourrage en saison sèche. Quel est le choix le plus sage ?", options: ["Acheter la Frisonne la plus productive possible", "Acheter un croisement ou une race plus petite que votre fourrage peut nourrir", "Acheter plus de vaches pour que certaines survivent", "Acheter maintenant et penser au fourrage plus tard"], answer: 1, why: "Une vache ne donne que ce que son alimentation permet ; un croisement ou une race plus petite convient à peu de fourrage." },
            { objective: "O1", q: "Quelle vérification devez-vous faire avant de payer une vache ?", options: ["La faire examiner par un vétérinaire et regarder ses registres", "Compter ses taches", "Regarder seulement sa couleur", "Demander au vendeur si elle est bonne"], answer: 0, why: "L'examen du vétérinaire et les registres montrent la santé, la production passée et les vêlages." }
          ]
        },
        {
          title: "Étable en zéro pâturage et alimentation pour le lait",
          objectives: ["O1"],
          minutes: 6,
          goal: "Organiser une étable en zéro pâturage et prévoir l'aliment et l'eau pour le lait.",
          text: [
            "En zéro pâturage, les animaux restent dans une étable et vous leur apportez l'aliment : herbe à éléphant (Napier) coupée, autres fourrages et résidus de récolte. Cela économise la terre et vous permet de contrôler l'alimentation, mais demande du travail chaque jour et une bonne hygiène.",
            "Une bonne étable a : un toit contre le soleil et la pluie ; une stalle ou une logette par vache avec une litière sèche et douce pour qu'elle puisse se coucher ; un sol en pente pour que l'urine et l'eau s'écoulent ; une mangeoire et un abreuvoir faciles à nettoyer ; un lieu de traite propre et séparé ; un enclos pour les veaux ; une fosse à fumier loin du lieu de traite ; et un magasin pour l'aliment. Pour les chèvres, un plancher surélevé à lattes les garde au sec. Enlevez la bouse chaque jour, car une litière sale est une cause majeure de mammite.",
            "Le lait est fait d'aliment et d'eau. Une vache en lactation a besoin de beaucoup d'eau propre toute la journée, d'un bon fourrage grossier, et d'un supplément équilibré d'énergie, de protéines et de minéraux ; le lait baisse vite quand l'eau ou l'aliment manque. La façon de composer une ration avec des aliments locaux est enseignée dans \"Alimentation du bétail et formulation des rations avec des ingrédients locaux\". Ici, retenez deux choses : notez le coût de chaque aliment, car l'alimentation est en général votre plus grosse dépense, et changez d'aliment progressivement."
          ],
          steps: ["Tracez une étable couverte sur un terrain qui draine bien.", "Donnez à chaque animal une stalle avec une litière sèche et un sol en pente.", "Placez mangeoire et abreuvoir là où ils sont faciles à remplir et à nettoyer.", "Ajoutez un lieu de traite propre, un enclos à veaux et un magasin d'aliment.", "Placez la fosse à fumier loin de la traite et de l'eau.", "Enlevez la bouse chaque jour ; notez l'aliment acheté et son coût."],
          words: [["Zéro pâturage", "garder les animaux dans une étable et leur apporter tout leur aliment au lieu de les laisser pâturer."], ["Litière", "matière sèche et douce au sol où les animaux se couchent, comme des copeaux de bois, de l'herbe sèche ou du sable."], ["Fourrage grossier", "aliment volumineux comme l'herbe, le fourrage, le foin et les résidus de récolte."]],
          slides: [
            { title: "Le zéro pâturage", bullets: ["Les animaux restent à l'étable ; vous apportez l'aliment", "Économise la terre ; vous contrôlez l'aliment", "Demande du travail chaque jour et de l'hygiène"] },
            { title: "Une bonne étable", bullets: ["Toit ; une stalle par vache ; litière sèche", "Sol en pente qui s'égoutte", "Mangeoire et abreuvoir faciles à nettoyer"] },
            { title: "La garder propre", bullets: ["Lieu de traite propre et séparé", "Enclos à veaux ; magasin d'aliment", "Fosse à fumier loin de la traite ; nettoyer chaque jour"] },
            { title: "L'aliment fait le lait", bullets: ["Beaucoup d'eau propre toute la journée", "Fourrage grossier plus énergie, protéines et minéraux équilibrés", "Notez le coût de l'aliment ; changez progressivement"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Dessinez un plan simple de votre étable en zéro pâturage (ou de celle que vous allez construire) : stalles, litière, pente du sol, mangeoire, abreuvoir, lieu de traite, enclos à veaux, magasin d'aliment et fosse à fumier. Marquez la première chose que vous allez corriger.",
          youCanNow: "organiser une étable en zéro pâturage qui garde les animaux au sec et propres, et expliquer comment l'aliment et l'eau deviennent du lait.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi le sol d'une stalle en zéro pâturage doit-il être en pente ?", options: ["Pour que la vache puisse glisser dehors", "Pour que l'urine et l'eau s'écoulent et que la litière reste sèche", "Pour économiser du ciment", "Pour que l'aliment roule vers la vache"], answer: 1, why: "Un sol et une litière secs gardent les mamelles propres et réduisent la mammite." },
            { objective: "O1", q: "Où doit se trouver la fosse à fumier ?", options: ["À côté de l'abreuvoir", "Dans le lieu de traite", "Loin du lieu de traite et de l'eau", "Sous le magasin d'aliment"], answer: 2, why: "Du fumier près de la traite ou de l'eau apporte saleté et microbes dans le lait." }
          ]
        },
        {
          title: "Une routine de traite propre",
          objectives: ["O2"],
          minutes: 6,
          goal: "Traire une vache ou une chèvre avec une routine propre, étape par étape.",
          text: [
            "Les microbes entrent dans le lait par des mains sales, des mamelles sales, des récipients sales et l'air d'une étable sale. Une routine fixe, faite de la même façon à chaque traite, les tient dehors. Traire aux mêmes heures chaque jour, dans un lieu propre, dans le calme : un animal effrayé donne moins de lait.",
            "Utilisez des récipients en métal lisse (aluminium ou inox), faciles à nettoyer. Les bidons en plastique se rayent et retiennent la saleté, et beaucoup d'acheteurs refusent le lait qui arrive dedans. Lavez les récipients après chaque usage avec de l'eau propre et du détergent, rincez-les et faites-les sécher à l'envers sur un égouttoir au soleil.",
            "Traire d'abord les animaux sains, et en dernier tout animal malade ou traité. Gardez à part le lait d'un animal traité avec un médicament et ne le vendez pas avant la fin du délai d'attente indiqué sur l'étiquette du produit ou donné par votre vétérinaire."
          ],
          steps: ["Portez des vêtements propres ; gardez les ongles courts ; lavez-vous les mains au savon.", "Apportez des récipients en métal propres et secs, un bol à fond noir et un filtre ou une passoire propre.", "Attachez ou installez l'animal calmement dans le lieu de traite propre.", "Lavez les trayons (et la mamelle seulement si elle est sale) à l'eau tiède propre et séchez-les avec un chiffon ou un papier propre différent pour chaque animal.", "Tirez les premiers jets de chaque trayon dans le bol à fond noir et cherchez des grumeaux, des flocons ou un lait aqueux.", "Trayez vite et complètement avec toute la main, sans tirer avec les doigts.", "Trempez ou pulvérisez les trayons après la traite si votre vétérinaire le conseille, et donnez à manger pour que l'animal reste debout un moment.", "Filtrez le lait, couvrez-le et commencez à le refroidir tout de suite."],
          words: [["Bol à fond noir", "un bol couvert d'une plaque ou d'un tissu sombre ; les premiers jets de lait y montrent les grumeaux ou les flocons."], ["Produit de trempage des trayons", "un liquide désinfectant dans lequel on trempe les trayons après la traite pour tuer les microbes ; utilisez celui que recommande votre vétérinaire, comme le dit l'étiquette."], ["Délai d'attente", "le temps après un traitement pendant lequel le lait ou la viande ne doivent pas être vendus ni consommés ; il est écrit sur l'étiquette ou donné par le vétérinaire."]],
          slides: [
            { title: "D'où viennent les microbes", bullets: ["Mains et mamelles sales", "Récipients sales", "Une étable sale et poussiéreuse"] },
            { title: "Avant la traite", bullets: ["Vêtements propres, ongles courts, mains lavées", "Récipients en métal propres et secs", "Laver et sécher les trayons : un chiffon par animal"] },
            { title: "Pendant la traite", bullets: ["Bol à fond noir : contrôler les premiers jets", "Traire vite et complètement, toute la main", "Animaux sains d'abord, malades ou traités en dernier"] },
            { title: "Après la traite", bullets: ["Trempage des trayons si le vétérinaire le conseille", "Filtrer, couvrir et refroidir le lait tout de suite", "Animaux traités : pas de vente avant ce que dit l'étiquette"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Observez ou faites une traite sur votre exploitation et cochez chaque étape de cette leçon. Notez chaque étape oubliée et un changement à faire demain, comme un chiffon de séchage par animal ou un bidon en métal au lieu d'un bidon en plastique.",
          youCanNow: "traire une vache ou une chèvre avec une routine propre qui garde les microbes hors du lait.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi tirer les premiers jets dans un bol à fond noir ?", options: ["Pour nourrir le chat", "C'est le lait le plus riche", "Pour voir les grumeaux ou les flocons qui signalent une mammite", "Pour calmer la vache"], answer: 2, why: "Le bol à fond noir montre tôt un lait anormal, avant qu'il se mélange au bon lait." },
            { objective: "O2", q: "Le vétérinaire a traité une vache il y a deux jours. Que faites-vous de son lait ?", options: ["Vous le mélangez au reste ; un peu, ce n'est rien", "Vous le vendez à un autre acheteur", "Vous le donnez à son veau sans demander", "Vous le gardez à part et ne le vendez pas avant la fin du délai d'attente indiqué par l'étiquette ou le vétérinaire"], answer: 3, why: "Les résidus de médicaments rendent le lait dangereux et les acheteurs les recherchent ; l'étiquette ou le vétérinaire donne le temps d'attente." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Installer une exploitation laitière propre",
        questions: [
          { objective: "O1", q: "Qu'est-ce qui doit décider de la race laitière que vous achetez ?", options: ["L'aliment, l'eau et les soins que vous pouvez lui donner toute l'année", "La couleur que vous préférez", "Ce que votre voisin a acheté", "L'animal le moins cher du marché"], answer: 0, why: "Un animal laitier ne produit que ce que son alimentation et ses soins permettent." },
          { objective: "O1", q: "Lequel de ces éléments NE fait PAS partie d'une bonne étable en zéro pâturage ?", options: ["Une litière sèche dans chaque stalle", "Un sol qui s'égoutte", "Une fosse à fumier à côté du lieu de traite", "Une mangeoire et un abreuvoir faciles à nettoyer"], answer: 2, why: "Le fumier doit rester loin de la traite pour garder les microbes hors du lait." },
          { objective: "O2", q: "Quel récipient est le meilleur pour le lait ?", options: ["Un bidon en plastique", "Un bidon propre et lisse en aluminium ou en inox", "Un vieux seau de peinture", "N'importe quel récipient avec un couvercle"], answer: 1, why: "Le métal lisse se nettoie facilement ; le plastique se raye et retient la saleté." },
          { objective: "O2", q: "Comment sécher les trayons avant la traite ?", options: ["Avec une seule serviette pour tous les animaux", "Les laisser mouillés", "Avec vos vêtements", "Avec un chiffon ou un papier propre différent pour chaque animal"], answer: 3, why: "Une serviette partagée transporte les microbes de la mammite d'un animal à l'autre." },
          { objective: "O2", q: "Dans quel ordre faut-il traire vos animaux ?", options: ["Les animaux sains d'abord, les malades ou traités en dernier", "Les malades d'abord", "Dans n'importe quel ordre", "Les plus jeunes d'abord"], answer: 0, why: "Traire les malades en dernier empêche les microbes de passer aux mamelles saines." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mamelles saines, lait sûr et bénéfice",
      lessons: [
        {
          title: "La mammite : signes, prévention et CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rechercher la mammite chez un animal et faire un California Mastitis Test.",
          text: [
            "La mammite est une infection et un gonflement de la mamelle. Elle baisse la production et la qualité du lait et c'est l'une des maladies qui coûtent le plus cher en élevage laitier. La mammite clinique se voit : un quartier chaud, gonflé ou douloureux ; un lait avec des grumeaux, des flocons, aqueux ou avec du sang ; et parfois de la fièvre et une perte d'appétit. La mammite subclinique ne montre rien de visible, mais l'animal donne moins de lait. C'est pour cela qu'on fait un test.",
            "Le California Mastitis Test (CMT) révèle la mammite cachée, directement à la ferme. Il faut un plateau à quatre coupelles et le liquide du CMT (le réactif). Tirez un peu de lait de chaque trayon dans sa propre coupelle, ajoutez la même quantité de réactif, faites tourner et lisez en quelques secondes. Un lait qui reste liquide est normal. Un gel, une consistance gluante ou des grumeaux montrent un nombre élevé de cellules, signe de mammite dans ce quartier. Plus le gel est épais, plus la réaction est forte. Ne faites pas le test dans les premiers jours après le vêlage, quand les résultats sont naturellement élevés. Le lait de chèvre peut réagir plus fort même quand la chèvre est saine : demandez à votre vétérinaire comment lire les résultats chez la chèvre.",
            "Prévenez la mammite avec une litière propre et sèche, la routine de traite propre, un trempage des trayons si votre vétérinaire le conseille, la traite des animaux infectés en dernier, et des traitements donnés seulement sur avis de votre vétérinaire. Ne donnez jamais d'antibiotiques de vous-même : suivez le vétérinaire et l'étiquette. Notez chaque cas et chaque traitement."
          ],
          steps: ["Regardez et palpez chaque quartier : chaleur, gonflement ou douleur.", "Contrôlez les premiers jets dans le bol à fond noir : grumeaux, flocons ou sang.", "Pour le CMT : jetez les premiers jets, puis tirez un peu de lait de chaque trayon dans sa propre coupelle.", "Inclinez le plateau pour garder la bonne quantité ; ajoutez la même quantité de réactif.", "Faites tourner doucement et lisez en quelques secondes : liquide = normal, gel = réaction.", "Notez le résultat de chaque quartier ou demi-mamelle.", "Appelez votre vétérinaire pour tout cas clinique ou résultat positif ; suivez le vétérinaire et l'étiquette."],
          words: [["Mammite", "infection et gonflement de la mamelle qui baissent la production et la qualité du lait."], ["Mammite subclinique", "mammite sans signe visible ; seul un test comme le CMT la montre."], ["Quartier", "l'une des quatre parties de la mamelle de la vache, chacune avec son trayon."], ["Réactif", "le liquide utilisé dans un test, qui réagit avec le lait."]],
          slides: [
            { title: "La mammite coûte cher", bullets: ["Infection et gonflement de la mamelle", "Moins de lait, moins de qualité", "Clinique : on la voit. Subclinique : on ne la voit pas"] },
            { title: "Signes cliniques", bullets: ["Quartier chaud, gonflé ou douloureux", "Lait avec grumeaux, flocons, aqueux ou avec du sang", "Parfois fièvre et perte d'appétit"] },
            { title: "Le CMT", bullets: ["Une coupelle par trayon ; même quantité de réactif", "Faire tourner et lire en quelques secondes", "Liquide = normal ; gel ou gluant = réaction"] },
            { title: "Prévenir et agir", bullets: ["Litière sèche, routine propre, trempage si conseillé", "Animaux infectés traits en dernier", "Le vétérinaire décide du traitement ; suivre l'étiquette"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Faites un CMT sur une vache ou une chèvre (empruntez un plateau et du réactif à votre coopérative, à votre vétérinaire ou à votre agent de vulgarisation si vous n'en avez pas). Notez dans votre cahier le résultat de chaque quartier ou demi-mamelle, et écrivez ce que vous ferez en cas de réaction.",
          youCanNow: "repérer les signes de mammite, faire un CMT sur chaque trayon, noter le résultat et savoir quand appeler le vétérinaire.",
          quickCheck: [
            { objective: "O3", q: "Le lait de votre vache a l'air normal, mais sa production a baissé. Qu'est-ce qui peut révéler une mammite cachée ?", options: ["Attendre que le lait montre des grumeaux", "Un California Mastitis Test", "Lui donner plus de sel", "Sentir le lait"], answer: 1, why: "La mammite subclinique n'a pas de signe visible ; le CMT la montre." },
            { objective: "O3", q: "Dans un CMT, une coupelle devient un gel épais. Qu'est-ce que cela veut dire ?", options: ["Le test est bien fait et le quartier est sain", "Vous avez mis trop peu de lait", "Le lait est très riche", "Une forte réaction dans ce quartier ; notez-la et appelez le vétérinaire"], answer: 3, why: "Un gel indique un nombre élevé de cellules, signe de mammite dans ce quartier." }
          ]
        },
        {
          title: "Refroidir, manipuler et vendre le lait",
          objectives: ["O4"],
          minutes: 6,
          goal: "Refroidir et livrer un lait qui passe les contrôles de qualité de l'acheteur.",
          text: [
            "Le lait frais a des défenses naturelles qui freinent les microbes seulement pendant trois à quatre heures environ après la traite. La FAO conseille de le refroidir à 4 °C dans ce délai pour garder sa qualité. Sans tank à lait, placez le bidon en métal couvert dans de l'eau fraîche et propre, courante ou stockée, à l'ombre, et portez vite le lait au tank du centre de collecte. Ne laissez jamais le lait au soleil.",
            "La plupart des petits producteurs vendent à une coopérative laitière, à un centre de collecte, à un transformateur ou à une petite laiterie (par exemple, au Burkina Faso, les minilaiteries achètent le lait aux éleveurs et aux producteurs). À la livraison, l'acheteur contrôle votre lait. Les contrôles courants sont : l'aspect et l'odeur ; le test à l'alcool et le test d'ébullition, qui montrent un lait en train de tourner ; le lactodensimètre, qui montre un lait mouillé (avec de l'eau ajoutée) ; et, chez certains transformateurs, un test des résidus de médicaments. Le lait qui échoue est refusé ou moins payé.",
            "N'ajoutez jamais d'eau, de farine, de conservateur ni rien d'autre au lait : c'est de la tricherie, c'est souvent illégal, et les contrôles le détectent. Demandez à votre acheteur comment il paie (au litre, parfois avec une prime pour la qualité ou la matière grasse), quand il paie (souvent chaque mois, par la banque ou par mobile money), et quelles retenues il fait. Lisez entièrement tout contrat avant de le signer. Vendre du lait cru au public peut demander un permis : au Kenya, le Kenya Dairy Board (l'office laitier du Kenya) délivre des licences à ceux qui manipulent le lait ; vérifiez ses règles ou celles de l'autorité laitière de votre pays."
          ],
          steps: ["Filtrez et couvrez le lait juste après la traite.", "Refroidissez-le tout de suite : tank à lait, ou bidon posé dans l'eau fraîche à l'ombre.", "Livrez au centre de collecte ou à l'acheteur dans le délai qu'il fixe.", "Regardez les contrôles et demandez les résultats.", "Notez les litres livrés, tout refus et sa raison.", "Comparez chaque paiement à vos registres de livraison."],
          words: [["Lactodensimètre", "un flotteur qui mesure si le lait est lourd (dense) ; l'eau ajoutée rend le lait plus léger."], ["Test à l'alcool", "mélanger le lait avec de l'alcool ; un lait qui commence à tourner fait des grumeaux."], ["Centre de collecte", "un lieu où les producteurs livrent le lait pour qu'il soit contrôlé, refroidi et envoyé à un transformateur."]],
          slides: [
            { title: "Refroidir vite", bullets: ["Les défenses naturelles durent environ 3 à 4 heures", "FAO : refroidir à 4 °C dans ce délai", "Sans tank : bidon dans l'eau fraîche, à l'ombre"] },
            { title: "Les contrôles de l'acheteur", bullets: ["Aspect et odeur", "Alcool et ébullition : lait qui tourne", "Lactodensimètre : eau ajoutée ; certains cherchent les médicaments"] },
            { title: "N'ajoutez jamais rien", bullets: ["Ni eau, ni farine, ni conservateur", "Tricherie, souvent illégale, et les contrôles la détectent"] },
            { title: "Être payé", bullets: ["Au litre ; demandez les primes de qualité", "Quand et comment ils paient ; les retenues", "Lisez les contrats ; vérifiez les permis (Kenya : KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Allez voir ou appelez le centre de collecte, la coopérative ou l'acheteur le plus proche. Demandez : quels contrôles ils font, l'heure limite pour recevoir le lait, comment et quand ils paient, et quelles retenues ils font. Notez les réponses et comparez-les avec votre façon actuelle de manipuler le lait.",
          youCanNow: "refroidir et manipuler le lait pour garder sa qualité, expliquer les contrôles de l'acheteur et vérifier comment vous êtes payé.",
          quickCheck: [
            { objective: "O4", q: "Vous n'avez pas de tank à lait. Que faire de mieux après la traite ?", options: ["Placer le bidon en métal couvert dans de l'eau fraîche à l'ombre et livrer vite", "Laisser le lait au soleil pour qu'il reste chaud", "Ajouter un peu d'eau pour le garder frais", "Le garder jusqu'à demain et livrer les deux traites ensemble"], answer: 0, why: "Refroidir vite et livrer vite empêchent les microbes de se multiplier." },
            { objective: "O4", q: "Que détecte le lactodensimètre au centre de collecte ?", options: ["La mammite dans un quartier", "Un lait avec de l'eau ajoutée", "La race de la vache", "Un lait trop froid"], answer: 1, why: "L'eau ajoutée rend le lait moins dense, et le lactodensimètre le montre." }
          ]
        },
        {
          title: "Élevage des veaux, registres et coût par litre",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer votre coût par litre et tenir les registres qui permettent de le calculer.",
          text: [
            "Vos veaux et vos chevreaux sont votre futur troupeau. Assurez-vous que le nouveau-né boive le colostrum, le premier lait épais, le plus tôt possible après la naissance, si possible dans les toutes premières heures, car il apporte la protection de la mère contre les maladies. Gardez les veaux dans un enclos propre, sec et séparé, donnez-leur de l'eau propre, proposez tôt du bon foin ou un fourrage tendre et un aliment pour veaux pour que l'estomac se développe, et sevrez-les quand votre agent de vulgarisation ou votre vétérinaire dit que le veau mange assez d'aliment solide. Suivez le plan de votre vétérinaire pour les soins du nombril, le déparasitage et la vaccination.",
            "Tenez des registres simples chaque jour : litres par animal et par traite, aliment acheté et son coût, signes de chaleur et dates d'IA ou de saillie, dates de vêlage, traitements avec la date où le lait peut de nouveau être vendu, lait livré, refus et paiements. Un cahier suffit ; un tableur sur téléphone facilite les calculs.",
            "Coût par litre = toutes les dépenses du mois divisées par les litres produits. Exemple (les chiffres sont seulement un exemple) : 3 vaches au Kenya produisent 1 050 litres en un mois. Dépenses : aliments et fourrage 27 000 KES, main-d'œuvre 9 000 KES, vétérinaire et IA 3 000 KES, autres 3 000 KES ; total 42 000 KES. Coût par litre = 42 000 / 1 050 = 40 KES. Si votre acheteur paie moins que votre coût par litre, vous perdez de l'argent sur chaque litre ; regardez d'abord le gaspillage d'aliment, les pertes dues à la mammite et le lait refusé."
          ],
          steps: ["Donnez le colostrum le plus tôt possible après la naissance.", "Gardez le veau dans un enclos propre et sec avec eau, foin et aliment pour veaux.", "Notez les litres, l'aliment, la reproduction, les vêlages, les traitements, les livraisons et les paiements.", "En fin de mois, additionnez toutes les dépenses.", "Divisez le total des dépenses par les litres produits : c'est votre coût par litre.", "Comparez-le au prix payé et choisissez un changement pour baisser le coût."],
          words: [["Colostrum", "le premier lait épais et jaune après la mise bas ; il protège le nouveau-né contre les maladies."], ["Sevrage", "faire passer un jeune animal du lait à l'aliment solide."], ["Coût par litre", "toutes vos dépenses laitières sur une période, divisées par les litres produits."]],
          slides: [
            { title: "Les veaux, votre futur troupeau", bullets: ["Colostrum le plus tôt possible après la naissance", "Enclos propre et sec ; eau, foin, aliment pour veaux tôt", "Plan du vétérinaire : nombril, vers, vaccins"] },
            { title: "Registres quotidiens", bullets: ["Litres par animal ; aliment et son coût", "Chaleurs, IA, vêlages, traitements", "Livraisons, refus, paiements"] },
            { title: "Coût par litre", bullets: ["Toutes les dépenses du mois / litres produits", "Exemple : 42 000 KES / 1 050 L = 40 KES par litre", "Les chiffres sont des exemples : utilisez les vôtres"] },
            { title: "Si ça ne paie pas", bullets: ["Prix sous le coût : vous perdez sur chaque litre", "Vérifiez gaspillage d'aliment, mammite, lait refusé", "Choisissez un changement et suivez-le"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Tâche finale : écrivez votre routine d'hygiène de la traite à afficher dans le lieu de traite, puis remplissez une fiche de coût par litre pour le mois dernier (ou pour un mois d'exemple) : chaque dépense, les litres produits, le coût par litre, le prix de votre acheteur et un changement que vous ferez.",
          youCanNow: "élever des veaux en bonne santé, tenir les registres laitiers et calculer le coût de chaque litre de lait.",
          quickCheck: [
            { objective: "O5", q: "Quand un veau nouveau-né doit-il boire le colostrum ?", options: ["Après une semaine", "Seulement s'il a l'air faible", "Le plus tôt possible après la naissance, si possible dans les premières heures", "Jamais ; seulement de l'eau"], answer: 2, why: "Le colostrum apporte la protection de la mère, et le veau l'absorbe le mieux dans les premières heures." },
            { objective: "O5", q: "Les dépenses du mois sont de 36 000 KES et les vaches ont produit 900 litres. Quel est le coût par litre ?", options: ["25 KES", "32 KES", "36 KES", "40 KES"], answer: 3, why: "36 000 divisé par 900 donne 40." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mamelles saines, lait sûr et bénéfice",
        questions: [
          { objective: "O3", q: "Lequel est un signe de mammite clinique ?", options: ["Un quartier chaud et gonflé et des grumeaux dans le lait", "Un poil brillant", "La rumination", "Un bon appétit"], answer: 0, why: "Chaleur, gonflement, douleur et lait anormal sont des signes de mammite clinique." },
          { objective: "O3", q: "Un CMT montre une réaction dans un quartier. Que faites-vous ?", options: ["Donner un antibiotique que vous avez à la maison", "Le noter et appeler votre vétérinaire ; suivre son avis et l'étiquette", "L'ignorer ; le lait a l'air bon", "Vendre la vache aujourd'hui"], answer: 1, why: "Le vétérinaire décide du traitement ; soigner seul sans avis risque des résidus et des résistances." },
          { objective: "O4", q: "Selon la FAO, dans quel délai faut-il refroidir le lait à environ 4 °C ?", options: ["Dans la semaine", "Pour le lendemain", "Dans les trois à quatre heures environ après la traite", "Seulement quand il fait chaud"], answer: 2, why: "Les défenses naturelles du lait ne freinent les microbes que pendant trois à quatre heures environ." },
          { objective: "O4", q: "Le centre de collecte fait un test à l'alcool. Que montre-t-il ?", options: ["De l'eau ajoutée", "La matière grasse", "La race de la vache", "Un lait qui commence à tourner"], answer: 3, why: "Un lait qui commence à tourner fait des grumeaux quand on le mélange à l'alcool." },
          { objective: "O5", q: "Votre coût par litre est de 45 KES et l'acheteur paie 40 KES. Qu'est-ce que cela veut dire ?", options: ["Vous perdez environ 5 KES sur chaque litre", "Vous gagnez 5 KES par litre", "Vous êtes à l'équilibre", "Rien ; les prix ne comptent pas"], answer: 0, why: "Quand le coût par litre dépasse le prix, chaque litre fait perdre de l'argent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Élevage laitier : production et hygiène du lait",
    questions: [
      { objective: "O1", q: "Avant d'acheter des vaches laitières, la première chose à vérifier est :", options: ["La couleur des vaches", "Si vous avez du fourrage et de l'eau toute l'année, saison sèche comprise", "La race la plus célèbre", "Le nombre de vaches de votre voisin"], answer: 1, why: "L'aliment et l'eau décident de la quantité de lait que peut donner une vache." },
      { objective: "O1", q: "Pourquoi un producteur pourrait-il choisir des chèvres laitières plutôt que des vaches ?", options: ["Les chèvres n'ont pas besoin d'eau", "Les chèvres ne tombent jamais malades", "Les chèvres mangent moins et conviennent aux petites parcelles et aux petits budgets", "Le lait de chèvre n'a pas besoin d'hygiène"], answer: 2, why: "Les chèvres demandent moins d'aliment, de place et d'argent, ce qui convient à beaucoup de petits producteurs." },
      { objective: "O1", q: "En zéro pâturage, pourquoi faut-il enlever la bouse chaque jour ?", options: ["Une litière sale est une cause majeure de mammite", "Pour la vendre chaque jour", "Les vaches n'aiment pas l'odeur", "Ce n'est pas nécessaire"], answer: 0, why: "Les mamelles reposent sur la litière ; la saleté y propage les microbes de la mammite." },
      { objective: "O1", q: "Quel élément aide à garder une stalle en zéro pâturage au sec ?", options: ["Un sol plat sans évacuation", "Pas de toit", "De la paille mouillée", "Un sol en pente vers une évacuation"], answer: 3, why: "Un sol en pente évacue l'urine et l'eau." },
      { objective: "O2", q: "Quelle est la première étape d'une routine de traite propre ?", options: ["Commencer à traire tout de suite", "Trayeur en vêtements propres, ongles courts, mains lavées au savon", "Verser le lait dans un bidon en plastique", "Nourrir le veau"], answer: 1, why: "Des mains et des vêtements propres empêchent dès le départ les microbes d'entrer dans le lait." },
      { objective: "O2", q: "Pourquoi traire avec toute la main plutôt qu'en tirant avec les doigts ?", options: ["C'est plus rapide à apprendre", "On utilise moins de lait", "C'est plus doux pour le trayon et cela aide à vider tout le lait", "Les doigts sont plus sales"], answer: 2, why: "La traite à pleine main évite de blesser le trayon et vide la mamelle." },
      { objective: "O2", q: "Après la traite, que faut-il faire d'abord avec le lait ?", options: ["Le filtrer, le couvrir et commencer à le refroidir tout de suite", "Le laisser ouvert pour qu'il refroidisse dans l'étable", "Y ajouter de l'eau pour en avoir plus", "Le mélanger au lait d'hier"], answer: 0, why: "Filtrer, couvrir et refroidir vite gardent la saleté et les microbes dehors." },
      { objective: "O2", q: "Pourquoi donner à manger à une vache juste après la traite ?", options: ["Pour qu'elle dorme", "Pour augmenter la matière grasse", "Pour qu'elle reste debout pendant que le trayon se ferme", "Cela ne sert à rien"], answer: 2, why: "Rester debout pendant que le canal du trayon se ferme empêche la saleté de la litière d'y entrer." },
      { objective: "O3", q: "La mammite subclinique est :", options: ["Une mammite avec un quartier gonflé et chaud", "Une maladie des chèvres seulement", "Un problème d'alimentation", "Une mammite sans signe visible, trouvée par un test"], answer: 3, why: "Seul un test comme le CMT révèle la mammite subclinique." },
      { objective: "O3", q: "Dans un CMT, comment lit-on le résultat ?", options: ["Attendre une heure, puis sentir", "Faire tourner et lire en quelques secondes : liquide = normal, gel = réaction", "Le goûter", "Le faire bouillir d'abord"], answer: 1, why: "La réaction se lit en quelques secondes ; un gel signifie un nombre élevé de cellules." },
      { objective: "O3", q: "Quand NE faut-il PAS se fier à un CMT chez une vache ?", options: ["Dans les premiers jours après le vêlage", "Le matin", "Quand elle est calme", "Après le repas"], answer: 0, why: "Le nombre de cellules est naturellement élevé juste après le vêlage, donc les résultats trompent." },
      { objective: "O3", q: "Qui décide comment traiter la mammite ?", options: ["Le voisin", "L'acheteur de lait", "Votre vétérinaire, en suivant l'étiquette du produit", "Une vidéo en ligne"], answer: 2, why: "Le traitement et le temps d'attente avant de vendre le lait viennent du vétérinaire et de l'étiquette." },
      { objective: "O4", q: "Avec quel récipient le lait risque-t-il le plus d'être refusé ?", options: ["Un bidon en aluminium propre", "Un bidon en inox", "Un bidon en métal propre", "Un bidon en plastique rayé"], answer: 3, why: "Les rayures du plastique retiennent la saleté et les microbes, et beaucoup d'acheteurs refusent ce lait." },
      { objective: "O4", q: "Un commerçant vous propose d'ajouter un peu d'eau dans chaque bidon. Vous :", options: ["Refusez : c'est de la tricherie, souvent illégale, et le lactodensimètre la détecte", "Acceptez si les prix sont bas", "Ajoutez de la farine à la place", "Ajoutez de l'eau seulement en saison sèche"], answer: 0, why: "Ajouter quoi que ce soit au lait est de la tricherie et les contrôles de l'acheteur la détectent." },
      { objective: "O4", q: "Le test d'ébullition sert à repérer :", options: ["L'eau ajoutée", "Un lait aigre ou anormal", "L'âge de l'animal", "La matière grasse"], answer: 1, why: "Un lait aigre ou anormal caille quand on le fait bouillir." },
      { objective: "O4", q: "Au Kenya, quel organisme délivre les licences à ceux qui manipulent le lait ?", options: ["Le Kenya Wildlife Service", "Le service des eaux du comté", "Le Kenya Dairy Board", "Le Pest Control Products Board"], answer: 2, why: "Le Kenya Dairy Board régule la filière laitière et délivre les permis à ceux qui manipulent le lait." },
      { objective: "O5", q: "Le coût par litre, c'est :", options: ["Le prix payé par l'acheteur", "Le coût de l'aliment seulement", "Les litres divisés par le nombre de vaches", "Toutes les dépenses de la période divisées par les litres produits"], answer: 3, why: "Il comprend toutes les dépenses, pas seulement l'aliment." },
      { objective: "O5", q: "Les dépenses du mois sont de 50 000 KES et vous avez produit 1 250 litres. Coût par litre ?", options: ["25 KES", "40 KES", "50 KES", "62 KES"], answer: 1, why: "50 000 divisé par 1 250 donne 40." },
      { objective: "O5", q: "Quel registre faut-il pour savoir quand le lait d'une vache traitée peut de nouveau être vendu ?", options: ["La date du traitement et le délai d'attente donné par l'étiquette ou le vétérinaire", "Sa couleur", "La météo", "Le prix de l'aliment"], answer: 0, why: "Noter le traitement et son délai d'attente empêche les résidus de médicaments d'arriver chez les acheteurs." },
      { objective: "O5", q: "Votre coût par litre est plus élevé que le prix. Un bon premier endroit où regarder :", options: ["Acheter plus de vaches d'un coup", "Vendre du lait sans contrôle", "Le gaspillage d'aliment, les pertes dues à la mammite et le lait refusé", "Arrêter tous les registres"], answer: 2, why: "L'aliment est en général la plus grosse dépense, et la mammite et les refus gaspillent un lait que vous avez payé pour produire." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Animaux et étable", objective: "O1", notYet: "Aucun lien entre les animaux, l'étable et le fourrage dont dispose l'exploitation.", meets: "La routine correspond aux animaux et à l'étable de l'exploitation : un lieu de traite propre, une litière sèche et le fumier tenu à l'écart.", exceeds: "Note une amélioration de l'étable avec une date, comme une meilleure évacuation ou un lieu de traite séparé." },
      { name: "Routine de traite", objective: "O2", notYet: "Des étapes manquent ou sont dans le désordre, par exemple pas de lavage des mains ou pas de séchage des trayons.", meets: "Toutes les étapes, du trayeur et des ustensiles jusqu'à la filtration, la couverture et le refroidissement, dans l'ordre.", exceeds: "Indique qui fait chaque étape et comment la routine est vérifiée chaque semaine." },
      { name: "Contrôle de la mammite", objective: "O3", notYet: "Pas de signes de mammite ni de CMT dans la routine, ou un traitement maison sans le vétérinaire.", meets: "Liste les signes, quand un CMT est fait, comment les résultats sont notés, et l'appel au vétérinaire pour les positifs ; le lait des animaux traités est mis à part jusqu'à ce que l'étiquette ou le vétérinaire l'autorise.", exceeds: "Contient un tableau simple de suivi du CMT par animal et par quartier." },
      { name: "Refroidissement et livraison", objective: "O4", notYet: "Le lait reste chaud ou est livré en retard ; des récipients en plastique sont utilisés.", meets: "Le lait est refroidi tout de suite et livré dans le délai de l'acheteur, dans des récipients en métal, sans rien ajouter.", exceeds: "Note les heures de livraison, les résultats des contrôles et tout refus avec sa cause." },
      { name: "Coût par litre", objective: "O5", notYet: "Des dépenses manquent ou le calcul est faux.", meets: "Toutes les dépenses listées, coût par litre juste, comparé au prix de l'acheteur.", exceeds: "Cite un changement pour baisser le coût par litre et comment son effet sera mesuré le mois suivant." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Moins de lait refusé au centre de collecte ou chez l'acheteur en 3 mois (registres de livraison)",
      "Apprenants qui font un CMT sur leurs animaux au moins une fois par mois (enquête de suivi)",
      "Apprenants qui connaissent et suivent leur coût par litre après 30 jours (enquête de suivi)",
      "Évolution du lait moyen livré par animal sur 3 mois, quand les registres le permettent"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou un téléphone avec un tableur ou une application de notes",
      "Une calculatrice (celle du téléphone suffit)",
      "L'accès à un animal en lactation pour les exercices, ou à une ferme de démonstration",
      "Un plateau CMT et du réactif, empruntés à une coopérative, à un vétérinaire ou au service de vulgarisation si besoin",
      "Environ 75 minutes au total, en courtes séances, plus de la pratique aux heures de traite"
    ],
    facilitatorNotes: [
      "Faites la routine de traite et le CMT en démonstration réelle chez un membre ou dans une coopérative ; laissez chaque apprenant faire le CMT lui-même.",
      "Invitez le centre de collecte ou la coopérative de la zone à montrer ses contrôles du lait (alcool, ébullition, lactodensimètre).",
      "Ne donnez jamais de doses de médicaments, de vaccins ou d'hormones ni de délais d'attente ; renvoyez les apprenants à leur vétérinaire et à l'étiquette du produit.",
      "Demandez aux apprenants d'apporter les reçus d'aliment et les bons de livraison de lait du mois dernier pour la tâche du coût par litre ; utilisez des chiffres d'exemple pour ceux qui n'ont pas de registres.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois.",
      "Associez ce cours à \"Alimentation du bétail et formulation des rations avec des ingrédients locaux\" pour les apprenants dont le coût par litre est élevé à cause de l'aliment."
    ]
  }
};
