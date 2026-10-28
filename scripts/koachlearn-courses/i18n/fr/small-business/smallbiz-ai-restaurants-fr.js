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
  chapters: [
    {
      name: "Chapitre 1 : Menu, allergènes et listes de cuisine",
      lessons: [
        {
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
          youCanNow: "rédiger avec l'aide de l'IA des descriptions de plats exactes et appétissantes."
        },
        {
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
          youCanNow: "construire et tenir à jour un tableau des allergènes à partir de vos propres recettes et étiquettes."
        },
        {
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
          youCanNow: "construire des listes de préparation et de commande à partir de vos propres ventes."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Menu, allergènes et listes de cuisine",
        questions: [
          { q: "La description de l'IA ajoute \"aux noix de cajou\" mais votre plat n'en contient pas. Que faites-vous ?", options: ["La garder, ça sonne bien", "La retirer", "Ajouter des noix de cajou", "L'ignorer"], answer: 1, why: "Un mauvais ingrédient peut nuire aux clients allergiques et tromper tout le monde." },
          { q: "Combien d'allergènes alimentaires majeurs la FDA liste-t-elle ?", options: ["Vingt", "Trois", "Quatorze", "Neuf"], answer: 3, why: "La FDA en liste neuf, dont le sésame." },
          { q: "D'où viennent les informations de votre tableau des allergènes ?", options: ["De vos recettes et des étiquettes de ce que vous achetez", "D'une supposition de l'IA", "Du menu d'un concurrent", "Des clients"], answer: 0, why: "Seules vos recettes et vos étiquettes montrent ce qu'il y a vraiment dans vos plats." },
          { q: "Un client demande si un plat contient du sésame et vous n'êtes pas sûr. Vous :", options: ["Demandez à l'IA", "Répondez non au hasard", "Dites \"Je vérifie\" et consultez la cuisine et le tableau", "Dites que ça va"], answer: 2, why: "Ne devinez jamais pour les allergènes." },
          { q: "Vous vendez 22 par jour et une fournée donne 8 portions. Avec ROUNDUP, combien de fournées ?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2,75, arrondi au-dessus à 3." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Personnel, clients et croissance",
      lessons: [
        {
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
          youCanNow: "préparer un planning du personnel avec l'IA et le vérifier selon vos besoins et le droit du travail."
        },
        {
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
          youCanNow: "répondre aux questions et aux avis des clients vite, calmement et honnêtement."
        },
        {
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
          youCanNow: "utiliser l'IA en toute sécurité pour la planification, l'administration et la communication avec les clients de votre restaurant."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Personnel, clients et croissance",
        questions: [
          { q: "Où vérifiez-vous les règles sur les pauses et les heures supplémentaires ?", options: ["Auprès du service du travail de votre État ou d'un professionnel", "Dans le projet de l'IA", "Auprès d'un client", "Dans une publication sur les réseaux"], answer: 0, why: "Les règles du travail dépendent de votre État et de votre ville." },
          { q: "Quelles informations sur les employés mettre dans la demande de planning à l'IA ?", options: ["Les adresses personnelles", "Les numéros de sécurité sociale", "Les salaires avec les noms", "Les prénoms et les disponibilités"], answer: 3, why: "Seulement le nécessaire, rien de privé." },
          { q: "Un client demande par message si un plat est sans arachide. Votre réponse doit s'appuyer sur :", options: ["Une supposition de l'IA", "Votre tableau des allergènes vérifié et le personnel", "La photo du menu", "Votre mémoire seulement"], answer: 1, why: "Les réponses sur les allergènes viennent de votre tableau vérifié." },
          { q: "Selon la règle de la FTC, qu'est-ce qui est interdit ?", options: ["Écrire de faux avis avec l'IA", "Remercier un client pour son avis", "Répondre à un mauvais avis", "Demander aux clients des avis honnêtes"], answer: 0, why: "Les faux avis, y compris ceux écrits par l'IA, sont interdits." },
          { q: "Un plat du jour coûte 3,50 $ d'ingrédients et se vend 14 $. Quel est le ratio coût matière ?", options: ["14 %", "25 %", "35 %", "50 %"], answer: 1, why: "3,50 / 14 = 0,25, soit 25 %." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour les restaurants",
    questions: [
      { q: "Une bonne description de plat fait environ :", options: ["200 mots", "10 à 25 mots", "Une lettre", "Une page entière"], answer: 1, why: "Une description courte se lit vite." },
      { q: "Que donnez-vous à l'IA pour écrire une description de plat ?", options: ["Rien", "Vos coordonnées bancaires", "Les noms des clients", "Les vrais ingrédients et la méthode"], answer: 3, why: "Des faits réels donnent des descriptions exactes." },
      { q: "Pourquoi vérifier chaque mot d'ingrédient écrit par l'IA ?", options: ["Ce n'est pas utile", "Pour allonger le texte", "Seulement pour l'orthographe", "Un mauvais ingrédient peut nuire à un client allergique"], answer: 3, why: "L'exactitude est une question de sécurité." },
      { q: "Lequel fait partie des neuf allergènes majeurs de la FDA ?", options: ["Le riz", "Le sésame", "Le maïs", "Le poulet"], answer: 1, why: "Le sésame a été ajouté comme neuvième." },
      { q: "Pourquoi lire l'étiquette de chaque ingrédient acheté ?", options: ["Pour s'amuser", "Pour connaître le prix", "Les sauces et mélanges peuvent cacher des allergènes", "Ce n'est pas utile"], answer: 2, why: "Les allergènes cachés sont fréquents dans les ingrédients préparés." },
      { q: "Quand mettre à jour votre tableau des allergènes ?", options: ["Quand une recette ou un fournisseur change", "Une fois tous les dix ans", "Jamais", "Seulement après une plainte"], answer: 0, why: "Un changement peut ajouter des allergènes." },
      { q: "Qu'est-ce que le contact croisé ?", options: ["Un appel téléphonique", "Deux employés qui discutent", "Un allergène qui passe dans un autre aliment par des ustensiles ou de l'huile partagés", "Un changement de menu"], answer: 2, why: "Les surfaces partagées peuvent propager les allergènes." },
      { q: "Qui fixe les règles d'hygiène de votre restaurant ?", options: ["Vos services sanitaires locaux, souvent sur la base du Food Code de la FDA", "L'IA", "Vos clients", "Un site d'avis"], answer: 0, why: "Ce sont les autorités officielles qui fixent les règles." },
      { q: "Une liste de préparation, c'est :", options: ["Un planning du personnel", "Ce que la cuisine doit préparer avant le service", "Un avis", "Un formulaire fiscal"], answer: 1, why: "Elle guide la préparation en cuisine." },
      { q: "=ROUNDUP(B2/C2,0) donne :", options: ["Les allergènes", "Le bénéfice", "Les heures du personnel", "Le nombre de fournées entières nécessaires, arrondi au-dessus"], answer: 3, why: "Elle arrondit le nombre de fournées au-dessus." },
      { q: "Qui fixe les quantités finales à préparer ?", options: ["Vous, d'après vos chiffres et votre expérience", "L'IA seule", "Un fournisseur", "Les clients"], answer: 0, why: "L'IA aide pour la mise en page ; vous décidez des quantités." },
      { q: "Quelle est une bonne raison d'ajuster la préparation ?", options: ["Aucune", "Une nouvelle police d'écriture", "L'IA le dit", "Un événement local ce week-end"], answer: 3, why: "Les événements changent la demande." },
      { q: "Le projet de planning de l'IA donne 7 services à un employé. Vous :", options: ["L'ignorez", "L'affichez", "Vérifiez l'équité et les règles du travail, puis le corrigez", "Demandez à l'employé de démissionner"], answer: 2, why: "Vous vérifiez chaque projet." },
      { q: "L'IA est-elle une source fiable pour la loi sur les heures supplémentaires de votre État ?", options: ["Oui, toujours", "Non, vérifiez auprès du service du travail de l'État", "Seulement le week-end", "Seulement pour les mineurs"], answer: 1, why: "Le droit du travail exige une source officielle." },
      { q: "Un mauvais avis se plaint d'un plat froid. Une bonne réponse :", options: ["Offre de l'argent contre un meilleur avis", "Se dispute en public", "Publie les coordonnées du client", "S'excuse, dit ce que vous corrigez, invite à vous contacter"], answer: 3, why: "Des réponses calmes et honnêtes créent la confiance." },
      { q: "Payer les clients seulement s'ils laissent 5 étoiles, c'est :", options: ["Obligatoire", "Du marketing malin", "Interdit par la règle de la FTC sur les avis", "Acceptable"], answer: 2, why: "Les récompenses liées à un avis positif sont interdites." },
      { q: "Une bonne utilisation d'un plat du jour est de :", options: ["Écouler du stock avant qu'il ne s'abîme", "Cacher de la vieille nourriture", "Augmenter tous les prix", "Sauter la vérification des allergènes"], answer: 0, why: "Les plats du jour réduisent le gaspillage." },
      { q: "Qu'est-ce que le coût de l'assiette ?", options: ["Le prix de la vaisselle", "Le coût des ingrédients d'une portion", "Le loyer", "Un pourboire"], answer: 1, why: "C'est le coût des ingrédients par assiette." },
      { q: "Avant de publier un plat du jour, vous devez :", options: ["Sauter le calcul du prix", "Vérifier les allergènes et l'ajouter à la liste de préparation", "Utiliser une photo d'un autre plat trouvée en ligne", "Promettre qu'il est bio"], answer: 1, why: "La sécurité et la planification passent d'abord." },
      { q: "Le ratio coût matière, c'est :", options: ["Le coût de l'assiette divisé par le prix au menu, multiplié par 100", "Le loyer divisé par les ventes", "Les pourboires multipliés par le personnel", "Le prix plus la taxe"], answer: 0, why: "Il montre quelle part du prix correspond aux ingrédients." }
    ]
  }
};
