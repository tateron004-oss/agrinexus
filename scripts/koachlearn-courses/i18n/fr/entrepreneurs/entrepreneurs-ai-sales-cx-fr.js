"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-sales-cx.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-sales-cx-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "L'IA pour la vente et l'expérience client",
  skills: "Qualifier les prospects, Écrire des messages de prospection personnalisés, Préparer les entretiens de vente, Créer une FAQ client, Traiter les réclamations, Tirer des leçons des retours clients",
  outcome: "utiliser l'IA pour trouver et qualifier des prospects, écrire des messages de prospection personnalisés qui respectent les règles, préparer un entretien de vente, et créer une FAQ client et un guide de réponse aux réclamations qui gardent vos clients satisfaits.",
  about: [
    "La vente et le service client décident de la croissance d'une entreprise. Ce cours s'adresse aux patrons qui font eux-mêmes leurs ventes et leur service client et veulent faire les deux mieux et plus vite avec l'IA.",
    "Au chapitre 1, vous utiliserez l'IA pour décrire à qui vendre, trier les prospects, écrire des messages personnalisés (pas du spam) et préparer un appel de vente avec des réponses aux objections courantes. Au chapitre 2, vous créerez une FAQ client, apprendrez une façon calme de répondre aux réclamations et utiliserez l'IA pour trouver des tendances dans les retours clients.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche pour votre vraie entreprise. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin. Les règles américaines sur les appels, les SMS et les e-mails sont expliquées en mots simples ; ce n'est pas un conseil juridique. Hors des États-Unis, vérifiez aussi les règles de votre pays."
  ],
  finalTask: "Créez un kit de vente et de service pour votre entreprise : une courte liste de 10 prospects qualifiés avec une raison pour chacun, deux messages de prospection personnalisés, un guide d'appel d'une page avec des réponses à vos trois objections les plus courantes, une FAQ client de 10 questions et un modèle de réponse aux réclamations, le tout vérifié pour les faits et sans aucune donnée privée de client dans un outil d'IA.",
  chapters: [
    {
      name: "Chapitre 1 : Vendre avec l'IA",
      lessons: [
        {
          title: "Trouver et qualifier des prospects",
          minutes: 5,
          goal: "Faire une courte liste de prospects et décider lesquels ont le plus de chances d'acheter.",
          text: [
            "Un prospect est une personne ou une entreprise qui pourrait vous acheter quelque chose. Qualifier, c'est décider quels prospects méritent votre temps. Un test simple : ont-ils le problème que vous résolvez ? Peuvent-ils payer ? Peuvent-ils décider ? En ont-ils besoin bientôt ?",
            "L'IA peut vous aider à trouver où sont vos prospects (« Où les petites salles de sport de ma ville cherchent-elles des services de ménage ? ») et à noter une liste que vous avez déjà. Décrivez chaque prospect avec des mots généraux et demandez à l'IA de les classer selon les quatre questions.",
            "Utilisez des informations publiques sur les entreprises, pas des données personnelles privées. N'achetez pas de listes de contacts et ne récupérez pas automatiquement de données personnelles sur Internet ; elles sont souvent dépassées et peuvent enfreindre les règles de confidentialité et de marketing."
          ],
          steps: ["Notez qui étaient vos meilleurs clients passés.", "Demandez à l'IA où trouver des entreprises ou des personnes semblables.", "Listez 15 à 20 prospects possibles à partir de sources publiques et de votre propre réseau.", "Notez chacun sur le problème, l'argent, la décision et le moment.", "Gardez les 10 meilleurs avec une raison en une ligne pour chacun."],
          words: [["Prospect", "une personne ou une entreprise qui pourrait vous acheter quelque chose."], ["Qualifier", "décider si un prospect a des chances d'acheter et mérite votre temps."]],
          slides: [
            { title: "Un prospect pourrait acheter", bullets: ["Qualifier = mérite-t-il votre temps ?", "Problème, argent, décision, moment"] },
            { title: "Comment l'IA aide", bullets: ["Trouver où sont les prospects", "Classer votre liste selon les quatre questions"] },
            { title: "Restez propre", bullets: ["Utilisez des infos publiques sur les entreprises", "Pas de listes achetées ni de données personnelles aspirées"] }
          ],
          tryIt: "Listez 15 prospects possibles, notez-les sur le problème, l'argent, la décision et le moment avec l'aide de l'IA, et gardez vos 10 meilleurs avec une raison pour chacun.",
          youCanNow: "trouver des prospects et vous concentrer sur ceux qui ont le plus de chances d'acheter."
        },
        {
          title: "Écrire des messages personnalisés, pas du spam",
          minutes: 5,
          goal: "Écrire un premier message court et personnalisé qui respecte les règles américaines sur les e-mails, les appels et les SMS.",
          text: [
            "Une bonne prospection est courte et parle d'eux : ce que vous avez remarqué sur leur entreprise, le problème que vous pouvez les aider à régler, et une prochaine étape facile. Demandez à l'IA : « Écris un premier e-mail de 70 mots au patron d'une petite salle de sport. Mentionne que ses avis parlent de l'importance de vestiaires propres. Propose une visite gratuite de 15 minutes. Pas d'exagération. » Ajoutez ensuite un détail que vous seul connaissez.",
            "Pour les e-mails commerciaux, la loi américaine CAN-SPAM exige des lignes d'expéditeur et d'objet honnêtes, votre adresse postale et un moyen clair de se désabonner, et les désabonnements doivent être traités sous 10 jours ouvrables.",
            "Les appels et les SMS ont des règles plus strictes. Les SMS marketing et les appels automatisés demandent généralement d'abord l'accord de la personne, et en 2024 la FCC (le régulateur américain des télécommunications) a décidé que les voix générées par l'IA comptent comme des voix « artificielles » selon la loi TCPA. N'utilisez pas d'appels avec une voix d'IA ni de SMS en masse sans consentement, et consultez fcc.gov ou un avocat avant de commencer."
          ],
          steps: ["Notez un vrai détail sur le prospect à partir d'informations publiques.", "Demandez à l'IA un message court : sa situation, votre aide, une prochaine étape.", "Ajoutez un détail personnel et vérifiez chaque fait.", "Pour un e-mail, incluez votre adresse et une ligne de désabonnement.", "N'envoyez pas de SMS et ne faites pas d'appel avec une IA sans consentement."],
          words: [["Prospection", "contacter en premier un client possible."], ["Loi CAN-SPAM", "loi américaine qui fixe les règles des e-mails commerciaux."], ["TCPA", "Telephone Consumer Protection Act : loi américaine qui limite les appels et SMS marketing sans consentement."]],
          slides: [
            { title: "Court et centré sur eux", bullets: ["Ce que vous avez remarqué", "Le problème que vous résolvez", "Une prochaine étape facile"] },
            { title: "Règles des e-mails (CAN-SPAM)", bullets: ["Expéditeur et objet honnêtes", "Votre adresse postale", "Désabonnement traité sous 10 jours ouvrables"] },
            { title: "Appels et SMS", bullets: ["SMS marketing et appels automatisés : consentement en général", "Les voix d'IA sont des voix artificielles (FCC 2024)", "Consultez d'abord fcc.gov ou un avocat"] }
          ],
          sources: [{ name: "FTC : guide de conformité à la loi CAN-SPAM pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC : décision sur les voix générées par l'IA dans les appels automatisés (2024, en anglais)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Écrivez avec l'aide de l'IA deux e-mails de prospection personnalisés à des prospects de votre liste. Ajoutez un vrai détail à chacun, et vérifiez qu'ils contiennent votre adresse et une ligne de désabonnement.",
          youCanNow: "écrire des messages de prospection personnalisés qui respectent les règles sur les e-mails, les appels et les SMS."
        },
        {
          title: "Préparer un entretien de vente",
          minutes: 5,
          goal: "Faire un guide d'appel d'une page avec des questions et des réponses aux objections courantes.",
          text: [
            "Un entretien de vente, c'est surtout écouter. Préparez cinq bonnes questions sur la situation, le problème et les objectifs du client, puis expliquez comment vous aidez avec ses mots à lui.",
            "Les objections sont les raisons que les gens donnent pour ne pas acheter : « C'est trop cher. » « Je dois réfléchir. » « Nous avons déjà quelqu'un. » Demandez à l'IA : « Liste les cinq objections les plus courantes pour [service] et donne une réponse calme et honnête à chacune. » Retouchez-les pour qu'elles sonnent comme vous et soient vraies.",
            "Faites un jeu de rôle avec l'IA : « Fais comme si tu étais le patron pressé d'une salle de sport qui hésite à prendre un service de ménage. Pose-moi des questions difficiles. » Entraînez-vous jusqu'à pouvoir répondre sans lire."
          ],
          steps: ["Écrivez cinq questions ouvertes sur la situation et les objectifs du client.", "Demandez à l'IA les objections courantes et des réponses honnêtes.", "Retouchez les réponses pour qu'elles soient vraies et sonnent comme vous.", "Faites un jeu de rôle de l'entretien avec l'IA.", "Mettez le tout sur une page."],
          words: [["Objection", "une raison que donne un client pour ne pas encore acheter."], ["Jeu de rôle", "s'entraîner à une conversation en la jouant."], ["Question ouverte", "une question à laquelle on ne peut pas répondre seulement par oui ou par non."]],
          slides: [
            { title: "Surtout écouter", bullets: ["Cinq questions ouvertes", "Sa situation, son problème, ses objectifs", "Expliquez votre aide avec ses mots"] },
            { title: "Préparez les objections", bullets: ["« Trop cher »", "« Je dois réfléchir »", "« Nous avons déjà quelqu'un »"] },
            { title: "Entraînez-vous avec l'IA", bullets: ["Demandez à l'IA de jouer un client hésitant", "Répondez à voix haute", "Recommencez jusqu'à ce que ce soit naturel"] }
          ],
          tryIt: "Créez votre guide d'appel d'une page : cinq questions ouvertes et des réponses honnêtes à vos trois objections les plus courantes. Faites un jeu de rôle avec l'IA.",
          youCanNow: "préparer et répéter un entretien de vente avec l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Vendre avec l'IA",
        questions: [
          { q: "Quel prospect est le mieux qualifié ?", options: ["Quelqu'un qui n'a pas besoin de votre service", "Une entreprise qui a le problème, le budget, un décideur et un besoin proche", "Une adresse e-mail au hasard", "Un concurrent"], answer: 1, why: "Il remplit les quatre critères de qualification." },
          { q: "D'où doivent venir vos informations sur les prospects ?", options: ["Des dossiers privés des clients", "De données personnelles aspirées", "D'une liste d'inconnus achetée", "D'informations publiques sur les entreprises et de votre propre réseau"], answer: 3, why: "Les informations publiques évitent les problèmes de confidentialité et de marketing." },
          { q: "Un bon premier message de prospection est :", options: ["Court, centré sur eux, avec une prochaine étape facile", "Long et centré sur vous", "Copié tel quel à 1 000 personnes", "Plein d'affirmations « garanties »"], answer: 0, why: "Personnel et court, c'est ce qui obtient des réponses." },
          { q: "Pouvez-vous faire des appels automatisés avec une voix d'IA à des personnes qui n'ont jamais donné leur accord ?", options: ["Oui, le week-end", "Oui, les voix d'IA sont exemptées", "Non, les règles de consentement s'appliquent aussi aux voix d'IA", "Seulement aux entreprises d'autres États"], answer: 2, why: "La FCC traite les voix d'IA comme des voix artificielles selon la TCPA." },
          { q: "Un client dit « C'est trop cher. » Cela s'appelle :", options: ["Un déclencheur", "Un prospect", "Une objection", "Un remboursement"], answer: 2, why: "Les objections sont des raisons de ne pas encore acheter." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder les clients satisfaits",
      lessons: [
        {
          title: "Créer une FAQ client",
          minutes: 5,
          goal: "Créer une FAQ de 10 questions à partir des questions que les clients posent vraiment.",
          text: [
            "Les clients posent les mêmes questions encore et encore. Une page ou un document de questions fréquentes (FAQ) vous fait gagner du temps et aide les clients à décider plus vite.",
            "Rassemblez pendant deux semaines les vraies questions reçues par e-mail, message et téléphone (retirez les noms et les coordonnées). Demandez à l'IA de les regrouper et d'écrire des réponses claires et courtes en utilisant seulement les faits que vous lui donnez : prix, horaires, zone, règles.",
            "Vérifiez chaque réponse. Utilisez ensuite la FAQ sur votre site web, dans vos réponses enregistrées et comme base de faits pour tout chatbot. Si vous utilisez un chatbot, dites aux clients qu'il est automatisé et donnez-leur un moyen facile de joindre une personne."
          ],
          steps: ["Rassemblez les questions des clients pendant deux semaines, sans noms ni coordonnées.", "Demandez à l'IA de les regrouper et de choisir les 10 principales.", "Donnez à l'IA vos vrais faits et demandez des réponses courtes.", "Vérifiez chaque réponse.", "Publiez la FAQ et utilisez-la dans vos réponses."],
          words: [["FAQ", "foire aux questions : une liste de questions courantes avec leurs réponses."], ["Chatbot", "un programme automatisé qui répond aux messages des clients."]],
          slides: [
            { title: "Les mêmes questions chaque semaine", bullets: ["Une FAQ vous fait gagner du temps", "Elle aide les clients à décider plus vite"] },
            { title: "À partir de vraies questions", bullets: ["Rassemblez pendant deux semaines, sans noms", "L'IA les regroupe et rédige les réponses", "Seulement à partir des faits que vous donnez"] },
            { title: "Utilisez-la partout", bullets: ["Site web et réponses enregistrées", "Base de faits pour tout chatbot", "Dites quand c'est automatisé ; proposez une personne"] }
          ],
          tryIt: "Rassemblez au moins dix vraies questions de clients (sans noms), utilisez l'IA pour les regrouper et rédiger des réponses à partir de vos faits, vérifiez chacune et enregistrez votre FAQ.",
          youCanNow: "transformer de vraies questions de clients en FAQ vérifiée."
        },
        {
          title: "Répondre calmement aux réclamations",
          minutes: 5,
          goal: "Utiliser l'IA pour rédiger une réponse calme et juste à une réclamation, et décider comment réparer.",
          text: [
            "Une réclamation bien traitée peut vous gagner un client pour la vie. Un schéma simple : remerciez-le, excusez-vous pour ce qu'il a vécu, dites ce que vous allez faire et quand. Ne vous disputez pas en public ; proposez de continuer en privé.",
            "Quand vous êtes contrarié, l'IA vous aide à rester calme. Résumez la réclamation avec vos mots (sans noms ni numéros de commande) et demandez : « Rédige une réponse courte et calme qui le remercie, s'excuse, propose [solution] et l'invite à nous écrire en privé. »",
            "C'est vous qui décidez de la solution. Ne laissez pas l'IA promettre des remboursements ou des avoirs que vous n'avez pas acceptés, et n'utilisez pas l'IA pour écrire de faux avis positifs pour enterrer le mauvais ; la FTC (l'agence américaine de protection des consommateurs) interdit les faux avis, y compris ceux écrits par l'IA."
          ],
          steps: ["Lisez la réclamation et attendez quelques minutes avant de répondre.", "Décidez vous-même de la solution juste.", "Résumez la réclamation pour l'IA sans noms ni numéros de commande.", "Demandez une réponse calme : merci, excuses, solution, délai, passage en privé.", "Retouchez, vérifiez et envoyez."],
          words: [["Réclamation", "un client qui vous dit que quelque chose s'est mal passé."], ["Solution", "ce que vous allez faire pour réparer, comme refaire le travail ou rembourser."]],
          slides: [
            { title: "Un schéma de réponse", bullets: ["Remerciez-le", "Excusez-vous pour ce qu'il a vécu", "Dites ce que vous ferez et quand"] },
            { title: "L'IA vous aide à rester calme", bullets: ["Résumez sans noms ni numéros de commande", "Demandez un brouillon court et calme", "Passez la conversation en privé"] },
            { title: "Vous décidez", bullets: ["La solution est votre choix", "Pas de promesses non approuvées", "Jamais de faux avis pour enterrer un mauvais"] }
          ],
          sources: [{ name: "FTC : règle finale interdisant les faux avis et témoignages (communiqué, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Prenez une réclamation réelle ou inventée, décidez de la solution juste, et utilisez l'IA pour rédiger une réponse calme selon le schéma en quatre parties. Enregistrez-la comme modèle de réponse aux réclamations.",
          youCanNow: "répondre calmement et justement aux réclamations avec l'aide de l'IA, et décider vous-même de la solution."
        },
        {
          title: "Tirer des leçons des retours clients",
          minutes: 5,
          goal: "Utiliser l'IA pour trouver des tendances dans les avis et les retours, et choisir une amélioration.",
          text: [
            "Les avis, les réponses aux enquêtes et les messages vous disent quoi corriger et quoi garder. En les lisant un par un, vous manquez les tendances. L'IA est douée pour regrouper.",
            "Copiez 20 à 50 avis ou commentaires (retirez les noms) et demandez : « Regroupe ces retours par thèmes. Pour chaque thème, dis combien de commentaires en parlent et donne un exemple. Liste les trois choses que les clients aiment le plus et les trois principaux problèmes. »",
            "Vérifiez les chiffres en parcourant vous-même les retours, car l'IA peut mal compter. Choisissez ensuite un problème à régler ce mois-ci, réglez-le, et dites aux clients que vous les avez écoutés."
          ],
          steps: ["Rassemblez 20 à 50 avis ou commentaires et retirez les noms.", "Demandez à l'IA de les regrouper par thèmes avec des chiffres et des exemples.", "Parcourez-les pour vérifier les thèmes et les chiffres.", "Choisissez un problème à régler ce mois-ci.", "Dites aux clients ce que vous avez changé."],
          words: [["Thème", "un sujet qui revient souvent dans les retours."], ["Enquête", "une courte série de questions que vous posez aux clients."]],
          slides: [
            { title: "Les retours montrent la voie", bullets: ["Avis, enquêtes, messages", "Un par un, on manque les tendances"] },
            { title: "L'IA les regroupe", bullets: ["Retirez d'abord les noms", "Thèmes, chiffres et exemples", "Trois points forts et trois problèmes"] },
            { title: "Agissez", bullets: ["Vérifiez vous-même les chiffres", "Réglez un problème ce mois-ci", "Dites aux clients que vous avez écouté"] }
          ],
          tryIt: "Tâche finale : analysez au moins 20 retours avec l'IA, choisissez une amélioration, puis rassemblez votre kit de vente et de service : 10 prospects qualifiés, deux messages de prospection, le guide d'appel, la FAQ et le modèle de réponse aux réclamations.",
          youCanNow: "utiliser l'IA dans la vente et le service : trouver des prospects, les contacter correctement, vous préparer, répondre aux clients et vous améliorer sans cesse."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder les clients satisfaits",
        questions: [
          { q: "D'où doivent venir les questions de la FAQ ?", options: ["Des vraies questions que posent les clients", "De questions inventées par l'IA", "Du site d'un concurrent", "De suppositions au hasard"], answer: 0, why: "De vraies questions font une FAQ utile." },
          { q: "Si vous utilisez un chatbot, vous devez :", options: ["Cacher vos coordonnées", "Faire croire que c'est une personne", "Le laisser promettre des remboursements", "Dire aux clients qu'il est automatisé et proposer un moyen de joindre une personne"], answer: 3, why: "L'honnêteté et un accès facile à une personne gardent la confiance." },
          { q: "Qui décide de la solution à une réclamation ?", options: ["L'IA", "Vous", "Les amis du client", "Personne"], answer: 1, why: "L'IA rédige les mots ; vous décidez de la solution." },
          { q: "Un mauvais avis apparaît. Quelle réaction est illégale selon les règles de la FTC ?", options: ["Publier de faux avis positifs pour l'enterrer", "Répondre calmement", "Régler le problème", "Inviter le client à en parler en privé"], answer: 0, why: "La FTC interdit les faux avis, y compris ceux écrits par l'IA." },
          { q: "L'IA dit que 30 commentaires parlent de livraisons lentes. Que devez-vous faire ?", options: ["Supprimer les commentaires", "Lui faire entièrement confiance", "Parcourir les commentaires pour vérifier vous-même le chiffre", "L'ignorer"], answer: 2, why: "L'IA peut mal compter ; vérifiez avant d'agir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la vente et l'expérience client",
    questions: [
      { q: "Un prospect, c'est :", options: ["Un client qui a payé", "Une personne ou une entreprise qui pourrait vous acheter quelque chose", "Une réclamation", "Un produit"], answer: 1, why: "C'est la définition." },
      { q: "Les quatre questions de qualification portent sur :", options: ["Le logo, la police, le site web et l'application", "La couleur, la taille, le poids et la forme", "Le nom, l'âge, l'adresse et le téléphone", "Le problème, l'argent, la décision et le moment"], answer: 3, why: "Elles montrent qui a des chances d'acheter." },
      { q: "Quelle source de prospects peut-on utiliser ?", options: ["Le fichier clients d'un concurrent", "Une liste achetée de numéros de téléphone personnels", "Des données privées aspirées", "Des annuaires publics d'entreprises"], answer: 3, why: "Les informations publiques sur les entreprises évitent les problèmes de confidentialité." },
      { q: "Un bon message de prospection mentionne :", options: ["Seulement vos récompenses", "Quelque chose de vrai que vous avez remarqué sur eux", "Une fausse date limite", "Leur adresse personnelle"], answer: 1, why: "Les détails personnels montrent que vous vous êtes renseigné." },
      { q: "CAN-SPAM exige que les e-mails commerciaux contiennent :", options: ["Une remise", "Vos coordonnées bancaires", "Un moyen de se désabonner", "Une photo"], answer: 2, why: "Le désabonnement fait partie des exigences de base." },
      { q: "Les demandes de désabonnement doivent être traitées sous :", options: ["10 jours ouvrables", "1 an", "1 heure", "Jamais"], answer: 0, why: "Le guide de la FTC dit 10 jours ouvrables." },
      { q: "Selon la décision de la FCC de 2024, les voix générées par l'IA dans les appels sont traitées comme :", options: ["Exemptées de toutes les règles", "Des voix humaines", "Des voix artificielles selon la TCPA", "Des e-mails"], answer: 2, why: "Les règles de consentement s'appliquent donc." },
      { q: "Avant d'envoyer des SMS marketing, vous devez :", options: ["Avoir le consentement de la personne et vérifier les règles", "Écrire à tous les contacts de votre téléphone", "Utiliser une voix d'IA à la place", "Cacher le nom de votre entreprise"], answer: 0, why: "Les SMS marketing demandent généralement un consentement." },
      { q: "Un entretien de vente doit être surtout :", options: ["Parler de vous", "Écouter", "Lire un texte à toute vitesse", "Des remises"], answer: 1, why: "Écouter vous dit ce dont le client a besoin." },
      { q: "Une question ouverte est une question :", options: ["Sans réponse", "Impolie", "Seulement sur le prix", "À laquelle on ne peut pas répondre seulement par oui ou par non"], answer: 3, why: "Les questions ouvertes font parler les clients." },
      { q: "Le jeu de rôle avec l'IA vous aide à :", options: ["Vous entraîner à répondre à des questions difficiles", "Signer des contrats", "Ne pas vous préparer", "Écrire de faux avis"], answer: 0, why: "L'entraînement donne confiance." },
      { q: "Quand l'IA écrit des réponses aux objections, vous devez :", options: ["Ne jamais les utiliser", "Les lire mot pour mot", "Ajouter de fausses garanties", "Les retoucher pour qu'elles soient vraies et sonnent comme vous"], answer: 3, why: "Des réponses honnêtes avec votre voix créent la confiance." },
      { q: "Une FAQ aide parce que :", options: ["Elle cache les prix", "Elle remplace tout contact avec les clients", "Elle répond vite aux questions courantes", "Elle est exigée par la loi"], answer: 2, why: "Elle fait gagner du temps à vous et aux clients." },
      { q: "Avant de donner les questions des clients à l'IA, vous devez :", options: ["Ajouter leurs numéros de carte", "Retirer les noms et les coordonnées", "Demander leurs mots de passe", "Les publier"], answer: 1, why: "Gardez les données privées hors des outils d'IA." },
      { q: "Les réponses de la FAQ doivent reposer sur :", options: ["De vieilles rumeurs", "Ce que l'IA devine", "Les prix d'un concurrent", "Les faits que vous donnez à l'IA"], answer: 3, why: "L'IA peut inventer des faits si vous ne les donnez pas." },
      { q: "La réponse aux réclamations en quatre parties, c'est :", options: ["Remise, remise, remise, remise", "Nier, se disputer, bloquer, supprimer", "Merci, excuses, la solution, le délai", "L'ignorer"], answer: 2, why: "Elle est calme, juste et claire." },
      { q: "Quand une réclamation est publique, une bonne réaction est de :", options: ["Répondre calmement et proposer de continuer en privé", "Se disputer dans les commentaires", "Publier les coordonnées du client", "Supprimer votre compte"], answer: 0, why: "Passer en privé évite une dispute publique." },
      { q: "L'IA peut-elle promettre un remboursement dans votre réponse sans votre accord ?", options: ["Oui, toujours", "Non, c'est vous qui décidez de la solution", "Seulement le week-end", "Seulement pour les grosses commandes"], answer: 1, why: "Les décisions d'argent vous reviennent." },
      { q: "Un thème dans les retours, c'est :", options: ["Le design d'un site web", "Un sujet qui revient souvent", "Un seul avis", "Une police"], answer: 1, why: "Les thèmes montrent les tendances." },
      { q: "Après avoir trouvé le principal problème dans les retours, vous devez :", options: ["Le régler et dire aux clients que vous les avez écoutés", "L'ignorer", "Cacher les avis", "Acheter de nouveaux avis"], answer: 0, why: "Agir sur les retours crée la fidélité." }
    ]
  }
};
