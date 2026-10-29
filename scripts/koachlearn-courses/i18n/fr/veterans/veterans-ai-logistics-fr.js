"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-logistics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-logistics-fr",
  lang: "fr",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "L'IA pour la logistique et les opérations",
  skills: "Parler le langage civil de la chaîne d'approvisionnement, Savoir où l'IA intervient en logistique, Construire une feuille de réapprovisionnement des stocks, Préparer un planning de livraison avec l'IA, Présenter un plan d'opérations",
  outcome: "construire une feuille simple de réapprovisionnement des stocks et un planning de livraison avec l'aide d'un assistant d'IA et d'un tableur gratuit, vérifier vous-même les calculs, et présenter le plan avec des mots civils de la logistique.",
  about: [
    "Si vous avez déplacé des personnes, des pièces, du carburant, de la nourriture ou des véhicules dans l'armée, vous avez déjà fait de la logistique. Les entrepôts, les entreprises de transport, les hôpitaux et les boutiques en ligne ont besoin des mêmes compétences, et ils utilisent maintenant des outils d'IA pour planifier.",
    "Dans ce cours, vous apprendrez les mots civils pour ce que vous avez fait, vous verrez où l'IA intervient aujourd'hui en logistique, et vous construirez deux vrais outils : une feuille de réapprovisionnement des stocks et un planning de livraison. Vous terminerez en présentant le plan, comme vous le feriez devant un chef, mais avec des mots civils.",
    "Chaque leçon dure environ cinq minutes. Il vous faut un tableur gratuit (Google Sheets ou Microsoft Excel sur le web) et un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites une présentation d'opérations d'une page pour une petite entreprise inventée (par exemple une banque alimentaire ou un magasin de pièces) : une feuille de stock avec un seuil de réapprovisionnement pour cinq articles, un planning de livraison d'une semaine préparé avec l'IA et vérifié par vous, trois risques avec un plan de secours pour chacun, et deux lignes de CV qui décrivent votre travail militaire en logistique avec des mots civils.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans et des militaires en transition qui ont déplacé des personnes, des pièces, du carburant, de la nourriture ou des véhicules pendant leur service et qui veulent travailler dans le civil, dans des entrepôts, le transport routier, les hôpitaux, les banques alimentaires ou les boutiques en ligne.",
    startingPoint: "Ils connaissent bien le travail d'approvisionnement, de transport et de maintenance, et savent utiliser un téléphone ou un ordinateur. La plupart utilisent des termes militaires, n'ont pas construit de feuille de réapprovisionnement dans un tableur gratuit et n'ont pas utilisé l'IA pour planifier des horaires ou lire des données.",
    gap: "Les employeurs civils de la logistique ont leurs propres termes et des outils de planification par IA, et ils ont besoin de personnes capables de vérifier les plans de l'IA par rapport aux vraies limites. Les apprenants doivent parler le langage civil de la chaîne d'approvisionnement, construire et vérifier une feuille de réapprovisionnement et un planning avec l'aide de l'IA, et présenter un plan clairement.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les étapes du tableur sont montrées une à une",
      "Appareils : un ordinateur est préférable pour les tableurs ; un outil gratuit comme Google Sheets ou Microsoft Excel en ligne",
      "Vie privée : seulement des entreprises inventées ; aucun nom de client ni adresse personnelle dans les outils d'IA publics",
      "Vérification des calculs : les apprenants vérifient les formules et les durées de l'IA à la main, avec une calculatrice et une application de cartes",
      "Temps : des leçons d'environ 5 minutes plus des exercices sur tableur"
    ],
    prerequisites: "Aucun. Une pratique de base du tableur aide mais n'est pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de tâches logistiques de votre service", action: "traduire des termes de logistique militaire dans les mots civils qu'utilisent les employeurs", standard: "avec cinq termes traduits et deux intitulés de métiers civils correspondants" },
    { id: "O2", condition: "À partir d'exemples d'IA dans les entrepôts et le transport routier", action: "décrire quatre usages de l'IA en logistique et la décision qu'une personne prend encore pour chacun", standard: "en nommant pour chacun une chose qu'une personne doit vérifier" },
    { id: "O3", condition: "À partir de la consommation par jour, du délai de livraison et du stock de sécurité de cinq articles", action: "construire un tableur qui calcule quand recommander chaque article", standard: "avec une ligne vérifiée à la main à la calculatrice" },
    { id: "O4", condition: "À partir d'arrêts, d'horaires, de véhicules et de chauffeurs", action: "utiliser un assistant d'IA pour préparer un planning de livraison d'une semaine et le vérifier par rapport aux vraies limites", standard: "en corrigeant chaque problème trouvé avec une application de cartes et les horaires des arrêts" },
    { id: "O5", condition: "À partir d'un petit tableau de données de livraison", action: "utiliser l'IA pour trouver des tendances et en confirmer une vous-même avec un filtre du tableur", standard: "et écrire la cause, une solution et la façon de la mesurer" },
    { id: "O6", condition: "À partir de votre feuille, de votre planning et de vos risques", action: "présenter un plan d'opérations en termes civils et écrire deux lignes de CV sur votre travail en logistique", standard: "avec la situation, le plan, trois risques et une solution de secours pour chacun" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : De la logistique militaire à la chaîne d'approvisionnement civile",
      lessons: [
        {
          objectives: ["O1"],
          title: "Parler le langage civil de la chaîne d'approvisionnement",
          minutes: 5,
          goal: "Traduire cinq termes de logistique militaire en mots civils utilisés par les employeurs.",
          text: [
            "Une chaîne d'approvisionnement, ce sont toutes les étapes qui amènent un produit de l'endroit où il est fabriqué à la personne qui l'utilise. La logistique est la partie planification et transport de cette chaîne.",
            "Beaucoup de termes militaires ont un équivalent civil. Un magasin d'équipement ou un dépôt, c'est la gestion des stocks. Un convoi, c'est le transport ou le fret. Un parc automobile, c'est la maintenance de flotte. La planification des approvisionnements par classes (I à IX), c'est la planification de la demande. Le dernier trajet jusqu'à l'utilisateur s'appelle la \"livraison du dernier kilomètre\".",
            "My Next Move for Veterans (mynextmove.org/vets), du ministère du Travail des États-Unis, vous permet d'entrer votre emploi militaire et de voir des métiers civils semblables, comme logisticien, chef d'entrepôt ou répartiteur."
          ],
          steps: ["Listez cinq tâches de logistique que vous avez faites en service.", "Demandez à un assistant d'IA : \"Traduis ces tâches de logistique militaire en termes civils de chaîne d'approvisionnement.\"", "Cherchez votre emploi militaire sur mynextmove.org/vets.", "Écrivez les intitulés de postes civils qui conviennent le mieux."],
          words: [["Chaîne d'approvisionnement", "toutes les étapes entre la fabrication d'un produit et la personne qui l'utilise."], ["Stock", "les articles qu'une entreprise garde en réserve."], ["Livraison du dernier kilomètre", "le dernier trajet qui apporte un article au client."], ["3PL", "logistique tierce partie : une entreprise payée pour stocker et expédier les marchandises d'une autre entreprise."]],
          slides: [
            { title: "Chaîne d'approvisionnement et logistique", bullets: ["Chaîne : chaque étape jusqu'à l'utilisateur", "Logistique : la planification et le transport"] },
            { title: "Du militaire au civil", bullets: ["Magasin d'équipement = gestion des stocks", "Convoi = transport ou fret", "Parc automobile = maintenance de flotte", "Planif. des approvisionnements = de la demande"] },
            { title: "Trouvez des emplois correspondants", bullets: ["mynextmove.org/vets (ministère du Travail)", "Logisticien, chef d'entrepôt, répartiteur"] }
          ],
          sources: [{ name: "My Next Move for Veterans (ministère du Travail des États-Unis)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Écrivez cinq tâches de logistique de votre service. Demandez à un assistant d'IA de les traduire en termes civils, puis cherchez votre emploi militaire sur mynextmove.org/vets et écrivez deux intitulés de postes correspondants.",
          youCanNow: "décrire votre travail militaire en logistique avec les mots qu'utilisent les employeurs civils.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une chaîne d'approvisionnement ?", options: ["Seulement les camions d'une entreprise", "Toutes les étapes, de la fabrication d'un produit jusqu'à la personne qui l'utilise", "La porte d'entrée d'un entrepôt", "Une liste des numéros de téléphone des fournisseurs"], answer: 1, why: "La chaîne d'approvisionnement couvre toutes les étapes, de la production jusqu'à l'utilisateur final." },
            { objective: "O1", q: "Votre CV dit « J'ai dirigé le parc automobile ». Quels mots civils utilisez-vous ?", options: ["Garder « parc automobile »", "« J'ai conduit des voitures »", "« J'ai fait des trucs sur les véhicules »", "« J'ai géré la maintenance de flotte »"], answer: 3, why: "Un parc automobile militaire correspond le mieux à la maintenance de flotte dans le civil." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Où l'IA intervient en logistique",
          minutes: 4,
          goal: "Citer quatre utilisations de l'IA en logistique et les décisions que les personnes prennent encore.",
          text: [
            "Les entreprises utilisent l'IA pour prévoir la demande (estimer la quantité d'un article dont les gens auront besoin), planifier des trajets qui économisent du carburant et du temps, repérer tôt les envois en retard, et répondre aux questions des clients sur les livraisons.",
            "L'IA ne connaît que les données qu'on lui donne. Si les données sont anciennes, fausses ou incomplètes, le plan sera faux aussi. Une tempête, une route fermée ou le rush des fêtes peuvent ne pas être dans les données.",
            "Ce sont toujours les personnes qui décident : vérifier que le plan a du sens, gérer les imprévus, protéger les chauffeurs et les travailleurs, et parler aux clients. Ce jugement, c'est exactement ce que la logistique militaire vous a appris."
          ],
          words: [["Prévision", "une estimation réfléchie de ce qui va arriver, comme la quantité de stock nécessaire."], ["Optimisation des trajets", "trouver le meilleur ordre et le meilleur chemin pour les livraisons."], ["Imprévu", "quelque chose qui ne se passe pas comme prévu, comme un camion en retard."]],
          slides: [
            { title: "L'IA en logistique", bullets: ["Prévoir la demande", "Planifier les trajets", "Repérer les envois en retard", "Répondre aux questions de livraison"] },
            { title: "Le point faible de l'IA", bullets: ["Elle ne connaît que les données reçues", "Données anciennes ou manquantes = plan faux", "Tempêtes et routes fermées peuvent manquer"] },
            { title: "Les personnes décident encore", bullets: ["Le plan a-t-il du sens ?", "Gérer les imprévus", "La sécurité et les clients"] }
          ],
          tryIt: "Demandez à un assistant d'IA : \"Comment les entrepôts et les entreprises de transport utilisent-ils l'IA aujourd'hui ? Donne quatre exemples avec des mots simples.\" À côté de chacun, écrivez une chose qu'une personne doit encore vérifier.",
          youCanNow: "expliquer où l'IA aide en logistique et où le jugement humain reste nécessaire.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que la prévision de la demande ?", options: ["Tout commander en une fois", "Compter le stock à la fin de l'année", "Une estimation soignée de la quantité qui sera nécessaire", "Un bulletin météo pour les chauffeurs"], answer: 2, why: "La prévision de la demande estime la quantité nécessaire, et l'IA aide souvent à la faire." },
            { objective: "O2", q: "Un plan d'itinéraire de l'IA envoie un camion sur une route fermée ce matin. Qui corrige ?", options: ["Une personne qui est au courant de la fermeture", "L'IA se corrigera toute seule plus tard", "Le client", "Personne ; on suit le plan"], answer: 0, why: "L'IA ne connaît que les données qu'elle a : ce sont les personnes qui gèrent les imprévus comme les fermetures." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Construire une feuille de réapprovisionnement des stocks",
          minutes: 6,
          goal: "Construire un tableur qui montre quand réapprovisionner chaque article.",
          text: [
            "Le seuil de réapprovisionnement est le niveau de stock qui vous dit de commander avant d'être à court. Une formule simple : consommation par jour multipliée par le délai de livraison (jours pour recevoir une commande), plus le stock de sécurité (une réserve pour les surprises).",
            "Exemple : une banque alimentaire utilise 20 boîtes de haricots par jour, la livraison prend 5 jours et elle garde 40 boîtes en plus. Seuil = 20 x 5 + 40 = 140. Quand le stock descend à 140, on commande.",
            "Un assistant d'IA peut vous aider à créer les colonnes et la formule du tableur. Testez toujours la formule à la main sur une ligne pour vérifier qu'elle est juste."
          ],
          steps: ["Ouvrez une feuille Google Sheets ou un classeur Excel vide.", "Créez les colonnes : Article, En stock, Consommation par jour, Délai (jours), Stock de sécurité, Seuil, Commander ?", "Demandez à un assistant d'IA la formule du Seuil et d'une colonne oui/non \"Commander ?\".", "Ajoutez cinq articles avec des chiffres inventés.", "Vérifiez une ligne à la main avec une calculatrice."],
          words: [["Seuil de réapprovisionnement", "le niveau de stock qui dit de commander."], ["Délai de livraison", "le nombre de jours pour qu'une commande arrive."], ["Stock de sécurité", "une réserve gardée pour les surprises."], ["Formule", "un calcul que le tableur fait pour vous."]],
          slides: [
            { title: "Seuil de réapprovisionnement", bullets: ["Consommation par jour x délai + stock de sécurité", "Quand le stock l'atteint, commandez"] },
            { title: "Exemple : haricots de la banque alimentaire", bullets: ["20 par jour x 5 jours + 40 en plus = 140", "À 140 boîtes, passez la commande"] },
            { title: "Construisez-le avec l'IA", bullets: ["Demandez à l'IA les formules", "Ajoutez cinq articles", "Vérifiez une ligne à la main"] }
          ],
          tryIt: "Construisez la feuille de réapprovisionnement avec cinq articles. Demandez les formules à un assistant d'IA, puis vérifiez une ligne avec une calculatrice et corrigez ce qui est faux.",
          youCanNow: "construire un tableur qui montre quand chaque article doit être réapprovisionné.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que le stock de sécurité ?", options: ["Du stock cassé", "Du stock vendu au rabais", "Du stock enfermé dans un coffre", "Du stock en plus gardé pour les imprévus"], answer: 3, why: "Le stock de sécurité couvre les imprévus comme les livraisons en retard ou une demande plus forte." },
            { objective: "O3", q: "Consommation par jour 5, délai de livraison 6 jours, stock de sécurité 10. Quel est le seuil de réapprovisionnement ?", options: ["21", "40", "60", "11"], answer: 1, why: "La consommation par jour multipliée par le délai (5 x 6 = 30), plus le stock de sécurité (10), donne 40." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : De la logistique militaire à la chaîne d'approvisionnement civile",
        questions: [
          { objective: "O1", q: "Un convoi militaire correspond le mieux à quel terme civil ?", options: ["La paie", "Le marketing", "Le transport ou le fret", "Les ressources humaines"], answer: 2, why: "Déplacer des marchandises en véhicule, c'est le transport ou le fret." },
          { objective: "O1", q: "Qu'est-ce que la livraison du dernier kilomètre ?", options: ["Le dernier trajet jusqu'au client", "Le premier kilomètre d'une tournée", "Une course à pied", "Une usine"], answer: 0, why: "C'est le dernier bout de chemin jusqu'à la personne qui utilise l'article." },
          { objective: "O2", q: "Pourquoi un plan de trajet fait par l'IA peut-il être faux ?", options: ["Les camions ne tombent jamais en panne", "L'IA a toujours raison", "Les cartes ne changent jamais", "L'IA ne connaît que les données qu'on lui donne"], answer: 3, why: "Des données manquantes ou anciennes mènent à de mauvais plans." },
          { objective: "O3", q: "Consommation par jour 10, délai 4 jours, stock de sécurité 20. Quel est le seuil de réapprovisionnement ?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Après qu'une IA a écrit une formule de tableur pour vous, vous devez :", options: ["Ne jamais la regarder", "Vérifier une ligne à la main", "Supprimer la feuille", "La partager sans vérifier"], answer: 1, why: "Une vérification à la main prouve que la formule est juste." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier et présenter les opérations",
      lessons: [
        {
          objectives: ["O4"],
          title: "Préparer un planning de livraison avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour préparer un planning de livraison d'une semaine et le vérifier avec les vraies contraintes.",
          text: [
            "Un planning de livraison dit qui va où, quand et avec quoi. L'IA peut en préparer un vite si vous lui donnez les faits : les arrêts, les heures d'ouverture, le nombre de véhicules et de chauffeurs, les heures des chauffeurs, et ce dont chaque arrêt a besoin.",
            "Ensuite, vous le vérifiez comme un plan de convoi. Les temps de trajet sont-ils réalistes sur une vraie carte ? Les chauffeurs ont-ils des pauses ? Un arrêt reçoit-il une livraison quand il est fermé ?",
            "Utilisez seulement des données inventées ou sans risque pour l'entreprise. Ne collez pas de noms de clients, d'adresses de particuliers ni rien que votre employeur n'a pas autorisé pour les outils d'IA."
          ],
          steps: ["Listez les arrêts, les horaires, les véhicules, les chauffeurs et les besoins de chaque arrêt.", "Demandez à un assistant d'IA : \"Fais un planning de livraison d'une semaine sous forme de tableau avec ces contraintes.\"", "Vérifiez les temps de trajet sur une application de cartes.", "Vérifiez les pauses, les heures d'ouverture et la place dans les véhicules.", "Corrigez le planning et enregistrez-le à côté de votre feuille de stock."],
          words: [["Planning de livraison", "un plan de qui livre quoi, où et quand."], ["Contrainte", "une limite que le plan doit respecter, comme les heures d'ouverture ou les heures des chauffeurs."]],
          slides: [
            { title: "Donnez les faits à l'IA", bullets: ["Arrêts et heures d'ouverture", "Véhicules et chauffeurs", "Les besoins de chaque arrêt"] },
            { title: "Vérifiez-le comme un plan de convoi", bullets: ["Vrais temps de trajet sur une carte", "Pauses des chauffeurs", "Pas de livraison à un arrêt fermé"] },
            { title: "Protégez les données", bullets: ["Données inventées ou autorisées seulement", "Pas de noms de clients ni d'adresses"] }
          ],
          tryIt: "Pour une banque alimentaire inventée avec trois points de distribution et une camionnette, demandez à un assistant d'IA un planning de livraison d'une semaine sous forme de tableau. Vérifiez-le sur une application de cartes et corrigez un problème trouvé.",
          youCanNow: "préparer un planning de livraison avec l'IA et le vérifier avec les contraintes du terrain.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'une contrainte dans un planning de livraison ?", options: ["Une limite que le plan doit respecter, comme les heures d'ouverture", "Une prime pour les chauffeurs", "Un arrêt en plus", "Un type de camion"], answer: 0, why: "Les contraintes sont des limites comme les horaires, les véhicules et les chauffeurs que le planning doit respecter." },
            { objective: "O4", q: "Le planning de l'IA dit qu'un trajet de 40 miles prend 15 minutes. Que faites-vous ?", options: ["Lui faire confiance", "Supprimer l'arrêt", "Vérifier la durée dans une application de cartes et corriger le planning", "Dire au chauffeur d'aller plus vite"], answer: 2, why: "Vous vérifiez les durées de trajet de l'IA avec une application de cartes et corrigez tout ce qui n'est pas réaliste." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Repérer les problèmes dans les données d'opérations",
          minutes: 5,
          goal: "Utiliser l'IA pour résumer un petit tableau de données et confirmer vous-même ce qu'elle trouve.",
          text: [
            "Les équipes d'opérations regardent des données tous les jours : livraisons en retard, articles presque épuisés, marchandises abîmées. L'IA peut résumer un tableau et montrer des tendances, comme \"les livraisons du mardi sont le plus souvent en retard\".",
            "Traitez ce que trouve l'IA comme du renseignement : utile, mais à confirmer avant d'agir. Triez ou filtrez vous-même le tableur pour voir si la tendance est réelle.",
            "Quand vous trouvez un vrai problème, écrivez la cause probable, une solution, et comment vous saurez que la solution a marché."
          ],
          steps: ["Faites un petit tableau : date, arrêt, à l'heure (oui/non), raison du retard.", "Demandez à un assistant d'IA : \"Quelles tendances vois-tu dans ce tableau ?\"", "Triez ou filtrez vous-même la feuille pour confirmer.", "Écrivez : problème, cause probable, solution, comment vous allez mesurer."],
          words: [["Tendance", "quelque chose qui revient encore et encore dans les données."], ["Filtre", "un outil du tableur qui montre seulement les lignes que vous choisissez."]],
          slides: [
            { title: "L'IA peut résumer les données", bullets: ["Retards, stocks bas, casse", "Elle montre des tendances"] },
            { title: "Traitez-le comme du renseignement", bullets: ["Utile, mais à confirmer avant d'agir", "Triez ou filtrez la feuille vous-même"] },
            { title: "Écrivez la solution", bullets: ["Problème et cause probable", "La solution", "Comment vous allez la mesurer"] }
          ],
          tryIt: "Faites un tableau de 10 livraisons avec quelques retards. Demandez des tendances à un assistant d'IA, puis filtrez vous-même la feuille pour en confirmer une, et écrivez une solution.",
          youCanNow: "utiliser l'IA pour trouver une tendance dans des données d'opérations et la confirmer avant d'agir.",
          quickCheck: [
            { objective: "O5", q: "Que fait un filtre de tableur ?", options: ["Il supprime des lignes pour toujours", "Il montre seulement les lignes que vous choisissez", "Il agrandit les chiffres", "Il envoie la feuille par e-mail"], answer: 1, why: "Un filtre cache les lignes dont vous n'avez pas besoin pour que vous vérifiiez une tendance vous-même." },
            { objective: "O5", q: "L'IA dit que la plupart des livraisons en retard viennent d'un seul chauffeur. Que faites-vous ?", options: ["Le dire tout de suite au chauffeur", "L'ignorer", "Supprimer les lignes de ce chauffeur", "Filtrer les données vous-même pour confirmer avant d'agir"], answer: 3, why: "Traitez ce que trouve l'IA comme du renseignement : utile, mais à confirmer avant d'agir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Présenter le plan et trouver un emploi",
          minutes: 5,
          goal: "Présenter un plan d'opérations avec des mots civils et le relier à votre prochaine étape professionnelle.",
          text: [
            "Les responsables civils aiment les présentations courtes, comme les chefs militaires : la situation, le plan, les risques et les plans de secours, et ce dont vous avez besoin d'eux. Utilisez des mots civils : \"stock\", \"planning de livraison\", \"taux de livraison à l'heure\".",
            "Transformez votre service en lignes de CV avec des chiffres, par exemple : \"Gestion d'un stock de 1 200 articles d'une valeur de 2 millions de dollars, sans aucune perte à l'inventaire.\" Utilisez seulement des chiffres que vous pouvez justifier.",
            "Pour l'aide à l'emploi, le Veterans' Employment and Training Service (VETS) du ministère du Travail gère le Transition Assistance Program et oriente vers l'apprentissage. Si vous avez le GI Bill, l'aide de la VA (l'administration américaine des anciens combattants) pour la formation en entreprise et l'apprentissage peut verser une somme mensuelle pendant que vous vous formez chez un employeur agréé. Vérifiez sur les pages officielles qui y a droit."
          ],
          steps: ["Écrivez la présentation : situation, plan, risques, secours, ce dont vous avez besoin.", "Utilisez des termes civils partout.", "Écrivez deux lignes de CV avec de vrais chiffres.", "Consultez dol.gov/agencies/vets et la page de va.gov sur la formation en entreprise pour la suite."],
          words: [["Présentation (brief)", "un court résumé parlé ou écrit d'un plan pour quelqu'un qui décide."], ["Taux de livraison à l'heure", "la part des livraisons qui arrivent à l'heure promise."]],
          slides: [
            { title: "Présentez comme en service", bullets: ["Situation, plan, risques, secours", "Ce dont vous avez besoin d'eux", "Avec des mots civils"] },
            { title: "Lignes de CV avec des chiffres", bullets: ["\"1 200 articles, 2 M$, zéro perte\"", "Seulement des chiffres justifiables"] },
            { title: "Aide officielle", bullets: ["VETS du ministère du Travail : TAP et apprentissage", "Formation en entreprise de la VA (GI Bill)", "Vérifiez qui y a droit sur les pages officielles"] }
          ],
          sources: [
            { name: "Ministère du Travail des États-Unis, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA : formation en entreprise et apprentissage", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Tâche finale : mettez votre feuille de réapprovisionnement, votre planning de livraison vérifié, trois risques avec leurs plans de secours et deux lignes de CV dans une présentation d'opérations d'une page.",
          youCanNow: "planifier les stocks et les livraisons avec l'aide de l'IA, vérifier vous-même le plan, et le présenter avec des mots civils.",
          quickCheck: [
            { objective: "O6", q: "Que contient une bonne présentation des opérations ?", options: ["Seulement les bonnes nouvelles", "La longue histoire de votre carrière", "La situation, le plan, les risques et les solutions de secours", "Chaque ligne de votre tableur"], answer: 2, why: "Une présentation donne la situation, le plan et les risques avec leurs solutions de secours, de façon courte et claire." },
            { objective: "O6", q: "Quelle ligne de CV décrit le mieux un travail de logistique militaire pour un employeur civil ?", options: ["« J'ai géré 800 articles d'une valeur de 1 M$ sans aucune perte à l'inventaire. »", "« J'étais NCOIC du bureau S4. »", "« J'ai fait de l'approvisionnement. »", "« J'ai géré la CL IX. »"], answer: 0, why: "Elle utilise des mots civils, une échelle et un résultat." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier et présenter les opérations",
        questions: [
          { objective: "O4", q: "Que donner à l'IA pour préparer un planning de livraison ?", options: ["Vos identifiants bancaires", "Seulement le mot \"planning\"", "Les adresses des clients", "Les arrêts, horaires, véhicules, chauffeurs et besoins"], answer: 3, why: "Les vraies contraintes permettent à l'IA de préparer un plan utilisable." },
          { objective: "O4", q: "Le planning de l'IA envoie une camionnette à un arrêt fermé. Vous devez :", options: ["Corriger le planning", "Le garder quand même", "Renvoyer le chauffeur", "Fermer l'entreprise"], answer: 0, why: "Vérifier le plan avec les contraintes, c'est votre travail." },
          { objective: "O5", q: "L'IA dit que les mardis sont le plus souvent en retard. Et ensuite ?", options: ["L'ignorer", "Annuler les mardis", "Filtrer vous-même les données pour confirmer", "Le publier en ligne"], answer: 2, why: "Confirmez avant d'agir, comme pour du renseignement." },
          { objective: "O6", q: "Une bonne présentation d'opérations comprend :", options: ["Aucun plan", "Seulement des blagues", "Seulement des codes militaires", "La situation, le plan, les risques et les plans de secours"], answer: 3, why: "C'est ce dont ont besoin ceux qui décident." },
          { objective: "O6", q: "Quelle aide de la VA peut verser une somme mensuelle pendant votre formation chez un employeur agréé ?", options: ["L'assurance-vie", "Le prêt immobilier", "La formation en entreprise et l'apprentissage", "L'aide aux obsèques"], answer: 2, why: "va.gov décrit un paiement mensuel pendant une formation en entreprise ou un apprentissage agréés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la logistique et les opérations",
    questions: [
      { objective: "O1", q: "Une chaîne d'approvisionnement, c'est :", options: ["Une chaîne sur un camion", "Toutes les étapes entre la fabrication d'un produit et la personne qui l'utilise", "Un type de contrat", "Une porte d'entrepôt"], answer: 1, why: "Elle couvre tout le chemin jusqu'à l'utilisateur." },
      { objective: "O1", q: "Un parc automobile militaire correspond le mieux à :", options: ["La maintenance de flotte", "La comptabilité", "Le marketing", "Le juridique"], answer: 0, why: "Les deux entretiennent les véhicules." },
      { objective: "O1", q: "Qu'est-ce qu'un 3PL ?", options: ["Un grade militaire", "Un type de camion", "Une entreprise payée pour stocker et expédier les marchandises d'une autre", "Un tableur"], answer: 2, why: "Les entreprises de logistique tierce partie s'occupent du stockage et de l'expédition." },
      { objective: "O1", q: "Quel site gratuit relie les emplois militaires aux métiers civils ?", options: ["My Next Move for Veterans", "Une application de musique", "Un site de shopping", "Un jeu"], answer: 0, why: "mynextmove.org/vets est géré pour le ministère du Travail." },
      { objective: "O2", q: "Prévoir la demande, c'est :", options: ["Embaucher des chauffeurs", "Livrer plus vite", "Peindre les camions", "Estimer de façon réfléchie la quantité qui sera nécessaire"], answer: 3, why: "Une prévision estime les besoins futurs." },
      { objective: "O2", q: "Qu'est-ce qu'un planificateur de trajets IA pourrait manquer ?", options: ["Le nombre d'arrêts que vous lui avez donné", "Une route fermée ce matin", "La carte", "Le mot \"trajet\""], answer: 1, why: "Les événements récents peuvent ne pas être dans ses données." },
      { objective: "O2", q: "Qui gère les imprévus comme un camion en retard ?", options: ["Personne", "Les personnes", "Seulement l'IA", "Le client"], answer: 1, why: "Le jugement humain gère les imprévus." },
      { objective: "O3", q: "Le délai de livraison, c'est :", options: ["Les heures d'ouverture d'un magasin", "Le temps pendant lequel un chauffeur mène un convoi", "L'heure du déjeuner", "Le nombre de jours pour qu'une commande arrive"], answer: 3, why: "Le délai est l'attente d'une livraison." },
      { objective: "O3", q: "Le stock de sécurité, c'est :", options: ["Une réserve gardée pour les surprises", "Un stock sous clé", "Des marchandises abîmées", "Le stock vendu aujourd'hui"], answer: 0, why: "Il couvre une demande ou des retards imprévus." },
      { objective: "O3", q: "Consommation par jour 20, délai 5, stock de sécurité 40. Seuil de réapprovisionnement ?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "Comment savoir qu'une formule écrite par l'IA est juste ?", options: ["La supprimer", "La croire", "Demander seulement à une autre IA", "Vérifier une ligne à la main"], answer: 3, why: "Une vérification à la main confirme le calcul." },
      { objective: "O4", q: "Une contrainte dans un planning, c'est :", options: ["Une livraison", "Un type de camion", "Une limite que le plan doit respecter", "Un client"], answer: 2, why: "Les heures d'ouverture et les heures des chauffeurs sont des contraintes." },
      { objective: "O4", q: "Comment vérifier les temps de trajet de l'IA ?", options: ["Deviner", "Comparer avec une application de cartes", "Demander au chauffeur de se dépêcher", "Les ignorer"], answer: 1, why: "Une application de cartes donne des temps réalistes." },
      { objective: "O4", q: "Qu'est-ce qui ne doit PAS aller dans un outil d'IA public ?", options: ["Les noms et adresses des clients", "Des arrêts inventés", "Les horaires d'un magasin inventé", "Le nombre de camionnettes"], answer: 0, why: "Les informations des clients sont privées." },
      { objective: "O5", q: "Ce que l'IA trouve dans les données doit être traité comme :", options: ["Des blagues", "Des ordres à suivre", "Du renseignement : utile mais à confirmer avant d'agir", "La vérité absolue"], answer: 2, why: "Confirmer évite d'agir sur une erreur." },
      { objective: "O5", q: "Un filtre de tableur vous permet de :", options: ["Montrer seulement les lignes que vous choisissez", "Supprimer la feuille", "Imprimer plus vite", "Changer les polices"], answer: 0, why: "Les filtres aident à vérifier les tendances." },
      { objective: "O5", q: "Après avoir trouvé un vrai problème, écrivez :", options: ["Un nouveau mot de passe", "Seulement qui accuser", "Rien", "La cause, une solution, et comment vous allez la mesurer"], answer: 3, why: "Une solution mesurée prouve qu'elle a marché." },
      { objective: "O5", q: "Le taux de livraison à l'heure, c'est :", options: ["La vitesse du chauffeur", "La part des livraisons qui arrivent à l'heure promise", "Le coût du carburant", "Le nombre de camions"], answer: 1, why: "Il mesure les promesses tenues." },
      { objective: "O6", q: "Quelle ligne de CV est la plus forte ?", options: ["\"J'ai fait des trucs d'approvisionnement.\"", "\"Gestion de 1 200 articles d'une valeur de 2 M$, sans aucune perte à l'inventaire.\"", "\"J'ai travaillé dur.\"", "\"Army.\""], answer: 1, why: "Les chiffres et les résultats montrent votre impact." },
      { objective: "O6", q: "L'agence du ministère du Travail qui gère les programmes d'emploi des vétérans, dont le TAP, est :", options: ["L'EPA", "L'IRS", "La FAA", "VETS"], answer: 3, why: "Le Veterans' Employment and Training Service gère le TAP pour le ministère du Travail." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      5,
      9,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Feuille de réapprovisionnement",
        objective: "O3",
        notYet: "Moins de cinq articles, ou des seuils de réapprovisionnement faux.",
        meets: "Cinq articles avec des seuils de réapprovisionnement justes, une ligne vérifiée à la main.",
        exceeds: "La feuille signale les articles au niveau du seuil ou en dessous."
      },
      {
        name: "Planning de livraison vérifié",
        objective: "O4",
        notYet: "Le planning de l'IA a été utilisé sans vérification, ou il ne respecte pas une limite.",
        meets: "Un planning d'une semaine qui respecte les horaires des arrêts, les véhicules et les chauffeurs, avec des durées de trajet vérifiées sur une application de cartes.",
        exceeds: "L'apprenant nomme le problème qu'il a trouvé et comment il l'a corrigé."
      },
      {
        name: "Risques et solutions de secours",
        objective: "O6",
        notYet: "Moins de trois risques, ou des risques sans solution de secours.",
        meets: "Trois risques, chacun avec une solution de secours.",
        exceeds: "Chaque solution de secours dit qui agit et quand."
      },
      {
        name: "Lignes de CV civiles",
        objective: "O1",
        notYet: "Les lignes utilisent des termes militaires ou n'ont pas de résultat.",
        meets: "Deux lignes avec des mots civils de la logistique et une échelle ou un résultat.",
        exceeds: "Les lignes correspondent à un intitulé de métier civil de My Next Move for Veterans."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui postulent à un emploi civil en logistique, en entrepôt ou dans le transport dans les 30 jours (enquête de suivi)",
      "Apprenants qui obtiennent un emploi en logistique, un apprentissage ou une formation en entreprise dans les 90 jours",
      "Banques alimentaires ou petites entreprises partenaires qui utilisent la feuille de réapprovisionnement ou le planning d'un apprenant"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet",
      "Un tableur gratuit : Google Sheets ou Microsoft Excel en ligne",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini, et une application de cartes",
      "Une calculatrice",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Donnez à tous les apprenants la même banque alimentaire ou le même magasin de pièces inventé pour qu'ils comparent leurs feuilles et leurs plannings.",
      "Faites un calcul de seuil de réapprovisionnement au tableau avant que les apprenants construisent leurs feuilles.",
      "Utilisez seulement des arrêts et des données inventés ; ne mettez jamais de vrais noms de clients ou d'adresses personnelles dans une IA publique.",
      "Faites présenter le plan à voix haute en deux minutes, comme à un responsable civil.",
      "Notez la présentation des opérations avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
