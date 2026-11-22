"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-programs.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

const ODPC = { name: "Bureau du Commissaire à la protection des données (Kenya, ODPC)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Commission nigériane de protection des données (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (SIG libre et gratuit)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (images satellite Sentinel gratuites)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO et UIT : E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-fr",
  lang: "fr",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Drones pour la surveillance agricole 5 : intégration des données, SIG et conception de programmes",
  skills: "Organiser et sauvegarder les données de drone, Combiner les cartes de drone avec des couches SIG et des images satellite, Protéger les données des agriculteurs et obtenir leur consentement, Définir l'objectif et les utilisateurs d'un programme de surveillance, Planifier l'équipe, le matériel, le calendrier et le budget, Mesurer et rendre compte des résultats",
  outcome: "concevoir un programme de surveillance agricole par drone pour un groupe d'agriculteurs : son objectif, ses utilisateurs, son plan de données avec intégration SIG et protection des données, son équipe, son calendrier, son budget, la façon dont il se finance, et la façon dont vous mesurerez et rendrez compte des résultats.",
  about: [
    "Voici le cours 5 du parcours de surveillance par drone. Il s'adresse aux responsables de la vulgarisation, aux dirigeants de coopératives et de groupements d'agriculteurs, au personnel agricole des comtés et des États, aux chargés de programme d'ONG, aux gestionnaires d'agro-entreprises et aux entrepreneurs du drone au Kenya, au Nigeria et partout en Afrique qui veulent faire de la surveillance par drone pour de nombreuses fermes, pas une seule.",
    "Le chapitre 1 porte sur les données : nommer, stocker et sauvegarder les données de drone ; réunir dans un SIG les cartes de drone, les limites des champs, les images satellite et les registres des fermes ; et protéger les données personnelles des agriculteurs selon des lois comme la loi kényane de 2019 et la loi nigériane de 2023 sur la protection des données. Le chapitre 2 porte sur la conception du programme : partir d'un vrai problème et de vrais utilisateurs, planifier les personnes, le matériel, les vols et l'argent, et prouver que le programme fonctionne.",
    "À la fin, vous aurez une conception de programme que vous pourrez présenter au conseil d'une coopérative, à un bureau de comté ou d'État, à un bailleur ou à un investisseur. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez une conception de programme de deux pages pour la surveillance par drone d'une coopérative de 200 petits agriculteurs (par exemple maïs et haricot à Trans Nzoia, café à Nyeri, ou manioc dans l'État d'Ogun) : le problème et l'objectif, les utilisateurs et ce que reçoit chacun, le plan de données (stockage, couches SIG, usage du satellite, consentement et protection des données), l'équipe et le matériel, le calendrier des vols pour une saison, un budget simple avec le mode de financement du service, les mesures de réussite, et la façon de rendre compte des résultats.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des responsables de la vulgarisation, des dirigeants de coopératives et de groupements d'agriculteurs, des agents de l'agriculture des comtés et des États, des chargés de programme d'ONG, des gestionnaires d'agro-entreprises et des entrepreneurs du drone au Kenya, au Nigeria et partout en Afrique, qui veulent mener une surveillance par drone pour de nombreuses fermes.",
    startingPoint: "Les apprenants savent faire et lire des cartes de drone et ont vu du travail par drone sur une seule ferme (cours 1 à 4). Peu ont organisé les données de centaines de fermes, combiné des cartes de drone avec des images satellite et des registres dans un SIG, traité les données personnelles des agriculteurs selon la loi, ou planifié et budgété un programme qui dure au-delà d'une subvention.",
    gap: "Beaucoup de projets de drones partent du drone au lieu d'un problème, perdent des données, traitent mal les informations personnelles des agriculteurs ou s'arrêtent quand la subvention se termine. Une conception de programme claire, avec un plan de données, le consentement, une équipe, un calendrier, un budget et des mesures, permet à une coopérative, un comté ou une entreprise de faire tourner un service auquel les agriculteurs font confiance et qui se finance lui-même.",
    constraints: [
      "Niveau de lecture : des mots simples ; chaque terme de données et de SIG est expliqué",
      "Appareils : un ordinateur portable avec QGIS gratuit et un tableur ; des données de drone et satellite ou des exemples",
      "Loi : les lois sur la protection des données s'appliquent (Data Protection Act 2019 au Kenya, Nigeria Data Protection Act 2023 au Nigeria, ou la loi du pays de l'apprenant)",
      "Règles de l'aviation : les pilotes ont besoin de licences et l'organisation peut avoir besoin d'un certificat d'exploitant",
      "Les coûts et les frais varient selon les pays et changent : les apprenants utilisent de vrais devis locaux"
    ],
    prerequisites: "« Drones pour la surveillance agricole 4 : précision, climat et suivi du bétail », ou une expérience équivalente des cartes de drone."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour les données de drone de nombreuses fermes", action: "mettre en place une structure de dossiers, une règle de nommage, un registre des vols et une sauvegarde 3-2-1", standard: "en utilisant des ID ferme au lieu des noms et en vérifiant que les sauvegardes s'ouvrent" },
    { id: "O2", condition: "À partir de cartes de drone, de limites de champs, d'images satellite et de registres des fermes", action: "planifier un projet SIG qui les superpose et relie les registres aux champs par ID", standard: "avec toutes les couches dans le même système de coordonnées" },
    { id: "O3", condition: "Quand un programme collecte les données personnelles des agriculteurs", action: "rédiger une déclaration de consentement et des mesures de protection des données conformes à la loi", standard: "en disant ce qui est collecté, pourquoi, qui le voit, combien de temps c'est gardé et que les agriculteurs peuvent refuser" },
    { id: "O4", condition: "Pour un groupe d'agriculteurs", action: "rédiger un objectif de programme avec un chiffre et une date, et lister les utilisateurs et ce que reçoit chacun", standard: "en partant d'un problème qui compte pour les utilisateurs et sur lequel ils peuvent agir" },
    { id: "O5", condition: "Pour une saison du programme", action: "planifier l'équipe, le matériel, le calendrier des vols et le budget, et la façon dont le service est payé", standard: "en incluant les licences, les coûts ponctuels et les coûts de fonctionnement, et un plan pour l'après-subvention" },
    { id: "O6", condition: "À la fin d'une saison", action: "choisir des mesures de réussite et rendre compte des résultats à chaque utilisateur", standard: "par rapport à une situation de départ et en étant honnête sur ce qui n'a pas marché" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Gestion et intégration des données",
      lessons: [
        {
          objectives: ["O1"],
          title: "Organiser, stocker et sauvegarder les données de drone",
          minutes: 5,
          goal: "Mettre en place un système de dossiers, de nommage et de sauvegarde pour les données de drone de nombreuses fermes.",
          text: [
            "Un seul vol de cartographie peut produire des centaines de photos et plusieurs grandes cartes. Sur 200 fermes et une saison entière, cela fait des milliers de fichiers. Sans système, les données se perdent, se mélangent ou sont écrasées, et le programme perd la confiance.",
            "Utilisez une seule structure de dossiers claire et une seule règle de nommage pour tous : par exemple Programme / ID ferme / ID champ / Date / brut, traité, rapports. Utilisez un numéro d'identification de ferme au lieu du nom de l'agriculteur dans les noms de fichiers. Tenez un registre simple (un tableur) de chaque vol : date, ID ferme, champ, pilote, drone, fichiers, traité oui ou non.",
            "Suivez le principe de sauvegarde 3-2-1 : trois copies, sur deux types de support différents (par exemple un ordinateur portable et un disque externe), dont une copie dans un autre lieu ou sur un service en ligne de confiance. Vérifiez que les sauvegardes s'ouvrent. Décidez combien de temps vous gardez les photos brutes, car elles remplissent vite la mémoire."
          ],
          steps: ["Adoptez une seule structure de dossiers et une seule règle de nommage pour toute l'équipe.", "Donnez un numéro d'identification à chaque ferme et à chaque champ ; pas de noms dans les noms de fichiers.", "Tenez un tableur de registre des vols.", "Sauvegardez : trois copies, deux types de support, une hors site.", "Fixez la durée de conservation des photos brutes."],
          words: [["Données brutes", "les photos et journaux d'origine, tels qu'ils sortent du drone."], ["Sauvegarde", "une copie supplémentaire des données, gardée au cas où l'original serait perdu."], ["Registre", "une liste qui note chaque vol et ses fichiers."]],
          slides: [
            { title: "Les données grossissent vite", bullets: ["Des centaines de photos par vol", "Des milliers de fichiers par saison", "Des données perdues ou mélangées font perdre la confiance"] },
            { title: "Un seul système pour tous", bullets: ["Programme / ID ferme / ID champ / Date", "Brut, traité, rapports", "Des ID, pas des noms, dans les fichiers"] },
            { title: "Tenez un registre des vols", bullets: ["Date, ferme, champ, pilote, drone", "Fichiers et état du traitement"] },
            { title: "Sauvegarde 3-2-1", bullets: ["Trois copies", "Deux types de support", "Une copie dans un autre lieu"] }
          ],
          tryIt: "Créez sur votre ordinateur ou votre téléphone la structure de dossiers d'un programme d'exemple avec trois fermes, et commencez un tableur de registre des vols avec les colonnes de cette leçon. Ajoutez deux vols d'exemple.",
          youCanNow: "organiser, enregistrer et sauvegarder les données de drone d'un programme sur plusieurs fermes.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi décider combien de temps garder les photos brutes ?", options: ["Il est illégal de garder les photos brutes", "Les agriculteurs les demandent tous les jours", "Les photos brutes remplissent vite le stockage", "On ne peut pas en faire de cartes"], answer: 2, why: "Les photos brutes remplissent vite le stockage : le programme décide donc combien de temps les garder." },
            { objective: "O1", q: "Deux pilotes nomment différemment les fichiers d'une même ferme. Que faites-vous ?", options: ["Convenir d'une seule structure de dossiers et d'une seule règle de nommage pour tous", "Laisser chaque pilote utiliser son propre système", "Mettre le nom de l'agriculteur dans chaque fichier", "Supprimer les fichiers les plus anciens"], answer: 0, why: "Une structure de dossiers et une règle de nommage claires et communes évitent que les données soient perdues ou mélangées." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Combiner les cartes de drone avec le SIG, le satellite et les registres",
          minutes: 6,
          goal: "Construire un projet SIG qui superpose cartes de drone, limites des champs, images satellite et registres des fermes.",
          text: [
            "Un SIG permet d'empiler différents types de données sur une même carte. Pour un programme, les couches de base sont les limites des champs (parcourues avec le GPS d'un téléphone ou dessinées sur une carte de drone) et les points des fermes. Par-dessus viennent les orthomosaïques et cartes NDVI de drone, les images satellite gratuites, et des registres comme la date de semis, la variété, les intrants et le rendement.",
            "Les images satellite Sentinel-2 gratuites, visibles dans le Copernicus Browser, arrivent tous les quelques jours à environ 10 mètres par pixel. Elles sont trop grossières pour voir les plants un par un, mais bonnes pour surveiller les 200 fermes entre deux vols de drone. Utilisez le satellite pour décider quelles fermes ont besoin d'une visite de drone, et le drone pour le détail.",
            "Reliez les registres aux champs grâce à l'ID champ, pour pouvoir poser des questions comme : les champs qui ont reçu les conseils issus du drone ont-ils mieux produit ? QGIS peut joindre un tableur à une couche de champs par ID. Utilisez le même système de coordonnées pour toutes les couches, sinon elles ne se superposeront pas."
          ],
          steps: ["Créez une couche de limites de champs avec un ID champ pour chaque champ.", "Ajoutez les cartes de drone des champs survolés.", "Ajoutez une image satellite gratuite de la zone pour la même période.", "Joignez votre tableur de registres à la couche de champs par ID champ.", "Vérifiez que toutes les couches se superposent (même système de coordonnées)."],
          words: [["Limite de champ", "une forme sur une carte qui dessine le contour d'un champ."], ["Sentinel-2", "deux satellites européens dont les images sont gratuites ; environ 10 m par pixel."], ["Jointure", "relier un tableau aux formes d'une carte grâce à un identifiant commun."], ["Système de coordonnées", "la règle qu'une carte utilise pour placer les choses sur la Terre ; les couches doivent partager le même pour se superposer."]],
          slides: [
            { title: "Empilez vos couches", bullets: ["Limites des champs et points des fermes", "Cartes de drone et NDVI", "Images satellite", "Semis, intrants, rendements"] },
            { title: "Satellite plus drone", bullets: ["Sentinel-2 : gratuit, tous les quelques jours, environ 10 m", "Surveillez toutes les fermes entre les vols", "Envoyez le drone là où il faut du détail"] },
            { title: "Reliez les registres par ID champ", bullets: ["Joignez les tableurs aux champs dans QGIS", "Demandez : les champs conseillés ont-ils mieux produit ?", "Même système de coordonnées pour toutes les couches"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Ouvrez le Copernicus Browser et trouvez votre région. Puis, dans QGIS, dessinez deux limites de champs d'exemple, donnez-leur des ID champ, et joignez un petit tableur avec la date de semis et la variété de chacun.",
          youCanNow: "combiner cartes de drone, images satellite, limites des champs et registres des fermes dans un seul projet SIG.",
          quickCheck: [
            { objective: "O2", q: "Que vous permet de faire un SIG ?", options: ["Faire voler le drone automatiquement", "Superposer différents types de données sur une seule carte", "Charger les batteries plus vite", "Payer les agriculteurs par mobile money"], answer: 1, why: "Un SIG superpose des couches comme les limites, les cartes de drone, les images satellite et les registres sur une seule carte." },
            { objective: "O2", q: "Une coopérative veut surveiller ses 200 fermes chaque semaine mais n'a qu'un drone. Que prévoyez-vous ?", options: ["Survoler chaque ferme chaque jour", "Renoncer à la surveillance", "Survoler seulement la ferme du président", "Utiliser les images satellite gratuites pour surveiller toutes les fermes et envoyer le drone là où elles montrent un problème"], answer: 3, why: "Les satellites surveillent toutes les fermes entre les vols ; les drones apportent le détail là où il est nécessaire." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Protéger les données des agriculteurs et obtenir leur consentement",
          minutes: 5,
          goal: "Collecter et utiliser les données des agriculteurs dans le respect de la loi, avec un consentement clair et un stockage sûr.",
          text: [
            "Un programme de surveillance détient des données personnelles : noms, numéros de téléphone, numéros d'argent mobile, emplacements des fermes, rendements et photos d'habitations. Les lois sur la protection des données s'appliquent. Au Kenya, la loi de 2019 sur la protection des données est supervisée par le Bureau du Commissaire à la protection des données (ODPC), qui enregistre les responsables et les sous-traitants du traitement. Au Nigeria, la loi de 2023 sur la protection des données est supervisée par la Commission nigériane de protection des données (NDPC). D'autres pays ont leurs propres lois et autorités. Vérifiez si votre organisation doit s'enregistrer et ce que la loi exige.",
            "Obtenez un consentement clair dans la langue de l'agriculteur : ce que vous collectez, pourquoi, qui le voit, combien de temps vous le gardez, et qu'il peut refuser ou demander la suppression. Ne collectez que ce dont vous avez besoin. Ne partagez pas les données avec des acheteurs, des prêteurs ou d'autres sans permission.",
            "Protégez les données : mots de passe sur les ordinateurs et téléphones, accès limité, et données personnelles stockées à part des cartes quand c'est possible. Les agriculteurs doivent tirer profit de leurs propres données, par exemple leurs cartes et leurs rapports, et pas seulement les donner."
          ],
          steps: ["Listez les données personnelles que le programme va détenir.", "Vérifiez la loi de votre pays sur la protection des données et si vous devez vous enregistrer.", "Rédigez une courte déclaration de consentement dans la langue de l'agriculteur.", "Ne collectez que le nécessaire ; stockez-le avec mots de passe et accès limité.", "Donnez aux agriculteurs leurs propres cartes et rapports."],
          words: [["Données personnelles", "des informations sur une personne qui peut être identifiée, comme son nom, son numéro de téléphone ou l'emplacement de sa ferme."], ["Consentement", "un oui clair d'une personne, après qu'elle a compris ce qui sera fait de ses données."], ["Responsable du traitement", "l'organisation qui décide pourquoi et comment les données personnelles sont utilisées."]],
          slides: [
            { title: "Votre programme détient des données personnelles", bullets: ["Noms, téléphones, numéros d'argent mobile", "Emplacements des fermes, rendements, photos"] },
            { title: "La loi s'applique", bullets: ["Kenya : loi de 2019 sur la protection des données, ODPC", "Nigeria : loi de 2023 sur la protection des données, NDPC", "Autres pays : leur propre loi"] },
            { title: "Consentement et données minimales", bullets: ["Quoi, pourquoi, qui voit, combien de temps", "Les agriculteurs peuvent refuser", "Collectez seulement le nécessaire"] },
            { title: "Sûr et équitable", bullets: ["Mots de passe, accès limité", "Pas de partage sans permission", "Les agriculteurs reçoivent leurs cartes"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Rédigez une déclaration de consentement de cinq phrases pour les agriculteurs qui rejoignent un programme de surveillance par drone, en mots simples (et dans une langue locale si vous le pouvez) : ce que vous collectez, pourquoi, qui le voit, combien de temps vous le gardez, et comment refuser.",
          youCanNow: "collecter et traiter les données des agriculteurs avec leur consentement, en suivant la loi de votre pays sur la protection des données.",
          quickCheck: [
            { objective: "O3", q: "Au Kenya, qui l'ODPC enregistre-t-il ?", options: ["Les pilotes de drones", "Les vendeurs de semences", "Seulement les acheteurs agricoles", "Les responsables et les sous-traitants du traitement des données"], answer: 3, why: "L'ODPC kényan enregistre les responsables et les sous-traitants du traitement selon le Data Protection Act 2019." },
            { objective: "O3", q: "Une agricultrice vous demande de retirer ses données du programme. Que faites-vous ?", options: ["Refuser, car les données appartiennent au programme", "Respecter la demande et les retirer, comme le consentement le lui permettait", "Les vendre d'abord, puis les retirer", "Ignorer la demande"], answer: 1, why: "Le consentement dit aux agriculteurs qu'ils peuvent refuser ou demander que leurs données soient retirées." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Gestion et intégration des données",
        questions: [
          { objective: "O1", q: "Pourquoi utiliser des ID ferme plutôt que les noms des agriculteurs dans les noms de fichiers ?", options: ["Les noms sont trop longs", "Cela protège la vie privée et garde un nommage régulier", "Les logiciels ne lisent pas les noms", "Le drone l'exige"], answer: 1, why: "Les ID protègent les données personnelles et gardent les fichiers en ordre." },
          { objective: "O1", q: "Le principe de sauvegarde 3-2-1 veut dire :", options: ["Trois copies, deux types de support, une hors site", "Trois drones, deux pilotes, une ferme", "Sauvegarder une fois tous les trois ans", "Supprimer deux copies"], answer: 0, why: "Plusieurs copies à différents endroits protègent contre la perte." },
          { objective: "O2", q: "Dans un programme, les images Sentinel-2 gratuites servent surtout à :", options: ["Compter les plants un par un", "Remplacer tous les vols de drone", "Lire le nom des agriculteurs", "Surveiller toutes les fermes entre les vols et choisir où envoyer le drone"], answer: 3, why: "À environ 10 m, elles montrent les grandes tendances, pas les plants un par un." },
          { objective: "O2", q: "Deux couches de carte ne se superposent pas. Une cause probable est :", options: ["Trop de recouvrement", "Le téléphone de l'agriculteur", "Des systèmes de coordonnées différents", "Trop de fermes"], answer: 2, why: "Les couches doivent partager un système de coordonnées pour se superposer." },
          { objective: "O3", q: "Qui supervise la protection des données au Kenya ?", options: ["Le Bureau du Commissaire à la protection des données (ODPC)", "La KCAA", "Le vendeur de drones", "L'assemblée du comté"], answer: 0, why: "L'ODPC supervise la loi kényane de 2019 sur la protection des données." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Concevoir un programme de surveillance par drone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Partir du problème et des utilisateurs",
          minutes: 5,
          goal: "Rédiger un objectif de programme clair et lister les utilisateurs et ce que reçoit chacun.",
          text: [
            "Beaucoup de projets de drones échouent parce qu'ils partent du drone, pas du problème. Partez d'un problème qui compte pour les agriculteurs et leurs partenaires et sur lequel ils peuvent agir : la détection tardive de la chenille légionnaire d'automne dans une coopérative de maïs, la qualité inégale du thé entre plantations, une mauvaise levée chez les producteurs de manioc sous contrat, ou les dégâts d'inondation dans les périmètres rizicoles.",
            "Écrivez une phrase d'objectif avec un chiffre et une date, par exemple : D'ici la fin des grandes pluies 2027, trouver les foyers de chenille légionnaire d'automne sur 200 fermes membres dans la semaine qui suit les premiers dégâts, et faire parvenir un conseil confirmé à chaque agriculteur touché dans les trois jours.",
            "Listez les utilisateurs et ce que reçoit chacun : les agriculteurs (une carte et un conseil simple sur leur téléphone), les agents de vulgarisation (où aller en premier), le conseil de la coopérative (un bilan de saison), les acheteurs ou transformateurs (les volumes attendus, sans données personnelles sauf accord des agriculteurs), et le bureau agricole du comté ou de l'État s'il est partenaire."
          ],
          steps: ["Nommez le problème en une phrase.", "Vérifiez qu'il compte pour les utilisateurs et qu'ils peuvent agir.", "Écrivez un objectif avec un chiffre et une date.", "Listez chaque groupe d'utilisateurs, ce qu'il reçoit et sous quelle forme."],
          words: [["Programme", "un service organisé qui dure dans le temps pour de nombreuses personnes, pas un vol unique."], ["Utilisateur", "une personne ou un groupe qui reçoit les résultats du programme et agit en conséquence."]],
          slides: [
            { title: "Le problème d'abord, le drone ensuite", bullets: ["Un problème qui compte pour les gens", "Et sur lequel ils peuvent agir"] },
            { title: "Un objectif avec un chiffre et une date", bullets: ["Trouver les foyers de chenille sur 200 fermes", "Dans la semaine qui suit les premiers dégâts", "Conseil dans les trois jours"] },
            { title: "Les utilisateurs et ce qu'ils reçoivent", bullets: ["Agriculteurs : carte et conseil simple sur téléphone", "Vulgarisation : où aller en premier", "Conseil et partenaires : bilan de saison"] }
          ],
          tryIt: "Pour un programme que vous pourriez mener, écrivez le problème, une phrase d'objectif avec un chiffre et une date, et un tableau d'au moins quatre groupes d'utilisateurs avec ce que reçoit chacun.",
          youCanNow: "définir clairement le problème, l'objectif et les utilisateurs d'un programme de drone.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui rend un objectif de programme clair ?", options: ["Une phrase avec un chiffre et une date", "Une longue liste de tout ce que font les drones", "La marque du drone", "Une photo de la ferme"], answer: 0, why: "Un objectif clair tient en une phrase avec un chiffre et une date, pour savoir quand il est atteint." },
            { objective: "O4", q: "Un membre du conseil veut d'abord acheter des drones et trouver un usage plus tard. Que conseillez-vous ?", options: ["Acheter le drone le plus cher", "Acheter des drones et décider l'an prochain", "Partir d'un problème qui compte pour les agriculteurs et sur lequel ils peuvent agir", "Demander à un vendeur de drones quoi faire"], answer: 2, why: "Beaucoup de projets de drones échouent parce qu'ils partent du drone, pas du problème." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planifier les personnes, le matériel, le calendrier et l'argent",
          minutes: 6,
          goal: "Planifier l'équipe, le matériel, le calendrier des vols et le budget d'une saison.",
          text: [
            "Les personnes : des télépilotes et des observateurs titulaires d'une licence, une personne pour traiter et analyser les données, des agents de vulgarisation pour vérifier sur le terrain et conseiller, et un coordinateur. Si votre programme vole pour d'autres ou contre paiement, votre organisation peut avoir besoin d'un certificat d'exploitant de l'autorité de l'aviation, et chaque pilote a besoin de la licence exigée par vos règles.",
            "Le matériel : des drones (et un de rechange), des batteries pour une journée entière, des chargeurs (une option de charge solaire ou par véhicule là où l'électricité est peu fiable), un ordinateur capable de traiter les cartes, du stockage, des téléphones ou tablettes, des équipements de sécurité et du transport. Le calendrier : reportez le calendrier cultural et décidez du nombre de vols par ferme et par saison ; regroupez les fermes par zone pour qu'une équipe en couvre beaucoup en une journée.",
            "L'argent : listez les coûts ponctuels (drones, ordinateur, formation, licences et certificats) et les coûts de fonctionnement (personnel, transport, forfaits de données, réparations, assurance, redevances). Puis décidez comment le service est payé : une redevance par acre ou par hectare payée par argent mobile, un prélèvement de la coopérative sur les livraisons, un acheteur ou transformateur qui en profite, une subvention publique ou d'un bailleur pour la phase de démarrage. Prévoyez l'après-subvention."
          ],
          steps: ["Listez les rôles et les licences ou certificats nécessaires à chacun.", "Listez le matériel, y compris les pièces de rechange et la charge.", "Tracez le calendrier de la saison à partir du calendrier cultural ; regroupez les fermes par zone.", "Listez les coûts ponctuels et de fonctionnement.", "Choisissez comment le service est payé, et comment il continue après une éventuelle subvention."],
          words: [["Coût ponctuel", "un coût payé une seule fois, comme l'achat d'un drone."], ["Coût de fonctionnement", "un coût qui revient, comme le transport et le personnel."], ["Prélèvement", "une petite somme retenue sur les membres, par exemple par kilogramme livré."]],
          slides: [
            { title: "Les personnes", bullets: ["Pilotes et observateurs avec licence", "Traitement et analyse des données", "Agents de vulgarisation et coordinateur", "Certificat d'exploitant si vos règles l'exigent"] },
            { title: "Le matériel", bullets: ["Drones plus un de rechange, batteries pour la journée", "Charge solaire ou par véhicule", "Ordinateur, stockage, téléphones, transport"] },
            { title: "Le calendrier", bullets: ["Suivez le calendrier cultural", "Vols par ferme et par saison", "Regroupez les fermes par zone"] },
            { title: "L'argent", bullets: ["Coûts ponctuels et de fonctionnement", "Redevance à l'hectare par argent mobile, prélèvement, acheteur, subvention", "Prévoyez l'après-subvention"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Pour votre programme de la leçon 4, rédigez une liste de l'équipe, une liste du matériel, un calendrier de saison (quelles semaines vous volez et où) et un tableau budgétaire simple des coûts ponctuels et de fonctionnement avec le mode de paiement de chacun.",
          youCanNow: "planifier l'équipe, le matériel, le calendrier et le budget d'un programme de surveillance par drone.",
          quickCheck: [
            { objective: "O5", q: "Lequel est un coût ponctuel pour un programme de drones ?", options: ["Le transport chaque semaine", "Les forfaits de données chaque mois", "L'achat des drones et de l'ordinateur portable", "Les salaires de l'équipe"], answer: 2, why: "Le matériel comme les drones et l'ordinateur est un coût ponctuel ; le transport, les données et les salaires sont des coûts de fonctionnement." },
            { objective: "O5", q: "Un bénévole propose de piloter pour le programme mais n'a pas de licence de télépilote. Que faites-vous ?", options: ["Ne pas le laisser voler avant qu'il ait la licence exigée par les règles", "Le laisser voler seulement sur les petites fermes", "Le laisser voler si le coordinateur surveille", "Le laisser voler le week-end"], answer: 0, why: "Chaque pilote a besoin de la licence exigée par les règles du pays." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mesurer les résultats et rendre compte",
          minutes: 5,
          goal: "Choisir des mesures de réussite et rendre compte honnêtement des résultats aux agriculteurs et aux partenaires.",
          text: [
            "Un programme ne mérite de continuer que s'il fait une différence. Choisissez quelques mesures liées à votre objectif : la rapidité de détection des problèmes, le nombre d'agriculteurs conseillés à temps, combien ont agi, le rendement ou la qualité comparés à des fermes ou des saisons sans le programme, et le coût par ferme.",
            "Relevez une situation de départ avant de commencer (par exemple les rendements ou les délais de détection de la saison passée), pour pouvoir comparer. Interrogez aussi les agriculteurs : le conseil était-il clair et utile, et seraient-ils prêts à le payer ? Leurs réponses comptent autant que les chiffres.",
            "Rendez compte sous une forme utile à chaque utilisateur : un court message aux agriculteurs, un résumé d'une page avec une carte pour le conseil, un rapport plus complet pour les partenaires. Soyez honnête sur ce qui n'a pas marché. Puis améliorez la conception pour la saison suivante."
          ],
          steps: ["Choisissez trois à cinq mesures liées à l'objectif.", "Relevez la situation de départ avant le début du programme.", "Collectez les mesures et l'avis des agriculteurs pendant la saison.", "Rendez compte sous la bonne forme pour chaque utilisateur.", "Listez ce qu'il faut améliorer la saison suivante."],
          words: [["Situation de départ", "la situation avant le début du programme, qui sert de comparaison."], ["Mesure de réussite", "un chiffre qui montre si le programme a atteint son objectif."]],
          slides: [
            { title: "Mesurez ce qui compte", bullets: ["Rapidité de détection", "Agriculteurs conseillés à temps, et qui a agi", "Rendement ou qualité par rapport au départ", "Coût par ferme"] },
            { title: "Situation de départ et avis", bullets: ["Notez le point de départ", "Demandez aux agriculteurs : utile ? prêt à payer ?"] },
            { title: "Rendre compte et améliorer", bullets: ["Courts messages aux agriculteurs", "Une page et une carte pour le conseil", "Soyez honnête ; améliorez la saison suivante"] }
          ],
          tryIt: "Exercice final : rédigez votre conception de programme de deux pages pour une coopérative de 200 petits agriculteurs : problème et objectif, utilisateurs, plan de données avec SIG et consentement, équipe et matériel, calendrier de saison, budget et mode de financement, mesures de réussite avec situation de départ, et compte rendu.",
          youCanNow: "mesurer, rendre compte et améliorer un programme de surveillance par drone, et présenter une conception de programme complète.",
          quickCheck: [
            { objective: "O6", q: "Lequel est un exemple de situation de départ ?", options: ["L'objectif de la saison prochaine", "Les rendements ou les délais de détection de la saison passée, notés avant de commencer", "Le prix du drone", "La date de réunion du conseil"], answer: 1, why: "La situation de départ est la situation avant le programme, pour pouvoir comparer les résultats." },
            { objective: "O6", q: "Les agriculteurs disent que les cartes étaient justes mais que les conseils étaient difficiles à comprendre. Que faites-vous ?", options: ["Ne pas en parler dans le rapport", "Ne parler que des cartes justes", "Arrêter le programme", "Le dire honnêtement et changer la façon de donner les conseils la saison prochaine"], answer: 3, why: "Soyez honnête sur ce qui n'a pas marché, puis améliorez la conception pour la saison suivante." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Concevoir un programme de surveillance par drone",
        questions: [
          { objective: "O4", q: "Pourquoi beaucoup de projets de drones échouent-ils ?", options: ["Les drones sont trop petits", "Ils partent du drone au lieu d'un vrai problème", "Les agriculteurs n'aiment pas les cartes", "Les batteries sont trop grosses"], answer: 1, why: "Les programmes marchent quand ils règlent un problème qui compte pour les utilisateurs." },
          { objective: "O4", q: "Quel est le meilleur objectif de programme ?", options: ["Faire beaucoup voler les drones", "Utiliser la technologie", "Trouver les foyers de chenille légionnaire sur 200 fermes dans la semaine qui suit les premiers dégâts d'ici la fin des grandes pluies 2027", "Être innovant"], answer: 2, why: "Il a un chiffre, un délai et un résultat clairs." },
          { objective: "O5", q: "Votre programme va voler pour des agriculteurs qui paient. Que devez-vous vérifier ?", options: ["Si votre organisation a besoin d'un certificat d'exploitant et vos pilotes de licences", "Seulement la couleur du drone", "Seulement la météo", "Rien ; les agriculteurs sont d'accord"], answer: 0, why: "Le vol commercial demande en général un certificat d'exploitant et des pilotes titulaires d'une licence." },
          { objective: "O5", q: "Lequel est un coût de fonctionnement ?", options: ["L'achat du premier drone", "L'achat d'un ordinateur", "La formation initiale", "Le transport vers les fermes chaque semaine"], answer: 3, why: "Les coûts de fonctionnement reviennent tout au long du programme." },
          { objective: "O6", q: "Pourquoi relever une situation de départ ?", options: ["Pour remplir un formulaire", "Pour comparer les résultats avec la situation avant le programme", "Pour supprimer les anciennes données", "Pour choisir un drone"], answer: 1, why: "Sans point de départ, on ne peut pas montrer de changement." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones pour la surveillance agricole 5 : intégration des données, SIG et conception de programmes",
    questions: [
      { objective: "O1", q: "Sans système de données, un grand programme de drones risque :", options: ["Des fichiers perdus, mélangés ou écrasés", "De meilleures cartes", "Des vols plus rapides", "Des drones moins chers"], answer: 0, why: "Des milliers de fichiers demandent un système clair." },
      { objective: "O1", q: "Un registre des vols note :", options: ["Les prix des cultures", "La date, la ferme, le champ, le pilote, le drone, les fichiers et l'état", "Seulement la météo", "Les coordonnées bancaires des agriculteurs"], answer: 1, why: "Il suit chaque vol et ses données." },
      { objective: "O1", q: "Quelle est une bonne règle de dossiers ?", options: ["Des noms au hasard", "Le nom complet et le numéro de téléphone de l'agriculteur", "Programme / ID ferme / ID champ / Date", "Tout dans un seul dossier"], answer: 2, why: "Une structure régulière fondée sur des ID garde les données en ordre et privées." },
      { objective: "O1", q: "Dans la règle 3-2-1, le 1 veut dire :", options: ["Un drone", "Un agriculteur", "Un jour", "Une copie dans un autre lieu"], answer: 3, why: "Une copie hors site survit au vol, à l'incendie ou à une panne au bureau." },
      { objective: "O2", q: "Dans un SIG, les couches de base d'un programme comprennent en général :", options: ["Les limites des champs et les points des fermes", "Des fichiers de musique", "Seulement des photos de l'équipe", "Des factures"], answer: 0, why: "Tout le reste se place par-dessus les champs et les fermes." },
      { objective: "O2", q: "Les images Sentinel-2 font environ combien de mètres par pixel ?", options: ["0,01", "10", "1 000", "100 000"], answer: 1, why: "Les images Sentinel-2 gratuites font environ 10 m par pixel." },
      { objective: "O2", q: "Joindre un tableur à une couche de champs demande :", options: ["La même couleur", "Un drone", "Un identifiant commun, comme l'ID champ", "Une imprimante"], answer: 2, why: "L'ID relie chaque ligne à son champ." },
      { objective: "O2", q: "À quelle question un projet SIG avec jointure peut-il aider à répondre ?", options: ["Quel est le mot de passe de l'agriculteur ?", "De quelle couleur est le drone ?", "Qui a gagné le match de football ?", "Les champs qui ont reçu les conseils issus du drone ont-ils mieux produit ?"], answer: 3, why: "Relier les registres aux champs permet ce genre de comparaison." },
      { objective: "O3", q: "La loi nigériane sur la protection des données est supervisée par :", options: ["La Commission nigériane de protection des données (NDPC)", "La NCAA", "Le fabricant du drone", "Une coopérative"], answer: 0, why: "La NDPC a été créée par la loi nigériane de 2023 sur la protection des données." },
      { objective: "O3", q: "Un consentement valable veut dire que l'agriculteur :", options: ["N'a rien été dit", "Comprend ce que vous collectez, pourquoi, qui le voit, et peut refuser", "A signé sans lire", "A donné son code PIN"], answer: 1, why: "Le consentement doit être éclairé et libre." },
      { objective: "O3", q: "Un acheteur demande une liste des noms et rendements des agriculteurs. Vous devez :", options: ["L'envoyer tout de suite", "La publier", "Ne la partager qu'avec la permission des agriculteurs", "La vendre"], answer: 2, why: "Les données personnelles ne se partagent pas sans permission." },
      { objective: "O3", q: "Ne collecter que ce dont on a besoin s'appelle :", options: ["L'accumulation de données", "La sauvegarde", "Le recouvrement", "La minimisation des données"], answer: 3, why: "Moins de données veut dire moins de risque ; c'est un principe de la protection des données." },
      { objective: "O4", q: "Un programme doit partir :", options: ["D'un problème qui compte pour les utilisateurs et sur lequel ils peuvent agir", "Du drone le plus récent", "D'un logo", "D'un communiqué de presse"], answer: 0, why: "Les programmes qui partent du problème apportent de la valeur." },
      { objective: "O4", q: "De quoi les agriculteurs ont-ils le plus besoin de la part du programme ?", options: ["Les fichiers photo bruts", "Une carte et un conseil simple sur leur téléphone", "Un logiciel SIG", "La licence du pilote"], answer: 1, why: "Une information simple et utilisable aide les agriculteurs à agir." },
      { objective: "O5", q: "Là où l'électricité est peu fiable, prévoyez :", options: ["Pas de batteries", "De voler seulement la nuit", "Une charge solaire ou par véhicule", "Un vol par an"], answer: 2, why: "Des options de charge permettent à l'équipe de voler toute la journée." },
      { objective: "O5", q: "Regrouper les fermes par zone dans le calendrier aide à :", options: ["Consommer plus de carburant", "Rendre les cartes floues", "Éviter les licences", "Couvrir de nombreuses fermes en une journée"], answer: 3, why: "Moins de trajets, c'est plus de fermes par jour et un coût plus bas." },
      { objective: "O5", q: "Une façon de financer un service de drone de coopérative est :", options: ["Une petite redevance par hectare payée par argent mobile", "La gratuité pour toujours sans plan", "Vendre les données des agriculteurs", "Ne pas faire les réparations"], answer: 0, why: "Redevances, prélèvements, acheteurs ou subventions peuvent financer honnêtement le service." },
      { objective: "O5", q: "Pourquoi prévoir l'après-subvention ?", options: ["Les subventions ne finissent jamais", "Pour que le service continue quand la subvention s'arrête", "Pour dépenser plus vite", "Ce n'est pas nécessaire"], answer: 1, why: "Les programmes qui ne dépendent que de subventions s'arrêtent souvent." },
      { objective: "O6", q: "Laquelle est une mesure de réussite ?", options: ["Le nombre de photos prises par le drone", "La couleur du drone", "Les agriculteurs conseillés dans les trois jours après la détection", "La taille du bureau"], answer: 2, why: "Elle mesure le résultat qui compte pour les utilisateurs." },
      { objective: "O6", q: "Pour rendre compte, vous devez :", options: ["Cacher ce qui n'a pas marché", "Envoyer à tous le même rapport de 50 pages", "Rendre compte seulement au bailleur", "Être honnête et utiliser une forme utile à chaque utilisateur"], answer: 3, why: "Des comptes rendus honnêtes et adaptés créent la confiance et l'amélioration." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie de la conception et vérifiez-la de nouveau.",
    criteria: [
      {
        name: "Problème, objectif et utilisateurs",
        objective: "O4",
        notYet: "Part du drone, ou l'objectif n'a ni chiffre ni date.",
        meets: "Un vrai problème, un objectif avec un chiffre et une date, et chaque utilisateur avec ce qu'il reçoit.",
        exceeds: "Montre que les utilisateurs ont validé le problème, par exemple lors d'une réunion d'agriculteurs."
      },
      {
        name: "Plan de données",
        objective: "O1",
        notYet: "Pas de plan de stockage, de nommage ou de sauvegarde.",
        meets: "Structure de dossiers, ID ferme, registre des vols et sauvegardes 3-2-1.",
        exceeds: "Dit combien de temps les photos brutes sont gardées et qui vérifie les sauvegardes."
      },
      {
        name: "Usage du SIG et du satellite",
        objective: "O2",
        notYet: "Pas de couches SIG ni d'usage du satellite.",
        meets: "Les couches SIG sont listées, les registres reliés par ID champ, et les satellites servent à choisir où voler.",
        exceeds: "Nomme une question à laquelle les données jointes répondront, comme le rendement avec et sans conseil."
      },
      {
        name: "Consentement et protection des données",
        objective: "O3",
        notYet: "Pas de consentement ni de mesures de protection des données.",
        meets: "Consentement dans la langue de l'agriculteur, minimisation des données, stockage sûr et aucun partage sans autorisation, selon la bonne loi.",
        exceeds: "Vérifie si l'organisation doit s'enregistrer auprès de l'autorité de protection des données."
      },
      {
        name: "Équipe, calendrier et budget",
        objective: "O5",
        notYet: "Les licences, le calendrier ou la façon de payer manquent.",
        meets: "Équipe titulaire des licences, matériel, calendrier des vols de la saison, coûts ponctuels et de fonctionnement, et façon dont le service est payé.",
        exceeds: "Montre un plan pour l'après-subvention."
      },
      {
        name: "Mesures et compte rendu",
        objective: "O6",
        notYet: "Pas de mesures ni de situation de départ.",
        meets: "Quelques mesures liées à l'objectif, une situation de départ et un modèle de compte rendu pour chaque utilisateur.",
        exceeds: "Inclut l'avis des agriculteurs sur l'utilité des conseils et s'ils valent d'être payés."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille pour la conception du programme",
      "Les apprenants qui présentent leur conception de programme au conseil d'une coopérative, à un bureau de comté ou d'État, à un bailleur ou à un investisseur dans les 90 jours (enquête de suivi)",
      "Les programmes conçus dans le cours qui lancent une saison pilote avec le consentement écrit des agriculteurs",
      "Les apprenants qui passent au cours 6 du parcours drones"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur portable avec QGIS gratuit et un tableur",
      "Des cartes de drone, des limites de champs et des registres de fermes d'exemple, ou ceux de l'apprenant",
      "Des devis locaux pour les drones, le transport, les données et l'assurance, si possible",
      "Environ 60 minutes au total, en séances courtes, plus du temps pour écrire la conception de deux pages"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis travaillez une coopérative d'exemple en groupe avant que les apprenants rédigent leur propre conception.",
      "Utilisez des ID ferme, et non les vrais noms ou numéros des agriculteurs, dans tous les exemples en classe.",
      "Demandez aux apprenants de consulter le site de l'autorité de protection des données de leur pays pour les règles d'enregistrement.",
      "Encouragez les apprenants à tester leur objectif et leur budget avec une vraie coopérative ou un partenaire avant de terminer.",
      "Évaluez la conception du programme avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
