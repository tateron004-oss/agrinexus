"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-risk-management.js). See scripts/koachlearn-courses/README.md, "Translations".

const KAMIS = { name: "Système d'information sur les marchés agricoles du Kenya (KAMIS), ministère de l'Agriculture : prix des marchés", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "Bureau national de la statistique du Nigeria (NBS) : rapport mensuel Selected Food Prices Watch et inflation", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 mars 2026) : la Côte d'Ivoire fixe le prix bord champ du cacao de la campagne intermédiaire à 1 200 FCFA/kg", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Université Purdue : sacs hermétiques Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Bourse des matières premières du Nigeria (NCX) : qui sommes-nous (agréée par la Securities and Exchange Commission)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Bourse des matières premières du Ghana (GCX), site officiel", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline : la Bourse des matières premières du Ghana réalise sa première transaction électronique (contrats au comptant sur le maïs, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa : assurance indicielle météo (intermédiaire d'assurance agréé)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI : assurance du bétail fondée sur un indice (IBLI) et le Programme d'assurance du bétail du Kenya (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI : Des yeux dans le ciel : le gouvernement kényan assure le bétail des éleveurs pastoraux grâce aux images satellite", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Sénégal", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Banque centrale des États de l'Afrique de l'Ouest : principaux indicateurs, dont l'inflation", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Banque centrale du Kenya (inflation et établissements agréés)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenya : liste des SACCO de dépôt agréées", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-fr",
  lang: "fr",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Gestion des risques agricoles : prix, météo et assurance",
  skills: "Classer les risques de la ferme dans un registre des risques, Suivre les prix et lire les tendances du marché, Répartir le risque par la diversification, la vente échelonnée et le stockage, Juger les contrats à terme et la couverture, Vérifier une offre d'assurance indicielle, Protéger son épargne contre l'inflation",
  outcome: "lister et classer les risques de votre ferme, suivre les prix et lire leur tendance, décider quand le stockage et la vente échelonnée sont rentables, vérifier un contrat à prix fixe et une offre d'assurance indicielle avant de signer, et mieux protéger votre épargne contre l'inflation, le tout écrit dans un plan de gestion des risques d'une page.",
  about: [
    "Ce cours s'adresse aux petits producteurs et aux agriculteurs commerciaux en croissance, aux éleveurs, aux jeunes agri-entrepreneurs, aux responsables de coopératives et aux agents de vulgarisation du Kenya, du Nigeria, du Ghana, du Sénégal, de la Côte d'Ivoire et de toute l'Afrique. Le mauvais temps, la baisse des prix, les animaux malades et la hausse des coûts peuvent effacer le travail d'une année. Vous ne pouvez pas supprimer le risque, mais vous pouvez le voir venir, le répartir et en transférer une partie à d'autres.",
    "Le chapitre 1 porte sur voir et répartir le risque : les types de risques agricoles et le registre des risques, les variations de prix et les tendances du marché, et la répartition du risque par la diversification, la vente échelonnée et le stockage. Le chapitre 2 porte sur le transfert du risque et la protection de votre argent : les contrats à terme et à prix fixe et ce que veut dire la couverture sur une bourse des matières premières, l'assurance indicielle des cultures et du bétail, et l'inflation et l'épargne.",
    "Ce cours explique comment fonctionnent les contrats, les bourses, l'assurance et l'épargne, et leurs risques. Il ne donne pas de conseils de placement et ne recommande pas de faire des opérations sur une bourse. Lisez entièrement chaque contrat et chaque police, vérifiez que la société est agréée, et demandez conseil à une personne de confiance, comme votre coopérative, votre agent de vulgarisation ou un juriste, avant de signer. Les montants sont des exemples, sauf quand une source est donnée."
  ],
  finalTask: "Écrivez un plan de gestion des risques d'une page pour votre ferme (ou une ferme d'exemple) : vos cinq principaux risques classés par probabilité et impact, avec une action pour chacun ; un relevé de prix sur quatre semaines pour votre culture ou votre élevage principal, d'au moins deux sources, avec la tendance que vous voyez ; un plan de vente qui dit combien vous vendrez à la récolte et combien vous stockerez, avec le prix d'équilibre du stockage ; les questions que vous poserez avant de signer un contrat à prix fixe ou d'acheter une assurance indicielle ; et comment vous protégerez mieux votre épargne contre l'inflation.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits producteurs et agriculteurs commerciaux en croissance, éleveurs pastoraux, jeunes agri-entrepreneurs, responsables de coopératives et agents de vulgarisation au Kenya, au Nigeria, au Ghana et en Afrique de l'Ouest francophone, qui cultivent le maïs, le riz, le sorgho, le haricot, l'arachide, la tomate, le café et le cacao, ou élèvent des bovins, des chèvres, des porcs, de la volaille ou du poisson.",
    startingPoint: "Savent par expérience que la météo, les prix et les maladies peuvent ruiner une saison. La plupart vendent à la récolte au premier acheteur, gardent leur épargne en espèces, en animaux ou en grains, et n'ont jamais lu de police d'assurance ni de contrat à prix fixe. Certains ont entendu parler des bourses des matières premières ou de l'assurance indicielle, mais ne savent pas comment elles fonctionnent.",
    gap: "Sans plan, une sécheresse, un effondrement des prix ou une épidémie peut obliger les agriculteurs à vendre animaux et terres, à emprunter à un coût élevé ou à quitter l'agriculture. Les agriculteurs qui suivent les prix, répartissent le risque, lisent les conditions des contrats et des assurances, et protègent leur épargne se relèvent plus vite et gagnent la confiance des acheteurs et des prêteurs.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de finance est expliqué",
      "Appareils : un téléphone simple pour les prix par SMS, radio ou appel ; un cahier pour le relevé de prix",
      "Temps : leçons de 5 à 6 minutes qui s'intègrent au travail de la ferme",
      "Les assurances, les bourses et les programmes varient selon les pays et changent ; les apprenants vérifient l'offre actuelle et l'autorité de régulation",
      "Pas de conseils de placement ni de recommandation de faire des opérations ; les apprenants consultent un conseiller de confiance avant de signer quoi que ce soit"
    ],
    prerequisites: "Aucun. \"Agrobusiness et gestion de l'exploitation agricole\" et \"Comptabilité agricole et gestion des investissements\" (prix d'équilibre) aident pour les calculs."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "En pensant à votre propre ferme et à votre foyer", action: "lister les principaux risques que vous courez et les classer dans un registre des risques selon leur probabilité et les dégâts qu'ils feraient", standard: "avec au moins un risque de chaque type (production, marché, argent, règles et personnes) et une action pour chacun des cinq premiers" },
    { id: "O2", condition: "Pour votre culture ou votre élevage principal, pendant quatre semaines", action: "noter les prix chaque semaine à partir d'au moins deux sources, dont un service officiel d'information sur les marchés quand il existe, et décrire la tendance", standard: "avec le même produit, la même qualité et la même unité chaque semaine" },
    { id: "O3", condition: "À partir d'une récolte, du prix du jour, d'un prix attendu plus tard et des coûts de stockage", action: "calculer le prix d'équilibre du stockage et écrire un plan pour vendre par étapes et répartir le risque", standard: "avec des chiffres justes et les besoins d'argent à la récolte couverts" },
    { id: "O4", condition: "À partir d'une offre de contrat à terme ou à prix fixe", action: "lister les clauses à vérifier et expliquer ce que vous gagnez et ce que vous abandonnez, y compris le fonctionnement de la couverture sur une bourse des matières premières", standard: "en citant au moins cinq clauses ainsi qu'un gain et un risque" },
    { id: "O5", condition: "À partir d'une offre d'assurance indicielle des cultures ou du bétail", action: "vérifier l'indice, le seuil de déclenchement, la prime, le risque de base et l'agrément de l'assureur", standard: "avant de payer, en notant la réponse à chaque point" },
    { id: "O6", condition: "À partir de votre épargne et du taux d'inflation actuel", action: "comparer au moins trois façons de garder votre épargne et choisir une combinaison qui la protège de l'inflation et du vol", standard: "en citant un risque pour chaque façon et en vérifiant que toute SACCO, banque ou institution de microfinance est agréée" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Voir et répartir le risque",
      lessons: [
        {
          title: "Les types de risques agricoles et le registre des risques",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister les principaux risques de votre ferme et les classer dans un registre des risques simple.",
          text: [
            "Les risques agricoles sont de cinq types. Risques de production : sécheresse, inondations, ravageurs comme la chenille légionnaire d'automne, maladies des cultures et des animaux, vol. Risques de marché : baisse des prix, acheteurs qui ne paient pas ou ne viennent pas chercher, hausse du prix des intrants. Risques d'argent : dettes que vous ne pouvez pas rembourser, perte d'épargne, inflation, taux de change pour les exportations comme le café et le cacao. Risques liés aux règles : nouvelles taxes, interdictions d'exporter, changements des règles foncières ou des marchés. Risques liés aux personnes : maladie, accident ou décès dans la famille, ou perte d'un ouvrier clé.",
            "Un registre des risques est un tableau avec une ligne par risque. Pour chacun, notez sa probabilité (1 faible, 2 moyenne, 3 forte) et les dégâts qu'il ferait (1 petits, 2 moyens, 3 grands). Multipliez les deux pour obtenir une note de 1 à 9. Les notes les plus hautes passent en premier.",
            "Pour chaque risque principal, choisissez une action : l'éviter (ne pas planter de tomates pendant le mois le plus pluvieux), le réduire (semences tolérantes à la sécheresse, vaccins selon les conseils du vétérinaire, stockage), le partager ou le transférer (assurance, contrat, coopérative), ou l'accepter et garder une épargne pour y faire face. Revoyez le registre avant chaque saison."
          ],
          steps: ["Listez des risques de chaque type : production, marché, argent, règles, personnes.", "Notez la probabilité de chacun : 1, 2 ou 3.", "Notez les dégâts que ferait chacun : 1, 2 ou 3.", "Multipliez les notes et classez les risques.", "Pour les cinq premiers, choisissez éviter, réduire, partager ou accepter, et une action.", "Revoyez le registre avant chaque saison."],
          words: [["Risque", "quelque chose qui peut arriver et qui nuirait à votre ferme ou à votre revenu."], ["Registre des risques", "un tableau qui liste vos risques, leur probabilité, leurs dégâts possibles et ce que vous allez faire."], ["Probabilité", "la chance qu'une chose arrive."], ["Impact", "les dégâts que ferait une chose si elle arrivait."]],
          slides: [
            { title: "Cinq types de risques agricoles", bullets: ["Production : météo, ravageurs, maladies, vol", "Marché : prix, acheteurs, coût des intrants", "Risques d'argent, de règles et de personnes"] },
            { title: "Notez chaque risque", bullets: ["Probabilité 1-3 x impact 1-3 = note de 1 à 9", "Les notes les plus hautes d'abord"] },
            { title: "Quatre façons de réagir", bullets: ["L'éviter", "Le réduire", "Le partager ou le transférer : assurance, contrats, groupes", "L'accepter et garder une épargne pour y faire face"] }
          ],
          tryIt: "Écrivez un registre des risques pour votre ferme avec au moins huit risques couvrant les cinq types. Notez chacun, classez-les, et écrivez une action (éviter, réduire, partager ou accepter) pour les cinq premiers.",
          youCanNow: "lister les risques de votre ferme, les classer et choisir une action pour les plus graves.",
          quickCheck: [
            { objective: "O1", q: "Le prix du maïs baisse de moitié à la récolte. De quel type de risque s'agit-il ?", options: ["Un risque de production", "Un risque lié aux personnes", "Un risque de marché", "Un risque lié aux règles"], answer: 2, why: "Les variations de prix sont des risques de marché." },
            { objective: "O1", q: "Un risque a une probabilité de 3 et un impact de 2. Quelle est sa note ?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Les variations de prix et la lecture des tendances du marché",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tenir un relevé de prix chaque semaine à partir d'au moins deux sources et décrire la tendance.",
          text: [
            "Les prix des cultures et des animaux montent et baissent selon la saison, la météo, les importations et exportations, le coût du carburant et la demande. Beaucoup de produits de base sont au plus bas à la récolte, quand tout le monde vend, et plus chers pendant les mois qui précèdent la récolte suivante. Même un prix fixé par l'État peut beaucoup changer d'une saison à l'autre : en Côte d'Ivoire, le prix bord champ garanti du cacao était de 2 800 francs CFA le kg pour la campagne principale 2025-2026, et l'État l'a fixé à 1 200 le kg pour la campagne intermédiaire à partir de mars 2026, après la baisse des cours mondiaux du cacao.",
            "Utilisez les services officiels d'information sur les marchés là où ils existent. Au Kenya, le KAMIS du ministère de l'Agriculture publie les prix des marchés. Au Nigeria, le Bureau national de la statistique (NBS) publie un rapport mensuel des prix alimentaires par État. Au Ghana, la Bourse des matières premières du Ghana publie les prix de ses transactions. Ajoutez les bulletins de marché à la radio, votre coopérative et au moins deux acheteurs.",
            "Tenez un relevé de prix : chaque semaine, la date, le marché ou la source, le produit, la qualité et l'unité (par exemple un sac de 90 kg de maïs sec), et le prix. Après quatre semaines ou plus, regardez la direction : en hausse, en baisse ou stable. Comparez avec les mêmes mois de l'an dernier si vous pouvez. Une tendance est un repère, pas une promesse : les prix peuvent tourner vite."
          ],
          steps: ["Choisissez votre produit principal, sa qualité et son unité.", "Prenez au moins deux sources, dont un service officiel quand il existe.", "Chaque semaine, notez : date, source, produit, qualité, unité, prix.", "Après quatre semaines, marquez la direction : en hausse, en baisse ou stable.", "Comparez avec les mêmes mois de l'an dernier.", "Partagez le relevé avec votre groupe."],
          words: [["Service d'information sur les marchés", "un service qui collecte et diffuse les prix des marchés, par site web, SMS ou radio."], ["Tendance", "la direction générale des prix sur plusieurs semaines ou plusieurs mois."], ["Prix bord champ", "le prix payé à l'agriculteur à la ferme, avant le transport vers le marché."]],
          slides: [
            { title: "Pourquoi les prix varient", bullets: ["Saison, météo, importations et exportations", "Coût du carburant et demande", "Souvent au plus bas à la récolte"] },
            { title: "Même les prix fixés changent", bullets: ["Cacao en Côte d'Ivoire : 2 800 FCFA/kg, campagne principale 2025-26", "Fixé à 1 200 FCFA/kg à partir de mars 2026", "Après la baisse des cours mondiaux"] },
            { title: "Où trouver les prix", bullets: ["Kenya : KAMIS", "Nigeria : prix alimentaires mensuels du NBS", "Ghana : transactions de la Bourse ; radio ; acheteurs"] },
            { title: "Votre relevé de prix hebdomadaire", bullets: ["Date, source, produit, qualité, unité, prix", "Après 4 semaines : en hausse, en baisse ou stable ?", "Une tendance est un repère, pas une promesse"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Commencez aujourd'hui un relevé de prix pour votre culture ou votre élevage principal. Notez le prix de cette semaine à partir de deux sources, avec le produit, la qualité et l'unité, et mettez un rappel sur votre téléphone pour le même jour chaque semaine.",
          youCanNow: "tenir un relevé de prix hebdomadaire à partir de sources officielles et locales et décrire la tendance des prix.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi noter la qualité et l'unité avec chaque prix de votre relevé ?", options: ["Pour que le relevé ait l'air officiel", "Les acheteurs doivent le voir", "Ce n'est pas nécessaire", "Pour comparer la même chose chaque semaine"], answer: 3, why: "Le prix d'un sac de 50 kg de maïs humide ne se compare pas à celui d'un sac de 90 kg de maïs sec." },
            { objective: "O2", q: "Sur cinq semaines, le prix de la tomate sur un marché a été de 400, 420, 450, 470 et 500 la caisse. Quelle est la tendance ?", options: ["En baisse", "En hausse", "Stable", "On ne peut pas savoir"], answer: 1, why: "Chaque semaine, le prix est plus haut que la semaine d'avant." }
          ]
        },
        {
          title: "Répartir le risque : diversification, vente échelonnée et stockage",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculer si le stockage est rentable et écrire un plan pour vendre par étapes.",
          text: [
            "Diversifier, c'est ne pas mettre tous ses œufs dans le même panier : deux cultures ou plus avec des saisons ou des marchés différents, quelques chèvres ou poules, du poisson, des arbres, ou un revenu hors de la ferme. Quand une activité échoue, une autre peut encore rapporter. Ne vous dispersez pas au point de ne plus bien gérer aucune d'elles.",
            "La vente échelonnée, c'est vendre une partie de la récolte à différents moments au lieu de tout vendre d'un coup. Par exemple, vendez un tiers à la récolte pour payer l'école et les dettes, un tiers deux mois plus tard et un tiers quatre mois plus tard. Vous évitez de tout vendre au prix le plus bas, et vous évitez de tout parier sur un prix élevé qui ne viendra peut-être pas.",
            "Le stockage n'est rentable que si le prix plus tard couvre les coûts et les pertes du stockage. Prix d'équilibre du stockage = (prix à la récolte x sacs + coûts de stockage) / sacs que vous vendrez plus tard. Exemple (chiffres inventés en shillings kényans) : 10 sacs de maïs, prix à la récolte 3 000 le sac, coûts de stockage 3 000 pour quatre mois (sacs hermétiques, magasin, contrôles). Équilibre = (30 000 + 3 000) / 10 = 3 300 le sac. Si le prix atteint 4 200, vous gagnez ; s'il n'atteint que 3 200, vous perdez. Ne stockez que du grain propre et sec, dans des sacs hermétiques ou un entrepôt certifié, et contrôlez-le contre les insectes et les moisissures."
          ],
          steps: ["Listez ce que vous pourriez cultiver, élever ou gagner d'autre pour qu'un seul échec ne vous ruine pas.", "Calculez l'argent dont vous avez besoin à la récolte.", "Prévoyez de vendre à la récolte assez pour cet argent, et de stocker le reste pour le vendre par étapes.", "Équilibre du stockage = (prix à la récolte x sacs + coûts de stockage) / sacs.", "Comparez-le à la tendance des prix de votre relevé.", "Ne stockez que des produits propres et secs, en sécurité, et contrôlez-les."],
          words: [["Diversification", "répartir votre production et vos revenus sur plusieurs activités pour qu'un seul échec ne vous ruine pas."], ["Vente échelonnée", "vendre une récolte en plusieurs parts à différents moments au lieu de tout vendre d'un coup."], ["Prix d'équilibre du stockage", "le prix plus tard dont vous avez besoin pour couvrir le prix de récolte auquel vous avez renoncé plus les coûts de stockage."], ["Sac hermétique", "un sac de stockage étanche à l'air qui empêche les insectes de respirer, ce qui protège le grain stocké sans produits chimiques."]],
          slides: [
            { title: "Diversifiez", bullets: ["Cultures avec des saisons ou des marchés différents", "Petit élevage, poisson, arbres, revenu hors ferme", "Pas trop pour pouvoir bien les gérer"] },
            { title: "Vendez par étapes", bullets: ["Un tiers à la récolte pour vos besoins d'argent", "Un tiers après 2 mois, un tiers après 4", "Pas de pari tout ou rien sur le prix"] },
            { title: "Le stockage est-il rentable ? (exemple en KES)", bullets: ["(3 000 x 10 + 3 000) / 10 = 3 300 le sac", "Prix de 4 200 : gain ; prix de 3 200 : perte", "Comparez avec votre relevé de prix"] },
            { title: "Stockez en sécurité", bullets: ["Seulement du grain propre et sec", "Sacs hermétiques ou entrepôt certifié", "Contrôlez insectes et moisissures"] }
          ],
          sources: [PICS],
          tryIt: "Pour votre culture principale, écrivez combien de sacs ou de kg vous attendez, l'argent dont vous avez besoin à la récolte, et combien vous vendrez à la récolte, après deux mois et après quatre mois. Calculez le prix d'équilibre du stockage pour la part que vous stockerez.",
          youCanNow: "calculer si le stockage est rentable, prévoir une vente par étapes et répartir le risque sur plus d'une activité.",
          quickCheck: [
            { objective: "O3", q: "Prix à la récolte 5 000 le sac, 20 sacs, coûts de stockage 10 000. Quel est le prix d'équilibre du stockage ?", options: ["5 000", "10 500", "5 500", "500"], answer: 2, why: "(5 000 x 20 + 10 000) / 20 = 110 000 / 20 = 5 500 le sac." },
            { objective: "O3", q: "Quel est le principal avantage de la vente échelonnée ?", options: ["Vous évitez de tout vendre au prix le plus bas ou de tout parier sur un prix élevé", "Les acheteurs paient toujours plus pour les petites quantités", "Vous n'avez jamais besoin de stocker", "Elle supprime tout risque de prix"], answer: 0, why: "Vendre en plusieurs parts répartit le risque de prix sur plusieurs dates." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Voir et répartir le risque",
        questions: [
          { objective: "O1", q: "Lequel est un risque de production ?", options: ["Une nouvelle taxe à l'exportation", "Un acheteur qui paie en retard", "L'inflation", "La chenille légionnaire d'automne dans votre maïs"], answer: 3, why: "Les ravageurs et la météo touchent ce que vous produisez, ce sont donc des risques de production." },
          { objective: "O1", q: "Acheter une assurance indicielle contre la sécheresse, c'est quelle réponse à un risque ?", options: ["L'éviter", "Le partager ou le transférer", "L'accepter", "L'ignorer"], answer: 1, why: "L'assurance transfère une partie de la perte à l'assureur." },
          { objective: "O2", q: "Quel est un service officiel de prix des marchés au Kenya ?", options: ["KAMIS, du ministère de l'Agriculture", "Le statut WhatsApp d'un commerçant", "L'estimation d'un voisin", "Le reçu de l'an dernier"], answer: 0, why: "KAMIS est le système d'information sur les marchés du ministère de l'Agriculture." },
          { objective: "O3", q: "Prix à la récolte 2 000 le sac, 10 sacs, coûts de stockage 4 000. Le prix plus tard est de 2 300. Le stockage est-il rentable ?", options: ["Oui, car 2 300 est plus que 2 000", "Oui, le stockage est toujours rentable", "Non, l'équilibre est à 2 400, donc vous perdez", "On ne peut pas le calculer"], answer: 2, why: "(2 000 x 10 + 4 000) / 10 = 2 400 ; 2 300 est en dessous." },
          { objective: "O3", q: "Un agriculteur ne cultive que des tomates pour un seul acheteur. Qu'est-ce qui répartirait le risque ?", options: ["Planter plus de tomates pour le même acheteur", "Ajouter une culture d'une autre saison et trouver un deuxième acheteur", "Tout vendre le jour de la récolte", "Arrêter de tenir des registres"], answer: 1, why: "Une deuxième culture et un deuxième acheteur font qu'un seul échec n'emporte pas tout." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Transférer le risque et protéger votre argent",
      lessons: [
        {
          title: "Contrats à prix fixe, couverture et bourses des matières premières",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lister les clauses à vérifier dans un contrat à prix fixe et expliquer ce que veut dire la couverture.",
          text: [
            "Un contrat à terme ou à prix fixe est un accord passé aujourd'hui pour vendre une quantité et une qualité fixées, à un prix fixé, à une date future. Vous gagnez en certitude : vous connaissez votre prix avant la récolte, ce qui aide à planifier et à emprunter. Vous abandonnez quelque chose : si le prix du marché monte, vous recevez quand même le prix convenu. Si votre récolte échoue ou si vous vendez ailleurs (vente parallèle), vous pouvez rompre le contrat et devoir une pénalité. Avant de signer, vérifiez : le produit et la qualité, la quantité, le prix ou la façon de le fixer, la date et le lieu de livraison, qui paie le transport, les contrôles de qualité et le rejet, la date et le mode de paiement, et ce qui se passe si la récolte échoue ou si l'acheteur ne vient pas chercher.",
            "Se couvrir, c'est prendre une position qui gagne quand votre culture perd de la valeur, pour que les deux s'équilibrent. Sur une bourse des matières premières, les gros négociants et les transformateurs le font avec des contrats à terme standardisés (futures) : des contrats pour acheter ou vendre plus tard à un prix fixé aujourd'hui. Si les prix baissent, la position sur les futures gagne pendant que la culture rapporte moins ; si les prix montent, la position sur les futures perd pendant que la culture rapporte plus. Il faut un courtier, des dépôts appelés marge qui peuvent être exigés à court préavis, et du savoir-faire. On peut y perdre de l'argent et ce n'est pas à essayer sans formation et sans conseil.",
            "En Afrique, la Bourse des matières premières du Nigeria (NCX) est agréée par la Securities and Exchange Commission (commission des valeurs mobilières) du Nigeria et propose le négoce, la formation des prix, le stockage et le classement des produits. La Bourse des matières premières du Ghana (GCX), réglementée par la Securities and Exchange Commission du Ghana, a lancé en 2018 le négoce électronique au comptant du maïs et relie les agriculteurs à des entrepôts certifiés. La plupart des petits producteurs accèdent aux bourses par une coopérative, un collecteur ou un entrepôt certifié, sans faire eux-mêmes des opérations. Ce cours ne recommande pas de faire des opérations. Quiconque vous promet des profits sur le négoce de matières premières peut être un escroc : vérifiez auprès du régulateur des valeurs mobilières."
          ],
          steps: ["Lisez tout le contrat, à voix haute avec votre groupe si possible.", "Vérifiez le produit, la qualité, la quantité, le prix, la date et le lieu de livraison, et le transport.", "Vérifiez les contrôles de qualité, le rejet, la date et le mode de paiement.", "Demandez ce qui se passe si la récolte échoue ou si l'acheteur ne vient pas chercher.", "Comparez le prix fixe avec votre prix d'équilibre et votre relevé de prix.", "Demandez l'avis de votre coopérative, de votre agent de vulgarisation ou d'un juriste avant de signer."],
          words: [["Contrat à terme", "un accord passé aujourd'hui pour vendre une quantité fixée à un prix fixé à une date future."], ["Couverture", "prendre une position qui gagne quand votre culture perd de la valeur, pour que les pertes s'équilibrent."], ["Futures", "des contrats standardisés négociés sur une bourse pour acheter ou vendre un produit plus tard à un prix fixé aujourd'hui."], ["Bourse des matières premières", "un marché réglementé où acheteurs et vendeurs échangent des récoltes et d'autres produits selon des qualités et des règles convenues."], ["Vente parallèle", "vendre à quelqu'un d'autre un produit promis à un acheteur."]],
          slides: [
            { title: "Contrat à prix fixe", bullets: ["Quantité, qualité et prix fixés pour plus tard", "Gain : un prix connu pour planifier et emprunter", "Abandon : le surplus si les prix montent"] },
            { title: "Vérifiez chaque clause", bullets: ["Produit, qualité, quantité, prix", "Date et lieu de livraison, transport", "Contrôles de qualité, rejet, paiement", "Récolte ratée ; acheteur qui ne vient pas"] },
            { title: "Ce que veut dire la couverture", bullets: ["Une position qui gagne quand votre culture perd de la valeur", "Les futures demandent un courtier, une marge et du savoir-faire", "On peut y perdre de l'argent : pas pour les débutants"] },
            { title: "Les bourses en Afrique", bullets: ["Nigeria : NCX, agréée par la SEC", "Ghana : GCX, maïs au comptant depuis 2018", "La plupart des agriculteurs passent par des coopératives ou des entrepôts"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Prenez un contrat d'acheteur réel ou d'exemple. Écrivez chacune des huit clauses des étapes et ce que dit le contrat (ou \"absent\"). Écrivez ensuite une chose que vous gagnez et un risque que vous prenez si vous le signez.",
          youCanNow: "vérifier un contrat à prix fixe clause par clause et expliquer ce que veut dire la couverture sur une bourse des matières premières et pourquoi elle comporte des risques.",
          quickCheck: [
            { objective: "O4", q: "Vous signez un prix fixe de 30 000 le sac. À la livraison, le prix du marché est de 36 000. Combien recevez-vous ?", options: ["36 000 le sac", "33 000 le sac", "Rien", "30 000 le sac, le prix convenu"], answer: 3, why: "Un contrat à prix fixe paie le prix convenu même si le marché monte." },
            { objective: "O4", q: "Un inconnu propose de faire des opérations sur les futures pour vous avec des \"profits garantis\". Que faire ?", options: ["Refuser et vérifier la société auprès du régulateur des valeurs mobilières", "Envoyer un petit dépôt pour tester", "Donner votre code PIN de mobile money pour qu'il fasse les opérations", "Signer vite avant la fin de l'offre"], answer: 0, why: "Personne ne peut garantir des profits sur les marchés ; c'est un signe d'arnaque." }
          ]
        },
        {
          title: "L'assurance indicielle des cultures et du bétail",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier une offre d'assurance indicielle : son indice, son seuil de déclenchement, sa prime, son risque de base et l'agrément.",
          text: [
            "L'assurance classique envoie quelqu'un mesurer la perte dans votre ferme. L'assurance indicielle paie quand un indice franchit un niveau fixé, appelé seuil de déclenchement : par exemple quand la pluie mesurée par satellite ou par une station météo tombe sous la normale, quand le rendement moyen de votre zone baisse, ou quand les images satellite montrent que les pâturages se dessèchent. Personne ne vient voir votre champ, elle peut donc coûter moins cher et payer plus vite.",
            "Exemples : ACRE Africa, un intermédiaire d'assurance agréé basé au Kenya, travaille avec des assureurs locaux pour proposer des assurances indicielles météo, des assurances sur le rendement de zone et des assurances indicielles du bétail, souvent vendues par des groupes d'agriculteurs et payées par mobile money. Le gouvernement du Kenya gère le Programme d'assurance du bétail du Kenya (KLIP), lancé en 2015 avec l'assurance indicielle du bétail mise au point avec l'ILRI (Institut international de recherche sur l'élevage) : l'État paie la prime des éleveurs pastoraux vulnérables enregistrés, et les indemnités se déclenchent quand les images satellite montrent que les pâturages manquent, pour que les éleveurs reçoivent de l'argent et gardent leurs animaux en vie. Au Sénégal, la CNAAS (Compagnie Nationale d'Assurance Agricole du Sénégal) assure les cultures et le bétail et propose une assurance indicielle.",
            "Le gros point faible est le risque de base : l'indice peut ne pas correspondre à votre propre champ. Votre culture peut être détruite par une grêle locale alors que la pluie de la zone paraît normale, et aucune indemnité ne vient ; ou l'indice peut se déclencher alors que votre champ a bien produit. Avant de payer, demandez : quel risque est couvert, quel est l'indice et où est-il mesuré, quel est le seuil de déclenchement, quel est le montant de l'indemnité, quelle est la prime et la date limite pour souscrire, comment et quand elle paie, et si l'assureur est agréé (Kenya : Insurance Regulatory Authority ; Nigeria : NAICOM ; Ghana : National Insurance Commission ; pays de la zone franc CFA : la CIMA et la direction nationale des assurances)."
          ],
          steps: ["Demandez quel risque est couvert : sécheresse, excès de pluie, perte de rendement de la zone ou manque de pâturage.", "Demandez quel est l'indice et où il est mesuré.", "Demandez le seuil de déclenchement et le montant de l'indemnité.", "Demandez la prime, la date limite pour souscrire et comment les indemnités vous parviennent.", "Pensez au risque de base : l'indice correspondrait-il à votre champ ?", "Vérifiez que l'assureur ou l'agent est agréé par le régulateur des assurances."],
          words: [["Assurance indicielle", "une assurance qui paie quand un indice mesuré, comme la pluie ou le pâturage, franchit un niveau fixé, et non après une visite de votre ferme."], ["Seuil de déclenchement", "le niveau de l'indice qui oblige l'assureur à payer."], ["Prime", "le prix que vous payez pour être assuré."], ["Risque de base", "le risque que l'indice ne corresponde pas à ce qui s'est vraiment passé dans votre ferme."]],
          slides: [
            { title: "Comment marche l'assurance indicielle", bullets: ["Paie quand un indice franchit un seuil", "Pluie, rendement de zone ou pâturage vu par satellite", "Pas de visite du champ : moins cher et plus rapide"] },
            { title: "Exemples", bullets: ["ACRE Africa : indices météo, rendement de zone, bétail", "KLIP au Kenya : l'État paie la prime des éleveurs", "Sénégal : assurance des cultures et du bétail de la CNAAS"] },
            { title: "Risque de base", bullets: ["L'indice peut ne pas correspondre à votre champ", "Grêle locale : perte mais pas d'indemnité", "Demandez à quelle distance est le point de mesure"] },
            { title: "Demandez avant de payer", bullets: ["Risque, indice, seuil, indemnité", "Prime, date limite, mode de paiement", "Agréé ? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Demandez à votre coopérative, à votre vendeur d'intrants ou à votre agent de vulgarisation un produit d'assurance indicielle près de chez vous (ou prenez un exemple). Écrivez les réponses aux huit questions des étapes, et une façon dont le risque de base pourrait toucher votre ferme.",
          youCanNow: "vérifier une offre d'assurance indicielle (indice, seuil, prime, risque de base et agrément) avant de payer.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui déclenche le paiement d'une assurance indicielle ?", options: ["La visite d'un assureur dans votre champ", "L'indice qui franchit le seuil de déclenchement", "Votre demande d'indemnité", "Toute perte que vous déclarez"], answer: 1, why: "L'assurance indicielle paie selon l'indice mesuré, pas après une visite du champ." },
            { objective: "O5", q: "Votre maïs a été détruit par une grêle locale, mais l'indice de pluie de la zone est resté normal. Comment cela s'appelle-t-il ?", options: ["Une prime", "Un seuil de déclenchement", "Le risque de base", "La couverture"], answer: 2, why: "Le risque de base, c'est quand l'indice ne correspond pas à ce qui s'est passé dans votre ferme." }
          ]
        },
        {
          title: "L'inflation et la garde de votre épargne",
          objectives: ["O6"],
          minutes: 5,
          goal: "Comparer des façons de garder votre épargne et choisir une combinaison qui la protège de l'inflation et du vol.",
          text: [
            "L'inflation, c'est la hausse générale des prix : le même argent achète moins. Exemple : si les prix montent de 10 % en un an, 10 000 gardés dans une boîte à la maison n'achèteront plus que ce qu'achètent aujourd'hui environ 9 100. Trouvez le taux d'inflation actuel auprès de votre banque centrale ou de votre institut de statistique (Kenya : Banque centrale du Kenya ; Nigeria : Bureau national de la statistique ; pays de la zone franc CFA en Afrique de l'Ouest : BCEAO).",
            "Chaque façon d'épargner a un risque. Espèces à la maison : faciles à utiliser, mais elles perdent de la valeur avec l'inflation et peuvent être volées. Un groupe d'épargne ou une AVEC (VSLA) : crée l'habitude et peut faire un partage, mais dépend de registres honnêtes. Un compte dans une SACCO, une banque ou une institution de microfinance agréée : plus sûr et peut rapporter des intérêts, mais comparez les intérêts avec l'inflation et vérifiez les frais. Bétail : peut prendre de la valeur, mais peut mourir de sécheresse ou de maladie. Grain stocké : son prix peut monter, mais il peut s'abîmer ou son prix peut baisser. Acheter tôt les intrants clés : évite les hausses de prix, mais demande un stockage sûr.",
            "Répartissez votre épargne sur plus d'une façon. Gardez un fonds d'urgence que vous pouvez utiliser vite. Vérifiez que toute SACCO, banque ou institution de microfinance est agréée (au Kenya, la SASRA publie la liste des SACCO de dépôt agréées). Méfiez-vous beaucoup de tout système qui promet des gains élevés et rapides : c'est souvent une fraude. Cette leçon explique comment fonctionne l'épargne ; ce n'est pas un conseil de placement. Demandez conseil à une personne de confiance pour votre propre situation."
          ],
          steps: ["Trouvez le taux d'inflation actuel auprès de votre banque centrale ou de votre institut de statistique.", "Listez où se trouve votre épargne aujourd'hui : espèces, groupe, SACCO, banque, animaux, grain.", "Écrivez un risque pour chacun.", "Choisissez une combinaison d'au moins trois, avec un fonds d'urgence utilisable vite.", "Vérifiez que chaque SACCO, banque ou institution de microfinance est agréée.", "Refusez les systèmes qui promettent des gains élevés et rapides."],
          words: [["Inflation", "une hausse générale des prix : le même argent achète moins."], ["Intérêts", "l'argent qu'une banque ou une SACCO vous verse pour garder votre épargne, ou que vous payez pour emprunter."], ["Fonds d'urgence", "une épargne gardée pour les problèmes soudains, comme une maladie ou une récolte ratée, que vous pouvez utiliser vite."], ["AVEC (VSLA)", "association villageoise d'épargne et de crédit : un groupe qui épargne ensemble, prête à ses membres et partage l'épargne et les gains."]],
          slides: [
            { title: "L'inflation ronge les espèces", bullets: ["Prix en hausse de 10 % : 10 000 achètent ce qu'achètent environ 9 100 aujourd'hui", "Trouvez le taux : banque centrale ou institut de statistique"] },
            { title: "Chaque façon d'épargner a un risque", bullets: ["Espèces : inflation et vol", "Groupe, SACCO, banque : registres, frais, intérêts face à l'inflation", "Animaux et grain : maladie, pertes, prix"] },
            { title: "Protégez votre épargne", bullets: ["Répartissez-la sur au moins trois façons", "Gardez un fonds d'urgence accessible", "Vérifiez les agréments (Kenya : liste de la SASRA)", "Gains élevés et rapides ? Souvent une fraude"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Tâche finale : écrivez votre plan de gestion des risques d'une page : les cinq principaux risques avec leurs actions, un relevé de prix sur quatre semaines et sa tendance, votre plan de vente et de stockage avec le prix d'équilibre du stockage, vos questions pour un contrat et pour une assurance indicielle, et votre combinaison d'épargne contre l'inflation.",
          youCanNow: "protéger votre épargne de l'inflation avec une combinaison répartie et agréée, et réunir tous vos outils de gestion des risques dans un seul plan.",
          quickCheck: [
            { objective: "O6", q: "Les prix ont monté de 10 % cette année. Qu'est-il arrivé aux 10 000 gardés dans une boîte à la maison ?", options: ["Ils achètent moins qu'il y a un an", "Ils achètent plus qu'avant", "Ils sont devenus 11 000", "Rien n'a changé"], answer: 0, why: "Le même argent achète moins quand les prix montent." },
            { objective: "O6", q: "Un groupe promet de doubler votre épargne en trois mois. Que montre probablement cette offre ?", options: ["Une bonne SACCO", "Une offre bancaire normale", "Une aide de l'État", "Une fraude probable : les gains élevés et rapides sont un signal d'alarme"], answer: 3, why: "Les promesses de gains élevés et rapides sont un signe courant de fraude." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Transférer le risque et protéger votre argent",
        questions: [
          { objective: "O4", q: "Qu'abandonnez-vous quand vous signez un contrat à prix fixe ?", options: ["L'argent en plus si les prix du marché montent", "Votre terre", "Toutes vos autres cultures", "Rien du tout"], answer: 0, why: "Le prix est fixé, donc vous ne gagnez pas si le marché monte." },
          { objective: "O4", q: "Quel organisme agrée la Bourse des matières premières du Nigeria ?", options: ["L'Agence météorologique du Nigeria", "La Securities and Exchange Commission (commission des valeurs mobilières)", "La NAFDAC", "La Banque centrale du Kenya"], answer: 1, why: "La NCX indique qu'elle est agréée par la Securities and Exchange Commission." },
          { objective: "O5", q: "Sur quoi le KLIP du Kenya se base-t-il pour décider quand payer les éleveurs ?", options: ["La visite d'un vétérinaire dans chaque troupeau", "Le prix du bétail sur le marché", "Les images satellite qui montrent que les pâturages manquent", "Le nombre d'animaux vendus"], answer: 2, why: "Le KLIP est indiciel : les mesures satellite des pâturages déclenchent l'indemnité." },
          { objective: "O5", q: "Quelle question vérifie le risque de base ?", options: ["De quelle couleur est la police ?", "L'agent est-il rapide ?", "Qui d'autre l'a achetée ?", "Où l'indice est-il mesuré et à quelle distance de mon champ ?"], answer: 3, why: "Plus le point de mesure est loin, plus l'indice peut différer de votre champ." },
          { objective: "O6", q: "Quelle est une façon sensée de mieux protéger son épargne ?", options: ["La répartir entre des comptes agréés, un groupe et d'autres façons, avec un fonds d'urgence", "Garder tout l'argent dans une seule boîte", "Tout mettre dans le système qui promet le plus gros gain", "Tout prêter à un inconnu"], answer: 0, why: "Répartir l'épargne entre des endroits vérifiés limite les dégâts d'une seule perte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gestion des risques agricoles : prix, météo et assurance",
    questions: [
      { objective: "O1", q: "Une maladie dans la famille qui empêche le travail à la ferme est quel type de risque ?", options: ["Risque de marché", "Risque lié aux règles", "Risque lié aux personnes", "Risque de production"], answer: 2, why: "Les risques qui touchent les personnes qui font tourner la ferme sont des risques liés aux personnes." },
      { objective: "O1", q: "Une probabilité de 2 et un impact de 3 donnent une note de risque de :", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Choisir de ne pas planter de tomates pendant le mois le plus pluvieux, c'est quelle réponse ?", options: ["Le partager", "L'accepter", "L'ignorer", "L'éviter"], answer: 3, why: "Vous évitez le risque en ne le prenant pas." },
      { objective: "O1", q: "Quand faut-il revoir votre registre des risques ?", options: ["Jamais", "Avant chaque saison", "Seulement après une catastrophe", "Tous les dix ans"], answer: 1, why: "Les risques changent, alors revoyez-les avant les décisions de chaque saison." },
      { objective: "O2", q: "Les prix de beaucoup de produits de base sont en général au plus bas :", options: ["Juste avant les semis", "Pendant la soudure", "Juste après la récolte", "Ils ne changent jamais"], answer: 2, why: "À la récolte, beaucoup d'agriculteurs vendent en même temps, ce qui fait baisser les prix." },
      { objective: "O2", q: "Au Nigeria, quel organisme publie un rapport mensuel des prix alimentaires par État ?", options: ["Le Bureau national de la statistique", "L'Agence météorologique du Nigeria", "La NAFDAC", "La Securities and Exchange Commission"], answer: 0, why: "Le NBS publie chaque mois le Selected Food Prices Watch." },
      { objective: "O2", q: "Que montre le passage du prix du cacao en Côte d'Ivoire de 2 800 à 1 200 francs CFA le kg ?", options: ["Les prix fixés ne changent jamais", "Le cacao n'est pas risqué", "Seuls les négociants courent un risque de prix", "Même les prix fixés par l'État peuvent beaucoup changer d'une saison à l'autre"], answer: 3, why: "Le prix bord champ a été baissé après la chute des cours mondiaux du cacao." },
      { objective: "O2", q: "Une tendance des prix se décrit le mieux comme :", options: ["Une promesse du prix du mois prochain", "La direction générale des prix sur des semaines ou des mois", "L'offre d'un acheteur", "Le prix de l'État"], answer: 1, why: "Une tendance est un repère tiré des prix passés, pas une promesse." },
      { objective: "O3", q: "Diversifier, c'est :", options: ["Ne cultiver que votre meilleure culture", "Tout vendre à la récolte", "Répartir la production et les revenus sur plusieurs activités", "Emprunter davantage"], answer: 2, why: "Plusieurs activités font qu'un seul échec ne vous ruine pas." },
      { objective: "O3", q: "Prix à la récolte 4 000 le sac, 10 sacs, coûts de stockage 2 000. Quel est le prix d'équilibre du stockage ?", options: ["4 200", "4 000", "2 000", "6 000"], answer: 0, why: "(4 000 x 10 + 2 000) / 10 = 4 200 le sac." },
      { objective: "O3", q: "Avant de stocker du grain pour le vendre plus tard, vous devez d'abord :", options: ["Le stocker humide pour garder le poids", "Le mélanger avec le grain de l'an dernier", "Vendre à la récolte ce qu'il faut pour vos besoins d'argent et ne stocker que du grain propre et sec, en sécurité", "Tout stocker, même si vous avez besoin d'argent maintenant"], answer: 2, why: "Couvrir les besoins d'argent et ne stocker que du grain propre et sec évite les ventes forcées et les pertes." },
      { objective: "O4", q: "Un contrat à terme, c'est :", options: ["Un prêt d'une banque", "Un accord passé aujourd'hui pour vendre une quantité fixée à un prix fixé plus tard", "Une police d'assurance", "Un compte d'épargne"], answer: 1, why: "Il fixe aujourd'hui la quantité et le prix d'une vente future." },
      { objective: "O4", q: "Quelle clause un contrat à prix fixe doit-il couvrir ?", options: ["La culture préférée de l'acheteur", "Seulement la couleur des sacs", "La taille de votre famille", "Ce qui se passe si la récolte échoue ou si l'acheteur ne vient pas chercher"], answer: 3, why: "Ces cas décident qui supporte la perte quand les choses tournent mal." },
      { objective: "O4", q: "Pourquoi la couverture avec des futures n'est-elle pas pour les débutants ?", options: ["Elle demande un courtier, des dépôts de marge et du savoir-faire, et on peut y perdre de l'argent", "Elle est illégale en Afrique", "Elle ne marche que pour le cacao", "Elle rapporte toujours de l'argent"], answer: 0, why: "Les positions sur les futures peuvent perdre de l'argent et exiger des dépôts à court préavis." },
      { objective: "O4", q: "Comment la plupart des petits producteurs accèdent-ils à une bourse comme la GCX ?", options: ["En faisant des opérations sur les futures avec leur téléphone", "Par une coopérative, un collecteur ou un entrepôt certifié", "En allant à la bourse tous les jours", "Ils ne peuvent pas l'utiliser du tout"], answer: 1, why: "Les groupes et les entrepôts amènent les produits des agriculteurs à la bourse." },
      { objective: "O5", q: "L'assurance indicielle paie quand :", options: ["Vous déclarez une perte", "Un agent visite votre ferme", "L'indice mesuré franchit le seuil de déclenchement", "La prime est payée"], answer: 2, why: "Les indemnités suivent l'indice, pas une visite du champ." },
      { objective: "O5", q: "Dans le KLIP du Kenya, qui paie la prime des éleveurs pastoraux vulnérables enregistrés ?", options: ["Les éleveurs eux-mêmes", "L'acheteur de bétail", "La banque", "L'État"], answer: 3, why: "Le KLIP est un programme public qui achète la couverture pour eux." },
      { objective: "O5", q: "Avant d'acheter une assurance indicielle, vérifiez que l'assureur est agréé. Au Nigeria, le régulateur est :", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "La NAICOM, la Commission nationale des assurances, réglemente les assureurs au Nigeria." },
      { objective: "O6", q: "Où trouver le taux d'inflation actuel ?", options: ["Auprès d'un commerçant du marché", "Auprès de votre banque centrale ou de l'institut national de statistique", "Dans une publication sur les réseaux sociaux", "Auprès de l'agent d'assurance"], answer: 1, why: "Les banques centrales et les instituts de statistique publient les chiffres officiels de l'inflation." },
      { objective: "O6", q: "Quel est un risque de garder son épargne en bétail ?", options: ["Les animaux ne changent jamais de valeur", "Les banques ne les acceptent pas", "Ils peuvent mourir de sécheresse ou de maladie", "Il n'y a aucun risque"], answer: 2, why: "La sécheresse et les maladies peuvent effacer une épargne gardée en animaux." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et vérifiez-la de nouveau.",
    criteria: [
      { name: "Registre des risques", objective: "O1", notYet: "Moins de cinq risques, ou des risques sans note ou sans action.", meets: "Au moins huit risques couvrant les cinq types, notés et classés, avec une action pour chacun des cinq premiers.", exceeds: "Les actions ont des dates et des coûts, et le plan dit quand le registre sera revu." },
      { name: "Relevé de prix et tendance", objective: "O2", notYet: "Moins de quatre semaines, une seule source, ou des unités et qualités mélangées.", meets: "Quatre semaines d'au moins deux sources, même produit, même qualité et même unité, avec la tendance décrite.", exceeds: "Inclut un service officiel et les mêmes mois de l'an dernier, et dit ce que la tendance signifie pour la vente." },
      { name: "Plan de vente et de stockage", objective: "O3", notYet: "Pas de prix d'équilibre du stockage, ou les besoins d'argent à la récolte sont ignorés.", meets: "Prix d'équilibre du stockage juste, besoins d'argent couverts à la récolte et ventes prévues par étapes.", exceeds: "Ajoute aussi une deuxième activité ou un deuxième marché pour répartir le risque, et des mesures de stockage sûr." },
      { name: "Questions sur le contrat et l'assurance", objective: "O4", notYet: "Moins de cinq clauses du contrat, ou pas de questions sur l'assurance.", meets: "Au moins huit clauses du contrat avec un gain et un risque, et ce que veut dire la couverture en une phrase.", exceeds: "Compare le prix fixe avec le prix d'équilibre et le relevé de prix." },
      { name: "Vérification de l'assurance indicielle", objective: "O5", notYet: "L'indice, le seuil, la prime ou le risque de base manque.", meets: "L'indice, le seuil, l'indemnité, la prime, la date limite, le risque de base et la vérification de l'agrément ont tous une réponse.", exceeds: "Les réponses viennent d'une vraie offre près de la ferme, avec le régulateur nommé." },
      { name: "Épargne contre l'inflation", objective: "O6", notYet: "Une seule façon d'épargner, ou aucun risque cité.", meets: "Au moins trois façons comparées, chacune avec un risque, le taux d'inflation noté et les agréments vérifiés.", exceeds: "Inclut le montant du fonds d'urgence et une date pour revoir la combinaison." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent Atteint ou Dépasse sur toutes les lignes de la grille du plan de gestion des risques",
      "Apprenants qui tiennent encore un relevé de prix hebdomadaire 30 jours plus tard (enquête de suivi)",
      "Apprenants qui disent avoir vendu par étapes ou stocké en sécurité au lieu de tout vendre à la récolte",
      "Apprenants qui disent avoir lu un contrat ou une offre d'assurance clause par clause, ou refusé un prêteur, un assureur ou un système de placement non agréé",
      "Les coopératives partenaires signalent moins de membres obligés de vendre animaux ou terres après une mauvaise saison"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, et un téléphone simple pour les prix par SMS, appel ou radio",
      "La calculatrice du téléphone",
      "Un contrat d'acheteur et un dépliant d'assurance indicielle de la région, réels ou d'exemple, si possible",
      "Environ 80 minutes en tout, en courtes séances, plus quatre semaines de relevé de prix pour la tâche finale"
    ],
    facilitatorNotes: [
      "Dans un groupe d'agriculteurs ou une séance de vulgarisation : faites le test de départ ensemble, puis un chapitre par séance ; faites d'abord le registre des risques en petits groupes.",
      "Demandez aux apprenants de commencer le relevé de prix après la leçon 2 pour avoir quatre semaines pour la tâche finale ; collectez les prix en groupe et partagez-les.",
      "Invitez un assureur agréé, une coopérative ou un gestionnaire d'entrepôt à présenter un vrai produit, mais ne soutenez aucune société ; laissez les apprenants poser les questions de la leçon.",
      "Ne recommandez pas de faire des opérations sur une bourse ni d'acheter un produit financier ; dites clairement que le cours explique comment les choses fonctionnent et leurs risques.",
      "Évaluez le plan de gestion des risques avec la grille et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
