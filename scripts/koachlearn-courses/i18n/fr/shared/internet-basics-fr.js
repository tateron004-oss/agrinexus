"use strict";

// Koach Learn course, French translation of shared/internet-basics.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const FTC_TECH = { name: "FTC (agence américaine de protection des consommateurs) : repérer, éviter et signaler les arnaques au faux support technique", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-fr",
  lang: "fr",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Les bases d'internet",
  skills: "Se connecter au Wi-Fi, Utiliser un navigateur web, Ouvrir et changer d'onglet, Chercher sur le web, Lire une adresse web en sécurité, Enregistrer ses sites préférés",
  outcome: "connecter un téléphone ou un ordinateur au Wi-Fi, ouvrir un navigateur web, aller sur un site par son adresse, chercher ce dont vous avez besoin, distinguer une adresse web sûre d'une adresse risquée, et enregistrer un site que vous utilisez souvent pour y revenir d'un seul geste.",
  about: [
    "Internet vous permet de regarder la météo, de trouver les horaires d'un cabinet médical, de lire les informations, de consulter les horaires du bus et de voir les photos de la famille. Ce cours part du tout début et ne demande aucune expérience.",
    "Au chapitre 1, vous apprenez ce qu'est internet, comment vous connecter au Wi-Fi et comment utiliser un navigateur web. Au chapitre 2, vous cherchez des choses, apprenez à lire une adresse web pour éviter les faux sites et les fenêtres effrayantes, et enregistrez les sites que vous utilisez le plus.",
    "Chaque leçon dure environ cinq minutes. Gardez un téléphone, une tablette ou un ordinateur près de vous pour essayer chaque étape. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez une petite sortie. Connectez-vous au Wi-Fi, ouvrez un navigateur web et cherchez un endroit que vous aimeriez visiter, comme un parc, un musée ou une bibliothèque. Ouvrez son site officiel, vérifiez ses horaires et son adresse, ouvrez un deuxième onglet avec la météo de demain, agrandissez le texte si besoin, et ajoutez le site officiel à vos favoris pour le retrouver d'un seul geste.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui découvrent internet ou ne l'utilisent qu'à travers une ou deux applications : seniors, leurs aidants, personnes qui reviennent dans la communauté, nouveaux arrivants et toute personne qui veut aller en ligne avec confiance.",
    startingPoint: "Ils savent allumer un téléphone, une tablette ou un ordinateur et toucher ou cliquer. Beaucoup ne se sont jamais connectés eux-mêmes à un réseau Wi-Fi, n'ont jamais tapé une adresse web, utilisé des onglets ou des favoris, ni vérifié si une adresse web est la vraie.",
    gap: "Les horaires, les cartes, la météo, la santé, les aides et les achats se trouvent maintenant en ligne. Les personnes qui ne savent pas se connecter, chercher et distinguer un vrai site d'un faux dépendent des autres, ratent des informations, épuisent les données de leur forfait ou se font piéger par de fausses fenêtres et des sites qui imitent les vrais.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les mots comme routeur, navigateur, onglet et domaine sont expliqués",
      "Appareils : un téléphone, une tablette ou un ordinateur ; les étapes sont données pour iPhone, Android et ordinateur",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total",
      "Coût : Wi-Fi gratuit à la maison, à la bibliothèque ou dans un café ; aucune application payante",
      "Sécurité : pas de banque ni d'informations privées sur un Wi-Fi public pendant les exercices"
    ],
    prerequisites: "Aucun. « Utiliser un smartphone et une tablette » ou « Les bases de l'ordinateur » aide les apprenants qui n'ont jamais utilisé d'appareil."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Sans notes", action: "expliquer ce que sont internet et le web, et les deux principales façons dont un appareil se connecte", standard: "en nommant correctement le Wi-Fi et les données mobiles, et quand le Wi-Fi économise les données de votre forfait" },
    { id: "O2", condition: "À partir du nom et du mot de passe d'un réseau", action: "rejoindre un réseau Wi-Fi sur votre téléphone, votre tablette ou votre ordinateur et nommer ce qu'il faut éviter sur un Wi-Fi public", standard: "connecté sans aide, en nommant la banque et les informations privées comme choses à éviter" },
    { id: "O3", condition: "Avec un navigateur web", action: "ouvrir un site en tapant son adresse, puis utiliser le bouton retour, les onglets et le zoom", standard: "avec le bon site ouvert, un deuxième onglet ouvert et le texte agrandi" },
    { id: "O4", condition: "À partir de quelque chose que vous devez trouver", action: "chercher avec quelques mots clés et choisir un résultat utile qui n'est pas une publicité", standard: "en lisant l'adresse web avant d'ouvrir le résultat" },
    { id: "O5", condition: "À partir d'adresses web, d'une fenêtre effrayante et d'un site que vous utilisez souvent", action: "distinguer une adresse web sûre d'une adresse risquée, fermer les fausses fenêtres, et ajouter le site officiel aux favoris pour y revenir en sécurité", standard: "en choisissant juste chaque fois et en rouvrant le site enregistré d'un seul geste" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Aller sur internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est internet",
          minutes: 4,
          goal: "Expliquer internet, le web et la façon dont un appareil se connecte.",
          text: [
            "Internet est un immense réseau qui relie les ordinateurs et les téléphones du monde entier pour qu'ils partagent des informations. Le World Wide Web, ou le web, est la partie que vous visitez avec un navigateur : des sites avec des pages, des images et des vidéos. Les e-mails et les appels vidéo passent aussi par internet.",
            "Votre appareil se connecte de deux façons principales. Le Wi-Fi est une connexion sans fil qui vient d'un boîtier appelé routeur (ou box), à la maison, à la bibliothèque ou au café. Les données mobiles viennent des antennes de votre opérateur téléphonique et font partie de votre forfait.",
            "Le Wi-Fi de la maison n'utilise généralement pas les données de votre forfait, c'est donc un bon choix pour les vidéos et les gros téléchargements."
          ],
          words: [["Internet", "un réseau mondial qui relie les ordinateurs et les téléphones."], ["Web (World Wide Web)", "les sites que vous visitez avec un navigateur."], ["Routeur (box)", "le boîtier qui envoie le signal Wi-Fi."], ["Données mobiles", "internet qui vient des antennes de votre opérateur, compris dans votre forfait."]],
          slides: [
            { title: "Internet et le web", bullets: ["Internet : un réseau mondial d'appareils", "Le web : les sites que vous visitez avec un navigateur", "Les e-mails et les appels vidéo utilisent aussi internet"] },
            { title: "Deux façons de se connecter", bullets: ["Wi-Fi : sans fil, depuis un routeur", "Données mobiles : depuis les antennes, comprises dans le forfait"] },
            { title: "Astuce", bullets: ["Utilisez le Wi-Fi à la maison pour les vidéos et gros téléchargements", "Cela économise les données de votre forfait"] }
          ],
          tryIt: "Sur votre téléphone ou votre tablette, regardez en haut de l'écran. Trouvez le symbole Wi-Fi (des lignes courbes) ou le symbole des données mobiles (des barres ou des lettres comme 5G). Lequel est activé en ce moment ?",
          youCanNow: "expliquer ce que sont internet et le web, et dire si votre appareil est en Wi-Fi ou en données mobiles.",
          quickCheck: [
            { objective: "O1", q: "Que sont les données mobiles ?", options: ["Un boîtier chez vous", "Une liste de sites que vous avez enregistrés", "Internet qui vient des antennes de votre opérateur téléphonique, compris dans votre forfait", "Un type de navigateur web"], answer: 2, why: "Les données mobiles viennent des antennes et font partie de votre forfait téléphonique." },
            { objective: "O1", q: "Vous voulez regarder une longue vidéo sur votre téléphone à la maison. Quelle connexion utilisez-vous ?", options: ["Le Wi-Fi de la maison, pour ne pas épuiser les données de votre forfait", "Les données mobiles, parce qu'elles sont toujours gratuites", "Aucune connexion n'est nécessaire pour les vidéos", "Un favori"], answer: 0, why: "Le Wi-Fi de la maison n'utilise en général pas les données de votre forfait." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Se connecter au Wi-Fi",
          minutes: 5,
          goal: "Rejoindre un réseau Wi-Fi sur un téléphone, une tablette ou un ordinateur.",
          text: [
            "Pour rejoindre un Wi-Fi, il vous faut le nom du réseau et son mot de passe. À la maison, les deux sont souvent écrits sur une étiquette collée sur le routeur. À la bibliothèque ou au café, demandez au personnel ou cherchez une affiche.",
            "Sur un iPhone ou un iPad : ouvrez Réglages, touchez Wi-Fi, touchez le nom du réseau et tapez le mot de passe. Sur Android : ouvrez Paramètres, touchez Réseau et internet ou Connexions, puis Wi-Fi, choisissez le réseau et tapez le mot de passe. Sur un ordinateur : cliquez sur le symbole Wi-Fi près de l'horloge, choisissez le réseau et tapez le mot de passe.",
            "Le Wi-Fi public est pratique, mais d'autres personnes le partagent. Sur un Wi-Fi public, évitez la banque et ne tapez pas d'informations privées. Ne rejoignez que les réseaux dont le personnel vous a donné le nom, pas ceux aux noms bizarres."
          ],
          steps: ["Trouvez le nom du réseau et le mot de passe (étiquette du routeur, personnel ou affiche).", "Ouvrez Réglages ou Paramètres, puis Wi-Fi (sur ordinateur, cliquez sur le symbole Wi-Fi près de l'horloge).", "Touchez ou cliquez sur le nom du réseau.", "Tapez le mot de passe avec soin ; les majuscules comptent.", "Attendez que le symbole Wi-Fi apparaisse en haut."],
          words: [["Nom du réseau", "le nom qu'une connexion Wi-Fi affiche dans la liste, aussi appelé SSID."], ["Mot de passe Wi-Fi", "le code que vous tapez pour rejoindre un réseau Wi-Fi."], ["Wi-Fi public", "un Wi-Fi partagé par beaucoup de personnes dans des lieux comme les bibliothèques et les cafés."]],
          slides: [
            { title: "Il vous faut deux choses", bullets: ["Le nom du réseau", "Le mot de passe (étiquette du routeur, personnel ou affiche)"] },
            { title: "Comment se connecter", bullets: ["Téléphone ou tablette : Réglages ou Paramètres, puis Wi-Fi", "Ordinateur : symbole Wi-Fi près de l'horloge", "Choisissez le réseau, tapez le mot de passe"] },
            { title: "Sécurité sur le Wi-Fi public", bullets: ["Pas de banque ni d'informations privées", "Rejoignez seulement le nom donné par le personnel"] }
          ],
          tryIt: "Ouvrez vos réglages Wi-Fi et trouvez la liste des réseaux. Si vous êtes à la maison ou à la bibliothèque, rejoignez le bon réseau. Vérifiez que le symbole Wi-Fi apparaît en haut.",
          youCanNow: "rejoindre un réseau Wi-Fi et utiliser le Wi-Fi public en sécurité.",
          quickCheck: [
            { objective: "O2", q: "De quelles deux choses avez-vous besoin pour rejoindre un réseau Wi-Fi ?", options: ["Votre e-mail et votre numéro de téléphone", "Le nom du réseau et son mot de passe", "Un navigateur et un favori", "Un onglet et un moteur de recherche"], answer: 1, why: "Vous choisissez le réseau par son nom et tapez son mot de passe." },
            { objective: "O2", q: "Dans un café, vous voyez deux réseaux : celui que le personnel vous a donné et un autre appelé « FREE_FAST_WIFI_123 ». Que faites-vous ?", options: ["Rejoindre le réseau bizarre parce qu'il est gratuit", "Rejoindre les deux en même temps", "Taper vos coordonnées bancaires pour tester le réseau bizarre", "Rejoindre seulement le réseau donné par le personnel"], answer: 3, why: "Ne rejoignez que les réseaux dont le personnel vous a donné le nom, pas ceux aux noms bizarres." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Utiliser un navigateur web",
          minutes: 5,
          goal: "Ouvrir un site par son adresse et circuler avec le bouton retour et les onglets.",
          text: [
            "Un navigateur web est l'application qui sert à visiter des sites. Les plus courants sont Chrome, Safari, Edge et Firefox. En haut se trouve la barre d'adresse, une longue case où vous tapez une adresse web comme weather.gov ou meteofrance.com, puis appuyez sur Entrée ou OK.",
            "Des boutons utiles : la flèche de retour revient à la page précédente ; la flèche en cercle recharge la page. Les onglets permettent d'avoir plusieurs pages ouvertes en même temps, comme des chemises sur un bureau. Ouvrez un nouvel onglet avec le bouton plus (+) et changez d'onglet en le touchant ou en cliquant dessus.",
            "Si les mots sont trop petits, vous pouvez zoomer. Sur un ordinateur, maintenez Ctrl et appuyez sur + (Commande et + sur Mac) ; Ctrl et - rend plus petit. Sur un téléphone, écartez deux doigts sur l'écran."
          ],
          steps: ["Ouvrez le navigateur (Chrome, Safari, Edge ou Firefox).", "Touchez la barre d'adresse en haut.", "Tapez une adresse web, comme weather.gov, et appuyez sur Entrée ou OK.", "Utilisez la flèche de retour pour revenir.", "Appuyez sur + pour ouvrir un nouvel onglet.", "Zoom : Ctrl et + (Commande et + sur Mac), ou écartez deux doigts sur un téléphone."],
          words: [["Navigateur web", "l'application qui sert à visiter des sites, comme Chrome, Safari, Edge ou Firefox."], ["Barre d'adresse", "la case en haut du navigateur où vous tapez une adresse web."], ["Onglet", "une page ouverte dans le navigateur ; vous pouvez en avoir plusieurs à la fois."], ["Zoomer", "agrandir ou réduire ce qui est à l'écran."]],
          slides: [
            { title: "Le navigateur", bullets: ["Chrome, Safari, Edge ou Firefox", "La barre d'adresse en haut", "Tapez une adresse, appuyez sur Entrée ou OK"] },
            { title: "Des boutons pratiques", bullets: ["Flèche de retour : la page d'avant", "Flèche en cercle : recharger", "+ ouvre un nouvel onglet"] },
            { title: "Agrandir", bullets: ["Ordinateur : Ctrl et + (Commande et + sur Mac)", "Téléphone : écartez deux doigts"] }
          ],
          tryIt: "Ouvrez un navigateur et tapez weather.gov (ou le site météo officiel de votre pays) dans la barre d'adresse. Puis ouvrez un nouvel onglet et allez sur le site de votre bibliothèque. Passez d'un onglet à l'autre et agrandissez le texte sur l'un d'eux.",
          youCanNow: "ouvrir des sites par leur adresse, utiliser le bouton retour, changer d'onglet et agrandir le texte.",
          quickCheck: [
            { objective: "O3", q: "À quoi sert la flèche en cercle dans un navigateur ?", options: ["Elle ferme le navigateur", "Elle ouvre un nouvel onglet", "Elle enregistre un favori", "Elle recharge la page"], answer: 3, why: "La flèche en cercle recharge la page sur laquelle vous êtes." },
            { objective: "O3", q: "Vous lisez une recette et voulez voir la météo sans perdre la recette. Que faites-vous ?", options: ["Ouvrir un nouvel onglet avec le bouton plus (+)", "Fermer la page de la recette", "Couper le Wi-Fi", "Redémarrer l'appareil"], answer: 0, why: "Les onglets permettent de garder plusieurs pages ouvertes en même temps." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Aller sur internet",
        questions: [
          { objective: "O1", q: "Qu'est-ce que le web ?", options: ["Un type de câble", "Seulement une toile d'araignée", "Votre facture de téléphone", "Les sites que vous visitez avec un navigateur"], answer: 3, why: "Le web, ce sont les sites que vous visitez avec un navigateur." },
          { objective: "O2", q: "Où le mot de passe du Wi-Fi de la maison est-il souvent écrit ?", options: ["Sur la télécommande", "Sur une étiquette collée sur le routeur", "Sur la coque de votre téléphone", "Dans le journal"], answer: 1, why: "Les routeurs ont souvent le nom et le mot de passe sur une étiquette." },
          { objective: "O2", q: "Sur un ordinateur, où cliquez-vous en général pour rejoindre un Wi-Fi ?", options: ["Sur la corbeille", "Sur le symbole Wi-Fi près de l'horloge", "Sur l'imprimante", "Sur la caméra"], answer: 1, why: "Le symbole Wi-Fi près de l'horloge montre les réseaux." },
          { objective: "O2", q: "Vous êtes sur le Wi-Fi d'un café. Que devez-vous éviter ?", options: ["Regarder la météo", "Lire les informations", "Aller sur votre banque en ligne", "Chercher une recette"], answer: 2, why: "Le Wi-Fi public est partagé, donc évitez la banque et les détails privés." },
          { objective: "O3", q: "Où tapez-vous une adresse web comme weather.gov ?", options: ["Dans l'appareil photo", "Dans un SMS", "Dans la calculatrice", "Dans la barre d'adresse en haut du navigateur"], answer: 3, why: "La barre d'adresse vous emmène sur un site." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Trouver des choses et rester en sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Chercher sur le web",
          minutes: 5,
          goal: "Chercher quelque chose de précis et ouvrir un résultat utile.",
          text: [
            "Si vous ne connaissez pas une adresse web, cherchez-la. Tapez quelques mots-clés dans la barre d'adresse ou sur un site de recherche comme Google ou Bing, puis appuyez sur Entrée. Par exemple : « horaires bibliothèque municipale Lyon ».",
            "La page de résultats montre une liste de liens. Chacun a un titre en bleu, l'adresse web en petits caractères et une courte description. Lisez l'adresse web avant de toucher. Les résultats en haut marqués « Sponsorisé » ou « Annonce » sont des publicités payées.",
            "Vous pouvez aussi chercher avec votre voix. Touchez le micro dans la case de recherche et dites ce que vous voulez, par exemple « météo demain »."
          ],
          steps: ["Touchez la barre d'adresse ou une case de recherche.", "Tapez quelques mots-clés, comme le lieu, la ville et ce que vous voulez.", "Appuyez sur Entrée ou sur le bouton de recherche.", "Passez les résultats marqués Sponsorisé ou Annonce.", "Lisez l'adresse web, puis touchez le résultat voulu."],
          words: [["Chercher", "taper des mots pour trouver des pages web sur ce sujet."], ["Résultats", "la liste des pages web trouvées par la recherche."], ["Lien", "des mots ou une image que vous touchez pour aller sur une autre page."]],
          slides: [
            { title: "Cherchez avec des mots-clés", bullets: ["« horaires bibliothèque municipale Lyon »", "Tapez dans la barre d'adresse ou sur Google ou Bing"] },
            { title: "Lire les résultats", bullets: ["Titre bleu, adresse web, courte description", "Sponsorisé ou Annonce = payé", "Lisez l'adresse avant de toucher"] },
            { title: "Utilisez votre voix", bullets: ["Touchez le micro", "Dites : « météo demain »"] }
          ],
          tryIt: "Cherchez les horaires d'ouverture d'un lieu près de chez vous, comme une pharmacie ou un parc. Passez les publicités, ouvrez le résultat officiel et trouvez les horaires.",
          youCanNow: "chercher sur le web et choisir un résultat utile qui n'est pas une publicité.",
          quickCheck: [
            { objective: "O4", q: "Sur une page de résultats, que montre le petit texte sous chaque titre bleu ?", options: ["L'adresse web", "La météo", "Votre mot de passe", "Le prix de la page"], answer: 0, why: "Chaque résultat montre son adresse web en petit, pour que vous la lisiez avant de toucher." },
            { objective: "O4", q: "Vous avez les mains occupées et vous voulez la météo de demain. Que faites-vous ?", options: ["Taper une longue histoire dans la barre de recherche", "Ouvrir le favori d'un site d'achat", "Toucher le micro dans la barre de recherche et dire « météo demain »", "Redémarrer le téléphone"], answer: 2, why: "Vous pouvez chercher avec votre voix en touchant le micro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lire une adresse web et éviter les arnaques",
          minutes: 5,
          goal: "Distinguer une adresse web sûre d'une adresse risquée et réagir aux fenêtres effrayantes.",
          text: [
            "Une adresse web a une partie principale, le domaine, juste avant la première barre oblique simple (/), comme irs.gov ou amazon.com. Cette partie principale vous dit qui gère le site. Les faux sites utilisent des noms qui imitent les vrais, comme « amaz0n-deals.com » ou « irs-refund.help ».",
            "Cherchez https et un cadenas au début de l'adresse. Cela veut dire que la connexion est privée, mais les escrocs peuvent l'avoir aussi, donc le nom de domaine reste le plus important.",
            "Certaines fausses fenêtres disent que votre ordinateur a un virus et donnent un numéro de téléphone à appeler. La FTC, l'agence américaine de protection des consommateurs, dit que les vrais avertissements de sécurité ne vous demandent jamais d'appeler un numéro, et que les vraies entreprises technologiques ne vous appellent pas et ne vous écrivent pas à propos d'un problème. N'appelez pas. Fermez l'onglet ou le navigateur ; s'il ne se ferme pas, redémarrez l'appareil. Si vous êtes inquiet, demandez à une personne de confiance."
          ],
          steps: ["Trouvez le domaine : le nom juste avant la première barre oblique simple.", "Vérifiez que c'est bien le vrai nom que vous attendiez.", "Cherchez https et le cadenas, mais ne vous y fiez pas seuls.", "Une fenêtre effrayante avec un numéro de téléphone ? N'appelez pas.", "Fermez l'onglet ou redémarrez l'appareil.", "Aux États-Unis, signalez les arnaques au faux support sur ReportFraud.ftc.gov."],
          words: [["Domaine", "le nom principal d'une adresse web, qui dit qui gère le site, comme irs.gov."], ["Fenêtre surgissante (pop-up)", "une petite fenêtre qui apparaît soudain par-dessus une page web."], ["Arnaque au faux support technique", "un faux avertissement ou appel qui dit que votre appareil a un problème, pour obtenir votre argent ou l'accès à l'appareil."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Trouvez le domaine", bullets: ["Le nom juste avant la première barre oblique simple", "irs.gov est vrai ; irs-refund.help ne l'est pas"] },
            { title: "https et le cadenas", bullets: ["La connexion est privée", "Les escrocs peuvent l'avoir aussi", "Le nom de domaine compte le plus"] },
            { title: "Fenêtres effrayantes (FTC)", bullets: ["Un vrai avertissement ne demande jamais d'appeler un numéro", "N'appelez pas", "Fermez l'onglet ou redémarrez l'appareil"] }
          ],
          tryIt: "Regardez trois adresses web sur votre écran ou dans vos e-mails. Pour chacune, montrez le domaine et dites qui gère le site.",
          youCanNow: "lire une adresse web pour savoir qui gère un site et réagir en sécurité aux fausses alertes de virus.",
          quickCheck: [
            { objective: "O5", q: "Quelle partie d'une adresse web vous dit qui gère le site ?", options: ["Le https au début", "Les mots après la première barre oblique simple", "Le domaine, juste avant la première barre oblique simple", "Le symbole du cadenas"], answer: 2, why: "Le domaine, comme irs.gov, vous dit qui gère le site." },
            { objective: "O5", q: "Une fenêtre dit que votre ordinateur a un virus et montre un numéro à appeler. Elle ne se ferme pas. Que faites-vous ?", options: ["Appeler le numéro tout de suite", "Redémarrer l'appareil et ne pas appeler", "Taper votre numéro de carte pour payer une réparation", "La laisser à l'écran pendant des jours"], answer: 1, why: "Les vrais avertissements de sécurité ne demandent jamais d'appeler ; redémarrez si la fenêtre ne se ferme pas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Enregistrer vos sites préférés",
          minutes: 4,
          goal: "Ajouter un site à vos favoris et le rouvrir d'un seul geste.",
          text: [
            "Un favori (ou marque-page) enregistre un site pour y revenir sans chercher à nouveau. C'est le moyen le plus sûr de retrouver les sites que vous utilisez souvent, comme votre banque, votre pharmacie ou un site d'informations, car vous évitez les faux résultats de recherche.",
            "Sur un ordinateur, cliquez sur l'étoile au bout de la barre d'adresse. Sur un iPhone ou un iPad dans Safari, touchez le bouton Partager et choisissez Ajouter un signet. Dans Chrome sur un téléphone, ouvrez le menu (trois points) et touchez l'étoile. Sur beaucoup de téléphones, vous pouvez aussi choisir « Sur l'écran d'accueil » pour créer une icône comme une application.",
            "Pour rouvrir un favori plus tard, ouvrez la liste des favoris dans le menu du navigateur, ou touchez l'icône sur votre écran d'accueil."
          ],
          steps: ["Ouvrez le site officiel que vous voulez enregistrer.", "Ordinateur : cliquez sur l'étoile dans la barre d'adresse.", "Safari sur iPhone ou iPad : bouton Partager, puis Ajouter un signet.", "Chrome sur un téléphone : menu à trois points, puis l'étoile.", "Pour le rouvrir : allez dans Favoris dans le menu, ou touchez l'icône de l'écran d'accueil."],
          words: [["Favori / marque-page", "un lien enregistré vers un site pour le rouvrir vite."], ["Écran d'accueil", "l'écran principal d'un téléphone ou d'une tablette qui montre les icônes des applications."]],
          slides: [
            { title: "Pourquoi un favori ?", bullets: ["Revenir sur un site d'un seul geste", "Évite les faux résultats de recherche", "Idéal pour la banque, la pharmacie, les informations"] },
            { title: "Comment ajouter un favori", bullets: ["Ordinateur : l'étoile dans la barre d'adresse", "Safari : Partager, puis Ajouter un signet", "Chrome sur téléphone : trois points, puis l'étoile"] },
            { title: "Le rouvrir", bullets: ["Les favoris dans le menu du navigateur", "Ou touchez l'icône de l'écran d'accueil"] }
          ],
          tryIt: "Tâche finale : préparez une sortie. Cherchez un parc, un musée ou une bibliothèque, ouvrez son site officiel, vérifiez ses horaires et son adresse, ouvrez la météo de demain dans un deuxième onglet, agrandissez le texte si besoin et ajoutez le site officiel à vos favoris.",
          youCanNow: "aller sur internet seul, trouver ce dont vous avez besoin, éviter les faux sites et enregistrer vos sites préférés.",
          quickCheck: [
            { objective: "O5", q: "Sur un ordinateur, sur quoi cliquez-vous pour ajouter un site aux favoris ?", options: ["La flèche retour", "La flèche en cercle", "Le bouton plus (+)", "L'étoile au bout de la barre d'adresse"], answer: 3, why: "L'étoile au bout de la barre d'adresse enregistre un favori." },
            { objective: "O5", q: "Vous commandez vos médicaments chaque mois sur le site de votre pharmacie. Comment y revenez-vous en sécurité ?", options: ["Le chercher à chaque fois et toucher la première publicité", "Ajouter le site officiel aux favoris et l'ouvrir depuis vos favoris", "Cliquer sur un lien reçu par SMS", "Deviner l'adresse à chaque fois"], answer: 1, why: "Un favori du site officiel évite les faux résultats de recherche." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Trouver des choses et rester en sécurité",
        questions: [
          { objective: "O4", q: "Quelle recherche est la plus claire ?", options: ["« endroit »", "« horaires bibliothèque Lyon »", "« ouvert ? »", "« aidez-moi à le trouver s'il vous plaît maintenant »"], answer: 1, why: "Quelques mots-clés avec le lieu et ce que vous voulez marchent le mieux." },
          { objective: "O5", q: "Dans www.irs.gov/refunds, quel est le domaine ?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "Le domaine est le nom juste avant la première barre oblique simple." },
          { objective: "O5", q: "Une fenêtre dit que votre ordinateur a un virus et qu'il faut appeler un numéro tout de suite. Que faites-vous ?", options: ["Appeler le numéro", "Payer avec une carte cadeau", "Leur donner l'accès à distance", "Ne pas appeler ; fermer l'onglet ou redémarrer"], answer: 3, why: "La FTC dit que les vrais avertissements ne demandent jamais d'appeler un numéro." },
          { objective: "O5", q: "Un site affiche https et un cadenas. Cela veut dire :", options: ["C'est un site du gouvernement", "Il est forcément honnête", "La connexion est privée, mais vous vérifiez quand même le domaine", "Il est gratuit"], answer: 2, why: "Les escrocs peuvent aussi avoir https ; le domaine compte le plus." },
          { objective: "O5", q: "Quel est le moyen le plus sûr de revenir chaque mois sur le site de votre pharmacie ?", options: ["Cliquer sur une publicité", "Un favori enregistré depuis le site officiel", "Un lien dans un SMS d'un inconnu", "Deviner l'adresse"], answer: 1, why: "Un favori évite les faux résultats de recherche et les faux liens." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases d'internet",
    questions: [
      { objective: "O1", q: "Internet est :", options: ["Un seul site web", "Une chaîne de télévision", "Un annuaire téléphonique", "Un réseau mondial qui relie ordinateurs et téléphones"], answer: 3, why: "Il relie des appareils du monde entier." },
      { objective: "O1", q: "Le Wi-Fi vient :", options: ["D'une pile", "De la télévision", "D'un routeur", "D'une imprimante"], answer: 2, why: "Un routeur envoie le signal Wi-Fi." },
      { objective: "O1", q: "Les données mobiles, c'est :", options: ["Un navigateur", "Le Wi-Fi gratuit de la bibliothèque", "Une sorte d'e-mail", "Internet par les antennes, compris dans votre forfait"], answer: 3, why: "Les données mobiles passent par votre opérateur téléphonique." },
      { objective: "O1", q: "Pourquoi utiliser le Wi-Fi de la maison pour les vidéos ?", options: ["Les vidéos ne marchent qu'en Wi-Fi", "Cela économise en général les données de votre forfait", "C'est obligatoire par la loi", "Cela rend le téléphone plus léger"], answer: 1, why: "Le Wi-Fi de la maison n'utilise généralement pas les données du forfait." },
      { objective: "O2", q: "Pour rejoindre un Wi-Fi, il vous faut :", options: ["Une imprimante", "Votre numéro de compte bancaire", "Le nom du réseau et le mot de passe", "Un nouveau téléphone"], answer: 2, why: "Le nom et le mot de passe permettent de se connecter." },
      { objective: "O2", q: "Sur un iPhone, le Wi-Fi se trouve dans :", options: ["Horloge", "Photos", "Calculatrice", "Réglages"], answer: 3, why: "Réglages, puis Wi-Fi." },
      { objective: "O2", q: "Sur un Wi-Fi public, quelle est une mauvaise idée ?", options: ["Lire les informations", "Aller sur sa banque en ligne", "Regarder un plan", "Chercher des horaires"], answer: 1, why: "Le Wi-Fi public est partagé ; évitez les démarches privées." },
      { objective: "O3", q: "Lequel est un navigateur web ?", options: ["Calculatrice", "Chrome", "Appareil photo", "Horloge"], answer: 1, why: "Chrome, Safari, Edge et Firefox sont des navigateurs." },
      { objective: "O3", q: "Que fait la flèche de retour d'un navigateur ?", options: ["Elle supprime le site", "Elle éteint l'ordinateur", "Elle revient à la page précédente", "Elle imprime la page"], answer: 2, why: "Retour ramène à la page d'avant." },
      { objective: "O3", q: "Les onglets vous permettent de :", options: ["Couper le Wi-Fi", "Payer les factures automatiquement", "Recharger la batterie", "Garder plusieurs pages ouvertes à la fois"], answer: 3, why: "Chaque onglet est une page ouverte." },
      { objective: "O3", q: "Sur un ordinateur, les mots d'une page sont trop petits. Appuyez sur :", options: ["Suppr", "Ctrl et + (Commande et + sur Mac)", "Échap", "Maj et 0"], answer: 1, why: "Ctrl et + agrandit." },
      { objective: "O3", q: "Sur un téléphone, comment agrandir une page ?", options: ["Écarter deux doigts sur l'écran", "Secouer le téléphone", "L'éteindre", "Appuyer sur le bouton du volume"], answer: 0, why: "Écarter deux doigts agrandit." },
      { objective: "O4", q: "Les résultats de recherche marqués « Sponsorisé » sont :", options: ["Des publicités payées", "Toujours le site officiel", "Des pages du gouvernement", "Des alertes de virus"], answer: 0, why: "Sponsorisé veut dire que quelqu'un a payé." },
      { objective: "O4", q: "Avant de toucher un résultat de recherche, vous devez :", options: ["Lire son adresse web", "Fermer le navigateur", "Redémarrer le téléphone", "Toucher tous les résultats"], answer: 0, why: "L'adresse montre qui gère le site." },
      { objective: "O4", q: "Comment chercher sans taper ?", options: ["Toucher le micro et parler", "Secouer le téléphone", "Utiliser la calculatrice", "Monter le volume"], answer: 0, why: "La recherche vocale vous permet de dire ce que vous voulez." },
      { objective: "O5", q: "Quelle adresse est probablement fausse ?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Un zéro à la place d'un O est une ruse d'imitation." },
      { objective: "O5", q: "https et un cadenas vous disent que :", options: ["La connexion est privée", "Le site est sûrement honnête", "Le site est gratuit", "Le site est une banque"], answer: 0, why: "Ils protègent la connexion, pas l'honnêteté." },
      { objective: "O5", q: "Un vrai avertissement de sécurité sur votre ordinateur :", options: ["Ne vous demandera jamais d'appeler un numéro", "Demandera des cartes cadeaux", "Vous demandera d'appeler tout de suite", "Demandera le mot de passe de votre banque"], answer: 0, why: "La FTC dit que les vrais avertissements ne demandent jamais d'appeler un numéro." },
      { objective: "O5", q: "Une fenêtre ne veut pas se fermer. Que faites-vous ?", options: ["Redémarrer l'appareil", "Appeler le numéro affiché", "Taper votre mot de passe", "Payer les frais"], answer: 0, why: "Redémarrer fait disparaître la fenêtre en sécurité." },
      { objective: "O5", q: "Un favori, c'est :", options: ["Un lien enregistré vers un site", "Seulement un marque-page en papier", "Un virus", "Un mot de passe"], answer: 0, why: "Les favoris vous ramènent vite sur un site." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      4,
      6,
      8,
      10,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Se connecter au Wi-Fi",
        objective: "O2",
        notYet: "L'appareil n'est pas connecté, ou un réseau au nom inconnu a été rejoint.",
        meets: "L'appareil est connecté à un réseau Wi-Fi connu sans aide.",
        exceeds: "Explique aussi ce qu'il faut éviter sur un Wi-Fi public."
      },
      {
        name: "Trouver le site officiel",
        objective: "O4",
        notYet: "Le site ouvert est une publicité ou n'est pas le site du lieu lui-même.",
        meets: "Le site officiel du lieu est trouvé par une recherche, avec ses horaires et son adresse.",
        exceeds: "L'adresse web a été lue et vérifiée avant de toucher."
      },
      {
        name: "Utiliser le navigateur",
        objective: "O3",
        notYet: "Une seule page a été ouverte, ou l'apprenant n'a pas pu revenir à la première page.",
        meets: "Un deuxième onglet montre la météo de demain, et l'apprenant passe d'un onglet à l'autre.",
        exceeds: "Agrandit aussi le texte à une taille confortable et utilise le bouton retour."
      },
      {
        name: "Adresse sûre et favori",
        objective: "O5",
        notYet: "Aucun favori, ou un site d'imitation ou de publicité a été mis en favori.",
        meets: "Le site officiel est en favori et rouvert d'un seul geste.",
        exceeds: "Explique aussi comment le domaine montre que le site est le vrai."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille du plan de sortie",
      "Apprenants qui disent avoir utilisé internet seuls pour un vrai besoin, comme des horaires, la météo ou un site de santé, dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui disent avoir fermé une fausse fenêtre ou évité un site d'imitation",
      "Apprenants qui suivent ensuite un autre cours, comme « L'e-mail et la communication en ligne » ou « Les bases de la culture numérique »"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone, une tablette ou un ordinateur sur lequel l'apprenant peut s'exercer",
      "Le nom et le mot de passe d'un réseau Wi-Fi (maison, bibliothèque ou celui du programme)",
      "Du papier et un stylo pour noter les horaires et l'adresse du lieu",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Écrivez le nom et le mot de passe du Wi-Fi du programme au tableau pour que les apprenants rejoignent le bon réseau et pas une imitation.",
      "Regroupez les apprenants par appareil (iPhone, Android ou ordinateur) pour que les étapes correspondent à ce qu'ils voient à l'écran.",
      "Utilisez un parc, une bibliothèque ou un musée du coin pour l'exercice de sortie, pour que le site officiel soit facile à vérifier.",
      "Montrez une image d'une fausse fenêtre de virus pour que les apprenants la reconnaissent, mais n'ouvrez jamais un vrai site d'arnaque en classe.",
      "Allez doucement avec les apprenants âgés : laissez-les faire chaque geste eux-mêmes au lieu de le faire à leur place."
    ]
  }
};
