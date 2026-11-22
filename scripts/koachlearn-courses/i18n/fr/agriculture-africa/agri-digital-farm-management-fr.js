"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-digital-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations".

const KOBO = { name: "KoboToolbox (formulaires gratuits de collecte de données qui fonctionnent hors ligne)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Bureau du commissaire à la protection des données, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC, Commission de protection des données du Nigeria)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Data Protection Commission, Ghana (Commission de protection des données ; loi de 2012 sur la protection des données, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO : Le travail des enfants dans l'agriculture", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-fr",
  lang: "fr",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Gérer sa ferme avec les données et les applications mobiles",
  skills: "Choisir une application agricole ou un tableur partagé, Créer un registre de la ferme et un stock d'intrants, Payer les ouvriers par mobile money avec des traces, Protéger les données de la ferme et des ouvriers, Diriger un gérant à distance, Suivre chaque semaine un tableau de bord de cinq chiffres",
  outcome: "diriger votre ferme depuis votre téléphone : tenir un seul registre des parcelles, des animaux, des travaux, des ouvriers et du stock d'intrants, payer les ouvriers par mobile money avec une trace pour chaque paiement, recevoir de votre gérant un rapport quotidien que vous pouvez vérifier, et regarder cinq chiffres chaque semaine pour décider de la suite.",
  about: [
    "Ce cours s'adresse aux agriculteurs qui grandissent : vous avez des ouvriers, plusieurs parcelles ou un troupeau ou une bande de volailles, et vous vivez peut-être en ville pendant qu'un gérant s'occupe de la ferme. Il convient aux petits exploitants commerciaux, aux jeunes agripreneurs, aux propriétaires qui vivent à Nairobi, Lagos, Accra ou Dakar, et aux gérants qui leur rendent compte.",
    "Il va plus loin que la tenue de registres de base. Vous allez choisir une application de gestion agricole ou un tableur partagé, créer un registre des parcelles, des animaux, des activités et du stock d'intrants, payer et enregistrer les ouvriers par mobile money, protéger les données de la ferme et des ouvriers, mettre en place avec un gérant des rapports quotidiens que vous pouvez vérifier, et construire un tableau de bord hebdomadaire de cinq chiffres.",
    "Le cours ne recommande aucune application. Il vous montre les fonctions à chercher, pour que vous puissiez juger n'importe quelle application ou monter le même système dans un tableur gratuit. Les montants sont seulement des exemples. Chaque leçon se termine par une tâche sur votre propre ferme ; un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours. Si vous n'avez jamais tenu de registres agricoles, suivez d'abord \"Données et technologies agricoles\"."
  ],
  finalTask: "Construisez un tableau de bord hebdomadaire pour votre propre ferme (chiffres réels ou d'exemple) : cinq chiffres, chacun avec sa source dans votre registre, un objectif ou une plage normale, et l'action que vous prenez s'il sort de la plage. Puis écrivez sur une page la routine de rapports pour la personne qui gère la ferme au quotidien : ce que contient le rapport quotidien sur WhatsApp (photos, chiffres, problèmes), à quelle heure il arrive, le point hebdomadaire, comment vous le vérifiez (contrôles surprises, comptages du stock, relevés de mobile money) et qui peut voir quelles données.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits exploitants et agriculteurs commerciaux en croissance, jeunes agripreneurs, propriétaires qui vivent loin de leur ferme et gérants de ferme au Kenya, au Nigeria, au Ghana, au Sénégal, en Côte d'Ivoire et partout en Afrique. Beaucoup associent cultures et élevage (maïs, tomates, volailles, chèvres, porcs, tilapia) et emploient des ouvriers journaliers ou permanents.",
    startingPoint: "Ils utilisent chaque jour un smartphone pour les appels, WhatsApp et le mobile money. Certains notent dans un cahier ou un tableau simple. Peu ont un seul système qui relie parcelles, animaux, ouvriers, argent et stock, et beaucoup de propriétaires comptent sur des appels pour savoir ce qui se passe à la ferme.",
    gap: "Quand une ferme grandit, l'argent fuit par des journées de travail non notées, des intrants qui manquent, des animaux morts découverts trop tard et des décisions prises au hasard. Les apprenants ont besoin d'un système simple qui relie registres, paiements et rapports, et de l'habitude de regarder quelques chiffres chaque semaine, pour diriger à distance et repérer les problèmes tôt.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un téléphone Android bon marché ; un ordinateur aide mais n'est pas obligatoire",
      "Connexion : réseau faible dans beaucoup de fermes, donc les outils doivent marcher hors ligne ou par WhatsApp",
      "Argent : d'abord les outils gratuits ; aucune application n'est recommandée ; tous les montants sont des exemples",
      "Les lois sur la vie privée s'appliquent aux données des ouvriers (le Kenya, le Nigeria, le Ghana et d'autres pays ont des lois sur la protection des données)",
      "Aucun code PIN, mot de passe ou numéro de pièce d'identité dans les exercices"
    ],
    prerequisites: "Être à l'aise avec un smartphone, WhatsApp et le mobile money. Il est conseillé de suivre d'abord \"Données et technologies agricoles\" (registres de base et tableurs)."
  },
  // ---- ADDIE : Conception (objectifs) ----
  objectives: [
    { id: "O1", condition: "Avec la liste de ce que votre ferme doit suivre", action: "comparer des applications de gestion agricole ou un tableur partagé à une grille de fonctions et en choisir un", standard: "en notant au moins deux options et en écrivant la raison de votre choix" },
    { id: "O2", condition: "Avec l'outil que vous avez choisi", action: "créer un registre de la ferme avec les parcelles, les animaux, les activités et le stock d'intrants, avec des noms et des unités fixes", standard: "pour que chaque saisie puisse s'additionner par parcelle, groupe d'animaux ou intrant" },
    { id: "O3", condition: "Avec une semaine de travail d'ouvriers journaliers et permanents", action: "noter les jours et les tâches de chaque ouvrier et le payer par mobile money avec une trace qui correspond", standard: "pour que chaque paiement ait une date, un ouvrier, une tâche, un montant et un code de transaction" },
    { id: "O4", condition: "Quand un gérant ou un membre de la famille dirige la ferme en votre absence", action: "rédiger une routine de rapports quotidiens avec photos et messages WhatsApp, un point hebdomadaire et des contrôles surprises", standard: "en disant quoi rapporter, pour quand, et comment vous allez le vérifier" },
    { id: "O5", condition: "À partir du registre de votre ferme", action: "construire un tableau de bord hebdomadaire de cinq chiffres et l'action que chacun déclenche", standard: "mis à jour chaque semaine à partir des registres, pas de mémoire" },
    { id: "O6", condition: "Quand vous collectez des données sur votre ferme et vos ouvriers", action: "décider quoi collecter, qui peut le voir et comment le protéger", standard: "en ne collectant que le nécessaire et sans partager de code PIN, de mot de passe ni de numéro de pièce d'identité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Mettre en place le système de votre ferme",
      lessons: [
        {
          title: "Choisir une application agricole ou un tableur partagé",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir une application de gestion agricole ou un tableur partagé en le notant avec une grille de fonctions.",
          text: [
            "Une application de gestion agricole garde au même endroit sur votre téléphone vos parcelles, vos animaux, vos travaux, votre stock et votre argent. Il en existe beaucoup et elles changent souvent, donc ce cours n'en recommande aucune. Un tableur partagé gratuit (Google Sheets ou Microsoft Excel) peut faire le même travail s'il est bien préparé. Ce qui compte, c'est que vous et vos ouvriers l'utilisiez vraiment chaque jour.",
            "Partez de ce que vous devez suivre, puis notez chaque option. Les fonctions à chercher : marche hors ligne et se synchronise plus tard (beaucoup de fermes ont un réseau faible) ; parcelles et groupes d'animaux en fiches séparées ; une façon simple de noter les activités et les intrants ; un stock qui baisse quand on utilise les intrants ; des fiches pour les ouvriers et les paiements ; des photos ; plusieurs utilisateurs avec des droits différents (un ouvrier peut saisir des données sans voir la paie) ; l'export vers un tableur pour que vos données ne soient jamais bloquées ; votre langue ; et un prix et une politique de confidentialité clairs.",
            "Méfiez-vous des applications gratuites parce qu'elles vendent vos données, de celles qui demandent une connexion rapide ou de celles que vous ne pouvez pas quitter avec vos données. Demandez aux autres agriculteurs de votre zone ce qu'ils utilisent, essayez chaque application pendant deux semaines avec de vraies saisies, et vérifiez le prix après l'essai gratuit avant d'y mettre tous vos registres."
          ],
          steps: ["Faites la liste de ce que vous devez suivre : parcelles, animaux, travaux, ouvriers, stock, ventes.", "Choisissez deux ou trois options, dont un tableur partagé gratuit.", "Notez chacune avec la grille : hors ligne, utilisateurs et droits, stock, ouvriers, photos, export, langue, prix, confidentialité.", "Essayez la meilleure pendant deux semaines avec de vraies saisies.", "Écrivez votre choix et pourquoi."],
          words: [["Application de gestion agricole", "un programme sur téléphone ou sur internet pour noter et organiser les parcelles, les animaux, les travaux, le stock et l'argent d'une ferme."], ["Synchroniser", "quand une application envoie sur internet les données gardées sur le téléphone, dès qu'il y a du réseau."], ["Exporter", "sortir vos données d'une application, par exemple sous forme de fichier de tableur."]],
          slides: [
            { title: "Application ou tableur partagé ?", bullets: ["Les deux peuvent marcher", "Ce qui compte : vous et vos ouvriers l'utilisez chaque jour", "Aucune application n'est recommandée ici : jugez sur les fonctions"] },
            { title: "Les fonctions à chercher", bullets: ["Marche hors ligne, se synchronise plus tard", "Parcelles, animaux, activités, stock, ouvriers", "Plusieurs utilisateurs avec des droits différents", "Export vers un tableur"] },
            { title: "Signaux d'alerte", bullets: ["Gratuite parce qu'elle vend vos données", "Demande une connexion rapide", "Impossible de sortir vos données", "Prix pas clair après l'essai"] },
            { title: "Décider", bullets: ["Notez deux ou trois options", "Essayez-en une pendant deux semaines", "Écrivez votre choix et la raison"] }
          ],
          tryIt: "Écrivez la liste de ce que votre ferme doit suivre. Faites un tableau de notation avec les fonctions de la grille en lignes et deux ou trois options en colonnes (l'une peut être un tableur partagé gratuit). Notez chacune et écrivez votre choix et votre raison.",
          youCanNow: "juger n'importe quelle application agricole ou n'importe quel tableur sur ses fonctions et en choisir un avec une raison claire.",
          quickCheck: [
            { objective: "O1", q: "Votre ferme à Kakamega n'a souvent pas de réseau. Quelle fonction compte le plus ?", options: ["Des couleurs vives", "Marche hors ligne et se synchronise plus tard", "Un grand nombre de téléchargements", "Les appels vidéo"], answer: 1, why: "Si l'application ne peut pas enregistrer sans réseau, les ouvriers arrêteront de l'utiliser." },
            { objective: "O1", q: "Pourquoi vérifier qu'une application peut exporter vos données ?", options: ["Pour que vos registres ne soient jamais bloqués dans une seule application", "Pour rendre le téléphone plus rapide", "Parce que la loi oblige chaque agriculteur à exporter", "Pour avoir une réduction"], answer: 0, why: "L'export vous permet de passer vos registres dans un tableur ou une autre application à tout moment." }
          ]
        },
        {
          title: "Créer les parcelles, les animaux, les activités et le stock d'intrants",
          objectives: ["O2"],
          minutes: 6,
          goal: "Créer un registre de la ferme avec des noms et des unités fixes et une liste de stock d'intrants.",
          text: [
            "Le registre est la colonne vertébrale du système. Donnez à chaque parcelle un nom court fixe et sa taille (par exemple \"P1 Tomate 0,5 acre\"), et à chaque groupe d'animaux ou étang un nom et un effectif (\"Pondeuses Bâtiment A, 500 oiseaux\", \"Chèvres 24\", \"Étang 2 tilapia\"). Utilisez les mêmes noms dans tous les registres pour pouvoir additionner les coûts et la production par parcelle ou par groupe.",
            "Faites ensuite un journal des activités : date, parcelle ou groupe, activité (semis, désherbage, traitement, alimentation, vaccination par le vétérinaire, récolte, vente), quantité, unité, coût, qui l'a fait et une photo si utile. Fixez les unités : kilogrammes, litres, sacs de 50 kg, caisses, plateaux de 30 œufs. Des unités mélangées donnent des totaux faux.",
            "Ajoutez une liste de stock d'intrants : chaque intrant avec son unité, les entrées, ce qui est utilisé et ce qui reste. Quand un ouvrier note \"2 sacs de NPK utilisés sur P1\", le reste doit baisser de deux. Comptez le magasin et comparez avec la liste chaque semaine. Si le comptage et le registre ne correspondent pas, vous avez trouvé une fuite, une erreur de saisie ou un vol, et vous pouvez demander pourquoi la même semaine."
          ],
          steps: ["Nommez chaque parcelle avec sa taille, et chaque groupe d'animaux, étang ou bâtiment avec son effectif.", "Fixez l'unité de chaque produit : kg, litres, sacs de 50 kg, caisses, plateaux.", "Faites le journal des activités : date, parcelle ou groupe, activité, quantité, unité, coût, qui, photo.", "Faites la liste de stock : intrant, unité, entrées, utilisé, reste.", "Comptez le magasin chaque semaine et comparez avec la liste."],
          words: [["Registre", "la liste principale de vos parcelles, groupes d'animaux et intrants, à laquelle chaque saisie renvoie."], ["Unité", "ce dans quoi vous mesurez, comme les kilogrammes, les litres ou les sacs de 50 kg."], ["Comptage du stock", "compter vraiment ce qu'il y a dans le magasin et le comparer avec les registres."]],
          slides: [
            { title: "Des noms fixes", bullets: ["Parcelles avec taille : P1 Tomate 0,5 acre", "Groupes d'animaux avec effectif : Pondeuses Bâtiment A, 500", "Les mêmes noms dans chaque registre"] },
            { title: "Le journal des activités", bullets: ["Date, parcelle ou groupe, activité", "Quantité, unité, coût", "Qui l'a fait, photo"] },
            { title: "Stock d'intrants", bullets: ["Entrées, utilisé, reste pour chaque intrant", "Unités fixes : kg, litres, sacs de 50 kg"] },
            { title: "Comptage hebdomadaire", bullets: ["Comptez le magasin", "Comparez avec la liste", "Ça ne correspond pas ? Demandez pourquoi cette semaine"] }
          ],
          tryIt: "Dans l'outil choisi, créez le registre de votre ferme : chaque parcelle ou groupe d'animaux avec sa taille ou son effectif, un journal des activités avec au moins cinq vraies saisies de cette semaine, et une liste de stock d'au moins quatre intrants. Puis comptez un intrant dans votre magasin et comparez avec la liste.",
          youCanNow: "créer un registre de la ferme qui s'additionne par parcelle, groupe d'animaux et intrant, et vérifier votre stock avec lui.",
          quickCheck: [
            { objective: "O2", q: "Un ouvrier écrit \"2 sacs\" et un autre \"100 kg\" pour le même engrais. Quelle est la solution ?", options: ["Ne rien faire ; le total sera assez proche", "Effacer les deux saisies", "Fixer une unité pour cet intrant et l'utiliser à chaque fois", "Arrêter de noter l'engrais"], answer: 2, why: "Des unités fixes permettent d'additionner correctement les saisies." },
            { objective: "O2", q: "La liste de stock indique 6 sacs d'aliment pondeuses, mais le magasin en a 4. Que faites-vous ?", options: ["Remettre 6 sur la liste", "Attendre la fin de la saison", "Acheter 2 sacs de plus sans rien dire", "Demander cette semaine pourquoi ça ne correspond pas : erreur de saisie, fuite ou vol"], answer: 3, why: "Un comptage hebdomadaire repère les écarts quand ils sont encore petits et faciles à expliquer." }
          ]
        },
        {
          title: "Suivre le travail et payer les ouvriers par mobile money",
          objectives: ["O3"],
          minutes: 6,
          goal: "Noter les jours et les tâches de chaque ouvrier et le payer par mobile money avec une trace qui correspond.",
          text: [
            "La main-d'œuvre est souvent le plus gros coût d'une ferme qui grandit, et le moins bien noté. Tenez une liste des ouvriers (nom, numéro de téléphone pour le mobile money, salaire par jour ou par mois, date d'arrivée) et un journal quotidien de présence et de tâches : date, ouvrier, parcelle ou groupe, tâche, jours ou heures. Un chef d'équipe peut l'envoyer chaque soir en photo de la feuille de présence sur WhatsApp, ou remplir un formulaire partagé.",
            "Payez par mobile money quand c'est possible : M-Pesa au Kenya, MTN MoMo au Ghana, Orange Money ou Wave au Sénégal et en Côte d'Ivoire, ou un virement bancaire ou de mobile money au Nigeria. Chaque paiement a alors un code de transaction. Recopiez la date, l'ouvrier, le montant et le code de transaction dans votre registre des paiements, à côté des jours travaillés. En fin de semaine, les jours multipliés par le salaire journalier doivent donner ce que vous avez payé. Exemple seulement : 6 jours x KES 500 = KES 3 000, ou 5 jours x NGN 4 000 = NGN 20 000.",
            "Payez de façon juste et à temps, et vérifiez le salaire minimum légal et les règles du travail auprès du ministère du Travail de votre pays. Ne laissez pas les enfants faire des travaux agricoles dangereux comme pulvériser, manipuler des produits chimiques ou utiliser des machines. Dites aux ouvriers ce que vous notez et pourquoi, et confirmez chaque paiement avec eux, pour que la trace protège les deux côtés."
          ],
          steps: ["Tenez une liste des ouvriers : nom, numéro de mobile money, salaire, date d'arrivée.", "Notez la présence et les tâches chaque jour.", "Payez par mobile money et recopiez le code de transaction dans le registre des paiements.", "Chaque semaine, vérifiez : jours x salaire journalier = montant payé.", "Confirmez chaque paiement avec l'ouvrier."],
          words: [["Ouvrier journalier", "un ouvrier payé à la journée ou à la tâche, pas avec un contrat au mois."], ["Code de transaction", "le code unique du message de mobile money qui prouve qu'un paiement a eu lieu."], ["Paie", "le registre de qui est payé, combien et quand."]],
          slides: [
            { title: "Main-d'œuvre : gros coût, peu de traces", bullets: ["Liste des ouvriers : nom, numéro, salaire", "Journal quotidien : date, ouvrier, parcelle, tâche, jours"] },
            { title: "Payer en laissant une trace", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Recopiez le code de transaction dans le registre", "Exemple seulement : 6 jours x KES 500 = KES 3 000"] },
            { title: "Vérification hebdomadaire", bullets: ["Jours x salaire journalier = montant payé", "Confirmez avec chaque ouvrier"] },
            { title: "Payer de façon juste et légale", bullets: ["Vérifiez le salaire minimum auprès du ministère du Travail", "Pas de travaux dangereux pour les enfants", "Dites aux ouvriers ce que vous notez"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Faites une liste des ouvriers et un journal de présence et de tâches sur une semaine pour votre ferme (réel ou d'exemple). Remplissez un registre des paiements avec date, ouvrier, jours, salaire journalier, montant et une colonne pour le code de transaction, et vérifiez que les jours multipliés par le salaire donnent le montant pour chaque ouvrier.",
          youCanNow: "suivre qui a travaillé, sur quoi et combien de temps, et payer les ouvriers par mobile money avec une trace qui correspond.",
          quickCheck: [
            { objective: "O3", q: "Quelle fiche de paiement est complète ?", options: ["\"Juma payé\"", "\"12 mai, Juma, 6 jours désherbage P2, KES 3 000 (exemple), code QX7...\"", "\"Ouvriers payés cette semaine\"", "\"KES 3 000\""], answer: 1, why: "Elle a la date, l'ouvrier, la tâche, les jours, le montant et le code de transaction." },
            { objective: "O3", q: "Une ouvrière dit qu'elle a travaillé 6 jours ; le journal en indique 5. Qu'est-ce qui aide le plus ?", options: ["Le journal quotidien de présence et une discussion avec elle et le chef d'équipe", "Ne rien payer avant le mois prochain", "Prendre le chiffre le plus haut sans demander", "Effacer le journal"], answer: 0, why: "Un journal quotidien donne aux deux côtés une trace à vérifier ensemble." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Mettre en place le système de votre ferme",
        questions: [
          { objective: "O1", q: "Lequel est un signal d'alerte quand on choisit une application agricole ?", options: ["Elle marche hors ligne", "Vous pouvez exporter vos données", "Elle est gratuite parce qu'elle vend vos données", "Les ouvriers peuvent saisir des données sans voir la paie"], answer: 2, why: "Vous perdez le contrôle des données de votre ferme et de vos ouvriers." },
          { objective: "O1", q: "Avant de mettre tous vos registres dans une application, vous devez :", options: ["L'essayer deux semaines avec de vraies saisies et vérifier le prix après l'essai", "Payer une année entière d'un coup", "Choisir celle qui a le plus de publicités", "Demander à l'application de choisir pour vous"], answer: 0, why: "Un vrai essai montre si vous et vos ouvriers allez l'utiliser, et combien elle coûtera." },
          { objective: "O2", q: "Pourquoi donner à chaque parcelle un nom fixe comme \"P1 Tomate 0,5 acre\" ?", options: ["Sinon l'application ne s'ouvre pas", "Pour que les coûts et la production s'additionnent par parcelle", "Les acheteurs le demandent", "C'est la loi"], answer: 1, why: "Le même nom dans chaque saisie vous permet de faire le total de chaque parcelle." },
          { objective: "O2", q: "Votre liste de stock indique 10 sacs de NPK. Le comptage du magasin donne 7. Cela montre :", options: ["Que la liste de stock a toujours raison", "Rien d'important", "Qu'il vous faut une nouvelle application", "Une erreur, une fuite ou un vol à examiner cette semaine"], answer: 3, why: "Un écart est un signal pour demander pourquoi tant qu'il est petit." },
          { objective: "O3", q: "Pourquoi payer les ouvriers par mobile money quand c'est possible ?", options: ["C'est toujours gratuit", "Les ouvriers préfèrent le liquide", "Chaque paiement a un code de transaction que vous pouvez noter", "Cela évite de payer le salaire minimum"], answer: 2, why: "Le code de transaction est une preuve de paiement pour vous et pour l'ouvrier." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Diriger avec les données, de près ou de loin",
      lessons: [
        {
          title: "Protéger les données de la ferme et des ouvriers",
          objectives: ["O6"],
          minutes: 5,
          goal: "Décider quelles données collecter, qui peut les voir et comment les protéger.",
          text: [
            "Votre système contient maintenant des informations précieuses et privées : les noms et numéros des ouvriers, leur paie, vos ventes et votre stock. Le Kenya (Office of the Data Protection Commissioner, le bureau chargé de la protection des données), le Nigeria (Nigeria Data Protection Commission) et le Ghana (Data Protection Commission) ont des lois sur la protection des données et une autorité de contrôle, comme beaucoup d'autres pays africains. Les grandes fermes et entreprises peuvent devoir s'enregistrer ; consultez le site de votre autorité.",
            "Collectez seulement ce dont vous avez besoin. Il vous faut le nom de l'ouvrier, son numéro de mobile money, ses jours et sa paie. Vous n'avez pas besoin de son numéro de pièce d'identité dans un tableur partagé, ni d'une photo de sa pièce dans un groupe WhatsApp. Dites aux ouvriers ce que vous gardez et pourquoi. Ne mettez jamais de code PIN de mobile money, de mot de passe ou de numéro de pièce d'identité dans le tableur, l'application ou un outil d'IA.",
            "Donnez les droits selon le rôle : les ouvriers saisissent les activités ; le gérant voit le stock et la présence ; seuls vous (et votre comptable) voyez la paie et les ventes. Utilisez un verrouillage du téléphone et la connexion en deux étapes, retirez l'accès le jour même à quiconque quitte la ferme, et gardez une sauvegarde. Si vous partagez des données avec un acheteur, un prêteur ou un projet, partagez seulement ce dont il a besoin et demandez comment il les utilisera."
          ],
          steps: ["Faites la liste des données que vous gardez et barrez ce dont vous n'avez pas besoin.", "Dites aux ouvriers ce que vous notez et pourquoi.", "Donnez les droits selon le rôle : ouvrier, gérant, propriétaire.", "Verrouillez les téléphones, activez la connexion en deux étapes, gardez une sauvegarde.", "Retirez l'accès à toute personne qui part, le jour même."],
          words: [["Données personnelles", "des informations sur une personne, comme son nom, son numéro de téléphone ou sa paie."], ["Accès", "qui peut voir ou modifier quelles données."], ["Connexion en deux étapes", "une deuxième vérification, comme un code envoyé sur votre téléphone, quand vous vous connectez."]],
          slides: [
            { title: "Vous gardez des données privées", bullets: ["Noms, numéros et paie des ouvriers", "Vos ventes et votre stock", "Les lois sur la protection des données s'appliquent"] },
            { title: "Collectez seulement le nécessaire", bullets: ["Nom, numéro de mobile money, jours, paie", "Pas de photos de pièces d'identité dans les groupes WhatsApp", "Jamais de codes PIN ni de mots de passe"] },
            { title: "Accès selon le rôle", bullets: ["Ouvriers : saisissent les activités", "Gérant : stock et présence", "Propriétaire : paie et ventes"] },
            { title: "Protégez-les", bullets: ["Verrouillage, connexion en deux étapes, sauvegarde", "Retirez l'accès aux partants le jour même", "Partagez seulement ce dont les autres ont besoin"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Faites la liste de tous les types de données de votre système. Barrez ce dont vous n'avez pas besoin. Écrivez un tableau des accès : pour chaque rôle (ouvrier, gérant, propriétaire, comptable), ce qu'il peut voir et ce qu'il peut saisir.",
          youCanNow: "collecter seulement les données dont votre ferme a besoin et contrôler qui peut les voir.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qui ne doit PAS aller dans le tableur partagé de la ferme ?", options: ["Les noms des ouvriers", "Les jours travaillés", "Les noms des parcelles", "Les codes PIN de mobile money des ouvriers"], answer: 3, why: "Les codes PIN sont secrets ; personne d'autre ne doit jamais les avoir." },
            { objective: "O6", q: "Votre gérant quitte la ferme. Quand retirez-vous son accès au tableur et à l'application de la ferme ?", options: ["À la fin de la saison", "Le jour même", "Seulement s'il le demande", "Jamais ; il reviendra peut-être"], answer: 1, why: "Retirer l'accès le jour même protège vos données et celles de vos ouvriers." }
          ]
        },
        {
          title: "Diriger la ferme à distance",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rédiger une routine de rapports quotidiens que vous pouvez vérifier.",
          text: [
            "Beaucoup de propriétaires dirigent leur ferme depuis la ville par l'intermédiaire d'un gérant ou d'un parent. Ça marche quand les rapports sont une routine, pas quand vous appelez au hasard pour demander \"Tout va bien ?\". Convenez d'un rapport quotidien sur WhatsApp à heure fixe, par exemple 18 h : ce qui a été fait dans chaque parcelle ou bâtiment, des chiffres (œufs ramassés, oiseaux morts, aliment utilisé, litres de lait, caisses vendues, ouvriers présents), les problèmes, et trois photos des mêmes endroits chaque jour (la culture, les animaux, le magasin).",
            "Faites un court point hebdomadaire par téléphone ou en vidéo à heure fixe : passez en revue les chiffres de la semaine, le comptage du stock et le plan de la semaine suivante. Décidez ensemble et écrivez les décisions dans le groupe. Un bon gérant doit aussi être payé et pouvoir prendre seul les petites décisions.",
            "Faites confiance, mais vérifiez. Comparez les rapports avec des choses difficiles à truquer : les relevés de mobile money, les reçus des acheteurs, le comptage hebdomadaire du stock et des photos avec la date et le lieu. Passez de temps en temps sans prévenir longtemps à l'avance, et demandez parfois un deuxième avis à un voisin de confiance, au vétérinaire ou à l'agent de vulgarisation. Quand un chiffre paraît bizarre, demandez calmement et tôt. La plupart des écarts sont des erreurs, et des vérifications régulières aident les gens honnêtes à le rester."
          ],
          steps: ["Convenez du rapport quotidien : heure, chiffres, problèmes, trois photos fixes.", "Fixez un point hebdomadaire à heure fixe.", "Écrivez les décisions dans le groupe.", "Vérifiez avec les relevés, les reçus, les comptages du stock et les photos datées.", "Passez parfois sans prévenir longtemps à l'avance ; demandez tôt et calmement pour les chiffres bizarres."],
          words: [["Propriétaire absent", "un propriétaire de ferme qui vit ailleurs et dirige la ferme par l'intermédiaire de quelqu'un d'autre."], ["Vérifier", "contrôler qu'un rapport est vrai grâce à une deuxième source."], ["Point régulier", "une réunion courte et régulière pour revoir les chiffres et les plans."]],
          slides: [
            { title: "La routine vaut mieux que les appels au hasard", bullets: ["Rapport quotidien sur WhatsApp à heure fixe", "Chiffres, problèmes, trois photos fixes"] },
            { title: "Point hebdomadaire", bullets: ["À la même heure chaque semaine", "Chiffres, comptage du stock, plan de la semaine suivante", "Écrivez les décisions dans le groupe"] },
            { title: "Faire confiance, mais vérifier", bullets: ["Relevés de mobile money et reçus", "Comptage hebdomadaire du stock, photos datées", "Visites et deuxième avis de confiance"] },
            { title: "Quand un chiffre paraît bizarre", bullets: ["Demandez tôt et calmement", "La plupart des écarts sont des erreurs", "Des contrôles réguliers gardent tout le monde honnête"] }
          ],
          tryIt: "Écrivez le modèle de rapport quotidien que votre gérant vous enverra (les chiffres, la ligne des problèmes et les trois endroits à photographier). Puis notez trois façons de vérifier les rapports, et le jour et l'heure de votre point hebdomadaire.",
          youCanNow: "mettre en place un rapport quotidien et un point hebdomadaire avec un gérant et vérifier ce qu'il vous dit.",
          quickCheck: [
            { objective: "O4", q: "Quel rapport quotidien d'un gérant de volailles est le plus utile ?", options: ["\"Tout va bien.\"", "Une note vocale à n'importe quelle heure", "\"18 h : 412 œufs, 2 oiseaux morts, 3 sacs d'aliment utilisés, 4 ouvriers, photos du Bâtiment A, des oiseaux et du magasin\"", "Seulement un appel par semaine"], answer: 2, why: "Des chiffres fixes et des photos à heure fixe se comparent d'un jour à l'autre." },
            { objective: "O4", q: "Quelle est la meilleure façon de vérifier les ventes d'œufs rapportées ?", options: ["Les comparer avec les relevés de mobile money et les reçus des acheteurs", "Demander au gérant s'il est sûr", "Compter les œufs sur la photo WhatsApp", "Lui faire confiance parce qu'il est de la famille"], answer: 0, why: "Les paiements et les reçus sont une deuxième source difficile à truquer." }
          ]
        },
        {
          title: "Votre tableau de bord hebdomadaire : cinq chiffres à suivre",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Construire un tableau de bord hebdomadaire de cinq chiffres, chacun avec une plage normale et une action.",
          text: [
            "Un tableau de bord est une page courte avec les quelques chiffres qui vous disent si la ferme est sur la bonne voie. Cinq suffisent pour les lire en deux minutes chaque semaine. Choisissez des chiffres qui sortent directement de votre registre, pour que personne n'ait à s'en souvenir.",
            "De bons choix pour la plupart des fermes : (1) l'argent entré et l'argent sorti cette semaine ; (2) la production, comme les kg récoltés, les œufs par jour, les litres de lait ou la croissance des poissons ; (3) les pertes, comme les oiseaux morts, les animaux malades ou les caisses refusées ; (4) le stock d'intrants restant par rapport aux besoins des deux semaines suivantes ; (5) les jours ou le coût de main-d'œuvre par parcelle ou groupe. Une ferme de pondeuses au Ghana peut suivre les œufs par jour, les oiseaux morts, l'aliment utilisé, l'argent des ventes d'œufs et le stock d'aliment. Un producteur de tomates au Sénégal peut suivre les caisses récoltées, les caisses refusées, les jours de travail, l'argent des ventes en XOF et le stock de pesticides et d'engrais.",
            "Pour chaque chiffre, écrivez une plage normale et une action. Exemple : \"Plus de 3 oiseaux morts par jour : appeler le vétérinaire le jour même.\" \"Aliment pour moins de 10 jours : commander de l'aliment.\" Mettez les cinq chiffres dans un petit tableau avec une colonne par semaine, pour voir la tendance. Revoyez-le au point hebdomadaire, et changez un chiffre s'il ne mène jamais à une décision."
          ],
          steps: ["Choisissez cinq chiffres qui sortent de votre registre.", "Écrivez une plage normale ou un objectif pour chacun.", "Écrivez l'action si un chiffre sort de la plage.", "Faites un tableau avec une colonne par semaine.", "Revoyez-le au point hebdomadaire et agissez."],
          words: [["Tableau de bord", "un court résumé des chiffres clés qui montrent comment va la ferme."], ["Tendance", "le sens dans lequel un chiffre évolue sur plusieurs semaines."], ["Plage normale", "les valeurs que vous attendez quand tout va bien."]],
          slides: [
            { title: "Cinq chiffres, deux minutes", bullets: ["Directement tirés de votre registre", "Lus chaque semaine"] },
            { title: "De bons choix", bullets: ["Argent entré et sorti", "Production : kg, œufs, litres", "Pertes, stock restant, coût de main-d'œuvre"] },
            { title: "Plage et action", bullets: ["Oiseaux morts au-dessus de la normale : appelez le vétérinaire", "Aliment pour moins de 10 jours : commandez de l'aliment"] },
            { title: "Suivre la tendance", bullets: ["Une colonne par semaine", "Revoyez-le au point hebdomadaire", "Retirez les chiffres qui ne mènent jamais à une action"] }
          ],
          tryIt: "Tâche finale : construisez le tableau de bord hebdomadaire de votre ferme avec cinq chiffres, chacun avec sa source dans votre registre, une plage normale et l'action que vous prenez s'il sort de la plage, et remplissez au moins deux semaines. Puis écrivez sur une page votre routine de rapports : le rapport quotidien, le point hebdomadaire, comment vous vérifiez et qui voit quelles données.",
          youCanNow: "diriger votre ferme avec un tableau de bord hebdomadaire de cinq chiffres et une routine de rapports que vous pouvez vérifier.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi les chiffres du tableau de bord doivent-ils venir directement du registre ?", options: ["Pour faire plus professionnel", "Pour que personne n'ait à s'en souvenir ou à les deviner", "Parce que les applications l'exigent", "Pour que les ouvriers ne les voient pas"], answer: 1, why: "Les chiffres tirés des registres sont fiables ; ceux de mémoire ne le sont pas." },
            { objective: "O5", q: "Votre tableau de bord dit \"aliment pour moins de 10 jours : commander de l'aliment\". Il en reste pour 6 jours. Que faire ?", options: ["Attendre le bilan mensuel", "Retirer ce chiffre du tableau de bord", "Demander aux ouvriers de donner moins d'aliment", "Commander de l'aliment cette semaine"], answer: 3, why: "Chaque chiffre a une action ; quand il sort de la plage, vous agissez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Diriger avec les données, de près ou de loin",
        questions: [
          { objective: "O6", q: "Qui doit voir la paie des ouvriers dans le système de la ferme ?", options: ["Tous les ouvriers", "Tout le monde dans le groupe WhatsApp de la ferme", "Le propriétaire et, si besoin, le comptable", "Les acheteurs"], answer: 2, why: "La paie est privée ; les droits selon le rôle la protègent." },
          { objective: "O4", q: "Qu'est-ce qui rend un rapport quotidien de la ferme facile à vérifier ?", options: ["Des chiffres fixes et les mêmes endroits photographiés à heure fixe", "De longues notes vocales", "Appeler quand vous y pensez", "Ne signaler que les problèmes"], answer: 0, why: "Le même contenu chaque jour vous permet de comparer et de repérer les changements." },
          { objective: "O4", q: "Les ventes rapportées par un gérant sont plus basses que les reçus de l'acheteur. Que faites-vous d'abord ?", options: ["Le renvoyer tout de suite", "Ne rien faire", "Le publier dans le groupe des ouvriers", "Demander calmement et tôt, et comparer les registres ensemble"], answer: 3, why: "La plupart des écarts sont des erreurs ; demander tôt avec les registres permet de savoir ce qui s'est passé." },
          { objective: "O5", q: "Quel est un bon chiffre de tableau de bord pour une ferme laitière ?", options: ["La couleur de l'étable", "Les litres de lait par jour", "Le nombre de messages WhatsApp", "La vache préférée du gérant"], answer: 1, why: "Les chiffres de production, comme les litres par jour, montrent si la ferme est sur la bonne voie." },
          { objective: "O5", q: "Un chiffre du tableau de bord ne mène jamais à aucune décision. Vous devez :", options: ["Le remplacer par un chiffre qui en amène", "Le garder pour toujours", "En ajouter cinq autres du même genre", "Cacher le tableau de bord"], answer: 0, why: "Un tableau de bord sert à décider ; retirez les chiffres qui n'aident pas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gérer sa ferme avec les données et les applications mobiles",
    questions: [
      { objective: "O1", q: "Quel est le test le plus important pour une application agricole ?", options: ["Elle a le plus de fonctions", "C'est la plus chère", "On en a fait la publicité à la radio", "Vous et vos ouvriers l'utilisez chaque jour"], answer: 3, why: "Un outil que personne n'utilise ne vous donne aucune donnée." },
      { objective: "O1", q: "Quelle fonction permet à un ouvrier de noter son travail sans voir la paie ?", options: ["Plusieurs utilisateurs avec des droits différents", "Le mode sombre", "Les appels vidéo", "Des photos illimitées"], answer: 0, why: "Les droits selon le rôle gardent privées les données privées." },
      { objective: "O1", q: "Un tableur partagé gratuit peut-il remplacer une application agricole ?", options: ["Non, jamais", "Oui, s'il est bien préparé et utilisé chaque jour", "Seulement pour les très grandes fermes", "Seulement s'il est imprimé"], answer: 1, why: "Un tableur partagé bien préparé peut suivre les parcelles, les travaux, le stock et la paie." },
      { objective: "O2", q: "Quel est un bon nom de parcelle dans un registre ?", options: ["\"Celle près de la route\"", "\"Tomates\"", "\"P1 Tomate 0,5 acre\"", "Un nom différent chaque semaine"], answer: 2, why: "Un nom court fixe avec la taille permet aux saisies de s'additionner." },
      { objective: "O2", q: "Pourquoi fixer des unités comme \"sacs de 50 kg\" pour chaque intrant ?", options: ["Pour que les totaux et le stock restant soient justes", "Parce que les fournisseurs l'exigent", "Pour que les ouvriers écrivent moins", "Ça n'a pas d'importance"], answer: 0, why: "Des unités mélangées donnent des totaux faux." },
      { objective: "O2", q: "Quand un ouvrier note \"2 sacs de NPK utilisés sur P1\", la liste de stock doit :", options: ["Rester la même", "Augmenter de deux", "Être effacée", "Baisser de deux"], answer: 3, why: "Stock restant = entrées moins utilisé." },
      { objective: "O2", q: "Tous les combien devez-vous compter le magasin d'intrants et le comparer à la liste ?", options: ["Une fois par an", "Seulement après un vol", "Chaque semaine", "Jamais"], answer: 2, why: "Les comptages hebdomadaires repèrent les écarts tôt." },
      { objective: "O3", q: "Qu'est-ce qui relie un paiement par mobile money à la fiche d'un ouvrier ?", options: ["Le code de transaction", "La couleur du téléphone", "La photo de la pièce d'identité de l'ouvrier sur WhatsApp", "La météo"], answer: 0, why: "Le code prouve le paiement et le relie à la fiche." },
      { objective: "O3", q: "Un ouvrier a fait 5 jours à un salaire d'exemple de NGN 4 000 par jour. Le registre doit indiquer :", options: ["NGN 4 000", "NGN 20 000", "NGN 9 000", "NGN 45 000"], answer: 1, why: "5 x 4 000 = 20 000 ; les jours multipliés par le salaire doivent égaler le montant payé." },
      { objective: "O3", q: "Où vérifiez-vous le salaire minimum légal ?", options: ["Dans un groupe WhatsApp", "Auprès du vendeur d'intrants", "Seulement auprès d'un assistant d'IA", "Auprès du ministère du Travail de votre pays"], answer: 3, why: "Les règles de salaire viennent de l'autorité officielle du travail et changent avec le temps." },
      { objective: "O6", q: "De quelles données une ferme a-t-elle besoin sur un ouvrier journalier ?", options: ["Nom, numéro de mobile money, jours et paie", "Son code PIN", "Une photo de sa pièce d'identité dans le groupe", "Le mot de passe de sa banque"], answer: 0, why: "Collectez seulement ce dont vous avez besoin." },
      { objective: "O6", q: "Quel bureau contrôle les données personnelles au Kenya ?", options: ["Le service météorologique du Kenya", "Le Pest Control Products Board (PCPB, office des produits phytosanitaires)", "L'Office of the Data Protection Commissioner (ODPC)", "KALRO"], answer: 2, why: "L'ODPC est l'autorité de protection des données du Kenya." },
      { objective: "O6", q: "Un acheteur demande les registres de votre ferme. Vous devez :", options: ["Tout envoyer, y compris la paie", "Partager seulement ce dont il a besoin et demander comment il les utilisera", "Refuser de lui vendre", "Envoyer le mot de passe de votre téléphone"], answer: 1, why: "Partagez le minimum et sachez comment ce sera utilisé." },
      { objective: "O4", q: "Que doit contenir un rapport quotidien de la ferme ?", options: ["Seulement les bonnes nouvelles", "De longues histoires", "Rien ; les rapports ne servent à rien", "Des chiffres, les problèmes et des photos des mêmes endroits"], answer: 3, why: "Un contenu fixe vous permet de comparer d'un jour à l'autre." },
      { objective: "O4", q: "Qu'est-ce qui est le plus difficile à truquer quand vous vérifiez un rapport ?", options: ["Un relevé de mobile money", "Une note vocale", "Une promesse", "Un message qui dit \"tout va bien\""], answer: 0, why: "Les relevés et les reçus sont des traces indépendantes." },
      { objective: "O4", q: "À quoi sert le point hebdomadaire ?", options: ["À crier sur le gérant", "À revoir ensemble les chiffres, le stock et le plan de la semaine suivante", "À remplacer tous les registres", "À payer les fournisseurs"], answer: 1, why: "Il transforme les chiffres en décisions." },
      { objective: "O5", q: "Combien de chiffres ce cours propose-t-il pour un tableau de bord hebdomadaire ?", options: ["Un", "Vingt", "Cinq", "Cinquante"], answer: 2, why: "Cinq chiffres se lisent et mènent à l'action en deux minutes." },
      { objective: "O5", q: "Quel est un chiffre de pertes pour une ferme de pondeuses ?", options: ["Les œufs vendus", "L'aliment livré", "Les ouvriers présents", "Les oiseaux morts cette semaine"], answer: 3, why: "Les pertes, comme les oiseaux morts, vous alertent tôt." },
      { objective: "O5", q: "\"Plus de 3 oiseaux morts par jour : appeler le vétérinaire le jour même\" est un exemple de :", options: ["Une plage normale avec une action", "Une règle de protection des données", "Un code de mobile money", "Un comptage du stock"], answer: 0, why: "Chaque chiffre du tableau de bord a une plage et l'action que vous prenez." },
      { objective: "O5", q: "Pourquoi mettre une colonne par semaine dans le tableau de bord ?", options: ["Pour remplir la page", "Pour voir la tendance dans le temps", "Parce que les applications l'exigent", "Pour cacher les mauvaises semaines"], answer: 1, why: "Les tendances montrent les problèmes avant qu'ils ne grossissent." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Cinq chiffres utiles", objective: "O5", notYet: "Moins de cinq chiffres, ou des chiffres qui ne mènent à aucune décision.", meets: "Cinq chiffres qui couvrent l'argent, la production, les pertes, le stock et la main-d'œuvre, chacun avec une plage normale et une action.", exceeds: "Au moins deux semaines remplies, et une décision déjà prise grâce à un chiffre." },
      { name: "Les chiffres viennent des registres", objective: "O2", notYet: "Les chiffres sont devinés ou de mémoire.", meets: "Chaque chiffre indique sa source dans le registre (journal des activités, liste de stock, registre des paiements).", exceeds: "Le registre utilise des noms et des unités fixes, et le comptage du stock correspond à la liste." },
      { name: "Main-d'œuvre et paie notées", objective: "O3", notYet: "La main-d'œuvre manque ou est payée sans trace.", meets: "Les jours de travail viennent du journal de présence et les paiements ont des codes de transaction.", exceeds: "Jours x salaire journalier est comparé aux paiements chaque semaine." },
      { name: "Routine de rapports", objective: "O4", notYet: "Pas de rapport fixe, ou seulement \"appeler en cas de besoin\".", meets: "Le contenu et l'heure du rapport quotidien, le point hebdomadaire et au moins deux façons de vérifier sont écrits.", exceeds: "Comprend des visites sans prévenir ou un deuxième avis de confiance, et la façon de soulever les chiffres bizarres." },
      { name: "Données protégées", objective: "O6", notYet: "Les codes PIN, les numéros de pièce d'identité ou la paie sont visibles par tous.", meets: "Seules les données nécessaires sont collectées, et l'accès est donné selon le rôle.", exceeds: "Comprend une sauvegarde, la connexion en deux étapes et le retrait de l'accès des partants le jour même." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui suivent encore leur tableau de bord hebdomadaire 30 jours plus tard (enquête de suivi)",
      "Apprenants qui ont trouvé et corrigé un écart de stock, de main-d'œuvre ou de ventes dans les 60 jours",
      "Part des paiements aux ouvriers faits avec un code de transaction noté",
      "Groupements d'agriculteurs ou programmes qui signalent moins de pertes ou de litiges sur la paie après le cours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un smartphone avec WhatsApp et le mobile money",
      "Une application de tableur gratuite (Google Sheets ou Microsoft Excel) ou une application agricole que l'apprenant essaie",
      "Les informations de la ferme de l'apprenant, ou les chiffres d'exemple des leçons",
      "Papier et stylo pour le tableau de notation et le tableau des accès",
      "Environ 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Fonctionne bien avec les groupements d'agriculteurs, les programmes de jeunes agripreneurs et les associations de propriétaires qui vivent loin de leur ferme ; un chapitre par séance.",
      "Ne recommandez et ne vendez aucune application pendant la séance ; laissez les apprenants noter les options avec la grille.",
      "Ne demandez jamais aux apprenants de montrer en groupe de vrais codes PIN, mots de passe, numéros de pièce d'identité ou la paie d'autres personnes.",
      "Quand c'est possible, mettez les propriétaires avec leurs gérants pour la tâche de la leçon 5, pour que la routine soit acceptée par les deux.",
      "Rappelez aux apprenants que les règles sur les salaires, le travail et la protection des données varient selon les pays et changent ; vérifiez les sources officielles.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
