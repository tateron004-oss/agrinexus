"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-sales-growth.js). See scripts/koachlearn-courses/README.md, "Translations".

const CAN_SPAM = { name: "FTC : loi CAN-SPAM, guide de conformité pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "L'IA pour les ventes et la croissance de l'entreprise",
  skills: "Décrire votre client idéal, Rédiger une offre claire, Tenir une liste de clients simple, Écrire des messages de suivi, Lire les chiffres de ventes, Planifier un effort de croissance sur 30 jours",
  outcome: "utiliser l'IA pour planifier et mener une campagne de ventes de 30 jours pour votre entreprise : décrire votre client idéal, rédiger une offre claire, mettre en place une liste de clients simple, écrire une série de messages de suivi qui respecte les règles sur les e-mails, et suivre les résultats dans un tableur.",
  about: [
    "Ce cours s'adresse aux patrons de petites entreprises qui veulent vendre plus à leurs clients actuels et à ceux du quartier : boutiques, restaurants, salons, entreprises de ménage et de réparation, traiteurs et food trucks. Beaucoup de nos élèves sont des entrepreneurs issus de minorités qui développent leur entreprise sans gros budget marketing.",
    "Vous utiliserez un assistant d'IA gratuit pour réfléchir à qui achète chez vous, construire une offre qui a du sens, relancer les clients qui ont accepté d'avoir de vos nouvelles, et lire vos propres chiffres pour voir ce qui marche. L'IA vous aide à écrire et à réfléchir ; ce sont votre jugement et vos relations avec les clients qui font vendre.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les tâches forment ensemble un plan de ventes sur 30 jours."
  ],
  finalTask: "Rédigez un plan de ventes de 30 jours sur une page : votre client idéal en trois phrases, une offre avec un prix clair et une date de fin, où se trouve votre liste de clients et comment les gens s'y sont inscrits, une série de trois messages de suivi (avec votre adresse et une ligne de désinscription dans tout e-mail marketing), et un tableau de suivi avec les chiffres que vous regarderez chaque semaine.",
  chapters: [
    {
      name: "Chapitre 1 : Qui achète et ce que vous proposez",
      lessons: [
        {
          title: "Décrire votre client idéal",
          minutes: 5,
          goal: "Écrire une description courte et précise du client que vous voulez le plus attirer.",
          text: [
            "On ne peut pas bien vendre à tout le monde. Pensez à vos meilleurs clients : ceux qui reviennent, dépensent bien et envoient des amis. Qu'ont-ils en commun ?",
            "Écrivez trois phrases : qui ils sont, ce dont ils ont besoin, et pourquoi ils vous choisissent. Exemple pour un restaurant d'Afrique de l'Ouest : \"Des employés de bureau à moins de trois kilomètres qui veulent un déjeuner copieux à moins de 15 $. Ils sont pressés et commandent sur leur téléphone. Ils nous choisissent pour les grosses portions et le retrait rapide.\"",
            "L'IA peut vous aider à réfléchir : \"Voici ce que je sais de mes meilleurs clients. Quelles questions dois-je me poser pour mieux les décrire ?\" Utilisez ce que vous voyez dans votre boutique, pas des suppositions sur des groupes de personnes."
          ],
          steps: ["Pensez à vos cinq meilleurs clients.", "Écrivez ce qu'ils ont en commun.", "Écrivez trois phrases : qui, ce dont ils ont besoin, pourquoi vous.", "Demandez à l'IA des questions pour préciser."],
          words: [["Client idéal", "le type de client qui convient le mieux à votre entreprise."], ["Client fidèle", "quelqu'un qui achète chez vous plus d'une fois."]],
          slides: [
            { title: "Pas tout le monde", bullets: ["Pensez à vos meilleurs clients", "Qui revient, dépense bien, envoie des amis ?"] },
            { title: "Trois phrases", bullets: ["Qui ils sont", "Ce dont ils ont besoin", "Pourquoi ils vous choisissent"] },
            { title: "Exemple : restaurant le midi", bullets: ["Employés de bureau à moins de trois kilomètres", "Veulent un déjeuner copieux à moins de 15 $", "Nous choisissent pour les portions et le retrait rapide"] }
          ],
          tryIt: "Écrivez votre client idéal en trois phrases. Demandez à un assistant d'IA cinq questions pour le préciser, répondez-y, et réécrivez vos trois phrases.",
          youCanNow: "décrire en trois phrases claires le client que vous voulez le plus attirer."
        },
        {
          title: "Rédiger une offre qui a du sens",
          minutes: 5,
          goal: "Créer une offre claire et honnête avec un prix, une raison d'agir et une date de fin.",
          text: [
            "Une offre, c'est ce que vous vendez, à quel prix, et pourquoi acheter maintenant. Les bonnes offres sont simples : \"Formule déjeuner : riz, ragoût et boisson, 13 $, en semaine de 11 h à 14 h jusqu'au 30 juin.\"",
            "Demandez des idées à l'IA, puis choisissez : \"J'ai un service de nettoyage de voitures à domicile. Mon client idéal, ce sont les parents occupés. Donne-moi cinq idées d'offres pour le printemps qui préservent mon bénéfice.\" Vérifiez vous-même les calculs : une réduction qui fait perdre de l'argent à chaque vente n'est pas de la croissance.",
            "Restez honnête. Donnez le vrai prix, la vraie date de fin et les éventuelles limites. N'appelez pas \"promotion\" votre prix habituel."
          ],
          steps: ["Demandez à l'IA cinq idées d'offres pour votre client idéal.", "Choisissez-en une et calculez votre coût et votre bénéfice.", "Écrivez-la avec quoi, le prix, la raison d'agir et la date de fin.", "Vérifiez qu'elle est honnête et claire."],
          words: [["Offre", "ce que vous vendez, le prix et la raison d'acheter maintenant."], ["Bénéfice", "l'argent qui reste après avoir payé vos coûts."], ["Marge", "la part du prix qui est du bénéfice."]],
          slides: [
            { title: "Une offre claire contient", bullets: ["Ce que vous vendez", "Le prix", "Une raison d'agir et une date de fin"] },
            { title: "L'IA propose, vous choisissez", bullets: ["Demandez cinq idées pour votre client idéal", "Vérifiez les calculs : gardez un bénéfice"] },
            { title: "Restez honnête", bullets: ["Vrai prix, vraie date de fin, vraies limites", "Une \"promotion\" doit être sous votre prix habituel"] }
          ],
          tryIt: "Demandez à l'IA cinq idées d'offres pour votre client idéal. Choisissez-en une, calculez sur papier votre coût et votre bénéfice, et écrivez l'offre en une phrase avec une date de fin.",
          youCanNow: "rédiger une offre claire et honnête qui rapporte quand même un bénéfice."
        },
        {
          title: "Commencer une liste de clients simple",
          minutes: 5,
          goal: "Créer une liste de clients simple dans un tableur, avec l'autorisation de les contacter.",
          text: [
            "Votre liste de clients est votre outil de vente le plus précieux. Ce peut être un tableur avec des colonnes comme Prénom, Moyen de contact (e-mail ou téléphone), Accord pour les messages (oui/non et date), Dernière visite, Ce qu'il a acheté, et Notes.",
            "N'ajoutez que les personnes qui vous ont donné leurs coordonnées et ont accepté d'avoir de vos nouvelles : une feuille d'inscription au comptoir, un QR code vers un formulaire, ou une case à cocher dans votre outil de réservation. Notez quand et comment elles ont accepté.",
            "Gardez la liste privée et protégée : un mot de passe sur le fichier ou le compte, partagée seulement avec les employés qui en ont besoin. Ne collez pas la liste dans des outils d'IA. Si vous voulez l'aide de l'IA, décrivez les colonnes ou utilisez des lignes d'exemple inventées."
          ],
          steps: ["Créez un tableur avec les colonnes ci-dessus.", "Ajoutez un moyen d'inscription : feuille au comptoir, formulaire par QR code ou case dans l'outil de réservation.", "Notez quand et comment chaque personne a accepté.", "Protégez le fichier et gardez-le hors des outils d'IA."],
          words: [["Liste de clients", "un registre des clients qui ont accepté d'avoir de vos nouvelles."], ["Consentement (opt-in)", "le fait qu'une personne accepte de recevoir vos messages."], ["CRM", "gestion de la relation client : un logiciel ou un tableur pour suivre les clients."]],
          slides: [
            { title: "Votre outil de vente le plus précieux", bullets: ["Un simple tableur suffit", "Nom, contact, accord (date), dernière visite, notes"] },
            { title: "D'abord l'autorisation", bullets: ["Inscription au comptoir, formulaire QR ou case de réservation", "Notez quand et comment ils ont accepté"] },
            { title: "Gardez-la protégée", bullets: ["Mot de passe sur le fichier ou le compte", "Partagée seulement avec les employés concernés", "Ne collez jamais la liste dans l'IA"] }
          ],
          tryIt: "Créez votre tableur de liste de clients avec les six colonnes. Ajoutez trois lignes d'exemple inventées, puis écrivez comment les vrais clients s'inscriront (feuille au comptoir, formulaire QR ou case de réservation).",
          youCanNow: "mettre en place une liste de clients privée avec une trace de l'autorisation de les contacter."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Qui achète et ce que vous proposez",
        questions: [
          { q: "Qu'est-ce qu'un client idéal ?", options: ["N'importe qui avec de l'argent", "Le type de client qui convient le mieux à votre entreprise", "Seulement les gens qui se plaignent", "Les clients de votre concurrent"], answer: 1, why: "Il décrit qui vous voulez le plus attirer." },
          { q: "Laquelle est une offre claire ?", options: ["\"Super affaires !\"", "\"Des trucs pas chers\"", "\"Passez un de ces jours\"", "\"Formule déjeuner : riz, ragoût et boisson, 13 $, en semaine de 11 h à 14 h jusqu'au 30 juin\""], answer: 3, why: "Elle dit quoi, le prix, quand et la date de fin." },
          { q: "L'IA propose une réduction de 60 %. Que vérifiez-vous d'abord ?", options: ["Si vous faites encore un bénéfice", "Si ça sonne excitant", "Rien", "La police d'écriture"], answer: 0, why: "Une réduction qui fait perdre de l'argent n'est pas de la croissance." },
          { q: "Qui a sa place sur votre liste de clients ?", options: ["Toute personne dont vous trouvez le numéro", "Les clients des concurrents", "Les personnes qui ont accepté d'avoir de vos nouvelles", "Des numéros au hasard"], answer: 2, why: "L'autorisation passe en premier." },
          { q: "Vous voulez l'aide de l'IA pour organiser votre liste de clients. Que partagez-vous ?", options: ["La liste complète avec les numéros", "Les numéros de carte des clients", "Le nom des colonnes ou des lignes d'exemple inventées", "Le mot de passe de votre fichier"], answer: 2, why: "Les vraies données des clients restent hors des outils d'IA." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Relancer et grandir",
      lessons: [
        {
          title: "Écrire des relances qui respectent les règles",
          minutes: 6,
          goal: "Écrire une série de trois messages de suivi et faire respecter la loi CAN-SPAM à vos e-mails marketing.",
          text: [
            "La plupart des ventes viennent des relances. Une série simple : (1) un merci après une visite, (2) un rappel ou un conseil une semaine plus tard, (3) votre offre avec sa date de fin. Demandez à l'IA : \"Écris trois courts e-mails de suivi pour mon salon avec le ton de ma marque. Utilise [prénom].\"",
            "Aux États-Unis, les e-mails marketing doivent respecter la loi CAN-SPAM. Le guide de la FTC (l'autorité américaine de protection des consommateurs) dit : utilisez un expéditeur et un objet honnêtes, dites clairement que c'est une publicité, mettez une adresse postale valide, donnez un moyen clair de se désinscrire, et respectez les désinscriptions sous 10 jours ouvrables.",
            "Les SMS marketing ont leurs propres règles fédérales (la loi TCPA, appliquée par la FCC, l'autorité américaine des communications), et demandent en général l'autorisation claire du client. Avant d'envoyer des SMS marketing, vérifiez les règles sur fcc.gov ou demandez à un professionnel, et utilisez un outil d'envoi de SMS qui gère les désinscriptions."
          ],
          steps: ["Prévoyez trois messages : merci, rappel ou conseil, offre.", "Demandez à l'IA de les rédiger avec des espaces [prénom].", "Ajoutez votre adresse postale et une ligne de désinscription aux e-mails marketing.", "Respectez vite les désinscriptions.", "Vérifiez les règles sur les SMS avant d'envoyer des SMS marketing."],
          words: [["Série de suivi", "une suite prévue de messages envoyés après la visite ou l'inscription d'un client."], ["CAN-SPAM", "la loi américaine qui fixe les règles des e-mails commerciaux."], ["Désinscription", "un moyen pour les gens d'arrêter de recevoir vos messages."]],
          slides: [
            { title: "Une série de trois messages", bullets: ["1. Merci après la visite", "2. Rappel ou conseil une semaine plus tard", "3. Votre offre avec une date de fin"] },
            { title: "Bases de CAN-SPAM (FTC)", bullets: ["Expéditeur et objet honnêtes ; dire que c'est une publicité", "Une adresse postale valide", "Désinscription claire, respectée sous 10 jours ouvrables"] },
            { title: "SMS marketing", bullets: ["Règles fédérales à part (TCPA, FCC)", "Obtenez d'abord une autorisation claire", "Consultez fcc.gov ou un professionnel"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Demandez à l'IA de rédiger votre série de trois messages de suivi avec [prénom]. Ajoutez votre adresse postale et une ligne de désinscription à l'e-mail de l'offre.",
          youCanNow: "écrire une série de suivi et faire respecter les bases de CAN-SPAM à vos e-mails marketing."
        },
        {
          title: "Lire vos chiffres de ventes avec l'aide de l'IA",
          minutes: 5,
          goal: "Suivre quelques chiffres de ventes chaque semaine et utiliser l'IA pour repérer des tendances.",
          text: [
            "Vous n'avez besoin que de quelques chiffres : les ventes par jour, le nombre de clients, la vente moyenne (ventes divisées par le nombre de clients), vos articles les plus vendus, et le nombre de personnes qui ont utilisé votre offre.",
            "Gardez-les dans un tableur, par semaine. Laissez le tableur faire les calculs. Ensuite, vous pouvez coller les totaux de la semaine (sans noms de clients) dans un assistant d'IA et demander : \"Voici 6 semaines de chiffres pour ma boulangerie. Quelles tendances vois-tu ? Que devrais-je vérifier ?\"",
            "Prenez les idées de l'IA comme des questions, pas comme des réponses. Si elle dit \"Les samedis sont calmes\", regardez votre propre feuille pour le confirmer, et réfléchissez à la raison : la météo, un événement, un changement dans l'équipe."
          ],
          steps: ["Suivez chaque semaine les ventes, les clients, la vente moyenne, les meilleures ventes et l'usage de l'offre.", "Laissez les formules faire les totaux.", "Collez les totaux de la semaine (sans noms) dans l'IA et demandez les tendances.", "Confirmez chaque tendance dans votre feuille."],
          words: [["Vente moyenne", "le total des ventes divisé par le nombre de clients."], ["Tendance", "quelque chose qui se répète dans vos chiffres."]],
          slides: [
            { title: "Cinq chiffres à suivre", bullets: ["Ventes par jour et nombre de clients", "Vente moyenne", "Meilleures ventes et usage de l'offre"] },
            { title: "L'IA comme deuxième regard", bullets: ["Collez les totaux, pas les noms", "Demandez : \"Quelles tendances vois-tu ?\""] },
            { title: "Confirmez avant d'agir", bullets: ["Les idées de l'IA sont des questions", "Vérifiez dans votre propre feuille", "Demandez-vous pourquoi : météo, événements, équipe"] }
          ],
          tryIt: "Créez un tableau de suivi hebdomadaire avec les cinq chiffres. Remplissez des chiffres d'exemple ou réels sur quatre semaines et demandez à l'IA quelles tendances elle voit. Confirmez-en une dans votre feuille.",
          youCanNow: "suivre les chiffres de ventes clés et utiliser l'IA pour repérer des tendances que vous confirmez ensuite."
        },
        {
          title: "Votre plan de ventes sur 30 jours",
          minutes: 5,
          goal: "Rassembler votre client, votre offre, votre liste, vos relances et votre suivi dans un plan de 30 jours.",
          text: [
            "Un plan transforme les idées en actions. Semaine 1 : mettez en place votre liste de clients et l'inscription. Semaine 2 : lancez votre offre et envoyez le message de remerciement. Semaine 3 : envoyez le rappel et publiez l'offre. Semaine 4 : envoyez le dernier rappel avant la date de fin, puis regardez vos chiffres.",
            "Demandez à l'IA de transformer vos notes en calendrier avec des tâches pour chaque semaine. Restez réaliste par rapport à vos heures.",
            "À la fin, comparez vos chiffres avec ceux du mois précédent. Gardez ce qui a marché, abandonnez ce qui n'a pas marché, et préparez les 30 jours suivants."
          ],
          steps: ["Rassemblez votre client idéal, votre offre, la mise en place de la liste, les relances et le tableau de suivi.", "Demandez à l'IA un calendrier de tâches sur quatre semaines.", "Adaptez les tâches à vos vraies heures.", "Faites le bilan au jour 30."],
          words: [["Plan de ventes", "un plan écrit de ce que vous allez faire pour vendre plus, et quand."], ["Bilan", "le fait de regarder les résultats pour décider quoi garder ou changer."]],
          slides: [
            { title: "Quatre semaines", bullets: ["Semaine 1 : liste et inscription", "Semaine 2 : lancer l'offre, envoyer le merci", "Semaine 3 : rappel ; semaine 4 : dernier rappel et bilan"] },
            { title: "L'IA fait le calendrier", bullets: ["Collez vos notes", "Demandez des tâches par semaine", "Adaptez-le à vos heures"] },
            { title: "Jour 30", bullets: ["Comparez avec le mois précédent", "Gardez ce qui a marché", "Préparez les 30 jours suivants"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan de ventes de 30 jours sur une page avec le client idéal, l'offre, la liste, la série de trois messages et le tableau de suivi. Demandez à l'IA d'en faire un calendrier de tâches hebdomadaires.",
          youCanNow: "planifier, mener et faire le bilan d'une campagne de ventes de 30 jours pour votre entreprise."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Relancer et grandir",
        questions: [
          { q: "Qu'est-ce qui doit figurer dans chaque e-mail marketing aux États-Unis selon CAN-SPAM ?", options: ["Une adresse postale valide et un moyen de se désinscrire", "Le numéro de carte du client", "Un faux objet", "Aucun nom d'expéditeur"], answer: 0, why: "La FTC cite les deux comme obligatoires." },
          { q: "Selon le guide de la FTC, dans quel délai faut-il respecter une demande de désinscription ?", options: ["Seulement s'ils appellent", "Dans l'année", "Jamais", "Sous 10 jours ouvrables"], answer: 3, why: "La FTC dit sous 10 jours ouvrables." },
          { q: "Avant d'envoyer des SMS marketing, vous devez :", options: ["Écrire à tous les numéros que vous avez", "Obtenir une autorisation claire et vérifier les règles fédérales sur les SMS", "Acheter une liste", "Cacher le nom de votre entreprise"], answer: 1, why: "Les SMS marketing ont des règles fédérales à part et demandent une autorisation." },
          { q: "Comment calculer la vente moyenne ?", options: ["Les ventes divisées par le nombre de clients", "Les ventes multipliées par les clients", "Le bénéfice moins le loyer", "Les clients divisés par les jours"], answer: 0, why: "Vente moyenne = total des ventes / clients." },
          { q: "L'IA dit que vos mardis sont calmes. Que faites-vous ?", options: ["Fermer le mardi tout de suite", "Ignorer les chiffres", "Le confirmer dans vos propres chiffres et chercher pourquoi", "Demander à un concurrent"], answer: 2, why: "Les tendances de l'IA sont des questions à vérifier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les ventes et la croissance de l'entreprise",
    questions: [
      { q: "La description de votre client idéal doit être :", options: ["\"Tout le monde\"", "Précise : qui, ce dont ils ont besoin, pourquoi vous", "Fondée sur des suppositions sur des groupes", "Très longue"], answer: 1, why: "Des descriptions précises guident de meilleures offres." },
      { q: "D'où doit venir la description de votre client idéal ?", options: ["Seulement de l'IA", "De stéréotypes", "D'un site au hasard", "De ce que vous voyez chez vos vrais meilleurs clients"], answer: 3, why: "Utilisez de vraies observations, pas des suppositions." },
      { q: "Comment l'IA peut-elle aider à décrire votre client idéal ?", options: ["Elle ne peut pas aider", "En lisant votre compte bancaire", "En appelant les clients", "En vous posant des questions pour préciser"], answer: 3, why: "L'IA peut proposer des questions pour réfléchir." },
      { q: "Une offre claire contient :", options: ["Seulement une image", "Quoi, le prix, une raison d'agir et une date de fin", "Aucun prix", "Un code secret"], answer: 1, why: "Ces quatre parties la rendent claire." },
      { q: "Qu'est-ce que le bénéfice ?", options: ["Une réduction", "Tout l'argent qui entre", "L'argent qui reste après les coûts", "Un prêt"], answer: 2, why: "Le bénéfice, c'est les recettes moins les coûts." },
      { q: "Appeler \"promotion\" votre prix habituel, c'est :", options: ["Trompeur", "Malin", "Obligatoire", "Correct tous les jours"], answer: 0, why: "Les offres doivent être honnêtes." },
      { q: "Quelle colonne aide à prouver qu'un client a accepté les messages ?", options: ["Numéro de carte", "Couleur préférée", "Accord pour les messages (oui/non et date)", "Mot de passe"], answer: 2, why: "Garder une trace de l'autorisation compte." },
      { q: "Une bonne façon de recueillir des inscriptions est :", options: ["Un QR code vers un formulaire d'inscription", "Recopier les numéros des tickets sans demander", "Acheter une liste", "Deviner des adresses e-mail"], answer: 0, why: "Les gens choisissent de s'inscrire." },
      { q: "Votre liste de clients doit être :", options: ["Publiée en ligne", "Protégée et gardée hors des outils d'IA", "Partagée avec n'importe qui", "Collée dans les discussions"], answer: 1, why: "Les données des clients sont privées." },
      { q: "Une série de suivi simple commence par :", options: ["Rien", "Une vente agressive", "Une plainte", "Un merci après la visite"], answer: 3, why: "Commencer par un merci construit la relation." },
      { q: "Selon CAN-SPAM, un e-mail marketing doit :", options: ["Dire clairement que c'est une publicité", "Cacher l'expéditeur", "Utiliser un faux objet", "N'avoir aucune adresse"], answer: 0, why: "La FTC exige que les publicités soient identifiées." },
      { q: "Le guide sur CAN-SPAM est publié par quelle agence ?", options: ["L'IRS", "Le DMV", "La poste", "La FTC"], answer: 3, why: "C'est la FTC qui publie le guide de conformité." },
      { q: "Les SMS marketing relèvent de :", options: ["Seulement CAN-SPAM", "Aucune règle", "Règles fédérales à part (TCPA) appliquées par la FCC", "Seulement les règles de stationnement de l'État"], answer: 2, why: "Les SMS ont leurs propres règles." },
      { q: "Lequel fait partie des cinq chiffres à suivre ?", options: ["Votre chanson préférée", "La vente moyenne", "Le loyer d'un concurrent", "Votre mot de passe"], answer: 1, why: "La vente moyenne montre combien dépense chaque client." },
      { q: "Qu'est-ce qui doit faire les totaux dans votre feuille de suivi ?", options: ["Les clients", "Les suppositions de l'IA", "La mémoire", "Les formules du tableur"], answer: 3, why: "Les formules calculent de façon fiable." },
      { q: "Avant de coller des chiffres dans l'IA, retirez :", options: ["Les totaux", "Les dates des semaines", "Les noms des clients", "Les noms des articles"], answer: 2, why: "Les noms sont privés." },
      { q: "La semaine 1 du plan de 30 jours sert à :", options: ["Mettre en place la liste et l'inscription", "Fermer l'entreprise", "Augmenter tous les prix", "Licencier du personnel"], answer: 0, why: "La liste vient en premier." },
      { q: "Pourquoi adapter le plan à vos vraies heures ?", options: ["Pour le rendre plus long", "Pour pouvoir vraiment le faire", "Ça n'a pas d'importance", "Pour faire plaisir à l'IA"], answer: 1, why: "Les plans réalistes sont réalisés." },
      { q: "Au jour 30, vous devez :", options: ["Oublier les chiffres", "Comparer les résultats et garder ce qui a marché", "Tout recommencer à l'aveugle", "Supprimer la liste"], answer: 1, why: "Le bilan guide les 30 jours suivants." },
      { q: "Dans ce cours, qui fait vendre ?", options: ["Vous et vos relations avec les clients, avec l'IA comme aide", "L'IA seule", "Personne", "Un robot qui se fait passer pour vous"], answer: 0, why: "L'IA vous aide à écrire et à réfléchir ; c'est vous qui vendez." }
    ]
  }
};
