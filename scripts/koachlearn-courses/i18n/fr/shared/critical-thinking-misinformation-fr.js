"use strict";

// Koach Learn course (French translation of shared/critical-thinking-misinformation.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "critical-thinking-misinformation-fr",
  lang: "fr",
  translationOf: "critical-thinking-misinformation",
  category: "Seniors and Technology",
  name: "Esprit critique et repérage des fausses informations",
  skills: "Faire une pause avant de croire ou de partager, Lecture latérale, Vérifier une source, Recherche d'image inversée, Repérer les faux créés par l'IA et les deepfakes, Repérer vos propres biais",
  outcome: "vérifier une publication, une photo, une vidéo ou un message avant d'y croire ou de le partager : faire une pause, lire \"à côté\" pour vérifier la source, retrouver l'origine d'une photo grâce à une recherche d'image inversée, repérer les signes de faux créés par l'IA et d'arnaques, et remarquer quand vos propres émotions vous guident.",
  about: [
    "Chaque jour, nous voyons des publications, des vidéos, des messages transférés et des titres. Certains sont vrais, certains sont des erreurs, et d'autres sont inventés exprès pour gagner de l'argent, vendre quelque chose, nous faire peur ou nous diviser. Les outils d'intelligence artificielle (IA) permettent maintenant de créer facilement de fausses photos, vidéos et voix. Savoir vérifier est une compétence utile à tout le monde.",
    "Ce cours s'adresse à tous : les seniors qui reçoivent des messages transférés par leur famille, les jeunes sur les réseaux sociaux, le personnel des associations qui partage des nouvelles avec ses soutiens, les travailleurs et les personnes qui cherchent un emploi, et les personnes qui sortent de prison et découvrent ce qui a changé en ligne. Vous n'avez pas besoin d'être expert. Il vous faut juste quelques réflexes rapides.",
    "Vous apprendrez à vous arrêter avant de partager, à lire \"à côté\" pour vérifier une source, à faire une recherche d'image inversée, à repérer les faux créés par l'IA et les arnaques déguisées en informations, et à repérer vos propres biais. Chaque leçon dure environ cinq minutes et se termine par un exercice sur une vraie publication. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Trouvez une vraie publication, photo ou un vrai message transféré qui vous a surpris ou qui vous a fait ressentir une émotion forte. Vérifiez-le avec les étapes de ce cours : faites une pause, lisez \"à côté\" au sujet de la source, cherchez d'autres médias fiables qui en parlent, faites une recherche inversée sur chaque photo et cherchez les signes d'arnaque. Écrivez un verdict de trois phrases (vrai, faux, trompeur ou pas encore sûr) avec vos preuves, et décidez si vous allez le partager.",
  chapters: [
    {
      name: "Chapitre 1 : Vérifier ce que vous voyez",
      lessons: [
        {
          title: "Arrêtez-vous et vérifiez une affirmation",
          minutes: 5,
          goal: "Faire une pause avant de croire ou de partager, et vous poser trois questions rapides.",
          text: [
            "Les fausses publications se répandent le plus vite quand elles nous font ressentir une émotion forte : colère, peur, fierté ou excitation. Cette émotion est votre signal pour vous arrêter. Quelques secondes de vérification peuvent vous éviter de transmettre une fausse information à des personnes qui vous font confiance.",
            "Posez-vous trois questions. Qui est derrière ce contenu ? (Un vrai média, un service de l'État, un médecin, ou un compte dont vous n'avez jamais entendu parler ?) Quelles sont les preuves ? (Un lien vers une étude, un document, une vidéo de tout l'événement, ou seulement la parole de quelqu'un ?) Que disent d'autres sources fiables ? (Quelqu'un d'autre en parle-t-il ?)",
            "Une méthode utile s'appelle SIFT, d'après ses initiales en anglais : S pour Stop (arrêtez-vous) ; I pour Investigate (enquêtez sur la source) ; F pour Find (trouvez de meilleures sources sur le sujet) ; T pour Trace (remontez à l'endroit où l'affirmation, la citation ou la photo est apparue pour la première fois). Vous pratiquerez chaque partie dans ce cours. Si vous n'êtes pas sûr, vous pouvez attendre. Ne pas partager est toujours possible."
          ],
          steps: ["Remarquez une émotion forte : c'est votre signal pour vous arrêter.", "Demandez-vous : qui est derrière ce contenu ?", "Demandez-vous : quelles sont les preuves ?", "Demandez-vous : que disent d'autres sources fiables ?", "Pas sûr ? Ne partagez pas tout de suite."],
          words: [["Mésinformation", "une fausse information partagée par des personnes qui la croient peut-être vraie."], ["Désinformation", "une fausse information créée et diffusée exprès pour tromper les gens."], ["Affirmation", "ce qu'une publication présente comme vrai."]],
          slides: [
            { title: "Émotion forte = stop", bullets: ["Le faux se répand grâce à la colère, la peur et l'excitation", "Quelques secondes de vérification protègent ceux qui vous font confiance"] },
            { title: "Trois questions rapides", bullets: ["Qui est derrière ce contenu ?", "Quelles sont les preuves ?", "Que disent d'autres sources fiables ?"] },
            { title: "SIFT", bullets: ["S (Stop) : arrêtez-vous", "I (Investigate) : enquêtez sur la source", "F (Find) : trouvez de meilleures sources", "T (Trace) : remontez jusqu'à l'original"] },
            { title: "Pas sûr ?", bullets: ["Attendez", "Ne pas partager est toujours possible"] }
          ],
          sources: [
            { name: "Digital Inquiry Group : Civic Online Reasoning (leçons gratuites en anglais pour évaluer les informations en ligne)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Ouvrez vos réseaux sociaux, votre application d'actualités ou un groupe de discussion familial. Trouvez une publication qui vous a fait ressentir une émotion forte. Notez les réponses aux trois questions : qui, quelles preuves, que disent les autres.",
          youCanNow: "faire une pause quand une publication provoque une émotion forte, et demander qui est derrière, quelles sont les preuves et ce que disent les autres."
        },
        {
          title: "La lecture latérale : vérifier la source",
          minutes: 5,
          goal: "Vérifier qui est derrière un site web ou un compte en lisant d'autres sites à son sujet.",
          text: [
            "Les faux sites peuvent avoir l'air très professionnels, avec des logos, des pages \"Qui sommes-nous\" et des noms qui sonnent officiels. Lire le site lui-même ne vous dira pas si vous pouvez lui faire confiance. Les vérificateurs de faits professionnels font autrement : ils quittent le site et lisent \"à côté\". C'est ce qu'on appelle la lecture latérale.",
            "Ouvrez un nouvel onglet et cherchez le nom du site, de l'organisation ou de la personne, avec des mots comme \"qui finance\" ou \"fiable\". Regardez ce que d'autres en disent : des médias, l'article Wikipédia qui leur est consacré, ou des sites de vérification des faits comme AP Fact Check, Reuters Fact Check, PolitiFact, FactCheck.org ou Snopes (en anglais ; en français, il existe par exemple AFP Factuel). Une affirmation sur la santé ? Vérifiez ce que disent votre médecin ou les sites officiels de santé. Une affirmation sur un programme public ? Allez sur le site officiel, qui se termine souvent par .gov aux États-Unis.",
            "Cherchez aussi la même information dans au moins deux sources fiables que vous connaissez déjà. Si un seul site inconnu annonce une nouvelle énorme, méfiez-vous."
          ],
          steps: ["Ne jugez pas un site sur son apparence ni sur sa page \"Qui sommes-nous\".", "Ouvrez un nouvel onglet.", "Cherchez le nom du site, du groupe ou de la personne avec \"fiable\" ou \"qui finance\".", "Lisez ce qu'en disent les médias, Wikipédia ou les vérificateurs de faits.", "Cherchez la même information dans deux sources fiables."],
          words: [["Lecture latérale", "vérifier une source en la quittant pour lire ce que d'autres sites disent d'elle."], ["Vérificateur de faits", "une personne ou un groupe dont le métier est de vérifier si des affirmations sont vraies."]],
          slides: [
            { title: "Les faux sites peuvent avoir l'air vrais", bullets: ["Logos, pages \"Qui sommes-nous\", noms officiels", "Lire le site lui-même ne suffit pas"] },
            { title: "Lisez \"à côté\"", bullets: ["Ouvrez un nouvel onglet", "Cherchez le nom avec \"fiable\" ou \"qui finance\"", "Regardez ce que les autres en disent"] },
            { title: "Où chercher", bullets: ["Les médias et Wikipédia", "Vérificateurs : AP, Reuters, PolitiFact, FactCheck.org, Snopes", "Sites officiels, souvent en .gov aux États-Unis"] },
            { title: "Deux sources fiables", bullets: ["Un seul site inconnu annonce une grosse nouvelle ?", "Méfiez-vous"] }
          ],
          sources: [
            { name: "Digital Inquiry Group : Introduction à la lecture latérale (Civic Online Reasoning, en anglais)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Reprenez la publication de la leçon 1. Ouvrez un nouvel onglet et cherchez le nom du site ou du compte qui l'a publiée. Écrivez une phrase sur ce que d'autres sources en disent, et indiquez si un média fiable rapporte la même information.",
          youCanNow: "vérifier un site web ou un compte en lisant ce que d'autres sources fiables en disent."
        },
        {
          title: "Recherche d'image inversée : d'où vient cette photo ?",
          minutes: 5,
          goal: "Utiliser une recherche d'image inversée pour trouver où une photo est apparue pour la première fois.",
          text: [
            "Beaucoup de fausses publications utilisent une vraie photo avec une fausse histoire : une photo d'inondation vieille de plusieurs années présentée comme \"d'aujourd'hui\", ou une photo prise dans un autre pays. Une recherche d'image inversée trouve où la photo apparaît ailleurs en ligne, et montre souvent sa vraie date et sa vraie histoire.",
            "Sur un ordinateur : allez sur google.com et cliquez sur l'icône de l'appareil photo (\"Rechercher par image\"), puis importez la photo ou faites-la glisser dans la barre de recherche. Dans le navigateur Chrome, vous pouvez aussi faire un clic droit sur une photo d'un site web et choisir \"Rechercher avec Google Lens\" (Google Lens est l'outil de Google pour chercher avec des images). Sur un téléphone, l'application Google et Google Lens permettent de chercher avec une photo ou une capture d'écran. TinEye (tineye.com) est un autre site gratuit de recherche d'image inversée.",
            "Dans les résultats, cherchez la version la plus ancienne, l'endroit où elle est apparue en premier, et des articles ou des vérifications à son sujet. Si la photo vient d'un autre moment, d'un autre lieu ou d'un autre événement que ce que dit la publication, la publication est trompeuse, même si la photo est vraie."
          ],
          steps: ["Enregistrez la photo ou faites une capture d'écran.", "Ouvrez la recherche d'images de Google (icône de l'appareil photo), Google Lens ou tineye.com.", "Importez la photo.", "Cherchez la copie la plus ancienne, l'endroit où elle est apparue en premier et les vérifications éventuelles.", "Comparez : la vraie histoire correspond-elle à ce que dit la publication ?"],
          words: [["Recherche d'image inversée", "chercher avec une photo pour trouver où elle apparaît ailleurs en ligne."], ["Capture d'écran", "une image de ce qui est affiché sur votre écran."], ["Trompeur", "qui utilise quelque chose de vrai pour donner une fausse idée."]],
          slides: [
            { title: "Vraie photo, fausse histoire", bullets: ["De vieilles photos présentées comme \"d'aujourd'hui\"", "Des photos d'un autre lieu ou d'un autre événement"] },
            { title: "Chercher avec une photo", bullets: ["google.com : cliquez sur l'icône de l'appareil photo, importez", "Chrome : clic droit, \"Rechercher avec Google Lens\"", "Téléphone : application Google ou Lens ; aussi tineye.com"] },
            { title: "Lisez les résultats", bullets: ["Trouvez la copie la plus ancienne", "Où est-elle apparue en premier ?", "Y a-t-il des vérifications ?"] },
            { title: "Comparez", bullets: ["Autre moment, autre lieu ou autre événement ?", "Alors la publication est trompeuse"] }
          ],
          sources: [
            { name: "Aide Recherche Google : Effectuer une recherche à l'aide d'une image", url: "https://support.google.com/websearch/answer/1325808" }
          ],
          tryIt: "Trouvez une photo spectaculaire dans une publication ou un fil d'actualité. Faites une capture d'écran et lancez une recherche d'image inversée. Notez la date la plus ancienne que vous trouvez et si elle correspond à l'histoire de la publication.",
          youCanNow: "faire une recherche d'image inversée et dire si une vraie photo est utilisée avec une fausse histoire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Vérifier ce que vous voyez",
        questions: [
          { q: "Une publication vous met très en colère. Quelle est la meilleure première étape ?", options: ["La partager tout de suite", "Vous arrêter et vérifier avant de partager", "Commenter tout en majuscules", "La transférer à toute votre famille"], answer: 1, why: "Les émotions fortes sont le signal pour s'arrêter et vérifier." },
          { q: "Que veut dire la lecture latérale ?", options: ["Lire attentivement la page \"Qui sommes-nous\" du site", "Lire seulement les titres", "Lire les commentaires", "Quitter le site pour voir ce que d'autres sources en disent"], answer: 3, why: "Les vérificateurs de faits lisent \"à côté\", dans de nouveaux onglets." },
          { q: "Un tout nouveau site avec un logo professionnel annonce une énorme nouvelle que personne d'autre ne donne. Que faire ?", options: ["Chercher l'information dans deux sources fiables", "Y croire : le logo a l'air officiel", "La partager pour que les autres décident", "Payer pour en lire plus"], answer: 0, why: "Une grosse nouvelle doit être confirmée par des sources fiables." },
          { q: "Que vous aide à trouver une recherche d'image inversée ?", options: ["Le mot de passe du photographe", "Qui a aimé la photo", "Où une photo apparaît ailleurs en ligne et quand elle est apparue pour la première fois", "Un meilleur appareil photo"], answer: 2, why: "Elle remonte jusqu'à la source d'une photo." },
          { q: "Une vraie photo d'inondation de 2015 est présentée comme \"d'aujourd'hui\". La publication est :", options: ["Vraie, parce que la photo est vraie", "Trompeuse", "Un deepfake", "Une vérification des faits"], answer: 1, why: "Une vraie photo avec une fausse histoire est trompeuse." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faux créés par l'IA, arnaques et votre propre esprit",
      lessons: [
        {
          title: "Repérer les deepfakes et les faux créés par l'IA",
          minutes: 5,
          goal: "Vérifier une photo, une vidéo ou une voix qui pourrait avoir été créée par l'IA.",
          text: [
            "Les outils d'IA peuvent maintenant créer des photos, des vidéos et des voix qui ont l'air et le son de vraies. Un deepfake (un hypertrucage : une fausse vidéo, photo ou piste audio créée avec l'IA) peut montrer une personne célèbre en train de dire quelque chose qu'elle n'a jamais dit. Un clone de voix peut imiter un membre de la famille à partir d'un court enregistrement de sa voix.",
            "Les anciennes astuces, comme compter les doigts ou chercher des oreilles floues, permettent encore de repérer certains faux, mais les nouveaux outils font moins d'erreurs : ne vous fiez donc pas seulement à l'apparence. Vérifiez plutôt le contexte. Qui l'a publié en premier ? Est-ce sur le vrai compte officiel de la personne ou de l'organisation ? Des médias fiables en parlent-ils ? Certaines plateformes et certains outils d'IA ajoutent des étiquettes ou des marques cachées aux contenus créés par l'IA, mais beaucoup de faux n'en ont aucune : l'absence d'étiquette ne prouve donc pas que c'est vrai.",
            "Pour les appels et les messages vocaux, le conseil de la FTC (la Commission fédérale du commerce des États-Unis, qui protège les consommateurs) est simple : ne vous fiez pas à la voix. Si un \"petit-enfant\" ou un \"patron\" vous appelle pour demander de l'argent ou des informations secrètes, raccrochez et rappelez-le à un numéro que vous connaissez déjà. Certaines familles choisissent un mot de passe secret pour les urgences."
          ],
          steps: ["Soyez très prudent avec les vidéos choquantes, les extraits de célébrités et les messages vocaux urgents.", "Ne vous fiez pas seulement à l'apparence.", "Vérifiez qui l'a publié en premier et si c'est sur le vrai compte officiel.", "Cherchez si des médias fiables en parlent.", "Pour les voix : raccrochez et rappelez à un numéro que vous connaissez."],
          words: [["Deepfake", "une fausse vidéo, photo ou piste audio créée avec l'IA pour ressembler à une vraie personne."], ["Clone de voix", "une copie de la voix de quelqu'un créée par l'IA."], ["Généré par l'IA", "créé par un outil d'IA au lieu d'être enregistré dans la vie réelle."]],
          slides: [
            { title: "L'IA peut tout imiter", bullets: ["Photos, vidéos et voix", "Des célébrités qui disent ce qu'elles n'ont jamais dit", "Des voix copiées à partir d'un court extrait"] },
            { title: "Ne vous fiez pas seulement à l'apparence", bullets: ["Des mains bizarres ou du flou trahissent certains faux", "Les nouveaux outils font moins d'erreurs", "Pas d'étiquette ne veut pas dire vrai"] },
            { title: "Vérifiez le contexte", bullets: ["Qui l'a publié en premier ?", "Est-ce sur le vrai compte officiel ?", "Des médias fiables en parlent-ils ?"] },
            { title: "Voix : ne vous fiez pas à la voix", bullets: ["Raccrochez", "Rappelez à un numéro que vous connaissez", "Pensez à un mot de passe familial"] }
          ],
          sources: [
            { name: "Alerte de la FTC aux consommateurs : des escrocs utilisent l'IA pour leurs arnaques aux urgences familiales (en anglais)", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" }
          ],
          tryIt: "Trouvez une vidéo ou une photo virale d'une personne célèbre. Vérifiez qui l'a publiée en premier, si elle apparaît sur le compte officiel de cette personne et si des médias fiables en parlent. Ensuite, choisissez un mot de passe familial avec une personne que vous aimez.",
          youCanNow: "vérifier un faux possible créé par l'IA grâce à son contexte, et vous protéger des voix clonées."
        },
        {
          title: "Les arnaques qui utilisent de fausses informations",
          minutes: 5,
          goal: "Repérer les faux articles et les fausses publicités qui sont en réalité des arnaques.",
          text: [
            "Beaucoup d'arnaques se déguisent en informations. Un faux article montre une personne célèbre qui \"révèle\" un investissement pour devenir riche rapidement, un remède miracle ou une aide gratuite de l'État, avec un lien pour s'inscrire. De faux appels aux dons apparaissent juste après les catastrophes. De fausses publicités sur les réseaux sociaux promettent d'énormes réductions \"pour une durée limitée\". Certaines fausses informations utilisent des vidéos créées par l'IA de célébrités ou de présentateurs de journal.",
            "Signes d'alerte : on vous presse ; on vous promet beaucoup d'argent, un remède ou un prix ; on vous demande de payer avec des cartes cadeaux, des virements ou des cryptomonnaies ; on vous demande des mots de passe, des codes ou des numéros d'identité ; ou le lien mène à un site qui n'est pas le vrai. La FTC dit que seuls les escrocs vous demandent d'acheter une carte cadeau pour les payer.",
            "Que faire : ne cliquez pas sur le lien. Allez sur le site de la vraie organisation en tapant vous-même son adresse, ou appelez un numéro que vous connaissez déjà. Donnez à des associations caritatives que vous pouvez vérifier. Si vous ou un proche avez perdu de l'argent, contactez votre banque tout de suite et signalez l'arnaque à la FTC sur ReportFraud.ftc.gov (aux États-Unis)."
          ],
          steps: ["Méfiez-vous des publications qui ressemblent à des articles et qui vendent quelque chose ou demandent de l'argent.", "Cherchez les signes d'alerte : urgence, grosses promesses, cartes cadeaux, virement ou crypto, codes.", "Ne cliquez pas sur le lien.", "Tapez vous-même le vrai site ou appelez un numéro que vous connaissez.", "Argent perdu ? Appelez votre banque, puis signalez sur ReportFraud.ftc.gov."],
          words: [["Arnaque", "une ruse pour voler de l'argent ou des informations."], ["Hameçonnage", "de faux messages qui essaient de vous faire cliquer sur un lien ou donner des informations privées."], ["Publication sponsorisée", "une publicité payante sur les réseaux sociaux ; elle n'est peut-être pas vérifiée."]],
          slides: [
            { title: "Des arnaques déguisées en informations", bullets: ["Une célébrité \"révèle\" un investissement ou un remède", "De fausses associations après une catastrophe", "Des vidéos IA de célébrités ou de présentateurs"] },
            { title: "Signes d'alerte", bullets: ["On vous presse", "Beaucoup d'argent, un remède ou un prix", "Cartes cadeaux, virements ou cryptomonnaies", "On demande des mots de passe, des codes ou des numéros d'identité"] },
            { title: "Que faire", bullets: ["Ne cliquez pas sur le lien", "Tapez vous-même l'adresse du vrai site", "Appelez un numéro que vous connaissez déjà"] },
            { title: "Argent perdu ?", bullets: ["Appelez votre banque tout de suite", "Signalez sur ReportFraud.ftc.gov (États-Unis)"] }
          ],
          sources: [
            { name: "FTC : Éviter et signaler les arnaques aux cartes cadeaux (en anglais)", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" },
            { name: "FTC : Les escrocs qui se font passer pour l'État ou pour des entreprises (en anglais)", url: "https://consumer.ftc.gov/government-business-impersonators" },
            { name: "FTC : ReportFraud (site pour signaler une fraude)", url: "https://reportfraud.ftc.gov/" }
          ],
          tryIt: "Parcourez vos réseaux sociaux ou vos messages et trouvez une publicité ou une publication qui promet de l'argent, un remède ou une grosse réduction. Listez tous les signes d'alerte que vous voyez. Si c'est une arnaque, utilisez le menu de la plateforme pour la signaler.",
          youCanNow: "repérer les arnaques qui ressemblent à des informations, éviter leurs liens et savoir où les signaler."
        },
        {
          title: "Les biais dans votre propre façon de penser",
          minutes: 5,
          goal: "Remarquer quand vos propres croyances ou émotions guident ce que vous acceptez comme vrai.",
          text: [
            "Les faux les plus difficiles à repérer sont ceux que nous avons envie de croire. Le biais de confirmation, c'est accepter vite ce qui correspond à ce que nous pensons déjà, et chercher avec soin les défauts de ce qui ne correspond pas. Tout le monde le fait, quels que soient l'âge, l'origine ou les opinions politiques.",
            "Les réseaux sociaux peuvent le renforcer. Les fils d'actualité nous montrent davantage de ce sur quoi nous cliquons déjà, alors nous pouvons finir par ne voir qu'un seul côté. Une publication partagée par un ami semble digne de confiance, mais votre ami ne l'a peut-être pas vérifiée non plus.",
            "Trois réflexes aident. Demandez-vous : \"Est-ce que j'y croirais si cela concernait l'autre camp ?\" Demandez-vous : \"Quelle preuve me ferait changer d'avis ?\" Et cherchez une source fiable qui pourrait ne pas être d'accord. Changer d'avis quand les faits changent est une force, pas une faiblesse. Avant de partager, jetez un dernier coup d'œil : est-ce vrai, est-ce utile et est-ce juste ?"
          ],
          steps: ["Remarquez quand une publication semble \"exactement ce que vous pensiez\".", "Demandez-vous : est-ce que j'y croirais si cela concernait l'autre camp ?", "Demandez-vous : quelle preuve me ferait changer d'avis ?", "Cherchez une source fiable qui pourrait ne pas être d'accord.", "Avant de partager : est-ce vrai, utile et juste ?"],
          words: [["Biais", "une tendance qui peut pousser notre pensée dans un sens sans que nous le remarquions."], ["Biais de confirmation", "accepter ce qui correspond à nos croyances et douter de ce qui n'y correspond pas."], ["Chambre d'écho", "un endroit où vous n'entendez que des opinions qui ressemblent aux vôtres."]],
          slides: [
            { title: "Nous croyons ce que nous voulons croire", bullets: ["Biais de confirmation : un oui facile à ce qui nous convient", "Un regard sévère sur le reste", "Tout le monde le fait"] },
            { title: "Les fils d'actualité le renforcent", bullets: ["Ils montrent davantage de ce sur quoi nous cliquons", "Nous ne voyons parfois qu'un seul côté", "Les amis partagent aussi sans vérifier"] },
            { title: "Trois réflexes", bullets: ["\"Est-ce que j'y croirais si cela concernait l'autre camp ?\"", "\"Quelle preuve me ferait changer d'avis ?\"", "Cherchez une source fiable qui n'est pas d'accord"] },
            { title: "Avant de partager", bullets: ["Est-ce vrai ?", "Est-ce utile ?", "Est-ce juste ?"] }
          ],
          tryIt: "Tâche finale : prenez une publication surprenante et vérifiez-la avec chaque étape de ce cours. Écrivez un verdict de trois phrases (vrai, faux, trompeur ou pas encore sûr) avec vos preuves, et notez une façon dont vos propres émotions ont pu vous influencer.",
          youCanNow: "vérifier une publication du début à la fin et remarquer quand vos propres biais vous influencent."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faux créés par l'IA, arnaques et votre propre esprit",
        questions: [
          { q: "Vous recevez un appel avec la voix de votre petit-fils qui demande de l'argent tout de suite. Que devez-vous faire ?", options: ["Envoyer l'argent vite", "Lui demander ses coordonnées bancaires", "Raccrocher et le rappeler à un numéro que vous connaissez", "Acheter des cartes cadeaux comme demandé"], answer: 2, why: "Les voix peuvent être clonées ; rappelez à un numéro connu." },
          { q: "Une vidéo choquante d'une célébrité n'a pas d'étiquette \"IA\". Cela veut dire :", options: ["Qu'elle est forcément vraie", "Qu'elle est forcément fausse", "Que la célébrité l'a approuvée", "Rien pour l'instant ; vérifiez qui l'a publiée en premier et si des médias fiables en parlent"], answer: 3, why: "Beaucoup de faux n'ont pas d'étiquette ; vérifiez le contexte." },
          { q: "Une publication qui ressemble à un article dit qu'une célébrité a trouvé un investissement secret et vous demande de vous inscrire. C'est très probablement :", options: ["Une arnaque", "Un programme de l'État", "Une vérification des faits", "Une information de dernière minute"], answer: 0, why: "Les faux articles sur l'investissement d'une célébrité sont une arnaque courante." },
          { q: "Où les personnes qui vivent aux États-Unis peuvent-elles signaler une arnaque ?", options: ["Dans les commentaires de l'escroc", "Sur ReportFraud.ftc.gov", "En répondant au SMS de l'arnaque", "Nulle part"], answer: 1, why: "La FTC recueille les signalements d'arnaques sur ReportFraud.ftc.gov." },
          { q: "Le biais de confirmation, c'est :", options: ["Vérifier chaque fait", "Douter de tout", "Accepter ce qui correspond à ce que nous pensons déjà", "Lire seulement les informations"], answer: 2, why: "Nous acceptons plus facilement ce qui correspond à nos croyances." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Esprit critique et repérage des fausses informations",
    questions: [
      { q: "La mésinformation, c'est :", options: ["Toujours créé exprès", "Une fausse information que des gens peuvent partager en la croyant vraie", "Seulement à la télévision", "De vraies informations"], answer: 1, why: "La mésinformation peut être partagée par erreur, de bonne foi." },
      { q: "Quelle émotion est un signal pour s'arrêter et vérifier ?", options: ["S'ennuyer", "Avoir sommeil", "Avoir faim", "Être en colère ou très excité par une publication"], answer: 3, why: "Les fausses publications se répandent grâce aux émotions fortes." },
      { q: "Que veut dire le S de SIFT ?", options: ["Stop (arrêtez-vous)", "Share (partagez)", "Search (cherchez)", "Save (enregistrez)"], answer: 0, why: "SIFT commence par Stop : arrêtez-vous." },
      { q: "Vous n'êtes pas sûr qu'une publication soit vraie. Le choix le plus sûr est :", options: ["La partager avec un avertissement", "La partager deux fois", "Attendre et ne pas la partager pour l'instant", "Ajouter votre propre supposition"], answer: 2, why: "Ne pas partager est toujours possible." },
      { q: "Pourquoi la page \"Qui sommes-nous\" d'un site ne suffit-elle pas pour lui faire confiance ?", options: ["Elle est toujours trop longue", "Les faux sites peuvent écrire n'importe quoi sur eux-mêmes", "Elle est écrite en petits caractères", "Il faut payer pour la lire"], answer: 1, why: "Il faut savoir ce que les autres disent du site." },
      { q: "Lequel est un organisme de vérification des faits ?", options: ["Un blog au hasard", "Une fenêtre publicitaire", "Reuters Fact Check", "Une chaîne de courriels"], answer: 2, why: "Reuters Fact Check est un vérificateur de faits connu." },
      { q: "Les sites officiels du gouvernement des États-Unis se terminent généralement par :", options: [".gov", ".win", ".xyz", ".shop"], answer: 0, why: "Les sites du gouvernement américain utilisent .gov." },
      { q: "Une publication sur la santé dit qu'un fruit guérit le diabète. Auprès de qui vérifier ?", options: ["Les commentaires de la publication", "La personne qui vend le fruit", "Un ami qui l'a partagée", "Votre médecin ou des sources de santé officielles"], answer: 3, why: "Les affirmations sur la santé demandent l'avis d'un médecin ou d'une source officielle." },
      { q: "Sur google.com, comment lancer une recherche avec une photo ?", options: ["Taper le mot photo", "Cliquer sur l'icône de l'appareil photo et importer l'image", "Appeler Google", "Imprimer la photo"], answer: 1, why: "L'icône de l'appareil photo ouvre la recherche par image." },
      { q: "Dans Chrome, un clic droit sur une photo permet de choisir :", options: ["Rechercher avec Google Lens", "Effacer Internet", "Acheter la photo", "L'envoyer à tout le monde"], answer: 0, why: "Chrome propose Rechercher avec Google Lens sur les images." },
      { q: "Dans les résultats d'une recherche d'image inversée, que cherchez-vous surtout ?", options: ["Celle qui a le plus de mentions J'aime", "La plus belle version", "La copie la plus ancienne et l'endroit où elle est apparue en premier", "La plus grande taille"], answer: 2, why: "La première apparition montre la vraie histoire." },
      { q: "Un deepfake, c'est :", options: ["Un écran cassé", "Une photo des fonds marins", "Une étiquette de vérification", "Une fausse vidéo, photo ou piste audio créée avec l'IA"], answer: 3, why: "Les deepfakes utilisent l'IA pour imiter de vraies personnes." },
      { q: "Pourquoi ne faut-il pas se fier seulement à l'apparence pour repérer les faux créés par l'IA ?", options: ["Les nouveaux outils d'IA font moins d'erreurs visibles", "Les faux créés par l'IA sont toujours évidents", "L'apparence ne compte jamais", "Seuls les experts peuvent voir les photos"], answer: 0, why: "Vérifier le contexte marche mieux à mesure que les faux s'améliorent." },
      { q: "Un mot de passe familial vous aide à :", options: ["Vous connecter aux réseaux sociaux", "Vérifier que la personne qui appelle est bien un membre de votre famille", "Payer des factures", "Déverrouiller votre téléphone"], answer: 1, why: "Une voix clonée ne connaîtra pas le mot de passe." },
      { q: "Quelle demande de paiement est un signe clair d'arnaque ?", options: ["Payer votre fournisseur d'électricité connu sur son site officiel", "Payer à la caisse d'un magasin", "\"Achetez des cartes cadeaux et envoyez-moi les numéros\"", "Une facture du cabinet de votre médecin que vous pouvez vérifier"], answer: 2, why: "La FTC dit que seuls les escrocs demandent un paiement en cartes cadeaux." },
      { q: "Une catastrophe vient d'arriver et une nouvelle page d'association demande des dons. Que faire de sage ?", options: ["Donner à une association que vous pouvez vérifier et en qui vous avez confiance", "Envoyer de l'argent à la page tout de suite", "Donner le mot de passe de votre banque", "Partager la page sans vérifier"], answer: 0, why: "De fausses associations apparaissent après les catastrophes." },
      { q: "Une publication contient un lien pour s'inscrire à une \"aide de l'État\". L'étape la plus sûre est :", options: ["Cliquer et saisir vos informations", "Leur envoyer votre numéro d'identité", "Répondre pour demander si c'est vrai", "Taper vous-même la vraie adresse en .gov pour vérifier"], answer: 3, why: "Aller vous-même sur le site officiel évite les faux liens." },
      { q: "Quelle question aide à repérer vos propres biais ?", options: ["\"Qui est d'accord avec moi ?\"", "\"Est-ce que j'y croirais si cela concernait l'autre camp ?\"", "\"À quelle vitesse puis-je partager ceci ?\"", "\"Est-ce drôle ?\""], answer: 1, why: "Inverser les camps montre si vos émotions vous guident." },
      { q: "Une chambre d'écho, c'est :", options: ["Une pièce bruyante", "Un site de vérification des faits", "Un endroit où vous n'entendez que des opinions comme les vôtres", "Un type de micro"], answer: 2, why: "Les chambres d'écho cachent les autres opinions." },
      { q: "Changer d'avis quand les faits changent, c'est :", options: ["Une faiblesse", "Une force d'une bonne réflexion", "Interdit", "Un signe de biais"], answer: 1, why: "Les personnes qui réfléchissent bien suivent les preuves." }
    ]
  }
};
