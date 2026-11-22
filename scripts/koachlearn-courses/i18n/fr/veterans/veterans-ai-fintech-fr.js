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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans, des militaires et leurs familles qui utilisent ou envisagent des applications d'argent pour gérer un compte, payer, emprunter, faire un budget ou investir. Les vétérans sont souvent visés par des arnaques à cause de leur revenu et de leurs prestations réguliers.",
    startingPoint: "Ils utilisent un smartphone et au moins une application d'argent ou de paiement. La plupart ne savent pas où l'application garde leur argent, s'il est assuré ni comment l'application utilise l'IA, et peu ont activé tous les réglages de sécurité.",
    gap: "Des applications d'argent peuvent ressembler à des banques sans en être, et les arnaqueurs se font passer pour des banques, des organismes publics et des offres d'investissement. Les apprenants doivent vérifier le sérieux et l'assurance d'une application sur des sources officielles, sécuriser leurs comptes, et repérer et signaler les arnaques fintech avant de perdre de l'argent.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; aucune connaissance en finance supposée",
      "Appareils : un smartphone avec l'application d'argent de l'apprenant",
      "Vie privée : aucun mot de passe, code ou numéro de compte complet dans une demande à l'IA ou un exercice",
      "Aucun conseil en placement : la crypto et les robo-conseillers sont expliqués avec leurs risques, et les décisions vont à un professionnel qualifié et indépendant",
      "Les règles et les plafonds d'assurance changent : les apprenants vérifient directement sur fdic.gov, auprès du CFPB et de la FTC"
    ],
    prerequisites: "Aucun. « L'IA pour réussir sa vie financière et personnelle » est un bon premier cours sur le budget et les arnaques."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des applications d'argent de votre téléphone", action: "repérer quatre types de fintech et une façon dont chacun utilise l'IA", standard: "et dire ce que vous pouvez faire quand une décision de l'IA sur votre argent est fausse" },
    { id: "O2", condition: "Pour une application d'argent que vous utilisez", action: "vérifier si l'argent de l'application est protégé par l'assurance des dépôts de la FDIC", standard: "en trouvant sa banque partenaire et en le confirmant avec BankFind de la FDIC" },
    { id: "O3", condition: "Quand on vous parle d'un robo-conseiller ou de crypto", action: "expliquer comment chacun fonctionne et lister ses principaux risques", standard: "en vérifiant la liste des risques avec une source officielle comme la FTC" },
    { id: "O4", condition: "Avant de mettre de l'argent dans une application", action: "faire la vérification en cinq points sur l'application", standard: "en écrivant oui ou non pour chaque point" },
    { id: "O5", condition: "Dans une application d'argent", action: "activer la vérification en deux étapes et les alertes de paiement, et supprimer les appareils inconnus", standard: "sans partager aucun mot de passe ni code" },
    { id: "O6", condition: "Face à un message, un appel ou une offre sur l'argent", action: "repérer les signes d'une arnaque fintech et la signaler au bon endroit", standard: "sans partager de code et sans rien payer" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment marche la fintech",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "décrire les principaux types de fintech et comment ils utilisent l'IA.",
          quickCheck: [
            { objective: "O1", q: "Lequel est un type de fintech ?", options: ["Un chéquier papier", "Une boîte à argent à la maison", "Une application de paiement sur votre téléphone", "Un relevé bancaire imprimé"], answer: 2, why: "La fintech, ce sont les applications et les sites pour l'argent, comme les applications de paiement, de banque, de budget et d'investissement." },
            { objective: "O1", q: "L'IA de votre application d'argent signale votre paiement de loyer habituel comme une fraude et le bloque. Que faites-vous ?", options: ["Contacter l'entreprise, demander pourquoi et contester l'erreur", "Supprimer l'application et ne plus jamais payer le loyer en ligne", "Partager votre mot de passe pour qu'ils corrigent", "Attendre en espérant que ça passe"], answer: 0, why: "Quand une décision de l'IA sur votre argent est fausse, vous pouvez demander pourquoi et la contester." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "vérifier si l'argent placé dans une application est protégé par l'assurance des dépôts de la FDIC.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que BankFind de la FDIC ?", options: ["Une application de prêt", "Une plateforme d'échange de crypto", "Un outil de score de crédit", "L'outil de la FDIC pour vérifier si une banque est assurée"], answer: 3, why: "BankFind vous permet de confirmer qu'une banque est assurée par la FDIC." },
            { objective: "O2", q: "Une application de paiement dit que votre argent est « en sécurité ». Comment vérifiez-vous s'il est assuré ?", options: ["Croire la publicité de l'application", "Trouver sa banque partenaire dans les pages d'aide et la chercher avec BankFind", "Demander à l'assistant d'IA", "Supposer que toutes les applications sont des banques"], answer: 1, why: "L'assurance dépend de l'endroit où l'application garde votre argent, dans une banque assurée ou non, ce que vous confirmez avec BankFind." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "expliquer comment marchent les robo-conseillers et la crypto et citer leurs principaux risques.",
          quickCheck: [
            { objective: "O3", q: "Comment fonctionne un robo-conseiller ?", options: ["Il investit avec des règles informatiques fondées sur vos réponses", "Une personne de la banque choisit des actions gratuitement", "Il garantit que votre argent augmente", "C'est la même chose qu'un compte d'épargne"], answer: 0, why: "Un robo-conseiller utilise des règles informatiques et vos réponses pour investir ; il comporte un risque de marché." },
            { objective: "O3", q: "Un ami dit que la crypto est « assurée comme un compte bancaire ». Que lui répondez-vous ?", options: ["C'est vrai", "Seulement le week-end", "La crypto n'est pas assurée comme les dépôts bancaires et son prix peut varier fortement", "Les paiements en crypto peuvent toujours être annulés"], answer: 2, why: "La crypto n'est pas assurée comme les dépôts bancaires, son prix peut varier et les paiements ne peuvent en général pas être annulés." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment marche la fintech",
        questions: [
          { objective: "O1", q: "Lequel est un exemple d'IA dans la fintech ?", options: ["La porte d'entrée d'une banque", "Imprimer des chèques papier", "Repérer une carte utilisée dans deux pays en une heure", "Un ticket de caisse papier"], answer: 2, why: "La détection de la fraude est une utilisation courante de l'IA." },
          { objective: "O1", q: "Une IA bloque à tort votre vrai achat. Que pouvez-vous faire ?", options: ["Demander pourquoi et contester l'erreur", "Rien, l'IA a le dernier mot", "Fermer tous vos comptes", "Publier votre numéro de carte en ligne"], answer: 0, why: "Vous avez le droit de contester et de faire corriger les erreurs." },
          { objective: "O2", q: "Selon fdic.gov en octobre 2026, qu'est-ce qui est assuré par la FDIC dans une banque assurée ?", options: ["Un fonds commun de placement", "La crypto", "Les actions", "Un compte d'épargne"], answer: 3, why: "Les comptes de dépôt comme l'épargne sont couverts." },
          { objective: "O2", q: "Comment vérifier que la banque partenaire d'une application est assurée par la FDIC ?", options: ["Croire les publicités de l'application", "Chercher la banque avec BankFind de la FDIC", "Demander à un inconnu", "Regarder les réseaux sociaux"], answer: 1, why: "BankFind est l'outil officiel de la FDIC." },
          { objective: "O3", q: "Que dit la FTC sur les paiements en crypto ?", options: ["Ils sont toujours assurés", "Ils ne peuvent en général pas être annulés", "Les banques les garantissent", "Ils sont sans risque"], answer: 1, why: "La FTC avertit que les paiements en crypto sont en général irréversibles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser la fintech en sécurité",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "vérifier qu'une application d'argent est réelle avant de lui confier de l'argent.",
          quickCheck: [
            { objective: "O4", q: "Quel est le premier point de la vérification en cinq points ?", options: ["Lire seulement les avis en ligne", "Télécharger seulement depuis le magasin d'applications officiel, chez le bon développeur", "Regarder si l'application est jolie", "Demander au robot de discussion de l'application s'il est sûr"], answer: 1, why: "Les fausses applications copient les vraies : vous commencez donc par prendre la vraie application dans le magasin officiel." },
            { objective: "O4", q: "Un assistant d'IA dit qu'une nouvelle application d'argent est « sûre à coup sûr ». Que faites-vous ?", options: ["Y mettre toutes vos économies", "Partager l'application avec des amis", "Sauter les autres vérifications", "Faire vous-même la vérification en cinq points sur des sources officielles"], answer: 3, why: "L'IA ne peut pas confirmer avec certitude qu'une application est sûre ; vous vérifiez vous-même les sources officielles." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "configurer les principaux réglages de sécurité qui protègent un compte d'argent.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi activer les alertes de paiement ?", options: ["Pour recevoir de la publicité", "Pour partager votre solde avec des amis", "Pour repérer et arrêter une fraude tôt", "Pour que l'application soit plus rapide"], answer: 2, why: "Les alertes vous informent de chaque paiement pour que vous repériez vite une fraude." },
            { objective: "O5", q: "Dans les réglages de sécurité de votre application, vous voyez un appareil que vous ne reconnaissez pas. Que faites-vous ?", options: ["Le supprimer et changer votre mot de passe", "Le laisser ; ce n'est sans doute rien", "Désactiver la vérification en deux étapes", "Publier une capture d'écran en ligne"], answer: 0, why: "Un appareil inconnu peut être quelqu'un d'autre dans votre compte : vous le supprimez et sécurisez le compte." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "comprendre comment marche une application d'argent, la vérifier et la sécuriser, et repérer et signaler les arnaques fintech.",
          quickCheck: [
            { objective: "O6", q: "Lequel est un signe d'arnaque fintech ?", options: ["Un relevé mensuel que vous attendiez", "Les horaires affichés d'une agence bancaire", "Un reçu pour un achat que vous avez fait", "Une pression pour déplacer vite votre argent vers un compte « sûr »"], answer: 3, why: "Vous presser de déplacer votre argent vers un compte « sûr » est une arnaque classique à l'usurpation d'identité." },
            { objective: "O6", q: "Vous recevez un SMS de « votre banque » avec un lien pour régler un problème. Que faites-vous ?", options: ["Toucher le lien et vous connecter", "Ne pas le toucher ; appeler la banque au numéro de son site officiel ou de votre carte", "Répondre avec votre numéro de compte", "Le transférer à des amis"], answer: 1, why: "Vous contactez l'entreprise vous-même avec un numéro de confiance, pas celui du message." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser la fintech en sécurité",
        questions: [
          { objective: "O4", q: "Où télécharger une application d'argent ?", options: ["Sur n'importe quel site", "Par un lien dans un SMS d'un inconnu", "Par une publicité", "Dans le magasin d'applications officiel, de la vraie entreprise"], answer: 3, why: "Les magasins officiels et le bon développeur réduisent le risque de fausses applications." },
          { objective: "O4", q: "Un assistant d'IA peut-il vous dire avec certitude qu'une application est sûre ?", options: ["Non ; vérifiez vous-même les sources officielles", "Oui, toujours", "Seulement le week-end", "Seulement pour les applications de crypto"], answer: 0, why: "L'IA peut expliquer les conditions mais ne peut pas vérifier la sécurité." },
          { objective: "O5", q: "Que fait la vérification en deux étapes ?", options: ["Elle supprime votre mot de passe", "Elle double votre argent", "Elle demande une deuxième vérification, comme un code, pour se connecter", "Elle partage votre compte"], answer: 2, why: "Une deuxième vérification bloque ceux qui ont volé votre mot de passe." },
          { objective: "O6", q: "Quelqu'un dit venir de votre banque et demande le code de connexion envoyé sur votre téléphone. Vous :", options: ["Le publiez en ligne", "Le lui lisez", "Le lui envoyez par SMS", "Ne le donnez jamais ; appelez la banque au numéro officiel"], answer: 3, why: "Les vraies entreprises ne demandent jamais votre code de connexion." },
          { objective: "O6", q: "Selon la FTC, lequel est un signe d'arnaque ?", options: ["Un ticket de caisse d'un magasin", "Un relevé bancaire mensuel", "Une promesse de gros gains garantis", "Une alerte que vous avez configurée"], answer: 2, why: "Seuls les escrocs garantissent des profits." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : IA et technologies financières",
    questions: [
      { objective: "O1", q: "Fintech veut dire :", options: ["Technologie fine", "Technologie financière : applications et sites pour l'argent", "Technologie de fitness", "Un type de coffre-fort"], answer: 1, why: "Elle couvre la technologie de la banque, des paiements, des emprunts, du budget et de l'investissement." },
      { objective: "O1", q: "Laquelle est une utilisation courante de l'IA dans les applications d'argent ?", options: ["Classer vos dépenses par catégorie", "Imprimer des billets", "Ouvrir les portes des banques", "Envoyer des relevés par la poste"], answer: 0, why: "L'IA classe les dépenses dans les applications de budget." },
      { objective: "O1", q: "Un prêt est refusé à cause de données fausses. Vous pouvez :", options: ["Payer un inconnu pour corriger", "Ne rien faire", "Demander pourquoi et contester l'erreur", "Donner votre mot de passe à un chatbot"], answer: 2, why: "Vous avez le droit de contester les erreurs." },
      { objective: "O1", q: "Quelle agence explique vos droits sur les produits financiers et reçoit les plaintes ?", options: ["Le Consumer Financial Protection Bureau (CFPB)", "La Poste", "La NASA", "Le service des parcs nationaux"], answer: 0, why: "Le CFPB traite les plaintes des consommateurs sur la finance." },
      { objective: "O2", q: "L'assurance de la FDIC protège :", options: ["N'importe quel solde d'application", "Toute la crypto", "Toutes les actions", "Les dépôts dans les banques assurées par la FDIC"], answer: 3, why: "Elle couvre les comptes de dépôt dans les banques assurées." },
      { objective: "O2", q: "Selon fdic.gov en octobre 2026, le montant assuré standard est d'au moins :", options: ["2 500 dollars", "250 000 dollars par déposant et par banque assurée", "25 000 dollars", "Illimité"], answer: 1, why: "La page de la FDIC indique au moins 250 000 dollars dans chaque banque assurée." },
      { objective: "O2", q: "Un solde dans une application de paiement est-il toujours assuré par la FDIC ?", options: ["Oui, toujours", "Non ; cela dépend de si l'application le garde dans une banque assurée", "Seulement le vendredi", "Seulement si c'est de la crypto"], answer: 1, why: "Beaucoup d'applications de paiement ne sont pas des banques." },
      { objective: "O2", q: "BankFind est :", options: ["Un site d'emploi", "Un portefeuille crypto", "Une application de prêt", "L'outil de la FDIC pour vérifier si une banque est assurée"], answer: 3, why: "BankFind est sur fdic.gov." },
      { objective: "O3", q: "Un robo-conseiller est :", options: ["Une application qui place de l'argent avec des règles informatiques selon vos réponses", "Un robot de banque qui distribue des billets", "Un prêt gratuit de l'État", "Une police d'assurance"], answer: 0, why: "Il automatise l'investissement contre des frais." },
      { objective: "O3", q: "Qu'est-ce qui est vrai sur la crypto ?", options: ["La FDIC l'assure", "Elle monte forcément", "Les prix peuvent varier fortement et elle n'est pas assurée comme les dépôts bancaires", "Les paiements sont faciles à annuler"], answer: 2, why: "La crypto est volatile et n'est pas assurée comme un dépôt." },
      { objective: "O3", q: "Avant toute décision d'investissement, ce cours dit de :", options: ["Tout investir d'un coup", "Faire ce que dit une IA", "Suivre un conseil vu sur les réseaux sociaux", "Se renseigner sur les frais et les risques et parler à un professionnel qualifié et indépendant"], answer: 3, why: "Le cours explique, il ne conseille pas." },
      { objective: "O4", q: "Le premier point de la vérification d'une application est :", options: ["La partager avec des amis", "Déposer de l'argent d'abord", "La télécharger seulement depuis le magasin officiel, du bon développeur", "Désactiver les alertes"], answer: 2, why: "Les fausses applications sont courantes hors des magasins officiels." },
      { objective: "O4", q: "Où trouver la banque partenaire d'une application ?", options: ["Dans une publicité au hasard", "Sur le site ou les pages d'aide de l'entreprise", "Dans un SMS", "Dans une supposition de l'IA"], answer: 1, why: "Les pages officielles de l'entreprise nomment la banque." },
      { objective: "O5", q: "Laquelle est une bonne mesure de sécurité ?", options: ["Activer la vérification en deux étapes", "Utiliser le même mot de passe partout", "Donner les codes au service client", "Désactiver les alertes"], answer: 0, why: "Une deuxième étape bloque les connexions avec un mot de passe volé." },
      { objective: "O5", q: "Pourquoi activer les alertes de paiement ?", options: ["Pour ralentir votre téléphone", "Pour recevoir plus de publicités", "Pour repérer et arrêter la fraude tôt", "Pour partager votre solde"], answer: 2, why: "Des alertes rapides permettent d'agir vite." },
      { objective: "O5", q: "Que ne faut-il JAMAIS taper dans un assistant d'IA ?", options: ["Votre mot de passe ou votre numéro de compte complet", "\"Explique l'assurance de la FDIC\"", "\"Qu'est-ce qu'un robo-conseiller ?\"", "\"Liste les signes d'arnaque\""], answer: 0, why: "Les détails financiers privés doivent rester hors des outils d'IA." },
      { objective: "O6", q: "Un appel dit que votre argent est en danger et que vous devez le mettre sur un compte crypto \"sûr\". C'est :", options: ["Une mise à jour de sécurité", "Une pratique bancaire normale", "Une prestation de la VA", "Une arnaque à l'usurpation"], answer: 3, why: "La FTC avertit que ce sont des arnaques." },
      { objective: "O6", q: "Un emploi vous demande de payer à l'avance des frais en crypto. C'est :", options: ["Une étape normale d'embauche", "Une arnaque, selon la FTC", "Une formation payée par la VA", "Un impôt"], answer: 1, why: "La FTC dit que les frais en crypto à l'avance pour un emploi sont des arnaques." },
      { objective: "O6", q: "Comment rappeler une entreprise au sujet d'un message suspect ?", options: ["Au numéro donné dans le message", "Au numéro de son site officiel ou de votre carte", "En répondant au SMS", "En demandant un numéro à l'appelant"], answer: 1, why: "Les escrocs donnent de faux numéros." },
      { objective: "O6", q: "Où signaler une fraude à la FTC ?", options: ["À un chatbot d'IA", "Dans un commentaire sur un réseau social", "Sur le site de l'escroc", "Sur ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov est le site de signalement de la FTC." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      6,
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Ce qu'elle fait et comment elle utilise l'IA",
        objective: "O1",
        notYet: "La fiche ne dit pas ce que fait l'application ni comment elle utilise l'IA.",
        meets: "La fiche nomme le type de fintech et une façon dont l'application utilise l'IA.",
        exceeds: "Elle dit aussi quoi faire si l'IA de l'application prend une mauvaise décision."
      },
      {
        name: "Assurance vérifiée",
        objective: "O2",
        notYet: "Dit que l'argent est assuré sans vérification, ou devine.",
        meets: "Nomme la banque partenaire et dit si elle est assurée par la FDIC, vérifié avec BankFind.",
        exceeds: "Indique quelles parties du solde sont couvertes ou non et où cela a été confirmé."
      },
      {
        name: "Réglages de sécurité",
        objective: "O5",
        notYet: "Aucun réglage de sécurité activé.",
        meets: "Vérification en deux étapes et alertes de paiement activées, et appareils inconnus supprimés.",
        exceeds: "Indique aussi un autre réglage activé, comme le blocage de la carte ou un plafond de dépenses."
      },
      {
        name: "Signes d'arnaque et signalement",
        objective: "O6",
        notYet: "Moins de trois signes d'arnaque, ou aucun endroit où signaler.",
        meets: "Trois signes d'arnaque et l'endroit où signaler un problème.",
        exceeds: "Indique comment rappeler l'entreprise à un numéro de confiance."
      },
      {
        name: "Application vérifiée",
        objective: "O4",
        notYet: "L'application n'a pas été vérifiée avant d'être utilisée.",
        meets: "La vérification en cinq points a été faite, avec oui ou non pour chaque point.",
        exceeds: "L'apprenant explique ce qu'il ferait si un point était un non."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui disent avoir activé la vérification en deux étapes et les alertes dans leurs applications d'argent dans les 30 jours (enquête de suivi)",
      "Apprenants qui disent avoir repéré et évité une arnaque fintech",
      "Apprenants qui commencent un autre cours Koach Learn sur l'argent ou la sécurité dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec l'application d'argent de l'apprenant",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les sites gratuits BankFind de la FDIC, du CFPB et de la FTC",
      "Du papier ou un document pour la fiche de sécurité fintech d'une page",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Les apprenants changent les réglages sur leur propre téléphone ; ne demandez jamais à voir des soldes, des mots de passe ou des codes.",
      "Ne recommandez ni application, ni placement, ni crypto ; orientez les questions d'investissement vers un professionnel qualifié et indépendant.",
      "Montrez en classe un faux SMS d'arnaque inventé, puis faites pratiquer le rappel à un numéro officiel.",
      "Notez la fiche de sécurité fintech avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois.",
      "Des membres de la famille peuvent participer, car les arnaques visent souvent aussi les conjoints et les parents."
    ]
  }
};
