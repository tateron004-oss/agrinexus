"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-agribusiness-farm-management.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const CBK = { name: "Banque centrale du Kenya (voir ses listes d'institutions agréées)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Banque centrale du Nigeria (protection des consommateurs et institutions agréées)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO : Guide de référence sur l'agriculture intelligente face au climat (gestion des risques de la ferme)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-fr",
  lang: "fr",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Agrobusiness et gestion de l'exploitation agricole",
  skills: "Tenir des registres simples de la ferme, Calculer la marge brute de chaque culture ou élevage, Trouver des marchés et obtenir de meilleurs prix, Gérer la trésorerie avec le mobile money, Juger le coût du crédit et gérer les risques, Écrire un plan d'affaires d'une page pour la ferme",
  outcome: "gérer votre ferme comme une entreprise : tenir des registres, calculer quelles cultures ou quels élevages rapportent le plus par acre, planifier votre trésorerie sur l'année, juger si un prêt a du sens, et écrire un plan d'affaires d'une page pour la ferme que vous pouvez montrer à une coopérative, un prêteur ou un partenaire.",
  about: [
    "Ce cours s'adresse aux petits exploitants, aux jeunes agripreneurs, aux groupements de femmes et de jeunes, aux responsables de coopératives et aux agents de vulgarisation au Kenya, au Nigeria et partout en Afrique qui veulent que leur ferme rapporte plus et soit moins risquée.",
    "Le chapitre 1 traite la ferme comme une entreprise : tenir des registres simples, calculer la marge brute de chaque activité (comme le maïs, les haricots, les tomates, la volaille ou le lait), et trouver des marchés et de meilleurs prix. Le chapitre 2 porte sur l'argent et la croissance : utiliser le mobile money pour gérer la trésorerie, décider s'il faut emprunter et comment gérer les risques, et écrire un plan d'affaires d'une page.",
    "Tous les exemples d'argent de ce cours sont des chiffres inventés pour montrer la méthode ; utilisez vos propres prix locaux. Ce cours ne donne pas de conseils de placement ni de crédit : avant d'emprunter, comparez les offres, vérifiez que le prêteur est agréé, et parlez à un conseiller de confiance comme votre coopérative, votre SACCO (coopérative d'épargne et de crédit) ou votre agent de vulgarisation. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan d'affaires d'une page pour votre ferme (ou une ferme d'exemple) : ce que vous produisez et sur quelle surface, les marges brutes d'au moins deux activités (avec vos propres prix et coûts locaux), à qui vous vendrez et comment, une esquisse de trésorerie sur 12 mois montrant quand l'argent entre et sort, tout prêt que vous envisagez avec son coût total et comment vous le rembourseriez, vos principaux risques et comment vous les réduirez, et trois objectifs pour la prochaine saison.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des petits exploitants, de jeunes agripreneurs, des groupes de femmes et de jeunes, des responsables de coopératives et des agents de vulgarisation au Kenya, au Nigeria et dans toute l'Afrique, qui veulent que leur ferme gagne plus et soit moins risquée.",
    startingPoint: "Ils savent cultiver et élever des animaux, et savent à peu près ce qu'ils dépensent et gagnent. Peu tiennent des registres écrits, calculent des marges brutes, planifient leur trésorerie sur l'année ou comparent le coût total des prêts.",
    gap: "Sans registres ni chiffres, les agriculteurs ne voient pas quelle activité rapporte, manquent d'argent pendant les mois de soudure, vendent aux prix les plus bas et peuvent prendre des prêts qu'ils ne pourront pas rembourser. Une approche d'entreprise simple les aide à gagner plus, à emprunter en sécurité et à montrer un plan clair aux prêteurs et aux acheteurs.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants ont le français comme deuxième langue",
      "Appareils : un cahier ou un téléphone simple ; un tableur sur téléphone aide mais n'est pas obligatoire",
      "Calcul : additions, soustractions et totaux simples ; les chiffres des exemples sont inventés, et les apprenants utilisent leurs propres prix locaux",
      "Sécurité de l'argent : ne jamais partager un code PIN ou un code de mobile money, et utiliser seulement des prêteurs agréés",
      "Les prix, les prêteurs et les autorités de contrôle changent selon le pays et la saison : les apprenants vérifient auprès des coopératives, des agents de vulgarisation et des autorités officielles"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un cahier ou un tableur sur téléphone", action: "tenir des registres de l'argent qui entre, de l'argent qui sort et de la production de la ferme", standard: "en notant chaque élément le jour même, y compris les journées de main-d'œuvre familiale" },
    { id: "O2", condition: "À partir des rendements, des prix et des coûts variables", action: "calculer la marge brute par acre de deux activités et les comparer", standard: "avec des calculs justes, en tenant compte du risque et du travail, pas seulement de la marge" },
    { id: "O3", condition: "À partir de votre culture principale", action: "comparer au moins trois façons de vendre et choisir la meilleure", standard: "avec les prix de plusieurs acheteurs, la qualité que chacun demande, et les conditions de tout contrat par écrit" },
    { id: "O4", condition: "Pour les 12 prochains mois", action: "planifier la trésorerie de votre ferme et utiliser le mobile money en sécurité", standard: "en marquant les mois de soudure avec un plan pour chacun, et sans jamais partager un code PIN ou un code" },
    { id: "O5", condition: "Face à une offre de prêt", action: "calculer le coût total du prêt et décider s'il convient à votre trésorerie", standard: "en ajoutant tous les frais et en vérifiant que le prêteur est agréé" },
    { id: "O6", condition: "À partir de vos registres et de vos chiffres", action: "écrire un plan d'affaires d'une page pour la ferme avec vos principaux risques et la façon de les réduire", standard: "avec toutes les parties demandées et trois objectifs chiffrés" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : La ferme comme une entreprise",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tenir des registres simples de la ferme",
          minutes: 5,
          goal: "Commencer un registre simple de l'argent qui entre, de l'argent qui sort et de la production.",
          text: [
            "On ne peut pas gérer ce qu'on ne mesure pas. Beaucoup d'agriculteurs savent à peu près ce qu'ils dépensent et gagnent, mais sans registres il est difficile de voir quelle culture rapporte, de planifier, ou d'obtenir un prêt ou un contrat avec un acheteur.",
            "Tenez trois registres simples. Argent qui sort : date, pour quoi (semences, engrais, main-d'œuvre, transport, vétérinaire), quelle culture ou quel animal, montant. Argent qui entre : date, ce que vous avez vendu, combien, à qui, montant. Production : dates de semis, intrants utilisés, récolte par parcelle, œufs ou lait par jour. Un cahier suffit ; un tableur sur téléphone aussi. Les relevés de mobile money vous aident aussi à vous souvenir.",
            "Écrivez les registres le jour même. Séparez l'argent de la ferme de celui du ménage dans vos registres, même s'ils viennent de la même poche, et comptez aussi les journées de travail familial, parce que votre temps a de la valeur."
          ],
          steps: ["Choisissez un cahier ou un tableur sur téléphone.", "Faites trois pages ou feuilles : argent qui sort, argent qui entre, production.", "Notez chaque élément le jour même : date, quoi, quelle culture ou quel animal, montant.", "Utilisez les relevés de mobile money pour combler les trous.", "Comptez les journées de travail familial en plus de la main-d'œuvre payée."],
          words: [["Tenue de registres", "le fait de noter ce qui se passe sur la ferme : argent, intrants et production."], ["Activité", "une production de la ferme, comme le maïs, les haricots, la volaille ou le lait."]],
          slides: [
            { title: "Pourquoi des registres ?", bullets: ["Voir quelle culture rapporte", "Planifier la saison", "Obtenir un prêt ou un contrat d'achat"] },
            { title: "Trois registres simples", bullets: ["Sorties : date, quoi, quelle activité, montant", "Entrées : date, vente, à qui, montant", "Production : semis, intrants, récolte, œufs, lait"] },
            { title: "Bonnes habitudes", bullets: ["Notez le jour même", "Argent de la ferme séparé du ménage", "Comptez aussi le travail familial"] }
          ],
          tryIt: "Commencez vos registres aujourd'hui. Faites les trois feuilles et remplissez au moins cinq éléments du mois dernier de mémoire et grâce à votre relevé de mobile money.",
          youCanNow: "tenir des registres simples de l'argent qui entre, qui sort et de la production pour chaque activité de la ferme.",
          quickCheck: [
            { objective: "O1", q: "Quels sont les trois registres simples de la ferme dans ce cours ?", options: ["L'argent qui sort, l'argent qui entre et la production", "La météo, les prix et les actualités", "Les noms, les téléphones et les adresses", "Les semences, les outils et les bâtiments"], answer: 0, why: "Ces trois registres montrent ce que vous dépensez, ce que vous gagnez et ce que vous produisez." },
            { objective: "O1", q: "Vous avez oublié de noter l'achat d'engrais de la semaine dernière. Qu'est-ce qui peut vous aider à vous en souvenir ?", options: ["Deviner un chiffre", "Votre relevé de mobile money", "Ne pas le noter", "Demander à l'IA de l'inventer"], answer: 1, why: "Les relevés de mobile money aident à combler les trous dans vos registres." }
          ]
        },
        {
          objectives: ["O2"],
          title: "La marge brute : quelle culture rapporte le plus ?",
          minutes: 6,
          goal: "Calculer la marge brute par acre de deux activités et les comparer.",
          text: [
            "Marge brute = revenu d'une activité moins les coûts qui lui appartiennent (coûts variables : semences, engrais, produits phytosanitaires, main-d'œuvre payée, sacs, transport). Calculez-la par acre (ou par hectare, ou pour 100 volailles) pour comparer les activités équitablement.",
            "Exemple avec des chiffres inventés en shillings kényans, un acre chacun. Maïs : 18 sacs à 3 500 = 63 000 de revenu ; coûts 34 000 (semences 3 000, engrais 14 000, main-d'œuvre 12 000, produits 2 000, sacs et transport 3 000) ; marge brute 29 000. Haricots : 5 sacs à 9 000 = 45 000 de revenu ; coûts 18 000 ; marge brute 27 000. Les marges sont proches, mais les haricots apportent aussi de l'azote et se récoltent plus tôt. Utilisez vos propres prix : ils changent selon le lieu et la saison.",
            "Comparez aussi la marge par journée de travail et le risque : une culture avec une forte marge mais une forte probabilité d'échec n'est peut-être pas le meilleur choix. Les coûts fixes (location de terre, outils, citerne d'eau) sont couverts par le total de toutes les marges brutes."
          ],
          steps: ["Choisissez deux activités.", "Écrivez le rendement attendu et le prix par unité pour obtenir le revenu.", "Listez les coûts variables de chacune.", "Marge brute = revenu - coûts variables, par acre.", "Comparez la marge, le travail et le risque."],
          words: [["Marge brute", "le revenu d'une activité moins les coûts qui lui appartiennent."], ["Coûts variables", "des coûts qui changent selon ce que vous produisez, comme les semences, l'engrais et la main-d'œuvre."], ["Coûts fixes", "des coûts qui restent les mêmes quoi que vous cultiviez, comme la location de terre ou une citerne."]],
          slides: [
            { title: "La formule", bullets: ["Marge brute = revenu - coûts variables", "Par acre, hectare ou 100 volailles"] },
            { title: "Exemple (KSh inventés, 1 acre)", bullets: ["Maïs : 63 000 - 34 000 = 29 000", "Haricots : 45 000 - 18 000 = 27 000", "Utilisez vos propres prix locaux"] },
            { title: "Comparez aussi", bullets: ["Marge par journée de travail", "Risque d'échec", "Coûts fixes payés par toutes les marges"] }
          ],
          tryIt: "Calculez la marge brute par acre de deux activités de votre ferme (ou de deux que vous envisagez) avec vos prix locaux. Laquelle est la plus élevée, et laquelle est la plus risquée ?",
          youCanNow: "calculer et comparer des marges brutes pour décider quoi cultiver ou garder.",
          quickCheck: [
            { objective: "O2", q: "Lequel est un coût fixe, et non un coût variable ?", options: ["Les semences", "L'engrais", "Une citerne d'eau", "La main-d'œuvre payée pour le désherbage"], answer: 2, why: "Une citerne d'eau est payée quoi que vous cultiviez, donc c'est un coût fixe." },
            { objective: "O2", q: "Les tomates rapportent 50 000 par acre et coûtent 30 000 en coûts variables. Quelle est la marge brute ?", options: ["80 000", "30 000", "50 000", "20 000"], answer: 3, why: "La marge brute est le revenu moins les coûts variables : 50 000 - 30 000 = 20 000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver des marchés et de meilleurs prix",
          minutes: 5,
          goal: "Comparer au moins trois façons de vendre et choisir la meilleure pour une culture.",
          text: [
            "Les prix baissent souvent juste après la récolte, quand tout le monde vend, et remontent des mois plus tard. Vendre seul, en petites quantités, au premier commerçant devant la ferme est facile mais paie souvent le moins. Comparez : le marché local, les commerçants, les coopératives qui regroupent la production, les transformateurs, les écoles ou les hôtels, l'agriculture contractuelle avec un acheteur, et, là où ils existent, les entrepôts certifiés qui stockent le grain et peuvent aider les agriculteurs à obtenir un crédit garanti par ce grain.",
            "Trouvez des informations sur les prix : demandez à plusieurs acheteurs, consultez les services d'information sur les prix et la radio, et parlez à votre coopérative. Connaissez la norme de qualité de l'acheteur (humidité, calibrage, taille, propreté) et respectez-la : une production propre, sèche et triée rapporte plus et se conserve plus longtemps.",
            "Les contrats peuvent donner un marché sûr, mais lisez les conditions : le prix ou la façon de le fixer, la quantité, la norme de qualité, les dates de livraison, qui paie le transport, la date et le mode de paiement, et ce qui se passe si la récolte échoue. Faites-le mettre par écrit et demandez à votre coopérative ou à votre agent de vulgarisation de le vérifier."
          ],
          steps: ["Listez au moins trois façons de vendre votre culture.", "Obtenez les prix de plusieurs acheteurs et des services d'information sur les marchés.", "Apprenez la norme de qualité de chaque acheteur.", "Pensez à regrouper avec un groupe ou à stocker pour un meilleur prix.", "Lisez les conditions de tout contrat et faites-le mettre par écrit."],
          words: [["Regroupement", "mettre ensemble la production de nombreux agriculteurs pour vendre de plus grandes quantités à de meilleurs prix."], ["Agriculture contractuelle", "un accord pour produire et vendre à un acheteur selon des conditions fixées."], ["Norme de qualité", "les règles de l'acheteur sur l'humidité, la taille, le calibre et la propreté."]],
          slides: [
            { title: "Le moment compte", bullets: ["Prix souvent bas juste après la récolte", "Plus hauts des mois plus tard", "Le stockage et le regroupement aident"] },
            { title: "Façons de vendre", bullets: ["Marché, commerçants, coopératives", "Transformateurs, écoles, hôtels", "Contrats, entrepôts certifiés"] },
            { title: "Être mieux payé", bullets: ["Comparez plusieurs prix", "Respectez la norme de qualité", "Lisez les contrats ; exigez l'écrit"] }
          ],
          tryIt: "Pour votre culture principale, écrivez trois façons de la vendre, le prix que chacune paierait aujourd'hui (demandez ou estimez), la qualité que chacune exige, et laquelle vous choisirez et pourquoi.",
          youCanNow: "comparer les marchés et choisir la meilleure façon de vendre une culture.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que le regroupement de la production ?", options: ["Vendre ensemble en groupe pour avoir de plus grandes quantités", "Ajouter de l'eau au grain", "Acheter des semences en petits sachets", "Stocker le grain à la maison"], answer: 0, why: "Regrouper avec une coopérative ou un groupe donne de plus gros lots qui peuvent obtenir de meilleurs prix." },
            { objective: "O3", q: "Un acheteur veut vos haricots mais ne dit rien sur la date de paiement. Que faites-vous ?", options: ["Livrer et espérer", "Demander par écrit la date et le mode de paiement", "Lui vendre quand même", "Baisser votre prix"], answer: 1, why: "Un contrat doit fixer par écrit la date et le mode de paiement." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : La ferme comme une entreprise",
        questions: [
          { objective: "O1", q: "Pourquoi tenir des registres de la ferme ?", options: ["Ils servent seulement aux agents des impôts", "Pour voir quelle activité rapporte, planifier, et obtenir des prêts ou des contrats", "Pour passer le temps", "Les registres ne sont pas utiles"], answer: 1, why: "Les registres transforment les suppositions en décisions." },
          { objective: "O2", q: "La marge brute est :", options: ["La surface totale de la ferme", "Le revenu moins les coûts variables d'une activité", "Le prix de l'engrais", "L'argent emprunté"], answer: 1, why: "Elle montre ce que chaque activité rapporte avant les coûts fixes." },
          { objective: "O2", q: "Lequel est un coût variable ?", options: ["Les semences", "La terre dont vous êtes propriétaire", "Une citerne déjà construite", "Votre maison"], answer: 0, why: "Les semences changent selon la quantité que vous semez." },
          { objective: "O3", q: "Un acheteur propose un contrat. Que devez-vous vérifier ?", options: ["Seulement le nom de l'acheteur", "Rien ; les contrats sont toujours justes", "Seulement la couleur des sacs", "Le prix, la quantité, la qualité, la livraison, le paiement et ce qui se passe si la récolte échoue"], answer: 3, why: "Les conditions décident si le contrat vous aide." },
          { objective: "O3", q: "Pourquoi les prix baissent-ils souvent juste après la récolte ?", options: ["Les récoltes rétrécissent", "Les acheteurs arrêtent de manger", "Beaucoup d'agriculteurs vendent en même temps", "Le gouvernement les fixe bas"], answer: 2, why: "La forte offre à la récolte fait baisser les prix." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Argent, risques et croissance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Le mobile money et la trésorerie",
          minutes: 5,
          goal: "Planifier une trésorerie sur 12 mois et utiliser le mobile money en sécurité pour la ferme.",
          text: [
            "Beaucoup de fermes ont des problèmes d'argent non pas parce qu'elles perdent de l'argent, mais parce que l'argent entre une ou deux fois par an et sort toute l'année. Un plan de trésorerie montre, mois par mois, l'argent attendu en entrée et en sortie, pour voir venir les mois de soudure et s'y préparer.",
            "Le mobile money (comme M-Pesa au Kenya, et les portefeuilles mobiles et applications bancaires au Nigeria ; Orange Money, Wave ou MTN MoMo dans beaucoup de pays francophones) facilite le paiement des ouvriers et des fournisseurs, la réception des paiements des acheteurs, l'épargne et la tenue d'un historique. Certains agriculteurs gardent un portefeuille ou un compte séparé pour la ferme afin de ne pas mélanger l'argent de la ferme et celui du ménage.",
            "Restez prudent : ne partagez jamais votre code PIN ou un code à usage unique avec qui que ce soit, y compris des gens qui disent venir de l'opérateur de mobile money ou être un acheteur ; vérifiez le nom avant d'envoyer ; et méfiez-vous des messages inattendus de « transfert par erreur » qui vous demandent de renvoyer de l'argent. Signalez les problèmes à l'opérateur par ses canaux officiels."
          ],
          steps: ["Dessinez 12 colonnes de mois.", "Écrivez l'argent attendu en entrée chaque mois (ventes, autres revenus).", "Écrivez l'argent attendu en sortie (intrants, main-d'œuvre, frais de scolarité, nourriture).", "Repérez les mois où les sorties dépassent les entrées, et prévoyez une épargne ou un autre calendrier.", "Utilisez un portefeuille ou un compte séparé pour la ferme ; ne partagez jamais votre code PIN."],
          words: [["Trésorerie", "le moment où l'argent entre et sort."], ["Mois de soudure", "les mois où l'argent ou la nourriture manquent, souvent avant la récolte."], ["Code PIN", "le numéro secret qui protège votre compte de mobile money."]],
          slides: [
            { title: "La trésorerie, pas seulement le bénéfice", bullets: ["L'argent entre une ou deux fois par an", "Il sort toute l'année", "Préparez les mois de soudure"] },
            { title: "Le mobile money aide", bullets: ["Payer ouvriers et fournisseurs", "Recevoir les paiements des acheteurs", "Épargner et garder un historique"] },
            { title: "Restez prudent", bullets: ["Ne partagez jamais PIN ni code", "Vérifiez le nom avant d'envoyer", "Méfiez-vous des faux « transferts par erreur »"] }
          ],
          tryIt: "Dessinez votre plan de trésorerie sur 12 mois avec les entrées et les sorties. Entourez les mois de soudure et écrivez une façon de préparer chacun (épargner sur la récolte, échelonner les ventes, une petite activité hors saison).",
          youCanNow: "planifier la trésorerie de votre ferme sur l'année et utiliser le mobile money en sécurité.",
          quickCheck: [
            { objective: "O4", q: "Que vous aide à voir un plan de trésorerie sur 12 mois ?", options: ["Quelle culture pousse le plus haut", "La météo de chaque mois", "Les mois de soudure avant qu'ils arrivent", "Le revenu de vos voisins"], answer: 2, why: "Il montre les mois où l'argent qui sort est plus grand que l'argent qui entre." },
            { objective: "O4", q: "Les frais de scolarité tombent un mois sans ventes de récolte. Quelle est une façon de s'y préparer ?", options: ["Dépenser tout l'argent de la récolte d'un coup", "Prendre n'importe quel prêt proposé par SMS", "L'ignorer jusque-là", "Épargner une partie de l'argent de la récolte ou échelonner les ventes"], answer: 3, why: "Épargner sur la récolte ou échelonner les ventes couvre les mois de soudure." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Crédit et risques : emprunter avec sagesse",
          minutes: 6,
          goal: "Calculer le coût total d'un prêt et décider s'il a du sens pour la ferme.",
          text: [
            "Un prêt peut aider à acheter des intrants ou du matériel qui rapportent plus qu'ils ne coûtent. Il peut aussi devenir un piège. Avant d'emprunter, demandez-vous : qu'est-ce que l'argent va acheter, combien cela rapportera en plus, et quand ? Pourrez-vous rembourser aux dates fixées par le prêteur, même si la récolte est mauvaise ?",
            "Comparez les offres selon le montant total que vous rembourserez, pas seulement le taux d'intérêt : ajoutez tous les intérêts, frais et assurances. Par exemple (chiffres inventés), emprunter 20 000 et rembourser 2 000 par mois pendant 12 mois veut dire rembourser 24 000 : le prêt coûte 4 000. Vérifiez que les dates de remboursement correspondent aux moments où votre argent entre. Les petits prêts numériques peuvent coûter très cher quand on additionne les frais.",
            "Utilisez des prêteurs agréés : banques, banques de microfinance, SACCO et coopératives, et prêteurs numériques approuvés par la banque centrale ou l'autorité compétente (au Kenya, la Banque centrale du Kenya publie la liste des institutions agréées ; au Nigeria, la Banque centrale du Nigeria ; en Afrique de l'Ouest et centrale francophone, la BCEAO ou la BEAC). Réduisez le risque avec l'épargne, la diversification des cultures, l'assurance quand elle existe, et en n'empruntant que ce dont le plan a besoin. Parlez à un conseiller de confiance avant de signer."
          ],
          steps: ["Écrivez ce que le prêt va acheter et combien il devrait rapporter en plus.", "Additionnez le total que vous rembourserez : intérêts, frais, assurance.", "Comparez les dates de remboursement avec votre plan de trésorerie.", "Vérifiez que le prêteur est agréé.", "Prévoyez une mauvaise saison : épargne, assurance, prêt plus petit.", "Demandez l'avis d'un conseiller de confiance avant de signer."],
          words: [["Intérêt", "le prix que vous payez pour emprunter de l'argent."], ["Coût total du crédit", "tout ce que vous remboursez en plus de ce que vous avez emprunté : intérêts plus frais et charges."], ["SACCO", "une coopérative d'épargne et de crédit qui appartient à ses membres."], ["Garantie", "quelque chose que vous promettez au prêteur si vous ne pouvez pas rembourser."]],
          slides: [
            { title: "Avant d'emprunter", bullets: ["Qu'est-ce que cela va acheter ?", "Combien cela rapportera en plus, et quand ?", "Pourrez-vous rembourser si la récolte est mauvaise ?"] },
            { title: "Comparez le total", bullets: ["Intérêts + frais + assurance", "Emprunter 20 000, rembourser 24 000 : coût 4 000", "Les remboursements suivent votre trésorerie ?"] },
            { title: "Des prêteurs agréés", bullets: ["Banques, microfinance, SACCO, coopératives", "Kenya : listes de la CBK ; Nigeria : CBN", "Parlez d'abord à un conseiller de confiance"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Prenez une offre de prêt réelle ou d'exemple. Écrivez le montant emprunté, chaque remboursement et chaque frais, le total remboursé et le coût total. Puis comparez les mois de remboursement avec votre plan de trésorerie et écrivez si le prêt a du sens.",
          youCanNow: "calculer le vrai coût d'un prêt et juger si emprunter a du sens pour votre ferme.",
          quickCheck: [
            { objective: "O5", q: "Comment comparer deux offres de prêt ?", options: ["Par le montant total que vous rembourserez, frais compris", "Par la vitesse à laquelle l'argent arrive", "Par le taux d'intérêt seulement", "Par la publicité du prêteur"], answer: 0, why: "Le total remboursé montre le vrai coût de chaque prêt." },
            { objective: "O5", q: "Les remboursements d'un prêt commencent le mois après les semis, avant la récolte. Que faites-vous ?", options: ["Signer vite", "Comparer avec votre trésorerie et demander des dates qui tombent quand l'argent rentre", "Emprunter plus pour couvrir", "Utiliser votre code PIN pour accélérer"], answer: 1, why: "Les dates de remboursement doivent tomber les mois où votre argent rentre." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Écrire un plan d'affaires d'une page pour la ferme",
          minutes: 5,
          goal: "Écrire un plan d'affaires d'une page que vous pourriez montrer à une coopérative, un prêteur ou un partenaire.",
          text: [
            "Un plan d'affaires est l'histoire de votre ferme en chiffres et en objectifs. Les prêteurs, les coopératives, les acheteurs et les partenaires veulent voir que vous connaissez votre ferme, votre marché et vos risques. Une page claire vaut mieux que dix pages vagues.",
            "Incluez : qui vous êtes et votre ferme (lieu, terre, ce que vous produisez) ; vos activités avec leurs marges brutes ; votre marché (qui achète, comment, à quel prix) ; votre esquisse de trésorerie ; ce dont vous avez besoin (intrants, matériel, un prêt) et comment cela sera remboursé ; vos principaux risques (météo, ravageurs, prix) et ce que vous faites contre eux ; et trois objectifs chiffrés pour la prochaine saison.",
            "Gardez vos registres et vos calculs derrière le plan, pour pouvoir répondre aux questions. Mettez-le à jour chaque saison avec ce qui s'est vraiment passé."
          ],
          steps: ["Résumé de la ferme : lieu, terre, activités.", "Marges brutes de chaque activité.", "Marché : acheteurs, circuit, prix.", "Esquisse de trésorerie et besoins.", "Risques et comment vous les gérez.", "Trois objectifs chiffrés ; mise à jour chaque saison."],
          words: [["Plan d'affaires", "un court document qui explique ce que fait une entreprise, comment elle gagne de l'argent, ce dont elle a besoin et ses objectifs."], ["Objectif", "une cible claire avec un chiffre et une date."]],
          slides: [
            { title: "L'histoire de votre ferme en chiffres", bullets: ["Pour prêteurs, coopératives, acheteurs, partenaires", "Une page claire vaut mieux que dix pages vagues"] },
            { title: "Ce qu'il contient", bullets: ["Résumé de la ferme et activités", "Marges brutes et marché", "Trésorerie, besoins, remboursement"] },
            { title: "Pour bien finir", bullets: ["Les risques et comment vous les gérez", "Trois objectifs chiffrés", "Mise à jour chaque saison"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tâche finale : écrivez votre plan d'affaires d'une page avec les marges brutes de deux activités, le marché, la trésorerie sur 12 mois, tout prêt et son coût total, les risques et les réponses, et trois objectifs pour la prochaine saison.",
          youCanNow: "écrire un plan d'affaires d'une page pour la ferme, appuyé sur vos propres registres et chiffres.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi garder les registres et les calculs derrière votre plan d'une page ?", options: ["Pour rendre le plan plus long", "Les prêteurs ne lisent pas les plans", "Pour pouvoir répondre aux questions sur vos chiffres", "Pour cacher votre vrai revenu"], answer: 2, why: "Les registres appuient votre plan quand un prêteur ou un acheteur pose des questions." },
            { objective: "O6", q: "Votre maïs a fait moins bien que prévu cette saison. Que faites-vous de votre plan d'affaires ?", options: ["Le jeter", "Garder les anciens chiffres", "Changer seulement les objectifs", "Le mettre à jour avec ce qui s'est vraiment passé"], answer: 3, why: "Un plan se met à jour chaque saison avec les vrais résultats." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Argent, risques et croissance",
        questions: [
          { objective: "O4", q: "Pourquoi une ferme rentable peut-elle quand même manquer d'argent ?", options: ["Le bénéfice n'est pas réel", "L'argent entre une ou deux fois par an mais sort toute l'année", "Le mobile money le perd", "Les registres en sont la cause"], answer: 1, why: "C'est le calendrier de la trésorerie, pas seulement le bénéfice, qui décide si vous pouvez payer." },
          { objective: "O4", q: "Quelqu'un qui appelle de la part de « votre opérateur de mobile money » demande votre code PIN. Vous devez :", options: ["Le donner vite", "En donner la moitié", "Ne jamais le partager ; contacter l'opérateur par ses canaux officiels", "Le lui envoyer par SMS"], answer: 2, why: "Les vrais opérateurs ne demandent jamais votre code PIN." },
          { objective: "O5", q: "Vous empruntez 20 000 et remboursez 2 000 par mois pendant 12 mois. Le prêt coûte :", options: ["4 000", "2 000", "20 000", "Rien"], answer: 0, why: "Vous remboursez 24 000, soit 4 000 de plus que ce que vous avez emprunté." },
          { objective: "O5", q: "Avant de prendre un prêt, vérifiez que le prêteur est :", options: ["L'ami de votre voisin", "Très rapide", "Sur les réseaux sociaux", "Agréé par la banque centrale ou l'autorité compétente"], answer: 3, why: "Les prêteurs agréés suivent des règles qui protègent les emprunteurs." },
          { objective: "O6", q: "Un bon plan d'affaires pour la ferme est :", options: ["Long et vague", "Une page claire appuyée sur des registres et des chiffres", "Seulement une liste de souhaits", "Secret pour tout le monde"], answer: 1, why: "Les plans courts et précis sont plus faciles à suivre et inspirent confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Agrobusiness et gestion de l'exploitation agricole",
    questions: [
      { objective: "O1", q: "Lequel est un registre simple de la ferme ?", options: ["Sorties d'argent : date, quoi, activité, montant", "Une photo du ciel", "Une liste de chansons", "Rien d'écrit"], answer: 0, why: "Noter les sorties par activité montre les coûts." },
      { objective: "O1", q: "Quand faut-il écrire les registres ?", options: ["Une fois par an", "Le jour même", "Seulement quand on le demande", "Jamais"], answer: 1, why: "Les registres du jour même sont exacts." },
      { objective: "O1", q: "Pourquoi compter les journées de travail familial ?", options: ["Elles sont gratuites", "Pour payer des impôts", "Votre temps a de la valeur et change quelle activité rapporte", "Ce n'est pas utile"], answer: 2, why: "Le travail non payé est quand même un vrai coût en temps." },
      { objective: "O2", q: "Une activité, c'est :", options: ["Une banque", "Un tracteur", "Un marché", "Une production de la ferme, comme le maïs ou la volaille"], answer: 3, why: "Chaque activité se mesure séparément." },
      { objective: "O2", q: "Revenu 63 000, coûts variables 34 000. La marge brute est :", options: ["29 000", "34 000", "63 000", "97 000"], answer: 0, why: "63 000 - 34 000 = 29 000." },
      { objective: "O2", q: "Pourquoi calculer la marge brute par acre ?", options: ["Pour grossir les chiffres", "Pour comparer les activités équitablement", "Parce que les acheteurs le demandent", "Pour payer le loyer"], answer: 1, why: "La même unité de surface rend la comparaison juste." },
      { objective: "O2", q: "La location de terre que vous payez quoi que vous cultiviez est :", options: ["Un coût variable", "Une marge brute", "Un coût fixe", "Une vente"], answer: 2, why: "Les coûts fixes ne changent pas selon ce que vous produisez." },
      { objective: "O2", q: "Deux cultures ont des marges proches, mais l'une échoue souvent. Vous devez :", options: ["Ignorer le risque", "Ne cultiver que la plus risquée", "Choisir selon la couleur", "Tenir compte du risque autant que de la marge"], answer: 3, why: "Une forte marge vaut moins si l'échec est probable." },
      { objective: "O3", q: "Regrouper la production avec une coopérative aide parce que :", options: ["De plus grandes quantités peuvent obtenir de meilleurs prix", "Les cultures poussent plus vite", "Aucune qualité n'est demandée", "Les acheteurs paient moins"], answer: 0, why: "Les acheteurs paient plus pour un approvisionnement important et régulier." },
      { objective: "O3", q: "Une production propre, sèche et triée :", options: ["Rapporte moins", "Rapporte plus et se conserve plus longtemps", "N'est pas voulue", "S'abîme plus vite"], answer: 1, why: "Respecter les normes de qualité augmente le prix et la durée de conservation." },
      { objective: "O3", q: "Avant de signer un contrat d'agriculture contractuelle, vous devez :", options: ["Signer tout de suite", "Vous mettre d'accord seulement par téléphone", "Lire les conditions et le faire mettre par écrit", "Laisser l'acheteur tout décider"], answer: 2, why: "Des conditions écrites vous protègent." },
      { objective: "O4", q: "Un plan de trésorerie montre :", options: ["Seulement le bénéfice total", "Les variétés de cultures", "Les pluies", "L'argent qui entre et sort mois par mois"], answer: 3, why: "La trésorerie, c'est le calendrier de l'argent." },
      { objective: "O4", q: "Les mois de soudure sont :", options: ["Les mois où l'argent ou la nourriture manquent", "Les mois de récolte", "Les vacances", "Les jours de marché"], answer: 0, why: "Les préparer évite les emprunts ou ventes de crise." },
      { objective: "O4", q: "Un avantage d'un portefeuille ou d'un compte séparé pour la ferme est :", options: ["Des prix plus élevés", "L'argent de la ferme et celui du ménage ne se mélangent pas", "Plus besoin de registres", "De l'engrais gratuit"], answer: 1, why: "La séparation montre ce que la ferme gagne et dépense vraiment." },
      { objective: "O4", q: "Un message dit que vous avez reçu de l'argent par erreur et vous demande de le renvoyer. Vous devez :", options: ["Le renvoyer tout de suite", "Renvoyer le double", "Vérifier votre vrai solde et votre relevé, et contacter l'opérateur par ses canaux officiels", "Partager votre code PIN"], answer: 2, why: "Les faux messages de « transfert par erreur » sont une ruse courante." },
      { objective: "O5", q: "Pour comparer des prêts, regardez :", options: ["Seulement la publicité", "Seulement le taux d'intérêt", "Seulement la rapidité du versement", "Le montant total que vous rembourserez, frais compris"], answer: 3, why: "Les frais peuvent rendre cher un prêt à faible taux." },
      { objective: "O5", q: "Une SACCO est :", options: ["Une coopérative d'épargne et de crédit appartenant à ses membres", "Un ravageur des cultures", "Un impôt de l'État", "Un drone"], answer: 0, why: "Les SACCO mettent en commun l'épargne des membres et leur prêtent." },
      { objective: "O5", q: "Les dates de remboursement d'un prêt doivent :", options: ["Être ignorées", "Correspondre aux mois où votre argent entre", "Être toujours hebdomadaires", "Être fixées après avoir dépensé l'argent"], answer: 1, why: "Aligner les remboursements sur les revenus évite les impayés." },
      { objective: "O6", q: "Qu'est-ce qui réduit le risque de la ferme ?", options: ["Emprunter le plus possible", "Ne cultiver qu'une seule culture", "L'épargne, la diversification des cultures et l'assurance quand elle existe", "Tout vendre à la récolte"], answer: 2, why: "Répartir le risque protège la ferme pendant les mauvaises saisons." },
      { objective: "O6", q: "Un plan d'affaires doit être mis à jour :", options: ["Jamais", "Tous les dix ans", "Seulement quand un prêteur le demande", "Chaque saison avec ce qui s'est vraiment passé"], answer: 3, why: "La mise à jour garde le plan réaliste et utile." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      7,
      8,
      11,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Marges brutes",
        objective: "O2",
        notYet: "Moins de deux activités, ou des erreurs de calcul.",
        meets: "Les marges brutes par acre de deux activités, avec des prix locaux et des calculs justes.",
        exceeds: "Compare aussi le travail et le risque, pas seulement la marge."
      },
      {
        name: "Marché",
        objective: "O3",
        notYet: "Aucun acheteur ni aucune façon de vendre nommés.",
        meets: "Dit qui achètera, comment, et à quel prix.",
        exceeds: "Compare au moins trois façons de vendre et la qualité que chacune demande."
      },
      {
        name: "Trésorerie",
        objective: "O4",
        notYet: "Pas d'esquisse mois par mois.",
        meets: "Une esquisse sur 12 mois de l'argent qui entre et qui sort, avec les mois de soudure marqués.",
        exceeds: "Un plan pour chaque mois de soudure."
      },
      {
        name: "Prêt",
        objective: "O5",
        notYet: "Un prêt est indiqué sans son coût total ni plan de remboursement.",
        meets: "Tout prêt montre le total remboursé, le coût total et comment les remboursements s'intègrent dans la trésorerie, ou aucun prêt n'est nécessaire.",
        exceeds: "Nomme un prêteur agréé et un plan en cas de mauvaise saison."
      },
      {
        name: "Risques et objectifs",
        objective: "O6",
        notYet: "Pas de risques ni d'objectifs.",
        meets: "Les principaux risques avec la façon de les réduire, et trois objectifs chiffrés.",
        exceeds: "Tient sur une page claire appuyée par des registres."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Agriculteurs qui tiennent des registres pendant au moins trois mois (questionnaire de suivi)",
      "Revenu de la ferme ou marge brute comparés à la saison précédente, d'après les agriculteurs ou les partenaires",
      "Agriculteurs qui rejoignent une coopérative, signent un contrat écrit avec un acheteur ou obtiennent un prêt d'un prêteur agréé avec un plan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou un tableur sur téléphone",
      "Une calculatrice (un téléphone simple en a une)",
      "Les propres prix et coûts locaux de l'apprenant, ou les exemples du cours",
      "Un relevé de mobile money si l'apprenant en a un",
      "Environ 60 minutes de leçons, plus du temps pour rassembler les prix et écrire le plan"
    ],
    facilitatorNotes: [
      "Calculez d'abord une marge brute ensemble avec les vrais prix locaux du groupe avant que les apprenants calculent la leur.",
      "Rappelez aux apprenants que les chiffres du cours sont inventés ; les prix changent selon le lieu et la saison.",
      "Insistez sur la sécurité du mobile money : ne jamais partager un code PIN ou un code, et signaler les problèmes seulement par les canaux officiels.",
      "Invitez un responsable de coopérative ou de SACCO pour expliquer le crédit agréé ; ne recommandez vous-même aucun prêt.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
