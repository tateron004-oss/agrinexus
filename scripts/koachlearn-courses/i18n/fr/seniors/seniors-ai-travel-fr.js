"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-travel.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026 on tsa.gov/real-id).

module.exports = {
  id: "seniors-ai-travel-fr",
  lang: "fr",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "L'IA, compagne de voyage",
  skills: "Préparer un itinéraire avec l'IA, Vérifier les informations de voyage sur les sites officiels, Faire une liste de bagages, Utiliser les applications de cartes et de traduction, Voyager en sécurité et rester joignable",
  outcome: "utiliser un assistant IA pour préparer un court voyage à un rythme confortable, vérifier les informations importantes sur les sites officiels, faire une liste de bagages et utiliser les cartes et la traduction de votre téléphone en route.",
  about: [
    "Ce cours s'adresse aux personnes âgées qui veulent voyager, que ce soit pour rendre visite à leurs petits-enfants à l'autre bout du pays, faire un voyage organisé en car ou enfin découvrir un endroit dont elles ont toujours rêvé.",
    "Vous utiliserez un assistant IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini pour préparer un voyage tranquille adapté à votre énergie et à vos besoins, puis vous vérifierez les informations importantes (règles d'identité, horaires, prix) sur les sites officiels. Vous utiliserez aussi les cartes, la traduction et le partage de position sur votre téléphone.",
    "Chaque leçon dure environ cinq minutes. Les exercices « Essayez maintenant » construisent un vrai plan pour un voyage que vous aimeriez faire. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez un voyage de trois jours avec un assistant IA : un plan jour par jour à un rythme confortable avec du temps de repos, une liste de bagages avec vos médicaments et votre pièce d'identité, et trois informations vérifiées sur des sites officiels (comme la pièce d'identité nécessaire pour prendre l'avion et les horaires d'un lieu que vous visiterez). Partagez le plan avec un proche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées qui veulent voyager, près ou loin, pour rendre visite à la famille, découvrir de nouveaux endroits ou faire une courte pause, souvent à un rythme plus lent et avec des besoins de santé comme des médicaments quotidiens ou une marche limitée.",
    startingPoint: "Elles ont déjà voyagé, souvent avec des cartes en papier, une agence de voyage ou la famille qui organisait pour elles. Beaucoup utilisent un smartphone mais n'ont jamais utilisé d'assistant IA, d'itinéraire dans une application de cartes, d'application de traduction ni de partage de position.",
    gap: "Préparer un voyage peut sembler écrasant, et des erreurs comme une mauvaise pièce d'identité, un lieu fermé ou des médicaments oubliés peuvent le gâcher. Un assistant IA et les outils du téléphone aident les seniors à préparer à leur rythme et à voyager de façon plus autonome, à condition de vérifier les informations sur les sites officiels et de se méfier des arnaques au voyage.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un smartphone avec Internet, une application de cartes et une application de traduction",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille",
      "Les règles de voyage, les horaires et les prix changent ; les apprenants vérifient sur les sites officiels comme tsa.gov",
      "Santé et vie privée : pour les médicaments, on suit les conseils du pharmacien ; pas d'opérations bancaires sur un Wi-Fi public"
    ],
    prerequisites: "« L'IA pour les seniors : utiliser un assistant IA » est utile avant, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un assistant IA gratuit", action: "demander un itinéraire jour par jour qui dit où, quand, qui part, vos centres d'intérêt et votre rythme", standard: "avec des temps de repos et pas plus d'activités que vous ne pouvez en faire confortablement" },
    { id: "O2", condition: "À partir d'un itinéraire fait par l'IA", action: "vérifier les informations importantes, comme les horaires, les prix et les règles d'identité, sur les sites officiels", standard: "en vérifiant au moins trois informations avant de compter dessus" },
    { id: "O3", condition: "À partir de votre voyage et de vos besoins de santé", action: "demander une liste de bagages classée par groupes qui comprend vos médicaments et votre pièce d'identité", standard: "avec les médicaments et la pièce d'identité dans votre bagage à main" },
    { id: "O4", condition: "Avec une application de cartes sur votre téléphone", action: "obtenir un itinéraire à pied, en voiture ou en transports en commun et suivre les indications vocales", standard: "avec votre hôtel enregistré en favori" },
    { id: "O5", condition: "Quand vous avez besoin d'une autre langue", action: "utiliser une application de traduction pour lire un panneau ou avoir une conversation simple", standard: "avec les besoins importants, comme les allergies, écrits à l'avance et vérifiés avec le personnel" },
    { id: "O6", condition: "Avant et pendant un voyage", action: "partager vos projets avec votre famille et repérer les arnaques au voyage", standard: "en réservant seulement sur des sites officiels ou auprès d'agences de confiance" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer votre voyage",
      lessons: [
        {
          objectives: ["O1"],
          title: "Préparer un itinéraire tranquille avec l'IA",
          minutes: 5,
          goal: "Demander à un assistant IA un plan de voyage jour par jour adapté à votre rythme.",
          text: [
            "Un itinéraire est un plan jour par jour pour un voyage. Un assistant IA peut en écrire un en quelques secondes et le modifier autant que vous voulez.",
            "Dites-lui où, quand, combien de temps, qui part et ce dont vous avez besoin : « Prépare un voyage tranquille de trois jours à Savannah, en Géorgie, en avril, pour deux personnes de plus de 70 ans. Nous aimons l'histoire et les jardins, nous marchons lentement et voulons nous reposer chaque après-midi. Pas plus de deux activités par jour. »",
            "Demandez des changements jusqu'à ce que cela vous convienne : « Ajoute un endroit pour s'asseoir et déjeuner près de chaque activité du matin. » « Quels lieux ont un ascenseur ou sont faciles d'accès avec une canne ? »"
          ],
          steps: ["Dites où, quand et combien de temps.", "Dites qui part et ce que vous aimez.", "Dites votre rythme et vos besoins, comme du repos ou une marche facile.", "Demandez des changements jusqu'à ce que cela vous convienne."],
          words: [["Itinéraire", "un plan jour par jour pour un voyage."], ["Accessible", "facile à atteindre et à utiliser pour les personnes qui ont du mal à marcher, à entendre ou à voir."]],
          slides: [
            { title: "Un plan en quelques secondes", bullets: ["Un itinéraire est un plan jour par jour", "L'IA l'écrit, vous l'adaptez"] },
            { title: "Dites à l'assistant", bullets: ["Où, quand, combien de temps", "Qui part et ce que vous aimez", "Votre rythme et vos besoins"] },
            { title: "Adaptez-le", bullets: ["« Ajoute un repos chaque après-midi. »", "« Quels lieux sont faciles avec une canne ? »"] }
          ],
          tryIt: "Choisissez un voyage que vous aimeriez faire. Demandez à un assistant IA un itinéraire tranquille de trois jours avec votre rythme et vos besoins, puis demandez un changement.",
          youCanNow: "demander à l'IA un plan de voyage adapté à votre rythme et à vos besoins.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un itinéraire de voyage ?", options: ["Une liste de bagages", "Un plan de voyage jour par jour", "Un billet d'avion", "Un formulaire d'assurance voyage"], answer: 1, why: "Un itinéraire est un plan de voyage jour par jour que l'IA peut préparer et modifier." },
            { objective: "O1", q: "L'itinéraire de l'IA prévoit quatre activités par jour et vous vous fatiguez vite. Que demandez-vous ?", options: ["\"Prévois une autre ville.\"", "Rien ; vous vous débrouillerez", "\"Rends-le plus long.\"", "\"Pas plus de deux activités par jour, avec un repos chaque après-midi.\""], answer: 3, why: "Demandez des changements jusqu'à ce que le plan convienne à votre rythme et à vos besoins." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vérifier les informations de voyage sur les sites officiels",
          minutes: 5,
          goal: "Vérifier les informations importantes d'un plan de voyage fait par l'IA avant de vous y fier.",
          text: [
            "Les plans de voyage de l'IA peuvent contenir des erreurs : un musée fermé, d'anciens horaires, de faux prix ou des règles qui ont changé. Vérifiez toujours les informations qui pourraient gâcher votre voyage.",
            "Vérifiez les horaires et les prix sur le site du lieu lui-même. Vérifiez les vols et les trains auprès de la compagnie aérienne ou ferroviaire. Pour l'identité : depuis le 7 mai 2025, les voyageurs qui prennent l'avion à l'intérieur des États-Unis doivent avoir un permis ou une carte d'identité conforme REAL ID, ou une autre pièce acceptée comme un passeport. Le site de la TSA, tsa.gov, donne la liste de toutes les pièces acceptées.",
            "Demandez à l'assistant : « Qu'est-ce que je dois revérifier dans ce plan ? » Il peut vous montrer les informations importantes, mais c'est vous qui les vérifiez sur les sites officiels."
          ],
          steps: ["Demandez à l'IA quelles informations revérifier.", "Vérifiez horaires et prix sur le site de chaque lieu.", "Vérifiez les horaires de vol ou de train auprès de la compagnie.", "Vérifiez les règles d'identité sur tsa.gov avant de prendre l'avion aux États-Unis."],
          words: [["REAL ID", "un permis de conduire ou une carte d'identité d'un État américain conforme aux règles fédérales ; il porte en général une étoile dans un coin."], ["TSA", "la Transportation Security Administration, l'agence qui contrôle les voyageurs dans les aéroports américains."]],
          slides: [
            { title: "Les plans de l'IA peuvent être dépassés", bullets: ["Lieux fermés", "Anciens horaires ou prix", "Règles qui ont changé"] },
            { title: "Vérifiez sur les sites officiels", bullets: ["Horaires et prix : le site du lieu", "Vols et trains : la compagnie", "Règles d'identité : tsa.gov"] },
            { title: "Prendre l'avion aux États-Unis", bullets: ["REAL ID ou autre pièce acceptée obligatoire depuis mai 2025", "Le passeport est accepté", "Liste complète sur tsa.gov"] }
          ],
          sources: [{ name: "TSA : REAL ID (en anglais)", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Demandez à l'assistant quelles informations de votre itinéraire revérifier. Puis vérifiez les horaires d'un lieu sur son propre site, et vérifiez si votre pièce d'identité est conforme REAL ID (cherchez l'étoile) ou ce que tsa.gov accepte d'autre. Si vous ne voyagez pas aux États-Unis, vérifiez les règles d'identité sur le site officiel de la compagnie ou du pays.",
          youCanNow: "vérifier sur les sites officiels les informations clés d'un plan de voyage fait par l'IA.",
          quickCheck: [
            { objective: "O2", q: "Où vérifiez-vous les horaires d'ouverture d'un musée ?", options: ["Sur le site du musée lui-même", "Seulement dans la réponse de l'IA", "Sur un forum de voyage", "Dans un vieux guide"], answer: 0, why: "L'IA peut donner d'anciens horaires ; le site du lieu lui-même a les horaires actuels." },
            { objective: "O2", q: "Vous prévoyez un vol à l'intérieur des États-Unis et vous n'êtes pas sûr que votre pièce d'identité soit acceptée. Que faites-vous ?", options: ["Espérer que ça ira", "Demander à l'IA et la croire", "Vérifier la liste des pièces acceptées sur tsa.gov", "Apporter une carte de bibliothèque"], answer: 2, why: "Le site de la TSA, tsa.gov, donne la liste de toutes les pièces d'identité acceptées pour prendre l'avion." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faire une liste de bagages intelligente",
          minutes: 4,
          goal: "Demander à l'IA une liste de bagages adaptée à votre voyage et à vos besoins de santé.",
          text: [
            "Une liste de bagages évite l'inquiétude classique du voyage : « Est-ce que j'ai oublié quelque chose ? » Demandez à l'assistant une liste selon votre voyage, la saison et les activités.",
            "Par exemple : « Fais une liste de bagages pour trois jours à Savannah en avril. Je prends des médicaments tous les jours et j'utilise des lunettes de lecture et un appareil auditif. Range-la par : papiers, médicaments et santé, vêtements, et appareils électroniques. »",
            "Gardez vos médicaments dans votre bagage à main, dans leurs boîtes d'origine, avec un peu plus que nécessaire en cas de retard, et emportez la liste de vos médicaments et le numéro de votre médecin. Votre pharmacien peut vous conseiller pour voyager avec des médicaments."
          ],
          steps: ["Dites à l'IA le lieu, la saison, la durée et les activités.", "Mentionnez vos besoins de santé, comme vos médicaments ou appareils auditifs.", "Demandez-lui de ranger la liste par catégories.", "Gardez médicaments et pièce d'identité dans votre bagage à main."],
          words: [["Bagage à main", "le sac que vous gardez avec vous dans l'avion, le car ou le train."]],
          slides: [
            { title: "Ne plus rien oublier", bullets: ["Demandez à l'IA une liste de bagages", "Selon le lieu, la saison et les activités"] },
            { title: "Rangez la liste", bullets: ["Papiers", "Médicaments et santé", "Vêtements et électronique"] },
            { title: "Les médicaments voyagent avec vous", bullets: ["Dans le bagage à main, boîtes d'origine", "Un peu plus en cas de retard", "La liste des médicaments et le numéro du médecin"] }
          ],
          tryIt: "Demandez à un assistant IA une liste de bagages rangée par catégories pour votre voyage, avec vos besoins de santé. Ajoutez ce qu'il a oublié, puis enregistrez ou imprimez la liste.",
          youCanNow: "faire avec l'IA une liste de bagages qui tient compte de vos besoins de santé.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi demander à l'IA de classer une liste de bagages par groupes ?", options: ["Pour que la liste soit plus longue", "Pour la vérifier facilement par partie, comme les papiers et les médicaments", "Pour emporter moins de choses", "Pour que l'IA se souvienne de votre voyage"], answer: 1, why: "Classer par papiers, médicaments, vêtements et appareils électroniques rend la liste facile à vérifier." },
            { objective: "O3", q: "Vous prenez des médicaments chaque jour. Comment les emportez-vous ?", options: ["Dans votre valise en soute", "En vrac dans un sac en plastique", "Juste assez pour chaque jour", "Dans votre bagage à main, dans leurs boîtes d'origine, avec un peu plus que nécessaire"], answer: 3, why: "Gardez vos médicaments dans votre bagage à main, dans leurs boîtes d'origine, avec un supplément en cas de retard." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer votre voyage",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un itinéraire ?", options: ["Un billet d'avion", "Une valise", "Un plan de voyage jour par jour", "Un passeport"], answer: 2, why: "Un itinéraire présente chaque jour du voyage." },
          { objective: "O1", q: "Quelle demande donnera le meilleur plan de voyage ?", options: ["« Prépare un voyage tranquille de 3 jours à Savannah en avril pour deux personnes de plus de 70 ans qui aiment les jardins et ont besoin d'un repos l'après-midi. »", "« voyage »", "« vacances »", "« partir quelque part »"], answer: 0, why: "Elle donne le lieu, la date, les personnes, les goûts et le rythme." },
          { objective: "O2", q: "L'IA dit qu'un musée ouvre à 9 h. Comment vérifier ?", options: ["Deviner", "Faire confiance à l'IA", "Demander à un inconnu", "Sur le site du musée lui-même"], answer: 3, why: "Le site du lieu donne les horaires actuels." },
          { objective: "O2", q: "Depuis mai 2025, pour prendre l'avion à l'intérieur des États-Unis, il faut :", options: ["Seulement une carte de bibliothèque", "Une pièce conforme REAL ID ou une autre pièce acceptée comme un passeport", "Aucune pièce d'identité", "Une carte bancaire"], answer: 1, why: "La TSA exige REAL ID ou une autre pièce acceptée." },
          { objective: "O3", q: "Où mettre vos médicaments en voyage ?", options: ["Seulement dans la valise en soute", "Dans votre bagage à main", "Les laisser à la maison", "Dans le sac d'un inconnu"], answer: 1, why: "Les garder avec vous évite de les perdre." }
        ]
      }
    },
    {
      name: "Chapitre 2 : En route",
      lessons: [
        {
          objectives: ["O4"],
          title: "Utiliser les cartes et les itinéraires sur votre téléphone",
          minutes: 5,
          goal: "Obtenir un itinéraire à pied ou en voiture avec une application de cartes.",
          text: [
            "Les applications de cartes comme Google Maps et Plans d'Apple montrent où vous êtes et comment aller où vous voulez, en voiture, à pied ou en transports en commun.",
            "Ouvrez l'application de cartes et tapez le lieu dans la zone de recherche, ou dites-le à votre assistant vocal : « Dis Siri, itinéraire à pied jusqu'à Forsyth Park. » Touchez Itinéraire, choisissez à pied, en voiture ou en transports, puis touchez Démarrer. L'application annonce chaque virage à voix haute.",
            "Avant le voyage, enregistrez votre hôtel comme lieu favori : le retour ne demandera qu'une touche. Les itinéraires consomment la batterie du téléphone, alors emportez un chargeur ou une petite batterie externe."
          ],
          steps: ["Ouvrez votre application de cartes.", "Tapez ou dites où vous voulez aller.", "Touchez Itinéraire et choisissez à pied, en voiture ou en transports.", "Touchez Démarrer et suivez les indications vocales.", "Enregistrez votre hôtel en favori."],
          words: [["GPS", "un système qui permet à votre téléphone de savoir où vous êtes sur une carte."], ["Transports en commun", "les transports publics comme les bus et les trains."]],
          slides: [
            { title: "Votre téléphone connaît le chemin", bullets: ["Google Maps ou Plans d'Apple", "Voiture, à pied ou transports en commun"] },
            { title: "Obtenir un itinéraire", bullets: ["Tapez ou dites le lieu", "Touchez Itinéraire, choisissez comment", "Touchez Démarrer pour les indications vocales"] },
            { title: "Conseils de voyage", bullets: ["Enregistrez votre hôtel en favori", "Emportez un chargeur ou une batterie externe"] }
          ],
          tryIt: "Utilisez votre application de cartes pour obtenir un itinéraire à pied de chez vous jusqu'à un magasin ou un parc proche. Touchez Démarrer et écoutez la première indication.",
          youCanNow: "obtenir et suivre un itinéraire avec une application de cartes.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire Transports en commun dans une application de cartes ?", options: ["Seulement à pied", "Les trajets en voiture", "Les bus et les trains", "Le prix des taxis"], answer: 2, why: "Les transports en commun, ce sont les transports publics, comme les bus et les trains." },
            { objective: "O4", q: "Vous êtes en promenade et vous voulez un moyen facile de rentrer à votre hôtel. Qu'auriez-vous dû faire avant le voyage ?", options: ["Enregistrer l'hôtel comme lieu favori dans l'application de cartes", "Écrire le nom de l'hôtel sur votre main", "Éteindre votre téléphone", "Supprimer l'application de cartes"], answer: 0, why: "Enregistrer l'hôtel en favori permet de rentrer en une seule touche." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Parler et lire dans une autre langue",
          minutes: 5,
          goal: "Utiliser une application de traduction pour lire un panneau ou avoir une conversation simple.",
          text: [
            "Vous voyagez à l'étranger, ou vous rencontrez un nouveau membre de la famille qui parle une autre langue ? Les applications de traduction comme Google Traduction et l'application Traduire de l'iPhone peuvent aider.",
            "Tapez ou dites une phrase, et l'application affiche et prononce la traduction. Le mode conversation permet à deux personnes de parler chacune à son tour. Le mode appareil photo vous permet de viser un panneau ou un menu avec votre téléphone et de le lire dans votre langue.",
            "Les traductions sont bonnes mais pas parfaites. Pour les choses importantes, comme vos besoins médicaux ou vos allergies, ayez sur vous une carte écrite à l'avance dans la langue du pays, et faites-la vérifier par le personnel de l'hôtel ou d'une pharmacie. Beaucoup d'applications permettent de télécharger une langue avant de partir, pour qu'elle marche sans internet."
          ],
          steps: ["Ouvrez une application de traduction et choisissez les deux langues.", "Tapez ou dites votre phrase.", "Utilisez le mode conversation pour parler à tour de rôle.", "Utilisez le mode appareil photo pour les panneaux et les menus.", "Téléchargez la langue avant de partir."],
          words: [["Traduire", "faire passer des mots d'une langue à une autre."], ["Hors connexion", "qui fonctionne sans connexion internet."]],
          slides: [
            { title: "Votre traducteur de poche", bullets: ["Google Traduction ou l'application Traduire", "Tapez, parlez ou utilisez l'appareil photo"] },
            { title: "Trois façons de l'utiliser", bullets: ["Dire une phrase", "Mode conversation : à tour de rôle", "Mode appareil photo : panneaux et menus"] },
            { title: "Soyez prêt", bullets: ["Pas parfait pour les questions médicales", "Ayez une carte écrite pour les allergies ou la santé", "Téléchargez la langue avant de partir"] }
          ],
          tryIt: "Ouvrez une application de traduction. Traduisez « Où sont les toilettes, s'il vous plaît ? » dans une langue dont vous pourriez avoir besoin, et écoutez-la prononcée à voix haute.",
          youCanNow: "utiliser une application de traduction pour parler, lire panneaux et menus, et préparer vos besoins importants.",
          quickCheck: [
            { objective: "O5", q: "Que fait le mode appareil photo d'une application de traduction ?", options: ["Il prend des photos de voyage", "Il montre un panneau ou un menu dans votre langue quand vous pointez le téléphone dessus", "Il enregistre un appel vidéo", "Il trouve votre hôtel"], answer: 1, why: "Le mode appareil photo traduit ce que voit l'appareil photo du téléphone, comme les panneaux et les menus." },
            { objective: "O5", q: "Vous allez être dans un endroit sans Internet. Que faites-vous avant de partir ?", options: ["Rien ; l'application marche toujours", "Acheter seulement un dictionnaire en papier", "Télécharger la langue dans l'application", "Supprimer l'application"], answer: 2, why: "Beaucoup d'applications permettent de télécharger une langue pour qu'elle marche sans connexion." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Voyager en sécurité et rester joignable",
          minutes: 5,
          goal: "Partager vos projets et votre position avec la famille et éviter les arnaques au voyage.",
          text: [
            "Faites savoir à votre famille où vous êtes. Partagez votre itinéraire avec un proche, et pensez à partager votre position depuis votre téléphone pendant le voyage (sur iPhone, l'application Localiser ; sur Android, le partage de position de Google Maps). Vous pouvez arrêter le partage à tout moment.",
            "Méfiez-vous des arnaques au voyage : faux sites de réservation, appels disant que vous avez « gagné » un voyage, et messages sur un problème de vol qui vous demandent d'appeler un numéro bizarre ou de payer. Réservez sur le site de la compagnie aérienne, de l'hôtel ou de la compagnie ferroviaire, ou auprès d'une agence de confiance, et vérifiez tout message en appelant le numéro de leur site officiel.",
            "Gardez une copie de votre pièce d'identité et de votre liste de médicaments en lieu sûr, séparée des originaux, et évitez de saisir vos coordonnées bancaires sur le Wi-Fi public des hôtels ou des aéroports."
          ],
          steps: ["Partagez votre itinéraire avec un proche.", "Activez le partage de position pour le voyage si vous le souhaitez.", "Réservez seulement sur les sites officiels ou auprès d'agences de confiance.", "Vérifiez les messages de voyage au numéro officiel de la compagnie.", "Évitez les opérations bancaires sur le Wi-Fi public."],
          words: [["Partage de position", "permettre à des personnes choisies de voir où se trouve votre téléphone sur une carte."], ["Wi-Fi public", "l'internet sans fil gratuit des hôtels ou des aéroports, partagé avec d'autres personnes."]],
          slides: [
            { title: "Tenez la famille au courant", bullets: ["Partagez votre itinéraire", "Partagez votre position pendant le voyage", "Arrêtez le partage à tout moment"] },
            { title: "Arnaques au voyage", bullets: ["Faux sites de réservation", "« Vous avez gagné un voyage ! »", "Messages de problème de vol avec des numéros bizarres"] },
            { title: "Restez en sécurité", bullets: ["Réservez sur les sites officiels", "Appelez les numéros des sites officiels", "Pas de banque sur le Wi-Fi public"] }
          ],
          tryIt: "Tâche finale : terminez votre plan de voyage de trois jours avec un rythme confortable et du temps de repos, votre liste de bagages avec médicaments et pièce d'identité, et trois informations vérifiées sur des sites officiels. Partagez le plan avec un proche.",
          youCanNow: "préparer un voyage avec l'IA, le vérifier, faire vos bagages, trouver votre chemin et rester en sécurité et joignable.",
          quickCheck: [
            { objective: "O6", q: "Que fait le partage de position ?", options: ["Il montre à tout le monde en ligne où vous êtes", "Il permet aux membres de la famille que vous choisissez de voir où est votre téléphone", "Il réserve votre hôtel", "Il active le GPS pour des inconnus"], answer: 1, why: "Le partage de position montre l'emplacement de votre téléphone aux personnes que vous choisissez, et vous pouvez l'arrêter quand vous voulez." },
            { objective: "O6", q: "Un site propose votre hôtel à moitié prix si vous payez par virement aujourd'hui. Que faites-vous ?", options: ["Payer vite avant la fin de l'offre", "Envoyer vos coordonnées bancaires", "Demander au site s'il est vrai", "Réserver sur le site de l'hôtel lui-même ou auprès d'une agence de confiance"], answer: 3, why: "Les faux sites de réservation sont fréquents ; réservez seulement sur des sites officiels ou auprès d'agences de confiance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : En route",
        questions: [
          { objective: "O4", q: "Dans une application de cartes, après avoir choisi où aller, vous touchez :", options: ["Partager le mot de passe", "Supprimer", "Appareil photo", "Itinéraire, puis Démarrer"], answer: 3, why: "Itinéraire et Démarrer lancent le guidage vocal." },
          { objective: "O4", q: "Pourquoi enregistrer votre hôtel en favori ?", options: ["Le retour ne demande qu'une touche", "La chambre coûte moins cher", "Cela annule la réservation", "Cela envoie votre mot de passe"], answer: 0, why: "Les favoris permettent de rentrer vite." },
          { objective: "O5", q: "Le mode appareil photo d'une application de traduction vous permet de :", options: ["Appeler chez vous", "Prendre des selfies", "Viser un panneau ou un menu pour le lire dans votre langue", "Payer vos repas"], answer: 2, why: "Il traduit le texte que voit l'appareil photo." },
          { objective: "O5", q: "Pour une allergie alimentaire grave à l'étranger, le meilleur plan est de :", options: ["Deviner", "Compter seulement sur l'application sur le moment", "Ne rien dire", "Avoir une carte écrite dans la langue du pays et la faire vérifier par le personnel"], answer: 3, why: "Les applications de traduction ne sont pas parfaites pour les questions médicales." },
          { objective: "O6", q: "Un SMS dit que votre vol a un problème et qu'il faut appeler un numéro donné dans le message. Vous :", options: ["Payez tout de suite", "Appelez le numéro du SMS", "Appelez plutôt le numéro du site officiel de la compagnie", "Envoyez votre numéro de carte"], answer: 2, why: "Les numéros officiels sont sûrs ; ceux des messages peuvent être des arnaques." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA, compagne de voyage",
    questions: [
      { objective: "O1", q: "Un assistant IA peut aider pour un voyage en :", options: ["Achetant des billets sans vous", "Écrivant un plan jour par jour", "Garantissant les prix", "Faisant votre valise"], answer: 1, why: "Il écrit des plans que vous adaptez et vérifiez ensuite." },
      { objective: "O1", q: "Dire à l'IA votre rythme et vos besoins l'aide à :", options: ["Faire un plan qui vous convient", "Faire payer moins", "Réserver des hôtels", "Appeler la famille"], answer: 0, why: "Les détails rendent le plan réaliste." },
      { objective: "O1", q: "« Accessible » veut dire :", options: ["Facile à utiliser pour les personnes qui ont du mal à marcher, entendre ou voir", "Cher", "Loin", "Fermé"], answer: 0, why: "Les lieux accessibles sont faciles à utiliser pour tous." },
      { objective: "O2", q: "Les plans de voyage de l'IA peuvent contenir :", options: ["Seulement des informations parfaites", "Des horaires dépassés ou des lieux fermés", "Votre passeport", "De vrais billets"], answer: 1, why: "L'IA peut se tromper ou être dépassée." },
      { objective: "O2", q: "Une bonne question à poser à l'IA sur votre plan est :", options: ["« Réserve tout maintenant. »", "« Quel est mon mot de passe ? »", "« Qu'est-ce que je dois revérifier dans ce plan ? »", "« Paie pour moi. »"], answer: 2, why: "Elle repère les informations à vérifier." },
      { objective: "O2", q: "Où vérifier les règles d'identité pour prendre l'avion aux États-Unis ?", options: ["Dans un SMS d'arnaque au voyage", "Dans une publicité", "Dans une publication sur les réseaux sociaux", "Sur tsa.gov"], answer: 3, why: "La TSA fixe les règles d'identité dans les aéroports." },
      { objective: "O2", q: "Une carte REAL ID porte en général :", options: ["Seulement un code-barres", "Aucune photo", "Une étoile dans un coin", "Votre mot de passe"], answer: 2, why: "L'étoile marque les cartes conformes REAL ID." },
      { objective: "O2", q: "En plus de REAL ID, une pièce acceptée pour les vols aux États-Unis est :", options: ["Un passeport", "Une carte de bibliothèque", "Un ticket de caisse", "Une carte de visite"], answer: 0, why: "La TSA accepte le passeport." },
      { objective: "O3", q: "Une liste de bagages rangée peut avoir des rubriques pour :", options: ["Rien", "Seulement les chaussures", "Seulement les en-cas", "Papiers, médicaments, vêtements et électronique"], answer: 3, why: "Ranger par rubrique rend la vérification facile." },
      { objective: "O3", q: "Les médicaments doivent être rangés :", options: ["En vrac dans la valise en soute", "Dans le bagage à main, dans leurs boîtes d'origine", "À la maison", "Dans les bagages d'un ami"], answer: 1, why: "Gardez-les avec vous et bien étiquetés." },
      { objective: "O3", q: "Qui peut vous conseiller pour voyager avec des médicaments ?", options: ["Un site au hasard", "Votre pharmacien", "Une publicité", "Un inconnu"], answer: 1, why: "Les pharmaciens connaissent les médicaments." },
      { objective: "O4", q: "Le GPS permet à votre téléphone de :", options: ["Prendre des photos", "Traduire des langues", "Payer des factures", "Savoir où vous êtes sur une carte"], answer: 3, why: "Le GPS trouve votre position." },
      { objective: "O4", q: "« Transports en commun » dans une application de cartes veut dire :", options: ["Bus et trains", "Seulement à pied", "En avion", "Seulement en voiture"], answer: 0, why: "Ce sont les transports publics." },
      { objective: "O4", q: "Les itinéraires consomment la batterie, alors emportez :", options: ["Une deuxième pièce d'identité", "D'autres mots de passe", "Un chargeur ou une batterie externe", "Un appareil photo"], answer: 2, why: "La navigation vide la batterie." },
      { objective: "O5", q: "Le mode conversation d'une application de traduction :", options: ["Coupe le son", "Appelle chez vous", "Réserve des hôtels", "Permet à deux personnes de parler à tour de rôle"], answer: 3, why: "Il traduit dans les deux sens." },
      { objective: "O5", q: "Télécharger une langue avant de partir permet à l'application de marcher :", options: ["Plus vite, seulement en Wi-Fi", "Seulement à la maison", "Hors connexion, sans internet", "Jamais"], answer: 2, why: "Les langues téléchargées marchent hors connexion." },
      { objective: "O6", q: "Le partage de position permet :", options: ["À des inconnus de vous suivre", "À la famille choisie de voir où est votre téléphone", "Aux hôtels de faire payer plus", "Aux compagnies d'annuler des vols"], answer: 1, why: "Seules les personnes choisies peuvent la voir." },
      { objective: "O6", q: "Un appel dit que vous avez gagné un voyage gratuit mais devez payer des frais. C'est :", options: ["Probablement une arnaque", "Un vrai prix", "Une règle fiscale", "Normal"], answer: 0, why: "Les prix qui demandent des frais sont des arnaques." },
      { objective: "O6", q: "La façon la plus sûre de réserver un voyage est :", options: ["Par les sites officiels ou des agences de confiance", "Par des liens dans des SMS inattendus", "Par des publicités", "En envoyant des cartes cadeaux"], answer: 0, why: "Les sites officiels évitent les fausses réservations." },
      { objective: "O6", q: "Sur le Wi-Fi public d'un aéroport, évitez de :", options: ["Lire les nouvelles", "Saisir vos coordonnées bancaires", "Regarder la météo", "Consulter des cartes"], answer: 1, why: "Le Wi-Fi public peut être partagé par d'autres." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan confortable",
        objective: "O1",
        notYet: "Pas de plan jour par jour, ou trop d'activités sans repos.",
        meets: "Un plan de trois jours, jour par jour, à un rythme confortable avec des temps de repos.",
        exceeds: "Le plan indique aussi des endroits pour s'asseoir ou un accès facile là où il le faut."
      },
      {
        name: "Liste de bagages",
        objective: "O3",
        notYet: "Pas de liste, ou les médicaments ou la pièce d'identité manquent.",
        meets: "Une liste de bagages classée par groupes qui comprend les médicaments et la pièce d'identité.",
        exceeds: "Indique que les médicaments et la pièce d'identité vont dans le bagage à main, avec une liste des médicaments et le numéro du médecin."
      },
      {
        name: "Informations vérifiées",
        objective: "O2",
        notYet: "Moins de trois informations vérifiées, ou vérifiées seulement avec l'IA.",
        meets: "Trois informations vérifiées sur des sites officiels, comme tsa.gov et le site du lieu lui-même.",
        exceeds: "Vous pouvez dire de quel site vient chaque information, et vous avez corrigé ce qui était faux."
      },
      {
        name: "Partagé avec la famille",
        objective: "O6",
        notYet: "Le plan n'a pas été partagé.",
        meets: "Le plan a été partagé avec un membre de la famille.",
        exceeds: "Vous vous êtes aussi mis d'accord sur le partage de position pendant le voyage ou sur une heure pour donner des nouvelles."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui font un voyage ou une sortie avec leur plan préparé avec l'IA dans les 60 jours (questionnaire de suivi)",
      "Apprenants qui disent avoir vérifié des informations de voyage sur des sites officiels ou évité une arnaque au voyage",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec Internet, une application de cartes (Google Maps ou Plans d'Apple) et une application de traduction",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Du papier et un stylo, ou une note sur le téléphone, pour le plan et la liste de bagages",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Laissez chaque apprenant préparer un vrai voyage ou une sortie qui lui ferait plaisir ; cela donne du sens à l'exercice.",
      "Montrez sur un grand écran comment vérifier une information sur tsa.gov et sur le site d'un lieu.",
      "Entraînez-vous aux itinéraires avec une courte marche près du lieu de la séance pour que les apprenants entendent les indications vocales.",
      "Rappelez aux apprenants que les questions sur les médicaments vont à leur pharmacien, et d'éviter les opérations bancaires sur un Wi-Fi public.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
