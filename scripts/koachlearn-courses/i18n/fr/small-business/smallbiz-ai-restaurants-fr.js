"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-restaurants.js). See scripts/koachlearn-courses/README.md, "Translations".

const FDA_ALLERGENS = { name: "FDA : allergies alimentaires (les neuf allergènes alimentaires majeurs, en anglais)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA : Food Code, le code alimentaire (en anglais)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC : règle sur les avis et témoignages de consommateurs, questions et réponses (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "L'IA pour les restaurants",
  skills: "Rédiger des descriptions de plats, Construire un tableau des allergènes à partir des recettes, Faire des listes de préparation et de commande, Préparer les plannings du personnel, Répondre aux avis, Planifier des plats du jour",
  outcome: "utiliser l'IA pour gérer l'arrière-boutique d'un petit restaurant ou d'un food truck : rédiger des descriptions de plats, construire et vérifier un tableau des allergènes à partir de vos propres recettes, faire des listes de préparation et de commande à partir de vos ventes, préparer un planning du personnel équitable et répondre honnêtement aux avis.",
  about: [
    "Ce cours s'adresse aux patrons, gérants et cuisiniers de petits restaurants, cafés, food trucks, traiteurs et cuisines familiales. Beaucoup de nos élèves tiennent des restaurants familiaux ou issus de minorités où le patron cuisine aussi, passe les commandes et répond au téléphone.",
    "Vous utiliserez un assistant d'IA gratuit et un tableur pour gagner du temps sur l'écriture, la planification et l'administration. Les règles d'hygiène et sur les allergènes viennent de sources officielles et de vos services sanitaires locaux, pas de l'IA ; ce cours vous montre où chercher.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Construisez un kit pour votre restaurant : les descriptions de cinq plats, un tableau des allergènes pour ces cinq plats construit à partir de vos vraies recettes et des étiquettes des ingrédients (vérifié par vous avec les neuf allergènes majeurs de la FDA), une liste de préparation et une liste de commande pour une semaine d'après vos ventes, un projet de planning du personnel, et des réponses à un bon et à un mauvais avis.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des patrons, gérants et cuisiniers de petits restaurants, cafés, food trucks, traiteurs et cuisines familiales, souvent des entreprises familiales ou issues de minorités, où le patron cuisine aussi, passe les commandes et répond au téléphone.",
    startingPoint: "Ils savent cuisiner, gérer un service et prendre les commandes. Beaucoup utilisent un téléphone et une caisse enregistreuse, mais ont peu ou pas d'expérience des assistants d'IA ou des formules de tableur.",
    gap: "L'écriture, la planification et l'administration prennent des heures que le patron n'a pas. Les apprenants doivent utiliser l'IA pour gagner ce temps tout en gardant exactes et honnêtes les informations sur les allergènes, les règles du travail et les avis, car une erreur peut nuire à un client ou enfreindre une règle.",
    constraints: [
      "Temps : les patrons font de longues journées, donc chaque leçon dure environ 5 minutes",
      "Appareils : souvent un téléphone ou un seul ordinateur partagé au bureau",
      "Les règles d'hygiène et sur les allergènes viennent de la FDA et des services sanitaires locaux, pas de l'IA",
      "Les règles du travail sur les pauses, les heures supplémentaires et les mineurs dépendent de l'État et de la ville",
      "Vie privée : pas de numéros de sécurité sociale, de salaires avec les noms ni de notes privées sur les employés dans les outils d'IA"
    ],
    prerequisites: "Aucun. Les débutants avec les assistants d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des vrais ingrédients et de la méthode d'un plat", action: "rédiger une courte description de plat avec l'aide de l'IA et retirer tout ce qui n'est pas vrai", standard: "avec chaque mot d'ingrédient conforme à votre recette" },
    { id: "O2", condition: "À partir de vos propres recettes et des étiquettes de ce que vous achetez", action: "construire un tableau des allergènes qui indique les neuf allergènes majeurs de la FDA pour chaque plat", standard: "avec chaque plat vérifié par une deuxième personne" },
    { id: "O3", condition: "À partir de vos ventes moyennes par jour et des portions par fournée", action: "créer dans un tableur une liste de préparation et une liste de commande pour la semaine", standard: "avec les fournées arrondies au-dessus et ajustées pour les événements, les week-ends et la météo" },
    { id: "O4", condition: "À partir de vos horaires, de vos services et des prénoms et disponibilités des employés", action: "préparer un planning hebdomadaire avec l'IA et vérifier la couverture, l'équité et les règles du travail", standard: "sans aucune information privée sur les employés dans la demande" },
    { id: "O5", condition: "Face à une question de client ou à un bon ou mauvais avis", action: "rédiger une réponse calme et honnête avec l'aide de l'IA", standard: "avec chaque affirmation vraie et sans faux avis ni avis payés" },
    { id: "O6", condition: "À partir d'ingrédients en surplus ou de saison", action: "planifier un plat du jour, calculer son coût d'assiette et fixer un prix avec un bénéfice", standard: "avec les allergènes vérifiés et le plat ajouté à la liste de préparation" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Menu, allergènes et listes de cuisine",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rédiger des descriptions de plats",
          minutes: 5,
          goal: "Rédiger avec l'aide de l'IA des descriptions de plats courtes, appétissantes et exactes.",
          text: [
            "Une bonne description de plat dit ce qu'il y a dedans, comment il est cuisiné et ce qui le rend spécial, en 10 à 25 mots. \"Riz jollof mijoté dans une sauce tomate et piment, servi avec des bananes plantains frites et une cuisse de poulet grillée.\"",
            "Donnez à l'IA les vrais ingrédients et la vraie méthode : \"Écris une description de 20 mots pour : curry de chèvre avec os, mijoté 4 heures avec piment antillais, thym et pommes de terre, servi avec du riz blanc. Mots simples et chaleureux.\" Demandez trois versions et choisissez-en une.",
            "Vérifiez-la. L'IA peut ajouter des ingrédients que vous n'utilisez pas (\"aux noix de cajou\") ou des mots comme \"bio\" ou \"fait maison\" qui ne sont pas vrais. Un mauvais ingrédient sur un menu peut mettre en danger une personne allergique."
          ],
          steps: ["Écrivez les vrais ingrédients et la méthode de cuisson.", "Demandez à l'IA trois courtes descriptions.", "Choisissez-en une et vérifiez chaque mot d'ingrédient.", "Retirez tout ce qui n'est pas vrai, comme \"bio\"."],
          words: [["Description de plat", "le court texte sous le nom d'un plat qui dit aux clients ce que c'est."]],
          slides: [
            { title: "Une bonne description", bullets: ["Ce qu'il y a dedans", "Comment c'est cuisiné", "Ce qui le rend spécial, en 10 à 25 mots"] },
            { title: "Donnez à l'IA la vraie recette", bullets: ["Ingrédients et méthode", "Demandez trois versions"] },
            { title: "Vérifiez chaque mot", bullets: ["Aucun ingrédient que vous n'utilisez pas", "Pas de \"bio\" ni de \"fait maison\" si ce n'est pas vrai", "Un mauvais ingrédient peut nuire à un client allergique"] }
          ],
          tryIt: "Rédigez avec l'aide de l'IA les descriptions de cinq de vos plats. Vérifiez chaque mot d'ingrédient par rapport à votre recette.",
          youCanNow: "rédiger avec l'aide de l'IA des descriptions de plats exactes et appétissantes.",
          quickCheck: [
            { objective: "O1", q: "Quelles sont les trois choses que dit une bonne description de plat ?", options: ["Ce que contient le plat, comment il est cuisiné et ce qui le rend spécial", "Le prix, le nom du cuisinier et la taille de l'assiette", "Les calories, le fournisseur et la date", "Seulement le nom du plat en majuscules"], answer: 0, why: "La leçon dit qu'une bonne description dit ce que contient le plat, comment il est cuisiné et ce qui le rend spécial." },
            { objective: "O1", q: "L'IA écrit « tortillas bio faites maison » mais vous achetez des tortillas ordinaires. Que faites-vous ?", options: ["Vous gardez la phrase parce qu'elle sonne mieux", "Vous retirez « faites maison » et « bio » parce que ce n'est pas vrai", "Vous ajoutez d'autres mots comme « artisanales »", "Vous demandez à l'IA de l'écrire en majuscules"], answer: 1, why: "Les mots du menu doivent être vrais, donc vous retirez tout ce que l'IA a ajouté et que vous ne faites pas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire un tableau des allergènes, en toute sécurité",
          minutes: 6,
          goal: "Construire un tableau des allergènes à partir de vos recettes et étiquettes, vérifié par vous.",
          text: [
            "La FDA (l'agence américaine des aliments et des médicaments) liste neuf allergènes alimentaires majeurs : lait, œufs, poisson, crustacés, fruits à coque, arachides, blé, soja et sésame. Les clients allergiques comptent sur vous pour savoir ce qu'il y a dans chaque plat.",
            "Faites un tableau : les plats sur le côté, les neuf allergènes en haut. Remplissez-le à partir de vos vraies recettes ET des étiquettes de tout ce que vous achetez, car les sauces, mélanges d'épices et pains cachent souvent des allergènes. L'IA peut vous aider à créer le tableau et vous rappeler quels ingrédients contiennent souvent un allergène, mais elle ne connaît pas les produits de vos fournisseurs. Vous et vos étiquettes, si.",
            "Mettez le tableau à jour à chaque changement de recette ou de fournisseur. Apprenez au personnel à dire \"Je vérifie\" et à demander en cuisine, sans jamais deviner. Vos services sanitaires locaux et le Food Code de la FDA ont des règles sur l'hygiène et les allergènes ; vérifiez ce qui s'applique chez vous. Hors des États-Unis, renseignez-vous auprès de l'autorité sanitaire de votre pays."
          ],
          steps: ["Listez vos plats et chaque ingrédient de chacun.", "Lisez l'étiquette de chaque ingrédient acheté.", "Cochez chacun des neuf allergènes pour chaque plat.", "Faites vérifier le tableau par une deuxième personne.", "Mettez-le à jour quand les recettes ou les fournisseurs changent."],
          words: [["Allergène", "un aliment qui peut provoquer une réaction allergique grave chez certaines personnes."], ["Contact croisé", "quand un allergène passe dans un autre aliment par des surfaces, de l'huile ou des ustensiles partagés."], ["Food Code", "les règles modèles d'hygiène alimentaire de la FDA, adoptées par de nombreux États et comtés américains."]],
          slides: [
            { title: "Les neuf allergènes majeurs de la FDA", bullets: ["Lait, œufs, poisson, crustacés", "Fruits à coque, arachides, blé", "Soja, sésame"] },
            { title: "Construisez le tableau à partir des faits", bullets: ["Plats sur le côté, allergènes en haut", "Vos recettes ET chaque étiquette d'ingrédient", "L'IA crée le tableau ; elle ne connaît pas vos fournisseurs"] },
            { title: "Gardez-le juste", bullets: ["Une deuxième personne le vérifie", "Mise à jour quand les recettes ou fournisseurs changent", "Le personnel ne devine jamais : \"Je vérifie\""] },
            { title: "Les règles chez vous", bullets: ["Vos services sanitaires locaux", "Le Food Code de la FDA"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Demandez à l'IA de créer un tableau des allergènes vide pour cinq plats, avec les neuf allergènes en colonnes. Remplissez-le vous-même à partir de vos recettes et étiquettes, puis faites-le vérifier par quelqu'un.",
          youCanNow: "construire et tenir à jour un tableau des allergènes à partir de vos propres recettes et étiquettes.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui se trouve en haut du tableau des allergènes dans cette leçon ?", options: ["Vos prix", "Les noms de vos fournisseurs", "Les neuf allergènes majeurs", "Les noms de vos employés"], answer: 2, why: "Les plats vont sur le côté et les neuf allergènes en haut, en colonnes." },
            { objective: "O2", q: "Votre fournisseur change la marque du mélange d'épices que vous utilisez. Que faites-vous ?", options: ["Rien, les mélanges d'épices ne contiennent jamais d'allergènes", "Vous demandez à l'IA si la nouvelle marque contient des allergènes et vous la croyez", "Vous attendez qu'un client pose la question", "Vous lisez la nouvelle étiquette et mettez le tableau à jour"], answer: 3, why: "L'IA ne connaît pas les produits de vos fournisseurs ; vous mettez le tableau à jour à partir de la nouvelle étiquette." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Listes de préparation et de commande à partir de vos ventes",
          minutes: 5,
          goal: "Faire une liste de préparation et une liste de commande hebdomadaires à partir de vos ventes.",
          text: [
            "Trop préparer gaspille de la nourriture ; pas assez veut dire \"désolé, il n'y en a plus\". Partez du nombre de chaque plat vendu par jour. Votre caisse peut souvent l'afficher, sinon tenez un simple décompte.",
            "Dans un tableur : Plat, Moyenne vendue par jour, Portions par fournée, Fournées nécessaires. Puis listez les ingrédients par portion pour savoir quoi commander. Demandez à l'IA de l'aide pour les formules : \"Écris une formule Google Sheets qui arrondit au-dessus les fournées nécessaires : moyenne vendue divisée par portions par fournée.\" (=ROUNDUP(B2/C2,0) est une façon de faire ; en français : =ARRONDI.SUP(B2/C2;0).)",
            "Ajustez selon ce que vous savez : week-ends, événements, météo, jours fériés. L'IA peut proposer une mise en page de liste de préparation et une liste de contrôle, mais ce sont vos chiffres et votre expérience qui fixent les quantités."
          ],
          steps: ["Obtenez la moyenne vendue par jour pour chaque plat.", "Ajoutez les portions par fournée et calculez les fournées avec ROUNDUP.", "Listez les ingrédients par portion et totalisez la commande.", "Ajustez pour les week-ends, les événements et la météo."],
          words: [["Liste de préparation", "la liste de ce que la cuisine doit préparer avant le service."], ["Niveau de base", "la quantité d'un article que vous voulez avoir au début du service."], ["Fournée", "une préparation d'une recette qui donne un nombre fixe de portions."]],
          slides: [
            { title: "Gaspillage ou rupture", bullets: ["Trop préparer gaspille", "Pas assez déçoit les clients", "Partez des ventes par plat"] },
            { title: "Une fiche de préparation simple", bullets: ["Plat, vendus par jour, portions par fournée", "Fournées = ROUNDUP(vendus / portions, 0)", "Ingrédients par portion -> liste de commande"] },
            { title: "Servez-vous de ce que vous savez", bullets: ["Week-ends, événements, météo", "L'IA aide pour la mise en page ; vous fixez les quantités"] }
          ],
          tryIt: "Faites une fiche de préparation pour cinq plats avec les ventes par jour, les portions par fournée et une formule ROUNDUP pour les fournées. Transformez-la en liste de commande pour une semaine.",
          youCanNow: "construire des listes de préparation et de commande à partir de vos propres ventes.",
          quickCheck: [
            { objective: "O3", q: "Quel problème cause une préparation trop grande ?", options: ["Du gaspillage de nourriture", "Un plat en rupture", "Des heures d'ouverture plus longues", "Un loyer plus élevé"], answer: 0, why: "La leçon dit que trop préparer gaspille de la nourriture et que pas assez préparer fait manquer des plats." },
            { objective: "O3", q: "Un grand festival a lieu en ville ce week-end. Que faites-vous de votre liste de préparation ?", options: ["Vous gardez exactement les chiffres habituels", "Vous augmentez les quantités d'après ce que vous savez", "Vous laissez l'IA fixer les quantités sans rien changer", "Vous arrêtez de faire une liste de préparation"], answer: 1, why: "Vous ajustez pour les événements, les week-ends et la météo, car c'est votre expérience qui fixe les quantités." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Menu, allergènes et listes de cuisine",
        questions: [
          { objective: "O1", q: "La description de l'IA ajoute \"aux noix de cajou\" mais votre plat n'en contient pas. Que faites-vous ?", options: ["La garder, ça sonne bien", "La retirer", "Ajouter des noix de cajou", "L'ignorer"], answer: 1, why: "Un mauvais ingrédient peut nuire aux clients allergiques et tromper tout le monde." },
          { objective: "O2", q: "Combien d'allergènes alimentaires majeurs la FDA liste-t-elle ?", options: ["Vingt", "Trois", "Quatorze", "Neuf"], answer: 3, why: "La FDA en liste neuf, dont le sésame." },
          { objective: "O2", q: "D'où viennent les informations de votre tableau des allergènes ?", options: ["De vos recettes et des étiquettes de ce que vous achetez", "D'une supposition de l'IA", "Du menu d'un concurrent", "Des clients"], answer: 0, why: "Seules vos recettes et vos étiquettes montrent ce qu'il y a vraiment dans vos plats." },
          { objective: "O2", q: "Un client demande si un plat contient du sésame et vous n'êtes pas sûr. Vous :", options: ["Demandez à l'IA", "Répondez non au hasard", "Dites \"Je vérifie\" et consultez la cuisine et le tableau", "Dites que ça va"], answer: 2, why: "Ne devinez jamais pour les allergènes." },
          { objective: "O3", q: "Vous vendez 22 par jour et une fournée donne 8 portions. Avec ROUNDUP, combien de fournées ?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2,75, arrondi au-dessus à 3." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Personnel, clients et croissance",
      lessons: [
        {
          objectives: ["O4"],
          title: "Préparer un planning du personnel",
          minutes: 5,
          goal: "Préparer un planning hebdomadaire avec l'aide de l'IA, puis le vérifier selon vos règles.",
          text: [
            "Donnez les faits à l'IA : vos horaires, le nombre de personnes nécessaires à chaque service, les disponibilités et les rôles de chaque employé, et vos règles. \"Prépare un planning hebdomadaire pour ma taqueria, ouverte de 11 h à 21 h du mardi au dimanche. Il faut 2 cuisiniers et 2 serveurs au déjeuner et au dîner. Voici les disponibilités : [prénoms seulement].\"",
            "Vérifiez vous-même le projet. Assurez-vous qu'il est équitable, qu'il couvre les heures de pointe et qu'il respecte le droit du travail sur les pauses, les heures supplémentaires et les mineurs. Ces règles dépendent de votre État et de votre ville (ou de votre pays) ; renseignez-vous auprès du service du travail ou d'un professionnel. L'IA ne les connaît pas de façon fiable.",
            "Ne mettez pas de numéros de sécurité sociale, de salaires avec des noms ni de notes privées sur les employés dans les outils d'IA. Les prénoms et les disponibilités suffisent."
          ],
          steps: ["Listez les services et le nombre de personnes nécessaires.", "Listez les employés par prénom avec leurs disponibilités et rôles.", "Demandez un projet à l'IA.", "Vérifiez l'équité, la couverture et les règles du travail de votre État.", "Affichez le planning final."],
          words: [["Disponibilités", "les jours et heures où un employé peut travailler."], ["Heures supplémentaires", "des heures en plus qui peuvent exiger un salaire plus élevé selon le droit du travail."], ["Couverture", "avoir assez de personnel à chaque service."]],
          slides: [
            { title: "Donnez les faits à l'IA", bullets: ["Horaires et personnel nécessaire par service", "Prénoms, disponibilités et rôles"] },
            { title: "Vous vérifiez le projet", bullets: ["Équitable et couvre les heures de pointe", "Pauses, heures sup et mineurs : vérifiez les règles locales"] },
            { title: "Protégez les données des employés", bullets: ["Pas de numéro de sécurité sociale ni de salaire avec un nom", "Les prénoms et les disponibilités suffisent"] }
          ],
          tryIt: "Préparez le planning de la semaine prochaine avec l'IA, avec les prénoms et les disponibilités. Vérifiez la couverture et l'équité, et notez où vous vérifierez les règles sur les pauses et les heures supplémentaires.",
          youCanNow: "préparer un planning du personnel avec l'IA et le vérifier selon vos besoins et le droit du travail.",
          quickCheck: [
            { objective: "O4", q: "De quelles informations l'IA a-t-elle besoin pour préparer un planning ?", options: ["Les numéros de sécurité sociale et les salaires des employés", "Seulement le nom du restaurant", "Vos horaires, le nombre de personnes par service, et les disponibilités et rôles des employés", "Des notes privées sur chaque employé"], answer: 2, why: "Les horaires, les besoins par service, les disponibilités et les rôles suffisent ; les informations privées restent en dehors." },
            { objective: "O4", q: "Le projet de l'IA met un employé de 16 ans sur un service tardif. Que faites-vous ?", options: ["Vous l'affichez tel quel", "Vous demandez à l'IA si c'est légal et vous croyez sa réponse", "Vous retirez cet employé du planning pour toujours", "Vous vérifiez les règles de votre État pour les mineurs et corrigez le projet"], answer: 3, why: "Les règles sur les mineurs dépendent de votre État, donc vous les vérifiez et corrigez le planning vous-même." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Répondre aux avis et aux messages des clients",
          minutes: 5,
          goal: "Répondre vite et honnêtement aux avis et aux questions courantes des clients.",
          text: [
            "Les clients demandent toujours les mêmes choses : horaires, stationnement, réservations, traiteur, options végétaliennes, allergies. Utilisez l'IA pour transformer vos vraies réponses en courtes réponses prêtes à coller. Pour les questions d'allergie, renvoyez toujours à votre tableau des allergènes vérifié et au personnel.",
            "Pour les avis : remerciez brièvement pour les bons avis et citez le plat. Pour les mauvais, restez calme, excusez-vous pour l'expérience, dites ce que vous corrigez, et invitez la personne à vous contacter. Ne vous disputez pas en public. Si vous êtes contrarié, laissez l'IA rédiger une version calme, puis vérifiez que chaque phrase est vraie.",
            "N'écrivez jamais de faux avis et ne payez jamais uniquement pour des avis positifs. La règle de la FTC (l'agence américaine de protection des consommateurs) sur les avis l'interdit, y compris les faux avis écrits par l'IA."
          ],
          steps: ["Écrivez les vraies réponses à vos principales questions de clients.", "Demandez à l'IA d'en faire de courtes réponses prêtes à coller.", "Rédigez calmement les réponses aux avis avec l'IA, puis vérifiez-les.", "Ne créez et n'achetez jamais d'avis."],
          words: [["Avis", "la note et le commentaire publics d'un client."], ["Traiteur", "fournir des repas pour un événement en dehors du service habituel en salle."]],
          slides: [
            { title: "Réponses prêtes à coller", bullets: ["Horaires, stationnement, réservations, traiteur", "Questions d'allergie : utilisez votre tableau vérifié"] },
            { title: "Répondre aux avis", bullets: ["Bon : remerciez, citez le plat", "Mauvais : calme, excuses, correction, invitation à contacter", "Vérifiez que chaque phrase est vraie"] },
            { title: "Pas de faux avis", bullets: ["La règle de la FTC interdit les faux avis", "Y compris ceux écrits par l'IA"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Demandez à l'IA de rédiger des réponses à un bon et à un mauvais avis (réels ou inventés, par exemple un plat froid un vendredi chargé). Rendez chaque phrase vraie et dans votre style.",
          youCanNow: "répondre aux questions et aux avis des clients vite, calmement et honnêtement.",
          quickCheck: [
            { objective: "O5", q: "Comment répondre à un bon avis ?", options: ["Remercier brièvement et mentionner le plat", "L'ignorer", "Proposer de l'argent pour un autre avis", "Écrire une longue histoire sur votre restaurant"], answer: 0, why: "La leçon dit de remercier brièvement pour les bons avis et de mentionner le plat." },
            { objective: "O5", q: "Vous êtes en colère à cause d'un mauvais avis injuste. Que faites-vous ?", options: ["Vous vous disputez en public avec le client", "Vous laissez l'IA rédiger une réponse calme, puis vérifiez que chaque affirmation est vraie", "Vous publiez de faux bons avis pour le cacher", "Vous supprimez la page de votre entreprise"], answer: 1, why: "L'IA peut vous aider à rester calme, et vous vérifiez que la réponse est vraie ; on ne se dispute jamais en public et on ne fait pas de faux avis." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Planifier des plats du jour avec ce que vous avez",
          minutes: 5,
          goal: "Planifier un plat du jour hebdomadaire qui réduit le gaspillage et garde un bénéfice.",
          text: [
            "Les plats du jour permettent d'écouler du stock avant qu'il ne s'abîme, de tester de nouveaux plats et de faire revenir les habitués. Regardez ce que vous avez trop commandé ou ce qui est de saison.",
            "Demandez à l'IA : \"J'ai trop de bananes plantains, de haricots noirs et de cuisses de poulet cette semaine. Propose trois plats du jour qui vont avec mon menu caribéen et utilisent surtout ces produits.\" Choisissez-en un, calculez son coût (ingrédients par assiette) et fixez un prix qui laisse un bénéfice.",
            "Écrivez la description du plat, vérifiez ses allergènes avec la méthode de votre tableau, ajoutez-le à votre liste de préparation, et publiez-le avec une photo du vrai plat."
          ],
          steps: ["Listez les ingrédients en trop ou de saison.", "Demandez à l'IA des idées de plats du jour adaptées à votre menu.", "Calculez le coût de l'assiette et fixez un prix avec bénéfice.", "Vérifiez les allergènes et ajoutez-le à la liste de préparation.", "Publiez avec une vraie photo."],
          words: [["Coût de l'assiette", "le coût des ingrédients d'une portion."], ["Ratio coût matière", "le coût de l'assiette divisé par le prix au menu, multiplié par 100."]],
          slides: [
            { title: "Pourquoi des plats du jour", bullets: ["Écouler le stock avant qu'il ne s'abîme", "Tester de nouveaux plats", "Faire revenir les habitués"] },
            { title: "L'IA pour les idées", bullets: ["Listez ce que vous avez en trop", "Demandez des plats adaptés à votre menu"] },
            { title: "Avant de publier", bullets: ["Calculez le coût de l'assiette et fixez un prix", "Vérifiez les allergènes ; ajoutez à la liste de préparation", "Utilisez une vraie photo"] }
          ],
          tryIt: "Tâche finale : construisez votre kit de restaurant : cinq descriptions de plats, un tableau des allergènes tiré de vos recettes et étiquettes, les listes de préparation et de commande d'une semaine, un projet de planning, deux réponses à des avis, et un plat du jour avec son coût d'assiette.",
          youCanNow: "utiliser l'IA en toute sécurité pour la planification, l'administration et la communication avec les clients de votre restaurant.",
          quickCheck: [
            { objective: "O6", q: "Quelle est une raison de proposer un plat du jour ?", options: ["Augmenter tous les prix", "Occuper les heures du personnel", "Écouler du stock en surplus avant qu'il ne s'abîme", "Éviter de vérifier les allergènes"], answer: 2, why: "Un plat du jour peut écouler du stock en surplus, tester de nouveaux plats et faire revenir les habitués." },
            { objective: "O6", q: "L'IA propose trois plats du jour avec vos bananes plantains en trop. Que faites-vous ensuite ?", options: ["Vous publiez les trois tout de suite avec des photos de banque d'images", "Vous demandez à l'IA de fixer le prix", "Vous sautez le calcul du coût parce que c'est pour une semaine seulement", "Vous en choisissez un, calculez le coût d'assiette et fixez un prix avec un bénéfice"], answer: 3, why: "Vous calculez le coût d'assiette et fixez un prix avec un bénéfice, puis vérifiez les allergènes et ajoutez le plat à la liste de préparation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Personnel, clients et croissance",
        questions: [
          { objective: "O4", q: "Où vérifiez-vous les règles sur les pauses et les heures supplémentaires ?", options: ["Auprès du service du travail de votre État ou d'un professionnel", "Dans le projet de l'IA", "Auprès d'un client", "Dans une publication sur les réseaux"], answer: 0, why: "Les règles du travail dépendent de votre État et de votre ville." },
          { objective: "O4", q: "Quelles informations sur les employés mettre dans la demande de planning à l'IA ?", options: ["Les adresses personnelles", "Les numéros de sécurité sociale", "Les salaires avec les noms", "Les prénoms et les disponibilités"], answer: 3, why: "Seulement le nécessaire, rien de privé." },
          { objective: "O5", q: "Un client demande par message si un plat est sans arachide. Votre réponse doit s'appuyer sur :", options: ["Une supposition de l'IA", "Votre tableau des allergènes vérifié et le personnel", "La photo du menu", "Votre mémoire seulement"], answer: 1, why: "Les réponses sur les allergènes viennent de votre tableau vérifié." },
          { objective: "O5", q: "Selon la règle de la FTC, qu'est-ce qui est interdit ?", options: ["Écrire de faux avis avec l'IA", "Remercier un client pour son avis", "Répondre à un mauvais avis", "Demander aux clients des avis honnêtes"], answer: 0, why: "Les faux avis, y compris ceux écrits par l'IA, sont interdits." },
          { objective: "O6", q: "Un plat du jour coûte 3,50 $ d'ingrédients et se vend 14 $. Quel est le ratio coût matière ?", options: ["14 %", "25 %", "35 %", "50 %"], answer: 1, why: "3,50 / 14 = 0,25, soit 25 %." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les restaurants",
    questions: [
      { objective: "O1", q: "Une bonne description de plat fait environ :", options: ["200 mots", "10 à 25 mots", "Une lettre", "Une page entière"], answer: 1, why: "Une description courte se lit vite." },
      { objective: "O1", q: "Que donnez-vous à l'IA pour écrire une description de plat ?", options: ["Rien", "Vos coordonnées bancaires", "Les noms des clients", "Les vrais ingrédients et la méthode"], answer: 3, why: "Des faits réels donnent des descriptions exactes." },
      { objective: "O1", q: "Pourquoi vérifier chaque mot d'ingrédient écrit par l'IA ?", options: ["Ce n'est pas utile", "Pour allonger le texte", "Seulement pour l'orthographe", "Un mauvais ingrédient peut nuire à un client allergique"], answer: 3, why: "L'exactitude est une question de sécurité." },
      { objective: "O2", q: "Lequel fait partie des neuf allergènes majeurs de la FDA ?", options: ["Le riz", "Le sésame", "Le maïs", "Le poulet"], answer: 1, why: "Le sésame a été ajouté comme neuvième." },
      { objective: "O2", q: "Pourquoi lire l'étiquette de chaque ingrédient acheté ?", options: ["Pour s'amuser", "Pour connaître le prix", "Les sauces et mélanges peuvent cacher des allergènes", "Ce n'est pas utile"], answer: 2, why: "Les allergènes cachés sont fréquents dans les ingrédients préparés." },
      { objective: "O2", q: "Quand mettre à jour votre tableau des allergènes ?", options: ["Quand une recette ou un fournisseur change", "Une fois tous les dix ans", "Jamais", "Seulement après une plainte"], answer: 0, why: "Un changement peut ajouter des allergènes." },
      { objective: "O2", q: "Qu'est-ce que le contact croisé ?", options: ["Un appel téléphonique", "Deux employés qui discutent", "Un allergène qui passe dans un autre aliment par des ustensiles ou de l'huile partagés", "Un changement de menu"], answer: 2, why: "Les surfaces partagées peuvent propager les allergènes." },
      { objective: "O2", q: "Qui fixe les règles d'hygiène de votre restaurant ?", options: ["Vos services sanitaires locaux, souvent sur la base du Food Code de la FDA", "L'IA", "Vos clients", "Un site d'avis"], answer: 0, why: "Ce sont les autorités officielles qui fixent les règles." },
      { objective: "O3", q: "Une liste de préparation, c'est :", options: ["Un planning du personnel", "Ce que la cuisine doit préparer avant le service", "Un avis", "Un formulaire fiscal"], answer: 1, why: "Elle guide la préparation en cuisine." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) donne :", options: ["Les allergènes", "Le bénéfice", "Les heures du personnel", "Le nombre de fournées entières nécessaires, arrondi au-dessus"], answer: 3, why: "Elle arrondit le nombre de fournées au-dessus." },
      { objective: "O3", q: "Qui fixe les quantités finales à préparer ?", options: ["Vous, d'après vos chiffres et votre expérience", "L'IA seule", "Un fournisseur", "Les clients"], answer: 0, why: "L'IA aide pour la mise en page ; vous décidez des quantités." },
      { objective: "O3", q: "Quelle est une bonne raison d'ajuster la préparation ?", options: ["Aucune", "Une nouvelle police d'écriture", "L'IA le dit", "Un événement local ce week-end"], answer: 3, why: "Les événements changent la demande." },
      { objective: "O4", q: "Le projet de planning de l'IA donne 7 services à un employé. Vous :", options: ["L'ignorez", "L'affichez", "Vérifiez l'équité et les règles du travail, puis le corrigez", "Demandez à l'employé de démissionner"], answer: 2, why: "Vous vérifiez chaque projet." },
      { objective: "O4", q: "L'IA est-elle une source fiable pour la loi sur les heures supplémentaires de votre État ?", options: ["Oui, toujours", "Non, vérifiez auprès du service du travail de l'État", "Seulement le week-end", "Seulement pour les mineurs"], answer: 1, why: "Le droit du travail exige une source officielle." },
      { objective: "O5", q: "Un mauvais avis se plaint d'un plat froid. Une bonne réponse :", options: ["Offre de l'argent contre un meilleur avis", "Se dispute en public", "Publie les coordonnées du client", "S'excuse, dit ce que vous corrigez, invite à vous contacter"], answer: 3, why: "Des réponses calmes et honnêtes créent la confiance." },
      { objective: "O5", q: "Payer les clients seulement s'ils laissent 5 étoiles, c'est :", options: ["Obligatoire", "Du marketing malin", "Interdit par la règle de la FTC sur les avis", "Acceptable"], answer: 2, why: "Les récompenses liées à un avis positif sont interdites." },
      { objective: "O6", q: "Une bonne utilisation d'un plat du jour est de :", options: ["Écouler du stock avant qu'il ne s'abîme", "Cacher de la vieille nourriture", "Augmenter tous les prix", "Sauter la vérification des allergènes"], answer: 0, why: "Les plats du jour réduisent le gaspillage." },
      { objective: "O6", q: "Qu'est-ce que le coût de l'assiette ?", options: ["Le prix de la vaisselle", "Le coût des ingrédients d'une portion", "Le loyer", "Un pourboire"], answer: 1, why: "C'est le coût des ingrédients par assiette." },
      { objective: "O6", q: "Avant de publier un plat du jour, vous devez :", options: ["Sauter le calcul du prix", "Vérifier les allergènes et l'ajouter à la liste de préparation", "Utiliser une photo d'un autre plat trouvée en ligne", "Promettre qu'il est bio"], answer: 1, why: "La sécurité et la planification passent d'abord." },
      { objective: "O6", q: "Le ratio coût matière, c'est :", options: ["Le coût de l'assiette divisé par le prix au menu, multiplié par 100", "Le loyer divisé par les ventes", "Les pourboires multipliés par le personnel", "Le prix plus la taxe"], answer: 0, why: "Il montre quelle part du prix correspond aux ingrédients." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Descriptions de plats exactes",
        objective: "O1",
        notYet: "Une description cite un ingrédient ou une affirmation qui n'est pas dans le plat.",
        meets: "Cinq descriptions courtes, avec chaque mot d'ingrédient conforme à la recette.",
        exceeds: "Chacune dit aussi comment le plat est cuisiné et ce qui le rend spécial."
      },
      {
        name: "Tableau des allergènes vérifié",
        objective: "O2",
        notYet: "Le tableau est copié de l'IA ou il manque un plat ou un allergène.",
        meets: "Les cinq plats indiqués pour les neuf allergènes à partir des recettes et étiquettes, vérifiés par une deuxième personne.",
        exceeds: "Indique quels produits achetés cachent des allergènes et la date de la dernière mise à jour."
      },
      {
        name: "Listes de préparation et de commande",
        objective: "O3",
        notYet: "Les quantités sont devinées ou les fournées ne sont pas arrondies au-dessus.",
        meets: "Les listes de préparation et de commande d'une semaine, construites à partir des ventes, avec les fournées arrondies au-dessus.",
        exceeds: "Les quantités sont ajustées pour un événement, un week-end ou une météo précis."
      },
      {
        name: "Planning équitable et vérifié",
        objective: "O4",
        notYet: "Le planning laisse un service chargé en sous-effectif ou utilise des informations privées sur les employés.",
        meets: "Couvre chaque service de façon équitable, avec les prénoms seulement, et indique où les règles du travail ont été vérifiées.",
        exceeds: "Indique aussi les pauses et les règles éventuelles pour les mineurs, d'après la source de l'État."
      },
      {
        name: "Réponses honnêtes aux avis",
        objective: "O5",
        notYet: "Une réponse se dispute, fait une fausse promesse ou offre une récompense contre un avis.",
        meets: "Un bon et un mauvais avis reçoivent une réponse calme avec seulement des affirmations vraies.",
        exceeds: "La réponse au mauvais avis cite une vraie correction et invite le client à prendre contact."
      },
      {
        name: "Plat du jour chiffré",
        objective: "O6",
        notYet: "Le plat du jour n'a ni coût d'assiette ni prix.",
        meets: "Un plat du jour avec son coût d'assiette, un prix avec un bénéfice et les allergènes vérifiés.",
        exceeds: "Il est aussi ajouté à la liste de préparation et utilise du stock en surplus ou de saison."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Patrons qui disent utiliser leur tableau des allergènes et leurs listes de préparation en cuisine dans les 30 jours (enquête de suivi)",
      "Patrons qui signalent moins de gaspillage ou moins de ruptures dans les 30 jours",
      "Apprenants qui commencent un autre cours Koach Learn pour les petites entreprises dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit et un tableur gratuit comme Google Sheets",
      "Vos propres recettes, les étiquettes des ingrédients et les ventes d'une semaine",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez aux patrons d'apporter de vraies recettes et étiquettes, ou utilisez des exemples, pour que le tableau des allergènes soit construit à partir de vraies informations.",
      "Insistez sur le fait que les règles sur les allergènes, l'hygiène et le travail viennent de la FDA, des services sanitaires locaux et du service du travail de l'État, pas de l'IA.",
      "Rappelez aux apprenants de n'utiliser que les prénoms des employés et de ne jamais taper de numéros de sécurité sociale ni de salaires avec les noms.",
      "Organisez les séances en dehors des coups de feu, par exemple en milieu d'après-midi.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
