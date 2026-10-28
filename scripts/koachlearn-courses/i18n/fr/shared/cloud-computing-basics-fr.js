"use strict";

// Koach Learn course, French translation of shared/cloud-computing-basics.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// SaaS, PaaS and IaaS keep their English acronyms (also used in French), with the French meaning.

module.exports = {
  id: "cloud-computing-basics-fr",
  lang: "fr",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Les bases de l'informatique en nuage (cloud)",
  skills: "Expliquer ce qu'est le cloud, Distinguer SaaS, PaaS et IaaS, Stocker et synchroniser des fichiers dans le cloud, Partager des fichiers en sécurité, Protéger un compte cloud",
  outcome: "expliquer ce qu'est l'informatique en nuage et ses trois grands types de services, puis utiliser un service de stockage en ligne gratuit pour ranger, organiser et partager des fichiers en sécurité, avec votre compte protégé par la validation en deux étapes.",
  about: [
    "Chaque fois que vous regardez une vidéo en streaming, enregistrez une photo dans Google Photos ou iCloud, ou travaillez sur un document Google avec un camarade, vous utilisez l'informatique en nuage, aussi appelée le cloud. Les entreprises y font tourner des sites, des applications et de l'IA, et les compétences cloud sont recherchées dans beaucoup de métiers.",
    "Ce cours explique avec des mots simples ce qu'est le cloud, les grands types de services cloud et qui sont les grands fournisseurs. Ensuite, vous utiliserez un service de stockage en ligne gratuit pour enregistrer, organiser et partager des fichiers en sécurité, comme le font les équipes à l'école et au travail.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Si vous voulez aller plus loin, le cours sur les fondamentaux de Microsoft Azure prolonge celui-ci."
  ],
  finalTask: "Dans Google Drive ou Microsoft OneDrive : créez un dossier appelé « Documents de carrière », envoyez ou créez deux fichiers dedans (par exemple un CV et une liste de références), partagez un fichier avec un ami ou un proche en lecture seule, vérifiez qui y a accès, puis retirez son accès. Assurez-vous que la validation en deux étapes est activée sur le compte. Enfin, écrivez trois phrases qui expliquent le cloud, et donnez un exemple de SaaS, un de PaaS et un d'IaaS.",
  chapters: [
    {
      name: "Chapitre 1 : Ce qu'est le cloud",
      lessons: [
        {
          title: "Le cloud avec des mots simples",
          minutes: 4,
          goal: "Expliquer avec vos mots ce qu'est l'informatique en nuage.",
          text: [
            "« Le cloud », ce sont des ordinateurs installés dans de grands bâtiments appelés centres de données, que vous utilisez par internet. Au lieu de tout garder sur votre téléphone ou votre ordinateur portable, vos fichiers, vos applications et la puissance de calcul se trouvent sur ces ordinateurs, et vous y accédez depuis n'importe quel appareil.",
            "Pensez à l'électricité. Vous ne construisez pas une centrale électrique chez vous ; vous branchez et vous payez ce que vous consommez. Le cloud fonctionne de la même façon : une entreprise possède les ordinateurs, et les personnes et les entreprises utilisent ce dont elles ont besoin, quand elles en ont besoin.",
            "Exemples de tous les jours : les e-mails Gmail et Outlook, Google Drive, OneDrive, iCloud et Dropbox pour les fichiers, Netflix et Spotify pour le streaming, et les assistants IA comme ChatGPT ou Copilot, qui tournent sur des ordinateurs du cloud."
          ],
          words: [["Informatique en nuage (cloud)", "utiliser des ordinateurs, du stockage et des logiciels par internet plutôt que sur votre propre appareil."], ["Centre de données", "un grand bâtiment rempli d'ordinateurs qui font tourner les services cloud."], ["Serveur", "un ordinateur puissant qui fournit un service à d'autres ordinateurs par un réseau."]],
          slides: [
            { title: "Ce qu'est le cloud", bullets: ["Des ordinateurs dans des centres de données", "Vous les utilisez par internet", "Depuis n'importe quel appareil"] },
            { title: "Comme l'électricité", bullets: ["Vous ne construisez pas de centrale", "Vous branchez et payez ce que vous utilisez"] },
            { title: "Vous l'utilisez déjà", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, les assistants IA"] }
          ],
          tryIt: "Listez cinq applications ou sites que vous avez utilisés cette semaine. À côté de chacun, écrivez « cloud » si vos affaires sont gardées ou traitées sur les ordinateurs de l'entreprise et pas seulement sur votre appareil.",
          youCanNow: "expliquer l'informatique en nuage avec vos mots et montrer des services cloud que vous utilisez déjà."
        },
        {
          title: "Pourquoi les gens et les entreprises utilisent le cloud",
          minutes: 5,
          goal: "Nommer les principaux avantages et risques du cloud.",
          text: [
            "Les avantages : vous retrouvez vos fichiers sur n'importe quel appareil ; un téléphone perdu ne veut pas dire des photos perdues ; une équipe peut travailler sur le même document en même temps ; et les entreprises peuvent commencer petit et grandir, en payant plus de puissance de calcul seulement quand elles en ont besoin, au lieu d'acheter des serveurs coûteux.",
            "Les risques : il faut une connexion internet ; si quelqu'un vole votre mot de passe, il peut accéder à vos fichiers de n'importe où ; les offres gratuites ont des limites de stockage ; et vos données sont gardées par une entreprise, donc vous devez connaître ses réglages de confidentialité.",
            "Les grands fournisseurs de cloud pour les entreprises sont notamment Amazon Web Services (AWS), Microsoft Azure et Google Cloud. Pour le grand public, Google, Microsoft, Apple et Dropbox offrent un stockage en ligne gratuit avec des options payantes. Vérifiez sur le site de chaque entreprise la quantité de stockage gratuit actuelle."
          ],
          words: [["Évolutivité", "la capacité d'augmenter ou de réduire la puissance de calcul selon les besoins."], ["Fournisseur", "l'entreprise qui fait fonctionner le service cloud."], ["Limite de stockage", "la quantité maximale de données que votre offre vous permet de garder."]],
          slides: [
            { title: "Les avantages", bullets: ["Vos fichiers sur n'importe quel appareil", "Un téléphone perdu ne veut pas dire photos perdues", "Une équipe travaille sur le même fichier", "Les entreprises grandissent sans acheter de serveurs"] },
            { title: "Les risques", bullets: ["Il faut internet", "Un mot de passe volé ouvre tout", "Les offres gratuites ont des limites"] },
            { title: "Les grands fournisseurs", bullets: ["Entreprises : AWS, Microsoft Azure, Google Cloud", "Grand public : Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Pensez à une petite entreprise que vous connaissez, comme un salon de coiffure, un food truck ou le secrétariat d'une église. Écrivez deux façons dont le cloud pourrait l'aider et un risque qu'elle devrait prévoir.",
          youCanNow: "nommer les principaux avantages et risques du cloud et les grands fournisseurs de cloud."
        },
        {
          title: "SaaS, PaaS et IaaS : les trois types de services",
          minutes: 5,
          goal: "Classer des services cloud en SaaS, PaaS et IaaS.",
          text: [
            "Les services cloud sont de trois grands types, selon ce que le fournisseur fait pour vous. Prenez l'exemple d'une pizza : vous pouvez acheter une pizza toute prête, louer une cuisine avec les ingrédients, ou louer seulement le four.",
            "SaaS (Software as a Service, logiciel en tant que service) : un logiciel fini que vous utilisez dans un navigateur ou une application, comme Gmail, Google Docs, Microsoft 365 ou Zoom. Le fournisseur gère tout. PaaS (Platform as a Service, plateforme en tant que service) : une plateforme prête où les développeurs construisent et font tourner leurs propres applications sans gérer de serveurs, comme Google App Engine ou Azure App Service. IaaS (Infrastructure as a Service, infrastructure en tant que service) : des ordinateurs virtuels, du stockage et des réseaux bruts que vous configurez vous-même, comme Amazon EC2 ou Azure Virtual Machines.",
            "Dans tous les cas, la sécurité est partagée. Le fournisseur protège ses centres de données ; vous restez toujours responsable de votre mot de passe, des personnes avec qui vous partagez et de ce que vous envoyez."
          ],
          steps: ["Demandez-vous : est-ce que j'utilise juste un logiciel fini ? C'est du SaaS.", "Est-ce que je construis ma propre application sur une plateforme prête ? C'est du PaaS.", "Est-ce que je configure mes propres ordinateurs virtuels ? C'est de l'IaaS.", "Dans les trois cas, protégez votre propre compte et vos données."],
          words: [["SaaS", "logiciel en tant que service : un logiciel fini utilisé par internet."], ["PaaS", "plateforme en tant que service : une plateforme prête pour construire et faire tourner vos propres applications."], ["IaaS", "infrastructure en tant que service : des ordinateurs virtuels, du stockage et des réseaux que vous louez et gérez."], ["Responsabilité partagée", "le fournisseur sécurise le cloud ; vous sécurisez votre compte et vos données dedans."]],
          slides: [
            { title: "Trois types de services", bullets: ["SaaS : une pizza toute prête", "PaaS : une cuisine louée avec les ingrédients", "IaaS : seulement le four"] },
            { title: "Exemples", bullets: ["SaaS : Gmail, Google Docs, Microsoft 365, Zoom", "PaaS : Google App Engine, Azure App Service", "IaaS : Amazon EC2, Azure Virtual Machines"] },
            { title: "Responsabilité partagée", bullets: ["Le fournisseur : sécurise les centres de données", "Vous : votre mot de passe, vos partages et vos envois"] }
          ],
          tryIt: "Classez ces services en SaaS, PaaS ou IaaS : Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Vérifiez vos réponses avec les exemples de cette leçon.",
          youCanNow: "classer des services cloud en SaaS, PaaS et IaaS et expliquer la responsabilité partagée."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce qu'est le cloud",
        questions: [
          { q: "Que veut dire « le cloud » ?", options: ["La météo", "Des ordinateurs dans des centres de données que vous utilisez par internet", "Une sorte de coque de téléphone", "Seulement le disque dur de votre ordinateur"], answer: 1, why: "Les services cloud tournent sur des ordinateurs distants atteints par internet." },
          { q: "Lequel est un risque du cloud ?", options: ["Retrouver ses fichiers sur n'importe quel appareil", "Les équipes peuvent partager des documents", "Un mot de passe volé peut ouvrir vos fichiers de n'importe où", "Un téléphone perdu ne veut pas dire photos perdues"], answer: 2, why: "La sécurité du compte compte, car le cloud est accessible de partout." },
          { q: "Gmail et Zoom sont des exemples de :", options: ["IaaS", "PaaS", "Centres de données", "SaaS"], answer: 3, why: "Ce sont des logiciels finis utilisés par internet." },
          { q: "Une entreprise loue des ordinateurs virtuels et les configure elle-même. C'est :", options: ["De l'IaaS", "Du SaaS", "Un navigateur", "Un mot de passe"], answer: 0, why: "Louer des ordinateurs virtuels que l'on gère, c'est de l'infrastructure en tant que service." },
          { q: "Avec la responsabilité partagée, qui protège votre mot de passe ?", options: ["Le gardien du centre de données", "Vous", "Internet", "Personne"], answer: 1, why: "Votre compte et ce que vous partagez sont toujours votre affaire." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser le cloud vous-même",
      lessons: [
        {
          title: "Ranger et organiser des fichiers dans le stockage en ligne",
          minutes: 5,
          goal: "Envoyer, créer et organiser des fichiers dans Google Drive ou OneDrive.",
          text: [
            "Google Drive est fourni avec un compte Google gratuit, et OneDrive avec un compte Microsoft gratuit. Les deux marchent dans un navigateur web (drive.google.com ou onedrive.com) et comme applications pour téléphone depuis le magasin d'applications officiel.",
            "Utilisez le bouton Nouveau pour créer un dossier ou un document, ou Importer pour ajouter un fichier depuis votre appareil. Donnez aux fichiers des noms clairs, comme « CV - Jordan Lee - 2026 », pour les retrouver plus tard. Rangez les fichiers qui vont ensemble dans des dossiers.",
            "La synchronisation garde un fichier identique sur tous vos appareils : modifiez-le sur votre ordinateur et la nouvelle version apparaît sur votre téléphone. Beaucoup de services cloud gardent aussi les anciennes versions, pour revenir en arrière si vous faites une erreur."
          ],
          steps: ["Connectez-vous sur drive.google.com ou onedrive.com (ou ouvrez l'application).", "Appuyez sur Nouveau et choisissez Dossier ; donnez-lui un nom clair.", "Ouvrez le dossier ; appuyez sur Nouveau pour créer un document, ou Importer pour ajouter un fichier.", "Renommez les fichiers avec des noms clairs.", "Ouvrez le même fichier sur un autre appareil pour le voir synchronisé."],
          words: [["Importer (envoyer)", "copier un fichier de votre appareil vers le cloud."], ["Synchroniser", "garder automatiquement les fichiers identiques sur tous vos appareils."], ["Historique des versions", "les anciennes copies enregistrées d'un fichier vers lesquelles on peut revenir."]],
          slides: [
            { title: "Un stockage en ligne gratuit", bullets: ["Google Drive avec un compte Google", "OneDrive avec un compte Microsoft", "Navigateur ou application officielle"] },
            { title: "Organiser", bullets: ["Nouveau : dossier ou document", "Importer : ajouter un fichier", "Des noms clairs et des dossiers"] },
            { title: "Synchronisation et versions", bullets: ["Le même fichier sur chaque appareil", "Revenir à une ancienne version si besoin"] }
          ],
          tryIt: "Dans Google Drive ou OneDrive, créez un dossier appelé « Documents de carrière ». Créez ou importez deux fichiers dedans et donnez-leur des noms clairs. Puis ouvrez le dossier sur un deuxième appareil si vous en avez un.",
          youCanNow: "envoyer, créer, nommer et organiser des fichiers dans un stockage en ligne, en sachant qu'ils se synchronisent sur vos appareils."
        },
        {
          title: "Partager des fichiers en sécurité",
          minutes: 5,
          goal: "Partager un fichier avec la bonne personne et le bon niveau d'accès, puis retirer l'accès.",
          text: [
            "Les fichiers du cloud sont faciles à partager, ce qui est utile mais risqué. Appuyez sur Partager sur un fichier et ajoutez l'adresse e-mail d'une personne, ou copiez un lien. Choisissez ce qu'elle peut faire : lire, commenter ou modifier.",
            "Donnez le moins d'accès nécessaire. Un CV pour un employeur : lecture seule. Un projet de groupe : modification pour votre équipe. Faites attention aux liens réglés pour que « tous les utilisateurs disposant du lien » puissent ouvrir le fichier ; toute personne qui reçoit le lien peut le voir, même s'il a été transféré.",
            "Vérifiez qui a accès depuis l'écran Partager ou Gérer l'accès, et retirez les personnes quand un projet est fini. Ne mettez jamais de fichiers avec des numéros de sécurité sociale, des coordonnées bancaires ou des mots de passe dans un dossier partagé."
          ],
          steps: ["Sélectionnez le fichier et appuyez sur Partager.", "Ajoutez l'e-mail de la personne, ou copiez un lien.", "Choisissez Lecteur, Commentateur ou Éditeur ; prenez le moins dont elle a besoin.", "Évitez « tous les utilisateurs disposant du lien » pour les fichiers privés.", "Plus tard, ouvrez Partager ou Gérer l'accès et retirez les personnes qui n'en ont plus besoin."],
          words: [["Niveau d'autorisation", "ce que quelqu'un peut faire avec votre fichier : lire, commenter ou modifier."], ["Accès minimal", "donner aux gens seulement l'accès dont ils ont vraiment besoin."]],
          slides: [
            { title: "Comment partager", bullets: ["Appuyez sur Partager", "Ajoutez un e-mail ou copiez un lien", "Choisissez lecture, commentaire ou modification"] },
            { title: "Accès minimal", bullets: ["CV pour un employeur : lecture seule", "Projet d'équipe : modification pour l'équipe", "Attention à « tous les utilisateurs disposant du lien »"] },
            { title: "Faites le ménage", bullets: ["Vérifiez Gérer l'accès", "Retirez les gens quand le projet est fini", "Pas de numéros privés dans les dossiers partagés"] }
          ],
          tryIt: "Partagez un fichier de votre dossier « Documents de carrière » avec un ami ou un proche en lecture seule. Demandez-lui de l'ouvrir. Puis ouvrez Gérer l'accès et retirez-le.",
          youCanNow: "partager un fichier du cloud avec le bon niveau d'autorisation et retirer l'accès quand il n'est plus nécessaire."
        },
        {
          title: "Protéger votre compte cloud",
          minutes: 5,
          goal: "Activer la validation en deux étapes et vérifier la sécurité de votre compte.",
          text: [
            "Votre compte cloud contient vos fichiers, vos e-mails et vos photos, donc c'est une cible. L'étape la plus importante est la validation en deux étapes (aussi appelée authentification à deux facteurs ou multifacteur) : après votre mot de passe, vous confirmez aussi avec votre téléphone. Un voleur qui n'a que votre mot de passe ne peut pas entrer.",
            "Utilisez un mot de passe long et unique, de préférence gardé dans un gestionnaire de mots de passe. Google et Microsoft ont tous les deux une page de vérification de sécurité dans les paramètres du compte, qui montre les appareils connectés, l'activité récente et les options de récupération.",
            "Méfiez-vous de l'hameçonnage : de faux e-mails qui disent « votre espace de stockage est plein » ou « quelqu'un a partagé un fichier avec vous » et mènent à une fausse page de connexion. Allez vous-même sur drive.google.com ou onedrive.com au lieu de cliquer. Souvenez-vous de la responsabilité partagée : le fournisseur protège ses centres de données ; vous protégez votre compte."
          ],
          steps: ["Ouvrez les paramètres de sécurité de votre compte Google ou Microsoft.", "Activez la validation en deux étapes.", "Vérifiez que le téléphone et l'e-mail de récupération sont corrects.", "Regardez les appareils connectés et retirez ceux que vous ne connaissez pas.", "Allez vous-même sur les sites du cloud au lieu de cliquer sur les liens des e-mails."],
          words: [["Validation en deux étapes", "une deuxième vérification, comme un code ou une confirmation sur votre téléphone, après votre mot de passe."], ["Gestionnaire de mots de passe", "une application qui crée et garde des mots de passe forts pour vous."], ["Hameçonnage", "un faux message qui essaie de vous pousser à donner votre mot de passe."]],
          slides: [
            { title: "Votre compte est une cible", bullets: ["Il contient fichiers, e-mails et photos", "Activez la validation en deux étapes"] },
            { title: "Vérification de sécurité", bullets: ["Mot de passe long et unique", "Téléphone et e-mail de récupération corrects", "Retirez les appareils inconnus"] },
            { title: "Méfiez-vous de l'hameçonnage", bullets: ["« Votre espace de stockage est plein »", "« Quelqu'un a partagé un fichier avec vous »", "Allez vous-même sur le site"] }
          ],
          tryIt: "Entraînement pour la tâche finale : ouvrez les paramètres de sécurité de votre compte Google ou Microsoft, activez la validation en deux étapes et regardez les appareils connectés. Puis terminez la tâche finale avec votre dossier « Documents de carrière ».",
          youCanNow: "protéger votre compte cloud avec la validation en deux étapes, une vérification de sécurité et la vigilance face à l'hameçonnage."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser le cloud vous-même",
        questions: [
          { q: "Que veut dire « synchroniser » ?", options: ["Supprimer un fichier", "Garder les fichiers identiques sur tous vos appareils", "Imprimer un fichier", "Partager un fichier avec des inconnus"], answer: 1, why: "La synchronisation met à jour les fichiers partout où vous êtes connecté." },
          { q: "Vous partagez votre CV avec un employeur. Quelle autorisation est la meilleure ?", options: ["Modification", "Propriétaire", "Lecture seule", "Tous les utilisateurs disposant du lien peuvent modifier"], answer: 2, why: "Donnez le moins d'accès nécessaire ; il a seulement besoin de le lire." },
          { q: "Un projet de groupe s'est terminé le mois dernier. Que faites-vous du dossier partagé ?", options: ["Retirer les personnes qui n'ont plus besoin d'accès", "Le rendre public", "Ajouter plus de personnes", "Partager le lien sur les réseaux sociaux"], answer: 0, why: "Retirer les anciens accès garde vos fichiers privés." },
          { q: "Un e-mail dit « Votre espace de stockage est plein, connectez-vous ici. » Que faites-vous ?", options: ["Cliquer et vous connecter", "Répondre avec votre mot de passe", "Le transférer à vos amis", "Aller vous-même sur drive.google.com ou onedrive.com"], answer: 3, why: "C'est peut-être de l'hameçonnage ; allez vous-même sur le vrai site." },
          { q: "Quelle est l'étape la plus importante pour protéger un compte cloud ?", options: ["Un mot de passe court", "La validation en deux étapes", "Partager votre mot de passe avec un ami", "Désactiver la synchronisation"], answer: 1, why: "Un voleur qui n'a que votre mot de passe ne peut quand même pas entrer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de l'informatique en nuage (cloud)",
    questions: [
      { q: "Un centre de données est :", options: ["Un bâtiment rempli d'ordinateurs qui font tourner les services cloud", "Un magasin de téléphones", "Une salle informatique d'école", "Un type d'application"], answer: 0, why: "Les services cloud tournent dans des centres de données." },
      { q: "Le cloud ressemble à l'électricité parce que :", options: ["Il est toujours gratuit", "On utilise ce dont on a besoin sans posséder la centrale", "Il ne marche que la nuit", "Il n'a pas besoin d'internet"], answer: 1, why: "On utilise et on paie ce dont on a besoin, comme un service public." },
      { q: "Lequel est un service cloud que vous pourriez utiliser tous les jours ?", options: ["Un cahier en papier", "Une calculatrice sans internet", "Google Drive", "Une lampe de bureau"], answer: 2, why: "Google Drive garde les fichiers sur des ordinateurs du cloud." },
      { q: "Un avantage du cloud pour une entreprise est :", options: ["Il faut d'abord acheter des serveurs coûteux", "Il n'a jamais besoin d'internet", "Les mots de passe ne sont pas nécessaires", "On peut grandir et payer plus de puissance de calcul seulement quand il le faut"], answer: 3, why: "C'est ce qu'on appelle l'évolutivité." },
      { q: "Lequel est un grand fournisseur de cloud pour les entreprises ?", options: ["Microsoft Azure", "Une boulangerie du quartier", "Une marque d'imprimantes", "Un navigateur web"], answer: 0, why: "AWS, Azure et Google Cloud sont les plus grands." },
      { q: "Lequel est un vrai risque du cloud ?", options: ["Les fichiers sur n'importe quel appareil", "Les équipes qui partagent des documents", "Le besoin d'une connexion internet", "Les sauvegardes automatiques"], answer: 2, why: "Sans internet, vous ne pouvez peut-être pas atteindre vos fichiers." },
      { q: "SaaS veut dire :", options: ["Storage as a Server", "Software as a Service, logiciel en tant que service", "Security and a System", "Sync and a Screen"], answer: 1, why: "Le SaaS est un logiciel fini utilisé par internet." },
      { q: "Microsoft 365 est un exemple de :", options: ["IaaS", "PaaS", "SaaS", "Centre de données"], answer: 2, why: "C'est un logiciel fini que vous utilisez en ligne." },
      { q: "Un développeur fait tourner son application sur Azure App Service sans gérer de serveurs. C'est :", options: ["Du SaaS", "Du PaaS", "De l'IaaS", "Un gestionnaire de mots de passe"], answer: 1, why: "Une plateforme prête pour vos propres applications, c'est du PaaS." },
      { q: "Les ordinateurs virtuels Amazon EC2 sont un exemple de :", options: ["SaaS", "PaaS", "Navigateur", "IaaS"], answer: 3, why: "Louer des ordinateurs virtuels que l'on gère, c'est de l'IaaS." },
      { q: "Avec la responsabilité partagée, le fournisseur protège :", options: ["Ses centres de données", "Votre mot de passe", "Les personnes avec qui vous partagez", "Ce que vous choisissez d'envoyer"], answer: 0, why: "Vous protégez toujours votre propre compte et vos données." },
      { q: "Quel nom de fichier est le plus clair ?", options: ["« doc1 »", "« trucs »", "« CV - Jordan Lee - 2026 »", "« nouveau nouveau final »"], answer: 2, why: "Des noms clairs rendent les fichiers faciles à retrouver." },
      { q: "Pour ajouter un fichier de votre appareil dans le cloud, vous :", options: ["Le supprimez", "L'importez", "L'imprimez", "L'envoyez par e-mail à un inconnu"], answer: 1, why: "Importer le copie dans le stockage en ligne." },
      { q: "L'historique des versions vous permet de :", options: ["Revenir à une ancienne copie d'un fichier", "Voir les fichiers des autres", "Obtenir plus de stockage gratuit", "Changer votre mot de passe"], answer: 0, why: "Il garde les anciennes versions enregistrées." },
      { q: "Partager avec « tous les utilisateurs disposant du lien » veut dire :", options: ["Vous seul pouvez l'ouvrir", "Seuls vos contacts peuvent l'ouvrir", "Personne ne peut l'ouvrir", "Toute personne qui reçoit le lien peut l'ouvrir, même s'il est transféré"], answer: 3, why: "Les liens peuvent aller plus loin que prévu." },
      { q: "L'idée d'accès minimal veut dire :", options: ["Donner à tout le monde l'accès en modification", "Donner aux gens seulement l'accès dont ils ont besoin", "Ne jamais rien partager", "Tout partager publiquement"], answer: 1, why: "Moins d'accès veut dire moins de risque." },
      { q: "Qu'est-ce qui ne doit jamais aller dans un dossier cloud partagé ?", options: ["Le plan d'un projet de groupe", "Un emploi du temps de classe", "Un fichier avec votre numéro de sécurité sociale", "Une photo d'équipe"], answer: 2, why: "Les numéros privés ne doivent pas être dans des dossiers partagés." },
      { q: "La validation en deux étapes veut dire :", options: ["Taper votre mot de passe deux fois", "Une deuxième vérification sur votre téléphone après votre mot de passe", "Deux comptes", "Deux dossiers"], answer: 1, why: "Elle bloque les voleurs qui n'ont que votre mot de passe." },
      { q: "Lors d'une vérification de sécurité, vous devez :", options: ["Retirer les appareils connectés que vous ne reconnaissez pas", "Désactiver votre téléphone de récupération", "Partager votre mot de passe", "Supprimer tous vos fichiers"], answer: 0, why: "Un appareil inconnu peut vouloir dire que quelqu'un d'autre est connecté." },
      { q: "Un e-mail dit « Quelqu'un a partagé un fichier avec vous » de la part d'un expéditeur inconnu. Le plus sûr est de :", options: ["Cliquer et vous connecter sur la page qui s'ouvre", "Répondre avec votre mot de passe", "Le transférer à tout le monde", "Aller vous-même sur votre site de stockage pour vérifier"], answer: 3, why: "Les faux e-mails de partage mènent à de fausses pages de connexion." }
    ]
  }
};
