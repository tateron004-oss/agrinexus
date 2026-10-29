"use strict";

// Koach Learn course (French translation of re-entry/reentry-housing-jobs.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-housing-jobs-fr",
  lang: "fr",
  translationOf: "reentry-housing-jobs",
  category: "Re-Entry",
  name: "Trouver un logement et un emploi de seconde chance",
  skills: "Trouver de l'aide au logement avec le 211, Demander un logement avec un casier, Préparer un dossier de location, Utiliser les American Job Centers, Trouver des employeurs de seconde chance, Expliquer le WOTC et le cautionnement fédéral à un employeur",
  outcome: "trouver un logement auquel vous pouvez postuler avec un casier, préparer un dossier de location, trouver des employeurs de seconde chance et de l'aide à l'emploi près de chez vous, et parler à un employeur des avantages à l'embauche qui viennent avec vous.",
  about: [
    "Un endroit sûr où vivre et un emploi stable sont les deux choses qui aident le plus après la sortie de prison. Les deux peuvent sembler hors de portée quand on a un casier, mais il existe des programmes, des règles et des employeurs prévus pour aider.",
    "Dans ce cours, vous utiliserez le 211 pour trouver une aide locale au logement, vous apprendrez les règles du logement public sur les casiers, vous préparerez un dossier de location qui répond aux inquiétudes d'un propriétaire, vous trouverez un American Job Center (centre public pour l'emploi), vous chercherez des employeurs de seconde chance, et vous verrez comment le Work Opportunity Tax Credit et le Federal Bonding Program peuvent rendre un employeur plus prêt à vous embaucher.",
    "Les règles changent et sont différentes dans chaque État et chaque ville. Chaque leçon montre où vérifier les règles actuelles. Pour les questions juridiques, demandez à l'aide juridique ou à un conseiller en réinsertion.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche à faire tout de suite. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites un plan d'une page pour le logement et l'emploi : deux options de logement avec leurs coordonnées et ce qu'il faut apporter, la liste de votre dossier de location, votre American Job Center le plus proche, trois employeurs de seconde chance ou pistes d'emploi, et une présentation de deux phrases qui parle à un employeur du Work Opportunity Tax Credit et du Federal Bonding Program.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui ont besoin d'un logement sûr et d'un emploi stable, souvent avec un casier qui rend les deux plus difficiles à obtenir. Certains sont en libération conditionnelle ou en mise à l'épreuve.",
    startingPoint: "Ils savent passer des appels et utiliser un téléphone simple. La plupart ne connaissent pas le 211, les règles du logement social sur les casiers, les dossiers de location, les American Job Centers, le Work Opportunity Tax Credit ou le Federal Bonding Program.",
    gap: "Le logement et l'emploi sont ce qui aide le plus après la sortie, mais beaucoup de personnes abandonnent après les premiers refus ou tombent dans des arnaques à la location. Les apprenants doivent trouver les programmes, les règles et les employeurs prévus pour les aider, et se présenter avec assurance et honnêteté.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes (fin d'école primaire environ)",
      "Appareils : un téléphone simple ou un smartphone, parfois un ordinateur de bibliothèque",
      "Temps : des leçons d'environ 5 minutes, à caser autour des rendez-vous et du travail",
      "Les règles varient selon l'État et la ville, et elles changent ; les questions juridiques vont à l'aide juridique ou à un conseiller en réinsertion",
      "Les conditions de libération conditionnelle ou de mise à l'épreuve peuvent limiter le lieu de vie ; vie privée : aucun numéro d'affaire dans les outils d'IA"
    ],
    prerequisites: "Aucun. Le cours « Les outils d'IA au quotidien » aide les apprenants qui veulent utiliser les cartes et les rappels pour aller à leurs rendez-vous."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec le 211 et les programmes de réinsertion", action: "lister des options de logement auxquelles vous pouvez postuler", standard: "avec le numéro de téléphone, le coût, les règles et ce qu'il faut apporter pour chacune" },
    { id: "O2", condition: "Face à un bailleur et aux règles sur les casiers", action: "expliquer ce que disent les règles sur les casiers et demander un examen juste de votre dossier", standard: "en demandant s'il existe une règle écrite et si vous pouvez fournir des preuves de réhabilitation" },
    { id: "O3", condition: "À partir des papiers que vous avez", action: "réunir un dossier de location et repérer les arnaques à la location", standard: "avec une liste des papiers et une courte lettre sur ce que vous avez fait depuis, et aucun paiement avant d'avoir vu le logement" },
    { id: "O4", condition: "Avec CareerOneStop ou le 211", action: "trouver votre American Job Center le plus proche et des pistes d'emploi de seconde chance", standard: "avec l'adresse, le téléphone, les horaires et des questions à poser lors de votre première visite" },
    { id: "O5", condition: "À partir du Work Opportunity Tax Credit et du Federal Bonding Program", action: "expliquer à un employeur comment ils peuvent l'aider à vous embaucher", standard: "en deux phrases, en ayant vérifié sur irs.gov si le WOTC est en vigueur" },
    { id: "O6", condition: "Face à une question sur votre casier en entretien", action: "y répondre brièvement et honnêtement", standard: "en disant ce qui s'est passé, ce que vous avez fait depuis et pourquoi vous êtes prêt, sans taper de numéro d'affaire dans l'IA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver un endroit où vivre",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vos options de logement et par où commencer",
          minutes: 5,
          goal: "Utiliser le 211 et les programmes de réinsertion pour lister trois options de logement auxquelles vous pouvez postuler.",
          text: [
            "La plupart des personnes qui rentrent chez elles passent par plusieurs types de logement : chez la famille, un foyer, un logement de transition ou de réinsertion, un logement sans alcool ni drogue (sober living), une chambre en location, et plus tard un appartement à soi. Chaque étape est normale. Le but est un endroit sûr maintenant et un meilleur endroit ensuite.",
            "Le 211 est le plus simple pour commencer. Vous pouvez appeler le 211 ou aller sur 211.org pour joindre un conseiller local qui vous met en contact avec de l'aide pour le logement, la nourriture, les factures d'énergie, la santé et plus encore. Les appels sont confidentiels. Dites que vous sortez de prison ou de détention et demandez des logements de réinsertion.",
            "Le logement public et les Housing Choice Vouchers (aides au loyer, souvent appelées Section 8) sont gérés par votre Public Housing Agency (PHA, office local du logement public). Les listes d'attente peuvent être longues ou fermées, alors inscrivez-vous tôt et gardez vos coordonnées à jour.",
            "Si vous êtes en libération conditionnelle (parole) ou en probation, votre agent devra peut-être approuver l'endroit où vous vivez. Demandez-lui avant de signer quoi que ce soit."
          ],
          steps: ["Appelez le 211 ou allez sur 211.org et demandez des logements de réinsertion et de transition.", "Demandez des listes de logements à un programme de réinsertion ou à votre agent de parole ou de probation.", "Trouvez votre Public Housing Agency locale et demandez comment vous inscrire sur ses listes d'attente.", "Notez trois options : nom, téléphone, coût, règles et ce qu'il faut apporter.", "Vérifiez avec votre agent que l'adresse est autorisée."],
          words: [["211", "un service gratuit et confidentiel, par téléphone et sur internet, qui vous met en contact avec de l'aide locale."], ["Logement de transition", "un logement de courte durée avec un accompagnement, souvent pour les personnes qui rentrent chez elles."], ["Public Housing Agency (PHA)", "l'office local qui gère le logement public et les aides au loyer."], ["Housing Choice Voucher", "une aide pour payer le loyer à un propriétaire privé, souvent appelée Section 8."]],
          slides: [
            { title: "Le logement, c'est une échelle", bullets: ["Famille, foyer, réinsertion ou sober living", "Une chambre, puis un appartement", "Sûr maintenant, mieux ensuite"] },
            { title: "Commencez par le 211", bullets: ["Appelez le 211 ou allez sur 211.org", "Aide locale et confidentielle", "Demandez des logements de réinsertion"] },
            { title: "Logement public et aides au loyer", bullets: ["Gérés par votre Public Housing Agency locale", "Les listes d'attente peuvent être longues : inscrivez-vous tôt", "Gardez vos coordonnées à jour"] },
            { title: "En parole ou en probation ?", bullets: ["Votre agent devra peut-être approuver l'adresse", "Demandez avant de signer"] }
          ],
          sources: [
            { name: "211 : Trouver de l'aide locale", url: "https://www.211.org/" },
            { name: "HUD : Programme de logement public", url: "https://www.hud.gov/topics/rental_assistance/phprog" }
          ],
          tryIt: "Appelez le 211 ou allez sur 211.org et demandez un logement de réinsertion ou de transition près de chez vous. Notez trois options avec le numéro de téléphone, le coût, les règles et ce que chacune vous demande d'apporter.",
          youCanNow: "utiliser le 211 et votre Public Housing Agency locale pour trouver des options de logement et lister ce que chacune demande.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un logement de transition ?", options: ["Un hôtel que l'on paie à la nuit", "Un logement de courte durée avec un accompagnement, souvent pour les personnes qui sortent de prison", "Une maison que l'on achète", "Un refuge ouvert seulement l'hiver"], answer: 1, why: "Un logement de transition est un logement de courte durée avec un accompagnement, le temps de vous installer." },
            { objective: "O1", q: "Vous êtes en libération conditionnelle et un ami vous propose une chambre. Que faites-vous avant d'emménager ?", options: ["Emménager ce soir", "Signer un bail tout de suite", "Vérifier que votre agent approuve l'adresse", "N'en parler à personne"], answer: 2, why: "Les conditions de libération conditionnelle peuvent limiter votre lieu de vie, donc vous vérifiez d'abord." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Demander un logement avec un casier",
          minutes: 6,
          goal: "Expliquer ce que disent les règles du logement sur les casiers et comment demander un examen juste de votre dossier.",
          text: [
            "Les règles fédérales obligent les offices de logement public à refuser quelques groupes : toute personne qui doit être inscrite à vie au registre des délinquants sexuels ; toute personne déjà condamnée pour avoir fabriqué de la méthamphétamine dans un logement aidé par l'État fédéral ; et, pendant trois ans, un foyer expulsé d'un logement aidé par l'État fédéral pour une activité liée à la drogue, sauf si la personne a fini un programme de désintoxication approuvé ou si la situation a changé. Ils peuvent aussi refuser une consommation actuelle de drogues illégales.",
            "Pour la plupart des autres casiers, l'office de logement décide selon sa propre politique écrite. Avant de vous refuser à cause d'un casier judiciaire, il doit vous prévenir, vous donner une copie du casier et vous laisser la possibilité de le contester. Il n'a pas le droit de vous faire payer la vérification du casier. Demandez sa politique, et demandez un réexamen si vous êtes refusé.",
            "Les propriétaires privés peuvent en général regarder les antécédents judiciaires. Le casier n'est pas une catégorie protégée par le Fair Housing Act fédéral (loi sur l'égalité dans le logement), et le HUD (ministère fédéral du Logement) a dit qu'il met fin à d'anciennes recommandations fédérales qui limitaient les vérifications des antécédents. Les lois des États et des villes peuvent mieux vous protéger. En Californie, les propriétaires ne peuvent pas utiliser les arrestations sans condamnation, les casiers sous scellés ou effacés, ni les casiers de mineurs ; ils ne peuvent pas refuser toutes les personnes qui ont un casier, et doivent montrer qu'une condamnation a un lien direct avec le fait d'être un bon locataire.",
            "Si vous pensez qu'un propriétaire en Californie n'a pas respecté ces règles, vous pouvez contacter le California Civil Rights Department (département des droits civiques de Californie), en général dans un délai d'un an. Dans les autres États, demandez à l'aide juridique ou à l'office des droits civiques de votre État."
          ],
          steps: ["Demandez à chaque organisme de logement sa politique écrite sur les casiers judiciaires.", "Lisez d'abord votre propre casier pour ne pas avoir de surprise.", "Apportez des preuves de réhabilitation avec votre demande.", "Si vous êtes refusé, demandez par écrit la raison, une copie du casier utilisé et un réexamen.", "Si vous pensez que la loi n'a pas été respectée, contactez l'aide juridique ou l'office des droits civiques de votre État."],
          words: [["Fair Housing Act", "la loi fédérale contre la discrimination dans le logement fondée sur la race, la couleur, l'origine nationale, la religion, le sexe, la situation familiale ou le handicap."], ["Catégorie protégée", "un groupe que la loi protège contre la discrimination."], ["Logement aidé par l'État fédéral", "un logement payé en partie par des programmes fédéraux, comme le logement public."], ["Réexamen informel (informal review)", "une réunion pour demander à un office de logement de revoir un refus."]],
          slides: [
            { title: "Logement public : refus obligatoires", bullets: ["Inscription à vie au registre des délinquants sexuels", "Fabrication de méthamphétamine dans un logement aidé", "Expulsion liée à la drogue : 3 ans, avec des exceptions"] },
            { title: "La plupart des autres casiers : la PHA décide", bullets: ["Demandez la politique écrite", "Ils doivent vous montrer le casier et vous laisser le contester", "Demandez un réexamen si vous êtes refusé"] },
            { title: "Propriétaires privés", bullets: ["Ils peuvent en général vérifier les casiers", "Les recommandations fédérales ont changé : voir hud.gov", "Les lois des États et des villes peuvent mieux vous protéger"] },
            { title: "Protections en Californie", bullets: ["Pas d'arrestations sans condamnation, de casiers sous scellés ou de mineurs", "Pas de refus général de toute personne avec un casier", "Plaintes : California Civil Rights Department"] }
          ],
          sources: [
            { name: "24 CFR 960.204 : Refus d'admission pour activité criminelle ou usage de drogue (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/24/960.204" },
            { name: "HUD : Présentation du Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
            { name: "California Civil Rights Department : Logement", url: "https://calcivilrights.ca.gov/housing/" }
          ],
          tryIt: "Appelez un organisme de logement de votre liste ou allez sur son site, et demandez : Avez-vous une politique écrite sur les casiers judiciaires ? Puis-je joindre des preuves de réhabilitation à ma demande ? Notez les réponses.",
          youCanNow: "expliquer les principales règles du logement sur les casiers, demander sa politique à un organisme de logement, et demander un réexamen si vous êtes refusé.",
          quickCheck: [
            { objective: "O2", q: "Qui gère le logement social et les Housing Choice Vouchers (aides au loyer) dans votre région ?", options: ["La Public Housing Agency (office local du logement social)", "Le commissariat de police", "Votre agent de libération conditionnelle", "L'IRS"], answer: 0, why: "Votre Public Housing Agency locale gère ces programmes et fixe ses propres règles." },
            { objective: "O2", q: "Vous voulez postuler auprès d'un bailleur mais votre casier vous inquiète. Que faites-vous ?", options: ["Ne pas parler du casier et espérer", "Abandonner et ne pas postuler", "Payer plus pour éviter la vérification", "Demander ses règles écrites et si vous pouvez ajouter des preuves de réhabilitation"], answer: 3, why: "Demander les règles et proposer des preuves aide à obtenir un examen juste." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Préparer un dossier de location",
          minutes: 5,
          goal: "Réunir un dossier de location qui répond aux inquiétudes d'un propriétaire avant qu'il pose la question.",
          text: [
            "Un propriétaire veut savoir trois choses : allez-vous payer à temps, allez-vous prendre soin du logement, et allez-vous bien vous entendre avec les voisins. Un dossier de location répond aux trois dans une seule chemise.",
            "Mettez-y : une pièce d'identité avec photo ; une preuve de revenus comme des fiches de paie, une lettre d'offre d'emploi ou une attestation d'aides ; des références d'un employeur, d'un travailleur social, d'un responsable de programme ou d'un responsable religieux ; les certificats des programmes que vous avez finis ; et une courte lettre sur votre casier qui dit ce qui s'est passé, ce que vous avez fait depuis, et pourquoi vous serez un bon locataire.",
            "Attention aux arnaques à la location. N'envoyez jamais d'argent par virement, carte cadeau ou application de paiement avant d'avoir vu le logement en personne et signé un bail. Méfiez-vous de toute offre qui semble trop bon marché ou qui vous presse.",
            "Sachez ce que vous pouvez payer. Beaucoup de programmes utilisent une règle simple : le loyer devrait être d'environ un tiers de vos revenus ou moins. Demandez tous les frais d'entrée : dépôt de garantie, premier mois et frais de dossier."
          ],
          steps: ["Prenez une chemise et faites des copies de votre pièce d'identité et de vos preuves de revenus.", "Demandez des lettres de référence à deux ou trois personnes.", "Ajoutez les certificats des programmes que vous avez finis.", "Écrivez une courte lettre sur votre casier, qui finit par la raison pour laquelle vous serez un bon locataire.", "Avant de payer quoi que ce soit, visitez le logement en personne et obtenez un bail écrit."],
          words: [["Dossier de location", "une chemise de papiers qui montre à un propriétaire que vous êtes un bon locataire."], ["Référence", "une personne qui peut dire du bien de vous."], ["Dépôt de garantie", "l'argent que vous payez avant d'entrer et que le propriétaire garde en cas de dégâts."], ["Bail", "le contrat de location écrit."]],
          slides: [
            { title: "Ce qui inquiète un propriétaire", bullets: ["Allez-vous payer à temps ?", "Allez-vous prendre soin du logement ?", "Allez-vous bien vous entendre avec les voisins ?"] },
            { title: "Votre dossier de location", bullets: ["Pièce d'identité avec photo et preuve de revenus", "Références et certificats de programmes", "Une courte lettre sur votre casier"] },
            { title: "Signes d'arnaque à la location", bullets: ["Payer avant de voir le logement", "Seulement par virement, carte cadeau ou application de paiement", "Trop bon marché, trop rapide"] },
            { title: "Connaissez vos chiffres", bullets: ["Loyer d'environ un tiers des revenus ou moins", "Demandez le dépôt, le premier mois et les frais"] }
          ],
          tryIt: "Commencez votre dossier de location. Faites une liste des papiers que vous avez et de ceux qu'il vous manque. Écrivez un premier brouillon de votre courte lettre : une phrase sur ce qui s'est passé, deux sur ce que vous avez fait depuis, et une sur pourquoi vous serez un bon locataire.",
          youCanNow: "préparer un dossier de location qui montre à un propriétaire que vous allez payer, prendre soin du logement et être un bon voisin, et repérer les arnaques à la location.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui a sa place dans un dossier de location ?", options: ["Des preuves de revenus et des lettres de recommandation", "Tout votre dossier judiciaire", "Le mot de passe de votre banque", "Une copie de votre carte de sécurité sociale pour n'importe qui"], answer: 0, why: "Les preuves de revenus et les recommandations répondent aux principales inquiétudes d'un propriétaire." },
            { objective: "O3", q: "Un propriétaire veut un dépôt de garantie par virement avant que vous ayez vu l'appartement. Que faites-vous ?", options: ["L'envoyer vite, avant que quelqu'un d'autre le fasse", "En envoyer la moitié", "Refuser et chercher un autre logement", "L'envoyer plutôt en carte cadeau"], answer: 2, why: "Demander un paiement avant que vous ayez vu le logement est un signe d'arnaque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver un endroit où vivre",
        questions: [
          { objective: "O1", q: "Vous venez de rentrer et vous avez besoin d'aide pour vous loger ce soir. Quelle est une bonne première étape ?", options: ["Attendre un mois", "Appeler le 211 ou aller sur 211.org", "Signer n'importe quel bail vu en ligne", "Envoyer un dépôt par carte cadeau"], answer: 1, why: "Le 211 vous met en contact avec de l'aide locale pour le logement et d'autres besoins." },
          { objective: "O2", q: "Qui gère le logement public et les Housing Choice Vouchers dans votre région ?", options: ["La Public Housing Agency locale", "La poste", "Votre banque", "Le DMV (service des permis de conduire)"], answer: 0, why: "Votre Public Housing Agency locale gère ces programmes et leurs listes d'attente." },
          { objective: "O2", q: "Avant de vous refuser à cause d'un casier judiciaire, un office de logement public doit :", options: ["Vous faire payer la vérification", "Le publier en ligne", "Vous prévenir, vous donner une copie du casier et la possibilité de le contester", "Appeler votre famille"], answer: 2, why: "Les règles exigent un avis, une copie du casier et la possibilité de le contester." },
          { objective: "O2", q: "En Californie, qu'est-ce qu'un propriétaire ne peut PAS utiliser contre vous ?", options: ["Vos revenus", "Vos références", "Votre historique de location", "Un casier sous scellés"], answer: 3, why: "La Californie interdit aux propriétaires d'utiliser les casiers sous scellés ou effacés, les arrestations sans condamnation et les casiers de mineurs." },
          { objective: "O3", q: "Un propriétaire vous demande de payer un dépôt par carte cadeau avant de voir l'appartement. Que faites-vous ?", options: ["Payer vite pour ne pas le perdre", "Payer la moitié", "Refuser : c'est un signal d'alerte d'arnaque", "Envoyer le mot de passe de votre banque"], answer: 2, why: "Payer par carte cadeau avant de voir le logement est une arnaque classique à la location." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver un emploi de seconde chance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les American Job Centers et les programmes d'emploi de réinsertion",
          minutes: 5,
          goal: "Trouver votre American Job Center le plus proche et un programme d'emploi de réinsertion, et savoir quoi leur demander.",
          text: [
            "Les American Job Centers sont des bureaux publics pour l'emploi présents dans tout le pays. Ils aident à chercher un emploi, à faire un CV, à se former, et parfois ils offrent une formation payée ou de l'aide pour des vêtements de travail et des outils. Vous pouvez trouver le plus proche sur CareerOneStop (careeronestop.org), un site du US Department of Labor (ministère fédéral du Travail), ou en appelant le 211.",
            "Le Department of Labor finance aussi des programmes d'emploi de réinsertion pour les adultes et les jeunes qui ont été incarcérés. Les associations de réinsertion, les community colleges (établissements d'enseignement supérieur de proximité) et certains syndicats proposent aussi des formations et des apprentissages.",
            "Pendant votre visite, demandez : Quelle formation est gratuite pour moi ? Travaillez-vous avec des employeurs qui embauchent des personnes avec un casier ? Pouvez-vous m'aider pour une lettre de cautionnement (bonding) ou les papiers du Work Opportunity Tax Credit ? Pouvez-vous m'aider pour des vêtements de travail, des outils ou un abonnement de bus ?"
          ],
          steps: ["Allez sur careeronestop.org et cherchez un American Job Center près de chez vous, ou appelez le 211.", "Demandez à un programme de réinsertion avec quels programmes d'emploi il travaille.", "Apportez votre pièce d'identité, votre CV si vous en avez un, et vos certificats.", "Posez les quatre questions de cette leçon et notez les réponses.", "Fixez une date pour votre prochaine visite."],
          words: [["American Job Center", "un bureau public gratuit qui aide les gens à trouver un emploi et une formation."], ["CareerOneStop", "un site du US Department of Labor pour l'emploi, la formation et pour trouver les centres pour l'emploi."], ["Apprentissage", "un emploi payé où vous apprenez un métier en travaillant."]],
          slides: [
            { title: "Les American Job Centers", bullets: ["Bureaux publics pour l'emploi dans tout le pays", "Recherche d'emploi, CV, formation", "Trouvez-en un sur careeronestop.org ou appelez le 211"] },
            { title: "Programmes d'emploi de réinsertion", bullets: ["Programmes de réinsertion du Department of Labor", "Associations de réinsertion et colleges", "Syndicats et apprentissages"] },
            { title: "Demandez-leur", bullets: ["Quelle formation est gratuite pour moi ?", "Quels employeurs embauchent des personnes avec un casier ?", "De l'aide pour le cautionnement ou les papiers du crédit d'impôt ?", "De l'aide pour des vêtements, des outils ou un abonnement de bus ?"] }
          ],
          sources: [
            { name: "CareerOneStop : Trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "US Department of Labor : Emploi et réinsertion", url: "https://www.dol.gov/agencies/eta/reentry" }
          ],
          tryIt: "Trouvez votre American Job Center le plus proche. Notez son adresse, son numéro de téléphone et ses horaires, et les quatre questions que vous poserez lors de votre première visite.",
          youCanNow: "trouver un American Job Center et un programme d'emploi de réinsertion, et leur demander l'aide dont vous avez besoin.",
          quickCheck: [
            { objective: "O4", q: "Que propose un American Job Center ?", options: ["Seulement des emplois payés au centre", "Une aide gratuite pour chercher un emploi, faire un CV et se former", "Des aides au loyer", "Des prêts pour acheter une voiture"], answer: 1, why: "Les American Job Centers aident gratuitement à chercher un emploi, à faire un CV et à se former." },
            { objective: "O4", q: "Vous allez pour la première fois dans un centre pour l'emploi. Quelle question posez-vous ?", options: ["Pouvez-vous effacer mon casier ?", "Combien coûtent vos services ?", "Puis-je éviter le formulaire de candidature ?", "Quels employeurs du coin embauchent des personnes avec un casier ?"], answer: 3, why: "Le personnel des centres pour l'emploi connaît souvent les employeurs de seconde chance du coin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Employeurs de seconde chance, WOTC et cautionnement fédéral",
          minutes: 6,
          goal: "Expliquer à un employeur comment le Work Opportunity Tax Credit et le Federal Bonding Program peuvent l'aider à vous embaucher.",
          text: [
            "Un employeur de seconde chance est une entreprise prête à embaucher des personnes qui ont un casier. Cherchez-les par les centres pour l'emploi, les programmes de réinsertion, les agences d'intérim qui travaillent avec la réinsertion, les syndicats de métiers, et les offres d'emploi qui disent fair chance ou second chance.",
            "Le Work Opportunity Tax Credit (WOTC) est un crédit d'impôt fédéral pour les employeurs, pas de l'argent versé à vous. Un des groupes concernés s'appelle qualified ex-felons : les personnes embauchées moins d'un an après une condamnation pour un crime grave (felony) ou après leur sortie de prison. L'employeur et vous remplissez le formulaire IRS Form 8850 au plus tard le jour de l'offre d'emploi, et l'employeur l'envoie à l'État dans les 28 jours après votre début. La page de l'IRS (le fisc américain) disait que le crédit couvrait les personnes qui ont commencé à travailler au plus tard le 31 décembre 2025. Vérifiez sur irs.gov s'il a été renouvelé avant d'en parler.",
            "Le Federal Bonding Program (programme fédéral de cautionnement) donne gratuitement aux employeurs une garantie de fidélité (fidelity bond), une sorte d'assurance contre le vol par un employé, pour les six premiers mois d'un emploi. Chaque garantie couvre jusqu'à $5,000 sans franchise, et vous n'avez aucun formulaire à remplir. Les personnes qui ont un casier font partie des groupes servis. C'est le coordinateur du cautionnement de votre État, indiqué sur bonds4jobs.com, qui s'en occupe.",
            "Beaucoup d'employeurs n'ont jamais entendu parler de ces programmes. Leur en parler montre que vous avez bien préparé, et cela réduit leur risque."
          ],
          steps: ["Faites une liste d'employeurs de seconde chance grâce aux centres pour l'emploi, aux programmes de réinsertion et aux offres d'emploi.", "Vérifiez sur irs.gov si le WOTC est en vigueur en ce moment.", "Trouvez le coordinateur du cautionnement de votre État sur bonds4jobs.com.", "Entraînez-vous à une présentation de deux phrases sur le WOTC et le cautionnement.", "Apportez le Form 8850 et les informations sur le cautionnement aux entretiens."],
          words: [["Employeur de seconde chance", "une entreprise prête à embaucher des personnes qui ont un casier."], ["Work Opportunity Tax Credit (WOTC)", "un crédit d'impôt fédéral pour les employeurs qui embauchent des personnes de certains groupes."], ["Fidelity bond (garantie de fidélité)", "une assurance qui protège un employeur contre les pertes dues au vol par un employé."], ["Form 8850", "le formulaire de l'IRS qui sert à lancer la démarche WOTC."]],
          slides: [
            { title: "Employeurs de seconde chance", bullets: ["Prêts à embaucher des personnes avec un casier", "Trouvez-les par les centres pour l'emploi et la réinsertion", "Cherchez fair chance ou second chance dans les offres"] },
            { title: "Work Opportunity Tax Credit", bullets: ["Un crédit d'impôt pour l'employeur, pas un salaire pour vous", "Pour les personnes embauchées moins d'un an après condamnation ou sortie", "Form 8850 au plus tard le jour de l'offre ; voir irs.gov"] },
            { title: "Federal Bonding Program", bullets: ["Garantie gratuite pour les six premiers mois", "Jusqu'à $5,000, sans franchise", "Organisée par le coordinateur de votre État"] },
            { title: "Pourquoi en parler à l'employeur", bullets: ["Beaucoup n'en ont jamais entendu parler", "Cela réduit leur risque", "Cela montre que vous avez bien préparé"] }
          ],
          sources: [
            { name: "IRS : Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "US Department of Labor : Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" },
            { name: "Federal Bonding Program : À propos", url: "https://bonds4jobs.com/about-us" }
          ],
          tryIt: "Écrivez votre présentation de deux phrases pour un employeur. Par exemple : Si vous m'embauchez, vous pourrez peut-être demander le Work Opportunity Tax Credit. Je peux aussi venir avec une garantie gratuite du Federal Bonding Program qui couvre mes six premiers mois. Puis trouvez le coordinateur du cautionnement de votre État sur bonds4jobs.com.",
          youCanNow: "trouver des employeurs de seconde chance et expliquer le WOTC et le cautionnement fédéral à un employeur avec des mots simples.",
          quickCheck: [
            { objective: "O5", q: "Qui reçoit le Work Opportunity Tax Credit ?", options: ["Le salarié", "Le bureau de libération conditionnelle", "L'employeur", "Le centre pour l'emploi"], answer: 2, why: "Le WOTC est un crédit d'impôt que l'employeur peut demander quand il vous embauche." },
            { objective: "O5", q: "Vous prévoyez de parler du WOTC à un employeur en entretien. Que faites-vous d'abord ?", options: ["Vérifier sur irs.gov s'il est en vigueur en ce moment", "Lui promettre un montant précis en dollars", "Demander à l'IA de remplir le formulaire 8850 avec vos informations", "Ne pas en parler, car les employeurs ne s'y intéressent jamais"], answer: 0, why: "Les règles du WOTC peuvent changer, donc vous vérifiez sur irs.gov avant d'en parler." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Postuler et répondre aux questions sur votre casier",
          minutes: 6,
          goal: "Postuler à un emploi de seconde chance et répondre avec assurance aux questions sur votre casier.",
          text: [
            "Postulez à plusieurs emplois chaque semaine. Tenez une liste simple avec l'employeur, le poste, la date de candidature et la prochaine étape. Relancez après environ une semaine si vous n'avez pas de nouvelles.",
            "Beaucoup d'États et de villes ont des lois fair chance ou ban the box qui repoussent les questions sur le casier à plus tard dans l'embauche. Renseignez-vous sur la règle chez vous. Quand la question arrive, soyez honnête. Mentir sur un casier est une raison courante de perdre un emploi plus tard.",
            "Répondez en trois courtes parties : ce qui s'est passé, en une phrase et sans excuses ; ce que vous avez fait depuis, comme des programmes, du travail, des études et le fait de rester sur la bonne voie ; et pourquoi vous êtes prêt pour ce poste. Puis revenez à vos compétences. Entraînez-vous à voix haute jusqu'à ce que ce soit calme.",
            "Apportez des preuves : certificats, une lettre de référence, et vos informations sur le WOTC et le cautionnement. Un assistant d'IA peut vous aider à vous entraîner aux questions d'entretien, mais n'y tapez jamais vos numéros d'affaire ni d'autres détails privés."
          ],
          steps: ["Postulez à plusieurs emplois chaque semaine et suivez-les dans une liste.", "Renseignez-vous sur la règle fair chance de votre État ou de votre ville.", "Écrivez votre réponse en trois parties sur votre casier.", "Entraînez-vous à voix haute avec une personne ou un assistant d'IA, sans détails privés.", "Apportez à l'entretien vos certificats, vos références et les informations sur le WOTC et le cautionnement."],
          words: [["Relancer", "recontacter un employeur pour avoir des nouvelles de votre candidature."], ["Loi fair chance", "une loi qui limite le moment où les employeurs peuvent poser des questions sur un casier."], ["Lettre de référence", "une lettre d'une personne qui peut dire du bien de votre travail ou de votre caractère."]],
          slides: [
            { title: "Postulez régulièrement", bullets: ["Plusieurs candidatures chaque semaine", "Notez l'employeur, le poste, la date et la prochaine étape", "Relancez après environ une semaine"] },
            { title: "Quand arrive la question sur le casier", bullets: ["Connaissez la règle fair chance de chez vous", "Soyez honnête : mentir peut coûter l'emploi plus tard"] },
            { title: "Votre réponse en trois parties", bullets: ["Ce qui s'est passé : une phrase, sans excuses", "Ce que vous avez fait depuis", "Pourquoi vous êtes prêt pour ce poste"] },
            { title: "Apportez des preuves", bullets: ["Certificats et une lettre de référence", "Informations sur le WOTC et le cautionnement", "Entraînez-vous avec l'IA, mais sans détails privés"] }
          ],
          tryIt: "Tâche finale : faites votre plan d'une page pour le logement et l'emploi avec deux options de logement, la liste de votre dossier de location, votre American Job Center le plus proche, trois employeurs de seconde chance ou pistes d'emploi, et votre présentation de deux phrases sur le WOTC et le cautionnement. Puis dites une fois à voix haute votre réponse en trois parties sur votre casier.",
          youCanNow: "postuler à des emplois de seconde chance, suivre vos candidatures, et répondre aux questions sur votre casier avec honnêteté et calme.",
          quickCheck: [
            { objective: "O6", q: "Quelles sont les trois parties d'une bonne réponse sur votre casier ?", options: ["Votre numéro d'affaire, votre peine et votre date de sortie", "Ce qui s'est passé, ce que vous avez fait depuis et pourquoi vous êtes prêt", "Qui était responsable, à quel point c'était injuste et il y a combien de temps", "Rien, car vous ne devriez pas répondre"], answer: 1, why: "Une réponse courte et honnête en trois parties montre vos progrès et que vous êtes prêt." },
            { objective: "O6", q: "Vous voulez que l'IA vous aide à vous entraîner aux réponses d'entretien. Que faites-vous ?", options: ["Taper vos numéros d'affaire pour qu'elle connaisse votre passé", "Coller tout votre casier dedans", "Utiliser des mots généraux et garder les numéros d'affaire pour vous", "Lui demander d'inventer un casier vierge"], answer: 2, why: "Vous pouvez vous entraîner avec l'IA sans partager les détails privés de vos affaires." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver un emploi de seconde chance",
        questions: [
          { objective: "O4", q: "Où pouvez-vous trouver votre American Job Center le plus proche ?", options: ["Dans un centre commercial", "Chez votre propriétaire", "Sur CareerOneStop (careeronestop.org) ou au 211", "Dans un SMS d'un inconnu"], answer: 2, why: "CareerOneStop, un site du Department of Labor, et le 211 peuvent vous indiquer un centre pour l'emploi." },
          { objective: "O5", q: "Qui reçoit le Work Opportunity Tax Credit ?", options: ["L'employeur", "La personne qui cherche un emploi, en argent liquide", "Le bureau de libération conditionnelle", "Le propriétaire"], answer: 0, why: "Le WOTC est un crédit d'impôt pour les employeurs qui embauchent des personnes de certains groupes." },
          { objective: "O5", q: "Que donne le Federal Bonding Program à un employeur ?", options: ["Une voiture gratuite", "Un prêt", "Une facture d'impôts", "Une garantie gratuite pour les six premiers mois de l'emploi"], answer: 3, why: "Le programme donne une garantie de fidélité gratuite qui couvre les six premiers mois." },
          { objective: "O6", q: "Un recruteur vous pose une question sur votre casier. Quelle est la meilleure approche ?", options: ["Nier", "Être honnête : ce qui s'est passé, ce que vous avez fait depuis, pourquoi vous êtes prêt", "Vous mettre en colère", "Quitter l'entretien"], answer: 1, why: "Une réponse courte et honnête, centrée sur le changement et la préparation, crée la confiance." },
          { objective: "O6", q: "Qu'est-ce que vous ne devez JAMAIS taper dans un assistant d'IA en vous entraînant aux entretiens ?", options: ["\"Pose-moi une question d'entretien courante\"", "\"Raccourcis ma réponse\"", "Vos numéros d'affaire", "\"Donne-moi ton avis\""], answer: 2, why: "Les numéros d'affaire et les autres détails privés doivent rester hors des outils d'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Trouver un logement et un emploi de seconde chance",
    questions: [
      { objective: "O1", q: "Qu'est-ce que le 211 ?", options: ["Un service gratuit et confidentiel qui vous met en contact avec de l'aide locale", "Une ligne de police", "Une banque", "Un site d'offres d'emploi"], answer: 0, why: "Le 211 met les gens en contact avec de l'aide locale pour le logement, la nourriture et d'autres besoins." },
      { objective: "O1", q: "Un logement de transition, c'est :", options: ["Un hôtel pour touristes", "Un logement de courte durée avec un accompagnement, souvent pour les personnes qui rentrent chez elles", "Un box de stockage", "Une voiture"], answer: 1, why: "Le logement de transition est une étape de courte durée avec un accompagnement." },
      { objective: "O1", q: "Vous êtes en libération conditionnelle et vous avez trouvé une chambre à louer. Que faire avant de signer ?", options: ["Signer tout de suite", "Le garder secret", "Vérifier que votre agent approuve l'adresse", "Payer en liquide à un inconnu"], answer: 2, why: "La parole ou la probation peut exiger que votre agent approuve l'endroit où vous vivez." },
      { objective: "O1", q: "Les listes d'attente du logement public peuvent être longues. Qu'est-ce qui est malin ?", options: ["Ne jamais faire de demande", "Faire une demande seulement quand vous êtes à la rue", "Faire une demande une fois et changer de numéro de téléphone", "Faire une demande tôt et garder vos coordonnées à jour"], answer: 3, why: "S'inscrire tôt et rester joignable vous permet de garder votre place." },
      { objective: "O2", q: "Lequel est un refus obligatoire pour le logement public fédéral ?", options: ["L'inscription à vie au registre des délinquants sexuels", "N'importe quelle contravention routière", "Être sans emploi", "Avoir des enfants"], answer: 0, why: "Les règles fédérales imposent le refus de toute personne inscrite à vie au registre des délinquants sexuels." },
      { objective: "O2", q: "Pour la plupart des autres casiers, qui décide d'une demande de logement public ?", options: ["Le FBI", "La Public Housing Agency locale, selon sa propre politique", "Vos voisins", "La personne qui fait la demande"], answer: 1, why: "En dehors des refus obligatoires, l'office de logement décide selon sa propre politique écrite." },
      { objective: "O2", q: "Un office de logement public peut-il vous faire payer sa vérification du casier judiciaire ?", options: ["Oui, n'importe quel montant", "Seulement le week-end", "Non, il n'a pas le droit de vous faire payer", "Seulement en liquide"], answer: 2, why: "La règle dit que l'office ne peut pas faire payer la vérification à la personne qui fait la demande." },
      { objective: "O2", q: "Le casier judiciaire est-il une catégorie protégée par le Fair Housing Act fédéral ?", options: ["Oui, toujours", "Seulement pour les aides au loyer", "Seulement en été", "Non ; les lois des États et des villes peuvent mieux protéger"], answer: 3, why: "Le Fair Housing Act fédéral ne cite pas le casier judiciaire comme catégorie protégée." },
      { objective: "O2", q: "En Californie, un propriétaire veut refuser toutes les personnes qui ont un casier. C'est :", options: ["Interdit : les refus généraux ne sont pas permis", "Exigé par la loi", "Une bonne politique", "Permis seulement pour les appartements"], answer: 0, why: "La Californie interdit les refus généraux de toutes les personnes qui ont des antécédents judiciaires." },
      { objective: "O3", q: "Qu'est-ce qui a sa place dans un dossier de location ?", options: ["Votre numéro de sécurité sociale écrit sur la couverture", "Des preuves de revenus et des lettres de référence", "Le mot de passe de votre banque", "Rien"], answer: 1, why: "Les preuves de revenus et les références répondent aux principales inquiétudes d'un propriétaire." },
      { objective: "O3", q: "Une règle simple que beaucoup de programmes utilisent pour le loyer est :", options: ["Tous vos revenus", "Le double de vos revenus", "Environ un tiers de vos revenus ou moins", "Le loyer n'a pas d'importance"], answer: 2, why: "Garder le loyer autour d'un tiers des revenus ou moins laisse de l'argent pour les autres besoins." },
      { objective: "O3", q: "Quel est un signe d'arnaque à la location ?", options: ["Vous visitez d'abord le logement en personne", "Vous recevez un bail écrit", "Le propriétaire donne un reçu", "On vous demande un virement avant que vous ayez vu le logement"], answer: 3, why: "Payer par virement ou carte cadeau avant de voir le logement est une arnaque courante." },
      { objective: "O4", q: "Que propose un American Job Center ?", options: ["Une aide gratuite pour chercher un emploi, faire un CV et se former", "Des voitures gratuites", "Des prêts pour les vacances", "Des titres de propriété"], answer: 0, why: "Les American Job Centers sont des bureaux publics qui aident pour l'emploi et la formation." },
      { objective: "O4", q: "Quelle question est bonne à poser dans un centre pour l'emploi ?", options: ["Pouvez-vous mentir aux employeurs pour moi ?", "Quels employeurs d'ici embauchent des personnes avec un casier ?", "Puis-je ne pas aller travailler ?", "Pouvez-vous payer mon loyer pour toujours ?"], answer: 1, why: "Les centres pour l'emploi connaissent souvent les employeurs de seconde chance de la région." },
      { objective: "O4", q: "Un employeur de seconde chance est :", options: ["Un employeur qui n'embauche qu'une fois", "Une prison du gouvernement", "Une entreprise prête à embaucher des personnes avec un casier", "Un emploi temporaire qui ne paie jamais"], answer: 2, why: "Les employeurs de seconde chance sont prêts à embaucher des personnes qui ont un casier." },
      { objective: "O5", q: "Quel formulaire de l'IRS lance la démarche WOTC ?", options: ["Form 1040", "Form W-2", "Form 1099", "Form 8850"], answer: 3, why: "Le Form 8850 se remplit au plus tard le jour de l'offre d'emploi." },
      { objective: "O5", q: "Avant de parler du WOTC à un employeur, vous devez :", options: ["Vérifier sur irs.gov s'il est en vigueur en ce moment", "Lui promettre un montant précis en dollars", "Remplir ses déclarations d'impôts", "Ne pas en parler"], answer: 0, why: "Le crédit a une date de fin et doit être renouvelé par la loi, alors vérifiez où il en est." },
      { objective: "O5", q: "Combien coûte à l'employeur une garantie du Federal Bonding Program ?", options: ["$500", "Rien ; elle est gratuite", "La moitié de votre salaire", "$5,000"], answer: 1, why: "La garantie est gratuite pour l'employeur et pour la personne qui cherche un emploi ; $5,000 est le plafond de couverture." },
      { objective: "O5", q: "Qui organise une garantie fédérale dans votre État ?", options: ["Votre propriétaire", "La banque", "Le coordinateur du cautionnement de votre État", "Votre médecin"], answer: 2, why: "Les coordinateurs des États, indiqués sur bonds4jobs.com, organisent les garanties." },
      { objective: "O6", q: "La meilleure façon de répondre à une question sur votre casier est :", options: ["Dire que ce n'est jamais arrivé", "Raconter toute votre vie", "Changer de sujet", "Dire brièvement ce qui s'est passé, ce que vous avez fait depuis et pourquoi vous êtes prêt"], answer: 3, why: "Une réponse courte et honnête en trois parties crée la confiance et ramène à vos compétences." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      7,
      9,
      11,
      12,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Options de logement",
        objective: "O1",
        notYet: "Moins de deux options, ou des coordonnées qui manquent.",
        meets: "Deux options de logement avec les coordonnées et ce qu'il faut apporter.",
        exceeds: "Il note aussi le coût et les règles, et que l'adresse a été vérifiée avec l'agent de libération conditionnelle si besoin."
      },
      {
        name: "Liste pour le dossier de location",
        objective: "O3",
        notYet: "Pas de liste.",
        meets: "Une liste des papiers que vous avez et de ceux qu'il vous manque.",
        exceeds: "Elle comprend un premier brouillon de la courte lettre sur ce que vous avez fait depuis."
      },
      {
        name: "Aide à l'emploi et pistes",
        objective: "O4",
        notYet: "Pas de centre pour l'emploi, ou moins de trois pistes.",
        meets: "L'American Job Center le plus proche et trois employeurs de seconde chance ou pistes d'emploi.",
        exceeds: "Elle comprend les questions que vous poserez lors de votre première visite."
      },
      {
        name: "Argument pour l'employeur",
        objective: "O5",
        notYet: "Pas d'argument, ou il promet un montant précis en dollars.",
        meets: "Un argument de deux phrases sur le WOTC et le Federal Bonding Program.",
        exceeds: "Il nomme aussi le coordinateur du cautionnement de l'État et note que le WOTC a été vérifié sur irs.gov."
      },
      {
        name: "Réponse sur votre casier",
        objective: "O6",
        notYet: "Pas répétée, ou longue, accusatrice ou fausse.",
        meets: "Dite une fois à voix haute : ce qui s'est passé, ce que vous avez fait depuis, pourquoi vous êtes prêt.",
        exceeds: "Courte, calme et répétée plusieurs fois."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui s'installent dans un logement stable ou de transition dans les 90 jours (enquête de suivi)",
      "Les apprenants qui vont dans un American Job Center ou trouvent un emploi dans les 90 jours",
      "Les employeurs qui utilisent le WOTC ou un cautionnement fédéral pour embaucher un apprenant, d'après les partenaires"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone pour appeler le 211 et les centres pour l'emploi, ou un ordinateur avec internet",
      "Du papier et un stylo, ou une chemise, pour le plan et le dossier de location",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Ayez prêts avant la séance votre numéro 211 local, l'American Job Center le plus proche et le coordinateur du cautionnement de l'État.",
      "Faites répéter par deux la réponse en trois parties sur le casier ; cela donne vite confiance.",
      "Les règles varient selon l'État et la ville ; envoyez les questions juridiques à l'aide juridique ou à un conseiller en réinsertion.",
      "Rappelez aux personnes en libération conditionnelle ou en mise à l'épreuve de faire d'abord vérifier toute nouvelle adresse par leur agent.",
      "Notez le plan avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
