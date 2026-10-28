"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-service-business.js). See scripts/koachlearn-courses/README.md, "Translations".

const CAN_SPAM = { name: "FTC : la loi CAN-SPAM, guide de conformité pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC : règle sur les avis et témoignages de consommateurs, questions et réponses (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "L'IA pour les entreprises de services",
  skills: "Rédiger des devis clairs, Préparer des messages de réservation et de rappel, Créer des listes de contrôle de chantier, Rédiger des descriptions de services, Relancer après une intervention, Demander des avis de la bonne façon",
  outcome: "utiliser l'IA pour gérer l'administration d'une entreprise de services, du premier appel au client fidèle : un modèle de devis clair, des messages de réservation et de rappel, une liste de contrôle d'intervention, une carte des services avec les prix, et un message de suivi qui demande des avis honnêtes et de nouvelles réservations.",
  about: [
    "Ce cours s'adresse aux personnes qui vendent leur temps et leur savoir-faire : agents d'entretien, coiffeurs et barbiers, prothésistes ongulaires, jardiniers, plombiers et bricoleurs, déménageurs, mécaniciens à domicile, peintres, toiletteurs pour animaux et professeurs particuliers. Beaucoup de nos élèves travaillent seuls ou en famille.",
    "Vous utiliserez un assistant d'IA gratuit et de simples documents et tableurs pour répondre plus vite aux demandes, faire des devis clairs, arriver préparé, réaliser chaque intervention avec la même qualité, et transformer les clients satisfaits en clients fidèles et en recommandations.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez un kit pour votre métier : une carte des services avec les prix, un modèle de devis avec la description des travaux, le prix, ce qui n'est pas inclus et la durée de validité, des modèles de confirmation de réservation et de rappel, une liste de contrôle pour votre intervention la plus courante, et un message de suivi qui remercie le client et lui demande un avis honnête et une recommandation.",
  chapters: [
    {
      name: "Chapitre 1 : Décrocher le travail",
      lessons: [
        {
          title: "Une carte des services claire",
          minutes: 5,
          goal: "Rédiger une carte des services avec des descriptions et des prix clairs.",
          text: [
            "Les clients veulent savoir ce que vous faites et à peu près combien ça coûte avant d'appeler. Une carte des services liste chaque service, ce qui est inclus, la durée et le prix ou la fourchette de prix.",
            "Donnez à l'IA vos vrais services et vos vrais prix : \"Écris une carte des services pour mon entreprise de ménage : ménage standard 120 $ jusqu'à 2 chambres, grand ménage 220 $, ménage de fin de bail à partir de 260 $. Indique ce qui est inclus dans chacun. Mots simples.\" Vérifiez tout, surtout ce qui est inclus ou non.",
            "Une carte claire évite les disputes plus tard. Dites simplement ce qui coûte en plus (l'intérieur du four, les poils d'animaux, les escaliers, un déplacement de plus de 15 miles, soit environ 25 km)."
          ],
          steps: ["Listez vos services et vos vrais prix.", "Écrivez ce qui est inclus et ce qui coûte en plus.", "Demandez à l'IA de mettre en forme une carte claire.", "Vérifiez chaque prix et chaque élément inclus."],
          words: [["Carte des services", "la liste des services que vous proposez, avec ce qui est inclus et le prix."], ["Option", "un service en plus qui coûte davantage."]],
          slides: [
            { title: "Ce que les clients veulent d'abord", bullets: ["Ce que vous faites", "Ce qui est inclus", "Combien ça coûte à peu près"] },
            { title: "Construisez-la avec l'IA", bullets: ["Donnez vos vrais services et prix", "Demandez des mots clairs et simples"] },
            { title: "Évitez les disputes", bullets: ["Dites ce qui coûte en plus", "Exemple : four, poils d'animaux, déplacement de plus de 15 miles"] }
          ],
          tryIt: "Rédigez votre carte des services avec au moins trois services, ce qui est inclus et les options. Utilisez l'IA pour la mise en forme, puis vérifiez chaque prix.",
          youCanNow: "rédiger une carte des services claire avec ce qui est inclus, les options et les prix."
        },
        {
          title: "Rédiger des devis et des estimations",
          minutes: 6,
          goal: "Créer un modèle de devis clair, juste et qui vous protège.",
          text: [
            "Un devis dit exactement ce que vous allez faire, pour combien et à quelles conditions. Un bon devis contient : le client et l'adresse du chantier, la description des travaux (ce que vous ferez), les matériaux, le prix, ce qui n'est pas inclus, les conditions de paiement, la date de début et la durée de validité du devis.",
            "Demandez à l'IA un modèle : \"Fais un modèle de devis d'une page pour une petite entreprise de peinture, avec des cases à remplir pour [client], [adresse], [travaux], [matériaux], [prix], [non inclus], [conditions de paiement], [valable jusqu'au].\" Enregistrez-le dans Docs ou Word.",
            "L'IA peut vous aider à décrire clairement les travaux, mais c'est vous qui fixez le prix d'après vos coûts : matériaux, heures, déplacement et bénéfice. Pour les gros chantiers, les contrats et les licences dépendent de votre État et de votre métier : vérifiez auprès de l'organisme de licences des entrepreneurs de votre État (ou de votre pays) ou d'un professionnel."
          ],
          steps: ["Demandez à l'IA un modèle de devis avec des cases à remplir.", "Remplissez-le pour un chantier réel ou fictif.", "Fixez le prix d'après vos coûts plus le bénéfice.", "Indiquez ce qui n'est pas inclus et la durée de validité.", "Vérifiez les règles de licence et de contrat pour les gros chantiers."],
          words: [["Devis", "un prix écrit pour un travail précis."], ["Description des travaux", "exactement ce que vous ferez et ne ferez pas sur un chantier."], ["Conditions de paiement", "quand et comment le client paie, par exemple un acompte puis le solde à la fin."]],
          slides: [
            { title: "Les parties d'un bon devis", bullets: ["Client, adresse et description des travaux", "Matériaux et prix", "Non inclus, conditions de paiement, validité"] },
            { title: "L'IA crée le modèle", bullets: ["Des cases comme [travaux] et [prix]", "Enregistrez-le dans Docs ou Word"] },
            { title: "Vous fixez le prix", bullets: ["Matériaux + heures + déplacement + bénéfice", "Gros chantiers : vérifiez les licences et les contrats"] }
          ],
          tryIt: "Créez votre modèle de devis avec l'IA, puis remplissez-le pour un chantier réel ou fictif. Calculez le prix sur papier d'après vos coûts.",
          youCanNow: "rédiger un devis clair qui fixe les travaux, le prix et les conditions."
        },
        {
          title: "Répondre vite aux nouvelles demandes",
          minutes: 4,
          goal: "Répondre rapidement aux demandes avec des modèles qui posent les bonnes questions.",
          text: [
            "La première entreprise qui répond décroche souvent le travail. Ayez un modèle prêt pour chaque moyen de vous contacter : SMS, e-mail, messages sur les réseaux sociaux et appels manqués.",
            "Une bonne première réponse remercie, pose les deux ou trois questions dont vous avez besoin pour faire le devis (\"Combien de chambres ? Des animaux ? Quel jour vous convient ?\"), et propose une étape suivante. Demandez à l'IA d'en écrire une pour chaque canal, dans votre style.",
            "Gardez les modèles sur votre téléphone pour répondre entre deux interventions. Ne demandez jamais aux gens d'envoyer un numéro de carte ou une pièce d'identité par SMS ou par message sur les réseaux sociaux."
          ],
          steps: ["Listez les questions nécessaires pour faire un devis.", "Demandez à l'IA un modèle de première réponse pour chaque canal.", "Enregistrez-les sur votre téléphone.", "Répondez dans l'heure quand vous le pouvez."],
          words: [["Prospect", "une personne qui s'est renseignée sur votre service mais n'a pas encore réservé."], ["Canal", "un moyen par lequel les clients vous contactent, comme le SMS, l'e-mail ou les réseaux sociaux."]],
          slides: [
            { title: "La rapidité fait gagner", bullets: ["La première réponse décroche souvent le travail", "Un modèle pour chaque canal"] },
            { title: "Une bonne première réponse", bullets: ["Remerciez", "Posez les 2 ou 3 questions nécessaires", "Proposez l'étape suivante"] },
            { title: "À portée de main et sûr", bullets: ["Modèles enregistrés sur votre téléphone", "Jamais de numéro de carte par SMS"] }
          ],
          tryIt: "Écrivez vos trois questions indispensables. Demandez à l'IA un modèle de première réponse par SMS et par e-mail dans votre style, et enregistrez-les sur votre téléphone.",
          youCanNow: "répondre vite aux nouvelles demandes avec des modèles qui recueillent ce qu'il faut pour le devis."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Décrocher le travail",
        questions: [
          { q: "Pourquoi indiquer sur votre carte ce qui coûte en plus ?", options: ["Pour embrouiller les clients", "Pour éviter les disputes plus tard", "Pour facturer des frais cachés", "Ce n'est pas utile"], answer: 1, why: "Des options claires fixent les attentes." },
          { q: "Qu'est-ce qui a sa place dans un devis ?", options: ["Une fausse réduction", "Votre mot de passe", "Le numéro de carte du client", "La description des travaux et la durée de validité"], answer: 3, why: "La description et la validité protègent les deux parties." },
          { q: "Qui fixe le prix d'un devis ?", options: ["Vous, d'après vos coûts et votre bénéfice", "L'IA", "Le client seul", "Un concurrent"], answer: 0, why: "Vous seul connaissez vos vrais coûts." },
          { q: "Où vérifiez-vous les règles de licence pour les gros chantiers ?", options: ["Auprès d'un voisin", "Dans une discussion avec l'IA", "Auprès de l'organisme de licences de votre État ou d'un professionnel", "Dans une publication sur les réseaux"], answer: 2, why: "Les licences dépendent de votre État et de votre métier." },
          { q: "Que doit contenir une première réponse à un prospect ?", options: ["Une demande de numéro de carte", "Seulement votre prix", "Des remerciements, les questions nécessaires et une étape suivante", "Rien ; attendez une semaine"], answer: 2, why: "Cela fait avancer le prospect vers une réservation." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire le travail et garder le client",
      lessons: [
        {
          title: "Confirmations de réservation et rappels",
          minutes: 4,
          goal: "Mettre en place des messages de réservation et de rappel qui réduisent les absences.",
          text: [
            "Les clients absents et les portes fermées vous coûtent une journée de salaire. Des confirmations et des rappels clairs aident. Une confirmation indique la date, le créneau d'arrivée, l'adresse, le prix, ce que le client doit préparer et votre politique d'annulation.",
            "Demandez à l'IA : \"Écris une confirmation de réservation et un rappel la veille pour mon service de toilettage canin à domicile. Cases : [nom], [date], [créneau], [adresse], [prix]. Ajoute notre politique d'annulation de 24 heures.\"",
            "Beaucoup d'outils de réservation peuvent envoyer des rappels automatiquement ; regardez les réglages de votre outil. Si vous envoyez des SMS ou des e-mails publicitaires (pas seulement des rappels), demandez d'abord l'autorisation et respectez les règles sur les e-mails, dont un lien de désinscription."
          ],
          steps: ["Écrivez votre politique d'annulation.", "Demandez à l'IA un modèle de confirmation et un modèle de rappel.", "Activez les rappels automatiques dans votre outil de réservation s'il en a.", "N'envoyez de publicité qu'avec autorisation et un lien de désinscription."],
          words: [["Absence (no-show)", "un client qui ne se présente pas à un rendez-vous réservé."], ["Politique d'annulation", "vos règles pour annuler, par exemple prévenir 24 heures avant."], ["Créneau", "une plage d'heures d'arrivée, comme de 9 h à 11 h."]],
          slides: [
            { title: "Réduisez les absences", bullets: ["Confirmation juste après la réservation", "Rappel la veille"] },
            { title: "Une bonne confirmation", bullets: ["Date, créneau, adresse, prix", "Comment se préparer", "Politique d'annulation"] },
            { title: "Automatisez et restez dans la loi", bullets: ["Les outils de réservation envoient des rappels", "La publicité exige une autorisation et une désinscription"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Écrivez votre politique d'annulation en deux lignes. Demandez à l'IA un modèle de confirmation et un modèle de rappel la veille avec des cases à remplir, et enregistrez-les.",
          youCanNow: "envoyer des confirmations de réservation et des rappels qui réduisent les absences."
        },
        {
          title: "Des listes de contrôle pour la même qualité à chaque fois",
          minutes: 5,
          goal: "Transformer votre savoir-faire en une liste de contrôle que vous et vos aides suivez.",
          text: [
            "Une liste de contrôle rend chaque intervention aussi bonne que votre meilleure, même un jour de fatigue ou quand c'est un aide qui la fait. Elle aide aussi à former les nouveaux.",
            "Dites ou tapez comment vous faites votre intervention la plus courante, du début à la fin, et demandez à l'IA : \"Transforme ces notes en liste de contrôle pour un entretien standard de pelouse chez un particulier : avant d'arriver, sur place, avant de partir. Étapes courtes.\" Ajoutez les étapes de sécurité exigées dans votre métier, et vérifiez-les avec les consignes de sécurité officielles ou votre formation professionnelle.",
            "Ajoutez une visite finale avec le client et des photos avant et après (avec son autorisation) pour montrer le travail."
          ],
          steps: ["Décrivez votre intervention courante du début à la fin.", "Demandez à l'IA d'en faire une liste en trois parties.", "Ajoutez les étapes de sécurité de votre métier.", "Ajoutez une visite finale et des photos avec autorisation.", "Testez-la à la prochaine intervention et corrigez-la."],
          words: [["Liste de contrôle", "une liste d'étapes à cocher pour ne rien oublier."], ["Visite finale", "le tour du travail terminé avec le client."]],
          slides: [
            { title: "Pourquoi une liste de contrôle", bullets: ["La même qualité à chaque fois", "Aide à former les aides"] },
            { title: "Construisez-la avec l'IA", bullets: ["Décrivez l'intervention du début à la fin", "Avant d'arriver, sur place, avant de partir"] },
            { title: "Finissez en beauté", bullets: ["Les étapes de sécurité de votre métier", "Visite finale avec le client", "Photos avant et après avec autorisation"] }
          ],
          tryIt: "Décrivez votre intervention la plus courante en quelques lignes. Demandez à l'IA d'en faire une liste en trois parties, ajoutez les étapes de sécurité, et utilisez-la à votre prochaine intervention.",
          youCanNow: "créer et utiliser une liste de contrôle qui garde la même qualité à chaque fois."
        },
        {
          title: "Suivi, avis honnêtes et clients fidèles",
          minutes: 5,
          goal: "Faire un suivi après l'intervention pour obtenir des avis honnêtes, des recommandations et de nouvelles réservations.",
          text: [
            "Le travail n'est pas fini quand vous partez. Un message de remerciement le jour même, avec un lien pour laisser un avis et une proposition de réserver la prochaine visite, ramène du travail. Demandez à l'IA de l'écrire dans votre style avec des cases [nom] et [service].",
            "Demandez à chaque client un avis honnête de la même façon, qu'il soit content ou non. N'offrez pas de récompense uniquement pour les avis positifs, et n'écrivez jamais de faux avis ; la règle de la FTC (l'agence américaine de protection des consommateurs) sur les avis interdit les deux.",
            "Programmez des rappels pour les services réguliers : les gouttières chaque automne, une coupe toutes les trois semaines, un contrôle de chaudière chaque année. Un court message \"C'est le moment de votre prochain... ?\" garde votre agenda plein."
          ],
          steps: ["Envoyez un remerciement le jour même.", "Ajoutez un lien d'avis et demandez des avis honnêtes.", "Proposez la prochaine réservation.", "Programmez des rappels pour les services réguliers."],
          words: [["Recommandation", "un client qui vous envoie un ami."], ["Service régulier", "un travail dont les clients ont besoin à nouveau à intervalles fixes."]],
          slides: [
            { title: "Remerciement le jour même", bullets: ["Remerciez par le prénom", "Lien pour laisser un avis", "Proposez la prochaine réservation"] },
            { title: "Seulement des avis honnêtes", bullets: ["Demandez à chaque client de la même façon", "Pas de récompense seulement pour les avis positifs", "Jamais de faux avis (règle de la FTC)"] },
            { title: "Gardez l'agenda plein", bullets: ["Gouttières chaque automne ; coupe toutes les 3 semaines", "Rappels \"C'est le moment de votre prochain... ?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Tâche finale : rassemblez votre kit de services : carte des services, modèle de devis, modèles de première réponse, de confirmation et de rappel, une liste de contrôle d'intervention, et un message de remerciement avec une demande d'avis et une proposition de prochaine réservation.",
          youCanNow: "gérer avec l'aide de l'IA l'administration d'une entreprise de services, du premier appel au client fidèle."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire le travail et garder le client",
        questions: [
          { q: "Qu'est-ce qui a sa place dans une confirmation de réservation ?", options: ["Date, créneau, adresse, prix et politique d'annulation", "Le numéro de carte du client", "Votre mot de passe", "Rien"], answer: 0, why: "Ces détails évitent la confusion et les absences." },
          { q: "Avant d'envoyer des e-mails publicitaires, il vous faut :", options: ["Un faux nom d'expéditeur", "Rien", "La pièce d'identité du client", "Une autorisation et une option de désinscription"], answer: 3, why: "La loi américaine CAN-SPAM exige une désinscription et de l'honnêteté." },
          { q: "Pourquoi utiliser une liste de contrôle d'intervention ?", options: ["Pour ralentir", "La même qualité à chaque fois et une formation plus facile", "Pour sauter la sécurité", "Pour facturer plus"], answer: 1, why: "Les listes de contrôle gardent une qualité constante." },
          { q: "Avant de prendre des photos avant et après, vous devez :", options: ["Obtenir l'autorisation du client", "Les prendre en cachette", "Publier l'adresse", "Ne rien faire de spécial"], answer: 0, why: "Respectez la vie privée du client." },
          { q: "Quelle demande d'avis respecte la règle de la FTC ?", options: ["Écrire des avis depuis les comptes d'amis", "10 % de réduction seulement pour les avis 5 étoiles", "Demander à chaque client un avis honnête", "Acheter des avis"], answer: 2, why: "Une demande honnête et sans condition est acceptable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour les entreprises de services",
    questions: [
      { q: "Une carte des services liste :", options: ["Les adresses des clients", "Les services, ce qui est inclus et les prix", "Les mots de passe", "Les numéros de sécurité sociale du personnel"], answer: 1, why: "Elle montre ce que vous proposez et le coût." },
      { q: "Une option, c'est :", options: ["Un avis", "Un cadeau gratuit", "Une taxe", "Un service en plus qui coûte davantage"], answer: 3, why: "Les options sont des extras." },
      { q: "L'IA met en forme votre carte. Vous devez vérifier :", options: ["Les couleurs", "Seulement la police", "Rien", "Chaque prix et ce qui est inclus"], answer: 3, why: "L'IA peut changer des détails." },
      { q: "La description des travaux, c'est :", options: ["Vos outils", "Exactement ce que vous ferez et ne ferez pas", "Votre camionnette", "Vos horaires"], answer: 1, why: "Elle définit le travail." },
      { q: "Un devis doit dire combien de temps il est :", options: ["Imprimé", "Prononcé", "Valable", "Tapé"], answer: 2, why: "Les prix changent ; le devis doit avoir une date limite." },
      { q: "Un prix calculé d'après vos coûts comprend :", options: ["Matériaux, heures, déplacement et bénéfice", "Seulement les matériaux", "Seulement le déplacement", "Ce que l'IA propose"], answer: 0, why: "Tous les coûts plus le bénéfice." },
      { q: "Un prospect, c'est :", options: ["Un outil", "Un métal", "Une personne qui s'est renseignée mais n'a pas réservé", "Une facture"], answer: 2, why: "Les prospects sont des clients possibles." },
      { q: "Pourquoi répondre vite aux prospects ?", options: ["La première réponse décroche souvent le travail", "C'est obligatoire", "Pour les agacer", "Ça n'a pas d'importance"], answer: 0, why: "La rapidité fait gagner des clients." },
      { q: "Que ne faut-il jamais demander par SMS ?", options: ["Le nombre de chambres", "Un numéro de carte", "Un jour qui convient", "La présence d'animaux"], answer: 1, why: "Les numéros de carte sont privés." },
      { q: "Un créneau, c'est :", options: ["Un jour férié", "Une vitre", "Une date limite de paiement", "Une plage d'heures d'arrivée"], answer: 3, why: "Il fixe les attentes sur l'heure d'arrivée." },
      { q: "Un rappel la veille aide à :", options: ["Réduire les absences et les portes fermées", "Augmenter les prix", "Sauter l'intervention", "Cacher la politique"], answer: 0, why: "Les rappels réduisent les rendez-vous manqués." },
      { q: "Où peut-on souvent activer les rappels automatiques ?", options: ["Nulle part", "Dans un agenda papier", "À la banque", "Dans les réglages de votre outil de réservation"], answer: 3, why: "Beaucoup d'outils de réservation envoient des rappels." },
      { q: "Comment construire une liste de contrôle d'intervention ?", options: ["Laisser l'IA l'inventer à partir de rien", "Copier un concurrent", "Décrire votre travail, laisser l'IA l'organiser, puis la tester", "Ne pas en faire"], answer: 2, why: "Votre savoir-faire, organisé par l'IA." },
      { q: "Les étapes de sécurité de votre liste doivent être vérifiées avec :", options: ["L'IA seulement", "Les consignes de sécurité officielles ou votre formation professionnelle", "Une publication sur les réseaux", "Rien"], answer: 1, why: "La sécurité exige une source fiable." },
      { q: "Une visite finale, c'est :", options: ["Un avis", "Un couloir", "Un devis", "Le tour du travail terminé avec le client"], answer: 3, why: "Elle confirme que le client est satisfait." },
      { q: "Quand envoyer un remerciement ?", options: ["Jamais", "Un an après", "Le jour même", "Seulement s'il se plaint"], answer: 2, why: "Un remerciement rapide apporte plus d'avis et de réservations." },
      { q: "Offrir une réduction seulement pour les avis 5 étoiles est :", options: ["Interdit par la règle de la FTC sur les avis", "Acceptable", "Obligatoire", "Malin"], answer: 0, why: "Les récompenses liées aux avis positifs sont interdites." },
      { q: "Un exemple de service régulier :", options: ["Un déménagement unique", "Le nettoyage des gouttières chaque automne", "Une vitre cassée une fois", "Une livraison unique"], answer: 1, why: "Il revient à intervalles fixes." },
      { q: "Une recommandation, c'est :", options: ["Des frais", "Un client qui vous envoie un ami", "Une taxe", "Un outil"], answer: 1, why: "Les recommandations apportent de nouveaux clients." },
      { q: "Quelle partie du travail reste à vous, et pas à l'IA ?", options: ["Fixer les prix et bien faire le travail", "Mettre en forme un modèle", "Formuler un rappel", "Organiser des notes"], answer: 0, why: "L'IA aide pour les mots ; vous dirigez l'entreprise." }
    ]
  }
};
