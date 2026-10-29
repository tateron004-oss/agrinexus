"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-financial-literacy.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-financial-literacy-fr",
  lang: "fr",
  translationOf: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "L'IA pour bien gérer son argent",
  skills: "Faire un budget mensuel, Utiliser l'IA pour organiser son argent sans partager de données privées, Fixer un objectif d'épargne, Consulter gratuitement son rapport de crédit, Trouver de l'aide gratuite pour les impôts et l'argent, Repérer les arnaques financières",
  outcome: "construire un budget mensuel simple pour votre foyer avec l'aide d'un assistant d'IA gratuit (sans partager aucun numéro privé), fixer un objectif d'épargne, et savoir où obtenir gratuitement votre rapport de crédit et de l'aide pour vos impôts.",
  about: [
    "Le stress lié à l'argent est réel, surtout quand chaque dollar a déjà une destination. Ce cours vous donne des outils simples pour voir où va votre argent, planifier ce qui compte pour votre famille et éviter les pièges coûteux.",
    "Vous construirez un budget mensuel, utiliserez un assistant d'IA gratuit pour vous aider à le trier et à le comprendre sans taper aucun numéro privé, fixerez un objectif d'épargne, consulterez gratuitement votre rapport de crédit, trouverez de l'aide gratuite pour les impôts et l'argent, et repérerez les arnaques financières.",
    "Ce cours enseigne des compétences, pas des conseils en placement. Pour les grandes décisions d'argent, parlez à un conseiller gratuit d'une association ou consultez des sources officielles comme consumerfinance.gov, fdic.gov et irs.gov (des sites américains ; ailleurs, consultez la banque centrale ou l'administration fiscale de votre pays). Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez le budget d'un mois pour votre foyer : listez les revenus, les besoins et les envies avec des montants arrondis, utilisez un assistant d'IA pour les trier et proposer un endroit où économiser (sans numéro de compte ni détail privé), fixez un objectif d'épargne avec un montant et une date, et notez où vous obtiendrez gratuitement votre rapport de crédit et de l'aide pour vos impôts.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes de communautés mal desservies qui gèrent un foyer avec un budget serré : parents qui travaillent, aidants, personnes qui reçoivent des aides, personnes âgées et jeunes adultes qui vivent seuls pour la première fois.",
    startingPoint: "Ils paient les factures et suivent leur argent de tête ou sur papier. Peu ont un budget écrit, un objectif d'épargne ou ont déjà consulté leur rapport de crédit, et beaucoup n'ont jamais utilisé l'IA pour leurs finances. Certains ont été visés par des arnaques financières.",
    gap: "Sans plan, les petites dépenses s'accumulent, l'épargne ne commence jamais, les erreurs de crédit ne sont pas corrigées, et des familles paient pour de l'aide fiscale ou tombent dans des arnaques. Les apprenants ont besoin d'un budget simple, d'un objectif d'épargne et d'une aide gratuite fiable, et doivent utiliser l'IA sans partager de numéros privés.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque ; le papier suffit pour le budget",
      "Vie privée : seulement des montants arrondis, jamais de numéro de compte, de carte ou de sécurité sociale ni de mot de passe dans l'IA",
      "Éducation financière générale seulement : aucun conseil en investissement, et les grandes décisions passent par les sources officielles ou un conseiller gratuit d'une association",
      "Les montants et les règles (FDIC, VITA, Lifeline) changent : les apprenants vérifient les sites officiels"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et autonomie numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un mois de fiches de paie, de relevés ou de reçus", action: "lister vos revenus et classer vos dépenses en besoins et en envies", standard: "avec au moins dix dépenses, des montants arrondis et des totaux" },
    { id: "O2", condition: "Avec un assistant d'IA gratuit", action: "organiser votre budget en tableau et choisir lesquelles de ses suggestions conviennent à votre famille", standard: "en partageant seulement des catégories arrondies et en vérifiant les totaux avec une calculatrice" },
    { id: "O3", condition: "À partir d'une chose pour laquelle vous voulez épargner", action: "fixer un objectif d'épargne avec un montant et une date, calculer la somme par semaine et choisir un endroit sûr où la garder", standard: "avec le calcul vérifié et une banque assurée par la FDIC ou une coopérative de crédit assurée au niveau fédéral" },
    { id: "O4", condition: "Avec AnnualCreditReport.com", action: "expliquer comment obtenir vos rapports de crédit gratuits et y chercher les erreurs", standard: "en nommant les trois bureaux de crédit et ce qu'il faut contester" },
    { id: "O5", condition: "Quand vous avez besoin d'aide pour les impôts ou l'argent", action: "trouver un lieu d'aide fiscale gratuite VITA ou TCE et une source fiable pour vos questions d'argent", standard: "en notant l'adresse du lieu et ce qu'il faut apporter" },
    { id: "O6", condition: "Face à une offre d'argent ou à un message urgent", action: "repérer les signes d'une arnaque financière et choisir l'étape suivante sans risque", standard: "sans donner d'identifiants ni de codes, et en signalant les arnaques à la FTC" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre plan d'argent",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les bases du budget : revenus, besoins et envies",
          minutes: 5,
          goal: "Lister vos revenus du mois et classer vos dépenses en besoins et en envies.",
          text: [
            "Un budget est un plan pour votre argent. Il montre ce qui entre chaque mois et où cela part. Un budget ne veut pas dire que vous ne pouvez jamais vous faire plaisir ; il veut dire que vous décidez volontairement.",
            "Les revenus sont l'argent qui entre : salaires, aides, pensions alimentaires, petits boulots. Les besoins sont ce que vous devez payer pour vivre et travailler : loyer, nourriture, eau et électricité, transport, garde d'enfants, médicaments. Les envies sont agréables mais pas indispensables : manger dehors, abonnements de streaming, vêtements neufs dont vous n'avez pas encore besoin.",
            "Commencez par un mois. Regardez vos fiches de paie, vos relevés de banque ou de carte et vos reçus. Arrondissez les montants au dollar ou aux cinq dollars près ; une estimation proche suffit pour commencer."
          ],
          steps: ["Notez chaque source de revenus pour un mois.", "Listez chaque dépense dont vous vous souvenez ou que vous trouvez.", "Marquez chaque dépense comme besoin ou envie.", "Additionnez les revenus, les besoins et les envies."],
          words: [["Budget", "un plan de la façon dont vous utiliserez votre argent chaque mois."], ["Revenus", "l'argent qui entre."], ["Dépense", "l'argent qui sort."]],
          slides: [
            { title: "Un budget est un plan", bullets: ["Ce qui entre", "Où cela part", "Vous décidez volontairement"] },
            { title: "Besoins ou envies", bullets: ["Besoins : loyer, nourriture, énergie, transport, garde d'enfants", "Envies : restaurant, streaming, extras"] },
            { title: "Commencez simple", bullets: ["Un mois", "Fiches de paie, relevés, reçus", "Arrondissez les montants"] }
          ],
          tryIt: "Sur papier ou dans un tableur gratuit, notez vos revenus du mois et au moins dix dépenses. Marquez chacune B pour besoin ou E pour envie.",
          youCanNow: "lister vos revenus et classer vos dépenses en besoins et en envies.",
          quickCheck: [
            { objective: "O1", q: "Que sont les revenus ?", options: ["L'argent qui entre, comme les salaires et les aides", "L'argent dépensé pour le loyer", "L'argent que vous devez", "Une facture que vous payez"], answer: 0, why: "Les revenus, c'est l'argent qui entre : salaires, aides ou petits boulots." },
            { objective: "O1", q: "Vous listez vos dépenses et vous payez environ 87,60 $ de téléphone. Qu'écrivez-vous pour commencer ?", options: ["Ne pas la mettre", "Environ 90 $", "870 $", "Rien tant que vous n'avez pas les centimes exacts"], answer: 1, why: "Arrondir au dollar ou aux cinq dollars près suffit pour commencer un budget." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Utiliser l'IA pour organiser votre budget en sécurité",
          minutes: 5,
          goal: "Demander à un assistant d'IA gratuit de trier et d'expliquer votre budget sans partager d'informations privées.",
          text: [
            "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini peut transformer votre liste en tableau propre, faire les totaux, et montrer où part l'argent. Vous gardez la main sur chaque décision.",
            "Ne partagez que des montants arrondis et des catégories. Ne tapez jamais de numéros de compte, de numéros de carte, votre numéro de sécurité sociale, vos mots de passe ou vos identifiants bancaires. Exemple de consigne : « Ma famille de 4 personnes gagne environ 3 200 $ par mois. Loyer 1 400 $, nourriture 650 $, téléphone 90 $, transports 100 $, restaurant 200 $, streaming 40 $. Mets cela dans un tableau, fais le total, et propose deux endroits où nous pourrions réduire. »",
            "L'IA peut faire des erreurs de calcul. Refaites les totaux vous-même ou avec une calculatrice pour vérifier. Ses conseils sont des idées, pas des règles ; choisissez ce qui convient à votre famille."
          ],
          steps: ["Écrivez vos catégories et vos montants arrondis.", "Retirez tout numéro de compte ou détail privé.", "Demandez à l'IA un tableau, un total et des idées de réduction.", "Vérifiez vous-même les totaux.", "Choisissez les suggestions qui conviennent à votre famille."],
          words: [["Catégorie", "un groupe de dépenses, comme la nourriture ou le transport."], ["Repère", "un mot de remplacement comme « [ma banque] » utilisé à la place des détails privés."]],
          slides: [
            { title: "L'IA peut vous aider à organiser", bullets: ["Faire un tableau", "Faire le total", "Proposer où réduire"] },
            { title: "Partagez seulement ceci", bullets: ["Des montants arrondis", "Des catégories comme loyer et nourriture", "Jamais de numéros de compte, de carte ou d'identité"] },
            { title: "Vérifiez et choisissez", bullets: ["Refaites le calcul vous-même", "Les conseils sont des idées, pas des règles", "Choisissez ce qui convient à votre famille"] }
          ],
          tryIt: "Donnez à un assistant d'IA vos catégories et montants arrondis (sans détails privés). Demandez un tableau, un total et deux idées pour réduire. Vérifiez le total avec une calculatrice.",
          youCanNow: "utiliser l'IA pour organiser un budget sans partager d'informations privées, et vérifier ses calculs.",
          quickCheck: [
            { objective: "O2", q: "Qui fait les choix finaux sur votre budget quand vous utilisez l'IA ?", options: ["L'IA", "Votre banque", "Vous", "La boutique d'applications"], answer: 2, why: "L'IA donne des idées, mais c'est vous qui décidez de tout." },
            { objective: "O2", q: "Vous voulez que l'IA trie votre budget. Que tapez-vous ?", options: ["Vos identifiants bancaires", "Votre numéro de carte et son code", "Votre numéro de sécurité sociale", "Des catégories arrondies comme « nourriture environ 650 $ »"], answer: 3, why: "Seuls des montants arrondis et des catégories vont dans l'IA, jamais des numéros privés." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fixer un objectif d'épargne et protéger son argent",
          minutes: 5,
          goal: "Fixer un objectif d'épargne avec un montant et une date, et savoir comment les dépôts bancaires sont protégés.",
          text: [
            "Même une petite somme mise de côté chaque semaine peut aider quand la voiture tombe en panne ou que les heures de travail diminuent. Beaucoup de gens commencent par une épargne de secours : de l'argent mis de côté uniquement pour les imprévus.",
            "Rendez l'objectif clair : « Épargner 300 $ pour les urgences d'ici le 1er juin. » Divisez par le nombre de semaines pour savoir combien mettre de côté chaque semaine. Demandez à l'IA de faire le calcul, puis vérifiez-le.",
            "L'endroit où vous gardez votre épargne compte. Aux États-Unis, l'argent déposé dans une banque assurée par la FDIC (l'organisme fédéral de garantie des dépôts) est protégé jusqu'à 250 000 $ par déposant, par banque, pour chaque catégorie de propriété du compte. La garantie de la FDIC ne couvre pas les actions ni les cryptomonnaies. Vérifiez sur fdic.gov qu'une banque est assurée avant d'ouvrir un compte. Ailleurs, renseignez-vous sur le fonds de garantie des dépôts de votre pays."
          ],
          steps: ["Choisissez pourquoi vous épargnez.", "Choisissez un montant et une date.", "Divisez le montant par le nombre de semaines.", "Gardez votre épargne dans une banque ou une coopérative de crédit dont les dépôts sont garantis."],
          words: [["Épargne de secours", "de l'argent mis de côté uniquement pour les dépenses imprévues."], ["FDIC", "la Federal Deposit Insurance Corporation, qui protège l'argent déposé dans les banques assurées aux États-Unis."], ["Coopérative de crédit", "une institution financière à but non lucratif qui appartient à ses membres."]],
          sources: [{ name: "FDIC : comprendre l'assurance des dépôts", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Commencez une épargne de secours", bullets: ["De l'argent seulement pour les imprévus", "Les petites sommes s'additionnent"] },
            { title: "Un objectif clair", bullets: ["Exemple : 300 $ d'ici le 1er juin", "Montant divisé par semaines = épargne par semaine", "Vérifiez vous-même le calcul"] },
            { title: "Protégez votre épargne", bullets: ["Banque assurée FDIC : jusqu'à 250 000 $ par déposant, banque, catégorie", "Pas les actions ni les cryptomonnaies", "Vérifiez une banque sur fdic.gov"] }
          ],
          tryIt: "Écrivez un objectif d'épargne avec un montant et une date. Calculez combien épargner chaque semaine, puis demandez à l'IA de vérifier votre calcul.",
          youCanNow: "fixer un objectif d'épargne clair et choisir un endroit sûr et garanti pour le garder.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui rend un objectif d'épargne clair ?", options: ["Un montant et une date", "Un joli nom", "Un gros chiffre", "N'en parler à personne"], answer: 0, why: "Un objectif clair dit combien et pour quand, comme 300 $ d'ici le 1er juin." },
            { objective: "O3", q: "Vous voulez épargner 200 $ en 20 semaines. Combien mettez-vous de côté chaque semaine ?", options: ["20 $", "10 $", "4 $", "100 $"], answer: 1, why: "200 $ divisés par 20 semaines font 10 $ par semaine." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre plan d'argent",
        questions: [
          { objective: "O1", q: "Lequel est un besoin ?", options: ["Un abonnement de streaming", "Le loyer", "Manger au restaurant", "Un nouveau jeu"], answer: 1, why: "Le loyer est une dépense obligatoire pour vivre." },
          { objective: "O2", q: "Qu'est-ce qu'on peut taper sans risque dans un assistant d'IA pour de l'aide sur le budget ?", options: ["Votre numéro de compte bancaire", "Votre numéro de carte", "Des montants arrondis comme « loyer environ 1 400 $ »", "Votre mot de passe de banque en ligne"], answer: 2, why: "Des montants arrondis et des catégories donnent l'aide voulue sans détails privés." },
          { objective: "O2", q: "L'IA additionne votre budget et obtient un total qui semble faux. Que faites-vous ?", options: ["Lui faire confiance", "Supprimer votre budget", "Demander à un inconnu en ligne", "Vérifier le total avec une calculatrice"], answer: 3, why: "L'IA peut faire des erreurs de calcul ; vérifiez vous-même." },
          { objective: "O3", q: "Lequel est un objectif d'épargne clair ?", options: ["« Épargner 300 $ pour les urgences d'ici le 1er juin »", "« Épargner un peu »", "« Devenir riche »", "« De l'argent plus tard »"], answer: 0, why: "Il a un but, un montant et une date." },
          { objective: "O3", q: "Que couvre l'assurance de la FDIC ?", options: ["Les actions", "Les dépôts dans une banque assurée, jusqu'à la limite", "Les cryptomonnaies", "L'argent sous le matelas"], answer: 1, why: "La FDIC protège les dépôts dans les banques assurées ; pas les actions ni les cryptomonnaies." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Crédit, aide et sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Consulter gratuitement votre rapport de crédit",
          minutes: 5,
          goal: "Trouver le site officiel des rapports de crédit gratuits et vérifier qu'un rapport ne contient pas d'erreurs.",
          text: [
            "Un rapport de crédit est un historique de vos prêts, cartes et factures. Les propriétaires, les prêteurs et certains employeurs peuvent le consulter. Des erreurs arrivent, et une erreur peut vous coûter un logement ou un prêt.",
            "Aux États-Unis, vous pouvez obtenir gratuitement chaque semaine les rapports des trois grands bureaux de crédit, Equifax, Experian et TransUnion, sur AnnualCreditReport.com. C'est le site officiel. D'autres sites qui promettent des rapports « gratuits » peuvent essayer de vous vendre quelque chose. Ailleurs, renseignez-vous auprès de la banque centrale ou du bureau d'information sur le crédit de votre pays.",
            "Cherchez les comptes que vous ne reconnaissez pas, les mauvaises adresses et les retards de paiement alors que vous avez payé à temps. Si quelque chose est faux, vous pouvez le contester auprès du bureau de crédit. Le Consumer Financial Protection Bureau (l'agence américaine de protection financière des consommateurs), sur consumerfinance.gov, explique comment."
          ],
          steps: ["Tapez vous-même AnnualCreditReport.com dans le navigateur.", "Demandez vos rapports à Equifax, Experian et TransUnion.", "Cherchez les comptes inconnus, les détails faux et les retards injustifiés.", "Si quelque chose est faux, suivez les étapes de contestation sur consumerfinance.gov."],
          words: [["Rapport de crédit", "un historique de vos prêts, cartes de crédit et paiements de factures."], ["Bureau de crédit", "une entreprise qui tient les rapports de crédit : Equifax, Experian, TransUnion."], ["Contester", "demander officiellement la correction d'une erreur."]],
          sources: [{ name: "FTC : rapports de crédit gratuits", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Consumer Financial Protection Bureau : outils pour les consommateurs", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Votre rapport de crédit", bullets: ["Historique des prêts, cartes et factures", "Propriétaires et prêteurs peuvent le consulter", "Des erreurs arrivent"] },
            { title: "Obtenez-le gratuitement (É.-U.)", bullets: ["AnnualCreditReport.com est le site officiel", "Equifax, Experian, TransUnion", "Gratuit chaque semaine"] },
            { title: "Quoi regarder", bullets: ["Les comptes que vous ne connaissez pas", "Adresses ou retards de paiement faux", "Contestez les erreurs : voir consumerfinance.gov"] }
          ],
          tryIt: "Notez le site officiel des rapports de crédit gratuits et le nom des trois bureaux. Si vous êtes prêt et sur un appareil privé, demandez un rapport et cherchez ce que vous ne reconnaissez pas.",
          youCanNow: "obtenir vos rapports de crédit gratuits sur le site officiel et repérer les erreurs à contester.",
          quickCheck: [
            { objective: "O4", q: "Qui peut consulter votre rapport de crédit ?", options: ["Seulement vous", "Seulement votre famille", "Les propriétaires, les prêteurs et certains employeurs", "Personne"], answer: 2, why: "Les propriétaires, les prêteurs et certains employeurs peuvent consulter votre rapport de crédit." },
            { objective: "O4", q: "Une publicité propose un rapport de crédit « gratuit » sur un site que vous ne connaissez pas. Que faites-vous ?", options: ["Vous inscrire et entrer votre carte", "Cliquer sur la publicité", "Ignorer les rapports de crédit", "Taper vous-même AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com est le site officiel ; les autres peuvent essayer de vous vendre quelque chose." }
          ]
        },
        {
          objectives: ["O5"],
          title: "De l'aide gratuite pour les impôts et l'argent",
          minutes: 5,
          goal: "Trouver un lieu d'aide fiscale gratuite et une source fiable pour vos questions d'argent.",
          text: [
            "Vous n'avez pas besoin de payer cher pour faire vos impôts. Aux États-Unis, le programme VITA (Volunteer Income Tax Assistance) de l'IRS, l'administration fiscale américaine, offre une aide gratuite, surtout aux personnes qui remplissent les conditions de revenus du crédit d'impôt sur le revenu du travail (EITC). Beaucoup de sites aident aussi les personnes qui gagnent environ 70 244 $ ou moins, les personnes handicapées et celles qui parlent peu anglais. Chaque site peut fixer ses propres règles : renseignez-vous auprès du site. Ailleurs, demandez à l'administration fiscale de votre pays s'il existe une aide gratuite.",
            "Trouvez un site VITA avec l'outil de recherche VITA/TCE de l'IRS sur freetaxassistance.for.irs.gov ou en appelant le 800-906-9887. Le programme TCE offre une aide gratuite semblable, surtout aux personnes de 60 ans et plus.",
            "Pour vos autres questions d'argent, le Consumer Financial Protection Bureau, sur consumerfinance.gov, propose des guides gratuits sur les comptes bancaires, le recouvrement de dettes, les prêts sur salaire et plus, et un moyen de déposer une plainte contre une entreprise. Les prêts sur salaire et les applications de prêt rapide peuvent coûter bien plus qu'ils n'en ont l'air ; lisez le coût total avant de signer."
          ],
          steps: ["Cherchez avec l'outil VITA/TCE de l'IRS ou appelez le 800-906-9887.", "Demandez au site quoi apporter.", "Utilisez consumerfinance.gov pour les questions d'argent.", "Avant tout prêt, demandez le coût total en dollars."],
          words: [["VITA", "Volunteer Income Tax Assistance : une aide fiscale gratuite soutenue par l'IRS."], ["Prêt sur salaire", "un petit prêt à court terme qui peut coûter très cher."]],
          sources: [{ name: "IRS : préparation gratuite de la déclaration pour les contribuables admissibles", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Consumer Financial Protection Bureau : outils pour les consommateurs", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Aide fiscale gratuite : VITA (É.-U.)", bullets: ["Soutenue par l'IRS, assurée par des bénévoles formés", "Beaucoup de sites aident ceux qui gagnent environ 70 244 $ ou moins", "Les sites peuvent fixer leurs propres règles"] },
            { title: "Trouver un site", bullets: ["freetaxassistance.for.irs.gov", "Ou appelez le 800-906-9887", "TCE : aide gratuite surtout pour les 60 ans et plus"] },
            { title: "Aide fiable sur l'argent", bullets: ["Guides et plaintes sur consumerfinance.gov", "Les prêts sur salaire peuvent coûter cher", "Demandez le coût total avant de signer"] }
          ],
          tryIt: "Utilisez l'outil de recherche VITA/TCE de l'IRS pour trouver le lieu d'aide fiscale gratuite le plus proche (ou cherchez l'aide gratuite de votre pays). Notez son adresse et ce qu'il faut apporter.",
          youCanNow: "trouver de l'aide fiscale gratuite et des informations fiables sur l'argent.",
          quickCheck: [
            { objective: "O5", q: "Que propose surtout le programme TCE ?", options: ["Une aide fiscale gratuite, surtout pour les personnes de 60 ans et plus", "Des prêts payants", "Des cartes de crédit", "Des formations professionnelles"], answer: 0, why: "TCE offre une aide fiscale gratuite comme VITA, surtout aux personnes de 60 ans et plus." },
            { objective: "O5", q: "Une application de prêt rapide vous propose 200 $ aujourd'hui. Que demandez-vous d'abord ?", options: ["Comment en obtenir plus vite", "Le coût total en dollars", "Si vos amis l'utilisent", "Rien ; signer tout de suite"], answer: 1, why: "Les prêts sur salaire et les applications de prêt rapide peuvent coûter bien plus qu'ils n'en ont l'air." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Repérer les arnaques financières, et votre plan final",
          minutes: 5,
          goal: "Repérer les arnaques financières courantes et terminer votre plan de budget.",
          text: [
            "Les arnaqueurs visent les personnes qui manquent d'argent avec de faux prêts, de faux rachats de dettes, de fausses subventions du gouvernement et des offres pour « devenir riche vite », y compris des montages en cryptomonnaies. Certains utilisent maintenant l'IA pour écrire des messages qui semblent vrais ou imiter la voix d'un proche.",
            "Signaux d'alarme : on vous presse, on vous demande de payer par cartes cadeaux, virement, application de paiement ou cryptomonnaie, on vous promet de l'argent garanti, ou on demande vos identifiants bancaires ou le code envoyé sur votre téléphone. Une vraie administration ne vous appellera pas pour exiger un paiement de cette façon.",
            "Si quelque chose vous semble anormal, arrêtez, raccrochez et rappelez avec un numéro que vous savez être le bon. Aux États-Unis, vous pouvez signaler les arnaques à la Federal Trade Commission sur ReportFraud.ftc.gov. Ailleurs, signalez-les à la police ou à l'autorité de protection des consommateurs de votre pays."
          ],
          steps: ["Repérez la pression, les cartes cadeaux, les cryptomonnaies et l'argent garanti.", "Ne partagez jamais vos identifiants bancaires ni les codes reçus par téléphone.", "Raccrochez et rappelez avec un numéro que vous connaissez.", "Signalez les arnaques à la FTC (ou à l'autorité de votre pays)."],
          words: [["Arnaque", "une ruse pour voler de l'argent ou des informations."], ["Rendement garanti", "la promesse que vous gagnerez forcément de l'argent ; une phrase d'arnaque courante."]],
          sources: [{ name: "Federal Trade Commission : ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Arnaques financières courantes", bullets: ["Faux prêts et faux rachats de dettes", "Fausses subventions du gouvernement", "« Devenir riche vite » et cryptomonnaies"] },
            { title: "Signaux d'alarme", bullets: ["On vous presse", "Cartes cadeaux, virements, applications, cryptomonnaies", "Argent garanti ; on demande votre code"] },
            { title: "Que faire", bullets: ["Arrêtez et raccrochez", "Rappelez avec un numéro que vous connaissez", "Signalez sur ReportFraud.ftc.gov (É.-U.)"] }
          ],
          tryIt: "Tâche finale : terminez votre budget d'un mois avec l'aide de l'IA (sans numéros privés), vérifiez les totaux, écrivez un objectif d'épargne avec un montant et une date, et notez où vous obtiendrez gratuitement votre rapport de crédit et de l'aide pour vos impôts.",
          youCanNow: "faire un budget familial, planifier votre épargne, trouver de l'aide gratuite et éviter les arnaques financières.",
          quickCheck: [
            { objective: "O6", q: "Quelle demande de paiement est un signe d'arnaque ?", options: ["Une facture de votre fournisseur habituel d'eau ou d'électricité à son adresse habituelle", "Payer le loyer à votre propriétaire par chèque", "Qu'on vous demande de payer en cartes cadeaux", "Payer à la caisse du magasin"], answer: 2, why: "Les arnaqueurs demandent des cartes cadeaux, des virements, des applications de paiement ou des cryptomonnaies." },
            { objective: "O6", q: "Vous recevez un appel avec la voix de votre cousin qui demande de l'argent tout de suite. Que faites-vous ?", options: ["L'envoyer tout de suite", "Lui donner vos identifiants bancaires", "Payer en cartes cadeaux", "Raccrocher et rappeler votre cousin à un numéro que vous connaissez"], answer: 3, why: "Les arnaqueurs peuvent imiter des voix avec l'IA, donc vous rappelez à un numéro connu." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Crédit, aide et sécurité",
        questions: [
          { objective: "O4", q: "Quel est le site officiel des rapports de crédit gratuits aux États-Unis ?", options: ["N'importe quel site qui dit « gratuit »", "Un lien dans un SMS", "Une publicité sur les réseaux sociaux", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com est le site officiel des rapports gratuits." },
          { objective: "O4", q: "Vous trouvez sur votre rapport de crédit un compte qui n'est pas à vous. Vous devez :", options: ["Le contester auprès du bureau de crédit", "L'ignorer", "Le payer tout de suite", "Le publier en ligne"], answer: 0, why: "La contestation corrige les erreurs de votre rapport." },
          { objective: "O5", q: "Qu'est-ce que VITA ?", options: ["Un prêt sur salaire", "Une aide fiscale gratuite soutenue par l'IRS", "Un bureau de crédit", "Un compte d'épargne"], answer: 1, why: "VITA offre une préparation gratuite de la déclaration par des bénévoles formés." },
          { objective: "O6", q: "Un appelant dit venir du gouvernement et exige que vous payiez une amende aujourd'hui en cartes cadeaux. C'est :", options: ["Normal", "Un remboursement d'impôts", "Une arnaque", "Un service VITA"], answer: 2, why: "Les administrations n'exigent pas de paiement en cartes cadeaux." },
          { objective: "O6", q: "Où signaler une arnaque aux États-Unis ?", options: ["À l'arnaqueur", "Nulle part", "Seulement dans une discussion de groupe", "Sur ReportFraud.ftc.gov"], answer: 3, why: "La Federal Trade Commission reçoit les signalements d'arnaques." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour bien gérer son argent",
    questions: [
      { objective: "O1", q: "Un budget est :", options: ["Un plan pour votre argent", "Un type de prêt", "Une carte de crédit", "Des frais bancaires"], answer: 0, why: "Un budget planifie les revenus et les dépenses." },
      { objective: "O1", q: "Lequel est un revenu ?", options: ["Le loyer", "Un salaire", "Les courses", "Une facture de téléphone"], answer: 1, why: "Les revenus, c'est l'argent qui entre." },
      { objective: "O1", q: "Laquelle est une envie ?", options: ["La garde d'enfants pour travailler", "L'électricité", "Manger au restaurant", "Les médicaments"], answer: 2, why: "Manger au restaurant est agréable, pas obligatoire." },
      { objective: "O1", q: "Pour commencer un budget, on peut :", options: ["Oublier les revenus", "Utiliser son mot de passe", "Deviner n'importe comment", "Arrondir les montants au dollar ou aux cinq dollars près"], answer: 3, why: "Des montants proches et arrondis suffisent pour commencer." },
      { objective: "O2", q: "Qu'est-ce qu'il ne faut JAMAIS taper dans un assistant d'IA ?", options: ["Votre numéro de carte", "« Nourriture environ 600 $ »", "« Famille de 4 »", "« Propose deux réductions »"], answer: 0, why: "Les numéros de carte sont des informations privées." },
      { objective: "O2", q: "L'IA propose de supprimer le titre de transport de votre enfant. Vous :", options: ["Devez le faire", "Décidez ce qui convient à votre famille ; ce conseil n'y convient peut-être pas", "Demandez à un inconnu", "Donnez vos identifiants bancaires à l'IA"], answer: 1, why: "Les conseils de l'IA sont des idées ; c'est vous qui choisissez." },
      { objective: "O2", q: "Pourquoi vérifier les totaux du budget faits par l'IA ?", options: ["L'IA ne se trompe jamais", "C'est la loi", "L'IA peut faire des erreurs de calcul", "Cela change le solde de votre compte"], answer: 2, why: "Vérifiez toujours vous-même les calculs." },
      { objective: "O3", q: "Une épargne de secours, c'est :", options: ["De l'argent pour les envies", "Un prêt", "Un rapport de crédit", "De l'argent mis de côté uniquement pour les imprévus"], answer: 3, why: "Elle couvre les imprévus comme une réparation de voiture." },
      { objective: "O3", q: "Vous voulez 260 $ en 26 semaines. Combien par semaine ?", options: ["5 $", "10 $", "26 $", "100 $"], answer: 1, why: "260 $ divisés par 26 semaines font 10 $." },
      { objective: "O3", q: "L'assurance de la FDIC protège les dépôts jusqu'à :", options: ["1 000 $", "250 000 $ par déposant, par banque assurée, par catégorie de propriété", "N'importe quel montant", "Seulement les cryptomonnaies"], answer: 1, why: "C'est le montant standard de la FDIC." },
      { objective: "O3", q: "Qu'est-ce qui n'est PAS couvert par l'assurance de la FDIC ?", options: ["Un compte d'épargne dans une banque assurée", "Un compte courant dans une banque assurée", "Les cryptomonnaies", "Un dépôt à terme dans une banque assurée"], answer: 2, why: "La FDIC ne couvre ni les cryptomonnaies ni les actions." },
      { objective: "O4", q: "Un rapport de crédit est :", options: ["Votre fiche de paie", "Votre déclaration d'impôts", "Votre budget", "Un historique de vos prêts, cartes et paiements de factures"], answer: 3, why: "Les prêteurs et les propriétaires peuvent le consulter." },
      { objective: "O4", q: "Les trois grands bureaux de crédit américains sont :", options: ["Equifax, Experian et TransUnion", "Google, Bing et Yahoo", "FDIC, IRS et FTC", "Visa, Mastercard et Discover"], answer: 0, why: "Ces trois-là tiennent les rapports de crédit." },
      { objective: "O4", q: "À quelle fréquence peut-on obtenir des rapports gratuits sur AnnualCreditReport.com ?", options: ["Une fois tous les dix ans", "Chaque semaine", "Jamais", "Seulement en payant"], answer: 1, why: "Les bureaux y offrent des rapports gratuits chaque semaine." },
      { objective: "O5", q: "Où trouver des guides gratuits sur le recouvrement de dettes et les prêts sur salaire ?", options: ["Dans une publicité surgissante", "Dans le SMS d'un arnaqueur", "Sur consumerfinance.gov", "Dans un magasin de cartes cadeaux"], answer: 2, why: "Le Consumer Financial Protection Bureau publie des guides gratuits." },
      { objective: "O5", q: "Comment trouver un site d'aide fiscale gratuite VITA ?", options: ["Demander à un inconnu", "Payer d'abord des frais", "Attendre un appel", "Utiliser l'outil VITA/TCE de l'IRS ou appeler le 800-906-9887"], answer: 3, why: "Ce sont les moyens officiels de l'IRS pour trouver un site." },
      { objective: "O5", q: "Avant de prendre un prêt sur salaire ou une application de prêt rapide, vous devez :", options: ["Demander le coût total en dollars", "Signer vite", "Donner vos identifiants bancaires", "Ne pas lire"], answer: 0, why: "Ces prêts peuvent coûter bien plus qu'ils n'en ont l'air." },
      { objective: "O6", q: "Quelqu'un promet des profits « garantis » en cryptomonnaie. C'est :", options: ["Une affaire sûre", "Un signal d'arnaque courant", "Assuré par la FDIC", "Une aide fiscale gratuite"], answer: 1, why: "L'argent garanti est une phrase d'arnaque classique." },
      { objective: "O6", q: "Un message demande le code envoyé sur votre téléphone pour « vérifier votre banque ». Vous :", options: ["L'envoyez", "Le publiez", "Ne le partagez jamais et appelez votre banque avec un numéro que vous connaissez", "Le lisez à voix haute"], answer: 2, why: "Ce code protège votre compte." },
      { objective: "O6", q: "Pour une grande décision d'argent, la meilleure étape est :", options: ["Croire n'importe quelle réponse de l'IA", "Suivre une publication sur les réseaux sociaux", "Demander à la personne qui vend", "Consulter des sources officielles ou parler à un conseiller gratuit d'une association"], answer: 3, why: "Les sources officielles et de vrais conseillers vous protègent." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Budget",
        objective: "O1",
        notYet: "Revenus ou dépenses manquants, ou besoins et envies non indiqués.",
        meets: "Un mois de revenus et de dépenses avec des montants arrondis, chacun marqué besoin ou envie, et des totaux.",
        exceeds: "Utilise des fiches de paie, des relevés ou des reçus pour que les montants soient proches de la réalité."
      },
      {
        name: "IA utilisée en sécurité",
        objective: "O2",
        notYet: "La demande contient un numéro de compte, de carte ou de sécurité sociale, ou les totaux n'ont pas été vérifiés.",
        meets: "Seulement des catégories arrondies partagées, totaux vérifiés, et un endroit où épargner choisi.",
        exceeds: "Explique pourquoi chaque suggestion de l'IA a été gardée ou rejetée."
      },
      {
        name: "Objectif d'épargne",
        objective: "O3",
        notYet: "Pas de montant ni de date.",
        meets: "Un objectif avec un montant, une date et une somme par semaine vérifiée.",
        exceeds: "Indique où l'argent sera gardé et qu'il est assuré au niveau fédéral."
      },
      {
        name: "Rapport de crédit et aide fiscale",
        objective: "O5",
        notYet: "Ne dit pas où obtenir le rapport ou l'aide fiscale.",
        meets: "Nomme AnnualCreditReport.com et un lieu VITA ou TCE à utiliser.",
        exceeds: "A l'adresse du lieu d'aide fiscale et la liste de ce qu'il faut apporter."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui suivent leur budget et commencent à épargner dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui consultent leur rapport de crédit ou utilisent l'aide fiscale gratuite VITA dans les 6 mois",
      "Apprenants qui disent avoir évité une arnaque financière ou un prêt coûteux"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur de bibliothèque, et une calculatrice (le téléphone en a une)",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Les fiches de paie, relevés ou reçus d'un mois (gardés privés)",
      "Du papier ou un tableur gratuit pour le budget",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Les apprenants gardent leurs vrais chiffres pour eux ; proposez un budget d'entraînement à ceux qui préfèrent ne pas utiliser le leur.",
      "Vérifiez dans les demandes qu'il n'y a pas de numéro de compte, de carte ou de sécurité sociale avant l'envoi.",
      "Ne donnez aucun conseil en investissement, fiscal ou juridique ; orientez les apprenants vers les sites officiels, VITA ou un conseiller gratuit d'une association.",
      "Montrez AnnualCreditReport.com et l'outil de recherche VITA/TCE en direct, et faites demander les rapports seulement sur un appareil personnel.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
