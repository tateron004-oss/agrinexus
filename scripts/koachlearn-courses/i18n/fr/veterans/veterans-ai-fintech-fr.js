"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-fintech.js). See scripts/koachlearn-courses/README.md, "Translations".
// Explains how financial technology works and its risks; it gives no investment advice (README rule 6).

module.exports = {
  id: "veterans-ai-fintech-fr",
  lang: "fr",
  translationOf: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "IA et technologies financières",
  skills: "Expliquer comment marchent les applications fintech, Savoir ce qui est assuré ou non, Vérifier une application avant de lui faire confiance, Configurer la sécurité d'un compte, Repérer et signaler les arnaques fintech",
  outcome: "expliquer comment une application d'argent utilise l'IA, vérifier si elle est légitime et si votre argent est assuré, configurer ses réglages de sécurité, et repérer et signaler une arnaque fintech visant les vétérans.",
  about: [
    "La technologie financière, ou fintech, ce sont les applications et les sites que les gens utilisent pour gérer leur banque, payer, emprunter, faire un budget et investir. La plupart utilisent maintenant l'IA en coulisses. Les anciens militaires (vétérans) sont souvent visés par les arnaques à cause de leurs revenus et prestations réguliers : savoir comment ces outils marchent vous protège, vous et votre famille.",
    "Dans ce cours, vous apprendrez comment marchent les applications de paiement, les banques en ligne, les robo-conseillers et la crypto, ce que l'assurance des dépôts couvre et ne couvre pas, comment vérifier une application avant de lui faire confiance, comment verrouiller vos comptes, et comment repérer et signaler les arnaques. Ces compétences aident aussi si vous voulez travailler dans la banque ou la fintech.",
    "Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Ce cours explique comment les choses marchent et leurs risques ; il ne vous dit pas quoi acheter ni dans quoi investir. Pour vos décisions d'argent personnelles, parlez à un professionnel qualifié et indépendant ou à un conseiller financier gratuit de l'armée ou de la VA (l'administration américaine des anciens combattants).",
    "Les organismes cités (FDIC, CFPB, FTC) sont américains. Si vous vivez dans un autre pays, cherchez l'autorité bancaire et l'organisme de protection des consommateurs de votre pays."
  ],
  finalTask: "Faites une fiche de sécurité fintech d'une page pour une application d'argent que vous utilisez ou que vous envisagez : ce qu'elle fait et comment elle utilise l'IA, si votre argent y est assuré par la FDIC (et comment vous l'avez vérifié), les réglages de sécurité que vous avez activés, trois signes d'arnaque, et où vous signaleriez un problème.",
  chapters: [
    {
      name: "Chapitre 1 : Comment marche la fintech",
      lessons: [
        {
          title: "Ce qu'est la fintech et où intervient l'IA",
          minutes: 4,
          goal: "Citer quatre types de fintech et une façon dont chacun utilise l'IA.",
          text: [
            "Fintech veut dire technologie financière : des applications et des sites pour l'argent. Les types courants sont la banque mobile, les applications de paiement pour envoyer de l'argent à des personnes, les applications de budget, les prêteurs en ligne et les applications d'investissement.",
            "L'IA est utilisée en coulisses : pour repérer la fraude (une carte utilisée dans deux pays en une heure), pour répondre aux questions dans les chatbots, pour classer vos dépenses par catégorie, et pour aider à décider qui obtient un prêt.",
            "Les décisions de l'IA peuvent être fausses. Un vrai achat peut être bloqué, ou un prêt refusé à cause de mauvaises données. Vous avez le droit de demander pourquoi et de contester les erreurs ; le Bureau de protection financière des consommateurs (Consumer Financial Protection Bureau, CFPB) explique ces droits."
          ],
          words: [["Fintech", "technologie financière : des applications et des sites pour la banque, les paiements, les emprunts, le budget et l'investissement."], ["Détection de la fraude", "des outils qui surveillent les paiements qui semblent volés ou faux."], ["Chatbot", "un programme d'IA qui répond aux questions par messages."]],
          slides: [
            { title: "Fintech = applications d'argent", bullets: ["Banque mobile et applications de paiement", "Applications de budget et prêteurs en ligne", "Applications d'investissement"] },
            { title: "L'IA en coulisses", bullets: ["Repère la fraude", "Répond aux questions dans les chatbots", "Classe les dépenses, aide à décider des prêts"] },
            { title: "L'IA peut se tromper", bullets: ["De vrais achats bloqués", "Des prêts refusés sur de mauvaises données", "Vous pouvez demander pourquoi et contester"] }
          ],
          sources: [{ name: "CFPB : l'argent tout au long de la vie militaire (militaires et vétérans)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Listez toutes les applications d'argent de votre téléphone. À côté de chacune, écrivez de quel type de fintech il s'agit et une façon dont elle pourrait utiliser l'IA.",
          youCanNow: "décrire les principaux types de fintech et comment ils utilisent l'IA."
        },
        {
          title: "Où est vraiment votre argent : banques, applications et assurance",
          minutes: 5,
          goal: "Vérifier si l'argent placé dans une application est protégé par l'assurance des dépôts de la FDIC.",
          text: [
            "L'assurance des dépôts de la FDIC (l'organisme fédéral américain qui garantit les dépôts bancaires) protège l'argent des comptes de dépôt (comptes courants, comptes d'épargne, comptes de dépôt du marché monétaire et certificats de dépôt) dans une banque assurée par la FDIC. Quand nous avons vérifié fdic.gov en octobre 2026, le montant standard était d'au moins 250 000 dollars par déposant dans chaque banque assurée.",
            "L'assurance de la FDIC ne couvre pas les actions, les obligations, les fonds communs de placement, les rentes, l'assurance-vie ni les crypto-actifs. Beaucoup d'applications de paiement ne sont pas des banques. Un solde laissé dans l'application peut ne pas être assuré, sauf si l'application le place pour vous sur un compte d'une banque assurée.",
            "Pour vérifier : lisez la page d'aide de l'application pour trouver le nom de sa banque partenaire, puis cherchez cette banque avec l'outil BankFind de la FDIC sur fdic.gov."
          ],
          steps: ["Ouvrez la page d'aide ou les mentions légales de l'application et cherchez \"FDIC\" et un nom de banque.", "Cherchez ce nom de banque avec BankFind de la FDIC sur fdic.gov.", "Vérifiez si votre type d'argent (dépôt, actions, crypto) est couvert.", "Si vous n'êtes pas sûr, mettez votre argent de tous les jours sur un compte d'une banque assurée."],
          words: [["FDIC", "Federal Deposit Insurance Corporation : protège les dépôts dans les banques assurées si la banque fait faillite."], ["Compte de dépôt", "un compte courant, un compte d'épargne, un compte de dépôt du marché monétaire ou un certificat de dépôt dans une banque."], ["BankFind", "l'outil gratuit de la FDIC pour vérifier si une banque est assurée."]],
          slides: [
            { title: "La FDIC couvre les dépôts", bullets: ["Comptes courants, épargne, marché monétaire, certificats", "Au moins 250 000 dollars par déposant et par banque (oct. 2026)"] },
            { title: "La FDIC ne couvre PAS", bullets: ["Actions, obligations et fonds", "Rentes et assurance-vie", "Crypto-actifs"] },
            { title: "Vérifiez votre application", bullets: ["Trouvez sa banque partenaire dans l'aide", "Cherchez-la avec BankFind de la FDIC", "Pas sûr ? Gardez l'argent dans une banque assurée"] }
          ],
          sources: [{ name: "FDIC : assurance des dépôts", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Choisissez une application d'argent que vous utilisez. Trouvez sa banque partenaire dans les pages d'aide et vérifiez cette banque sur BankFind de la FDIC. Notez si votre solde est assuré.",
          youCanNow: "vérifier si l'argent placé dans une application est protégé par l'assurance des dépôts de la FDIC."
        },
        {
          title: "Comment marchent les robo-conseillers et la crypto, et leurs risques",
          minutes: 5,
          goal: "Expliquer comment marchent un robo-conseiller et la crypto et citer leurs principaux risques.",
          text: [
            "Un robo-conseiller est une application qui utilise des règles informatiques pour placer votre argent selon vos réponses, comme vos objectifs et le temps avant d'avoir besoin de l'argent. Il prend des frais. Les placements peuvent perdre de la valeur, et ils ne sont pas assurés par la FDIC.",
            "La crypto (cryptomonnaie) est une monnaie numérique enregistrée dans un registre partagé en ligne appelé blockchain. Les prix peuvent monter et baisser fortement. La FTC (Federal Trade Commission, l'agence américaine de protection des consommateurs) avertit que les paiements en crypto ne peuvent en général pas être annulés et que la crypto n'est pas assurée par l'État comme les dépôts bancaires.",
            "Ce cours ne vous dit pas s'il faut utiliser l'un ou l'autre. Avant toute décision d'investissement, renseignez-vous sur les frais et les risques sur des pages officielles et parlez à un professionnel qualifié et indépendant ou à un conseiller financier gratuit de l'armée ou de la VA."
          ],
          words: [["Robo-conseiller", "une application qui place de l'argent avec des règles informatiques selon vos réponses."], ["Cryptomonnaie", "une monnaie numérique enregistrée sur une blockchain."], ["Blockchain", "un registre partagé en ligne des transactions, très difficile à modifier."], ["Volatil", "un prix qui peut beaucoup monter et descendre, très vite."]],
          slides: [
            { title: "Robo-conseillers", bullets: ["Placent selon des règles et vos réponses", "Prennent des frais", "Peuvent perdre de la valeur ; pas assurés FDIC"] },
            { title: "Crypto", bullets: ["Monnaie numérique sur une blockchain", "Les prix peuvent varier fortement", "Paiements en général impossibles à annuler"] },
            { title: "Avant toute décision", bullets: ["Frais et risques sur des pages officielles", "Parlez à un professionnel qualifié et indépendant", "Ce cours ne donne aucun conseil de placement"] }
          ],
          sources: [{ name: "FTC : ce qu'il faut savoir sur la cryptomonnaie et les arnaques", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC : assurance des dépôts", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Demandez à un assistant d'IA : \"Explique avec des mots simples comment marchent un robo-conseiller et la crypto, avec les principaux risques de chacun.\" Comparez sa liste de risques avec la page de la FTC sur la crypto et notez ce qu'il a oublié.",
          youCanNow: "expliquer comment marchent les robo-conseillers et la crypto et citer leurs principaux risques."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment marche la fintech",
        questions: [
          { q: "Lequel est un exemple d'IA dans la fintech ?", options: ["La porte d'entrée d'une banque", "Imprimer des chèques papier", "Repérer une carte utilisée dans deux pays en une heure", "Un ticket de caisse papier"], answer: 2, why: "La détection de la fraude est une utilisation courante de l'IA." },
          { q: "Une IA bloque à tort votre vrai achat. Que pouvez-vous faire ?", options: ["Demander pourquoi et contester l'erreur", "Rien, l'IA a le dernier mot", "Fermer tous vos comptes", "Publier votre numéro de carte en ligne"], answer: 0, why: "Vous avez le droit de contester et de faire corriger les erreurs." },
          { q: "Selon fdic.gov en octobre 2026, qu'est-ce qui est assuré par la FDIC dans une banque assurée ?", options: ["Un fonds commun de placement", "La crypto", "Les actions", "Un compte d'épargne"], answer: 3, why: "Les comptes de dépôt comme l'épargne sont couverts." },
          { q: "Comment vérifier que la banque partenaire d'une application est assurée par la FDIC ?", options: ["Croire les publicités de l'application", "Chercher la banque avec BankFind de la FDIC", "Demander à un inconnu", "Regarder les réseaux sociaux"], answer: 1, why: "BankFind est l'outil officiel de la FDIC." },
          { q: "Que dit la FTC sur les paiements en crypto ?", options: ["Ils sont toujours assurés", "Ils ne peuvent en général pas être annulés", "Les banques les garantissent", "Ils sont sans risque"], answer: 1, why: "La FTC avertit que les paiements en crypto sont en général irréversibles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser la fintech en sécurité",
      lessons: [
        {
          title: "Vérifier une application avant de lui faire confiance",
          minutes: 5,
          goal: "Faire une vérification en cinq points sur une application d'argent avant d'y mettre de l'argent.",
          text: [
            "Les escrocs créent de fausses applications et de faux sites d'argent qui ont l'air vrais. Avant de télécharger ou de déposer de l'argent, vérifiez qui gère l'application et si elle est réelle.",
            "Téléchargez l'application seulement depuis le magasin d'applications officiel et vérifiez que le nom du développeur correspond à la vraie entreprise. Lisez le site de l'entreprise pour trouver son nom complet et sa banque partenaire. Vérifiez la banque sur BankFind de la FDIC. Cherchez le nom de l'entreprise avec le mot \"plaintes\" et regardez les informations sur les plaintes du CFPB.",
            "Vous pouvez demander à un assistant d'IA d'expliquer les conditions d'une application, mais ne lui faites pas confiance pour dire qu'une application est sûre. Vérifiez vous-même les sources officielles."
          ],
          steps: ["Téléchargez seulement depuis le magasin d'applications officiel.", "Vérifiez que le nom du développeur correspond à la vraie entreprise.", "Trouvez le nom complet de l'entreprise et sa banque partenaire sur son propre site.", "Vérifiez la banque sur BankFind de la FDIC.", "Cherchez les plaintes, y compris sur consumerfinance.gov."],
          words: [["Développeur", "l'entreprise qui a fait une application, indiquée dans la fiche du magasin d'applications."], ["Conditions d'utilisation", "les règles et les frais que vous acceptez quand vous utilisez une application."]],
          slides: [
            { title: "Les fausses applications ont l'air vraies", bullets: ["Vérifiez avant de télécharger ou de déposer"] },
            { title: "Vérification en cinq points", bullets: ["Magasin officiel, bon développeur", "Nom complet et banque partenaire", "BankFind de la FDIC pour la banque", "Recherche de plaintes"] },
            { title: "L'IA explique, elle ne valide pas", bullets: ["Demandez à l'IA ce que veulent dire les conditions", "Vérifiez la sécurité vous-même sur des sources officielles"] }
          ],
          sources: [{ name: "CFPB : l'argent tout au long de la vie militaire (plaintes et droits)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC : assurance des dépôts (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Faites la vérification en cinq points sur une application d'argent que vous utilisez ou envisagez. Écrivez oui ou non à côté de chaque point.",
          youCanNow: "vérifier qu'une application d'argent est réelle avant de lui confier de l'argent."
        },
        {
          title: "Verrouiller vos comptes d'argent",
          minutes: 5,
          goal: "Activer les principaux réglages de sécurité d'une application d'argent.",
          text: [
            "Traitez vos comptes d'argent comme une zone sécurisée : plusieurs couches de protection. Utilisez un mot de passe fort et différent pour chaque compte d'argent, et activez la vérification en deux étapes pour qu'un code ou une application soit nécessaire pour se connecter.",
            "Activez les alertes pour que l'application vous prévienne de chaque paiement, connexion ou modification de vos informations. Des alertes rapides permettent d'arrêter la fraude tôt.",
            "Ne donnez jamais un code de connexion à personne, même à quelqu'un qui dit venir de la banque, de la VA ou de l'application. Les vraies entreprises ne le demandent pas. Ne tapez jamais de mots de passe ni de numéros de compte complets dans un assistant d'IA."
          ],
          steps: ["Choisissez un mot de passe fort et unique.", "Activez la vérification en deux étapes dans les réglages de sécurité de l'application.", "Activez les alertes pour les paiements, les connexions et les modifications.", "Vérifiez les appareils connectés et retirez ceux que vous ne connaissez pas.", "Promettez-vous de ne jamais donner un code de connexion."],
          words: [["Vérification en deux étapes", "une deuxième vérification, comme un code ou une validation dans une application, nécessaire pour se connecter."], ["Alerte", "un message que l'application envoie quand quelque chose se passe sur votre compte."]],
          slides: [
            { title: "Plusieurs couches de protection", bullets: ["Mot de passe fort et unique", "Vérification en deux étapes activée"] },
            { title: "Activez les alertes", bullets: ["Chaque paiement", "Chaque connexion", "Chaque modification de vos informations"] },
            { title: "Ne donnez jamais", bullets: ["Les codes de connexion, à personne", "Mots de passe ou numéros de compte aux outils d'IA"] }
          ],
          tryIt: "Ouvrez les réglages de sécurité d'une application d'argent. Activez la vérification en deux étapes et les alertes de paiement, et retirez tout appareil que vous ne reconnaissez pas.",
          youCanNow: "configurer les principaux réglages de sécurité qui protègent un compte d'argent."
        },
        {
          title: "Repérer et signaler les arnaques fintech",
          minutes: 5,
          goal: "Repérer les signes d'une arnaque fintech et savoir où la signaler.",
          text: [
            "La FTC avertit que seuls les escrocs exigent un paiement en crypto, seuls les escrocs garantissent des profits ou de gros gains, et un emploi qui demande de payer à l'avance des frais en crypto est une arnaque. Les contacts amoureux qui proposent des conseils pour investir sont aussi un signe d'alerte.",
            "Les escrocs se font aussi passer pour la banque, une agence de l'État ou la VA et disent que votre argent est en danger. L'IA leur permet d'écrire des messages parfaits et même d'imiter des voix. Ne cliquez pas sur leurs liens et ne rappelez pas les numéros qu'ils donnent ; utilisez le numéro du site officiel ou de votre carte.",
            "Pour signaler : déposez une plainte sur un produit financier auprès du CFPB sur consumerfinance.gov ou par téléphone, et signalez la fraude à la FTC sur ReportFraud.ftc.gov. Prévenez votre banque tout de suite si de l'argent est sorti de votre compte. Si vous vivez hors des États-Unis, signalez-la à la police et à l'organisme de protection des consommateurs de votre pays."
          ],
          steps: ["Repérez : paiement exigé en crypto, gains garantis, frais à l'avance, appels urgents \"votre argent est en danger\".", "Arrêtez. Ne cliquez pas, ne payez pas, ne donnez pas de code.", "Appelez l'entreprise au numéro de son site officiel ou de votre carte.", "Prévenez tout de suite votre banque si de l'argent a bougé.", "Signalez au CFPB ou sur ReportFraud.ftc.gov."],
          words: [["Arnaque à l'usurpation", "quand un escroc se fait passer pour une entreprise, une agence ou une personne de confiance."], ["Gains garantis", "une promesse de profit sans risque ; les vrais placements ne promettent jamais ça."]],
          slides: [
            { title: "Signaux d'alerte de la FTC", bullets: ["Paiement exigé en crypto", "Profits ou gros gains garantis", "Frais en crypto à l'avance pour un emploi"] },
            { title: "Les usurpateurs utilisent l'IA", bullets: ["Messages parfaits et voix imitées", "Pas de clic sur leurs liens ni rappel de leurs numéros", "Utilisez le numéro officiel"] },
            { title: "Signalez-le", bullets: ["Prévenez tout de suite votre banque", "Plainte au CFPB : consumerfinance.gov", "FTC : ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC : ce qu'il faut savoir sur la cryptomonnaie et les arnaques", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB : l'argent tout au long de la vie militaire (déposer une plainte)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Tâche finale : faites votre fiche de sécurité fintech d'une page pour une application : ce qu'elle fait et comment elle utilise l'IA, si votre argent est assuré et comment vous l'avez vérifié, les réglages de sécurité activés, trois signes d'arnaque, et où vous signaleriez un problème.",
          youCanNow: "comprendre comment marche une application d'argent, la vérifier et la sécuriser, et repérer et signaler les arnaques fintech."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser la fintech en sécurité",
        questions: [
          { q: "Où télécharger une application d'argent ?", options: ["Sur n'importe quel site", "Par un lien dans un SMS d'un inconnu", "Par une publicité", "Dans le magasin d'applications officiel, de la vraie entreprise"], answer: 3, why: "Les magasins officiels et le bon développeur réduisent le risque de fausses applications." },
          { q: "Un assistant d'IA peut-il vous dire avec certitude qu'une application est sûre ?", options: ["Non ; vérifiez vous-même les sources officielles", "Oui, toujours", "Seulement le week-end", "Seulement pour les applications de crypto"], answer: 0, why: "L'IA peut expliquer les conditions mais ne peut pas vérifier la sécurité." },
          { q: "Que fait la vérification en deux étapes ?", options: ["Elle supprime votre mot de passe", "Elle double votre argent", "Elle demande une deuxième vérification, comme un code, pour se connecter", "Elle partage votre compte"], answer: 2, why: "Une deuxième vérification bloque ceux qui ont volé votre mot de passe." },
          { q: "Quelqu'un dit venir de votre banque et demande le code de connexion envoyé sur votre téléphone. Vous :", options: ["Le publiez en ligne", "Le lui lisez", "Le lui envoyez par SMS", "Ne le donnez jamais ; appelez la banque au numéro officiel"], answer: 3, why: "Les vraies entreprises ne demandent jamais votre code de connexion." },
          { q: "Selon la FTC, lequel est un signe d'arnaque ?", options: ["Un ticket de caisse d'un magasin", "Un relevé bancaire mensuel", "Une promesse de gros gains garantis", "Une alerte que vous avez configurée"], answer: 2, why: "Seuls les escrocs garantissent des profits." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : IA et technologies financières",
    questions: [
      { q: "Fintech veut dire :", options: ["Technologie fine", "Technologie financière : applications et sites pour l'argent", "Technologie de fitness", "Un type de coffre-fort"], answer: 1, why: "Elle couvre la technologie de la banque, des paiements, des emprunts, du budget et de l'investissement." },
      { q: "Laquelle est une utilisation courante de l'IA dans les applications d'argent ?", options: ["Classer vos dépenses par catégorie", "Imprimer des billets", "Ouvrir les portes des banques", "Envoyer des relevés par la poste"], answer: 0, why: "L'IA classe les dépenses dans les applications de budget." },
      { q: "Un prêt est refusé à cause de données fausses. Vous pouvez :", options: ["Payer un inconnu pour corriger", "Ne rien faire", "Demander pourquoi et contester l'erreur", "Donner votre mot de passe à un chatbot"], answer: 2, why: "Vous avez le droit de contester les erreurs." },
      { q: "Quelle agence explique vos droits sur les produits financiers et reçoit les plaintes ?", options: ["Le Consumer Financial Protection Bureau (CFPB)", "La Poste", "La NASA", "Le service des parcs nationaux"], answer: 0, why: "Le CFPB traite les plaintes des consommateurs sur la finance." },
      { q: "L'assurance de la FDIC protège :", options: ["N'importe quel solde d'application", "Toute la crypto", "Toutes les actions", "Les dépôts dans les banques assurées par la FDIC"], answer: 3, why: "Elle couvre les comptes de dépôt dans les banques assurées." },
      { q: "Selon fdic.gov en octobre 2026, le montant assuré standard est d'au moins :", options: ["2 500 dollars", "250 000 dollars par déposant et par banque assurée", "25 000 dollars", "Illimité"], answer: 1, why: "La page de la FDIC indique au moins 250 000 dollars dans chaque banque assurée." },
      { q: "Un solde dans une application de paiement est-il toujours assuré par la FDIC ?", options: ["Oui, toujours", "Non ; cela dépend de si l'application le garde dans une banque assurée", "Seulement le vendredi", "Seulement si c'est de la crypto"], answer: 1, why: "Beaucoup d'applications de paiement ne sont pas des banques." },
      { q: "BankFind est :", options: ["Un site d'emploi", "Un portefeuille crypto", "Une application de prêt", "L'outil de la FDIC pour vérifier si une banque est assurée"], answer: 3, why: "BankFind est sur fdic.gov." },
      { q: "Un robo-conseiller est :", options: ["Une application qui place de l'argent avec des règles informatiques selon vos réponses", "Un robot de banque qui distribue des billets", "Un prêt gratuit de l'État", "Une police d'assurance"], answer: 0, why: "Il automatise l'investissement contre des frais." },
      { q: "Qu'est-ce qui est vrai sur la crypto ?", options: ["La FDIC l'assure", "Elle monte forcément", "Les prix peuvent varier fortement et elle n'est pas assurée comme les dépôts bancaires", "Les paiements sont faciles à annuler"], answer: 2, why: "La crypto est volatile et n'est pas assurée comme un dépôt." },
      { q: "Avant toute décision d'investissement, ce cours dit de :", options: ["Tout investir d'un coup", "Faire ce que dit une IA", "Suivre un conseil vu sur les réseaux sociaux", "Se renseigner sur les frais et les risques et parler à un professionnel qualifié et indépendant"], answer: 3, why: "Le cours explique, il ne conseille pas." },
      { q: "Le premier point de la vérification d'une application est :", options: ["La partager avec des amis", "Déposer de l'argent d'abord", "La télécharger seulement depuis le magasin officiel, du bon développeur", "Désactiver les alertes"], answer: 2, why: "Les fausses applications sont courantes hors des magasins officiels." },
      { q: "Où trouver la banque partenaire d'une application ?", options: ["Dans une publicité au hasard", "Sur le site ou les pages d'aide de l'entreprise", "Dans un SMS", "Dans une supposition de l'IA"], answer: 1, why: "Les pages officielles de l'entreprise nomment la banque." },
      { q: "Laquelle est une bonne mesure de sécurité ?", options: ["Activer la vérification en deux étapes", "Utiliser le même mot de passe partout", "Donner les codes au service client", "Désactiver les alertes"], answer: 0, why: "Une deuxième étape bloque les connexions avec un mot de passe volé." },
      { q: "Pourquoi activer les alertes de paiement ?", options: ["Pour ralentir votre téléphone", "Pour recevoir plus de publicités", "Pour repérer et arrêter la fraude tôt", "Pour partager votre solde"], answer: 2, why: "Des alertes rapides permettent d'agir vite." },
      { q: "Que ne faut-il JAMAIS taper dans un assistant d'IA ?", options: ["Votre mot de passe ou votre numéro de compte complet", "\"Explique l'assurance de la FDIC\"", "\"Qu'est-ce qu'un robo-conseiller ?\"", "\"Liste les signes d'arnaque\""], answer: 0, why: "Les détails financiers privés doivent rester hors des outils d'IA." },
      { q: "Un appel dit que votre argent est en danger et que vous devez le mettre sur un compte crypto \"sûr\". C'est :", options: ["Une mise à jour de sécurité", "Une pratique bancaire normale", "Une prestation de la VA", "Une arnaque à l'usurpation"], answer: 3, why: "La FTC avertit que ce sont des arnaques." },
      { q: "Un emploi vous demande de payer à l'avance des frais en crypto. C'est :", options: ["Une étape normale d'embauche", "Une arnaque, selon la FTC", "Une formation payée par la VA", "Un impôt"], answer: 1, why: "La FTC dit que les frais en crypto à l'avance pour un emploi sont des arnaques." },
      { q: "Comment rappeler une entreprise au sujet d'un message suspect ?", options: ["Au numéro donné dans le message", "Au numéro de son site officiel ou de votre carte", "En répondant au SMS", "En demandant un numéro à l'appelant"], answer: 1, why: "Les escrocs donnent de faux numéros." },
      { q: "Où signaler une fraude à la FTC ?", options: ["À un chatbot d'IA", "Dans un commentaire sur un réseau social", "Sur le site de l'escroc", "Sur ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov est le site de signalement de la FTC." }
    ]
  }
};
