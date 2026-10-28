"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-data-technology.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const KMD = { name: "Service météorologique du Kenya (KMD) : prévisions et bulletins agrométéorologiques", url: "https://meteo.go.ke" };
const NIMET = { name: "Agence météorologique du Nigeria (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (images satellite Sentinel gratuites)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS, observation de la Terre (cartes de pluie, NDVI et stress agricole)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Organisation kényane de recherche agricole et d'élevage (KALRO)", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (formulaires gratuits de collecte de données)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Bureau du Commissaire à la protection des données (Kenya, ODPC)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Commission nigériane de protection des données (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-fr",
  lang: "fr",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Données et technologies agricoles",
  skills: "Trouver et vérifier des informations agricoles fiables, Collecter les données de la ferme sur un téléphone, Utiliser des informations météo et satellite gratuites, Analyser les registres de la ferme dans un tableur, Utiliser les assistants IA de façon responsable pour les questions agricoles, Protéger les données de votre ferme",
  outcome: "utiliser un smartphone bon marché pour collecter les données de votre ferme, y ajouter des informations météo et satellite gratuites, les analyser dans un tableur pour prendre une meilleure décision, vérifier les conseils des applications et de l'IA auprès de sources fiables, et protéger vos données.",
  about: [
    "Ce cours s'adresse aux agriculteurs, aux jeunes agripreneurs, aux responsables de groupements et de coopératives et aux agents de vulgarisation au Kenya, au Nigeria et partout en Afrique qui ont un smartphone (même bon marché) et veulent s'en servir pour mieux cultiver. Un ordinateur n'est pas nécessaire, mais il aide pour le chapitre 2.",
    "Le chapitre 1 porte sur la collecte d'informations : trouver des conseils agricoles fiables et éviter les arnaques, noter les données de votre ferme sur un téléphone, et utiliser les prévisions météo et les cartes satellite gratuites. Le chapitre 2 porte sur l'utilisation des informations : analyser vos registres dans un tableur gratuit, poser de bonnes questions agricoles aux assistants IA et vérifier leurs réponses, et protéger vos données.",
    "Le cours utilise des outils gratuits : Google Sheets ou la version web gratuite de Microsoft Excel, des outils de formulaires gratuits, les services météo nationaux, les cartes d'observation de la Terre de la FAO et des assistants IA gratuits. Chaque leçon se termine par un exercice. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Préparez une feuille de données de la ferme pour une saison (parcelles, cultures, variétés, dates de semis, intrants et coûts, notes de pluie ou de prévisions, notes d'observation, récolte et ventes), remplissez-la avec des données réelles ou d'exemple pour au moins trois parcelles, faites un graphique qui compare les parcelles, écrivez une décision que vous prendrez pour la prochaine saison grâce à lui, et notez les sources que vous avez vérifiées et comment vous protégez les données.",
  chapters: [
    {
      name: "Chapitre 1 : Collecter de bonnes informations",
      lessons: [
        {
          title: "Trouver des informations agricoles fiables",
          minutes: 5,
          goal: "Juger si un conseil agricole est fiable avant de l'appliquer.",
          text: [
            "Les agriculteurs reçoivent des conseils de nombreuses sources : agents de vulgarisation, instituts de recherche comme le KALRO au Kenya, programmes de développement agricole des États du Nigeria, la FAO et les centres du CGIAR, vendeurs d'intrants (agrovets), émissions de radio et de télévision, services par SMS et applications, groupes WhatsApp et Facebook, et voisins. Certains conseils sont excellents ; d'autres sont faux, dépassés, ou cherchent à vous vendre quelque chose.",
            "Posez quatre questions sur tout conseil : Qui le dit, et cette personne s'y connaît-elle (un institut de recherche ou un agent formé, ou un compte inconnu) ? Est-ce adapté à ma région et à ma culture ? Est-ce récent ? Cherche-t-on à me vendre quelque chose ? Vérifiez un conseil important auprès d'une deuxième source fiable avant de dépenser de l'argent.",
            "Méfiez-vous des arnaques : fausses semences et faux engrais, produits « miracles », faux emplois ou fausses subventions qui demandent des frais, et messages qui se font passer pour un programme public en demandant le code PIN de votre argent mobile. Achetez vos intrants chez des vendeurs agréés et signalez les contrefaçons aux autorités compétentes."
          ],
          steps: ["Demandez : qui le dit, et s'y connaît-il ?", "Demandez : est-ce pour ma région et ma culture, et est-ce récent ?", "Demandez : cherche-t-on à me vendre quelque chose ?", "Vérifiez auprès d'une deuxième source fiable avant de dépenser.", "Achetez chez des vendeurs agréés ; ne donnez jamais votre code PIN."],
          words: [["Agent de vulgarisation", "un conseiller formé, de l'État ou d'un projet, qui aide les agriculteurs."], ["Institut de recherche", "un organisme qui teste et met au point des méthodes et des variétés, comme le KALRO."], ["Arnaque", "une ruse pour prendre votre argent ou vos informations."]],
          slides: [
            { title: "De nombreuses sources", bullets: ["Vulgarisation, instituts de recherche, FAO, CGIAR", "Vendeurs d'intrants, radio, SMS et applications", "Groupes sur les réseaux sociaux et voisins"] },
            { title: "Quatre questions", bullets: ["Qui le dit, et s'y connaît-il ?", "Pour ma région et ma culture ?", "Récent ?", "Cherche-t-on à me vendre quelque chose ?"] },
            { title: "Méfiez-vous des arnaques", bullets: ["Fausses semences et faux engrais, produits miracles", "Subventions ou emplois qui demandent des frais", "Ne donnez jamais votre code PIN"] }
          ],
          sources: [KALRO],
          tryIt: "Trouvez un conseil agricole vu récemment (à la radio, sur WhatsApp ou auprès d'un vendeur). Répondez aux quatre questions à son sujet et vérifiez-le auprès d'une deuxième source fiable. Notez si vous allez l'appliquer.",
          youCanNow: "juger si un conseil agricole est fiable et repérer les arnaques courantes."
        },
        {
          title: "Noter les données de la ferme sur un téléphone",
          minutes: 6,
          goal: "Mettre en place un système simple sur téléphone pour noter les parcelles, les intrants, les observations et la récolte.",
          text: [
            "Vos propres registres sont les données les plus précieuses que vous ayez, car ils parlent de votre ferme. Une application de tableur (Google Sheets ou Microsoft Excel, toutes deux gratuites sur téléphone) convient bien : une ligne par événement, avec des colonnes comme la date, la parcelle, la culture, l'activité, la quantité, le coût et des notes.",
            "Donnez à chaque parcelle un nom court ou un numéro et gardez-le toujours. Enregistrez un point GPS ou une limite approximative pour chaque parcelle (beaucoup d'applications de cartes permettent de placer un repère et de partager ses coordonnées). Photographiez les problèmes et nommez les photos avec la date et la parcelle. Pour les groupements et les coopératives, des outils de formulaires gratuits comme KoboToolbox permettent à de nombreux membres de remplir le même formulaire sur leur téléphone, même hors ligne, et de l'envoyer dès qu'ils ont du réseau.",
            "Gardez un système assez simple pour le faire à chaque fois. Cinq colonnes remplies chaque semaine valent plus que vingt colonnes remplies une seule fois. Sauvegardez la feuille (la plupart des tableurs en ligne enregistrent automatiquement) et n'y mettez pas de numéros privés comme des codes PIN ou des numéros de pièce d'identité."
          ],
          steps: ["Ouvrez une application de tableur gratuite et créez les colonnes : date, parcelle, culture, activité, quantité, coût, notes.", "Nommez chaque parcelle et enregistrez un repère GPS pour elle.", "Ajoutez une ligne chaque fois que vous semez, appliquez des intrants, observez, récoltez ou vendez.", "Nommez les photos avec la date et la parcelle.", "Pour les groupements : pensez à un formulaire partagé qui fonctionne hors ligne."],
          words: [["Tableur", "un tableau de lignes et de colonnes sur téléphone ou ordinateur pour noter et calculer."], ["Repère GPS", "un point enregistré sur une carte avec ses coordonnées."], ["Hors ligne", "qui fonctionne sans connexion Internet."]],
          slides: [
            { title: "Vos données valent de l'or", bullets: ["Elles parlent de VOTRE ferme", "Une ligne par événement"] },
            { title: "Colonnes pour commencer", bullets: ["Date, parcelle, culture, activité", "Quantité, coût, notes"] },
            { title: "Bonnes habitudes", bullets: ["Toujours les mêmes noms de parcelles", "Un repère GPS par parcelle, photos datées", "Assez simple pour chaque semaine"] },
            { title: "Groupements et sécurité", bullets: ["Formulaires partagés hors ligne, ex. KoboToolbox", "Sauvegardez ; ni code PIN ni numéro d'identité"] }
          ],
          sources: [KOBO],
          tryIt: "Créez la feuille de votre ferme sur votre téléphone avec les sept colonnes. Ajoutez vos parcelles et au moins cinq lignes d'activités réelles de cette saison. Placez un repère GPS pour une parcelle et notez ses coordonnées dans les notes.",
          youCanNow: "noter de façon régulière les activités, les intrants et la récolte de votre ferme sur un téléphone."
        },
        {
          title: "Utiliser les informations météo et satellite gratuites",
          minutes: 6,
          goal: "Utiliser les prévisions officielles et les cartes satellite gratuites pour guider les décisions de la ferme.",
          text: [
            "Les services météorologiques nationaux publient des prévisions pour les agriculteurs : au Kenya, le Service météorologique du Kenya (KMD) publie des prévisions saisonnières et des bulletins agrométéorologiques ; au Nigeria, la NiMet publie des prévisions climatiques saisonnières et des prévisions. Notez ce qu'ils annoncent pour votre région dans la feuille de votre ferme, avec la date, pour voir plus tard si cela correspondait à votre saison. Ailleurs, consultez le service météorologique de votre pays.",
            "Les informations satellite gratuites aident aussi. Les pages d'observation de la Terre de la FAO montrent des cartes de pluie, de végétation (NDVI) et de stress agricole par pays et par région, utiles pour savoir si une période sèche est locale ou générale. Le Copernicus Browser montre des images satellite Sentinel-2 gratuites tous les quelques jours, à environ 10 mètres par pixel : assez pour voir la forme des champs et si un grand champ est plus vert ou plus brun que le mois dernier.",
            "Si vous le pouvez, mesurez vous-même la pluie avec un pluviomètre simple et notez-la chaque jour. Votre propre relevé de pluie, à côté de vos dates de semis et de vos rendements, montre vite ce qui marche sur votre ferme."
          ],
          steps: ["Trouvez la prévision de votre service météo national pour votre région.", "Notez-la dans la feuille de la ferme avec la date.", "Regardez les cartes d'observation de la Terre de la FAO pour votre pays.", "Trouvez votre ferme dans le Copernicus Browser et comparez deux dates.", "Notez la pluie chaque jour avec un pluviomètre simple si vous le pouvez."],
          words: [["Bulletin agrométéorologique", "un bulletin météo écrit pour les agriculteurs."], ["Image satellite", "une photo de la Terre prise depuis l'espace."], ["Pluviomètre", "un récipient simple avec une échelle qui mesure la pluie."]],
          slides: [
            { title: "Prévisions officielles", bullets: ["Kenya : prévisions saisonnières et bulletins du KMD", "Nigeria : NiMet", "Notez-les dans votre feuille avec la date"] },
            { title: "Informations satellite gratuites", bullets: ["FAO : cartes de pluie, NDVI, stress", "Copernicus Browser : Sentinel-2, environ 10 m", "La période sèche est-elle locale ou générale ?"] },
            { title: "Votre propre pluviomètre", bullets: ["Notez la pluie chaque jour", "Comparez avec les dates de semis et les rendements"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Trouvez la prévision de cette saison pour votre région et notez-la dans la feuille de votre ferme. Puis trouvez votre région dans les cartes d'observation de la Terre de la FAO ou dans le Copernicus Browser et notez une chose que vous remarquez.",
          youCanNow: "utiliser les prévisions officielles et les cartes satellite gratuites avec les registres de votre ferme."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Collecter de bonnes informations",
        questions: [
          { q: "Un message WhatsApp vante un « engrais miracle » vendu par un inconnu. Vous devez :", options: ["L'acheter vite avant la rupture de stock", "Vérifier auprès d'une source fiable, comme la vulgarisation, avant de dépenser", "Le transférer à tout le monde", "Envoyer votre code PIN pour commander"], answer: 1, why: "Les vendeurs inconnus et les promesses miracles sont des signaux d'alarme." },
          { q: "Quelle colonne est utile dans une feuille de données de la ferme ?", options: ["Le code PIN de votre argent mobile", "Votre numéro d'identité", "La date, la parcelle et l'activité", "Votre mot de passe"], answer: 2, why: "Les registres contiennent des événements, pas des numéros privés." },
          { q: "Pourquoi donner un nom fixe à chaque parcelle ?", options: ["Pour comparer les registres dans le temps", "C'est joli", "Le téléphone l'exige", "Ce n'est pas utile"], answer: 0, why: "Des noms constants permettent d'additionner et de comparer les parcelles." },
          { q: "Que montrent les images Sentinel-2 gratuites du Copernicus Browser ?", options: ["Des insectes un par un", "Le solde de votre compte", "La météo de l'an prochain", "Les champs à environ 10 mètres par pixel tous les quelques jours"], answer: 3, why: "Elles sont gratuites, fréquentes et assez grossières." },
          { q: "Pourquoi noter la prévision dans la feuille de la ferme avec la date ?", options: ["Pour la comparer plus tard avec ce qui s'est vraiment passé sur votre ferme", "Le service météo l'exige", "Pour la partager avec les acheteurs", "Pour remplir la page"], answer: 0, why: "Au fil des saisons, vous apprenez comment les prévisions correspondent à votre ferme." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser les informations pour décider",
      lessons: [
        {
          title: "Analyser vos registres dans un tableur",
          minutes: 6,
          goal: "Calculer le rendement et le bénéfice par parcelle et faire un graphique pour les comparer.",
          text: [
            "Les registres deviennent utiles quand on les additionne. Dans votre tableur, faites un tableau récapitulatif : une ligne par parcelle avec sa surface, son coût total, sa récolte, ses recettes, puis le rendement par acre et le bénéfice par acre (1 acre vaut environ 0,4 hectare ; vous pouvez aussi calculer par hectare). Le tableur fait les calculs avec des formules simples, par exemple =SUM (SOMME dans un tableur en français) pour additionner les coûts et une division pour obtenir le rendement par acre.",
            "Faites ensuite un graphique. Sélectionnez les noms des parcelles et le rendement par acre (ou le bénéfice par acre) et insérez un graphique à barres. Un graphique rend les différences faciles à voir et à expliquer à la famille, à un groupement ou à un prêteur.",
            "Cherchez les raisons : la meilleure parcelle a-t-elle reçu du fumier, été semée plus tôt, eu une autre variété ou plus de pluie ? La plus faible a-t-elle eu des ravageurs ou de l'eau stagnante ? Écrivez une décision pour la prochaine saison, et continuez à noter pour pouvoir la tester."
          ],
          steps: ["Faites un tableau récapitulatif : parcelle, surface, coût total, récolte, recettes.", "Utilisez =SUM pour les totaux et divisez pour obtenir le rendement et le bénéfice par acre.", "Sélectionnez les noms des parcelles et le rendement par acre ; insérez un graphique à barres.", "Cherchez les raisons dans vos notes.", "Écrivez une décision pour la prochaine saison."],
          words: [["Formule", "une instruction dans une cellule du tableur qui calcule, comme =SUM(B2:B10)."], ["Rendement par acre", "ce qu'une parcelle a produit, divisé par sa surface."], ["Graphique à barres", "un graphique avec des barres qui comparent des quantités."]],
          slides: [
            { title: "Additionnez", bullets: ["Une ligne par parcelle", "Surface, coût, récolte, recettes", "Rendement et bénéfice par acre"] },
            { title: "Laissez le tableur calculer", bullets: ["=SUM pour les totaux", "Divisez pour les chiffres par acre"] },
            { title: "Faites un graphique", bullets: ["Noms des parcelles + rendement par acre", "Insérez un graphique à barres", "Facile à expliquer aux autres"] },
            { title: "Trouvez les raisons, décidez", bullets: ["Fumier, date, variété, pluie, ravageurs ?", "Une décision pour la prochaine saison"] }
          ],
          tryIt: "Faites le tableau récapitulatif pour au moins trois parcelles (chiffres réels ou d'exemple), calculez le rendement et le bénéfice par acre avec des formules, insérez un graphique à barres et écrivez une décision pour la prochaine saison.",
          youCanNow: "analyser les registres de la ferme dans un tableur et utiliser un graphique pour comparer les parcelles et décider."
        },
        {
          title: "Utiliser les assistants IA pour les questions agricoles, de façon responsable",
          minutes: 5,
          goal: "Poser une question agricole claire à un assistant IA et vérifier la réponse avant d'agir.",
          text: [
            "Des assistants IA gratuits comme ChatGPT, Microsoft Copilot et Google Gemini peuvent expliquer des notions agricoles, aider à planifier une saison, rédiger un message à un acheteur, traduire ou aider à construire une formule de tableur. Demandez clairement : indiquez votre culture, votre région, la saison, la taille de votre ferme et ce que vous voulez, par exemple : « Je cultive 2 acres de maïs à Bungoma. Les petites pluies commencent en octobre. Fais-moi une liste de contrôle simple, semaine par semaine, de la préparation du sol à la récolte. Utilise des phrases courtes. »",
            "L'IA peut se tromper, être dépassée ou donner des conseils pour un autre pays. Elle peut citer des produits non homologués dans votre pays ou de mauvaises doses. N'appliquez jamais un conseil d'IA sur les pesticides, les doses d'engrais, les médicaments pour animaux ou l'argent sans vérifier auprès de votre agent de vulgarisation, de votre vendeur d'intrants, de l'étiquette du produit ou d'une autre source fiable.",
            "Ne tapez pas d'informations privées dans un assistant IA : votre numéro d'identité, le code PIN de votre argent mobile, vos coordonnées bancaires ou les données personnelles d'autres personnes. Utilisez l'IA comme un point de départ utile, pas comme le dernier mot."
          ],
          steps: ["Indiquez votre culture, votre région, la saison, la taille de la ferme et ce que vous voulez.", "Demandez des phrases courtes ou une liste de contrôle.", "Posez des questions de suivi pour améliorer la réponse.", "Vérifiez les conseils sur les pesticides, les engrais, les médicaments et l'argent auprès d'une source fiable.", "Ne tapez jamais de code PIN, de numéro d'identité ou de coordonnées bancaires."],
          words: [["Assistant IA", "un programme informatique avec qui l'on discute en mots de tous les jours et qui écrit des réponses."], ["Consigne (prompt)", "ce que vous tapez ou dites à un assistant IA."]],
          slides: [
            { title: "Ce que l'IA peut faire pour vous", bullets: ["Expliquer des notions, planifier une saison", "Rédiger des messages, traduire", "Construire des formules de tableur"] },
            { title: "Demandez clairement", bullets: ["Culture, région, saison, taille de la ferme", "Ce que vous voulez et sous quelle forme", "Phrases courtes, liste de contrôle"] },
            { title: "Vérifiez avant d'agir", bullets: ["Pesticides, doses, médicaments, argent", "Vulgarisation, vendeur d'intrants, étiquette", "L'IA peut se tromper ou viser un autre pays"] },
            { title: "Gardez vos données privées", bullets: ["Ni code PIN, ni numéro d'identité ou bancaire", "Pas de données sur d'autres personnes"] }
          ],
          tryIt: "Demandez à un assistant IA gratuit une liste de contrôle hebdomadaire pour votre culture principale cette saison, en suivant le modèle de consigne de cette leçon. Marquez chaque point à vérifier auprès d'une source fiable, et vérifiez-en un.",
          youCanNow: "poser une question agricole claire à un assistant IA et vérifier sa réponse avant d'agir."
        },
        {
          title: "Protéger et partager les données de votre ferme",
          minutes: 5,
          goal: "Décider quelles données partager, avec qui, et protéger le reste.",
          text: [
            "Les données de votre ferme ont de la valeur : acheteurs, prêteurs, assureurs, entreprises d'intrants et applications peuvent les vouloir. Les partager peut vous aider à obtenir un prêt, une assurance ou un contrat, mais vous devez savoir ce que vous partagez, pourquoi et avec qui. Lisez ce qu'une application ou un programme dit faire de vos données, et dites non si vous n'êtes pas à l'aise.",
            "Les lois sur la protection des données vous donnent des droits sur vos données personnelles. Au Kenya, la loi de 2019 sur la protection des données est supervisée par le Bureau du Commissaire à la protection des données (ODPC) ; au Nigeria, la loi de 2023 sur la protection des données est supervisée par la Commission nigériane de protection des données (NDPC). Beaucoup d'autres pays africains ont aussi une loi et une autorité de protection des données. Si vous collectez des données d'autres agriculteurs, par exemple comme responsable de groupement, vous devez aussi respecter leurs droits : demandez leur consentement et protégez ces données.",
            "Protégez votre téléphone et vos feuilles : un verrouillage d'écran, un mot de passe solide sur vos comptes, des sauvegardes, et de la prudence avec les téléphones partagés. Partagez des résumés (comme le rendement par acre) plutôt que tout, quand cela suffit."
          ],
          steps: ["Avant de partager, demandez-vous : quoi, pourquoi, avec qui, et qu'est-ce que j'y gagne ?", "Lisez les conditions de l'application ou du programme sur les données.", "Demandez le consentement des autres agriculteurs avant de collecter leurs données.", "Verrouillez votre téléphone ; utilisez des mots de passe solides ; sauvegardez.", "Partagez des résumés plutôt que tous les détails quand c'est possible."],
          words: [["Données personnelles", "des informations sur une personne qui peut être identifiée."], ["Consentement", "un oui clair après avoir compris ce qui sera fait des données."], ["Loi sur la protection des données", "une loi qui encadre la collecte et l'utilisation des données personnelles."]],
          slides: [
            { title: "Vos données ont de la valeur", bullets: ["Acheteurs, prêteurs, assureurs, applications les veulent", "Partager peut aider : prêts, assurance, contrats", "Sachez quoi, pourquoi, avec qui"] },
            { title: "Vos droits", bullets: ["Kenya : loi de 2019 sur la protection des données, ODPC", "Nigeria : loi de 2023 sur la protection des données, NDPC", "Respectez aussi les données des autres agriculteurs"] },
            { title: "Protégez-les", bullets: ["Verrouillage d'écran, mots de passe solides, sauvegardes", "Prudence avec les téléphones partagés", "Partagez des résumés quand cela suffit"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Exercice final : complétez votre feuille de données de la saison pour au moins trois parcelles, faites un graphique de comparaison, écrivez une décision pour la prochaine saison, listez les sources que vous avez vérifiées, et écrivez trois mesures que vous prenez pour protéger les données.",
          youCanNow: "collecter, analyser, partager et protéger les données de votre ferme pour prendre de meilleures décisions."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser les informations pour décider",
        questions: [
          { q: "Quelle formule de tableur additionne une colonne de coûts ?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM additionne une plage de cellules." },
          { q: "La parcelle A a donné 900 kg sur un demi-acre. Son rendement par acre est de :", options: ["90 kg", "450 kg", "900 kg", "1 800 kg"], answer: 3, why: "900 divisé par 0,5 acre donne 1 800 kg par acre." },
          { q: "Un assistant IA propose un pesticide et une dose. Vous devez :", options: ["Pulvériser tout de suite", "Doubler la dose par sécurité", "Lui donner votre code PIN", "Vérifier l'homologation et la dose auprès de la vulgarisation, d'un vendeur d'intrants ou de l'étiquette"], answer: 3, why: "L'IA peut citer des produits ou des doses faux ou non homologués." },
          { q: "Qu'est-ce qu'il n'est PAS sûr de taper dans un assistant IA ?", options: ["Votre culture et votre région", "Le code PIN de votre argent mobile", "Les dates de votre saison", "La taille de votre ferme"], answer: 1, why: "Les codes PIN et les numéros d'identité doivent rester privés." },
          { q: "Comme responsable de groupement qui collecte les données des membres, vous devez :", options: ["Demander leur consentement et protéger ces données", "Les vendre à des acheteurs", "Les publier en ligne", "En collecter le plus possible"], answer: 0, why: "Les lois sur la protection des données protègent les données personnelles des autres." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Données et technologies agricoles",
    questions: [
      { q: "Laquelle est en général une source fiable de conseils agricoles ?", options: ["Un compte inconnu qui vend des produits miracles", "Un institut de recherche comme le KALRO ou un agent de vulgarisation formé", "Un message en chaîne", "Une publicité qui surgit à l'écran"], answer: 1, why: "Les sources formées et responsables sont plus fiables." },
      { q: "Avant de dépenser de l'argent pour un nouveau conseil, vous devez :", options: ["Agir tout de suite", "Demander à un inconnu", "Vérifier auprès d'une deuxième source fiable", "Ignorer tous les conseils"], answer: 2, why: "Une deuxième source repère les erreurs et les arnaques." },
      { q: "Un message dit qu'une subvention publique demande des frais et votre code PIN. C'est :", options: ["Probablement une arnaque", "Normal", "Exigé par la loi", "Un prêt"], answer: 0, why: "Les vrais programmes ne demandent pas votre code PIN." },
      { q: "Vos données agricoles les plus précieuses sont en général :", options: ["Des données sur d'autres pays", "La publicité", "Les nouvelles des célébrités", "Les registres de votre propre ferme"], answer: 3, why: "Elles portent sur vos propres parcelles, intrants et résultats." },
      { q: "Une bonne feuille de la ferme contient :", options: ["Une seule colonne", "Une ligne par événement avec date, parcelle, activité, quantité, coût, notes", "Seulement des photos", "Des mots de passe"], answer: 1, why: "Des lignes et colonnes régulières permettent l'analyse." },
      { q: "Un repère GPS enregistre :", options: ["La pluie", "Le prix d'une culture", "Les coordonnées d'un lieu", "Le pH du sol"], answer: 2, why: "Un repère enregistre un lieu sur une carte." },
      { q: "KoboToolbox aide les groupements à :", options: ["Remplir le même formulaire sur téléphone, même hors ligne", "Piloter des drones", "Rembourser des prêts", "Faire pousser des semences"], answer: 0, why: "Les formulaires partagés hors ligne facilitent la collecte de données en groupe." },
      { q: "Cinq colonnes remplies chaque semaine :", options: ["Valent moins que vingt remplies une fois", "Sont inutiles", "Sont contraires à la loi", "Valent plus que vingt colonnes remplies une fois"], answer: 3, why: "Ce sont les registres simples et réguliers qui servent." },
      { q: "Les bulletins agrométéorologiques officiels du Kenya viennent :", options: ["Du KCAA", "Du Service météorologique du Kenya", "D'une entreprise de semences", "De l'ODPC"], answer: 1, why: "Le KMD publie les prévisions et les bulletins agrométéo." },
      { q: "Les cartes d'observation de la Terre de la FAO peuvent montrer :", options: ["Le solde de votre compte", "Seulement les prix du marché", "La pluie, la végétation et le stress agricole", "Les noms des ravageurs"], answer: 2, why: "La FAO GIEWS cartographie la pluie, le NDVI et des indicateurs de stress." },
      { q: "Un pluviomètre simple vous permet de :", options: ["Noter votre propre pluie quotidienne", "Prévoir l'année prochaine", "Mesurer le pH du sol", "Compter les plantes"], answer: 0, why: "Votre propre relevé de pluie relie la météo à vos rendements." },
      { q: "Le rendement par acre, c'est :", options: ["La récolte multipliée par le prix", "Le coût divisé par les recettes", "La surface multipliée par la pluie", "La récolte divisée par la surface de la parcelle"], answer: 3, why: "Il rend comparables des parcelles de tailles différentes." },
      { q: "Un graphique à barres vous aide à :", options: ["Cacher des chiffres", "Voir et expliquer les différences entre parcelles", "Ranger des photos", "Envoyer de l'argent"], answer: 1, why: "Les barres rendent les comparaisons faciles à voir." },
      { q: "Après avoir trouvé votre meilleure parcelle, l'étape suivante est de :", options: ["Supprimer les registres", "Arrêter de noter", "Chercher les raisons et écrire une décision pour la prochaine saison", "Vendre le téléphone"], answer: 2, why: "L'analyse doit mener à une décision que vous pouvez tester." },
      { q: "Une consigne claire pour l'IA en agriculture contient :", options: ["Culture, région, saison, taille de la ferme et ce que vous voulez", "Votre numéro d'identité", "Un seul mot", "Vos coordonnées bancaires"], answer: 0, why: "Le contexte aide l'assistant à donner des réponses utiles." },
      { q: "Un conseil d'IA sur les médicaments pour animaux doit être :", options: ["Suivi à la lettre", "Ignoré complètement", "Partagé largement", "Vérifié auprès d'un vétérinaire ou d'une source fiable avant d'agir"], answer: 3, why: "L'IA peut se tromper ; les médicaments demandent l'avis d'un expert." },
      { q: "Au Nigeria, la protection des données est supervisée par :", options: ["La NCAA", "La Commission nigériane de protection des données (NDPC)", "La NiMet", "La NAFDAC"], answer: 1, why: "La NDPC supervise la loi nigériane de 2023 sur la protection des données." },
      { q: "Avant qu'une application collecte les données de votre ferme, vous devez :", options: ["Ne jamais rien lire", "Donner toutes les données", "Lire ce qu'elle fera des données et décider", "Partager votre code PIN"], answer: 2, why: "Sachez ce que vous partagez, pourquoi et avec qui." },
      { q: "Partager un résumé comme le rendement par acre au lieu de tous les détails :", options: ["Peut suffire et protège votre vie privée", "N'est jamais permis", "Est une arnaque", "Est inutile"], answer: 0, why: "Ne partagez que ce qui est nécessaire." },
      { q: "Qu'est-ce qui protège le mieux les données de votre téléphone ?", options: ["Aucun verrouillage d'écran", "Partager ses mots de passe", "Ne jamais sauvegarder", "Un verrouillage d'écran, des mots de passe solides et des sauvegardes"], answer: 3, why: "Ces mesures de base protègent vos registres." }
    ]
  }
};
