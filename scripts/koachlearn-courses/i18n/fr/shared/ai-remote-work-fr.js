"use strict";

// Koach Learn course (shared, bonus), French translation of "Remote Work Skills with AI". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-remote-work-fr",
  lang: "fr",
  translationOf: "ai-remote-work",
  category: "Re-Entry",
  name: "Compétences de télétravail avec l'IA",
  skills: "Installer un espace de travail chez soi, Rejoindre et animer des visioconférences, Rédiger des messages de travail clairs avec l'IA, Travailler dans des documents partagés, Gérer son propre temps, Trouver de vrais emplois à distance et éviter les arnaques",
  outcome: "vous installer pour travailler de chez vous, rejoindre une visioconférence de façon professionnelle, rédiger des points d'avancement et des messages clairs avec l'aide de l'IA, collaborer dans un document partagé, planifier votre journée de travail, et distinguer un vrai emploi à distance d'une arnaque.",
  about: [
    "Beaucoup d'emplois permettent désormais de travailler de chez soi tout ou partie du temps : service client, saisie de données, gestion d'agendas, assistance virtuelle, vente, soutien scolaire et assistance informatique. Le télétravail peut ouvrir des portes quand le transport, la garde d'enfants, un handicap ou le lieu de vie rendent les trajets difficiles.",
    "Travailler à distance demande des compétences propres : écrire clairement, gérer les visioconférences et les documents partagés, organiser son temps et rester en sécurité en ligne. Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini peuvent aider pour une bonne partie.",
    "Ce cours s'adresse aux personnes qui sortent de prison, aux demandeurs d'emploi suivis par des programmes d'insertion et aux habitants qui n'ont pas de bassin d'emploi à proximité. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Construisez un kit de préparation au télétravail : une photo ou une liste de contrôle de votre espace de travail, un enregistrement ou une liste de contrôle d'un test de visioconférence d'une minute, trois messages de travail rédigés avec l'aide de l'IA (un point d'avancement, une question à un responsable et un message « Je serai en retard »), un document partagé que vous avez modifié avec un commentaire et une suggestion, un plan de journée en blocs de temps, et une vraie offre d'emploi à distance vérifiée face aux signes d'arnaque.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui s'intéressent aux emplois à distance comme le service client, la saisie de données, l'assistance administrative ou les centres d'appels, souvent pour des raisons de transport, d'horaires ou de famille.",
    startingPoint: "Ils savent appeler et envoyer des SMS avec un téléphone ; certains ont un compte e-mail et ont essayé un assistant d'IA. Beaucoup n'ont jamais utilisé d'outil de visioconférence, de messagerie d'entreprise ou de documents partagés, et n'ont parfois pas encore d'ordinateur ni d'internet à la maison.",
    gap: "Les emplois à distance peuvent ouvrir plus de possibilités aux personnes sans voiture ou avec des obligations familiales, mais ils demandent un matériel fiable, une écriture claire, une bonne gestion de son temps et la capacité de repérer les nombreuses arnaques au travail à domicile. Les apprenants ont besoin de ces compétences de base du télétravail pour postuler avec assurance et garder un emploi à distance.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : parfois seulement un téléphone ou un ordinateur de bibliothèque ; beaucoup d'emplois à distance demandent un ordinateur et internet à la maison",
      "Temps : des leçons de 5 minutes qui s'insèrent entre les rendez-vous et le travail",
      "Certaines conditions de libération conditionnelle ou de mise à l'épreuve limitent l'usage d'internet ; les apprenants respectent leurs propres conditions",
      "Risque élevé d'arnaque et d'atteinte à la vie privée : aucun numéro de compte bancaire ou de sécurité sociale partagé avant une offre vérifiée"
    ],
    prerequisites: "Aucun. « Découvrir l'IA et prendre confiance avec le numérique » est un premier cours utile pour les apprenants qui découvrent l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À la maison ou à l'endroit où vous prévoyez de travailler", action: "installer un espace de travail et vérifier votre internet, votre casque et la sécurité de votre compte", standard: "avec un test de débit fait, la connexion en deux étapes activée et un verrouillage d'écran réglé" },
    { id: "O2", condition: "À partir d'un lien de réunion", action: "rejoindre une visioconférence et utiliser le micro, la caméra, la discussion et le partage d'écran", standard: "en arrivant en avance et en réglant un problème de son sans aide" },
    { id: "O3", condition: "À partir d'une situation de travail", action: "rédiger avec l'aide de l'IA un message de travail court et clair", standard: "qui commence par l'essentiel, dit ce dont vous avez besoin et pour quand, sans données clients dans des outils d'IA non autorisés" },
    { id: "O4", condition: "À partir du lien d'un document partagé", action: "ajouter un commentaire, faire une suggestion de modification et ouvrir l'historique des versions", standard: "sans changer les paramètres de partage" },
    { id: "O5", condition: "À partir d'une liste de tâches pour une journée de travail", action: "créer un plan en blocs de temps avec des heures de début, de pause et de fin", standard: "qui s'adapte à votre vraie vie et se termine par un point d'avancement" },
    { id: "O6", condition: "À partir d'une offre d'emploi à distance", action: "vérifier si l'emploi est réel ou si c'est une arnaque au travail à domicile", standard: "en passant en revue chaque signe d'alerte avant de partager le moindre numéro privé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : S'installer pour travailler à distance",
      lessons: [
        {
          objectives: ["O1"],
          title: "Votre espace de travail à la maison et les bases techniques",
          minutes: 5,
          goal: "Installer un espace de travail et vérifier que votre matériel est prêt pour le télétravail.",
          text: [
            "Il vous faut une connexion internet fiable, un ordinateur (beaucoup d'emplois n'acceptent pas le travail sur téléphone seulement), un casque ou des écouteurs avec micro, et un coin calme. Une petite table contre un mur suffit. Une bonne lumière devant vous, pas derrière, aide à la caméra.",
            "Testez votre connexion avec un test de débit gratuit avant de postuler. Si elle est lente ou si vous n'avez pas internet à la maison, renseignez-vous auprès de votre bibliothèque, de votre programme d'insertion ou de votre fournisseur d'accès sur les offres à bas prix ; certains programmes changent, alors vérifiez ce qui existe là où vous vivez.",
            "Protégez vos comptes de travail comme les vôtres : phrases de passe solides, connexion en deux étapes, mises à jour, et pas de travail sur des ordinateurs publics sauf si l'employeur le permet. Verrouillez votre écran quand vous vous éloignez."
          ],
          steps: ["Choisissez un coin calme avec une table et une bonne lumière devant vous.", "Procurez-vous un casque ou des écouteurs avec micro.", "Faites un test de débit internet gratuit.", "Activez les mises à jour, la connexion en deux étapes et le verrouillage de l'écran.", "Renseignez-vous sur un internet à bas prix si besoin."],
          words: [["Télétravail", "faire son travail de chez soi ou d'un autre endroit que le bureau de l'employeur."], ["Casque", "des écouteurs avec un micro."], ["Débit (bande passante)", "la quantité de données que votre connexion peut transporter ; plus il y en a, mieux c'est pour la vidéo."]],
          slides: [
            { title: "Ce qu'il vous faut", bullets: ["Internet fiable et un ordinateur", "Casque avec micro", "Un coin calme avec une table"] },
            { title: "Bien paraître, bien s'entendre", bullets: ["La lumière devant vous, pas derrière", "Un fond calme"] },
            { title: "Rester en sécurité", bullets: ["Phrases de passe et connexion en deux étapes", "Mises à jour activées", "Verrouiller l'écran en s'éloignant"] }
          ],
          tryIt: "Installez votre espace de travail, faites un test de débit internet, et écrivez une liste de ce que vous avez et de ce qui vous manque encore.",
          youCanNow: "installer à la maison un espace de travail sûr et fonctionnel.",
          quickCheck: [
            { objective: "O1", q: "Quel équipement beaucoup d'emplois à distance exigent-ils en plus d'internet ?", options: ["Seulement une tablette", "Une montre connectée", "Un ordinateur, pas seulement un téléphone", "Une imprimante"], answer: 2, why: "Beaucoup d'emplois à distance n'acceptent pas le travail sur téléphone seulement : il vous faut un ordinateur." },
            { objective: "O1", q: "Votre test de débit montre un internet lent et vous voulez postuler à des emplois à distance. Que faites-vous ?", options: ["Demander à votre bibliothèque, à un programme d'insertion ou à votre fournisseur internet s'il existe des offres à petit prix", "Postuler quand même en espérant que ça marche", "Utiliser le Wi-Fi d'un inconnu sans demander", "Renoncer au télétravail"], answer: 0, why: "Les bibliothèques, les programmes d'insertion et les fournisseurs connaissent parfois des offres internet à petit prix." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rejoindre et animer des visioconférences",
          minutes: 5,
          goal: "Rejoindre une visioconférence de façon professionnelle et régler les problèmes courants.",
          text: [
            "La plupart des emplois à distance utilisent des outils de visioconférence comme Zoom, Microsoft Teams ou Google Meet. On rejoint en général en cliquant sur un lien dans un e-mail ou une invitation d'agenda. Rejoignez deux ou trois minutes en avance pour régler les problèmes.",
            "Connaissez les commandes de base : couper et activer le micro, allumer et éteindre la caméra, partager votre écran, et utiliser le chat. Gardez le micro coupé quand vous ne parlez pas. Regardez la caméra quand vous parlez, et utilisez votre nom comme nom affiché.",
            "Si quelque chose ne marche pas : vérifiez dans les paramètres que le bon micro et le bon haut-parleur sont choisis, quittez puis rejoignez, ou appelez par téléphone si l'invitation donne un numéro. Prévenez l'organisateur dans le chat. Beaucoup d'outils proposent aussi des sous-titres en direct et des résumés de réunion faits par l'IA ; suivez les règles de votre employeur pour les utiliser."
          ],
          steps: ["Cliquez sur le lien de la réunion deux ou trois minutes en avance.", "Vérifiez votre nom affiché, votre caméra et votre micro.", "Gardez le micro coupé quand vous ne parlez pas.", "Utilisez le chat pour signaler un problème.", "Si le son ne marche pas, vérifiez les paramètres de l'appareil ou rejoignez de nouveau."],
          words: [["Couper le micro", "désactiver votre micro pour que les autres ne vous entendent pas."], ["Partage d'écran", "montrer l'écran de votre ordinateur aux autres participants."], ["Sous-titres", "des mots à l'écran qui montrent ce que disent les gens."]],
          slides: [
            { title: "Bien rejoindre", bullets: ["Cliquer sur le lien 2 à 3 minutes en avance", "Utiliser votre vrai nom", "Vérifier caméra et micro"] },
            { title: "Commandes de base", bullets: ["Couper et activer le micro", "Caméra allumée ou éteinte", "Partage d'écran et chat"] },
            { title: "Quand ça ne marche pas", bullets: ["Vérifier les paramètres de l'appareil", "Quitter et rejoindre", "Prévenir l'organisateur dans le chat"] }
          ],
          tryIt: "Lancez une réunion de test gratuite dans Zoom, Teams ou Google Meet avec un ami, un membre de la famille ou vous-même. Entraînez-vous à couper le micro, à gérer la caméra, le chat et le partage d'écran.",
          youCanNow: "rejoindre une visioconférence et y participer de façon professionnelle, et régler les problèmes courants.",
          quickCheck: [
            { objective: "O2", q: "Que fait le partage d'écran pendant une visioconférence ?", options: ["Il coupe le micro de tout le monde", "Il enregistre la réunion", "Il éteint votre caméra", "Il montre l'écran de votre ordinateur aux autres participants"], answer: 3, why: "Le partage d'écran montre votre écran aux autres personnes de la réunion." },
            { objective: "O2", q: "Votre son ne marche plus pendant une réunion d'équipe. Que faites-vous ?", options: ["Partir sans rien dire", "Prévenir l'organisateur dans la discussion, vérifier les réglages de votre appareil ou vous reconnecter", "Crier plus fort", "Éteindre votre ordinateur"], answer: 1, why: "Utilisez la discussion pour prévenir l'organisateur, puis vérifiez les réglages, reconnectez-vous ou appelez par téléphone." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rédiger des messages de travail clairs avec l'IA",
          minutes: 5,
          goal: "Rédiger avec l'aide de l'IA des messages de travail courts, clairs et professionnels.",
          text: [
            "En télétravail, l'essentiel de la communication est écrit : chat (comme Teams ou Slack) et e-mail. Écrire clairement est la première compétence du télétravail. Commencez par l'essentiel, restez bref, et dites ce dont vous avez besoin et pour quand.",
            "L'IA peut aider : « Transforme ceci en un message court et poli à ma responsable : j'ai terminé les 40 fiches clients, 3 n'avaient pas de numéro de téléphone, dois-je les appeler ou les laisser ? » Vérifiez ensuite que le message vous ressemble et n'est pas trop formel.",
            "Types de messages utiles : un point d'avancement quotidien (fait, à faire ensuite, bloqué), une question claire, et un message d'avertissement quand vous êtes en retard ou malade. Ne collez jamais de données clients, de mots de passe ou de secrets de l'entreprise dans un outil d'IA que votre employeur n'a pas approuvé."
          ],
          steps: ["Commencez par l'essentiel.", "Dites ce dont vous avez besoin et pour quand.", "Demandez à l'IA de le rendre court et poli.", "Vérifiez qu'il vous ressemble.", "Gardez les données des clients et de l'entreprise hors des outils d'IA non approuvés."],
          words: [["Point d'avancement", "un court message sur ce que vous avez fait, ce qui vient ensuite et les problèmes éventuels."], ["Application de chat", "un outil de messagerie professionnelle comme Microsoft Teams ou Slack."]],
          slides: [
            { title: "Écrire, la première compétence à distance", bullets: ["Commencer par l'essentiel", "Court et clair", "Ce dont vous avez besoin et pour quand"] },
            { title: "Trois messages clés", bullets: ["Avancement : fait, ensuite, bloqué", "Une question claire", "Prévenir d'un retard ou d'une maladie"] },
            { title: "L'IA aide, en sécurité", bullets: ["Rendre court et poli", "Vérifier que ça vous ressemble", "Pas de données de l'entreprise dans les outils non approuvés"] }
          ],
          tryIt: "Avec l'aide de l'IA, rédigez trois messages : un point d'avancement, une question à un responsable et un message « J'aurai 15 minutes de retard ». Corrigez chacun pour qu'il vous ressemble.",
          youCanNow: "rédiger des messages de travail clairs et courts avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O3", q: "Quelles sont les trois choses d'un point d'avancement quotidien ?", options: ["Votre déjeuner, votre humeur et la météo", "Ce que vous avez fait, la suite et ce qui vous bloque", "Chaque e-mail que vous avez lu", "Votre mot de passe et votre heure de connexion"], answer: 1, why: "Un point d'avancement dit ce qui est fait, ce qui vient ensuite et ce qui bloque." },
            { objective: "O3", q: "Vous voulez que l'IA vous aide à écrire un message sur la réclamation d'un client. Que laissez-vous de côté ?", options: ["L'essentiel", "Ce dont vous avez besoin de votre responsable", "Pour quand vous avez besoin d'une réponse", "Le nom et le numéro de téléphone du client"], answer: 3, why: "Ne collez jamais de données clients dans un outil d'IA que votre employeur n'a pas autorisé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'installer pour travailler à distance",
        questions: [
          { objective: "O1", q: "Où doit se trouver la lumière pour les visioconférences ?", options: ["Derrière vous", "Nulle part", "Devant vous", "Sous la table"], answer: 2, why: "Une lumière devant vous rend votre visage visible." },
          { objective: "O1", q: "Que faire quand vous vous éloignez de votre ordinateur de travail ?", options: ["Verrouiller l'écran", "Le laisser ouvert", "Publier votre mot de passe", "Couper internet"], answer: 0, why: "Verrouiller l'écran protège les données de travail." },
          { objective: "O2", q: "Quand rejoindre une visioconférence ?", options: ["Dix minutes en retard", "Seulement après deux rappels", "Jamais", "Deux ou trois minutes en avance"], answer: 3, why: "Rejoindre en avance laisse le temps de régler les problèmes." },
          { objective: "O2", q: "Les autres ne vous entendent pas pendant un appel. Que vérifiez-vous d'abord ?", options: ["Votre boîte e-mail", "Que votre micro est activé et que le bon micro est choisi", "La luminosité de l'écran", "La météo"], answer: 1, why: "Le micro coupé et les paramètres de l'appareil causent la plupart des problèmes de son." },
          { objective: "O3", q: "Qu'est-ce qu'un bon point d'avancement ?", options: ["Une longue histoire sur votre week-end", "Ce que j'ai fait, ce qui vient ensuite, et ce qui me bloque", "Rien", "Seulement des émojis"], answer: 1, why: "Les points d'avancement tiennent l'équipe informée." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien travailler et trouver des emplois à distance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Travailler dans des documents partagés",
          minutes: 5,
          goal: "Modifier, commenter et suggérer des changements dans un document partagé.",
          text: [
            "Les équipes à distance travaillent en même temps dans le même document avec Google Docs, Google Sheets ou Microsoft 365 (Word, Excel) en ligne. Vous l'ouvrez par un lien partagé et voyez les changements des autres pendant qu'ils tapent.",
            "Apprenez trois gestes. Commenter : surlignez du texte et ajoutez un commentaire pour poser une question ou proposer sans modifier. Suggérer : Google Docs a le mode Suggestion et Word a le Suivi des modifications, pour que vos changements apparaissent et que les autres les acceptent. L'historique des versions permet de voir ou de restaurer les versions précédentes.",
            "Attention aux paramètres de partage : ne partagez qu'avec les personnes qui en ont besoin, et ne changez pas le réglage « toute personne disposant du lien » sans demander. Beaucoup d'outils ont une IA intégrée (comme Gemini dans Google Workspace ou Copilot dans Microsoft 365) si votre employeur l'active."
          ],
          steps: ["Ouvrez le document partagé à partir de son lien.", "Surlignez du texte et ajoutez un commentaire.", "Activez le mode Suggestion (Google Docs) ou le Suivi des modifications (Word) et faites une modification.", "Ouvrez l'historique des versions pour voir les versions précédentes.", "Vérifiez les paramètres de partage avant de partager plus largement."],
          words: [["Document partagé", "un fichier que plusieurs personnes peuvent ouvrir et modifier en ligne."], ["Commentaire", "une note attachée à une partie d'un document."], ["Historique des versions", "la liste des versions précédentes d'un fichier, que l'on peut voir ou restaurer."]],
          slides: [
            { title: "Travailler ensemble en ligne", bullets: ["Google Docs et Sheets", "Word et Excel en ligne de Microsoft 365", "Voir les changements pendant que les autres tapent"] },
            { title: "Trois gestes", bullets: ["Commenter", "Suggérer ou Suivi des modifications", "Historique des versions"] },
            { title: "Partager avec prudence", bullets: ["Seulement les personnes qui en ont besoin", "Demander avant de changer le partage par lien"] }
          ],
          tryIt: "Créez un document Google Docs ou Word en ligne, partagez-le avec une personne de confiance, et entraînez-vous ensemble à faire un commentaire, une suggestion et à consulter l'historique des versions.",
          youCanNow: "collaborer dans un document partagé avec des commentaires, des suggestions et l'historique des versions.",
          quickCheck: [
            { objective: "O4", q: "Que fait le Suivi des modifications dans Word ?", options: ["Il montre vos modifications pour que d'autres les relisent et les acceptent", "Il supprime les anciennes versions", "Il partage le fichier avec tout le monde", "Il compte les mots"], answer: 0, why: "Le Suivi des modifications montre les changements pour que d'autres les acceptent, comme le mode Suggestion dans Google Docs." },
            { objective: "O4", q: "Un collègue vous demande de partager le document de l'équipe avec un ami extérieur à l'entreprise. Que faites-vous ?", options: ["Le passer à « tous les utilisateurs disposant du lien »", "Envoyer le lien tout de suite", "Demander au propriétaire du document avant de le partager plus largement", "Copier tout le document dans un e-mail"], answer: 2, why: "Partagez seulement avec les personnes qui en ont besoin, et demandez avant de changer les paramètres de partage." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gérer votre propre temps",
          minutes: 5,
          goal: "Planifier une journée de télétravail en blocs de temps avec des heures claires de début et de fin.",
          text: [
            "À la maison, personne ne passe devant votre bureau. C'est vous qui gérez votre temps. Fixez une heure de début régulière, des pauses et une heure de fin, et dites aux personnes avec qui vous vivez quand vous travaillez.",
            "Les blocs de temps aident : divisez la journée en blocs pour le travail concentré, les messages, les réunions et les pauses. Demandez à l'IA : « Fais un plan en blocs de temps pour ma journée de travail de 9 h à 17 h avec 30 minutes de déjeuner. Tâches : [liste]. Mets le travail concentré le matin et la lecture des messages à heures fixes. »",
            "Notez ce que vous terminez. En fin de journée, écrivez un court point d'avancement. Si vous avez du mal avec les distractions, la garde des enfants ou la santé, prévenez tôt votre responsable ; beaucoup ont des solutions s'ils sont au courant."
          ],
          steps: ["Fixez les heures de début, de pause et de fin.", "Listez les tâches du jour.", "Demandez à l'IA un plan en blocs de temps.", "Adaptez-le à votre vraie vie.", "Terminez la journée par un court point d'avancement."],
          words: [["Blocs de temps", "planifier sa journée en plages de temps pour des tâches précises."], ["Travail concentré", "un travail fait sans interruption."]],
          slides: [
            { title: "Vous gérez votre temps", bullets: ["Début, pauses et fin réguliers", "Dire vos horaires à votre foyer"] },
            { title: "Blocs de temps", bullets: ["Travail concentré, messages, réunions, pauses", "L'IA peut proposer le plan"] },
            { title: "Garder le cap", bullets: ["Point d'avancement en fin de journée", "Prévenir tôt le responsable en cas de problème"] }
          ],
          tryIt: "Demandez à l'IA un plan en blocs de temps pour une journée de travail réelle ou fictive, adaptez-le et suivez-le au moins une demi-journée. Écrivez un court point de fin de journée.",
          youCanNow: "planifier et gérer une journée de télétravail en blocs de temps.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un bloc de temps ?", options: ["Un ordinateur en panne", "Une réunion que vous sautez", "Une partie fixe de la journée pour un seul type de tâche", "Un type de mot de passe"], answer: 2, why: "Les blocs de temps découpent la journée en plages pour le travail concentré, les messages, les réunions et les pauses." },
            { objective: "O5", q: "Le plan de l'IA place le travail concentré à 15 h, quand vos enfants rentrent de l'école. Que faites-vous ?", options: ["Déplacer le travail concentré à un moment plus calme qui s'adapte à votre vraie vie", "Le suivre exactement", "Sauter le travail concentré", "Travailler plutôt jusqu'à minuit"], answer: 0, why: "Adaptez le plan de l'IA à votre vraie vie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Trouver de vrais emplois à distance et éviter les arnaques",
          minutes: 6,
          goal: "Chercher des emplois à distance auprès de sources fiables et repérer les arnaques au travail à domicile.",
          text: [
            "Cherchez à des endroits fiables : pages carrières des entreprises, sites d'emploi connus, la banque d'emplois de votre État et votre American Job Center local (aux États-Unis ; ailleurs, le service public de l'emploi). Utilisez le filtre « à distance » et lisez où l'emploi vous permet de vivre ; certains emplois à distance ne sont ouverts qu'à certains États ou pays.",
            "Les arnaques au travail à domicile sont fréquentes. La FTC (l'agence américaine de protection des consommateurs) met en garde contre les promesses de gros salaires pour peu de travail, les demandes de payer un kit de démarrage, une formation ou une certification, l'envoi d'un chèque à encaisser dont il faut renvoyer une partie, et la réexpédition de colis. Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi.",
            "Vérifiez avant de partager : cherchez vous-même l'entreprise, vérifiez que l'e-mail vient du vrai domaine de l'entreprise (pas d'une adresse e-mail gratuite), et méfiez-vous des entretiens faits uniquement par chat écrit. Ne donnez pas de numéro de compte bancaire ou de sécurité sociale avant d'avoir une offre vérifiée. Signalez les arnaques sur ReportFraud.ftc.gov."
          ],
          steps: ["Cherchez auprès de sources d'emploi fiables avec le filtre à distance.", "Vérifiez où l'emploi vous permet de vivre.", "Cherchez l'entreprise par vous-même.", "Méfiez-vous des frais, des chèques à encaisser, de la réexpédition et des entretiens uniquement écrits.", "Ne partagez vos numéros privés qu'après une offre vérifiée."],
          words: [["Arnaque au travail à domicile", "un faux emploi à distance fait pour voler de l'argent ou des informations."], ["Domaine", "la partie d'une adresse e-mail ou web après le @ ou le www, comme entreprise.com."]],
          slides: [
            { title: "Où chercher", bullets: ["Pages carrières et sites d'emploi connus", "Banque d'emplois de l'État et American Job Centers", "Vérifier où l'emploi permet de vivre"] },
            { title: "Signes d'arnaque (FTC)", bullets: ["Gros salaire pour peu de travail", "Payer un kit, une formation ou un certificat", "Encaisser un chèque et renvoyer de l'argent"] },
            { title: "Vérifier avant de partager", bullets: ["Chercher l'entreprise vous-même", "Vrai domaine e-mail de l'entreprise", "Numéros privés seulement après une offre vérifiée"] }
          ],
          sources: [{ name: "FTC : arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tâche finale : trouvez une vraie offre d'emploi à distance, comparez-la aux signes d'arnaque et enregistrez-la. Ajoutez-la à votre liste de contrôle de l'espace de travail, à votre test de visioconférence, à vos trois messages, à votre exercice sur document partagé et à votre plan en blocs de temps pour terminer votre kit de préparation au télétravail.",
          youCanNow: "vous installer, communiquer, collaborer et gérer votre temps en télétravail, et trouver de vrais emplois à distance en sécurité.",
          quickCheck: [
            { objective: "O6", q: "Lequel est un signe d'alerte d'une arnaque au travail à domicile ?", options: ["L'offre indique où vous pouvez habiter", "Le recruteur écrit depuis le domaine de l'entreprise", "L'entreprise a une page carrières", "Vous devez payer un kit de démarrage avant de commencer"], answer: 3, why: "Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi." },
            { objective: "O6", q: "Une « entreprise » propose un emploi à distance après un entretien uniquement par SMS et demande votre numéro de compte bancaire tout de suite. Que faites-vous ?", options: ["L'envoyer pour être payé plus vite", "Ne pas le donner ; chercher vous-même l'entreprise et la signaler si c'est une arnaque", "Envoyer plutôt votre numéro de sécurité sociale", "Leur demander de vous envoyer un chèque par SMS"], answer: 1, why: "Les entretiens uniquement par SMS et les demandes rapides de numéro bancaire sont des signes d'alerte ; ne partagez vos numéros privés qu'après une offre vérifiée." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien travailler et trouver des emplois à distance",
        questions: [
          { objective: "O4", q: "Dans Google Docs, quel mode affiche vos modifications comme des suggestions que les autres acceptent ?", options: ["Le mode Suppression", "Le mode Impression", "Le mode Nuit", "Le mode Suggestion"], answer: 3, why: "Le mode Suggestion montre les modifications pour approbation." },
          { objective: "O4", q: "À quoi sert l'historique des versions ?", options: ["À voir ou restaurer les versions précédentes d'un fichier", "À supprimer le fichier pour toujours", "À partager des mots de passe", "À changer votre nom"], answer: 0, why: "Il garde une trace des versions précédentes." },
          { objective: "O5", q: "Que sont les blocs de temps ?", options: ["Bloquer des sites web", "Arrêter l'horloge", "Planifier sa journée en plages pour des tâches précises", "Travailler sans pause"], answer: 2, why: "Les blocs protègent le travail concentré." },
          { objective: "O6", q: "Un « emploi à distance » vous demande d'acheter un kit de démarrage à 200 $ avant de commencer. Selon la FTC, c'est :", options: ["Une embauche normale", "Un impôt", "Un avantage", "Un signe d'arnaque"], answer: 3, why: "Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi." },
          { objective: "O6", q: "Un recruteur écrit depuis une adresse e-mail gratuite et ne veut faire l'entretien que par chat écrit. Vous devez :", options: ["Envoyer vos coordonnées bancaires", "Payer des frais", "Chercher l'entreprise vous-même et rester prudent", "Ignorer tous les emplois pour toujours"], answer: 2, why: "Ce sont des signes courants de faux emploi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences de télétravail avec l'IA",
    questions: [
      { objective: "O1", q: "Le télétravail, c'est :", options: ["Travailler seulement la nuit", "Faire son travail hors du bureau de l'employeur", "Du travail non payé", "Utiliser une télécommande"], answer: 1, why: "C'est un travail fait de chez soi ou d'ailleurs." },
      { objective: "O1", q: "Quel équipement est le plus important pour les visioconférences ?", options: ["Un casque ou des écouteurs avec micro", "Une belle chaise", "Une deuxième télé", "Une imprimante"], answer: 0, why: "Un son clair compte le plus en appel." },
      { objective: "O1", q: "Comment vérifier si votre internet est assez rapide ?", options: ["Deviner", "Demander à l'IA", "Faire un test de débit gratuit", "Compter vos applications"], answer: 2, why: "Un test de débit le mesure." },
      { objective: "O1", q: "Qu'est-ce qui protège votre compte de travail ?", options: ["La connexion en deux étapes", "Partager votre mot de passe avec la famille", "L'écrire sur l'écran", "Désactiver les mises à jour"], answer: 0, why: "La connexion en deux étapes bloque la plupart des attaques." },
      { objective: "O2", q: "Comment rejoint-on en général une visioconférence de travail ?", options: ["En appelant un numéro au hasard", "En attendant qu'on vienne vous voir", "En envoyant une lettre", "En cliquant sur le lien de l'e-mail ou de l'invitation d'agenda"], answer: 3, why: "Les invitations contiennent un lien de réunion." },
      { objective: "O2", q: "Quand vous ne parlez pas pendant un appel, vous devez en général :", options: ["Mettre de la musique", "Garder le micro coupé", "Quitter l'appel", "Monter le volume"], answer: 1, why: "Couper le micro évite les bruits de fond." },
      { objective: "O2", q: "Le partage d'écran, c'est :", options: ["Casser votre écran", "Montrer l'écran de votre ordinateur aux autres participants", "Acheter un nouvel écran", "Cacher votre écran"], answer: 1, why: "Il permet aux autres de voir ce que vous voyez." },
      { objective: "O3", q: "La première compétence du télétravail est :", options: ["Taper tout en majuscules", "Les longs appels téléphoniques", "Éviter les messages", "Écrire clairement"], answer: 3, why: "L'essentiel de la communication à distance est écrit." },
      { objective: "O3", q: "Un message de travail clair :", options: ["Commence par l'essentiel et dit ce dont vous avez besoin et pour quand", "Cache l'essentiel à la fin", "Est le plus long possible", "Ne demande rien"], answer: 0, why: "Les messages clairs obtiennent des réponses plus rapides." },
      { objective: "O3", q: "Qu'est-ce qui ne doit jamais entrer dans un outil d'IA non approuvé par votre employeur ?", options: ["Un message d'exemple sur un retard", "Des questions générales de grammaire", "Des données clients", "La date d'un jour férié"], answer: 2, why: "Les données clients doivent être protégées." },
      { objective: "O3", q: "Vous serez en retard pour votre service. Meilleure action :", options: ["Ne rien dire", "Vous connecter en retard sans explication", "Démissionner", "Envoyer un court message d'avertissement avant votre heure de début"], answer: 3, why: "Prévenir tôt est professionnel." },
      { objective: "O4", q: "Un commentaire dans un document partagé :", options: ["Supprime le document", "Bloque tout le monde", "Ajoute une note sans modifier le texte", "L'imprime"], answer: 2, why: "Les commentaires interrogent ou proposent sans modifier." },
      { objective: "O4", q: "Dans Word, la fonction qui montre vos modifications pour que d'autres les relisent est :", options: ["Le nombre de mots", "Le Suivi des modifications", "La vérification orthographique", "La couleur de page"], answer: 1, why: "Le Suivi des modifications enregistre les changements." },
      { objective: "O4", q: "Avant de régler le partage d'un document sur « toute personne disposant du lien », vous devez :", options: ["Demander à son propriétaire", "Le faire sans demander", "Publier le lien", "Supprimer le document"], answer: 0, why: "Les paramètres de partage protègent l'information." },
      { objective: "O5", q: "Une heure de fin régulière en télétravail aide à :", options: ["Rien", "Travailler plus d'heures sans être payé", "Équilibrer vie professionnelle et vie privée", "Accélérer votre internet"], answer: 2, why: "Des limites évitent l'épuisement." },
      { objective: "O5", q: "Si la garde des enfants rend le travail difficile, la meilleure étape est :", options: ["Prévenir tôt votre responsable", "Le cacher", "Ne plus vous connecter", "Inventer vos points d'avancement"], answer: 0, why: "Les responsables peuvent aider s'ils le savent tôt." },
      { objective: "O6", q: "Certains emplois à distance n'embauchent que des personnes qui :", options: ["N'ont pas d'ordinateur", "N'utilisent jamais l'e-mail", "Travaillent gratuitement", "Vivent dans certains États ou pays"], answer: 3, why: "Vérifiez les règles de lieu dans l'offre." },
      { objective: "O6", q: "Le recruteur d'une vraie entreprise écrit en général depuis :", options: ["Une adresse e-mail gratuite au hasard", "Le domaine de l'entreprise", "Une application de messages écrits seulement", "Seulement un message privé sur un réseau social"], answer: 1, why: "Le domaine de l'entreprise est un signe de vrai recruteur." },
      { objective: "O6", q: "Selon la FTC, qu'on vous demande de réexpédier des colis depuis chez vous, c'est :", options: ["Un emploi à distance normal", "Une partie d'une arnaque", "Un programme public", "Sans risque si c'est bien payé"], answer: 1, why: "Les emplois de réexpédition sont une arnaque connue." },
      { objective: "O6", q: "Où signaler une arnaque à l'emploi aux États-Unis ?", options: ["À l'adresse e-mail de l'escroc", "Dans une section de commentaires", "Nulle part", "Sur ReportFraud.ftc.gov"], answer: 3, why: "La FTC recueille les signalements de fraude." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      6,
      8,
      9,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Espace de travail et matériel",
        objective: "O1",
        notYet: "Pas de test de débit, ou la connexion en deux étapes ou le verrouillage d'écran est désactivé.",
        meets: "Une photo ou une liste de contrôle de l'espace de travail avec un test de débit, un casque, la connexion en deux étapes et le verrouillage d'écran.",
        exceeds: "La lumière est face à l'apprenant et un plan de secours existe si internet tombe en panne."
      },
      {
        name: "Prêt pour la visioconférence",
        objective: "O2",
        notYet: "Le test d'appel n'a pas été fait, ou les commandes du micro et de la caméra n'ont pas été trouvées.",
        meets: "Un test d'appel d'une minute ou une liste de contrôle qui montre le nom affiché, le micro, la caméra et la discussion.",
        exceeds: "S'est aussi entraîné au partage d'écran et à régler un problème de son."
      },
      {
        name: "Messages de travail",
        objective: "O3",
        notYet: "Moins de trois messages, ou un message noie l'essentiel ou contient des données privées.",
        meets: "Un point d'avancement, une question à un responsable et un message de retard, chacun court et commençant par l'essentiel.",
        exceeds: "Chacun dit ce dont on a besoin et pour quand, et ressemble à l'apprenant."
      },
      {
        name: "Document partagé",
        objective: "O4",
        notYet: "Aucun commentaire ni suggestion de modification dans le document.",
        meets: "Un commentaire et une suggestion de modification dans un document partagé.",
        exceeds: "A aussi ouvert l'historique des versions sans changer les paramètres de partage."
      },
      {
        name: "Plan en blocs de temps",
        objective: "O5",
        notYet: "Pas d'heures de début, de pause ou de fin.",
        meets: "Un plan d'une journée avec des heures de début, de pause et de fin et des blocs pour les tâches.",
        exceeds: "S'adapte à la vraie vie de l'apprenant et se termine par un point d'avancement."
      },
      {
        name: "Offre d'emploi vérifiée",
        objective: "O6",
        notYet: "L'offre n'a pas été vérifiée pour repérer les signes d'arnaque.",
        meets: "Une vraie offre d'emploi à distance comparée aux signes d'alerte, avec une recherche sur l'entreprise.",
        exceeds: "Note aussi où l'emploi permet d'habiter et le domaine de l'adresse e-mail utilisée."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à au moins un emploi à distance dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui obtiennent un emploi à distance ou un entretien à distance dans les 90 jours",
      "Apprenants qui disent avoir repéré et évité une arnaque au travail à domicile"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet (un ordinateur de bibliothèque ou du programme suffit pour s'entraîner)",
      "Un casque ou des écouteurs avec micro",
      "Des comptes gratuits pour un outil de visioconférence (Zoom, Teams ou Google Meet) et Google Docs ou Microsoft 365 en ligne",
      "Un assistant d'IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Environ 60 minutes en tout, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; organisez une vraie visioconférence d'entraînement pour que chacun la rejoigne, coupe son micro et partage son écran.",
      "Créez un document d'entraînement partagé pour que les apprenants commentent et suggèrent des modifications sur le travail des autres.",
      "Montrez de vrais exemples d'offres d'arnaque au travail à domicile et faites trouver les signes d'alerte par le groupe.",
      "Rappelez aux apprenants en libération conditionnelle ou en mise à l'épreuve de respecter leurs conditions sur l'usage d'internet, et de vérifier que le télétravail leur est permis.",
      "Notez le kit final avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
