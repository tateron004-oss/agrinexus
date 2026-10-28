"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-ecommerce.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-ecommerce-fr",
  lang: "fr",
  translationOf: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "Plateformes de commerce en ligne et IA pour les athlètes",
  skills: "Choisir quoi vendre, Comparer les plateformes de boutique et leurs frais, Écrire des fiches produit avec l'IA, Fixer un prix à partir des vrais coûts, Vérifier les règles NIL, de logos et de marques déposées avant de vendre",
  outcome: "préparer et lancer une offre en ligne simple, comme des produits dérivés, des cours particuliers ou un stage : choisir une plateforme, écrire une fiche produit avec l'IA, fixer un prix à partir des vrais coûts et vérifier les règles NIL, de logos et de marques déposées avant le lancement.",
  about: [
    "Ce cours s'adresse aux athlètes et aux entraîneurs qui veulent vendre quelque chose en ligne : des T-shirts ou des produits dérivés avec leur propre design, des cours particuliers, des programmes d'entraînement, ou des stages et des ateliers.",
    "Vous apprendrez quoi vendre, comment choisir une plateforme de boutique, comment écrire une fiche produit avec l'IA, comment fixer un prix qui couvre vos coûts et comment respecter les règles NIL (nom, image et ressemblance), de logos scolaires et de marques déposées.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. C'est une formation générale, pas un conseil juridique ou fiscal ; renseignez-vous auprès de votre service de conformité, d'un parent ou d'un tuteur si vous avez moins de 18 ans, et d'un professionnel de la fiscalité."
  ],
  finalTask: "Rédigez un plan de lancement d'une page pour un produit ou un service : ce que c'est et à qui il s'adresse, la plateforme choisie et ses frais actuels (pris sur sa page de tarifs), une fiche produit écrite avec l'IA et retouchée par vous, un prix calculé à partir des vrais coûts, et une liste de règles à vérifier (NIL, logos scolaires, marques déposées, impôts) avec les personnes que vous avez consultées.",
  chapters: [
    {
      name: "Chapitre 1 : Quoi vendre et où",
      lessons: [
        {
          title: "Choisir quoi vendre",
          minutes: 5,
          goal: "Choisir un produit ou un service adapté à vos compétences et à votre public.",
          text: [
            "Les athlètes vendent généralement l'une de trois choses. Des produits physiques : T-shirts, casquettes, autocollants ou affiches avec votre propre design ou logo. Des services : cours particuliers, entraînements en petit groupe, stages et ateliers. Des produits numériques : programmes d'entraînement, cours vidéo ou guides d'exercices.",
            "Commencez par une chose sur laquelle votre public vous pose déjà des questions. Si des parents vous demandent souvent des cours, vendez des cours. Si des fans commentent votre logo, essayez les produits dérivés.",
            "Pensez au temps et au risque. Les services rémunèrent votre temps mais dépendent de votre emploi du temps. Les produits dérivés demandent de l'argent au départ, sauf si vous utilisez l'impression à la demande. Les produits numériques prennent du temps à créer mais peuvent se vendre de nombreuses fois."
          ],
          steps: ["Listez ce que votre public vous demande.", "Classez les idées : physique, service ou numérique.", "Notez le temps et l'argent que chacune demande.", "Choisissez-en une pour commencer."],
          words: [["Commerce en ligne", "acheter et vendre sur Internet."], ["Impression à la demande", "un service qui imprime et expédie un article seulement après qu'une personne l'a commandé."], ["Produit numérique", "quelque chose vendu sous forme de fichier ou d'accès en ligne, comme un programme d'entraînement."]],
          slides: [
            { title: "Trois types d'offres", bullets: ["Physique : produits dérivés à votre design", "Services : cours, stages, ateliers", "Numérique : programmes, cours vidéo"] },
            { title: "Partez de la demande", bullets: ["Que vous demande votre public ?", "Choisissez une seule chose"] },
            { title: "Temps et risque", bullets: ["Services : votre temps", "Produits dérivés : argent au départ ou impression à la demande", "Numérique : créé une fois, vendu de nombreuses fois"] }
          ],
          tryIt: "Listez trois choses que des gens vous ont demandées. Demandez à un assistant IA les avantages et les inconvénients de vendre chacune, puis choisissez-en une.",
          youCanNow: "choisir un produit ou un service adapté à vos compétences et à votre public."
        },
        {
          title: "Comparer les plateformes de boutique",
          minutes: 5,
          goal: "Comparer deux plateformes et en choisir une selon leurs frais et fonctions actuels.",
          text: [
            "Vous n'avez pas besoin de construire une boutique de zéro. Des créateurs de boutique comme Shopify, Square Online et Wix vous permettent de mettre des produits en ligne et d'encaisser des paiements. Des services d'impression à la demande comme Printful ou Printify se connectent aux boutiques et gèrent l'impression et l'expédition. Pour les cours et les stages, un outil de réservation et d'inscription ou un simple lien de paiement peut suffire.",
            "Chaque plateforme se fait payer d'une manière ou d'une autre : abonnement mensuel, pourcentage sur chaque vente, frais de traitement des paiements, ou les trois. Ces frais changent souvent : lisez la page de tarifs actuelle de chaque plateforme et notez les vrais chiffres.",
            "Si vous avez moins de 18 ans, beaucoup de plateformes et de services de paiement exigent qu'un adulte possède ou copossède le compte. Impliquez un parent ou un tuteur."
          ],
          steps: ["Choisissez deux plateformes adaptées à votre offre.", "Ouvrez la page de tarifs officielle de chacune.", "Notez le coût mensuel, les frais par vente et les frais de paiement.", "Vérifiez les règles d'âge.", "Choisissez celle qui a le coût total le plus bas pour vos ventes prévues."],
          words: [["Plateforme", "un service en ligne que vous utilisez pour faire fonctionner votre boutique."], ["Frais de traitement", "ce qu'un service de paiement facture pour encaisser un paiement par carte."]],
          slides: [
            { title: "Options de boutique", bullets: ["Créateurs de boutique : Shopify, Square Online, Wix", "Impression à la demande : Printful, Printify", "Cours et stages : outil de réservation ou lien de paiement"] },
            { title: "Frais à comparer", bullets: ["Abonnement mensuel", "Frais par vente", "Frais de traitement des paiements"] },
            { title: "Avant de vous inscrire", bullets: ["Lisez la page de tarifs actuelle", "Moins de 18 ans : un adulte devra peut-être posséder le compte"] }
          ],
          tryIt: "Choisissez deux plateformes. À partir de leurs pages de tarifs officielles, notez le coût mensuel et les frais de chacune dans un petit tableau, et choisissez le total le moins cher pour 20 ventes par mois.",
          youCanNow: "comparer des plateformes de boutique selon leurs frais réels et actuels, et en choisir une."
        },
        {
          title: "Les règles d'abord : NIL, logos et marques déposées",
          minutes: 6,
          goal: "Vérifier les règles qui s'appliquent avant de vendre quoi que ce soit avec votre nom ou un logo.",
          text: [
            "Vendre des articles avec votre nom, votre image ou votre ressemblance peut compter comme une activité NIL. Les athlètes universitaires devront peut-être la déclarer ; les règles de la NCAA (l'association du sport universitaire américain) disent qu'un revenu NIL doit avoir un vrai but commercial et ne pas être lié aux performances. Au lycée, les règles varient selon l'État. Demandez d'abord à votre service de conformité ou à l'association sportive de votre État.",
            "N'utilisez pas le logo, le nom, la mascotte ou les couleurs de votre école ou de votre équipe d'une manière qui semble officielle sans une permission écrite. Les écoles et les ligues possèdent et protègent généralement ces éléments. Les logos des ligues professionnelles et des autres marques sont aussi interdits.",
            "Créez votre propre logo et cherchez dans les registres de marques de l'USPTO (l'office américain des brevets et des marques) avant de choisir un nom de marque, pour éviter de copier celui de quelqu'un d'autre. Les revenus de vente sont généralement imposables ; l'IRS (l'administration fiscale américaine) dit que vous devez faire une déclaration si vos revenus nets de travailleur indépendant atteignent 400 $ ou plus : gardez vos justificatifs et parlez à un professionnel de la fiscalité."
          ],
          steps: ["Demandez à votre service de conformité ou à l'association de votre État les règles NIL pour la vente.", "N'utilisez pas les logos d'école, d'équipe ou de ligue sans permission écrite.", "Créez votre propre logo.", "Cherchez votre nom de marque dans les registres de l'USPTO.", "Mettez en place un registre simple des ventes et des coûts."],
          words: [["Marque déposée", "un nom, un logo ou un slogan qui identifie une entreprise et qui est protégé par la loi."], ["Licence", "une permission officielle d'utiliser le logo ou le nom de quelqu'un d'autre, souvent contre paiement."]],
          slides: [
            { title: "Règles NIL", bullets: ["Vendre avec votre nom peut être une activité NIL", "Université : déclaration parfois obligatoire", "Lycée : les règles varient selon l'État"] },
            { title: "Logos", bullets: ["Logos d'école, d'équipe et de ligue : permission écrite", "Logos d'autres marques : interdits", "Créez le vôtre"] },
            { title: "Nom et impôts", bullets: ["Cherchez dans l'USPTO avant de choisir un nom", "Gardez une trace des ventes et des coûts", "Parlez à un professionnel de la fiscalité"] }
          ],
          sources: [
            { name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO : les bases des marques déposées (en anglais)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Écrivez une liste de règles à vérifier pour votre produit : NIL (qui vous avez consulté), logos (lesquels, et la permission), recherche de marque (faite ou non) et justificatifs (où vous les garderez).",
          youCanNow: "vérifier les bases NIL, logos, marques déposées et impôts avant de vendre."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Quoi vendre et où",
        questions: [
          { q: "Quel service un athlète pourrait-il vendre ?", options: ["Un T-shirt", "Un autocollant", "Des cours particuliers", "Une affiche"], answer: 2, why: "Les cours sont un service qui rémunère votre temps." },
          { q: "Que fait l'impression à la demande ?", options: ["Elle imprime et expédie les articles seulement après une commande", "Elle imprime de l'argent", "Elle vous oblige à acheter 500 T-shirts d'abord", "Elle écrit votre fiche produit"], answer: 0, why: "Elle réduit l'argent nécessaire au départ." },
          { q: "Où trouver les vrais frais d'une plateforme ?", options: ["En devinant", "Dans une vieille vidéo", "Dans la mémoire d'une IA", "Sur sa page de tarifs officielle actuelle"], answer: 3, why: "Les frais changent ; la page officielle est à jour." },
          { q: "Vous voulez vendre des T-shirts avec le logo de votre école. De quoi avez-vous besoin d'abord ?", options: ["De rien", "D'une permission écrite de l'école", "D'une plus jolie police", "De plus d'abonnés"], answer: 1, why: "Les écoles possèdent et protègent généralement leurs logos." },
          { q: "Pourquoi chercher dans les registres de l'USPTO avant de nommer votre marque ?", options: ["Pour obtenir des T-shirts gratuits", "Pour éviter de copier la marque déposée de quelqu'un d'autre", "Pour trouver des clients", "Ce n'est pas utile"], answer: 1, why: "Cela vous aide à éviter les problèmes de marque." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire et lancer votre offre",
      lessons: [
        {
          title: "Écrire une fiche produit avec l'IA",
          minutes: 5,
          goal: "Écrire une fiche produit claire et honnête avec l'aide de l'IA.",
          text: [
            "Une fiche produit répond aux questions des acheteurs : qu'est-ce que c'est ? Pour qui ? Qu'est-ce que je reçois ? Combien, quand et comment ? Pour un stage : les dates, les âges, le lieu, ce que les enfants apprennent, la sécurité, ce qu'il faut apporter et la politique de remboursement.",
            "Demandez à un assistant IA : « Écris une fiche produit pour un cours particulier de tir d'une heure pour des joueurs de 10 à 16 ans. Inclus ce qu'ils vont apprendre, ce qu'il faut apporter, le type de lieu, un emplacement pour le prix et une courte politique de remboursement. Ton amical, clair, moins de 200 mots. » Puis corrigez chaque détail pour qu'il soit vrai.",
            "Utilisez de vraies photos qui vous appartiennent. Ne promettez pas de résultats comme « titulaire garanti » et ne faites pas d'affirmations de santé. Des règles claires de remboursement et d'annulation évitent les disputes plus tard."
          ],
          steps: ["Listez ce que les acheteurs doivent savoir.", "Demandez à l'IA un brouillon de moins de 200 mots.", "Vérifiez chaque détail et corrigez tout ce qui est faux.", "Ajoutez de vraies photos qui vous appartiennent.", "Ajoutez des règles claires de remboursement et d'annulation."],
          words: [["Fiche produit", "la page qui décrit ce que vous vendez et permet de l'acheter."], ["Politique de remboursement", "vos règles pour rendre l'argent."]],
          slides: [
            { title: "Répondez aux questions des acheteurs", bullets: ["Qu'est-ce que c'est ? Pour qui ?", "Qu'est-ce que je reçois ?", "Combien, quand et comment ?"] },
            { title: "L'IA rédige, vous vérifiez", bullets: ["Moins de 200 mots", "Chaque détail est vrai", "Vos propres photos"] },
            { title: "À éviter", bullets: ["Résultats garantis", "Affirmations de santé", "Pas de règles de remboursement"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger votre fiche produit, puis corrigez-la pour que chaque détail soit vrai et ajoutez une politique de remboursement.",
          youCanNow: "écrire une fiche produit claire et honnête avec l'aide de l'IA."
        },
        {
          title: "Fixer le prix à partir des vrais coûts",
          minutes: 5,
          goal: "Fixer un prix qui couvre vos coûts et laisse un bénéfice.",
          text: [
            "Le prix part du coût. Pour les produits dérivés : le coût de l'article, l'impression, l'expédition, les frais de plateforme et les frais de paiement. Pour les cours : la location du lieu, le matériel, les déplacements, votre temps et les frais.",
            "Additionnez le coût d'une vente, puis regardez combien coûtent des produits ou des cours similaires dans votre région. Choisissez un prix au-dessus de votre coût que votre public peut payer. La différence est votre bénéfice, avant impôts.",
            "Utilisez un tableur : une colonne pour chaque coût, un total, votre prix et le bénéfice. Un assistant IA peut créer les formules, mais vérifiez les calculs avec une calculatrice."
          ],
          steps: ["Listez chaque coût d'une vente.", "Additionnez-les.", "Regardez le prix d'offres similaires près de chez vous.", "Fixez un prix au-dessus du coût adapté à votre public.", "Vérifiez les calculs dans un tableur."],
          words: [["Coût", "l'argent que vous dépensez pour produire ou livrer une vente."], ["Bénéfice", "le prix moins tous les coûts, avant impôts."]],
          slides: [
            { title: "Listez chaque coût", bullets: ["Article, impression, expédition", "Frais de plateforme et de paiement", "Lieu, matériel, déplacements, temps"] },
            { title: "Fixez un prix", bullets: ["Au-dessus du coût total", "Comparez avec des offres similaires", "Ce que votre public peut payer"] },
            { title: "Tableur", bullets: ["Coûts, total, prix, bénéfice", "L'IA crée les formules ; vous vérifiez"] }
          ],
          tryIt: "Créez une feuille de prix pour une vente de votre produit. Demandez à l'IA d'écrire les formules du total et du bénéfice, puis vérifiez-les avec une calculatrice.",
          youCanNow: "fixer un prix à partir des vrais coûts et connaître votre bénéfice par vente."
        },
        {
          title: "Lancer et satisfaire vos clients",
          minutes: 5,
          goal: "Préparer un petit lancement et une routine simple de service client.",
          text: [
            "Commencez petit : un lancement discret auprès de votre famille, des familles de vos coéquipiers et de vos abonnés proches. Réglez les problèmes avant une grande annonce. Annoncez ensuite avec une publication, une courte vidéo et un lien dans votre biographie.",
            "Si vous publiez sur vos propres produits, c'est votre entreprise ; mais si une marque ou une autre personne vous donne quelque chose pour la promouvoir, signalez-le clairement. Athlètes universitaires : déclarez les contrats à temps si c'est obligatoire.",
            "Le service client fidélise les acheteurs : répondez aux messages dans la journée, expédiez ou confirmez les réservations à temps, respectez votre politique de remboursement et dites merci. Demandez à l'IA de rédiger des modèles de réponses polies aux questions courantes."
          ],
          steps: ["Faites un lancement discret auprès d'un petit groupe.", "Réglez les problèmes.", "Annoncez avec une publication, une vidéo et un lien dans la biographie.", "Répondez aux messages dans la journée.", "Utilisez l'IA pour rédiger des modèles de réponses."],
          words: [["Lancement discret", "une première sortie petite et tranquille pour repérer les problèmes."], ["Service client", "la façon dont vous aidez les acheteurs avant et après le paiement."]],
          slides: [
            { title: "Commencez petit", bullets: ["Lancement discret auprès de vos proches", "Réglez d'abord les problèmes"] },
            { title: "Puis annoncez", bullets: ["Publication, courte vidéo, lien en biographie", "Signalez tout lien avec une marque"] },
            { title: "Satisfaire vos clients", bullets: ["Répondez dans la journée", "À temps, selon votre politique de remboursement", "Modèles de réponses avec l'IA"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan de lancement d'une page : offre et public, plateforme et frais actuels, fiche produit rédigée avec l'IA, prix calculé sur les vrais coûts, et liste de règles avec les personnes consultées.",
          youCanNow: "lancer une petite offre en ligne et offrir un bon service client."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire et lancer votre offre",
        questions: [
          { q: "La fiche produit d'un stage doit inclure :", options: ["Seulement un logo", "Votre adresse personnelle", "Des bourses garanties", "Les dates, les âges, le lieu, ce que les enfants apprennent et la politique de remboursement"], answer: 3, why: "Elle répond à ce que les acheteurs doivent savoir." },
          { q: "L'IA écrit « intégration garantie dans l'équipe première » sur votre fiche. Vous :", options: ["Le retirez", "Le gardez", "Le mettez en plus grand", "Ajoutez d'autres promesses"], answer: 0, why: "Ne promettez pas des résultats que vous ne pouvez pas garantir." },
          { q: "Le bénéfice, c'est :", options: ["Seulement le prix", "Le nombre d'abonnés", "Le prix moins tous les coûts", "Le total des ventes sans les coûts"], answer: 2, why: "Le bénéfice est ce qui reste après les coûts." },
          { q: "Pourquoi faire un lancement discret ?", options: ["Pour cacher votre boutique", "Pour augmenter les prix", "C'est exigé par la loi", "Pour repérer les problèmes avant une grande annonce"], answer: 3, why: "Les petits lancements révèlent les problèmes sans risque." },
          { q: "En combien de temps répondre aux messages des clients ?", options: ["Dans le mois", "Dans la journée", "Jamais", "Seulement s'ils se plaignent deux fois"], answer: 1, why: "Des réponses rapides créent la confiance et fidélisent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Plateformes de commerce en ligne et IA pour les athlètes",
    questions: [
      { q: "Le commerce en ligne, c'est :", options: ["Le sport électrique", "Seulement l'e-mail", "Acheter et vendre sur Internet", "Un bus d'équipe"], answer: 2, why: "C'est la vente en ligne." },
      { q: "Lequel est un produit numérique ?", options: ["Un programme d'entraînement", "Une casquette", "Un stage", "Une affiche"], answer: 0, why: "Il se vend sous forme de fichier ou d'accès en ligne." },
      { q: "Une bonne façon de choisir votre premier produit :", options: ["Ce sur quoi votre public vous interroge déjà", "Ce qui est à la mode", "L'idée la plus chère", "Quelque chose que vous ne connaissez pas"], answer: 0, why: "La demande rend les ventes plus faciles." },
      { q: "Les services rémunèrent votre :", options: ["Expédition", "Impression", "Temps", "Autocollants"], answer: 2, why: "Les cours et les stages demandent votre temps." },
      { q: "Lequel est un créateur de boutique ?", options: ["Un chronomètre", "Shopify", "Un tableau d'affichage", "Un maillot"], answer: 1, why: "Shopify est un créateur de boutique." },
      { q: "Quels frais une plateforme peut-elle facturer ?", options: ["Des frais de maillot", "Des frais d'arbitre", "Des frais de temps mort", "Des frais de traitement des paiements"], answer: 3, why: "Les frais de paiement sont courants." },
      { q: "Si vous avez moins de 18 ans, un compte de boutique peut exiger :", options: ["Rien", "Un faux âge", "Qu'un adulte le possède ou le copossède", "La pièce d'identité d'un coéquipier"], answer: 2, why: "Beaucoup de plateformes exigent un adulte." },
      { q: "Vendre des produits dérivés avec votre nom peut compter comme :", options: ["Du pay-for-play", "Une bourse", "Rien", "Une activité NIL"], answer: 3, why: "Cela utilise votre nom, votre image ou votre ressemblance." },
      { q: "À qui un athlète universitaire doit-il demander les règles NIL pour la vente ?", options: ["Au service de conformité", "À un fan au hasard", "À un rival", "À personne"], answer: 0, why: "Il connaît les règles actuelles de l'école et de la NCAA." },
      { q: "Pouvez-vous mettre un logo de la NFL sur vos produits ?", options: ["Oui, toujours", "Non, pas sans licence", "Seulement en rouge", "Seulement en ligne"], answer: 1, why: "Les logos des ligues sont protégés." },
      { q: "Une marque déposée, c'est :", options: ["Un type de chaussure", "Une boisson sportive", "Un nom, un logo ou un slogan protégé", "Un programme d'entraînement"], answer: 2, why: "Les marques déposées identifient les entreprises." },
      { q: "L'IRS dit que vous devez faire une déclaration si vos revenus nets de travailleur indépendant sont de :", options: ["400 $ ou plus", "1 million $ ou plus", "Jamais", "Seulement si vous avez plus de 30 ans"], answer: 0, why: "C'est le seuil indiqué par l'IRS sur sa page des travailleurs indépendants." },
      { q: "Une fiche produit doit répondre à :", options: ["Seulement le prix", "Votre moyenne scolaire", "Votre mot de passe", "Quoi, pour qui, ce qu'on reçoit, le prix, quand et comment"], answer: 3, why: "Les acheteurs ont besoin de ces réponses." },
      { q: "Les photos de produit doivent être :", options: ["Copiées sur d'autres boutiques", "De vraies photos qui vous appartiennent", "Fausses", "D'autres athlètes"], answer: 1, why: "Utilisez des photos sur lesquelles vous avez des droits." },
      { q: "Pourquoi avoir une politique de remboursement ?", options: ["Pour toujours garder tout l'argent", "Pour éviter les disputes plus tard", "C'est de la décoration", "Ce n'est pas nécessaire"], answer: 1, why: "Des règles claires vous protègent, vous et les acheteurs." },
      { q: "Le prix doit être :", options: ["En dessous de votre coût", "Au hasard", "Toujours gratuit", "Au-dessus de votre coût total"], answer: 3, why: "Sinon, vous perdez de l'argent à chaque vente." },
      { q: "L'IA crée votre formule de bénéfice. Vous devez :", options: ["Vérifier les calculs avec une calculatrice", "Lui faire entièrement confiance", "La supprimer", "Doubler votre prix"], answer: 0, why: "L'IA peut faire des erreurs de calcul." },
      { q: "Un lancement discret s'adresse à :", options: ["Tout le monde d'un coup", "Seulement aux rivaux", "La famille, les abonnés proches et les gens que vous connaissez", "Personne"], answer: 2, why: "Un petit groupe vous aide à régler les problèmes." },
      { q: "Où mettre le lien de votre boutique ?", options: ["Caché nulle part", "Sur la page d'un rival", "Dans des messages indésirables", "Dans votre biographie"], answer: 3, why: "Les liens en biographie sont faciles à trouver." },
      { q: "L'IA peut aider le service client en :", options: ["Gardant l'argent des clients", "Rédigeant des modèles de réponses polies", "Ignorant les messages", "Changeant en secret les règles de remboursement"], answer: 1, why: "Les modèles rendent les réponses rapides et polies." }
    ]
  }
};
