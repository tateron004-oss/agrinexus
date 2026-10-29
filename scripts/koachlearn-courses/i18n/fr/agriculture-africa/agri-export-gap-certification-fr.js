"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-export-gap-certification.js). See scripts/koachlearn-courses/README.md, "Translations".

const GGAP_IFA = { name: "GLOBALG.A.P. : Assurance intégrée des exploitations (IFA) pour les fruits et légumes (thèmes, option groupement de producteurs, éléments de coût, étapes vers la certification)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P. : Supply Chain Portal (vérifier un certificat avec le numéro GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "Commission européenne : base de données de l'UE sur les pesticides (limites maximales de résidus par aliment et par pesticide)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/OMS) : normes alimentaires internationales, y compris les limites de résidus de pesticides", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (données KNBS, rapport de l'AFA) : les recettes d'exportation de légumes du Kenya baissent à cause des règles de l'UE sur les pesticides ; les interceptions pour LMR passent de 25 (2023) à 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "Boîte à outils de la FAO pour l'homologation des pesticides : registres nationaux des pesticides en Afrique", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Autorité de l'agriculture et de l'alimentation du Kenya (AFA), Direction des cultures horticoles : licences d'exportation et enregistrement (vérifiez les règles actuelles)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kenya) : services phytosanitaires et certification des exportations", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Conseil nigérian de promotion des exportations (NEPC) : enregistrement en ligne des exportateurs", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Autorité de promotion des exportations du Ghana (GEPA) : s'enregistrer comme exportateur", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-fr",
  lang: "fr",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Vendre aux supermarchés, aux transformateurs et aux acheteurs à l'export : normes et certification",
  skills: "Lire les exigences d'un acheteur, Appliquer les bonnes pratiques agricoles, Tenir des registres de traçabilité, Peser le pour et le contre d'une certification, Respecter les limites de résidus et les règles d'exportation, Faire une offre d'approvisionnement",
  outcome: "vérifier si votre ferme ou votre groupement est prêt à fournir un supermarché, un transformateur ou un acheteur à l'export, combler les principaux écarts dans les pratiques, les registres et la certification, et faire une offre d'approvisionnement écrite que vous pouvez tenir.",
  about: [
    "Les supermarchés, les transformateurs et les acheteurs à l'export peuvent acheter bien plus qu'un marché local, et paient souvent plus pour une qualité régulière. Mais ils demandent des choses que la plupart des petites fermes ne font pas encore : un volume régulier, la même qualité à chaque fois, des registres qui suivent chaque caisse, la sécurité sanitaire des aliments et parfois un certificat comme GLOBALG.A.P. Ce cours s'adresse aux agriculteurs commerciaux en croissance, aux groupements de producteurs, aux jeunes agripreneurs et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, au Sénégal et partout en Afrique.",
    "Vous apprendrez ce que veulent les gros acheteurs, les bonnes pratiques agricoles qui sont derrière, comment tenir des registres qui remontent jusqu'à la parcelle, ce que coûte et apporte une certification, pourquoi des envois à l'export sont refusés pour des résidus de pesticides, quels organismes nationaux contrôlent les exportations, et comment rencontrer un acheteur, négocier un contrat d'approvisionnement et juger un système d'agriculture contractuelle.",
    "Il s'appuie sur le cours Coopératives agricoles et accès au marché, qui traite de la vente en groupe et de la lecture d'un contrat. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Les règles, les frais et les limites changent, donc chaque leçon vous dit où vérifier. Les montants sont donnés à titre d'exemple."
  ],
  finalTask: "Faites une liste de préparation aux acheteurs pour votre ferme ou votre groupement, pour une culture et un type d'acheteur (supermarché, transformateur ou exportateur), en marquant ce que vous respectez déjà et ce que vous devez corriger ; puis rédigez une offre d'approvisionnement d'une page pour cet acheteur : culture et calibre, volume et calendrier, comment vous gardez les produits sains et traçables, toute certification, base de prix, et les conditions que vous voulez dans le contrat.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Agriculteurs commerciaux en croissance, groupements de producteurs et coopératives, gérants d'exploitation, jeunes agripreneurs et agents de vulgarisation au Kenya, au Nigeria, au Ghana, en Afrique de l'Ouest francophone et partout en Afrique, qui vendent des produits horticoles (haricots verts, avocat, mangue, ananas, tomate) ou des cultures vivrières (manioc, maïs, sorgho, riz) à de plus gros acheteurs.",
    startingPoint: "Savent produire une bonne récolte et la vendre sur les marchés locaux ou par un groupement. Certains tiennent des registres de base. Peu savent ce qu'un supermarché ou un exportateur contrôle, comment fonctionne la certification ou ce qu'est une limite de résidus.",
    gap: "Les gros acheteurs écartent les agriculteurs qui ne peuvent pas montrer un volume et une qualité réguliers, des registres traçables et un usage sûr des pesticides. Le régulateur du Kenya lui-même a lié une forte baisse des recettes d'exportation de légumes surtout aux interceptions de l'UE pour résidus de pesticides. Les agriculteurs doivent voir leurs écarts, corriger leurs pratiques et leurs registres, peser la certification et faire une offre qu'ils peuvent tenir.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants parlent la langue du cours comme deuxième langue",
      "Appareils : un téléphone simple ou un smartphone ; des cahiers de registres en papier",
      "Argent : la certification et les analyses coûtent de l'argent ; les options de groupe comptent pour les petites fermes",
      "Règles : les licences d'exportation, les limites de résidus et les règles de certification changent et varient selon le pays et le marché ; les apprenants vérifient auprès de sources officielles",
      "Sécurité : uniquement des pesticides homologués, utilisés comme l'indique l'étiquette, avec un équipement de protection ; aucune dose chiffrée dans le cours"
    ],
    prerequisites: "Utile : Coopératives agricoles et accès au marché, et Registres agricoles et bases de la gestion (Agrobusiness et gestion d'exploitation). Savoir lire et additionner."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir des exigences d'un supermarché, d'un transformateur ou d'un acheteur à l'export", action: "lister ce que demande l'acheteur et le comparer avec ce que votre ferme ou votre groupement fournit aujourd'hui", standard: "en couvrant le volume, la régularité, le calibre, la traçabilité et la sécurité sanitaire, avec chaque écart marqué" },
    { id: "O2", condition: "Pour une culture de votre ferme", action: "écrire les bonnes pratiques agricoles que vous suivrez", standard: "en couvrant les pesticides homologués utilisés comme l'indique l'étiquette, l'équipement de protection, le délai avant récolte de l'étiquette, l'eau propre, l'hygiène à la récolte et la sécurité des travailleurs" },
    { id: "O3", condition: "Face à une certification comme GLOBALG.A.P.", action: "comparer ses coûts et ses avantages pour votre ferme ou votre groupement et nommer la voie que vous choisiriez", standard: "en nommant les trois éléments de coût, les étapes jusqu'à un audit et si une option de groupe convient" },
    { id: "O4", condition: "Pour une saison d'une culture", action: "mettre en place des registres de traçabilité qui relient chaque lot à sa parcelle, à ses intrants et à sa date de récolte", standard: "pour que n'importe quelle caisse puisse être retracée jusqu'à la parcelle et à chaque traitement en quelques minutes" },
    { id: "O5", condition: "Face à un marché d'exportation visé", action: "vérifier les limites de résidus et les organismes nationaux d'exportation qui s'appliquent", standard: "en nommant où trouver les limites (par exemple la base de données de l'UE sur les pesticides ou le Codex) et les organismes d'exportation et de protection des végétaux de votre pays" },
    { id: "O6", condition: "Face à une rencontre avec un acheteur ou une offre d'agriculture contractuelle", action: "rédiger une offre d'approvisionnement et les conditions de contrat dont vous avez besoin", standard: "en indiquant le calibre, le volume, le calendrier, la base de prix, les règles de refus, les conditions de paiement et ce qui se passe si l'une des parties ne tient pas ses engagements" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ce que veulent les gros acheteurs, et préparer votre ferme",
      lessons: [
        {
          title: "Ce que veulent les supermarchés, les transformateurs et les exportateurs",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister les exigences d'un gros acheteur et marquer où votre ferme ne suit pas encore.",
          text: [
            "Les gros acheteurs vendent à des clients qui attendent le même produit, sain et en rayon, chaque semaine. Ils vous demandent donc cinq choses : le volume (assez pour remplir leurs commandes), la régularité (livrer semaine après semaine, pas seulement à la récolte), le calibre (taille, couleur, maturité et défauts selon leur cahier des charges), la traçabilité (pouvoir retrouver la ferme et la parcelle d'où vient une caisse) et la sécurité sanitaire (pas de résidus dangereux, de microbes ni de saleté).",
            "Chaque acheteur est différent. Un supermarché à Nairobi ou à Accra peut vouloir des tomates d'une taille et dans une caisse précises, livrées deux fois par semaine. Un transformateur au Nigeria qui achète du manioc pour l'amidon ou des tomates pour le concentré veut de gros volumes d'une qualité fixe, et tient parfois moins à l'aspect. Un exportateur qui envoie des haricots verts du Kenya ou des mangues du Sénégal vers l'Europe doit respecter les règles du pays importateur et demande souvent un certificat.",
            "Demandez à l'acheteur son cahier des charges par écrit. Puis comparez-le, point par point, avec ce que vous fournissez aujourd'hui. Les écarts trouvés sont votre plan de travail. Beaucoup de petites fermes comblent les écarts de volume et de régularité en travaillant en groupement et en échelonnant les dates de semis."
          ],
          steps: ["Demandez à un acheteur son cahier des charges écrit et la taille de ses commandes.", "Listez ses besoins sous volume, régularité, calibre, traçabilité et sécurité sanitaire.", "À côté de chaque point, écrivez ce que votre ferme ou votre groupement fournit aujourd'hui.", "Marquez chaque écart et comment le combler (par exemple en groupement ou par des semis échelonnés)."],
          words: [["Cahier des charges", "la description écrite par l'acheteur du produit qu'il veut : taille, couleur, maturité, emballage et défauts tolérés."], ["Traçabilité", "pouvoir suivre un produit jusqu'à la ferme, la parcelle et les intrants d'où il vient."], ["Régularité", "fournir la même qualité et la même quantité, à temps, encore et encore."]],
          slides: [
            { title: "Cinq choses que veulent les gros acheteurs", bullets: ["Volume et régularité", "Calibre selon leur cahier des charges", "Traçabilité et sécurité sanitaire"] },
            { title: "Chaque acheteur est différent", bullets: ["Supermarché : taille et caisse précises, deux fois par semaine", "Transformateur : gros volume, qualité fixe", "Exportateur : règles du pays importateur, souvent un certificat"] },
            { title: "Trouvez vos écarts", bullets: ["Obtenez le cahier des charges par écrit", "Comparez point par point avec ce que vous fournissez", "Écarts = votre plan de travail ; un groupement comble le volume"] }
          ],
          tryIt: "Choisissez un gros acheteur près de chez vous (un supermarché, un transformateur ou un exportateur). Écrivez ses besoins sous les cinq titres, ce que vous fournissez aujourd'hui à côté de chacun, et marquez les écarts. C'est le début de votre liste de préparation aux acheteurs.",
          youCanNow: "lister ce que veut un gros acheteur et marquer où votre ferme ou votre groupement ne suit pas encore.",
          quickCheck: [
            { objective: "O1", q: "Un supermarché veut des tomates chaque semaine toute l'année. Vous récoltez une fois par saison. Quel besoin manquez-vous ?", options: ["Le calibre", "La régularité de l'approvisionnement", "La traçabilité", "La sécurité sanitaire"], answer: 1, why: "Livrer chaque semaine, et pas seulement à la récolte, c'est la régularité." },
            { objective: "O1", q: "Quelle est la meilleure façon de savoir exactement ce que veut un acheteur ?", options: ["Deviner d'après ce qu'il y a dans son magasin", "Demander à un voisin qui lui a vendu une fois", "Envoyer des produits et voir s'il les accepte", "Lui demander son cahier des charges par écrit"], answer: 3, why: "Un cahier des charges écrit montre la taille, la qualité et l'emballage exacts que l'acheteur acceptera." }
          ]
        },
        {
          title: "Les bonnes pratiques agricoles sur votre ferme",
          objectives: ["O2"],
          minutes: 6,
          goal: "Écrire les bonnes pratiques agricoles que vous suivrez pour une culture.",
          text: [
            "Les bonnes pratiques agricoles (BPA, en anglais GAP) sont les habitudes de la ferme qui gardent les produits sains, protègent les travailleurs et l'environnement, et rendent la qualité régulière. Les systèmes de certification et les acheteurs les contrôlent. Vous pouvez en commencer la plupart avec peu d'argent.",
            "Pesticides : utilisez seulement des produits homologués par votre organisme national (par exemple le Pest Control Products Board au Kenya, la NAFDAC au Nigeria ou l'EPA au Ghana), vérifiez sa liste à jour, et utilisez-les exactement comme l'indique l'étiquette. Portez l'équipement de protection demandé par l'étiquette, rangez les produits chimiques sous clé et loin des aliments, et respectez le délai avant récolte de l'étiquette, c'est-à-dire le temps d'attente entre le dernier traitement et la récolte. Traiter trop près de la récolte est une cause principale de refus pour résidus. Pratiquez la lutte intégrée contre les ravageurs pour traiter moins.",
            "Aussi : de l'eau propre pour les traitements, le lavage et l'irrigation ; des caisses de récolte propres posées hors du sol ; des toilettes et le lavage des mains pour les travailleurs ; pas d'animaux ni de fumier près des produits juste avant la récolte ; premiers secours et formation pour les travailleurs ; et élimination sûre des emballages vides comme l'indiquent l'étiquette ou votre organisme national. Écrivez tout cela comme les règles BPA de votre ferme."
          ],
          steps: ["Vérifiez que chaque pesticide utilisé figure au registre de votre organisme national.", "Notez à côté de chaque produit l'équipement de protection et le délai avant récolte de l'étiquette.", "Mettez en place le lavage des mains, des toilettes et des caisses propres pour la récolte.", "Écrivez vos règles BPA et formez chaque travailleur."],
          words: [["Bonnes pratiques agricoles (BPA)", "les habitudes de la ferme qui gardent les produits sains et protègent les travailleurs et l'environnement."], ["Délai avant récolte", "le temps d'attente indiqué sur l'étiquette entre le dernier traitement et la récolte."], ["Pesticide homologué", "un produit que votre organisme national a autorisé pour cette culture et cet usage."], ["Lutte intégrée contre les ravageurs", "combattre les ravageurs avec plusieurs méthodes pour ne traiter qu'en cas de besoin."]],
          slides: [
            { title: "Ce que couvrent les BPA", bullets: ["Des produits sains", "Sécurité et bien-être des travailleurs", "Environnement et qualité régulière"] },
            { title: "Les pesticides, de la bonne façon", bullets: ["Produits homologués seulement : listes PCPB, NAFDAC, EPA du Ghana", "Exactement comme l'indique l'étiquette, avec protection", "Respectez le délai avant récolte de l'étiquette"] },
            { title: "Une récolte propre", bullets: ["Eau propre ; caisses hors du sol", "Toilettes et lavage des mains pour les travailleurs", "Pas d'animaux ni de fumier près des produits à la récolte"] },
            { title: "Écrivez et formez", bullets: ["Les règles BPA de votre ferme sur une page", "Formez chaque travailleur", "Produits chimiques sous clé, loin des aliments"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Écrivez sur une page les règles BPA de votre ferme pour une culture : les pesticides homologués que vous utilisez avec l'équipement de protection et le délai avant récolte de l'étiquette, l'hygiène de l'eau et de la récolte, et la sécurité des travailleurs. Ajoutez les écarts à votre liste de préparation aux acheteurs.",
          youCanNow: "écrire des règles de bonnes pratiques agricoles pour une culture, y compris l'usage sûr de pesticides homologués.",
          quickCheck: [
            { objective: "O2", q: "Où trouvez-vous le temps d'attente entre le dernier traitement et la récolte ?", options: ["Sur l'étiquette du produit (le délai avant récolte)", "Auprès du chauffeur de l'acheteur", "Dans la mémoire d'un voisin", "Cela ne compte pas pour l'export"], answer: 0, why: "L'étiquette donne le délai avant récolte ; le respecter garde les résidus sous les limites." },
            { objective: "O2", q: "Un commerçant vous propose un pesticide bon marché sans numéro d'homologation. Que faites-vous ?", options: ["Vous l'achetez s'il est bon marché", "Vous le mélangez avec un produit homologué", "Vous ne l'utilisez pas ; seulement des produits du registre national", "Vous en mettez la moitié"], answer: 2, why: "Les produits non homologués peuvent être faux ou interdits et causer des refus et des dégâts." }
          ]
        },
        {
          title: "Des registres qui retracent chaque caisse",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mettre en place des registres qui retracent une caisse jusqu'à sa parcelle, ses intrants et sa date de récolte.",
          text: [
            "Si un acheteur trouve un résidu ou un problème, il demandera : quelle ferme, quelle parcelle, quel traitement et quand ? Les registres de traçabilité répondent en quelques minutes. Sans eux, un acheteur peut laisser tomber tout le groupement.",
            "Donnez un code à chaque champ ou parcelle, par exemple KB-F2 pour la ferme de Kiambu, parcelle 2. Tenez un registre des traitements et des intrants pour chaque parcelle : date, nom du produit et numéro d'homologation, quantité, qui a traité, et délai avant récolte de l'étiquette. Tenez un registre de récolte : date, code de parcelle, caisses ou kilos, et un numéro de lot. Écrivez le numéro de lot sur chaque caisse ou bon de livraison.",
            "Gardez les registres dans un cahier ou un simple tableur sur le téléphone, et gardez les reçus des intrants. Les groupements tiennent un registre des membres et les registres de chaque membre. Le Kenya met en place la cartographie et l'enregistrement numériques des fermes d'export, alors vérifiez auprès de l'AFA ce qu'il faut pour votre culture."
          ],
          steps: ["Donnez à chaque champ ou parcelle un code court.", "Tenez un registre des traitements et des intrants par parcelle : date, produit, numéro d'homologation, quantité, qui a traité, délai avant récolte.", "Tenez un registre de récolte avec un numéro de lot pour chaque récolte.", "Écrivez le numéro de lot sur chaque caisse ou bon de livraison.", "Entraînez-vous : prenez une caisse et retracez-la en quelques minutes."],
          words: [["Numéro de lot", "un code pour une récolte d'une parcelle en un jour, écrit sur les caisses."], ["Registre des traitements", "une liste écrite de chaque pesticide utilisé : quand, lequel, combien et par qui."], ["Audit", "un contrôle par un acheteur ou un certificateur pour vérifier que vous faites ce que vous dites."]],
          slides: [
            { title: "Pourquoi retracer ?", bullets: ["L'acheteur trouve un problème : quelle parcelle, quel traitement, quand ?", "De bons registres répondent en quelques minutes", "Sans registres : tout le groupement peut être écarté"] },
            { title: "Trois registres", bullets: ["Codes de parcelle (par exemple KB-F2)", "Registre des traitements et des intrants par parcelle", "Registre de récolte avec numéro de lot"] },
            { title: "Que ça marche", bullets: ["Numéro de lot sur chaque caisse", "Cahier ou tableur sur le téléphone ; gardez les reçus", "Entraînez-vous à retracer une caisse"] }
          ],
          sources: [KE_AFA],
          tryIt: "Préparez les trois registres pour une culture : codes de parcelle, registre des traitements et des intrants, et registre de récolte avec numéros de lot. Remplissez une ligne réelle ou d'exercice dans chacun, puis retracez cette caisse jusqu'à la parcelle et au dernier traitement.",
          youCanNow: "tenir des registres de parcelles, de traitements et de récolte qui retracent n'importe quelle caisse jusqu'à sa parcelle et ses intrants.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui relie une caisse dans le rayon de l'acheteur à votre parcelle ?", options: ["La couleur de la caisse", "Le nom du chauffeur", "Le prix du marché", "Un numéro de lot écrit sur la caisse et dans votre registre de récolte"], answer: 3, why: "Un numéro de lot sur la caisse et dans vos registres la relie à la parcelle et à la date." },
            { objective: "O4", q: "Quelle information va dans un registre des traitements ?", options: ["Le téléphone de l'acheteur", "Date, produit, numéro d'homologation, quantité et qui a traité", "La météo du mois prochain", "Le prix de la récolte"], answer: 1, why: "Ces informations montrent ce qui a été traité et quand, ce que vérifient acheteurs et certificateurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce que veulent les gros acheteurs, et préparer votre ferme",
        questions: [
          { objective: "O1", q: "Laquelle N'EST PAS l'une des cinq choses que veulent en général les gros acheteurs ?", options: ["Le volume", "La traçabilité", "Un cadeau pour l'acheteur", "La sécurité sanitaire"], answer: 2, why: "Les acheteurs veulent le volume, la régularité, le calibre, la traçabilité et la sécurité sanitaire ; un cadeau n'est pas une exigence." },
          { objective: "O1", q: "Votre groupement ne peut remplir que la moitié de la commande hebdomadaire d'un acheteur. Qu'est-ce qui pourrait combler l'écart ?", options: ["Plus de membres et des semis échelonnés", "Envoyer des produits de moindre qualité", "Promettre plus que ce que vous avez", "Ignorer la taille de la commande"], answer: 0, why: "Plus de producteurs et des semis échelonnés augmentent le volume et gardent l'approvisionnement régulier." },
          { objective: "O2", q: "Quelle pratique fait partie des BPA ?", options: ["Ranger les pesticides à côté des aliments", "Traiter la veille de la récolte quoi que dise l'étiquette", "Laisser les chèvres brouter près des produits à la récolte", "Porter l'équipement de protection demandé par l'étiquette"], answer: 3, why: "Suivre l'étiquette, y compris l'équipement de protection, protège les travailleurs et les produits." },
          { objective: "O4", q: "Qu'est-ce qu'un numéro de lot ?", options: ["Le prix par caisse", "Un code pour une récolte d'une parcelle en un jour", "Le nombre de travailleurs", "La taille de la ferme"], answer: 1, why: "Un numéro de lot identifie une récolte pour pouvoir la retracer." },
          { objective: "O4", q: "Un acheteur signale un résidu dans une livraison. De bons registres vous permettent de :", options: ["Accuser l'acheteur", "Modifier les registres", "Remonter à la parcelle et au traitement, et corriger la cause", "Arrêter de vendre à tout le monde"], answer: 2, why: "La traçabilité montre où le problème a commencé, pour le corriger et garder l'acheteur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Certification, règles d'exportation et contrats d'approvisionnement",
      lessons: [
        {
          title: "GLOBALG.A.P. et la certification : coûts et avantages",
          objectives: ["O3"],
          minutes: 6,
          goal: "Comparer les coûts et les avantages de la certification pour votre ferme et choisir une voie.",
          text: [
            "La certification, c'est quand un organisme indépendant vérifie votre ferme selon une norme et vous donne un certificat si vous réussissez. GLOBALG.A.P. est la norme agricole la plus connue, demandée par beaucoup de supermarchés et d'exportateurs européens. Sa norme d'Assurance intégrée des exploitations (IFA) pour les fruits et légumes couvre la sécurité sanitaire et la traçabilité, la santé, la sécurité et le bien-être des travailleurs, et l'environnement (eau, engrais, lutte contre les ravageurs et produits phytosanitaires). Certains acheteurs demandent d'autres normes, comme le bio ou le commerce équitable.",
            "GLOBALG.A.P. indique trois éléments de coût : vos propres coûts de préparation (formation, toilettes, local pour les produits chimiques, registres) ; les frais de l'organisme de certification pour l'audit et le déplacement ; et les frais d'enregistrement et de licence de GLOBALG.A.P., qui dépendent de votre surface et de l'option. Les audits sont annuels et un certificat dure un an. Il existe une option pour les groupements de producteurs, y compris les petits exploitants, où un seul certificat de groupe couvre les membres qui suivent un système qualité commun avec des inspections internes.",
            "Les étapes : téléchargez gratuitement les règles et la liste de contrôle, mettez en place les exigences, faites une auto-évaluation, demandez un audit à un organisme de certification agréé qui travaille dans votre pays, corrigez les problèmes dans le délai donné, et recevez le certificat. Les acheteurs peuvent vérifier les certificats sur le Supply Chain Portal de GLOBALG.A.P. Avant de payer, demandez à votre acheteur : avez-vous besoin de ce certificat, et achèterez-vous plus ou paierez-vous plus si je l'ai ? Demandez des devis à plusieurs organismes de certification."
          ],
          steps: ["Demandez à votre acheteur quel certificat il exige, s'il en exige un.", "Téléchargez gratuitement les règles et la liste de contrôle de la norme et faites une auto-évaluation.", "Notez les trois éléments de coût et demandez des devis à des organismes de certification agréés.", "Comparez les coûts avec l'avantage : nouveaux acheteurs, plus de volume ou un meilleur prix.", "Décidez : certification seul, certification en groupement, ou pas encore."],
          words: [["Certification", "un contrôle indépendant qui montre qu'une ferme respecte une norme, prouvé par un certificat."], ["Organisme de certification", "l'entreprise agréée qui fait l'audit de votre ferme et délivre le certificat."], ["Certification de groupe", "un seul certificat pour un groupement de producteurs dont les membres suivent un système qualité commun."], ["Auto-évaluation", "vérifier votre propre ferme avec la liste de contrôle de la norme avant le vrai audit."]],
          slides: [
            { title: "Ce que couvre GLOBALG.A.P. IFA", bullets: ["Sécurité sanitaire et traçabilité", "Santé, sécurité et bien-être des travailleurs", "Environnement : eau, engrais, lutte contre les ravageurs"] },
            { title: "Trois éléments de coût", bullets: ["Vos coûts de préparation", "Frais d'audit et de déplacement de l'organisme de certification", "Frais d'enregistrement et de licence de GLOBALG.A.P."] },
            { title: "Étapes vers un certificat", bullets: ["Règles et liste de contrôle gratuites ; auto-évaluation", "Audit par un organisme de certification agréé", "Corrigez les problèmes ; certificat valable un an"] },
            { title: "Est-ce que ça vaut le coup ?", bullets: ["Demandez à l'acheteur s'il en a besoin", "Achètera-t-il plus ou paiera-t-il plus ?", "Option de groupe pour les petits exploitants ; plusieurs devis"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Pour votre culture et votre acheteur, rédigez une note coûts-avantages sur la certification : l'acheteur en a-t-il besoin, les trois éléments de coût (avec des devis si possible), l'avantage attendu, et votre choix : seul, en groupement ou pas encore.",
          youCanNow: "comparer les coûts et les avantages d'une certification comme GLOBALG.A.P. et choisir une voie pour votre ferme ou votre groupement.",
          quickCheck: [
            { objective: "O3", q: "Lequel est l'un des trois éléments de coût de GLOBALG.A.P. ?", options: ["Les frais de transport de l'acheteur", "Vos propres frais de scolarité", "Les frais d'audit et de déplacement de l'organisme de certification", "Le prix de la récolte"], answer: 2, why: "GLOBALG.A.P. cite vos coûts de préparation, les frais de l'organisme de certification, et ses propres frais d'enregistrement et de licence." },
            { objective: "O3", q: "Vingt petits exploitants veulent la certification mais ne peuvent pas payer chacun un audit. Qu'est-ce qui peut convenir ?", options: ["La certification de groupe avec un système qualité commun", "Que chacun copie le certificat d'un voisin", "Sauter l'audit", "Acheter un certificat en ligne"], answer: 0, why: "L'option groupement de producteurs permet à un seul certificat de couvrir les membres qui suivent un système commun avec des inspections internes." }
          ]
        },
        {
          title: "Limites de résidus, règles d'exportation et pourquoi des envois sont refusés",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier les limites de résidus et les organismes d'exportation qui concernent votre culture et votre marché.",
          text: [
            "Une limite maximale de résidus (LMR ; en anglais MRL) est la plus grande quantité d'un pesticide autorisée à rester sur un aliment. Chaque marché importateur fixe les siennes. L'Union européenne publie ses limites dans la base de données de l'UE sur les pesticides ; le Codex Alimentarius fixe des limites internationales que beaucoup de pays utilisent. Un produit peut être légal chez vous et dépasser quand même la limite en Europe, ou un pesticide peut ne pas y être autorisé du tout.",
            "Ce n'est pas un petit risque. L'Autorité de l'agriculture et de l'alimentation du Kenya (AFA) a lié une forte baisse des recettes d'exportation de légumes surtout aux interceptions de l'UE pour résidus de pesticides, passées de 25 cas en 2023 à 57 en 2024, et l'UE a renforcé les contrôles sur les haricots et les pois du Kenya. Causes fréquentes : traiter trop près de la récolte, utiliser un produit non autorisé sur ce marché, mal doser le mélange, la dérive du traitement d'un voisin, et mélanger des produits de fermes non tracées.",
            "Les exportations demandent aussi des autorisations nationales. Au Kenya, la Direction des cultures horticoles de l'AFA délivre les licences aux exportateurs et enregistre les agents, et le KEPHIS (service d'inspection sanitaire des végétaux) délivre les certificats phytosanitaires. Au Nigeria, les exportateurs s'enregistrent auprès du Conseil nigérian de promotion des exportations (NEPC). Au Ghana, ils s'enregistrent auprès de l'Autorité de promotion des exportations du Ghana (GEPA). L'inspection phytosanitaire est faite par l'organisme de protection des végétaux de chaque pays. Les règles changent, alors vérifiez auprès de chaque organisme avant la saison."
          ],
          steps: ["Nommez votre marché visé (par exemple l'UE, le Royaume-Uni ou un marché régional).", "Cherchez les limites de résidus pour votre culture dans la base de données de ce marché ou dans le Codex.", "Vérifiez que chaque pesticide utilisé y est autorisé, et suivez le délai avant récolte de l'étiquette.", "Demandez à votre acheteur si des analyses de résidus sont nécessaires avant l'expédition.", "Listez les organismes d'exportation et de protection des végétaux de votre pays et ce qu'ils exigent."],
          words: [["Limite maximale de résidus (LMR)", "la plus grande quantité d'un pesticide autorisée à rester sur un aliment sur un marché."], ["Interception", "quand un pays importateur bloque un envoi à la frontière parce qu'il ne respecte pas une règle."], ["Certificat phytosanitaire", "un document officiel qui dit qu'un produit végétal est exempt des ravageurs et maladies d'une liste."]],
          slides: [
            { title: "Ce qu'est une LMR", bullets: ["La plus grande quantité de pesticide autorisée sur un aliment", "Chaque marché fixe les siennes", "Base de données de l'UE sur les pesticides ; limites du Codex"] },
            { title: "Pourquoi des envois sont refusés", bullets: ["Traitement trop près de la récolte", "Produit non autorisé sur ce marché", "Mauvais mélange, dérive, produits non tracés"] },
            { title: "L'alerte du Kenya", bullets: ["AFA : interceptions de l'UE pour résidus de 25 (2023) à 57 (2024)", "Forte baisse des recettes d'exportation de légumes", "Plus de contrôles de l'UE sur les haricots et les pois"] },
            { title: "Organismes d'export (vérifiez les règles actuelles)", bullets: ["Kenya : Direction des cultures horticoles de l'AFA ; KEPHIS", "Nigeria : enregistrement au NEPC", "Ghana : enregistrement à la GEPA ; protection des végétaux"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Pour votre culture et votre marché visé, trouvez où sont publiées les limites de résidus et vérifiez deux pesticides que vous utilisez. Puis listez les organismes d'exportation et de protection des végétaux de votre pays, avec une question à poser à chacun. Ajoutez les résultats à votre liste.",
          youCanNow: "trouver les limites de résidus de votre marché et nommer les organismes d'exportation et de protection des végétaux avec lesquels vous devez traiter.",
          quickCheck: [
            { objective: "O5", q: "Votre pesticide est homologué dans votre pays. Les produits peuvent-ils quand même être refusés en Europe ?", options: ["Non, l'homologation nationale suffit", "Oui, si les résidus dépassent la limite de l'UE ou si le produit n'y est pas autorisé", "Seulement si les caisses sont sales", "Seulement pour les fleurs"], answer: 1, why: "Chaque marché fixe ses propres limites, donc un produit légal chez vous peut enfreindre les règles de l'UE." },
            { objective: "O5", q: "Au Kenya, qui délivre les certificats phytosanitaires pour l'export ?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "Le KEPHIS s'occupe de l'inspection phytosanitaire et des certificats phytosanitaires pour les exportations kényanes." }
          ]
        },
        {
          title: "Rencontrer les acheteurs, contrats d'approvisionnement et agriculture contractuelle",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rédiger une offre d'approvisionnement et lister les conditions de contrat dont vous avez besoin avec un acheteur.",
          text: [
            "Quand vous rencontrez un acheteur, venez préparé : votre culture, le calibre, combien vous pouvez fournir et quand, comment vous gardez les produits sains et tracés, tout certificat, et des échantillons. Ne promettez que ce que vous pouvez livrer. Une livraison manquée abîme plus la confiance qu'une offre plus petite.",
            "Négociez les conditions, pas seulement le prix. Mettez-vous d'accord sur le calibre et la façon de le contrôler, le volume et le calendrier, le prix ou la façon de le fixer (fixe, ou lié à un prix du marché), qui paie le transport et l'emballage, les règles de refus (qui contrôle, quand, et ce que deviennent les produits refusés), la date et le moyen de paiement, et ce qui se passe si votre récolte échoue ou si l'acheteur ne vient pas chercher les produits. Vendre en dehors du contrat à un autre acheteur casse la confiance et souvent le contrat.",
            "Dans l'agriculture contractuelle, une entreprise comme un transformateur ou un exportateur passe contrat avec beaucoup de petits exploitants, leur fournit souvent semences, intrants, formation ou crédit, et achète la récolte. Cela peut ouvrir un marché stable, mais vérifiez : les intrants sont-ils retenus sur votre paiement et à quel prix, qui fixe le calibre, que se passe-t-il si les prix montent, et pouvez-vous partir ? Lisez tout le contrat, gardez une copie, et demandez l'avis d'un conseiller de confiance, d'un agent de vulgarisation ou d'un responsable de coopérative avant de signer."
          ],
          steps: ["Préparez votre offre : culture, calibre, volume, calendrier, sécurité sanitaire et traçabilité, certificat, échantillons.", "Listez les conditions nécessaires : contrôle du calibre, base de prix, transport, règles de refus, date de paiement, clauses en cas d'échec.", "Pour l'agriculture contractuelle, demandez comment les intrants sont facturés, qui fixe le calibre et comment vous pouvez partir.", "Lisez tout le contrat et demandez l'avis d'un conseiller de confiance avant de signer.", "Gardez une copie et livrez exactement ce que vous avez promis."],
          words: [["Offre d'approvisionnement", "une offre écrite à un acheteur de ce que vous pouvez fournir, quand et à quelles conditions."], ["Agriculture contractuelle", "un accord où une entreprise fait produire pour elle de nombreux petits exploitants, souvent en fournissant les intrants et en achetant la récolte."], ["Vente parallèle", "vendre à un autre acheteur des produits déjà promis par contrat."], ["Règles de refus", "les règles convenues pour contrôler les produits et ce que deviennent ceux que l'acheteur refuse."]],
          slides: [
            { title: "Venez préparé", bullets: ["Culture, calibre, volume et calendrier", "Comment vous gardez les produits sains et tracés", "Certificat et échantillons ; ne promettez que ce que vous pouvez livrer"] },
            { title: "Négociez les conditions", bullets: ["Contrôle du calibre, base de prix, transport", "Règles de refus et date de paiement", "Et si la récolte échoue ou l'acheteur ne vient pas ?"] },
            { title: "Agriculture contractuelle", bullets: ["Marché stable ; intrants, formation ou crédit", "Vérifiez : coût des intrants, qui fixe le calibre, pouvez-vous partir ?", "La vente parallèle casse la confiance et les contrats"] },
            { title: "Avant de signer", bullets: ["Lisez chaque ligne ; gardez une copie", "Demandez à un agent de vulgarisation, à la coopérative ou à un conseiller", "Livrez exactement ce que vous avez promis"] }
          ],
          tryIt: "Tâche finale : terminez votre liste de préparation aux acheteurs, en marquant ce que vous respectez et ce que vous allez corriger. Puis rédigez une offre d'approvisionnement d'une page pour cet acheteur : culture et calibre, volume et calendrier, sécurité sanitaire et traçabilité, certification, base de prix et les conditions de contrat que vous voulez.",
          youCanNow: "faire une offre d'approvisionnement à un gros acheteur et lister les conditions de contrat qui vous protègent, y compris dans l'agriculture contractuelle.",
          quickCheck: [
            { objective: "O6", q: "Quelle condition vous protège si l'acheteur refuse une partie d'une livraison ?", options: ["Des règles de refus claires : qui contrôle, quand, et ce que deviennent les produits refusés", "Le logo de l'acheteur", "Un prix bas", "Une plus grosse livraison"], answer: 0, why: "Les règles de refus évitent les refus injustes et disent qui supporte la perte." },
            { objective: "O6", q: "Une entreprise d'agriculture contractuelle vous donne semences et engrais à crédit. Que demander d'abord ?", options: ["La couleur des sacs", "Si les voisins ont adhéré", "Le prix des intrants et comment ils sont retenus sur votre paiement", "Si vous pouvez vendre ailleurs"], answer: 2, why: "Le coût des intrants peut prendre une grande partie de votre paiement, alors connaissez le prix et la façon dont il est retenu." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Certification, règles d'exportation et contrats d'approvisionnement",
        questions: [
          { objective: "O3", q: "Combien de temps un certificat GLOBALG.A.P. IFA est-il valable ?", options: ["Un an, avec des audits annuels", "Pour toujours", "Dix ans", "Jusqu'à ce que l'acheteur change"], answer: 0, why: "GLOBALG.A.P. indique que les audits sont annuels et qu'un certificat est valable un an." },
          { objective: "O3", q: "Avant de payer une certification, que devez-vous demander à votre acheteur ?", options: ["Son adresse personnelle", "Sa culture préférée", "Rien, il suffit de se certifier", "En avez-vous besoin, et achèterez-vous plus ou paierez-vous plus si je l'ai ?"], answer: 3, why: "La certification coûte de l'argent, donc vérifiez qu'elle apporte un marché ou un meilleur prix." },
          { objective: "O5", q: "Où trouver les limites de résidus de l'UE pour une culture ?", options: ["Sur une radio locale", "Dans la base de données de l'UE sur les pesticides", "Sur votre sachet de semences", "Dans le statut WhatsApp d'un acheteur"], answer: 1, why: "La base de données de la Commission européenne sur les pesticides publie les LMR par aliment et par pesticide." },
          { objective: "O6", q: "Qu'est-ce que la vente parallèle ?", options: ["Vendre au bord de la route", "Vendre sur deux marchés à la fois avec autorisation", "Vendre à un autre acheteur des produits promis par contrat", "Vendre en gros"], answer: 2, why: "La vente parallèle rompt un contrat et abîme la confiance avec l'acheteur." },
          { objective: "O6", q: "Vous pouvez fournir 2 tonnes par semaine. L'acheteur en demande 4. Que faites-vous ?", options: ["Vous promettez 4 en espérant", "Vous envoyez des produits non triés pour faire le poids", "Vous ne dites rien et livrez 2", "Vous proposez 2 tonnes, ou vous travaillez avec un groupement pour fournir plus"], answer: 3, why: "Ne promettez que ce que vous pouvez livrer ; un groupement peut aider à atteindre un plus gros volume." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Vendre aux supermarchés, aux transformateurs et aux acheteurs à l'export : normes et certification",
    questions: [
      { objective: "O1", q: "Quel ensemble résume ce que veulent en général les gros acheteurs ?", options: ["Prix bas, grande ferme, tracteur neuf", "Bio seulement, rien d'autre", "Cadeaux, crédit, transport gratuit", "Volume, régularité, calibre, traçabilité, sécurité sanitaire"], answer: 3, why: "Ce sont les cinq besoins communs des supermarchés, des transformateurs et des exportateurs." },
      { objective: "O1", q: "Un transformateur qui achète du manioc pour l'amidon tient surtout à :", options: ["De gros volumes d'une qualité fixe", "Une jolie couleur et une belle forme", "De petits paquets pour les clients", "De belles étiquettes"], answer: 0, why: "Les transformateurs ont besoin d'un volume et d'une qualité réguliers pour leur usine ; l'aspect compte moins." },
      { objective: "O1", q: "Vous avez comparé le cahier des charges d'un acheteur avec ce que vous fournissez. Que deviennent les écarts ?", options: ["Des raisons d'abandonner", "Des secrets à cacher au groupement", "Votre plan de travail", "Le problème de l'acheteur"], answer: 2, why: "Chaque écart est une tâche à régler avant de pouvoir fournir cet acheteur." },
      { objective: "O2", q: "Que veut dire BPA (en anglais GAP) dans ce cours ?", options: ["Bon de paiement agricole", "Bonnes pratiques agricoles", "Blé, pois et arachide", "Bureau des permis administratifs"], answer: 1, why: "Les bonnes pratiques agricoles sont les habitudes de la ferme que contrôlent les acheteurs et les certificateurs." },
      { objective: "O2", q: "Quels pesticides devez-vous utiliser ?", options: ["N'importe quel produit bon marché du marché", "Ceux que conseille un voisin", "Des produits sans étiquette dans de vieilles bouteilles", "Des produits homologués par votre organisme national, utilisés comme l'indique l'étiquette"], answer: 3, why: "Des produits homologués utilisés selon l'étiquette protègent les gens et gardent les résidus sous les limites." },
      { objective: "O2", q: "Pourquoi prévoir des toilettes et le lavage des mains pour les travailleurs de la récolte ?", options: ["Pour empêcher les microbes d'aller sur les produits", "Pour faire plaisir aux voisins", "Parce que les acheteurs aiment les bâtiments", "Pour ranger les produits chimiques"], answer: 0, why: "L'hygiène à la récolte garde les produits sans microbes, et les acheteurs la contrôlent." },
      { objective: "O4", q: "À quoi sert un code de parcelle ?", options: ["À payer les travailleurs", "À retracer les produits jusqu'à la parcelle exacte", "À choisir un acheteur", "À fixer le prix"], answer: 1, why: "Un code de parcelle relie les registres de récolte et de traitements à une seule parcelle." },
      { objective: "O4", q: "Où doit figurer le numéro de lot ?", options: ["Seulement dans votre tête", "Sur la voiture de l'acheteur", "Sur chaque caisse ou bon de livraison, et dans votre registre de récolte", "Sur le sachet de semences"], answer: 2, why: "L'écrire sur les caisses et dans les registres permet à tout le monde de retracer les produits." },
      { objective: "O4", q: "Quel registre montre ce qui a été traité sur une parcelle et quand ?", options: ["Le registre des membres", "Le cahier des ventes", "Le bon de livraison", "Le registre des traitements et des intrants"], answer: 3, why: "Le registre des traitements et des intrants note la date, le produit, la quantité et qui a traité." },
      { objective: "O3", q: "Que couvre GLOBALG.A.P. IFA pour les fruits et légumes ?", options: ["La sécurité sanitaire, le bien-être des travailleurs et l'environnement", "Seulement la couleur des produits", "Seulement le prix", "Seulement la taille de la ferme"], answer: 0, why: "IFA couvre la sécurité sanitaire et la traçabilité, la santé et le bien-être des travailleurs, et l'environnement." },
      { objective: "O3", q: "Qui fait un audit GLOBALG.A.P. ?", options: ["Le chauffeur de votre acheteur", "Un organisme de certification agréé", "Un voisin", "La banque"], answer: 1, why: "Seul un organisme de certification agréé actif dans votre pays peut faire l'audit et certifier." },
      { objective: "O3", q: "Comment un acheteur peut-il vérifier que votre certificat est vrai ?", options: ["En vous demandant de jurer", "En regardant le panneau de votre ferme", "Sur le Supply Chain Portal de GLOBALG.A.P.", "Il ne peut pas vérifier"], answer: 2, why: "Le statut du certificat est visible sur la plateforme de GLOBALG.A.P. avec votre numéro." },
      { objective: "O3", q: "Quelle est la première étape vers la certification ?", options: ["Payer les frais tout de suite", "Imprimer un certificat", "Dire à l'acheteur que vous êtes certifié", "Télécharger gratuitement les règles et la liste de contrôle et faire une auto-évaluation"], answer: 3, why: "Une auto-évaluation montre vos écarts avant de payer un audit." },
      { objective: "O5", q: "Qu'est-ce qu'une LMR ?", options: ["Un type d'engrais", "Une variété de semence", "La plus grande quantité d'un pesticide autorisée à rester sur un aliment", "Un permis de transport"], answer: 2, why: "Une limite maximale de résidus est la limite légale de résidu d'un pesticide sur un aliment." },
      { objective: "O5", q: "Qu'a dit le régulateur du Kenya sur les interceptions de l'UE pour résidus ?", options: ["Elles sont tombées à zéro", "Elles sont passées de 25 en 2023 à 57 en 2024", "Elles n'arrivent jamais", "Elles ne touchent que les fleurs"], answer: 1, why: "L'AFA a signalé que les interceptions ont plus que doublé et les a liées à une forte baisse des recettes d'exportation de légumes." },
      { objective: "O5", q: "Quelle est une cause fréquente de refus pour résidus ?", options: ["Traiter trop près de la récolte", "Tenir de bons registres", "Utiliser des caisses propres", "Former les travailleurs"], answer: 0, why: "Ne pas respecter le délai avant récolte laisse des résidus au-dessus de la limite." },
      { objective: "O5", q: "Un groupement nigérian veut exporter de l'hibiscus séché (bissap). Auprès de qui s'enregistre-t-il comme exportateur ?", options: ["KEPHIS", "GEPA", "AFA", "Le Conseil nigérian de promotion des exportations (NEPC)"], answer: 3, why: "Les exportateurs nigérians s'enregistrent auprès du NEPC et doivent vérifier ses exigences actuelles." },
      { objective: "O6", q: "Que doit contenir une offre d'approvisionnement ?", options: ["Culture, calibre, volume, calendrier, sécurité sanitaire, certificat et base de prix", "Seulement un prix bas", "Votre code PIN bancaire", "La promesse de n'importe quel volume demandé"], answer: 0, why: "Une offre claire montre à l'acheteur exactement ce que vous pouvez livrer et comment." },
      { objective: "O6", q: "Avant de signer un contrat d'agriculture contractuelle, vous devez :", options: ["Signer vite avant les autres", "Lire seulement la première page", "Le lire en entier, garder une copie et demander l'avis d'un conseiller de confiance", "Laisser l'entreprise garder la seule copie"], answer: 2, why: "Tout lire et demander conseil vous protège des conditions que vous n'attendiez pas." },
      { objective: "O6", q: "Votre récolte échoue après une sécheresse. Quelle condition du contrat compte maintenant ?", options: ["Le logo de l'acheteur", "Ce qui se passe si l'une des parties ne peut pas livrer", "La couleur des caisses", "Les heures d'ouverture du bureau de l'acheteur"], answer: 1, why: "Une clause en cas d'échec dit ce qui se passe quand une récolte échoue, pour que vous ne soyez pas pénalisé injustement." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie de la liste ou de l'offre et réessayez.",
    criteria: [
      { name: "Exigences de l'acheteur et écarts", objective: "O1", notYet: "Les besoins de l'acheteur sont vagues, ou les écarts ne sont pas marqués.", meets: "Volume, régularité, calibre, traçabilité et sécurité sanitaire sont listés, avec ce que vous fournissez aujourd'hui et chaque écart marqué.", exceeds: "Fondé sur le cahier des charges écrit de l'acheteur, avec un plan et une date pour combler chaque écart." },
      { name: "Bonnes pratiques agricoles", objective: "O2", notYet: "Pas de règles BPA écrites, ou des pesticides non homologués, ou pas d'équipement de protection.", meets: "Règles écrites : pesticides homologués utilisés selon l'étiquette, équipement de protection, délai avant récolte, eau, hygiène à la récolte et sécurité des travailleurs.", exceeds: "Les travailleurs ont été formés et les règles sont affichées sur le lieu de travail." },
      { name: "Registres de traçabilité", objective: "O4", notYet: "Pas de codes de parcelle, de registre des traitements ni de numéros de lot.", meets: "Codes de parcelle, registre des traitements et des intrants et registre de récolte avec numéros de lot ; une caisse peut être retracée.", exceeds: "Les registres sont tenus pour tout le groupement et un test de traçabilité a été fait en quelques minutes." },
      { name: "Certification et règles d'exportation", objective: "O3", notYet: "La certification est supposée acquise ou ignorée, ou aucun organisme d'export n'est nommé.", meets: "Une note coûts-avantages nomme les trois éléments de coût et une voie (seul, en groupement ou pas encore).", exceeds: "Contient de vrais devis d'organismes de certification et la réponse de l'acheteur sur son besoin." },
      { name: "Limites de résidus", objective: "O5", notYet: "Aucune vérification des limites de résidus du marché.", meets: "Indique où les limites sont publiées et vérifie les pesticides utilisés par rapport à elles, ainsi que les organismes d'exportation et de protection des végétaux.", exceeds: "A interrogé l'acheteur ou un laboratoire sur les analyses de résidus avant l'expédition." },
      { name: "Offre d'approvisionnement et conditions", objective: "O6", notYet: "Pas d'offre, ou elle promet plus que ce que la ferme ou le groupement peut livrer.", meets: "Une offre d'une page avec calibre, volume, calendrier, sécurité sanitaire, certificat, base de prix et les conditions de contrat voulues.", exceeds: "Contient des règles de refus, des clauses en cas d'échec et des conditions de paiement, et a été montrée à un conseiller." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants ou groupements qui envoient une offre d'approvisionnement à un supermarché, un transformateur ou un exportateur dans les 90 jours (enquête de suivi)",
      "Apprenants ou groupements qui obtiennent un contrat d'approvisionnement ou un accord d'agriculture contractuelle dans les six mois",
      "Apprenants qui tiennent des registres de traitements et de récolte avec numéros de lot pendant toute une saison",
      "Apprenants ou groupements qui commencent ou terminent une auto-évaluation de certification, ou obtiennent la certification"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone (un smartphone aide) et un cahier pour les registres",
      "Un vrai cahier des charges d'acheteur si possible (demandez-le à un supermarché, un transformateur ou un exportateur local)",
      "Les étiquettes des pesticides utilisés par les apprenants, pour lire l'équipement de protection et le délai avant récolte",
      "En option : la liste de contrôle gratuite de GLOBALG.A.P. sur globalgap.org",
      "Environ 90 minutes en tout, en courtes séances, plus du temps pour contacter les acheteurs et les organismes"
    ],
    facilitatorNotes: [
      "Donnez ce cours à des groupements de producteurs quand c'est possible : le volume, les registres et la certification de groupe marchent mieux ensemble.",
      "Apportez de vraies étiquettes de pesticides et entraînez-vous à trouver l'équipement de protection et le délai avant récolte ; ne donnez jamais vous-même de doses ni de délais chiffrés.",
      "Invitez un acheteur, un exportateur ou un organisme de certification à expliquer ce qu'ils contrôlent ; demandez-leur un exemple de cahier des charges.",
      "Avant la séance, vérifiez les règles actuelles auprès de l'AFA et du KEPHIS (Kenya), du NEPC (Nigeria), de la GEPA (Ghana) et de l'organisme de protection des végétaux de votre pays ; les règles et les frais changent.",
      "Notez la tâche finale avec la grille ; faites un jeu de rôle de rencontre où « l'acheteur » pousse pour plus de volume que le groupement ne peut fournir."
    ]
  }
};
