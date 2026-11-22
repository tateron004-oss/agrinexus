"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-products-services.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-products-services-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-products-services",
  category: "Entrepreneurs",
  name: "Créer des produits et services avec l'IA",
  skills: "Trouver un problème qui vaut la peine d'être résolu, Concevoir un service assisté par l'IA, Écrire un prompt d'instructions réutilisable, Tester avec de vrais clients, Fixer le prix et le décrire honnêtement",
  outcome: "concevoir un petit produit ou service assisté par l'IA pour un vrai problème de clients, créer une version simple qui fonctionne avec un outil d'IA gratuit et un prompt d'instructions réutilisable, le tester avec trois personnes, et le décrire et fixer son prix honnêtement.",
  about: [
    "Beaucoup de nouvelles entreprises utilisent maintenant l'IA pour rendre un service plus vite ou moins cher : aide pour les CV, offres de réseaux sociaux pour les commerces locaux, traduction de menus, remise en ordre de la comptabilité, plans de repas, plans de cours et plus encore. Ce cours vous montre comment en créer un de la bonne façon.",
    "Vous partirez d'un vrai problème de clients, déciderez où l'IA aide et où une personne vérifie, créerez une version simple avec un assistant IA gratuit et un prompt d'instructions réutilisable, la testerez avec de vraies personnes, puis fixerez son prix et la décrirez sans trop promettre.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche pratique. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin. Aucune programmation n'est nécessaire."
  ],
  finalTask: "Produisez une fiche produit d'une page pour votre service assisté par l'IA : le problème du client, ce que le client reçoit, les étapes (en indiquant celles faites par l'IA et les vérifications humaines), votre prompt d'instructions réutilisable, les résultats des tests avec trois personnes, votre prix et comment vous l'avez calculé, et une description honnête sans affirmation que vous ne pouvez pas prouver.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises, nouveaux ou déjà installés, qui veulent proposer un service qui utilise l'IA pour livrer plus vite ou moins cher, comme l'aide au CV, des forfaits pour les réseaux sociaux, la traduction de menus ou des plans de cours.",
    startingPoint: "Ils utilisent un assistant IA pour leurs propres écrits. La plupart n'ont jamais conçu un service autour de l'IA, écrit un prompt d'instructions réutilisable, testé avec de vrais clients ou fixé le prix d'un travail assisté par l'IA.",
    gap: "Beaucoup de services d'IA partent de l'outil au lieu d'un vrai problème, sautent les vérifications humaines, ont un prix qui oublie le temps de vérification et promettent trop sur ce que fait l'IA. Les entrepreneurs doivent créer un petit service testé et décrit honnêtement, pour que les clients le paient, obtiennent de bons résultats et lui fassent confiance.",
    constraints: [
      "Aucune programmation nécessaire ; des mots simples tout du long",
      "Appareils : un ordinateur avec un assistant IA gratuit et un tableur",
      "Temps : environ cinq minutes par leçon, plus des tests avec de vraies personnes",
      "Les affirmations sur le produit doivent être vraies et prouvées (FTC, l'agence américaine de protection des consommateurs) ; les questions d'impôts vont aux sources officielles ou à un comptable",
      "Les détails privés des testeurs et des clients restent hors de l'IA autant que possible"
    ],
    prerequisites: "« Introduction à l'IA pour les entrepreneurs », ou l'utilisation régulière d'un assistant IA pour les écrits professionnels."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de cinq problèmes de clients que vous pourriez résoudre", action: "choisir un problème réel, fréquent et pénible pour un service assisté par l'IA", standard: "après avoir demandé à au moins une vraie personne comment elle s'y prend aujourd'hui" },
    { id: "O2", condition: "À partir du problème choisi", action: "décrire le service en étapes numérotées marquées IA, personne ou outil, avec les entrées et un livrable", standard: "avec une vérification humaine avant toute livraison" },
    { id: "O3", condition: "Avec un assistant IA gratuit", action: "écrire un prompt d'instructions réutilisable avec un rôle, des règles, un format de sortie et des emplacements", standard: "qui donne des résultats réguliers pour deux clients fictifs" },
    { id: "O4", condition: "Avec jusqu'à trois vraies personnes", action: "rendre votre service, chronométrer chaque étape et noter leurs retours avec leurs propres mots", standard: "en écrivant au moins un changement et en testant de nouveau" },
    { id: "O5", condition: "À partir de vos coûts et des retours des testeurs", action: "calculer le prix d'un forfait dans un tableur", standard: "en couvrant tous les coûts, y compris le temps de vérification, et en laissant un bénéfice" },
    { id: "O6", condition: "Pour votre service terminé", action: "écrire une description de produit qui dit honnêtement ce que fait l'IA et ce qu'une personne vérifie", standard: "sans aucune affirmation que vous ne pouvez pas prouver" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Concevoir le produit",
      lessons: [
        {
          objectives: ["O1"],
          title: "Partir d'un problème, pas de l'IA",
          minutes: 5,
          goal: "Choisir un vrai problème de clients qu'un service assisté par l'IA pourrait résoudre.",
          text: [
            "L'erreur la plus courante est de commencer par « Je veux vendre quelque chose avec l'IA ». Partez plutôt d'un problème que les gens paient déjà pour régler, ou dont ils se plaignent souvent : « Les petits restaurants n'ont pas le temps de publier sur les réseaux sociaux. » « Les demandeurs d'emploi ne savent pas décrire leurs compétences. »",
            "Les bons problèmes sont fréquents, pénibles et précis. Demandez-vous : qui a ce problème ? Comment le résout-il aujourd'hui ? Combien cela lui coûte-t-il en argent ou en temps ? Me paierait-il pour le résoudre plus vite ou mieux ?",
            "L'IA peut vous aider à trouver et à trier des idées, mais parlez à au moins trois vraies personnes qui ont le problème avant de construire quoi que ce soit."
          ],
          steps: ["Listez cinq problèmes que vous avez vu des personnes ou des entreprises rencontrer.", "Demandez à l'IA de vous aider à noter chacun : fréquence, pénibilité, solution actuelle.", "Choisissez le premier.", "Parlez à trois personnes qui l'ont et demandez-leur comment elles font aujourd'hui."],
          words: [["Problème qui vaut la peine d'être résolu", "un problème fréquent, pénible et précis pour lequel les gens dépensent déjà de l'argent ou du temps."]],
          slides: [
            { title: "Partez d'un problème", bullets: ["Pas de « Je veux vendre de l'IA »", "Un problème que les gens paient pour régler ou dont ils se plaignent"] },
            { title: "Les bons problèmes sont", bullets: ["Fréquents", "Pénibles", "Précis"] },
            { title: "Posez quatre questions", bullets: ["Qui l'a ?", "Comment le résout-il aujourd'hui ?", "Combien cela lui coûte-t-il ?", "Vous paierait-il ?"] },
            { title: "Parlez à de vraies personnes", bullets: ["Au moins trois, avant de construire"] }
          ],
          tryIt: "Listez cinq problèmes, utilisez l'IA pour vous aider à les noter, choisissez-en un et demandez à au moins une vraie personne qui a ce problème comment elle s'en occupe aujourd'hui.",
          youCanNow: "choisir un vrai problème de clients autour duquel construire un service assisté par l'IA.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui fait qu'un problème de clients vaut la peine de créer un service ?", options: ["Il est fréquent, pénible et précis", "C'est quelque chose pour lequel l'IA est célèbre", "Vous êtes le seul à l'avoir", "Il arrive une fois tous les dix ans"], answer: 0, why: "Les problèmes fréquents, pénibles et précis sont ceux que les gens paient pour régler." },
            { objective: "O1", q: "Vous avez une excellente idée mais n'avez parlé à personne qui a le problème. Que faites-vous ensuite ?", options: ["Commencer à construire tout de suite", "Demander à de vraies personnes comment elles s'y prennent aujourd'hui", "Fixer un prix", "Acheter des publicités"], answer: 1, why: "Parler d'abord à de vraies personnes vous dit si le problème est réel." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Décider où l'IA aide et où vous vérifiez",
          minutes: 5,
          goal: "Décrire votre service en étapes, en indiquant celles faites par l'IA et celles faites par une personne.",
          text: [
            "Un service assisté par l'IA est une suite d'étapes. Exemple, une offre de réseaux sociaux pour un restaurant : 1) recevoir les photos et les plats du jour de la semaine du patron (humain), 2) rédiger les légendes (IA), 3) vérifier les faits, les prix et le ton (humain), 4) créer les visuels dans Canva (avec l'aide de l'IA), 5) envoyer pour approbation (humain), 6) programmer les publications (outil).",
            "Placez une personne à chaque étape où une erreur pourrait nuire au client : faits, prix, santé, questions juridiques ou d'argent, et tout ce qui est publié sous le nom du client. Cet « humain dans la boucle » est ce que les clients paient : la vitesse de l'IA, votre jugement.",
            "Notez ce qui entre au départ (ce dont vous avez besoin de la part du client) et ce qui sort à la fin (exactement ce qu'il reçoit)."
          ],
          steps: ["Notez ce dont vous avez besoin du client au départ.", "Listez chaque étape pour rendre le service.", "Marquez chaque étape : IA, humain ou outil.", "Ajoutez une vérification humaine avant que quoi que ce soit parte chez le client.", "Notez exactement ce que le client reçoit à la fin."],
          words: [["Humain dans la boucle", "une personne vérifie ou approuve le travail de l'IA avant qu'il soit utilisé."], ["Livrable", "la chose finie que le client reçoit."]],
          slides: [
            { title: "Un service est une suite d'étapes", bullets: ["Ce que le client fournit", "Étapes IA, humaines et outils", "Le livrable à la fin"] },
            { title: "Exemple : publications de restaurant", bullets: ["Le patron envoie photos et plats du jour", "L'IA rédige les légendes ; vous vérifiez les faits", "Visuels Canva ; le patron approuve"] },
            { title: "Humain dans la boucle", bullets: ["Vérifiez faits, prix, santé, droit, argent", "Vérifiez tout ce qui porte le nom du client", "L'IA pour la vitesse, vous pour le jugement"] }
          ],
          tryIt: "Décrivez votre service en étapes numérotées. Marquez chacune IA, humain ou outil, et ajoutez une vérification humaine avant la livraison. Notez ce qui entre et le livrable.",
          youCanNow: "concevoir un service assisté par l'IA avec des vérifications humaines claires.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un livrable ?", options: ["L'outil d'IA que vous utilisez", "Le prix", "Le résultat final que reçoit le client", "Votre prompt d'instructions"], answer: 2, why: "Le livrable est ce que le client reçoit à la fin." },
            { objective: "O2", q: "Votre schéma de service envoie directement au client les prix du menu écrits par l'IA. Qu'ajoutez-vous ?", options: ["Rien", "Une deuxième IA pour vérifier la première", "Un outil plus rapide", "Une vérification humaine avant la livraison"], answer: 3, why: "Une personne vérifie les faits et les prix avant que quoi que ce soit parte." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Écrire un prompt d'instructions réutilisable",
          minutes: 6,
          goal: "Écrire un prompt d'instructions que vous pouvez réutiliser pour chaque client.",
          text: [
            "Pour rendre la même qualité à chaque fois, écrivez un prompt d'instructions détaillé et réutilisez-le. Il doit inclure : le rôle (« Tu m'aides à écrire des publications pour de petits restaurants »), les règles (ton, longueur, ce qu'il ne faut jamais faire), le format du résultat, et un emplacement pour les informations de chaque client.",
            "Exemples de règles : « N'invente jamais de prix ni de plats. Utilise seulement les plats du jour que je te donne. Marque tout ce dont tu n'es pas sûr avec [VÉRIFIER]. » Des règles comme celles-ci rendent les erreurs de l'IA plus faciles à repérer.",
            "Beaucoup d'assistants permettent d'enregistrer des instructions personnalisées ou de créer un assistant enregistré avec vos instructions ; regardez dans les paramètres ou les pages d'aide de l'outil. Si le vôtre ne le permet pas, gardez le prompt dans un document et collez-le à chaque fois."
          ],
          steps: ["Écrivez le rôle.", "Écrivez les règles, y compris ce que l'IA ne doit jamais faire.", "Décrivez le format du résultat.", "Ajoutez des [emplacements] pour les informations de chaque client.", "Testez-le sur deux clients fictifs et resserrez les règles."],
          words: [["Prompt d'instructions", "un prompt détaillé et réutilisable qui fixe le rôle, les règles et le format de résultat de l'IA."], ["Emplacement", "un endroit marqué dans le prompt où vous collez les informations de chaque client."]],
          slides: [
            { title: "Un prompt, la même qualité", bullets: ["Rôle", "Règles", "Format du résultat", "[Emplacements] pour les infos client"] },
            { title: "Des règles qui repèrent les erreurs", bullets: ["« N'invente jamais de prix ni de plats. »", "« Utilise seulement les infos que je te donne. »", "« Marque tout doute avec [VÉRIFIER]. »"] },
            { title: "Enregistrez-le", bullets: ["Certains assistants gardent des instructions personnalisées", "Ou gardez-le dans un document et collez-le"] }
          ],
          tryIt: "Écrivez votre prompt d'instructions avec le rôle, les règles, le format et les emplacements. Lancez-le avec les informations de deux clients fictifs et améliorez les règles là où le résultat n'allait pas.",
          youCanNow: "écrire un prompt d'instructions réutilisable qui donne des résultats réguliers pour chaque client.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un emplacement dans un prompt d'instructions ?", options: ["Un blanc que vous remplissez avec les détails de chaque client", "Une règle sur le ton", "Un plan de paiement", "Le nom de l'IA"], answer: 0, why: "Les emplacements permettent de réutiliser un même prompt pour chaque client." },
            { objective: "O3", q: "Votre prompt invente sans cesse des horaires d'ouverture. Que changez-vous ?", options: ["Rien ; corriger à la main à chaque fois", "Ajouter une règle : ne jamais inventer d'horaires ; marquer ce qui est inconnu avec [VÉRIFIER]", "Allonger le rôle", "Retirer la partie sur le format"], answer: 1, why: "Des règles claires empêchent l'IA de répéter les mêmes erreurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir le produit",
        questions: [
          { objective: "O1", q: "Quel est le meilleur point de départ pour un service fondé sur l'IA ?", options: ["Le tout dernier outil d'IA", "Un vrai problème que les gens paient déjà pour régler", "Un nom sympa", "Un logo"], answer: 1, why: "Les produits qui résolvent de vrais problèmes pénibles se vendent." },
          { objective: "O1", q: "À combien de vraies personnes parler avant de construire ?", options: ["Seulement à l'IA", "À aucune", "Seulement à vous-même", "Au moins trois"], answer: 3, why: "De vraies conversations confirment que le problème existe." },
          { objective: "O2", q: "Où une personne doit-elle vérifier le travail de l'IA ?", options: ["Avant que tout ce qui contient des faits, des prix ou le nom du client soit envoyé", "Nulle part", "Seulement tout au début", "Seulement si le client se plaint"], answer: 0, why: "Les vérifications humaines repèrent les erreurs avant qu'elles nuisent au client." },
          { objective: "O3", q: "Quelle règle a sa place dans un prompt d'instructions pour des publications de restaurant ?", options: ["« Utilise les prix que tu veux. »", "« Invente des plats du jour si besoin. »", "« N'invente jamais de prix ni de plats. »", "« Ignore les infos du patron. »"], answer: 2, why: "Les règles qui empêchent d'inventer des faits réduisent les erreurs." },
          { objective: "O2", q: "Qu'est-ce qu'un livrable ?", options: ["Un modèle d'IA", "Un camion de livraison", "La chose finie que le client reçoit", "Un formulaire fiscal"], answer: 2, why: "C'est exactement ce que le client reçoit à la fin." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Tester, fixer le prix et lancer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tester avec trois vraies personnes",
          minutes: 5,
          goal: "Rendre votre service à trois personnes et apprendre ce qu'il faut corriger.",
          text: [
            "Avant de vendre largement, rendez le service complet à trois vraies personnes, gratuitement ou à un prix de test. Repérez : où l'IA s'est trompée, où vous avez passé le plus de temps, et ce que le client a aimé ou n'a pas compris.",
            "Posez trois questions à chaque testeur : « Qu'est-ce qui a été le plus utile ? » « Qu'est-ce qui était confus ou faux ? » « Paieriez-vous pour cela, et combien ? » Notez leurs mots exacts.",
            "Chronométrez chaque étape. Si les vérifications humaines prennent plus de temps que de faire le travail à la main, changez le prompt d'instructions ou les étapes. Corrigez les principaux problèmes, puis testez de nouveau."
          ],
          steps: ["Trouvez trois personnes qui ont le problème.", "Rendez le service complet à chacune.", "Chronométrez chaque étape et notez chaque erreur de l'IA.", "Posez les trois questions et notez les réponses.", "Corrigez les plus gros problèmes et mettez à jour votre prompt."],
          words: [["Testeur", "une vraie personne qui essaie votre produit tôt et donne un avis honnête."], ["Retour", "ce que les gens vous disent sur ce qui a marché et ce qui n'a pas marché."]],
          slides: [
            { title: "Testez avant de vendre", bullets: ["Trois vraies personnes", "Gratuit ou à un prix de test", "Rendez le service complet"] },
            { title: "Repérez", bullets: ["Les erreurs de l'IA", "Les étapes qui prennent le plus de temps", "Ce que les clients ont aimé ou pas compris"] },
            { title: "Posez trois questions", bullets: ["Qu'est-ce qui a été le plus utile ?", "Qu'est-ce qui était confus ou faux ?", "Paieriez-vous, et combien ?"] }
          ],
          tryIt: "Rendez votre service à au moins une vraie personne (trois si possible). Chronométrez chaque étape, notez les erreurs de l'IA, posez les trois questions et écrivez un changement que vous allez faire.",
          youCanNow: "tester un service assisté par l'IA avec de vraies personnes et l'améliorer grâce à leurs retours.",
          quickCheck: [
            { objective: "O4", q: "Que devez-vous noter quand des testeurs vous font des retours ?", options: ["Seulement les commentaires gentils", "Votre propre résumé", "Leurs mots exacts", "Rien ; juste s'en souvenir"], answer: 2, why: "Les mots exacts montrent ce que les clients apprécient vraiment et ce qui les inquiète." },
            { objective: "O4", q: "Deux testeurs disent que le résultat a pris trop de temps. Que faites-vous ?", options: ["Les ignorer", "Augmenter le prix", "Arrêter le service", "Trouver l'étape lente, la modifier et tester de nouveau"], answer: 3, why: "Les tests servent à trouver et corriger les problèmes, puis à tester de nouveau." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fixer le prix de votre service assisté par l'IA",
          minutes: 5,
          goal: "Fixer un prix qui couvre vos coûts et votre temps et qui correspond à ce que les clients paieront.",
          text: [
            "Additionnez vos coûts par client : votre temps (y compris pour vérifier le travail de l'IA), les abonnements aux outils répartis entre les clients, et tout autre coût. Comparez ensuite avec ce que les clients paient aujourd'hui pour d'autres façons de résoudre le problème, et avec ce que les testeurs ont dit qu'ils paieraient.",
            "Ne fixez pas le prix seulement selon la vitesse que vous donne l'IA. Les clients paient pour le résultat et votre jugement, pas pour vos minutes. Une formule (« 12 publications par mois ») est souvent plus facile à vendre qu'un tarif horaire.",
            "Faites-vous aider par l'IA pour les calculs et les idées de formules, mais vérifiez vous-même chaque chiffre dans un tableur. Pour les impôts et l'immatriculation de l'entreprise, consultez des sources officielles comme irs.gov et le service des entreprises de votre État aux États-Unis, l'administration fiscale de votre pays, ou un comptable."
          ],
          steps: ["Listez vos coûts par client, y compris le temps de vérification.", "Trouvez ce que les clients paient aujourd'hui pour d'autres solutions.", "Notez ce que les testeurs ont dit qu'ils paieraient.", "Choisissez une formule et un prix, et vérifiez vous-même les calculs.", "Assurez-vous que le prix couvre vos coûts et laisse quelque chose."],
          words: [["Formule", "un ensemble de travail fixe pour un prix fixe, comme 12 publications par mois."], ["Bénéfice", "ce qui reste après avoir payé tous vos coûts."]],
          slides: [
            { title: "Additionnez vos coûts", bullets: ["Votre temps, y compris vérifier l'IA", "Abonnements répartis entre les clients", "Autres coûts"] },
            { title: "Regardez le marché", bullets: ["Ce que les clients paient pour d'autres solutions", "Ce que les testeurs ont dit qu'ils paieraient"] },
            { title: "Faites payer le résultat", bullets: ["Les clients paient le résultat et le jugement", "Les formules se vendent plus facilement", "Vérifiez vous-même les calculs"] }
          ],
          sources: [{ name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Calculez votre coût par client dans un tableur, comparez avec ce qu'ont dit les testeurs, et fixez le prix d'une formule qui laisse un bénéfice.",
          youCanNow: "fixer le prix d'un service assisté par l'IA qui couvre vos coûts et correspond au marché.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le bénéfice ?", options: ["Ce qui reste après avoir payé tous les coûts", "Le total que paient les clients", "Le coût de l'outil d'IA", "Le temps que vous gagnez"], answer: 0, why: "Le bénéfice est l'argent qui reste une fois tous les coûts couverts." },
            { objective: "O5", q: "Votre prix couvre l'outil d'IA mais pas l'heure que vous passez à vérifier. Que faites-vous ?", options: ["Garder le prix", "Ajouter votre temps de vérification au coût et revoir le prix", "Arrêter de vérifier", "Faire payer plus cher seulement les nouveaux clients"], answer: 1, why: "Le temps de vérification est un vrai coût que le prix doit couvrir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Le décrire honnêtement",
          minutes: 5,
          goal: "Écrire une description de produit qui dit la vérité sur ce que fait l'IA.",
          text: [
            "Les clients vous font plus confiance quand vous êtes clair sur le fonctionnement du service : « Nous utilisons l'IA pour rédiger, et une personne vérifie chaque publication avant qu'elle soit publiée. » Ne prétendez pas que l'IA en fait plus qu'en réalité, ni qu'une personne fait le travail quand c'est l'IA.",
            "La FTC (l'agence américaine de protection des consommateurs) applique les règles de vérité dans la publicité aux affirmations trompeuses sur l'IA. En 2026, elle a finalisé des décisions contre des entreprises qui affirmaient qu'un service marketing par IA écoutait les conversations des gens via des appareils connectés, ce qui était faux. Les affirmations sur ce que fait votre IA, sa précision ou les résultats que les clients obtiendront doivent être vraies et appuyées par des preuves.",
            "Évitez « garanti », « précis à 100 % » et « remplace un avocat/médecin/comptable ». Parlez à un avocat si vous n'êtes pas sûr qu'une affirmation soit autorisée."
          ],
          steps: ["Écrivez avec des mots simples ce que le client reçoit.", "Dites honnêtement où l'IA est utilisée et où une personne vérifie.", "Retirez toute affirmation que vous ne pouvez pas prouver.", "Faites relire par l'IA : « Signale toute affirmation qui pourrait être trompeuse. »", "Demandez à un avocat si vous avez un doute."],
          words: [["Affirmation trompeuse", "une phrase qui donne une fausse idée aux gens, même si chaque mot est techniquement vrai."], ["Preuves", "des tests, des résultats ou des registres qui prouvent une affirmation."]],
          slides: [
            { title: "Expliquez clairement le fonctionnement", bullets: ["« L'IA rédige, une personne vérifie chaque publication »", "N'exagérez pas ce que fait l'IA"] },
            { title: "La FTC et les affirmations sur l'IA", bullets: ["Les règles de vérité en publicité s'appliquent à l'IA", "Décisions de 2026 sur de fausses affirmations marketing", "Les affirmations ont besoin de preuves"] },
            { title: "À éviter", bullets: ["« Garanti » ou « précis à 100 % »", "« Remplace un avocat, un médecin ou un comptable »", "Un doute ? Demandez à un avocat"] }
          ],
          sources: [{ name: "FTC : les bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC : décisions contre Cox Media Group et deux autres sociétés pour des affirmations marketing sur l'IA (2026, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }],
          tryIt: "Tâche finale : écrivez votre description de produit honnête, puis rassemblez votre fiche produit d'une page : problème, livrable, étapes (IA ou humain), prompt d'instructions, résultats des tests, prix et description.",
          youCanNow: "concevoir, tester, fixer le prix et décrire honnêtement un produit ou service assisté par l'IA.",
          quickCheck: [
            { objective: "O6", q: "Quelle affirmation sur le produit est honnête ?", options: ["« Précis à 100 %, garanti »", "« Entièrement automatique, sans intervention humaine » alors qu'une personne vérifie tout", "« L'IA rédige, et une personne vérifie chaque élément avant la livraison »", "« Meilleur que n'importe quel expert humain »"], answer: 2, why: "Elle dit la vérité sur ce que font l'IA et les personnes." },
            { objective: "O6", q: "Vous ne savez pas si une affirmation de votre page de vente est permise. Que faites-vous ?", options: ["La garder et voir ce qui se passe", "La mettre en plus gros", "Demander à l'IA de l'approuver", "La retirer ou vérifier auprès d'un avocat"], answer: 3, why: "En cas de doute, retirez-la ou demandez un avis juridique." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Tester, fixer le prix et lancer",
        questions: [
          { objective: "O4", q: "Quelle question devez-vous poser aux testeurs ?", options: ["« Paieriez-vous pour cela, et combien ? »", "« Quel est votre mot de passe bancaire ? »", "« Pouvez-vous m'écrire un avis contre une remise ? »", "« Aimez-vous l'IA ? »"], answer: 0, why: "Elle vous dit s'il existe un vrai marché et un prix." },
          { objective: "O4", q: "Les vérifications humaines prennent plus de temps que de faire le travail à la main. Que faire ?", options: ["Arrêter de tester", "Retirer toutes les vérifications", "Faire payer moins", "Changer le prompt d'instructions ou les étapes"], answer: 3, why: "Améliorez le processus pour que l'IA fasse vraiment gagner du temps." },
          { objective: "O5", q: "Pour fixer le prix, quel coût oublie-t-on souvent ?", options: ["La couleur du logo", "Le temps passé à vérifier le travail de l'IA", "Le loyer du client", "Les bénéfices de l'entreprise d'IA"], answer: 1, why: "Le temps de vérification est un vrai travail et doit être compté dans le prix." },
          { objective: "O6", q: "Quelle description est honnête ?", options: ["« L'IA rédige, et une personne vérifie chaque publication avant sa sortie. »", "« IA précise à 100 %, garanti. »", "« Remplace votre comptable. »", "« Fait main par notre équipe » quand c'est l'IA"], answer: 0, why: "Elle dit vraiment ce que fait l'IA et ce que fait une personne." },
          { objective: "O6", q: "Selon les règles de la FTC sur les affirmations concernant l'IA, elles doivent être :", options: ["Courtes", "Enthousiasmantes", "Vraies et appuyées par des preuves", "Approuvées par l'outil d'IA"], answer: 2, why: "La vérité dans la publicité s'applique aussi aux affirmations sur l'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des produits et services avec l'IA",
    questions: [
      { objective: "O1", q: "L'erreur la plus courante quand on crée un produit d'IA est :", options: ["Parler aux clients", "Partir de l'IA au lieu d'un problème de clients", "Tester", "Fixer un prix"], answer: 1, why: "Partez du problème, pas de l'outil." },
      { objective: "O1", q: "Les bons problèmes à résoudre sont :", options: ["Ceux pour lesquels personne ne paie", "Rares et vagues", "Seulement les vôtres", "Fréquents, pénibles et précis"], answer: 3, why: "Ces problèmes créent de la demande." },
      { objective: "O1", q: "« Comment le résolvent-ils aujourd'hui ? » vous aide à savoir :", options: ["Rien d'utile", "Leur mot de passe", "Leur âge", "À quoi vous faites concurrence et ce que cela leur coûte"], answer: 3, why: "Les solutions actuelles montrent la valeur de la vôtre." },
      { objective: "O2", q: "Dans l'exemple du restaurant, qui vérifie les prix dans les légendes ?", options: ["Personne", "Une personne", "L'IA se vérifie elle-même", "Les clients du client"], answer: 1, why: "Les prix sont des faits qui demandent une vérification humaine." },
      { objective: "O2", q: "« Humain dans la boucle » veut dire :", options: ["Un cercle sur un graphique", "L'IA remplace toutes les personnes", "Une personne vérifie ou approuve le travail de l'IA avant son utilisation", "Une ligne d'assistance client"], answer: 2, why: "C'est la définition." },
      { objective: "O2", q: "Les entrées de votre description de service sont :", options: ["Ce dont vous avez besoin du client au départ", "Le produit final", "Votre bénéfice", "L'entreprise d'IA"], answer: 0, why: "Les entrées arrivent ; les livrables repartent." },
      { objective: "O3", q: "Un prompt d'instructions contient :", options: ["Vos coordonnées bancaires", "Seulement une salutation", "Le rôle, les règles, le format du résultat et des emplacements", "Une question au hasard"], answer: 2, why: "Ces parties rendent les résultats réguliers." },
      { objective: "O3", q: "Pourquoi ajouter « Marque tout ce dont tu n'es pas sûr avec [VÉRIFIER] » ?", options: ["Cela rend les erreurs de l'IA plus faciles à repérer", "Cela rallonge le texte", "C'est exigé par la loi", "Cela cache les erreurs"], answer: 0, why: "Les marques vous montrent où regarder." },
      { objective: "O3", q: "Si votre outil d'IA ne peut pas enregistrer d'instructions, vous pouvez :", options: ["Abandonner", "Garder le prompt dans un document et le coller à chaque fois", "Le réécrire de mémoire différemment à chaque fois", "Acheter cinq outils"], answer: 1, why: "Un document enregistré le garde identique." },
      { objective: "O4", q: "Tester avec trois vraies personnes vous aide à trouver :", options: ["Rien", "Leurs mots de passe", "De nouveaux logos", "Les erreurs de l'IA, les étapes lentes et ce que les clients apprécient"], answer: 3, why: "Les tests montrent ce qu'il faut corriger avant de vendre." },
      { objective: "O4", q: "Quand les testeurs donnent leur avis, vous devez :", options: ["Noter leurs mots exacts", "Vous disputer avec eux", "L'ignorer", "Leur demander de publier de faux avis"], answer: 0, why: "Les mots exacts montrent ce qui compte vraiment pour eux." },
      { objective: "O4", q: "Après avoir corrigé les problèmes trouvés pendant les tests, vous devez :", options: ["Multiplier le prix par dix", "Ne plus jamais rien changer", "Supprimer le prompt", "Tester de nouveau"], answer: 3, why: "Retester confirme que les corrections ont marché." },
      { objective: "O5", q: "Les clients paient surtout pour :", options: ["Vos abonnements aux outils", "Les minutes que l'IA vous fait gagner", "Le résultat et votre jugement", "Votre logo"], answer: 2, why: "Faites payer le résultat, pas seulement le temps." },
      { objective: "O5", q: "Le prix d'une formule, c'est :", options: ["Des frais de port", "Un ensemble de travail fixe pour un prix fixe", "Un code de réduction", "Une taxe"], answer: 1, why: "Les formules sont faciles à comprendre pour les clients." },
      { objective: "O5", q: "Qui doit vérifier les calculs du prix ?", options: ["Votre concurrent", "Seulement l'IA", "Personne", "Vous, dans un tableur"], answer: 3, why: "Les calculs de l'IA peuvent être faux." },
      { objective: "O5", q: "Le bénéfice, c'est :", options: ["Votre facture d'outils", "Tout l'argent que les clients paient", "Ce qui reste après avoir payé tous les coûts", "Votre prix"], answer: 2, why: "Bénéfice = revenus moins coûts." },
      { objective: "O5", q: "Pour les questions fiscales sur votre nouveau service, consultez :", options: ["Des sources officielles comme irs.gov ou un comptable", "Seulement une conversation avec l'IA", "Un commentaire sur les réseaux sociaux", "Votre client"], answer: 0, why: "Les sources officielles et les professionnels sont fiables." },
      { objective: "O6", q: "Quelle affirmation devez-vous éviter ?", options: ["« Une personne vérifie chaque publication »", "« Précis à 100 %, garanti »", "« 12 publications par mois »", "« Approuvé par vous avant publication »"], answer: 1, why: "Les affirmations absolues sont difficiles à prouver." },
      { objective: "O6", q: "En 2026, la FTC a finalisé des décisions contre des entreprises qui :", options: ["Utilisaient des tableurs", "Faisaient de fausses affirmations sur ce que faisait leur service marketing par IA", "Embauchaient des graphistes", "Payaient leurs impôts à temps"], answer: 1, why: "Elles affirmaient que l'IA écoutait les conversations alors que c'était faux." },
      { objective: "O6", q: "Si vous n'êtes pas sûr qu'une affirmation marketing soit autorisée, vous devez :", options: ["Parler à un avocat", "L'utiliser quand même", "Demander à l'IA et publier ce qu'elle dit", "L'agrandir"], answer: 0, why: "Un avocat peut vous conseiller selon votre situation." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      4,
      5,
      6,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Problème du client",
        objective: "O1",
        notYet: "Le problème est flou ou n'a pas été vérifié avec une vraie personne.",
        meets: "Un problème précis et ce que reçoit le client, vérifiés avec de vraies personnes.",
        exceeds: "Indique comment ils le règlent aujourd'hui et ce que cela leur coûte."
      },
      {
        name: "Étapes et vérifications humaines",
        objective: "O2",
        notYet: "Les étapes ne sont pas marquées, ou rien n'est vérifié avant la livraison.",
        meets: "Des étapes numérotées marquées IA, personne ou outil, avec une vérification humaine avant la livraison.",
        exceeds: "Dit exactement ce que la personne vérifie à chaque point de contrôle."
      },
      {
        name: "Prompt d'instructions",
        objective: "O3",
        notYet: "Il manque des règles ou des emplacements, ou les résultats varient beaucoup.",
        meets: "Rôle, règles, format et emplacements, avec des résultats réguliers.",
        exceeds: "Utilise des marques [VÉRIFIER] et contient des règles ajoutées à partir des erreurs des tests."
      },
      {
        name: "Résultats des tests",
        objective: "O4",
        notYet: "Aucune vraie personne ne l'a testé, ou aucun changement n'a été fait.",
        meets: "Des résultats de tests avec de vraies personnes, leurs propres mots et au moins un changement.",
        exceeds: "Trois personnes l'ont testé et un deuxième test a montré que le changement marchait."
      },
      {
        name: "Prix et description",
        objective: "O6",
        notYet: "Le prix oublie le temps de vérification, ou la description promet trop.",
        meets: "Un prix de forfait qui couvre tous les coûts avec un bénéfice, et une description honnête.",
        exceeds: "Montre les calculs du tableur et dit clairement ce que fait l'IA et ce que fait une personne."
      }
    ]
  },
  evaluation: {
    results: [
      "Les entrepreneurs qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les entrepreneurs qui vendent leur service assisté par l'IA à un premier client payant dans les 30 jours (enquête de suivi)",
      "La satisfaction des clients ou les commandes répétées signalées par les entrepreneurs",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un assistant IA gratuit",
      "Un tableur pour le chronométrage et le prix",
      "L'accès à jusqu'à trois vraies personnes qui ont le problème",
      "Environ 60 à 75 minutes pour les leçons et les vérifications, plus le temps des tests avec de vraies personnes"
    ],
    facilitatorNotes: [
      "Demandez aux apprenants de présenter au groupe le problème choisi avant de construire, et laissez les autres demander à quelle fréquence il se produit.",
      "Formez des binômes où chacun joue le client test de l'autre si de vrais testeurs sont difficiles à trouver, puis faites un suivi avec une vraie personne.",
      "Rappelez aux apprenants de ne pas coller les détails privés des testeurs dans l'IA quand ils peuvent utiliser des espaces réservés.",
      "Relisez chaque description de produit pour repérer les affirmations impossibles à prouver ; envoyez les questions d'impôts et de droit au bon professionnel.",
      "Notez la fiche produit avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
