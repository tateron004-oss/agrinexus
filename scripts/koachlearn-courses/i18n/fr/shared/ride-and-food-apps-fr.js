"use strict";

// Koach Learn course, French translation of shared/ride-and-food-apps.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// The English course is about US apps and Uber's US terms; those facts are kept as US facts. 911 is the US emergency number.

module.exports = {
  id: "ride-and-food-apps-fr",
  lang: "fr",
  translationOf: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Commander un trajet ou un repas avec une appli (Uber, Lyft, DoorDash)",
  skills: "Préparer une appli de trajets ou de livraison, Demander un trajet, Vérifier que c'est la bonne voiture, Commander un repas ou des courses en livraison, Vérifier les prix, les pourboires et les reçus",
  outcome: "préparer une application de trajets ou de livraison, voir le prix avant de réserver, demander un trajet et vérifier que c'est la bonne voiture avant de monter, vous faire livrer un repas ou des courses, et vérifier le reçu ensuite.",
  about: [
    "Les applications de trajets comme Uber et Lyft vous envoient un chauffeur qui vient vous chercher. Les applications de livraison comme DoorDash, Uber Eats et Instacart apportent des repas ou des courses à votre porte. Elles aident quand vous ne conduisez pas, ne pouvez pas aller au magasin, ou avez besoin d'aller chez le médecin ou à un entretien d'embauche.",
    "Ce cours vous montre comment préparer les applications, voir le prix avant d'accepter, monter dans la bonne voiture en sécurité, commander un repas et vérifier ce que vous avez payé.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les menus des applications changent souvent, donc nous décrivons quoi faire plutôt que le nom de chaque bouton. Les exemples viennent des États-Unis ; d'autres pays ont d'autres applications, mais les gestes de sécurité sont les mêmes."
  ],
  finalTask: "Dans une application de trajets, entrez un vrai point de départ et une destination (par exemple de chez vous à un centre de santé ou une bibliothèque), lisez le prix et l'heure d'arrivée, et trouvez les outils de sécurité (partager votre trajet, le bouton d'urgence, le code PIN du trajet) sans réserver sauf si vous avez besoin du trajet. Puis, dans une application de livraison, préparez une petite commande, vérifiez le total des articles, les frais, le pourboire et l'adresse de livraison sur l'écran de paiement, et expliquez ce que veut dire chaque ligne.",
  chapters: [
    {
      name: "Chapitre 1 : Prendre un trajet",
      lessons: [
        {
          title: "Préparer une application de trajets",
          minutes: 5,
          goal: "Installer une application de trajets, créer un compte et ajouter un moyen de paiement en sécurité.",
          text: [
            "Uber et Lyft sont les applications de trajets les plus connues aux États-Unis. Un chauffeur utilise sa propre voiture pour vous emmener où vous voulez, et vous payez par l'application.",
            "Installez l'application seulement depuis le magasin d'applications officiel (Google Play ou l'App Store) et vérifiez que le développeur est bien Uber ou Lyft. Inscrivez-vous avec votre numéro de téléphone et votre e-mail. Les conditions d'Uber aux États-Unis disent qu'il faut avoir 18 ans ou plus pour avoir son propre compte ; les adolescents de 13 à 17 ans ne peuvent voyager qu'avec un compte ado créé par un parent ou un tuteur. Vérifiez les conditions de l'application pour les règles actuelles.",
            "Ajoutez un moyen de paiement dans l'application, comme une carte de débit ou de crédit. Tapez-le seulement dans l'application, jamais dans un SMS ou un e-mail. Enregistrez votre domicile comme lieu favori pour le choisir vite plus tard."
          ],
          steps: ["Ouvrez le magasin d'applications officiel et cherchez Uber ou Lyft.", "Vérifiez le nom du développeur, puis installez.", "Inscrivez-vous avec votre numéro de téléphone et votre e-mail.", "Ajoutez un moyen de paiement dans la partie paiement ou portefeuille de l'application.", "Enregistrez votre adresse comme lieu favori."],
          words: [["Application de trajets", "une application qui envoie un chauffeur dans sa propre voiture pour venir vous chercher."], ["Moyen de paiement", "la carte ou le compte que l'application débite."], ["Lieu favori", "une adresse que l'application retient, comme votre domicile."]],
          slides: [
            { title: "Ce que font les applis de trajets", bullets: ["Un chauffeur vient vous chercher dans sa voiture", "Vous payez par l'application", "Les plus connues aux États-Unis : Uber et Lyft"] },
            { title: "Préparez-la en sécurité", bullets: ["Seulement le magasin d'applications officiel", "Vérifiez le nom du développeur", "Uber : 18 ans et plus pour son compte ; comptes ado 13-17 ans"] },
            { title: "Ajoutez le paiement", bullets: ["Seulement dans l'application", "Jamais par SMS ou e-mail", "Enregistrez votre adresse"] }
          ],
          sources: [{ name: "Uber : conditions d'utilisation aux États-Unis (âge et comptes ado)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Installez Uber ou Lyft depuis le magasin d'applications officiel, créez votre compte et enregistrez votre adresse. Vous pouvez attendre d'avoir besoin d'un trajet pour ajouter une carte.",
          youCanNow: "installer une application de trajets en sécurité, créer un compte et enregistrer votre adresse."
        },
        {
          title: "Demander un trajet et voir le prix d'abord",
          minutes: 5,
          goal: "Entrer un point de départ et une destination et lire le prix avant de confirmer.",
          text: [
            "Ouvrez l'application et tapez où vous voulez aller dans la case « Où allez-vous ? ». Vérifiez le point de prise en charge : l'application utilise votre position, mais vous pouvez déplacer le repère ou taper l'adresse pour que le chauffeur vous trouve.",
            "L'application montre des choix de trajets, des trajets partagés ou standard moins chers aux voitures plus grandes ou plus confortables, chacun avec un prix et une heure d'arrivée. Le prix peut être plus élevé aux heures chargées, comme les heures de pointe ou après un grand événement.",
            "Choisissez le trajet, vérifiez le prix et le moyen de paiement, et confirmez. L'application montre alors le nom et la photo du chauffeur, la voiture et la plaque d'immatriculation, et une carte avec la voiture qui arrive."
          ],
          steps: ["Tapez votre destination dans la case « Où allez-vous ? ».", "Vérifiez le point de prise en charge ; déplacez le repère si besoin.", "Comparez les choix de trajets : prix et heure d'arrivée.", "Vérifiez le moyen de paiement.", "Confirmez seulement si le prix vous convient.", "Suivez votre voiture sur la carte."],
          words: [["Point de prise en charge", "l'endroit où le chauffeur vous retrouve."], ["Destination", "l'endroit où vous voulez aller."], ["Prix aux heures chargées", "des prix plus élevés quand beaucoup de gens veulent un trajet en même temps."]],
          slides: [
            { title: "Où allez-vous ?", bullets: ["Tapez votre destination", "Vérifiez le point de prise en charge sur la carte"] },
            { title: "Voyez le prix d'abord", bullets: ["Chaque choix de trajet montre un prix et une heure", "Les prix peuvent monter aux heures chargées"] },
            { title: "Confirmez", bullets: ["Vérifiez le prix et le paiement", "Puis voyez le chauffeur, la voiture et la plaque"] }
          ],
          tryIt: "Ouvrez l'application de trajets et tapez une vraie destination, comme un centre de santé, une bibliothèque ou une agence pour l'emploi. Lisez deux choix de trajets et leurs prix. Fermez l'application sans réserver sauf si vous avez besoin du trajet.",
          youCanNow: "demander un trajet et lire le prix et l'heure d'arrivée avant d'accepter."
        },
        {
          title: "Monter dans la bonne voiture, en sécurité",
          minutes: 5,
          goal: "Vérifier la voiture, la plaque et le chauffeur avant de monter, et utiliser les outils de sécurité.",
          text: [
            "Avant de monter, comparez trois choses avec l'application : la plaque d'immatriculation, la marque et la couleur de la voiture, et le nom et la photo du chauffeur. Demandez « Vous venez chercher qui ? » et laissez le chauffeur dire votre nom. Si quelque chose ne correspond pas, ne montez pas.",
            "Uber propose un code PIN facultatif à quatre chiffres : vous dites le code au chauffeur, et le trajet ne peut commencer qu'avec le bon code. La fonction Share My Trip (partager mon trajet) d'Uber permet à des proches de confiance de suivre votre trajet en direct, et son bouton d'urgence dans l'application contacte le 911 (le numéro d'urgence américain) en donnant votre position et les détails de la voiture. Lyft a ses propres outils de sécurité ; trouvez-les sur sa page sécurité ou dans l'application.",
            "Attendez à l'intérieur jusqu'à ce que l'application montre que la voiture est arrivée, et ne montez jamais dans une voiture qui vous propose un trajet sans réservation dans l'application."
          ],
          steps: ["Attendez à l'intérieur jusqu'à ce que l'application dise que la voiture est là.", "Vérifiez la plaque, la voiture et la photo du chauffeur.", "Demandez « Vous venez chercher qui ? »", "Utilisez le code PIN si vous l'avez activé.", "Partagez votre trajet avec un proche ou un ami.", "Sachez où est le bouton d'urgence."],
          words: [["Plaque d'immatriculation", "la plaque avec le numéro de la voiture ; vérifiez qu'elle correspond à l'application."], ["Share My Trip", "l'outil d'Uber qui permet aux personnes choisies de suivre votre trajet en direct."], ["Code PIN", "un court code en chiffres que vous dites au chauffeur pour commencer le trajet."]],
          slides: [
            { title: "Vérifiez avant de monter", bullets: ["La plaque d'immatriculation", "La marque et la couleur de la voiture", "Le nom et la photo du chauffeur"] },
            { title: "Demandez, ne dites pas", bullets: ["« Vous venez chercher qui ? »", "Laissez le chauffeur dire votre nom", "Ça ne correspond pas ? Ne montez pas"] },
            { title: "Outils de sécurité (Uber)", bullets: ["Code PIN de trajet facultatif à quatre chiffres", "Share My Trip avec des contacts de confiance", "Le bouton d'urgence contacte le 911"] },
            { title: "Lyft et les autres", bullets: ["Ont leurs propres outils de sécurité", "Trouvez-les dans l'appli ou sur la page sécurité"] }
          ],
          sources: [{ name: "Uber : la sécurité des passagers", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Ouvrez la partie sécurité de votre application de trajets. Trouvez comment partager un trajet et où est le bouton d'urgence. Si votre application a un code PIN de trajet, activez-le.",
          youCanNow: "vérifier que vous avez la bonne voiture et le bon chauffeur, et utiliser les outils de sécurité de l'application."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Prendre un trajet",
        questions: [
          { q: "Où devez-vous obtenir l'application Uber ou Lyft ?", options: ["Par un lien reçu par SMS", "Sur n'importe quel site", "Dans le magasin d'applications officiel", "Par une fenêtre publicitaire"], answer: 2, why: "Les magasins officiels ont les vraies applications." },
          { q: "Quand pouvez-vous voir le prix d'un trajet ?", options: ["Avant de confirmer le trajet", "Seulement après le trajet", "Seulement sur votre relevé bancaire", "Jamais"], answer: 0, why: "L'application montre le prix de chaque choix avant que vous acceptiez." },
          { q: "Pourquoi un trajet peut-il coûter plus cher un vendredi soir ?", options: ["L'application est en panne", "Le prix monte aux heures chargées quand beaucoup de gens veulent un trajet", "Votre téléphone est vieux", "Les trajets sont gratuits le vendredi"], answer: 1, why: "Les prix peuvent monter quand la demande est forte." },
          { q: "Une voiture s'arrête mais la plaque ne correspond pas à l'application. Que faites-vous ?", options: ["Monter quand même", "Monter et demander plus tard", "Payer le chauffeur en liquide", "Ne pas monter"], answer: 3, why: "Si ça ne correspond pas, ce n'est peut-être pas votre trajet." },
          { q: "Quelle est la façon la plus sûre de vérifier le chauffeur ?", options: ["Dire « Vous êtes là pour Maria ? »", "Demander « Vous venez chercher qui ? »", "Lui montrer votre pièce d'identité", "Lui dire d'abord votre code PIN"], answer: 1, why: "Laisser le chauffeur dire votre nom prouve que c'est votre chauffeur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Commander des repas et des courses",
      lessons: [
        {
          title: "Commander un repas ou des courses en livraison",
          minutes: 5,
          goal: "Trouver un restaurant ou un magasin dans une application de livraison et préparer une commande.",
          text: [
            "Les applications de livraison comme DoorDash, Uber Eats et Instacart permettent de commander dans les restaurants et magasins de votre quartier. Un livreur, parfois appelé Dasher ou shopper, prend votre commande et vous l'apporte.",
            "Installez l'application depuis le magasin officiel et entrez votre adresse de livraison avec soin, avec le numéro d'appartement ou le code du portail et des notes pour le livreur, comme « porte bleue, sonnez ».",
            "Parcourez ou cherchez un restaurant ou un magasin, touchez les articles pour les ajouter à votre panier, et choisissez les options comme la taille. Pour les courses, vous pouvez en général choisir ce que doit faire le livreur si un article manque : le remplacer par un article semblable, ou vous le rembourser."
          ],
          steps: ["Installez l'application de livraison depuis le magasin officiel.", "Entrez votre adresse complète et des notes pour le livreur.", "Cherchez un restaurant ou un magasin.", "Touchez les articles pour les ajouter à votre panier.", "Pour les courses, choisissez quoi faire si un article manque."],
          words: [["Application de livraison", "une application qui apporte à votre porte des repas ou des produits de commerces locaux."], ["Panier", "la liste des articles que vous comptez acheter."], ["Remplacement", "un article semblable choisi par le livreur quand le vôtre manque."]],
          slides: [
            { title: "Les applications de livraison", bullets: ["DoorDash, Uber Eats, Instacart et d'autres", "Un livreur vous apporte votre commande"] },
            { title: "Votre adresse", bullets: ["Adresse complète avec appartement ou code du portail", "Des notes comme « porte bleue, sonnez »"] },
            { title: "Préparer une commande", bullets: ["Cherchez un restaurant ou un magasin", "Ajoutez des articles au panier", "Choisissez quoi faire si un article manque"] }
          ],
          tryIt: "Ouvrez une application de livraison (installez-la depuis le magasin officiel si besoin). Entrez votre adresse avec une note pour le livreur, puis ajoutez deux articles à un panier. Ne passez pas encore la commande.",
          youCanNow: "trouver un restaurant ou un magasin dans une application de livraison et préparer une commande pour votre adresse."
        },
        {
          title: "Comprendre le paiement : frais, pourboire et total",
          minutes: 5,
          goal: "Lire l'écran de paiement et savoir ce qu'est chaque montant avant de payer.",
          text: [
            "Le prix sur la carte n'est pas tout le coût. L'écran de paiement montre le total des articles plus des frais en plus, qui peuvent inclure des frais de livraison, des frais de service, parfois des frais pour petite commande, les taxes, et un pourboire pour le livreur.",
            "Les frais changent selon l'application, l'heure, la distance et la ville, et certaines applications proposent des abonnements payants qui baissent les frais. Alors lisez toujours l'écran de paiement et regardez le total avant de toucher Passer la commande.",
            "Le pourboire va au livreur. Vous choisissez le montant, et beaucoup d'applications permettent de le changer après la livraison. Si le total dépasse ce que vous aviez prévu, enlevez un article ou choisissez le retrait sur place au lieu de la livraison si l'application le propose."
          ],
          steps: ["Ouvrez votre panier et allez au paiement.", "Lisez chaque ligne : articles, frais de livraison, frais de service, taxes, pourboire.", "Vérifiez l'adresse de livraison et le moyen de paiement.", "Regardez le total.", "Modifiez la commande ou le pourboire si besoin, puis touchez Passer la commande."],
          words: [["Frais de livraison", "un montant pour vous apporter la commande."], ["Frais de service", "un montant que l'application ajoute pour l'utilisation de son service."], ["Pourboire", "l'argent que vous choisissez de donner au livreur."]],
          slides: [
            { title: "Le prix de la carte n'est pas le total", bullets: ["Total des articles", "Frais de livraison et frais de service", "Taxes et pourboire"] },
            { title: "Les frais changent", bullets: ["Selon l'appli, l'heure, la distance et la ville", "Lisez toujours l'écran de paiement"] },
            { title: "Avant de toucher Passer la commande", bullets: ["Vérifiez l'adresse et le paiement", "Regardez le total", "Trop cher ? Enlevez un article ou choisissez le retrait"] }
          ],
          tryIt: "Emmenez le panier de la leçon précédente jusqu'à l'écran de paiement. Notez le total des articles, chaque frais, le pourboire et le total final. Puis décidez de passer la commande ou de fermer l'application.",
          youCanNow: "lire l'écran de paiement d'une livraison et connaître le coût total avant de payer."
        },
        {
          title: "Reçus, problèmes et sécurité",
          minutes: 4,
          goal: "Vérifier un reçu, obtenir de l'aide pour une commande erronée et éviter les arnaques liées aux applications.",
          text: [
            "Après un trajet ou une livraison, l'application envoie un reçu sur votre e-mail et le garde dans l'application, dans vos trajets ou vos commandes. Vérifiez que le montant correspond à ce que vous aviez accepté.",
            "Si quelque chose ne va pas, comme un article manquant, un repas froid ou un mauvais montant, utilisez la partie Aide ou Assistance dans l'application et choisissez la commande. Signalez les problèmes peu après qu'ils arrivent.",
            "Les escrocs se font passer pour l'assistance des applications. La vraie aide est dans l'application. N'appelez pas un numéro d'assistance trouvé dans une publicité de recherche, et ne donnez jamais votre mot de passe ni un code reçu sur votre téléphone à quelqu'un qui vous appelle ou vous écrit. Payez seulement dans l'application, jamais en liquide ou en cartes cadeaux à quelqu'un qui le demande."
          ],
          steps: ["Ouvrez vos trajets ou vos commandes dans l'application.", "Vérifiez que le reçu correspond à ce que vous aviez accepté.", "En cas de problème, allez dans Aide dans l'application et choisissez la commande.", "Ne donnez jamais un mot de passe ou un code de téléphone à un appelant.", "Payez seulement dans l'application."],
          words: [["Reçu", "une preuve de ce que vous avez payé et pour quoi."], ["Assistance", "la partie aide de l'application pour les problèmes."]],
          slides: [
            { title: "Vérifiez le reçu", bullets: ["Dans votre e-mail et dans l'application", "Correspond-il à ce que vous aviez accepté ?"] },
            { title: "Un problème ?", bullets: ["Aide ou Assistance dans l'application", "Choisissez la commande", "Signalez-le vite"] },
            { title: "Évitez les fausses assistances", bullets: ["La vraie aide est dans l'application", "Jamais de mot de passe ni de code de téléphone", "Payez seulement dans l'application"] }
          ],
          tryIt: "Entraînement pour la tâche finale : ouvrez la partie trajets ou commandes de votre application et trouvez l'espace Aide. Puis faites la tâche finale : obtenez le prix d'un trajet et trouvez les outils de sécurité, et lisez un écran de paiement de livraison complet.",
          youCanNow: "vérifier un reçu, obtenir de l'aide dans l'application en cas de problème et éviter les arnaques à la fausse assistance."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Commander des repas et des courses",
        questions: [
          { q: "Pourquoi ajouter une note comme « porte bleue, sonnez » à votre adresse ?", options: ["Cela baisse le prix", "Cela aide le livreur à vous trouver", "C'est obligatoire par la loi", "Cela cache votre adresse"], answer: 1, why: "Des notes claires aident le livreur à trouver la bonne porte." },
          { q: "Qu'est-ce qu'un remplacement dans une commande de courses ?", options: ["Un article semblable quand le vôtre manque", "Un bon de réduction", "Des frais de livraison", "Un pourboire"], answer: 0, why: "Le livreur peut remplacer un article manquant par un article semblable." },
          { q: "Quel écran montre le coût total d'une commande en livraison ?", options: ["La carte du restaurant", "L'écran d'accueil", "L'écran de paiement", "Le magasin d'applications"], answer: 2, why: "Le paiement liste les articles, les frais, les taxes, le pourboire et le total." },
          { q: "Votre repas arrive avec un article manquant. Que faites-vous ?", options: ["Appeler un numéro trouvé dans une publicité de recherche", "Publier votre mot de passe", "Laisser tomber", "Utiliser l'Aide dans l'application et choisir la commande"], answer: 3, why: "La vraie assistance est dans l'application." },
          { q: "Quelqu'un vous écrit en disant qu'il est de l'assistance DoorDash et qu'il a besoin du code envoyé sur votre téléphone. Que faites-vous ?", options: ["Ne pas le donner ; la vraie aide est dans l'application", "Envoyer le code", "Envoyer votre mot de passe", "Lui payer une carte cadeau"], answer: 0, why: "Ne donnez jamais un code de téléphone à quelqu'un qui vous contacte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Commander un trajet ou un repas avec une appli (Uber, Lyft, DoorDash)",
    questions: [
      { q: "Que fait une application de trajets comme Uber ou Lyft ?", options: ["Elle envoie un chauffeur dans sa propre voiture pour venir vous chercher", "Elle vend des voitures", "Elle livre le courrier", "Elle loue seulement des vélos"], answer: 0, why: "Les applis de trajets vous mettent en contact avec un chauffeur." },
      { q: "En installant une application de trajets, vérifiez :", options: ["La couleur de l'icône", "Que le développeur est la vraie entreprise", "Le solde de votre compte", "La météo"], answer: 1, why: "Les fausses applis copient les vrais noms." },
      { q: "Selon les conditions d'Uber aux États-Unis, les adolescents de 13 à 17 ans peuvent voyager :", options: ["Avec leur propre compte adulte", "Jamais", "Avec un compte ado créé par un parent ou un tuteur", "Seulement la nuit"], answer: 2, why: "Les conditions d'Uber permettent des comptes ado de 13 à 17 ans avec un parent ou un tuteur." },
      { q: "Où devez-vous taper les données de votre carte pour une application de trajets ?", options: ["Dans un SMS au chauffeur", "Dans un e-mail", "Sur un réseau social", "Seulement dans l'application"], answer: 3, why: "Le paiement se règle seulement dans l'application." },
      { q: "La case « Où allez-vous ? » sert à :", options: ["Votre destination", "Votre mot de passe", "Un pourboire", "Votre numéro de compte"], answer: 0, why: "Vous y tapez l'endroit où vous voulez aller." },
      { q: "Pourquoi vérifier le point de prise en charge sur la carte ?", options: ["Pour changer le prix", "Ce n'est pas utile", "Pour choisir la couleur de la voiture", "Pour que le chauffeur vous trouve"], answer: 3, why: "Un bon point de prise en charge évite les trajets manqués." },
      { q: "Les prix des trajets peuvent être plus élevés :", options: ["Jamais", "Seulement le jour de votre anniversaire", "Aux heures chargées comme les heures de pointe", "Quand vous utilisez le Wi-Fi"], answer: 2, why: "Une forte demande peut faire monter les prix." },
      { q: "Que devez-vous vérifier avant de monter dans la voiture ?", options: ["La station de radio", "La météo", "La plaque, la voiture et la photo du chauffeur", "L'adresse du chauffeur"], answer: 2, why: "Ils doivent correspondre à l'application." },
      { q: "Le code PIN de trajet d'Uber fonctionne ainsi :", options: ["Vous payez le chauffeur", "Vous appelez le 911", "Vous déverrouillez votre téléphone", "Vous dites un code au chauffeur pour que le trajet puisse commencer"], answer: 3, why: "Le trajet ne commence qu'avec le bon code." },
      { q: "Share My Trip vous permet de :", options: ["Partager le prix avec des inconnus", "Changer de chauffeur", "Laisser des personnes de confiance suivre votre trajet en direct", "Être remboursé"], answer: 2, why: "Vos contacts de confiance peuvent voir où en est votre trajet." },
      { q: "Le bouton d'urgence d'Uber dans l'application :", options: ["Note le chauffeur", "Annule le trajet gratuitement", "Appelle votre banque", "Contacte le 911 et donne votre position et les détails de la voiture"], answer: 3, why: "Il vous met en contact avec le 911 avec les détails du trajet." },
      { q: "Une voiture que vous n'avez pas réservée vous propose un trajet à la sortie d'une salle. Vous devez :", options: ["Monter ; c'est plus rapide", "Payer en liquide", "Refuser ; ne montez que dans une voiture réservée dans l'application", "Donner votre code PIN"], answer: 2, why: "Seules les voitures réservées et vérifiées sont sûres." },
      { q: "Quelle application sert surtout à la livraison de courses ?", options: ["Lyft", "Une calculatrice", "Une application météo", "Instacart"], answer: 3, why: "Instacart livre les courses." },
      { q: "Un « panier » dans une application de livraison, c'est :", options: ["Une voiture", "Un reçu", "La liste des articles que vous comptez acheter", "Des frais"], answer: 2, why: "Votre panier contient les articles avant le paiement." },
      { q: "Lequel est en général un montant en plus sur une commande en livraison ?", options: ["Des frais de service", "Un cadeau gratuit", "Votre note", "Votre adresse"], answer: 0, why: "Les frais de service et de livraison sont ajoutés au paiement." },
      { q: "Le pourboire d'une commande en livraison va :", options: ["Au magasin d'applications", "À l'État", "À la banque", "Au livreur"], answer: 3, why: "Les pourboires sont pour la personne qui livre." },
      { q: "Le total au paiement dépasse ce que vous aviez prévu. Une bonne étape est de :", options: ["Payer sans lire", "Donner votre carte à un inconnu", "Enlever un article ou choisir le retrait si c'est proposé", "Donner une fausse adresse"], answer: 2, why: "Changer la commande baisse le total." },
      { q: "Où trouver un reçu après un trajet ?", options: ["Dans votre e-mail et dans la partie trajets de l'application", "Seulement auprès du chauffeur", "Nulle part", "Dans le magasin d'applications"], answer: 0, why: "Les applications gardent les reçus et les envoient par e-mail." },
      { q: "Où est la vraie aide pour une commande erronée ?", options: ["Un numéro trouvé dans une publicité de recherche", "Un commentaire sur un réseau social", "Le SMS d'un inconnu", "Aide ou Assistance dans l'application"], answer: 3, why: "La vraie assistance est dans l'application." },
      { q: "Quelqu'un dit être de l'assistance de l'application et demande votre mot de passe. Vous :", options: ["Le donnez", "En donnez la moitié", "Ne le donnez jamais", "L'envoyez par SMS plus tard"], answer: 2, why: "La vraie assistance n'a jamais besoin de votre mot de passe." }
    ]
  }
};
