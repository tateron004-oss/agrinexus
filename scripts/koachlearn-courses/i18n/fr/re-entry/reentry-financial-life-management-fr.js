"use strict";

// Koach Learn course (French translation of re-entry/reentry-financial-life-management.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-financial-life-management-fr",
  lang: "fr",
  translationOf: "reentry-financial-life-management",
  category: "Re-Entry",
  name: "Gérer son argent et sa vie avec l'IA",
  skills: "Faire un budget mensuel simple avec l'IA, Suivre ses dépenses, Créer des rappels pour les factures, Choisir des façons plus sûres d'utiliser une banque et d'emprunter, Consulter gratuitement son rapport de crédit, Planifier ses objectifs semaine par semaine",
  outcome: "faire un budget mensuel simple avec un assistant d'IA à partir de chiffres approximatifs, créer des rappels pour vos factures, savoir comment obtenir votre rapport de crédit gratuit, et transformer un objectif d'argent ou de vie en étapes hebdomadaires.",
  about: [
    "Ce cours s'adresse aux personnes qui rentrent chez elles après une peine de prison et qui veulent reprendre en main leur argent et leur semaine. Recommencer peut vouloir dire un premier salaire, de nouvelles factures, peut-être d'anciennes dettes et beaucoup de rendez-vous en même temps. Un plan rend tout cela plus facile à gérer.",
    "Vous utiliserez un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini pour construire un budget, planifier votre semaine et fixer des objectifs, et vous apprendrez des choix plus sûrs pour la banque et l'emprunt, ainsi que la façon de vérifier gratuitement votre crédit.",
    "Vous ne tapez jamais de vrais numéros de compte, votre numéro de sécurité sociale ou des détails de votre dossier dans l'IA ; des montants approximatifs suffisent. Ce cours ne donne pas de conseils financiers ou juridiques ; pour les dettes, les amendes ou la pension alimentaire, parlez au service concerné, à une permanence d'aide juridique ou à un conseiller en crédit d'une association. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Utilisez un assistant d'IA pour construire un budget mensuel simple à partir de chiffres approximatifs (revenus, loyer, téléphone, transports, nourriture, autres factures et une petite épargne). Créez un rappel sur votre téléphone pour la date limite de chaque facture, notez comment vous obtiendrez votre rapport de crédit gratuit, et transformez un objectif en étapes pour les quatre prochaines semaines.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui font face en même temps à une première paie, de nouvelles factures, parfois d'anciennes dettes et de nombreux rendez-vous.",
    startingPoint: "Ils savent passer des appels, envoyer des SMS et gérer de l'argent liquide. Ils ont peu d'expérience avec les budgets, les comptes bancaires, les rapports de crédit, les applications d'agenda ou les assistants d'IA. Certains ont déjà eu des problèmes de compte bancaire ou de crédit.",
    gap: "Sans plan, les nouvelles factures, les frais et les rendez-vous s'accumulent vite et peuvent entraîner des pénalités de retard, des prêts coûteux ou des obligations manquées. Les apprenants doivent faire un budget simple, suivre leurs factures, choisir une banque plus sûre, consulter leur crédit et planifier leurs semaines, pour que le nouveau départ reste gérable.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes (fin d'école primaire environ)",
      "Appareils : un smartphone, parfois un ordinateur de bibliothèque",
      "Temps : des leçons d'environ 5 minutes, à caser autour du travail et des rendez-vous",
      "Pas de conseil financier ou juridique : les questions sur les dettes, les amendes et les pensions alimentaires vont au bureau concerné, à l'aide juridique ou à un conseiller en crédit à but non lucratif",
      "Vie privée : seulement des montants approximatifs ; jamais de vrais numéros de compte, de numéros de sécurité sociale ou de détails de dossier dans l'IA"
    ],
    prerequisites: "Le cours « Introduction à l'IA et confiance numérique » est utile, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre salaire net et de vos factures en chiffres approximatifs", action: "construire un budget d'un mois avec un assistant d'IA", standard: "avec les besoins en premier et une petite ligne d'épargne, sans aucun vrai numéro de compte" },
    { id: "O2", condition: "Avec une note et les rappels de votre téléphone", action: "suivre vos dépenses pendant une semaine et créer un rappel pour la date limite de chaque facture", standard: "avec chaque rappel réglé quelques jours avant la date limite" },
    { id: "O3", condition: "Face à des choix pour la banque et l'emprunt", action: "les comparer et repérer ceux qui sont coûteux ou risqués", standard: "en connaissant le total à rembourser avant tout prêt et en repérant les arnaques aux frais payés d'avance" },
    { id: "O4", condition: "Avec le site officiel du rapport de crédit gratuit", action: "expliquer comment obtenir votre rapport de crédit gratuit et quoi y chercher", standard: "en prévoyant de le demander sur un appareil privé et en sachant où signaler un compte que vous n'avez jamais ouvert" },
    { id: "O5", condition: "Face à une semaine chargée et un objectif d'argent ou de vie", action: "planifier votre semaine et découper l'objectif en étapes hebdomadaires avec l'aide de l'IA", standard: "avec chaque conflit d'horaire réglé et quatre étapes hebdomadaires réalisables" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les bases de l'argent avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Faire un budget simple avec l'IA",
          minutes: 6,
          goal: "Construire un budget d'un mois à partir de chiffres approximatifs avec un assistant d'IA.",
          text: [
            "Un budget est un plan pour votre argent : ce qui entre, et où ça va. Il vous aide à payer d'abord ce qui compte et à ne pas manquer d'argent avant le jour de paie.",
            "Écrivez des chiffres approximatifs, sans détails de compte : \"Je touche environ 1 800 $ net par mois. Le loyer est de 700 $, le téléphone 40 $, l'abonnement de bus 60 $, la nourriture environ 300 $. Je dois rembourser 50 $ par mois. Aide-moi à faire un budget mensuel simple sous forme de tableau, avec un peu d'épargne, et dis-moi combien il reste pour le reste.\"",
            "Mettez d'abord les besoins : logement, nourriture, transport pour aller au travail, téléphone et paiements obligatoires. Puis l'épargne, même 10 $ par semaine ; ça s'additionne et ça aide en cas d'urgence. Puis les envies. Si les chiffres ne tiennent pas, demandez à l'IA : \"Où pourrais-je réduire mes dépenses ?\" et décidez ce qui est bon pour vous."
          ],
          steps: ["Écrivez votre salaire net et vos principales factures en chiffres approximatifs.", "Demandez à l'IA un tableau de budget mensuel simple.", "Mettez d'abord les besoins, puis l'épargne, puis les envies.", "Demandez où réduire si le budget ne s'équilibre pas.", "Enregistrez le budget."],
          words: [["Budget", "un plan de la façon dont vous utiliserez votre argent chaque mois."], ["Salaire net", "l'argent que vous recevez vraiment après les impôts et les retenues."], ["Besoins et envies", "les besoins sont ce que vous devez payer ; les envies sont agréables à avoir."]],
          slides: [
            { title: "Un budget est un plan", bullets: ["Ce qui entre", "Où ça va", "Payer d'abord ce qui compte"] },
            { title: "Demandez à l'IA avec des chiffres approximatifs", bullets: ["Salaire net et principales factures", "Aucun numéro de compte", "\"Fais un tableau de budget simple.\""] },
            { title: "L'ordre compte", bullets: ["D'abord les besoins", "Puis l'épargne, même 10 $ par semaine", "Puis les envies"] }
          ],
          tryIt: "Écrivez votre salaire net réel ou estimé et cinq factures en chiffres approximatifs. Demandez à un assistant d'IA de faire un tableau de budget mensuel simple avec une petite ligne d'épargne.",
          youCanNow: "faire un budget mensuel simple avec l'aide de l'IA, sans partager de détails privés.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le salaire net ?", options: ["Votre salaire avant impôts", "Ce que vous recevez après les impôts et les retenues", "L'argent que vous empruntez", "Votre épargne"], answer: 1, why: "Le salaire net est l'argent que vous recevez vraiment et avec lequel vous faites votre budget." },
            { objective: "O1", q: "Vous voulez que l'IA vous aide à faire un budget. Qu'écrivez-vous ?", options: ["Votre numéro de compte bancaire", "Votre numéro de sécurité sociale", "Des montants approximatifs comme « loyer environ 800 $ »", "Votre mot de passe de banque en ligne"], answer: 2, why: "Des montants approximatifs suffisent, et les numéros privés restent hors de l'IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Suivre ses dépenses et ses factures",
          minutes: 5,
          goal: "Suivre vos dépenses pendant une semaine et créer des rappels pour les dates limites des factures.",
          text: [
            "Un budget ne marche que si vous savez où va vraiment l'argent. Pendant une semaine, notez tout ce que vous dépensez dans une note sur votre téléphone : l'article et le montant. Les petites choses comme les en-cas et les VTC s'additionnent.",
            "À la fin de la semaine, collez la liste (sans numéros de carte) dans l'IA et demandez : \"Regroupe mes dépenses par catégorie et fais le total de chacune. Où est partie la plus grande partie de mon argent ?\"",
            "Les frais de retard font perdre de l'argent. Créez un rappel sur votre téléphone quelques jours avant la date limite de chaque facture : \"Rappelle-moi de payer ma facture de téléphone le 12 de chaque mois.\" Payez vos factures uniquement par l'application ou le site officiel de l'entreprise, ou sur place."
          ],
          steps: ["Notez chaque achat dans une note sur votre téléphone pendant une semaine.", "Demandez à l'IA de les regrouper et de faire les totaux.", "Comparez avec votre budget.", "Créez un rappel mensuel avant la date limite de chaque facture.", "Payez uniquement par les applications ou sites officiels, ou sur place."],
          words: [["Catégorie", "un groupe de dépenses semblables, comme la nourriture ou les transports."], ["Frais de retard", "l'argent en plus demandé quand une facture est payée après sa date limite."], ["Date limite", "le dernier jour pour payer une facture à temps."]],
          slides: [
            { title: "Sachez où il va", bullets: ["Notez chaque achat pendant une semaine", "Les petites choses s'additionnent"] },
            { title: "Laissez l'IA trier", bullets: ["Collez la liste, sans numéros de carte", "\"Regroupe et fais les totaux par catégorie.\""] },
            { title: "Évitez les frais de retard", bullets: ["Un rappel quelques jours avant chaque date limite", "Payez uniquement par les voies officielles"] }
          ],
          tryIt: "Commencez une note de dépenses aujourd'hui. Puis créez un rappel mensuel qui se répète pour une facture, quelques jours avant sa date limite.",
          youCanNow: "suivre vos dépenses et créer des rappels pour payer vos factures à temps.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une date limite de paiement ?", options: ["Le dernier jour pour payer une facture à temps", "Le jour où vous êtes payé", "Le jour où la facture est envoyée", "N'importe quel jour que vous choisissez"], answer: 0, why: "La date limite est le dernier jour pour payer sans être en retard." },
            { objective: "O2", q: "Votre facture de téléphone est à payer le 15 de chaque mois. Que faites-vous ?", options: ["Payer quand vous y pensez", "Attendre un avis de retard", "La payer deux fois pour être sûr", "Créer un rappel qui se répète quelques jours avant le 15"], answer: 3, why: "Un rappel avant la date limite vous aide à éviter les pénalités de retard." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Des façons plus sûres d'utiliser une banque et d'emprunter",
          minutes: 5,
          goal: "Comparer les choix pour la banque et l'emprunt, et repérer ceux qui sont coûteux ou risqués.",
          text: [
            "Un compte dans une banque ou une coopérative de crédit (credit union) coûte en général moins cher et est plus sûr que d'encaisser vos chèques dans une boutique d'encaissement de chèques, qui prend des frais à chaque fois. Si vous avez eu des problèmes avec un compte bancaire dans le passé, demandez aux banques et aux coopératives de crédit si elles proposent des comptes \"seconde chance\" ou à frais réduits.",
            "Méfiez-vous de l'argent rapide. Les prêts sur salaire (payday loans), les prêts gagés sur une voiture et certaines applications d'avance d'argent peuvent coûter bien plus que la somme empruntée une fois les frais et les intérêts ajoutés. Avant d'emprunter, demandez : \"Quel est le total que je vais rembourser, et quand ?\" Vous pouvez demander à l'IA d'expliquer les conditions d'une offre avec des mots simples, mais pas de décider à votre place.",
            "Attention aux arnaques : aucun vrai prêteur ne vous demande de payer des frais d'avance en cartes cadeaux ou par virement. Pour de l'aide avec vos dettes, cherchez un conseiller en crédit d'une association ou une permanence d'aide juridique ; évitez les entreprises qui promettent d'effacer vos dettes contre de gros frais d'avance."
          ],
          steps: ["Demandez aux banques et coopératives de crédit s'il existe des comptes à frais réduits ou \"seconde chance\".", "Évitez si possible de payer des frais d'encaissement de chèques à chaque paie.", "Avant d'emprunter, demandez le coût total et les dates.", "Demandez à l'IA d'expliquer les conditions avec des mots simples.", "Ne payez jamais de frais d'avance par carte cadeau ou par virement."],
          words: [["Coopérative de crédit (credit union)", "une banque à but non lucratif qui appartient à ses membres."], ["Intérêts", "l'argent en plus que vous payez pour emprunter."], ["Prêt sur salaire (payday loan)", "un petit prêt de courte durée, qui a en général des frais très élevés."]],
          slides: [
            { title: "Ouvrez un compte, ne payez pas pour encaisser", bullets: ["Les frais d'encaissement de chèques s'additionnent", "Demandez des comptes \"seconde chance\" ou à frais réduits", "Les coopératives de crédit valent le coup d'œil"] },
            { title: "Attention à l'argent rapide", bullets: ["Les prêts sur salaire et gagés coûtent cher", "Demandez : total à rembourser, et quand ?", "L'IA peut expliquer ; c'est vous qui décidez"] },
            { title: "Attention aux arnaques", bullets: ["Aucuns frais d'avance par carte cadeau ou virement", "Passez par un conseiller associatif ou l'aide juridique"] }
          ],
          sources: [{ name: "FTC : comment éviter une arnaque (signaux d'alerte sur les paiements) (en anglais)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Demandez à un assistant d'IA : \"Explique avec des mots simples la différence entre une coopérative de crédit, une banque et une boutique d'encaissement de chèques, et quelles questions poser avant d'ouvrir un compte.\" Notez trois questions à poser.",
          youCanNow: "choisir des façons plus sûres d'utiliser une banque et repérer les emprunts coûteux ou risqués.",
          quickCheck: [
            { objective: "O3", q: "Que sont les intérêts d'un prêt ?", options: ["Un cadeau gratuit du prêteur", "L'argent en plus que vous payez pour emprunter", "Un type de compte d'épargne", "Des frais pour encaisser un chèque"], answer: 1, why: "Les intérêts sont ce que l'emprunt vous coûte en plus de la somme empruntée." },
            { objective: "O3", q: "Un prêteur dit que vous devez payer des frais en cartes cadeaux avant d'avoir un prêt. Que faites-vous ?", options: ["Payer vite", "Payer la moitié maintenant", "Partir : c'est une arnaque", "Demander à l'IA d'envoyer les cartes cadeaux"], answer: 2, why: "Des frais payés d'avance en cartes cadeaux sont un signe d'arnaque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les bases de l'argent avec l'IA",
        questions: [
          { objective: "O1", q: "Que devez-vous taper dans l'IA pour construire un budget ?", options: ["Votre numéro de sécurité sociale", "Votre numéro de compte bancaire", "Seulement des montants approximatifs", "Le code de votre carte"], answer: 2, why: "Des chiffres approximatifs suffisent et vous protègent." },
          { objective: "O1", q: "Dans un budget, qu'est-ce qui passe en premier ?", options: ["Les besoins comme le logement, la nourriture et les transports", "Les envies", "Les cadeaux", "Les loisirs"], answer: 0, why: "Les besoins vous permettent d'être logé, nourri et de travailler." },
          { objective: "O2", q: "Pourquoi suivre vos dépenses pendant une semaine ?", options: ["La loi l'exige", "Pour impressionner les autres", "Pour augmenter votre salaire", "Pour voir où va vraiment votre argent"], answer: 3, why: "Le suivi montre ce qu'il faut changer." },
          { objective: "O2", q: "Comment éviter les frais de retard ?", options: ["Payer quand vous y pensez", "Créer un rappel quelques jours avant chaque date limite", "Ignorer les factures", "Payer des inconnus"], answer: 1, why: "Les rappels vous aident à payer à temps." },
          { objective: "O3", q: "Un prêteur demande des frais d'avance en cartes cadeaux. C'est :", options: ["Normal", "Une arnaque", "Exigé par les banques", "Une bonne affaire"], answer: 1, why: "Les vrais prêteurs ne demandent pas de frais en cartes cadeaux." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier votre vie",
      lessons: [
        {
          objectives: ["O4"],
          title: "Consulter gratuitement votre rapport de crédit",
          minutes: 5,
          goal: "Expliquer comment obtenir votre rapport de crédit gratuit et quoi y chercher.",
          text: [
            "Un rapport de crédit est un relevé de vos emprunts et de vos factures. Les propriétaires, certains employeurs et les prêteurs peuvent le consulter. Après une période d'absence, il peut être presque vide, pas à jour ou contenir des erreurs, ou même des comptes que quelqu'un a ouverts à votre nom.",
            "Aux États-Unis, vous pouvez obtenir gratuitement vos rapports de crédit auprès des trois grandes agences nationales d'évaluation du crédit (Equifax, Experian et TransUnion) une fois par semaine sur AnnualCreditReport.com, le site officiel. Vous pouvez aussi appeler le 1-877-322-8228. Faites-le sur un appareil personnel, pas sur un ordinateur partagé, car vous y entrerez des données personnelles, et pas dans l'IA.",
            "Cherchez les comptes que vous ne reconnaissez pas et les informations fausses. Si quelqu'un a utilisé votre identité, allez sur IdentityTheft.gov pour obtenir un plan de rétablissement gratuit. Vous pouvez demander à l'IA d'expliquer les mots d'un rapport de crédit, mais ne collez jamais votre rapport dedans."
          ],
          steps: ["Allez sur AnnualCreditReport.com avec un appareil personnel, ou appelez le 1-877-322-8228.", "Demandez les rapports des trois agences.", "Cherchez les comptes que vous ne reconnaissez pas et les erreurs.", "Si votre identité a été utilisée, allez sur IdentityTheft.gov.", "Demandez à l'IA d'expliquer les mots, mais ne collez jamais le rapport."],
          words: [["Rapport de crédit", "un relevé de vos prêts, cartes de crédit et paiements de factures."], ["Agence d'évaluation du crédit", "une entreprise qui tient les rapports de crédit : Equifax, Experian ou TransUnion."]],
          slides: [
            { title: "Votre rapport de crédit", bullets: ["Un relevé de vos emprunts et factures", "Propriétaires et prêteurs peuvent le consulter", "Il peut contenir des erreurs après une absence"] },
            { title: "Gratuit, sur le site officiel", bullets: ["AnnualCreditReport.com, chaque semaine", "Ou appelez le 1-877-322-8228", "Utilisez un appareil personnel"] },
            { title: "Ce qu'il faut chercher", bullets: ["Des comptes que vous ne reconnaissez pas", "Des informations fausses", "Identité volée ? IdentityTheft.gov"] }
          ],
          sources: [{ name: "FTC : rapports de crédit gratuits (en anglais)", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "FTC : ce qu'il faut savoir sur le vol d'identité (en anglais)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }],
          tryIt: "Demandez à un assistant d'IA d'expliquer simplement ces mots d'un rapport de crédit : \"collection account\" (compte en recouvrement), \"hard inquiry\" (demande de crédit approfondie) et \"payment history\" (historique des paiements). Puis notez quand vous demanderez votre rapport gratuit sur un appareil personnel.",
          youCanNow: "obtenir votre rapport de crédit gratuit et savoir quoi y chercher.",
          quickCheck: [
            { objective: "O4", q: "Quelles sont les trois agences nationales d'évaluation du crédit ?", options: ["Visa, Mastercard et Discover", "L'IRS, le DMV et les tribunaux", "Votre banque, une coopérative de crédit et un bureau d'encaissement de chèques", "Equifax, Experian et TransUnion"], answer: 3, why: "Equifax, Experian et TransUnion sont les trois agences nationales d'évaluation du crédit." },
            { objective: "O4", q: "Vous voulez que l'IA vous aide à lire votre rapport de crédit. Que faites-vous ?", options: ["Demander à l'IA d'expliquer seulement les mots que vous ne comprenez pas", "Coller tout le rapport dans l'IA", "Envoyer le rapport à un inconnu en ligne", "Ne pas lire le rapport"], answer: 0, why: "L'IA peut expliquer les mots sans que vous partagiez votre rapport privé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planifier votre semaine",
          minutes: 5,
          goal: "Utiliser l'IA pour transformer une semaine chargée de rendez-vous, de travail et de courses en un plan simple.",
          text: [
            "Le retour peut vouloir dire beaucoup de choses en même temps : services au travail, pointages, candidatures, bureaux des pièces d'identité, temps en famille, peut-être des cours. Un plan de la semaine évite que tout se chevauche.",
            "Listez tout pour la semaine avec les jours et les heures, en mots généraux. Demandez à l'IA : \"Voici mes services, mes rendez-vous et mes courses. Fais un plan de la semaine simple, signale les conflits et laisse du temps de trajet entre les choses.\" Vous n'avez pas besoin de dire de quel type de pointage il s'agit.",
            "Mettez les choses fixes dans le calendrier de votre téléphone avec des rappels. Gardez un peu de temps libre. Si deux choses se chevauchent, appelez tôt pour changer de rendez-vous ; les services réagissent en général mieux à un appel en avance qu'à une absence."
          ],
          steps: ["Listez les services, rendez-vous et courses de la semaine en mots généraux.", "Demandez à l'IA un plan de la semaine avec les temps de trajet, et de signaler les conflits.", "Ajoutez les choses fixes à votre calendrier avec des rappels.", "Gardez un peu de temps libre.", "Appelez tôt pour déplacer les rendez-vous en conflit."],
          words: [["Conflit", "deux choses prévues au même moment."], ["Calendrier", "l'application de votre téléphone qui garde vos rendez-vous par date."]],
          slides: [
            { title: "Beaucoup de choses en même temps", bullets: ["Services, rendez-vous, courses, famille", "Un plan de la semaine évite les chevauchements"] },
            { title: "Demandez un plan à l'IA", bullets: ["Listez en mots généraux", "Ajoutez les temps de trajet", "Signalez les conflits"] },
            { title: "Rendez-le concret", bullets: ["Les choses fixes dans votre calendrier", "Gardez du temps libre", "Appelez tôt pour déplacer un rendez-vous"] }
          ],
          tryIt: "Listez en mots généraux vos engagements réels ou d'entraînement pour la semaine prochaine. Demandez à l'IA un plan de la semaine avec les temps de trajet, et réglez un conflit qu'elle trouve.",
          youCanNow: "transformer une semaine chargée en un plan simple sans conflits.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un conflit dans un emploi du temps ?", options: ["Une dispute au travail", "Un après-midi libre", "Deux choses à la même heure", "Une facture en retard"], answer: 2, why: "Un conflit d'horaire veut dire que deux engagements se chevauchent." },
            { objective: "O5", q: "Le plan de la semaine fait par l'IA ne prévoit aucun temps de trajet entre deux rendez-vous aux deux bouts de la ville. Que faites-vous ?", options: ["Ajouter le temps de trajet et déplacer un rendez-vous si besoin", "Faire confiance au plan", "Manquer les deux rendez-vous", "Supprimer le plan"], answer: 0, why: "Un vrai plan a besoin du temps de trajet pour que vous arriviez à l'heure." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Transformer vos objectifs en étapes hebdomadaires",
          minutes: 5,
          goal: "Découper un objectif d'argent ou de vie en petites étapes pour les quatre prochaines semaines.",
          text: [
            "Les grands objectifs, comme économiser pour la caution d'un appartement, obtenir un permis de conduire ou rembourser une dette, peuvent sembler lointains. Les découper en étapes hebdomadaires les rend faisables.",
            "Demandez à l'IA : \"Mon objectif est d'économiser 600 $ pour la caution d'un appartement en quatre mois. Je touche environ 1 800 $ net par mois. Découpe-le en étapes hebdomadaires et en petites actions.\" Ou : \"Aide-moi à prévoir les étapes pour récupérer mon permis de conduire dans mon État. Dis-moi ce que je dois vérifier auprès du DMV (le service des permis de conduire).\"",
            "Choisissez un objectif, écrivez les quatre étapes hebdomadaires et mettez la première dans votre calendrier. Faites le point chaque semaine : qu'est-ce que j'ai fait, quelle est la suite ? Pour les démarches juridiques comme le rétablissement d'un permis, les amendes ou les questions de casier judiciaire, confirmez auprès du service officiel ou d'un programme d'aide juridique ; l'IA ne peut donner qu'une liste de départ."
          ],
          steps: ["Choisissez un objectif.", "Demandez à l'IA de le découper en étapes hebdomadaires.", "Écrivez les quatre premières semaines.", "Mettez la première semaine dans votre calendrier.", "Faites le point chaque semaine et confirmez les démarches juridiques auprès du service officiel."],
          words: [["Objectif", "quelque chose que vous voulez réussir."], ["Aide juridique", "une aide juridique gratuite ou peu chère pour les personnes qui y ont droit."]],
          slides: [
            { title: "Grands objectifs, petites étapes", bullets: ["Économiser pour une caution", "Récupérer un permis", "Rembourser une dette"] },
            { title: "Demandez à l'IA de découper", bullets: ["Votre objectif et votre délai", "Étapes et actions hebdomadaires"] },
            { title: "Allez jusqu'au bout", bullets: ["La première étape dans votre calendrier", "Faites le point chaque semaine", "Confirmez les démarches juridiques auprès du service ou de l'aide juridique"] }
          ],
          tryIt: "Tâche finale : construisez avec l'IA votre budget mensuel à partir de chiffres approximatifs, créez un rappel pour la date limite de chaque facture, notez quand et comment vous obtiendrez votre rapport de crédit gratuit, et transformez un objectif en quatre étapes hebdomadaires.",
          youCanNow: "gérer votre argent et votre semaine avec l'aide de l'IA, et transformer vos objectifs en étapes que vous pouvez faire.",
          quickCheck: [
            { objective: "O5", q: "Comment rendre un grand objectif réalisable ?", options: ["Attendre d'avoir plus de temps", "Tout faire en un jour", "Le garder dans votre tête", "Le découper en petites étapes hebdomadaires"], answer: 3, why: "De petites étapes chaque semaine transforment un grand objectif en quelque chose que vous pouvez commencer tout de suite." },
            { objective: "O5", q: "L'IA vous donne les étapes pour récupérer votre permis de conduire. Que faites-vous ensuite ?", options: ["Les suivre sans vérifier", "Ignorer toutes les étapes", "Confirmer les étapes auprès du DMV ou de l'aide juridique", "Les publier en ligne"], answer: 2, why: "Ce sont les bureaux officiels qui décident des démarches légales, donc vous confirmez avec eux." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier votre vie",
        questions: [
          { objective: "O4", q: "Où obtenir des rapports de crédit gratuits à la source officielle ?", options: ["Sur n'importe quel site qui demande des frais", "Dans une publicité qui s'ouvre toute seule", "Par un lien dans un SMS", "Sur AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com est la source officielle gratuite." },
          { objective: "O4", q: "Devez-vous coller votre rapport de crédit dans un assistant d'IA ?", options: ["Non ; demandez seulement à l'IA d'expliquer les mots", "Oui, toujours", "Seulement la moitié", "Seulement sur un ordinateur de bibliothèque"], answer: 0, why: "Les rapports de crédit contiennent des détails privés." },
          { objective: "O4", q: "Vous trouvez un compte que vous n'avez jamais ouvert. Que faites-vous ?", options: ["Le payer tout de suite", "L'ignorer", "Aller sur IdentityTheft.gov pour un plan de rétablissement", "Le publier en ligne"], answer: 2, why: "IdentityTheft.gov guide les étapes pour s'en sortir." },
          { objective: "O5", q: "Deux rendez-vous sont au même moment la semaine prochaine. Que faire ?", options: ["Espérer que ça s'arrange", "Ne pas aller aux deux", "N'aller à aucun sans rien dire", "Appeler tôt pour en déplacer un"], answer: 3, why: "Un appel en avance marche mieux qu'une absence." },
          { objective: "O5", q: "L'IA vous donne les étapes pour récupérer un permis. Et ensuite ?", options: ["Ne rien faire", "La croire entièrement", "Confirmer auprès du DMV ou de l'aide juridique", "Payer un inconnu"], answer: 2, why: "Les démarches juridiques doivent être confirmées auprès des services officiels." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gérer son argent et sa vie avec l'IA",
    questions: [
      { objective: "O1", q: "Un budget est :", options: ["Un type de prêt", "Un plan pour votre argent", "Une carte bancaire", "Une facture"], answer: 1, why: "Il prévoit ce qui entre et ce qui sort." },
      { objective: "O1", q: "Le salaire net, c'est :", options: ["Ce que vous recevez après les impôts et les retenues", "Votre taux horaire avant impôts", "Une prime", "Un prêt"], answer: 0, why: "C'est l'argent que vous recevez vraiment." },
      { objective: "O1", q: "Lequel est un besoin ?", options: ["Le loyer", "Un nouveau jeu vidéo", "Manger au restaurant tous les jours", "Un deuxième abonnement de streaming"], answer: 0, why: "Le logement est un besoin de base." },
      { objective: "O1", q: "Même une petite épargne, comme 10 $ par semaine, aide parce que :", options: ["Elle augmente votre salaire", "Elle s'additionne et aide en cas d'urgence", "Elle est obligatoire", "Elle arrête toutes les factures"], answer: 1, why: "De petites sommes deviennent un coussin de sécurité." },
      { objective: "O1", q: "Si votre budget ne s'équilibre pas, vous pouvez demander à l'IA :", options: ["\"Paie mes factures.\"", "\"Quel est mon code de carte ?\"", "\"Où pourrais-je réduire mes dépenses ?\"", "\"Prends un prêt pour moi.\""], answer: 2, why: "L'IA peut proposer des options ; c'est vous qui décidez." },
      { objective: "O2", q: "Une catégorie de dépenses, c'est :", options: ["Une date limite", "Une banque", "Un prêt", "Un groupe de dépenses semblables, comme la nourriture"], answer: 3, why: "Les catégories montrent où va l'argent." },
      { objective: "O2", q: "Une date limite, c'est :", options: ["Un jour férié", "Le jour de paie", "Le dernier jour pour payer une facture à temps", "Un anniversaire"], answer: 2, why: "Payer après peut entraîner des frais de retard." },
      { objective: "O2", q: "La façon la plus sûre de payer une facture est :", options: ["Par l'application ou le site officiel de l'entreprise, ou sur place", "Par un lien dans un SMS", "Par carte cadeau à quelqu'un qui appelle", "Par virement à un inconnu"], answer: 0, why: "Les voies officielles évitent les arnaques." },
      { objective: "O3", q: "Les boutiques d'encaissement de chèques en général :", options: ["Sont tenues par l'État", "Sont gratuites", "Vous versent des intérêts", "Prennent des frais à chaque fois"], answer: 3, why: "Les frais s'additionnent à chaque paie." },
      { objective: "O3", q: "Une coopérative de crédit (credit union) est :", options: ["Un prêteur sur salaire", "Une banque à but non lucratif qui appartient à ses membres", "Une agence d'évaluation du crédit", "Une boutique d'encaissement de chèques"], answer: 1, why: "Les coopératives de crédit appartiennent à leurs membres." },
      { objective: "O3", q: "Si vous avez eu des problèmes de compte bancaire avant, renseignez-vous sur :", options: ["Les comptes en cartes cadeaux", "Les comptes \"seconde chance\" ou à frais réduits", "Seulement les cryptomonnaies", "Rien"], answer: 1, why: "Beaucoup de banques et de coopératives de crédit en proposent." },
      { objective: "O3", q: "Avant de prendre un prêt, demandez :", options: ["La couleur préférée du prêteur", "Seulement la mensualité", "Rien", "Le total que vous rembourserez, et quand"], answer: 3, why: "Le coût total montre ce que vous payez vraiment." },
      { objective: "O3", q: "Les intérêts, c'est :", options: ["L'argent en plus que vous payez pour emprunter", "Un cadeau", "Votre salaire", "Un rappel de facture"], answer: 0, why: "Emprunter coûte des intérêts." },
      { objective: "O3", q: "Pour de l'aide avec vos dettes, un choix sûr est :", options: ["Un inconnu en ligne", "Une entreprise qui demande de gros frais d'avance pour effacer les dettes", "Un conseiller en crédit d'une association ou l'aide juridique", "Une offre en cartes cadeaux"], answer: 2, why: "Les associations et l'aide juridique évitent les arnaques au désendettement." },
      { objective: "O4", q: "À quelle fréquence pouvez-vous obtenir un rapport de crédit gratuit de chaque agence sur le site officiel ?", options: ["Seulement en payant", "Une fois tous les dix ans", "Jamais", "Une fois par semaine"], answer: 3, why: "Les agences ont prolongé les rapports hebdomadaires gratuits." },
      { objective: "O4", q: "Les trois grandes agences nationales d'évaluation du crédit sont :", options: ["Google, Apple et Microsoft", "Visa, Mastercard et Discover", "Equifax, Experian et TransUnion", "Le DMV, l'IRS et la SSA"], answer: 2, why: "Ce sont ces trois-là qui tiennent les rapports de crédit." },
      { objective: "O4", q: "Demandez votre rapport de crédit sur :", options: ["Un ordinateur de bibliothèque partagé en restant connecté à tout", "Un appareil personnel", "Le téléphone d'un inconnu", "Une discussion avec une IA"], answer: 1, why: "Vous y entrez des données personnelles." },
      { objective: "O5", q: "Quand vous demandez à l'IA de planifier votre semaine, décrivez vos engagements :", options: ["En mots généraux", "Avec votre numéro de dossier", "Avec votre numéro de pièce d'identité", "Avec votre numéro de sécurité sociale"], answer: 0, why: "Des mots généraux suffisent." },
      { objective: "O5", q: "Un \"conflit\" dans un planning veut dire :", options: ["Deux choses au même moment", "Une dispute", "Un jour libre", "Une facture"], answer: 0, why: "Les conflits demandent de déplacer un rendez-vous." },
      { objective: "O5", q: "Pour rendre un grand objectif faisable, vous :", options: ["Attendez la chance", "Le découpez en étapes hebdomadaires", "Faites tout en une journée", "Le gardez secret pour vous-même"], answer: 1, why: "De petites étapes mènent à de grands résultats." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      6,
      7,
      8,
      11,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Budget du mois",
        objective: "O1",
        notYet: "Pas de budget, ou il utilise de vrais numéros de compte ou oublie des besoins.",
        meets: "Un budget d'un mois à partir de chiffres approximatifs, avec les besoins en premier et une petite ligne d'épargne.",
        exceeds: "Il est équilibré, et l'apprenant a demandé à l'IA où réduire si besoin."
      },
      {
        name: "Rappels des factures",
        objective: "O2",
        notYet: "Certaines factures n'ont pas de rappel.",
        meets: "Un rappel pour chaque facture, quelques jours avant sa date limite.",
        exceeds: "Les rappels se répètent chaque mois et l'apprenant a commencé une note de dépenses."
      },
      {
        name: "Plan pour le rapport de crédit",
        objective: "O4",
        notYet: "Pas de plan, ou il prévoit d'utiliser un site non officiel.",
        meets: "Il note quand il demandera le rapport gratuit sur le site officiel, avec un appareil privé.",
        exceeds: "Il note aussi quoi chercher et quoi faire pour un compte qu'il n'a jamais ouvert."
      },
      {
        name: "Objectif en étapes hebdomadaires",
        objective: "O5",
        notYet: "L'objectif est flou ou n'a pas d'étapes.",
        meets: "Un objectif découpé en quatre petites étapes hebdomadaires.",
        exceeds: "Chaque étape a un jour et s'intègre à la semaine de l'apprenant."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui disent suivre un budget et payer leurs factures à temps pendant 30 jours (enquête de suivi)",
      "Les apprenants qui demandent leur rapport de crédit gratuit ou ouvrent un compte à frais réduits dans une banque ou une coopérative de crédit dans les 60 jours",
      "Les apprenants qui commencent un autre cours Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet et une application de rappels ou d'agenda",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Du papier et un stylo pour les chiffres approximatifs et la note de dépenses",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Les apprenants peuvent utiliser des chiffres d'exercice plutôt que leur vrai salaire et leurs vraies factures s'ils le préfèrent.",
      "Ne demandez jamais aux apprenants de taper de vrais numéros de compte, de sécurité sociale ou de dossier ; des montants approximatifs suffisent.",
      "Ce cours ne donne pas de conseil financier ou juridique ; ayez sous la main les coordonnées de l'aide juridique locale et d'un conseiller en crédit à but non lucratif pour les questions sur les dettes, les amendes ou les pensions alimentaires.",
      "Le rapport de crédit doit être demandé sur un appareil privé, pas sur un ordinateur partagé en salle.",
      "Notez la tâche finale avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
