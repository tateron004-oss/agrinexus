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
  chapters: [
    {
      name: "Chapitre 1 : Concevoir le produit",
      lessons: [
        {
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
          youCanNow: "choisir un vrai problème de clients autour duquel construire un service assisté par l'IA."
        },
        {
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
          youCanNow: "concevoir un service assisté par l'IA avec des vérifications humaines claires."
        },
        {
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
          youCanNow: "écrire un prompt d'instructions réutilisable qui donne des résultats réguliers pour chaque client."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Concevoir le produit",
        questions: [
          { q: "Quel est le meilleur point de départ pour un service fondé sur l'IA ?", options: ["Le tout dernier outil d'IA", "Un vrai problème que les gens paient déjà pour régler", "Un nom sympa", "Un logo"], answer: 1, why: "Les produits qui résolvent de vrais problèmes pénibles se vendent." },
          { q: "À combien de vraies personnes parler avant de construire ?", options: ["Seulement à l'IA", "À aucune", "Seulement à vous-même", "Au moins trois"], answer: 3, why: "De vraies conversations confirment que le problème existe." },
          { q: "Où une personne doit-elle vérifier le travail de l'IA ?", options: ["Avant que tout ce qui contient des faits, des prix ou le nom du client soit envoyé", "Nulle part", "Seulement tout au début", "Seulement si le client se plaint"], answer: 0, why: "Les vérifications humaines repèrent les erreurs avant qu'elles nuisent au client." },
          { q: "Quelle règle a sa place dans un prompt d'instructions pour des publications de restaurant ?", options: ["« Utilise les prix que tu veux. »", "« Invente des plats du jour si besoin. »", "« N'invente jamais de prix ni de plats. »", "« Ignore les infos du patron. »"], answer: 2, why: "Les règles qui empêchent d'inventer des faits réduisent les erreurs." },
          { q: "Qu'est-ce qu'un livrable ?", options: ["Un modèle d'IA", "Un camion de livraison", "La chose finie que le client reçoit", "Un formulaire fiscal"], answer: 2, why: "C'est exactement ce que le client reçoit à la fin." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Tester, fixer le prix et lancer",
      lessons: [
        {
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
          youCanNow: "tester un service assisté par l'IA avec de vraies personnes et l'améliorer grâce à leurs retours."
        },
        {
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
          youCanNow: "fixer le prix d'un service assisté par l'IA qui couvre vos coûts et correspond au marché."
        },
        {
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
          youCanNow: "concevoir, tester, fixer le prix et décrire honnêtement un produit ou service assisté par l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Tester, fixer le prix et lancer",
        questions: [
          { q: "Quelle question devez-vous poser aux testeurs ?", options: ["« Paieriez-vous pour cela, et combien ? »", "« Quel est votre mot de passe bancaire ? »", "« Pouvez-vous m'écrire un avis contre une remise ? »", "« Aimez-vous l'IA ? »"], answer: 0, why: "Elle vous dit s'il existe un vrai marché et un prix." },
          { q: "Les vérifications humaines prennent plus de temps que de faire le travail à la main. Que faire ?", options: ["Arrêter de tester", "Retirer toutes les vérifications", "Faire payer moins", "Changer le prompt d'instructions ou les étapes"], answer: 3, why: "Améliorez le processus pour que l'IA fasse vraiment gagner du temps." },
          { q: "Pour fixer le prix, quel coût oublie-t-on souvent ?", options: ["La couleur du logo", "Le temps passé à vérifier le travail de l'IA", "Le loyer du client", "Les bénéfices de l'entreprise d'IA"], answer: 1, why: "Le temps de vérification est un vrai travail et doit être compté dans le prix." },
          { q: "Quelle description est honnête ?", options: ["« L'IA rédige, et une personne vérifie chaque publication avant sa sortie. »", "« IA précise à 100 %, garanti. »", "« Remplace votre comptable. »", "« Fait main par notre équipe » quand c'est l'IA"], answer: 0, why: "Elle dit vraiment ce que fait l'IA et ce que fait une personne." },
          { q: "Selon les règles de la FTC sur les affirmations concernant l'IA, elles doivent être :", options: ["Courtes", "Enthousiasmantes", "Vraies et appuyées par des preuves", "Approuvées par l'outil d'IA"], answer: 2, why: "La vérité dans la publicité s'applique aussi aux affirmations sur l'IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des produits et services avec l'IA",
    questions: [
      { q: "L'erreur la plus courante quand on crée un produit d'IA est :", options: ["Parler aux clients", "Partir de l'IA au lieu d'un problème de clients", "Tester", "Fixer un prix"], answer: 1, why: "Partez du problème, pas de l'outil." },
      { q: "Les bons problèmes à résoudre sont :", options: ["Ceux pour lesquels personne ne paie", "Rares et vagues", "Seulement les vôtres", "Fréquents, pénibles et précis"], answer: 3, why: "Ces problèmes créent de la demande." },
      { q: "« Comment le résolvent-ils aujourd'hui ? » vous aide à savoir :", options: ["Rien d'utile", "Leur mot de passe", "Leur âge", "À quoi vous faites concurrence et ce que cela leur coûte"], answer: 3, why: "Les solutions actuelles montrent la valeur de la vôtre." },
      { q: "Dans l'exemple du restaurant, qui vérifie les prix dans les légendes ?", options: ["Personne", "Une personne", "L'IA se vérifie elle-même", "Les clients du client"], answer: 1, why: "Les prix sont des faits qui demandent une vérification humaine." },
      { q: "« Humain dans la boucle » veut dire :", options: ["Un cercle sur un graphique", "L'IA remplace toutes les personnes", "Une personne vérifie ou approuve le travail de l'IA avant son utilisation", "Une ligne d'assistance client"], answer: 2, why: "C'est la définition." },
      { q: "Les entrées de votre description de service sont :", options: ["Ce dont vous avez besoin du client au départ", "Le produit final", "Votre bénéfice", "L'entreprise d'IA"], answer: 0, why: "Les entrées arrivent ; les livrables repartent." },
      { q: "Un prompt d'instructions contient :", options: ["Vos coordonnées bancaires", "Seulement une salutation", "Le rôle, les règles, le format du résultat et des emplacements", "Une question au hasard"], answer: 2, why: "Ces parties rendent les résultats réguliers." },
      { q: "Pourquoi ajouter « Marque tout ce dont tu n'es pas sûr avec [VÉRIFIER] » ?", options: ["Cela rend les erreurs de l'IA plus faciles à repérer", "Cela rallonge le texte", "C'est exigé par la loi", "Cela cache les erreurs"], answer: 0, why: "Les marques vous montrent où regarder." },
      { q: "Si votre outil d'IA ne peut pas enregistrer d'instructions, vous pouvez :", options: ["Abandonner", "Garder le prompt dans un document et le coller à chaque fois", "Le réécrire de mémoire différemment à chaque fois", "Acheter cinq outils"], answer: 1, why: "Un document enregistré le garde identique." },
      { q: "Tester avec trois vraies personnes vous aide à trouver :", options: ["Rien", "Leurs mots de passe", "De nouveaux logos", "Les erreurs de l'IA, les étapes lentes et ce que les clients apprécient"], answer: 3, why: "Les tests montrent ce qu'il faut corriger avant de vendre." },
      { q: "Quand les testeurs donnent leur avis, vous devez :", options: ["Noter leurs mots exacts", "Vous disputer avec eux", "L'ignorer", "Leur demander de publier de faux avis"], answer: 0, why: "Les mots exacts montrent ce qui compte vraiment pour eux." },
      { q: "Après avoir corrigé les problèmes trouvés pendant les tests, vous devez :", options: ["Multiplier le prix par dix", "Ne plus jamais rien changer", "Supprimer le prompt", "Tester de nouveau"], answer: 3, why: "Retester confirme que les corrections ont marché." },
      { q: "Les clients paient surtout pour :", options: ["Vos abonnements aux outils", "Les minutes que l'IA vous fait gagner", "Le résultat et votre jugement", "Votre logo"], answer: 2, why: "Faites payer le résultat, pas seulement le temps." },
      { q: "Le prix d'une formule, c'est :", options: ["Des frais de port", "Un ensemble de travail fixe pour un prix fixe", "Un code de réduction", "Une taxe"], answer: 1, why: "Les formules sont faciles à comprendre pour les clients." },
      { q: "Qui doit vérifier les calculs du prix ?", options: ["Votre concurrent", "Seulement l'IA", "Personne", "Vous, dans un tableur"], answer: 3, why: "Les calculs de l'IA peuvent être faux." },
      { q: "Le bénéfice, c'est :", options: ["Votre facture d'outils", "Tout l'argent que les clients paient", "Ce qui reste après avoir payé tous les coûts", "Votre prix"], answer: 2, why: "Bénéfice = revenus moins coûts." },
      { q: "Pour les questions fiscales sur votre nouveau service, consultez :", options: ["Des sources officielles comme irs.gov ou un comptable", "Seulement une conversation avec l'IA", "Un commentaire sur les réseaux sociaux", "Votre client"], answer: 0, why: "Les sources officielles et les professionnels sont fiables." },
      { q: "Quelle affirmation devez-vous éviter ?", options: ["« Une personne vérifie chaque publication »", "« Précis à 100 %, garanti »", "« 12 publications par mois »", "« Approuvé par vous avant publication »"], answer: 1, why: "Les affirmations absolues sont difficiles à prouver." },
      { q: "En 2026, la FTC a finalisé des décisions contre des entreprises qui :", options: ["Utilisaient des tableurs", "Faisaient de fausses affirmations sur ce que faisait leur service marketing par IA", "Embauchaient des graphistes", "Payaient leurs impôts à temps"], answer: 1, why: "Elles affirmaient que l'IA écoutait les conversations alors que c'était faux." },
      { q: "Si vous n'êtes pas sûr qu'une affirmation marketing soit autorisée, vous devez :", options: ["Parler à un avocat", "L'utiliser quand même", "Demander à l'IA et publier ce qu'elle dit", "L'agrandir"], answer: 0, why: "Un avocat peut vous conseiller selon votre situation." }
    ]
  }
};
