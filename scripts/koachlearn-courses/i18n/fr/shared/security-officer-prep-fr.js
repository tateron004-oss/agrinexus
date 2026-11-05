"use strict";

// Koach Learn course (French translation of shared/security-officer-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// US agency names (BSIS, FBI, DOJ, FDACS, DPS), Live Scan, BreEZe and the names of the California training courses are kept as written.

const BSIS_GUARD = { name: "BSIS de Californie : Agents de sécurité (demandes, programme de formation, manuel Power to Arrest)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "BSIS de Californie : Fiche d'information sur l'enregistrement des agents de sécurité", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "BSIS de Californie : Programme de formation des agents de sécurité (cours et heures)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "BSIS de Californie : Manuel de formation Power to Arrest (pouvoir d'arrestation)", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "Département de la consommation de Californie (Department of Consumer Affairs) : Vérifier une licence", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "Département d'État de New York : Licences d'agent de sécurité", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Département de la sécurité publique du Texas : Programme de sécurité privée", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Département de l'agriculture et des services aux consommateurs de Floride : Division des licences (agent de sécurité classe D)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "Bureau des statistiques du travail des États-Unis (BLS) : Agents de sécurité et surveillants de casino (comment le devenir)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep-fr",
  lang: "fr",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Préparation au métier d'agent de sécurité (guard card)",
  skills: "Trouver les règles de la guard card de votre État, Faire des rondes et contrôler les accès selon les consignes de poste, Observer et signaler sans dépasser votre autorité, Calmer les conflits et réagir aux urgences, Rédiger un rapport d'incident clair, Planifier votre licence et votre recherche d'emploi",
  outcome: "trouver les conditions de la guard card de votre État et écrire les étapes pour l'obtenir, suivre les consignes de poste pendant une ronde et à une entrée, choisir l'action « observer et signaler » qui reste dans l'autorité d'un agent, rédiger un rapport d'incident clair et fondé sur les faits, et faire un plan daté pour obtenir votre licence et être embauché.",
  about: [
    "Les agents de sécurité protègent les personnes et les biens dans les bureaux, les magasins, les hôpitaux, les écoles, les entrepôts, les événements et les immeubles d'habitation. Beaucoup de postes ne demandent pas de diplôme universitaire, et les employeurs recrutent toute l'année. Ce cours s'adresse aux demandeurs d'emploi, aux personnes qui sortent de prison, aux anciens militaires et aux jeunes adultes qui veulent commencer ce métier.",
    "Vous allez apprendre ce qu'un agent de sécurité fait et ne fait pas, comment fonctionne la guard card (la licence d'agent de sécurité délivrée par l'État), comment faire une ronde et contrôler une entrée selon les consignes de poste, comment rester calme et en sécurité lors d'un conflit ou d'une urgence, et comment rédiger un rapport d'incident auquel un responsable, un avocat ou un policier peut se fier.",
    "Important : ce cours vous prépare ; il ne vous donne pas de licence. Dans la plupart des États américains, une agence de l'État délivre la licence des agents de sécurité, et vous devez avoir au moins 18 ans, passer une vérification des antécédents et terminer la formation exigée par l'État auprès d'une école ou d'un employeur agréé. Les règles changent d'un État à l'autre : vous allez donc chercher la page officielle de votre État. La Californie est notre exemple, car nous avons vérifié ses règles sur la page officielle.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » sur papier ou dans une application de documents gratuite. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez un dossier de préparation à la guard card : les conditions de votre État écrites sous forme d'étapes, avec la page officielle ; une liste de contrôle de ronde et d'accès pour un poste d'entraînement ; un rapport d'incident d'entraînement complet ; une carte de poche avec vos étapes « observer et signaler » et d'urgence ; et un plan daté pour finir la formation, déposer la demande et être embauché, avec une ligne de CV honnête.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes de 18 ans et plus qui cherchent un emploi d'agent de sécurité non armé : demandeurs d'emploi, personnes qui sortent de prison, anciens militaires et jeunes adultes. Certains ont une expérience de police militaire, de surveillance pénitentiaire ou de prévention des pertes en magasin ; la plupart découvrent le métier.",
    startingPoint: "Ils savent lire un formulaire court, suivre des instructions et utiliser un téléphone. Peu savent comment fonctionne la licence d'agent dans leur État, quelles sont les limites légales d'un agent ou comment rédiger un rapport fondé sur les faits. Certains imaginent ce métier comme un travail de policier.",
    gap: "La sécurité est un secteur qui recrute beaucoup et où l'on entre vite, mais des personnes perdent leur emploi ou se blessent quand elles dépassent leur autorité, utilisent une force interdite ou rédigent des rapports vagues. Les apprenants ont besoin d'une image juste des étapes de la licence dans leur État, des habitudes « observer et signaler » que veulent les employeurs et d'une vraie compétence pour rédiger des rapports clairs, afin d'obtenir leur licence, d'être embauchés et de garder leur emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme est expliqué",
      "La licence dépend de l'État : le cours enseigne le schéma général et comment trouver la page officielle, avec la Californie comme exemple vérifié",
      "Travail non armé uniquement : les armes à feu, les matraques, le gaz lacrymogène et les autres armes exigent des permis séparés et une formation en présentiel",
      "Les compétences pratiques comme les premiers secours, la RCP et les techniques de défense s'apprennent en présentiel avec un formateur qualifié",
      "Vérification des antécédents : on dit aux apprenants qui ont un casier judiciaire de répondre honnêtement et de vérifier les règles de leur État ou de s'adresser à un service d'aide juridique pour la réinsertion",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages de l'État ; du papier pour les listes et le rapport"
    ],
    prerequisites: "Aucun. « L'excellence du service client » et « CV, LinkedIn et entretiens » sont de bons cours complémentaires."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À l'aide de la page officielle des licences de votre État", action: "lister les étapes pour obtenir une guard card dans votre État", standard: "en nommant l'agence, l'âge minimum, la vérification des antécédents et la formation exigée avant et après l'obtention de la licence" },
    { id: "O2", condition: "Avec un ensemble de consignes de poste", action: "effectuer une ronde et un contrôle d'accès", standard: "en couvrant chaque point des consignes de poste et en notant avec l'heure ce que vous avez vu et fait" },
    { id: "O3", condition: "Face à un conflit, un vol ou une urgence", action: "choisir l'action « observer et signaler » qui reste dans l'autorité d'un agent", standard: "en réussissant au moins 4 situations sur 5, avec les appels d'urgence passés en premier" },
    { id: "O4", condition: "Après avoir vu un incident ou lu sa description", action: "rédiger un rapport d'incident fondé sur les faits", standard: "en répondant à qui, quoi, quand, où et comment, avec des faits et non des opinions, dans l'ordre chronologique" },
    { id: "O5", condition: "À l'aide des règles de votre État et des offres d'emploi locales", action: "rédiger un plan daté pour obtenir votre licence et être embauché", standard: "avec des dates pour la formation, les empreintes, la demande et les candidatures, et une ligne de CV honnête" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, la guard card et le poste",
      lessons: [
        {
          title: "Ce que fait un agent de sécurité, et ce qu'il ne fait pas",
          objectives: ["O3"],
          minutes: 5,
          goal: "Expliquer les principales tâches d'un agent de sécurité et les limites de son autorité.",
          text: [
            "Un agent de sécurité protège les personnes et les biens. Le travail de tous les jours consiste à être visible, surveiller, contrôler qui entre, faire des rondes, aider les gens, répondre aux alarmes et noter ce qui se passe. Être visible et attentif évite beaucoup de problèmes avant qu'ils ne commencent.",
            "Un agent de sécurité n'est pas un policier. Dans la plupart des États, un agent a le même pouvoir d'arrestation que n'importe quel simple citoyen, et pas plus. La plupart des employeurs demandent aux agents d'« observer et signaler » : regarder avec attention, appeler la police ou un responsable et le noter, au lieu de poursuivre ou d'attraper les gens.",
            "Les règles de votre employeur (les consignes de poste) peuvent être plus strictes que la loi. Si les consignes de poste disent « ne pas retenir », vous ne retenez personne, même si la loi le permettrait. Aller au-delà de vos consignes peut vous valoir un licenciement, un procès ou une blessure.",
            "Le service client représente la moitié du travail. Vous indiquez le chemin, aidez les visiteurs perdus et restez poli avec les personnes en colère. Les agents calmes, ponctuels et bons pour rédiger des rapports sont ceux qui obtiennent une promotion."
          ],
          words: [["Agent de sécurité", "personne payée pour protéger les personnes et les biens ; on dit aussi gardien ou vigile."], ["Observer et signaler", "regarder, appeler à l'aide et le noter, sans intervenir physiquement."], ["Consignes de poste", "les instructions écrites pour un site : quoi vérifier, quand et quoi faire."], ["Retenir", "empêcher quelqu'un de partir. Un agent ne doit le faire que si la loi et ses consignes de poste le permettent."], ["Dissuader", "empêcher un problème avant qu'il commence, par exemple en étant visible."]],
          slides: [
            { title: "Le travail de tous les jours", bullets: ["Être visible et rester attentif", "Contrôler qui entre et faire des rondes", "Aider les gens et répondre aux alarmes", "Noter ce qui se passe"] },
            { title: "Pas un policier", bullets: ["En général, le même pouvoir d'arrestation qu'un simple citoyen", "La plupart des employeurs : observer et signaler", "Appelez la police ; ne poursuivez pas, n'attrapez pas"] },
            { title: "Les consignes de poste d'abord", bullets: ["Elles peuvent être plus strictes que la loi", "Si elles disent ne pas retenir, vous ne retenez pas"] },
            { title: "Ce qui fait progresser", bullets: ["Un service client calme et poli", "La ponctualité à chaque service", "Des rapports clairs et honnêtes"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Tracez deux colonnes sur une feuille : « Un agent fait » et « Un agent ne fait pas ». Placez chacune de ces actions dans une colonne : faire une ronde sur le parking, fouiller de force le sac d'une personne, indiquer le chemin à un visiteur, poursuivre un voleur à l'étalage dans la rue, appeler le 911 pour une bagarre, rédiger un rapport, menotter quelqu'un alors que les consignes de poste disent observer et signaler. Puis écrivez une phrase pour expliquer pourquoi.",
          youCanNow: "expliquer ce que fait un agent de sécurité et les limites de son autorité.",
          quickCheck: [
            { objective: "O3", q: "Que veulent dire la plupart des employeurs par « observer et signaler » ?", options: ["Poursuivre toute personne qui court", "Regarder, appeler à l'aide et le noter", "Fouiller le sac de tout le monde", "Arrêter les gens pour n'importe quelle règle non respectée"], answer: 1, why: "Observer et signaler veut dire que vous regardez, appelez la police ou un responsable et prenez des notes, sans intervenir physiquement." },
            { objective: "O3", q: "La loi pourrait permettre une arrestation par un citoyen, mais vos consignes de poste disent « ne pas retenir ». Que faites-vous ?", options: ["Retenir quand même", "Demander au suspect ce qu'il préfère", "Suivre les consignes de poste : observer, appeler et signaler", "Quitter votre poste"], answer: 2, why: "Les consignes de poste peuvent être plus strictes que la loi, et vous devez les suivre." }
          ]
        },
        {
          title: "Obtenir votre guard card : comment fonctionnent les licences de l'État",
          objectives: ["O1"],
          minutes: 6,
          goal: "Trouver l'agence des licences de votre État et lister les étapes pour obtenir une guard card.",
          text: [
            "La plupart des États délivrent la licence des agents de sécurité par une agence de l'État. Le schéma courant : avoir au moins 18 ans, passer une vérification du casier judiciaire avec prise d'empreintes, et terminer une formation auprès d'une école ou d'un employeur agréé. Beaucoup d'États exigent aussi une formation chaque année. Les noms changent : « guard card », « enregistrement » ou « licence classe D ».",
            "La Californie est notre exemple vérifié. L'agence est le Bureau of Security and Investigative Services (BSIS, le bureau californien des services de sécurité et d'enquête). Vous devez avoir au moins 18 ans, passer une vérification des antécédents par le ministère de la Justice (DOJ) et le FBI grâce aux empreintes Live Scan, et terminer la formation Power to Arrest (pouvoir d'arrestation) avant la délivrance de l'enregistrement. Ensuite, vous terminez 32 heures de formation aux compétences d'agent de sécurité dans les 6 premiers mois, puis 8 heures de formation continue chaque année. Vous déposez la demande en ligne sur BreEZe ou par courrier, et vous portez votre carte pendant le service.",
            "Les autres États ont leur propre agence, par exemple le Département d'État de New York, le Programme de sécurité privée du Département de la sécurité publique du Texas (DPS) et la Division des licences du Département de l'agriculture et des services aux consommateurs de Floride (FDACS). Cherchez la page officielle de votre État pour connaître les heures de formation, les frais et les formulaires actuels. Ne vous fiez pas à une publicité de formation pour connaître les règles.",
            "Si vous avez un casier judiciaire : chaque État décide quelles condamnations comptent. Répondez honnêtement à chaque question, car une fausse réponse peut à elle seule entraîner un refus. Un programme de réinsertion ou un service d'aide juridique peut vous aider à lire les règles de votre État."
          ],
          steps: ["Cherchez l'agence des licences d'agent de sécurité de votre État et ouvrez la page officielle en .gov.", "Notez : l'âge minimum, la vérification des antécédents et les étapes de prise d'empreintes.", "Écrivez la formation exigée avant la licence et après (premiers mois, chaque année).", "Trouvez la demande (en ligne ou sur papier) et la page des frais ; ne devinez pas le montant.", "Notez comment renouveler et combien de temps dure la licence."],
          words: [["Guard card", "le nom courant de la licence ou de l'enregistrement d'agent de sécurité délivré par l'État."], ["BSIS", "le Bureau of Security and Investigative Services de Californie, qui enregistre les agents en Californie."], ["Live Scan", "prise d'empreintes électronique utilisée pour les vérifications d'antécédents en Californie et dans d'autres États."], ["Vérification des antécédents", "une recherche dans le casier judiciaire, souvent par l'État et le FBI, avant la délivrance d'une licence."], ["Formation continue", "une formation que vous devez continuer à suivre après avoir obtenu la licence, souvent chaque année."]],
          slides: [
            { title: "Le schéma courant", bullets: ["Au moins 18 ans", "Vérification des antécédents avec empreintes", "Formation agréée ; dans beaucoup d'États, aussi chaque année"] },
            { title: "L'exemple de la Californie (BSIS)", bullets: ["Formation Power to Arrest avant la délivrance de la carte", "32 heures de formation aux compétences en 6 mois", "8 heures de formation continue chaque année"] },
            { title: "Les autres États", bullets: ["NY : Département d'État", "TX : Programme de sécurité privée du DPS", "FL : Division des licences du FDACS (classe D)", "Vérifiez la page officielle, pas une publicité"] },
            { title: "Si vous avez un casier", bullets: ["Chaque État décide quelles condamnations comptent", "Répondez honnêtement à chaque question", "Demandez à un programme de réinsertion ou d'aide juridique"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Ouvrez la page officielle des licences de votre État (ou la fiche d'information du BSIS de Californie si vous vous entraînez). Sur une feuille, écrivez dans l'ordre les étapes de la guard card de votre État : agence, âge, vérification des antécédents, formation avant la carte, formation après, comment déposer la demande, et l'adresse de la page.",
          youCanNow: "trouver l'agence des licences de votre État et lister les étapes pour obtenir une guard card.",
          quickCheck: [
            { objective: "O1", q: "En Californie, quelle formation faut-il terminer avant la délivrance de l'enregistrement d'agent ?", options: ["Une formation aux armes à feu", "La formation Power to Arrest", "Une formation à la matraque", "Aucune formation"], answer: 1, why: "Le BSIS indique que la formation Power to Arrest doit être terminée avant la délivrance de l'enregistrement." },
            { objective: "O1", q: "Une publicité de formation dit que votre État exige seulement un cours en ligne de 2 heures. Que faites-vous ?", options: ["Croire la publicité", "Demander à un ami", "Payer et espérer", "Vérifier la page officielle de l'agence de l'État"], answer: 3, why: "Les règles changent et varient selon l'État ; seule la page officielle de l'agence est fiable." }
          ]
        },
        {
          title: "Consignes de poste, rondes et contrôle d'accès",
          objectives: ["O2"],
          minutes: 5,
          goal: "Effectuer une ronde et un contrôle à l'entrée en suivant les consignes de poste écrites.",
          text: [
            "Chaque site a des consignes de poste. Elles vous indiquent vos horaires, où et à quelle fréquence faire des rondes, quelles portes vérifier, qui peut entrer, quoi faire en cas d'alarme et qui appeler. Lisez-les au début de chaque service et demandez à votre responsable tout ce qui n'est pas clair.",
            "Pendant la ronde, changez vos horaires pour que personne ne puisse vous prévoir. Utilisez vos sens : cherchez les portes ouvertes, les serrures cassées, les fuites, la fumée, les issues de secours bloquées, les lumières éteintes et les personnes qui ne devraient pas être là. Notez chaque vérification dans votre registre d'activité quotidien, avec l'heure.",
            "Le contrôle d'accès veut dire que seules les bonnes personnes entrent. Vérifiez les badges ou les pièces d'identité comme le disent les consignes de poste, inscrivez l'entrée et la sortie des visiteurs, remettez les badges visiteur et ne laissez jamais quelqu'un passer derrière vous par une porte verrouillée (le talonnage, ou « tailgating »). Soyez poli et ferme : « Excusez-moi, je dois voir votre badge. »",
            "Utilisez votre radio ou votre téléphone comme le site l'indique : des messages courts et clairs, avec votre position. À la relève, dites au prochain agent ce qui est ouvert et transmettez-lui le registre."
          ],
          steps: ["Lisez les consignes de poste et le registre du service précédent.", "Vérifiez votre radio ou votre téléphone et vos clés.", "Faites la ronde de chaque point des consignes de poste, à des heures variées.", "À l'entrée : vérifiez la pièce d'identité ou le badge, inscrivez les visiteurs, empêchez le talonnage.", "Notez chaque vérification et tout ce qui est inhabituel, avec l'heure.", "Informez le prochain agent à la relève."],
          words: [["Ronde", "parcourir un site à pied ou en véhicule, selon un itinéraire, pour repérer les problèmes."], ["Contrôle d'accès", "s'assurer que seules les personnes et les véhicules autorisés entrent."], ["Talonnage (tailgating)", "quand quelqu'un suit une personne autorisée par une porte verrouillée sans montrer de pièce d'identité."], ["Registre d'activité quotidien", "le relevé écrit de l'agent avec chaque vérification et chaque événement du service, avec les heures."]],
          slides: [
            { title: "Début du service", bullets: ["Lisez les consignes de poste et le dernier registre", "Vérifiez radio, téléphone et clés", "Demandez ce qui n'est pas clair"] },
            { title: "Pendant la ronde", bullets: ["Changez vos horaires", "Portes, serrures, fuites, fumée, issues de secours, lumières", "Notez chaque vérification avec l'heure"] },
            { title: "À l'entrée", bullets: ["Vérifiez badges ou pièces d'identité selon les consignes", "Inscrivez l'entrée et la sortie des visiteurs", "Empêchez le talonnage : poli et ferme"] },
            { title: "Fin du service", bullets: ["Informez le prochain agent", "Transmettez le registre"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Choisissez un poste d'entraînement : votre immeuble, une bibliothèque ou un magasin que vous connaissez. Écrivez cinq lignes de consignes de poste pour ce lieu (horaires, points de ronde, règle d'entrée, qui appeler). Puis écrivez un registre d'activité d'une heure pour ce poste, avec au moins quatre entrées avec l'heure, dont un problème que vous avez trouvé et ce que vous avez fait.",
          youCanNow: "effectuer une ronde et un contrôle à l'entrée selon des consignes de poste écrites, et les noter dans le registre.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi faut-il changer l'heure de vos rondes ?", options: ["Pour que personne ne puisse prévoir quand vous passerez", "Pour finir plus tôt", "Parce que la radio le dit", "Pour sauter certaines vérifications"], answer: 0, why: "Une ronde prévisible est facile à éviter pour quelqu'un de mal intentionné ; des heures variées dissuadent les problèmes." },
            { objective: "O2", q: "Une personne sans badge entre juste derrière un employé. Comment appelle-t-on cela ?", options: ["Faire une ronde", "Le talonnage", "Observer", "Tenir le registre"], answer: 1, why: "Le talonnage consiste à suivre quelqu'un par une porte contrôlée sans montrer de pièce d'identité." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, la guard card et le poste",
        questions: [
          { objective: "O3", q: "Dans la plupart des États, comment le pouvoir d'arrestation d'un agent de sécurité se compare-t-il à celui d'un simple citoyen ?", options: ["Beaucoup plus grand, comme celui d'un policier", "Nul dans tous les cas", "Seulement le week-end", "À peu près le même que celui de n'importe quel citoyen"], answer: 3, why: "Dans la plupart des États, un agent a le pouvoir d'arrestation d'un simple citoyen, et pas plus." },
          { objective: "O1", q: "Qu'est-ce qui fait partie du schéma courant de la guard card dans la plupart des États ?", options: ["Un diplôme universitaire", "Avoir une voiture", "Une vérification des antécédents avec empreintes", "Un permis de port d'arme"], answer: 2, why: "La plupart des États exigent une vérification des antécédents avec empreintes, 18 ans et une formation agréée." },
          { objective: "O1", q: "En Californie, combien d'heures de formation continue un agent doit-il suivre chaque année ?", options: ["8 heures", "Aucune formation", "40 heures", "1 heure"], answer: 0, why: "Le BSIS exige 8 heures de formation continue chaque année." },
          { objective: "O2", q: "Où trouvez-vous quelles portes vérifier et qui appeler sur votre site ?", options: ["Dans une publicité de formation", "Dans les consignes de poste", "Auprès d'un visiteur", "Sur les réseaux sociaux"], answer: 1, why: "Les consignes de poste sont les instructions écrites pour ce site." },
          { objective: "O2", q: "Pendant la ronde, vous trouvez une issue de secours bloquée par des cartons. Que faites-vous ?", options: ["L'ignorer ; ce n'est pas votre travail", "Laisser un mot sur les cartons", "Attendre le service suivant", "Le signaler et le noter avec l'heure, comme le disent les consignes de poste"], answer: 3, why: "Une issue bloquée est un danger à signaler et à noter tout de suite." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conflits, urgences, rapports et embauche",
      lessons: [
        {
          title: "Calmer un conflit, usage de la force et urgences",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choisir une réaction calme et sûre face à un conflit, un vol ou une urgence.",
          text: [
            "La plupart des conflits peuvent se calmer avec des mots. Gardez une distance de sécurité, placez-vous de biais, gardez les mains ouvertes et visibles, et parlez lentement et doucement. Écoutez, utilisez le nom de la personne si vous le connaissez, et proposez un choix : « Vous pouvez attendre ici, ou je peux appeler votre responsable. » Ne vous disputez pas, ne touchez pas la personne et ne lui bloquez pas le passage.",
            "L'usage de la force est la partie la plus sérieuse du métier. Les États l'enseignent dans leur formation (la Californie exige les cours Appropriate Use of Force, sur l'usage approprié de la force, et Power to Arrest). La règle à retenir : uniquement la force que la loi et vos consignes de poste permettent, uniquement quand c'est nécessaire, et vous arrêtez dès que ça ne l'est plus. On dit à la plupart des agents non armés de se retirer et d'appeler la police à la place.",
            "Vol : observez, retenez la description, appelez la police ou votre responsable comme le disent vos consignes, et ne poursuivez personne dans la rue ou sur le parking. Votre sécurité et celle des autres comptent plus que la marchandise.",
            "Urgences : en cas d'incendie, d'urgence médicale, de bagarre ou d'arme, appelez d'abord le 911 (ou le numéro d'urgence local), puis suivez le plan d'urgence du site : alertez les gens, guidez-les vers les sorties, accueillez les secours et dites-leur ce que vous avez vu. Les premiers secours et la RCP s'apprennent et se certifient en présentiel avec un formateur qualifié, par exemple de la Croix-Rouge américaine (American Red Cross) ou de l'American Heart Association (association américaine de cardiologie)."
          ],
          steps: ["Vérifiez : quelqu'un est-il en danger ? Si oui, appelez d'abord le 911.", "Gardez une distance de sécurité et une voie de sortie.", "Parlez calmement ; écoutez ; proposez un choix.", "Si la situation ne se calme pas, reculez et appelez la police ou votre responsable.", "Suivez le plan d'urgence du site ; guidez les gens vers la sortie ; accueillez les secours.", "Notez-le dès que vous êtes en sécurité."],
          words: [["Désescalade", "utiliser des mots calmes et le langage du corps pour faire baisser la colère de quelqu'un."], ["Usage de la force", "toute action physique pour maîtriser une personne ; un agent ne peut utiliser que ce que la loi et ses consignes permettent."], ["Plan d'urgence", "les étapes écrites du site pour les incendies, les urgences médicales, les armes et l'évacuation."], ["Évacuation", "faire sortir tout le monde d'un bâtiment en sécurité."]],
          slides: [
            { title: "Calmer avec des mots", bullets: ["Distance de sécurité, mains ouvertes, placé de biais", "Parlez lentement ; écoutez ; proposez un choix", "Pas de dispute, pas de contact, ne bloquez pas le passage"] },
            { title: "Usage de la force", bullets: ["Seulement ce que la loi et vos consignes permettent", "Seulement si nécessaire ; arrêtez quand ça ne l'est plus", "La plupart des agents non armés : reculer et appeler"] },
            { title: "Vol", bullets: ["Observez et retenez la description", "Appelez la police ou votre responsable", "Ne poursuivez pas ; les personnes comptent plus que les biens"] },
            { title: "Urgences", bullets: ["Appelez d'abord le 911 (ou le numéro local)", "Suivez le plan d'urgence ; guidez les gens vers la sortie", "Accueillez les secours et dites ce que vous avez vu"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Entraînez-vous avec un ami ou devant un miroir. Scène : un visiteur crie à l'accueil parce qu'il ne peut pas monter sans badge. Dites à voix haute trois phrases calmes, dont un choix que vous lui proposez. Puis écrivez à quel moment vous reculeriez pour appeler votre responsable ou la police.",
          youCanNow: "choisir une réaction calme et sûre face à un conflit, un vol ou une urgence, sans dépasser votre autorité.",
          quickCheck: [
            { objective: "O3", q: "Une personne s'effondre dans le hall et ne respire pas normalement. Que faites-vous en premier ?", options: ["Rédiger le rapport", "Appeler votre responsable et attendre", "Appeler le 911, puis suivre le plan d'urgence", "Chercher sa pièce d'identité"], answer: 2, why: "En cas d'urgence médicale, vous appelez d'abord le 911 (ou votre numéro local)." },
            { objective: "O3", q: "Un voleur à l'étalage s'enfuit vers le parking avec de la marchandise. Vos consignes disent observer et signaler. Que faites-vous ?", options: ["Noter la description et la direction, et appeler comme le disent vos consignes", "Le poursuivre au milieu des voitures", "Lui arracher son sac", "Bloquer sa voiture avec la vôtre"], answer: 0, why: "Vous restez en sécurité, vous rassemblez les faits et vous appelez ; la marchandise ne vaut pas une vie." }
          ]
        },
        {
          title: "Observer, décrire et rédiger le rapport d'incident",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rédiger un rapport d'incident fondé sur les faits qui répond à qui, quoi, quand, où et comment.",
          text: [
            "Votre rapport peut être lu par votre responsable, le client, une compagnie d'assurance, la police ou un tribunal, parfois des mois plus tard. Un bon rapport permet à un inconnu de voir exactement ce qui s'est passé. Beaucoup d'agents perdent leur crédibilité parce que leurs rapports sont vagues.",
            "Écrivez des faits, pas des opinions. Pas « il était ivre », mais « il sentait l'alcool, titubait et parlait de façon pâteuse ». Pas « un type suspect », mais « un homme d'environ 30 ans, d'environ 6 pieds, veste rouge à capuche, sac à dos noir, a fait le tour des voitures garées et a essayé deux poignées de portière ».",
            "Répondez à qui, quoi, quand, où et comment, dans l'ordre chronologique. Donnez la date et les heures exactes, le lieu exact, les personnes concernées et les témoins, ce que vous avez vu et entendu vous-même, ce que vous avez fait, et qui vous avez appelé et quand. Écrivez entre guillemets les mots exacts que les gens ont dits.",
            "Rédigez-le dès que vous êtes en sécurité, pendant que vous vous en souvenez. Utilisez la première personne (« j'ai vu »), des phrases courtes et les bons noms. Ne devinez pas, n'ajoutez rien et n'oubliez rien. Si vous faites une erreur, corrigez-la comme le demande votre employeur ; ne modifiez jamais un rapport après coup pour qu'il paraisse meilleur."
          ],
          steps: ["Date, heure et lieu exact.", "Qui : vous, les personnes concernées, les témoins (noms et descriptions).", "Ce qui s'est passé, dans l'ordre chronologique, avec ce que vous avez vu et entendu vous-même.", "Ce que vous avez fait et qui vous avez appelé, avec les heures.", "Mots exacts entre guillemets ; des faits, pas des opinions.", "Relisez-le ; signez-le comme l'exige votre employeur."],
          words: [["Rapport d'incident", "un relevé écrit et factuel d'un événement comme un vol, une blessure, une bagarre ou une alarme."], ["Témoin", "une personne qui a vu ou entendu ce qui s'est passé."], ["Fait", "quelque chose que vous avez vu, entendu ou mesuré vous-même."], ["Opinion", "ce que vous pensez ou supposez, comme « il avait l'air coupable »."]],
          slides: [
            { title: "Qui lit votre rapport ?", bullets: ["Responsable, client, assureur, police, un tribunal", "Il doit être clair pour un inconnu, des mois plus tard"] },
            { title: "Des faits, pas des opinions", bullets: ["Pas « ivre » : sentait l'alcool, titubait, parlait de façon pâteuse", "Décrivez les personnes : âge, taille, vêtements, sac"] },
            { title: "Qui, quoi, quand, où, comment", bullets: ["Date, heures exactes, lieu exact", "Personnes et témoins", "Ce que vous avez vu, fait, et qui vous avez appelé"] },
            { title: "Bien le rédiger", bullets: ["Dès que vous êtes en sécurité", "Première personne, phrases courtes, citations exactes", "Ne jamais le modifier après coup pour paraître meilleur"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Observez une scène publique pendant 2 minutes (une rue animée, l'entrée d'un magasin ou une courte vidéo sans le son). Puis rédigez un rapport d'incident d'entraînement : date, heure, lieu, personnes décrites par des faits, ce qui s'est passé dans l'ordre chronologique, et ce que vous auriez fait et qui vous auriez appelé. Soulignez les mots d'opinion et réécrivez-les sous forme de faits.",
          youCanNow: "rédiger un rapport d'incident fondé sur les faits qui répond à qui, quoi, quand, où et comment.",
          quickCheck: [
            { objective: "O4", q: "Quelle phrase a sa place dans un rapport d'incident ?", options: ["L'homme avait l'air d'un voleur.", "Il était clairement ivre.", "À 21 h 42, un homme en veste rouge a essayé deux poignées de portière de voiture dans la rangée C.", "Il se passait quelque chose de grave."], answer: 2, why: "Elle donne l'heure, le lieu, la description et l'action sous forme de faits, pas d'opinions." },
            { objective: "O4", q: "Quand devez-vous rédiger le rapport ?", options: ["La semaine prochaine", "Dès que vous êtes en sécurité, pendant que vous vous en souvenez", "Seulement si la police le demande", "Après avoir parlé à tout le monde pour s'accorder sur une version"], answer: 1, why: "Écrire tôt garde les détails exacts." }
          ]
        },
        {
          title: "Votre plan pour la guard card et pour être embauché",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Rédiger un plan daté pour finir la formation, demander la guard card et être embauché.",
          text: [
            "Transformez les étapes de votre État en dates. Par exemple : semaine 1, trouvez une école de formation agréée ou un employeur qui forme les nouveaux agents ; semaine 2, terminez la formation exigée avant la carte ; semaine 3, faites prendre vos empreintes et déposez la demande ; ensuite, postulez à des emplois pendant que l'agence traite votre dossier. En Californie, le BSIS conseille de compter environ 4 à 6 semaines de traitement, et cela peut prendre plus longtemps.",
            "Beaucoup d'entreprises de sécurité embauchent des personnes et les aident à suivre la formation. Cherchez sur les sites d'offres d'emploi, à votre American Job Center (centre public pour l'emploi aux États-Unis) ou à votre centre local pour l'emploi, et sur les sites des entreprises. Vérifiez qu'une école de formation est agréée par votre État (la Californie permet de vérifier une licence en ligne). Méfiez-vous de quiconque promet une licence « garantie ».",
            "Votre CV : soyez honnête. Avant d'avoir la licence, écrivez « Cours de préparation au métier d'agent de sécurité terminé ; demande de guard card en cours ». Nommez vos compétences : rédaction de rapports, service client, rondes, calme sous pression. Anciens militaires : décrivez avec des mots simples la police militaire, les gardes ou les tours de veille.",
            "Entraînez-vous à répondre aux questions d'entretien : « Comment géreriez-vous un visiteur en colère ? » et « Que feriez-vous si vous voyiez un vol ? ». Utilisez ce que vous avez appris : rester calme, observer et signaler, appeler à l'aide, le noter."
          ],
          steps: ["Recopiez les étapes de la guard card de votre État de la leçon 2.", "Mettez une date à côté de chaque étape.", "Listez trois employeurs ou écoles agréées près de chez vous.", "Écrivez une ligne de CV honnête et trois compétences.", "Entraînez-vous à voix haute à deux réponses d'entretien."],
          words: [["École agréée", "un organisme de formation que votre État autorise à donner la formation exigée pour les agents."], ["American Job Center", "un bureau public et gratuit aux États-Unis qui aide à trouver un emploi et une formation."], ["Délai de traitement", "le temps que met l'agence pour examiner votre demande et la vérification de vos antécédents."]],
          slides: [
            { title: "Des étapes aux dates", bullets: ["Trouver une formation ; finir ce qui est exigé avant la carte", "Empreintes et demande", "Postuler à des emplois pendant l'attente"] },
            { title: "Où chercher", bullets: ["Entreprises de sécurité qui forment les nouveaux agents", "American Job Centers et centres pour l'emploi", "Vérifiez que l'école est agréée par l'État"] },
            { title: "Un CV honnête", bullets: ["« Demande de guard card en cours » jusqu'à la délivrance", "Rédaction de rapports, service client, rondes, calme"] },
            { title: "S'entraîner pour l'entretien", bullets: ["Visiteur en colère : mots calmes, proposer un choix", "Vol : observer, appeler, le noter"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Faites votre plan pour la guard card sur une page : chaque étape de la page de votre État avec une date, trois employeurs ou écoles agréées près de chez vous, une ligne de CV honnête et vos réponses aux deux questions d'entretien. Rangez-le avec votre liste de contrôle et votre rapport d'entraînement : c'est votre dossier de préparation.",
          youCanNow: "rédiger un plan daté pour obtenir votre guard card et un emploi, avec une ligne de CV honnête.",
          quickCheck: [
            { objective: "O5", q: "Vous avez terminé ce cours, mais votre guard card n'a pas encore été délivrée. Quelle ligne de CV est honnête ?", options: ["« Agent de sécurité titulaire d'une licence »", "« Cours de préparation au métier d'agent de sécurité terminé ; demande de guard card en cours »", "« Agent armé »", "« Formateur certifié par l'État »"], answer: 1, why: "Elle dit exactement ce que vous avez fait, sans prétendre avoir une licence que vous n'avez pas." },
            { objective: "O1", q: "Comment vérifier en Californie qu'une école de formation ou une licence est réelle ?", options: ["Se fier à la publicité de l'école", "Demander sur les réseaux sociaux", "Utiliser la vérification de licence en ligne de l'État", "Regarder leur logo"], answer: 2, why: "Le Département de la consommation de Californie permet de vérifier les licences en ligne." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conflits, urgences, rapports et embauche",
        questions: [
          { objective: "O3", q: "Un visiteur en colère crie. Quelle est la meilleure première réaction ?", options: ["Crier plus fort pour qu'il écoute", "Se tenir tout près de lui", "Lui attraper le bras", "Garder une distance de sécurité et parler lentement et calmement"], answer: 3, why: "La distance et des mots calmes font baisser la colère et vous protègent." },
          { objective: "O3", q: "Vous sentez de la fumée et voyez des flammes dans un local de stockage. Que faites-vous en premier ?", options: ["Appeler le 911 (ou le numéro local) et lancer le plan d'urgence du site", "Rédiger le rapport", "Finir votre ronde", "Prendre une photo pour les réseaux sociaux"], answer: 0, why: "En cas d'urgence, vous appelez d'abord le 911, puis vous suivez le plan d'urgence." },
          { objective: "O4", q: "Lequel est un fait, et non une opinion ?", options: ["Il avait l'air coupable", "Elle était folle", "Il a dit : « Pousse-toi de mon chemin »", "Ils préparaient un mauvais coup"], answer: 2, why: "Les mots exacts que vous avez entendus sont un fait ; les autres sont des opinions." },
          { objective: "O4", q: "Vous remarquez une erreur dans le rapport d'hier après que votre responsable l'a lu. Que faites-vous ?", options: ["Le réécrire discrètement pour qu'il paraisse meilleur", "Le corriger ouvertement, comme le demande votre employeur", "Le jeter", "Demander à un collègue de le signer"], answer: 1, why: "Les corrections se font ouvertement, selon la méthode de l'employeur ; modifier un rapport en cachette détruit la confiance." },
          { objective: "O5", q: "Que doit contenir un plan pour la guard card ?", options: ["Des dates pour la formation, les empreintes, la demande et les candidatures", "Seulement l'emploi que vous voulez", "La promesse d'une licence garantie", "Rien jusqu'à l'embauche"], answer: 0, why: "Un plan daté transforme les étapes de votre État en actions que vous pouvez terminer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au métier d'agent de sécurité (guard card)",
    questions: [
      { objective: "O3", q: "Que fait principalement un agent de sécurité ?", options: ["Arrêter les gens pour n'importe quelle règle non respectée", "Protéger les personnes et les biens en étant visible, en surveillant et en signalant", "Enquêter sur des crimes au tribunal", "Dresser des contraventions routières"], answer: 1, why: "Le cœur du métier est la protection visible, l'observation et le signalement." },
      { objective: "O3", q: "Vos consignes de poste sont plus strictes que la loi. Lesquelles suivez-vous ?", options: ["Seulement la loi", "Ce qui vous semble juste", "La demande du visiteur", "Les consignes de poste"], answer: 3, why: "Les employeurs peuvent fixer des règles plus strictes, et vous devez suivre vos consignes de poste." },
      { objective: "O1", q: "Qui délivre la guard card dans la plupart des États ?", options: ["Une agence de l'État", "N'importe quelle école de formation", "Le centre commercial du quartier", "Le FBI"], answer: 0, why: "Une agence de l'État délivre la licence des agents ; les écoles donnent seulement la formation." },
      { objective: "O1", q: "En Californie, combien d'heures de formation aux compétences d'agent de sécurité faut-il terminer dans les 6 premiers mois ?", options: ["8 heures", "4 heures", "32 heures", "100 heures"], answer: 2, why: "Le BSIS exige 32 heures de formation aux compétences dans les 6 premiers mois." },
      { objective: "O1", q: "Quel est l'âge minimum pour l'enregistrement d'agent de sécurité en Californie ?", options: ["16", "21", "25", "18"], answer: 3, why: "Le BSIS indique que les candidats doivent avoir au moins 18 ans." },
      { objective: "O1", q: "Vous avez un casier judiciaire et vous remplissez une demande de guard card. Que devez-vous faire ?", options: ["Répondre honnêtement à chaque question et vérifier les règles de votre État", "Ne pas mentionner votre casier", "Utiliser le nom d'un ami", "Abandonner sans vérifier"], answer: 0, why: "Une fausse réponse peut entraîner un refus ; chaque État décide quelles condamnations comptent." },
      { objective: "O2", q: "Que contiennent les consignes de poste ?", options: ["Les bénéfices de l'entreprise", "Les instructions du site : horaires, points de ronde, règles d'entrée, qui appeler", "Votre emploi du temps personnel de la semaine", "Une liste de suspects"], answer: 1, why: "Les consignes de poste sont les instructions écrites pour un site précis." },
      { objective: "O2", q: "Que doit contenir chaque entrée du registre d'activité quotidien ?", options: ["Votre avis sur vos collègues", "Seulement les problèmes, sans les heures", "L'heure et ce que vous avez vérifié ou vu", "Rien avant la fin du service"], answer: 2, why: "Le registre note chaque vérification et chaque événement avec l'heure." },
      { objective: "O2", q: "Un visiteur sans badge dit « Je suis avec lui » et entre derrière un employé. Que faites-vous ?", options: ["Le laisser entrer ; il a l'air gentil", "Lui crier dessus", "Quitter votre poste pour le suivre", "L'arrêter poliment et vérifier sa pièce d'identité comme le disent les consignes de poste"], answer: 3, why: "Empêcher le talonnage avec politesse et fermeté est le cœur du contrôle d'accès." },
      { objective: "O2", q: "Pourquoi dire au prochain agent ce qui s'est passé lors de la relève ?", options: ["Pour qu'il sache ce qui est ouvert et ce qu'il faut surveiller", "Pour finir votre service plus tôt", "Ce n'est pas nécessaire", "Pour partager des commérages"], answer: 0, why: "Une bonne relève garde le site couvert, sans trou." },
      { objective: "O3", q: "Qu'est-ce qui aide à calmer une personne en colère ?", options: ["Se mettre face à face, très près", "Parler lentement et proposer un choix", "Pointer le doigt vers elle", "Bloquer la sortie"], answer: 1, why: "Des paroles calmes et un choix font baisser la tension ; bloquer et pointer du doigt la font monter." },
      { objective: "O3", q: "Quand un agent peut-il utiliser la force ?", options: ["Chaque fois que quelqu'un est impoli", "Pour récupérer n'importe quel objet", "Seulement comme la loi et les consignes de poste le permettent, et seulement si nécessaire", "Quand le responsable ne regarde pas"], answer: 2, why: "La force est limitée par la loi et les consignes de poste, et elle s'arrête quand elle n'est plus nécessaire." },
      { objective: "O3", q: "Vous voyez une bagarre avec une arme sur le parking. Que faites-vous en premier ?", options: ["Intervenir et les séparer", "Appeler le 911 depuis un endroit sûr", "Rédiger d'abord le rapport", "Filmer pour les réseaux sociaux"], answer: 1, why: "Une arme veut dire appeler d'abord le 911, depuis un endroit sûr." },
      { objective: "O4", q: "Qui peut lire votre rapport d'incident ?", options: ["Vous seul", "Personne", "Seulement votre famille", "Votre responsable, le client, l'assureur, la police ou un tribunal"], answer: 3, why: "Beaucoup de personnes peuvent utiliser les rapports, parfois des mois plus tard." },
      { objective: "O4", q: "Quelle est la meilleure description d'une personne dans un rapport ?", options: ["Femme, environ 40 ans, environ 5 pieds 5 pouces, manteau bleu, sac à dos gris", "Une personne louche", "Quelqu'un de bizarre", "Une fauteuse de troubles"], answer: 0, why: "L'âge, la taille et les vêtements sont des faits qui aident les autres à reconnaître la personne." },
      { objective: "O4", q: "À quelles questions un rapport doit-il répondre ?", options: ["Pourquoi la personne est mauvaise", "Votre avis sur le client", "Qui, quoi, quand, où et comment", "Seulement ce que la police a dit"], answer: 2, why: "Qui, quoi, quand, où et comment donnent un rapport complet et fondé sur les faits." },
      { objective: "O4", q: "Comment écrivez-vous ce que quelqu'un a dit ?", options: ["Le résumer selon votre avis", "Ne pas l'écrire", "Le rendre plus grave", "Écrire ses mots exacts entre guillemets"], answer: 3, why: "Les citations exactes sont des faits sur lesquels les autres peuvent compter." },
      { objective: "O5", q: "Quelle ligne de CV est honnête avant la délivrance de votre licence ?", options: ["« Demande de guard card en cours »", "« Professionnel de la sécurité titulaire d'une licence »", "« Agent armé »", "« Policier »"], answer: 0, why: "Elle décrit votre situation réelle sans prétendre avoir une licence." },
      { objective: "O5", q: "Une école promet une licence d'agent « garantie » en un jour. Que devez-vous faire ?", options: ["Payer tout de suite", "Vérifier la page de l'agence de l'État et si l'école est agréée", "Leur envoyer votre numéro de sécurité sociale par SMS", "Dire à vos amis de s'inscrire"], answer: 1, why: "Seul l'État délivre les licences ; vérifiez la page officielle et l'agrément de l'école." },
      { objective: "O5", q: "Pendant que l'agence traite votre demande, quelle étape intelligente mettre dans votre plan ?", options: ["Ne rien faire", "Arrêter d'étudier", "Postuler à des emplois et s'entraîner aux réponses d'entretien", "Commencer à travailler sans licence"], answer: 2, why: "Utiliser l'attente pour postuler et s'entraîner vous fait embaucher plus vite." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et vérifiez de nouveau.",
    criteria: [
      { name: "Étapes de la guard card dans votre État", objective: "O1", notYet: "Il manque l'agence, la vérification des antécédents ou la formation, ou une publicité de formation remplace la page officielle.", meets: "Liste l'agence, l'âge, la vérification des antécédents, la formation avant et après la licence, comment déposer la demande et l'adresse de la page officielle.", exceeds: "Ajoute les règles de renouvellement et comment vérifier une école ou une licence." },
      { name: "Liste de contrôle de ronde et d'accès", objective: "O2", notYet: "Il manque des points de ronde, la règle d'entrée ou le registre.", meets: "Couvre chaque point des consignes de poste d'entraînement et comprend un registre avec les heures et au moins quatre entrées.", exceeds: "Ajoute la relève et un plan contre le talonnage." },
      { name: "Carte de poche « observer et signaler »", objective: "O3", notYet: "Inclut une poursuite, une force au-delà des consignes, ou pas d'appel au 911 en premier.", meets: "Montre des mots calmes, quand reculer et appeler, pas de poursuite, et le 911 en premier en cas d'urgence.", exceeds: "Ajoute les étapes du plan d'urgence du site et ce qu'il faut dire aux secours." },
      { name: "Rapport d'incident d'entraînement", objective: "O4", notYet: "Vague, contient des opinions, ou il manque les heures ou le lieu.", meets: "Répond à qui, quoi, quand, où et comment dans l'ordre chronologique, avec des faits et des citations exactes.", exceeds: "Les descriptions sont assez précises pour qu'un inconnu reconnaisse les personnes et les lieux." },
      { name: "Plan daté et ligne de CV", objective: "O5", notYet: "Pas de dates, ou prétend avoir une licence pas encore obtenue.", meets: "Des dates pour chaque étape, trois employeurs ou écoles agréées près de chez soi, une ligne de CV honnête.", exceeds: "Comprend des réponses travaillées à deux questions d'entretien." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et un dossier de préparation conforme à la grille d'évaluation",
      "Apprenants qui demandent une guard card de l'État dans les 60 jours (enquête de suivi)",
      "Apprenants qui obtiennent une guard card et sont embauchés comme agents de sécurité (suivi et rapports des partenaires)",
      "Les employeurs partenaires signalent de nouveaux agents dont les rapports d'incident n'ont pas besoin d'être réécrits pendant les 90 premiers jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour la page des licences de l'État",
      "Papier et stylo, ou une application de documents gratuite, pour la liste, le registre, le rapport et le plan",
      "Facultatif : une copie imprimée de la fiche d'information de votre État et un exemple de consignes de poste",
      "Environ 60 minutes au total"
    ],
    facilitatorNotes: [
      "Dites-le tôt et souvent : ce cours prépare les apprenants ; c'est l'agence de l'État qui délivre la licence, après une formation agréée.",
      "Avant le cours, ouvrez la page officielle de votre propre État et apportez les heures de formation, les frais et les formulaires actuels ; les règles changent.",
      "N'enseignez pas dans ce cours la maîtrise physique, le menottage ni les armes ; cela exige une formation agréée en présentiel.",
      "Pour les apprenants qui ont un casier judiciaire, gardez l'information confidentielle et orientez-les vers les règles de l'État et un service d'aide juridique pour la réinsertion ; ne promettez jamais d'acceptation.",
      "Utilisez des jeux de rôle pour la désescalade avec un mot d'arrêt clair, et notez le dossier de préparation avec la grille, une ligne à la fois."
    ]
  }
};
