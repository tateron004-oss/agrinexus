"use strict";

// Koach Learn course (French translation of shared/quality-six-sigma-yellow-belt.js). See scripts/koachlearn-courses/README.md, "Translations".

const ASQ = { name: "ASQ : Certified Six Sigma Yellow Belt (conditions, examen et Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC : Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-fr",
  lang: "fr",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Les bases de la qualité (préparation au Six Sigma Yellow Belt)",
  skills: "Utiliser les étapes DMAIC, Rédiger un énoncé du problème, Relever des données sur une feuille de relevé, Trouver les causes profondes avec Pareto et les 5 pourquoi, Éliminer le gaspillage et garder le progrès, Préparer un examen Yellow Belt",
  outcome: "mener une petite amélioration de la qualité sur un vrai processus avec les cinq étapes DMAIC (Définir, Mesurer, Analyser, Améliorer, Contrôler), la présenter sur une seule page et suivre un plan daté pour préparer un examen Six Sigma Yellow Belt.",
  about: [
    "Dans chaque lieu de travail, des processus tournent mal : commandes en retard, factures fausses, longues attentes, pièces qui ne s'emboîtent pas. Six Sigma est une façon de les corriger avec des faits plutôt qu'avec des suppositions, et Lean est une façon de supprimer les étapes inutiles. Les employeurs de l'industrie, des entrepôts, de la santé, de l'administration, de l'hôtellerie et des bureaux recherchent des personnes qui connaissent les bases.",
    "Ce cours s'adresse aux personnes qui cherchent un emploi, aux travailleurs de terrain qui veulent progresser, aux anciens militaires qui passent à des métiers civils des opérations et aux propriétaires de petites entreprises. Vous n'avez besoin que d'additions, de divisions et de pourcentages.",
    "Vous allez choisir un vrai processus de votre travail, de votre entreprise ou de votre maison et l'améliorer pas à pas, une étape DMAIC par leçon. Le cours vous PRÉPARE à un examen Yellow Belt, comme l'ASQ Certified Six Sigma Yellow Belt ou l'IASSC Certified Lean Six Sigma Yellow Belt ; il ne délivre aucun certificat. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » et une vérification rapide de deux questions ; il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Réalisez un projet d'amélioration d'une page pour un vrai processus : un énoncé du problème et un objectif, une carte simple du processus, une feuille de relevé avec au moins 20 données et le taux de défauts, un diagramme de Pareto et des 5 pourquoi pour le plus gros problème, une petite solution que vous avez testée et un contrôle pour garder le progrès. Ajoutez un plan d'étude et d'examen daté pour l'examen Yellow Belt de votre choix, avec la page officielle où vous avez vérifié ses règles actuelles.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui cherchent un emploi ou une promotion dans les opérations, l'industrie, les entrepôts, les services administratifs de santé, l'hôtellerie et l'administration ; anciens militaires qui passent à des postes civils des opérations et de la qualité ; propriétaires de petites entreprises qui veulent moins d'erreurs et moins de gaspillage.",
    startingPoint: "La plupart ont vu des problèmes se répéter au travail et ont des idées pour les corriger, mais n'ont jamais utilisé de méthode structurée, relevé des données de façon voulue ni employé des mots de la qualité comme défaut, cause profonde ou DMAIC. Le niveau en calcul est celui de la vie courante : compter, diviser et calculer des pourcentages.",
    gap: "Les compétences en qualité et en amélioration continue figurent dans beaucoup d'offres d'emploi, et le Yellow Belt est une première certification courante. Les apprenants doivent mener une petite amélioration avec des faits et la présenter sur une page, dont ils pourront parler en entretien, et connaître les vraies étapes vers un examen reconnu.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme de la qualité est expliqué la première fois",
      "Appareils : du papier et un stylo suffisent ; un tableur gratuit (Google Sheets ou Excel) aide pour les graphiques",
      "Temps : leçons de 5 minutes, plus une à deux semaines de relevé de données pour la tâche finale",
      "Les règles, formats et frais des examens changent et varient selon l'organisme de certification ; les apprenants vérifient la page officielle",
      "Aucun nom de client, aucune information sur des patients et aucun secret d'entreprise dans les données d'exercice"
    ],
    prerequisites: "Aucun. Les apprenants peu à l'aise avec les pourcentages peuvent suivre d'abord « Les maths du quotidien », et « Excel et tableurs » aide pour les graphiques."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de la description d'un projet d'amélioration", action: "nommer dans l'ordre les cinq étapes DMAIC et dire ce qui se passe dans chacune", standard: "avec les cinq étapes justes" },
    { id: "O2", condition: "Face à un processus qui a un problème répété", action: "rédiger un énoncé du problème et un objectif mesurable, et dessiner une carte simple du processus", standard: "avec quoi, où, quand et quelle ampleur, sans cause ni solution dans l'énoncé" },
    { id: "O3", condition: "Avec un processus à observer pendant une à deux semaines", action: "relever des données sur une feuille de relevé et calculer un taux de défauts", standard: "avec au moins 20 données et le calcul montré" },
    { id: "O4", condition: "À partir des données de votre feuille de relevé", action: "trouver le plus gros problème avec un diagramme de Pareto et remonter à sa cause profonde avec les 5 pourquoi", standard: "de sorte que l'équipe puisse agir sur la cause trouvée" },
    { id: "O5", condition: "À partir d'une cause profonde", action: "choisir une solution qui supprime le gaspillage ou les erreurs, la tester à petite échelle et mettre en place un contrôle", standard: "avec des données avant et après la solution" },
    { id: "O6", condition: "En utilisant la page officielle de l'ASQ ou de l'IASSC", action: "établir un plan d'étude et d'examen daté pour un examen Yellow Belt", standard: "avec le format et les règles de l'examen vérifiés sur cette page" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Définir et mesurer le problème",
      lessons: [
        {
          title: "La qualité, Six Sigma et les cinq étapes DMAIC",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nommer les cinq étapes DMAIC et dire ce que fait un Yellow Belt à chacune.",
          text: [
            "La qualité, c'est donner au client ce dont il a besoin, de la même façon, à chaque fois. Un défaut est tout ce que le client n'accepterait pas : une commande fausse, une livraison en retard, une pièce manquante, une erreur de facturation.",
            "Six Sigma est une méthode pour réduire les défauts en utilisant des données plutôt que des suppositions. Lean est une méthode pour réduire le gaspillage, c'est-à-dire les étapes qui prennent du temps sans apporter de valeur. Beaucoup d'employeurs enseignent les deux ensemble sous le nom de Lean Six Sigma.",
            "Les projets suivent cinq étapes appelées DMAIC (initiales anglaises) : Définir le problème, Mesurer son ampleur, Analyser pour trouver la cause profonde, Améliorer en testant une solution et Contrôler pour garder le progrès. Les ceintures (belts) indiquent le niveau de formation : un Yellow Belt (ceinture jaune) connaît les bases et aide aux projets, souvent en relevant des données et en dessinant les étapes ; les Green Belts et Black Belts dirigent des projets plus importants.",
            "Deux certifications Yellow Belt bien connues sont l'ASQ Certified Six Sigma Yellow Belt et l'IASSC Certified Lean Six Sigma Yellow Belt. L'ASQ et l'IASSC sont des organismes de certification en qualité. Ce cours vous prépare ; seul l'organisme de certification délivre la certification."
          ],
          steps: ["Définir : quel est le problème et quel est l'objectif ?", "Mesurer : à quelle fréquence arrive-t-il aujourd'hui ?", "Analyser : quelle est la cause profonde ?", "Améliorer : quelle solution marche quand vous la testez ?", "Contrôler : comment garder le progrès ?"],
          words: [["Défaut", "tout ce que le client n'accepterait pas, comme un article faux, en retard ou cassé."], ["Six Sigma", "une méthode pour réduire les défauts avec des données ; une très haute qualité, c'est environ 3,4 défauts par million d'occasions."], ["Lean", "une méthode pour supprimer les étapes qui gaspillent du temps ou des matériaux."], ["DMAIC", "Définir, Mesurer, Analyser, Améliorer, Contrôler : les cinq étapes d'un projet Six Sigma."], ["Yellow Belt", "une personne formée aux bases qui aide aux projets d'amélioration."]],
          slides: [
            { title: "Qualité et défauts", bullets: ["Qualité : ce dont le client a besoin, pareil à chaque fois", "Défaut : tout ce que le client n'accepterait pas"] },
            { title: "Six Sigma et Lean", bullets: ["Six Sigma : moins de défauts, avec des données", "Lean : moins d'étapes inutiles", "Ensemble : Lean Six Sigma"] },
            { title: "DMAIC dans l'ordre", bullets: ["Définir le problème", "Mesurer son ampleur", "Analyser la cause profonde", "Améliorer avec une solution testée, puis Contrôler pour la garder"] },
            { title: "Ceintures et certifications", bullets: ["Yellow Belt : connaît les bases, aide aux projets", "L'ASQ et l'IASSC proposent des examens Yellow Belt", "Ce cours vous prépare ; il ne vous certifie pas"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Choisissez un processus que vous connaissez et qui tourne mal trop souvent, au travail, dans une entreprise ou à la maison (par exemple des commandes envoyées en retard, des repas de midi erronés ou des factures envoyées avec des erreurs). Écrivez-le en haut d'une page, puis écrivez D, M, A, I, C de haut en bas, avec une question que vous poseriez à chaque étape.",
          youCanNow: "nommer dans l'ordre les cinq étapes DMAIC, dire ce que fait un Yellow Belt et choisir un processus à améliorer.",
          quickCheck: [
            { objective: "O1", q: "Quel est le bon ordre des étapes DMAIC ?", options: ["Concevoir, Fabriquer, Évaluer, Inspecter, Clôturer", "Mesurer, Définir, Améliorer, Analyser, Contrôler", "Définir, Mesurer, Analyser, Améliorer, Contrôler", "Définir, Gérer, Agir, Améliorer, Vérifier"], answer: 2, why: "DMAIC veut dire Définir, Mesurer, Analyser, Améliorer et Contrôler, dans cet ordre." },
            { objective: "O1", q: "Votre équipe teste une nouvelle façon d'emballer les commandes pour voir si les erreurs baissent. De quelle étape s'agit-il ?", options: ["Améliorer", "Définir", "Mesurer", "Contrôler"], answer: 0, why: "Tester une solution pour voir si elle marche se fait à l'étape Améliorer." }
          ]
        },
        {
          title: "Définir : l'énoncé du problème et la carte du processus",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rédiger un énoncé du problème et un objectif, et dessiner une carte simple du processus.",
          text: [
            "Un bon projet commence par un énoncé du problème clair. Il dit ce qui ne va pas, où, depuis quand, quelle est l'ampleur et pourquoi c'est important. Il ne cite PAS encore de cause ni de solution, car vous ne les avez pas trouvées. Exemple : « Depuis juin, 12 commandes de repas sur 100 au café du centre-ville sont fausses, ce qui entraîne des remboursements et des plaintes. »",
            "L'objectif dit de combien il faut s'améliorer, et pour quand : « Ramener les commandes de repas fausses à 3 sur 100 d'ici fin septembre. »",
            "Ensuite, dessinez la carte du processus. Écrivez chaque étape dans une case, du début à la fin, et reliez-les par des flèches. Un SIPOC est un tableau rapide de la vue d'ensemble : Fournisseurs (Suppliers), Entrées (Inputs), Étapes du processus (Process), Sorties (Outputs) et Clients (Customers). La voix du client (VOC) est ce que les clients disent dont ils ont besoin ; ce qui compte le plus pour eux s'appelle critique pour la qualité (CTQ)."
          ],
          steps: ["Écrivez ce qui ne va pas, où, depuis quand et quelle est l'ampleur.", "Ajoutez pourquoi c'est important (coût, temps, clients, sécurité).", "Vérifiez : ni cause ni solution dans l'énoncé.", "Écrivez un objectif avec un chiffre et une date.", "Dessinez le processus en 5 à 8 cases, du début à la fin."],
          words: [["Énoncé du problème", "une courte description, fondée sur des faits, de ce qui ne va pas, où, quand et avec quelle ampleur."], ["Carte du processus", "un dessin des étapes d'un processus dans l'ordre, avec des cases et des flèches."], ["SIPOC", "un tableau d'une page avec Fournisseurs, Entrées, Processus, Sorties et Clients."], ["Voix du client (VOC)", "ce que les clients disent dont ils ont besoin ou ce dont ils se plaignent."], ["Critique pour la qualité (CTQ)", "une caractéristique qui compte le plus pour le client, comme être à l'heure ou être juste."]],
          slides: [
            { title: "Un bon énoncé du problème", bullets: ["Quoi, où, depuis quand, quelle ampleur", "Pourquoi c'est important", "Pas encore de cause ni de solution"] },
            { title: "Un bon objectif", bullets: ["De combien mieux, et pour quand", "Exemple : commandes fausses de 12 à 3 sur 100 d'ici fin septembre"] },
            { title: "Dessinez le processus", bullets: ["5 à 8 cases, du début à la fin", "Les flèches montrent l'ordre", "SIPOC : Fournisseurs, Entrées, Processus, Sorties, Clients"] },
            { title: "Écoutez le client", bullets: ["Voix du client : ce dont il a besoin", "Critique pour la qualité : ce qui compte le plus pour lui"] }
          ],
          tryIt: "Pour le processus choisi, rédigez un énoncé du problème avec quoi, où, depuis quand et quelle ampleur (utilisez votre meilleure estimation pour l'instant), un objectif avec un chiffre et une date, et une carte du processus de 5 à 8 cases sur papier.",
          youCanNow: "rédiger un énoncé du problème et un objectif, et dessiner une carte simple du processus.",
          quickCheck: [
            { objective: "O2", q: "Quel est le meilleur énoncé du problème ?", options: ["« Le nouveau cuisinier est négligent. »", "« Depuis mars, 8 envois sur 50 de l'entrepôt est arrivent en retard, ce qui entraîne des remboursements aux clients. »", "« Il nous faut un nouveau système informatique. »", "« L'expédition, c'est mauvais. »"], answer: 1, why: "Il dit quoi, où, depuis quand et quelle ampleur, sans accuser une cause ni citer une solution." },
            { objective: "O2", q: "Que veut dire le P de SIPOC ?", options: ["Prix", "Personnel", "Plan", "Processus"], answer: 3, why: "SIPOC veut dire Fournisseurs, Entrées, Processus, Sorties et Clients." }
          ]
        },
        {
          title: "Mesurer : feuilles de relevé et taux de défauts",
          objectives: ["O3"],
          minutes: 6,
          goal: "Relever des données sur une feuille de relevé et calculer un taux de défauts.",
          text: [
            "À l'étape Mesurer, vous découvrez à quelle fréquence le problème arrive vraiment. Les suppositions sont souvent fausses, alors vous comptez.",
            "Une feuille de relevé est un formulaire simple, sur papier ou dans un tableur. Sur le côté, notez les types de défauts (mauvais article, article manquant, retard). En haut, notez les jours. Faites un trait chaque fois qu'un défaut arrive, et comptez aussi le total des unités vérifiées.",
            "Le taux de défauts est le nombre d'unités défectueuses divisé par le total des unités, multiplié par 100. Si 15 commandes sur 200 étaient fausses : 15 / 200 = 0,075, soit 7,5 %. Six Sigma utilise aussi le DPMO, les défauts par million d'occasions : les défauts divisés par (unités multipliées par occasions par unité), multiplié par 1 000 000. Si 500 factures ont chacune 4 occasions d'erreur et que vous trouvez 10 erreurs : 10 / (500 x 4) = 0,005, multiplié par 1 000 000 = 5 000 DPMO.",
            "Mesurez toujours de la même façon : même définition du défaut, même moment de la journée, même personne ou règles claires. C'est votre niveau de départ, le chiffre « avant » que vous comparerez plus tard."
          ],
          steps: ["Écrivez une définition claire de chaque défaut.", "Faites une feuille de relevé : types de défauts sur le côté, jours en haut.", "Notez chaque défaut d'un trait et comptez le total des unités vérifiées.", "Taux de défauts = unités défectueuses / total des unités x 100.", "Notez-le comme votre niveau de départ."],
          words: [["Feuille de relevé", "un formulaire simple pour compter combien de fois arrive chaque type de problème."], ["Taux de défauts", "la part des unités qui ont un défaut, en pourcentage."], ["DPMO", "défauts par million d'occasions : défauts / (unités x occasions par unité) x 1 000 000."], ["Niveau de départ", "la performance du processus avant que vous le changiez."]],
          slides: [
            { title: "Comptez, ne devinez pas", bullets: ["Mesurez la fréquence du problème", "Utilisez une seule définition claire du défaut"] },
            { title: "La feuille de relevé", bullets: ["Types de défauts sur le côté", "Jours en haut", "Des traits, plus le total des unités vérifiées"] },
            { title: "Le calcul", bullets: ["Taux de défauts = défectueuses / total x 100", "15 fausses sur 200 = 7,5 %", "DPMO = défauts / (unités x occasions) x 1 000 000"] },
            { title: "Votre niveau de départ", bullets: ["Le chiffre « avant »", "Mesurez toujours de la même façon", "Vous le comparerez après la solution"] }
          ],
          tryIt: "Faites une feuille de relevé pour votre processus, sur papier ou dans un tableur. Relevez au moins 20 données pendant la semaine qui vient (commencez aujourd'hui), puis calculez votre taux de défauts et montrez le calcul. Entraînez-vous maintenant : 9 livraisons en retard sur 150, cela fait quel pourcentage ? (Réponse : 9 / 150 = 0,06 = 6 %.)",
          youCanNow: "relever des données sur une feuille de relevé, calculer un taux de défauts et fixer votre niveau de départ.",
          quickCheck: [
            { objective: "O3", q: "Vous avez vérifié 80 commandes et 4 étaient fausses. Quel est le taux de défauts ?", options: ["5 %", "4 %", "20 %", "8 %"], answer: 0, why: "4 / 80 = 0,05, soit 5 %." },
            { objective: "O3", q: "Pourquoi écrire une définition claire de chaque défaut avant de compter ?", options: ["Pour que le graphique soit plus joli", "Pour que le chef puisse le signer", "Pour que tout le monde compte de la même façon et qu'on puisse se fier aux chiffres", "Pour avoir besoin de moins de données"], answer: 2, why: "Si chacun compte des choses différentes, les données ne peuvent pas être comparées ni fiables." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Définir et mesurer le problème",
        questions: [
          { objective: "O1", q: "À quelle étape DMAIC cherchez-vous la cause profonde ?", options: ["Définir", "Analyser", "Contrôler", "Mesurer"], answer: 1, why: "À l'étape Analyser, vous utilisez des données et des outils pour trouver la cause profonde." },
          { objective: "O1", q: "Que fait d'habitude un Yellow Belt dans un projet ?", options: ["Il possède l'entreprise", "Il délivre les certificats", "Il approuve seul le budget", "Il aide à des tâches comme relever des données et dessiner les étapes"], answer: 3, why: "Les Yellow Belts connaissent les bases et soutiennent les projets, souvent en relevant des données et en dessinant le processus." },
          { objective: "O2", q: "Un énoncé du problème dit : « Il y a des erreurs parce que le personnel s'en moque. » Qu'est-ce qui ne va pas ?", options: ["Il accuse une cause avant tout relevé de données", "Il est trop court à lire", "Il utilise des chiffres", "Rien ne va mal"], answer: 0, why: "Un énoncé du problème décrit le problème avec des faits ; la cause se trouve plus tard, à l'étape Analyser." },
          { objective: "O3", q: "Vous avez vérifié 250 formulaires et 10 avaient des erreurs. Quel est le taux de défauts ?", options: ["10 %", "2,5 %", "4 %", "25 %"], answer: 2, why: "10 / 250 = 0,04, soit 4 %." },
          { objective: "O3", q: "Qu'est-ce que le niveau de départ ?", options: ["L'objectif que vous voulez atteindre", "La ligne du bas d'un graphique", "Le rapport final", "La performance du processus avant que vous le changiez"], answer: 3, why: "Le niveau de départ est le chiffre « avant » que vous comparez après la solution." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Analyser, améliorer et contrôler",
      lessons: [
        {
          title: "Analyser : diagrammes de Pareto, arêtes de poisson et 5 pourquoi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Trouver le plus gros problème avec un diagramme de Pareto et sa cause profonde avec les 5 pourquoi.",
          text: [
            "Un diagramme de Pareto est un graphique en barres trié de la plus grande barre à la plus petite. Il montre qu'un petit nombre de causes produit souvent la plupart des problèmes, ce qu'on appelle souvent la règle des 80/20. Commencez par la plus grande barre.",
            "Un diagramme en arête de poisson (aussi appelé diagramme de cause à effet ou d'Ishikawa) aide une équipe à lister les causes possibles. Écrivez le problème à la « tête », puis dessinez des arêtes pour des groupes de causes, comme Méthodes, Machines, Matières, Main-d'œuvre, Mesure et Milieu.",
            "Ensuite, demandez « Pourquoi ? » environ cinq fois pour passer du symptôme à une cause profonde que vous pouvez corriger. Exemple : Les commandes sont fausses. Pourquoi ? Le cuisinier a mal lu le ticket. Pourquoi ? Le ticket était écrit à la main. Pourquoi ? L'imprimante est en panne. Pourquoi ? Personne n'est chargé de la réparer. Pourquoi ? Il n'y a pas de contrôle d'entretien. Cause profonde : pas de contrôle d'entretien de l'imprimante.",
            "Accuser quelqu'un n'est pas une cause profonde. Si la réponse est « quelqu'un a été négligent », continuez à demander pourquoi le processus a laissé passer l'erreur."
          ],
          steps: ["Faites le total de chaque type de défaut de votre feuille de relevé.", "Triez-les du plus grand au plus petit et dessinez les barres.", "Choisissez la plus grande barre.", "Listez les causes possibles sur une arête de poisson.", "Demandez « Pourquoi ? » environ cinq fois jusqu'à une cause sur laquelle vous pouvez agir."],
          words: [["Diagramme de Pareto", "un graphique en barres trié du plus grand au plus petit, pour voir quels quelques problèmes comptent le plus."], ["Règle des 80/20", "le constat qu'un petit nombre de causes produit souvent la plupart des problèmes."], ["Diagramme en arête de poisson", "un dessin qui regroupe les causes possibles d'un problème ; on l'appelle aussi diagramme d'Ishikawa."], ["Cause profonde", "la vraie raison d'un problème ; corrigez-la et le problème s'arrête ou diminue."], ["5 pourquoi", "demander « Pourquoi ? » encore et encore, environ cinq fois, pour atteindre la cause profonde."]],
          slides: [
            { title: "Diagramme de Pareto", bullets: ["Barres triées de la plus grande à la plus petite", "Peu de causes font la plupart des problèmes (80/20)", "Commencez par la plus grande barre"] },
            { title: "Diagramme en arête de poisson", bullets: ["Le problème à la tête", "Arêtes : Méthodes, Machines, Matières, Main-d'œuvre, Mesure, Milieu"] },
            { title: "5 pourquoi", bullets: ["Demandez « Pourquoi ? » environ cinq fois", "Commandes fausses, puis tickets manuscrits, puis imprimante en panne, puis aucun contrôle"] },
            { title: "Accuser n'est pas une cause profonde", bullets: ["Demandez pourquoi le processus a laissé passer l'erreur", "Trouvez une cause sur laquelle agir"] }
          ],
          tryIt: "Faites le total de chaque type de défaut de votre feuille de relevé, triez-les et dessinez un diagramme de Pareto sur papier ou dans un tableur. Puis écrivez les 5 pourquoi pour la plus grande barre. Arrêtez-vous quand vous atteignez une cause que vous pouvez corriger et qui n'accuse personne.",
          youCanNow: "dessiner un diagramme de Pareto, choisir le plus gros problème et remonter à sa cause profonde avec les 5 pourquoi.",
          quickCheck: [
            { objective: "O4", q: "Votre diagramme de Pareto montre : mauvaise taille 40, article manquant 25, retard 10, abîmé 5. Par où commencez-vous ?", options: ["Abîmé, parce que c'est le plus facile", "Les quatre en même temps", "Retard, parce que les clients détestent attendre", "Mauvaise taille, la plus grande barre"], answer: 3, why: "Un diagramme de Pareto vous dit de commencer par la plus grande barre, là où une solution aide le plus." },
            { objective: "O4", q: "Vos 5 pourquoi se terminent par « le travailleur a été négligent ». Que devez-vous faire ?", options: ["S'arrêter là et sanctionner le travailleur", "Continuer à demander pourquoi le processus a laissé passer l'erreur", "Commencer un nouveau projet", "Retirer le travailleur du graphique"], answer: 1, why: "Accuser n'est pas une cause profonde ; cherchez ce qui, dans le processus, a permis l'erreur." }
          ]
        },
        {
          title: "Améliorer : supprimer le gaspillage et rendre le travail anti-erreur",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir une solution qui supprime le gaspillage ou les erreurs et la tester à petite échelle.",
          text: [
            "Le Lean nomme huit types de gaspillage. Un moyen facile de les retenir est le mot anglais DOWNTIME : Défauts, Surproduction (Overproduction), Attente (Waiting), Talents non utilisés (Non-used talent), Transport, Stocks (Inventory, trop de stock), Mouvements (Motion, marcher ou se pencher en trop) et Traitements en trop (Extra processing).",
            "Les bonnes solutions rendent souvent la bonne façon de faire la plus facile. Les 5S organisent un poste de travail : Trier (Sort), Ranger (Set in order), Nettoyer (Shine), Standardiser (Standardize) et Maintenir (Sustain). Le détrompeur (poka-yoke, en japonais) rend les erreurs difficiles ou impossibles, comme une prise qui ne rentre que dans un sens, un formulaire qui ne s'envoie pas si une case est vide ou un bac à code couleur.",
            "Testez d'abord la solution à petite échelle : une équipe, un poste ou une semaine. C'est un projet pilote. Mesurez de la même façon que pour votre niveau de départ et comparez. Si les chiffres se sont améliorés, généralisez ; sinon, essayez l'idée suivante."
          ],
          steps: ["Listez des solutions qui s'attaquent à la cause profonde.", "Préférez celles qui suppriment le gaspillage ou rendent les erreurs difficiles.", "Faites un petit pilote : une équipe, un poste ou une semaine.", "Mesurez de la même façon que le niveau de départ.", "Comparez avant et après."],
          words: [["Gaspillage", "toute étape qui consomme du temps ou des matériaux sans apporter de valeur au client."], ["DOWNTIME", "un moyen mnémotechnique pour les huit gaspillages : Défauts, Surproduction, Attente, Talents non utilisés, Transport, Stocks, Mouvements, Traitements en trop."], ["5S", "Trier, Ranger, Nettoyer, Standardiser, Maintenir : une façon d'organiser un poste de travail."], ["Détrompeur (poka-yoke)", "une conception qui rend les erreurs difficiles ou impossibles."], ["Pilote", "un petit test court d'une solution avant de l'utiliser partout."]],
          slides: [
            { title: "Les huit gaspillages : DOWNTIME", bullets: ["Défauts, Surproduction, Attente, Talents non utilisés", "Transport, Stocks, Mouvements, Traitements en trop"] },
            { title: "5S", bullets: ["Trier, Ranger, Nettoyer", "Standardiser, Maintenir"] },
            { title: "Le détrompeur", bullets: ["Rendre la bonne façon la plus facile", "Une prise qui rentre dans un seul sens ; un formulaire qui bloque les cases vides"] },
            { title: "D'abord un pilote", bullets: ["Une équipe, un poste ou une semaine", "Mesurez comme pour le niveau de départ", "Mieux ? Généralisez. Pas mieux ? Essayez l'idée suivante"] }
          ],
          tryIt: "Écrivez trois solutions possibles pour votre cause profonde. Notez quel gaspillage chacune supprime ou comment elle rend le travail anti-erreur. Choisissez-en une, prévoyez un petit pilote (où, combien de temps, qui) et commencez à le mesurer de la même façon que votre niveau de départ.",
          youCanNow: "repérer les huit gaspillages, choisir une solution qui supprime le gaspillage ou les erreurs et la tester avec un petit pilote.",
          quickCheck: [
            { objective: "O5", q: "Les travailleurs traversent l'entrepôt plusieurs fois par jour pour aller chercher du ruban adhésif. De quel gaspillage s'agit-il ?", options: ["Surproduction", "Défauts", "Mouvements", "Stocks"], answer: 2, why: "Les déplacements et gestes en trop des personnes sont le gaspillage de mouvements." },
            { objective: "O5", q: "Vous avez une solution qui devrait marcher, selon vous. Quelle est la meilleure étape suivante ?", options: ["La tester à petite échelle et comparer avec le niveau de départ", "La déployer sur tous les sites d'un coup", "Ne pas mesurer, puisque vous êtes sûr", "Attendre un an pour voir"], answer: 0, why: "Un petit pilote mesuré comme le niveau de départ montre si la solution marche vraiment." }
          ]
        },
        {
          title: "Contrôler le progrès et préparer votre examen Yellow Belt",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Mettre en place un contrôle de la solution et établir un plan d'étude et d'examen daté.",
          text: [
            "Beaucoup de solutions s'effacent quand les gens reprennent leurs vieilles habitudes. À l'étape Contrôler, vous gardez le progrès : écrivez la nouvelle façon de faire comme travail standard (une courte liste ou une image des bonnes étapes), formez les gens et continuez à mesurer. Une courbe de suivi montre vos chiffres dans le temps avec une ligne centrale ; une carte de contrôle ajoute des limites qui montrent quand le processus a changé plus que la normale. Écrivez un plan de contrôle simple : quoi vérifier, à quelle fréquence, qui vérifie et que faire si le chiffre se dégrade.",
            "Préparez maintenant votre certification. L'ASQ Certified Six Sigma Yellow Belt n'exige ni expérience ni diplôme, et ses examens se passent à livre ouvert avec vos propres documents de référence reliés, selon asq.org. L'IASSC Certified Lean Six Sigma Yellow Belt n'a pas de prérequis, et son examen se passe à livre fermé et sous surveillance, selon iassc.org. Les formats, frais et règles changent : lisez la page officielle avant de vous inscrire. Certains employeurs proposent aussi leur propre formation Yellow Belt en interne.",
            "Téléchargez le Body of Knowledge de l'organisme de certification (la liste des sujets que l'examen peut couvrir), cochez chaque sujet que vous connaissez et prévoyez du temps d'étude pour le reste. Inscrivez de vraies dates dans votre agenda et réservez l'examen seulement quand vos résultats aux tests d'entraînement sont stables."
          ],
          steps: ["Écrivez la nouvelle façon de faire comme travail standard.", "Faites un plan de contrôle : quoi, à quelle fréquence, qui, et que faire si cela se dégrade.", "Tenez une courbe de suivi pendant au moins quelques semaines.", "Choisissez un examen et lisez sa page officielle.", "Utilisez le Body of Knowledge pour fixer des dates d'étude et une date d'examen visée."],
          words: [["Travail standard", "la meilleure façon convenue de faire une tâche, écrite en étapes simples ou en images."], ["Courbe de suivi", "un graphique en ligne d'une mesure dans le temps, pour voir les tendances."], ["Carte de contrôle", "une courbe de suivi avec des limites qui montrent quand un processus change plus que la normale."], ["Plan de contrôle", "un court plan qui dit quoi vérifier, à quelle fréquence, qui vérifie et que faire si cela se dégrade."], ["Body of Knowledge", "la liste officielle des sujets qu'un examen peut couvrir."]],
          slides: [
            { title: "Gardez le progrès", bullets: ["Écrivez la nouvelle façon comme travail standard", "Formez les gens", "Continuez à mesurer"] },
            { title: "Des graphiques qui surveillent le processus", bullets: ["Courbe de suivi : chiffres dans le temps avec une ligne centrale", "Carte de contrôle : ajoute des limites de variation normale"] },
            { title: "Deux examens Yellow Belt", bullets: ["ASQ CSSYB : livre ouvert, aucune expérience exigée", "IASSC ICYB : livre fermé, surveillé, sans prérequis", "Vérifiez la page officielle : les règles changent"] },
            { title: "Votre plan d'étude et d'examen", bullets: ["Téléchargez le Body of Knowledge", "Cochez ce que vous savez ; planifiez le reste", "De vraies dates ; réservez quand vos tests sont stables"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Tâche finale : terminez votre projet d'une page (énoncé du problème et objectif, carte du processus, feuille de relevé et taux de défauts, diagramme de Pareto et 5 pourquoi, la solution testée en pilote avec les chiffres avant et après, et un plan de contrôle). Puis ouvrez la page Yellow Belt de l'ASQ ou de l'IASSC, écrivez le format d'examen que vous y avez trouvé et faites un plan d'étude avec au moins quatre séances d'étude datées et une date d'examen visée.",
          youCanNow: "garder un progrès grâce au travail standard et à un plan de contrôle, et suivre un plan daté vers un examen Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Trois mois après une solution, les erreurs remontent peu à peu. Quelle étape a manqué ?", options: ["Définir", "Contrôler", "Mesurer", "Analyser"], answer: 1, why: "L'étape Contrôler garde le progrès grâce au travail standard, à la formation et aux vérifications régulières." },
            { objective: "O6", q: "Où devez-vous vérifier les règles et le format actuels d'un examen Yellow Belt ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès d'un ami qui l'a réussi il y a des années", "Dans une publicité pour un cours bon marché", "Sur la page officielle de l'organisme de certification, comme asq.org ou iassc.org"], answer: 3, why: "Les règles, formats et frais des examens changent ; la page de l'organisme de certification lui-même est la source fiable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Analyser, améliorer et contrôler",
        questions: [
          { objective: "O4", q: "Que montre un diagramme de Pareto ?", options: ["Les quelques problèmes qui causent la plupart des ennuis", "Les étapes d'un processus dans l'ordre", "Le budget d'un projet", "Qui est responsable de la faute"], answer: 0, why: "Un diagramme de Pareto trie les problèmes du plus grand au plus petit pour faire voir les quelques causes essentielles." },
          { objective: "O4", q: "Quel outil regroupe les causes possibles en arêtes comme Méthodes, Machines et Matières ?", options: ["Une feuille de relevé", "Une courbe de suivi", "Un diagramme en arête de poisson", "Un SIPOC"], answer: 2, why: "Le diagramme en arête de poisson (Ishikawa) regroupe les causes possibles d'un problème." },
          { objective: "O5", q: "Un formulaire ne s'envoie pas tant que toutes les cases obligatoires ne sont pas remplies. C'est un exemple de :", options: ["Surproduction", "Détrompeur", "Stocks", "Carte de contrôle"], answer: 1, why: "Le détrompeur (poka-yoke) rend l'erreur difficile ou impossible." },
          { objective: "O5", q: "Quelles sont les étapes des 5S ?", options: ["Vendre, Expédier, Épargner, Servir, Sourire", "Voir, Dire, Arrêter, Commencer, Signer", "Scanner, Noter, Résoudre, Trier, Envoyer", "Trier, Ranger, Nettoyer, Standardiser, Maintenir"], answer: 3, why: "Les 5S sont Trier, Ranger, Nettoyer, Standardiser et Maintenir." },
          { objective: "O6", q: "Qu'est-ce qu'un Body of Knowledge ?", options: ["La liste officielle des sujets qu'un examen peut couvrir", "Un manuel de médecine", "Le règlement de l'entreprise", "Une liste de réponses d'anciens examens"], answer: 0, why: "L'organisme de certification publie le Body of Knowledge pour que vous sachiez quoi étudier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la qualité (préparation au Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "Que veut dire DMAIC ?", options: ["Faire, Fabriquer, Demander, Inspecter, Clôturer", "Concevoir, Surveiller, Agir, Informer, Vérifier", "Définir, Mesurer, Analyser, Améliorer, Contrôler", "Décider, Mesurer, Approuver, Installer, Compter"], answer: 2, why: "Les cinq étapes d'un projet Six Sigma sont Définir, Mesurer, Analyser, Améliorer et Contrôler." },
      { objective: "O1", q: "À quelle étape rédige-t-on l'énoncé du problème et l'objectif ?", options: ["Définir", "Améliorer", "Contrôler", "Analyser"], answer: 0, why: "L'étape Définir pose le problème, l'objectif et le processus." },
      { objective: "O1", q: "Quelle affirmation sur un cours Yellow Belt comme celui-ci est vraie ?", options: ["Le terminer donne le certificat de l'ASQ", "Il remplace tout examen", "Seuls les Black Belts peuvent le suivre", "Il vous prépare ; l'organisme de certification délivre la certification"], answer: 3, why: "Un cours vous prépare ; seul l'organisme de certification, comme l'ASQ ou l'IASSC, délivre la certification." },
      { objective: "O2", q: "Que contient un bon énoncé du problème ?", options: ["La solution que vous préférez", "Quoi, où, depuis quand et quelle ampleur", "Le nom du travailleur à accuser", "Seulement le mot « problème »"], answer: 1, why: "Il donne les faits du problème sans citer de cause ni de solution." },
      { objective: "O2", q: "Lequel est un objectif mesurable ?", options: ["« Faire mieux sur les commandes »", "« Faire plus d'efforts »", "« Ramener les livraisons en retard de 10 % à 3 % d'ici le 31 décembre »", "« Rendre les clients plus heureux un jour »"], answer: 2, why: "Il a un chiffre et une date, donc vous pouvez savoir si vous l'avez atteint." },
      { objective: "O2", q: "Une carte du processus montre :", options: ["Les étapes d'un processus dans l'ordre, avec des cases et des flèches", "Les bénéfices de l'entreprise", "L'emplacement du bureau sur un plan de la ville", "Quel travailleur est le plus rapide"], answer: 0, why: "Une carte du processus dessine chaque étape du début à la fin." },
      { objective: "O3", q: "À quoi sert une feuille de relevé ?", options: ["À payer les travailleurs", "À signer des contrats", "À rédiger l'objectif", "À compter combien de fois arrive chaque type de problème"], answer: 3, why: "Une feuille de relevé est un formulaire simple pour compter les défauts par type." },
      { objective: "O3", q: "Vous avez vérifié 400 factures et 12 avaient des erreurs. Quel est le taux de défauts ?", options: ["12 %", "3 %", "4 %", "0,3 %"], answer: 1, why: "12 / 400 = 0,03, soit 3 %." },
      { objective: "O3", q: "100 unités, avec chacune 5 occasions d'erreur, ont 2 erreurs en tout. Quel est le DPMO ?", options: ["2 000", "400", "4 000", "20 000"], answer: 2, why: "2 / (100 x 5) = 0,004, et 0,004 x 1 000 000 = 4 000." },
      { objective: "O4", q: "Dans un diagramme de Pareto, la règle des 80/20 veut dire :", options: ["Un petit nombre de causes produit souvent la plupart des problèmes", "80 travailleurs font 20 erreurs", "Corriger 20 problèmes par jour", "Toutes les causes comptent autant"], answer: 0, why: "Pareto montre les quelques causes essentielles, donc vous commencez par la plus grande barre." },
      { objective: "O4", q: "Pourquoi demander « Pourquoi ? » environ cinq fois ?", options: ["Pour ralentir la réunion", "Pour trouver un coupable", "Parce que l'examen en exige exactement cinq", "Pour aller au-delà du symptôme jusqu'à une cause profonde que vous pouvez corriger"], answer: 3, why: "Chaque « pourquoi » descend d'un niveau jusqu'à une cause sur laquelle vous pouvez agir." },
      { objective: "O4", q: "Quelle réponse est une cause profonde sur laquelle vous pouvez agir ?", options: ["« Les gens sont paresseux »", "« Il n'y a pas de contrôle d'entretien de l'imprimante à tickets »", "« La malchance »", "« Les clients sont difficiles »"], answer: 1, why: "Une cause profonde est une faille du processus que vous pouvez corriger, pas une accusation ni la chance." },
      { objective: "O5", q: "Des cartons de stock en trop remplissent l'arrière-boutique et certains périment. De quel gaspillage s'agit-il ?", options: ["Mouvements", "Attente", "Stocks", "Talents non utilisés"], answer: 2, why: "Avoir trop de stock sous la main est le gaspillage de stocks." },
      { objective: "O5", q: "Avant de généraliser une solution partout, vous devez :", options: ["La tester dans un petit pilote et comparer avec le niveau de départ", "Ne pas mesurer", "Changer cinq choses à la fois", "Demander aux clients d'attendre"], answer: 0, why: "Un pilote montre si la solution marche avant de dépenser du temps et de l'argent pour l'étendre." },
      { objective: "O5", q: "Que dit un plan de contrôle ?", options: ["Qui reçoit une prime", "Seulement la date de début du projet", "Comment rédiger un énoncé du problème", "Quoi vérifier, à quelle fréquence, qui vérifie et que faire si cela se dégrade"], answer: 3, why: "Un plan de contrôle garde le progrès grâce à des vérifications régulières et une réponse prévue." },
      { objective: "O5", q: "Une courbe de suivi est :", options: ["Une liste des huit gaspillages", "Un graphique en ligne d'une mesure dans le temps", "Un dessin des causes", "Un plan du bâtiment"], answer: 1, why: "Une courbe de suivi montre les données dans le temps pour voir si le progrès tient." },
      { objective: "O6", q: "Selon asq.org, l'examen ASQ Certified Six Sigma Yellow Belt est :", options: ["Réservé aux personnes ayant cinq ans d'expérience", "Passé uniquement en salle chez votre employeur", "À livre ouvert, sans exigence d'expérience ni de diplôme", "À livre fermé, sans aucune note"], answer: 2, why: "L'ASQ indique que le CSSYB n'exige ni expérience ni diplôme et que ses examens sont à livre ouvert." },
      { objective: "O6", q: "Selon iassc.org, l'examen Yellow Belt de l'IASSC est :", options: ["À livre fermé et surveillé", "À livre ouvert avec toutes les notes", "Sans limite de temps", "Réservé aux membres de l'ASQ"], answer: 0, why: "L'IASSC présente l'examen ICYB comme étant à livre fermé et surveillé." },
      { objective: "O6", q: "Quelle est la meilleure première étape pour construire votre plan d'étude ?", options: ["Réserver l'examen pour demain", "Acheter le cours le plus cher", "Apprendre par cœur d'anciennes réponses trouvées sur un site", "Télécharger le Body of Knowledge et cocher les sujets à étudier"], answer: 3, why: "Le Body of Knowledge montre ce que couvre l'examen, pour que vous prévoyiez du temps d'étude pour vos lacunes." },
      { objective: "O6", q: "Quand devez-vous réserver la date de votre examen ?", options: ["Avant d'avoir étudié quoi que ce soit", "Quand vos résultats d'entraînement sont stables et que vous avez vérifié les règles officielles", "Jamais ; les certificats ne servent à rien", "Seulement quand votre employeur vous le dit"], answer: 1, why: "Des résultats d'entraînement stables et des règles à jour montrent que vous êtes prêt pour l'examen." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Problème et objectif", objective: "O2", notYet: "L'énoncé est vague ou cite une cause ou une solution ; l'objectif n'a ni chiffre ni date.", meets: "L'énoncé dit quoi, où, depuis quand et quelle ampleur ; l'objectif a un chiffre et une date ; une carte du processus de 5 à 8 étapes est jointe.", exceeds: "Inclut aussi un SIPOC ou nomme ce qui compte le plus pour le client (CTQ)." },
      { name: "Données et taux de défauts", objective: "O3", notYet: "Moins de 20 données, ou pas de définition claire du défaut.", meets: "Une feuille de relevé avec au moins 20 données et le taux de défauts avec le calcul montré.", exceeds: "Donne aussi le DPMO, ou montre que les mêmes règles de comptage ont été utilisées chaque jour." },
      { name: "Cause profonde", objective: "O4", notYet: "Pas de diagramme de Pareto, ou les 5 pourquoi se terminent par une accusation.", meets: "Un diagramme de Pareto trié du plus grand au plus petit et des 5 pourquoi qui aboutissent à une cause liée au processus sur laquelle quelqu'un peut agir.", exceeds: "Utilise aussi une arête de poisson pour montrer d'autres causes que l'équipe a écartées." },
      { name: "Solution et contrôle", objective: "O5", notYet: "La solution n'a pas été testée, ou il n'y a pas de chiffres avant et après.", meets: "Une solution testée en pilote avec des chiffres avant et après et un plan de contrôle (quoi, à quelle fréquence, qui, que faire si cela se dégrade).", exceeds: "Inclut aussi un travail standard ou une courbe de suivi sur plusieurs semaines." },
      { name: "Le fil DMAIC", objective: "O1", notYet: "La page part dans tous les sens et des étapes manquent ou sont dans le désordre.", meets: "La page suit Définir, Mesurer, Analyser, Améliorer, Contrôler dans l'ordre.", exceeds: "L'apprenant peut expliquer le projet en moins de deux minutes, comme en entretien d'embauche." },
      { name: "Plan d'étude et d'examen", objective: "O6", notYet: "Aucune date, ou aucune page officielle vérifiée.", meets: "Nomme un examen, le format vérifié sur sa page officielle, au moins quatre séances d'étude datées et une date d'examen visée.", exceeds: "Relie aussi les séances d'étude aux sujets du Body of Knowledge et inclut des dates de tests d'entraînement." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui passent et réussissent un examen Yellow Belt dans les 6 mois (enquête de suivi)",
      "Apprenants qui utilisent leur projet d'une page en entretien, ou obtiennent un emploi, une promotion ou une place dans une équipe d'amélioration (enquête de suivi)",
      "Apprenants et propriétaires de petites entreprises qui signalent un taux de défauts plus bas ou moins de gaspillage sur le processus choisi 30 jours plus tard"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Du papier, un stylo et une règle pour les feuilles de relevé, les graphiques et les cartes du processus",
      "En option : un tableur gratuit (Google Sheets ou Microsoft Excel) pour les diagrammes de Pareto et les courbes de suivi",
      "Un vrai processus à observer pendant une à deux semaines (au travail, dans une entreprise ou à la maison)",
      "Un accès à Internet pour lire la page officielle Yellow Belt de l'ASQ ou de l'IASSC",
      "Environ 60 minutes de leçons et de contrôles, plus une à deux semaines de relevé de données pour la tâche finale"
    ],
    facilitatorNotes: [
      "En groupe : faites le test de départ ensemble, puis un chapitre par séance. Demandez à chacun de choisir son processus dès la première séance pour que le relevé des données commence tôt.",
      "Entraînez-vous en groupe à un diagramme de Pareto et à des 5 pourquoi sur un exemple commun (comme les commandes fausses d'un café) avant que chacun fasse les siens.",
      "Arrêtez tout enchaînement de 5 pourquoi qui se termine par une accusation et demandez ce qui, dans le processus, a permis l'erreur.",
      "Rappelez aux apprenants de ne noter ni noms de clients, ni informations sur des patients, ni secrets d'entreprise dans leurs données.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une ligne Pas encore à la fois ; faites pratiquer l'explication du projet comme une réponse d'entretien.",
      "Ne citez pas de mémoire les frais d'examen ni les notes de réussite ; envoyez les apprenants sur asq.org ou iassc.org pour les règles actuelles."
    ]
  }
};
