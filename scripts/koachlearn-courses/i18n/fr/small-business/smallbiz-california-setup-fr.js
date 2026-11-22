"use strict";

// Koach Learn course (French translation of small-business/smallbiz-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations".

const SOS_LLC = { name: "Secrétaire d'État de Californie : sociétés à responsabilité limitée (formulaires et frais, en anglais)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "Secrétaire d'État de Californie : sociétés par actions (formulaires et frais, en anglais)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "Secrétaire d'État de Californie : bizfile Online (en anglais)", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board : société à responsabilité limitée (en anglais)", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board : sociétés par actions (en anglais)", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board : guide des formes courantes d'entreprise (FTB 1123, en anglais)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA : permis et licences (en anglais)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA : obtenir un permis de vendeur (FAQ, en anglais)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS : obtenir un numéro d'identification d'employeur (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold : aide de la Californie pour trouver les permis (en anglais)", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD : étape 1, s'inscrire comme employeur (en anglais)", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "Greffe du comté de Los Angeles : règles du nom commercial fictif (exemple de comté, en anglais)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "Bureau californien du défenseur des petites entreprises : créer votre entreprise (en anglais)", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-fr",
  lang: "fr",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Créer une petite entreprise en Californie, coûts compris",
  skills: "Choisir une forme d'entreprise, S'enregistrer auprès de l'État et du comté, Obtenir un EIN et un permis de vendeur, Trouver les permis locaux, Construire un tableau des coûts de démarrage et des échéances",
  outcome: "construire un plan de création d'une page pour votre propre entreprise en Californie : la forme que vous utiliserez, chaque enregistrement et permis nécessaire dans le bon ordre, le service officiel pour chacun, ce que chacun coûte (ou où trouver le coût), et les échéances à ne pas manquer.",
  about: [
    "Ce cours s'adresse aux personnes qui créent une petite entreprise en Californie : un food truck, un salon de coiffure, une entreprise de ménage, une épicerie de quartier, une boutique en ligne ou une boulangerie à domicile. Beaucoup de nos élèves dirigent leur première entreprise, sont issus de minorités, et beaucoup le font sans avocat.",
    "Vous apprendrez les étapes dans l'ordre : choisir une forme d'entreprise, enregistrer le nom, obtenir un numéro fiscal fédéral gratuit, obtenir un permis de vendeur si vous vendez des marchandises, trouver les permis de votre ville et de votre comté, et prévoir l'impôt annuel de l'État et les déclarations. Chaque frais de l'État cité dans ce cours a été vérifié sur la page officielle du gouvernement, et chaque leçon indique ces pages.",
    "Les frais et les règles changent. Avant de payer quoi que ce soit, ouvrez la page officielle indiquée dans la leçon et vérifiez le montant actuel. Les frais des villes et des comtés sont différents partout, alors ce cours vous montre où les chercher au lieu de les deviner. Pour votre situation, un mentor gratuit de SCORE, un Small Business Development Center (SBDC, centre d'aide aux petites entreprises) ou un professionnel de la fiscalité peut vous aider.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les tâches forment ensemble votre propre plan de création."
  ],
  finalTask: "Faites un plan de création d'une page pour votre entreprise avec cinq colonnes : Étape, Service (avec le site officiel), Coût (ou \"à vérifier sur ...\"), Échéance, Fait. Incluez votre forme d'entreprise, l'enregistrement du nom, l'EIN, le permis de vendeur (ou pourquoi vous n'en avez pas besoin), la licence d'entreprise de la ville, les permis particuliers que CalGold indique pour votre type d'entreprise, et l'impôt annuel de 800 $ et le Statement of Information si vous créez une LLC ou une société par actions.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui créent une petite entreprise en Californie, comme un food truck, un salon de coiffure, un service de nettoyage, une épicerie de quartier, une boutique en ligne ou une boulangerie à domicile. Beaucoup créent leur première entreprise, sont issus de minorités et le font sans avocat.",
    startingPoint: "Ils ont une idée d'entreprise et savent utiliser un téléphone ou un ordinateur pour visiter des sites web. La plupart ne connaissent pas les étapes de création, le bureau qui s'occupe de chacune, les frais de l'État, ni les déclarations et impôts annuels qui vont avec chaque forme d'entreprise.",
    gap: "Oublier un enregistrement, un permis ou une déclaration annuelle peut entraîner des amendes et des pénalités, et des sites payants qui imitent les sites officiels font payer trop cher des services gratuits. Les apprenants ont besoin d'un plan de création avec chaque étape dans l'ordre, le bureau officiel, le coût et l'échéance, pour démarrer dans les règles et prévoir le bon budget.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un téléphone ou un ordinateur avec internet pour ouvrir les pages officielles en .gov",
      "Temps : des leçons d'environ 5 minutes, à caser autour de la gestion ou de la préparation de l'entreprise",
      "Les frais et les règles changent, et les frais varient selon la ville et le comté ; les apprenants consultent chaque page officielle avant de payer",
      "Pas de conseil juridique ou fiscal ; vie privée : un numéro de sécurité sociale va seulement sur le formulaire officiel de l'IRS"
    ],
    prerequisites: "Aucun. Le cours « Découvrir l'IA pour les petites entreprises » aide si les apprenants veulent utiliser l'IA pour organiser leur plan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre idée d'entreprise, des propriétaires et des risques", action: "choisir une forme d'entreprise et lister ce que coûte sa création", standard: "avec une raison pour ce choix et les frais vérifiés sur la page du Secretary of State" },
    { id: "O2", condition: "À partir du nom et de la forme de votre entreprise", action: "trouver comment enregistrer le nom de votre entreprise", standard: "avec le bon bureau, sa page de frais et la règle de publication notés dans votre plan" },
    { id: "O3", condition: "À partir de votre type d'entreprise", action: "décider si vous avez besoin d'un permis de vendeur et lister comment obtenir un EIN gratuit", standard: "en nommant l'IRS et la CDTFA comme bureaux, et sans aucun service payant pour l'EIN" },
    { id: "O4", condition: "Avec CalGold et le site de votre ville", action: "lister les permis locaux dont votre entreprise a besoin", standard: "avec le site web de chaque organisme et les frais ou l'endroit où les trouver" },
    { id: "O5", condition: "À partir de votre forme d'entreprise et de vos projets d'embauche", action: "lister les coûts et les échéances annuels de l'État", standard: "y compris l'impôt de 800 $, le Statement of Information et l'inscription à l'EDD quand ils s'appliquent, chacun vérifié sur la page officielle" },
    { id: "O6", condition: "À partir de toutes les étapes du cours", action: "créer un plan de création d'une page avec les étapes dans l'ordre, les bureaux, les coûts et les échéances", standard: "avec chaque coût vérifié sur la page officielle ou marqué « à chercher sur » avec l'endroit" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir et enregistrer votre entreprise",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir une forme d'entreprise",
          minutes: 6,
          goal: "Choisir la forme d'entreprise qui convient aujourd'hui à votre activité, et savoir combien coûte sa création.",
          text: [
            "La forme d'entreprise est la forme juridique de votre entreprise. Les choix les plus courants pour les petites entreprises sont l'entreprise individuelle (sole proprietorship), la société en nom collectif (general partnership), la société à responsabilité limitée (LLC) et la société par actions (corporation).",
            "Une entreprise individuelle, c'est une seule personne qui exerce une activité. Vous ne déposez pas de documents de création auprès du Secretary of State de Californie (le bureau du secrétaire d'État), donc il n'y a pas de frais de création à l'État. Mais pour la loi, vous et l'entreprise ne faites qu'un : si l'entreprise doit de l'argent ou est poursuivie, vos biens personnels peuvent être en danger. Une société en nom collectif repose sur la même idée avec deux propriétaires ou plus.",
            "Une LLC ou une société par actions est une personne juridique séparée. Vous la créez en déposant un dossier auprès du Secretary of State de Californie. Le Secretary of State indique des frais de 70 $ pour les statuts d'une LLC (formulaire LLC-1) et de 100 $ pour les statuts d'une société par actions ordinaire (formulaire ARTS-GS). Une LLC ou une société par actions peut aider à protéger vos biens personnels des dettes de l'entreprise, mais elle coûte plus cher chaque année (leçon 6).",
            "Il n'y a pas une seule bonne réponse. Une entreprise de ménage d'une personne qui démarre peut commencer en entreprise individuelle ; un restaurant avec un bail, des employés et plus de risques crée souvent une LLC ou une société par actions. Parlez-en avec un conseiller gratuit d'un SBDC, un mentor de SCORE ou un professionnel de la fiscalité avant de décider."
          ],
          steps: ["Notez qui possède l'entreprise et quels risques elle comporte (bail, employés, clients sur place, prêts).", "Lisez le guide du FTB sur les formes courantes d'entreprise.", "Comparez les coûts annuels, pas seulement les frais de création.", "Choisissez une forme, et demandez à un conseiller si vous hésitez."],
          words: [["Forme d'entreprise", "la forme juridique d'une entreprise, comme l'entreprise individuelle, la LLC ou la société par actions."], ["Entreprise individuelle", "une entreprise qui appartient à une seule personne et qui n'est pas séparée du propriétaire pour la loi."], ["LLC", "société à responsabilité limitée : une entreprise enregistrée auprès de l'État et séparée de ses propriétaires."], ["Responsabilité", "le fait d'être légalement tenu de payer une dette ou de réparer un dommage."]],
          slides: [
            { title: "Quatre formes courantes", bullets: ["Entreprise individuelle (un propriétaire)", "Société en nom collectif (deux propriétaires ou plus)", "Société à responsabilité limitée (LLC)", "Société par actions (corporation)"] },
            { title: "Entreprise individuelle ou société en nom collectif", bullets: ["Aucun dépôt de création auprès du Secretary of State", "Vous et l'entreprise ne faites qu'un pour la loi", "Vos biens personnels peuvent être en danger"] },
            { title: "LLC ou société par actions", bullets: ["Créée par un dépôt auprès du Secretary of State", "LLC-1 : 70 $. Société par actions ARTS-GS : 100 $", "Séparée de vous, mais plus chère chaque année"] },
            { title: "Choisir", bullets: ["Pensez au risque : bail, employés, clients, prêts", "Comparez les coûts annuels, pas seulement la création", "Demandez à un conseiller gratuit SBDC ou SCORE"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Commencez votre plan de création. En haut, écrivez votre idée d'entreprise, qui la possède et ses plus grands risques. Puis écrivez la forme que vous choisiriez aujourd'hui et une raison.",
          youCanNow: "nommer les formes d'entreprise courantes, dire ce que coûte à l'État la création d'une LLC ou d'une société par actions, et en choisir une pour votre entreprise.",
          quickCheck: [
            { objective: "O1", q: "Quelle forme d'entreprise ne demande aucun dépôt de création auprès du Secretary of State de Californie ?", options: ["La LLC (société à responsabilité limitée)", "La corporation (société par actions)", "L'entreprise individuelle", "L'association à but non lucratif"], answer: 2, why: "Une entreprise individuelle ne dépose pas de papiers de création auprès du Secretary of State." },
            { objective: "O1", q: "Vous voulez créer une LLC et vous voyez des frais en ligne. Que faites-vous avant de payer ?", options: ["Vérifier les frais actuels sur la page officielle du Secretary of State", "Payer sur le premier site qui apparaît", "Demander à un ami combien il a payé il y a des années", "Suivre ce que dit l'IA"], answer: 0, why: "Les frais changent, donc vous vérifiez la page officielle avant de payer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nommer et enregistrer votre entreprise",
          minutes: 5,
          goal: "Enregistrer le nom de votre entreprise de la bonne façon selon votre forme d'entreprise.",
          text: [
            "Une LLC ou une société par actions enregistre son nom quand elle dépose ses documents de création auprès du Secretary of State. Vous pouvez faire le dépôt en ligne sur bizfile Online (bizfileonline.sos.ca.gov). Cherchez-y d'abord le nom pour voir si une autre entreprise l'utilise déjà.",
            "Si vous exercez sous un nom qui n'est pas votre nom légal, vous déposez une déclaration de nom commercial fictif (Fictitious Business Name, FBN), aussi appelée DBA (\"doing business as\"), auprès du greffe du comté (county clerk) où se trouve votre entreprise. Par exemple, si Maria Lopez dirige \"Sunrise Tamales\", elle dépose un FBN. Une LLC qui utilise un autre nom que son nom enregistré dépose aussi un FBN.",
            "Les frais de FBN sont fixés par chaque comté, alors cherchez-les sur le site du greffe de votre comté. Les comtés exigent aussi de publier le FBN dans un journal local une fois par semaine pendant quatre semaines, en général en commençant dans les 30 jours suivant le dépôt, puis de déposer la preuve de publication. Vérifiez les règles exactes de votre comté."
          ],
          steps: ["Cherchez votre idée de nom sur bizfile Online.", "LLC ou société par actions : déposez les documents de création sur bizfile Online.", "Nom différent de votre nom légal : déposez un FBN auprès du greffe de votre comté.", "Publiez le FBN dans un journal comme l'exige votre comté, et déposez la preuve.", "Notez chaque étape, son service et son coût dans votre plan."],
          words: [["Nom commercial fictif (FBN)", "un nom d'entreprise qui n'est pas le nom légal du propriétaire ; aussi appelé DBA."], ["DBA", "\"doing business as\" : le nom qu'une entreprise utilise auprès du public."], ["Greffe du comté (county clerk)", "le service du comté qui enregistre les déclarations de FBN et d'autres documents publics."]],
          slides: [
            { title: "LLC ou société par actions", bullets: ["Le nom est enregistré à la création", "Dépôt en ligne sur bizfileonline.sos.ca.gov", "Cherchez d'abord le nom"] },
            { title: "Nom commercial fictif (DBA)", bullets: ["Pour un nom qui n'est pas votre nom légal", "Déposé auprès du greffe de votre comté", "Exemple : Maria Lopez, sous le nom Sunrise Tamales"] },
            { title: "Coûts et publication du FBN", bullets: ["Les frais sont fixés par chaque comté : voyez son site", "Publication dans un journal local, 1 fois par semaine, 4 semaines", "Puis déposez la preuve ; vérifiez les délais du comté"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Cherchez le nom de votre entreprise sur bizfile Online. Puis trouvez la page FBN du greffe de votre comté et notez dans votre plan les frais de dépôt et la règle de publication.",
          youCanNow: "vérifier si un nom d'entreprise est libre, et dire quand il faut un nom commercial fictif et où le déposer.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un DBA ?", options: ["Un formulaire d'impôts", "Une licence commerciale", "Un type de LLC", "Le nom qu'une entreprise utilise auprès du public, s'il est différent du nom légal du propriétaire"], answer: 3, why: "Un DBA est le nom public d'une entreprise, différent du nom légal du propriétaire." },
            { objective: "O2", q: "Vous avez déposé un Fictitious Business Name (nom commercial) auprès de votre comté. Que devez-vous très probablement faire ensuite ?", options: ["Rien d'autre", "Le publier dans un journal local, comme votre comté l'exige", "Le déposer de nouveau auprès de l'IRS", "Attendre cinq ans"], answer: 1, why: "La plupart des comtés de Californie exigent de publier un FBN dans un journal local." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Obtenir votre EIN gratuit et un permis de vendeur",
          minutes: 5,
          goal: "Demander un EIN à l'IRS et décider si vous avez besoin d'un permis de vendeur en Californie.",
          text: [
            "Un EIN (Employer Identification Number) est le numéro fiscal fédéral de votre entreprise. Les LLC, les sociétés par actions, les sociétés en nom collectif et toute entreprise qui a des employés en ont besoin ; un entrepreneur individuel sans employés peut utiliser son propre numéro, mais prend souvent un EIN pour séparer le professionnel du personnel. L'IRS (l'administration fiscale américaine) dit que vous n'avez jamais à payer de frais pour un EIN. Faites la demande sur irs.gov, et méfiez-vous des sites qui le font payer.",
            "Le permis de vendeur (seller's permit) est délivré par le California Department of Tax and Fee Administration (CDTFA, l'administration fiscale de Californie pour les taxes sur les ventes). Si vous vendez ou louez des marchandises normalement taxables en Californie, il vous en faut un, et vous devez l'afficher sur votre lieu d'activité. Une boutique, un magasin de vêtements, un food truck et un restaurant en ont en général besoin. Un pur service, comme le ménage ou le soutien scolaire, souvent pas, mais vérifiez.",
            "Le CDTFA dit que le permis de vendeur est gratuit, mais qu'il peut demander un dépôt de garantie, dont il fixe le montant lors de la demande. Si vous vendez au même endroit pendant 90 jours ou moins, comme un stand saisonnier, il vous faut peut-être plutôt un permis de vendeur temporaire. Inscrivez-vous en ligne auprès du CDTFA."
          ],
          steps: ["Allez sur irs.gov et cherchez \"apply for an EIN\".", "Faites la demande en ligne en une seule fois et gardez la lettre de confirmation.", "Décidez si vous vendez des marchandises taxables.", "Si oui, demandez un permis de vendeur sur cdtfa.ca.gov.", "Affichez le permis là où vous exercez."],
          words: [["EIN", "Employer Identification Number : un numéro fiscal fédéral gratuit pour une entreprise, délivré par l'IRS."], ["Permis de vendeur", "un permis de Californie, délivré par le CDTFA, pour vendre des marchandises taxables et collecter la taxe sur les ventes."], ["CDTFA", "California Department of Tax and Fee Administration : l'administration californienne des taxes et redevances."], ["Dépôt de garantie", "une somme que le CDTFA peut garder au cas où la taxe sur les ventes ne serait pas payée plus tard."]],
          slides: [
            { title: "EIN : le numéro fiscal de votre entreprise", bullets: ["Délivré par l'IRS, sur irs.gov", "Toujours gratuit : l'IRS ne fait jamais payer un EIN", "Méfiez-vous des sites qui demandent des frais"] },
            { title: "Permis de vendeur : qui en a besoin", bullets: ["Vente ou location de marchandises taxables en Californie", "Boutiques, food trucks, restaurants : en général oui", "Purs services : souvent non, à vérifier"] },
            { title: "Permis de vendeur : coût", bullets: ["Aucuns frais de demande (CDTFA)", "Le CDTFA peut demander un dépôt de garantie", "Ventes de 90 jours ou moins ? Demandez un permis temporaire"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Ajoutez deux lignes à votre plan : EIN (IRS, gratuit, demande sur irs.gov) et permis de vendeur (CDTFA, gratuit, dépôt possible), ou une note qui explique pourquoi vous n'en avez pas besoin. Ne tapez votre numéro de sécurité sociale nulle part ailleurs que dans le formulaire officiel de l'IRS.",
          youCanNow: "demander un EIN gratuit sur le site officiel de l'IRS et décider si votre entreprise a besoin d'un permis de vendeur.",
          quickCheck: [
            { objective: "O3", q: "Quel organisme délivre les permis de vendeur en Californie ?", options: ["L'IRS", "Le greffier de votre comté", "La CDTFA", "Le Secretary of State"], answer: 2, why: "La California Department of Tax and Fee Administration (CDTFA) délivre les permis de vendeur." },
            { objective: "O3", q: "Vous prévoyez de vendre des produits seulement sur un marché de fin d'année pendant quelques semaines. Que faites-vous ?", options: ["Demander à la CDTFA un permis de vendeur temporaire", "Ne pas prendre de permis, puisque c'est court", "Prendre un EIN à la place", "Payer un site privé pour un permis"], answer: 0, why: "Les vendeurs de courte durée peuvent demander un permis de vendeur temporaire à la CDTFA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir et enregistrer votre entreprise",
        questions: [
          { objective: "O1", q: "Quels frais le Secretary of State indique-t-il pour les statuts d'une LLC (formulaire LLC-1) ?", options: ["800 $", "70 $", "20 $", "Gratuit"], answer: 1, why: "La page des formulaires LLC du Secretary of State indique 70 $ pour le formulaire LLC-1." },
          { objective: "O1", q: "Kevin a une entreprise d'entretien de pelouses en entreprise individuelle. Qu'est-ce qui est vrai ?", options: ["Il doit payer 100 $ au Secretary of State pour la créer", "Il ne peut pas utiliser de nom commercial", "Il doit d'abord créer une société par actions", "Il ne dépose pas de documents de création auprès du Secretary of State"], answer: 3, why: "Les entrepreneurs individuels ne déposent pas de documents de création auprès du Secretary of State." },
          { objective: "O2", q: "Maria Lopez vend de la nourriture sous le nom \"Sunrise Tamales\". Où dépose-t-elle son nom commercial fictif ?", options: ["Au greffe de son comté", "Au CDTFA", "À l'IRS", "Au Franchise Tax Board"], answer: 0, why: "Les déclarations de FBN se déposent au greffe du comté où se trouve l'entreprise." },
          { objective: "O3", q: "Un site demande 150 $ pour vous obtenir un EIN. Que faites-vous ?", options: ["Payer ; c'est plus rapide", "Utiliser l'EIN d'un ami", "Faire plutôt la demande gratuite sur irs.gov", "Ne jamais prendre d'EIN"], answer: 2, why: "L'IRS dit que vous n'avez jamais à payer de frais pour un EIN." },
          { objective: "O3", q: "Quelle entreprise a le plus probablement besoin d'un permis de vendeur en Californie ?", options: ["Une entreprise de ménage", "Un service de soutien scolaire", "Une boutique qui vend des vêtements", "Un service de tenue de comptes"], answer: 2, why: "Vendre des marchandises taxables, comme des vêtements, demande un permis de vendeur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Permis locaux, coûts annuels et votre plan",
      lessons: [
        {
          objectives: ["O4","O6"],
          title: "Trouver les permis de votre ville et de votre comté",
          minutes: 5,
          goal: "Utiliser CalGold et le site de votre ville pour lister les permis locaux dont votre entreprise a besoin.",
          text: [
            "La plupart des villes exigent une licence d'entreprise ou un certificat de taxe professionnelle, même pour une entreprise à domicile. Le coût est fixé par chaque ville (ou par le comté si vous êtes hors d'une ville) et dépend souvent de votre type d'activité ou de vos revenus. Cherchez-le sur le site de votre ville ou appelez la mairie.",
            "Certaines entreprises ont besoin de permis particuliers. Un restaurant ou un food truck a besoin d'un permis sanitaire du service de santé environnementale du comté. Une boulangerie à domicile peut avoir besoin d'un enregistrement ou d'un permis \"cottage food\" (production alimentaire à domicile) du comté. Un salon a besoin des licences des conseils de l'État pour les employés. Beaucoup d'endroits demandent aussi une vérification de zonage, une inspection incendie ou un permis pour l'enseigne.",
            "CalGold (calgold.ca.gov) est un outil gratuit de l'État qui vous aide à trouver les informations sur les permis. Vous choisissez votre ville ou votre comté et votre type d'entreprise, et il liste les services concernés et comment les joindre. CalGold ne délivre pas de permis, et il indique qu'il est encore en construction, alors appelez le service pour confirmer."
          ],
          steps: ["Ouvrez calgold.ca.gov.", "Choisissez votre ville ou votre comté.", "Choisissez votre type d'entreprise (ou \"General Business Information\").", "Notez chaque permis et le service qui le délivre.", "Passez voir ou appelez chaque service pour confirmer les frais et la façon de faire la demande."],
          words: [["Licence d'entreprise", "l'autorisation d'une ville ou d'un comté d'exercer une activité sur son territoire ; parfois appelée certificat de taxe professionnelle."], ["Zonage", "les règles locales sur le type d'activité autorisé à une adresse."], ["CalGold", "un site gratuit de la Californie qui liste les informations sur les permis selon le lieu et le type d'entreprise."]],
          slides: [
            { title: "Licence d'entreprise de la ville", bullets: ["La plupart des villes en exigent une, même à domicile", "Les frais sont fixés par chaque ville ou comté", "Voyez le site de votre ville ou appelez la mairie"] },
            { title: "Permis particuliers", bullets: ["Alimentation : permis sanitaire du comté", "Boulangerie à domicile : règles \"cottage food\" du comté", "Zonage, inspection incendie et permis d'enseigne"] },
            { title: "Utilisez CalGold", bullets: ["calgold.ca.gov : choisissez ville et type d'entreprise", "Il liste les services ; il ne délivre pas de permis", "Appelez chaque service pour confirmer les frais"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Lancez CalGold pour votre ville et votre type d'entreprise. Ajoutez à votre plan chaque permis qu'il liste, avec le site du service. Pour chacun, écrivez les frais ou \"à vérifier sur\" avec l'endroit.",
          youCanNow: "trouver les permis de la ville et du comté dont votre entreprise a besoin et le service qui délivre chacun.",
          quickCheck: [
            { objective: "O4", q: "À quoi sert CalGold ?", options: ["À délivrer tous les permis dont vous avez besoin", "À percevoir vos impôts", "À créer votre LLC", "À lister les permis et les organismes pour votre ville et votre type d'entreprise"], answer: 3, why: "CalGold liste les permis et les organismes, mais ne les délivre pas." },
            { objective: "O4", q: "CalGold liste un permis pour votre food truck. Que faites-vous ensuite ?", options: ["Considérer que vous l'avez déjà", "Contacter l'organisme indiqué pour confirmer les frais et faire la demande", "Demander à l'IA de faire la demande pour vous", "Attendre la visite d'un inspecteur"], answer: 1, why: "CalGold ne délivre pas de permis, donc vous contactez chaque organisme." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Les coûts annuels : l'impôt de 800 $, les déclarations et la paie",
          minutes: 6,
          goal: "Lister les coûts et les échéances annuels de l'État liés à votre forme d'entreprise.",
          text: [
            "LLC : le Franchise Tax Board (FTB) dit que toute LLC qui exerce ou qui est créée en Californie doit payer un impôt annuel de 800 $, chaque année, jusqu'à la dissolution de la LLC, même si elle n'a aucune activité. Le premier paiement est dû au plus tard le 15e jour du 4e mois après le dépôt auprès du Secretary of State. Les LLC qui gagnent plus de 250 000 $ paient aussi une redevance LLC. Une exemption de la première année qui existait de 2021 à 2023 ne s'applique plus.",
            "Sociétés par actions : le FTB dit que les sociétés par actions paient un impôt minimum (franchise tax) de 800 $, mais que les sociétés nouvellement créées n'ont pas à payer ce minimum pour leur première année fiscale. Elles peuvent quand même devoir un impôt sur leurs bénéfices et doivent verser des acomptes.",
            "Statement of Information (déclaration d'informations) : les LLC et les sociétés par actions en déposent une auprès du Secretary of State. Celle d'une LLC (LLC-12) coûte 20 $, est due dans les 90 jours suivant la création, puis tous les deux ans. Celle d'une société par actions (SI-550) coûte 25 $. L'oublier peut entraîner des pénalités.",
            "Embaucher : inscrivez-vous auprès de l'Employment Development Department (EDD) dans les 15 jours après avoir versé plus de 100 $ de salaires dans un trimestre. Les règles de paie sont détaillées, alors beaucoup de patrons passent par un service de paie ou un professionnel de la fiscalité."
          ],
          words: [["Franchise Tax Board (FTB)", "l'administration fiscale de l'État de Californie pour l'impôt sur le revenu et la franchise tax."], ["Impôt annuel", "l'impôt de 800 $ que toute LLC californienne paie chaque année."], ["Statement of Information", "un court formulaire que les LLC et les sociétés par actions déposent auprès du Secretary of State pour tenir leurs informations à jour."], ["EDD", "Employment Development Department : le service de l'État pour les cotisations sur les salaires et les employeurs."]],
          slides: [
            { title: "LLC : 800 $ chaque année", bullets: ["Dû le 15e jour du 4e mois après la création", "Dû même sans ventes, jusqu'à la dissolution", "Plus de 250 000 $ de revenus : redevance LLC en plus"] },
            { title: "Société par actions : 800 $ minimum", bullets: ["Impôt minimum (franchise tax) : 800 $", "Pas exigé la première année fiscale", "Des acomptes peuvent quand même être dus"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12) : 20 $, sous 90 jours, puis tous les 2 ans", "Société par actions (SI-550) : 25 $", "L'oublier peut entraîner des pénalités"] },
            { title: "Embaucher", bullets: ["Inscription à l'EDD sous 15 jours", "Après plus de 100 $ de salaires versés dans un trimestre", "Pensez à un service de paie ou à un fiscaliste"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Ajoutez à votre plan les lignes annuelles qui correspondent à votre forme d'entreprise : l'impôt de 800 $ et son échéance, le Statement of Information et ses frais, et l'inscription à l'EDD si vous allez embaucher. Ouvrez chaque page officielle et vérifiez le montant avant de l'écrire.",
          youCanNow: "lister les coûts et échéances annuels de l'État pour votre forme d'entreprise et dire quel service perçoit chacun.",
          quickCheck: [
            { objective: "O5", q: "Après la première fois, à quelle fréquence une LLC dépose-t-elle un Statement of Information ?", options: ["Chaque mois", "Tous les cinq ans", "Une seule fois", "Tous les deux ans"], answer: 3, why: "Après la première fois, une LLC dépose un Statement of Information tous les deux ans." },
            { objective: "O5", q: "Votre LLC n'a rien gagné cette année. À quoi devez-vous vous préparer ?", options: ["À rien, puisqu'il n'y a pas eu d'activité", "Annuler le budget prévu pour les impôts", "L'impôt annuel de 800 $ reste dû tant que la LLC n'est pas dissoute", "Seulement un impôt fédéral"], answer: 2, why: "Une LLC doit l'impôt annuel de 800 $ tant qu'elle n'est pas dissoute, même sans activité." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tout rassembler : votre plan de création et votre budget",
          minutes: 5,
          goal: "Construire un plan de création d'une page avec les étapes dans l'ordre, les services, les coûts et les échéances.",
          text: [
            "Mettez maintenant tout sur une page. L'ordre compte : choisissez une forme d'entreprise, créez la LLC ou la société par actions (s'il y a lieu), obtenez l'EIN, déposez le FBN (si besoin), obtenez le permis de vendeur (si besoin), puis les permis de la ville et du comté. Beaucoup de permis demandent votre EIN ou votre numéro d'entité, alors faites ces étapes d'abord.",
            "Additionnez les coûts que vous connaissez, et marquez ceux que vous devez encore chercher. Exemple pour un food truck en LLC : LLC-1 70 $, Statement of Information 20 $, EIN gratuit, permis de vendeur gratuit (dépôt possible), impôt annuel de 800 $, plus le permis sanitaire du comté, la licence de la ville et les frais de FBN, que vous cherchez localement.",
            "Un assistant d'IA peut vous aider à mettre en forme le tableau et à faire une liste de contrôle, mais il peut se tromper sur les frais et les dates. Prenez toujours le montant sur la page officielle. Ne tapez pas votre numéro de sécurité sociale, vos coordonnées bancaires ou vos mots de passe dans un outil d'IA. Une fois fini, montrez le plan à un conseiller gratuit d'un SBDC ou à un professionnel de la fiscalité."
          ],
          steps: ["Listez les étapes dans l'ordre.", "Ajoutez le service et le site officiel de chacune.", "Ajoutez le coût pris sur la page officielle, ou \"à vérifier sur ...\".", "Ajoutez l'échéance de chaque élément annuel.", "Faites le total des coûts connus et montrez le plan à un conseiller."],
          words: [["Coûts de démarrage", "l'argent dépensé une seule fois pour ouvrir l'entreprise."], ["Coûts récurrents", "les coûts payés de nouveau chaque année, comme l'impôt de 800 $."]],
          slides: [
            { title: "L'ordre", bullets: ["1. Forme  2. Créer la LLC ou la société par actions", "3. EIN  4. FBN si besoin  5. Permis de vendeur", "6. Permis de la ville et du comté"] },
            { title: "Exemple : food truck en LLC", bullets: ["LLC-1 70 $ ; Statement of Information 20 $", "EIN gratuit ; permis de vendeur gratuit", "Impôt annuel de 800 $ ; frais locaux : à chercher"] },
            { title: "Utiliser l'IA sans danger ici", bullets: ["L'IA peut mettre en forme le tableau et la liste", "Prenez chaque frais et date sur la page officielle", "Ne tapez jamais votre SSN, vos données bancaires ou mots de passe"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Tâche finale : terminez votre plan d'une page avec cinq colonnes : Étape, Service (site web), Coût, Échéance, Fait. Remplissez chaque ligne à partir de ce cours, faites le total des coûts connus, et marquez chaque frais local que vous devez encore chercher.",
          youCanNow: "construire et utiliser un plan de création complet pour lancer une entreprise en Californie.",
          quickCheck: [
            { objective: "O6", q: "Dans quel ordre faites-vous en général ces étapes ?", options: ["Choisir une forme, créer l'entreprise, obtenir l'EIN, puis les permis locaux", "Les permis locaux, puis choisir une forme", "Obtenir l'EIN avant de choisir un nom ou une forme, puis créer l'entreprise en dernier", "N'importe quel ordre revient au même"], answer: 0, why: "Chaque étape dépend de la précédente, en commençant par la forme d'entreprise." },
            { objective: "O6", q: "Vous ne connaissez pas encore les frais de licence commerciale de votre ville. Qu'écrivez-vous dans votre plan ?", options: ["Une supposition", "Zéro", "« À chercher sur » et le site officiel de la ville", "Les frais d'une autre ville"], answer: 2, why: "Les frais locaux varient, donc vous notez où les chercher au lieu de deviner." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Permis locaux, coûts annuels et votre plan",
        questions: [
          { objective: "O4", q: "À quoi sert CalGold ?", options: ["Il liste les informations sur les permis et les services pour votre ville et votre type d'entreprise", "Il délivre votre licence d'entreprise", "Il perçoit l'impôt de 800 $", "Il vous donne un EIN"], answer: 0, why: "CalGold trouve les informations sur les permis ; il ne délivre pas de permis." },
          { objective: "O4", q: "Qui fixe les frais de la licence d'entreprise d'une ville ?", options: ["L'IRS", "Le Secretary of State", "Le CDTFA", "Chaque ville ou comté"], answer: 3, why: "Les frais des licences locales sont fixés par chaque ville ou comté." },
          { objective: "O5", q: "Une LLC n'a eu aucune activité cette année. Doit-elle l'impôt annuel de 800 $ ?", options: ["Non, seulement si elle a gagné de l'argent", "Oui, jusqu'à la dissolution de la LLC", "Seulement la première année", "Seulement si elle a des employés"], answer: 1, why: "Le FTB dit que l'impôt annuel est dû même si la LLC n'a pas d'activité, jusqu'à sa dissolution." },
          { objective: "O5", q: "Quand le premier Statement of Information d'une LLC est-il dû ?", options: ["Dans les 90 jours suivant la création", "Chaque mois", "Seulement à la fermeture", "Dans les 10 ans"], answer: 0, why: "Le Secretary of State dit qu'il est dû dans les 90 jours suivant l'enregistrement, puis tous les deux ans." },
          { objective: "O5", q: "Vous allez embaucher votre premier employé. Auprès de quel service vous inscrivez-vous ?", options: ["CalGold", "Le greffe du comté", "L'EDD", "Le DMV"], answer: 2, why: "Les employeurs s'inscrivent à l'EDD dans les 15 jours après avoir versé plus de 100 $ de salaires dans un trimestre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer une petite entreprise en Californie, coûts compris",
    questions: [
      { objective: "O1", q: "Quelle forme d'entreprise ne demande aucun dépôt de création auprès du Secretary of State de Californie ?", options: ["LLC", "Entreprise individuelle", "Société par actions", "Association à but non lucratif"], answer: 1, why: "Les entrepreneurs individuels ne déposent pas de documents de création auprès du Secretary of State." },
      { objective: "O1", q: "Quelle est une raison principale de créer une LLC ?", options: ["C'est toujours gratuit", "Elle remplace tous les permis", "Elle supprime tous les impôts", "Elle peut aider à séparer vos biens personnels des dettes de l'entreprise"], answer: 3, why: "Une LLC est une personne juridique séparée qui peut aider à protéger le propriétaire." },
      { objective: "O1", q: "Les frais du Secretary of State pour les statuts d'une société par actions ordinaire (ARTS-GS) sont de :", options: ["20 $", "70 $", "100 $", "800 $"], answer: 2, why: "Le Secretary of State indique 100 $ pour l'ARTS-GS." },
      { objective: "O1", q: "Où déposer en ligne les documents de création d'une LLC ?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online est le site de dépôt du Secretary of State." },
      { objective: "O2", q: "Qu'est-ce qu'un DBA ?", options: ["Un formulaire fiscal", "Un type de permis pour l'alimentation", "Le nom qu'une entreprise utilise auprès du public, s'il n'est pas le nom légal du propriétaire", "Un compte bancaire"], answer: 2, why: "DBA veut dire \"doing business as\" ; il se dépose comme nom commercial fictif." },
      { objective: "O2", q: "Après avoir déposé un FBN, la plupart des comtés de Californie exigent aussi de :", options: ["Le publier dans un journal local pendant quatre semaines", "Payer l'IRS", "Obtenir un permis de vendeur", "Créer une LLC"], answer: 0, why: "Les comtés exigent que le FBN soit publié une fois par semaine pendant quatre semaines." },
      { objective: "O2", q: "Où chercher les frais de FBN de votre comté ?", options: ["Auprès d'un assistant d'IA", "À l'IRS", "Sur le site du greffe de votre comté", "Dans une publication sur les réseaux sociaux"], answer: 2, why: "Chaque comté fixe ses propres frais de FBN." },
      { objective: "O3", q: "Combien l'IRS fait-il payer un EIN ?", options: ["Rien", "70 $", "50 $", "800 $"], answer: 0, why: "L'IRS dit que vous n'avez jamais à payer de frais pour un EIN." },
      { objective: "O3", q: "Quel organisme délivre les permis de vendeur en Californie ?", options: ["Le FTB", "Le CDTFA", "L'EDD", "Le greffe du comté"], answer: 1, why: "Le California Department of Tax and Fee Administration délivre les permis de vendeur." },
      { objective: "O3", q: "Que peut demander le CDTFA quand vous obtenez un permis de vendeur, même s'il est gratuit ?", options: ["Un dépôt de société par actions", "Le mot de passe de votre banque", "Une annonce dans un journal", "Un dépôt de garantie"], answer: 3, why: "Le CDTFA dit qu'il peut exiger un dépôt de garantie." },
      { objective: "O3", q: "Un stand de citrouilles saisonnier vend au même endroit pendant six semaines. Sur quoi le propriétaire doit-il interroger le CDTFA ?", options: ["Un permis de vendeur temporaire", "Un EIN", "Un FBN", "Un Statement of Information"], answer: 0, why: "Des ventes au même endroit pendant 90 jours ou moins peuvent demander un permis de vendeur temporaire." },
      { objective: "O4", q: "Un food truck a en général besoin d'un permis sanitaire délivré par :", options: ["L'IRS", "L'EDD", "Le Secretary of State", "Le service de santé environnementale du comté"], answer: 3, why: "Les entreprises alimentaires obtiennent leur permis sanitaire auprès de la santé environnementale du comté." },
      { objective: "O6", q: "CalGold indique qu'il ne délivre pas de permis. Donc, après l'avoir utilisé, vous devez :", options: ["Ignorer la liste", "Payer CalGold", "Contacter chaque service listé pour confirmer les frais et faire la demande", "Demander à une IA de faire la demande pour vous"], answer: 2, why: "CalGold liste les services ; vous faites la demande auprès de chacun." },
      { objective: "O4", q: "Un service de soutien scolaire à domicile a probablement quand même besoin :", options: ["D'un permis de vendeur", "D'une licence d'entreprise ou d'un certificat de taxe de la ville", "D'un permis sanitaire", "D'une licence d'alcool"], answer: 1, why: "La plupart des villes exigent une licence d'entreprise, même pour une activité à domicile." },
      { objective: "O5", q: "Combien coûte l'impôt annuel d'une LLC en Californie ?", options: ["20 $", "70 $", "250 $", "800 $"], answer: 3, why: "Le FTB dit que toute LLC doit payer un impôt annuel de 800 $." },
      { objective: "O5", q: "Quand le premier impôt annuel de 800 $ d'une LLC est-il dû ?", options: ["Seulement quand elle gagne 250 000 $", "Jamais la première année", "Le 15e jour du 4e mois après le dépôt auprès du Secretary of State", "Le 31 décembre"], answer: 2, why: "Le FTB indique le 15e jour du 4e mois après le dépôt." },
      { objective: "O5", q: "Une société par actions nouvelle, pour sa première année fiscale :", options: ["N'a pas à payer l'impôt minimum de 800 $", "Paie 1 600 $", "Ne paie jamais d'impôts", "Doit payer la redevance LLC"], answer: 0, why: "Le FTB dit que les sociétés nouvellement créées n'ont pas à payer le minimum leur première année fiscale." },
      { objective: "O5", q: "À quelle fréquence une LLC dépose-t-elle un Statement of Information après le premier ?", options: ["Chaque mois", "Tous les deux ans", "Tous les dix ans", "Jamais"], answer: 1, why: "Le Secretary of State dit tous les deux ans après le premier." },
      { objective: "O6", q: "Dans quel ordre faire en général ces étapes ?", options: ["Licence de la ville, puis créer la LLC, puis choisir la forme", "Choisir la forme, la créer, obtenir l'EIN, puis les permis locaux", "Permis de vendeur, puis EIN, puis forme", "N'importe quel ordre"], answer: 1, why: "Beaucoup de permis demandent votre EIN et votre numéro d'entité, alors créez l'entreprise et obtenez l'EIN d'abord." },
      { objective: "O6", q: "Un assistant d'IA vous donne les frais de FBN de votre comté. Que faites-vous ?", options: ["Les vérifier d'abord sur la page officielle du greffe de votre comté", "Les mettre dans le plan sans vérifier", "Payer l'outil d'IA", "Taper votre SSN pour obtenir une meilleure réponse"], answer: 0, why: "L'IA peut se tromper ; les frais viennent de la page officielle." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      7,
      8,
      11,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Forme et nom",
        objective: "O1",
        notYet: "Aucune forme choisie, ou l'enregistrement du nom manque.",
        meets: "Une forme avec une raison, plus le bon enregistrement du nom et son bureau.",
        exceeds: "Il note aussi la règle de publication du FBN si elle s'applique."
      },
      {
        name: "EIN et permis de vendeur",
        objective: "O3",
        notYet: "Absents, ou un service payant est utilisé pour l'EIN.",
        meets: "L'EIN gratuit sur irs.gov, et une ligne pour le permis de vendeur ou la raison pour laquelle il n'est pas nécessaire.",
        exceeds: "Il note un dépôt de garantie possible auprès de la CDTFA."
      },
      {
        name: "Permis locaux",
        objective: "O4",
        notYet: "Pas de licence de la ville ni de permis CalGold listés.",
        meets: "La licence commerciale de la ville et chaque permis CalGold, chacun avec le site web de l'organisme.",
        exceeds: "Chaque frais local est rempli à partir de la page officielle."
      },
      {
        name: "Coûts et échéances annuels",
        objective: "O5",
        notYet: "L'impôt de 800 $ ou le Statement of Information manque pour une LLC ou une corporation.",
        meets: "Des lignes annuelles qui correspondent à la forme d'entreprise, avec les échéances.",
        exceeds: "Il comprend l'inscription à l'EDD en cas d'embauche, et chaque chiffre est vérifié sur la page officielle."
      },
      {
        name: "Plan dans l'ordre avec les coûts",
        objective: "O6",
        notYet: "Des étapes dans le désordre, ou des coûts devinés.",
        meets: "Les cinq colonnes remplies dans l'ordre, avec les coûts connus additionnés et les frais inconnus marqués « à chercher sur ».",
        exceeds: "Chaque site officiel est listé et la colonne « Fait » est utilisée."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui font au moins un enregistrement ou obtiennent au moins un permis dans les 60 jours (enquête de suivi)",
      "Les apprenants qui ouvrent leur entreprise dans les règles dans les 6 mois",
      "Les apprenants qui rencontrent un mentor SCORE ou un conseiller SBDC dans les 60 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Du papier, ou un tableur gratuit, pour le plan de création en cinq colonnes",
      "Les pages officielles citées dans chaque leçon : bizfile Online, irs.gov, CDTFA, CalGold, FTB et EDD",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Avant chaque séance, ouvrez les pages officielles et vérifiez que les frais de l'État cités dans le cours sont toujours à jour.",
      "Cherchez les pages de votre greffier de comté et de la licence commerciale de votre ville, pour montrer aux apprenants les vrais sites locaux.",
      "Ne demandez jamais aux apprenants de taper un numéro de sécurité sociale sur un écran partagé ; la demande d'EIN se fait seulement sur irs.gov, en privé.",
      "Ce cours ne donne pas de conseil juridique ou fiscal ; invitez un mentor SCORE, un conseiller SBDC ou un professionnel de la fiscalité pour les questions sur la situation d'un apprenant.",
      "Notez le plan de création avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
