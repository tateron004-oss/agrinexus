"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-crop-horticulture.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const FAO_IPM = { name: "FAO : Lutte intégrée contre les ravageurs", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO : application mobile pour la lutte contre la chenille légionnaire d'automne en Afrique (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe : la technique push-pull stoppe la chenille légionnaire d'automne", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agence nationale de contrôle des aliments et des médicaments (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO : Guide de référence sur l'agriculture intelligente face au climat (gestion du sol et de l'eau)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-fr",
  lang: "fr",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Production végétale et horticole durable",
  skills: "Vérifier et améliorer la santé du sol, Semer avec de bonnes semences au bon écartement et au bon moment, Nourrir les cultures avec du fumier, du compost et de l'engrais, Surveiller les champs et pratiquer la lutte intégrée, Utiliser les pesticides de façon sûre et légale, Irriguer les légumes et manipuler la récolte",
  outcome: "planifier et conduire une saison pour une grande culture et une parcelle de légumes : préparer et nourrir le sol, bien semer, surveiller et gérer les ravageurs par la lutte intégrée, arroser efficacement, et récolter et manipuler la production pour qu'elle garde sa valeur.",
  about: [
    "Ce cours s'adresse aux petits exploitants, aux jeunes qui débutent en horticulture, aux groupements de femmes et de jeunes, et aux agents de vulgarisation au Kenya, au Nigeria et partout en Afrique. Les exemples sont le maïs, les haricots, le manioc et le sorgho au champ, et les tomates, le chou frisé (sukuma wiki) et les oignons dans la parcelle de légumes.",
    "Le chapitre 1 porte sur la réussite d'une culture vigoureuse : comprendre et analyser votre sol, semer de bonnes semences au bon écartement et au bon moment, et nourrir la culture avec un mélange de fumier, de compost et d'engrais. Le chapitre 2 porte sur la protection et la fin de la culture : surveillance et lutte intégrée, usage sûr et légal des pesticides, arrosage efficace des légumes, et récolte et manipulation après récolte.",
    "Les cultures, les sols et les ravageurs varient selon les zones. Utilisez ce cours avec votre agent de vulgarisation, un institut de recherche (comme le KALRO au Kenya, ou le programme de développement agricole de votre État au Nigeria ; ailleurs, l'institut national de recherche agricole de votre pays) et votre vendeur d'intrants agricoles. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan de production pour la saison pour une grande culture (par exemple un demi-acre de maïs et de haricots) et une parcelle de légumes (par exemple un huitième d'acre de tomates ou de chou frisé) : vérifications du sol et analyse éventuelle, comment vous préparerez et nourrirez le sol, semences et écartement, dates de semis, une routine de surveillance hebdomadaire avec les principaux ravageurs et maladies à surveiller et vos étapes de lutte intégrée, un plan d'arrosage pour les légumes, et comment vous récolterez, trierez, stockerez et vendrez.",
  chapters: [
    {
      name: "Chapitre 1 : Réussir une culture vigoureuse",
      lessons: [
        {
          title: "Connaître votre sol",
          minutes: 5,
          goal: "Vérifier la santé de votre sol au champ et savoir quand et comment faire une analyse de sol.",
          text: [
            "Un sol en bonne santé est sombre, grumeleux, sent la terre, contient des vers de terre et des racines qui descendent profond, et absorbe la pluie au lieu de la laisser ruisseler. Un sol pauvre est dur, pâle, forme une croûte après la pluie ou reste gorgé d'eau. Faites une vérification simple au champ : creusez un trou de la profondeur d'une bêche, regardez la couleur et les couches, pressez une poignée de terre, comptez les vers, et observez où l'eau ruisselle ou stagne après la pluie.",
            "Une analyse de sol vous dit ce que vos yeux ne voient pas : l'acidité (pH) et les principaux nutriments. Beaucoup de sols des zones pluvieuses du Kenya et du Nigeria sont acides, ce qui bloque les nutriments ; un chaulage peut être conseillé. Demandez à votre agent de vulgarisation, à un institut de recherche ou à votre vendeur d'intrants où faire analyser le sol et comment bien prélever : beaucoup de petits échantillons pris sur toute la parcelle, mélangés, pas sur un tas de fumier ou un endroit brûlé.",
            "Améliorez la santé du sol à chaque saison : ajoutez de la matière organique (fumier, compost, résidus de culture), gardez le sol couvert, faites des rotations, et évitez le brûlis et les labours inutiles."
          ],
          steps: ["Creusez un trou de la profondeur d'une bêche et regardez la couleur, les couches et les racines.", "Pressez une poignée de terre ; comptez les vers de terre.", "Observez où l'eau ruisselle ou stagne.", "Demandez à la vulgarisation ou à un vendeur d'intrants où faire une analyse de sol.", "Prenez beaucoup de petits échantillons sur la parcelle et mélangez-les."],
          words: [["Santé du sol", "la capacité du sol à faire pousser des plantes vigoureuses, à retenir l'eau et à abriter la vie."], ["pH", "une mesure de l'acidité ou de l'alcalinité du sol ; beaucoup de cultures préfèrent un sol légèrement acide à neutre."], ["Matière organique", "les restes décomposés de plantes et d'animaux dans le sol, comme le fumier et le compost."], ["Chaulage", "l'apport de chaux pour réduire l'acidité du sol."]],
          slides: [
            { title: "Un sol en bonne santé", bullets: ["Sombre, grumeleux, odeur de terre", "Vers de terre, racines profondes", "Absorbe la pluie"] },
            { title: "Vérification au champ", bullets: ["Trou d'une bêche : couleur, couches, racines", "Pressez, comptez les vers", "Où l'eau ruisselle ou stagne"] },
            { title: "Analyse de sol", bullets: ["Montre le pH et les nutriments", "Les sols acides peuvent demander de la chaux", "Beaucoup de petits échantillons mélangés"] },
            { title: "Améliorez-le chaque saison", bullets: ["Fumier, compost, résidus", "Sol couvert, rotations", "Pas de brûlis"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Faites la vérification au champ sur une parcelle : creusez, regardez, pressez, comptez les vers, et notez ce que vous avez trouvé. Puis renseignez-vous sur l'endroit où faire une analyse de sol près de chez vous et son coût.",
          youCanNow: "vérifier la santé de votre sol au champ et savoir prélever un échantillon pour une analyse."
        },
        {
          title: "Bien semer : semences, écartement et calendrier",
          minutes: 5,
          goal: "Semer une grande culture et élever des plants de légumes avec de bonnes semences, un bon écartement et au bon moment.",
          text: [
            "Une bonne semence est le moyen le moins cher d'augmenter le rendement. Achetez des semences certifiées d'une variété adaptée à votre zone chez un vendeur agréé, et vérifiez la date et le scellé du paquet. Pour le manioc, utilisez des boutures saines prises sur des plants sains, car les maladies virales se propagent par les boutures infectées.",
            "L'écartement décide combien de plants partagent la lumière, l'eau et les nutriments. Utilisez l'écartement conseillé pour votre variété et votre zone, par exemple les distances entre lignes et entre plants pour le maïs, et un écartement plus large dans les zones plus sèches. Les manques comme l'entassement font perdre du rendement. Semez sans tarder une fois que les pluies sont vraiment installées et que le sol est humide en profondeur.",
            "Les légumes comme les tomates, le chou frisé et les oignons sont en général d'abord élevés en pépinière : une planche surélevée et bien drainée ou des plateaux de semis, avec une terre saine, de l'ombre au début, un arrosage soigneux et une protection contre les ravageurs. Endurcissez les plants en leur donnant peu à peu plus de soleil et moins d'eau avant de les repiquer, de préférence dans la fraîcheur du soir."
          ],
          steps: ["Achetez des semences certifiées (ou des boutures saines) d'une variété adaptée.", "Utilisez l'écartement conseillé pour votre variété et votre zone.", "Semez quand les pluies sont vraiment installées et que le sol est humide.", "Élevez les plants de légumes dans une pépinière propre et bien drainée.", "Endurcissez les plants, puis repiquez dans la fraîcheur du soir."],
          words: [["Semence certifiée", "une semence contrôlée par l'autorité officielle des semences pour sa qualité et sa variété."], ["Écartement", "la distance entre les lignes et entre les plants."], ["Pépinière", "une petite zone protégée où l'on élève des plants avant de les repiquer."], ["Endurcissement", "le fait d'habituer peu à peu les plants aux conditions du champ avant le repiquage."]],
          slides: [
            { title: "De bonnes semences", bullets: ["Certifiées, adaptées à votre zone", "Vendeur agréé ; vérifiez date et scellé", "Manioc : boutures saines de plants sains"] },
            { title: "Écartement et calendrier", bullets: ["L'écartement conseillé pour votre variété", "Manques et entassement font perdre du rendement", "Semez quand les pluies sont vraiment installées"] },
            { title: "Pépinière de légumes", bullets: ["Surélevée, bien drainée, terre saine", "Ombre au début, arrosage soigneux", "Endurcissez, puis repiquez le soir"] }
          ],
          sources: [KALRO],
          tryIt: "Pour votre grande culture principale et un légume, écrivez : la variété, où vous achèterez des semences certifiées, l'écartement conseillé (demandez à un vendeur d'intrants ou à un agent de vulgarisation), et votre date prévue de semis ou de repiquage.",
          youCanNow: "semer une grande culture et élever des plants de légumes avec de bonnes semences, un bon écartement et au bon moment."
        },
        {
          title: "Nourrir la culture : fumier, compost et engrais",
          minutes: 6,
          goal: "Planifier comment nourrir une culture avec des éléments organiques et minéraux, bien placés et au bon moment.",
          text: [
            "Les cultures ont besoin d'azote (N), de phosphore (P) et de potassium (K), plus de petites quantités d'autres nutriments. Le fumier et le compost apportent des nutriments et, tout aussi important, de la matière organique qui retient l'eau et nourrit la vie du sol. Les légumineuses comme le haricot, le niébé et l'arachide ajoutent de l'azote au sol grâce à leurs racines.",
            "Les engrais minéraux donnent des nutriments rapidement et en quantités connues. Un schéma courant pour le maïs est un engrais de fond riche en phosphore au semis, puis un engrais azoté de couverture quand le maïs arrive au genou, mais les bons produits et les bonnes doses dépendent de votre analyse de sol et des recommandations locales. Placer de petites quantités près du plant (dans le trou de semis) valorise mieux l'engrais que l'épandre à la volée.",
            "Combinez les deux : la matière organique plus un engrais bien placé donne en général des rendements meilleurs et plus réguliers que l'un ou l'autre seul. Faites du compost avec des résidus de culture, du fumier et des déchets de cuisine, retourné et gardé humide. Ne mettez jamais de fumier frais et chaud ni d'engrais directement sur la semence."
          ],
          steps: ["Ajoutez du fumier ou du compost avant ou au semis.", "Incluez des légumineuses en rotation ou en association.", "Utilisez les produits et doses d'engrais issus de votre analyse de sol et des recommandations locales.", "Placez l'engrais près du plant, sans toucher la semence.", "Apportez l'azote de couverture au bon stade, quand le sol est humide."],
          words: [["N, P, K", "l'azote, le phosphore et le potassium : les principaux nutriments des plantes."], ["Engrais de couverture", "un engrais, en général azoté, apporté à une culture en croissance."], ["Compost", "des déchets végétaux et animaux décomposés, utilisés pour nourrir le sol."]],
          slides: [
            { title: "Ce dont les cultures ont besoin", bullets: ["Azote, phosphore, potassium", "Plus de petits nutriments", "Les légumineuses ajoutent de l'azote"] },
            { title: "La matière organique", bullets: ["Fumier et compost", "Retient l'eau, nourrit la vie du sol"] },
            { title: "Un engrais bien utilisé", bullets: ["Produits et doses selon l'analyse et les conseils locaux", "Près du plant, pas sur la semence", "Azote de couverture au bon stade"] },
            { title: "Combinez les deux", bullets: ["Organique + minéral = rendements plus réguliers", "Compost de résidus et de fumier"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Écrivez un plan de fertilisation pour votre grande culture : la matière organique que vous ajouterez et quand, une éventuelle légumineuse, et les produits d'engrais et leur calendrier (notez « dose selon l'analyse ou la vulgarisation » si vous ne la connaissez pas encore). Commencez un tas de compost si vous n'en avez pas.",
          youCanNow: "planifier comment nourrir une culture avec du fumier, du compost et de l'engrais bien placé."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Réussir une culture vigoureuse",
        questions: [
          { q: "Lequel est un signe de sol en bonne santé ?", options: ["Dur et pâle, il forme une croûte après la pluie", "Sombre, grumeleux, avec des vers de terre", "L'eau ruisselle toujours", "Il sent les produits chimiques"], answer: 1, why: "Un sol sain est grumeleux, sombre et plein de vie." },
          { q: "Comment prélever un échantillon de sol ?", options: ["Une cuillère sur un tas de fumier", "Sur un endroit brûlé", "Beaucoup de petits échantillons sur la parcelle, mélangés", "Sur la route"], answer: 2, why: "Un échantillon mélangé représente toute la parcelle." },
          { q: "Pourquoi utiliser des boutures de manioc saines ?", options: ["Les maladies virales se propagent par les boutures infectées", "Elles sont moins chères", "Elles poussent plus vite dans tous les sols", "Les acheteurs les demandent"], answer: 0, why: "Un matériel de plantation sain empêche la propagation des maladies." },
          { q: "Qu'est-ce que l'endurcissement des plants ?", options: ["Arroser davantage", "Ajouter de l'engrais", "Planter dans un sol dur", "Donner peu à peu plus de soleil et moins d'eau avant le repiquage"], answer: 3, why: "Cela prépare les plants aux conditions du champ." },
          { q: "D'où viennent les bonnes doses d'engrais ?", options: ["De la supposition d'un voisin", "De votre analyse de sol et des recommandations locales", "De la couleur du sac", "En mettre le plus possible"], answer: 1, why: "Le sol et la zone décident de ce dont la culture a besoin." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Protéger et terminer la culture",
      lessons: [
        {
          title: "Surveillance des champs et lutte intégrée",
          minutes: 6,
          goal: "Surveiller une culture chaque semaine et choisir des actions de lutte intégrée avant de recourir aux produits chimiques.",
          text: [
            "La FAO décrit la lutte intégrée contre les ravageurs (IPM) comme le fait de considérer toutes les méthodes de lutte disponibles et de combiner les bonnes, en limitant les pesticides à ce qui est justifié. Elle commence par la prévention : sol sain, variétés résistantes, semences saines, rotation, semis au bon moment, hygiène du champ (retirer les plants et résidus infectés) et encourager les ennemis naturels comme les coccinelles et les guêpes parasitoïdes.",
            "Surveillez chaque semaine. Parcourez le champ en W ou en zigzag, examinez un nombre fixe de plants (par exemple 10 plants à 5 endroits), et notez ce que vous voyez : dégâts de chenille légionnaire d'automne dans le cornet du maïs, pucerons, mouches blanches, taches sur les feuilles, flétrissement, mineuse de la tomate. Comparez avec le niveau à partir duquel la vulgarisation conseille d'agir.",
            "Utilisez d'abord les moyens non chimiques quand ils marchent : ramassage à la main, push-pull pour le maïs et le sorgho, pièges, produits à base de neem ou biologiques autorisés, et arrachage des plants infectés. Les observations de chenille légionnaire d'automne peuvent être enregistrées avec l'application FAMEWS de la FAO là où elle est utilisée. Demandez un diagnostic à un agent de vulgarisation ou à une clinique des plantes en cas de doute."
          ],
          steps: ["Prévenez : variétés résistantes, semences saines, rotation, hygiène du champ.", "Surveillez chaque semaine en W ; examinez un nombre fixe de plants.", "Notez les ravageurs, les maladies et les dégâts.", "Comparez avec les seuils d'intervention de la vulgarisation.", "Utilisez d'abord les moyens non chimiques ; demandez un diagnostic en cas de doute."],
          words: [["Lutte intégrée (IPM)", "combiner la prévention, la surveillance et de nombreuses méthodes de lutte, avec les pesticides seulement quand c'est justifié."], ["Surveillance", "parcourir le champ régulièrement pour repérer les ravageurs et les maladies."], ["Ennemis naturels", "des insectes et d'autres êtres vivants qui mangent ou attaquent les ravageurs."], ["Seuil d'intervention", "la quantité de ravageurs ou de dégâts à partir de laquelle la lutte vaut son coût."]],
          slides: [
            { title: "Lutte intégrée (FAO)", bullets: ["Considérer toutes les méthodes, combiner les bonnes", "Pesticides seulement si c'est justifié"] },
            { title: "D'abord prévenir", bullets: ["Variétés résistantes, semences saines, rotation", "Hygiène du champ", "Encourager les ennemis naturels"] },
            { title: "Surveiller chaque semaine", bullets: ["Parcours en W, nombre fixe de plants", "Notez ce que vous voyez", "Comparez aux seuils d'intervention"] },
            { title: "Lutter avec sagesse", bullets: ["Ramassage à la main, push-pull, pièges", "Produits biologiques autorisés", "Diagnostic en cas de doute"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Faites une fiche de surveillance hebdomadaire (date, endroit, plants examinés, ravageurs, maladies, dégâts, action) et surveillez un champ ou une planche de légumes cette semaine.",
          youCanNow: "surveiller une culture chaque semaine et choisir des actions de lutte intégrée en commençant par la prévention et les moyens non chimiques."
        },
        {
          title: "Pesticides sûrs et légaux, et arrosage des légumes",
          minutes: 6,
          goal: "Utiliser un pesticide en sécurité quand c'est justifié, et planifier un arrosage efficace pour une parcelle de légumes.",
          text: [
            "Si un pesticide est nécessaire, utilisez seulement des produits homologués pour cette culture et ce ravageur dans votre pays (au Kenya par le Pest Control Products Board ; au Nigeria par la NAFDAC ; dans les pays du Sahel, souvent par le Comité sahélien des pesticides ; ailleurs, par l'autorité nationale), achetés chez un vendeur agréé, jamais reconditionnés dans des bouteilles sans étiquette. Lisez l'étiquette et suivez-la exactement : dose, préparation, vêtements de protection, délai de retour dans le champ et délai avant récolte, c'est-à-dire le nombre de jours entre le traitement et la récolte. Éloignez les enfants et les animaux, ne mangez et ne fumez jamais pendant le traitement, et éliminez les emballages en sécurité, jamais comme récipients pour l'eau ou la nourriture.",
            "Les légumes ont besoin de beaucoup d'eau et sont fragiles. L'irrigation goutte-à-goutte apporte l'eau aux racines, économise l'eau et garde les feuilles sèches, ce qui réduit les maladies des tomates. Les kits goutte-à-goutte bon marché et les arrosoirs conviennent aux petites parcelles. Arrosez tôt le matin ou le soir, et arrosez en profondeur et moins souvent plutôt qu'un peu chaque jour.",
            "Paillez autour des légumes pour garder l'humidité et empêcher la terre d'éclabousser les feuilles. Vérifiez l'humidité du sol avec le doigt à quelques centimètres de profondeur avant d'arroser. Là où l'eau est rare, récupérez l'eau de pluie des toits et utilisez des mares."
          ],
          steps: ["Utilisez seulement des produits homologués pour cette culture et ce ravageur, achetés chez des vendeurs agréés.", "Lisez et suivez l'étiquette : dose, vêtements de protection, délai de retour, délai avant récolte.", "Éliminez les emballages en sécurité.", "Arrosez les légumes aux racines (goutte-à-goutte ou arrosoir), le matin ou le soir.", "Paillez et vérifiez l'humidité du sol avant d'arroser."],
          words: [["Délai avant récolte (DAR)", "le nombre de jours à attendre après un traitement avant de récolter."], ["Pesticide homologué", "un produit approuvé par l'autorité nationale pour un usage précis."], ["Irrigation goutte-à-goutte", "un arrosage par des tuyaux percés de petits trous qui font goutter l'eau aux racines."]],
          slides: [
            { title: "Seulement des produits homologués", bullets: ["Kenya : PCPB. Nigeria : NAFDAC. Sahel : souvent le CSP", "Vendeur agréé, emballage d'origine étiqueté", "Pour cette culture et ce ravageur"] },
            { title: "Suivez l'étiquette", bullets: ["Dose et préparation, vêtements de protection", "Délai de retour dans le champ", "Délai avant récolte"] },
            { title: "Sécurité", bullets: ["Ni enfants ni animaux à proximité", "Ne pas manger ni fumer pendant le traitement", "Ne jamais réutiliser les emballages pour eau ou nourriture"] },
            { title: "Bien arroser les légumes", bullets: ["Goutte-à-goutte ou arrosoir aux racines", "Matin ou soir, en profondeur et moins souvent", "Paillez ; vérifiez d'abord l'humidité"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Prenez une étiquette de pesticide (en magasin, sur internet ou dans votre réserve). Notez : les cultures et ravageurs pour lesquels il est homologué, la dose, les vêtements de protection et le délai avant récolte. Puis écrivez un plan d'arrosage pour votre parcelle de légumes.",
          youCanNow: "utiliser un pesticide de façon sûre et légale quand c'est justifié, et arroser les légumes efficacement."
        },
        {
          title: "Récolte et manipulation après récolte",
          minutes: 5,
          goal: "Récolter au bon moment et manipuler, trier et stocker la production pour qu'elle garde sa valeur.",
          text: [
            "Beaucoup de nourriture est perdue après la récolte. Récoltez à la bonne maturité : les tomates au stade que veut votre acheteur (souvent quand elles commencent à changer de couleur pour les marchés lointains), les feuilles de chou frisé jeunes et tendres, le maïs quand le grain est mûr et assez sec, le manioc quand les racines sont prêtes et seulement la quantité que vous pouvez vendre ou transformer vite, car les racines s'abîment en quelques jours.",
            "Manipulez avec douceur : utilisez des caisses propres, pas des sacs, pour les tomates et les produits fragiles ; gardez la production à l'ombre ; et récoltez dans la fraîcheur du matin. Triez et calibrez par taille et qualité, et retirez les produits abîmés pour qu'ils ne gâtent pas le reste. Respectez le délai avant récolte après tout traitement.",
            "Séchez bien le grain avant de le stocker : le maïs et l'arachide humides peuvent développer des moisissures qui produisent de l'aflatoxine, un poison. Demandez à votre acheteur ou à votre agent de vulgarisation le taux d'humidité visé et mesurez-le si vous pouvez. Stockez le grain dans des greniers propres, secs et surélevés ou dans des sacs de stockage hermétiques pour contrôler les charançons sans produits chimiques."
          ],
          steps: ["Récoltez à la maturité voulue par votre acheteur.", "Récoltez dans la fraîcheur du matin ; gardez la production à l'ombre.", "Utilisez des caisses propres pour les produits fragiles.", "Triez et calibrez ; retirez les produits abîmés.", "Séchez bien le grain ; stockez-le dans des greniers propres, secs et surélevés ou des sacs hermétiques."],
          words: [["Pertes après récolte", "la nourriture perdue ou gâtée entre la récolte et la vente ou l'utilisation."], ["Calibrage", "le tri de la production par taille et qualité."], ["Aflatoxine", "un poison produit par des moisissures sur les grains et les arachides humides."], ["Sac hermétique", "un sac de stockage étanche à l'air qui arrête les insectes en les privant d'air."]],
          slides: [
            { title: "Récoltez au bon moment", bullets: ["Tomates au stade voulu par l'acheteur", "Chou frisé jeune et tendre", "Manioc : seulement ce que vous vendez vite"] },
            { title: "Manipulez avec douceur", bullets: ["Fraîcheur du matin, ombre", "Caisses propres, pas des sacs", "Triez, calibrez, retirez les abîmés"] },
            { title: "Stockez le grain en sécurité", bullets: ["Bien séché : le grain humide risque l'aflatoxine", "Greniers propres, secs, surélevés", "Sacs hermétiques contre les charançons"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Tâche finale : écrivez votre plan de production pour la saison pour une grande culture et une parcelle de légumes : vérifications et analyse du sol, préparation et fertilisation du sol, semences et écartement, dates de semis, surveillance hebdomadaire et étapes de lutte intégrée, arrosage des légumes, et récolte, tri, stockage et vente.",
          youCanNow: "récolter, manipuler, trier et stocker la production pour réduire les pertes et garder sa valeur."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Protéger et terminer la culture",
        questions: [
          { q: "En lutte intégrée, les pesticides sont utilisés :", options: ["Chaque semaine quoi qu'il arrive", "Jamais, en aucun cas", "Seulement quand c'est justifié, après avoir considéré les autres méthodes", "Seulement sur les légumes"], answer: 2, why: "La lutte intégrée de la FAO limite les pesticides à ce qui est justifié." },
          { q: "Comment surveiller un champ ?", options: ["Regarder seulement le bord", "Parcourir le champ en W et examiner un nombre fixe de plants", "Regarder depuis la maison", "Seulement après la récolte"], answer: 1, why: "Un parcours en W échantillonne tout le champ équitablement." },
          { q: "Le délai avant récolte est :", options: ["Le nombre de jours à attendre entre le traitement et la récolte", "Le moment de semer", "Le prix du pesticide", "La taille du pulvérisateur"], answer: 0, why: "Il garde les résidus sur les aliments à des niveaux sûrs." },
          { q: "Pourquoi utiliser le goutte-à-goutte pour les tomates ?", options: ["Il mouille les feuilles", "Il utilise plus d'eau", "La loi l'exige", "Il apporte l'eau aux racines et garde les feuilles sèches, ce qui réduit les maladies"], answer: 3, why: "Des feuilles sèches veulent dire moins de maladies et moins d'eau gaspillée." },
          { q: "Pourquoi bien sécher le maïs avant de le stocker ?", options: ["Pour le rendre plus lourd", "Le grain humide peut développer des moisissures qui produisent de l'aflatoxine", "Les acheteurs préfèrent le grain humide", "Pour changer sa couleur"], answer: 1, why: "L'aflatoxine est un poison dangereux produit par les moisissures sur le grain humide." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Production végétale et horticole durable",
    questions: [
      { q: "Une analyse de sol vous indique :", options: ["La météo", "Le pH et les niveaux de nutriments", "Le prix des récoltes", "Le nom des ravageurs"], answer: 1, why: "Les analyses de sol mesurent l'acidité et les nutriments." },
      { q: "Les sols acides peuvent avoir besoin :", options: ["De plus de brûlis", "De sel", "De chaux, si une analyse de sol le conseille", "De rien, jamais"], answer: 2, why: "Le chaulage réduit l'acidité et libère les nutriments." },
      { q: "Qu'est-ce qui améliore la santé du sol ?", options: ["Ajouter du fumier et du compost et garder le sol couvert", "Brûler les résidus", "Labourer de nombreuses fois", "Laisser le sol nu"], answer: 0, why: "La matière organique et la couverture nourrissent et protègent le sol." },
      { q: "Une semence certifiée est :", options: ["N'importe quel grain du marché", "Une semence sans paquet", "Une semence gardée dix ans", "Une semence contrôlée par l'autorité officielle des semences"], answer: 3, why: "La certification contrôle la variété et la qualité." },
      { q: "Des plants trop serrés en général :", options: ["Rendent plus", "Se disputent la lumière, l'eau et les nutriments et perdent du rendement", "N'ont pas besoin d'engrais", "Résistent à tous les ravageurs"], answer: 1, why: "Le bon écartement équilibre le nombre de plants et les ressources." },
      { q: "Quand faut-il repiquer les plants ?", options: ["À midi en plein soleil", "Pendant un orage", "Après l'endurcissement, de préférence dans la fraîcheur du soir", "Avant qu'ils aient des feuilles"], answer: 2, why: "La fraîcheur réduit le choc du repiquage." },
      { q: "Quelles cultures ajoutent de l'azote au sol ?", options: ["Le haricot, le niébé et l'arachide", "Seulement le maïs", "Les tomates", "Les oignons"], answer: 0, why: "Les légumineuses fixent l'azote grâce à leurs racines." },
      { q: "L'engrais de couverture du maïs veut en général dire apporter :", options: ["De la chaux au semis", "Des semences", "Seulement de l'eau", "De l'azote à la culture en croissance"], answer: 3, why: "L'azote de couverture soutient la croissance au bon stade." },
      { q: "L'engrais doit être placé :", options: ["Directement sur la semence", "Près du plant, sans toucher la semence", "Sur la route", "Seulement sur les feuilles"], answer: 1, why: "Placé près des racines, il est bien utilisé sans brûler la semence." },
      { q: "Les ennemis naturels sont :", options: ["Des mauvaises herbes", "Des pesticides", "Des insectes qui mangent ou attaquent les ravageurs", "Des voleurs"], answer: 2, why: "Les coccinelles et les guêpes parasitoïdes aident à contrôler les ravageurs." },
      { q: "Un seuil d'intervention est :", options: ["La quantité de ravageurs à partir de laquelle la lutte vaut son coût", "Un type de pulvérisateur", "Le moment de la récolte", "Un résultat d'analyse de sol"], answer: 0, why: "Il aide à éviter les traitements inutiles." },
      { q: "Le push-pull est surtout utilisé pour :", options: ["Les tomates", "Le chou frisé", "Les oignons", "Le maïs et le sorgho"], answer: 3, why: "L'icipe l'a mis au point contre les ravageurs des céréales comme le foreur de tiges et la chenille légionnaire d'automne." },
      { q: "Au Kenya, les pesticides sont homologués par :", options: ["La KCAA", "Le Pest Control Products Board (PCPB)", "Le KMD", "L'ODPC"], answer: 1, why: "Le PCPB réglemente les produits de lutte contre les ravageurs au Kenya." },
      { q: "Un pesticide vendu dans une bouteille reconditionnée sans étiquette :", options: ["Est une bonne affaire", "Convient s'il est bon marché", "Ne doit être ni acheté ni utilisé", "Est plus sûr"], answer: 2, why: "Sans étiquette, impossible de connaître le produit ou de l'utiliser en sécurité." },
      { q: "Les emballages vides de pesticides doivent être :", options: ["Éliminés en sécurité, jamais réutilisés pour la nourriture ou l'eau", "Utilisés pour garder l'eau de boisson", "Donnés aux enfants", "Jetés dans la rivière"], answer: 0, why: "Les résidus peuvent empoisonner les gens et l'eau." },
      { q: "Le meilleur moment pour arroser les légumes est :", options: ["Midi", "Seulement la nuit sous la pluie", "Jamais", "Tôt le matin ou le soir"], answer: 3, why: "Moins d'eau est perdue par la chaleur et l'évaporation." },
      { q: "Le paillis autour des légumes :", options: ["Assèche le sol", "Garde l'humidité et empêche la terre d'éclabousser les feuilles", "Attire tous les ravageurs", "Remplace complètement l'eau"], answer: 1, why: "Le paillis économise l'eau et réduit les éclaboussures porteuses de maladies." },
      { q: "Les produits fragiles comme les tomates doivent être transportés dans :", options: ["Des sacs serrés", "Les mains seulement", "Des caisses propres", "Des sacs plastiques au soleil"], answer: 2, why: "Les caisses protègent les produits fragiles de l'écrasement." },
      { q: "Pourquoi ne récolter que le manioc que vous pouvez vendre ou transformer vite ?", options: ["Les racines s'abîment en quelques jours après la récolte", "Les acheteurs n'aiment pas le manioc", "Le manioc repousse en une nuit", "C'est la loi"], answer: 0, why: "Les racines fraîches de manioc se dégradent vite." },
      { q: "Les sacs de stockage hermétiques contrôlent les charançons en :", options: ["Ajoutant du poison", "Faisant du bruit", "Laissant entrer la lumière", "Coupant l'air"], answer: 3, why: "Les sacs étanches privent les insectes d'oxygène." }
    ]
  }
};
