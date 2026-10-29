"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-farm-finance.js). See scripts/koachlearn-courses/README.md, "Translations".

const VSLA = { name: "VSL Associates : la méthode VSLA/AVEC (parts, fonds de crédit, caisse sociale, cycle d'un an, partage)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya : liste des SACCO de dépôt agréées", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO : réglementation des systèmes financiers décentralisés (microfinance) dans les pays du XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Banque centrale du Nigeria : banques de microfinance", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Nigeria : présentation (garanties du risque de crédit pour les prêts agricoles)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana : le GIRSAL récompense des institutions financières pour leurs prêts agricoles", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Conseil du système de récépissés d'entrepôt du Kenya (Warehouse Receipt System Council) : entrepôts certifiés et récépissés", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 octobre 2019) : la GCX et ARB Apex Bank lancent le financement par récépissés d'entrepôt électroniques", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (juin 2023) : Adehyeman Savings and Loans et la Bourse des matières premières du Ghana s'associent pour soutenir les agriculteurs", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund : qui sommes-nous (financement, intrants agricoles et formation ; pays)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA : le Soudan lance le programme ENABLE Youth (programme de la Banque africaine de développement pour les jeunes agri-entrepreneurs)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Fonds de développement des entreprises de jeunes du Kenya (Youth Enterprise Development Fund) : prêts aux entreprises de jeunes, dont un prêt Agri-Biz", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Sénégal : Délégation générale à l'Entrepreneuriat rapide des Femmes et des Jeunes", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Nigeria : statut d'enregistrement des prêteurs numériques (applications de prêt approuvées)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Banque centrale du Kenya : supervision bancaire, dont l'annuaire des prestataires de crédit numérique agréés", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-fr",
  lang: "fr",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Financer votre ferme : prêts, subventions et investisseurs",
  skills: "Calculer l'argent dont vous avez besoin, Utiliser les groupes d'épargne, les AVEC et les SACCO, Comparer les prêts agricoles et les plans de remboursement, Utiliser les récépissés d'entrepôt et le crédit en intrants, Trouver de vraies subventions et éviter les arnaques, Écrire une demande de financement d'une page",
  outcome: "calculer exactement l'argent dont votre ferme a besoin et quand, comparer les groupes d'épargne, les SACCO, les prêts, les récépissés d'entrepôt, le crédit en intrants et les subventions, repérer une arnaque au prêt ou à la subvention, et écrire une demande de financement d'une page qu'un prêteur, un programme ou un investisseur peut accepter.",
  about: [
    "Ce cours s'adresse aux petits producteurs et aux agriculteurs commerciaux en croissance, aux jeunes agri-entrepreneurs, aux groupements de femmes et de jeunes, aux responsables de coopératives et aux agents de vulgarisation du Kenya, du Nigeria, du Ghana, du Sénégal, de la Côte d'Ivoire et de toute l'Afrique qui ont besoin d'argent pour démarrer, continuer ou grandir.",
    "Le chapitre 1 couvre l'argent le plus proche de vous : calculer combien il vous faut et pour quoi, les groupes d'épargne, les AVEC (associations villageoises d'épargne et de crédit, en anglais VSLA) et les SACCO (coopératives d'épargne et de crédit), et les prêts agricoles des institutions de microfinance et des banques. Le chapitre 2 couvre d'autres portes : le financement par récépissé d'entrepôt et le crédit en intrants des acheteurs et des systèmes contractuels, les subventions et les programmes pour les jeunes et comment éviter les arnaques, et la rédaction d'une demande de financement d'une page. Il s'appuie sur \"Agrobusiness et gestion de l'exploitation agricole\", qui montre comment calculer le coût total d'un prêt.",
    "Tous les montants sont des exemples inventés ; les taux d'intérêt, les frais et les programmes changent, alors vérifiez l'offre actuelle. Ce cours explique comment fonctionne chaque type de financement et ses risques. Il ne donne pas de conseils de crédit ni de placement. N'empruntez que ce dont votre plan a besoin, lisez entièrement chaque contrat, vérifiez que le prêteur est agréé, et demandez conseil à une personne de confiance, comme votre coopérative, votre SACCO, votre agent de vulgarisation ou un juriste, avant de signer."
  ],
  finalTask: "Écrivez une demande de financement d'une page pour votre ferme (ou une ferme d'exemple) : qui vous êtes et votre ferme ; à quoi servira exactement l'argent, le montant total, ce que vous apportez vous-même et l'écart que vous demandez ; comment l'argent va rapporter (coût par unité, marge brute ou délai de récupération) ; le type de financement demandé et pourquoi il convient ; un plan de remboursement qui suit les moments où l'argent rentre ; vos garanties ou cautions ; vos principaux risques et comment vous les gérez ; et vos registres ou vos antécédents.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits producteurs et agriculteurs commerciaux en croissance, jeunes agri-entrepreneurs, groupements de femmes et de jeunes, responsables de coopératives et agents de vulgarisation au Kenya, au Nigeria, au Ghana et en Afrique de l'Ouest francophone, qui cultivent ou élèvent des animaux et des poissons, et qui veulent de l'argent pour démarrer, s'agrandir ou passer la saison.",
    startingPoint: "Beaucoup ont emprunté à la famille, à une tontine ou à un groupe d'épargne, à une boutique ou à une application de prêt sur téléphone. Peu ont préparé un budget écrit pour un prêt, comparé des offres selon le coût total et les dates de remboursement, utilisé un récépissé d'entrepôt ou vérifié si un prêteur ou un programme est réel. Certains ont été visés par de fausses offres de subventions et de prêts.",
    gap: "Les agriculteurs empruntent souvent le mauvais montant, au mauvais moment, au mauvais prêteur, avec des remboursements dus avant la récolte, ou perdent de l'argent à cause de fausses subventions et d'applications de prêt non agréées. Connaître leur vrai besoin de financement et les options qui conviennent leur permet d'emprunter moins et mieux, d'utiliser l'épargne de groupe et le crédit lié à la récolte, et de présenter une demande claire que les prêteurs et les programmes prennent au sérieux.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque mot de finance est expliqué",
      "Appareils : un téléphone simple et une calculatrice ; un cahier pour les budgets et la demande",
      "Temps : leçons de 5 à 6 minutes qui s'intègrent au travail de la ferme",
      "Les taux, les frais et les programmes changent et varient selon les pays : aucun taux ni aucune date limite ne sont donnés ; les apprenants vérifient l'offre actuelle et l'autorité de régulation",
      "Pas de conseils de crédit ni de placement ; ne jamais taper de code PIN, de mot de passe ou de coordonnées bancaires dans des applications ou des outils d'IA pour s'exercer"
    ],
    prerequisites: "Aucun. \"Agrobusiness et gestion de l'exploitation agricole\" (registres, trésorerie, coût d'un prêt) et \"Comptabilité agricole et gestion des investissements\" (coût par unité, délai de récupération) aident pour les calculs."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'un plan de ferme et de ses coûts", action: "calculer le besoin total d'argent, votre apport personnel et l'écart de financement, séparés en fonds de roulement et équipement, avec le mois où chacun est nécessaire", standard: "avec des calculs justes et sans dépenses du foyer mélangées" },
    { id: "O2", condition: "À partir d'un groupe d'épargne, d'une AVEC ou d'une SACCO que vous pourriez rejoindre", action: "expliquer comment y fonctionnent l'épargne, le crédit, les cautions et le partage, et lister ses risques", standard: "en citant au moins trois règles à vérifier avant d'adhérer" },
    { id: "O3", condition: "À partir de deux offres de prêt", action: "comparer leur coût total, leurs garanties et leurs dates de remboursement, et choisir celle qui convient à votre récolte", standard: "avec le total remboursé calculé pour chacune et les mois de remboursement vérifiés dans votre plan de trésorerie" },
    { id: "O4", condition: "À partir d'une offre de récépissé d'entrepôt ou de crédit en intrants", action: "lister ses coûts, ce que vous devez faire et ce qui se passe si les prix ou la récolte baissent", standard: "en citant au moins quatre conditions et deux risques" },
    { id: "O5", condition: "À partir d'une offre de subvention, de programme pour les jeunes ou de prêt", action: "la vérifier sur le site officiel ou sur la liste du régulateur et repérer les signes d'une arnaque", standard: "avant de payer, de donner des informations ou de postuler" },
    { id: "O6", condition: "Avec les chiffres de votre propre ferme", action: "écrire une demande de financement d'une page qu'un prêteur, un programme ou un investisseur peut évaluer", standard: "qui couvre l'objet, le montant, l'apport personnel, la façon dont l'argent rapporte, le remboursement, les garanties et les risques" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre besoin et l'argent le plus proche de vous",
      lessons: [
        {
          title: "De combien d'argent avez-vous besoin, et pour quoi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Calculer votre besoin total d'argent, votre apport personnel et l'écart de financement, mois par mois.",
          text: [
            "Avant de chercher de l'argent, écrivez exactement à quoi il servira. Le fonds de roulement paie un cycle de production : semences, engrais, aliments, poussins ou alevins, main-d'œuvre, soins vétérinaires et transport. Il revient quand vous vendez. L'équipement et les bâtiments (une pompe, un enclos, un magasin) durent de nombreuses années et se remboursent lentement. Les prêteurs les traitent souvent différemment, avec des durées de prêt différentes, alors listez-les séparément.",
            "Exemple (chiffres inventés en nairas), une bande de poulets de chair au Nigeria : poussins, aliments, soins vétérinaires et main-d'œuvre 1 200 000 (fonds de roulement) ; abreuvoirs, mangeoires et réparations du poulailler 300 000 (équipement). Total 1 500 000. Vous avez épargné 500 000. Écart de financement = 1 500 000 - 500 000 = 1 000 000. C'est cet écart, et non le total, que vous demandez.",
            "Placez ensuite chaque coût dans le mois où il est nécessaire, à l'aide de votre plan de trésorerie, pour demander l'argent au moment voulu et ne pas payer d'intérêts sur de l'argent qui dort. Gardez une petite marge pour les hausses de prix. Ne mélangez pas les dépenses du foyer comme les frais de scolarité : n'empruntez pour la ferme que ce que la ferme peut rembourser."
          ],
          steps: ["Listez tous les coûts de votre plan.", "Marquez chacun fonds de roulement ou équipement.", "Additionnez-les pour avoir le besoin total.", "Retirez l'argent que vous apporterez vous-même.", "La différence est votre écart de financement.", "Placez chaque coût dans le mois où il est nécessaire, et ajoutez une petite marge."],
          words: [["Fonds de roulement", "l'argent qui paie un cycle de production et qui revient quand vous vendez."], ["Écart de financement", "l'argent qui vous manque encore après votre apport : besoin total - argent personnel."], ["Apport personnel", "l'argent ou les biens que vous mettez vous-même dans le plan."]],
          slides: [
            { title: "Deux sortes de besoins", bullets: ["Fonds de roulement : un cycle, revient à la vente", "Équipement et bâtiments : durent des années, se remboursent lentement", "Listez-les séparément"] },
            { title: "Exemple poulets de chair (NGN, inventé)", bullets: ["Fonds de roulement 1 200 000 + équipement 300 000 = 1 500 000", "Argent personnel 500 000", "Écart de financement 1 000 000 : demandez ce montant"] },
            { title: "Calendrier et discipline", bullets: ["Placez chaque coût dans son mois", "Petite marge pour les hausses de prix", "Pas de dépenses du foyer dans un prêt agricole"] }
          ],
          tryIt: "Pour un plan de votre ferme, listez tous les coûts, marquez chacun fonds de roulement ou équipement, faites le total, retirez votre argent personnel, et écrivez l'écart de financement et le mois où chaque partie est nécessaire.",
          youCanNow: "calculer exactement l'argent dont votre plan a besoin, pour quoi et quand, et l'écart que vous devez financer.",
          quickCheck: [
            { objective: "O1", q: "Un plan coûte 800 000 et vous avez 300 000 à vous. Quel est l'écart de financement ?", options: ["1 100 000", "800 000", "500 000", "300 000"], answer: 2, why: "800 000 - 300 000 = 500 000." },
            { objective: "O1", q: "Qu'est-ce qui relève du fonds de roulement pour un étang à poissons ?", options: ["Les alevins et les aliments pour un cycle", "Le creusement de l'étang", "Une pompe à eau", "Une clôture"], answer: 0, why: "Les alevins et les aliments sont utilisés en un cycle et reviennent quand les poissons sont vendus." }
          ]
        },
        {
          title: "Groupes d'épargne, AVEC et SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Expliquer comment fonctionnent une AVEC et une SACCO et lister les règles à vérifier avant d'adhérer.",
          text: [
            "Une association villageoise d'épargne et de crédit (AVEC, en anglais VSLA) est un groupe, souvent de 10 à 25 membres, qui se réunit chaque semaine. À chaque réunion, les membres achètent de 1 à 5 parts à un prix que le groupe fixe pour l'année. L'épargne va dans un fonds de crédit. Les membres peuvent en général emprunter jusqu'à trois fois leur épargne pour trois mois au plus, en payant des frais de service fixés par le groupe. Beaucoup de groupes ont aussi une petite caisse sociale pour les urgences. Après environ un an, tous les prêts sont remboursés et l'argent, frais de service compris, est partagé en proportion de l'épargne de chaque membre.",
            "Une SACCO (coopérative d'épargne et de crédit ; en Afrique de l'Ouest francophone, une mutuelle ou une caisse) est une coopérative financière qui appartient à ses membres, souvent plus grande et plus formelle. Vous épargnez régulièrement, et les prêts sont souvent liés à ce que vous avez épargné et demandent des cautions : des membres qui promettent de rembourser si vous ne le faites pas. Au Kenya, la SASRA agrée les SACCO de dépôt et publie leur liste. Dans les pays de la zone franc CFA, les institutions de microfinance et les mutuelles d'épargne et de crédit suivent les règles de la BCEAO.",
            "Avant d'adhérer, vérifiez : les statuts ou le règlement écrits, le prix de la part ou le montant d'épargne, les règles et les frais des prêts, comment l'argent est gardé en sécurité (une caisse avec cadenas ou un compte agréé), comment les registres sont tenus et lus à voix haute, et ce que veut dire être caution. Si vous vous portez caution pour le prêt d'un ami et qu'il ne rembourse pas, vous devrez peut-être payer."
          ],
          steps: ["Demandez à voir les règles écrites du groupe.", "Vérifiez le prix de la part ou le montant d'épargne et les jours de réunion.", "Vérifiez le montant, la durée et les frais des prêts.", "Vérifiez comment l'argent et les registres sont gardés en sécurité.", "Demandez ce que veut dire être caution pour vous.", "Pour une SACCO, vérifiez qu'elle est enregistrée ou agréée."],
          words: [["AVEC (VSLA)", "association villageoise d'épargne et de crédit : un groupe qui épargne chaque semaine, prête à ses membres et partage à la fin d'un cycle."], ["Partage", "le jour où le groupe verse toute l'épargne et les gains aux membres en proportion de leur épargne."], ["SACCO", "coopérative d'épargne et de crédit : un groupe qui appartient à ses membres, reçoit l'épargne et accorde des prêts."], ["Caution", "une personne qui promet de rembourser un prêt si l'emprunteur ne le fait pas."]],
          slides: [
            { title: "AVEC : comment ça marche", bullets: ["10-25 membres se réunissent chaque semaine ; achètent 1-5 parts", "Emprunt jusqu'à 3 fois l'épargne, pour 3 mois au plus", "Partage après environ un an"] },
            { title: "SACCO", bullets: ["Coopérative d'épargne et de crédit appartenant aux membres", "Prêts liés à l'épargne ; cautions", "Kenya : vérifiez la liste des SACCO agréées de la SASRA"] },
            { title: "Vérifiez avant d'adhérer", bullets: ["Règles écrites ; montant d'épargne", "Montant, durée et frais du prêt", "Argent et registres en sécurité ; devoirs de la caution"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Demandez ses règles à un groupe d'épargne, une AVEC ou une SACCO près de chez vous (ou utilisez l'exemple). Écrivez le montant d'épargne, le montant du prêt, sa durée, les frais, comment l'argent est gardé en sécurité, et ce que doit faire une caution.",
          youCanNow: "expliquer comment fonctionnent les groupes d'épargne, les AVEC et les SACCO et vérifier leurs règles avant d'adhérer ou de vous porter caution.",
          quickCheck: [
            { objective: "O2", q: "Dans une AVEC, comment l'argent est-il partagé à la fin du cycle ?", options: ["À parts égales, quelle que soit l'épargne de chacun", "Au président", "À celui qui a le plus emprunté", "En proportion de l'épargne de chaque membre"], answer: 3, why: "Les membres qui ont acheté plus de parts reçoivent une plus grande part du total." },
            { objective: "O2", q: "Vous vous portez caution pour le prêt SACCO d'un ami et il arrête de payer. Que peut-il arriver ?", options: ["Rien ; la caution n'est qu'une formalité", "Vous devrez peut-être rembourser une partie ou la totalité", "La SACCO annule le prêt", "La famille de votre ami paie automatiquement"], answer: 1, why: "Une caution promet de rembourser si l'emprunteur ne le fait pas." }
          ]
        },
        {
          title: "Les prêts agricoles de la microfinance et des banques",
          objectives: ["O3"],
          minutes: 6,
          goal: "Comparer deux offres de prêt selon le coût total, les garanties et l'adéquation des remboursements avec votre récolte.",
          text: [
            "Les banques et institutions de microfinance prêtent de petits montants, souvent à des groupes ; les banques commerciales et agricoles prêtent des montants plus gros, souvent contre plus de garanties. Demandez si le taux est mensuel ou annuel, et s'il est forfaitaire (taux fixe sur le capital initial) ou sur capital restant dû (dégressif). Un taux forfaitaire calcule les intérêts sur la totalité du montant pendant toute la durée du prêt ; un taux sur capital restant dû ne les calcule que sur ce que vous devez encore, donc le même chiffre coûte moins cher. Ajoutez tous les frais et toutes les assurances pour connaître le total que vous rembourserez.",
            "La garantie est ce que le prêteur peut prendre si vous ne remboursez pas : un titre foncier, un véhicule, un équipement, une épargne bloquée chez le prêteur, une caution solidaire du groupe ou un récépissé d'entrepôt. Certains États soutiennent les prêteurs avec des garanties de crédit, comme le NIRSAL au Nigeria (jusqu'à 75 % de couverture pour les prêteurs) et le GIRSAL au Ghana. Elles protègent le prêteur et peuvent rendre les banques plus disposées à prêter aux agriculteurs, mais vous devez toujours la totalité du prêt.",
            "Faites correspondre les remboursements à votre récolte. Exemple (chiffres inventés en shillings kényans), un emprunt de 100 000 pour une saison de maïs : l'offre A, c'est 10 000 par mois pendant 12 mois à partir du mois prochain, soit 120 000 au total. L'offre B, c'est un seul paiement de 112 000 au mois 6, après la récolte. B coûte moins et se rembourse quand l'argent rentre ; A demande des remboursements avant que vous ayez vendu quoi que ce soit. Demandez un différé de remboursement ou un remboursement à la récolte, et vérifiez que le prêteur est agréé par la banque centrale."
          ],
          steps: ["Demandez : taux mensuel ou annuel ? Forfaitaire ou sur capital restant dû ?", "Additionnez intérêts, frais et assurance pour avoir le total remboursé.", "Demandez quelle garantie ou caution est exigée.", "Placez les dates de remboursement dans votre plan de trésorerie.", "Demandez un différé ou un remboursement à la récolte si besoin.", "Vérifiez que le prêteur est agréé ; lisez tout le contrat."],
          words: [["Taux forfaitaire", "des intérêts calculés sur la totalité du montant emprunté pendant tout le prêt, même pendant que vous remboursez."], ["Capital restant dû", "des intérêts calculés seulement sur ce que vous devez encore (taux dégressif)."], ["Garantie", "un bien que le prêteur peut prendre si vous ne remboursez pas."], ["Différé de remboursement", "une période au début du prêt pendant laquelle vous n'avez pas à rembourser."], ["Garantie de crédit", "la promesse d'un tiers de couvrir une partie de la perte du prêteur si un emprunteur ne rembourse pas."]],
          slides: [
            { title: "Connaissez le taux", bullets: ["Mensuel ou annuel ?", "Forfaitaire : intérêts sur tout le montant tout le temps", "Capital restant dû : seulement sur ce que vous devez encore"] },
            { title: "Garanties et cautions", bullets: ["Titre foncier, équipement, épargne, caution du groupe", "NIRSAL (Nigeria) et GIRSAL (Ghana) soutiennent les prêteurs", "Vous devez toujours la totalité du prêt"] },
            { title: "Remboursements calés sur la récolte (exemple en KES)", bullets: ["A : 10 000 x 12 dès le mois prochain = 120 000", "B : 112 000 en une fois au mois 6, après la récolte", "B coûte moins et suit l'arrivée de l'argent"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Prenez deux offres de prêt réelles ou d'exemple. Pour chacune, écrivez le montant, le taux (mensuel ou annuel, forfaitaire ou sur capital restant dû), les frais, le total remboursé, la garantie et les mois de remboursement. Marquez les mois de remboursement dans votre plan de trésorerie et choisissez celle qui convient le mieux.",
          youCanNow: "comparer des offres de prêt selon le coût total, la garantie et le calendrier de remboursement, et choisir celle qui convient à votre récolte.",
          quickCheck: [
            { objective: "O3", q: "Deux prêts affichent le même chiffre, 2 % par mois. L'un est forfaitaire, l'autre sur capital restant dû. Lequel coûte en général moins ?", options: ["Le prêt à taux forfaitaire", "Ils coûtent toujours pareil", "Le prêt sur capital restant dû", "Ça dépend de la couleur du formulaire"], answer: 2, why: "Le taux sur capital restant dû ne compte que ce que vous devez encore, donc le total des intérêts est plus bas." },
            { objective: "O3", q: "Votre maïs se vend au mois 6. Quel plan de remboursement convient le mieux ?", options: ["Des remboursements chaque semaine dès la semaine 1", "Des remboursements chaque mois dès le mois prochain", "Des remboursements chaque jour", "Un différé avec remboursement après la récolte"], answer: 3, why: "Rembourser quand l'argent de la récolte arrive évite les retards de paiement et les ventes forcées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre besoin et l'argent le plus proche de vous",
        questions: [
          { objective: "O1", q: "Pourquoi lister séparément le fonds de roulement et l'équipement ?", options: ["Les prêteurs peuvent les traiter différemment car ils se remboursent sur des durées différentes", "Pour rallonger la liste", "L'équipement n'a jamais besoin de financement", "Il n'y a aucune raison"], answer: 0, why: "Le fonds de roulement revient en un cycle ; l'équipement se rembourse sur plusieurs années." },
          { objective: "O1", q: "Faut-il ajouter les frais de scolarité à une demande de prêt agricole ?", options: ["Oui, toujours", "Oui, si le prêteur ne pose pas la question", "Non, n'empruntez pour la ferme que ce que la ferme peut rembourser", "Seulement en saison sèche"], answer: 2, why: "Les dépenses du foyer ne rapportent pas, elles rendent donc le prêt agricole plus difficile à rembourser." },
          { objective: "O2", q: "Dans une AVEC typique, combien un membre peut-il en général emprunter ?", options: ["N'importe quel montant", "Jusqu'à environ trois fois son épargne", "Seulement sa propre épargne", "Dix fois son épargne"], answer: 1, why: "Les prêts d'une AVEC sont en général limités à environ trois fois l'épargne du membre." },
          { objective: "O2", q: "Quel organisme agrée les SACCO de dépôt au Kenya ?", options: ["Le KALRO", "Le KAMIS", "Le Service météorologique du Kenya", "La SASRA"], answer: 3, why: "La SASRA agrée et contrôle les SACCO de dépôt et en publie la liste." },
          { objective: "O3", q: "Vous empruntez 50 000 et remboursez 5 000 par mois pendant 12 mois, plus 2 000 de frais. Quel est le coût total du prêt ?", options: ["12 000", "60 000", "10 000", "2 000"], answer: 0, why: "Vous remboursez 60 000 + 2 000 = 62 000, soit 12 000 de plus que ce que vous avez emprunté." }
        ]
      }
    },
    {
      name: "Chapitre 2 : D'autres portes vers l'argent, et comment le demander",
      lessons: [
        {
          title: "Récépissés d'entrepôt et crédit en intrants",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lister les coûts, les obligations et les risques d'un prêt sur récépissé d'entrepôt et d'une offre de crédit en intrants.",
          text: [
            "Le financement par récépissé d'entrepôt (aussi appelé warrantage) : vous déposez une production propre, sèche et classée dans un entrepôt certifié. Elle est pesée et contrôlée, et vous recevez un récépissé qui prouve que vous possédez cette quantité et cette qualité. Une banque partenaire peut vous prêter sur ce récépissé : vous avez de l'argent tout de suite et pouvez vendre plus tard, quand les prix seront peut-être meilleurs ; le prêt est remboursé avec la vente. Au Kenya, le Warehouse Receipt System Council (conseil du système de récépissés d'entrepôt) certifie les entrepôts. Au Ghana, la Bourse des matières premières du Ghana et ARB Apex Bank ont lancé en 2019 des prêts sur récépissés d'entrepôt électroniques, et en 2023 une société d'épargne et de crédit s'y est jointe pour proposer des prêts garantis par la production que les agriculteurs remboursent après la vente. Demandez au prêteur quelle part de la valeur de la production il prête et pour combien de temps.",
            "Coûts et risques : frais de stockage et de manutention, assurance, intérêts et transport. Si les prix baissent au lieu de monter, la vente peut ne pas couvrir le prêt et les frais. La production doit respecter la qualité exigée, donc un mauvais séchage ou un mauvais tri fait baisser sa valeur. Calculez le prix dont vous avez besoin avec la méthode du prix d'équilibre du stockage du cours sur la gestion des risques.",
            "Le crédit en intrants : un acheteur, un transformateur, un système d'agriculture contractuelle ou une organisation vous fournit des semences, de l'engrais ou des poussins à crédit, souvent avec une formation, et vous remboursez en plusieurs fois ou le coût est retenu sur le paiement de votre récolte. One Acre Fund fonctionne ainsi avec des agriculteurs au Kenya, au Nigeria et dans d'autres pays. Vérifiez : le prix des intrants comparé au prix au comptant, tous les frais, ce qui est retenu à la récolte, si vous devez vendre seulement à eux, ce qui se passe si la récolte échoue, et la pénalité en cas de vente parallèle."
          ],
          steps: ["Récépissé d'entrepôt : trouvez un entrepôt certifié et ses prêteurs partenaires.", "Demandez les frais de stockage, de manutention, d'assurance et de prêt.", "Demandez combien vous pouvez emprunter sur la production et pour combien de temps.", "Calculez le prix de vente qu'il vous faut pour tout rembourser.", "Crédit en intrants : comparez le prix des intrants au prix au comptant et listez tous les frais.", "Demandez ce qui se passe si la récolte échoue et si vous devez vendre seulement à eux."],
          words: [["Récépissé d'entrepôt", "un document d'un entrepôt certifié qui prouve que vous possédez une production stockée d'une quantité et d'une qualité données."], ["Entrepôt certifié", "un magasin contrôlé et approuvé pour garder la production en sécurité et délivrer des récépissés."], ["Crédit en intrants", "des semences, de l'engrais ou d'autres intrants fournis maintenant et payés plus tard, souvent avec la récolte."], ["Agriculture contractuelle", "un accord où une entreprise fournit aux agriculteurs des intrants et des conseils et leur achète la récolte."]],
          slides: [
            { title: "Prêts sur récépissé d'entrepôt", bullets: ["Déposez une production classée ; recevez un récépissé", "Empruntez dessus ; vendez plus tard", "Kenya : WRS Council ; Ghana : entrepôts de la GCX"] },
            { title: "Coûts et risques", bullets: ["Stockage, manutention, assurance, intérêts", "Les prix peuvent baisser au lieu de monter", "La production doit respecter la qualité"] },
            { title: "Crédit en intrants", bullets: ["Intrants maintenant, remboursés en plusieurs fois ou à la récolte", "Acheteurs, transformateurs, agriculture contractuelle, One Acre Fund", "Comparez au prix au comptant ; listez tous les frais"] },
            { title: "Demandez avant de signer", bullets: ["Qu'est-ce qui est retenu à la récolte ?", "Devez-vous vendre seulement à eux ?", "Et si la récolte échoue ?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Choisissez soit un prêt sur récépissé d'entrepôt, soit une offre de crédit en intrants près de chez vous (ou un exemple). Écrivez au moins quatre conditions (coûts, montant, durée, retenues ou règles de vente) et deux risques, et dites s'il convient à votre ferme.",
          youCanNow: "expliquer comment fonctionnent les prêts sur récépissé d'entrepôt et le crédit en intrants et vérifier leurs coûts et leurs risques avant de signer.",
          quickCheck: [
            { objective: "O4", q: "Que prouve un récépissé d'entrepôt ?", options: ["Que vous possédez une quantité et une qualité données de production stockée", "Que vous avez payé vos impôts", "Que le prix va monter", "Que la banque a accepté un prêt"], answer: 0, why: "Le récépissé prouve que vous possédez une production classée et stockée, ce qu'un prêteur peut accepter." },
            { objective: "O4", q: "Un système de crédit en intrants retient le coût des intrants sur le paiement de votre récolte. Que devez-vous vérifier ?", options: ["Seulement la variété de semence", "Rien ; c'est l'entreprise qui décide", "Le prix des intrants par rapport au prix au comptant, tous les frais et ce qui se passe si la récolte échoue", "Seulement la date de la formation"], answer: 2, why: "Ces conditions décident combien vous payez vraiment et qui supporte une récolte ratée." }
          ]
        },
        {
          title: "Subventions, programmes pour les jeunes et comment éviter les arnaques",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier une subvention, un programme pour les jeunes ou une offre de prêt auprès d'une source officielle et repérer les signes d'une arnaque.",
          text: [
            "Les subventions n'ont pas à être remboursées, mais elles sont très demandées, ont des règles sur l'utilisation de l'argent et exigent des rapports. Beaucoup de \"fonds pour les jeunes\" sont en fait des prêts ou des formations. Exemples à vérifier : le programme ENABLE Youth de la Banque africaine de développement forme et soutient les jeunes agri-entrepreneurs dans plusieurs pays africains, avec des partenaires comme l'IITA (Institut international d'agriculture tropicale) ; le Youth Enterprise Development Fund (fonds de développement des entreprises de jeunes) du Kenya prête aux entreprises de jeunes, avec notamment un prêt Agri-Biz ; la DER/FJ du Sénégal finance des projets de femmes et de jeunes, y compris dans l'agriculture, surtout par le crédit. Les programmes ouvrent, ferment et changent leurs règles : vérifiez toujours sur le site ou au bureau officiel qu'un appel est ouvert maintenant avant de postuler.",
            "Les arnaques copient les noms et les logos de vrais programmes sur les réseaux sociaux et WhatsApp. Signaux d'alarme : vous devez payer des frais de \"dossier\" ou d'\"inscription\" avant de recevoir une subvention ou un prêt ; l'accord est \"garanti\" ; on vous presse ; on vous demande votre code PIN, un code à usage unique ou des photos de votre pièce d'identité par messagerie ; le contact utilise un numéro ou une adresse e-mail personnels ; ou une application de prêt veut accéder à tous vos contacts. Les vrais programmes ne font pas payer pour postuler et ne demandent jamais votre code PIN.",
            "Vérifiez chaque prêteur et chaque application de prêt : au Kenya, la Banque centrale du Kenya publie l'annuaire des prestataires de crédit numérique agréés et la SASRA la liste des SACCO agréées ; au Nigeria, la FCCPC (commission de la concurrence et de la protection des consommateurs) publie le registre des prêteurs numériques approuvés et la Banque centrale du Nigeria agrée les banques de microfinance ; dans les pays de la zone franc CFA, vérifiez auprès de la BCEAO ou de la structure nationale de la microfinance. En cas de doute, demandez à votre coopérative ou à votre agent de vulgarisation."
          ],
          steps: ["Trouvez le programme sur son site ou à son bureau officiel, pas dans une publication sur les réseaux sociaux.", "Vérifiez que l'appel est ouvert maintenant et lisez les règles.", "Ne payez jamais pour postuler ou pour recevoir une subvention.", "Ne donnez jamais votre code PIN, un code à usage unique ou vos mots de passe.", "Vérifiez les prêteurs et les applications de prêt sur la liste du régulateur.", "Demandez à votre coopérative ou à votre agent de vulgarisation en cas de doute."],
          words: [["Subvention", "de l'argent donné pour un but précis et qui n'a pas à être remboursé, en général avec des règles et des rapports."], ["Appel à candidatures", "un avis qui annonce qu'un programme reçoit des candidatures, avec une date d'ouverture et une date de clôture."], ["Arnaque", "une ruse pour voler de l'argent ou des informations."], ["Régulateur", "l'organisme officiel qui agrée et contrôle les prêteurs, les SACCO ou les assureurs."]],
          slides: [
            { title: "Subventions et programmes pour les jeunes", bullets: ["Subventions : pas à rembourser, mais très demandées et avec des règles", "Beaucoup de fonds pour les jeunes sont des prêts ou des formations", "Vérifiez sur le site officiel que l'appel est ouvert maintenant"] },
            { title: "Exemples à vérifier", bullets: ["ENABLE Youth de la BAD (avec l'IITA)", "Kenya : prêts du Youth Enterprise Development Fund", "Sénégal : DER/FJ pour les femmes et les jeunes"] },
            { title: "Signaux d'arnaque", bullets: ["Des frais pour postuler ou pour recevoir l'argent", "Accord \"garanti\" ; on vous presse", "Demande de PIN, de code ou de photos de pièce d'identité par messagerie"] },
            { title: "Vérifiez auprès du régulateur", bullets: ["Kenya : prêteurs numériques de la CBK ; SACCO de la SASRA", "Nigeria : applications de prêt à la FCCPC ; microfinance à la CBN", "Pays CFA : BCEAO ou structure nationale"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Trouvez une subvention, un programme pour les jeunes ou une application de prêt dont vous avez entendu parler. Vérifiez-le sur le site officiel ou sur la liste du régulateur, et écrivez : est-ce réel, est-ce ouvert maintenant, est-ce une subvention ou un prêt, et les signaux d'alarme que vous voyez.",
          youCanNow: "vérifier si une subvention, un programme ou un prêteur est réel et ouvert, et repérer les signaux d'alarme d'une arnaque.",
          quickCheck: [
            { objective: "O5", q: "Un message WhatsApp dit que vous avez gagné une subvention agricole et que vous devez payer 5 000 de frais de dossier. Qu'est-ce que c'est ?", options: ["Une étape normale d'une subvention", "Un signal d'alarme d'arnaque", "Une règle de l'État", "Le remboursement d'un prêt"], answer: 1, why: "Les vraies subventions ne vous font pas payer pour recevoir de l'argent." },
            { objective: "O5", q: "Au Nigeria, où vérifier si une application de prêt est approuvée ?", options: ["Dans la publicité de l'application", "Auprès d'un ami", "Avec le nombre de téléchargements", "Dans le registre des prêteurs numériques de la FCCPC"], answer: 3, why: "La FCCPC publie la liste des prêteurs numériques approuvés." }
          ]
        },
        {
          title: "Écrire une demande de financement d'une page",
          objectives: ["O6"],
          minutes: 6,
          goal: "Écrire une demande de financement d'une page pour votre ferme.",
          text: [
            "Une demande de financement dit à un prêteur, un programme ou un investisseur ce dont vous avez besoin, pourquoi, et comment ce sera remboursé ou rentable. Tenez-la sur une page avec des titres clairs : qui vous êtes et votre ferme (lieu, terres, activités, années d'expérience) ; l'objet et le montant (besoin total, votre apport personnel, l'écart que vous demandez, séparé en fonds de roulement et équipement) ; comment l'argent va rapporter (coût par unité, marge brute ou délai de récupération tirés de vos registres) ; le financement demandé et pourquoi il convient ; le plan de remboursement mois par mois, calé sur votre trésorerie ; les garanties ou cautions ; les risques et comment vous les gérez (assurance, contrats, diversification, stockage) ; et vos antécédents (registres tenus, prêts remboursés, appartenance à un groupe).",
            "Les investisseurs sont différents des prêteurs. Un investisseur apporte de l'argent contre une part de l'entreprise et de ses bénéfices futurs (des fonds propres, ou participation au capital), au lieu d'être remboursé avec des intérêts. Les investisseurs en fonds propres cherchent en général des entreprises en croissance, comme des transformateurs ou de grandes fermes avec des registres et une équipe. Vous cédez une partie de la propriété et un peu du contrôle, alors prenez un conseil juridique et ne signez jamais ce que vous ne comprenez pas.",
            "Avant de l'envoyer, vérifiez deux fois les chiffres, demandez à un responsable de coopérative, à un agent de vulgarisation ou à un conseiller de la relire, et joignez vos registres. Ne mettez jamais de mots de passe, de codes PIN ou de coordonnées bancaires complètes dans la demande ; donnez-les seulement par la procédure officielle du prêteur."
          ],
          steps: ["Qui vous êtes et votre ferme.", "Objet, besoin total, apport personnel et écart.", "Comment l'argent rapporte : coût par unité, marge ou délai de récupération.", "Type de financement et plan de remboursement mois par mois.", "Garanties ou cautions ; risques et comment vous les gérez.", "Antécédents ; vérifiez les chiffres et faites relire par un conseiller."],
          words: [["Demande de financement", "un court document qui demande de l'argent à un prêteur, un programme ou un investisseur, en montrant l'objet, le montant et le remboursement."], ["Fonds propres", "une part de propriété d'une entreprise qu'un investisseur reçoit en échange de son argent."], ["Antécédents", "la preuve de ce que vous avez déjà fait, comme les registres tenus et les prêts remboursés."]],
          slides: [
            { title: "Une page, des titres clairs", bullets: ["Qui vous êtes et votre ferme", "Objet, besoin total, argent personnel, l'écart", "Comment ça rapporte : coût par unité, marge, délai de récupération"] },
            { title: "Remboursement et garanties", bullets: ["Remboursement mois par mois, calé sur la trésorerie", "Garanties ou cautions", "Risques et comment vous les gérez"] },
            { title: "Les investisseurs sont différents", bullets: ["De l'argent contre une part de l'entreprise (fonds propres)", "Vous cédez une part de propriété et de contrôle", "Prenez d'abord un conseil juridique"] },
            { title: "Avant d'envoyer", bullets: ["Vérifiez deux fois les chiffres ; joignez les registres", "Faites relire par un conseiller", "Pas de PIN ni de mot de passe dans la demande"] }
          ],
          tryIt: "Tâche finale : écrivez votre demande de financement d'une page avec l'objet, le besoin total, l'apport personnel et l'écart, comment l'argent rapporte, le type de financement et pourquoi, un plan de remboursement mensuel, les garanties, les risques et vos antécédents. Demandez à une personne de confiance de la relire.",
          youCanNow: "écrire une demande de financement claire d'une page, appuyée sur vos propres chiffres, qu'un prêteur, un programme ou un investisseur peut évaluer.",
          quickCheck: [
            { objective: "O6", q: "Quel montant votre demande doit-elle demander ?", options: ["L'écart de financement après votre apport personnel", "Le coût total, sans compter votre argent", "Autant que le prêteur voudra donner", "Le double du coût total par sécurité"], answer: 0, why: "Demander l'écart montre votre engagement et garde le prêt aussi petit que possible." },
            { objective: "O6", q: "Que reçoit un investisseur en fonds propres pour son argent ?", options: ["Seulement des intérêts mensuels fixes", "Rien", "Une part de l'entreprise et de ses bénéfices futurs", "Votre titre foncier"], answer: 2, why: "Les fonds propres, c'est une part de propriété de l'entreprise." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : D'autres portes vers l'argent, et comment le demander",
        questions: [
          { objective: "O4", q: "Avec un prêt sur récépissé d'entrepôt, que se passe-t-il si les prix baissent au lieu de monter ?", options: ["La banque annule le prêt", "La vente peut ne pas couvrir le prêt et les frais", "L'entrepôt paie la différence", "Rien ne change"], answer: 1, why: "Vous devez toujours le prêt et les frais, quel que soit le prix." },
          { objective: "O4", q: "Quelle est une règle courante dans un système d'agriculture contractuelle ou de crédit en intrants ?", options: ["Vous ne remboursez jamais", "Vous devez vendre à tout le monde sauf à eux", "Les intrants sont toujours gratuits", "Le coût des intrants est retenu sur le paiement de votre récolte"], answer: 3, why: "Beaucoup de systèmes récupèrent le coût des intrants quand ils achètent votre récolte." },
          { objective: "O5", q: "Avant de postuler à un programme pour jeunes agri-entrepreneurs, vous devez d'abord :", options: ["Vérifier sur le site officiel que l'appel est ouvert maintenant", "Payer les frais d'inscription", "Envoyer votre code PIN aux organisateurs", "Le partager sur les réseaux sociaux"], answer: 0, why: "Les programmes ouvrent et ferment ; le site officiel montre ce qui est réel et actuel." },
          { objective: "O5", q: "Une application de prêt demande l'accès à tous les contacts de votre téléphone. C'est :", options: ["Une règle bancaire normale", "Exigé par la loi", "Un signal d'alarme ; vérifiez d'abord que l'application est agréée", "Le signe d'un bon prêteur"], answer: 2, why: "Les applications non agréées utilisent les listes de contacts pour humilier les emprunteurs ; vérifiez la liste du régulateur." },
          { objective: "O6", q: "Qu'est-ce qui a sa place dans une demande de financement d'une page ?", options: ["Votre code PIN de mobile money", "Un plan de remboursement mensuel calé sur votre trésorerie", "Seulement dix pages de photos", "Les dettes de vos voisins"], answer: 1, why: "Les prêteurs ont besoin de voir comment et quand vous rembourserez." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Financer votre ferme : prêts, subventions et investisseurs",
    questions: [
      { objective: "O1", q: "Besoin total 2 000 000 ; argent personnel 600 000. L'écart de financement est de :", options: ["2 600 000", "600 000", "1 400 000", "2 000 000"], answer: 2, why: "2 000 000 - 600 000 = 1 400 000." },
      { objective: "O1", q: "Le fonds de roulement, c'est de l'argent qui :", options: ["Paie un cycle de production et revient quand vous vendez", "Achète de la terre", "Paie les frais de scolarité", "N'est jamais remboursé"], answer: 0, why: "Il finance les intrants et la main-d'œuvre d'un cycle." },
      { objective: "O1", q: "Pourquoi placer chaque coût dans le mois où il est nécessaire ?", options: ["Les prêteurs aiment les longues listes", "Pour emprunter plus que nécessaire", "Ça ne change rien", "Pour avoir l'argent au bon moment et ne pas payer d'intérêts sur de l'argent qui dort"], answer: 3, why: "Un bon calendrier garde l'emprunt et les intérêts aussi bas que possible." },
      { objective: "O2", q: "À quelle fréquence une AVEC typique se réunit-elle ?", options: ["Une fois par an", "Chaque semaine", "Seulement au partage", "Jamais"], answer: 1, why: "Les réunions hebdomadaires sont le moment où les membres achètent des parts et remboursent les prêts." },
      { objective: "O2", q: "À quoi sert la caisse sociale d'une AVEC ?", options: ["À payer le président", "À acheter de la terre", "Aux urgences des membres", "Seulement aux fêtes"], answer: 2, why: "La caisse sociale aide les membres en cas d'urgence." },
      { objective: "O2", q: "Avant de rejoindre un groupe d'épargne, que devez-vous vérifier ?", options: ["Ses règles écrites, les frais des prêts et comment l'argent est gardé en sécurité", "Seulement qui est le président", "Seulement le lieu de réunion", "Rien"], answer: 0, why: "Des règles claires et un argent bien gardé protègent votre épargne." },
      { objective: "O3", q: "Un taux sur capital restant dû calcule les intérêts sur :", options: ["La totalité du montant pendant tout le prêt", "Rien", "Seulement les frais", "Seulement ce que vous devez encore"], answer: 3, why: "À mesure que vous remboursez, les intérêts baissent." },
      { objective: "O3", q: "Que fait un système de garantie de crédit comme le NIRSAL ?", options: ["Il annule les prêts des agriculteurs", "Il couvre une partie de la perte du prêteur si un emprunteur ne rembourse pas", "Il paie les intérêts des agriculteurs", "Il donne des subventions gratuites"], answer: 1, why: "Il protège les prêteurs pour qu'ils prêtent plus ; vous devez toujours la totalité du prêt." },
      { objective: "O3", q: "Qu'est-ce qu'une garantie ?", options: ["Votre culture préférée", "Un titre foncier ou un équipement que le prêteur peut prendre si vous ne remboursez pas", "Votre numéro de téléphone", "Un prix du marché"], answer: 1, why: "La garantie est la sécurité du prêteur." },
      { objective: "O3", q: "Offre A : rembourser 120 000 chaque mois dès le mois prochain. Offre B : rembourser 112 000 en une fois après la récolte. Pour un cultivateur, B :", options: ["Coûte plus et convient moins", "Est toujours illégale", "Coûte moins et se rembourse quand l'argent de la récolte arrive", "Est la même que A"], answer: 2, why: "Le total de B est plus bas et il est dû quand l'agriculteur a de l'argent." },
      { objective: "O4", q: "Où déposez-vous la production pour obtenir un récépissé d'entrepôt ?", options: ["Dans n'importe quelle boutique", "À la maison", "Chez un commerçant que vous venez de rencontrer", "Dans un entrepôt certifié"], answer: 3, why: "Seuls les entrepôts certifiés délivrent des récépissés acceptés par les prêteurs." },
      { objective: "O4", q: "Au Kenya, quel organisme certifie les entrepôts pour les récépissés d'entrepôt ?", options: ["Le Warehouse Receipt System Council", "Le KAMIS", "La NAFDAC", "Le Service météorologique du Kenya"], answer: 0, why: "Le WRS Council certifie et réglemente les entrepôts." },
      { objective: "O4", q: "Qu'est-ce que la vente parallèle ?", options: ["Vendre au bord de la route", "Vendre à quelqu'un d'autre une production promise à un acheteur", "Vendre à une coopérative", "Vendre par étapes"], answer: 1, why: "Elle rompt un accord de crédit en intrants ou un contrat et peut entraîner des pénalités." },
      { objective: "O5", q: "Un vrai programme de subventions :", options: ["Demande des frais avant de vous payer", "Demande votre code PIN", "Ne vous fait pas payer pour postuler", "Garantit l'accord à tout le monde"], answer: 2, why: "Les frais, les demandes de PIN et les garanties sont des signes d'arnaque." },
      { objective: "O5", q: "Le Youth Enterprise Development Fund du Kenya propose surtout :", options: ["De la terre gratuite", "Des prêts aux entreprises de jeunes", "Une assurance des cultures", "Des prévisions météo"], answer: 1, why: "Il accorde des prêts, dont un prêt Agri-Biz, et un appui aux entreprises." },
      { objective: "O5", q: "Où vérifier une application de prêt numérique au Kenya ?", options: ["Sur sa page de réseau social", "Avec son nombre d'étoiles", "Dans le groupe de discussion d'un ami", "Dans l'annuaire des prestataires de crédit numérique agréés de la Banque centrale du Kenya"], answer: 3, why: "La CBK agrée les prestataires de crédit numérique et publie leur liste." },
      { objective: "O6", q: "Quel titre montre à un prêteur comment l'argent va rapporter ?", options: ["Coût par unité, marge brute ou délai de récupération", "Votre couleur préférée", "Les noms de vos voisins", "Votre code PIN"], answer: 0, why: "Ces chiffres montrent que l'argent va créer un revenu pour rembourser." },
      { objective: "O6", q: "Dans une demande de financement, vos antécédents désignent :", options: ["Votre vitesse à la course", "La preuve de ce que vous avez fait, comme les registres tenus et les prêts remboursés", "Les contacts de votre téléphone", "Une liste de souhaits"], answer: 1, why: "Les résultats passés aident les prêteurs à faire confiance à votre plan." },
      { objective: "O6", q: "Avant d'envoyer une demande de financement, vous devez :", options: ["Ajouter votre code PIN pour aller plus vite", "Gonfler les chiffres", "Vérifier deux fois les chiffres et la faire relire par un conseiller", "L'envoyer à tous les numéros trouvés en ligne"], answer: 2, why: "Des chiffres vérifiés et un deuxième lecteur rendent la demande plus solide et plus sûre." },
      { objective: "O6", q: "Que cédez-vous quand vous acceptez des fonds propres d'un investisseur ?", options: ["Rien", "Votre place dans le groupe d'épargne", "Toute votre terre automatiquement", "Une partie de la propriété et un peu du contrôle de l'entreprise"], answer: 3, why: "Les fonds propres veulent dire que l'investisseur possède une part de l'entreprise." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie de la demande et vérifiez-la de nouveau.",
    criteria: [
      { name: "Besoin et écart de financement", objective: "O1", notYet: "Le montant est deviné, ou des dépenses du foyer sont mélangées.", meets: "Le besoin total, l'apport personnel et l'écart sont justes, séparés en fonds de roulement et équipement, avec les mois.", exceeds: "Inclut une petite marge et montre d'où vient chaque chiffre de coût." },
      { name: "Le bon type de financement", objective: "O2", notYet: "Aucune raison n'est donnée pour le type de financement choisi.", meets: "Nomme le type de financement (groupe, SACCO, prêt, récépissé d'entrepôt, crédit en intrants, subvention ou fonds propres) et pourquoi il convient.", exceeds: "Compare au moins deux options, dont l'épargne de groupe, et explique le choix." },
      { name: "Plan de remboursement", objective: "O3", notYet: "Pas de plan de remboursement, ou des remboursements avant tout revenu.", meets: "Remboursements mensuels avec le coût total, calés sur le plan de trésorerie et la récolte.", exceeds: "Montre ce qui se passe en mauvaise saison et comment les remboursements seraient quand même faits." },
      { name: "Garanties et conditions", objective: "O4", notYet: "Les garanties, les cautions ou les conditions principales manquent.", meets: "Les garanties ou cautions sont nommées, avec les conditions principales et deux risques.", exceeds: "Explique comment un récépissé d'entrepôt, un contrat ou une assurance réduit le risque du prêteur." },
      { name: "Vérifiée et sûre", objective: "O5", notYet: "Le prêteur ou le programme n'est pas vérifié, ou des informations privées comme un code PIN sont incluses.", meets: "Le prêteur ou le programme est vérifié sur un site officiel ou sur la liste du régulateur, et aucun code privé n'est inclus.", exceeds: "Note la date de vérification et que l'appel ou l'offre est ouvert maintenant." },
      { name: "Demande claire d'une page", objective: "O6", notYet: "Plus d'une page, ou l'objet, le montant ou la façon dont l'argent rapporte manque.", meets: "Une page qui couvre l'objet, le montant, l'apport personnel, la façon dont l'argent rapporte, le remboursement, les garanties, les risques et les antécédents.", exceeds: "Relue par un conseiller, avec les registres joints et ses remarques prises en compte." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent Atteint ou Dépasse sur toutes les lignes de la grille de la demande de financement",
      "Apprenants qui disent avoir rejoint un groupe d'épargne ou une SACCO, ou demandé un financement avec une demande écrite, dans les 30 jours (enquête de suivi)",
      "Apprenants qui disent avoir choisi un prêt remboursable après la récolte, ou emprunté moins que prévu au départ",
      "Apprenants qui disent avoir vérifié un prêteur, une application de prêt ou une offre de subvention sur une liste officielle, ou refusé une arnaque à la subvention payante",
      "Les coopératives ou prêteurs partenaires signalent des dossiers plus complets et moins de retards de remboursement chez les apprenants formés"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, et un téléphone simple avec une calculatrice",
      "Le plan de ferme, les registres et le plan de trésorerie de l'apprenant, ou les chiffres d'exemple du cours",
      "Des offres de prêt, des règles de groupes d'épargne et un dépliant de crédit en intrants ou de récépissé d'entrepôt de la région, réels ou d'exemple, si possible",
      "Environ 80 minutes en tout, en courtes séances, plus le temps d'écrire la demande de financement"
    ],
    facilitatorNotes: [
      "Dans un groupe d'agriculteurs ou une séance de vulgarisation : faites le test de départ ensemble, puis un chapitre par séance, avec les tâches \"Essayez maintenant\" en binômes.",
      "Invitez une SACCO, une AVEC ou un prêteur agréé à expliquer ses règles, mais ne soutenez aucun prêteur ; laissez les apprenants poser les questions de la leçon.",
      "Avant de parler d'une subvention ou d'un programme pour les jeunes, vérifiez sur son site officiel qu'il est ouvert ; ne transmettez jamais de liens venant des réseaux sociaux.",
      "Ne demandez jamais aux apprenants de partager des codes PIN, des mots de passe, des numéros d'identité ou des coordonnées bancaires pendant les exercices ; utilisez des exemples fictifs.",
      "Évaluez la demande de financement avec la grille et donnez un retour sur une ligne Pas encore à la fois ; encouragez les apprenants à la montrer à leur coopérative ou à leur prêteur."
    ]
  }
};
