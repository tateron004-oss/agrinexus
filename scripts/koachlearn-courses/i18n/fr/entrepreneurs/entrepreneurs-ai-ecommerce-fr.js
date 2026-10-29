"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-ecommerce.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-ecommerce-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-ecommerce",
  category: "Entrepreneurs",
  name: "Le commerce en ligne avec l'IA",
  skills: "Étudier une niche de produits, Rédiger des fiches produits avec l'IA, Faire des photos de produits, Fixer des conditions de livraison et de retour, Répondre aux clients avec l'aide de l'IA, Utiliser les e-mails et les avis dans les règles",
  outcome: "étudier une niche de produits, utiliser l'IA pour rédiger des fiches produits honnêtes et faire des photos de produits propres, fixer des conditions de livraison et de retour qui respectent la règle de la FTC sur la vente à distance, et mettre en place des réponses aux clients assistées par l'IA, des e-mails de suivi et des demandes d'avis qui respectent les règles américaines.",
  about: [
    "Vendre en ligne n'a jamais été aussi simple à démarrer : vous pouvez vendre dans votre propre boutique (sur des plateformes comme Shopify, Square Online ou Wix), sur des places de marché (Etsy, Amazon, eBay) ou dans des boutiques sur les réseaux sociaux. L'IA peut aider à presque chaque étape, de la recherche d'une niche à la rédaction des fiches et aux réponses aux clients.",
    "Ce cours s'adresse aux personnes qui lancent ou développent une boutique en ligne. Au chapitre 1, vous étudierez une niche, rédigerez des fiches et créerez des photos de produits avec l'IA. Au chapitre 2, vous fixerez vos conditions de livraison et de retour, répondrez aux questions des clients et utiliserez les e-mails et les avis pour grandir, en suivant les règles américaines de la FTC (l'autorité américaine de protection des consommateurs).",
    "Chaque leçon dure environ cinq minutes, avec une tâche pratique. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les frais et les fonctions des plateformes changent souvent : consultez les pages de tarifs et d'aide de chaque plateforme avant de choisir."
  ],
  finalTask: "Construisez un kit de lancement pour une gamme de produits : un résumé d'un paragraphe de la niche avec des preuves de la demande, trois fiches produits terminées (titre, description, détails clés) avec des photos propres, des conditions de livraison et de retour écrites avec des délais que vous pouvez vraiment tenir, cinq modèles de réponse aux clients assistés par l'IA, et un e-mail de suivi plus une demande d'avis qui respectent la loi CAN-SPAM et les règles de la FTC sur les avis.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui lancent ou développent une petite boutique en ligne aux États-Unis : artisans, revendeurs et personnes qui ont une activité à côté, et qui vendent dans leur propre boutique, sur une place de marché ou sur les réseaux sociaux.",
    startingPoint: "Elles savent utiliser un téléphone ou un ordinateur, visiter des boutiques en ligne et écrire dans un assistant d'IA gratuit. Elles ont peu d'expérience pour étudier la demande, rédiger des fiches produits ou écrire des conditions de vente.",
    gap: "Les nouveaux vendeurs devinent souvent quoi vendre, copient des textes d'IA qui contiennent des affirmations fausses et promettent des délais de livraison qu'ils ne peuvent pas tenir. Ils doivent utiliser l'IA pour aller plus vite tout en restant honnêtes avec les acheteurs et en respectant les règles de la FTC, pour éviter les remboursements, les mauvais avis et les ennuis avec la loi.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un téléphone ou un ordinateur avec internet, et l'appareil photo d'un téléphone pour les photos de produits",
      "Temps : des leçons d'environ 5 minutes, à caser entre les tâches de l'entreprise",
      "Règles : la règle de la FTC sur la vente à distance, les règles de la FTC sur les avis et la loi CAN-SPAM s'appliquent aux vendeurs américains",
      "Vie privée : ne jamais coller l'adresse, la carte ou les détails de commande d'un client dans un outil d'IA"
    ],
    prerequisites: "Aucun. Les personnes qui découvrent les outils d'IA peuvent d'abord suivre « Introduction à l'IA et confiance numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un assistant d'IA et une vraie place de marché", action: "choisir une niche de produits et montrer que des gens y achètent déjà", standard: "avec au moins trois exemples réels tirés d'une place de marché comme preuves" },
    { id: "O2", condition: "À partir des vrais faits sur un produit", action: "rédiger avec l'aide de l'IA une fiche produit claire, facile à trouver et vraie", standard: "avec chaque affirmation vérifiée et rien de faux qui reste" },
    { id: "O3", condition: "Avec l'appareil photo d'un téléphone et un outil de retouche par IA", action: "créer des images qui montrent clairement le vrai produit", standard: "avec une photo de la taille et aucune retouche qui change l'aspect du produit" },
    { id: "O4", condition: "En suivant la règle de la FTC sur la vente à distance", action: "rédiger des conditions de livraison et de retour et un message de retard", standard: "avec des délais de livraison que vous pouvez vraiment tenir et une offre de remboursement dans le message de retard" },
    { id: "O5", condition: "À partir des questions que les clients de votre boutique posent le plus", action: "créer avec l'aide de l'IA des modèles de réponse qui n'utilisent que vos vraies conditions", standard: "avec cinq modèles vérifiés et aucune donnée privée de client donnée à l'IA" },
    { id: "O6", condition: "En suivant la loi CAN-SPAM et les règles de la FTC sur les avis", action: "rédiger un e-mail de suivi et une demande d'avis", standard: "avec une adresse, un moyen de se désinscrire et aucun avis faux ou payé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer des produits qui se vendent",
      lessons: [
        {
          objectives: ["O1"],
          title: "Étudier une niche de produits",
          minutes: 5,
          goal: "Choisir une niche de produits et vérifier que des gens achètent déjà.",
          text: [
            "Une niche est un groupe précis d'acheteurs avec un besoin précis : \"colliers faits main pour grands chiens\", \"kits de soins naturels pour les cheveux des enfants\", \"outils de jardinage pour petits balcons\". Il est plus facile de gagner dans une niche que dans une catégorie générale.",
            "Utilisez l'IA pour trouver des idées : \"Je peux fabriquer ou me procurer [produits]. Propose dix niches, l'acheteur de chacune et le problème que le produit résout.\" Puis vérifiez vous-même la vraie demande : cherchez des produits semblables sur la place de marché, regardez combien d'avis ont les meilleurs vendeurs, lisez leurs avis à 3 étoiles pour trouver des plaintes que vous pourriez régler, et regardez les suggestions de recherche.",
            "L'IA ne voit pas de façon fiable les ventes en direct et peut inventer des chiffres. Utilisez-la pour les idées et les questions ; utilisez de vraies pages de places de marché et vos propres conversations comme preuves."
          ],
          steps: ["Demandez à l'IA dix idées de niches selon ce que vous pouvez fabriquer ou vous procurer.", "Cherchez chaque meilleure idée sur une place de marché.", "Notez le nombre d'avis et les prix des meilleurs vendeurs.", "Lisez les avis à 3 étoiles pour trouver des problèmes que vous pourriez régler.", "Choisissez une niche avec une demande claire."],
          words: [["Niche", "un groupe précis d'acheteurs avec un besoin précis."], ["Demande", "le nombre de personnes qui veulent acheter quelque chose."], ["Place de marché", "un site web où de nombreux vendeurs proposent des produits, comme Etsy, Amazon ou eBay."]],
          slides: [
            { title: "Soyez précis", bullets: ["\"Colliers pour grands chiens\"", "Plus facile à gagner qu'une catégorie générale"] },
            { title: "L'IA pour les idées", bullets: ["Dix niches, acheteurs et problèmes", "Selon ce que vous pouvez fabriquer ou vous procurer"] },
            { title: "De vraies preuves", bullets: ["Cherchez sur la place de marché", "Nombre d'avis et prix des meilleurs vendeurs", "Les avis à 3 étoiles montrent des problèmes à régler"] },
            { title: "Attention", bullets: ["L'IA peut inventer des chiffres de ventes", "Utilisez de vraies pages comme preuves"] }
          ],
          tryIt: "Utilisez l'IA pour trouver dix niches, vérifiez-en trois sur une vraie place de marché, et écrivez un résumé d'un paragraphe de la niche choisie avec vos preuves de la demande.",
          youCanNow: "choisir une niche de produits à partir de vraies preuves de la demande.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui prouve que des gens achètent déjà dans une niche ?", options: ["Un outil d'IA qui dit que la niche est populaire", "De vraies fiches sur une place de marché, avec des ventes et des avis", "Des amis qui disent aimer l'idée", "Une niche où il n'y a aucun vendeur"], answer: 1, why: "De vraies fiches avec des ventes et des avis montrent une demande réelle, alors que l'IA peut inventer des chiffres." },
            { objective: "O1", q: "L'IA vous a donné dix idées de niche. Que faites-vous ensuite ?", options: ["Prendre la première de la liste", "Acheter du stock pour les dix", "En vérifier quelques-unes sur une vraie place de marché avant de choisir", "Choisir celle qui a le nom le plus long"], answer: 2, why: "Vérifier les idées sur une vraie place de marché transforme les idées de l'IA en preuves." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger des fiches produits honnêtes",
          minutes: 5,
          goal: "Rédiger avec l'IA un titre et une description de produit clairs, faciles à trouver et vrais.",
          text: [
            "Une bonne fiche répond aux questions de l'acheteur avant qu'il les pose : ce que c'est, pour qui, la taille, les matériaux, ce qui est inclus, l'entretien et le délai de livraison. Le titre doit utiliser les mots que les acheteurs recherchent, sans entasser les mots-clés.",
            "Donnez les vrais faits à l'IA et demandez : \"Écris un titre de produit de moins de 80 caractères et une description avec une courte introduction, 5 points et les conseils d'entretien. Utilise seulement ces faits : [faits].\" L'IA ajoute souvent des caractéristiques que vous n'avez pas citées ; supprimez tout ce qui n'est pas vrai.",
            "La FTC dit que les publicités doivent être vraies et appuyées par des preuves. Ne dites pas \"bio\", \"fait main\", \"fabriqué aux États-Unis\", n'annoncez pas de bienfaits pour la santé ou de \"meilleure vente\" sauf si c'est vrai et que vous pouvez le prouver. Vérifiez aussi les règles de chaque plateforme pour les fiches."
          ],
          steps: ["Notez tous les vrais faits sur le produit.", "Demandez à l'IA un titre et une description qui n'utilisent que ces faits.", "Supprimez tout ce que l'IA a ajouté et qui n'est pas vrai.", "Vérifiez les affirmations comme bio, fait main ou fabriqué aux États-Unis.", "Vérifiez les règles de la plateforme pour les fiches."],
          words: [["Fiche produit", "la page d'un produit dans une boutique ou sur une place de marché."], ["Mot-clé", "un mot ou une expression que les acheteurs tapent dans la recherche."]],
          slides: [
            { title: "Répondez aux questions des acheteurs", bullets: ["Quoi, pour qui, taille, matériaux", "Ce qui est inclus, entretien, délai de livraison"] },
            { title: "L'IA avec vos faits seulement", bullets: ["Titre de moins de 80 caractères", "Introduction, 5 points, conseils d'entretien", "Supprimez tout ce qui n'est pas vrai"] },
            { title: "Les affirmations demandent des preuves", bullets: ["\"Bio\", \"fait main\", \"fabriqué aux États-Unis\"", "Bienfaits pour la santé, \"meilleure vente\"", "Vérifiez aussi les règles de la plateforme"] }
          ],
          sources: [{ name: "FTC : bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Écrivez les faits de trois produits et utilisez l'IA pour rédiger chaque fiche. Retirez tout ce qui est faux et vérifiez chaque affirmation.",
          youCanNow: "rédiger des fiches produits claires, faciles à trouver et qui disent la vérité.",
          quickCheck: [
            { objective: "O2", q: "Que devez-vous donner à l'IA quand vous lui demandez de rédiger une fiche ?", options: ["Seulement les vrais faits sur le produit, en lui demandant de n'utiliser qu'eux", "La fiche d'un concurrent à copier mot pour mot", "Rien, pour qu'elle soit créative", "Des affirmations que vous espérez vraies"], answer: 0, why: "L'IA ne rédige des fiches honnêtes que si elle part de vos vrais faits." },
            { objective: "O2", q: "Le texte de l'IA dit que votre tasse « passe au lave-vaisselle », mais vous ne l'avez jamais testé. Que faites-vous ?", options: ["Le garder, car les acheteurs aiment ça", "Ajouter « probablement » devant", "Le déplacer à la fin de la description", "Retirer cette affirmation tant que vous ne pouvez pas la prouver"], answer: 3, why: "Les affirmations sur un produit doivent être vraies et appuyées par des preuves avant d'être utilisées." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faire des photos de produits propres",
          minutes: 5,
          goal: "Créer des photos et des visuels qui montrent clairement le vrai produit.",
          text: [
            "Les photos font vendre. Utilisez votre téléphone à la lumière du jour près d'une fenêtre, sur un fond uni, et prenez plusieurs angles plus un gros plan et une photo qui montre la taille (dans une main ou à côté d'un objet courant).",
            "Les outils d'IA peuvent aider : supprimer ou changer le fond, corriger la lumière, redimensionner pour chaque plateforme, et créer des visuels de mise en situation dans des outils comme Canva. Beaucoup de places de marché ont des règles pour la photo principale, comme un fond uni ; vérifiez les règles d'image de la plateforme.",
            "N'utilisez jamais l'IA pour que le produit paraisse différent de ce que l'acheteur recevra : pas de fausses couleurs, tailles, caractéristiques ou résultats. Des images trompeuses peuvent entraîner des retours, de mauvais avis, des sanctions de la plateforme et des problèmes de publicité mensongère."
          ],
          steps: ["Photographiez à la lumière du jour sur un fond uni.", "Prenez plusieurs angles, un gros plan et une photo de la taille.", "Utilisez des outils d'IA pour nettoyer le fond et redimensionner.", "Vérifiez les règles d'image de la plateforme.", "Comparez chaque image avec le vrai produit."],
          words: [["Photo de mise en situation", "une photo ou un visuel qui montre le produit en train d'être utilisé."], ["Détourage", "un outil de retouche qui découpe le produit pour enlever son fond."]],
          slides: [
            { title: "Photographiez bien", bullets: ["Lumière du jour près d'une fenêtre", "Fond uni", "Angles, gros plan, photo de la taille"] },
            { title: "L'IA aide à retoucher", bullets: ["Supprimer ou changer le fond", "Corriger la lumière, redimensionner", "Visuels de mise en situation dans Canva"] },
            { title: "Ne trompez jamais", bullets: ["Pas de fausses couleurs, tailles ou caractéristiques", "Vérifiez les règles d'image de chaque plateforme"] }
          ],
          tryIt: "Photographiez un produit (angles, gros plan, taille), nettoyez la photo principale avec un outil d'IA de détourage, et comparez-la avec le vrai produit avant de l'utiliser.",
          youCanNow: "créer des photos de produits propres et honnêtes avec l'aide de la retouche par IA.",
          quickCheck: [
            { objective: "O3", q: "Quel ensemble de photos montre un produit de façon honnête et claire ?", options: ["Une seule photo sombre prise la nuit", "Plusieurs angles, un gros plan et une photo de la taille", "Une seule image faite par l'IA d'un produit qui ressemble", "Une photo avec un fond chargé, plein d'autres objets"], answer: 1, why: "Plusieurs angles, un gros plan et une photo de la taille montrent aux acheteurs ce qu'ils vont vraiment recevoir." },
            { objective: "O3", q: "Un outil d'IA a rendu la couleur de votre écharpe plus vive qu'elle ne l'est. Que faites-vous ?", options: ["L'utiliser, car c'est plus joli", "L'utiliser et mettre le même filtre sur les autres photos", "La corriger pour que l'image corresponde au vrai produit", "Supprimer toutes vos photos et prendre des images de banque d'images"], answer: 2, why: "Les images doivent correspondre au vrai produit, sinon les acheteurs sont trompés et demandent un remboursement." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer des produits qui se vendent",
        questions: [
          { objective: "O1", q: "Laquelle est une niche ?", options: ["Des trucs", "Des outils de jardinage pour petits balcons", "Tout pour tout le monde", "Des produits"], answer: 1, why: "Elle nomme des acheteurs précis et un besoin précis." },
          { objective: "O1", q: "L'IA dit qu'un produit se vend à 10 000 unités par mois. Que faites-vous ?", options: ["Publier le chiffre comme un fait", "La croire", "Commander 10 000 unités", "Vérifier avec de vraies preuves sur la place de marché ; l'IA peut inventer des chiffres"], answer: 3, why: "L'IA ne voit pas de façon fiable les ventes en direct." },
          { objective: "O2", q: "L'IA a ajouté \"imperméable\" à votre fiche, mais le produit ne l'est pas. Que faites-vous ?", options: ["Le supprimer", "Le garder", "Le mettre en gras", "Ajouter \"garanti\""], answer: 0, why: "Les fiches doivent être vraies." },
          { objective: "O2", q: "Quelle affirmation demande une preuve avant de l'utiliser ?", options: ["\"Livré dans une boîte\"", "\"Bleu\"", "\"Fabriqué aux États-Unis\"", "\"Avec une carte\""], answer: 2, why: "Les affirmations d'origine doivent être vraies et prouvables." },
          { objective: "O3", q: "Quel usage de l'IA sur les photos de produits n'est PAS acceptable ?", options: ["Corriger la lumière", "Supprimer le fond", "Faire paraître le produit plus grand qu'il n'est", "Redimensionner pour la plateforme"], answer: 2, why: "Des images trompeuses induisent les acheteurs en erreur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Servir et grandir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Conditions de livraison et de retour",
          minutes: 6,
          goal: "Rédiger des conditions de livraison et de retour qui respectent la règle de la FTC sur la vente à distance.",
          text: [
            "La règle de la FTC sur les marchandises commandées par courrier, internet ou téléphone (Mail, Internet, or Telephone Order Merchandise Rule) dit : si vous annoncez un délai de livraison, vous devez avoir une raison valable de croire que vous pouvez le tenir ; si vous n'en annoncez pas, vous devez avoir une raison valable de pouvoir expédier sous 30 jours.",
            "Si vous ne pouvez pas expédier à temps, vous devez prévenir l'acheteur, donner une nouvelle date et lui offrir le choix d'annuler pour être remboursé rapidement. Les remboursements des paiements en espèces, par chèque, mandat ou carte de crédit d'un tiers doivent être faits dans les sept jours ouvrables qui suivent l'annulation, et un avoir en boutique ne peut pas remplacer un remboursement obligatoire.",
            "L'IA peut rédiger des pages de conditions claires : \"Écris des conditions de livraison et de retour aimables pour une petite boutique en ligne. Nous expédions en 3 à 5 jours ouvrables. Retours acceptés sous 30 jours pour les articles non utilisés ; l'acheteur paie le retour.\" Puis vérifiez qu'elles correspondent à ce que vous faites vraiment et aux règles de la plateforme."
          ],
          steps: ["Choisissez un délai de livraison que vous pouvez vraiment tenir.", "Choisissez vos règles de retour.", "Demandez à l'IA de rédiger les deux en mots simples.", "Vérifiez-les par rapport à la règle de la FTC et aux règles de votre plateforme.", "Écrivez un modèle de message de retard qui propose l'annulation et le remboursement."],
          words: [["Règle sur la vente à distance", "la règle de la FTC sur les délais de livraison, les avis de retard et les remboursements pour les commandes par courrier, internet ou téléphone."], ["Nouvelle date", "une nouvelle date d'expédition que vous donnez à l'acheteur après un retard."]],
          slides: [
            { title: "Délai de livraison (règle de la FTC)", bullets: ["Délai annoncé : une raison valable de le tenir", "Aucun délai annoncé : expédier sous 30 jours"] },
            { title: "Retards", bullets: ["Prévenez l'acheteur, donnez une nouvelle date", "Proposez l'annulation et un remboursement rapide", "Remboursement sous 7 jours ouvrables (espèces, carte)"] },
            { title: "Rédigez avec l'IA", bullets: ["Pages de conditions simples et aimables", "Conformes à ce que vous faites vraiment", "Vérifiez aussi les règles de la plateforme"] }
          ],
          sources: [{ name: "FTC : guide pour les entreprises sur la règle de vente par courrier, internet ou téléphone (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" }],
          tryIt: "Rédigez vos conditions de livraison et de retour avec l'IA, vérifiez-les par rapport à la règle de la FTC, et écrivez un message de retard qui donne une nouvelle date et propose l'annulation avec remboursement.",
          youCanNow: "fixer des conditions de livraison et de retour claires, honnêtes et conformes à la règle de la FTC.",
          quickCheck: [
            { objective: "O4", q: "Que doivent promettre des conditions de livraison ?", options: ["Le délai le plus court proposé par un vendeur", "Aucun délai, pour ne jamais être en retard", "Une livraison le lendemain pour chaque commande", "Un délai que vous avez une vraie raison de pouvoir tenir"], answer: 3, why: "La règle de la FTC dit qu'il faut une raison valable de pouvoir tenir tout délai annoncé." },
            { objective: "O4", q: "À cause d'un retard du fournisseur, une commande partira en retard. Que faites-vous ?", options: ["Prévenir l'acheteur, donner une nouvelle date et proposer l'annulation avec remboursement", "Ne rien dire en espérant qu'il ne remarque pas", "Proposer seulement un avoir", "Annuler la commande sans le prévenir"], answer: 0, why: "La règle exige un avis de retard avec une nouvelle date et le choix d'annuler pour être remboursé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Répondre aux clients avec l'aide de l'IA",
          minutes: 5,
          goal: "Créer des modèles de réponse pour les cinq questions que vos clients posent le plus.",
          text: [
            "Les boutiques en ligne reçoivent sans cesse les mêmes questions : où est ma commande ? Puis-je retourner cet article ? Quelle taille choisir ? Livrez-vous dans ma région ? Est-ce en stock ? Écrivez un modèle pour chacune, avec des espaces à remplir pour les détails.",
            "L'IA peut rédiger des modèles aimables à partir de vos vraies conditions. Pour une nouvelle question, résumez-la sans le nom, l'adresse ou le numéro de commande du client et demandez une réponse à l'IA, puis complétez vous-même les détails.",
            "Si vous ajoutez un chatbot à votre boutique, ne lui donnez que vos vraies conditions et les vrais faits sur vos produits, dites aux clients qu'il est automatique, et permettez-leur de joindre facilement une personne. Vérifiez ce que le service de chatbot fait des données des clients."
          ],
          steps: ["Listez les cinq questions que les clients posent le plus.", "Donnez vos vraies conditions à l'IA et demandez des modèles avec des [espaces à remplir].", "Vérifiez chaque modèle par rapport à vos conditions.", "Pour les nouvelles questions, résumez sans données privées.", "Si vous utilisez un chatbot, donnez-lui de vrais faits et un moyen de joindre une personne."],
          words: [["Modèle de réponse", "une réponse toute prête avec des espaces que vous remplissez."], ["Chatbot", "un programme automatique qui répond aux messages des clients."]],
          slides: [
            { title: "Les questions habituelles", bullets: ["Où est ma commande ? Retours ?", "Tailles, zone de livraison, stock"] },
            { title: "Des modèles à partir de vos conditions", bullets: ["Aimables, avec des [espaces à remplir]", "Vérifiez qu'ils correspondent à ce que vous faites"] },
            { title: "Chatbots", bullets: ["Seulement vos vraies conditions et vrais faits", "Dites qu'il est automatique", "Un moyen simple de joindre une personne"] }
          ],
          tryIt: "Rédigez avec l'IA cinq modèles de réponse pour les questions les plus fréquentes de vos clients, en n'utilisant que vos vraies conditions, et vérifiez chacun.",
          youCanNow: "répondre aux questions des clients rapidement et avec exactitude grâce à des modèles rédigés avec l'IA.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui rend un modèle de réponse aux clients sûr à utiliser ?", options: ["Il a l'air aimable, même si les faits sont devinés", "Il est fondé sur vos vraies conditions et vous l'avez vérifié", "L'IA l'a écrit, donc il est forcément juste", "Il promet tout ce que le client veut"], answer: 1, why: "Les modèles doivent correspondre à vos vraies conditions, donc vous vérifiez chacun de ceux que l'IA rédige." },
            { objective: "O5", q: "L'e-mail d'un client contient son numéro de commande et son adresse personnelle. Comment obtenez-vous l'aide de l'IA pour répondre ?", options: ["Coller tout l'e-mail dans l'IA", "Demander au client de renvoyer son adresse", "Résumer la question sans les données privées", "La publier sur un forum public pour avoir des conseils"], answer: 2, why: "Retirer les données privées protège le client tout en vous laissant l'aide de l'IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "E-mails de suivi et avis, dans les règles",
          minutes: 5,
          goal: "Rédiger un e-mail de suivi et une demande d'avis qui respectent la loi CAN-SPAM et les règles de la FTC sur les avis.",
          text: [
            "Les e-mails aux anciens acheteurs (remerciements, retour en stock, offres) amènent des ventes répétées. Utilisez l'IA pour rédiger des e-mails courts, et respectez la loi américaine CAN-SPAM : expéditeur et objet honnêtes, dire clairement qu'il s'agit d'une publicité quand c'en est une, mettre votre adresse postale et un moyen clair de se désinscrire, et respecter les désinscriptions sous 10 jours ouvrables. La plupart des plateformes de boutique et d'e-mails ajoutent les liens de désinscription pour vous.",
            "Les avis créent la confiance. Demandez un avis honnête à chaque acheteur, pas seulement aux clients contents. La règle de la FTC interdit les faux avis et faux témoignages (y compris ceux générés par l'IA au nom de personnes qui n'existent pas) et interdit les récompenses données seulement pour des avis positifs. N'achetez jamais d'avis et ne les faites jamais écrire par l'IA.",
            "Utilisez l'IA pour lire vos avis et trouver des tendances : ce que les acheteurs adorent et ce dont ils se plaignent. Réglez la plainte principale, et parlez de cette amélioration dans vos fiches ou vos e-mails."
          ],
          steps: ["Rédigez avec l'IA un court e-mail de suivi pour les anciens acheteurs.", "Vérifiez les bases de CAN-SPAM : lignes honnêtes, adresse, désinscription.", "Rédigez une demande d'avis honnête pour chaque acheteur.", "Ne récompensez jamais seulement les bons avis et ne faites jamais écrire d'avis par l'IA.", "Utilisez l'IA pour trouver des tendances dans vos vrais avis."],
          words: [["Vente répétée", "une vente à quelqu'un qui a déjà acheté chez vous."], ["Désinscription", "un moyen d'arrêter de recevoir des e-mails."]],
          slides: [
            { title: "Écrivez aux anciens acheteurs", bullets: ["Remerciements, retours en stock, offres", "L'IA rédige des e-mails courts"] },
            { title: "Bases de CAN-SPAM", bullets: ["Expéditeur et objet honnêtes", "Votre adresse postale", "Désinscription respectée sous 10 jours ouvrables"] },
            { title: "Avis", bullets: ["Demandez un avis honnête à chaque acheteur", "Aucun faux avis ni avis écrit par l'IA", "Aucune récompense seulement pour les bons avis"] }
          ],
          sources: [{ name: "FTC : guide de conformité à la loi CAN-SPAM pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FTC : règle finale interdisant les faux avis et témoignages (communiqué de presse, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Tâche finale : rédigez un e-mail de suivi et une demande d'avis qui respectent les règles, puis rassemblez votre kit de lancement : résumé de la niche, trois fiches avec photos, conditions, cinq modèles de réponse, e-mail et demande d'avis.",
          youCanNow: "faire tourner une boutique en ligne avec l'aide de l'IA, en restant honnête avec les acheteurs et en respectant les règles américaines.",
          quickCheck: [
            { objective: "O6", q: "Que doit contenir un e-mail marketing envoyé aux clients ?", options: ["Un code de réduction", "Votre adresse postale et un moyen de se désinscrire", "Une photo de chaque produit", "L'historique des commandes du client"], answer: 1, why: "La loi CAN-SPAM exige une adresse postale et un moyen de désinscription qui marche dans les e-mails marketing." },
            { objective: "O6", q: "Un ami propose d'écrire des avis cinq étoiles pour votre boutique. Que faites-vous ?", options: ["Accepter, car il veut bien faire", "En accepter seulement trois", "Demander à l'IA d'en écrire quelques autres du même genre", "Refuser et demander de vrais avis honnêtes à vos acheteurs"], answer: 3, why: "La FTC interdit les faux avis, donc vous demandez des avis honnêtes à de vrais acheteurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Servir et grandir",
        questions: [
          { objective: "O4", q: "Vous n'annoncez aucun délai de livraison. Selon la règle de la FTC, vous devez avoir une raison valable de pouvoir expédier sous :", options: ["1 an", "1 jour", "30 jours", "90 jours"], answer: 2, why: "C'est la \"règle des 30 jours\" de la FTC." },
          { objective: "O4", q: "Vous ne pouvez pas expédier à temps. Que devez-vous faire ?", options: ["Annuler sans prévenir", "Ne rien dire", "Proposer seulement un avoir", "Prévenir l'acheteur, donner une nouvelle date et proposer l'annulation avec remboursement"], answer: 3, why: "La règle exige un avis de retard et une possibilité d'annuler." },
          { objective: "O5", q: "La question d'un client contient son adresse personnelle. Comment obtenir l'aide de l'IA ?", options: ["Tout coller", "Résumer la question sans l'adresse", "La publier", "Ignorer le client"], answer: 1, why: "Gardez les données privées hors des outils d'IA." },
          { objective: "O6", q: "Quelle pratique sur les avis est permise ?", options: ["Demander un avis honnête à chaque acheteur", "Offrir un cadeau seulement pour les avis à 5 étoiles", "Écrire des avis avec l'IA", "Acheter des avis"], answer: 0, why: "Des avis honnêtes de vrais acheteurs sont acceptables." },
          { objective: "O6", q: "Dans quel délai devez-vous respecter une demande de désinscription ?", options: ["Jamais", "Dans l'année", "Sous 10 jours ouvrables", "Seulement si on vous le demande deux fois"], answer: 2, why: "C'est l'exigence de CAN-SPAM indiquée dans le guide de la FTC." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Le commerce en ligne avec l'IA",
    questions: [
      { objective: "O1", q: "Laquelle est une place de marché ?", options: ["Un tableur", "Etsy", "Une imprimante", "Un compte e-mail"], answer: 1, why: "Etsy, Amazon et eBay sont des places de marché." },
      { objective: "O1", q: "Où vérifier les frais d'une plateforme ?", options: ["Auprès d'un client", "En devinant", "Dans une vieille vidéo", "Sur les pages de tarifs et d'aide de la plateforme"], answer: 3, why: "Les frais changent souvent." },
      { objective: "O1", q: "Lire les avis à 3 étoiles des concurrents vous aide à :", options: ["Trouver leurs mots de passe", "Copier leurs photos", "Écrire de faux avis", "Trouver des problèmes que vous pourriez régler"], answer: 3, why: "Les plaintes montrent des besoins non satisfaits." },
      { objective: "O1", q: "Dans l'étude d'une niche, l'IA sert surtout à :", options: ["Donner les chiffres exacts des ventes en direct", "Trouver des idées et des questions, avec de vraies pages comme preuves", "Prendre les décisions finales", "Acheter du stock"], answer: 1, why: "L'IA peut inventer des chiffres." },
      { objective: "O2", q: "Une bonne fiche répond à :", options: ["Rien", "Seulement le prix", "Ce que c'est, pour qui, la taille, les matériaux, le délai de livraison", "L'histoire de votre vie"], answer: 2, why: "Elle répond aux questions avant qu'elles soient posées." },
      { objective: "O2", q: "Quand vous demandez une fiche à l'IA, donnez-lui :", options: ["Seulement les vrais faits, en lui demandant de n'utiliser qu'eux", "Rien, laissez-la deviner", "La fiche d'un concurrent à copier", "Vos coordonnées bancaires"], answer: 0, why: "Les faits évitent les caractéristiques inventées." },
      { objective: "O2", q: "Un mot-clé, c'est :", options: ["Un code de réduction", "Un mot de passe", "Un mot que les acheteurs tapent dans la recherche", "Une photo de produit"], answer: 2, why: "Les mots-clés aident les acheteurs à trouver les fiches." },
      { objective: "O2", q: "Selon les règles de la FTC, les affirmations sur un produit doivent être :", options: ["Vraies et appuyées par des preuves", "Excitantes", "Courtes", "Écrites par l'IA"], answer: 0, why: "La vérité en publicité s'applique aux fiches." },
      { objective: "O3", q: "Pour les photos de produits, une bonne installation est :", options: ["Une pièce sombre", "La lumière du jour et un fond uni", "Un fond chargé", "Une seule photo floue"], answer: 1, why: "Des photos claires font vendre." },
      { objective: "O3", q: "Une photo de la taille montre :", options: ["Le prix", "Seulement le logo", "Le carton d'expédition", "Le produit à côté d'une main ou d'un objet courant"], answer: 3, why: "Elle aide les acheteurs à comprendre les dimensions." },
      { objective: "O3", q: "Quelle retouche par IA est acceptable ?", options: ["Supprimer le fond", "Changer la couleur du produit pour une couleur que vous ne vendez pas", "Ajouter des caractéristiques qu'il n'a pas", "Le faire paraître plus grand"], answer: 0, why: "Nettoyer le fond ne trompe personne." },
      { objective: "O4", q: "Si vous annoncez un délai de livraison, il vous faut :", options: ["L'accord de l'IA", "Rien", "Le soutien d'une célébrité", "Une raison valable de croire que vous pouvez le tenir"], answer: 3, why: "La règle de la FTC exige une raison valable." },
      { objective: "O4", q: "Un avis de retard doit offrir à l'acheteur :", options: ["Un prix plus élevé", "Seulement un avoir", "Le choix d'annuler pour être remboursé rapidement", "Rien"], answer: 2, why: "Les acheteurs peuvent choisir d'annuler." },
      { objective: "O4", q: "Après une annulation, le remboursement d'une commande payée par carte ou en espèces est dû sous :", options: ["Six mois", "Sept jours ouvrables", "Un an", "Jamais"], answer: 1, why: "Le guide de la FTC dit sept jours ouvrables." },
      { objective: "O4", q: "Selon la règle, un avoir peut-il remplacer un remboursement obligatoire ?", options: ["Seulement le week-end", "Oui, toujours", "Seulement pour les petites commandes", "Non"], answer: 3, why: "Le guide dit qu'un avoir ne peut pas remplacer un remboursement obligatoire." },
      { objective: "O5", q: "Les modèles de réponse doivent être fondés sur :", options: ["Les conditions des concurrents", "Ce que l'IA imagine", "Vos vraies conditions", "Rien"], answer: 2, why: "Les modèles doivent correspondre à ce que vous faites vraiment." },
      { objective: "O5", q: "Le chatbot d'une boutique doit :", options: ["Dire qu'il est automatique et proposer un moyen de joindre une personne", "Se faire passer pour une personne", "Promettre n'importe quel remboursement", "N'avoir aucun fait"], answer: 0, why: "L'honnêteté et l'accès à un humain créent la confiance." },
      { objective: "O6", q: "Les e-mails marketing doivent contenir :", options: ["Le mot de passe de l'acheteur", "Votre adresse postale et un moyen de se désinscrire", "Une fausse date limite", "Des publicités cachées"], answer: 1, why: "Ce sont les bases de CAN-SPAM." },
      { objective: "O6", q: "La règle de la FTC contre les faux avis interdit :", options: ["De demander des avis honnêtes", "Les avis générés par l'IA au nom de personnes qui n'existent pas", "De répondre aux avis", "D'afficher de vrais avis"], answer: 1, why: "Les faux avis, y compris ceux faits par l'IA, sont interdits." },
      { objective: "O6", q: "Utiliser l'IA sur vos vrais avis peut vous aider à :", options: ["Trouver des tendances dans ce que les acheteurs adorent et ce dont ils se plaignent", "Supprimer les mauvais avis", "Écrire plus d'avis", "Changer les notes"], answer: 0, why: "Les tendances montrent ce qu'il faut améliorer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      8,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Une niche avec des preuves",
        objective: "O1",
        notYet: "La niche est une supposition, ou la seule preuve est ce que l'IA a dit.",
        meets: "Le résumé nomme la niche et donne de vraies preuves de la demande tirées d'une place de marché.",
        exceeds: "Il nomme aussi un problème tiré des avis des concurrents que votre produit pourrait régler."
      },
      {
        name: "Des fiches honnêtes",
        objective: "O2",
        notYet: "Une fiche contient une affirmation fausse ou non vérifiée.",
        meets: "Trois fiches avec un titre clair, une description et les détails clés, tous vrais.",
        exceeds: "Chaque fiche utilise aussi les mots que les acheteurs cherchent et indique la taille, les matériaux et le délai de livraison."
      },
      {
        name: "Des images claires et fidèles",
        objective: "O3",
        notYet: "Les images ne sont pas claires, ou une retouche change l'aspect du produit.",
        meets: "Chaque produit a une image principale propre et une photo de la taille qui correspondent au vrai produit.",
        exceeds: "Chaque produit a aussi plusieurs angles et un gros plan sur les détails."
      },
      {
        name: "Livraison et retours",
        objective: "O4",
        notYet: "Pas de délai de livraison, ou un délai que vous ne pouvez pas tenir ; pas de plan en cas de retard.",
        meets: "Des conditions écrites avec un délai de livraison que vous pouvez tenir et un message de retard qui propose un remboursement.",
        exceeds: "Les conditions de retour disent aussi clairement qui paie le renvoi et en combien de temps le remboursement est fait."
      },
      {
        name: "Réponses aux clients",
        objective: "O5",
        notYet: "Moins de cinq modèles, ou un modèle qui ne correspond pas à vos conditions.",
        meets: "Cinq modèles vérifiés, fondés sur vos vraies conditions.",
        exceeds: "Les modèles disent aussi quand le client aura une réponse et comment joindre une personne."
      },
      {
        name: "E-mail et demande d'avis",
        objective: "O6",
        notYet: "L'e-mail n'a pas d'adresse ni de désinscription, ou la demande d'avis offre une récompense pour un bon avis.",
        meets: "L'e-mail contient votre adresse et un moyen de se désinscrire, et la demande d'avis demande des avis honnêtes.",
        exceeds: "La demande d'avis est envoyée à chaque acheteur, pas seulement aux clients contents."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui publient au moins une fiche produit dans les 30 jours (enquête de suivi)",
      "Les apprenants qui font une première vente en ligne dans les 90 jours",
      "Les apprenants qui commencent un autre cours Koach Learn sur l'entreprise dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "L'appareil photo d'un téléphone et un fond uni pour les photos de produits",
      "Un assistant d'IA gratuit (comme ChatGPT, Microsoft Copilot ou Google Gemini) et un outil gratuit de détourage",
      "Un vrai produit, ou un produit que vous prévoyez de vendre",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez à chaque apprenant d'apporter un vrai produit ou une idée de produit précise, pour que la pratique construise un vrai kit de lancement.",
      "Consultez ensemble sur ftc.gov les pages sur la règle de la vente à distance, les règles sur les avis et la loi CAN-SPAM, plutôt que de vous fier aux résumés de l'IA.",
      "Rappelez aux apprenants de ne jamais coller le nom, l'adresse ou les détails de commande d'un client dans un outil d'IA.",
      "Les frais des plateformes changent souvent : faites vérifier aux apprenants la page de tarifs de chaque plateforme avant d'en choisir une.",
      "Notez le kit de lancement avec la grille et donnez votre retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
