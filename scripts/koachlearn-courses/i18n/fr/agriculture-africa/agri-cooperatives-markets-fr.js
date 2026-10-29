"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-cooperatives-markets.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const ICA = { name: "Alliance coopérative internationale : l'identité, les valeurs et les principes coopératifs", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law : Co-operative Societies Act (loi sur les sociétés coopératives ; enregistrement par le Commissioner for Co-operative Development)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Nigeria : Co-operative Societies Act (directeurs des coopératives fédéral et des États ; statuts ; audit annuel)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Ghana Information Services Department : le gouvernement lance la réforme du secteur coopératif (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), ministère de l'Agriculture du Kenya", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-fr",
  lang: "fr",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Coopératives agricoles et accès au marché",
  skills: "Expliquer pourquoi les agriculteurs se regroupent, Rédiger des statuts et enregistrer un groupement, Tenir les réunions et les registres du groupe, Rassembler la production et vendre ensemble, Vérifier les prix du marché par téléphone, Lire un contrat d'acheteur",
  outcome: "aider à créer ou à renforcer un groupement d'agriculteurs : adopter ses statuts, savoir où l'enregistrer, tenir les réunions et des registres clairs, rassembler la production des membres et la vendre ensemble à un prix vérifié, et lire un contrat d'acheteur avant que quelqu'un le signe.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs en croissance, aux responsables de groupements et de coopératives, et aux jeunes de l'agro-industrie au Kenya, au Nigeria, au Ghana et partout en Afrique. Seul, un agriculteur avec cinq sacs de maïs ou quelques caisses de tomates accepte le prix que le commerçant propose. Ensemble, un groupe peut acheter les intrants moins cher, répondre à la commande d'un gros acheteur et négocier un meilleur prix.",
    "Le chapitre 1 explique comment construire le groupe : pourquoi les agriculteurs se regroupent, comment former un groupement de producteurs ou une coopérative (statuts et enregistrement), et comment bien le faire marcher avec des réunions et des registres. Le chapitre 2 explique comment aller au marché : rassembler et vendre ensemble, vérifier les prix par téléphone, et les contrats avec les acheteurs.",
    "Les lois sur les coopératives, les bureaux d'enregistrement et les frais changent d'un pays à l'autre et avec le temps. Ce cours cite les bureaux à contacter ; vérifiez toujours avec eux les règles en vigueur avant d'enregistrer. Chaque leçon dure environ cinq minutes et se termine par une tâche à faire avec votre groupe. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan de vente groupée d'une page pour une culture (celle de votre groupe, ou un exemple comme 25 producteurs de maïs à Bungoma, un groupe de femmes productrices de tomates à Kaduna, ou un groupe de cacao ou de niébé près de Tamale) : le nom et le but du groupe, cinq règles principales des statuts, où vous l'enregistreriez et ce que vous devez vérifier, les registres que vous tiendrez, comment les membres livreront, comment leur production sera classée et comment ils seront payés, les prix trouvés auprès d'au moins trois sources, et les six clauses de contrat que vous vérifierez avant de signer avec un acheteur.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des petits et moyens agriculteurs, des responsables de groupements et de coopératives agricoles, et de jeunes travailleurs de l'agrobusiness au Kenya, au Nigeria, au Ghana et partout en Afrique qui veulent acheter et vendre ensemble.",
    startingPoint: "La plupart vendent seuls de petites quantités au bord du champ et acceptent le prix du commerçant. Certains font partie d'un groupe informel ou d'un chama (groupe d'épargne). Peu ont rédigé des statuts, tenu les registres d'un groupe, organisé une journée de collecte, vérifié les prix auprès de plusieurs sources ou lu un contrat d'acheteur avant de signer.",
    gap: "Seuls, les agriculteurs ont peu de poids pour négocier, et beaucoup de groupes échouent par manque de confiance, de mauvais registres, des ventes parallèles et des paiements en retard. Un groupe bien géré, avec des règles claires, des registres, des prix vérifiés et des contrats écrits, peut honorer les commandes des grands acheteurs, acheter les intrants moins cher et faire gagner plus à ses membres.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes ; chaque terme de groupe et de marché est expliqué",
      "Appareils : un téléphone simple pour les SMS, WhatsApp, la vérification des prix et la calculatrice ; des registres papier",
      "Les lois, les bureaux et les frais des coopératives varient selon les pays et changent : les apprenants vérifient auprès du bureau des coopératives",
      "Argent et vie privée : deux personnes approuvent les paiements ; ne jamais donner de code PIN ou de coordonnées bancaires à des outils d'IA ou à des inconnus au téléphone",
      "Pas de conseil juridique : les gros contrats sont vérifiés par le bureau des coopératives, la vulgarisation ou un avocat"
    ],
    prerequisites: "Aucun. « Manutention et stockage après récolte » aide pour le tri et la qualité."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour votre ferme et vos voisins", action: "lister ce qu'un groupe pourrait faire qu'un agriculteur seul ne peut pas faire, et les risques à gérer", standard: "en nommant au moins trois avantages et trois raisons courantes d'échec des groupes" },
    { id: "O2", condition: "Pour un groupement d'agriculteurs nouveau ou existant", action: "rédiger les principales règles des statuts et nommer le bureau où le groupe s'enregistrerait", standard: "avec au moins cinq règles clés et les étapes actuelles vérifiées auprès du bureau" },
    { id: "O3", condition: "Pour une réunion du groupe et son argent", action: "tenir une réunion avec un ordre du jour et un procès-verbal, et mettre en place les registres de base du groupe", standard: "avec un registre des membres, un livre de caisse, un cahier des livraisons et un registre des paiements, et deux personnes qui approuvent les paiements" },
    { id: "O4", condition: "Lors d'une journée de collecte", action: "vérifier, trier, peser, enregistrer et payer la production de chaque membre", standard: "en pesant devant le membre, en remettant un reçu et en payant selon les registres" },
    { id: "O5", condition: "Avant de vendre", action: "comparer les prix d'au moins trois sources et calculer ce que vaut une offre à votre ferme", standard: "en retirant le transport, les frais et les pertes, et en repérant les offres frauduleuses" },
    { id: "O6", condition: "Face à un contrat d'acheteur", action: "vérifier les clauses principales avant que le groupe signe", standard: "couvrant le produit, la qualité, la quantité, le prix, la livraison, les contrôles de qualité, le paiement, la défaillance et les litiges" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire un groupement solide",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pourquoi les agriculteurs se regroupent",
          minutes: 4,
          goal: "Lister ce qu'un groupe pourrait faire pour votre ferme que vous ne pouvez pas faire seul, et les risques à gérer.",
          text: [
            "L'Alliance coopérative internationale définit une coopérative comme une association de personnes qui s'unissent volontairement pour répondre à des besoins économiques, sociaux et culturels communs grâce à une entreprise qu'elles possèdent ensemble et dirigent de façon démocratique. Les membres sont à la fois les propriétaires et les utilisateurs.",
            "Les groupes aident les agriculteurs à : acheter semences, engrais et aliments du bétail en gros à des prix plus bas ; rassembler la production en chargements de camion que veulent les gros acheteurs ; négocier de meilleurs prix ; partager magasins, séchoirs, transport et matériel ; obtenir formation, certification et crédit, que les prêteurs accordent plus facilement à un groupe qui tient des registres ; et parler d'une seule voix au gouvernement et aux acheteurs.",
            "Les groupes échouent aussi. Les raisons fréquentes sont le manque de confiance, des responsables qui prennent tout le pouvoir, des registres mal tenus, des membres qui vendent à d'autres acheteurs après que le groupe a conclu un accord, et les paiements en retard. La suite du cours explique comment éviter cela. Les groupes vont des groupes d'entraide ou de producteurs informels aux sociétés coopératives enregistrées ; un groupe peut commencer de façon informelle et s'enregistrer plus tard."
          ],
          words: [["Coopérative", "une entreprise possédée et dirigée par ses membres, qui utilisent aussi ses services."], ["Groupement de producteurs", "des agriculteurs qui font la même culture et travaillent ensemble, enregistrés ou non."], ["Achat groupé", "acheter de grandes quantités ensemble pour un prix plus bas."], ["Vente parallèle", "un membre qui vend à un autre acheteur après que le groupe a décidé de vendre ensemble."]],
          slides: [
            { title: "Ce qu'est une coopérative (ACI)", bullets: ["Des personnes qui s'unissent volontairement", "Une entreprise qu'elles possèdent ensemble", "Dirigée démocratiquement : les membres la possèdent et l'utilisent"] },
            { title: "Ce que les groupes peuvent faire", bullets: ["Acheter les intrants en gros, moins cher", "Remplir des camions pour les gros acheteurs ; négocier", "Partager magasins, transport ; obtenir formation et crédit"] },
            { title: "Pourquoi les groupes échouent", bullets: ["Peu de confiance ; des responsables qui prennent tout", "Registres mal tenus ; paiements en retard", "Ventes parallèles après un accord du groupe"] }
          ],
          sources: [ICA],
          tryIt: "Écrivez trois choses qu'un groupe pourrait faire pour votre ferme que vous ne pouvez pas faire seul, et le risque qui vous inquiète le plus. Demandez à deux voisins ce qu'ils attendraient d'un groupe et notez leurs réponses.",
          youCanNow: "expliquer ce qu'est une coopérative, ce qu'un groupe peut faire pour les agriculteurs, et les principales raisons pour lesquelles les groupes échouent.",
          quickCheck: [
            { objective: "O1", q: "Quels types de groupements agricoles existent ?", options: ["Des groupes d'entraide ou de producteurs informels jusqu'aux sociétés coopératives enregistrées", "Seulement des sociétés enregistrées", "Seulement des bureaux de l'État", "Seulement des groupes de plus de 1 000 agriculteurs"], answer: 0, why: "Les groupes vont des groupes d'entraide ou de producteurs informels aux coopératives enregistrées." },
            { objective: "O1", q: "Vos voisins veulent vendre du maïs ensemble mais ne sont pas prêts à s'enregistrer. Que peuvent-ils faire ?", options: ["Attendre de pouvoir s'enregistrer avant de faire quoi que ce soit", "Vendre chacun seul pour toujours", "Demander à un commerçant d'être leur responsable", "Commencer comme groupe informel et s'enregistrer plus tard"], answer: 3, why: "Un groupe peut commencer de façon informelle et s'enregistrer plus tard." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Former le groupe : statuts et enregistrement",
          minutes: 6,
          goal: "Rédiger les principales règles des statuts d'un groupe et savoir où l'enregistrer.",
          text: [
            "Commencez avec des personnes qui font la même culture ou ont besoin du même service, qui habitent assez près pour se réunir, et qui se font confiance. Mettez-vous d'accord sur un but clair, comme « vendre notre maïs ensemble et acheter les intrants en gros ». Tenez une première réunion, rédigez un procès-verbal, et choisissez un comité provisoire.",
            "Les statuts sont les règles écrites du groupe. Ils couvrent en général : le nom, l'adresse et le but ; qui peut adhérer et comment ; les droits d'adhésion et les parts sociales ; les réunions, le quorum et le vote (les coopératives appliquent un membre, une voix) ; le comité, ses pouvoirs et la durée des mandats ; comment l'argent est gardé et contrôlé ; comment l'excédent éventuel est partagé ; et comment sont sanctionnés les membres qui ne respectent pas les règles. Votre bureau des coopératives a souvent des statuts types que vous pouvez adapter.",
            "L'enregistrement donne au groupe un statut juridique pour posséder des biens, ouvrir un compte bancaire à son nom, signer des contrats et emprunter. Les règles changent selon le pays. Au Kenya, les sociétés s'enregistrent selon la Co-operative Societies Act (loi sur les sociétés coopératives) auprès du Commissioner for Co-operative Development (commissaire au développement coopératif), en commençant par le bureau des coopératives du comté. Au Nigeria, la Co-operative Societies Act dit qu'une société primaire doit avoir au moins dix membres qui remplissent les conditions et qu'elle fait sa demande, avec ses statuts, au directeur des coopératives de l'État (State Director of Co-operatives). Au Ghana, les groupes s'enregistrent auprès du Department of Co-operatives (département des coopératives) par son bureau de district. Les frais, les formulaires et les étapes changent : passez ou appelez le bureau avant de faire la demande."
          ],
          steps: ["Mettez-vous d'accord sur le but du groupe en une phrase.", "Tenez une première réunion ; rédigez le procès-verbal et notez le nom des membres.", "Choisissez un comité provisoire : président, secrétaire, trésorier.", "Demandez des statuts types à votre bureau des coopératives et adaptez-les.", "Adoptez les règles principales en assemblée des membres et notez le vote.", "Allez au bureau des coopératives : demandez les formulaires, les frais et les étapes en vigueur."],
          words: [["Statuts", "les règles écrites que le groupe accepte de suivre."], ["Quorum", "le nombre minimum de membres présents pour que les décisions d'une réunion comptent."], ["Un membre, une voix", "chaque membre a une voix, quel que soit le nombre de parts qu'il possède."], ["Enregistrement", "la reconnaissance officielle qui donne au groupe un statut juridique."]],
          slides: [
            { title: "Bien commencer", bullets: ["Même culture ou même besoin ; proches ; confiance", "Un but en une phrase", "Première réunion, procès-verbal, comité provisoire"] },
            { title: "Ce que couvrent les statuts", bullets: ["But, adhésion, droits d'adhésion et parts", "Réunions, quorum, un membre une voix", "Comité, argent, excédent, sanctions"] },
            { title: "Où s'enregistrer", bullets: ["Kenya : bureau du comté / Commissioner for Co-operative Development", "Nigeria : State Director of Co-operatives", "Ghana : bureau de district du Department of Co-operatives"] },
            { title: "Avant de faire la demande", bullets: ["Règles, formulaires et frais changent", "Passez ou appelez le bureau d'abord", "Demandez des statuts types"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Écrivez cinq règles de statuts pour votre groupe : qui peut adhérer, le droit d'adhésion ou la part, la fréquence des réunions et le quorum, comment se font les votes, et ce qui arrive si un membre vend en parallèle. Puis trouvez l'adresse ou le numéro de téléphone du bureau des coopératives le plus proche.",
          youCanNow: "rédiger les principales règles des statuts d'un groupement d'agriculteurs et savoir où l'enregistrer dans votre pays.",
          quickCheck: [
            { objective: "O2", q: "Qu'apporte l'enregistrement à un groupement d'agriculteurs ?", options: ["Un prix garanti", "Des intrants gratuits", "Un statut légal pour posséder des biens, ouvrir un compte bancaire, signer des contrats et emprunter", "Un salaire de l'État"], answer: 2, why: "L'enregistrement donne au groupe un statut légal pour posséder des biens, avoir un compte bancaire, signer des contrats et emprunter." },
            { objective: "O2", q: "Votre groupe rédige ses statuts et ne sait pas par où commencer. Que faites-vous ?", options: ["Copier les règles d'une entreprise sur internet", "Demander au bureau des coopératives des statuts types à adapter", "Laisser le président les écrire seul", "Se passer de statuts"], answer: 1, why: "Les bureaux des coopératives ont souvent des statuts types que les groupes peuvent adapter." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faire marcher le groupe : réunions et registres",
          minutes: 5,
          goal: "Tenir une courte réunion avec un ordre du jour et un procès-verbal, et mettre en place les registres de base du groupe.",
          text: [
            "De bonnes réunions construisent la confiance. Envoyez la date et l'ordre du jour à l'avance (un SMS ou un message WhatsApp suffit), commencez à l'heure, vérifiez le quorum, suivez l'ordre du jour, laissez chaque membre parler, votez les décisions, et rédigez le procès-verbal : qui est venu, ce qui a été décidé, et qui fait quoi pour quand. Lisez le dernier procès-verbal au début de chaque réunion. Tenez une assemblée générale annuelle où les membres entendent les comptes et élisent le comité.",
            "Les registres sont la mémoire du groupe et sa preuve pour les acheteurs, les banques et le bureau des coopératives. Tenez au moins : un registre des membres (noms, contacts, parts payées), un livre de caisse de tout l'argent qui entre et qui sort avec les reçus, un cahier des livraisons montrant ce que chaque membre a livré, sa catégorie et son poids, et un registre des paiements montrant ce que chaque membre a reçu. La Co-operative Societies Act du Nigeria, par exemple, exige que les comptes d'une société enregistrée soient audités chaque année.",
            "Protégez l'argent : utilisez un compte bancaire ou de mobile money au nom du groupe, faites signer ou approuver chaque paiement par deux personnes, donnez un reçu pour chaque shilling, naira ou cedi, et lisez les comptes à voix haute aux réunions. Un tableur sur téléphone ou une application gratuite peut garder les registres, mais gardez aussi une copie papier, et ne partagez jamais les codes PIN ni les mots de passe."
          ],
          steps: ["Envoyez la date et l'ordre du jour à l'avance.", "Vérifiez le quorum ; suivez l'ordre du jour ; votez les décisions.", "Rédigez le procès-verbal : qui est venu, ce qui a été décidé, qui fait quoi pour quand.", "Mettez en place quatre registres : membres, livre de caisse, livraisons, paiements.", "Utilisez un compte du groupe avec deux signataires ; donnez des reçus.", "Lisez les comptes à voix haute à chaque réunion ; faites un audit une fois par an."],
          words: [["Ordre du jour", "la liste des sujets d'une réunion."], ["Procès-verbal", "le compte rendu écrit de ce qu'une réunion a décidé."], ["Assemblée générale annuelle (AGA)", "la réunion annuelle de tous les membres pour entendre les comptes et élire les responsables."], ["Audit", "un contrôle indépendant des comptes du groupe."], ["Signataire", "une personne autorisée à approuver les paiements d'un compte."]],
          slides: [
            { title: "De bonnes réunions", bullets: ["Ordre du jour envoyé à l'avance ; commencer à l'heure", "Vérifier le quorum ; tout le monde parle ; voter", "Procès-verbal : décisions, qui fait quoi pour quand"] },
            { title: "Quatre registres de base", bullets: ["Registre des membres", "Livre de caisse avec reçus", "Cahier des livraisons et registre des paiements"] },
            { title: "Protéger l'argent", bullets: ["Compte du groupe ; deux signataires", "Un reçu pour chaque paiement", "Lire les comptes à voix haute ; audit chaque année"] }
          ],
          sources: [NG_ACT],
          tryIt: "Écrivez l'ordre du jour de la prochaine réunion de votre groupe avec quatre points. Puis dessinez les colonnes d'un cahier des livraisons : date, nom du membre, culture, catégorie, poids, reçu par.",
          youCanNow: "tenir une réunion de groupe avec un ordre du jour et un procès-verbal et tenir les registres qui construisent la confiance.",
          quickCheck: [
            { objective: "O3", q: "Que se passe-t-il lors d'une assemblée générale annuelle ?", options: ["L'acheteur fixe le prix", "Les membres écoutent la présentation des comptes et élisent le comité", "Le groupe vend son magasin", "Seul le président parle"], answer: 1, why: "Lors de l'AGA, les membres écoutent la présentation des comptes et élisent le comité." },
            { objective: "O3", q: "Vous présidez la réunion d'aujourd'hui et le quorum est atteint. Que faites-vous d'abord ?", options: ["Lire le procès-verbal de la dernière réunion", "Demander de l'argent", "Sauter l'ordre du jour", "Finir la réunion plus tôt"], answer: 0, why: "Lire le dernier procès-verbal au début garde tout le monde sur la même ligne et renforce la confiance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire un groupement solide",
        questions: [
          { objective: "O1", q: "Dans une coopérative, qui possède et dirige l'entreprise ?", options: ["L'acheteur", "Le gouvernement", "Les membres", "Le président tout seul"], answer: 2, why: "Les membres possèdent, dirigent et utilisent la coopérative." },
          { objective: "O1", q: "Un membre vend à un autre commerçant après que le groupe a conclu un accord. On appelle cela :", options: ["L'achat groupé", "La vente parallèle", "Le regroupement de la production", "L'audit"], answer: 1, why: "La vente parallèle casse les accords du groupe et fait souvent échouer les groupes." },
          { objective: "O2", q: "Au Nigeria, où une société coopérative primaire fait-elle sa demande d'enregistrement ?", options: ["Au State Director of Co-operatives (directeur des coopératives de l'État)", "À la police", "À la fédération de football", "À n'importe quelle banque"], answer: 0, why: "La Co-operative Societies Act envoie les demandes, avec les statuts, au directeur des coopératives." },
          { objective: "O3", q: "Qu'est-ce que le quorum ?", options: ["Le compte bancaire du groupe", "Un type de culture", "La pause thé de la réunion", "Le nombre minimum de membres pour que les décisions comptent"], answer: 3, why: "Sans quorum, les décisions d'une réunion ne sont pas valables." },
          { objective: "O3", q: "Quelle pratique protège le mieux l'argent du groupe ?", options: ["Une seule personne garde tout l'argent chez elle", "Pas de reçus, pour économiser le papier", "Deux signataires, des reçus et des comptes lus à voix haute", "Partager le code PIN avec tous les membres"], answer: 2, why: "Deux personnes pour approuver, des reçus et des comptes ouverts rendent le vol et les erreurs plus difficiles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Aller au marché ensemble",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rassembler la production et vendre ensemble",
          minutes: 5,
          goal: "Organiser une journée de collecte où la production des membres est vérifiée, pesée, enregistrée et payée de façon juste.",
          text: [
            "Rassembler la production, c'est réunir les petites quantités de nombreux membres en un grand lot régulier. Les gros acheteurs comme les transformateurs, les meuniers, les écoles, les supermarchés et les exportateurs veulent des volumes réguliers d'une même qualité, livrés à temps. Un groupe qui peut remplir un camion de produits propres, secs et triés peut leur vendre et gagner plus qu'en vendant au bord du champ.",
            "Organisez un point ou une journée de collecte avec des règles claires : la qualité que veut l'acheteur (par exemple du maïs sec, propre et trié, à l'humidité maximale de l'acheteur), une balance fiable, et une trace écrite de chaque livraison. Vérifiez et classez la production de chaque membre, pesez-la devant lui, écrivez-la dans le cahier des livraisons et donnez un reçu. Stockez le lot sans danger jusqu'à ce que l'acheteur vienne le chercher.",
            "Payez les membres selon les registres : le poids multiplié par le prix convenu pour leur catégorie, moins les frais du groupe convenus pour le transport, le stockage ou les sacs, le tout décidé à l'avance et écrit dans les statuts ou le procès-verbal. Payez à temps, par mobile money ou par la banque quand c'est possible. Un paiement rapide, juste et transparent est la meilleure protection contre les ventes parallèles."
          ],
          steps: ["Adoptez les règles de qualité de l'acheteur et prévenez tous les membres à l'avance.", "Fixez la journée de collecte, le lieu et une balance fiable.", "Vérifiez, classez et pesez chaque livraison devant le membre.", "Écrivez-la dans le cahier des livraisons ; donnez un reçu.", "Stockez le lot sans danger ; livrez à l'acheteur ensemble.", "Payez chaque membre selon les registres, moins les frais convenus, à temps."],
          words: [["Regroupement de la production", "réunir beaucoup de petites quantités en un grand lot."], ["Point de collecte", "un lieu où les membres apportent leur production pour qu'elle soit vérifiée et enregistrée."], ["Lot", "une quantité de produits du même type et de la même catégorie."]],
          slides: [
            { title: "Pourquoi rassembler", bullets: ["Les gros acheteurs veulent volume, qualité, délais", "Remplir un camion d'une seule catégorie", "Un meilleur prix qu'au bord du champ"] },
            { title: "Journée de collecte", bullets: ["Règles de qualité de l'acheteur connues à l'avance", "Classer et peser devant le membre", "Noter et donner un reçu"] },
            { title: "Payer juste et vite", bullets: ["Poids x prix de la catégorie", "Moins les frais convenus à l'avance", "À temps, par mobile money ou banque"] }
          ],
          tryIt: "Préparez une journée de collecte pour votre groupe : date, lieu, balance, règles de qualité de l'acheteur, qui note, et frais du groupe par sac ou par kilo convenus à l'avance. Écrivez comment et quand les membres seront payés.",
          youCanNow: "organiser une journée de collecte juste et payer les membres selon des registres clairs.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un point ou une journée de collecte ?", options: ["Une fête pour les membres", "Une agence bancaire", "Le bureau d'un acheteur", "Un lieu et un jour où les membres apportent leur production pour qu'elle soit vérifiée, pesée et enregistrée"], answer: 3, why: "Au point de collecte, la production est vérifiée, triée, pesée, enregistrée et stockée jusqu'au passage de l'acheteur." },
            { objective: "O4", q: "Le maïs d'un membre est plus humide que ce que l'acheteur accepte. Que faites-vous au point de collecte ?", options: ["Le mélanger au maïs sec pour que personne ne le remarque", "Payer le double au membre", "Ne pas l'ajouter au lot avant qu'il soit séché selon la norme de l'acheteur", "Le cacher au fond du camion"], answer: 2, why: "Le lot doit respecter la qualité de l'acheteur : la production est donc vérifiée et triée avant d'être acceptée." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vérifier les prix du marché par téléphone",
          minutes: 5,
          goal: "Trouver des prix auprès d'au moins trois sources et calculer ce que vaut vraiment une offre à votre ferme.",
          text: [
            "Ne vendez jamais sans connaître le prix. Demandez à au moins trois acheteurs, écoutez les bulletins de prix à la radio, et consultez les services officiels d'information sur les marchés. Au Kenya, le système KAMIS du ministère de l'Agriculture publie les prix de gros, de détail et au bord du champ de nombreuses cultures et du bétail, sur des marchés de tous les comtés. Au Nigeria et au Ghana, demandez à votre service de vulgarisation, à votre association de filière ou à votre union de coopératives quel service de prix couvre votre culture.",
            "Comparez ce qui est comparable : le prix au kilo ou au sac de la même catégorie, au même endroit. Un prix plus haut sur un marché lointain peut valoir moins après le transport, le chargement, les taxes de marché et les pertes. Calculez le prix à votre ferme : le prix du marché moins tous les frais pour y arriver.",
            "Le téléphone aide. Tenez chaque semaine un simple relevé des prix, partagez-le dans le groupe WhatsApp, et utilisez une calculatrice ou un assistant d'IA pour comparer les offres. Attention aux arnaques : quelqu'un qui vous demande de payer des frais pour recevoir un prix élevé « garanti », ou qui demande votre code PIN de mobile money, n'est pas un vrai acheteur."
          ],
          steps: ["Prenez les prix d'au moins trois sources : acheteurs, radio, service officiel.", "Vérifiez que chacun concerne la même culture, la même catégorie et la même unité.", "Retirez le transport, le chargement, les taxes et les pertes pour avoir le prix à la ferme.", "Notez les prix chaque semaine et partagez-les avec le groupe.", "Ignorez quiconque demande des frais ou un code PIN pour vous trouver un prix."],
          words: [["Prix au bord du champ", "le prix qu'un acheteur vous paie à votre ferme."], ["Prix de gros", "le prix des grandes quantités vendues aux commerçants ou aux magasins."], ["Service d'information sur les marchés", "un service qui publie les prix actuels des marchés."]],
          slides: [
            { title: "Au moins trois sources", bullets: ["Plusieurs acheteurs", "Bulletins de prix à la radio", "Services officiels (Kenya : KAMIS)"] },
            { title: "Comparer ce qui est comparable", bullets: ["Même culture, catégorie et unité", "Prix du marché moins transport et taxes", "= ce que ça vaut à votre ferme"] },
            { title: "Bien utiliser le téléphone", bullets: ["Relevé des prix chaque semaine ; partagez avec le groupe", "Calculatrice ou IA pour comparer les offres", "Ni frais ni code PIN pour les vrais acheteurs"] }
          ],
          sources: [KAMIS],
          tryIt: "Cette semaine, trouvez le prix d'une culture auprès de trois sources et écrivez-les dans un tableau : source, prix, catégorie, unité, lieu. Calculez le prix à votre ferme pour les deux meilleures offres après les frais de transport. Quelle offre paie vraiment le plus ?",
          youCanNow: "vérifier les prix auprès de plusieurs sources et calculer quelle offre paie vraiment le plus.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire « comparer ce qui est comparable » pour les prix ?", options: ["Comparer le prix au kilo ou au sac pour la même qualité au même endroit", "Comparer seulement les prix les plus hauts", "Comparer cette année avec il y a dix ans", "Comparer le maïs et les tomates"], answer: 0, why: "Les prix ne se comparent justement que pour la même qualité, la même unité et le même endroit." },
            { objective: "O5", q: "Votre groupe veut suivre les prix chaque semaine. Que faites-vous ?", options: ["Demander à un seul commerçant une fois par saison", "Tenir un simple relevé des prix chaque semaine et le partager dans le groupe WhatsApp", "Deviner à partir de l'année dernière", "Attendre que l'acheteur vous le dise"], answer: 1, why: "Un relevé des prix hebdomadaire partagé dans le groupe aide les membres à connaître le prix avant de vendre." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les contrats avec les acheteurs",
          minutes: 6,
          goal: "Lire un contrat d'acheteur et vérifier les clauses principales avant que le groupe signe.",
          text: [
            "Un contrat est un accord écrit entre le groupe et un acheteur. Un bon contrat donne un marché sûr et un prix connu ; un mauvais peut laisser le groupe avec une production que personne ne vient chercher, ou un argent qui n'arrive jamais. Mettez chaque accord par écrit, même avec un acheteur que vous connaissez.",
            "Vérifiez ces clauses : quel produit et quelle catégorie ; combien et quand ; le prix, ou exactement comment il sera fixé (par exemple le prix du marché le jour de la livraison plus ou moins un montant) ; où se fait la livraison et qui paie le transport ; comment la qualité est contrôlée et ce que devient la production refusée ; quand et comment le paiement est fait ; ce qui se passe si la récolte échoue ou si l'acheteur ne vient pas chercher ; et comment les litiges sont réglés.",
            "Si une partie n'est pas claire, demandez à l'acheteur de l'expliquer par écrit. Lisez le contrat à voix haute en assemblée des membres pour que chacun comprenne ses devoirs, y compris l'interdiction des ventes parallèles. Demandez à votre bureau des coopératives, à votre agent de vulgarisation ou à un avocat de vérifier les gros contrats. Un assistant d'IA peut expliquer les mots difficiles avec des mots simples, mais ne tapez jamais les coordonnées bancaires ni les codes PIN du groupe, et il ne remplace pas un conseil juridique."
          ],
          steps: ["Obtenez l'offre par écrit.", "Vérifiez le produit, la catégorie, la quantité et les dates.", "Vérifiez le prix ou comment il est fixé, le lieu de livraison et qui paie le transport.", "Vérifiez les contrôles de qualité, les règles de refus, la date et le mode de paiement.", "Vérifiez ce qui se passe si la récolte échoue ou si l'acheteur ne vient pas chercher, et comment les litiges sont réglés.", "Lisez-le aux membres ; faites vérifier les gros contrats avant de signer."],
          words: [["Contrat", "un accord écrit que les deux parties doivent respecter."], ["Refus", "quand un acheteur refuse une production qui n'a pas la qualité convenue."], ["Litige", "un désaccord entre le groupe et l'acheteur."]],
          slides: [
            { title: "Toujours par écrit", bullets: ["Même avec un acheteur que vous connaissez", "Marché sûr et prix connu", "De mauvaises clauses peuvent coûter cher à tout le groupe"] },
            { title: "Vérifier les clauses", bullets: ["Produit, catégorie, quantité, dates", "Prix ou façon de le fixer ; livraison et transport", "Contrôle qualité, refus, date et mode de paiement"] },
            { title: "Quand ça tourne mal", bullets: ["La récolte échoue ou l'acheteur ne vient pas", "Comment les litiges sont réglés", "Demandez à l'acheteur d'expliquer par écrit"] },
            { title: "Avant de signer", bullets: ["Lisez-le à voix haute aux membres", "Gros contrats : bureau des coopératives, vulgarisation ou avocat", "L'IA peut expliquer les mots ; ni coordonnées bancaires ni PIN"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan de vente groupée d'une page pour une culture. Mettez-y le but du groupe, cinq règles des statuts, où vous l'enregistreriez, vos registres, comment les membres livrent et sont payés, les prix de trois sources, et les clauses de contrat que vous vérifierez avant de signer.",
          youCanNow: "lire un contrat d'acheteur, vérifier ses clauses principales, et planifier comment votre groupe vendra ensemble.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un contrat d'acheteur ?", options: ["Un reçu pour un sac", "Un message WhatsApp pour dire bonjour", "Un accord écrit entre le groupe et un acheteur", "Un prêt d'une banque"], answer: 2, why: "Un contrat est un accord écrit qui fixe ce que chaque partie fera." },
            { objective: "O6", q: "Les membres ne comprennent pas les clauses de qualité du contrat. Que faites-vous avant de signer ?", options: ["Signer vite avant que l'acheteur parte", "Laisser le président signer seul", "Ignorer les clauses de qualité", "Demander à l'acheteur de les expliquer par écrit et les lire à voix haute en réunion des membres"], answer: 3, why: "Les parties floues sont expliquées par écrit et lues à voix haute pour que chaque membre comprenne ses obligations." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Aller au marché ensemble",
        questions: [
          { objective: "O4", q: "Pourquoi les gros acheteurs préfèrent-ils acheter aux groupes ?", options: ["Les groupes vendent toujours le moins cher", "Les groupes peuvent fournir de grands lots réguliers à temps", "Les groupes n'ont pas besoin de qualité", "La loi oblige les acheteurs"], answer: 1, why: "Le regroupement donne le volume et la qualité régulière dont les gros acheteurs ont besoin." },
          { objective: "O4", q: "À un point de collecte, quand faut-il peser la production d'un membre ?", options: ["Devant le membre, puis la noter avec un reçu", "En secret la nuit", "Seulement après que l'acheteur a payé", "Jamais ; on l'estime"], answer: 0, why: "La pesée ouverte et les reçus construisent la confiance et prouvent la part de chaque membre." },
          { objective: "O5", q: "Un marché lointain paie 10 pour cent de plus, mais le transport et les taxes coûtent 15 pour cent. Qu'est-ce qui est vrai ?", options: ["Le marché lointain paie plus", "Les deux paient pareil", "Les frais de transport ne comptent pas", "Le marché lointain paie moins à votre ferme"], answer: 3, why: "Après les frais, le prix à la ferme du marché lointain est plus bas." },
          { objective: "O5", q: "Au Kenya, quel service officiel publie les prix des cultures et du bétail ?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, géré par le ministère de l'Agriculture, publie les prix des marchés." },
          { objective: "O6", q: "Quelle clause du contrat vous dit ce qui se passe si l'acheteur ne vient pas chercher la production ?", options: ["Le nom du groupe", "La date de la réunion", "Les clauses en cas de défaut d'enlèvement ou de livraison", "La couleur des sacs"], answer: 2, why: "Les contrats doivent dire ce qui se passe si l'une des parties ne peut pas respecter l'accord." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Coopératives agricoles et accès au marché",
    questions: [
      { objective: "O1", q: "Lequel est un avantage d'un groupement d'agriculteurs ?", options: ["Payer les intrants plus cher", "Acheter les intrants en gros à des prix plus bas", "Vendre seul au bord du champ", "Ne tenir aucun registre"], answer: 1, why: "L'achat groupé baisse le coût des intrants." },
      { objective: "O1", q: "Selon l'Alliance coopérative internationale, les membres d'une coopérative :", options: ["La possèdent et la dirigent démocratiquement", "Travaillent pour un propriétaire privé", "N'ont pas de voix", "Doivent tous être des fonctionnaires"], answer: 0, why: "Une coopérative est possédée en commun et dirigée démocratiquement." },
      { objective: "O1", q: "Laquelle est une raison fréquente de l'échec des groupements d'agriculteurs ?", options: ["Des registres clairs", "Des paiements à temps", "Le manque de confiance et des registres mal tenus", "Des réunions ouvertes"], answer: 2, why: "Le manque de confiance et les registres mal tenus divisent les groupes." },
      { objective: "O2", q: "Que sont les statuts ?", options: ["Des prêts bancaires", "Les prix du marché", "Des contrats d'acheteurs", "Les règles écrites du groupe"], answer: 3, why: "Les statuts fixent comment le groupe fonctionne." },
      { objective: "O2", q: "« Un membre, une voix » veut dire :", options: ["Les membres qui ont plus de parts ont plus de voix", "Seuls les responsables votent", "Chaque membre a une voix", "Les voix s'achètent"], answer: 2, why: "Les coopératives donnent une voix à chaque membre." },
      { objective: "O2", q: "Au Kenya, les sociétés coopératives sont enregistrées selon la Co-operative Societies Act par :", options: ["Le Commissioner for Co-operative Development (commissaire au développement coopératif)", "Le Kenya Wildlife Service", "Un acheteur privé", "Le service météo"], answer: 0, why: "Le commissaire enregistre les sociétés, en commençant par le bureau des coopératives du comté." },
      { objective: "O2", q: "Au Ghana, où les groupes coopératifs s'enregistrent-ils ?", options: ["À l'agence météorologique", "À une station de radio", "Dans n'importe quel magasin", "Au Department of Co-operatives (bureau de district)"], answer: 3, why: "Le département des coopératives du Ghana enregistre et supervise les sociétés." },
      { objective: "O2", q: "Avant de faire une demande d'enregistrement, il faut :", options: ["Deviner les frais", "Vérifier avec le bureau des coopératives les formulaires, les frais et les étapes en vigueur", "Copier les règles d'un autre pays", "Se passer des statuts"], answer: 1, why: "Les règles et les frais changent, alors vérifiez avec le bureau." },
      { objective: "O3", q: "Le procès-verbal d'une réunion note :", options: ["Seulement l'heure d'arrivée de chacun", "Les prix du marché", "Les codes PIN des membres", "Qui est venu, ce qui a été décidé et qui fait quoi pour quand"], answer: 3, why: "Le procès-verbal garde la trace des décisions et des actions." },
      { objective: "O3", q: "Lequel fait partie des quatre registres de base du groupe ?", options: ["Un cahier des livraisons", "Un journal de la météo", "Une liste des codes PIN des acheteurs", "Un album photo"], answer: 0, why: "Le cahier des livraisons montre ce que chaque membre a livré." },
      { objective: "O3", q: "Pourquoi avoir deux signataires sur le compte du groupe ?", options: ["Pour ralentir tous les paiements", "Pour qu'aucune personne seule ne puisse déplacer l'argent", "Parce que les banques prennent moins de frais", "Pour que les membres ne voient jamais les comptes"], answer: 1, why: "Deux personnes pour approuver protègent l'argent du groupe." },
      { objective: "O3", q: "La Co-operative Societies Act du Nigeria exige que les comptes d'une société enregistrée soient :", options: ["Gardés secrets", "Brûlés chaque année", "Audités chaque année", "Gardés seulement en mémoire"], answer: 2, why: "La loi exige un audit à la fin de chaque exercice." },
      { objective: "O4", q: "Rassembler la production veut dire :", options: ["Vendre un sac à la fois", "Diviser le groupe", "Augmenter le prix tout seul", "Réunir la production de nombreux membres en un grand lot"], answer: 3, why: "Le regroupement réunit de petites quantités pour de plus gros acheteurs." },
      { objective: "O4", q: "Comment payer les membres après une vente groupée ?", options: ["Selon les registres : poids x prix de la catégorie, moins les frais convenus", "Tous pareil, quoi qu'ils aient livré", "Seuls les responsables sont payés", "Quand le trésorier le veut"], answer: 0, why: "Un paiement juste et noté garde la confiance et réduit les ventes parallèles." },
      { objective: "O4", q: "La meilleure protection contre les ventes parallèles est :", options: ["Des prix secrets", "Des paiements en retard", "Un paiement rapide, juste et transparent", "Pas de contrats"], answer: 2, why: "Les membres restent fidèles quand le groupe paie bien et à temps." },
      { objective: "O5", q: "Combien de sources de prix faut-il vérifier avant de vendre ?", options: ["Aucune", "Un seul acheteur", "Seulement la radio", "Au moins trois"], answer: 3, why: "Plusieurs sources montrent le vrai prix du marché." },
      { objective: "O5", q: "Quelqu'un promet un prix élevé garanti si vous payez d'abord des frais et partagez votre code PIN de mobile money. C'est :", options: ["Un acheteur normal", "Probablement une arnaque", "Une règle de la coopérative", "Un service du gouvernement"], answer: 1, why: "Les vrais acheteurs ne demandent ni frais ni code PIN." },
      { objective: "O5", q: "Le prix à la ferme d'une offre, c'est :", options: ["Le prix du marché moins le transport, les taxes et les pertes", "Le prix le plus haut que vous avez entendu", "Le prix dans la capitale", "Le prix de détail"], answer: 0, why: "Ce que vous recevez vraiment à la ferme, c'est ce qui compte." },
      { objective: "O6", q: "Qu'est-ce qui doit être écrit dans un contrat d'acheteur ?", options: ["Seulement le nom de l'acheteur", "Le prix ou sa façon d'être fixé, la quantité, la qualité, la livraison et les conditions de paiement", "Les codes PIN bancaires des membres", "Rien ; une poignée de main suffit"], answer: 1, why: "Ces clauses protègent le groupe si quelque chose tourne mal." },
      { objective: "O6", q: "Vous utilisez un assistant d'IA pour comprendre un contrat. Qu'est-ce qui est sûr ?", options: ["Taper les coordonnées bancaires et les codes PIN du groupe", "Signer tout ce qu'il dit être correct", "Lui demander d'expliquer les mots difficiles, puis faire vérifier les gros contrats par un conseiller", "Le laisser signer à votre place"], answer: 2, why: "L'IA peut expliquer les mots mais ne remplace pas un conseil juridique, et les données privées restent privées." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      7,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie du plan et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "But et statuts",
        objective: "O2",
        notYet: "Pas de but clair, ou moins de cinq règles.",
        meets: "Le nom du groupe, son but et cinq règles clés des statuts, comme l'adhésion, le vote, l'argent et la discipline.",
        exceeds: "Les règles couvrent aussi les ventes parallèles et le partage de l'éventuel excédent."
      },
      {
        name: "Enregistrement",
        objective: "O2",
        notYet: "Aucun bureau d'enregistrement nommé.",
        meets: "Nomme le bureau où le groupe s'enregistrerait et ce qu'il faut y vérifier.",
        exceeds: "A appelé ou visité le bureau et noté les étapes actuelles et la date."
      },
      {
        name: "Registres et argent",
        objective: "O3",
        notYet: "Des registres manquent, ou une seule personne contrôle l'argent.",
        meets: "Registre des membres, livre de caisse, cahier des livraisons et registre des paiements, avec deux personnes qui approuvent les paiements.",
        exceeds: "Dit comment les comptes seront lus aux membres et vérifiés chaque année."
      },
      {
        name: "Livraison, tri et paiement",
        objective: "O4",
        notYet: "Pas de règles de collecte ni de paiement.",
        meets: "Comment les membres livrent, comment la production est triée et pesée devant eux, et comment et quand ils sont payés.",
        exceeds: "Les frais du groupe et les dates de paiement convenus sont écrits à l'avance."
      },
      {
        name: "Prix",
        objective: "O5",
        notYet: "Moins de trois sources de prix, ou pas de calcul du prix à la ferme.",
        meets: "Des prix d'au moins trois sources, comparés de façon comparable, avec le prix à la ferme calculé.",
        exceeds: "Inclut un relevé des prix hebdomadaire sur plusieurs semaines."
      },
      {
        name: "Clauses du contrat",
        objective: "O6",
        notYet: "Moins de six clauses, ou des clauses clés comme le paiement manquent.",
        meets: "Six clauses du contrat à vérifier, dont le prix, la qualité, la livraison, le paiement et le défaut d'enlèvement.",
        exceeds: "Nomme qui vérifiera les gros contrats, comme le bureau des coopératives ou un avocat."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour le plan de vente en groupe",
      "Les groupes qui déclarent avoir rédigé leurs statuts, tenu des registres ou s'être enregistrés dans les 90 jours (enquête de suivi)",
      "Les groupes qui déclarent une vente groupée avec un contrat écrit, et le prix comparé à la vente individuelle",
      "Les apprenants qui déclarent avoir évité une arnaque aux frais pour un prix ou au code PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou des registres pour le groupe",
      "Un téléphone simple pour les prix, les SMS ou WhatsApp, et une calculatrice",
      "Des statuts types du bureau des coopératives et un exemple de contrat d'acheteur, si possible",
      "Environ 60 minutes au total, en séances courtes, plus du temps avec le groupe pour écrire le plan de vente"
    ],
    facilitatorNotes: [
      "Faites le cours avec un groupe réel ou en formation : faites le test de départ ensemble, puis tenez une courte réunion d'entraînement avec un ordre du jour et un procès-verbal.",
      "Invitez un agent des coopératives à expliquer l'enregistrement ; vérifiez les frais et les étapes actuels avant la séance.",
      "Organisez une journée de collecte d'entraînement avec une balance, le tri et un cahier des livraisons.",
      "Ne demandez jamais aux membres leur code PIN ou leurs coordonnées bancaires ; utilisez des valeurs fictives dans les exemples de registres.",
      "Évaluez le plan de vente avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
