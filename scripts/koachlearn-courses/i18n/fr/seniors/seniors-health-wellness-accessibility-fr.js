"use strict";

// Koach Learn course (French translation of seniors/seniors-health-wellness-accessibility.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026). Settings names differ by phone and by language, so lessons tell students to search Settings; French search words are given.

module.exports = {
  id: "seniors-health-wellness-accessibility-fr",
  lang: "fr",
  translationOf: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Santé, bien-être et accessibilité avec la technologie",
  skills: "Agrandir le texte, Utiliser la loupe et la lecture à voix haute, Activer les sous-titres, Créer des rappels de médicaments, Préparer ses questions pour le médecin avec l'IA, Trouver des informations de santé fiables",
  outcome: "régler votre téléphone ou votre tablette pour mieux voir et mieux entendre, créer un rappel quotidien de médicament et utiliser un assistant IA pour préparer une liste claire de questions pour votre prochaine visite chez le médecin.",
  about: [
    "Ce cours s'adresse aux personnes âgées qui veulent que la technologie aide leurs yeux, leurs oreilles et leur santé, au lieu de leur compliquer la vie. Vous n'avez rien à acheter : la plupart de ces outils sont déjà sur votre téléphone ou votre tablette.",
    "Dans le chapitre 1, vous agrandirez le texte, utiliserez votre téléphone comme loupe, lui ferez lire du texte à voix haute et activerez les sous-titres. Dans le chapitre 2, vous créerez des rappels de médicaments, utiliserez l'IA pour préparer une visite chez le médecin et apprendrez où trouver des informations de santé fiables.",
    "Chaque leçon dure environ cinq minutes. Un proche peut vous aider pour les réglages la première fois. Ce cours ne donne pas de conseils médicaux : suivez toujours les instructions de votre médecin et de votre pharmacien. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rendez votre téléphone plus facile à utiliser en changeant un réglage pour la vue ou l'ouïe, créez un rappel quotidien pour un médicament ou une courte marche, et utilisez un assistant IA pour transformer vos inquiétudes de santé en une liste courte et claire de questions à apporter à votre prochain rendez-vous médical, sans aucun numéro privé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées qui gèrent elles-mêmes leur santé et leurs médicaments, et dont la vue ou l'audition peut changer. Beaucoup voient plus d'un médecin et prennent plusieurs médicaments.",
    startingPoint: "Elles ont un smartphone ou une tablette et s'en servent pour appeler et envoyer des SMS. Beaucoup trouvent le texte trop petit ou les voix difficiles à entendre, et n'ont jamais exploré les réglages d'accessibilité, les rappels qui se répètent ou les assistants IA.",
    gap: "Un texte trop petit et un son difficile à entendre font abandonner des téléphones qui pourraient aider à rester en bonne santé. Rendre le téléphone plus facile à voir et à entendre, utiliser des rappels pour les médicaments, préparer des questions claires pour le médecin et vérifier les informations de santé sur un site de confiance favorisent l'autonomie et de meilleures consultations, sans laisser l'IA remplacer le médecin.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : iPhone, téléphones Android et tablettes ; les noms des menus changent, donc les apprenants font une recherche dans les Réglages",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille",
      "Santé : l'IA sert à se préparer, jamais à poser un diagnostic ; pour les médicaments, on suit le médecin et le pharmacien",
      "Vie privée : aucun nom, date de naissance ou numéro d'assurance dans les consignes données à l'IA"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec l'application Réglages de votre téléphone ou de votre tablette", action: "agrandir le texte, le mettre en gras et zoomer sur un écran", standard: "jusqu'à ce que le texte soit agréable à lire" },
    { id: "O2", condition: "Face à de petits caractères, comme sur l'étiquette d'un médicament", action: "utiliser le téléphone comme loupe et activer la lecture à voix haute", standard: "pour pouvoir lire ou entendre le texte" },
    { id: "O3", condition: "Quand les voix des vidéos ou des appels sont difficiles à entendre", action: "activer les sous-titres et trouver les options d'audition de votre téléphone", standard: "pour que les mots s'affichent à l'écran" },
    { id: "O4", condition: "À partir d'un médicament ou d'une habitude de santé", action: "créer un rappel quotidien qui se répète sur votre téléphone", standard: "à l'heure indiquée par votre médecin ou votre pharmacien, en vérifiant qu'il est bien créé" },
    { id: "O5", condition: "Avant une visite chez le médecin", action: "utiliser un assistant IA pour transformer vos inquiétudes en une courte liste de questions claires", standard: "sans numéros privés et sans changer de médicament à cause de l'IA" },
    { id: "O6", condition: "Face à une information de santé venant de l'IA ou d'un site web", action: "la vérifier auprès d'une source de confiance comme MedlinePlus, votre médecin ou votre pharmacien", standard: "avant d'agir" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Rendre votre appareil plus facile à voir et à entendre",
      lessons: [
        {
          objectives: ["O1"],
          title: "Agrandir le texte pour mieux lire",
          minutes: 5,
          goal: "Rendre le texte de votre téléphone ou tablette plus grand et plus gras.",
          text: [
            "Un texte trop petit est l'une des raisons les plus fréquentes pour lesquelles on abandonne un téléphone. La bonne nouvelle : tous les smartphones et tablettes permettent d'agrandir le texte, et beaucoup permettent aussi de le mettre en gras.",
            "Les noms des menus changent d'un téléphone à l'autre, alors le plus simple est de chercher. Ouvrez l'application Réglages ou Paramètres (souvent une roue dentée grise), touchez la barre de recherche en haut et tapez « taille du texte » ou « taille de police ». Touchez le résultat et faites glisser la barre vers la droite jusqu'à ce que le texte soit confortable. Cherchez aussi un bouton « texte en gras » à côté.",
            "Certaines applications permettent aussi de zoomer en posant deux doigts sur l'écran et en les écartant. Rapprochez-les pour dézoomer."
          ],
          steps: ["Ouvrez l'application Réglages ou Paramètres.", "Touchez la barre de recherche en haut.", "Tapez « taille du texte » ou « taille de police ».", "Faites glisser la barre vers la droite jusqu'à un texte confortable.", "Activez « texte en gras » si vous le souhaitez."],
          words: [["Réglages (ou Paramètres)", "l'application où l'on change l'apparence et le fonctionnement du téléphone, en général une roue dentée."], ["Police", "le style et la taille des lettres à l'écran."], ["Zoom", "faire paraître plus grand ce qui est à l'écran."]],
          slides: [
            { title: "Texte trop petit ? Cela se règle", bullets: ["Tous les téléphones et tablettes peuvent agrandir le texte", "Beaucoup peuvent aussi le mettre en gras"] },
            { title: "Cherchez dans les Réglages", bullets: ["Ouvrez Réglages ou Paramètres (la roue dentée)", "Cherchez « taille du texte » ou « taille de police »", "Faites glisser la barre vers la droite"] },
            { title: "Zoomer avec deux doigts", bullets: ["Écartez deux doigts pour zoomer", "Rapprochez-les pour dézoomer"] }
          ],
          tryIt: "Ouvrez les Réglages, cherchez « taille du texte » et agrandissez votre texte d'un ou deux crans. Ouvrez vos messages ou vos e-mails pour voir la différence.",
          youCanNow: "rendre le texte de votre appareil plus grand et plus gras.",
          quickCheck: [
            { objective: "O1", q: "Dans beaucoup d'applications, que fait le fait d'écarter deux doigts sur l'écran ?", options: ["Cela zoome", "Cela éteint le téléphone", "Cela passe un appel", "Cela supprime la page"], answer: 0, why: "Écarter deux doigts zoome ; les rapprocher fait dézoomer." },
            { objective: "O1", q: "Vous ne trouvez pas le menu de la taille du texte sur votre nouveau téléphone. Que faites-vous ?", options: ["Acheter un nouveau téléphone", "Abandonner", "Ouvrir les Réglages, toucher la barre de recherche et taper « taille du texte »", "Éteindre et rallumer le téléphone"], answer: 2, why: "Les noms des menus changent, donc chercher dans les Réglages est le moyen le plus simple de trouver le réglage." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Votre téléphone comme loupe et comme lecteur",
          minutes: 5,
          goal: "Utiliser votre téléphone pour grossir les petits caractères et lire du texte à voix haute.",
          text: [
            "L'appareil photo de votre téléphone peut servir de loupe pour les étiquettes de médicaments, les menus et les tickets de caisse. Les iPhone ont une application appelée Loupe. Sur beaucoup de téléphones Android, vous pouvez utiliser le zoom de l'Appareil photo, ou chercher « loupe » ou « agrandissement » dans les Paramètres.",
            "Les téléphones peuvent aussi lire du texte à voix haute. Cherchez « contenu énoncé » ou « sélectionner pour prononcer » dans les Réglages et activez-le. Vous pourrez alors sélectionner un texte et choisir Énoncer ou Lire. Google Lens et certains assistants IA peuvent aussi lire à voix haute une page prise en photo.",
            "Allumez la lampe si la lumière est faible, et tenez le téléphone immobile à quelques centimètres au-dessus de la page."
          ],
          steps: ["Ouvrez Loupe, ou l'Appareil photo et zoomez.", "Tenez le téléphone à quelques centimètres au-dessus des petits caractères.", "Allumez la lampe si besoin.", "Pour écouter un texte, cherchez « contenu énoncé » ou « sélectionner pour prononcer » dans les Réglages et activez-le.", "Sélectionnez le texte et choisissez Énoncer ou Lire."],
          words: [["Loupe", "un outil qui fait paraître plus grandes les petites choses à l'écran."], ["Lecture à voix haute", "quand le téléphone prononce à voix haute des mots écrits."]],
          slides: [
            { title: "Une loupe dans votre poche", bullets: ["Étiquettes de médicaments, menus, tickets", "iPhone : l'application Loupe", "Android : zoom de l'Appareil photo ou cherchez « loupe »"] },
            { title: "Laissez le téléphone vous lire", bullets: ["Cherchez « contenu énoncé » ou « sélectionner pour prononcer »", "Sélectionnez le texte, puis Énoncer ou Lire"] },
            { title: "Conseils", bullets: ["Allumez la lampe dans une pièce sombre", "Tenez le téléphone immobile au-dessus de la page"] }
          ],
          tryIt: "Utilisez votre téléphone pour grossir les petits caractères d'une étiquette d'aliment ou de médicament. Puis activez la lecture à voix haute et faites-vous lire un message par votre téléphone.",
          youCanNow: "grossir les petits caractères et faire lire du texte à voix haute par votre téléphone.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert l'application Loupe sur un iPhone ?", options: ["À prendre des selfies", "À rendre les appels plus forts", "À envoyer des photos", "À utiliser l'appareil photo comme une loupe"], answer: 3, why: "Loupe transforme l'appareil photo en loupe pour les petits caractères." },
            { objective: "O2", q: "Vous voulez que votre téléphone vous lise un long article à voix haute. Que cherchez-vous dans les Réglages ?", options: ["« Fond d'écran »", "« Contenu énoncé » ou « sélectionner pour prononcer »", "« Batterie »", "« Sonnerie »"], answer: 1, why: "Activer le contenu énoncé ou sélectionner pour prononcer vous permet de sélectionner un texte et de choisir Énoncer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sous-titres et aide à l'audition",
          minutes: 5,
          goal: "Activer les sous-titres pour lire ce qui est dit.",
          text: [
            "Si les voix des vidéos ou des appels sont difficiles à entendre, les sous-titres affichent les mots à l'écran pendant qu'ils sont prononcés.",
            "Beaucoup de téléphones ont une fonction qui ajoute des sous-titres à presque toutes les vidéos ou sons, appelée Sous-titres instantanés (Live Captions). Cherchez « sous-titres » dans les Réglages pour la trouver et l'activer. Sur YouTube, touchez le bouton CC sur une vidéo. Beaucoup d'applications d'appel vidéo ont aussi un bouton de sous-titres.",
            "Les téléphones peuvent aussi se connecter par Bluetooth à beaucoup d'appareils auditifs modernes. Cherchez « audition » ou « appareils auditifs » dans les Réglages pour voir ce que votre téléphone propose, et demandez à votre audioprothésiste quels réglages conviennent à vos appareils."
          ],
          steps: ["Ouvrez les Réglages et cherchez « sous-titres ».", "Activez les Sous-titres instantanés ou les sous-titres.", "Sur YouTube, touchez CC sur la vidéo.", "Pendant les appels vidéo, cherchez un bouton de sous-titres.", "Cherchez « audition » dans les Réglages pour les options d'appareils auditifs."],
          words: [["Sous-titres", "des mots affichés à l'écran pendant que les gens parlent."], ["Bluetooth", "un moyen sans fil de relier votre téléphone à des appareils auditifs ou des haut-parleurs."]],
          slides: [
            { title: "Lisez ce qui est dit", bullets: ["Les sous-titres affichent les paroles à l'écran"] },
            { title: "Activez les sous-titres", bullets: ["Cherchez « sous-titres » dans les Réglages", "YouTube : touchez CC", "Appels vidéo : cherchez un bouton de sous-titres"] },
            { title: "Appareils auditifs", bullets: ["Beaucoup se connectent par Bluetooth", "Cherchez « audition » dans les Réglages", "Demandez à votre audioprothésiste"] }
          ],
          tryIt: "Cherchez « sous-titres » dans vos Réglages et activez-les, ou ouvrez une vidéo YouTube et touchez CC. Regardez une minute avec les sous-titres.",
          youCanNow: "activer les sous-titres sur votre appareil et trouver les réglages d'audition.",
          quickCheck: [
            { objective: "O3", q: "Que font les Sous-titres instantanés (Live Captions) ?", options: ["Ils ajoutent des sous-titres à presque toutes les vidéos et tous les sons du téléphone", "Ils enregistrent vos appels", "Ils prennent des photos", "Ils montent le volume"], answer: 0, why: "Les Sous-titres instantanés affichent à l'écran les mots des vidéos et des sons." },
            { objective: "O3", q: "Vous voulez connecter vos appareils auditifs à votre téléphone. Quelle est une bonne première étape ?", options: ["Désactiver le Bluetooth", "Acheter de nouveaux appareils auditifs", "Chercher « audition » dans les Réglages et demander à votre audioprothésiste", "Couper la sonnerie"], answer: 2, why: "Les Réglages montrent les options d'audition, et votre audioprothésiste sait lesquelles conviennent à vos appareils." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Rendre votre appareil plus facile à voir et à entendre",
        questions: [
          { objective: "O1", q: "Les noms des menus changent selon les téléphones. Quel est le moyen le plus simple de trouver le réglage de taille du texte ?", options: ["Redémarrer le téléphone", "Acheter un nouveau téléphone", "Ouvrir les Réglages et chercher « taille du texte »", "Appeler un inconnu"], answer: 2, why: "La barre de recherche des Réglages le trouve sur tous les téléphones." },
          { objective: "O1", q: "Comment zoomer sur beaucoup d'écrans ?", options: ["Écarter deux doigts sur l'écran", "Secouer le téléphone", "Appuyer sur le bouton marche/arrêt", "Retourner le téléphone"], answer: 0, why: "Écarter deux doigts agrandit l'affichage." },
          { objective: "O2", q: "Vous n'arrivez pas à lire les petits caractères d'une boîte de médicament. Qu'est-ce qui peut aider ?", options: ["L'application de musique", "La calculatrice", "L'horloge", "La loupe du téléphone ou le zoom de l'appareil photo"], answer: 3, why: "La loupe grossit les petits caractères." },
          { objective: "O3", q: "Que sont les sous-titres ?", options: ["Des photos de nourriture", "Des mots affichés à l'écran pendant que les gens parlent", "Un type d'alarme", "Des numéros de téléphone"], answer: 1, why: "Les sous-titres aident quand les voix sont difficiles à entendre." },
          { objective: "O3", q: "Sur YouTube, quel bouton active les sous-titres ?", options: ["Partager", "CC", "J'aime", "S'abonner"], answer: 1, why: "CC veut dire « closed captions », c'est-à-dire sous-titres." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La technologie au service de votre santé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer des rappels de médicaments et de bien-être",
          minutes: 5,
          goal: "Créer un rappel quotidien répété pour un médicament ou une bonne habitude.",
          text: [
            "Un rappel quotidien sur votre téléphone peut vous aider à prendre vos médicaments à l'heure, à boire de l'eau ou à faire une courte marche.",
            "Le plus simple est de demander à l'assistant vocal du téléphone : « Rappelle-moi de prendre mon comprimé du matin tous les jours à 8 h. » Vous pouvez aussi ouvrir l'application Horloge ou Rappels, ajouter une alarme ou un rappel, et choisir qu'il se répète tous les jours.",
            "Un rappel vous aide seulement à vous souvenir ; il ne vous dit pas quoi prendre. Suivez toujours les instructions de votre médecin et de votre pharmacien, et demandez à votre pharmacien si vous avez un doute sur l'heure de prise. Certaines pharmacies proposent aussi des rappels gratuits de renouvellement par SMS ou par application."
          ],
          steps: ["Demandez à votre assistant vocal, ou ouvrez l'application Horloge ou Rappels.", "Dites ou tapez ce qu'il faut retenir et l'heure.", "Choisissez qu'il se répète tous les jours.", "Vérifiez qu'il est bien créé.", "Suivez les instructions de votre médecin et de votre pharmacien."],
          words: [["Rappel répété", "un rappel qui revient chaque jour ou chaque semaine sans avoir à le recréer."], ["Renouvellement", "obtenir à nouveau un médicament que vous prenez déjà."]],
          slides: [
            { title: "Les rappels quotidiens aident", bullets: ["Les médicaments à l'heure", "Boire de l'eau", "Une courte marche"] },
            { title: "Créez-en un", bullets: ["« Rappelle-moi de prendre mon comprimé tous les jours à 8 h. »", "Ou utilisez l'application Horloge ou Rappels", "Choisissez « tous les jours »"] },
            { title: "À retenir", bullets: ["Le rappel ne vous dit pas quoi prendre", "Suivez votre médecin et votre pharmacien", "Demandez à votre pharmacie les rappels de renouvellement"] }
          ],
          tryIt: "Créez un rappel quotidien répété pour un médicament que vous prenez déjà, ou pour une bonne habitude comme une marche de 10 minutes.",
          youCanNow: "créer un rappel quotidien répété pour un médicament ou une bonne habitude.",
          quickCheck: [
            { objective: "O4", q: "Que fait un rappel qui se répète ?", options: ["Il sonne une seule fois", "Il vous dit quel médicament prendre", "Il commande vos renouvellements", "Il revient chaque jour à l'heure que vous avez choisie"], answer: 3, why: "Un rappel qui se répète revient chaque jour ; il vous aide à vous souvenir mais ne vous dit pas quoi prendre." },
            { objective: "O4", q: "Vous ne savez pas si vous devez prendre un comprimé avant ou après le petit-déjeuner. À qui demandez-vous ?", options: ["À l'application de rappels", "À votre pharmacien", "À un ami", "À un site qui vend des vitamines"], answer: 1, why: "Suivez les instructions de votre médecin et de votre pharmacien, et demandez à votre pharmacien pour l'heure de prise." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Préparer une visite chez le médecin avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant IA pour transformer vos inquiétudes en une liste claire de questions pour votre médecin.",
          text: [
            "Les visites chez le médecin peuvent sembler pressées, et on oublie facilement ce qu'on voulait demander. Un assistant IA peut vous aider à mettre de l'ordre dans vos idées avant d'y aller.",
            "Décrivez vos inquiétudes en termes généraux, sans votre nom, votre date de naissance ni vos numéros d'assurance : « J'ai un contrôle la semaine prochaine. Je suis plus fatigué que d'habitude, j'ai mal aux genoux dans les escaliers et je veux poser une question sur mon médicament pour la tension. Aide-moi à faire une courte liste de questions claires pour mon médecin. »",
            "L'IA sert à préparer, pas à poser un diagnostic. Ne changez ni n'arrêtez aucun médicament à cause de ce que dit une IA. Apportez votre liste à la visite, notez les réponses du médecin ou venez avec un proche pour vous aider."
          ],
          steps: ["Écrivez vos inquiétudes en termes généraux, sans numéros privés.", "Demandez à l'IA une courte liste de questions claires.", "Mettez la question la plus importante en premier.", "Apportez la liste et notez les réponses.", "Ne changez jamais un médicament à cause de l'IA ; demandez à votre médecin."],
          words: [["Diagnostiquer", "décider quelle maladie ou quel problème a une personne ; seul un professionnel de santé peut le faire."]],
          slides: [
            { title: "Les visites semblent pressées", bullets: ["On oublie facilement ses questions", "L'IA peut vous aider à vous préparer"] },
            { title: "Demandez une liste de questions", bullets: ["Décrivez vos inquiétudes en termes généraux", "Ni nom, ni date de naissance, ni numéro d'assurance", "La question la plus importante en premier"] },
            { title: "Préparer, pas diagnostiquer", bullets: ["L'IA ne remplace pas votre médecin", "Ne changez jamais un médicament à cause de l'IA", "Notez les réponses du médecin"] }
          ],
          tryIt: "Pensez à votre prochain rendez-vous. Demandez à un assistant IA de transformer deux ou trois de vos inquiétudes en une courte liste de questions. Vérifiez qu'elle ne contient aucun numéro privé, puis enregistrez-la ou imprimez-la.",
          youCanNow: "préparer avec l'IA, en toute sécurité, une liste claire de questions pour votre médecin.",
          quickCheck: [
            { objective: "O5", q: "À quoi sert l'IA avant une visite chez le médecin ?", options: ["À diagnostiquer votre maladie", "À changer votre médicament", "À organiser vos inquiétudes en questions claires", "À réserver une opération"], answer: 2, why: "L'IA sert à préparer vos questions, pas à poser un diagnostic." },
            { objective: "O5", q: "Vous écrivez vos inquiétudes pour l'IA. Que laissez-vous de côté ?", options: ["Comment vous vous sentez", "Votre nom, votre date de naissance et vos numéros d'assurance", "Que vous avez un bilan la semaine prochaine", "Que vos genoux vous font mal"], answer: 1, why: "Décrivez vos inquiétudes avec des mots généraux, sans numéros privés." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Trouver des informations de santé fiables",
          minutes: 5,
          goal: "Vérifier une information de santé sur une source fiable et gratuite.",
          text: [
            "Les informations de santé en ligne vont de l'excellent au dangereux. Les assistants IA peuvent aussi se tromper sur la santé. Vérifiez donc ce que vous lisez auprès d'une source fiable.",
            "MedlinePlus (medlineplus.gov) est un site gratuit d'information sur la santé de la National Library of Medicine (Bibliothèque nationale de médecine des États-Unis), qui fait partie des National Institutes of Health (NIH, les instituts nationaux de santé américains). Il n'a pas de publicité et explique les maladies, les examens et les médicaments en langage simple ; il est surtout en anglais, avec une partie en espagnol. Votre cabinet médical et votre pharmacien sont aussi des sources fiables.",
            "Méfiez-vous des sites qui vendent un remède, promettent des résultats miracles ou vous disent d'arrêter vos médicaments. Quand une lecture vous inquiète, notez-la et posez la question à votre médecin ou à votre pharmacien."
          ],
          steps: ["Repérez les affirmations de santé venant de l'IA ou de sites web.", "Vérifiez-les sur medlineplus.gov.", "Demandez à votre médecin ou pharmacien pour tout ce qui vous inquiète.", "Évitez les sites qui vendent des remèdes ou promettent des miracles."],
          words: [["Source fiable", "un endroit sûr pour s'informer, comme un site de santé public ou votre propre médecin."], ["MedlinePlus", "un site gratuit et sans publicité d'information sur la santé, de la National Library of Medicine des États-Unis."]],
          slides: [
            { title: "Toutes les infos de santé ne se valent pas", bullets: ["Les sites peuvent se tromper", "L'IA aussi"] },
            { title: "MedlinePlus : medlineplus.gov", bullets: ["Gratuit et sans publicité", "De la National Library of Medicine des États-Unis", "Des explications en langage simple"] },
            { title: "Signaux d'alarme", bullets: ["Vendre un remède", "Promettre des miracles", "« Arrêtez vos médicaments »"] }
          ],
          sources: [{ name: "À propos de MedlinePlus (National Library of Medicine, en anglais)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Tâche finale : changez un réglage pour mieux voir ou entendre sur votre téléphone, créez un rappel quotidien pour un médicament ou une marche, et utilisez l'IA pour faire une courte liste de questions, sans numéros privés, pour votre prochaine visite chez le médecin. Cherchez un sujet de votre liste sur medlineplus.gov.",
          youCanNow: "rendre votre appareil plus facile à utiliser, garder vos bonnes habitudes de santé, préparer vos rendez-vous et trouver des informations de santé fiables.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce que MedlinePlus ?", options: ["Un magasin qui vend des médicaments", "Une application de santé payante", "Un assistant IA", "Un site d'information sur la santé gratuit et sans publicité de la National Library of Medicine"], answer: 3, why: "MedlinePlus explique les maladies, les examens et les médicaments avec des mots simples, sans publicité." },
            { objective: "O6", q: "Un site dit qu'une tisane va guérir votre tension et que vous pouvez arrêter votre médicament. Que faites-vous ?", options: ["Le considérer comme un signal d'alarme, le noter et en parler à votre médecin", "Arrêter votre médicament et essayer la tisane", "En acheter pour un an", "Le partager avec vos amis"], answer: 0, why: "Les sites qui promettent une guérison ou disent d'arrêter un médicament sont des signaux d'alarme ; demandez à votre médecin ou à votre pharmacien." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La technologie au service de votre santé",
        questions: [
          { objective: "O4", q: "Comment faire revenir un rappel chaque jour ?", options: ["Supprimer l'application", "Le créer une fois et espérer", "Éteindre le téléphone", "Choisir qu'il se répète tous les jours"], answer: 3, why: "Un rappel répété revient chaque jour." },
          { objective: "O4", q: "Un rappel du téléphone vous dit-il quel médicament prendre ?", options: ["Non, suivez votre médecin et votre pharmacien", "Oui, toujours", "Seulement le week-end", "Oui, s'il sonne fort"], answer: 0, why: "Il vous aide seulement à vous souvenir." },
          { objective: "O5", q: "Que faut-il laisser de côté quand vous demandez à l'IA de préparer une visite ?", options: ["Vos inquiétudes", "Le mot « médecin »", "Votre nom, votre date de naissance et vos numéros d'assurance", "La date de la visite"], answer: 2, why: "Les numéros privés ne doivent jamais aller dans une IA." },
          { objective: "O5", q: "L'IA suggère que vous n'avez peut-être pas besoin d'un médicament. Que faites-vous ?", options: ["J'arrête de le prendre", "Je demande à un inconnu", "Je double la dose", "Je demande à mon médecin ; je ne change jamais un médicament à cause de l'IA"], answer: 3, why: "Seul votre médecin doit changer votre traitement." },
          { objective: "O6", q: "Lequel est un site gratuit et sans publicité d'information sur la santé du gouvernement américain ?", options: ["Une publicité", "Un site qui vend un remède miracle", "MedlinePlus", "Une publication sur les réseaux sociaux"], answer: 2, why: "MedlinePlus vient de la National Library of Medicine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Santé, bien-être et accessibilité avec la technologie",
    questions: [
      { objective: "O1", q: "L'application Réglages est en général représentée par :", options: ["Un appareil photo", "Une roue dentée", "Un téléphone", "Une horloge"], answer: 1, why: "Les Réglages utilisent en général une roue dentée." },
      { objective: "O1", q: "Pour trouver vite le réglage de taille du texte, vous :", options: ["Cherchez « taille du texte » dans les Réglages", "Redémarrez le téléphone", "Ouvrez l'appareil photo", "Appelez votre banque"], answer: 0, why: "La recherche marche sur tous les téléphones." },
      { objective: "O1", q: "Faire glisser la barre de taille du texte vers la droite rend le texte :", options: ["Plus grand", "Plus petit", "Invisible", "Rouge"], answer: 0, why: "Vers la droite, c'est plus grand." },
      { objective: "O1", q: "Rapprocher deux doigts sur l'écran :", options: ["Zoome", "Dézoome", "Éteint le téléphone", "Prend une photo"], answer: 1, why: "On rapproche pour dézoomer et on écarte pour zoomer." },
      { objective: "O2", q: "L'application iPhone qui transforme l'appareil photo en loupe s'appelle :", options: ["Météo", "Calculette", "Loupe", "Musique"], answer: 2, why: "Loupe grossit les petits caractères." },
      { objective: "O2", q: "Dans une pièce sombre, la loupe marche mieux si vous :", options: ["Secouez le téléphone", "Cachez l'objectif", "Éloignez le téléphone", "Allumez la lampe"], answer: 3, why: "La lumière aide l'appareil photo à bien voir." },
      { objective: "O2", q: "Pour que le téléphone lise du texte à voix haute, on cherche dans les Réglages :", options: ["« sonnerie »", "« fond d'écran »", "« contenu énoncé » ou « sélectionner pour prononcer »", "« batterie »"], answer: 2, why: "Ce sont les noms habituels du réglage de lecture à voix haute." },
      { objective: "O3", q: "Les sous-titres sont :", options: ["Des mots à l'écran pendant que les gens parlent", "Des images", "Des numéros de téléphone", "Des mots de passe"], answer: 0, why: "Les sous-titres affichent les paroles." },
      { objective: "O3", q: "On trouve les Sous-titres instantanés en cherchant dans les Réglages :", options: ["« contacts »", "« appareil photo »", "« horloge »", "« sous-titres »"], answer: 3, why: "Chercher « sous-titres » trouve les réglages de sous-titres." },
      { objective: "O3", q: "Beaucoup d'appareils auditifs modernes se connectent aux téléphones par :", options: ["Un trombone", "Bluetooth", "Une ligne fixe", "Un chargeur"], answer: 1, why: "Bluetooth est une connexion sans fil." },
      { objective: "O3", q: "Qui doit vous aider à choisir les réglages de vos appareils auditifs ?", options: ["Une publicité", "Votre audioprothésiste", "Un inconnu sur internet", "Personne"], answer: 1, why: "Il connaît vos appareils et votre audition." },
      { objective: "O4", q: "Quelle demande à voix haute crée un rappel quotidien de médicament ?", options: ["« Médicament ? »", "« Comprimé. »", "« Bonjour. »", "« Rappelle-moi de prendre mon comprimé tous les jours à 8 h. »"], answer: 3, why: "Elle dit quoi, quand et à quelle fréquence." },
      { objective: "O4", q: "Si vous ne savez pas quand prendre un médicament, demandez à :", options: ["Votre pharmacien", "Une IA seulement", "Un voisin", "Une publicité"], answer: 0, why: "Les pharmaciens sont les experts des médicaments." },
      { objective: "O5", q: "Avant une visite chez le médecin, l'IA est utile pour :", options: ["Changer votre traitement", "Vous diagnostiquer", "Organiser vos questions", "Rédiger des ordonnances"], answer: 2, why: "L'IA aide à préparer, pas à diagnostiquer." },
      { objective: "O5", q: "« Diagnostiquer » veut dire :", options: ["Agrandir le texte", "Écrire une liste", "Créer un rappel", "Décider quelle maladie a une personne"], answer: 3, why: "Seul un professionnel de santé peut diagnostiquer." },
      { objective: "O5", q: "Qu'est-ce qui ne doit PAS figurer dans votre consigne santé pour l'IA ?", options: ["« J'ai mal aux genoux »", "« Je suis fatigué »", "Votre numéro d'assurance", "« J'ai un contrôle la semaine prochaine »"], answer: 2, why: "Les numéros d'assurance sont privés." },
      { objective: "O5", q: "Pendant la visite, une bonne habitude est de :", options: ["Laisser votre liste à la maison", "Noter les réponses du médecin", "Ne rien demander", "Ne compter que sur votre mémoire"], answer: 1, why: "Noter les réponses aide à s'en souvenir." },
      { objective: "O6", q: "MedlinePlus est géré par :", options: ["La National Library of Medicine", "Une entreprise de compléments alimentaires", "Un réseau social", "Une compagnie de téléphone"], answer: 0, why: "C'est un service de la NLM, au sein des NIH." },
      { objective: "O6", q: "Un site qui promet un remède miracle est :", options: ["Un signal d'alarme", "Toujours digne de confiance", "Géré par votre médecin", "Des soins gratuits"], answer: 0, why: "Les promesses de miracle sont des signaux d'alerte." },
      { objective: "O6", q: "Une lecture sur votre santé vous inquiète. Que faire de mieux ?", options: ["Arrêter tous vos médicaments", "La noter et en parler à votre médecin ou pharmacien", "Ignorer votre médecin", "Acheter le produit"], answer: 1, why: "Votre médecin ou pharmacien peut vous expliquer en toute sécurité." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plus facile à voir ou à entendre",
        objective: "O1",
        notYet: "Aucun réglage n'a été changé.",
        meets: "Un réglage pour la vue ou l'audition a été changé, comme un texte plus grand ou les sous-titres.",
        exceeds: "Deux réglages ou plus ont été changés, et vous pouvez montrer à quelqu'un d'autre comment faire."
      },
      {
        name: "Rappel quotidien",
        objective: "O4",
        notYet: "Pas de rappel, ou il ne se répète pas.",
        meets: "Un rappel quotidien qui se répète pour un médicament ou une marche, vérifié à l'écran.",
        exceeds: "L'heure correspond à ce que le médecin ou le pharmacien a dit."
      },
      {
        name: "Questions claires",
        objective: "O5",
        notYet: "Pas de liste, ou des questions vagues.",
        meets: "Une liste courte et claire de questions faite avec l'aide de l'IA, la plus importante en premier.",
        exceeds: "Il y a de la place pour noter les réponses du médecin."
      },
      {
        name: "Numéros privés protégés",
        objective: "O5",
        notYet: "La consigne ou la liste contient un nom, une date de naissance ou un numéro d'assurance.",
        meets: "Aucun numéro privé dans la consigne ni dans la liste.",
        exceeds: "Les inquiétudes sont décrites avec des mots généraux qui donnent quand même une image claire au médecin."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui utilisent encore leur rappel de médicament ou de bien-être au suivi à 30 jours",
      "Apprenants qui apportent une liste écrite de questions à une visite chez le médecin dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou une tablette avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Quelque chose en petits caractères pour s'exercer, comme un menu ou une boîte de médicament vide",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Regroupez les apprenants par type de téléphone pour que les réglages à l'écran correspondent, et aidez chacun à faire une recherche dans les Réglages.",
      "Ne donnez jamais de conseil médical ; renvoyez les questions sur les médicaments et la santé au médecin ou au pharmacien de l'apprenant.",
      "Rappelez aux apprenants de ne pas mettre de noms, de dates de naissance ni de numéros d'assurance dans les consignes données à l'IA.",
      "Certains apprenants peuvent être gênés par leur vue ou leur audition ; gardez un ton pratique et discret.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
