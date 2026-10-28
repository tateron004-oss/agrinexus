"use strict";

// Koach Learn course (French translation of shared/personal-finance-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "personal-finance-basics-fr",
  lang: "fr",
  translationOf: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Les bases des finances personnelles : budget, crédit et épargne",
  skills: "Faire un budget mensuel, Lire votre rapport de crédit, Planifier le remboursement de vos dettes, Constituer une épargne de précaution, Épargner avec une banque ou l'argent mobile, Repérer les prêts abusifs et les arnaques",
  outcome: "faire un plan financier d'une page : un budget mensuel, un plan pour rembourser vos dettes, un objectif d'épargne de précaution et une date pour vérifier vos rapports de crédit, et repérer un prêt ou une offre qui pourrait vous piéger.",
  about: [
    "Ce cours s'adresse à toute personne qui veut mieux maîtriser son argent : un grand-parent avec un revenu fixe, un jeune avec son premier salaire, un agriculteur payé à la récolte, un athlète avec un nouveau sponsor, un ancien militaire qui commence un emploi civil, ou une personne qui rentre chez elle et repart de zéro.",
    "Vous allez écrire un budget simple, lire votre propre rapport de crédit, choisir quelle dette rembourser en premier, commencer une épargne de précaution, apprendre des façons sûres d'épargner avec une banque, une coopérative de crédit ou l'argent mobile, et connaître les signaux d'alerte des prêts de type \"payday\" et des arnaques financières.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" que vous faites avec vos propres chiffres, sur papier ou dans un tableur. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours enseigne à gérer l'argent ; il ne donne pas de conseils en investissement. Pour les grandes décisions, parlez à une personne de confiance et qualifiée, comme un conseiller en crédit d'un organisme à but non lucratif."
  ],
  finalTask: "Écrivez un plan financier d'une page : (1) un budget mensuel avec vos revenus, vos besoins, vos envies et votre épargne ; (2) la liste de vos dettes et celle que vous rembourserez en plus ; (3) un objectif d'épargne de précaution, le montant que vous mettrez de côté chaque semaine ou chaque mois, et où ; (4) la date à laquelle vous vérifierez vos rapports de crédit. Puis lisez une offre de prêt ou d'argent que vous avez vue et notez tous les signaux d'alerte.",
  chapters: [
    {
      name: "Chapitre 1 : Savoir où va votre argent",
      lessons: [
        {
          title: "Faire un budget mensuel simple",
          minutes: 5,
          goal: "Écrire un budget mensuel qui montre vos revenus, vos besoins, vos envies et votre épargne.",
          text: [
            "Un budget est un plan pour votre argent. Il répond à deux questions : combien d'argent entre chaque mois, et où il va. Sans plan, l'argent a tendance à disparaître dans de petites dépenses et les grosses factures arrivent comme une surprise.",
            "Commencez par les revenus : votre salaire après impôts, des prestations comme la Social Security (la sécurité sociale des États-Unis) ou une pension de retraite, l'argent de la vente de récoltes ou de marchandises, les pourboires ou un paiement d'un sponsor. Si vos revenus changent d'un mois à l'autre, prenez le mois normal le plus bas, pour que le plan marche aussi pendant un mois difficile.",
            "Ensuite, classez vos dépenses en trois groupes. Les besoins sont ce que vous devez payer : logement, nourriture, eau et électricité, transport, médicaments, paiements minimums de vos dettes. Les envies sont agréables mais pas obligatoires : manger au restaurant, des vêtements neufs, des services de streaming. L'épargne est l'argent que vous mettez de côté exprès. Mettez l'épargne dans le plan comme une facture, même si elle est petite.",
            "Si vos dépenses dépassent vos revenus, coupez d'abord dans les envies, puis cherchez des façons moins chères de couvrir vos besoins. Un assistant d'IA peut vous aider à faire un tableau de budget vide ou proposer des façons de dépenser moins, mais n'y tapez que des montants approximatifs, jamais de numéros de compte ni de mots de passe."
          ],
          steps: ["Écrivez le total de vos revenus mensuels après impôts. S'ils changent, prenez un mois bas.", "Faites la liste de vos besoins et de ce que chacun coûte par mois.", "Faites la liste de vos envies et de ce que chacune coûte par mois.", "Choisissez un montant à épargner, même petit.", "Retirez les besoins, les envies et l'épargne de vos revenus. Si le résultat est inférieur à zéro, coupez d'abord dans les envies.", "Vérifiez le plan à la fin du mois et ajustez-le."],
          words: [["Budget", "un plan pour utiliser l'argent que vous recevez chaque mois."], ["Revenus", "l'argent qui entre : salaire, prestations, ventes, pourboires."], ["Besoins", "les dépenses que vous devez payer pour vivre et travailler, comme le loyer, la nourriture et les médicaments."], ["Envies", "les choses agréables à avoir, mais dont vous pourriez vous passer."]],
          slides: [
            { title: "Un budget est un plan pour votre argent", bullets: ["Combien d'argent entre", "Où il va", "Plus de factures surprises"] },
            { title: "Commencez par les revenus", bullets: ["Salaire après impôts, prestations, ventes, pourboires", "S'ils changent, prévoyez avec un mois bas"] },
            { title: "Trois groupes de dépenses", bullets: ["Besoins : logement, nourriture, transport, médicaments", "Envies : restaurant, extras, abonnements", "Épargne : mise de côté comme une facture"] },
            { title: "Si le compte n'y est pas", bullets: ["Coupez d'abord dans les envies", "Cherchez des façons moins chères de couvrir vos besoins", "L'IA peut faire un tableau ; ne tapez jamais de numéro de compte"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau (CFPB) : outils et guides pour les consommateurs", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "Sur papier ou dans un tableur gratuit (Google Sheets ou Excel), écrivez les revenus du mois dernier et toutes les dépenses dont vous vous souvenez. Marquez chaque dépense B pour besoin ou E pour envie, ajoutez une ligne d'épargne, puis faites la soustraction. Votre résultat est-il au-dessus ou en dessous de zéro ?",
          youCanNow: "écrire un budget mensuel avec revenus, besoins, envies et épargne, et voir si le compte y est."
        },
        {
          title: "Lire votre rapport de crédit et votre score",
          minutes: 5,
          goal: "Obtenir vos rapports de crédit gratuits et y chercher les erreurs.",
          text: [
            "Aux États-Unis, un rapport de crédit est un historique de vos emprunts et de vos remboursements : prêts, cartes de crédit, certaines factures et dettes confiées à une agence de recouvrement. Les prêteurs, les propriétaires et certains employeurs le consultent. Un score de crédit est un nombre calculé à partir de ce rapport, qui essaie de prédire si vous paierez à temps.",
            "Vous pouvez obtenir gratuitement vos rapports de crédit auprès des trois agences nationales, Equifax, Experian et TransUnion, sur AnnualCreditReport.com ou en appelant le (877) 322-8228. Le Consumer Financial Protection Bureau (CFPB, l'agence fédérale américaine qui protège les consommateurs dans le domaine financier) indique que vous pouvez désormais les obtenir gratuitement une fois par semaine. Consulter votre propre rapport ne fait pas baisser votre score.",
            "Attention : certains sites web annoncent un \"rapport de crédit gratuit\" mais vous inscrivent ensuite à des produits payants. Utilisez AnnualCreditReport.com.",
            "Lisez chaque rapport et cherchez tout ce qui ne vous appartient pas : un compte que vous n'avez jamais ouvert, un retard de paiement alors que vous avez payé à temps, une dette inscrite deux fois, ou un nom ou une adresse incorrects. Vous avez le droit de contester les erreurs auprès de l'agence de crédit et de l'entreprise qui les a signalées. Payer à temps, garder des soldes de carte bas et ne pas ouvrir beaucoup de nouveaux comptes en même temps aident votre score avec le temps."
          ],
          steps: ["Allez sur AnnualCreditReport.com (tapez l'adresse vous-même) ou appelez le (877) 322-8228.", "Demandez vos rapports à Equifax, Experian et TransUnion.", "Vérifiez votre nom, vos adresses et chaque compte.", "Entourez tout ce que vous ne reconnaissez pas ou qui est faux.", "Contestez les erreurs auprès de l'agence de crédit et gardez une copie de ce que vous envoyez."],
          words: [["Rapport de crédit", "un historique de la façon dont vous avez emprunté de l'argent et l'avez remboursé."], ["Score de crédit", "un nombre calculé à partir de votre rapport de crédit, que les prêteurs utilisent pour juger le risque."], ["Contester", "dire à l'agence de crédit qu'une information de votre rapport est fausse et lui demander de la corriger."], ["Recouvrement", "quand une dette est confiée à une société qui essaie de récupérer l'argent non payé."]],
          slides: [
            { title: "Rapport et score", bullets: ["Rapport : votre historique d'emprunts et de paiements", "Score : un nombre calculé à partir du rapport", "Prêteurs, propriétaires et certains employeurs le consultent"] },
            { title: "Obtenez vos rapports gratuitement", bullets: ["AnnualCreditReport.com ou (877) 322-8228", "Equifax, Experian et TransUnion", "Consulter votre rapport ne fait pas baisser votre score"] },
            { title: "Cherchez les erreurs", bullets: ["Des comptes que vous n'avez jamais ouverts", "De faux retards de paiement ou des doublons", "Un nom ou une adresse incorrects"] },
            { title: "Améliorez votre score avec le temps", bullets: ["Payez chaque facture à temps", "Gardez des soldes de carte bas", "Contestez les erreurs et gardez des copies"] }
          ],
          sources: [
            { name: "CFPB : Comment obtenir une copie gratuite de mes rapports de crédit ?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB : Rapports et scores de crédit", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "Si vous vivez aux États-Unis, demandez au moins un rapport de crédit gratuit sur AnnualCreditReport.com et vérifiez chaque compte. Si vous vivez ailleurs, renseignez-vous pour savoir si votre pays a un bureau de crédit et comment lui demander votre rapport. Notez une chose que vous avez vérifiée et ce que vous avez trouvé.",
          youCanNow: "obtenir vos rapports de crédit gratuits, y chercher les erreurs et savoir comment contester une erreur."
        },
        {
          title: "Faire un plan pour rembourser vos dettes",
          minutes: 5,
          goal: "Faire la liste de vos dettes et choisir celle que vous rembourserez en plus en premier.",
          text: [
            "Il est plus facile de venir à bout de ses dettes quand on les voit toutes. Faites la liste de chaque dette : à qui vous devez, combien, le taux d'intérêt, le paiement minimum et la date d'échéance. Incluez les cartes de crédit, les cartes de magasin, les prêts auto, les factures médicales, les prêts de la famille et tout prêt pris par une application sur le téléphone.",
            "Payez toujours au moins le minimum de chaque dette, à temps. Les retards ajoutent des frais et peuvent nuire à votre crédit. Ensuite, mettez tout l'argent en plus sur une seule dette à la fois.",
            "Il y a deux façons courantes de choisir. La méthode du taux le plus élevé d'abord met l'argent en plus sur la dette au taux d'intérêt le plus élevé, ce qui fait en général économiser le plus d'argent. La méthode du plus petit solde d'abord rembourse d'abord la plus petite dette, ce qui donne une victoire rapide et aide beaucoup de gens à continuer. Les deux marchent si vous vous y tenez. Quand une dette est remboursée, reportez son paiement sur la suivante.",
            "Si vous ne pouvez pas faire un paiement, appelez le prêteur avant la date d'échéance et demandez quelles sont les solutions. Un conseiller en crédit d'un organisme à but non lucratif peut aussi vous aider à faire un plan. Méfiez-vous des sociétés qui demandent de gros frais à l'avance pour \"effacer\" votre dette."
          ],
          steps: ["Faites la liste de chaque dette : à qui, combien, taux d'intérêt, minimum, date d'échéance.", "Mettez en place un moyen de payer chaque minimum à temps, comme des rappels.", "Choisissez une dette pour les paiements en plus : le taux le plus élevé ou le plus petit solde.", "Quand elle est remboursée, ajoutez son paiement à la dette suivante.", "Si vous allez manquer un paiement, appelez le prêteur avant la date d'échéance."],
          words: [["Taux d'intérêt", "le prix de l'emprunt, exprimé en pourcentage de ce que vous devez."], ["Paiement minimum", "la plus petite somme que vous devez payer chaque mois pour rester à jour."], ["Solde", "ce que vous devez encore."]],
          slides: [
            { title: "Voyez toutes vos dettes", bullets: ["À qui vous devez et combien", "Taux d'intérêt, minimum et date d'échéance", "Incluez les prêts par application et ceux de la famille"] },
            { title: "Deux règles", bullets: ["Payez chaque minimum à temps", "Mettez l'argent en plus sur une seule dette à la fois"] },
            { title: "Quelle dette d'abord ?", bullets: ["Taux le plus élevé d'abord : économise en général le plus", "Plus petit solde d'abord : victoires rapides", "Remboursée ? Reportez son paiement sur la suivante"] },
            { title: "Bloqué ?", bullets: ["Appelez le prêteur avant la date d'échéance", "Demandez à un conseiller en crédit à but non lucratif", "Méfiez-vous des gros frais à l'avance pour effacer une dette"] }
          ],
          sources: [{ name: "CFPB : Recouvrement et gestion des dettes", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Faites un tableau de vos dettes (ou un exemple inventé si vous n'en avez pas) avec à qui, solde, taux, minimum et date d'échéance. Entourez la dette que vous rembourseriez en plus avec la méthode du taux le plus élevé, et celle que vous choisiriez avec la méthode du plus petit solde.",
          youCanNow: "faire la liste de vos dettes, payer les minimums à temps et choisir la dette à rembourser en plus en premier."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Savoir où va votre argent",
        questions: [
          { q: "Vos revenus changent d'un mois à l'autre. Avec quel montant devez-vous prévoir votre budget ?", options: ["Votre meilleur mois", "Ce que vous espérez gagner en moyenne l'an prochain", "Un mois normal et bas", "Ce que gagnent vos amis"], answer: 2, why: "Prévoir avec un mois bas permet au budget de marcher quand l'argent rentre moins." },
          { q: "Laquelle de ces dépenses est un besoin et non une envie ?", options: ["Un médicament que vous prenez chaque jour", "Un service de streaming", "Manger au restaurant le vendredi", "Une nouvelle coque de téléphone"], answer: 0, why: "Un médicament est une dépense obligatoire pour rester en bonne santé." },
          { q: "Où les habitants des États-Unis peuvent-ils obtenir gratuitement leurs rapports de crédit ?", options: ["Sur n'importe quel site qui affiche une publicité pour des rapports gratuits", "Par un lien dans un SMS", "Sur le site d'un agent de recouvrement", "Sur AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com est la source officielle et gratuite des rapports des trois agences." },
          { q: "Vous trouvez sur votre rapport une carte de crédit que vous n'avez jamais ouverte. Que faites-vous ?", options: ["Vous l'ignorez", "Vous la contestez auprès de l'agence de crédit et gardez des copies", "Vous la remboursez pour qu'elle disparaisse", "Vous fermez votre compte bancaire"], answer: 1, why: "Vous avez le droit de contester les erreurs ; un compte que vous n'avez pas ouvert peut aussi être un vol d'identité." },
          { q: "Vous pouvez payer un peu plus sur une dette. Avec la méthode du taux le plus élevé, laquelle reçoit cet argent ?", options: ["Celle qui a le plus petit solde", "Celle dont l'échéance est la plus tardive", "Celle qui a le taux d'intérêt le plus élevé", "La plus récente"], answer: 2, why: "Rembourser d'abord le taux le plus élevé fait en général économiser le plus d'intérêts." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire votre filet de sécurité",
      lessons: [
        {
          title: "Commencer une épargne de précaution",
          minutes: 4,
          goal: "Fixer un objectif d'épargne de précaution et un moyen automatique de l'atteindre.",
          text: [
            "Une épargne de précaution (ou fonds d'urgence) est de l'argent mis de côté uniquement pour les imprévus : une réparation de voiture, une facture de médecin, une pompe à eau en panne, une journée de travail perdue ou un mois de ventes faibles. Sans elle, un petit problème peut vous pousser vers une dette coûteuse.",
            "Commencez petit. Le CFPB dit que même une petite somme apporte un peu de sécurité. Une façon de choisir un objectif : pensez aux dépenses imprévues de l'année passée et à ce qu'elles ont coûté. Puis choisissez un premier objectif que vous pouvez atteindre, et un objectif plus grand ensuite.",
            "Rendez l'épargne automatique. Programmez un virement régulier vers l'épargne le jour de la paie, ou demandez à votre employeur de répartir votre salaire sur deux comptes, s'il le permet. Mettez les remboursements d'impôts, les cadeaux en argent ou une partie du paiement de la récolte directement sur l'épargne.",
            "Gardez cet argent dans un endroit sûr mais séparé de l'argent pour les dépenses, comme un compte d'épargne dans une banque ou une coopérative de crédit. L'argent liquide à la maison peut être perdu ou volé. Décidez à l'avance de ce qui compte comme une urgence, utilisez l'épargne quand vous en avez besoin, puis reconstituez-la."
          ],
          steps: ["Notez les dépenses imprévues de l'année passée.", "Choisissez un premier objectif atteignable et un objectif plus grand pour plus tard.", "Programmez un virement automatique ou un montant fixe à épargner chaque jour de paie.", "Gardez cette épargne séparée de l'argent des dépenses courantes.", "Écrivez ce qui compte comme une urgence. Après l'avoir utilisée, reconstituez-la."],
          words: [["Épargne de précaution", "de l'argent gardé uniquement pour les dépenses imprévues ou une perte de revenus."], ["Virement automatique", "un paiement que votre banque fait pour vous à une date fixe, sans que vous ayez à le refaire chaque fois."], ["Coopérative de crédit", "un établissement financier à but non lucratif qui appartient à ses membres (une credit union aux États-Unis)."]],
          slides: [
            { title: "À quoi elle sert", bullets: ["Réparations, factures médicales, perte de revenus", "Empêche un petit problème de devenir une grosse dette"] },
            { title: "Choisissez un objectif", bullets: ["Regardez les imprévus de l'année passée", "Commencez petit, puis augmentez", "Même un peu, ça aide"] },
            { title: "Rendez-la automatique", bullets: ["Virement le jour de la paie", "Salaire réparti sur deux comptes si c'est permis", "Épargnez remboursements, cadeaux et une partie de la récolte"] },
            { title: "Sûre et séparée", bullets: ["Épargne en banque ou en coopérative de crédit", "L'argent liquide à la maison peut être perdu ou volé", "Utilisez-la, puis reconstituez-la"] }
          ],
          sources: [{ name: "CFPB : Guide essentiel pour constituer une épargne de précaution", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Écrivez votre premier objectif d'épargne de précaution, le montant que vous épargnerez chaque semaine ou chaque mois, le jour où vous le ferez et où vous garderez l'argent. Ajoutez-le comme une ligne dans votre budget de la leçon 1.",
          youCanNow: "fixer un objectif d'épargne de précaution, épargner automatiquement pour l'atteindre, et garder cet argent en sécurité et à part."
        },
        {
          title: "Épargner avec une banque, l'argent mobile ou un groupe d'épargne",
          minutes: 5,
          goal: "Choisir un endroit sûr pour épargner et vérifier ses frais et ses règles avant de l'utiliser.",
          text: [
            "L'endroit où vous épargnez compte. Aux États-Unis, un compte d'épargne dans une banque ou une coopérative de crédit assurée par l'État fédéral est l'un des endroits les plus sûrs pour l'argent. Dans beaucoup de pays, surtout en Afrique, les gens épargnent avec l'argent mobile sur leur téléphone, dans une banque ou une SACCO, ou dans un groupe d'épargne.",
            "Les services d'argent mobile comme M-Pesa permettent de garder de l'argent sur son téléphone, d'en envoyer et de payer des factures. Beaucoup ont aussi une option d'épargne séparée ou d'épargne bloquée, qui aide à garder l'épargne à part de l'argent des dépenses. Les frais et les intérêts sont différents pour chaque service et changent avec le temps, alors lisez la grille tarifaire officielle dans l'application ou sur le site du fournisseur, ou demandez à un agent officiel, avant de déplacer de l'argent.",
            "Exemple : une agricultrice au Kenya est payée pour son maïs à la récolte. Le jour même, avant de dépenser quoi que ce soit, elle envoie une partie du paiement vers une option d'épargne séparée, et garde le reste pour les semences, les frais de scolarité et la nourriture. Elle vérifie d'abord les frais de chaque transfert dans la grille tarifaire officielle.",
            "Dans un groupe d'épargne, souvent appelé chama (ou tontine), chaque membre verse une somme fixe selon un calendrier. Notez chaque versement, gardez une copie des règles du groupe et ne rejoignez que des groupes dont vous connaissez les membres et en qui vous avez confiance. Quel que soit votre choix : ne partagez jamais votre code PIN, et méfiez-vous de quiconque vous appelle pour vous demander de renvoyer de l'argent après un transfert \"par erreur\". Vérifiez d'abord votre solde."
          ],
          steps: ["Choisissez où épargner : banque, coopérative de crédit, SACCO, épargne par argent mobile ou groupe d'épargne de confiance.", "Trouvez la grille tarifaire officielle et les règles, dans l'application, sur le site officiel ou auprès d'un agent officiel.", "Mettez votre épargne de côté le jour de la paie ou de la récolte, avant de dépenser.", "Gardez une trace écrite de chaque dépôt.", "Ne partagez jamais votre code PIN, et vérifiez votre solde avant de renvoyer de l'argent à qui que ce soit."],
          words: [["Argent mobile", "un service qui permet de garder, d'envoyer et de recevoir de l'argent avec un téléphone."], ["SACCO", "une coopérative d'épargne et de crédit : un groupe qui appartient à ses membres, qui épargne et prête, courant en Afrique de l'Est."], ["Chama", "un groupe d'épargne, surtout au Kenya, où les membres épargnent ensemble selon un calendrier."], ["Code PIN", "un code secret qui protège votre compte. Ne le partagez jamais."]],
          slides: [
            { title: "Choisissez un endroit sûr pour épargner", bullets: ["États-Unis : épargne assurée en banque ou coopérative de crédit", "Afrique : banque, SACCO, argent mobile ou groupe d'épargne"] },
            { title: "Épargner avec l'argent mobile", bullets: ["Utilisez une option d'épargne séparée s'il y en a une", "Lisez d'abord la grille tarifaire officielle", "Les frais changent : vérifiez dans l'application ou avec un agent"] },
            { title: "Épargnez d'abord, dépensez ensuite", bullets: ["Mettez de côté le jour de la paie ou de la récolte", "Puis payez semences, frais de scolarité, nourriture"] },
            { title: "Restez prudent", bullets: ["Ne partagez jamais votre code PIN", "Vérifiez votre solde avant de renvoyer de l'argent", "Ne rejoignez que des groupes connus et de confiance"] }
          ],
          sources: [
            { name: "CFPB : Guide essentiel pour constituer une épargne de précaution (où garder son épargne)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Choisissez l'endroit où vous garderez votre épargne de précaution. Trouvez sa grille tarifaire officielle ou les règles du compte et notez ce que coûte un dépôt et un retrait. Si vous utilisez l'argent mobile, trouvez l'option d'épargne dans le menu de l'application, sans déplacer d'argent pour l'instant.",
          youCanNow: "choisir un endroit sûr pour épargner, vérifier d'abord ses frais et ses règles, et protéger votre compte."
        },
        {
          title: "Repérer les prêts abusifs et les arnaques financières",
          minutes: 5,
          goal: "Lire une offre de prêt ou d'argent et trouver les signaux d'alerte avant de dire oui.",
          text: [
            "Un prêt abusif est un prêt conçu pour que vous continuiez à payer. Les prêts sur salaire (payday loans), certains prêts garantis par la carte grise de la voiture et certains prêts par application sont courts et très chers. Les frais peuvent sembler petits, mais exprimé en taux annuel effectif global (APR, en anglais), le coût peut être très élevé, et beaucoup de gens reconduisent le prêt encore et encore. Avant d'emprunter, regardez l'APR et tous les frais, et demandez-vous comment vous allez rembourser.",
            "Connaissez vos droits aux États-Unis : le CFPB indique qu'on ne peut pas vous arrêter parce que vous n'avez pas remboursé un prêt sur salaire, et qu'un prêteur ne peut prélever une partie de votre salaire qu'avec une décision de justice. Les militaires ont une protection en plus grâce au Military Lending Act (une loi fédérale sur les prêts aux militaires). Vous pouvez aussi vérifier si un prêteur a une licence dans votre État.",
            "Les arnaques ont des signaux d'alerte. On vous presse. On vous demande de payer avec des cartes cadeaux, un virement, des cryptomonnaies ou un transfert d'argent mobile à un inconnu. On vous promet un prêt ou une subvention si vous payez d'abord des frais. On vous dit que vous avez gagné un prix à un concours auquel vous n'avez jamais participé. On vous demande votre code PIN, votre mot de passe ou un code envoyé sur votre téléphone.",
            "Quand vous voyez un signal : arrêtez, ne payez pas, et vérifiez auprès de la vraie entreprise avec un numéro que vous trouvez vous-même. Parlez-en à une personne de confiance. Des solutions moins chères qu'un prêt abusif peuvent être de demander un délai au créancier, un petit prêt d'une coopérative de crédit ou l'aide d'une association locale."
          ],
          steps: ["Trouvez l'APR et tous les frais dans l'offre.", "Demandez-vous : comment et quand vais-je rembourser, et que se passe-t-il si je ne peux pas ?", "Cherchez les signes d'arnaque : urgence, cartes cadeaux ou virement, frais d'abord, prix gagné, demande de code PIN ou de code.", "Arrêtez et vérifiez auprès de la vraie entreprise avec un numéro que vous trouvez vous-même.", "Cherchez des solutions moins chères : un délai du créancier, un prêt de coopérative de crédit, une association."],
          words: [["APR", "taux annuel effectif global : le coût d'un prêt sur un an, frais compris, exprimé en pourcentage. Il permet de comparer les prêts."], ["Prêt sur salaire", "un petit prêt court (payday loan), souvent à rembourser le jour de la prochaine paie, qui peut coûter très cher."], ["Reconduction", "prendre un nouveau prêt pour rembourser l'ancien, ce qui ajoute des frais."], ["Prêt abusif", "un prêt aux coûts injustes ou très élevés qui piège l'emprunteur."]],
          slides: [
            { title: "Les prêts qui piègent", bullets: ["Prêts sur salaire, certains prêts sur carte grise et par application", "Petits frais, APR très élevé", "Les reconductions ajoutent des frais"] },
            { title: "Avant d'emprunter", bullets: ["Trouvez l'APR et tous les frais", "Sachez comment vous allez rembourser", "États-Unis : vérifiez que le prêteur a une licence dans votre État"] },
            { title: "Signaux d'alerte d'arnaque", bullets: ["On vous presse", "Cartes cadeaux, virement, cryptomonnaie ou transfert à un inconnu", "Des frais d'abord pour un prêt ou un prix", "On vous demande votre code PIN ou un code"] },
            { title: "De meilleures solutions", bullets: ["Demandez un délai au créancier", "Petit prêt d'une coopérative de crédit", "Aide d'une association locale"] }
          ],
          sources: [
            { name: "CFPB : Prêts sur salaire", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB : Fraudes et arnaques", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Tâche finale : terminez votre plan financier d'une page : votre budget de la leçon 1, la liste de vos dettes avec celle que vous rembourserez en plus, votre objectif d'épargne de précaution et l'endroit où vous la gardez, et la date à laquelle vous vérifierez vos rapports de crédit. Puis lisez une offre de prêt ou d'argent que vous avez vue (un SMS, une publicité ou une lettre) et notez chaque signal d'alerte que vous trouvez.",
          youCanNow: "lire une offre de prêt ou d'argent, trouver l'APR et les signaux d'alerte, et choisir une solution plus sûre."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire votre filet de sécurité",
        questions: [
          { q: "À quoi sert une épargne de précaution ?", options: ["Aux achats des fêtes", "Aux dépenses imprévues, comme une réparation ou une perte de revenus", "À acheter des billets de loterie", "À prêter de l'argent aux amis"], answer: 1, why: "L'épargne de précaution est gardée uniquement pour les imprévus et les pertes de revenus." },
          { q: "Quelle est la meilleure façon de continuer à épargner chaque mois ?", options: ["Épargner ce qui reste à la fin du mois", "Garder l'argent dans votre portefeuille", "Attendre d'abord une grosse augmentation", "Programmer un virement automatique le jour de la paie"], answer: 3, why: "L'épargne automatique se fait avant que l'argent soit dépensé." },
          { q: "Avant d'utiliser une option d'épargne par argent mobile, que devez-vous vérifier ?", options: ["La grille tarifaire officielle et les règles", "Ce que dit un inconnu sur les réseaux sociaux", "Rien ; c'est toujours gratuit", "Le code PIN de votre voisin"], answer: 0, why: "Les frais et les règles varient selon le service et changent, alors vérifiez d'abord la source officielle." },
          { q: "Quelqu'un vous écrit qu'il vous a envoyé de l'argent par erreur et vous demande de le renvoyer tout de suite. Que faites-vous d'abord ?", options: ["Le renvoyer tout de suite", "Donner votre code PIN pour qu'il arrange ça", "Vérifier vous-même votre vrai solde avant de faire quoi que ce soit", "Envoyer le double pour être gentil"], answer: 2, why: "C'est une arnaque courante ; vérifiez votre propre solde et demandez à votre fournisseur." },
          { q: "Un prêteur dit que vous aurez un prêt dès que vous paierez des frais avec une carte cadeau. C'est :", options: ["Un prêt bancaire normal", "Un signal d'alerte d'arnaque", "Une subvention de l'État", "Un rapport de crédit"], answer: 1, why: "Payer des frais d'abord, surtout avec une carte cadeau, est un signe d'arnaque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases des finances personnelles : budget, crédit et épargne",
    questions: [
      { q: "Un budget est :", options: ["Un plan pour l'argent que vous recevez chaque mois", "Un type de prêt", "Un score de crédit", "Des frais bancaires"], answer: 0, why: "Un budget prévoit où va votre argent." },
      { q: "Qu'est-ce qui fait partie du groupe épargne d'un budget ?", options: ["Le loyer", "Un repas à emporter chaque semaine", "L'argent mis de côté pour votre épargne de précaution", "La facture de téléphone"], answer: 2, why: "L'épargne est l'argent que vous mettez de côté exprès." },
      { q: "Votre budget tombe en dessous de zéro. Que devez-vous couper en premier ?", options: ["Les médicaments", "Les envies", "Le loyer", "Les paiements minimums des dettes"], answer: 1, why: "Coupez dans les envies avant les besoins." },
      { q: "Que ne devez-vous PAS taper dans un assistant d'IA quand vous faites un budget ?", options: ["Des dépenses mensuelles approximatives", "\"Fais-moi un tableau de budget\"", "\"Propose des façons de dépenser moins\"", "Votre numéro de compte bancaire"], answer: 3, why: "Ne partagez jamais de numéros de compte ni de mots de passe avec des outils d'IA." },
      { q: "Qu'est-ce qu'un score de crédit ?", options: ["Le solde de votre compte bancaire", "Un nombre calculé à partir de votre rapport de crédit", "Vos revenus", "Des frais de prêt"], answer: 1, why: "Un score de crédit est basé sur les informations de votre rapport de crédit." },
      { q: "Consulter votre propre rapport de crédit fait-il baisser votre score ?", options: ["Non", "Oui, beaucoup", "Oui, un peu à chaque fois", "Seulement le week-end"], answer: 0, why: "Le CFPB dit que demander vos propres rapports ne nuit pas à votre score." },
      { q: "Quelles sont les trois agences qui fournissent des rapports de crédit nationaux aux États-Unis ?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "Ce sont les trois agences nationales de rapports de crédit." },
      { q: "Un site propose un \"rapport de crédit gratuit\" mais demande une carte pour commencer un essai. Quel est le choix le plus sûr ?", options: ["S'inscrire quand même", "Donner votre numéro de carte", "Utiliser plutôt AnnualCreditReport.com", "Partager le lien avec vos amis"], answer: 2, why: "Certains sites vous inscrivent à des produits payants ; AnnualCreditReport.com est la source officielle et gratuite." },
      { q: "Votre rapport montre un retard de paiement alors que vous savez avoir payé à temps. Vous devez :", options: ["Attendre qu'il disparaisse", "Ouvrir une nouvelle carte", "Contester l'erreur et garder des copies", "Arrêter de payer toutes vos factures"], answer: 2, why: "Vous pouvez contester les erreurs auprès de l'agence de crédit et de l'entreprise." },
      { q: "Sur votre liste de dettes, que devez-vous toujours payer pour chaque dette ?", options: ["Rien tant que vous ne pouvez pas tout payer", "Au moins le minimum, à temps", "Seulement la plus grosse", "Le double du solde"], answer: 1, why: "Ne pas payer les minimums ajoute des frais et nuit à votre crédit." },
      { q: "Pourquoi quelqu'un choisirait-il de rembourser d'abord le plus petit solde ?", options: ["Une victoire rapide l'aide à rester motivé", "Cela fait toujours économiser le plus d'argent", "Les prêteurs l'exigent", "Cela supprime tous les intérêts"], answer: 0, why: "Rembourser vite une petite dette donne une victoire rapide ; la méthode du taux le plus élevé fait en général économiser plus." },
      { q: "Vous allez manquer un paiement de voiture la semaine prochaine. Quelle est la meilleure chose à faire ?", options: ["Ne rien dire et espérer", "Prendre un prêt sur salaire", "Changer de numéro de téléphone", "Appeler le prêteur avant la date d'échéance pour demander les solutions possibles"], answer: 3, why: "Les prêteurs peuvent proposer des solutions si vous appelez tôt." },
      { q: "Un bon premier objectif d'épargne de précaution est :", options: ["Une somme énorme que vous ne pouvez pas atteindre", "Une petite somme atteignable, puis une plus grande", "Zéro tant que vous n'êtes pas riche", "Ce que possède votre voisin"], answer: 1, why: "Commencez petit et augmentez ; même un peu, ça aide." },
      { q: "Quel endroit est plus sûr que l'argent liquide à la maison pour garder votre épargne de précaution ?", options: ["Sous le matelas", "Chez un inconnu en ligne", "Un compte d'épargne dans une banque ou une coopérative de crédit", "Dans votre portefeuille de tous les jours"], answer: 2, why: "L'argent liquide peut être perdu ou volé ; les comptes assurés sont plus sûrs." },
      { q: "Un agriculteur est payé à la récolte. Quelle est une bonne habitude d'épargne ?", options: ["Dépenser d'abord et épargner ce qui reste", "Tout prêter à un cousin", "Tout garder en liquide à la maison", "Mettre une partie de côté le jour même, avant de dépenser"], answer: 3, why: "Épargner d'abord, avant de dépenser, fait marcher le plan." },
      { q: "Les frais de l'argent mobile :", options: ["Varient selon le service et changent, alors vérifiez la grille tarifaire officielle", "Sont toujours nuls", "Sont les mêmes dans tous les pays", "N'ont jamais d'importance"], answer: 0, why: "Vérifiez les frais actuels dans l'application, sur le site officiel ou avec un agent officiel." },
      { q: "Dans un groupe d'épargne (chama), qu'est-ce qui vous protège le mieux ?", options: ["Payer sans rien noter", "Rejoindre n'importe quel groupe en ligne", "Une trace écrite de chaque versement et une copie des règles", "Partager votre code PIN avec le groupe"], answer: 2, why: "Les traces écrites et les règles écrites protègent chaque membre." },
      { q: "Que vous indique l'APR ?", options: ["Votre score de crédit", "Le coût d'un prêt sur un an, frais compris, en pourcentage", "Ce que vous gagnez", "L'adresse de votre banque"], answer: 1, why: "L'APR permet de comparer le vrai coût des prêts." },
      { q: "Aux États-Unis, peut-on vous arrêter parce que vous n'avez pas remboursé un prêt sur salaire ?", options: ["Oui, toujours", "Oui, après un jour", "Seulement le week-end", "Non"], answer: 3, why: "Le CFPB dit qu'on ne peut pas vous arrêter pour un défaut de paiement d'un prêt sur salaire." },
      { q: "Quelle solution coûte moins cher qu'un prêt sur salaire ?", options: ["Un petit prêt d'une coopérative de crédit", "Reconduire un prêt sur salaire", "Payer un inconnu avec des cartes cadeaux", "Un prêt qui demande des frais d'abord"], answer: 0, why: "Les prêts des coopératives de crédit et une demande de délai coûtent en général beaucoup moins." }
    ]
  }
};
