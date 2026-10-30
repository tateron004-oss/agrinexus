"use strict";

// Koach Learn course (French translation of africa-life/afr-selling-online.js). See scripts/koachlearn-courses/README.md, "Translations".

const WA_BUSINESS = { name: "WhatsApp Business : l'application WhatsApp Business (profil professionnel, produits et prix, messages d'accueil et d'absence)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Commission nigériane de protection des données (NDPC) : loi nigériane sur la protection des données de 2023", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Bureau du Commissaire à la protection des données, Kenya (loi sur la protection des données de 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Banque centrale du Kenya : se protéger contre la fraude", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Banque centrale du Nigeria : protection des consommateurs", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-fr",
  lang: "fr",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Vendre en ligne en Afrique (WhatsApp Business, places de marché et réseaux sociaux)",
  skills: "Choisir où vendre en ligne, Configurer WhatsApp Business, Prendre des photos de produits et rédiger des annonces, Répondre aux clients et conclure une vente, Vérifier les paiements et éviter les fausses alertes, Livrer et garder la confiance des clients",
  outcome: "prendre des commandes pour vos produits par téléphone : créer un profil WhatsApp Business et une liste de produits, rédiger des annonces qui font vendre, répondre aux clients et confirmer les commandes, vérifier que l'argent est vraiment arrivé avant d'envoyer la marchandise, et livrer de façon à ce que les clients reviennent.",
  about: [
    "Aujourd'hui, beaucoup de clients trouvent des vendeurs sur WhatsApp, Facebook, Instagram, TikTok et sur des places de marché en ligne comme Jumia et Jiji. Ce cours s'adresse aux commerçants, artisans, cuisiniers à domicile, tailleurs, agriculteurs et petits boutiquiers du Kenya, du Nigeria, du Ghana, du Sénégal, de Côte d'Ivoire, du Maroc et de toute l'Afrique qui veulent vendre au-delà de leur rue.",
    "Vous allez choisir où vendre, créer un profil WhatsApp Business et une liste de produits, prendre de bonnes photos avec un téléphone simple, rédiger des annonces avec un prix clair, répondre vite aux clients, confirmer les commandes par écrit, vérifier les paiements dans votre propre application de mobile money ou de banque, et prévoir la livraison et les retours.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » pour votre propre activité. Le cours fonctionne sur un téléphone Android simple et consomme peu de données. Les prix et les montants du cours sont des exemples, pas de vrais prix ni de vrais frais."
  ],
  finalTask: "Faites un plan de boutique en ligne d'une page pour votre activité : où vous allez vendre et pourquoi, le texte de votre profil WhatsApp Business, trois annonces de produits (notes sur la photo, titre, prix dans votre monnaie, détails et livraison), un message de confirmation de commande enregistré, votre règle pour vérifier les paiements, et votre politique de livraison et de retours.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Commerçants, vendeurs du marché, artisans, cuisiniers à domicile, tailleurs, coiffeurs, agriculteurs et petits boutiquiers, en ville et au village, dans toute l'Afrique (Kenya, Nigeria, Ghana, Afrique de l'Ouest et centrale francophone, Afrique du Nord). Beaucoup sont des femmes et des jeunes ; beaucoup échangent déjà avec leurs clients sur WhatsApp.",
    startingPoint: "Savent utiliser WhatsApp pour discuter et envoyer des photos, et peuvent recevoir du mobile money. Peu ont un profil professionnel, une liste de produits, des prix clairs en ligne, des confirmations de commande écrites ou une règle pour vérifier les paiements. Certains ont déjà été trompés par de faux messages de paiement.",
    gap: "Les clients cherchent et commandent sur leur téléphone, mais beaucoup de petits vendeurs perdent des ventes à cause de réponses lentes, de prix flous et de mauvaises photos, et perdent de l'argent et de la marchandise à cause de fausses alertes de paiement. Les apprenants ont besoin d'une façon simple et sûre de montrer leurs produits, de prendre des commandes, de vérifier les paiements et de livrer, pour que la vente en ligne ajoute un revenu et non un risque.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants parlent l'anglais comme deuxième langue (le cours existe aussi en français et en arabe)",
      "Appareils : un téléphone Android simple, souvent partagé ; les données coûtent cher, donc les photos et vidéos restent légères",
      "Argent : peu ou pas de budget pour la publicité ; d'abord les outils gratuits",
      "Règles et frais : les fonctions des applications, les commissions des places de marché et les règles sur la protection des données changent selon le pays ; les apprenants vérifient dans l'application, sur la page vendeurs de la place de marché ou auprès de l'autorité nationale",
      "Sécurité : risque de fraude élevé ; ne jamais partager un code PIN, un mot de passe ou un code à usage unique"
    ],
    prerequisites: "Savoir envoyer des messages et des photos sur WhatsApp. Utile : « Utiliser le mobile money en sécurité » dans cette catégorie."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de vos produits, de vos clients et de deux ou trois canaux en ligne", action: "choisir où vendre en ligne et noter pourquoi", standard: "en indiquant pour chaque canal le coût, l'effort et qui y achète" },
    { id: "O2", condition: "Avec un téléphone équipé de l'application WhatsApp Business", action: "créer un profil professionnel et une liste de produits avec les prix", standard: "avec le nom, une courte description, les horaires, la zone desservie et au moins trois produits" },
    { id: "O3", condition: "À partir d'un de vos produits", action: "prendre une photo nette et rédiger une annonce avec un titre, un prix, des détails et la livraison", standard: "pour qu'un client puisse commander sans poser de question de base" },
    { id: "O4", condition: "Quand un client envoie une question ou une commande", action: "répondre poliment et confirmer la commande par écrit", standard: "pendant vos horaires annoncés, avec l'article, la quantité, le prix, la livraison et le paiement dans un seul message" },
    { id: "O5", condition: "Avant d'envoyer une marchandise payée par mobile money ou par virement bancaire", action: "vérifier dans votre propre application ou dans le message officiel du fournisseur que l'argent est arrivé", standard: "sans jamais vous fier à une capture d'écran, un message transféré ou un appel, et sans jamais partager un code PIN" },
    { id: "O6", condition: "Quand vous livrez une commande", action: "rédiger et suivre une politique de livraison et de retours qui protège la confiance et les données des clients", standard: "en indiquant les zones de livraison, le coût, le délai et les retours, et en gardant privés les numéros des clients" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ouvrir votre boutique en ligne",
      lessons: [
        {
          title: "Choisir où vendre en ligne",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir un ou deux endroits pour vendre en ligne qui conviennent à vos produits et à vos clients.",
          text: [
            "Vous n'avez pas besoin d'être partout. Choisissez l'endroit où vos clients sont déjà, et où vous pouvez suivre les messages. Vendre en ligne, c'est comme ouvrir un deuxième étal : cela ne marche que si quelqu'un est là pour servir.",
            "Les applications de messagerie comme WhatsApp sont bien pour les clients habituels et les voisins. Les réseaux sociaux comme Facebook, Instagram et TikTok aident de nouvelles personnes à vous découvrir grâce aux photos et aux vidéos courtes. Les places de marché comme Jumia, Jiji, Kilimall et Konga ont déjà beaucoup d'acheteurs qui cherchent, mais elles ont des règles, et certaines prennent une commission (une partie de chaque vente) ou font payer les annonces mises en avant.",
            "Pour chaque canal, notez trois choses : qui y achète, ce que cela coûte (données, commission, publicité, livraison) et combien de temps cela prend chaque jour. Exemple : Ama, à Kumasi, vend des perles. Elle garde WhatsApp pour ses clientes habituelles et ajoute Instagram pour toucher de nouveaux acheteurs à Accra. Un cordonnier de Dakar pourrait commencer par WhatsApp et Facebook, puis ajouter une place de marché plus tard.",
            "Avant de rejoindre une place de marché, lisez sa page vendeurs : ce qu'elle facture, comment et quand elle vous paie, et ce qui se passe en cas de retour. Ces règles changent, donc vérifiez sur le site de la place de marché elle-même, pas dans un message transféré."
          ],
          steps: ["Listez les endroits où vos clients discutent, regardent et achètent déjà.", "Pour chaque canal, notez qui y achète, le coût et le temps nécessaire.", "Choisissez un canal principal et, au plus, un autre.", "Pour une place de marché, lisez sa propre page vendeurs : frais, paiement et retours."],
          words: [["Canal", "un endroit où vous vendez ou parlez aux clients, comme WhatsApp, Facebook ou une place de marché."], ["Place de marché", "un site ou une application où beaucoup de vendeurs proposent des produits et où les acheteurs cherchent, comme Jumia ou Jiji."], ["Commission", "une partie de chaque vente que la place de marché garde comme frais."]],
          slides: [
            { title: "Vendez là où sont vos clients", bullets: ["Seulement là où vous pouvez répondre aux messages", "En ligne, c'est un deuxième étal : il faut quelqu'un pour servir"] },
            { title: "Trois types de canaux", bullets: ["Messagerie : WhatsApp pour les clients habituels", "Réseaux sociaux : Facebook, Instagram, TikTok pour être découvert", "Places de marché : Jumia, Jiji, Kilimall, Konga"] },
            { title: "Comparez chaque canal", bullets: ["Qui y achète", "Ce que cela coûte : données, commission, publicité, livraison", "Combien de temps cela prend chaque jour"] },
            { title: "Commencez petit", bullets: ["Un canal principal, au plus un autre", "Lisez d'abord la page vendeurs de la place de marché"] }
          ],
          tryIt: "Dessinez un petit tableau avec vos deux ou trois canaux possibles. Pour chacun, notez qui y achète, ce que cela coûte et le temps nécessaire. Entourez celui par lequel vous allez commencer.",
          youCanNow: "comparer des canaux en ligne selon le coût, l'effort et les clients, et choisir par où commencer.",
          quickCheck: [
            { objective: "O1", q: "Vous pouvez répondre aux messages une heure par jour. Quel est le meilleur départ ?", options: ["Ouvrir des comptes sur six applications à la fois", "Commencer par un canal principal que vous pouvez suivre", "Publier une fois et ne jamais répondre", "Payer de la publicité avant d'avoir une liste de produits"], answer: 1, why: "Un canal ne marche que si vous répondez aux clients, donc commencez par ce que vous pouvez suivre." },
            { objective: "O1", q: "Où vérifiez-vous ce qu'une place de marché fait payer aux vendeurs ?", options: ["Dans un message WhatsApp transféré", "Dans l'avis d'un ami", "Sur la propre page vendeurs de la place de marché", "Dans un commentaire sous une vidéo"], answer: 2, why: "Les frais et les règles changent, et seule la page de la place de marché elle-même est fiable." }
          ]
        },
        {
          title: "Configurer WhatsApp Business : profil et liste de produits",
          objectives: ["O2"],
          minutes: 6,
          goal: "Créer un profil WhatsApp Business et une liste de produits avec les prix.",
          text: [
            "WhatsApp Business est une application séparée du WhatsApp habituel, faite par la même entreprise pour les petites entreprises. Installez-la uniquement depuis la boutique d'applications officielle (Google Play sur Android). Elle vous permet de montrer un profil professionnel, de présenter vos produits avec leurs prix et d'envoyer des messages d'accueil et d'absence.",
            "Votre profil professionnel, c'est l'enseigne de votre boutique. Indiquez le nom de votre activité, une courte description de ce que vous vendez, votre quartier ou votre adresse, vos horaires d'ouverture et les moyens de paiement acceptés. Utilisez un logo clair ou une photo de votre étal ou de votre meilleur produit.",
            "Ajoutez ensuite vos produits à la liste de produits (l'application l'appelle « catalogue » dans beaucoup de versions) : une photo, un nom, un prix dans votre monnaie et une courte description. Les clients peuvent la parcourir et vous envoyer un article dans la discussion. Exemple : Wanjiku, à Nakuru, ajoute « Sandales en perles maasaï, pointures 37-41, KES 1 200 » (un prix d'exemple).",
            "Les menus varient selon les téléphones et les versions. Si vous ne trouvez pas un réglage, ouvrez les paramètres de l'application et cherchez les outils professionnels. Vous pouvez aussi créer un court message d'accueil pour les nouveaux clients et un message d'absence pour les heures de fermeture."
          ],
          steps: ["Installez WhatsApp Business depuis la boutique d'applications officielle.", "Remplissez le profil professionnel : nom, description, quartier, horaires, moyens de paiement.", "Ajoutez un logo ou une photo nette.", "Ajoutez au moins trois produits avec photo, nom, prix et courte description.", "Créez un message d'accueil et un message d'absence."],
          words: [["Profil professionnel", "la page qui montre aux clients le nom de votre activité, sa description, vos horaires et votre emplacement."], ["Liste de produits (catalogue)", "une liste de vos produits avec photos et prix que les clients peuvent parcourir dans l'application."], ["Message d'absence", "une réponse automatique envoyée quand vous êtes fermé."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["Une application gratuite pour les petites entreprises", "À installer uniquement depuis la boutique d'applications officielle", "Profil, liste de produits, messages d'accueil et d'absence"] },
            { title: "Votre profil est l'enseigne de votre boutique", bullets: ["Nom de l'activité et ce que vous vendez", "Quartier ou adresse et horaires d'ouverture", "Moyens de paiement acceptés", "Un logo ou une photo nette"] },
            { title: "Votre liste de produits", bullets: ["Photo, nom, prix dans votre monnaie", "Courte description : taille, couleur, quantité", "Au moins trois produits pour commencer"] },
            { title: "Messages automatiques", bullets: ["Accueil pour les nouveaux clients", "Message d'absence quand vous êtes fermé", "Les menus varient : cherchez dans les paramètres, outils professionnels"] }
          ],
          tryIt: "Installez WhatsApp Business (ou ouvrez-le si vous l'avez déjà). Remplissez votre profil et ajoutez trois produits avec une photo, un nom, un prix et une ligne de description. Demandez à un ami de regarder et de vous dire une chose qui n'est pas claire.",
          youCanNow: "créer un profil WhatsApp Business et une liste de produits que les clients peuvent parcourir.",
          quickCheck: [
            { objective: "O2", q: "Quelle information a sa place dans votre profil professionnel ?", options: ["Le code PIN de votre mobile money", "Vos horaires d'ouverture", "Les numéros de téléphone de vos clients", "Votre mot de passe"], answer: 1, why: "Les horaires disent aux clients quand vous répondez ; les codes PIN, les mots de passe et les numéros des clients restent privés." },
            { objective: "O2", q: "Un produit de votre liste a une photo mais pas de prix. Qu'ajoutez-vous ?", options: ["Rien ; les clients aiment demander", "Votre adresse personnelle", "Une longue histoire sur la boutique", "Le prix dans votre monnaie"], answer: 3, why: "Un prix clair fait gagner du temps et évite que des clients partent sans demander." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Des photos et des annonces qui font vendre",
          objectives: ["O3"],
          minutes: 5,
          goal: "Prendre une photo de produit nette et rédiger une annonce à partir de laquelle un client peut commander.",
          text: [
            "En ligne, le client ne peut pas toucher votre produit : la photo et les mots doivent faire le travail. Prenez les photos à la lumière du jour, près d'une fenêtre ou dehors à l'ombre. Utilisez un fond uni, comme un tissu ou un mur. Essuyez l'objectif de l'appareil photo. Montrez le produit en entier, puis un gros plan, et quelque chose qui montre la taille, comme une main.",
            "Une bonne annonce répond aux questions du client avant qu'il les pose : un titre clair (ce que c'est), le prix dans votre monnaie, la taille, la couleur, la quantité ou le poids, la matière, et comment et où vous livrez. Exemple : « Crème pour le corps au beurre de karité, pot de 250 g, sans parfum, GHS 60. Livraison à Tamale aujourd'hui ; autres villes par colis en car. » (un prix d'exemple).",
            "Soyez honnête. Montrez le vrai produit, pas une image trouvée sur internet, et dites si les couleurs peuvent varier. Des photos honnêtes, c'est moins de retours et plus de confiance. Gardez des fichiers légers pour économiser les données : une photo nette vaut mieux que dix photos floues."
          ],
          steps: ["Nettoyez le produit et l'objectif de l'appareil photo.", "Utilisez la lumière du jour et un fond uni.", "Prenez une photo d'ensemble, un gros plan et une photo qui montre la taille.", "Écrivez le titre, le prix, la taille ou le poids, la matière et la livraison.", "Relisez comme un client : pouvez-vous commander sans poser de question ?"],
          words: [["Annonce", "la photo et le texte qui présentent un produit à vendre."], ["Gros plan", "une photo prise près du produit pour montrer les détails."]],
          slides: [
            { title: "Des photos qui inspirent confiance", bullets: ["Lumière du jour, fond uni, objectif propre", "Produit entier, gros plan, et un repère pour la taille", "Votre vrai produit, jamais une image d'internet"] },
            { title: "Une annonce qui répond aux questions", bullets: ["Titre : ce que c'est", "Prix dans votre monnaie", "Taille, couleur, poids, matière", "Comment et où vous livrez"] },
            { title: "Économisez les données, gagnez la confiance", bullets: ["Une photo nette vaut mieux que dix floues", "Dites si les couleurs peuvent varier", "Des annonces honnêtes, c'est moins de retours"] }
          ],
          tryIt: "Choisissez un produit. Prenez trois photos (ensemble, gros plan, taille) à la lumière du jour sur un fond uni. Rédigez une annonce avec titre, prix, détails et livraison. Relisez-la comme un client et corrigez tout ce qui vous obligerait à poser une question.",
          youCanNow: "prendre des photos de produits nettes avec un téléphone simple et rédiger une annonce à partir de laquelle les clients peuvent commander.",
          quickCheck: [
            { objective: "O3", q: "Quelle est la meilleure lumière pour photographier un produit ?", options: ["La lumière du jour près d'une fenêtre ou à l'ombre", "Une pièce sombre avec le flash", "Sous une lampe de couleur", "Dehors la nuit"], answer: 0, why: "Une lumière du jour douce montre les vraies couleurs et les détails sans ombres dures." },
            { objective: "O3", q: "Quelle annonce permet à un client de commander sans poser de question ?", options: ["« Joli sac. Écrivez-moi. »", "« Sac à vendre »", "« Sac en cuir »", "« Sac à main en cuir marron, 30 x 25 cm, NGN 18 000, livraison à Lagos en 2 jours »"], answer: 3, why: "Elle dit ce que c'est, la taille, le prix et la livraison, donc le client peut décider." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ouvrir votre boutique en ligne",
        questions: [
          { objective: "O1", q: "Quelles trois choses comparez-vous pour chaque canal en ligne ?", options: ["Qui y achète, ce que cela coûte et le temps que cela prend", "Son logo, sa couleur et son âge", "Combien d'amis l'utilisent pour discuter", "Seulement s'il est nouveau"], answer: 0, why: "Les clients, le coût et le temps décident si un canal vous rapportera de l'argent." },
          { objective: "O1", q: "Une place de marché garde une partie de chaque vente. Comment cela s'appelle-t-il ?", options: ["Un acompte", "Un remboursement", "Une commission", "Un message d'accueil"], answer: 2, why: "La commission est la part de chaque vente que la place de marché garde comme frais." },
          { objective: "O2", q: "Où devez-vous obtenir l'application WhatsApp Business ?", options: ["Par un lien venant d'un numéro inconnu", "Dans la boutique d'applications officielle", "Par un fichier envoyé par un inconnu", "Par une publicité qui s'affiche"], answer: 1, why: "La boutique d'applications officielle protège votre téléphone contre les fausses applications et les logiciels malveillants." },
          { objective: "O2", q: "Vous fermez à 19 h. Qu'est-ce qui aide les clients qui écrivent le soir ?", options: ["Éteindre votre téléphone pour toujours", "Supprimer leurs messages", "Répondre avec votre code PIN", "Un message d'absence qui dit quand vous répondrez"], answer: 3, why: "Un message d'absence dit aux clients que vous les avez vus et quand vous répondrez." },
          { objective: "O3", q: "Votre produit existe en couleurs qui paraissent différentes selon les écrans. Qu'écrivez-vous ?", options: ["Rien", "« Les couleurs peuvent légèrement varier par rapport à la photo »", "« Aucun retour, jamais »", "Utiliser une plus belle photo trouvée sur internet"], answer: 1, why: "Être honnête sur les couleurs évite les plaintes et crée la confiance." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Vendre, se faire payer et livrer",
      lessons: [
        {
          title: "Répondre aux clients et conclure la vente",
          objectives: ["O4"],
          minutes: 5,
          goal: "Répondre à un client et confirmer une commande dans un seul message clair.",
          text: [
            "En ligne, le vendeur qui répond le premier et clairement obtient souvent la vente. Répondez pendant vos horaires d'ouverture, saluez le client et répondez exactement à sa question. Si vous ne savez pas, dites quand vous aurez la réponse.",
            "Enregistrez les réponses courtes que vous envoyez souvent, comme votre liste de prix, vos zones de livraison et vos moyens de paiement. WhatsApp Business permet d'enregistrer des réponses et de les réutiliser ; les menus varient, donc cherchez dans les outils professionnels. Cela évite de tout retaper et vos réponses restent les mêmes à chaque fois.",
            "Quand le client est prêt, confirmez la commande dans un seul message : article, quantité, prix, lieu et coût de livraison, jour de livraison et moyen de paiement. Demandez-lui de répondre « Oui » pour confirmer. Exemple à Abidjan : « Bonjour Awa. Commande : 2 robes en pagne wax, taille M, 15 000 XOF chacune = 30 000 XOF. Livraison à Cocody samedi, 1 000 XOF. Paiement par mobile money avant la livraison. Répondez OUI pour confirmer. » (prix d'exemple).",
            "Restez poli, même quand un client marchande dur ou est impoli. N'envoyez jamais d'insultes et ne publiez jamais les messages d'un client."
          ],
          steps: ["Saluez le client et répondez exactement à sa question.", "Utilisez une réponse enregistrée pour les prix, la livraison et le paiement.", "Confirmez : article, quantité, prix, lieu, coût et jour de livraison, moyen de paiement.", "Demandez au client de répondre « Oui » avant de préparer la commande."],
          words: [["Réponse enregistrée (réponse rapide)", "un message que vous enregistrez dans l'application et que vous renvoyez en quelques touches."], ["Confirmation de commande", "un seul message qui reprend tout ce que le client a accepté d'acheter, et comment ce sera payé et livré."]],
          slides: [
            { title: "Des réponses rapides et claires font vendre", bullets: ["Répondez pendant vos horaires d'ouverture", "Saluez et répondez exactement à la question", "Vous ne savez pas ? Dites quand vous saurez"] },
            { title: "Enregistrez les réponses fréquentes", bullets: ["Liste de prix", "Zones et coûts de livraison", "Moyens de paiement"] },
            { title: "Confirmez chaque commande par écrit", bullets: ["Article, quantité et prix", "Lieu, coût et jour de livraison", "Moyen de paiement", "Le client répond « Oui » pour confirmer"] }
          ],
          tryIt: "Rédigez et enregistrez un message de confirmation de commande pour votre activité, avec des espaces pour l'article, la quantité, le prix, la livraison et le paiement. Puis remplissez-le pour une commande imaginaire.",
          youCanNow: "répondre clairement aux clients et confirmer chaque commande dans un seul message écrit.",
          quickCheck: [
            { objective: "O4", q: "Quelle confirmation de commande est complète ?", options: ["« OK, j'arrive. »", "« 2 sacs, KES 1 500 chacun = KES 3 000. Livraison à Kisumu centre vendredi, KES 200. Paiement par M-Pesa. Répondez OUI. »", "« Envoyez l'argent. »", "« Merci pour la discussion ! »"], answer: 1, why: "Elle indique l'article, la quantité, le prix, la livraison et le paiement, et demande au client de confirmer." },
            { objective: "O4", q: "Pourquoi enregistrer les réponses que vous envoyez souvent ?", options: ["Pour répondre vite et toujours de la même façon", "Pour que le client paie plus", "Pour ne jamais lire les messages", "Pour pouvoir partager les numéros des clients"], answer: 0, why: "Les réponses enregistrées évitent de tout retaper et gardent vos prix et vos règles cohérents." }
          ]
        },
        {
          title: "Se faire payer en sécurité : stopper les fausses alertes de paiement",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier qu'un paiement est vraiment arrivé avant de remettre la marchandise.",
          text: [
            "Beaucoup de vendeurs en ligne sont payés par mobile money (M-Pesa, MTN MoMo, Orange Money, Wave), par virement bancaire ou en espèces à la livraison. Les escrocs le savent. Une ruse courante est la fausse alerte de paiement : un SMS, une capture d'écran ou un message transféré qui ressemble à un paiement, alors qu'aucun argent n'est arrivé.",
            "Votre règle : la marchandise ne part que lorsque l'argent apparaît sur votre propre compte. Ouvrez votre propre application de mobile money ou de banque, ou composez le code officiel de votre opérateur, et vérifiez le solde ou la transaction. Une capture d'écran du client n'est pas une preuve. Un SMS venant d'un numéro de téléphone ordinaire n'est pas une preuve.",
            "Autre ruse : « Je vous ai envoyé de l'argent par erreur, renvoyez-le-moi. » N'envoyez rien. Vérifiez vous-même votre solde ; s'il y a vraiment un paiement par erreur, votre opérateur peut l'annuler selon sa propre procédure. Un vrai opérateur ne demande jamais votre code PIN, votre mot de passe ou un code à usage unique. Ne les partagez jamais, même avec quelqu'un qui dit travailler pour l'entreprise.",
            "Pour le paiement à la livraison, comptez l'argent avant de remettre le colis, et connaissez bien les billets de votre monnaie. Chaque banque centrale publie des alertes sur la fraude, par exemple la Banque centrale du Kenya et la Banque centrale du Nigeria."
          ],
          steps: ["Convenez du moyen de paiement dans la confirmation de commande.", "Quand le client dit qu'il a payé, ouvrez votre propre application ou composez le code officiel de votre opérateur.", "Vérifiez le montant et l'expéditeur dans votre solde ou votre relevé.", "Seulement ensuite, remettez ou envoyez la marchandise.", "Ignorez les demandes du type « renvoyez-moi mon argent envoyé par erreur » ; laissez l'opérateur gérer les annulations."],
          words: [["Fausse alerte de paiement", "un SMS, une capture d'écran ou un message fait pour ressembler à un paiement alors qu'aucun argent n'a été envoyé."], ["Code PIN", "votre code secret pour le mobile money ou la banque. Vous seul devez le connaître."], ["Annulation", "quand un paiement est renvoyé ; une vraie annulation est faite par votre opérateur, pas par vous en envoyant de l'argent à un inconnu."]],
          slides: [
            { title: "La ruse du faux paiement", bullets: ["Un SMS ou une capture qui fait croire que l'argent est arrivé", "Aucun argent sur votre compte", "L'escroc part avec votre marchandise"] },
            { title: "Votre règle", bullets: ["La marchandise part seulement quand l'argent est sur VOTRE compte", "Vérifiez dans votre application ou avec le code officiel", "Une capture d'écran n'est pas une preuve"] },
            { title: "« Je l'ai envoyé par erreur »", bullets: ["Ne renvoyez rien vous-même", "Vérifiez votre propre solde", "Les vraies annulations passent par votre opérateur"] },
            { title: "Ne partagez jamais", bullets: ["Votre code PIN ou votre mot de passe", "Un code à usage unique", "Un vrai opérateur ne les demande jamais"] }
          ],
          tryIt: "Écrivez votre règle de paiement sur un papier et collez-le là où vous préparez les commandes. Puis entraînez-vous : ouvrez votre propre application de mobile money ou de banque et trouvez où voir votre dernière transaction.",
          youCanNow: "vérifier que l'argent est vraiment arrivé sur votre propre compte avant d'envoyer la marchandise, et refuser les ruses du faux paiement et de la fausse annulation.",
          quickCheck: [
            { objective: "O5", q: "Un client envoie une capture d'écran d'un paiement. Que faites-vous ?", options: ["Envoyer la marchandise tout de suite", "Demander une capture plus grande", "Vérifier l'argent dans votre propre application ou avec le code officiel", "Lui envoyer votre code PIN pour qu'il vérifie"], answer: 2, why: "Seul votre propre compte montre si l'argent est vraiment arrivé ; les captures d'écran peuvent être truquées." },
            { objective: "O5", q: "Quelqu'un dit vous avoir envoyé de l'argent par erreur et vous demande de le renvoyer. Quelle est la solution la plus sûre ?", options: ["Le renvoyer tout de suite", "Vérifier votre propre solde et laisser votre opérateur gérer toute annulation", "Lui donner votre code PIN pour qu'il le reprenne", "Renvoyer le double par gentillesse"], answer: 1, why: "C'est une ruse courante ; un vrai paiement par erreur est annulé par l'opérateur." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Livraison, retours et confiance des clients",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rédiger une politique de livraison et de retours et garder privées les informations des clients.",
          text: [
            "Les clients reviennent quand la livraison est fiable. Notez vos zones de livraison, le coût pour chacune, le délai et le mode d'envoi : en main propre, par moto-taxi (boda boda, okada ou zémidjan), par colis en car ou par un service de coursier. Emballez bien la marchandise et envoyez un message au client quand le colis part, avec le nom du livreur ou le numéro du colis.",
            "Une politique de retours dit ce qui se passe si quelque chose ne va pas : par exemple, « Mauvaise taille ? Prévenez-nous sous 2 jours et nous l'échangerons s'il n'a pas été utilisé. » Gardez-la courte et juste, et appliquez-la à chaque fois. Au Maroc, une vendeuse de Casablanca pourrait dire : échange sous 3 jours, le client paie la livraison du retour sauf si l'article est défectueux.",
            "Les numéros de téléphone, les adresses et les commandes des clients sont privés. Ne les partagez pas, ne les publiez pas et n'ajoutez personne à un groupe ou à une liste de diffusion sans demander. Beaucoup de pays ont des lois sur la protection des données, par exemple la loi kényane sur la protection des données et la loi nigériane sur la protection des données de 2023. En cas de doute sur ce qui s'applique, renseignez-vous auprès de l'autorité nationale de protection des données.",
            "Après la livraison, demandez si tout va bien et invitez le client à laisser un avis ou une photo que vous pourrez partager, avec son accord."
          ],
          steps: ["Notez les zones, les coûts, les délais et le mode de livraison.", "Emballez bien et envoyez un message quand le colis part.", "Rédigez une politique de retours courte et juste, et appliquez-la.", "Gardez privés les numéros et adresses des clients ; demandez avant d'ajouter quelqu'un à une liste.", "Demandez un avis après la livraison."],
          words: [["Politique de retours", "votre règle sur ce qui se passe quand un client veut rendre ou échanger un produit."], ["Liste de diffusion", "une liste dans WhatsApp pour envoyer un même message à beaucoup de contacts ; seules les personnes qui ont enregistré votre numéro le reçoivent."], ["Données personnelles", "des informations sur une personne, comme son nom, son numéro de téléphone ou son adresse."]],
          slides: [
            { title: "Une livraison fiable", bullets: ["Zones, coût, délai et mode d'envoi", "Bien emballer", "Prévenir le client quand le colis part"] },
            { title: "Une politique de retours courte et juste", bullets: ["Ce qui peut être rendu et dans quel délai", "Qui paie la livraison du retour", "L'appliquer à chaque fois"] },
            { title: "Les données des clients sont privées", bullets: ["Ne pas partager ni publier les numéros et adresses", "Demander avant d'ajouter quelqu'un à une liste", "Se renseigner auprès de l'autorité nationale de protection des données"] }
          ],
          tryIt: "Tâche finale : rassemblez votre plan de boutique en ligne d'une page : où vous vendez et pourquoi, le texte de votre profil, trois annonces, votre confirmation de commande enregistrée, votre règle de paiement, et votre politique de livraison et de retours.",
          youCanNow: "livrer de façon fiable, gérer les retours de façon juste et garder privées les informations de vos clients.",
          quickCheck: [
            { objective: "O6", q: "Que doit contenir une politique de livraison ?", options: ["Votre code PIN", "Les adresses de vos clients", "Les zones de livraison, le coût, le délai et le mode d'envoi", "Seulement le mot « rapide »"], answer: 2, why: "Les zones, le coût, le délai et le mode d'envoi disent aux clients exactement à quoi s'attendre." },
            { objective: "O6", q: "Vous voulez envoyer une liste de prix chaque semaine à vos clients. Que faut-il faire ?", options: ["Publier tous leurs numéros dans un groupe public", "Vendre leurs numéros à un autre commerçant", "Ajouter des inconnus à partir d'une liste achetée", "Demander d'abord aux clients et garder leurs numéros privés"], answer: 3, why: "Les numéros des clients sont des données personnelles ; demandez avant de leur envoyer des messages groupés." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Vendre, se faire payer et livrer",
        questions: [
          { objective: "O4", q: "Un client pose une question à laquelle vous ne pouvez pas répondre maintenant. Que répondez-vous ?", options: ["Rien", "Dire quand vous aurez la réponse et revenir vers lui", "Lui dire d'aller ailleurs", "Envoyer un long message vocal sur autre chose"], answer: 1, why: "Donner un moment précis pour répondre garde le client et crée la confiance." },
          { objective: "O4", q: "Que fait le client après votre confirmation de commande ?", options: ["Il vous envoie son code PIN", "Rien", "Il répond « Oui » pour confirmer", "Il paie le double"], answer: 2, why: "Un « Oui » écrit montre que vous êtes tous les deux d'accord sur la même commande." },
          { objective: "O5", q: "Quand la marchandise peut-elle quitter votre boutique pour une commande payée par mobile money ?", options: ["Quand vous voyez l'argent sur votre propre compte", "Quand le client envoie une capture d'écran", "Quand quelqu'un appelle pour dire que l'argent est parti", "Quand le client promet"], answer: 0, why: "Seul l'argent sur votre propre compte est une preuve de paiement." },
          { objective: "O5", q: "Un homme vous appelle, dit travailler pour votre opérateur de mobile money et demande votre code PIN. Qu'est-ce qui est vrai ?", options: ["Le vrai personnel peut le demander", "Donnez-en la moitié", "Envoyez-le plutôt par SMS", "Un vrai opérateur ne demande jamais votre code PIN ; raccrochez"], answer: 3, why: "Les vrais opérateurs ne demandent jamais votre code PIN ; toute personne qui le fait est un escroc." },
          { objective: "O6", q: "Un client reçoit la mauvaise taille. Qu'est-ce qui aide le plus ?", options: ["Ignorer le message", "Une politique de retours claire que vous appliquez à chaque fois", "Accuser le livreur", "Publier le message du client en ligne"], answer: 1, why: "Une politique juste, appliquée à chaque fois, règle les problèmes et garde les clients." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Vendre en ligne en Afrique (WhatsApp Business, places de marché et réseaux sociaux)",
    questions: [
      { objective: "O1", q: "Où un petit vendeur devrait-il commencer à vendre en ligne ?", options: ["Partout à la fois", "Là où les clients sont déjà, et là où il peut suivre", "Seulement là où la publicité est la plus chère", "Là où personne d'autre ne vend rien"], answer: 1, why: "Un canal ne marche que si les clients y sont et que vous leur répondez." },
      { objective: "O1", q: "Lequel est une place de marché ?", options: ["Jiji", "Un message d'accueil", "Votre code PIN", "Une liste de diffusion"], answer: 0, why: "Jiji, Jumia, Kilimall et Konga sont des places de marché où les acheteurs cherchent parmi beaucoup de vendeurs." },
      { objective: "O1", q: "Les réseaux sociaux comme Instagram et TikTok vous aident surtout à :", options: ["Cacher vos produits", "Vérifier les paiements", "Être découvert par de nouveaux clients grâce aux photos et aux vidéos", "Éviter de répondre aux messages"], answer: 2, why: "Les réseaux sociaux servent à être trouvé par des gens qui ne vous connaissent pas encore." },
      { objective: "O2", q: "WhatsApp Business est :", options: ["Une banque", "Une place de marché qui prend une commission", "Une publicité payante", "Une application séparée pour les petites entreprises, avec un profil et une liste de produits"], answer: 3, why: "Elle ajoute un profil professionnel, des produits avec leurs prix et des messages automatiques." },
      { objective: "O2", q: "Qu'est-ce qui a sa place dans votre profil professionnel ?", options: ["Vos horaires d'ouverture et la zone desservie", "Votre mot de passe", "Les adresses de vos clients", "Votre code à usage unique"], answer: 0, why: "Les horaires et la zone disent aux clients quand et où vous servez." },
      { objective: "O2", q: "Chaque produit de votre liste devrait avoir :", options: ["Seulement une photo", "Une photo, un nom, un prix et une courte description", "Le code PIN de votre banque", "Pas de prix, pour que les clients demandent"], answer: 1, why: "La photo, le nom, le prix et la description permettent aux clients de choisir sans attendre." },
      { objective: "O3", q: "Le meilleur fond pour une photo de produit est :", options: ["Une rue animée", "Une table en désordre", "Un tissu ou un mur uni", "Un coin sombre"], answer: 2, why: "Un fond uni garde le regard sur le produit." },
      { objective: "O3", q: "Pourquoi montrer une main ou une pièce de monnaie à côté d'un produit ?", options: ["Pour montrer sa taille", "Pour cacher le produit", "Pour alourdir le fichier", "Les clients aiment les mains"], answer: 0, why: "Un objet connu sur la photo montre la taille du produit." },
      { objective: "O3", q: "Peut-on utiliser une plus belle photo du même produit trouvée sur internet ?", options: ["Oui, toujours", "Oui, si elle est plus lumineuse", "Seulement pour les articles chers", "Non ; montrez votre vrai produit pour que les clients reçoivent ce qu'ils voient"], answer: 3, why: "Des photos honnêtes évitent les plaintes et les retours." },
      { objective: "O4", q: "Une confirmation de commande indique :", options: ["Seulement le prix", "L'article, la quantité, le prix, la livraison et le paiement", "Votre code PIN et votre mot de passe", "Les noms d'autres clients"], answer: 1, why: "Tous les détails dans un seul message évitent les malentendus." },
      { objective: "O4", q: "Un client marchande dur et il est impoli. Que faites-vous ?", options: ["L'insulter à votre tour", "Publier ses messages", "Rester poli et donner votre meilleur prix", "Bloquer tous les clients"], answer: 2, why: "Rester poli protège votre réputation, même si cette vente ne se fait pas." },
      { objective: "O4", q: "Une réponse enregistrée (réponse rapide) sert surtout pour :", options: ["Votre liste de prix et vos zones de livraison", "Votre code PIN", "L'adresse d'un client", "Les commérages"], answer: 0, why: "Les messages que vous envoyez souvent peuvent être enregistrés et envoyés en quelques touches." },
      { objective: "O5", q: "Un SMS venant d'un numéro ordinaire dit « Vous avez reçu GHS 500 ». Vous :", options: ["Envoyez la marchandise", "Remerciez et envoyez la marchandise", "Le transférez à des amis", "Vérifiez d'abord votre propre solde de mobile money"], answer: 3, why: "Les fausses alertes viennent de numéros ordinaires ; seul votre propre compte est une preuve." },
      { objective: "O5", q: "Qui doit connaître le code PIN de votre mobile money ?", options: ["Vous seul", "Le client", "Le livreur", "Toute personne de l'entreprise qui appelle"], answer: 0, why: "Un code PIN est secret ; un vrai opérateur ne le demande jamais." },
      { objective: "O5", q: "Un message de « paiement par erreur » vous demande de renvoyer de l'argent. Le geste le plus sûr est :", options: ["Le renvoyer vite", "Renvoyer le double", "Vérifier votre propre solde et laisser l'opérateur gérer toute annulation", "Partager votre code PIN avec la personne"], answer: 2, why: "Les vraies annulations passent par l'opérateur, pas par vous en envoyant de l'argent à un inconnu." },
      { objective: "O5", q: "Pour un paiement à la livraison, le livreur doit :", options: ["Remettre le colis d'abord", "Compter l'argent avant de remettre le colis", "Accepter une promesse de payer plus tard", "Prendre en photo le code PIN du client"], answer: 1, why: "Compter d'abord veut dire que la marchandise ne part qu'une fois le paiement en main." },
      { objective: "O6", q: "Un bon message de livraison au client dit :", options: ["Rien jusqu'à l'arrivée", "Le colis est parti, avec le nom du livreur ou le numéro du colis", "Les adresses d'autres clients", "Votre code PIN"], answer: 1, why: "Dire aux clients que le colis est parti, et comment, crée la confiance." },
      { objective: "O6", q: "Les numéros de téléphone et les adresses des clients sont :", options: ["Libres de partage", "Quelque chose à vendre", "Des données personnelles que vous gardez privées", "Faits pour être publiés"], answer: 2, why: "Ce sont des données personnelles ; beaucoup de pays les protègent par la loi." },
      { objective: "O6", q: "Une politique de retours doit être :", options: ["Longue et secrète", "Différente pour chaque client", "Jamais écrite", "Courte, juste et appliquée à chaque fois"], answer: 3, why: "Une politique claire et juste, toujours appliquée, garde la confiance des clients." },
      { objective: "O6", q: "Où vérifiez-vous les règles de protection des données de votre pays ?", options: ["Auprès de l'autorité nationale de protection des données", "Dans une rumeur sur les réseaux sociaux", "Dans l'avis d'un client", "Dans une publicité de place de marché"], answer: 0, why: "L'autorité nationale, comme l'ODPC au Kenya ou la NDPC au Nigeria, publie les règles." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Où vendre", objective: "O1", notYet: "Aucun canal choisi, ou beaucoup de canaux sans raison.", meets: "Un ou deux canaux choisis, avec pour chacun qui y achète, le coût et le temps.", exceeds: "Indique aussi ce qui ferait ajouter ou abandonner un canal après trois mois." },
      { name: "Profil et liste de produits", objective: "O2", notYet: "Profil sans nom, horaires ou zone, ou moins de trois produits.", meets: "Profil avec nom, description, zone, horaires et paiement, plus au moins trois produits avec leurs prix.", exceeds: "Un ami ou un client l'a parcouru et un point peu clair a été corrigé." },
      { name: "Annonces", objective: "O3", notYet: "Photos floues ou empruntées, ou pas de prix ni de livraison.", meets: "Trois annonces avec de vraies photos nettes, un titre, un prix en monnaie locale, des détails et la livraison.", exceeds: "Chaque annonce a un gros plan et une photo de taille, et des remarques honnêtes comme la variation des couleurs." },
      { name: "Confirmation de commande", objective: "O4", notYet: "Pas de confirmation enregistrée, ou détails manquants.", meets: "Un message enregistré avec l'article, la quantité, le prix, le lieu, le coût et le jour de livraison, le paiement, et la demande de répondre Oui.", exceeds: "Des réponses enregistrées pour les prix, la livraison et le paiement en plus." },
      { name: "Règle de paiement", objective: "O5", notYet: "La marchandise peut partir sur une capture d'écran ou une promesse, ou le code PIN est partagé.", meets: "Règle écrite : la marchandise ne part que lorsque l'argent apparaît sur votre propre compte ; ne jamais partager un code PIN ou un code.", exceeds: "Couvre aussi les demandes de « paiement par erreur » et le comptage de l'argent à la livraison." },
      { name: "Livraison, retours et données", objective: "O6", notYet: "Pas de détails de livraison ni de règle de retour, ou les données des clients sont partagées.", meets: "Zones, coût, délai et mode de livraison, une courte politique de retours, et l'engagement de garder privées les données des clients.", exceeds: "On demande aux clients avant de les ajouter à une liste, et on demande un avis après la livraison." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui signalent leur première commande en ligne ou plus dans les 30 jours (enquête de suivi)",
      "Apprenants qui ne signalent aucune perte due à une fausse alerte de paiement dans les 30 jours suivant le cours",
      "Apprenants qui signalent des ventes mensuelles plus élevées après trois mois (suivi du programme)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone Android avec WhatsApp Business installé depuis la boutique d'applications officielle",
      "Trois produits (ou leurs photos) à mettre en vente",
      "Papier et stylo pour le tableau des canaux, les politiques et la règle de paiement",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "En groupe, faites le test de départ ensemble, puis un chapitre par séance ; les apprenants créent leur profil en direct et s'entraident.",
      "Faites la leçon sur les photos dehors, à la lumière du jour ; les apprenants échangent leurs téléphones et relisent les annonces des autres.",
      "Faites un jeu de rôle avec une fausse alerte de paiement et un appel de « paiement par erreur ». Ne demandez jamais aux apprenants de montrer un vrai code PIN, un vrai solde ou un vrai relevé.",
      "Rappelez aux apprenants que les menus des applications, les frais des places de marché et les règles sur les données changent, et qu'il faut vérifier dans l'application, sur la page vendeurs de la place de marché ou auprès de l'autorité nationale.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
