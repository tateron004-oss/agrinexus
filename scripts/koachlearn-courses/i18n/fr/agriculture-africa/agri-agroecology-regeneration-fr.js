"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-agroecology-regeneration.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_AE = { name: "FAO : Plateforme de connaissances sur l'agroécologie", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO : Les 10 éléments de l'agroécologie (adoptés par les membres de la FAO en 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110 : la régénération naturelle assistée (RNA, en anglais FMNR), les étapes de la réussite (avec World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Ouganda : guide pratique de la RNA (FMNR)", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO : Agroforesterie", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi et al. : l'intégration d'arbres légumineux peut-elle stabiliser les rendements du maïs pluvial en Afrique australe ? (essais au Malawi et en Zambie)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia : variations de la teneur en éléments nutritifs des feuilles et conséquences pour le transfert de biomasse (ouest du Kenya)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO : L'importance de la matière organique du sol", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "Gestion 4R des éléments nutritifs dans l'agriculture africaine : manuel de vulgarisation", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-fr",
  lang: "fr",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroécologie et régénération des sols",
  skills: "Appliquer les principes de l'agroécologie, Restaurer la terre avec des plantes de couverture et des engrais verts, Faire revenir les arbres par la RNA, Relier cultures et élevage, Réduire la facture d'engrais, Mesurer l'amélioration du sol saison après saison",
  outcome: "écrire et démarrer un plan sur trois saisons pour redonner vie à un champ dégradé grâce à l'agroécologie : plantes de couverture ou engrais verts, arbres, liens entre cultures et élevage et éléments nutritifs produits sur l'exploitation, avec moins d'engrais acheté et des mesures simples pour voir le sol s'améliorer.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs commerciaux en croissance, aux jeunes agripreneurs, aux ouvriers agricoles et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, au Niger, au Sénégal et partout en Afrique dont la terre est fatiguée : les rendements baissent, le sol est dur ou part avec l'eau, le striga s'étend et l'engrais coûte plus cher chaque année.",
    "Le chapitre 1 présente les principes de l'agroécologie et les moyens de faire revivre une terre dégradée : plantes de couverture et engrais verts, arbres fertilitaires, et régénération naturelle assistée (RNA), qui a aidé les agriculteurs du Niger à faire revenir les arbres sur des millions d'hectares. Le chapitre 2 relie cultures et élevage, met la biodiversité à votre service, réduit le coût de l'engrais importé et vous montre comment mesurer les progrès saison après saison.",
    "Le cours \"Santé et fertilité des sols\" traite de l'analyse de sol, du compost, de la rotation et du paillage ; ce cours part de là et ne le répète pas. La régénération prend plusieurs saisons : commencez sur un seul champ et comparez. Les montants sont des exemples inventés. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre terre."
  ],
  finalTask: "Écrivez un plan de régénération sur trois saisons pour un champ dégradé de votre exploitation (ou un exemple : 1 acre de terre à maïs fatiguée à Kakamega, 2 hectares de sorgho et d'arachide à Zinder, au Niger, ou 1 hectare de manioc dans l'État d'Oyo) : l'état actuel du champ ; les plantes de couverture, engrais verts ou arbres que vous utiliserez et quand ; comment les cultures et les animaux se nourriront les uns les autres ; combien de sacs d'engrais acheté vous voulez remplacer et l'argent économisé ; et les quatre mesures ou plus que vous noterez à chaque saison, avec un croquis du champ.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits exploitants et agriculteurs commerciaux en croissance, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation de toute l'Afrique (Kenya, Nigeria, Ghana et Afrique de l'Ouest francophone, y compris le Sahel), qui cultivent le maïs, le manioc, le sorgho, le mil, le haricot, l'arachide, le riz, le cacao et le café, souvent avec des chèvres, des bovins, des porcs ou des volailles.",
    startingPoint: "Ils connaissent les bases du compost, du fumier, de la rotation et du paillage, et voient que leur sol est dégradé. Peu utilisent volontairement des plantes de couverture, des engrais verts, des arbres fertilitaires ou la RNA, relient cultures et animaux comme un système, ou mesurent l'évolution du sol dans le temps.",
    gap: "Les sols dégradés et la hausse du prix des engrais pèsent sur les rendements et les revenus. Les apprenants ont besoin de moyens pratiques et peu coûteux pour reconstruire le sol et réduire les intrants achetés, et d'une façon de voir si cela marche, pour tenir pendant les premières saisons, qui sont lentes.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Terre et main-d'œuvre : petites parcelles, main-d'œuvre familiale, résidus convoités pour d'autres usages (alimentation des animaux, combustible)",
      "Temps : la régénération prend plusieurs saisons ; les leçons durent de 4 à 6 minutes",
      "Argent : les montants sont des exemples ; aucun prix ni subvention n'est donné comme un fait",
      "Droits fonciers : les règles sur les arbres et le pâturage varient selon la communauté et le pays ; les apprenants vérifient les règles et les conventions locales"
    ],
    prerequisites: "Il est conseillé de suivre d'abord \"Santé et fertilité des sols\" (analyse, compost, rotation, paillage)."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de pratiques de votre exploitation", action: "relier chaque pratique au principe de l'agroécologie qu'elle utilise, comme le recyclage, la diversité ou les synergies", standard: "en reliant correctement au moins cinq pratiques" },
    { id: "O2", condition: "Pour un champ dégradé", action: "choisir une plante de couverture ou un engrais vert et prévoir quand le semer et quand le couper", standard: "avec une espèce adaptée à votre pluviométrie et une date de semis et de coupe" },
    { id: "O3", condition: "Sur une parcelle avec des souches vivantes ou de la place pour des arbres", action: "planifier étape par étape la régénération naturelle assistée (RNA) ou des arbres fertilitaires", standard: "en précisant quelles souches ou quels arbres, combien de tiges, la taille et la protection contre les animaux et le feu" },
    { id: "O4", condition: "À partir des cultures et des animaux de votre exploitation", action: "dessiner les flux d'aliments, de fumier et de résidus entre vos cultures et vos animaux", standard: "en montrant au moins trois liens et un endroit où les éléments nutritifs quittent l'exploitation" },
    { id: "O5", condition: "À partir de l'engrais utilisé la saison dernière", action: "estimer combien de sacs d'engrais acheté les éléments nutritifs de l'exploitation peuvent remplacer et l'argent économisé", standard: "en monnaie locale, en indiquant que c'est une estimation à vérifier avec la vulgarisation" },
    { id: "O6", condition: "Sur le champ que vous restaurez", action: "noter des mesures simples du sol et de l'exploitation à la même période à chaque saison", standard: "avec au moins quatre mesures, écrites et comparées à la saison précédente" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les principes et le retour de la terre",
      lessons: [
        {
          title: "L'agroécologie : des principes à utiliser sur votre exploitation",
          objectives: ["O1"],
          minutes: 5,
          goal: "Relier les pratiques de votre exploitation aux principes de l'agroécologie.",
          text: [
            "L'agroécologie, c'est cultiver en suivant le fonctionnement de la nature : utiliser les plantes, les animaux, la vie du sol, les arbres et le savoir des gens pour que l'exploitation se nourrisse davantage elle-même et achète moins à l'extérieur. La FAO, l'organisation des Nations unies pour l'alimentation et l'agriculture, décrit 10 éléments de l'agroécologie, adoptés par ses pays membres en 2019.",
            "Cinq portent sur le fonctionnement de l'exploitation : le recyclage (les éléments nutritifs et les déchets retournent dans l'exploitation), l'efficience (obtenir plus avec la même eau, la même terre et les mêmes intrants), la diversité (beaucoup de cultures, d'animaux et d'arbres), les synergies (des éléments qui s'entraident, comme les légumineuses qui nourrissent le maïs) et la résilience (faire face aux chocs). Cinq portent sur les personnes : la co-création des connaissances (agriculteurs et chercheurs qui apprennent ensemble), les valeurs humaines et sociales, la culture et les traditions alimentaires, la gouvernance responsable, et l'économie circulaire et solidaire (vendre et acheter localement et équitablement).",
            "Vous en utilisez sans doute déjà certains. Donner les tiges de maïs aux chèvres et remettre leur fumier au champ, c'est du recyclage et une synergie. Associer le manioc et l'arachide, c'est de la diversité. Un champ-école paysan, c'est de la co-création des connaissances. L'agroécologie vous demande de les utiliser volontairement, et d'en ajouter d'autres, pas à pas."
          ],
          words: [["Agroécologie", "une agriculture qui utilise les processus naturels et le savoir local pour que l'exploitation ait besoin de moins d'intrants achetés et résiste mieux aux chocs."], ["Synergie", "quand deux éléments de l'exploitation s'entraident, si bien qu'ensemble ils donnent plus que séparément."], ["Recyclage (sur une exploitation)", "remettre au sol les résidus de culture, le fumier et les déchets au lieu de les perdre."]],
          slides: [
            { title: "L'agroécologie, c'est...", bullets: ["Cultiver avec les processus de la nature", "L'exploitation se nourrit plus, achète moins", "FAO : 10 éléments, adoptés en 2019"] },
            { title: "Le fonctionnement de l'exploitation", bullets: ["Recyclage et efficience", "Diversité et synergies", "Résilience"] },
            { title: "Les personnes et l'équité", bullets: ["Co-créer les connaissances", "Valeurs sociales, culture alimentaire", "Bonne gouvernance ; économie circulaire et équitable"] },
            { title: "Vous le faites peut-être déjà", bullets: ["Tiges aux chèvres, fumier au champ", "Manioc associé à l'arachide", "Champs-écoles paysans"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Notez six pratiques de votre exploitation ou de votre village. À côté de chacune, écrivez le principe de l'agroécologie qu'elle utilise (recyclage, efficience, diversité, synergies, résilience ou un des éléments liés aux personnes). Entourez un principe que vous n'utilisez presque pas.",
          youCanNow: "relier les pratiques agricoles aux principes de l'agroécologie et repérer ceux que vous pourriez utiliser davantage.",
          quickCheck: [
            { objective: "O1", q: "Une agricultrice donne les fanes de haricot à ses chèvres et épand leur fumier sur son maïs. Quels principes utilise-t-elle ?", options: ["Le recyclage et la synergie", "Seulement la gouvernance", "L'efficience du tracteur", "Aucun"], answer: 0, why: "Les résidus nourrissent les animaux et le fumier nourrit le sol : les éléments nutritifs sont recyclés et les éléments s'entraident." },
            { objective: "O1", q: "Lequel est un exemple de diversité sur une exploitation ?", options: ["Seulement du maïs, à chaque saison, sur tous les champs", "Brûler tous les résidus", "Du manioc, de l'arachide, des arbres et des chèvres sur la même exploitation", "Acheter tous les aliments du bétail en ville"], answer: 2, why: "Beaucoup de cultures, d'animaux et d'arbres ensemble, c'est la diversité, un des 10 éléments de la FAO." }
          ]
        },
        {
          title: "Faire revivre une terre dégradée : plantes de couverture et engrais verts",
          objectives: ["O2"],
          minutes: 6,
          goal: "Choisir une plante de couverture ou un engrais vert pour un champ dégradé et prévoir quand le semer et le couper.",
          text: [
            "Une terre dégradée a perdu sa matière organique et sa structure : la pluie ruisselle, les cultures restent chétives et des mauvaises herbes comme le striga envahissent le champ. Le paillage et le compost aident, mais on n'en a presque jamais assez. Les plantes de couverture et les engrais verts produisent la matière organique sur le champ lui-même.",
            "Une plante de couverture est cultivée surtout pour couvrir et protéger le sol, souvent entre deux saisons. Un engrais vert est cultivé puis coupé et laissé en surface ou enfoui pour nourrir le sol. Les légumineuses font les deux et ajoutent en plus de l'azote : lablab, mucuna (pois mascate), canavalia (pois sabre), crotalaire, niébé et pois d'Angole sont utilisés dans différentes régions d'Afrique. Certaines, comme le lablab et le niébé, donnent aussi de la nourriture ou du fourrage ; la graine de mucuna doit être spécialement préparée avant d'être mangée par les gens, alors traitez-la comme une plante pour le sol et le fourrage et demandez conseil à la vulgarisation.",
            "Des arbustes feuillus peuvent aussi servir d'engrais vert de feuilles. Dans l'ouest du Kenya, les agriculteurs coupent les feuilles de tithonia (tournesol mexicain) dans les haies et les épandent sur les champs ; la recherche a montré que les feuilles sont riches en éléments nutritifs, mais les couper et les transporter demande beaucoup de travail : cela paie surtout sur les légumes et les autres cultures à forte valeur.",
            "Le moment compte. Semez la plante de couverture assez tôt pour qu'elle pousse bien avant la saison sèche, ou semez-la en relais dans la culture principale quelques semaines après le semis. Coupez-la avant qu'elle ne concurrence votre culture suivante ou ne forme des graines dures, et laissez la matière coupée en surface comme paillis. Demandez à votre agent de vulgarisation ou à un institut de recherche quelles espèces et quelles dates conviennent à votre pluviométrie."
          ],
          steps: ["Parcourez le champ : où est-il nu, dur ou plein de striga ?", "Choisissez une ou deux espèces de couverture ou d'engrais vert adaptées à votre pluviométrie.", "Décidez : entre deux saisons, en relais dans la culture principale, ou en jachère.", "Écrivez la date de semis et la date de coupe.", "Coupez avant la concurrence avec votre culture ; laissez en surface.", "Gardez les animaux dehors jusqu'à ce qu'elle ait fait son travail, ou prévoyez une part pour le fourrage."],
          words: [["Terre dégradée", "une terre qui a perdu du sol, de la matière organique ou sa couverture végétale, et produit donc beaucoup moins."], ["Plante de couverture", "une culture semée surtout pour couvrir et protéger le sol."], ["Engrais vert", "une culture semée puis coupée et laissée sur le sol ou enfouie pour le nourrir."], ["Culture en relais", "semer une deuxième culture dans une culture en place avant la récolte de la première."]],
          slides: [
            { title: "Produire la matière organique au champ", bullets: ["Terre dégradée : ruissellement, plantes chétives, striga", "Pas assez de paillis ou de compost à apporter", "Couvertures et engrais verts la produisent sur place"] },
            { title: "Choix de légumineuses", bullets: ["Lablab, niébé, pois d'Angole : aussi nourriture ou fourrage", "Mucuna, canavalia, crotalaire : sol et fourrage", "Elles fixent l'azote de l'air"] },
            { title: "Engrais vert de feuilles", bullets: ["Feuilles de tithonia dans l'ouest du Kenya", "Riches en nutriments ; la coupe demande du travail", "Mieux sur les cultures à forte valeur"] },
            { title: "Le bon moment", bullets: ["Semez tôt ou en relais dans la culture principale", "Coupez avant la concurrence ou les graines dures", "Demandez à la vulgarisation ce qui convient à vos pluies"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Choisissez votre champ le plus dégradé. Choisissez une plante de couverture ou un engrais vert pour lui, et écrivez : pourquoi vous l'avez choisi, la date de semis, comment vous le sèmerez (entre deux saisons, en relais ou en jachère) et la date de coupe. Notez une question à poser à votre agent de vulgarisation.",
          youCanNow: "choisir une plante de couverture ou un engrais vert pour un champ dégradé et prévoir quand le semer et le couper.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la principale différence entre une plante de couverture et un engrais vert ?", options: ["Les plantes de couverture sont toujours des arbres", "Les engrais verts s'achètent en sacs", "Il n'y a pas de différence", "Un engrais vert est cultivé pour être coupé et laissé nourrir le sol"], answer: 3, why: "Les plantes de couverture protègent le sol ; les engrais verts sont cultivés surtout pour être coupés et le nourrir (beaucoup de plantes font les deux)." },
            { objective: "O2", q: "Quand faut-il couper une plante de couverture semée avant le maïs ?", options: ["Avant qu'elle ne concurrence le maïs ou ne forme des graines dures", "Jamais", "Après la récolte du maïs", "Seulement si elle fait des fleurs violettes"], answer: 0, why: "Couper au bon moment évite la concurrence et laisse un paillis pour la culture suivante." }
          ]
        },
        {
          title: "Les arbres qui reviennent : RNA et arbres fertilitaires",
          objectives: ["O3"],
          minutes: 6,
          goal: "Planifier la régénération naturelle assistée (RNA) ou des arbres fertilitaires pour une parcelle.",
          text: [
            "Beaucoup de champs qui semblent sans arbres ont encore des souches et des racines vivantes sous le sol. La régénération naturelle assistée (RNA) les laisse repousser au lieu de les couper à chaque saison. Au Niger, la RNA s'est répandue d'agriculteur à agriculteur et a fait revenir les arbres sur plus de cinq millions d'hectares de terres cultivées, apportant fourrage, bois de feu, ombre et de meilleures récoltes.",
            "Les étapes, d'après les guides de World Vision et de ses partenaires : parcourez le champ pour repérer les souches qui rejettent et choisissez les espèces utiles ; sur chaque souche, gardez trois à cinq des tiges les plus hautes et les plus droites et coupez les autres ; élaguez les branches latérales jusqu'à environ mi-hauteur de chaque tige, avec un outil bien affûté, en coupant vers le haut ; revenez tous les quelques mois pour enlever les nouveaux rejets ; protégez les tiges des animaux et du feu ; quand vous récoltez une tige, laissez une plus jeune la remplacer. Marquez les tiges choisies et mettez-vous d'accord avec vos voisins et votre communauté pour que les animaux et les coupeurs de bois les laissent tranquilles.",
            "Là où il n'y a pas de souches, vous pouvez planter des arbres fertilitaires : des arbres légumineux comme le gliricidia, le faidherbia (courant dans les parcs agroforestiers du Sahel, y compris le bassin arachidier du Sénégal) ou le calliandra, dont les feuilles nourrissent le sol ou les animaux. De longs essais au Malawi et en Zambie ont montré que le maïs cultivé avec le gliricidia donnait des rendements plus réguliers au fil des ans que le maïs avec l'engrais seul, même si élaguer les arbres deux ou trois fois par an représente un vrai travail.",
            "Avant de couper ou de vendre des arbres, vérifiez les règles forestières de votre pays et les conventions locales de votre communauté."
          ],
          steps: ["Parcourez la parcelle et marquez les souches vivantes et les jeunes arbres.", "Choisissez des espèces utiles : fourrage, bois de feu, fruits, sol.", "Gardez 3 à 5 tiges droites par souche ; coupez le reste.", "Élaguez les branches latérales jusqu'à mi-hauteur ; outil affûté, coupe vers le haut.", "Protégez des animaux et du feu ; convenez de règles avec les voisins.", "Pas de souches ? Prévoyez des arbres fertilitaires avec la vulgarisation."],
          words: [["RNA", "régénération naturelle assistée (en anglais FMNR) : laisser repousser les souches et les racines d'arbres de votre terre, puis choisir et élaguer les meilleures tiges."], ["Arbre fertilitaire", "un arbre, le plus souvent une légumineuse, dont les feuilles nourrissent le sol."], ["Parc agroforestier", "des terres cultivées avec des arbres dispersés dans les champs."], ["Convention locale", "une règle adoptée par une communauté ou un conseil local."]],
          slides: [
            { title: "Une forêt sous la terre", bullets: ["Souches et racines vivantes dans les champs nus", "La RNA les laisse repousser", "Niger : arbres revenus sur plus de 5 millions d'hectares"] },
            { title: "Les étapes de la RNA", bullets: ["Choisir les souches et les espèces utiles", "Garder 3 à 5 tiges droites", "Élaguer à mi-hauteur ; outil affûté, coupe vers le haut"] },
            { title: "Protéger et gérer", bullets: ["Enlever les rejets tous les quelques mois", "Éloigner les animaux et le feu", "Convenir de règles avec la communauté"] },
            { title: "Pas de souches ? Arbres fertilitaires", bullets: ["Gliricidia, faidherbia, calliandra", "Maïs plus régulier dans les essais au Malawi et en Zambie", "L'élagage demande du travail ; vérifiez les règles forestières"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Parcourez une parcelle et comptez les souches vivantes ou les jeunes arbres. Faites un croquis rapide en marquant ceux que vous garderiez. Écrivez de quelles espèces il s'agit (ou demandez à quelqu'un), ce que vous attendez d'eux, et comment vous les protégerez des animaux et du feu.",
          youCanNow: "planifier étape par étape la régénération naturelle assistée (RNA) ou des arbres fertilitaires pour une parcelle.",
          quickCheck: [
            { objective: "O3", q: "En RNA, que faites-vous des nombreux rejets d'une souche vivante ?", options: ["Les couper tous à chaque saison", "Brûler la souche", "Garder trois à cinq des tiges les plus hautes et les plus droites et couper les autres", "Laisser pousser tous les rejets"], answer: 2, why: "Garder quelques bonnes tiges leur permet de pousser vite et de devenir des arbres utiles." },
            { objective: "O3", q: "Pourquoi un agriculteur doit-il convenir des règles de RNA avec ses voisins ?", options: ["Pour que les animaux et les coupeurs de bois laissent tranquilles les tiges choisies", "Pour vendre les souches", "Parce que les arbres poussent plus vite après une réunion", "Ce n'est jamais nécessaire"], answer: 0, why: "L'accord de la communauté protège les tiges du pâturage et de la coupe pendant leur croissance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les principes et le retour de la terre",
        questions: [
          { objective: "O1", q: "Un champ-école où agriculteurs et chercheurs testent ensemble des pratiques est un exemple de quel élément de l'agroécologie ?", options: ["La co-création des connaissances", "L'efficience de l'engrais", "La monoculture", "Les intrants importés"], answer: 0, why: "Agriculteurs et chercheurs qui apprennent ensemble, c'est la co-création des connaissances." },
          { objective: "O1", q: "Quelle pratique montre une synergie ?", options: ["Vendre tous les résidus", "Des légumineuses qui apportent de l'azote utilisé par le maïs suivant", "Une jachère nue", "Brûler les chaumes"], answer: 1, why: "La légumineuse aide le maïs : deux éléments de l'exploitation travaillent ensemble." },
          { objective: "O2", q: "Un champ au Ghana est nu et dur après la récolte. Que pourriez-vous cultiver pour le protéger et le nourrir avant la saison suivante ?", options: ["Rien ; le laisser nu", "La même culture avec plus d'engrais", "Une légumineuse de couverture comme le niébé ou le lablab", "Seulement des mauvaises herbes"], answer: 2, why: "Une légumineuse de couverture protège le sol et apporte de l'azote et de la matière organique." },
          { objective: "O2", q: "Les feuilles de tithonia sont riches en éléments nutritifs mais demandent beaucoup de travail à couper et à transporter. Où paient-elles le mieux ?", options: ["Épandues en couche fine sur de grands champs de maïs", "Sur des cultures à forte valeur comme les légumes", "Brûlées pour faire de la cendre", "Données seulement aux porcs"], answer: 1, why: "La recherche dans l'ouest du Kenya a montré que le travail paie surtout sur les cultures à forte valeur." },
          { objective: "O3", q: "Jusqu'à quelle hauteur faut-il élaguer les branches latérales des jeunes tiges de RNA ?", options: ["Pas du tout", "Couper toute la tige au ras du sol", "Jusqu'au sommet", "Jusqu'à environ la mi-hauteur de la tige"], answer: 3, why: "Élaguer trop haut rend les tiges fragiles face au vent et aux animaux." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Une exploitation qui se nourrit elle-même",
      lessons: [
        {
          title: "Cultures, élevage et biodiversité qui travaillent ensemble",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dessiner les flux d'aliments, de fumier et de résidus entre vos cultures et vos animaux.",
          text: [
            "Sur une exploitation mixte, les cultures et les animaux peuvent se nourrir les uns les autres. Les résidus de culture, les plantes de couverture, les feuilles d'arbres et les sous-produits des grains nourrissent les animaux ; les animaux les transforment en lait, en viande, en œufs, en traction et en fumier ; le fumier et l'urine retournent nourrir le sol. Quand ces liens sont solides, moins d'argent sort de l'exploitation.",
            "Dessinez-le. Placez sur une feuille vos champs, vos animaux, votre maison et votre fosse à compost ou tas de fumier, puis tracez des flèches : tiges de maïs vers les chèvres, fumier vers le jardin potager, litière de volaille vers le compost, eau de l'étang vers les légumes dans une exploitation piscicole. Marquez ensuite les fuites : résidus brûlés, fumier laissé au soleil et à la pluie, urine perdue, produits vendus sans que rien ne revienne. Chaque fuite est un gain possible.",
            "La biodiversité fait aussi partie du système. Les arbres, les haies, les bandes enherbées et les plantes à fleurs abritent les insectes et les oiseaux qui mangent les ravageurs, et les abeilles qui pollinisent le haricot, la tomate et le café. Des cultures et des variétés différentes répartissent les risques. Gardez quelques coins sauvages, ne traitez pas quand ce n'est pas nécessaire, et cultivez plus d'une culture.",
            "Attention à l'équilibre : les animaux ont besoin d'aliments pendant la saison sèche, et les résidus donnés aux animaux ne restent pas sur le sol comme paillis. Décidez quelle part va où, et produisez du fourrage en plus (bandes enherbées, arbres fourragers, lablab) pour ne pas avoir à choisir."
          ],
          steps: ["Dessinez vos champs, vos animaux, votre maison et votre tas de fumier.", "Tracez une flèche pour chaque flux : aliments, résidus, fumier, eau.", "Marquez les fuites : brûlage, fumier et urine perdus, rien qui revient.", "Marquez les endroits pour la biodiversité : haies, arbres, fleurs, coins sauvages.", "Choisissez une fuite à fermer cette saison."],
          words: [["Exploitation mixte", "cultiver et élever des animaux sur la même exploitation pour qu'ils se soutiennent."], ["Flux d'éléments nutritifs", "la façon dont les éléments nutritifs circulent dans l'exploitation, par exemple de l'aliment au fumier puis au sol."], ["Biodiversité", "la variété des plantes, des animaux, des insectes et de la vie du sol sur l'exploitation et autour."], ["Ennemis naturels", "les insectes, oiseaux et autres animaux qui mangent les ravageurs des cultures."]],
          slides: [
            { title: "Les cultures nourrissent les animaux, qui nourrissent le sol", bullets: ["Résidus, fourrage, feuilles d'arbres vers les animaux", "Lait, viande, œufs, traction et fumier en retour", "Liens solides = moins d'argent qui sort"] },
            { title: "Dessinez les flux de votre exploitation", bullets: ["Flèches : aliments, fumier, résidus, eau", "Marquez les fuites : brûlage, fumier et urine perdus", "Chaque fuite est un gain qui attend"] },
            { title: "La biodiversité travaille pour vous", bullets: ["Haies et fleurs abritent mangeurs de ravageurs et abeilles", "Plusieurs cultures répartissent le risque", "Ne traitez que si nécessaire"] },
            { title: "Équilibrer aliment et paillis", bullets: ["Les résidus ne peuvent pas être aliment et paillis à la fois", "Produisez plus de fourrage : bandes enherbées, lablab, arbres"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Dessinez la carte des flux de votre exploitation avec au moins trois flèches entre cultures et animaux. Marquez au moins une fuite et un endroit où vous pourriez ajouter de la biodiversité. Écrivez la fuite que vous fermerez cette saison.",
          youCanNow: "dessiner les flux d'aliments, de fumier et de résidus de votre exploitation et trouver les fuites à fermer.",
          quickCheck: [
            { objective: "O4", q: "Sur une carte des flux, lequel de ces éléments est une fuite ?", options: ["Tiges de maïs données aux chèvres", "Fumier épandu sur le jardin potager", "Fumier laissé au soleil et à la pluie jusqu'à ce qu'il soit lessivé", "Litière de volaille ajoutée au compost"], answer: 2, why: "Le fumier exposé au soleil et à la pluie perd des éléments nutritifs qui devraient retourner au sol." },
            { objective: "O4", q: "Pourquoi garder des haies, des arbres et des plantes à fleurs autour des champs ?", options: ["Ils abritent les ennemis naturels des ravageurs et les pollinisateurs", "Ils font toujours baisser les rendements", "Ils ne servent qu'à décorer", "Ils arrêtent la pluie"], answer: 0, why: "Abriter les mangeurs de ravageurs et les abeilles est un service gratuit pour vos cultures." }
          ]
        },
        {
          title: "Réduire le coût de l'engrais importé",
          objectives: ["O5"],
          minutes: 5,
          goal: "Estimer combien de sacs d'engrais acheté les éléments nutritifs de l'exploitation peuvent remplacer, et l'argent économisé.",
          text: [
            "La plus grande partie de l'engrais minéral utilisé en Afrique est importée : son prix suit donc les marchés mondiaux et les taux de change. L'agroécologie vise à en avoir moins besoin, pas toujours à s'en passer. Partez de ce que vous avez utilisé la saison dernière : combien de sacs, de quel type, sur quel champ, et à quel prix.",
            "Notez ensuite les éléments nutritifs de l'exploitation que vous pouvez ajouter : légumineuses de couverture et en association (azote), arbres fertilitaires et engrais vert de feuilles, plus de fumier et d'urine, mieux conservés, bio-effluent si vous avez un biodigesteur, et résidus de culture laissés au champ. Associer une plus petite quantité d'engrais minéral à tout cela marche souvent mieux que l'un ou l'autre seul. Dans les essais au Malawi, le maïs avec du gliricidia plus la moitié de la dose d'engrais recommandée a donné à peu près autant que le maïs avec la dose complète.",
            "Estimez, puis testez. Par exemple (chiffres inventés) : une agricultrice de Kakamega a utilisé 4 sacs sur un acre à KES 3 500 le sac. Avec un lablab en relais et plus de fumier, elle prévoit d'essayer 2 sacs sur une moitié du champ et 4 sur l'autre, et de comparer les rendements. Si les rendements sont les mêmes, elle économise 2 sacs, soit KES 7 000, sur cet acre. Ne réduisez pas l'engrais d'un coup sur toutes vos terres.",
            "Demandez à votre agent de vulgarisation ou à un laboratoire de sols de vérifier votre plan avec vos résultats d'analyse, et n'achetez l'engrais minéral qu'auprès de vendeurs d'intrants agréés, en sacs scellés."
          ],
          steps: ["Écrivez l'engrais de la saison dernière : sacs, type, champ, coût.", "Notez les éléments nutritifs de l'exploitation que vous pouvez ajouter.", "Prévoyez une dose réduite sur une partie d'un champ, avec ces éléments nutritifs.", "Gardez une bande à pleine dose pour comparer.", "Estimez les sacs et l'argent économisés si les rendements tiennent.", "Vérifiez le plan avec la vulgarisation ; n'étendez que ce qui marche."],
          words: [["Engrais minéral", "un engrais fabriqué, comme l'urée, le DAP ou le NPK, en général vendu en sacs."], ["Gestion intégrée de la fertilité des sols", "associer des éléments nutritifs organiques (fumier, légumineuses, résidus) à une plus petite quantité d'engrais minéral."], ["Bande de comparaison", "une partie du champ cultivée comme avant pour comparer les résultats de façon juste."]],
          slides: [
            { title: "Pourquoi réduire l'engrais importé", bullets: ["Le prix suit les marchés mondiaux et les taux de change", "Viser à en avoir moins besoin, pas toujours zéro", "Partir des sacs et des coûts de la saison dernière"] },
            { title: "Éléments nutritifs de l'exploitation", bullets: ["Légumineuses de couverture, associations, arbres fertilitaires", "Fumier, urine, bio-effluent, résidus", "À associer avec moins d'engrais minéral"] },
            { title: "Tester avant de réduire", bullets: ["Exemple : 2 sacs contre 4 sacs sur deux moitiés de champ", "Même rendement = 2 sacs, KES 7 000 économisés (inventé)", "Ne jamais tout réduire d'un coup"] },
            { title: "Vérifier et acheter en sécurité", bullets: ["La vulgarisation ou un laboratoire vérifie votre plan", "Vendeurs d'intrants agréés, sacs scellés"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Écrivez l'engrais utilisé la saison dernière sur un champ. Notez deux sources d'éléments nutritifs de l'exploitation que vous ajouterez. Prévoyez un essai sur une moitié de champ avec une dose réduite, et estimez dans votre monnaie les sacs et l'argent que vous économiseriez si les rendements tiennent.",
          youCanNow: "estimer combien d'engrais acheté les éléments nutritifs de l'exploitation pourraient remplacer, et prévoir un essai juste avant de réduire.",
          quickCheck: [
            { objective: "O5", q: "Vous voulez utiliser moins d'engrais. Quelle est la première étape la plus sûre ?", options: ["Arrêter tout engrais sur tous les champs d'un coup", "Doubler l'engrais", "Acheter de l'engrais sans étiquette parce qu'il est moins cher", "Tester une dose réduite avec des éléments nutritifs de l'exploitation sur une partie d'un champ, à côté d'une bande à pleine dose"], answer: 3, why: "Un essai côte à côte montre si la dose réduite marche avant de risquer toute la récolte." },
            { objective: "O5", q: "Un agriculteur au Nigeria a utilisé 6 sacs à NGN 40 000 chacun et passe à 4 avec le même rendement. Combien a-t-il économisé ?", options: ["NGN 40 000", "NGN 80 000", "NGN 240 000", "Rien"], answer: 1, why: "2 sacs × NGN 40 000 = NGN 80 000 (chiffres d'exemple)." }
          ]
        },
        {
          title: "Mesurer les progrès saison après saison",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Noter des mesures simples du sol et de l'exploitation à la même période à chaque saison.",
          text: [
            "La régénération est lente. Les rendements ne bondiront peut-être pas dès la première saison : il vous faut donc d'autres signes pour voir si le sol revient. Mesurez aux mêmes endroits, le même mois, à chaque saison, et notez-le.",
            "Mesures simples : la couverture du sol (quelle part du sol est couverte par des plantes ou du paillis ; estimez à l'œil ou comptez dans un carré) ; les vers de terre (sortez un bloc de la taille d'une bêche et comptez-les) ; l'infiltration (enfoncez dans le sol une boîte de conserve ouverte aux deux bouts, versez de l'eau et mesurez le temps qu'elle met à s'infiltrer) ; l'odeur et la structure du sol (se défait-il en petites mottes grumeleuses ou en grosses mottes dures ?) ; une photo du sol prise au même endroit ; le rendement d'une parcelle marquée ; et les sacs d'engrais et l'argent dépensés.",
            "Tous les quelques années, une analyse de sol en laboratoire peut montrer la matière organique et les éléments nutritifs (voir \"Santé et fertilité des sols\" pour l'échantillonnage). Si vous le pouvez, comparez votre champ restauré avec un champ resté sans changement.",
            "Le téléphone aide : prenez les photos au même endroit, gardez vos chiffres dans une application de notes ou un tableur, et demandez à un assistant d'IA de les mettre dans un tableau ou un graphique simple. Les chiffres viennent de votre champ."
          ],
          steps: ["Marquez trois endroits dans le champ avec des piquets ou des pierres.", "Choisissez au moins quatre mesures : couverture, vers, infiltration, structure, photo, rendement, coût.", "Notez-les le même mois à chaque saison.", "Comparez avec la saison dernière et avec un champ inchangé.", "Revoyez votre plan : gardez ce qui marche, changez ce qui ne marche pas."],
          words: [["Indicateur", "un signe simple que l'on mesure pour voir si les choses s'améliorent ou empirent."], ["Infiltration", "la vitesse à laquelle l'eau pénètre dans le sol."], ["Couverture du sol", "la part de la surface du sol couverte par des plantes ou du paillis."], ["Situation de départ", "votre première mesure, à laquelle les suivantes sont comparées."]],
          slides: [
            { title: "Un changement lent se mesure", bullets: ["Le rendement peut ne pas bondir en saison 1", "Mêmes endroits, même mois, chaque saison", "Notez-le"] },
            { title: "Mesures simples", bullets: ["Couverture du sol et nombre de vers de terre", "Infiltration : chronométrez l'eau qui s'infiltre", "Structure, photo, rendement, coût de l'engrais"] },
            { title: "Comparer", bullets: ["Avec la saison dernière (votre situation de départ)", "Avec un champ inchangé", "Analyse de laboratoire tous les quelques ans"] },
            { title: "Votre téléphone aide", bullets: ["Photos prises au même endroit", "Chiffres dans les notes ou un tableur", "L'IA peut les ranger dans un tableau"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Tâche finale : écrivez votre plan de régénération sur trois saisons pour un champ, avec un croquis. Faites ensuite votre situation de départ aujourd'hui : marquez trois endroits et notez au moins quatre mesures (par exemple couverture, nombre de vers, temps d'infiltration et une photo).",
          youCanNow: "mesurer votre sol et votre exploitation avec des indicateurs simples à chaque saison et vous en servir pour juger votre plan de régénération.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi mesurer aux mêmes endroits et le même mois à chaque saison ?", options: ["C'est plus joli", "Pour que la comparaison soit juste et montre un vrai changement", "Parce que les vers ne sortent qu'un mois par an", "Pour utiliser plus de papier"], answer: 1, why: "Le même lieu et le même moment écartent les autres causes : les changements reflètent alors le sol." },
            { objective: "O6", q: "L'eau de votre boîte d'infiltration s'infiltre plus vite que l'an dernier. Que cela suggère-t-il ?", options: ["Le sol se dégrade", "La boîte est cassée", "Rien du tout", "La structure du sol s'améliore et retient plus de pluie"], answer: 3, why: "Une infiltration plus rapide veut dire que plus de pluie entre dans le sol au lieu de ruisseler." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Une exploitation qui se nourrit elle-même",
        questions: [
          { objective: "O4", q: "Quelle flèche a sa place sur une carte des flux cultures-élevage ?", options: ["Tiges de maïs vers les chèvres, et fumier de chèvre vers le champ de maïs", "Engrais de la ville vers la boutique", "Pluie du ciel vers la rivière", "Crédit téléphonique vers l'agriculteur"], answer: 0, why: "L'aliment pour les animaux et le fumier qui retourne aux champs sont les flux d'éléments nutritifs propres à l'exploitation." },
          { objective: "O4", q: "Les résidus servent à la fois d'aliment en saison sèche et de paillis. Qu'est-ce qui aide le plus ?", options: ["En brûler la moitié", "Produire du fourrage en plus, comme des bandes enherbées, du lablab ou des arbres fourragers", "Vendre les animaux", "Laisser le champ nu"], answer: 1, why: "Plus de fourrage réduit la concurrence entre nourrir les animaux et couvrir le sol." },
          { objective: "O5", q: "Qu'ont montré les longs essais au Malawi pour le maïs avec du gliricidia plus la moitié de l'engrais ?", options: ["Il a toujours échoué", "Il a fallu doubler l'engrais", "Les rendements étaient à peu près aussi bons qu'avec la dose complète", "Les arbres ont tué le maïs"], answer: 2, why: "Le gliricidia avec une demi-dose d'engrais a donné des rendements comparables à la dose complète à Makoka." },
          { objective: "O5", q: "Où acheter l'engrais minéral que vous utilisez encore ?", options: ["À n'importe quel vendeur au bord de la route avec des sacs ouverts", "Par une annonce en ligne sans adresse", "Dans les sacs restants d'un voisin", "Chez un vendeur d'intrants agréé, en sacs scellés"], answer: 3, why: "Les vendeurs agréés et les sacs scellés réduisent le risque d'engrais faux ou mélangé." },
          { objective: "O6", q: "Qu'est-ce que la situation de départ ?", options: ["Le bas du champ", "Un type d'engrais", "La première mesure, à laquelle les suivantes sont comparées", "La toute dernière récolte"], answer: 2, why: "Sans situation de départ, impossible de savoir si les choses se sont améliorées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Agroécologie et régénération des sols",
    questions: [
      { objective: "O1", q: "Quel organisme décrit les 10 éléments de l'agroécologie ?", options: ["La FIFA", "La FAO", "Une société semencière", "Seulement la Banque mondiale"], answer: 1, why: "Les 10 éléments de l'agroécologie de la FAO ont été adoptés par ses pays membres en 2019." },
      { objective: "O1", q: "Remettre les résidus de culture et le fumier au sol utilise quel principe ?", options: ["La monoculture", "La gouvernance", "Les importations", "Le recyclage"], answer: 3, why: "Remettre résidus et fumier au sol recycle les éléments nutritifs." },
      { objective: "O1", q: "Vendre des légumes à une école locale et acheter des semences à une coopérative locale est un exemple de :", options: ["L'efficience des tracteurs", "La synergie des ravageurs", "L'économie circulaire et solidaire", "L'érosion du sol"], answer: 2, why: "Acheter et vendre localement et équitablement, c'est l'élément économie circulaire et solidaire." },
      { objective: "O2", q: "Quelle culture est une légumineuse souvent utilisée comme plante de couverture ou engrais vert ?", options: ["Le maïs", "Le sorgho", "Le riz", "Le lablab"], answer: 3, why: "Le lablab est une légumineuse qui couvre le sol, apporte de l'azote et donne du fourrage." },
      { objective: "O2", q: "Qu'est-ce que la culture en relais ?", options: ["Semer une deuxième culture dans une culture en place avant la récolte de la première", "Brûler les résidus en lignes", "Semer seulement une fois tous les deux ans", "Transporter les récoltes en camion"], answer: 0, why: "La culture en relais permet à une plante de couverture de commencer à pousser avant la récolte de la culture principale." },
      { objective: "O2", q: "Pourquoi couper un engrais vert avant qu'il ne forme des graines dures ?", options: ["Les graines empoisonnent le sol", "Pour qu'il ne devienne pas une mauvaise herbe qui concurrence la culture suivante", "Les graines dures font pleuvoir", "La loi l'exige"], answer: 1, why: "Couper à temps évite la concurrence et les repousses non voulues." },
      { objective: "O2", q: "Qu'est-ce qu'une terre dégradée ?", options: ["Une terre avec trop d'arbres", "Une terre sous l'eau", "Une terre qui a perdu du sol, de la matière organique ou sa couverture et produit beaucoup moins", "Une terre avec un titre foncier"], answer: 2, why: "Une terre dégradée a perdu ce qui la rend productive." },
      { objective: "O3", q: "Sur quoi s'appuie la RNA pour faire revenir les arbres ?", options: ["Seulement des plants achetés", "Les souches, les racines et les graines vivantes déjà dans le sol", "Des arbres en plastique", "Des injections d'engrais"], answer: 1, why: "La RNA protège et élague ce qui repousse déjà depuis le sol." },
      { objective: "O3", q: "Sur environ quelle surface de terres cultivées du Niger les arbres sont-ils revenus grâce à la RNA ?", options: ["Environ 10 hectares", "Environ 500 hectares", "Aucune", "Plus de cinq millions d'hectares"], answer: 3, why: "La RNA s'est répandue d'agriculteur à agriculteur sur plus de cinq millions d'hectares au Niger." },
      { objective: "O3", q: "Pour élaguer les tiges de RNA, il faut :", options: ["Utiliser un outil affûté et couper vers le haut", "Utiliser un outil émoussé et couper vers le bas", "Enlever l'écorce", "Élaguer jusqu'au sommet"], answer: 0, why: "Des coupes nettes vers le haut cicatrisent plus vite et font moins de dégâts." },
      { objective: "O3", q: "Quel arbre fertilitaire est courant dans les parcs agroforestiers du Sahel, comme le bassin arachidier du Sénégal ?", options: ["L'eucalyptus", "Le faidherbia", "Le manguier", "Le pin"], answer: 1, why: "Le faidherbia est un arbre légumineux très souvent conservé dans les parcs agroforestiers du Sahel." },
      { objective: "O4", q: "Lequel est une fuite sur la carte des flux d'éléments nutritifs d'une exploitation ?", options: ["Fumier épandu au champ", "Résidus donnés aux chèvres", "Brûlage des résidus de culture", "Litière de volaille dans le compost"], answer: 2, why: "Le brûlage envoie les éléments nutritifs et la matière organique en fumée." },
      { objective: "O4", q: "Comment les haies et les plantes à fleurs aident-elles les cultures ?", options: ["Elles abritent les mangeurs de ravageurs et les pollinisateurs", "Elles attirent toujours plus de ravageurs", "Elles rendent le sol acide", "Elles empêchent la pluie d'atteindre les cultures"], answer: 0, why: "Abriter les ennemis naturels et les abeilles est un service gratuit pour les cultures." },
      { objective: "O4", q: "Dans une exploitation de tilapia et de légumes, quel lien est utile ?", options: ["Jeter les déchets de poisson dans la rivière", "Utiliser l'eau de l'étang pour arroser les légumes", "Vider l'étang sur la route", "Brûler les légumes"], answer: 1, why: "L'eau de l'étang, riche en éléments nutritifs, nourrit les légumes : un lien entre culture et animal." },
      { objective: "O5", q: "Pourquoi le prix de l'engrais minéral change-t-il autant dans beaucoup de pays africains ?", options: ["Il est cultivé dans les fermes", "Il dépend de la pluie", "Il ne change jamais", "Il est surtout importé, donc il suit les prix mondiaux et les taux de change"], answer: 3, why: "Les intrants importés suivent les marchés mondiaux et les variations des monnaies." },
      { objective: "O5", q: "Une agricultrice ghanéenne a utilisé 5 sacs à GHS 400 chacun et passe à 3 avec le même rendement. Combien a-t-elle économisé ?", options: ["GHS 800", "GHS 400", "GHS 2 000", "GHS 1 200"], answer: 0, why: "2 sacs × GHS 400 = GHS 800 (chiffres d'exemple)." },
      { objective: "O5", q: "Qu'est-ce que la gestion intégrée de la fertilité des sols ?", options: ["N'utiliser que de l'engrais minéral", "N'utiliser aucun élément nutritif", "Associer des éléments nutritifs organiques à une plus petite quantité d'engrais minéral", "Analyser le sol chaque semaine"], answer: 2, why: "Elle mélange sources organiques et minérales pour que chacune marche mieux." },
      { objective: "O6", q: "Laquelle est une mesure simple de l'amélioration du sol ?", options: ["La couleur de votre téléphone", "La vitesse à laquelle l'eau s'infiltre dans le sol", "Le prix du maïs en ville", "Le nombre de visiteurs"], answer: 1, why: "Une infiltration plus rapide montre une meilleure structure du sol." },
      { objective: "O6", q: "Pourquoi comparer votre champ restauré avec un champ inchangé ?", options: ["Pour voir si le changement vient de vos pratiques et pas seulement de la météo", "Pour utiliser plus de semences", "Parce que les voisins le demandent", "Cela ne change rien"], answer: 0, why: "Un champ de comparaison montre ce qui se serait passé de toute façon." },
      { objective: "O6", q: "Combien de mesures faut-il noter à chaque saison sur le champ que vous restaurez ?", options: ["Aucune", "Une, seulement le rendement", "Seulement la pluie", "Au moins quatre, comme la couverture, les vers, l'infiltration et le rendement"], answer: 3, why: "Plusieurs mesures montrent le changement avant même que les rendements montent." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et réessayez.",
    criteria: [
      { name: "Principes nommés", objective: "O1", notYet: "Le plan ne dit pas quels principes de l'agroécologie il utilise.", meets: "Chaque pratique du plan est reliée à un principe de l'agroécologie.", exceeds: "Utilise au moins quatre principes différents, dont un des éléments liés aux personnes." },
      { name: "Plante de couverture ou engrais vert", objective: "O2", notYet: "Pas de plante de couverture ni d'engrais vert, ou pas de dates.", meets: "Une espèce adaptée à la pluviométrie, avec des dates de semis et de coupe.", exceeds: "Explique aussi comment elle s'accorde avec l'alimentation des animaux et la culture principale, et a été vérifiée avec la vulgarisation." },
      { name: "Arbres", objective: "O3", notYet: "Pas de plan pour les arbres, ou des arbres sans protection.", meets: "RNA ou arbres fertilitaires avec tiges ou espèces, élagage et protection contre les animaux et le feu.", exceeds: "Prévoit un accord communautaire ou une convention locale, et comment les tiges seront récoltées et remplacées." },
      { name: "Liens cultures-élevage", objective: "O4", notYet: "Pas de carte des flux, ou un seul lien.", meets: "Une carte des flux avec au moins trois liens et une fuite à fermer.", exceeds: "Montre comment les résidus sont partagés entre aliment et paillis et où la biodiversité est ajoutée." },
      { name: "Économie d'engrais", objective: "O5", notYet: "Pas d'estimation, ou prévoit d'arrêter l'engrais sur toutes les terres d'un coup.", meets: "Estime les sacs et l'argent économisés en monnaie locale, avec un essai juste contre une bande à pleine dose.", exceeds: "Plan vérifié avec la vulgarisation ou les résultats d'analyse, avec une règle pour décider quand étendre." },
      { name: "Mesures au fil des saisons", objective: "O6", notYet: "Pas de mesures ou pas de situation de départ.", meets: "Au moins quatre mesures, une situation de départ relevée et une date pour chaque saison.", exceeds: "Prévoit un champ de comparaison inchangé et des photos prises à des endroits fixes." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui sèment une plante de couverture ou un engrais vert, ou commencent la RNA, dans la saison suivante (enquête de suivi)",
      "Évolution de l'engrais acheté par acre sur le champ restauré sur deux saisons (registres de l'apprenant)",
      "Évolution des mesures du sol (couverture, infiltration, nombre de vers) et du rendement sur le champ restauré sur trois saisons",
      "Nombre de voisins ou de membres du groupement qui reprennent une pratique (rapports de vulgarisation)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Du papier, un stylo et des crayons de couleur pour la carte des flux et le croquis du champ",
      "Une bêche, une boîte de conserve vide ouverte aux deux bouts, de l'eau et une montre pour les mesures du sol",
      "Des piquets ou des pierres pour marquer les endroits de mesure",
      "Les registres et les prix de l'engrais de la saison dernière (ou des chiffres d'exemple)",
      "Un téléphone pour les photos et les notes (facultatif)",
      "Environ 90 minutes au total, plus du temps au champ pour les mesures"
    ],
    facilitatorNotes: [
      "Faites les leçons 3 et 6 au champ : cherchez ensemble les souches pour la RNA et faites en groupe l'infiltration et le comptage des vers.",
      "Invitez un agent de vulgarisation ou un institut de recherche (par exemple KALRO, IITA, CSIR ou ISRA, des instituts nationaux et internationaux de recherche agricole) pour confirmer quelles plantes de couverture et quels arbres fertilitaires conviennent à la pluviométrie locale.",
      "Parlez ouvertement des règles locales de pâturage et de coupe du bois ; la RNA demande souvent un accord communautaire.",
      "Ne présentez jamais les prix d'exemple comme des faits ; relevez les prix locaux de l'engrais avant la séance.",
      "Encouragez les bandes d'essai côte à côte plutôt que des baisses soudaines d'engrais sur toutes les terres.",
      "Notez le plan final avec la grille et faites un suivi après une et deux saisons pour comparer les mesures."
    ]
  }
};
