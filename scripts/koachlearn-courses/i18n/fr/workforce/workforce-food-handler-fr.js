"use strict";

// Koach Learn course (French translation of workforce/workforce-food-handler.js). See scripts/koachlearn-courses/README.md, "Translations".
// Every °F figure is kept exactly as in the English course; °C is added in brackets, rounded to the nearest degree.

module.exports = {
  id: "workforce-food-handler-fr",
  lang: "fr",
  translationOf: "workforce-food-handler",
  category: "Workforce Development",
  name: "Manipulateur d'aliments : préparation à l'examen ServSafe",
  skills: "Se laver les mains correctement, Prévenir la contamination croisée, Garder les aliments hors de la zone de température dangereuse, Cuire aux bonnes températures, Gérer les allergènes, Nettoyer et désinfecter",
  outcome: "manipuler les aliments en sécurité pendant un service en restaurant ou en restauration collective : vous laver les mains correctement, prévenir la contamination croisée, garder les aliments hors de la zone de température dangereuse, cuire et maintenir les aliments aux bonnes températures, protéger les clients allergiques, nettoyer et désinfecter un plan de travail, et être prêt à passer un examen de manipulateur d'aliments.",
  about: [
    "Ce cours s'adresse à toute personne qui travaille avec les aliments ou qui veut le faire : équipes de restaurants et de restauration rapide, personnel de cantine et de cuisine scolaire, traiteurs, employés de food trucks, de boulangeries et de charcuteries-traiteurs, et personnes qui préparent une carte de manipulateur d'aliments (food handler card) ou un examen ServSafe (un examen américain connu de sécurité alimentaire).",
    "Vous apprendrez les compétences de base en sécurité alimentaire que couvre tout examen de manipulateur d'aliments : le lavage des mains et l'hygiène personnelle, la contamination croisée, le contrôle du temps et de la température, les températures de cuisson, les allergènes, et la différence entre nettoyer et désinfecter. Les questions d'entraînement sont les nôtres, écrites pour vous aider à raisonner comme à l'examen ; elles ne sont copiées d'aucun vrai examen.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les règles sur la carte de manipulateur d'aliments sont fixées par les États et les comtés américains, et les codes alimentaires sont mis à jour avec le temps, donc vérifiez auprès du service de santé local les règles là où vous travaillez. Les températures sont données en degrés Fahrenheit (°F), comme aux États-Unis, avec les degrés Celsius (°C) entre parenthèses."
  ],
  finalTask: "Écrivez une \"Liste de contrôle pour un service sûr\" d'une page pour une cuisine réelle ou d'entraînement : quand et comment se laver les mains, comment ranger les aliments crus et prêts à manger pour éviter la contamination croisée, les températures de maintien au froid, de maintien au chaud et de cuisson que vous vérifierez au thermomètre, les étapes de refroidissement, ce que vous ferez quand un client dit qu'il a une allergie, les étapes pour nettoyer et désinfecter une table de préparation, et les symptômes de maladie que vous devez signaler. Puis renseignez-vous sur la règle de la carte de manipulateur d'aliments de votre État ou comté et écrivez-la en haut.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des travailleurs de la restauration, nouveaux ou en poste, et des demandeurs d'emploi : équipes de restaurants et de restauration rapide, personnel de cantines et de cuisines scolaires, traiteurs, employés de food trucks, de boulangeries et de charcuteries, et personnes qui préparent une carte de manipulateur d'aliments ou un examen ServSafe.",
    startingPoint: "Ils savent cuisiner ou préparer des repas à la maison et ont peut-être déjà travaillé en cuisine, mais ils n'ont pas appris les règles de la restauration sur le lavage des mains, l'ordre de rangement, les températures de maintien et de cuisson, les allergènes et la désinfection.",
    gap: "Beaucoup d'employeurs et de services de santé exigent une carte de manipulateur d'aliments peu après l'embauche, et une seule erreur de température, de contamination croisée ou d'allergie peut rendre des clients malades. Les apprenants ont besoin de ces habitudes et de ces chiffres pour être embauchés, réussir l'examen et protéger les clients.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un téléphone ou un ordinateur partagé ; un thermomètre alimentaire aide mais n'est pas obligatoire",
      "Temps : des leçons d'environ cinq minutes qui s'intègrent entre les services",
      "Les règles changent selon l'État et le comté, et les chiffres de la restauration diffèrent des conseils pour la cuisine à la maison ; les apprenants vérifient auprès de leur service de santé local",
      "Formation générale seulement : elle ne remplace pas un cours accrédité de manipulateur d'aliments ni une certification de responsable"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pendant un service en cuisine", action: "vous laver les mains correctement aux bons moments et ne pas toucher à mains nues les aliments prêts à manger", standard: "en frottant au moins 20 secondes et en nommant au moins six moments où se laver les mains" },
    { id: "O2", condition: "Face à des aliments crus et prêts à manger à ranger ou à préparer", action: "ranger et préparer les aliments pour que les microbes ne se propagent pas", standard: "en plaçant chaque aliment sur la bonne étagère du réfrigérateur et en utilisant des ustensiles séparés ou désinfectés" },
    { id: "O3", condition: "Quand un client a une allergie alimentaire ou qu'une surface doit être nettoyée", action: "suivre les étapes pour les allergies, puis nettoyer et désinfecter une surface dans le bon ordre", standard: "avec chaque étape dans l'ordre et sans deviner les ingrédients" },
    { id: "O4", condition: "Face à des aliments TCS froids et chauds et à un thermomètre", action: "vérifier les températures de maintien et décongeler les aliments en sécurité", standard: "froid à 41°F (5°C) ou moins et chaud à 135°F (57°C) ou plus, à chaque fois" },
    { id: "O5", condition: "En cuisant, en réchauffant ou en refroidissant des aliments", action: "choisir la température et le temps sûrs pour chaque aliment et prévoir un refroidissement rapide", standard: "en respectant les chiffres du Food Code de la FDA vus dans le cours" },
    { id: "O6", condition: "Avant et pendant un emploi dans la restauration", action: "repérer les symptômes de maladie à signaler et trouver la règle de la carte de manipulateur d'aliments là où vous travaillez", standard: "en nommant les symptômes, ainsi que le délai, la durée de la carte et les cours acceptés par votre service de santé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Mains propres et aliments propres",
      lessons: [
        {
          objectives: ["O1","O6"],
          title: "Lavage des mains et hygiène personnelle",
          minutes: 5,
          goal: "Vous laver les mains correctement aux bons moments et suivre les règles d'hygiène de base.",
          text: [
            "Les mains transmettent les maladies d'origine alimentaire plus que presque tout le reste. Lavez-les dans un lavabo réservé au lavage des mains (jamais dans un évier de préparation ou de plonge) avec de l'eau tiède courante et du savon. Frottez les mains, entre les doigts, sous les ongles et jusqu'aux poignets pendant au moins 20 secondes, rincez, et séchez avec une serviette en papier à usage unique ou un sèche-mains. Utilisez la serviette pour fermer le robinet s'il a des poignées.",
            "Lavez-vous les mains en arrivant au travail, après être allé aux toilettes, après avoir touché de la viande, de la volaille ou des fruits de mer crus, après avoir touché votre visage, vos cheveux, votre téléphone ou les poubelles, après avoir mangé, bu, fumé ou toussé, après avoir nettoyé, et avant de mettre des gants. Les gants ne remplacent pas le lavage des mains, et vous les changez quand ils se déchirent, quand vous changez de tâche, et après avoir manipulé des aliments crus.",
            "Ne touchez pas à mains nues les aliments prêts à manger (les aliments qui ne seront pas recuits, comme la salade, le pain ou un hamburger cuit). Utilisez des gants, des pinces, du papier alimentaire ou des ustensiles.",
            "Hygiène personnelle : portez des vêtements propres et une charlotte ou un filet à cheveux, gardez les ongles courts et propres, et couvrez les coupures avec un pansement et un gant. Prévenez votre responsable si vous avez des vomissements, de la diarrhée, la peau ou les yeux jaunes (jaunisse), ou un mal de gorge avec de la fièvre, ou si on vous a diagnostiqué certaines maladies comme le norovirus, l'hépatite A ou la salmonellose. Vous devrez peut-être rester chez vous ou loin des aliments."
          ],
          steps: ["Utilisez seulement le lavabo réservé au lavage des mains.", "Mouillez les mains à l'eau tiède courante et mettez du savon.", "Frottez les mains, les doigts, les ongles et les poignets pendant au moins 20 secondes.", "Rincez, et séchez avec une serviette en papier ou un sèche-mains.", "Fermez le robinet avec la serviette.", "Mettez des gants neufs pour manipuler des aliments prêts à manger."],
          words: [["Maladie d'origine alimentaire", "une maladie causée par un aliment qui contient des microbes ou des toxines."], ["Aliment prêt à manger", "un aliment qui sera mangé sans autre cuisson, comme la salade, le pain ou un hamburger cuit."], ["Jaunisse", "la peau ou les yeux qui jaunissent, un signe de maladies comme l'hépatite A."]],
          slides: [
            { title: "Lavez-vous bien les mains", bullets: ["Seulement au lavabo pour les mains", "Eau tiède et savon", "Frottez au moins 20 secondes ; séchez avec une serviette en papier"] },
            { title: "Quand se laver les mains", bullets: ["En début de service et après les toilettes", "Après la viande crue, les poubelles, le visage ou le téléphone", "Avant de mettre des gants"] },
            { title: "Pas de mains nues sur les aliments prêts à manger", bullets: ["Gants, pinces, papier alimentaire ou ustensiles", "Changez de gants s'ils sont déchirés ou si vous changez de tâche"] },
            { title: "Hygiène et maladie", bullets: ["Vêtements propres, cheveux couverts, ongles courts", "Couvrez les coupures avec un pansement et un gant", "Signalez vomissements, diarrhée, jaunisse, mal de gorge avec fièvre"] }
          ],
          sources: [
            { name: "FDA : Manipuler les aliments en sécurité (lavage des mains d'au moins 20 secondes)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
            { name: "FDA : Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Lavez-vous les mains complètement en vous chronométrant : au moins 20 secondes de frottement. Puis notez six moments d'un service en cuisine où vous devez vous laver les mains.",
          youCanNow: "vous laver les mains correctement, savoir quand le faire, éviter de toucher à mains nues les aliments prêts à manger, et savoir quels symptômes signaler.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un aliment prêt à manger ?", options: ["Un aliment qui ne sera plus cuit, comme une salade ou du pain", "Du poulet cru qui attend d'être cuit", "Un aliment surgelé dans le congélateur", "Tout aliment dans un emballage fermé"], answer: 0, why: "Un aliment prêt à manger ne sera plus cuit, donc il ne doit pas toucher les mains nues." },
            { objective: "O1", q: "Vous venez de sortir les poubelles et vous devez maintenant préparer un sandwich. Que faites-vous d'abord ?", options: ["Mettre des gants tout de suite", "Vous laver les mains, puis mettre des gants neufs", "Vous essuyer les mains sur votre tablier", "Utiliser seulement du gel hydroalcoolique"], answer: 1, why: "Les gants ne remplacent pas le lavage des mains ; lavez-vous les mains après avoir touché les poubelles et avant de mettre des gants." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Prévenir la contamination croisée",
          minutes: 5,
          goal: "Ranger et préparer les aliments pour que les microbes et les allergènes ne passent pas d'un aliment ou d'une surface à l'autre.",
          text: [
            "La contamination croisée, c'est quand des microbes passent d'une chose à une autre : du poulet cru à une salade, d'une planche à découper sale au pain, ou de vos mains à un sandwich.",
            "Séparez les aliments crus et les aliments prêts à manger. Utilisez des planches à découper, des couteaux et des ustensiles différents pour la viande crue et pour les légumes ou les aliments cuits ; beaucoup de cuisines utilisent des planches de couleurs différentes. Si vous devez utiliser la même surface, nettoyez-la et désinfectez-la entre les tâches.",
            "Rangez bien les aliments dans la chambre froide ou le réfrigérateur. Mettez les aliments prêts à manger sur les étagères du haut. Rangez les aliments crus d'origine animale en dessous, dans l'ordre de leur température de cuisson : les pièces entières et le poisson au-dessus de la viande hachée, et la volaille tout en bas, pour que les jus ne coulent pas sur les aliments qui demandent moins de cuisson. Couvrez les aliments et étiquetez-les avec le nom et la date.",
            "Autres habitudes : ne remettez jamais un aliment cuit dans une assiette ou un plateau qui a contenu de la viande crue ; gardez les produits chimiques loin des aliments et en dessous ; et utilisez une pelle propre pour la glace, pas un verre ni votre main."
          ],
          steps: ["Utilisez des planches et des couteaux différents pour la viande crue et les aliments prêts à manger.", "Nettoyez et désinfectez les surfaces entre les tâches.", "Rangez les aliments prêts à manger en haut dans le réfrigérateur.", "Rangez la viande crue en dessous : pièces entières et poisson, puis viande hachée, puis volaille tout en bas.", "Couvrez et étiquetez les aliments rangés avec le nom et la date.", "Gardez les produits chimiques loin des aliments et en dessous."],
          words: [["Contamination croisée", "quand des microbes ou des allergènes passent d'un aliment, d'une surface ou d'une main à un autre aliment."], ["Planches de couleur", "des planches à découper de couleurs différentes pour différents aliments, afin de bien les séparer."]],
          slides: [
            { title: "Ce qu'est la contamination croisée", bullets: ["Des microbes passent d'une chose à une autre", "Poulet cru vers la salade ; planche sale vers le pain"] },
            { title: "Séparez le cru et le prêt à manger", bullets: ["Planches, couteaux et ustensiles différents", "Nettoyez et désinfectez entre les tâches"] },
            { title: "Rangement au froid, de haut en bas", bullets: ["Aliments prêts à manger en haut", "Pièces entières et poisson, puis viande hachée", "Volaille sur l'étagère du bas"] },
            { title: "Autres habitudes", bullets: ["Ne réutilisez jamais l'assiette de viande crue pour du cuit", "Produits chimiques loin des aliments et en dessous", "Utilisez une pelle pour la glace"] }
          ],
          sources: [
            { name: "FDA : Manipuler les aliments en sécurité (séparer le cru et le prêt à manger)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" }
          ],
          tryIt: "Dessinez un réfrigérateur avec quatre étagères. Placez ces aliments sur les bonnes étagères : un plateau de hauts de cuisse de poulet crus, un récipient de laitue coupée, du bœuf haché cru et des filets de saumon crus. Écrivez une phrase pour dire pourquoi l'ordre est important.",
          youCanNow: "ranger et préparer les aliments pour que les microbes ne passent pas entre les aliments crus et prêts à manger.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que la contamination croisée ?", options: ["Cuire un aliment trop longtemps", "Ranger un aliment au congélateur", "Des microbes qui passent d'un aliment ou d'une surface à l'autre", "Mélanger deux sauces"], answer: 2, why: "La contamination croisée, c'est quand des microbes passent d'une chose, comme du poulet cru, à une autre." },
            { objective: "O2", q: "Il vous faut de la glace pour des boissons. Avec quoi la prenez-vous ?", options: ["Un verre à boire", "Votre main propre", "Une tasse prise sur l'égouttoir", "Une pelle à glace propre"], answer: 3, why: "Une pelle propre évite que les mains ou du verre cassé se retrouvent dans la glace." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Allergènes, nettoyage et désinfection",
          minutes: 5,
          goal: "Servir sans danger un client qui a une allergie alimentaire et nettoyer et désinfecter correctement une surface.",
          text: [
            "Une allergie alimentaire peut tuer. La FDA (l'agence américaine des aliments et des médicaments) cite neuf allergènes alimentaires majeurs : le lait, les œufs, le poisson, les crustacés (comme les crevettes et le crabe), les fruits à coque, les arachides (cacahuètes), le blé, le soja et le sésame. Le sésame a été ajouté le 1er janvier 2023.",
            "Quand un client dit qu'il a une allergie, prenez-le au sérieux. Prévenez le responsable ou le chef. Vérifiez la recette et l'étiquette de chaque ingrédient. Lavez-vous les mains, changez de gants, et utilisez du matériel et des surfaces propres et désinfectés pour préparer le plat. Gardez-le à l'écart des autres aliments et servez-le séparément. Si vous n'êtes pas sûr que le plat soit sans danger, dites-le ; ne devinez jamais. Si un client montre des signes de réaction, comme une difficulté à respirer ou un gonflement, appelez le 911 (le numéro d'urgence aux États-Unis).",
            "Nettoyer et désinfecter, ce n'est pas pareil. Nettoyer enlève les restes d'aliments, la saleté et la graisse visibles. Désinfecter réduit les microbes à un niveau sans danger. Il faut d'abord nettoyer ; le désinfectant marche mal sur une surface sale.",
            "Pour nettoyer et désinfecter une table de préparation : raclez les restes, lavez à l'eau et au savon, rincez, appliquez le désinfectant à la bonne concentration (vérifiez avec les bandelettes de test de votre cuisine et le mode d'emploi), laissez-le agir pendant le temps de contact indiqué sur l'étiquette, et laissez sécher à l'air. Ne l'essuyez pas avec un torchon. La vaisselle dans un évier à trois bacs suit le même ordre : laver, rincer, désinfecter, sécher à l'air."
          ],
          steps: ["Allergie : prévenez le responsable ou le chef et vérifiez chaque ingrédient.", "Lavez-vous les mains, changez de gants, utilisez des ustensiles propres et désinfectés.", "Gardez la commande pour allergie à l'écart et servez-la séparément.", "Surface : raclez, lavez, rincez.", "Désinfectez à la bonne concentration (bandelettes de test) pendant le temps de contact de l'étiquette.", "Laissez sécher à l'air ; pas de torchon."],
          words: [["Allergène", "un aliment qui peut causer une réaction immunitaire dangereuse chez certaines personnes."], ["Désinfecter", "réduire les microbes sur une surface propre à un niveau sans danger, avec la chaleur ou un produit chimique."], ["Temps de contact", "le temps pendant lequel un désinfectant doit rester humide sur une surface pour agir."], ["Bandelettes de test", "des bandes de papier qui montrent si une solution désinfectante a la bonne concentration."]],
          slides: [
            { title: "Les neuf allergènes majeurs (FDA)", bullets: ["Lait, œufs, poisson, crustacés", "Fruits à coque, arachides, blé, soja", "Sésame (ajouté le 1er janvier 2023)"] },
            { title: "Un client a une allergie", bullets: ["Prévenez le responsable ou le chef ; vérifiez chaque étiquette", "Mains propres, gants neufs, ustensiles désinfectés", "Ne devinez jamais ; appelez le 911 en cas de réaction"] },
            { title: "Nettoyer ou désinfecter", bullets: ["Nettoyer enlève la saleté visible", "Désinfecter réduit les microbes à un niveau sans danger", "Toujours nettoyer d'abord"] },
            { title: "Nettoyer et désinfecter une table", bullets: ["Raclez, lavez, rincez", "Désinfectez à la bonne concentration pendant le temps de contact", "Séchage à l'air ; pas de torchon"] }
          ],
          sources: [
            { name: "FDA : Allergies alimentaires (les neuf allergènes alimentaires majeurs)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" }
          ],
          tryIt: "Choisissez un plat que vous connaissez, comme un cheeseburger ou un sauté de légumes au wok. Listez lesquels des neuf allergènes majeurs il pourrait contenir. Puis écrivez les six étapes que vous suivriez pour nettoyer et désinfecter la table de préparation après l'avoir préparé.",
          youCanNow: "gérer sans danger une commande pour allergie et nettoyer et désinfecter une surface dans le bon ordre.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi faut-il nettoyer une surface avant de la désinfecter ?", options: ["Le désinfectant agit mal sur une surface sale", "Le nettoyage fait mieux sentir le désinfectant", "La désinfection enlève la graisse toute seule", "Il suffit de nettoyer une fois par semaine"], answer: 0, why: "Le désinfectant a besoin d'une surface propre pour réduire les microbes à un niveau sûr." },
            { objective: "O3", q: "Un client demande si un plat contient du sésame et vous n'êtes pas sûr. Que dites-vous ?", options: ["« Ça devrait aller. »", "« Je ne suis pas sûr ; je vérifie avec le chef et les étiquettes. »", "« Enlevez simplement le sésame. »", "« Personne n'est allergique au sésame. »"], answer: 1, why: "Ne devinez jamais pour les allergènes ; vérifiez la recette et les étiquettes avec le chef ou le responsable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Mains propres et aliments propres",
        questions: [
          { objective: "O1", q: "Combien de temps faut-il se frotter les mains pendant le lavage ?", options: ["3 secondes", "Au moins 20 secondes", "Seulement jusqu'à ce qu'elles aient l'air propres", "2 minutes dans l'évier de plonge"], answer: 1, why: "Frotter au moins 20 secondes enlève les microbes ; utilisez le lavabo pour les mains." },
          { objective: "O1", q: "Un cuisinier doit mettre de la laitue sur un hamburger cuit. Que doit-il utiliser ?", options: ["Ses mains nues, lavées avant", "Les mêmes gants que pour les steaks crus", "Des gants propres, des pinces ou un ustensile", "Son tablier"], answer: 2, why: "Les aliments prêts à manger ne doivent pas être touchés à mains nues." },
          { objective: "O2", q: "Quelle étagère convient au poulet cru dans le réfrigérateur ?", options: ["L'étagère du bas", "L'étagère du haut", "Au-dessus de la salade", "À côté du pain"], answer: 0, why: "La volaille demande la température de cuisson la plus élevée, donc elle va en bas, où ses jus ne peuvent pas couler sur d'autres aliments." },
          { objective: "O3", q: "Un client dit qu'il est allergique au sésame. Que faites-vous d'abord ?", options: ["Lui dire que le sésame n'est pas un allergène", "Enlever les graines de sésame du pain", "Supposer que le plat est sans danger", "Prévenir le responsable ou le chef et vérifier chaque ingrédient"], answer: 3, why: "Les allergies doivent être prises au sérieux et vérifiées, jamais devinées." },
          { objective: "O3", q: "Quel est le bon ordre pour traiter une table de préparation ?", options: ["Désinfecter, puis laver", "Racler, laver, rincer, désinfecter, sécher à l'air", "Essuyer seulement avec un torchon sec", "Rincer, puis sécher avec un torchon"], answer: 1, why: "Le désinfectant n'agit que sur une surface d'abord nettoyée et rincée." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Temps et température",
      lessons: [
        {
          objectives: ["O4"],
          title: "La zone de température dangereuse",
          minutes: 5,
          goal: "Garder froids les aliments froids et chauds les aliments chauds, et vérifier les températures au thermomètre.",
          text: [
            "Les microbes se multiplient le plus vite entre 41°F (5°C) et 135°F (57°C). Cet intervalle s'appelle la zone de température dangereuse. En restauration, le Food Code de la FDA (le code alimentaire américain) dit de maintenir les aliments froids à 41°F (5°C) ou moins et les aliments chauds à 135°F (57°C) ou plus. (Les conseils de la FDA et de l'USDA pour la cuisine à la maison utilisent 40°F (4°C) et 140°F (60°C) ; au travail, suivez le code utilisé par votre service de santé.)",
            "Les aliments qui ont besoin de ce contrôle s'appellent des aliments TCS (time/temperature control for safety, contrôle du temps et de la température pour la sécurité) : viande, volaille, poisson, œufs, produits laitiers, riz, haricots et pommes de terre cuits, melons coupés, tomates coupées, légumes à feuilles coupés, tofu et graines germées, entre autres.",
            "Utilisez un thermomètre alimentaire propre et désinfecté. Mettez la pointe dans la partie la plus épaisse de l'aliment, sans toucher l'os ni le récipient. Vérifiez les températures de maintien selon un horaire, par exemple toutes les 2 heures, et notez-les sur le registre. Étalonnez le thermomètre comme votre cuisine vous l'a appris.",
            "Décongelez les aliments en sécurité : au réfrigérateur, sous l'eau froide courante, au micro-ondes s'ils sont cuits tout de suite après, ou pendant la cuisson. Ne décongelez jamais un aliment sur le plan de travail."
          ],
          steps: ["Nettoyez et désinfectez le thermomètre.", "Mettez la pointe dans la partie la plus épaisse de l'aliment.", "Aliments froids : 41°F (5°C) ou moins. Aliments chauds : 135°F (57°C) ou plus.", "Notez la mesure et l'heure sur le registre.", "Si un aliment est dans la zone dangereuse, prévenez votre responsable."],
          words: [["Zone de température dangereuse", "de 41°F à 135°F (5°C à 57°C) en restauration : l'intervalle où les microbes se multiplient le plus vite."], ["Aliment TCS", "un aliment qui a besoin d'un contrôle du temps et de la température pour rester sûr, comme la viande, les produits laitiers, le riz cuit et le melon coupé."], ["Étalonner", "vérifier et régler un thermomètre pour qu'il mesure juste."]],
          slides: [
            { title: "La zone dangereuse", bullets: ["41°F à 135°F, soit 5°C à 57°C (Food Code de la FDA)", "Aliments froids : 41°F (5°C) ou moins", "Aliments chauds : 135°F (57°C) ou plus"] },
            { title: "Aliments TCS", bullets: ["Viande, volaille, poisson, œufs, produits laitiers", "Riz, haricots, pommes de terre cuits", "Melons, tomates et légumes à feuilles coupés"] },
            { title: "Utilisez un thermomètre", bullets: ["Propre et désinfecté", "Partie la plus épaisse, sans toucher l'os ni le récipient", "Vérifiez et notez selon un horaire"] },
            { title: "Décongelez en sécurité", bullets: ["Au réfrigérateur ou sous l'eau froide courante", "Au micro-ondes si l'aliment est cuit tout de suite", "Jamais sur le plan de travail"] }
          ],
          sources: [
            { name: "FDA : Températures clés pour la sécurité des œufs en restauration (maintien au froid 41°F, maintien au chaud 135°F)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" },
            { name: "FDA : Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Avec un thermomètre alimentaire, à la maison ou au travail, mesurez la température à l'intérieur de votre réfrigérateur (mettez-le dans un verre d'eau au réfrigérateur pendant quelques minutes) et celle d'un aliment chaud. Notez si chacune est sûre pour le maintien en restauration.",
          youCanNow: "nommer la zone de température dangereuse, en garder les aliments TCS hors, et mesurer les températures correctement.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire aliment TCS ?", options: ["Un aliment toujours servi froid", "Un aliment vendu en conserve", "Un aliment qui a besoin d'un contrôle du temps et de la température pour être sûr", "Un aliment vendu seulement en magasin"], answer: 2, why: "Un aliment TCS a besoin d'un contrôle du temps et de la température, car les microbes peuvent s'y multiplier." },
            { objective: "O4", q: "Au contrôle des 2 heures, un bac de haricots maintenu au chaud indique 120°F (49°C). Que faites-vous ?", options: ["Le noter et continuer à servir", "Ajouter des haricots par-dessus", "Éteindre le chauffe-plat", "Prévenir votre responsable, car il est dans la zone dangereuse"], answer: 3, why: "Les aliments chauds doivent rester à 135°F (57°C) ou plus, donc 120°F (49°C) est dans la zone dangereuse." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Températures de cuisson, de réchauffage et de refroidissement",
          minutes: 6,
          goal: "Cuire, réchauffer et refroidir les aliments aux températures sûres du Food Code de la FDA.",
          text: [
            "Cuire à la bonne température à cœur tue les microbes. Les principales températures de cuisson du Food Code de la FDA pour la restauration sont : volaille (poulet, dinde) et aliments farcis : 165°F (74°C) pendant moins de 1 seconde (instantané). Viande hachée comme les steaks hachés, et œufs qui seront gardés pour plus tard : 155°F (68°C) pendant 17 secondes. Pièces entières de bœuf et de porc, poisson, et œufs cuits pour un service immédiat : 145°F (63°C) pendant 15 secondes.",
            "Réchauffage : un aliment cuit que vous avez refroidi et que vous allez maintenir au chaud doit être réchauffé à 165°F (74°C) pendant 15 secondes, en 2 heures maximum. Un aliment cuit au micro-ondes doit atteindre 165°F (74°C), être remué et couvert, et reposer 2 minutes.",
            "Refroidissement : un aliment cuit doit refroidir de 135°F (57°C) à 70°F (21°C) en 2 heures maximum, et de 135°F (57°C) à 41°F (5°C) en 6 heures maximum au total. Refroidissez plus vite en répartissant l'aliment dans des bacs peu profonds, en utilisant un bain de glace ou un bâton réfrigérant, et en remuant. Ne laissez jamais une grande marmite refroidir sur le plan de travail.",
            "Votre service de santé local peut utiliser une version plus récente ou plus ancienne du Food Code, et les conseils pour la maison sont différents (par exemple 160°F (71°C) pour le bœuf haché à la maison). Pour un examen ou un emploi, apprenez les chiffres utilisés par votre cours et votre service de santé."
          ],
          steps: ["Vérifiez la partie la plus épaisse au thermomètre.", "Volaille et aliments farcis : 165°F (74°C).", "Viande hachée et œufs gardés pour plus tard : 155°F (68°C) pendant 17 secondes.", "Pièces entières, poisson, œufs pour service immédiat : 145°F (63°C) pendant 15 secondes.", "Réchauffage pour maintien au chaud : 165°F (74°C) pendant 15 secondes, en 2 heures maximum.", "Refroidir : de 135°F (57°C) à 70°F (21°C) en 2 heures, à 41°F (5°C) en 6 heures au total."],
          words: [["Température à cœur", "la température dans la partie la plus épaisse de l'aliment, mesurée au thermomètre."], ["Bâton réfrigérant", "une pale en plastique fermée, remplie de glace ou d'eau et congelée, qui sert à remuer et refroidir vite un aliment (en anglais : ice wand)."], ["Refroidissement en deux étapes", "refroidir un aliment cuit à 70°F (21°C) en 2 heures, puis à 41°F (5°C) en 6 heures au total."]],
          slides: [
            { title: "Températures de cuisson (Food Code)", bullets: ["Volaille et aliments farcis : 165°F (74°C), instantané", "Viande hachée : 155°F (68°C) pendant 17 secondes", "Pièces entières, poisson : 145°F (63°C) pendant 15 secondes"] },
            { title: "Réchauffage pour maintien au chaud", bullets: ["165°F (74°C) pendant 15 secondes", "En 2 heures maximum"] },
            { title: "Refroidissement en deux étapes", bullets: ["De 135°F (57°C) à 70°F (21°C) en 2 heures", "Jusqu'à 41°F (5°C) en 6 heures au total", "Bacs peu profonds, bain de glace, bâton réfrigérant, remuer"] },
            { title: "Connaissez vos chiffres", bullets: ["Les services de santé peuvent utiliser des versions différentes du Food Code", "Conseils pour la maison différents : 160°F (71°C) pour le bœuf haché", "Apprenez ce qu'utilisent votre cours et votre comté"] }
          ],
          sources: [
            { name: "FDA : Procédures de normalisation des inspecteurs de sécurité alimentaire (températures de cuisson, de réchauffage et de refroidissement du Food Code)", url: "https://www.fda.gov/media/155354/download" },
            { name: "FDA : Températures clés pour la sécurité des œufs en restauration", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" }
          ],
          tryIt: "Faites une carte de poche avec les températures de cuisson, de réchauffage, de maintien et de refroidissement de cette leçon. Puis prévoyez, étape par étape, comment vous refroidiriez vite une marmite pleine de chili.",
          youCanNow: "cuire, réchauffer, maintenir et refroidir les aliments aux températures sûres du Food Code et les vérifier au thermomètre.",
          quickCheck: [
            { objective: "O5", q: "En restauration, quelle est la température de cuisson d'une pièce entière de bœuf ou de porc ?", options: ["145°F (63°C) pendant 15 secondes", "120°F (49°C) pendant 1 minute", "155°F (68°C) pendant 17 secondes", "165°F (74°C) pendant 15 secondes"], answer: 0, why: "Selon le Food Code de la FDA, les pièces entières de bœuf et de porc doivent atteindre 145°F (63°C) pendant 15 secondes." },
            { objective: "O5", q: "Une grande marmite pleine de riz doit être refroidie. Quelle est la meilleure première étape ?", options: ["Laisser la marmite sur le plan de travail toute la nuit", "Mettre la marmite chaude directement au réfrigérateur avec un couvercle", "Répartir le riz dans des bacs peu profonds", "La couvrir avec un torchon"], answer: 2, why: "Des bacs peu profonds permettent aux aliments de traverser assez vite la zone dangereuse." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Obtenir votre carte de manipulateur d'aliments et réussir l'examen",
          minutes: 5,
          goal: "Trouver la règle locale sur la carte de manipulateur d'aliments et vous préparer à l'examen.",
          text: [
            "Les règles sur la carte de manipulateur d'aliments changent selon l'État et le comté. Certains États exigent une carte pour la plupart des travailleurs de l'alimentation ; d'autres laissent les comtés ou les villes décider ; d'autres n'ont pas de règle générale. Votre service de santé local ou votre bureau de santé environnementale vous dira ce qui s'applique là où vous travaillez.",
            "Exemple : la Californie. Selon la section 113948 du Health and Safety Code (code de la santé et de la sécurité) de Californie, les manipulateurs d'aliments doivent obtenir une carte californienne de manipulateur d'aliments dans les 30 jours après leur embauche par un établissement alimentaire. La carte est valable trois ans, et le cours doit venir d'un organisme de formation accrédité par l'American National Standards Institute (ANSI). Certains lieux sont exemptés, comme certaines épiceries et cantines scolaires, donc vérifiez auprès de votre comté.",
            "La carte de manipulateur d'aliments est différente de la certification de responsable en sécurité alimentaire (comme l'examen ServSafe Manager). Les cours pour manipulateurs sont courts et couvrent les bases de ce cours. La certification de responsable est plus longue, va plus loin, et est en général exigée pour la personne responsable.",
            "Pour vous préparer : suivez un cours accrédité, revoyez chaque sujet de ce cours, utilisez la carte de poche que vous avez faite, et entraînez-vous avec des questions que vous écrivez vous-même ou qui viennent avec votre cours. Lisez chaque question avec attention : des mots comme \"d'abord\", \"meilleur\" et \"jamais\" comptent."
          ],
          steps: ["Cherchez le nom de votre État ou comté avec \"food handler card\" et trouvez la page du service de santé (elle finit souvent par .gov).", "Notez le délai après l'embauche, la durée de validité de la carte, et les cours acceptés.", "Choisissez un cours accrédité dans la liste indiquée par votre service de santé.", "Révisez le lavage des mains, la contamination croisée, les températures, les allergènes et le nettoyage.", "Suivez le cours, passez le test, et gardez une copie de votre carte."],
          words: [["Carte de manipulateur d'aliments", "la preuve que vous avez terminé un cours de base en sécurité alimentaire ; exigée pour les travailleurs de l'alimentation dans certains États et comtés (en anglais : food handler card)."], ["ANSI", "l'American National Standards Institute, l'institut américain de normalisation qui accrédite les organismes de formation en sécurité alimentaire."], ["Certification de responsable en sécurité alimentaire", "un diplôme plus avancé en sécurité alimentaire, en général pour la personne responsable d'une cuisine (en anglais : food manager certification)."]],
          slides: [
            { title: "Les règles changent selon le lieu", bullets: ["Certains États exigent une carte ; d'autres laissent les comtés décider", "Votre service de santé local le sait"] },
            { title: "Exemple : la Californie", bullets: ["Carte dans les 30 jours après l'embauche", "Valable trois ans", "Cours d'un organisme accrédité par l'ANSI"] },
            { title: "Carte de manipulateur ou certification de responsable", bullets: ["Manipulateur : court, les bases", "Responsable : plus long, pour la personne responsable"] },
            { title: "Préparez-vous à l'examen", bullets: ["Suivez un cours accrédité", "Utilisez votre carte de poche des températures", "Repérez les mots comme d'abord, meilleur, jamais"] }
          ],
          sources: [
            { name: "Comté de Sonoma, Californie : Carte de manipulateur d'aliments (30 jours, trois ans, ANSI)", url: "https://sonomacounty.gov/Health/Environmental-Health/Food-Program/Food-Handler-Card/" },
            { name: "Département de la santé publique de Californie : Formation à la sécurité alimentaire dans le commerce (HSC 113948)", url: "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/RetailFood/RetailFoodSafetyTraining.pdf" }
          ],
          tryIt: "Tâche finale : écrivez votre Liste de contrôle pour un service sûr (lavage des mains, rangement, températures, refroidissement, étapes pour les allergies, étapes de nettoyage et de désinfection, symptômes de maladie à signaler). Puis cherchez la règle sur la carte de manipulateur d'aliments de votre État ou comté et écrivez en haut le délai, la durée de validité de la carte et les cours acceptés.",
          youCanNow: "trouver la règle sur la carte de manipulateur d'aliments là où vous travaillez, choisir un cours accepté, et vous préparer à l'examen.",
          quickCheck: [
            { objective: "O6", q: "Quelle est la différence entre une carte de manipulateur d'aliments et une certification de responsable en sécurité alimentaire ?", options: ["C'est la même chose", "La carte couvre les bases ; la certification de responsable va plus loin, pour la personne en charge", "La carte est réservée aux responsables", "La certification de responsable est plus courte"], answer: 1, why: "Les cours de manipulateur d'aliments couvrent les bases ; la certification de responsable est plus longue et souvent exigée pour la personne en charge." },
            { objective: "O6", q: "Vous commencez un nouvel emploi en cuisine la semaine prochaine. Comment trouvez-vous la règle de la carte de manipulateur d'aliments ?", options: ["Demander à un ami dans un autre État", "Supposer qu'il n'y a pas de règle", "Acheter le premier cours trouvé en ligne", "Consulter la page du service de santé de votre État ou comté"], answer: 3, why: "Les règles changent selon l'État et le comté, donc le service de santé local est la bonne source." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Temps et température",
        questions: [
          { objective: "O4", q: "En restauration, quelle est la zone de température dangereuse selon le Food Code de la FDA ?", options: ["0°F à 32°F (-18°C à 0°C)", "41°F à 135°F (5°C à 57°C)", "165°F à 212°F (74°C à 100°C)", "70°F à 80°F (21°C à 27°C) seulement"], answer: 1, why: "Les microbes se multiplient le plus vite entre 41°F (5°C) et 135°F (57°C)." },
          { objective: "O5", q: "Quelle est la température minimale de cuisson du poulet en restauration ?", options: ["145°F (63°C)", "135°F (57°C)", "155°F (68°C)", "165°F (74°C)"], answer: 3, why: "La volaille doit atteindre 165°F (74°C)." },
          { objective: "O5", q: "Une grande marmite de soupe doit refroidir. Quelle est la méthode la plus sûre ?", options: ["La répartir dans des bacs peu profonds et utiliser un bain de glace", "La laisser toute la nuit sur le plan de travail", "Mettre toute la marmite chaude au fond du réfrigérateur avec un couvercle", "Ajouter de l'eau chaude"], answer: 0, why: "Les bacs peu profonds et la glace font passer vite l'aliment à travers la zone dangereuse." },
          { objective: "O5", q: "Un aliment cuit doit refroidir de 135°F (57°C) à 70°F (21°C) en :", options: ["6 heures", "12 heures", "2 heures", "24 heures"], answer: 2, why: "La première étape du refroidissement est de 135°F (57°C) à 70°F (21°C) en 2 heures maximum." },
          { objective: "O6", q: "En Californie, un nouveau manipulateur d'aliments doit obtenir sa carte dans :", options: ["Les 30 jours après l'embauche", "Un an", "Avant 21 ans", "Elle n'est jamais exigée"], answer: 0, why: "La règle de Californie est de 30 jours après l'embauche ; la carte est valable trois ans." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Manipulateur d'aliments : préparation à l'examen ServSafe",
    questions: [
      { objective: "O1", q: "Où les manipulateurs d'aliments doivent-ils se laver les mains ?", options: ["À l'évier de préparation", "À l'évier de plonge", "Au lavabo réservé au lavage des mains", "À n'importe quel évier vide"], answer: 2, why: "Utilisez seulement le lavabo pour les mains, pour ne pas contaminer les aliments et la vaisselle." },
      { objective: "O1", q: "Quand devez-vous vous laver les mains avant de mettre des gants ?", options: ["Jamais ; les gants suffisent", "À chaque fois", "Seulement une fois par jour", "Seulement après le déjeuner"], answer: 1, why: "Les gants ne remplacent pas le lavage des mains." },
      { objective: "O6", q: "Un cuisinier a la diarrhée et a vomi ce matin. Que doit-il faire ?", options: ["Prévenir le responsable avant de travailler avec les aliments", "Travailler avec deux paires de gants", "Boire de l'eau et continuer à cuisiner", "Ne rien dire"], answer: 0, why: "Ces symptômes doivent être signalés ; le travailleur devra peut-être rester loin des aliments." },
      { objective: "O2", q: "Lequel est un aliment prêt à manger ?", options: ["Du bœuf haché cru", "Du poulet cru", "Des crevettes crues", "Une tomate coupée en tranches pour un sandwich"], answer: 3, why: "Elle sera mangée sans autre cuisson, donc pas de contact à mains nues." },
      { objective: "O1", q: "Vous avez une petite coupure au doigt. Vous devez :", options: ["L'ignorer", "La couvrir d'un pansement et porter un gant", "Mettre seulement un pansement", "Rentrer chez vous pendant une semaine"], answer: 1, why: "Un pansement plus un gant gardent la blessure loin des aliments." },
      { objective: "O2", q: "Lequel est un cas de contamination croisée ?", options: ["Cuire du poulet à 165°F (74°C)", "Se laver les mains pendant 20 secondes", "Couper du poulet cru, puis de la salade, sur la même planche non désinfectée", "Étiqueter un aliment avec une date"], answer: 2, why: "Les microbes passent du poulet cru à la salade." },
      { objective: "O2", q: "Dans le réfrigérateur, qu'est-ce qui va sur l'étagère du HAUT ?", options: ["Les aliments prêts à manger comme les fruits coupés", "La volaille crue", "Le bœuf haché cru", "Les produits chimiques"], answer: 0, why: "Les aliments prêts à manger vont au-dessus des aliments crus pour que rien ne coule dessus." },
      { objective: "O2", q: "Où faut-il ranger les produits de nettoyage ?", options: ["Sur l'étagère au-dessus des aliments", "À côté du buffet de salades", "Dans des récipients alimentaires vides", "Loin des aliments et en dessous"], answer: 3, why: "Ranger les produits chimiques loin et en dessous les empêche de couler ou de se renverser sur les aliments." },
      { objective: "O3", q: "Combien d'allergènes alimentaires majeurs la FDA liste-t-elle ?", options: ["Cinq", "Neuf", "Douze", "Trois"], answer: 1, why: "Lait, œufs, poisson, crustacés, fruits à coque, arachides, blé, soja et sésame." },
      { objective: "O3", q: "Un client allergique aux arachides commande un plat. Quelle étape est FAUSSE ?", options: ["Prévenir le chef", "Vérifier l'étiquette de chaque ingrédient", "Utiliser des ustensiles propres et désinfectés", "Enlever les cacahuètes d'un plat déjà fait et le servir"], answer: 3, why: "Enlever l'allergène ne rend pas le plat sûr ; préparez-en un nouveau avec des ustensiles propres." },
      { objective: "O3", q: "Quelle est la différence entre nettoyer et désinfecter ?", options: ["Nettoyer enlève la saleté ; désinfecter réduit les microbes à un niveau sans danger", "C'est la même chose", "Désinfecter enlève la saleté ; nettoyer tue les microbes", "Nettoyer, c'est seulement pour le sol"], answer: 0, why: "On nettoie d'abord, puis on désinfecte." },
      { objective: "O3", q: "Après avoir désinfecté une planche à découper, vous devez :", options: ["La sécher avec un torchon", "Rincer tout de suite le désinfectant", "La laisser sécher à l'air", "La mettre directement sous la viande crue"], answer: 2, why: "Le séchage à l'air laisse le désinfectant agir pendant son temps de contact sans ajouter les microbes d'un torchon." },
      { objective: "O3", q: "Comment savoir si une solution désinfectante a la bonne concentration ?", options: ["À son odeur", "En la vérifiant avec les bandelettes de test de votre cuisine", "À sa couleur", "En en mettant plus par sécurité"], answer: 1, why: "Les bandelettes montrent la concentration ; trop faible, elle ne marche pas, trop forte, elle peut être dangereuse." },
      { objective: "O4", q: "À quelle température ou moins faut-il maintenir les aliments TCS froids en restauration ?", options: ["50°F (10°C)", "60°F (16°C)", "45°F (7°C)", "41°F (5°C)"], answer: 3, why: "Le Food Code fixe le maintien au froid à 41°F (5°C) ou moins." },
      { objective: "O4", q: "Les aliments TCS chauds d'un buffet doivent être maintenus à :", options: ["135°F (57°C) ou plus", "100°F (38°C) ou plus", "120°F (49°C) ou plus", "Température ambiante"], answer: 0, why: "Selon le Food Code, le maintien au chaud est à 135°F (57°C) ou plus." },
      { objective: "O4", q: "Quelle est une façon sûre de décongeler du poulet surgelé ?", options: ["Sur le plan de travail toute la nuit", "Au réfrigérateur", "Dans de l'eau tiède sur le plan de travail", "Au soleil"], answer: 1, why: "Décongeler au réfrigérateur le garde hors de la zone dangereuse." },
      { objective: "O5", q: "Au restaurant, les steaks hachés de bœuf doivent atteindre :", options: ["135°F (57°C)", "145°F (63°C) pendant 15 secondes", "155°F (68°C) pendant 17 secondes", "100°F (38°C)"], answer: 2, why: "Le Food Code fixe 155°F (68°C) pendant 17 secondes pour la viande hachée." },
      { objective: "O5", q: "Une côtelette de porc ou un filet de saumon doit atteindre :", options: ["165°F (74°C) pendant 15 secondes", "120°F (49°C)", "100°F (38°C)", "145°F (63°C) pendant 15 secondes"], answer: 3, why: "Les pièces entières et le poisson : 145°F (63°C) pendant 15 secondes." },
      { objective: "O5", q: "Un reste de chili refroidi hier va aller dans le bac de maintien au chaud. Réchauffez-le à :", options: ["165°F (74°C) pendant 15 secondes, en 2 heures maximum", "135°F (57°C) en 6 heures", "100°F (38°C)", "Juste jusqu'à ce qu'il soit tiède"], answer: 0, why: "Un aliment cuit et refroidi sur place se réchauffe à 165°F (74°C) pendant 15 secondes, en 2 heures maximum, pour le maintien au chaud." },
      { objective: "O6", q: "Où trouver la règle sur la carte de manipulateur d'aliments dans votre région ?", options: ["Une publication sur les réseaux sociaux", "La supposition d'un collègue", "Le service de santé de votre État ou comté", "N'importe quel site d'examen"], answer: 2, why: "Les règles changent selon l'État et le comté, donc le service de santé local est la source officielle." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      5,
      8,
      10,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Lavage des mains",
        objective: "O1",
        notYet: "Les étapes ou les moments du lavage des mains manquent ou sont faux.",
        meets: "Liste toutes les étapes du lavage des mains et au moins six moments où se laver les mains.",
        exceeds: "Dit aussi quand changer de gants et comment manipuler les aliments prêts à manger."
      },
      {
        name: "Rangement et contamination croisée",
        objective: "O2",
        notYet: "Les aliments crus sont rangés au-dessus des aliments prêts à manger, ou pas d'ustensiles séparés.",
        meets: "Montre le bon ordre des étagères et des planches et couteaux séparés ou désinfectés.",
        exceeds: "Parle aussi de l'étiquetage avec le nom et la date et du rangement des produits chimiques sous les aliments."
      },
      {
        name: "Allergies et désinfection",
        objective: "O3",
        notYet: "Les étapes pour les allergies ou l'ordre nettoyage-désinfection manquent.",
        meets: "Liste les étapes pour les allergies et l'ordre : gratter, laver, rincer, désinfecter, sécher à l'air.",
        exceeds: "Parle des bandelettes de test et du temps de contact indiqué sur l'étiquette du désinfectant."
      },
      {
        name: "Températures de maintien",
        objective: "O4",
        notYet: "Les températures de maintien manquent ou sont fausses.",
        meets: "Froid à 41°F (5°C) ou moins et chaud à 135°F (57°C) ou plus, vérifiés au thermomètre.",
        exceeds: "Ajoute un horaire de vérification et un registre."
      },
      {
        name: "Cuisson et refroidissement",
        objective: "O5",
        notYet: "Les chiffres de cuisson ou de refroidissement manquent ou sont faux.",
        meets: "Donne les bonnes températures de cuisson et les deux limites de temps de refroidissement.",
        exceeds: "Ajoute la règle de réchauffage et comment refroidir vite les aliments."
      },
      {
        name: "Maladie et règle locale de la carte",
        objective: "O6",
        notYet: "Aucun symptôme de maladie listé, ou pas de règle de la carte en haut.",
        meets: "Liste les symptômes à signaler ainsi que le délai, la durée et les cours acceptés pour la carte locale.",
        exceeds: "Nomme la page du service de santé où la règle a été trouvée."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui obtiennent une carte de manipulateur d'aliments par un cours accrédité dans les 60 jours",
      "Apprenants qui trouvent ou gardent un emploi dans la restauration dans les 90 jours (questionnaire de suivi)",
      "Les employeurs partenaires signalent moins d'erreurs de sécurité alimentaire lors des inspections sanitaires ou des contrôles de service"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour lire les leçons",
      "Un évier avec du savon pour s'entraîner à se laver les mains",
      "Un thermomètre alimentaire (facultatif mais utile)",
      "Du papier et un stylo pour la carte de poche et la Liste de contrôle pour un service sûr",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites une démonstration de lavage des mains en direct et chronométrez les 20 secondes ensemble.",
      "Utilisez des images ou des boîtes vides pour l'exercice des étagères du réfrigérateur ; aucun aliment cru n'est nécessaire.",
      "Rappelez aux apprenants que les chiffres de la cuisine à la maison diffèrent de ceux de la restauration, et que c'est le code de leur service de santé qui compte.",
      "Aidez chaque apprenant à trouver la règle de la carte de son propre État ou comté ; elle change d'un endroit à l'autre.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
