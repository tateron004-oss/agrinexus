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
  chapters: [
    {
      name: "Chapitre 1 : Votre plan d'argent",
      lessons: [
        {
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
          youCanNow: "lister vos revenus et classer vos dépenses en besoins et en envies."
        },
        {
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
          youCanNow: "utiliser l'IA pour organiser un budget sans partager d'informations privées, et vérifier ses calculs."
        },
        {
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
          youCanNow: "fixer un objectif d'épargne clair et choisir un endroit sûr et garanti pour le garder."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre plan d'argent",
        questions: [
          { q: "Lequel est un besoin ?", options: ["Un abonnement de streaming", "Le loyer", "Manger au restaurant", "Un nouveau jeu"], answer: 1, why: "Le loyer est une dépense obligatoire pour vivre." },
          { q: "Qu'est-ce qu'on peut taper sans risque dans un assistant d'IA pour de l'aide sur le budget ?", options: ["Votre numéro de compte bancaire", "Votre numéro de carte", "Des montants arrondis comme « loyer environ 1 400 $ »", "Votre mot de passe de banque en ligne"], answer: 2, why: "Des montants arrondis et des catégories donnent l'aide voulue sans détails privés." },
          { q: "L'IA additionne votre budget et obtient un total qui semble faux. Que faites-vous ?", options: ["Lui faire confiance", "Supprimer votre budget", "Demander à un inconnu en ligne", "Vérifier le total avec une calculatrice"], answer: 3, why: "L'IA peut faire des erreurs de calcul ; vérifiez vous-même." },
          { q: "Lequel est un objectif d'épargne clair ?", options: ["« Épargner 300 $ pour les urgences d'ici le 1er juin »", "« Épargner un peu »", "« Devenir riche »", "« De l'argent plus tard »"], answer: 0, why: "Il a un but, un montant et une date." },
          { q: "Que couvre l'assurance de la FDIC ?", options: ["Les actions", "Les dépôts dans une banque assurée, jusqu'à la limite", "Les cryptomonnaies", "L'argent sous le matelas"], answer: 1, why: "La FDIC protège les dépôts dans les banques assurées ; pas les actions ni les cryptomonnaies." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Crédit, aide et sécurité",
      lessons: [
        {
          title: "Consulter gratuitement votre rapport de crédit",
          minutes: 5,
          goal: "Savoir comment obtenir gratuitement votre rapport de crédit et quoi y regarder.",
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
          youCanNow: "obtenir vos rapports de crédit gratuits sur le site officiel et repérer les erreurs à contester."
        },
        {
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
          youCanNow: "trouver de l'aide fiscale gratuite et des informations fiables sur l'argent."
        },
        {
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
          youCanNow: "faire un budget familial, planifier votre épargne, trouver de l'aide gratuite et éviter les arnaques financières."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Crédit, aide et sécurité",
        questions: [
          { q: "Quel est le site officiel des rapports de crédit gratuits aux États-Unis ?", options: ["N'importe quel site qui dit « gratuit »", "Un lien dans un SMS", "Une publicité sur les réseaux sociaux", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com est le site officiel des rapports gratuits." },
          { q: "Vous trouvez sur votre rapport de crédit un compte qui n'est pas à vous. Vous devez :", options: ["Le contester auprès du bureau de crédit", "L'ignorer", "Le payer tout de suite", "Le publier en ligne"], answer: 0, why: "La contestation corrige les erreurs de votre rapport." },
          { q: "Qu'est-ce que VITA ?", options: ["Un prêt sur salaire", "Une aide fiscale gratuite soutenue par l'IRS", "Un bureau de crédit", "Un compte d'épargne"], answer: 1, why: "VITA offre une préparation gratuite de la déclaration par des bénévoles formés." },
          { q: "Un appelant dit venir du gouvernement et exige que vous payiez une amende aujourd'hui en cartes cadeaux. C'est :", options: ["Normal", "Un remboursement d'impôts", "Une arnaque", "Un service VITA"], answer: 2, why: "Les administrations n'exigent pas de paiement en cartes cadeaux." },
          { q: "Où signaler une arnaque aux États-Unis ?", options: ["À l'arnaqueur", "Nulle part", "Seulement dans une discussion de groupe", "Sur ReportFraud.ftc.gov"], answer: 3, why: "La Federal Trade Commission reçoit les signalements d'arnaques." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour bien gérer son argent",
    questions: [
      { q: "Un budget est :", options: ["Un plan pour votre argent", "Un type de prêt", "Une carte de crédit", "Des frais bancaires"], answer: 0, why: "Un budget planifie les revenus et les dépenses." },
      { q: "Lequel est un revenu ?", options: ["Le loyer", "Un salaire", "Les courses", "Une facture de téléphone"], answer: 1, why: "Les revenus, c'est l'argent qui entre." },
      { q: "Laquelle est une envie ?", options: ["La garde d'enfants pour travailler", "L'électricité", "Manger au restaurant", "Les médicaments"], answer: 2, why: "Manger au restaurant est agréable, pas obligatoire." },
      { q: "Pour commencer un budget, on peut :", options: ["Oublier les revenus", "Utiliser son mot de passe", "Deviner n'importe comment", "Arrondir les montants au dollar ou aux cinq dollars près"], answer: 3, why: "Des montants proches et arrondis suffisent pour commencer." },
      { q: "Qu'est-ce qu'il ne faut JAMAIS taper dans un assistant d'IA ?", options: ["Votre numéro de carte", "« Nourriture environ 600 $ »", "« Famille de 4 »", "« Propose deux réductions »"], answer: 0, why: "Les numéros de carte sont des informations privées." },
      { q: "L'IA propose de supprimer le titre de transport de votre enfant. Vous :", options: ["Devez le faire", "Décidez ce qui convient à votre famille ; ce conseil n'y convient peut-être pas", "Demandez à un inconnu", "Donnez vos identifiants bancaires à l'IA"], answer: 1, why: "Les conseils de l'IA sont des idées ; c'est vous qui choisissez." },
      { q: "Pourquoi vérifier les totaux du budget faits par l'IA ?", options: ["L'IA ne se trompe jamais", "C'est la loi", "L'IA peut faire des erreurs de calcul", "Cela change le solde de votre compte"], answer: 2, why: "Vérifiez toujours vous-même les calculs." },
      { q: "Une épargne de secours, c'est :", options: ["De l'argent pour les envies", "Un prêt", "Un rapport de crédit", "De l'argent mis de côté uniquement pour les imprévus"], answer: 3, why: "Elle couvre les imprévus comme une réparation de voiture." },
      { q: "Vous voulez 260 $ en 26 semaines. Combien par semaine ?", options: ["5 $", "10 $", "26 $", "100 $"], answer: 1, why: "260 $ divisés par 26 semaines font 10 $." },
      { q: "L'assurance de la FDIC protège les dépôts jusqu'à :", options: ["1 000 $", "250 000 $ par déposant, par banque assurée, par catégorie de propriété", "N'importe quel montant", "Seulement les cryptomonnaies"], answer: 1, why: "C'est le montant standard de la FDIC." },
      { q: "Qu'est-ce qui n'est PAS couvert par l'assurance de la FDIC ?", options: ["Un compte d'épargne dans une banque assurée", "Un compte courant dans une banque assurée", "Les cryptomonnaies", "Un dépôt à terme dans une banque assurée"], answer: 2, why: "La FDIC ne couvre ni les cryptomonnaies ni les actions." },
      { q: "Un rapport de crédit est :", options: ["Votre fiche de paie", "Votre déclaration d'impôts", "Votre budget", "Un historique de vos prêts, cartes et paiements de factures"], answer: 3, why: "Les prêteurs et les propriétaires peuvent le consulter." },
      { q: "Les trois grands bureaux de crédit américains sont :", options: ["Equifax, Experian et TransUnion", "Google, Bing et Yahoo", "FDIC, IRS et FTC", "Visa, Mastercard et Discover"], answer: 0, why: "Ces trois-là tiennent les rapports de crédit." },
      { q: "À quelle fréquence peut-on obtenir des rapports gratuits sur AnnualCreditReport.com ?", options: ["Une fois tous les dix ans", "Chaque semaine", "Jamais", "Seulement en payant"], answer: 1, why: "Les bureaux y offrent des rapports gratuits chaque semaine." },
      { q: "Où trouver des guides gratuits sur le recouvrement de dettes et les prêts sur salaire ?", options: ["Dans une publicité surgissante", "Dans le SMS d'un arnaqueur", "Sur consumerfinance.gov", "Dans un magasin de cartes cadeaux"], answer: 2, why: "Le Consumer Financial Protection Bureau publie des guides gratuits." },
      { q: "Comment trouver un site d'aide fiscale gratuite VITA ?", options: ["Demander à un inconnu", "Payer d'abord des frais", "Attendre un appel", "Utiliser l'outil VITA/TCE de l'IRS ou appeler le 800-906-9887"], answer: 3, why: "Ce sont les moyens officiels de l'IRS pour trouver un site." },
      { q: "Avant de prendre un prêt sur salaire ou une application de prêt rapide, vous devez :", options: ["Demander le coût total en dollars", "Signer vite", "Donner vos identifiants bancaires", "Ne pas lire"], answer: 0, why: "Ces prêts peuvent coûter bien plus qu'ils n'en ont l'air." },
      { q: "Quelqu'un promet des profits « garantis » en cryptomonnaie. C'est :", options: ["Une affaire sûre", "Un signal d'arnaque courant", "Assuré par la FDIC", "Une aide fiscale gratuite"], answer: 1, why: "L'argent garanti est une phrase d'arnaque classique." },
      { q: "Un message demande le code envoyé sur votre téléphone pour « vérifier votre banque ». Vous :", options: ["L'envoyez", "Le publiez", "Ne le partagez jamais et appelez votre banque avec un numéro que vous connaissez", "Le lisez à voix haute"], answer: 2, why: "Ce code protège votre compte." },
      { q: "Pour une grande décision d'argent, la meilleure étape est :", options: ["Croire n'importe quelle réponse de l'IA", "Suivre une publication sur les réseaux sociaux", "Demander à la personne qui vend", "Consulter des sources officielles ou parler à un conseiller gratuit d'une association"], answer: 3, why: "Les sources officielles et de vrais conseillers vous protègent." }
    ]
  }
};
