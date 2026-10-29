"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-farm-accounting-investment.js). See scripts/koachlearn-courses/README.md, "Translations".

const CBK = { name: "Banque centrale du Kenya (CBK) : banques, banques de microfinance et prestataires de crédit numérique agréés", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Banque centrale du Nigeria (CBN) : banques et banques de microfinance agréées", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Banque centrale des États de l'Afrique de l'Ouest (règles pour les banques et la microfinance dans les pays du XOF)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-fr",
  lang: "fr",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Comptabilité agricole et gestion des investissements",
  skills: "Séparer les coûts fixes et les coûts variables, Calculer le coût par kg, par sac ou par litre, Tenir un registre des dépenses, Planifier la trésorerie mois par mois, Trouver le prix d'équilibre, Juger un investissement avec le délai de récupération et le rendement simple",
  outcome: "calculer ce que vous coûte vraiment la production d'un kg, d'un sac ou d'un litre, noter chaque dépense, planifier votre argent mois par mois, trouver le prix le plus bas auquel vous pouvez vendre sans perte, et juger si un investissement, comme une pompe solaire, une serre ou plus de vaches, va se rembourser.",
  about: [
    "Ce cours s'adresse aux petits producteurs et aux agriculteurs commerciaux en croissance, aux gérants d'exploitation, aux jeunes agri-entrepreneurs et aux agents de vulgarisation du Kenya, du Nigeria, du Ghana, du Sénégal, de la Côte d'Ivoire et de toute l'Afrique qui tiennent déjà quelques registres et veulent prendre de meilleures décisions d'argent.",
    "Il s'appuie sur \"Agrobusiness et gestion de l'exploitation agricole\", qui présente les registres simples et la marge brute. Ici, vous allez plus loin. Le chapitre 1 porte sur la connaissance de vos coûts : coûts fixes et variables, coût de production d'une unité et registre des dépenses. Le chapitre 2 porte sur la planification et l'investissement : un plan de trésorerie mensuel, le prix d'équilibre, et comment juger un investissement avec son délai de récupération et son rendement simple.",
    "Tous les montants sont des exemples inventés en KES, NGN, GHS et XOF pour montrer la méthode ; utilisez vos propres prix. Ce cours ne donne pas de conseils de placement. Avant un gros achat ou un prêt, comparez les offres, lisez tout le contrat et parlez à un conseiller de confiance, comme votre coopérative, votre SACCO (coopérative d'épargne et de crédit), votre agent de vulgarisation ou un comptable. Chaque leçon se termine par un petit exercice et un contrôle rapide de 2 questions, chaque chapitre par un contrôle des connaissances, et le cours par un quiz de 20 questions."
  ],
  finalTask: "Faites une fiche de coûts et d'investissement pour une activité de votre ferme (ou d'une ferme d'exemple) : la liste de ses coûts fixes et variables pour une saison, le coût par kg, sac, litre ou œuf, un mois de suivi des dépenses, un plan de trésorerie sur 12 mois avec les soldes cumulés et les mois de manque marqués, le prix d'équilibre et le rendement d'équilibre comparés au prix que vous attendez, et le délai de récupération et le rendement simple d'un investissement que vous envisagez, avec votre décision et pourquoi.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits producteurs et agriculteurs commerciaux en croissance, gérants d'exploitation, jeunes agri-entrepreneurs, responsables de coopératives et agents de vulgarisation au Kenya, au Nigeria, au Ghana et en Afrique de l'Ouest francophone. La plupart cultivent le maïs, le manioc, le riz, le haricot, les légumes, le café ou le cacao, ou élèvent des vaches laitières, des chèvres, des porcs, de la volaille ou du poisson.",
    startingPoint: "Savent additionner, soustraire, multiplier et diviser avec la calculatrice du téléphone. Beaucoup tiennent quelques registres et savent à peu près ce qu'ils dépensent et gagnent ; certains ont suivi la leçon sur la marge brute dans \"Agrobusiness et gestion de l'exploitation agricole\". Peu connaissent leur coût par kg ou par litre, leur prix d'équilibre, ou savent juger si un équipement va se rembourser.",
    gap: "Les agriculteurs vendent souvent en dessous de ce que la production leur a coûté, manquent d'argent avant la récolte même dans une bonne année, ou achètent des équipements et des animaux qui ne rapportent jamais leur prix. Connaître le coût par unité, le point d'équilibre et le délai de récupération leur permet de refuser les mauvais prix, de planifier leur argent et de faire des investissements rentables, et donne aux prêteurs et aux acheteurs des chiffres fiables.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot d'argent est expliqué",
      "Appareils : la calculatrice d'un téléphone simple et un cahier suffisent ; un tableur sur téléphone est facultatif",
      "Temps : leçons de 5 à 6 minutes qui s'intègrent au travail de la ferme",
      "Argent : tous les chiffres sont des exemples ; les prix, les taux d'intérêt et les subventions changent et doivent venir de la zone de l'apprenant",
      "Pas de conseils de placement : les apprenants comparent les options et consultent un conseiller de confiance avant les grandes décisions"
    ],
    prerequisites: "Aucun, mais \"Agrobusiness et gestion de l'exploitation agricole\" (registres et marge brute) est une bonne première étape."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir de la liste des coûts d'une activité pour une saison et de sa production", action: "classer les coûts en fixes et variables et calculer le coût de production d'un kg, sac, litre ou œuf", standard: "avec chaque coût dans le bon groupe et le coût par unité juste à l'unité monétaire près" },
    { id: "O2", condition: "Avec un cahier ou un tableur sur téléphone", action: "noter toutes les dépenses de la ferme pendant un mois par date, catégorie et activité, et en faire le total par catégorie", standard: "sans jour manquant et avec des totaux qui correspondent à vos relevés d'espèces et de mobile money" },
    { id: "O3", condition: "À partir de l'argent attendu en entrée et en sortie pour chaque mois d'une année", action: "construire un plan de trésorerie mensuel avec soldes de début et de fin de mois et marquer les mois de manque", standard: "avec chaque solde de fin reporté au mois suivant et au moins une action prévue pour chaque mois de manque" },
    { id: "O4", condition: "À partir des coûts totaux, de la production attendue et du prix d'un acheteur", action: "calculer le prix d'équilibre et le rendement d'équilibre et décider si l'offre couvre vos coûts", standard: "justes à l'unité monétaire ou à l'unité de production près" },
    { id: "O5", condition: "À partir du coût d'un investissement et des revenus et coûts supplémentaires qu'il devrait apporter", action: "calculer son délai de récupération et son rendement simple et écrire une décision avec vos raisons", standard: "avec des chiffres justes et au moins deux risques vérifiés (durée de vie, coût du prêt ou récoltes plus faibles)" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Connaître vos coûts",
      lessons: [
        {
          title: "Coûts fixes et coûts variables",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classer les coûts d'une activité en fixes et variables, y compris le coût annuel des outils et des bâtiments.",
          text: [
            "Les coûts variables montent ou baissent selon ce que vous produisez : semences, engrais, aliments pour animaux, main-d'œuvre journalière, soins vétérinaires, sacs, carburant et transport. Si vous semez la moitié du terrain ou élevez la moitié des volailles, ces coûts baissent.",
            "Les coûts fixes restent à peu près les mêmes quelle que soit la production de la saison : location de la terre, salaire d'un ouvrier permanent, autorisation d'eau, assurance, et usure des outils, pompes, hangars et clôtures. Cette usure s'appelle l'amortissement. Une façon simple de le calculer : (prix payé - valeur restante à la fin) / nombre d'années d'utilisation. Exemple (chiffres inventés en shillings kényans) : un pulvérisateur à dos coûte 6 000, dure 5 ans et ne vaut plus rien à la fin, il coûte donc 1 200 par an à la ferme.",
            "Si un outil ou un bâtiment sert à plusieurs activités, partagez son coût annuel entre elles, par exemple selon la surface ou le temps utilisé par chacune. Comptez aussi le travail de votre famille, au prix local de la journée, pour voir le vrai coût de votre temps."
          ],
          steps: ["Choisissez une activité, comme le maïs, le tilapia ou une vache laitière.", "Listez tous ses coûts pour une saison ou une année.", "Marquez chacun V (variable : change selon la production) ou F (fixe : reste le même).", "Pour les outils, pompes et bâtiments, calculez l'amortissement : (prix - valeur restante) / années d'utilisation.", "Partagez les coûts fixes entre les activités qui utilisent la même chose."],
          words: [["Coût variable", "un coût qui monte ou baisse selon ce que vous produisez, comme les semences ou les aliments."], ["Coût fixe", "un coût qui reste à peu près le même quelle que soit la production de la saison, comme la location de la terre."], ["Amortissement", "la part du prix d'un outil ou d'un bâtiment consommée chaque année par l'usure."], ["Activité", "une production de la ferme, comme le maïs, la volaille ou le lait."]],
          slides: [
            { title: "Coûts variables", bullets: ["Changent selon ce que vous produisez", "Semences, engrais, aliments, journaliers, vétérinaire, sacs, carburant", "Produisez moins et ils baissent"] },
            { title: "Coûts fixes", bullets: ["Restent à peu près les mêmes quelle que soit la production", "Location, salaires permanents, autorisations, assurance", "Usure des outils et des bâtiments"] },
            { title: "Amortissement", bullets: ["(Prix - valeur restante) / années d'utilisation", "Pulvérisateur 6 000 KES, 5 ans : 1 200 par an (exemple)", "Partagez-le entre les activités qui l'utilisent"] },
            { title: "N'oubliez pas", bullets: ["Le travail familial au prix local de la journée", "Petits coûts : sacs, crédit d'appel pour les acheteurs, transport"] }
          ],
          tryIt: "Choisissez une activité de votre ferme. Listez au moins huit coûts de la dernière saison, marquez chacun V ou F, et calculez l'amortissement annuel d'un outil ou d'un bâtiment que vous utilisez pour elle.",
          youCanNow: "classer les coûts d'une activité en fixes et variables et calculer le coût annuel de vos outils et bâtiments.",
          quickCheck: [
            { objective: "O1", q: "Lequel est un coût variable pour un élevage de volaille ?", options: ["L'usure annuelle du poulailler", "La location du terrain où se trouve le poulailler", "Les aliments des volailles", "Le salaire mensuel d'un ouvrier permanent"], answer: 2, why: "Les aliments montent et baissent selon le nombre de volailles, ils sont donc variables." },
            { objective: "O1", q: "Une pompe coûte 50 000, dure 10 ans et vaut 0 à la fin. Son amortissement est de :", options: ["5 000 par an", "50 000 par an", "500 par an", "10 000 par an"], answer: 0, why: "(50 000 - 0) / 10 ans = 5 000 par an." }
          ]
        },
        {
          title: "Ce que coûte la production d'un kg, d'un sac ou d'un litre",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calculer le coût de production d'un kg, sac, litre ou œuf pour une activité.",
          text: [
            "Coût par unité = coût total de la période / unités produites pendant cette période. Le coût total est la somme des coûts variables et de la part des coûts fixes qui revient à cette activité. L'unité est la façon dont vous vendez : un kg de tomates, un sac de 100 kg de maïs, un litre de lait, un plateau d'œufs, un kg de tilapia.",
            "Exemple (chiffres inventés en shillings kényans), une vache laitière pendant un mois : aliments 9 500, soins vétérinaires et insémination 1 000, main-d'œuvre 3 000, part des coûts fixes (étable, hache-paille, eau) 1 500. Total 15 000. La vache a donné 300 litres. Coût par litre = 15 000 / 300 = 50 shillings. Si l'acheteur de lait paie moins de 50, chaque litre fait perdre de l'argent.",
            "Exemple (chiffres inventés en nairas), un hectare de maïs au Nigeria : coûts variables 600 000, part des coûts fixes 150 000, total 750 000, récolte de 30 sacs de 100 kg. Coût par sac = 750 000 / 30 = 25 000, soit 250 nairas par kg. Refaites le calcul à chaque saison : quand la récolte baisse ou que les intrants coûtent plus cher, le coût par unité monte aussi."
          ],
          steps: ["Choisissez l'unité dans laquelle vous vendez : kg, sac, litre, œuf ou plateau.", "Additionnez les coûts variables de la période.", "Ajoutez la part des coûts fixes de cette activité.", "Comptez les unités produites pendant la même période.", "Coût par unité = coût total / unités produites.", "Comparez-le au prix que paient les acheteurs."],
          words: [["Coût par unité", "ce que vous coûte la production d'un kg, sac, litre ou œuf : le coût total divisé par les unités produites."], ["Unité", "la quantité dans laquelle vous vendez, comme un kg, un sac de 100 kg ou un litre."]],
          slides: [
            { title: "La formule", bullets: ["Coût par unité = coût total / unités produites", "Coût total = variables + part des fixes", "Utilisez l'unité dans laquelle vous vendez"] },
            { title: "Vache laitière, un mois (exemple en KES)", bullets: ["Aliments 9 500 + vétérinaire 1 000 + main-d'œuvre 3 000 + fixes 1 500 = 15 000", "300 litres : 15 000 / 300 = 50 par litre", "Un acheteur qui paie moins de 50 = une perte sur chaque litre"] },
            { title: "Maïs, un hectare (exemple en NGN)", bullets: ["Coût total 750 000 ; récolte 30 sacs", "750 000 / 30 = 25 000 par sac = 250 par kg"] },
            { title: "Refaites le calcul à chaque saison", bullets: ["Récolte plus faible = coût par unité plus élevé", "Intrants plus chers = coût par unité plus élevé"] }
          ],
          tryIt: "Reprenez les coûts de la leçon 1. Additionnez-les, divisez par les unités produites et écrivez votre coût par kg, sac, litre ou œuf. Écrivez ensuite à côté le dernier prix qu'un acheteur vous a proposé.",
          youCanNow: "calculer le coût de production d'une unité de ce que vous vendez et le comparer au prix qu'on vous propose.",
          quickCheck: [
            { objective: "O1", q: "Le coût total d'une parcelle de tomates est de 40 000 et elle a produit 800 kg. Quel est le coût par kg ?", options: ["800", "40", "500", "50"], answer: 3, why: "40 000 / 800 kg = 50 par kg." },
            { objective: "O1", q: "Votre récolte baisse mais vos coûts restent les mêmes. Que devient votre coût par unité ?", options: ["Il reste le même", "Il monte", "Il baisse", "Il tombe à zéro"], answer: 1, why: "Le même coût divisé par moins d'unités donne un coût plus élevé pour chaque unité." }
          ]
        },
        {
          title: "Un registre des dépenses facile à tenir",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mettre en place un registre des dépenses et noter chaque dépense de la ferme pendant un mois.",
          text: [
            "Un registre des dépenses est la liste de chaque paiement de la ferme, avec toujours les mêmes colonnes : date, ce que vous avez acheté, catégorie (semences, engrais, aliments, main-d'œuvre, vétérinaire, carburant, transport, réparations, location), quelle activité, F ou V, montant, mode de paiement (espèces ou mobile money) et si vous avez gardé le reçu.",
            "Notez chaque dépense le jour même. À la fin du mois, faites le total de chaque catégorie et de chaque activité. Vous verrez vite où va l'argent. Exemple (chiffres inventés en cedis ghanéens), un élevage de poules pondeuses sur un mois : aliments 4 200, main-d'œuvre 1 200, vétérinaire et vaccins 400, transport 300, réparations 150, total 6 250. Les aliments font les deux tiers du coût, c'est donc sur les aliments que les économies compteront le plus.",
            "Un cahier marche très bien. Sur téléphone, un tableur gratuit comme Google Sheets ou Microsoft Excel peut faire le total de chaque catégorie pour vous avec la formule SUMIF (dans Excel en français : SOMME.SI). Comparez le registre à vos relevés d'espèces et de mobile money chaque semaine, pour ne rien oublier."
          ],
          steps: ["Faites les colonnes : date, article, catégorie, activité, F ou V, montant, mode de paiement, reçu.", "Notez chaque dépense le jour même.", "Chaque semaine, comparez avec vos espèces et votre relevé de mobile money.", "En fin de mois, faites le total par catégorie et par activité.", "Trouvez la plus grosse catégorie et un moyen de la réduire."],
          words: [["Registre des dépenses", "la liste de chaque paiement de la ferme avec les mêmes colonnes, pour pouvoir faire le total par catégorie."], ["Catégorie", "un groupe de coûts semblables, comme les aliments, la main-d'œuvre ou le transport."], ["Reçu", "un papier ou un message qui prouve que vous avez payé."]],
          slides: [
            { title: "Toujours les mêmes colonnes", bullets: ["Date, article, catégorie, activité", "Fixe ou variable, montant", "Espèces ou mobile money, reçu gardé ?"] },
            { title: "Totaux de fin de mois (exemple en GHS, pondeuses)", bullets: ["Aliments 4 200, main-d'œuvre 1 200, vétérinaire 400", "Transport 300, réparations 150 : total 6 250", "Les aliments font les deux tiers : économisez d'abord là"] },
            { title: "Restez honnête", bullets: ["Notez le jour même", "Comparez chaque semaine avec le relevé de mobile money", "Cahier ou tableur sur téléphone (SUMIF / SOMME.SI)"] }
          ],
          tryIt: "Mettez en place votre registre aujourd'hui avec les huit colonnes. Notez toutes les dépenses de la ferme des sept derniers jours à l'aide de votre mémoire, de vos reçus et de votre relevé de mobile money, puis faites le total par catégorie.",
          youCanNow: "tenir un registre des dépenses, en faire le total par catégorie et par activité, et trouver où va votre argent.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi ajouter une colonne qui indique à quelle activité appartient chaque dépense ?", options: ["Pour voir ce que coûte vraiment chaque activité", "Parce que les banques l'exigent tous les jours", "Pour rallonger la liste", "Pour ne pas avoir besoin de reçus"], answer: 0, why: "Les totaux par activité servent directement au calcul du coût par unité de chacune." },
            { objective: "O2", q: "Le total de votre registre est plus bas que ce qui est sorti de votre portefeuille mobile money ce mois-ci. Que faites-vous ?", options: ["Vous l'ignorez ; les petits écarts ne comptent pas", "Vous effacez le registre et recommencez l'an prochain", "Vous parcourez le relevé et ajoutez les dépenses manquantes", "Vous ajoutez un chiffre inventé pour que ça corresponde"], answer: 2, why: "Le relevé montre ce que vous avez vraiment payé, il vous aide donc à trouver et ajouter ce qui manque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître vos coûts",
        questions: [
          { objective: "O1", q: "Lequel est un coût fixe pour une ferme de maïs ?", options: ["Les semences", "L'engrais", "Les journaliers pour le désherbage", "La location annuelle de la terre"], answer: 3, why: "La location reste la même quoi que vous semiez sur la terre, elle est donc fixe." },
          { objective: "O1", q: "Un hache-paille coûte 30 000, dure 6 ans et vaut 0 à la fin. Quel est son amortissement annuel ?", options: ["5 000", "6 000", "30 000", "180 000"], answer: 0, why: "(30 000 - 0) / 6 ans = 5 000 par an." },
          { objective: "O1", q: "Le coût total d'un élevage de porcs est de 90 000 et vous avez vendu 600 kg de viande. Quel est le coût par kg ?", options: ["600", "150", "90", "1 500"], answer: 1, why: "90 000 / 600 kg = 150 par kg." },
          { objective: "O2", q: "Quand faut-il noter une dépense dans le registre ?", options: ["À la fin de la saison", "Seulement quand vous avez un reçu", "Le jour même du paiement", "Seulement pour les gros paiements"], answer: 2, why: "Les notes du jour même sont complètes et exactes." },
          { objective: "O2", q: "Après un mois de suivi, les aliments font 65 % des coûts. Quelle est l'étape suivante la plus utile ?", options: ["Chercher d'abord à réduire le coût ou le gaspillage des aliments", "Arrêter le suivi puisque la réponse est claire", "Réduire d'abord la plus petite catégorie", "Acheter plus d'aliments pour avoir une remise, quel que soit le prix"], answer: 0, why: "C'est sur la plus grosse catégorie que les économies comptent le plus." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier et investir",
      lessons: [
        {
          title: "Un plan de trésorerie mensuel avec les soldes",
          objectives: ["O3"],
          minutes: 6,
          goal: "Construire un plan de trésorerie sur 12 mois avec soldes de début et de fin de mois et marquer les mois de manque.",
          text: [
            "Un plan de trésorerie montre, mois par mois, combien d'argent vous pensez avoir. Pour chaque mois : solde de début (l'argent avec lequel vous commencez) + entrées - sorties = solde de fin. Le solde de fin devient le solde de début du mois suivant.",
            "Exemple (chiffres inventés en cedis ghanéens), une ferme de maïs et de volaille. Mars : début 3 000 + entrées 500 - sorties 2 000 = fin 1 500. Avril : début 1 500 + entrées 500 - sorties 2 500 = fin -500. Un solde de fin négatif est un manque : vous ne pourrez pas tout payer ce mois-là si vous ne l'avez pas prévu.",
            "Pour chaque mois de manque, prévoyez une action avant qu'il arrive : épargner sur la dernière récolte, reporter un achat à un mois plus tard, vendre une partie de la production par étapes, ajouter une petite activité qui rapporte ce mois-là (œufs, légumes, poisson), obtenir un crédit en intrants, ou convenir à l'avance d'un petit prêt remboursé après la récolte. Mettez le plan à jour chaque mois avec ce qui s'est vraiment passé."
          ],
          steps: ["Faites 12 colonnes de mois et quatre lignes : début, entrées, sorties, fin.", "Mettez l'argent que vous avez aujourd'hui comme premier solde de début.", "Remplissez les entrées et sorties prévues pour chaque mois.", "Fin = début + entrées - sorties ; reportez-le au début du mois suivant.", "Entourez chaque solde de fin négatif.", "Écrivez une action pour chaque mois entouré et mettez à jour chaque mois."],
          words: [["Solde de début", "l'argent que vous avez au début d'un mois."], ["Solde de fin", "l'argent que vous pensez avoir à la fin d'un mois : début + entrées - sorties."], ["Manque", "un mois où les sorties dépassent l'argent que vous avez."]],
          slides: [
            { title: "Un seul calcul", bullets: ["Début + entrées - sorties = fin", "La fin devient le début du mois suivant"] },
            { title: "Exemple (GHS, inventé)", bullets: ["Mars : 3 000 + 500 - 2 000 = 1 500", "Avril : 1 500 + 500 - 2 500 = -500", "Négatif = manque : prévoyez-le dès maintenant"] },
            { title: "Combler un manque", bullets: ["Épargnez sur la récolte ; reportez un achat", "Vendez par étapes ; ajoutez une activité qui rapporte ce mois-là", "Crédit en intrants ou petit prêt convenu à l'avance"] },
            { title: "Gardez-le à jour", bullets: ["Notez ce qui s'est vraiment passé chaque mois", "Mettez à jour les mois suivants"] }
          ],
          tryIt: "Construisez votre plan de trésorerie sur 12 mois en partant de l'argent que vous avez aujourd'hui. Calculez chaque solde de fin, entourez les mois de manque et écrivez une action pour chacun.",
          youCanNow: "construire un plan de trésorerie mensuel avec des soldes cumulés, repérer tôt les mois de manque et prévoir quoi faire.",
          quickCheck: [
            { objective: "O3", q: "Solde de début 2 000, entrées 1 000, sorties 2 500. Quel est le solde de fin ?", options: ["5 500", "-500", "3 000", "500"], answer: 3, why: "2 000 + 1 000 - 2 500 = 500." },
            { objective: "O3", q: "Votre plan montre un manque en août. Quand faut-il prévoir quoi faire ?", options: ["Maintenant, des mois avant août", "En août, quand les factures arrivent", "Après la récolte", "Jamais ; ça s'arrangera tout seul"], answer: 0, why: "Prévoir tôt vous laisse le temps d'épargner, de reporter des achats ou d'obtenir un crédit à de bonnes conditions." }
          ]
        },
        {
          title: "Le prix et le rendement d'équilibre",
          objectives: ["O4"],
          minutes: 5,
          goal: "Calculer le prix d'équilibre et le rendement d'équilibre et s'en servir pour juger l'offre d'un acheteur.",
          text: [
            "Le point d'équilibre (ou seuil de rentabilité) est le point où les recettes couvrent juste le coût total : ni bénéfice ni perte. Prix d'équilibre = coût total / production attendue. C'est le prix le plus bas que vous pouvez accepter sans perdre d'argent. Rendement d'équilibre = coût total / prix attendu. C'est la plus petite récolte qui couvre vos coûts à ce prix.",
            "Exemple (chiffres inventés en nairas), l'hectare de maïs de la leçon 2 : coût total 750 000, récolte attendue 30 sacs. Prix d'équilibre = 750 000 / 30 = 25 000 par sac. Un acheteur propose 28 000 : vous gagnez 3 000 par sac, soit 90 000 sur 30 sacs. Rendement d'équilibre à 28 000 = 750 000 / 28 000 = 26,8 sacs, il vous faut donc au moins 27 sacs. Si la sécheresse fait tomber la récolte à 25 sacs, vous perdez de l'argent même à ce prix.",
            "Utilisez le point d'équilibre avant de semer (cette culture vaut-elle la peine aux prix probables ?) et quand un acheteur fait une offre (couvre-t-elle mes coûts ?). L'écart entre le prix attendu et votre prix d'équilibre est votre marge de sécurité : plus il est grand, mieux vous pouvez supporter une mauvaise saison ou une baisse des prix."
          ],
          steps: ["Faites le total des coûts de l'activité (variables + part des fixes).", "Prix d'équilibre = coût total / production attendue.", "Rendement d'équilibre = coût total / prix attendu.", "Comparez avec l'offre de l'acheteur et votre récolte probable.", "Écrivez votre marge de sécurité : prix attendu - prix d'équilibre."],
          words: [["Point d'équilibre", "le point où les recettes couvrent juste le coût total : ni bénéfice ni perte."], ["Prix d'équilibre", "le prix par unité le plus bas qui couvre vos coûts : coût total / production."], ["Rendement d'équilibre", "la plus petite récolte qui couvre vos coûts à un prix donné : coût total / prix."], ["Marge de sécurité", "de combien le prix ou la récolte peuvent baisser avant que vous fassiez une perte."]],
          slides: [
            { title: "Deux chiffres d'équilibre", bullets: ["Prix d'équilibre = coût total / production", "Rendement d'équilibre = coût total / prix"] },
            { title: "Exemple du maïs (NGN, inventé)", bullets: ["750 000 / 30 sacs = 25 000 par sac", "Offre de 28 000 : bénéfice de 3 000 par sac, 90 000 en tout", "Rendement d'équilibre à 28 000 : environ 27 sacs"] },
            { title: "Quand s'en servir", bullets: ["Avant de semer : est-ce que ça vaut la peine ?", "Quand un acheteur propose : est-ce que ça couvre les coûts ?", "Plus de marge de sécurité = plus de place pour une mauvaise saison"] }
          ],
          tryIt: "Prenez le coût total et la production attendue de votre activité. Calculez le prix d'équilibre et le rendement d'équilibre au prix d'aujourd'hui, et écrivez votre marge de sécurité. Accepteriez-vous la dernière offre reçue ?",
          youCanNow: "calculer le prix et le rendement d'équilibre d'une activité et vous en servir pour accepter ou refuser une offre.",
          quickCheck: [
            { objective: "O4", q: "Coût total 120 000, production attendue 40 sacs. Quel est le prix d'équilibre ?", options: ["4 000 par sac", "40 par sac", "3 000 par sac", "160 000 par sac"], answer: 2, why: "120 000 / 40 sacs = 3 000 par sac." },
            { objective: "O4", q: "Votre prix d'équilibre pour le lait est de 50 par litre. Un acheteur propose 45. Qu'est-ce que cela veut dire ?", options: ["Vous gagnez 5 sur chaque litre", "Vous perdez environ 5 sur chaque litre, sauf si vous réduisez les coûts ou trouvez un meilleur acheteur", "L'offre est juste parce qu'elle est proche", "Le point d'équilibre ne compte pas pour le lait"], answer: 1, why: "Un prix sous le point d'équilibre veut dire que chaque litre vendu fait perdre de l'argent." }
          ]
        },
        {
          title: "Juger un investissement : délai de récupération et rendement simple",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer le délai de récupération et le rendement simple d'un investissement et décider s'il a du sens.",
          text: [
            "Un investissement, c'est de l'argent dépensé aujourd'hui pour gagner plus plus tard : une pompe solaire, une serre, une chambre froide, une porcherie ou plus de vaches. Calculez d'abord le revenu net supplémentaire par an : l'argent en plus qu'il rapporte moins les frais de fonctionnement en plus (carburant, réparations, aliments, main-d'œuvre, pièces de rechange). Ensuite : délai de récupération = coût de l'investissement / revenu net supplémentaire par an. Rendement simple = revenu net supplémentaire par an / coût de l'investissement x 100.",
            "Exemple (chiffres inventés en shillings kényans), une pompe solaire qui permet une culture de tomates en saison sèche : coût 120 000 ; revenu en plus 55 000 par an moins coûts en plus 15 000 = 40 000 de revenu net supplémentaire. Récupération = 120 000 / 40 000 = 3 ans. Rendement simple = 40 000 / 120 000 x 100 = environ 33 % par an. Exemple (chiffres inventés en francs CFA), une serre au Sénégal : coût 3 000 000 ; revenu net supplémentaire 600 000 par an. Récupération = 5 ans ; rendement simple = 20 % par an.",
            "Vérifiez ensuite les risques. Va-t-il durer plus longtemps que le délai de récupération (le plastique de la serre et les pièces de la pompe s'usent) ? Si vous empruntez, le coût annuel du prêt est-il plus bas que le rendement, et pouvez-vous rembourser avant que l'équipement se soit remboursé ? Et si la récolte ou les prix sont 20 % plus bas que prévu ? Utilisez des chiffres prudents, demandez au fournisseur des agriculteurs qui l'utilisent déjà, et parlez à un conseiller de confiance avant d'acheter. Ce cours explique la méthode ; il ne vous dit pas quoi acheter."
          ],
          steps: ["Écrivez le coût complet : équipement, livraison, installation, formation.", "Estimez le revenu en plus par an avec des récoltes et des prix prudents.", "Retirez les frais de fonctionnement en plus pour obtenir le revenu net supplémentaire par an.", "Récupération = coût / revenu net supplémentaire par an.", "Rendement simple = revenu net supplémentaire / coût x 100.", "Vérifiez la durée de vie, le coût du prêt et un cas 20 % pire ; écrivez votre décision."],
          words: [["Investissement", "de l'argent dépensé aujourd'hui pour quelque chose qui devrait rapporter plus plus tard."], ["Revenu net supplémentaire", "l'argent en plus qu'un investissement rapporte chaque année moins ses frais de fonctionnement en plus."], ["Délai de récupération", "le nombre d'années qu'il faut au revenu net supplémentaire pour rembourser ce que vous avez dépensé : coût / revenu net supplémentaire par an."], ["Rendement simple", "le revenu net supplémentaire par an en pourcentage du coût."]],
          slides: [
            { title: "Deux chiffres pour juger un investissement", bullets: ["Récupération = coût / revenu net supplémentaire par an", "Rendement simple = revenu net supplémentaire / coût x 100", "Revenu net supplémentaire = revenu en plus - coûts en plus"] },
            { title: "Pompe solaire (exemple en KES)", bullets: ["Coût 120 000 ; revenu net supplémentaire 40 000 par an", "Récupération 3 ans ; rendement simple environ 33 %"] },
            { title: "Serre au Sénégal (exemple en XOF)", bullets: ["Coût 3 000 000 ; revenu net supplémentaire 600 000 par an", "Récupération 5 ans ; rendement simple 20 %"] },
            { title: "Vérifiez avant d'acheter", bullets: ["Dure-t-il plus longtemps que le délai de récupération ?", "Coût du prêt plus bas que le rendement ?", "Toujours rentable si récolte ou prix baissent de 20 % ?", "Parlez à des utilisateurs et à un conseiller de confiance"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Tâche finale : faites votre fiche de coûts et d'investissement. Pour une activité, mettez les coûts fixes et variables, le coût par unité, un mois de suivi des dépenses, un plan de trésorerie sur 12 mois avec les mois de manque marqués, le prix et le rendement d'équilibre, et le délai de récupération et le rendement simple d'un investissement, avec votre décision et pourquoi.",
          youCanNow: "juger si un investissement va se rembourser, avec le délai de récupération, le rendement simple et une vérification des risques.",
          quickCheck: [
            { objective: "O5", q: "Une chambre froide coûte 200 000 et ajoute 50 000 de revenu net supplémentaire par an. Quel est le délai de récupération ?", options: ["2 ans", "25 ans", "5 ans", "4 ans"], answer: 3, why: "200 000 / 50 000 = 4 ans." },
            { objective: "O5", q: "Un équipement se rembourse en 6 ans, mais le fournisseur dit qu'il dure environ 4 ans. Qu'est-ce que cela vous apprend ?", options: ["Il sera usé avant de se rembourser, c'est donc probablement une perte", "C'est un excellent investissement", "Le délai de récupération ne compte pas si l'équipement est neuf", "Vous devriez emprunter plus pour en acheter deux"], answer: 0, why: "Si l'équipement s'use avant d'être remboursé, son revenu en plus ne couvre jamais son coût." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier et investir",
        questions: [
          { objective: "O3", q: "Dans un plan de trésorerie, quel est le solde de début du mois suivant ?", options: ["Toujours zéro", "Le solde de fin de ce mois", "Les entrées du mois suivant", "Le bénéfice de l'année"], answer: 1, why: "Chaque mois commence avec l'argent avec lequel le mois précédent s'est terminé." },
          { objective: "O3", q: "Quelle est une action sensée pour un mois de manque que vous voyez venir ?", options: ["Attendre et espérer", "Vendre toute la récolte le premier jour", "Reporter un achat à plus tard ou épargner sur la récolte pour ce mois", "Prendre n'importe quel prêt proposé par SMS"], answer: 2, why: "Déplacer des dépenses ou épargner à l'avance comble l'écart sans emprunt risqué." },
          { objective: "O4", q: "Coût total 300 000 ; l'acheteur paie 6 000 par sac. Quel est le rendement d'équilibre ?", options: ["50 sacs", "60 sacs", "5 sacs", "1 800 sacs"], answer: 0, why: "300 000 / 6 000 = 50 sacs." },
          { objective: "O5", q: "Revenu net supplémentaire de 30 000 par an pour un investissement de 150 000. Quel est le rendement simple ?", options: ["5 %", "50 %", "30 %", "20 %"], answer: 3, why: "30 000 / 150 000 x 100 = 20 % par an." },
          { objective: "O5", q: "Comment calculer le revenu net supplémentaire d'une nouvelle pompe solaire ?", options: ["En comptant seulement le revenu en plus", "En retirant le prix de la pompe d'une récolte", "Revenu en plus qu'elle apporte moins ses frais de fonctionnement en plus", "En demandant au vendeur de vous dire le bénéfice"], answer: 2, why: "Les frais de fonctionnement, comme les réparations et la main-d'œuvre, réduisent ce que la pompe rapporte vraiment." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Comptabilité agricole et gestion des investissements",
    questions: [
      { objective: "O1", q: "Quel coût change selon ce que vous produisez ?", options: ["Un coût variable, comme les aliments", "Un coût fixe, comme la location de la terre", "L'amortissement d'un hangar", "Une autorisation d'eau"], answer: 0, why: "Les coûts variables montent et baissent avec la production." },
      { objective: "O1", q: "Une clôture a coûté 40 000, dure 8 ans et vaut 0 à la fin. Quel est son amortissement annuel ?", options: ["8 000", "320 000", "40 000", "5 000"], answer: 3, why: "(40 000 - 0) / 8 = 5 000 par an." },
      { objective: "O1", q: "Pourquoi compter le travail familial au prix local de la journée ?", options: ["Parce que les impôts l'exigent", "Pour voir le vrai coût de production de chaque unité", "Pour que la ferme paraisse plus pauvre", "Ce n'est pas nécessaire"], answer: 1, why: "Le temps de votre famille a de la valeur ; l'oublier cache le vrai coût." },
      { objective: "O1", q: "Le coût total d'un étang de tilapia est de 60 000 et vous avez récolté 300 kg. Quel est le coût par kg ?", options: ["300", "2 000", "200", "20"], answer: 2, why: "60 000 / 300 kg = 200 par kg." },
      { objective: "O1", q: "Les prix des intrants montent mais votre récolte reste la même. Votre coût par unité :", options: ["Monte", "Baisse", "Reste le même", "Ne peut pas être calculé"], answer: 0, why: "Un coût total plus grand divisé par le même nombre d'unités donne un coût par unité plus élevé." },
      { objective: "O2", q: "Quelles colonnes font un registre des dépenses utile ?", options: ["Seulement le montant", "Article et couleur", "Nom de l'acheteur et prix", "Date, article, catégorie, activité, F ou V, montant, mode de paiement, reçu"], answer: 3, why: "Ces colonnes permettent de faire le total des coûts par catégorie et par activité et de les vérifier." },
      { objective: "O2", q: "À quelle fréquence comparer votre registre à votre relevé de mobile money ?", options: ["Une fois par an", "Chaque semaine", "Jamais", "Seulement quand un prêteur le demande"], answer: 1, why: "Un contrôle chaque semaine rattrape les dépenses oubliées tant que vous vous en souvenez." },
      { objective: "O2", q: "Quelle formule de tableur peut additionner toutes les dépenses d'une catégorie ?", options: ["SUMIF (SOMME.SI)", "LEN (NBCAR)", "TODAY (AUJOURDHUI)", "UPPER (MAJUSCULE)"], answer: 0, why: "SUMIF additionne les montants qui remplissent une condition, comme la catégorie \"aliments\"." },
      { objective: "O3", q: "Le solde de fin se calcule ainsi :", options: ["Entrées - sorties seulement", "Solde de début x entrées", "Solde de début + entrées - sorties", "Sorties - solde de début"], answer: 2, why: "Vous partez du solde de début, ajoutez ce qui entre et retirez ce qui sort." },
      { objective: "O3", q: "Début 4 000, entrées 0, sorties 5 000. Que vous dit le solde de fin ?", options: ["Vous avez 9 000", "Vous aurez un manque de 1 000", "Il vous reste 1 000", "Rien d'utile"], answer: 1, why: "4 000 + 0 - 5 000 = -1 000, un manque." },
      { objective: "O3", q: "Qu'est-ce qui aide le plus pour un mois de manque avant la récolte ?", options: ["L'ignorer jusqu'à ce qu'il arrive", "Dépenser plus le mois d'avant", "Emprunter à un prêteur que vous n'avez pas vérifié", "Une petite activité qui rapporte ce mois-là, comme les œufs ou les légumes"], answer: 3, why: "Un revenu pendant la soudure comble l'écart sans dette risquée." },
      { objective: "O3", q: "Pourquoi mettre à jour le plan de trésorerie chaque mois ?", options: ["Pour suivre ce qui s'est vraiment passé et mieux voir les mois suivants", "Parce que la banque le modifie", "Pour que les chiffres paraissent plus gros", "Il ne faut pas le mettre à jour"], answer: 0, why: "Un plan qui suit la réalité vous prévient tôt des nouveaux écarts." },
      { objective: "O4", q: "Le prix d'équilibre est :", options: ["Coût total / production attendue", "Production attendue / coût total", "Prix x production", "Recettes - coût total"], answer: 0, why: "Diviser le coût total par les unités attendues donne le prix le plus bas qui couvre les coûts." },
      { objective: "O4", q: "Coût total 200 000 ; production attendue 50 sacs. Un acheteur propose 3 500 par sac. Du point de vue des coûts, faut-il accepter ?", options: ["Oui, 3 500 couvre le coût", "Oui, toute offre est bonne", "Non, le prix d'équilibre est de 4 000 par sac", "On ne peut pas savoir"], answer: 2, why: "200 000 / 50 = 4 000 par sac, donc à 3 500 vous perdez 500 par sac." },
      { objective: "O4", q: "Le rendement d'équilibre vous indique :", options: ["Le meilleur prix possible", "La plus petite récolte qui couvre vos coûts à un prix donné", "La quantité d'engrais à utiliser", "Votre bénéfice de l'année"], answer: 1, why: "C'est le coût total divisé par le prix : la récolte qu'il vous faut pour ne pas perdre." },
      { objective: "O4", q: "Prix attendu 30 000 par sac, prix d'équilibre 25 000 par sac. Votre marge de sécurité est de :", options: ["55 000 par sac", "25 000 par sac", "30 000 par sac", "5 000 par sac"], answer: 3, why: "30 000 - 25 000 = 5 000 par sac avant de faire une perte." },
      { objective: "O5", q: "Le délai de récupération est :", options: ["Coût de l'investissement / revenu net supplémentaire par an", "Revenu net supplémentaire / coût x 100", "Intérêts du prêt x années", "Coût - revenu annuel"], answer: 0, why: "Il montre combien d'années de revenu net supplémentaire remboursent le coût." },
      { objective: "O5", q: "Trois vaches laitières de plus coûtent 450 000 et ajoutent 150 000 de revenu net supplémentaire par an. Quel est le rendement simple ?", options: ["3 %", "15 %", "33 %", "300 %"], answer: 2, why: "150 000 / 450 000 x 100 = environ 33 % par an." },
      { objective: "O5", q: "Vous emprunteriez pour une serre. Quelle vérification compte le plus ?", options: ["La couleur de la serre", "Si le coût annuel du prêt est plus bas que le rendement et si les remboursements tiennent dans votre trésorerie", "Si les voisins en ont une", "Rien, si le vendeur est aimable"], answer: 1, why: "Un prêt qui coûte plus que le rendement, ou que vous ne pouvez pas rembourser à temps, transforme l'investissement en perte." },
      { objective: "O5", q: "Un fournisseur promet qu'une pompe va doubler votre revenu. Que faire ?", options: ["L'acheter tout de suite", "Prendre le chiffre du fournisseur comme estimation", "Verser un acompte avant de poser des questions", "Utiliser des chiffres prudents, parler à des agriculteurs qui l'utilisent et consulter un conseiller de confiance"], answer: 3, why: "Des chiffres prudents et l'expérience de vrais utilisateurs vous protègent des promesses trop optimistes des vendeurs." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie de la fiche et vérifiez-la de nouveau.",
    criteria: [
      { name: "Coûts classés et coût par unité", objective: "O1", notYet: "Des coûts manquent ou sont mélangés, ou le coût par unité est faux ou absent.", meets: "Chaque coût est marqué fixe ou variable, l'amortissement est inclus et le coût par unité est juste.", exceeds: "Les coûts fixes sont partagés équitablement entre les activités et le travail familial est compté au prix local de la journée." },
      { name: "Registre des dépenses", objective: "O2", notYet: "Moins de la moitié des jours sont notés, ou il n'y a pas de totaux par catégorie.", meets: "Un mois de dépenses avec toutes les colonnes, totalisé par catégorie et par activité, qui correspond aux espèces et au mobile money.", exceeds: "Indique aussi la plus grosse catégorie et un moyen réaliste de la réduire." },
      { name: "Plan de trésorerie", objective: "O3", notYet: "Des mois manquent ou les soldes de fin ne sont pas reportés.", meets: "Douze mois avec des soldes de début et de fin justes, les mois de manque entourés et une action pour chacun.", exceeds: "Les actions sont datées et chiffrées, et le plan a été mis à jour avec un vrai mois." },
      { name: "Point d'équilibre", objective: "O4", notYet: "Le prix ou le rendement d'équilibre manque ou est faux.", meets: "Le prix et le rendement d'équilibre sont justes et comparés au prix et à la récolte attendus.", exceeds: "Montre aussi la marge de sécurité et ce qui se passe si la récolte baisse de 20 %." },
      { name: "Décision d'investissement", objective: "O5", notYet: "Pas de délai de récupération ni de rendement, ou la décision n'a pas de raisons.", meets: "Le délai de récupération et le rendement simple sont justes et la décision vérifie au moins deux risques.", exceeds: "Inclut un cas 20 % pire, la durée de vie de l'équipement et le coût de tout prêt, avec un oui, un non ou un attendre clair." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent Atteint ou Dépasse sur toutes les lignes de la grille pour la fiche de coûts et d'investissement",
      "Apprenants qui tiennent encore un registre des dépenses 30 jours plus tard (enquête de suivi)",
      "Apprenants qui disent avoir refusé un prix en dessous de leur prix d'équilibre ou changé une vente à cause de lui",
      "Apprenants qui disent avoir reporté, modifié ou pris une décision d'investissement à l'aide du délai de récupération et du rendement simple",
      "Les coopératives ou prêteurs partenaires signalent que plus de membres apportent des chiffres de coûts et de trésorerie aux discussions de prêt ou de contrat"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou un téléphone avec une application de tableur gratuite (Google Sheets ou Microsoft Excel)",
      "La calculatrice du téléphone",
      "Les coûts, reçus et relevés de mobile money de l'apprenant pour une activité, ou les chiffres d'exemple du cours",
      "Environ 75 minutes en tout, en courtes séances, plus un mois de suivi des dépenses pour la tâche finale"
    ],
    facilitatorNotes: [
      "Dans un groupe d'agriculteurs ou une séance de vulgarisation : faites le test de départ ensemble, puis un chapitre par séance, avec les tâches \"Essayez maintenant\" faites en binômes.",
      "Apportez un budget d'activité réel ou d'exemple pour que les apprenants sans registres puissent aussi s'exercer ; veillez à ce que chacun vérifie les calculs sur une calculatrice.",
      "Rappelez aux apprenants que tous les chiffres du cours sont des exemples ; demandez-leur d'utiliser les prix de leur propre marché et de leurs fournisseurs.",
      "Ne recommandez pas d'équipement, de prêteur ou de fournisseur précis ; demandez aux apprenants de comparer les offres et de parler à un conseiller de confiance.",
      "Demandez aux apprenants de commencer le registre des dépenses après la leçon 3 pour avoir un mois complet pour la tâche finale ; évaluez la fiche avec la grille et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
