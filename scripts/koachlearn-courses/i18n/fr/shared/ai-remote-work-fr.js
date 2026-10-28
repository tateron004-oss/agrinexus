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
  chapters: [
    {
      name: "Chapitre 1 : S'installer pour travailler à distance",
      lessons: [
        {
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
          youCanNow: "installer à la maison un espace de travail sûr et fonctionnel."
        },
        {
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
          youCanNow: "rejoindre une visioconférence et y participer de façon professionnelle, et régler les problèmes courants."
        },
        {
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
          youCanNow: "rédiger des messages de travail clairs et courts avec l'aide de l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'installer pour travailler à distance",
        questions: [
          { q: "Où doit se trouver la lumière pour les visioconférences ?", options: ["Derrière vous", "Nulle part", "Devant vous", "Sous la table"], answer: 2, why: "Une lumière devant vous rend votre visage visible." },
          { q: "Que faire quand vous vous éloignez de votre ordinateur de travail ?", options: ["Verrouiller l'écran", "Le laisser ouvert", "Publier votre mot de passe", "Couper internet"], answer: 0, why: "Verrouiller l'écran protège les données de travail." },
          { q: "Quand rejoindre une visioconférence ?", options: ["Dix minutes en retard", "Seulement après deux rappels", "Jamais", "Deux ou trois minutes en avance"], answer: 3, why: "Rejoindre en avance laisse le temps de régler les problèmes." },
          { q: "Les autres ne vous entendent pas pendant un appel. Que vérifiez-vous d'abord ?", options: ["Votre boîte e-mail", "Que votre micro est activé et que le bon micro est choisi", "La luminosité de l'écran", "La météo"], answer: 1, why: "Le micro coupé et les paramètres de l'appareil causent la plupart des problèmes de son." },
          { q: "Qu'est-ce qu'un bon point d'avancement ?", options: ["Une longue histoire sur votre week-end", "Ce que j'ai fait, ce qui vient ensuite, et ce qui me bloque", "Rien", "Seulement des émojis"], answer: 1, why: "Les points d'avancement tiennent l'équipe informée." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien travailler et trouver des emplois à distance",
      lessons: [
        {
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
          youCanNow: "collaborer dans un document partagé avec des commentaires, des suggestions et l'historique des versions."
        },
        {
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
          youCanNow: "planifier et gérer une journée de télétravail en blocs de temps."
        },
        {
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
          youCanNow: "vous installer, communiquer, collaborer et gérer votre temps en télétravail, et trouver de vrais emplois à distance en sécurité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien travailler et trouver des emplois à distance",
        questions: [
          { q: "Dans Google Docs, quel mode affiche vos modifications comme des suggestions que les autres acceptent ?", options: ["Le mode Suppression", "Le mode Impression", "Le mode Nuit", "Le mode Suggestion"], answer: 3, why: "Le mode Suggestion montre les modifications pour approbation." },
          { q: "À quoi sert l'historique des versions ?", options: ["À voir ou restaurer les versions précédentes d'un fichier", "À supprimer le fichier pour toujours", "À partager des mots de passe", "À changer votre nom"], answer: 0, why: "Il garde une trace des versions précédentes." },
          { q: "Que sont les blocs de temps ?", options: ["Bloquer des sites web", "Arrêter l'horloge", "Planifier sa journée en plages pour des tâches précises", "Travailler sans pause"], answer: 2, why: "Les blocs protègent le travail concentré." },
          { q: "Un « emploi à distance » vous demande d'acheter un kit de démarrage à 200 $ avant de commencer. Selon la FTC, c'est :", options: ["Une embauche normale", "Un impôt", "Un avantage", "Un signe d'arnaque"], answer: 3, why: "Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi." },
          { q: "Un recruteur écrit depuis une adresse e-mail gratuite et ne veut faire l'entretien que par chat écrit. Vous devez :", options: ["Envoyer vos coordonnées bancaires", "Payer des frais", "Chercher l'entreprise vous-même et rester prudent", "Ignorer tous les emplois pour toujours"], answer: 2, why: "Ce sont des signes courants de faux emploi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences de télétravail avec l'IA",
    questions: [
      { q: "Le télétravail, c'est :", options: ["Travailler seulement la nuit", "Faire son travail hors du bureau de l'employeur", "Du travail non payé", "Utiliser une télécommande"], answer: 1, why: "C'est un travail fait de chez soi ou d'ailleurs." },
      { q: "Quel équipement est le plus important pour les visioconférences ?", options: ["Un casque ou des écouteurs avec micro", "Une belle chaise", "Une deuxième télé", "Une imprimante"], answer: 0, why: "Un son clair compte le plus en appel." },
      { q: "Comment vérifier si votre internet est assez rapide ?", options: ["Deviner", "Demander à l'IA", "Faire un test de débit gratuit", "Compter vos applications"], answer: 2, why: "Un test de débit le mesure." },
      { q: "Qu'est-ce qui protège votre compte de travail ?", options: ["La connexion en deux étapes", "Partager votre mot de passe avec la famille", "L'écrire sur l'écran", "Désactiver les mises à jour"], answer: 0, why: "La connexion en deux étapes bloque la plupart des attaques." },
      { q: "Comment rejoint-on en général une visioconférence de travail ?", options: ["En appelant un numéro au hasard", "En attendant qu'on vienne vous voir", "En envoyant une lettre", "En cliquant sur le lien de l'e-mail ou de l'invitation d'agenda"], answer: 3, why: "Les invitations contiennent un lien de réunion." },
      { q: "Quand vous ne parlez pas pendant un appel, vous devez en général :", options: ["Mettre de la musique", "Garder le micro coupé", "Quitter l'appel", "Monter le volume"], answer: 1, why: "Couper le micro évite les bruits de fond." },
      { q: "Le partage d'écran, c'est :", options: ["Casser votre écran", "Montrer l'écran de votre ordinateur aux autres participants", "Acheter un nouvel écran", "Cacher votre écran"], answer: 1, why: "Il permet aux autres de voir ce que vous voyez." },
      { q: "La première compétence du télétravail est :", options: ["Taper tout en majuscules", "Les longs appels téléphoniques", "Éviter les messages", "Écrire clairement"], answer: 3, why: "L'essentiel de la communication à distance est écrit." },
      { q: "Un message de travail clair :", options: ["Commence par l'essentiel et dit ce dont vous avez besoin et pour quand", "Cache l'essentiel à la fin", "Est le plus long possible", "Ne demande rien"], answer: 0, why: "Les messages clairs obtiennent des réponses plus rapides." },
      { q: "Qu'est-ce qui ne doit jamais entrer dans un outil d'IA non approuvé par votre employeur ?", options: ["Un message d'exemple sur un retard", "Des questions générales de grammaire", "Des données clients", "La date d'un jour férié"], answer: 2, why: "Les données clients doivent être protégées." },
      { q: "Vous serez en retard pour votre service. Meilleure action :", options: ["Ne rien dire", "Vous connecter en retard sans explication", "Démissionner", "Envoyer un court message d'avertissement avant votre heure de début"], answer: 3, why: "Prévenir tôt est professionnel." },
      { q: "Un commentaire dans un document partagé :", options: ["Supprime le document", "Bloque tout le monde", "Ajoute une note sans modifier le texte", "L'imprime"], answer: 2, why: "Les commentaires interrogent ou proposent sans modifier." },
      { q: "Dans Word, la fonction qui montre vos modifications pour que d'autres les relisent est :", options: ["Le nombre de mots", "Le Suivi des modifications", "La vérification orthographique", "La couleur de page"], answer: 1, why: "Le Suivi des modifications enregistre les changements." },
      { q: "Avant de régler le partage d'un document sur « toute personne disposant du lien », vous devez :", options: ["Demander à son propriétaire", "Le faire sans demander", "Publier le lien", "Supprimer le document"], answer: 0, why: "Les paramètres de partage protègent l'information." },
      { q: "Une heure de fin régulière en télétravail aide à :", options: ["Rien", "Travailler plus d'heures sans être payé", "Équilibrer vie professionnelle et vie privée", "Accélérer votre internet"], answer: 2, why: "Des limites évitent l'épuisement." },
      { q: "Si la garde des enfants rend le travail difficile, la meilleure étape est :", options: ["Prévenir tôt votre responsable", "Le cacher", "Ne plus vous connecter", "Inventer vos points d'avancement"], answer: 0, why: "Les responsables peuvent aider s'ils le savent tôt." },
      { q: "Certains emplois à distance n'embauchent que des personnes qui :", options: ["N'ont pas d'ordinateur", "N'utilisent jamais l'e-mail", "Travaillent gratuitement", "Vivent dans certains États ou pays"], answer: 3, why: "Vérifiez les règles de lieu dans l'offre." },
      { q: "Le recruteur d'une vraie entreprise écrit en général depuis :", options: ["Une adresse e-mail gratuite au hasard", "Le domaine de l'entreprise", "Une application de messages écrits seulement", "Seulement un message privé sur un réseau social"], answer: 1, why: "Le domaine de l'entreprise est un signe de vrai recruteur." },
      { q: "Selon la FTC, qu'on vous demande de réexpédier des colis depuis chez vous, c'est :", options: ["Un emploi à distance normal", "Une partie d'une arnaque", "Un programme public", "Sans risque si c'est bien payé"], answer: 1, why: "Les emplois de réexpédition sont une arnaque connue." },
      { q: "Où signaler une arnaque à l'emploi aux États-Unis ?", options: ["À l'adresse e-mail de l'escroc", "Dans une section de commentaires", "Nulle part", "Sur ReportFraud.ftc.gov"], answer: 3, why: "La FTC recueille les signalements de fraude." }
    ]
  }
};
