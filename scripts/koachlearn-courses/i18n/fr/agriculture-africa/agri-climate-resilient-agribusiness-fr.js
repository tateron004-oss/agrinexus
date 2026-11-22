"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-climate-resilient-agribusiness.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_CSA = { name: "FAO : Guide de référence sur l'agriculture intelligente face au climat", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR : maïs intelligent face au climat (tolérant à la sécheresse)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Central Bank of Kenya, banque centrale du Kenya (listes des banques et banques de microfinance agréées)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria, banque centrale du Nigeria (institutions agréées et protection des consommateurs)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, banque agricole du Nigeria", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, banque de développement agricole du Ghana", url: "https://agricbank.com" };
const GCF = { name: "Green Climate Fund, Fonds vert pour le climat (passe par les États, les banques et les agences accréditées, pas directement par les agriculteurs)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, autorité de régulation des assurances du Kenya (vérifier qu'un assureur est agréé)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos : fiche du Africa Biogas Partnership Programme (biodigesteurs familiaux et bio-effluent)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO : Agroforesterie", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenya : The Climate Change (Carbon Markets) Regulations, 2024, règlement sur les marchés du carbone (résumé et texte complet)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Registre Verra (chercher un projet carbone par son nom ou son identifiant)", url: "https://registry.verra.org" };
const GOLD = { name: "Registre Gold Standard (chercher un projet carbone par son nom ou son identifiant)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-fr",
  lang: "fr",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Agrobusiness résilient face au climat",
  skills: "Évaluer le risque climatique en argent, Chiffrer les investissements d'adaptation, Trouver et vérifier un financement climatique, Réduire à la fois les coûts et les émissions, Repérer les arnaques aux crédits carbone, Rédiger un plan de résilience climatique",
  outcome: "rédiger un plan de résilience climatique d'une page pour votre exploitation : les risques climatiques qui vous coûtent le plus, les investissements d'adaptation que vous ferez et leur coût, comment vous les paierez, les pratiques qui économisent de l'argent que vous ajouterez, et comment vous jugerez toute offre de crédits carbone.",
  about: [
    "Ce cours s'adresse aux petits exploitants et aux agriculteurs commerciaux en croissance, aux jeunes agripreneurs, aux responsables de groupements et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, au Sénégal, en Côte d'Ivoire et partout en Afrique, qui voient déjà le changement climatique sur leurs terres et veulent le traiter comme un problème d'entreprise, avec un plan d'entreprise.",
    "Le chapitre 1 met le risque climatique en argent : vous évaluez les risques pour votre exploitation, vous choisissez et chiffrez des investissements d'adaptation comme les semences tolérantes à la sécheresse, le stockage de l'eau, l'ombrage et de nouvelles activités, et vous découvrez les types de financement climatique et de prêts verts, et comment les vérifier. Le chapitre 2 porte sur les pratiques qui réduisent à la fois les émissions et les coûts, les projets de crédits carbone et comment éviter les arnaques et les contrats injustes, et sur l'ajout de tout cela à votre plan d'entreprise.",
    "Le cours \"Agriculture intelligente face au climat\" traite des prévisions saisonnières et du calendrier des risques climatiques ; suivez-le d'abord si vous le pouvez. Tous les montants ici sont des exemples inventés : utilisez vos propres prix locaux. Ce cours explique comment fonctionnent le financement et les contrats ; il ne vous dit pas dans quoi investir. Lisez chaque contrat en entier et parlez à un conseiller de confiance avant de signer. Chaque leçon dure environ cinq minutes et se termine par une tâche sur votre propre exploitation."
  ],
  finalTask: "Rédigez un plan de résilience climatique d'une page pour votre exploitation (ou une exploitation d'exemple, comme 3 acres de maïs et de haricots avec 6 chèvres laitières à Makueni, 4 hectares de cacao dans la région Ouest du Ghana, ou 2 hectares de riz et d'arachide près de Kaolack, au Sénégal) : vos trois principaux risques climatiques avec un coût estimé pour chacun ; deux ou trois investissements d'adaptation avec leur coût, leur bénéfice par an et leur délai de récupération ; comment vous paierez (épargne, groupement, prêt, subvention) avec les questions que vous poserez au prêteur ; au moins deux pratiques qui réduisent les coûts et les émissions ; vos règles pour juger toute offre de crédits carbone ; et la date à laquelle vous revoirez le plan.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits exploitants et agriculteurs commerciaux en croissance, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation de toute l'Afrique (Kenya, Nigeria, Ghana et Afrique de l'Ouest francophone). Beaucoup ont des exploitations mixtes, cultures et élevage, et vendent une partie de leur production. Certains tiennent des registres simples ; beaucoup n'en tiennent pas.",
    startingPoint: "Ils savent nommer les changements du climat qu'ils voient (pluies tardives, poches de sécheresse, chaleur, inondations) et beaucoup connaissent quelques pratiques intelligentes face au climat. Peu mettent une valeur en argent sur le risque climatique, comparent les investissements d'adaptation selon leur délai de récupération, ou savent vérifier un prêt vert ou un contrat de crédits carbone.",
    gap: "Les chocs climatiques frappent les revenus et les remboursements de prêts, mais beaucoup d'agriculteurs dépensent pour s'adapter sans chiffrer, empruntent sans comparer le coût total, ou signent des contrats carbone qu'ils ne comprennent pas. Les apprenants doivent planifier leur résilience climatique comme une décision d'entreprise, se protéger des arnaques et présenter un plan crédible aux prêteurs, aux acheteurs et aux programmes.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants ont l'anglais comme deuxième langue et le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un téléphone simple ou un smartphone, du papier et une calculatrice ; internet peut être lent ou cher",
      "Temps : leçons de 4 à 6 minutes qui trouvent leur place entre les travaux des champs",
      "Argent : tous les montants sont des exemples ; aucun prix, taux d'intérêt ou subvention n'est donné comme un fait",
      "Sécurité financière : aucun conseil d'investissement ; les apprenants ne partagent jamais de code PIN, de pièce d'identité ni de numéro de compte dans les exercices"
    ],
    prerequisites: "Des registres simples et la marge brute aident (\"Agrobusiness et gestion de l'exploitation agricole\"). Il est conseillé de suivre d'abord \"Agriculture intelligente face au climat\" (prévisions et calendrier des risques climatiques)."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir des activités de votre exploitation et de ce qui s'est passé lors des cinq dernières saisons", action: "classer les principaux risques climatiques pour votre exploitation selon leur probabilité et l'argent qu'ils pourraient coûter", standard: "en notant au moins trois risques, chacun avec un coût estimé en monnaie locale" },
    { id: "O2", condition: "À partir de deux ou trois investissements d'adaptation possibles", action: "chiffrer chaque investissement et comparer son bénéfice par an à son coût", standard: "avec vos propres prix locaux et en montrant le délai de récupération en saisons ou en années" },
    { id: "O3", condition: "Avant de demander un prêt, une subvention ou un programme climatique ou vert", action: "noter les questions à poser au prêteur et vérifier qu'il est agréé", standard: "en couvrant le coût total, les dates de remboursement, les conditions et l'organisme qui le contrôle" },
    { id: "O4", condition: "À partir des pratiques que vous utilisez aujourd'hui", action: "repérer deux pratiques qui réduisent les émissions de gaz à effet de serre et aussi vos coûts", standard: "en nommant l'intrant ou l'argent que chacune fait économiser" },
    { id: "O5", condition: "Face à une offre ou un contrat de crédits carbone", action: "vérifier l'offre pour trouver les signes d'une arnaque ou d'un marché injuste", standard: "en répondant à au moins quatre contrôles avant de signer ou de payer quoi que ce soit" },
    { id: "O6", condition: "À partir de votre travail dans ce cours", action: "rédiger un plan de résilience climatique d'une page pour votre exploitation", standard: "avec les risques, les investissements, les coûts, le financement, les pratiques qui économisent de l'argent et une date de révision" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le risque climatique est un risque d'entreprise",
      lessons: [
        {
          title: "Évaluer les risques climatiques de votre exploitation",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classer les risques climatiques de votre exploitation selon leur probabilité et leur coût en argent.",
          text: [
            "Un calendrier des risques climatiques montre quand le temps fait du tort à votre exploitation. Une évaluation des risques climatiques va un pas plus loin : elle demande combien chaque risque pourrait coûter à votre entreprise, pour savoir où dépenser votre argent en premier.",
            "Pour chaque activité (maïs, tomates, chèvres, cacao, tilapia), notez les aléas climatiques : un démarrage tardif des pluies, une poche de sécheresse à la floraison, le stress thermique chez les animaux, les inondations, les vents forts, de nouveaux ravageurs. Posez deux questions pour chacun : quelle est sa probabilité dans les cinq prochaines saisons (faible, moyenne ou forte) ? Et s'il arrive, combien de revenu perdriez-vous ? Servez-vous de vos registres et demandez aux anciens ce qui s'est passé pendant les mauvaises années.",
            "Pensez ensuite à toute l'entreprise, pas seulement au champ : pouvez-vous encore rembourser un prêt en mauvaise année ? Les acheteurs prendront-ils encore vos produits si la qualité baisse ? Les ouvriers peuvent-ils venir à la ferme pendant les inondations ? Une poche de sécheresse qui fait passer le maïs de 40 sacs à 25 n'est pas seulement un problème de rendement ; c'est aussi un problème de trésorerie.",
            "Mettez les risques dans un tableau simple et classez-les. Les risques à la fois probables et coûteux vont en haut de votre plan."
          ],
          steps: ["Notez vos activités.", "Sous chacune, notez les aléas climatiques tirés de votre expérience et de votre calendrier des risques.", "Indiquez la probabilité de chaque aléa : faible, moyenne ou forte.", "Estimez l'argent perdu s'il arrive, dans votre monnaie.", "Classez : d'abord les risques probables et coûteux.", "Ajoutez les effets sur l'entreprise : remboursement des prêts, contrats avec les acheteurs, main-d'œuvre, transport."],
          words: [["Évaluation des risques climatiques", "une liste des aléas climatiques auxquels votre entreprise fait face, de leur probabilité et de ce qu'ils pourraient coûter."], ["Aléa", "un événement qui peut faire des dégâts, comme une sécheresse, une inondation ou une vague de chaleur."], ["Probabilité", "la chance qu'une chose arrive."], ["Impact", "les dégâts ou la perte d'argent causés par un événement."]],
          slides: [
            { title: "Du calendrier au coût", bullets: ["Calendrier : quand le temps fait du tort", "Évaluation : combien cela coûte à votre entreprise", "Dépensez d'abord pour les plus gros risques"] },
            { title: "Deux questions par aléa", bullets: ["Quelle probabilité dans les cinq prochaines saisons ?", "Combien de revenu perdu s'il arrive ?", "Servez-vous des registres et de la mémoire des anciens"] },
            { title: "Pensez au-delà du champ", bullets: ["Remboursements de prêts en mauvaise année", "Contrats avec les acheteurs et qualité", "Main-d'œuvre, transport, stockage"] },
            { title: "Classez les risques", bullets: ["Probable + coûteux = en haut du plan", "Exemple : une sécheresse fait passer 40 sacs à 25", "C'est aussi un problème de trésorerie"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Faites un tableau de quatre colonnes : aléa, probabilité (faible, moyenne, forte), argent perdu estimé et effet sur l'entreprise. Remplissez au moins trois aléas pour votre propre exploitation et entourez le plus important.",
          youCanNow: "classer les risques climatiques de votre exploitation selon leur probabilité et ce qu'ils pourraient coûter.",
          quickCheck: [
            { objective: "O1", q: "Quel risque va en haut du plan des risques climatiques d'une exploitation ?", options: ["Un risque peu probable et peu coûteux", "Un risque probable qui coûterait cher", "Un risque qui ne touche que le voisin", "Un risque arrivé une seule fois il y a 40 ans"], answer: 1, why: "Les risques à la fois probables et coûteux font le plus de tort à l'entreprise, donc ils passent en premier." },
            { objective: "O1", q: "Une poche de sécheresse réduit la récolte de maïs d'une agricultrice et elle ne peut pas rembourser son prêt à temps. Que montre cet exemple ?", options: ["Le risque climatique ne touche que les rendements", "La météo ne touche jamais les prêts", "Le risque climatique touche aussi la trésorerie et les remboursements", "L'agricultrice devrait arrêter de tenir des registres"], answer: 2, why: "Une évaluation des risques climatiques regarde toute l'entreprise, y compris la trésorerie et les dettes." }
          ]
        },
        {
          title: "Choisir et chiffrer les investissements d'adaptation",
          objectives: ["O2"],
          minutes: 6,
          goal: "Chiffrer deux investissements d'adaptation et comparer leur délai de récupération.",
          text: [
            "Un investissement d'adaptation, c'est de l'argent ou du travail que vous dépensez maintenant pour perdre moins pendant les mauvaises années. Les plus courants en Afrique sont les semences tolérantes à la sécheresse ou à cycle court (des centres du CGIAR, le réseau international de recherche agricole, comme le CIMMYT ont sélectionné du maïs tolérant à la sécheresse), le stockage de l'eau (citernes, bassins bâchés), les arbres d'ombrage pour le cacao, le café ou les animaux, de meilleurs abris pour les animaux, et la diversification : ajouter une deuxième culture, des chèvres, des volailles ou des poissons pour qu'une mauvaise saison ne vous ruine pas.",
            "Pour chaque option, notez le coût (achat, construction, main-d'œuvre, entretien) et le bénéfice par an (récolte en plus en mauvaise année, moins d'aliments achetés, un nouveau revenu). Calculez ensuite le délai de récupération : le coût divisé par le bénéfice par an donne à peu près le nombre d'années avant que l'investissement se rembourse. N'oubliez pas que certains bénéfices n'arrivent que les mauvaises années : faites-en la moyenne sur plusieurs saisons.",
            "Exemple avec des chiffres inventés : un agriculteur de Machakos compare une citerne à KES 60 000 qui fait économiser environ KES 20 000 par an en eau achetée et en légumes perdus (récupération en 3 ans environ), avec une semence tolérante à la sécheresse qui coûte KES 2 000 de plus par acre et fait économiser environ KES 8 000 en année sèche, qui revient une année sur deux (en moyenne KES 4 000 par an, récupération dès la première saison). Les deux peuvent valoir la peine ; la semence coûte moins cher pour commencer.",
            "Vérifiez aussi : pouvez-vous l'entretenir ? Cela convient-il à votre main-d'œuvre et à votre terre ? Est-ce utile aussi en bonne année ? Demandez à votre agent de vulgarisation quelles variétés et quels modèles conviennent à votre zone."
          ],
          steps: ["Prenez votre risque principal de la leçon 1.", "Notez deux ou trois investissements qui le réduisent.", "Écrivez le coût complet de chacun : achat, construction, main-d'œuvre, entretien.", "Estimez le bénéfice par an, en moyenne sur les bonnes et les mauvaises années.", "Délai de récupération = coût ÷ bénéfice par an.", "Vérifiez la main-d'œuvre, l'entretien et l'adaptation avec l'agent de vulgarisation."],
          words: [["Investissement d'adaptation", "de l'argent ou du travail dépensé maintenant pour perdre moins quand le climat frappe."], ["Délai de récupération", "le temps qu'il faut pour que l'argent économisé ou gagné grâce à un investissement couvre son coût."], ["Diversification", "avoir plus d'une source de revenu pour qu'un échec ne ruine pas l'entreprise."]],
          slides: [
            { title: "Investissements d'adaptation courants", bullets: ["Semences tolérantes à la sécheresse ou à cycle court", "Stocker l'eau : citernes, bassins bâchés", "Arbres d'ombrage, meilleurs abris pour les animaux", "Nouvelles activités : chèvres, volailles, poissons"] },
            { title: "Coût et bénéfice", bullets: ["Coût : achat, construction, main-d'œuvre, entretien", "Bénéfice : pertes évitées, nouveaux revenus", "Moyenne des bénéfices des mauvaises années"] },
            { title: "Récupération (exemple inventé en KES)", bullets: ["Citerne 60 000 ÷ 20 000 par an = environ 3 ans", "Semence +2 000 par acre ÷ 4 000 par an = dès la 1re saison", "Utilisez vos propres prix locaux"] },
            { title: "Avant de choisir", bullets: ["Pouvez-vous l'entretenir ?", "Cela convient-il à votre terre et à votre main-d'œuvre ?", "Demandez à la vulgarisation ce qui convient à votre zone"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Pour votre risque principal, chiffrez deux investissements d'adaptation avec vos propres prix locaux. Écrivez le coût, le bénéfice moyen par an et le délai de récupération de chacun, puis entourez celui par lequel vous commenceriez et dites pourquoi.",
          youCanNow: "chiffrer des investissements d'adaptation et les comparer selon leur délai de récupération.",
          quickCheck: [
            { objective: "O2", q: "Un filet d'ombrage coûte GHS 3 000 et fait économiser environ GHS 1 000 par an en tomates perdues. Quel est le délai de récupération approximatif ?", options: ["3 mois", "1 an", "10 ans", "Environ 3 ans"], answer: 3, why: "Le délai de récupération est le coût divisé par le bénéfice par an : 3 000 ÷ 1 000 = environ 3 ans (chiffres d'exemple)." },
            { objective: "O2", q: "Une semence tolérante à la sécheresse n'aide que les années sèches, qui reviennent environ une année sur trois. Comment comptez-vous son bénéfice ?", options: ["En faisant la moyenne de l'économie de l'année sèche sur toutes les années", "En comptant l'économie de l'année sèche chaque année", "En ne comptant aucun bénéfice", "En ne le comptant que les années humides"], answer: 0, why: "Les bénéfices qui n'arrivent que les mauvaises années se comptent en moyenne sur les bonnes et les mauvaises années." }
          ]
        },
        {
          title: "Financement climatique et prêts verts",
          objectives: ["O3"],
          minutes: 5,
          goal: "Noter les questions à poser avant de prendre un prêt climatique ou vert, et vérifier que le prêteur est agréé.",
          text: [
            "Le financement climatique, c'est de l'argent destiné à s'adapter au changement climatique ou à réduire les émissions. Les grands fonds, comme le Green Climate Fund (Fonds vert pour le climat), ne prêtent pas directement aux agriculteurs ; ils passent par les États, les banques et les agences. Ce qui arrive aux agriculteurs prend souvent la forme : de prêts verts ou climatiques des banques, des banques de microfinance et des SACCO (pour des citernes, des pompes solaires, des kits de goutte-à-goutte, du biogaz) ; de paiements échelonnés proposés par les fournisseurs d'équipement ; de programmes de l'État ou d'ONG qui partagent le coût des semences, des citernes ou des arbres ; et de subventions ou de fonds de contrepartie pour les groupements et les coopératives.",
            "Où demander : votre banque ou votre SACCO, votre coopérative, le service de l'agriculture de votre comté, de votre État ou de votre région et votre agent de vulgarisation, et les banques agricoles comme la Bank of Agriculture au Nigeria ou l'Agricultural Development Bank au Ghana. Les programmes changent souvent : demandez ce qui est ouvert maintenant et obtenez les détails par écrit.",
            "L'étiquette verte ne rend pas un prêt bon marché ni sûr. Comparez le coût total (intérêts, frais, assurance), les dates de remboursement (tombent-elles après votre récolte ?), ce qui se passe si la récolte échoue, et les conditions (fournisseurs agréés, formation, assurance). Vérifiez que le prêteur est agréé : au Kenya sur les listes de la Central Bank of Kenya, au Nigeria auprès de la Central Bank of Nigeria, ailleurs auprès de votre banque centrale ou du service qui contrôle les coopératives.",
            "Ne payez jamais de \"frais de dossier\" à un intermédiaire pour obtenir une subvention ou un prêt, et ne donnez jamais votre code PIN ni votre code de mobile money."
          ],
          steps: ["Décidez ce que l'argent va acheter et son délai de récupération (leçon 2).", "Demandez à votre banque, votre SACCO, votre coopérative et au service de l'agriculture ce qui est ouvert maintenant.", "Obtenez par écrit le coût total, les dates de remboursement et les conditions.", "Cherchez le prêteur sur la liste de la banque centrale ou de l'organisme de contrôle.", "Demandez : que se passe-t-il si ma récolte échoue ?", "Parlez à un conseiller de confiance avant de signer."],
          words: [["Financement climatique", "de l'argent pour s'adapter au changement climatique ou réduire les émissions."], ["Prêt vert", "un prêt pour quelque chose qui aide l'environnement, comme une pompe solaire ou un biodigesteur."], ["SACCO", "une coopérative d'épargne et de crédit qui appartient à ses membres."], ["Paiement échelonné", "payer un équipement par petites sommes régulières, souvent par mobile money."]],
          slides: [
            { title: "Comment l'argent du climat arrive aux agriculteurs", bullets: ["Prêts verts : banques, microfinance, SACCO", "Équipement en paiement échelonné", "Programmes à coût partagé et subventions aux groupements"] },
            { title: "Où demander", bullets: ["Votre banque, SACCO ou coopérative", "Service de l'agriculture et agent de vulgarisation", "Banques agricoles, ex. Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Vert ne veut pas dire bon marché", bullets: ["Coût total : intérêts + frais + assurance", "Remboursements calés sur votre récolte ?", "Et si la récolte échoue ?"] },
            { title: "Restez prudent", bullets: ["Prêteur agréé ? Vérifiez les listes de la banque centrale", "Ne payez jamais de \"frais de dossier\" à un intermédiaire", "Ne donnez jamais votre code PIN"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Écrivez cinq questions que vous poserez à un prêteur ou à un programme sur l'investissement choisi à la leçon 2. Incluez le coût total, les dates de remboursement, les conditions, ce qui se passe si la récolte échoue, et comment vous vérifierez qu'il est agréé.",
          youCanNow: "noter les questions à poser sur un prêt climatique ou vert et vérifier que le prêteur est agréé.",
          quickCheck: [
            { objective: "O3", q: "Un intermédiaire dit que vous recevrez une subvention climatique si vous envoyez d'abord KES 3 000 de frais de dossier. Que devez-vous faire ?", options: ["Payer vite avant la fin de la subvention", "Envoyer la moitié maintenant et la moitié plus tard", "Refuser ; les vrais programmes ne font pas encaisser de tels frais par des intermédiaires", "Donner plutôt votre code PIN de mobile money à l'intermédiaire"], answer: 2, why: "Les \"frais de dossier\" payés d'avance à des intermédiaires sont une arnaque courante ; vérifiez le programme auprès du bureau officiel." },
            { objective: "O3", q: "Quelle question compte le plus pour comparer deux prêts verts pour une pompe solaire ?", options: ["Lequel a le plus beau logo", "Le coût total et si les remboursements tombent après votre récolte", "Quel intermédiaire est le plus aimable", "Lequel s'appelle vert"], answer: 1, why: "Le coût total et les dates de remboursement décident si vous pouvez payer le prêt, quelle que soit son étiquette." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le risque climatique est un risque d'entreprise",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'une évaluation des risques climatiques ajoute à un calendrier des risques climatiques ?", options: ["Le nom des mois", "La prévision des pluies", "La probabilité de chaque risque et ce qu'il pourrait coûter à l'entreprise", "Une liste de cultures à abandonner"], answer: 2, why: "L'évaluation donne à chaque risque une probabilité et un coût en argent pour pouvoir les classer." },
          { objective: "O1", q: "Les inondations coupent chaque année la route vers votre acheteur pendant deux semaines. Où notez-vous cela ?", options: ["Nulle part ; cela ne touche pas le rendement", "Dans les effets sur l'entreprise de votre évaluation des risques climatiques", "Seulement dans votre carnet personnel", "Dans le plan de l'acheteur, pas le vôtre"], answer: 1, why: "Les risques climatiques pour le transport, les acheteurs et la main-d'œuvre sont des risques d'entreprise et vont dans l'évaluation." },
          { objective: "O2", q: "Un pisciculteur de tilapia au Nigeria étudie une bâche d'étang à NGN 400 000 qui fait économiser NGN 200 000 par an. Quel est le délai de récupération ?", options: ["Environ 2 ans", "Environ 20 ans", "Environ 2 mois", "Il ne se rembourse jamais"], answer: 0, why: "400 000 ÷ 200 000 = environ 2 ans (chiffres d'exemple)." },
          { objective: "O2", q: "Quel est un exemple de diversification comme investissement d'adaptation ?", options: ["Semer la même variété de maïs sur plus de terre", "Vendre toutes vos chèvres", "Emprunter plus pour la même culture", "Ajouter des volailles à une exploitation de maïs pour qu'une mauvaise saison ne vous ruine pas"], answer: 3, why: "Une deuxième source de revenu répartit le risque climatique sur l'entreprise." },
          { objective: "O3", q: "Comment un agriculteur au Kenya peut-il vérifier qu'un prêteur qui propose un prêt vert est agréé ?", options: ["En demandant à l'intermédiaire du prêteur", "En consultant les listes des institutions agréées de la Central Bank of Kenya", "En regardant ses \"j'aime\" sur les réseaux sociaux", "En lui faisant confiance s'il se dit \"vert\""], answer: 1, why: "La banque centrale publie les listes des banques et des banques de microfinance agréées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Réduire les coûts, le carbone et planifier",
      lessons: [
        {
          title: "L'atténuation qui fait aussi économiser de l'argent",
          objectives: ["O4"],
          minutes: 5,
          goal: "Repérer deux pratiques de votre exploitation qui réduisent à la fois les émissions et les coûts.",
          text: [
            "L'atténuation, c'est réduire les gaz à effet de serre qu'une exploitation rejette, ou stocker plus de carbone dans le sol et les arbres. Pour un agriculteur, la meilleure atténuation est celle qui fait aussi économiser de l'argent, car vous y gagnez même si personne ne vous paie pour le carbone.",
            "Moins d'engrais gaspillé : l'engrais perdu avec la pluie, le vent ou au mauvais moment, c'est de l'argent perdu, et il rejette aussi des gaz. Le placer près des racines au bon moment, et ajouter du fumier et du compost, donne plus de récolte par sac. Le biogaz : un biodigesteur familial transforme la bouse de vache ou le lisier de porc en gaz de cuisine, ce qui réduit les dépenses en bois ou en charbon, et le bio-effluent qui reste est un engrais. L'Africa Biogas Partnership Programme (programme de partenariat pour le biogaz en Afrique) a aidé à installer des biodigesteurs familiaux au Kenya, au Burkina Faso et dans d'autres pays.",
            "L'agroforesterie : les arbres sur l'exploitation stockent du carbone et peuvent donner des fruits, du fourrage, du bois de feu, du bois d'œuvre et de l'ombre (par exemple les arbres d'ombrage dans le cacao en Côte d'Ivoire et au Ghana), ce qui réduit vos achats. Autres économies : ne pas brûler les résidus de culture (garde les éléments nutritifs et économise de l'engrais), mieux nourrir les animaux (plus de lait par animal) et les pompes solaires au lieu du diesel (coût de fonctionnement plus bas).",
            "Écrivez l'économie en argent. Si un biodigesteur coûte XOF 500 000 et fait économiser XOF 120 000 par an en charbon et en engrais (chiffres inventés), vous pouvez calculer son délai de récupération comme pour tout autre investissement."
          ],
          steps: ["Notez les intrants que vous achetez le plus : engrais, carburant, aliments, bois de feu.", "Pour chacun, trouvez une pratique qui en utilise moins ou le remplace.", "Estimez l'argent économisé par an.", "Vérifiez le coût et le délai de récupération.", "Choisissez-en deux pour commencer."],
          words: [["Atténuation", "réduire les émissions de gaz à effet de serre, ou stocker plus de carbone dans le sol et les arbres."], ["Biodigesteur", "une cuve fermée où les déjections se décomposent et produisent du biogaz pour cuisiner ou s'éclairer."], ["Bio-effluent", "le liquide qui reste après la production de biogaz ; il peut servir d'engrais."], ["Agroforesterie", "cultiver des arbres avec des cultures ou des animaux sur la même terre."]],
          slides: [
            { title: "L'atténuation qui rapporte", bullets: ["Réduit les émissions ou stocke du carbone", "Réduit aussi vos coûts", "Vous gagnez même sans paiement pour le carbone"] },
            { title: "Trois sources d'économie", bullets: ["Moins d'engrais perdu : bon endroit, bon moment", "Biogaz : gaz de cuisine + engrais (bio-effluent)", "Agroforesterie : fruits, fourrage, bois, ombre"] },
            { title: "Autres économies", bullets: ["Ne brûlez pas les résidus", "Meilleure alimentation : plus de lait par animal", "Pompage solaire au lieu du diesel"] },
            { title: "Mettez-le en argent", bullets: ["Exemple : biodigesteur à XOF 500 000", "Économise XOF 120 000 par an (inventé)", "Récupération en 4 ans environ"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Notez les trois intrants pour lesquels vous dépensez le plus. Pour chacun, écrivez une pratique qui en utiliserait moins et estimez l'argent économisé par an. Choisissez-en deux pour votre plan.",
          youCanNow: "repérer les pratiques qui réduisent à la fois les émissions et les coûts, et mettre l'économie en argent.",
          quickCheck: [
            { objective: "O4", q: "Quelle pratique réduit les émissions et fait aussi économiser de l'argent à un éleveur de porcs ?", options: ["Brûler le lisier à l'air libre", "Acheter plus de charbon", "Laisser le lisier en tas au bord de la rivière", "Un biodigesteur qui produit du gaz de cuisine et un engrais (bio-effluent)"], answer: 3, why: "Le biogaz remplace le combustible acheté et le bio-effluent remplace une partie de l'engrais." },
            { objective: "O4", q: "Pourquoi réduire le gaspillage d'engrais est-il un bon choix d'atténuation pour un agriculteur ?", options: ["Il fait économiser de l'argent en plus de réduire les émissions", "Il durcit le sol", "Il veut dire qu'on n'a plus jamais besoin de fertiliser", "Tous les acheteurs l'exigent"], answer: 0, why: "Moins de gaspillage, c'est plus de récolte par sac : l'agriculteur économise de l'argent et émet moins." }
          ]
        },
        {
          title: "Crédits carbone : occasions, arnaques et contrats injustes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier une offre de crédits carbone pour trouver les signaux d'alerte avant de signer ou de payer quoi que ce soit.",
          text: [
            "Un crédit carbone est un certificat qui dit qu'une tonne de dioxyde de carbone a été gardée hors de l'air ou stockée, par exemple en plantant des arbres, en restaurant des terres ou en utilisant des foyers de cuisson propres. Des entreprises achètent ces crédits. Certains projets paient des agriculteurs ou des communautés pour des pratiques qui stockent du carbone. Les vrais projets sont enregistrés auprès d'un standard comme Verra ou Gold Standard, et on peut chercher dans leurs registres par le nom du projet.",
            "Soyez très prudent. Les paiements carbone sont souvent petits, lents (parfois des années après le début) et incertains, et les frais de mesure et de vérification sont retirés en premier. Les arnaques et les marchés injustes sont courants : des gens qui demandent aux agriculteurs de payer pour \"adhérer\", promettent de gros paiements rapides, ou font signer de longs contrats qui cèdent les droits sur votre terre, vos arbres ou votre carbone pour 20 ans ou plus.",
            "Signaux d'alerte : il faut payer pour adhérer ; on promet de gros paiements rapides ; vous ne pouvez pas emporter le contrat pour le lire ; il n'est pas dans une langue que vous comprenez ; il donne à quelqu'un des droits sur votre terre ou vos arbres, ou vous interdit de les couper ou de les vendre ; il ne dit pas combien vous recevez, quand, et quelle part garde le promoteur ; le projet n'est dans aucun registre.",
            "Certains pays ont maintenant des règles. Au Kenya, The Climate Change (Carbon Markets) Regulations, 2024 (le règlement sur les marchés du carbone) exige l'approbation des projets carbone et, pour les projets sur des terres communautaires, un accord de développement communautaire sur le partage des bénéfices. Renseignez-vous sur les règles de votre pays auprès du ministère de l'Environnement. Ne signez jamais le jour même ; lisez tout, demandez l'avis de votre coopérative, d'un juriste ou d'un conseiller de confiance, et gardez une copie."
          ],
          steps: ["Demandez : quel est le nom du projet et son identifiant dans le registre ?", "Cherchez-le dans le registre (Verra, Gold Standard ou autres).", "Demandez combien vous serez payé, quand, et quelle part garde le promoteur.", "Lisez quels droits sur la terre, les arbres ou le carbone vous cédez, et pour combien de temps.", "Refusez tous frais d'adhésion.", "Emportez le contrat ; demandez conseil avant de signer ; gardez une copie."],
          words: [["Crédit carbone", "un certificat pour une tonne de dioxyde de carbone gardée hors de l'air ou stockée."], ["Promoteur de projet carbone", "l'entreprise qui gère un projet carbone et vend les crédits."], ["Registre", "une liste publique officielle des projets carbone et de leurs crédits."], ["Partage des bénéfices", "la façon dont l'argent des crédits est réparti entre le promoteur, les agriculteurs et la communauté."]],
          slides: [
            { title: "Ce qu'est un crédit carbone", bullets: ["1 tonne de CO2 gardée hors de l'air ou stockée", "Des entreprises les achètent", "Les vrais projets sont dans un registre (Verra, Gold Standard)"] },
            { title: "La réalité", bullets: ["Paiements souvent petits, lents et incertains", "Les frais de mesure passent en premier", "Certaines offres sont des arnaques"] },
            { title: "Signaux d'alerte", bullets: ["Frais d'adhésion ; gros gains rapides promis", "Impossible d'emporter le contrat pour le lire", "Droits sur votre terre ou vos arbres pendant des décennies", "Pas d'identifiant de registre ; pas de part claire"] },
            { title: "Protégez-vous", bullets: ["Kenya : Carbon Markets Regulations 2024", "Renseignez-vous auprès du ministère de l'Environnement", "Jamais de signature le jour même ; conseil ; copie"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Écrivez une liste d'au moins cinq questions que vous poserez avant d'adhérer à tout projet de crédits carbone. Imaginez ensuite qu'un intermédiaire propose à votre groupement XOF 50 000 par agriculteur si vous signez aujourd'hui et payez XOF 5 000 pour vous inscrire : cochez les signaux d'alerte que montre cette offre.",
          youCanNow: "vérifier une offre de crédits carbone pour trouver les signes d'une arnaque ou d'un contrat injuste.",
          quickCheck: [
            { objective: "O5", q: "Un intermédiaire du carbone demande à chaque agriculteur NGN 10 000 pour adhérer et promet un paiement le mois prochain. De quoi s'agit-il le plus probablement ?", options: ["D'un projet enregistré normal", "D'une subvention de l'État", "D'une arnaque ou d'une offre très injuste", "D'une formation gratuite"], answer: 2, why: "Les frais d'adhésion et les grosses promesses rapides sont des signes classiques d'arnaque au carbone." },
            { objective: "O5", q: "Que devez-vous chercher dans un contrat carbone avant de signer ?", options: ["Combien vous recevez, quand, et quels droits sur la terre ou les arbres vous cédez et pour combien de temps", "Seulement la couleur du logo", "Si l'intermédiaire est aimable", "Rien, si le projet concerne des arbres"], answer: 0, why: "Le paiement, les délais et les droits sur votre terre ou vos arbres décident si le marché est juste." }
          ]
        },
        {
          title: "Ajouter le risque climatique à votre plan d'entreprise",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Rédiger un plan de résilience climatique d'une page pour votre exploitation.",
          text: [
            "Les prêteurs, les acheteurs et les programmes demandent de plus en plus comment une exploitation fera face aux chocs climatiques. Une courte partie sur le climat dans votre plan d'entreprise montre que vous y avez réfléchi, et vous aide à décider où va d'abord votre propre argent.",
            "Votre plan d'une page a six parties : 1. vos trois principaux risques climatiques avec leur probabilité et leur coût (leçon 1) ; 2. deux ou trois investissements d'adaptation avec coût, bénéfice et délai de récupération (leçon 2) ; 3. comment vous paierez : épargne, groupement, prêt ou programme, et vos questions pour le prêteur (leçon 3) ; 4. deux pratiques qui réduisent les coûts et les émissions (leçon 4) ; 5. vos règles pour toute offre carbone (leçon 5) ; 6. une date de révision après chaque saison.",
            "Ajoutez une ligne \"mauvaise année\" à votre plan de trésorerie : le revenu attendu si le risque principal frappe, et comment vous paierez quand même les prêts, les frais de scolarité et les intrants, par exemple avec l'épargne, une deuxième activité ou une assurance. Si vous prenez une assurance récolte ou bétail, vérifiez que l'assureur est agréé (au Kenya auprès de l'Insurance Regulatory Authority, l'autorité de régulation des assurances) et lisez le déclencheur de paiement.",
            "Vous pouvez demander à un assistant d'IA sur votre téléphone de mettre vos notes dans un tableau propre ou de vous poser des questions sur les trous de votre plan, mais les chiffres doivent venir de vos propres registres et de vos prix locaux. Ne tapez pas de numéros de pièce d'identité, de numéros de compte ni de codes PIN."
          ],
          steps: ["Recopiez votre tableau des risques de la leçon 1 : les trois principaux.", "Ajoutez vos deux ou trois investissements chiffrés.", "Écrivez comment vous paierez et vos questions pour le prêteur.", "Ajoutez deux pratiques d'atténuation qui économisent de l'argent.", "Écrivez vos règles pour les offres carbone.", "Ajoutez une ligne mauvaise année à la trésorerie et une date de révision."],
          words: [["Plan d'entreprise", "un court plan écrit de ce que fait votre exploitation, ses coûts, ses revenus et ses objectifs."], ["Scénario de mauvaise année", "un plan de ce qui arrive aux revenus et aux paiements si le risque principal frappe."], ["Déclencheur de paiement", "l'événement, comme une faible pluie mesurée à une station, qui fait payer une police d'assurance."]],
          slides: [
            { title: "Pourquoi ajouter le climat au plan", bullets: ["Prêteurs et acheteurs demandent comment vous ferez face", "Montre où va d'abord votre argent"] },
            { title: "Six parties, une page", bullets: ["Risques, investissements et récupération", "Comment vous paierez", "Pratiques économes, règles carbone", "Date de révision"] },
            { title: "Prévoir une mauvaise année", bullets: ["Revenu si le risque principal frappe", "Comment payer quand même prêts et frais", "Assurance : assureur agréé, déclencheur clair"] },
            { title: "L'IA range, elle ne décide pas", bullets: ["Demandez-lui un tableau ou de repérer les trous", "Les chiffres viennent de vos registres", "Pas de pièce d'identité, de numéro de compte ni de code PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Tâche finale : rédigez votre plan de résilience climatique d'une page avec les six parties et une ligne mauvaise année dans la trésorerie. Lisez-le à un membre de la famille, du groupement ou à l'agent de vulgarisation, et demandez-lui une question à laquelle vous n'avez pas répondu.",
          youCanNow: "rédiger un plan de résilience climatique d'une page pour votre exploitation, lisible par un prêteur, un acheteur ou un programme.",
          quickCheck: [
            { objective: "O6", q: "Quelle partie MANQUE dans ce plan : risques, investissements chiffrés, comment payer, pratiques d'atténuation, règles carbone ?", options: ["La culture préférée de l'agriculteur", "Une liste de voisins", "La météo de demain", "Une date de révision"], answer: 3, why: "Un plan a besoin d'une date de révision pour être mis à jour après chaque saison." },
            { objective: "O6", q: "Que montre une ligne mauvaise année dans votre plan de trésorerie ?", options: ["Combien vous gagnerez la meilleure année", "Comment vous paierez quand même les prêts et les coûts si le risque principal frappe", "Le prix de l'engrais l'an dernier", "Combien d'ouvriers vous connaissez"], answer: 1, why: "Elle vérifie si l'entreprise survit au choc que vous avez classé le plus probable et le plus coûteux." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Réduire les coûts, le carbone et planifier",
        questions: [
          { objective: "O4", q: "Un caféiculteur plante des arbres d'ombrage qui donnent aussi des fruits et du bois de feu. De quoi s'agit-il ?", options: ["D'agroforesterie qui fait économiser de l'argent et stocke du carbone", "De brûlage des résidus", "D'une arnaque au carbone", "D'un excès d'engrais"], answer: 0, why: "Les arbres associés aux cultures stockent du carbone et donnent des produits que l'agriculteur devrait sinon acheter." },
          { objective: "O4", q: "Laquelle N'EST PAS une pratique d'atténuation qui fait économiser de l'argent ?", options: ["Placer l'engrais près des racines au bon moment", "Brûler les résidus de culture après la récolte", "Utiliser un biodigesteur pour le gaz de cuisine", "Mieux nourrir les vaches pour plus de lait par vache"], answer: 1, why: "Brûler les résidus gaspille les éléments nutritifs et rejette des gaz ; les autres réduisent les coûts et les émissions." },
          { objective: "O5", q: "Comment vérifier qu'un projet carbone est réel ?", options: ["Demander à l'intermédiaire s'il est réel", "Compter les gens à la réunion", "Le chercher par son nom ou son identifiant dans un registre comme Verra ou Gold Standard", "Regarder la voiture de l'intermédiaire"], answer: 2, why: "Les vrais projets figurent dans des registres publics tenus par les standards carbone." },
          { objective: "O5", q: "Un contrat carbone vous interdit de couper ou de vendre vos propres arbres pendant 30 ans. Que devez-vous faire ?", options: ["Signer ; les arbres, c'est de l'argent gratuit", "Signer maintenant et lire plus tard", "Demander à l'intermédiaire de lire les bons passages", "L'emporter, demander conseil et ne signer que si vous comprenez et acceptez ces conditions"], answer: 3, why: "De longues limites sur votre terre et vos arbres sont graves ; lisez tout et demandez d'abord un conseil de confiance." },
          { objective: "O6", q: "Pourquoi un plan de résilience climatique doit-il avoir une date de révision ?", options: ["Les prêteurs aiment les dates", "Les risques, les prix et les résultats changent, donc le plan est mis à jour à chaque saison", "Cela rend la page plus longue", "La loi exige des révisions"], answer: 1, why: "Le revoir après chaque saison garde le plan en accord avec ce qui s'est vraiment passé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Agrobusiness résilient face au climat",
    questions: [
      { objective: "O1", q: "Une évaluation des risques climatiques pose deux questions sur chaque aléa. Lesquelles ?", options: ["Quelle est sa probabilité, et combien coûterait-il ?", "Qui l'a causé, et quand a-t-il commencé ?", "Quelle radio l'a annoncé, et à quelle heure ?", "Est-ce une bonne nouvelle, et est-ce juste ?"], answer: 0, why: "La probabilité et le coût en argent permettent de classer les risques." },
      { objective: "O1", q: "Où trouver les pertes passées pour estimer le coût d'un risque ?", options: ["Seulement auprès d'un intermédiaire du carbone", "Dans un résultat de loterie", "Dans vos registres et dans la mémoire des anciens sur les mauvaises années", "Dans le prix d'un téléphone"], answer: 2, why: "Les registres et la mémoire locale montrent ce que les mauvaises années ont vraiment coûté." },
      { objective: "O1", q: "Le stress thermique fait baisser la ponte dans votre poulailler de pondeuses presque chaque année. Comment le classez-vous ?", options: ["Probabilité faible, sans coût", "Ce n'est pas un risque climatique", "Seulement un problème d'aliment", "Probabilité forte, avec un coût en argent dû aux œufs perdus"], answer: 3, why: "Il arrive presque chaque année et coûte des œufs : il est donc probable et coûteux." },
      { objective: "O2", q: "Qu'est-ce que le délai de récupération ?", options: ["Les intérêts d'un prêt", "Le temps avant que les économies ou les gains d'un investissement couvrent son coût", "Le prix de la semence", "Un remboursement du magasin"], answer: 1, why: "Délai de récupération = coût ÷ bénéfice par an." },
      { objective: "O2", q: "Qu'est-ce qui fait partie du coût d'une citerne ?", options: ["L'achat, la construction, la main-d'œuvre et l'entretien", "Seulement le prix en magasin", "Seulement le transport", "Rien, si c'est un cadeau"], answer: 0, why: "Le coût complet comprend tout ce qu'il faut pour la construire et la garder en état." },
      { objective: "O2", q: "Lequel est un investissement d'adaptation contre les poches de sécheresse ?", options: ["Vendre la pompe à eau", "Semer plus tard chaque année sans raison", "Des semences tolérantes à la sécheresse ou à cycle court", "Brûler les résidus"], answer: 2, why: "Les variétés tolérantes à la sécheresse et à cycle court réduisent les pertes pendant les poches de sécheresse." },
      { objective: "O2", q: "Deux investissements donnent le même bénéfice. L'un coûte moins cher et s'entretient facilement. Par lequel commencez-vous en général ?", options: ["Le plus cher", "Aucun", "Les deux à crédit en même temps", "Le moins cher, que vous pouvez entretenir"], answer: 3, why: "Un coût plus bas et un entretien facile donnent une récupération plus rapide et plus sûre." },
      { objective: "O3", q: "Comment les grands fonds climatiques arrivent-ils en général aux agriculteurs ?", options: ["Par les banques, les États et les agences, sous forme de prêts et de programmes", "En envoyant de l'argent sur le téléphone de chaque agriculteur", "Par des intermédiaires du carbone qui font payer des frais", "Ils n'arrivent jamais aux agriculteurs"], answer: 0, why: "Des fonds comme le Green Climate Fund passent par les États, les banques et les agences accréditées." },
      { objective: "O3", q: "Avant de prendre un prêt vert, quelle est la question clé ?", options: ["Le chargé de prêt est-il aimable ?", "Quel est le coût total et les remboursements tombent-ils après ma récolte ?", "Le mot \"vert\" est-il dans son nom ?", "Le bureau est-il près du marché ?"], answer: 1, why: "Le coût total et les dates de remboursement décident si vous pouvez payer." },
      { objective: "O3", q: "Au Nigeria, où vérifier qu'un prêteur est agréé ?", options: ["Dans un groupe WhatsApp", "Auprès de l'intermédiaire du prêteur", "Auprès de la Central Bank of Nigeria", "Sur une affiche au marché"], answer: 2, why: "La Central Bank of Nigeria contrôle les institutions agréées et en publie la liste." },
      { objective: "O3", q: "Quelqu'un propose d'\"accélérer\" votre subvention climatique contre des frais payés sur son numéro de mobile money. De quoi s'agit-il ?", options: ["D'un signal d'alerte d'arnaque", "D'une étape normale", "D'une règle de l'État", "De frais de coopérative"], answer: 0, why: "Les vrais programmes ne vous demandent pas de payer des intermédiaires pour accélérer une subvention." },
      { objective: "O4", q: "Qu'est-ce que l'atténuation ?", options: ["Déménager sur une autre exploitation", "Une assurance contre la sécheresse", "Vendre la récolte plus tôt", "Réduire les émissions de gaz à effet de serre ou stocker plus de carbone"], answer: 3, why: "L'atténuation réduit les émissions ou stocke du carbone dans le sol et les arbres." },
      { objective: "O4", q: "Qu'est-ce que le bio-effluent ?", options: ["Un pesticide", "Le liquide qui reste après la production de biogaz, utilisé comme engrais", "Un carburant vendu en boutique", "Une maladie du bétail"], answer: 1, why: "Le bio-effluent d'un biodigesteur peut nourrir le sol." },
      { objective: "O4", q: "Quelle pratique fait économiser de l'argent ET réduit les émissions dans un élevage laitier ?", options: ["Mieux nourrir chaque vache pour qu'elle donne plus de lait", "Brûler la bouse", "Acheter plus de vaches que l'aliment ne le permet", "Laisser le pâturage à nu"], answer: 0, why: "Plus de lait par animal grâce à une meilleure alimentation, c'est moins de coûts et d'émissions par litre." },
      { objective: "O5", q: "Qu'est-ce qu'un crédit carbone ?", options: ["Un prêt pour des semences", "Une remise sur l'engrais", "Un certificat pour une tonne de CO2 gardée hors de l'air ou stockée", "Un bonus de mobile money"], answer: 2, why: "Chaque crédit représente une tonne de dioxyde de carbone évitée ou stockée." },
      { objective: "O5", q: "Lequel est un signal d'alerte dans une offre carbone ?", options: ["Le projet a un identifiant de registre que vous pouvez vérifier", "Vous pouvez emporter le contrat chez vous pour le lire", "Les paiements et les parts sont écrits clairement", "Vous devez payer des frais pour adhérer"], answer: 3, why: "Les frais d'adhésion sont un signe classique d'arnaque." },
      { objective: "O5", q: "Au Kenya, de quoi ont besoin les projets carbone sur des terres communautaires ?", options: ["De rien du tout", "D'un accord de développement communautaire sur le partage des bénéfices", "D'une simple promesse orale", "D'un prêt de l'intermédiaire"], answer: 1, why: "Le règlement kényan Carbon Markets Regulations, 2024 exige un accord de développement communautaire pour ces projets." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans un plan de résilience climatique d'une page ?", options: ["Les principaux risques, les investissements chiffrés, comment payer, les pratiques économes, les règles carbone et une date de révision", "Seulement le nom de l'exploitation", "Votre code PIN de mobile money", "La liste de tous les jours de pluie de l'an dernier"], answer: 0, why: "Ces six parties forment un plan complet et utilisable." },
      { objective: "O6", q: "Comment un assistant d'IA sur votre téléphone peut-il aider pour votre plan ?", options: ["Il peut inventer vos prix", "Il devrait garder votre code PIN bancaire", "Il peut ranger vos notes dans un tableau et signaler les trous", "Il signe les formulaires de prêt pour vous"], answer: 2, why: "L'IA peut organiser et poser des questions, mais les chiffres viennent de vos registres." },
      { objective: "O6", q: "Votre plan montre que vous ne pourrez pas rembourser un prêt si une poche de sécheresse arrive. Que faites-vous ?", options: ["L'ignorer", "Le cacher au prêteur", "Emprunter plus", "Changer le plan : un prêt plus petit, l'épargne, une deuxième activité ou une assurance"], answer: 3, why: "La ligne mauvaise année sert à changer le plan avant le choc, pas après." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et réessayez.",
    criteria: [
      { name: "Risques climatiques en argent", objective: "O1", notYet: "Les risques sont listés sans probabilité ni coût, ou il y en a moins de trois.", meets: "Trois risques, chacun avec sa probabilité et un coût estimé en monnaie locale.", exceeds: "Montre aussi les effets sur l'entreprise (prêts, acheteurs, main-d'œuvre) et d'où viennent les estimations." },
      { name: "Investissements chiffrés", objective: "O2", notYet: "Les investissements sont nommés mais pas chiffrés.", meets: "Deux ou trois investissements avec le coût complet, le bénéfice moyen par an et le délai de récupération.", exceeds: "Utilise de vrais devis locaux et explique par lequel commencer." },
      { name: "Financement et vérification du prêteur", objective: "O3", notYet: "Pas de plan pour payer, ou un prêteur non vérifié.", meets: "Dit comment payer et liste des questions sur le coût total, les dates de remboursement, les conditions et l'agrément.", exceeds: "A comparé deux options de financement et vérifié le prêteur sur la liste de l'organisme de contrôle." },
      { name: "Pratiques qui économisent de l'argent", objective: "O4", notYet: "Aucune pratique d'atténuation, ou une seule sans économie indiquée.", meets: "Deux pratiques qui réduisent les émissions, chacune avec l'intrant ou l'argent économisé.", exceeds: "Donne le délai de récupération de toute pratique qui demande une dépense, comme un biodigesteur." },
      { name: "Règles pour les offres carbone", objective: "O5", notYet: "Pas de règles, ou signerait ou paierait le jour même.", meets: "Au moins quatre contrôles : registre, paiement et part, droits sur la terre et les arbres, pas de frais, conseil avant de signer.", exceeds: "Nomme les règles ou le service national à consulter, comme les Carbon Markets Regulations du Kenya." },
      { name: "Plan complet d'une page", objective: "O6", notYet: "Des parties manquent ou il n'y a pas de date de révision.", meets: "Les six parties, une ligne mauvaise année dans la trésorerie et une date de révision, sur une page.", exceeds: "A été lu par un membre du groupement, l'agent de vulgarisation ou un conseiller, et mis à jour avec sa question." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui font au moins un investissement d'adaptation chiffré dans la saison suivante (enquête de suivi)",
      "Apprenants ou groupements qui demandent un financement avec un plan écrit et des questions pour le prêteur",
      "Arnaques au carbone ou au financement évitées selon les rapports, et moins de contrats signés sans conseil (rapports de vulgarisation ou des coopératives)",
      "Perte de revenu lors de la prochaine mauvaise saison comparée à la mauvaise saison précédente (déclarée par l'apprenant, par activité)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Du papier, un stylo et une calculatrice simple (ou celle du téléphone)",
      "Vos registres d'exploitation, ou une exploitation d'exemple de la tâche finale",
      "Les prix locaux des semences, citernes, intrants et carburant (auprès des vendeurs d'intrants ou de la coopérative)",
      "Un téléphone pour chercher les prêteurs et les registres (facultatif)",
      "Environ 90 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "À faire de préférence avec un groupement, une coopérative ou une Farmer Business School (école d'entreprise pour agriculteurs) : faites les leçons 1 et 2 avec les vrais registres de deux ou trois membres.",
      "Rassemblez de vrais devis locaux avant la séance ; ne présentez jamais les prix d'exemple comme des faits.",
      "Invitez un chargé de prêt d'une banque, d'une banque de microfinance ou d'une SACCO agréée pour répondre aux questions de la leçon 3, et vérifiez son agrément devant le groupe.",
      "Pour la leçon 5, apportez un exemple de contrat ou d'offre carbone (sans les noms) et cochez ensemble les signaux d'alerte. Ne soutenez aucun projet carbone.",
      "Ne donnez pas de conseil d'investissement ; rappelez aux apprenants de lire les contrats en entier et de parler à un conseiller de confiance.",
      "Notez le plan final avec la grille et faites un retour sur une ligne Pas encore à la fois."
    ]
  }
};
