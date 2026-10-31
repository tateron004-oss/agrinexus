"use strict";

// Koach Learn course (French translation of shared/data-annotation-online-work.js). See scripts/koachlearn-courses/README.md, "Translations".

const MINDRIFT = { name: "Mindrift (tâches d'entraînement de l'IA ; indique que les tâches de Toloka y ont été transférées et que l'inscription est gratuite)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen par Appen (projets pour contributeurs ; indique ne jamais demander de payer pour s'inscrire)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (micro-tâches : données d'entraînement pour l'IA, sondages, enregistrements de voix)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Sama, offres d'emploi (bureaux à Nairobi au Kenya, et à Gulu et Kampala en Ouganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "Federal Trade Commission des États-Unis (FTC) : arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "OIT : Le rôle des plateformes numériques de travail dans la transformation du monde du travail", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Nigeria Data Protection Commission (autorité de protection des données du Nigeria)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-fr",
  lang: "fr",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Annotation de données pour l'IA et micro-tâches en ligne",
  skills: "Reconnaître le travail d'annotation de données et les micro-tâches, Étiqueter des données en suivant des consignes, Réussir les tests de qualification et garder une bonne qualité, Vérifier qu'une plateforme est réelle et refuser les faux emplois, Protéger les données personnelles et les données des tâches, Calculer votre vrai revenu par heure",
  outcome: "étiqueter des données pour l'IA en suivant des consignes écrites, vérifier qu'une plateforme de travail en ligne est réelle avant de vous inscrire, protéger vos propres données et celles que vous voyez, et calculer ce que ce travail vous rapporte vraiment par heure.",
  about: [
    "Les outils d'IA apprennent à partir d'exemples que des personnes préparent : des photos avec un cadre tracé autour des voitures, des phrases marquées comme positives ou négatives, des enregistrements transcrits, des réponses d'IA classées de la meilleure à la moins bonne. Ce travail s'appelle l'annotation de données ou l'étiquetage de données. Beaucoup de gens le font en ligne, sous forme de petites tâches payées, appelées micro-tâches, de Nairobi à Lagos, Accra, Dakar, Manille, Hyderabad, Bogotá, Mexico, Casablanca, Le Caire et dans des villes partout aux États-Unis.",
    "Ce cours s'adresse aux jeunes et aux adultes qui ont un téléphone ou un ordinateur et qui veulent essayer ce travail en toute sécurité. Vous apprendrez les principaux types de tâches, vous vous entraînerez à étiqueter sur papier avec des consignes écrites, vous verrez comment fonctionnent les tests de qualification et les scores de qualité, vous vérifierez qu'une plateforme est réelle, vous refuserez les nombreux faux « emplois dans l'IA » qui demandent de l'argent, vous protégerez les données privées et vous calculerez votre vrai revenu par heure.",
    "Soyez honnête avec vous-même au sujet de l'argent. Le revenu est irrégulier : certaines semaines, il y a beaucoup de tâches, d'autres semaines très peu, et le temps passé sur les tests et à chercher des tâches n'est souvent pas payé. Une vraie plateforme ne vous demande jamais de payer pour commencer. Ce cours ne promet aucun revenu ; il vous aide à décider en toute lucidité.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant » à faire sur papier ou sur un téléphone. Il y a 2 questions rapides après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez votre plan de démarrage pour les micro-tâches : (1) une série d'entraînement de 10 éléments que vous avez étiquetés avec vos propres consignes d'une page, en signalant les éléments pas clairs ; (2) deux plateformes que vous avez vérifiées, avec ce que vous avez trouvé pour chaque point (site officiel, inscription gratuite, votre pays accepté, mode de paiement) ; (3) votre liste anti-arnaque de cinq signes d'alerte ; (4) vos trois règles de sécurité des données ; et (5) un journal hebdomadaire du temps et des gains, avec un plan daté sur 4 semaines, qui montre comment vous calculerez votre vrai revenu par heure.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes et des adultes aux États-Unis et ailleurs (Kenya, Nigeria, Ghana, Sénégal, Côte d'Ivoire, Philippines, Inde, Mexique, Colombie, Maroc, Égypte) : jeunes sortis de l'école, diplômés, parents au foyer, personnes qui cherchent un revenu en plus, et chercheurs d'emploi qui voient sans cesse des publicités « gagnez de l'argent avec l'IA ». Le cours est traduit en dix langues.",
    startingPoint: "Ils savent utiliser un smartphone, WhatsApp et les réseaux sociaux ; certains ont un ordinateur portable ou vont dans un cybercafé ou une bibliothèque. La plupart n'ont jamais étiqueté de données, lu des consignes de tâche ni passé de test de qualification. Beaucoup ont déjà vu des offres de « travail à domicile » à la tâche qui demandaient un dépôt d'argent.",
    gap: "Les apprenants doivent savoir à quoi ressemble un vrai travail de données pour l'IA, étiqueter avec soin selon des consignes, juger si une plateforme est réelle, protéger les données privées et calculer leur vrai revenu. Ainsi, ils peuvent gagner de l'argent là où le travail existe vraiment et éviter de perdre de l'argent et leurs pièces d'identité à cause de faux emplois.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; cours traduit en dix langues",
      "Appareils : souvent un smartphone seulement ; les données mobiles coûtent cher ; l'électricité peut être instable",
      "Temps : leçons de 4 à 6 minutes ; entraînement sur papier",
      "Les plateformes, les pays acceptés, les modes de paiement et les tarifs changent souvent : les apprenants vérifient les pages de chaque plateforme",
      "Ne jamais payer pour commencer ; ne jamais partager de mot de passe, de code PIN, de code à usage unique ni de pièce d'identité en dehors de la vérification officielle d'une plateforme"
    ],
    prerequisites: "Savoir utiliser un téléphone ou un ordinateur et avoir une adresse e-mail. Lire attentivement dans la langue des tâches."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de huit tâches en ligne", action: "repérer celles qui sont de l'annotation de données ou des micro-tâches et nommer la compétence que chacune demande", standard: "avec au moins 6 bonnes réponses sur 8" },
    { id: "O2", condition: "À partir de consignes d'étiquetage courtes et de dix éléments d'exemple", action: "étiqueter chaque élément en suivant les consignes et signaler ceux qui ne sont pas clairs", standard: "en accord avec le corrigé pour au moins 8 sur 10" },
    { id: "O3", condition: "Avant de commencer un test de qualification", action: "lister les étapes que vous suivrez pour lire les consignes, vous entraîner et vérifier votre propre travail", standard: "de façon à pouvoir expliquer comment vous garderez un bon score de qualité" },
    { id: "O4", condition: "Face à une plateforme ou à une offre d'emploi", action: "vérifier qu'elle est réelle et nommer les signes d'alerte d'un faux emploi", standard: "avant de payer quoi que ce soit ou de partager un document" },
    { id: "O5", condition: "Pendant que vous faites des tâches", action: "garder privées vos informations personnelles et les données des tâches", standard: "sans partager aucun mot de passe, code ni contenu de tâche en dehors de la plateforme" },
    { id: "O6", condition: "Après une semaine d'entraînement ou de vraies tâches", action: "noter votre temps et vos gains et calculer votre vrai revenu par heure", standard: "en comptant le temps non payé, comme les tests et la recherche de tâches" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Bien faire le travail",
      lessons: [
        {
          title: "Ce que sont l'annotation de données et les micro-tâches",
          objectives: ["O1"],
          minutes: 5,
          goal: "Repérer les principaux types de tâches de données pour l'IA et la compétence que chacun demande.",
          text: [
            "Les outils d'IA apprennent à partir d'exemples. Des personnes préparent ces exemples en ajoutant des étiquettes : cette photo montre un vélo, ce message est une plainte, cette phrase est en haoussa, cette réponse de l'IA est meilleure que l'autre. Ajouter des étiquettes s'appelle l'annotation de données ou l'étiquetage de données.",
            "Types de tâches courants : l'étiquetage d'images (tracer un cadre autour de chaque voiture, ou choisir une catégorie), l'étiquetage de texte (cet avis est-il positif, négatif ou neutre ?), le travail audio (taper ce que dit une personne, ou enregistrer votre voix en lisant des phrases) et l'évaluation de réponses d'IA (lire deux réponses d'une IA et choisir la meilleure, en donnant une raison). Certains projets plus récents cherchent des experts, comme des infirmiers, des comptables ou des personnes qui parlent bien deux langues.",
            "Les micro-tâches sont de petites tâches en ligne payées une par une, qui prennent souvent de quelques secondes à quelques minutes. Certaines personnes les font depuis chez elles sur des plateformes ouvertes ; d'autres sont embauchées comme salariées dans un bureau, par exemple par des entreprises qui ont des équipes de données à Nairobi ou à Kampala. Dans tous les cas, les compétences clés sont la lecture attentive, le respect exact des règles, une attention constante et l'honnêteté."
          ],
          words: [["Annotation de données (étiquetage de données)", "ajout d'étiquettes à des photos, des textes, des enregistrements ou des vidéos pour qu'un outil d'IA apprenne à partir d'eux."], ["Micro-tâche", "une petite tâche en ligne, payée une par une."], ["Évaluation de réponses d'IA", "lire les réponses d'un outil d'IA et juger laquelle est la meilleure, selon des règles."], ["Transcription", "taper exactement ce qui est dit dans un enregistrement."]],
          slides: [
            { title: "L'IA apprend à partir d'exemples étiquetés", bullets: ["Ce sont des personnes qui ajoutent les étiquettes", "On appelle cela l'annotation ou l'étiquetage de données"] },
            { title: "Types de tâches courants", bullets: ["Images : cadres ou catégories", "Texte : positif, négatif ou neutre", "Audio : taper ce qui est dit, ou enregistrer votre voix", "Réponses d'IA : choisir la meilleure, avec une raison"] },
            { title: "Où se trouve le travail", bullets: ["Plateformes en ligne ouvertes, tâche par tâche", "Emplois de bureau dans des entreprises de données, comme salarié", "Projets d'experts pour les personnes qui ont un métier ou deux langues"] },
            { title: "Les compétences les plus importantes", bullets: ["Lecture attentive", "Respect exact des règles", "Attention constante et honnêteté"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Écrivez les quatre types de tâches (image, texte, audio, évaluation d'IA) sur une feuille. À côté de chacun, écrivez une compétence que vous avez déjà et qui correspond, par exemple « Je parle anglais et twi » à côté de l'audio, ou « Je remarque les petits détails » à côté des images.",
          youCanNow: "nommer les principaux types de tâches de données pour l'IA et relier chacun à une compétence que vous avez déjà.",
          quickCheck: [
            { objective: "O1", q: "Laquelle de ces tâches est une tâche d'annotation de données ?", options: ["Vendre des téléphones en ligne", "Livrer des repas à moto", "Tracer un cadre autour de chaque voiture sur une photo de rue", "Réparer un écran d'ordinateur portable"], answer: 2, why: "Tracer des cadres autour d'objets, c'est de l'étiquetage d'images, l'une des principales tâches d'annotation." },
            { objective: "O1", q: "Une tâche vous montre deux réponses d'IA et vous demande laquelle est la meilleure et pourquoi. De quel type de tâche s'agit-il ?", options: ["Évaluation de réponses d'IA", "Transcription", "Étiquetage d'images", "Saisie de factures"], answer: 0, why: "Juger des réponses d'IA en donnant une raison, c'est de l'évaluation de réponses d'IA." }
          ]
        },
        {
          title: "Étiqueter en suivant les consignes",
          objectives: ["O2"],
          minutes: 6,
          goal: "Étiqueter dix éléments d'exemple en suivant des consignes écrites et signaler ceux qui ne sont pas clairs.",
          text: [
            "Chaque projet a des consignes : les règles qui disent comment étiqueter. Elles expliquent ce que veut dire chaque étiquette, donnent des exemples et expliquent les cas difficiles. Votre avis compte moins que les consignes. Si les consignes disent « une personne sur une affiche compte comme une personne », vous l'étiquetez ainsi, même si cela vous paraît bizarre.",
            "Lisez toutes les consignes avant votre première tâche, puis gardez-les ouvertes. Cherchez les exemples et les cas limites : les éléments qui pourraient correspondre à deux étiquettes. C'est là que se font la plupart des erreurs.",
            "Quand un élément n'est vraiment pas clair, ne devinez pas au hasard. Utilisez l'option pour passer ou signaler s'il y en a une, ou faites ce que les consignes disent pour les éléments pas clairs. Mieux vaut être soigneux et régulier que rapide."
          ],
          steps: ["Lisez toutes les consignes une fois, lentement.", "Écrivez chaque étiquette et son sens avec vos propres mots.", "Étudiez les exemples et les cas limites.", "Étiquetez chaque élément, en relisant les consignes quand vous n'êtes pas sûr.", "Signalez ou passez les éléments que les consignes ne couvrent pas, comme elles vous le disent."],
          words: [["Consignes", "les règles écrites d'un projet d'étiquetage : ce que veut dire chaque étiquette et comment traiter les cas difficiles."], ["Cas limite", "un élément qui pourrait correspondre à plus d'une étiquette, et pour lequel il faut relire la règle."], ["Signaler", "marquer un élément comme pas clair ou défectueux pour qu'un vérificateur le regarde."]],
          slides: [
            { title: "Ce sont les consignes qui décident", bullets: ["Elles disent ce que veut dire chaque étiquette", "Elles donnent des exemples et des cas difficiles", "Suivez-les, même contre votre propre avis"] },
            { title: "Comment bien étiqueter", bullets: ["Lisez d'abord toutes les consignes", "Gardez-les ouvertes pendant le travail", "Relisez-les dès que vous avez un doute"] },
            { title: "Cas limites et éléments pas clairs", bullets: ["La plupart des erreurs se font sur les cas limites", "Signalez ou passez comme le disent les consignes", "Mieux vaut soigneux et régulier que rapide"] }
          ],
          tryIt: "Entraînez-vous sur papier. Consignes : étiquetez chaque message POSITIF (content du service), NÉGATIF (pas content) ou NEUTRE (une question ou un fait) ; s'il est à la fois content et pas content, étiquetez-le selon la demande principale. Étiquetez ces dix messages : 1 « Merci, la livraison a été rapide ! » 2 « Où se trouve votre boutique à Kumasi ? » 3 « Le pain était encore rassis. » 4 « Super prix, mais le carton était abîmé. Merci de le remplacer. » 5 « Ouvert le dimanche ? » 6 « Le meilleur tailleur de Dakar ! » 7 « J'ai attendu deux heures. » 8 « La commande 2231 est arrivée. » 9 « J'adore, mais je veux un remboursement pour le deuxième. » 10 « asdf ». Corrigé : 1 POS, 2 NEU, 3 NÉG, 4 NÉG, 5 NEU, 6 POS, 7 NÉG, 8 NEU, 9 NÉG, 10 à signaler (ce n'est pas un vrai message).",
          youCanNow: "lire des consignes d'étiquetage, les appliquer à chaque élément et signaler les éléments qu'elles ne couvrent pas.",
          quickCheck: [
            { objective: "O2", q: "Les consignes disent qu'un personnage de dessin animé compte comme une personne. Vous pensez que non. Que faites-vous ?", options: ["Vous suivez votre propre avis", "Vous l'étiquetez comme une personne, comme le disent les consignes", "Vous passez tous les dessins animés", "Vous demandez à un ami sur WhatsApp de décider"], answer: 1, why: "Dans le travail d'étiquetage, ce sont les consignes qui décident, pas l'avis personnel." },
            { objective: "O2", q: "Un élément ne correspond à aucune étiquette des consignes. Quelle est la meilleure chose à faire ?", options: ["Choisir une étiquette au hasard pour gagner du temps", "Lui donner l'étiquette la plus courante", "Quitter la plateforme", "Le signaler ou le passer comme les consignes vous le disent"], answer: 3, why: "Signaler les éléments pas clairs garde les données propres et protège votre score de qualité." }
          ]
        },
        {
          title: "Tests de qualification et scores de qualité",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lister les étapes que vous suivrez pour réussir un test de qualification et garder un bon score de qualité.",
          text: [
            "La plupart des projets commencent par un test de qualification : une courte série de tâches d'entraînement dont les réponses sont connues. Il faut en général un bon résultat pour obtenir du travail payé. Sur beaucoup de plateformes, le temps de ce test n'est pas payé : préparez-vous bien et passez-le quand vous êtes reposé.",
            "Une fois que vous avez commencé, la plateforme continue de vérifier votre travail. Certains éléments ont des réponses connues cachées, et des vérificateurs contrôlent des échantillons. Ensemble, cela donne votre score de qualité. Un bon score peut vous apporter plus de tâches ; un mauvais score peut vous faire retirer d'un projet.",
            "Pour garder une bonne qualité : lisez les retours, relisez les consignes quand elles changent, ralentissez sur les cas limites, faites des pauses, et n'utilisez jamais d'astuces ni de réponses copiées. Certains projets interdisent de faire faire la tâche par des outils d'IA ; suivez les règles du projet."
          ],
          steps: ["Lisez toutes les consignes avant le test.", "Faites les tâches d'entraînement proposées.", "Passez le test quand vous êtes reposé, avec une connexion internet stable.", "Après chaque lot, lisez les retours et notez vos erreurs.", "Relisez les consignes chaque fois qu'elles sont mises à jour."],
          words: [["Test de qualification", "un court test de tâches d'entraînement à réussir avant d'obtenir du travail payé sur un projet."], ["Score de qualité", "une mesure de la fréquence à laquelle vos étiquettes sont justes, utilisée pour décider si vous recevez plus de tâches."], ["Question de contrôle (gold question)", "une tâche cachée dont la réponse est connue, utilisée pour vérifier votre précision."]],
          slides: [
            { title: "Avant le travail payé : un test", bullets: ["Tâches d'entraînement aux réponses connues", "Souvent non payé : préparez-vous d'abord", "Passez-le reposé, avec une connexion stable"] },
            { title: "Votre travail est toujours vérifié", bullets: ["Réponses connues cachées", "Des vérificateurs contrôlent des échantillons", "Ensemble, cela donne votre score de qualité"] },
            { title: "Gardez un bon score", bullets: ["Lisez les retours et notez vos erreurs", "Relisez les consignes quand elles changent", "Ralentissez sur les cas limites ; faites des pauses", "Suivez les règles du projet sur les outils d'IA"] }
          ],
          tryIt: "Corrigez vos dix étiquettes d'entraînement de la leçon précédente avec le corrigé. Écrivez votre note sur 10, les éléments que vous avez ratés et une règle que vous vérifierez avec plus de soin la prochaine fois. Puis écrivez votre plan en cinq étapes pour votre premier vrai test de qualification.",
          youCanNow: "vous préparer à un test de qualification, vérifier votre propre travail avec un corrigé et expliquer comment vous garderez un bon score de qualité.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un test de qualification sur un projet d'étiquetage ?", options: ["Une courte série de tâches d'entraînement à réussir avant le travail payé", "Un examen scolaire que vous payez", "Une demande de prêt", "Un entretien vidéo avec le patron du client"], answer: 0, why: "Les projets utilisent un test de qualification pour vérifier que vous savez suivre les consignes avant de vous confier des tâches payées." },
            { objective: "O3", q: "Votre score de qualité baisse après une mise à jour des consignes. Que devez-vous faire en premier ?", options: ["Travailler plus vite pour compenser", "Ouvrir un deuxième compte", "Relire les consignes mises à jour et vos retours", "L'ignorer ; les scores ne comptent pas"], answer: 2, why: "Une baisse après une mise à jour veut souvent dire qu'une règle a changé ; relire la règle et les retours corrige la cause." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien faire le travail",
        questions: [
          { objective: "O1", q: "Taper exactement ce que dit une personne dans un enregistrement s'appelle :", options: ["L'étiquetage d'images", "L'évaluation de réponses d'IA", "La comptabilité", "La transcription"], answer: 3, why: "La transcription consiste à taper exactement ce qui est dit." },
          { objective: "O1", q: "Quelle compétence compte le plus pour le travail d'étiquetage ?", options: ["Taper vite avec beaucoup d'erreurs", "Lire attentivement et suivre les règles exactement", "Avoir un ordinateur cher", "Savoir programmer"], answer: 1, why: "L'étiquetage dépend d'une lecture attentive des règles et de leur application de la même façon à chaque fois." },
          { objective: "O2", q: "Consignes : étiquetez un message NÉGATIF si la personne n'est pas contente. « Le repas était froid et en retard. » Quelle étiquette ?", options: ["NÉGATIF", "POSITIF", "NEUTRE", "Le signaler"], answer: 0, why: "La personne n'est pas contente du repas, donc les consignes disent NÉGATIF." },
          { objective: "O2", q: "Où se font la plupart des erreurs d'étiquetage ?", options: ["Seulement sur le premier élément", "Sur les éléments qui ont des exemples clairs", "Sur les cas limites qui pourraient correspondre à deux étiquettes", "Sur les éléments que vous signalez"], answer: 2, why: "Les cas limites peuvent correspondre à plus d'une étiquette, donc il faut relire les règles avec soin." },
          { objective: "O3", q: "Quelle habitude aide à garder un bon score de qualité ?", options: ["Copier les réponses d'un groupe de discussion", "Lire les retours après chaque lot et noter ses erreurs", "Travailler dix heures sans pause", "Deviner vite sur les éléments difficiles"], answer: 1, why: "Les retours montrent exactement quelles règles vous ratez, pour que vous puissiez corriger." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Travailler en sécurité et gagner honnêtement",
      lessons: [
        {
          title: "Vérifier qu'une plateforme est réelle et refuser les faux emplois",
          objectives: ["O4"],
          minutes: 6,
          goal: "Vérifier si une plateforme ou une offre d'emploi est réelle et nommer les signes d'alerte d'une fausse offre.",
          text: [
            "Les vraies plateformes existent. Parmi celles qui disent sur leur propre site que l'inscription est gratuite, il y a CrowdGen d'Appen, Mindrift (où les tâches de Toloka ont été transférées) et Clickworker. Les plateformes changent, ferment et n'acceptent pas les mêmes pays : vérifiez donc toujours sur le site de la plateforme si votre pays est accepté, quel travail est proposé et comment le paiement est envoyé.",
            "Les faux « emplois dans l'IA » sont partout, sur WhatsApp, Telegram, TikTok et Facebook. Le signe le plus important : ils vous demandent de payer. Un vrai emploi ne vous demande jamais de payer pour vous inscrire, pour débloquer des tâches, pour une formation, pour un kit de démarrage ou pour retirer vos gains. La Federal Trade Commission des États-Unis (FTC, l'agence de protection des consommateurs) indique que les employeurs honnêtes ne vous font pas payer pour obtenir un emploi.",
            "Autres signes d'alerte : un salaire trop beau pour un travail facile ; un recruteur qui ne parle que sur WhatsApp ou Telegram ; des tâches comme aimer des vidéos ou noter des produits où vous devez déposer de l'argent (souvent en crypto) pour continuer ; être payé puis devoir en renvoyer une partie ; des demandes de pièce d'identité, de code PIN bancaire ou de code à usage unique dans une discussion ; et la pression pour décider aujourd'hui."
          ],
          steps: ["Trouvez vous-même le site officiel de la plateforme ; n'utilisez pas le lien du message.", "Vérifiez que l'inscription est gratuite et lisez ses pages sur la rémunération et les paiements.", "Vérifiez qu'elle accepte les travailleurs de votre pays.", "Cherchez le nom de la plateforme avec le mot « arnaque » (ou « scam ») et lisez ce que d'autres signalent.", "Refusez toute offre qui vous demande de payer, de déposer ou de renvoyer de l'argent."],
          words: [["Arnaque aux tâches", "un faux emploi où vous faites des tâches simples, voyez de faux gains, puis on vous dit de déposer de l'argent pour continuer ou retirer."], ["Recruteur", "une personne qui trouve des travailleurs pour une entreprise. Les vrais recruteurs ne vous font pas payer."], ["Site officiel", "le site propre de la plateforme, que vous trouvez vous-même, pas par un lien que quelqu'un vous envoie."]],
          slides: [
            { title: "Vraies plateformes : vérifiez par vous-même", bullets: ["Trouvez le site officiel vous-même", "L'inscription doit être gratuite", "Vérifiez votre pays, le travail et le mode de paiement"] },
            { title: "Le signe d'alerte numéro un", bullets: ["On vous demande de payer", "Pour s'inscrire, débloquer des tâches, se former ou retirer", "Un vrai emploi ne vous fait jamais payer pour travailler"] },
            { title: "Autres signes d'alerte", bullets: ["Trop d'argent pour un travail facile", "Recruteurs joignables seulement sur WhatsApp ou Telegram", "Dépôts pour continuer, ou argent à renvoyer", "Demande de pièce d'identité, de PIN ou de code dans une discussion"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Choisissez deux plateformes (de cette leçon, ou une qu'utilise un ami). Pour chacune, écrivez : le site officiel que vous avez trouvé vous-même, si l'inscription est gratuite, si votre pays est accepté, comment le paiement est envoyé, et ce que vous avez trouvé en cherchant son nom avec « arnaque ». Puis écrivez votre liste anti-arnaque de cinq signes d'alerte.",
          youCanNow: "vérifier une plateforme sur son propre site et refuser un faux emploi en nommant ses signes d'alerte.",
          quickCheck: [
            { objective: "O4", q: "Un message WhatsApp propose du « travail d'évaluation d'IA » mais demande 20 $ de frais d'activation. Qu'est-ce que c'est ?", options: ["Un coût de démarrage normal", "Des frais de formation raisonnables", "Un signe d'arnaque : un vrai emploi ne vous fait jamais payer pour commencer", "Un impôt"], answer: 2, why: "Vous demander de payer pour commencer est le signe le plus clair d'un faux emploi." },
            { objective: "O4", q: "Comment ouvrir une plateforme dont vous avez entendu parler ?", options: ["Cliquer sur le lien du message du recruteur", "Trouver vous-même son site officiel et lire ses pages", "Demander au recruteur d'envoyer des captures d'écran", "Télécharger un fichier envoyé par le recruteur"], answer: 1, why: "Trouver le site vous-même évite les fausses pages qui imitent le vrai site et les fichiers dangereux." }
          ]
        },
        {
          title: "Protéger vos données et les données des tâches",
          objectives: ["O5"],
          minutes: 5,
          goal: "Écrire trois règles qui gardent privées vos informations personnelles et les données des tâches.",
          text: [
            "Protégez-vous. Utilisez un mot de passe solide et unique et activez la connexion en deux étapes. Ne partagez jamais un code à usage unique, un code PIN ou un mot de passe avec qui que ce soit, même avec quelqu'un qui dit venir de la plateforme. Les vraies plateformes peuvent demander une pièce d'identité pour vous vérifier, mais seulement sur leur site ou leur application officiels, jamais dans une discussion.",
            "Protégez les données que vous voyez. Les tâches peuvent montrer des photos, des voix, des messages, ou des informations médicales et financières de vraies personnes. Beaucoup de projets vous font accepter de garder les tâches confidentielles. Ne faites jamais de capture d'écran des tâches, ne les publiez pas dans des groupes et ne les collez pas dans d'autres outils d'IA, sauf si le projet le permet. Les pays ont des lois et des autorités de protection des données, par exemple la Nigeria Data Protection Commission.",
            "Protégez votre compte. Ne partagez pas et ne vendez pas votre compte, et ne laissez personne d'autre travailler dessus. Les plateformes peuvent fermer un compte pour cela, et vous risquez de perdre les gains pas encore payés. Utilisez uniquement votre vraie identité."
          ],
          steps: ["Utilisez un mot de passe solide et unique et la connexion en deux étapes.", "Ne donnez votre pièce d'identité que sur le site ou l'application officiels de la plateforme.", "Ne partagez jamais de code, de PIN ni de mot de passe.", "Gardez le contenu des tâches dans la plateforme : pas de captures d'écran, pas de partage.", "Ne partagez, ne louez et ne vendez jamais votre compte."],
          words: [["Connexion en deux étapes", "une deuxième vérification, comme un code envoyé sur votre téléphone, quand vous vous connectez."], ["Confidentiel", "privé : vous ne devez le partager avec personne en dehors du travail."], ["Code à usage unique", "un code court qu'on vous envoie pour confirmer que c'est bien vous. Ne le partagez jamais."]],
          slides: [
            { title: "Protégez-vous", bullets: ["Mot de passe solide et unique, connexion en deux étapes", "Ne partagez jamais de code, de PIN ni de mot de passe", "Pièce d'identité seulement sur le site ou l'appli officiels"] },
            { title: "Protégez les données des tâches", bullets: ["Les tâches peuvent montrer des infos de vraies personnes", "Pas de captures d'écran, pas de partage en groupe", "Pas de copier-coller dans d'autres outils d'IA sauf si c'est permis"] },
            { title: "Protégez votre compte", bullets: ["Ne le partagez pas, ne le louez pas, ne le vendez pas", "Utilisez uniquement votre propre identité", "Sinon, vous risquez de perdre des gains pas encore payés"] }
          ],
          sources: [NDPC],
          tryIt: "Écrivez vos trois règles de sécurité des données avec vos propres mots : une pour votre compte, une pour votre pièce d'identité et vos codes, et une pour les données des tâches. Puis activez la connexion en deux étapes sur votre compte e-mail si ce n'est pas encore fait.",
          youCanNow: "protéger vos informations personnelles et garder privées les données des tâches.",
          quickCheck: [
            { objective: "O5", q: "Quelqu'un dit être le support de la plateforme et vous demande le code qui vient d'arriver sur votre téléphone. Que faites-vous ?", options: ["Je ne le donne jamais, et je contacte le support par le site officiel", "Je l'envoie, car le support en a besoin", "J'envoie la moitié du code", "Je le publie dans un groupe pour demander conseil"], answer: 0, why: "Les codes à usage unique sont pour vous seul ; en partager un permet à quelqu'un de prendre votre compte." },
            { objective: "O5", q: "Une tâche montre la photo d'une lettre médicale d'un inconnu. Que faut-il faire ?", options: ["En faire une capture d'écran pour s'entraîner", "La partager dans votre groupe d'étude", "La coller dans un outil d'IA gratuit pour la lire", "L'étiqueter dans la plateforme et ne la partager avec personne"], answer: 3, why: "Les données des tâches sont confidentielles et restent dans la plateforme." }
          ]
        },
        {
          title: "Calculer votre vrai revenu et faire un plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Noter votre temps et vos gains et calculer votre vrai revenu par heure.",
          text: [
            "Le revenu des micro-tâches est irrégulier. Il varie selon le projet, le pays et la plateforme ; certaines semaines, il y a beaucoup de tâches, d'autres aucune. Le temps passé sur les tests, les formations et la recherche de tâches n'est souvent pas payé. L'Organisation internationale du Travail (OIT) a étudié le travail sur les plateformes et demande qu'il soit un travail décent, avec une rémunération et des conditions justes.",
            "Alors, mesurez-le. Tenez un journal de chaque séance : date, minutes travaillées (tests et attente compris), tâches faites et argent gagné. Vrai revenu par heure = total de l'argent gagné ÷ total des heures, en comptant tout le temps. Exemple : vous avez gagné 6 dollars dans la semaine et passé 4 heures au total, donc votre vrai revenu est de 1,50 dollar par heure.",
            "Ensuite, décidez. Comparez avec les autres possibilités près de chez vous. Beaucoup de gens voient les micro-tâches comme un revenu en plus ou comme un premier pas vers des postes mieux payés : vérificateur qualité, projets d'experts ou emploi à plein temps dans une entreprise de données. Gardez une trace de ce qu'on vous paie, et demandez à l'administration fiscale de votre pays si et comment vous devez le déclarer."
          ],
          steps: ["Notez chaque séance : date, total des minutes (tests et attente compris), tâches, argent.", "Additionnez l'argent de la semaine et les heures de la semaine.", "Divisez l'argent par les heures pour obtenir votre vrai revenu par heure.", "Comparez avec vos autres possibilités.", "Planifiez le mois prochain : heures, plateformes et une compétence à développer."],
          words: [["Vrai revenu par heure", "tout l'argent gagné divisé par toutes les heures passées, temps non payé compris."], ["Temps non payé", "le temps passé sur les tests, les formations et la recherche de tâches, qui ne rapporte rien."], ["Journal", "un simple relevé écrit que vous remplissez chaque fois que vous travaillez."]],
          slides: [
            { title: "Le revenu est irrégulier", bullets: ["Il varie selon le projet, le pays et la plateforme", "Des semaines chargées et des semaines vides", "Les tests et la recherche sont souvent non payés"] },
            { title: "Mesurez-le avec un journal", bullets: ["Date, total des minutes, tâches, argent", "Comptez aussi les tests et le temps d'attente"] },
            { title: "Votre vrai revenu par heure", bullets: ["Total de l'argent ÷ total des heures", "Exemple : 6 dollars ÷ 4 heures = 1,50 dollar par heure"] },
            { title: "Décidez et planifiez", bullets: ["Comparez avec les autres possibilités près de chez vous", "Planifiez heures, plateformes et une compétence à développer", "Gardez vos relevés ; demandez à l'administration fiscale"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Dessinez un journal à cinq colonnes : date, minutes (toutes), tâches, argent, notes. Remplissez une ligne avec l'entraînement d'aujourd'hui (argent : 0). Puis écrivez un plan daté sur 4 semaines : quelles deux plateformes vous allez vérifier ou rejoindre, combien d'heures par semaine, et le jour de chaque semaine où vous calculerez votre vrai revenu par heure.",
          youCanNow: "tenir un journal du temps et des gains, calculer votre vrai revenu par heure et planifier vos quatre prochaines semaines.",
          quickCheck: [
            { objective: "O6", q: "Vous avez gagné 10 dollars et passé 5 heures au total, dont 1 heure de test non payé. Quel est votre vrai revenu par heure ?", options: ["10 dollars par heure", "2,50 dollars par heure", "2 dollars par heure", "5 dollars par heure"], answer: 2, why: "Le vrai revenu par heure compte tout le temps : 10 dollars ÷ 5 heures = 2 dollars par heure." },
            { objective: "O6", q: "Que doit contenir votre journal de travail ?", options: ["Seulement l'argent gagné", "Seulement les jours où vous avez été payé", "Votre mot de passe, pour ne pas l'oublier", "La date, toutes les minutes y compris tests et attente, les tâches et l'argent"], answer: 3, why: "Compter chaque minute et chaque paiement montre ce que le travail rapporte vraiment." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Travailler en sécurité et gagner honnêtement",
        questions: [
          { objective: "O4", q: "Un « travail à la tâche » sur Telegram montre vos gains qui augmentent mais dit que vous devez déposer de la crypto pour retirer. Qu'est-ce que c'est ?", options: ["Un système de bonus normal", "Une arnaque aux tâches", "Des frais bancaires", "Un impôt de l'État"], answer: 1, why: "Demander un dépôt pour continuer ou pour retirer, c'est le schéma d'une arnaque aux tâches." },
          { objective: "O4", q: "Quelle est la meilleure première vérification d'une plateforme ?", options: ["Trouver vous-même son site officiel et confirmer que l'inscription est gratuite", "Faire confiance à la photo de profil du recruteur", "Compter les « j'aime » sur sa publicité", "Payer de petits frais pour la tester"], answer: 0, why: "Le site officiel, trouvé par vous, montre si la plateforme est gratuite, réelle et ouverte à votre pays." },
          { objective: "O5", q: "Une vraie plateforme vous demande de vérifier votre identité. Où devez-vous envoyer votre pièce d'identité ?", options: ["Dans une discussion WhatsApp avec le recruteur", "Par e-mail à n'importe quelle adresse qu'on vous donne", "Seulement sur le site ou l'application officiels de la plateforme", "Dans un groupe public"], answer: 2, why: "La pièce d'identité ne va que dans l'étape de vérification officielle, jamais dans une discussion." },
          { objective: "O5", q: "Un ami propose de vous payer pour utiliser votre compte sur la plateforme. Que faites-vous ?", options: ["Je le loue pour un mois", "Je partage le mot de passe mais je garde les gains", "Je le laisse l'utiliser seulement la nuit", "Je refuse : partager ou vendre un compte enfreint les règles et met mes gains en danger"], answer: 3, why: "Les plateformes ferment les comptes partagés, et vous pouvez perdre des gains pas encore payés." },
          { objective: "O6", q: "Pourquoi compter le temps de test non payé dans votre journal ?", options: ["Pour voir votre vrai revenu par heure", "Parce que la plateforme le paiera plus tard", "Ce n'est pas nécessaire", "Pour le partager en ligne"], answer: 0, why: "Le temps non payé fait baisser ce que vous gagnez vraiment par heure, donc il faut le compter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Annotation de données pour l'IA et micro-tâches en ligne",
    questions: [
      { objective: "O1", q: "Qu'est-ce que l'annotation de données ?", options: ["Réparer des ordinateurs", "Ajouter des étiquettes à des données pour que les outils d'IA apprennent à partir d'elles", "Écrire des articles de presse", "Vendre des données aux banques"], answer: 1, why: "L'annotation consiste à ajouter des étiquettes à des photos, des textes, des enregistrements ou des vidéos pour entraîner l'IA." },
      { objective: "O1", q: "Laquelle de ces activités est une micro-tâche ?", options: ["Un contrat de deux ans comme responsable", "Avoir une boutique", "Choisir la catégorie d'une photo de produit, payé à la tâche", "Conduire un bus"], answer: 2, why: "Les micro-tâches sont de petites tâches en ligne payées une par une." },
      { objective: "O1", q: "Vous parlez bien yoruba et anglais. Quelle tâche pourrait vous convenir ?", options: ["Transcrire ou vérifier des enregistrements en yoruba", "Réparer des téléphones", "Faire des livraisons en voiture", "Construire des maisons"], answer: 0, why: "Les compétences en langues correspondent aux tâches audio et texte dans ces langues." },
      { objective: "O2", q: "À quoi servent les consignes d'un projet ?", options: ["À fixer votre salaire", "À lister les scores de vos amis", "À vous donner un mot de passe", "À dire ce que veut dire chaque étiquette et comment traiter les cas difficiles"], answer: 3, why: "Les consignes sont l'ensemble des règles qui disent comment étiqueter." },
      { objective: "O2", q: "Consignes : étiquetez NEUTRE si le message est seulement une question ou un fait. « À quelle heure fermez-vous ? » Quelle étiquette ?", options: ["POSITIF", "NÉGATIF", "NEUTRE", "Le signaler"], answer: 2, why: "C'est seulement une question, donc les consignes disent NEUTRE." },
      { objective: "O2", q: "« Jolies chaussures, mais l'une est déchirée. Je veux un remboursement. » Les consignes disent d'étiqueter les messages mixtes selon la demande principale. Quelle étiquette ?", options: ["NÉGATIF", "POSITIF", "NEUTRE", "Passer sans lire"], answer: 0, why: "La demande principale est un remboursement pour une chaussure déchirée, donc c'est NÉGATIF." },
      { objective: "O2", q: "Un extrait audio ne contient que du silence. Que faites-vous ?", options: ["Taper quelque chose pour finir vite", "Le signaler ou le passer comme le disent les consignes", "Copier la réponse d'un autre travailleur", "Quitter le projet"], answer: 1, why: "Les éléments défectueux ou vides sont signalés, pas devinés." },
      { objective: "O3", q: "Qu'est-ce qu'une question de contrôle (gold question) ?", options: ["Un paiement bonus", "Une question pour les vendeurs d'or", "Une tâche cachée dont la réponse est connue, qui vérifie votre précision", "Un test payant que vous achetez"], answer: 2, why: "Les plateformes cachent des tâches aux réponses connues parmi votre travail pour mesurer la qualité." },
      { objective: "O3", q: "Quel est le meilleur moment pour passer un test de qualification ?", options: ["Tout de suite, sans rien lire", "Après avoir lu les consignes et vous être entraîné, reposé et avec une connexion stable", "Tard le soir avec une mauvaise connexion", "Pendant que vous faites un autre travail"], answer: 1, why: "La préparation et de bonnes conditions vous donnent les meilleures chances, et le temps du test n'est souvent pas payé." },
      { objective: "O3", q: "Que peut-il arriver si votre score de qualité reste bas ?", options: ["Vous recevez plus de tâches", "Votre paie double", "Il ne se passe jamais rien", "Vous pouvez être retiré du projet"], answer: 3, why: "Les plateformes utilisent les scores de qualité pour décider qui continue à recevoir des tâches." },
      { objective: "O3", q: "Les règles du projet disent de ne pas utiliser d'outils d'IA pour faire les tâches. Que faites-vous ?", options: ["Je suis la règle et je fais les tâches moi-même", "J'utilise des outils d'IA en cachette", "Je demande à un ami d'utiliser l'IA pour moi", "J'arrête de lire les règles"], answer: 0, why: "Enfreindre les règles du projet peut vous coûter le projet et votre compte." },
      { objective: "O4", q: "Quelle offre est la plus probablement réelle ?", options: ["« Payez 5 000 nairas pour débloquer des tâches »", "« Déposez de la crypto pour retirer vos gains »", "Une plateforme que vous avez trouvée vous-même et dont le site dit que l'inscription est gratuite", "« Gagnez 200 dollars par jour en aimant des vidéos »"], answer: 2, why: "Une inscription gratuite et un site officiel trouvé par vous sont des signes d'une vraie plateforme ; les autres sont des schémas d'arnaque." },
      { objective: "O4", q: "Un « recruteur » vous paie 30 dollars puis vous demande d'en renvoyer 25. Qu'est-ce que c'est ?", options: ["Une arnaque : les vrais employeurs ne demandent pas de renvoyer de l'argent", "Un remboursement normal", "Un impôt", "Une prime de formation"], answer: 0, why: "La FTC avertit qu'être payé puis devoir renvoyer de l'argent est une arnaque." },
      { objective: "O4", q: "Lequel n'est PAS un signe d'alerte d'un faux emploi ?", options: ["On vous demande des frais pour commencer", "On ne vous parle que sur Telegram et on vous presse de décider aujourd'hui", "On vous demande votre code PIN bancaire", "Le site de la plateforme explique ses tâches et dit que l'inscription est gratuite"], answer: 3, why: "Un site officiel clair avec une inscription gratuite est un bon signe ; les autres sont des signes d'alerte." },
      { objective: "O5", q: "Quelle est une bonne habitude pour votre compte ?", options: ["Utiliser le même mot de passe partout", "Un mot de passe unique et la connexion en deux étapes", "Écrire votre mot de passe dans votre profil", "Partager votre identifiant avec votre famille"], answer: 1, why: "Un mot de passe unique et la connexion en deux étapes protègent votre compte et vos gains." },
      { objective: "O5", q: "Pouvez-vous publier des images de tâches intéressantes dans votre groupe WhatsApp ?", options: ["Oui, si vous les floutez un peu", "Oui, une fois la tâche terminée", "Non : les données des tâches restent dans la plateforme", "Oui, si le groupe est petit"], answer: 2, why: "Les données des tâches sont confidentielles ; les partager enfreint les règles et peut nuire à de vraies personnes." },
      { objective: "O5", q: "Qui doit recevoir votre code de connexion à usage unique ?", options: ["Personne", "Le support de la plateforme dans une discussion", "Un recruteur", "Un ami qui vous aide"], answer: 0, why: "Les codes à usage unique sont pour vous seul ; toute personne qui en demande un essaie de prendre votre compte." },
      { objective: "O6", q: "Vous avez gagné 12 dollars dans la semaine et passé 8 heures au total. Quel est votre vrai revenu par heure ?", options: ["12 dollars", "8 dollars", "4 dollars", "1,50 dollar"], answer: 3, why: "12 dollars ÷ 8 heures = 1,50 dollar par heure." },
      { objective: "O6", q: "Quelle affirmation sur le revenu des micro-tâches est vraie ?", options: ["Il est le même chaque semaine", "Il est irrégulier et varie selon le projet, le pays et la plateforme", "Il est toujours plus élevé qu'un emploi local", "Il est fixé par l'État"], answer: 1, why: "La quantité de tâches et les tarifs changent, donc le revenu est irrégulier." },
      { objective: "O6", q: "Vous gardez une trace de vos gains en ligne. À qui demander comment les déclarer aux impôts ?", options: ["À un recruteur sur Telegram", "À personne, les gains en ligne ne sont jamais imposés", "À l'administration fiscale de votre pays", "Aux autres travailleurs de votre groupe"], answer: 2, why: "Les règles fiscales varient selon les pays, donc l'administration fiscale nationale est la bonne source." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Étiquettes d'entraînement", objective: "O2", notYet: "Moins de 8 sur 10 correspondent au corrigé, ou des éléments pas clairs ont été devinés.", meets: "Au moins 8 sur 10 correspondent au corrigé et l'élément pas clair est signalé.", exceeds: "10 sur 10, avec des consignes d'une page écrites avec vos mots qui couvrent les cas limites." },
      { name: "Plan pour le test et la qualité", objective: "O3", notYet: "Pas de plan, ou le plan dit seulement « travailler vite ».", meets: "Cinq étapes : lire les consignes, s'entraîner, passer le test reposé, lire les retours, relire les mises à jour.", exceeds: "Liste aussi vos propres erreurs d'entraînement et la règle que vous vérifierez pour chacune." },
      { name: "Plateformes vérifiées", objective: "O4", notYet: "Une plateforme a été choisie à partir d'un lien dans un message, ou des frais ont été acceptés.", meets: "Deux plateformes vérifiées sur leur site officiel : inscription gratuite, votre pays, mode de paiement.", exceeds: "Inclut aussi une recherche « arnaque » pour chacune et une liste anti-arnaque de cinq signes écrite avec vos mots." },
      { name: "Règles de sécurité des données", objective: "O5", notYet: "Les règles manquent, ou le plan partage des codes, une pièce d'identité ou des données de tâches dans une discussion.", meets: "Trois règles claires : compte, pièce d'identité et codes, données des tâches.", exceeds: "La connexion en deux étapes est activée et les règles disent quoi faire si quelqu'un demande un code." },
      { name: "Journal des gains et plan", objective: "O6", notYet: "Pas de journal, ou le journal ne compte que le temps payé.", meets: "Un journal qui compte toutes les minutes, la formule du vrai revenu par heure et un plan daté sur 4 semaines.", exceeds: "Compare aussi le résultat avec une autre possibilité et nomme une compétence à développer pour un travail mieux payé." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui réussissent un test de qualification sur une vraie plateforme gratuite dans les 60 jours (enquête de suivi)",
      "Apprenants qui disent avoir payé des frais ou un dépôt pour un « emploi en ligne » après le cours (objectif : aucun)",
      "Apprenants qui peuvent donner leur vrai revenu par heure à partir de leur propre journal lors du suivi à 30 jours",
      "Apprenants qui passent à un poste mieux payé (vérificateur, projet d'experts ou emploi dans une entreprise de données) dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet (l'entraînement peut se faire sur papier)",
      "Du papier et un stylo pour l'entraînement à l'étiquetage, la liste anti-arnaque et le journal des gains",
      "Un compte e-mail avec la connexion en deux étapes",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble. Puis faites l'entraînement à l'étiquetage en groupe et comparez les réponses : les désaccords sont la meilleure façon d'enseigner les cas limites.",
      "Apportez de vrais messages d'arnaque (sans noms ni numéros) et laissez le groupe trouver les signes d'alerte.",
      "Ne recommandez aucune plateforme comme un revenu sûr. Les plateformes changent et n'acceptent pas les mêmes pays ; les apprenants vérifient les pages de chacune.",
      "Ne récupérez jamais les mots de passe, les codes ou les pièces d'identité des apprenants, et ne leur demandez pas de s'inscrire pendant la séance s'ils ne sont pas prêts.",
      "Soyez honnête sur le revenu. Aidez les apprenants à comparer les micro-tâches avec les possibilités locales et avec des formations vers des postes mieux payés.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
