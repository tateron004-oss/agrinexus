"use strict";

// Koach Learn course (French translation of shared/real-estate-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

const SRC = {
  arello: { name: "ARELLO (association des responsables de la réglementation immobilière) : organismes de réglementation", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "Département de l'immobilier de Californie (DRE) : conditions de la licence d'agent commercial", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Commission immobilière du Texas (TREC) : devenir agent commercial", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD : présentation du Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB : qu'est-ce qu'un Loan Estimate ?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB : qu'est-ce qu'une Closing Disclosure ?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB : acheter une maison (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-fr",
  lang: "fr",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Préparer l'examen de la licence d'agent immobilier",
  skills: "Trouver les étapes de la licence dans votre État, Utiliser les termes de propriété, Appliquer les règles du mandat et du logement équitable, Suivre un contrat jusqu'à la signature finale, Résoudre les calculs de l'examen, Établir un plan d'étude et d'examen daté",
  outcome: "trouver les étapes de la licence immobilière de votre État sur la page officielle, expliquer les idées de base que l'examen évalue (propriété, mandat, logement équitable, contrats et signature finale), résoudre les calculs courants de l'examen et suivre un plan d'étude et d'examen daté que vous avez fait vous-même.",
  about: [
    "Ce cours s'adresse aux adultes qui veulent devenir agent immobilier titulaire d'une licence de « salesperson » (appelé « sales agent » dans certains États) : personnes en reconversion, créateurs de petite entreprise, anciens militaires, parents qui reprennent le travail et toute personne qui veut un métier où elle peut évoluer. Beaucoup d'agents travaillent comme indépendants sous un courtier (broker) agréé, donc le cours convient aussi aux entrepreneurs.",
    "Aux États-Unis, chaque État délivre les licences des agents immobiliers. L'organisme de réglementation de l'État fixe les cours obligatoires avant la licence, l'examen, la vérification des antécédents et les frais. Ce cours vous PRÉPARE ; il ne donne pas de licence et ne remplace pas les cours agréés par votre État. Chaque leçon vous montre où vérifier les règles de votre État.",
    "Vous apprendrez les idées de base que la plupart des examens d'État évaluent, vous vous entraînerez aux calculs avec des chiffres inventés, et vous terminerez avec votre propre plan d'étude et d'examen daté. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" sur papier ou sur téléphone. Ce cours explique comment fonctionne l'immobilier ; il ne donne pas de conseils pour acheter un bien ou investir."
  ],
  finalTask: "Faites votre propre plan d'étude et d'examen pour la licence immobilière (une ou deux pages) : (1) l'organisme de réglementation de votre État, la page officielle utilisée et les étapes qu'elle indique (âge, formation avant la licence, examen, empreintes digitales ou vérification des antécédents, courtier parrain), chacune avec une date cible ; (2) les thèmes du programme officiel de l'examen de votre État, avec vos trois thèmes les plus faibles marqués et un plan pour chacun ; (3) une fiche d'une page sur les devoirs de l'agent, les sept catégories protégées par la loi fédérale sur le logement équitable et les éléments d'un contrat valable ; (4) cinq exercices de calcul (commission, ratio prêt-valeur, taxe foncière, prorata, surface) avec votre raisonnement écrit ; (5) un programme d'étude hebdomadaire jusqu'à la date d'examen visée.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes aux États-Unis qui préparent une licence d'agent immobilier (salesperson ou sales agent) dans leur État : personnes en reconversion, propriétaires de petites entreprises, entrepreneurs, anciens militaires, personnes qui reprennent le travail et jeunes adultes de plus de 18 ans. Certains ont seulement le diplôme de fin d'études secondaires ou le GED (équivalent américain de ce diplôme) ; certains parlent l'anglais comme deuxième langue.",
    startingPoint: "Ils savent lire un formulaire simple et faire des calculs de base avec une calculatrice. La plupart ne savent pas qui délivre les licences dans leur État, ni l'ordre des étapes, ni les mots juridiques de l'examen (fee simple, servitude, fiduciaire, contrepartie, prorata).",
    gap: "Beaucoup de gens paient des cours ou un examen sans plan, oublient une étape (comme les empreintes digitales ou un courtier parrain), ou échouent à l'examen à cause du vocabulaire et des calculs. Un apprenant qui connaît les étapes officielles, les idées de base et les calculs de l'examen, et qui a un plan daté, a beaucoup plus de chances de réussir et de commencer à travailler.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 12 à 14 ans) ; chaque mot juridique est expliqué",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour lire la page officielle de l'État ; papier, stylo et calculatrice simple pour chaque tâche",
      "Temps : leçons de 4 à 6 minutes, compatibles avec un emploi",
      "Les règles changent selon l'État : heures de formation, format de l'examen, note de réussite et frais se vérifient sur la page de l'organisme de l'État, jamais au hasard",
      "Ce cours prépare ; il ne remplace pas la formation agréée par l'État et ne donne pas de licence",
      "Aucun conseil en investissement, en droit ou en fiscalité ; les calculs utilisent des chiffres inventés, uniquement pour s'entraîner"
    ],
    prerequisites: "Aucun. Les apprenants qui veulent revoir les pourcentages peuvent d'abord suivre \"Les maths du quotidien\"."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "En utilisant le site officiel de l'organisme immobilier de votre État", action: "lister dans le bon ordre les étapes pour obtenir une licence d'agent", standard: "sans oublier d'étape et en nommant la page officielle" },
    { id: "O2", condition: "À partir d'une courte description d'un bien ou d'une situation de propriété", action: "identifier le bon terme immobilier", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O3", condition: "Face à une situation avec un client ou une personne qui cherche un logement", action: "choisir l'action qui respecte les devoirs de l'agent et la loi sur le logement équitable", standard: "avec au moins 4 bonnes réponses sur 5 et en nommant la règle" },
    { id: "O4", condition: "À partir d'un exemple d'offre d'achat", action: "vérifier qu'elle contient les éléments d'un contrat valable et mettre en ordre les étapes jusqu'à la signature finale", standard: "sans élément manquant et avec les délais fédéraux d'information corrects" },
    { id: "O5", condition: "Face à un problème du type examen et avec une calculatrice", action: "calculer une commission, un ratio prêt-valeur, une taxe foncière, un prorata et une surface", standard: "avec au moins 4 bonnes réponses sur 5 et le raisonnement écrit" },
    { id: "O6", condition: "En utilisant le programme officiel de l'examen de votre État et un calendrier", action: "écrire un plan d'étude et d'examen daté", standard: "qui couvre tous les thèmes du programme et vos trois thèmes les plus faibles" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : La licence et les idées de base",
      lessons: [
        {
          title: "Comment fonctionne la licence immobilière dans votre État",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister les étapes de la licence d'agent dans votre État à partir de la page officielle.",
          text: [
            "Il n'existe pas de licence immobilière nationale aux États-Unis. Chaque État a son propre organisme de réglementation, souvent appelé commission immobilière ou département de l'immobilier. Il décide des cours, de l'examen, de la vérification des antécédents et des frais. ARELLO, l'association des responsables de la réglementation, publie une liste de ces organismes qui vous aide à trouver le vôtre.",
            "Les étapes se ressemblent dans la plupart des États : remplir la condition d'âge, terminer les cours agréés par l'État, faire la demande, passer une vérification des antécédents (souvent avec empreintes digitales), réussir l'examen, puis travailler sous un courtier agréé. Beaucoup d'examens ont une partie nationale et une partie sur la loi de l'État.",
            "Les détails changent beaucoup. La Californie demande trois cours de niveau universitaire (Real Estate Principles, Real Estate Practice et un cours au choix). Le Texas demande 180 heures de cours en six matières, des empreintes digitales auprès de la police de l'État et des examens organisés par Pearson. Votre État peut être différent, donc lisez toujours la page de votre propre État."
          ],
          steps: ["Trouvez l'organisme immobilier de votre État (utilisez la liste d'ARELLO ou cherchez le nom de votre État suivi de \"real estate commission\" et choisissez un site en .gov).", "Ouvrez la page pour une nouvelle licence de salesperson ou de sales agent.", "Écrivez chaque étape dans l'ordre : âge, cours, demande, vérification des antécédents, examen, courtier.", "Notez l'adresse de la page et la date de votre vérification."],
          words: [["Organisme de réglementation immobilière", "le service de l'État qui délivre les licences et fait respecter les règles, comme une commission immobilière."], ["Agent commercial (salesperson ou sales agent)", "la première licence immobilière ; vous travaillez sous un courtier."], ["Courtier (broker)", "une licence de niveau supérieur ; un courtier peut diriger une agence et superviser des agents."], ["Formation avant la licence", "les cours agréés par l'État que vous devez terminer avant l'examen ou la licence."], ["Courtier parrain", "le courtier qui accepte de vous superviser une fois que vous avez votre licence."]],
          slides: [
            { title: "La licence dépend de l'État", bullets: ["Pas de licence immobilière nationale", "L'organisme de votre État fixe les cours, l'examen et les frais", "ARELLO publie la liste des organismes"] },
            { title: "Les étapes dans la plupart des États", bullets: ["Condition d'âge et cours avant la licence", "Demande et vérification des antécédents", "Examen (souvent partie nationale et partie de l'État)", "Travail sous un courtier agréé"] },
            { title: "Les États sont différents : deux exemples", bullets: ["Californie : trois cours de niveau universitaire", "Texas : 180 heures en six matières, examens Pearson", "Lisez toujours la page de votre État"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Trouvez l'organisme immobilier de votre État. Sur papier, listez dans l'ordre toutes les étapes pour la licence d'agent, avec l'adresse de la page et la date du jour. Entourez les étapes que vous ne connaissiez pas.",
          youCanNow: "trouver l'organisme immobilier de votre État et lister dans l'ordre les étapes de la licence d'agent.",
          quickCheck: [
            { objective: "O1", q: "Qui décide des cours et de l'examen pour une licence d'agent immobilier ?", options: ["Un conseil national de l'immobilier", "L'agence immobilière où vous entrez", "L'organisme immobilier de votre État", "La banque qui prête aux acheteurs"], answer: 2, why: "Les licences immobilières sont délivrées par chaque État, et l'organisme de l'État fixe les conditions." },
            { objective: "O1", q: "Un site que vous avez trouvé dit que les cours durent 60 heures. Que faites-vous ?", options: ["Vous vérifiez les heures sur la page officielle de l'organisme de votre État", "Vous le croyez s'il a l'air sérieux", "Vous payez tout de suite le cours le moins cher", "Vous demandez à un ami dans un autre État"], answer: 0, why: "Les heures changent selon l'État et avec le temps, donc seule la page officielle de votre État est fiable." }
          ]
        },
        {
          title: "Les mots de la propriété utilisés à l'examen",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identifier le bon terme pour un bien ou une situation de propriété.",
          text: [
            "Un bien immobilier (real property), c'est le terrain et tout ce qui y est fixé, comme une maison, une clôture ou un arbre, plus les droits qui vont avec. Un bien mobilier (personal property) se déplace, comme un canapé. Un équipement fixe (fixture) était un bien mobilier mais il est maintenant fixé, comme un ventilateur de plafond ou un lave-vaisselle encastré ; il reste donc en général avec la maison.",
            "Être propriétaire d'un bien immobilier, c'est avoir un ensemble de droits : occuper, utiliser, profiter, interdire l'accès aux autres et vendre ou transmettre. Le fee simple est la forme de propriété la plus complète. Quand plusieurs personnes possèdent ensemble, la joint tenancy inclut en général le droit de survie (au décès, la part passe aux autres propriétaires), alors que la tenancy in common ne l'inclut pas.",
            "L'acte (deed) transfère la propriété ; le titre (title) est le droit de propriété lui-même. Ce qui limite ou pèse sur un bien s'appelle une charge (encumbrance) : un privilège (lien, une créance d'argent, comme un prêt immobilier ou un impôt impayé) et une servitude (easement, le droit d'utiliser le terrain d'un autre, comme pour une ligne électrique). On décrit un terrain de trois façons principales : metes and bounds (mesures et limites), le système d'arpentage rectangulaire (du gouvernement) et lot and block (lot et îlot) d'après un plan enregistré."
          ],
          words: [["Bien immobilier (real property)", "le terrain, ce qui y est fixé et les droits de propriété."], ["Équipement fixe (fixture)", "un objet fixé au bien, donc considéré comme une partie du bien."], ["Fee simple", "la forme de propriété la plus complète."], ["Droit de survie", "quand un copropriétaire meurt, sa part passe aux autres copropriétaires."], ["Charge (encumbrance)", "tout ce qui limite ou pèse sur un bien, comme un privilège ou une servitude."], ["Privilège (lien)", "une créance d'argent légale sur un bien."], ["Servitude (easement)", "le droit d'utiliser une partie du terrain d'un autre pour un usage précis."]],
          slides: [
            { title: "Bien immobilier ou bien mobilier", bullets: ["Immobilier : le terrain et ce qui y est fixé", "Mobilier : les objets qui se déplacent", "Équipement fixe : fixé, donc il reste en général"] },
            { title: "La propriété", bullets: ["Ensemble de droits : occuper, utiliser, profiter, exclure, vendre", "Fee simple : la propriété la plus complète", "Joint tenancy : droit de survie ; tenancy in common : non"] },
            { title: "Titre et limites", bullets: ["L'acte transfère la propriété ; le titre est la propriété", "Privilège (lien) : une créance d'argent", "Servitude : le droit d'utiliser le terrain d'un autre"] },
            { title: "Décrire un terrain", bullets: ["Metes and bounds (mesures et limites)", "Arpentage rectangulaire (du gouvernement)", "Lot and block d'après un plan enregistré"] }
          ],
          tryIt: "Faites 10 fiches sur papier : le terme au recto, et au verso votre propre explication simple avec un exemple (bien immobilier, bien mobilier, équipement fixe, fee simple, joint tenancy, tenancy in common, acte, titre, privilège, servitude). Interrogez-vous deux fois.",
          youCanNow: "nommer le bon terme immobilier pour les situations courantes de biens et de propriété.",
          quickCheck: [
            { objective: "O2", q: "La compagnie d'électricité a le droit de faire passer une ligne au fond d'un jardin. C'est :", options: ["Un équipement fixe", "Le fee simple", "Un bien mobilier", "Une servitude"], answer: 3, why: "Une servitude est le droit d'utiliser une partie du terrain d'un autre pour un usage précis." },
            { objective: "O2", q: "Deux sœurs possèdent une maison. Quand l'une meurt, sa part passe automatiquement à l'autre. Elles détiennent très probablement le titre en :", options: ["Tenancy in common", "Joint tenancy", "Locataires", "Titulaires d'un privilège"], answer: 1, why: "La joint tenancy inclut en général le droit de survie ; la tenancy in common ne l'inclut pas." }
          ]
        },
        {
          title: "Les devoirs de l'agent et le logement équitable",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choisir, dans une situation, l'action qui respecte les devoirs de l'agent et la loi sur le logement équitable.",
          text: [
            "Quand vous représentez un client, vous êtes son agent (mandataire) et vous avez envers lui des devoirs fiduciaires. Beaucoup de manuels les résument par OLDCAR : Obedience (obéissance aux instructions légales), Loyalty (loyauté), Disclosure (révéler les faits importants), Confidentiality (confidentialité), Accounting (rendre compte de l'argent détenu) et Reasonable care (prudence raisonnable). La loi de votre État fixe les devoirs exacts et les formulaires d'information.",
            "Représenter à la fois l'acheteur et le vendeur dans une même vente s'appelle le double mandat (dual agency). Certains États l'autorisent seulement avec l'accord écrit des deux parties, et d'autres le limitent ou l'interdisent. Vérifiez les règles de votre État.",
            "La loi fédérale Fair Housing Act (loi sur le logement équitable) interdit la discrimination dans le logement en raison de la race, de la couleur, de l'origine nationale, de la religion, du sexe, de la situation familiale (par exemple avoir des enfants) ou du handicap. Les États et les villes peuvent ajouter d'autres groupes. Les pratiques illégales incluent le steering (orienter des personnes vers certains quartiers ou les en éloigner à cause d'une catégorie protégée), le blockbusting (pousser des propriétaires à vendre en annonçant l'arrivée d'un groupe) et le redlining (refuser des prêts ou des assurances dans certains quartiers)."
          ],
          steps: ["Demandez-vous : qui est mon client, et que lui dois-je ?", "Demandez-vous : cette demande traite-t-elle quelqu'un différemment à cause d'une catégorie protégée ?", "Si oui, ne le faites pas ; expliquez la loi poliment.", "Notez ce qui s'est passé et informez votre courtier."],
          words: [["Agent (mandataire)", "une personne autorisée à agir pour quelqu'un d'autre (le client ou mandant)."], ["Fiduciaire", "une personne en position de confiance qui doit faire passer les intérêts du client en premier."], ["Double mandat (dual agency)", "un agent ou une agence qui représente à la fois l'acheteur et le vendeur dans la même vente."], ["Catégorie protégée", "un groupe que la loi protège contre la discrimination, comme la race ou le handicap."], ["Steering", "orienter des personnes vers certains quartiers ou les en éloigner à cause d'une catégorie protégée ; illégal."]],
          slides: [
            { title: "Vos devoirs envers le client (OLDCAR)", bullets: ["Obéissance, loyauté, révélation des faits", "Confidentialité, rendre des comptes, prudence raisonnable", "La loi de votre État fixe les devoirs exacts"] },
            { title: "Le double mandat", bullets: ["Représenter les deux parties dans une même vente", "Règles différentes : accord écrit, limites ou interdiction", "Vérifiez dans votre État"] },
            { title: "Fair Housing Act : 7 catégories", bullets: ["Race, couleur, origine nationale, religion", "Sexe, situation familiale, handicap", "Les États et les villes peuvent en ajouter"] },
            { title: "Pratiques illégales", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Écrivez trois courtes situations où un vendeur ou un acheteur vous demande quelque chose d'injuste (par exemple : \"Ne montrez pas ma maison aux familles avec enfants\"). Pour chacune, écrivez la catégorie protégée concernée et une phrase polie que vous diriez à la place.",
          youCanNow: "appliquer les devoirs de l'agent et la loi sur le logement équitable pour choisir la bonne action avec vos clients.",
          quickCheck: [
            { objective: "O3", q: "Un vendeur dit : \"Montrez ma maison seulement aux personnes sans enfants.\" Que faites-vous ?", options: ["Vous expliquez que la situation familiale est protégée et que vous devez la montrer à tout le monde", "Vous acceptez, car le vendeur est votre client", "Vous la montrez seulement en semaine", "Vous demandez aux acheteurs combien d'enfants ils ont"], answer: 0, why: "La situation familiale est une catégorie protégée par le Fair Housing Act, et l'obéissance ne concerne que les instructions légales." },
            { objective: "O3", q: "Votre vendeur vous dit le prix le plus bas qu'il acceptera. Un acheteur vous le demande. Quel devoir s'applique ?", options: ["Rendre des comptes", "La confidentialité", "Révéler les faits à l'acheteur", "L'obéissance à l'acheteur"], answer: 1, why: "Un agent garde confidentielles les informations privées du client, comme son prix le plus bas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : La licence et les idées de base",
        questions: [
          { objective: "O1", q: "Quelle est en général la PREMIÈRE étape vers une licence d'agent ?", options: ["Entrer dans l'agence d'un courtier parrain", "Passer l'examen de l'État", "Trouver votre premier client", "Lire les conditions de l'organisme de votre État"], answer: 3, why: "Il vous faut la liste officielle des étapes avant de payer des cours ou l'examen." },
          { objective: "O2", q: "Un lave-vaisselle encastré, fixé dans la cuisine, est très probablement :", options: ["Un bien mobilier", "Un équipement fixe", "Une servitude", "Un privilège"], answer: 1, why: "Un objet fixé au bien est un équipement fixe et reste en général avec la maison." },
          { objective: "O2", q: "Une taxe foncière impayée donne au comté une créance sur la maison. C'est :", options: ["Un privilège", "Un acte", "Le fee simple", "La joint tenancy"], answer: 0, why: "Un privilège est une créance d'argent légale sur un bien." },
          { objective: "O3", q: "Un agent dit à un acheteur : \"Vous seriez plus à l'aise dans un quartier avec des gens de votre religion.\" C'est :", options: ["Un bon service client", "Du blockbusting", "Du steering, qui est illégal", "Du redlining"], answer: 2, why: "Orienter des personnes vers certains quartiers ou les en éloigner à cause d'une catégorie protégée, c'est du steering." },
          { objective: "O3", q: "Laquelle n'est PAS une catégorie protégée par le Fair Housing Act fédéral ?", options: ["Le handicap", "L'origine nationale", "La situation familiale", "L'équipe de sport préférée"], answer: 3, why: "Les sept catégories fédérales sont la race, la couleur, l'origine nationale, la religion, le sexe, la situation familiale et le handicap." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Contrats, calculs et votre plan d'examen",
      lessons: [
        {
          title: "Les contrats et le chemin jusqu'à la signature finale",
          objectives: ["O4"],
          minutes: 6,
          goal: "Vérifier qu'une offre d'achat contient les éléments d'un contrat valable et mettre en ordre les étapes jusqu'à la signature finale.",
          text: [
            "Un contrat valable a besoin de : parties qui ont légalement le droit de signer (capables), une offre et une acceptation (accord mutuel), une contrepartie (quelque chose de valeur donné par chaque partie) et un but légal. Un contrat d'achat ou de vente immobilier doit en général être écrit pour pouvoir être appliqué ; cette règle s'appelle le statute of frauds.",
            "Un contrat est nul (void) s'il n'a jamais été valable (par exemple, un but illégal). Il est annulable (voidable) si une partie peut l'annuler, par exemple quand un mineur l'a signé. La plupart des offres d'achat contiennent des conditions suspensives (contingencies), comme obtenir un prêt ou une bonne inspection, et un dépôt de garantie (earnest money), qui montre que l'acheteur est sérieux.",
            "Un parcours courant est : offre, acceptation, ouverture du séquestre (escrow) ou désignation d'un agent de clôture, inspection, évaluation et accord du prêt, dernière visite, puis signature finale (closing). Des règles fédérales protègent l'emprunteur : le prêteur remet un Loan Estimate (estimation du prêt) dans les trois jours ouvrables qui suivent la demande de prêt, et une Closing Disclosure (document final du prêt) au moins trois jours ouvrables avant la signature finale, pour que l'acheteur puisse les comparer."
          ],
          steps: ["Vérifiez que les parties sont nommées et ont le droit de signer.", "Vérifiez qu'il y a une offre claire et une acceptation signée.", "Vérifiez le prix, le dépôt de garantie et ce que chaque partie donne (contrepartie).", "Vérifiez que le contrat est écrit et a un but légal.", "Listez les conditions suspensives et leurs délais.", "Mettez en ordre les étapes jusqu'à la signature finale, avec les délais du Loan Estimate et de la Closing Disclosure."],
          words: [["Contrepartie", "quelque chose de valeur que chaque partie donne, comme de l'argent ou une promesse."], ["Statute of frauds", "la règle selon laquelle les contrats immobiliers doivent en général être écrits pour être appliqués."], ["Nul / annulable", "nul : n'a jamais été un contrat valable ; annulable : valable, mais une partie peut l'annuler."], ["Condition suspensive", "une condition qui doit se réaliser pour que la vente continue, comme l'accord du prêt."], ["Dépôt de garantie (earnest money)", "une somme que l'acheteur dépose pour montrer qu'il est sérieux."], ["Closing Disclosure", "le document final du prêteur avec les conditions du prêt et les frais de clôture."]],
          slides: [
            { title: "Les éléments d'un contrat valable", bullets: ["Parties capables", "Offre et acceptation", "Contrepartie et but légal", "Écrit, pour l'immobilier"] },
            { title: "Nul, annulable, sous condition", bullets: ["Nul : jamais valable", "Annulable : une partie peut l'annuler", "Condition suspensive : par exemple l'accord du prêt"] },
            { title: "Le chemin jusqu'à la signature finale", bullets: ["Offre, acceptation, séquestre", "Inspection, évaluation, accord du prêt", "Dernière visite, puis signature finale"] },
            { title: "Documents fédéraux du prêt (CFPB)", bullets: ["Loan Estimate : dans les 3 jours ouvrables après la demande", "Closing Disclosure : 3 jours ouvrables ou plus avant la signature finale"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Écrivez une courte offre d'achat inventée (noms, adresse, prix, dépôt de garantie, une condition suspensive, signatures). Vérifiez-la ensuite avec les six étapes ci-dessus et listez ce qui manque. Terminez avec les étapes jusqu'à la signature finale, dans l'ordre.",
          youCanNow: "vérifier qu'une offre d'achat contient les éléments d'un contrat valable et mettre en ordre les étapes jusqu'à la signature finale.",
          quickCheck: [
            { objective: "O4", q: "Un acheteur et un vendeur se mettent d'accord sur la vente d'une maison seulement par téléphone. Selon le statute of frauds, l'accord est :", options: ["Entièrement applicable", "Applicable après une semaine", "En général non applicable tant qu'il n'est pas écrit", "Illégal"], answer: 2, why: "Les contrats immobiliers doivent en général être écrits pour être appliqués." },
            { objective: "O4", q: "Quand l'emprunteur doit-il recevoir la Closing Disclosure ?", options: ["Au moins trois jours ouvrables avant la signature finale", "Le jour de la signature finale", "Dans le mois après la signature finale", "Avant de faire une offre"], answer: 0, why: "Le CFPB indique que le prêteur remet la Closing Disclosure au moins trois jours ouvrables avant la signature finale." }
          ]
        },
        {
          title: "Les calculs de l'examen immobilier",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer une commission, un ratio prêt-valeur, une taxe foncière, un prorata et une surface.",
          text: [
            "Pour s'entraîner seulement : tous les chiffres ici sont inventés. Commission : prix de vente multiplié par le taux. Une vente de 300 000 $ à 6 % donne 18 000 $. Si l'agence du vendeur reçoit la moitié, cela fait 9 000 $ ; si la part de l'agent est de 60 %, l'agent reçoit 5 400 $.",
            "Le ratio prêt-valeur (LTV) est le prêt divisé par la valeur. Un prêt de 240 000 $ sur une maison de 300 000 $ donne 0,80, soit 80 %. La taxe foncière est la valeur imposable multipliée par le taux : 200 000 $ fois 1,5 % donne 3 000 $ par an, soit 250 $ par mois.",
            "Le prorata partage un coût selon les jours. Si la taxe annuelle est de 3 650 $ et que l'année compte 365 jours, cela fait 10 $ par jour ; si le vendeur a possédé la maison 120 jours et que l'acheteur paie la facture plus tard, le vendeur doit 1 200 $ à l'acheteur. Surface : longueur fois largeur. Un terrain de 50 pieds sur 120 pieds fait 6 000 pieds carrés. Une acre fait 43 560 pieds carrés. Vérifiez si votre examen utilise une année de 360 ou de 365 jours."
          ],
          steps: ["Lisez la question et soulignez ce qu'elle demande.", "Écrivez la formule (partie = total fois taux).", "Transformez les pourcentages en décimales (6 % = 0,06).", "Faites une étape à la fois sur papier.", "Demandez-vous : la réponse a-t-elle du sens ?"],
          words: [["Commission", "la rémunération pour une vente, en général un pourcentage du prix de vente."], ["Partage (split)", "la façon de répartir une commission entre agences ou entre un courtier et un agent."], ["Ratio prêt-valeur (LTV)", "le montant du prêt divisé par la valeur du bien, en pourcentage."], ["Valeur imposable", "la valeur que l'administration locale utilise pour calculer la taxe foncière."], ["Prorata", "le partage d'un coût entre acheteur et vendeur selon les jours où chacun possède le bien."]],
          slides: [
            { title: "La commission", bullets: ["Prix de vente x taux", "300 000 $ x 6 % = 18 000 $", "Moitié à l'agence du vendeur = 9 000 $ ; part de 60 % = 5 400 $"] },
            { title: "LTV et taxe foncière", bullets: ["LTV = prêt / valeur : 240 000 $ / 300 000 $ = 80 %", "Taxe = valeur imposable x taux : 200 000 $ x 1,5 % = 3 000 $"] },
            { title: "Prorata et surface", bullets: ["3 650 $ / 365 = 10 $ par jour ; 120 jours = 1 200 $", "50 pieds x 120 pieds = 6 000 pieds carrés", "1 acre = 43 560 pieds carrés"] },
            { title: "Méthode", bullets: ["Soulignez la question", "Écrivez la formule, utilisez des décimales", "Vérifiez que la réponse a du sens"] }
          ],
          tryIt: "Pour s'entraîner seulement. Résolvez sur papier avec une calculatrice : (1) commission de 5 % sur 250 000 $ ; (2) LTV d'un prêt de 180 000 $ sur une maison de 200 000 $ ; (3) taxe annuelle sur une valeur imposable de 150 000 $ à 2 % ; (4) part du vendeur sur une taxe annuelle de 1 825 $ pour 73 jours (année de 365 jours) ; (5) pieds carrés d'un terrain de 80 pieds sur 100 pieds. Réponses : 12 500 $ ; 90 % ; 3 000 $ ; 365 $ ; 8 000.",
          youCanNow: "résoudre les calculs courants d'un examen immobilier en écrivant votre raisonnement.",
          quickCheck: [
            { objective: "O5", q: "Pour s'entraîner seulement : quel est le LTV d'un prêt de 270 000 $ sur une maison de 300 000 $ ?", options: ["80 %", "85 %", "111 %", "90 %"], answer: 3, why: "270 000 $ divisé par 300 000 $ donne 0,90, soit 90 %." },
            { objective: "O5", q: "Pour s'entraîner seulement : un terrain fait 100 pieds sur 150 pieds. Combien de pieds carrés fait-il ?", options: ["250", "15 000", "1 500", "43 560"], answer: 1, why: "La surface est la longueur fois la largeur : 100 fois 150 donne 15 000 pieds carrés." }
          ]
        },
        {
          title: "Votre plan d'étude et d'examen",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Écrire un plan d'étude et d'examen daté à partir du programme officiel de l'examen de votre État.",
          text: [
            "Votre État ou sa société d'examen publie un guide du candidat (candidate handbook). Il contient en général le programme de l'examen (les thèmes et le nombre de questions sur chacun), les règles du jour de l'examen, la pièce d'identité à apporter et la façon de réserver. Téléchargez-le sur le site officiel, pas une copie publiée par quelqu'un.",
            "Transformez le programme en plan. Listez chaque thème, donnez-vous une note de 1 à 3 sur chacun et marquez vos trois plus faibles. Placez les grandes dates sur un calendrier en partant de la date d'examen visée : finir les cours, faire la demande, donner les empreintes digitales, réserver l'examen. Ensuite, prévoyez de courtes séances d'étude chaque semaine, avec des questions d'entraînement et des calculs chaque semaine.",
            "Les examens blancs aident le plus quand vous revoyez chaque mauvaise réponse et écrivez pourquoi la bonne réponse est juste. Méfiez-vous de tout site qui promet une \"réussite garantie\" ou vend de vraies questions d'examen : c'est une arnaque ou de la triche, et un État peut refuser une licence pour cela."
          ],
          steps: ["Téléchargez le guide du candidat de votre État sur le site officiel.", "Recopiez les thèmes du programme de l'examen.", "Donnez-vous une note de 1 à 3 sur chaque thème ; marquez vos trois plus faibles.", "Choisissez une date d'examen visée et remontez jusqu'à chaque étape.", "Prévoyez des séances d'étude hebdomadaires avec des questions d'entraînement et des calculs.", "Revoyez chaque mauvaise réponse et écrivez pourquoi la bonne réponse est juste."],
          words: [["Guide du candidat", "le guide officiel de l'examen : thèmes, règles, pièce d'identité et réservation."], ["Programme de l'examen", "la liste des thèmes de l'examen et le poids de chacun."], ["Date visée", "la date à laquelle vous voulez passer l'examen ; vous planifiez à rebours à partir d'elle."]],
          slides: [
            { title: "Commencez par le guide officiel", bullets: ["Programme de l'examen", "Règles du jour de l'examen et pièce d'identité", "Comment réserver"] },
            { title: "Construisez le plan", bullets: ["Notez chaque thème de 1 à 3", "Marquez vos trois plus faibles", "Partez de la date d'examen visée et remontez"] },
            { title: "Entraînez-vous intelligemment", bullets: ["Questions d'entraînement et calculs chaque semaine", "Revoyez chaque mauvaise réponse", "Pas de \"réussite garantie\" ni de questions volées"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Tâche finale : faites votre plan d'étude et d'examen pour la licence immobilière : les étapes de votre État avec des dates et la page officielle, les thèmes du programme avec vos trois plus faibles marqués, une fiche sur le mandat, le logement équitable et les contrats, cinq calculs résolus, et un programme hebdomadaire jusqu'à votre date d'examen.",
          youCanNow: "transformer le programme de l'examen de votre État en plan d'étude et d'examen daté, et le suivre.",
          quickCheck: [
            { objective: "O6", q: "D'où doit venir la liste des thèmes de votre plan d'étude ?", options: ["D'une publication sur les réseaux sociaux", "Du programme officiel de l'examen de votre État", "Des thèmes que vous préférez", "D'un site qui vend de vraies questions d'examen"], answer: 1, why: "Le programme officiel montre ce que l'examen évalue vraiment." },
            { objective: "O6", q: "Vous ratez souvent les questions de prorata aux examens blancs. Quel est le meilleur plan ?", options: ["Laisser tomber le prorata ; il n'y a que quelques questions", "Passer l'examen plus tôt", "Le marquer comme thème faible et ajouter des calculs chaque semaine", "Acheter un forfait \"réussite garantie\""], answer: 2, why: "Marquer les thèmes faibles et s'entraîner chaque semaine comble le retard avant le jour de l'examen." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Contrats, calculs et votre plan d'examen",
        questions: [
          { objective: "O4", q: "Lequel n'est PAS un des éléments d'un contrat valable ?", options: ["Une offre et une acceptation", "Une contrepartie", "Un tampon de notaire sur chaque page", "Un but légal"], answer: 2, why: "Un contrat valable a besoin de parties capables, d'un accord mutuel, d'une contrepartie et d'un but légal ; un tampon sur chaque page n'en fait pas partie." },
          { objective: "O4", q: "Une offre d'achat dit que la vente continue seulement si l'acheteur obtient un prêt. C'est :", options: ["Une condition suspensive", "Un privilège", "Une servitude", "Une commission"], answer: 0, why: "Une condition suspensive est une condition qui doit se réaliser pour que la vente continue." },
          { objective: "O5", q: "Pour s'entraîner seulement : une vente de 400 000 $ avec une commission de 5 % donne :", options: ["2 000 $", "4 000 $", "200 000 $", "20 000 $"], answer: 3, why: "400 000 $ fois 0,05 donne 20 000 $." },
          { objective: "O5", q: "Pour s'entraîner seulement : une valeur imposable de 250 000 $ à un taux de 2 % donne une taxe annuelle de :", options: ["5 000 $", "500 $", "50 000 $", "2 500 $"], answer: 0, why: "250 000 $ fois 0,02 donne 5 000 $." },
          { objective: "O6", q: "Quelle est la meilleure façon d'utiliser un examen blanc ?", options: ["Apprendre seulement les réponses par cœur", "Revoir chaque mauvaise réponse et écrire pourquoi la bonne est juste", "Le faire une fois et s'arrêter", "Partager les questions en ligne"], answer: 1, why: "Revoir pourquoi chaque réponse est juste construit la compréhension que le vrai examen évalue." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparer l'examen de la licence d'agent immobilier",
    questions: [
      { objective: "O1", q: "Qui délivre les licences d'agent immobilier aux États-Unis ?", options: ["Le gouvernement fédéral", "L'organisme immobilier de chaque État", "La National Association of Realtors (association nationale des agents)", "Votre banque locale"], answer: 1, why: "Les licences dépendent de l'État et sont délivrées par son organisme immobilier." },
      { objective: "O1", q: "Dans la plupart des États, quelle étape vient avant de pouvoir travailler comme agent ?", options: ["Être propriétaire d'une maison", "Vendre cinq maisons", "Réussir l'examen de l'État et une vérification des antécédents", "Devenir courtier"], answer: 2, why: "La plupart des États demandent l'examen et une vérification des antécédents, puis un travail sous un courtier." },
      { objective: "O1", q: "Un agent commercial doit travailler sous :", options: ["Un courtier agréé", "Une banque", "Un inspecteur en bâtiment", "Une société de titres"], answer: 0, why: "Les agents commerciaux sont supervisés par un courtier agréé." },
      { objective: "O2", q: "Lequel est un bien mobilier ?", options: ["Une chaudière encastrée", "Un arbre dans le jardin", "Le terrain", "Un canapé dans le salon"], answer: 3, why: "Un bien mobilier se déplace ; le canapé n'est pas fixé." },
      { objective: "O2", q: "La forme de propriété la plus complète est :", options: ["La servitude", "Le fee simple", "Le privilège", "Le bail"], answer: 1, why: "Le fee simple donne au propriétaire l'ensemble de droits le plus complet." },
      { objective: "O2", q: "Quelle façon de décrire un terrain utilise le plan enregistré d'un lotissement ?", options: ["Metes and bounds", "Fee simple", "Lot and block", "Prorata"], answer: 2, why: "Lot and block renvoie aux lots d'un plan de lotissement enregistré." },
      { objective: "O2", q: "Des copropriétaires dont les parts NE passent PAS automatiquement aux autres au décès détiennent le titre en :", options: ["Tenancy in common", "Joint tenancy", "Courtiers", "Titulaires d'un privilège"], answer: 0, why: "La tenancy in common n'a pas de droit de survie." },
      { objective: "O3", q: "Lequel est un des devoirs fiduciaires d'un agent envers son client ?", options: ["Dire à l'autre partie le prix le plus bas du client", "La loyauté", "Choisir le prêteur à la place du client", "Ignorer les instructions légales du client"], answer: 1, why: "La loyauté est un devoir fiduciaire essentiel (OLDCAR)." },
      { objective: "O3", q: "Dire à des propriétaires de vendre vite parce qu'un certain groupe arrive dans le quartier s'appelle :", options: ["Le steering", "Le redlining", "Le double mandat", "Le blockbusting"], answer: 3, why: "Le blockbusting pousse les propriétaires à vendre en créant la peur de l'arrivée d'un groupe." },
      { objective: "O3", q: "Refuser des prêts dans un quartier à cause des personnes qui y vivent s'appelle :", options: ["Le redlining", "Le prorata", "Le steering", "Le séquestre"], answer: 0, why: "Le redlining consiste à refuser des prêts ou des assurances dans certains quartiers ; c'est illégal." },
      { objective: "O3", q: "Un acheteur en fauteuil roulant demande à visiter une maison. Selon le Fair Housing Act, vous :", options: ["Lui montrez seulement des maisons avec rampe, sans lui demander", "Refusez à cause des escaliers", "Lui montrez la maison aux mêmes conditions qu'à tout le monde", "Lui demandez un certificat médical"], answer: 2, why: "Le handicap est une catégorie protégée, donc l'acheteur doit être traité de façon égale." },
      { objective: "O4", q: "Un contrat signé par un mineur, que le mineur peut annuler, est :", options: ["Nul", "Annulable", "Entièrement applicable", "Un privilège"], answer: 1, why: "Annulable veut dire valable, mais une partie peut l'annuler." },
      { objective: "O4", q: "Dans combien de jours ouvrables après une demande de prêt le prêteur doit-il remettre un Loan Estimate ?", options: ["Trois", "Dix", "Trente", "Un"], answer: 0, why: "Le CFPB indique que le Loan Estimate arrive dans les trois jours ouvrables après la demande." },
      { objective: "O4", q: "Le dépôt de garantie (earnest money) est :", options: ["La commission de l'agent", "La taxe foncière annuelle", "Un privilège sur la maison", "Une somme déposée qui montre que l'acheteur est sérieux"], answer: 3, why: "Le dépôt de garantie est la somme de bonne foi versée par l'acheteur." },
      { objective: "O5", q: "Pour s'entraîner seulement : un agent reçoit une part de 50 % d'une commission de 9 000 $. L'agent reçoit :", options: ["900 $", "9 000 $", "4 500 $", "18 000 $"], answer: 2, why: "9 000 $ fois 0,50 donne 4 500 $." },
      { objective: "O5", q: "Pour s'entraîner seulement : un prêt de 160 000 $ sur une maison de 200 000 $ a un LTV de :", options: ["60 %", "125 %", "40 %", "80 %"], answer: 3, why: "160 000 $ divisé par 200 000 $ donne 0,80, soit 80 %." },
      { objective: "O5", q: "Pour s'entraîner seulement : la taxe annuelle est de 3 650 $ (année de 365 jours). Le vendeur a possédé la maison 30 jours. La part du vendeur est :", options: ["300 $", "365 $", "100 $", "3 000 $"], answer: 0, why: "3 650 $ divisé par 365 donne 10 $ par jour ; 30 jours donnent 300 $." },
      { objective: "O5", q: "Combien de pieds carrés y a-t-il dans une acre ?", options: ["5 280", "43 560", "10 000", "640"], answer: 1, why: "Une acre fait 43 560 pieds carrés." },
      { objective: "O6", q: "Le guide du candidat de votre État vous indique en général :", options: ["Les questions exactes de l'examen", "Quelle maison acheter", "Le programme de l'examen et les règles du jour de l'examen", "Votre futur salaire"], answer: 2, why: "Le guide donne le programme, les règles, la pièce d'identité demandée et la réservation." },
      { objective: "O6", q: "Un bon plan d'étude commence par :", options: ["Choisir une date d'examen visée et remonter jusqu'à chaque étape", "Acheter le cours le plus cher", "Étudier seulement vos thèmes préférés", "Attendre de vous sentir prêt"], answer: 0, why: "Planifier à rebours depuis une date visée place chaque étape et chaque séance d'étude sur le calendrier." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et vérifiez-la à nouveau.",
    criteria: [
      { name: "Étapes officielles", objective: "O1", notYet: "Des étapes manquent, sont dans le désordre ou viennent d'un site non officiel.", meets: "Chaque étape de la page de l'organisme de l'État est listée dans l'ordre, avec l'adresse de la page et la date de vérification.", exceeds: "Indique aussi les coûts et les documents de chaque étape, exactement comme la page officielle les donne." },
      { name: "Termes de base", objective: "O2", notYet: "Plusieurs termes de bien ou de propriété sont faux ou manquent dans la fiche.", meets: "La fiche définit correctement, avec des mots simples, les principaux termes de bien et de propriété.", exceeds: "Chaque terme a un exemple de la vie réelle inventé par l'apprenant." },
      { name: "Mandat et logement équitable", objective: "O3", notYet: "Les devoirs fiduciaires ou les sept catégories fédérales protégées manquent ou sont faux.", meets: "Liste les devoirs et les sept catégories fédérales, ainsi que le steering, le blockbusting et le redlining.", exceeds: "Ajoute les autres catégories protégées par l'État ou la ville de l'apprenant, avec la source." },
      { name: "Contrat et signature finale", objective: "O4", notYet: "Des éléments du contrat ou des étapes de la signature finale manquent, ou les délais du Loan Estimate et de la Closing Disclosure sont faux.", meets: "Liste tous les éléments d'un contrat valable et les étapes jusqu'à la signature finale dans l'ordre, avec les bons délais d'information.", exceeds: "Ajoute les conditions suspensives et leurs délais à partir d'un exemple d'offre." },
      { name: "Calculs", objective: "O5", notYet: "Moins de 4 des 5 exercices sont justes, ou le raisonnement n'est pas écrit.", meets: "Au moins 4 des 5 exercices sont justes, avec le raisonnement écrit.", exceeds: "Les 5 sont justes, plus un exercice supplémentaire écrit et résolu par l'apprenant." },
      { name: "Plan daté", objective: "O6", notYet: "Pas de date visée, ou les thèmes ne viennent pas du programme officiel de l'examen.", meets: "Couvre tous les thèmes du programme, marque les trois plus faibles et prévoit des séances d'étude hebdomadaires jusqu'à une date visée.", exceeds: "Inclut des dates de révision des examens blancs et une date d'examen de secours." }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui terminent la formation agréée par l'État avant la licence dans les 6 mois (questionnaire de suivi)",
      "Les apprenants qui réussissent l'examen immobilier de l'État, et à quelle tentative (déclaré par l'apprenant)",
      "Les apprenants qui ont leur licence et travaillent sous un courtier parrain dans les 12 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour lire la page officielle de l'organisme de l'État et le guide du candidat",
      "Papier, stylo et calculatrice simple",
      "Un calendrier (papier ou téléphone) pour le plan d'étude et d'examen",
      "Environ 60 à 75 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Si le groupe vient d'un seul État, ouvrez ensemble la page de l'organisme de cet État à la leçon 1 et utilisez son guide du candidat à la leçon 6.",
      "Dites clairement que ce cours prépare les apprenants ; il ne remplace pas les cours agréés par l'État et ne donne pas de licence.",
      "Faites la leçon de calcul en binômes au tableau : l'un résout, l'autre vérifie les étapes.",
      "Utilisez des jeux de rôle pour les situations de logement équitable ; arrêtez-vous et nommez la règle à chaque fois.",
      "Ne donnez pas de conseils sur l'achat d'un bien, l'investissement, les prêts ou les impôts ; orientez les apprenants vers les sources officielles et des professionnels agréés.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
